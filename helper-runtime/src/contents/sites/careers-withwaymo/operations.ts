// @ts-nocheck
/**
 * Careers With Waymo DOM fill operations (text, selectize, checkbox, resume, education).
 */

import * as checkboxUtils from "../../crawler/utils/checkbox.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as delay from "../../../utils/delay.js"
import * as waymoAnswer from "./answer.ts"
import * as waymoRules from "./rules.ts"

function normalizeAnswerList(value) {
  if (Array.isArray(value)) {
    return value
      .map((item) => String(item ?? "").trim())
      .filter((item) => item !== "")
  }
  const text = String(value ?? "").trim()
  return text ? [text] : []
}

function matchesYesNoBoolean(choiceText, answers) {
  if (!answers.length) return false
  const choice = choiceText.toLowerCase()
  const first = answers[0].toLowerCase()
  return (
    (first === "true" && choice === "yes") ||
    (first === "false" && choice === "no")
  )
}

function isPhoneInput(input, label) {
  if (!(input instanceof HTMLInputElement)) return false
  const haystack = [
    label,
    input.type,
    input.id,
    input.name,
    input.autocomplete,
    input.placeholder,
    input.className,
  ]
    .join(" ")
    .toLowerCase()
  return (
    input.type === "tel" ||
    input.classList.contains("iti__tel-input") ||
    /\b(phone|mobile|tel)\b/.test(haystack)
  )
}

function normalizeCountryHint(country) {
  const text = String(country ?? "").trim().toLowerCase()
  if (text === "ca" || text.includes("canada")) return "ca"
  if (
    text === "us" ||
    text === "usa" ||
    text.includes("united states")
  ) {
    return "us"
  }
  return ""
}

function resolveItiCountryCode(dialCode, country) {
  const compact = dialCode.replace(/\s+/g, "")
  if (compact === "+1") {
    return normalizeCountryHint(country) === "ca" ? "ca" : "us"
  }
  return ""
}

function setNativeInputValue(input, value) {
  const descriptor = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    "value",
  )?.set
  if (descriptor) {
    descriptor.call(input, value)
    return
  }
  input.value = value
}

function clickElement(element) {
  element.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  element.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  element.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
}

async function selectItiCountry(input, dialCode, country) {
  const countryCode = resolveItiCountryCode(dialCode, country)
  if (!countryCode) return

  const iti = input.closest(".iti")
  if (!(iti instanceof HTMLElement)) return

  const selectedButton = iti.querySelector("button.iti__selected-country")
  if (!selectedButton) return

  selectedButton.focus()
  await delay.delay(50)
  clickElement(selectedButton)
  await delay.delay(300)

  const option = iti.querySelector(
    `li.iti__country[data-country-code="${countryCode}"]`,
  )
  if (option) {
    option.scrollIntoView({ block: "center" })
    await delay.delay(100)
    clickElement(option)
    await delay.delay(200)
  }
}

async function fillPhoneInput(input, value, dialCode, country) {
  input.focus()
  await delay.delay(100)
  setNativeInputValue(input, "")
  dom.triggerEvents(input, ["input"])
  await delay.delay(100)
  setNativeInputValue(input, value)
  dom.triggerEvents(input, ["input"])
  await delay.delay(200)
  if (dialCode) await selectItiCountry(input, dialCode, country)
  input.blur()
  await delay.delay(100)
  return true
}

async function fillInputTextField(input, value, dialCode, country, label) {
  if (!input) return false
  if (isPhoneInput(input, label)) {
    return await fillPhoneInput(input, value, dialCode, country)
  }
  await dom.fillInputTextField(input, value)
  return true
}

function getSelectizeControl(select) {
  if (!select.classList.contains("selectized")) return null

  const next = select.nextElementSibling
  if (
    next instanceof HTMLElement &&
    next.classList.contains("selectize-control")
  ) {
    return next
  }

  const parent = select.parentElement
  const nested = parent?.querySelector(":scope > .selectize-control")
  return nested ?? null
}

function normalizeOptionText(text) {
  return text.replace(/\s+/g, " ").trim().toLowerCase()
}

function getSelectizeInstance(select, control) {
  const fromSelect = select.selectize
  if (fromSelect) return fromSelect
  const fromControl = control.selectize
  return fromControl || null
}

function findMatchingSelectizeOption(options, answers) {
  const candidates = options.filter((option) => {
    if (
      option.classList.contains("create") ||
      option.classList.contains("optgroup-header")
    ) {
      return false
    }
    const dataValue = option.getAttribute("data-value")
    return dataValue != null && dataValue !== ""
  })
  if (!candidates.length) return null

  const normalizedAnswers = answers
    .map((answer) => normalizeOptionText(answer))
    .filter(Boolean)

  for (const answer of normalizedAnswers) {
    const exact = candidates.find(
      (option) => normalizeOptionText(option.textContent || "") === answer,
    )
    if (exact) return exact
  }

  for (const answer of normalizedAnswers) {
    const partial = candidates.find((option) =>
      normalizeOptionText(option.textContent || "").includes(answer),
    )
    if (partial) return partial
  }

  return candidates[0] ?? null
}

async function waitForSelectizeOptions(select, control, timeoutMs, pollMs) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    const dropdownSelector =
      ".selectize-dropdown .selectize-dropdown-content"
    const content =
      control.querySelector(dropdownSelector) ||
      control.parentElement?.querySelector(dropdownSelector) ||
      select.parentElement?.querySelector(dropdownSelector) ||
      Array.from(document.querySelectorAll(dropdownSelector)).find(
        (node) => node.offsetParent !== null,
      ) ||
      null

    if (content) {
      const options = Array.from(
        content.querySelectorAll(".option[data-selectable][data-value]"),
      ).filter((option) => {
        if (option.classList.contains("optgroup-header")) return false
        const dataValue = option.getAttribute("data-value")
        return dataValue != null && dataValue !== ""
      })
      if (options.length > 0) return options
    }
    await delay.delay(pollMs)
  }
  return null
}

async function fillSelectizeField(select, control, answers) {
  const searchInput = control.querySelector(".selectize-input input")
  if (!searchInput) return false

  for (const answer of answers) {
    const query = answer.trim()
    if (!query) continue

    searchInput.focus()
    searchInput.dispatchEvent(
      new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
    )
    await delay.delay(50)
    setNativeInputValue(searchInput, "")
    searchInput.dispatchEvent(new Event("input", { bubbles: true }))
    await delay.delay(30)
    setNativeInputValue(searchInput, query)
    searchInput.dispatchEvent(new Event("input", { bubbles: true }))
    searchInput.dispatchEvent(
      new KeyboardEvent("keyup", {
        bubbles: true,
        cancelable: true,
        key: query.slice(-1) || "a",
      }),
    )

    const options = await waitForSelectizeOptions(select, control, 3000, 100)
    if (!options || options.length === 0) continue

    const matched = findMatchingSelectizeOption(options, [answer])
    if (!matched) continue

    const dataValue = matched.getAttribute("data-value")?.trim() || ""
    const selectize = getSelectizeInstance(select, control)

    if (selectize && dataValue) {
      if (typeof selectize.setValue === "function") {
        selectize.setValue(dataValue)
      } else if (typeof selectize.addItem === "function") {
        selectize.addItem(dataValue)
      }

      for (let i = 0; i < 10; i++) {
        if (select.value && select.value !== "") {
          selectize.close?.()
          searchInput.blur()
          return true
        }
        await delay.delay(100)
      }
    }

    matched.scrollIntoView({ block: "center" })
    matched.dispatchEvent(
      new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        button: 0,
      }),
    )
    matched.dispatchEvent(
      new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        button: 0,
      }),
    )
    matched.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        button: 0,
      }),
    )
    await delay.delay(100)

    for (let i = 0; i < 10; i++) {
      if (select.value && select.value !== "") {
        searchInput.blur()
        return true
      }
      await delay.delay(100)
    }
  }

  searchInput.blur()
  return false
}

async function fillSelectField(rule, value) {
  const answers = normalizeAnswerList(value)
  const select = rule.$input
  if (!(select instanceof HTMLSelectElement) || answers.length === 0) {
    return false
  }

  const control = getSelectizeControl(select)
  if (control) return await fillSelectizeField(select, control, answers)

  for (const option of Array.from(select.options)) {
    const text = (option.textContent || option.value || "").trim()
    if (
      text &&
      answers.some(
        (answer) =>
          answerMethods.isMatched(text, answer) ||
          answerMethods.isMatched(option.value, answer),
      )
    ) {
      select.value = option.value
      option.selected = true
      dom.triggerEvents(select, ["focus", "input", "change", "blur"])
      return true
    }
  }

  return false
}

async function fillCheckboxField(rule, value) {
  const answers = normalizeAnswerList(value)
  if (!answers.length) return false

  const checkboxes = rule.$checkboxs || []
  if (!checkboxes.length) return false

  let filled = false
  const form = waymoRules.getFormContainer()
  for (const checkbox of checkboxes) {
    const choiceText = waymoAnswer.getChoiceText(
      checkbox,
      form ?? document,
    )
    const matched =
      answers.some((answer) => answerMethods.isMatched(choiceText, answer)) ||
      matchesYesNoBoolean(choiceText, answers)
    if (matched) {
      await checkboxUtils.fillCheckbox(checkbox, true)
      filled = true
    }
  }
  return filled
}

async function fillRadioGroupFiled(rule, value) {
  const answers = normalizeAnswerList(value)
  if (!answers.length) return false

  const parent = rule.$radioParent
  if (!parent) return false

  const radios = Array.from(parent.querySelectorAll('input[type="radio"]'))
  if (!radios.length) return false

  const form = waymoRules.getFormContainer()
  for (const radio of radios) {
    const choiceText = waymoAnswer.getChoiceText(radio, form ?? document)
    const matched =
      answers.some((answer) => answerMethods.isMatched(choiceText, answer)) ||
      matchesYesNoBoolean(choiceText, answers)
    if (matched) {
      await checkboxUtils.fillCheckbox(radio, true)
      return true
    }
  }
  return false
}

async function removeResume() {
  const form = waymoRules.getFormContainer()
  const input = form?.querySelector('input[type="file"]') ?? null
  if (!input) return false
  input.value = ""
  dom.triggerEvents(input, ["input", "change", "blur"])
  return true
}

async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const form = waymoRules.getFormContainer()
  const input = form?.querySelector('input[type="file"]') ?? null
  if (!input) return false

  try {
    const blob = await answerMethods.fetchPdfAsBlob(resumeInfo)
    await dom.uploadFiles(
      input,
      blob,
      updateRequired,
      updateFilled,
      "Resume/CV",
      true,
    )
    await delay.delay(300)
    return true
  } catch {
    return false
  }
}

async function uploadCoverLetter(coverLetter, updateRequired, updateFilled) {
  const input = waymoRules.getCoverLetterInput()
  if (!input) return false

  try {
    const blob = await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter)
    await dom.uploadFiles(
      input,
      blob,
      updateRequired,
      updateFilled,
      "Cover Letter",
    )
    await delay.delay(300)
    return true
  } catch {
    return false
  }
}

async function removeExtraEducationSections() {
  const form = waymoRules.getFormContainer()
  const section = form?.querySelector(".education-section")
  if (!(section instanceof HTMLElement)) return

  let remaining = 20
  while (remaining-- > 0) {
    const removeButton = section.querySelector(
      'button.education-question-remove-education[data-action="call-to-action--greenhouse--education#removeEducation"]',
    )
    if (!removeButton) break
    removeButton.click()
    await delay.delay(200)
  }
}

async function preFillForm() {
  let form = waymoRules.getFormContainer()
  if (!form) {
    const applyLink = document.querySelector(
      'a.button.button4[href="#apply"]',
    )
    if (!applyLink) return
    applyLink.click()
    for (let i = 0; i < 30; i++) {
      await delay.delay(100)
      form = waymoRules.getFormContainer()
      if (form) break
    }
  }

  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "start" })
    await removeExtraEducationSections()
  }
}

async function addEducationSection(count) {
  if (count <= 0) return

  const form = waymoRules.getFormContainer()
  const educationRoot = form?.querySelector(".greenhouse-education")
  if (!(educationRoot instanceof HTMLElement)) return

  const getGroupCount = () =>
    educationRoot.querySelectorAll(".education-question-group").length
  const toAdd = count - getGroupCount()
  if (toAdd <= 0) return

  const addButton = educationRoot.querySelector(
    'button[data-action*="call-to-action--greenhouse--education#addEducation"]',
  )
  if (addButton) {
    for (let i = 0; i < toAdd; i++) {
      addButton.click()
      await delay.delay(300)
    }
  }
}

async function addEmploymentSection(_count) {}

export {
  addEducationSection,
  addEmploymentSection,
  fillCheckboxField,
  fillInputTextField,
  fillRadioGroupFiled,
  fillSelectField,
  preFillForm,
  removeExtraEducationSections,
  removeResume,
  uploadCoverLetter,
  uploadResume,
}
