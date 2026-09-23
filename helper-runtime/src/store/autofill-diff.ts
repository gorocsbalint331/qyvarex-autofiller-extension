// @ts-nocheck
/**
 * Field-level diff helpers for comparing autofill profile snapshots.
 */

export const EDU_FIELD_MAP = {
  schoolName: (education) => education?.organization ?? "",
  accreditation: (education) => education?.accreditation ?? "",
  gap: (education) => education?.gpa ?? "",
  startDate: (education) => education?.dates?.start_date ?? "",
  endDate: (education) => education?.dates?.completion_date ?? "",
  isCurrent: (education) => `${education?.dates?.is_current ?? ""}`,
}

export const WORK_FIELD_MAP = {
  companyName: (work) => work?.organization ?? "",
  jobTitle: (work) => work?.job_title ?? "",
  city: (work) => work?.location ?? "",
  startDate: (work) => work?.dates?.start_date ?? "",
  endDate: (work) =>
    work?.dates?.is_current ? "Present" : work?.dates?.completion_date ?? "",
  summary: (work) => work?.summary ?? "",
  jobDescription: (work) => serializeJobDescriptions(work?.job_descriptions),
}

const serializeJobDescriptions = (descriptions) =>
  JSON.stringify(
    Array.isArray(descriptions)
      ? descriptions.map((item) =>
          typeof item === "string" ? item : `${item ?? ""}`,
        )
      : [],
  )

const PERSONAL_FIELD_MAP = {
  firstName: (profile) => profile?.personalInfo?.firstName ?? "",
  middleName: (profile) => profile?.personalInfo?.middleName ?? "",
  lastName: (profile) => profile?.personalInfo?.lastName ?? "",
  preferredFirstName: (profile) =>
    profile?.personalInfo?.preferredFirstName ?? "",
  preferredMiddleName: (profile) =>
    profile?.personalInfo?.preferredMiddleName ?? "",
  preferredLastName: (profile) =>
    profile?.personalInfo?.preferredLastName ?? "",
  email: (profile) => profile?.personalInfo?.email ?? "",
  phoneType: (profile) => profile?.phoneType ?? "",
  phoneCountryCode: (profile) => profile?.phoneCountryCode ?? "",
  phone: (profile) => profile?.personalInfo?.phone_number ?? "",
  country: (profile) => profile?.location?.country ?? "",
  state: (profile) => profile?.location?.state ?? profile?.state ?? "",
  city: (profile) => profile?.location?.city ?? "",
  county: (profile) => profile?.location?.county ?? "",
  addressLine: (profile) => profile?.addressLine ?? "",
  postalCode: (profile) => profile?.location?.postCode ?? "",
  linkedinUrl: (profile) =>
    profile?.personalInfo?.linkedin_link ||
    profile?.personalInfo?.linkedin ||
    "",
  githubUrl: (profile) =>
    profile?.personalInfo?.github_link ||
    profile?.personalInfo?.github_url ||
    "",
  websiteUrl: (profile) =>
    profile?.personalInfo?.personal_site_link ||
    profile?.personalInfo?.personal_site ||
    "",
}

export function diffArrayFields(
  previousItems,
  nextItems,
  fieldMap,
  pathPrefix,
  changedFields,
) {
  for (let index = 0; index < nextItems.length; index++) {
    for (const [fieldName, getValue] of Object.entries(fieldMap)) {
      if (getValue(previousItems[index]) !== getValue(nextItems[index])) {
        changedFields.push(`${pathPrefix}.${index}.${fieldName}`)
      }
    }
  }
}

export function diffPersonalFields(previousProfile, nextProfile, changedFields) {
  for (const [fieldName, getValue] of Object.entries(PERSONAL_FIELD_MAP)) {
    if (getValue(previousProfile) !== getValue(nextProfile)) {
      changedFields.push(`personal.${fieldName}`)
    }
  }
}
