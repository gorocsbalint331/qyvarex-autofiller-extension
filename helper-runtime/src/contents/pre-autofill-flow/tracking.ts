// @ts-nocheck
/**
 * Workday account-flow CTA / completion / submit-warning analytics.
 */

import { useProfileStore } from "../../store/profile.ts"
import { trackEvent } from "../../utils/trace.ts"

const WORKDAY_TARGET = "myworkday"
const ACCOUNT_FLOW_ID = "workday_account_flow"
const FORGOT_PASSWORD_FLOW_ID = "workday_forgot_password_flow"
const RESET_PASSWORD_FLOW_ID = "workday_reset_password_flow"
const CREATE_ACCOUNT_CTA = "Account Creation & Autofill"
const SIGN_IN_CTA = "Sign In & Autofill"
const STATUS_SIGN_UP = "sign up"
const STATUS_SIGN_IN = "sign in"
const STATUS_FORGOT_PASSWORD = "forgot password"
const STATUS_RESET_PASSWORD = "reset password"

const SIGN_UP_PAGE_KINDS = new Set([
  "create_account",
  "jd",
  "apply_start",
  "jd_continue_application",
])
const SIGN_IN_PAGE_KINDS = new Set(["sign_in"])

function getUserId() {
  return useProfileStore.getState().userStage?.userId
}

function resolveAccountCtaStatus(match) {
  if ("intent" in match) {
    if (match.intent === "registration") return STATUS_SIGN_UP
    if (match.intent === "sign_in") return STATUS_SIGN_IN
    if (match.intent === "forgot_password") return STATUS_FORGOT_PASSWORD
    if (match.intent === "reset_password") return STATUS_RESET_PASSWORD
    return null
  }

  if (
    match.flowId === FORGOT_PASSWORD_FLOW_ID ||
    match.pageKind === "forgot_password"
  ) {
    return STATUS_FORGOT_PASSWORD
  }
  if (
    match.flowId === RESET_PASSWORD_FLOW_ID ||
    match.pageKind === "reset_password"
  ) {
    return STATUS_RESET_PASSWORD
  }
  if (SIGN_IN_PAGE_KINDS.has(match.pageKind)) return STATUS_SIGN_IN
  if (SIGN_UP_PAGE_KINDS.has(match.pageKind)) return STATUS_SIGN_UP
  if (match.ctaText === SIGN_IN_CTA) return STATUS_SIGN_IN
  if (match.ctaText === CREATE_ACCOUNT_CTA) return STATUS_SIGN_UP
  return null
}

export function getWorkdayAccountCtaStatus({ targetName, match }) {
  if (
    targetName !== WORKDAY_TARGET ||
    (match?.flowId !== ACCOUNT_FLOW_ID &&
      match?.flowId !== FORGOT_PASSWORD_FLOW_ID &&
      match?.flowId !== RESET_PASSWORD_FLOW_ID)
  ) {
    return null
  }
  return resolveAccountCtaStatus(match)
}

export function shouldTrackWorkdayAccountCtaExposure({
  targetName,
  match,
  lastStatus,
  pending,
}) {
  const status = getWorkdayAccountCtaStatus({ targetName, match })
  if (!status) {
    return { shouldTrack: false, status: null }
  }

  const pendingStatus = pending ? resolveAccountCtaStatus(pending) : null
  if (pendingStatus === status) {
    return { shouldTrack: false, status }
  }

  return {
    shouldTrack: lastStatus !== status,
    status,
  }
}

function trackWorkdayAccountEvent({
  eventName,
  targetName,
  url,
  match,
  tracker = trackEvent,
}) {
  const status = getWorkdayAccountCtaStatus({ targetName, match })
  if (!status) return false
  tracker(eventName, {
    website_url: url,
    uid: getUserId(),
    status,
  })
  return true
}

export function sendWorkdayAccountCreationCtaExposure({
  targetName,
  url,
  match,
  tracker,
}) {
  return trackWorkdayAccountEvent({
    eventName: "autofill_workday_cta_exposure",
    targetName,
    url,
    match,
    tracker,
  })
}

export function sendWorkdayAccountCreationCtaClick({
  targetName,
  url,
  match,
  tracker,
}) {
  return trackWorkdayAccountEvent({
    eventName: "autofill_workday_cta_click",
    targetName,
    url,
    match,
    tracker,
  })
}

export function sendWorkdayAccountFlowComplete({
  targetName,
  url,
  pending,
  tracker = trackEvent,
}) {
  if (
    targetName !== WORKDAY_TARGET ||
    (pending.flowId !== ACCOUNT_FLOW_ID &&
      pending.flowId !== FORGOT_PASSWORD_FLOW_ID &&
      pending.flowId !== RESET_PASSWORD_FLOW_ID)
  ) {
    return false
  }

  const status = resolveAccountCtaStatus(pending)
  if (!status) return false

  tracker("autofill_workday_flow_complete", {
    website_url: url,
    uid: getUserId(),
    status,
  })
  return true
}

export function sendWorkdayAccountSubmitWarningExposure({
  targetName,
  url,
  pending,
  submitError,
  tracker = trackEvent,
}) {
  if (
    targetName !== WORKDAY_TARGET ||
    (pending.flowId !== ACCOUNT_FLOW_ID &&
      pending.flowId !== FORGOT_PASSWORD_FLOW_ID &&
      pending.flowId !== RESET_PASSWORD_FLOW_ID) ||
    !submitError.messageType
  ) {
    return false
  }

  const status = resolveAccountCtaStatus(pending)
  if (!status) return false

  tracker("autofill_workday_submit_warning_exposure", {
    website_url: url,
    uid: getUserId(),
    status,
    message_type: submitError.messageType,
  })
  return true
}
