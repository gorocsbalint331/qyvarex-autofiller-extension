// @ts-nocheck
/**
 * TrinetHire — form rule extraction and snapshot.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"

export function extractRules() {
  const rules = []
  const groups = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "form-group") and not(contains(@class, "row"))]',
    document.body,
  )
  for (const group of groups) {
    const labelEl = xpath.getFirstOrderedNodeSafe(".//label[@for]", group)
    if (!labelEl) continue
    const label = getLabelText(labelEl)
    if (isApplicantSkillsGroup(group)) {
      const skillRules = getApplicantSkillRules(group)
      if (skillRules.length > 0) {
        rules.push(...skillRules)
        continue
      }
    }
    if (label.toLowerCase().trim().includes("location")) {
      const locationRules = getLocationRules(group, labelEl)
      rules.push(...locationRules)
      continue
    }
    if (label.toLowerCase().trim().includes("resume")) continue
    const workHourRules = getWorkHourRules(group, labelEl, label)
    if (workHourRules.length > 0) {
      rules.push(...workHourRules)
      continue
    }
    const rule = getRule(group, labelEl, label)
    rule && rules.push(rule)
  }
  return rules
}

export async function getFormSnapshot(formRules) {
  const snapshot = {}
  for (const rule of formRules) {
    const label = String(rule?.label || "").trim()
    if (
      !(!label || /captcha/i.test(label)) &&
      !rule.__machineOnly &&
      rule.type !== enums.FIELD_TYPE.EDUCATION &&
      rule.type !== enums.FIELD_TYPE.EMPLOYMENT
    )
      try {
        if (
          rule.type === enums.FIELD_TYPE.CHECKBOX ||
          rule.type === enums.FIELD_TYPE.RADIOGROUP
        ) {
          const controls = getChoiceControls(rule)
          if (controls.length > 0) {
            snapshot[label] = controls
              .filter((control) => isReadableControl(control) && control.checked)
              .map(getChoiceControlLabel)
              .filter(Boolean)
              .join(", ")
            continue
          }
        }
        const input = rule.$input
        if (!isReadableControl(input)) continue
        snapshot[label] = readControlValue(input)
      } catch (error) {
        console.warn(
          `[trinethire] Failed to read snapshot field "${label}"`,
          error,
        )
      }
  }
  return snapshot
}

function getChoiceControls(rule) {
  const checkboxes = rule.$checkboxs || []
  return checkboxes.length > 0
    ? checkboxes
    : rule.type === enums.FIELD_TYPE.RADIOGROUP
      ? Array.from(
          rule.$radioParent?.querySelectorAll('input[type="radio"]') || [],
        )
      : []
}

function getChoiceControlLabel(control) {
  return String(
    control.getAttribute("data-label") ||
      control.getAttribute("aria-label") ||
      control.nextElementSibling?.textContent ||
      control.value ||
      "",
  ).trim()
}

function isReadableControl(control) {
  if (!control) return false
  const type = String(control.type || "").toLowerCase()
  return (
    !["hidden", "file", "submit", "button", "image", "reset"].includes(type) &&
    !control.hidden &&
    !control.closest?.('[hidden], [aria-hidden="true"]') &&
    !isHiddenByComputedStyle(control)
  )
}

function isHiddenByComputedStyle(control) {
  let node = control
  for (; node; ) {
    const style = getComputedStyleSafe(control, node)
    if (style) {
      const display = String(style.display || "").trim().toLowerCase()
      const visibility = String(style.visibility || "").trim().toLowerCase()
      if (
        "none" === display ||
        "hidden" === visibility ||
        "collapse" === visibility
      )
        return true
    }
    node = node.parentElement
  }
  return false
}

function getComputedStyleSafe(owner, node) {
  let ownerView = null
  try {
    ownerView = owner.ownerDocument?.defaultView || null
  } catch {}
  const globalWindow = "undefined" != typeof window ? window : null
  const views = [ownerView, globalWindow]
  for (const view of views)
    if (view && "function" == typeof view.getComputedStyle)
      try {
        return view.getComputedStyle(node)
      } catch {}
  return null
}

function readControlValue(control) {
  return control instanceof HTMLSelectElement
    ? String(
        control.selectedOptions?.[0]?.textContent || control.value || "",
      ).trim()
    : control instanceof HTMLInputElement && "checkbox" === control.type
      ? String(control.checked)
      : String(control.value || "")
}

function isApplicantSkillsGroup(group) {
  return (
    group.classList?.contains("applicant-skills") ||
    !!group.querySelector(".skill-name")
  )
}

function getApplicantSkillRules(group) {
  const rules = []
  const items = Array.from(group.querySelectorAll("li"))
  for (const item of items) {
    const nameEl = item.querySelector(".skill-name")
    if (!nameEl) continue
    const label = getLabelText(nameEl)
    if (!label) continue
    const radioParent =
      item.querySelector(".thire-radio-group") || item
    const radios = Array.from(
      radioParent.querySelectorAll('input[type="radio"]'),
    )
    if (0 === radios.length) continue
    const options = radios
      .map(getRadioOptionText)
      .filter((text) => text.length > 0)
    0 !== options.length &&
      rules.push({
        type: enums.FIELD_TYPE.RADIOGROUP,
        label,
        required: false,
        $input: radios[0],
        $label: nameEl,
        $radioParent: item,
        options,
      })
  }
  return rules
}

function getRadioOptionText(radio) {
  const dataLabel = radio.getAttribute("data-label")?.trim()
  if (dataLabel) return dataLabel
  const label = radio.closest("label")
  if (label) {
    const clone = label.cloneNode(true)
    const nested = clone.querySelector('input[type="radio"]')
    return nested && nested.remove(), clone.textContent?.trim() || ""
  }
  return radio.value || ""
}

export function getRule(group, labelEl, label) {
  const requiredLabel = xpath.getFirstOrderedNodeSafe(
    './/label[contains(@class, "required")]',
    group,
  )
  const required = !!requiredLabel
  const radios = xpath.getOrderedNodesSafe('.//input[@type="radio"]', group)
  if (radios.length > 0) {
    const radioParent = group
    const options = radios
      .map(getRadioOptionText)
      .filter((text) => text.length > 0)
    if (options.length > 0)
      return {
        type: enums.FIELD_TYPE.RADIOGROUP,
        label,
        required,
        $input: radios[0],
        $label: labelEl,
        $radioParent: radioParent,
        options,
      }
  }
  const select = xpath.getFirstOrderedNodeSafe(".//select", group)
  if (select) {
    const optionNodes = xpath.getOrderedNodesSafe(".//option", select)
    const options = optionNodes.map((option) => option.textContent.trim())
    if (options.length > 0)
      return {
        type: enums.FIELD_TYPE.SELECT,
        label,
        required,
        $input: select,
        $label: labelEl,
        options: options.filter((text) => "" !== text),
      }
  }
  const checkboxes = xpath.getOrderedNodesSafe(
    './/input[@type="checkbox"]',
    group,
  )
  if (checkboxes.length > 0) {
    const options = checkboxes
      .map((checkbox) => {
        const ariaLabel = checkbox.getAttribute("aria-label")
        if (ariaLabel) return ariaLabel.trim()
        const label = checkbox.closest("label")
        if (label) {
          const clone = label.cloneNode(true)
          const nested = clone.querySelector('input[type="checkbox"]')
          return nested && nested.remove(), clone.textContent?.trim() || ""
        }
        return checkbox.value || checkbox.textContent?.trim() || ""
      })
      .filter((text) => null !== text && text.length > 0)
    if (options.length > 0)
      return {
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required,
        $checkboxs: checkboxes,
        $input: checkboxes[0],
        $label: labelEl,
        options,
      }
  }
  const textInput = xpath.getFirstOrderedNodeSafe(
    './/input[contains(@type, "text")] | .//input[contains(@type, "email")] | .//input[contains(@type, "tel")] ',
    group,
  )
  if (textInput)
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: textInput,
      $label: labelEl,
    }
  const textarea = xpath.getFirstOrderedNodeSafe(".//textarea", group)
  return textarea
    ? {
        type: enums.FIELD_TYPE.TEXT,
        label,
        required,
        $input: textarea,
        $label: labelEl,
      }
    : null
}

function getWorkHourRules(group, labelEl, label) {
  const inputs = Array.from(group.querySelectorAll("input.work-hour-text"))
  if (inputs.length < 2) return []
  const requiredLabel = xpath.getFirstOrderedNodeSafe(
    './/label[contains(@class, "required")]',
    group,
  )
  const required = !!requiredLabel
  const rules = []
  for (const input of inputs) {
    const day =
      input.closest("tr")?.querySelector(".display")?.textContent?.trim() ||
      input.name?.match(/\[(\w+)\]/)?.[1] ||
      ""
    day &&
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: `${label} - ${day}`,
        required,
        $input: input,
        $label: labelEl,
      })
  }
  return rules
}

function getLabelText(labelEl) {
  const hasNestedControl =
    null !== labelEl.querySelector("select, input, textarea")
  if (!hasNestedControl)
    return labelEl.textContent?.trim().replace("*", "") || ""
  {
    const text = Array.from(labelEl.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent.trim())
      .join(" ")
    return text
  }
}

function getLocationRules(group, labelEl) {
  const rules = []
  const addressInput = group.querySelector('input[type="text"]')
  addressInput &&
    rules.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "Address Line",
      required: !!addressInput.required,
      $input: addressInput,
      $label: labelEl,
    })
  const nextRow = group.nextElementSibling
  if (nextRow?.matches(".row.form-group")) {
    const inputs = Array.from(nextRow.querySelectorAll('input[type="text"]'))
    for (const input of inputs) {
      const placeholder = input.getAttribute("placeholder") || ""
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: placeholder,
        required: !!input.required,
        $input: input,
        $label: labelEl,
      })
    }
  }
  return rules
}
