// @ts-nocheck
/**
 * Job profile step: job card, autofill CTA, fill progress, external-job flow.
 */

import { useCallback, useEffect, useRef, useState } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { Flex, Typography } from "antd"
import clsx from "clsx"
import { isNumber } from "lodash-es"
import { sendToBackground } from "@plasmohq/messaging"
import { HOST_DOMAIN } from "../api/env-resolver.ts"
import { MEMBERSHIP_RETARGET_PATH } from "../constants/payment.ts"
import { getTargetName } from "../contents/crawler/target.ts"
import * as accountFlowState from "../contents/pre-autofill-flow/account-flow-state.ts"
import * as accountTracking from "../contents/pre-autofill-flow/tracking.ts"
import { getMyWorkdayStepState } from "../core/pagenation.ts"
import { usePaginationObserver } from "../hooks/usePaginationObserver.ts"
import { usePreAutofillFlowRunner } from "../hooks/usePreAutofillFlowRunner.ts"
import useRegisterAgentCancel from "../hooks/useRegisterAgentCancel.ts"
import useRegisterAgentSkip from "../hooks/useRegisterAgentSkip.ts"
import useStartAutofill from "../hooks/useStartAutofill.ts"
import useSubmitApplication from "../hooks/useSubmitApplication.ts"
import useUpdateAgentResume from "../hooks/useUpdateAgentResume.ts"
import useUpdateCoverLetter from "../hooks/useUpdateCoverLetter.ts"
import { useAutofillResultStore } from "../store/autofillResult.ts"
import { useExternalJobStore } from "../store/externalJob.ts"
import { useFeedbackStore } from "../store/feedback.ts"
import { useProfileStore } from "../store/profile.ts"
import { useResumeStore } from "../store/resume.ts"
import { useUrlStore } from "../store/url.ts"
import Image from "../ui/Image.ts"
import { getCurrentJobId, isLinkedinDomain } from "../utils/checkLinkedin.ts"
import { trackEvent } from "../utils/trace.ts"
import * as creditsSvg from "../assets/inline/images/credits.svg.js"
import ExternalJobAnalyzing from "./ExternalJob/ExternalJobAnalyzing.ts"
import ExternalJobEntry from "./ExternalJob/ExternalJobEntry.ts"
import ExternalJobFail from "./ExternalJob/ExternalJobFail.ts"
import ExternalJobForm from "./ExternalJob/ExternalJobForm.ts"
import FillProgress from "./FillProgress.ts"
import JobCard from "./JobCard.ts"
import {
  shouldClearMissingMyWorkdayStepProgress,
} from "./JobProfileStep/myworkday-progress.ts"
import { resolveJobToShow } from "./JobProfileStep/resolve-job-to-show.ts"
import LoadingButton from "./LoadingButton.ts"
import NextPageButton from "./NextPageButton.ts"
import AutofillErrorModal from "./Popups/AutofillErrorModal.ts"
import DoubleConfirmPopup from "./Popups/DoubleConfirmPopup.ts"
import OutofCreditModal from "./Popups/OutofCreditModal.ts"
import ResumeMissingKeyPopup from "./Popups/ResumeMissingKeyPopup.ts"
import ResumeSwitcher from "./ResumeSwitcher.ts"
import UpdateJobInfoLink from "./UpdateJobInfoLink.ts"
import VersionUpdate from "./VersionUpdate.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

function ExternalJobFlow({ setOpenExternalJob }) {
  const [view, setView] = useState("form")
  const jobInfo = useExternalJobStore((state) => state.jobInfo)
  const analyzeStatus = useExternalJobStore((state) => state.analyzeStatus)
  const setAndBroadcastAnalyzeStatus = useExternalJobStore(
    (state) => state.setAndBroadcastAnalyzeStatus,
  )
  const useExternalJobDetailRequest = useExternalJobStore(
    (state) => state.useExternalJobDetailRequest,
  )

  useEffect(() => {
    if (analyzeStatus === "loading") {
      setView("analyzing")
      return
    }
    if (analyzeStatus === "success") {
      if (isLinkedinDomain(window.top.location.href)) {
        sendToBackground({
          name: "saveExternalJobId",
          body: {
            linkedinJobId: getCurrentJobId(),
            externalJobId: jobInfo?.jobResult?.jobId,
          },
        })
      }
      setView("analyze-success")
      setOpenExternalJob(false)
      return
    }
    if (analyzeStatus === "error") {
      setView("analyze-failed")
    }
  }, [analyzeStatus])

  useEffect(
    () => () => {
      setAndBroadcastAnalyzeStatus("idle")
      useExternalJobStore.getState().setPendingOverrideJobId(null)
    },
    [],
  )

  useExternalJobDetailRequest()

  const backToInit = () => {
    setOpenExternalJob(false)
    setAndBroadcastAnalyzeStatus("idle")
    useExternalJobStore.getState().setPendingOverrideJobId(null)
  }

  const backToForm = () => {
    setView("form")
    setAndBroadcastAnalyzeStatus("idle")
  }

  switch (view) {
    case "form":
      return jsx(ExternalJobForm, { jumpToInitPage: backToInit })
    case "analyzing":
      return jsx(ExternalJobAnalyzing, { backToForm })
    case "analyze-success":
      return jsx(Flex, {
        vertical: true,
        className: "not-available-status-container",
        children: jsx(Flex, {
          vertical: true,
          justify: "center",
          align: "center",
          gap: 12,
          className: "not-available-status-body",
          children: jsx(JobCard, {
            data: jobInfo,
            hideActions: true,
            hideApplicantsCount: true,
          }),
        }),
      })
    case "analyze-failed":
      return jsx(ExternalJobFail, {
        backToForm,
        backToInit,
      })
    default:
      return null
  }
}

export default function JobProfileStep({
  currentTabJob,
  showContinue,
  jobContextLoading = false,
  fallbackJobId = null,
}) {
  const userProfile = useProfileStore((state) => state.userProfile)
  const userStage = useProfileStore((state) => state.userStage)
  const externalJobInfo = useExternalJobStore((state) => state.jobInfo)
  const useExternalJobDetailRequest = useExternalJobStore(
    (state) => state.useExternalJobDetailRequest,
  )
  const manualOverrideJobId = useExternalJobStore(
    (state) => state.manualOverrideJobId,
  )
  useExternalJobDetailRequest()

  const isFilling = useAutofillResultStore((state) => state.isFilling)
  const setIsFilling = useAutofillResultStore((state) => state.setIsFilling)
  const fillingMode = useAutofillResultStore((state) => state.fillingMode)
  const setFillingMode = useAutofillResultStore((state) => state.setFillingMode)
  const setProgressTitle = useAutofillResultStore(
    (state) => state.setProgressTitle,
  )
  const setHasClickedAutoFill = useAutofillResultStore(
    (state) => state.setHasClickedAutoFill,
  )
  const hasAutoFillResult = useAutofillResultStore(
    (state) => !!state.autoFillResult,
  )
  const setAutoFillResult = useAutofillResultStore(
    (state) => state.setAutoFillResult,
  )
  const currentTabUrl = useUrlStore((state) => state.currentTabUrl)
  const setShowStarRatingModal = useFeedbackStore(
    (state) => state.setShowStarRatingModal,
  )

  const [fillProgressExpanded, setFillProgressExpanded] = useState(false)
  const wasFillingRef = useRef(false)
  const keepProgressExpandedRef = useRef(false)
  const lastForgotPasswordMessageTypeRef = useRef(null)
  const [scrollableContentEl, setScrollableContentEl] = useState(null)
  const [contentSectionEl, setContentSectionEl] = useState(null)
  const [completionOverlayTop, setCompletionOverlayTop] = useState(0)
  const [fillProgressKey, setFillProgressKey] = useState(0)

  useEffect(() => {
    if (wasFillingRef.current && !isFilling) {
      setFillProgressExpanded(true)
    } else if (isFilling) {
      setFillProgressExpanded(false)
    }
    wasFillingRef.current = isFilling
  }, [isFilling])

  useEffect(() => {
    const onForgotPasswordSubmitMessage = () => {
      const payload =
        useAutofillResultStore.getState().autoFillResult
          ?.userAutoFillResponse?.[
          accountFlowState.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY
        ]
      const message =
        payload && typeof payload === "object" ? payload : null
      const messageType =
        typeof message?.messageType === "string" ? message.messageType : null
      if (
        messageType &&
        lastForgotPasswordMessageTypeRef.current !== messageType
      ) {
        accountTracking.sendWorkdayAccountSubmitWarningExposure({
          targetName: getTargetName(),
          url: window.location.href,
          pending: {
            flowId: "workday_forgot_password_flow",
            intent: "forgot_password",
            sourceUrl: window.location.href,
            sourcePageKind: "forgot_password",
            submitStep:
              accountFlowState.PRE_AUTOFILL_ACCOUNT_STEP_LABELS
                .clickResetPassword,
          },
          submitError: {
            message: typeof message.message === "string" ? message.message : "",
            rawMessage:
              typeof message.rawMessage === "string" ? message.rawMessage : "",
            messageType,
          },
        })
        lastForgotPasswordMessageTypeRef.current = messageType
      }
      keepProgressExpandedRef.current = true
      setFillProgressExpanded(true)
    }

    document.addEventListener(
      accountFlowState.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_EVENT,
      onForgotPasswordSubmitMessage,
    )
    return () => {
      document.removeEventListener(
        accountFlowState.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_EVENT,
        onForgotPasswordSubmitMessage,
      )
    }
  }, [])

  useEffect(() => {
    if (!scrollableContentEl || !contentSectionEl) return
    const updateOverlayTop = () => {
      setCompletionOverlayTop(contentSectionEl.offsetTop)
    }
    updateOverlayTop()
    const observer = new ResizeObserver(updateOverlayTop)
    Array.from(scrollableContentEl.children).forEach((child) => {
      if (child instanceof HTMLElement) observer.observe(child)
    })
    return () => observer.disconnect()
  }, [scrollableContentEl, contentSectionEl])

  const jobToShow = resolveJobToShow({
    currentTabJob,
    externalJobInfo,
    manualOverrideJobId,
  })
  const { startAutofill } = useStartAutofill({ currentTabJob: jobToShow })

  const resetAccountFlowUi = useCallback(() => {
    keepProgressExpandedRef.current = false
    lastForgotPasswordMessageTypeRef.current = null
    setFillProgressKey((key) => key + 1)
  }, [])

  const targetName = getTargetName()
  const pageUrl = currentTabUrl || window.location.href
  const { match, ctaText, startMatchedFlow } = usePreAutofillFlowRunner({
    targetName,
    url: pageUrl,
    isFilling,
    startStandardAutofill: startAutofill,
    onFlowStart: resetAccountFlowUi,
    onAccountTransitionStart: () => {
      if (keepProgressExpandedRef.current) return
      const submitError =
        useAutofillResultStore.getState().autoFillResult
          ?.userAutoFillResponse?.[
          accountFlowState.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY
        ]
      if (!submitError) setFillProgressExpanded(false)
    },
    onAccountTransitionError: () => {
      keepProgressExpandedRef.current = true
      setFillProgressExpanded(true)
    },
  })

  const [openExternalJob, setOpenExternalJob] = useState(false)
  let showApplicantsCount = true
  if (jobToShow?.jobResult?.jobId.startsWith("external")) {
    showApplicantsCount = false
  }

  const doubleConfirmPopupVisible = useProfileStore(
    (state) => state.doubleConfirmPopupVisible,
  )
  const setDoubleConfirmPopupVisible = useProfileStore(
    (state) => state.setDoubleConfirmPopupVisible,
  )
  const autofillDoNotAskAgain = useProfileStore(
    (state) => state.autofillDoNotAskAgain,
  )
  const syncAutofillDoNotAskAgainWithStorage = useProfileStore(
    (state) => state.syncAutofillDoNotAskAgainWithStorage,
  )
  const updateFillingResume = useResumeStore(
    (state) => state.updateFillingResume,
  )

  useRegisterAgentCancel()
  useRegisterAgentSkip()
  useUpdateAgentResume()
  useUpdateCoverLetter()

  const creditsLeft = useProfileStore((state) => state.creditsLeft)
  useSubmitApplication()

  const confirmAndStartAutofill = () => {
    setShowStarRatingModal(false)
    setFillingMode("standard_autofill")
    setProgressTitle(null)
    setAutoFillResult(null)
    startAutofill()
  }

  usePaginationObserver(startAutofill)

  useEffect(() => {
    syncAutofillDoNotAskAgainWithStorage()
  }, [autofillDoNotAskAgain])

  useEffect(() => {
    if (userProfile && userProfile?.step === 5) {
      updateFillingResume()
    }
  }, [userProfile])

  const creditSwitchStatus = useProfileStore((state) => state.creditSwitchStatus)
  const paymentDataLoaded = useProfileStore((state) => state.paymentDataLoaded)
  const initPaymentData = useProfileStore((state) => state.initPaymentData)
  const [trackedUrl, setTrackedUrl] = useState(null)
  const lastAccountCtaStatusRef = useRef(null)

  useEffect(() => {
    if (!paymentDataLoaded) initPaymentData()
  }, [paymentDataLoaded])

  useEffect(() => {
    if (!match) return
    const decision = accountTracking.shouldTrackWorkdayAccountCtaExposure({
      targetName,
      match,
      lastStatus: lastAccountCtaStatusRef.current,
      pending:
        accountFlowState.preAutofillAccountTransitionSession.peek()?.payload,
    })
    if (!decision.status) return
    if (!decision.shouldTrack) {
      if (
        accountFlowState.preAutofillAccountTransitionSession.peek()?.payload
      ) {
        lastAccountCtaStatusRef.current = decision.status
      }
      return
    }
    const tracked = accountTracking.sendWorkdayAccountCreationCtaExposure({
      targetName,
      url: pageUrl,
      match,
    })
    if (tracked) lastAccountCtaStatusRef.current = decision.status
  }, [pageUrl, match, targetName])

  useEffect(() => {
    if (targetName !== "apple" || !currentTabUrl) return
    if (trackedUrl === null) {
      setTrackedUrl(currentTabUrl)
      return
    }
    if (currentTabUrl !== trackedUrl) {
      setIsFilling(false)
      setAutoFillResult(null)
      setDoubleConfirmPopupVisible(false)
      setTrackedUrl(currentTabUrl)
    }
  }, [
    targetName,
    currentTabUrl,
    trackedUrl,
    setIsFilling,
    setAutoFillResult,
    setDoubleConfirmPopupVisible,
  ])

  useEffect(() => {
    if (targetName !== "myworkday") return

    const syncMyWorkdayProgress = () => {
      const stepState = getMyWorkdayStepState()
      const url = currentTabUrl || window.location.href
      if (
        !stepState &&
        shouldClearMissingMyWorkdayStepProgress({
          fillingMode,
          hasAutoFillResult,
          isFilling,
          url,
        })
      ) {
        setIsFilling(false)
        setAutoFillResult(null)
        setProgressTitle(null)
        setFillProgressExpanded(false)
        return
      }
      if (!stepState) return
      const isReview =
        stepState.title === "review" || stepState.title.includes("review")
      if (isReview) {
        setIsFilling(false)
        setAutoFillResult(null)
        setProgressTitle(null)
        setFillProgressExpanded(false)
      }
    }

    syncMyWorkdayProgress()
    const observer = new MutationObserver(syncMyWorkdayProgress)
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    })
    const intervalId = window.setInterval(syncMyWorkdayProgress, 800)
    return () => {
      observer.disconnect()
      window.clearInterval(intervalId)
    }
  }, [
    targetName,
    currentTabUrl,
    isFilling,
    fillingMode,
    hasAutoFillResult,
    setIsFilling,
    setAutoFillResult,
    setProgressTitle,
  ])

  const showCreditRow =
    !creditsLeft?.subscribed && paymentDataLoaded && !!creditSwitchStatus

  useEffect(() => {
    if (showCreditRow && isNumber(creditsLeft?.credit?.autofill)) {
      trackEvent("autofill_extension_credits_show", {})
    }
  }, [showCreditRow, creditsLeft?.credit?.autofill])

  const handleAutofillClick = async () => {
    if (isFilling) return
    const status = accountTracking.getWorkdayAccountCtaStatus({
      targetName,
      match,
    })
    if (status) lastAccountCtaStatusRef.current = status
    setHasClickedAutoFill(true)
    setTrackedUrl(pageUrl)
    if (hasAutoFillResult) setAutoFillResult(null)
    accountTracking.sendWorkdayAccountCreationCtaClick({
      targetName,
      url: pageUrl,
      match,
    })
    const startedMatchedFlow = await startMatchedFlow()
    if (!startedMatchedFlow) {
      resetAccountFlowUi()
      setFillingMode("standard_autofill")
      setProgressTitle(null)
      setIsFilling(true)
      startAutofill()
    }
  }

  const handleUpdateJobInfo = () => {
    if (isFilling) return
    const jobId = currentTabJob?.jobResult?.jobId ?? null
    trackEvent("autofill_update_job_info_click", {
      uid: userStage?.userId,
      website_url: window.location.href,
    })
    const externalJobStore = useExternalJobStore.getState()
    externalJobStore.resetFormValues()
    externalJobStore.setJobId(null)
    externalJobStore.setAndBroadcastAnalyzeStatus("idle")
    externalJobStore.setPendingOverrideJobId(jobId)
    setOpenExternalJob(true)
  }

  const showUpdateJobInfoLink = !!jobToShow && !openExternalJob

  if (!userProfile) return null

  if (openExternalJob) {
    return jsx(ExternalJobFlow, { setOpenExternalJob })
  }

  return jsxs(Fragment, {
    children: [
      jsxs(Flex, {
        className: "job-profile-container",
        vertical: true,
        gap: 0,
        children: [
          jsxs(Flex, {
            ref: setScrollableContentEl,
            vertical: true,
            gap: 0,
            className: clsx("job-profile-scrollable-content", {
              "job-profile-scrollable-content--is-filling":
                isFilling || fillProgressExpanded,
            }),
            style:
              completionOverlayTop > 0
                ? { "--completion-overlay-top": `${completionOverlayTop}px` }
                : undefined,
            children: [
              jsx("div", {
                className: "job-profile-job-section",
                children: jobToShow
                  ? jsx(JobCard, {
                      data: jobToShow,
                      hideActions: true,
                      hideApplicantsCount: !showApplicantsCount,
                      style: { marginBottom: "0" },
                    })
                  : jsx(ExternalJobEntry, {
                      entryFunction: () => setOpenExternalJob(true),
                    }),
              }),
              jsxs(Flex, {
                ref: setContentSectionEl,
                vertical: true,
                gap: 12,
                className: "job-profile-content-section",
                children: [
                  jsxs(Flex, {
                    vertical: true,
                    className: showCreditRow
                      ? "autofill-button-group autofill-button-group--with-credit"
                      : "autofill-button-group",
                    children: [
                      jsx(LoadingButton, {
                        type: "default",
                        className: "auto-fill-button",
                        loading: isFilling,
                        onClick: handleAutofillClick,
                        children: isFilling ? "Autofilling" : ctaText,
                      }),
                      showCreditRow &&
                        isNumber(creditsLeft?.credit?.autofill) &&
                        jsxs(Flex, {
                          justify: "center",
                          align: "center",
                          gap: 8,
                          className: "autofill-credit-row",
                          children: [
                            jsxs(Flex, {
                              gap: 2,
                              align: "center",
                              children: [
                                jsx(Image, {
                                  src: assetUrl(creditsSvg),
                                  alt: "credits",
                                  width: 12,
                                  height: 12,
                                  preview: false,
                                }),
                                jsxs(Typography.Text, {
                                  className: "autofill-credit-text",
                                  children: [
                                    creditsLeft?.credit?.autofill,
                                    " credits left",
                                  ],
                                }),
                              ],
                            }),
                            jsx(Typography.Text, {
                              className: "autofill-credit-text-right",
                              onClick: () => {
                                trackEvent("autofill_extension_credits_click")
                                window.open(
                                  HOST_DOMAIN + MEMBERSHIP_RETARGET_PATH,
                                  "_blank",
                                )
                              },
                              children: "Get Unlimited",
                            }),
                          ],
                        }),
                    ],
                  }),
                  jsx(ResumeSwitcher, {
                    currentTabJob,
                    jobContextLoading,
                    fallbackJobId,
                    onRequestAddJob: () => setOpenExternalJob(true),
                  }),
                  showUpdateJobInfoLink &&
                    jsx(UpdateJobInfoLink, {
                      disabled: isFilling,
                      onClick: handleUpdateJobInfo,
                    }),
                ],
              }),
              jsx(
                FillProgress,
                {
                  connected: showContinue,
                  expanded: fillProgressExpanded,
                  onToggleExpanded: () =>
                    setFillProgressExpanded((expanded) => !expanded),
                },
                fillProgressKey,
              ),
            ],
          }),
          showContinue &&
            jsx("div", {
              className: "continue-button-shell",
              children: jsx("div", {
                className: "continue-button-dock",
                children: jsx(NextPageButton, { isFilling }),
              }),
            }),
          jsx(VersionUpdate, {
            currentJobId: currentTabJob?.jobResult?.jobId ?? fallbackJobId,
          }),
        ],
      }),
      jsx(DoubleConfirmPopup, {
        open: doubleConfirmPopupVisible,
        onCancel: () => setDoubleConfirmPopupVisible(false),
        onConfirm: () => {
          confirmAndStartAutofill()
        },
      }),
      jsx(ResumeMissingKeyPopup, {}),
      jsx(OutofCreditModal, {}),
      jsx(AutofillErrorModal, {
        onRetry: () => {
          setFillingMode("standard_autofill")
          setProgressTitle(null)
          startAutofill()
        },
      }),
    ],
  })
}
