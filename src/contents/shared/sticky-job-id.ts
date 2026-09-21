/** Keep jr_id in the URL across SPA redirects (ported from sticky-job-id). */

const JR_ID_PARAM = "jr_id"

export type KeepJobIdOptions = {
  originalHost: string
  allowedPathname?: string
  durationMs?: number
  intervalMs?: number
  maxRestorations?: number
  onRestore?: (info: { pathname: string; restorationCount: number }) => void
}

export function keepJobIdInUrl(
  jobId: string,
  options: KeepJobIdOptions
): () => void {
  const durationMs = options.durationMs ?? 3000
  const intervalMs = options.intervalMs ?? 100
  const maxRestorations = options.maxRestorations ?? 5
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
