// @ts-nocheck
/**
 * Polymer — form rule extraction, submit button, and form snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as delay from "../../../utils/delay.js"
import * as operations from "./operations.ts"

export async function getRules(retried = false) {
  const rules = []
  const form = document.querySelector('div[id="apply"]')
  if (!form) {
    console.warn("[Polymer getRules] Form not found")
    if (retried) return rules
    await delay.delay(1500)
    return await getRules(true)
  }

  const textInputs = form.querySelectorAll('div[class*="FormInput"]')
  textInputs.forEach((container) => {
    const label = container.querySelector("label")
    const input = container.querySelector('input[type="text"]')
    const requiredLabel = container.querySelector('[class*="RequiredLabel"]')
    if (label && input) {
      const labelText = label.textContent?.trim() || ""
      const required =
        requiredLabel?.textContent?.includes("required") || false
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: labelText,
        $input: input,
        $label: label.parentElement,
        required,
      })
    }
  })

  const selects = form.querySelectorAll('[data-testid="form-select-dropdown"]')
  for (const selectContainer of Array.from(selects)) {
    const label = selectContainer.querySelector("label")
    const control = selectContainer.querySelector(
      '[class*="form-select-ui__control"]',
    )
    const requiredLabel = selectContainer.querySelector(
      '[class*="RequiredLabel"]',
    )
    if (label && control) {
      const labelText = label.textContent?.trim() || ""
      const required =
        requiredLabel?.textContent?.includes("required") || false
      let options = []
      try {
        await operations.simulateUserClick(control, true)
        await delay.delay(500)
        const menu = document.querySelector(".form-select-ui__menu")
        if (menu) {
          const optionNodes = menu.querySelectorAll(".form-select-ui__option")
          options = Array.from(optionNodes)
            .map((option) => option.textContent?.trim() || "")
            .filter(Boolean)
          await operations.simulateUserClick(document.body)
          await delay.delay(100)
        }
      } catch (error) {
        console.warn(
          `[Polymer getRules] Failed to get options for "${labelText}":`,
          error,
        )
      }
      rules.push({
        type: enums.FIELD_TYPE.SELECT,
        label: labelText,
        $input: control,
        $label: label.parentElement,
        required,
        options,
      })
    }
  }

  const textareas = form.querySelectorAll('[class*="FormTextarea"]')
  textareas.forEach((container) => {
    const label = container.querySelector("label")
    const input = container.querySelector("textarea")
    const requiredLabel = container.querySelector('[class*="RequiredLabel"]')
    if (label && input) {
      const labelText = label.textContent?.trim() || ""
      const required =
        requiredLabel?.textContent?.includes("required") || false
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: labelText,
        $input: input,
        $label: label.parentElement,
        required,
      })
    }
  })
  form.querySelectorAll('[class*="FormUploader"]')

  if (rules.length !== 0 || retried) return rules
  await delay.delay(1500)
  return await getRules(true)
}

export function getSubmitButton() {
  const button = document.querySelector('[class*="ApplicationForm_Button"]')
  return button
}

export function getFormSnapshot() {
  const snapshot = {}
  const form =
    document.querySelector('div[id="apply"]') || document.querySelector("form")
  if (!form) {
    console.warn("[Polymer getFormSnapshot] Form not found")
    return snapshot
  }

  const textInputs = form.querySelectorAll('input[type="text"]')
  textInputs.forEach((node) => {
    const input = node
    const label = resolveFieldLabel(input)
    if (label && input.value) snapshot[label] = input.value
  })

  const textareas = form.querySelectorAll("textarea")
  textareas.forEach((node) => {
    const input = node
    const label = resolveFieldLabel(input)
    if (label && input.value) snapshot[label] = input.value
  })

  const selects = form.querySelectorAll('[data-testid="form-select-dropdown"]')
  selects.forEach((container) => {
    const label = container
      .querySelector("label")
      ?.textContent?.trim()
      .replace(/\(required\)/i, "")
      .trim()
    const hidden = container.querySelector('input[type="hidden"]')
    if (label && hidden && hidden.value) {
      const singleValue = container.querySelector(
        ".form-select-ui__single-value",
      )
      const display = singleValue?.textContent?.trim() || hidden.value
      snapshot[label] = display
    }
  })

  const fileInputs = form.querySelectorAll('input[type="file"]')
  fileInputs.forEach((node) => {
    const input = node
    const label = resolveFieldLabel(input)
    if (label) {
      const hasFile = input.files && input.files.length > 0
      snapshot[label] = hasFile ? input.files[0].name : ""
    }
  })
  return snapshot
}

function resolveFieldLabel(input) {
  if (input.id) {
    const forLabel = document.querySelector(`label[for="${input.id}"]`)
    if (forLabel) {
      return (
        forLabel.textContent?.trim().replace(/\(required\)/i, "").trim() || ""
      )
    }
  }
  const container = input.closest(
    '[class*="FormInput"], [class*="FormTextarea"], [class*="FormUploader"]',
  )
  if (container) {
    const label = container.querySelector("label")
    if (label) {
      return label.textContent?.trim().replace(/\(required\)/i, "").trim() || ""
    }
  }
  return input.placeholder || input.name || ""
}
