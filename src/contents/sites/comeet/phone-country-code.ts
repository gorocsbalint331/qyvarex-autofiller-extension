// @ts-nocheck
/**
 * Comeet — intl-tel-input country code helpers for phone fields.
 */

const PHONE_COUNTRY_CODE_LABEL = "Phone Country Code"

function firstAnswerText(value) {
  const values = Array.isArray(value) ? value : [value]
  const found = values.find((item) => String(item ?? "").trim())
  return found === undefined ? "" : String(found).trim()
}

export function resolveComeetPhoneCountryCode(answer) {
  return firstAnswerText(answer?.regular?.[PHONE_COUNTRY_CODE_LABEL]) || undefined
}

function isComeetPhoneField(rule) {
  const input = rule?.$input
  const label = String(rule?.label || "")
    .trim()
    .toLowerCase()
  return (
    input?.type === "tel" ||
    input?.classList?.contains("iti__tel-input") ||
    /phone|tel/i.test(input?.id || "") ||
    label === "phone"
  )
}

export function getComeetPhoneCountryCodeForRule(answer, rule) {
  return isComeetPhoneField(rule)
    ? resolveComeetPhoneCountryCode(answer)
    : undefined
}

export function parseComeetPhoneCountryOption(li) {
  return {
    countryCode: li.getAttribute("data-country-code") || "",
    countryName:
      li.querySelector(".iti__country-name")?.textContent?.trim() || "",
    dialCode: (
      li.getAttribute("data-dial-code") ||
      li.querySelector(".iti__dial-code")?.textContent ||
      ""
    ).replace(/\D/g, ""),
  }
}

export function formatComeetPhoneCountryOption(option) {
  return [option.countryName, option.dialCode ? `+${option.dialCode}` : ""]
    .filter(Boolean)
    .join(" ")
}

function normalizeCountryName(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

function extractDialCodeDigits(text) {
  return (
    text.match(/\+\s*(\d{1,4})/)?.[1] ||
    (/^\s*\d{1,4}\s*$/.test(text) ? text.replace(/\D/g, "") : "")
  )
}

export function formatComeetPhoneValue(phoneValue, countryCodeAnswer) {
  const dialDigits = countryCodeAnswer
    ? extractDialCodeDigits(countryCodeAnswer)
    : ""
  if (!dialDigits) return phoneValue
  const spacedDigits = dialDigits.split("").join("\\s*")
  const prefixRe = RegExp(
    `^\\s*(?:\\(\\s*)?\\+\\s*${spacedDigits}\\s*(?:\\))?[\\s-]*`,
  )
  return prefixRe.test(phoneValue)
    ? phoneValue.replace(prefixRe, "").trim()
    : phoneValue
}

export function findComeetPhoneCountryOption(answerText, options) {
  const dialDigits = extractDialCodeDigits(answerText)
  const nameNorm = normalizeCountryName(
    answerText.replace(/\+\s*\d{1,4}/, "").replace(/[()]/g, " "),
  )
  if (!dialDigits && !nameNorm) return null

  if (nameNorm) {
    return (
      options.find((option) => {
        const nameMatches = normalizeCountryName(option.countryName) === nameNorm
        return nameMatches && (!dialDigits || option.dialCode === dialDigits)
      }) || null
    )
  }

  const dialMatches = options.filter((option) => option.dialCode === dialDigits)
  return dialMatches.length === 1 ? dialMatches[0] : null
}
