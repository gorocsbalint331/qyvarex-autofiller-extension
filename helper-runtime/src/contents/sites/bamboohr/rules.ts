// @ts-nocheck
/**
 * BambooHR form rule extraction (Fabric / MUI application fields).
 */

import * as operations from "./operations.ts"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"

export async function getRules() {
  const rows = xpath.getOrderedNodesSafe(
    `.//*[@id="careerApplicationForm"]//div[contains(@class, "fab-FormRow")]
| .//form[@id="job-application-form"]//*[contains(@class, "MuiFormControl-root") or @data-fabric-component="Checkbox"]
`,
    document,
  )
  const rules = []
  const shouldClear = false
  const clearHandlers = {
    [enums.FIELD_TYPE.CHECKBOX]: async (rule) => {
      await operations.clearCustomCheckboxField(rule)
    },
    [enums.FIELD_TYPE.SELECT]: async (rule) => {
      await operations.clearCustomSelectField(rule.$input)
    },
    [enums.FIELD_TYPE.TEXT]: async (rule) => {
      await operations.clearInputField(rule.$input)
    },
  }

  for (const row of rows) {
    const rule = await extractRule(row)
    if (rule) {
      rules.push(rule)
      const fieldType = rule.type
      if (shouldClear && clearHandlers[fieldType]) {
        await clearHandlers[fieldType](rule)
      }
    }
  }

  return rules
}

async function extractRule(el) {
  if (!(el instanceof HTMLElement)) return null
  return (
    (await extractCheckboxRule(el)) ||
    (await extractSelectRule(el)) ||
    extractTextRule(el) ||
    (await extractSpecialRule(el))
  )
}

async function extractCheckboxRule(el) {
  let legend = el.querySelector("legend")
  let isStandaloneCheckbox = false

  if (!legend) {
    const match = xpath.getFirstOrderedNode(
      `self::*[
not(child::label)
and (
child::div[contains(concat(' ', @class, ' '), ' fab-InputWrapper ')]
and .//div[contains(concat(' ', @class, ' '), ' fab-Checkbox ')]
) or (
@data-fabric-component="Checkbox"
)
]`,
      el,
    )
    if (
      !match ||
      !(legend =
        el.querySelector("label.fab-Checkbox__label") ||
        el.querySelector("label.MuiFormControlLabel-root"))
    ) {
      return null
    }
    isStandaloneCheckbox = true
  }

  const label = cleanLabelText(legend)
  if (!label) return null

  const required =
    legend.classList.contains("fab-RadioGroup__legend--required") ||
    legend.classList.contains("fab-CheckboxGroup__legend--required") ||
    isLabelRequired(legend) ||
    el.getAttribute("aria-required") === "true"

  const optionNodes = xpath.getOrderedNodesSafe(
    `.//*[
@data-fabric-component="Radio"
or @data-fabric-component="Checkbox"
or contains(concat(' ', @class, ' '), ' fab-Radio ')
or contains(concat(' ', @class, ' '), ' fab-Checkbox ')
]`,
    el,
  )
  const checkboxes = []
  let options = []

  for (const optionNode of optionNodes) {
    const input = optionNode.querySelector(
      "input[type='radio'], input[type='checkbox']",
    )
    const optionLabel = optionNode.querySelector("label")?.textContent?.trim()
    if (input && optionLabel) {
      checkboxes.push(input)
      options.push(optionLabel)
    }
  }

  if (!checkboxes.length) return null

  if (label === "Veteran Status") {
    const veteranOptions = await getVeteranStatusOptions()
    if (veteranOptions) {
      options = [...options.slice(0, -1), ...veteranOptions]
    }
  }

  return {
    type: enums.FIELD_TYPE.CHECKBOX,
    label,
    required,
    $checkboxs: checkboxes,
    options: isStandaloneCheckbox ? ["Yes", "No"] : options,
    $input: checkboxes[0],
    $label: legend,
  }
}

async function extractSelectRule(el) {
  const match = xpath.getFirstOrderedNode("self::*[.//select]", el)
  if (!match) return null

  const labelEl = match.querySelector("label")
  if (!labelEl) return null

  const label = cleanLabelText(labelEl)
  if (!label) return null

  const required = isLabelRequired(labelEl)
  const toggle = match.querySelector(".fab-Select .fab-SelectToggle")
  const options = await getSelectOptionTexts(toggle)
  if (!options || !options.length) return null

  return {
    type: enums.FIELD_TYPE.SELECT,
    label,
    required,
    options,
    $input: toggle,
    $label: labelEl,
  }
}

function extractTextRule(el) {
  const match = xpath.getFirstOrderedNode(
    `self::*[
      .//input[(contains(concat(' ', @class, ' '), ' fabric-') and substring(concat(' ', @class, ' '), string-length(concat(' ', @class, ' ')) - 5) = '-input ') or contains(concat(' ', @class, ' '), ' MuiInputBase-input ')]
      or .//textarea
      or .//label[@for="dateAvailable"]
    ]`,
    el,
  )
  if (!match) return null

  const labelEl = match.querySelector("label")
  if (!labelEl) return null

  let label = cleanLabelText(labelEl)
  if (!label) return null

  let required = isLabelRequired(labelEl)
  if (labelEl.getAttribute("for") === "dateAvailable") {
    required = label.includes("*")
    const cloned = labelEl.cloneNode(true)
    Array.from(cloned.children).forEach((child) => child.remove())
    label = cleanLabelText(cloned)
    if (!label) return null
  }

  const input = match.querySelector("input, textarea")
  if (!input) return null

  return {
    type: enums.FIELD_TYPE.TEXT,
    label,
    required,
    $input: input,
    $label: labelEl,
  }
}

async function extractSpecialRule(el) {
  const match = xpath.getFirstOrderedNode(
    "self::*[.//label[@for and string(@for) != '']]",
    el,
  )
  if (!match) return null

  const labelEl = match.querySelector("label")
  if (!labelEl) return null

  const label = cleanLabelText(labelEl)
  if (!label) return null

  const required = isLabelRequired(labelEl)
  return {
    type: enums.FIELD_TYPE.BAMBOOHR_SPECIAL,
    label,
    required,
    $label: labelEl,
  }
}

async function getVeteranStatusOptions() {
  const veteranField = document.querySelector(".CandidateField--veteranStatuses")
  const toggle =
    veteranField?.querySelector(".fab-Select .fab-SelectToggle") ||
    document.querySelector('[aria-label="Veteran Status \u2013Select\u2013"]')
  if (!toggle) return null
  return await getSelectOptionTexts(toggle)
}

async function getSelectOptionTexts(toggleEl) {
  const optionNodes = await operations.getSelectOptionList(toggleEl)
  return optionNodes.map((option) => option?.textContent?.trim())
}

export function findAndRemoveRule(rules, label) {
  const index = rules.findIndex((rule) => rule.label === label)
  if (index === -1) return null
  return rules.splice(index, 1)[0]
}

export function getSubmitButtonText() {
  return "Submit Application"
}

function cleanLabelText(el) {
  return el?.textContent?.replaceAll("*", "").trim()
}

function isLabelRequired(el) {
  return (
    el.classList.contains("fab-Label--required") ||
    !!el.querySelector(".MuiFormLabel-asterisk")
  )
}
