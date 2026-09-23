// @ts-nocheck
/**
 * Shared iCIMS helpers (visibility, selects, dates, section options).
 */

import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"

export function normalizeIcimsWhitespace(text) {
  return (text ?? "").replace(/\s+/g, " ").trim()
}

export function getIcimsAddressRuleDiagnostics(rules) {
  let sectionCount = 0
  let childCount = 0
  let standaloneRuleCount = 0

  for (let rule of rules) {
    if (/Address/i.test(String(rule.$input?.id ?? ""))) {
      standaloneRuleCount += 1
    }
    if (
      /^addresses?\b/i.test(normalizeIcimsWhitespace(rule.label)) &&
      Array.isArray(rule.children)
    ) {
      sectionCount += 1
      childCount += rule.children.length
    }
  }

  return { sectionCount, childCount, standaloneRuleCount }
}

export function isIcimsAddressTypeRule(rule) {
  return (
    normalizeIcimsWhitespace(rule.label).toLowerCase() === "type" &&
    /(?:^|[._-])addresstype(?:$|[._-])/i.test(String(rule.$input?.id ?? ""))
  )
}

export function getIcimsRegularRulesForFill(rules) {
  return rules.filter((rule) => !isIcimsAddressTypeRule(rule))
}

function looksLikeStateProvinceControl(element) {
  let haystack = [
    element.getAttribute("data-label"),
    element.getAttribute("aria-label"),
    element.name,
    element.id,
  ]
    .map(normalizeIcimsWhitespace)
    .join(" ")

  return /(?:^|[.\s_\-/])(state(?:[.\s_\-/]*province)?|province)(?:$|[.\s_\-/])/i.test(
    haystack,
  )
}

function getStateProvinceSelects() {
  return Array.from(document.querySelectorAll("select")).filter(
    looksLikeStateProvinceControl,
  )
}

function hasUsableStateProvinceOptions() {
  return getStateProvinceSelects().some(
    (select) =>
      !select.disabled &&
      Array.from(select.options).some(
        (option) =>
          !isIcimsPlaceholderSelectOptionText(option.text) &&
          normalizeIcimsWhitespace(option.text) !== "No Results",
      ),
  )
}

export function getIcimsStateProvinceOptionsSignature() {
  let selects = getStateProvinceSelects()
  if (selects.length === 0) return null

  return selects
    .map((select) => {
      let options = Array.from(select.options).map((option) =>
        [normalizeIcimsWhitespace(option.text), option.value].join("="),
      )
      return [
        select.id || select.name,
        select.disabled ? "disabled" : "enabled",
        ...options,
      ].join("|")
    })
    .join("||")
}

export async function waitForIcimsStateProvinceOptionsRefresh(
  previousSignature,
  { timeoutMs = 8e3, intervalMs = 100, stableIterations = 3 } = {},
) {
  if (previousSignature === null) return false

  let deadline = Date.now() + timeoutMs
  let lastSignature = previousSignature
  let changed = false
  let stableCount = 0

  while (Date.now() < deadline) {
    let signature = getIcimsStateProvinceOptionsSignature()
    if (signature !== null && signature !== previousSignature) {
      changed = true
    }
    if (changed && signature !== null && hasUsableStateProvinceOptions()) {
      if (signature === lastSignature) {
        stableCount += 1
      } else {
        stableCount = 0
      }
      if (stableCount >= stableIterations) return true
    }
    lastSignature = signature ?? ""
    await delay.delay(intervalMs)
  }

  return false
}

export function normalizeIcimsRuleLabel(label) {
  return normalizeIcimsWhitespace(
    (label ?? "")
      .replace(/^\s*(?:error\s*[:\uff1a]\s*)+/i, "")
      .replace(/\s*\*\s*/g, " ")
      .replace(/[:\uff1a]\s*$/, ""),
  )
}

const TEXT_LIKE_INPUT_TYPES = new Set([
  "text",
  "number",
  "email",
  "tel",
  "url",
])

export function isIcimsTextLikeInputType(type) {
  return TEXT_LIKE_INPUT_TYPES.has((type ?? "text").trim().toLowerCase())
}

function coerceBoolean(value) {
  if (typeof value === "boolean") return value
  if (typeof value === "number") return value === 1
  if (typeof value === "string") {
    let normalized = value.trim().toLowerCase()
    return (
      normalized === "true" ||
      normalized === "yes" ||
      normalized === "y" ||
      normalized === "1"
    )
  }
  return false
}

function isCurrentRecord(record) {
  return "isCurrent" in record && coerceBoolean(record.isCurrent)
}

function normalizeChoiceKey(text) {
  return normalizeIcimsWhitespace(text)
    .toLowerCase()
    .replace(/[\u2019']/g, "'")
}

export function isExactIcimsChoiceMatch(value, options) {
  let needle = normalizeChoiceKey(value)
  return !!needle && options.some((option) => normalizeChoiceKey(option) === needle)
}

const MONTH_ABBREVIATIONS = {
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

export function padDatePart(value) {
  return /^\d{1}$/.test(value) ? `0${value}` : value
}

export function getMonthNumber(value) {
  let text = normalizeIcimsWhitespace(value)
  if (/^\d{1,2}$/.test(text)) return text.padStart(2, "0")
  return MONTH_ABBREVIATIONS[text.slice(0, 3).toLowerCase()] ?? ""
}

export function isVisibleIcimsElement(element) {
  if (!element || element.classList.contains("iCIMS_NoDisplay")) return false
  return typeof element.checkVisibility === "function"
    ? (element.checkVisibility() ?? false)
    : element.offsetParent !== null
}

export function triggerEvents(element, eventNames) {
  eventNames.forEach((eventName) => {
    let event
    if (["mousedown", "mouseup", "click"].includes(eventName)) {
      event = new MouseEvent(eventName, {
        bubbles: true,
        cancelable: true,
      })
    } else if (["keydown", "keyup", "keypress"].includes(eventName)) {
      event = new KeyboardEvent(eventName, {
        bubbles: true,
        cancelable: true,
        keyCode: 13,
      })
    } else {
      event = new Event(eventName, {
        bubbles: true,
        cancelable: true,
      })
    }
    element.dispatchEvent(event)
  })
}

export async function clickAddItemButton(container, addButtonXPath, count) {
  if (!(count <= 0)) {
    for (let index = 0; index < count; index++) {
      let buttons = xpath.getOrderedNodes(addButtonXPath, container)
      if (buttons.length > 0) {
        buttons[buttons.length - 1].click()
        await delay.delay(500)
      }
    }
    await delay.delay(500)
  }
}

export function buildIcimsRepeatableSectionOptions(rules) {
  return rules.map((rule) => ({
    type: rule.type,
    label: rule.label,
    options: rule.options || [],
  }))
}

export function extractIcimsSelectOptions(
  select,
  { fallbackOptions = [], includeBlank = false } = {},
) {
  let options = Array.from(select.options)
    .map((option) => normalizeIcimsWhitespace(option.text))
    .filter((text) => !(!text || (!includeBlank && isIcimsPlaceholderSelectOptionText(text))))
  return options.length > 0 ? options : fallbackOptions
}

export function isIcimsPlaceholderSelectOptionText(text) {
  let normalized = normalizeIcimsWhitespace(text)
    .replace(/^[\u2014-]+\s*|\s*[\u2014-]+$/g, "")
    .toLowerCase()
  return (
    !normalized ||
    normalized === "select" ||
    normalized === "select one" ||
    normalized === "make a selection" ||
    normalized.startsWith("make a selection ") ||
    normalized === "please select" ||
    normalized.startsWith("please select ")
  )
}

export function buildIcimsSectionOptionSummary(
  rules,
  { includeDescription = false, forceOptionsArray = false } = {},
) {
  return rules.map((rule) => {
    let summary = { label: rule.label, type: rule.type }
    if (rule.options || forceOptionsArray) {
      summary.options = rule.options || []
    }
    if (includeDescription && rule.description) {
      summary.description = rule.description
    }
    return summary
  })
}

export function filterIcimsOptionalEndDateRecord(
  rule,
  record,
  { legacyMatchLabels = [], recordKeys },
) {
  if (rule.required) return record

  let label = normalizeIcimsRuleLabel(rule.label).toLowerCase()
  let legacyLabels = new Set(
    legacyMatchLabels.map((item) =>
      normalizeIcimsRuleLabel(item).toLowerCase(),
    ),
  )
  let keys = new Set(
    recordKeys.map((item) => normalizeIcimsRuleLabel(item).toLowerCase()),
  )

  if ((!legacyLabels.has(label) && !keys.has(label)) || !isCurrentRecord(record)) {
    return record
  }

  let filtered = { ...record }
  for (let key of recordKeys) delete filtered[key]
  return filtered
}
