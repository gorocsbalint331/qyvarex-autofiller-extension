/**
 * Supported ATS site registry + derived lists.
 * Registry data lives in site-registry.raw.js (extracted from Jobright v1.23.0).
 */

import { MatchPattern } from "~core/match-patterns"
import { SITE_REGISTRY as RAW_REGISTRY } from "~core/site-registry.raw"

export type SiteDefinition = {
  domains?: string[]
  patterns?: string[]
  iframeDomains?: string[]
  queryParams?: string[]
  pathRegex?: string
  urlRegex?: string
  pageSourceKeyword?: string
  pageSourceDomain?: string
  iframeOnly?: boolean
}

export const SITE_REGISTRY = RAW_REGISTRY as Record<string, SiteDefinition>

export const PINPOINTHQ_CAREERS_CDN = "d2n5ied94mazop.cloudfront.net"
export const EIGHTFOLD_CAREERHUB_JOB_PATH_REGEX_SOURCE =
  "^/careerhub/explore/jobs/(?!apply/?$)[^/?#]+/?$"

const eightfoldCareerHubJobPathRegex = new RegExp(
  EIGHTFOLD_CAREERHUB_JOB_PATH_REGEX_SOURCE
)

export function isEightfoldCareerHubJobPath(pathname: string): boolean {
  return eightfoldCareerHubJobPathRegex.test(pathname)
}

function hostnameFromMatchPattern(pattern: string): string | null {
  const match = /^[^:]+:\/\/([^/]+)/.exec(pattern)
  if (!match) return null
  const host = match[1]
  if (!host || host === "*") return null
  return host.startsWith("*.") ? host.slice(2) : host
}

const unconstrainedSites = Object.values(SITE_REGISTRY).filter(
  (site) => !site.pathRegex && !site.urlRegex
)

export const SUPPORT_DOMAINS = unconstrainedSites.flatMap(
  (site) => site.domains ?? []
)

export const SUPPORT_PATTERNS = unconstrainedSites
  .flatMap((site) => site.patterns ?? [])
  .map((pattern) => new MatchPattern(pattern))

export const SUPPORT_HOSTS = Array.from(
  new Set(
    Object.values(SITE_REGISTRY).flatMap((site) => [
      ...(site.domains ?? []),
      ...(site.patterns ?? [])
        .map(hostnameFromMatchPattern)
        .filter((host): host is string => host !== null)
    ])
  )
)

export type ConstrainedSiteRule = {
  domains: string[]
  patterns: MatchPattern[]
  pathRegex?: RegExp
  urlRegex?: RegExp
}

export const CONSTRAINED_SITE_RULES: ConstrainedSiteRule[] = Object.values(
  SITE_REGISTRY
)
  .filter(
    (site) =>
      (typeof site.pathRegex === "string" && site.pathRegex.length > 0) ||
      (typeof site.urlRegex === "string" && site.urlRegex.length > 0)
  )
  .map((site) => ({
    domains: site.domains ?? [],
    patterns: (site.patterns ?? []).map((pattern) => new MatchPattern(pattern)),
    pathRegex: site.pathRegex ? new RegExp(site.pathRegex) : undefined,
    urlRegex: site.urlRegex ? new RegExp(site.urlRegex) : undefined
  }))

export const IFRAME_CHECK_PATTERN = Object.values(SITE_REGISTRY).flatMap(
  (site) => site.iframeDomains ?? []
)

export const PAGE_SOURCE_ATS_LIST = Object.values(SITE_REGISTRY)
  .filter((site) => site.pageSourceKeyword && site.pageSourceDomain)
  .map(
    (site) =>
      [site.pageSourceKeyword!, site.pageSourceDomain!] as [string, string]
  )

export const IFRAME_ONLY_DOMAINS = Object.values(SITE_REGISTRY)
  .filter((site) => site.iframeOnly)
  .flatMap((site) => site.domains ?? [])

export const QUERY_PARAM_LIST = Object.values(SITE_REGISTRY).flatMap(
  (site) => site.queryParams ?? []
)
