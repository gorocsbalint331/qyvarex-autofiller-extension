// @ts-nocheck
/**
 * Careers Toasttab DOM fill operations (select, phone, resume, pre-fill).
 */

import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as delay from "../../../utils/delay.js"
import * as toasttabAnswer from "./answer.ts"

export { fillCheckBoxesField } from "../../methods/dom.ts"

async function fillSelectField(rule, value) {
  const values = Array.isArray(value) ? value : [value]
  const options = values.map((item) => String(item ?? "")).filter(Boolean)
  if (options.length === 0) return

  if (rule.label === "Phone Country Code") {
    await fillPhoneCountryCode(rule, options[0])
    return
  }

  const input = rule.$input
  if (input && input.tagName === "SELECT") {
    dom.fillSelectField(input, options)
  }
}

async function fillPhoneField(input, value) {
  if (!input || !value) return

  input.focus()
  await delay.delay(50)
  input.value = ""
  input.dispatchEvent(new Event("input", { bubbles: true }))
  await delay.delay(50)
  input.value = value
  input.dispatchEvent(new Event("input", { bubbles: true }))
  await delay.delay(100)
  input.blur()
  await delay.delay(100)
}

async function fillPhoneCountryCode(rule, answer) {
  const input = rule.$input
  const iti = input?.closest(".iti")
  if (!iti) return

  const countryItems = Array.from(iti.querySelectorAll("li.iti__country"))
  const countries = countryItems.map((item) => {
    const name =
      item
        .querySelector(".iti__country-name")
        ?.textContent?.replace(/\s*\(\+\d+\)\s*$/, "")
        .trim() || ""
    const dialRaw =
      item.querySelector(".iti__dial-code")?.textContent ||
      item.getAttribute("data-dial-code") ||
      ""
    const dialCode = `+${dialRaw.replace(/\D/g, "")}`
    return {
      label: `${name} ${dialCode}`.trim(),
      countryCode: item.getAttribute("data-country-code") || "",
      dialCode,
    }
  })

  const countryCode = toasttabAnswer.findCountryCodeForAnswer(
    answer,
    countries,
  )
  if (!countryCode) return

  const selected = iti.querySelector(
    'li.iti__country[aria-selected="true"], li.iti__country.iti__active',
  )
  if (selected && selected.getAttribute("data-country-code") === countryCode) {
    return
  }

  clickElement(input)
  await delay.delay(300)

  let dropdown = iti.querySelector(".iti__dropdown-content")
  let attempts = 0
  while (
    (!dropdown || dropdown.classList.contains("iti__hide")) &&
    attempts < 15
  ) {
    await delay.delay(100)
    dropdown = iti.querySelector(".iti__dropdown-content")
    attempts++
  }
  if (!dropdown || dropdown.classList.contains("iti__hide")) return

  const countryList = dropdown.querySelector("ul.iti__country-list")
  if (!countryList) {
    clickElement(input)
    return
  }

  const target = countryList.querySelector(
    `li.iti__country[data-country-code="${countryCode}"]`,
  )
  if (!target) {
    clickElement(input)
    return
  }

  target.scrollIntoView({ block: "center" })
  await delay.delay(100)
  clickElement(target)
  await delay.delay(200)
}

function clickElement(element) {
  element.dispatchEvent(
    new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
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
}

async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const input = document.querySelector(
    '.form-template-field-job-questions input[type="file"], form input[type="file"]',
  )
  if (!input) {
    console.warn("[CareersToasttab] No resume input found")
    return
  }
  await dom.uploadFiles(
    input,
    await answerMethods.fetchPdfAsBlob(resumeInfo),
    updateRequired,
    updateFilled,
    "Resume/CV",
  )
}

async function removeResume() {
  const button = document.querySelector(
    'button[aria-label="Delete"], button[aria-label="Remove"], button[aria-label="Remove file"], [class*="remove-file"], [class*="delete-file"]',
  )
  if (button) {
    button.click()
    await delay.delay(500)
  }
}

async function preFillForm() {
  const applyLink = document.querySelector(
    'a.button[href="#applynow"], a[href="#applynow"]',
  )
  if (applyLink) {
    applyLink.click()
    await delay.delay(800)
  }
}

export {
  fillPhoneField,
  fillSelectField,
  preFillForm,
  removeResume,
  uploadResume,
}
