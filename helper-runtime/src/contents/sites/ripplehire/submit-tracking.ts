// @ts-nocheck
/**
 * RippleHire submit tracking — readable TypeScript source of truth.
 */

const SUBMIT_LABEL = "submit application"

function normalizeControlText(text) {
  return (text || "").replace(/\s+/g, " ").trim().toLowerCase()
}

export function resolveRipplehireSubmitButton(target) {
  const closest = target?.closest
  if ("function" != typeof closest) return null
  const button = closest.call(target, "button")
  if (
    !button ||
    "button" !== button.tagName.toLowerCase() ||
    "submit" !== normalizeControlText(button.getAttribute("type")) ||
    button.disabled ||
    button.hasAttribute("disabled")
  ) {
    return null
  }
  const id = normalizeControlText(button.getAttribute("id"))
  const ariaLabel = normalizeControlText(button.getAttribute("aria-label"))
  const text = normalizeControlText(button.textContent)
  return "btn-submit-app" === id ||
    ariaLabel === SUBMIT_LABEL ||
    text === SUBMIT_LABEL
    ? button
    : null
}

export function getRipplehireSubmitButton(root = document) {
  return (
    Array.from(root.querySelectorAll('button[type="submit"]')).find(
      (button) => resolveRipplehireSubmitButton(button) === button,
    ) || null
  )
}
