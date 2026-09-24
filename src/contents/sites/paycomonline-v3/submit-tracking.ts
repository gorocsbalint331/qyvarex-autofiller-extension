// @ts-nocheck
/**
 * Paycom Online v3 — autofill/submit answer-pair tracking helpers.
 */

import * as autofillAnswerPairTracking from "../autofill-answer-pair-tracking.ts"

export function buildPaycomSubmitExtraTrackingData(answer, extra = {}) {
  const falcon =
    autofillAnswerPairTracking.buildFalconAutofillAnswerPairData(answer)
  return { ...(falcon ? { falcon } : {}), ...extra }
}

export function sendPaycomAutofillAnswerPairOnAttempt(
  payload,
  send = autofillAnswerPairTracking.sendAutofillAnswerPairEvent,
) {
  send(payload)
  return true
}
