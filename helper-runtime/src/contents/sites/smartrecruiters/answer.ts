// @ts-nocheck
/**
 * SmartRecruiters — answer shaping (dates, country, postal, social URLs, consent).
 */

import * as enums from "../../../core/enums.js"
import * as fieldLabel from "../../../utils/fieldLabel.js"
import * as lang from "../../../utils/lang.js"

const COUNTRY_LABELS = [
  "Country",
  "Country/Region",
  "Country or Region",
  "Country of residence",
  "Residence Country",
]

const POSTAL_CODE_PRIMARY_LABEL = "Postal code / zip code"

const POSTAL_CODE_LABELS = [
  POSTAL_CODE_PRIMARY_LABEL,
  "Postal Code",
  "Postal code",
  "Zip Code",
  "ZIP Code",
  "Zip code",
  "Zip",
  "ZIP",
  "Zip/Postal Code",
  "Zip/postal code",
  "Postal / Zip Code",
  "postalCode",
  "postal_code",
  "zipCode",
  "zip_code",
  "zipcode",
]

const SOCIAL_HOST_MATCHERS = [
  {
    hosts: ["facebook.com", "fb.com"],
    matches: (label) => label.includes("facebook"),
  },
  {
    hosts: ["linkedin.com"],
    matches: (label) => label.includes("linkedin"),
  },
  {
    hosts: ["github.com"],
    matches: (label) => label.includes("github"),
  },
  {
    hosts: ["twitter.com", "x.com"],
    matches: (label) =>
      label.includes("twitter") || "x" === label || label.includes("fkatwitter"),
  },
]

const WEBSITE_LABEL_KEYS = [
  "website",
  "websiteurl",
  "personalwebsite",
  "personalwebsiteurl",
  "personalsite",
  "personalsiteurl",
  "portfolio",
  "portfoliourl",
]

const MONTH_NAME_TO_NUMBER = {
  jan: "01",
  january: "01",
  feb: "02",
  february: "02",
  mar: "03",
  march: "03",
  apr: "04",
  april: "04",
  may: "05",
  jun: "06",
  june: "06",
  jul: "07",
  july: "07",
  aug: "08",
  august: "08",
  sep: "09",
  sept: "09",
  september: "09",
  oct: "10",
  october: "10",
  nov: "11",
  november: "11",
  dec: "12",
  december: "12",
}

function formatAnswer(answer, formRules = []) {
  const dateKeys = ["From", "To", "Start", "End"]
  const sectionKeys = ["workExperience", "education"]
  for (const sectionKey of sectionKeys) {
    const records = answer[sectionKey]
    if (records && Array.isArray(records)) {
      for (const record of records) {
        normalizeCurrentFlag(record, sectionKey)
        for (const dateKey of dateKeys) {
          if (record[dateKey]) {
            record[dateKey] = normalizeSmartRecruitersDate(record[dateKey])
          }
        }
        if (record.Description) {
          record.Description = sanitizeDescription(record.Description)
        }
      }
    }
  }
  fillMissingCountry(answer)
  fillMissingPostalCode(answer)
  sanitizeWebsiteFields(answer)
  autoSelectConsentCheckboxes(answer, formRules)
  return answer
}

function isPrivacyNoticeCheckbox(rule) {
  return (
    rule.type === enums.FIELD_TYPE.CHECKBOX &&
    true === rule.required &&
    rule.$checkboxs?.length === 1 &&
    /privacy\s+notice/i.test(rule.label)
  )
}

function autoSelectConsentCheckboxes(answer, formRules) {
  const consentRules = formRules.filter(isPrivacyNoticeCheckbox)
  if (0 !== consentRules.length) {
    answer.regular = {
      ...(answer.regular || {}),
      ...Object.fromEntries(
        consentRules.map((rule) => [rule.label, ["Yes"]]),
      ),
    }
    console.info("[SmartRecruiters][Consent] auto-selected-policy-notice", {
      policyNoticeCount: consentRules.length,
    })
  }
}

function normalizeSmartRecruitersDate(value) {
  if ("string" != typeof value) return ""
  const trimmed = value.trim()
  if (!trimmed || "present" === trimmed.toLowerCase()) return ""

  const monthYear = trimmed.match(/^([A-Za-z]+)\s+(\d{4})$/)
  if (monthYear) {
    const month = MONTH_NAME_TO_NUMBER[monthYear[1].toLowerCase()]
    return month ? `${monthYear[2]}-${month}-01` : trimmed
  }

  const yearMonth = trimmed.match(/^(\d{4})[-/\s]+([A-Za-z]+)$/)
  if (yearMonth) {
    const month = MONTH_NAME_TO_NUMBER[yearMonth[2].toLowerCase()]
    return month ? `${yearMonth[1]}-${month}-01` : trimmed
  }

  const normalized = trimmed.replace(/\//g, "-").replace(/\./g, "-")
  const parts = normalized.split("-")
  if (1 === parts.length && /^\d{4}$/.test(parts[0])) {
    return `${parts[0]}-01-01`
  }
  if (2 === parts.length && /^\d{4}$/.test(parts[0])) {
    return `${parts[0]}-${parts[1].padStart(2, "0")}-01`
  }
  if (3 === parts.length && /^\d{4}$/.test(parts[0])) {
    const month = parts[1].padStart(2, "0")
    const day = parts[2].padStart(2, "0")
    return `${parts[0]}-${month}-${day}`
  }
  return trimmed
}

function normalizeSmartRecruitersDateRecordForRule(record, label) {
  if ("From" !== label && "To" !== label) return record
  const aliasKey = "From" === label ? "Start" : "End"
  const raw = record[label] || record[aliasKey]
  const normalized = normalizeSmartRecruitersDate(raw)
  return normalized ? { ...record, [label]: normalized } : record
}

function normalizeCurrentFlag(record, sectionKey) {
  const currentLabel =
    "workExperience" === sectionKey
      ? "I currently work here"
      : "I currently attend"
  const isCurrent =
    true === record.isCurrent ||
    "yes" === String(record[currentLabel] || "").toLowerCase() ||
    "present" === String(record.To || record.End || "").toLowerCase()
  if (isCurrent) {
    record[currentLabel] = "Yes"
    if ("present" === String(record.To || "").toLowerCase()) record.To = ""
    if ("present" === String(record.End || "").toLowerCase()) record.End = ""
  }
}

function fillMissingCountry(answer) {
  answer.regular = answer.regular || {}
  const country = getProfileCountry(answer)
  if (!country) return
  let matchedLabel = false
  for (const key of Object.keys(answer.regular)) {
    if (isCountryLabel(key)) {
      matchedLabel = true
      if (lang.isEmptyValue(answer.regular[key])) {
        answer.regular[key] = country
      }
    }
  }
  if (!matchedLabel && lang.isEmptyValue(answer.regular.Country)) {
    answer.regular.Country = country
  }
}

function getProfileCountry(answer) {
  const value =
    answer.profileData?.country ||
    answer.profile_data?.country ||
    answer.country
  return "string" == typeof value ? value.trim() : ""
}

function isCountryLabel(label) {
  const normalized = fieldLabel.normalizeFieldLabel(label)
  return COUNTRY_LABELS.some(
    (candidate) => fieldLabel.normalizeFieldLabel(candidate) === normalized,
  )
}

function fillMissingPostalCode(answer) {
  answer.regular = answer.regular || {}
  const postal = resolvePostalCode(answer)
  if (postal) {
    for (const key of Object.keys(answer.regular)) {
      if (
        isPostalCodeLabel(key) &&
        lang.isEmptyValue(answer.regular[key])
      ) {
        answer.regular[key] = postal
      }
    }
    if (lang.isEmptyValue(answer.regular[POSTAL_CODE_PRIMARY_LABEL])) {
      answer.regular[POSTAL_CODE_PRIMARY_LABEL] = postal
    }
  }
}

function resolvePostalCode(answer) {
  const fromRegular = findFirstMatchingValue(answer.regular, POSTAL_CODE_LABELS)
  return fromRegular || findPostalInProfile(answer)
}

function findPostalInProfile(answer) {
  const profileData = answer.profileData || {}
  const profileDataSnake = answer.profile_data || {}
  const sources = [
    profileData,
    profileDataSnake,
    profileData.location,
    profileDataSnake.location,
    profileData.personalInfo,
    profileDataSnake.personalInfo,
    profileData.personalInfo?.location,
    profileDataSnake.personalInfo?.location,
    answer,
  ]
  for (const source of sources) {
    const value = findFirstMatchingValue(source, POSTAL_CODE_LABELS)
    if (value) return value
  }
  return ""
}

function findFirstMatchingValue(record, labels) {
  if (!record || "object" != typeof record || Array.isArray(record)) return ""
  const normalizedLabels = new Set(
    labels.map((label) => fieldLabel.normalizeFieldLabel(label)),
  )
  for (const [key, value] of Object.entries(record)) {
    if (
      !normalizedLabels.has(fieldLabel.normalizeFieldLabel(key)) ||
      lang.isEmptyValue(value)
    ) {
      continue
    }
    if (Array.isArray(value)) {
      const first = value.find((entry) => !lang.isEmptyValue(entry))
      return String(first ?? "").trim()
    }
    return String(value).trim()
  }
  return ""
}

function coerceScalarValue(value) {
  if (Array.isArray(value)) {
    const first = value.find((entry) => !lang.isEmptyValue(entry))
    return void 0 === first ? "" : String(first).trim()
  }
  return lang.isEmptyValue(value) ? "" : String(value).trim()
}

function normalizeWebsiteLabelKey(label) {
  return fieldLabel
    .normalizeFieldLabel(label, { loose: true })
    .replace(/\s/g, "")
}

function extractHostname(value) {
  const trimmed = value.trim()
  if (!trimmed) return ""
  const withProtocol = /^[a-z][a-z\d+.-]*:\/\//i.test(trimmed)
    ? trimmed
    : trimmed.includes(".")
      ? `https://${trimmed}`
      : ""
  if (!withProtocol) return ""
  try {
    const url = new URL(withProtocol)
    if ("http:" !== url.protocol && "https:" !== url.protocol) return ""
    const hostname = url.hostname.replace(/^www\./, "").toLowerCase()
    return hostname.includes(".") || "localhost" === hostname ? hostname : ""
  } catch {
    return ""
  }
}

function hostnameMatches(hostname, expectedHost) {
  return hostname === expectedHost || hostname.endsWith(`.${expectedHost}`)
}

function isWebsiteLabelKey(key) {
  return WEBSITE_LABEL_KEYS.includes(key)
}

function sanitizeWebsiteFieldValue(label, value) {
  const key = normalizeWebsiteLabelKey(label)
  const scalar = coerceScalarValue(value)
  if (!scalar) return value
  const matcher = SOCIAL_HOST_MATCHERS.find((entry) => entry.matches(key))
  if (!matcher && !isWebsiteLabelKey(key)) return value
  const hostname = extractHostname(scalar)
  return hostname &&
    (!matcher || matcher.hosts.some((host) => hostnameMatches(hostname, host)))
    ? scalar
    : ""
}

function sanitizeWebsiteFields(answer) {
  answer.regular = answer.regular || {}
  for (const key of Object.keys(answer.regular)) {
    answer.regular[key] = sanitizeWebsiteFieldValue(key, answer.regular[key])
  }
}

function isPostalCodeLabel(label) {
  const normalized = fieldLabel.normalizeFieldLabel(label)
  return POSTAL_CODE_LABELS.some(
    (candidate) => fieldLabel.normalizeFieldLabel(candidate) === normalized,
  )
}

const sanitizeDescription = (text) =>
  text.replace(/\uff1b/g, ",").replace(/;/g, ",")

export {
  formatAnswer,
  normalizeSmartRecruitersDate,
  normalizeSmartRecruitersDateRecordForRule,
}
