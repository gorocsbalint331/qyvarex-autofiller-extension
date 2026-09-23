// @ts-nocheck
/**
 * Jobright API / host / cookie domain constants for the helper runtime.
 */

function resolveDomains() {
  return {
    apiDomain: "https://api.jobright.ai",
    hostDomain: "https://jobright.ai",
    cookieDomain: ".jobright.ai",
  }
}

const domains = resolveDomains()

export const API_DOMAIN = domains.apiDomain
export const HOST_DOMAIN = domains.hostDomain
export const COOKIE_DOMAIN = domains.cookieDomain

export const agentDomains = [
  "localhost",
  "jobright.ai",
  "preprod.jobright.ai",
  "beta.jobright-internal.com",
  "test-baseline.jobright-internal.com",
  "dev.jobright-internal.com",
  "jobright-internal.com",
  "alpha.jobright-internal.com",
]
