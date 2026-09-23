// @ts-nocheck
/**
 * iCIMS navigation click tracking for autofill answer-pair submit payloads.
 */

import * as answerPairTracking from "../autofill-answer-pair-tracking.ts"
import * as resolveTracking from "./resolve-tracking.ts"
import * as snapshotAlignment from "./snapshot-alignment.ts"

function buildTrackingPayload(controller, submitSnapshot) {
  let falcon = answerPairTracking.buildFalconAutofillAnswerPairData(
    controller.answer(),
  )
  return snapshotAlignment.alignIcimsEducationAnswerPairTrackingData({
    formUrl: controller.formUrl(),
    autofillSnapshot: controller.autofillSnapshot,
    submitSnapshot,
    additionalAutofillData: controller.additionalAutofillData,
    additionalSubmitData: controller.getAdditionalSubmitData(),
    extraData: {
      ...(falcon ? { falcon } : {}),
      ...resolveTracking.buildIcimsClientSearchTrackingData(
        controller.educationOutcomes(),
      ),
    },
    source: controller.source(),
  })
}

export class IcimsNavigationTrackingController {
  constructor() {
    this.navigationTrackingAbortController = null
  }

  startRun() {
    this.navigationTrackingAbortController?.abort()
    this.navigationTrackingAbortController = null
  }

  bind(controller) {
    this.startRun()
    let abortController = new AbortController()
    this.navigationTrackingAbortController = abortController

    let onClick = async (event) => {
      let button = controller.resolveButton(event.target)
      if (!button || !controller.isTrackedButton(button)) return

      try {
        let submitSnapshot = await controller.getSubmitSnapshot()
        if (abortController.signal.aborted) return

        let payload = buildTrackingPayload(controller, submitSnapshot)
        controller.send(payload)
        await controller.afterSend({
          autofillSnapshot: controller.autofillSnapshot,
          submitSnapshot,
        })
      } catch {
        // Ignore tracking failures so navigation is not blocked.
      }
    }

    controller.root.addEventListener("click", onClick, {
      capture: true,
      signal: abortController.signal,
    })
  }
}
