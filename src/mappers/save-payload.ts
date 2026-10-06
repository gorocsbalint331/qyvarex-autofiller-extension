// @ts-nocheck
/**
 * Build save-body payloads for autofill info updates.
 */

import { withStructuredSkillList } from "../utils/skill-list.ts"
import { normalizePhoneCountryCodeWithName } from "../utils/phone-country-code.ts"

function asObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {}
}

function hubChoice(ui, kind) {
  const value = String(ui ?? "").trim()
  if (kind === "workAuthorization") {
    if (value === "Yes") return "Authorized to work in the US"
    if (value === "No") return "Not authorized"
  }
  if (kind === "sponsorshipStatus") {
    if (value === "Yes") return "Will require sponsorship now"
    if (value === "No") return "Will not require sponsorship"
  }
  if (kind === "disability") {
    if (value === "Yes") return "Yes, I have a disability"
    if (value === "No") return "No, I do not have a disability"
  }
  if (kind === "veteran") {
    if (value === "Yes") return "I am a veteran"
    if (value === "No") return "I am not a veteran"
  }
  if (kind === "ethnicity" && value === "American Indian or Alaskan Native") {
    return "American Indian or Alaska Native"
  }
  if (value === "Decline to state") return "Prefer not to say"
  return value
}

export function isAutofillInfoSnapshot(value) {
  return !!value && typeof value === "object" && "personalInfo" in value
}

export function buildAutofillInfoSaveBody(
  {
    personal,
    education,
    workExperience,
    skill,
    equalEmployment,
    pronouns,
    preference,
    signupInformation,
  },
  baseSnapshot = {},
  expectedRevision,
) {
  return {
    ...(expectedRevision === undefined ? {} : { expectedRevision }),
    structuredData: withStructuredSkillList(
      {
        ...baseSnapshot,
        regenerationEmail:
          signupInformation?.registrationEmail?.trim() ?? "",
        personalInfo: {
          ...asObject(baseSnapshot.personalInfo),
          firstName: personal.firstName,
          middleName: personal.middleName,
          lastName: personal.lastName,
          preferredFirstName: personal.preferredFirstName,
          preferredMiddleName: personal.preferredMiddleName,
          preferredLastName: personal.preferredLastName,
          email: personal.email,
          phone_number: personal.phone,
          linkedin: personal.linkedinUrl,
          github_url: personal.githubUrl,
          personal_site: personal.websiteUrl,
        },
        location: {
          ...asObject(baseSnapshot.location),
          country: personal.country,
          state: personal.state,
          city: personal.city,
          county: personal.county,
          postCode: personal.postalCode,
        },
        state: personal.state,
        addressLine: personal.addressLine,
        phoneType: personal.phoneType,
        phoneCountryCode: normalizePhoneCountryCodeWithName(
          personal.phoneCountryCode,
        ),
        salary: preference.salary,
        hiringDate: preference.hiringDate,
        additionalApplicationInfo: preference.additionalApplicationInfo,
        education: education.map((item) => ({
          organization: item.schoolName,
          accreditation: item.accreditation,
          gpa: item.gap,
          dates: {
            start_date: item.startDate,
            completion_date: item.endDate || null,
            is_current: item.isCurrent,
          },
        })),
        workExperience: workExperience.map((item) => ({
          job_title: item.jobTitle,
          organization: item.companyName,
          location: item.city,
          dates: {
            start_date: item.startDate,
            completion_date:
              item.endDate === "Present" ? null : item.endDate,
            is_current: item.endDate === "Present",
          },
          summary: item.summary,
          job_descriptions: item.descriptions,
        })),
        employmentInfo: {
          ...asObject(baseSnapshot.employmentInfo),
          gender: hubChoice(equalEmployment.gender, "gender"),
          race: hubChoice(equalEmployment.ethnicity, "ethnicity"),
          veteran: hubChoice(equalEmployment.veteran, "veteran"),
          disability: hubChoice(equalEmployment.disability, "disability"),
          workAuthorization: hubChoice(
            equalEmployment.workAuthorization,
            "workAuthorization",
          ),
          sponsorshipStatus: hubChoice(
            equalEmployment.sponsorshipStatus,
            "sponsorshipStatus",
          ),
          lgbt: hubChoice(equalEmployment.lgbt, "yesno"),
          hispanic: hubChoice(equalEmployment.hispanic, "yesno"),
          sexual: equalEmployment.sexual,
        },
        pronouns,
      },
      skill,
    ),
  }
}
