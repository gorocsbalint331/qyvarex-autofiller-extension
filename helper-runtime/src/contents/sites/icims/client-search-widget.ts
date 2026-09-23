// @ts-nocheck
/**
 * iCIMS search-dropdown / profile-options widget helpers.
 */

import * as messaging from "@plasmohq/messaging"
import * as utils from "./utils.js"
import * as cancellation from "../../methods/cancellation.ts"

const OPEN_TIMEOUT_MS = 500
const SEARCH_TIMEOUT_MS = 650
const COMMIT_SEARCH_TIMEOUT_MS = 5e3
const COMMIT_READBACK_TIMEOUT_MS = 500
const POLL_INTERVAL_MS = 20
const STABLE_SIGNATURE_ITERATIONS = 3
const MAX_CANDIDATES = 25

const SELECTED_OPTION_SELECTOR =
  ':scope > [data-value], [data-selected-value], [aria-selected="true"][data-value], [aria-selected="true"][data-selected-value]'

const generationTokens = new WeakMap()
const activeGenerationCleanups = new WeakMap()

export function getIcimsSearchDropdownTrigger(select) {
  let sibling = select?.nextElementSibling
  return sibling?.id?.trim() ? sibling : null
}

export function getIcimsSearchDropdownContainer(trigger) {
  let triggerId = trigger?.id?.trim()
  if (!triggerId) return null
  let doc =
    trigger.ownerDocument ??
    (typeof document === "undefined" ? null : document)
  return (
    doc?.getElementById(`${triggerId}_ctnr`) ?? trigger.nextElementSibling
  )
}

function normalizeText(text) {
  return (text ?? "").replace(/\s+/g, " ").trim()
}

function bumpGenerationToken(select) {
  activeGenerationCleanups.get(select)?.cleanup()
  activeGenerationCleanups.delete(select)
  let token = (generationTokens.get(select) ?? 0) + 1
  generationTokens.set(select, token)
  return token
}

function isCurrentGeneration(select, token) {
  return generationTokens.get(select) === token
}

function clearGenerationCleanup(select, token) {
  let active = activeGenerationCleanups.get(select)
  if (active?.token === token) {
    active.cleanup()
    activeGenerationCleanups.delete(select)
  }
}

function installInvalidationListeners(generation, trigger) {
  let { select, container, input, token } = generation
  let onTrustedEvent = (event) => {
    if (event.isTrusted) {
      generation.invalidated = true
      clearGenerationCleanup(select, token)
    }
  }
  let targets = [select, trigger, container, input]
  let eventNames = [
    "keydown",
    "input",
    "change",
    "click",
    "pointerdown",
    "pointerup",
  ]
  for (let target of targets) {
    for (let eventName of eventNames) {
      target.addEventListener(eventName, onTrustedEvent, true)
    }
  }
  activeGenerationCleanups.set(select, {
    token,
    cleanup: () => {
      for (let target of targets) {
        for (let eventName of eventNames) {
          target.removeEventListener(eventName, onTrustedEvent, true)
        }
      }
    },
  })
}

export function discardIcimsSearchGeneration(generation) {
  generation.invalidated = true
  clearGenerationCleanup(generation.select, generation.token)
}

function bumpSelectGeneration(select) {
  activeGenerationCleanups.get(select)?.cleanup()
  activeGenerationCleanups.delete(select)
  generationTokens.set(select, (generationTokens.get(select) ?? 0) + 1)
}

function uniqueNodes(nodes) {
  return Array.from(new Set(nodes))
}

function getDropdownListItems(container) {
  return uniqueNodes([
    ...Array.from(container.querySelectorAll('[aria-live="polite"] ul li')),
    ...Array.from(container.querySelectorAll("ul > li")),
  ])
}

export function getIcimsSearchDropdownOptionItems(container) {
  return getDropdownListItems(container).filter((item) => {
    let text = normalizeText(item.textContent)
    return !!text && text.toLowerCase() !== "no results"
  })
}

export function hasIcimsSearchDropdownNoResults(container) {
  return getDropdownListItems(container).some(
    (item) => normalizeText(item.textContent).toLowerCase() === "no results",
  )
}

export function getIcimsSearchDropdownLoading(container) {
  return (
    container.querySelector('[aria-live="polite"] .dropdown-loading') ??
    container.querySelector(".dropdown-loading")
  )
}

function isDropdownLoading(container) {
  let loading = getIcimsSearchDropdownLoading(container)
  return !!loading && !loading.classList.contains("hide")
}

export async function openIcimsSearchDropdown(select) {
  cancellation.checkpoint()
  let trigger = getIcimsSearchDropdownTrigger(select)
  if (!trigger) return { status: "unavailable" }

  utils.triggerEvents(trigger, ["mousedown", "mouseup", "click"])

  let deadline = Date.now() + OPEN_TIMEOUT_MS
  while (Date.now() <= deadline) {
    let container = getIcimsSearchDropdownContainer(trigger)
    let input = container?.querySelector("input")
    if (container && input) {
      return {
        status: "opened",
        context: {
          $container: container,
          $input: input,
          $trigger: trigger,
        },
      }
    }
    await cancellation.cancellableDelay(POLL_INTERVAL_MS)
  }

  return { status: "unavailable" }
}

export function getIcimsSearchSelectIdentities(element) {
  return Array.from(
    new Set(
      [
        element.getAttribute("data-value"),
        element.getAttribute("data-selected-value"),
        element.getAttribute("title"),
        element.textContent,
      ]
        .map((value) => normalizeText(value).toLowerCase())
        .filter(Boolean),
    ),
  )
}

function readOptionValue(element) {
  for (let attribute of [
    "data-value",
    "data-selected-value",
    "dropdown-value",
    "value",
  ]) {
    let value = normalizeText(element.getAttribute(attribute))
    if (value) return value
  }
  return ""
}

function readCandidateFromElement(element) {
  let value = readOptionValue(element)
  let text = normalizeText(element.textContent)
  return value && text && text.toLowerCase() !== "no results"
    ? { value, text }
    : null
}

function collectCandidates(container) {
  let candidates = []
  let seen = new Set()
  for (let item of getIcimsSearchDropdownOptionItems(container)) {
    let candidate = readCandidateFromElement(item)
    if (!candidate) continue
    let key = JSON.stringify([candidate.value, candidate.text])
    if (seen.has(key)) continue
    seen.add(key)
    candidates.push(candidate)
    if (candidates.length >= MAX_CANDIDATES) break
  }
  return candidates
}

function snapshotDropdown(container) {
  let nodes = getDropdownListItems(container)
  let signature = JSON.stringify({
    noResults: hasIcimsSearchDropdownNoResults(container),
    options: getIcimsSearchDropdownOptionItems(container).map((item) => ({
      value: readOptionValue(item),
      text: normalizeText(item.textContent),
    })),
  })
  return { signature, nodes }
}

function snapshotChanged(previous, next) {
  return (
    previous.signature !== next.signature ||
    previous.nodes.length !== next.nodes.length ||
    previous.nodes.some((node, index) => node !== next.nodes[index])
  )
}

function getDropdownSignature(container) {
  return snapshotDropdown(container).signature
}

function setNativeInputValue(input, value) {
  let descriptor = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(input),
    "value",
  )
  if (descriptor?.set) {
    descriptor.set.call(input, value)
  } else {
    input.value = value
  }
}

function typeSearchInput(input, text) {
  input.focus()
  setNativeInputValue(input, "")
  input.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))

  let value = ""
  for (let character of text) {
    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        key: character,
      }),
    )
    setNativeInputValue(input, (value += character))
    input.dispatchEvent(
      new Event("input", { bubbles: true, cancelable: true }),
    )
    input.dispatchEvent(
      new KeyboardEvent("keyup", {
        bubbles: true,
        cancelable: true,
        key: character,
      }),
    )
  }

  input.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: true }),
  )
}

async function requestProfileOptionsSearch(body) {
  return await messaging.sendToBackground({
    name: "searchIcimsProfileOptions",
    body,
  })
}

async function requestProfileOptionSelect(body) {
  return await messaging.sendToBackground({
    name: "selectIcimsProfileOption",
    body,
  })
}

function sanitizeCandidates(candidates) {
  if (!Array.isArray(candidates) || candidates.length > MAX_CANDIDATES) {
    return null
  }

  let result = []
  let seen = new Set()
  for (let item of candidates) {
    if (!item || typeof item !== "object" || Array.isArray(item)) return null
    let keys = Object.keys(item)
    if (
      keys.length !== 2 ||
      !keys.includes("value") ||
      !keys.includes("text")
    ) {
      return null
    }
    if (typeof item.value !== "string" || typeof item.text !== "string") {
      return null
    }

    let value = normalizeText(item.value)
    let text = normalizeText(item.text)
    if (!value || value.length > 256 || !text || text.length > 512) {
      return null
    }

    let key = JSON.stringify([value, text])
    if (!seen.has(key)) {
      seen.add(key)
      result.push({ value, text })
    }
  }
  return result
}

export async function captureIcimsProfileOptionsCandidates(
  select,
  searchInput,
  requestSearch = requestProfileOptionsSearch,
) {
  let response
  cancellation.checkpoint()

  let normalizedSearch = normalizeText(searchInput)
  if (!select?.id || !normalizedSearch) return { status: "unavailable" }

  let token = bumpGenerationToken(select)
  let trigger = getIcimsSearchDropdownTrigger(select)
  let container = trigger ? getIcimsSearchDropdownContainer(trigger) : null
  let input = container?.querySelector("input")
  if (!trigger || !container || !input) return { status: "unavailable" }

  let generation = {
    token,
    select,
    container,
    input,
    searchInput: normalizedSearch,
    candidates: [],
    invalidated: false,
  }
  installInvalidationListeners(generation, trigger)

  try {
    response = await requestSearch({
      selectId: select.id,
      searchInput: normalizedSearch,
    })
  } catch {
    clearGenerationCleanup(select, token)
    console.warn("[IcimsProfileOptions] search failed")
    return { status: "unavailable" }
  }

  cancellation.checkpoint()
  if (!isCurrentGeneration(select, token) || generation.invalidated) {
    generation.invalidated = true
    clearGenerationCleanup(select, token)
    return { status: "invalidated" }
  }

  if (response?.status === "failure") {
    clearGenerationCleanup(select, token)
    console.warn("[IcimsProfileOptions] search failed", {
      reason: response.reason,
    })
    return { status: "unavailable" }
  }

  let candidates = sanitizeCandidates(response?.candidates)
  if (
    !candidates ||
    (response?.status === "ready" && candidates.length === 0) ||
    (response?.status === "no-results" && candidates.length > 0)
  ) {
    clearGenerationCleanup(select, token)
    console.warn("[IcimsProfileOptions] invalid candidate response")
    return { status: "unavailable" }
  }

  generation.candidates = candidates
  console.info("[IcimsProfileOptions] search completed", {
    fieldType: select.id.endsWith("CandProfileFields.School")
      ? "school"
      : "major",
    candidateCount: candidates.length,
  })
  return { status: response.status, generation }
}

export async function captureFreshIcimsSearchCandidates(select, searchInput) {
  let normalizedSearch = normalizeText(searchInput)
  if (!select || !normalizedSearch) return { status: "unavailable" }

  let token = bumpGenerationToken(select)
  let opened = await openIcimsSearchDropdown(select)
  if (!isCurrentGeneration(select, token)) return { status: "invalidated" }
  if (opened.status === "unavailable") return opened

  let { $container, $input, $trigger } = opened.context
  let generation = {
    token,
    select,
    container: $container,
    input: $input,
    searchInput: normalizedSearch,
    candidates: [],
    invalidated: false,
  }

  let baseline = snapshotDropdown($container)
  let observing = false
  let changed = false
  let sawLoading = false
  let wasLoading = isDropdownLoading($container)
  let observeSnapshot = () => {
    if (!observing) return
    let loading = isDropdownLoading($container)
    if (loading && !wasLoading) sawLoading = true
    wasLoading = loading
    if (snapshotChanged(baseline, snapshotDropdown($container))) {
      changed = true
    }
  }

  installInvalidationListeners(generation, $trigger)
  let observer = new MutationObserver(() => {
    observeSnapshot()
  })
  observer.observe($container, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  })

  let retained = false
  try {
    observing = true
    typeSearchInput($input, normalizedSearch)

    let deadline = Date.now() + SEARCH_TIMEOUT_MS
    let lastSignature = ""
    let stableCount = 0

    while (Date.now() <= deadline) {
      if (!isCurrentGeneration(select, token) || generation.invalidated) {
        generation.invalidated = true
        return { status: "invalidated" }
      }

      observeSnapshot()
      let loading = isDropdownLoading($container)
      if (!changed || loading) {
        stableCount = 0
        await cancellation.cancellableDelay(POLL_INTERVAL_MS)
        continue
      }

      let noResults = hasIcimsSearchDropdownNoResults($container)
      let optionItems = getIcimsSearchDropdownOptionItems($container)
      if (!noResults && optionItems.length === 0) {
        stableCount = 0
        await cancellation.cancellableDelay(POLL_INTERVAL_MS)
        continue
      }

      let signature = getDropdownSignature($container)
      if (signature === lastSignature) {
        stableCount += 1
      } else {
        lastSignature = signature
        stableCount = 1
      }

      if (stableCount >= STABLE_SIGNATURE_ITERATIONS) {
        generation.candidates = collectCandidates($container)
        retained = true
        return {
          status:
            noResults && optionItems.length === 0 ? "no-results" : "ready",
          generation,
        }
      }

      await cancellation.cancellableDelay(POLL_INTERVAL_MS)
    }

    if (!isCurrentGeneration(select, token) || generation.invalidated) {
      return { status: "invalidated" }
    }
    return changed || sawLoading
      ? { status: "timeout" }
      : { status: "stale" }
  } finally {
    observer.disconnect()
    if (!retained) clearGenerationCleanup(select, token)
  }
}

function candidateEquals(left, right) {
  return left.value === right.value && left.text === right.text
}

function collectSelectedDisplayNodes(root) {
  let nodes = [root, ...Array.from(root.querySelectorAll(SELECTED_OPTION_SELECTOR))]
  return Array.from(new Set(nodes))
}

function readSelectedCandidates(select) {
  let candidates = []
  let selectedOptions = Array.from(select.selectedOptions ?? [])
  for (let option of selectedOptions) {
    let candidate = {
      value: normalizeText(option.value),
      text: normalizeText(option.text),
    }
    if (candidate.value && candidate.text) candidates.push(candidate)
  }

  let fakeSelected = select.id
    ? document.getElementById(`${select.id}_fakeSelected_icimsDropdown`)
    : null
  let sibling = select.nextElementSibling
  for (let root of [fakeSelected, sibling]) {
    if (!root) continue
    for (let node of collectSelectedDisplayNodes(root)) {
      let candidate = readCandidateFromElement(node)
      if (candidate) candidates.push(candidate)
    }
  }
  return candidates
}

function hasVisibleSelectedText(select, text) {
  let doc =
    select.ownerDocument ??
    (typeof document === "undefined" ? null : document)
  let fakeSelected = select.id
    ? doc?.getElementById(`${select.id}_fakeSelected_icimsDropdown`)
    : null
  let sibling = select.nextElementSibling
  return [fakeSelected, sibling].some(
    (node) => normalizeText(node?.textContent) === text,
  )
}

function hasExactNativeSelection(select, candidate) {
  let selected = Array.from(select.selectedOptions ?? [])
  return (
    selected.length === 1 &&
    normalizeText(selected[0].value) === candidate.value &&
    normalizeText(selected[0].text) === candidate.text
  )
}

function getGenerationContainer(generation) {
  let trigger = generation.select.nextElementSibling
  return trigger?.id
    ? document.getElementById(`${trigger.id}_ctnr`)
    : null
}

export async function commitExactIcimsSearchCandidate(generation, candidate) {
  try {
    if (
      generation.invalidated ||
      !isCurrentGeneration(generation.select, generation.token) ||
      !generation.candidates.some((item) => candidateEquals(item, candidate))
    ) {
      return false
    }

    let container = getGenerationContainer(generation)
    if (!container || container !== generation.container) return false

    let matches = getIcimsSearchDropdownOptionItems(container).filter(
      (item) => {
        let parsed = readCandidateFromElement(item)
        return !!parsed && candidateEquals(parsed, candidate)
      },
    )
    if (matches.length !== 1) return false

    utils.triggerEvents(matches[0], [
      "focus",
      "mousedown",
      "mouseup",
      "click",
    ])

    let deadline = Date.now() + COMMIT_READBACK_TIMEOUT_MS
    while (
      Date.now() <= deadline &&
      !generation.invalidated &&
      isCurrentGeneration(generation.select, generation.token)
    ) {
      if (
        readSelectedCandidates(generation.select).some((item) =>
          candidateEquals(item, candidate),
        )
      ) {
        return true
      }
      await cancellation.cancellableDelay(POLL_INTERVAL_MS)
    }
    return false
  } finally {
    clearGenerationCleanup(generation.select, generation.token)
  }
}

export async function commitExactIcimsProfileOptionCandidate(
  generation,
  candidate,
  requestSelect = requestProfileOptionSelect,
) {
  let logFailure = (reason, extra = {}) => {
    console.info(
      `[IcimsProfileOptions] candidate commit failed ${JSON.stringify({
        fieldType: generation.select.id.endsWith("CandProfileFields.School")
          ? "school"
          : "major",
        reason,
        ...extra,
      })}`,
    )
  }

  try {
    let selectResult
    let { select, input } = generation

    if (
      generation.invalidated ||
      !isCurrentGeneration(select, generation.token) ||
      !generation.candidates.some((item) => candidateEquals(item, candidate))
    ) {
      logFailure("invalid-generation-or-candidate")
      return false
    }

    let container = getGenerationContainer(generation)
    if (!container || container !== generation.container) {
      logFailure("stale-container")
      return false
    }

    let trigger = getIcimsSearchDropdownTrigger(select)
    if (!trigger) {
      logFailure("missing-trigger")
      return false
    }

    utils.triggerEvents(trigger, ["mousedown", "mouseup", "click"])
    typeSearchInput(input, generation.searchInput)

    let searchDeadline = Date.now() + COMMIT_SEARCH_TIMEOUT_MS
    let visibleOption = null
    while (Date.now() <= searchDeadline) {
      if (
        generation.invalidated ||
        !isCurrentGeneration(select, generation.token)
      ) {
        return false
      }

      let matches = getIcimsSearchDropdownOptionItems(container).filter(
        (item) => normalizeText(item.textContent) === candidate.text,
      )
      if (matches.length > 1) {
        logFailure("ambiguous-visible-options", {
          matchingOptionCount: matches.length,
        })
        return false
      }
      if (matches.length === 1) {
        visibleOption = matches[0]
        break
      }
      await cancellation.cancellableDelay(POLL_INTERVAL_MS)
    }

    if (!visibleOption) {
      logFailure("missing-visible-option")
      return false
    }

    try {
      selectResult = await requestSelect({
        selectId: select.id,
        candidate,
      })
    } catch {
      selectResult = { status: "failure", reason: "uncommitted" }
    }

    if (selectResult.status !== "selected") {
      visibleOption.click()
    }

    let readbackDeadline = Date.now() + COMMIT_READBACK_TIMEOUT_MS
    while (Date.now() <= readbackDeadline) {
      if (
        generation.invalidated ||
        !isCurrentGeneration(select, generation.token)
      ) {
        return false
      }
      if (
        hasExactNativeSelection(select, candidate) &&
        hasVisibleSelectedText(select, candidate.text)
      ) {
        return true
      }
      await cancellation.cancellableDelay(POLL_INTERVAL_MS)
    }

    logFailure("uncommitted-readback", {
      mainWorldStatus: selectResult.status,
      mainWorldReason:
        selectResult.status === "failure" ? selectResult.reason : undefined,
      nativeSelectionMatched: hasExactNativeSelection(select, candidate),
      visibleSelectionMatched: hasVisibleSelectedText(
        select,
        candidate.text,
      ),
    })
    return false
  } finally {
    clearGenerationCleanup(generation.select, generation.token)
  }
}

function isPlaceholderSelection(text, value) {
  let normalizedText = normalizeText(text).toLowerCase()
  let normalizedValue = normalizeText(value)
  return (
    (!normalizedText && !normalizedValue) ||
    /^(?:[-\u2014\u2013]\s*)?(?:make a selection|please select(?: an option)?|select one|choose(?: an option)?)(?:\s*[-\u2014\u2013])?$/.test(
      normalizedText,
    )
  )
}

function displayHasNonPlaceholderSelection(root) {
  return collectSelectedDisplayNodes(root).some((node) => {
    let candidate = readCandidateFromElement(node)
    return (
      !!candidate && !isPlaceholderSelection(candidate.text, candidate.value)
    )
  })
}

function isBlankSelectionDisplay(root) {
  if (!root) return true
  if (displayHasNonPlaceholderSelection(root)) return false
  let text = normalizeText(root.textContent)
  return !text || isPlaceholderSelection(text, "")
}

function isSelectClearedToPlaceholder(select) {
  let selected = Array.from(select.selectedOptions ?? [])
  if (
    selected.length !== 1 ||
    !isPlaceholderSelection(selected[0].text, selected[0].value)
  ) {
    return false
  }

  let fakeSelected = select.id
    ? document.getElementById(`${select.id}_fakeSelected_icimsDropdown`)
    : null
  let sibling = select.nextElementSibling
  return isBlankSelectionDisplay(fakeSelected) && isBlankSelectionDisplay(sibling)
}

export async function clearIcimsSearchSelectAndVerify(select) {
  if (!select || select.multiple) return false

  bumpSelectGeneration(select)

  let options = Array.from(select.options ?? [])
  let placeholderIndex = options.findIndex((option) =>
    isPlaceholderSelection(option.text, option.value),
  )
  if (placeholderIndex < 0) return false

  options.forEach((option, index) => {
    option.selected = index === placeholderIndex
  })
  select.selectedIndex = placeholderIndex
  select.dispatchEvent(
    new Event("input", { bubbles: true, cancelable: true }),
  )
  select.dispatchEvent(
    new Event("change", { bubbles: true, cancelable: true }),
  )

  let deadline = Date.now() + COMMIT_READBACK_TIMEOUT_MS
  while (Date.now() <= deadline) {
    if (isSelectClearedToPlaceholder(select)) return true
    await cancellation.cancellableDelay(POLL_INTERVAL_MS)
  }
  return false
}
