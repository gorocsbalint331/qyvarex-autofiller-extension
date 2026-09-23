// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/core/iframeEventHandle.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import {
  cancelAutofillInstance,
  getAutofillInstance,
} from "../contents.js"
import { CancelledError } from "../contents/methods/cancellation.js"
import { isExtensionContextInvalidatedError } from "../contents/methods/runtime-error.js"
import { sendHttpStatusMessage } from "../contents/methods/track.js"
import { beginFalconResponseAnswerRequest } from "../contents/sites/falcon-answer-tracking.ts"
import { MESSAGE_EVENTS } from "./enums.js"
import { IFRAME_EVENTS } from "../enums.js"
import {
  CUSTOM_ERROR_CODES,
  HTTP_STATUS_CODES,
} from "../enums/http.ts"
import { reportAutofillFirstUseIfSuccessful } from "../utils/autofill-install-attribution-client.ts"
import { focusLabelElement } from "./dom.js"
import {
  checkSupportIframeSrc,
  markIframeLoadedFromMessage,
} from "./utils.js"

let iframeFillExecutionSeq = 0

let handleIframeMessage = async (event) => {
  if (
    event.data.type === IFRAME_EVENTS.IFRAME_LOADED &&
    markIframeLoadedFromMessage(event.source, event.data?.url),
    event.data.type === IFRAME_EVENTS.REQUEST_IFRAME_LOADED &&
      window.top !== window.self &&
      checkSupportIframeSrc(window.location.href)
  ) {
    window.top.postMessage(
      {
        type: IFRAME_EVENTS.IFRAME_LOADED,
        url: window.location.href,
      },
      {
        targetOrigin: "*",
      },
    )
    return
  }
  let autofillInstance = getAutofillInstance()
  if (
    checkSupportIframeSrc(event.data?.url ?? event.data.origin) &&
    autofillInstance
  ) {
    if (
      event.data.type === IFRAME_EVENTS.CHECK_IFRAME_COVER_LETTER &&
      autofillInstance.checkCoverLetter(),
      event.data.type === IFRAME_EVENTS.EXECUTE_IFRAME_FUNCTION
    ) {
      let execution = ++iframeFillExecutionSeq
      let outcome = "completed"
      console.info(
        `[IframeAutofillLifecycle] ${JSON.stringify({ execution, phase: "start" })}`,
      )
      try {
        beginFalconResponseAnswerRequest()
        let fillResult = await autofillInstance.fillForm(event.data.data.fromAgent)
        reportAutofillFirstUseIfSuccessful(fillResult).catch(() => {
          console.warn("[AutofillInstallAttribution] first use upload failed", {
            reason: "event_upload_failed",
          })
        }),
          execution === iframeFillExecutionSeq &&
            window.top.postMessage(
              {
                type: MESSAGE_EVENTS.autoFillCompleteFromIframe,
                data: fillResult,
              },
              {
                targetOrigin: "*",
              },
            )
      } catch (error) {
        let wasCancelled = error instanceof CancelledError
        let wasInvalidated = isExtensionContextInvalidatedError(error)
        outcome = wasCancelled
          ? "cancelled"
          : wasInvalidated
            ? "extension-invalidated"
            : "failed"
        console.info(
          `[IframeAutofillLifecycle] ${JSON.stringify({ execution, phase: "error", outcome })}`,
        ),
          wasCancelled ||
            execution !== iframeFillExecutionSeq ||
            sendHttpStatusMessage(
              wasInvalidated
                ? CUSTOM_ERROR_CODES.EXTENSION_CONTEXT_INVALIDATED
                : HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
            )
      } finally {
        let superseded = execution !== iframeFillExecutionSeq
        console.info(
          `[IframeAutofillLifecycle] ${JSON.stringify({ execution, phase: "end", outcome, superseded })}`,
        ),
          superseded ||
            "completed" === outcome ||
            window.top.postMessage(
              {
                type: MESSAGE_EVENTS.autoFillCompleteFromIframe,
                data: {},
              },
              {
                targetOrigin: "*",
              },
            )
      }
      return
    }
    if (event.data.type === IFRAME_EVENTS.UPDATE_IFRAME_DATA)
      for (let [key, value] of Object.entries(event.data.data))
        autofillInstance[key] = value
    event.data.type === IFRAME_EVENTS.FOCUS_IFRAME_LABEL &&
      focusLabelElement(event.data.data),
      event.data.type === IFRAME_EVENTS.CANCEL_AUTO_FILL &&
        cancelAutofillInstance(autofillInstance),
      event.data.type === IFRAME_EVENTS.SKIP_AUTO_FILL &&
        "function" == typeof autofillInstance.skip &&
        autofillInstance.skip(),
      event.data.type === IFRAME_EVENTS.SUBMIT_APPLICATION &&
        autofillInstance.submitApplication()
  }
}

export function registerIframeEventHandle() {
  window.addEventListener("message", handleIframeMessage)
}

export function redirctAgentIframePages() {
  if (window.top === window.self) return
  let pageUrl = new URL(window.location.href)
  if (pageUrl.searchParams.get("ashby_jid")) {
    let ashbyEmbed = document.getElementById("ashby_embed_iframe")
    ashbyEmbed &&
      ashbyEmbed.src &&
      ashbyEmbed.src.includes("ashbyhq.com") &&
      window.top.postMessage(
        {
          type: MESSAGE_EVENTS.autoFillReloadIframe,
          src: ashbyEmbed.src,
        },
        {
          targetOrigin: "*",
        },
      )
  }
}
