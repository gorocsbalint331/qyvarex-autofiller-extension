// @ts-nocheck
/**
 * Apple Careers country select — resolve AFI country, commit option, wait for dependents.
 */

import * as countryConstants from "../../../constants/country.js"
import * as delay from "../../../utils/delay.js"

const EXTRA_ALIASES = {
  us: ["usa", "united states of america"],
  ca: [],
  gb: ["uk", "gbr", "great britain"],
}

const COUNTRY_DEFINITIONS = countryConstants.COUNTRY_OPTIONS.map(
  ({ code, label, value }) => ({
    code: code.toLowerCase(),
    label,
    value,
    aliases: EXTRA_ALIASES[code.toLowerCase()] ?? [],
  }),
)

const MAIN_COUNTRY_SELECT_SELECTOR = 'select[name="Country/Region"]'
const DEPENDENT_CONTROL_SELECTOR =
  "select[name], select[id], input[name], input[id], textarea[name], textarea[id]"
const DEPENDENT_NAME_PATTERN =
  /(^|[\s[\]_.:/-])(state|province|region|city|postal(?:code)?|zip(?:code)?)(?=$|[\s[\]_.:/-])/i
const DEPENDENT_EXCLUDE_PATTERN =
  /(phone|mobile|citizen|nationality|work.?authorization|education|school)/i

const nodeIdentityMap = new WeakMap()
let nextNodeIdentity = 1

export function normalizeAppleCountry(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function definitionMatchKeys(definition) {
  return new Set(
    [definition.code, definition.label, definition.value, ...definition.aliases]
      .map(normalizeAppleCountry)
      .filter(Boolean),
  )
}

export function resolveAppleCountryDefinition(raw) {
  const normalized = normalizeAppleCountry(raw)
  if (!normalized) return null
  const matches = COUNTRY_DEFINITIONS.filter((definition) =>
    definitionMatchKeys(definition).has(normalized),
  )
  return matches.length === 1 ? matches[0] : null
}

function matchKeysForAnswer(raw) {
  const definition = resolveAppleCountryDefinition(raw)
  return definition ? definitionMatchKeys(definition) : new Set()
}

export function resolveAppleCountryOption(options, answer) {
  const keys = matchKeysForAnswer(answer)
  if (keys.size === 0) return null
  const matches = Array.from(options).filter((option) => {
    const text = normalizeAppleCountry(option.text || option.textContent)
    const value = normalizeAppleCountry(option.value)
    return keys.has(text) || keys.has(value)
  })
  return matches.length === 1 ? matches[0] : null
}

function findAllMatchingOptions(options, answer) {
  const keys = matchKeysForAnswer(answer)
  if (keys.size === 0) return []
  return Array.from(options).filter((option) => {
    const text = normalizeAppleCountry(option.text || option.textContent)
    const value = normalizeAppleCountry(option.value)
    return keys.has(text) || keys.has(value)
  })
}

function getControlAccessibleLabel(el) {
  const ariaLabel = el.getAttribute("aria-label")
  if (ariaLabel) return ariaLabel

  const labelledBy = el.getAttribute("aria-labelledby")
  if (labelledBy) {
    const joined = labelledBy
      .split(/\s+/)
      .map((id) => document.getElementById(id)?.textContent ?? "")
      .join(" ")
      .trim()
    if (joined) return joined
  }

  const fromLabels = Array.from(el.labels ?? [])
    .map((label) => label.textContent ?? "")
    .join(" ")
    .trim()
  if (fromLabels) return fromLabels

  return (
    el
      .closest(".form-dropdown, .form-textbox")
      ?.querySelector(".form-dropdown-label, .form-textbox-label, label")
      ?.textContent?.trim() ?? ""
  )
}

export function isMainAppleCountrySelect(el) {
  if (!el || el.tagName !== "SELECT") return false
  const select = el
  return (
    select.getAttribute("name") === "Country/Region" &&
    normalizeAppleCountry(getControlAccessibleLabel(select)) === "country region"
  )
}

function findMainAppleCountrySelectCandidates(root) {
  const profileForm = root.querySelector?.("#apply-profileInformation-form")
  return Array.from(root.querySelectorAll(MAIN_COUNTRY_SELECT_SELECTOR)).filter(
    (el) =>
      isMainAppleCountrySelect(el) &&
      isElementVisibleInTree(el) &&
      (!profileForm || profileForm.contains(el)),
  )
}

function isElementVisibleInTree(el) {
  if (el.isConnected === false) return false
  let node = el
  while (node) {
    const htmlEl = node
    if (
      htmlEl.hidden ||
      htmlEl.inert ||
      node.getAttribute("hidden") !== null ||
      node.getAttribute("aria-hidden") === "true" ||
      node.getAttribute("inert") !== null
    ) {
      return false
    }
    const style =
      typeof window !== "undefined" && typeof window.getComputedStyle === "function"
        ? window.getComputedStyle(node)
        : null
    if (
      style?.display === "none" ||
      style?.visibility === "hidden" ||
      htmlEl.style?.display === "none" ||
      htmlEl.style?.visibility === "hidden"
    ) {
      return false
    }
    node = node.parentElement
  }
  return true
}

export function findMainAppleCountrySelect(root = document) {
  const candidates = findMainAppleCountrySelectCandidates(root)
  return candidates.length === 1 ? candidates[0] : null
}

export function isMainAppleCountryRule(rule) {
  return isMainAppleCountrySelect(rule?.$input)
}

function controlIdentity(el) {
  const name = el.getAttribute("name") ?? ""
  const id = el.getAttribute("id") ?? ""
  const addressAncestorId =
    el
      .closest?.("[data-address-type], [id*='address'], [class*='address']")
      ?.getAttribute("id") ?? ""
  return [el.tagName, name, id, addressAncestorId].join(":")
}

function isDependentAddressControl(el) {
  if (!el || typeof el.getAttribute !== "function") return false
  const nameId = [el.getAttribute("name") ?? "", el.getAttribute("id") ?? ""].join(
    " ",
  )
  return !DEPENDENT_EXCLUDE_PATTERN.test(nameId) && DEPENDENT_NAME_PATTERN.test(nameId)
}

export function isAppleCountryDependentRule(rule) {
  return isDependentAddressControl(rule?.$input)
}

function getNodeIdentity(el) {
  const existing = nodeIdentityMap.get(el)
  if (existing) return existing
  const id = nextNodeIdentity++
  nodeIdentityMap.set(el, id)
  return id
}

function isControlVisuallyPresent(el) {
  return !(
    el.hidden ||
    el.getAttribute("aria-hidden") === "true" ||
    el.style?.display === "none" ||
    el.style?.visibility === "hidden"
  )
}

function isNoDependentTerminal(root) {
  const htmlRoot = root
  if (htmlRoot.getAttribute?.("data-country-no-dependents") === "true") return true
  const mainSelect = findMainAppleCountrySelect(root)
  return !(
    mainSelect?.getAttribute("data-country-no-dependents") !== "true" &&
    mainSelect
      ?.closest?.("form, [data-country-no-dependents]")
      ?.getAttribute("data-country-no-dependents") !== "true"
  )
}

export function captureAppleDependentSnapshot(root = document) {
  const controls = Array.from(root.querySelectorAll(DEPENDENT_CONTROL_SELECTOR))
    .filter(isDependentAddressControl)
    .map((el) => {
      const control = el
      const options =
        el.tagName === "SELECT"
          ? Array.from(el.options).map((option) => ({
              value: option.value,
              normalizedText: normalizeAppleCountry(option.text || option.textContent),
              selected: option.selected,
            }))
          : []
      return {
        identity: controlIdentity(el),
        nodeIdentity: getNodeIdentity(el),
        tagName: el.tagName,
        visible: isControlVisuallyPresent(el),
        disabled: !!control.disabled,
        options,
      }
    })
    .sort((a, b) => a.identity.localeCompare(b.identity))

  return {
    controls,
    noDependentTerminal: controls.length === 0 && isNoDependentTerminal(root),
  }
}

function snapshotFingerprintWithSelection(snapshot) {
  return JSON.stringify(
    snapshot.controls.map(({ identity, tagName, visible, disabled, options }) => ({
      identity,
      tagName,
      visible,
      disabled,
      options,
    })),
  )
}

function snapshotFingerprintWithoutSelection(snapshot) {
  return JSON.stringify(
    snapshot.controls.map(({ identity, tagName, visible, disabled, options }) => ({
      identity,
      tagName,
      visible,
      disabled,
      options: options.map(({ value, normalizedText }) => ({
        value,
        normalizedText,
      })),
    })),
  )
}

function stringifySnapshot(snapshot) {
  return JSON.stringify(snapshot)
}

function hasNodeIdentityDrift(baseline, current) {
  return (
    baseline.controls.length !== current.controls.length ||
    current.controls.some(
      (control, index) =>
        control.nodeIdentity !== baseline.controls[index]?.nodeIdentity,
    )
  )
}

function optionsFingerprint(control) {
  return JSON.stringify(
    control.options.map(({ value, normalizedText }) => ({
      value,
      normalizedText,
    })),
  )
}

function dependentsChanged(baseline, current) {
  const baselineSelects = baseline.controls.filter(
    (control) => control.tagName === "SELECT",
  )
  if (baselineSelects.length === 0) {
    return (
      snapshotFingerprintWithoutSelection(current) !==
        snapshotFingerprintWithoutSelection(baseline) ||
      hasNodeIdentityDrift(baseline, current)
    )
  }
  return baselineSelects.every((baselineSelect) => {
    const matches = current.controls.filter(
      (control) => control.identity === baselineSelect.identity,
    )
    if (matches.length !== 1) return false
    const currentSelect = matches[0]
    return optionsFingerprint(currentSelect) !== optionsFingerprint(baselineSelect)
  })
}

export async function waitForAppleCountryDependents(
  baseline,
  expectation,
  root = document,
  options = {},
) {
  const maxAttempts = Math.max(1, options.maxAttempts ?? 10)
  const pollMs = Math.max(0, options.pollMs ?? 50)
  const baselineFingerprint = snapshotFingerprintWithSelection(baseline)
  let lastStableJson = null
  let stableHits = 0

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (attempt > 0 || pollMs > 0) await delay.delay(pollMs)
    options.checkpoint?.()

    const current = captureAppleDependentSnapshot(root)
    const currentFingerprint = snapshotFingerprintWithSelection(current)
    const noDependentTerminal =
      baseline.controls.length === 0 &&
      current.controls.length === 0 &&
      current.noDependentTerminal
    const matched =
      noDependentTerminal ||
      (current.controls.length > 0 &&
        (expectation === "changed"
          ? dependentsChanged(baseline, current)
          : currentFingerprint === baselineFingerprint))

    if (!matched) {
      lastStableJson = null
      stableHits = 0
      continue
    }

    const currentJson = stringifySnapshot(current)
    if (currentJson === lastStableJson) {
      if (++stableHits >= 1) return true
    } else {
      lastStableJson = currentJson
      stableHits = 0
    }
  }

  return false
}

function isCountryOptionSelected(select, answer) {
  const options = Array.from(select.options)
  const match = resolveAppleCountryOption(options, answer)
  if (!match) return false
  const index = options.indexOf(match)
  return (
    index >= 0 &&
    select.selectedIndex === index &&
    select.value === options[index].value &&
    options[index].selected
  )
}

function applySelectIndex(select, index) {
  const options = Array.from(select.options)
  select.value = options[index].value
  select.selectedIndex = index
  options.forEach((option, optionIndex) => {
    option.selected = optionIndex === index
  })
  select.dispatchEvent(new Event("change", { bubbles: true }))
  select.dispatchEvent(new Event("input", { bubbles: true }))
}

function captureSelectedOption(select) {
  const option = select.options[select.selectedIndex]
  return option
    ? {
        value: option.value,
        normalizedText: normalizeAppleCountry(option.text || option.textContent),
      }
    : null
}

function findOptionIndexBySnapshot(select, snapshot) {
  const options = Array.from(select.options)
  if (snapshot.value) {
    const byValue = options.reduce((indexes, option, index) => {
      if (option.value === snapshot.value) indexes.push(index)
      return indexes
    }, [])
    if (byValue.length === 1) return byValue[0]
  }
  const byText = options.reduce((indexes, option, index) => {
    if (
      normalizeAppleCountry(option.text || option.textContent) ===
      snapshot.normalizedText
    ) {
      indexes.push(index)
    }
    return indexes
  }, [])
  return byText.length === 1 ? byText[0] : -1
}

function isOptionSnapshotSelected(select, snapshot) {
  const index = findOptionIndexBySnapshot(select, snapshot)
  return (
    !(index < 0) &&
    select.selectedIndex === index &&
    select.value === select.options[index].value &&
    select.options[index].selected
  )
}

async function restoreCountrySelection(
  previousSelection,
  root,
  fallbackSelect,
  maxAttempts,
  pollMs,
  checkpoint,
) {
  if (!previousSelection) return false
  const select = findMainAppleCountrySelect(root) ?? fallbackSelect
  const index = findOptionIndexBySnapshot(select, previousSelection)
  if (index < 0) return false
  applySelectIndex(select, index)

  let stableHits = 0
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (attempt > 0 || pollMs > 0) await delay.delay(pollMs)
    checkpoint?.()
    const live = findMainAppleCountrySelect(root)
    if (live && isOptionSnapshotSelected(live, previousSelection)) {
      if (++stableHits >= Math.min(2, maxAttempts)) return true
    } else {
      stableHits = 0
    }
  }
  return false
}

function buildPrefillResult(discovery, dependentBaseline, extras = {}) {
  return {
    discovery,
    committed: false,
    dependentsSettled: false,
    dependentBaseline,
    dependentExpectation: "current",
    changed: false,
    ...extras,
  }
}

export async function prefillAppleCountry(rawCountry, root = document, options = {}) {
  const candidates = findMainAppleCountrySelectCandidates(root)
  const discovery =
    candidates.length === 0
      ? "missing"
      : candidates.length === 1
        ? "unique"
        : "ambiguous"
  const dependentBaseline =
    options.dependentBaseline ?? captureAppleDependentSnapshot(root)
  const maxAttempts = Math.max(1, options.maxAttempts ?? 10)
  const pollMs = Math.max(0, options.pollMs ?? 50)

  if (discovery !== "unique") {
    console.warn(
      discovery === "missing"
        ? "[Apple][Country] skipped: main geographic Country select is missing"
        : "[Apple][Country] skipped: main geographic Country select is ambiguous",
    )
    return buildPrefillResult(discovery, dependentBaseline)
  }

  const select = candidates[0]
  const definition = resolveAppleCountryDefinition(rawCountry)

  if (!normalizeAppleCountry(rawCountry)) {
    console.warn("[Apple][Country] skipped: fresh AFI country is empty")
    return buildPrefillResult(discovery, dependentBaseline, {
      failureReason: "country-empty",
      dependentsSettled: await waitForAppleCountryDependents(
        dependentBaseline,
        "current",
        root,
        {
          maxAttempts,
          pollMs,
          checkpoint: options.checkpoint,
        },
      ),
    })
  }

  if (!definition) {
    console.warn("[Apple][Country] skipped: fresh AFI country is unresolved")
    return buildPrefillResult(discovery, dependentBaseline, {
      failureReason: "country-unresolved",
      dependentsSettled: await waitForAppleCountryDependents(
        dependentBaseline,
        "current",
        root,
        {
          maxAttempts,
          pollMs,
          checkpoint: options.checkpoint,
        },
      ),
    })
  }

  const optionsList = Array.from(select.options)
  const matches = findAllMatchingOptions(optionsList, definition.code)
  if (matches.length !== 1) {
    const ambiguous = matches.length > 1
    console.warn(
      ambiguous
        ? "[Apple][Country] skipped: live option match is ambiguous"
        : "[Apple][Country] skipped: no exact live option match",
    )
    return buildPrefillResult(discovery, dependentBaseline, {
      failureReason: ambiguous ? "option-ambiguous" : "option-unmatched",
      dependentsSettled: await waitForAppleCountryDependents(
        dependentBaseline,
        "current",
        root,
        {
          maxAttempts,
          pollMs,
          checkpoint: options.checkpoint,
        },
      ),
    })
  }

  const matchOption = matches[0]
  if (isCountryOptionSelected(select, definition.code)) {
    return buildPrefillResult(discovery, dependentBaseline, {
      committed: true,
      dependentsSettled: await waitForAppleCountryDependents(
        dependentBaseline,
        "current",
        root,
        {
          maxAttempts,
          pollMs,
          checkpoint: options.checkpoint,
        },
      ),
    })
  }

  const matchIndex = optionsList.indexOf(matchOption)
  const previousSelection = captureSelectedOption(select)
  if (matchIndex < 0 || !previousSelection) {
    return buildPrefillResult(discovery, dependentBaseline, {
      failureReason: "option-unmatched",
    })
  }

  options.checkpoint?.()
  applySelectIndex(select, matchIndex)

  let stableHits = 0
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (attempt > 0 || pollMs > 0) await delay.delay(pollMs)
    options.checkpoint?.()
    const live = findMainAppleCountrySelect(root)
    if (live && isCountryOptionSelected(live, definition.code)) {
      if (++stableHits >= Math.min(2, maxAttempts)) {
        return buildPrefillResult(discovery, dependentBaseline, {
          committed: true,
          changed: true,
          dependentExpectation: "changed",
          dependentsSettled: await waitForAppleCountryDependents(
            dependentBaseline,
            "changed",
            root,
            {
              maxAttempts,
              pollMs,
              checkpoint: options.checkpoint,
            },
          ),
        })
      }
    } else {
      stableHits = 0
    }
  }

  options.checkpoint?.()
  const rollbackOk = await restoreCountrySelection(
    previousSelection,
    root,
    select,
    maxAttempts,
    pollMs,
    options.checkpoint,
  )
  if (!rollbackOk) {
    console.warn(
      "[Apple][Country] failed: committed state did not stabilize; rollback failed",
    )
    return buildPrefillResult(discovery, dependentBaseline, {
      changed: true,
      failureReason: "rollback-failed",
      rollbackSucceeded: false,
    })
  }

  const dependentsSettled = await waitForAppleCountryDependents(
    dependentBaseline,
    "rollback",
    root,
    {
      maxAttempts,
      pollMs,
      checkpoint: options.checkpoint,
    },
  )
  console.warn(
    "[Apple][Country] failed: committed state did not stabilize; selection restored",
  )
  return buildPrefillResult(discovery, dependentBaseline, {
    changed: true,
    dependentExpectation: "rollback",
    dependentsSettled,
    failureReason: "commit-rejected",
    rollbackSucceeded: true,
  })
}
