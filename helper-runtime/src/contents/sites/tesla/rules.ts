// @ts-nocheck
/**
 * Tesla — form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as lang from "../../../utils/lang.js"

const DATE_DESCRIPTION = "YYYY-MM-DD"
const EEO_LABEL = "equal employee opportunities"

function escapeAttributeValue(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
}

function getSameNameInputs(input, type) {
  const name = input.getAttribute("name")
  if (!name) return [input]
  const root = input.closest("form") || document
  return Array.from(
    root.querySelectorAll(
      `input[type="${type}"][name="${escapeAttributeValue(name)}"]`,
    ),
  )
}

function getOptionLabel(input) {
  const forLabel = input.id
    ? document.querySelector(
        `label[for="${escapeAttributeValue(input.id)}"]`,
      )
    : null
  const sibling =
    input.nextElementSibling || input.parentElement?.nextElementSibling
  const nestedLabel = sibling?.querySelector?.("label")
  return (
    forLabel?.textContent?.trim() ||
    nestedLabel?.textContent?.trim() ||
    sibling?.textContent?.trim() ||
    input.nextSibling?.textContent?.trim() ||
    input.value ||
    ""
  )
}

function isEeoLabel(label) {
  return label.toLowerCase().includes(EEO_LABEL)
}

function isRequiredField(input, label) {
  const node = input
  const formLabel = input
    .closest?.(".tds-form-item")
    ?.querySelector?.("label")
  return (
    !!node.required ||
    input.getAttribute("aria-required") === "true" ||
    formLabel?.classList?.contains("tds-form-label--required") ||
    isEeoLabel(label)
  )
}

export async function extractRules() {
  const forms = xpath.getOrderedNodes(
    "//form[contains(@class, 'job-application-form')]",
    document,
  )
  const rules = []
  for (const form of forms) {
    const fields = xpath.getOrderedNodes(
      ".//input | .//textarea | .//select",
      form,
    )
    for (const field of fields) {
      const rule = await parseField(field)
      if (rule) rules.push(rule)
    }
  }
  return rules
}

async function parseField(field) {
  let fieldType
  let options
  let sameNameInputs

  const labelEl = xpath.getFirstOrderedNode(
    './ancestor::div[contains(@class, "tds-form-item")][1]//label',
    field,
  )
  if (
    xpath.getFirstOrderedNode(
      './ancestor::div[contains(@class, "tds-form-item")]/ancestor::div[contains(@class, "HiddenFields")]',
      field,
    ) ||
    !labelEl
  ) {
    return null
  }

  const label = labelEl?.textContent?.trim()
  if (lang.isEmpty(label)) return null

  const required = isRequiredField(field, label)

  if (field.tagName === "TEXTAREA") {
    fieldType = enums.FIELD_TYPE.TEXT
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required: !!required,
      $label: labelEl,
      $input: field,
    }
  }

  if (field.tagName === "INPUT" || field.tagName === "TEXTAREA") {
    if (field.getAttribute("type") === "file") return null
    const inputType = field.getAttribute("type")
    const isDate =
      inputType === "date" ||
      field.className.includes("tds-form-input-date")
    if (isDate) {
      return {
        type: enums.FIELD_TYPE.DATE,
        label,
        required: !!required,
        $label: labelEl,
        $input: field,
        description: DATE_DESCRIPTION,
      }
    }
    if (inputType === "radio") {
      const radios = getSameNameInputs(field, "radio")
      options = radios.reduce((list, radio) => {
        const optionLabel = getOptionLabel(radio)
        if (!lang.isEmpty(optionLabel) && radio.getAttribute("value")) {
          list.push(optionLabel)
        }
        return list
      }, [])
      if (radios.indexOf(field) >= 1) return null
      const radioParent =
        field.closest(".tds-form-input-group") ||
        field.closest(".tds-form-item") ||
        field.parentElement
      return radioParent
        ? {
            type: enums.FIELD_TYPE.RADIOGROUP,
            label,
            required: true,
            $label: labelEl,
            options,
            $radioParent: radioParent,
          }
        : null
    }
    if (inputType === "checkbox") {
      sameNameInputs = getSameNameInputs(field, "checkbox")
      options = sameNameInputs.reduce((list, checkbox) => {
        const optionLabel = getOptionLabel(checkbox)
        if (
          !lang.isEmpty(optionLabel) &&
          checkbox.getAttribute("value")
        ) {
          list.push(optionLabel)
        }
        return list
      }, [])
      if (sameNameInputs.indexOf(field) >= 1) return null
      return {
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required: !!required,
        $label: labelEl,
        $input: field,
        options,
        $checkboxs: sameNameInputs,
      }
    }
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required: !!required,
      $label: labelEl,
      $input: field,
    }
  }

  if (field.tagName === "SELECT") {
    fieldType = enums.FIELD_TYPE.SELECT
    const optionNodes = xpath.getOrderedNodes("./option", field)
    options = optionNodes.reduce((list, option) => {
      const text = option.textContent?.trim()
      if (!lang.isEmpty(text) && option.getAttribute("value")) {
        list.push(text)
      }
      return list
    }, [])
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required: !!required,
      $input: field,
      $label: labelEl,
      options,
    }
  }

  return null
}

export function getFormSnapshot() {
  const snapshot = {}
  const fields = document.querySelectorAll("input, select, textarea")
  for (const field of fields) {
    if (field.tagName === "INPUT") {
      const input = field
      if (input.type === "file" || input.type === "hidden") continue
    }
    const labelEl = xpath.getFirstOrderedNode(
      './ancestor::div[contains(@class, "tds-form-item")][1]//label',
      field,
    )
    if (!labelEl) continue
    const label = labelEl.textContent?.trim() || ""
    if (!label) continue

    let value = ""
    if (field.tagName === "INPUT") {
      const input = field
      if (input.type === "checkbox") {
        value = input.checked ? "Yes" : "No"
      } else if (input.type === "radio") {
        const checked = document.querySelector(
          `input[type="radio"][name="${input.name}"]:checked`,
        )
        value = checked?.value || ""
      } else {
        value = input.value || ""
      }
    } else if (field.tagName === "SELECT") {
      const select = field
      value =
        select.options[select.selectedIndex]?.textContent?.trim() || ""
    } else if (field.tagName === "TEXTAREA") {
      const textarea = field
      value = textarea.value || ""
    }
    snapshot[label] = value
  }
  return snapshot
}
