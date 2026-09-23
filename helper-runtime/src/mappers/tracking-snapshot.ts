// @ts-nocheck
/**
 * Build tracking snapshots for autofill answer-pair events.
 */

import { normalizePhoneCountryCode } from "../utils/phone-country-code.ts"

export function buildAutofillInfoTrackingSnapshot({
  personal,
  education,
  workExperience,
  skill,
  equalEmployment,
  pronouns,
  preference,
}) {
  const normal = {
    firstName: personal.firstName,
    middleName: personal.middleName,
    lastName: personal.lastName,
    preferredFirstName: personal.preferredFirstName,
    preferredMiddleName: personal.preferredMiddleName,
    preferredLastName: personal.preferredLastName,
    email: personal.email,
    phone_number: personal.phone,
    phoneCountryCode: normalizePhoneCountryCode(personal.phoneCountryCode),
    linkedin: personal.linkedinUrl,
    github_url: personal.githubUrl,
    personal_site: personal.websiteUrl,
    country: personal.country,
    city: personal.city,
    county: personal.county,
    postCode: personal.postalCode,
    state: personal.state,
    addressLine: personal.addressLine,
    phoneType: personal.phoneType,
    salary: preference.salary,
    hiringDate: preference.hiringDate,
    skills: { DEFAULT: skill },
    gender: equalEmployment.gender,
    race: equalEmployment.ethnicity,
    veteran: equalEmployment.veteran,
    disability: equalEmployment.disability,
    workAuthorization: equalEmployment.workAuthorization,
    sponsorshipStatus: equalEmployment.sponsorshipStatus,
    lgbt: equalEmployment.lgbt,
    hispanic: equalEmployment.hispanic,
    sexual: equalEmployment.sexual,
    pronouns,
  }

  const educationSnapshot = education.map((item) => ({
    organization: item.schoolName,
    accreditation: item.accreditation,
    gpa: item.gap,
    dates: {
      start_date: item.startDate,
      completion_date: item.endDate || null,
      is_current: item.isCurrent,
    },
  }))

  const employment = workExperience.map((item) => ({
    job_title: item.jobTitle,
    organization: item.companyName,
    location: item.city,
    dates: {
      start_date: item.startDate,
      completion_date: item.endDate === "Present" ? null : item.endDate,
      is_current: item.endDate === "Present",
    },
    summary: item.summary,
    job_descriptions: item.descriptions,
  }))

  return {
    normal,
    education: educationSnapshot,
    employment,
  }
}
