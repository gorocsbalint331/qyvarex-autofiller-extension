// @ts-nocheck
/**
 * Okta — field fill, agreement checkbox, and file-upload operations.
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as answerMethods from "../../methods/answer.js"
import * as observer from "../../methods/observer.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim().toLowerCase()
}

function parseManagedFileDom(field) {
  if (!field) {
    return {
      field: null,
      manager: null,
      input: null,
      hiddenFids: null,
      uploadButton: null,
      uploadedState: null,
      uploadedFileName: null,
      deleteButton: null,
      labelText: "",
    }
  }
  const manager = field.querySelector(".js-form-managed-file")
  const input = manager?.querySelector('input[type="file"]')
  const hiddenFids = manager?.querySelector(
    'input[type="hidden"][name$="[fids]"], input[type="hidden"][data-drupal-selector$="-fids"]',
  )
  const uploadButton = manager?.querySelector(
    'input[type="submit"][name$="_upload_button"], input[type="submit"][data-drupal-selector$="-upload-button"]',
  )
  const uploadedState = manager?.querySelector("span.file")
  const uploadedFileName = uploadedState?.querySelector("a")
  const deleteButton = manager?.querySelector(
    'input[type="submit"][name$="_remove_button"], input[type="submit"][data-drupal-selector$="-remove-button"], button[name$="_remove_button"]',
  )
  return {
    field,
    manager,
    input,
    hiddenFids,
    uploadButton,
    uploadedState,
    uploadedFileName,
    deleteButton,
    labelText:
      field.querySelector("label")?.textContent?.trim().toLowerCase() || "",
  }
}

function isValidManagedFileDom(dom) {
  return (
    !!dom.field &&
    !!dom.manager &&
    !!dom.hiddenFids &&
    (!!dom.input || !!dom.uploadedState) &&
    (!!dom.uploadButton || !!dom.deleteButton) &&
    (dom.input?.type === "file" || !!dom.uploadedState)
  )
}

function hasUploadedFile(dom, expectedName) {
  const fileName = dom.uploadedFileName?.textContent?.trim() || ""
  if (!dom.uploadedState || !fileName || !dom.deleteButton) return false
  if (!expectedName) return true
  const normalizedName = normalizeText(fileName)
  const normalizedExpected = normalizeText(expectedName)
  return !!(
    normalizedName === normalizedExpected ||
    normalizedName.includes(normalizedExpected) ||
    normalizedExpected.includes(normalizedName)
  )
}

function findManagedFileRoot(kind) {
  const selectors =
    kind === "resume"
      ? [
          ".js-form-type-managed-file.form-item-resume",
          ".js-form-item-resume",
          '[data-drupal-selector="edit-resume"]',
          'input[type="hidden"][name="resume[fids]"]',
          'input[type="file"][name="files[resume]"]',
        ]
      : [
          ".js-form-type-managed-file.form-item-cover-letter",
          ".js-form-item-cover-letter",
          '[data-drupal-selector="edit-cover-letter"]',
          'input[type="hidden"][name="cover_letter[fids]"]',
          'input[type="file"][name="files[cover_letter]"]',
        ]
  for (const selector of selectors) {
    const matched = document.querySelector(selector)
    const managedRoot = matched?.closest(".js-form-type-managed-file")
    if (managedRoot) return managedRoot
    if (matched?.classList.contains("js-form-type-managed-file")) return matched
  }
  return null
}

function getOktaResumeUploadDom() {
  return parseManagedFileDom(findManagedFileRoot("resume"))
}

export function getOktaCoverLetterUploadDom() {
  return parseManagedFileDom(findManagedFileRoot("coverLetter"))
}

function findCoverLetterTextInput() {
  const containers = Array.from(
    document.querySelectorAll("fieldset, .js-form-item, .form-item"),
  )
  for (const container of containers) {
    const text = container.textContent?.toLowerCase() || ""
    if (!text.includes("cover letter")) continue
    const input = container.querySelector("textarea, input[type='text']")
    if (input) return input
  }
  return null
}

function getCoverLetterFormat() {
  const formatFieldset = document.querySelector(
    'fieldset[data-drupal-selector="edit-cover-format"]',
  )
  const checked = document.querySelector('input[name="cover_format"]:checked')
  if (!formatFieldset && !checked) return ""
  if (checked?.value === "upload_pdf") return "file"
  if (checked?.value === "paste") return "text"
  if (formatFieldset) {
    const uploadOption = formatFieldset.querySelector(
      'input[name="cover_format"][value="upload_pdf"]',
    )
    const pasteOption = formatFieldset.querySelector(
      'input[name="cover_format"][value="paste"]',
    )
    if (uploadOption) return "file"
    if (pasteOption) return "text"
  }
  return getOktaCoverLetterUploadDom().input
    ? "file"
    : findCoverLetterTextInput()
      ? "text"
      : ""
}

export function getOktaCoverLetterStatus() {
  const format = getCoverLetterFormat()
  if (format === "text") return "optional"
  if (format !== "file") return ""
  return "required"
}

function isCoverLetterUploadReady() {
  const dom = getOktaCoverLetterUploadDom()
  const matches =
    dom.hiddenFids?.name === "cover_letter[fids]" &&
    dom.labelText.includes("cover letter") &&
    (dom.input?.name === "files[cover_letter]" ||
      dom.input?.id === "edit-cover-letter-upload" ||
      dom.uploadButton?.getAttribute("name") === "cover_letter_upload_button" ||
      dom.deleteButton?.getAttribute("name") === "cover_letter_remove_button" ||
      !!dom.uploadedState)
  return !!(matches && isValidManagedFileDom(dom))
}

function isResumeUploadReady() {
  const dom = getOktaResumeUploadDom()
  const matches =
    dom.hiddenFids?.name === "resume[fids]" &&
    (dom.labelText.includes("resume") || dom.labelText.includes("cv")) &&
    (dom.input?.name === "files[resume]" ||
      dom.uploadButton?.getAttribute("name") === "resume_upload_button" ||
      dom.deleteButton?.getAttribute("name") === "resume_remove_button" ||
      !!dom.uploadedState)
  return !!(matches && isValidManagedFileDom(dom))
}

async function assignFilesToInput(input, fileList) {
  input.files = fileList.files
  input.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: false }),
  )
}

async function clearExistingUpload(dom, refreshDom) {
  if (!hasUploadedFile(dom) || !dom.deleteButton) return true
  dom.deleteButton.click()
  return await observer.waitForCondition(
    () => {
      const next = refreshDom()
      return !hasUploadedFile(next) && !!next.input
    },
    {
      timeout: 5e3,
      interval: 100,
      observeTarget: dom.field || document.body,
    },
  )
}

export async function fillInputTextField(input, value) {
  if (input && value && value.trim() !== "") {
    input.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
    await inputUtils.fillDefaultInputField(input, value)
  }
}

export async function fillSelectField(rule, values) {
  if (!values || values.length === 0) return
  const target = values[0]
  rule.label
  const select = rule.$input
  if (!select) return
  select.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  const options = Array.from(select.options)
  const matched = options.find(
    (option) =>
      option.textContent.trim().toLowerCase() === target.toLowerCase() ||
      option.value.toLowerCase() === target.toLowerCase(),
  )
  if (matched) {
    select.value = matched.value
    select.dispatchEvent(new Event("change", { bubbles: true }))
    select.dispatchEvent(new Event("input", { bubbles: true }))
  }
}

export async function fillCheckboxField(rule, values) {
  rule.label
  const checkboxes = rule.$checkboxs || []
  rule.options
  if (!checkboxes.length) return
  if (checkboxes[0]) {
    checkboxes[0].scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
  }
  for (const value of values) {
    for (const checkbox of checkboxes) {
      const label = checkbox.closest("label")
      if (label) {
        const clone = label.cloneNode(true)
        const nestedInput = clone.querySelector('input[type="checkbox"]')
        if (nestedInput) nestedInput.remove()
        const labelText = clone.textContent?.trim() || ""
        if (choiceMatch.isExactChoiceMatch(labelText, value)) {
          if (!checkbox.checked) checkbox.click()
          break
        }
      }
    }
  }
}

export async function fillRadioGroupField(rule, values) {
  rule.label
  const target = values?.[0]
  if (!target) return
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
      const wrappingLabel = radio.closest("label")
      if (wrappingLabel) {
        const clone = wrappingLabel.cloneNode(true)
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
    target,
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

export async function agreementCheckboxField() {
  const acknowledgeSpan = xpath.getFirstOrderedNodeSafe(
    './/label/span[contains(text(),"I acknowledge")]',
    document.body,
  )
  if (!acknowledgeSpan) return
  const label = acknowledgeSpan.closest("label")
  const forId = label?.getAttribute("for")
  const checkbox = document.getElementById(forId)
  if (checkbox && !checkbox.checked) {
    checkbox.checked = true
    checkbox.dispatchEvent(new Event("change", { bubbles: true }))
    checkbox.dispatchEvent(new Event("click", { bubbles: true }))
    checkbox.dispatchEvent(new Event("input", { bubbles: true }))
    await delay.delay(50)
  }
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  let dom = getOktaResumeUploadDom()
  if (!isResumeUploadReady() || !isValidManagedFileDom(dom)) return false
  const cleared = await clearExistingUpload(dom, getOktaResumeUploadDom)
  if (!cleared) return false
  dom = getOktaResumeUploadDom()
  const input = dom.input
  if (!input) return false
  const blob = await answerMethods.fetchPdfAsBlob(resumeInfo)
  updateRequired({ label: "Resume/CV", required: true, type: "file" })
  await assignFilesToInput(input, blob)
  const uploaded = await observer.waitForCondition(
    () => hasUploadedFile(getOktaResumeUploadDom()),
    {
      timeout: 1e4,
      interval: 100,
      observeTarget: dom.field || document.body,
    },
  )
  if (!uploaded) return false
  updateFilled("Resume/CV")
  return true
}

export async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
) {
  let dom = getOktaCoverLetterUploadDom()
  if (
    getOktaCoverLetterStatus() !== "required" ||
    !isCoverLetterUploadReady() ||
    !isValidManagedFileDom(dom)
  ) {
    return false
  }
  const cleared = await clearExistingUpload(dom, getOktaCoverLetterUploadDom)
  if (!cleared) return false
  dom = getOktaCoverLetterUploadDom()
  if (!dom.input) return false
  updateRequired({ label: "Cover Letter", required: true, type: "file" })
  await assignFilesToInput(
    dom.input,
    await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
  )
  return observer
    .waitForCondition(() => hasUploadedFile(getOktaCoverLetterUploadDom()), {
      timeout: 1e4,
      interval: 100,
      observeTarget: dom.field || document.body,
    })
    .then((uploaded) => {
      if (uploaded) updateFilled("Cover Letter")
      return uploaded
    })
}
