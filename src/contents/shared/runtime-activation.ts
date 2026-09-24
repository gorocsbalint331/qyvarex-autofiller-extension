// @ts-nocheck
/**
 * Decide whether the helper runtime should activate on this frame.
 * Team fork: tight activation — ATS / apply surfaces only.
 */

import { agentDomains } from "../../api/env-resolver.ts"
import {
  CONSTRAINED_SITE_RULES,
  IFRAME_CHECK_PATTERN,
  PAGE_SOURCE_ATS_LIST,
  QUERY_PARAM_LIST,
  SUPPORT_DOMAINS,
  SUPPORT_PATTERNS,
} from "../../core/supported-sites.ts"

const POST_APPLY_PATH_REGEXES = [
  "confirmation",
  "applyConfirmation",
  "careers/chatbot",
  "success(?:ful)?",
  "thank[_-]?you",
  "thanks",
  "SuccessfulRegistration",
].map((segment) => new RegExp(`/${segment}(?=/|$)`, "i"))

const SAFE_QUERY_PARAMS = new Set([
  "gh_jid",
  "gh_src",
  "ashby_jid",
  "LeverAppId",
  "jobviteiframe",
])

const WORKABLE_HOST_RE = /workable\.com$/i
const LINKEDIN_JOB_PATH_RE =
  /^\/(?:jobs|job|easy-apply|in\/[^/]+\/overlay\/apply|hiring|talent)\b/i

function hostnameEqualsOrIsSubdomain(hostname, domain) {
  return hostname === domain || hostname.endsWith(`.${domain}`)
}

function isPostApplyConfirmationPath(url) {
  return POST_APPLY_PATH_REGEXES.some((re) => re.test(url.pathname))
}

function siteRuleMatchesHost(url, hostname, rule) {
  return (
    rule.domains.some((domain) =>
      hostnameEqualsOrIsSubdomain(hostname, domain),
    ) || rule.patterns.some((pattern) => pattern.includes(url.href))
  )
}

function siteRuleMatchesPath(url, rule) {
  const full = `${url.pathname}${url.search}${url.hash}`
  return (
    (rule.pathRegex?.test(url.pathname) ?? false) ||
    (rule.urlRegex?.test(full) ?? false)
  )
}

function isConstrainedSiteButWrongPath(url, hostname) {
  return CONSTRAINED_SITE_RULES.some(
    (rule) =>
      siteRuleMatchesHost(url, hostname, rule) &&
      !siteRuleMatchesPath(url, rule),
  )
}

export function isSupportedRuntimeFrameUrl(href) {
  if (!href) return false
  try {
    if (isPostApplyConfirmationPath(new URL(href))) return false
  } catch {
    /* ignore */
  }
  return IFRAME_CHECK_PATTERN.some((token) => href.includes(token))
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function sourceUrlIndicatesAts(sourceUrl, keyword, atsDomain) {
  try {
    const src = new URL(sourceUrl)
    if (hostnameEqualsOrIsSubdomain(src.hostname, atsDomain)) return true
    const hay = `${src.hostname}${src.pathname}`.toLowerCase()
    const needle = keyword.toLowerCase()
    if (needle.includes(".")) return hay.includes(needle)
    return new RegExp(
      `(?:^|[./_-])${escapeRegExp(needle)}(?:[./_-]|$)`,
      "i",
    ).test(hay)
  } catch {
    return false
  }
}

function pageSourcesIndicateForeignAts(pageHostname, pageSourceUrls) {
  for (const sourceUrl of pageSourceUrls) {
    for (const [keyword, atsDomain] of PAGE_SOURCE_ATS_LIST) {
      if (hostnameEqualsOrIsSubdomain(pageHostname, atsDomain)) continue
      if (sourceUrlIndicatesAts(sourceUrl, keyword, atsDomain)) return true
    }
  }
  return false
}

function isSupportedTopLevelApplicationUrl(url) {
  if (isPostApplyConfirmationPath(url)) return false
  const hostname = url.hostname
  if (isConstrainedSiteButWrongPath(url, hostname)) return false
  return (
    SUPPORT_DOMAINS.some((domain) =>
      hostnameEqualsOrIsSubdomain(hostname, domain),
    ) ||
    SUPPORT_PATTERNS.some((pattern) => pattern.includes(url.href)) ||
    CONSTRAINED_SITE_RULES.some(
      (rule) =>
        siteRuleMatchesHost(url, hostname, rule) &&
        siteRuleMatchesPath(url, rule),
    )
  )
}

function hasSupportedEmbeddedFrame(iframeUrls) {
  return iframeUrls.some((iframeUrl) => isSupportedRuntimeFrameUrl(iframeUrl))
}

function isLinkedInJobSurface(url) {
  return (
    hostnameEqualsOrIsSubdomain(url.hostname, "linkedin.com") &&
    LINKEDIN_JOB_PATH_RE.test(url.pathname)
  )
}

function hasSafeAtsQueryParam(url) {
  for (const param of QUERY_PARAM_LIST) {
    if (!url.searchParams.has(param)) continue
    if (SAFE_QUERY_PARAMS.has(param)) return true
    if (param === "selectedJobId" && WORKABLE_HOST_RE.test(url.hostname)) {
      return true
    }
  }
  return false
}

function isAgentProductHost(hostname) {
  return agentDomains.some((domain) =>
    hostnameEqualsOrIsSubdomain(hostname, domain),
  )
}

export function getRuntimeActivationReason({
  href,
  isTopFrame,
  iframeUrls = [],
  pageSourceUrls = [],
}) {
  let url
  try {
    url = new URL(href)
  } catch {
    return null
  }

  if (isAgentProductHost(url.hostname)) {
    return "jobright_domain"
  }
  if (isLinkedInJobSurface(url)) {
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
    hasSafeAtsQueryParam(url)
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

function getActivationReasonFromElement(element) {
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

function getActivationReasonFromNode(node) {
  if (!(node instanceof Element)) return null
  const direct = getActivationReasonFromElement(node)
  if (direct) return direct
  for (const child of node.querySelectorAll(
    "iframe[src], script[src], link[href]",
  )) {
    const reason = getActivationReasonFromElement(child)
    if (reason) return reason
  }
  return null
}

export function observeRuntimeActivationSignals(onActivated) {
  if (
    typeof MutationObserver === "undefined" ||
    typeof document === "undefined" ||
    window.top !== window.self ||
    !document.documentElement
  ) {
    return () => {}
  }

  let observer = null
  const activate = (reason) => {
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
    subtree: true,
  })

  return () => {
    observer?.disconnect()
    observer = null
  }
}
