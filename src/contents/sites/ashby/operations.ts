// @ts-nocheck
/**
 * Ashby DOM fill operations (inputs, selects, combobox, resume, cover letter, education).
 */

import * as dayjs from "dayjs"
import * as customParseFormat from "dayjs/plugin/customParseFormat"
import * as Fuse from "fuse.js"
import * as filler from "../../shared/filler.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as ashbyAnswer from "./answer.ts"
import * as phoneValue from "./phone-value.ts"
import * as canonicalSearch from "./canonical-search.ts"
import * as nativeSelect from "./native-select.ts"
import * as rules from "./rules.ts"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import {
  fillAshbyCountryCombobox,
  resolveAshbyCountryOption,
} from "./country.ts"

const dayjsDefault = { default: dayjs?.default ?? dayjs }
const customParseFormatDefault = { default: customParseFormat?.default ?? customParseFormat }
const FuseDefault = { default: Fuse?.default ?? Fuse }

dayjsDefault.default.extend(customParseFormatDefault.default)

const RESUME_LABEL_RE = /\bresume\b/i
const COVER_LETTER_LABEL_RE = /\bcover\s+letter\b/i
const COVER_LETTER_FILE_ATTR_RE = /\bcover[\s_-]*letter\b|coverletter/i
const COVER_LETTER_TEXT_SELECTOR =
  'textarea,input:not([type]),input[type="text"]'

export async function preFillForm() {
  let form = document.getElementById("job-application-form")
  if (form) {
    form.click()
    await delay.delay(500)
  }
}

export async function syncEducationHistorySections(desiredCount) {
  let target = Math.max(desiredCount, 1)
  let safety = 0

  while (countEducationRows() < target) {
    if (safety++ > target + 5) {
      console.warn("[Ashby][Education] safety break", {
        rows: countEducationRows(),
        desiredCount: target,
      })
      break
    }

    let rowsBefore = countEducationRows()
    let addButton = await waitForAddEducationButton({ maxWaitMs: 1500 })
    if (!addButton) {
      console.warn("[Ashby][Education] Add education button not found", {
        rows: rowsBefore,
        desiredCount: target,
      })
      break
    }

    addButton.click()
    let rowsAfter = await waitForEducationRowCount(rowsBefore, {
      maxWaitMs: 2000,
      intervalMs: 100,
    })
    if (rowsAfter <= rowsBefore) {
      console.warn("[Ashby][Education] click had no effect after 2s", {
        rowsBefore,
        rowsAfter,
      })
      break
    }
  }

  safety = 0
  while (!(safety++ > 20)) {
    let container = rules.getAshbyEducationHistoryContainer()
    if (!container) break

    let rows = rules.getAshbyEducationRows(container)
    if (rows.length <= target || rows.length <= 1) break

    let deleteButton = findEducationActionButton(rows[rows.length - 1], "delete")
    if (!deleteButton) {
      console.warn("[Ashby][Education] Delete education button not found")
      break
    }
    deleteButton.click()
    await delay.delay(300)
  }
}

function countEducationRows() {
  let container = rules.getAshbyEducationHistoryContainer()
  return container ? rules.getAshbyEducationRows(container).length : 0
}

const ADD_EDUCATION_FINDERS = [
  () =>
    Array.from(
      document.querySelectorAll('button[class*="_repeatableEducationButton_"]'),
    ).find((btn) => !btn.disabled && /add/i.test(btn.textContent ?? "")) ??
    null,
  () =>
    Array.from(document.querySelectorAll("button")).find((btn) => {
      if (btn.disabled) return false
      let text = [btn.textContent, btn.getAttribute("aria-label")]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
      return text.includes("add") && text.includes("education")
    }) ?? null,
  () => {
    let container = rules.getAshbyEducationHistoryContainer()
    return container ? findEducationActionButton(container, "add") : null
  },
]

function findAddEducationButton() {
  for (let finder of ADD_EDUCATION_FINDERS) {
    let button = finder()
    if (button) return button
  }
  return null
}

async function waitForAddEducationButton(options) {
  let started = Date.now()
  let button = findAddEducationButton()
  while (!button && Date.now() - started < options.maxWaitMs) {
    await delay.delay(100)
    button = findAddEducationButton()
  }
  return button
}

async function waitForEducationRowCount(previousCount, options) {
  let started = Date.now()
  let count = countEducationRows()
  while (
    count <= previousCount &&
    Date.now() - started < options.maxWaitMs
  ) {
    await delay.delay(options.intervalMs)
    count = countEducationRows()
  }
  return count
}

function findEducationActionButton(scope, action) {
  let buttons = Array.from(scope.querySelectorAll("button"))
  return (
    buttons.find((btn) => {
      if (btn.disabled) return false
      let text = buttonSearchText(btn)
      return action === "add"
        ? text.includes("add")
        : text.includes("delete") || text.includes("remove")
    }) ?? null
  )
}

function buttonSearchText(button) {
  return [button.textContent, button.getAttribute("aria-label"), button.getAttribute("title")]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export function getAshbyResumeInput(root = document) {
  let systemInput = root.querySelector(
    'input[type="file"][id="_systemfield_resume"]',
  )
  if (systemInput) return systemInput

  let entries = Array.from(
    root.querySelectorAll(
      '.ashby-application-form-field-entry, [class*="ashby-application-form-field-entry"]',
    ),
  )
  for (let entry of entries) {
    let label = entry.querySelector("label")
    let labelText = label ? normalizeLabelText(label) : ""
    if (RESUME_LABEL_RE.test(labelText) && !COVER_LETTER_LABEL_RE.test(labelText)) {
      let fileInput = entry.querySelector('input[type="file"]')
      if (fileInput) return fileInput
    }
  }
  return null
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  let input = getAshbyResumeInput()
  if (!input) return

  let requirement = readFileInputRequirement(input)
  console.info("[Ashby][Resume] upload status", {
    required: requirement.required,
    requirementSource: requirement.source,
    inputKind: input.id === "_systemfield_resume" ? "system" : "custom",
  })
  await dom.uploadFiles(
    input,
    await answerMethods.fetchPdfAsBlob(resumeInfo),
    updateRequired,
    updateFilled,
    "Resume/CV",
    requirement.required,
  )
}

function readFileInputRequirement(input) {
  if (input.required) {
    return { required: true, source: "native-required" }
  }
  if (input.getAttribute("aria-required") === "true") {
    return { required: true, source: "aria-required" }
  }

  let entry = input.closest?.(
    '.ashby-application-form-field-entry, [class*="ashby-application-form-field-entry"]',
  )
  let label = entry?.querySelector("label")
  let requiredFromLabel =
    !!label?.className.includes("required") ||
    normalizeLabelText(label ?? input).includes("\u2731")

  return requiredFromLabel
    ? { required: true, source: "label-required" }
    : { required: false, source: "none" }
}

export function getAshbyCoverLetterStatus(root = document) {
  let fieldType = getAshbyCoverLetterFieldType(root)
  return fieldType === "file"
    ? "required"
    : fieldType === "text"
      ? "optional"
      : ""
}

export function getAshbyCoverLetterFieldType(root = document) {
  let label = findCoverLetterLabel(root)
  let entry = label ? findFieldEntryFromLabel(label) : null
  if (entry?.querySelector('input[type="file"]')) return "file"
  if (entry && findCoverLetterTextControl(entry)) return "text"
  return findCoverLetterFileByAttributes(root) ? "file" : ""
}

export function getAshbyCoverLetterInput(root = document) {
  let label = findCoverLetterLabel(root)
  let entry = label ? findFieldEntryFromLabel(label) : null
  let fileInput = entry?.querySelector('input[type="file"]')
  return fileInput || findCoverLetterFileByAttributes(root)
}

function findCoverLetterTextControl(entry) {
  return entry.querySelector(COVER_LETTER_TEXT_SELECTOR)
}

function findCoverLetterLabel(root = document) {
  let labels = Array.from(root.querySelectorAll("label"))
  return labels.find((label) => COVER_LETTER_LABEL_RE.test(normalizeLabelText(label))) ?? null
}

function findCoverLetterFileByAttributes(root) {
  let inputs = Array.from(root.querySelectorAll('input[type="file"]'))
  return (
    inputs.find((input) => {
      let attrs = [
        input.id,
        input.name,
        input.getAttribute("aria-label"),
        input.getAttribute("data-testid"),
        input.getAttribute("data-qa"),
      ]
        .filter(Boolean)
        .join(" ")
      return COVER_LETTER_FILE_ATTR_RE.test(attrs)
    }) ?? null
  )
}

function findFieldEntryFromLabel(label) {
  let entry = label.closest?.(
    '.ashby-application-form-field-entry, [class*="ashby-application-form-field-entry"]',
  )
  if (entry) return entry

  let parent = label.parentElement
  while (parent) {
    if (parent.querySelector('input[type="file"], input, textarea, select')) {
      return parent
    }
    if (parent === document.body) break
    parent = parent.parentElement
  }
  return label.parentElement
}

function normalizeLabelText(el) {
  return String(el.textContent ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

export async function uploadCoverLetter(
  coverLetterInfo,
  updateRequired,
  updateFilled,
) {
  let input = getAshbyCoverLetterInput()
  if (!input) return
  await dom.uploadFiles(
    input,
    await answerMethods.fetchCoverLetterPdfAsBlob(coverLetterInfo),
    updateRequired,
    updateFilled,
    "Cover Letter",
  )
}

export async function fillCheckboxField(rule, values) {
  for (let value of values) {
    let button = xpath.getFirstOrderedNodeSafe(
      './button[text()="' + value + '"]',
      rule.$input,
    )
    if (button) {
      let el = button
      if (!el.className.includes("active")) {
        el.click()
        await delay.delay(500)
      }
    } else {
      throw new filler.FillError(
        `No matching checkbox option for label: ${rule.label} with value: ${value}`,
      )
    }
  }
}

export async function fillInputTextField(
  input,
  value,
  label = "",
  phoneCountryCodeAnswer,
) {
  let text = typeof value === "string" ? value : String(value ?? "")
  let normalized = normalizeTextFieldValue(
    input,
    text,
    label,
    phoneCountryCodeAnswer,
  )
  await applyTextInputValue(input, normalized)

  let datepicker = document.querySelector(".react-datepicker-popper")
  if (datepicker) {
    document.body.dispatchEvent(
      new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
    )
    document.body.dispatchEvent(
      new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
    )
    document.body.click()
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      }),
    )
    input.blur()
    await delay.delay(300)
  } else {
    dispatchTextInputEvents(input)
    await delay.delay(300)
    input.blur()
  }

  let applied = await waitForTextInputValue(input, normalized)
  if (!applied) {
    throw new filler.FillError(`Text input value was not applied: ${normalized}`)
  }
}

function normalizeTextFieldValue(input, value, label = "", phoneCountryCodeAnswer) {
  if (input instanceof HTMLInputElement && input.type === "tel") {
    return phoneValue.resolveAshbyPhoneValue(value, phoneCountryCodeAnswer)
  }
  let isDatePicker = isAshbyDatePickerInput(input)
  let isDateLabel = isDateFieldLabel(label)
  return isDatePicker || isDateLabel
    ? ashbyAnswer.normalizeAshbyDateInputValue(value)
    : value
}

function isDateFieldLabel(label) {
  let text = String(label ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
  return (
    /\b(start|end|graduation)\s+date\b/.test(text) ||
    text.includes("available start date")
  )
}

export async function fillSelectField(rule, value) {
  let values = Array.isArray(value) ? value : [value]
  if (isCommunicationConsentRule(rule)) {
    await fillCommunicationConsent(rule, values)
    return
  }

  for (let optionValue of values) {
    if (isNativeSelectElement(rule.$input)) {
      await fillNativeSelect(rule.$input, optionValue, rule.label)
      continue
    }

    let optionText = String(optionValue ?? "")
      .replace(/\s+/g, " ")
      .trim()
    let optionLabel = xpath.getFirstOrderedNodeSafe(
      `following-sibling::div[contains(@class, "_option_")]//label[normalize-space()=${xpath.escapeXPath(optionText)}]`,
      rule.$label,
    )
    if (optionLabel) {
      let checkbox = xpath.getFirstOrderedNodeSafe(
        "preceding-sibling::span//input",
        optionLabel,
      )
      if (checkbox?.checked) continue
      if (checkbox) checkbox.click()
      else {
        throw new filler.FillError(
          `No clickable select input for label: ${rule.label} with value: ${optionValue}`,
        )
      }
      await delay.delay(200)
      if (!checkbox.checked && optionLabel instanceof HTMLElement) {
        optionLabel.click()
        await delay.delay(200)
      }
      if (!checkbox.checked) {
        throw new filler.FillError(
          `Select option click was not applied for label: ${rule.label} with value: ${optionValue}`,
        )
      }
    } else {
      throw new filler.FillError(
        `No matching select option for label: ${rule.label} with value: ${optionValue}`,
      )
    }
  }
}

function isCommunicationConsentRule(rule) {
  let input = rule.$input
  let radioParent = rule.$radioParent
  return (
    input?.tagName === "INPUT" &&
    input.type === "radio" &&
    input.name === "communicationConsent" &&
    !!radioParent
  )
}

async function fillCommunicationConsent(rule, values) {
  let wanted = normalizeConsentText(values[0] ?? "")
  let radios = Array.from(
    rule.$radioParent.querySelectorAll(
      'input[type="radio"][name="communicationConsent"]',
    ),
  )
  let matches = radios.filter(
    (radio) =>
      !radio.disabled &&
      normalizeConsentText(radio.closest("label")?.textContent ?? "") === wanted,
  )

  console.info("[Ashby][CommunicationConsent] fill-start", {
    optionCount: radios.length,
    matchCount: matches.length,
    hasAnswer: !!wanted,
  })

  if (!wanted || matches.length !== 1) {
    throw new filler.FillError(
      `No unique communication consent option for label: ${rule.label}`,
    )
  }

  let radio = matches[0]
  if (!radio.checked) {
    radio.click()
    await delay.delay(200)
  }
  if (!radio.checked) {
    let label = radio.closest("label")
    label?.click()
    await delay.delay(200)
  }
  if (!radio.checked) {
    console.warn("[Ashby][CommunicationConsent] fill-failed", {
      reason: "checked-readback-failed",
    })
    throw new filler.FillError(
      `Communication consent option click was not applied for label: ${rule.label}`,
    )
  }
  console.info("[Ashby][CommunicationConsent] fill-committed", {
    checked: true,
  })
}

async function fillNativeSelect(select, answer, label) {
  let options = Array.from(select.options).map((opt) => ({
    value: opt.value,
    text: opt.textContent?.trim() || "",
    disabled: opt.disabled,
    hidden: opt.hidden,
  }))
  let matchedValue = nativeSelect.resolveAshbyNativeSelectOptionValue(
    answer,
    options,
  )
  if (matchedValue === null) {
    throw new filler.FillError(
      `No matching native select option for label: ${label} with value: ${answer}`,
    )
  }
  let applied = await applyNativeSelectValue(select, matchedValue)
  if (!applied) {
    throw new filler.FillError(
      `Native select value was not applied for label: ${label} with value: ${answer}`,
    )
  }
}

async function applyNativeSelectValue(select, value) {
  let index = Array.from(select.options).findIndex((opt) => opt.value === value)
  if (index < 0) return false

  for (let attempt = 0; attempt < 3; attempt++) {
    setNativeSelectValue(select, index, value)
    dispatchNativeSelectEvents(select)
    await delay.delay(attempt === 0 ? 150 : 250)
    if (select.value === value) return true
  }
  return select.value === value
}

function setNativeSelectValue(select, index, value) {
  let valueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLSelectElement.prototype,
    "value",
  )?.set
  let selectedIndexSetter = Object.getOwnPropertyDescriptor(
    window.HTMLSelectElement.prototype,
    "selectedIndex",
  )?.set
  let previous = select.value

  if (selectedIndexSetter) selectedIndexSetter.call(select, index)
  else select.selectedIndex = index

  if (valueSetter) valueSetter.call(select, value)
  else select.value = value

  Array.from(select.options).forEach((opt, optIndex) => {
    opt.selected = optIndex === index
  })

  try {
    select._valueTracker?.setValue?.(previous)
  } catch (error) {
    console.warn("Ashby native select tracker update failed", error)
  }
}

function dispatchNativeSelectEvents(select) {
  select.focus()
  select.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  select.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
  select.dispatchEvent(new MouseEvent("click", { bubbles: true }))
  select.dispatchEvent(
    new Event("input", { bubbles: true, cancelable: true }),
  )
  select.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: true }),
  )
  select.blur()
}

function isNativeSelectElement(el) {
  return (
    (typeof HTMLSelectElement !== "undefined" &&
      el instanceof HTMLSelectElement) ||
    el?.tagName === "SELECT"
  )
}

function normalizeConsentText(text) {
  return text
    .normalize("NFKC")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
}

async function applyTextInputValue(input, value) {
  if (!input) throw new filler.FillError("Text input element is null")
  input.focus()
  input.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  input.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
  input.dispatchEvent(new MouseEvent("click", { bubbles: true }))
  setReactInputValue(input, value)
  dispatchTextInputEvents(input)
}

function dispatchTextInputEvents(input) {
  input.dispatchEvent(
    new InputEvent("input", {
      bubbles: true,
      cancelable: true,
      composed: true,
    }),
  )
  input.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: true }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keydown", { bubbles: true, cancelable: true }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keyup", { bubbles: true, cancelable: true }),
  )
}

async function waitForTextInputValue(input, expected) {
  let maxAttempts = 5
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (textInputValueMatches(input, expected)) return true
    await delay.delay(100)
  }
  return textInputValueMatches(input, expected)
}

function normalizeComparableText(value) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .trim()
}

function textInputValueMatches(input, expected) {
  let actual = normalizeComparableText(input.value)
  let wanted = normalizeComparableText(expected)
  if (actual === wanted) return true
  if (isAshbyDatePickerInput(input)) {
    return datesMatchLoosely(actual, wanted)
  }
  return isTelInput(input) && digitsOnly(actual) === digitsOnly(wanted)
}

function isAshbyDatePickerInput(input) {
  return (
    input instanceof HTMLInputElement &&
    (input.placeholder === "Pick date..." ||
      !!input.closest(".react-datepicker-wrapper"))
  )
}

function isTelInput(input) {
  return input instanceof HTMLInputElement && input.type === "tel"
}

function digitsOnly(value) {
  return String(value ?? "").replace(/\D/g, "")
}

function datesMatchLoosely(actual, expected) {
  let left = parseFlexibleDate(actual)
  let right = parseFlexibleDate(expected)
  return (
    !!left &&
    !!right &&
    (right.precision === "month"
      ? left.date.isSame(right.date, "month")
      : left.date.isSame(right.date, "day"))
  )
}

function parseFlexibleDate(value) {
  let text = String(value ?? "").trim()
  if (!text) return null

  let monthFormats = [
    "YYYY-MM",
    "YYYY/MM",
    "MM/YYYY",
    "MM-YYYY",
    "MMM YYYY",
    "MMMM YYYY",
    "MMM, YYYY",
    "MMMM, YYYY",
  ]
  for (let format of monthFormats) {
    let parsed = dayjsDefault.default(text, format, true)
    if (parsed.isValid()) return { date: parsed, precision: "month" }
  }

  let dayFormats = [
    "YYYY-MM-DD",
    "YYYY/MM/DD",
    "MM/DD/YYYY",
    "MM-DD-YYYY",
    "M/D/YYYY",
    "M-D-YYYY",
  ]
  for (let format of dayFormats) {
    let parsed = dayjsDefault.default(text, format, true)
    if (parsed.isValid()) return { date: parsed, precision: "day" }
  }
  return null
}

export async function fillComboboxField(rule, value) {
  let text = typeof value === "string" ? value : String(value ?? "")

  if (isSchoolOrUniversityLabel(rule.label)) {
    let canonical = await canonicalSearch
      .resolveAshbyCanonicalSchool(text)
      .catch(() => null)
    if (canonical) {
      let selected = await selectCanonicalSchoolOption(rule, canonical)
      if (selected) return
    }
  }

  let queries = buildComboboxSearchQueries(rule, text)
  for (let query of queries) {
    await typeComboboxValue(rule.$input, query)
    let option = await waitForFuzzyComboboxOption(text, rule.options)
    if (option) {
      option.click()
      await delay.delay(200)
      return
    }
  }

  clearComboboxInput(rule.$input)
  throw new filler.FillError(
    `No matching combobox option for label: ${rule.label} with value: ${text}`,
  )
}

export function findExactAshbyComboboxOption(wanted, options) {
  let normalized = normalizeComboboxText(wanted)
  if (!normalized) return null
  return (
    options.find(
      (opt) => normalizeComboboxText(opt.textContent ?? "") === normalized,
    ) ?? null
  )
}

async function waitForExactComboboxOption(wanted, input) {
  let maxAttempts = 12
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    let controlsId =
      input.getAttribute("aria-expanded") === "true"
        ? input.getAttribute("aria-controls")
        : null
    let listbox = controlsId ? document.getElementById(controlsId) : null
    let options = listbox
      ? Array.from(listbox.querySelectorAll('[role="option"]'))
      : []
    let match = findExactAshbyComboboxOption(wanted, options)
    if (match) return match
    await delay.delay(100)
  }
  return null
}

export async function fillResolvedLocationCombobox(rule, resolvedValue) {
  let text = String(resolvedValue ?? "").trim()
  if (!text) throw new filler.FillError("Resolved Ashby location value is empty")

  console.info("[Ashby][GeoLocation] exact-fill-start", {
    label: rule.label,
    targetLength: text.length,
  })
  rule.$input.setAttribute?.("data-jr-ashby-resolve-stage", "exact-fill")
  await typeComboboxValue(rule.$input, text)

  let option = await waitForExactComboboxOption(text, rule.$input)
  if (option) {
    option.click()
    await delay.delay(200)
    console.info("[Ashby][GeoLocation] exact-fill-committed", {
      label: rule.label,
      committedLength: String(rule.$input.value ?? "").length,
    })
    rule.$input.setAttribute?.("data-jr-ashby-resolve-stage", "committed")
    return
  }

  console.warn("[Ashby][GeoLocation] exact-fill-failed", {
    label: rule.label,
    reason: "no-exact-option",
    targetLength: text.length,
    expanded: rule.$input.getAttribute("aria-expanded"),
  })
  rule.$input.setAttribute?.(
    "data-jr-ashby-resolve-stage",
    "no-exact-option",
  )
  clearComboboxInput(rule.$input)
  throw new filler.FillError(
    `No exact combobox option for label: ${rule.label} with resolved value: ${text}`,
  )
}

async function selectCanonicalSchoolOption(rule, canonicalName) {
  await typeComboboxValue(rule.$input, canonicalName)
  let option = await waitForSchoolOption(canonicalName)
  if (!option) return false
  option.click()
  await delay.delay(200)
  return true
}

async function waitForSchoolOption(wanted) {
  let maxAttempts = 12
  let normalizedWanted = normalizeComboboxText(wanted)
  if (!normalizedWanted) return null

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    let options = document.querySelectorAll(
      'div[role="listbox"] div[role="option"]',
    )
    let startsWithMatch = null
    let includesMatch = null

    for (let option of options) {
      let text = normalizeComboboxText(option.textContent ?? "")
      if (text === normalizedWanted) return option
      if (!startsWithMatch && text.startsWith(normalizedWanted)) {
        startsWithMatch = option
      } else if (!includesMatch && text.includes(normalizedWanted)) {
        includesMatch = option
      }
    }

    if (startsWithMatch ?? includesMatch) return startsWithMatch ?? includesMatch
    await delay.delay(100)
  }
  return null
}

function clearComboboxInput(input) {
  if (!input) return
  setReactInputValue(input, "")
  input.dispatchEvent(
    new InputEvent("input", {
      bubbles: true,
      cancelable: true,
      composed: true,
    }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true,
    }),
  )
  input.blur()
}

function setReactInputValue(input, value) {
  let proto =
    input instanceof HTMLTextAreaElement
      ? window.HTMLTextAreaElement.prototype
      : window.HTMLInputElement.prototype
  let valueSetter = Object.getOwnPropertyDescriptor(proto, "value")?.set
  let previous = input.value
  if (valueSetter) valueSetter.call(input, value)
  else input.value = value

  try {
    let tracker = input?._valueTracker
    if (tracker?.setValue) tracker.setValue(previous)
  } catch (error) {
    console.warn("Ashby react input tracker update failed", error)
  }
}

function buildComboboxSearchQueries(rule, answer) {
  let queries = []
  let pushUnique = (candidate) => {
    let trimmed = candidate.trim()
    if (!trimmed) return
    if (queries.some((q) => normalizeComboboxText(q) === normalizeComboboxText(trimmed))) {
      return
    }
    queries.push(trimmed)
  }

  pushUnique(answer)
  for (let candidate of primaryComboboxQueries(answer, rule.label, rule.options)) {
    pushUnique(candidate)
  }
  for (let candidate of secondaryComboboxQueries(answer, rule.label, rule.options)) {
    pushUnique(candidate)
  }
  return queries
}

function primaryComboboxQueries(answer, label, options = []) {
  let normalized = normalizeComboboxText(answer)
  if (!normalized) return []

  let queries = []
  let fuzzyOption = bestFuzzyOptionText(answer, options)
  let tokens = normalized.split(" ").filter(Boolean)
  let commaParts = splitByDelimiter(answer, ",")
  let dashParts = splitByDash(answer)

  if (isSchoolOrUniversityLabel(label)) {
    if (fuzzyOption) {
      let optionTokens = normalizeComboboxText(fuzzyOption)
        .split(" ")
        .filter(Boolean)
      if (optionTokens.length >= 2) {
        queries.push(
          optionTokens.slice(0, Math.min(optionTokens.length, 4)).join(" "),
        )
      }
    }
    if (tokens.length >= 4) queries.push(tokens.slice(0, 4).join(" "))
    else if (tokens.length >= 2) queries.push(tokens.join(" "))
  } else {
    if (fuzzyOption) queries.push(fuzzyOption)
    if (commaParts[0]) queries.push(commaParts[0])
    if (dashParts[0]) queries.push(dashParts[0])
  }

  if (queries.length === 0 && tokens.length >= 2) {
    queries.push(tokens.slice(0, Math.min(tokens.length, 3)).join(" "))
  }
  return queries
}

function secondaryComboboxQueries(answer, label, options = []) {
  let normalized = normalizeComboboxText(answer)
  let queries = []
  let fuzzyOption = bestFuzzyOptionText(answer, options)

  if (fuzzyOption) queries.push(fuzzyOption)
  for (let candidate of expandAnswerVariants(answer, label)) {
    queries.push(candidate)
  }

  if (normalized.includes(" ")) {
    let tokens = normalized.split(" ").filter(Boolean)
    for (let len = tokens.length - 1; len >= 2; len--) {
      queries.push(tokens.slice(0, len).join(" "))
    }
  }
  return queries
}

function expandAnswerVariants(answer, label) {
  let normalized = normalizeComboboxText(answer)
  let variants = []

  let commaParts = normalized
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
  variants.push(...commaParts)

  let dashParts = normalized
    .split(/\s+-\s+|-/)
    .map((part) => part.trim())
    .filter(Boolean)
  variants.push(...dashParts)

  let tokens = normalized.split(" ").filter(Boolean)
  if (isSchoolOrUniversityLabel(label) && tokens.length >= 2) {
    variants.push(tokens.slice(0, Math.min(tokens.length, 4)).join(" "))
  }

  return Array.from(
    new Set(variants.map((v) => v.trim()).filter(Boolean)),
  )
}

async function waitForFuzzyComboboxOption(answer, knownOptions = []) {
  let maxAttempts = 12
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    let options = Array.from(
      document.querySelectorAll('div[role="listbox"] div[role="option"]'),
    )
    let match = pickFuzzyComboboxOption(answer, options, knownOptions)
    if (match) return match
    await delay.delay(100)
  }
  return null
}

function pickFuzzyComboboxOption(answer, optionElements, knownOptions = []) {
  if (optionElements.length === 0) return null

  let wanted = normalizeComboboxText(answer)
  let fuzzyText = bestFuzzyOptionText(answer, knownOptions)
  let fuzzyNormalized = normalizeComboboxText(fuzzyText)

  let exact =
    optionElements.find((opt) => {
      let text = normalizeComboboxText(opt.textContent ?? "")
      return text === wanted || (fuzzyNormalized && text === fuzzyNormalized)
    }) ||
    optionElements.find((opt) => {
      let text = normalizeComboboxText(opt.textContent ?? "")
      return text.includes(wanted) || wanted.includes(text)
    })

  if (exact) return exact

  let scored = optionElements.map((opt) => ({
    element: opt,
    text: opt.textContent ?? "",
    normalized: normalizeComboboxText(opt.textContent ?? ""),
  }))
  let fuseMatch = fuseSearch(answer, scored)
  return fuseMatch?.element || null
}

function bestFuzzyOptionText(answer, options = []) {
  if (!options.length) return ""
  let match = fuseSearch(
    answer,
    options.map((text) => ({
      text,
      normalized: normalizeComboboxText(text),
    })),
  )
  return match?.text || ""
}

function normalizeComboboxText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[(),]/g, " ")
    .replace(/\s*-\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function fuseSearch(query, items) {
  if (!items.length) return null
  let fuse = new FuseDefault.default(items, {
    keys: ["normalized", "text"],
    includeScore: true,
    ignoreLocation: true,
    threshold: 0.35,
    minMatchCharLength: 2,
  })
  let [hit] = fuse.search(normalizeComboboxText(query))
  return hit?.item || null
}

function isSchoolOrUniversityLabel(label) {
  let lower = label.toLowerCase()
  return lower.includes("school") || lower.includes("university")
}

function splitByDelimiter(text, delimiter) {
  return text
    .split(delimiter)
    .map((part) => part.trim())
    .filter(Boolean)
}

function splitByDash(text) {
  return text
    .split(/\s+-\s+|-/)
    .map((part) => part.trim())
    .filter(Boolean)
}

async function typeComboboxValue(input, value) {
  if (!input) return
  input.focus()
  input.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
  await delay.delay(50)

  let proto = Object.getPrototypeOf(input)
  let valueSetter = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (valueSetter) valueSetter.call(input, value)
  else input.value = value

  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true }))
  input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }))
  await delay.delay(300)
}

export async function clearExistingResume(root = document) {
  let xpathQuery = './/button[@title="Delete file"]'
  let button = xpath.getFirstOrderedNodeSafe(xpathQuery, root)
  if (!button) return false
  button.click()
  await delay.delay(200)
  return true
}

export { fillAshbyCountryCombobox, resolveAshbyCountryOption }
