/**
 * Cloudflare managed-challenge detection (ported from ~core/cloudflare-challenge).
 */

const CF_RUNTIME_MARKER =
  /(?:\/cdn-cgi\/challenge-platform\b|window\._cf_chl_opt|__cf_chl_|cf_chl_opt|cf_chl_)/i
const CF_TITLE_HINT = /(?:just a moment|security verification|one more step)/i
const CF_BODY_HINTS = [
  /performing security verification/i,
  /checking (?:if|that) (?:the )?(?:site )?connection is secure/i,
  /this website uses a security service to protect against malicious bots/i,
  /this page is displayed while the website verifies you are not a bot/i
]
const CF_RAY_ID = /\b(?:cloudflare\s+)?ray id\s*:?\s*[a-f0-9]{12,}\b/i
const CF_FOOTER = /performance and security by cloudflare/i

export type CloudflareProbe = {
  title: string
  bodyText: string
  html?: string
  managedRuntimeFound: boolean
  challengeMarkerFound: boolean
  interactiveElementCount: number
}

function normalizeWhitespace(text: string): string {
  return (text || "").replace(/\s+/g, " ").trim()
}

function bodyLooksLikeCloudflareChallenge(bodyText: string): boolean {
  return (
    CF_BODY_HINTS.some((re) => re.test(bodyText)) ||
    (/verify you are human/i.test(bodyText) &&
      /cloudflare/i.test(bodyText) &&
      /(?:not a bot|malicious bots|security service)/i.test(bodyText))
  )
}

function hasCloudflareFooter(bodyText: string): boolean {
  return CF_RAY_ID.test(bodyText) && CF_FOOTER.test(bodyText)
}

function isSparseChallengeDocument({
  bodyText,
  interactiveElementCount,
  allowFooterLinks = false
}: {
  bodyText: string
  interactiveElementCount: number
  allowFooterLinks?: boolean
}): boolean {
  const length = bodyText.length
  const interactive = interactiveElementCount ?? 0
  return allowFooterLinks
    ? length <= 1500 && interactive <= 20
    : length <= 2500 && interactive <= 4
}

export function isCloudflareManagedChallengePage(probe: CloudflareProbe): boolean {
  const title = normalizeWhitespace(probe.title)
  const bodyText = normalizeWhitespace(probe.bodyText)
  const html = probe.html || ""
  const hasManagedRuntime =
    !!probe.managedRuntimeFound || CF_RUNTIME_MARKER.test(html)
  const hasFooter = hasCloudflareFooter(bodyText)
  const hasChallengeSignal =
    hasManagedRuntime || !!probe.challengeMarkerFound || hasFooter
  const titleLooksLikeChallenge = CF_TITLE_HINT.test(title)
  const copyLooksLikeChallenge =
    bodyLooksLikeCloudflareChallenge(bodyText) ||
    titleLooksLikeChallenge ||
    hasFooter

  return (
    hasChallengeSignal &&
    copyLooksLikeChallenge &&
    isSparseChallengeDocument({
      bodyText,
      interactiveElementCount: probe.interactiveElementCount,
      allowFooterLinks: hasFooter || (hasManagedRuntime && titleLooksLikeChallenge)
    })
  )
}

export function collectCloudflareChallengePageProbe(
  doc: Document
): CloudflareProbe {
  const title = doc.title
  const challengeMarkerFound = !!doc.querySelector(
    '#challenge-stage,#cf-challenge-running,#cf-please-wait,.cf-browser-verification,.cf-challenge,form[action*="/cdn-cgi/challenge-platform/"]'
  )
  const win = doc.defaultView as (Window & { _cf_chl_opt?: unknown }) | null
  const managedRuntimeFound = !!(
    doc.querySelector('script[src*="/cdn-cgi/challenge-platform/"]') ||
    win?._cf_chl_opt
  )
  const interactiveElementCount = doc.querySelectorAll(
    "button, input, select, textarea, a[href], [role='button']"
  ).length
  const shouldReadBody =
    managedRuntimeFound ||
    challengeMarkerFound ||
    CF_TITLE_HINT.test(normalizeWhitespace(title)) ||
    interactiveElementCount <= 4

  return {
    title,
    bodyText: shouldReadBody
      ? (doc.body?.textContent || doc.body?.innerText || "").trim()
      : "",
    managedRuntimeFound,
    challengeMarkerFound,
    interactiveElementCount
  }
}

export function isCurrentDocumentCloudflareManagedChallengePage(): boolean {
  return (
    typeof document !== "undefined" &&
    isCloudflareManagedChallengePage(collectCloudflareChallengePageProbe(document))
  )
}

function isJobrightHostname(href?: string): boolean {
  if (!href) return false
  try {
    const { hostname } = new URL(href)
    return hostname === "jobright.ai" || hostname.endsWith(".jobright.ai")
  } catch {
    return false
  }
}

function stillLooksLikePossibleChallenge(probe: CloudflareProbe): boolean {
  const title = normalizeWhitespace(probe.title)
  const bodyText = normalizeWhitespace(probe.bodyText)
  const html = probe.html || ""
  const hasManagedRuntime =
    !!probe.managedRuntimeFound || CF_RUNTIME_MARKER.test(html)
  const hasFooter = hasCloudflareFooter(bodyText)
  const hasChallengeSignal =
    hasManagedRuntime || !!probe.challengeMarkerFound || hasFooter
  const titleLooksLikeChallenge = CF_TITLE_HINT.test(title)
  const copyLooksLikeChallenge =
    bodyLooksLikeCloudflareChallenge(bodyText) ||
    titleLooksLikeChallenge ||
    hasFooter
  return (
    !!hasChallengeSignal ||
    !!titleLooksLikeChallenge ||
    !!copyLooksLikeChallenge ||
    isSparseChallengeDocument({
      bodyText,
      interactiveElementCount: probe.interactiveElementCount
    })
  )
}

export async function waitForCloudflareManagedChallengePage({
  timeoutMs = 1500,
  intervalMs = 100,
  currentUrl = typeof window === "undefined" ? undefined : window.location.href,
  collectProbe
}: {
  timeoutMs?: number
  intervalMs?: number
  currentUrl?: string
  collectProbe?: () => CloudflareProbe | null
} = {}): Promise<boolean> {
  if (isJobrightHostname(currentUrl)) return false

  const probe =
    collectProbe ||
    (() =>
      typeof document === "undefined"
        ? null
        : collectCloudflareChallengePageProbe(document))
  const deadline = Date.now() + timeoutMs

  for (;;) {
    const snapshot = probe()
    if (snapshot && isCloudflareManagedChallengePage(snapshot)) return true
    if (
      (snapshot && !stillLooksLikePossibleChallenge(snapshot)) ||
      Date.now() >= deadline
    ) {
      return false
    }
    await new Promise((resolve) => setTimeout(resolve, Math.max(0, intervalMs)))
  }
}

export function removeCloudflareChallengeInjectedHost(elementId: string): boolean {
  if (typeof document === "undefined") return false
  const el = document.getElementById(elementId)
  if (!el) return false
  el.remove()
  return true
}
