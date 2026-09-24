// @ts-nocheck
/**
 * Paycom Online v3 — submit success/failure detection via loading-button errors.
 */

import * as delay from "../../../utils/delay.js"

function countVisibleLoadingButtonErrors() {
  const nodes = document.querySelectorAll(".uiLoadingButton-error")
  let count = 0
  for (const node of Array.from(nodes)) {
    if (
      node.offsetParent !== null ||
      node.getClientRects().length > 0
    ) {
      count++
    }
  }
  return count
}

export function capturePaycomSubmitBaseline() {
  return countVisibleLoadingButtonErrors()
}

export async function waitForPaycomSubmitOutcome(
  baselineErrorCount,
  submitButton,
  signal,
  options = {},
) {
  const pollMs = options.pollMs ?? 250
  const maxPolls = options.maxPolls ?? 14
  const findSubmitButton = options.findSubmitButton

  for (let poll = 0; poll < maxPolls; poll++) {
    if (signal?.aborted) return "failure"
    await delay.delay(pollMs)
    if (findSubmitButton && findSubmitButton() === null) return "success"

    const errorCount = countVisibleLoadingButtonErrors()
    if (baselineErrorCount === 0) {
      if (errorCount > 0) {
        if (submitButton && !submitButton.closest(".uiLoadingButton-error"))
          continue
        return "failure"
      }
    } else if (errorCount === 0) {
      return "success"
    }
  }

  if (findSubmitButton && findSubmitButton() === null) return "success"
  const finalCount = countVisibleLoadingButtonErrors()
  return finalCount === 0 ? "success" : "failure"
}
