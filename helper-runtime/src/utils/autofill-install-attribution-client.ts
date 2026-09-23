// @ts-nocheck
/**
 * Client messaging for autofill install / first-use attribution.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

import * as messaging from "@plasmohq/messaging"
import * as autofillCompletion from "./autofill-completion.ts"

async function acceptAutofillInstallAttribution(record) {
  let response = await messaging.sendToBackground({
    name: "acceptAutofillInstallAttribution",
    body: {
      record,
    },
  })
  return response?.accepted === true
}

async function flushAutofillInstallAttribution() {
  let response = await messaging.sendToBackground({
    name: "flushAutofillInstallAttribution",
  })
  return response?.committed === true
}

async function reportAutofillFirstUseAttribution() {
  await messaging.sendToBackground({
    name: "reportAutofillFirstUseAttribution",
  })
}

async function reportAutofillFirstUseIfSuccessful(
  completion,
  report = reportAutofillFirstUseAttribution,
) {
  return (
    !!autofillCompletion.isSuccessfulAutofillCompletion(completion) &&
    (await report(), true)
  )
}

async function sendAutofillAnswerPairWithAttribution(payload) {
  await messaging.sendToBackground({
    name: "postAutofillAnswerPairAttributed",
    body: {
      payload,
    },
  })
}

export {
  acceptAutofillInstallAttribution,
  flushAutofillInstallAttribution,
  reportAutofillFirstUseAttribution,
  reportAutofillFirstUseIfSuccessful,
  sendAutofillAnswerPairWithAttribution,
}
