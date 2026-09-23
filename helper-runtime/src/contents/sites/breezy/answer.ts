// @ts-nocheck
/**
 * Breezy ATS — answer formatting (dates, country, cover letter).
 */

import * as dayjs from "dayjs"
import * as coverLetter from "../../methods/cover-letter.js"

const dayjsDefault = { default: dayjs }

export function formatCoverLetterAnswer(answer, coverLetterText) {
  return coverLetter.applyCoverLetterTextToAnswer(answer, coverLetterText, [
    "Cover Letter",
  ])
}

function isCountryLabel(label) {
  return normalizeLabel(label) === "country"
}

function normalizeLabel(label) {
  return String(label ?? "")
    .replace(/\u00a0/g, " ")
    .trim()
    .replace(/\s*\*+\s*$/, "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase()
}

function labelIncludesDate(label) {
  return normalizeLabel(label).includes("date")
}

function formatDateValue(value) {
  if (value == null) return value
  if (Array.isArray(value)) return value.map(formatDateValue)
  if (
    (typeof value !== "string" && !(value instanceof Date)) ||
    (typeof value === "string" && value.trim() === "")
  ) {
    return value
  }
  let parsed = dayjsDefault.default(value)
  return parsed.isValid() ? parsed.format("YYYY-MM-DD") : value
}

function formatDateFieldsInAnswer(answer) {
  if (Array.isArray(answer)) return answer.map(formatDateFieldsInAnswer)
  if (!answer || typeof answer !== "object" || answer instanceof Date) {
    return answer
  }
  let record = answer
  let nameIsDate = labelIncludesDate(record.name)
  return Object.fromEntries(
    Object.entries(record).map(([key, val]) =>
      (nameIsDate && key === "value") || labelIncludesDate(key)
        ? [key, formatDateValue(val)]
        : [key, formatDateFieldsInAnswer(val)],
    ),
  )
}

export function formatCountryAnswer(answer) {
  let country = String(answer.country ?? "").trim()
  if (!country) return answer

  let applied = false
  let regular = Object.fromEntries(
    Object.entries(answer.regular ?? {}).map(([key, val]) => {
      if (isCountryLabel(key)) {
        applied = true
        return [key, country]
      }
      return [key, val]
    }),
  )
  let fillDataList = answer.fillDataList?.map((item) => {
    if (isCountryLabel(item?.name)) {
      applied = true
      return { ...item, value: country }
    }
    return item
  })

  if (!applied) return answer
  return {
    ...answer,
    regular,
    ...(fillDataList ? { fillDataList } : {}),
  }
}

export function formatAnswer(answer, coverLetterText) {
  return formatCoverLetterAnswer(
    formatDateFieldsInAnswer(formatCountryAnswer(answer)),
    coverLetterText,
  )
}

export function formatDate(value) {
  return dayjsDefault.default(value).format("YYYY-MM-DD")
}
