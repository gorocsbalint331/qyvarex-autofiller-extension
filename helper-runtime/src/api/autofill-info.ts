// @ts-nocheck
/**
 * Autofill-info API response helpers (revision / save / conflict / parse).
 */

function asObject(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return null
  }
  return value
}

export function isAutofillInfoRevision(value) {
  return (
    typeof value === "number" &&
    Number.isSafeInteger(value) &&
    value >= 0
  )
}

export function isAutofillInfoSaveSuccess(payload) {
  const body = asObject(payload)
  return (
    body?.success === true &&
    body?.result === true &&
    (body.status === undefined ||
      (body.status >= 200 && body.status < 300))
  )
}

export function isAutofillInfoConflict(payload) {
  const body = asObject(payload)
  return body?.status === 409 || body?.errorCode === 409
}

export async function parseAutofillInfoSaveResponse(response) {
  const body = asObject(await response.json().catch(() => null))
  if (response.ok && isAutofillInfoSaveSuccess(body)) {
    return body
  }
  const rejected = {
    success: false,
    status: response.status,
    ...(typeof body?.errorCode === "number" && Number.isFinite(body.errorCode)
      ? { errorCode: body.errorCode }
      : {}),
  }
  console.warn("[autofill-info] write rejected", rejected)
  return rejected
}

export async function parseAutofillInfoGetResponse(response) {
  const body = asObject(await response.json().catch(() => null))
  if (!response.ok || body?.success !== true || !asObject(body.result)) {
    console.warn("[autofill-info] read rejected", {
      status: response.status,
      success: body?.success === true,
    })
    throw new Error("Failed to fetch autofill information")
  }
  return body
}
