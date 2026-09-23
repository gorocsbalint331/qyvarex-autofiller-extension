// @ts-nocheck
/**
 * ByteDance ATS — answer shaping (dates, mobile, social media).
 */

import * as filler from "../../shared/filler.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"

const LINKEDIN_SOCIAL_MEDIA_VALUE = "LinkedIn"

const SKIPPABLE_INPUT_TYPES = ["hidden", "submit", "button", "reset", "file"]

function stripNonAlphanumeric(value) {
  return value.replace(/[^a-zA-Z0-9\s]/g, "")
}

function labelsMatch(a, b) {
  if (!a || !b || typeof a !== "string" || typeof b !== "string") return false
  let left = stripNonAlphanumeric(a)
    .replace(/\s*\*\s*/g, "")
    .toLowerCase()
    .trim()
  let right = stripNonAlphanumeric(b)
    .replace(/\s*\*\s*/g, "")
    .toLowerCase()
    .trim()
  return !!left && left === right
}

function isSocialMediaKey(key) {
  return (
    stripNonAlphanumeric(key).replace(/\s+/g, "").toLowerCase() ===
    "socialmedia"
  )
}

function forceSocialMediaToLinkedIn(answer) {
  let regular = answer.regular || (answer.regular = {})
  let socialKeys = Object.keys(regular).filter(isSocialMediaKey)
  if (socialKeys.length === 0) {
    regular["Social Media"] = LINKEDIN_SOCIAL_MEDIA_VALUE
    return
  }
  for (let key of socialKeys) {
    regular[key] = LINKEDIN_SOCIAL_MEDIA_VALUE
  }
}

export function normalizeBytedanceYearMonth(value) {
  let text = value == null ? "" : String(value).trim()
  if (!text) return ""
  if (text.toLowerCase() === "present") return "Present"

  let monthFirst = text.match(
    /\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|sept(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\.?\s+(20\d{2})\b/i,
  )
  if (monthFirst) {
    let month = monthNameToNumber(monthFirst[1])
    if (month) return `${monthFirst[2]}-${month}`
  }

  let yearFirst = text.match(
    /\b(20\d{2})\s+(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|sept(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\.?\b/i,
  )
  if (yearFirst) {
    let month = monthNameToNumber(yearFirst[2])
    if (month) return `${yearFirst[1]}-${month}`
  }

  let yearDashMonth = text.match(/\b(20\d{2})[-/](\d{1,2})\b/)
  if (yearDashMonth) {
    return `${yearDashMonth[1]}-${yearDashMonth[2].padStart(2, "0")}`
  }

  let monthDashYear = text.match(/\b(\d{1,2})[-/](20\d{2})\b/)
  if (monthDashYear) {
    return `${monthDashYear[2]}-${monthDashYear[1].padStart(2, "0")}`
  }

  let yearOnly = text.match(/^(20\d{2})$/)
  return yearOnly ? `${yearOnly[1]}-01` : text
}

function monthNameToNumber(name) {
  let key = name.toLowerCase().replace(/\.$/, "").slice(0, 3)
  let map = {
    jan: "01",
    feb: "02",
    mar: "03",
    apr: "04",
    may: "05",
    jun: "06",
    jul: "07",
    aug: "08",
    sep: "09",
    oct: "10",
    nov: "11",
    dec: "12",
  }
  return map[key] ?? null
}

export function parseBytedanceDateRangeString(value) {
  let text = String(value || "").trim()
  if (!text) {
    return { start: "" }
  }
  let parts = text
    .split(/\s+(?:\/|-|to)\s+/i)
    .map((part) => part.trim())
    .filter(Boolean)
  return parts.length >= 2
    ? {
        start: normalizeBytedanceYearMonth(parts[0]),
        end: normalizeBytedanceYearMonth(parts.slice(1).join(" ")),
      }
    : {
        start: normalizeBytedanceYearMonth(text),
      }
}

function normalizeDateRangeObject(range) {
  return {
    start: normalizeBytedanceYearMonth(range.start),
    end:
      range.end === undefined || range.end === null
        ? range.end
        : normalizeBytedanceYearMonth(range.end),
  }
}

export function getDateValueFromRecord(label, record) {
  let matched
  for (let key in record) {
    if (labelsMatch(label, key)) {
      matched = record[key]
      break
    }
  }
  if (matched == null || matched === "") {
    throw new filler.ValueError(`No matching field for label: ${label}`)
  }
  if (
    typeof matched === "object" &&
    matched !== null &&
    !Array.isArray(matched) &&
    Object.prototype.toString.call(matched) === "[object Object]" &&
    ("start" in matched || "end" in matched)
  ) {
    return normalizeDateRangeObject(matched)
  }

  let text = String(matched).trim()
  if (text === "" || text === "[object Object]") {
    throw new filler.ValueError(
      `Field for label '${label}' resulted in an empty or invalid value`,
    )
  }
  return text.includes(" / ") ||
    text.includes(" - ") ||
    /\s+to\s+/i.test(text)
    ? parseBytedanceDateRangeString(text)
    : text
}

export function createDateFillHandler({
  fillInputTextField,
  updateFilledProgress,
  updateMissedProgress,
}) {
  return async (rule, record, trackProgress = true) => {
    if (!rule?.$input) return
    try {
      let value = getDateValueFromRecord(rule.label, record)
      let filled = await fillInputTextField(rule.$input, value)
      if (filled === false) {
        if (trackProgress) updateMissedProgress(rule.label)
      } else if (trackProgress) {
        updateFilledProgress(rule.label)
      }
    } catch (error) {
      if (error instanceof filler.ValueError) {
        if (trackProgress) updateMissedProgress(rule.label)
      } else {
        console.error("[tiktok][DATE]", error)
      }
    }
  }
}

export function isSkippableInput(input) {
  let type = (input.type || "").toLowerCase()
  if (SKIPPABLE_INPUT_TYPES.includes(type)) return true
  if (input.classList.contains("atsx-select-search__field")) {
    let id = (input.id || "").trim()
    let isPhonePrefix =
      input.closest(".atsx-phone-select") !== null ||
      input.closest('[data-cy="phonePrefix"]') !== null ||
      input.closest(".atsx-phone") !== null
    if (!id || isPhonePrefix) return true
  }
  return !(input.readOnly && input.closest(".ud__select")) &&
    (input.disabled || input.readOnly)
}

export function parseMobileNumber(phone, countryHint) {
  let parts = phoneCountryCode.decomposePhone(phone, countryHint)
  return {
    areaCode: parts.dialCode ? `+${parts.dialCode}` : "",
    phoneWithoutAreaCode: phoneCountryCode.stripPhoneCountryCodePrefix(
      phone,
      countryHint || parts.dialCode,
    ),
  }
}

function pickFirstPresent(record, keys) {
  for (let key of keys) {
    let value = record[key]
    if (value != null && String(value).trim() !== "") return value
  }
  return null
}

function isCurrentRecord(record) {
  let keys = [
    "isCurrent",
    "is_current",
    "current",
    "currently",
    "currentlyWorkHere",
    "currently_work_here",
    "currentlyStudyHere",
    "currently_study_here",
    "I currently work here",
    "I currently study here",
  ]
  return keys.some((key) => {
    let value = record[key]
    if (value === true) return true
    if (typeof value !== "string") return false
    let normalized = value.trim().toLowerCase()
    return ["true", "yes", "y", "present", "current"].includes(normalized)
  })
}

function mergeStartEndDateFields(record) {
  let start = pickFirstPresent(record, [
    "Start",
    "Start Date",
    "Start date",
    "start",
    "startDate",
    "start_date",
    "From",
    "from",
  ])
  let end = pickFirstPresent(record, [
    "End",
    "End Date",
    "End date",
    "end",
    "endDate",
    "end_date",
    "Completion Date",
    "completion_date",
    "To",
    "to",
  ])
  if (!start && !end) return

  let startText = start != null && start !== "" ? String(start).trim() : null
  let endText = isCurrentRecord(record)
    ? "Present"
    : end != null && end !== ""
      ? String(end).trim()
      : null
  if (!startText && !endText) return

  let range = {
    start: startText ? normalizeBytedanceYearMonth(startText) : undefined,
    end: endText ? normalizeBytedanceYearMonth(endText) : undefined,
  }
  record["Start & end date"] = range
  record["Start and end date"] = range
}

function pickFirstNonEmpty(record, keys) {
  for (let key of keys) {
    let value = record[key]
    if (value == null) continue
    let text = String(value).trim()
    if (text) return text
  }
  return null
}

function ensureFacultyFromAliases(record) {
  let faculty = pickFirstNonEmpty(record, [
    "Faculty",
    "Field of Study",
    "Field of study",
    "Study",
    "Major",
    "Area of Study",
    "Discipline",
  ])
  if (faculty && !String(record.Faculty || "").trim()) {
    record.Faculty = faculty
  }
}

function findPhoneCountryCodeInRegular(regular) {
  for (let [key, value] of Object.entries(regular)) {
    let normalized = key
      .trim()
      .toLowerCase()
      .replace(/[\s_/-]+/g, "")
    let isPhoneCountryCode =
      normalized === "phonecountrycode" ||
      normalized === "countryphonecode" ||
      normalized === "countryregionphonecode"
    let text = String(value ?? "").trim()
    if (isPhoneCountryCode && text) return text
  }
  return ""
}

export function formatAnswer(answer) {
  forceSocialMediaToLinkedIn(answer)

  if (answer?.regular) {
    let phoneCountryCodeHint = findPhoneCountryCodeInRegular(answer.regular)
    let hasExplicitCountryCode = phoneCountryCodeHint !== ""
    for (let key of Object.keys(answer.regular)) {
      if (key.trim().toLowerCase() !== "mobile") continue
      let value = answer.regular[key]
      if (typeof value !== "string") continue
      let parsed = parseMobileNumber(value, phoneCountryCodeHint)
      answer.regular[key] = parsed.phoneWithoutAreaCode || value
      if (parsed.areaCode && !hasExplicitCountryCode) {
        answer.regular.__mobileAreaCode = parsed.areaCode
      }
    }
  }

  if (answer.education?.length) {
    for (let entry of answer.education) {
      ensureFacultyFromAliases(entry)
      mergeStartEndDateFields(entry)
    }
  }
  if (answer.workExperience?.length) {
    for (let entry of answer.workExperience) {
      mergeStartEndDateFields(entry)
    }
  }
  return answer
}
