/**
 * Early content-script bootstrap (team fork).
 * Ported from Jobright contents.d42e7fcf.js — activation gate + helper inject.
 */

import type { PlasmoCSConfig } from "plasmo"
import { sendToBackground } from "@plasmohq/messaging"

import {
  removeCloudflareChallengeInjectedHost,
  waitForCloudflareManagedChallengePage
} from "~core/cloudflare-challenge"
import { normalizeEarlyJobrightUrl } from "~contents/shared/early-url-normalization"
import {
  getRuntimeActivationReason,
  observeRuntimeActivationSignals,
  type RuntimeActivationReason
} from "~contents/shared/runtime-activation"
import { keepJobIdInUrl } from "~contents/shared/sticky-job-id"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true,
  run_at: "document_start",
  exclude_matches: [
    "*://*.cloudflare.com/*",
    "https://li.protechts.net/*",
    "https://cs.ns1p.net/*",
    "https://merchantpool1.linkedin.com/*",
    "https://www.googletagmanager.com/*",
    "https://*.fls.doubleclick.net/activityi*",
    "https://lnkd.demdex.net/*",
    "https://www.google.com/recaptcha/enterprise/*",
    "https://crcldu.com/*",
    // Team Autofill Hub — do not inject helper into our own dashboard
    "https://jobright-team-site.vercel.app/*",
    "http://localhost:3210/*",
    "http://127.0.0.1:3210/*"
  ]
}

export const HOST_ID = "jobright-fork-helper-plugin"
const BOOTSTRAP_FLAG = "__jobrightForkHelperBootstrapActive"
const JR_ID_PARAM = "jr_id"
const HELPER_BUNDLE = "assets/helper-app.js"

const initialParams = new URLSearchParams(window.location.search)
export let jobId: string | null = initialParams.get(JR_ID_PARAM)
export const agentTailorId = initialParams.get("a_t_id")
export const agentResumeId = initialParams.get("a_r_id")
export const agentOriginalResume =
  initialParams.get("useOriginalResume") === "true"

export function setCurrentJobId(next: string | null) {
  jobId = next || null
}

let helperStarted = false
let stopObserver: (() => void) | null = null

function waitForDocumentReady(): Promise<void> {
  if (document.readyState !== "loading") return Promise.resolve()
  return new Promise((resolve) => {
    document.addEventListener("DOMContentLoaded", () => resolve(), { once: true })
  })
}

function getCurrentRuntimeActivationReason(): RuntimeActivationReason | null {
  const iframeUrls = Array.from(
    document.querySelectorAll("iframe[src]"),
    (el) => (el as HTMLIFrameElement).src
  )
  const pageSourceUrls = Array.from(
    document.querySelectorAll("script[src], link[href]"),
    (el) =>
      el instanceof HTMLScriptElement
        ? el.src
        : (el as HTMLLinkElement).href
  )
  return getRuntimeActivationReason({
    href: window.location.href,
    isTopFrame: window.top === window.self,
    iframeUrls,
    pageSourceUrls
  })
}

async function injectAndBootstrapHelper(reason: RuntimeActivationReason) {
  if (helperStarted) return
  helperStarted = true
  stopObserver?.()
  stopObserver = null

  console.info("[jobright-fork] helper activation matched", {
    host: window.location.hostname,
    pathname: window.location.pathname,
    frame: window.top === window.self ? "top" : "child",
    reason
  })

  await waitForDocumentReady()

  if (await waitForCloudflareManagedChallengePage()) {
    removeCloudflareChallengeInjectedHost(HOST_ID)
    helperStarted = false
    return
  }

  const bundleUrl = chrome.runtime.getURL(HELPER_BUNDLE)
  const injected = await sendToBackground({
    name: "injectHelperAppBundle",
    body: { bundleUrl }
  })

  if (!injected?.success) {
    console.warn("[jobright-fork] helper inject failed", injected)
    helperStarted = false
    return
  }

  const runtime = (globalThis as any).bootstrapJobrightHelperRuntime
  if (typeof runtime === "function") {
    await runtime()
  }

  window.dispatchEvent(
    new CustomEvent("jobright-fork:helper-injected", { detail: { reason } })
  )
}

function retainInitialJrIdIfPresent() {
  if (window.top !== window.self) return
  try {
    const url = new URL(window.location.href)
    const id = url.searchParams.get(JR_ID_PARAM)?.trim()
    if (!id) return
    const stop = keepJobIdInUrl(id, {
      originalHost: url.hostname,
      durationMs: 10_000,
      intervalMs: 50,
      maxRestorations: 5
    })
    window.addEventListener("pagehide", stop, { once: true })
  } catch (error) {
    console.warn("[jobright-fork] jr_id retention failed", error)
  }
}

function watchForLaterActivation() {
  if (window.top !== window.self) return
  stopObserver = observeRuntimeActivationSignals((reason) => {
    void injectAndBootstrapHelper(reason).catch((error) => {
      console.warn("[jobright-fork] delayed activation failed", error)
    })
  })

  chrome.runtime.onMessage.addListener((message) => {
    if (message?.message !== "urlUpdated") return
    const reason = getCurrentRuntimeActivationReason()
    if (reason) void injectAndBootstrapHelper(reason)
  })
}

;(async function bootstrap() {
  if ((globalThis as any)[BOOTSTRAP_FLAG]) return
  ;(globalThis as any)[BOOTSTRAP_FLAG] = true

  if (window.top === window.self) {
    chrome.runtime.onMessage.addListener((message) => {
      if (message?.message !== "iconClicked") return
      void injectAndBootstrapHelper("extension_icon")
    })
  }

  if (normalizeEarlyJobrightUrl()) return

  retainInitialJrIdIfPresent()
  await waitForDocumentReady()

  const reason = getCurrentRuntimeActivationReason()
  if (!reason) {
    watchForLaterActivation()
    return
  }
  await injectAndBootstrapHelper(reason)
})().catch((error) => {
  console.warn("[jobright-fork] bootstrap failed", error)
})
