// @ts-nocheck
/**
 * Resolve a national phone value from profile answers.
 */
import {
  resolvePhoneCountryCodeAnswer
} from "./phone-country-code/answer.ts"
import {
  toNationalPhoneValue
} from "./number.ts"

export function resolveNationalPhoneValue(phoneValue, profileAnswers, fallbackAnswer) {
  return toNationalPhoneValue(
    phoneValue,
    resolvePhoneCountryCodeAnswer(profileAnswers, fallbackAnswer)
  )
}
