// @ts-nocheck
/**
 * Click-time jr_id injection: rewrite apply anchors/buttons and sync URL after navigation.
 */

import { isDomainMatch } from "../../core/utils.ts"
import {
  JOB_ID_QUERY_KEY,
  safeSetJobIdInUrl,
  extractJobIdFromUrl,
} from "../../utils/job-id.ts"
import { visitChangedAnchors } from "./incremental-anchor-observer.ts"
import { keepJobIdInUrl } from "./sticky-job-id.ts"

export { keepJobIdInUrl }

const APPLY_TEXT_RE =
  /^\s*(apply|apply now|apply (for|to) (this )?(job|position)|submit (your )?application|start (your )?application|continue to apply|begin application)\s*$/i
const APPLY_TEXT_MAX_LENGTH = 80

export function matchesApplyHeuristic(element) {
  if (!element) return false
  let textContent = element.textContent ?? ""
  let trimmedText = textContent.trim()
  if (trimmedText.length <= APPLY_TEXT_MAX_LENGTH && APPLY_TEXT_RE.test(trimmedText)) {
    return true
  }
  let ariaLabel = (element.getAttribute("aria-label") ?? "").trim()
  return !!(ariaLabel && APPLY_TEXT_RE.test(ariaLabel))
}

function matchesSuccessFactorsApplyButton(element) {
  if (element.tagName !== "BUTTON") return false
  if (/^applyButton_(top|bottom)$/.test(element.id)) return true
  let onclick = element.getAttribute("onclick") ?? ""
  return matchesApplyHeuristic(element) && /\bcheckDpcs2AndProceed\s*\(/.test(onclick)
}

function matchesDayforceApplyButton(element) {
  if (element.tagName !== "BUTTON") return false
  let testId = element.getAttribute("test-id")
  return (
    testId === "apply-button" ||
    testId === "apply-without-account" ||
    testId === "application-next-step"
  )
}

function matchesDeloitteAvatureRegisterEdit(element) {
  if (element.tagName !== "A" || !matchesApplyHeuristic(element)) return false
  let href = element.href
  return /\/careers\/RegisterEdit(?:[/?#]|$)/.test(href)
}

function matchesCatsoneApply(element) {
  if (element.tagName !== "A" || !matchesApplyHeuristic(element)) return false
  let href = element.href
  return /\/careers\/[^/]+\/jobs\/[^/]+\/apply\/?(?:[?#]|$)/.test(href)
}

function matchesBytedanceApply(element) {
  if (element.tagName !== "A" || !matchesApplyHeuristic(element)) return false
  let href = element.href
  try {
    let url = new URL(href)
    return (
      isDomainMatch(url.hostname, "jobs.bytedance.com") &&
      /^\/[^/]+\/[^/]+\/[^/]+\/apply\/?$/.test(url.pathname)
    )
  } catch {
    return false
  }
}

function matchesAppleSubmitResume(element) {
  if (element.tagName !== "A") return false
  try {
    let url = new URL(element.href)
    return (
      isDomainMatch(url.hostname, "jobs.apple.com") &&
      /^\/app\/[^/]+\/apply\/[^/]+\/?$/.test(url.pathname)
    )
  } catch {
    return false
  }
}

function matchesTiktokUsdsApply(element) {
  if (!matchesApplyHeuristic(element)) return false
  let role = element.getAttribute("role")
  return element.tagName === "BUTTON" || role === "button" || role === "tab"
}

const SITE_PATTERNS = [
  {
    label: "smartrecruiters",
    domain: "smartrecruiters.com",
    predicate: (element) =>
      element.id === "st-apply" || element.getAttribute("data-sr-track") === "apply",
  },
  {
    label: "recruitee",
    domain: "recruitee.com",
    predicate: (element) => {
      let dataCy = element.getAttribute("data-cy")
      return dataCy === "apply-button-nav" || dataCy === "apply-button"
    },
  },
  {
    label: "netflix-jobs",
    domain: "jobs.netflix.net",
    predicate: (element) => element.getAttribute("data-test-id") === "apply-button",
  },
  {
    label: "gusto",
    domain: "jobs.gusto.com",
    predicate: (element) => {
      if (element.tagName !== "A") return false
      let href = element.href
      return typeof href === "string" && /\/applicants\/new(?:\/|[?#]|$)/.test(href)
    },
  },
  {
    label: "apple-submit-resume",
    domain: "jobs.apple.com",
    predicate: matchesAppleSubmitResume,
  },
  {
    label: "successfactors-eu",
    domain: "successfactors.eu",
    predicate: matchesSuccessFactorsApplyButton,
  },
  {
    label: "successfactors-com",
    domain: "successfactors.com",
    predicate: matchesSuccessFactorsApplyButton,
  },
  {
    label: "dayforce-apply-and-next",
    domain: "jobs.dayforcehcm.com",
    predicate: matchesDayforceApplyButton,
  },
  {
    label: "sapsf",
    domain: "sapsf.com",
    predicate: matchesSuccessFactorsApplyButton,
  },
  {
    label: "deloitte-avature-register-edit",
    domain: "apply.deloitte.com",
    predicate: matchesDeloitteAvatureRegisterEdit,
  },
  {
    label: "catsone-apply",
    domain: "catsone.com",
    syncAfterAnchorClick: true,
    predicate: matchesCatsoneApply,
  },
  {
    label: "bytedance-apply",
    domain: "joinbytedance.com",
    predicate: matchesBytedanceApply,
  },
  {
    label: "tiktok-usds-apply",
    domain: "tiktokusds.com",
    predicate: matchesTiktokUsdsApply,
  },
]

function getActiveSitePatterns(hostname) {
  return SITE_PATTERNS.filter((pattern) => isDomainMatch(hostname, pattern.domain))
}

function matchesAnySitePattern(element, patterns) {
  for (let pattern of patterns) {
    if (pattern.predicate(element)) return true
  }
  return false
}

function matchesSyncAfterAnchorClick(element, patterns) {
  for (let pattern of patterns) {
    if (pattern.syncAfterAnchorClick && pattern.predicate(element)) return true
  }
  return false
}

function rewriteAnchorHrefWithJobId(anchor, jobId, originalHost) {
  if (!anchor.href || anchor.hasAttribute("download")) return false
  let rewrittenHref = safeSetJobIdInUrl(anchor.href, jobId, originalHost)
  if (!rewrittenHref) return false
  anchor.href = rewrittenHref
  anchor.referrerPolicy = "unsafe-url"
  return true
}

function anchorHasJobId(anchor, jobId) {
  try {
    return new URL(anchor.href).searchParams.get(JOB_ID_QUERY_KEY) === jobId
  } catch {
    return false
  }
}

function isInIframe() {
  try {
    return typeof window !== "undefined" && window.top !== window.self
  } catch {
    return false
  }
}

function tryParseUrl(href) {
  try {
    return new URL(href)
  } catch {
    return null
  }
}

function resolveTopTargetHref(href, jobId, originalHost) {
  let parsed = tryParseUrl(href)
  if (!jobId || !parsed) return null
  let rewritten = safeSetJobIdInUrl(href, jobId, originalHost)
  if (rewritten) return rewritten
  if (parsed.searchParams.get(JOB_ID_QUERY_KEY) !== jobId) return null
  let withoutJobId = new URL(parsed.toString())
  withoutJobId.searchParams.delete(JOB_ID_QUERY_KEY)
  let reAdded = safeSetJobIdInUrl(withoutJobId.toString(), jobId, originalHost)
  return reAdded ? parsed.toString() : null
}

function rewriteAnchorForTopNavigation(anchor, jobId, originalHost) {
  if (!isInIframe()) return false
  let topHref = resolveTopTargetHref(anchor.href, jobId, originalHost)
  if (!topHref) return false
  anchor.href = topHref
  anchor.target = "_top"
  anchor.referrerPolicy = "unsafe-url"
  return true
}

function rewriteSingleAnchor(anchor, jobId, originalHost, patterns) {
  if (anchor.tagName !== "A") {
    return {
      scanned: 0,
      matched: 0,
      rewritten: 0,
    }
  }
  let siteMatch = matchesAnySitePattern(anchor, patterns)
  let heuristicMatch = matchesApplyHeuristic(anchor)
  if (!(siteMatch || heuristicMatch)) {
    return {
      scanned: 1,
      matched: 0,
      rewritten: 0,
    }
  }
  if (rewriteAnchorForTopNavigation(anchor, jobId, originalHost)) {
    return {
      scanned: 1,
      matched: 1,
      rewritten: 1,
    }
  }
  if (anchor.target !== "_blank" || siteMatch) {
    return {
      scanned: 1,
      matched: 1,
      rewritten: rewriteAnchorHrefWithJobId(anchor, jobId, originalHost) ? 1 : 0,
    }
  }
  return {
    scanned: 1,
    matched: 1,
    rewritten: 0,
  }
}

function rewriteAnchors(anchors, jobId, originalHost, patterns) {
  let totals = {
    scanned: 0,
    matched: 0,
    rewritten: 0,
  }
  for (let anchor of anchors) {
    let result = rewriteSingleAnchor(anchor, jobId, originalHost, patterns)
    totals.scanned += result.scanned
    totals.matched += result.matched
    totals.rewritten += result.rewritten
  }
  return totals
}

export function matchesSiteSpecificPattern(element, hostname) {
  return matchesAnySitePattern(element, getActiveSitePatterns(hostname))
}

function findClickTarget(event) {
  let path = event.composedPath?.() ?? []
  for (let node of path) {
    let element = node
    if (!element?.tagName) continue
    if (element.tagName === "A") {
      return {
        kind: "anchor",
        element,
      }
    }
    if (element.tagName === "BUTTON") {
      return {
        kind: "button",
        element,
      }
    }
    let role = element.getAttribute("role")
    if (role === "button" || role === "tab") {
      return {
        kind: "button",
        element,
      }
    }
  }
  return null
}

const BUTTON_URL_SYNC_TIMEOUT_MS = 1e4
const BUTTON_URL_SYNC_INTERVAL_MS = 50

export function evaluatePostNavigationSync({
  jobId,
  originalHost,
  originalUrl,
  currentUrl,
}) {
  let currentParsed
  if (currentUrl === originalUrl) {
    return {
      done: false,
    }
  }
  try {
    currentParsed = new URL(currentUrl)
  } catch {
    return {
      done: true,
    }
  }
  if (
    currentParsed.hostname.toLowerCase() !== originalHost.toLowerCase() ||
    currentParsed.searchParams.has(JOB_ID_QUERY_KEY)
  ) {
    return {
      done: true,
    }
  }
  currentParsed.searchParams.set(JOB_ID_QUERY_KEY, jobId)
  return {
    done: true,
    restoredUrl: currentParsed.toString(),
  }
}

const REWRITE_DURATION_MS = 1e4
const REWRITE_FALLBACK_INTERVAL_MS = 250
const MARKER = "click-jr-injector-20260721-v9"
let activeButtonUrlSyncInterval = null

function scheduleButtonUrlSync(jobId, originalHost) {
  if (activeButtonUrlSyncInterval !== null) clearInterval(activeButtonUrlSyncInterval)
  let originalUrl = window.location.href
  let startedAt = Date.now()
  let intervalId = setInterval(() => {
    try {
      if (Date.now() - startedAt > BUTTON_URL_SYNC_TIMEOUT_MS) {
        clearInterval(intervalId)
        if (activeButtonUrlSyncInterval === intervalId) activeButtonUrlSyncInterval = null
        return
      }
      let currentUrl = window.location.href
      let syncResult = evaluatePostNavigationSync({
        jobId,
        originalHost,
        originalUrl,
        currentUrl,
      })
      if (!syncResult.done) return
      clearInterval(intervalId)
      if (activeButtonUrlSyncInterval === intervalId) activeButtonUrlSyncInterval = null
      if (syncResult.restoredUrl) {
        try {
          let originalParsed = new URL(originalUrl)
          let currentParsed = new URL(currentUrl)
          console.info("[jobright] click-jr-injector button URL sync result", {
            host: originalParsed.hostname,
            originalPathname: originalParsed.pathname,
            currentPathname: currentParsed.pathname,
            currentQueryKeys: Array.from(currentParsed.searchParams.keys()).filter(
              (key) => key !== JOB_ID_QUERY_KEY,
            ),
            restored: true,
          })
        } catch {}
        window.history.replaceState(window.history.state, "", syncResult.restoredUrl)
        keepJobIdInUrl(jobId, {
          originalHost,
        })
      }
    } catch {
      clearInterval(intervalId)
      if (activeButtonUrlSyncInterval === intervalId) activeButtonUrlSyncInterval = null
    }
  }, BUTTON_URL_SYNC_INTERVAL_MS)
  activeButtonUrlSyncInterval = intervalId
}

export function handleClickForJrInjection(
  event,
  jobId,
  originalHost,
  patterns = getActiveSitePatterns(originalHost),
) {
  let clickTarget = findClickTarget(event)
  if (!clickTarget) return false
  let siteMatch = matchesAnySitePattern(clickTarget.element, patterns)
  let shouldHandle = siteMatch || matchesApplyHeuristic(clickTarget.element)
  if (!shouldHandle) return false
  if (clickTarget.kind === "anchor") {
    let anchor = clickTarget.element
    let shouldSyncAfterClick =
      anchor.target !== "_blank" && matchesSyncAfterAnchorClick(anchor, patterns)
    if (rewriteAnchorForTopNavigation(anchor, jobId, originalHost)) return true
    if (!(anchor.target !== "_blank" || !!siteMatch)) return false
    if (rewriteAnchorHrefWithJobId(anchor, jobId, originalHost)) {
      if (shouldSyncAfterClick) scheduleButtonUrlSync(jobId, originalHost)
      return true
    }
    if (shouldSyncAfterClick && anchorHasJobId(anchor, jobId)) {
      scheduleButtonUrlSync(jobId, originalHost)
      return true
    }
    return false
  }
  if (!siteMatch) return false
  console.info("[jobright] click-jr-injector scheduling button URL sync", {
    host: originalHost,
    testId: clickTarget.element.getAttribute("test-id"),
    role: clickTarget.element.getAttribute("role"),
    hasJobId: !!jobId,
  })
  scheduleButtonUrlSync(jobId, originalHost)
  return true
}

export function attachClickJrInjector() {
  let hostname = window.location.hostname
  let activePatterns = getActiveSitePatterns(hostname)
  if (activePatterns.length) {
    let extensionVersion
    try {
      extensionVersion = chrome?.runtime?.getManifest?.()?.version
    } catch {
      extensionVersion = undefined
    }
    console.info("[jobright] click-jr-injector attached", {
      marker: MARKER,
      extensionVersion,
      host: hostname,
      hasJobId: !!extractJobIdFromUrl(window.location.href),
      activeSitePatterns: activePatterns.map((pattern) => pattern.label),
      rewriteDurationMs: REWRITE_DURATION_MS,
      rewriteFallbackIntervalMs: REWRITE_FALLBACK_INTERVAL_MS,
    })
  }
  let loggedFirstScan = false
  let loggedFirstMatch = false
  let scanAndRewriteAnchors = () => {
    let jobId = extractJobIdFromUrl(window.location.href)
    if (!jobId || typeof document.querySelectorAll !== "function") return
    let totals = rewriteAnchors(
      document.querySelectorAll("a[href]"),
      jobId,
      hostname,
      activePatterns,
    )
    let shouldLog = activePatterns.length > 0 || totals.matched > 0
    if (shouldLog && !loggedFirstScan) {
      loggedFirstScan = true
      console.info("[jobright] click-jr-injector first anchor scan", {
        marker: MARKER,
        host: hostname,
        ...totals,
      })
    }
    if (totals.matched > 0 && !loggedFirstMatch) {
      loggedFirstMatch = true
      console.info("[jobright] click-jr-injector first anchor match", {
        marker: MARKER,
        host: hostname,
        ...totals,
      })
    }
    if (totals.rewritten > 0) {
      console.info("[jobright] click-jr-injector rewrote apply anchors", {
        marker: MARKER,
        host: hostname,
        ...totals,
      })
    }
  }
  let mutationObserver = null
  let fallbackIntervalId = null
  let rewriteTimeoutId = null
  if (extractJobIdFromUrl(window.location.href)) {
    scanAndRewriteAnchors()
    if (typeof MutationObserver !== "undefined" && document.documentElement) {
      mutationObserver = new MutationObserver((mutations) => {
        let jobId = extractJobIdFromUrl(window.location.href)
        if (!jobId) return
        let totals = {
          scanned: 0,
          matched: 0,
          rewritten: 0,
        }
        visitChangedAnchors(mutations, (anchor) => {
          let result = rewriteSingleAnchor(anchor, jobId, hostname, activePatterns)
          totals.scanned += result.scanned
          totals.matched += result.matched
          totals.rewritten += result.rewritten
        })
        if (totals.rewritten > 0) {
          console.info("[jobright] click-jr-injector rewrote changed anchors", {
            marker: MARKER,
            host: hostname,
            ...totals,
          })
        }
      })
      mutationObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["aria-label", "href"],
        childList: true,
        characterData: true,
        subtree: true,
      })
    } else {
      fallbackIntervalId = setInterval(scanAndRewriteAnchors, REWRITE_FALLBACK_INTERVAL_MS)
    }
    rewriteTimeoutId = setTimeout(() => {
      mutationObserver?.disconnect()
      mutationObserver = null
      if (fallbackIntervalId !== null) {
        clearInterval(fallbackIntervalId)
        fallbackIntervalId = null
      }
      rewriteTimeoutId = null
    }, REWRITE_DURATION_MS)
  }
  let onClick = (event) => {
    try {
      let jobId = extractJobIdFromUrl(window.location.href)
      if (!jobId) return
      handleClickForJrInjection(event, jobId, hostname, activePatterns)
    } catch (error) {
      console.warn("[jobright] click-jr-injector handler failed:", error)
    }
  }
  document.addEventListener("click", onClick, true)
  return () => {
    document.removeEventListener("click", onClick, true)
    mutationObserver?.disconnect()
    if (fallbackIntervalId !== null) clearInterval(fallbackIntervalId)
    if (rewriteTimeoutId !== null) clearTimeout(rewriteTimeoutId)
  }
}
