// @ts-nocheck
/**
 * Resume date range formatting and date-string parsing helpers.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

import * as dayjs from "dayjs"
import * as relativeTime from "dayjs/plugin/relativeTime"
import * as lang from "./lang.js"

const dayjsDefault = { default: dayjs?.default ?? dayjs }
const relativeTimeDefault = { default: relativeTime?.default ?? relativeTime }
dayjsDefault.default.extend(relativeTimeDefault.default)

let formatResumeDatePart = (date = "", isCurrent) =>
  isCurrent
    ? "Present"
    : date?.length === 10 || date?.length === 7
      ? dayjsDefault.default(date).format("MMM YYYY")
      : date

let getResumeDateRange = ({ startDate, completionDate, isCurrent }) => {
  let start = formatResumeDatePart(startDate, false)
  let end = formatResumeDatePart(completionDate, isCurrent)
  return lang.isEmpty(start) && lang.isEmpty(end)
    ? ""
    : lang.isEmpty(start) || lang.isEmpty(end)
      ? start || end
      : `${start} - ${end}`
}

let transFormDateNumberToEg = (date, part) => {
  if (!date || "string" != typeof date) return part ? "" : ["", "", ""]
  let year = ""
  let month = ""
  let day = ""
  if (date.includes("-")) {
    let parts = date.split("-")
    if (parts.length >= 2) {
      if (4 !== parts[0].length || isNaN(Number(parts[0]))) {
        month = parts[0]
        day = parts.length > 1 ? parts[1] : ""
        year = parts.length > 2 ? parts[2] : ""
      } else {
        year = parts[0]
        month = parts[1]
        day = parts.length > 2 ? parts[2] : ""
      }
    }
  } else if (date.includes("/")) {
    let parts = date.split("/")
    if (parts.length >= 2) {
      month = parts[0]
      day = parts.length > 1 ? parts[1] : ""
      year = parts.length > 2 ? parts[2] : ""
    }
  } else if (/^\d{8}$/.test(date)) {
    year = date.substring(0, 4)
    month = date.substring(4, 6)
    day = date.substring(6, 8)
  }
  let monthNames = [
    "",
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
  let monthNumber = parseInt(month, 10)
  let monthName =
    monthNumber > 0 && monthNumber <= 12 ? monthNames[monthNumber] : ""
  if (part) {
    switch (part.toLowerCase()) {
      case "month":
      default:
        return monthName
      case "year":
        return year
      case "day":
        return parseInt(day, 10).toString()
    }
  }
  return [monthName, year, day]
}

export { getResumeDateRange, transFormDateNumberToEg }
