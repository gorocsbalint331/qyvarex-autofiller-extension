// @ts-nocheck
/**
 * JobScore — country select prefill and contact partitioning.
 */

const COMMIT_ATTEMPTS = 6
const COMMIT_POLL_MS = 50
const STATE_WAIT_ATTEMPTS = 20
const STATE_WAIT_POLL_MS = 50

const COUNTRY_ALIAS_SETS = {
  us: new Set([
    "us",
    "usa",
    "united states",
    "united states of america",
  ]),
  ca: new Set(["ca", "canada"]),
  uk: new Set(["uk", "gb", "great britain", "united kingdom"]),
}

export function normalizeJobScoreCountry(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function aliasSetFor(value) {
  const normalized = normalizeJobScoreCountry(value)
  for (const aliases of Object.values(COUNTRY_ALIAS_SETS)) {
    if (aliases.has(normalized)) return aliases
  }
  return new Set(normalized ? [normalized] : [])
}

function isLaidOut(element) {
  let node = element
  while (node) {
    const style = window.getComputedStyle(node)
    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      style.opacity === "0"
    ) {
      return false
    }
    node = node.parentElement
  }
  return true
}

export async function waitForJobScoreStateProvinceControl(
  country,
  root = document,
  options = {},
) {
  const anchor = root.querySelector(
    "#state_us, #candidate_card_home_state_us, #region_international, #candidate_card_home_region_international",
  )
  if (!anchor) return true

  const isUs = COUNTRY_ALIAS_SETS.us.has(normalizeJobScoreCountry(country))
  const expectedSelector = isUs
    ? "#state_us #candidate_card_home_state_us, #candidate_card_home_state_us"
    : '#region_international input[type="text"], #region_international input[autocomplete="address-level1"], #candidate_card_home_region_international'
  const hiddenSelector = isUs ? "#region_international" : "#state_us"
  const maxAttempts = options.maxAttempts ?? STATE_WAIT_ATTEMPTS
  const pollMs = options.pollMs ?? STATE_WAIT_POLL_MS

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const expected = root.querySelector(expectedSelector)
    const hidden = root.querySelector(hiddenSelector)
    if (expected && isLaidOut(expected) && (!hidden || !isLaidOut(hidden))) {
      return true
    }
    if (attempt + 1 < maxAttempts) {
      await new Promise((resolve) => setTimeout(resolve, pollMs))
    }
  }
  return false
}

export function resolveJobScoreCountryOption(options, country) {
  const aliases = aliasSetFor(String(country ?? ""))
  if (aliases.size === 0) return null
  const matches = Array.from(options).filter((option) => {
    const text = normalizeJobScoreCountry(option.textContent)
    const value = normalizeJobScoreCountry(option.value)
    return aliases.has(text) || aliases.has(value)
  })
  return matches.length === 1 ? matches[0] : null
}

export async function fillJobScoreCountry(select, country, resolveSelect) {
  try {
    const options = Array.from(select.options)
    const match = resolveJobScoreCountryOption(options, country)
    if (!match) return false

    const index = options.indexOf(match)
    if (index < 0) return false

    const previous = options[select.selectedIndex]
    const snapshot = {
      selectedIndex: select.selectedIndex,
      value: previous?.value ?? select.value,
    }
    const getLive = resolveSelect ?? (() => select)

    try {
      select.selectedIndex = index
      options.forEach((option, optionIndex) => {
        option.selected = optionIndex === index
      })
      select.dispatchEvent(new Event("input", { bubbles: true }))
      select.dispatchEvent(new Event("change", { bubbles: true }))

      for (let attempt = 0; attempt < COMMIT_ATTEMPTS; attempt++) {
        await new Promise((resolve) => setTimeout(resolve, COMMIT_POLL_MS))
        const live = getLive()
        if (!live || !isCountryStillSelected(live, country)) {
          restoreSelectSnapshot(live, snapshot)
          return false
        }
      }
      return true
    } catch {
      const live = safeCall(getLive)
      restoreSelectSnapshot(live, snapshot)
      return false
    }
  } catch {
    return false
  }
}

function safeCall(fn) {
  try {
    return fn()
  } catch {
    return null
  }
}

function isCountryStillSelected(select, country) {
  try {
    const options = Array.from(select.options)
    const match = resolveJobScoreCountryOption(options, country)
    if (!match) return false
    const index = options.indexOf(match)
    return (
      index >= 0 &&
      select.selectedIndex === index &&
      select.value === options[index].value &&
      options[index].selected
    )
  } catch {
    return false
  }
}

function restoreSelectSnapshot(select, snapshot) {
  if (!select) return
  try {
    const options = Array.from(select.options)
    const matchingIndexes = options.reduce((indexes, option, index) => {
      if (option.value === snapshot.value) indexes.push(index)
      return indexes
    }, [])
    let index = matchingIndexes.length === 1 ? matchingIndexes[0] : -1
    if (index < 0 && options[snapshot.selectedIndex]) {
      index = snapshot.selectedIndex
    }
    if (index < 0) return
    select.selectedIndex = index
    options.forEach((option, optionIndex) => {
      option.selected = optionIndex === index
    })
  } catch {
    // ignore restore failures
  }
}

export function isMainJobScoreCountrySelect(element) {
  if (!element || element.tagName !== "SELECT") return false
  const select = element
  const isCountry =
    select.id === "candidate_card_home_country" ||
    select.name === "candidate_card[home_country]"
  return !!(isCountry && select.closest(".js-area-container.contact"))
}

export function findMainJobScoreCountrySelect(root = document) {
  const contact = root.querySelector(".js-area-container.contact")
  if (!contact) return null
  const select = contact.querySelector(
    'select#candidate_card_home_country, select[name="candidate_card[home_country]"]',
  )
  return isMainJobScoreCountrySelect(select) ? select : null
}

export async function prefillJobScoreCountry(country, root = document) {
  const select = findMainJobScoreCountrySelect(root)
  return (
    !!select &&
    fillJobScoreCountry(select, country, () =>
      findMainJobScoreCountrySelect(root),
    )
  )
}

export async function runJobScoreCountryPrefill(deps) {
  await deps.preFillForm()
  try {
    const info = await deps.fetchAutofillInfo()
    const country = info?.location?.country
    if (typeof country !== "string" || !country.trim()) {
      return { country: null, prefilled: false }
    }
    const trimmed = country.trim()
    const prefilled = await deps.prefillCountry(trimmed)
    if (prefilled) await deps.waitForStateProvince?.(trimmed)
    return { country: trimmed, prefilled }
  } catch {
    return { country: null, prefilled: false }
  }
}

export function partitionJobScoreContactRules(rules) {
  const mainCountryRules = []
  const regularRules = []
  for (const rule of rules) {
    if (isMainJobScoreCountrySelect(rule.$input)) {
      mainCountryRules.push(rule)
    } else {
      regularRules.push(rule)
    }
  }
  return { mainCountryRules, regularRules }
}
