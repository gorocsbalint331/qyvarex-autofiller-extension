// @ts-nocheck
/**
 * Strip dial-code prefixes from national phone number strings.
 */
import {
  getDialCodeDigits
} from "./parse.js"

export function stripDialCodePrefix(phoneValue, countryCodeAnswer) {
  let nationalValue = String(phoneValue ?? "")
  let dialDigits = getDialCodeDigits(countryCodeAnswer)
  if (!dialDigits || !nationalValue) return nationalValue
  let dialDigitsFlexible = dialDigits.split("").join("\\s*")
  let dialPrefixPattern = RegExp(
    `^\\s*(?:\\(\\s*\\+?\\s*${dialDigitsFlexible}\\s*\\)|\\+\\s*${dialDigitsFlexible})[\\s().\\-]*`
  )
  return dialPrefixPattern.test(nationalValue)
    ? nationalValue.replace(dialPrefixPattern, "").trim()
    : nationalValue
}
