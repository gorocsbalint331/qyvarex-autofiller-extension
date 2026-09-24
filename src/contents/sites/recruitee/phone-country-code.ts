// @ts-nocheck
/**
 * Recruitee — phone country helpers and dial-code formatting.
 */

const RECRUITEE_PHONE_COUNTRY_CODE_LABEL = "Phone Country Code"
const RECRUITEE_LOCAL_PHONE_DESCRIPTION =
  "Return only the phone number without the country calling code. Do not include the phone country code because it is provided separately."

function normalizeRecruiteePhoneText(value) {
  return value.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "")
}

function getRecruiteeDialCode(value) {
  const trimmed = value.trim()
  return /^\d{1,4}$/.test(trimmed)
    ? trimmed
    : trimmed.match(/\+\s*(\d{1,4})(?!\d)/)?.[1] || ""
}

function formatRecruiteePhoneCountryOption(option) {
  const dialCode = getRecruiteeDialCode(option.dialCode)
  return [option.countryName.trim(), dialCode ? `+${dialCode}` : ""]
    .filter(Boolean)
    .join(" ")
}

function findRecruiteePhoneCountryOption(query, options) {
  const dialCode = getRecruiteeDialCode(query)
  const countryText = /^\s*\d{1,4}\s*$/.test(query)
    ? ""
    : normalizeRecruiteePhoneText(query.replace(/\+\s*\d{1,4}(?!\d)/, ""))

  if (!dialCode && !countryText) return null

  if (countryText) {
    return (
      options.find((option) => {
        const nameMatches =
          normalizeRecruiteePhoneText(option.countryName) === countryText
        const optionDial = getRecruiteeDialCode(option.dialCode)
        return nameMatches && (!dialCode || optionDial === dialCode)
      }) || null
    )
  }

  const dialMatches = options.filter(
    (option) => getRecruiteeDialCode(option.dialCode) === dialCode,
  )
  return dialMatches.length === 1 ? dialMatches[0] : null
}

function resolveRecruiteePhoneCountryCode(answer) {
  const raw = answer?.regular?.[RECRUITEE_PHONE_COUNTRY_CODE_LABEL]
  const values = Array.isArray(raw) ? raw : [raw]
  const first = values.find((value) => String(value ?? "").trim())
  return first === undefined ? undefined : String(first).trim()
}

function readRecruiteeNationalNumber(value, dialCode) {
  const digits = value.replace(/\D/g, "")
  const code = dialCode ? getRecruiteeDialCode(dialCode) : ""
  if (!code) return digits

  const prefix = RegExp(`^\\s*\\+\\s*${code}`)
  return prefix.test(value) ? digits.slice(code.length) : digits
}

function formatRecruiteePhoneValue(value, dialCode) {
  const code = dialCode ? getRecruiteeDialCode(dialCode) : ""
  return code
    ? `+${code}${readRecruiteeNationalNumber(value, dialCode)}`
    : value
}

export {
  RECRUITEE_LOCAL_PHONE_DESCRIPTION,
  RECRUITEE_PHONE_COUNTRY_CODE_LABEL,
  findRecruiteePhoneCountryOption,
  formatRecruiteePhoneCountryOption,
  formatRecruiteePhoneValue,
  getRecruiteeDialCode,
  normalizeRecruiteePhoneText,
  readRecruiteeNationalNumber,
  resolveRecruiteePhoneCountryCode,
}
