// @ts-nocheck
/**
 * Intuit — form rule extraction and snapshots.
 * Readable TypeScript source of truth.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"

function extractDropdownOptions(input) {
  const options = []
  try {
    let listRoot
    const ariaLabel = input.getAttribute("aria-label")
    const byAriaLabel = `//div[@aria-label='${ariaLabel}']//div[@role='option']`
    listRoot = xpath.getFirstOrderedNodeSafe(byAriaLabel)
    if (!listRoot) {
      const ariaControls = input.getAttribute("aria-controls")
      const byControls = `//*[@id="${ariaControls}"]`
      listRoot = xpath.getFirstOrderedNodeSafe(byControls)
    }
    if (listRoot) {
      const optionNodes = xpath.getOrderedNodesSafe(
        "//*[@role='option']",
        listRoot,
      )
      for (const optionNode of optionNodes) {
        const labelSpan = xpath.getFirstOrderedNodeSafe(
          './/span[contains(@class, "label")]',
          optionNode,
        )
        const text =
          labelSpan?.textContent?.trim() ||
          optionNode.getAttribute("value")?.trim() ||
          optionNode.textContent?.trim() ||
          ""
        if (text) options.push(text)
      }
    }
  } catch {
    // ignore option scrape failures
  }
  return options
}

async function extractRuleFromQuestionContent(questionContent) {
  const labelEl = xpath.getFirstOrderedNodeSafe(".//label[@for]", questionContent)
  const previousText = questionContent.previousElementSibling?.textContent || ""
  const label = previousText.replaceAll("*", "").trim()
  const required = previousText.includes("*")
  const labelLower = label.toLowerCase()
  const isMultiSelect =
    labelLower.includes("tax returns") &&
    labelLower.includes("select all that apply")

  if (labelEl) {
    const forId = labelEl.getAttribute("for")
    if (!forId) return null
    const control = document.getElementById(forId)
    if (!control) return null

    if (
      control.getAttribute("aria-haspopup") === "true" ||
      control.getAttribute("role") === "combobox"
    ) {
      const input = control
      let options = []
      if (input) {
        try {
          input.click()
          await new Promise((resolve) => setTimeout(resolve, 500))
          options = extractDropdownOptions(input)
          input.dispatchEvent(
            new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
          )
          await new Promise((resolve) => setTimeout(resolve, 500))
        } catch {
          // ignore dropdown open failures
        }
      }
      return {
        type: isMultiSelect
          ? enums.FIELD_TYPE.MULTI_SELECT
          : enums.FIELD_TYPE.SELECT,
        label,
        required,
        options,
        $input: input,
        $label: labelEl,
      }
    }

    if (control.tagName === "INPUT" || control.tagName === "TEXTAREA") {
      const input = control
      const inputType = input.getAttribute("type") || "text"
      if (inputType === "hidden") return null
      return {
        type: enums.FIELD_TYPE.TEXT,
        label,
        required,
        $input: input,
        $label: labelEl,
      }
    }
  }

  const fieldset = xpath.getFirstOrderedNodeSafe(".//fieldset", questionContent)
  if (fieldset) {
    const radios = xpath.getOrderedNodesSafe(
      './/input[@type="radio"]',
      fieldset,
    )
    if (radios.length > 0) {
      if (!label) return null
      const options = radios.map((radio) => {
        const radioLabel = radio.closest("label")
        return radioLabel?.textContent?.trim() || radio.value || ""
      })
      return {
        type: enums.FIELD_TYPE.RADIOGROUP,
        label,
        required,
        options: options.filter((option) => option),
        $radioParent: questionContent,
        $input: radios[0],
        $label: null,
      }
    }
  }

  return null
}

export async function extractRules() {
  const rules = []
  const questionContents = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "question-content")]',
  )
  if (questionContents) {
    for (const questionContent of questionContents) {
      const rule = await extractRuleFromQuestionContent(questionContent)
      if (rule) rules.push(rule)
    }
  }
  return rules
}

export async function getFormSnapshot() {
  const snapshot = {}
  const questionContents = xpath.getOrderedNodesSafe(
    '//div[contains(@class, "question-content")]',
  )
  for (const questionContent of questionContents) {
    const labelEl = xpath.getFirstOrderedNodeSafe(
      ".//label[@for]",
      questionContent,
    )
    if (labelEl) {
      const forId = labelEl.getAttribute("for")?.trim()
      if (!forId) continue
      const control = document.getElementById(forId)
      snapshot[forId] = control?.value || ""
    }
    const fieldset = xpath.getFirstOrderedNodeSafe(
      ".//fieldset",
      questionContent,
    )
    if (fieldset) {
      const checked = fieldset.querySelector('input[type="radio"]:checked')
      const checkedLabel = checked?.closest("label")
      const fieldsetId = fieldset.id
      if (checkedLabel) {
        snapshot[fieldsetId] = checkedLabel.textContent?.trim()
      }
    }
  }
  return snapshot
}
