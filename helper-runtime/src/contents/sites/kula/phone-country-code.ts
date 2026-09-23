// @ts-nocheck
/**
 * Kula — phone country code UI helpers.
 */

import * as delay from "../../../utils/delay.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"

export const KULA_PHONE_COUNTRY_CODE_LABEL = "Phone Country Code"
export const KULA_PHONE_LABEL = "Phone"
export const KULA_LOCAL_PHONE_DESCRIPTION =
  phoneCountryCode.LOCAL_PHONE_DESCRIPTION

export function getKulaPhoneContainer(input) {
  if (
    input.tagName.toLowerCase() !== "input" ||
    input.type !== "tel" ||
    input.id !== "phone"
  ) {
    return null
  }
  return input.closest('[data-test-id="phone"]')
}

export function getKulaPhoneCountryButton(input) {
  return (
    getKulaPhoneContainer(input)?.querySelector(
      'button[aria-haspopup="listbox"]',
    ) ?? null
  )
}

export function normalizeKulaCountryOptionText(option) {
  const spans = Array.from(option.querySelectorAll("span"))
  const country = (spans.at(-2)?.textContent || "")
    .replace(/\s+/g, " ")
    .trim()
  const dialCode = (spans.at(-1)?.textContent || "")
    .replace(/\s+/g, " ")
    .trim()
  return country && /^\+\d/.test(dialCode)
    ? `${country} ${dialCode}`
    : (option.textContent || "")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/^[^\p{L}\p{N}+]+/u, "")
}

function getCountriesListbox() {
  return document.querySelector('[role="listbox"][aria-label="Countries"]')
}

function closeIfExpanded(button) {
  if (button.getAttribute("aria-expanded") === "true") {
    button.click()
  }
}

export async function extractKulaPhoneCountryOptions(button) {
  const wasExpanded = button.getAttribute("aria-expanded") === "true"
  if (!wasExpanded) {
    button.click()
    await delay.delay(150)
  }

  const options = Array.from(
    getCountriesListbox()?.querySelectorAll('[role="option"]') || [],
  )
    .map(normalizeKulaCountryOptionText)
    .filter(Boolean)

  if (!wasExpanded && button.getAttribute("aria-expanded") === "true") {
    closeIfExpanded(button)
    await delay.delay(50)
  }

  return Array.from(new Set(options))
}

export function getKulaSelectedPhoneCountry(button) {
  const country = (button.getAttribute("aria-label") || "")
    .match(/Currently\s+(.+)$/i)?.[1]
    ?.trim()
  const dialCode = (button.textContent || "")
    .match(/\+\d[\d\s-]*/)?.[0]
    ?.trim()
  return [country, dialCode].filter(Boolean).join(" ")
}

function parseCountryOption(text) {
  const normalized = text
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^[^\p{L}\p{N}+]+/u, "")
  const dialCode = normalized.match(/\+\d+/)?.[0] || ""
  const country = normalized
    .replace(dialCode, "")
    .replace(/[()]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
  return { country, dialCode }
}

function findMatchingOption(options, targetText) {
  const target = parseCountryOption(targetText)
  if (!target.country && !target.dialCode) return null

  const parsed = options.map((option) => ({
    option,
    value: parseCountryOption(normalizeKulaCountryOptionText(option)),
  }))

  if (target.country) {
    return (
      parsed.find(
        ({ value }) =>
          value.country === target.country &&
          (!target.dialCode || value.dialCode === target.dialCode),
      )?.option || null
    )
  }

  const dialMatches = parsed.filter(
    ({ value }) => value.dialCode === target.dialCode,
  )
  return dialMatches.length === 1 ? dialMatches[0].option : null
}

export async function fillKulaPhoneCountryCode(button, value) {
  if (!button || !value.trim()) return false

  if (button.getAttribute("aria-expanded") !== "true") {
    button.click()
    await delay.delay(150)
  }

  const listbox = getCountriesListbox()
  const options = Array.from(
    listbox?.querySelectorAll('[role="option"]') || [],
  )
  const match = findMatchingOption(options, value)
  if (!match) {
    closeIfExpanded(button)
    return false
  }

  const expected = parseCountryOption(normalizeKulaCountryOptionText(match))
  match.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  match.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  match.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )

  for (let attempt = 0; attempt < 10; attempt++) {
    const selected = parseCountryOption(getKulaSelectedPhoneCountry(button))
    if (
      selected.country === expected.country &&
      selected.dialCode === expected.dialCode
    ) {
      return true
    }
    await delay.delay(50)
  }

  closeIfExpanded(button)
  return false
}
