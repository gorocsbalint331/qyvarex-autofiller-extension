// @ts-nocheck
/**
 * Address suggestion session helpers and response mappers.
 */

import { normalizeCountryInput } from "../../utils/address-lookup.ts"
import { normalizeAutofillLocation } from "../../utils/location-normalizer.ts"

export const ADDRESS_SUGGESTION_DEBOUNCE_WAIT = 800
export const ADDRESS_SUGGESTION_LIMIT = 5
export const ADDRESS_SUGGESTION_MIN_QUERY_LENGTH = 4

const DEFAULT_COUNTRY_CODES = ["US", "CA", "GB"]

function trimValue(value) {
  return (value ?? "").trim()
}

function normalizeQuery(value) {
  return trimValue(value).replace(/\s+/g, " ")
}

function normalizeQueryKey(value) {
  return normalizeQuery(value).toLowerCase()
}

function fallbackSessionToken() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function createAddressSuggestionSessionToken() {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID()
  }
  return fallbackSessionToken()
}

export function createAddressSuggestionSession(
  createToken = createAddressSuggestionSessionToken,
) {
  let sessionToken = createToken()
  let lastQueryKey = ""

  return {
    getToken: () => sessionToken,
    startRequest: (input) => {
      const normalized = normalizeQuery(input)
      if (!isAddressSuggestionQueryEligible(normalized)) return null
      const queryKey = normalizeQueryKey(normalized)
      if (lastQueryKey === queryKey) return null
      lastQueryKey = queryKey
      return { input: normalized, sessionToken }
    },
    completeSession: (token) => {
      if (token === sessionToken) {
        sessionToken = createToken()
        lastQueryKey = ""
      }
    },
  }
}

export function isAddressSuggestionQueryEligible(query) {
  return trimValue(query).length >= ADDRESS_SUGGESTION_MIN_QUERY_LENGTH
}

export function getAddressSuggestionCountryCodes(_country) {
  return [...DEFAULT_COUNTRY_CODES]
}

export function getAddressSuggestionRequestParams(
  input,
  sessionToken,
  country,
) {
  return {
    input: trimValue(input),
    sessionToken,
    countryCodes: getAddressSuggestionCountryCodes(country),
    limit: ADDRESS_SUGGESTION_LIMIT,
  }
}

export function getAddressSuggestionOptions(suggestions) {
  return suggestions.reduce((options, suggestion, index) => {
    const placeId = trimValue(suggestion.placeId)
    const displayAddress = trimValue(suggestion.displayAddress)
    if (placeId && displayAddress) {
      options.push({
        label: displayAddress,
        value: `${placeId}-${index}`,
        originData: suggestion,
      })
    }
    return options
  }, [])
}

export function shouldApplyAddressSuggestionResponse(requestInput, latestInput) {
  return trimValue(requestInput) === trimValue(latestInput)
}

export function getResolvedAddressPersonalPatch(personal, resolved) {
  if (!resolved?.resolved) return {}

  const patch = {}
  const addressLine =
    trimValue(resolved.addressLine) || trimValue(resolved.formattedAddress)
  const country = normalizeCountryInput(
    trimValue(resolved.country) || trimValue(resolved.countryCode),
  )
  const location = normalizeAutofillLocation({
    country,
    state: resolved.state,
    city: resolved.city,
  })
  const county = trimValue(resolved.county)
  const postalCode = trimValue(resolved.postalCode)

  if (addressLine) patch.addressLine = addressLine
  if (country) patch.country = country
  if (location.state) patch.state = location.state
  if (location.city) patch.city = location.city
  if (county) patch.county = county
  if (postalCode) patch.postalCode = postalCode

  return patch
}
