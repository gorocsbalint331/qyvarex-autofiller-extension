// @ts-nocheck
/**
 * Stacking styles for the helper host element so UI sits above page content.
 */

export const HELPER_HOST_Z_INDEX = 2147483647

export function applyHelperHostStackingStyle(element) {
  if (!element?.style) return
  element.style.setProperty("display", "block", "important")
  element.style.setProperty("position", "fixed", "important")
  element.style.setProperty("top", "0", "important")
  element.style.setProperty("right", "0", "important")
  element.style.setProperty("width", "0", "important")
  element.style.setProperty("height", "0", "important")
  element.style.setProperty("margin", "0", "important")
  element.style.setProperty("padding", "0", "important")
  element.style.setProperty("border", "0", "important")
  element.style.setProperty("overflow", "visible", "important")
  element.style.setProperty("z-index", String(HELPER_HOST_Z_INDEX), "important")
}
