// @ts-nocheck
/**
 * Phone number parse/format helpers for autofill.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

function formatPhoneNumber(phone) {
  let digits = phone.replace(/\D/g, "")
  return 10 === digits.length
    ? {
        originalPhone: phone,
        areaCode: "+1",
        phoneWithoutAreaCode: digits,
      }
    : 11 === digits.length
      ? {
          originalPhone: phone,
          areaCode: "+".concat(digits.charAt(0)),
          phoneWithoutAreaCode: digits.substring(1),
        }
      : {
          originalPhone: phone,
          areaCode: "",
          phoneWithoutAreaCode: digits || phone,
        }
}

function parsePhonePrefix(phone) {
  let trimmed = (phone || "").trim()
  let parenMatch = trimmed.match(/^\(\+?(\d{1,4})\)(.*)$/)
  if (parenMatch) {
    return {
      dialCode: parenMatch[1],
      nationalNumber: parenMatch[2].replace(/\D/g, ""),
    }
  }
  let plusMatch = trimmed.match(/^\+(\d{1,4})[\s\-.]+(.*)$/)
  return plusMatch
    ? {
        dialCode: plusMatch[1],
        nationalNumber: plusMatch[2].replace(/\D/g, ""),
      }
    : {
        dialCode: "",
        nationalNumber: trimmed.replace(/\D/g, ""),
      }
}

function formatPhoneNumberWithHyphens(phone) {
  let {
    originalPhone,
    areaCode,
    phoneWithoutAreaCode,
  } = formatPhoneNumber(phone)
  let areaDigits = areaCode.replace(/\D/g, "")
  let nationalDigits = phoneWithoutAreaCode.replace(/\D/g, "")
  let combined = `${areaDigits}${nationalDigits}`.trim()
  return combined
    ? 11 === combined.length && combined.startsWith("1")
      ? `${combined[0]}-${combined.slice(1, 4)}-${combined.slice(4, 7)}-${combined.slice(7)}`
      : combined
    : originalPhone
}

export {
  formatPhoneNumber,
  formatPhoneNumberWithHyphens,
  parsePhonePrefix,
}
