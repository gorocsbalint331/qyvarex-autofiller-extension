/**
 * Resolve ATS id from hostname/href using the Jobright site registry.
 */

import { SITE_REGISTRY, type SiteDefinition } from "~core/native-supported-sites"

export type RegistryAtsId = string

function hostMatchesDomain(hostname: string, domain: string): boolean {
  const h = hostname.toLowerCase()
  const d = domain.toLowerCase()
  return h === d || h.endsWith("." + d)
}

function hostMatchesPattern(hostname: string, pattern: string): boolean {
  // MatchPattern-like: *://*.example.com/* or *://example.com/*
  const m = /^[^:]+:\/\/([^/]+)/.exec(pattern)
  if (!m) return false
  let host = m[1].toLowerCase()
  if (host.startsWith("*.")) {
    const base = host.slice(2)
    return hostname === base || hostname.endsWith("." + base)
  }
  if (host === "*") return true
  return hostname === host || hostname.endsWith("." + host)
}

function pathOk(pathname: string, href: string, site: SiteDefinition): boolean {
  if (site.pathRegex) {
    try {
      if (!new RegExp(site.pathRegex).test(pathname)) return false
    } catch {
      return false
    }
  }
  if (site.urlRegex) {
    try {
      if (!new RegExp(site.urlRegex).test(href)) return false
    } catch {
      return false
    }
  }
  return true
}

/**
 * Best-effort ATS id from SITE_REGISTRY (greenhouse, workday, …).
 * Returns null when nothing matches.
 */
export function detectRegistryAts(
  hostname: string,
  href = ""
): RegistryAtsId | null {
  const h = (hostname || "").toLowerCase()
  let pathname = "/"
  try {
    pathname = href ? new URL(href).pathname : "/"
  } catch {
    pathname = "/"
  }

  let best: { id: string; score: number } | null = null

  for (const [id, site] of Object.entries(SITE_REGISTRY)) {
    let score = 0
    const domains = site.domains ?? []
    const patterns = site.patterns ?? []

    for (const d of domains) {
      if (hostMatchesDomain(h, d)) {
        score = Math.max(score, d.length + 10)
      }
    }
    for (const p of patterns) {
      if (hostMatchesPattern(h, p)) {
        score = Math.max(score, 20)
      }
    }
    if (score === 0) continue
    if (!pathOk(pathname, href || `https://${h}/`, site)) continue

    // Prefer constrained path matches
    if (site.pathRegex || site.urlRegex) score += 50

    if (!best || score > best.score) best = { id, score }
  }

  return best?.id ?? null
}
