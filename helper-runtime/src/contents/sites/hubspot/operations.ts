// @ts-nocheck
/**
 * HubSpot DOM fill operations (inputs, selects, search, uploads).
 */

import * as filler from "../../shared/filler.js"
import * as answer from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as delay from "../../../utils/delay.js"

const UPLOAD_SLOTS = {
  resume: {
    slotSelector: ".hs-field__resume",
    inputSelector: 'input#resume[name="resume"][type="file"]',
    fieldLabel: "Resume/CV",
    required: true,
  },
  coverLetter: {
    slotSelector: ".hs-field__cover_letter",
    inputSelector: 'input#cover_letter[name="cover_letter"][type="file"]',
    fieldLabel: "Cover Letter",
    required: true,
  },
}

const normalizeText = (text) => text?.replace(/\s+/g, " ").trim() || ""

const dispatchInputChange = (element) => {
  element.dispatchEvent(new Event("input", { bubbles: true }))
  element.dispatchEvent(new Event("change", { bubbles: true }))
}

const setNativeInputValue = (input, value) => {
  let nativeSetter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    "value",
  )?.set
  if (nativeSetter) {
    nativeSetter.call(input, value)
    return
  }
  input.value = value
}

const findVisiblePacItem = () =>
  Array.from(document.querySelectorAll(".pac-container .pac-item")).find(
    (item) => {
      let style = window.getComputedStyle(item)
      return style.display !== "none" && style.visibility !== "hidden"
    },
  )

const waitForPacItem = async (timeoutMs = 1500) => {
  let startedAt = Date.now()
  while (Date.now() - startedAt < timeoutMs) {
    let item = findVisiblePacItem()
    if (item) return item
    await delay.delay(100)
  }
}

const clickPacItem = async (item) => {
  let rect = item.getBoundingClientRect()
  let eventInit = {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: rect.left + rect.width / 2,
    clientY: rect.top + rect.height / 2,
  }
  item.dispatchEvent(new MouseEvent("mouseover", eventInit))
  item.dispatchEvent(new MouseEvent("mousemove", eventInit))
  item.dispatchEvent(new MouseEvent("mousedown", eventInit))
  item.dispatchEvent(new MouseEvent("mouseup", eventInit))
  item.dispatchEvent(new MouseEvent("click", eventInit))
  await delay.delay(100)
}

const dispatchKey = (element, key, keyCode) => {
  let eventInit = {
    key,
    code: key,
    keyCode,
    which: keyCode,
    bubbles: true,
    cancelable: true,
    composed: true,
  }
  for (let type of ["keydown", "keypress", "keyup"]) {
    let event = new KeyboardEvent(type, eventInit)
    Object.defineProperty(event, "keyCode", { get: () => keyCode })
    Object.defineProperty(event, "which", { get: () => keyCode })
    element.dispatchEvent(event)
  }
}

const confirmPacWithKeyboard = async (input) => {
  input.focus()
  dispatchKey(input, "ArrowDown", 40)
  await delay.delay(100)
  dispatchKey(input, "Enter", 13)
  await delay.delay(300)
}

const dismissPacDropdown = async (input) => {
  input.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
  input.blur()
  dispatchKey(input, "Escape", 27)
  await delay.delay(100)
}

export async function fillInputTextField(input, value) {
  if (input && value) {
    input.focus()
    input.value = value
    dispatchInputChange(input)
    await delay.delay(50)
    input.blur()
  }
}

export async function fillSearchField(rule, values) {
  let value = Array.isArray(values) ? values[0] : values
  if (!rule.$input || !value) return

  rule.$input.focus()
  setNativeInputValue(rule.$input, "")
  rule.$input.dispatchEvent(new Event("input", { bubbles: true }))
  await delay.delay(30)

  setNativeInputValue(rule.$input, value)
  rule.$input.dispatchEvent(new Event("input", { bubbles: true }))
  rule.$input.dispatchEvent(new Event("change", { bubbles: true }))

  let pacItem = await waitForPacItem()
  if (!pacItem) {
    throw new filler.FillError("(Search) Could not find Location option")
  }

  await confirmPacWithKeyboard(rule.$input)
  if (findVisiblePacItem()) {
    await clickPacItem(pacItem)
    await delay.delay(300)
  }

  if (!rule.$input.value.trim()) {
    throw new filler.FillError("(Search) Failed to fill Location")
  }

  if (findVisiblePacItem()) {
    await dismissPacDropdown(rule.$input)
  }
  if (findVisiblePacItem()) {
    throw new filler.FillError("(Search) Location option did not commit")
  }
}

export async function fillSelectField(rule, values) {
  let select = rule.$input
  let value = values?.[0]
  if (!select || !value) return

  let needle = value.toLowerCase()
  let option = Array.from(select.options).find((opt) => {
    let text = normalizeText(opt.textContent).toLowerCase()
    return text === needle || opt.value.toLowerCase() === needle
  })

  if (option) {
    select.focus()
    select.value = option.value
    select.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(50)
    select.blur()
  }
}

export async function fillCheckboxField(rule, values) {
  let selected = (values || []).map((value) => value.toLowerCase())
  if (!selected.length) return

  for (let checkbox of rule.$checkboxs || []) {
    let label = normalizeText(
      checkbox.closest("label")?.textContent || checkbox.value,
    ).toLowerCase()
    let shouldCheck = selected.includes(label)
    if (shouldCheck !== checkbox.checked) {
      checkbox.click()
      checkbox.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(30)
    }
  }
}

export async function fillRadioField(rule, values) {
  let needle = values?.[0]?.toLowerCase()
  let radios = rule.$input
  if (!needle || !radios?.length) return

  let match = radios.find((radio) => {
    let label = normalizeText(
      radio.closest("label")?.textContent || radio.value,
    ).toLowerCase()
    return label === needle || radio.value.toLowerCase() === needle
  })

  if (match && !match.checked) {
    match.click()
    match.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(30)
  }
}

export function getUploadSlotDom(slotKey) {
  let config = UPLOAD_SLOTS[slotKey]
  let slot = document.querySelector(config.slotSelector)
  let input =
    slot?.querySelector(config.inputSelector) ?? null
  let uploadedValue =
    slot?.querySelector('[class*="sc-fAjcbJ"]') ?? null
  let deleteButton =
    slot?.querySelector(
      '[class*="sc-caSCKo"], [class*="sc-iRbamj"], svg',
    ) ?? null

  return { slot, input, uploadedValue, deleteButton }
}

export function hasCoverLetterSlot() {
  return !!getUploadSlotDom("coverLetter").input
}

export async function removeUploadedFile(slotKey) {
  let { uploadedValue, deleteButton } = getUploadSlotDom(slotKey)
  if (uploadedValue && normalizeText(uploadedValue.textContent)) {
    deleteButton?.click()
    await delay.delay(100)
  }
}

export async function uploadResume(
  resumeInfo,
  updateFieldRequiredStatus,
  updateFilledProgress,
) {
  let config = UPLOAD_SLOTS.resume
  await removeUploadedFile("resume")
  let { input } = getUploadSlotDom("resume")
  if (input) {
    await dom.uploadFiles(
      input,
      await answer.fetchPdfAsBlob(resumeInfo),
      updateFieldRequiredStatus,
      updateFilledProgress,
      config.fieldLabel,
      config.required,
    )
  }
}

export async function uploadCoverLetter(
  coverLetter,
  updateFieldRequiredStatus,
  updateFilledProgress,
) {
  let config = UPLOAD_SLOTS.coverLetter
  await removeUploadedFile("coverLetter")
  let { input } = getUploadSlotDom("coverLetter")
  if (input) {
    await dom.uploadFiles(
      input,
      await answer.fetchCoverLetterPdfAsBlob(coverLetter),
      updateFieldRequiredStatus,
      updateFilledProgress,
      config.fieldLabel,
      config.required,
    )
  }
}
