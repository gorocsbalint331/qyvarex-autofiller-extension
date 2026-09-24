// @ts-nocheck
/**
 * Adobe Careers DOM fill operations (inputs, datepicker, selects, resume).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as defaultInput from "../../crawler/fill-utils/input.ts"
import * as answer from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function parseFillDate(raw) {
  if (raw.match(/^\d{4}-\d{2}-\d{2}$/)) return new Date(raw)
  if (raw.match(/^\d{4}-\d{2}$/)) return new Date(`${raw}-01`)
  if (raw.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    const [month, day, year] = raw.split("/")
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  }
  return new Date(raw)
}

async function waitForDatepicker() {
  for (let attempt = 0; attempt < 3; attempt++) {
    const popper = document.querySelector(
      ".react-datepicker-popper, .react-datepicker__portal",
    )
    if (popper) return popper
    await delay.delay(200)
  }
  return null
}

function findDayNode(datepicker, year, month, day) {
  const dayClass = `react-datepicker__day--${String(day).padStart(3, "0")}`
  let dayNode = datepicker.querySelector(
    `.${dayClass}:not(.react-datepicker__day--outside-month)`,
  )
  if (dayNode) return dayNode

  const days = datepicker.querySelectorAll(
    ".react-datepicker__day:not(.react-datepicker__day--outside-month)",
  )
  for (const node of days) {
    const label = node.getAttribute("aria-label") || ""
    if (
      label.includes(`${month}/${day}/${year}`) ||
      label.includes(`${day}th, ${year}`)
    ) {
      return node
    }
  }
  return null
}

async function selectMonthIfNeeded(datepicker, month) {
  const monthView = datepicker.querySelector(
    ".react-datepicker__month-read-view--selected-month",
  )
  if (!monthView) return

  const wanted = MONTH_NAMES[month - 1]
  const current = monthView.textContent?.trim() || ""
  if (current === wanted) return

  monthView.click()
  await delay.delay(200)
  const dropdown = datepicker.querySelector(".react-datepicker__month-dropdown")
  if (!dropdown) return

  const option = Array.from(
    dropdown.querySelectorAll(".react-datepicker__month-option"),
  ).find((node) => node.textContent?.trim() === wanted)
  if (option) {
    option.click()
    await delay.delay(200)
  }
}

export async function fillDateField(input, rawValue) {
  if (!input) return

  const parsed = parseFillDate(rawValue)
  if (!parsed || isNaN(parsed.getTime())) return

  const year = parsed.getFullYear()
  const month = parsed.getMonth() + 1
  const day = parsed.getDate()

  input.focus()
  input.click()
  await delay.delay(500)

  const datepicker = await waitForDatepicker()
  if (!datepicker) return

  const yearWrapper = datepicker.querySelector(".react-datepicker__year-wrapper")
  if (yearWrapper) {
    const maxNav = 5
    let navCount = 0
    while (navCount < maxNav) {
      const yearNodes = yearWrapper.querySelectorAll(
        ".react-datepicker__year-text:not(.react-datepicker__year-text--disabled)",
      )
      const years = Array.from(yearNodes).map((node) =>
        parseInt(node.textContent?.trim() || "0"),
      )
      const minYear = Math.min(...years)
      const maxYear = Math.max(...years)

      if (year >= minYear && year <= maxYear) break

      if (year < minYear) {
        const prev = datepicker.querySelector(
          'button.react-datepicker__navigation--previous[aria-label="Previous Year"]',
        )
        if (prev && !prev.disabled) {
          prev.click()
          await delay.delay(300)
          navCount++
          continue
        }
      }
      break
    }

    const yearNode = Array.from(
      yearWrapper.querySelectorAll(
        ".react-datepicker__year-text:not(.react-datepicker__year-text--disabled)",
      ),
    ).find((node) => node.textContent?.trim() === year.toString())
    if (!yearNode) return

    yearNode.click()
    await delay.delay(300)
    await selectMonthIfNeeded(datepicker, month)

    const dayNode = findDayNode(datepicker, year, month, day)
    if (!dayNode) return

    dayNode.click()
    await delay.delay(200)
    input.blur()
    document.body.click()
    await delay.delay(100)
    return
  }

  const dayNode = findDayNode(datepicker, year, month, day)
  if (!dayNode) return

  dayNode.click()
  await delay.delay(200)
  input.blur()
  document.body.click()
  await delay.delay(100)
}

export async function fillInputTextField(input, value) {
  if (!input || !value || value.trim() === "") return

  const id = input.id?.toLowerCase() || ""
  const inDatepicker = input.closest(".react-datepicker__input-container")
  const isDateField = id.includes("date") || inDatepicker != null

  if (isDateField && input instanceof HTMLInputElement) {
    await fillDateField(input, value)
  } else {
    await defaultInput.fillDefaultInputField(input, value)
  }
}

function findSelectOption(options, answer, label) {
  const wanted = String(answer ?? "").trim()
  if (!wanted) return

  const candidates = options.filter(
    (option) => option.value !== "" || option.textContent.trim().length > 0,
  )

  const exact = choiceMatch.findExactChoice(
    candidates,
    wanted,
    (option) => option.textContent,
    (option) => option.value,
  )
  if (exact) return exact

  const isPhoneCode = label.toLowerCase().includes("phone code")
  if (!isPhoneCode) return

  const code =
    wanted.match(/\+\s*(\d{1,4})\b/)?.[1] ?? wanted.match(/\b(\d{1,4})\b/)?.[1]
  if (!code) return

  const withPlus = `+${code}`
  return candidates.find((option) => {
    const text = option.textContent
    return (
      text.includes(withPlus) ||
      text.includes(`(${code})`) ||
      text.includes(`+ ${code}`) ||
      RegExp(`\\+?${code}\\b`).test(text)
    )
  })
}

export async function fillSelectField(rule, answers) {
  if (!answers || answers.length === 0) return

  const value = answers[0]
  const select = rule.$input
  if (!select) return

  const option = findSelectOption(Array.from(select.options), value, rule.label)
  if (!option) return

  select.value = option.value
  select.dispatchEvent(new Event("change", { bubbles: true }))
  select.dispatchEvent(new Event("input", { bubbles: true }))
}

export async function fillCheckboxField(rule, answers) {
  const checkboxes = rule.$checkboxs || []
  if (!checkboxes.length) return

  for (const answer of answers) {
    for (const checkbox of checkboxes) {
      const label = checkbox.closest("label")
      if (!label) continue

      const clone = label.cloneNode(true)
      const nested = clone.querySelector('input[type="checkbox"]')
      if (nested) nested.remove()

      const text = clone.textContent?.trim() || ""
      if (choiceMatch.isExactChoiceMatch(text, answer)) {
        if (!checkbox.checked) checkbox.click()
        break
      }
    }
  }
}

export async function fillRadioGroupField(rule, answers) {
  const wanted = answers?.[0]
  if (!wanted) return

  const parent = rule.$radioParent
  if (!parent) return

  const radios = Array.from(parent.querySelectorAll('input[type="radio"]'))
  let match = null

  for (const radio of radios) {
    if (radio.disabled) continue
    const label = radio.closest("label")
    const textNode = label?.querySelector("span.radio-text")
    const text = textNode?.textContent?.trim() || ""
    if (text.toLowerCase().trim() === wanted.toLowerCase().trim()) {
      match = radio
      break
    }
  }

  if (!match || match.checked) return

  const label = match.closest("label")
  match.checked = true
  match.dispatchEvent(new Event("change", { bubbles: true }))
  match.dispatchEvent(new Event("click", { bubbles: true }))
  match.dispatchEvent(new Event("input", { bubbles: true }))
  if (label) label.click()
}

export async function addEducation() {
  const button = xpath.getFirstOrderedNodeSafe(
    './/button[contains(@id, "array-button-add-educationData")]',
    document.body,
  )
  if (button) {
    button.click()
    await delay.delay(500)
  }
}

export async function fillAgreementCheckbox() {
  const ids = ["emailAgreement", "smsOptIn", "agreementCheck"]
  for (const id of ids) {
    const checkbox = document.querySelector(
      `input[aria-describedby="${id}"][type="checkbox"]`,
    )
    if (checkbox && !checkbox.checked) {
      checkbox.click()
      await delay.delay(200)
    }
  }
}

export async function uploadResume(resumeInfo, onRequired, onFilled) {
  const input =
    document.querySelector('.resume-upload-wrapper input[type="file"]') ||
    document.querySelector('input[type="file"]')
  if (!input) return

  await dom.uploadFiles(
    input,
    await answer.fetchPdfAsBlob(resumeInfo),
    onRequired,
    onFilled,
    "Resume/CV",
  )
}
