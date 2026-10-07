export type PostingIdentity = {
  title?: string
  company?: string
  link?: string
  cost?: string
  resume?: string
  country?: string
  other?: string
}

const TRACKING_PARAMS = /^(utm_|gh_src$|source$|ref$|lever-|src$|jr_id$|fbclid$|gclid$)/i
const GENERIC_NAME =
  /^(null|undefined|untitled(?: role)?|careers?|jobs?|apply|application|new application|job details|thank(?:s| you)(?: for (?:applying|your application))?|application (?:received|submitted|complete|sent)|success)$/i
const PLATFORM_COMPANY =
  /spark hire|comeet|greenhouse|lever\b|ashby|workday|workable|smartrecruiters|jobvite|icims|taleo|pinpoint/i

/** Same job → same key, whether logged from the form, the /apply URL, or a manual click. */
export function applicationKey(link: string): string {
  try {
    const u = new URL(link)
    const path = u.pathname
      .replace(/\/(apply|application|thanks|thank-you|confirmation|success)\/?$/i, "")
      .replace(/\/+$/, "")
    const params = [...u.searchParams.entries()]
      .filter(([k]) => !TRACKING_PARAMS.test(k))
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}=${v}`)
      .join("&")
    const hash = u.hash && u.hash !== "#" ? u.hash : ""
    return `${u.origin.toLowerCase()}${path}${params ? `?${params}` : ""}${hash}`
  } catch {
    return link.trim()
  }
}

function usable(text: string | undefined, kind: "title" | "company"): string {
  const value = (text || "").replace(/\s+/g, " ").trim()
  if (!value || GENERIC_NAME.test(value)) return ""
  if (kind === "company" && PLATFORM_COMPANY.test(value)) return ""
  return value
}

/** True when both URLs are the same posting, including /apply and /thanks. */
export function samePosting(cachedLink: string, liveLink: string): boolean {
  if (!cachedLink || !liveLink) return false
  try {
    const cached = new URL(cachedLink)
    const live = new URL(liveLink)
    if (cached.origin.toLowerCase() !== live.origin.toLowerCase()) return false
    const cachedKey = applicationKey(cachedLink)
    const liveKey = applicationKey(liveLink)
    if (cachedKey === liveKey || cachedKey.startsWith(liveKey) || liveKey.startsWith(cachedKey)) {
      return true
    }
    return false
  } catch {
    return false
  }
}

function jobTitle(text: string | undefined) {
  const value = usable(text, "title")
  if (!value || /thank|success|received your application|application (?:received|submitted)/i.test(value)) {
    return ""
  }
  return value
}

/**
 * Keep the URL, company, and role captured when Autofill was clicked.
 * Later pages (the form's last step, or the thank-you page) only fill gaps.
 */
export function preferCachedPosting(
  cached: PostingIdentity | null | undefined,
  live: PostingIdentity
): PostingIdentity {
  if (!cached?.link) return live
  const liveTitle = jobTitle(live.title)
  const cachedTitle = jobTitle(cached.title)
  const movedToAnotherRole =
    !samePosting(cached.link, live.link || "") &&
    !!liveTitle &&
    !!cachedTitle &&
    liveTitle.toLowerCase() !== cachedTitle.toLowerCase()
  if (movedToAnotherRole) return live
  const title = cachedTitle || live.title || cached.title || ""
  const cachedCompany = usable(cached.company, "company")
  const liveCompany = usable(live.company, "company")
  const company =
    (cachedCompany && cachedCompany.toLowerCase() !== title.trim().toLowerCase()
      ? cachedCompany
      : "") ||
    liveCompany ||
    live.company ||
    cached.company ||
    ""
  return {
    ...live,
    title,
    company,
    link: cached.link || live.link,
    cost: live.cost || cached.cost || "",
    resume: live.resume || cached.resume,
    country: live.country || cached.country,
    other: live.other || cached.other
  }
}
