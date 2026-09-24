// @ts-nocheck
/**
 * HRMDirect — country / state-province prefill and rule partitioning.
 */

import * as countryOptions from "../../../constants/country.ts"

const MIN_COUNTRY_OPTION_COUNT = 200
const DEFAULT_COMMIT_POLL_COUNT = 6
const DEFAULT_COMMIT_POLL_MS = 50
const DEFAULT_WAIT_MAX_ATTEMPTS = 20
const DEFAULT_WAIT_POLL_MS = 50
const DEFAULT_STABLE_POLLS = 2

const ALIAS_ISO2_BY_NAME = {
  US: new Set([
    "us",
    "usa",
    "united states",
    "united states of america",
  ]),
  CA: new Set(["ca", "canada"]),
  GB: new Set(["uk", "gb", "great britain", "united kingdom"]),
}

const EXTRA_COUNTRY_ALIASES = [
  { iso2: "BL", names: ["Saint Barthelemy"] },
  {
    iso2: "BQ",
    names: [
      "Bonaire",
      "Saba",
      "Sint Eustatius",
      "Bonaire Sint Eustatius and Saba",
      "Caribbean Netherlands",
    ],
  },
  { iso2: "EH", names: ["Western Sahara"] },
  { iso2: "GG", names: ["Guernsey"] },
  { iso2: "IM", names: ["Isle of Man"] },
  { iso2: "JE", names: ["Jersey"] },
  { iso2: "ME", names: ["Montenegro"] },
  { iso2: "MF", names: ["Saint Martin French part"] },
  { iso2: "RS", names: ["Serbia", "CS"] },
  { iso2: "SS", names: ["South Sudan"] },
  { iso2: "UM", names: ["United States Minor Outlying Islands"] },
]

const ISO2_REMAP = { CS: "RS", FX: "FR" }

const US_STATE_CODES = new Set(
  "AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(
    " ",
  ),
)
const CA_PROVINCE_CODES = new Set(
  "AB BC MB NB NL NS NT NU ON PE QC SK YT".split(" "),
)

export function normalizeHrmdirectCountry(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function normalizeIso2(value) {
  const text = String(value ?? "").trim().toUpperCase()
  return /^[A-Z]{2}$/.test(text) ? text : null
}

function resolveCountryIso2(value) {
  const normalized = normalizeHrmdirectCountry(value)
  if (!normalized) return null

  for (const [iso2, aliases] of Object.entries(ALIAS_ISO2_BY_NAME)) {
    if (aliases.has(normalized)) return iso2
  }

  const matches = new Set()
  for (const entry of EXTRA_COUNTRY_ALIASES) {
    if (
      normalized === entry.iso2.toLowerCase() ||
      entry.names.some((name) => normalizeHrmdirectCountry(name) === normalized)
    ) {
      matches.add(entry.iso2)
    }
  }

  for (const option of countryOptions.COUNTRY_OPTIONS) {
    const code = normalizeIso2(option.code)
    if (
      code &&
      (normalized === code.toLowerCase() ||
        normalizeHrmdirectCountry(option.label) === normalized ||
        normalizeHrmdirectCountry(option.value) === normalized)
    ) {
      matches.add(ISO2_REMAP[code] ?? code)
    }
  }

  return matches.size === 1 ? Array.from(matches)[0] : null
}

export function resolveHrmdirectCountryOption(options, answer) {
  try {
    const iso2 = resolveCountryIso2(answer)
    if (!iso2) return null
    const matches = Array.from(options).filter(
      (option) => normalizeIso2(option.value) === iso2,
    )
    return matches.length === 1 ? matches[0] : null
  } catch {
    return null
  }
}

function readFieldTitle(field) {
  const label = field.querySelector(
    ".control-label.field-title, [class='control-label field-title'], label",
  )
  return String(label?.textContent ?? "")
    .replace(/\s*\*\s*$/, "")
    .trim()
}

function findFieldByTitle(section, title) {
  const fields = Array.from(section.querySelectorAll(".form-field"))
  return (
    fields.find(
      (field) =>
        normalizeHrmdirectCountry(readFieldTitle(field)) ===
        normalizeHrmdirectCountry(title),
    ) ?? null
  )
}

function hasEnoughCountryOptions(select) {
  try {
    const codes = new Set(
      Array.from(select.options)
        .map((option) => normalizeIso2(option.value))
        .filter((code) => !!code),
    )
    return codes.size >= MIN_COUNTRY_OPTION_COUNT
  } catch {
    return false
  }
}

function hasSiblingStateProvinceField(select) {
  const field = select.closest(".form-field")
  const section = field?.closest(".section-container")
  return (
    !!field &&
    !!section &&
    Array.from(section.querySelectorAll(".form-field")).some(
      (candidate) =>
        normalizeHrmdirectCountry(readFieldTitle(candidate)) ===
        "state or province",
    )
  )
}

function getSectionContainer(element) {
  return element?.closest?.(".section-container") ?? null
}

export function isHrmdirectMainCountrySelect(element) {
  if (!element || element.tagName !== "SELECT") return false
  const select = element
  if (
    typeof select.closest !== "function" ||
    typeof select.getAttribute !== "function"
  ) {
    return false
  }

  const field = select.closest(".form-field")
  const form = select.closest("form.section-form")
  return !!(
    field &&
    form &&
    normalizeHrmdirectCountry(readFieldTitle(field)) === "country" &&
    select.classList?.contains("field-dropdown") &&
    select.getAttribute("data-dynamic") === "true" &&
    hasSiblingStateProvinceField(select) &&
    hasEnoughCountryOptions(select)
  )
}

export function findHrmdirectMainCountrySelect(root = document) {
  const form = root.querySelector("form.section-form")
  if (!form) return null
  const matches = Array.from(
    form.querySelectorAll('select.field-dropdown[data-dynamic="true"]'),
  ).filter(isHrmdirectMainCountrySelect)
  return matches.length === 1 ? matches[0] : null
}

function setSelectedIndex(select, index) {
  select.selectedIndex = index
  Array.from(select.options).forEach((option, optionIndex) => {
    option.selected = optionIndex === index
  })
}

function dispatchSelectEvents(select) {
  select.dispatchEvent(new Event("input", { bubbles: true }))
  select.dispatchEvent(new Event("change", { bubbles: true }))
}

function commitSelectOption(select, option) {
  if (!select) return false
  try {
    const options = Array.from(select.options)
    const indexes = options.reduce((acc, candidate, index) => {
      if (candidate.value === option.value) acc.push(index)
      return acc
    }, [])
    if (indexes.length !== 1) return false
    const index = indexes[0]
    setSelectedIndex(select, index)
    dispatchSelectEvents(select)
    return readSelectedIso2(select) === normalizeIso2(option.value)
  } catch {
    return false
  }
}

function restoreSelectOption(select, option) {
  const restored = commitSelectOption(select, option)
  if (!restored) {
    console.warn(
      "[HRMDirect Country] unable to restore original semantic selection",
    )
  }
  return restored
}

function readSelectedIso2(select) {
  try {
    const option = Array.from(select.options)[select.selectedIndex]
    if (!option || !option.selected || option.value !== select.value) {
      return null
    }
    return normalizeIso2(option.value)
  } catch {
    return null
  }
}

export async function fillHrmdirectCountry(
  select,
  answer,
  resolveSelect = () => select,
  options = {},
) {
  let optionList
  try {
    optionList = Array.from(select.options)
  } catch {
    return { committed: false, countryIso2: null }
  }

  const matchedOption = resolveHrmdirectCountryOption(optionList, answer)
  const countryIso2 = matchedOption ? normalizeIso2(matchedOption.value) : null
  if (!matchedOption || !countryIso2) {
    return { committed: false, countryIso2: null }
  }

  const matchedIndex = optionList.indexOf(matchedOption)
  if (matchedIndex < 0) {
    return { committed: false, countryIso2 }
  }

  const previousOption = optionList[select.selectedIndex]
  const previousSnapshot = { value: previousOption?.value ?? select.value }
  const previousIso2 = normalizeIso2(previousSnapshot.value)

  try {
    if (readSelectedIso2(select) === countryIso2) {
      const liveSelect = resolveSelect()
      return {
        committed: !!(liveSelect && readSelectedIso2(liveSelect) === countryIso2),
        countryIso2,
        dependentCountryIso2: countryIso2,
      }
    }

    setSelectedIndex(select, matchedIndex)
    dispatchSelectEvents(select)

    const pollCount = options.pollCount ?? DEFAULT_COMMIT_POLL_COUNT
    const pollMs = options.pollMs ?? DEFAULT_COMMIT_POLL_MS
    const requiredStable = Math.min(2, Math.max(1, pollCount))
    let stableCount = 0
    let liveSelect = null

    for (let attempt = 0; attempt < pollCount; attempt++) {
      if (pollMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, pollMs))
      }
      liveSelect = resolveSelect()
      if (liveSelect && readSelectedIso2(liveSelect) === countryIso2) {
        stableCount += 1
        if (stableCount >= requiredStable) {
          return {
            committed: true,
            countryIso2,
            dependentCountryIso2: countryIso2,
          }
        }
      } else {
        stableCount = 0
      }
    }

    const restored = restoreSelectOption(liveSelect, previousSnapshot)
    return {
      committed: false,
      countryIso2,
      dependentCountryIso2: restored ? previousIso2 : null,
      failureReason: restored ? "commit-rejected" : "rollback-failed",
    }
  } catch {
    let liveSelect = null
    try {
      liveSelect = resolveSelect()
    } catch {
      // ignore
    }
    const restored = restoreSelectOption(liveSelect, previousSnapshot)
    return {
      committed: false,
      countryIso2,
      dependentCountryIso2: restored ? previousIso2 : null,
      failureReason: restored ? "commit-rejected" : "rollback-failed",
    }
  }
}

function findStateProvinceControl(root) {
  const countrySelect = findHrmdirectMainCountrySelect(root)
  const section = getSectionContainer(countrySelect)
  if (!section) return null
  const field = findFieldByTitle(section, "State or Province")
  return (
    field?.querySelector(
      "select.field-dropdown, select, input[type='text'], input:not([type])",
    ) ?? null
  )
}

function readOptionCountryHint(option) {
  const hint =
    option.getAttribute?.("data-country") ??
    option.getAttribute?.("data-country-code") ??
    option.getAttribute?.("data-group")
  return normalizeIso2(hint)
}

function inferOptionCountry(option) {
  const hinted = readOptionCountryHint(option)
  if (hinted === "US" || hinted === "CA") return hinted

  const value = String(option.value ?? "").trim().toUpperCase()
  const prefix = /^(US|CA)[-_]/.exec(value)?.[1]
  if (prefix === "US" || prefix === "CA") return prefix
  if (US_STATE_CODES.has(value)) return "US"
  if (CA_PROVINCE_CODES.has(value)) return "CA"
  return null
}

function selectOptionsBelongToCountry(select, countryIso2) {
  if (!select.isConnected) return false
  const options = Array.from(select.options).filter(
    (option) => String(option.value ?? "").trim() !== "",
  )
  return (
    options.length !== 0 &&
    options.every((option) => inferOptionCountry(option) === countryIso2)
  )
}

function describeControlFingerprint(control) {
  if (control.tagName === "SELECT") {
    try {
      return `select:${Array.from(control.options)
        .map((option) => `${option.value}:${option.textContent ?? ""}`)
        .join("|")}`
    } catch {
      return "select:unreadable"
    }
  }
  return `${control.tagName}:${control.type ?? ""}`
}

export async function waitForHrmdirectStateProvince(
  countryIso2Raw,
  previousControl = null,
  root = document,
  options = {},
) {
  const countryIso2 = normalizeIso2(countryIso2Raw)
  if (!countryIso2) return false

  const maxAttempts = options.maxAttempts ?? DEFAULT_WAIT_MAX_ATTEMPTS
  const pollMs = options.pollMs ?? DEFAULT_WAIT_POLL_MS
  const stablePolls = Math.max(1, options.stablePolls ?? DEFAULT_STABLE_POLLS)
  let previousFingerprint = ""
  let stableCount = 0

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const control = findStateProvinceControl(root)
    const previousWasSelect = previousControl?.tagName === "SELECT"
    const ready =
      countryIso2 === "US" || countryIso2 === "CA"
        ? control?.tagName === "SELECT" &&
          selectOptionsBelongToCountry(control, countryIso2)
        : !!(
            control &&
            (!previousWasSelect || control !== previousControl) &&
            control.isConnected &&
            control.tagName === "INPUT" &&
            ["", "text"].includes(String(control.type ?? "").toLowerCase())
          )

    if (ready && control) {
      const fingerprint = describeControlFingerprint(control)
      stableCount =
        fingerprint === previousFingerprint ? stableCount + 1 : 1
      previousFingerprint = fingerprint
      if (stableCount >= stablePolls) return true
    } else {
      stableCount = 0
      previousFingerprint = ""
    }

    if (attempt + 1 < maxAttempts && pollMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, pollMs))
    }
  }

  return false
}

export function getHrmdirectStateProvinceControl(root = document) {
  return findStateProvinceControl(root)
}

export async function prefillHrmdirectCountry(answer, root = document) {
  const select = findHrmdirectMainCountrySelect(root)
  if (!select) return { committed: false, countryIso2: null }
  return fillHrmdirectCountry(select, answer, () =>
    findHrmdirectMainCountrySelect(root),
  )
}

export async function runHrmdirectCountryPrefill(deps) {
  await deps.reinitialize()
  try {
    const info = await deps.fetchAutofillInfo()
    const country = info?.location?.country
    if (typeof country !== "string" || !country.trim()) {
      return {
        country: null,
        countryIso2: null,
        committed: false,
        dependentsSettled: false,
      }
    }

    const countryText = country.trim()
    const previousStateControl = deps.getStateProvinceControl?.() ?? null
    const fillResult = await deps.prefillCountry(countryText)
    const dependentCountryIso2 =
      fillResult.dependentCountryIso2 ??
      (fillResult.committed ? fillResult.countryIso2 : null)
    const dependentsSettled =
      !!dependentCountryIso2 &&
      ((await deps.waitForStateProvince?.(
        dependentCountryIso2,
        previousStateControl,
      )) ??
        true)

    return {
      country: countryText,
      countryIso2: fillResult.countryIso2,
      committed: fillResult.committed,
      dependentsSettled,
      dependentCountryIso2,
      failureReason: fillResult.failureReason,
    }
  } catch {
    return {
      country: null,
      countryIso2: null,
      committed: false,
      dependentsSettled: false,
    }
  }
}

export function partitionHrmdirectCountryRules(formRules, countryResult) {
  const mainCountryRules = formRules.filter((rule) =>
    isHrmdirectMainCountrySelect(rule.$input),
  )

  if (mainCountryRules.length === 0) {
    return {
      discovery: "none",
      mainCountryRules: [],
      deferredDependentRules: [],
      regularRules: formRules,
    }
  }

  if (mainCountryRules.length > 1) {
    return {
      discovery: "ambiguous",
      mainCountryRules,
      deferredDependentRules: [],
      regularRules: formRules.filter(
        (rule) => !mainCountryRules.includes(rule),
      ),
    }
  }

  const mainCountryRule = mainCountryRules[0]
  const section = getSectionContainer(mainCountryRule.$input)
  const deferredDependentRules = countryResult.dependentsSettled
    ? []
    : formRules.filter(
        (rule) =>
          rule !== mainCountryRule &&
          normalizeHrmdirectCountry(rule.label) === "state or province" &&
          getSectionContainer(rule.$input) === section,
      )

  return {
    discovery: "stable",
    mainCountryRules: [mainCountryRule],
    deferredDependentRules,
    regularRules: formRules.filter(
      (rule) =>
        rule !== mainCountryRule && !deferredDependentRules.includes(rule),
    ),
  }
}

export function reconcileHrmdirectCountryProgress(
  mainCountryRules,
  filled,
  progressTracker,
) {
  for (const rule of mainCountryRules) {
    if (filled) progressTracker.updateFilledProgress(rule.label)
    else progressTracker.updateMissedProgress(rule.label)
  }
}
