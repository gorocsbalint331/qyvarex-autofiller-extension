// @ts-nocheck
/**
 * Personio — field fill, document upload, and cover-letter DOM helpers.
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as inputUtils from "../../crawler/fill-utils/input.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as observer from "../../methods/observer.ts"
import * as delay from "../../../utils/delay.js"
import * as personioAnswer from "./answer.ts"

function normalizeText(value) {
  return (value || "").replace(/\s+/g, " ").trim().toLowerCase()
}

function isCoverLetterLabel(text) {
  const normalized = normalizeText(text)
  return (
    normalized.includes("anschreiben") || normalized.includes("cover letter")
  )
}

function getDocumentCategoryLabelText(container) {
  const labelledBy = container.getAttribute("aria-labelledby")?.trim()
  const labelNode =
    (labelledBy && document.getElementById(labelledBy)) ||
    container.querySelector('[class*="documentCategoryLabel"]')
  return normalizeText(
    labelNode?.textContent?.replace(/\(\s*optional\s*\)/gi, ""),
  )
}

function getDocumentCategoryRawText(container) {
  const labelledBy = container.getAttribute("aria-labelledby")?.trim()
  const labelNode =
    (labelledBy && document.getElementById(labelledBy)) ||
    container.querySelector('[class*="documentCategoryLabel"]')
  return labelNode?.textContent || ""
}

function readDocumentUploadDom(container) {
  if (!container) {
    return {
      container: null,
      input: null,
      uploadButton: null,
      uploadedList: null,
      uploadedFileName: null,
      deleteButton: null,
      labelText: "",
    }
  }

  const input = container.querySelector('input[type="file"]')
  const uploadButton = container.querySelector(
    "button.add-file-button, button[class*='addFileButton']",
  )
  const uploadedList = container.querySelector(
    "[class*='uploadedFilesList'], [role='list'][aria-label*='Uploaded files']",
  )
  const uploadedFileName = uploadedList?.querySelector(
    "[class*='uploadedFileName']",
  )
  const deleteButton = uploadedList?.querySelector(
    "button[class*='removeFilePillButton'], button[aria-label^='Remove ']",
  )

  return {
    container,
    input,
    uploadButton,
    uploadedList,
    uploadedFileName,
    deleteButton,
    labelText: getDocumentCategoryLabelText(container),
  }
}

function findDocumentUploadDom(predicate) {
  const wrappers = Array.from(
    document.querySelectorAll(".document-field-wrapper"),
  )
  for (const wrapper of wrappers) {
    const uploadDom = readDocumentUploadDom(wrapper)
    if (predicate(uploadDom)) return uploadDom
  }
  return readDocumentUploadDom(null)
}

function isCoverLetterUploadDom(uploadDom) {
  const name = normalizeText(uploadDom.input?.name)
  const id = normalizeText(uploadDom.input?.id)
  const ariaLabel = normalizeText(uploadDom.input?.getAttribute("aria-label"))
  const labelText = uploadDom.labelText
  return (
    name.includes("cover-letter") ||
    id.includes("cover-letter") ||
    isCoverLetterLabel(ariaLabel) ||
    ariaLabel.includes("cover") ||
    isCoverLetterLabel(labelText)
  )
}

function isResumeUploadDom(uploadDom) {
  const name = normalizeText(uploadDom.input?.name)
  const id = normalizeText(uploadDom.input?.id)
  const ariaLabel = normalizeText(uploadDom.input?.getAttribute("aria-label"))
  const labelText = uploadDom.labelText
  return (
    !isCoverLetterUploadDom(uploadDom) &&
    (name.includes("cv") ||
      name.includes("resume") ||
      name.includes("lebenslauf") ||
      id.includes("cv") ||
      id.includes("resume") ||
      id.includes("lebenslauf") ||
      ariaLabel.includes("cv") ||
      ariaLabel.includes("resume") ||
      ariaLabel.includes("lebenslauf") ||
      labelText.includes("cv") ||
      labelText.includes("resume") ||
      labelText.includes("lebenslauf"))
  )
}

function isValidDocumentUploadDom(uploadDom) {
  return (
    !!uploadDom.container &&
    !!uploadDom.input &&
    uploadDom.input.type === "file" &&
    !!uploadDom.uploadButton &&
    uploadDom.container.classList.contains("document-field-wrapper")
  )
}

function hasUploadedFile(uploadDom, expectedFileName) {
  const fileName = normalizeText(uploadDom.uploadedFileName?.textContent)
  return (
    !!uploadDom.uploadedList &&
    !!fileName &&
    !!uploadDom.deleteButton &&
    (!expectedFileName || fileName === normalizeText(expectedFileName))
  )
}

function getUploadedFileName(uploadDom) {
  return uploadDom.uploadedFileName?.textContent?.trim() || ""
}

function getPersonioCoverLetterUploadDom() {
  const input = document.querySelector(
    'input[type="file"]#doc-input-cover-letter[name="documents.cover-letter"]',
  )
  const container =
    input?.closest(".document-field-wrapper") ||
    document.querySelector(
      '.document-field-wrapper[aria-labelledby="doc-label-cover-letter"]',
    )
  return container
    ? readDocumentUploadDom(container)
    : findDocumentUploadDom(isCoverLetterUploadDom)
}

function getPersonioResumeUploadDom() {
  return findDocumentUploadDom(isResumeUploadDom)
}

function isDocumentUploadRequired(uploadDom) {
  const rawLabel = getDocumentCategoryRawText(uploadDom.container)
  const isOptional = /\(\s*optional\s*\)/i.test(rawLabel)
  return (
    !isOptional &&
    !!(
      uploadDom.input?.required ||
      uploadDom.input?.getAttribute("aria-required") === "true" ||
      uploadDom.container?.classList.contains("required") ||
      uploadDom.container?.closest(".required, .mandatory, .must-fill")
    )
  )
}

function getPersonioCoverLetterStatus() {
  const coverLetterDom = getPersonioCoverLetterUploadDom()
  const isCanonicalCoverLetter =
    coverLetterDom.container?.getAttribute("aria-labelledby") ===
      "doc-label-cover-letter" &&
    coverLetterDom.input?.id === "doc-input-cover-letter" &&
    coverLetterDom.input?.name === "documents.cover-letter" &&
    isCoverLetterLabel(coverLetterDom.input?.getAttribute("aria-label")) &&
    isCoverLetterLabel(coverLetterDom.labelText)

  if (!isCanonicalCoverLetter || !isValidDocumentUploadDom(coverLetterDom)) {
    return ""
  }

  const resumeDom = getPersonioResumeUploadDom()
  if (resumeDom.container && !isValidDocumentUploadDom(resumeDom)) return ""

  return isDocumentUploadRequired(coverLetterDom) ? "required" : "optional"
}

function isExactChoiceMatch(left, right) {
  return choiceMatch.isExactChoiceMatch(left, right)
}

async function fillInputTextField(rule, value, phoneCountryCodeAnswer) {
  const input = rule.$input
  if (!input || !value || value.trim() === "") return

  let fillValue = value
  if (/phone|telefon/i.test(rule.label)) {
    fillValue = personioAnswer.formatPhoneNumber(
      fillValue,
      phoneCountryCodeAnswer,
    )
  }
  await inputUtils.fillDefaultInputField(input, fillValue)
}

async function fillSelectField(rule, values) {
  if (!values || values.length === 0) return

  const selectedValue = values[0]
  const input = rule.$input
  if (!input) return

  input.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)

  const options = Array.from(input.options)
  const match = options.find(
    (option) =>
      option.textContent.trim().toLowerCase() ===
        selectedValue.toLowerCase() ||
      option.value.toLowerCase() === selectedValue.toLowerCase(),
  )
  if (match) {
    input.value = match.value
    input.dispatchEvent(new Event("change", { bubbles: true }))
    input.dispatchEvent(new Event("input", { bubbles: true }))
  }
}

async function fillCheckboxField(rule, values) {
  const checkboxes = rule.$checkboxs || []
  if (!checkboxes.length) return

  if (checkboxes[0]) {
    checkboxes[0].scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
  }

  for (const value of values) {
    for (const checkbox of checkboxes) {
      const label = checkbox.closest("label")
      if (!label) continue

      const clone = label.cloneNode(true)
      const nestedInput = clone.querySelector('input[type="checkbox"]')
      if (nestedInput) nestedInput.remove()

      const labelText = clone.textContent?.trim() || ""
      if (isExactChoiceMatch(labelText, value)) {
        if (!checkbox.checked) checkbox.click()
        break
      }
    }
  }
}

async function fillRadioGroupField(rule, values) {
  const selectedValue = values?.[0]
  if (!selectedValue) return

  const parent = rule.$radioParent
  if (!parent) return

  parent.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)

  const radios = Array.from(parent.querySelectorAll('input[type="radio"]'))
  const choices = []

  for (const radio of radios) {
    if (radio.disabled) continue

    let labelText = ""
    const forLabel = parent.querySelector(`label[for="${radio.id}"]`)
    if (forLabel) {
      labelText = forLabel.textContent?.trim() || ""
    } else {
      const closestLabel = radio.closest("label")
      if (closestLabel) {
        const clone = closestLabel.cloneNode(true)
        const nestedInput = clone.querySelector('input[type="radio"]')
        if (nestedInput) nestedInput.remove()
        labelText = clone.textContent?.trim() || ""
      } else {
        const sibling = radio.nextElementSibling
        if (sibling && sibling.tagName === "LABEL") {
          labelText = sibling.textContent?.trim() || ""
        }
      }
    }

    choices.push({ radio, label: labelText })
  }

  const matchedRadio = choiceMatch.findExactChoice(
    choices,
    selectedValue,
    (choice) => choice.label,
    (choice) => choice.radio.value,
  )?.radio

  if (matchedRadio) {
    const forLabel = parent.querySelector(`label[for="${matchedRadio.id}"]`)
    const clickTarget = forLabel || matchedRadio.closest("label")
    if (!matchedRadio.checked) {
      matchedRadio.checked = true
      matchedRadio.dispatchEvent(new Event("change", { bubbles: true }))
      matchedRadio.dispatchEvent(new Event("click", { bubbles: true }))
      matchedRadio.dispatchEvent(new Event("input", { bubbles: true }))
      if (clickTarget) {
        clickTarget.click()
        await delay.delay(50)
      }
    }
  }
}

async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const resumeDom = getPersonioResumeUploadDom()
  if (isValidDocumentUploadDom(resumeDom) && resumeDom.input) {
    if (hasUploadedFile(resumeDom) && resumeDom.deleteButton) {
      resumeDom.deleteButton.click()
      await observer.waitForCondition(
        () => !hasUploadedFile(getPersonioResumeUploadDom()),
        { timeout: 5e3, interval: 200 },
      )
    }
    await dom.uploadFiles(
      resumeDom.input,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
    return
  }
}

async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
  updateMissed,
  required = true,
) {
  let coverLetterDom = getPersonioCoverLetterUploadDom()
  if (!isValidDocumentUploadDom(coverLetterDom) || !coverLetterDom.input) {
    return false
  }

  updateRequired({ label: "Cover Letter", required, type: "file" })

  if (hasUploadedFile(coverLetterDom)) {
    if (!coverLetterDom.deleteButton) {
      updateMissed("Cover Letter")
      return false
    }
    coverLetterDom.deleteButton.click()
    const cleared = await observer.waitForCondition(
      () => !hasUploadedFile(getPersonioCoverLetterUploadDom()),
      { timeout: 5e3, interval: 200 },
    )
    if (!cleared) {
      updateMissed("Cover Letter")
      return false
    }
    coverLetterDom = getPersonioCoverLetterUploadDom()
  }

  if (!coverLetterDom.input) {
    updateMissed("Cover Letter")
    return false
  }

  const pdfBlob = await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter)
  const expectedFileName = `${coverLetter.coverLetterName}.pdf`
  coverLetterDom.input.files = pdfBlob.files
  coverLetterDom.input.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: false }),
  )

  const uploaded = await observer.waitForCondition(
    () => hasUploadedFile(getPersonioCoverLetterUploadDom(), expectedFileName),
    { timeout: 1e4, interval: 200 },
  )
  if (!uploaded) {
    const currentFileName = getUploadedFileName(
      getPersonioCoverLetterUploadDom(),
    )
    console.warn(
      "Personio cover letter upload did not reach expected success state",
      {
        expectedFileName,
        currentFileName,
      },
    )
    updateMissed("Cover Letter")
    return false
  }

  updateFilled("Cover Letter")
  return true
}

export {
  fillCheckboxField,
  fillInputTextField,
  fillRadioGroupField,
  fillSelectField,
  getPersonioCoverLetterStatus,
  getPersonioCoverLetterUploadDom,
  uploadCoverLetter,
  uploadResume,
}
