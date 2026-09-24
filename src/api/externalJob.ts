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
  let done = false
  const finish = (callback) => {
    if (done) return
    done = true
    clearInterval(intervalId)
    clearTimeout(timeoutId)
    callback()
  }
  const tick = async () => {
    if (done) return
    const result = await api()
    if (!result || done) return
    if (checkSuccess(result)) finish(onSuccess)
    else if (checkFailed(result)) finish(onError)
  }

  const intervalId = setInterval(tick, 5000)
  const timeoutId = setTimeout(() => finish(onError), 30000)
  tick()
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
