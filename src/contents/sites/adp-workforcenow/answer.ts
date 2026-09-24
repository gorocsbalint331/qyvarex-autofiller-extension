// @ts-nocheck
/**
 * ADP WorkforceNow — phone label helpers and Falcon answer shaping.
 */

import * as dayjs from "dayjs"
import * as phoneCountryCode from "../../../core/phone-country-code.js"

const dayjsDefault = { default: dayjs?.default ?? dayjs }

export const ADP_WORKFORCENOW_PHONE_COUNTRY_CODE_LABEL_BY_PHONE_LABEL = {
  "Mobile Number": "Mobile Country Code",
  "Home Phone Number": "Home Phone Country Code",
}

export const ADP_WORKFORCENOW_PHONE_NUMBER_LABELS = Object.keys(
  ADP_WORKFORCENOW_PHONE_COUNTRY_CODE_LABEL_BY_PHONE_LABEL,
)

const FALLBACK_PHONE_NUMBER_LABELS = ["Phone Number", "Mobile Number"]
const FALLBACK_PHONE_COUNTRY_CODE_LABELS = [
  "Phone Country Code",
  "Mobile Country Code",
]

export function normalizeAdpWorkforceNowPhoneLabel(label) {
  return String(label ?? "")
    .replace(/\*+/g, "")
    .replace(/\s+is invalid\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim()
}

export function getAdpWorkforceNowPhoneCountryCodeLabel(phoneLabel) {
  return (
    ADP_WORKFORCENOW_PHONE_COUNTRY_CODE_LABEL_BY_PHONE_LABEL[
      normalizeAdpWorkforceNowPhoneLabel(phoneLabel)
    ] ?? null
  )
}

export function isAdpWorkforceNowPhoneNumberLabel(label) {
  return ADP_WORKFORCENOW_PHONE_NUMBER_LABELS.includes(
    normalizeAdpWorkforceNowPhoneLabel(label),
  )
}

export function isAdpWorkforceNowPhoneCountryCodeLabel(label) {
  return Object.values(
    ADP_WORKFORCENOW_PHONE_COUNTRY_CODE_LABEL_BY_PHONE_LABEL,
  ).includes(String(label ?? "").trim())
}

export function isAdpWorkforceNowPhoneValueCommitted(inputValue, expectedNational) {
  const expectedDigits = String(expectedNational ?? "").replace(/\D/g, "")
  const actualDigits = String(inputValue ?? "").replace(/\D/g, "")
  return expectedDigits.length >= 7 && actualDigits.endsWith(expectedDigits)
}

function firstPhoneAnswerText(regular, labels) {
  for (const label of labels) {
    const text = phoneCountryCode.resolvePhoneAnswerText(regular[label])
    if (text) return text
  }
  return ""
}

function normalizeDualControlPhoneAnswers(regular) {
  const fallbackNumber = firstPhoneAnswerText(
    regular,
    FALLBACK_PHONE_NUMBER_LABELS,
  )
  const fallbackCountry = firstPhoneAnswerText(
    regular,
    FALLBACK_PHONE_COUNTRY_CODE_LABELS,
  )

  for (const phoneLabel of ADP_WORKFORCENOW_PHONE_NUMBER_LABELS) {
    const countryLabel = getAdpWorkforceNowPhoneCountryCodeLabel(phoneLabel)
    const numberText =
      phoneCountryCode.resolvePhoneAnswerText(regular[phoneLabel]) ||
      fallbackNumber
    const countryText =
      (countryLabel &&
        phoneCountryCode.resolvePhoneAnswerText(regular[countryLabel])) ||
      fallbackCountry

    if (numberText) {
      regular[phoneLabel] = phoneCountryCode.resolveDualControlPhoneValue(
        numberText,
        countryText,
      )
    }
    if (countryLabel && countryText) {
      regular[countryLabel] = countryText
    }
  }
}

/** Mutates and returns the Falcon answer for WorkforceNow labels. */
export function formatAnswer(answer) {
  if (answer.regular) {
    if (answer.regular?.["Available Start Date"]) {
      answer.regular["Available Start Date"] = dayjsDefault
        .default()
        .format("YYYY-MM-DD")
    }
    normalizeDualControlPhoneAnswers(answer.regular)
  }

  if (answer.workExperience?.length > 0) {
    for (const item of answer.workExperience) {
      if (item?.Start) {
        item["Start date"] = dayjsDefault.default(item.Start).format("MM/YYYY")
        item.From = item["Start date"]
      }
      if (item?.End) {
        item["End date"] = dayjsDefault.default(item.End).format("MM/YYYY")
        item.To = item["End date"]
      }
      if (item && "isCurrent" in item) {
        item["I currently work here"] = item.isCurrent
      }
    }
  }

  if (answer.education?.length > 0) {
    for (const item of answer.education) {
      if (item?.Start) {
        item["Start date"] = dayjsDefault.default(item.Start).format("MM/YYYY")
        item.From = item["Start date"]
      }
      if (item?.End) {
        item["End date"] = dayjsDefault.default(item.End).format("MM/YYYY")
        item.To = item["End date"]
      }
      if (item?.Study) {
        item["Field of Study"] = item.Study
      }
    }
  }

  return answer
}
