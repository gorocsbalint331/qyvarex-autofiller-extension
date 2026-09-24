// @ts-nocheck
/**
 * Autofill info form constants: option lists, section labels, and helpers.
 */

export const COUNTRY_CODE_MAP = {
  "united states": "US",
  us: "US",
  usa: "US",
  canada: "CA",
  "united kingdom": "GB",
  uk: "GB",
  gb: "GB",
  "great britain": "GB",
}

export const ADDITIONAL_APPLICATION_INFO_MAX_LENGTH = 1000

export const AUTOFILL_INFO_POPUP_CLASS_NAME = "autofill-info-modal-popup"

export const PHONE_TYPE_OPTIONS = ["Mobile", "Home", "Work", "Other"]

export const GENDER_OPTIONS = [
  "Female",
  "Male",
  "Non-binary",
  "Decline to state",
]

export const ETHNICITY_OPTIONS = [
  "American Indian or Alaskan Native",
  "Asian",
  "Black or African American",
  "Hispanic or Latino",
  "White",
  "Native Hawaiian or Other Pacific Islander",
  "Two or More Races",
  "Decline to state",
]

export const YES_NO_OPTIONS = ["Yes", "No", "Decline to state"]

export const PRONOUNS_OPTIONS = [
  "He/Him",
  "She/Her",
  "They/Them",
  "Other",
  "Prefer not to say",
]

export const SEXUAL_ORIENTATION_OPTIONS = [
  "Asexual",
  "Bisexual",
  "Gay",
  "Heterosexual",
  "Lesbian",
  "Pansexual",
  "Queer",
  "I prefer to self-describe",
  "Decline to state",
]

export const SECTION_LABELS = [
  { key: "personal", label: "Personal" },
  { key: "education", label: "Education" },
  { key: "workExperience", label: "Work Experience" },
  { key: "skill", label: "Skill" },
  { key: "equalEmployment", label: "Equal Employment" },
  { key: "preference", label: "Preference" },
  { key: "signupInformation", label: "Sign-up Information" },
]

export function isSectionKey(key) {
  return SECTION_LABELS.some((section) => section.key === key)
}
