// @ts-nocheck
/**
 * Polymer — text/select fill and resume/cover-letter upload operations.
 */

import * as delay from "../../../utils/delay.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"

const UPLOADER_KINDS = {
  resume: {
    field: "resume",
    action: "attach resume/cv",
  },
  "cover-letter": {
    field: "cover letter",
    action: "attach file",
  },
}

function normalizeText(value) {
  return (value || "").replace(/\s+/g, " ").trim().toLowerCase()
}

function findUploader(kind) {
  const uploaders = Array.from(
    document.querySelectorAll('div[class*="FormUploader"]'),
  )
  for (const uploader of uploaders) {
    const input = uploader.querySelector('input[type="file"]')
    if (!input) continue
    const labels = Array.from(uploader.querySelectorAll("label"))
    const fieldLabel = labels.find(
      (label) => label.getAttribute("for") !== input.id,
    )
    const actionLabel = labels.find(
      (label) => label.getAttribute("for") === input.id,
    )
    const fieldText = normalizeText(fieldLabel?.textContent)
    const actionText = normalizeText(actionLabel?.textContent)
    const config = UPLOADER_KINDS[kind]
    if (fieldText !== config.field || actionText !== config.action) continue
    const requiredLabel = uploader.querySelector(
      '[class*="FormLabel_RequiredLabel"]',
    )
    return {
      input,
      required:
        input.required ||
        normalizeText(requiredLabel?.textContent).includes("required"),
    }
  }
  return null
}

export function findUploaderInput(kind) {
  return findUploader(kind)?.input || null
}

export function getPolymerCoverLetterStatus() {
  const uploader = findUploader("cover-letter")
  if (!uploader) return ""
  return uploader.required ? "required" : "optional"
}

export async function simulateUserClick(element, shouldFocus = false) {
  element.dispatchEvent(
    new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  await delay.delay(50)
  element.dispatchEvent(
    new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  element.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  if (shouldFocus) element.focus()
}

export async function fillTextField(input, value) {
  if (!input || !value) return
  input.focus()
  await delay.delay(100)
  const proto =
    input instanceof HTMLTextAreaElement
      ? window.HTMLTextAreaElement.prototype
      : window.HTMLInputElement.prototype
  const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (setter) {
    setter.call(input, value)
  } else {
    input.value = value
  }
  input.dispatchEvent(
    new Event("input", {
      bubbles: true,
    }),
  )
  input.dispatchEvent(
    new Event("change", {
      bubbles: true,
    }),
  )
  input.dispatchEvent(
    new Event("blur", {
      bubbles: true,
    }),
  )
  await delay.delay(100)
}

export async function fillReactSelect(input, value) {
  if (!input || !value) return
  const target = Array.isArray(value) ? value[0] : value
  if (!target) {
    console.warn("[Polymer fillReactSelect] Empty value provided")
    return
  }
  try {
    await simulateUserClick(input, true)
    await delay.delay(500)
    const menu = document.querySelector(".form-select-ui__menu")
    if (menu) {
      const options = menu.querySelectorAll(".form-select-ui__option")
      for (const option of Array.from(options)) {
        const optionText = option.textContent?.trim().toLowerCase() || ""
        if (optionText === target.toLowerCase()) {
          await simulateUserClick(option)
          await delay.delay(300)
          return
        }
      }
      console.warn(
        `[Polymer fillReactSelect] No matching option found for: ${target}`,
      )
      await simulateUserClick(document.body)
      await delay.delay(100)
    } else {
      console.warn("[Polymer fillReactSelect] Menu not found after clicking input")
    }
  } catch (error) {
    console.error("[Polymer fillReactSelect] Error:", error)
  }
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const input = findUploaderInput("resume")
  if (!input) {
    console.warn("[Polymer uploadResume] File input not found")
    return
  }
  try {
    await dom.uploadFiles(
      input,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
  } catch (error) {
    console.error("[Polymer uploadResume] Error:", error)
  }
}

export async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
) {
  const uploader = findUploader("cover-letter")
  if (!uploader) {
    console.warn("[Polymer uploadCoverLetter] File input not found")
    return false
  }
  try {
    await dom.uploadFiles(
      uploader.input,
      await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
      updateRequired,
      updateFilled,
      "Cover Letter",
      uploader.required,
    )
    return true
  } catch (error) {
    console.error("[Polymer uploadCoverLetter] Error:", error)
    return false
  }
}
