// @ts-nocheck
/**
 * JazzHR DOM fill operations (inputs, selects, resume).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as delay from "../../../utils/delay.js"

const DISABILITY_SIGNATURE_DATE_ID = "resumator-eeoc_disability_date-value"

function closeDisabilityDatepicker(input) {
  const win = window
  const $ = win.jQuery || win.$
  if (typeof $ === "function" && $.fn?.datepicker) {
    $(input).datepicker("hide")
    console.info("[JazzHR][disability-signature] closed datepicker", {
      fieldId: input.id,
      method: "jquery-ui",
    })
  } else {
    console.info("[JazzHR][disability-signature] datepicker close fallback", {
      fieldId: input.id,
      method: "blur",
    })
  }
  input.blur()
}

export async function fillInputTextField(input, value) {
  if (input && value && value.trim() !== "") {
    input.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
    await inputUtils.fillDefaultInputField(input, value)
    if (input instanceof HTMLInputElement && input.id === DISABILITY_SIGNATURE_DATE_ID) {
      closeDisabilityDatepicker(input)
    }
  }
}

export async function fillSelectField(rule, value) {
  if (!value || value.length === 0) return
  const first = value[0]
  rule.label
  const select = rule.$input
  if (!select) return

  select.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  const options = Array.from(select.options)
  const match = options.find(
    (option) =>
      option.textContent.trim().toLowerCase() === first.toLowerCase() ||
      option.value.toLowerCase() === first.toLowerCase(),
  )
  if (match) {
    select.value = match.value
    select.dispatchEvent(new Event("change", { bubbles: true }))
    select.dispatchEvent(new Event("input", { bubbles: true }))
  }
}

export async function fillCheckboxField(rule, value) {
  rule.label
  const checkboxes = rule.$checkboxs || []
  rule.options
  if (checkboxes.length) {
    if (checkboxes[0]) {
      checkboxes[0].scrollIntoView({ behavior: "smooth", block: "center" })
      await delay.delay(100)
    }
    for (const choice of value) {
      let matched = false
      for (const checkbox of checkboxes) {
        const label = checkbox.closest("label")
        if (label) {
          const clone = label.cloneNode(true)
          const nestedInput = clone.querySelector('input[type="checkbox"]')
          if (nestedInput) nestedInput.remove()
          const text = clone.textContent?.trim() || ""
          if (choiceMatch.isExactChoiceMatch(text, choice)) {
            if (!checkbox.checked) checkbox.click()
            matched = true
            break
          }
        }
      }
      void matched
    }
  }
}

export async function fillRadioGroupField(rule, value) {
  rule.label
  const first = value?.[0]
  if (!first) return
  const radioParent = rule.$radioParent
  if (!radioParent) return

  radioParent.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)
  const radios = Array.from(radioParent.querySelectorAll('input[type="radio"]'))
  let match = null
  for (const radio of radios) {
    if (radio.disabled) continue
    const label = radio.closest("label")
    let text = ""
    const radioText = label?.querySelector("span.radio-text")
    if (radioText) {
      text = radioText.textContent?.trim() || ""
    } else if (label) {
      const clone = label.cloneNode(true)
      const nestedInput = clone.querySelector('input[type="radio"]')
      if (nestedInput) nestedInput.remove()
      text = clone.textContent?.trim() || ""
    }
    if (text.toLowerCase().trim() === first.toLowerCase().trim()) {
      match = radio
      break
    }
  }

  if (match) {
    const label = match.closest("label")
    if (label) {
      ;(label.textContent || "").trim()
    }
    if (!match.checked) {
      match.checked = true
      match.dispatchEvent(new Event("change", { bubbles: true }))
      match.dispatchEvent(new Event("click", { bubbles: true }))
      match.dispatchEvent(new Event("input", { bubbles: true }))
      if (label) label.click()
    }
  }
}

export async function uploadResume(resumeInfo, onRequired, onFilled) {
  let input = document.getElementById("resumator-resume-value")
  const wrapper = document.getElementById("resumator-resume-upload-wrapper")
  if (!input || (wrapper && wrapper.classList.contains("none"))) {
    const chooseUpload = document.getElementById("resumator-choose-upload")
    if (chooseUpload) {
      chooseUpload.click()
      await delay.delay(300)
      input = document.getElementById("resumator-resume-value")
    }
  }
  if (!input) input = document.querySelector('input[type="file"]')
  if (input) {
    await dom.uploadFiles(
      input,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      onRequired,
      onFilled,
      "Resume/CV",
    )
  }
}
