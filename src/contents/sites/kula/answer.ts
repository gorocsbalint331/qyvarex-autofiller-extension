// @ts-nocheck
/**
 * Kula — answer formatting helpers.
 */

import * as dayjs from "dayjs"
import * as constants from "../../../constants.ts"

const dayjsDefault = { default: dayjs?.default ?? dayjs }

function formatAddressWithoutStreetNumber(address) {
  if (!address || typeof address !== "string") return

  const parts = address
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
  const nonNumericParts = parts.filter((part) => !/\d/.test(part))

  if (nonNumericParts.length === 0) {
    const stripped = address
      .replace(/\d+/g, "")
      .replace(/[, ]+/g, " ")
      .trim()
    return stripped || address.trim()
  }

  let stateIndex = -1
  for (let i = 0; i < nonNumericParts.length; i++) {
    const upper = nonNumericParts[i].toUpperCase().trim()
    if (constants.STATE_MAP[upper]) {
      stateIndex = i
      break
    }
  }

  if (stateIndex === -1) {
    return nonNumericParts.join(", ") || address.trim()
  }

  const stateCode = nonNumericParts[stateIndex].toUpperCase().trim()
  const stateName =
    constants.STATE_MAP[stateCode] || nonNumericParts[stateIndex]
  const city = nonNumericParts[stateIndex - 1] || ""
  const nextPart = nonNumericParts[stateIndex + 1]
  const canadianProvinces = new Set([
    "AB",
    "BC",
    "MB",
    "NB",
    "NL",
    "NS",
    "NT",
    "NU",
    "ON",
    "PE",
    "QC",
    "SK",
    "YT",
  ])
  const ukNations = new Set(["ENG", "NIR", "SCT", "WLS"])

  let country =
    nextPart && !constants.STATE_MAP[nextPart.toUpperCase().trim()]
      ? nextPart
      : undefined
  if (!country) {
    country = canadianProvinces.has(stateCode)
      ? "Canada"
      : ukNations.has(stateCode)
        ? "United Kingdom"
        : "United States"
  }

  const formatted = [city, stateName, country].filter(Boolean).join(", ")
  return formatted || address.trim()
}

function expandStateAbbreviations(location) {
  if (!location || typeof location !== "string") return location

  const parts = location
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
  if (parts.length === 0) return location

  const expanded = parts.map((part) => {
    const upper = part.toUpperCase()
    return constants.STATE_MAP[upper] ? constants.STATE_MAP[upper] : part
  })
  return expanded.join(", ")
}

function isMonthYearDisplay(value) {
  return (
    typeof value === "string" &&
    /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\s+\d{4}$/i.test(
      value.trim(),
    )
  )
}

function hasMeaningfulValue(record, key) {
  if (!(key in record)) return false
  const value = record[key]
  return value != null && !(typeof value === "string" && value.trim() === "")
}

function toMonthYear(value) {
  if (typeof value !== "string" || value.trim() === "") return
  if (isMonthYearDisplay(value)) return value.trim()
  const parsed = dayjsDefault.default(value.trim())
  return parsed.isValid() ? parsed.format("MMM YYYY") : undefined
}

function copyFieldsIfMissing(record, mappings) {
  const next = { ...record }
  for (const [sourceKey, targetKey] of mappings) {
    if (hasMeaningfulValue(next, targetKey) || !hasMeaningfulValue(next, sourceKey)) {
      continue
    }
    const value = /date/i.test(targetKey)
      ? toMonthYear(next[sourceKey])
      : next[sourceKey]
    if (value !== undefined) {
      next[targetKey] = value
    }
  }
  return next
}

function ensureCurrentEndDate(record) {
  if (record?.isCurrent !== true) return record
  const endDate = record["End Date"]
  return isMonthYearDisplay(endDate)
    ? record
    : { ...record, "End Date": dayjsDefault.default().format("MMM YYYY") }
}

export function formatAnswer(answer) {
  if (answer?.regular) {
    const addressKeys = ["Address", "address", "Home Address"]
    for (const key of addressKeys) {
      if (key in answer.regular) {
        const formatted = formatAddressWithoutStreetNumber(answer.regular[key])
        if (formatted) {
          answer.regular[key] = formatted
        }
      }
    }

    const locationKeys = [
      "Location",
      "location",
      "Preferred Location",
      "City",
    ]
    for (const key of locationKeys) {
      if (key in answer.regular) {
        const formatted = expandStateAbbreviations(answer.regular[key])
        if (formatted) {
          answer.regular[key] = formatted
        }
      }
    }
  }

  if (answer?.education && Array.isArray(answer.education)) {
    answer.education = answer.education.map((record) => {
      if (!record || typeof record !== "object") return record
      const withAliases = copyFieldsIfMissing(record, [
        ["School", "Institution"],
        ["Study", "Discipline"],
        ["Start", "Start Date"],
        ["End", "End Date"],
      ])
      return copyFieldsIfMissing(withAliases, [
        ["Raw Degree", "rawDegree"],
        ["Degree", "rawDegree"],
        ["Raw Major", "rawMajor"],
        ["Discipline", "rawMajor"],
        ["Major", "rawMajor"],
      ])
    })
  }

  if (answer?.workExperience && Array.isArray(answer.workExperience)) {
    answer.workExperience = answer.workExperience.map((record) => {
      if (!record || typeof record !== "object") return record
      const withDates = copyFieldsIfMissing(record, [
        ["Start", "Start Date"],
        ["End", "End Date"],
        ["jobDescriptions", "Summary"],
      ])
      const withCompany = ensureCurrentEndDate(
        copyFieldsIfMissing(withDates, [["Company", "rawCompany"]]),
      )
      return "Location" in withCompany
        ? {
            ...withCompany,
            Location: expandStateAbbreviations(withCompany.Location),
          }
        : withCompany
    })
  }

  return answer
}
