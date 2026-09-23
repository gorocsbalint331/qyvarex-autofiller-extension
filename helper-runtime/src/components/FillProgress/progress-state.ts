// @ts-nocheck
/**
 * Fill-progress helpers: field-item results, signup setup chips, scanning UI.
 */

import * as accountFlowState from "../../contents/pre-autofill-flow/account-flow-state.js"
import {
  buildNormalizedFieldLabelSet,
  normalizeFieldLabel,
} from "../../utils/fieldLabel.ts"

export const SIGNUP_CREATING_ACCOUNT_LABEL = "Create Account"

function normalizeItemKey(value) {
  return value.trim().toLowerCase()
}

export function isValidFieldItemResult(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false
  const result = value
  if (
    result.status !== "filled" &&
    result.status !== "partial" &&
    result.status !== "missing"
  ) {
    return false
  }

  const lists = [
    result.requestedItems,
    result.succeededItems,
    result.failedItems,
  ]
  if (
    !lists.every(
      (list) =>
        Array.isArray(list) && list.every((item) => typeof item === "string"),
    )
  ) {
    return false
  }

  const [requested, succeeded, failed] = lists
  const requestedKeys = requested.map(normalizeItemKey)
  const succeededKeys = succeeded.map(normalizeItemKey)
  const failedKeys = failed.map(normalizeItemKey)
  const requestedSet = new Set(requestedKeys)
  const succeededSet = new Set(succeededKeys)
  const failedSet = new Set(failedKeys)

  if (
    requestedKeys.some((key) => !key) ||
    requestedSet.size !== requestedKeys.length ||
    succeededSet.size !== succeededKeys.length ||
    failedSet.size !== failedKeys.length
  ) {
    return false
  }

  const isSubset = (set) => [...set].every((key) => requestedSet.has(key))
  if (
    !isSubset(succeededSet) ||
    !isSubset(failedSet) ||
    [...succeededSet].some((key) => failedSet.has(key))
  ) {
    return false
  }

  const covered = new Set([...succeededSet, ...failedSet])
  if (
    covered.size !== requestedSet.size ||
    ![...requestedSet].every((key) => covered.has(key))
  ) {
    return false
  }

  if (result.status === "filled") {
    return (
      requestedSet.size > 0 &&
      failedSet.size === 0 &&
      succeededSet.size === requestedSet.size
    )
  }
  if (result.status === "partial") {
    const allSucceeded =
      failedSet.size === 0 && succeededSet.size === requestedSet.size
    return succeededSet.size > 0 && (failedSet.size > 0 || allSucceeded)
  }
  return succeededSet.size === 0
}

export function getFieldItemResult(fieldItemResults, label) {
  if (
    !fieldItemResults ||
    typeof fieldItemResults !== "object" ||
    Array.isArray(fieldItemResults)
  ) {
    return null
  }
  const normalizedLabel = normalizeFieldLabel(label)
  if (!normalizedLabel) return null
  const match = Object.entries(fieldItemResults).find(
    ([key]) => normalizeFieldLabel(key) === normalizedLabel,
  )?.[1]
  return isValidFieldItemResult(match) ? match : null
}

export function getFieldItemDisplayState(result) {
  return isValidFieldItemResult(result) ? result.status : null
}

export function getFieldItemProgressSummary(result) {
  if (!isValidFieldItemResult(result)) return null
  if (result.status === "partial" && result.failedItems.length === 0) {
    return `${result.succeededItems.length} added before autofill stopped`
  }
  return `${result.succeededItems.length}/${result.requestedItems.length} added`
}

export function getFieldItemResultGroups(result) {
  if (!isValidFieldItemResult(result)) return []
  const groups = []
  if (result.succeededItems.length > 0) {
    groups.push({
      title: "Added",
      status: "filled",
      items: result.succeededItems,
    })
  }
  if (result.failedItems.length > 0) {
    groups.push({
      title: "Not added",
      status: "missing",
      items: result.failedItems,
    })
  }
  return groups
}

function asStep(step) {
  return typeof step === "string" ? { label: step } : step
}

export function getSignupSetupCredentialField(step) {
  return asStep(step).metadata?.signup?.setupCredential ?? null
}

export function getSignupSetupStepLabel(step) {
  const credential = getSignupSetupCredentialField(step)
  if (!credential) return null
  return credential === "email"
    ? "Set an email to continue"
    : "Set a password to continue"
}

export function isSignupSetupStepMissing({ step, setupMissingSet }) {
  const normalized = asStep(step)
  return !!(
    getSignupSetupCredentialField(normalized) &&
    setupMissingSet.has(normalizeFieldLabel(normalized.label))
  )
}

export function getSignupSetupExposureCredentialFields({
  steps,
  setupMissingSet,
  trackedFields = new Set(),
}) {
  const exposed = []
  const seen = new Set()
  for (const step of steps) {
    if (!isSignupSetupStepMissing({ step, setupMissingSet })) continue
    const credential = getSignupSetupCredentialField(step)
    if (!credential || seen.has(credential) || trackedFields.has(credential)) {
      continue
    }
    seen.add(credential)
    exposed.push(credential)
  }
  return exposed
}

function readSubmitMessage(response, key) {
  const value = response?.[key]
  if (!value || typeof value !== "object") return null
  const message = value.message
  return typeof message === "string" && message.trim()
    ? message.trim()
    : null
}

export function getSignupAccountSubmitMessage(response) {
  return (
    readSubmitMessage(response, accountFlowState.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY) ??
    readSubmitMessage(
      response,
      accountFlowState.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY,
    )
  )
}

function hasNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0
}

export function hasVisibleFillProgressResult(result) {
  return (
    !!result &&
    (hasNonEmptyArray(result.fieldRequiredStatus) ||
      hasNonEmptyArray(result.filledFields) ||
      hasNonEmptyArray(result.missingFields))
  )
}

export function getFillProgressCounts(result) {
  const steps = (result?.fieldRequiredStatus || []).filter((step) => !!step)
  const requiredSteps = steps.filter((step) => step.required)
  const requiredOnly = requiredSteps.length > 0 || steps.length === 0
  const countedSteps = requiredOnly ? requiredSteps : steps
  const filledSet = buildNormalizedFieldLabelSet(result?.filledFields || [])
  return {
    totalFields: countedSteps.map((step) => step.label || ""),
    filledFields: countedSteps
      .filter((step) =>
        filledSet.has(normalizeFieldLabel(step.label || "")),
      )
      .map((step) => step.label || ""),
    requiredOnly,
  }
}

export function shouldShowFillProgressScanning({
  isFilling,
  hasVisibleResult,
  fillingMode,
}) {
  return !!isFilling && !hasVisibleResult && fillingMode !== "signup_autofill_flow"
}

export function shouldShowFillProgressPercent({
  isScanning,
  isFilling,
  fillingMode,
}) {
  return !isScanning && !(fillingMode === "signup_autofill_flow" && isFilling)
}

export function getSignupStepStatus({
  step,
  currentField,
  filledSet,
  missingSet,
  isFilling,
}) {
  const normalized = normalizeFieldLabel(step)
  if (filledSet.has(normalized)) return "completed"
  if (isFilling && currentField === step) return "current"
  if (missingSet.has(normalized)) return "missing"
  return "pending"
}

export function getSignupCreatingAccountStatus({
  childSteps,
  currentField,
  filledFields = [],
  missingFields = [],
  isFilling,
}) {
  const filledSet = buildNormalizedFieldLabelSet(filledFields)
  const missingSet = buildNormalizedFieldLabelSet(missingFields)
  const statuses = childSteps.map((step) =>
    getSignupStepStatus({
      step,
      currentField,
      filledSet,
      missingSet,
      isFilling,
    }),
  )
  if (statuses.length === 0) return "pending"
  if (statuses.every((status) => status === "completed")) return "completed"
  if (
    isFilling &&
    statuses.some(
      (status) =>
        status === "current" ||
        status === "missing" ||
        status === "completed",
    )
  ) {
    return "current"
  }
  if (statuses.some((status) => status === "missing")) return "missing"
  return "pending"
}

export function shouldShowSignupCreatingAccountGroup(steps) {
  return steps.some(
    (step) => asStep(step).metadata?.signup?.progressGroup === "create_account",
  )
}
