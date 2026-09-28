import { teamFetch } from "~api/team-client"
import { extractSkillList } from "~utils/skill-list"

type Obj = Record<string, unknown>

function obj(v: unknown): Obj {
  return v && typeof v === "object" && !Array.isArray(v) ? (v as Obj) : {}
}

function str(v: unknown): string {
  return typeof v === "string" ? v : v == null ? "" : String(v)
}

function norm(v: unknown): string {
  return str(v).toLowerCase().replace(/\s+/g, " ").trim()
}

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

/** Editor shows "Jan 2020"; the hub stores "2020-01" (or "2020"). */
function toHubDate(v: unknown): string {
  const t = str(v).trim()
  if (!t || /^present$/i.test(t)) return ""
  if (/^\d{4}(-\d{2}){0,2}$/.test(t)) return t.slice(0, 7)
  const monYear = t.match(/^([a-z]{3})[a-z]*\.?\s+(\d{4})$/i)
  if (monYear) {
    const m = MONTHS.indexOf(monYear[1].toLowerCase())
    if (m >= 0) return `${monYear[2]}-${String(m + 1).padStart(2, "0")}`
  }
  const slash = t.match(/^(\d{1,2})\/(?:\d{1,2}\/)?(\d{4})$/)
  if (slash) return `${slash[2]}-${slash[1].padStart(2, "0")}`
  return t
}

type HubProfile = {
  address1?: string
  address2?: string
  extras?: Obj
}

/** Previous hub item with the same key, so hub-only fields (degree, major, jobType…) survive. */
function findPrevious(list: unknown, key: (item: Obj) => string, want: string): Obj {
  if (!Array.isArray(list) || !want) return {}
  return obj(list.find((item) => key(obj(item)) === want))
}

function mapEducation(rows: unknown, previous: unknown) {
  if (!Array.isArray(rows)) return undefined
  return rows.map((row, index) => {
    const r = obj(row)
    const dates = obj(r.dates)
    const schoolName = str(r.organization)
    const accreditation = str(r.accreditation)
    const exact = findPrevious(
      previous,
      (p) => `${norm(p.schoolName)}|${norm(p.accreditation)}`,
      `${norm(schoolName)}|${norm(accreditation)}`
    )
    const prev = Object.keys(exact).length
      ? exact
      : findPrevious(previous, (p) => norm(p.schoolName), norm(schoolName))
    const isCurrent = !!dates.is_current
    return {
      ...prev,
      id: str(prev.id) || `edu-ext-${Date.now().toString(36)}-${index}`,
      schoolName,
      accreditation,
      major: str(prev.major),
      degree: str(prev.degree),
      gpa: str(r.gpa),
      startDate: toHubDate(dates.start_date),
      endDate: isCurrent ? "" : toHubDate(dates.completion_date),
      isCurrent
    }
  })
}

function mapWork(rows: unknown, previous: unknown) {
  if (!Array.isArray(rows)) return undefined
  return rows.map((row, index) => {
    const r = obj(row)
    const dates = obj(r.dates)
    const companyName = str(r.organization)
    const jobTitle = str(r.job_title)
    const prev = findPrevious(
      previous,
      (p) => `${norm(p.companyName)}|${norm(p.jobTitle)}`,
      `${norm(companyName)}|${norm(jobTitle)}`
    )
    const isCurrent = !!dates.is_current
    const descriptions = Array.isArray(r.job_descriptions)
      ? r.job_descriptions.map(str).map((s) => s.trim()).filter(Boolean)
      : []
    return {
      ...prev,
      id: str(prev.id) || `work-ext-${Date.now().toString(36)}-${index}`,
      companyName,
      jobTitle,
      jobType: str(prev.jobType) || "Full-time",
      city: str(r.location),
      startDate: toHubDate(dates.start_date),
      endDate: isCurrent ? "" : toHubDate(dates.completion_date),
      isCurrent,
      summary: str(r.summary),
      descriptions
    }
  })
}

/** The Editor keeps sexual orientation as a `sexual` array; the hub uses `sexualOrientation`. */
function toHubEmploymentInfo(previous: Obj, edited: Obj): Obj {
  const { sexual, ...rest } = edited
  const next: Obj = { ...previous, ...rest }
  delete next.sexual
  if (Array.isArray(sexual) && sexual.length) {
    next.sexualOrientation = sexual.map(str).filter(Boolean).join(", ")
  } else if (typeof sexual === "string" && sexual.trim()) {
    next.sexualOrientation = sexual.trim()
  }
  return next
}

/**
 * Translate the helper Editor's Jobright-shaped `structuredData` into a hub
 * PATCH body. The hub replaces `extras` wholesale, so everything not edited in
 * the Editor (site logins, sheet tab, learned answers…) is carried over.
 */
export function structuredDataToHubPatch(structured: Obj, current: HubProfile) {
  const personal = obj(structured.personalInfo)
  const location = obj(structured.location)
  const prevExtras = obj(current.extras)

  const patch: Obj = {
    firstName: str(personal.firstName),
    lastName: str(personal.lastName),
    email: str(personal.email),
    phone: str(personal.phone_number),
    linkedin: str(personal.linkedin ?? personal.linkedin_link),
    website: str(personal.personal_site ?? personal.personal_site_link),
    city: str(location.city),
    state: str(location.state ?? structured.state),
    postalCode: str(location.postCode),
    country: str(location.country)
  }

  const addressLine = str(structured.addressLine).trim()
  const currentLine = [current.address1, current.address2]
    .map((s) => str(s).trim())
    .filter(Boolean)
    .join(", ")
  if (addressLine !== currentLine) {
    patch.address1 = addressLine
    patch.address2 = ""
  }

  const extras: Obj = {
    ...prevExtras,
    middleName: str(personal.middleName),
    preferredFirstName: str(personal.preferredFirstName),
    preferredMiddleName: str(personal.preferredMiddleName),
    preferredLastName: str(personal.preferredLastName),
    github: str(personal.github_url ?? personal.github_link),
    county: str(location.county),
    phoneType: str(structured.phoneType),
    phoneCountryCode: str(structured.phoneCountryCode),
    salary: str(structured.salary),
    hiringDate: str(structured.hiringDate),
    additionalApplicationInfo: str(structured.additionalApplicationInfo),
    pronouns: str(structured.pronouns),
    employmentInfo: toHubEmploymentInfo(
      obj(prevExtras.employmentInfo),
      obj(structured.employmentInfo)
    ),
    skills: extractSkillList(structured)
  }
  const education = mapEducation(structured.education, prevExtras.education)
  if (education) extras.education = education
  const work = mapWork(structured.workExperience, prevExtras.workExperience)
  if (work) extras.workExperience = work
  for (const derived of ["engineEducation", "engineWorkExperience", "engineSkills", "applicationSummary"]) {
    delete extras[derived]
  }
  patch.extras = extras
  return patch
}

export async function saveStructuredAutofillInfo(
  profileId: string,
  structured: Obj
): Promise<{ ok: boolean; status: number; error?: string }> {
  const path = `/api/v1/profiles/${encodeURIComponent(profileId)}`
  const current = await teamFetch<{ ok: boolean; profile?: HubProfile; error?: string }>(path)
  if (!current.ok || !current.data?.ok || !current.data.profile) {
    return { ok: false, status: current.status, error: current.data?.error || "load_failed" }
  }
  const saved = await teamFetch<{ ok: boolean; error?: string }>(path, {
    method: "PATCH",
    body: JSON.stringify(structuredDataToHubPatch(structured, current.data.profile))
  })
  return {
    ok: saved.ok && !!saved.data?.ok,
    status: saved.status,
    error: saved.data?.error
  }
}
