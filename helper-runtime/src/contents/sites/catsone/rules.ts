// @ts-nocheck
/**
 * Catsone form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"

const TEXT_INPUT_TYPES = [
  "text",
  "email",
  "tel",
  "number",
  "url",
  "password",
  "date",
]

const TEXT_INPUT_SELECTOR =
  'input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="url"], input[type="password"], input[type="date"], textarea'

const DEFAULT_DATE_FORMAT = "MM-DD-YYYY"

const SKIP_INPUT_TYPES = new Set([
  "hidden",
  "file",
  "button",
  "submit",
  "reset",
])

const CAPTCHA_NAME_RE =
  /(?:^|[-_])(?:g-)?recaptcha-response|(?:^|[-_])h-captcha-response|(?:^|[-_])captcha-response/

function cleanLabelText(raw) {
  let text = (raw || "").replace(/\s*\*\s*/g, " ").trim()
  text = text.replace(/\s*\*\s*$/, "").trim()
  text = text.replace(/\s*\(required\)\s*$/i, "").trim()
  text = text.replace(/\s*\(mandatory\)\s*$/i, "").trim()
  text = text.replace(/\s+/g, " ").trim()
  return /[\p{L}\p{N}]/u.test(text) && text ? text : null
}

function isCaptchaControl(el) {
  return [el.id, el.name].some((value) =>
    CAPTCHA_NAME_RE.test((value || "").toLowerCase()),
  )
}

export function getFillingLabels() {
  const labels = []
  const primary = xpath.getOrderedNodesSafe(
    '//label[not(contains(concat(" ", normalize-space(@class), " "), " form-check-label ")) and not(contains(concat(" ", normalize-space(@class), " "), " form-option "))] | //fieldset[contains(concat(" ", normalize-space(@class), " "), " form-group ")]/legend[contains(concat(" ", normalize-space(@class), " "), " form-label ")]',
  )
  labels.push(...primary)

  const secondary = xpath.getOrderedNodesSafe(
    '//p[contains(@class, "form-text") and not(contains(@class, "form-field-error")) and *]',
  )
  labels.push(...secondary)
  return labels
}

export async function extractRules() {
  const labels = getFillingLabels()
  const rules = []

  for (const labelNode of labels) {
    const rule = parseLabelRule(labelNode)
    if (Array.isArray(rule)) {
      rules.push(...rule)
    } else if (rule) {
      rules.push(rule)
    }
  }

  return rules
}

function parseLabelRule(labelNode) {
  if (labelNode.classList.contains("form-option")) return null

  const radio = parseRadioRule(labelNode)
  if (radio) return radio

  const checkbox = parseCheckboxRule(labelNode)
  if (checkbox) return checkbox

  const select = parseSelectRule(labelNode)
  if (select) return select

  const multiSelect = parseMultiSelectRule(labelNode)
  if (multiSelect) return multiSelect

  const date = parseDateRule(labelNode)
  if (date) return date

  const text = parseTextRule(labelNode)
  return text || null
}

function parseTextRule(labelNode) {
  const label = getLabelText(labelNode)
  if (!label) return null

  const required = isRequiredLabel(labelNode)
  const input = findTextInput(labelNode)
  if (input && isDateInput(label, input)) return null
  if (label && input) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: input,
      $label: labelNode,
    }
  }
  return null
}

function parseDateRule(labelNode) {
  const label = getLabelText(labelNode)
  if (!label) return null

  const input = findTextInput(labelNode)
  if (input && isDateInput(label, input)) {
    return {
      type: enums.FIELD_TYPE.DATE,
      label,
      required: isRequiredLabel(labelNode),
      description: detectDateFormat(labelNode, input),
      $input: input,
      $label: labelNode,
    }
  }
  return null
}

function isDateInput(label, input) {
  const labelLower = label.toLowerCase()
  const labelHasDate = /\bdate\b/.test(labelLower)
  const isNativeDate =
    input instanceof HTMLInputElement && input.type === "date"
  const attrBlob = [
    input.id,
    input.getAttribute("name"),
    input.getAttribute("aria-label"),
    input.getAttribute("placeholder"),
    input.getAttribute("autocomplete"),
    String(input.className || ""),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
  const attrsHaveDate = /\bdate\b|datepicker|date-picker/.test(attrBlob)
  const inDatepicker =
    input.closest(".react-datepicker-wrapper") !== null ||
    input.closest(".react-datepicker__input-container") !== null

  return isNativeDate || inDatepicker || attrsHaveDate || labelHasDate
}

function detectDateFormat(labelNode, input) {
  const candidates = [
    input.value,
    input.getAttribute("placeholder"),
    input.getAttribute("aria-label"),
    input.getAttribute("title"),
    getDescribedByText(input),
    labelNode.parentElement?.textContent,
  ]

  for (const candidate of candidates) {
    const format = matchDateFormat(candidate || "")
    if (format) return format
  }
  return DEFAULT_DATE_FORMAT
}

function getDescribedByText(input) {
  const ids = input.getAttribute("aria-describedby")
  if (!ids) return ""
  return ids
    .split(/\s+/)
    .map((id) => document.getElementById(id)?.textContent?.trim() || "")
    .filter(Boolean)
    .join(" ")
}

function matchDateFormat(text) {
  const value = text.trim()
  if (!value) return null
  if (/\bMM-DD-YYYY\b/i.test(value) || /\bM-D-YYYY\b/i.test(value)) {
    return "MM-DD-YYYY"
  }
  if (/\bMM\/DD\/YYYY\b/i.test(value) || /\bM\/D\/YYYY\b/i.test(value)) {
    return "MM/DD/YYYY"
  }
  if (/\bYYYY-MM-DD\b/i.test(value)) return "YYYY-MM-DD"
  if (/\bYYYY\/MM\/DD\b/i.test(value)) return "YYYY/MM/DD"
  if (/\b\d{1,2}-\d{1,2}-\d{4}\b/.test(value)) return "MM-DD-YYYY"
  if (/\b\d{1,2}\/\d{1,2}\/\d{4}\b/.test(value)) return "MM/DD/YYYY"
  if (/\b\d{4}-\d{1,2}-\d{1,2}\b/.test(value)) return "YYYY-MM-DD"
  if (/\b\d{4}\/\d{1,2}\/\d{1,2}\b/.test(value)) return "YYYY/MM/DD"
  return null
}

function parseRadioRule(labelNode) {
  const label = getLabelText(labelNode)
  if (!label) return null

  const required = isRequiredLabel(labelNode)
  const radioParent = labelNode.nextElementSibling
  const radios = Array.from(
    xpath.getOrderedNodesSafe(".//input[@type='radio']", radioParent),
  )
  if (radios.length === 0) return null

  const options = radios.map((radio) => getControlOptionLabel(radio)).filter(Boolean)
  if (radioParent && options.length > 0) {
    return {
      type: enums.FIELD_TYPE.RADIO,
      label,
      required,
      options,
      $input: radios,
      $label: labelNode,
      $radioParent: radioParent,
    }
  }
  return null
}

function parseCheckboxRule(labelNode) {
  const labelText = getLabelText(labelNode)
  const required = isRequiredLabel(labelNode)
  let checkboxParent = labelNode.nextElementSibling
  let checkboxes = Array.from(
    xpath.getOrderedNodesSafe('.//input[@type="checkbox"]', checkboxParent),
  )

  if (checkboxes.length === 0) {
    checkboxes = Array.from(
      xpath.getOrderedNodesSafe('.//input[@type="checkbox"]', labelNode),
    )
    if (checkboxes.length > 0) checkboxParent = labelNode
  }
  if (checkboxes.length === 0) return null

  let options = checkboxes
    .map((checkbox) => getCheckboxOptionLabel(checkbox))
    .filter(Boolean)
  if (options.length === 0 && checkboxes.length === 1) {
    options = ["yes", "no"]
  }

  let label = labelText
  if (!label) {
    label = options.find((option) => !!option) || null
  }

  if (label && checkboxParent) {
    return {
      type: enums.FIELD_TYPE.CHECKBOX,
      label,
      required,
      options,
      $label: labelNode,
      $checkboxs: checkboxes,
    }
  }
  return null
}

function getCheckboxOptionLabel(checkbox) {
  return getControlOptionLabel(checkbox)
}

function getControlOptionLabel(input) {
  const sibling = cleanLabelText(input.nextElementSibling?.textContent)
  if (sibling) return sibling

  const closestLabel = input.closest("label")
  const closestText = cleanLabelText(closestLabel?.textContent)
  if (closestText) return closestText

  if (input instanceof HTMLInputElement && input.id) {
    const forLabel = document.querySelector(`label[for="${input.id}"]`)
    const forText = cleanLabelText(forLabel?.textContent)
    if (forText) return forText
  }
  return null
}

function parseSelectRule(labelNode) {
  const label = getLabelText(labelNode)
  if (!label) return null

  const required = isRequiredLabel(labelNode)
  let select = null

  if (labelNode instanceof HTMLLabelElement && labelNode.htmlFor) {
    const byFor = document.getElementById(labelNode.htmlFor)
    if (byFor && byFor.tagName === "SELECT" && !byFor.multiple) {
      select = byFor
    }
  }

  if (!select) {
    const sibling = labelNode.nextElementSibling
    if (sibling && sibling.tagName === "SELECT" && !sibling.multiple) {
      select = sibling
    }
  }

  if (!select) {
    const parent = labelNode.parentElement
    if (parent) select = parent.querySelector("select:not([multiple])")
  }

  if (select) {
    const options = Array.from(select.options)
      .map((option) => option.textContent?.trim() || "")
      .filter((text) => text !== "")
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required,
      options,
      $input: select,
      $label: labelNode,
    }
  }
  return null
}

function parseMultiSelectRule(labelNode) {
  const label = getLabelText(labelNode)
  if (!label) return null

  const required = isRequiredLabel(labelNode)
  let select = null

  if (labelNode instanceof HTMLLabelElement && labelNode.htmlFor) {
    const byFor = document.getElementById(labelNode.htmlFor)
    if (byFor && byFor.tagName === "SELECT" && byFor.multiple) {
      select = byFor
    }
  }

  if (!select) {
    const sibling = labelNode.nextElementSibling
    if (sibling && sibling.tagName === "SELECT" && sibling.multiple) {
      select = sibling
    }
  }

  if (!select) {
    const parent = labelNode.parentElement
    if (parent) select = parent.querySelector("select[multiple]")
  }

  if (select) {
    const options = Array.from(select.options)
      .map((option) => option.textContent?.trim() || "")
      .filter((text) => text !== "")
    return {
      type: enums.FIELD_TYPE.MULTI_SELECT,
      label,
      required,
      options,
      $input: select,
      $label: labelNode,
    }
  }
  return null
}

function isRequiredLabel(labelNode) {
  const text = labelNode.textContent || ""
  if (
    text.includes("*") ||
    labelNode.classList.contains("required") ||
    labelNode.classList.contains("mandatory") ||
    labelNode.classList.contains("must-fill")
  ) {
    return true
  }

  if (labelNode instanceof HTMLLabelElement && labelNode.htmlFor) {
    const control = document.getElementById(labelNode.htmlFor)
    if (control && control.required) return true
  }

  return !!labelNode.closest(".required, .mandatory, .must-fill")
}

function getLabelText(labelNode) {
  return cleanLabelText(labelNode.textContent)
}

function findTextInput(labelNode) {
  let input = null

  if (labelNode instanceof HTMLLabelElement && labelNode.htmlFor) {
    const byFor = document.getElementById(labelNode.htmlFor)
    if (byFor && (byFor.tagName === "INPUT" || byFor.tagName === "TEXTAREA")) {
      if (
        byFor.tagName === "TEXTAREA" ||
        (byFor.tagName === "INPUT" && TEXT_INPUT_TYPES.includes(byFor.type))
      ) {
        input = byFor
      }
    }
  }

  if (!input) input = labelNode.querySelector(TEXT_INPUT_SELECTOR)

  if (!input) {
    const sibling = labelNode.nextElementSibling
    if (
      sibling &&
      (sibling.tagName === "INPUT" || sibling.tagName === "TEXTAREA")
    ) {
      if (
        sibling.tagName === "TEXTAREA" ||
        (sibling.tagName === "INPUT" &&
          TEXT_INPUT_TYPES.includes(sibling.type))
      ) {
        input = sibling
      }
    }
  }

  if (!input) {
    const parent = labelNode.parentElement
    if (parent) input = parent.querySelector(TEXT_INPUT_SELECTOR)
  }

  return input
}

export async function getFormSnapshot() {
  const snapshot = {}
  const controls = document.querySelectorAll("input, textarea, select")

  for (const control of controls) {
    const type = control.type?.toLowerCase() || ""
    if (SKIP_INPUT_TYPES.has(type) || isCaptchaControl(control)) continue

    let exactLabel = ""
    let key = ""

    if (control.id) {
      const forLabel = document.querySelector(`label[for="${control.id}"]`)
      if (forLabel) {
        exactLabel = key = cleanLabelText(forLabel.textContent) || ""
      }
    }

    if (!key && type === "radio" && control.name) {
      key = cleanLabelText(control.name) || ""
    }
    if (!key && type === "radio") {
      key = cleanLabelText(control.value) || ""
    }
    if (!key) continue

    if (type === "checkbox") {
      snapshot[key] = control.checked ? "Yes" : "No"
    } else if (type === "radio") {
      if (control.checked) {
        snapshot[key] = exactLabel || control.value || ""
      }
    } else if (control.tagName === "SELECT") {
      if (control.multiple) {
        const selected = Array.from(control.selectedOptions)
          .map((option) => option.textContent?.trim() || option.value)
          .filter(Boolean)
        snapshot[key] = selected.join(", ")
      } else {
        const selected = control.selectedOptions[0]
        snapshot[key] = selected
          ? selected.textContent?.trim() || selected.value
          : ""
      }
    } else {
      snapshot[key] = control.value
    }
  }

  return snapshot
}
