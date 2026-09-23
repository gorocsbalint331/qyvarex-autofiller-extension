// @ts-nocheck
/**
 * XCompany — answer shaping for names, phone, location, and LinkedIn.
 */

import * as constants from "../../../constants.ts"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as stringUtils from "../../../utils/string.ts"

function expandCityStateAbbreviation(location) {
  let parts = location.split(",").map((part) => part.trim())
  if (parts.length < 2) return null

  let stateKey = parts[1].replace(/\./g, "").toUpperCase()
  let mapped = constants.STATE_MAP[stateKey]
  if (!mapped) return null

  parts[1] = mapped
  return parts.join(", ")
}

function formatAnswer(answer) {
  if (answer.regular) {
    let nameLabels = ["First Name", "First name", "Last Name", "Last name"]
    for (let label of nameLabels) {
      if (
        answer.regular[label] &&
        typeof answer.regular[label] === "string"
      ) {
        answer.regular[label] = stringUtils.toNameTitleCase(
          answer.regular[label],
        )
      }
    }

    answer.regular.Phone = phoneCountryCode.resolvePhoneFieldValue(
      answer.regular.Phone?.replace(/[^\d+]/g, "") || "",
      phoneCountryCode.resolvePhoneCountryCodeAnswer(answer),
    )

    let locationLabel =
      "Location (City)" in answer.regular
        ? "Location (City)"
        : "Location / City"
    let locationValue = answer.regular[locationLabel]

    if (locationValue != null) {
      let candidates =
        typeof locationValue === "string"
          ? [locationValue]
          : Array.isArray(locationValue)
            ? [...locationValue]
            : []
      let expanded = []

      for (let candidate of candidates) {
        if (typeof candidate !== "string") continue
        candidate = candidate
          .replace(/,\s*(USA|United States?)$/i, "")
          .trim()
        let withState = expandCityStateAbbreviation(candidate)
        if (withState && withState !== candidate) expanded.push(withState)
        expanded.push(candidate)
      }

      if (expanded.length > 0) {
        answer.regular[locationLabel] = expanded
      }
    }

    let websiteKey = Object.keys(answer.regular).find(
      (key) => key.toLowerCase() === "website",
    )
    let hasLinkedIn = Object.keys(answer.regular).some((key) =>
      /linkedin/i.test(key),
    )

    if (websiteKey && hasLinkedIn) {
      let websiteValue = Array.isArray(answer.regular[websiteKey])
        ? answer.regular[websiteKey][0]
        : answer.regular[websiteKey]
      if (
        typeof websiteValue === "string" &&
        /linkedin\.com/i.test(websiteValue)
      ) {
        delete answer.regular[websiteKey]
      }
    }
  }

  return answer
}

export { formatAnswer }
