// @ts-nocheck
/**
 * Poll until a target appears or attempts are exhausted / cancelled.
 */

import { delay } from "./delay.ts"

export default async function getTargetOrTimeout(
  getTarget,
  shouldCancel = () => false,
  maxAttempts = 15,
) {
  let attempts = 0
  let target = null
  while (attempts < maxAttempts) {
    if (shouldCancel?.()) return null
    target = getTarget()
    if (target) break
    await delay(100)
    attempts += 1
  }
  return target
}
