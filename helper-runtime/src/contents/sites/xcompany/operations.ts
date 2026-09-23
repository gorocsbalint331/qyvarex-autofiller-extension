// @ts-nocheck
/**
 * XCompany — DOM fill operations (inputs, uploads, consent checkboxes).
 */

import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as observer from "../../methods/observer.js"
import * as delay from "../../../utils/delay.js"

const FORM_ROOT_SELECTOR = "#main x-island form"
const QUESTION_SELECTOR = '[class*="_question_"]'
const FILLABLE_INPUT_SELECTOR = `${QUESTION_SELECTOR} input:not([type="hidden"]):not([disabled]), ${QUESTION_SELECTOR} textarea:not([disabled]), ${QUESTION_SELECTOR} select:not([disabled]), ${QUESTION_SELECTOR} input[type="file"]:not([disabled])`

function normalizeText(value) {
  return (value ?? "").replace(/\s+/g, " ").trim().toLowerCase()
}

function isVisibleElement(element) {
  if (
    !element ||
    ("hidden" in element && element.hidden) ||
    element.getAttribute?.("aria-hidden") === "true"
  ) {
    return false
  }

  let inlineStyle = normalizeText(element.getAttribute?.("style")).replace(
    /\s+/g,
    "",
  )
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

function getQuestionContainer(element) {
  return element.closest('[class*="_question_"]') ?? element.parentElement ?? null
}

function isCoverLetterInput(input) {
  let questionText = normalizeText(getQuestionContainer(input)?.textContent)
  let name = normalizeText(input.name)
  let id = normalizeText(input.id)
  let placeholder = normalizeText(input.getAttribute("placeholder"))
  return (
    questionText.includes("cover letter") ||
    name.includes("cover") ||
    id.includes("cover") ||
    placeholder.includes("cover letter")
  )
}

function isVisibleInput(input) {
  let container = getQuestionContainer(input)
  return isVisibleElement(container) && isVisibleElement(input)
}

function getResumeInput() {
  let inputs = Array.from(
    getXCompanyFormRoot()?.querySelectorAll(
      'input[type="file"]#field-resume, input[type="file"][name="resume"]',
    ) ?? [],
  )
  return inputs.find(isVisibleInput) ?? null
}

function getCoverLetterInput() {
  let inputs = Array.from(
    getXCompanyFormRoot()?.querySelectorAll('input[type="file"]') ?? [],
  )
  return inputs.find((input) => isVisibleInput(input) && isCoverLetterInput(input)) ?? null
}

function getXCompanyFormRoot() {
  return (
    document.querySelector(FORM_ROOT_SELECTOR) ??
    document.querySelector("x-island form") ??
    document.querySelector("form")
  )
}

async function waitForXCompanyFormReady() {
  await observer.waitForCondition(
    () => {
      let root = getXCompanyFormRoot()
      return !!root?.querySelector(FILLABLE_INPUT_SELECTOR)
    },
    { timeout: 3000, interval: 100 },
  )
}

async function preFillForm() {
  await waitForXCompanyFormReady()
}

async function fillTextField(rule, value) {
  if (!rule.$input) return false
  await dom.fillInputTextField(
    rule.$input,
    Array.isArray(value) ? value[0] || "" : value,
  )
  return true
}

async function fillSelectField(rule, value) {
  if (!rule.$input) return false
  dom.fillSelectField(rule.$input, Array.isArray(value) ? value : [value])
  return true
}

async function fillCheckboxField(rule, value) {
  await dom.fillCheckBoxesField(rule, value)
  return true
}

async function fillRadioGroupField(rule, value) {
  let wanted = normalizeText(Array.isArray(value) ? value[0] : value)
  if (!wanted) return

  let radios = Array.from(
    rule.$radioParent.querySelectorAll('input[type="radio"]'),
  )
  for (let radio of radios) {
    let labelText = normalizeText(
      radio.closest("label")?.textContent ||
        radio.nextElementSibling?.textContent ||
        radio.value,
    )
    if (labelText && labelText === wanted) {
      radio.click()
      await delay.delay(100)
      return
    }
  }
}

function isResumeRequired() {
  let input = getResumeInput()
  if (!input) return false
  if (input.required) return true
  let text =
    getQuestionContainer(input)?.textContent ||
    input.getAttribute("placeholder") ||
    ""
  return /[*\uff0a]/.test(text)
}

function isCoverLetterRequired() {
  let input = getCoverLetterInput()
  if (!input) return false
  if (input.required) return true
  let text =
    getQuestionContainer(input)?.textContent ||
    input.getAttribute("placeholder") ||
    ""
  return /[*\uff0a]/.test(text)
}

async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  let input = getResumeInput()
  if (input) {
    await dom.uploadFiles(
      input,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
      isResumeRequired(),
    )
  }
}

async function uploadCoverLetter(coverLetter, updateRequired, updateFilled) {
  let input = getCoverLetterInput()
  if (input) {
    await dom.uploadFiles(
      input,
      await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
      updateRequired,
      updateFilled,
      "Cover Letter",
      isCoverLetterRequired(),
    )
  }
}

async function fillConsentCheckbox() {
  let prefix = "By checking this box"
  let labels = Array.from(document.querySelectorAll("label")).filter((label) =>
    normalizeText(label.textContent).startsWith(prefix.toLowerCase()),
  )

  for (let label of labels) {
    let checkbox =
      document.getElementById(label.htmlFor) ||
      label.querySelector('input[type="checkbox"]')
    if (checkbox && !checkbox.checked) {
      checkbox.click()
      await delay.delay(50)
    }
  }
}

async function fillAcknowledgeCheckbox() {
  let labels = Array.from(document.querySelectorAll("label")).filter((label) =>
    normalizeText(label.textContent).includes("acknowledge"),
  )

  for (let label of labels) {
    let checkbox = null
    if (label.htmlFor) {
      checkbox = document.getElementById(label.htmlFor)
    }
    if (!checkbox) {
      checkbox =
        label.closest("fieldset.checkbox")?.querySelector(
          'input[type="checkbox"]',
        ) ?? null
    }
    if (!checkbox) {
      checkbox = label.querySelector('input[type="checkbox"]')
    }
    if (!checkbox) {
      checkbox =
        label.closest("div.checkbox__wrapper")?.querySelector(
          'input[type="checkbox"]',
        ) ?? null
    }
    if (!checkbox) {
      let nestedLabel = label.closest("label")
      if (nestedLabel && nestedLabel !== label) {
        checkbox = nestedLabel.querySelector('input[type="checkbox"]') ?? null
      }
    }

    if (checkbox && !checkbox.checked) {
      checkbox.click()
      await delay.delay(100)
    }
  }
}

async function fillNestedAcknowledgeCheckbox() {
  let labels = Array.from(document.querySelectorAll("label")).filter(
    (label) => {
      let text = normalizeText(label.textContent)
      return (
        text.includes("candidate ai responsible use policy") ||
        text.includes("acknowledge")
      )
    },
  )

  for (let label of labels) {
    let checkbox = label.querySelector('input[type="checkbox"]') ?? null
    if (
      checkbox &&
      !checkbox.checked &&
      normalizeText(label.textContent).includes("acknowledge")
    ) {
      checkbox.click()
      await delay.delay(100)
    }
  }
}

export {
  fillAcknowledgeCheckbox,
  fillCheckboxField,
  fillConsentCheckbox,
  fillNestedAcknowledgeCheckbox,
  fillRadioGroupField,
  fillSelectField,
  fillTextField,
  getCoverLetterInput,
  getResumeInput,
  getXCompanyFormRoot,
  isCoverLetterRequired,
  isResumeRequired,
  preFillForm,
  uploadCoverLetter,
  uploadResume,
  waitForXCompanyFormReady,
}
