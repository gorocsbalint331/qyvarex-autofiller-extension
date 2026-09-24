// @ts-nocheck
/**
 * Amazon ATS form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as utils from "../../../utils.js"
import { selectAmazonCountryIfNeeded } from "./country.ts"

export async function extractRules() {
  let contentRoots = xpath.getOrderedNodes(
    "//div[contains(@class, 'application-content')]",
    document,
  )
  let rules = []
  let formTitle = xpath.getFirstOrderedNode("//h2[@class='form-title']")

  if (
    formTitle &&
    "Upload your resume" === formTitle.textContent &&
    formTitle.parentElement?.parentElement?.classList.contains("active")
  ) {
    rules.push({ _resumeUploadMarker: true })
  }

  for (let root of contentRoots) {
    let fields = xpath.getOrderedNodes(
      ".//input | .//textarea | .//select",
      root,
    )
    for (let field of fields) {
      let rule = await parseFieldRule(field)
      if (rule) rules.push(rule)
    }
  }

  let submitButton = xpath.getFirstOrderedNode(
    '//div[@class="form-group submit-button mt-5"]//button[@type="button"][@class="btn btn-primary"]',
  )
  let submitText = submitButton ? submitButton.textContent?.trim() : ""

  return [rules, submitText]
}

async function parseFieldRule(el) {
  let fieldType
  let options
  let checkboxes

  let labelNearField = xpath.getFirstOrderedNode(
    './ancestor::div[contains(@class, "text-field") or contains(@class, "form-group") or contains(@class, "question")][1]//label',
    el,
  )
  let questionLabel = xpath.getFirstOrderedNode(
    './ancestor::div[contains(@class, "question")][1]//label',
    el,
  )
  let parentQuestionLabel = xpath.getFirstOrderedNode(
    './ancestor::div[contains(@class, "question")][2]//label',
    el,
  )
  let requiredAttr = el.required

  if ("hidden" === el.getAttribute("type")) return null

  let labelEl = labelNearField || questionLabel || parentQuestionLabel
  if (!labelEl) return null

  let afterStyle = window.getComputedStyle(labelEl, "::after")
  let hasAsterisk = afterStyle.content.includes("*")
  let required = requiredAttr || hasAsterisk
  let label = labelEl?.textContent?.trim()

  if (utils.isEmpty(label)) return null

  if ("TEXTAREA" === el.tagName) fieldType = enums.FIELD_TYPE.TEXT

  if ("INPUT" === el.tagName || "TEXTAREA" === el.tagName) {
    if ("file" === el.getAttribute("type")) return null

    fieldType = ["checkbox", "radio"].includes(el.getAttribute("type"))
      ? enums.FIELD_TYPE.CHECKBOX
      : enums.FIELD_TYPE.TEXT

    if (fieldType === enums.FIELD_TYPE.CHECKBOX) {
      let name = el.getAttribute("name")
      checkboxes = Array.from(
        document.querySelectorAll(`input[name="${name}"]`),
      )
      if (0 === checkboxes.length) checkboxes = [el]

      options = checkboxes.reduce((collected, checkbox) => {
        let optionText = checkbox.nextSibling?.textContent?.trim()
        if (!utils.isEmpty(optionText) && checkbox.getAttribute("value"))
          collected.push(optionText)
        return collected
      }, [])

      if (checkboxes.indexOf(el) >= 1) return null

      return {
        type: enums.FIELD_TYPE.CHECKBOX,
        label,
        required: !!required,
        $label: labelEl,
        options,
        $checkboxs: checkboxes,
      }
    }

    return {
      type: enums.FIELD_TYPE.TEXT,
      label,
      required: !!required,
      $label: labelEl,
      $input: el,
    }
  }

  if ("SELECT" === el.tagName) {
    fieldType = enums.FIELD_TYPE.SELECT
    let optionNodes = xpath.getOrderedNodes("./option", el)
    options = optionNodes.reduce((collected, option) => {
      let optionText = option.textContent?.trim()
      if (!utils.isEmpty(optionText) && option.getAttribute("value"))
        collected.push(optionText)
      return collected
    }, [])

    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required: !!required,
      $input: el,
      $label: labelEl,
      options,
    }
  }

  return null
}

export function getFormSnapshot() {
  let snapshot = {}
  let contentRoots = xpath.getOrderedNodes(
    "//div[contains(@class, 'application-content')]",
    document,
  )

  if (0 === contentRoots.length) {
    console.warn(
      "[getFormSnapshot] No application-content found, trying alternative selectors",
    )
    contentRoots = xpath.getOrderedNodes(
      "//form | //div[contains(@class, 'form')] | //div[contains(@class, 'application')]",
      document,
    )
  }

  for (let root of contentRoots) {
    let fields = xpath.getOrderedNodes(
      ".//input | .//select | .//textarea",
      root,
    )
    for (let field of fields) {
      let labelNearField = xpath.getFirstOrderedNode(
        './ancestor::div[contains(@class, "text-field") or contains(@class, "form-group") or contains(@class, "question")][1]//label',
        field,
      )
      let questionLabel = xpath.getFirstOrderedNode(
        './ancestor::div[contains(@class, "question")][1]//label',
        field,
      )
      let parentQuestionLabel = xpath.getFirstOrderedNode(
        './ancestor::div[contains(@class, "question")][2]//label',
        field,
      )
      let labelEl = labelNearField || questionLabel || parentQuestionLabel
      if (!labelEl) continue

      let label = labelEl.textContent?.trim() || ""
      let value = ""

      if ("INPUT" === field.tagName) {
        let input = field
        if ("checkbox" === input.type) value = input.checked ? "Yes" : "No"
        else if ("radio" === input.type) {
          let checked = document.querySelector(
            `input[type="radio"][name="${input.name}"]:checked`,
          )
          value = checked?.value || ""
        } else value = input.value || ""
      } else if ("SELECT" === field.tagName) {
        let selectEl = field
        value =
          selectEl.options[selectEl.selectedIndex]?.textContent?.trim() || ""
      } else if ("TEXTAREA" === field.tagName) {
        let textarea = field
        value = textarea.value || ""
      }

      snapshot[label] = value
    }
  }

  return snapshot
}

export { selectAmazonCountryIfNeeded }
