// @ts-nocheck
/**
 * Phenom — answer shaping (country, phone, skills, consent, education, experience).
 */

import * as constants from "../../../constants.ts"
import * as phoneCountryCode from "../../../core/phone-country-code.js"

const CONSENT_TERMS_LABEL =
  "Yes, I have read and consent to the terms and conditions"

function normalizeCountryName(value) {
  const text = String(value ?? "").trim()
  const lower = text.toLowerCase()
  if (!lower) return ""
  if (lower === "canada" || lower === "ca") return "Canada"
  if (
    lower === "united states" ||
    lower === "united states of america" ||
    lower === "usa" ||
    lower === "us"
  ) {
    return "United States"
  }
  return text
}

function firstPresent(record, keys) {
  for (const key of keys) {
    const value = record?.[key]
    if (value != null && (typeof value !== "string" || value.trim() !== "")) {
      return value
    }
  }
}

function copyFirstPresent(record, targetKey, sourceKeys) {
  if (!record || firstPresent(record, [targetKey]) != null) return
  const value = firstPresent(record, sourceKeys)
  if (value != null) record[targetKey] = value
}

function isTruthyCurrentFlag(value) {
  if (value === true || value === 1) return true
  const text = String(value ?? "").trim().toLowerCase()
  return (
    text === "true" ||
    text === "yes" ||
    text === "1" ||
    text === "current"
  )
}

function isBlankAnswerValue(value) {
  return (
    value == null ||
    (Array.isArray(value)
      ? value.length === 0
      : typeof value === "string" && value.trim() === "")
  )
}

function ensureConsentTermsAnswer(answer) {
  if (answer.regular && CONSENT_TERMS_LABEL in answer.regular) {
    if (isBlankAnswerValue(answer.regular[CONSENT_TERMS_LABEL])) {
      answer.regular[CONSENT_TERMS_LABEL] = ["Yes"]
    }
  }
  const fillEntry = answer.fillDataList?.find(
    (entry) => entry?.name === CONSENT_TERMS_LABEL,
  )
  if (fillEntry && isBlankAnswerValue(fillEntry.value)) {
    fillEntry.value = ["Yes"]
  }
}

function isPhoneCountryCodeLabel(label) {
  const lower = label.trim().toLowerCase()
  const compact = lower.replace(/[^a-z0-9]/g, "")
  return (
    lower === "country code" ||
    lower.includes("phone country code") ||
    lower.includes("country/region phone code") ||
    compact.includes("phonecountrycode") ||
    compact.includes("countryphonecode") ||
    compact.includes("countryregionphonecode") ||
    (compact.includes("country") &&
      compact.includes("phone") &&
      compact.includes("code"))
  )
}

function findPhoneCountryCodeValue(regular) {
  for (const key of Object.keys(regular)) {
    if (!isPhoneCountryCodeLabel(key)) continue
    const raw = regular[key]
    const first = Array.isArray(raw) ? raw.find(Boolean) : raw
    const text = String(first ?? "").trim()
    if (text) return text
  }
}

function isCountryLabel(label) {
  const lower = label.trim().toLowerCase()
  const compact = lower.replace(/[^a-z0-9]/g, "")
  return (
    lower === "country" ||
    lower === "country/region" ||
    lower === "country or region" ||
    lower === "place of residence - country" ||
    compact === "country" ||
    compact === "countryregion" ||
    compact === "countryorregion" ||
    compact === "placeofresidencecountry"
  )
}

function splitListValues(value) {
  const items = Array.isArray(value) ? value : [value]
  return items
    .flatMap((item) => String(item ?? "").split(/[,;\n]/))
    .map((item) => item.trim())
    .filter(Boolean)
}

function getSkillsFromAnswer(answer) {
  const list = answer.fillDataList || answer.fill_data_list || []
  if (Array.isArray(list)) {
    const entry = list.find((item) =>
      String(item?.name ?? "")
        .trim()
        .toLowerCase()
        .includes("skills"),
    )
    const skills = splitListValues(entry?.value)
    if (skills.length > 0) return skills
  }
  const regular = answer.regular || {}
  const key = Object.keys(regular).find((label) =>
    label.trim().toLowerCase().includes("skills"),
  )
  return splitListValues(key ? regular[key] : undefined)
}

function isSkillsLabel(label) {
  const lower = label.trim().toLowerCase()
  return (
    lower.includes("skills") ||
    lower === "type to add skills" ||
    lower === "separate each skill with a comma"
  )
}

function applySkillsToRegular(answer) {
  const skills = Array.isArray(answer.skills)
    ? answer.skills.map((item) => String(item ?? "").trim()).filter(Boolean)
    : []
  if (skills.length === 0) return
  const joined = skills.join(", ")
  const regular = answer.regular || {}
  const skillKeys = Object.keys(regular).filter(isSkillsLabel)
  if (skillKeys.length === 0) {
    regular.Skills = joined
    answer.regular = regular
    return
  }
  for (const key of skillKeys) {
    if (firstPresent(regular, [key]) == null) regular[key] = joined
  }
  if (firstPresent(regular, ["Skills"]) == null) regular.Skills = joined
}

function formatAnswer(answer) {
  const profileData = answer?.profile_data || answer?.profileData
  const country =
    normalizeCountryName(answer.country) ||
    normalizeCountryName(profileData?.country)
  const skills = getSkillsFromAnswer(answer)
  if (skills.length > 0) answer.skills = skills
  applySkillsToRegular(answer)
  ensureConsentTermsAnswer(answer)
  if (answer.regular) {
    if (
      country &&
      firstPresent(answer.regular, ["Place of Residence - Country"]) == null
    ) {
      answer.regular["Place of Residence - Country"] = country
    }
    const dialCode = findPhoneCountryCodeValue(answer.regular)
    for (const key of Object.keys(answer.regular)) {
      const value = answer.regular[key]
      const lower = key.trim().toLowerCase()
      if (country && !isPhoneCountryCodeLabel(key) && isCountryLabel(key)) {
        answer.regular[key] = country
      }
      if (
        typeof value === "string" &&
        !isPhoneCountryCodeLabel(key) &&
        (lower.includes("phone") || lower.includes("mobile"))
      ) {
        answer.regular[key] = phoneCountryCode.toNationalPhoneValue(
          value,
          dialCode,
        )
      }
      if (typeof value === "string" && lower === "state") {
        answer.regular[key] = constants.STATE_MAP[value] ?? value
      }
    }
  }
  if (Array.isArray(answer.education)) {
    for (const row of answer.education) {
      if (!row) continue
      if (row.Study != null && row["Field of Study"] == null) {
        row["Field of Study"] = row.Study
      }
      copyFirstPresent(row, "Start Date", ["Start"])
      copyFirstPresent(row, "End Date", ["End"])
    }
  }
  if (Array.isArray(answer.workExperience)) {
    for (const row of answer.workExperience) {
      if (!row) continue
      copyFirstPresent(row, "Employer", ["Company", "Company Name"])
      copyFirstPresent(row, "Job Title", ["Title", "Position"])
      copyFirstPresent(row, "Start Date", ["Start"])
      copyFirstPresent(row, "End Date", ["End"])
      copyFirstPresent(row, "Job Description", [
        "Role Description",
        "Role description",
        "jobDescriptions",
        "Job Descriptions",
      ])
      if (
        firstPresent(row, ["End Date"]) == null &&
        isTruthyCurrentFlag(row.isCurrent)
      ) {
        row["End Date"] = "current"
      }
    }
  }
  return answer
}

export { formatAnswer }
