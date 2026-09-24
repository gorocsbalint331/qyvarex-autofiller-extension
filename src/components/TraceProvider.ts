// @ts-nocheck
/**
 * LinkedIn job-list / job-detail page tracing with encrypted job id payloads.
 */

import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import CryptoJS from "crypto-js"
import { debounce, isEqual } from "lodash-es"
import { useEffect, useRef } from "react"
import { getOrderedNodes } from "../core/xpath.ts"
import { useUrlStore } from "../store/url.ts"
import {
  isLinkedinDomain,
  isLinkedinJobDetailPage,
  isLinkedinJobListPage,
} from "../utils/checkLinkedin.ts"
import { trackEvent } from "../utils/trace.ts"

const RSA_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAjnH9Zxlsa14cDWiab8PX
xp96nUwbHizgCht2RVqti0hJ5PEd7kUpnsBFBmPpGmBcojXz+gpbR5W7JI7vA/D5
eahZVlhTBHblmSFyp48PKYuRyuKiVt9OotPOZRJQ3n6rH+xP88rWlj//QIz9vaGi
bP8tiEI6MEPvEnIP+wH4g+AgjyEN56l++LR2qg8TQFcwtnTYg85q19iflYxrlYUF
QocpSTaylBxfCrSeRlIGbPXZpNxmDEpLQ91RSIK2lJsEh4HP3tPGRD29/Lvl054T
v7dEd72LZx7CBsv+/w/3DOfqZDQgWL95zMebJAJjFwJGD9CHhWs1ZmZC+xjetpY5
vUSp5FmfMRdebswSWih336lkGKvhnS+lkh2AyyUyYWyjs4lsznwvnlowO9Vivx/a
pA3bLD9TlTlFIg/nBkf3M+ND7A313Wvc3jY6SvHcV6Kuu57YXYvZCPYj4Q/QFCoP
b3ACW+/5jbU0f8TPBZgsRcET3XVG5Kq4DSRtffMhwCPvBjj++thieKfckOGPz3aL
dt7K76gahxmxbani0aQdMqFBUfJ7tQDWjjj92l9hJ/HD1/7EgYLMd5IgovmA2uVY
6O6jBFzoO8vLB5zg3lVVkK2tYFks2Bq+0XhxmJN5lq/KKW6KwazrRlAa+AqBZihA
pBX5msEhXmSqEoOa9O4xLl0CAwEAAQ==
-----END PUBLIC KEY-----`

export default function TraceProvider({ children }) {
  return jsxs(Fragment, {
    children: [jsx(LinkedinTraceEffect, {}), children],
  })
}

function LinkedinTraceEffect() {
  const seenJobIdsRef = useRef(new Set())
  const detailJobIdRef = useRef(null)
  const currentTabUrl = useUrlStore((state) => state.currentTabUrl)

  useEffect(() => {
    if (
      window.self !== window.top ||
      !isLinkedinDomain(currentTabUrl) ||
      !isLinkedinJobDetailPage(currentTabUrl)
    ) {
      return
    }

    const trackDetailPage = async () => {
      const match = currentTabUrl.match(/\/jobs\/view\/(\d+)/)
      if (match && match[1] && !isEqual(match[1], detailJobIdRef.current)) {
        detailJobIdRef.current = match[1]
        trackEvent(
          "li_trace",
          await encryptTracePayload({
            url: window.location.href,
            jobIds: Array.from([match[1]]),
            ivSeed: "ivSeed123",
          }),
        )
      }
    }

    trackDetailPage()
  }, [currentTabUrl])

  useEffect(() => {
    if (
      window.self !== window.top ||
      !isLinkedinDomain(currentTabUrl) ||
      !isLinkedinJobListPage(currentTabUrl)
    ) {
      return
    }

    const onDomChange = debounce(async () => {
      const jobIds = collectLinkedinListJobIds()
      if (jobIds.size > 0 && !isEqual(jobIds, seenJobIdsRef.current)) {
        seenJobIdsRef.current = jobIds
        trackEvent(
          "li_trace",
          await encryptTracePayload({
            url: window.location.href,
            jobIds: Array.from(jobIds),
            ivSeed: "ivSeed123",
          }),
        )
      }
    }, 500)

    const observer = new MutationObserver(onDomChange)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [currentTabUrl])

  return jsx(Fragment, {})
}

function collectLinkedinListJobIds() {
  const jobIds = new Set()
  const nodes = getOrderedNodes("//li[@data-occludable-job-id]")
  if (nodes.length !== 0) {
    for (const node of nodes) {
      jobIds.add(node.getAttribute("data-occludable-job-id"))
    }
  }
  return jobIds
}

async function encryptTracePayload({ url, jobIds, ivSeed }) {
  try {
    const aesKey = await window.crypto.subtle.generateKey(
      {
        name: "AES-CBC",
        length: 256,
      },
      true,
      ["encrypt", "decrypt"],
    )

    const publicKey = await window.crypto.subtle.importKey(
      "spki",
      pemToArrayBuffer(RSA_PUBLIC_KEY),
      {
        name: "RSA-OAEP",
        hash: "SHA-256",
      },
      true,
      ["encrypt"],
    )

    const rawAesKey = await window.crypto.subtle.exportKey("raw", aesKey)
    const encryptedKey = await window.crypto.subtle.encrypt(
      {
        name: "RSA-OAEP",
      },
      publicKey,
      rawAesKey,
    )

    const md5 = CryptoJS.MD5(ivSeed)
    const iv = new Uint8Array(
      md5.words.flatMap((word) => [
        (word >> 24) & 255,
        (word >> 16) & 255,
        (word >> 8) & 255,
        word & 255,
      ]),
    )

    const plaintext = new TextEncoder().encode(JSON.stringify(jobIds))
    const encryptedData = await window.crypto.subtle.encrypt(
      {
        name: "AES-CBC",
        iv,
      },
      aesKey,
      plaintext,
    )

    return {
      url,
      data: arrayBufferToBase64(encryptedData),
      key: arrayBufferToBase64(encryptedKey),
      iv: ivSeed,
    }
  } catch (error) {
    throw (console.error("Encryption failed:", error), error)
  }
}

function arrayBufferToBase64(buffer) {
  let binary = ""
  const bytes = new Uint8Array(buffer)
  const length = bytes.byteLength
  for (let index = 0; index < length; index++) {
    binary += String.fromCharCode(bytes[index])
  }
  return window.btoa(binary)
}

function pemToArrayBuffer(pem) {
  const b64 = pem
    .replace("-----BEGIN PUBLIC KEY-----", "")
    .replace("-----END PUBLIC KEY-----", "")
    .replace(/\s/g, "")
  const binary = window.atob(b64)
  const length = binary.length
  const bytes = new Uint8Array(length)
  for (let index = 0; index < length; index++) {
    bytes[index] = binary.charCodeAt(index)
  }
  return bytes.buffer
}
