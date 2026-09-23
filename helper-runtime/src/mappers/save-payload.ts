// @ts-nocheck
/**
 * Build save-body payloads for autofill info updates.
 */

import { withStructuredSkillList } from "../utils/skill-list.ts"
import { normalizePhoneCountryCodeWithName } from "../utils/phone-country-code.ts"

function asObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {}
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
          gender: equalEmployment.gender,
          race: equalEmployment.ethnicity,
          veteran: equalEmployment.veteran,
          disability: equalEmployment.disability,
          workAuthorization: equalEmployment.workAuthorization,
          sponsorshipStatus: equalEmployment.sponsorshipStatus,
          lgbt: equalEmployment.lgbt,
          hispanic: equalEmployment.hispanic,
          sexual: equalEmployment.sexual,
        },
        pronouns,
      },
      skill,
    ),
  }
}
