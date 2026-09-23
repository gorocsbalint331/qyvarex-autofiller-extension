// @ts-nocheck
/**
 * XCompany — form rule extraction and snapshot reading.
 */

import * as enums from "../../../core/enums.js"

const FORM_ROOT_SELECTOR = "#main x-island form"
const QUESTION_SELECTOR = '[class*="_question_"]'
const QUESTION_LABEL_SELECTOR =
  '[class*="_questionLabel_"], [class*="_questionLabelMedium_"]'

function isVisibleElement(element) {
  if (
    !element ||
    ("hidden" in element && element.hidden) ||
    element.getAttribute?.("aria-hidden") === "true"
  ) {
    return false
  }

  let inlineStyle = (element.getAttribute?.("style") ?? "")
    .replace(/\s+/g, "")
    .toLowerCase()
  if (
    inlineStyle.includes("display:none") ||
    inlineStyle.includes("visibility:hidden")
  ) {
    return false
  }

  if (
    typeof window !== "undefined" &&
    typeof window.getComputedStyle === "function"
  ) {
    let computed = window.getComputedStyle(element)
    if (
      computed.display === "none" ||
      computed.visibility === "hidden" ||
      ("offsetParent" in element &&
        element.offsetParent === null &&
        computed.position !== "fixed")
    ) {
      return false
    }
  } else if ("offsetParent" in element && element.offsetParent === null) {
    return false
  }

  return true
}

function isVisibleQuestion(element) {
  return isVisibleElement(element)
}

function cleanLabelText(value) {
  return (value ?? "")
    .replace(/[*\uff0a:]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function isRequiredField(question, label, input) {
  return (
    !!(input?.required || /[*\uff0a]/.test(question.textContent ?? "")) ||
    /[*\uff0a]/.test(label)
  )
}

function getQuestionLabel(question) {
  let labelNode = question.querySelector(QUESTION_LABEL_SELECTOR)
  if (labelNode) return cleanLabelText(labelNode.textContent)

  let label = question.querySelector("label")
  if (label) return cleanLabelText(label.textContent)

  let input = question.querySelector("input, textarea, select")
  return input
    ? cleanLabelText(
        input.getAttribute("placeholder") ||
          input.getAttribute("aria-label") ||
          input.getAttribute("name") ||
          input.id,
      )
    : ""
}

function getQuestionLabelText(question) {
  let labelNode = question.querySelector(QUESTION_LABEL_SELECTOR)
  return cleanLabelText(labelNode?.textContent)
}

function isAcceptConsentQuestion(question, radios) {
  let optionTexts = radios
    .map(getRadioOptionText)
    .map((text) => text.toLowerCase())
  let questionText = cleanLabelText(question.textContent).toLowerCase()
  let label = getQuestionLabelText(question)
  return (
    !label &&
    optionTexts.includes("i accept") &&
    (questionText.includes("application consent") ||
      questionText.includes("by clicking the \u201Ci accept\u201D button") ||
      questionText.includes('by clicking the "i accept" button'))
  )
}

function getRadioOptionText(radio) {
  let span = radio.closest("label")?.querySelector("span, div:last-child, p")
  if (span?.textContent?.trim()) return cleanLabelText(span.textContent)

  let siblingText = radio.nextElementSibling?.textContent?.trim()
  return siblingText ? cleanLabelText(siblingText) : cleanLabelText(radio.value)
}

function getCheckboxOptionText(checkbox) {
  let label = checkbox.closest("label")
  return cleanLabelText(
    label?.textContent || checkbox.getAttribute("value") || checkbox.name,
  )
}

function getFileFieldLabel(input) {
  let name = cleanLabelText(input.name).toLowerCase()
  let id = cleanLabelText(input.id).toLowerCase()
  let placeholder = cleanLabelText(input.getAttribute("placeholder")).toLowerCase()
  let questionText = cleanLabelText(
    input.closest(QUESTION_SELECTOR)?.textContent,
  ).toLowerCase()

  if (
    name.includes("cover") ||
    id.includes("cover") ||
    placeholder.includes("cover") ||
    questionText.includes("cover letter")
  ) {
    return "Cover Letter"
  }

  if (
    name.includes("resume") ||
    id.includes("resume") ||
    placeholder.includes("resume") ||
    questionText.includes("resume/cv") ||
    questionText.includes("resume")
  ) {
    return "Resume/CV"
  }

  let forLabel = input
    .closest(QUESTION_SELECTOR)
    ?.querySelector(`label[for="${input.id}"]`)
  return cleanLabelText(forLabel?.textContent)
}

function getTextRule(question) {
  let textInput = question.querySelector(
    'input:not([type="hidden"]):not([type="file"]):not([type="radio"]):not([type="checkbox"])',
  )
  let textarea = question.querySelector("textarea")
  let input = textInput ?? textarea
  if (!input) return null

  let label = getQuestionLabel(question)
  return label
    ? {
        label,
        required: isRequiredField(question, label, input),
        type: enums.FIELD_TYPE.TEXT,
        $label: question,
        $input: input,
      }
    : null
}

function getSelectRule(question) {
  let select = question.querySelector("select")
  if (!select) return null

  let label = getQuestionLabel(question)
  if (!label) return null

  let options = Array.from(select.options)
    .map((option) => cleanLabelText(option.textContent || option.value))
    .filter(Boolean)

  return {
    label,
    required: isRequiredField(question, label, select),
    type: enums.FIELD_TYPE.SELECT,
    $label: question,
    $input: select,
    options,
  }
}

function getRadioGroupRule(question) {
  let radios = Array.from(question.querySelectorAll('input[type="radio"]'))
  if (!radios.length) return null

  let label = isAcceptConsentQuestion(question, radios)
    ? "I Accept"
    : getQuestionLabel(question)
  return label
    ? {
        label,
        required: isRequiredField(question, label, radios[0]),
        type: enums.FIELD_TYPE.RADIOGROUP,
        $label: question,
        $input: radios[0],
        $radioParent: question,
        options: radios.map(getRadioOptionText).filter(Boolean),
      }
    : null
}

function getCheckboxRule(question) {
  let checkboxes = Array.from(
    question.querySelectorAll('input[type="checkbox"]'),
  )
  if (!checkboxes.length) return null

  let label = getQuestionLabel(question)
  return label
    ? {
        label,
        required: isRequiredField(question, label, checkboxes[0]),
        type: enums.FIELD_TYPE.CHECKBOX,
        $label: question,
        $input: checkboxes[0],
        $checkboxs: checkboxes,
        options: checkboxes.map(getCheckboxOptionText).filter(Boolean),
      }
    : null
}

function getQuestionRule(question) {
  return question.querySelector('input[type="file"]')
    ? null
    : getRadioGroupRule(question) ||
        getCheckboxRule(question) ||
        getSelectRule(question) ||
        getTextRule(question)
}

function getSnapshotLabel(question) {
  let fileInput = question.querySelector('input[type="file"]')
  if (fileInput) return getFileFieldLabel(fileInput)

  let radios = Array.from(question.querySelectorAll('input[type="radio"]'))
  return radios.length > 0 && isAcceptConsentQuestion(question, radios)
    ? "I Accept"
    : getQuestionLabel(question)
}

function getSnapshotValue(question) {
  let fileInput = question.querySelector('input[type="file"]')
  if (fileInput) return fileInput.files?.[0]?.name || ""

  let radios = Array.from(question.querySelectorAll('input[type="radio"]'))
  if (radios.length > 0) {
    let checked = radios.find((radio) => radio.checked)
    return checked ? getRadioOptionText(checked) : ""
  }

  let checkboxes = Array.from(
    question.querySelectorAll('input[type="checkbox"]'),
  )
  if (checkboxes.length > 0) {
    return checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => getCheckboxOptionText(checkbox))
  }

  let select = question.querySelector("select")
  if (select) {
    return cleanLabelText(
      select.selectedOptions?.[0]?.textContent || select.value || "",
    )
  }

  let textInput = question.querySelector(
    'input:not([type="hidden"]):not([type="file"]):not([type="radio"]):not([type="checkbox"])',
  )
  if (textInput) return textInput.value || ""

  let textarea = question.querySelector("textarea")
  return (textarea && textarea.value) || ""
}

function getXCompanyFormRoot() {
  return (
    document.querySelector(FORM_ROOT_SELECTOR) ??
    document.querySelector("x-island form") ??
    document.querySelector("form") ??
    document.body
  )
}

async function extractRules() {
  let root = getXCompanyFormRoot()
  let questions = Array.from(root.querySelectorAll(QUESTION_SELECTOR)).filter(
    isVisibleQuestion,
  )
  let rules = []

  for (let question of questions) {
    let rule = getQuestionRule(question)
    if (rule) rules.push(rule)
  }

  return rules
}

async function getFormSnapshot(_formRules) {
  let root = getXCompanyFormRoot()
  let questions = Array.from(root.querySelectorAll(QUESTION_SELECTOR)).filter(
    isVisibleQuestion,
  )

  return questions.reduce((snapshot, question) => {
    let label = getSnapshotLabel(question)
    if (label) snapshot[label] = getSnapshotValue(question)
    return snapshot
  }, {})
}

export { extractRules, getFormSnapshot, getXCompanyFormRoot }
