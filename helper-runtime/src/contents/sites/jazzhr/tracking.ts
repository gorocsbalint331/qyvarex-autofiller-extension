// @ts-nocheck
/**
 * JazzHR submit-button tracking helpers.
 */

const TRACKING_BUTTON_SELECTOR =
  "button, input[type='submit'], input[type='button'], a, [role='button']"

function getButtonLabel(element) {
  return (
    element.textContent ||
    element.getAttribute("value") ||
    element.getAttribute("aria-label") ||
    element.getAttribute("title") ||
    ""
  )
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export function isJazzhrTrackingButton(element) {
  if (!element || typeof element.getAttribute !== "function") return false
  const disabled =
    element.disabled ||
    element.getAttribute("disabled") != null ||
    element.getAttribute("aria-disabled") === "true"
  if (disabled) return false

  const label = getButtonLabel(element)
  const type = element.getAttribute("type")?.toLowerCase()
  const id = element.getAttribute("id")?.toLowerCase() || ""
  const className = element.getAttribute("class")?.toLowerCase() || ""
  return (
    type === "submit" ||
    id === "resumator-submit-resume" ||
    id === "resumator-mobile-apply-button" ||
    id.includes("submit") ||
    className.includes("submit") ||
    label === "apply" ||
    label === "submit" ||
    label === "continue" ||
    label === "next" ||
    label.includes("submit") ||
    label.includes("apply")
  )
}

export function resolveJazzhrTrackingButton(target) {
  const button = target.closest(TRACKING_BUTTON_SELECTOR)
  return isJazzhrTrackingButton(button) ? button : null
}

export function getJazzhrSubmitButton(root = document) {
  const primary = root.querySelector("#resumator-submit-resume")
  if (isJazzhrTrackingButton(primary)) return primary
  const candidates = Array.from(root.querySelectorAll(TRACKING_BUTTON_SELECTOR))
  return candidates.find(isJazzhrTrackingButton) || null
}
