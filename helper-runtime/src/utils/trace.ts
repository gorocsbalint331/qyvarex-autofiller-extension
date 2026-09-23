// @ts-nocheck
/**
 * Background event tracking helper (postEventSubmit).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

import * as lodash from "lodash-es"
import * as messaging from "@plasmohq/messaging"
import * as autofillAnswerPair from "./autofill-answer-pair.ts"

function isExtensionRuntimeUnavailableError(error) {
  return (
    error instanceof Error &&
    /Extension runtime is not available/i.test(error.message)
  )
}

function logTrackEventError(error) {
  isExtensionRuntimeUnavailableError(error) ||
    console.error("trackEvent error", error)
}

let trackEvent = (eventType, detail) => {
  let parsedDetail
  let eventDetail
  try {
    let serialized = JSON.stringify(detail || {})
    parsedDetail = JSON.parse(serialized)
    if ("autofill_answer_pair" === eventType) {
      parsedDetail = autofillAnswerPair.sanitizeAutofillAnswerPairPayload(
        parsedDetail || {},
      )
    }
  } catch (error) {
    logTrackEventError(error)
  }
  try {
    eventDetail = lodash.isEmpty(parsedDetail) ? {} : parsedDetail
    eventDetail = {
      platform: "pc",
      ...eventDetail,
    }
    messaging
      .sendToBackground({
        name: "postEventSubmit",
        body: {
          params: {
            channel: eventDetail?.scene ? eventDetail?.scene : "default",
            eventType,
            eventDetail,
          },
        },
      })
      .catch(logTrackEventError)
  } catch (error) {
    logTrackEventError(error)
  }
}

export { trackEvent }
