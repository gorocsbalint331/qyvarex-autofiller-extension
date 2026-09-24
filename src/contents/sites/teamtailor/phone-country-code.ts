// @ts-nocheck
/**
 * TeamTailor — phone country code option matching helpers.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

const OPTION_SELECTOR = 'li[role="option"], li.iti__country'

function normalizeWhitespace(text) {
  return text.replace(/\s+/g, " ").trim()
}

function normalizeDialCode(text) {
  const digits = text.replace(/\D/g, "")
  return digits ? `+${digits}` : normalizeWhitespace(text)
}

export function getTeamtailorPhoneCountryOptionLabel(element) {
  const countryName = normalizeWhitespace(
    element.querySelector(".iti__country-name")?.textContent || "",
  )
  const dialCode = normalizeDialCode(
    element.querySelector(".iti__dial-code")?.textContent ||
      element.getAttribute("data-dial-code") ||
      "",
  )
  if (countryName && dialCode) return `${countryName} ${dialCode}`

  const div = element.querySelector("div")
  return normalizeWhitespace(div?.textContent || element.textContent || "")
}

export function getTeamtailorPhoneCountryOptionElements(container) {
  if (!container) return []
  const options = Array.from(container.querySelectorAll(OPTION_SELECTOR))
  if (options.length > 0) return options
  return Array.from(container.querySelectorAll("button"))
    .filter((button) => !button.classList?.contains("iti__search-clear"))
    .filter((button) => getTeamtailorPhoneCountryOptionLabel(button))
}

export function getTeamtailorPhoneCountryOptions(container) {
  return Array.from(
    new Set(
      getTeamtailorPhoneCountryOptionElements(container)
        .map(getTeamtailorPhoneCountryOptionLabel)
        .filter(Boolean),
    ),
  )
}

export function findTeamtailorPhoneCountryOption(container, answer) {
  const elements = getTeamtailorPhoneCountryOptionElements(container)
  if (!elements.length) return null
  const match = phoneCountryCode.findPhoneCountryOption(
    answer,
    elements.map((element) =>
      phoneCountryCode.parsePhoneCountryOptionLabel(
        getTeamtailorPhoneCountryOptionLabel(element),
        element,
      ),
    ),
    { bareDialPolicy: "reject-shared" },
  )
  return match?.element ?? null
}

export function getSelectedTeamtailorPhoneCountryLabel(trigger) {
  const menu = trigger.nextElementSibling
  const selected = menu?.querySelector(
    'li[role="option"][aria-selected="true"], li.iti__country.iti__active, button[aria-selected="true"], button.selected',
  )
  const fromOption = selected
    ? getTeamtailorPhoneCountryOptionLabel(selected)
    : ""
  if (fromOption) return fromOption

  const ariaLabel = trigger.getAttribute?.("aria-label") || ""
  const selectedSuffix = ariaLabel.match(/selected\s+(.+)$/i)?.[1] || ""
  if (selectedSuffix) {
    return normalizeWhitespace(selectedSuffix).replace(
      /\s*\((\+\d+)\)$/,
      " $1",
    )
  }
  return normalizeWhitespace(trigger.textContent || "")
}
