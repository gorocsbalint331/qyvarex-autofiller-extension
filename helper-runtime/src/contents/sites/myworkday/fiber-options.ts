// @ts-nocheck
/**
 * MyWorkday — read select options via main-world Fiber bridge.
 */

import * as messaging from "@plasmohq/messaging"

const SELECT_OPTIONS_REQUEST = "__jr_workday_select_options_request"
const SELECT_OPTIONS_RESPONSE = "__jr_workday_select_options_response"

let fiberInjected = false

async function ensureWorkdayFiberInjected() {
  if (fiberInjected) return true
  if (
    typeof window !== "undefined" &&
    window.__jr_workday_fiber_injected
  ) {
    fiberInjected = true
    return true
  }
  try {
    await messaging.sendToBackground({ name: "injectWorkdayFiber" })
    fiberInjected = true
    return true
  } catch (error) {
    console.warn(
      "[WorkdayFiber] failed to inject main world script:",
      error,
    )
    return false
  }
}

async function getWorkdaySelectOptionsViaFiber(input) {
  if (
    typeof document === "undefined" ||
    typeof document.addEventListener !== "function" ||
    typeof document.dispatchEvent !== "function" ||
    typeof CustomEvent !== "function"
  ) {
    return []
  }

  const injected = await ensureWorkdayFiberInjected()
  if (!injected) return []

  const fiberId = `__jr_wd_options_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  input.setAttribute("data-jr-wd-fiber-id", fiberId)
  const selector = `[data-jr-wd-fiber-id="${fiberId}"]`
  const requestId = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`

  return new Promise((resolve) => {
    const cleanup = () => {
      document.removeEventListener(SELECT_OPTIONS_RESPONSE, onResponse)
      input.removeAttribute("data-jr-wd-fiber-id")
    }
    const timeoutId = setTimeout(() => {
      cleanup()
      resolve([])
    }, 1000)

    function onResponse(event) {
      const detail = event.detail
      if (detail?.requestId !== requestId) return
      clearTimeout(timeoutId)
      cleanup()
      resolve(
        Array.isArray(detail?.options)
          ? detail.options.filter(
              (option) =>
                typeof option === "string" && option.trim().length > 0,
            )
          : [],
      )
    }

    document.addEventListener(SELECT_OPTIONS_RESPONSE, onResponse)
    document.dispatchEvent(
      new CustomEvent(SELECT_OPTIONS_REQUEST, {
        detail: { selector, requestId },
      }),
    )
  })
}

export { getWorkdaySelectOptionsViaFiber }
