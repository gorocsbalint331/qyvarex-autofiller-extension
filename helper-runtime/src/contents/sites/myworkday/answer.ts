// @ts-nocheck
/**
 * MyWorkday — answer formatting (country, phone, state, education/experience).
 */

import * as dayjs from "dayjs"
import * as constants from "../../../constants.ts"
import * as lang from "../../../utils/lang.js"
import * as stringUtils from "../../../utils/string.ts"

const dayjsDefault = { default: dayjs }

const STATE_LABELS = [
  "State",
  "State/Province",
  "State / Province",
  "State/Territory",
  "State / Territory",
  "State/Region",
  "State / Region",
]
const PHONE_DEVICE_TYPE_FALLBACKS = [
  "Mobile",
  "Personal Mobile",
  "Home",
  "Cell",
]
const EMPTY_SELECT_VALUES = new Set([
  "select one",
  "select",
  "please select",
  "none",
  "not selected",
])
const COUNTRY_FILL_ALIASES = {
  canada: ["Canada", "CA"],
  ca: ["Canada", "CA"],
  "united states": ["United States of America", "United States", "USA", "US"],
  "united states of america": [
    "United States of America",
    "United States",
    "USA",
    "US",
  ],
  us: ["United States of America", "United States", "USA", "US"],
  usa: ["United States of America", "United States", "USA", "US"],
  "united kingdom": ["United Kingdom", "UK", "GB"],
  uk: ["United Kingdom", "UK", "GB"],
  gb: ["United Kingdom", "UK", "GB"],
  india: ["India", "IN"],
  in: ["India", "IN"],
  china: ["China", "CN"],
  cn: ["China", "CN"],
}
const STATE_LABEL_KEYS = new Set(STATE_LABELS.map(toAlphanumericKey))
const WORKDAY_DISABILITY_SELF_IDENTIFY_LABEL =
  "Please check one of the boxes below:"
const DISABILITY_ANSWER_KEYS = [
  WORKDAY_DISABILITY_SELF_IDENTIFY_LABEL,
  "Disability",
  "disability",
  "disabilityStatus",
]

function toAlphanumericKey(value) {
  return value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
}

function normalizeWhitespace(value) {
  return String(value ?? "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeMatchText(value) {
  return normalizeWhitespace(value)
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function isEllipsisLabelMatch(fullLabel, truncatedLabel) {
  const truncated = normalizeWhitespace(truncatedLabel)
  if (!/(?:\.{3}|\u2026)/.test(truncated)) return false
  const fullNormalized = normalizeMatchText(fullLabel)
  const parts = truncated
    .split(/\.{3}|\u2026/)
    .map(normalizeMatchText)
    .filter(Boolean)
  if (!fullNormalized || parts.length < 2) return false
  let searchFrom = 0
  for (const part of parts) {
    const index = fullNormalized.indexOf(part, searchFrom)
    if (index === -1) return false
    searchFrom = index + part.length
  }
  return parts.join("").length >= 20
}

function expandEllipsisRegularAnswers(answer, rules = []) {
  const regular = answer.regular || {}
  const truncatedEntries = Object.entries(regular).filter(([key]) =>
    /(?:\.{3}|\u2026)/.test(key),
  )
  if (truncatedEntries.length === 0 || rules.length === 0) return

  for (const rule of rules) {
    const label = rule?.label
    if (!label || label in regular) continue
    const match = truncatedEntries.find(([key]) =>
      isEllipsisLabelMatch(label, key),
    )
    if (match) regular[label] = match[1]
  }
}

function isStateFieldLabel(label) {
  return STATE_LABEL_KEYS.has(toAlphanumericKey(label))
}

function isPhoneDeviceTypeLabel(label) {
  const key = toAlphanumericKey(label)
  return (
    key === "phonedevicetype" ||
    (key.includes("phone") &&
      key.includes("device") &&
      key.includes("type"))
  )
}

function isEmployeeIdLabel(label) {
  const key = toAlphanumericKey(label)
  return key.includes("employee") && key.includes("id")
}

function isAddressLine2Label(label) {
  const key = toAlphanumericKey(label)
  return (
    key === "addressline2" ||
    key === "address2" ||
    key === "streetaddress2"
  )
}

function isAddressLine1Label(label) {
  const key = toAlphanumericKey(label)
  return (
    key === "addressline1" ||
    key === "address1" ||
    key === "streetaddress1" ||
    key === "streetaddress"
  )
}

function isFacebookLabel(label) {
  return toAlphanumericKey(label).includes("facebook")
}

function firstNonEmptyValue(candidates) {
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      const nested = candidate.find((value) => !lang.isEmptyValue(value))
      if (nested !== undefined) return nested
      continue
    }
    if (!lang.isEmptyValue(candidate)) return candidate
  }
  return null
}

function applyWorkdaySelfIdentifyAnswers(answer, options = {}) {
  answer.regular = {
    ...(answer.regular || {}),
  }
  const disabilityValue = firstNonEmptyValue([
    ...DISABILITY_ANSWER_KEYS.map((key) => answer.regular[key]),
    options.autofillInfo?.employmentInfo?.disability,
    options.autofillInfo?.disability,
  ])
  const trimmed =
    disabilityValue == null ? null : String(disabilityValue).trim()
  if (trimmed) answer.regular[WORKDAY_DISABILITY_SELF_IDENTIFY_LABEL] = trimmed
  return answer
}

function normalizeStateValue(value) {
  const candidate = Array.isArray(value)
    ? value.find((item) => !lang.isEmptyValue(item))
    : value
  if (candidate == null) return null
  const text = String(candidate).trim()
  if (!text) return null
  const abbreviation = text.replace(/\./g, "").toUpperCase()
  if (constants.STATE_MAP[abbreviation]) {
    return constants.STATE_MAP[abbreviation]
  }
  const lower = text.toLowerCase()
  return (
    Object.values(constants.STATE_MAP).find(
      (state) => state.toLowerCase() === lower,
    ) ?? null
  )
}

function coerceTrimmedString(value) {
  const candidate = Array.isArray(value)
    ? value.find((item) => !lang.isEmptyValue(item))
    : value
  return lang.isEmptyValue(candidate) ? null : String(candidate).trim()
}

function isEmptySelectLikeValue(value) {
  if (lang.isEmptyValue(value)) return true
  const text = coerceTrimmedString(value)?.toLowerCase()
  return !text || EMPTY_SELECT_VALUES.has(text)
}

function firstTrimmedString(...candidates) {
  for (const candidate of candidates) {
    const text = coerceTrimmedString(candidate)
    if (text) return text
  }
  return null
}

function isUsOrCanadaCountry(value) {
  const text = coerceTrimmedString(value)
    ?.replace(/\./g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
  return (
    !!text &&
    (text === "us" ||
      text === "usa" ||
      text === "united states" ||
      text === "united states of america" ||
      text === "ca" ||
      text === "canada")
  )
}

function isPhoneCountryCodeLabel(label) {
  const lower = label.trim().toLowerCase()
  const key = toAlphanumericKey(label)
  return (
    lower === "country phone code" ||
    lower === "phone country code" ||
    lower === "country/region phone code" ||
    key.includes("countryphonecode") ||
    key.includes("phonecountrycode") ||
    key.includes("countryregionphonecode") ||
    (key.includes("country") &&
      key.includes("phone") &&
      key.includes("code"))
  )
}

function isCountryFieldLabel(label) {
  if (isPhoneCountryCodeLabel(label)) return false
  const lower = label.trim().toLowerCase()
  const key = toAlphanumericKey(label)
  return (
    lower === "country" ||
    lower === "country / territory" ||
    lower === "country/territory" ||
    lower === "country / region" ||
    lower === "country/region" ||
    key === "country" ||
    key === "countryterritory" ||
    key === "countryregion"
  )
}

function normalizeCountryLookupKey(value) {
  const text = coerceTrimmedString(value)
    ?.replace(/\./g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
  return text || null
}

function getCountryAliasList(value) {
  const key = normalizeCountryLookupKey(value)
  return key ? (COUNTRY_FILL_ALIASES[key] ?? null) : null
}

function getWorkdayCountryFillValue(value) {
  return getCountryAliasList(value)?.[0] ?? coerceTrimmedString(value)
}

function isUsDialCountryCode(value) {
  const text = coerceTrimmedString(value)
  if (!text) return false
  const plusDigits = text.match(/\+(\d{1,4})/)?.[1]
  if (plusDigits) return plusDigits === "1"
  const digits = text.replace(/\D/g, "")
  return digits && digits.length <= 4
    ? digits === "1"
    : isUsOrCanadaCountry(text)
}

function hasUsablePhoneCountryCode(value) {
  const text = coerceTrimmedString(value)?.toLowerCase()
  return !!(text && text !== "select one")
}

function looksLikePhoneCountryCodeValue(value) {
  const text = coerceTrimmedString(value)
  return (
    !!text &&
    (/(?:^|\s)\+\d{1,4}\b/.test(text) || /^\s*\d{1,4}\s*$/.test(text))
  )
}

function answerHasPhoneCountryCode(answer) {
  return Object.entries(answer.regular || {}).some(
    ([label, value]) =>
      (isPhoneCountryCodeLabel(label) && hasUsablePhoneCountryCode(value)) ||
      (toAlphanumericKey(label) === "countrycode" &&
        looksLikePhoneCountryCodeValue(value)),
  )
}

function extractParenthesizedPhone(value) {
  const match = value.match(/^\s*\(\s*(\+\d{1,4})\s*\)\s*(.+)$/)
  if (!match) return null
  const digits = match[2].replace(/\D/g, "")
  return digits ? `(${match[1]})${digits}` : null
}

function answerUsesUsPhoneCountry(answer, options = {}) {
  const regular = answer.regular || {}
  const phoneCodes = Object.entries(regular)
    .filter(([label]) => isPhoneCountryCodeLabel(label))
    .map(([, value]) => value)
    .filter(hasUsablePhoneCountryCode)
  if (phoneCodes.length > 0) return phoneCodes.some(isUsDialCountryCode)

  const countryCandidates = [
    options.country,
    answer.country,
    options.autofillInfo?.location?.country,
    ...Object.entries(regular)
      .filter(([label]) => isCountryFieldLabel(label))
      .map(([, value]) => value),
  ]
  return countryCandidates.some(isUsOrCanadaCountry)
}

function normalizePhoneNumber(value, answer, options = {}) {
  const text = String(value ?? "")
  const parenthesized = extractParenthesizedPhone(text)
  if (parenthesized && !answerHasPhoneCountryCode(answer)) {
    return parenthesized
  }
  const digits = text.replace(/\D/g, "")
  return digits &&
    ((/^\s*\+1/.test(text) && digits.startsWith("1")) ||
      (digits.length === 11 &&
        digits.startsWith("1") &&
        answerUsesUsPhoneCountry(answer, options)))
    ? digits.slice(1)
    : digits
}

function applyPhoneDeviceTypeFallbacks(answer) {
  const labels = Object.keys(answer.regular).filter(isPhoneDeviceTypeLabel)
  if (labels.length === 0 && !isEmptySelectLikeValue(answer.regular["Phone Number"])) {
    answer.regular["Phone Device Type"] = PHONE_DEVICE_TYPE_FALLBACKS
    return
  }
  for (const label of labels) {
    if (isEmptySelectLikeValue(answer.regular[label])) {
      answer.regular[label] = PHONE_DEVICE_TYPE_FALLBACKS
    }
  }
}

function applyCountryFallbacks(answer, options = {}) {
  const regular = answer.regular || {}
  const countryFromRegular = Object.entries(regular).find(([label]) =>
    isCountryFieldLabel(label),
  )?.[1]
  const countryValue =
    firstTrimmedString(
      options.country,
      answer.country,
      options.autofillInfo?.location?.country,
      countryFromRegular,
    ) ?? countryFromRegular
  const aliases = getCountryAliasList(countryValue)
  if (!aliases) return

  for (const label of Object.keys(regular).filter(isCountryFieldLabel)) {
    if (isEmptySelectLikeValue(regular[label])) {
      regular[label] = aliases
    } else {
      const existingAliases = getCountryAliasList(regular[label])
      if (existingAliases) regular[label] = existingAliases
    }
  }
}

function getHostnameFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase()
  } catch {
    return ""
  }
}

function clearInvalidFacebookUrls(answer) {
  for (const label of Object.keys(answer.regular).filter(isFacebookLabel)) {
    const value = coerceTrimmedString(answer.regular[label])
    if (!value) continue
    const hostname = getHostnameFromUrl(value)
    if (
      !hostname ||
      hostname.includes("facebook.com") ||
      hostname.includes("fb.com")
    ) {
      continue
    }
    answer.regular[label] = ""
  }
}

function lettersOnlyLower(value) {
  return (
    coerceTrimmedString(value)?.replace(/[^a-zA-Z]/g, "").toLowerCase() ??
    ""
  )
}

function clearEmployeeIdMatchingName(answer) {
  const firstName = firstTrimmedString(
    answer.regular["First Name"],
    answer.regular["Given Name"],
  )
  const lastName = firstTrimmedString(
    answer.regular["Last Name"],
    answer.regular["Family Name"],
  )
  const nameKey = lettersOnlyLower(
    [firstName, lastName].filter(Boolean).join(" "),
  )
  if (!nameKey) return
  for (const label of Object.keys(answer.regular).filter(isEmployeeIdLabel)) {
    if (lettersOnlyLower(answer.regular[label]) === nameKey) {
      answer.regular[label] = ""
    }
  }
}

function looksLikeStreetAddress(value) {
  const text = coerceTrimmedString(value)
  return (
    !!text &&
    !/\b(apt|apartment|suite|ste|unit|floor|fl|room|rm|#)\b/i.test(text) &&
    /^\d+\s+\S+/.test(text) &&
    /\b(st|street|ave|avenue|rd|road|blvd|boulevard|ln|lane|dr|drive|ct|court|way|pkwy|parkway)\b\.?$/i.test(
      text,
    )
  )
}

function normalizeAddressCompareKey(value) {
  return (
    coerceTrimmedString(value)
      ?.replace(/[.,]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase() ?? ""
  )
}

function clearDuplicateAddressLine2(answer) {
  const line1Keys = Object.entries(answer.regular)
    .filter(([label]) => isAddressLine1Label(label))
    .map(([, value]) => normalizeAddressCompareKey(value))
    .filter(Boolean)
  if (line1Keys.length === 0) return

  for (const label of Object.keys(answer.regular).filter(
    isAddressLine2Label,
  )) {
    const line2Key = normalizeAddressCompareKey(answer.regular[label])
    if (
      looksLikeStreetAddress(answer.regular[label]) &&
      line1Keys.includes(line2Key)
    ) {
      answer.regular[label] = ""
    }
  }
}

function applyStateFallbacks(answer, explicitState) {
  const stateValue = explicitState ?? normalizeStateValue(answer.state)
  const stateLabels = Object.keys(answer.regular).filter(isStateFieldLabel)
  if (stateLabels.length > 0) {
    for (const label of stateLabels) {
      const current = answer.regular[label]
      const normalized = normalizeStateValue(current)
      if (normalized) {
        answer.regular[label] = normalized
      } else if (lang.isEmptyValue(current) && stateValue) {
        answer.regular[label] = stateValue
      }
    }
    return
  }
  if (stateValue) {
    for (const label of STATE_LABELS) answer.regular[label] = stateValue
  }
}

const NAME_FIELD_LABEL_RE =
  /^(Local\s+|Arabic\s+|Latin\s+|Western\s+)?(First Name|Last Name|Given Name(\(s\))?|Family Name|Surname)(\s*-\s*(Latin|Western|Arabic)(\s+Script)?)?$/i

function formatAnswer(answer, options = {}) {
  answer.regular = {
    ...(answer.regular || {}),
  }
  options.autofillInfo
  if (answer.regular) {
    expandEllipsisRegularAnswers(answer, options.rules)
    for (const label of Object.keys(answer.regular)) {
      if (
        NAME_FIELD_LABEL_RE.test(label) &&
        typeof answer.regular[label] === "string"
      ) {
        answer.regular[label] = stringUtils.toNameTitleCase(
          answer.regular[label],
        )
      }
    }
    answer.regular["How Did You Hear About Us?"] = constants.SOURCE_VALUES
    answer.regular["How did you hear about us?"] = constants.SOURCE_VALUES
    if (
      typeof answer.regular?.["Phone Number"] === "string" &&
      answer.regular["Phone Number"]
    ) {
      answer.regular["Phone Number"] = normalizePhoneNumber(
        answer.regular["Phone Number"],
        answer,
        options,
      )
    }
    if (
      answer.regular?.["Available to work"] === "" ||
      answer.regular?.["Available to work"]
    ) {
      answer.regular["Available to work"] =
        dayjsDefault.default().format("MM/DD/YYYY")
    }
    applyStateFallbacks(answer)
    applyPhoneDeviceTypeFallbacks(answer)
    applyCountryFallbacks(answer, options)
    clearInvalidFacebookUrls(answer)
    clearEmployeeIdMatchingName(answer)
    clearDuplicateAddressLine2(answer)
    applyWorkdaySelfIdentifyAnswers(answer, options)
    answer.regular.Date = dayjsDefault.default().format("MM/DD/YYYY")
  }

  if (answer.workExperience && answer.workExperience.length > 0) {
    for (const experience of answer.workExperience) {
      if (experience?.Start) experience.From = experience.Start
      if (experience?.End) experience.To = experience.End
      if (experience && "isCurrent" in experience) {
        experience["I currently work here"] = experience.isCurrent
      }
      for (const [key, value] of Object.entries(experience ?? {})) {
        if (typeof value === "string") {
          experience[key] = value.replace(/[<>[\]{}"\\]/g, "")
        }
      }
    }
  }

  if (answer.education && answer.education.length > 0) {
    for (const education of answer.education) {
      if (education?.Start) education.From = education.Start
      if (education?.End) education.To = education.End
      if (education?.School) {
        education["School or University"] = education.School
      }
      if (education?.Study) education["Field of Study"] = education.Study
      for (const [key, value] of Object.entries(education ?? {})) {
        if (typeof value === "string") {
          education[key] = value.replace(/[<>[\]{}"\\]/g, "")
        }
      }
    }
  }

  return answer
}

export {
  WORKDAY_DISABILITY_SELF_IDENTIFY_LABEL,
  applyWorkdaySelfIdentifyAnswers,
  formatAnswer,
  getWorkdayCountryFillValue,
  normalizeStateValue,
}
