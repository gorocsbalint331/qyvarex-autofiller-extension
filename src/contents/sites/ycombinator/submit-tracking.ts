// @ts-nocheck
/**
 * YCombinator — submit-button resolution for tracking and submit clicks.
 */

function resolveYCombinatorSubmitButton(target) {
  let closest = target?.closest
  if (typeof closest !== "function") return null

  let button = closest.call(target, "button")
  return !button ||
    button.tagName.toLowerCase() !== "button" ||
    (button.getAttribute("type") || "").toLowerCase() !== "submit" ||
    button.disabled ||
    button.hasAttribute("disabled")
    ? null
    : button
}

function getYCombinatorSubmitButton(root = document) {
  return (
    Array.from(root.querySelectorAll('button[type="submit"]')).find(
      (button) => resolveYCombinatorSubmitButton(button) === button,
    ) || null
  )
}

export { getYCombinatorSubmitButton, resolveYCombinatorSubmitButton }
