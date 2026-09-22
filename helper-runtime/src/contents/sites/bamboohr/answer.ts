// @ts-nocheck
/**
 * BambooHR — answer formatting and form snapshot helpers.
 */

import * as dayjs from "dayjs"
import * as customParseFormat from "dayjs/plugin/customParseFormat"
import * as constants from "../../../constants.ts"
import * as xpath from "../../../core/xpath.js"

const dayjsDefault = { default: dayjs }
const customParseFormatDefault = { default: customParseFormat }
dayjsDefault.default.extend(customParseFormatDefault.default)

const DATE_AVAILABLE_LABEL = "Date Available"
const DATE_AVAILABLE_FORMAT = "MM/DD/YYYY"
const DATE_PARSE_FORMATS = [
  "YYYY-MM-DD",
  "YYYY/MM/DD",
  "MM/DD/YYYY",
  "M/D/YYYY",
]

function formatDateAvailableValue(value) {
  const raw = Array.isArray(value)
    ? value.find((entry) => String(entry ?? "").trim())
    : value
  const text = String(raw ?? "").trim()
  if (!text) return null

  let parsed = dayjsDefault.default(text, DATE_PARSE_FORMATS, true)
  if (!parsed.isValid() && /^\d/.test(text) && text.length >= 8) {
    parsed = dayjsDefault.default(text)
  }
  if (!parsed.isValid()) return null

  const year = parsed.year()
  if (year < 1900 || year > 2100) return null
  return parsed.format(DATE_AVAILABLE_FORMAT)
}

function cleanLabelText(el) {
  return el?.textContent?.replaceAll("*", "").trim()
}

export function formatAnswer(answer) {
  if (answer.regular) {
    if (DATE_AVAILABLE_LABEL in answer.regular) {
      answer.regular[DATE_AVAILABLE_LABEL] =
        formatDateAvailableValue(answer.regular[DATE_AVAILABLE_LABEL]) ??
        dayjsDefault.default().format(DATE_AVAILABLE_FORMAT)
    }
    if (answer.regular?.State) {
      answer.regular.State =
        constants.STATE_MAP[String(answer.regular.State).trim().toUpperCase()] ??
        answer.regular.State
    }
  }
  return answer
}

function normalizeCountryName(value) {
  const text = String(value ?? "").trim()
  if (!text) return null
  const normalized = text
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .toLowerCase()

  if (
    normalized === "us" ||
    normalized === "usa" ||
    normalized === "united states" ||
    normalized === "united states of america"
  ) {
    return "United States"
  }
  if (normalized === "ca" || normalized === "canada") {
    return "Canada"
  }
  if (
    normalized === "uk" ||
    normalized === "gb" ||
    normalized === "great britain" ||
    normalized === "united kingdom"
  ) {
    return "United Kingdom"
  }
  return text
}

export function getBamboohrCountryFillValue(answer, countryHint) {
  return (
    normalizeCountryName(countryHint) ??
    normalizeCountryName(answer?.profile_data?.country) ??
    normalizeCountryName(answer?.profileData?.country) ??
    normalizeCountryName(answer?.country) ??
    "United States"
  )
}

function extractFieldSnapshot(el) {
  if (!(el instanceof HTMLElement)) return null
  return (
    extractCheckboxSnapshot(el) ||
    extractSelectSnapshot(el) ||
    extractTextSnapshot(el) ||
    extractSpecialSnapshot(el)
  )
}

function extractCheckboxSnapshot(el) {
  let legend = el.querySelector("legend")
  let isStandaloneCheckbox = false

  if (!legend) {
    const match = xpath.getFirstOrderedNode(
      `self::*[
        not(child::label)
        and (
          child::div[contains(concat(' ', @class, ' '), ' fab-InputWrapper ')]
          and .//div[contains(concat(' ', @class, ' '), ' fab-Checkbox ')]
        ) or (
          @data-fabric-component="Checkbox"
        )
      ]`,
      el,
    )
    if (
      !match ||
      !(legend =
        el.querySelector("label.fab-Checkbox__label") ||
        el.querySelector("label.MuiFormControlLabel-root"))
    ) {
      return null
    }
    isStandaloneCheckbox = true
  }

  const label = cleanLabelText(legend)
  if (!label) return null

  const values = []
  const optionNodes = xpath.getOrderedNodesSafe(
    `.//*[
      @data-fabric-component="Radio"
      or @data-fabric-component="Checkbox"
      or contains(concat(' ', @class, ' '), ' fab-Radio ')
      or contains(concat(' ', @class, ' '), ' fab-Checkbox ')
    ]`,
    el,
  )
  for (const optionNode of optionNodes) {
    const input = optionNode.querySelector(
      "input[type='radio'], input[type='checkbox']",
    )
    const optionLabel = optionNode.querySelector("label")?.textContent?.trim()
    if (input && optionLabel && input.checked) {
      values.push(optionLabel)
    }
  }

  return {
    label,
    value: values,
  }
}

function extractSelectSnapshot(el) {
  const match = xpath.getFirstOrderedNode("self::*[.//select]", el)
  if (!match) return null

  const labelEl = match.querySelector("label")
  if (!labelEl) return null

  const label = cleanLabelText(labelEl)
  if (!label) return null

  const content = match?.querySelector(".fab-SelectToggle__content")
  if (!content) return null

  return {
    label,
    value: content.textContent?.trim(),
  }
}

function extractTextSnapshot(el) {
  const match = xpath.getFirstOrderedNode(
    `self::*[
      .//input[(contains(concat(' ', @class, ' '), ' fabric-') and substring(concat(' ', @class, ' '), string-length(concat(' ', @class, ' ')) - 5) = '-input ') or contains(concat(' ', @class, ' '), ' MuiInputBase-input ')]
      or .//textarea
      or .//label[@for="dateAvailable"]
    ]`,
    el,
  )
  if (!match) return null

  const labelEl = match.querySelector("label")
  if (!labelEl) return null

  let label = cleanLabelText(labelEl)
  if (!label) return null

  if (labelEl.getAttribute("for") === "dateAvailable") {
    const cloned = labelEl.cloneNode(true)
    Array.from(cloned.children).forEach((child) => child.remove())
    label = cleanLabelText(cloned)
    if (!label) return null
  }

  const input = match.querySelector("input, textarea")
  if (!input) return null

  return {
    label,
    value: input.value,
  }
}

function extractSpecialSnapshot(el) {
  const match = xpath.getFirstOrderedNode(
    "self::*[.//label[@for and string(@for) != '']]",
    el,
  )
  if (!match) return null

  const labelEl = match.querySelector("label")
  if (!labelEl) return null

  const label = cleanLabelText(labelEl)
  if (!label) return null

  return {
    label,
    value: null,
  }
}

export function getFormSnapshot() {
  const snapshot = {}
  const rows = xpath.getOrderedNodesSafe(
    `.//*[@id="careerApplicationForm"]//div[contains(@class, "fab-FormRow")]
    | .//form[@id="job-application-form"]//*[contains(@class, "MuiFormControl-root") or @data-fabric-component="Checkbox"]
    `,
    document,
  )
  for (const row of rows) {
    const field = extractFieldSnapshot(row)
    snapshot[field.label] = field.value
  }
  return snapshot
}
