// @ts-nocheck
/**
 * Jobvite — DOM fill operations (inputs, resume, cover letter).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as xpath from "../../../core/xpath.js"
import * as answerMethods from "../../methods/answer.js"
import * as observer from "../../methods/observer.js"
import * as delay from "../../../utils/delay.js"

export async function fillInputField(input, value) {
  if (!input || !value) return

  if (input.type === "number") {
    const match = value.match(/[\d,.]+/)
    if (!match) return
    value = match[0].replace(/,/g, "")
  }

  input.focus()
  input.value = value
  input.dispatchEvent(
    new Event("input", {
      bubbles: true,
      cancelable: true,
    }),
  )
  input.dispatchEvent(
    new Event("change", {
      bubbles: true,
      cancelable: true,
    }),
  )
  await delay.delay(100)
  input.blur()
}

export async function fillSelectField(select, values) {
  if (!select || !values.length) return

  const target = values[0]
  const options = Array.from(select.options)
  for (const option of options) {
    if (choiceMatch.isExactChoiceMatch(option.text, target)) {
      select.value = option.value
      select.dispatchEvent(
        new Event("change", {
          bubbles: true,
          cancelable: true,
        }),
      )
      await delay.delay(100)
      select.blur()
      return
    }
  }
}

export async function fillRadioField(radios, values) {
  if (!radios.length || !values.length) return

  const target = values[0].toLowerCase()
  for (const radio of radios) {
    const labelEl = radio.closest("label") || radio.nextElementSibling
    const labelText = labelEl?.textContent?.trim().toLowerCase() || ""
    if (labelText === target) {
      radio.click()
      radio.dispatchEvent(
        new Event("change", {
          bubbles: true,
          cancelable: true,
        }),
      )
      await delay.delay(100)
      radio.blur()
      return
    }
  }
}

export async function fillCheckboxField(checkboxes, values) {
  if (!checkboxes.length || !values.length) return

  const targets = values.map((value) => value.toLowerCase())
  for (const checkbox of checkboxes) {
    const labelEl = checkbox.closest("label") || checkbox.nextElementSibling
    const labelText = labelEl?.textContent?.trim().toLowerCase() || ""
    if (targets.includes(labelText)) {
      checkbox.click()
      checkbox.dispatchEvent(
        new Event("change", {
          bubbles: true,
          cancelable: true,
        }),
      )
      await delay.delay(100)
      checkbox.blur()
    }
  }
}

export async function fillDateField(input, value) {
  if (!input || !value) return

  let normalized = value.trim()
  const yearOnly = /^\d{4}$/
  const yearMonth = /^\d{4}[-/]\d{2}$/
  if (yearOnly.test(normalized)) {
    normalized = `${normalized}-01-01`
  } else if (yearMonth.test(normalized)) {
    normalized = `${normalized.replace("/", "-")}-01`
  }

  input.focus()
  input.value = normalized
  input.dispatchEvent(
    new Event("input", {
      bubbles: true,
      cancelable: true,
    }),
  )
  input.dispatchEvent(
    new Event("change", {
      bubbles: true,
      cancelable: true,
    }),
  )
  await delay.delay(100)
  input.blur()
}

export function blurPage() {
  const active = document.activeElement
  if (active) active.blur()
}

async function assignFilesToInput(input, fileListWrapper) {
  try {
    if (input?.files) {
      input.files = fileListWrapper.files
      input.dispatchEvent(
        new Event("change", {
          bubbles: true,
          cancelable: false,
        }),
      )
      return true
    }
  } catch (error) {
    console.error("Error uploading files:", error)
  }
  return false
}

export async function uploadResume(resumeInfo) {
  const input = xpath.getFirstOrderedNode('//input[@id="file-input-0"]')
  if (input) {
    await assignFilesToInput(input, await answerMethods.fetchPdfAsBlob(resumeInfo))
  }
}

function normalizeLabelText(value) {
  return value?.replace(/\s+/g, " ").trim().toLowerCase() || ""
}

function isCoverLetterAddButton(button) {
  const haystack = [
    button.getAttribute("attachment-label"),
    button.getAttribute("pasted-label"),
    button.getAttribute("aria-label"),
    button.textContent,
  ]
    .map(normalizeLabelText)
    .filter(Boolean)
    .join(" ")
  return haystack.includes("cover letter")
}

function findCoverLetterAddButton() {
  const buttons = Array.from(
    document.querySelectorAll(
      "button[jv-add-attachment], button[attachment-label], button[aria-label]",
    ),
  )
  return buttons.find(isCoverLetterAddButton) ?? null
}

function getCoverLetterSection(button = findCoverLetterAddButton()) {
  return button?.closest(".jv-additional-files, .jv-apply-section") ?? null
}

function getAllFileInputs() {
  return Array.from(document.querySelectorAll('input[type="file"]'))
}

function isResumeFileInput(input) {
  return input.id === "file-input-0"
}

function isCoverLetterFileInput(input, section) {
  if (isResumeFileInput(input)) return false
  const haystack = [
    input.id,
    input.name,
    input.getAttribute("aria-label"),
    input.getAttribute("data-automation-id"),
    input.closest("[aria-label]")?.getAttribute("aria-label"),
    input.closest("label")?.textContent,
    input.closest(".jv-additional-files, .jv-apply-section")?.textContent,
  ]
    .map(normalizeLabelText)
    .filter(Boolean)
    .join(" ")
  return (
    input.id === "file-input-1" ||
    haystack.includes("cover letter") ||
    !!section?.contains(input)
  )
}

function findCoverLetterFileInput(
  exclude = new Set(),
  addButton = findCoverLetterAddButton(),
) {
  const section = getCoverLetterSection(addButton)
  const inputs = getAllFileInputs()
  const unused = inputs.find(
    (input) => !exclude.has(input) && !isResumeFileInput(input),
  )
  if (unused) return unused
  const matches = inputs.filter((input) =>
    isCoverLetterFileInput(input, section),
  )
  return matches.at(-1) ?? null
}

export function getCoverLetterStatus() {
  const addButton = findCoverLetterAddButton()
  if (!addButton) return ""

  const section = getCoverLetterSection(addButton)
  const haystack = [
    section?.textContent,
    addButton.getAttribute("attachment-label"),
    addButton.getAttribute("pasted-label"),
    addButton.getAttribute("aria-label"),
    addButton.textContent,
  ]
    .map(normalizeLabelText)
    .filter(Boolean)
    .join(" ")

  return haystack.includes("optional") ? "optional" : "required"
}

export function hasCoverLetterSlot() {
  return getCoverLetterStatus() !== ""
}

export async function waitForCoverLetterSlot() {
  return await observer.waitForCondition(() => hasCoverLetterSlot(), {
    timeout: 3e3,
    interval: 100,
    observeTarget: document.body,
  })
}

async function ensureCoverLetterFileInput() {
  const addButton = findCoverLetterAddButton()
  const existing = findCoverLetterFileInput(new Set(), addButton)
  if (existing) return existing
  if (!addButton) return null

  const before = new Set(getAllFileInputs())
  addButton.click()
  const appeared = await observer.waitForCondition(
    () => !!findCoverLetterFileInput(before, addButton),
    {
      timeout: 2e3,
      interval: 50,
      observeTarget: getCoverLetterSection(addButton) ?? document.body,
    },
  )
  return appeared ? findCoverLetterFileInput(before, addButton) : null
}

export async function uploadCoverLetter(coverLetterInfo) {
  const input = await ensureCoverLetterFileInput()
  return (
    !!input &&
    (await assignFilesToInput(
      input,
      await answerMethods.fetchCoverLetterPdfAsBlob(coverLetterInfo),
    ))
  )
}

export function submitObserver() {}

export async function hasUploadedResume() {
  const input = xpath.getFirstOrderedNode('//input[@id="file-input-0"]')
  const header = xpath.getFirstOrderedNode('//h3[@id="jv-resume-header"]')
  return !!(input && header)
}
