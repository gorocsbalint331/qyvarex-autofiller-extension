import { logApplication } from "~api/team-client"
import { resolveJobContext } from "../../lib/job-context"
import {
  applicationKey,
  preferCachedPosting,
  type PostingIdentity
} from "../../lib/posting-identity"

export { applicationKey }

export type ApplicationMeta = {
  title?: string
  company?: string
  link?: string
  cost?: string
  resume?: string
  country?: string
  other?: string
}

export type ApplicationLogResult = {
  ok: boolean
  duplicate?: boolean
  tabName?: string
  message?: string
}

const LOGGED_KEY = "qx-logged-applications"
const logInFlight = new Map<string, Promise<ApplicationLogResult>>()
const PENDING_PREFIX = "qx-pending-application:"
const DRAFT_PREFIX = "qx-autofill-posting:"
const DUPLICATE_WINDOW_MS = 24 * 60 * 60 * 1000
const LOGGED_RETENTION_MS = 7 * 24 * 60 * 60 * 1000
const PENDING_TTL_MS = 24 * 60 * 60 * 1000

/** Drop a confirmation suffix so the sheet stores the posting, not /thanks. */
function postingLink(link: string): string {
  try {
    const url = new URL(link)
    url.pathname = url.pathname.replace(/\/(thanks|thank-you|confirmation|success)\/?$/i, "")
    if (!url.hash || url.hash === "#") url.hash = ""
    return url.toString()
  } catch {
    return link
  }
}

function localAppliedDate() {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, "0")
  const d = String(now.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

async function readLogged(): Promise<Record<string, number>> {
  const stored = await chrome.storage.local.get(LOGGED_KEY)
  const map = stored[LOGGED_KEY]
  return map && typeof map === "object" ? (map as Record<string, number>) : {}
}

async function markLogged(key: string) {
  const now = Date.now()
  const entries = Object.entries(await readLogged()).filter(
    ([, at]) => now - at < LOGGED_RETENTION_MS
  )
  await chrome.storage.local.set({
    [LOGGED_KEY]: { ...Object.fromEntries(entries), [key]: now }
  })
}

const BAD_TITLE = /^(null|undefined|untitled(?: role)?|careers?|jobs?|apply|application)$/i
const PLATFORM_COMPANY =
  /spark hire|comeet|greenhouse|lever\b|ashby|workday|workable|smartrecruiters|jobvite|icims/i

function pinpointCompany(link: string): string {
  try {
    const host = new URL(link).hostname.toLowerCase().match(/^([a-z0-9-]+)\.pinpointhq\.com$/)
    if (!host || host[1] === "www" || host[1] === "app") return ""
    return host[1]
      .split("-")
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")
  } catch {
    return ""
  }
}

/** Comeet (and similar) pages brand the ATS, not the employer. Prefer the posting URL. */
function withPostingIdentity(meta: ApplicationMeta): ApplicationMeta {
  const link = (meta.link || "").trim()
  const fromUrl = resolveJobContext({ url: link })
  const title = (meta.title || "").trim()
  const company = (meta.company || "").trim()
  const comeet = /comeet\.com|comeet\.co/i.test(link)
  const hostCompany = pinpointCompany(link)
  const nextTitle =
    (comeet || !title || BAD_TITLE.test(title)) && fromUrl.title ? fromUrl.title : title
  const companyLower = company.toLowerCase()
  const titleLower = title.toLowerCase()
  const companyIsTitle =
    !!fromUrl.company &&
    !!company &&
    !!title &&
    (companyLower === titleLower ||
      titleLower.startsWith(companyLower) ||
      companyLower.startsWith(titleLower) ||
      (titleLower.endsWith(companyLower) && titleLower.length > companyLower.length))
  let nextCompany =
    (comeet || !company || companyIsTitle || PLATFORM_COMPANY.test(company)) && fromUrl.company
      ? fromUrl.company
      : company
  if (hostCompany && BAD_TITLE.test(nextTitle) && nextCompany && !BAD_TITLE.test(nextCompany)) {
    return { ...meta, title: nextCompany, company: hostCompany }
  }
  if (
    hostCompany &&
    (!nextCompany || nextCompany.toLowerCase() === nextTitle.toLowerCase() || BAD_TITLE.test(nextCompany))
  ) {
    nextCompany = hostCompany
  }
  const titled = nextCompany
    ? nextTitle
        .replace(
          new RegExp(
            `^${nextCompany.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*[-–—|:·•]\\s*`,
            "i"
          ),
          ""
        )
        .trim()
    : nextTitle
  return { ...meta, title: titled || nextTitle, company: nextCompany }
}

export async function recordApplication(
  meta: ApplicationMeta,
  options: { force?: boolean } = {}
): Promise<ApplicationLogResult> {
  meta = withPostingIdentity(meta)
  const link = postingLink((meta.link || "").trim())
  if (!link) return { ok: false, message: "link_required" }
  const key = applicationKey(link)
  const current = logInFlight.get(key)
  if (current) return current
  const run = writeApplication(meta, link, key, options.force === true)
  logInFlight.set(key, run)
  try {
    return await run
  } finally {
    logInFlight.delete(key)
  }
}

async function writeApplication(
  meta: ApplicationMeta,
  link: string,
  key: string,
  _force: boolean
): Promise<ApplicationLogResult> {
  const title = (meta.title || "").trim() || "Untitled role"
  if (!_force) {
    const loggedAt = (await readLogged())[key]
    if (loggedAt && Date.now() - loggedAt < DUPLICATE_WINDOW_MS) {
      return { ok: true, duplicate: true }
    }
  }
  const result = await logApplication({
    title: title.slice(0, 200),
    link,
    company: (meta.company || "").trim().slice(0, 120),
    cost: meta.cost || "",
    resume: meta.resume || "",
    country: meta.country || "",
    other: meta.other || "",
    appliedDate: localAppliedDate(),
    status: "applied"
  })
  if (!result.ok) {
    return { ok: false, message: result.message || result.error, tabName: result.tabName }
  }
  if (!result.duplicate) await markLogged(key)
  return { ok: true, duplicate: result.duplicate === true, tabName: result.tabName }
}

type StoredDraft = { meta: ApplicationMeta; savedAt: number }

/** Snapshot taken when Autofill is clicked. Submit uploads this, not the thank-you page. */
export async function rememberAutofillPosting(tabId: number, meta: ApplicationMeta) {
  const key = `${DRAFT_PREFIX}${tabId}`
  const existing = await peekAutofillPosting(tabId)
  const next = preferCachedPosting(existing, meta)
  const same =
    !!existing?.link && !!next.link && existing.link === next.link && existing.title === next.title
  const previous = same
    ? ((await chrome.storage.session.get(key))[key] as StoredDraft | undefined)
    : undefined
  await chrome.storage.session.set({
    [key]: { meta: next, savedAt: previous?.savedAt || Date.now() }
  })
}

export async function peekAutofillPosting(tabId: number): Promise<ApplicationMeta | null> {
  const key = `${DRAFT_PREFIX}${tabId}`
  const stored = (await chrome.storage.session.get(key))[key] as StoredDraft | undefined
  if (!stored?.meta) return null
  if (Date.now() - stored.savedAt >= PENDING_TTL_MS) {
    await chrome.storage.session.remove(key)
    return null
  }
  return stored.meta
}

/** Fill a submit-time or thank-you scrape with the Autofill snapshot for this tab. */
export async function withAutofillPosting(
  tabId: number | undefined,
  meta: PostingIdentity
): Promise<ApplicationMeta> {
  if (tabId == null) return meta
  const cached = await peekAutofillPosting(tabId)
  return preferCachedPosting(cached, meta)
}

/** Remember a submitted-but-unconfirmed application for a tab (survives navigation). */
export async function armPendingApplication(tabId: number, meta: ApplicationMeta) {
  await chrome.storage.session.set({
    [`${PENDING_PREFIX}${tabId}`]: { meta, armedAt: Date.now() }
  })
}

export async function peekPendingApplication(tabId: number): Promise<ApplicationMeta | null> {
  const key = `${PENDING_PREFIX}${tabId}`
  const stored = (await chrome.storage.session.get(key))[key] as
    | { meta: ApplicationMeta; armedAt: number }
    | undefined
  if (!stored) return null
  if (Date.now() - stored.armedAt >= PENDING_TTL_MS) {
    await chrome.storage.session.remove(key)
    return null
  }
  return stored.meta
}

export async function clearPendingApplication(tabId: number) {
  await chrome.storage.session.remove([
    `${PENDING_PREFIX}${tabId}`,
    `${DRAFT_PREFIX}${tabId}`
  ])
}
