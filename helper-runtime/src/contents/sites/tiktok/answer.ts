// @ts-nocheck
/**
 * TikTok — answer shaping (dates, social media, skippable inputs).
 */

import * as filler from "../../shared/filler.js"
import * as dateUtils from "./date-utils.ts"

function stripNonAlnumKeepSpaces(text) {
  return text.replace(/[^a-zA-Z0-9\s]/g, "")
}

function labelsMatch(a, b) {
  if (!a || !b || "string" != typeof a || "string" != typeof b) return false
  const left = stripNonAlnumKeepSpaces(a)
    .replace(/\s*\*\s*/g, "")
    .toLowerCase()
    .trim()
  const right = stripNonAlnumKeepSpaces(b)
    .replace(/\s*\*\s*/g, "")
    .toLowerCase()
    .trim()
  return !!left && left === right
}

const LINKEDIN_PLATFORM = "LinkedIn"

function isSocialMediaLabel(label) {
  return (
    "socialmedia" ===
    stripNonAlnumKeepSpaces(label).replace(/\s+/g, "").toLowerCase()
  )
}

function forceSocialMediaToLinkedIn(answer) {
  const regular = answer.regular || (answer.regular = {})
  const socialKeys = Object.keys(regular).filter(isSocialMediaLabel)
  if (0 === socialKeys.length) {
    regular["Social Media"] = LINKEDIN_PLATFORM
    return
  }
  for (const key of socialKeys) regular[key] = LINKEDIN_PLATFORM
}

function parseDateRangeString(raw) {
  const text = String(raw || "").trim()
  if (!text)
    return {
      start: "",
    }
  const parts = text
    .split(/\s+(?:\/|-|to)\s+/i)
    .map((part) => part.trim())
    .filter(Boolean)
  return parts.length >= 2
    ? {
        start: dateUtils.normalizeTikTokYearMonth(parts[0]),
        end: dateUtils.normalizeTikTokYearMonth(parts.slice(1).join(" ")),
      }
    : {
        start: dateUtils.normalizeTikTokYearMonth(text),
      }
}

function normalizeDateRangeObject(range) {
  const result = {
    start: dateUtils.normalizeTikTokYearMonth(range.start),
  }
  return void 0 !== range.end && null !== range.end
    ? ((result.end = dateUtils.normalizeTikTokYearMonth(range.end)), result)
    : ((result.end = null === range.end ? null : void 0), result)
}

export function getDateValueFromRecord(label, record) {
  let matched
  for (const key in record)
    if (labelsMatch(label, key)) {
      matched = record[key]
      break
    }
  if (null == matched || "" === matched)
    throw new filler.ValueError(`No matching field for label: ${label}`)
  if (
    "object" == typeof matched &&
    null !== matched &&
    !Array.isArray(matched) &&
    "[object Object]" === Object.prototype.toString.call(matched) &&
    ("start" in matched || "end" in matched)
  )
    return normalizeDateRangeObject(matched)
  const text = String(matched).trim()
  if ("" === text || "[object Object]" === text)
    throw new filler.ValueError(
      `Field for label '${label}' resulted in an empty or invalid value`,
    )
  return text.includes(" / ") ||
    text.includes(" - ") ||
    /\s+to\s+/i.test(text)
    ? parseDateRangeString(text)
    : text
}

export function createDateFillHandler({
  fillInputTextField,
  updateFilledProgress,
  updateMissedProgress,
}) {
  return async (rule, record, trackProgress = true) => {
    if (rule?.$input)
      try {
        const value = getDateValueFromRecord(rule.label, record)
        const filled = await fillInputTextField(rule.$input, value)
        false === filled
          ? trackProgress && updateMissedProgress(rule.label)
          : trackProgress && updateFilledProgress(rule.label)
      } catch (error) {
        error instanceof filler.ValueError
          ? trackProgress && updateMissedProgress(rule.label)
          : console.error("[tiktok][DATE]", error)
      }
  }
}

const SKIPPABLE_INPUT_TYPES = ["hidden", "submit", "button", "reset", "file"]

export function isSkippableInput(input) {
  const type = (input.type || "").toLowerCase()
  if (
    "hidden" === type &&
    input.classList.contains("atsx-date-picker-period-hidden-input") &&
    input.closest(".atsx-date-picker-period-month") &&
    !input.disabled &&
    !input.readOnly
  )
    return false
  if (SKIPPABLE_INPUT_TYPES.includes(type)) return true
  if (input.classList.contains("atsx-select-search__field")) {
    const id = (input.id || "").trim()
    const inPhoneSelect =
      null !== input.closest(".atsx-phone-select") ||
      null !== input.closest('[data-cy="phonePrefix"]') ||
      null !== input.closest(".atsx-phone")
    if (!id || inPhoneSelect) return true
  }
  return (
    !(input.readOnly && input.closest(".ud__select")) &&
    (input.disabled || input.readOnly)
  )
}

export const SOCIAL_NETWORKING_PLATFORM_OPTIONS = [
  "LinkedIn Jobs",
  "LinkedIn InMail (Direct messaging)",
  "LinkedIn Feed",
  "TikTok",
  "Instagram",
  "Facebook",
  "Others",
]

function firstPresent(record, keys) {
  for (const key of keys) {
    const value = record[key]
    if (null != value && "" !== String(value).trim()) return value
  }
  return null
}

function isCurrentRecord(record) {
  const keys = [
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
    const value = record[key]
    if (true === value) return true
    if ("string" != typeof value) return false
    const normalized = value.trim().toLowerCase()
    return ["true", "yes", "y", "present", "current"].includes(normalized)
  })
}

function attachStartEndDate(record) {
  const startRaw = firstPresent(record, [
    "Start",
    "Start Date",
    "Start date",
    "start",
    "startDate",
    "start_date",
    "From",
    "from",
  ])
  const endRaw = firstPresent(record, [
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
  if (!startRaw && !endRaw) return
  const start =
    null != startRaw && "" !== startRaw ? String(startRaw).trim() : null
  const end = isCurrentRecord(record)
    ? "Present"
    : null != endRaw && "" !== endRaw
      ? String(endRaw).trim()
      : null
  if (!start && !end) return
  const range = {
    start: start ? dateUtils.normalizeTikTokYearMonth(start) : void 0,
    end: end ? dateUtils.normalizeTikTokYearMonth(end) : void 0,
  }
  record["Start & end date"] = range
  record["Start and end date"] = range
}

export function formatAnswer(answer) {
  forceSocialMediaToLinkedIn(answer)
  if (answer.education?.length)
    for (const item of answer.education) attachStartEndDate(item)
  if (answer.workExperience?.length)
    for (const item of answer.workExperience) attachStartEndDate(item)
  return answer
}
