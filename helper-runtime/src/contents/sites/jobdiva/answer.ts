// @ts-nocheck
/**
 * JobDiva — answer formatting, phone/country/date helpers.
 */

import * as enums from "../../../core/enums.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as phoneUtils from "../../../utils/phone.js"

export const JOBDIVA_PHONE_COUNTRY_CODE_LABEL = "Phone Country Code"
export const JOBDIVA_PHONE_TYPE_LABEL = "Phone Type"
export const JOBDIVA_PHONE_WITH_COUNTRY_CODE_DESCRIPTION =
  phoneCountryCode.LOCAL_PHONE_DESCRIPTION

const COUNTRY_ALIASES = {
  "cabo verde": ["Cape Verde"],
  "cote d ivoire ivory coast": ["Cote d'Ivoire"],
  curacao: ["Curacao"],
  "democratic republic of the congo": [
    "Congo, The Democratic Republic of the",
  ],
  "federated states of micronesia": ["Micronesia (Federated States of)"],
  iran: ["Iran (Islamic Republic of)"],
  laos: ["Lao People's Democratic Republic"],
  libya: ["Libyan Arab Jamahiriya"],
  "macao sar": ["Macau"],
  moldova: ["Moldova, Republic of"],
  "north korea": ["Korea, Democratic People's Republic of"],
  "north macedonia": ["Macedonia, The Former Yugoslav Republic of"],
  "palestine state of": ["Palestinian Territory,Occupied"],
  russia: ["Russian Federation"],
  "south korea": ["Korea, Republic of"],
  taiwan: ["Taiwan, Republic of China"],
  tanzania: ["Tanzania, United Republic of"],
  "timor leste": ["East Timor"],
  turkiye: ["Turkey"],
  "united states of america": ["United States"],
  "vatican city state holy see": ["Holy See (Vatican City State)"],
  vietnam: ["Viet Nam"],
  "virgin islands british": ["Virgin Islands, British"],
  "virgin islands us": ["Virgin Islands, U.S."],
}

function normalizeCountryKey(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .toLowerCase()
}

export function resolveJobdivaCountryOption(value, options) {
  const key = normalizeCountryKey(value)
  if (!key) return null

  const byNormalized = options.reduce((map, option) => {
    const normalized = normalizeCountryKey(option)
    if (!normalized) return map
    const list = map.get(normalized) || []
    list.push(option)
    map.set(normalized, list)
    return map
  }, new Map())

  const lookupKeys = [
    key,
    ...(COUNTRY_ALIASES[key] || []).map(normalizeCountryKey),
  ]
  const matches = Array.from(
    new Set(lookupKeys.flatMap((lookup) => byNormalized.get(lookup) || [])),
  )
  return matches.length === 1 ? matches[0] : null
}

export function prepareJobdivaAnswerRequestRules(rules) {
  return rules.flatMap((rule) => {
    if (
      rule.type !== enums.FIELD_TYPE.SECTION ||
      rule.label.trim().toLowerCase() !== "phone"
    ) {
      return [rule]
    }
    const children = rule.children || []
    const typeChild = children.find(
      (child) => child.label.trim().toLowerCase() === "type",
    )
    const countryChild = children.find(
      (child) => child.label.trim().toLowerCase() === "country",
    )
    const textChild = children.find(
      (child) => child.label.trim().toLowerCase() === "text",
    )
    if (!countryChild || !textChild) return [rule]
    return [
      ...(typeChild
        ? [{ ...typeChild, label: JOBDIVA_PHONE_TYPE_LABEL }]
        : []),
      { ...countryChild, label: JOBDIVA_PHONE_COUNTRY_CODE_LABEL },
      {
        ...textChild,
        label: rule.label,
        description: JOBDIVA_PHONE_WITH_COUNTRY_CODE_DESCRIPTION,
      },
    ]
  })
}

const MONTH_ALIASES = {
  jan: "January",
  january: "January",
  feb: "February",
  february: "February",
  mar: "March",
  march: "March",
  apr: "April",
  april: "April",
  may: "May",
  jun: "June",
  june: "June",
  jul: "July",
  july: "July",
  aug: "August",
  august: "August",
  sep: "September",
  sept: "September",
  september: "September",
  oct: "October",
  october: "October",
  nov: "November",
  november: "November",
  dec: "December",
  december: "December",
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const STATE_LABELS = [
  "State",
  "Province",
  "State / Province",
  "State/Province",
]

function asTrimmedString(value) {
  if (Array.isArray(value)) return value.map(asTrimmedString).find(Boolean) || ""
  if (typeof value === "string") return value.trim()
  if (typeof value === "number") return String(value)
  return ""
}

function stripToLocalPhoneDigits(phone, countryHint) {
  const stripped = phoneCountryCode.stripPhoneCountryCodePrefix(
    phone,
    countryHint,
  )
  return stripped.replace(/\D/g, "") || stripped || phone
}

function nationalPhoneFromValue(value) {
  const text = asTrimmedString(value)
  if (!text) return ""
  const parsed = phoneUtils.parsePhonePrefix(text)
  return parsed.dialCode
    ? parsed.nationalNumber
    : text.replace(/\D/g, "") || text
}

function isUsDialCode(phone, countryHint) {
  return phoneCountryCode.decomposePhone(phone, countryHint).dialCode === "1"
}

function resolveMonthName(value) {
  const text = asTrimmedString(value)
  if (!text) return ""
  const normalized = text.replace(/\./g, "").trim().toLowerCase()
  const fromAlias =
    MONTH_ALIASES[normalized] ||
    MONTH_ALIASES[normalized.split(/\s+/)[0] || ""]
  if (fromAlias) return fromAlias

  const isoMatch = normalized.match(
    /^(\d{4})[-/](\d{1,2})(?:[-/](\d{1,2}))?$/,
  )
  if (isoMatch) {
    const monthIndex = Number(isoMatch[2]) - 1
    return MONTH_NAMES[monthIndex] || ""
  }

  const wordMatch = normalized.match(/[a-z]+/)
  return (wordMatch && MONTH_ALIASES[wordMatch[0]]) || ""
}

function resolveYear(value) {
  const text = asTrimmedString(value)
  if (!text) return ""
  const trimmed = text.trim()
  const isoMatch = trimmed.match(/^(\d{4})[-/](\d{1,2})(?:[-/](\d{1,2}))?$/)
  if (isoMatch) return isoMatch[1]
  const yearMatch = trimmed.match(/\b(19|20)\d{2}\b/)
  return yearMatch ? yearMatch[0] : ""
}

function isTruthyFlag(value) {
  if (value === true || value === 1) return true
  const text = asTrimmedString(value).toLowerCase()
  return text === "true" || text === "yes" || text === "1"
}

function normalizeDateFields(record) {
  const fromMonthSource =
    record["From Month"] ||
    record.From ||
    record.from ||
    record.Start ||
    record.start
  const fromYearSource =
    record["From Year"] ||
    record.Start ||
    record.start ||
    record.From ||
    record.from
  const fromMonth = resolveMonthName(fromMonthSource)
  if (fromMonth) {
    record.From = record.From || fromMonth
    record["From Month"] = record["From Month"] || fromMonth
  }
  const fromYear = resolveYear(fromYearSource)
  if (fromYear) {
    record["From Year"] = record["From Year"] || fromYear
  }

  const isCurrent = isTruthyFlag(record.isCurrent ?? record.is_current)
  const toMonthSource = isCurrent
    ? record.End || record.end || record["To Month"] || record.To || record.to
    : record["To Month"] ||
      record.To ||
      record.to ||
      record.End ||
      record.end
  const toYearSource = isCurrent
    ? record.End || record.end || record["To Year"] || record.To || record.to
    : record["To Year"] ||
      record.End ||
      record.end ||
      record.To ||
      record.to
  const toMonth = resolveMonthName(toMonthSource)
  if (toMonth) {
    record.To = isCurrent ? toMonth : record.To || toMonth
    record["To Month"] = isCurrent
      ? toMonth
      : record["To Month"] || toMonth
  }
  const toYear = resolveYear(toYearSource)
  if (toYear) {
    record["To Year"] = isCurrent ? toYear : record["To Year"] || toYear
  }
}

function resolveCountryDisplay(value) {
  const text = String(value ?? "")
    .trim()
    .toLowerCase()
  if (!text) return ""
  if (text === "canada" || text === "ca") return "Canada"
  if (
    text === "us" ||
    text === "usa" ||
    text === "united states" ||
    text === "united states of america"
  ) {
    return "United States"
  }
  return ""
}

function regularHasStateValue(regular) {
  const labels = new Set([...STATE_LABELS, "state", "province"])
  return Object.keys(regular).some(
    (key) => !!labels.has(key) && asTrimmedString(regular[key]) !== "",
  )
}

function applyStateFallback(answer) {
  if (regularHasStateValue(answer.regular)) return
  const state = asTrimmedString(answer.state)
  if (!state) return
  for (const label of STATE_LABELS) {
    answer.regular[label] = state
  }
}

export function normalizeJobdivaPhoneValue(value, countryHint) {
  if (value == null) return null

  if (Array.isArray(value)) {
    const first = value.find(
      (item) => item != null && String(item).trim() !== "",
    )
    return first === undefined
      ? null
      : normalizeJobdivaPhoneValue(first, countryHint)
  }

  if (typeof value === "string") {
    const trimmed = value.trim()
    if (!trimmed) return null
    if (
      (trimmed.startsWith("{") && trimmed.endsWith("}")) ||
      (trimmed.startsWith("[") && trimmed.endsWith("]"))
    ) {
      try {
        return normalizeJobdivaPhoneValue(JSON.parse(trimmed), countryHint)
      } catch {
        // fall through to string phone handling
      }
    }
    return {
      type: "",
      country: isUsDialCode(trimmed) ? resolveCountryDisplay(countryHint) : "",
      text: stripToLocalPhoneDigits(trimmed),
    }
  }

  if (typeof value === "number") {
    return normalizeJobdivaPhoneValue(String(value), countryHint)
  }
  if (typeof value !== "object") return null

  const record = value
  const text =
    asTrimmedString(record.text) ||
    asTrimmedString(record.phone) ||
    asTrimmedString(record.value) ||
    asTrimmedString(record.number)
  const type = asTrimmedString(record.type)
  const country = asTrimmedString(record.country)
  const countryDisplay = resolveCountryDisplay(country)
  const hintDisplay = resolveCountryDisplay(countryHint)
  const usDial = isUsDialCode(text, country || countryDisplay)

  if (!text && !type && !country) return null
  return {
    type,
    country: usDial
      ? countryDisplay || country || hintDisplay
      : countryDisplay || country,
    text: stripToLocalPhoneDigits(text, country || countryDisplay),
  }
}

export function formatAnswer(answer) {
  if (!answer) return answer

  answer.education = Array.isArray(answer.education) ? answer.education : []
  answer.workExperience = Array.isArray(answer.workExperience)
    ? answer.workExperience
    : []
  answer.regular = answer.regular || {}

  const country =
    resolveCountryDisplay(answer.country) || asTrimmedString(answer.country)
  if (country) answer.regular.Country = country
  applyStateFallback(answer)

  const hasLegacyPhoneParts =
    answer.regular["Phone - type"] != null ||
    answer.regular["Phone - country"] != null ||
    answer.regular["Phone - text"] != null
  const hasLabeledPhoneParts =
    answer.regular[JOBDIVA_PHONE_TYPE_LABEL] != null ||
    answer.regular[JOBDIVA_PHONE_COUNTRY_CODE_LABEL] != null

  const phoneValue = hasLabeledPhoneParts
    ? {
        type: asTrimmedString(answer.regular[JOBDIVA_PHONE_TYPE_LABEL]),
        country: asTrimmedString(
          answer.regular[JOBDIVA_PHONE_COUNTRY_CODE_LABEL],
        ),
        text: nationalPhoneFromValue(answer.regular.Phone),
      }
    : normalizeJobdivaPhoneValue(
        hasLegacyPhoneParts
          ? {
              type: answer.regular["Phone - type"],
              country: answer.regular["Phone - country"],
              text:
                answer.regular["Phone - text"] || answer.regular.Phone,
            }
          : answer.regular.Phone,
        answer.country,
      )

  if (phoneValue) answer.regular.Phone = phoneValue

  if (hasLegacyPhoneParts || hasLabeledPhoneParts) {
    delete answer.regular["Phone - type"]
    delete answer.regular["Phone - country"]
    delete answer.regular["Phone - text"]
    delete answer.regular[JOBDIVA_PHONE_TYPE_LABEL]
    delete answer.regular[JOBDIVA_PHONE_COUNTRY_CODE_LABEL]
  }

  answer.education.forEach((record) => {
    if (record && typeof record === "object") normalizeDateFields(record)
  })
  answer.workExperience.forEach((record) => {
    if (record && typeof record === "object") normalizeDateFields(record)
  })

  return answer
}
