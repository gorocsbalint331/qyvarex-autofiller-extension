// @ts-nocheck
/**
 * Recruiterflow — form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as delay from "../../../utils/delay.js"

export const RECRUITERFLOW_PHONE_COUNTRY_CODE_LABEL = "Phone Country Code"
export const RECRUITERFLOW_PHONE_WITH_COUNTRY_CODE_DESCRIPTION =
  phoneCountryCode.LOCAL_PHONE_DESCRIPTION

export async function getRules(retried = false) {
  const rules = []
  await waitForFormReady()
  await expandCollapsedSections()

  const root = document.querySelector(".apply-to-job-form-inputs-container")
  if (root) {
    const excludeSelectors = [
      ".experience-inputs-container",
      ".education-inputs-container",
    ]
    rules.push(...(await extractRulesFromRoot(root, excludeSelectors)))
  }

  if (rules.length !== 0 || retried) return rules
  await delay.delay(1500)
  return await getRules(true)
}

async function extractRulesFromRoot(root, excludeSelectors = []) {
  const rules = []
  const seen = new Set()
  const isExcluded = (element) =>
    excludeSelectors.some((selector) => element.closest(selector))

  const reactSelects = root.querySelectorAll(
    'input[id*="react-select"][role="combobox"]',
  )
  for (const node of Array.from(reactSelects)) {
    const input = node
    if (seen.has(input) || isExcluded(input)) continue

    const label = getFieldLabel(input)
    if (!label) continue

    const multiWrapper = input.closest(".multi-select-input-wrapper")
    const singleWrapper = input.closest(".single-select-input-wrapper")
    const wrapper = multiWrapper || singleWrapper

    if (wrapper) {
      const labelNode = wrapper.querySelector(".form-label")
      const displayLabel = labelNode
        ? cleanLabelText(labelNode.textContent || "")
        : label
      const fieldType = multiWrapper
        ? enums.FIELD_TYPE.MULTI_SELECT
        : enums.FIELD_TYPE.SELECT
      const trigger = wrapper.querySelector("input")
      trigger.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
      await delay.delay(300)

      const listbox = document.querySelector(
        'div[role="listbox"][id*="-listbox"]',
      )
      let options = []
      if (listbox) {
        const optionNodes = listbox.querySelectorAll('div[role="option"]')
        options = Array.from(optionNodes)
          .map((option) => {
            const text = option.querySelector(
              ".custom-single-select-option, .custom-multi-select-option",
            )?.textContent
            return (text || option.textContent || "").trim()
          })
          .filter((text) => text !== "")
        trigger.dispatchEvent(new MouseEvent("click", { bubbles: true }))
        await delay.delay(100)
      }

      rules.push({
        type: fieldType,
        label: displayLabel,
        $input: input,
        $label: labelNode || input,
        required: isRequired(input),
        options,
      })
    } else {
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label,
        $input: input,
        $label: input.closest(".common-input-wrapper") || input,
        required: isRequired(input),
      })
    }
    seen.add(input)
  }

  const inputs = root.querySelectorAll(
    'input:not([type="hidden"]):not([type="file"]):not([type="checkbox"]):not([type="radio"])',
  )
  inputs.forEach((node) => {
    const input = node
    if (seen.has(input) || isExcluded(input) || input.id.includes("react-select"))
      return
    const label = getFieldLabel(input)
    if (!label) return
    const fieldType = detectFieldType(input)
    const rule = {
      type: fieldType,
      label,
      $input: input,
      $label: input.closest(".common-input-wrapper") || input,
      required: isRequired(input),
      ...(fieldType === enums.FIELD_TYPE.DATE
        ? { description: "MM/DD/YYYY" }
        : {}),
    }
    rules.push(...getRecruiterflowPhoneRules(rule))
    seen.add(input)
  })

  const textareas = root.querySelectorAll("textarea")
  textareas.forEach((node) => {
    const input = node
    if (seen.has(input) || isExcluded(input)) return
    const label = getFieldLabel(input)
    if (!label) return
    rules.push({
      type: enums.FIELD_TYPE.TEXT,
      label,
      $input: input,
      $label: input.closest(".common-input-wrapper") || input,
      required: isRequired(input),
    })
    seen.add(input)
  })

  const checkboxes = root.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach((node) => {
    const input = node
    if (
      seen.has(input) ||
      isExcluded(input) ||
      input.closest(".multi-select-input-wrapper")
    ) {
      return
    }
    const label = getFieldLabel(input)
    if (!label) return
    rules.push({
      type: enums.FIELD_TYPE.CHECKBOX,
      label,
      $checkboxs: [input],
      $label: input.parentElement,
      required: isRequired(input),
      options: [label],
    })
    seen.add(input)
  })

  const yesNoGroups = root.querySelectorAll(".yes-no-inputs")
  yesNoGroups.forEach((group) => {
    if (isExcluded(group)) return
    const buttons = group.querySelectorAll("button")
    if (buttons.length === 0 || seen.has(buttons[0])) return

    const wrapper = group.closest(".yes-no-input-wrapper")
    if (!wrapper) return
    const labelNode = wrapper.querySelector(".form-label")
    const label = labelNode ? cleanLabelText(labelNode.textContent || "") : ""
    if (!label) return

    const yesInput = group.querySelector(".yes-input")
    const noInput = group.querySelector(".no-input")
    if (yesInput && noInput) {
      rules.push({
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        $checkboxs: [yesInput, noInput],
        $label: labelNode,
        required: isRequired(wrapper),
        options: ["Yes", "No"],
      })
      buttons.forEach((button) => seen.add(button))
    }
  })

  return rules
}

export function getRecruiterflowPhoneRules(rule) {
  if (rule.type !== enums.FIELD_TYPE.TEXT) return [rule]

  const input = rule.$input
  const isPhone =
    rule.label.toLowerCase().includes("phone") ||
    input?.type === "tel" ||
    input?.name?.toLowerCase().includes("phone")
  if (!input || !isPhone) return [rule]

  const iti = input.closest(".iti")
  const selectedCountry = iti?.querySelector("button.iti__selected-country")
  if (!iti || !selectedCountry) return [rule]

  const options = Array.from(
    iti.querySelectorAll("li.iti__country[data-country-code]"),
  )
    .map((element) => {
      const name =
        element.querySelector(".iti__country-name")?.textContent?.trim() || ""
      const dial = (
        element.getAttribute("data-dial-code") ||
        element.querySelector(".iti__dial-code")?.textContent ||
        ""
      ).replace(/\D/g, "")
      return [name, dial ? `+${dial}` : ""].filter(Boolean).join(" ")
    })
    .filter(Boolean)
    .filter((label, index, all) => all.indexOf(label) === index)

  if (options.length === 0) return [rule]

  return [
    {
      ...rule,
      description: RECRUITERFLOW_PHONE_WITH_COUNTRY_CODE_DESCRIPTION,
    },
    {
      type: enums.FIELD_TYPE.SELECT,
      label: RECRUITERFLOW_PHONE_COUNTRY_CODE_LABEL,
      required: rule.required,
      options,
      $input: input,
      $label: rule.$label,
    },
  ]
}

export function getFieldLabel(element) {
  if (element.closest(".additional-info-inputs-container")) {
    const wrapper = element.closest(
      ".text-area-input-wrapper, .text-input-wrapper, .multi-select-input-wrapper",
    )
    if (wrapper) {
      if (
        wrapper.classList.contains(
          "currency-range-select-number-input-wrapper",
        ) &&
        element.tagName.toLowerCase() === "input"
      ) {
        const placeholder = element.getAttribute("placeholder")
        if (
          placeholder &&
          (placeholder.toLowerCase() === "min" ||
            placeholder.toLowerCase() === "max")
        ) {
          return `${placeholder} Compensation`
        }
      }
      const labelNode = wrapper.querySelector(".form-label")
      if (labelNode) return cleanLabelText(labelNode.textContent || "")
    }
  }

  if (element.tagName.toLowerCase() === "textarea") {
    const wrapper = element.closest(".text-area-input-wrapper")
    if (wrapper) {
      const labelNode = wrapper.querySelector(".form-label")
      if (labelNode) return cleanLabelText(labelNode.textContent || "")
    }
  }

  const reactPlaceholder = readReactSelectPlaceholderLabel(element)
  if (reactPlaceholder) return reactPlaceholder

  const placeholder = element.getAttribute("placeholder")
  if (
    placeholder &&
    !placeholder.toLowerCase().includes("select") &&
    !placeholder.toLowerCase().includes("enter") &&
    !placeholder.toLowerCase().includes("click")
  ) {
    return cleanLabelText(placeholder)
  }

  const selectWrapper = element.closest(
    ".single-select-input-wrapper, .multi-select-input-wrapper, .currency-range-select-number-input-wrapper",
  )
  if (selectWrapper) {
    if (
      selectWrapper.classList.contains(
        "currency-range-select-number-input-wrapper",
      ) &&
      element.tagName.toLowerCase() === "input"
    ) {
      const compensationPlaceholder = element.getAttribute("placeholder")
      if (
        compensationPlaceholder &&
        (compensationPlaceholder.toLowerCase() === "min" ||
          compensationPlaceholder.toLowerCase() === "max")
      ) {
        return `${compensationPlaceholder} Compensation`
      }
    }
    const labelNode = selectWrapper.querySelector(".form-label")
    if (labelNode) return cleanLabelText(labelNode.textContent || "")
  }

  const commonWrapper = element.closest(
    ".common-input-wrapper, .full-name-input-wrapper, .email-input-wrapper, .phone-number-input-wrapper, .location-input-wrapper, .text-input-wrapper, .text-area-input-wrapper, .yes-no-input-wrapper",
  )
  if (commonWrapper) {
    let labelNode = commonWrapper.querySelector(".form-label")
    if (!labelNode && commonWrapper.parentElement) {
      const parentWrapper = commonWrapper.parentElement.closest(
        ".full-name-input-wrapper, .email-input-wrapper, .phone-number-input-wrapper, .location-input-wrapper, .yes-no-input-wrapper",
      )
      if (parentWrapper) labelNode = parentWrapper.querySelector(".form-label")
    }
    if (labelNode) return cleanLabelText(labelNode.textContent || "")
  }

  if (element.type === "checkbox") {
    const checkboxLabel = element.parentElement?.querySelector("label")
    if (checkboxLabel) return cleanLabelText(checkboxLabel.textContent || "")
  }

  const name = element.getAttribute("name")
  if (name) {
    const parts = name.split(".")
    const last = parts[parts.length - 1]
    return last
      .replace(/_/g, " ")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())
  }

  return ""
}

function readReactSelectPlaceholderLabel(element) {
  if (
    element.tagName.toLowerCase() !== "input" ||
    !element.id?.includes("react-select")
  ) {
    return ""
  }
  const describedBy = element.getAttribute("aria-describedby") || ""
  const placeholderId = describedBy
    .split(/\s+/)
    .find((id) => id.includes("placeholder"))
  if (!placeholderId) return ""
  const placeholderNode = element.ownerDocument?.getElementById(placeholderId)
  const label = cleanLabelText(placeholderNode?.textContent || "")
  return !label ||
    label.toLowerCase().includes("select") ||
    label.toLowerCase().includes("enter") ||
    label.toLowerCase().includes("click")
    ? ""
    : label
}

function detectFieldType(element) {
  const tag = element.tagName.toLowerCase()
  const type = element.type
  const classList = element.classList
  if (
    classList.contains("react-datepicker-ignore-onclickoutside") ||
    element.closest(".react-datepicker-wrapper") ||
    placeholderIncludes(element, "Date")
  ) {
    return enums.FIELD_TYPE.DATE
  }
  if (tag === "textarea") return enums.FIELD_TYPE.TEXT
  if (type === "checkbox") return enums.FIELD_TYPE.CHECKBOX
  return enums.FIELD_TYPE.TEXT
}

function isRequired(element) {
  const wrapper = element.closest(
    ".common-input-wrapper, .full-name-input-wrapper, .email-input-wrapper, .phone-number-input-wrapper, .location-input-wrapper, .text-input-wrapper, .text-area-input-wrapper, .single-select-input-wrapper, .multi-select-input-wrapper, .yes-no-input-wrapper",
  )
  if (wrapper) {
    const requiredRoot =
      wrapper.parentElement?.closest(
        ".full-name-input-wrapper, .email-input-wrapper, .phone-number-input-wrapper, .location-input-wrapper",
      ) || wrapper
    const labelNode = requiredRoot.querySelector(".form-label")
    if (labelNode && labelNode.querySelector(".required")) return true
  }
  return false
}

export async function getExpRules() {
  const rules = []
  const rows = document.querySelectorAll(".experience-input-wrapper")
  for (const row of Array.from(rows)) {
    const children = await extractRulesFromRoot(row)
    if (children.length > 0) {
      rules.push({
        type: enums.FIELD_TYPE.EMPLOYMENT,
        label: "Employment",
        required: true,
        children,
        options: children.map((child) => ({
          type: child.type,
          label: child.label,
          ...(child.options ? { options: child.options } : {}),
        })),
      })
    }
  }
  return rules
}

export async function getEduRules() {
  const rules = []
  const rows = document.querySelectorAll(".education-input-wrapper")
  for (const row of Array.from(rows)) {
    const children = await extractRulesFromRoot(row)
    if (children.length > 0) {
      rules.push({
        type: enums.FIELD_TYPE.EDUCATION,
        label: "Education",
        required: true,
        children,
        options: children.map((child) => ({
          type: child.type,
          label: child.label,
          ...(child.options ? { options: child.options } : {}),
        })),
      })
    }
  }
  return rules
}

function cleanLabelText(text) {
  return text
    .replace(/\*/g, "")
    .replace(/\(optional\)/gi, "")
    .replace(/\(required\)/gi, "")
    .trim()
}

function placeholderIncludes(element, needle) {
  const placeholder = element.getAttribute("placeholder")
  return !!placeholder && placeholder.includes(needle)
}

async function waitForFormReady() {
  const timeoutMs = 5000
  const started = Date.now()
  while (Date.now() - started < timeoutMs) {
    if (document.querySelector(".apply-to-job-form-inputs-container")) {
      await delay.delay(500)
      return
    }
    await delay.delay(100)
  }
}

async function expandCollapsedSections() {
  const sections = document.querySelectorAll(".input-section-container")
  for (const section of Array.from(sections)) {
    const next = section.nextElementSibling
    if (next && next.style.display === "none") {
      section.click()
      await delay.delay(200)
    }
  }
}

export function getSubmitButtonText() {
  const button = document.querySelector(
    "button#submit-application-button, button.submit-application-button",
  )
  return (button && button.textContent?.trim()) || ""
}

const EXPERIENCE_ROW_SELECTOR = ".experience-input-wrapper"
const EDUCATION_ROW_SELECTOR = ".education-input-wrapper"
const SECTION_ROW_SELECTOR = `${EXPERIENCE_ROW_SELECTOR}, ${EDUCATION_ROW_SELECTOR}`

function readInputSnapshotValue(input) {
  const type = (input.type || "text").toLowerCase()
  return type === "checkbox" || type === "radio"
    ? input.checked
      ? "Yes"
      : "No"
    : input.value || ""
}

function snapshotRows(selector) {
  return Array.from(document.querySelectorAll(selector))
    .map((row) => {
      const values = {}
      row.querySelectorAll("input, textarea").forEach((node) => {
        const input = node
        const type = (input.type || "text").toLowerCase()
        if (type === "hidden" || type === "file") return
        const label = getFieldLabel(input)
        if (!label) return
        const value = readInputSnapshotValue(input)
        if (value) values[label] = value
      })
      return values
    })
    .filter((row) => Object.keys(row).length > 0)
}

export function getAdditionalFormSnapshotData() {
  return {
    education: snapshotRows(EDUCATION_ROW_SELECTOR),
    employment: snapshotRows(EXPERIENCE_ROW_SELECTOR),
  }
}

function uniqueSnapshotKey(snapshot, label, input) {
  if (snapshot[label] === undefined) return label
  const suffix = input.name || input.id
  return suffix ? `${label} (${suffix})` : label
}

export function getFormSnapshot() {
  const snapshot = {}
  const inputs = document.querySelectorAll("input, textarea")
  inputs.forEach((node) => {
    const input = node
    if (input.closest?.(SECTION_ROW_SELECTOR)) return
    const value = readInputSnapshotValue(input)
    if (!input.name || !value) return
    const label = getFieldLabel(input) || input.name
    snapshot[uniqueSnapshotKey(snapshot, label, input)] = value
  })

  const phoneInput = document.querySelector(
    'input#user-phone, input[name="personal_info.phone"]',
  )
  if (phoneInput?.value) snapshot.Phone = phoneInput.value

  const phoneCountry = phoneInput
    ? readRecruiterflowPhoneCountryCode(phoneInput)
    : ""
  if (phoneCountry) {
    snapshot[RECRUITERFLOW_PHONE_COUNTRY_CODE_LABEL] = phoneCountry
  }
  return snapshot
}

export function readRecruiterflowPhoneCountryCode(input) {
  const iti = input.closest(".iti")
  if (!iti) return ""

  const active =
    iti.querySelector("li.iti__country.iti__active[data-country-code]") ||
    iti.querySelector(
      'li.iti__country[aria-selected="true"][data-country-code]',
    )
  if (active) {
    const name =
      active.querySelector(".iti__country-name")?.textContent?.trim() || ""
    const dial = (
      active.getAttribute("data-dial-code") ||
      active.querySelector(".iti__dial-code")?.textContent ||
      ""
    ).replace(/\D/g, "")
    return [name, dial ? `+${dial}` : ""].filter(Boolean).join(" ")
  }

  const selected = iti.querySelector("button.iti__selected-country")
  const title = selected?.getAttribute("title")?.trim() || ""
  const dialFromTitle = title.match(/\+\s*(\d{1,4})/)?.[1] || ""
  const nameFromTitle = title.replace(/\s*:?\s*\+\s*\d{1,4}\s*$/, "").trim()
  const selectedDial =
    selected?.querySelector(".iti__selected-dial-code")?.textContent?.trim() ||
    ""
  const dialDisplay = selectedDial || (dialFromTitle ? `+${dialFromTitle}` : "")
  return [nameFromTitle, dialDisplay].filter(Boolean).join(" ")
}
