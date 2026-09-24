// @ts-nocheck
/**
 * Rippling submit tracking — readable TypeScript source of truth.
 */

const SUBMIT_LABELS = /* @__PURE__ */ new Set(["apply", "submit application"])

function normalizeControlText(text) {
  return (text || "").replace(/\s+/g, " ").trim().toLowerCase()
}

export function resolveRipplingSubmitButton(target) {
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
  const testId = normalizeControlText(button.getAttribute("data-testid"))
  const classes = (button.getAttribute("class") || "").split(/\s+/)
  const ariaLabel = normalizeControlText(button.getAttribute("aria-label"))
  const text = normalizeControlText(button.textContent)
  return "apply" === testId ||
    classes.includes("submit-app-button") ||
    SUBMIT_LABELS.has(ariaLabel) ||
    SUBMIT_LABELS.has(text)
    ? button
    : null
}

export function getRipplingSubmitButton(root = document) {
  return (
    Array.from(root.querySelectorAll('button[type="submit"]')).find(
      (button) => resolveRipplingSubmitButton(button) === button,
    ) || null
  )
}
