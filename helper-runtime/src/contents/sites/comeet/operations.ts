// @ts-nocheck
/**
 * Comeet — DOM fill operations (inputs, phone, resume, cover letter).
 */

import * as delay from "../../../utils/delay.js"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as observer from "../../methods/observer.ts"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"
import * as comeetAnswer from "./answer.ts"
import * as phoneCountryCode from "./phone-country-code.ts"

const getTargetOrTimeout = {
  default: getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

function getFormGroupLabelText(formGroup) {
  return comeetAnswer.normalizeComeetLabelText(
    formGroup?.querySelector("label.control-label.left")?.textContent,
  )
}

function getFormGroupLabelEl(formGroup) {
  return formGroup?.querySelector("label.control-label.left") || null
}

function parseUploadDom(container) {
  if (!container) {
    return {
      container: null,
      input: null,
      statusRoot: null,
      uploadedState: null,
      deleteButton: null,
    }
  }
  const input = container.querySelector('input[type="file"]')
  const describedBy = input?.getAttribute("aria-describedby")?.trim()
  const statusRoot = describedBy
    ? container.querySelector(`#${CSS.escape(describedBy)}`)
    : container.querySelector('[id$="aria-desc"]')
  const uploadedState = statusRoot?.querySelector("span.secondary")
  const deleteButton = uploadedState?.querySelector(
    "i.removeButton, .removeButton",
  )
  return {
    container,
    input,
    statusRoot,
    uploadedState,
    deleteButton,
  }
}

function getResumeUploadDom() {
  const formGroups = Array.from(document.querySelectorAll(".form-group"))
  const resumeGroup =
    formGroups.find((group) => {
      const input = group.querySelector('input[type="file"]')
      if (!input || input.id === "coverLetter" || input.name === "coverLetter") {
        return false
      }
      const label = getFormGroupLabelText(group).toLowerCase()
      return label.includes("resume") || label.includes("cv")
    }) ||
    formGroups.find((group) => {
      const input = group.querySelector('input[type="file"]')
      return (
        !!input && input.id !== "coverLetter" && input.name !== "coverLetter"
      )
    }) ||
    null
  return parseUploadDom(resumeGroup)
}

export function getComeetCoverLetterUploadDom() {
  const container = document.querySelector(".form-group.field-cover-letter")
  return parseUploadDom(container)
}

function isValidUploadSlot(slot) {
  return (
    !!slot.container &&
    !!slot.input &&
    slot.input.type === "file" &&
    slot.input.classList.contains("inputFiles") &&
    !!slot.statusRoot &&
    slot.input.getAttribute("aria-describedby") === slot.statusRoot.id
  )
}

function isCoverLetterUploadReady() {
  const resume = getResumeUploadDom()
  const coverLetter = getComeetCoverLetterUploadDom()
  return (
    isValidUploadSlot(resume) &&
    isValidUploadSlot(coverLetter) &&
    !!coverLetter.input?.id &&
    !!coverLetter.input?.name &&
    coverLetter.input.id === "coverLetter" &&
    coverLetter.input.name === "coverLetter" &&
    resume.input?.hasAttribute("data-file") === true &&
    coverLetter.input.hasAttribute("data-file")
  )
}

function isCoverLetterRequired() {
  const { container, input } = getComeetCoverLetterUploadDom()
  return comeetAnswer.isComeetRequiredField(input, getFormGroupLabelEl(container))
}

function getUploadedFileName(slot) {
  return Array.from(slot.uploadedState?.childNodes || [])
    .filter((node) => node.nodeType === Node.TEXT_NODE)
    .map((node) => node.textContent || "")
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
}

export function getComeetCoverLetterStatus() {
  if (!isCoverLetterUploadReady()) return ""
  return isCoverLetterRequired() ? "required" : "optional"
}

export function getComeetCoverLetterRequiredField() {
  const status = getComeetCoverLetterStatus()
  return status
    ? { label: "Cover Letter", required: status === "required" }
    : null
}

export function checkCoverLetter() {
  dom.postCoverLetterStatus(getComeetCoverLetterStatus())
}

export async function fillInputTextField(input, value, phoneCountryCodeAnswer) {
  const isPhone =
    input.type === "tel" ||
    input.classList.contains("iti__tel-input") ||
    input.id?.toLowerCase().includes("phone") ||
    input.id?.toLowerCase().includes("tel")
  const finalValue = isPhone
    ? phoneCountryCode.formatComeetPhoneValue(value, phoneCountryCodeAnswer)
    : value
  input.focus()
  await delay.delay(100)
  input.value = ""
  input.dispatchEvent(new Event("input", { bubbles: true }))
  await delay.delay(100)
  input.value = finalValue
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  input.blur()
  await delay.delay(100)
}

function clickLikeUser(el) {
  el.dispatchEvent(
    new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  el.dispatchEvent(
    new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  el.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
}

export async function fillPhoneCountryCode(input, answerText) {
  try {
    if (!answerText) return
    const itiRoot = input.closest(".iti")
    if (!itiRoot) return
    const selectedBtn = itiRoot.querySelector("button.iti__selected-country")
    if (!selectedBtn) return

    selectedBtn.focus()
    await delay.delay(50)
    clickLikeUser(selectedBtn)
    await delay.delay(300)

    let dropdown = itiRoot.querySelector(".iti__dropdown-content")
    let attempts = 0
    while (
      (!dropdown || dropdown.classList.contains("iti__hide")) &&
      attempts < 15
    ) {
      await delay.delay(100)
      dropdown = itiRoot.querySelector(".iti__dropdown-content")
      attempts++
    }
    if (!dropdown || dropdown.classList.contains("iti__hide")) {
      clickLikeUser(selectedBtn)
      await delay.delay(500)
      dropdown = itiRoot.querySelector(".iti__dropdown-content")
    }
    if (!dropdown || dropdown.classList.contains("iti__hide")) return

    const countryList = dropdown.querySelector("ul.iti__country-list")
    if (!countryList) {
      clickLikeUser(selectedBtn)
      return
    }

    const entries = Array.from(
      countryList.querySelectorAll("li.iti__country"),
    ).map((li) => ({
      element: li,
      option: phoneCountryCode.parseComeetPhoneCountryOption(li),
    }))
    const matchedOption = phoneCountryCode.findComeetPhoneCountryOption(
      answerText,
      entries.map(({ option }) => option),
    )
    const matchedEl = entries.find(
      ({ option }) => option === matchedOption,
    )?.element

    if (!matchedOption || !matchedEl) {
      clickLikeUser(selectedBtn)
      return
    }

    const currentTitle = selectedBtn.getAttribute("title") || ""
    if (currentTitle.includes(matchedOption.countryName)) {
      clickLikeUser(selectedBtn)
      return
    }

    matchedEl.scrollIntoView({ block: "center" })
    await delay.delay(150)
    matchedEl.focus()
    clickLikeUser(matchedEl)
    await delay.delay(300)
    await delay.delay(100)

    const afterTitle = selectedBtn.getAttribute("title") || ""
    if (!afterTitle.includes(matchedOption.countryName)) {
      matchedEl.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Enter",
          code: "Enter",
          bubbles: true,
        }),
      )
      await delay.delay(200)
    }
  } catch {
    // ignore phone country fill errors
  }
}

export async function fillTextareaField(input) {
  input.focus()
  await delay.delay(100)
  input.value = ""
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  input.blur()
  await delay.delay(100)
}

export async function fillSelectField(rule, value) {
  const input = rule.$input
  const answer = Array.isArray(value) ? value[0] : value

  if (input.tagName === "SELECT") {
    const select = input
    for (let i = 0; i < select.options.length; i++) {
      const option = select.options[i]
      const text = option.textContent?.trim() || option.value
      if (text === answer || option.value === answer) {
        select.selectedIndex = i
        select.dispatchEvent(new Event("change", { bubbles: true }))
        await delay.delay(100)
        return
      }
    }
    return
  }

  if (input.classList.contains("dropdown-toggle")) {
    input.click()
    await delay.delay(300)
    const dropdown = input.closest("div.dropdown")
    if (!dropdown) return
    const menu = dropdown.querySelector("ul.dropdown-menu")
    if (!menu) return
    for (const li of menu.querySelectorAll("li")) {
      const title = li.querySelector(".option-title")?.textContent?.trim()
      if (title === answer) {
        const link = li.querySelector("a")
        if (link) {
          link.click()
          await delay.delay(200)
          return
        }
      }
    }
    input.click()
    await delay.delay(100)
  }
}

export async function fillCheckboxField(rule, value) {
  try {
    const input = rule.$input
    if (!input) return

    if (rule.options && rule.options.length > 0) {
      const answers = Array.isArray(value) ? value : [value]
      const fieldset = input.closest("fieldset")
      if (!fieldset) return
      const checkboxes = fieldset.querySelectorAll('input[type="checkbox"]')
      for (const checkbox of checkboxes) {
        let optionLabel = ""
        if (checkbox.id) {
          const label = document.querySelector(
            `label[for="${CSS.escape(checkbox.id)}"]`,
          )
          if (label) {
            const title = label.querySelector(".option-title")
            optionLabel =
              title?.textContent?.trim() || label.textContent?.trim() || ""
          }
        }
        const shouldCheck = answers.some(
          (item) =>
            String(item).trim() === optionLabel ||
            String(item).trim() === checkbox.value,
        )
        if (shouldCheck && !checkbox.checked) {
          checkbox.click()
          await delay.delay(100)
        } else if (!shouldCheck && checkbox.checked) {
          checkbox.click()
          await delay.delay(100)
        }
      }
      return
    }

    const raw = Array.isArray(value) ? value[0] : value
    const shouldCheck =
      raw === true ||
      raw === "Yes" ||
      raw === "true" ||
      String(raw).toLowerCase() === "yes"
    if (input.checked !== shouldCheck) {
      input.click()
      await delay.delay(100)
    }
  } catch {
    // ignore checkbox fill errors
  }
}

export async function fillRadioGroupFiled(rule, value) {
  const answer = Array.isArray(value) ? value[0] : value
  const name = rule.$input?.getAttribute("name") || ""
  const radios = document.querySelectorAll(
    `input[type="radio"][name="${CSS.escape(name)}"]`,
  )
  for (const radio of Array.from(radios)) {
    let optionLabel = ""
    if (radio.id) {
      const label = document.querySelector(
        `label[for="${CSS.escape(radio.id)}"]`,
      )
      if (label?.classList.contains("checkboxLabel")) {
        const title = label.querySelector(".option-title")
        if (title) optionLabel = title.textContent?.trim() || ""
      }
      if (!optionLabel && label) {
        optionLabel = label.textContent?.trim() || ""
      }
    }
    if (!optionLabel) {
      const rawValue = radio.value || radio.getAttribute("value")
      if (
        rawValue &&
        rawValue !== "[object Object]" &&
        rawValue !== "on"
      ) {
        optionLabel = rawValue
      }
    }
    if (optionLabel === answer) {
      radio.click()
      await delay.delay(100)
      return
    }
  }
}

export async function uploadResume(resumeInfo, onRequired, onFilled) {
  const input = getResumeUploadDom().input
  if (!input) return
  const blob = await answerMethods.fetchPdfAsBlob(resumeInfo)
  await dom.uploadFiles(input, blob, onRequired, onFilled, "Resume/CV")
  await getTargetOrTimeout.default(
    () => {
      const slot = getResumeUploadDom()
      return slot.uploadedState && slot.deleteButton ? slot.uploadedState : null
    },
    () => false,
    100,
  )
}

export async function removeResume() {
  const { deleteButton, uploadedState } = getResumeUploadDom()
  if (deleteButton && getUploadedFileName({ uploadedState })) {
    deleteButton.click()
    await delay.delay(500)
  }
}

export async function uploadCoverLetter(coverLetter, onRequired, onFilled) {
  if (!isCoverLetterUploadReady()) return false

  let slot = getComeetCoverLetterUploadDom()
  const existingName = getUploadedFileName(slot)
  if (existingName) {
    if (!slot.deleteButton) return false
    slot.deleteButton.click()
    const cleared = await observer.waitForCondition(
      () => {
        const next = getComeetCoverLetterUploadDom()
        return !getUploadedFileName(next) && !next.deleteButton
      },
      {
        timeout: 5000,
        interval: 100,
        observeTarget: slot.container || document.body,
      },
    )
    if (!cleared) return false
    slot = getComeetCoverLetterUploadDom()
  }

  if (!slot.input) return false

  await dom.uploadFiles(
    slot.input,
    await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
    onRequired,
    onFilled,
    "Cover Letter",
  )

  const expectedName = `${coverLetter.coverLetterName}.pdf`.toLowerCase()
  return await observer.waitForCondition(
    () => {
      const next = getComeetCoverLetterUploadDom()
      const name = getUploadedFileName(next).toLowerCase()
      return (
        !!next.uploadedState &&
        !!next.deleteButton &&
        !!name &&
        name.includes(expectedName)
      )
    },
    {
      timeout: 5000,
      interval: 100,
      observeTarget: slot.container || document.body,
    },
  )
}

export async function preFillForm() {
  await delay.delay(500)
}

export function sanitizeElementIds() {
  const originalIds = new Map()
  const elements = document.querySelectorAll(
    "input[id], select[id], textarea[id], label[id], legend[id], fieldset[id]",
  )
  for (const el of elements) {
    const id = el.id
    if (!id) continue
    const hasBadChars = /["[\]':\n\r\t]/.test(id)
    const hasNewline = id.includes("\n") || id.includes("\r")
    const hasLongWhitespace = /\s/.test(id) && id.length > 50
    if (hasBadChars || hasNewline || hasLongWhitespace) {
      originalIds.set(el, id)
      try {
        el.id = `__sanitized_${Date.now()}_${btoa(encodeURIComponent(id.substring(0, 100)))}`
      } catch {
        el.id = `__sanitized_${Date.now()}_${Math.random().toString(36).substring(2)}`
      }
    }
  }
  return originalIds
}

export function restoreElementIds(originalIds) {
  for (const [el, id] of originalIds) {
    el.id = id
  }
}
