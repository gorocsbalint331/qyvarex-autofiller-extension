// @ts-nocheck
/**
 * CareerPlug form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"

const FIELD_SELECTOR =
  'input:not([type="hidden"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]), select, textarea'
const COVER_LETTER_RE =
  /\bcover\s*letter\b|cover_letter|coverletter/i

function cleanLabel(value) {
  return (value || "")
    .replace(/\s*\*\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function stripOptionalSuffix(value) {
  return cleanLabel(value)
    .replace(/\s*\(optional\)\s*$/i, "")
    .trim()
}

function isElementVisible(el) {
  if (!(el instanceof HTMLElement) || el.hidden || el.closest("[hidden]")) {
    return false
  }
  const style = window.getComputedStyle(el)
  return style.display !== "none" && style.visibility !== "hidden"
}

function getApplicationForm() {
  return (
    document.querySelector('form[action*="/apps"]') ||
    document.querySelector("form")
  )
}

function isCoverLetterField(el, extraLabel = "") {
  const haystack = [
    extraLabel,
    el.id,
    el.name,
    el.getAttribute("aria-label"),
    el.getAttribute("placeholder"),
    el.closest("fieldset")?.id,
    el.closest(".form-group")?.textContent,
  ]
    .filter(Boolean)
    .join(" ")
  return COVER_LETTER_RE.test(haystack)
}

function isSmsConsentCheckbox(el) {
  return /applicant_agrees_sms/i.test([el.name, el.id].join(" "))
}

function getElementName(el) {
  return el instanceof HTMLInputElement ||
    el instanceof HTMLTextAreaElement ||
    el instanceof HTMLSelectElement
    ? el.name
    : ""
}

function getFieldLabel(el) {
  const id = el.id
  const forLabel = id
    ? document.querySelector(`label[for="${CSS.escape(id)}"]`)
    : null
  if (forLabel) return stripOptionalSuffix(forLabel.textContent)

  const formGroup = el.closest(".form-group")
  const groupLabel =
    formGroup?.querySelector(":scope > .form-label label") ||
    formGroup?.querySelector(":scope > label")
  if (groupLabel) return stripOptionalSuffix(groupLabel.textContent)

  if (el instanceof HTMLTextAreaElement && isCoverLetterField(el)) {
    return "Cover Letter"
  }

  return stripOptionalSuffix(
    el.getAttribute("aria-label") ||
      el.getAttribute("placeholder") ||
      getElementName(el),
  )
}

function getRadioOptionLabel(radio) {
  const forLabel = radio.id
    ? document.querySelector(`label[for="${CSS.escape(radio.id)}"]`)
    : null
  return cleanLabel(
    forLabel?.textContent ||
      radio.closest("label")?.textContent ||
      radio.value,
  )
}

function isRequiredField(el, label) {
  return (
    el.hasAttribute("required") ||
    el.closest(".required") !== null ||
    /\brequired\b/i.test(el.getAttribute("aria-label") || "") ||
    /\brequired\b/i.test(label)
  )
}

function shouldSkipField(el) {
  const name = getElementName(el)
  if (el instanceof HTMLInputElement) {
    const type = el.type.toLowerCase()
    if (
      ["hidden", "file", "submit", "button", "reset", "image"].includes(type)
    ) {
      return true
    }
  }
  if (
    el.id === "recaptcha_response" ||
    name === "g-recaptcha-response" ||
    /resume_text/i.test(name)
  ) {
    return true
  }
  if (el instanceof HTMLTextAreaElement && isCoverLetterField(el)) {
    return false
  }
  return !isElementVisible(el)
}

function getSelectRule(select) {
  const label = getFieldLabel(select)
  if (!label) return null

  const options = Array.from(select.options)
    .map((option) =>
      cleanLabel(option.textContent || option.label || option.value),
    )
    .filter(Boolean)

  return {
    label,
    type: enums.FIELD_TYPE.SELECT,
    required: isRequiredField(select, label),
    $label: document.createElement("label"),
    $input: select,
    options,
  }
}

function getTextRule(el) {
  const label = getFieldLabel(el)
  if (!label) return null

  return {
    label,
    type:
      el instanceof HTMLTextAreaElement && isCoverLetterField(el, label)
        ? enums.FIELD_TYPE.COVER_LETTER
        : enums.FIELD_TYPE.TEXT,
    required: isRequiredField(el, label),
    $label: document.createElement("label"),
    $input: el,
  }
}

function getCheckboxOptionLabel(checkbox) {
  let forLabel = null
  if (checkbox.id) {
    forLabel = document.querySelector(
      `label[for="${CSS.escape(checkbox.id)}"]`,
    )
  }
  const wrappingLabel = checkbox.closest("label")
  return cleanLabel(
    forLabel?.textContent ||
      wrappingLabel?.textContent ||
      checkbox.value ||
      checkbox.name,
  )
}

export function getCheckboxRule(checkbox) {
  if (isSmsConsentCheckbox(checkbox)) return null

  const group = checkbox.closest(".answer_check_boxes.form-group")
  let checkboxes = [checkbox]
  let groupLabelEl = null

  if (group) {
    checkboxes = Array.from(
      group.querySelectorAll('input[type="checkbox"]'),
    ).filter((el) => isElementVisible(el) && !isSmsConsentCheckbox(el))
    if (!checkboxes.length || checkboxes[0] !== checkbox) return null
    groupLabelEl =
      group.querySelector(":scope > .form-label label") ||
      group.querySelector(".form-label label")
  }

  let label = getFieldLabel(checkbox)
  if (groupLabelEl) {
    label = stripOptionalSuffix(groupLabelEl.textContent)
  }
  if (!label) return null

  const options = checkboxes.map(getCheckboxOptionLabel)
  const $label = groupLabelEl || document.createElement("label")

  return {
    label,
    type: enums.FIELD_TYPE.CHECKBOX,
    required: isRequiredField(checkbox, label),
    $label,
    $input: checkbox,
    $checkboxs: checkboxes,
    options,
  }
}

function getRadioGroupRule(radio, form) {
  if (!radio.name) return null

  const radios = Array.from(
    form.querySelectorAll(
      `input[type="radio"][name="${CSS.escape(radio.name)}"]`,
    ),
  ).filter((el) => isElementVisible(el))
  if (!radios.length || radios[0] !== radio) return null

  const parent = radio.closest(".form-group") || radio.parentElement
  const label = getFieldLabel(radio)
  if (!label || !parent) return null

  return {
    label,
    type: enums.FIELD_TYPE.RADIOGROUP,
    required: isRequiredField(radio, label),
    $label: document.createElement("label"),
    $input: radio,
    $radioParent: parent,
    options: radios.map(getRadioOptionLabel).filter(Boolean),
  }
}

export async function extractRules() {
  const form = getApplicationForm()
  if (!form) return []

  const rules = []
  const fields = Array.from(form.querySelectorAll(FIELD_SELECTOR))

  for (const field of fields) {
    if (shouldSkipField(field)) continue

    if (field instanceof HTMLSelectElement) {
      const rule = getSelectRule(field)
      if (rule) rules.push(rule)
      continue
    }

    if (field instanceof HTMLTextAreaElement) {
      const rule = getTextRule(field)
      if (rule) rules.push(rule)
      continue
    }

    if (!(field instanceof HTMLInputElement)) continue

    if (field.type === "checkbox") {
      const rule = getCheckboxRule(field)
      if (rule) {
        console.debug("[CareerPlug] Extracted checkbox rule", {
          optionCount: rule.options.length,
          required: rule.required,
        })
        rules.push(rule)
      }
      continue
    }

    if (field.type === "radio") {
      const rule = getRadioGroupRule(field, form)
      if (rule) rules.push(rule)
      continue
    }

    const rule = getTextRule(field)
    if (rule) rules.push(rule)
  }

  return rules
}

export function getFormSnapshot() {
  const form = getApplicationForm()
  if (!form) return {}

  const snapshot = {}
  const fields = Array.from(form.querySelectorAll(FIELD_SELECTOR))

  for (const field of fields) {
    if (shouldSkipField(field)) continue

    if (field instanceof HTMLSelectElement) {
      const label = getFieldLabel(field)
      if (!label) continue
      const selected = field.selectedOptions[0]
      snapshot[label] = cleanLabel(
        selected?.textContent || selected?.label || field.value,
      )
      continue
    }

    if (field instanceof HTMLInputElement && field.type === "checkbox") {
      const rule = getCheckboxRule(field)
      if (!rule) continue
      const selected = []
      rule.$checkboxs.forEach((checkbox, index) => {
        if (checkbox.checked) selected.push(rule.options[index])
      })
      snapshot[rule.label] = selected.filter(Boolean).join(", ")
      continue
    }

    if (field instanceof HTMLInputElement && field.type === "radio") {
      const label = getFieldLabel(field)
      if (!label) continue
      if (field.checked) {
        snapshot[label] = getRadioOptionLabel(field)
      }
      continue
    }

    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLTextAreaElement
    ) {
      const label = getFieldLabel(field)
      if (!label) continue
      snapshot[label] = field.value
    }
  }

  return snapshot
}
