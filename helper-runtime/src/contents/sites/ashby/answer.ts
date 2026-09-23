// @ts-nocheck
/**
 * Ashby — answer shaping (education dates, cover letter text).
 */

import * as coverLetter from "../../methods/cover-letter.ts"

const MONTH_NAME_TO_NUMBER = {
  jan: "1",
  january: "1",
  feb: "2",
  february: "2",
  mar: "3",
  march: "3",
  apr: "4",
  april: "4",
  may: "5",
  jun: "6",
  june: "6",
  jul: "7",
  july: "7",
  aug: "8",
  august: "8",
  sep: "9",
  sept: "9",
  september: "9",
  oct: "10",
  october: "10",
  nov: "11",
  november: "11",
  dec: "12",
  december: "12",
}

const PRESENT_TOKENS = new Set([
  "present",
  "current",
  "now",
  "till now",
  "to present",
  "to-present",
  "to current",
  "to-current",
  "to now",
  "to-now",
])

const SCHOOL_KEYS = [
  "School",
  "school",
  "schoolName",
  "School Name",
  "Institution",
  "Institution Name",
  "University",
  "College",
  "organization",
]

const DEGREE_KEYS = ["Degree", "degree", "Accreditation", "accreditation"]

const FIELD_OF_STUDY_KEYS = [
  "Field of Study",
  "Field Of Study",
  "fieldOfStudy",
  "Major",
  "major",
  "Study",
  "study",
  "Discipline",
  "discipline",
]

const START_MONTH_KEYS = ["Start Date - Month"]
const START_YEAR_KEYS = ["Start Date - Year"]
const END_MONTH_KEYS = ["End Date - Month"]
const END_YEAR_KEYS = ["End Date - Year"]

function firstPresentValue(record, keys) {
  for (let key of keys) {
    let value = record?.[key]
    if (value != null) {
      if (Array.isArray(value)) {
        let found = value.find((item) => String(item ?? "").trim() !== "")
        if (found != null) return found
        continue
      }
      if (String(value).trim() !== "") return value
    }
  }
  return ""
}

function monthTokenToNumber(value) {
  let text = String(value ?? "").trim()
  if (!text) return ""
  if (/^\d{1,2}$/.test(text)) {
    let num = Number(text)
    if (num >= 1 && num <= 12) return String(num)
  }
  return MONTH_NAME_TO_NUMBER[text.toLowerCase()] ?? ""
}

function isPresentDateText(value) {
  if (value === true || value === 1) return true
  let text = String(value ?? "")
    .trim()
    .toLowerCase()
  return !!text && (PRESENT_TOKENS.has(text) || text.includes("present"))
}

function isTruthyFlag(value) {
  if (value === true || value === 1) return true
  let text = String(value ?? "")
    .trim()
    .toLowerCase()
  return ["true", "1", "yes", "y"].includes(text)
}

export function parseAshbyMonthYear(raw) {
  let text = String(raw ?? "").trim()
  let empty = { month: "", year: "", present: false }
  if (!text) return empty

  if (isPresentDateText(text)) {
    return { month: "", year: "", present: true }
  }

  let match = text.match(/^(\d{4})[\/\-.](\d{1,2})(?:[\/\-.]\d{1,2})?$/)
  if (match) {
    return {
      year: match[1],
      month: monthTokenToNumber(match[2]),
      present: false,
    }
  }

  match =
    text.match(/^(\d{1,2})[\/\-.](\d{4})$/) ||
    text.match(
      /\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t)?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b[\s,\/\-.]*(\d{4})/i,
    )
  if (match) {
    return {
      month: monthTokenToNumber(match[1]),
      year: match[2],
      present: false,
    }
  }

  match = text.match(
    /(\d{4})[\s,\/\-.]*\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t)?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b/i,
  )
  if (match) {
    return {
      year: match[1],
      month: monthTokenToNumber(match[2]),
      present: false,
    }
  }

  match = text.match(/\b(\d{4})\b/)
  if (match) {
    return { month: "", year: match[1], present: false }
  }

  return empty
}

export function normalizeAshbyDateInputValue(raw) {
  let text = String(raw ?? "").trim()
  if (!containsMonthName(text)) return text

  let parsed = parseAshbyMonthYear(text)
  if (parsed.month && parsed.year && !parsed.present) {
    return `${parsed.year}-${parsed.month.padStart(2, "0")}-01`
  }
  return text
}

function containsMonthName(text) {
  return /\b(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t)?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b/i.test(
    text,
  )
}

function readMonthYearPair(record, monthKeys, yearKeys) {
  return {
    month: String(firstPresentValue(record, monthKeys) ?? "").trim(),
    year: String(firstPresentValue(record, yearKeys) ?? "").trim(),
  }
}

function normalizeEducationEntry(entry) {
  let next = { ...entry }
  let school = String(firstPresentValue(next, SCHOOL_KEYS) ?? "").trim()
  let degree = String(firstPresentValue(next, DEGREE_KEYS) ?? "").trim()
  let fieldOfStudy = String(
    firstPresentValue(next, FIELD_OF_STUDY_KEYS) ?? "",
  ).trim()
  let start = readMonthYearPair(next, START_MONTH_KEYS, START_YEAR_KEYS)
  let end = readMonthYearPair(next, END_MONTH_KEYS, END_YEAR_KEYS)
  let currentRaw =
    firstPresentValue(next, [
      "Current",
      "current",
      "isCurrent",
      "is_current",
    ]) ?? ""
  let isCurrent = isTruthyFlag(currentRaw) || isPresentDateText(currentRaw)

  if (school) next.School = school
  if (degree) next.Degree = degree
  if (fieldOfStudy) {
    next["Field of Study"] = fieldOfStudy
    next.Major = fieldOfStudy
  }
  next["Start Date - Month"] = start.month
  next["Start Date - Year"] = start.year
  if (isCurrent) {
    next["End Date - Month"] = ""
    next["End Date - Year"] = ""
  } else {
    next["End Date - Month"] = end.month
    next["End Date - Year"] = end.year
  }
  return next
}

export function formatAnswer(answer, coverLetterContext) {
  let formatted = coverLetter.applyCoverLetterTextToAnswer(
    answer,
    coverLetterContext,
  )
  if (Array.isArray(formatted.education)) {
    formatted.education = formatted.education
      .filter((entry) => entry && typeof entry === "object")
      .map((entry) => normalizeEducationEntry(entry))
  }
  return formatted
}
