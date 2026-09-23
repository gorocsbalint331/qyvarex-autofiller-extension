// @ts-nocheck
/**
 * Sequential async executor with per-step delay (re-exports delay).
 */

import { delay } from "../../../utils/delay.ts"

export { delay }

export async function executeSequentially(...steps) {
  for (const step of steps) {
    let fn
    let waitMs = 1200

    if (typeof step === "function") {
      fn = step
    } else if (typeof step === "object" && step.func) {
      fn = step.func
      if (typeof step.delay === "number") waitMs = step.delay
    } else {
      console.warn("Skipping invalid argument:", step)
      continue
    }

    try {
      if (fn.constructor.name === "AsyncFunction") await fn()
      else fn()
    } catch (error) {
      console.error(`Error in function ${fn.name}:`, error)
    }

    await delay(waitMs)
  }
}
