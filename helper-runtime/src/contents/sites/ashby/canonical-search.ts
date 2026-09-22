// @ts-nocheck
/**
 * Ashby — canonical school name GraphQL search and prefetch cache.
 */

const SEARCH_SCHOOL_QUERY = `query ApiSearchSchoolByCanonicalName($name: String!, $organizationHostedJobsPageName: String!) {
result: searchCanonicalSchools(name: $name, organizationHostedJobsPageName: $organizationHostedJobsPageName) {
id
name
domain
country
__typename
}
}`

export function extractAshbyTenant(pageUrl = window.location.href) {
  try {
    let url = new URL(pageUrl)
    if (!url.hostname.endsWith("ashbyhq.com")) return ""
    return url.pathname.split("/").filter(Boolean)[0] ?? ""
  } catch {
    return ""
  }
}

let canonicalSchoolCache = new Map()

export function clearAshbyCanonicalSchoolCache() {
  canonicalSchoolCache.clear()
}

async function fetchCanonicalSchools(name, tenant) {
  if (!name || !tenant) return []
  try {
    let response = await fetch(
      "/api/non-user-graphql?op=ApiSearchSchoolByCanonicalName",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          operationName: "ApiSearchSchoolByCanonicalName",
          variables: {
            name,
            organizationHostedJobsPageName: tenant,
          },
          query: SEARCH_SCHOOL_QUERY,
        }),
      },
    )
    if (!response.ok) {
      console.warn("[Ashby canonical-search] non-200", response.status)
      return []
    }
    let json = await response.json()
    let results = json?.data?.result
    return Array.isArray(results) ? results : []
  } catch (error) {
    console.warn("[Ashby canonical-search] failed", error)
    return []
  }
}

function normalizeSchoolName(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/^the\s+/, "")
    .replace(/[^\p{L}\p{N}\s]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function schoolNameTokens(value) {
  return normalizeSchoolName(value).split(" ").filter(Boolean)
}

function pickBestSchoolMatch(results, query) {
  if (results.length === 0) return null

  let wanted = normalizeSchoolName(query)
  if (!wanted) return null

  let exact = results.find((item) => normalizeSchoolName(item.name) === wanted)
  if (exact) return exact

  let tokens = schoolNameTokens(query)
  if (tokens.length === 0) return null

  if (tokens.length === 1) {
    let only = tokens[0]
    return (
      results.find((item) => schoolNameTokens(item.name).includes(only)) ?? null
    )
  }

  let minOverlap = Math.max(tokens.length - 1, 2)
  return (
    results.find((item) => {
      let nameTokens = schoolNameTokens(item.name)
      let overlap = 0
      for (let token of nameTokens) {
        if (tokens.includes(token)) overlap++
        if (overlap >= minOverlap) return true
      }
      return false
    }) ?? null
  )
}

export function resolveAshbyCanonicalSchool(
  schoolName,
  tenant = extractAshbyTenant(),
) {
  if (!schoolName || !tenant) return Promise.resolve(null)

  let trimmed = String(schoolName).trim()
  if (!trimmed) return Promise.resolve(null)

  let cacheKey = `${tenant}|${normalizeSchoolName(trimmed)}`
  let cached = canonicalSchoolCache.get(cacheKey)
  if (cached) return cached

  let pending = resolveCanonicalSchoolUncached(trimmed, tenant)
  canonicalSchoolCache.set(cacheKey, pending)
  return pending
}

async function resolveCanonicalSchoolUncached(schoolName, tenant) {
  let results = await fetchCanonicalSchools(schoolName, tenant)
  let match = pickBestSchoolMatch(results, schoolName)
  if (match) return match.name
  if (results.length > 0) return null

  let shortTokens = schoolNameTokens(schoolName).slice(0, 4)
  if (shortTokens.length < 2) return null

  let shortQuery = shortTokens.join(" ")
  if (shortQuery === normalizeSchoolName(schoolName)) return null

  let retryResults = await fetchCanonicalSchools(shortQuery, tenant)
  return pickBestSchoolMatch(retryResults, schoolName)?.name ?? null
}

export function prefetchAshbySchoolCanonicalNames(
  education,
  tenant = extractAshbyTenant(),
) {
  if (!tenant || !Array.isArray(education)) return

  for (let entry of education) {
    if (!entry || typeof entry !== "object") continue
    let name = extractEducationSchoolName(entry)
    if (name) resolveAshbyCanonicalSchool(name, tenant).catch(() => null)
  }
}

function firstNonEmptyString(value) {
  if (typeof value === "string" && value.trim()) return value.trim()
  if (Array.isArray(value)) {
    for (let item of value) {
      let nested = firstNonEmptyString(item)
      if (nested) return nested
    }
  }
  return ""
}

function extractEducationSchoolName(entry) {
  for (let key of [
    entry.rawSchool,
    entry["School original answer"],
    entry.School,
    entry.school,
  ]) {
    let name = firstNonEmptyString(key)
    if (name) return name
  }
  return ""
}
