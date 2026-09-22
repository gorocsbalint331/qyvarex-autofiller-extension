import type { AutofillInfoPayload } from "~api/team-types"

type HubEducation = {
  schoolName?: string
  organization?: string
  accreditation?: string
  gpa?: string
  startDate?: string
  endDate?: string
  isCurrent?: boolean
  dates?: {
    start_date?: string | null
    completion_date?: string | null
    is_current?: boolean
  }
}

type HubWork = {
  companyName?: string
  organization?: string
  jobTitle?: string
  job_title?: string
  city?: string
  location?: string
  startDate?: string
  endDate?: string
  isCurrent?: boolean
  summary?: string
  descriptions?: string[]
  job_descriptions?: string[]
  dates?: {
    start_date?: string | null
    completion_date?: string | null
    is_current?: boolean
  }
}

function mapEducation(raw: unknown): Record<string, unknown>[] {
  if (!Array.isArray(raw)) return []
  return raw
    .filter((item) => item && typeof item === "object")
    .map((item) => {
      const e = item as HubEducation
      if (e.organization || e.dates) {
        return {
          organization: e.organization || e.schoolName || "",
          accreditation: e.accreditation || "",
          gpa: e.gpa || "",
          dates: e.dates || {
            start_date: e.startDate || null,
            completion_date: e.isCurrent ? null : e.endDate || null,
            is_current: !!e.isCurrent
          }
        }
      }
      return {
        organization: e.schoolName || "",
        accreditation: e.accreditation || "",
        gpa: e.gpa || "",
        dates: {
          start_date: e.startDate || null,
          completion_date: e.isCurrent ? null : e.endDate || null,
          is_current: !!e.isCurrent
        }
      }
    })
}

function mapWork(raw: unknown): Record<string, unknown>[] {
  if (!Array.isArray(raw)) return []
  return raw
    .filter((item) => item && typeof item === "object")
    .map((item) => {
      const w = item as HubWork
      if (w.organization || w.job_title || w.dates) {
        return {
          organization: w.organization || w.companyName || "",
          job_title: w.job_title || w.jobTitle || "",
          location: w.location || w.city || "",
          dates: w.dates || {
            start_date: w.startDate || null,
            completion_date: w.isCurrent ? null : w.endDate || null,
            is_current: !!w.isCurrent
          },
          summary: w.summary || "",
          job_descriptions:
            w.job_descriptions ||
            w.descriptions ||
            (w.summary ? [w.summary] : [])
        }
      }
      return {
        organization: w.companyName || "",
        job_title: w.jobTitle || "",
        location: w.city || "",
        dates: {
          start_date: w.startDate || null,
          completion_date: w.isCurrent ? null : w.endDate || null,
          is_current: !!w.isCurrent
        },
        summary: w.summary || "",
        job_descriptions:
          w.descriptions?.length
            ? w.descriptions
            : w.summary
              ? [w.summary]
              : []
      }
    })
}

function mapSkills(raw: unknown): Record<string, string[]> | string[] {
  if (Array.isArray(raw)) {
    const list = raw.map((s) => String(s).trim()).filter(Boolean)
    return list.length ? { DEFAULT: list } : {}
  }
  if (raw && typeof raw === "object") return raw as Record<string, string[]>
  return {}
}

/**
 * Map team-hub autofill payload into the Jobright-shaped object that
 * engine stores / BaseFiller expect (personalInfo, location, etc.).
 */
export function hubToJobrightAutofill(
  hub: AutofillInfoPayload
): Record<string, unknown> {
  const addr = hub.identity?.address ?? {
    line1: "",
    line2: "",
    city: "",
    state: "",
    postalCode: "",
    country: ""
  }
  const extras = (hub.extras && typeof hub.extras === "object"
    ? hub.extras
    : {}) as Record<string, unknown>

  const education = mapEducation(
    extras.engineEducation ?? extras.education ?? extras.Education
  )
  const workExperience = mapWork(
    extras.engineWorkExperience ??
      extras.workExperience ??
      extras.employment
  )
  const employmentInfo =
    extras.employmentInfo && typeof extras.employmentInfo === "object"
      ? extras.employmentInfo
      : {}
  const skills = mapSkills(extras.engineSkills ?? extras.skills)

  return {
    ...hub,
    personalInfo: {
      firstName: hub.identity.firstName || "",
      middleName: String(extras.middleName ?? ""),
      lastName: hub.identity.lastName || "",
      preferredFirstName: String(extras.preferredFirstName ?? ""),
      preferredMiddleName: String(extras.preferredMiddleName ?? ""),
      preferredLastName: String(extras.preferredLastName ?? ""),
      email: hub.identity.email || "",
      phone_number: hub.identity.phone || "",
      linkedin_link: hub.identity.linkedin || "",
      linkedin: hub.identity.linkedin || "",
      github_link: String(extras.github ?? extras.github_link ?? ""),
      personal_site_link: hub.identity.website || "",
      personal_site: hub.identity.website || ""
    },
    location: {
      country: addr.country || "",
      state: addr.state || "",
      city: addr.city || "",
      postCode: addr.postalCode || "",
      county: String(extras.county ?? "")
    },
    addressLine: [addr.line1, addr.line2].filter(Boolean).join(", "),
    state: addr.state || "",
    education,
    workExperience,
    employmentInfo,
    skills,
    salary: String(extras.salary ?? ""),
    hiringDate: (() => {
      const tomorrow = localTomorrowYmd()
      const today = localTodayYmd()
      const raw = String(extras.hiringDate ?? "").trim()
      if (/^\d{4}-\d{2}-\d{2}$/.test(raw) && raw >= today) return raw
      return tomorrow
    })(),
    birthday: String(extras.birthday ?? extras.dateOfBirth ?? ""),
    yearsOfExperience: String(extras.yearsOfExperience ?? ""),
    plannedWorkLocation: String(extras.plannedWorkLocation ?? ""),
    additionalApplicationInfo: String(
      extras.additionalApplicationInfo ?? ""
    ),
    pronouns: String(extras.pronouns ?? ""),
    phoneType: String(extras.phoneType ?? "Mobile"),
    phoneCountryCode: String(extras.phoneCountryCode ?? ""),
    _hubAnswers: hub.answers || {},
    defaultResumeId: hub.defaultResumeId,
    resumes: hub.resumes
  }
}

type FillElement = {
  label?: string
  type?: string
  options?: unknown
  [key: string]: unknown
}

function normalizeLabel(text: string) {
  return (text || "")
    .toLowerCase()
    .replace(/\s*\*\s*/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

function localTodayYmd(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${day}`
}

/** Default start / available-from date: tomorrow (local). */
function localTomorrowYmd(): string {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${day}`
}

function parseYmd(raw: string): string | null {
  const t = raw.trim()
  if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return t
  if (/^\d{4}-\d{2}$/.test(t)) return `${t}-01`
  const us = t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (us) {
    return `${us[3]}-${us[1].padStart(2, "0")}-${us[2].padStart(2, "0")}`
  }
  return null
}

function extrasString(hub: AutofillInfoPayload, key: string): string {
  const extras = hub.extras || {}
  const v = extras[key]
  return typeof v === "string" ? v : v != null ? String(v) : ""
}

function employmentField(hub: AutofillInfoPayload, key: string): string {
  const info = hub.extras?.employmentInfo
  if (!info || typeof info !== "object" || Array.isArray(info)) return ""
  const v = (info as Record<string, unknown>)[key]
  return typeof v === "string" ? v : v != null ? String(v) : ""
}

function formatLocation(hub: AutofillInfoPayload): string {
  const a = hub.identity.address
  return [a.city, a.state, a.country].map((s) => s?.trim()).filter(Boolean).join(", ")
}

/**
 * Available-from / hiring date for forms.
 * Prefer hub hiringDate when it is today or later; otherwise tomorrow.
 */
function formatHiringDate(hub: AutofillInfoPayload): string {
  const tomorrow = localTomorrowYmd()
  const today = localTodayYmd()
  const parsed = parseYmd(extrasString(hub, "hiringDate"))
  if (parsed && parsed >= today) return parsed
  return tomorrow
}

function formatHiringDateUs(hub: AutofillInfoPayload): string {
  const iso = formatHiringDate(hub)
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!m) return iso
  return `${m[2]}/${m[3]}/${m[1]}`
}

/** True if candidate needs employer sponsorship. */
function needsSponsorship(hub: AutofillInfoPayload): boolean | null {
  const status = employmentField(hub, "sponsorshipStatus").toLowerCase()
  const auth = employmentField(hub, "workAuthorization").toLowerCase()
  if (!status && !auth) return null
  if (/will not require|no sponsorship|do not require|doesn't require|does not require/.test(status)) {
    return false
  }
  if (/require sponsorship|needs sponsorship|need sponsorship/.test(status)) {
    return true
  }
  if (/need sponsorship|not authorized/.test(auth)) return true
  if (/authorized to work/.test(auth) && !/sponsorship/.test(status)) return false
  return null
}

/** True if authorized to work (generally / without needing sponsorship framing). */
function isWorkAuthorized(hub: AutofillInfoPayload): boolean | null {
  const auth = employmentField(hub, "workAuthorization").toLowerCase()
  if (!auth) return null
  if (/not authorized/.test(auth)) return false
  if (/authorized to work|authorized/.test(auth)) return true
  if (/need sponsorship/.test(auth)) return false
  return null
}

function elementOptions(el: FillElement): string[] {
  const raw = el.options
  if (!Array.isArray(raw)) return []
  return raw
    .map((o) => (typeof o === "string" ? o : String(o ?? "")))
    .map((s) => s.trim())
    .filter(Boolean)
}

function hasYesNoOptions(options: string[]): boolean {
  const norms = options.map(normalizeLabel)
  return (
    norms.some((n) => n === "yes" || n.startsWith("yes ")) &&
    norms.some((n) => n === "no" || n.startsWith("no "))
  )
}

function pickYesNo(options: string[], yes: boolean): string {
  const want = yes ? "yes" : "no"
  const hit = options.find((o) => {
    const n = normalizeLabel(o)
    return n === want || n.startsWith(`${want} `)
  })
  return hit || (yes ? "Yes" : "No")
}

/** Pull leading year-range numbers from strings like "5-7 years" / "10+". */
function yearRangeParts(text: string): { lo: number; hi: number } | null {
  const n = normalizeLabel(text)
  const plus = n.match(/^(\d+)\s*\+\s*(years?)?$/)
  if (plus) {
    const lo = Number(plus[1])
    return { lo, hi: 99 }
  }
  const range = n.match(/^(\d+)\s*[-–—to]+\s*(\d+)\s*(years?)?$/)
  if (range) return { lo: Number(range[1]), hi: Number(range[2]) }
  const single = n.match(/^(\d+)\s*(years?)?$/)
  if (single) {
    const v = Number(single[1])
    return { lo: v, hi: v }
  }
  return null
}

function scoreOption(candidate: string, option: string): number {
  const c = normalizeLabel(candidate)
  const o = normalizeLabel(option)
  if (!c || !o) return 0
  if (/^please select|^select |^choose |^—|^-$/.test(o) || o === "select") {
    return 0
  }
  if (c === o) return 100
  const cFlat = c.replace(/\s*[-–—]\s*/g, "-").replace(/\s+/g, "")
  const oFlat = o.replace(/\s*[-–—]\s*/g, "-").replace(/\s+/g, "")
  if (cFlat === oFlat) return 98

  const cr = yearRangeParts(c)
  const or = yearRangeParts(o)
  if (cr && or) {
    // Overlapping experience bands (Personio often differs slightly from hub)
    const overlap = Math.min(cr.hi, or.hi) - Math.max(cr.lo, or.lo)
    if (overlap >= 0) return 90
    const midC = (cr.lo + cr.hi) / 2
    const midO = (or.lo + or.hi) / 2
    if (Math.abs(midC - midO) <= 2) return 75
  }

  if (o.includes(c) || c.includes(o)) return 80
  const ct = new Set(c.split(" ").filter(Boolean))
  const ot = o.split(" ").filter(Boolean)
  let hit = 0
  for (const t of ot) if (ct.has(t)) hit += 1
  if (!ot.length) return 0
  return Math.round((hit / ot.length) * 60)
}

function adaptToOptions(value: string, options: string[]): string {
  if (!options.length) return value
  let best = value
  let bestScore = 0
  for (const opt of options) {
    const s = scoreOption(value, opt)
    if (s > bestScore) {
      bestScore = s
      best = opt
    }
  }
  return bestScore >= 40 ? best : value
}

function labelMatches(norm: string, keys: string[]): boolean {
  for (const key of keys) {
    if (norm === key) return true
    if (key.length >= 4 && norm.includes(key)) return true
    if (norm.length >= 4 && key.includes(norm) && norm.length >= key.length - 2) {
      return true
    }
  }
  return false
}

/** Long legal / eligibility questions — never treat as plain location fields. */
function isLegalEligibilityQuestion(norm: string): boolean {
  return (
    norm.includes("authorized") ||
    norm.includes("authorised") ||
    norm.includes("sponsorship") ||
    norm.includes("sponsor") ||
    norm.includes("eligible to work") ||
    norm.includes("work authorization") ||
    norm.includes("visa") ||
    (norm.includes("require") && norm.includes("employer"))
  )
}

function isPlainLocationLabel(norm: string): boolean {
  if (isLegalEligibilityQuestion(norm)) return false
  if (norm.includes("planned work location")) return false
  if (norm.includes("preferred work location")) return false
  return (
    norm === "location" ||
    norm === "current location" ||
    norm === "current city" ||
    norm === "where are you located" ||
    norm === "where are you based" ||
    norm === "where based" ||
    norm === "your location" ||
    norm === "city" ||
    norm === "town" ||
    /^current (city|location|address)$/.test(norm) ||
    (norm.includes("where are you") &&
      (norm.includes("based") || norm.includes("located")))
  )
}

function isPlannedWorkLocationLabel(norm: string): boolean {
  if (isLegalEligibilityQuestion(norm)) return false
  return (
    norm === "planned work location" ||
    norm === "preferred work location" ||
    norm === "work location" ||
    norm === "preferred location" ||
    (norm.includes("planned") && norm.includes("location") && !norm.includes("authorized")) ||
    (norm.includes("preferred") &&
      norm.includes("work") &&
      norm.includes("location") &&
      !norm.includes("authorized"))
  )
}

type AnswerResolver = {
  keys: string[]
  /** Higher = try first for overlapping labels */
  priority?: number
  get: (h: AutofillInfoPayload, labelNorm: string, options: string[]) => string
}

const ANSWER_RESOLVERS: AnswerResolver[] = [
  {
    keys: ["first name", "firstname", "given name", "legal first name"],
    priority: 20,
    get: (h) => h.identity.firstName
  },
  {
    keys: ["middle name", "middlename"],
    priority: 20,
    get: (h) => extrasString(h, "middleName")
  },
  {
    keys: ["last name", "lastname", "surname", "family name", "legal last name"],
    priority: 20,
    get: (h) => h.identity.lastName
  },
  {
    keys: ["preferred name", "preferred first name"],
    priority: 15,
    get: (h) => extrasString(h, "preferredFirstName")
  },
  {
    keys: ["full name", "candidate name", "applicant name"],
    priority: 10,
    get: (h) =>
      h.identity.fullName ||
      `${h.identity.firstName} ${h.identity.lastName}`.trim()
  },
  {
    // Bare "name" only when label is exactly name (Personio "Name*")
    keys: ["name"],
    priority: 5,
    get: (h, labelNorm) => {
      if (labelNorm !== "name") return ""
      return (
        h.identity.fullName ||
        `${h.identity.firstName} ${h.identity.lastName}`.trim()
      )
    }
  },
  {
    keys: ["email", "e mail", "email address", "work email"],
    get: (h) => h.identity.email
  },
  {
    keys: ["phone", "phone number", "mobile", "mobile phone", "cell", "telephone"],
    get: (h) => h.identity.phone
  },
  {
    keys: ["linkedin", "linkedin url", "linkedin profile", "linkedin link"],
    get: (h) => h.identity.linkedin
  },
  {
    keys: ["github", "github url", "github profile"],
    get: (h) => extrasString(h, "github")
  },
  {
    keys: ["website", "personal website", "portfolio", "personal site"],
    get: (h) => h.identity.website
  },
  {
    keys: [
      "current location",
      "current city",
      "where are you located",
      "where are you based",
      "where based",
      "your location",
      "location city"
    ],
    priority: 25,
    get: (h, labelNorm) => {
      if (isLegalEligibilityQuestion(labelNorm)) return ""
      if (!isPlainLocationLabel(labelNorm)) {
        if (
          labelNorm !== "current city" &&
          labelNorm !== "where are you located" &&
          labelNorm !== "where are you based" &&
          labelNorm !== "where based" &&
          labelNorm !== "your location" &&
          labelNorm !== "location city"
        ) {
          return ""
        }
      }
      return formatLocation(h) || h.identity.address.city
    }
  },
  {
    keys: ["city", "town"],
    priority: 10,
    get: (h, labelNorm) => {
      if (isLegalEligibilityQuestion(labelNorm)) return ""
      if (labelNorm.includes("location") && !isPlainLocationLabel(labelNorm)) {
        return ""
      }
      return h.identity.address.city
    }
  },
  {
    keys: ["state", "province", "region"],
    get: (h) => h.identity.address.state
  },
  {
    keys: ["country", "country region", "nation"],
    get: (h) => h.identity.address.country
  },
  {
    keys: ["county"],
    get: (h) => extrasString(h, "county")
  },
  {
    keys: ["zip", "zip code", "postal", "postal code", "postcode"],
    get: (h) => h.identity.address.postalCode
  },
  {
    keys: ["address line 2", "address 2", "apt", "suite", "unit"],
    priority: 15,
    get: (h) => h.identity.address.line2
  },
  {
    keys: ["address", "street address", "address line 1", "address 1", "street"],
    priority: 10,
    get: (h) => h.identity.address.line1
  },
  {
    keys: ["gender", "sex"],
    get: (h) => employmentField(h, "gender")
  },
  {
    keys: ["race", "ethnicity", "ethnic"],
    get: (h) => employmentField(h, "race")
  },
  {
    keys: ["veteran", "military"],
    get: (h) => employmentField(h, "veteran")
  },
  {
    keys: ["disability", "disabled"],
    get: (h) => employmentField(h, "disability")
  },
  {
    keys: ["hispanic", "latino", "latina"],
    get: (h) => employmentField(h, "hispanic")
  },
  {
    keys: ["lgbt", "lgbtq"],
    get: (h) => employmentField(h, "lgbt")
  },
  {
    keys: ["pronouns"],
    get: (h) => extrasString(h, "pronouns")
  },
  {
    keys: [
      "expected salary",
      "desired salary",
      "salary expectation",
      "salary expectations",
      "compensation",
      "salary"
    ],
    priority: 20,
    get: (h) => extrasString(h, "salary")
  },
  {
    keys: [
      "birthday",
      "date of birth",
      "dob",
      "birth date",
      "birthdate"
    ],
    priority: 25,
    get: (h, _n, options) => {
      const raw =
        extrasString(h, "birthday") || extrasString(h, "dateOfBirth")
      if (!raw.trim()) return ""
      const t = raw.trim()
      let ymd = t
      if (/^\d{4}-\d{2}$/.test(t)) ymd = `${t}-01`
      else {
        const us = t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
        if (us) {
          ymd = `${us[3]}-${us[1].padStart(2, "0")}-${us[2].padStart(2, "0")}`
        }
      }
      const m = ymd.match(/^(\d{4})-(\d{2})-(\d{2})$/)
      const usFmt = m ? `${m[2]}/${m[3]}/${m[1]}` : ymd
      if (!options.length) return usFmt
      const joined = options.map(normalizeLabel).join(" ")
      if (joined.includes("yyyy") || joined.includes("-")) return ymd
      return usFmt
    }
  },
  {
    keys: [
      "years of experience",
      "years experience",
      "total experience",
      "how many years"
    ],
    priority: 35,
    get: (h, labelNorm, options) => {
      if (isLegalEligibilityQuestion(labelNorm)) return ""
      const v = extrasString(h, "yearsOfExperience")
      if (!v) return ""
      return options.length ? adaptToOptions(v, options) : v
    }
  },
  {
    keys: [
      "planned work location",
      "preferred work location",
      "work location",
      "preferred location"
    ],
    priority: 35,
    get: (h, labelNorm, options) => {
      if (!isPlannedWorkLocationLabel(labelNorm)) return ""
      const v = extrasString(h, "plannedWorkLocation")
      if (!v) return ""
      return options.length ? adaptToOptions(v, options) : v
    }
  },
  {
    keys: [
      "available from",
      "available date",
      "availability date",
      "earliest start",
      "start date",
      "hiring date",
      "availability"
    ],
    priority: 20,
    get: (h, _n, options) => {
      const iso = formatHiringDate(h)
      const us = formatHiringDateUs(h)
      if (!options.length) return iso
      const joined = options.map(normalizeLabel).join(" ")
      if (joined.includes("mm") || joined.includes("dd")) return us
      return iso
    }
  },
  {
    keys: [
      "source",
      "job portal",
      "how did you hear",
      "referral source",
      "application source"
    ],
    priority: 15,
    get: (h, _n, options) => {
      const linkedin = h.identity.linkedin
      if (linkedin && options.length) {
        const hit = options.find((o) => /linkedin/i.test(o))
        if (hit) return hit
      }
      if (linkedin) return "LinkedIn"
      const other = options.find((o) => /^other$/i.test(o.trim()))
      return other || extrasString(h, "additionalApplicationInfo") || "Other"
    }
  },
  {
    keys: [
      "gdpr",
      "privacy policy",
      "data retention",
      "retain my data",
      "consent",
      "i agree",
      "terms and conditions",
      "terms of use"
    ],
    priority: 30,
    get: (_h, labelNorm, options) => {
      // Never answer legal work-auth with GDPR yes
      if (isLegalEligibilityQuestion(labelNorm)) return ""
      if (!options.length) return "Yes"
      const hit =
        options.find((o) =>
          /agree|accept|consent|yes|i have read|acknowledge/i.test(o)
        ) || options.find((o) => !/select|choose|please/i.test(o))
      return hit || "Yes"
    }
  },
  {
    // "authorized ... without employer sponsorship?" → Yes only if authorized AND no sponsorship
    keys: [
      "without employer sponsorship",
      "without sponsorship",
      "authorized to work",
      "legally authorized",
      "eligible to work",
      "work authorization",
      "work authorisation"
    ],
    priority: 40,
    get: (h, labelNorm, options) => {
      if (!isLegalEligibilityQuestion(labelNorm) && !labelNorm.includes("authorized")) {
        if (!labelNorm.includes("work authorization")) return ""
      }
      const auth = isWorkAuthorized(h)
      const sponsor = needsSponsorship(h)
      const asksWithoutSponsorship =
        labelNorm.includes("without") && labelNorm.includes("sponsorship")
      const asksAuthorized =
        labelNorm.includes("authorized") ||
        labelNorm.includes("authorised") ||
        labelNorm.includes("eligible to work") ||
        labelNorm.includes("work authorization")

      let yes: boolean | null = null
      if (asksWithoutSponsorship) {
        yes =
          auth === true && sponsor !== true
            ? true
            : auth === false || sponsor === true
              ? false
              : null
      } else if (asksAuthorized) {
        yes = auth
      }

      const raw = employmentField(h, "workAuthorization")

      // Native Yes/No controls
      if (yes != null && hasYesNoOptions(options)) {
        return pickYesNo(options, yes)
      }
      // Free-text / textarea: write a clear sentence, never location junk
      if (yes != null && !options.length) {
        if (asksWithoutSponsorship) {
          return yes
            ? "Yes — I am authorized to work without employer sponsorship."
            : "No — I will require employer sponsorship."
        }
        return yes
          ? raw || "Yes, I am authorized to work."
          : raw || "No, I am not currently authorized without sponsorship."
      }

      return options.length ? adaptToOptions(raw, options) : raw
    }
  },
  {
    keys: [
      "require employer sponsorship",
      "require sponsorship",
      "visa sponsorship",
      "sponsorship now or in the future",
      "sponsorship"
    ],
    priority: 40,
    get: (h, labelNorm, options) => {
      if (
        !labelNorm.includes("sponsor") &&
        !labelNorm.includes("visa")
      ) {
        return ""
      }
      const sponsor = needsSponsorship(h)
      const asksRequire =
        labelNorm.includes("require") ||
        labelNorm.includes("need") ||
        labelNorm.includes("will you")

      const raw = employmentField(h, "sponsorshipStatus")

      if (sponsor != null && asksRequire && hasYesNoOptions(options)) {
        return pickYesNo(options, sponsor)
      }
      if (sponsor != null && asksRequire && !options.length) {
        return sponsor
          ? "Yes — I will require employer sponsorship now or in the future."
          : "No — I will not require employer sponsorship."
      }

      return options.length ? adaptToOptions(raw, options) : raw
    }
  }
]

export function lookupAnswer(
  hub: AutofillInfoPayload,
  label: string,
  options: string[] = []
): string | null {
  const norm = normalizeLabel(label)
  if (!norm) return null

  // Explicit Q&A from hub first (exact / careful contains)
  let bestAnswer: string | null = null
  let bestAnswerScore = 0
  for (const [key, value] of Object.entries(hub.answers || {})) {
    if (!value) continue
    const nk = normalizeLabel(key)
    let score = 0
    if (nk === norm) score = 100
    else if (
      // Contiguous phrase only — blocks short keys like "Location" matching
      // "…planned work location…" / auth questions.
      nk.split(" ").length >= 2 &&
      nk.length >= 8 &&
      norm.includes(nk)
    ) {
      score = 85
    } else if (
      nk.split(" ").length >= 2 &&
      norm.split(" ").length <= nk.split(" ").length + 3 &&
      (norm.includes(nk) || nk.includes(norm))
    ) {
      score = 70
    } else if (!isLegalEligibilityQuestion(norm)) {
      const nt = new Set(norm.split(" ").filter((t) => t.length > 2))
      const kt = nk.split(" ").filter((t) => t.length > 2)
      if (kt.length >= 2) {
        const hits = kt.filter((t) => nt.has(t)).length
        const ratio = hits / Math.max(kt.length, nt.size)
        if (ratio >= 0.7 && hits >= 2) score = Math.round(ratio * 65)
      }
    }

    // Never let location answers win on legal questions
    if (
      isLegalEligibilityQuestion(norm) &&
      /location|city|address/.test(nk) &&
      !/sponsor|authoriz|visa|eligible/.test(nk)
    ) {
      score = 0
    }

    if (score > bestAnswerScore) {
      bestAnswerScore = score
      bestAnswer = value
    }
  }
  if (bestAnswer && bestAnswerScore >= 70) {
    // Prefer structured resolvers for legal Yes/No when the field is free-text
    // (Personio auth questions are textareas, not radios).
    const shortYesNo = /^(yes|no)\b/i.test(bestAnswer.trim())
    if (
      !(
        isLegalEligibilityQuestion(norm) &&
        !options.length &&
        shortYesNo
      )
    ) {
      return options.length ? adaptToOptions(bestAnswer, options) : bestAnswer
    }
  }

  const matches = ANSWER_RESOLVERS.filter((r) => labelMatches(norm, r.keys)).sort(
    (a, b) => (b.priority ?? 0) - (a.priority ?? 0)
  )

  for (const resolver of matches) {
    const v = resolver.get(hub, norm, options)?.trim()
    if (v) return options.length ? adaptToOptions(v, options) : v
  }

  if (bestAnswer && bestAnswerScore >= 70) {
    return options.length ? adaptToOptions(bestAnswer, options) : bestAnswer
  }

  return null
}

/**
 * Local stand-in for Jobright fill-v2 / getGptResults.
 * Builds fill_data_list from hub identity + answers + structured extras.
 */
export function buildLocalGptResults(
  hub: AutofillInfoPayload,
  elements: FillElement[]
): {
  fill_data_list: Array<{ name: string; value: string }>
  profile_data: Record<string, unknown>
  profileData: Record<string, unknown>
} {
  const jobright = hubToJobrightAutofill(hub)
  const fill_data_list: Array<{ name: string; value: string }> = []

  for (const el of elements) {
    const label = typeof el?.label === "string" ? el.label : ""
    if (!label) continue
    const options = elementOptions(el)
    let value = lookupAnswer(hub, label, options)

    // Fallback: applicationSummary from hub extras (team-site derived)
    if (!value) {
      const summary =
        hub.extras?.applicationSummary &&
        typeof hub.extras.applicationSummary === "object" &&
        !Array.isArray(hub.extras.applicationSummary)
          ? (hub.extras.applicationSummary as Record<string, unknown>)
          : null
      const norm = normalizeLabel(label)
      if (summary) {
        if (
          /salary|compensation/.test(norm) &&
          !isLegalEligibilityQuestion(norm) &&
          typeof summary.salary === "string" &&
          summary.salary.trim()
        ) {
          value = summary.salary.trim()
        } else if (
          /available from|available date|hiring date|earliest start|^availability$/.test(
            norm
          ) &&
          typeof summary.hiringDate === "string" &&
          summary.hiringDate.trim()
        ) {
          value = summary.hiringDate.trim()
        } else if (
          isPlainLocationLabel(norm) &&
          typeof summary.location === "string" &&
          summary.location.trim()
        ) {
          value = summary.location.trim()
        } else if (
          /birthday|date of birth|^dob$|birth date/.test(norm) &&
          typeof summary.birthday === "string" &&
          summary.birthday.trim()
        ) {
          value = summary.birthday.trim()
        } else if (
          /years of experience|years experience/.test(norm) &&
          typeof summary.yearsOfExperience === "string" &&
          summary.yearsOfExperience.trim()
        ) {
          value = options.length
            ? adaptToOptions(summary.yearsOfExperience.trim(), options)
            : summary.yearsOfExperience.trim()
        } else if (
          isPlannedWorkLocationLabel(norm) &&
          typeof summary.plannedWorkLocation === "string" &&
          summary.plannedWorkLocation.trim()
        ) {
          value = options.length
            ? adaptToOptions(summary.plannedWorkLocation.trim(), options)
            : summary.plannedWorkLocation.trim()
        }
      }
    }

    if (value != null && value !== "") {
      fill_data_list.push({ name: label, value })
    }
  }

  return {
    fill_data_list,
    profile_data: jobright,
    profileData: jobright
  }
}
