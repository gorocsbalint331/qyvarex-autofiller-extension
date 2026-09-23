// @ts-nocheck
/**
 * HRMDirect — DOM fill operations (inputs, selects, files, edu/emp rows).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as xpath from "../../../core/xpath.js"
import * as observer from "../../methods/observer.ts"
import * as delay from "../../../utils/delay.js"
import * as hrmdirectAnswer from "./answer.ts"

function normalizeLabelText(text) {
  return (text || "").trim().replace(/\s+/g, " ").toLowerCase()
}

function describeUploadField(field) {
  if (!field) {
    return {
      field: null,
      labelText: "",
      input: null,
      uploadedList: null,
      uploadedRow: null,
      uploadedFileName: null,
      deleteButton: null,
    }
  }

  const uploadedList = field.querySelector("tbody.file-list.single-file-list")
  const uploadedRow = uploadedList?.querySelector("tr.file-row")
  const uploadedFileName = uploadedRow?.querySelector(".file-name")
  const deleteButton = uploadedRow?.querySelector(".remove-button")

  return {
    field,
    labelText: normalizeLabelText(
      field.querySelector(".control-label.field-title")?.textContent,
    ),
    input: field.querySelector('input[type="file"].file-upload'),
    uploadedList,
    uploadedRow,
    uploadedFileName,
    deleteButton,
  }
}

function isVisibleElement(element) {
  if (
    element.closest(
      ".hidden, [hidden], [aria-hidden='true'], .tab-pane:not(.active), .collapse:not(.in), .panel-collapse:not(.in)",
    )
  ) {
    return false
  }
  const style = window.getComputedStyle(element)
  return (
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    Number(style.opacity || "1") !== 0 &&
    (typeof element.checkVisibility === "function"
      ? element.checkVisibility()
      : !!element.offsetParent || style.position === "fixed")
  )
}

function listResumeUploadFields() {
  return Array.from(
    document.querySelectorAll("div.form-field.qa-resume-upload"),
  ).filter((field) => isVisibleElement(field))
}

function findUploadDom(predicate) {
  for (const field of listResumeUploadFields()) {
    const described = describeUploadField(field)
    if (predicate(described)) return described
  }
  return describeUploadField(null)
}

function isResumeUploadDom(described) {
  return (
    !described.field?.classList.contains("coverletter") &&
    (described.labelText.includes("resume") ||
      described.labelText.includes("cv"))
  )
}

function isCoverLetterUploadDom(described) {
  return (
    !!described.field?.classList.contains("coverletter") ||
    described.labelText.includes("cover letter")
  )
}

function isValidUploadDom(described) {
  return (
    !!described.field &&
    !!described.input &&
    described.input.type === "file" &&
    !!described.uploadedList
  )
}

function hasUploadedFile(described, expectedName) {
  const fileName = described.uploadedFileName?.textContent?.trim() || ""
  return (
    !!described.uploadedRow &&
    !!fileName &&
    (!expectedName ||
      normalizeLabelText(fileName) === normalizeLabelText(expectedName))
  )
}

function uploadDomSignaturesMatch(left, right) {
  if (!isValidUploadDom(left) || !isValidUploadDom(right)) return false
  const signature = (described) =>
    [
      described.input?.className || "",
      described.uploadedList?.className || "",
      !!described.field?.querySelector(
        "table.table.table-condensed.table-hover",
      ),
      !!described.field?.querySelector(".fileupload-buttonbar"),
      !!described.field?.querySelector(".fileinput-button"),
    ].join("|")
  return signature(left) === signature(right)
}

export function getHrmdirectResumeUploadDom() {
  return findUploadDom(isResumeUploadDom)
}

export function hasHrmdirectUploadedResume() {
  return hasUploadedFile(getHrmdirectResumeUploadDom())
}

export function getHrmdirectCoverLetterUploadDom() {
  return findUploadDom(isCoverLetterUploadDom)
}

export function getHrmdirectCoverLetterStatus() {
  const resume = getHrmdirectResumeUploadDom()
  const coverLetter = getHrmdirectCoverLetterUploadDom()
  return isValidUploadDom(resume) &&
    isValidUploadDom(coverLetter) &&
    uploadDomSignaturesMatch(resume, coverLetter)
    ? "required"
    : ""
}

async function assignFileInput(input, dataTransfer) {
  input.files = dataTransfer.files
  input.dispatchEvent(new Event("change", { bubbles: true, cancelable: false }))
}

async function clearUploadedFile(described) {
  if (hasUploadedFile(described) && described.deleteButton) {
    described.deleteButton.click()
    await observer.waitForCondition(
      () => {
        const live = isCoverLetterUploadDom(described)
          ? getHrmdirectCoverLetterUploadDom()
          : getHrmdirectResumeUploadDom()
        return !live.uploadedRow
      },
      {
        timeout: 5e3,
        interval: 100,
        observeTarget: described.field || document.body,
      },
    )
  }
}

function normalizeFieldTitle(text) {
  return String(text ?? "")
    .replace(/\s*\*\s*$/, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function readFormFieldTitle(field) {
  return normalizeFieldTitle(
    field.querySelector(
      ".control-label.field-title, label.control-label, label",
    )?.textContent,
  )
}

function resolveLiveTextInput(rule) {
  const live = rule?.$input
  if (live?.isConnected) return live

  const form = document.querySelector("form.section-form")
  if (!form) return null

  const label = normalizeFieldTitle(rule.label)
  const matches = Array.from(form.querySelectorAll(".form-field"))
    .filter((field) => readFormFieldTitle(field) === label)
    .map((field) =>
      field.querySelector(
        "input[type='text'], input[type='email'], input[type='tel'], input[type='number'], input:not([type]), textarea",
      ),
    )
    .filter((input) => !!input?.isConnected)

  return matches.length === 1 ? matches[0] : null
}

export async function fillInputTextField(rule, value) {
  if (rule.label.toLowerCase().includes("position applying for")) {
    const titleNode = xpath.getFirstOrderedNodeSafe(
      '//*[@id="main-app-row"]/div/div[1]/div[2]/p',
    )
    value = titleNode.textContent?.trim() || value
  }

  for (let attempt = 0; attempt < 2; attempt++) {
    let input = resolveLiveTextInput(rule)
    if (!input) {
      console.warn("[HRMDirect Text] current input not found", {
        label: rule?.label,
      })
      return false
    }

    input.focus()
    await delay.delay(100)
    input.value = ""
    input.dispatchEvent(new Event("input", { bubbles: true }))
    await delay.delay(100)

    input = resolveLiveTextInput(rule)
    if (!input) continue

    input.value = value
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    input.blur()
    await delay.delay(100)

    const readback = resolveLiveTextInput(rule)
    if (readback?.value === value) return true
  }

  console.warn("[HRMDirect Text] commit readback failed", {
    label: rule.label,
  })
  return false
}

export async function fillDateField(input, value) {
  if (!input || !(input instanceof HTMLInputElement) || !value) return

  if (value[0] === "current") {
    try {
      const parent = input.parentElement
      if (!parent) {
        console.warn("[fillDateField] Parent element not found")
        return
      }
      const sibling = parent.nextElementSibling
      if (!sibling) {
        console.warn("[fillDateField] Next sibling element not found")
        return
      }
      const checkbox = sibling.querySelector("input")
      if (!checkbox) {
        console.warn(
          "[fillDateField] Checkbox input not found in next sibling",
        )
        return
      }
      if (checkbox.type !== "checkbox") {
        console.warn(
          `[fillDateField] Found input is not a checkbox, type: ${checkbox.type}`,
        )
        return
      }

      checkbox.focus()
      await delay.delay(100)
      if (!checkbox.checked) {
        checkbox.click()
        await delay.delay(150)
        checkbox.dispatchEvent(new Event("change", { bubbles: true }))
        checkbox.dispatchEvent(new Event("input", { bubbles: true }))
        await delay.delay(100)
      }
      checkbox.blur()
    } catch (error) {
      console.error(
        "[fillDateField] Error handling 'current' checkbox:",
        error,
      )
    }
    return
  }

  input.focus()
  await delay.delay(100)
  const formatted = hrmdirectAnswer.formatDate(value)
  input.value = formatted
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  input.blur()
  await delay.delay(100)
}

function normalizeChoiceToken(value) {
  return value ? value.toString().toLowerCase().replace(/[^a-z0-9]/g, "") : ""
}

export async function fillSelectField(rule, value) {
  const select = rule.$input
  if (!select || select.tagName !== "SELECT") {
    console.warn("[HRMDirect Select] live control is not a select", {
      label: rule.label,
      tagName: select?.tagName,
      connected: select?.isConnected,
    })
    return false
  }

  const answer = Array.isArray(value) ? value[0] : value
  normalizeChoiceToken(answer)

  const matchers = [
    (text, optionValue) =>
      choiceMatch.isExactChoiceMatch(
        text,
        typeof answer === "boolean" ? String(answer) : answer,
      ),
    (text, optionValue) =>
      choiceMatch.isExactChoiceMatch(
        optionValue,
        typeof answer === "boolean" ? String(answer) : answer,
      ),
  ]

  for (const matcher of matchers) {
    for (let index = 0; index < select.options.length; index++) {
      const option = select.options[index]
      const text = option.textContent?.trim() || ""
      const optionValue = option.value || ""
      if ((text || optionValue) && matcher(text, optionValue)) {
        select.selectedIndex = index
        select.dispatchEvent(new Event("change", { bubbles: true }))
        await delay.delay(100)
        return true
      }
    }
  }

  console.warn(
    `fillSelectField: No matching option found for "${answer}".`,
    `Available: ${Array.from(select.options)
      .map((option) => option.textContent?.trim() || option.value)
      .join(" | ")}`,
  )
  return false
}

export async function fillRadioGroupFiled(rule, value) {
  const answer = Array.isArray(value) ? value[0] : value
  const anchor = rule.$input
  if (!anchor) {
    console.warn("fillRadioGroupFiled: Radio group input element missing")
    return
  }

  const scope =
    anchor.closest(".form-group.radio-group, .form-field") ||
    anchor.closest("form") ||
    document.body
  const groupName = anchor.name
  const allRadios = Array.from(scope.querySelectorAll('input[type="radio"]'))
  const radios = groupName
    ? allRadios.filter((radio) => radio.name === groupName)
    : allRadios

  if (radios.length === 0) {
    console.warn("fillRadioGroupFiled: No radios found for group:", groupName)
    return
  }

  const readRadioLabel = (radio) => {
    let labelText = ""
    const closestLabel = radio.closest("label")
    if (closestLabel) labelText = closestLabel.textContent?.trim() || ""

    if (!labelText && radio.id) {
      const forLabel = scope.querySelector(`label[for="${radio.id}"]`)
      if (forLabel) labelText = forLabel.textContent?.trim() || ""
    }

    if (!labelText && radio.parentElement?.tagName === "LABEL") {
      labelText = radio.parentElement.textContent?.trim() || ""
    }
    if (!labelText) {
      labelText = radio.nextElementSibling?.textContent?.trim() || ""
    }
    if (!labelText) {
      labelText =
        radio.parentElement?.nextElementSibling?.textContent?.trim() || ""
    }
    return labelText || ""
  }

  normalizeChoiceToken(answer)

  const matchers = [
    (text, optionValue) =>
      choiceMatch.isExactChoiceMatch(
        text,
        typeof answer === "boolean" ? String(answer) : answer,
      ),
    (text, optionValue) =>
      choiceMatch.isExactChoiceMatch(
        optionValue,
        typeof answer === "boolean" ? String(answer) : answer,
      ),
  ]

  for (const matcher of matchers) {
    for (const radio of radios) {
      const labelText = readRadioLabel(radio)
      const optionValue = radio.value
      if (matcher(labelText, optionValue)) {
        if (!radio.checked) {
          radio.click()
          await delay.delay(100)
          if (!radio.checked) {
            radio.checked = true
            radio.dispatchEvent(new Event("input", { bubbles: true }))
            radio.dispatchEvent(new Event("change", { bubbles: true }))
            await delay.delay(100)
          }
        }
        return
      }
    }
  }

  const available = radios
    .map((radio) => {
      const labelText = readRadioLabel(radio)
      return `"${labelText || radio.value}"`
    })
    .join(", ")
  console.warn(
    `fillRadioGroupFiled: No matching radio option found for value "${answer}". Total radios in group: ${radios.length}. Available options: ${available}`,
  )
}

export async function fillCheckboxField(rule, value) {
  let checkboxes = rule.$checkboxs
  if (!checkboxes || checkboxes.length === 0) {
    const input = rule.$input
    checkboxes =
      input && input.name
        ? Array.from(
            document.querySelectorAll(
              `input[type="checkbox"][name="${input.name}"]`,
            ),
          )
        : input
          ? [input]
          : []
  }

  if (checkboxes.length === 0) {
    console.warn("fillCheckboxField: No checkboxes found")
    return
  }

  const setChecked = async (checkbox, checked) => {
    if (checkbox.checked === checked) return
    checkbox.click()
    await delay.delay(150)
    let retries = 0
    while (checkbox.checked !== checked && retries < 3) {
      checkbox.checked = checked
      checkbox.dispatchEvent(new Event("change", { bubbles: true }))
      checkbox.dispatchEvent(new Event("input", { bubbles: true }))
      await delay.delay(100)
      retries++
    }
    if (checkbox.checked !== checked) {
      console.warn(
        `fillCheckboxField: Failed to set checkbox state to ${checked}`,
      )
    }
  }

  const readCheckboxLabel = (checkbox) => {
    if (checkbox.id) {
      const forLabel = document.querySelector(`label[for="${checkbox.id}"]`)
      if (forLabel) return forLabel.textContent?.trim() || ""
    }
    if (checkbox.parentElement?.tagName === "LABEL") {
      return checkbox.parentElement.textContent?.trim() || ""
    }
    const closestLabel = checkbox.closest("label")
    return closestLabel
      ? closestLabel.textContent?.trim() || ""
      : checkbox.value || ""
  }

  if (Array.isArray(value)) {
    const answers = value.map((item) => String(item).trim())
    for (const checkbox of checkboxes) {
      const labelText = readCheckboxLabel(checkbox)
      if (!labelText) {
        console.warn(
          "fillCheckboxField: Cannot determine label text for",
          checkbox,
        )
        continue
      }
      await setChecked(checkbox, answers.includes(labelText))
    }
    return
  }

  const checked =
    value === true ||
    value === "Yes" ||
    value === "true" ||
    String(value).toLowerCase() === "yes"
  for (const checkbox of checkboxes) {
    await setChecked(checkbox, checked)
  }
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const resume = getHrmdirectResumeUploadDom()
  if (!isValidUploadDom(resume) || !resume.input) {
    console.warn("No resume field found")
    return
  }

  await clearUploadedFile(resume)
  updateRequired({ label: "Resume/CV", required: true })

  const dataTransfer = await answerMethods.fetchPdfAsBlob(resumeInfo)
  const fileName = dataTransfer.files?.[0]?.name || ""
  await assignFileInput(resume.input, dataTransfer)

  const uploaded = await observer.waitForCondition(
    () => {
      const live = getHrmdirectResumeUploadDom()
      return hasUploadedFile(live, fileName)
    },
    {
      timeout: 1e4,
      interval: 100,
      observeTarget: resume.field || document.body,
    },
  )
  if (uploaded) updateFilled("Resume/CV")
}

export async function uploadCoverLetter(
  coverLetterInfo,
  updateRequired,
  updateFilled,
) {
  const coverLetter = getHrmdirectCoverLetterUploadDom()
  if (
    getHrmdirectCoverLetterStatus() !== "required" ||
    !isValidUploadDom(coverLetter) ||
    !coverLetter.input
  ) {
    return false
  }

  await clearUploadedFile(coverLetter)
  updateRequired({ label: "Cover Letter", required: true })

  const expectedName = `${coverLetterInfo.coverLetterName}.pdf`
  await assignFileInput(
    coverLetter.input,
    await answerMethods.fetchCoverLetterPdfAsBlob(coverLetterInfo),
  )

  return observer
    .waitForCondition(
      () => {
        const live = getHrmdirectCoverLetterUploadDom()
        return hasUploadedFile(live, expectedName)
      },
      {
        timeout: 1e4,
        interval: 100,
        observeTarget: coverLetter.field || document.body,
      },
    )
    .then((uploaded) => {
      if (uploaded) updateFilled("Cover Letter")
      return uploaded
    })
}

export async function removeResume() {
  const removeLink = document.querySelector(
    'a[data-localized-key="forms.application.file-remove"]',
  )
  if (removeLink) {
    removeLink.click()
    await delay.delay(500)
  }
}

export async function reinitializeEducationAndEmployment() {
  const sections = xpath.getOrderedNodesSafe(
    './/a[@class="btn btn-block-xs btn-default add-row-button" and ancestor::div[@class="section-container"]]/ancestor::div[@class="section-container"]',
  )
  if (sections.length !== 0) {
    for (const section of sections) await deleteEduOrExpSections(section)
  }
}

export function countEduOrExpSections(container) {
  return xpath.getOrderedNodesSafe(
    './/div[@class="section-repeatable"]',
    container,
  ).length
}

export async function deleteEduOrExpSections(container) {
  const removeButtons = xpath.getOrderedNodesSafe(
    './/a[@class="btn btn-xs btn-default hidden-print remove-row-button"]',
    container,
  )
  if (removeButtons.length === 1) return

  for (const button of removeButtons) {
    button.click()
    await delay.delay(500)
    const confirm = xpath.getFirstOrderedNodeSafe(
      "//button[@data-bb-handler='confirm' and text()='Remove']",
    )
    if (!confirm) return
    confirm.click()
    await delay.delay(200)
  }
}

export async function addEduOrExpSection(container) {
  const addButton = xpath.getFirstOrderedNodeSafe(
    './/a[@class="btn btn-block-xs btn-default add-row-button"]',
    container,
  )
  if (!addButton) {
    console.warn("[addEduOrExpSection] Add button not found")
    return
  }

  const beforeCount = countEduOrExpSections(container)
  addButton.click()
  await delay.delay(200)

  let afterCount = countEduOrExpSections(container)
  let attempts = 0
  const maxAttempts = 30
  while (afterCount === beforeCount && attempts < maxAttempts) {
    await delay.delay(100)
    afterCount = countEduOrExpSections(container)
    attempts++
  }

  if (afterCount <= beforeCount) {
    console.warn(
      `[addEduOrExpSection] ✗ Failed to add section. Count remained: ${afterCount}`,
    )
  }
  await delay.delay(300)
}

export async function preFillForm() {
  await delay.delay(500)
}
