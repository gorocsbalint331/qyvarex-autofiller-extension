// @ts-nocheck
/**
 * BrassRing — form rule extraction and snapshot reading.
 */

import * as messaging from "@plasmohq/messaging"
import * as enums from "../../../core/enums.js"

const FIELD_CONTAIN_SELECTOR = ".fieldcontain"
const RESUME_SECTION_SELECTOR = "#resumewidget.resumesection"
const ATTACHMENT_CATEGORY_SELECTOR = "#AttachementCatagory"
const EDUCATION_LIST_SELECTOR =
  "ul.educationList, ul[class*='educationList'], ul[aria-label^='Education history']"
const EXPERIENCE_LIST_SELECTOR =
  "ul.experienceList, ul[class*='experienceList'], ul[aria-label^='Work experience'], ul[aria-label^='Experience']"
const IMMERSIVE_TRANSLATE_SELECTOR =
  ".immersive-translate-target-wrapper, [data-immersive-translate-translation-element-mark]"

export const BRASSRING_GPA_DESCRIPTION =
  "Return GPA as numbers only, for example 3.88. Do not include a denominator such as /4.00."

const DISABILITY_SIGNATURE_DATE_DESCRIPTION =
  "This is the signature date for Voluntary Self-Identification of Disability. Return today's date."

const MOST_RECENT_EDUCATION_LABEL = "This is my most recent education"

export function buildBrassringDateFormatDescription(format, options = {}) {
  const formatText = format.trim() || "M/D/YYYY"
  const pickerHint = options.monthPicker
    ? "Use the opened month picker."
    : "Use the opened date picker."
  return `${pickerHint} Return the value in ${formatText} format.`
}

const PLACEHOLDER_OPTION_LABELS = new Set([
  "choose...",
  "placeholder_choose",
  "select",
  "select one",
  "- select -",
  "-- select --",
  "no matches",
])

const FULL_PAGE_AUTOCOMPLETE_PAGE_SIZE = 1000

const REGULAR_ONLY_COMPOSITE_LABELS = new Set([
  "major area of study",
  "responsibilities",
])

const EMPLOYER_SLOT_RE = /^Employer(\d+)$/i
const EMPLOYER_JOB_TITLE_SLOT_RE = /^Employer(\d+)JobTitle$/i

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function isElementVisible(el) {
  let node = el
  while (node && node !== document.documentElement) {
    const style = window.getComputedStyle(node)
    if (
      node.hidden ||
      node.getAttribute("aria-hidden") === "true" ||
      node.classList.contains("hidden") ||
      node.classList.contains("hiddenField") ||
      node.classList.contains("hide") ||
      style.display === "none" ||
      style.visibility === "hidden" ||
      style.visibility === "collapse"
    ) {
      return false
    }
    node = node.parentElement
  }
  return true
}

function getCleanText(el) {
  if (!el) return ""
  const clone = el.cloneNode(true)
  clone
    .querySelectorAll(IMMERSIVE_TRANSLATE_SELECTOR)
    .forEach((node) => node.remove())
  return (clone.textContent || "")
    .replace(/\*/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function getFieldLabelElement(field) {
  return field.querySelector("label.ListView, label[id$='-label'], label")
}

function getFieldLabelText(field) {
  return getCleanText(getFieldLabelElement(field))
}

function normalizeAttrToken(value) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function maybeAppendOtherToLabel(label, input) {
  if (!input || /\bother\b/i.test(label)) return label
  const base = normalizeAttrToken(label)
  if (!base) return label
  const mentionsOther = [
    input.getAttribute("aria-label"),
    input.getAttribute("title"),
    input.getAttribute("name"),
    input.getAttribute("dbfieldname"),
    input.id,
  ]
    .map((value) => normalizeAttrToken(value || ""))
    .some((token) => /\bother\b/i.test(token) && token.includes(base))
  return mentionsOther ? `${label} other` : label
}

function isCompositeOnlyLabelOutsideLists(field, label) {
  return (
    REGULAR_ONLY_COMPOSITE_LABELS.has(label.trim().toLowerCase()) &&
    !field.closest(`${EDUCATION_LIST_SELECTOR}, ${EXPERIENCE_LIST_SELECTOR}`)
  )
}

function isAttachmentCategoryField(field) {
  return !!field.querySelector(ATTACHMENT_CATEGORY_SELECTOR)
}

function shouldSkipField(field, label) {
  return (
    isCompositeOnlyLabelOutsideLists(field, label) ||
    isAttachmentCategoryField(field)
  )
}

function isFieldRequired(field) {
  return (
    !!field.querySelector(".requiredFieldIndicator") ||
    !!field.querySelector("[aria-required='true'], .required, [required]")
  )
}

function isDisabilitySignatureDateField(field, label) {
  if (!/^date$/i.test(label.trim())) return false
  let sibling = field.previousElementSibling
  for (let i = 0; sibling && i < 6; i++) {
    if (
      getCleanText(sibling).includes(
        "Voluntary Self-Identification of Disability",
      )
    ) {
      return true
    }
    sibling = sibling.previousElementSibling
  }
  return false
}

function isInsideFieldContain(el, field) {
  return el.closest(FIELD_CONTAIN_SELECTOR) === field
}

function isMeaningfulOptionLabel(label) {
  const text = label.trim().toLowerCase()
  return !!text && !PLACEHOLDER_OPTION_LABELS.has(text)
}

function selectHasPlaceholderOptions(select) {
  return Array.from(select.options).some((option) => {
    const text = getOptionDisplayText(option).trim().toLowerCase()
    return PLACEHOLDER_OPTION_LABELS.has(text)
  })
}

function dedupeOptionLabels(labels) {
  const seen = new Set()
  const result = []
  for (const label of labels) {
    const trimmed = label.trim()
    const key = trimmed.toLowerCase()
    if (!isMeaningfulOptionLabel(trimmed) || seen.has(key)) continue
    seen.add(key)
    result.push(trimmed)
  }
  return result
}

function getOptionDisplayText(option) {
  const text =
    getCleanText(option) || option.getAttribute("aria-label") || option.label || ""
  if (text.trim()) return text.trim()
  const value = option.value.trim()
  return /^\d+$/.test(value) ? "" : value
}

function getSelectOptionLabels(select) {
  return dedupeOptionLabels(Array.from(select.options).map(getOptionDisplayText))
}

function isYesNoOptionList(labels) {
  const lower = labels.map((label) => label.trim().toLowerCase())
  return lower.length === 2 && lower.includes("yes") && lower.includes("no")
}

function isStateProvinceLabel(label) {
  const normalized = normalizeAttrToken(label).replace(/[\/]+/g, " ")
  return [
    "state",
    "province",
    "state province",
    "state region province",
    "state region province county",
    "current state",
    "current province",
    "current state province",
  ].includes(normalized)
}

function findSearchWidgetInput(field, select) {
  const byId = select.id
    ? document.getElementById(`${select.id}-input`)
    : null
  return (
    byId ||
    field.querySelector(
      "input.ui-search-widget, input.ui-autocomplete-input, input[name^='visible-input-']",
    )
  )
}

function getBackingSelectFromSearchInput(input) {
  const selectId = input.id?.endsWith("-input") ? input.id.slice(0, -6) : ""
  return selectId ? document.getElementById(selectId) : null
}

function clickElement(el) {
  el.scrollIntoView({ block: "center", inline: "nearest" })
  el.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  el.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
  el.dispatchEvent(new MouseEvent("click", { bubbles: true }))
}

function resolveAutocompleteListboxes(field, select, input) {
  const ids = [
    input.getAttribute("aria-owns"),
    input.getAttribute("aria-controls"),
    input.id ? `${input.id}_listbox` : "",
    select.id ? `${select.id}-input_listbox` : "",
    select.id ? `${select.id}-menu` : "",
  ].filter(Boolean)
  const byId = ids
    .map((id) => document.getElementById(id))
    .filter(Boolean)
  if (byId.length > 0) return byId

  const inField = Array.from(
    field.querySelectorAll(
      ".ui-autocomplete, [role='listbox'], ul[id$='_listbox']",
    ),
  )
  if (inField.length > 0) return inField

  return Array.from(
    document.querySelectorAll(
      ".ui-autocomplete.ui-front, ul.ui-autocomplete, [role='listbox']",
    ),
  ).filter(isElementVisible)
}

function readAutocompleteOptionLabels(field, select, input) {
  const nodes = resolveAutocompleteListboxes(field, select, input).flatMap(
    (listbox) =>
      Array.from(
        listbox.querySelectorAll(
          "li.ui-menu-item, .ui-menu-item-wrapper, [role='option'], li",
        ),
      ),
  )
  return dedupeOptionLabels(
    nodes.map((node) =>
      getCleanText(node.querySelector(".ui-menu-item-wrapper") || node),
    ),
  )
}

function closeAutocomplete(input) {
  const $ = window.jQuery || window.$
  try {
    if ($?.fn?.autocomplete) $(input).autocomplete("close")
  } catch {
    /* ignore */
  }
  input.dispatchEvent(
    new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
  )
  input.blur()
}

async function openFullPageAutocompleteViaBackground(input) {
  if (!input.id) return false
  try {
    const result = await messaging.sendToBackground({
      name: "openBrassringFullPageAutocomplete",
      body: { inputId: input.id },
    })
    return result?.opened === true
  } catch {
    return false
  }
}

async function hydrateAutocompleteOptions(
  field,
  select,
  input,
  options = {},
) {
  const readOptions = () => {
    const native = options.captureNativeOptions
      ? getSelectOptionLabels(select)
      : []
    return native.length > 1
      ? native
      : readAutocompleteOptionLabels(field, select, input)
  }

  let current = readOptions()
  if (current.length > 0 && !options.forceRefresh) return current

  const beforeKey = current.map((label) => label.toLowerCase()).join("\u0001")
  const toggle = field.querySelector(
    ".ui-icon-triangle-1-s, [ng-click*='blanketSearch']",
  )
  const $ = window.jQuery || window.$
  const previousPageSize = window.pageSize

  const applyFullPage = () => {
    if (options.fullPage) {
      window.pageSize = FULL_PAGE_AUTOCOMPLETE_PAGE_SIZE
      input.pageIndex = 0
    }
  }
  const restorePageSize = () => {
    if (options.fullPage) {
      if (previousPageSize === undefined) delete window.pageSize
      else window.pageSize = previousPageSize
    }
  }

  try {
    const openedViaBackground =
      !!options.fullPage && (await openFullPageAutocompleteViaBackground(input))
    if (!openedViaBackground) {
      input.focus()
      const clickTarget = toggle || input
      const onPointer = () => applyFullPage()
      if (options.fullPage) {
        clickTarget.addEventListener("mousedown", onPointer, {
          capture: true,
          once: true,
        })
        clickTarget.addEventListener("click", onPointer, {
          capture: true,
          once: true,
        })
      } else {
        applyFullPage()
      }
      clickElement(clickTarget)
      if (!toggle) applyFullPage()
      try {
        if (!toggle && $?.fn?.autocomplete) {
          $(input).autocomplete("search", "-1")
        }
      } catch {
        /* ignore */
      }
    }

    let next = []
    for (let attempt = 0; attempt < 12; attempt++) {
      await delay(100)
      next = readOptions()
      const afterKey = next.map((label) => label.toLowerCase()).join("\u0001")
      if (next.length > 0 && (!options.forceRefresh || afterKey !== beforeKey)) {
        break
      }
    }
    return next
  } finally {
    restorePageSize()
    closeAutocomplete(input)
  }
}

async function maybeHydrateRuleOptions(rule) {
  if (
    rule.type !== enums.FIELD_TYPE.SELECT &&
    rule.type !== enums.FIELD_TYPE.MULTI_SELECT &&
    rule.type !== enums.FIELD_TYPE.SEARCH
  ) {
    return
  }

  const input = rule.$input
  if (!input) return

  const select =
    input instanceof HTMLSelectElement
      ? input
      : input instanceof HTMLInputElement
        ? getBackingSelectFromSearchInput(input)
        : null
  const field = input.closest(FIELD_CONTAIN_SELECTOR)
  if (
    !select ||
    !field ||
    (rule.type !== enums.FIELD_TYPE.SEARCH &&
      (rule.options || []).length > 0 &&
      !selectHasPlaceholderOptions(select))
  ) {
    return
  }

  const searchInput =
    input instanceof HTMLInputElement
      ? input
      : findSearchWidgetInput(field, select)
  if (!searchInput) return

  const stateProvince = isStateProvinceLabel(rule.label)
  const initialRenderedCount = stateProvince
    ? readAutocompleteOptionLabels(field, select, searchInput).length
    : 0
  const options = await hydrateAutocompleteOptions(field, select, searchInput, {
    forceRefresh: stateProvince,
    fullPage: stateProvince,
    captureNativeOptions: stateProvince,
  })
  if (options.length > 0) rule.options = options
  if (stateProvince) {
    console.info(
      `[BrassRingAutofill] state-options-hydrated ${JSON.stringify({
        label: rule.label,
        selectId: select.id,
        initialRenderedCount,
        optionCount: options.length,
        requestedPageSize: FULL_PAGE_AUTOCOMPLETE_PAGE_SIZE,
      })}`,
    )
  }
}

function getRadioOptionLabel(radio) {
  const forLabel = radio.id
    ? document.querySelector(`label[for="${radio.id}"]`)
    : null
  const label = forLabel || radio.closest("label")
  return (
    getCleanText(label) ||
    getCleanText(radio.nextElementSibling) ||
    radio.value
  )
}

function getCheckboxOptionLabel(checkbox) {
  const forLabel = checkbox.id
    ? document.querySelector(`label[for="${checkbox.id}"]`)
    : null
  const label = forLabel || checkbox.closest("label")
  return (
    getCleanText(label) ||
    getCleanText(checkbox.nextElementSibling) ||
    checkbox.value ||
    "Yes"
  )
}

function extractChoiceRule(field, label, labelEl, required) {
  const radios = Array.from(
    field.querySelectorAll("input[type='radio']"),
  ).filter((el) => !el.disabled && isInsideFieldContain(el, field))
  if (radios.length > 0) {
    return {
      type: enums.FIELD_TYPE.RADIOGROUP,
      label,
      required,
      options: radios.map(getRadioOptionLabel).filter(Boolean),
      $input: radios[0],
      $label: labelEl,
      $radioParent: field,
    }
  }

  const checkboxes = Array.from(
    field.querySelectorAll("input[type='checkbox']"),
  ).filter((el) => !el.disabled && isInsideFieldContain(el, field))
  if (checkboxes.length > 0) {
    return {
      type: enums.FIELD_TYPE.CHECKBOX,
      label,
      required,
      options:
        checkboxes.length === 1
          ? ["Yes", "No"]
          : checkboxes.map(getCheckboxOptionLabel).filter(Boolean),
      $label: labelEl,
      $checkboxs: checkboxes,
    }
  }
  return null
}

function extractStandaloneCheckboxRule(checkbox) {
  const forLabel = checkbox.id
    ? document.querySelector(`label[for="${checkbox.id}"]`)
    : null
  const closestLabel = checkbox.closest("label")
  const next = checkbox.nextElementSibling
  const prev = checkbox.previousElementSibling
  const field = checkbox.closest(FIELD_CONTAIN_SELECTOR)
  const fieldLabel = field ? getFieldLabelElement(field) : null
  const parent = checkbox.parentElement
  const labelEl =
    forLabel ||
    closestLabel ||
    (getCleanText(next) ? next : null) ||
    (getCleanText(prev) ? prev : null) ||
    fieldLabel ||
    parent
  const label =
    getCleanText(forLabel) ||
    getCleanText(closestLabel) ||
    getCleanText(next) ||
    getCleanText(prev) ||
    getCleanText(fieldLabel) ||
    getCleanText(parent) ||
    checkbox.getAttribute("aria-label") ||
    checkbox.title ||
    checkbox.value
  if (!labelEl || !label) return null
  return {
    type: enums.FIELD_TYPE.CHECKBOX,
    label,
    required: false,
    options: ["Yes", "No"],
    $label: labelEl,
    $checkboxs: [checkbox],
  }
}

function extractSelectRule(field, label, labelEl, required) {
  const select = Array.from(field.querySelectorAll("select")).find(
    (el) => !el.disabled && isInsideFieldContain(el, field),
  )
  if (!select) return null

  const searchInput = findSearchWidgetInput(field, select)
  const options = getSelectOptionLabels(select)
  const input = searchInput || select

  if (isYesNoOptionList(options)) {
    console.info(
      `[BrassRingAutofill] binary-select-rule-extracted ${JSON.stringify({
        label,
        required,
        id: select.id,
        name: select.name,
        options,
        hasSelectmenuButton: !!(
          select.id && document.getElementById(`${select.id}-button`)
        ),
      })}`,
    )
  }

  if (select.multiple || select.classList.contains("multiselect")) {
    return {
      type: enums.FIELD_TYPE.MULTI_SELECT,
      label,
      required,
      options,
      $input: input,
      $label: labelEl,
    }
  }
  if (searchInput) {
    return {
      type: enums.FIELD_TYPE.SEARCH,
      label,
      required,
      options,
      $input: searchInput,
      $label: labelEl,
    }
  }
  return {
    type: enums.FIELD_TYPE.SELECT,
    label,
    required,
    options,
    $input: input,
    $label: labelEl,
  }
}

function extractTextOrDateRule(field, label, labelEl, required) {
  const input = Array.from(
    field.querySelectorAll(
      "textarea, input:not([type='hidden']):not([type='file']):not([type='radio']):not([type='checkbox']):not([type='button']):not([type='submit'])",
    ),
  ).find(
    (el) =>
      !(
        el.disabled ||
        !isInsideFieldContain(el, field) ||
        (el instanceof HTMLInputElement &&
          (el.classList.contains("ui-search-widget") ||
            el.name?.startsWith("visible-input-") ||
            el.id?.endsWith("-input") ||
            el.type === "password"))
      ) && isElementVisible(el),
  )
  if (!input) return null

  const placeholder =
    input instanceof HTMLInputElement ? input.placeholder : ""
  const isDate =
    field.classList.contains("datefield") ||
    input.classList.contains("datestring") ||
    input.classList.contains("hasDatepicker") ||
    !!input.closest("[datepicker]") ||
    /^(m|mm|d|dd|y|yy|yyyy)[m/dy/-]*$/i.test(placeholder) ||
    /\bdate\b/i.test(label)

  const rule = {
    type: isDate ? enums.FIELD_TYPE.DATE : enums.FIELD_TYPE.TEXT,
    label,
    required,
    $input: input,
    $label: labelEl,
  }

  if (
    placeholder === "MMM-YYYY" ||
    input.classList.contains("monthyear") ||
    input.classList.contains("monthYear") ||
    /year\/month|month\/year/i.test(label)
  ) {
    rule.description = buildBrassringDateFormatDescription(
      placeholder || "MMM-YYYY",
      { monthPicker: true },
    )
  } else if (/^gpa$/i.test(label.trim())) {
    rule.description = BRASSRING_GPA_DESCRIPTION
  } else if (isDate) {
    const format = placeholder
      ? placeholder.toUpperCase().replace(/Y+/g, "YYYY")
      : "M/D/YYYY"
    const errorText = getCleanText(
      field.querySelector(".error, [class*='error']"),
    )
    const todayHint = /today/i.test(label) ? "Return today's date" : ""
    rule.description = [
      buildBrassringDateFormatDescription(format),
      isDisabilitySignatureDateField(field, label)
        ? DISABILITY_SIGNATURE_DATE_DESCRIPTION
        : "",
      todayHint.trim(),
      errorText,
    ]
      .filter(Boolean)
      .join(". ")
  }

  return rule
}

function extractFieldRule(field) {
  if (!isElementVisible(field) || field.closest(RESUME_SECTION_SELECTOR)) {
    return null
  }
  const labelEl = getFieldLabelElement(field)
  const label = getFieldLabelText(field)
  if (
    !labelEl ||
    !label ||
    /captcha|verification code/i.test(label) ||
    shouldSkipField(field, label)
  ) {
    return null
  }
  const required = isFieldRequired(field)
  const rule =
    extractSelectRule(field, label, labelEl, required) ||
    extractTextOrDateRule(field, label, labelEl, required) ||
    extractChoiceRule(field, label, labelEl, required)
  if (!rule) return null
  rule.label = maybeAppendOtherToLabel(rule.label, rule.$input)
  return rule
}

function getRuleInput(rule) {
  return rule.$input || null
}

function getRuleDbFieldName(rule) {
  return getRuleInput(rule)?.getAttribute("dbfieldname") || ""
}

function isInsideCompositeList(el) {
  return !!el.closest(`${EDUCATION_LIST_SELECTOR}, ${EXPERIENCE_LIST_SELECTOR}`)
}

function normalizeCompareLabel(label) {
  return label.replace(/\s+/g, " ").trim().toLowerCase()
}

function isEmploymentSlotChild(rule, slotIndex) {
  const db = getRuleDbFieldName(rule)
  const label = normalizeCompareLabel(rule.label)
  return (
    db.toLowerCase() === `employer${slotIndex}`.toLowerCase() ||
    db.toLowerCase() === `employer${slotIndex}jobtitle`.toLowerCase() ||
    label === "employer" ||
    label === "job title" ||
    label === "from" ||
    label === "to"
  )
}

function buildCompositeRule(type, label, $input, children) {
  if (children.length === 0) return null
  return {
    type,
    label,
    required: children.some((child) => child.required),
    $input,
    children,
    options: mapChildrenToOptions(children),
  }
}

function mapChildrenToOptions(children) {
  return children.map((child) => ({
    label: child.label,
    type: child.type,
    options: child.options,
    ...(child.description ? { description: child.description } : {}),
  }))
}

async function hydrateCompositeChildren(rule) {
  await maybeHydrateRuleOptions(rule)
  const children = rule.children
  if (Array.isArray(children)) {
    for (const child of children) await hydrateCompositeChildren(child)
    rule.options = mapChildrenToOptions(children)
  }
}

function findInlineEmploymentSlots() {
  const entries = Array.from(
    document.querySelectorAll(FIELD_CONTAIN_SELECTOR),
  )
    .filter((field) => !isInsideCompositeList(field))
    .map((field) => ({ field, rule: extractFieldRule(field) }))
    .filter((entry) => !!entry.rule)

  const slotStarts = entries
    .map((entry, index) => ({
      index,
      slotIndex: getRuleDbFieldName(entry.rule).match(EMPLOYER_SLOT_RE)?.[1],
    }))
    .filter((entry) => !!entry.slotIndex)

  return slotStarts
    .map((slot, slotPos) => {
      const endIndex = slotStarts[slotPos + 1]?.index ?? entries.length
      const slice = entries
        .slice(slot.index, endIndex)
        .filter((entry) => isEmploymentSlotChild(entry.rule, slot.slotIndex))
      const hasEmployer = slice.some(
        (entry) =>
          getRuleDbFieldName(entry.rule).match(EMPLOYER_SLOT_RE)?.[1] ===
          slot.slotIndex,
      )
      const hasTitle = slice.some(
        (entry) =>
          getRuleDbFieldName(entry.rule).match(EMPLOYER_JOB_TITLE_SLOT_RE)?.[1] ===
          slot.slotIndex,
      )
      return hasEmployer && hasTitle
        ? {
            fields: slice.map((entry) => entry.field),
            children: slice.map((entry) => entry.rule),
          }
        : null
    })
    .filter(Boolean)
}

function getInlineEmploymentFieldSet() {
  return new Set(findInlineEmploymentSlots().flatMap((slot) => slot.fields))
}

function getInlineEmploymentRules(limit) {
  const slots = findInlineEmploymentSlots()
  const selected =
    typeof limit === "number" ? slots.slice(0, limit) : slots
  return selected
    .map((slot) =>
      buildCompositeRule(
        enums.FIELD_TYPE.EMPLOYMENT,
        "Work Experience",
        getRuleInput(slot.children[0]) || undefined,
        slot.children,
      ),
    )
    .filter(Boolean)
}

function getCompositeListElements(kind) {
  const selector =
    kind === "education" ? EDUCATION_LIST_SELECTOR : EXPERIENCE_LIST_SELECTOR
  return Array.from(document.querySelectorAll(selector)).filter(isElementVisible)
}

function extractCompositeRuleFromList(listEl, type, label) {
  const fieldRules = Array.from(listEl.querySelectorAll(FIELD_CONTAIN_SELECTOR))
    .map(extractFieldRule)
    .filter(Boolean)

  const coveredCheckboxes = new Set()
  fieldRules.forEach((rule) => {
    if (rule.type === enums.FIELD_TYPE.CHECKBOX && Array.isArray(rule.$checkboxs)) {
      rule.$checkboxs.forEach((checkbox) => coveredCheckboxes.add(checkbox))
    }
  })

  const standalone = Array.from(
    listEl.querySelectorAll("input[type='checkbox']"),
  )
    .filter((checkbox) => !checkbox.disabled && !coveredCheckboxes.has(checkbox))
    .map(extractStandaloneCheckboxRule)
    .filter(Boolean)

  return buildCompositeRule(type, label, listEl, [...fieldRules, ...standalone])
}

function getCompositeRules(kind, limit) {
  const type =
    kind === "education"
      ? enums.FIELD_TYPE.EDUCATION
      : enums.FIELD_TYPE.EMPLOYMENT
  const label = kind === "education" ? "Education" : "Work Experience"
  const lists = getCompositeListElements(kind)
  if (kind === "experience" && lists.length === 0) {
    return getInlineEmploymentRules(limit)
  }
  const selected = typeof limit === "number" ? lists.slice(0, limit) : lists
  return selected
    .map((listEl) => extractCompositeRuleFromList(listEl, type, label))
    .filter(Boolean)
}

export async function extractRules() {
  const fields = Array.from(document.querySelectorAll(FIELD_CONTAIN_SELECTOR))
  const inlineEmploymentFields = getInlineEmploymentFieldSet()
  const rulesList = []
  const seenInputs = new Set()

  for (const field of fields) {
    if (isInsideCompositeList(field) || inlineEmploymentFields.has(field)) {
      continue
    }
    const rule = extractFieldRule(field)
    if (!rule) continue
    await maybeHydrateRuleOptions(rule)
    const input = rule.$input
    if (input && seenInputs.has(input)) continue
    if (input) seenInputs.add(input)
    rulesList.push(rule)
  }

  const educationRules = getCompositeRules("education", 1)
  for (const rule of educationRules) await hydrateCompositeChildren(rule)
  rulesList.push(...educationRules)

  const experienceRules = getCompositeRules("experience", 1)
  for (const rule of experienceRules) await hydrateCompositeChildren(rule)
  rulesList.push(...experienceRules)

  return rulesList
}

export function getEducationRules() {
  return getCompositeRules("education")
}

export function getExperienceRules() {
  return getCompositeRules("experience")
}

export function getEducationRule(index) {
  const list = getCompositeListElements("education")[index]
  return list
    ? extractCompositeRuleFromList(list, enums.FIELD_TYPE.EDUCATION, "Education")
    : null
}

export function getExperienceRule(index) {
  const list = getCompositeListElements("experience")[index]
  if (list) {
    return extractCompositeRuleFromList(
      list,
      enums.FIELD_TYPE.EMPLOYMENT,
      "Work Experience",
    )
  }
  return getInlineEmploymentRules()[index] || null
}

function getSelectedOptionLabels(select) {
  return Array.from(select.selectedOptions)
    .map((option) => getCleanText(option) || option.label || option.value)
    .map((label) => label.trim())
    .filter(isMeaningfulOptionLabel)
}

function getSelectionListItemText(item) {
  const clone = item.cloneNode(true)
  clone
    .querySelectorAll("button, a, [role='button'], .ui-icon")
    .forEach((node) => node.remove())
  return getCleanText(clone)
    .replace(/\bRemove selection\b.*$/i, "")
    .replace(/\s+/g, " ")
    .trim()
}

function getVisibleFieldContains(root) {
  return Array.from(root.querySelectorAll(FIELD_CONTAIN_SELECTOR)).filter(
    (field) => isElementVisible(field),
  )
}

function readStandaloneCheckboxSnapshot(root) {
  const snapshot = {}
  const covered = new Set(
    getVisibleFieldContains(root)
      .flatMap((field) =>
        Array.from(field.querySelectorAll("input[type='checkbox']")),
      )
      .filter((checkbox) =>
        isInsideFieldContain(checkbox, checkbox.closest(FIELD_CONTAIN_SELECTOR)),
      ),
  )
  const checkboxes = Array.from(
    root.querySelectorAll("input[type='checkbox']"),
  ).filter((checkbox) => !checkbox.disabled && !covered.has(checkbox))

  for (const checkbox of checkboxes) {
    const rule = extractStandaloneCheckboxRule(checkbox)
    if (rule?.label) {
      snapshot[rule.label] =
        !!checkbox.checked && (getCheckboxOptionLabel(checkbox) || "Yes")
    }
  }
  return snapshot
}

function readCompositeListSnapshot(listEl) {
  const snapshot = {}
  for (const field of getVisibleFieldContains(listEl)) {
    const label = extractFieldRule(field)?.label || getFieldLabelText(field)
    if (label) snapshot[label] = readFieldValue(field)
  }
  return { ...snapshot, ...readStandaloneCheckboxSnapshot(listEl) }
}

function getStaticListText(listEl) {
  const clone = listEl.cloneNode(true)
  clone
    .querySelectorAll(
      "button, a, input, textarea, select, .requiredFieldIndicator",
    )
    .forEach((node) => node.remove())
  return getCleanText(clone)
}

function getHeadingText(listEl) {
  return getCleanText(
    listEl.querySelector("h1, h2, h3, h4, [role='heading']"),
  )
}

function extractLabeledSegment(text, label, nextLabels) {
  const nextPattern = nextLabels.length
    ? `(?=\\b(?:${nextLabels.map(escapeRegExp).join("|")})\\b|$)`
    : "$"
  const match = text.match(
    RegExp(`${escapeRegExp(label)}\\s*:?\\s*(.*?)\\s*${nextPattern}`, "i"),
  )
  return match?.[1]?.trim() || ""
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function omitEmptySnapshotValues(snapshot) {
  return Object.fromEntries(
    Object.entries(snapshot).filter(([, value]) =>
      Array.isArray(value) ? value.length > 0 : value !== "" && value != null,
    ),
  )
}

function isMostRecentEducationKey(key) {
  return normalizeAttrToken(key) === normalizeAttrToken(MOST_RECENT_EDUCATION_LABEL)
}

function normalizeMostRecentEducationValue(value) {
  const values = Array.isArray(value) ? value : [value]
  for (const item of values) {
    if (item === true) return "Yes"
    if (item === false || item == null) continue
    const token = normalizeAttrToken(String(item))
    if (
      token === "yes" ||
      token === "checked" ||
      token === "true" ||
      token === normalizeAttrToken(MOST_RECENT_EDUCATION_LABEL)
    ) {
      return "Yes"
    }
  }
  return ""
}

function normalizeEducationSnapshot(snapshot) {
  const next = { ...snapshot }
  for (const [key, value] of Object.entries(snapshot)) {
    if (!isMostRecentEducationKey(key)) continue
    const normalized = normalizeMostRecentEducationValue(value)
    delete next[key]
    if (normalized) next[MOST_RECENT_EDUCATION_LABEL] = normalized
  }
  return omitEmptySnapshotValues(next)
}

function readScopedSelectorText(listEl, selector) {
  return getCleanText(listEl.querySelector(selector))
}

function readLabeledFieldStaticValue(listEl, label) {
  const field = getVisibleFieldContains(listEl).find(
    (node) => getFieldLabelText(node).toLowerCase() === label.toLowerCase(),
  )
  if (!field) return ""
  const clone = field.cloneNode(true)
  clone
    .querySelectorAll(
      "label, button, a, input, textarea, select, .requiredFieldIndicator",
    )
    .forEach((node) => node.remove())
  return getCleanText(clone).replace(/^:\s*/, "").trim()
}

function hasMostRecentEducationMarker(listEl) {
  return Array.from(
    listEl.querySelectorAll(
      ".mostRecentStaticText, [ng-if*='MostRecent']",
    ),
  ).some(
    (node) => isElementVisible(node) && /most recent/i.test(getCleanText(node)),
  )
}

function readEducationListSnapshot(listEl) {
  const staticText = getStaticListText(listEl)
  const nextLabels = ["Graduation year", "Major area of study", "Degree", "GPA"]
  return omitEmptySnapshotValues({
    "School / Educational institution":
      readScopedSelectorText(listEl, ":scope > li.institution h4") ||
      getHeadingText(listEl),
    "Graduation year":
      readLabeledFieldStaticValue(listEl, "Graduation year") ||
      extractLabeledSegment(staticText, "Graduation year", nextLabels.slice(1)),
    "Major area of study":
      readLabeledFieldStaticValue(listEl, "Major area of study") ||
      extractLabeledSegment(staticText, "Major area of study", [
        "Degree",
        "GPA",
      ]),
    Degree:
      readLabeledFieldStaticValue(listEl, "Degree") ||
      extractLabeledSegment(staticText, "Degree", ["GPA"]),
    GPA:
      readLabeledFieldStaticValue(listEl, "GPA") ||
      extractLabeledSegment(staticText, "GPA", []),
    "This is my most recent education": hasMostRecentEducationMarker(listEl)
      ? "Yes"
      : "",
  })
}

function readExperienceDateRange(listEl) {
  const paragraph = listEl.querySelector(
    ":scope > li.topParagraph.populated p[align-labels], :scope > li.topParagraph.populated p",
  )
  if (!paragraph) return { start: "", end: "" }
  const spans = Array.from(paragraph.querySelectorAll("span.fieldcontain"))
    .map(getCleanText)
    .filter(Boolean)
  const mostRecent =
    readScopedSelectorText(
      listEl,
      ":scope > li.topParagraph [ng-if*='MostRecent']",
    ) ||
    readScopedSelectorText(listEl, ":scope > li.topParagraph .mostRecent") ||
    readScopedSelectorText(listEl, ":scope > li.topParagraph .current")
  return {
    start: spans[0] || "",
    end:
      spans[1] ||
      (/most recent|present|current/i.test(mostRecent) ? mostRecent : ""),
  }
}

function readExperienceListSnapshot(listEl) {
  const dates = readExperienceDateRange(listEl)
  const responsibilities =
    readLabeledFieldStaticValue(listEl, "Responsibilities") ||
    extractLabeledSegment(getStaticListText(listEl), "Responsibilities", [
      "Reason for Leaving",
    ])
  return omitEmptySnapshotValues({
    Company:
      readScopedSelectorText(listEl, ":scope > li.institution h4") ||
      getHeadingText(listEl),
    "Job title": readScopedSelectorText(
      listEl,
      ":scope > li.topParagraph.populated > div.fieldcontain span.ng-binding",
    ),
    "Start Year/month": dates.start,
    "End Year/month": dates.end,
    Responsibilities: responsibilities,
    "Reason for Leaving": readLabeledFieldStaticValue(
      listEl,
      "Reason for Leaving",
    ),
  })
}

function readCompositeListEntrySnapshot(listEl, kind) {
  const live = readCompositeListSnapshot(listEl)
  const staticSnapshot =
    kind === "education"
      ? readEducationListSnapshot(listEl)
      : readExperienceListSnapshot(listEl)
  const merged =
    Object.keys(live).length > 0
      ? omitEmptySnapshotValues({
          ...staticSnapshot,
          ...omitEmptySnapshotValues(live),
        })
      : staticSnapshot
  return kind === "education" ? normalizeEducationSnapshot(merged) : merged
}

function readCompositeSnapshots(kind) {
  const lists = getCompositeListElements(kind)
  if (kind === "experience" && lists.length === 0) {
    return findInlineEmploymentSlots()
      .map((slot) => {
        const snapshot = {}
        for (const field of slot.fields) {
          const label =
            extractFieldRule(field)?.label || getFieldLabelText(field)
          if (label) snapshot[label] = readFieldValue(field)
        }
        return omitEmptySnapshotValues(snapshot)
      })
      .filter((snapshot) => Object.keys(snapshot).length > 0)
  }
  return lists
    .map((listEl) => readCompositeListEntrySnapshot(listEl, kind))
    .filter((snapshot) => Object.keys(snapshot).length > 0)
}

function readFieldValue(field) {
  const radios = Array.from(
    field.querySelectorAll("input[type='radio']"),
  ).filter((el) => isInsideFieldContain(el, field))
  if (radios.length > 0) {
    const checked = radios.find((radio) => radio.checked)
    return checked ? getRadioOptionLabel(checked) : ""
  }

  const checkboxes = Array.from(
    field.querySelectorAll("input[type='checkbox']"),
  ).filter((el) => isInsideFieldContain(el, field))
  if (checkboxes.length > 0) {
    const checkedLabels = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map(getCheckboxOptionLabel)
      .filter(Boolean)
    return checkboxes.length === 1 ? checkedLabels[0] || false : checkedLabels
  }

  const select =
    Array.from(field.querySelectorAll("select")).find((el) =>
      isInsideFieldContain(el, field),
    ) || null
  if (select) {
    if (select.multiple) {
      const selectionList = Array.from(
        field.querySelectorAll(
          ".selectionList li, [id$='_selection-list'] li",
        ),
      )
        .map(getSelectionListItemText)
        .filter(Boolean)
      return selectionList.length > 0
        ? selectionList
        : getSelectedOptionLabels(select)
    }
    const searchInput = findSearchWidgetInput(field, select)
    const selected = getSelectedOptionLabels(select)[0] || ""
    const visible = searchInput?.value?.trim() || ""
    return selected || (isMeaningfulOptionLabel(visible) ? visible : "")
  }

  const textInput =
    Array.from(
      field.querySelectorAll(
        "textarea, input:not([type='hidden']):not([type='file']):not([type='radio']):not([type='checkbox']):not([type='button']):not([type='submit'])",
      ),
    ).find((el) => isInsideFieldContain(el, field)) || null
  return textInput?.value?.trim() || ""
}

export async function getFormSnapshot() {
  const snapshot = {}
  const fields = getVisibleFieldContains(document)
  const inlineEmploymentFields = getInlineEmploymentFieldSet()

  for (const field of fields) {
    if (isInsideCompositeList(field) || inlineEmploymentFields.has(field)) {
      continue
    }
    const rule = extractFieldRule(field)
    if (!rule) continue
    const label = rule.label
    if (shouldSkipField(field, label)) continue
    snapshot[label] = readFieldValue(field)
  }

  const education = readCompositeSnapshots("education")
  if (education.length > 0) snapshot.education = education

  const employment = readCompositeSnapshots("experience")
  if (employment.length > 0) snapshot.employment = employment

  return snapshot
}
