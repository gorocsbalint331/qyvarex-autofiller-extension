// @ts-nocheck
/**
 * CareerPlug DOM fill operations (inputs, selects, checkboxes, resume, cover letter).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as defaultInput from "../../crawler/utils/input.js"
import * as answer from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as delay from "../../../utils/delay.js"

const COVER_LETTER_RE =
  /\bcover\s*letter\b|cover_letter|coverletter/i
const COVER_LETTER_UPLOAD_TIMEOUT_MS = 15000

function normalizeWhitespace(value) {
  return (value || "").replace(/\s+/g, " ").trim()
}

function normalizeLower(value) {
  return normalizeWhitespace(value).toLowerCase()
}

function firstAnswerText(value) {
  return String(Array.isArray(value) ? (value[0] ?? "") : (value ?? "")).trim()
}

function getOptionLabel(option) {
  return normalizeWhitespace(option.textContent || option.label)
}

function getAttachmentAttributeIndex(name) {
  return (
    name?.match(/\[has_attachments_attributes\]\[(\d+)\]\[/)?.[1] || ""
  )
}

function getAttachmentNameByIndex(index) {
  if (!index) return ""
  const hiddenInputs = Array.from(
    document.querySelectorAll(
      'input[type="hidden"][name*="[has_attachments_attributes]"][name*="[name]"]',
    ),
  )
  return (
    hiddenInputs.find(
      (input) => getAttachmentAttributeIndex(input.name) === index,
    )?.value || ""
  )
}

function isCoverLetterFileInput(input) {
  const index = getAttachmentAttributeIndex(input.name)
  const haystack = [
    input.id,
    input.name,
    getAttachmentNameByIndex(index),
    input.closest("fieldset")?.id,
    input.closest(".form-group")?.textContent,
    input.closest("fieldset")?.textContent,
  ]
    .filter(Boolean)
    .join(" ")
  return COVER_LETTER_RE.test(haystack)
}

function isSmsConsentCheckbox(input) {
  return /applicant_agrees_sms/i.test([input.name, input.id].join(" "))
}

function findCoverLetterFileInput() {
  const candidates = Array.from(
    document.querySelectorAll(
      'fieldset#cover_letter input[type="file"], input[type="file"][name*="[attachment]"], input[type="file"][accept*=".pdf"]',
    ),
  )
  return candidates.find(isCoverLetterFileInput) || null
}

function findCoverLetterTextarea() {
  return (
    document.querySelector(
      'textarea#app_applicant_attributes_cover_letter, textarea[name*="[cover_letter]"], textarea[name*="cover_letter"], fieldset#cover_letter textarea',
    ) ||
    Array.from(document.querySelectorAll("textarea")).find((textarea) =>
      COVER_LETTER_RE.test(
        [
          textarea.id,
          textarea.name,
          textarea.placeholder,
          textarea.closest("fieldset")?.id,
          textarea.closest(".form-group")?.textContent,
        ]
          .filter(Boolean)
          .join(" "),
      ),
    ) ||
    null
  )
}

function isFieldRequired(el) {
  if (!el) return false
  const context = normalizeWhitespace(
    [
      el.getAttribute("aria-label"),
      el.closest(".required")?.textContent,
      el.closest(".form-group")?.textContent,
    ]
      .filter(Boolean)
      .join(" "),
  )
  return el.hasAttribute("required") || /\brequired\b|\*/i.test(context)
}

async function withTimeout(promise, timeoutMs) {
  let timerId
  const timeoutPromise = new Promise((_, reject) => {
    timerId = setTimeout(
      () => reject(Error(`Timed out after ${timeoutMs}ms`)),
      timeoutMs,
    )
  })
  try {
    return await Promise.race([promise, timeoutPromise])
  } finally {
    if (timerId) clearTimeout(timerId)
  }
}

function isExactChoiceMatch(optionText, answer) {
  return choiceMatch.isExactChoiceMatch(optionText, answer)
}

function findSelectOptionMatch(select, answer) {
  const options = Array.from(select.options).filter((option) => option.value)
  const matched = choiceMatch.findExactChoice(
    options,
    answer,
    getOptionLabel,
    (option) => option.value,
  )
  if (!matched) return null
  return {
    option: matched,
    source: isExactChoiceMatch(getOptionLabel(matched), answer)
      ? "text-exact"
      : "value-exact",
  }
}

export async function fillInputTextField(input, value) {
  const text = normalizeWhitespace(value)
  if (!text) return

  if (
    input instanceof HTMLTextAreaElement &&
    COVER_LETTER_RE.test([input.id, input.name].join(" "))
  ) {
    const pasteLink = document.querySelector(
      'a[href="#cover_letter_input"], fieldset#cover_letter a.paste-link',
    )
    if (pasteLink && pasteLink.getAttribute("aria-expanded") !== "true") {
      pasteLink.click()
      await delay.delay(150)
    }
  }

  input.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(80)
  await defaultInput.fillDefaultInputField(input, text)
  input.dispatchEvent(new Event("change", { bubbles: true }))
  input.dispatchEvent(new Event("blur", { bubbles: true }))
}

export async function fillSelectField(rule, value) {
  const select = rule.$input
  const answer = firstAnswerText(value)
  if (!select || !answer) {
    console.warn("[CareerPlug] Select fill skipped", {
      hasAnswer: !!answer,
      hasSelect: !!select,
      reason: "missing-select-or-answer",
    })
    return
  }

  const match = findSelectOptionMatch(select, answer)
  if (!match) {
    console.warn("[CareerPlug] Select fill skipped", {
      answerLength: answer.length,
      optionCount: select.options.length,
      reason: "option-not-found",
    })
    return
  }

  select.value = match.option.value
  select.dispatchEvent(new Event("input", { bubbles: true }))
  select.dispatchEvent(new Event("change", { bubbles: true }))
  await delay.delay(100)
  console.debug("[CareerPlug] Filled select rule", {
    committed: select.value === match.option.value,
    matchSource: match.source,
    matchedOptionIndex: Array.from(select.options).indexOf(match.option),
    optionCount: select.options.length,
  })
}

function normalizeAnswerList(value) {
  const list = Array.isArray(value) ? value : [value]
  return list.map((item) => String(item ?? "").trim()).filter(Boolean)
}

function getCheckboxLabel(checkbox, fallback) {
  let forLabel = null
  if (checkbox.id) {
    forLabel = document.querySelector(
      `label[for="${CSS.escape(checkbox.id)}"]`,
    )
  }
  const wrappingLabel = checkbox.closest("label")
  return normalizeWhitespace(
    forLabel?.textContent ||
      wrappingLabel?.textContent ||
      fallback ||
      checkbox.value,
  )
}

function isAffirmativeAnswer(value) {
  return ["yes", "true", "1", "agree", "agreed", "consent"].includes(
    value.toLowerCase(),
  )
}

function labelsMatch(left, right) {
  const a = normalizeLower(left)
  const b = normalizeLower(right)
  return !!a && !!b && a === b
}

export async function fillCheckboxField(rule, value) {
  let checkboxes = Array.from(rule.$checkboxs || [])
  if (!checkboxes.length && rule.$input) {
    checkboxes = [rule.$input]
  }
  if (!checkboxes.length) {
    console.warn("[CareerPlug] Checkbox fill skipped", {
      reason: "missing-checkbox-controls",
    })
    return
  }

  const answers = normalizeAnswerList(value)
  let selectedCount = 0

  for (const [index, checkbox] of checkboxes.entries()) {
    if (isSmsConsentCheckbox(checkbox)) {
      if (checkbox.checked) {
        checkbox.click()
        checkbox.dispatchEvent(new Event("change", { bubbles: true }))
        await delay.delay(100)
      }
      continue
    }

    const label = getCheckboxLabel(
      checkbox,
      rule.options[index] || checkbox.value,
    )
    let shouldCheck = answers.some(
      (answer) =>
        labelsMatch(label, answer) || labelsMatch(checkbox.value, answer),
    )
    if (checkboxes.length === 1) {
      shouldCheck =
        value === true ||
        answers.some((answer) => isAffirmativeAnswer(answer)) ||
        shouldCheck
    }
    if (shouldCheck) selectedCount += 1

    if (checkbox.checked !== shouldCheck) {
      checkbox.click()
      checkbox.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(100)
    }
  }

  console.debug("[CareerPlug] Filled checkbox rule", {
    answerCount: answers.length,
    optionCount: checkboxes.length,
    selectedCount,
  })
}

export async function fillRadioGroupField(rule, value) {
  const answer = firstAnswerText(value)
  if (!answer) return

  const radios = Array.from(
    rule.$radioParent.querySelectorAll('input[type="radio"]'),
  )
  const matched = choiceMatch.findExactChoice(
    radios,
    answer,
    (radio) => {
      const index = radios.indexOf(radio)
      const forLabel = radio.id
        ? document.querySelector(`label[for="${CSS.escape(radio.id)}"]`)
        : null
      return (
        forLabel?.textContent ||
        radio.closest("label")?.textContent ||
        rule.options[index] ||
        radio.value
      )
    },
    (radio) => radio.value,
  )

  if (matched && !matched.checked) {
    matched.click()
    matched.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(100)
  }
}

export async function uploadResume(
  resumeInfo,
  updateFieldRequiredStatus,
  updateFilledProgress,
) {
  const fileInput = document.querySelector(
    'input[type="file"][name*="[attachment]"][id*="has_attachments"], input[type="file"][accept*=".pdf"]',
  )
  if (!fileInput) return

  await dom.uploadFiles(
    fileInput,
    await answer.fetchPdfAsBlob(resumeInfo),
    updateFieldRequiredStatus,
    updateFilledProgress,
    "Resume/CV",
    false,
  )
}

export async function uploadCoverLetter(
  coverLetter,
  updateFieldRequiredStatus,
  updateFilledProgress,
) {
  const fileInput = findCoverLetterFileInput()
  if (!fileInput) return false

  try {
    await dom.uploadFiles(
      fileInput,
      await withTimeout(
        answer.fetchCoverLetterPdfAsBlob(coverLetter),
        COVER_LETTER_UPLOAD_TIMEOUT_MS,
      ),
      updateFieldRequiredStatus,
      updateFilledProgress,
      "Cover Letter",
      isFieldRequired(fileInput),
    )
    return true
  } catch (error) {
    console.warn("[CareerPlug] Cover letter upload skipped:", error)
    return false
  }
}

export function getCareerPlugCoverLetterStatus() {
  const field = findCoverLetterFileInput() || findCoverLetterTextarea()
  if (!field) return ""
  return isFieldRequired(field) ? "required" : "optional"
}
