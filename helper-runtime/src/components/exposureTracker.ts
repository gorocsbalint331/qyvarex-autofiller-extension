// @ts-nocheck
/**
 * One-shot page exposure claims (WeakSet so the same page object is only claimed once).
 */

const claimedPages = new WeakSet()

export function claimPageExposure(page) {
  if (claimedPages.has(page)) return false
  claimedPages.add(page)
  return true
}
