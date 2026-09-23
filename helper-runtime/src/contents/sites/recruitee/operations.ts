// @ts-nocheck
/**
 * Recruitee — field fill, phone country/number, uploads, agreements.
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as fiber from "./fiber.ts"
import * as recruiteePhone from "./phone-country-code.js"

const COVER_LETTER_INPUT_SELECTOR =
  'input[type="file"][name="candidate.coverLetterFile"], input[type="file"][data-cy="candidate.coverLetterFile"]'

function getCoverLetterInput() {
  return document.querySelector(COVER_LETTER_INPUT_SELECTOR)
}

function getCoverLetterUploadDom() {
  const input = getCoverLetterInput()
  const switchButton = document.querySelector(
    'button[data-cy="cover-letter-switch-button"]',
  )
  const section =
    input?.closest("section") || switchButton?.closest("section")
  const uploadedValue = section?.querySelector("div[title]")
  const deleteButton = section?.querySelector('button[aria-label="Remove"]')
  return {
    section,
    input,
    switchButton,
    uploadedValue,
    deleteButton,
  }
}

function hasCoverLetterSlot() {
  const { section, input, switchButton } = getCoverLetterUploadDom()
  return !!section && !!input && !!switchButton
}

async function fillInputTextField(input, value) {
  if (input && value && value.trim() !== "") {
    input.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
    await inputUtils.fillDefaultInputField(input, value)
  }
}

async function fillSelectField(rule, values) {
  if (!values || values.length === 0) return

  const selectedValue = values[0]
  rule.label
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

function extractDialCodeFromCountryAnswer(value) {
  const dialCode = recruiteePhone.getRecruiteeDialCode(value)
  if (!dialCode) return ""
  const countryText = recruiteePhone.normalizeRecruiteePhoneText(
    value.replace(/\+\s*\d{1,4}(?!\d)/, ""),
  )
  return countryText ? dialCode : ""
}

async function fillRecruiteePhoneCountryField(rule, answer) {
  const phoneState = rule.__recruiteePhoneState
  if (rule.__recruiteePhoneField !== "country" || !phoneState) return false

  phoneState.dialCode = undefined
  phoneState.explicitCountryAttempted = false
  phoneState.explicitCountryResolved = false

  const countryAnswer = recruiteePhone.resolveRecruiteePhoneCountryCode(answer)
  if (!countryAnswer) return false

  phoneState.explicitCountryAttempted = true
  const countries = rule.__recruiteePhoneCountries || []

  if (countries.length > 0) {
    const matched = recruiteePhone.findRecruiteePhoneCountryOption(
      countryAnswer,
      countries,
    )
    if (!matched) return false

    const liveButton = getLiveElementById(rule.$input)
    if (!liveButton) return false

    try {
      const result = await fiber.selectRecruiteePhoneCountryViaFiber(
        liveButton,
        matched.iso2,
      )
      if (!result.success) return false
    } catch {
      return false
    }

    const dialCode = recruiteePhone.getRecruiteeDialCode(matched.dialCode)
    if (!dialCode) return false
    phoneState.dialCode = dialCode
    phoneState.explicitCountryResolved = true
    return true
  }

  const dialCode = extractDialCodeFromCountryAnswer(countryAnswer)
  if (!dialCode) return false
  phoneState.dialCode = dialCode
  phoneState.explicitCountryResolved = true
  return true
}

async function fillRecruiteePhoneNumberField(rule, value) {
  const phoneState = rule.__recruiteePhoneState
  if (rule.__recruiteePhoneField !== "number" || !phoneState || !value?.trim()) {
    return false
  }

  const input = rule.$input
  const livePhoneInput = getLivePhoneInput(input)
  if (
    !livePhoneInput ||
    (phoneState.explicitCountryAttempted &&
      !phoneState.explicitCountryResolved)
  ) {
    return false
  }

  let dialCode = phoneState.dialCode || ""
  if (!dialCode) {
    dialCode = await readCurrentDialCode(livePhoneInput)
    if (dialCode) phoneState.dialCode = dialCode
  }

  if (dialCode && hasConflictingDialPrefix(value, dialCode)) {
    if (!phoneState.explicitCountryResolved) {
      await fillInputTextField(livePhoneInput, `+${value.replace(/\D/g, "")}`)
      return true
    }
    return false
  }

  await fillInputTextField(
    livePhoneInput,
    dialCode
      ? recruiteePhone.formatRecruiteePhoneValue(value, dialCode)
      : value,
  )
  return true
}

function getLiveElementById(element) {
  if (!element?.id) return null
  const live = document.querySelector(`#${escapeCssSelector(element.id)}`)
  return live?.id === element.id ? live : null
}

function hasConflictingDialPrefix(value, dialCode) {
  const prefix = value.trim().match(/^\+\s*(\d+)/)?.[1]
  return !!(prefix && !prefix.startsWith(dialCode))
}

function getLivePhoneInput(input) {
  if (input.id) {
    const live = document.querySelector(`#${escapeCssSelector(input.id)}`)
    if (live?.type === "tel" && live.name === "candidate.phone") return live
  }
  return document.querySelector('input[type="tel"][name="candidate.phone"]')
}

async function readCurrentDialCode(phoneInput) {
  if (!phoneInput.id) return ""
  const countryButton = document.querySelector(
    `#${escapeCssSelector(`country-select-${phoneInput.id}`)}`,
  )
  if (!countryButton) return ""

  try {
    const result = await fiber.getRecruiteePhoneCountriesViaFiber(countryButton)
    if (!result.success || !result.currentIso2 || !result.options) return ""
    const matched = result.options.find(
      (option) =>
        option.iso2.toUpperCase() === result.currentIso2.toUpperCase(),
    )
    return matched
      ? recruiteePhone.getRecruiteeDialCode(matched.dialCode)
      : ""
  } catch {
    return ""
  }
}

function escapeCssSelector(value) {
  return typeof CSS !== "undefined" && typeof CSS.escape === "function"
    ? CSS.escape(value)
    : value.replace(/([ #;?%&,.+*~':"!^$[\]()=>|/@])/g, "\\$1")
}

async function fillCheckboxField(rule, values) {
  rule.label
  const checkboxes = rule.$checkboxs || []
  if (!checkboxes.length) return

  const first = checkboxes[0]
  const searchRoot =
    rule.$label?.closest("div")?.closest("div") ||
    first.closest("section") ||
    first.closest("div")?.closest("div") ||
    document.body

  if (first) {
    first.scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
  }

  for (const value of values) {
    for (const checkbox of checkboxes) {
      if (checkbox.disabled) continue

      const forLabel = searchRoot.querySelector(`label[for="${checkbox.id}"]`)
      let labelText = ""

      if (forLabel) {
        const span = forLabel.querySelector("span:last-child")
        labelText = span?.textContent?.trim() || ""
      } else {
        const closestLabel = checkbox.closest("label")
        if (closestLabel) {
          const span = closestLabel.querySelector("span:last-child")
          labelText = span?.textContent?.trim() || ""
          if (!labelText) {
            const clone = closestLabel.cloneNode(true)
            const nestedInput = clone.querySelector('input[type="checkbox"]')
            if (nestedInput) nestedInput.remove()
            labelText = clone.textContent?.trim() || ""
          }
        }
      }

      if (labelText && choiceMatch.isExactChoiceMatch(labelText, value)) {
        if (!checkbox.checked) {
          checkbox.required = true
          checkbox.dispatchEvent(new Event("change", { bubbles: true }))
          checkbox.dispatchEvent(new Event("click", { bubbles: true }))
          checkbox.dispatchEvent(new Event("input", { bubbles: true }))
          const clickTarget = forLabel || checkbox.closest("label")
          if (clickTarget) {
            clickTarget.click()
            await delay.delay(50)
          }
        }
        break
      }
    }
  }
}

async function fillRadioGroupField(rule, values) {
  rule.label
  const selectedValue = values?.[0]
  if (!selectedValue) return

  const parent = rule.$radioParent
  if (!parent) return

  parent.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)

  const radios = Array.from(parent.querySelectorAll('input[type="radio"]'))
  let matchedRadio = null

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

    if (labelText.toLowerCase().trim() === selectedValue.toLowerCase().trim()) {
      matchedRadio = radio
      break
    }
  }

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

async function agreementCheckboxField() {
  const checkboxes = xpath.getOrderedNodesSafe(
    './/input[@type="checkbox"][@id="candidateTextingConsent"] | .//section[@data-cy="segment-legal-agreements"]//input[@type="checkbox"]',
    document.body,
  )
  if (checkboxes.length) {
    for (const checkbox of checkboxes) {
      if (!checkbox.checked) {
        checkbox.checked = true
        checkbox.dispatchEvent(new Event("change", { bubbles: true }))
        checkbox.dispatchEvent(new Event("click", { bubbles: true }))
        checkbox.dispatchEvent(new Event("input", { bubbles: true }))
        await delay.delay(50)
      }
    }
  }
}

async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const label = xpath.getFirstOrderedNodeSafe(
    './/label[contains(@for, "input-candidate.cv")]',
    document.body,
  )
  const section = label?.closest("section")
  const input = xpath.getFirstOrderedNodeSafe('.//input[@type="file"]', section)
  if (input) {
    await dom.uploadFiles(
      input,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
  }
}

async function uploadCoverLetter(coverLetter, updateRequired, updateFilled) {
  const uploadDom = getCoverLetterUploadDom()
  if (!uploadDom.section || !uploadDom.input) return false

  const existingName =
    uploadDom.uploadedValue?.getAttribute("title")?.trim() ||
    uploadDom.uploadedValue?.textContent?.trim() ||
    ""
  if (existingName && uploadDom.deleteButton) {
    uploadDom.deleteButton.click()
    await delay.delay(300)
  }

  const input = getCoverLetterInput()
  if (!input) return false

  await dom.uploadFiles(
    input,
    await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
    updateRequired,
    updateFilled,
    "Cover Letter",
  )
  await delay.delay(300)

  const uploadedName =
    getCoverLetterUploadDom().uploadedValue?.getAttribute("title")?.trim() ||
    getCoverLetterUploadDom().uploadedValue?.textContent?.trim() ||
    ""
  return (
    uploadedName.length > 0 &&
    uploadedName.toLowerCase().includes(coverLetter.coverLetterName.toLowerCase())
  )
}

export {
  agreementCheckboxField,
  fillCheckboxField,
  fillInputTextField,
  fillRadioGroupField,
  fillRecruiteePhoneCountryField,
  fillRecruiteePhoneNumberField,
  fillSelectField,
  getCoverLetterInput,
  getCoverLetterUploadDom,
  hasCoverLetterSlot,
  uploadCoverLetter,
  uploadResume,
}
