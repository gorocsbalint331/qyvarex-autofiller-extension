// @ts-nocheck
/**
 * YCombinator — form rule extraction and snapshot reading.
 */

import * as enums from "../../../core/enums.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"

async function extractRules() {
  let rules = []
  let sections = xpath.getOrderedNodesSafe(
    './/div[(starts-with(@class, "mb-") or starts-with(@class, "my-")) and not(contains(@class, " "))]',
    document.body,
  )

  for (let section of sections) {
    let rule = await getRule(section)
    if (rule) {
      if (Array.isArray(rule)) rules.push(...rule)
      else rules.push(rule)
    }
  }

  return rules
}

function cleanLabelText(value) {
  return value.replace(/\*/g, "").replace(/\s+/g, " ").trim()
}

function normalizePhoneOptionFragment(value) {
  return value
    .replace(/\((\+\s*\d{1,4})\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim()
}

function extractPhoneCountryOptionLabel(element) {
  let fragments = [
    element.textContent || "",
    element.getAttribute("aria-label") || "",
    element.getAttribute("title") || "",
    element.getAttribute("data-label") || "",
    element.getAttribute("data-country") || "",
    element.getAttribute("value") || "",
    element.getAttribute("data-value") || "",
  ]
    .map(normalizePhoneOptionFragment)
    .filter(Boolean)

  let combined = normalizePhoneOptionFragment(fragments.join(" "))
  let dialMatch = combined.match(/\+\s*\d{1,4}(?!\d)/)
  if (!dialMatch) return ""

  let countryName =
    fragments
      .map((fragment) =>
        normalizePhoneOptionFragment(
          fragment
            .replace(/\+\s*\d{1,4}(?!\d)/g, "")
            .replace(/\b\d{1,4}\b/g, ""),
        ),
      )
      .find((fragment) => /[A-Za-z]/.test(fragment)) || ""
  let dialCode = dialMatch[0].replace(/\s+/g, "")

  return normalizePhoneOptionFragment(
    countryName && !countryName.includes(dialCode)
      ? `${countryName} ${dialCode}`
      : combined.replace(/\+\s*(\d{1,4})(?!\d)/g, "+$1"),
  )
}

function extractYCombinatorPhoneCountryCodeOptions(elements) {
  let options = []
  for (let element of elements) {
    let label = extractPhoneCountryOptionLabel(element)
    if (label && !options.includes(label)) options.push(label)
  }
  return options
}

function getPhoneCountryOptionElements(root) {
  return Array.from(
    root.querySelectorAll(
      'option,[role="option"],li,button,[data-country],[data-country-code],[data-value]',
    ),
  )
}

async function collectPhoneCountryCodeOptions(container, triggerInput) {
  let options = extractYCombinatorPhoneCountryCodeOptions(
    getPhoneCountryOptionElements(container),
  )
  if (options.length) return options

  triggerInput?.focus()
  triggerInput?.click()
  triggerInput?.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  triggerInput?.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  await delay.delay(300)
  return extractYCombinatorPhoneCountryCodeOptions(
    getPhoneCountryOptionElements(document),
  )
}

function buildYCombinatorPhoneRules(
  inputs,
  labelNode,
  labelText,
  required,
  options = [],
) {
  if (inputs.length < 2) return null

  let countryInput = inputs[0]
  let phoneInput = inputs[1]
  let phoneLabel =
    cleanLabelText(
      labelText ||
        phoneInput.getAttribute("placeholder") ||
        phoneInput.getAttribute("aria-label") ||
        "",
    ) || "Phone"

  return [
    options.length
      ? {
          type: enums.FIELD_TYPE.SELECT,
          label: "Phone Country Code",
          required,
          options,
          $input: countryInput,
          $label: labelNode || countryInput,
        }
      : {
          type: enums.FIELD_TYPE.TEXT,
          label: "Phone Country Code",
          required,
          description: phoneCountryCode.PHONE_COUNTRY_CODE_DESCRIPTION,
          $input: countryInput,
          $label: labelNode || countryInput,
        },
    {
      type: enums.FIELD_TYPE.TEXT,
      label: phoneLabel,
      required,
      description: phoneCountryCode.LOCAL_PHONE_DESCRIPTION,
      $input: phoneInput,
      $label: labelNode || phoneInput,
    },
  ]
}

async function getRule(section) {
  let labelText = ""
  let labelNode = null

  labelNode = xpath.getFirstOrderedNodeSafe(
    ".//p[contains(@class, 'text-sm')]",
    section,
  )
  let phoneContainer = xpath.getFirstOrderedNodeSafe(
    ".//div[contains(@class, 'phone-field-container')]",
    section,
  )

  if (labelNode) {
    labelText = labelNode?.textContent?.trim() || ""
  } else {
    if (phoneContainer) {
      let inputs = xpath.getOrderedNodesSafe(".//input", phoneContainer)
      labelNode = inputs.length > 1 ? inputs[1] : null
    } else {
      labelNode = xpath.getFirstOrderedNodeSafe(
        ".//input | .//textarea",
        section,
      )
    }
    labelText = labelNode?.getAttribute("placeholder")?.trim() || ""
  }

  let required = !!labelText.includes("*")
  labelText = cleanLabelText(labelText)

  if (phoneContainer) {
    let inputs = xpath.getOrderedNodesSafe(".//input", phoneContainer)
    let phoneRules = buildYCombinatorPhoneRules(
      inputs,
      labelNode,
      labelText,
      required,
      await collectPhoneCountryCodeOptions(phoneContainer, inputs[0] || null),
    )
    if (phoneRules) return phoneRules
  }

  if (labelText.trim() === "") return null

  let radios = xpath.getOrderedNodesSafe(".//input[@type='radio']", section)
  if (radios.length > 0) {
    let options = radios.map((radio) => {
      let forLabel = xpath.getFirstOrderedNodeSafe(
        `.//label[@for="${radio.id}"]`,
        section,
      )
      return (forLabel && forLabel.textContent?.trim()) || radio.value
    })
    return {
      type: enums.FIELD_TYPE.RADIOGROUP,
      label: labelText,
      required,
      $input: radios[0],
      $label: labelNode,
      $radioParent: section,
      options,
    }
  }

  let select = xpath.getFirstOrderedNodeSafe(".//select", section)
  if (select) {
    let optionNodes = xpath.getOrderedNodesSafe("./option", select)
    let options = optionNodes
      .filter((option) => option.value && option.value !== "blank")
      .map((option) => option.textContent?.trim() || "")
    return {
      type: enums.FIELD_TYPE.SELECT,
      label: labelText,
      required,
      $input: select,
      $label: labelNode,
      options,
    }
  }

  let textarea = xpath.getFirstOrderedNodeSafe(".//textarea", section)
  if (textarea) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label: labelText,
      required,
      $input: textarea,
      $label: labelNode,
    }
  }

  let textInput = xpath.getFirstOrderedNodeSafe(
    ".//input[not(@type='radio')]",
    section,
  )
  return textInput
    ? {
        type: enums.FIELD_TYPE.TEXT,
        label: labelText,
        required,
        $input: textInput,
        $label: labelNode,
      }
    : null
}

function normalizeSnapshotText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

function getChoiceLabel(root, input, fallback = "") {
  let closestLabel = input.closest?.("label")?.textContent
  if (closestLabel) return normalizeSnapshotText(closestLabel)

  if (input.id && typeof root?.querySelector === "function") {
    let forLabel = root.querySelector(`label[for="${input.id}"]`)
    if (forLabel?.textContent) return normalizeSnapshotText(forLabel.textContent)
  }

  return normalizeSnapshotText(fallback || input.value)
}

function getPhoneCountryCodeSnapshotValue(rule) {
  let input = rule.$input
  let container = input?.closest?.(".phone-field-container")
  let singleValue = container?.querySelector(
    ".react-select__single-value, [class*='single-value'], [class*='singleValue']",
  )
  return normalizeSnapshotText(singleValue?.textContent || input?.value)
}

function getRuleSnapshotValue(rule) {
  if (cleanLabelText(rule.label).toLowerCase() === "phone country code") {
    return getPhoneCountryCodeSnapshotValue(rule)
  }

  if (rule.type === enums.FIELD_TYPE.SELECT) {
    let input = rule.$input
    if (input?.tagName?.toLowerCase() === "select") {
      let select = input
      return normalizeSnapshotText(
        select.selectedOptions?.[0]?.textContent || select.value,
      )
    }
    return normalizeSnapshotText(input?.value)
  }

  if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
    let checked = rule.$radioParent?.querySelector(
      'input[type="radio"]:checked',
    )
    return checked ? getChoiceLabel(rule.$radioParent, checked) : ""
  }

  if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
    return (rule.$checkboxs || [])
      .map((checkbox, index) =>
        checkbox.checked
          ? getChoiceLabel(
              checkbox.closest?.("fieldset, div, section, form") || null,
              checkbox,
              rule.options?.[index] || "",
            )
          : "",
      )
      .filter(Boolean)
      .join(", ")
  }

  let input = rule.$input
  return normalizeSnapshotText(input?.value)
}

function getYCombinatorFormSnapshotFromRules(formRules) {
  return Object.fromEntries(
    formRules.map((rule) => {
      try {
        return [rule.label, getRuleSnapshotValue(rule)]
      } catch (error) {
        console.warn(
          `[YCombinator] Failed to read snapshot field: ${rule.label}`,
          error,
        )
        return [rule.label, ""]
      }
    }),
  )
}

let buildYCombinatorPhoneRulesForTests = buildYCombinatorPhoneRules
let extractYCombinatorPhoneCountryCodeOptionsForTests =
  extractYCombinatorPhoneCountryCodeOptions
let getYCombinatorFormSnapshotFromRulesForTests =
  getYCombinatorFormSnapshotFromRules

export {
  buildYCombinatorPhoneRules,
  buildYCombinatorPhoneRulesForTests,
  extractRules,
  extractYCombinatorPhoneCountryCodeOptions,
  extractYCombinatorPhoneCountryCodeOptionsForTests,
  getRule,
  getYCombinatorFormSnapshotFromRules,
  getYCombinatorFormSnapshotFromRulesForTests,
}
