// @ts-nocheck
/**
 * Per-ATS pre-autofill adapter registry and account-transition helpers.
 */

import {
  canStartWorkdayStandardAutofillFromAccountFlow,
  detectWorkdayAccountSubmitError,
  hasWorkdayStandardAutofillSignalFromAccountFlow,
  isWorkdayAccountTransitionUrlInScope,
  workdayAccountFlowAdapter,
  workdayForgotPasswordFlowAdapter,
  workdayResetPasswordFlowAdapter,
} from "../sites/myworkday/account-preflow.ts"
import { smartRecruitersEntryAdapter } from "../sites/smartrecruiters/entry-preflow.ts"
import { preAutofillAccountTransitionSession } from "./account-flow.ts"

const WORKDAY_STANDARD_AUTOFILL_START_DELAY_MS = 1000

const TARGET_CONFIG = {
  smartrecruiters: {
    adapters: [smartRecruitersEntryAdapter],
  },
  myworkday: {
    adapters: [
      workdayForgotPasswordFlowAdapter,
      workdayResetPasswordFlowAdapter,
      workdayAccountFlowAdapter,
    ],
    accountTransition: {
      canStartStandardAutofill: canStartWorkdayStandardAutofillFromAccountFlow,
      hasStandardAutofillSignal: hasWorkdayStandardAutofillSignalFromAccountFlow,
      isTransitionInScope: ({ pending, url }) =>
        isWorkdayAccountTransitionUrlInScope({
          pending,
          currentUrl: url,
        }),
      detectSourcePageSubmitError: detectWorkdayAccountSubmitError,
      standardAutofillStartDelayMs: WORKDAY_STANDARD_AUTOFILL_START_DELAY_MS,
      suppressStandardAutofillUntilReady: true,
    },
  },
}

function getTargetConfig(targetName) {
  return TARGET_CONFIG[targetName] ?? null
}

function getAccountTransitionConfig(targetName) {
  return getTargetConfig(targetName)?.accountTransition ?? null
}

export const PRE_AUTOFILL_FLOW_REGISTRY = Object.fromEntries(
  Object.entries(TARGET_CONFIG).map(([targetName, config]) => [
    targetName,
    config.adapters,
  ]),
)

export function canStartPreAutofillStandardAutofill(args) {
  return (
    getAccountTransitionConfig(args.targetName)?.canStartStandardAutofill?.(args) ??
    false
  )
}

export function hasPreAutofillStandardAutofillSignal(args) {
  return (
    getAccountTransitionConfig(args.targetName)?.hasStandardAutofillSignal?.(args) ??
    canStartPreAutofillStandardAutofill(args)
  )
}

export function isPreAutofillAccountTransitionInScope({
  targetName,
  url,
  pending,
}) {
  const isInScope = getAccountTransitionConfig(targetName)?.isTransitionInScope
  if (!isInScope) return true
  return isInScope({
    pending,
    targetName,
    url,
  })
}

export function getPreAutofillStandardAutofillStartDelayMs({ targetName }) {
  return getAccountTransitionConfig(targetName)?.standardAutofillStartDelayMs ?? 0
}

export function getPreAutofillAccountTransitionCompleteHandler(targetName) {
  return getAccountTransitionConfig(targetName)?.onTransitionComplete
}

export function detectPreAutofillAccountSourcePageSubmitError(args) {
  const detect =
    getAccountTransitionConfig(args.targetName)?.detectSourcePageSubmitError
  return detect ? detect(args) : Promise.resolve(null)
}

export function shouldSuppressStandardAutofillForPreAutofillTransition({
  targetName,
  hasPendingAccountTransition =
    preAutofillAccountTransitionSession.peek() !== null,
  canStartStandardAutofill = false,
}) {
  const config = getAccountTransitionConfig(targetName)
  return (
    !!config?.suppressStandardAutofillUntilReady &&
    hasPendingAccountTransition &&
    !canStartStandardAutofill
  )
}
