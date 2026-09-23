// @ts-nocheck
/**
 * Promise delay that respects autofill cancellation.
 */

import * as cancellation from "../contents/methods/cancellation.js"

export function delay(ms) {
  return cancellation.cancellableDelay(ms)
}
