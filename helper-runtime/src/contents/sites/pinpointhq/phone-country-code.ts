// @ts-nocheck
/**
 * PinpointHQ — phone country code helpers for intl-tel-input.
 */

export const PINPOINT_PHONE_COUNTRY_CODE_LABEL = "Phone Country Code"
export const PINPOINT_PHONE_WITH_COUNTRY_CODE_DESCRIPTION =
  "Return only the phone number without the country calling code. Do not include the phone country code because it is provided separately."

function normalizeOptionText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function extractDialCode(text) {
  return (
    text.match(/\+\s*(\d{1,4})/)?.[1] ||
    (/^\s*\d{1,4}\s*$/.test(text) ? text.replace(/\D/g, "") : "")
  )
}

function countryNameVariants(countryName) {
  const withoutParen = countryName.replace(/\s*\([^)]*\)\s*$/, "")
  return Array.from(
    new Set([countryName, withoutParen].map(normalizeOptionText).filter(Boolean)),
  )
}

export function getPinpointPhoneContainer(input) {
  return input.closest?.(".intl-tel-input")
}

export function getPinpointPhoneCountryOptionElements(input) {
  const container = getPinpointPhoneContainer(input)
  if (!container) return []
  const wrapper = input.closest?.('[id^="Shared::Form::Phonenumberinput"]')
  return Array.from((wrapper || container).querySelectorAll("li.country"))
}

export function parsePinpointPhoneCountryOption(element) {
  return {
    countryCode: element.getAttribute("data-country-code") || "",
    countryName:
      element.querySelector(".country-name")?.textContent?.trim() || "",
    dialCode: (
      element.getAttribute("data-dial-code") ||
      element.querySelector(".dial-code")?.textContent ||
      ""
    ).replace(/\D/g, ""),
    element,
  }
}

export function formatPinpointPhoneCountryOption(option) {
  return [option.countryName, option.dialCode ? `+${option.dialCode}` : ""]
    .filter(Boolean)
    .join(" ")
}

export function findPinpointPhoneCountryOption(answer, optionElements) {
  const dialCode = extractDialCode(answer)
  const namePart = normalizeOptionText(answer.replace(/\+\s*\d{1,4}/, ""))
  if (!dialCode && !namePart) return null

  const parsed = optionElements.map(parsePinpointPhoneCountryOption)
  if (namePart) {
    return (
      parsed.find((option) => {
        const nameMatched =
          normalizeOptionText(option.countryCode) === namePart ||
          countryNameVariants(option.countryName).includes(namePart)
        return nameMatched && (!dialCode || option.dialCode === dialCode)
      })?.element || null
    )
  }

  const dialMatches = parsed.filter((option) => option.dialCode === dialCode)
  return dialMatches.length === 1 ? dialMatches[0].element : null
}

export function formatPinpointPhoneValue(phone, countryCodeAnswer) {
  const dialCode = countryCodeAnswer ? extractDialCode(countryCodeAnswer) : ""
  if (!dialCode) return phone
  const dialPattern = dialCode.split("").join("\\s*")
  const prefixRe = RegExp(
    `^\\s*(?:\\(\\s*)?\\+\\s*${dialPattern}\\s*(?:\\))?[\\s-]*`,
  )
  return prefixRe.test(phone) ? phone.replace(prefixRe, "").trim() : phone
}

export function resolvePinpointPhoneCountryCode(answer) {
  const raw = answer?.regular?.[PINPOINT_PHONE_COUNTRY_CODE_LABEL]
  const values = Array.isArray(raw) ? raw : [raw]
  const found = values.find((value) => String(value ?? "").trim())
  return found === undefined ? undefined : String(found).trim()
}

export function readPinpointPhoneCountryCode(input) {
  const container = getPinpointPhoneContainer(input)
  if (!container) return ""

  const title = container
    .querySelector(".selected-flag")
    ?.getAttribute("title")
    ?.replace(/\s*:\s*(?=\+)/, " ")
    .replace(/\s+/g, " ")
    .trim()
  if (title) return title

  const active = container.querySelector("li.country.active")
  return active
    ? formatPinpointPhoneCountryOption(parsePinpointPhoneCountryOption(active))
    : ""
}
