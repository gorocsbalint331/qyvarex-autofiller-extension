// @ts-nocheck
/**
 * Autofill fill-progress panel: scanning state, field checklist, signup setup.
 */

import { useEffect, useMemo, useRef, useState } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { Flex, Progress, Typography } from "antd"
import clsx from "clsx"
import numeral from "numeral"
import * as arrDownSvg from "../assets/inline/images/arr_down.svg.js"
import * as editSvg from "../assets/inline/images/edit.svg.js"
import * as accountFlow from "../contents/pre-autofill-flow/account-flow.js"
import { useAutofillResultStore } from "../store/autofillResult.ts"
import { useProfileStore } from "../store/profile.ts"
import { useResumeStore } from "../store/resume.ts"
import {
  buildNormalizedFieldLabelSet,
  normalizeFieldLabel,
} from "../utils/fieldLabel.ts"
import { trackEvent } from "../utils/trace.ts"
import AutoFillRuleGroup from "./AutoFillRuleGroup.ts"
import CheckedIcon from "./CheckedIcon.ts"
import { AnalyzeStarIcon } from "./ExternalJob/ExternalJobIcon.ts"
import LoadingIcon from "./LoadingIcon.ts"
import UnCheckedIcon from "./UnCheckedIcon.ts"
import {
  SIGNUP_CREATING_ACCOUNT_LABEL,
  getFillProgressCounts,
  getSignupAccountSubmitMessage,
  getSignupCreatingAccountStatus,
  getSignupSetupCredentialField,
  getSignupSetupExposureCredentialFields,
  getSignupSetupStepLabel,
  getSignupStepStatus,
  hasVisibleFillProgressResult,
  isSignupSetupStepMissing,
  shouldShowFillProgressPercent,
  shouldShowFillProgressScanning,
  shouldShowSignupCreatingAccountGroup,
} from "./FillProgress/progress-state.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

function LoadingDots() {
  return jsxs("span", {
    className: "loading-dots",
    "aria-hidden": true,
    children: [jsx("span", {}), jsx("span", {}), jsx("span", {})],
  })
}

function getCurrentFieldNameForCancel(result) {
  if (!result) return ""
  const filledSet = buildNormalizedFieldLabelSet(result.filledFields || [])
  const missingSet = buildNormalizedFieldLabelSet(result.missingFields || [])
  const hasRequired = (result.fieldRequiredStatus || []).some(
    (step) => step?.required,
  )
  for (const step of result.fieldRequiredStatus || []) {
    if (hasRequired && !step?.required) continue
    const label = normalizeFieldLabel(step.label)
    if (!filledSet.has(label) && !missingSet.has(label)) {
      return step.label || ""
    }
  }
  return ""
}

function StepStatusIcon({ status }) {
  if (status === "completed") return jsx(CheckedIcon, {})
  if (status === "current") return jsx(LoadingIcon, {})
  return jsx(UnCheckedIcon, {})
}

function SetupCredentialChip({ label, onClick }) {
  return jsxs("button", {
    type: "button",
    className: "signup-autofill-setup-chip",
    onClick,
    children: [
      jsx("img", {
        src: assetUrl(editSvg),
        alt: "",
        width: 12,
        height: 12,
        className: "signup-autofill-setup-chip-icon",
      }),
      jsx("span", { children: label }),
    ],
  })
}

function SubmitErrorBanner({ message }) {
  return jsxs("div", {
    className: "signup-autofill-submit-error",
    role: "alert",
    children: [
      jsx("span", {
        className: "signup-autofill-submit-error-icon",
        "aria-hidden": true,
        children: "i",
      }),
      jsx("span", {
        className: "signup-autofill-submit-error-text",
        children: message,
      }),
    ],
  })
}

function SignupAutofillProgress({
  autoFillResult,
  isFilling,
  onSetupCredential,
}) {
  const currentField = autoFillResult.currentField ?? null
  const filledSet = buildNormalizedFieldLabelSet(autoFillResult.filledFields)
  const missingSet = buildNormalizedFieldLabelSet(autoFillResult.missingFields)
  const setupMissingSteps = accountFlow.getPreAutofillAccountSetupMissingSteps(
    autoFillResult.userAutoFillResponse,
  )
  const submitMessage = getSignupAccountSubmitMessage(
    autoFillResult.userAutoFillResponse,
  )
  const setupMissingSet = buildNormalizedFieldLabelSet(setupMissingSteps)
  const trackedCredentialFieldsRef = useRef(new Set())
  const filledKey = autoFillResult.filledFields.join("|")
  const missingKey = autoFillResult.missingFields.join("|")
  const setupMissingKey = setupMissingSteps.join("|")

  useEffect(() => {
    accountFlow.debugPreAutofillAccountSetup("ui", "progress-render", {
      currentField,
      filledFields: autoFillResult.filledFields,
      missingFields: autoFillResult.missingFields,
      setupMissingFields: setupMissingSteps,
    })
  }, [currentField, filledKey, missingKey, setupMissingKey])

  const fieldRequiredStatus = autoFillResult.fieldRequiredStatus
  useEffect(() => {
    const exposed = getSignupSetupExposureCredentialFields({
      steps: fieldRequiredStatus,
      setupMissingSet,
      trackedFields: trackedCredentialFieldsRef.current,
    })
    for (const field of exposed) {
      trackedCredentialFieldsRef.current.add(field)
      trackEvent("autofill_workday_setup_password_exposure", {
        website_url: window.location.href,
        uid: useProfileStore.getState().userStage?.userId,
        filed: field,
      })
    }
  }, [fieldRequiredStatus, setupMissingKey])

  const showCreatingAccountGroup =
    shouldShowSignupCreatingAccountGroup(fieldRequiredStatus)
  const createAccountSteps = fieldRequiredStatus.filter(
    (step) => step.metadata?.signup?.progressGroup === "create_account",
  )
  const createAccountLabels = new Set(
    createAccountSteps.map((step) => step.label),
  )
  const topLevelSteps = fieldRequiredStatus.filter(
    (step) => !createAccountLabels.has(step.label),
  )
  const creatingAccountStatus = getSignupCreatingAccountStatus({
    childSteps: createAccountSteps.map((step) => step.label),
    currentField,
    filledFields: autoFillResult.filledFields,
    missingFields: autoFillResult.missingFields,
    isFilling,
  })

  const renderSetupChip = (step) => {
    const credential = getSignupSetupCredentialField(step)
    const label = getSignupSetupStepLabel(step)
    if (
      !credential ||
      !label ||
      !isSignupSetupStepMissing({ step, setupMissingSet })
    ) {
      return null
    }
    return jsx(SetupCredentialChip, {
      label,
      onClick: () => onSetupCredential(credential),
    })
  }

  const renderStepRow = (step) => {
    const isMissing = isSignupSetupStepMissing({ step, setupMissingSet })
    return jsxs(
      "div",
      {
        className: clsx("auto-fill-field-item signup-autofill-step-row", {
          "signup-autofill-step-row--setup-missing": isMissing,
        }),
        children: [
          jsx(StepStatusIcon, {
            status: getSignupStepStatus({
              step: step.label,
              currentField,
              filledSet,
              missingSet,
              isFilling,
            }),
          }),
          jsx("span", {
            className:
              "auto-fill-field-item-text-label signup-autofill-step-label",
            children: step.label,
          }),
          renderSetupChip(step),
        ],
      },
      step.label,
    )
  }

  return jsx(Flex, {
    className: "auto-fill-field-group signup-autofill-progress",
    vertical: true,
    children: jsxs(Flex, {
      gap: 12,
      vertical: true,
      children: [
        jsx(Typography.Title, {
          level: 4,
          className: "auto-fill-field-group-title",
          children: "Required",
        }),
        topLevelSteps.map(renderStepRow),
        showCreatingAccountGroup &&
          jsxs("div", {
            className: "signup-autofill-account-group",
            children: [
              jsxs("div", {
                className: "auto-fill-field-item signup-autofill-step-row",
                children: [
                  jsx(StepStatusIcon, { status: creatingAccountStatus }),
                  jsx("span", {
                    className:
                      "auto-fill-field-item-text-label signup-autofill-step-label",
                    children: SIGNUP_CREATING_ACCOUNT_LABEL,
                  }),
                ],
              }),
              jsx("div", {
                className: "signup-autofill-substeps",
                children: createAccountSteps.map((step) =>
                  jsxs(
                    "div",
                    {
                      className: clsx("signup-autofill-substep-row", {
                        "signup-autofill-substep-row--completed":
                          getSignupStepStatus({
                            step: step.label,
                            currentField,
                            filledSet,
                            missingSet,
                            isFilling,
                          }) === "completed",
                        "signup-autofill-substep-row--setup-missing":
                          isSignupSetupStepMissing({
                            step,
                            setupMissingSet,
                          }),
                      }),
                      children: [
                        jsx("span", {
                          className: "signup-autofill-substep-label",
                          children: step.label,
                        }),
                        renderSetupChip(step),
                      ],
                    },
                    step.label,
                  ),
                ),
              }),
            ],
          }),
        submitMessage && jsx(SubmitErrorBanner, { message: submitMessage }),
      ],
    }),
  })
}

export default function FillProgress({
  connected = false,
  expanded,
  onToggleExpanded,
}) {
  const isFilling = useAutofillResultStore((state) => state.isFilling)
  const fillingMode = useAutofillResultStore((state) => state.fillingMode)
  const progressTitle = useAutofillResultStore((state) => state.progressTitle)
  const autoFillResult = useAutofillResultStore((state) => state.autoFillResult)
  const setOpenAutofillInfo = useResumeStore(
    (state) => state.setOpenAutofillInfo,
  )

  const hasVisibleResult = hasVisibleFillProgressResult(autoFillResult)
  const submitMessage = getSignupAccountSubmitMessage(
    autoFillResult?.userAutoFillResponse,
  )
  const counts = useMemo(
    () => getFillProgressCounts(autoFillResult),
    [autoFillResult],
  )
  const isOpen = isFilling || expanded
  const [isOpenAnimated, setIsOpenAnimated] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setIsOpenAnimated(false)
      return
    }
    const frame = requestAnimationFrame(() => setIsOpenAnimated(true))
    return () => cancelAnimationFrame(frame)
  }, [isOpen])

  if (!isFilling && !hasVisibleResult) return null

  const isScanning = shouldShowFillProgressScanning({
    isFilling,
    hasVisibleResult,
    fillingMode,
  })
  const showPercent = shouldShowFillProgressPercent({
    isScanning,
    isFilling,
    fillingMode,
  })
  const isSignupFlow = fillingMode === "signup_autofill_flow"
  const title = progressTitle ?? "Autofilling"
  const isAccountSetupTitle =
    title === accountFlow.PRE_AUTOFILL_ACCOUNT_SETUP_PROGRESS_TITLE
  const percent =
    counts.totalFields.length === 0
      ? 0
      : (counts.filledFields.length / counts.totalFields.length) * 100

  const handleCancel = () => {
    trackEvent("autofill_cancel_click", {
      current_field_name: getCurrentFieldNameForCancel(autoFillResult),
      completion_percentage: Math.round(percent),
    })
    document.dispatchEvent(new CustomEvent("CancelAutoFill"))
  }

  const canToggleExpanded = !isFilling && hasVisibleResult
  const percentLabel = numeral(
    counts.totalFields.length === 0
      ? 0
      : counts.filledFields.length / counts.totalFields.length,
  ).format("0%")

  return jsx(Flex, {
    vertical: true,
    gap: 8,
    className: clsx("job-profile-completion-section", {
      "job-profile-completion-section-connected": connected,
      "job-profile-completion-section--open": isOpenAnimated,
    }),
    children: jsxs(Flex, {
      className:
        "application-dashboard-progress job-profile-application-dashboard",
      vertical: true,
      gap: 8,
      align: "start",
      children: [
        jsxs(Flex, {
          justify: "space-between",
          align: "center",
          className: "application-dashboard-title",
          onClick: canToggleExpanded ? onToggleExpanded : undefined,
          style: canToggleExpanded ? { cursor: "pointer" } : undefined,
          children: [
            jsx(Flex, {
              gap: 8,
              align: "center",
              children: isScanning
                ? jsxs("span", {
                    className: "application-dashboard-title-label",
                    children: ["Scanning the page", jsx(LoadingDots, {})],
                  })
                : jsxs(Fragment, {
                    children: [
                      isFilling || isSignupFlow
                        ? jsxs("span", {
                            className: "application-dashboard-title-label",
                            children: [
                              title,
                              isFilling &&
                                !isAccountSetupTitle &&
                                jsx(LoadingDots, {}),
                            ],
                          })
                        : jsxs("span", {
                            className: "application-dashboard-title-label",
                            children: [
                              jsxs("span", {
                                style: { fontWeight: 600 },
                                children: [
                                  counts.filledFields.length,
                                  "/",
                                  counts.totalFields.length,
                                ],
                              }),
                              " ",
                              jsxs("span", {
                                style: { fontWeight: 400 },
                                children: [
                                  counts.requiredOnly
                                    ? "required fields"
                                    : "fields",
                                  " ",
                                  "filled",
                                ],
                              }),
                            ],
                          }),
                      showPercent &&
                        jsxs(Fragment, {
                          children: [
                            jsx("span", {
                              className: "application-dashboard-title-divider",
                              "aria-hidden": true,
                            }),
                            jsx("span", {
                              className: "application-dashboard-title-value",
                              children: percentLabel,
                            }),
                          ],
                        }),
                    ],
                  }),
            }),
            jsxs(Flex, {
              gap: 8,
              align: "center",
              className: "application-dashboard-title-right",
              children: [
                isFilling &&
                  jsx("button", {
                    type: "button",
                    className: "application-dashboard-cancel-btn",
                    onClick: handleCancel,
                    children: "Cancel",
                  }),
                canToggleExpanded &&
                  jsx("img", {
                    src: assetUrl(arrDownSvg),
                    alt: "",
                    width: 16,
                    height: 16,
                    style: {
                      transform: expanded ? "rotate(180deg)" : undefined,
                      transition: "transform 0.15s ease",
                    },
                  }),
              ],
            }),
          ],
        }),
        isScanning
          ? jsxs("div", {
              className: "autofill-scanning",
              children: [
                jsx(AnalyzeStarIcon, {}),
                jsxs("div", {
                  className: "tailor-resume-loading-linear-progress",
                  children: [
                    jsx("span", {
                      className: "tailor-resume-loading-linear-progress-first",
                    }),
                    jsx("span", {
                      className: "tailor-resume-loading-linear-progress-second",
                    }),
                  ],
                }),
                jsxs(Flex, {
                  vertical: true,
                  align: "center",
                  justify: "center",
                  className: "autofill-scanning-copy",
                  children: [
                    jsx("span", {
                      className: "autofill-scanning-title",
                      children: "AI is scanning this page",
                    }),
                    jsx("span", {
                      className: "autofill-scanning-subtitle",
                      children:
                        "We're checking this page for the information needed to apply.",
                    }),
                  ],
                }),
              ],
            })
          : jsxs(Fragment, {
              children: [
                jsx(Progress, {
                  type: "line",
                  showInfo: false,
                  trailColor: "#F2F4F5",
                  strokeColor: "#00F0A0",
                  className: "auto-fill-progress-bar",
                  percent,
                }),
                autoFillResult &&
                  jsx("div", {
                    className: "auto-fill-fields-group-container",
                    children: isSignupFlow
                      ? jsx(SignupAutofillProgress, {
                          autoFillResult,
                          isFilling,
                          onSetupCredential: (credential) => {
                            trackEvent(
                              "autofill_workday_setup_password_click",
                              {
                                website_url: window.location.href,
                                uid: useProfileStore.getState().userStage
                                  ?.userId,
                                filed: credential,
                              },
                            )
                            setOpenAutofillInfo(true, "signupInformation")
                          },
                        })
                      : jsxs(Fragment, {
                          children: [
                            jsx(AutoFillRuleGroup, {
                              autoFillResult,
                              isFilling,
                            }),
                            submitMessage &&
                              jsx(SubmitErrorBanner, {
                                message: submitMessage,
                              }),
                          ],
                        }),
                  }),
              ],
            }),
      ],
    }),
  })
}
