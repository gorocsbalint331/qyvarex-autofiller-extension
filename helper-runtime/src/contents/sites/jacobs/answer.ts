// @ts-nocheck
/**
 * Jacobs answer formatting helpers (dates, country, multi-value).
 */

const DATE_MONTH_YEAR_SUFFIX = "date (Month/Year)"
const START_DATE_LABEL = `Start ${DATE_MONTH_YEAR_SUFFIX}`
const END_DATE_LABEL = `End ${DATE_MONTH_YEAR_SUFFIX}`
const MONTH_ABBREVIATIONS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
]

export function normalizeText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

export function normalizeTextLower(value) {
  return normalizeText(value).toLowerCase()
}

export function toMultiValueArray(value) {
  const splitCommaSeparated = (raw) =>
    raw
      .split(",")
      .map((part) => part.trim())
      .filter((part) => part.length > 0)

  return Array.isArray(value)
    ? value.flatMap((item) => splitCommaSeparated(String(item ?? "")))
    : splitCommaSeparated(String(value ?? ""))
}

function normalizeCountryName(value) {
  const first = Array.isArray(value) ? value.find(Boolean) : value
  const text = String(first ?? "").trim()
  if (!text) return ""
  if (/^(us|usa|u\.s\.|u\.s\.a\.|united states of america)$/i.test(text)) {
    return "United States"
  }
  if (/^(ca|can)$/i.test(text)) return "Canada"
  if (/^(uk|gb|gbr|great britain|united kingdom)$/i.test(text)) {
    return "United Kingdom of Great Britain and Northern Ireland"
  }
  return text
}

function isCountryLabel(label) {
  return /^country(?:\s*\/.*)?$/i.test(label.trim())
}

function pickFirstNonEmpty(record, keys) {
  for (const key of keys) {
    const value = record[key]
    if (Array.isArray(value)) {
      const found = value.find((item) => String(item ?? "").trim())
      if (found != null) return found
    } else if (String(value ?? "").trim()) {
      return value
    }
  }
}

function pickFromDatesObject(record, keys) {
  const dates = record.dates
  if (dates && typeof dates === "object") return pickFirstNonEmpty(dates, keys)
}

function normalizeMonthYearValue(value) {
  const first = Array.isArray(value) ? value.find(Boolean) : value
  const text = String(first ?? "").trim()
  if (!text || /^(present|current|now)$/i.test(text)) return ""

  const monthYearMatch = text.match(/^([a-zA-Z]{3,9})\s+(\d{4})$/)
  if (monthYearMatch) {
    const monthIndex = MONTH_ABBREVIATIONS.indexOf(
      monthYearMatch[1].slice(0, 3).toLowerCase(),
    )
    return monthIndex >= 0
      ? `${monthYearMatch[2]}-${String(monthIndex + 1).padStart(2, "0")}`
      : text
  }

  const isoMatch = text.match(/^(\d{4})-(\d{1,2})/)
  return isoMatch
    ? `${isoMatch[1]}-${isoMatch[2].padStart(2, "0")}`
    : text
}

function normalizeRecordDates(record) {
  const start = normalizeMonthYearValue(
    pickFirstNonEmpty(record, [
      START_DATE_LABEL,
      "Start Date",
      "Start",
      "startDate",
      "start",
    ]) ?? pickFromDatesObject(record, ["startDate", "start"]),
  )
  const end = normalizeMonthYearValue(
    pickFirstNonEmpty(record, [
      END_DATE_LABEL,
      "End Date",
      "End",
      "endDate",
      "end",
      "Completion Date",
      "Graduation Date",
    ]) ??
      pickFromDatesObject(record, ["endDate", "completionDate", "end"]),
  )

  if (start) {
    record[START_DATE_LABEL] = start
    record["Start Date"] = start
  }
  if (end) {
    record[END_DATE_LABEL] = end
    record["End Date"] = end
  }
}

export function formatAnswer(answer) {
  const country = normalizeCountryName(answer.country)
  if (country) {
    answer.regular = answer.regular || {}
    let updatedCountryField = false
    for (const key of Object.keys(answer.regular)) {
      if (isCountryLabel(key)) {
        answer.regular[key] = country
        updatedCountryField = true
      }
    }
    if (!updatedCountryField) answer.regular.Country = country
  }

  for (const education of answer.education || []) normalizeRecordDates(education)
  for (const experience of answer.workExperience || []) {
    normalizeRecordDates(experience)
  }
  return answer
}
