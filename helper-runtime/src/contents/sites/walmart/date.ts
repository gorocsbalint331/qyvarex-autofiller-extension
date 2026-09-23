// @ts-nocheck
/**
 * Walmart date helpers — month/year picker targets and calendar aria-labels.
 */

const WALMART_MONTH_NAMES = [
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

const WALMART_WEEKDAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

function padTwo(value) {
  return String(value).padStart(2, "0")
}

function monthNameToNumber(raw) {
  const needle = raw.toLowerCase().replace(/\.$/, "")
  return (
    WALMART_MONTH_NAMES.findIndex((name) => {
      const lower = name.toLowerCase()
      return lower === needle || lower.slice(0, 3) === needle
    }) + 1
  )
}

function isValidMonthYear(month, year) {
  return Number.isInteger(month) && month >= 1 && month <= 12 && year >= 1900
}

function isValidDay(day) {
  return Number.isInteger(day) && day >= 1 && day <= 31
}

function buildPickerTarget(month, year, day = 1) {
  return isValidMonthYear(month, year) && isValidDay(day)
    ? {
        day,
        fullDateDisplayValue: `${padTwo(month)}/${padTwo(day)}/${year}`,
        month,
        year,
        displayValue: `${padTwo(month)}/${year}`,
      }
    : null
}

function getWalmartMonthYearPickerTarget(raw) {
  const text = String(Array.isArray(raw) ? raw[0] : (raw ?? ""))
    .replace(/\s+/g, " ")
    .trim()
  if (!text) return null

  const iso = text.match(/^(\d{4})[/-](\d{1,2})(?:[/-](\d{1,2}))?$/)
  if (iso) {
    const year = Number(iso[1])
    const month = Number(iso[2])
    const day = iso[3] ? Number(iso[3]) : 1
    return buildPickerTarget(month, year, day)
  }

  const mdy = text.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/)
  if (mdy) {
    const month = Number(mdy[1])
    const day = Number(mdy[2])
    const year = Number(mdy[3])
    return buildPickerTarget(month, year, day)
  }

  const my = text.match(/^(\d{1,2})[/-](\d{4})$/)
  if (my) {
    const month = Number(my[1])
    const year = Number(my[2])
    return buildPickerTarget(month, year)
  }

  const namedDay = text.match(
    /^([a-z]+\.?)\s+(?:(\d{1,2})(?:st|nd|rd|th)?\s+)?(\d{4})$/i,
  )
  if (namedDay) {
    const month = monthNameToNumber(namedDay[1])
    const day = namedDay[2] ? Number(namedDay[2]) : 1
    const year = Number(namedDay[3])
    return buildPickerTarget(month, year, day)
  }

  const yearNamed = text.match(
    /^(\d{4})\s+([a-z]+\.?)(?:\s+(\d{1,2})(?:st|nd|rd|th)?)?$/i,
  )
  if (yearNamed) {
    const year = Number(yearNamed[1])
    const month = monthNameToNumber(yearNamed[2])
    const day = yearNamed[3] ? Number(yearNamed[3]) : 1
    return buildPickerTarget(month, year, day)
  }

  return null
}

function getWalmartCalendarDayAriaLabel(month, year, day = 1) {
  const date = new Date(year, month - 1, day)
  const weekday = WALMART_WEEKDAY_NAMES[date.getDay()]
  const monthName = WALMART_MONTH_NAMES[month - 1]
  return `${weekday}, ${monthName} ${day}, ${year}`
}

export {
  WALMART_MONTH_NAMES,
  WALMART_WEEKDAY_NAMES,
  getWalmartCalendarDayAriaLabel,
  getWalmartMonthYearPickerTarget,
}
