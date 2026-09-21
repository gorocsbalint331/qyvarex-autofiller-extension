/**
 * Decide whether the helper runtime should activate on this frame.
 * Ported from ~contents/shared/runtime-activation + ~core/supported-sites usage.
 */

import { agentDomains } from "~api/env-resolver"
import {
  CONSTRAINED_SITE_RULES,
  IFRAME_CHECK_PATTERN,
  PAGE_SOURCE_ATS_LIST,
  QUERY_PARAM_LIST,
  SUPPORT_DOMAINS,
  SUPPORT_PATTERNS,
  type ConstrainedSiteRule
} from "~core/supported-sites"

const POST_APPLY_PATH_REGEXES = [
  "confirmation",
  "applyConfirmation",
  "careers/chatbot",
  "success(?:ful)?",
  "thank[_-]?you",
  "thanks",
  "SuccessfulRegistration"
].map((segment) => new RegExp(`/${segment}(?=/|$)`, "i"))

export type RuntimeActivationReason =
  | "jobright_domain"
  | "linkedin_domain"
  | "supported_top_url"
  | "supported_query_param"
  | "supported_page_source"
  | "supported_embedded_frame"
  | "supported_frame_url"
  | "extension_icon"

function hostnameEqualsOrIsSubdomain(hostname: string, domain: string): boolean {
  return hostname === domain || hostname.endsWith(`.${domain}`)
}

function isPostApplyConfirmationPath(url: URL): boolean {
  return POST_APPLY_PATH_REGEXES.some((re) => re.test(url.pathname))
}

function siteRuleMatchesHost(
  url: URL,
  hostname: string,
  rule: ConstrainedSiteRule
): boolean {
  return (
    rule.domains.some((domain) =>
      hostnameEqualsOrIsSubdomain(hostname, domain)
    ) || rule.patterns.some((pattern) => pattern.includes(url.href))
  )
}

function siteRuleMatchesPath(url: URL, rule: ConstrainedSiteRule): boolean {
  const full = `${url.pathname}${url.search}${url.hash}`
  return (
    (rule.pathRegex?.test(url.pathname) ?? false) ||
    (rule.urlRegex?.test(full) ?? false)
  )
}

function isConstrainedSiteButWrongPath(url: URL, hostname: string): boolean {
  return CONSTRAINED_SITE_RULES.some(
    (rule) =>
      siteRuleMatchesHost(url, hostname, rule) && !siteRuleMatchesPath(url, rule)
  )
}

export function isSupportedRuntimeFrameUrl(href: string | null | undefined): boolean {
  if (!href) return false
  try {
    if (isPostApplyConfirmationPath(new URL(href))) return false
  } catch {
    /* ignore */
  }
  return IFRAME_CHECK_PATTERN.some((token) => href.includes(token))
}

function pageSourcesIndicateForeignAts(
  pageHostname: string,
  pageSourceUrls: string[]
): boolean {
  for (const sourceUrl of pageSourceUrls) {
    if (
      PAGE_SOURCE_ATS_LIST.some(
        ([keyword, atsDomain]) =>
          !hostnameEqualsOrIsSubdomain(pageHostname, atsDomain) &&
          sourceUrl.includes(keyword)
      )
    ) {
      return true
    }
  }
  return false
}

function isSupportedTopLevelApplicationUrl(url: URL): boolean {
  if (isPostApplyConfirmationPath(url)) return false
  const hostname = url.hostname
  if (isConstrainedSiteButWrongPath(url, hostname)) return false
  return (
    SUPPORT_DOMAINS.some((domain) =>
      hostnameEqualsOrIsSubdomain(hostname, domain)
    ) ||
    SUPPORT_PATTERNS.some((pattern) => pattern.includes(url.href)) ||
    CONSTRAINED_SITE_RULES.some(
      (rule) =>
        siteRuleMatchesHost(url, hostname, rule) && siteRuleMatchesPath(url, rule)
    )
  )
}

function hasSupportedEmbeddedFrame(iframeUrls: string[]): boolean {
  return iframeUrls.some((iframeUrl) => isSupportedRuntimeFrameUrl(iframeUrl))
}

export function getRuntimeActivationReason({
  href,
  isTopFrame,
  iframeUrls = [],
  pageSourceUrls = []
}: {
  href: string
  isTopFrame: boolean
  iframeUrls?: string[]
  pageSourceUrls?: string[]
}): RuntimeActivationReason | null {
  let url: URL
  try {
    url = new URL(href)
  } catch {
    return null
  }

  if (agentDomains.some((domain) => hostnameEqualsOrIsSubdomain(url.hostname, domain))) {
    return "jobright_domain"
  }
  if (hostnameEqualsOrIsSubdomain(url.hostname, "linkedin.com")) {
    return "linkedin_domain"
  }
  if (!isTopFrame) {
    return isSupportedRuntimeFrameUrl(url.href) ? "supported_frame_url" : null
  }
  if (isSupportedTopLevelApplicationUrl(url)) {
    return "supported_top_url"
  }
  if (
    !isConstrainedSiteButWrongPath(url, url.hostname) &&
    QUERY_PARAM_LIST.some((param) => url.searchParams.has(param))
  ) {
    return "supported_query_param"
  }
  if (pageSourcesIndicateForeignAts(url.hostname, pageSourceUrls)) {
    return "supported_page_source"
  }
  if (hasSupportedEmbeddedFrame(iframeUrls)) {
    return "supported_embedded_frame"
  }
  return null
}

function getActivationReasonFromElement(
  element: Element
): RuntimeActivationReason | null {
  if (element instanceof HTMLIFrameElement) {
    return isSupportedRuntimeFrameUrl(element.src)
      ? "supported_embedded_frame"
      : null
  }
  if (
    element instanceof HTMLScriptElement ||
    element instanceof HTMLLinkElement
  ) {
    const sourceUrl =
      element instanceof HTMLScriptElement ? element.src : element.href
    if (pageSourcesIndicateForeignAts(window.location.hostname, [sourceUrl])) {
      return "supported_page_source"
    }
  }
  return null
}

function getActivationReasonFromNode(
  node: Node
): RuntimeActivationReason | null {
  if (!(node instanceof Element)) return null
  const direct = getActivationReasonFromElement(node)
  if (direct) return direct
  for (const child of node.querySelectorAll(
    "iframe[src], script[src], link[href]"
  )) {
    const reason = getActivationReasonFromElement(child)
    if (reason) return reason
  }
  return null
}

export function observeRuntimeActivationSignals(
  onActivated: (reason: RuntimeActivationReason) => void
): () => void {
  if (
    typeof MutationObserver === "undefined" ||
    typeof document === "undefined" ||
    window.top !== window.self ||
    !document.documentElement
  ) {
    return () => {}
  }

  let observer: MutationObserver | null = null
  const activate = (reason: RuntimeActivationReason) => {
    observer?.disconnect()
    observer = null
    onActivated(reason)
  }

  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "attributes") {
        const reason = getActivationReasonFromNode(mutation.target)
        if (reason) {
          activate(reason)
          return
        }
      }
      for (const added of mutation.addedNodes) {
        const reason = getActivationReasonFromNode(added)
        if (reason) {
          activate(reason)
          return
        }
      }
    }
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["src", "href"],
    childList: true,
    subtree: true
  })

  return () => {
    observer?.disconnect()
    observer = null
  }
}
