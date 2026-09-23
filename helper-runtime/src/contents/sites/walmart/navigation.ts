// @ts-nocheck
/**
 * Walmart page navigation — continue/submit advance-button detection and clicks.
 */

import * as composite from "./composite.ts"

const ADVANCE_BUTTON_SELECTOR =
  'button, input[type="submit"], input[type="button"], [role="button"]'

function normalizeSpaceLower(value) {
  return (value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function getControlText(element) {
  const el = element
  return normalizeSpaceLower(
    el.innerText ||
      element.textContent ||
      el.value ||
      element.getAttribute("aria-label") ||
      element.getAttribute("title"),
  )
}

function isVisible(element) {
  const hasCheckVisibility = "function" == typeof element.checkVisibility
  if (hasCheckVisibility) return element.checkVisibility() ?? false
  if (element.hidden || "true" === element.getAttribute("aria-hidden")) return false
  if ("undefined" != typeof window && window.getComputedStyle) {
    const style = window.getComputedStyle(element)
    if ("none" === style.display || "hidden" === style.visibility) return false
  }
  const rect = element.getBoundingClientRect?.()
  return !rect || 0 !== rect.width || 0 !== rect.height
}

function isDisabled(element) {
  const disabled =
    ("undefined" != typeof HTMLButtonElement &&
      element instanceof HTMLButtonElement &&
      element.disabled) ||
    ("undefined" != typeof HTMLInputElement &&
      element instanceof HTMLInputElement &&
      element.disabled)
  return disabled || "true" === element.getAttribute("aria-disabled")
}

function isHelperChrome(element) {
  return !!element.closest?.(
    "#jobright-helper-id, #jobright-helper-plugin, [id='jobright-helper-id'], [id='jobright-helper-plugin']",
  )
}

function isIgnoredAdvanceText(text) {
  return (
    "back" === text ||
    "search" === text ||
    text.includes("search by") ||
    text.includes("feedback") ||
    text.includes("get unlimited") ||
    text.includes("add this job") ||
    text.includes("cancel") ||
    "save" === text ||
    text.includes("save for later")
  )
}

function getWalmartAdvanceButtonType(element, options = {}) {
  const text = getControlText(element)
  const aria = normalizeSpaceLower(element.getAttribute("aria-label"))
  const combined = `${text} ${aria}`.trim()
  if (!combined || isIgnoredAdvanceText(combined)) return null

  if (
    "continue" === combined ||
    "next" === combined ||
    "agree" === combined ||
    /\bcontinue\b/.test(combined) ||
    /\bnext\b/.test(combined) ||
    /\bagree\b/.test(combined) ||
    combined.includes("continue") ||
    combined.includes("next page") ||
    combined.includes("next step")
  ) {
    return options.isSubmitStep ? "submit" : "continue"
  }

  if (
    "submit" === combined ||
    "apply" === combined ||
    /\bsubmit\b/.test(combined) ||
    /\bapply\b/.test(combined) ||
    combined.includes("submit") ||
    combined.includes("apply")
  ) {
    return "submit"
  }

  return null
}

function collectVisibleTexts(root, selector) {
  return Array.from(root.querySelectorAll(selector))
    .filter(isVisible)
    .map((node) => normalizeSpaceLower(node.textContent))
    .filter(Boolean)
}

function shouldTreatWalmartPageAsSubmitStep(root = document) {
  const combined = [
    ...collectVisibleTexts(root, "h1, h2, h3"),
    ...collectVisibleTexts(
      root,
      '[aria-current="step"], [role="progressbar"], [class*="progress" i], [data-testid*="progress" i], [class*="stepper" i], [data-testid*="stepper" i]',
    ),
  ]
    .join(" ")
    .toLowerCase()
  return /\breview\b|\bsubmit\b/.test(combined)
}

function hasVisibleWalmartCompositeDialog() {
  return !!composite.getVisibleWalmartCompositeDialog()
}

function isWalmartAdvanceButtonCandidate(element) {
  return (
    !isHelperChrome(element) &&
    !composite.isInWalmartCompositeDialog(element) &&
    !isDisabled(element) &&
    !!getWalmartAdvanceButtonType(element)
  )
}

function getCurrentAdvanceButton() {
  const isSubmitStep = shouldTreatWalmartPageAsSubmitStep()
  const candidates = Array.from(
    document.querySelectorAll(ADVANCE_BUTTON_SELECTOR),
  ).filter((element) => isVisible(element) && isWalmartAdvanceButtonCandidate(element))

  const typed = candidates
    .map((element) => ({
      element,
      type: getWalmartAdvanceButtonType(element, { isSubmitStep }),
    }))
    .filter((entry) => !!entry.type)

  const continueButton = isSubmitStep
    ? null
    : typed.find((entry) => "continue" === entry.type)

  return continueButton ?? typed[0] ?? null
}

function clickAdvanceButton(element) {
  if (!element?.isConnected) return
  element.scrollIntoView?.({ block: "center", inline: "nearest" })
  element.focus?.()
  const rect = element.getBoundingClientRect()
  const eventInit = {
    bubbles: true,
    cancelable: true,
    composed: true,
    view: window,
    clientX: rect.left + rect.width / 2,
    clientY: rect.top + rect.height / 2,
  }
  element.dispatchEvent(new MouseEvent("pointerdown", eventInit))
  element.dispatchEvent(new MouseEvent("mousedown", eventInit))
  element.dispatchEvent(new MouseEvent("pointerup", eventInit))
  element.dispatchEvent(new MouseEvent("mouseup", eventInit))
  element.click()
}

export {
  clickAdvanceButton,
  getCurrentAdvanceButton,
  getWalmartAdvanceButtonType,
  hasVisibleWalmartCompositeDialog,
  isWalmartAdvanceButtonCandidate,
  shouldTreatWalmartPageAsSubmitStep,
}
