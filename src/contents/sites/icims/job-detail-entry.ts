// @ts-nocheck
/**
 * iCIMS job-detail page: click Apply Online when the destination is unambiguous.
 */

const clickedDocuments = new WeakSet()
const JOB_PATH_PATTERN = /^\/jobs\/(\d+)\/(?:[^/]+\/)?job\/?$/i

function logEntry(reason, candidateCount = 0) {
  console.info("[IcimsJobDetailEntry]", {
    reason,
    candidateCount,
  })
}

function isVisibleApplyControl(element) {
  if (
    element.closest(
      '[hidden], [inert], [disabled], [aria-disabled="true"], .iCIMS_NoDisplay',
    )
  ) {
    return false
  }

  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility({
      checkOpacity: true,
      checkVisibilityCSS: true,
    })
  }

  let style = element.ownerDocument.defaultView?.getComputedStyle(element)
  return (
    element.getClientRects().length > 0 &&
    style?.visibility !== "hidden" &&
    style?.visibility !== "collapse" &&
    style?.opacity !== "0"
  )
}

export function proceedIcimsJobDetailToApply(doc = document, beforeClick) {
  let currentUrl
  try {
    currentUrl = new URL(doc.location.href)
  } catch {
    logEntry("invalid-current-url")
    return false
  }

  let jobId = currentUrl.pathname.match(JOB_PATH_PATTERN)?.[1]
  if (
    !currentUrl.hostname.endsWith(".icims.com") ||
    !jobId ||
    currentUrl.searchParams.get("mode") === "apply" ||
    currentUrl.searchParams.get("apply") === "yes"
  ) {
    logEntry("not-job-detail")
    return false
  }

  if (clickedDocuments.has(doc)) {
    logEntry("already-clicked")
    return true
  }

  let anchors = Array.from(
    doc.querySelectorAll("a.iCIMS_ApplyOnlineButton[href]"),
  ).filter(isVisibleApplyControl)

  let destinations = []
  for (let anchor of anchors) {
    try {
      let href = new URL(anchor.getAttribute("href") || "", currentUrl)
      if (
        href.origin !== currentUrl.origin ||
        href.pathname.match(JOB_PATH_PATTERN)?.[1] !== jobId ||
        href.searchParams.get("mode") !== "apply" ||
        href.searchParams.get("apply") !== "yes"
      ) {
        logEntry("unexpected-apply-target", anchors.length)
        return false
      }
      href.searchParams.sort()
      destinations.push({ anchor, destination: href.href })
    } catch {
      logEntry("invalid-apply-target", anchors.length)
      return false
    }
  }

  if (!destinations.length) {
    logEntry("no-visible-apply-control", anchors.length)
    return false
  }

  if (
    new Set(destinations.map(({ destination }) => destination)).size !== 1
  ) {
    logEntry("ambiguous-apply-targets", destinations.length)
    return false
  }

  clickedDocuments.add(doc)
  beforeClick?.()
  logEntry("click-apply", destinations.length)
  destinations[0].anchor.click()
  return true
}
