// @ts-nocheck
/**
 * Okta — form rule extraction and autofill/submit snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"

export async function extractRules() {
  const rules = []
  const fieldsets = xpath.getOrderedNodesSafe(
    './/fieldset[contains(@class, "ods-fieldset")]',
    document.body,
  )
  for (const fieldset of fieldsets) {
    const rule = getRule(fieldset)
    if (rule) rules.push(rule)
  }
  return rules
}

export function getRule(fieldset) {
  const labelEl = xpath.getFirstOrderedNodeSafe(".//label[@for]", fieldset)
  const label = labelEl?.textContent?.trim() || ""
  const skipLabels = ["Paste", "Upload PDF"]
  if (skipLabels.some((skip) => label.includes(skip))) return null
  const required = labelEl?.classList.contains("form-required") || false
  const radios = xpath.getOrderedNodesSafe(".//input[@type='radio']", fieldset)
  if (radios.length > 0) {
    const options = radios.map((radio) => {
      const radioLabel = xpath.getFirstOrderedNodeSafe(
        `.//label[@for="${radio.id}"]`,
        fieldset,
      )
      return (radioLabel && radioLabel.textContent?.trim()) || radio.value
    })
    return {
      type: enums.FIELD_TYPE.RADIOGROUP,
      label,
      required,
      $input: radios[0],
      $label: labelEl,
      $radioParent: fieldset,
      options,
    }
  }
  const select = xpath.getFirstOrderedNodeSafe(".//select", fieldset)
  if (select) {
    const optionNodes = xpath.getOrderedNodesSafe("./option", select)
    const options = optionNodes
      .filter((option) => option.value && option.value !== "blank")
      .map((option) => option.textContent?.trim() || "")
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required,
      $input: select,
      $label: labelEl,
      options,
    }
  }
  const textarea = xpath.getFirstOrderedNodeSafe(".//textarea", fieldset)
  if (textarea) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: textarea,
      $label: labelEl,
    }
  }
  const textInput = xpath.getFirstOrderedNodeSafe(
    ".//input[@type='text'] | .//input[@type='email'] | .//input[@type='tel']",
    fieldset,
  )
  return textInput
    ? {
        type: enums.FIELD_TYPE.TEXT,
        label,
        required,
        $input: textInput,
        $label: labelEl,
      }
    : null
}

export async function getFormSnapshot(formRules) {
  return buildFormSnapshot(formRules, "okta")
}

function buildFormSnapshot(formRules, siteName) {
  const snapshot = {}
  for (const rule of formRules) {
    const label = String(rule?.label || "").trim()
    if (
      !label ||
      /captcha/i.test(label) ||
      rule.__machineOnly ||
      rule.type === enums.FIELD_TYPE.EDUCATION ||
      rule.type === enums.FIELD_TYPE.EMPLOYMENT
    ) {
      continue
    }
    try {
      if (
        rule.type === enums.FIELD_TYPE.CHECKBOX ||
        rule.type === enums.FIELD_TYPE.RADIOGROUP
      ) {
        snapshot[label] = getChoiceInputs(rule)
          .filter((input) => isReadableInput(input) && input.checked)
          .map(readChoiceLabel)
          .filter(Boolean)
          .join(", ")
        continue
      }
      const input = rule.$input
      if (!isReadableInput(input)) continue
      snapshot[label] = readInputValue(input)
    } catch (error) {
      console.warn(`[${siteName}] Failed to read snapshot field "${label}"`, error)
    }
  }
  return snapshot
}

function getChoiceInputs(rule) {
  const checkboxes = rule.$checkboxs
  if (Array.isArray(checkboxes) && checkboxes.length > 0) return checkboxes
  const fromParent = Array.from(
    rule.$radioParent?.querySelectorAll?.(
      'input[type="radio"], input[type="checkbox"]',
    ) || [],
  )
  if (fromParent.length > 0) return fromParent
  const input = rule.$input
  if (input && ["radio", "checkbox"].includes(input.type)) {
    return input.name
      ? Array.from(document.getElementsByName(input.name)).filter(
          (el) => el instanceof HTMLInputElement && el.type === input.type,
        )
      : [input]
  }
  return []
}

function isReadableInput(input) {
  if (!input) return false
  const type = String(input.type || "").toLowerCase()
  return (
    !["hidden", "file", "submit", "button", "image", "reset"].includes(type) &&
    !input.hidden &&
    !input.closest?.('[hidden], [aria-hidden="true"]') &&
    !isCssHidden(input)
  )
}

function isCssHidden(element) {
  const view = element.ownerDocument?.defaultView
  const getStyle = view?.getComputedStyle
    ? view.getComputedStyle.bind(view)
    : typeof window !== "undefined" &&
        typeof window.getComputedStyle === "function"
      ? window.getComputedStyle.bind(window)
      : null
  if (!getStyle) return false
  let node = element
  while (node) {
    let style
    try {
      style = getStyle(node)
    } catch {
      break
    }
    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      style.visibility === "collapse"
    ) {
      return true
    }
    node = node.parentElement
  }
  return false
}

function readChoiceLabel(input) {
  return String(
    input.getAttribute("data-label") ||
      input.getAttribute("aria-label") ||
      input.nextElementSibling?.textContent ||
      input.value ||
      "",
  ).trim()
}

function readInputValue(input) {
  if (input instanceof HTMLSelectElement) {
    return String(
      input.selectedOptions?.[0]?.textContent || input.value || "",
    ).trim()
  }
  if (input instanceof HTMLInputElement && input.type === "checkbox") {
    return String(input.checked)
  }
  return String(input.value || "")
}
