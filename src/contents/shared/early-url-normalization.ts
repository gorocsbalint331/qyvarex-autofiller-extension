// @ts-nocheck
/**
 * Early URL normalization for GoHire trailing-slash and LifeAtTikTok jr_id bridges.
 */

const JR_ID_PARAM = "jr_id"
const GOHIRE_HOST = "jobs.gohire.io"
const GOHIRE_JOB_PATH = /^\/[^/]+\/.+-\d+\/?$/
const LIFE_AT_TIKTOK_HOST = "lifeattiktok.com"
const LIFE_AT_TIKTOK_SEARCH_PATH = /^\/search\/\d+\/?$/

function isLifeAtTikTokJobDetail(url) {
  const hostname = url.hostname.toLowerCase()
  const isLifeAtTikTok =
    hostname === LIFE_AT_TIKTOK_HOST ||
    hostname.endsWith(`.${LIFE_AT_TIKTOK_HOST}`)
  return isLifeAtTikTok && LIFE_AT_TIKTOK_SEARCH_PATH.test(url.pathname)
}

export function buildLifeAtTikTokApplyUrl(fromHref, toHref, jobId) {
  const trimmedJobId = jobId.trim()
  if (!trimmedJobId) return null

  let fromUrl
  let toUrl
  try {
    fromUrl = new URL(fromHref)
    toUrl = new URL(toHref)
  } catch {
    return null
  }

  const fromJobId = /^\/search\/(\d+)\/?$/.exec(fromUrl.pathname)?.[1]
  const toJobId = /^\/resume\/(\d+)\/apply\/?$/.exec(toUrl.pathname)?.[1]

  if (
    !isLifeAtTikTokJobDetail(fromUrl) ||
    toUrl.hostname.toLowerCase() !== "careers.tiktok.com" ||
    !fromJobId ||
    toJobId !== fromJobId ||
    toUrl.searchParams.has(JR_ID_PARAM)
  ) {
    return null
  }

  toUrl.searchParams.set(JR_ID_PARAM, trimmedJobId)
  return toUrl.toString()
}

export function shouldRetainLifeAtTikTokJobDetailJrId(href) {
  let url
  try {
    url = new URL(href)
  } catch {
    return false
  }
  return isLifeAtTikTokJobDetail(url) && !!url.searchParams.get(JR_ID_PARAM)?.trim()
}

export function shouldKeepLifeAtTikTokApplyBridge(fromHref, toHref) {
  let fromUrl
  let toUrl
  try {
    fromUrl = new URL(fromHref)
    toUrl = new URL(toHref)
  } catch {
    return false
  }
  const jobId = fromUrl.searchParams.get(JR_ID_PARAM)?.trim()
  return (
    !!jobId &&
    fromUrl.hostname.toLowerCase() === toUrl.hostname.toLowerCase() &&
    fromUrl.pathname === toUrl.pathname &&
    toUrl.searchParams.get(JR_ID_PARAM)?.trim() === jobId &&
    isLifeAtTikTokJobDetail(toUrl)
  )
}

export function shouldRecoverLifeAtTikTokJobDetailJrId(href) {
  let url
  try {
    url = new URL(href)
  } catch {
    return false
  }
  return isLifeAtTikTokJobDetail(url) && !url.searchParams.has(JR_ID_PARAM)
}

export function buildLifeAtTikTokRecoveredUrl(href, jobId) {
  const trimmedJobId = jobId.trim()
  if (!trimmedJobId || !shouldRecoverLifeAtTikTokJobDetailJrId(href)) {
    return null
  }
  const url = new URL(href)
  url.searchParams.set(JR_ID_PARAM, trimmedJobId)
  return url.toString()
}

export function buildNormalizedEarlyUrl(href) {
  let url
  try {
    url = new URL(href)
  } catch {
    return null
  }
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
}

export function shouldResolveGoHireDroppedJobIdUrl(href) {
  let url
  try {
    url = new URL(href)
  } catch {
    return false
  }
  return (
    url.hostname.toLowerCase() === GOHIRE_HOST &&
    !url.searchParams.has(JR_ID_PARAM) &&
    GOHIRE_JOB_PATH.test(url.pathname)
  )
}

export function normalizeEarlyJobrightUrl(win = window) {
  const normalized = buildNormalizedEarlyUrl(win.location.href)
  return !!normalized && (win.location.replace(normalized), true)
}
