// @ts-nocheck
/**
 * Phone country-code answer labels, descriptions, and resolvers.
 */
import {
  normalizePhoneCountryText
} from "../parse.ts"

export const PHONE_COUNTRY_CODE_LABEL = "Phone Country Code"
export const PHONE_COUNTRY_CODE_ANSWER_LABELS = [
  PHONE_COUNTRY_CODE_LABEL,
  "Country Phone Code",
  "Phone Code"
]
export const PHONE_COUNTRY_CODE_DESCRIPTION =
  "Return the phone country calling code together with the country, formatted as `+<code> <English country name>`, for example `+86 China` or `+1 United States`. Always include the leading plus sign and the English country name. Do not return the code alone, the country alone, or a localized country name."
export const LOCAL_PHONE_DESCRIPTION =
  "Return only the national phone number, without the country calling code and without a leading plus sign, for example `15386665928` for China or `7347474488` for the United States. The phone country code is provided separately in its own field, so it must not be repeated here."
export const INTERNATIONAL_PHONE_DESCRIPTION =
  "Return the full international phone number in E.164 format, starting with a plus sign followed by the country calling code, for example `+8615386665928`. The leading plus sign is required; never return the country calling code as bare digits such as `8615386665928`."

export function resolvePhoneAnswerText(answerValue) {
  let values = Array.isArray(answerValue) ? answerValue : [answerValue]
  let firstNonEmpty = values.find((value) => String(value ?? "").trim())
  return undefined === firstNonEmpty ? "" : String(firstNonEmpty).trim()
}

export function resolvePhoneCountryCodeAnswer(
  profileAnswers,
  labelCandidates = PHONE_COUNTRY_CODE_ANSWER_LABELS
) {
  let regularAnswers = profileAnswers?.regular
  if (!regularAnswers) return
  for (let label of labelCandidates) {
    let text = resolvePhoneAnswerText(regularAnswers[label])
    if (text) return text
  }
  let normalizedLabels = new Set(labelCandidates.map(normalizePhoneCountryText))
  for (let [label, value] of Object.entries(regularAnswers)) {
    if (!normalizedLabels.has(normalizePhoneCountryText(label))) continue
    let text = resolvePhoneAnswerText(value)
    if (text) return text
  }
}
