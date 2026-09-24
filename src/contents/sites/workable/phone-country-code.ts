// @ts-nocheck
/**
 * Workable phone country-code helpers (intl-tel-input / iti widget).
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

const WORKABLE_PHONE_COUNTRY_CODE_LABEL = phoneCountryCode.PHONE_COUNTRY_CODE_LABEL
const WORKABLE_PHONE_WITH_COUNTRY_CODE_DESCRIPTION =
  phoneCountryCode.LOCAL_PHONE_DESCRIPTION

function toOptionWrapper(option) {
  return {
    countryName: option.countryName,
    dialCode: option.dialCode,
    iso2: option.countryCode,
    element: option,
  }
}

function resolveWorkablePhoneCountryCode(answer) {
  return phoneCountryCode.resolvePhoneCountryCodeAnswer(answer, [
    WORKABLE_PHONE_COUNTRY_CODE_LABEL,
  ])
}

function parseWorkablePhoneCountryOption(element) {
  return {
    countryCode: element.getAttribute("data-country-code") || "",
    countryName:
      element.querySelector(".iti__country-name")?.textContent?.trim() || "",
    dialCode: (
      element.getAttribute("data-dial-code") ||
      element.querySelector(".iti__dial-code")?.textContent ||
      ""
    ).replace(/\D/g, ""),
  }
}

function formatWorkablePhoneCountryOption(option) {
  return phoneCountryCode.formatPhoneCountryOptionLabel(option)
}

function getWorkablePhoneCountryOptions(container) {
  const options = Array.from(
    container.querySelectorAll(
      "li.iti__country[role='option'][data-country-code][data-dial-code], li.iti__country[data-country-code][data-dial-code]",
    ),
  ).map(parseWorkablePhoneCountryOption)
  return phoneCountryCode
    .dedupePhoneCountryOptions(options.map(toOptionWrapper))
    .map((entry) => entry.element)
}

function findWorkablePhoneCountryOption(needle, options) {
  const found = phoneCountryCode.findPhoneCountryOption(
    needle,
    options.map(toOptionWrapper),
  )
  return found ? found.element : null
}

function getWorkablePhoneCountryContainer(input) {
  return input
    ? input.classList?.contains("iti")
      ? input
      : input.closest?.(".iti") || null
    : null
}

function readWorkableSelectedPhoneCountry(container) {
  const selected = container.querySelector('li.iti__country[aria-selected="true"]')
  if (selected) {
    return formatWorkablePhoneCountryOption(
      parseWorkablePhoneCountryOption(selected),
    )
  }

  const flag = container.querySelector(
    "button.iti__selected-country, .iti__selected-flag[role='combobox'], .iti__selected-flag",
  )
  if (!flag) return ""

  const title = flag.getAttribute("title") || ""
  const dialCode =
    flag.querySelector(".iti__selected-dial-code")?.textContent || ""
  const options = getWorkablePhoneCountryOptions(container)
  const matched =
    findWorkablePhoneCountryOption(title, options) ||
    findWorkablePhoneCountryOption(dialCode, options)
  return matched ? formatWorkablePhoneCountryOption(matched) : ""
}

function formatWorkablePhoneValue(value, countryCode) {
  return phoneCountryCode.stripDialCodePrefix(value, countryCode)
}

export {
  WORKABLE_PHONE_COUNTRY_CODE_LABEL,
  WORKABLE_PHONE_WITH_COUNTRY_CODE_DESCRIPTION,
  findWorkablePhoneCountryOption,
  formatWorkablePhoneCountryOption,
  formatWorkablePhoneValue,
  getWorkablePhoneCountryContainer,
  getWorkablePhoneCountryOptions,
  parseWorkablePhoneCountryOption,
  readWorkableSelectedPhoneCountry,
  resolveWorkablePhoneCountryCode,
}
