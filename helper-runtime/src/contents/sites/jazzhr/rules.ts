// @ts-nocheck
/**
 * JazzHR form rule extraction and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"

const DISABILITY_SIGNATURE_DATE_ID = "resumator-eeoc_disability_date-value"
const DISABILITY_SIGNATURE_TEXT_ID = "resumator-eeoc_disability_signature-value"

function extractDisabilitySignatureFields() {
  const inputs = Array.from(
    document.querySelectorAll("#disability-signature-area input"),
  )
  const fields = inputs.flatMap((input) => {
    if (
      input.id !== DISABILITY_SIGNATURE_TEXT_ID &&
      input.id !== DISABILITY_SIGNATURE_DATE_ID
    ) {
      return []
    }
    const label = input.closest("label")
    const labelText = getLabelText(label)
    if (!label || !labelText) return []
    const isDate = input.id === DISABILITY_SIGNATURE_DATE_ID
    return [
      {
        type: isDate ? enums.FIELD_TYPE.DATE : enums.FIELD_TYPE.TEXT,
        label: labelText,
        required: true,
        $input: input,
        $label: label,
        ...(isDate
          ? {
              description:
                "This is the Voluntary Self-Identification of Disability signature date. Use YYYY-MM-DD format.",
            }
          : {}),
      },
    ]
  })
  if (fields.length > 0) {
    console.info("[JazzHR][disability-signature] extracted fields", {
      fieldIds: fields.map((field) => field.$input.id),
      fieldTypes: fields.map((field) => field.type),
    })
  }
  return fields
}

function findLabelNode(formGroup) {
  let label = xpath.getFirstOrderedNodeSafe(
    './/div[contains(@class, "resumator-label")]',
    formGroup,
  )
  if (!label) {
    label = xpath.getFirstOrderedNodeSafe(
      './/label[contains(@class, "control-label")] | .//label[contains(@for, "resumator-eeo")][not(ancestor::div[contains(@class, "resumator-input")])]',
      formGroup,
    )
  }
  if (!label) {
    const checkboxes = xpath.getOrderedNodesSafe(
      './/input[@type="checkbox"]',
      formGroup,
    )
    const checkboxLabel = checkboxes[0]?.closest("label")
    if (checkboxes.length === 1 && checkboxLabel) label = checkboxLabel
  }
  if (!label) return null

  const text = getLabelText(label)
  if (!text && label.classList.contains("resumator-label")) {
    const nested = xpath.getFirstOrderedNodeSafe(
      './/div[contains(@class, "resumator-input")]//label',
      formGroup,
    )
    if (nested) return nested
  }
  return label
}

export function resolveCoverLetterStatus(label, required) {
  return label.toLowerCase().trim() !== "cover letter"
    ? ""
    : required
      ? "required"
      : "optional"
}

export function getCoverLetterStatus() {
  const textarea = document.querySelector(
    'textarea#resumator-coverletter-value[name="resumator-coverletter-value"], textarea#resumator-coverletter-value, textarea[name="resumator-coverletter-value"]',
  )
  if (!textarea) return ""
  const formGroup = textarea.closest(".form-group")
  if (!formGroup) return ""
  const label = findLabelNode(formGroup)
  const labelText = getLabelText(label)
  const required =
    !!xpath.getFirstOrderedNodeSafe(
      './/i[contains(@class, "asterisk")]',
      formGroup,
    ) ||
    textarea.required ||
    textarea.getAttribute("aria-required") === "true" ||
    label?.textContent?.includes("*") === true
  return resolveCoverLetterStatus(labelText, required)
}

export function extractRules() {
  const rules = []
  const groups = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "form-group")] | //div[contains(@class, "resumator-field-wrapper")] | //div[contains(@id, "disability-input-area")]',
    document.body,
  )
  const unique = new Set(groups)
  const filtered = Array.from(unique).filter((group) => {
    if (group.classList.contains("resumator-field-wrapper")) {
      const nestedInFormGroup = group.closest(".form-group") !== null
      return !nestedInFormGroup
    }
    return true
  })

  for (const group of filtered) {
    const labelNode = findLabelNode(group)
    if (!labelNode) continue
    const labelText = getLabelText(labelNode)
    if (labelText.toLowerCase().trim() === "address") {
      rules.push(...buildAddressRules(group, labelNode))
      continue
    }
    const normalized = labelText.toLowerCase().replace(/\s+/g, " ").trim()
    if (normalized === "resume" || normalized.includes("human check")) continue
    const rule = getRule(group, labelNode, labelText)
    if (rule) rules.push(rule)
  }

  rules.push(...extractDisabilitySignatureFields())
  return rules
}

function getInputValue(input) {
  const value = input?.value
  return typeof value === "string" ? value.trim() : ""
}

function getSelectSnapshotValue(select) {
  const selected = select.selectedOptions?.[0]
  const text = selected?.textContent?.replace(/\s+/g, " ")?.trim()
  return text && text !== "Please Select" ? text : getInputValue(select)
}

function getCheckboxOptionLabel(checkbox, fallback = "") {
  const ariaLabel = checkbox.getAttribute("aria-label")?.trim()
  if (ariaLabel) return ariaLabel
  const label = checkbox.closest("label")
  if (label) {
    const clone = label.cloneNode(true)
    clone.querySelector('input[type="checkbox"]')?.remove()
    const text = clone.textContent?.replace(/\s+/g, " ").trim()
    if (text) return text
  }
  return checkbox.value || fallback
}

function getRuleSnapshotValue(rule) {
  if (rule.type === enums.FIELD_TYPE.SELECT) return getSelectSnapshotValue(rule.$input)
  if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
    const checkboxes = rule.$checkboxs || [rule.$input]
    const checked = checkboxes
      .map((checkbox, index) =>
        checkbox?.checked ? getCheckboxOptionLabel(checkbox, rule.options?.[index]) : "",
      )
      .filter(Boolean)
    return checked.length === 1 && checked[0] === rule.label
      ? "Yes"
      : checked.length > 0
        ? checked.join(", ")
        : "No"
  }
  if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
    const radios = Array.from(
      (rule.$radioParent || document).querySelectorAll?.('input[type="radio"]') ||
        [],
    )
    const selectedIndex = radios.findIndex((radio) => radio.checked)
    if (selectedIndex < 0) return ""
    const option = rule.options?.[selectedIndex]
    if (option) return option
    const selected = radios[selectedIndex]
    return (
      selected.closest("label")?.textContent?.replace(/\s+/g, " ").trim() ||
      selected.value ||
      ""
    )
  }
  return getInputValue(rule.$input)
}

export function getFormSnapshot(rulesList = extractRules()) {
  const snapshot = {}
  for (const rule of rulesList) {
    if (rule.label) snapshot[rule.label] = getRuleSnapshotValue(rule)
  }
  return snapshot
}

export function getRule(formGroup, labelNode, labelText) {
  const asterisk = xpath.getFirstOrderedNodeSafe(
    './/i[contains(@class, "asterisk")]',
    formGroup,
  )
  const required = !!asterisk
  const radios = xpath.getOrderedNodesSafe('.//input[@type="radio"]', formGroup)
  if (radios.length > 0) {
    let radioParent = xpath.getFirstOrderedNodeSafe(
      './/div[contains(@class, "resumator-input")]',
      formGroup,
    )
    if (!radioParent) radioParent = formGroup
    const options = radios
      .map((radio) => {
        const label = radio.closest("label")
        if (label) {
          const clone = label.cloneNode(true)
          const nestedInput = clone.querySelector('input[type="radio"]')
          if (nestedInput) nestedInput.remove()
          return clone.textContent?.trim() || ""
        }
        return radio.value || ""
      })
      .filter((text) => text.length > 0)
    if (options.length > 0) {
      return {
        type: enums.FIELD_TYPE.RADIOGROUP,
        label: labelText,
        required,
        $input: radios[0],
        $label: labelNode,
        $radioParent: radioParent,
        options,
      }
    }
  }

  const textInput = xpath.getFirstOrderedNodeSafe(
    './/input[contains(@type, "text")] | .//input[contains(@type, "email")] | .//input[contains(@type, "tel")] ',
    formGroup,
  )
  if (textInput) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label: labelText,
      required,
      $input: textInput,
      $label: labelNode,
    }
  }

  const textarea = xpath.getFirstOrderedNodeSafe(".//textarea", formGroup)
  if (textarea) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label: labelText,
      required,
      $input: textarea,
      $label: labelNode,
    }
  }

  const select = xpath.getFirstOrderedNodeSafe(".//select", formGroup)
  if (select) {
    const optionNodes = xpath.getOrderedNodesSafe(".//option", select)
    const options = optionNodes.map((option) => option.textContent.trim())
    if (options.length > 0) {
      return {
        type: enums.FIELD_TYPE.SELECT,
        label: labelText,
        required,
        $input: select,
        $label: labelNode,
        options: options.filter((option) => option !== "Please Select"),
      }
    }
  }

  const checkboxes = xpath.getOrderedNodesSafe(
    './/input[@type="checkbox"]',
    formGroup,
  )
  if (checkboxes.length > 0) {
    const options = checkboxes
      .map((checkbox) => {
        const ariaLabel = checkbox.getAttribute("aria-label")
        if (ariaLabel) return ariaLabel.trim()
        const label = checkbox.closest("label")
        if (label) {
          const clone = label.cloneNode(true)
          const nestedInput = clone.querySelector('input[type="checkbox"]')
          if (nestedInput) nestedInput.remove()
          return clone.textContent?.trim() || ""
        }
        return checkbox.value || checkbox.textContent?.trim() || ""
      })
      .filter((option) => option !== null && option.length > 0)
    if (options.length > 0) {
      return {
        type: enums.FIELD_TYPE.CHECKBOX,
        label: labelText,
        required,
        $checkboxs: checkboxes,
        $input: checkboxes[0],
        $label: labelNode,
        options,
      }
    }
  }
}

function getLabelText(labelNode) {
  if (!labelNode) return ""
  const hasControls = labelNode.querySelector("select, input, textarea") !== null
  if (!hasControls) {
    return labelNode.textContent?.trim().replace("*", "") || ""
  }
  {
    const text = Array.from(labelNode.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent.trim())
      .join(" ")
    return text
  }
}

function buildAddressRules(formGroup, labelNode) {
  const rules = []
  const asterisk = xpath.getFirstOrderedNodeSafe(
    './/i[contains(@class, "asterisk")]',
    formGroup,
  )
  const required = !!asterisk
  const inputs = xpath.getOrderedNodesSafe(
    './/input[contains(@type, "text")]',
    formGroup,
  )
  for (const input of inputs) {
    const placeholder = input.getAttribute("placeholder")
    if (placeholder) {
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: placeholder == "Address" ? "Address Line" : placeholder,
        required,
        $input: input,
        $label: labelNode,
      })
    }
  }
  return rules
}
