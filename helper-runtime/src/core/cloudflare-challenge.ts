// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/core/cloudflare-challenge.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
const MANAGED_RUNTIME_RE =
  /(?:\/cdn-cgi\/challenge-platform\b|window\._cf_chl_opt|__cf_chl_|cf_chl_opt|cf_chl_)/i
const CHALLENGE_TITLE_RE =
  /(?:just a moment|security verification|one more step)/i
const CHALLENGE_BODY_RES = [
  /performing security verification/i,
  /checking (?:if|that) (?:the )?(?:site )?connection is secure/i,
  /this website uses a security service to protect against malicious bots/i,
  /this page is displayed while the website verifies you are not a bot/i,
]
const RAY_ID_RE = /\b(?:cloudflare\s+)?ray id\s*:?\s*[a-f0-9]{12,}\b/i
const CF_FOOTER_RE = /performance and security by cloudflare/i
const CHALLENGE_MARKER_SELECTOR =
  '#challenge-stage,#cf-challenge-running,#cf-please-wait,.cf-browser-verification,.cf-challenge,form[action*="/cdn-cgi/challenge-platform/"]'
const CHALLENGE_SCRIPT_SELECTOR = 'script[src*="/cdn-cgi/challenge-platform/"]'

function normalizeWhitespace(text) {
  return (text || "").replace(/\s+/g, " ").trim()
}

function isJobrightUrl(url) {
  if (!url) return false
  try {
    let { hostname } = new URL(url)
    return "jobright.ai" === hostname || hostname.endsWith(".jobright.ai")
  } catch {
    return false
  }
}

function hasChallengeBodyCopy(bodyText) {
  return (
    !!CHALLENGE_BODY_RES.some((pattern) => pattern.test(bodyText)) ||
    (/verify you are human/i.test(bodyText) &&
      /cloudflare/i.test(bodyText) &&
      /(?:not a bot|malicious bots|security service)/i.test(bodyText))
  )
}

function hasCloudflareFooterSignals(bodyText) {
  return RAY_ID_RE.test(bodyText) && CF_FOOTER_RE.test(bodyText)
}

function isSparseChallengePage({
  bodyText,
  interactiveElementCount,
  allowFooterLinks = false,
}) {
  let bodyLength = bodyText.length
  let interactiveCount = interactiveElementCount ?? 0
  return allowFooterLinks
    ? bodyLength <= 1500 && interactiveCount <= 20
    : bodyLength <= 2500 && interactiveCount <= 4
}

export function isCloudflareManagedChallengePage(probe) {
  let title = normalizeWhitespace(probe.title)
  let bodyText = normalizeWhitespace(probe.bodyText)
  let html = probe.html || ""
  let managedRuntimeFound =
    !!probe.managedRuntimeFound || MANAGED_RUNTIME_RE.test(html)
  let footerSignals = hasCloudflareFooterSignals(bodyText)
  let hasPlatformSignals =
    managedRuntimeFound || !!probe.challengeMarkerFound || footerSignals
  let titleLooksLikeChallenge = CHALLENGE_TITLE_RE.test(title)
  let bodyLooksLikeChallenge =
    hasChallengeBodyCopy(bodyText) || titleLooksLikeChallenge || footerSignals
  return (
    hasPlatformSignals &&
    bodyLooksLikeChallenge &&
    isSparseChallengePage({
      bodyText,
      interactiveElementCount: probe.interactiveElementCount,
      allowFooterLinks: footerSignals || (managedRuntimeFound && titleLooksLikeChallenge),
    })
  )
}

function looksLikePossibleChallengePage(probe) {
  let title = normalizeWhitespace(probe.title)
  let bodyText = normalizeWhitespace(probe.bodyText)
  let html = probe.html || ""
  let managedRuntimeFound =
    !!probe.managedRuntimeFound || MANAGED_RUNTIME_RE.test(html)
  let footerSignals = hasCloudflareFooterSignals(bodyText)
  let hasPlatformSignals =
    managedRuntimeFound || !!probe.challengeMarkerFound || footerSignals
  let titleLooksLikeChallenge = CHALLENGE_TITLE_RE.test(title)
  let bodyLooksLikeChallenge =
    hasChallengeBodyCopy(bodyText) || titleLooksLikeChallenge || footerSignals
  return (
    !!hasPlatformSignals ||
    !!titleLooksLikeChallenge ||
    !!bodyLooksLikeChallenge ||
    isSparseChallengePage({
      bodyText,
      interactiveElementCount: probe.interactiveElementCount,
    })
  )
}

export function collectCloudflareChallengePageProbe(doc) {
  let title = doc.title
  let challengeMarkerFound = !!doc.querySelector(CHALLENGE_MARKER_SELECTOR)
  let defaultView = doc.defaultView
  let managedRuntimeFound = !!(
    doc.querySelector(CHALLENGE_SCRIPT_SELECTOR) || defaultView?._cf_chl_opt
  )
  let interactiveElementCount = doc.querySelectorAll(
    "button, input, select, textarea, a[href], [role='button']",
  ).length
  let shouldReadBody =
    managedRuntimeFound ||
    challengeMarkerFound ||
    CHALLENGE_TITLE_RE.test(normalizeWhitespace(title)) ||
    interactiveElementCount <= 4
  return {
    title,
    bodyText: shouldReadBody
      ? (doc.body?.textContent || doc.body?.innerText || "").trim()
      : "",
    managedRuntimeFound,
    challengeMarkerFound,
    interactiveElementCount,
  }
}

export function isCurrentDocumentCloudflareManagedChallengePage() {
  return (
    "undefined" != typeof document &&
    isCloudflareManagedChallengePage(
      collectCloudflareChallengePageProbe(document),
    )
  )
}

export async function waitForCloudflareManagedChallengePage({
  timeoutMs = 1500,
  intervalMs = 100,
  currentUrl =
    "undefined" == typeof window ? undefined : window.location.href,
  collectProbe,
} = {}) {
  if (isJobrightUrl(currentUrl)) return false
  let probeCollector =
    collectProbe ||
    (() =>
      "undefined" == typeof document
        ? null
        : collectCloudflareChallengePageProbe(document))
  let deadline = Date.now() + timeoutMs
  for (;;) {
    let probe = probeCollector()
    if (probe && isCloudflareManagedChallengePage(probe)) return true
    if (
      (probe && !looksLikePossibleChallengePage(probe)) ||
      Date.now() >= deadline
    )
      return false
    await new Promise((resolve) =>
      setTimeout(resolve, Math.max(0, intervalMs)),
    )
  }
}

export function removeCloudflareChallengeInjectedHost(hostId) {
  if ("undefined" == typeof document) return false
  let host = document.getElementById(hostId)
  return !!host && (host.remove(), true)
}

export function startCloudflareChallengeInjectedHostCleanup(
  hostId,
  { timeoutMs = 5e3, intervalMs = 250 } = {},
) {
  if ("undefined" == typeof document)
    return () => {}
  let stopped = false
  let timeoutHandle = null
  let intervalHandle = null
  let mutationObserver = null
  let stop = () => {
    stopped ||
      ((stopped = true),
      timeoutHandle && clearTimeout(timeoutHandle),
      intervalHandle && clearInterval(intervalHandle),
      mutationObserver?.disconnect())
  }
  let checkAndCleanup = () => {
    !stopped &&
      isCurrentDocumentCloudflareManagedChallengePage() &&
      (removeCloudflareChallengeInjectedHost(hostId), stop())
  }
  return (
    checkAndCleanup(),
    !stopped &&
      ((intervalHandle = setInterval(checkAndCleanup, intervalMs)),
      (timeoutHandle = setTimeout(stop, timeoutMs)),
      "undefined" != typeof MutationObserver &&
        document.documentElement &&
        (mutationObserver = new MutationObserver(checkAndCleanup)).observe(
          document.documentElement,
          {
            childList: true,
            subtree: true,
            characterData: true,
          },
        )),
    stop
  )
}
