// @ts-nocheck
/**
 * SuccessFactors — answer shaping for dates, education, and work experience.
 */

import * as dayjs from "dayjs"

const dayjsDefault = { default: dayjs }

function firstNonEmpty(record, keys) {
  for (const key of keys) {
    const value = record?.[key]
    if (Array.isArray(value)) {
      const found = value.find((item) => "" !== String(item ?? "").trim())
      if (undefined !== found) return found
      continue
    }
    if ("" !== String(value ?? "").trim()) return value
  }
}

function normalizeCompletedFlag(value) {
  if (null == value) return
  if ("boolean" == typeof value) return value ? "Yes" : "No"
  const text = String(value).trim()
  if (!text) return
  const normalized = text.toLowerCase().replace(/[_-]+/g, " ")
  const noValues = ["no", "n", "false", "0"]
  const incompleteValues = [
    "not completed",
    "incomplete",
    "in progress",
    "ongoing",
    "current",
    "present",
    "still attending",
  ]
  const yesValues = ["yes", "y", "true", "1"]
  const completedValues = [
    "completed",
    "complete",
    "graduated",
    "graduate",
    "finished",
    "finish",
    "obtained",
  ]
  return noValues.includes(normalized) ||
    incompleteValues.some((item) => normalized.includes(item))
    ? "No"
    : yesValues.includes(normalized) ||
        completedValues.some((item) => normalized.includes(item))
      ? "Yes"
      : text
}

const COUNTRY_ALIASES = { usa: "United States" }
const MONTH_NAME_TO_NUMBER = {
  jan: 1,
  january: 1,
  feb: 2,
  february: 2,
  mar: 3,
  march: 3,
  apr: 4,
  april: 4,
  may: 5,
  jun: 6,
  june: 6,
  jul: 7,
  july: 7,
  aug: 8,
  august: 8,
  sep: 9,
  sept: 9,
  september: 9,
  oct: 10,
  october: 10,
  nov: 11,
  november: 11,
  dec: 12,
  december: 12,
}

function normalizeCountry(value) {
  if (null == value) return
  const text = String(value).trim()
  if (text) return COUNTRY_ALIASES[text.toLowerCase()] || text
}

function pad2(value) {
  return String(value).padStart(2, "0")
}

function isValidDateParts(month, day, year) {
  if (
    !Number.isInteger(month) ||
    month < 1 ||
    month > 12 ||
    !Number.isInteger(year) ||
    year < 1900 ||
    year > 2100 ||
    !Number.isInteger(day) ||
    day < 1 ||
    day > 31
  ) {
    return false
  }
  const date = new Date(year, month - 1, day)
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  )
}

function formatDateParts(month, year, day = 1) {
  if (isValidDateParts(month, day, year)) {
    return `${pad2(month)}/${pad2(day)}/${year}`
  }
}

function parseMonthName(text) {
  return MONTH_NAME_TO_NUMBER[text.toLowerCase().replace(/\.$/, "")]
}

function formatSuccessFactorsDateForDatePicker(value) {
  const raw = Array.isArray(value)
    ? value.find((item) => "" !== String(item ?? "").trim())
    : value
  const text = String(raw ?? "")
    .replace(/\s+/g, " ")
    .trim()
  if (!text) return

  const withoutCommas = text.replace(/,/g, "")
  const ymd = withoutCommas.match(/^(\d{4})[/-](\d{1,2})(?:[/-](\d{1,2}))?$/)
  if (ymd) {
    return formatDateParts(
      Number(ymd[2]),
      Number(ymd[1]),
      ymd[3] ? Number(ymd[3]) : 1,
    )
  }

  const mdy = withoutCommas.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/)
  if (mdy) {
    return formatDateParts(Number(mdy[1]), Number(mdy[3]), Number(mdy[2]))
  }

  const my = withoutCommas.match(/^(\d{1,2})[/-](\d{4})$/)
  if (my) return formatDateParts(Number(my[1]), Number(my[2]))

  const monthDayYear = withoutCommas.match(
    /^([a-z]+\.?)\s+(?:(\d{1,2})(?:st|nd|rd|th)?\s+)?(\d{4})$/i,
  )
  if (monthDayYear) {
    const month = parseMonthName(monthDayYear[1])
    if (month) {
      return formatDateParts(
        month,
        Number(monthDayYear[3]),
        monthDayYear[2] ? Number(monthDayYear[2]) : 1,
      )
    }
  }

  const yearMonthDay = withoutCommas.match(
    /^(\d{4})\s+([a-z]+\.?)(?:\s+(\d{1,2})(?:st|nd|rd|th)?)?$/i,
  )
  if (yearMonthDay) {
    const month = parseMonthName(yearMonthDay[2])
    if (month) {
      return formatDateParts(
        month,
        Number(yearMonthDay[1]),
        yearMonthDay[3] ? Number(yearMonthDay[3]) : 1,
      )
    }
  }

  const parsed = dayjsDefault.default(text)
  if (parsed.isValid()) {
    return formatDateParts(parsed.month() + 1, parsed.year(), parsed.date())
  }
}

function assignFormattedDates(record, sourceKeys, targetKeys) {
  const raw = firstNonEmpty(record, sourceKeys)
  const formatted = formatSuccessFactorsDateForDatePicker(raw)
  if (formatted) {
    for (const key of targetKeys) record[key] = formatted
  }
}

function formatAnswer(answer) {
  if (answer.education && answer.education.length > 0) {
    for (const item of answer.education) {
      assignFormattedDates(
        item,
        ["Start Date", "Start", "From Date"],
        ["Start Date", "From Date", "Start"],
      )
      assignFormattedDates(
        item,
        ["End Date", "End", "To Date"],
        ["End Date", "End"],
      )
      const obtained = formatSuccessFactorsDateForDatePicker(
        item?.["Month, Year Obtained"],
      )
      if (obtained) item["Month, Year Obtained"] = obtained
      if (item?.Type) item["Education Type"] = item.Type
      const country = normalizeCountry(item?.Country)
      if (country) item.Country = country
      if (item?.State) item["State/Province/Territory"] = item.State
      if (item?.School) item.Institution = item.School
      const degree = firstNonEmpty(item, [
        "Degree",
        "degree",
        "rawDegree",
        "Degree Type",
        "degreeType",
        "Accreditation",
        "accreditation",
      ])
      if (degree && !item?.Degree) item.Degree = degree
      const major = firstNonEmpty(item, [
        "Major",
        "major",
        "rawMajor",
        "Field of Study",
        "fieldOfStudy",
        "Study",
        "Discipline",
        "discipline",
      ])
      if (major && !item?.Major) item.Major = major
      const completedRaw = firstNonEmpty(item, [
        "Completed?",
        "Completed",
        "completed",
        "Status",
        "status",
        "Graduated",
        "graduated",
      ])
      const completed = normalizeCompletedFlag(completedRaw)
      if (completed) {
        item["Completed?"] = completed
      } else if ((item?.End || item?.["End Date"]) && !item?.["Completed?"]) {
        item["Completed?"] = "Yes"
      }
      if (item?.["School (Other)"]) {
        item["If other, enter School Name"] = item["School (Other)"]
      }
      if (item?.["Major (Other)"]) {
        item["If other, enter major"] = item["Major (Other)"]
      }
    }
  }

  if (answer.workExperience && answer.workExperience.length > 0) {
    for (const item of answer.workExperience) {
      assignFormattedDates(
        item,
        ["Start Date", "Start", "From Date"],
        ["Start Date", "From Date", "Start"],
      )
      assignFormattedDates(
        item,
        ["End Date", "End", "To Date"],
        ["End Date", "End"],
      )
      const obtained = formatSuccessFactorsDateForDatePicker(
        item?.["Month, Year Obtained"],
      )
      if (obtained) item["Month, Year Obtained"] = obtained
      if (item?.Company) item["Company Name"] = item.Company
      const country = normalizeCountry(item?.Country)
      if (country) item.Country = country
      if (item && "isCurrent" in item) {
        item["Is this your current position?"] = item.isCurrent ? "Yes" : "No"
      }
      if (item?.Industry) {
        item["Type of Company"] = item.Industry
      } else if (item?.["Company Type"]) {
        item["Type of Company"] = item["Company Type"]
      }
      if (item?.Summary) {
        item.Duties = item.Summary
      } else if (item?.Description) {
        item.Duties = item.Description
      }
      if (item?.State) item["State/Province/Territory"] = item.State
      if (item?.Location) item.City = item.Location
      if (item?.Address) item["Company Address"] = item.Address
      if (item?.Phone) item["Company Phone"] = item.Phone
      if (item?.Reason) {
        item["Reason for Leaving"] = item.Reason
      } else if (item?.["Leaving Reason"]) {
        item["Reason for Leaving"] = item["Leaving Reason"]
      }
      if (item?.mayContact !== undefined) {
        item["May we contact this previous employer?"] = item.mayContact
          ? "Yes"
          : "No"
      } else if (item?.contactEmployer !== undefined) {
        item["May we contact this previous employer?"] = item.contactEmployer
          ? "Yes"
          : "No"
      }
    }
  }

  return answer
}

export { formatAnswer, formatSuccessFactorsDateForDatePicker }
