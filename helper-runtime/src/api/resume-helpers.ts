// @ts-nocheck
/**
 * Cover-letter / resume download and PDF→Word conversion helpers.
 */

import { API_DOMAIN, HOST_DOMAIN } from "./env-resolver.js"

function asObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null
  }
  return value
}

export function extractCoverLetterInfo(payload) {
  const root = asObject(payload)
  const nested = asObject(root?.coverLetter)
  const letter = nested ?? root
  const coverLetterId = letter?.coverLetterId
  const coverLetterName =
    typeof letter?.coverLetterName === "string"
      ? letter.coverLetterName
      : typeof letter?.name === "string"
        ? letter.name
        : ""
  const markdown =
    typeof letter?.markdown === "string" ? letter.markdown : ""
  if (typeof coverLetterId !== "string" || coverLetterId.length === 0) {
    return null
  }
  return { coverLetterId, coverLetterName, markdown }
}

export function resolveFileExtensionFromDisposition(
  contentDisposition,
  fallback = "pdf",
) {
  if (!contentDisposition || !contentDisposition.includes("filename=")) {
    return fallback
  }
  const filename = contentDisposition.match(/filename="?([^"]+)"?/)?.[1]
  const ext = filename?.split(".").pop()?.toLowerCase()
  return ext || fallback
}

export function buildCurrentCoverLetterUrl(apiDomain, jobId) {
  const params = new URLSearchParams({ jobId })
  return `${apiDomain}/swan/orion/get-cover-letter?${params.toString()}`
}

function normalizeParamKey(key) {
  return key.toLowerCase().replace(/[^a-z0-9]/g, "")
}

export function extractAgentCoverLetterId(url) {
  const params = new URL(url).searchParams
  for (const [key, value] of params.entries()) {
    if (normalizeParamKey(key).includes("agentcoverletterid")) {
      const trimmed = value.trim()
      return trimmed || null
    }
  }
  return null
}

export function buildAgentCoverLetterViewUrl(apiDomain, coverLetterId) {
  const params = new URLSearchParams({ coverLetterId })
  return `${apiDomain}/swan/agent/cover-letter/view?${params.toString()}`
}

function toPdfFile(blob, fileName) {
  const name = fileName.toLowerCase().endsWith(".pdf")
    ? fileName
    : `${fileName.replace(/\.[^/.]+$/, "")}.pdf`
  return new File([blob], name, {
    type: blob.type || "application/pdf",
    lastModified: Date.now(),
  })
}

function buildPdfFormData(blob, fileName) {
  const form = new FormData()
  const file = toPdfFile(blob, fileName)
  form.append("file", file, file.name)
  return form
}

async function postPdfConversion(url, blob, fileName) {
  return fetch(url, {
    method: "POST",
    body: buildPdfFormData(blob, fileName),
    credentials: "include",
  })
}

export async function convertPdfBlobToWordFile(blob, fileName) {
  try {
    const foxit = await postPdfConversion(
      `${API_DOMAIN}/foxit/pdf-to-docx`,
      blob,
      fileName,
    )
    if (foxit.ok) return foxit
  } catch {
    // fall through to swan endpoint
  }
  const swan = await postPdfConversion(
    `${API_DOMAIN}/swan/resume/pdf-to-doc`,
    blob,
    fileName,
  )
  if (!swan.ok) {
    throw new Error("Failed to convert pdf to word")
  }
  return swan
}

export async function downloadOrionCoverLetterPdf(markdown) {
  const response = await fetch(
    `${HOST_DOMAIN}/api/cover-letter/orion/download`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ markdown }),
      credentials: "include",
    },
  )
  if (!response.ok) {
    throw new Error("Failed to download orion cover letter pdf")
  }
  return response
}

export function shouldUseLegacyAgentCoverLetterDownload(url) {
  return !!extractAgentCoverLetterId(url)
}
