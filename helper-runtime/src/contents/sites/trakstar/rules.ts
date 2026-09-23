// @ts-nocheck
/**
 * Trakstar — form rule extraction and snapshot.
 */

import * as enums from "../../../core/enums.js"

const FORM_SELECTOR = "form#job_application_form"
const FIELD_GROUP_SELECTOR =
  ".form-group, .field, .control-group, .application-question, .question"
const FIELD_CONTROL_SELECTOR =
  'textarea, select, input:not([type="hidden"]):not([type="file"]):not([type="submit"]):not([type="button"])'
const FILE_INPUT_SELECTOR = 'input[type="file"]'

const normalizeWhitespace = (text) =>
  text?.replace(/\s+/g, " ").replace(/\s+\*/g, "*").trim() || ""
const stripTrailingAsterisk = (text) =>
  normalizeWhitespace(text).replace(/\s*\*$/, "").trim()
const escapeCssAttributeValue = (value) =>
  value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
const getFormRoot = (doc = document) =>
  ("querySelector" in doc && doc.querySelector(FORM_SELECTOR)) || doc
const getControlIdOrName = (control) =>
  control.getAttribute("id") || control.getAttribute("name") || ""

const findLabelForControl = (group, control) => {
  const idOrName = getControlIdOrName(control)
  if (idOrName) {
    const byFor = group.querySelector(
      `label[for="${escapeCssAttributeValue(idOrName)}"]`,
    )
    if (byFor) return byFor
  }
  return (
    control.closest("label") ||
    group.querySelector("label, legend, .control-label")
  )
}

const getFieldLabel = (group, control) => {
  const labelEl = findLabelForControl(group, control)
  const fromLabel = stripTrailingAsterisk(labelEl?.textContent)
  if (fromLabel) return fromLabel
  const placeholder = control.getAttribute("placeholder")
  return placeholder
    ? stripTrailingAsterisk(placeholder)
    : stripTrailingAsterisk(
        control.getAttribute("aria-label") || control.getAttribute("name"),
      )
}

const isRequiredControl = (group, control) =>
  control.required ||
  "true" === control.getAttribute("aria-required") ||
  /\*/.test(findLabelForControl(group, control)?.textContent || "") ||
  !!group.querySelector(".required, .asterisk, .text-danger")

const getCheckboxOrRadioOptionText = (input) => {
  const label = input.closest("label")
  return normalizeWhitespace(label?.textContent || input.value)
}

const getSelectOptionTexts = (select) =>
  Array.from(select.options)
    .map((option) => normalizeWhitespace(option.textContent || option.value))
    .filter((text) => text && !/^[-\s]*select[-\s]*$/i.test(text))

const getFileNames = (input) =>
  Array.from(input.files || [])
    .map((file) => file.name)
    .filter(Boolean)

const buildRuleFromGroup = (group) => {
  if (group.querySelector('input[type="file"]')) return null
  const checkboxes = Array.from(
    group.querySelectorAll('input[type="checkbox"]'),
  )
  const radios = Array.from(group.querySelectorAll('input[type="radio"]'))
  const control = group.querySelector(FIELD_CONTROL_SELECTOR)
  if (!control) return null
  const label = getFieldLabel(group, control)
  if (!label) return null
  const required = isRequiredControl(group, control)
  const $label = findLabelForControl(group, control) || group
  return checkboxes.length
    ? {
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required,
        options: checkboxes.map(getCheckboxOrRadioOptionText).filter(Boolean),
        $checkboxs: checkboxes,
        $input: checkboxes[0],
        $label,
      }
    : radios.length
      ? {
          type: enums.FIELD_TYPE.RADIO,
          label,
          required,
          options: radios.map(getCheckboxOrRadioOptionText).filter(Boolean),
          $input: radios,
          $radioParent: group,
          $label,
        }
      : control instanceof HTMLSelectElement
        ? {
            type: enums.FIELD_TYPE.SELECT,
            label,
            required,
            options: getSelectOptionTexts(control),
            $input: control,
            $label,
          }
        : {
            type: enums.FIELD_TYPE.TEXT,
            label,
            required,
            $input: control,
            $label,
          }
}

export function extractRules(doc = document) {
  const root = getFormRoot(doc)
  const groups = Array.from(root.querySelectorAll(FIELD_GROUP_SELECTOR))
  const seenControls = /* @__PURE__ */ new Set()
  const rules = []
  for (const group of groups) {
    const control = group.querySelector(FIELD_CONTROL_SELECTOR)
    if (!control || seenControls.has(control)) continue
    const rule = buildRuleFromGroup(group)
    rule && (seenControls.add(control), rules.push(rule))
  }
  return rules
}

export function getFormSnapshot(doc = document) {
  const snapshot = {}
  const root = getFormRoot(doc)
  const groups = Array.from(root.querySelectorAll(FIELD_GROUP_SELECTOR))
  for (const group of groups) {
    const fileInput = group.querySelector(FILE_INPUT_SELECTOR)
    if (fileInput) {
      const label = getFieldLabel(group, fileInput)
      if (!label) continue
      const names = getFileNames(fileInput)
      snapshot[label] = fileInput.multiple ? names : names[0] || ""
      continue
    }
    const control = group.querySelector(FIELD_CONTROL_SELECTOR)
    if (!control) continue
    const label = getFieldLabel(group, control)
    if (!label) continue
    const choiceInputs = Array.from(
      group.querySelectorAll('input[type="checkbox"], input[type="radio"]'),
    )
    const checkedInputs = Array.from(
      group.querySelectorAll(
        'input[type="checkbox"]:checked, input[type="radio"]:checked',
      ),
    )
    if (choiceInputs.length) {
      snapshot[label] = checkedInputs
        .map(getCheckboxOrRadioOptionText)
        .filter(Boolean)
      continue
    }
    if (control instanceof HTMLSelectElement) {
      snapshot[label] = normalizeWhitespace(
        control.selectedOptions?.[0]?.textContent || control.value,
      )
      continue
    }
    snapshot[label] = control.value || ""
  }
  const resumeInput = root.querySelector(
    'input[type="file"][name="resume"], input#id_resume[type="file"]',
  )
  return (
    resumeInput && (snapshot["Resume/CV"] = resumeInput.files?.[0]?.name || ""),
    snapshot
  )
}
