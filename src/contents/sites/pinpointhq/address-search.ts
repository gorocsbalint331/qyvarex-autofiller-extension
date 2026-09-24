// @ts-nocheck
/**
 * PinpointHQ — Find Address (Google Places / Mapbox autocomplete) search fill.
 */

import * as messaging from "@plasmohq/messaging"
import * as delay from "../../../utils/delay.js"
import * as country from "./country.ts"

const ADDRESS1_NAME = "application_form[application][address1]"
const COUNTRY_HIDDEN_NAME = "application_form[application][country]"
const FIND_ADDRESS_TRIGGER =
  "#google-places-autocomplete button.bp3-select-button"
const SELECT_POPOVER = ".bp3-portal .bp3-select-popover"
const LIVE_INPUT = `${SELECT_POPOVER} input.bp3-input`
const MENU_LIST = `${SELECT_POPOVER} ul.bp3-menu`
const CANDIDATE_WAIT_ATTEMPTS = 100

function normalizeSearchText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function coerceText(value) {
  if (typeof value === "string") return value.trim()
  if (Array.isArray(value)) return value.map(coerceText).find(Boolean) ?? ""
  if (value && typeof value === "object") {
    const record = value
    return coerceText(record.value ?? record.label ?? record.name)
  }
  return ""
}

function normalizeKey(value) {
  return coerceText(value)
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase()
}

function pickFromRegular(regular, labels) {
  if (!regular || typeof regular !== "object") return ""
  const wanted = new Set(labels.map(normalizeKey))
  for (const [key, value] of Object.entries(regular)) {
    if (!wanted.has(normalizeKey(key))) continue
    const text = coerceText(value)
    if (text) return text
  }
  return ""
}

function pickFromProfile(answer, keys) {
  if (!answer || typeof answer !== "object") return ""
  for (const profile of [answer.profileData, answer.profile_data]) {
    if (!profile || typeof profile !== "object") continue
    const location =
      profile.location ?? profile.Location ?? profile
    for (const key of keys) {
      const text = coerceText(location[key])
      if (text) return text
    }
  }
  return ""
}

export function getPinpointAddressSearchContext(answer) {
  const regular =
    answer && typeof answer === "object" ? answer.regular : undefined
  const pick = (labels, profileKeys) =>
    pickFromRegular(regular, labels) || pickFromProfile(answer, profileKeys)
  return {
    city: pick(
      ["City", "Town", "City/Town", "Town/City"],
      ["city", "town"],
    ),
    state: pick(
      [
        "State",
        "Province",
        "Region",
        "State/Province",
        "State/Region",
        "County/State",
      ],
      ["state", "province", "region", "county"],
    ),
    postalCode: pick(
      ["Postal Code", "Postcode", "Zip", "ZIP Code", "Zip/Postal Code"],
      ["postal_code", "postalCode", "postcode", "zip", "zipCode"],
    ),
    country: pick(["Country"], ["country"]),
  }
}

export function buildPinpointAddressSearchValue({
  addressLine1,
  city,
  state,
  postalCode,
  country,
}) {
  const seen = new Set()
  return [addressLine1, city, state, postalCode, country]
    .map(coerceText)
    .filter((part) => {
      const normalized = normalizeSearchText(part)
      if (!normalized || seen.has(normalized)) return false
      seen.add(normalized)
      return true
    })
    .join(", ")
}

function originFromUrl(url) {
  try {
    return new URL(url).origin
  } catch {
    return ""
  }
}

function logAddress(event, detail = {}) {
  console.info("[PinpointHQ][Address]", event, detail)
}

function setNativeInputValue(input, value) {
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )?.set
  if (setter) setter.call(input, value)
  else input.value = value
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
}

export function isPinpointAddressLine1Rule(rule) {
  const input = rule.$input
  return (
    input?.name === ADDRESS1_NAME ||
    input?.getAttribute?.("name") === ADDRESS1_NAME
  )
}

export function hasPinpointFindAddress(root = document) {
  return !!root.querySelector(FIND_ADDRESS_TRIGGER)
}

export function buildPinpointAddressSearchOperation({
  currentUrl,
  addressLine1,
  city,
  state,
  postalCode,
  country,
  countryCode,
}) {
  const origin = originFromUrl(currentUrl)
  return {
    field_type: "location",
    question: "Find Address",
    description:
      "Search Pinpoint Find Address with Address Line 1, City, State or Province, Postal Code, and Country. The response contains addresses with formattedAddress and structured address context. Select only the address matching the original answer.",
    original_answer: buildPinpointAddressSearchValue({
      addressLine1,
      city,
      state,
      postalCode,
      country,
    }),
    search_request_schema: {
      url: `${origin}/mapbox/autocomplete`,
      allowed_methods: ["GET"],
      headers: {
        accept: "application/json, text/plain, */*",
        ...(origin ? { origin, referer: currentUrl } : {}),
      },
      params: [
        {
          name: "query",
          location: "query",
          description: "Pinpoint address search query.",
          default_value: "",
          isSearchParam: true,
        },
        {
          name: "countryCode",
          location: "query",
          description: "Committed Pinpoint Country ISO2 value.",
          default_value: countryCode,
          isMetaParam: true,
        },
      ],
    },
  }
}

export function findUniquePinpointAddressCandidate(candidates, targetText) {
  const normalized = normalizeSearchText(targetText)
  if (!normalized) return null
  const matches = candidates.filter((candidate) =>
    [candidate.text, ...(candidate.exactTexts ?? [])].some(
      (text) => normalizeSearchText(text) === normalized,
    ),
  )
  return matches.length === 1 ? matches[0] : null
}

function readCommittedCountry(root) {
  const section = root.querySelector("#address-country")
  const hidden = Array.from(
    section?.querySelectorAll('input[type="hidden"]') ?? [],
  ).find((input) => input.name === COUNTRY_HIDDEN_NAME)
  const native = section?.querySelector(country.PINPOINT_COUNTRY_NATIVE_SELECT)
  const hiddenCode = String(hidden?.value ?? "")
    .trim()
    .toUpperCase()
  const nativeCode = String(native?.value ?? "")
    .trim()
    .toUpperCase()
  const countryCode = /^[A-Z]{2}$/.test(hiddenCode)
    ? hiddenCode
    : /^[A-Z]{2}$/.test(nativeCode)
      ? nativeCode
      : ""
  const countryLabel = coerceText(native?.selectedOptions?.[0]?.textContent)
  return { countryCode, country: countryLabel }
}

async function waitFor(predicate, maxAttempts = 20) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const value = predicate()
    if (value) return value
    await delay.delay(50)
  }
  return null
}

export async function waitForUniquePinpointAddressCandidate(
  getCandidates,
  targetText,
) {
  return await waitFor(
    () => findUniquePinpointAddressCandidate(getCandidates(), targetText),
    CANDIDATE_WAIT_ATTEMPTS,
  )
}

function collectExactTexts(element) {
  const nodes = [element, ...Array.from(element.querySelectorAll("*"))]
  return Array.from(
    new Set(
      nodes
        .map((node) =>
          String(node.innerText || node.textContent || "")
            .replace(/\s+/g, " ")
            .trim(),
        )
        .filter(Boolean),
    ),
  )
}

function readAddressCandidates(root) {
  const menu = root.querySelector(MENU_LIST)
  if (!menu) return []
  const items = Array.from(
    menu.querySelectorAll(".bp3-menu-item, [role=menuitem], button, a"),
  )
  const nodes = (
    items.length > 0 ? items : Array.from(menu.children)
  ).filter(
    (node, _index, all) =>
      !all.some((other) => other !== node && other.contains(node)),
  )
  return nodes
    .map((element) => ({
      element,
      text: String(element.textContent ?? "")
        .replace(/\s+/g, " ")
        .trim(),
      exactTexts: collectExactTexts(element),
    }))
    .filter((candidate) => !!candidate.text)
}

function selectedAddressFromResolver(response) {
  return response?.result.action === "SELECT_OPTIONS"
    ? String(response.result.selected_values[0] ?? "").trim()
    : ""
}

export async function fillPinpointAddressLine1Search({
  rule,
  value,
  currentUrl,
  addressContext = {},
  root = document,
  resolveOperation = async (operation) =>
    await messaging.sendToBackground({
      name: "resolveAutofillOperation",
      body: { operation, source: "pinpointhq" },
    }),
}) {
  const addressLine1 = String(value ?? "").trim()
  const committed = readCommittedCountry(root)
  const countryCode = committed.countryCode
  const countryLabel = addressContext.country || committed.country
  const searchValue = buildPinpointAddressSearchValue({
    addressLine1,
    ...addressContext,
    country: countryLabel,
  })
  const targetInput = rule.$input

  logAddress("search:prepare", {
    hasCountryCode: !!countryCode,
    searchLength: searchValue.length,
    hasCity: !!addressContext.city,
    hasState: !!addressContext.state,
    hasPostalCode: !!addressContext.postalCode,
    hasCountry: !!countryLabel,
    hasTarget: !!targetInput,
  })

  if (
    !addressLine1 ||
    !countryCode ||
    !targetInput ||
    !isPinpointAddressLine1Rule(rule)
  ) {
    return false
  }

  let selectedAddress = ""
  try {
    selectedAddress = selectedAddressFromResolver(
      await resolveOperation(
        buildPinpointAddressSearchOperation({
          currentUrl,
          addressLine1,
          ...addressContext,
          country: countryLabel,
          countryCode,
        }),
      ),
    )
  } catch {
    logAddress("search:resolver-error")
    return false
  }

  if (!selectedAddress) {
    logAddress("search:no-selected-address")
    return false
  }

  const trigger = root.querySelector(FIND_ADDRESS_TRIGGER)
  if (!trigger) {
    logAddress("search:no-trigger")
    return false
  }
  trigger.click()

  const liveInput = await waitFor(() => root.querySelector(LIVE_INPUT))
  if (!liveInput) {
    logAddress("search:no-live-input")
    return false
  }
  setNativeInputValue(liveInput, selectedAddress)

  let candidateCount = 0
  const match = await waitForUniquePinpointAddressCandidate(() => {
    const candidates = readAddressCandidates(root)
    candidateCount = candidates.length
    return candidates
  }, selectedAddress)

  logAddress("search:candidates", {
    count: candidateCount,
    exactMatch: !!match,
  })
  if (!match?.element) return false

  match.element.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  match.element.click()

  const committedInput = await waitFor(() =>
    String(targetInput.value ?? "").trim() ? targetInput : null,
  )
  logAddress("search:commit", { committed: !!committedInput })
  return !!committedInput
}
