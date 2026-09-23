// @ts-nocheck
/**
 * Zoho Recruit — city autocomplete resolve operation helpers.
 */

import * as profileLocationOriginalAnswer from "../profile-location-original-answer.ts"

const LOCATIONS_SEARCH_PATH = "/recruit/v2/public/Locations/search"

const normalizeOptionText = (value) =>
  String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()

function getPostalCodeFromProfile(answer, source) {
  const profile =
    source === "profileData.location"
      ? answer?.profileData
      : source === "profile_data.location"
        ? answer?.profile_data
        : null
  const location =
    profile?.location ?? profile?.Location ?? profile
  const postalCode =
    location?.postCode ??
    location?.postalCode ??
    location?.postal_code ??
    location?.zipCode ??
    location?.zip_code
  return typeof postalCode == "string" ? postalCode.trim() : ""
}

function isZohoRecruitCityUrl(url) {
  return (
    url.protocol === "https:" &&
    (url.hostname === "zohorecruit.com" ||
      url.hostname.endsWith(".zohorecruit.com"))
  )
}

export function isZohoRecruitCityAutocompleteRule(rule) {
  return (
    rule?.__zohoSemanticType === "address.city" &&
    !!rule?.$input?.closest?.("lyte-autocomplete")
  )
}

export function getZohoRecruitCityOriginalAnswer(
  answer,
  cityFallback,
  postalFallback = "",
) {
  const profileAnswer =
    profileLocationOriginalAnswer.getProfileLocationOriginalAnswer(answer)
  if (profileAnswer.value) {
    const postalCode = getPostalCodeFromProfile(
      answer,
      profileAnswer.source,
    )
    return {
      ...profileAnswer,
      value: [profileAnswer.value, postalCode].filter(Boolean).join(", "),
    }
  }
  const fallbackValue = [cityFallback.trim(), postalFallback.trim()]
    .filter(Boolean)
    .join(", ")
  return {
    value: fallbackValue,
    source: fallbackValue ? "regular" : "",
  }
}

export function shouldRestoreZohoPostalCode({
  postalCode,
  currentPostalCode,
}) {
  return !!postalCode.trim() && !currentPostalCode.trim()
}

export function buildZohoRecruitCityOperation({ pageUrl, originalAnswer }) {
  const url = new URL(pageUrl)
  if (!isZohoRecruitCityUrl(url)) {
    throw Error("Invalid Zoho Recruit City autocomplete URL")
  }
  return {
    field_type: "location",
    question:
      "Which Zoho Recruit City option matches the candidate location?",
    description:
      "Search Zoho Recruit City suggestions and choose the one locations[].value that best matches the candidate city, state or region, and country.",
    original_answer: originalAnswer,
    search_request_schema: {
      url: `${url.origin}${LOCATIONS_SEARCH_PATH}`,
      allowed_methods: ["GET"],
      headers: {
        accept: "application/json, text/plain, */*",
      },
      params: [
        {
          name: "searchtxt",
          location: "query",
          description:
            "Full candidate City, State or Region, Country, and Postal Code search text.",
          default_value: "",
          isSearchParam: true,
        },
        {
          name: "field_name",
          location: "query",
          description: "Zoho location field to search.",
          default_value: "City",
          isMetaParam: true,
        },
        {
          name: "selected_country",
          location: "query",
          description: "Current Zoho form country filter, empty when unset.",
          default_value: "",
          isMetaParam: true,
        },
      ],
    },
  }
}

export function getZohoRecruitResolvedCityValue(response) {
  if (response?.result?.action !== "SELECT_OPTIONS") return ""
  const selected = response.result.selected_values[0]
  return typeof selected == "string" ? selected.trim() : ""
}

export function findExactZohoRecruitCityOption(options, value) {
  const normalized = normalizeOptionText(value)
  if (!normalized) return null
  const matches = options.filter(
    (option) => normalizeOptionText(option.textContent) === normalized,
  )
  return matches.length === 1 ? matches[0] : null
}
