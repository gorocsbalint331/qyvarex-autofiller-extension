// @ts-nocheck
/**
 * Amazon ATS DOM fill operations (inputs, selects, phone, resume upload).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as xpath from "../../../core/xpath.js"
import * as dayjs from "dayjs"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutMod from "../../../utils/getTargetOrTimeout.js"
import * as phoneValue from "./phone-value.ts"
import {
  isMainAmazonCountrySelect,
  prefillAmazonCountry,
} from "./country.ts"

const dayjsDefault = { default: dayjs }

function normalizeAnswerValues(value) {
  let values = Array.isArray(value) ? value : [value]
  return values
    .map((item) => String(item ?? "").trim())
    .filter((item) => item.length > 0)
}

function dispatchInputAndChange(el) {
  el.dispatchEvent(
    new Event("input", { bubbles: true, cancelable: true }),
  )
  el.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: true }),
  )
}

function setNativeInputValue(el, value) {
  let proto = Object.getPrototypeOf(el)
  let descriptor = Object.getOwnPropertyDescriptor(proto, "value")
  if (descriptor?.set) descriptor.set.call(el, value)
  else el.value = value
}

function getJQuery() {
  if ("undefined" == typeof window) return null
  let win = window
  return win.jQuery || win.$
}

function dispatchLetterAKeyEvent(el, eventType) {
  el.dispatchEvent(
    new KeyboardEvent(eventType, {
      bubbles: true,
      cancelable: true,
      key: "a",
      keyCode: 65,
      which: 65,
    }),
  )
}

function clickWithMouseEvents(el) {
  el.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  el.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  el.click()
}

function isSelect2Field(selectEl) {
  return (
    selectEl.classList.contains("select2-hidden-accessible") ||
    !!findSelect2Container(selectEl)
  )
}

function findSelect2Container(selectEl) {
  let sibling = selectEl.nextElementSibling
  return sibling?.classList.contains("select2")
    ? sibling
    : selectEl.parentElement?.querySelector(".select2") || null
}

function findSelect2Selection(selectEl) {
  let container = findSelect2Container(selectEl)
  return container
    ? container.querySelector(".select2-selection") || container
    : null
}

function findOpenSelect2SearchField() {
  return document.querySelector(
    ".select2-container--open .select2-search__field, .select2-dropdown .select2-search__field",
  )
}

async function waitForSelect2SearchField() {
  for (let attempt = 0; attempt < 10; attempt++) {
    let field = findOpenSelect2SearchField()
    if (field) return field
    await delay.delay(100)
  }
  return null
}

function getVisibleSelect2Options() {
  return Array.from(
    document.querySelectorAll(
      ".select2-container--open .select2-results__option, .select2-dropdown .select2-results__option",
    ),
  ).filter((option) => {
    let classList = option.classList
    let text = option.textContent?.trim() || ""
    return (
      text.length > 0 &&
      "true" !== option.getAttribute("aria-disabled") &&
      !classList.contains("loading-results") &&
      !classList.contains("select2-results__message")
    )
  })
}

function normalizeChoiceText(text) {
  return text
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim()
}

function findExactSelect2Option(wantedText) {
  return (
    choiceMatch.findExactChoice(
      getVisibleSelect2Options(),
      wantedText,
      (option) => option.textContent,
    ) || null
  )
}

async function waitForExactSelect2Option(wantedText) {
  for (let attempt = 0; attempt < 30; attempt++) {
    let option = findExactSelect2Option(wantedText)
    if (option) return option
    await delay.delay(150)
  }
  return null
}

function typeIntoSelect2Search(searchField, text) {
  setNativeInputValue(searchField, text)
  let $ = getJQuery()
  if ("function" == typeof $)
    try {
      $(searchField).val(text).trigger("input").trigger("keyup")
      return
    } catch {}

  if ("undefined" != typeof InputEvent)
    searchField.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        cancelable: true,
        inputType: "insertText",
        data: text,
      }),
    )
  else dispatchInputAndChange(searchField)

  dispatchLetterAKeyEvent(searchField, "keydown")
  dispatchLetterAKeyEvent(searchField, "keyup")
}

function dispatchEscape(el) {
  el.dispatchEvent(
    new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      key: "Escape",
      keyCode: 27,
    }),
  )
}

function blurWithFocusOut(el) {
  if (el) {
    el.blur?.()
    el.dispatchEvent(new FocusEvent("focusout", { bubbles: true }))
  }
}

export function clickAmazonBlankAreaToCloseDropdowns() {
  let active = document.activeElement
  blurWithFocusOut(active)

  let blankArea =
    document.querySelector(
      ".application-content .question-form.active, .question-form.active, .application-content",
    ) || document.body

  if (blankArea) {
    blankArea.dispatchEvent(
      new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
    )
    blankArea.dispatchEvent(
      new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
    )
    blankArea.click()
  }
}

async function closeSelect2(selectEl, searchField, selectionEl) {
  let $ = getJQuery()
  if ("function" == typeof $)
    try {
      $(selectEl).select2("close")
    } catch {}

  if (searchField) dispatchEscape(searchField)
  if (selectionEl) dispatchEscape(selectionEl)
  dispatchEscape(document)
  blurWithFocusOut(searchField)
  blurWithFocusOut(selectionEl)
  blurWithFocusOut(selectEl)
  document.body?.click()
  await delay.delay(50)
}

function getSelect2DisplayedText(selectEl) {
  let container = findSelect2Container(selectEl)
  let rendered = container?.querySelector(".select2-selection__rendered")
  return (
    rendered?.getAttribute("title") ||
    rendered?.textContent?.trim() ||
    selectEl.selectedOptions?.[0]?.textContent?.trim() ||
    ""
  )
}

async function fillSelect2Field(selectEl, wantedText) {
  let selectionEl = findSelect2Selection(selectEl)
  if (!selectionEl) return false

  clickWithMouseEvents(selectionEl)
  await delay.delay(200)

  let searchField = await waitForSelect2SearchField()
  if (searchField) {
    searchField.focus()
    searchField.dispatchEvent(
      new FocusEvent("focusin", { bubbles: true }),
    )
    typeIntoSelect2Search(searchField, wantedText)
  }

  let option = await waitForExactSelect2Option(wantedText)
  if (!option) {
    await closeSelect2(selectEl, searchField, selectionEl)
    return false
  }

  clickWithMouseEvents(option)
  await delay.delay(300)
  dispatchInputAndChange(selectEl)
  await closeSelect2(selectEl, searchField, selectionEl)

  let displayed = getSelect2DisplayedText(selectEl)
  return (
    isMatched(wantedText, displayed) ||
    choiceMatch.isExactChoiceMatch(
      normalizeChoiceText(displayed),
      normalizeChoiceText(wantedText),
    )
  )
}

export async function fillInputTextField(rule, value, phoneCountryAnswer) {
  let input = rule.$input
  let label = rule.label

  if (!input) {
    console.error("[fillInputTextField] element is null")
    return
  }

  if (label.includes("Email") && input.value) return

  let isPhoneField =
    label.toLowerCase().includes("phone") ||
    label.toLowerCase().includes("mobile")

  if (isPhoneField) {
    let selectedFlag = input.previousElementSibling?.querySelector(
      'div[class="iti__selected-flag"]',
    )
    let countryList = input.previousElementSibling?.querySelector("ul")
    let countrySource = phoneValue.resolveAmazonPhoneCountrySource(
      value,
      phoneCountryAnswer,
    )

    if (countryList && selectedFlag) {
      selectedFlag.click()
      await delay.delay(200)
      let countryOption = phoneCountryCode.findPhoneCountryOptionElement(
        countrySource,
        Array.from(countryList.querySelectorAll("li")),
        { debugLabel: label },
      )
      if (countryOption) {
        countryOption.click()
        await delay.delay(200)
      }
    }

    value = phoneValue.resolveAmazonPhoneValue(value, countrySource)
    input.focus()
    input.value = value

    let proto = Object.getPrototypeOf(input)
    let descriptor = Object.getOwnPropertyDescriptor(proto, "value")
    if (descriptor?.set) descriptor.set.call(input, value)

    input.dispatchEvent(
      new Event("input", { bubbles: true, cancelable: true }),
    )
    input.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: true }),
    )
    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        keyCode: 13,
      }),
    )
    input.dispatchEvent(
      new KeyboardEvent("keyup", {
        bubbles: true,
        cancelable: true,
        keyCode: 13,
      }),
    )
    input.blur()
    return
  }

  let textValue = value
  if (input.placeholder && input.placeholder.includes("YYYY")) {
    textValue =
      label.includes("Today") || value.toLowerCase().includes("immediately")
        ? dayjsDefault.default().format(input.placeholder)
        : dayjsDefault.default(value).format(input.placeholder)
  }

  await fillDefaultInputField(input, textValue)

  let activeDay = xpath.getFirstOrderedNode("//td[@class='active day']")
  if (activeDay)
    activeDay.dispatchEvent(new Event("click", { bubbles: true }))

  let focusedMonth = xpath.getFirstOrderedNode("//td[@class='month focused']")
  if (focusedMonth)
    focusedMonth.dispatchEvent(new Event("click", { bubbles: true }))
}

export async function fillDefaultInputField(el, value) {
  if (!el) {
    console.error("element is null")
    return
  }

  el.focus()
  el.value = value

  let proto = Object.getPrototypeOf(el)
  let descriptor = Object.getOwnPropertyDescriptor(proto, "value")
  if (descriptor?.set) descriptor.set.call(el, value)

  el.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))
  el.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }))
  el.dispatchEvent(
    new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      keyCode: 13,
    }),
  )
  el.dispatchEvent(
    new KeyboardEvent("keyup", {
      bubbles: true,
      cancelable: true,
      keyCode: 13,
    }),
  )
  el.blur()
}

export async function fillSelectField(rule, value) {
  let selectEl = rule.$input
  if (!selectEl) {
    console.error("[fillSelectField] element is null")
    return
  }

  let answers = normalizeAnswerValues(value)
  if (!answers.length) return

  if (isSelect2Field(selectEl)) {
    let filled = await fillSelect2Field(selectEl, answers[0])
    return !!filled && void 0
  }

  let focusEvent = new FocusEvent("focus", {
    bubbles: true,
    cancelable: true,
    view: window,
  })
  selectEl.dispatchEvent(focusEvent)
  selectEl.focus()

  if (selectEl.options && selectEl.options.length > 0) {
    for (let index = 0; index < selectEl.options.length; index++) {
      let option = selectEl.options[index]
      if (
        option &&
        option?.value &&
        option?.text &&
        answers.some((answer) => isMatched(answer, option.text))
      ) {
        option?.click()
        option.dispatchEvent(
          new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
        )
        option.dispatchEvent(
          new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
        )
        option.selected = true

        let changeEvent = new Event("change", {
          bubbles: true,
          cancelable: true,
        })
        selectEl.dispatchEvent(changeEvent)
        selectEl.blur()
        return
      }
    }
  }

  selectEl.blur()
}

export function isMatched(a, b) {
  if (!a || !b || "string" != typeof a || "string" != typeof b) return false

  let left = a
    .replace(/[^a-zA-Z0-9\s]/g, "")
    ?.replace(/\s*\*\s*/g, "")
    ?.toLowerCase()
    .trim()
  let right = b
    .replace(/[^a-zA-Z0-9\s]/g, "")
    ?.replace(/\s*\*\s*/g, "")
    ?.toLowerCase()
    .trim()

  return !!left && !!right && left === right
}

export async function fillRadioCheckField(rule, value) {
  let checkboxes = rule.$checkboxs
  if (!checkboxes || 0 === checkboxes.length) {
    console.error("[fillRadioCheckField] No checkbox elements found")
    return
  }

  let answers = Array.isArray(value) ? value : [value]
  for (let checkbox of checkboxes) {
    let optionText = (
      checkbox.parentNode.innerText ||
      checkbox.parentNode.parentNode.innerText ||
      xpath.getFirstOrderedNode("./preceding::label[1]", checkbox).innerText
    )
      .toLowerCase()
      .trim()
      .replace("*", "")

    if (
      "" !== optionText &&
      answers.some((answer) =>
        choiceMatch.isExactChoiceMatch(
          optionText,
          answer?.toLowerCase().trim(),
        ),
      )
    ) {
      await fillCheckbox(checkbox, true)
      await delay.delay(200)
      return
    }
  }
}

export async function fillCheckbox(el, dispatchClick = true) {
  if (el.checked) return

  el.focus()
  el.dispatchEvent(
    new Event("focus", { bubbles: true, cancelable: false }),
  )
  el.checked = true
  if (dispatchClick)
    el.dispatchEvent(
      new Event("click", { bubbles: true, cancelable: false }),
    )
  el.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: false }),
  )

  let roleCheckbox = xpath.getFirstOrderedNode(
    './ancestor::div[@role="checkbox"]',
    el,
  )
  if (roleCheckbox)
    roleCheckbox.dispatchEvent(
      new Event("click", { bubbles: true, cancelable: false }),
    )

  el.blur()
  el.dispatchEvent(new Event("blur", { bubbles: true, cancelable: false }))
}

export async function uploadResume(
  resumeInfo,
  updateFieldRequiredStatus,
  updateFilledProgress,
) {
  let title = xpath.getFirstOrderedNode("//h2[@class='form-title']")
  if (
    !title ||
    "Upload your resume" !== title.textContent ||
    !title.parentElement?.parentElement?.classList.contains("active")
  )
    return

  let replaceButton = xpath.getFirstOrderedNode(
    '//button[@class="replace-button"]',
  )
  if (replaceButton) {
    replaceButton.click()
    await delay.delay(1000)
  } else {
    console.warn("[uploadResume] Replace button not found")
  }

  let fileInput = document.querySelector(
    'input[type="file"][id="resume_file_input"]',
  )
  if (fileInput)
    try {
      let pdfFiles = await answerMethods.fetchPdfAsBlob(resumeInfo)
      if (fileInput?.files) {
        fileInput.files = pdfFiles.files
        fileInput.dispatchEvent(
          new Event("change", { bubbles: true, cancelable: false }),
        )
        pdfFiles.files[0]?.name

        let uploaded = await getTargetOrTimeoutMod.default(
          () => {
            let indicator = document.querySelector(
              ".upload-complete, [class*='success']",
            )
            return !!indicator
          },
          () => false,
          100,
        )

        if (uploaded) await delay.delay(200)
        else
          console.warn(
            `[uploadResume] \u26A0\uFE0F File upload verification failed (waited 10s), but continuing...`,
          )

        updateFieldRequiredStatus({ label: "Resume/CV", required: false })
        updateFilledProgress("Resume/CV")
      }
    } catch (error) {
      console.error("[uploadResume] Error uploading resume:", error)
    }
  else console.warn(`[uploadResume] \u26A0\uFE0F No resume input found`)
}

export function submitHandler(_snapshot) {}

export { isMainAmazonCountrySelect, prefillAmazonCountry }
