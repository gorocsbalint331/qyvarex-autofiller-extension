// @ts-nocheck
/**
 * Keep jr_id in the URL across SPA redirects.
 */

const JR_ID_PARAM = "jr_id"
const DEFAULT_DURATION_MS = 3000
const DEFAULT_INTERVAL_MS = 100
const DEFAULT_MAX_RESTORATIONS = 5

export function keepJobIdInUrl(jobId, options) {
  const durationMs = options.durationMs ?? DEFAULT_DURATION_MS
  const intervalMs = options.intervalMs ?? DEFAULT_INTERVAL_MS
  const maxRestorations = options.maxRestorations ?? DEFAULT_MAX_RESTORATIONS
  const startedAt = Date.now()
  let restorationCount = 0

  const timer = setInterval(() => {
    try {
      if (Date.now() - startedAt > durationMs) {
        clearInterval(timer)
        return
      }
      const url = new URL(window.location.href)
      if (
        url.hostname.toLowerCase() !== options.originalHost.toLowerCase() ||
        (options.allowedPathname && url.pathname !== options.allowedPathname)
      ) {
        clearInterval(timer)
        return
      }
      if (url.searchParams.get(JR_ID_PARAM) === jobId) return
      if (restorationCount >= maxRestorations) {
        clearInterval(timer)
        return
      }
      url.searchParams.set(JR_ID_PARAM, jobId)
      window.history.replaceState(window.history.state, "", url.toString())
      restorationCount += 1
      options.onRestore?.({ pathname: url.pathname, restorationCount })
    } catch {
      clearInterval(timer)
    }
  }, intervalMs)

  return () => clearInterval(timer)
}
