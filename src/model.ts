// @ts-nocheck
/**
 * Autofill info model factories and API-payload → editor-shape mapping.
 */

import { resolveSignupRegistrationEmail } from "./api/autofill-signup-information.ts"
import { formatAutofillInfoDate } from "./components/Editor/utils/date-format.ts"
import { COUNTRY_CODE_MAP } from "./forms/constants.ts"
import { normalizeCountryInput } from "./utils/address-lookup.ts"
import { normalizeAutofillLocation } from "./utils/location-normalizer.ts"
import { normalizePhoneCountryCodeWithName } from "./utils/phone-country-code.ts"
import { extractSkillList } from "./utils/skill-list.ts"

let nextAutofillInfoId = 0

let createAutofillInfoId = () => `autofill-info-${nextAutofillInfoId++}`

export const createEducationItem = (overrides) => ({
  id: createAutofillInfoId(),
  schoolName: "",
  accreditation: "",
  gap: "",
  startDate: "",
  endDate: "",
  isCurrent: false,
  ...overrides,
})

export const createWorkItem = (overrides) => ({
  id: createAutofillInfoId(),
  companyName: "",
  jobTitle: "",
  city: "",
  startDate: "",
  endDate: "",
  summary: "",
  descriptions: [],
  ...overrides,
})

export const resolveCountryCode = (countryInput) => {
  let normalized = normalizeCountryInput(countryInput) || countryInput
  let lookupKey = normalized.toLowerCase().trim()
  return COUNTRY_CODE_MAP[lookupKey] ?? ""
}

function editorChoice(stored, kind) {
  const text = String(stored ?? "").trim()
  const t = text.toLowerCase()
  if (!t) return ""
  if (t === "yes" || t === "no") return t === "yes" ? "Yes" : "No"
  if (t.includes("prefer not") || t.includes("decline")) return "Decline to state"
  if (kind === "workAuthorization") {
    if (t.includes("not authorized") || t.includes("need sponsorship")) return "No"
    if (t.includes("authorized")) return "Yes"
  }
  if (kind === "sponsorshipStatus") {
    if (t.includes("will not require") || t.includes("not require")) return "No"
    if (t.includes("require")) return "Yes"
  }
  if (kind === "disability") {
    if (t.includes("do not have") || t.startsWith("no")) return "No"
    if (t.includes("disability") || t.startsWith("yes")) return "Yes"
  }
  if (kind === "veteran") {
    if (t.includes("not a veteran")) return "No"
    if (t.includes("veteran")) return "Yes"
  }
  if (kind === "gender") {
    if (t === "male") return "Male"
    if (t === "female") return "Female"
    if (t.includes("non")) return "Non-binary"
  }
  if (kind === "ethnicity" && t.includes("alaska")) {
    return "American Indian or Alaskan Native"
  }
  return text
}

export const buildAutofillInfoData = (payload) => {
  let personalInfo = payload?.personalInfo ?? {}
  let workExperienceList = payload?.workExperience ?? []
  let educationList = payload?.education ?? []
  let skillList = extractSkillList(payload)
  let employmentInfo = payload?.employmentInfo ?? {}
  let location = payload?.location ?? {}
  let normalizedLocation = normalizeAutofillLocation({
    country: location.country ?? "",
    state: location.state ?? payload?.state ?? "",
    city: location.city ?? "",
  })
  return {
    personal: {
      firstName: personalInfo.firstName ?? "",
      middleName: personalInfo.middleName ?? "",
      lastName: personalInfo.lastName ?? "",
      preferredFirstName: personalInfo.preferredFirstName ?? "",
      preferredMiddleName: personalInfo.preferredMiddleName ?? "",
      preferredLastName: personalInfo.preferredLastName ?? "",
      email: personalInfo.email ?? "",
      phoneType: payload?.phoneType ?? "",
      phoneCountryCode: normalizePhoneCountryCodeWithName(payload?.phoneCountryCode),
      phone: personalInfo.phone_number ?? "",
      country: normalizedLocation.country,
      state: normalizedLocation.state,
      city: normalizedLocation.city,
      county: location.county ?? "",
      addressLine: payload?.addressLine ?? "",
      postalCode: location.postCode ?? "",
      linkedinUrl: personalInfo.linkedin_link || personalInfo.linkedin || "",
      githubUrl: personalInfo.github_link || personalInfo.github_url || "",
      websiteUrl: personalInfo.personal_site_link || personalInfo.personal_site || "",
    },
    education:
      educationList.length > 0
        ? educationList.map((entry) =>
            createEducationItem({
              schoolName: entry.organization ?? "",
              accreditation: entry.accreditation ?? "",
              gap: entry.gpa ?? "",
              startDate: formatAutofillInfoDate(entry.dates?.start_date),
              endDate: formatAutofillInfoDate(entry.dates?.completion_date),
              isCurrent: !!entry.dates?.is_current,
            })
          )
        : [createEducationItem()],
    workExperience:
      workExperienceList.length > 0
        ? workExperienceList.map((entry) =>
            createWorkItem({
              companyName: entry.organization ?? "",
              jobTitle: entry.job_title ?? "",
              city: entry.location ?? "",
              startDate: formatAutofillInfoDate(entry.dates?.start_date),
              endDate: entry.dates?.is_current
                ? "Present"
                : formatAutofillInfoDate(entry.dates?.completion_date),
              summary: entry.summary ?? "",
              descriptions: Array.isArray(entry.job_descriptions)
                ? entry.job_descriptions
                : [],
            })
          )
        : [createWorkItem()],
    skill: Array.isArray(skillList) && skillList.length > 0 ? skillList : [],
    equalEmployment: {
      gender: editorChoice(employmentInfo.gender, "gender"),
      ethnicity: editorChoice(employmentInfo.race, "ethnicity"),
      veteran: editorChoice(employmentInfo.veteran, "veteran"),
      disability: editorChoice(employmentInfo.disability, "disability"),
      workAuthorization: editorChoice(
        employmentInfo.workAuthorization,
        "workAuthorization",
      ),
      sponsorshipStatus: editorChoice(
        employmentInfo.sponsorshipStatus,
        "sponsorshipStatus",
      ),
      lgbt: editorChoice(employmentInfo.lgbt, "yesno"),
      hispanic: editorChoice(employmentInfo.hispanic, "yesno"),
      sexual: Array.isArray(employmentInfo.sexual)
        ? employmentInfo.sexual
        : typeof employmentInfo.sexualOrientation === "string"
          ? employmentInfo.sexualOrientation
              .split(",")
              .map((value) => value.trim())
              .filter(Boolean)
          : [],
    },
    pronouns: payload?.pronouns ?? "",
    preference: {
      salary: payload?.salary ?? "",
      hiringDate: payload?.hiringDate ?? "",
      additionalApplicationInfo: payload?.additionalApplicationInfo ?? "",
    },
    signupInformation: {
      registrationEmail: resolveSignupRegistrationEmail(payload),
    },
  }
}
