// @ts-nocheck
/**
 * YCombinator — DOM fill operations (inputs, selects, phone, resume).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as defaultInput from "../../crawler/fill-utils/input.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as phoneValue from "./phone-value.ts"

function normalizeWhitespace(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizePhoneOptionText(value) {
  return normalizeWhitespace(value).replace(/\((\+\d+)\)/g, "$1")
}

function getOptionLabel(element) {
  return normalizePhoneOptionText(
    element.getAttribute("aria-label") ||
      element.getAttribute("title") ||
      element.textContent,
  )
}

function getVisiblePhoneCountryOptions() {
  return Array.from(
    document.querySelectorAll(
      '[role="option"], [cmdk-item], [data-value], [class*="option"], li, button',
    ),
  ).filter((element) => {
    let label = getOptionLabel(element)
    if (!label || !/\+\d{1,4}\b/.test(label)) return false
    let rect = element.getBoundingClientRect()
    return rect.width > 0 && rect.height > 0
  })
}

async function waitForPhoneCountryOption(wanted) {
  let startedAt = Date.now()
  while (Date.now() - startedAt < 1500) {
    let options = getVisiblePhoneCountryOptions()
    if (options.length) {
      let labels = options.map(getOptionLabel)
      let matchedLabel = phoneValue.findYCombinatorPhoneCountryOptionLabel(
        wanted,
        labels,
      )
      if (matchedLabel) {
        let index = labels.indexOf(matchedLabel)
        if (index >= 0) return options[index]
      }
    }
    await delay.delay(100)
  }
  return null
}

async function typeIntoInput(input, text) {
  let nativeSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )?.set
  let setValue = (next) => {
    if (nativeSetter) nativeSetter.call(input, next)
    else input.value = next
    input.dispatchEvent(new Event("input", { bubbles: true }))
  }

  setValue("")
  await delay.delay(50)

  let typed = ""
  for (let char of text) {
    setValue((typed += char))
    await delay.delay(30)
  }
  await delay.delay(150)
}

async function fillPhoneCountryCodeInput(input, value) {
  input.focus()
  input.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }))
  input.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  input.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
  input.click()

  for (let searchTerm of phoneValue.getYCombinatorPhoneCountrySearchTerms(
    value,
  )) {
    await typeIntoInput(input, searchTerm)
    let option = await waitForPhoneCountryOption(value)
    if (option) {
      option.scrollIntoView({ behavior: "auto", block: "nearest" })
      option.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
      option.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
      option.click()
      input.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(150)
      return
    }
  }

  await typeIntoInput(input, "")
  input.blur()
}

async function fillLocationAutocomplete(input, value) {
  input.focus()
  let valueDescriptor = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )
  let nativeSetter = valueDescriptor?.set
  if (nativeSetter) nativeSetter.call(input, value)
  else input.value = value

  try {
    let inputEvent = new window.InputEvent("input", {
      bubbles: true,
      cancelable: true,
      inputType: "insertText",
      data: value,
    })
    input.dispatchEvent(inputEvent)
  } catch {
    input.dispatchEvent(new Event("input", { bubbles: true }))
  }

  let option = await new Promise((resolve) => {
    let startedAt = Date.now()
    let intervalId = window.setInterval(() => {
      let found = document.querySelector(
        '#PlacesAutocomplete__autocomplete-container [role="option"]',
      )
      if (found) {
        window.clearInterval(intervalId)
        resolve(found)
      } else if (Date.now() - startedAt > 5000) {
        window.clearInterval(intervalId)
        resolve(null)
      }
    }, 100)
  })

  if (option) {
    option.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
    option.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
    option.click()
    input.dispatchEvent(new Event("change", { bubbles: true }))
  }
}

async function fillInputTextField(rule, value, phoneCountryCodeAnswer) {
  let input = rule.$input
  if (!input || !value || value.trim() === "") return

  input.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)

  let isPhoneCountryCode = rule.label
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .includes("phonecountrycode")

  if (isPhoneCountryCode) {
    if (input instanceof HTMLInputElement) {
      await fillPhoneCountryCodeInput(input, value)
      return
    }
    value = phoneValue.resolveYCombinatorPhoneCountryCodeValue(
      value,
      rule.options,
    )
  } else if (rule.label.toLowerCase().includes("phone")) {
    value = phoneValue.resolveYCombinatorPhoneValue(
      value,
      phoneCountryCodeAnswer,
    )
  }

  let label = (rule.label || "").toLowerCase()
  if (label.includes("location") && input instanceof HTMLInputElement) {
    await fillLocationAutocomplete(input, value)
    return
  }

  await defaultInput.fillDefaultInputField(input, value)
}

async function fillSelectField(rule, values) {
  if (!values || values.length === 0) return

  let value = values[0]
  let input = rule.$input
  if (!input) return

  let isNativeSelect =
    typeof HTMLSelectElement !== "undefined" &&
    input instanceof HTMLSelectElement
  if (!isNativeSelect) {
    await fillInputTextField(rule, value)
    return
  }

  input.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)

  let options = Array.from(input.options)
  let matched = options.find(
    (option) =>
      option.textContent.trim().toLowerCase() === value.toLowerCase() ||
      option.value.toLowerCase() === value.toLowerCase(),
  )
  if (matched) {
    input.value = matched.value
    input.dispatchEvent(new Event("change", { bubbles: true }))
    input.dispatchEvent(new Event("input", { bubbles: true }))
  }
}

async function fillCheckboxField(rule, values) {
  let checkboxes = rule.$checkboxs || []
  if (!checkboxes.length) return

  if (checkboxes[0]) {
    checkboxes[0].scrollIntoView({ behavior: "smooth", block: "center" })
    await delay.delay(100)
  }

  for (let value of values) {
    for (let checkbox of checkboxes) {
      let label = checkbox.closest("label")
      if (!label) continue

      let clone = label.cloneNode(true)
      let nestedCheckbox = clone.querySelector('input[type="checkbox"]')
      if (nestedCheckbox) nestedCheckbox.remove()

      let labelText = clone.textContent?.trim() || ""
      if (choiceMatch.isExactChoiceMatch(labelText, value)) {
        if (!checkbox.checked) checkbox.click()
        break
      }
    }
  }
}

async function fillRadioGroupField(rule, values) {
  let wanted = values?.[0]
  if (!wanted) return

  let parent = rule.$radioParent
  if (!parent) return

  parent.scrollIntoView({ behavior: "smooth", block: "center" })
  await delay.delay(100)

  let radios = Array.from(parent.querySelectorAll('input[type="radio"]'))
  let matched = null

  for (let radio of radios) {
    if (radio.disabled) continue

    let labelText = ""
    let forLabel = parent.querySelector(`label[for="${radio.id}"]`)
    if (forLabel) {
      labelText = forLabel.textContent?.trim() || ""
    } else {
      let closestLabel = radio.closest("label")
      if (closestLabel) {
        let clone = closestLabel.cloneNode(true)
        let nestedRadio = clone.querySelector('input[type="radio"]')
        if (nestedRadio) nestedRadio.remove()
        labelText = clone.textContent?.trim() || ""
      } else {
        let sibling = radio.nextElementSibling
        if (sibling && sibling.tagName === "LABEL") {
          labelText = sibling.textContent?.trim() || ""
        }
      }
    }

    if (choiceMatch.isExactChoiceMatch(labelText, wanted)) {
      matched = radio
      break
    }
  }

  if (matched) {
    let forLabel = parent.querySelector(`label[for="${matched.id}"]`)
    let clickTarget = forLabel || matched.closest("label")
    if (!matched.checked) {
      matched.checked = true
      matched.dispatchEvent(new Event("change", { bubbles: true }))
      matched.dispatchEvent(new Event("click", { bubbles: true }))
      matched.dispatchEvent(new Event("input", { bubbles: true }))
      if (clickTarget) {
        clickTarget.click()
        await delay.delay(50)
      }
    }
  }
}

async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  let input = xpath.getFirstOrderedNodeSafe(
    './/input[@type="file"]',
    document.body,
  )
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

export {
  fillCheckboxField,
  fillInputTextField,
  fillRadioGroupField,
  fillSelectField,
  uploadResume,
}
