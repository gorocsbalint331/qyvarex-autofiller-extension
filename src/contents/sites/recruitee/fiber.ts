// @ts-nocheck
/**
 * Recruitee — Fiber bridge for phone-country read/select.
 */

import * as messaging from "@plasmohq/messaging"

const REQUEST_EVENT = "__jr_recruitee_phone_country_request"
const RESPONSE_EVENT = "__jr_recruitee_phone_country_response"
const FIBER_ID_ATTR = "data-jr-recruitee-phone-fiber-id"
const DEFAULT_TIMEOUT_MS = 1500
const POST_SELECT_SETTLE_MS = 100

async function injectRecruiteeFiber() {
  return messaging.sendToBackground({ name: "injectRecruiteeFiber" })
}

function createRequestId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

function parseFiberResponse(detail) {
  if (!detail || typeof detail !== "object" || Array.isArray(detail)) {
    return null
  }

  const raw = detail
  if (typeof raw.success !== "boolean") return null

  const parsed = { success: raw.success }

  for (const key of ["requestId", "currentIso2", "targetIso2", "error"]) {
    const value = raw[key]
    if (value !== undefined) {
      if (typeof value !== "string") return null
      if (key === "requestId") parsed.requestId = value
      if (key === "currentIso2") parsed.currentIso2 = value.trim().toUpperCase()
      if (key === "targetIso2") parsed.targetIso2 = value.trim().toUpperCase()
      if (key === "error") parsed.error = value.trim()
    }
  }

  if (raw.changed !== undefined) {
    if (typeof raw.changed !== "boolean") return null
    parsed.changed = raw.changed
  }

  if (raw.options !== undefined) {
    if (!Array.isArray(raw.options)) return null
    const options = []
    for (const option of raw.options) {
      if (!option || typeof option !== "object" || Array.isArray(option)) {
        return null
      }
      const rawOption = option
      if (
        typeof rawOption.iso2 !== "string" ||
        typeof rawOption.countryName !== "string" ||
        typeof rawOption.dialCode !== "string"
      ) {
        return null
      }
      const normalized = {
        iso2: rawOption.iso2.trim().toUpperCase(),
        countryName: rawOption.countryName.trim(),
        dialCode: rawOption.dialCode.trim(),
      }
      if (
        !normalized.iso2 ||
        !normalized.countryName ||
        !normalized.dialCode
      ) {
        return null
      }
      options.push(normalized)
    }
    parsed.options = options
  }

  return parsed
}

async function requestRecruiteePhoneFiber(
  element,
  payload,
  injectFn = injectRecruiteeFiber,
  timeoutMs = DEFAULT_TIMEOUT_MS,
) {
  if (
    typeof document === "undefined" ||
    typeof document.addEventListener !== "function" ||
    typeof document.dispatchEvent !== "function" ||
    typeof CustomEvent !== "function"
  ) {
    return { success: false, error: "Recruitee Fiber DOM bridge unavailable" }
  }

  try {
    const injectResult = await injectFn()
    if (injectResult?.success === false) {
      return { success: false, error: "Recruitee Fiber injection failed" }
    }
  } catch (error) {
    return {
      success: false,
      error: `Recruitee Fiber injection failed: ${error}`,
    }
  }

  const requestId = createRequestId()
  const fiberId = `__jr_recruitee_phone_${requestId}`
  element.setAttribute(FIBER_ID_ATTR, fiberId)
  const selector = `[${FIBER_ID_ATTR}="${fiberId}"]`

  return new Promise((resolve) => {
    const cleanup = () => {
      document.removeEventListener(RESPONSE_EVENT, onResponse)
      element.removeAttribute(FIBER_ID_ATTR)
    }

    const timeoutId = setTimeout(() => {
      cleanup()
      resolve({
        success: false,
        requestId,
        error: "Recruitee phone country Fiber request timeout",
      })
    }, Math.max(0, timeoutMs))

    function onResponse(event) {
      const parsed = parseFiberResponse(event.detail)
      if (parsed?.requestId === requestId) {
        clearTimeout(timeoutId)
        cleanup()
        resolve(parsed)
      }
    }

    document.addEventListener(RESPONSE_EVENT, onResponse)
    document.dispatchEvent(
      new CustomEvent(REQUEST_EVENT, {
        detail: { ...payload, selector, requestId },
      }),
    )
  })
}

function getRecruiteePhoneCountriesViaFiber(
  element,
  injectFn,
  timeoutMs = DEFAULT_TIMEOUT_MS,
) {
  return requestRecruiteePhoneFiber(
    element,
    { action: "read" },
    injectFn,
    timeoutMs,
  )
}

function escapeCssSelector(value) {
  return typeof CSS !== "undefined" && typeof CSS.escape === "function"
    ? CSS.escape(value)
    : value.replace(/([ #;?%&,.+*~':"!^$[\]()=>|/@])/g, "\\$1")
}

async function selectRecruiteePhoneCountryViaFiber(
  element,
  targetIso2,
  injectFn,
  timeoutMs = DEFAULT_TIMEOUT_MS,
) {
  const iso2 = targetIso2.trim().toUpperCase()
  const selectResult = await requestRecruiteePhoneFiber(
    element,
    { action: "select", targetIso2: iso2 },
    injectFn,
    timeoutMs,
  )
  if (!selectResult.success) return selectResult

  await new Promise((resolve) => setTimeout(resolve, POST_SELECT_SETTLE_MS))

  const liveButton = element.id
    ? document.querySelector(`#${escapeCssSelector(element.id)}`)
    : null
  if (!liveButton) {
    return {
      ...selectResult,
      success: false,
      error: "live Recruitee phone country button not found",
    }
  }

  const verifyResult = await getRecruiteePhoneCountriesViaFiber(
    liveButton,
    injectFn,
    timeoutMs,
  )
  return verifyResult.success &&
    verifyResult.currentIso2?.toUpperCase() === iso2
    ? {
        ...selectResult,
        currentIso2: verifyResult.currentIso2,
        options: verifyResult.options,
      }
    : {
        ...selectResult,
        success: false,
        currentIso2: verifyResult.currentIso2,
        options: verifyResult.options,
        error:
          verifyResult.error ||
          `Recruitee phone country verification failed for ${iso2}`,
      }
}

export {
  getRecruiteePhoneCountriesViaFiber,
  requestRecruiteePhoneFiber,
  selectRecruiteePhoneCountryViaFiber,
}
