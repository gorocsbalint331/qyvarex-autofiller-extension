// @ts-nocheck
/**
 * ADP WorkforceNow — Google Places address resolution for Address Line 1.
 */

function createAdpAddressSessionToken() {
  const uuid = globalThis.crypto?.randomUUID?.()
  return uuid || `adp-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function firstText(value) {
  if (typeof value === "string") return value.trim()
  if (Array.isArray(value)) return value.map(firstText).find(Boolean) ?? ""
  if (value && typeof value === "object") {
    return firstText(value.value ?? value.label ?? value.name)
  }
  return ""
}

function normalizeKey(value) {
  return firstText(value)
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase()
}

function pickFromObject(obj, labels) {
  if (!obj || typeof obj !== "object") return ""
  const wanted = new Set(labels.map(normalizeKey))
  for (const [key, value] of Object.entries(obj)) {
    if (!wanted.has(normalizeKey(key))) continue
    const text = firstText(value)
    if (text) return text
  }
  return ""
}

function pickFromProfile(answer, keys) {
  if (!answer || typeof answer !== "object") return ""
  for (const profile of [answer.profileData, answer.profile_data]) {
    if (!profile || typeof profile !== "object") continue
    const location = profile.location ?? profile.Location ?? profile
    for (const source of new Set([location, profile])) {
      for (const key of keys) {
        const text = firstText(source[key])
        if (text) return text
      }
    }
  }
  return ""
}

function pickAddressField(answer, regularLabels, profileKeys) {
  const regular = answer && typeof answer === "object" ? answer.regular : undefined
  return pickFromObject(regular, regularLabels) || pickFromProfile(answer, profileKeys)
}

export function getAdpAddressSearchContext(answer) {
  return {
    addressLine1: pickAddressField(
      answer,
      ["Address Line 1", "Address Line1", "Address", "Street Address"],
      ["addressLine", "addressLine1", "address1", "streetAddress"],
    ),
    city: pickAddressField(
      answer,
      ["City", "Town", "City/Town", "Town/City"],
      ["city", "town"],
    ),
    state: pickAddressField(
      answer,
      [
        "State",
        "Province",
        "Territory",
        "State / Territory",
        "Province / Territory",
        "State/Province",
      ],
      ["state", "province", "territory", "region"],
    ),
    postalCode: pickAddressField(
      answer,
      ["Postal Code", "Postcode", "Zip", "Zip Code", "ZIP Code"],
      ["postCode", "postalCode", "postal_code", "postcode", "zip", "zipCode"],
    ),
    country: pickAddressField(answer, ["Country"], ["country"]),
  }
}

export function buildAdpAddressSearchValue(context) {
  const seen = new Set()
  return [context.addressLine1, context.city, context.state, context.postalCode, context.country]
    .map(firstText)
    .filter((part) => {
      const key = part.toLocaleLowerCase()
      if (!key || seen.has(key)) return false
      seen.add(key)
      return true
    })
    .join(", ")
}

export function getAdpAddressSuggestionInput(context) {
  return firstText(context.addressLine1)
}

function normalizeDisplayAddress(value) {
  return firstText(value)
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function selectUniqueAdpAddressSuggestion(suggestions, searchValue) {
  const wanted = normalizeDisplayAddress(searchValue)
  if (!wanted) return null

  const exact = suggestions.filter(
    (item) =>
      firstText(item.placeId).length > 0 &&
      normalizeDisplayAddress(item.displayAddress) === wanted,
  )
  if (exact.length === 1) return exact[0]

  const withPlaceId = suggestions.filter(
    (item) => firstText(item.placeId).length > 0,
  )
  return withPlaceId.length === 1 ? withPlaceId[0] : null
}

function normalizeResolvedPlace(result) {
  if (!result || typeof result !== "object") return null
  if (result.resolved !== true) return null
  const place = {
    addressLine: firstText(result.addressLine),
    city: firstText(result.city),
    state: firstText(result.state),
    postalCode: firstText(result.postalCode),
  }
  return place.addressLine ? place : null
}

export async function resolveAdpWorkforceNowAddress({
  answer,
  requestSuggestions,
  resolveSuggestion,
  sessionToken,
}) {
  const context = getAdpAddressSearchContext(answer)
  const suggestionInput = getAdpAddressSuggestionInput(context)
  const searchValue = buildAdpAddressSearchValue(context)
  if (suggestionInput.length < 3 || searchValue.length < 3) return null

  const suggestionsRaw = await requestSuggestions({
    input: suggestionInput,
    sessionToken,
    countryCodes: ["US", "CA", "GB"],
    limit: 5,
  })
  const suggestions = Array.isArray(suggestionsRaw) ? suggestionsRaw : []
  const match = selectUniqueAdpAddressSuggestion(suggestions, searchValue)
  const placeId = firstText(match?.placeId)
  if (!placeId) return null

  return normalizeResolvedPlace(
    await resolveSuggestion({ placeId, sessionToken }),
  )
}

function normalizeLabelKey(label) {
  return label.replace(/\*+/g, "").replace(/\s+/g, " ").trim().toLocaleLowerCase()
}

function valueForLabel(label, resolved) {
  const key = normalizeLabelKey(label)
  if (key === "address line 1") return firstText(resolved.addressLine)
  if (key === "city") return firstText(resolved.city)
  if (
    key === "state" ||
    key === "province" ||
    key === "territory" ||
    key === "state / territory" ||
    key === "province / territory" ||
    key === "state/province"
  ) {
    return firstText(resolved.state)
  }
  if (
    key === "postal code" ||
    key === "postcode" ||
    key === "zip" ||
    key === "zip code"
  ) {
    return firstText(resolved.postalCode)
  }
  return ""
}

export function applyResolvedAdpAddressToRegularAnswers(
  regular,
  labels,
  resolved,
) {
  const next = { ...(regular ?? {}) }
  for (const label of labels) {
    const value = valueForLabel(label, resolved)
    if (value) next[label] = value
  }
  return next
}

export { createAdpAddressSessionToken }
