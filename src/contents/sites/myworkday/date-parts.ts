// @ts-nocheck
/**
 * MyWorkday — date field part parsing (month/day/year).
 */

import * as dayjs from "dayjs"
import * as customParseFormat from "dayjs/plugin/customParseFormat"

const dayjsDefault = { default: dayjs?.default ?? dayjs }
const customParseFormatDefault = { default: customParseFormat?.default ?? customParseFormat }

dayjsDefault.default.extend(customParseFormatDefault.default)

function queryDatePartInput(container, automationId) {
  return container.querySelector(`[data-automation-id="${automationId}"]`)
}

function padDatePart(value, length = 2) {
  return String(value).padStart(length, "0")
}

function parseDateParts(rawValue) {
  const text = String(rawValue || "").trim()
  const empty = { month: "", day: "", year: "" }
  if (!text) return empty

  const yearOnly = text.match(/^(\d{4})$/)
  if (yearOnly) return { ...empty, year: yearOnly[1] }

  const ymd = text.match(/^(\d{4})[-/.](\d{1,2})(?:[-/.](\d{1,2}))?$/)
  if (ymd) {
    return {
      year: ymd[1],
      month: padDatePart(ymd[2]),
      day: ymd[3] ? padDatePart(ymd[3]) : "",
    }
  }

  const mdy = text.match(/^(\d{1,2})[-/.](?:(\d{1,2})[-/.])?(\d{4})$/)
  if (mdy) {
    return {
      month: padDatePart(mdy[1]),
      day: mdy[2] ? padDatePart(mdy[2]) : "",
      year: mdy[3],
    }
  }

  const parsedStrict = dayjsDefault.default(
    text,
    [
      "MMM YYYY",
      "MMMM YYYY",
      "MMM D YYYY",
      "MMM D, YYYY",
      "MMMM D YYYY",
      "MMMM D, YYYY",
      "YYYY-MM-DD",
      "YYYY-MM",
      "MM/DD/YYYY",
      "M/D/YYYY",
      "MM/YYYY",
      "M/YYYY",
    ],
    true,
  )
  const parsed = parsedStrict.isValid()
    ? parsedStrict
    : dayjsDefault.default(text)
  return parsed.isValid()
    ? {
        month: parsed.format("MM"),
        day: parsed.format("DD"),
        year: parsed.format("YYYY"),
      }
    : empty
}

function getWorkdayDatePartsForField(container, rawValue) {
  const parts = parseDateParts(rawValue)
  const hasMonth = !!queryDatePartInput(container, "dateSectionMonth-input")
  const hasDay = !!queryDatePartInput(container, "dateSectionDay-input")
  const hasYear = !!queryDatePartInput(container, "dateSectionYear-input")
  const year =
    parts.year || dayjsDefault.default(rawValue).format("YYYY")

  if (hasMonth && hasDay && hasYear) {
    return {
      month: parts.month || "01",
      day: parts.day || "01",
      year,
    }
  }
  if (hasMonth && hasYear) {
    return {
      month: parts.month || "01",
      year,
    }
  }
  return { year }
}

function hasWorkdayDateRequiredError(input) {
  const field =
    input.closest?.('[data-automation-id^="formField-"]') ||
    input.parentElement
  const alertText =
    field
      ?.querySelector?.('[data-automation-id="inputAlert"]')
      ?.textContent?.replace(/\s+/g, " ")
      .trim() || ""
  return /required and must have a value/i.test(alertText)
}

export { getWorkdayDatePartsForField, hasWorkdayDateRequiredError }
