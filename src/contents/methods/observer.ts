// @ts-nocheck
/**
 * Wait until a predicate is true (MutationObserver + optional poll fallback).
 */

export const waitForCondition = (condition, options = {}) => {
  const {
    timeout = 2000,
    interval = 50,
    observeTarget,
    observerInit = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    },
    pollFallback = true,
  } = options

  return new Promise((resolve) => {
    if (condition()) {
      resolve(true)
      return
    }

    let settled = false
    const cleanups = []

    function finish(result) {
      if (settled) return
      settled = true
      cleanups.forEach((cleanup) => cleanup())
      resolve(result)
    }

    const timeoutId = setTimeout(() => finish(false), timeout)
    cleanups.push(() => clearTimeout(timeoutId))

    if (observeTarget && typeof MutationObserver === "function") {
      const observer = new MutationObserver(() => {
        if (condition()) finish(true)
      })
      observer.observe(observeTarget, observerInit)
      cleanups.push(() => observer.disconnect())
    }

    if (pollFallback) {
      const intervalId = setInterval(() => {
        if (condition()) finish(true)
      }, interval)
      cleanups.push(() => clearInterval(intervalId))
    }
  })
}
