// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/hooks/useStartAutofill.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { useCallback, useEffect } from "react"
import { agentDomains } from "../api/env-resolver.js"
import { getAutofillInstance } from "../contents.js"
import { CancelledError } from "../contents/methods/cancellation.js"
import { beginFalconResponseAnswerRequest } from "../contents/sites/falcon-answer-tracking.ts"
import {
  APPLICATION_STATUS,
  MESSAGE_EVENTS,
} from "../core/enums.js"
import {
  checkIframeCoverLetter,
  shouldStartIframeAutofill,
  startIframeAutoFill,
} from "../core/utils.js"
import {
  CUSTOM_ERROR_CODES,
  HTTP_STATUS_CODES,
  isAutofillTerminalHttpStatus,
} from "../enums/http.js"
import { useAutofillResultStore } from "../store/autofillResult.ts"
import { useProfileStore } from "../store/profile.ts"
import { useResumeStore } from "../store/resume.ts"
import { isSuccessfulAutofillCompletion } from "../utils/autofill-completion.ts"
import { reportAutofillFirstUseAttribution } from "../utils/autofill-install-attribution-client.ts"
import { trackEvent } from "../utils/trace.ts"

const EXTENSION_UPDATED_MESSAGE =
  "Jobright extension has been updated. Please refresh this page to reload the extension."

function logAutofillDebug(reason, extra = {}) {
  console.debug(`[AutofillDebug] ${JSON.stringify({ reason, ...extra })}`)
}

export default function useStartAutofill(options = {}) {
  useProfileStore((state) => state.userProfile)
  const userStage = useProfileStore((state) => state.userStage)
  const setShowOutofCredit = useProfileStore((state) => state.setShowOutofCredit)
  const setShowResumeMissingKeyPopup = useProfileStore(
    (state) => state.setShowResumeMissingKeyPopup,
  )
  const setShowErrorPopup = useProfileStore((state) => state.setShowErrorPopup)
  const setDoubleConfirmPopupVisible = useProfileStore(
    (state) => state.setDoubleConfirmPopupVisible,
  )
  const setIsFilling = useAutofillResultStore((state) => state.setIsFilling)
  const setFillingMode = useAutofillResultStore((state) => state.setFillingMode)
  const setProgressTitle = useAutofillResultStore((state) => state.setProgressTitle)
  const ensureResumeReadyForAutofill = useResumeStore(
    (state) => state.ensureResumeReadyForAutofill,
  )
  const setFromAgent = useResumeStore((state) => state.setFromAgent)
  const setAutoFillResult = useAutofillResultStore((state) => state.setAutoFillResult)
  const applyAutoFillProgressMessage = useAutofillResultStore(
    (state) => state.applyAutoFillProgressMessage,
  )
  const refreshCreditsLeft = useProfileStore((state) => state.refreshCreditsLeft)

  const notifyExtensionContextInvalidated = useCallback(() => {
    const pageUrl = new URL(window.location.href)
    if (
      agentDomains.includes(pageUrl.hostname) &&
      pageUrl.pathname.includes("/agent")
    ) {
      document.dispatchEvent(
        new CustomEvent("FromExtension", {
          detail: {
            status: APPLICATION_STATUS.FAILED,
            missingFields: [],
            errorCode: CUSTOM_ERROR_CODES.EXTENSION_CONTEXT_INVALIDATED,
            message: EXTENSION_UPDATED_MESSAGE,
            shouldRefreshPage: true,
          },
        }),
      )
    }
  }, [])

  const notifyNoFillableElements = useCallback(() => {
    if (agentDomains.includes(window.location.hostname)) {
      document.dispatchEvent(
        new CustomEvent("FromExtension", {
          detail: {
            status: APPLICATION_STATUS.FAILED,
            missingFields: [],
            errorCode: CUSTOM_ERROR_CODES.NO_ELEMENTS,
          },
        }),
      )
    }
  }, [])

  const runInstanceFill = useCallback(async () => {
    try {
      const autofillInstance = getAutofillInstance()
      if (!autofillInstance) {
        setIsFilling(true)
        setDoubleConfirmPopupVisible(false)
        return false
      }
      {
        setIsFilling(true)
        setDoubleConfirmPopupVisible(false)
        logAutofillDebug("instance-fill-start", {
          hostname: window.location.hostname,
        })
        const fillResult = await autofillInstance.fillForm()
        logAutofillDebug("instance-fill-finished", {
          hostname: window.location.hostname,
          resultType: fillResult === null ? "null" : typeof fillResult,
        })
        const wasSuccessful = isSuccessfulAutofillCompletion(fillResult)
        if (fillResult == HTTP_STATUS_CODES.PAYMENT_REQUIRED) {
          setShowOutofCredit(true)
          trackEvent("autofill_credits_limit_triggered")
        } else if (fillResult == CUSTOM_ERROR_CODES.EXTENSION_CONTEXT_INVALIDATED) {
          setShowErrorPopup(true, "extension_updated")
          notifyExtensionContextInvalidated()
        } else if (fillResult == HTTP_STATUS_CODES.CLIENT_REQUEST_TIMEOUT) {
          trackEvent("autofill_request_timeout_on_60s_limit", {
            url: window.top.location?.href,
          })
          setShowErrorPopup(true)
        } else if (fillResult == HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR) {
          setShowErrorPopup(true)
        } else if (fillResult == CUSTOM_ERROR_CODES.NO_ELEMENTS) {
          setShowErrorPopup(true, "no_fillable_form")
          notifyNoFillableElements()
        } else if (!isAutofillTerminalHttpStatus(fillResult)) {
          setAutoFillResult(fillResult)
        }
        refreshCreditsLeft()
        setIsFilling(false)
        return wasSuccessful
      }
    } catch (error) {
      if (error instanceof CancelledError) {
        refreshCreditsLeft()
        setIsFilling(false)
        return false
      }
      setIsFilling(false)
      console.error(error)
      return false
    }
  }, [notifyExtensionContextInvalidated, notifyNoFillableElements, setIsFilling])

  const startAutofill = useCallback(
    async (fromAgent = false) => {
      beginFalconResponseAnswerRequest()
      setFillingMode("standard_autofill")
      setProgressTitle(null)
      console.log("[ResumeUploadDebug] startAutofill:ensure-resume-ready", {
        fromAgent,
        userLoggedIn: !!userStage?.logined,
        jobId: options.currentTabJob?.jobResult?.jobId,
      })
      await ensureResumeReadyForAutofill({
        userState: userStage,
        currentTabJob: options.currentTabJob,
      })

      const autofillInstance = getAutofillInstance()
      const canStartIframeAutofill = shouldStartIframeAutofill("eightfold.ai")
      logAutofillDebug("iframe-autofill-gate", {
        hostname: window.location.hostname,
        pathname: window.location.pathname,
        hasTopLevelInstance: !!autofillInstance,
        canStartIframeAutofill,
      })

      if (autofillInstance) {
        if (canStartIframeAutofill) {
          startIframeAutoFill(fromAgent).catch((error) => {
            console.error("Failed to start iframe autofill:", error)
          })
        }
        const fillSucceeded = await runInstanceFill()
        if (fillSucceeded) {
          reportAutofillFirstUseAttribution().catch(() => {
            console.warn("[AutofillInstallAttribution] first use upload failed", {
              reason: "event_upload_failed",
            })
          })
        }
        return
      }

      setIsFilling(true)
      setDoubleConfirmPopupVisible(false)
      const iframeStarted =
        !!canStartIframeAutofill && (await startIframeAutoFill(fromAgent))
      if (!iframeStarted) {
        setIsFilling(false)
      }
    },
    [
      setFillingMode,
      setProgressTitle,
      ensureResumeReadyForAutofill,
      userStage,
      options.currentTabJob,
      runInstanceFill,
      setIsFilling,
      setDoubleConfirmPopupVisible,
    ],
  )

  useEffect(() => {
    const handleCheckAgentCoverLetter = (_event) => {
      if (agentDomains.includes(new URL(window.location.href).hostname)) {
        checkIframeCoverLetter()
      }
    }
    document.addEventListener("CheckAgentCoverLetter", handleCheckAgentCoverLetter)
    return () => {
      document.removeEventListener(
        "CheckAgentCoverLetter",
        handleCheckAgentCoverLetter,
      )
    }
  }, [])

  useEffect(() => {
    const pendingTimeouts = new Set()
    const handleStartAgentFill = (_event) => {
      if (agentDomains.includes(new URL(window.location.href).hostname)) {
        const timeoutId = setTimeout(() => {
          pendingTimeouts.delete(timeoutId)
          setFromAgent(true)
          startAutofill(true)
        }, 1e3)
        pendingTimeouts.add(timeoutId)
      }
    }
    document.addEventListener("StartAgentFill", handleStartAgentFill)
    return () => {
      document.removeEventListener("StartAgentFill", handleStartAgentFill)
      pendingTimeouts.forEach((timeoutId) => clearTimeout(timeoutId))
      pendingTimeouts.clear()
    }
  }, [setFromAgent, startAutofill])

  useEffect(() => {
    const dispatchAgentAutofillResult = (resultPayload, statusOverride) => {
      if (!agentDomains.includes(window.location.hostname)) return
      const { filledFields = [], fieldRequiredStatus = [] } = resultPayload ?? {}
      const filledFieldSet = new Set(filledFields)
      const missingFields = fieldRequiredStatus
        ?.filter(
          (field) => field.required && !filledFieldSet.has(field.label),
        )
        .map((field) => field.label)
      const filledRequiredFields = fieldRequiredStatus
        ?.filter((field) => field.required && filledFieldSet.has(field.label))
        .map((field) => field.label)
      document.dispatchEvent(
        new CustomEvent("FromExtension", {
          detail: {
            status:
              statusOverride === 0
                ? statusOverride
                : missingFields?.length > 0
                  ? APPLICATION_STATUS.FAILED
                  : APPLICATION_STATUS.SUCCESS,
            fieldRequiredStatus,
            filledFields: filledRequiredFields,
            missingFields,
          },
        }),
      )
    }

    const handleWindowMessage = (event) => {
      if (event.data.type === MESSAGE_EVENTS.autoFillResultFromIframe) {
        setAutoFillResult(event.data.data)
        setIsFilling(false)
        dispatchAgentAutofillResult(event.data.data)
      }
      if (event.data.type === MESSAGE_EVENTS.complateAgent) {
        document.dispatchEvent(
          new CustomEvent("FromExtension", {
            detail: {
              status: APPLICATION_STATUS.SUCCESS,
              missingFields: [],
            },
          }),
        )
      }
      if (event.data.type === MESSAGE_EVENTS.updateResultFromIframe) {
        applyAutoFillProgressMessage(event.data.data)
        const currentResult = useAutofillResultStore.getState().autoFillResult
        dispatchAgentAutofillResult(currentResult, APPLICATION_STATUS.RUNNING)
      }
      if (event.data.type === MESSAGE_EVENTS.agentSubmitClicked) {
        document.dispatchEvent(
          new CustomEvent("FromExtension", {
            detail: {
              action: MESSAGE_EVENTS.agentSubmitClicked,
            },
          }),
        )
      }
      if (event.data.type === MESSAGE_EVENTS.agentCheckCoverLetter) {
        document.dispatchEvent(
          new CustomEvent("FromExtension", {
            detail: {
              action: MESSAGE_EVENTS.agentCheckCoverLetter,
              status: event.data.status,
            },
          }),
        )
      }
      if (event.data.type === MESSAGE_EVENTS.sendHttpStatusIframe) {
        if (event.data.httpStatus === HTTP_STATUS_CODES.PAYMENT_REQUIRED) {
          setShowOutofCredit(true)
          setIsFilling(false)
          refreshCreditsLeft()
          trackEvent("autofill_credits_limit_triggered")
        } else if (
          event.data.httpStatus === CUSTOM_ERROR_CODES.EXTENSION_CONTEXT_INVALIDATED
        ) {
          setShowErrorPopup(true, "extension_updated")
          setIsFilling(false)
          notifyExtensionContextInvalidated()
        } else if (
          event.data.httpStatus === HTTP_STATUS_CODES.CLIENT_REQUEST_TIMEOUT
        ) {
          trackEvent("autofill_request_timeout_on_60s_limit", {
            url: window.top.location?.href,
          })
          setShowErrorPopup(true)
          setIsFilling(false)
        } else if (
          event.data.httpStatus === HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
        ) {
          setShowErrorPopup(true)
          setIsFilling(false)
        } else if (event.data.httpStatus === CUSTOM_ERROR_CODES.NO_ELEMENTS) {
          setShowErrorPopup(true, "no_fillable_form")
          setIsFilling(false)
          notifyNoFillableElements()
        } else if (event.data.httpStatus === CUSTOM_ERROR_CODES.RESUME_MISSING_KEY) {
          setShowResumeMissingKeyPopup(true)
          setIsFilling(false)
        } else if (isAutofillTerminalHttpStatus(event.data.httpStatus)) {
          setIsFilling(false)
          document.dispatchEvent(
            new CustomEvent("FromExtension", {
              detail: {
                status: APPLICATION_STATUS.FAILED,
                missingFields: [],
              },
            }),
          )
        }
      }
      if (event.data.type === MESSAGE_EVENTS.agentStartFillingFields) {
        document.dispatchEvent(
          new CustomEvent("FromExtension", {
            detail: {
              status: APPLICATION_STATUS.RUNNING,
            },
          }),
        )
      }
      if (event.data.type === MESSAGE_EVENTS.autoFillCompleteFromIframe) {
        refreshCreditsLeft()
        setIsFilling(false)
      }
      if (event.data.type === MESSAGE_EVENTS.autoFillReloadIframe) {
        document.dispatchEvent(
          new CustomEvent("FromExtension", {
            detail: {
              action: MESSAGE_EVENTS.autoFillReloadIframe,
              src: event.data.src,
            },
          }),
        )
      }
    }

    window.addEventListener("message", handleWindowMessage)
    return () => {
      window.removeEventListener("message", handleWindowMessage)
    }
  }, [
    notifyExtensionContextInvalidated,
    notifyNoFillableElements,
    applyAutoFillProgressMessage,
    refreshCreditsLeft,
    setAutoFillResult,
    setIsFilling,
    setShowErrorPopup,
    setShowOutofCredit,
    setShowResumeMissingKeyPopup,
  ])

  return {
    startAutofill,
  }
}
