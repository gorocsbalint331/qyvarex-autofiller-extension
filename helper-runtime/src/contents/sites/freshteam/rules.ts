// @ts-nocheck
/**
 * Freshteam — form rule extraction, section helpers, and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"

const EDUCATION_KEYWORDS = ["education"]
const EMPLOYMENT_KEYWORDS = ["employer", "employment"]
const PHONE_COUNTRY_CODE_LABEL = "Phone Country Code"
const PHONE_WITHOUT_COUNTRY_DESCRIPTION =
  "Return only the phone number without the country calling code. Do not include the phone country code because it is provided separately."
const PHONE_FIELD_SELECTORS = {
  mobile: {
    id: "applicant_lead_attributes[mobile]",
    name: "applicant[lead_attributes[mobile]]",
  },
  phone: {
    id: "applicant_lead_attributes[phone]",
    name: "applicant[lead_attributes[phone]]",
  },
}

function normalizeLabel(label) {
  return String(label || "").trim().toLowerCase()
}

function isPhoneNumberRule(rule) {
  if (rule.type !== enums.FIELD_TYPE.TEXT) return false
  let selectors = PHONE_FIELD_SELECTORS[normalizeLabel(rule.label)]
  if (!selectors) return false
  let input = rule.$input
  return input?.id === selectors.id && input.name === selectors.name
}

export function buildFreshteamRequestRules(formRules) {
  if (!formRules.some(isPhoneNumberRule)) return formRules
  let hasCountryCode = formRules.some(
    (rule) => normalizeLabel(rule.label) === normalizeLabel(PHONE_COUNTRY_CODE_LABEL),
  )
  let result = []
  for (let rule of formRules) {
    if (isPhoneNumberRule(rule)) {
      if (!hasCountryCode) {
        result.push({
          type: enums.FIELD_TYPE.TEXT,
          label: PHONE_COUNTRY_CODE_LABEL,
          required: false,
        })
        hasCountryCode = true
      }
      result.push({ ...rule, description: PHONE_WITHOUT_COUNTRY_DESCRIPTION })
      continue
    }
    result.push(rule)
  }
  return result
}

export async function extractRules() {
  let rules = []
  let customButton = xpath.getFirstOrderedNodeSafe(
    './/a[contains(@class, "btn btn-custom")]',
    document.body,
  )
  if (customButton) {
    customButton.click()
    await delay.delay(500)
  }

  let formGroups = xpath.getOrderedNodesSafe(
    './/div[contains(@class, "form-group")] | .//div[contains(@class, "file-field")]',
    document.body,
  )
  for (let group of formGroups) {
    if (
      group.classList.contains("link-group") ||
      group.classList.contains("section-group")
    ) {
      continue
    }
    let groupField = xpath.getFirstOrderedNodeSafe(
      './/div[contains(@class, "group-field")]',
      group,
    )
    if (groupField) {
      let titleNode = xpath.getFirstOrderedNodeSafe(
        './/div[contains(@class, "link-label-title")]',
        group,
      )
      let title = titleNode?.textContent?.trim() || ""
      let isEducation = EDUCATION_KEYWORDS.some((keyword) =>
        title.toLowerCase().includes(keyword),
      )
      let isEmployment = EMPLOYMENT_KEYWORDS.some((keyword) =>
        title.toLowerCase().includes(keyword),
      )
      if (isEducation) {
        let needsAdd =
          !xpath.getFirstOrderedNodeSafe(
            './/div[contains(@class, "education-group")]',
            group,
          )
        let educationRules = await getEduRule(group, needsAdd)
        rules.push(...educationRules)
      } else if (isEmployment) {
        let needsAdd =
          !xpath.getFirstOrderedNodeSafe(
            './/div[contains(@class, "employer-group")]',
            group,
          )
        let employmentRules = await getExpRule(group, needsAdd)
        rules.push(...employmentRules)
      }
    } else {
      let educationAncestor = xpath.getFirstOrderedNodeSafe(
        './ancestor::div[contains(@class, "education-group")]',
        group,
      )
      let employerAncestor = xpath.getFirstOrderedNodeSafe(
        './ancestor::div[contains(@class, "employer-group")]',
        group,
      )
      if (educationAncestor || employerAncestor) continue
      let input = xpath.getFirstOrderedNodeSafe(
        ".//input | .//select | .//textarea",
        group,
      )
      if (input) {
        let rule = getRule(group)
        if (rule && rule.label && rule.label.trim() !== "") {
          rules.push(rule)
        }
      }
    }
  }
  return rules
}

export function getRule(container) {
  let labelNode = xpath.getFirstOrderedNodeSafe(".//label", container)
  let label = labelNode?.textContent?.trim().replace("*", "") || ""
  let labelLower = label.toLowerCase()
  if (
    EDUCATION_KEYWORDS.some((keyword) => labelLower.includes(keyword)) ||
    EMPLOYMENT_KEYWORDS.some((keyword) => labelLower.includes(keyword))
  ) {
    return null
  }

  let textInput = xpath.getFirstOrderedNodeSafe(
    './/input[@type="text" or @type="number" or @data-provide="datepicker"]',
    container,
  )
  if (textInput?.getAttribute("placeholder")?.trim() === "Hyperlink") {
    label = "GitHub URL"
  }

  let checkboxInput = xpath.getFirstOrderedNodeSafe(
    './/input[@type="checkbox"]',
    container,
  )
  let normalizedLabel = label.toLowerCase()
  if (
    !checkboxInput &&
    (!label ||
      label.trim() === "" ||
      EDUCATION_KEYWORDS.some((keyword) => normalizedLabel.includes(keyword)) ||
      EMPLOYMENT_KEYWORDS.some((keyword) => normalizedLabel.includes(keyword)))
  ) {
    return null
  }

  let requiredSpan = xpath.getFirstOrderedNodeSafe(
    ".//span[@class='required']",
    container,
  )
  let required = !!requiredSpan
  let radios = xpath.getOrderedNodesSafe('.//input[@type="radio"]', container)
  if (radios.length > 0) {
    let radioParent = radios[0]?.closest("div") || container
    let options = radios
      .map((radio) => {
        let radioLabel = radio.closest("label")
        if (radioLabel) {
          let clone = radioLabel.cloneNode(true)
          let nestedInput = clone.querySelector('input[type="radio"]')
          if (nestedInput) nestedInput.remove()
          return clone.textContent?.trim() || ""
        }
        return radio.value || ""
      })
      .filter((option) => option.length > 0)
    if (options.length > 0) {
      return {
        type: enums.FIELD_TYPE.RADIOGROUP,
        label,
        required,
        $input: radios[0],
        $label: labelNode,
        $radioParent: radioParent,
        options,
      }
    }
  }

  if (textInput) {
    if (textInput.getAttribute("data-provide") === "datepicker") {
      return {
        label,
        required,
        type: enums.FIELD_TYPE.DATE,
        $input: textInput,
        $label: labelNode,
      }
    }
    return {
      label,
      required,
      type: enums.FIELD_TYPE.TEXT,
      $input: textInput,
      $label: labelNode,
    }
  }

  let textarea = xpath.getFirstOrderedNodeSafe(".//textarea", container)
  if (textarea) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: textarea,
      $label: labelNode,
    }
  }

  let select = xpath.getFirstOrderedNodeSafe(".//select", container)
  if (select) {
    if (!label || label.trim() === "") return null
    let optionNodes = xpath.getOrderedNodesSafe("./option", select)
    let options = optionNodes.map(
      (option) => option.textContent?.trim() || "",
    )
    return {
      label,
      required,
      type: enums.FIELD_TYPE.SELECT,
      $input: select,
      $label: labelNode,
      options,
    }
  }

  let checkboxes = xpath.getOrderedNodesSafe(
    './/input[@type="checkbox"]',
    container,
  )
  if (checkboxes.length > 0) {
    let options = []
    let checkboxLabel = label
    for (let checkbox of checkboxes) {
      let span = xpath.getFirstOrderedNodeSafe(
        "./following-sibling::span[1] | ./parent::*/span[1] | ./parent::span[1]",
        checkbox,
      )
      if (span) {
        let text = span.textContent?.trim() || ""
        if (text) {
          options.push(text)
          if (!checkboxLabel || checkboxLabel.trim() === "") {
            checkboxLabel = text
          }
        }
      } else {
        let checkboxLabelNode = xpath.getFirstOrderedNodeSafe(
          "./following-sibling::label | ./parent::*/label | ancestor::label",
          checkbox,
        )
        if (checkboxLabelNode) {
          let clone = checkboxLabelNode.cloneNode(true)
          let nestedInput = clone.querySelector('input[type="checkbox"]')
          if (nestedInput) nestedInput.remove()
          let text = clone.textContent?.trim() || ""
          if (text) {
            options.push(text)
            if (!checkboxLabel || checkboxLabel.trim() === "") {
              checkboxLabel = text
            }
          }
        }
      }
    }
    if (checkboxLabel && checkboxLabel.trim() !== "") {
      return {
        label: checkboxLabel,
        required,
        type: enums.FIELD_TYPE.CHECKBOX,
        options: options.length > 0 ? options : [checkboxLabel],
        $checkboxs: checkboxes,
        $input: checkboxes[0],
        $label: labelNode,
      }
    }
    return null
  }

  return null
}

export function getEduRule(section, shouldAdd = true) {
  return (async () => {
    if (shouldAdd) await addEducation()
    let fieldGroups = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "education-group")]//div[contains(@class, "form-group") and not(contains(@class, "group-field"))]',
      section,
    )
    let children = []
    for (let fieldGroup of fieldGroups) {
      let rule = getRule(fieldGroup)
      if (rule && rule.label && rule.label.trim() !== "") {
        children.push(rule)
      }
    }
    if (children.length > 0) {
      return [
        {
          type: enums.FIELD_TYPE.EDUCATION,
          label: "Education",
          required: true,
          children,
          options: children.map((child) => {
            let option = {
              label: child.label.trim(),
              required: child.required,
              type:
                child.type === enums.FIELD_TYPE.SELECT ||
                child.type === enums.FIELD_TYPE.LISTBOX
                  ? "listbox"
                  : child.type === enums.FIELD_TYPE.MULTI_SELECT
                    ? "multi-select"
                    : child.type === enums.FIELD_TYPE.DATE
                      ? "date"
                      : child.type === enums.FIELD_TYPE.CHECKBOX
                        ? "checkbox"
                        : "text",
            }
            if (child.type === enums.FIELD_TYPE.DATE) {
              option.description = "MM/DD/YYYY"
            }
            if (child.type === enums.FIELD_TYPE.CHECKBOX) {
              option.options =
                child.options && Array.isArray(child.options)
                  ? child.options
                  : []
            } else if (child.options && Array.isArray(child.options)) {
              option.options = child.options
            }
            return option
          }),
        },
      ]
    }
    return []
  })()
}

export function getExpRule(section, shouldAdd = true) {
  return (async () => {
    if (!section) return []
    if (shouldAdd) await addEmployment()
    let fieldGroups = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "employer-group")]//div[contains(@class, "form-group") and not(contains(@class, "group-field"))]',
      section,
    )
    let children = []
    for (let fieldGroup of fieldGroups) {
      if (!fieldGroup) continue
      let rule = getRule(fieldGroup)
      if (rule) children.push(rule)
    }
    if (children.length > 0) {
      return [
        {
          type: enums.FIELD_TYPE.EMPLOYMENT,
          label: "Employment",
          required: true,
          children,
          options: children.map((child) => {
            let option = {
              label: child.label.trim(),
              required: child.required,
              type:
                child.type === enums.FIELD_TYPE.SELECT ||
                child.type === enums.FIELD_TYPE.LISTBOX
                  ? "listbox"
                  : child.type === enums.FIELD_TYPE.MULTI_SELECT
                    ? "multi-select"
                    : child.type === enums.FIELD_TYPE.DATE
                      ? "date"
                      : child.type === enums.FIELD_TYPE.CHECKBOX
                        ? "checkbox"
                        : "text",
            }
            if (child.type === enums.FIELD_TYPE.DATE) {
              option.description = "MM/DD/YYYY"
            }
            if (child.label === "Summary") {
              option.description =
                "Provide a detailed job position summary highlighting personal strengths, no more than 225 characters."
            }
            if (child.type === enums.FIELD_TYPE.CHECKBOX) {
              option.options =
                child.options && Array.isArray(child.options)
                  ? child.options
                  : []
            } else if (child.options && Array.isArray(child.options)) {
              option.options = child.options
            }
            return option
          }),
        },
      ]
    }
    return []
  })()
}

export async function addEducation() {
  let button = xpath.getFirstOrderedNodeSafe(
    './/button[contains(text(), "+ Add Education")]',
    document,
  )
  if (button) {
    button.click()
    await delay.delay(100)
  }
}

export async function addEmployment() {
  let button = xpath.getFirstOrderedNodeSafe(
    './/button[contains(text(), "+ Add Employer")]',
    document,
  )
  if (button) {
    button.click()
    await delay.delay(100)
  }
}

export async function clearExistingEntries() {
  let removeButtons = xpath.getOrderedNodesSafe(
    './/button[contains(@class, "btn-remove")]',
    document.body,
  )
  if (removeButtons.length === 0) return
  for (let index = removeButtons.length - 1; index >= 0; index--) {
    let button = removeButtons[index]
    if (button && button.offsetParent !== null) {
      button.scrollIntoView({ behavior: "smooth", block: "center" })
      await delay.delay(100)
      button.click()
      await delay.delay(200)
    }
  }
  await delay.delay(300)
}

export async function getFormSnapshot(formRules) {
  return buildFormSnapshot(formRules, "freshteam")
}

function buildFormSnapshot(formRules, siteName) {
  let snapshot = {}
  for (let rule of formRules) {
    let label = String(rule?.label || "").trim()
    if (!label || /captcha/i.test(label)) continue
    if (rule.__machineOnly) continue
    if (
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
          .filter((input) => isSnapshotReadableInput(input) && input.checked)
          .map(getChoiceLabel)
          .filter(Boolean)
          .join(", ")
        continue
      }
      let input = rule.$input
      if (!isSnapshotReadableInput(input)) continue
      snapshot[label] = readInputValue(input)
    } catch (error) {
      console.warn(
        `[${siteName}] Failed to read snapshot field "${label}"`,
        error,
      )
    }
  }
  return snapshot
}

function getChoiceInputs(rule) {
  let checkboxes = rule.$checkboxs
  if (Array.isArray(checkboxes) && checkboxes.length > 0) return checkboxes
  let radios = Array.from(
    rule.$radioParent?.querySelectorAll?.(
      'input[type="radio"], input[type="checkbox"]',
    ) || [],
  )
  if (radios.length > 0) return radios
  let input = rule.$input
  if (input && ["radio", "checkbox"].includes(input.type)) {
    return input.name
      ? Array.from(document.getElementsByName(input.name)).filter(
          (element) =>
            element instanceof HTMLInputElement && element.type === input.type,
        )
      : [input]
  }
  return []
}

function isSnapshotReadableInput(input) {
  if (!input) return false
  let type = String(input.type || "").toLowerCase()
  return (
    !["hidden", "file", "submit", "button", "image", "reset"].includes(type) &&
    !input.hidden &&
    !input.closest?.('[hidden], [aria-hidden="true"]') &&
    !isVisuallyHidden(input)
  )
}

function isVisuallyHidden(element) {
  let view = element.ownerDocument?.defaultView
  let getComputedStyleFn = view?.getComputedStyle
    ? view.getComputedStyle.bind(view)
    : typeof window !== "undefined" &&
        typeof window.getComputedStyle === "function"
      ? window.getComputedStyle.bind(window)
      : null
  if (!getComputedStyleFn) return false
  let current = element
  while (current) {
    let style
    try {
      style = getComputedStyleFn(current)
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
    current = current.parentElement
  }
  return false
}

function getChoiceLabel(input) {
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
