// @ts-nocheck
/**
 * Shared crawler label / text helpers.
 */

export function shouldSkipLabel(element) {
  const className = element.className
  return className && className.includes("offscreen")
}

export function getLabelText(element) {
  const firstLine = element.textContent.trim().split("\n")[0]
  return firstLine ? firstLine.replace(/[\u2731*]/g, "").trim() : ""
}

export function removeSpecialCharacters(text) {
  return text.replace(/[^a-zA-Z0-9\s]/g, "")
}

export function triggerTabEvent(element) {
  const event = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    key: "Tab",
    keyCode: 9,
    which: 9,
  })
  element.dispatchEvent(event)
}
