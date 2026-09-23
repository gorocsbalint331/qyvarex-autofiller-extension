// @ts-nocheck
/**
 * SmartRecruiters — DOM fill operations (inputs, city/institution, dates, uploads).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as filler from "../../shared/filler.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"
import * as smartRecruitersAnswer from "./answer.ts"
import * as rules from "./rules.ts"
import * as locationOperation from "./location-operation.ts"
import * as educationOperation from "./education-operation.ts"

const getTargetOrTimeout = {
  default: getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

const getSectionTags = (isEmployment) => ({
  sectionTag: isEmployment ? "oc-experience" : "oc-education",
  containerTag: isEmployment
    ? "oc-experience-entry"
    : "oc-education-entry",
})

const findResumeFileInput = (...sectionSelectors) => {
  let input = document.querySelector('input[type="file"][accept*=".pdf"]')
  if (input) return input
  for (const selector of sectionSelectors) {
    const section = document.querySelector(selector)
    if (section) {
      const formField = section.querySelector("spl-form-field")
      const dropzone = formField?.querySelector("spl-dropzone")
      const shadow = dropzone?.shadowRoot
      if (shadow && (input = shadow.querySelector("#file-input"))) return input
    }
  }
  return null
}

const clickDropdownOption = async (option) => {
  const dropdownItem = option.shadowRoot?.querySelector("spl-dropdown-item")
  if (!dropdownItem) {
    console.warn("Could not find spl-dropdown-item")
    return
  }
  const clickable = dropdownItem.shadowRoot?.querySelector(
    ".c-spl-dropdown-item",
  )
  if (clickable && clickable instanceof HTMLElement) {
    clickable.click()
    const eventInit = {
      view: window,
      bubbles: true,
      cancelable: true,
      composed: true,
      buttons: 1,
    }
    clickable.dispatchEvent(new MouseEvent("mousedown", eventInit))
    clickable.dispatchEvent(new PointerEvent("pointerdown", eventInit))
    clickable.dispatchEvent(new MouseEvent("mouseup", eventInit))
    clickable.dispatchEvent(new PointerEvent("pointerup", eventInit))
    clickable.click()
    clickable.dispatchEvent(new MouseEvent("click", eventInit))
  } else {
    console.warn(
      "Could not find .c-spl-dropdown-item inside the second shadow root",
    )
    dropdownItem.click()
  }
}

const clickOptionSimple = (option) => {
  const dropdownItem = option.shadowRoot?.querySelector("spl-dropdown-item")
  const clickable = dropdownItem?.shadowRoot?.querySelector(
    ".c-spl-dropdown-item",
  )
  ;(clickable || dropdownItem || option).click()
}

const normalizeOptionText = (value) =>
  String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()

const escapeRegExp = (value) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

const containsWholeWord = (haystack, needle) => {
  const normalizedHaystack = normalizeOptionText(haystack)
  const normalizedNeedle = normalizeOptionText(needle)
  if (!normalizedHaystack || !normalizedNeedle) return false
  const pattern = RegExp(
    `(^|[^a-z0-9])${escapeRegExp(normalizedNeedle)}($|[^a-z0-9])`,
    "i",
  )
  return pattern.test(normalizedHaystack)
}

const findMatchingOption = (options, value) => {
  const normalized = normalizeOptionText(value)
  if (!normalized) return null
  const annotated = options.map((option) => ({
    option,
    text: option.textContent?.trim() || "",
    normalizedText: normalizeOptionText(option.textContent?.trim() || ""),
  }))
  return (
    annotated.find(({ normalizedText }) => normalizedText === normalized)
      ?.option ||
    annotated.find(({ text }) => containsWholeWord(text, value))?.option ||
    null
  )
}

const preFillForm = async () => {
  let editButtons = getEditButtons(true)
  for (const button of editButtons || []) {
    button.click()
    await delay.delay(50)
  }
  for (const button of (editButtons = getEditButtons(false)) || []) {
    button.click()
    await delay.delay(50)
  }

  let deleteButtons = getDeleteButtons(true)
  for (const button of deleteButtons || []) {
    button.click()
    await getTargetOrTimeout.default(
      () => document.querySelector('div[class*="spl-dialog-base-container"]'),
      () => false,
      10,
    )
    getDialogConfirmButton()?.click()
    await delay.delay(50)
  }
  for (const button of (deleteButtons = getDeleteButtons(false)) || []) {
    button.click()
    await getTargetOrTimeout.default(
      () => document.querySelector('div[class*="spl-dialog-base-container"]'),
      () => false,
      10,
    )
    getDialogConfirmButton()?.click()
    await delay.delay(50)
  }

  getAddButton(true)?.click()
  await delay.delay(50)
  getAddButton(false)?.click()
  await delay.delay(50)
}

const uploadResume = async (resumeInfo, updateRequired, updateFilled) => {
  const input = findResumeFileInput("oc-resume-upload")
  if (input) {
    await dom
      .uploadFiles(
        input,
        await answerMethods.fetchPdfAsBlob(resumeInfo),
        updateRequired,
        updateFilled,
        "Resume/CV",
      )
      .then(() => {})
  } else {
    console.warn(`[uploadResume] \u26A0\uFE0F No resume input found`)
  }
}

async function removeResume() {
  const input = findResumeFileInput("oc-easy-apply", "oc-resume-upload")
  if (input && input.value) {
    input.value = ""
    input.dispatchEvent(new Event("change", { bubbles: true }))
  }
}

const typeIntoAutocomplete = async (input, text) => {
  const eventInit = { bubbles: true, cancelable: true, composed: true }
  input.focus()
  input.dispatchEvent(new FocusEvent("focusin", eventInit))
  setNativeInputValue(input, "")
  input.dispatchEvent(
    new InputEvent("input", {
      ...eventInit,
      data: null,
      inputType: "deleteContentBackward",
    }),
  )
  await delay.delay(50)
  if (text) {
    for (const prefix of locationOperation.getSmartRecruitersCityInputSequence(
      text,
    )) {
      const key = Array.from(prefix).at(-1) || ""
      input.dispatchEvent(
        new KeyboardEvent("keydown", { ...eventInit, key }),
      )
      input.dispatchEvent(
        new InputEvent("beforeinput", {
          ...eventInit,
          data: key,
          inputType: "insertText",
        }),
      )
      setNativeInputValue(input, prefix)
      input.dispatchEvent(
        new InputEvent("input", {
          ...eventInit,
          data: key,
          inputType: "insertText",
        }),
      )
      input.dispatchEvent(new KeyboardEvent("keyup", { ...eventInit, key }))
      await delay.delay(20)
    }
  }
}

const clearSmartRecruitersCityField = async (input) => {
  await typeIntoAutocomplete(input, "")
  input.dispatchEvent(
    new Event("change", { bubbles: true, composed: true }),
  )
  input.blur()
}

const clearSmartRecruitersInstitutionField = async (input) => {
  await typeIntoAutocomplete(input, "")
  input.dispatchEvent(
    new Event("change", { bubbles: true, composed: true }),
  )
  input.blur()
}

const captureSmartRecruitersCityRequest = async (
  input,
  originalAnswer,
  maxAttempts = 30,
) => {
  const bootstrapQuery =
    locationOperation.getSmartRecruitersCityBootstrapQuery(originalAnswer)
  if (!bootstrapQuery) return ""
  const perf = input.ownerDocument.defaultView?.performance ?? performance
  const startTime = perf.now()
  await typeIntoAutocomplete(input, bootstrapQuery)
  let capturedUrl = ""
  let resources = []
  for (
    let attempt = 0;
    attempt < maxAttempts && !capturedUrl;
    attempt += 1
  ) {
    await delay.delay(100)
    resources = perf.getEntriesByType("resource")
    capturedUrl = locationOperation.findSmartRecruitersCityRequestUrl(
      resources,
      bootstrapQuery,
      startTime,
    )
  }
  const captureSource = capturedUrl
    ? "resource-timing"
    : "validated-fallback"
  if (!capturedUrl) {
    capturedUrl =
      locationOperation.buildSmartRecruitersCityFallbackRequestUrl({
        pageUrl: input.ownerDocument.location.href,
        query: bootstrapQuery,
        language: input.ownerDocument.documentElement.lang,
      })
  }
  console.info("[SmartRecruiters][City] autocomplete-capture", {
    captured: !!capturedUrl,
    captureSource,
    probeLength: bootstrapQuery.length,
    resourceCount: resources.length,
  })
  await clearSmartRecruitersCityField(input)
  return capturedUrl
}

const findListboxByAriaControls = (input) => {
  const controlsId = input.getAttribute("aria-controls")
  if (!controlsId) return null
  let current = input
  const visited = /* @__PURE__ */ new Set()
  while (current && !visited.has(current)) {
    visited.add(current)
    const root = current.getRootNode()
    const listbox = root.querySelector?.(`[id="${controlsId}"]`)
    if (listbox instanceof HTMLElement) return listbox
    current = current.parentElement || root.host || null
  }
  return null
}

const findAutocompleteHost = (input) => {
  let current = input
  const visited = /* @__PURE__ */ new Set()
  while (current && !visited.has(current)) {
    if (
      (visited.add(current),
      current.tagName?.toLowerCase() === "spl-autocomplete")
    ) {
      return current
    }
    const root = current.getRootNode()
    current = current.parentElement || root.host || null
  }
  return null
}

const getAutocompleteModelValue = (autocomplete) =>
  autocomplete.value ?? autocomplete.getAttribute("value")

const normalizeWhitespace = (value) =>
  String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()

function getSmartRecruitersInstitutionCandidate(option, index) {
  const value = option.getAttribute("value")?.trim() || ""
  if (!value || "#spl-custom-option" === value) return null
  const text =
    normalizeWhitespace(
      option.querySelector?.("spl-typography-body")?.textContent,
    ) ||
    normalizeWhitespace(
      option.shadowRoot?.querySelector?.("spl-truncate")?.textContent,
    ) ||
    normalizeWhitespace(option.getAttribute("label")) ||
    value
  return text
    ? {
        candidate_key: `smartrecruiters-institution-${index + 1}`,
        value,
        text,
      }
    : null
}

const getSelectOptions = (listbox) =>
  Array.from(listbox?.querySelectorAll?.("spl-select-option") || [])

const collectInstitutionCandidates = (listbox) => {
  const candidates = getSelectOptions(listbox)
    .map((option, index) =>
      getSmartRecruitersInstitutionCandidate(option, index),
    )
    .filter((candidate) => !!candidate)
  return {
    candidates,
    signature: JSON.stringify(
      candidates.map((candidate) => [candidate.value, candidate.text]),
    ),
  }
}

async function waitForInstitutionCandidates(input, searchInput) {
  const initialListbox = findListboxByAriaControls(input)
  const initial = collectInstitutionCandidates(initialListbox)
  const initialSignature = initial.signature
  await typeIntoAutocomplete(input, searchInput)
  let lastSignature = ""
  let stableCount = 0
  let hasChanged = !initialSignature
  for (let attempt = 0; attempt < 30; attempt += 1) {
    await delay.delay(100)
    const listbox = findListboxByAriaControls(input)
    const current = collectInstitutionCandidates(listbox)
    if (
      !listbox ||
      (current.signature !== initialSignature && (hasChanged = true),
      !hasChanged)
    ) {
      lastSignature = ""
      stableCount = 0
      continue
    }
    if (current.signature === lastSignature) stableCount += 1
    else {
      lastSignature = current.signature
      stableCount = 1
    }
    if (!(stableCount < 2)) {
      if (current.candidates.length > 0) {
        return {
          status: "ready",
          candidates: current.candidates.slice(0, 25),
        }
      }
      return { status: "no-results", candidates: [] }
    }
  }
  const finalListbox = findListboxByAriaControls(input)
  if (finalListbox) {
    const final = collectInstitutionCandidates(finalListbox)
    return final.candidates.length > 0
      ? {
          status: "ready",
          candidates: final.candidates.slice(0, 25),
        }
      : { status: "no-results", candidates: [] }
  }
  console.warn(
    "[SmartRecruiters][Institution] candidates did not settle",
    { reason: "listbox-not-stable" },
  )
  return { status: "failed", candidates: [] }
}

async function captureSmartRecruitersInstitutionCandidates(input, query) {
  const sequence =
    educationOperation.getSmartRecruitersInstitutionSearchSequence(query)
  if (0 === sequence.length) {
    return { status: "no-results", candidates: [] }
  }
  let result = { status: "no-results", candidates: [] }
  for (const [index, searchInput] of sequence.entries()) {
    result = await waitForInstitutionCandidates(input, searchInput)
    if ("ready" === result.status) {
      return { ...result, searchInput }
    }
    if ("failed" === result.status) return result
    if (index < sequence.length - 1) {
      console.info(
        "[SmartRecruiters][Institution] retrying shorter query",
        {
          attempt: index + 2,
          totalAttempts: sequence.length,
          reason: "empty-results",
        },
      )
    }
  }
  return { ...result, searchInput: sequence.at(-1) }
}

async function fillSmartRecruitersInstitutionCandidate(
  input,
  candidate,
  searchInput,
) {
  const value = candidate.value.trim()
  const text = (searchInput || candidate.text).trim()
  if (!value || !text) {
    await clearSmartRecruitersInstitutionField(input)
    return false
  }
  const autocomplete = findAutocompleteHost(input)
  if (!autocomplete) {
    await clearSmartRecruitersInstitutionField(input)
    return false
  }
  if (
    educationOperation.isSmartRecruitersInstitutionCommitted({
      inputValue: input.value,
      resolvedValue: value,
      expanded: input.getAttribute("aria-expanded"),
      autocompleteValue: getAutocompleteModelValue(autocomplete),
    })
  ) {
    return true
  }
  await clearSmartRecruitersInstitutionField(input)
  for (
    let attempt = 0;
    attempt < 10 &&
    (await delay.delay(100),
    !educationOperation.isSmartRecruitersInstitutionModelEmpty(
      getAutocompleteModelValue(autocomplete),
    ));
    attempt += 1
  ) {
    if (9 === attempt) return false
  }
  await typeIntoAutocomplete(input, text)
  let matchedOption = null
  for (let attempt = 0; attempt < 30 && !matchedOption; attempt += 1) {
    await delay.delay(100)
    const options = getSelectOptions(findListboxByAriaControls(input))
    matchedOption =
      educationOperation.findExactSmartRecruitersInstitutionOption(
        options,
        value,
      )
  }
  if (!matchedOption) {
    await clearSmartRecruitersInstitutionField(input)
    return false
  }
  clickOptionSimple(matchedOption)
  for (let attempt = 0; attempt < 10; attempt += 1) {
    if (
      (await delay.delay(100),
      educationOperation.isSmartRecruitersInstitutionCommitted({
        inputValue: input.value,
        resolvedValue: value,
        expanded: input.getAttribute("aria-expanded"),
        autocompleteValue: getAutocompleteModelValue(autocomplete),
      }))
    ) {
      input.blur()
      return true
    }
  }
  await clearSmartRecruitersInstitutionField(input)
  return false
}

const fillResolvedSmartRecruitersCityField = async (input, resolvedValue) => {
  await typeIntoAutocomplete(input, resolvedValue)
  let matchedOption = null
  for (let attempt = 0; attempt < 30 && !matchedOption; attempt += 1) {
    await delay.delay(100)
    const options = Array.from(
      findListboxByAriaControls(input)?.querySelectorAll(
        "spl-select-option",
      ) || [],
    )
    matchedOption = locationOperation.findExactSmartRecruitersCityOption(
      options,
      resolvedValue,
    )
  }
  if (!matchedOption) {
    await clearSmartRecruitersCityField(input)
    return false
  }
  await clickDropdownOption(matchedOption)
  for (let attempt = 0; attempt < 10; attempt += 1) {
    await delay.delay(100)
    const autocomplete = findAutocompleteHost(input)
    if (
      locationOperation.isSmartRecruitersCityCommitted({
        inputValue: input.value,
        resolvedValue,
        expanded: input.getAttribute("aria-expanded"),
        autocompleteValue:
          autocomplete?.value ?? autocomplete?.getAttribute("value"),
      })
    ) {
      input.blur()
      return true
    }
  }
  await clearSmartRecruitersCityField(input)
  return false
}

const fillResolvedSmartRecruitersInstitutionField = async (
  input,
  resolvedValue,
) => {
  if (!resolvedValue.trim()) {
    await clearSmartRecruitersInstitutionField(input)
    return false
  }
  const autocomplete = findAutocompleteHost(input)
  await clearSmartRecruitersInstitutionField(input)
  if (!autocomplete) {
    await clearSmartRecruitersInstitutionField(input)
    return false
  }
  let isEmpty = false
  for (let attempt = 0; attempt < 10 && !isEmpty; attempt += 1) {
    await delay.delay(100)
    isEmpty = educationOperation.isSmartRecruitersInstitutionModelEmpty(
      getAutocompleteModelValue(autocomplete),
    )
  }
  if (!isEmpty) {
    await clearSmartRecruitersInstitutionField(input)
    return false
  }
  await typeIntoAutocomplete(input, resolvedValue)
  let matchedOption = null
  for (let attempt = 0; attempt < 30 && !matchedOption; attempt += 1) {
    await delay.delay(100)
    const options = Array.from(
      findListboxByAriaControls(input)?.querySelectorAll(
        "spl-select-option",
      ) || [],
    )
    matchedOption =
      educationOperation.findExactSmartRecruitersInstitutionOption(
        options,
        resolvedValue,
      )
  }
  if (
    !matchedOption ||
    !educationOperation.isSmartRecruitersInstitutionModelEmpty(
      getAutocompleteModelValue(autocomplete),
    )
  ) {
    await clearSmartRecruitersInstitutionField(input)
    return false
  }
  clickOptionSimple(matchedOption)
  for (let attempt = 0; attempt < 10; attempt += 1) {
    if (
      (await delay.delay(100),
      educationOperation.isSmartRecruitersInstitutionCommitted({
        inputValue: input.value,
        resolvedValue,
        expanded: input.getAttribute("aria-expanded"),
        autocompleteValue: getAutocompleteModelValue(autocomplete),
      }))
    ) {
      input.blur()
      return true
    }
  }
  await clearSmartRecruitersInstitutionField(input)
  return false
}

const fillInputTextField = async (input, value) => {
  if (isSmartRecruitersDateInput(input)) {
    return fillSmartRecruitersDateField(input, value)
  }
  const eventInit = { bubbles: true, composed: true }
  input.focus()
  input.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
  await delay.delay(100)
  input.value = ""
  input.dispatchEvent(new Event("input", eventInit))
  input.dispatchEvent(new Event("change", eventInit))
  await delay.delay(100)
  input.click()
  input.value = value
  input.dispatchEvent(new Event("input", eventInit))
  const lastKey = value.charAt(value.length - 1) || " "
  input.dispatchEvent(
    new KeyboardEvent("keydown", { ...eventInit, key: lastKey }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keyup", { ...eventInit, key: lastKey }),
  )
  await delay.delay(500)
  const host = input.getRootNode()?.host
  let menu = null
  if (host && host?.closest('div[slot*="trigger"]')) {
    menu = await getTargetOrTimeout.default(
      () => host?.closest('div[slot*="trigger"]')?.nextElementSibling,
      () => false,
      30,
    )
  }
  if (menu) {
    let option = null
    if (
      (option = await getTargetOrTimeout.default(
        () =>
          menu
            ?.querySelector(
              "spl-select-option:not([value='goToManualLocationMode'])",
            )
            ?.shadowRoot?.querySelector("spl-dropdown-item")
            ?.shadowRoot?.querySelector(
              "div[class*='c-spl-dropdown-item']",
            ),
        () => false,
        30,
      ))
    ) {
      option.dispatchEvent(new MouseEvent("mouseenter", eventInit))
      option.dispatchEvent(new MouseEvent("mousedown", eventInit))
      option.click()
      option.dispatchEvent(new MouseEvent("mouseup", eventInit))
      option.blur()
    }
  }
  input.dispatchEvent(new Event("change", eventInit))
  input.blur()
  await delay.delay(100)
}

function isSmartRecruitersDateInput(input) {
  if (!(input instanceof HTMLInputElement)) return false
  const ariaLabel = input.getAttribute("aria-label") || ""
  const placeholder = input.getAttribute("placeholder") || ""
  const host = input.getRootNode()?.host
  return (
    ("From" === ariaLabel || "To" === ariaLabel) &&
    "Pick a date" === placeholder &&
    host?.tagName?.toLowerCase() === "spl-date-picker"
  )
}

const fillSmartRecruitersDateField = async (input, value) => {
  const normalized =
    smartRecruitersAnswer.normalizeSmartRecruitersDate(value)
  if (!normalized) return false
  if (await selectSmartRecruitersMonthYearDate(input, normalized)) {
    return true
  }
  const eventInit = { bubbles: true, composed: true }
  input.focus()
  input.dispatchEvent(new FocusEvent("focusin", eventInit))
  await delay.delay(50)
  setNativeInputValue(input, "")
  input.dispatchEvent(new Event("input", eventInit))
  input.dispatchEvent(new Event("change", eventInit))
  await delay.delay(50)
  setNativeInputValue(input, normalized)
  input.dispatchEvent(
    new InputEvent("beforeinput", {
      ...eventInit,
      data: normalized,
      inputType: "insertText",
    }),
  )
  input.dispatchEvent(
    new InputEvent("input", {
      ...eventInit,
      data: normalized,
      inputType: "insertText",
    }),
  )
  input.dispatchEvent(new Event("change", eventInit))
  input.dispatchEvent(
    new KeyboardEvent("keydown", { ...eventInit, key: "Enter" }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keyup", { ...eventInit, key: "Enter" }),
  )
  input.blur()
  input.dispatchEvent(new FocusEvent("focusout", eventInit))
  await delay.delay(200)
  return input.value === normalized
}

async function selectSmartRecruitersMonthYearDate(input, isoDate) {
  const parts = parseIsoDateParts(isoDate)
  if (!parts) return false
  const datePicker = getDatePickerHost(input)
  const outerHost = datePicker ? getOuterHost(datePicker) : null
  const pickerType =
    datePicker?.getAttribute?.("type") ||
    outerHost?.getAttribute?.("type") ||
    ""
  if ("month-year" !== pickerType) return false
  const shadow = datePicker?.shadowRoot
  const yearInput = shadow?.querySelector("input.cur-year")
  const prevMonth = shadow?.querySelector(".flatpickr-prev-month")
  const nextMonth = shadow?.querySelector(".flatpickr-next-month")
  const monthButtons = Array.from(
    shadow?.querySelectorAll(".flatpickr-monthSelect-month") || [],
  )
  const targetMonth = monthButtons[parts.month - 1]
  if (!yearInput || !targetMonth) return false
  input.focus()
  input.click()
  await delay.delay(50)
  const currentYear = Number(yearInput.value || yearInput.textContent || "")
  if (!Number.isFinite(currentYear)) return false
  const yearDelta = parts.year - currentYear
  const navButton = yearDelta < 0 ? prevMonth : nextMonth
  if (0 !== yearDelta && !navButton) return false
  for (let step = 0; step < Math.abs(yearDelta); step++) {
    clickIfPresent(navButton)
    await delay.delay(10)
  }
  clickIfPresent(targetMonth)
  await delay.delay(150)
  return isDateCommitted(input, outerHost, isoDate)
}

function parseIsoDateParts(value) {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!match) return null
  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  return !year || month < 1 || month > 12 || day < 1 || day > 31
    ? null
    : { year, month, day }
}

function clickIfPresent(element) {
  if (element) element.click()
}

function isDateCommitted(input, host, isoDate) {
  if (input.value !== isoDate) return false
  const hostValue = host?.getAttribute?.("value") || host?.value || ""
  return !!matchesDateValue(hostValue, isoDate)
}

function matchesDateValue(actual, expectedIso) {
  if (actual === expectedIso) return true
  const parts = parseIsoDateParts(expectedIso)
  if (!parts) return false
  const date = new Date(actual)
  return (
    !Number.isNaN(date.getTime()) &&
    date.getFullYear() === parts.year &&
    date.getMonth() + 1 === parts.month
  )
}

function getDatePickerHost(input) {
  return input.getRootNode()?.host || null
}

function getOuterHost(element) {
  return element.getRootNode()?.host || null
}

function setNativeInputValue(input, value) {
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )?.set
  if (setter) setter.call(input, value)
  else input.value = value
}

const fillRadioGroupFiled = async (rule, values) => {
  const label = rule.label
  const selectedValue = values?.[0]
  if (!selectedValue) {
    console.warn("[fillRadioGroupFiled] No value provided")
    return
  }
  let matchedLabel = null
  if (rule.$radioParent) {
    const radios = [...rule.$radioParent.querySelectorAll("spl-radio")]
    let optionLabels = []
    if (radios.length > 0) {
      optionLabels = radios.map((radio) =>
        radio.shadowRoot.querySelector(
          'span[class*="c-spl-form-field-label-wrapper"]',
        ),
      )
    }
    for (const optionLabel of optionLabels) {
      const text = optionLabel?.textContent?.trim() || ""
      if (choiceMatch.isExactChoiceMatch(text, selectedValue)) {
        matchedLabel = optionLabel
        break
      }
    }
  }
  if (matchedLabel) {
    matchedLabel.focus()
    await delay.delay(50)
    matchedLabel.click()
    await delay.delay(100)
    matchedLabel.blur()
    await delay.delay(50)
  } else if (!matchedLabel) {
    throw (
      (console.error(
        `[fillRadioGroupFiled] \u274C No radio found for: "${selectedValue}"`,
      ),
      new filler.FillError(
        `(Radio) No option "${selectedValue}" found for label: "${label}"`,
      ))
    )
  }
}

const fillSelectField = async (rule, values) => {
  if (!values || 0 === values.length) return
  const selectedValue = Array.isArray(values) ? values[0] : values
  if (isPhoneCountryCodeRule(rule)) {
    const filled = await fillPhoneCountryCodeField(rule, selectedValue)
    if (!filled) {
      throw new filler.FillError(
        `(Select) Could not find phone country code: "${selectedValue}"`,
      )
    }
    return
  }
  let input = null
  if (!(input = rule.$input)) {
    throw new filler.FillError(
      `(Select) Could not find field for label: "${rule.label}"`,
    )
  }
  if (input instanceof HTMLInputElement) {
    input.focus()
    input.click()
    await delay.delay(150)
    const options = [
      ...Array.from(
        input
          .getRootNode()
          ?.host?.closest('div[class*="c-spl-autocomplete-trigger"]')
          ?.nextElementSibling?.querySelectorAll("spl-select-option") || [],
      ),
    ]
    const matched = findMatchingOption(options, selectedValue)
    if (matched && matched instanceof HTMLElement) {
      await clickDropdownOption(matched)
    }
  }
}

const isPhoneCountryCodeRule = (rule) =>
  rule.label === rules.SMARTRECRUITERS_PHONE_COUNTRY_CODE_LABEL &&
  rule.$input?.tagName?.toLowerCase() === "spl-select"

const fillPhoneCountryCodeField = async (rule, value) => {
  const select = rule.$input
  const options = getPhoneCountryCodeOptionElements(select)
  if (!select || 0 === options.length) return false
  select.shadowRoot
    ?.querySelector("button[aria-label='Country code'], button")
    ?.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        composed: true,
      }),
    )
  await delay.delay(100)
  const matched = findPhoneCountryCodeOption(options, value)
  return !!matched && (await clickDropdownOption(matched), await delay.delay(100), true)
}

function getPhoneCountryCodeOptionElements(select) {
  if (!select) return []
  const lightOptions = Array.from(
    select.querySelectorAll("spl-select-option"),
  )
  return lightOptions.length > 0
    ? lightOptions
    : Array.from(
        select.shadowRoot?.querySelectorAll("spl-select-option") || [],
      )
}

function findPhoneCountryCodeOption(options, value) {
  const normalized = normalizePhoneCountryText(value)
  if (!normalized) return null
  const annotated = options.map((option) => ({
    option,
    text: normalizePhoneCountryText(option.textContent || ""),
  }))
  return (
    annotated.find(({ text }) => text === normalized)?.option ||
    annotated.find(({ text }) => {
      const withoutDial = text.replace(/\s+\+\d+$/, "")
      return withoutDial === normalized
    })?.option ||
    annotated.find(({ text }) => text.includes(normalized))?.option ||
    null
  )
}

function normalizePhoneCountryText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

const fillCheckboxField = async (rule, values) => {
  const first = values?.[0]
  const shouldCheck =
    ("string" == typeof first && "yes" === first.toLowerCase()) ||
    true === first ||
    "true" === first
  if (shouldCheck) {
    const checkbox = rule.$checkboxs[0]
    if (!checkbox) return
    if (!checkbox.checked) {
      checkbox.focus()
      checkbox.click()
      await delay.delay(100)
      checkbox.blur()
    }
  }
}

const fillMultiSelectField = async (rule, values) => {
  const selectedValues = values
  const input = rule.$input
  for (const value of selectedValues) {
    input.focus()
    await delay.delay(150)
    input.click()
    await delay.delay(500)
    const menu = input.closest(
      'div[class*="c-spl-multiselect-autocomplete-trigger"]',
    )?.nextElementSibling
    if (menu) {
      const options = Array.from(
        menu.querySelectorAll("spl-select-option") || [],
      )
      const matched = findMatchingOption(options, value)
      if (matched && matched instanceof HTMLElement) {
        await clickDropdownOption(matched)
      }
    }
    input.blur()
    await delay.delay(100)
  }
}

const getAddButton = (isEmployment) => {
  const { sectionTag } = getSectionTags(isEmployment)
  const section = document.querySelector(sectionTag)
  if (section) {
    return section
      .querySelector("spl-button")
      .shadowRoot.querySelector("button")
  }
  return null
}

const getEditButtons = (isEmployment) => {
  const { sectionTag, containerTag } = getSectionTags(isEmployment)
  const entries = document
    ?.querySelector(sectionTag)
    ?.querySelectorAll(containerTag)
  if (entries?.length > 0) {
    const buttons = []
    entries.forEach((entry) => {
      const button = entry
        .querySelectorAll("oc-button")[0]
        ?.querySelector("spl-button")
        ?.shadowRoot?.querySelector("button")
      if (button) buttons.push(button)
    })
    return buttons
  }
  return null
}

const getSaveButtons = (isEmployment) => {
  const { sectionTag, containerTag } = getSectionTags(isEmployment)
  const entries = document
    .querySelector(sectionTag)
    ?.querySelectorAll(containerTag)
  if (entries?.length > 0) {
    const buttons = []
    entries.forEach((entry) => {
      const button = entry
        .querySelectorAll("oc-button")[1]
        ?.querySelector("spl-button")
        ?.shadowRoot?.querySelector("button")
      if (button) buttons.push(button)
    })
    return buttons
  }
  return null
}

const getDeleteButtons = (isEmployment) => {
  const { sectionTag, containerTag } = getSectionTags(isEmployment)
  const entries = document
    .querySelector(sectionTag)
    ?.querySelectorAll(containerTag)
  if (entries?.length > 0) {
    const buttons = []
    entries.forEach((entry) => {
      const button = entry
        .querySelectorAll("spl-button")[1]
        .shadowRoot.querySelector(
          "button[class*='c-spl-button--icon-only']",
        )
      buttons.push(button)
    })
    return buttons
  }
  return null
}

const getDialogConfirmButton = () => {
  const dialog = document.querySelector("spl-dialog")
  if (dialog) {
    return dialog
      .querySelectorAll("spl-button")[1]
      .shadowRoot.querySelector("button")
  }
  return null
}

const clickAddButton = async (isEmployment, count) => {
  const button = getAddButton(isEmployment)
  if (button) {
    for (let index = 0; index < count; index++) {
      button.click()
      await delay.delay(500)
    }
  } else {
    console.warn(
      `[clickAddButton] No add button found for ${
        isEmployment ? "experience" : "education"
      }`,
    )
  }
}

const clickSaveButton = async (isEmployment) => {
  const buttons = getSaveButtons(isEmployment)
  if (buttons) {
    for (const [, button] of buttons.entries()) {
      button.click()
      await delay.delay(50)
    }
  } else {
    console.warn(
      `[clickSaveButton] No save buttons found for ${
        isEmployment ? "experience" : "education"
      }`,
    )
  }
}

export {
  preFillForm,
  uploadResume,
  removeResume,
  clearSmartRecruitersCityField,
  clearSmartRecruitersInstitutionField,
  captureSmartRecruitersCityRequest,
  getSmartRecruitersInstitutionCandidate,
  captureSmartRecruitersInstitutionCandidates,
  fillSmartRecruitersInstitutionCandidate,
  fillResolvedSmartRecruitersCityField,
  fillResolvedSmartRecruitersInstitutionField,
  fillInputTextField,
  isSmartRecruitersDateInput,
  fillSmartRecruitersDateField,
  selectSmartRecruitersMonthYearDate,
  fillRadioGroupFiled,
  fillSelectField,
  isPhoneCountryCodeRule,
  fillPhoneCountryCodeField,
  getPhoneCountryCodeOptionElements,
  findPhoneCountryCodeOption,
  fillCheckboxField,
  fillMultiSelectField,
  clickAddButton,
  clickSaveButton,
}
