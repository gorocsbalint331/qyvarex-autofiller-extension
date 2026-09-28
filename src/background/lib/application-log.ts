import { logApplication } from "~api/team-client"

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
const PENDING_PREFIX = "qx-pending-application:"
const DUPLICATE_WINDOW_MS = 24 * 60 * 60 * 1000
const LOGGED_RETENTION_MS = 7 * 24 * 60 * 60 * 1000
const PENDING_TTL_MS = 5 * 60 * 1000

const TRACKING_PARAMS = /^(utm_|gh_src$|source$|ref$|lever-|src$|jr_id$|fbclid$|gclid$)/i

/** Same job → same key, whether logged from the form, the /apply URL, or a manual click. */
function applicationKey(link: string): string {
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
    return `${u.origin.toLowerCase()}${path}${params ? `?${params}` : ""}`
  } catch {
    return link.trim()
  }
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

export async function recordApplication(
  meta: ApplicationMeta,
  { force = false }: { force?: boolean } = {}
): Promise<ApplicationLogResult> {
  const link = (meta.link || "").trim()
  const title = (meta.title || "").trim() || "Untitled role"
  if (!link) return { ok: false, message: "link_required" }

  const key = applicationKey(link)
  if (!force) {
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
    status: "applied"
  })
  if (!result.ok) {
    return { ok: false, message: result.message || result.error, tabName: result.tabName }
  }
  await markLogged(key)
  return { ok: true, tabName: result.tabName }
}

/** Remember a submitted-but-unconfirmed application for a tab (survives navigation). */
export async function armPendingApplication(tabId: number, meta: ApplicationMeta) {
  await chrome.storage.session.set({
    [`${PENDING_PREFIX}${tabId}`]: { meta, armedAt: Date.now() }
  })
}

export async function takePendingApplication(tabId: number): Promise<ApplicationMeta | null> {
  const key = `${PENDING_PREFIX}${tabId}`
  const stored = (await chrome.storage.session.get(key))[key] as
    | { meta: ApplicationMeta; armedAt: number }
    | undefined
  if (!stored) return null
  await chrome.storage.session.remove(key)
  return Date.now() - stored.armedAt < PENDING_TTL_MS ? stored.meta : null
}
