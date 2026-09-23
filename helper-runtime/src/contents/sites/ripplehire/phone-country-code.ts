// @ts-nocheck
/**
 * RippleHire phone country code — readable TypeScript source of truth.
 */

export const RIPPLEHIRE_PHONE_COUNTRY_CODE_LABEL = "Phone Country Code"
export const RIPPLEHIRE_PHONE_WITH_COUNTRY_CODE_DESCRIPTION =
  "Return only the phone number without the country calling code. Do not include the phone country code because it is provided separately."

function normalizeCountryKey(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function extractDialDigits(text) {
  return (
    text.match(/\+\s*(\d{1,4})/)?.[1] ||
    (/^\s*\d{1,4}\s*$/.test(text) ? text.replace(/\D/g, "") : "")
  )
}

function countryNameKeys(countryName) {
  const withoutParen = countryName.replace(/\s*\([^)]*\)\s*$/, "")
  return Array.from(
    new Set([countryName, withoutParen].map(normalizeCountryKey).filter(Boolean)),
  )
}

export function parseRipplehirePhoneCountryOption(element) {
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

export function formatRipplehirePhoneCountryOption(option) {
  return [option.countryName, option.dialCode ? `+${option.dialCode}` : ""]
    .filter(Boolean)
    .join(" ")
}

function dedupeCountryOptions(elements) {
  const seen = /* @__PURE__ */ new Set()
  return elements.map(parseRipplehirePhoneCountryOption).filter((option) => {
    const key = [option.countryCode, option.countryName, option.dialCode].join(
      "|",
    )
    return !seen.has(key) && (seen.add(key), true)
  })
}

export function findRipplehirePhoneCountryOption(answer, elements) {
  const dial = extractDialDigits(answer)
  const nameKey = normalizeCountryKey(answer.replace(/\+\s*\d{1,4}/, ""))
  if (!dial && !nameKey) return null
  const options = dedupeCountryOptions(elements)
  if (nameKey) {
    return (
      options.find((option) => {
        const nameMatches = countryNameKeys(option.countryName).includes(
          nameKey,
        )
        return nameMatches && (!dial || option.dialCode === dial)
      })?.element || null
    )
  }
  const dialMatches = options.filter((option) => option.dialCode === dial)
  return 1 === dialMatches.length ? dialMatches[0].element : null
}

export function formatRipplehirePhoneValue(phoneValue, countryCodeAnswer) {
  const dial = countryCodeAnswer ? extractDialDigits(countryCodeAnswer) : ""
  if (!dial) return phoneValue
  const dialPattern = dial.split("").join("\\s*")
  const prefixRe = RegExp(
    `^\\s*(?:\\(\\s*)?\\+\\s*${dialPattern}\\s*(?:\\))?[\\s-]*`,
  )
  return prefixRe.test(phoneValue)
    ? phoneValue.replace(prefixRe, "").trim()
    : phoneValue
}

export function resolveRipplehirePhoneCountryCode(answer) {
  const raw = answer?.regular?.[RIPPLEHIRE_PHONE_COUNTRY_CODE_LABEL]
  const values = Array.isArray(raw) ? raw : [raw]
  const first = values.find((value) => String(value ?? "").trim())
  return void 0 === first ? void 0 : String(first).trim()
}

export function readRipplehirePhoneCountryCode(input) {
  const container = input.closest(".intl-tel-input")
  if (!container) return ""
  const title = container
    .querySelector(".selected-flag")
    ?.getAttribute("title")
  if (title) {
    return title
      .replace(/\s*:\s*(?=\+)/, " ")
      .replace(/\s+/g, " ")
      .trim()
  }
  const active = container.querySelector("li.country.active")
  return active
    ? formatRipplehirePhoneCountryOption(
        parseRipplehirePhoneCountryOption(active),
      )
    : ""
}
