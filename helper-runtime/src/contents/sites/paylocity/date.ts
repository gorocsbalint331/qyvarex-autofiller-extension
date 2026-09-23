// @ts-nocheck
/**
 * Paylocity — date format inference and value formatting helpers.
 */

import * as dayjs from "dayjs"
import * as customParseFormat from "dayjs/plugin/customParseFormat"

const dayjsDefault = { default: dayjs }
const customParseFormatDefault = { default: customParseFormat }
dayjsDefault.default.extend(customParseFormatDefault.default)

const PARSE_FORMATS = [
  "YYYY-MM-DD",
  "YYYY/MM/DD",
  "MM/DD/YYYY",
  "M/D/YYYY",
  "YYYY-MM",
  "YYYY/MM",
  "MM/YYYY",
  "M/YYYY",
]

function collectDateFormatHints(element) {
  return [
    element.getAttribute?.("placeholder"),
    element.placeholder,
    element.getAttribute?.("format"),
    element.closest?.("[format]")?.getAttribute("format"),
  ]
    .filter(Boolean)
    .join(" ")
    .toUpperCase()
    .replace(/\s+/g, "")
}

function inferPaylocityDateFormat(element) {
  const inputType = String(
    element.getAttribute?.("type") || element.type || "",
  ).toLowerCase()
  if ("date" === inputType) return "YYYY-MM-DD"
  if ("month" === inputType) return "YYYY-MM"
  const hints = collectDateFormatHints(element)
  return /YYYY[-/]MM[-/]DD/.test(hints)
    ? "YYYY-MM-DD"
    : /MM[-/]DD[-/]YYYY/.test(hints)
      ? "MM/DD/YYYY"
      : /YYYY[-/]MM/.test(hints)
        ? "YYYY-MM"
        : /MM[-/]YYYY/.test(hints)
          ? "MM/YYYY"
          : void 0
}

function formatPaylocityDateValue(value, targetFormat) {
  const text = String(value ?? "").trim()
  if (!text) return null
  const strictParsed = dayjsDefault.default(text, PARSE_FORMATS, true)
  const parsed = strictParsed.isValid()
    ? strictParsed
    : dayjsDefault.default(text)
  return parsed.isValid() ? parsed.format(targetFormat) : null
}

function summarizePaylocityDateValue(value) {
  const text = String(value ?? "").trim()
  return text
    ? /^\d{4}[-/]\d{1,2}$/.test(text)
      ? { present: true, length: text.length, shape: "year-month" }
      : /^\d{1,2}[/\-]\d{4}$/.test(text)
        ? { present: true, length: text.length, shape: "month-year" }
        : /^\d{4}[-/]\d{1,2}[-/]\d{1,2}$|^\d{1,2}[/\-]\d{1,2}[/\-]\d{4}$/.test(
              text,
            )
          ? { present: true, length: text.length, shape: "full-date" }
          : { present: true, length: text.length, shape: "other" }
    : { present: false, length: 0, shape: "empty" }
}

export {
  formatPaylocityDateValue,
  inferPaylocityDateFormat,
  summarizePaylocityDateValue,
}
