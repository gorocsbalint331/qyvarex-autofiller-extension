// @ts-nocheck
/**
 * Avature — geographic country matching, rule partitioning, and prefill.
 */

import * as enums from "../../../core/enums.js"

const COUNTRY_ALIASES = [
  ["us", "usa", "u s", "u s a", "united states", "united states of america"],
  ["ca", "canada"],
  [
    "uk",
    "gb",
    "great britain",
    "united kingdom",
    "united kingdom of great britain and northern ireland",
  ],
]

export function normalizeAvatureCountry(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export function getAvatureCountryAliases(country) {
  const trimmed = String(country ?? "").trim()
  const normalized = normalizeAvatureCountry(trimmed)
  if (!normalized) return []

  const group = COUNTRY_ALIASES.find((aliases) => aliases.includes(normalized))
  return group
    ? [trimmed, ...group.filter((alias) => normalizeAvatureCountry(alias) !== normalized)]
    : [trimmed]
}

export function isAvatureGeographicCountryLabel(label) {
  return (
    String(label ?? "")
      .trim()
      .replace(/[\*\uff0a]+\s*$/, "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ") === "country"
  )
}

function hasClassToken(el, className) {
  return (
    !!el.classList?.contains?.(className) ||
    String(el.className ?? "")
      .split(/\s+/)
      .includes(className)
  )
}

export function isAvatureBuiltInGeographicCountryControl(select) {
  if (!select || String(select.tagName ?? "").toLowerCase() !== "select") {
    return false
  }

  const container = select.closest?.(
    ".fieldSpec, [id*='fieldSpecContainer'], .fieldSpecContainer, fieldset",
  )
  const haystack = [
    select.id,
    select.name,
    select.className,
    container?.id,
    container?.name,
    container?.className,
  ]
    .map((part) => String(part ?? "").toLowerCase())
    .join(" ")

  if (/(?:phone|dial|country\s*[/_-]?\s*territory\s*code)/.test(haystack)) {
    return false
  }
  if (/(?:question|answer|custom)/.test(haystack)) return false

  const isAutocomplete =
    hasClassToken(select, "AutoCompleteField") &&
    hasClassToken(select, "AutocompleteSelectFieldChildHtmlElement")
  const isCountryFieldSelect = hasClassToken(select, "countryFieldSelect")
  const name = String(select.name ?? select.getAttribute?.("name") ?? "")
    .trim()
    .toLowerCase()
  const id = String(select.id ?? select.getAttribute?.("id") ?? "")
    .trim()
    .toLowerCase()
  const isCountryNamed =
    name === "country" ||
    /(?:^|[_-])country(?:[_-](?:input|select|field|dropdown))?$/.test(id)

  return isCountryFieldSelect || isAutocomplete || isCountryNamed
}

export function isAvatureGeographicCountryRule(rule) {
  return (
    !!(rule?.type === enums.FIELD_TYPE.SELECT && isAvatureGeographicCountryLabel(rule?.label)) &&
    isAvatureBuiltInGeographicCountryControl(rule?.$input)
  )
}

export function partitionAvatureCountryRules(rules) {
  const geographicCountryRules = []
  const regularRules = []
  for (const rule of rules) {
    if (isAvatureGeographicCountryRule(rule)) geographicCountryRules.push(rule)
    else regularRules.push(rule)
  }
  return { geographicCountryRules, regularRules }
}

export function reconcileAvatureCountryProgress(allRules, committed, progress) {
  const { geographicCountryRules } = partitionAvatureCountryRules(allRules)
  for (const rule of geographicCountryRules) {
    if (committed) progress.updateFilledProgress(rule.label)
    else progress.updateMissedProgress(rule.label)
  }
}

export async function runAvatureCountryPrefill(hooks) {
  await hooks.preFillForm()
  let country = null
  try {
    const info = await hooks.fetchAutofillInfo()
    const raw = info?.location?.country
    if (typeof raw !== "string" || !raw.trim()) {
      return { country: null, committed: false, dependentSettled: false }
    }
    country = raw.trim()
    const committed = await hooks.fillCountry(country)
    if (!committed) {
      return { country, committed: false, dependentSettled: false }
    }
    let dependentSettled = false
    try {
      dependentSettled = await hooks.waitForDependentFields()
    } catch {
      dependentSettled = false
    }
    return { country, committed: true, dependentSettled }
  } catch {
    return { country, committed: false, dependentSettled: false }
  }
}

function readContainerLabel(container) {
  if (!container) return ""
  const label = container.querySelector(
    "label, legend, .tc_formLabel, .labelText, .datasetlabelText, .tc_formTitle",
  )
  if (!label) return ""
  const clone = label.cloneNode(true)
  clone
    .querySelectorAll(
      '.labelRequiredIcon, .screenReaderVisibility, [aria-hidden="true"], span[class*="required"]',
    )
    .forEach((node) => node.remove())
  return clone.textContent?.trim() || ""
}

export function getAvatureGeographicCountrySelects() {
  if (
    typeof document === "undefined" ||
    typeof document.querySelectorAll !== "function"
  ) {
    return []
  }
  return Array.from(document.querySelectorAll("select")).filter((select) => {
    const container = select.closest(
      ".fieldSpec, [id*='fieldSpecContainer'], .fieldSpecContainer, fieldset",
    )
    return isAvatureGeographicCountryRule({
      type: enums.FIELD_TYPE.SELECT,
      label: readContainerLabel(container),
      $input: select,
    })
  })
}
