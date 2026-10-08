/**
 * Answers learned on a job site are stored under extras.siteStepAnswers
 * keyed by `hostname|site`, and preferred over the profile's common answers
 * the next time that host is filled.
 */

export function jobsiteHostname(hostname: string) {
  return String(hostname || "")
    .trim()
    .toLowerCase()
    .replace(/^www\./, "")
}

export function jobsiteScopeKey(hostname: string) {
  const host = jobsiteHostname(hostname)
  return host ? `${host}|site` : ""
}

function stringMap(value: unknown): Record<string, string> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {}
  const out: Record<string, string> = {}
  for (const [key, answer] of Object.entries(value as Record<string, unknown>)) {
    if (typeof answer !== "string") continue
    const trimmed = answer.trim()
    if (key.trim() && trimmed) out[key] = trimmed
  }
  return out
}

export function siteAnswersForHost(
  extras: Record<string, unknown> | null | undefined,
  hostname: string
): Record<string, string> {
  const host = jobsiteHostname(hostname)
  const raw = extras?.siteStepAnswers
  if (!host || !raw || typeof raw !== "object" || Array.isArray(raw)) return {}

  const stepScoped: Record<string, string> = {}
  let siteWide: Record<string, string> = {}
  for (const [scopeKey, map] of Object.entries(raw as Record<string, unknown>)) {
    const scopeHost = jobsiteHostname(scopeKey.split("|")[0] || "")
    if (scopeHost !== host) continue
    const answers = stringMap(map)
    if (scopeKey === host || scopeKey.endsWith("|site")) {
      siteWide = { ...siteWide, ...answers }
    } else {
      Object.assign(stepScoped, answers)
    }
  }
  return { ...stepScoped, ...siteWide }
}

export function applySiteAnswers<
  T extends { answers: Record<string, string>; extras?: Record<string, unknown> }
>(hub: T, hostname: string): T {
  const shared = siteAnswersForHost(
    { siteStepAnswers: hub.extras?.sharedSiteAnswers },
    hostname
  )
  const scoped = siteAnswersForHost(hub.extras, hostname)
  if (!Object.keys(shared).length && !Object.keys(scoped).length) return hub
  return { ...hub, answers: { ...hub.answers, ...shared, ...scoped } }
}
