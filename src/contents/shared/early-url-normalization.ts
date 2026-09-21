/** Early URL normalization for GoHire / Life at TikTok (ported). */

export const JR_ID_PARAM = "jr_id"
const GOHIRE_HOST = "jobs.gohire.io"
const GOHIRE_JOB_PATH = /^\/[^/]+\/.+-\d+\/?$/
const LIFE_AT_TIKTOK_HOST = "lifeattiktok.com"
const LIFE_AT_TIKTOK_SEARCH_PATH = /^\/search\/\d+\/?$/

function isLifeAtTikTokJobSearchUrl(url: URL): boolean {
  const hostname = url.hostname.toLowerCase()
  const isLifeAtTikTok =
    hostname === LIFE_AT_TIKTOK_HOST ||
    hostname.endsWith(`.${LIFE_AT_TIKTOK_HOST}`)
  return isLifeAtTikTok && LIFE_AT_TIKTOK_SEARCH_PATH.test(url.pathname)
}

export function buildLifeAtTikTokApplyUrl(
  currentHref: string,
  anchorHref: string,
  jobId: string
): string | null {
  const trimmedJobId = jobId.trim()
  if (!trimmedJobId) return null

  let currentUrl: URL
  let applyUrl: URL
  try {
    currentUrl = new URL(currentHref)
    applyUrl = new URL(anchorHref)
  } catch {
    return null
  }

  const searchJobId = /^\/search\/(\d+)\/?$/.exec(currentUrl.pathname)?.[1]
  const applyJobId = /^\/resume\/(\d+)\/apply\/?$/.exec(applyUrl.pathname)?.[1]

  if (
    !isLifeAtTikTokJobSearchUrl(currentUrl) ||
    applyUrl.hostname.toLowerCase() !== "careers.tiktok.com" ||
    !searchJobId ||
    applyJobId !== searchJobId ||
    applyUrl.searchParams.has(JR_ID_PARAM)
  ) {
    return null
  }

  applyUrl.searchParams.set(JR_ID_PARAM, trimmedJobId)
  return applyUrl.toString()
}

export function shouldRetainLifeAtTikTokJobDetailJrId(href: string): boolean {
  try {
    const url = new URL(href)
    return (
      isLifeAtTikTokJobSearchUrl(url) &&
      !!url.searchParams.get(JR_ID_PARAM)?.trim()
    )
  } catch {
    return false
  }
}

export function shouldKeepLifeAtTikTokApplyBridge(
  originalHref: string,
  currentHref: string
): boolean {
  try {
    const originalUrl = new URL(originalHref)
    const currentUrl = new URL(currentHref)
    const jobId = originalUrl.searchParams.get(JR_ID_PARAM)?.trim()
    return (
      !!jobId &&
      originalUrl.hostname.toLowerCase() === currentUrl.hostname.toLowerCase() &&
      originalUrl.pathname === currentUrl.pathname &&
      currentUrl.searchParams.get(JR_ID_PARAM)?.trim() === jobId &&
      isLifeAtTikTokJobSearchUrl(currentUrl)
    )
  } catch {
    return false
  }
}

export function shouldRecoverLifeAtTikTokJobDetailJrId(href: string): boolean {
  try {
    const url = new URL(href)
    return isLifeAtTikTokJobSearchUrl(url) && !url.searchParams.has(JR_ID_PARAM)
  } catch {
    return false
  }
}

export function buildLifeAtTikTokRecoveredUrl(
  href: string,
  jobId: string
): string | null {
  const trimmedJobId = jobId.trim()
  if (!trimmedJobId || !shouldRecoverLifeAtTikTokJobDetailJrId(href)) return null
  const url = new URL(href)
  url.searchParams.set(JR_ID_PARAM, trimmedJobId)
  return url.toString()
}

export function buildNormalizedEarlyUrl(href: string): string | null {
  try {
    const url = new URL(href)
    if (
      url.hostname.toLowerCase() !== GOHIRE_HOST ||
      !url.searchParams.has(JR_ID_PARAM) ||
      !url.pathname.endsWith("/") ||
      !GOHIRE_JOB_PATH.test(url.pathname)
    ) {
      return null
    }
    url.pathname = url.pathname.replace(/\/+$/, "")
    const normalized = url.toString()
    return normalized === href ? null : normalized
  } catch {
    return null
  }
}

export function normalizeEarlyJobrightUrl(win: Window = window): boolean {
  const normalized = buildNormalizedEarlyUrl(win.location.href)
  if (!normalized) return false
  win.location.replace(normalized)
  return true
}
