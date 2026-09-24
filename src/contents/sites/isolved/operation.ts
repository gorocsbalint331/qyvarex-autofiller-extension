// @ts-nocheck
/**
 * Isolved — DOM fill operations (inputs, sections, resume upload).
 * Readable TypeScript source of truth.
 */

import * as answerMethods from "../../methods/answer.ts"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"
import * as rules from "./rules.ts"

const getTargetOrTimeout = {
  default: getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

function isSourceIdSelect(selectEl) {
  return selectEl.id === "source_id" || selectEl.name === "source_id"
}

export async function preFillForm() {
  await delay.delay(500)
  await acceptInfoUseConsent()
}

async function acceptInfoUseConsent() {
  const checkbox = document.querySelector(
    'input[type="checkbox"]#info_use_consent, input[type="checkbox"][name="info_use_consent"]',
  )
  if (!checkbox || checkbox.checked || rules.isElementDisabled(checkbox)) {
    return
  }
  checkbox.focus()
  checkbox.click()
  await delay.delay(50)
  checkbox.blur()
}

export async function fillInputTextField(element, value) {
  if (rules.isElementDisabled(element)) return
  element.focus()
  element.dispatchEvent(new FocusEvent("focusin", { bubbles: true }))
  await delay.delay(100)
  const prototype =
    element instanceof HTMLInputElement
      ? window.HTMLInputElement.prototype
      : window.HTMLTextAreaElement.prototype
  const nativeValueSetter = Object.getOwnPropertyDescriptor(
    prototype,
    "value",
  )?.set
  if (nativeValueSetter) nativeValueSetter.call(element, "")
  else element.value = ""
  element.dispatchEvent(new Event("input", { bubbles: true }))
  element.dispatchEvent(new Event("change", { bubbles: true }))
  await delay.delay(50)
  if (nativeValueSetter) nativeValueSetter.call(element, value)
  else element.value = value
  element.dispatchEvent(
    new Event("input", { bubbles: true, composed: true }),
  )
  element.dispatchEvent(
    new Event("change", { bubbles: true, composed: true }),
  )
  element.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true }))
  element.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }))
  await delay.delay(100)
  element.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
  element.blur()
  await delay.delay(100)
}

export async function fillSelectField(field, answer) {
  const desired = Array.isArray(answer) ? answer[0] : answer
  if (!desired) return
  const input = field.$input
  if (input instanceof HTMLSelectElement) {
    if (rules.isElementDisabled(input)) return
    input.focus()
    await delay.delay(100)
    const options = Array.from(input.options)
    const match =
      options.find(
        (opt) =>
          opt.textContent?.trim().toLowerCase() ===
          String(desired).toLowerCase(),
      ) ||
      options.find(
        (opt) =>
          opt.value.toLowerCase() === String(desired).toLowerCase(),
      )
    if (match) {
      if (isSourceIdSelect(input)) {
        const index = options.indexOf(match)
        const selectedIndexSetter = Object.getOwnPropertyDescriptor(
          window.HTMLSelectElement.prototype,
          "selectedIndex",
        )?.set
        const valueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLSelectElement.prototype,
          "value",
        )?.set
        input.selectedIndex = index
        selectedIndexSetter?.call(input, index)
        valueSetter?.call(input, match.value)
        match.selected = true
      } else {
        input.value = match.value
      }
      input.dispatchEvent(new Event("input", { bubbles: true }))
      input.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(100)
    }
    input.blur()
    await delay.delay(100)
    return
  }
  if (input instanceof HTMLElement) {
    if (rules.isElementDisabled(input)) return
    input.click()
    await delay.delay(300)
    const listbox = document.querySelector(
      '[role="listbox"], [class*="dropdown"], [class*="options"]',
    )
    if (!listbox) return
    const optionNodes = Array.from(
      listbox.querySelectorAll('[role="option"], li, [class*="option"]'),
    )
    const optionMatch = optionNodes.find(
      (node) =>
        node.textContent?.trim().toLowerCase() ===
        String(desired).toLowerCase(),
    )
    if (optionMatch) {
      optionMatch.click()
      await delay.delay(200)
    } else {
      document.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
      )
      await delay.delay(100)
    }
  }
}

export async function fillCheckboxField(field, answers) {
  if (!answers || answers.length === 0) return
  const checkboxes = field.$checkboxs || [field.$input]
  for (const answer of answers) {
    if (checkboxes.length === 1) {
      const checkbox = checkboxes[0]
      if (rules.isElementDisabled(checkbox)) return
      const labelEl = document.querySelector(`label[for="${checkbox.id}"]`)
      const labelText =
        labelEl?.textContent?.trim() ||
        checkbox.closest("label")?.textContent?.trim() ||
        checkbox.value ||
        ""
      const normalized = String(answer).toLowerCase().trim()
      const shouldCheck =
        normalized === "yes" ||
        normalized === "true" ||
        normalized === "1" ||
        normalized === labelText.toLowerCase().trim() ||
        normalized === checkbox.value.toLowerCase().trim()
      if (checkbox.checked !== shouldCheck) {
        checkbox.focus()
        await delay.delay(50)
        checkbox.click()
        await delay.delay(100)
        checkbox.blur()
        await delay.delay(50)
      }
      return
    }
    for (const checkbox of checkboxes) {
      if (rules.isElementDisabled(checkbox)) continue
      const labelEl = document.querySelector(`label[for="${checkbox.id}"]`)
      const labelText =
        labelEl?.textContent?.trim() ||
        checkbox.closest("label")?.textContent?.trim() ||
        checkbox.value ||
        ""
      if (
        labelText.toLowerCase() === String(answer).toLowerCase() ||
        checkbox.value.toLowerCase() === String(answer).toLowerCase()
      ) {
        if (!checkbox.checked) {
          checkbox.focus()
          await delay.delay(50)
          checkbox.click()
          await delay.delay(100)
          checkbox.blur()
          await delay.delay(50)
        }
        break
      }
    }
  }
}

export async function fillRadioGroupFiled(field, answer) {
  const desired = Array.isArray(answer) ? answer[0] : answer
  if (!desired) return
  const parent = field.$radioParent
  const radios = parent
    ? Array.from(parent.querySelectorAll('input[type="radio"]'))
    : []
  let match = null
  for (const radio of radios) {
    if (rules.isElementDisabled(radio)) continue
    const labelEl = document.querySelector(`label[for="${radio.id}"]`)
    const labelText =
      labelEl?.textContent?.trim() ||
      radio.closest("label")?.textContent?.trim() ||
      radio.value ||
      ""
    if (
      labelText.toLowerCase() === String(desired).toLowerCase() ||
      radio.value.toLowerCase() === String(desired).toLowerCase()
    ) {
      match = radio
      break
    }
  }
  if (match && !match.checked) {
    match.focus()
    await delay.delay(50)
    match.click()
    await delay.delay(100)
    match.blur()
    await delay.delay(50)
  }
}

export async function uploadResume(resumeRequest) {
  const normalizedRequest =
    resumeRequest.tailor ||
    resumeRequest.useOriginalResume ||
    resumeRequest.diagnoseId ||
    !resumeRequest.id
      ? resumeRequest
      : { ...resumeRequest, useOriginalResume: true }
  const primarySelector = '#upload_resume input[type="file"]'
  const primaryInput = document.querySelector(primarySelector)
  const fallbackInput = document.querySelector(
    'input[type="file"][accept*=".pdf"], input[type="file"][accept*="pdf"], input[type="file"]',
  )
  const fileInput = primaryInput || fallbackInput
  if (!fileInput) return false
  let prepared
  try {
    prepared = await answerMethods.fetchPdfAsBlob(normalizedRequest)
  } catch (err) {
    console.error("[isolved:uploadResume] failed to prepare resume file", err)
    return false
  }
  try {
    if (fileInput.files == null) return false
    fileInput.files = prepared.files
    fileInput.dispatchEvent(new Event("input", { bubbles: true }))
    fileInput.dispatchEvent(new Event("change", { bubbles: true }))
  } catch (err) {
    console.error("[isolved:uploadResume] failed to attach resume file", err)
    return false
  }
  const confirmButton = await getTargetOrTimeout.default(
    () => findVisibleNewUploadButton(),
    () => false,
    300,
  )
  if (!confirmButton) return false
  await delay.delay(100)
  confirmButton.click()
  const uploadIframe = findFormTargetIframe(fileInput.closest("form"))
  const uploadOk = await getTargetOrTimeout.default(
    () => (isResumeUploadSuccessful(uploadIframe) ? true : null),
    () => false,
    300,
  )
  return !!uploadOk
}

function findVisibleNewUploadButton() {
  const button = document.querySelector("#new_upload_button")
  if (!button || button.disabled) return null
  const style = window.getComputedStyle(button)
  if (style.display === "none" || style.visibility === "hidden") return null
  return button
}

function findUploadedResumeIndicator() {
  return (
    document.querySelector(
      '[class*="file-name"], [class*="upload-success"], [class*="uploaded"], [class*="resume-name"]',
    ) ||
    document.querySelector('[class*="upload"] [class*="complete"]') ||
    document.querySelector(
      'button[aria-label="Delete"], button[aria-label="Remove"], button[class*="delete"], button[class*="remove"]',
    )
  )
}

function findFormTargetIframe(form) {
  const targetName = form?.target?.trim()
  if (!targetName) return null
  return (
    document.querySelector(`iframe[name="${targetName}"]`) ||
    document.querySelector(`iframe#${targetName}`)
  )
}

function readIframeBodyText(iframe) {
  try {
    return (
      iframe?.contentDocument?.body?.textContent?.trim().toLowerCase() || ""
    )
  } catch {
    return ""
  }
}

function isResumeUploadSuccessful(uploadIframe) {
  if (findUploadedResumeIndicator()) return true
  const text = readIframeBodyText(uploadIframe)
  if (!text) return false
  if (text.includes("error") || text.includes("failed")) return false
  return (
    text.includes("success") ||
    text.includes("uploaded") ||
    text.includes("complete")
  )
}

export async function addEducationSection(desiredCount) {
  if (desiredCount <= 0) return
  const existing = document.querySelectorAll("#education_form")
  const toAdd = desiredCount - existing.length
  if (toAdd <= 0) return
  for (let i = 0; i < toAdd; i++) {
    const addButton =
      rules.getAddEducationButton() ||
      document.querySelector(
        'a[id*="add_education"], button[id*="add_education"]',
      ) ||
      document.querySelector(
        'a[class*="add-another"], button[class*="add-another"]',
      ) ||
      Array.from(document.querySelectorAll("a, button")).find(
        (el) =>
          el.textContent?.toLowerCase().includes("add") &&
          el.textContent?.toLowerCase().includes("education"),
      )
    if (!addButton) break
    addButton.click()
    await delay.delay(300)
  }
  await delay.delay(200)
}

export function hasResumeUploadUI() {
  return !!document.querySelector(
    '#upload_resume input[type="file"], input[type="file"][accept*=".pdf"], input[type="file"][accept*="pdf"]',
  )
}

export async function clickButtonAndWait(
  selector,
  isDone,
  pollLimit = 50,
) {
  const button = document.querySelector(selector)
  if (!button) return false
  button.click()
  const done = await getTargetOrTimeout.default(
    () => (isDone() ? true : null),
    () => false,
    pollLimit,
  )
  return !!done
}

export async function submitEducationSection(waitUntilGone) {
  const selector =
    '#education_form input[type="submit"], #education_form button[type="submit"]'
  return await clickButtonAndWait(
    selector,
    waitUntilGone ? () => !document.querySelector(selector) : () => true,
    50,
  )
}

export async function submitEmploymentSection(waitUntilGone) {
  const selector = "#submit_employment"
  return await clickButtonAndWait(
    selector,
    waitUntilGone ? () => !document.querySelector(selector) : () => true,
    50,
  )
}

export async function addEmploymentSection(desiredCount) {
  if (desiredCount <= 0) return
  const root =
    document.querySelector('[id^="employment"]') ||
    document.querySelector("#landingStrip") ||
    document.body
  if (!root) return
  const existing = root.querySelectorAll(
    '[class*="employment"][class*="form"]:not([class*="container"]):not([class*="section"]), [class*="experience"][class*="form"]:not([class*="container"]):not([class*="section"])',
  )
  const toAdd = desiredCount - existing.length
  if (toAdd <= 0) return
  for (let i = 0; i < toAdd; i++) {
    const addButton =
      rules.getAddEmploymentButton() ||
      root.querySelector(
        'a[id*="add_employment"], button[id*="add_employment"], a[id*="add_experience"], button[id*="add_experience"]',
      ) ||
      root.querySelector(
        'a[class*="add-another"], button[class*="add-another"]',
      ) ||
      Array.from(root.querySelectorAll("a, button")).find(
        (el) =>
          el.textContent?.toLowerCase().includes("add") &&
          (el.textContent?.toLowerCase().includes("employment") ||
            el.textContent?.toLowerCase().includes("experience")),
      )
    if (!addButton) break
    addButton.click()
    await delay.delay(300)
  }
  await delay.delay(200)
}

export async function removeResume() {
  const removeButton = document.querySelector(
    'button[aria-label="Delete"], button[aria-label="Remove"], button[class*="delete"], button[class*="remove"]',
  )
  if (!removeButton || removeButton.disabled) return
  removeButton.click()
  await delay.delay(500)
  const confirmButton = document.querySelector(
    'button[class*="confirm"], button[class*="ok"]',
  )
  if (confirmButton) {
    confirmButton.click()
    await delay.delay(500)
  }
}
