/**
 * Site-agnostic job page scrape: schema.org JobPosting JSON-LD first, then
 * microdata / meta tags / headings / description-like containers.
 */

export type GenericJobData = {
  jobTitle: string
  companyName: string
  jobDescription: string
}

const MAX_DESCRIPTION_LENGTH = 20000
const MIN_DESCRIPTION_LENGTH = 200

/** Site names that belong to job boards / ATS vendors rather than the employer. */
const PLATFORM_NAMES = new Set(
  [
    "ashby",
    "bamboohr",
    "breezy hr",
    "glassdoor",
    "greenhouse",
    "icims",
    "indeed",
    "jobvite",
    "lever",
    "linkedin",
    "recruitee",
    "recruiterflow",
    "smartrecruiters",
    "taleo",
    "workable",
    "workday",
    "ziprecruiter"
  ].map((name) => name.toLowerCase())
)

function normalizeText(text: string | null | undefined) {
  return (text || "")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t\f\v\r]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

function htmlToText(html: string): string {
  if (!/[<&]/.test(html)) return normalizeText(html)
  const doc = new DOMParser().parseFromString(html, "text/html")
  doc.querySelectorAll("br").forEach((br) => br.replaceWith("\n"))
  doc.querySelectorAll("li").forEach((li) => li.prepend("- "))
  doc
    .querySelectorAll("p, div, li, h1, h2, h3, h4, h5, h6, ul, ol, tr, section")
    .forEach((el) => el.append("\n"))
  const text = normalizeText(doc.body?.textContent)
  // Some sites HTML-escape the description twice (&lt;p&gt;…)
  return /<\/?(p|li|ul|br|div|strong)\b/i.test(text) ? htmlToText(text) : text
}

function isPlatformName(name: string) {
  return PLATFORM_NAMES.has(name.trim().toLowerCase())
}

function isJobPosting(node: any) {
  const type = node?.["@type"]
  return Array.isArray(type) ? type.includes("JobPosting") : type === "JobPosting"
}

function findJobPosting(node: any, depth = 0): any {
  if (!node || typeof node !== "object" || depth > 5) return null
  if (Array.isArray(node)) {
    for (const item of node) {
      const found = findJobPosting(item, depth + 1)
      if (found) return found
    }
    return null
  }
  if (isJobPosting(node)) return node
  return findJobPosting(node["@graph"], depth + 1)
}

function scrapeJsonLd(): Partial<GenericJobData> {
  for (const script of document.querySelectorAll('script[type="application/ld+json"]')) {
    let parsed: unknown
    try {
      parsed = JSON.parse(script.textContent || "")
    } catch {
      continue
    }
    const posting = findJobPosting(parsed)
    if (!posting) continue
    const org = posting.hiringOrganization
    const company = typeof org === "string" ? org : org?.name
    return {
      jobTitle: normalizeText(String(posting.title || posting.name || "")),
      companyName: typeof company === "string" ? normalizeText(company) : "",
      jobDescription:
        typeof posting.description === "string" ? htmlToText(posting.description) : ""
    }
  }
  return {}
}

function metaContent(selector: string) {
  return normalizeText(document.querySelector<HTMLMetaElement>(selector)?.content)
}

/** Ignore anything inside the helper's own UI. */
function isOwnUi(el: Element) {
  return !!el.closest('[id^="jobright"], [id^="plasmo"], plasmo-csui')
}

function visibleText(el: Element) {
  if (!(el instanceof HTMLElement) || isOwnUi(el)) return ""
  return normalizeText(el.innerText)
}

/** "Senior Engineer - Acme Corp | Careers" → ["Senior Engineer", "Acme Corp", "Careers"] */
function splitTitle(title: string) {
  return title
    .split(/\s+[-–—|·•]\s+|\s+at\s+/i)
    .map((part) => part.trim())
    .filter(Boolean)
}

function scrapeTitle(): string {
  const microdata = document.querySelector('[itemprop="title"]')
  const microdataText = microdata ? visibleText(microdata) : ""
  if (microdataText) return microdataText

  for (const h1 of document.querySelectorAll("h1")) {
    const text = visibleText(h1)
    if (text.length >= 3 && text.length <= 200) return text
  }
  const ogTitle = metaContent('meta[property="og:title"]')
  return splitTitle(ogTitle || document.title)[0] || ""
}

function scrapeCompany(jobTitle: string): string {
  const microdata = document.querySelector(
    '[itemprop="hiringOrganization"] [itemprop="name"], [itemprop="hiringOrganization"]'
  )
  const microdataText = microdata ? visibleText(microdata) : ""
  if (microdataText && microdataText.length <= 120) return microdataText

  const siteName =
    metaContent('meta[property="og:site_name"]') ||
    metaContent('meta[name="application-name"]')
  if (siteName && !isPlatformName(siteName)) return siteName

  const parts = splitTitle(metaContent('meta[property="og:title"]') || document.title)
  const titleLower = jobTitle.trim().toLowerCase()
  const candidate = parts.find(
    (part) =>
      part.toLowerCase() !== titleLower &&
      !isPlatformName(part) &&
      !/^(careers?|jobs?|job details|apply)$/i.test(part)
  )
  return candidate || ""
}

function scrapeDescription(): string {
  const candidates = document.querySelectorAll(
    [
      '[itemprop="description"]',
      '[class*="job-description" i]',
      '[class*="jobdescription" i]',
      '[id*="job-description" i]',
      '[id*="jobdescription" i]',
      '[class*="description" i]',
      '[id*="description" i]',
      '[class*="job-details" i]',
      '[class*="posting" i]'
    ].join(", ")
  )
  let best = ""
  for (const el of candidates) {
    const text = visibleText(el)
    if (text.length > best.length) best = text
  }
  if (best.length < MIN_DESCRIPTION_LENGTH) {
    for (const selector of ["article", "main", '[role="main"]']) {
      const el = document.querySelector(selector)
      const text = el ? visibleText(el) : ""
      if (text.length >= MIN_DESCRIPTION_LENGTH) {
        best = text
        break
      }
    }
  }
  return best.length >= MIN_DESCRIPTION_LENGTH ? best.slice(0, MAX_DESCRIPTION_LENGTH) : ""
}

export function scrapeGenericJobData(): GenericJobData {
  const data: GenericJobData = { jobTitle: "", companyName: "", jobDescription: "" }
  try {
    const fromJsonLd = scrapeJsonLd()
    data.jobTitle = fromJsonLd.jobTitle || scrapeTitle()
    data.companyName = fromJsonLd.companyName || scrapeCompany(data.jobTitle)
    data.jobDescription = fromJsonLd.jobDescription || scrapeDescription()
  } catch (error) {
    console.warn("[GenericJobScraper] Error scraping job page:", error)
  }
  return data
}
