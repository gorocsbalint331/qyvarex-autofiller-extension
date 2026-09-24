// @ts-nocheck
/**
 * Jacobs DOM fill operations (inputs, Select2, sections, resume).
 */

import * as constants from "../../../constants.ts"
import * as filler from "../../shared/filler.ts"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as jacobsAnswer from "./answer.ts"
import * as rules from "./rules.ts"

const LOWERCASE_TEXT = `translate(normalize-space(.), '${rules.UPPERCASE_XPATH}', '${rules.LOWERCASE_XPATH}')`
const REMOVE_BUTTON_TEXT = `contains(${LOWERCASE_TEXT}, "remove") or contains(${LOWERCASE_TEXT}, "delete")`
const SUBMIT_BUTTON_SELECTOR =
  'form.tpt_wizard button[name="save"][type="submit"], form.tpt_wizard button.saveButton[type="submit"], form.tpt_wizard button[name="goto"][type="submit"], form.tpt_wizard button.gotoButton[type="submit"]'
const SELECT_ENABLE_TIMEOUT_MS = 2000
const SELECT_ENABLE_POLL_MS = 100
const SELECT2_SEARCH_SETTLE_MS = 1100
const SELECT2_CANDIDATE_POLL_MS = 100
const SELECT2_CANDIDATE_MAX_POLLS = 40

function stripNonAlphanumeric(value) {
  return value.replace(/[^a-zA-Z0-9\s]/g, "")
}

function isLooseTextMatch(left, right) {
  if (!left || !right) return false
  const normalizedLeft = stripNonAlphanumeric(left)
    .replace(/\s*\*\s*/g, "")
    .toLowerCase()
    .trim()
  const normalizedRight = stripNonAlphanumeric(right)
    .replace(/\s*\*\s*/g, "")
    .toLowerCase()
    .trim()
  return !!normalizedLeft && !!normalizedRight && normalizedLeft === normalizedRight
}

function isPlaceholderOptionText(text) {
  return /^(select an option|not required)$/i.test(text.trim())
}

function isStateOrProvinceRule(rule) {
  const label = jacobsAnswer
    .normalizeTextLower(rule.label)
    .replace(/[^a-z0-9]/g, "")
  return label.includes("state") || label.includes("province")
}

function expandStateMatchValues(rule, value) {
  const values = [value]
  if (isStateOrProvinceRule(rule)) {
    const code = value.replace(/\./g, "").toUpperCase()
    const mapped = constants.STATE_MAP[code]
    if (mapped && !values.includes(mapped)) values.push(mapped)
  }
  return values
}

function toValueArray(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item ?? "").trim()).filter((item) => item.length > 0)
  }
  const text = String(value ?? "").trim()
  return text ? [text] : []
}

function toBooleanAnswer(value) {
  const first = Array.isArray(value) ? value[0] : value
  const text = jacobsAnswer.normalizeTextLower(String(first ?? ""))
  return (
    first === true ||
    text === "true" ||
    text === "yes" ||
    text === "y" ||
    text === "1" ||
    text === "checked" ||
    text === "selected"
  )
}

function dispatchInputChange(element) {
  element.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))
  element.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }))
}

function isDisabledControl(element) {
  const control = element
  return (
    control.disabled === true ||
    element.hasAttribute?.("disabled") ||
    element.getAttribute?.("aria-disabled") === "true"
  )
}

async function waitForEnabled(element, timeoutMs = SELECT_ENABLE_TIMEOUT_MS) {
  const attempts = Math.ceil(timeoutMs / SELECT_ENABLE_POLL_MS)
  for (let attempt = 0; attempt < attempts && isDisabledControl(element); attempt++) {
    await delay.delay(SELECT_ENABLE_POLL_MS)
  }
  return !isDisabledControl(element)
}

export async function waitForJacobsSelectFieldEnabled(select) {
  return await waitForEnabled(select)
}

function dispatchLetterKey(element, type) {
  element.dispatchEvent(
    new KeyboardEvent(type, {
      bubbles: true,
      cancelable: true,
      key: "a",
      keyCode: 65,
      which: 65,
    }),
  )
}

function setNativeValue(element, value) {
  const proto = Object.getPrototypeOf(element)
  const descriptor = Object.getOwnPropertyDescriptor(proto, "value")
  if (descriptor?.set) descriptor.set.call(element, value)
  else element.value = value
}

function getJQuery() {
  if (typeof window === "undefined") return null
  const win = window
  return win.jQuery || win.$
}

async function clickAwayToCloseOverlays() {
  const root = document.body || document.documentElement
  if (!root) return
  const shim = document.createElement("div")
  shim.setAttribute("aria-hidden", "true")
  shim.style.position = "fixed"
  shim.style.left = "0"
  shim.style.top = "0"
  shim.style.width = "1px"
  shim.style.height = "1px"
  shim.style.opacity = "0"
  shim.style.pointerEvents = "auto"
  shim.style.zIndex = "2147483647"
  root.appendChild(shim)
  try {
    clickElement(shim)
    await delay.delay(50)
  } finally {
    shim.remove()
  }
}

function setSearchFieldValue(input, value) {
  const $ = getJQuery()
  setNativeValue(input, value)
  if (typeof $ === "function") {
    try {
      $(input).val(value).trigger("input").trigger("keyup")
      return
    } catch {
      // fall through to native events
    }
  }
  if (typeof InputEvent !== "undefined") {
    input.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        cancelable: true,
        inputType: "insertText",
        data: value,
      }),
    )
  } else {
    dispatchInputChange(input)
  }
  dispatchLetterKey(input, "keydown")
  dispatchLetterKey(input, "keyup")
}

function clickElement(element) {
  element.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  element.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  element.click()
}

function findMatchingOption(select, values) {
  return (
    Array.from(select.options).find((option) => {
      const text = option.textContent?.trim() || ""
      return (
        !isPlaceholderOptionText(text) &&
        values.some(
          (value) =>
            isLooseTextMatch(text, value) || isLooseTextMatch(option.value, value),
        )
      )
    }) || null
  )
}

async function waitForMatchingOption(select, values) {
  for (let attempt = 0; attempt < 20; attempt++) {
    const option = findMatchingOption(select, values)
    if (option) return option
    await delay.delay(150)
  }
  return null
}

function getLabelForId(id) {
  return id
    ? xpath.getFirstOrderedNodeSafe(`//label[@for=${xpath.escapeXPath(id)}][1]`)
    : null
}

function getChoiceDisplayName(input) {
  const label = getLabelForId(input.id)
  return (
    input.getAttribute("data-option-name") ||
    label?.textContent?.trim() ||
    input.value ||
    ""
  ).trim()
}

function isCheckedChoice(input) {
  return input.checked || input.getAttribute("aria-checked") === "true"
}

function normalizeMonthInputValue(value) {
  const text = value.trim()
  const yearMonth = text.match(/^(\d{4})[-/](\d{1,2})(?:[-/]\d{1,2})?$/)
  if (yearMonth) {
    return `${yearMonth[1]}-${yearMonth[2].padStart(2, "0")}`
  }
  const monthYear = text.match(/^(\d{1,2})[-/](\d{4})$/)
  return monthYear
    ? `${monthYear[2]}-${monthYear[1].padStart(2, "0")}`
    : text
}

function getSectionRows(section) {
  return xpath.getOrderedNodesSafe(
    section === "education"
      ? rules.jacobsXpaths.educationRows
      : rules.jacobsXpaths.experienceRows,
  )
}

function getSectionAddButton(section) {
  return xpath.getFirstOrderedNodeSafe(
    section === "education"
      ? rules.jacobsXpaths.educationAddButton
      : rules.jacobsXpaths.experienceAddButton,
  )
}

function getRowRemoveButton(row) {
  return xpath.getFirstOrderedNodeSafe(
    './/div[contains(concat(" ", normalize-space(@class), " "), " datasetField__button--remove ")]//a[contains(concat(" ", normalize-space(@class), " "), " action--remove ") and @role="button"]',
    row,
  )
}

function getResumeFileInput() {
  return (
    xpath.getFirstOrderedNodeSafe(rules.jacobsXpaths.resumeFileInput) ||
    xpath.getFirstOrderedNodeSafe(rules.jacobsXpaths.additionalFileInput)
  )
}

function getAttachmentFileField() {
  const input = getResumeFileInput()
  return input
    ? getFieldSpecAncestor(input)
    : xpath.getFirstOrderedNodeSafe(rules.jacobsXpaths.attachmentFileField)
}

function getFieldSpecAncestor(element) {
  return xpath.getFirstOrderedNodeSafe(
    './ancestor::div[contains(concat(" ", normalize-space(@class), " "), " fieldSpec ")][1]',
    element,
  )
}

export function getResumeRemoveButton() {
  const field = getAttachmentFileField()
  return field
    ? xpath.getFirstOrderedNodeSafe(
        `.//*[self::button or self::a][${REMOVE_BUTTON_TEXT}][not(ancestor::fieldset[contains(concat(" ", normalize-space(@class), " "), " datasetField__row ")])]`,
        field,
      )
    : null
}

export function resolveJacobsSubmitButtonFromTarget(target) {
  return target.closest?.(SUBMIT_BUTTON_SELECTOR)
}

export function isEducationSchoolRule(rule) {
  const label = jacobsAnswer.normalizeTextLower(rule.label)
  const input = rule.$input
  const fieldSpec = input ? getFieldSpecAncestor(input) : null
  const schemaFieldId = fieldSpec?.getAttribute("data-schema-field-id")
  const labelMatches = label.startsWith("college/university name")
  const schemaMatches = schemaFieldId === "2021"
  return labelMatches || schemaMatches
}

function getSelect2Container(select) {
  if (!select.id) return null
  const fieldSpec = getFieldSpecAncestor(select)
  const nested = xpath.getFirstOrderedNodeSafe(
    `.//span[contains(concat(" ", normalize-space(@class), " "), " select2 ") and (.//*[@id=${xpath.escapeXPath(`select2-${select.id}-container`)} or @aria-labelledby=${xpath.escapeXPath(`select2-${select.id}-container`)})]`,
    fieldSpec,
  )
  return (
    nested ||
    xpath.getFirstOrderedNodeSafe(
      './following-sibling::span[contains(concat(" ", normalize-space(@class), " "), " select2 ")][1]',
      select,
    )
  )
}

function getSelect2ResultsId(select) {
  return select.id ? `select2-${select.id}-results` : ""
}

function getSelect2Selection(container) {
  return (
    xpath.getFirstOrderedNodeSafe(
      './/span[contains(concat(" ", normalize-space(@class), " "), " select2-selection ")][1]',
      container,
    ) || container
  )
}

function getSelect2SearchField(select) {
  const resultsId = getSelect2ResultsId(select)
  if (resultsId) {
    const byAria = xpath.getFirstOrderedNodeSafe(
      `//input[contains(concat(" ", normalize-space(@class), " "), " select2-search__field ") and (@aria-controls=${xpath.escapeXPath(resultsId)} or @aria-owns=${xpath.escapeXPath(resultsId)})][1]`,
    )
    if (byAria) return byAria
    const byResults = xpath.getFirstOrderedNodeSafe(
      `//ul[@id=${xpath.escapeXPath(resultsId)}]/ancestor::*[contains(concat(" ", normalize-space(@class), " "), " select2-container--open ")][1]//input[contains(concat(" ", normalize-space(@class), " "), " select2-search__field ")][1]`,
    )
    if (byResults) return byResults
  }
  const container = getSelect2Container(select)
  return container
    ? xpath.getFirstOrderedNodeSafe(
        './/input[contains(concat(" ", normalize-space(@class), " "), " select2-search__field ")][1]',
        container,
      )
    : null
}

async function waitForSelect2SearchField(select) {
  for (let attempt = 0; attempt < 10; attempt++) {
    const field = getSelect2SearchField(select)
    if (field) return field
    await delay.delay(50)
  }
  return null
}

function getSelect2ResultNodes(select, predicate) {
  const resultsId = getSelect2ResultsId(select)
  return resultsId
    ? xpath.getOrderedNodesSafe(
        `//ul[@id=${xpath.escapeXPath(resultsId)}]//li[${predicate}]`,
      )
    : xpath.getOrderedNodesSafe(
        `//span[contains(concat(" ", normalize-space(@class), " "), " select2-container--open ")]//li[${predicate}]`,
      )
}

function getEnabledSelect2Options(select) {
  return getSelect2ResultNodes(
    select,
    'contains(concat(" ", normalize-space(@class), " "), " select2-results__option ") and not(@aria-disabled="true") and not(contains(concat(" ", normalize-space(@class), " "), " loading-results ")) and not(contains(concat(" ", normalize-space(@class), " "), " select2-results__message "))',
  )
}

function normalizeCandidateText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

export function getJacobsSelect2Candidate(optionNode, index) {
  const value =
    optionNode.getAttribute("data-select2-id")?.trim() ||
    optionNode.id?.trim() ||
    ""
  const text = normalizeCandidateText(optionNode.textContent)
  return value && text
    ? { candidate_key: `candidate-${index + 1}`, value, text }
    : null
}

function collectSelect2Candidates(select) {
  return getEnabledSelect2Options(select)
    .map(getJacobsSelect2Candidate)
    .filter((candidate) => !!candidate)
}

export async function closeJacobsEducationSelect2Search() {
  await clickAwayToCloseOverlays()
}

function isSelect2Open(select) {
  const container = getSelect2Container(select)
  if (container?.classList.contains("select2-container--open")) return true
  const resultsId = getSelect2ResultsId(select)
  return (
    !!resultsId &&
    !!xpath.getFirstOrderedNodeSafe(
      `//span[contains(concat(" ", normalize-space(@class), " "), " select2-container--open ")][.//ul[@id=${xpath.escapeXPath(resultsId)}]]`,
    )
  )
}

function isSelect2Loading(select) {
  const resultsId = getSelect2ResultsId(select)
  return (
    !!resultsId &&
    !!xpath.getFirstOrderedNodeSafe(
      `//ul[@id=${xpath.escapeXPath(resultsId)}]//li[contains(concat(" ", normalize-space(@class), " "), " loading-results ")]`,
    )
  )
}

function hasSelect2NoResults(select) {
  const messages = getSelect2ResultNodes(
    select,
    'contains(concat(" ", normalize-space(@class), " "), " select2-results__message ")',
  )
  return messages.some(
    (node) =>
      jacobsAnswer.normalizeTextLower(node.textContent) === "no results found",
  )
}

export async function captureJacobsEducationSelect2Candidates(
  select,
  searchInput,
  keepOpen = false,
) {
  try {
    const container = getSelect2Container(select)
    if (!container) return { status: "failed", candidates: [] }
    if (!isSelect2Open(select)) {
      clickElement(getSelect2Selection(container))
      await delay.delay(200)
    }

    const searchField =
      getSelect2SearchField(select) ?? (await waitForSelect2SearchField(select))
    if (!searchField) return { status: "failed", candidates: [] }

    searchField.focus()
    searchField.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
    setSearchFieldValue(searchField, searchInput)
    await delay.delay(SELECT2_SEARCH_SETTLE_MS)

    let candidates = []
    let previousSignature = ""
    let stablePolls = 0
    for (let poll = 0; poll < SELECT2_CANDIDATE_MAX_POLLS; poll += 1) {
      const loading = isSelect2Loading(select)
      const noResults = hasSelect2NoResults(select)
      candidates = collectSelect2Candidates(select)
      const signature = candidates
        .map((candidate) => `${candidate.value}\0${candidate.text}`)
        .join("\u0001")
      stablePolls =
        loading || signature !== previousSignature ? 0 : stablePolls + 1
      previousSignature = signature
      if (!loading && (noResults || stablePolls >= 2)) {
        return {
          status: noResults ? "no-results" : "ready",
          candidates,
        }
      }
      await delay.delay(SELECT2_CANDIDATE_POLL_MS)
    }
    return {
      status: hasSelect2NoResults(select) ? "no-results" : "ready",
      candidates,
    }
  } catch {
    return { status: "failed", candidates: [] }
  } finally {
    if (!keepOpen) await closeJacobsEducationSelect2Search()
  }
}

export async function fillResolvedJacobsEducationSelect2Candidate(
  select,
  candidate,
  searchText,
) {
  try {
    const capture = await captureJacobsEducationSelect2Candidates(
      select,
      searchText || candidate.text,
      true,
    )
    if (capture.status === "failed") return false

    const matchingCandidates = capture.candidates.filter(
      (item) => item.value === candidate.value && item.text === candidate.text,
    )
    if (matchingCandidates.length !== 1) return false

    const matchingNodes = getEnabledSelect2Options(select).filter(
      (node, index) => {
        const parsed = getJacobsSelect2Candidate(node, index)
        return (
          parsed?.value === candidate.value && parsed.text === candidate.text
        )
      },
    )
    if (matchingNodes.length !== 1) return false

    clickElement(matchingNodes[0])
    await delay.delay(250)
    dispatchInputChange(select)

    const selected = select.selectedOptions[0]
    const selectedText = normalizeCandidateText(selected?.textContent)
    return (
      !!selected &&
      selected.value === candidate.value &&
      selectedText === candidate.text
    )
  } catch {
    return false
  } finally {
    await closeJacobsEducationSelect2Search()
  }
}

export function getOtherSchoolInputForSelect(select) {
  const row = xpath.getFirstOrderedNodeSafe(
    './ancestor::fieldset[contains(concat(" ", normalize-space(@class), " "), " datasetField__row ")][1]',
    select,
  )
  return row
    ? xpath.getFirstOrderedNodeSafe(
        './/div[@data-schema-field-id="2104" and not(@hidden) and not(ancestor::*[@hidden])]//input[not(@type="hidden") and not(@hidden) and not(ancestor::*[@hidden])][1]',
        row,
      )
    : null
}

async function waitForOtherSchoolInput(select) {
  for (let attempt = 0; attempt < 10; attempt++) {
    const input = getOtherSchoolInputForSelect(select)
    if (input) return input
    await delay.delay(150)
  }
  return null
}

async function waitForSelect2NotLoading(select, maxAttempts) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (!isSelect2Loading(select)) return
    await delay.delay(150)
  }
}

async function waitForSelect2OptionMatch(select, value, isAutocomplete) {
  const maxAttempts = isAutocomplete ? 30 : 15
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const options = getEnabledSelect2Options(select)
    const match = options.find((option) =>
      isLooseTextMatch(option.textContent?.trim() || "", value),
    )
    if (match) return match
    if (hasSelect2NoResults(select)) break
    await delay.delay(150)
  }
  return null
}

async function openSelect2AndFindOption(select, value) {
  const container = getSelect2Container(select)
  if (!container) return null
  const isAutocomplete = rules.isAutoCompleteSelect(select)
  if (!isSelect2Open(select)) {
    clickElement(getSelect2Selection(container))
    await delay.delay(200)
  }
  if (isAutocomplete) await waitForSelect2NotLoading(select, 20)

  let searchField = getSelect2SearchField(select)
  if (!searchField) searchField = await waitForSelect2SearchField(select)
  if (searchField) {
    searchField.focus()
    searchField.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
    const $ = getJQuery()
    if (typeof $ === "function") {
      try {
        $(searchField).val("").trigger("input")
      } catch {
        // fall through
      }
    } else {
      setNativeValue(searchField, "")
      dispatchInputChange(searchField)
    }
    await delay.delay(50)
    setSearchFieldValue(searchField, value)
    if (isAutocomplete) {
      await delay.delay(100)
      await waitForSelect2NotLoading(select, 30)
    } else {
      await delay.delay(300)
    }
  }
  return await waitForSelect2OptionMatch(select, value, isAutocomplete)
}

async function fillSelect2SingleValue(select, value) {
  const option = await openSelect2AndFindOption(select, value)
  if (option) {
    clickElement(option)
    await delay.delay(250)
    dispatchInputChange(select)
    await clickAwayToCloseOverlays()
    return true
  }
  await clickAwayToCloseOverlays()
  return false
}

async function fillSelect2Values(select, values) {
  let filled = false
  for (const value of values) {
    if (await fillSelect2SingleValue(select, value)) filled = true
  }
  return filled
}

export async function fillSelect2FieldWithOtherFallback(select, values) {
  const first = values[0]
  return (
    !!first &&
    (!!(await fillSelect2SingleValue(select, first)) ||
      (await fillJacobsSchoolOtherFallback(select, first)))
  )
}

export async function fillJacobsSchoolOtherFallback(select, value) {
  if (!value || !(await fillSelect2SingleValue(select, "Other"))) return false
  const otherInput = await waitForOtherSchoolInput(select)
  return !!otherInput && (await fillInputTextField(otherInput, value), true)
}

export async function fillInputTextField(input, value) {
  if (!input) return
  if (!(await waitForEnabled(input))) return false
  const text =
    input instanceof HTMLInputElement && input.type === "month"
      ? normalizeMonthInputValue(value)
      : value
  input.focus()
  input.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
  await delay.delay(100)
  setNativeValue(input, "")
  dispatchInputChange(input)
  await delay.delay(100)
  setNativeValue(input, text)
  dispatchInputChange(input)
  input.blur()
  input.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
  await delay.delay(100)
}

export async function fillSelectField(rule, value) {
  const values = toValueArray(value)
  if (!values.length) return
  const select = rule.$input
  if (!select || !(await waitForEnabled(select))) return false

  if (select.classList.contains("select2-hidden-accessible")) {
    return isEducationSchoolRule(rule)
      ? await fillSelect2FieldWithOtherFallback(select, [values[0]])
      : await fillSelect2Values(select, [values[0]])
  }

  const first = values[0]
  if (isPlaceholderOptionText(first)) return false
  const matchValues = expandStateMatchValues(rule, first)
  const option = await waitForMatchingOption(select, matchValues)
  if (!option) return false

  select.value = option.value
  option.selected = true
  dispatchInputChange(select)
  await delay.delay(100)

  const selected = select.selectedOptions[0]
  const selectedText = selected?.textContent?.trim() || ""
  if (
    !selected ||
    isPlaceholderOptionText(selectedText) ||
    !matchValues.some(
      (match) =>
        isLooseTextMatch(selectedText, match) ||
        isLooseTextMatch(selected.value, match),
    )
  ) {
    return false
  }
}

export async function fillMultiSelectField(rule, value) {
  const values = jacobsAnswer.toMultiValueArray(value)
  if (!values.length) return
  const select = rule.$input
  if (!select || !(await waitForEnabled(select))) return false

  if (select.classList.contains("select2-hidden-accessible")) {
    return await fillSelect2Values(select, values)
  }

  for (const option of Array.from(select.options)) {
    const text = option.textContent?.trim() || ""
    if (isPlaceholderOptionText(text)) {
      option.selected = false
      continue
    }
    option.selected = values.some(
      (match) =>
        isLooseTextMatch(text, match) || isLooseTextMatch(option.value, match),
    )
  }
  dispatchInputChange(select)
  await delay.delay(100)
}

export async function fillCheckboxField(rule, value) {
  const checkboxes = Array.from(
    rule.$checkboxs || (rule.$input ? [rule.$input] : []),
  ).filter((element) => element instanceof HTMLInputElement)
  if (!checkboxes.length) return false

  const values = toValueArray(value)
  if (checkboxes.length === 1) {
    const checked = toBooleanAnswer(value)
    const checkbox = checkboxes[0]
    if (checkbox.checked !== checked) {
      if (!(await waitForEnabled(checkbox))) return false
      clickElement(checkbox)
      await delay.delay(100)
    }
    return
  }

  for (const checkbox of checkboxes) {
    const displayName = getChoiceDisplayName(checkbox)
    const shouldCheck = values.some(
      (match) =>
        isLooseTextMatch(displayName, match) ||
        isLooseTextMatch(checkbox.value, match),
    )
    if (checkbox.checked !== shouldCheck) {
      if (!(await waitForEnabled(checkbox))) return false
      clickElement(checkbox)
      await delay.delay(100)
    }
  }
}

export async function fillRadioGroupFiled(rule, value) {
  const first = toValueArray(value)[0]
  if (!first) return
  const radios = Array.from(
    rule.$radios || (rule.$input ? [rule.$input] : []),
  ).filter((element) => element instanceof HTMLInputElement)
  if (!radios.length) return false

  const match = radios.find((radio) => {
    const displayName = getChoiceDisplayName(radio)
    return (
      isLooseTextMatch(radio.value, first) ||
      isLooseTextMatch(displayName, first)
    )
  })
  if (!match) {
    throw new filler.FillError(
      `(RadioGroup) No option "${first}" found for label: "${rule.label}"`,
    )
  }
  if (!isCheckedChoice(match)) {
    if (!(await waitForEnabled(match))) return false
    clickElement(match)
    await delay.delay(100)
  }
}

export async function uploadResume(resumeInfo, onRequired, onFilled) {
  const input = getResumeFileInput()
  if (!input) return
  await dom.uploadFiles(
    input,
    await answerMethods.fetchPdfAsBlob(resumeInfo),
    onRequired,
    onFilled,
    "Resume/CV",
  )
  await delay.delay(500)
}

export async function removeResume() {
  const removeButton = getResumeRemoveButton()
  if (removeButton) {
    clickElement(removeButton)
    await delay.delay(500)
  }
  const input = getResumeFileInput()
  if (input?.value) {
    input.value = ""
    input.dispatchEvent(new Event("change", { bubbles: true }))
  }
}

export async function preFillForm() {
  const acceptButton = xpath.getFirstOrderedNodeSafe(
    `//*[self::button or self::a][contains(translate(normalize-space(.), '${rules.UPPERCASE_XPATH}', '${rules.LOWERCASE_XPATH}'), "accept")]`,
  )
  acceptButton?.click()

  const applyButton = xpath.getFirstOrderedNodeSafe(
    `//*[self::button or self::a or @role="button"][contains(translate(normalize-space(.), '${rules.UPPERCASE_XPATH}', '${rules.LOWERCASE_XPATH}'), "apply") and not(contains(translate(normalize-space(.), '${rules.UPPERCASE_XPATH}', '${rules.LOWERCASE_XPATH}'), "submit"))]`,
  )
  if (applyButton && !xpath.getFirstOrderedNodeSafe(rules.jacobsXpaths.form)) {
    clickElement(applyButton)
    await delay.delay(500)
  }
  await delay.delay(500)
}

export async function addEducationSection(desiredCount) {
  if (desiredCount <= 0) return
  let currentCount = getSectionRows("education").length
  if (currentCount >= desiredCount) return
  while (currentCount < desiredCount) {
    const addButton = getSectionAddButton("education")
    if (!addButton) return
    clickElement(addButton)
    await delay.delay(300)
    const nextCount = getSectionRows("education").length
    if (nextCount <= currentCount) return
    currentCount = nextCount
  }
}

export async function adaptEducationSectionCount(desiredCount) {
  if (desiredCount < 0) return
  let rows = getSectionRows("education")
  while (rows.length > desiredCount) {
    const lastRow = rows[rows.length - 1]
    const removeButton = getRowRemoveButton(lastRow)
    if (!removeButton) return
    clickElement(removeButton)
    await delay.delay(300)
    const nextRows = getSectionRows("education")
    if (nextRows.length >= rows.length) return
    rows = nextRows
  }
  await addEducationSection(desiredCount)
}

export async function addEmploymentSection(desiredCount) {
  if (desiredCount <= 0) return
  let currentCount = getSectionRows("employment").length
  if (currentCount >= desiredCount) return
  while (currentCount < desiredCount) {
    const addButton = getSectionAddButton("employment")
    if (!addButton) return
    clickElement(addButton)
    await delay.delay(300)
    const nextCount = getSectionRows("employment").length
    if (nextCount <= currentCount) return
    currentCount = nextCount
  }
}

export async function adaptEmploymentSectionCount(desiredCount) {
  if (desiredCount < 0) return
  let rows = getSectionRows("employment")
  while (rows.length > desiredCount) {
    const lastRow = rows[rows.length - 1]
    const removeButton = getRowRemoveButton(lastRow)
    if (!removeButton) return
    clickElement(removeButton)
    await delay.delay(300)
    const nextRows = getSectionRows("employment")
    if (nextRows.length >= rows.length) return
    rows = nextRows
  }
  await addEmploymentSection(desiredCount)
}
