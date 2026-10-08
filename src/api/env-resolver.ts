// @ts-nocheck
/**
 * Host / API constants for the helper runtime (team fork).
 * Keep self-contained — this tree is bundled without Plasmo aliases.
 * Override by rebuilding after changing TEAM_HUB below (or Options for API calls
 * that go through background → team-client).
 */

const TEAM_HUB = "https://jobright-team-site.vercel.app"
const DEV_HUB = "http://localhost:3210"

function resolveDomains() {
  const isLocal =
    typeof location !== "undefined" &&
    (location.hostname === "localhost" || location.hostname === "127.0.0.1")
  // Prefer prod hub in injected pages; local hub only when developing against localhost hub.
  const hub = (isLocal ? DEV_HUB : TEAM_HUB).replace(/\/+$/, "")
  return {
    apiDomain: hub,
    hostDomain: hub,
    cookieDomain: ""
  }
}

const domains = resolveDomains()

export const API_DOMAIN = domains.apiDomain
export const HOST_DOMAIN = domains.hostDomain
export const COOKIE_DOMAIN = domains.cookieDomain

/** Team hub host only — not localhost (avoids activating on unrelated local apps). */
export const agentDomains = ["jobright-team-site.vercel.app"]
