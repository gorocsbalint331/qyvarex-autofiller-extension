// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/utils/job-id.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

import * as sharedConstants from "../contents/shared/constants.ts"
import * as coreUtils from "../core/utils.js"
import * as atsDetection from "./atsDetection.ts"

const JOB_ID_QUERY_KEY = "jr_id"
const RESUME_ID_QUERY_KEY = "resume_id"
const EXCLUDED_DOMAINS = ["linkedin.com", "jobright.ai"]
const DOMAIN_EQUIVALENCE_GROUPS = [
  ["joinbytedance.com", "jobs.bytedance.com"],
  ["hrmdirect.com", "clearcompany.com"],
]

// Stashed regexes — do not rename escape sequences or flags.
const UKG_PATH_RE =
  /^\/.+\/JobBoard\/[^/]+\/(?:Account\/Register|OpportunityApply)(?:\/|$)/
const CATSONE_PATH_RE = /^\/careers\/[^/]+\/jobs\/[^/]+\/apply\/?$/
const TIKTOK_PATH_RE = /^\/[^/]+\/resume\/[^/]+\/apply\/?$/
const JOBSCORE_PATH_RE = /^\/apply_flow\//

const REFERRER_TRUST_RULES = [
  {
    domain: "clearcompany.com",
  },
  {
    domain: "careers-page.com",
  },
  {
    domain: "jobscore.com",
    pathPattern: JOBSCORE_PATH_RE,
  },
  {
    domain: "ultipro.com",
    pathPattern: UKG_PATH_RE,
  },
  {
    domain: "ultipro.ca",
    pathPattern: UKG_PATH_RE,
  },
  {
    domain: "rec.pro.ukg.net",
    pathPattern: UKG_PATH_RE,
  },
  {
    domain: "catsone.com",
    pathPattern: CATSONE_PATH_RE,
  },
  {
    domain: "tiktokusds.com",
    pathPattern: TIKTOK_PATH_RE,
  },
]

const NESTED_URL_TRUST_RULES = [
  {
    domain: "ultipro.com",
    pathPattern: UKG_PATH_RE,
  },
  {
    domain: "ultipro.ca",
    pathPattern: UKG_PATH_RE,
  },
  {
    domain: "rec.pro.ukg.net",
    pathPattern: UKG_PATH_RE,
  },
]

const NESTED_URL_PARAM_KEYS = ["cancelUrl", "redirectUrl"]

function extractJobIdFromUrl(url) {
  if (!url) return null
  try {
    let parsed = new URL(url)
    let jobId = parsed.searchParams.get(JOB_ID_QUERY_KEY)
    return jobId?.trim() || null
  } catch {
    return null
  }
}

function setJobIdInUrl(url, jobId) {
  let parsed = new URL(url)
  return parsed.searchParams.set(JOB_ID_QUERY_KEY, jobId), parsed.toString()
}

function resolveTailorSourceResumeId({
  disableUploadResume,
  lastUsedResume,
  resumeCollection,
}) {
  if (
    disableUploadResume ||
    !lastUsedResume ||
    lastUsedResume.startsWith(sharedConstants.TAILOR_RESUME_ID_PREFIX)
  ) {
    return
  }
  let resume = resumeCollection.find(
    (item) => item.resumeId === lastUsedResume,
  )
  let resumeId = resume?.resumeId?.trim()
  if (!(!resumeId || resume?.primary)) return resumeId
}

function buildJobrightTailorUrl(origin, jobId, options = {}) {
  let url = new URL(`/jobs/info/${jobId}`, origin)
  let resumeId = options.resumeId?.trim()
  return (
    url.searchParams.set("plugin_tailor", "1"),
    resumeId && url.searchParams.set(RESUME_ID_QUERY_KEY, resumeId),
    setJobIdInUrl(url.toString(), jobId)
  )
}

function isExcludedDomain(hostname) {
  return coreUtils.matchesAnyDomain(hostname.toLowerCase(), EXCLUDED_DOMAINS)
}

function areEquivalentDomains(hostnameA, hostnameB) {
  return DOMAIN_EQUIVALENCE_GROUPS.some(
    (group) =>
      coreUtils.matchesAnyDomain(hostnameA, group) &&
      coreUtils.matchesAnyDomain(hostnameB, group),
  )
}

function isTrustedHostnameForUrl(hostname, trustedHostname, href) {
  let lowerHostname = hostname.toLowerCase()
  let lowerTrusted = trustedHostname.toLowerCase()
  return (
    coreUtils.isDomainMatch(lowerHostname, lowerTrusted) ||
    coreUtils.isDomainMatch(lowerTrusted, lowerHostname) ||
    areEquivalentDomains(lowerHostname, lowerTrusted) ||
    null !== atsDetection.getInventoryMatchSourceByUrl(href)
  )
}

function isTrustedHostname(hostname, trustedHostname) {
  let lowerHostname = hostname.toLowerCase()
  let lowerTrusted = trustedHostname.toLowerCase()
  return (
    coreUtils.isDomainMatch(lowerHostname, lowerTrusted) ||
    coreUtils.isDomainMatch(lowerTrusted, lowerHostname) ||
    areEquivalentDomains(lowerHostname, lowerTrusted)
  )
}

function safeSetJobIdInUrl(url, jobId, trustedHostname) {
  let parsed
  if (!jobId || !url || url.startsWith("#")) return null
  try {
    parsed = new URL(url)
  } catch {
    return null
  }
  return !["http:", "https:"].includes(parsed.protocol) ||
    parsed.searchParams.has(JOB_ID_QUERY_KEY) ||
    isExcludedDomain(parsed.hostname) ||
    !isTrustedHostnameForUrl(parsed.hostname, trustedHostname, parsed.href)
    ? null
    : (parsed.searchParams.set(JOB_ID_QUERY_KEY, jobId), parsed.toString())
}

function extractTrustedJobIdFromReferrer(
  referrerUrl,
  trustedHostname,
  pathname = "",
) {
  let parsed
  if (!matchesTrustRules(REFERRER_TRUST_RULES, trustedHostname, pathname) || !referrerUrl) {
    return null
  }
  try {
    parsed = new URL(referrerUrl)
  } catch {
    return null
  }
  if (
    !["http:", "https:"].includes(parsed.protocol) ||
    isExcludedDomain(parsed.hostname) ||
    !isTrustedHostnameForUrl(parsed.hostname, trustedHostname, parsed.href)
  ) {
    return null
  }
  let jobId = parsed.searchParams.get(JOB_ID_QUERY_KEY)
  return jobId?.trim() || null
}

function extractTrustedJobIdFromNestedUrlParams(
  pageUrl,
  trustedHostname,
  pathname = "",
) {
  let parsed
  if (
    !findMatchingTrustRule(NESTED_URL_TRUST_RULES, trustedHostname, pathname) ||
    !pageUrl
  ) {
    return null
  }
  try {
    parsed = new URL(pageUrl)
  } catch {
    return null
  }
  for (let paramKey of NESTED_URL_PARAM_KEYS) {
    for (let nestedValue of parsed.searchParams.getAll(paramKey)) {
      let nestedUrl
      if (!nestedValue) continue
      try {
        nestedUrl = new URL(nestedValue, parsed.toString())
      } catch {
        continue
      }
      if (
        !["http:", "https:"].includes(nestedUrl.protocol) ||
        isExcludedDomain(nestedUrl.hostname) ||
        !isTrustedHostname(nestedUrl.hostname, trustedHostname)
      ) {
        continue
      }
      let jobId = nestedUrl.searchParams.get(JOB_ID_QUERY_KEY)
      if (jobId?.trim()) return jobId.trim()
    }
  }
  return null
}

function matchesTrustRules(rules, hostname, pathname) {
  return findMatchingTrustRule(rules, hostname, pathname)
}

function findMatchingTrustRule(rules, hostname, pathname) {
  let lowerHostname = hostname.toLowerCase()
  return (
    rules.find(
      (rule) =>
        coreUtils.isDomainMatch(lowerHostname, rule.domain) &&
        (!rule.pathPattern || rule.pathPattern.test(pathname)),
    ) ?? null
  )
}

export {
  JOB_ID_QUERY_KEY,
  buildJobrightTailorUrl,
  extractJobIdFromUrl,
  extractTrustedJobIdFromNestedUrlParams,
  extractTrustedJobIdFromReferrer,
  resolveTailorSourceResumeId,
  safeSetJobIdInUrl,
  setJobIdInUrl,
}
