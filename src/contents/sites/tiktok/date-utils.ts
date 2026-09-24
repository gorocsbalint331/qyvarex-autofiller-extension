// @ts-nocheck
/**
 * TikTok — year/month date normalization helpers.
 */

function monthNameToNumber(monthText) {
  const key = monthText
    .toLowerCase()
    .replace(/\.$/, "")
    .slice(0, 3)
  const map = {
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

const YEAR_RE = "(?:19|20)\\d{2}"
const MONTH_NAME_RE =
  "jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|sept(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?"

export function normalizeTikTokYearMonth(value) {
  const text = null == value ? "" : String(value).trim()
  if (!text) return ""
  if ("present" === text.toLowerCase()) return "Present"
  const monthThenYear = text.match(
    RegExp(`\\b(${MONTH_NAME_RE})\\.?\\s+(${YEAR_RE})\\b`, "i"),
  )
  if (monthThenYear) {
    const month = monthNameToNumber(monthThenYear[1])
    if (month) return `${monthThenYear[2]}-${month}`
  }
  const yearThenMonth = text.match(
    RegExp(`\\b(${YEAR_RE})\\s+(${MONTH_NAME_RE})\\.?\\b`, "i"),
  )
  if (yearThenMonth) {
    const month = monthNameToNumber(yearThenMonth[2])
    if (month) return `${yearThenMonth[1]}-${month}`
  }
  const yearDashMonth = text.match(RegExp(`\\b(${YEAR_RE})[-/](\\d{1,2})\\b`))
  if (yearDashMonth)
    return `${yearDashMonth[1]}-${yearDashMonth[2].padStart(2, "0")}`
  const monthDashYear = text.match(RegExp(`\\b(\\d{1,2})[-/](${YEAR_RE})\\b`))
  if (monthDashYear)
    return `${monthDashYear[2]}-${monthDashYear[1].padStart(2, "0")}`
  const yearOnly = text.match(RegExp(`^(${YEAR_RE})$`))
  return yearOnly ? `${yearOnly[1]}-01` : text
}

export function ensureTikTokFullMonth(value) {
  if (!value || "" === (value = String(value).trim())) return value || ""
  if ("present" === value.toLowerCase()) return "Present"
  const normalized = normalizeTikTokYearMonth(value)
  const yearMonth = normalized.match(RegExp(`^(${YEAR_RE})-(\\d{1,2})$`))
  if (yearMonth) return `${yearMonth[1]}-${yearMonth[2].padStart(2, "0")}`
  const yearOnly = normalized.match(RegExp(`^(${YEAR_RE})$`))
  return yearOnly ? yearOnly[1] : normalized
}

export function parseTikTokYearMonthForDisplay(value) {
  if (
    !value ||
    "" === (value = String(value).trim()) ||
    "present" === value.toLowerCase()
  )
    return { year: "", month: "" }
  const normalized = normalizeTikTokYearMonth(value)
  if ("present" === normalized.toLowerCase())
    return { year: "Present", month: "" }
  const yearMonth = normalized.match(RegExp(`^(${YEAR_RE})[-/](\\d{1,2})$`))
  if (yearMonth)
    return {
      year: yearMonth[1],
      month: yearMonth[2].padStart(2, "0"),
    }
  const yearOnly = normalized.match(RegExp(`^(${YEAR_RE})$`))
  return yearOnly
    ? { year: yearOnly[1], month: "" }
    : { year: normalized, month: "" }
}
