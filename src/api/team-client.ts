/**
 * Team Autofill Hub client — talks to team-site /api with session JWT or API token.
 */

import { Storage } from "@plasmohq/storage"

import { TEAM_SITE_URL, getHubUrl } from "~api/hub-env"
import type { AutofillInfoPayload, ProfileSummary, TeamSettings } from "~api/team-types"

const storage = new Storage({ area: "local" })

export const TEAM_SETTINGS_KEY = "teamHubSettings"

export const DEFAULT_TEAM_SETTINGS: TeamSettings = {
  siteUrl: getHubUrl(),
  apiToken: "",
  selectedProfileId: null,
  userEmail: "",
  userName: ""
}

export async function getTeamSettings(): Promise<TeamSettings> {
  const saved = await storage.get<TeamSettings>(TEAM_SETTINGS_KEY)
  return { ...DEFAULT_TEAM_SETTINGS, ...(saved || {}) }
}

export async function saveTeamSettings(
  patch: Partial<TeamSettings>
): Promise<TeamSettings> {
  const next = { ...(await getTeamSettings()), ...patch }
  await storage.set(TEAM_SETTINGS_KEY, next)
  return next
}

function joinUrl(base: string, path: string) {
  const root = base.replace(/\/+$/, "")
  const p = path.startsWith("/") ? path : `/${path}`
  return `${root}${p}`
}

export async function teamFetch<T = unknown>(
  path: string,
  init: RequestInit = {}
): Promise<{ ok: boolean; status: number; data: T }> {
  const settings = await getTeamSettings()
  if (!settings.apiToken) {
    return {
      ok: false,
      status: 401,
      data: { ok: false, error: "not_signed_in" } as T
    }
  }

  const headers = new Headers(init.headers || {})
  headers.set("Authorization", `Bearer ${settings.apiToken}`)
  if (init.body && !(init.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json")
  }

  const res = await fetch(joinUrl(settings.siteUrl, path), {
    ...init,
    headers
  })

  const contentType = res.headers.get("content-type") || ""
  let data: T
  if (contentType.includes("application/json")) {
    data = (await res.json()) as T
  } else {
    data = (await res.text()) as T
  }

  return { ok: res.ok, status: res.status, data }
}

/** Sign in with hub email/password; stores session JWT for API calls. */
export async function signInWithPassword(opts: {
  siteUrl?: string
  email: string
  password: string
}): Promise<{
  ok: boolean
  error?: string
  user?: { email: string; name: string }
}> {
  const current = await getTeamSettings()
  const siteUrl = (opts.siteUrl || current.siteUrl || TEAM_SITE_URL).replace(
    /\/+$/,
    ""
  )
  const email = opts.email.trim().toLowerCase()
  const password = opts.password

  if (!email || !password) {
    return { ok: false, error: "Email and password required" }
  }

  const res = await fetch(joinUrl(siteUrl, "/api/auth/login"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })

  const data = (await res.json().catch(() => null)) as {
    ok?: boolean
    error?: string
    token?: string
    user?: { email: string; name: string; id: string }
  } | null

  if (!res.ok || !data?.ok || !data.token || !data.user) {
    const err = data?.error
    if (err === "invalid_credentials") {
      return { ok: false, error: "Wrong email or password" }
    }
    return { ok: false, error: err || "Sign-in failed" }
  }

  await saveTeamSettings({
    siteUrl,
    apiToken: data.token,
    userEmail: data.user.email,
    userName: data.user.name
  })

  return {
    ok: true,
    user: { email: data.user.email, name: data.user.name }
  }
}

export async function signOut(): Promise<void> {
  await saveTeamSettings({
    apiToken: "",
    userEmail: "",
    userName: "",
    selectedProfileId: null
  })
}

export async function listProfiles(): Promise<ProfileSummary[]> {
  const { ok, data } = await teamFetch<{
    ok: boolean
    profiles?: ProfileSummary[]
    error?: string
  }>("/api/v1/profiles")
  if (!ok || !data.ok || !data.profiles) return []
  return data.profiles
}

export async function fetchAutofillInfo(
  profileId?: string | null
): Promise<AutofillInfoPayload | null> {
  const settings = await getTeamSettings()
  const id = profileId || settings.selectedProfileId
  if (!id) return null

  const { ok, data } = await teamFetch<{
    ok: boolean
    autofillInfo?: AutofillInfoPayload
  }>(`/api/v1/profiles/${encodeURIComponent(id)}?autofill=1`)

  if (!ok || !data.ok || !data.autofillInfo) return null
  return data.autofillInfo
}

export async function fetchResumeBlob(
  resumeId: string
): Promise<{ blob: Blob; fileName: string; mimeType: string } | null> {
  const settings = await getTeamSettings()
  if (!settings.apiToken) return null

  const res = await fetch(
    joinUrl(settings.siteUrl, `/api/v1/resumes/${encodeURIComponent(resumeId)}/download`),
    {
      headers: { Authorization: `Bearer ${settings.apiToken}` }
    }
  )
  if (!res.ok) return null

  const blob = await res.blob()
  const disposition = res.headers.get("content-disposition") || ""
  const match = /filename="([^"]+)"/i.exec(disposition)
  return {
    blob,
    fileName: match?.[1] || "resume.pdf",
    mimeType: res.headers.get("content-type") || blob.type || "application/pdf"
  }
}

export async function fetchCoverLetterBlob(
  coverLetterId: string
): Promise<{ blob: Blob; fileName: string; mimeType: string } | null> {
  const settings = await getTeamSettings()
  if (!settings.apiToken) return null

  const res = await fetch(
    joinUrl(
      settings.siteUrl,
      `/api/v1/cover-letters/${encodeURIComponent(coverLetterId)}/download`
    ),
    {
      headers: { Authorization: `Bearer ${settings.apiToken}` }
    }
  )
  if (!res.ok) return null

  const blob = await res.blob()
  const disposition = res.headers.get("content-disposition") || ""
  const match = /filename="([^"]+)"/i.exec(disposition)
  return {
    blob,
    fileName: match?.[1] || "cover-letter.pdf",
    mimeType: res.headers.get("content-type") || blob.type || "application/pdf"
  }
}

/** Merge learned Q→A into the selected profile on the hub (global + optional site/step). */
export async function mergeProfileAnswers(
  answers: Record<string, string>,
  profileId?: string | null,
  scope?: {
    scopeKey?: string | null
    hostname?: string | null
    stepKey?: string | null
  } | null
): Promise<{
  ok: boolean
  answers?: Record<string, string>
  extras?: Record<string, unknown>
  error?: string
}> {
  const settings = await getTeamSettings()
  const id = profileId || settings.selectedProfileId
  if (!id) return { ok: false, error: "no_profile" }
  if (!Object.keys(answers).length) return { ok: false, error: "empty" }

  const body: Record<string, unknown> = {
    answers,
    answersMode: "merge"
  }
  if (scope?.scopeKey) {
    body.scopeKey = scope.scopeKey
    if (scope.hostname) body.hostname = scope.hostname
    if (scope.stepKey) body.stepKey = scope.stepKey
  }

  const { ok, data } = await teamFetch<{
    ok: boolean
    answers?: Record<string, string>
    extras?: Record<string, unknown>
    error?: string
  }>(`/api/v1/profiles/${encodeURIComponent(id)}`, {
    method: "PATCH",
    body: JSON.stringify(body)
  })

  if (!ok || !data.ok) {
    return { ok: false, error: data.error || "save_failed" }
  }
  return { ok: true, answers: data.answers, extras: data.extras }
}

/** Log a successful job application to the hub Google Sheet. */
export async function logApplication(row: {
  profileId?: string | null
  country?: string
  resume?: string
  title: string
  link: string
  company?: string
  cost?: string
  status?: string
  other?: string
  tabName?: string
}): Promise<{ ok: boolean; error?: string; message?: string; tabName?: string }> {
  const settings = await getTeamSettings()
  const profileId = row.profileId || settings.selectedProfileId
  const { ok, data } = await teamFetch<{
    ok: boolean
    error?: string
    message?: string
    tabName?: string
  }>("/api/v1/applications/log", {
    method: "POST",
    body: JSON.stringify({
      ...row,
      profileId: profileId || undefined,
      status: row.status || "applied"
    })
  })
  if (!ok || !data.ok) {
    return {
      ok: false,
      error: data.error || "log_failed",
      message: data.message,
      tabName: data.tabName
    }
  }
  return { ok: true, tabName: data.tabName }
}

export async function verifyTeamConnection(): Promise<{
  ok: boolean
  email?: string
  name?: string
  error?: string
}> {
  const { ok, data } = await teamFetch<{
    ok: boolean
    user?: { email: string; name: string }
    error?: string
  }>("/api/auth/me")

  if (!ok || !data.ok || !data.user) {
    return { ok: false, error: data.error || "unauthorized" }
  }
  return { ok: true, email: data.user.email, name: data.user.name }
}

/** LLM regenerate a form-field answer via hub. */
export async function regenerateAnswer(body: {
  profileId?: string | null
  question: string
  promptList?: string[]
  fieldInput?: string | null
  uniqueId?: string | null
  jobId?: string | null
  jobContext?: {
    title?: string
    company?: string
    url?: string
    description?: string
  }
}): Promise<{
  ok: boolean
  answer?: string
  uniqueId?: string | null
  regenerated?: boolean
  error?: string
  status?: number
}> {
  const settings = await getTeamSettings()
  const { ok, status, data } = await teamFetch<{
    ok?: boolean
    answer?: string
    uniqueId?: string | null
    regenerated?: boolean
    error?: string
  }>("/api/v1/ai/regenerate-answer", {
    method: "POST",
    body: JSON.stringify({
      ...body,
      profileId: body.profileId || settings.selectedProfileId || undefined
    })
  })
  if (!ok || !data?.ok || !data.answer) {
    return {
      ok: false,
      error: data?.error || "regenerate_failed",
      status
    }
  }
  return {
    ok: true,
    answer: data.answer,
    uniqueId: data.uniqueId ?? null,
    regenerated: !!data.regenerated
  }
}

/** Generate cover letter markdown via hub LLM. */
export async function generateCoverLetter(body: {
  profileId?: string | null
  jobId: string
  userPrompt: string
  resumeId?: string | number
  tailorId?: string | number
  coverLetterId?: string
  currentCoverLetter?: string
  jobContext?: {
    title?: string
    company?: string
    url?: string
    description?: string
  }
}): Promise<{
  ok: boolean
  data?: {
    markdown: string
    coverLetterId?: string
    jobId?: string
    resumeId?: string | null
  }
  error?: string
  status?: number
}> {
  const settings = await getTeamSettings()
  const { ok, status, data } = await teamFetch<{
    ok?: boolean
    data?: {
      markdown: string
      coverLetterId?: string
      jobId?: string
      resumeId?: string | null
    }
    result?: {
      markdown: string
      coverLetterId?: string
      jobId?: string
      resumeId?: string | null
    }
    error?: string
  }>("/api/v1/ai/cover-letter", {
    method: "POST",
    body: JSON.stringify({
      ...body,
      profileId: body.profileId || settings.selectedProfileId || undefined
    })
  })
  const payload = data?.data || data?.result
  if (!ok || !payload?.markdown) {
    return {
      ok: false,
      error: data?.error || "cover_letter_failed",
      status
    }
  }
  return { ok: true, data: payload }
}

export async function fetchDegreeSuggestions(input: string): Promise<string[]> {
  const { ok, data } = await teamFetch<{
    ok?: boolean
    result?: string[]
    results?: string[]
  }>("/api/v1/suggestions/degrees", {
    method: "POST",
    body: JSON.stringify({ input })
  })
  if (!ok) return []
  return data.results || data.result || []
}

export async function fetchMajorSuggestions(input: string): Promise<string[]> {
  const { ok, data } = await teamFetch<{
    ok?: boolean
    result?: string[]
    results?: string[]
  }>("/api/v1/suggestions/majors", {
    method: "POST",
    body: JSON.stringify({ input })
  })
  if (!ok) return []
  return data.results || data.result || []
}

export async function fetchCompanyNameList(
  input: string,
  companyId?: string
): Promise<
  Array<{
    companyName: string
    linkedin_company_id: string
    llogoUrl?: string
  }>
> {
  const { ok, data } = await teamFetch<{
    ok?: boolean
    result?: Array<{
      companyName: string
      linkedin_company_id: string
      llogoUrl?: string
    }>
    results?: Array<{
      companyName: string
      linkedin_company_id: string
      llogoUrl?: string
    }>
  }>("/api/v1/suggestions/companies", {
    method: "POST",
    body: JSON.stringify({ input, companyId })
  })
  if (!ok) return []
  return data.results || data.result || []
}

export async function fetchAddressSuggestions(body: {
  input: string
  sessionToken?: string
  countryCodes?: string[]
  limit?: number
}): Promise<Array<{ placeId: string; displayAddress: string }>> {
  const { ok, data } = await teamFetch<{
    ok?: boolean
    result?: Array<{ placeId: string; displayAddress: string }>
    suggestions?: Array<{ placeId: string; displayAddress: string }>
  }>("/api/v1/address/autocomplete", {
    method: "POST",
    body: JSON.stringify(body)
  })
  if (!ok) return []
  return data.suggestions || data.result || []
}

export async function resolveAddressSuggestion(body: {
  placeId: string
  sessionToken?: string
}): Promise<Record<string, unknown> | null> {
  const { ok, data } = await teamFetch<{
    ok?: boolean
    result?: Record<string, unknown> | null
  }>("/api/v1/address/resolve", {
    method: "POST",
    body: JSON.stringify(body)
  })
  if (!ok) return null
  return data.result ?? null
}

export async function fetchOpenRegions(
  country: string
): Promise<Array<{ code: string; name: string }>> {
  const { ok, data } = await teamFetch<{
    ok?: boolean
    result?: Array<{ code: string; name: string }>
  }>("/api/v1/geo/regions", {
    method: "POST",
    body: JSON.stringify({ country })
  })
  if (!ok) return []
  return data.result || []
}

export async function fetchOpenCitiesByRegion(
  country: string,
  region: string
): Promise<string[]> {
  const { ok, data } = await teamFetch<{
    ok?: boolean
    result?: string[]
  }>("/api/v1/geo/cities", {
    method: "POST",
    body: JSON.stringify({ country, region })
  })
  if (!ok) return []
  return data.result || []
}
