// @ts-nocheck
/**
 * Tesla — date parsing and calendar/datepicker fill helpers.
 */

import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"

const getTargetOrTimeout = {
  default: getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

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

function isValidDateParts({ year, month, day }) {
  const date = new Date(year, month - 1, day)
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  )
}

function getTodayParts() {
  const now = /* @__PURE__ */ new Date()
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  }
}

export function parseTeslaDateValue(value) {
  const text = String(value ?? "").trim()
  if (!text) return null
  if (/^(immediately|today|as soon as possible|asap)$/i.test(text)) {
    return getTodayParts()
  }

  const isoMatch = text.match(
    /^(\d{4})[-/.](\d{1,2})(?:[-/.](\d{1,2}))?$/,
  )
  if (isoMatch) {
    const parts = {
      year: Number(isoMatch[1]),
      month: Number(isoMatch[2]),
      day: Number(isoMatch[3] || "1"),
    }
    return isValidDateParts(parts) ? parts : null
  }

  const monthNames = MONTH_NAMES.join("|")
  const longMatch = text.match(
    RegExp(`^(${monthNames})\\s+(\\d{1,2}),?\\s+(\\d{4})$`, "i"),
  )
  if (longMatch) {
    const monthIndex = MONTH_NAMES.findIndex(
      (name) => name.toLowerCase() === longMatch[1].toLowerCase(),
    )
    const parts = {
      year: Number(longMatch[3]),
      month: monthIndex + 1,
      day: Number(longMatch[2]),
    }
    return isValidDateParts(parts) ? parts : null
  }

  const slashMatch = text.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/)
  if (slashMatch) {
    const parts = {
      year: Number(slashMatch[3]),
      month: Number(slashMatch[1]),
      day: Number(slashMatch[2]),
    }
    return isValidDateParts(parts) ? parts : null
  }

  return null
}

export function formatTeslaDateDisplayValue(parts) {
  return `${MONTH_NAMES[parts.month - 1]} ${parts.day}, ${parts.year}`
}

function formatIsoDate(parts) {
  return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`
}

function setInputValue(input, value) {
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )?.set
  if (setter) setter.call(input, value)
  else input.value = value
}

function dispatchInputEvents(input) {
  const options = { bubbles: true, cancelable: true, composed: true }
  input.dispatchEvent(new Event("input", options))
  input.dispatchEvent(new Event("change", options))
  input.dispatchEvent(new Event("blur", options))
}

async function typeDateValue(input, value) {
  input.focus()
  await delay.delay(50)
  input.select?.()
  setInputValue(input, value)
  dispatchInputEvents(input)
  input.blur()
  await delay.delay(150)
}

function normalizeText(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function inputMatchesDate(input, parts) {
  const current = normalizeText(input.value)
  return (
    current === normalizeText(formatTeslaDateDisplayValue(parts)) ||
    current === normalizeText(formatIsoDate(parts))
  )
}

function findOpenDatePicker(input) {
  const nearby = input.nextElementSibling?.nextElementSibling
  const formItem = input.closest(".tds-form-item")
  const candidates = [
    nearby,
    formItem?.querySelector(".tds-tooltip--open"),
    formItem?.querySelector("[class*='tds-tooltip']"),
    document.querySelector(".tds-tooltip--open"),
    document.querySelector("[class*='tds-date']"),
  ].filter(Boolean)
  return (
    candidates.find((node) => {
      const className = node.className || ""
      return (
        className.includes("tds-tooltip--open") ||
        node.querySelector("button.tds-day")
      )
    }) || null
  )
}

async function openDatePicker(input) {
  input.click()
  input.nextElementSibling?.querySelector("button")?.click()
  await delay.delay(200)
  return await getTargetOrTimeout.default(
    () => findOpenDatePicker(input),
    () => false,
    20,
  )
}

function monthDelta(from, to) {
  return (to.year - from.year) * 12 + (to.month - from.month)
}

function findNavButton(picker, direction) {
  const pattern =
    direction === "next"
      ? /(next|forward|right|following)/i
      : /(prev|previous|back|left)/i
  const buttons = Array.from(picker.querySelectorAll("button")).filter(
    (button) => !button.className.includes("tds-day"),
  )
  return (
    buttons.find((button) => {
      const haystack = [
        button.getAttribute("aria-label"),
        button.getAttribute("title"),
        button.className,
        button.textContent,
      ]
        .filter(Boolean)
        .join(" ")
      return pattern.test(haystack)
    }) ||
    (direction === "next" ? buttons[buttons.length - 1] : buttons[0]) ||
    null
  )
}

async function navigateToMonth(picker, from, to) {
  const delta = monthDelta(from, to)
  if (delta === 0) return true
  const direction = delta > 0 ? "next" : "previous"
  const steps = Math.min(Math.abs(delta), 36)
  for (let index = 0; index < steps; index++) {
    const button = findNavButton(picker, direction)
    if (!button) return false
    button.click()
    await delay.delay(120)
  }
  return true
}

function findDayButton(picker, parts) {
  const displayLabel = normalizeText(formatTeslaDateDisplayValue(parts))
  const dayText = String(parts.day)
  const buttons = Array.from(
    picker.querySelectorAll("button.tds-day, button"),
  )
  return (
    buttons.find((button) => {
      if (button.disabled) return false
      const label = normalizeText(
        button.getAttribute("aria-label") ||
          button.getAttribute("title") ||
          "",
      )
      return label === displayLabel
    }) ||
    buttons.find(
      (button) =>
        !(
          button.disabled ||
          button.className.includes("tds-day--outside-month") ||
          button.className.includes("tds-day--disabled")
        ) && button.textContent?.trim() === dayText,
    ) ||
    null
  )
}

async function pickDateFromCalendar(input, parts) {
  const picker = await openDatePicker(input)
  if (!picker) return false
  const current = parseTeslaDateValue(input.value) || getTodayParts()
  const navigated = await navigateToMonth(picker, current, parts)
  if (!navigated) return false
  const dayButton = findDayButton(picker, parts)
  if (!dayButton) return false
  dayButton.click()
  await delay.delay(200)
  input.blur()
  await delay.delay(100)
  return inputMatchesDate(input, parts)
}

export async function fillTeslaDateField(rule, value) {
  const input = rule.$input
  const parts = parseTeslaDateValue(value)
  if (!input || !parts) return false
  const displayValue = formatTeslaDateDisplayValue(parts)
  await typeDateValue(input, displayValue)
  if (inputMatchesDate(input, parts) || (await pickDateFromCalendar(input, parts))) {
    return true
  }
  await typeDateValue(input, formatIsoDate(parts))
  return inputMatchesDate(input, parts)
}
