// @ts-nocheck
/**
 * External job import / status / markdown parse API.
 */

import { API_DOMAIN } from "./env-resolver.js"

export function pollingExternalJob({
  api,
  checkSuccess,
  checkFailed,
  onSuccess,
  onError,
}) {
  const intervalId = setInterval(async () => {
    const result = await api()
    if (!result) return
    if (checkSuccess(result)) {
      onSuccess()
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
    if (checkFailed(result)) {
      onError()
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
  }, 5000)

  const timeoutId = setTimeout(() => {
    if (intervalId) clearInterval(intervalId)
    clearTimeout(timeoutId)
    onError()
  }, 30000)
}

export async function fetchImportExternalJobStatus(jobId) {
  const response = await fetch(
    `${API_DOMAIN}/swan/import/status?jobId=${jobId}`,
    { method: "GET" },
  )
  if (!response.ok) return
  const body = await response.json()
  return body?.result
}

export async function parsePageMarkdown(payload) {
  const response = await fetch(`${API_DOMAIN}/swan/autofill/external-job`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
  if (!response.ok) {
    throw new Error(`Failed to parse page: ${response.statusText}`)
  }
  const body = await response.json()
  return body?.result ?? null
}

export async function importExternalJob(payload) {
  const response = await fetch(`${API_DOMAIN}/swan/import/job`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
  if (!response.ok) {
    throw new Error(`Failed to import job: ${response.statusText}`)
  }
  const body = await response.json()
  return body?.result
}
