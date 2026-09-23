// @ts-nocheck
/**
 * Dayforce — answer shaping for phone, country, state, and upload helpers.
 */

import * as constants from "../../../constants.ts"
import * as phoneCountryCode from "../../../core/phone-country-code.js"

const FLAG_PREFIX_RE = /^[\u{1F1E6}-\u{1F1FF}]{2}\s*/u
const DIAL_PREFIX_RE = /^\+\d{1,4}\s+/

export const DAYFORCE_HOME_PHONE_COUNTRY_CODE_LABEL = "Home Phone Country Code"
export const DAYFORCE_MOBILE_PHONE_COUNTRY_CODE_LABEL = "Mobile Country Code"

const PHONE_COUNTRY_CODE_LABELS = [
  DAYFORCE_HOME_PHONE_COUNTRY_CODE_LABEL,
  DAYFORCE_MOBILE_PHONE_COUNTRY_CODE_LABEL,
]
const COUNTRY_DIALING_CODE = "Country dialing code"
const PHONE_NUMBER_DIALING_LABELS = [
  `Home Phone Number ${COUNTRY_DIALING_CODE}`,
  `Mobile Phone Number ${COUNTRY_DIALING_CODE}`,
]
const PHONE_NUMBER_LABELS = ["Home Phone Number", "Mobile Phone Number"]
const PHONE_NUMBER_LABEL = "Phone Number"
const PHONE_COUNTRY_CODE_LABEL = "Phone Country Code"
const PHONE_TO_COUNTRY_CODE_LABEL = {
  "Home Phone Number": DAYFORCE_HOME_PHONE_COUNTRY_CODE_LABEL,
  "Mobile Phone Number": DAYFORCE_MOBILE_PHONE_COUNTRY_CODE_LABEL,
}

export function isDayforcePhoneCountryCodeLabel(label = "") {
  return (
    PHONE_COUNTRY_CODE_LABELS.includes(label) ||
    PHONE_NUMBER_DIALING_LABELS.includes(label)
  )
}

export function getDayforcePhoneCountryCodeLabel(phoneLabel = "") {
  return PHONE_TO_COUNTRY_CODE_LABEL[phoneLabel] || ""
}

const COUNTRY_ALIASES = {
  ca: "canada",
  can: "canada",
  canada: "canada",
  unitedstates: "unitedstates",
  unitedstatesamerica: "unitedstates",
  unitedstatesofamerica: "unitedstates",
  us: "unitedstates",
  usa: "unitedstates",
}

export function normalizeDayforceDropdownOptionText(text = "") {
  return (text || "")
    .trim()
    .replace(FLAG_PREFIX_RE, "")
    .replace(DIAL_PREFIX_RE, "")
    .trim()
}

function normalizeCountryKey(text) {
  const key = normalizeDayforceDropdownOptionText(text)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "")
  return COUNTRY_ALIASES[key] || key
}

function expandStateAbbreviation(value) {
  if (Array.isArray(value)) return value.map((item) => expandStateAbbreviation(item))
  if (typeof value !== "string") return value
  const mapped = constants.STATE_MAP[value.trim().toUpperCase()]
  return mapped || value
}

function isStateProvinceLabel(label = "") {
  return label.toLowerCase().replace(/\s+/g, "") === "state/province"
}

export function isDayforceCountryOptionMatched(left, right) {
  const a = normalizeCountryKey(left)
  const b = normalizeCountryKey(right)
  return !!a && !!b && a === b
}

function isEmptyAnswer(value) {
  return (
    value == null ||
    (Array.isArray(value)
      ? value.every(isEmptyAnswer)
      : typeof value === "string" && value.trim() === "")
  )
}

function resolveProfileCountry(profileData) {
  const country =
    profileData?.country ?? profileData?.Country ?? profileData?.COUNTRY
  return typeof country === "string" ? country.trim() : ""
}

export function applyDayforceCountryFallbacks(regular, profileData) {
  const country = resolveProfileCountry(profileData)
  if (!country) return regular
  if (isEmptyAnswer(regular.Country)) regular.Country = country
  if (isEmptyAnswer(regular["Country dialing code"])) {
    regular["Country dialing code"] = country
  }
  for (const label of PHONE_COUNTRY_CODE_LABELS) {
    if (isEmptyAnswer(regular[label])) {
      regular[label] = regular["Country dialing code"] || country
    }
  }
  return regular
}

export function isDayforceUploadComplete(fileName, className) {
  if (!fileName?.trim()) return false
  const classes = className || ""
  return (
    !classes.includes("ant-upload-list-item-uploading") &&
    !classes.includes("ant-upload-list-item-error")
  )
}

export function isDayforceDropdownMatched(optionText, answerText, label = "") {
  const left = normalizeDayforceDropdownOptionText(optionText)
  const right = normalizeDayforceDropdownOptionText(answerText)
  if (isStateProvinceLabel(label)) {
    return (
      left.toLowerCase().trim() ===
      expandStateAbbreviation(right).toLowerCase().trim()
    )
  }
  if (
    label === "Country" ||
    isDayforcePhoneCountryCodeLabel(label) ||
    label.includes("Phone Number")
  ) {
    return isDayforceCountryOptionMatched(left, right)
  }
  const leftLower = left.toLowerCase()
  const rightLower = right.toLowerCase()
  return (
    leftLower === rightLower ||
    (leftLower === "yes" && (rightLower === "true" || right === "1")) ||
    (leftLower === "no" && (rightLower === "false" || right === "0"))
  )
}

function normalizeStateAnswers(regular) {
  const stateLabels = ["State/Province", "State / Province"]
  for (const label of stateLabels) {
    if (!isEmptyAnswer(regular[label])) {
      regular[label] = expandStateAbbreviation(regular[label])
    }
  }
  if (isEmptyAnswer(regular.State)) return
  regular.State = expandStateAbbreviation(regular.State)
  const hasStateProvince = stateLabels.some(
    (label) => !isEmptyAnswer(regular[label]),
  )
  if (!hasStateProvince) {
    regular["State/Province"] = regular.State
    regular["State / Province"] = regular.State
  }
}

function normalizePhoneAnswers(regular, countryCodeSnapshot) {
  for (const phoneLabel of PHONE_NUMBER_LABELS) {
    const phoneValue = regular[phoneLabel]
    if (isEmptyAnswer(phoneValue)) continue

    const countryLabel = PHONE_TO_COUNTRY_CODE_LABEL[phoneLabel]
    const snapshotCountry = countryLabel
      ? countryCodeSnapshot[countryLabel]
      : undefined
    const source = phoneCountryCode.resolvePhoneCountrySource(
      String(phoneValue),
      isEmptyAnswer(snapshotCountry) ? undefined : snapshotCountry,
      countryLabel ? regular[countryLabel] : undefined,
    )
    const national = source
      ? phoneCountryCode.toNationalPhoneValue(String(phoneValue), source)
      : String(phoneValue)
    const digits = national.replace(/\D/g, "")
    regular[phoneLabel] =
      digits.length >= 7 && digits.length <= 15 ? digits : ""

    const currentCountry = countryLabel ? regular[countryLabel] : undefined
    const shouldUpdateCountry =
      isEmptyAnswer(currentCountry) ||
      !phoneCountryCode.decomposePhone(String(phoneValue), currentCountry)
        .valid
    if (
      countryLabel &&
      phoneCountryCode.getDialCodeDigits(source) &&
      shouldUpdateCountry &&
      source !== currentCountry
    ) {
      regular[countryLabel] = source
    }
  }
}

function applyPhoneFallbacks(regular) {
  const phoneFallback = regular[PHONE_NUMBER_LABEL]
  const countryFallback = regular[PHONE_COUNTRY_CODE_LABEL]
  for (const phoneLabel of PHONE_NUMBER_LABELS) {
    if (isEmptyAnswer(regular[phoneLabel])) {
      regular[phoneLabel] = phoneFallback
    }
    const countryLabel = PHONE_TO_COUNTRY_CODE_LABEL[phoneLabel]
    if (countryLabel && isEmptyAnswer(regular[countryLabel])) {
      regular[countryLabel] = countryFallback
    }
  }
}

export function prepareDayforceAnswerRequestRules(formRules) {
  const countryCodeRules = formRules.filter((rule) =>
    PHONE_COUNTRY_CODE_LABELS.includes(rule.label),
  )
  const phoneRules = formRules.filter((rule) =>
    PHONE_NUMBER_LABELS.includes(rule.label),
  )
  if (countryCodeRules.length === 0 || phoneRules.length === 0) {
    return formRules
  }
  return formRules.map((rule) => {
    if (PHONE_COUNTRY_CODE_LABELS.includes(rule.label)) {
      const options = rule.options
      return {
        ...rule,
        description:
          Array.isArray(options) && options.length > 0
            ? undefined
            : phoneCountryCode.PHONE_COUNTRY_CODE_DESCRIPTION,
      }
    }
    if (PHONE_NUMBER_LABELS.includes(rule.label)) {
      return {
        ...rule,
        description: phoneCountryCode.LOCAL_PHONE_DESCRIPTION,
      }
    }
    return rule
  })
}

export function formatAnswer(answer, options = {}) {
  const regular = { ...(answer.regular || {}) }
  normalizeStateAnswers(regular)
  applyPhoneFallbacks(regular)
  const countryCodeSnapshot = Object.fromEntries(
    PHONE_COUNTRY_CODE_LABELS.map((label) => [label, regular[label]]),
  )
  applyDayforceCountryFallbacks(regular, options.profileData)
  normalizePhoneAnswers(regular, countryCodeSnapshot)
  return { ...answer, regular }
}
