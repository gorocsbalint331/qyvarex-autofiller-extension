// @ts-nocheck
/**
 * Gusto — DOM fill operations (inputs, selects, resume, cover letter).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as answerMethods from "../../methods/answer.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"

const getTargetOrTimeout = {
  default: getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

const RESUME_FILE_INPUT_SELECTOR =
  'form#job-applicant-form input[type="file"]#job_applicant_resume[name="job_applicant[resume]"][data-file-upload-target="input"]'
const COVER_LETTER_FILE_INPUT_SELECTOR =
  'form#job-applicant-form input[type="file"]#job_applicant_cover_letter[name="job_applicant[cover_letter]"][data-file-upload-target="input"]'

function normalizeText(text) {
  return text.toLowerCase().replace(/\s+/g, " ").trim()
}

function toAnswerList(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item ?? "").trim()).filter(Boolean)
  }
  if (value == null) return []
  const text = String(value).trim()
  return text ? [text] : []
}

function toBooleanAnswer(value) {
  if (typeof value === "boolean") return value
  const text = normalizeText(String(value ?? ""))
  return ["true", "yes", "y", "1", "checked"].includes(text)
}

function clickElement(el) {
  el.focus()
  el.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  el.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  el.click()
}

function getCheckboxOptionLabel(input) {
  if (input.id) {
    const forLabel = document.querySelector(
      `label[for="${CSS.escape(input.id)}"]`,
    )
    if (forLabel instanceof HTMLElement) {
      return normalizeText(forLabel.textContent || "")
    }
  }

  const closestLabel = input.closest("label")
  return closestLabel instanceof HTMLElement
    ? normalizeText(closestLabel.textContent || "")
    : normalizeText(input.value || "")
}

function getVisibleChoiceElements() {
  return Array.from(
    document.querySelectorAll(
      '[role="option"], [role="menuitemradio"], [role="menuitemcheckbox"], li, button, div',
    ),
  ).filter((el) => {
    const text = normalizeText(el.textContent || "")
    if (!text || el.querySelector("input, select, textarea")) return false
    const rect = el.getBoundingClientRect()
    return rect.width > 0 && rect.height > 0
  })
}

function findVisibleChoiceByText(answer) {
  const answerNormalized = normalizeText(answer)
  return (
    getVisibleChoiceElements().find((el) => {
      const text = normalizeText(el.textContent || "")
      return choiceMatch.isExactChoiceMatch(text, answerNormalized)
    }) || null
  )
}

function resolveUploadLabel(fileInput) {
  const rawLabel =
    fileInput.getAttribute("aria-label") ||
    fileInput.closest("label")?.textContent ||
    "Resume/CV"
  return normalizeText(rawLabel).includes("cover")
    ? "Cover Letter"
    : "Resume/CV"
}

function getFileUploadContainer(fileInput) {
  return (
    fileInput.closest('[data-controller="file-upload"]') ||
    fileInput.closest("label")
  )
}

function hasUploadedFile(fileInput) {
  if (!fileInput.files || fileInput.files.length === 0) return false

  const container = getFileUploadContainer(fileInput)
  if (!container) return true

  const labelContainer = container.querySelector(
    '[data-file-upload-target="fileLabelContainer"]',
  )
  const fileLabel = container.querySelector(
    '[data-file-upload-target="fileLabel"]',
  )
  return !!(
    (labelContainer && !labelContainer.classList.contains("hidden")) ||
    fileLabel?.textContent?.trim()
  )
}

export async function preFillForm() {
  Array.from(document.querySelectorAll("details")).forEach((details) => {
    details.open = true
  })
  await delay.delay(100)
}

export async function fillInputTextField(input, value) {
  if (!input) return

  const text =
    typeof value === "string"
      ? value
      : [value.start, value.end].filter(Boolean).join(" - ")

  if (!text) return

  input.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  await inputUtils.fillDefaultInputField(input, text)
}

export async function fillSelectField(rule, value) {
  const answers = toAnswerList(value)
  const answer = answers[0]
  if (!answer) return

  const input = rule.$input
  if (!input) return

  if (input instanceof HTMLSelectElement) {
    const matchedOption = Array.from(input.options).find((option) => {
      const optionText = normalizeText(option.textContent || option.value || "")
      const answerNormalized = normalizeText(answer)
      return choiceMatch.isExactChoiceMatch(optionText, answerNormalized)
    })
    if (!matchedOption) return

    input.value = matchedOption.value
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    return
  }

  input.scrollIntoView({ behavior: "smooth", block: "center" })
  clickElement(input)
  await delay.delay(200)

  const choice = findVisibleChoiceByText(answer)
  if (!choice) {
    document.body.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    )
    return
  }

  clickElement(choice)
  await delay.delay(150)
}

export async function fillCheckboxField(rule, value) {
  const checkboxes = rule.$checkboxs || []
  if (checkboxes.length === 0) return

  const answers = toAnswerList(value)
  if (answers.length <= 1 && rule.options.length <= 1) {
    const shouldCheck = toBooleanAnswer(answers[0])
    const checkbox = checkboxes[0]
    if (checkbox.checked !== shouldCheck) {
      clickElement(checkbox)
      await delay.delay(100)
    }
    return
  }

  const selected = new Set(answers.map((answer) => normalizeText(answer)))
  for (const checkbox of checkboxes) {
    const optionLabel = getCheckboxOptionLabel(checkbox)
    const shouldCheck =
      selected.has(optionLabel) ||
      Array.from(selected).some((answer) =>
        choiceMatch.isExactChoiceMatch(optionLabel, answer),
      )
    if (checkbox.checked !== shouldCheck) {
      clickElement(checkbox)
      await delay.delay(100)
    }
  }
}

export async function fillRadioGroupFiled(rule, value) {
  const answer = normalizeText(toAnswerList(value)[0] || "")
  if (!answer) return

  const parent = rule.$radioParent || document.body
  const radios = Array.from(
    parent.querySelectorAll('input[type="radio"]'),
  ).filter((radio) => !radio.disabled)
  const matched = choiceMatch.findExactChoice(
    radios,
    answer,
    getCheckboxOptionLabel,
    (radio) => radio.value,
  )
  if (matched && !matched.checked) {
    clickElement(matched)
    await delay.delay(100)
  }
}

export async function uploadResume(
  resumeInfo,
  updateFieldRequiredStatus,
  updateFilledProgress,
) {
  const fileInput = document.querySelector(RESUME_FILE_INPUT_SELECTOR)
  if (!fileInput) return false

  const label = resolveUploadLabel(fileInput)
  const blobResult = await answerMethods.fetchPdfAsBlob(resumeInfo)
  if (!fileInput.files) return false

  updateFieldRequiredStatus({
    label,
    required: label === "Resume/CV",
  })
  fileInput.files = blobResult.files
  fileInput.dispatchEvent(
    new Event("input", { bubbles: true, cancelable: false }),
  )
  fileInput.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: false }),
  )

  const uploaded = await getTargetOrTimeout.default(
    () => (hasUploadedFile(fileInput) ? fileInput : null),
    () => false,
    30,
  )
  if (!uploaded) return false
  updateFilledProgress(label)
  return true
}

export async function uploadCoverLetter(
  coverLetter,
  updateFieldRequiredStatus,
  updateFilledProgress,
) {
  const fileInput = document.querySelector(COVER_LETTER_FILE_INPUT_SELECTOR)
  if (!fileInput) return false

  const blobResult = await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter)
  if (!fileInput.files) return false

  updateFieldRequiredStatus({
    label: "Cover Letter",
    required: fileInput.required,
  })
  fileInput.files = blobResult.files
  fileInput.dispatchEvent(
    new Event("input", { bubbles: true, cancelable: false }),
  )
  fileInput.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: false }),
  )

  const uploaded = await getTargetOrTimeout.default(
    () => (hasUploadedFile(fileInput) ? fileInput : null),
    () => false,
    30,
  )
  if (!uploaded) return false
  updateFilledProgress("Cover Letter")
  return true
}

export async function removeResume() {
  const button = Array.from(
    document.querySelectorAll("button, [role='button']"),
  ).find((el) => {
    const text = normalizeText(el.textContent || "")
    return (
      text.includes("remove resume") ||
      text.includes("delete resume") ||
      text.includes("remove file") ||
      text === "remove" ||
      text === "delete"
    )
  })

  if (button) {
    clickElement(button)
    await delay.delay(200)
  }
}
