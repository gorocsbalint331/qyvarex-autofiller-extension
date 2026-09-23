// @ts-nocheck
/**
 * Eightfold CareerHub — location suggestion operation builders (readable TypeScript source of truth).
 */

import * as supportedSites from "../../../core/supported-sites.js"
import * as profileLocationOriginalAnswer from "../profile-location-original-answer.ts"

const SUGGEST_API_PATH = "/api/suggest"
const LOCATION_DICTIONARY = "location_noarea"

function isCareerHubLocationSuggestUrl(url) {
  return (
    url.protocol === "https:" &&
    url.hostname.endsWith(".eightfold.ai") &&
    supportedSites.isEightfoldCareerHubJobPath(url.pathname)
  )
}

export function getCareerHubLocationOriginalAnswer(answer, fallbackText) {
  const fromProfile =
    profileLocationOriginalAnswer.getProfileLocationOriginalAnswer(answer)
  if (fromProfile.value) return fromProfile
  const trimmed = fallbackText.trim()
  return { value: trimmed, source: trimmed ? "regular" : "" }
}

export function buildCareerHubLocationOperation({
  currentUrl,
  question,
  originalAnswer,
}) {
  const url = new URL(currentUrl)
  if (!isCareerHubLocationSuggestUrl(url)) {
    throw Error("Invalid Eightfold CareerHub URL")
  }
  return {
    field_type: "location",
    question,
    description:
      "Search Eightfold CareerHub Location suggestions and select the suggestions[].term value that best matches the candidate's city, state or region, and country.",
    original_answer: originalAnswer,
    search_request_schema: {
      url: new URL(SUGGEST_API_PATH, url.origin).toString(),
      allowed_methods: ["GET"],
      headers: {
        accept: "application/json, text/plain, */*",
        referer: currentUrl,
      },
      params: [
        {
          name: "term",
          location: "query",
          description: "Free-text Eightfold CareerHub Location search query.",
          default_value: "",
          isSearchParam: true,
        },
        {
          name: "dictionary",
          location: "query",
          description: "Eightfold Location suggestion dictionary.",
          default_value: LOCATION_DICTIONARY,
          isMetaParam: true,
        },
      ],
    },
  }
}

export function getCareerHubResolvedLocationValue(resolveResult) {
  if (resolveResult?.result?.action !== "SELECT_OPTIONS") return ""
  const selected = resolveResult.result.selected_values[0]
  return typeof selected === "string" ? selected.trim() : ""
}
