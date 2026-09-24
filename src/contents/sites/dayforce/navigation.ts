// @ts-nocheck
/**
 * Dayforce — registration "Next" button target for continue navigation.
 */

import * as auth from "./auth.ts"

export function getDayforceRegistrationNextTarget({
  root = document,
  url,
  isVisible = (el) =>
    !el.closest('[hidden], [aria-hidden="true"]') &&
    el.getClientRects().length > 0 &&
    window.getComputedStyle(el).visibility !== "hidden",
} = {}) {
  if (auth.getDayforceAuthPageMode(url) !== "register") return null

  const mains = Array.from(root.querySelectorAll("main"))
  if (mains.length !== 1 || !isVisible(mains[0])) return null

  const hosts = Array.from(
    mains[0].querySelectorAll('evr-button[label="Next"][type="submit"]'),
  )
  if (hosts.length !== 1 || !isVisible(hosts[0])) return null

  const buttons = Array.from(
    hosts[0].shadowRoot?.querySelectorAll(
      'button[type="submit"][aria-label="Next"]',
    ) ?? [],
  )
  if (buttons.length !== 1) return null

  const button = buttons[0]
  if (
    !isVisible(button) ||
    button.disabled ||
    button.getAttribute("aria-disabled") === "true"
  ) {
    return null
  }

  return {
    element: button,
    type: "continue",
    suppressClickTracking: true,
  }
}
