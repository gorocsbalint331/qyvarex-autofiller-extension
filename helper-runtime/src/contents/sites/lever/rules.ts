// @ts-nocheck
/**
 * Lever — form rule extraction and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"

function normalizeText(value) {
  return String(value ?? "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function getOptionLabelText(label) {
  const eeoText = label.querySelector("span.eeo-option-text")
  if (eeoText) return normalizeText(eeoText.textContent)

  const clone = label.cloneNode(true)
  clone.querySelector(".eeo-option-description")?.remove()
  clone.querySelector("input")?.remove()
  return normalizeText(clone.textContent)
}

export function extractRules() {
  const rules = []
  const questions = xpath.getOrderedNodesSafe(
    '//li[contains(@class, "application-question")] | //div[contains(@class, "application-question")] | //div[contains(@class, "application-additional")]',
  )
  for (const question of questions) {
    const rule = extractRuleFromQuestion(question)
    if (rule) rules.push(rule)
  }
  return rules
}

function extractRuleFromQuestion(question) {
  const labelEl = xpath.getFirstOrderedNodeSafe(
    './/div[contains(@class, "application-label")]',
    question,
  )
  let label = ""
  const isAddSection =
    !!xpath.getFirstOrderedNodeSafe('.//*[text()="Add school"]', question) ||
    !!xpath.getFirstOrderedNodeSafe(
      './/*[text()="Add work experience"]',
      question,
    )
  if (isAddSection) return null

  const additionalTextarea = question.querySelector(
    "textarea#additional-information",
  )
  if (additionalTextarea) {
    const placeholder = additionalTextarea.getAttribute("placeholder")
    label = normalizeText(placeholder) || "Additional Information"
  } else if (labelEl) {
    const textDiv = xpath.getFirstOrderedNodeSafe(
      './/div[@class="text"]',
      labelEl,
    )
    if (textDiv) {
      label = normalizeText(textDiv.textContent)
    } else {
      const firstText = xpath.getFirstOrderedNodeSafe("./text()[1]", labelEl)
      label = firstText
        ? normalizeText(firstText.textContent)
        : normalizeText((labelEl.textContent || "").split("\n")[0])
    }
    label = normalizeText(label.replace(/[\u2731*]$/, ""))
  }

  const required = !!xpath.getFirstOrderedNodeSafe(
    './/span[@class="required"]',
    question,
  )

  let fieldRoot = null
  if (question.classList.contains("application-additional")) {
    fieldRoot = question
  } else {
    fieldRoot = xpath.getFirstOrderedNodeSafe(
      './/div[contains(@class, "application-field")]',
      question,
    )
  }
  if (!fieldRoot) return null

  const checkboxes = xpath.getOrderedNodesSafe(
    './/input[@type="checkbox"]',
    fieldRoot,
  )
  if (checkboxes.length > 0) {
    const optionLabels = xpath.getOrderedNodesSafe(".//label", fieldRoot)
    const options = optionLabels
      .map(getOptionLabelText)
      .filter((text) => text && text !== "Custom")
    const checkboxLabel =
      label || (checkboxes.length === 1 && options[0]) || ""
    if (!checkboxLabel) return null
    return {
      type: enums.FIELD_TYPE.CHECKBOX,
      label: checkboxLabel,
      required,
      options,
      $radioParent: fieldRoot,
      $checkboxs: checkboxes,
      $input: checkboxes[0],
      $label: labelEl,
    }
  }

  const textInput = xpath.getFirstOrderedNodeSafe(
    './/input[@type="text"] | .//input[@type="email"] | .//input[@type="tel"] | .//textarea',
    fieldRoot,
  )
  if (textInput) {
    const style = window.getComputedStyle(textInput)
    if (style.display === "none" || textInput.id === "customPronounsTextField") {
      // skip hidden / custom pronouns text field
    } else {
      if (!label && textInput.tagName === "TEXTAREA") {
        const placeholder = textInput.getAttribute("placeholder")
        label = normalizeText(placeholder) || "Additional Information"
      } else if (!label) {
        return null
      }
      return {
        type: enums.FIELD_TYPE.TEXT,
        label,
        required,
        $input: textInput,
        $label: labelEl,
      }
    }
  }

  if (!label) return null

  const fileInput = xpath.getFirstOrderedNodeSafe(
    './/input[@type="file"]',
    fieldRoot,
  )
  if (fileInput) {
    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required,
      $input: fileInput,
      $label: labelEl,
    }
  }

  const select = xpath.getFirstOrderedNodeSafe(".//select", fieldRoot)
  if (select) {
    const options = xpath
      .getOrderedNodesSafe(".//option", select)
      .map((option) => normalizeText(option.textContent))
      .filter(
        (text) => text && text !== "Select ..." && text !== "Select...",
      )
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required,
      options,
      $input: select,
      $label: labelEl,
    }
  }

  const radios = xpath.getOrderedNodesSafe(
    './/input[@type="radio"]',
    fieldRoot,
  )
  if (radios.length > 0) {
    const optionLabels = xpath.getOrderedNodesSafe(".//label", fieldRoot)
    const options = optionLabels.map(getOptionLabelText)
    return {
      type: enums.FIELD_TYPE.RADIOGROUP,
      label,
      required,
      options,
      $input: radios[0],
      $radioParent: fieldRoot,
      $label: labelEl,
    }
  }

  return null
}

export function getFormSnapshot() {
  const snapshot = {}
  const questions = xpath.getOrderedNodesSafe(
    '//li[contains(@class, "application-question")] | //div[contains(@class, "application-question")] | //div[contains(@class, "application-additional")]',
  )

  for (const question of questions) {
    const labelEl = xpath.getFirstOrderedNodeSafe(
      './/div[contains(@class, "application-label")]',
      question,
    )

    if (!labelEl) {
      const additionalTextarea = question.querySelector(
        "textarea#additional-information",
      )
      if (additionalTextarea) {
        const placeholder = additionalTextarea.getAttribute("placeholder")
        snapshot[normalizeText(placeholder) || "Additional Information"] =
          additionalTextarea.value
        continue
      }
    }

    const label = normalizeText(
      labelEl?.textContent
        ?.replace(/\s*\u2731\s*$/, "")
        .replace(/\s*\*\s*$/, ""),
    )
    if (!label || label === "Resume/CV" || label === "Current location") {
      continue
    }

    const textInput = xpath.getFirstOrderedNodeSafe(
      './/input[@type="text" or @type="email" or @type="tel" or @type="url"] | .//textarea',
      question,
    )
    if (textInput && textInput.id !== "customPronounsTextField") {
      snapshot[label] = textInput.value
      continue
    }

    const select = xpath.getFirstOrderedNodeSafe(".//select", question)
    if (select) {
      snapshot[label] = getSelectedOptionText(select)
      continue
    }

    const radios = xpath.getOrderedNodesSafe(
      './/input[@type="radio"]',
      question,
    )
    if (radios.length > 0) {
      const checked = radios.find((radio) => radio.checked)
      if (checked) {
        const sibling = xpath.getFirstOrderedNodeSafe(
          "./following-sibling::span[1]",
          checked,
        )
        if (sibling) {
          snapshot[label] = normalizeText(sibling.textContent)
        } else {
          const fallback = xpath.getFirstOrderedNodeSafe(
            "./parent::label/span[1] | ./following-sibling::label[1]/span | ./following-sibling::label[1]",
            checked,
          )
          snapshot[label] = fallback
            ? normalizeText(fallback.textContent)
            : checked.value
        }
      } else {
        snapshot[label] = ""
      }
      continue
    }

    const checkboxes = xpath.getOrderedNodesSafe(
      './/input[@type="checkbox"]',
      question,
    )
    if (checkboxes.length > 0) {
      const checked = checkboxes.filter((checkbox) => checkbox.checked)
      const values = []
      for (const checkbox of checked) {
        if (checkbox.id === "customPronounsOption") {
          const customInput = xpath.getFirstOrderedNodeSafe(
            './/input[@id="customPronounsTextField"]',
            question,
          )
          values.push(customInput?.value || "Custom")
        } else {
          const sibling = xpath.getFirstOrderedNodeSafe(
            "./following-sibling::span[1]",
            checkbox,
          )
          if (sibling) {
            values.push(normalizeText(sibling.textContent))
          } else {
            const fallback = xpath.getFirstOrderedNodeSafe(
              "./parent::label/span[1] | ./following-sibling::label[1]/span | ./following-sibling::label[1]",
              checkbox,
            )
            values.push(
              fallback
                ? normalizeText(fallback.textContent)
                : checkbox.value,
            )
          }
        }
      }
      snapshot[label] = JSON.stringify(values)
      continue
    }
  }

  return snapshot
}

function getSelectedOptionText(select) {
  const option = select.options[select.selectedIndex]
  return normalizeText(option.text)
}
