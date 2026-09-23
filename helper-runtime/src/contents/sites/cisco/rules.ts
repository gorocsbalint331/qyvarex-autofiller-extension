// @ts-nocheck
/**
 * Cisco Careers form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"
import * as observer from "../../methods/observer.js"

export const FORM_SELECTOR = 'form.rjsf[data-ot-ignore="true"], form.rjsf'
export const FIELD_CONTAINER_SELECTOR = ".form-group.field"
export const CONTINUE_BUTTON_SELECTOR =
  'button#next, button[atm-id="submit-button"]'
export const RESUME_FILE_INPUT_SELECTOR =
  ".resume-upload-wrapper input[type='file'], input[type='file']"
export const RESUME_UPLOADED_LINK_SELECTOR =
  'a[atm-id="uploadedresume-link"], .has-resume.resume-info .downloadFile'
export const RESUME_DELETE_SELECTOR =
  'a.deleteFile[aria-label="Delete"], .has-resume.resume-info .deleteFile'

const ARRAY_FIELDSET_SELECTOR =
  "fieldset.field.field-array.field-array-of-object"
const SELECT_OPTIONS_TIMEOUT_MS = 1200
const SELECT_OPTIONS_INTERVAL_MS = 50
const OPTION_SIGNATURE_SEP = "\u0001"

function normalizeWhitespace(value) {
  return (value || "").replace(/\s+/g, " ").trim()
}

function isHiddenByAncestors(el) {
  let node = el
  while (node && node !== document.documentElement) {
    if (
      node.hidden ||
      node.getAttribute("aria-hidden") === "true" ||
      node.classList.contains("hidden") ||
      node.classList.contains("hide") ||
      (node.classList.contains("collapse") && !node.classList.contains("show"))
    ) {
      return true
    }

    const style = window.getComputedStyle(node)
    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      style.visibility === "collapse" ||
      Number(style.opacity || "1") === 0
    ) {
      return true
    }

    node = node.parentElement
  }
  return false
}

export function isActuallyVisible(el) {
  if (!(el instanceof HTMLElement) || isHiddenByAncestors(el)) return false

  if (typeof el.checkVisibility === "function") {
    const checkVisibility = el.checkVisibility.bind(el)
    const visible = checkVisibility({
      checkOpacity: true,
      checkVisibilityCSS: true,
      contentVisibilityAuto: true,
      opacityProperty: true,
      visibilityProperty: true,
    })
    if (!visible) return false
  }

  if (typeof el.getClientRects === "function") {
    const rects = el.getClientRects()
    if (rects.length === 0) return false
  }

  return true
}

function readStepInfoFromUrl() {
  const url = new URL(window.location.href)
  const stepname = normalizeWhitespace(url.searchParams.get("stepname")).toLowerCase()
  const step = Number(url.searchParams.get("step") || "0")
  return {
    key: stepname || `step-${step || 0}`,
    index: Number.isFinite(step) ? step : 0,
    title: stepname || `step ${step || 0}`,
  }
}

export function getCurrentCiscoStep() {
  return readStepInfoFromUrl()
}

export function getStepInfo() {
  return readStepInfoFromUrl()
}

export function getFormRoot() {
  return document.querySelector(FORM_SELECTOR)
}

export function getCiscoRegularFillRules(rules) {
  return rules.filter(
    (rule) =>
      rule.type !== enums.FIELD_TYPE.EDUCATION &&
      rule.type !== enums.FIELD_TYPE.EMPLOYMENT,
  )
}

function isInitialPersonalStep() {
  const { index, key } = readStepInfoFromUrl()
  return index <= 1 || key === "personalinformation"
}

function isReviewOrSubmitStep(root = document) {
  const { key } = readStepInfoFromUrl()
  const keyLower = key.trim().toLowerCase()
  return (
    keyLower.includes("review") ||
    keyLower.includes("submit") ||
    !!root.querySelector(
      ".summary-text, .summary-item, .summary-label, .summary-value",
    )
  )
}

function isLeafFieldContainer(container) {
  if (container.classList.contains("field-object")) return false

  const hasNestedChildren = Array.from(container.children).some(
    (child) =>
      child instanceof HTMLElement &&
      child.matches(
        ".form-group.field, fieldset, .col-md-6 .form-group.field, .col-md-12 .form-group.field",
      ),
  )
  if (hasNestedChildren) return false

  const hasNestedQuery = Array.from(
    container.querySelectorAll(
      ":scope .col-md-6 .form-group.field, :scope .col-md-12 .form-group.field",
    ),
  ).some((node) => node !== container)

  return !hasNestedQuery
}

function cleanControlLabelText(labelEl) {
  if (!labelEl) return ""
  const clone = labelEl.cloneNode(true)
  clone.querySelectorAll(".required,[aria-hidden='true']").forEach((node) => {
    node.remove()
  })
  return normalizeWhitespace(clone.textContent)
}

function findCheckboxPromptFromPreviousColumn(container) {
  if (!container.querySelector(".checkbox")) return ""

  const column = container.closest(".col-md-6, .col-md-12")
  let sibling = column?.previousElementSibling ?? null

  while (sibling) {
    if (!(sibling instanceof HTMLElement)) {
      sibling = sibling.previousElementSibling
      continue
    }

    const markdown = sibling.querySelector(".markdown p, .markdown")
    if (markdown) return normalizeWhitespace(markdown.textContent)

    const hasControls = !!sibling.querySelector(
      "input, textarea, select, .checkbox, .radio",
    )
    if (hasControls) break

    sibling = sibling.previousElementSibling
  }

  return ""
}

function isGenericPleaseSelectLabel(label) {
  return normalizeWhitespace(label).toLowerCase() === "please select an option below:"
}

function findPrecedingQuestionText(container) {
  let sibling =
    container.closest(".col-md-6, .col-md-12")?.previousElementSibling ??
    container.previousElementSibling

  while (sibling) {
    if (!(sibling instanceof HTMLElement)) {
      sibling = sibling.previousElementSibling
      continue
    }

    const hasControls = !!sibling.querySelector(
      "input, textarea, select, .checkbox, .radio",
    )
    if (hasControls) break

    const markdown = sibling.querySelector(".markdown p, .markdown")
    const text = normalizeWhitespace(markdown?.textContent || sibling.textContent)
    if (text) {
      if (text.includes("?") || text.length <= 220) return text
    }

    sibling = sibling.previousElementSibling
  }

  return ""
}

function isLanguageChangeField(container) {
  const control = container.querySelector("input, textarea, select")
  return control?.id === "languageChange"
}

function getRadioOptionLabel(input) {
  const forLabel = input.id
    ? document.querySelector(`label[for="${CSS.escape(input.id)}"]`)
    : null
  const raw =
    forLabel?.textContent ||
    input.closest("label")?.textContent ||
    input.parentElement?.textContent ||
    ""
  return normalizeWhitespace(raw.replace(/\*/g, " "))
}

function getFieldLabel(container) {
  const controlLabel = cleanControlLabelText(
    container.querySelector("label.control-label, legend"),
  )
  if (controlLabel) return controlLabel

  const checkboxPrompt = findCheckboxPromptFromPreviousColumn(container)
  if (checkboxPrompt) return checkboxPrompt

  const fallbackLabel = container.querySelector(
    ".checkbox label, .radio label, label",
  )
  if (!fallbackLabel) return ""

  const clone = fallbackLabel.cloneNode(true)
  clone.querySelectorAll("input, .check, .checkmark").forEach((node) => {
    node.remove()
  })
  return normalizeWhitespace(clone.textContent)
}

function resolveDateFormat(label, input) {
  const labelLower = normalizeWhitespace(label).toLowerCase()
  const isCompositeDate =
    !!input.id.match(/\.fromTo\.(startDate|endDate)$/i) ||
    !!input.closest("#educationData, #experienceData")

  if (isCompositeDate) return "MM/YYYY"
  if (
    labelLower === "what is the earliest date you could start?" ||
    labelLower.includes("earliest date you could start")
  ) {
    return "YYYY/MM/DD"
  }
  return "MM/DD/YYYY"
}

function buildDateDescription(label, input) {
  return `Please format the date as: ${resolveDateFormat(label, input)}`
}

function isRequiredField(container) {
  const controlLabel = container.querySelector("label.control-label")
  if (controlLabel?.querySelector(".required")) return true

  const control = container.querySelector("input, textarea, select")
  return (
    control?.required === true ||
    control?.getAttribute("aria-required") === "true"
  )
}

function findOwningArrayFieldset(container) {
  const nearest = container.closest(ARRAY_FIELDSET_SELECTOR)
  if (!(nearest instanceof HTMLElement)) return null
  const parent = nearest.parentElement?.closest(ARRAY_FIELDSET_SELECTOR)
  return parent instanceof HTMLElement ? parent : nearest
}

function listLeafFieldContainers(root) {
  return Array.from(root.querySelectorAll(FIELD_CONTAINER_SELECTOR))
    .filter((container) => isActuallyVisible(container))
    .filter((container) => !isLanguageChangeField(container))
    .filter((container) => isLeafFieldContainer(container))
    .filter((container) => {
      const controls = Array.from(
        container.querySelectorAll("input, textarea, select"),
      ).filter(
        (control) =>
          control.type !== "hidden" &&
          control.type !== "file" &&
          !control.disabled &&
          isActuallyVisible(control),
      )
      return controls.length > 0
    })
}

function getPrimaryControl(container) {
  const controls = Array.from(
    container.querySelectorAll("input, textarea, select"),
  ).filter((control) => {
    if (
      control.type === "hidden" ||
      control.type === "file" ||
      control.disabled ||
      !isActuallyVisible(control)
    ) {
      return false
    }
    return control.closest(".form-group.field") === container
  })
  return controls[0] ?? null
}

function getSelectOptionLabels(select) {
  return Array.from(select.options)
    .map((option) => normalizeWhitespace(option.textContent))
    .filter((text) => !isPlaceholderOption(text))
    .filter(Boolean)
}

function isPlaceholderOption(text) {
  const lower = text.toLowerCase()
  return lower === "please select" || lower === "select"
}

function isSelectOptionsEmpty(select) {
  const options = getSelectOptionLabels(select)
  return options.length === 0 || options.every(isPlaceholderOption)
}

function getSelectOptionsSignature(select) {
  return getSelectOptionLabels(select).join(OPTION_SIGNATURE_SEP)
}

function createUiEvent(type) {
  const base = { bubbles: true, cancelable: true }
  if (type.startsWith("key") && typeof KeyboardEvent === "function") {
    return new KeyboardEvent(type, {
      ...base,
      code: "ArrowDown",
      key: "ArrowDown",
    })
  }
  if (type.startsWith("pointer") && typeof PointerEvent === "function") {
    return new PointerEvent(type, { ...base, pointerType: "mouse" })
  }
  if (typeof MouseEvent === "function") {
    return new MouseEvent(type, base)
  }
  return new Event(type, base)
}

function dispatchUiEvent(el, type) {
  try {
    el.dispatchEvent(createUiEvent(type))
  } catch {
    el.dispatchEvent(new Event(type, { bubbles: true, cancelable: true }))
  }
}

async function hydrateSelectOptions(select) {
  if (!isSelectOptionsEmpty(select)) return

  const beforeSignature = getSelectOptionsSignature(select)
  try {
    select.focus({ preventScroll: true })
  } catch {
    select.focus()
  }

  for (const type of [
    "pointerdown",
    "mousedown",
    "mouseup",
    "click",
    "keydown",
    "keyup",
  ]) {
    dispatchUiEvent(select, type)
  }

  await observer.waitForCondition(
    () =>
      !isSelectOptionsEmpty(select) &&
      getSelectOptionsSignature(select) !== beforeSignature,
    {
      interval: SELECT_OPTIONS_INTERVAL_MS,
      observeTarget: select,
      timeout: SELECT_OPTIONS_TIMEOUT_MS,
    },
  )
  select.blur()
}

async function hydrateSelectsInRoot(root) {
  const selects = Array.from(root.querySelectorAll("select"))
  for (const select of selects) {
    if (!select.disabled && select.type !== "hidden" && isActuallyVisible(select)) {
      await hydrateSelectOptions(select)
    }
  }
}

function parseRadioRule(container) {
  const radios = Array.from(
    container.querySelectorAll('input[type="radio"]'),
  ).filter(
    (input) =>
      isActuallyVisible(input) &&
      input.closest(".form-group.field") === container,
  )
  if (radios.length === 0) return null

  const label = getFieldLabel(container)
  if (!label) return null

  const preceding = isGenericPleaseSelectLabel(label)
    ? findPrecedingQuestionText(container)
    : ""
  const resolvedLabel = preceding || label

  return {
    label: resolvedLabel,
    required: isRequiredField(container),
    type: enums.FIELD_TYPE.RADIOGROUP,
    options: radios.map((radio) => getRadioOptionLabel(radio)).filter(Boolean),
    $label: container.querySelector("label.control-label, legend") || container,
    $input: radios[0],
    $radioParent: container,
  }
}

function parseCheckboxRule(container) {
  const checkboxes = Array.from(
    container.querySelectorAll('input[type="checkbox"]'),
  ).filter(
    (input) =>
      isActuallyVisible(input) &&
      input.closest(".form-group.field") === container,
  )
  if (checkboxes.length === 0) return null

  const label = getFieldLabel(container)
  if (!label) return null

  return {
    label,
    required: isRequiredField(container),
    type: enums.FIELD_TYPE.CHECKBOX,
    options:
      checkboxes.length === 1
        ? ["Yes", "No"]
        : checkboxes.map((checkbox) => getRadioOptionLabel(checkbox)).filter(Boolean),
    $label: container.querySelector("label.control-label, legend") || container,
    $input: container,
    $checkboxs: checkboxes,
  }
}

function parseCurrentlyWorkHereRule(container) {
  const checkbox = container.querySelector(
    '.daterangepicker-checkbox input[type="checkbox"][id*="currentlyWorkHere"]',
  )
  if (!checkbox || !isActuallyVisible(checkbox)) return null

  const label = normalizeWhitespace(
    checkbox.closest(".daterangepicker-checkbox")?.textContent ||
      checkbox.getAttribute("aria-label") ||
      "I currently work here",
  )
  if (!label) return null

  return {
    label,
    required: false,
    type: enums.FIELD_TYPE.CHECKBOX,
    options: ["Yes", "No"],
    $label: checkbox.closest(".daterangepicker-checkbox") || checkbox,
    $input: checkbox,
    $checkboxs: [checkbox],
  }
}

function parseSelectRule(container) {
  const control = getPrimaryControl(container)
  const select = control instanceof HTMLSelectElement ? control : null
  if (!select || !isActuallyVisible(select)) return null

  const label = getFieldLabel(container)
  if (!label) return null

  return {
    label,
    required: isRequiredField(container),
    type: enums.FIELD_TYPE.SELECT,
    options: getSelectOptionLabels(select),
    $label: container.querySelector("label.control-label, legend") || container,
    $input: select,
  }
}

function parseTextLikeRule(container) {
  let description
  const control = getPrimaryControl(container)
  const textarea = control instanceof HTMLTextAreaElement ? control : null

  if (textarea && isActuallyVisible(textarea)) {
    const label = getFieldLabel(container)
    if (!label) return null
    return {
      label,
      required: isRequiredField(container),
      type: enums.FIELD_TYPE.TEXT,
      $label: container.querySelector("label.control-label, legend") || container,
      $input: textarea,
    }
  }

  const input =
    control instanceof HTMLInputElement &&
    control.type !== "hidden" &&
    control.type !== "radio" &&
    control.type !== "checkbox"
      ? control
      : null
  if (!input || !isActuallyVisible(input)) return null

  const label = getFieldLabel(container)
  if (!label) return null

  let type = enums.FIELD_TYPE.TEXT
  const isSearch =
    input.getAttribute("role") === "combobox" ||
    input.getAttribute("data-attribute") === "asyncTypeahead" ||
    !!input.closest(".async-typeahead-v3")
  const isDate =
    input.type === "date" ||
    !!input.closest(".react-datepicker-wrapper") ||
    !!input.id.match(/\.fromTo\.(startDate|endDate)$/i)

  if (isDate) {
    type = enums.FIELD_TYPE.DATE
    description = buildDateDescription(label, input)
  } else if (
    isSearch ||
    input.type === "search" ||
    input.getAttribute("autocomplete") === "address-level2"
  ) {
    type = enums.FIELD_TYPE.SEARCH
  }

  return {
    label,
    required: isRequiredField(container),
    type,
    description,
    $label: container.querySelector("label.control-label, legend") || container,
    $input: input,
  }
}

export function getArrayContainer(fieldType) {
  const id =
    fieldType === enums.FIELD_TYPE.EDUCATION ? "educationData" : "experienceData"
  return getFormRoot()?.querySelector(`fieldset#${id}`) ?? null
}

function getArrayFieldType(fieldset) {
  if (fieldset.id === "educationData") return enums.FIELD_TYPE.EDUCATION
  if (fieldset.id === "experienceData") return enums.FIELD_TYPE.EMPLOYMENT
  return null
}

export function getCompositeItemFieldsets(arrayFieldset) {
  return Array.from(
    arrayFieldset.querySelectorAll(":scope > .row.array-item-list fieldset[id]"),
  ).filter((item) => {
    const escaped = arrayFieldset.id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    return RegExp(`^${escaped}\\[\\d+\\]$`).test(item.id)
  })
}

function getFirstCompositeItemFieldset(arrayFieldset) {
  return getCompositeItemFieldsets(arrayFieldset)[0] ?? null
}

function extractRulesFromCompositeItem(itemFieldset) {
  const containers = listLeafFieldContainers(itemFieldset)
  const rules = []

  for (const container of containers) {
    const rule =
      parseRadioRule(container) ||
      parseCheckboxRule(container) ||
      parseSelectRule(container) ||
      parseTextLikeRule(container)
    if (rule?.label) rules.push(rule)
  }

  const currentlyWorkHere = parseCurrentlyWorkHereRule(itemFieldset)
  if (
    currentlyWorkHere &&
    !rules.some(
      (rule) =>
        rule.type === enums.FIELD_TYPE.CHECKBOX &&
        rule.label === currentlyWorkHere.label,
    )
  ) {
    rules.push(currentlyWorkHere)
  }

  return rules
}

function buildCompositeTemplateRule(arrayFieldset, fieldType) {
  const firstItem = getFirstCompositeItemFieldset(arrayFieldset)
  if (!firstItem) return null

  const children = extractRulesFromCompositeItem(firstItem)
  if (children.length === 0) return null

  const addButton =
    arrayFieldset.querySelector(".more-actions .array-button-add") ?? undefined

  return {
    label: fieldType === enums.FIELD_TYPE.EDUCATION ? "Education" : "Employment",
    required: true,
    type: fieldType,
    $input: addButton,
    children,
    options: children.map((child) => ({
      label: child.label,
      type: child.type,
      ...(Array.isArray(child.options) && child.options.length > 0
        ? { options: child.options }
        : {}),
    })),
  }
}

export async function getCompositeRules(fieldType) {
  const arrayFieldset = getArrayContainer(fieldType)
  if (!arrayFieldset) return []

  await hydrateSelectsInRoot(arrayFieldset)
  const rules = []

  for (const item of getCompositeItemFieldsets(arrayFieldset)) {
    const children = extractRulesFromCompositeItem(item)
    if (children.length === 0) continue

    rules.push({
      label:
        fieldType === enums.FIELD_TYPE.EDUCATION ? "Education" : "Employment",
      required: true,
      type: fieldType,
      $input:
        arrayFieldset.querySelector(".more-actions .array-button-add") ??
        undefined,
      children,
      options: children.map((child) => ({
        label: child.label,
        type: child.type,
        ...(Array.isArray(child.options) && child.options.length > 0
          ? { options: child.options }
          : {}),
      })),
    })
  }

  return rules
}

export async function extractRules() {
  const form = getFormRoot()
  if (!form || isReviewOrSubmitStep(form)) return []

  await hydrateSelectsInRoot(form)
  const rules = []
  const seen = new Set()

  const arrayFieldsets = Array.from(
    form.querySelectorAll(ARRAY_FIELDSET_SELECTOR),
  ).filter((fieldset) => !fieldset.closest(`${ARRAY_FIELDSET_SELECTOR} ${ARRAY_FIELDSET_SELECTOR}`))

  for (const fieldset of arrayFieldsets) {
    const fieldType = getArrayFieldType(fieldset)
    if (!fieldType) continue
    const template = buildCompositeTemplateRule(fieldset, fieldType)
    if (template) rules.push(template)
  }

  for (const container of listLeafFieldContainers(form)) {
    const owningArray = findOwningArrayFieldset(container)
    if (owningArray) {
      const fieldType = getArrayFieldType(owningArray)
      if (fieldType) continue

      const firstItem = getFirstCompositeItemFieldset(owningArray)
      if (!firstItem || !firstItem.contains(container)) continue
    }

    const rule =
      parseRadioRule(container) ||
      parseCheckboxRule(container) ||
      parseSelectRule(container) ||
      parseTextLikeRule(container)
    if (!rule?.label) continue

    const key = `${rule.type}:${rule.label}`
    if (seen.has(key)) continue
    seen.add(key)
    rules.push(rule)
  }

  return rules
}

function readFieldSnapshot(container) {
  const label = getFieldLabel(container)
  if (!label) return null

  const control = getPrimaryControl(container)
  const select = control instanceof HTMLSelectElement ? control : null
  if (select && isActuallyVisible(select)) {
    const text = select.selectedOptions?.[0]?.textContent?.trim() || ""
    return {
      label,
      type: enums.FIELD_TYPE.SELECT,
      value: text || select.value,
      text,
    }
  }

  const radios = Array.from(
    container.querySelectorAll('input[type="radio"]'),
  ).filter(
    (input) =>
      isActuallyVisible(input) &&
      input.closest(".form-group.field") === container,
  )
  if (radios.length > 0) {
    const preceding = isGenericPleaseSelectLabel(label)
      ? findPrecedingQuestionText(container)
      : ""
    const resolvedLabel = preceding || label
    const checked = radios.find((radio) => radio.checked)
    return {
      label: resolvedLabel,
      type: enums.FIELD_TYPE.RADIOGROUP,
      value: checked?.value || "",
      text: checked ? getRadioOptionLabel(checked) : "",
    }
  }

  const checkboxes = Array.from(
    container.querySelectorAll('input[type="checkbox"]'),
  ).filter(
    (input) =>
      isActuallyVisible(input) &&
      input.closest(".form-group.field") === container,
  )
  if (checkboxes.length > 0) {
    return {
      label,
      type: enums.FIELD_TYPE.CHECKBOX,
      value:
        checkboxes.length === 1
          ? checkboxes[0].checked
            ? "Yes"
            : "No"
          : checkboxes
              .filter((checkbox) => checkbox.checked)
              .map((checkbox) => getRadioOptionLabel(checkbox)),
    }
  }

  const textarea = control instanceof HTMLTextAreaElement ? control : null
  if (textarea && isActuallyVisible(textarea)) {
    return {
      label,
      type: enums.FIELD_TYPE.TEXT,
      value: textarea.value,
    }
  }

  const input =
    control instanceof HTMLInputElement &&
    control.type !== "hidden" &&
    control.type !== "radio" &&
    control.type !== "checkbox"
      ? control
      : null
  if (!(input && isActuallyVisible(input))) return null

  const type =
    input.closest(".react-datepicker-wrapper") ||
    input.id.match(/\.fromTo\.(startDate|endDate)$/i)
      ? enums.FIELD_TYPE.DATE
      : input.getAttribute("role") === "combobox" ||
          input.getAttribute("data-attribute") === "asyncTypeahead" ||
          input.closest(".async-typeahead-v3")
        ? enums.FIELD_TYPE.SEARCH
        : enums.FIELD_TYPE.TEXT

  return {
    label,
    type,
    value: input.value,
  }
}

function snapshotEntriesToObject(entries) {
  const result = {}
  for (const entry of entries) {
    if (entry?.label && entry.value !== undefined) {
      result[entry.label] = entry.value
    }
  }
  return result
}

function getCompositeSnapshots(fieldType) {
  const arrayFieldset = getArrayContainer(fieldType)
  if (!arrayFieldset) return []

  return getCompositeItemFieldsets(arrayFieldset)
    .map((item) => {
      const entries = listLeafFieldContainers(item)
        .map((container) => readFieldSnapshot(container))
        .filter(Boolean)

      const currentlyWorkHere = parseCurrentlyWorkHereRule(item)
      if (currentlyWorkHere) {
        const checkbox = currentlyWorkHere.$checkboxs?.[0]
        entries.push({
          label: currentlyWorkHere.label,
          type: enums.FIELD_TYPE.CHECKBOX,
          value: checkbox?.checked ? "Yes" : "No",
        })
      }

      return snapshotEntriesToObject(entries)
    })
    .filter((entry) => Object.keys(entry).length > 0)
}

export function getAdditionalFormSnapshotData() {
  return {
    education: getCompositeSnapshots(enums.FIELD_TYPE.EDUCATION),
    employment: getCompositeSnapshots(enums.FIELD_TYPE.EMPLOYMENT),
  }
}

export function getFormSnapshot() {
  const form = getFormRoot()
  const snapshot = {}
  if (!form) return snapshot

  const containers = listLeafFieldContainers(form).filter((container) => {
    const owningArray = findOwningArrayFieldset(container)
    if (!owningArray) return true

    const fieldType = getArrayFieldType(owningArray)
    if (fieldType) return false

    const firstItem = getFirstCompositeItemFieldset(owningArray)
    return !!firstItem && firstItem.contains(container)
  })

  for (const container of containers) {
    const entry = readFieldSnapshot(container)
    if (entry?.label) snapshot[entry.label] = entry.value
  }

  if (isInitialPersonalStep()) {
    const resumeLink = document.querySelector(RESUME_UPLOADED_LINK_SELECTOR)
    if (resumeLink) {
      snapshot["Resume/CV"] = normalizeWhitespace(resumeLink.textContent)
    }
  }

  const continueButton = form.querySelector(CONTINUE_BUTTON_SELECTOR)
  if (continueButton) {
    snapshot.__buttonText =
      normalizeWhitespace(continueButton.textContent) ||
      normalizeWhitespace(continueButton.getAttribute("value"))
  }

  snapshot.__step = getStepInfo().index
  snapshot.__stepname = getStepInfo().key
  return snapshot
}
