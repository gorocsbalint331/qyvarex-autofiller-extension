// @ts-nocheck
/**
 * Ultipro / UKG answer shaping — country, state, phone, and edu/exp field values.
 */

import * as constants from "../../../constants.ts"
import * as fieldLabel from "../../../utils/fieldLabel.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"

const MONTH_NAME_TO_MM = {
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

function parseDateParts(raw) {
  const text = String(raw ?? "").trim()
  if (!text) return null

  let match = text.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (match) {
    const [, year, month, day] = match
    return { year, month, day }
  }

  match = text.match(/^(\d{4})-(0?[1-9]|1[0-2])$/)
  if (match) {
    const [, year, month] = match
    return { year, month: month.padStart(2, "0") }
  }

  match = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (match) {
    const [, month, day, year] = match
    return {
      year,
      month: month.padStart(2, "0"),
      day: day.padStart(2, "0"),
    }
  }

  match = text.match(/^([A-Za-z]+)\s+(\d{4})$/)
  if (match) {
    const [, monthName, year] = match
    const month = MONTH_NAME_TO_MM[monthName.toLowerCase()]
    if (month) return { year, month }
  }

  match = text.match(/^(\d{4})$/)
  return match ? { year: match[1] } : null
}

export function getValueForEduExpField(label, record, rule) {
  const trimmed = label?.trim() || label

  if (trimmed === "Month") {
    const input = rule?.$input
    const aria =
      input?.getAttribute("aria-label")?.toLowerCase().trim() || ""
    const isFrom = aria.includes("from")
    const isTo = aria.includes("to")
    const monthNames = [
      "",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]
    if (isFrom && record.Start) {
      const parts = parseDateParts(record.Start)
      if (parts?.month) {
        const index = parseInt(parts.month, 10)
        return monthNames[index] || ""
      }
    } else if (isTo && record.End) {
      const parts = parseDateParts(record.End)
      if (parts?.month) {
        const index = parseInt(parts.month, 10)
        return monthNames[index] || ""
      }
    }
    return ""
  }

  if (trimmed === "Year (YYYY)") {
    const input = rule?.$input
    const aria =
      input?.getAttribute("aria-label")?.toLowerCase().trim() || ""
    const isFrom = aria.includes("from")
    const isTo = aria.includes("to")
    if (isFrom && record.Start) {
      return parseDateParts(record.Start)?.year || ""
    }
    if (isTo && record.End) {
      return parseDateParts(record.End)?.year || ""
    }
    return ""
  }

  if (trimmed === "From") {
    let value = record.Start || record.From || record.From || ""
    if (Array.isArray(value)) value = value[0] ?? ""
    return value
  }

  if (trimmed === "To") {
    let value = record.End || record.To || record.To || ""
    if (Array.isArray(value)) value = value[0] ?? ""
    return value
  }

  if (trimmed === "Major") {
    let value = record.Major ?? record.Major ?? record.Study ?? ""
    if (Array.isArray(value)) value = value[0] ?? ""
    return value
  }

  if (trimmed === "Minor") {
    let value = record.Minor ?? record.Minor ?? ""
    if (Array.isArray(value)) value = value[0] ?? ""
    return value
  }

  if (trimmed === "Level of Education / Degree") {
    let value = record[trimmed]
    const degree = record.Degree
    if (Array.isArray(value) && value.length > 0) {
      value = value[0]
    } else if (!(typeof value === "string" && value.trim())) {
      value = degree ?? ""
    }
    return value
  }

  let value = record[label] ?? ""
  if (Array.isArray(value)) value = value[0] ?? ""
  return value
}

export function formatAnswer(answer, countryHint = "") {
  if (!answer) return answer
  const result = { ...answer }
  if (answer.workExperience) {
    result.workExperience = truncateWorkExperienceLocations(
      answer.workExperience,
    )
  }
  if (result.regular && "Skills" in result.regular) {
    result.regular = { ...result.regular }
    delete result.regular.Skills
  }
  result.regular = injectUltiproCountry(result.regular, countryHint)
  result.regular = expandStateAbbreviations(result.regular)
  result.regular = normalizePhoneFields(result.regular)
  return result
}

function truncateWorkExperienceLocations(workExperience) {
  return Array.isArray(workExperience)
    ? workExperience.map((item) => ({
        ...item,
        Location: item.Location ? item.Location.substring(0, 20) : "",
      }))
    : []
}

function injectUltiproCountry(regular, countryHint) {
  const normalized = normalizeUltiproCountry(countryHint)
  if (!regular) {
    if (normalized) {
      console.info(
        "[Ultipro][Country] injected fresh Autofill Information country",
        { normalizedCountry: normalized },
      )
      return { Country: normalized }
    }
    return regular
  }

  const countryKeys = Object.keys(regular).filter(
    (key) =>
      fieldLabel.normalizeFieldLabel(key, { loose: true }) === "country",
  )
  if (countryKeys.length === 0) {
    if (normalized) {
      console.info(
        "[Ultipro][Country] injected fresh Autofill Information country",
        { normalizedCountry: normalized },
      )
      return { ...regular, Country: normalized }
    }
    return regular
  }

  const next = { ...regular }
  for (const key of countryKeys) {
    if (normalized) next[key] = normalized
  }
  return next
}

export function normalizeUltiproCountry(raw) {
  if (typeof raw !== "string") return ""
  const trimmed = raw.trim()
  const lower = trimmed.toLowerCase()
  if (!lower) return ""
  if (["canada", "ca"].includes(lower)) return "Canada"
  if (
    ["united kingdom", "uk", "gb", "gbr", "great britain"].includes(lower)
  ) {
    return "United Kingdom"
  }
  if (
    ["united states", "united states of america", "usa", "us"].includes(
      lower,
    )
  ) {
    return "United States"
  }
  return trimmed
}

function expandStateAbbreviations(regular) {
  if (!regular) return regular
  const next = { ...regular }
  for (const key of Object.keys(next)) {
    const lower = key.toLowerCase()
    if (lower.includes("state") || lower.includes("province")) {
      const value = next[key]
      const code =
        typeof value === "string" ? value.trim().toUpperCase() : ""
      if (code && constants.STATE_MAP[code]) {
        next[key] = constants.STATE_MAP[code]
      }
    }
  }
  return next
}

function normalizePhoneFields(regular) {
  if (!regular) return regular
  const next = { ...regular }
  const dialCode = phoneCountryCode.resolvePhoneCountryCodeAnswer({
    regular: next,
  })
  for (const key of Object.keys(next)) {
    if (!key.toLowerCase().includes("phone")) continue
    const value = next[key]
    if (typeof value === "string" && value.trim()) {
      const digits = value.replace(/\D/g, "")
      if (digits.length >= 7) {
        next[key] = phoneCountryCode.toNationalPhoneValue(
          value.trim(),
          dialCode,
        )
      }
    }
  }
  return next
}
