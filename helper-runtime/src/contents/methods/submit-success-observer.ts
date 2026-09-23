// @ts-nocheck
/**
 * Wait for a submit-success marker to appear in the DOM (xpath + MutationObserver).
 */

import { getOrderedNodesSafe } from "../../core/xpath.ts"

const DEFAULT_TIMEOUT_MS = 30000
const DEBOUNCE_MS = 100

export function waitForSubmitSuccess(xpaths, options = {}) {
  const {
    timeout = DEFAULT_TIMEOUT_MS,
    signal,
    matchExisting = false,
  } = options

  return new Promise((resolve) => {
    if (
      !xpaths ||
      xpaths.length === 0 ||
      typeof document === "undefined" ||
      !document.body ||
      signal?.aborted
    ) {
      resolve(false)
      return
    }

    const seenBefore = new WeakSet()
    if (!matchExisting) {
      for (const xpath of xpaths) {
        for (const node of getOrderedNodesSafe(xpath)) {
          if (node) seenBefore.add(node)
        }
      }
    }

    let settled = false
    let debounceId = null
    let timeoutId = null
    let observer = null

    function cleanup() {
      if (observer) {
        observer.disconnect()
        observer = null
      }
      if (debounceId !== null) {
        clearTimeout(debounceId)
        debounceId = null
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      signal?.removeEventListener("abort", onAbort)
    }

    function finish(result) {
      if (settled) return
      settled = true
      cleanup()
      resolve(result)
    }

    function hasNewMatch() {
      for (const xpath of xpaths) {
        const nodes = getOrderedNodesSafe(xpath)
        for (const node of nodes) {
          if (node && !seenBefore.has(node)) return true
        }
      }
      return false
    }

    function onAbort() {
      finish(false)
    }

    if (signal) {
      signal.addEventListener("abort", onAbort, { once: true })
    }

    if (matchExisting && hasNewMatch()) {
      resolve(true)
      return
    }

    timeoutId = setTimeout(() => finish(false), timeout)
    observer = new MutationObserver(() => {
      if (debounceId === null) {
        debounceId = setTimeout(() => {
          debounceId = null
          if (!settled && hasNewMatch()) finish(true)
        }, DEBOUNCE_MS)
      }
    })

    try {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      })
    } catch {
      finish(false)
    }
  })
}
