// @ts-nocheck
/**
 * PinpointHQ — form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as phoneCountryCode from "./phone-country-code.ts"

export async function extractRules() {
  const rules = []
  const containers = collectFieldContainers()
  for (const container of containers) {
    const rule = getRule(container)
    if (rule) rules.push(...getPinpointPhoneRules(rule))
  }
  return rules
}

export function getPinpointPhoneRules(rule) {
  if (rule.type !== enums.FIELD_TYPE.TEXT) return [rule]

  const input = rule.$input
  const isPhone =
    rule.label.toLowerCase().includes("phone") ||
    input?.type === "tel" ||
    input?.name?.toLowerCase().includes("[phone]")
  if (!input || !isPhone) return [rule]

  const container = phoneCountryCode.getPinpointPhoneContainer(input)
  const selectedFlag = container?.querySelector(".selected-flag")
  if (!container || !selectedFlag) return [rule]

  const options = phoneCountryCode
    .getPinpointPhoneCountryOptionElements(input)
    .map(phoneCountryCode.parsePinpointPhoneCountryOption)
    .filter(
      (option) =>
        !!option.countryCode && !!option.countryName && !!option.dialCode,
    )
  if (options.length === 0) return [rule]

  const labels = options
    .map(phoneCountryCode.formatPinpointPhoneCountryOption)
    .filter(Boolean)
    .filter((label, index, all) => all.indexOf(label) === index)

  return [
    {
      type: enums.FIELD_TYPE.SELECT,
      label: phoneCountryCode.PINPOINT_PHONE_COUNTRY_CODE_LABEL,
      required: rule.required,
      options: labels,
      $input: input,
      $label: rule.$label,
    },
    {
      ...rule,
      description:
        phoneCountryCode.PINPOINT_PHONE_WITH_COUNTRY_CODE_DESCRIPTION,
    },
  ]
}

function collectFieldContainers() {
  const fieldsets = xpath.getOrderedNodesSafe(
    './/fieldset[contains(@class, "external-form__fieldset")]',
    document.body,
  )
  const roots = fieldsets.length > 0 ? fieldsets : [document.body]
  const containers = []

  for (const root of roots) {
    const mdCols = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "col-md-1-1")]',
      root,
    )
    containers.push(...mdCols)

    const cols = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "col-1-1")]',
      root,
    )
    for (const col of cols) {
      const nested = xpath.getFirstOrderedNodeSafe(
        './/div[contains(@class, "col-md-1-1")] | .//div[contains(@class, "col-1-1")]',
        col,
      )
      if (!nested) containers.push(col)
    }
  }

  return containers
}

export function getRule(container) {
  let labelNode = xpath.getFirstOrderedNodeSafe(
    ".//label[contains(@class, 'external-form__label')]",
    container,
  )
  if (!labelNode) {
    const spanLabel = xpath.getFirstOrderedNodeSafe(
      ".//span[contains(@class, 'external-form__label')]",
      container,
    )
    if (spanLabel) {
      labelNode = spanLabel.closest("label") || spanLabel
    }
  }

  let label = ""
  if (labelNode) {
    const title = xpath.getFirstOrderedNodeSafe(
      ".//span[contains(@class, 'external-form__label--title')]",
      labelNode,
    )
    if (title) {
      label = title.textContent?.trim() || ""
    } else {
      const innerDiv = xpath.getFirstOrderedNodeSafe(".//div", labelNode)
      label = innerDiv
        ? innerDiv.textContent?.trim() || ""
        : labelNode.textContent?.trim() || ""
    }
  }

  let required = false
  if (labelNode) {
    if (
      labelNode.classList &&
      labelNode.classList.contains("external-form__label--required")
    ) {
      required = true
    } else {
      const requiredMark = xpath.getFirstOrderedNodeSafe(
        ".//span[contains(@class, 'external-form__label--required')]",
        labelNode,
      )
      if (requiredMark) required = true
    }
  }

  if (label.trim() === "") return null

  const radios = xpath.getOrderedNodesSafe(".//input[@type='radio']", container)
  if (radios.length > 0) {
    const options = radios.map((radio) => {
      const radioLabel = xpath.getFirstOrderedNodeSafe(
        `.//label[@for="${radio.id}"]`,
        container,
      )
      return (radioLabel && radioLabel.textContent?.trim()) || radio.value
    })
    return {
      type: enums.FIELD_TYPE.RADIOGROUP,
      label,
      required,
      $input: radios[0],
      $label: labelNode,
      $radioParent: container,
      options,
    }
  }

  const select = xpath.getFirstOrderedNodeSafe(".//select", container)
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
      $label: labelNode,
      options,
    }
  }

  const textarea = xpath.getFirstOrderedNodeSafe(".//textarea", container)
  if (textarea) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: textarea,
      $label: labelNode,
    }
  }

  const textInput = xpath.getFirstOrderedNodeSafe(
    ".//input[@type='text'] | .//input[@type='email'] | .//input[@type='tel'] | .//input[@type='number']",
    container,
  )
  return textInput
    ? {
        type: enums.FIELD_TYPE.TEXT,
        label,
        required,
        $input: textInput,
        $label: labelNode,
      }
    : null
}

export function getFormSnapshot() {
  const snapshot = {}
  for (const container of collectFieldContainers()) {
    const rule = getRule(container)
    if (!rule) continue
    for (const expanded of getPinpointPhoneRules(rule)) {
      const value = readRuleValue(expanded)
      if (value != null) snapshot[expanded.label] = value
    }
  }
  return snapshot
}

function readRuleValue(rule) {
  if (rule.label === phoneCountryCode.PINPOINT_PHONE_COUNTRY_CODE_LABEL) {
    const input = rule.$input
    return input ? phoneCountryCode.readPinpointPhoneCountryCode(input) : ""
  }
  switch (rule.type) {
    case enums.FIELD_TYPE.TEXT:
      return rule.$input?.value
    case enums.FIELD_TYPE.SELECT:
      return readSelectValue(rule)
    case enums.FIELD_TYPE.RADIOGROUP:
      return readRadioValue(rule)
    default:
      return null
  }
}

function readSelectValue(rule) {
  const input = rule.$input
  if (!input) return ""
  const selected = input.selectedOptions?.[0]
  return selected?.textContent?.trim() || selected?.value || ""
}

function readRadioValue(rule) {
  const parent = rule.$radioParent
  if (!parent) return ""
  const checked = parent.querySelector('input[type="radio"]:checked')
  if (!checked) return ""
  const label = checked.id
    ? parent.querySelector(`label[for="${checked.id}"]`)
    : checked.closest("label")
  return label?.textContent?.trim() || checked.value || ""
}
