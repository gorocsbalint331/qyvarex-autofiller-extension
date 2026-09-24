// @ts-nocheck
/**
 * Stacking styles for the helper host element so UI sits above page content.
 */

export const HELPER_HOST_Z_INDEX = 2147483647

export function applyHelperHostStackingStyle(element) {
  if (!element?.style) return
  element.style.setProperty("position", "relative", "important")
  element.style.setProperty("z-index", String(HELPER_HOST_Z_INDEX), "important")
}
