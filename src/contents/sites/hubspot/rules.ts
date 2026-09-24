// @ts-nocheck
/**
 * HubSpot form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"

const FIELD_SELECTOR = ".hs-form-field"

const normalizeText = (text) =>
  text?.replace(/\s+/g, " ").replace(/\s+\*/g, "*").trim() || ""

const stripRequiredMarker = (text) =>
  normalizeText(text).replace(/\s*\*$/, "").trim()

const getLabelElement = (field) =>
  field.querySelector("label, legend, span")

export function getHubspotLabelText(field) {
  let labeledControl = field.querySelector(
    "input[label], textarea[label], select[label]",
  )
  let attributeLabel = labeledControl?.getAttribute("label")
  if (attributeLabel) return stripRequiredMarker(attributeLabel)

  let labelElement = getLabelElement(field)
  return stripRequiredMarker(labelElement?.textContent || "")
}

export function isHubspotFieldRequired(field) {
  return (
    !!field.querySelector(".hs-form-required") ||
    !!field.querySelector("[required]") ||
    /\*$/.test(normalizeText(getLabelElement(field)?.textContent || ""))
  )
}

const getSelectOptions = (select) =>
  Array.from(select.options)
    .map((option) => normalizeText(option.textContent))
    .filter((text) => text && !/^[-\s]*select[-\s]*$/i.test(text))

const getChoiceLabel = (input) => {
  let label = input.closest("label")
  return normalizeText(label?.textContent || input.value)
}

const buildTextRule = (field, label, required) => {
  let input = field.querySelector(
    'textarea, input:not([type="hidden"]):not([type="file"]):not([type="radio"]):not([type="checkbox"]):not([type="button"]):not([type="submit"])',
  )
  if (!input) return null
  return {
    type: enums.FIELD_TYPE.TEXT,
    label,
    required,
    $input: input,
    $label: getLabelElement(field) || field,
  }
}

const buildSearchRule = (field, label, required) => {
  let input = field.querySelector(
    'input#gh-apply-location[name="location"], input.autocomplete.pac-target-input',
  )
  if (!input) return null
  return {
    type: enums.FIELD_TYPE.SEARCH,
    label,
    required,
    $input: input,
    $label: getLabelElement(field) || field,
    description: "City, State/Province, Country",
  }
}

const buildSelectRule = (field, label, required) => {
  let select = field.querySelector("select")
  if (!select) return null
  return {
    type: enums.FIELD_TYPE.SELECT,
    label,
    required,
    options: getSelectOptions(select),
    $input: select,
    $label: getLabelElement(field) || field,
  }
}

const buildCheckboxRule = (field, label, required) => {
  let checkboxes = Array.from(
    field.querySelectorAll('input[type="checkbox"]'),
  )
  if (!checkboxes.length) return null
  return {
    type: enums.FIELD_TYPE.CHECKBOX,
    label,
    required,
    options: checkboxes.map(getChoiceLabel).filter(Boolean),
    $checkboxs: checkboxes,
    $input: checkboxes[0],
    $label: getLabelElement(field) || field,
  }
}

const buildRadioRule = (field, label, required) => {
  let radios = Array.from(field.querySelectorAll('input[type="radio"]'))
  if (!radios.length) return null
  return {
    type: enums.FIELD_TYPE.RADIO,
    label,
    required,
    options: radios.map(getChoiceLabel).filter(Boolean),
    $input: radios,
    $radioParent: field,
    $label: getLabelElement(field) || field,
  }
}

export function extractRules(root = document) {
  let fields = Array.from(root.querySelectorAll(FIELD_SELECTOR))
  let rules = []

  for (let field of fields) {
    if (field.querySelector('input[type="file"]')) continue

    let label = getHubspotLabelText(field)
    if (!label) continue

    let required = isHubspotFieldRequired(field)
    let rule =
      buildCheckboxRule(field, label, required) ||
      buildRadioRule(field, label, required) ||
      buildSelectRule(field, label, required) ||
      buildSearchRule(field, label, required) ||
      buildTextRule(field, label, required)

    if (rule) rules.push(rule)
  }

  return rules
}

export function getFormSnapshot(root = document) {
  let snapshot = {}
  let fields = Array.from(root.querySelectorAll(FIELD_SELECTOR))

  for (let field of fields) {
    let label = getHubspotLabelText(field)
    if (!label) continue

    let fileInput = field.querySelector('input[type="file"]')
    if (fileInput) {
      snapshot[label] = normalizeText(field.textContent)
      continue
    }

    let select = field.querySelector("select")
    if (select) {
      let selected = select.selectedOptions?.[0]
      snapshot[label] = normalizeText(selected?.textContent || select.value)
      continue
    }

    let checkedChoices = Array.from(
      field.querySelectorAll(
        'input[type="checkbox"]:checked, input[type="radio"]:checked',
      ),
    )
    if (checkedChoices.length) {
      snapshot[label] = checkedChoices.map(getChoiceLabel).filter(Boolean)
      continue
    }

    let textInput = field.querySelector(
      'textarea, input:not([type="hidden"]):not([type="file"]):not([type="radio"]):not([type="checkbox"]):not([type="button"]):not([type="submit"])',
    )
    if (textInput) {
      snapshot[label] = textInput.value || ""
    }
  }

  return snapshot
}
