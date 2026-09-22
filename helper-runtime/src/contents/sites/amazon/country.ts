// @ts-nocheck
/**
 * Amazon ATS country select helpers (main address Country/Region).
 */

import * as delay from "../../../utils/delay.js"

const COUNTRY_ALIAS_SETS = [
  /* @__PURE__ */ new Set([
    "us",
    "usa",
    "united states",
    "united states of america",
  ]),
  /* @__PURE__ */ new Set(["ca", "canada"]),
  /* @__PURE__ */ new Set([
    "uk",
    "gb",
    "gbr",
    "great britain",
    "united kingdom",
  ]),
]

const COUNTRY_HIDDEN_INPUT_SELECTOR =
  'input.country-input[name^="applicant[addresses]"][name$="[country_id]"]'

export function normalizeAmazonCountry(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function getCountryAliasSet(value) {
  let normalized = normalizeAmazonCountry(value)
  return normalized
    ? (COUNTRY_ALIAS_SETS.find((set) => set.has(normalized)) ??
        /* @__PURE__ */ new Set([normalized]))
    : /* @__PURE__ */ new Set()
}

export function resolveAmazonCountryOption(options, countryValue) {
  let aliases = getCountryAliasSet(countryValue)
  if (0 === aliases.size) return null

  let matches = Array.from(options).filter((option) => {
    let text = normalizeAmazonCountry(option.text || option.textContent)
    let value = normalizeAmazonCountry(option.value)
    return aliases.has(text) || aliases.has(value)
  })

  return 1 === matches.length ? matches[0] : null
}

export function isAmazonCountrySelected(selectEl, countryValue) {
  let options = Array.from(selectEl.options)
  let match = resolveAmazonCountryOption(options, countryValue)
  if (!match) return false

  let index = options.indexOf(match)
  return (
    index >= 0 &&
    selectEl.selectedIndex === index &&
    selectEl.value === options[index].value &&
    options[index].selected
  )
}

export function selectAmazonCountryIfNeeded(selectEl, countryValue) {
  if (!selectEl?.options?.length) return false

  let options = Array.from(selectEl.options)
  let match = resolveAmazonCountryOption(options, countryValue)
  if (!match) return false

  let index = options.indexOf(match)
  if (index < 0 || isAmazonCountrySelected(selectEl, countryValue)) return false

  selectEl.value = options[index].value
  selectEl.selectedIndex = index
  options.forEach((option, optionIndex) => {
    option.selected = optionIndex === index
  })
  selectEl.dispatchEvent(new Event("change", { bubbles: true }))
  return true
}

export function isMainAmazonCountrySelect(el) {
  if (!el || "SELECT" !== el.tagName) return false

  let selectEl = el
  if (!selectEl.classList?.contains("country")) return false

  let dropdown = selectEl.closest(".country-dropdown")
  if (!dropdown) return false

  let label = dropdown.querySelector("#addressCountry-label")
  let hiddenInput = dropdown.querySelector(COUNTRY_HIDDEN_INPUT_SELECTOR)
  let hiddenName = hiddenInput?.getAttribute("name") ?? ""

  return !!(
    label?.textContent?.trim() === "Country/Region" &&
    /^applicant\[addresses\]\[\d+\]\[country_id\]$/.test(hiddenName)
  )
}

export function findMainAmazonCountrySelect(root = document) {
  let selects = Array.from(
    root.querySelectorAll(
      ".question-form.active .country-dropdown > select.country, .application-content .country-dropdown > select.country",
    ),
  ).filter(isMainAmazonCountrySelect)

  return 1 === selects.length ? selects[0] : null
}

function getCountryHiddenInput(selectEl) {
  return (
    selectEl.closest(".country-dropdown")?.querySelector(
      COUNTRY_HIDDEN_INPUT_SELECTOR,
    ) ?? null
  )
}

function getSelect2RenderedText(selectEl) {
  let rendered = selectEl
    .closest(".country-dropdown")
    ?.querySelector(".select2-selection__rendered")
  return rendered
    ? rendered.getAttribute("title") || rendered.textContent?.trim() || ""
    : null
}

function isAmazonCountryCommitted(selectEl, countryValue) {
  if (!isAmazonCountrySelected(selectEl, countryValue)) return false

  let match = resolveAmazonCountryOption(selectEl.options, countryValue)
  let hiddenInput = getCountryHiddenInput(selectEl)
  let renderedText = getSelect2RenderedText(selectEl)

  return (
    !!match &&
    !!hiddenInput &&
    null !== renderedText &&
    hiddenInput.value === match.value &&
    getCountryAliasSet(countryValue).has(normalizeAmazonCountry(renderedText))
  )
}

function restoreSelectState(selectEl, snapshot) {
  if (!selectEl) return

  let options = Array.from(selectEl.options)
  let matchingIndexes = options.reduce((indexes, option, index) => {
    if (option.value === snapshot.value) indexes.push(index)
    return indexes
  }, [])
  let restoreIndex =
    1 === matchingIndexes.length
      ? matchingIndexes[0]
      : options[snapshot.selectedIndex]
        ? snapshot.selectedIndex
        : -1

  if (restoreIndex < 0) return

  selectEl.value = options[restoreIndex].value
  selectEl.selectedIndex = restoreIndex
  options.forEach((option, optionIndex) => {
    option.selected = optionIndex === restoreIndex
  })
  selectEl.dispatchEvent(new Event("change", { bubbles: true }))
}

export async function prefillAmazonCountry(
  countryValue,
  root = document,
  options = {},
) {
  let normalized = normalizeAmazonCountry(countryValue)
  if (!normalized)
    return (
      console.warn("[Amazon][Country] skipped: fresh AFI country is empty"),
      false
    )

  let selectEl = findMainAmazonCountrySelect(root)
  if (!selectEl)
    return (
      console.warn(
        "[Amazon][Country] skipped: main address Country select is not unique",
      ),
      false
    )

  let match = resolveAmazonCountryOption(selectEl.options, countryValue)
  if (!match)
    return (
      console.warn(
        "[Amazon][Country] skipped: no unique exact live option match",
      ),
      false
    )

  if (isAmazonCountryCommitted(selectEl, countryValue)) return true

  let previousState = {
    selectedIndex: selectEl.selectedIndex,
    value: selectEl.value,
  }
  if (!selectAmazonCountryIfNeeded(selectEl, countryValue)) return false

  let maxAttempts = options.maxAttempts ?? 10
  let pollMs = options.pollMs ?? 50
  let stableHits = 0

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (attempt > 0 || pollMs > 0) await delay.delay(pollMs)

    let currentSelect = findMainAmazonCountrySelect(root)
    if (currentSelect && isAmazonCountryCommitted(currentSelect, countryValue)) {
      if (++stableHits >= Math.min(2, maxAttempts)) return true
    } else {
      stableHits = 0
    }
  }

  restoreSelectState(findMainAmazonCountrySelect(root) ?? selectEl, previousState)
  console.warn(
    "[Amazon][Country] failed: committed state did not stabilize",
  )
  return false
}
