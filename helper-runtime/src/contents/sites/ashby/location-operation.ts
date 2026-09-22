// @ts-nocheck
/**
 * Ashby — GeoLocation resolve operation builders and rule helpers.
 */

import * as enums from "../../../core/enums.js"

const GEO_LOCATION_OP = "ApiAutocompleteGeoLocation"
const DEFAULT_LOCATION_TYPES = ["Country", "Region", "City"]
const LOCATION_TYPE_SET = new Set(DEFAULT_LOCATION_TYPES)

const GEO_LOCATION_QUERY = `
query ApiAutocompleteGeoLocation($text: String!, $locationTypes: [GeoLocationType!]) {
autocompleteGeoLocation(text: $text, locationTypes: $locationTypes) {
suggestions {
name
}
}
}
`

export function isAshbyGeoLocationRule(rule) {
  return (
    rule.type === enums.FIELD_TYPE.ASHBY_SEARCH &&
    (!!rule.$input.closest('[data-field-path="_systemfield_location"]') ||
      rule.$input.getAttribute("data-jr-ashby-field-type") === "location")
  )
}

export function getAshbyGeoLocationTypes(rule) {
  let raw = rule.$input.getAttribute("data-jr-ashby-location-types")
  if (!raw) return [...DEFAULT_LOCATION_TYPES]

  try {
    let parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return [...DEFAULT_LOCATION_TYPES]
    let filtered = parsed.filter(
      (item) => typeof item === "string" && LOCATION_TYPE_SET.has(item),
    )
    return filtered.length > 0 ? filtered : [...DEFAULT_LOCATION_TYPES]
  } catch {
    return [...DEFAULT_LOCATION_TYPES]
  }
}

export function buildAshbyLocationOperation({
  currentUrl,
  originalAnswer,
  locationTypes = DEFAULT_LOCATION_TYPES,
}) {
  let endpoint = new URL("/api/non-user-graphql", currentUrl)
  endpoint.searchParams.set("op", GEO_LOCATION_OP)

  return {
    field_type: "location",
    question: "Location",
    description:
      "Search Ashby's GeoLocation options and select a suggestion by name.",
    original_answer: originalAnswer,
    search_request_schema: {
      url: endpoint.toString(),
      allowed_methods: ["GET"],
      headers: {
        accept: "application/json",
        referer: currentUrl,
      },
      params: [
        {
          name: "operationName",
          location: "query",
          description: "Ashby GraphQL operation name.",
          default_value: GEO_LOCATION_OP,
          isMetaParam: true,
        },
        {
          name: "variables",
          location: "query",
          description: `Keep this parameter as valid JSON while changing only "text"; preserve the fixed locationTypes ${JSON.stringify(locationTypes)}.`,
          default_value: JSON.stringify({
            text: "",
            locationTypes,
          }),
          isSearchParam: true,
        },
        {
          name: "query",
          location: "query",
          description: "Ashby location autocomplete GraphQL query.",
          default_value: GEO_LOCATION_QUERY,
          isMetaParam: true,
        },
      ],
    },
  }
}

export function getAshbyResolvedLocationValue(resolveResponse) {
  if (resolveResponse?.result?.action !== "SELECT_OPTIONS") return ""
  let first = resolveResponse.result.selected_values[0]
  return typeof first === "string" ? first.trim() : ""
}
