// @ts-nocheck
/**
 * PinpointHQ — address country control detection and prefill settlement.
 */

import * as delay from "../../../utils/delay.js"

const COUNTRY_FIELD_NAME = "application_form[application][country]"
export const PINPOINT_COUNTRY_VISIBLE_VALUE_SELECTOR =
  ".react-select__single-value"
const ADDRESS_REACT_ROOT =
  '[id^="Shared::Form::Address-react-component-"]'
export const PINPOINT_COUNTRY_NATIVE_SELECT =
  "select#application_form\\[application\\]\\[country\\]"

export function hasPinpointAddressCountryControl(root = document) {
  const select = root.querySelector(PINPOINT_COUNTRY_NATIVE_SELECT)
  return !!select?.closest("#address-country")
}

function normalizeText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export function isPinpointCountrySelectionSettled({
  expectedCode,
  expectedLabel,
  nativeCode,
  visibleLabel,
}) {
  return (
    normalizeText(nativeCode) === normalizeText(expectedCode) &&
    normalizeText(visibleLabel) === normalizeText(expectedLabel)
  )
}

export function isPinpointCountryCommitSettled({
  expectedCode,
  expectedLabel,
  nativeCode,
  submittedCode,
  visibleLabel,
}) {
  return (
    isPinpointCountrySelectionSettled({
      expectedCode,
      expectedLabel,
      nativeCode,
      visibleLabel,
    }) &&
    normalizeText(submittedCode) === normalizeText(expectedCode)
  )
}

export function getPinpointAddressSchemaSignature(root = document) {
  const addressRoot = root.querySelector(ADDRESS_REACT_ROOT)
  if (!addressRoot) return ""
  return Array.from(addressRoot.querySelectorAll(".external-form__label"))
    .map((label) => normalizeText(label.textContent))
    .filter(Boolean)
    .join("|")
}

export function isPinpointAddressSchemaCompatibleWithCountry(
  signature,
  countryCode,
) {
  const labels = new Set(
    String(signature ?? "")
      .split("|")
      .map(normalizeText)
      .filter(Boolean),
  )
  const code = String(countryCode ?? "")
    .trim()
    .toUpperCase()

  if (code === "GB") return labels.has("postcode")
  if (code === "US") {
    const hasState = ["state", "state / province", "state/province"].some(
      (label) => labels.has(label),
    )
    const hasZip = ["zipcode", "zip code", "zip"].some((label) =>
      labels.has(label),
    )
    return hasState && hasZip
  }
  return false
}

export async function waitForPinpointAddressSchemaSettlement(
  readSignature,
  previousSignature,
  options = {},
) {
  const maxAttempts = options.maxAttempts ?? 300
  const pollMs = options.pollMs ?? 50
  const stableReads = options.stableReads ?? 2
  let lastSignature = ""
  let stableCount = 0

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (attempt > 0 || pollMs > 0) await delay.delay(pollMs)
    const current = readSignature()
    if (!current) {
      lastSignature = ""
      stableCount = 0
      continue
    }
    if (current === lastSignature) stableCount += 1
    else {
      lastSignature = current
      stableCount = 1
    }
    if (current !== previousSignature && stableCount >= stableReads) {
      return true
    }
  }

  return (
    !!previousSignature &&
    lastSignature === previousSignature &&
    stableCount >= stableReads
  )
}

export function isMainPinpointCountryRule(rule) {
  const input = rule.$input
  return !!(
    input &&
    input.tagName === "SELECT" &&
    (input.name === COUNTRY_FIELD_NAME || input.id === COUNTRY_FIELD_NAME) &&
    input.closest("#address-country")
  )
}

export async function runPinpointCountryPrefill(deps) {
  try {
    const info = await deps.fetchAutofillInfo()
    const country = String(info?.location?.country ?? "").trim()
    console.info(
      `[PinpointHQ][Country] autofill-info-read countryProvided=${!!country}`,
    )
    if (!country) {
      return { country: null, countryCode: "", committed: false }
    }
    const result = await deps.fillCountry(country)
    return {
      country,
      countryCode: result.countryCode,
      committed: result.committed,
    }
  } catch (error) {
    const errorName = error instanceof Error ? error.name : "unknown"
    const detail =
      error instanceof ReferenceError ? error.message : errorName
    console.info(
      `[PinpointHQ][Country] autofill-info-read-failed error=${errorName} detail=${detail}`,
    )
    return { country: null, countryCode: "", committed: false }
  }
}
