// @ts-nocheck
/**
 * HRMDirect — submit button resolution and page-scope tracking.
 */

const CONTINUE_KEY = "forms.application.continue"
const SUBMIT_KEY = "forms.application.submit"

function hasClass(element, className) {
  return (element.getAttribute("class") || "").split(/\s+/).includes(className)
}

export function resolveHrmdirectSubmitButton(target) {
  const closest = target?.closest
  if (typeof closest !== "function") return null

  const button = closest.call(target, "button")
  if (
    !button ||
    button.tagName.toLowerCase() !== "button" ||
    button.getAttribute("type")?.toLowerCase() !== "submit" ||
    !hasClass(button, "submit-button") ||
    button.disabled ||
    button.hasAttribute("disabled")
  ) {
    return null
  }

  return button.closest("form.section-form") ||
    button.closest("form#personal-info-form")
    ? button
    : null
}

export function getHrmdirectPageScope(root = document) {
  const active = root.querySelector(".form-progress-holder li.active")
  const classes = (active?.getAttribute("class") || "").split(/\s+/)
  const pageClass = classes.find((cls) => /^page-\d+$/.test(cls)) || null
  if (pageClass) return pageClass
  return root.querySelector("form#personal-info-form") ? "create-account" : null
}

export function getHrmdirectSubmitAction(button, root = document) {
  const localizedKey = button.getAttribute("data-localized-key")
  if (localizedKey === CONTINUE_KEY) return "continue"
  if (localizedKey === SUBMIT_KEY) return "submit"

  const active = root.querySelector(".form-progress-holder li.active")
  return active && !active.nextElementSibling ? "submit" : "continue"
}

export function getHrmdirectSubmitButton(root = document) {
  return (
    Array.from(root.querySelectorAll('button[type="submit"]')).find(
      (button) => resolveHrmdirectSubmitButton(button) === button,
    ) || null
  )
}
