// @ts-nocheck
/**
 * Freshteam — date formatting helpers for form fill.
 */

const MONTH_NAMES = [
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

export function formatDate(raw) {
  if (!raw?.trim()) return ""
  if (raw.match(/^[A-Za-z]+\s+\d{1,2},\s+\d{4}$/)) return raw

  let date = null
  if (raw.match(/^\d{4}-\d{2}-\d{2}$/)) {
    date = new Date(raw)
  } else if (raw.match(/^\d{4}-\d{2}$/)) {
    date = new Date(raw + "-01")
  } else if (raw.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    let [month, day, year] = raw.split("/")
    let monthIndex = parseInt(month, 10) - 1
    if (monthIndex >= 0 && monthIndex < 12) {
      return `${MONTH_NAMES[monthIndex]} ${parseInt(day, 10)}, ${year}`
    }
  } else {
    date = new Date(raw)
  }

  if (date && !isNaN(date.getTime())) {
    let monthName = MONTH_NAMES[date.getMonth()]
    let dayOfMonth = date.getDate()
    let year = date.getFullYear()
    return `${monthName} ${dayOfMonth}, ${year}`
  }

  return raw
}
