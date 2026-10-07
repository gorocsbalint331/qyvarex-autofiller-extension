export type JobContext = {
  title: string
  company: string
  url: string
}

function clean(text: string) {
  return text.replace(/\s+/g, " ").trim()
}

function humanizeSlug(slug: string) {
  const text = clean(decodeURIComponent(slug).replace(/[-_]+/g, " "))
  if (!text) return ""
  return text.replace(/\b[a-z]/g, (char) => char.toUpperCase())
}

function usableTitle(text: string) {
  const title = clean(text)
  if (!title || title.length > 90) return ""
  if (/^(apply|application|new application|job application|careers|jobs)$/i.test(title)) return ""
  return title
}

function titleFromDocumentTitle(docTitle: string, url = "") {
  const withoutVendor = clean(docTitle).replace(
    /\s*[|\-–—]\s*(comeet|lever|ashby|greenhouse|workday|indeed|linkedin).*$/i,
    ""
  )
  const parts = withoutVendor
    .split(/\s+[-–—|·•]\s+|\s+at\s+/i)
    .map(usableTitle)
    .filter(Boolean)
  const company = companyFromHost(url).toLowerCase()
  if (company && parts.length >= 2 && parts[0].toLowerCase() === company) return parts[1]
  return parts[0] || ""
}

function humanizeHostSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function isBoardLabel(text: string) {
  return /^(jobs by|careers at)\b/i.test(text) || /^(workable|greenhouse|lever|ashby|comeet)$/i.test(text)
}

/** Employer named beside the role, as in "Role | CoverGo | Jobs by Workable". */
export function companyBesideTitle(heading: string, title: string) {
  const titleLower = clean(title).toLowerCase()
  const candidates = clean(heading)
    .split(/\s+[-–—|·•]\s+|\s+at\s+/i)
    .map(clean)
    .filter((part) => {
      const lower = part.toLowerCase()
      if (!lower || isBoardLabel(part)) return false
      if (!titleLower) return true
      return lower !== titleLower && !titleLower.includes(lower) && !lower.includes(titleLower)
    })
  return candidates[candidates.length - 1] || ""
}

function companyFromWorkableUrl(url: string): string {
  try {
    const parsed = new URL(url)
    if (!/(^|\.)jobs\.workable\.com$/i.test(parsed.hostname)) return ""
    const slug = decodeURIComponent(parsed.pathname.split("/").filter(Boolean).pop() || "")
    const match = slug.match(/(?:^|-)at-([a-z0-9]+)$/i)
    return match ? humanizeSlug(match[1]) : ""
  } catch {
    return ""
  }
}

function companyFromHost(url: string): string {
  try {
    const parsed = new URL(url)
    const host = parsed.hostname.toLowerCase()
    const pinpoint = host.match(/^([a-z0-9-]+)\.pinpointhq\.com$/)
    if (pinpoint && pinpoint[1] !== "www" && pinpoint[1] !== "app") {
      return humanizeHostSlug(pinpoint[1])
    }
    if (/(^|\.)untypical\.co\.uk$/i.test(host)) return "untypical"
    if (/(^|\.)lever\.co$/i.test(host)) {
      const slug = parsed.pathname.split("/").filter(Boolean)[0] || ""
      if (slug && !/^(jobs|thanks)$/i.test(slug)) return humanizeHostSlug(slug)
    }
    return ""
  } catch {
    return ""
  }
}

function fromComeetUrl(url: string): { title: string; company: string } | null {
  try {
    const path = new URL(url).pathname
    const match = path.match(/\/jobs\/([^/]+)\/[^/]+\/([^/]+)(?:\/|$)/i)
    if (!match) return null
    const title = usableTitle(humanizeSlug(match[2]))
    const company = humanizeSlug(match[1])
    if (!title) return null
    return { title, company }
  } catch {
    return null
  }
}

/** Job title and company from the posting URL, heading, or document title. */
export function resolveJobContext(input: {
  url?: string
  h1?: string
  docTitle?: string
}): JobContext {
  const url = input.url || ""
  const fromUrl = url ? fromComeetUrl(url) : null
  const fromHeading = usableTitle(input.h1 || "")
  const fromDoc = titleFromDocumentTitle(input.docTitle || "", url)
  const title = fromUrl?.title || fromHeading || fromDoc || ""
  return {
    title,
    company:
      fromUrl?.company ||
      companyBesideTitle(input.docTitle || "", title) ||
      companyFromWorkableUrl(url) ||
      companyFromHost(url) ||
      "",
    url
  }
}
