// @ts-nocheck
/**
 * Detect Jobright agent pages and whether resume sync should run for a URL.
 */

import * as envResolver from "../api/env-resolver.js"

const FALLBACK_ORIGIN = "https://jobright.ai"

function currentPageUrl() {
  return typeof window !== "undefined" && window.location?.href
    ? window.location.href
    : FALLBACK_ORIGIN
}

function isAgentPath(pathname) {
  return pathname === "/agent" || pathname.startsWith("/agent/")
}

export function isJobrightAgentPageUrl(url) {
  try {
    const parsed = new URL(url, currentPageUrl())
    return (
      envResolver.agentDomains.includes(parsed.hostname) &&
      isAgentPath(parsed.pathname)
    )
  } catch {
    return false
  }
}

export function shouldSyncResumeToAutofillOnUrl(url) {
  return !isJobrightAgentPageUrl(url)
}
