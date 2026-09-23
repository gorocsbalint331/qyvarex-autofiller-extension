// @ts-nocheck
/**
 * TeamTailor — form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"
import * as observer from "../../methods/observer.ts"
import * as xpath from "../../../core/xpath.js"
import * as teamtailorPhone from "./phone-country-code.ts"

export const TEAMTAILOR_APPLICATION_FORM_SELECTOR =
  "turbo-frame#application_form"
export const TEAMTAILOR_COVER_LETTER_TEXTAREA_SELECTOR =
  'textarea[name="candidate[job_applications_attributes][0][cover_letter]"], textarea[id="candidate_job_applications_attributes_0_cover_letter"]'

function getApplicationFormFrame() {
  return document.querySelector(TEAMTAILOR_APPLICATION_FORM_SELECTOR)
}

function isApplicationFormReady() {
  const frame = getApplicationFormFrame()
  return (
    !frame ||
    !!frame.querySelector(
      `[data-controller*="forms--inputs"], .z-phone-input-flag, ${TEAMTAILOR_COVER_LETTER_TEXTAREA_SELECTOR}`,
    )
  )
}

export async function waitForApplicationFormReady() {
  const frame = getApplicationFormFrame()
  if (!frame || isApplicationFormReady()) return
  frame.scrollIntoView({ block: "center", inline: "nearest" })
  await observer.waitForCondition(() => isApplicationFormReady(), {
    timeout: 8e3,
    interval: 100,
    observeTarget: frame,
  })
}

export async function extractRules() {
  await waitForApplicationFormReady()
  const rules = []
  const containers = xpath.getOrderedNodesSafe(
    '//div[contains(@class,"z-phone-input-flag") or contains(@data-controller,"forms--inputs")]',
  )
  for (const container of containers) {
    const rule = await getTeamtailorRuleForTests(container)
    if (rule) {
      if (Array.isArray(rule)) rules.push(...rule)
      else rules.push(rule)
    }
  }
  return rules
}

export function getCoverLetterStatus() {
  const textarea = document.querySelector(
    TEAMTAILOR_COVER_LETTER_TEXTAREA_SELECTOR,
  )
  if (!textarea) return ""
  const container = textarea.closest(
    '[data-controller*="forms--inputs--text"]',
  )
  if (!container) return ""
  const label = findFieldLabel(container)
  if (!label) return ""
  return isRequiredLabel(label) ? "required" : "optional"
}

export async function getTeamtailorRuleForTests(container) {
  const labelEl = findFieldLabel(container)
  if (!labelEl) return null
  const label = labelEl.textContent?.trim().split("*")[0]
  if (!label) return null

  const isPhoneFlag = container.classList.contains("z-phone-input-flag")
  if (isPhoneFlag) {
    const phoneInput = container.querySelector(
      'input[data-controller="phone-input"]',
    )
    if (!phoneInput) return null
    const required = isRequiredLabel(labelEl)
    const countryTrigger = findPhoneCountryTrigger(container, phoneInput)
    const phoneRule = {
      label: label || "Phone",
      type: enums.FIELD_TYPE.TEXT,
      required,
      $input: phoneInput,
      $label: labelEl,
    }
    if (countryTrigger) {
      return [
        {
          label: "Phone Country Code",
          type: enums.FIELD_TYPE.SELECT,
          required,
          options: getPhoneCountryOptions(countryTrigger),
          $input: countryTrigger,
          $label: labelEl,
        },
        phoneRule,
      ]
    }
    return phoneRule
  }

  const controller = container.getAttribute("data-controller") || ""
  let inputKind = ""
  const match = controller.match(/forms--inputs--(\w+)/)
  if (match) inputKind = match[1]

  let fieldType = null
  switch (inputKind) {
    case "text":
      fieldType = enums.FIELD_TYPE.TEXT
      break
    case "boolean":
      fieldType = enums.FIELD_TYPE.RADIOGROUP
      break
    case "choice":
      fieldType = container.querySelector("button")
        ? enums.FIELD_TYPE.SELECT
        : container.querySelector('input[type="radio"]')
          ? enums.FIELD_TYPE.RADIOGROUP
          : enums.FIELD_TYPE.CHECKBOX
      break
    case "upload":
      return null
  }
  if (!fieldType) return null

  let input = null
  if (fieldType === enums.FIELD_TYPE.TEXT) {
    input = container.querySelector(
      'input[type="text"], input[type="email"], input[type="tel"], input[type="number"],input[type="date"],textarea',
    )
  } else if (fieldType === enums.FIELD_TYPE.RADIOGROUP) {
    input = container.querySelector('input[type="radio"]')
  } else if (fieldType === enums.FIELD_TYPE.CHECKBOX) {
    input = container.querySelector('input[type="checkbox"]')
  } else if (fieldType === enums.FIELD_TYPE.SELECT) {
    input = container.querySelector('button[role="button"]')
  }
  if (!input) return null

  const required = isRequiredLabel(labelEl)
  let options = []
  if (fieldType === enums.FIELD_TYPE.SELECT) {
    options = await extractSelectOptions(input)
  } else if (fieldType === enums.FIELD_TYPE.RADIOGROUP) {
    const radios = getRadioInputs(container)
    options = getRadioOptionLabels(radios)
  } else if (fieldType === enums.FIELD_TYPE.CHECKBOX) {
    const checkboxes = container.querySelectorAll('input[type="checkbox"]')
    if (checkboxes.length >= 1) {
      options = Array.from(checkboxes)
        .map((checkbox) => {
          const optionLabel = findAdjacentLabel(checkbox)
          return optionLabel?.textContent?.trim() || checkbox.value || ""
        })
        .filter((text) => text)
    }
  }

  return {
    label,
    type: fieldType,
    required,
    options,
    $input: input,
    $radioParent: container,
  }
}

function findPhoneCountryTrigger(container, phoneInput) {
  const previous = phoneInput?.previousElementSibling
  const button = previous?.querySelector("button")
  return button || container.querySelector("button")
}

function getSelectedPhoneCountryLabel(trigger) {
  return trigger
    ? teamtailorPhone.getSelectedTeamtailorPhoneCountryLabel(trigger)
    : ""
}

function getPhoneCountryOptions(trigger) {
  return teamtailorPhone.getTeamtailorPhoneCountryOptions(
    trigger.nextElementSibling,
  )
}

export function getTeamtailorPhoneSnapshotForTests(container, phoneLabel) {
  const phoneInput = container.querySelector(
    '[data-controller="phone-input"]',
  )
  const snapshot = {}
  const countryTrigger = findPhoneCountryTrigger(container, phoneInput)
  if (countryTrigger) {
    snapshot["Phone Country Code"] = getSelectedPhoneCountryLabel(
      countryTrigger,
    )
  }
  if (phoneInput) {
    snapshot[phoneLabel] = phoneInput.value || ""
  }
  return Object.keys(snapshot).length > 0 ? snapshot : null
}

function findFieldLabel(container) {
  const previous = container.previousElementSibling
  if (
    previous &&
    (previous.tagName === "LABEL" || previous.tagName === "LEGEND")
  ) {
    return previous
  }
  if (container) {
    const nested =
      container.querySelector("label") || container.querySelector("legend")
    if (nested) return nested
  }
  const id = container.id
  if (id) {
    const byFor =
      document.querySelector(`label[for="${id}"]`) ||
      document.querySelector(`legend[for="${id}"]`)
    if (byFor) return byFor
  }
  return null
}

function findAdjacentLabel(input) {
  let sibling = input.nextElementSibling
  while (sibling) {
    if (sibling.tagName === "LABEL") return sibling
    sibling = sibling.nextElementSibling
  }
  return null
}

function isRequiredLabel(label) {
  if (label) {
    const span = label.querySelector("span")
    if (span && span.textContent?.trim().toLowerCase() === "required") {
      return true
    }
  }
  return !!(label && label.textContent?.includes("*"))
}

function getRadioInputs(container) {
  return xpath.getOrderedNodesSafe('.//input[@type="radio"]', container)
}

function getRadioOptionLabels(radios) {
  const options = []
  for (const radio of radios) {
    const label = findAdjacentLabel(radio)
    const text = label?.textContent?.trim() || radio.value || ""
    if (text) options.push(text)
  }
  return options
}

async function extractSelectOptions(input) {
  const options = []
  if (input.tagName === "SELECT") {
    Array.from(input.options).forEach((option) => {
      if (option.value && option.value !== "") {
        options.push(option.textContent?.trim() || option.value)
      }
    })
    return options
  }
  const menu = input.nextElementSibling
  if (menu && menu.tagName === "DIV") {
    const buttons = menu.querySelectorAll("button")
    buttons.forEach((button) => {
      const labelDiv = button.querySelector("div")
      if (labelDiv) {
        const text = labelDiv.textContent?.trim()
        if (text) options.push(text)
      }
    })
  }
  return options
}

export function getFormSnapshot() {
  const snapshot = {}
  const containers = xpath.getOrderedNodesSafe(
    '//div[contains(@class,"z-phone-input-flag") or contains(@data-controller,"forms--inputs")]',
  )
  for (const container of containers) {
    const labelEl = findFieldLabel(container)
    if (!labelEl) continue
    const label = labelEl.textContent?.trim().split("*")[0]
    if (!label) continue

    let value = ""
    const isPhoneFlag = container.classList.contains("z-phone-input-flag")
    if (isPhoneFlag) {
      Object.assign(
        snapshot,
        getTeamtailorPhoneSnapshotForTests(container, label) || {},
      )
      continue
    }

    {
      const controller = container.getAttribute("data-controller") || ""
      const match = controller.match(/forms--inputs--(\w+)/)
      const inputKind = match ? match[1] : ""
      switch (inputKind) {
        case "text": {
          const input = container.querySelector(
            'input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="date"], textarea',
          )
          if (input) value = input.value || ""
          break
        }
        case "boolean": {
          const checked = container.querySelector(
            'input[type="radio"]:checked',
          )
          if (checked) {
            const optionLabel = document.querySelector(
              `label[for="${checked.id}"]`,
            )
            value =
              optionLabel?.textContent?.trim() || checked.value || ""
          }
          break
        }
        case "choice":
          if (container.querySelector("button")) {
            const button = container.querySelector("button")
            const menu = button.nextElementSibling
            if (menu && menu.tagName === "DIV") {
              const selected = menu.querySelector(
                'button[aria-selected="true"], button.selected',
              )
              if (selected) {
                const labelDiv = selected.querySelector("div")
                value = labelDiv?.textContent?.trim() || ""
              }
            }
          } else if (container.querySelector('input[type="radio"]')) {
            const checked = container.querySelector(
              'input[type="radio"]:checked',
            )
            if (checked) {
              const optionLabel = document.querySelector(
                `label[for="${checked.id}"]`,
              )
              value =
                optionLabel?.textContent?.trim() || checked.value || ""
            }
          } else {
            const checkedBoxes = container.querySelectorAll(
              'input[type="checkbox"]:checked',
            )
            const selected = []
            checkedBoxes.forEach((checkbox) => {
              const optionLabel = findAdjacentLabel(checkbox)
              const text =
                optionLabel?.textContent?.trim() || checkbox.value || ""
              if (text) selected.push(text)
            })
            value = selected.join(", ")
          }
          break
        case "upload":
          continue
        default: {
          const field = container.querySelector("input, select, textarea")
          if (field) {
            if (field.tagName === "INPUT") {
              const input = field
              if (input.type === "checkbox") {
                value = input.checked ? "Yes" : "No"
              } else if (input.type === "radio") {
                const checked = container.querySelector(
                  'input[type="radio"]:checked',
                )
                if (checked) {
                  const optionLabel = document.querySelector(
                    `label[for="${checked.id}"]`,
                  )
                  value =
                    optionLabel?.textContent?.trim() ||
                    checked.value ||
                    ""
                }
              } else {
                value = input.value || ""
              }
            } else if (field.tagName === "SELECT") {
              const select = field
              value =
                select.options[select.selectedIndex]?.textContent?.trim() ||
                ""
            } else if (field.tagName === "TEXTAREA") {
              const textarea = field
              value = textarea.value || ""
            }
          }
        }
      }
    }
    if (label) snapshot[label] = value
  }
  return snapshot
}
