// @ts-nocheck
/**
 * Recruitee — answer shaping for phone fields.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as recruiteePhone from "./phone-country-code.js"

function formatPhoneValue(value) {
  return phoneCountryCode.resolvePhoneFieldValue(value) || value
}

function formatAnswer(answer, rules) {
  if (answer.regular) {
    const localPhoneLabels = new Set(
      (rules || [])
        .filter((rule) => rule.__recruiteePhoneField === "number")
        .map((rule) => rule.label),
    )

    for (const label in answer.regular) {
      if (
        label === recruiteePhone.RECRUITEE_PHONE_COUNTRY_CODE_LABEL ||
        !label.toLowerCase().includes("phone")
      ) {
        continue
      }

      const raw = answer.regular[label]
      const values = Array.isArray(raw) ? raw : [raw]
      const firstString = values.find(
        (value) => typeof value === "string" && value.trim(),
      )
      if (typeof firstString === "string") {
        answer.regular[label] = localPhoneLabels.has(label)
          ? firstString
          : formatPhoneValue(firstString)
      }
    }
  }

  return answer
}

export { formatAnswer }
