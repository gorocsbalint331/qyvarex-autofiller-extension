// @ts-nocheck
/**
 * Avature — form rule extraction, Select2 option probing, and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as avatureAnswer from "./answer.ts"

const EDUCATION_HINTS = ["school", "degree", "university"]
const EMPLOYMENT_HINTS = ["employment", "work", "job", "company", "employer", "title"]

const LABEL_XPATH =
  './/label | .//legend | .//div[contains(@class, "tc_formLabel")] | .//div[contains(@class, "labelText")] | .//div[contains(@class, "datasetlabelText")] | .//p[contains(@class, "tc_formLabel")] | .//span[contains(@class, "tc_formTitle")]'

const DATASET_ENTRY_XPATH =
  './/div[contains(@id, "multipleDatasetEntry_") and not(contains(@class, "TableSampleRow"))] | .//fieldset[contains(@class, "datasetField__row") and not(contains(@class, "datasetField__row--sample"))]'

const DATASET_WRAPPER_SELECTOR =
  ".multipleDatasetWrapper, .multipleDataset, .MultipleDatasetEntryFormField"
const DATASET_ROW_SELECTOR =
  '[id*="multipleDatasetEntry_"], .datasetField__row'
const DATASET_ANY_SELECTOR = `${DATASET_WRAPPER_SELECTOR}, ${DATASET_ROW_SELECTOR}`

const GRADUATION_MONTH_YEAR_DESCRIPTION =
  "Return value must be in YYYY-MM format."
const DEFAULT_DATE_DESCRIPTION = "YYYY-MM"

function isGraduationMonthYearLabel(label) {
  return (
    avatureAnswer.normalizeAvatureLabel(label).toLowerCase() ===
    "graduation month/year"
  )
}

function readAttrOrValue(el, attr) {
  return attr === "value" && el?.value
    ? String(el.value).trim()
    : String(el?.getAttribute?.(attr) || "").trim()
}

function inferDateDescription(rule) {
  const input = rule.$input || null
  const inputType = String(
    input?.getAttribute?.("type") || input?.type || "",
  ).toLowerCase()
  if (inputType === "date") return "YYYY-MM-DD"
  if (inputType === "month") return "YYYY-MM"

  const hints = [
    "placeholder",
    "pattern",
    "title",
    "aria-label",
    "aria-description",
    "min",
    "max",
    "value",
  ]
    .map((attr) => readAttrOrValue(input, attr))
    .filter(Boolean)
    .join(" ")
    .toLowerCase()

  const ymd = hints.match(/(yyyy|yy)[-/\s]*mm[-/\s]*dd/)
  if (ymd || /\b\d{4}-\d{2}-\d{2}\b/.test(hints)) return "YYYY-MM-DD"

  const mdy = hints.match(/mm[-/\s]*dd[-/\s]*(yyyy|yy)/)
  if (mdy) return mdy[1] === "yy" ? "MM/DD/YY" : "MM/DD/YYYY"

  return /\b\d{4}-\d{2}\b/.test(hints) || /(yyyy|yy)[-/\s]*mm/.test(hints)
    ? "YYYY-MM"
    : DEFAULT_DATE_DESCRIPTION
}

function isCurrentPositionLabel(label) {
  const normalized = avatureAnswer.normalizeAvatureLabel(label).toLowerCase()
  return (
    normalized.includes("current") &&
    !normalized.includes("employer") &&
    !normalized.includes("title") &&
    !normalized.includes("start date")
  )
}

function isDateLabelWithKeyword(label, keyword) {
  const normalized = avatureAnswer.normalizeAvatureLabel(label).toLowerCase()
  return normalized.includes(keyword) && normalized.includes("date")
}

function ensureHiddenEndDateOption(children, options) {
  const hasCurrent = children.some((child) =>
    isCurrentPositionLabel(child.label),
  )
  const hasEnd = options.some((opt) =>
    isDateLabelWithKeyword(String(opt.label || ""), "end"),
  )
  if (!hasCurrent || hasEnd) return options

  const startRule = children.find((child) =>
    isDateLabelWithKeyword(child.label, "start"),
  )
  const description = startRule
    ? inferDateDescription(startRule)
    : DEFAULT_DATE_DESCRIPTION
  console.info("[Avature][Employment] add-hidden-end-date-option", {
    description,
  })
  return [
    ...options,
    {
      label: "End Date",
      required: false,
      type: "date",
      description,
    },
  ]
}

function isSelect2HiddenSelect(select) {
  const className = String(select.className || "")
  return (
    className.split(/\s+/).includes("select2-hidden-accessible") ||
    select.hasAttribute("data-select2-id")
  )
}

function needsSelect2OptionProbe(label) {
  const normalized = avatureAnswer.normalizeAvatureLabel(label).toLowerCase()
  return (
    normalized === "major(s)" ||
    normalized === "minor(s)" ||
    (normalized.includes("education") &&
      normalized.includes("degree") &&
      normalized.includes("certification") &&
      normalized.includes("training"))
  )
}

function createDomEvent(type, init = { bubbles: true, cancelable: true }) {
  const isMouse = /^mouse|click$/i.test(type)
  const Ctor =
    isMouse && typeof MouseEvent === "function" ? MouseEvent : Event
  return new Ctor(type, init)
}

function createKeyboardEvent(type, key) {
  const Ctor = typeof KeyboardEvent === "function" ? KeyboardEvent : Event
  const event = new Ctor(type, {
    bubbles: true,
    cancelable: true,
    key,
    code: key === "Escape" ? "Escape" : key,
  })
  try {
    Object.defineProperty(event, "key", { value: key })
  } catch {
    /* ignore */
  }
  try {
    Object.defineProperty(event, "keyCode", {
      value: key === "Escape" ? 27 : 0,
    })
    Object.defineProperty(event, "which", {
      value: key === "Escape" ? 27 : 0,
    })
  } catch {
    /* ignore */
  }
  return event
}

function findSelect2Container(select) {
  const field =
    select.closest(
      ".datasetfieldSpec, .datasetFieldContainer, .fieldSpecContainer, .fieldSpec, fieldset",
    )
  const inField = field?.querySelector(".select2-container")
  if (inField) return inField

  const sibling = select.nextElementSibling
  if (sibling?.classList?.contains("select2-container")) return sibling

  const key = select.id || select.name
  const cssEscape = globalThis.CSS?.escape
  if (!key || typeof cssEscape !== "function") return null

  const selection = document.querySelector(
    `.select2-selection.${cssEscape(`select2Container${key}`)}`,
  )
  return selection?.closest(".select2-container")
}

function isUnusableSelect2Option(option) {
  const text = option.textContent?.trim().toLowerCase() || ""
  const className = String(option.className || "")
  return (
    !text ||
    option.getAttribute("role") === "group" ||
    !!option.querySelector(".select2-results__options") ||
    !!option.querySelector(".select2-results__group") ||
    option.getAttribute("aria-disabled") === "true" ||
    className.includes("select2-results__option--disabled") ||
    className.includes("select2-results__option--load-more") ||
    text.includes("no results") ||
    text.includes("searching") ||
    text.includes("loading")
  )
}

function getElementByIdSafe(id) {
  return id && typeof document !== "undefined"
    ? document.getElementById(id)
    : null
}

function collectResultsControlIds(select, selection, searchField) {
  const ids = [
    selection.getAttribute("aria-controls"),
    selection.getAttribute("aria-owns"),
    searchField?.getAttribute("aria-controls"),
    searchField?.getAttribute("aria-owns"),
  ]
  if (select.id) ids.push(`select2-${select.id}-results`)
  return Array.from(new Set(ids.filter(Boolean)))
}

function isResultsListbox(el) {
  return !!(
    el?.classList?.contains("select2-results__options") ||
    el?.getAttribute("role") === "listbox"
  )
}

function findOpenResultsContainer(controlIds = []) {
  if (controlIds.length > 0) {
    for (const id of controlIds) {
      const el = getElementByIdSafe(id)
      if (isResultsListbox(el)) return el
    }
    return null
  }

  const selectors = [
    ".select2-container--open .select2-results__options",
    ".select2-dropdown .select2-results__options",
    '.select2-results__options[aria-expanded="true"]',
    '.select2-results__options[aria-hidden="false"]',
  ]
  for (const selector of selectors) {
    const el = document.querySelector(selector)
    if (el) return el
  }
  return null
}

function snapshotFilteredOptions(resultsContainer) {
  const options = Array.from(
    resultsContainer.querySelectorAll(".select2-results__option"),
  )
  const filteredOptions = Array.from(
    new Set(
      options
        .filter((opt) => !isUnusableSelect2Option(opt))
        .map((opt) =>
          avatureAnswer.normalizeAvatureLabel(opt.textContent || ""),
        )
        .filter(Boolean),
    ),
  )
  return {
    filteredOptionCount: filteredOptions.length,
    filteredOptions,
  }
}

function findOpenDropdowns(controlIds) {
  if (controlIds.length === 0) {
    return Array.from(
      document.querySelectorAll(
        ".select2-container--open .select2-dropdown, .select2-dropdown",
      ),
    )
  }
  const found = []
  for (const id of controlIds) {
    const el = getElementByIdSafe(id)
    const dropdown =
      el?.closest(".select2-dropdown") || el?.closest(".select2-container")
    if (dropdown) found.push(dropdown)
  }
  return Array.from(new Set(found))
}

function tryCloseSelect2ViaJquery(select) {
  const view =
    select.ownerDocument?.defaultView ||
    (typeof window !== "undefined" ? window : undefined)
  const $ = view?.jQuery || view?.$
  if (typeof $ !== "function") return false
  try {
    $(select).select2?.("close")
    $(select).trigger?.("select2:close")
    return true
  } catch {
    return false
  }
}

async function waitForFilteredOptions(controlIds, resultsContainer) {
  const started = Date.now()
  let current = resultsContainer
  let snapshot = snapshotFilteredOptions(current)
  while (
    snapshot.filteredOptionCount === 0 &&
    Date.now() - started < 2500
  ) {
    await delay.delay(100)
    current = findOpenResultsContainer(controlIds) || current
    snapshot = snapshotFilteredOptions(current)
  }
  return { resultsContainer: current, snapshot }
}

function forceCloseSelect2(select, selection, searchField, controlIds = []) {
  const focusTargets = [searchField, selection].filter(Boolean)
  tryCloseSelect2ViaJquery(select)

  for (const target of focusTargets) {
    target.dispatchEvent(createKeyboardEvent("keydown", "Escape"))
    target.dispatchEvent(createKeyboardEvent("keyup", "Escape"))
    target.dispatchEvent(createKeyboardEvent("keypress", "Escape"))
  }
  for (const target of focusTargets) {
    target.dispatchEvent(createDomEvent("focusout"))
    target.blur?.()
  }

  document.body?.dispatchEvent(createDomEvent("mousedown"))
  document.body?.dispatchEvent(createDomEvent("mouseup"))
  document.body?.dispatchEvent(createDomEvent("click"))
  select.dispatchEvent(createDomEvent("focusout"))
  select.blur?.()

  const active = document.activeElement
  if (active && focusTargets.includes(active)) active.blur?.()

  for (const dropdown of findOpenDropdowns(controlIds)) dropdown.remove()

  for (const open of Array.from(
    document.querySelectorAll(".select2-container--open"),
  )) {
    open.classList.remove("select2-container--open")
    open.classList.remove("select2-container--above")
    open.classList.remove("select2-container--below")
  }
}

async function probeSelect2Options(select) {
  const container = findSelect2Container(select)
  const selection = container?.querySelector(".select2-selection")
  if (!selection) {
    forceCloseSelect2(select, null, null)
    return []
  }

  const searchField = selection.querySelector(".select2-search__field")
  const controlIds = collectResultsControlIds(select, selection, searchField)
  const openTargets = [searchField, selection].filter(Boolean)

  try {
    for (const target of openTargets) {
      target.focus?.()
      target.dispatchEvent(createDomEvent("mousedown"))
      target.dispatchEvent(createDomEvent("mouseup"))
      target.click()
      if (target.tagName?.toLowerCase() === "input") {
        target.dispatchEvent(createDomEvent("input", { bubbles: true }))
      }
      await delay.delay(150)
      if (findOpenResultsContainer(controlIds)) break
    }

    const started = Date.now()
    let results = null
    while (Date.now() - started < 1500 && !(results = findOpenResultsContainer(controlIds))) {
      await delay.delay(50)
    }
    if (!results) return []

    const waited = await waitForFilteredOptions(controlIds, results)
    return waited.snapshot.filteredOptions
  } finally {
    forceCloseSelect2(select, selection, searchField, controlIds)
  }
}

async function enrichMajorMinorSelect2Options(rules) {
  for (const rule of rules) {
    if (!needsSelect2OptionProbe(rule.label)) continue
    const input = rule.$input
    if (input?.tagName?.toLowerCase() !== "select" || !isSelect2HiddenSelect(input)) {
      continue
    }
    if (Array.isArray(rule.options) && rule.options.length > 0) continue
    const options = await probeSelect2Options(input)
    if (options.length > 0) rule.options = options
  }
}

function isAutocompleteSelectField(section, select) {
  return (
    (section.classList.contains("SelectFormField") &&
      section.classList.contains("AutoCompleteField")) ||
    (select.classList.contains("SelectFormField") &&
      select.classList.contains("AutoCompleteField") &&
      select.classList.contains("AutocompleteSelectFieldChildHtmlElement"))
  )
}

function isAutocompleteCheckboxListField(section, select) {
  return (
    (section.classList.contains("CheckBoxListFormField") &&
      section.classList.contains("AutoCompleteField")) ||
    (select.classList.contains("CheckBoxListFormField") &&
      select.classList.contains("AutoCompleteField") &&
      select.classList.contains("AutocompleteSelectFieldChildHtmlElement"))
  )
}

function readSelectOptionNames(select) {
  return Array.from(select.options)
    .map(
      (opt) =>
        opt.getAttribute("data-option-name") || opt.textContent || "",
    )
    .map(avatureAnswer.normalizeAvatureLabel)
    .filter(Boolean)
}

async function enrichSelect2RuleOptions(rule, section) {
  if (
    rule.type !== enums.FIELD_TYPE.SELECT &&
    rule.type !== enums.FIELD_TYPE.MULTI_SELECT
  ) {
    return
  }

  const select = rule.$input
  if (!select) return

  const isMultiAutocomplete = isAutocompleteCheckboxListField(section, select)
  const isSingleAutocomplete = isAutocompleteSelectField(section, select)
  if (
    !isSelect2HiddenSelect(select) &&
    !isSingleAutocomplete &&
    !isMultiAutocomplete
  ) {
    return
  }

  const existing = Array.isArray(rule.options) ? rule.options : []
  if (isMultiAutocomplete && existing.length > 0) return

  const probed = await probeSelect2Options(select)
  const isPhoneCountry =
    rule.label === phoneCountryCode.PHONE_COUNTRY_CODE_LABEL

  if (probed.length === 0) {
    if (isPhoneCountry) {
      rule.description = phoneCountryCode.PHONE_COUNTRY_CODE_DESCRIPTION
    }
    return
  }

  if (isPhoneCountry) delete rule.description

  const seen = new Set()
  rule.options = [...existing, ...probed].filter((opt) => {
    const key = avatureAnswer.normalizeAvatureLabel(opt).toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function isVisibleElement(el) {
  if (!el || el.hidden || el.getAttribute("aria-hidden") === "true") {
    return false
  }
  let node = el
  while (node) {
    if (node.hidden || node.getAttribute("aria-hidden") === "true") {
      return false
    }
    const style = window.getComputedStyle(node)
    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      style.visibility === "collapse"
    ) {
      return false
    }
    node = node.parentElement
  }
  return el.getClientRects().length > 0
}

export function getLabelElement(section) {
  return xpath.getFirstOrderedNodeSafe(LABEL_XPATH, section)
}

function getRadioContainer(section) {
  return xpath.getFirstOrderedNodeSafe(
    './/div[contains(@class, "RadioButtonListContainer")]',
    section,
  )
}

function extractLabelText(labelEl) {
  const clone = labelEl.cloneNode(true)
  clone
    .querySelectorAll(
      '.requiredField, .labelRequiredIcon, span.requiredField, span[class*="required"]',
    )
    .forEach((node) => node.remove())

  const textNode = Array.from(clone.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.nodeValue?.trim(),
  )
  if (textNode?.nodeValue?.trim()) {
    return avatureAnswer.normalizeAvatureLabel(
      textNode.nodeValue.trim().split("\n")[0],
    )
  }

  const nested = clone.querySelector(".labelText, .datasetlabelText")
  if (nested) {
    nested
      .querySelectorAll(
        '.requiredField, .labelRequiredIcon, span.requiredField, span[class*="required"]',
      )
      .forEach((node) => node.remove())
    const text = nested.textContent?.trim() || ""
    if (text) {
      return avatureAnswer.normalizeAvatureLabel(text.split("\n")[0])
    }
  }

  const fallback = clone.textContent ?? ""
  return avatureAnswer.normalizeAvatureLabel(fallback.trim().split("\n")[0])
}

function pageHasPhoneCountryCodeField() {
  if (typeof document === "undefined") return false
  return Array.from(
    document.querySelectorAll(".fieldSpec, [id*='fieldSpecContainer']"),
  ).some((section) => {
    const labelEl = getLabelElement(section)
    return !!(
      labelEl &&
      avatureAnswer.isAvaturePhoneCountryCodeLabel(extractLabelText(labelEl))
    )
  })
}

export function isRequired(section) {
  return !!xpath.getFirstOrderedNodeSafe(
    './/span[contains(@class, "formrequiredField")] | .//span[contains(@class, "labelRequiredIcon")] | .//span[contains(@class, "requiredField")]',
    section,
  )
}

export function getNormalSectionInfo(section) {
  const labelElement = getLabelElement(section)
  const radioParent = getRadioContainer(section)
  if (!labelElement && !radioParent) return null

  const labelText = labelElement ? extractLabelText(labelElement) : ""
  if (avatureAnswer.shouldIgnoreAvatureFieldLabel(labelText) && !radioParent) {
    return null
  }

  return {
    section,
    labelElement,
    labelText,
    required: isRequired(section),
  }
}

function collectRulesFromDatasetEntries(root) {
  const entries = xpath.getOrderedNodesSafe(DATASET_ENTRY_XPATH, root)
  const rules = []
  const seen = new Set()

  for (const entry of entries) {
    const rows = collectDatasetRowInfo(entry)
    for (const rowInfo of rows) {
      const { row, labelElement, labelText, required } = rowInfo
      const input = xpath.getFirstOrderedNodeSafe(
        ".//select | .//input | .//textarea",
        row,
      )
      const inputKey =
        input?.id ||
        input?.name ||
        input?.getAttribute?.("data-select2-id") ||
        ""
      const dedupeKey = `${labelText}:${input?.tagName || "ROW"}:${
        inputKey ||
        avatureAnswer.normalizeAvatureLabel(row.textContent || "")
      }`
      const labelKey = labelText.trim().toLowerCase()
      if (seen.has(dedupeKey) || seen.has(labelKey)) continue
      seen.add(dedupeKey)
      seen.add(labelKey)

      const rule = getRule(row, labelElement, labelText, required)
      if (rule && rule.label && rule.label.trim() !== "") rules.push(rule)
    }
  }

  return rules
}

export function collectDatasetRowInfo(entry) {
  const containers = xpath.getOrderedNodesSafe(
    './/div[contains(@id, "datasetFieldContainer")] | .//div[contains(@id, "fieldSpecContainer")] | .//div[contains(concat(" ", normalize-space(@class), " "), " datasetfieldSpec ")] | .//div[contains(concat(" ", normalize-space(@class), " "), " fieldSpec ")]',
    entry,
  )
  const rows = []

  for (const container of containers) {
    if (!isVisibleElement(container)) continue

    const inputs = xpath.getOrderedNodesSafe(
      ".//select | .//input | .//textarea",
      container,
    )
    const hasVisibleControl = inputs.some(
      (input) =>
        input.tagName?.toLowerCase() !== "input" || input.type !== "hidden",
    )
    if (!hasVisibleControl) continue

    const labelElement = getLabelElement(container)
    if (!labelElement) continue

    const labelText = extractLabelText(labelElement)
    if (!labelText || avatureAnswer.shouldIgnoreAvatureFieldLabel(labelText)) {
      continue
    }

    const requiredIcon = xpath.getFirstOrderedNodeSafe(
      './/span[contains(@class, "labelRequiredIcon")]',
      container,
    )
    rows.push({
      row: container,
      labelElement,
      labelText,
      required: !!requiredIcon,
    })
  }

  return rows
}

export async function extractRules() {
  const rules = []
  let datasetSectionCount = 0
  let ordinarySectionCount = 0
  let unsupportedDatasetSectionCount = 0

  const sections = xpath
    .getOrderedNodesSafe(
      '//fieldset[contains(@class, "Section")] | //div[contains(@class, "Section")]',
      document.body,
    )
    .filter((section) => isVisibleElement(section))

  for (const section of sections) {
    const fieldSpecs = xpath.getOrderedNodesSafe(
      './/div[contains(@id, "fieldSpecContainer") and not(@hidden)]',
      section,
    )
    const seenKeys = new Set()
    const uniqueSpecs = []

    for (const spec of fieldSpecs) {
      if (!isVisibleElement(spec)) continue
      const idMatch = spec.id.match(/^(fieldSpecContainer\d+)/)
      if (!idMatch) continue

      const datasetParent = spec.closest(DATASET_WRAPPER_SELECTOR)
      if ((datasetParent && datasetParent !== spec) || spec.classList.contains("formContainer")) {
        continue
      }

      const formContainer = spec.closest(".formContainer")
      const dedupeKey = formContainer ? spec.id : idMatch[1]
      if (seenKeys.has(dedupeKey)) continue
      seenKeys.add(dedupeKey)
      uniqueSpecs.push(spec)
    }

    for (const spec of uniqueSpecs) {
      const isDataset =
        spec.matches(DATASET_WRAPPER_SELECTOR) ||
        !!spec.querySelector(DATASET_ROW_SELECTOR)

      if (isDataset) {
        datasetSectionCount += 1
        const datasetRules = await getDatasetSectionRules(spec)
        if (datasetRules.length > 0) rules.push(...datasetRules)
        else unsupportedDatasetSectionCount += 1
        continue
      }

      const info = getNormalSectionInfo(spec)
      if (!info) continue
      const rule = getRule(
        info.section,
        info.labelElement,
        info.labelText,
        info.required,
      )
      if (rule) {
        ordinarySectionCount += 1
        await enrichSelect2RuleOptions(rule, info.section)
        rules.push(rule)
      }
    }
  }

  console.info("[Avature][extractRules] scan-complete", {
    fieldsetCount: sections.length,
    datasetSectionCount,
    unsupportedDatasetSectionCount,
    ordinarySectionCount,
    ruleCount: rules.length,
  })

  return rules.filter((rule) => rule.label !== "")
}

export function getRule(section, labelElement, labelText, required) {
  const radioParent = getRadioContainer(section)
  if (
    avatureAnswer.shouldIgnoreAvatureFieldLabel(labelText) &&
    !radioParent
  ) {
    return null
  }

  const textInput = xpath.getFirstOrderedNodeSafe(
    './/input[@type="text" or @type="email" or @type="tel" or @type="number" or @type="month" or @type="date"]',
    section,
  )
  if (textInput) {
    const description =
      avatureAnswer.isAvaturePhoneNumberLabel(labelText) &&
      pageHasPhoneCountryCodeField()
        ? phoneCountryCode.LOCAL_PHONE_DESCRIPTION
        : undefined
    const type = labelText.toLowerCase().includes("date")
      ? enums.FIELD_TYPE.DATE
      : enums.FIELD_TYPE.TEXT
    return {
      type,
      label: avatureAnswer.getAvatureRequestFieldLabel(labelText),
      required,
      $input: textInput,
      $label: labelElement,
      ...(description ? { description } : {}),
    }
  }

  const textarea = xpath.getFirstOrderedNodeSafe(".//textarea", section)
  if (textarea) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label: labelText,
      required,
      $input: textarea,
      $label: labelElement,
    }
  }

  const select = xpath.getFirstOrderedNodeSafe(".//select", section)
  if (select) {
    const isMulti = isAutocompleteCheckboxListField(section, select)
    const optionNodes = xpath.getOrderedNodesSafe(".//option", select)
    const options = isMulti
      ? readSelectOptionNames(select)
      : optionNodes
          .map((opt) => opt.textContent?.trim() || "")
          .filter(Boolean)
    const isAutocomplete = isAutocompleteSelectField(section, select)

    if (options.length > 0 || isSelect2HiddenSelect(select) || isAutocomplete) {
      const rule = {
        type: isMulti
          ? enums.FIELD_TYPE.MULTI_SELECT
          : enums.FIELD_TYPE.SELECT,
        label: avatureAnswer.getAvatureRequestFieldLabel(labelText),
        required,
        $input: select,
        $label: labelElement,
        options,
        optionsMode:
          !avatureAnswer.isAvaturePhoneCountryCodeLabel(labelText) &&
          (isAutocomplete || isMulti)
            ? "searchable"
            : "complete",
      }
      if (
        avatureAnswer.isAvaturePhoneCountryCodeLabel(labelText) &&
        options.length === 0
      ) {
        rule.description = phoneCountryCode.PHONE_COUNTRY_CODE_DESCRIPTION
      }
      return rule
    }
  }

  const checkbox = xpath.getFirstOrderedNodeSafe(
    './/input[contains(@type, "checkbox")]',
    section,
  )
  if (checkbox) {
    const checkboxes = xpath.getOrderedNodesSafe(
      './/input[contains(@type, "checkbox")]',
      section,
    )
    if (checkboxes.length > 0) {
      return {
        type: enums.FIELD_TYPE.CHECKBOX,
        label: labelText,
        required,
        $checkboxs: checkboxes,
        $input: checkboxes[0],
        $label: labelElement,
        options: checkboxes.map((node) => node.textContent.trim()),
      }
    }
  }

  if (!radioParent) return

  const radios = xpath.getOrderedNodesSafe(
    './/input[@type="radio"]',
    radioParent,
  )
  if (!radios || radios.length === 0) return

  let radioLabel = labelText || ""
  const fieldset = radioParent.closest("fieldset")
  if (fieldset) {
    const legend = fieldset.querySelector("legend")
    if (legend?.textContent?.trim()) {
      radioLabel = avatureAnswer.normalizeAvatureLabel(legend.textContent)
    }
  }

  if (!radioLabel || radioLabel.trim() === "*" || radioLabel.trim() === "") {
    const inferred = inferRadioLabelFromPreviousField(radioParent)
    if (inferred) {
      radioLabel = avatureAnswer.normalizeAvatureLabel(inferred)
    }
  }

  radioLabel = avatureAnswer.normalizeAvatureLabel(radioLabel)
  if (avatureAnswer.shouldIgnoreAvatureFieldLabel(radioLabel)) return null

  const options = radios
    .map((radio) => {
      const dataName = radio.getAttribute("data-option-name")
      if (dataName) return dataName.trim()
      if (radio.id) {
        const forLabel = radioParent.querySelector(`label[for="${radio.id}"]`)
        if (forLabel?.textContent) return forLabel.textContent.trim()
      }
      return ""
    })
    .filter(Boolean)

  return {
    type: enums.FIELD_TYPE.RADIOGROUP,
    label: radioLabel,
    required,
    $input: null,
    $label: labelElement ?? null,
    $radioParent: radioParent,
    options,
  }
}

export async function getEduRule(root) {
  if (!root) return []
  const children = collectRulesFromDatasetEntries(root)
  await enrichMajorMinorSelect2Options(children)
  if (children.length === 0) return []

  return [
    {
      type: enums.FIELD_TYPE.EDUCATION,
      label: "Education",
      required: true,
      children,
      options: children.map((child) => {
        const option = {
          label: child.label.trim(),
          required: child.required,
          type:
            child.type === enums.FIELD_TYPE.SELECT ||
            child.type === enums.FIELD_TYPE.LISTBOX
              ? "listbox"
              : child.type === enums.FIELD_TYPE.MULTI_SELECT
                ? "multi-select"
                : child.type === enums.FIELD_TYPE.DATE
                  ? "date"
                  : child.type === enums.FIELD_TYPE.CHECKBOX
                    ? "checkbox"
                    : "text",
        }
        if (child.type === enums.FIELD_TYPE.DATE) {
          option.description = inferDateDescription(child)
        }
        if (isGraduationMonthYearLabel(child.label)) {
          option.description = GRADUATION_MONTH_YEAR_DESCRIPTION
        }
        if (child.type === enums.FIELD_TYPE.CHECKBOX) {
          option.options =
            child.options && Array.isArray(child.options) ? child.options : []
        } else if (child.options && Array.isArray(child.options)) {
          option.options = child.options
        }
        return option
      }),
    },
  ]
}

export async function getExpRule(root) {
  if (!root) return []
  const children = collectRulesFromDatasetEntries(root)
  if (children.length === 0) return []

  const options = children.map((child) => {
    const option = {
      label: child.label.trim(),
      required: child.required,
      type:
        child.type === enums.FIELD_TYPE.SELECT ||
        child.type === enums.FIELD_TYPE.LISTBOX
          ? "listbox"
          : child.type === enums.FIELD_TYPE.MULTI_SELECT
            ? "multi-select"
            : child.type === enums.FIELD_TYPE.DATE
              ? "date"
              : child.type === enums.FIELD_TYPE.CHECKBOX
                ? "checkbox"
                : "text",
    }
    if (child.type === enums.FIELD_TYPE.DATE) {
      option.description = inferDateDescription(child)
    }
    if (child.label === "Employer") {
      option.label = "Company Name"
      option.type = "text"
    }
    if (child.type === enums.FIELD_TYPE.CHECKBOX) {
      option.options =
        child.options && Array.isArray(child.options) ? child.options : []
    } else if (child.options && Array.isArray(child.options)) {
      option.options = child.options
    }
    return option
  })

  return [
    {
      type: enums.FIELD_TYPE.EMPLOYMENT,
      label: "Employment",
      required: true,
      children,
      options: ensureHiddenEndDateOption(children, options),
    },
  ]
}

export async function addEduExp(root) {
  const addLink = xpath.getFirstOrderedNodeSafe(
    './/a[@id and contains(@id, "addRowFor")]',
    root,
  )
  if (!addLink) return

  const click = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
  })
  addLink.addEventListener("click", (event) => event.preventDefault(), {
    once: true,
  })
  addLink.dispatchEvent(click)
  await delay.delay(200)
}

export async function clearEduExp() {
  const wrappers = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "multipleDatasetWrapper")] | //div[contains(@class, "multipleDataset")]',
    document,
  )
  if (wrappers.length === 0) return

  for (const wrapper of wrappers) {
    const entries = xpath.getOrderedNodesSafe(
      './/div[contains(@id, "multipleDatasetEntry_") and not(contains(@id, "_sample")) and not(contains(@class, "TableSampleRow"))]',
      wrapper,
    )
    if (entries.length <= 1) continue
    for (let i = 1; i < entries.length; i++) {
      const remove = xpath.getFirstOrderedNodeSafe(
        './/a[contains(normalize-space(text()), "remove")]',
        entries[i],
      )
      if (remove) {
        remove.click()
        await delay.delay(150)
      }
    }
  }
  await delay.delay(500)
}

function inferRadioLabelFromPreviousField(radioParent) {
  const fieldSpec = radioParent.closest(".fieldSpec")
  if (!fieldSpec) return null

  let sibling = fieldSpec.previousElementSibling
  let skippedControlSibling = false

  while (sibling) {
    if (sibling.classList.contains("fieldSpec")) {
      const heading = sibling.querySelector("h1, h2, h3, h4, h5, h6")
      const headingText = avatureAnswer.normalizeAvatureLabel(
        heading?.textContent || "",
      )
      if (headingText) return headingText

      if (skippedControlSibling) {
        sibling = sibling.previousElementSibling
        continue
      }
      skippedControlSibling = true
      if (
        sibling.querySelector(
          'input:not([type="hidden"]), textarea, select',
        )
      ) {
        sibling = sibling.previousElementSibling
        continue
      }

      const description = sibling.querySelector(
        ".WizardFieldDescription, .tc_formDescription, .description",
      )
      const descriptionText = avatureAnswer.normalizeAvatureLabel(
        description?.textContent || "",
      )
      if (descriptionText) {
        return avatureAnswer.shouldIgnoreAvatureFieldLabel(descriptionText)
          ? null
          : descriptionText
      }
    }
    sibling = sibling.previousElementSibling
  }

  return null
}

async function getDatasetSectionRules(root) {
  const rules = []
  const labels = xpath.getOrderedNodesSafe(LABEL_XPATH, root)
  if (!labels) return []

  const normalizedLabels = labels.map((label) =>
    extractLabelText(label).toLowerCase().trim(),
  )

  if (
    EDUCATION_HINTS.some((hint) =>
      normalizedLabels.some((label) => label.includes(hint)),
    )
  ) {
    const edu = await getEduRule(root)
    if (edu) rules.push(...edu)
    return rules
  }

  if (
    EMPLOYMENT_HINTS.some((hint) =>
      normalizedLabels.some((label) => label.includes(hint)),
    )
  ) {
    const exp = await getExpRule(root)
    if (exp) rules.push(...exp)
    return rules
  }

  return []
}

function snapshotFieldLabel(section) {
  const label = section.querySelector?.("label, legend")
  const text = avatureAnswer.normalizeAvatureLabel(label?.textContent || "")
  if (avatureAnswer.shouldIgnoreAvatureFieldLabel(text)) return ""
  return avatureAnswer.isAvaturePhoneCountryCodeLabel(text)
    ? phoneCountryCode.PHONE_COUNTRY_CODE_LABEL
    : text
}

function snapshotChoiceLabel(section, control) {
  const dataName = control.getAttribute("data-option-name")
  if (dataName?.trim()) {
    return avatureAnswer.normalizeAvatureLabel(dataName)
  }
  if (control.id) {
    const forLabel = section.querySelector?.(`label[for="${control.id}"]`)
    const text = avatureAnswer.normalizeAvatureLabel(
      forLabel?.textContent || "",
    )
    if (text) return text
  }
  return avatureAnswer.normalizeAvatureLabel(control.value || "")
}

function snapshotSelectValue(section, select) {
  const rendered = section.querySelector?.(".select2-selection__rendered")
  const renderedText = avatureAnswer.normalizeAvatureLabel(
    rendered?.getAttribute("title") || rendered?.textContent || "",
  )
  if (renderedText) return renderedText

  const checked = select.querySelector("option:checked")
  return avatureAnswer.normalizeAvatureLabel(
    checked?.textContent || select.value || "",
  )
}

function snapshotFileValue(section, input) {
  const names = Array.from(input.files || [])
    .map((file) => file.name)
    .filter(Boolean)
  if (names.length > 0) return names.join(", ")
  return avatureAnswer.normalizeAvatureLabel(
    section.querySelector?.(".screenReaderVisibility")?.textContent || "",
  )
}

function snapshotSectionValue(section) {
  const file = section.querySelector?.('input[type="file"]')
  if (file) return snapshotFileValue(section, file)

  const radio = section.querySelector?.('input[type="radio"]:checked')
  if (radio) return snapshotChoiceLabel(section, radio)

  const checkboxes = Array.from(
    section.querySelectorAll?.('input[type="checkbox"]') || [],
  )
  if (checkboxes.length > 0) {
    return checkboxes
      .filter((box) => box.checked)
      .map((box) => snapshotChoiceLabel(section, box))
      .filter(Boolean)
  }

  const select = section.querySelector?.("select")
  if (select) return snapshotSelectValue(section, select)

  const textarea = section.querySelector?.("textarea")
  if (textarea) return textarea.value || ""

  const input = section.querySelector?.('input:not([type="hidden"])')
  return (input && input.value) || ""
}

function sectionHasFillableControl(section) {
  return !!section.querySelector?.(
    'input:not([type="hidden"]), textarea, select',
  )
}

function isInsideDatasetSection(section) {
  return !!section.closest(DATASET_ANY_SELECTOR)
}

function hostsDatasetRows(section) {
  return !!section.querySelector?.(DATASET_ROW_SELECTOR)
}

function isSampleDatasetRow(row) {
  const id = row.id.toLowerCase()
  const className = String(row.className || "").toLowerCase()
  return (
    id.includes("_sample") ||
    className.includes("tablesamplerow") ||
    className.includes("datasetfield__row--sample")
  )
}

function collectFieldSnapshot(root, options = {}) {
  const snapshot = {}
  const sections = Array.from(
    root.querySelectorAll?.(".fieldSpec, [id*='fieldSpecContainer']") || [],
  )
  const seen = new Set()

  for (const section of sections) {
    if (seen.has(section)) continue
    seen.add(section)

    if (
      !options.includeDatasetSections &&
      (isInsideDatasetSection(section) || hostsDatasetRows(section))
    ) {
      continue
    }
    if (!sectionHasFillableControl(section)) continue

    const label = snapshotFieldLabel(section)
    if (!label) continue
    snapshot[label] = snapshotSectionValue(section)
  }

  return snapshot
}

function classifyDatasetType(root) {
  const labels = Array.from(
    root.querySelectorAll?.("label, legend, .datasetlabelText") || [],
  ).map((el) =>
    avatureAnswer.normalizeAvatureLabel(el.textContent || "").toLowerCase().trim(),
  )

  if (labels.length === 0) {
    const fallback = avatureAnswer
      .normalizeAvatureLabel(root.textContent || "")
      .toLowerCase()
      .trim()
    if (fallback) labels.push(fallback)
  }

  if (
    labels.some(
      (label) =>
        label.includes("education") ||
        EDUCATION_HINTS.some((hint) => label.includes(hint)),
    )
  ) {
    return "education"
  }

  if (
    labels.some(
      (label) =>
        label.includes("experience") ||
        EMPLOYMENT_HINTS.some((hint) => label.includes(hint)),
    )
  ) {
    return "employment"
  }

  return null
}

function collectDatasetRoots(root) {
  const roots = new Set()
  Array.from(root.querySelectorAll?.(DATASET_WRAPPER_SELECTOR) || []).forEach(
    (node) => roots.add(node),
  )

  for (const row of Array.from(
    root.querySelectorAll?.(DATASET_ROW_SELECTOR) || [],
  )) {
    if (isSampleDatasetRow(row)) continue
    const wrapper = row.closest(DATASET_WRAPPER_SELECTOR)
    if (wrapper) {
      roots.add(wrapper)
      continue
    }
    roots.add(row.parentElement || row)
  }

  return Array.from(roots)
}

export function getFormSnapshot(root = document.body) {
  return collectFieldSnapshot(root)
}

export function getAdditionalFormSnapshotData(root = document.body) {
  const byType = {}
  const seenRowsByType = new Map()
  const skippedDuplicateRowsByDatasetType = {}
  const datasetRoots = collectDatasetRoots(root)

  for (const datasetRoot of datasetRoots) {
    const datasetType = classifyDatasetType(datasetRoot)
    if (!datasetType) continue

    let seenRows = seenRowsByType.get(datasetType)
    if (!seenRows) {
      seenRows = new Set()
      seenRowsByType.set(datasetType, seenRows)
    }

    const rows = Array.from(
      datasetRoot.querySelectorAll?.(DATASET_ROW_SELECTOR) || [],
    ).filter((row) => !isSampleDatasetRow(row))

    for (const row of rows) {
      if (seenRows.has(row)) {
        skippedDuplicateRowsByDatasetType[datasetType] =
          (skippedDuplicateRowsByDatasetType[datasetType] || 0) + 1
        continue
      }
      seenRows.add(row)

      const rowSnapshot = collectFieldSnapshot(row, {
        includeDatasetSections: true,
      })
      if (Object.keys(rowSnapshot).length === 0) continue
      if (!byType[datasetType]) byType[datasetType] = []
      byType[datasetType].push(rowSnapshot)
    }
  }

  if (Object.keys(skippedDuplicateRowsByDatasetType).length > 0) {
    console.info(
      "[Avature][Snapshot] skipped duplicate nested dataset rows",
      { skippedDuplicateRowsByDatasetType },
    )
  }

  return byType
}
