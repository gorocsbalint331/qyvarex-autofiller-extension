// @ts-nocheck
/**
 * Kula — location/address search DOM capture / commit helpers.
 */

import * as cancellation from "../../methods/cancellation.js"

function getAddressFieldControl(input) {
  const control = input.closest?.(
    '[data-test-id="address"], .chakra-form-control',
  )
  return input.isConnected && input.id === "info.address" && control
    ? control
    : null
}

function getPopover(input) {
  return (
    getAddressFieldControl(input)?.querySelector(
      'section.chakra-popover__content[role="dialog"]',
    ) || null
  )
}

function isVisible(element) {
  if (!element?.isConnected) return false
  const style = getComputedStyle(element)
  return (
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    Number(style.opacity || 1) > 0.1
  )
}

function setInputValue(input, value) {
  const setter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    "value",
  )?.set
  if (!setter) throw Error("Missing input setter")
  setter.call(input, value)
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
}

export function clearKulaLocationSearch(input) {
  if (input.isConnected) {
    setInputValue(input, "")
    input.blur()
  }
}

function getOptionElements(popover) {
  return Array.from(popover.children).filter((child) => {
    const text = child.textContent?.trim() || ""
    return (
      child.tagName === "DIV" &&
      !!text &&
      !/^Add and select\b/i.test(text) &&
      child.getAttribute("aria-disabled") !== "true"
    )
  })
}

function mapOptions(input, popover) {
  return getOptionElements(popover).map((element, index) => {
    const text = element.textContent.trim()
    return {
      element,
      option: {
        candidate_key: `${input.name}:${index}`,
        value: text,
        text,
      },
    }
  })
}

export async function captureKulaLocationCandidates(input, query) {
  const control = getAddressFieldControl(input)
  if (!control) return { status: "failed", candidates: [] }

  input.focus()
  let menuMutated = false
  let sawBusy = input.getAttribute("aria-busy") === "true"

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "attributes") {
        if (!sawBusy) {
          sawBusy =
            input.getAttribute("aria-busy") === "true" ||
            mutation.oldValue === "true"
        }
      } else if (
        mutation.target === control ||
        control.contains(mutation.target)
      ) {
        menuMutated = true
      }
    }
  })

  observer.observe(control, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["aria-busy"],
    attributeOldValue: true,
  })

  try {
    setInputValue(input, query)
    await cancellation.cancellableDelay(600)

    let previousStateJson = ""
    let stableCount = 0

    for (
      let attempt = 0;
      attempt < 20 &&
      (cancellation.checkpoint(),
      input.isConnected && input.value === query);
      attempt++
    ) {
      const popover = getPopover(input)
      if (
        isVisible(popover) &&
        input.getAttribute("aria-busy") !== "true" &&
        (menuMutated || sawBusy)
      ) {
        const candidates = mapOptions(input, popover).map(
          (entry) => entry.option,
        )
        const popoverText = popover.textContent?.trim() || ""
        const noResults =
          popoverText === "No options available" ||
          popoverText.startsWith(`No options found for "${query}"`)
        const stateJson = JSON.stringify([candidates, noResults])

        stableCount = stateJson === previousStateJson ? stableCount + 1 : 0
        previousStateJson = stateJson

        if (stableCount >= 2 && (candidates.length || noResults)) {
          return {
            status: candidates.length ? "ready" : "no-results",
            candidates: candidates.slice(0, 25),
          }
        }
      } else {
        stableCount = 0
        previousStateJson = ""
      }

      await cancellation.cancellableDelay(200)
    }

    return { status: "failed", candidates: [] }
  } finally {
    observer.disconnect()
  }
}

export async function commitKulaLocationCandidate(input, candidate) {
  const popover = getPopover(input)
  if (!isVisible(popover)) return false

  const matches = mapOptions(input, popover).filter(
    (entry) => entry.option.text === candidate.text,
  )
  if (
    matches.length !== 1 ||
    matches[0].option.candidate_key !== candidate.candidate_key
  ) {
    return false
  }

  const element = matches[0].element
  element.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  element.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  element.click()
  await cancellation.cancellableDelay(250)

  if (isVisible(getPopover(input)) || input.value !== candidate.text) {
    return false
  }

  input.blur()
  await cancellation.cancellableDelay(150)

  const control = getAddressFieldControl(input)
  return (
    !!control &&
    input.value === candidate.text &&
    !isVisible(getPopover(input)) &&
    input.getAttribute("aria-invalid") !== "true" &&
    !control.hasAttribute("data-invalid") &&
    !control.querySelector(".chakra-form__error-message")
  )
}
