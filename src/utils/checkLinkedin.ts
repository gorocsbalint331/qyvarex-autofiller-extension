// @ts-nocheck
/**
 * LinkedIn URL / iframe helpers for job list and detail pages.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

function isLinkedinDomain(url) {
  let pattern = /^https:\/\/(www\.)?linkedin\.com\//
  return pattern.test(url)
}

function isLinkedinJobListPage(url) {
  let pattern =
    /^https:\/\/(www\.)?linkedin\.com\/jobs\/(search|search-results|collections)(?:\/.*|\?.*)?$/
  return pattern.test(url)
}

function isLinkedinJobDetailPage(url) {
  let pattern =
    /^https:\/\/(www\.)?linkedin\.com\/jobs\/view\/(?:[^/?#]*-)?\d+(?:[/?#]|$)/
  return pattern.test(url)
}

let LINKEDIN_PRELOAD_IFRAME_SRC = "https://www.linkedin.com/preload/"

function isLinkedinPreloadIframe() {
  if (window.self === window.top) return false
  let frameElement = window.frameElement
  return (
    frameElement?.tagName === "IFRAME" &&
    frameElement.src === LINKEDIN_PRELOAD_IFRAME_SRC
  )
}

function extractJobIdFromLinkedinUrl(url) {
  let params = new URLSearchParams(new URL(url).search)
  let currentJobId = params.get("currentJobId")
  return (
    currentJobId ||
    (url.match(/\/jobs\/view\/(?:[^/?#]*-)?(\d+)(?:[/?#]|$)/)?.[1] ?? null)
  )
}

function getCurrentJobId() {
  return extractJobIdFromLinkedinUrl(window.top.location.href)
}

export {
  LINKEDIN_PRELOAD_IFRAME_SRC,
  getCurrentJobId,
  isLinkedinDomain,
  isLinkedinJobDetailPage,
  isLinkedinJobListPage,
  isLinkedinPreloadIframe,
}
