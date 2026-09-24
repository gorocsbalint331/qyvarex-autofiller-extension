// @ts-nocheck
/**
 * Ashby — country combobox option matching and fill helpers.
 */

import * as delay from "../../../utils/delay.js"

const COUNTRY_ALIASES = [
  ["us", "usa", "u s", "u s a", "united states", "united states of america"],
  ["ca", "canada"],
  ["uk", "gb", "great britain", "united kingdom"],
]

function normalizeCountryText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function countryAliasSet(answer) {
  let normalized = normalizeCountryText(answer)
  if (!normalized) return new Set()
  let group = COUNTRY_ALIASES.find((aliases) => aliases.includes(normalized))
  return new Set(group ?? [normalized])
}

/** True when exactly one option matches the answer country (including US/CA/UK aliases). */
export function resolveAshbyCountryOption(answer, options) {
  let aliases = countryAliasSet(answer)
  if (aliases.size === 0) return null

  let matches = options.filter((opt) =>
    aliases.has(normalizeCountryText(opt.textContent ?? "")),
  )
  return matches.length === 1 ? matches[0] : null
}

function setInputValue(input, value) {
  let proto = Object.getPrototypeOf(input)
  let valueSetter = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (valueSetter) valueSetter.call(input, value)
  else input.value = value
  input.dispatchEvent(new Event("input", { bubbles: true }))
}

function pressEscape(input) {
  input.dispatchEvent(
    new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
  )
  input.dispatchEvent(
    new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
  )
}

async function typeComboboxQuery(input, query) {
  input.focus()
  input.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
  if (input.value === query) {
    setInputValue(input, "")
    await delay.delay(50)
  }
  setInputValue(input, query)
  input.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true }))
  input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }))
}

function readExpandedOptions(input) {
  if (input.getAttribute("aria-expanded") !== "true") return null
  let controlsId = input.getAttribute("aria-controls")
  let listbox = controlsId ? document.getElementById(controlsId) : null
  return listbox
    ? Array.from(listbox.querySelectorAll('[role="option"]'))
    : null
}

async function waitForCountryOption(input, answer) {
  let maxAttempts = 12
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    let options = readExpandedOptions(input)
    if (options) {
      let match = resolveAshbyCountryOption(answer, options)
      if (match) return match
    }
    await delay.delay(100)
  }
  return null
}

async function selectCountryOption(input, answer) {
  await typeComboboxQuery(input, answer)
  let option = await waitForCountryOption(input, answer)
  if (!option) return false

  option.click()
  await delay.delay(200)

  let settleAttempts = 6
  for (let attempt = 0; attempt < settleAttempts; attempt++) {
    let settled = resolveAshbyCountryOption(answer, [
      { textContent: input.value },
    ])
    if (settled && input.getAttribute("aria-expanded") !== "true") return true
    await delay.delay(100)
  }
  return false
}

function isCountryAlreadySelected(input, answer) {
  let settled = resolveAshbyCountryOption(answer, [
    { textContent: input.value },
  ])
  return !!(settled && input.getAttribute("aria-expanded") !== "true")
}

async function restoreOriginalCountry(input, originalValue) {
  pressEscape(input)
  if (originalValue) {
    if (isCountryAlreadySelected(input, originalValue)) return
    let restored = await selectCountryOption(input, originalValue)
    if (restored) return

    pressEscape(input)
    console.warn("[Ashby][Country] original option could not be reselected")
    setInputValue(input, originalValue)
    input.dispatchEvent(new Event("change", { bubbles: true }))
    pressEscape(input)
    input.blur()
    return
  }
  setInputValue(input, "")
  pressEscape(input)
  input.blur()
}

export async function fillAshbyCountryCombobox(input, countryAnswer) {
  let wanted = String(countryAnswer ?? "").trim()
  let previousValue = input.value
  if (!wanted) return false

  let selected = await selectCountryOption(input, wanted)
  if (selected) return true

  await restoreOriginalCountry(input, previousValue)
  return false
}
