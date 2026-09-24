// @ts-nocheck
/**
 * Tesla — DOM fill operations (inputs, selects, phone, uploads, EEO scroll).
 */

import * as answerMethods from "../../methods/answer.ts"
import * as autofillAnswerPairTracking from "../autofill-answer-pair-tracking.ts"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as urlStore from "../../../store/url.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"
import * as teslaDate from "./date.ts"
import * as phoneValue from "./phone-value.ts"
import * as rules from "./rules.ts"

const getTargetOrTimeout = {
  default: getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

const EEO_LABEL = "equal employee opportunities"
const EEO_DISCLOSURE_PHRASES = [
  "pre-offer invitation to self-identify",
  "voluntary self-identification of disability",
]

export async function fillInputTextField(
  rule,
  value,
  countryAnswer,
  phoneCountryAnswer,
) {
  const labelText = rule.$label.textContent?.trim() || ""
  const input = rule.$input
  const isDateInput = input.className.includes("tds-form-input-date")
  if (isDateInput) return teslaDate.fillTeslaDateField(rule, value)

  const isPhone =
    labelText.toLowerCase().includes("phone") || input.type === "tel"
  if (isPhone) {
    const countrySource = phoneValue.resolveTeslaPhoneCountrySource(
      value,
      phoneCountryAnswer,
      countryAnswer,
    )
    const nationalValue = phoneValue.resolveTeslaPhoneValue(
      value,
      countrySource,
    )
    try {
      const previous = input.previousElementSibling
      if (!previous) {
        console.warn(
          "[fillInputTextField] Previous element not found, falling back to regular input",
        )
        await fillPlainInput(input, nationalValue || value)
        return
      }
      const areaCodeButton = previous.querySelector('button[type="button"]')
      const listbox = previous.querySelector('ul[role="listbox"]')
      if (!areaCodeButton) {
        console.warn(
          "[fillInputTextField] Area code button not found, falling back to regular input",
        )
        await fillPlainInput(input, nationalValue || value)
        return
      }
      areaCodeButton.click()
      await delay.delay(300)
      if (listbox) {
        let attempts = 0
        const maxAttempts = 10
        while (listbox.style.display === "none" && attempts < maxAttempts) {
          await delay.delay(100)
          attempts++
        }
      }
      if (listbox) {
        const items = listbox.querySelectorAll("li")
        const options = Array.from(items).map(
          phoneValue.parseTeslaPhoneCountryOption,
        )
        const match = phoneCountryCode.findPhoneCountryOption(
          countrySource,
          options,
        )
        const found = !!match?.element
        if (match?.element) {
          match.element.click()
          await delay.delay(200)
        }
        if (!found) {
          console.warn(
            `[fillInputTextField] Phone country "${countrySource}" not found in dropdown, falling back to regular input`,
          )
          areaCodeButton.click()
          await delay.delay(200)
          await fillPlainInput(input, nationalValue || value)
          return
        }
      } else {
        console.warn("[fillInputTextField] Listbox not found")
        await fillPlainInput(input, nationalValue || value)
        return
      }
      input.focus()
      await delay.delay(100)
      input.value = nationalValue
      input.dispatchEvent(new Event("input", { bubbles: true }))
      input.dispatchEvent(new Event("change", { bubbles: true }))
      input.blur()
      await delay.delay(100)
      return
    } catch (error) {
      console.error(
        "[fillInputTextField] Error filling phone number:",
        error,
      )
      await fillPlainInput(input, nationalValue || value)
      return
    }
  }
  await fillPlainInput(input, value)
}

async function fillPlainInput(input, value) {
  if (value) {
    input.focus()
    await delay.delay(100)
    input.value = ""
    input.dispatchEvent(new Event("input", { bubbles: true }))
    await delay.delay(100)
    input.value = value
    input.dispatchEvent(new Event("input", { bubbles: true }))
    input.dispatchEvent(new Event("change", { bubbles: true }))
    input.blur()
    await delay.delay(100)
  }
}

function isEeoField(rule) {
  const text = `${rule.label || ""} ${rule.$label?.textContent || ""}`.toLowerCase()
  return text.includes(EEO_LABEL)
}

function normalizeWhitespace(text) {
  return String(text ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

function getCheckboxOptionLabel(checkbox) {
  return normalizeWhitespace(
    checkbox.nextSibling?.textContent ||
      checkbox.nextElementSibling?.textContent ||
      checkbox.value,
  )
}

function findEeoDisclosurePanel() {
  const candidates = Array.from(
    document.querySelectorAll(
      "form div, form section, form article, main div, main section, main article",
    ),
  )
  return (
    candidates.find((node) => {
      if (node.scrollHeight <= node.clientHeight) return false
      const text = node.textContent?.trim().toLowerCase() || ""
      return EEO_DISCLOSURE_PHRASES.every((phrase) => text.includes(phrase))
    }) || null
  )
}

export async function scrollTeslaEeoDisclosurePanel() {
  const panel = findEeoDisclosurePanel()
  if (!panel) return false
  const top = panel.scrollHeight
  if (typeof panel.scrollTo === "function") {
    panel.scrollTo({ top, behavior: "auto" })
  }
  panel.scrollTop = top
  panel.dispatchEvent(new Event("scroll", { bubbles: true }))
  await delay.delay(1e3)
  return true
}

export async function fillSelectField(rule, values) {
  const select = rule.$input
  if (select.tagName === "SELECT") {
    const target = Array.isArray(values) ? values[0] : values
    for (let index = 0; index < select.options.length; index++) {
      const option = select.options[index]
      const text = option.textContent?.trim() || option.value
      if (text === target || option.value === target) {
        select.selectedIndex = index
        select.dispatchEvent(new Event("change", { bubbles: true }))
        await delay.delay(100)
        return
      }
    }
  }
}

export async function fillCheckboxField(rule, values) {
  if (isEeoField(rule)) {
    await scrollTeslaEeoDisclosurePanel()
    return false
  }
  const targets = Array.isArray(values) ? values : [values]
  const checkboxes = rule.$checkboxs || []
  if (!checkboxes.length) return false
  let success = true
  for (const checkbox of checkboxes) {
    const optionLabel = getCheckboxOptionLabel(checkbox)
    const shouldCheck = targets.some(
      (target) =>
        normalizeWhitespace(target) === optionLabel ||
        normalizeWhitespace(target) ===
          normalizeWhitespace(checkbox.value) ||
        target === true ||
        target === "Yes",
    )
    if (checkbox.checked !== shouldCheck) {
      checkbox.click()
      await delay.delay(100)
      success = success && checkbox.checked === shouldCheck
    }
  }
  return success
}

export async function fillRadioGroupFiled(rule, values) {
  const target = Array.isArray(values) ? values[0] : values
  const parent = rule.$radioParent
  const radios = parent
    ? Array.from(parent.querySelectorAll("input[type=radio]"))
    : []
  for (const radio of radios) {
    const value = radio.value || radio.getAttribute("value")
    const nestedLabel = radio.nextElementSibling?.querySelector("label")
    const labelText =
      nestedLabel?.textContent?.trim() ||
      radio.nextElementSibling?.textContent?.trim() ||
      ""
    if (value === target || labelText === target || radio.id === target) {
      radio.click()
      await delay.delay(100)
      return
    }
  }
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  let input = null
  if (
    (input = document.querySelector(
      'input[type="file"][name="personal.resume"]',
    ))
  ) {
    try {
      const fileData = await answerMethods.fetchPdfAsBlob(resumeInfo)
      if (input?.files) {
        input.files = fileData.files
        input.dispatchEvent(
          new Event("change", { bubbles: true, cancelable: false }),
        )
        const fileName = fileData.files[0]?.name || "resume.pdf"
        const verified = await getTargetOrTimeout.default(
          () => {
            const list = document.querySelector(".tds-form-label-files")
            if (list) {
              const items = Array.from(list.querySelectorAll("li"))
              for (const item of items) {
                const span = item.querySelector("span")
                if (span) {
                  const text = span.textContent?.trim() || ""
                  const baseName = fileName.replace(/\.[^/.]+$/, "")
                  if (text.includes(baseName)) return true
                }
              }
            }
            return false
          },
          () => false,
          100,
        )
        if (verified) await delay.delay(200)
        else {
          console.warn(
            `[uploadResume] \u26A0\uFE0F File upload verification failed (waited 10s), but continuing...`,
          )
        }
        updateRequired({ label: "Resume/CV", required: false })
        updateFilled("Resume/CV")
      }
    } catch (error) {
      console.error("[uploadResume] Error uploading resume:", error)
    }
  } else {
    console.warn(`[uploadResume] \u26A0\uFE0F No resume input found`)
  }
}

export async function preFillForm() {
  await delay.delay(500)
}

export function submitHandler(autofillSnapshot) {
  const submitSnapshot = rules.getFormSnapshot()
  autofillAnswerPairTracking.sendAutofillAnswerPairEvent({
    formUrl: urlStore.useUrlStore.getState().currentTabUrl,
    autofillSnapshot,
    submitSnapshot,
    source: "tesla",
  })
}
