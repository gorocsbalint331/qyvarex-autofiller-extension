// @ts-nocheck
/**
 * Isolved — answer formatting and section progress helpers.
 * Readable TypeScript source of truth.
 */

const DEFAULT_EXPERIENCE_VALUES = {
  "Dates Employed Month Start Date": ["01 / Jan"],
  "Dates Employed Year Start Date": "2020",
  "Dates Employed Month End Date": ["01 / Jan"],
  "Dates Employed Year End Date": "2024",
  "Reason For Leaving": "Seeking new opportunities",
  "Explain Your Duties":
    "Successfully managed daily operations and fulfilled all responsibilities associated with the role.",
  "Rate of Pay": "8000-10000",
  "May We Contact": "Yes",
  "Starting Rate of Pay": "Negotiable",
  "Briefly Explain Your Duties": "See Resume",
  "Ending Rate of Pay": "Negotiable",
}

const MONTH_ABBREVIATIONS = [
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

function formatMonthOption(monthValue) {
  const monthNumber = Number(monthValue)
  if (
    !Number.isInteger(monthNumber) ||
    monthNumber < 1 ||
    monthNumber > 12
  ) {
    return null
  }
  return [
    `${String(monthNumber).padStart(2, "0")} / ${MONTH_ABBREVIATIONS[monthNumber - 1]}`,
  ]
}

function parseYearMonth(value) {
  if (value == null) return null
  const text = String(Array.isArray(value) ? value[0] : value).trim()
  if (!text) return null

  const yearMonthMatch = text.match(/^(\d{4})[-/](\d{1,2})$/)
  if (yearMonthMatch) {
    return {
      year: yearMonthMatch[1],
      month: formatMonthOption(yearMonthMatch[2]),
    }
  }

  const yearOnlyMatch = text.match(/^(\d{4})$/)
  if (yearOnlyMatch) {
    return {
      year: yearOnlyMatch[1],
      month: formatMonthOption("1"),
    }
  }

  const monthYearMatch =
    text.match(/^([A-Za-z]+)\s+(\d{4})$/) ||
    text.match(/^(\d{4})\s+([A-Za-z]+)$/)
  if (monthYearMatch) {
    const [, first, second] = monthYearMatch
    const monthToken = /^\d{4}$/.test(first) ? second : first
    const yearToken = /^\d{4}$/.test(first) ? first : second
    const monthIndex = MONTH_ABBREVIATIONS.findIndex(
      (abbr) =>
        abbr.toLowerCase() === monthToken.substring(0, 3).toLowerCase(),
    )
    if (monthIndex !== -1) {
      return {
        year: yearToken,
        month: formatMonthOption(String(monthIndex + 1)),
      }
    }
  }

  return null
}

function toDate(year, monthOption) {
  let monthIndex = 0
  if (monthOption && monthOption[0]) {
    const parsed = parseInt(monthOption[0], 10)
    if (!isNaN(parsed)) monthIndex = parsed - 1
  }
  return new Date(Number(year), monthIndex)
}

function sanitizeDateRange(start, end) {
  const now = new Date()
  let startDate = start ? toDate(start.year, start.month) : null
  let endDate = end ? toDate(end.year, end.month) : null
  if (startDate && startDate > now) {
    start = null
    startDate = null
  }
  if (endDate && endDate > now) {
    end = null
    endDate = null
  }
  if (startDate && endDate && startDate > endDate) {
    start = null
    end = null
  }
  return { start, end }
}

function applyEmploymentDates(row) {
  const start = parseYearMonth(row.Start)
  const endRaw = row.End
  const isCurrentRaw = String(
    Array.isArray(row.isCurrent) ? row.isCurrent[0] : (row.isCurrent ?? ""),
  )
    .trim()
    .toLowerCase()
  const isCurrent =
    isCurrentRaw === "true" ||
    isCurrentRaw === "yes" ||
    isCurrentRaw === "1" ||
    String(endRaw ?? "").trim().toLowerCase() === "present"

  if (isCurrent) {
    const { start: sanitizedStart } = sanitizeDateRange(start, null)
    if (sanitizedStart) {
      row["Dates Employed Month Start Date"] = sanitizedStart.month
      row["Dates Employed Year Start Date"] = sanitizedStart.year
    }
    row["This is my current Employer"] = "1"
    delete row["Dates Employed Month End Date"]
    delete row["Dates Employed Year End Date"]
    return
  }

  const end = parseYearMonth(endRaw)
  const { start: sanitizedStart, end: sanitizedEnd } = sanitizeDateRange(
    start,
    end,
  )
  if (sanitizedStart) {
    row["Dates Employed Month Start Date"] = sanitizedStart.month
    row["Dates Employed Year Start Date"] = sanitizedStart.year
  }
  if (sanitizedEnd) {
    row["Dates Employed Month End Date"] = sanitizedEnd.month
    row["Dates Employed Year End Date"] = sanitizedEnd.year
  }
}

function formatEducationRow(row) {
  const formatted = { ...row }
  const study =
    formatted.Study ||
    formatted["Field of Study"] ||
    formatted["Major/Course of Study"]
  if (study) {
    formatted["Major/Course of Study"] = study
    formatted.Study = study
  }
  if (!formatted.State && formatted["State/Province"]) {
    formatted.State = formatted["State/Province"]
  }
  if (!formatted.City) {
    formatted.City = "United States"
  }
  return formatted
}

export function buildExperienceFieldStatus(count) {
  const fields = []
  for (let index = 0; index < count; index++) {
    fields.push({ label: `Employment ${index + 1}`, required: true })
  }
  return fields
}

export function buildEducationFieldStatus(count) {
  const fields = []
  for (let index = 0; index < count; index++) {
    fields.push({ label: `Education ${index + 1}`, required: true })
  }
  return fields
}

export function formatAnswer(answer) {
  return {
    ...answer,
    education: answer.education.map((row) => formatEducationRow(row)),
    workExperience: answer.workExperience.map((row) => {
      const formatted = { ...row }
      applyEmploymentDates(formatted)
      const isCurrent = (() => {
        const currentFlag = formatted["This is my current Employer"]
        const normalized = String(
          Array.isArray(currentFlag) ? currentFlag[0] : currentFlag,
        ).toLowerCase()
        return (
          normalized === "true" ||
          normalized === "yes" ||
          normalized === "1"
        )
      })()
      for (const [key, defaultValue] of Object.entries(
        DEFAULT_EXPERIENCE_VALUES,
      )) {
        if (
          isCurrent &&
          (key === "Dates Employed Month End Date" ||
            key === "Dates Employed Year End Date" ||
            key === "Reason For Leaving")
        ) {
          continue
        }
        if (!formatted[key] && formatted[key] !== 0) {
          formatted[key] = defaultValue
        }
      }
      if (isCurrent) {
        formatted["This is my current Employer"] = "1"
      }
      return formatted
    }),
  }
}
