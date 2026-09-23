// @ts-nocheck
/**
 * TrinetHire — DOM fill operations (chosen selects, cover letter upload).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as observer from "../../methods/observer.js"
import * as delay from "../../../utils/delay.js"

export async function fillInputTextField(input, value) {
  input &&
    value &&
    "" !== value.trim() &&
    (input.scrollIntoView({ behavior: "smooth", block: "center" }),
    await delay.delay(100),
    await inputUtils.fillDefaultInputField(input, value))
}

export async function fillSelectField(rule, value) {
  if (!value || 0 === value.length) return
  const choice = String(value[0] ?? "").trim()
  if (!choice) return
  const select = rule.$input
  if (!select) return
  select.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(200)
  const chosen = document.getElementById(select.id + "_chosen")
  if (!chosen) return
  const single = chosen.querySelector(".chosen-single")
  if (!single) return
  single.click()
  await delay.delay(100)
  const searchInput = chosen.querySelector(".chosen-search input")
  if (!searchInput) return
  searchInput.focus()
  searchInput.value = choice
  searchInput.dispatchEvent(new Event("input", { bubbles: true }))
  searchInput.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }))
  await delay.delay(150)
  const activeResult = chosen.querySelector(".chosen-results li.active-result")
  if (!activeResult) {
    console.warn("No active result found")
    return
  }
  activeResult.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  activeResult.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
  activeResult.click()
  await delay.delay(50)
}

export async function fillCheckboxField(rule, value) {
  rule.label
  const checkboxes = rule.$checkboxs || []
  if ((rule.options, checkboxes.length))
    for (const choice of (checkboxes[0] &&
      (checkboxes[0].scrollIntoView({ behavior: "smooth", block: "center" }),
      await delay.delay(100)),
    value)) {
      let matched = false
      for (const checkbox of checkboxes) {
        const label = checkbox.closest("label")
        if (label) {
          const clone = label.cloneNode(true)
          const nested = clone.querySelector('input[type="checkbox"]')
          nested && nested.remove()
          const text = clone.textContent?.trim() || ""
          if (choiceMatch.isExactChoiceMatch(text, choice)) {
            checkbox.checked || checkbox.click()
            matched = true
            break
          }
        }
      }
    }
}

export async function fillRadioGroupField(rule, value) {
  rule.label
  const choice = value?.[0]
  if (!choice) return
  const parent = rule.$radioParent
  if (!parent) return
  parent.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  const radios = Array.from(parent.querySelectorAll('input[type="radio"]'))
  let match = null
  for (const radio of radios) {
    if (radio.disabled) continue
    const label = getRadioLabelText(radio)
    if (label.toLowerCase().trim() === choice.toLowerCase().trim()) {
      match = radio
      break
    }
  }
  if (match) {
    const label = match.closest("label")
    label && (label.textContent || "").trim()
    !match.checked &&
      ((match.checked = true),
      match.dispatchEvent(new Event("change", { bubbles: true })),
      match.dispatchEvent(new Event("click", { bubbles: true })),
      match.dispatchEvent(new Event("input", { bubbles: true })),
      label && label.click())
  }
}

function getRadioLabelText(radio) {
  const dataLabel = radio.getAttribute("data-label")?.trim()
  if (dataLabel) return dataLabel
  const label = radio.closest("label")
  const radioText = label?.querySelector("span.radio-text")
  if (radioText) return radioText.textContent?.trim() || ""
  if (label) {
    const clone = label.cloneNode(true)
    const nested = clone.querySelector('input[type="radio"]')
    return nested && nested.remove(), clone.textContent?.trim() || ""
  }
  return radio.value || ""
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const input = getResumeInput()
  input &&
    (await dom.uploadFiles(
      input,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    ))
}

function getResumeInput() {
  return (
    document.querySelector(
      'input[type="file"]#applicant_resumes_resume[name="applicant_resumes[resume]"]',
    ) ?? null
  )
}

function hasResumeUploadUi() {
  return !!(
    document.querySelector("#resume_field") &&
    document.querySelector("#resume_file_name") &&
    document.querySelector("#resume_file_size")
  )
}

function normalizeCoverLetterLabel(text) {
  return String(text ?? "")
    .replace(/\s+/g, " ")
    .replace(/\s*-\s*or:\s*$/i, "")
    .trim()
    .toLowerCase()
}

function listFormGroups() {
  return Array.from(document.querySelectorAll(".form-group"))
}

function findDeleteButton(section, selector) {
  return (
    section.querySelector(".size button") ??
    section.querySelector('button[class*="remove"]') ??
    section.querySelector(".remove") ??
    (selector ? section.querySelector(selector) : null)
  )
}

function findAttachCoverLetterSection() {
  const section = listFormGroups().find((group) => {
    const label = group.querySelector("label")
    const text = normalizeCoverLetterLabel(label?.textContent)
    const input = group.querySelector('input[type="file"]')
    return !!input && text.includes("attach your cover letter")
  })
  return section
    ? {
        section,
        input: section.querySelector('input[type="file"]'),
        required: true,
        uploadedName: section.querySelector(".name"),
        uploadedMeta: section.querySelector(".size"),
        deleteButton: findDeleteButton(section),
        loader: section.querySelector("#loader"),
        requiresDeleteButtonForSuccess: true,
      }
    : null
}

function getAttachAnotherFileIndex(input) {
  return (
    input?.id.match(/attach_other_files_attach_another_file_(\d+)/i)?.[1] ??
    null
  )
}

function findAttachAnotherFileSection() {
  const section = listFormGroups().find((group) => {
    const label = group.querySelector("label")
    const text = normalizeCoverLetterLabel(label?.textContent)
    const input = group.querySelector(
      'input[type="file"].attach-another-files-attach-another-file',
    )
    return !!input && /^attach another file\s*\*?$/.test(text)
  })
  if (!section) return null
  const input = section.querySelector(
    'input[type="file"].attach-another-files-attach-another-file',
  )
  const labelText = normalizeCoverLetterLabel(
    section.querySelector("label")?.textContent,
  )
  const index = getAttachAnotherFileIndex(input)
  return {
    section,
    input,
    required: /\*$/.test(labelText),
    uploadedName:
      section.querySelector(".name") ??
      (index ? section.querySelector(`#attach_another_file_file_name_${index}`) : null),
    uploadedMeta:
      section.querySelector(".size") ??
      (index ? section.querySelector(`#attach_another_file_file_size_${index}`) : null),
    deleteButton: findDeleteButton(
      section,
      index ? `#remove_attach_another_file_${index}` : null,
    ),
    loader: section.querySelector("#loader"),
    requiresDeleteButtonForSuccess: true,
  }
}

function emptyCoverLetterSection() {
  return {
    section: null,
    input: null,
    required: false,
    uploadedName: null,
    uploadedMeta: null,
    deleteButton: null,
    loader: null,
    requiresDeleteButtonForSuccess: false,
  }
}

function getCoverLetterSection() {
  return (
    findAttachCoverLetterSection() ??
    findAttachAnotherFileSection() ??
    emptyCoverLetterSection()
  )
}

function isVisibleElement(el) {
  if (!el) return false
  const style = window.getComputedStyle(el)
  return "none" !== style.display && "hidden" !== style.visibility
}

function hasCoverLetterUploadUi() {
  const { input, uploadedName, uploadedMeta } = getCoverLetterSection()
  return !!(hasResumeUploadUi() && input && uploadedName && uploadedMeta)
}

function isCoverLetterUploadComplete(fileName) {
  const section = getCoverLetterSection()
  const uploaded =
    section.uploadedName?.textContent?.trim() || ""
  const nameMatches = fileName
    ? uploaded.includes(fileName)
    : uploaded.length > 0
  return !!(
    hasCoverLetterUploadUi() &&
    !isVisibleElement(section.loader) &&
    nameMatches &&
    (!section.requiresDeleteButtonForSuccess || section.deleteButton)
  )
}

export function getTrinethireCoverLetterStatus() {
  return hasCoverLetterUploadUi()
    ? getCoverLetterSection().required
      ? "required"
      : "optional"
    : ""
}

async function removeExistingCoverLetter() {
  const section = getCoverLetterSection()
  const uploaded = section.uploadedName?.textContent?.trim() || ""
  return (
    !uploaded ||
    (!!section.deleteButton &&
      (section.deleteButton.click(),
      await observer.waitForCondition(
        () => {
          const next = getCoverLetterSection()
          const nextUploaded = next.uploadedName?.textContent?.trim() || ""
          return (
            !nextUploaded &&
            !next.deleteButton &&
            !isVisibleElement(next.loader)
          )
        },
        { timeout: 8e3, interval: 100, observeTarget: document.body },
      )))
  )
}

export async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
) {
  const status = getTrinethireCoverLetterStatus()
  if (!status) return false
  const removed = await removeExistingCoverLetter()
  if (!removed)
    return (
      console.warn("[trinethire] failed to remove existing cover letter"),
      false
    )
  const section = getCoverLetterSection()
  if (!section.input) return false
  section.input.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  const blob = await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter)
  if (!section.input.files) return false
  section.input.files = blob.files
  dom.triggerEvents(section.input, ["change"])
  const expectedName = `${coverLetter.coverLetterName}.pdf`
  const uploaded = await observer.waitForCondition(
    () => isCoverLetterUploadComplete(expectedName),
    { timeout: 1e4, interval: 100, observeTarget: document.body },
  )
  return (
    !!uploaded &&
    (updateRequired({
      label: "Cover Letter",
      required: "required" === status,
    }),
    updateFilled("Cover Letter"),
    uploaded)
  )
}
