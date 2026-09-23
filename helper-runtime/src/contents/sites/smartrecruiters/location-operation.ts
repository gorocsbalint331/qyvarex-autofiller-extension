// @ts-nocheck
/**
 * SmartRecruiters — city autocomplete resolve / commit helpers.
 */

import * as profileLocation from "../profile-location-original-answer.ts"

const CITY_LABEL = "city"
const CITY_INPUT_SR_ID = "location-autocomplete-search-search-input"
const CITY_AUTOCOMPLETE_PATH = "/oneclick-ui/api/location/autocomplete"
const DEFAULT_DC_ID = "DCRA1"

const isSmartRecruitersCityAutocompleteUrl = (url) =>
  "https:" === url.protocol &&
  ("smartrecruiters.com" === url.hostname ||
    url.hostname.endsWith(".smartrecruiters.com")) &&
  url.pathname === CITY_AUTOCOMPLETE_PATH

const normalizeText = (value) =>
  String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()

async function runDeferredSmartRecruitersCityResolution({
  startResolve,
  fillOtherFields,
  commitResolvedCity,
}) {
  let resolvePromise
  try {
    resolvePromise = Promise.resolve(startResolve()).catch(() => null)
  } catch {
    resolvePromise = Promise.resolve(null)
  }
  await fillOtherFields()
  await commitResolvedCity(await resolvePromise)
}

function getSmartRecruitersCityBootstrapQuery(originalAnswer) {
  return originalAnswer.split(",", 1)[0]?.trim() ?? ""
}

function getSmartRecruitersCityInputSequence(query) {
  const chars = Array.from(query)
  return chars.map((_, index) => chars.slice(0, index + 1).join(""))
}

function buildSmartRecruitersCityFallbackRequestUrl({
  pageUrl,
  query,
  language,
}) {
  const page = new URL(pageUrl)
  if (
    "https:" !== page.protocol ||
    ("smartrecruiters.com" !== page.hostname &&
      !page.hostname.endsWith(".smartrecruiters.com"))
  ) {
    throw Error("Invalid SmartRecruiters page URL")
  }
  const requestUrl = new URL(CITY_AUTOCOMPLETE_PATH, page.origin)
  requestUrl.searchParams.set("q", query)
  requestUrl.searchParams.set("dcId", DEFAULT_DC_ID)
  requestUrl.searchParams.set("language", language?.trim() || "en")
  return requestUrl.toString()
}

function isSmartRecruitersCityAutocompleteRule(rule) {
  return (
    normalizeText(rule?.label) === CITY_LABEL &&
    rule?.$input?.getAttribute?.("data-sr-id") === CITY_INPUT_SR_ID
  )
}

function getSmartRecruitersCityOriginalAnswer(answer, fallback) {
  const fromProfile = profileLocation.getProfileLocationOriginalAnswer(answer)
  if (fromProfile.value) return fromProfile
  const trimmed = fallback.trim()
  return { value: trimmed, source: trimmed ? "regular" : "" }
}

function buildSmartRecruitersCityOperation({ requestUrl, originalAnswer }) {
  const url = new URL(requestUrl)
  if (!isSmartRecruitersCityAutocompleteUrl(url)) {
    throw Error("Invalid SmartRecruiters City autocomplete URL")
  }
  return {
    field_type: "location",
    question: "Which City matches the candidate's profile location?",
    description:
      "Search the SmartRecruiters City autocomplete and select the option that best matches the candidate's city, state or region, and country.",
    original_answer: originalAnswer,
    search_request_schema: {
      url: `${url.origin}${url.pathname}`,
      allowed_methods: ["GET"],
      headers: { accept: "application/json, text/plain, */*" },
      params: [
        {
          name: "q",
          location: "query",
          description: "Free-text City search query.",
          default_value: "",
          isSearchParam: true,
        },
        {
          name: "dcId",
          location: "query",
          description: "SmartRecruiters data-center identifier.",
          default_value: url.searchParams.get("dcId") || "",
          isMetaParam: true,
        },
        {
          name: "language",
          location: "query",
          description: "SmartRecruiters result language.",
          default_value: url.searchParams.get("language") || "en",
          isMetaParam: true,
        },
      ],
    },
  }
}

function getSmartRecruitersResolvedCityValue(response) {
  if (response?.result?.action !== "SELECT_OPTIONS") return ""
  const selected = response.result.selected_values[0]
  return "string" == typeof selected ? selected.trim() : ""
}

function findSmartRecruitersCityRequestUrl(entries, query, startTime) {
  const trimmedQuery = query.trim()
  if (!trimmedQuery) return ""
  for (let index = entries.length - 1; index >= 0; index -= 1) {
    const entry = entries[index]
    if (!(entry.startTime < startTime)) {
      try {
        const url = new URL(entry.name)
        if (
          isSmartRecruitersCityAutocompleteUrl(url) &&
          url.searchParams.get("q") === trimmedQuery &&
          url.searchParams.has("dcId")
        ) {
          return url.toString()
        }
      } catch {
        continue
      }
    }
  }
  return ""
}

function findExactSmartRecruitersCityOption(options, value) {
  const normalized = normalizeText(value)
  return (
    (normalized &&
      options.find(
        (option) =>
          option.getAttribute?.("value") !== "goToManualLocationMode" &&
          normalizeText(option.textContent) === normalized,
      )) ||
    null
  )
}

function isSmartRecruitersCityCommitted({
  inputValue,
  resolvedValue,
  expanded,
  autocompleteValue,
}) {
  return (
    normalizeText(inputValue) === normalizeText(resolvedValue) &&
    "true" !== expanded &&
    !!String(autocompleteValue ?? "").trim()
  )
}

export {
  buildSmartRecruitersCityFallbackRequestUrl,
  buildSmartRecruitersCityOperation,
  findExactSmartRecruitersCityOption,
  findSmartRecruitersCityRequestUrl,
  getSmartRecruitersCityBootstrapQuery,
  getSmartRecruitersCityInputSequence,
  getSmartRecruitersCityOriginalAnswer,
  getSmartRecruitersResolvedCityValue,
  isSmartRecruitersCityAutocompleteRule,
  isSmartRecruitersCityCommitted,
  runDeferredSmartRecruitersCityResolution,
}
