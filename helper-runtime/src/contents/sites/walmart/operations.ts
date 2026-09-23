// @ts-nocheck
/**
 * Walmart DOM fill operations — text, date picker, select, checkbox, resume.
 */

import * as filler from "../../shared/filler.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"
import * as walmartDate from "./date.ts"
import * as matching from "./matching.ts"

const getTargetOrTimeout = {
  default: getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

function normalizeSpace(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeLower(value) {
  return normalizeSpace(value).toLowerCase()
}

function firstValue(value) {
  return Array.isArray(value) ? value[0] : value
}

function setNativeValue(element, value) {
  const proto =
    element instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : HTMLInputElement.prototype
  const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (setter) setter.call(element, value)
  else element.value = value
}

function dispatchInputChange(element) {
  element.dispatchEvent(new Event("input", { bubbles: true }))
  element.dispatchEvent(new Event("change", { bubbles: true }))
}

function clickWithPointer(element) {
  const Pointer = "function" == typeof PointerEvent ? PointerEvent : MouseEvent
  element.dispatchEvent(
    new Pointer("pointerdown", { bubbles: true, cancelable: true }),
  )
  element.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  element.dispatchEvent(
    new Pointer("pointerup", { bubbles: true, cancelable: true }),
  )
  element.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  element.click()
}

function isVisible(element) {
  if (!element) return false
  const el = element
  if (el.hidden || "true" === element.getAttribute("aria-hidden")) return false
  const style = window.getComputedStyle(element)
  if ("none" === style.display || "hidden" === style.visibility) return false
  const rect = el.getBoundingClientRect()
  return rect.width > 0 || rect.height > 0
}

function isMonthYearDateCombobox(input) {
  return (
    input instanceof HTMLInputElement &&
    "combobox" === input.getAttribute("role") &&
    "grid" === input.getAttribute("aria-haspopup") &&
    /date\s*\(mm\/(?:dd\/)?yyyy\)/i.test(input.getAttribute("aria-label") ?? "")
  )
}

function isFullDateField(input) {
  const text = normalizeSpace(
    [
      input.getAttribute("aria-label"),
      input.closest("label, div, fieldset")?.textContent,
    ].join(" "),
  )
  return /date\s*\(mm\/dd\/yyyy\)/i.test(text)
}

function findCalendarPickerButton(input) {
  let parent = input.parentElement
  let depth = 0
  while (parent && depth < 6) {
    const button = parent.querySelector('button[aria-label*="calendar picker" i]')
    if (button && isVisible(button)) return button
    parent = parent.parentElement
    depth += 1
  }
  return null
}

function findVisibleDateApplication() {
  return Array.from(document.querySelectorAll('[role="application"]')).find(isVisible) ?? null
}

function readCalendarHeader(application) {
  const header = Array.from(application.querySelectorAll("span, div"))
    .map((node) => normalizeSpace(node.textContent))
    .find((text) =>
      RegExp(
        `^(${walmartDate.WALMART_MONTH_NAMES.join("|")})\\s+\\d{4}$`,
        "i",
      ).test(text),
    )
  if (!header) return null
  const [monthName, yearText] = header.split(/\s+/)
  const monthIndex = walmartDate.WALMART_MONTH_NAMES.findIndex(
    (name) => name.toLowerCase() === monthName.toLowerCase(),
  )
  const year = Number(yearText)
  return monthIndex < 0 || !Number.isFinite(year)
    ? null
    : { month: monthIndex + 1, year }
}

function monthDelta(from, to) {
  return (to.year - from.year) * 12 + (to.month - from.month)
}

async function fillDateViaCalendar(input, rawValue) {
  const target = walmartDate.getWalmartMonthYearPickerTarget(rawValue)
  if (!target) return false

  const displayValue = isFullDateField(input)
    ? target.fullDateDisplayValue
    : target.displayValue
  const day = isFullDateField(input) ? target.day : 1

  if (normalizeSpace(input.value) === displayValue) return true

  input.scrollIntoView({ block: "center", inline: "nearest" })
  input.focus()
  await delay.delay(50)

  const pickerButton = findCalendarPickerButton(input)
  if (!pickerButton) return false

  if ("true" !== input.getAttribute("aria-expanded")) {
    clickWithPointer(pickerButton)
    await delay.delay(150)
  }

  let application = findVisibleDateApplication()
  let header = application ? readCalendarHeader(application) : null
  if (!application || !header) return false

  const delta = monthDelta(header, target)
  if (Math.abs(delta) > 360) return false

  const navLabel = delta > 0 ? "Next month" : "Previous month"
  for (let step = 0; step < Math.abs(delta); step += 1) {
    const navButton = application.querySelector(`button[aria-label="${navLabel}"]`)
    if (!navButton) return false
    clickWithPointer(navButton)
    await delay.delay(35)
    application = findVisibleDateApplication()
    header = application ? readCalendarHeader(application) : null
    if (!application || !header) return false
  }

  const ariaLabel = walmartDate.getWalmartCalendarDayAriaLabel(
    target.month,
    target.year,
    day,
  )
  const dayButton = application.querySelector(
    `button[aria-label="${ariaLabel}"], button[aria-label$="${ariaLabel}"]`,
  )
  if (!dayButton) return false

  clickWithPointer(dayButton)
  await delay.delay(150)
  input.blur()
  await delay.delay(50)
  return normalizeSpace(input.value) === displayValue
}

function getCheckboxOptionLabel(input) {
  return (
    normalizeSpace(input.closest("label")?.textContent) ||
    normalizeSpace(input.nextElementSibling?.textContent) ||
    normalizeSpace(input.value) ||
    normalizeSpace(input.id)
  )
}

function isTruthyAnswer(value) {
  const lower = normalizeLower(firstValue(value))
  return (
    true === firstValue(value) ||
    "true" === lower ||
    "yes" === lower ||
    "y" === lower ||
    "1" === lower ||
    "agree" === lower ||
    lower.includes("accept")
  )
}

function normalizeAnswerList(value) {
  return (Array.isArray(value) ? value : [value]).map(normalizeLower).filter(Boolean)
}

function shouldCheckOption(rule, input, answer) {
  if (isTruthyAnswer(answer)) return true
  const label = getCheckboxOptionLabel(input) || rule.label
  const answers = normalizeAnswerList(answer)
  return answers.some((item) => matching.matchesWalmartOption(label, item))
}

function isChecked(input) {
  const aria =
    input.getAttribute("aria-checked") ||
    input.closest('[role="checkbox"]')?.getAttribute("aria-checked")
  return input.checked || "true" === aria
}

function getClickTargets(input) {
  const candidates = [
    input.closest("label"),
    input.closest('[role="checkbox"]'),
    input.parentElement,
    input,
  ]
  const seen = new Set()
  return candidates.filter((node) => {
    if (!node || seen.has(node)) return false
    seen.add(node)
    return true
  })
}

async function setCheckedState(input, checked) {
  if (isChecked(input) === checked) return true
  for (const target of getClickTargets(input)) {
    clickWithPointer(target)
    await delay.delay(120)
    if (isChecked(input) === checked) return true
  }
  return false
}

async function fillInputTextField(input, value) {
  const text = normalizeSpace(firstValue(value))
  if (isMonthYearDateCombobox(input) && (await fillDateViaCalendar(input, text))) {
    return
  }
  input.focus()
  await delay.delay(100)
  setNativeValue(input, "")
  input.dispatchEvent(new Event("input", { bubbles: true }))
  await delay.delay(100)
  setNativeValue(input, text)
  dispatchInputChange(input)
  input.blur()
  await delay.delay(100)
}

async function fillSelectField(rule, value) {
  const input = rule.$input
  const text = normalizeSpace(firstValue(value))
  if (!text) return

  if ("SELECT" === input.tagName) {
    const select = input
    const option = Array.from(select.options).find((opt) => {
      const optionText = normalizeSpace(opt.textContent || opt.value)
      return matching.matchesWalmartOption(optionText, text) || opt.value === text
    })
    if (option) {
      select.value = option.value
      option.selected = true
      select.dispatchEvent(new Event("change", { bubbles: true }))
      select.dispatchEvent(new Event("input", { bubbles: true }))
      await delay.delay(100)
    }
    return
  }

  input.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  input.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
  input.click()
  await delay.delay(200)

  const option = Array.from(
    document.querySelectorAll(
      '[role="option"], [data-testid*="option" i], li, option',
    ),
  ).find((node) => matching.matchesWalmartOption(node.textContent ?? "", text))
  if (option) {
    option.click()
    await delay.delay(100)
  }
}

async function fillCheckboxField(rule, value) {
  const checkboxes = Array.from(rule.$checkboxs ?? [])
  if (checkboxes.length <= 1) {
    const input = checkboxes[0] ?? rule.$input
    if (!input) return
    const shouldCheck = shouldCheckOption(rule, input, value)
    const ok = await setCheckedState(input, shouldCheck)
    if (!ok) throw new filler.ValueError(`Failed to set checkbox ${rule.label}`)
    return
  }

  const answers = normalizeAnswerList(value)
  for (const input of checkboxes) {
    const label = getCheckboxOptionLabel(input)
    const shouldCheck = answers.some((item) =>
      matching.matchesWalmartOption(label, item),
    )
    const ok = await setCheckedState(input, shouldCheck)
    if (!ok) throw new filler.ValueError(`Failed to set checkbox option ${label}`)
  }
}

async function fillRadioGroupFiled(rule, value) {
  const text = normalizeSpace(firstValue(value))
  if (!text) return
  const radios = Array.from(
    rule.$radioParent.querySelectorAll('input[type="radio"]'),
  )
  for (const radio of radios) {
    const label = getCheckboxOptionLabel(radio)
    if (
      radio.value === text ||
      radio.id === text ||
      matching.matchesWalmartOption(label, text)
    ) {
      if (!radio.checked) {
        radio.click()
        await delay.delay(100)
      }
      return
    }
  }
}

function getResumeInput() {
  const inputs = Array.from(document.querySelectorAll('input[type="file"]'))
  return (
    inputs.find((input) => {
      const text = normalizeLower(
        [
          input.name,
          input.id,
          input.getAttribute("aria-label"),
          input.getAttribute("accept"),
          input.closest("label, div, fieldset")?.textContent,
        ].join(" "),
      )
      return (
        !text.includes("cover letter") &&
        (text.includes("resume") || text.includes("cv") || text.includes(".pdf"))
      )
    }) ?? null
  )
}

async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const input = getResumeInput()
  if (!input) {
    console.warn("[walmart] No resume input found")
    return
  }
  await dom.uploadFiles(
    input,
    await answerMethods.fetchPdfAsBlob(resumeInfo),
    updateRequired,
    updateFilled,
    "Resume/CV",
  )
  await getTargetOrTimeout.default(
    () =>
      document.querySelector(
        '[class*="upload-complete" i], [data-testid*="upload-complete" i], [class*="uploaded" i], [data-testid*="uploaded" i]',
      ),
    () => false,
    100,
  )
}

async function removeResume() {
  const deleteButton = Array.from(document.querySelectorAll("button")).find(
    (button) => {
      const text = normalizeLower(
        `${button.getAttribute("aria-label") ?? ""} ${button.textContent ?? ""}`,
      )
      return text.includes("delete") || text.includes("remove")
    },
  )
  if (!deleteButton) return
  deleteButton.click()
  await delay.delay(500)

  const confirmButton = Array.from(document.querySelectorAll("button")).find(
    (button) => {
      const text = normalizeLower(button.textContent)
      return "confirm" === text || "yes" === text || text.includes("remove")
    },
  )
  if (confirmButton) {
    confirmButton.click()
    await delay.delay(500)
  }
}

async function preFillForm() {
  await delay.delay(500)
}

export {
  fillCheckboxField,
  fillInputTextField,
  fillRadioGroupFiled,
  fillSelectField,
  getResumeInput,
  preFillForm,
  removeResume,
  uploadResume,
}
