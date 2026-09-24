// @ts-nocheck
/**
 * Session stores, step progress, and constants for pre-autofill account flows.
 */

import { useAutofillResultStore } from "../../store/autofillResult.ts"

export const PRE_AUTOFILL_ACCOUNT_SETUP_MISSING_STEPS_KEY = "signupSetupMissingFields"
export const PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY = "signupSubmitError"
export const WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY = "workdayForgotPasswordSubmitMessage"
export const WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_EVENT =
  "JobrightWorkdayForgotPasswordSubmitMessage"
export const PRE_AUTOFILL_ACCOUNT_SETUP_PROMPT_DELAY_MS = 300
export const PRE_AUTOFILL_ACCOUNT_SETUP_PROGRESS_TITLE = "Paused: Action Needed!"

export function getPreAutofillAccountSetupMissingSteps(userAutoFillResponse) {
  const value = userAutoFillResponse?.[PRE_AUTOFILL_ACCOUNT_SETUP_MISSING_STEPS_KEY]
  return Array.isArray(value) ? value.filter((step) => typeof step === "string") : []
}

function isDebugAccountSetupEnabled() {
  try {
    return (
      window.localStorage?.getItem("JOBRIGHT_DEBUG_ACCOUNT_SETUP") === "1" ||
      window.sessionStorage?.getItem("JOBRIGHT_DEBUG_ACCOUNT_SETUP") === "1"
    )
  } catch {
    return false
  }
}

export function debugPreAutofillAccountSetup(scope, message, details) {
  if (!isDebugAccountSetupEnabled()) return
  const prefix = scope === "ui" ? "[workday-account-setup-ui]" : "[workday-account-setup]"
  console.debug(prefix, message, {
    ...details,
    timestamp: Date.now(),
  })
}

function getSessionStorage() {
  try {
    return window.sessionStorage
  } catch {
    return null
  }
}

function isValidFlowSession(value, pageKinds) {
  if (!value || typeof value !== "object") return false
  const session = value
  return (
    pageKinds.includes(session.pageKind) &&
    Array.isArray(session.completedSteps) &&
    session.completedSteps.every((step) => typeof step === "string") &&
    (typeof session.currentStep === "string" || session.currentStep === null) &&
    (session.status === "running" || session.status === "completed") &&
    typeof session.updatedAt === "number"
  )
}

export function createPreAutofillFlowSessionStore({ storageKey, pageKinds }) {
  function get() {
    const storage = getSessionStorage()
    if (!storage) return null
    try {
      const raw = storage.getItem(storageKey)
      if (!raw) return null
      const parsed = JSON.parse(raw)
      return isValidFlowSession(parsed, pageKinds) ? parsed : null
    } catch {
      return null
    }
  }

  function hasRunning() {
    return get()?.status === "running"
  }

  return {
    get,
    save(session) {
      const storage = getSessionStorage()
      if (storage) {
        storage.setItem(
          storageKey,
          JSON.stringify({
            ...session,
            updatedAt: Date.now(),
          }),
        )
      }
    },
    clear() {
      const storage = getSessionStorage()
      if (storage) storage.removeItem(storageKey)
    },
    hasRunning,
  }
}

export function appendCompletedPreAutofillStep(completedSteps, step) {
  return completedSteps.includes(step) ? completedSteps : [...completedSteps, step]
}

function normalizeStep(step) {
  return typeof step === "string" ? { label: step } : step
}

export function buildPreAutofillStepProgress({
  steps,
  completedSteps = [],
  missingSteps = [],
  currentStep = null,
  userAutoFillResponse = {},
  type = "PRE_AUTOFILL_FLOW_STEP",
}) {
  const normalizedSteps = steps.map(normalizeStep)
  const labels = normalizedSteps.map((step) => step.label)
  const labelSet = new Set(labels)
  const filledFields = completedSteps.filter((step) => labelSet.has(step))
  const missingFields = missingSteps.filter((step) => labelSet.has(step))
  return {
    filledFields,
    missingFields,
    fieldRequiredStatus: normalizedSteps.map((step) => ({
      label: step.label,
      required: true,
      options: [],
      type,
      metadata: step.metadata,
    })),
    userAutoFillResponse,
    currentField: currentStep && labelSet.has(currentStep) ? currentStep : null,
  }
}

export function createPreAutofillStepProgressController({
  fillingMode,
  getSteps,
  progressType,
  getTitle,
  sessionStore,
}) {
  function build({
    pageKind,
    steps,
    completedSteps = [],
    missingSteps = [],
    currentStep = null,
    userAutoFillResponse = {},
  }) {
    return buildPreAutofillStepProgress({
      steps: steps ?? getSteps(pageKind),
      completedSteps,
      missingSteps,
      currentStep,
      userAutoFillResponse,
      type: progressType,
    })
  }

  function set({
    pageKind,
    steps,
    completedSteps,
    missingSteps = [],
    currentStep,
    userAutoFillResponse = {},
    status = "running",
    persistSession = true,
  }) {
    const store = useAutofillResultStore.getState()
    store.setFillingMode(fillingMode)
    store.setProgressTitle(getTitle(pageKind, status))
    store.setAutoFillResult(
      build({
        pageKind,
        steps,
        completedSteps,
        missingSteps,
        currentStep,
        userAutoFillResponse,
      }),
    )
    if (persistSession) {
      sessionStore.save({
        pageKind,
        completedSteps,
        currentStep,
        status,
      })
    }
  }

  return {
    getSteps,
    getTitle,
    build,
    set,
  }
}

function getOneShotSessionStorage() {
  try {
    return window.sessionStorage
  } catch {
    return null
  }
}

function isValidOneShotValue({ value, validatePayload }) {
  if (!value || typeof value !== "object") return false
  const entry = value
  return typeof entry.createdAt === "number" && validatePayload(entry.payload)
}

export function createOneShotSessionStore({ storageKey, ttlMs, validatePayload }) {
  function clear() {
    const storage = getOneShotSessionStorage()
    if (storage) storage.removeItem(storageKey)
  }

  function peek() {
    const storage = getOneShotSessionStorage()
    if (!storage) return null
    try {
      const raw = storage.getItem(storageKey)
      if (!raw) return null
      const parsed = JSON.parse(raw)
      if (!isValidOneShotValue({ value: parsed, validatePayload })) {
        clear()
        return null
      }
      const ageMs = Date.now() - parsed.createdAt
      if (ageMs > ttlMs) {
        console.debug("[pre-autofill-session]", "expired", {
          storageKey,
          ageMs,
          ttlMs,
          createdAt: parsed.createdAt,
        })
        clear()
        return null
      }
      return parsed
    } catch {
      clear()
      return null
    }
  }

  function consume() {
    const value = peek()
    if (value) clear()
    return value
  }

  return {
    save(payload) {
      const storage = getOneShotSessionStorage()
      if (storage) {
        storage.setItem(
          storageKey,
          JSON.stringify({
            payload,
            createdAt: Date.now(),
          }),
        )
      }
    },
    peek,
    consume,
    clear,
  }
}

export const PRE_AUTOFILL_ACCOUNT_STANDARD_READY_CHECK_INTERVAL_MS = 250
export const PRE_AUTOFILL_ACCOUNT_FLOW_FILLING_MODE = "signup_autofill_flow"
export const PRE_AUTOFILL_ACCOUNT_FLOW_SESSION_KEY = "JOBRIGHT_SIGNUP_AUTOFILL_FLOW_SESSION"
export const PRE_AUTOFILL_ACCOUNT_TRANSITION_SESSION_KEY =
  "JOBRIGHT_SIGNUP_AUTOFILL_FLOW_PENDING_SUBMIT"
export const PRE_AUTOFILL_ACCOUNT_PENDING_SUBMIT_SESSION_KEY =
  PRE_AUTOFILL_ACCOUNT_TRANSITION_SESSION_KEY
export const PRE_AUTOFILL_ACCOUNT_FLOW_PROGRESS_TYPE = "SIGNUP_AUTOFILL_FLOW_STEP"
export const PRE_AUTOFILL_ACCOUNT_CREDENTIALS_CHANGED_EVENT =
  "JobrightPreAutofillAccountCredentialsChanged"
export const PRE_AUTOFILL_ACCOUNT_TRANSITION_CHANGED_EVENT =
  "JobrightPreAutofillAccountTransitionChanged"
export const PRE_AUTOFILL_ACCOUNT_PASSWORD_WAIT_TIMEOUT_MS = 300000
export const PRE_AUTOFILL_ACCOUNT_TRANSITION_TTL_MS = 10000
export const PRE_AUTOFILL_ACCOUNT_PENDING_SUBMIT_TTL_MS = PRE_AUTOFILL_ACCOUNT_TRANSITION_TTL_MS
export const PRE_AUTOFILL_ACCOUNT_SUBMIT_REFRESH_DEBOUNCE_MS = 1000

export const PRE_AUTOFILL_ACCOUNT_STEP_LABELS = {
  clickApply: "Click Apply",
  clickContinueApplication: "Click Continue Application",
  selectedApplyManually: "Choose Apply Manually",
  emailAddress: "Enter Email Address",
  password: "Enter Password",
  signInWithEmail: "Sign in with email",
  verifyNewPassword: "Verify New Password",
  agreePrivacyNotice: "Agree to Privacy Notice",
  clickCreateAccount: "Click Create Account",
  clickSignIn: "Click Sign In",
  clickResetPassword: "Click Reset Password",
}

export const PRE_AUTOFILL_ACCOUNT_REGISTRATION_ENTRY_STEPS = [
  PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickApply,
  PRE_AUTOFILL_ACCOUNT_STEP_LABELS.selectedApplyManually,
]

export const PRE_AUTOFILL_ACCOUNT_REGISTRATION_FORM_STEPS = [
  PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
  PRE_AUTOFILL_ACCOUNT_STEP_LABELS.password,
  PRE_AUTOFILL_ACCOUNT_STEP_LABELS.verifyNewPassword,
]

export const PRE_AUTOFILL_ACCOUNT_REGISTRATION_STEPS = [
  ...PRE_AUTOFILL_ACCOUNT_REGISTRATION_ENTRY_STEPS,
  ...PRE_AUTOFILL_ACCOUNT_REGISTRATION_FORM_STEPS,
]

export const PRE_AUTOFILL_ACCOUNT_SIGN_IN_FORM_STEPS = [
  PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
  PRE_AUTOFILL_ACCOUNT_STEP_LABELS.password,
]

export const PRE_AUTOFILL_ACCOUNT_SIGN_IN_STEPS = [...PRE_AUTOFILL_ACCOUNT_SIGN_IN_FORM_STEPS]

export const PRE_AUTOFILL_ACCOUNT_RESET_PASSWORD_STEPS = [
  PRE_AUTOFILL_ACCOUNT_STEP_LABELS.password,
  PRE_AUTOFILL_ACCOUNT_STEP_LABELS.verifyNewPassword,
]

const PRE_AUTOFILL_ACCOUNT_FLOW_CONFIG = {
  registration: {
    steps: PRE_AUTOFILL_ACCOUNT_REGISTRATION_STEPS,
    progressTitle: "Creating account",
    ctaText: "Account Creation & Autofill",
  },
  sign_in: {
    steps: PRE_AUTOFILL_ACCOUNT_SIGN_IN_STEPS,
    progressTitle: "Signing in",
    ctaText: "Sign In & Autofill",
  },
  forgot_password: {
    steps: [PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress],
    progressTitle: "Autofilling",
    ctaText: "Autofill",
  },
  reset_password: {
    steps: PRE_AUTOFILL_ACCOUNT_RESET_PASSWORD_STEPS,
    progressTitle: "Autofilling",
    ctaText: "Autofill",
  },
}

export const PRE_AUTOFILL_ACCOUNT_FLOW_STATES = Object.keys(PRE_AUTOFILL_ACCOUNT_FLOW_CONFIG)

export const preAutofillAccountFlowSession = createPreAutofillFlowSessionStore({
  storageKey: PRE_AUTOFILL_ACCOUNT_FLOW_SESSION_KEY,
  pageKinds: PRE_AUTOFILL_ACCOUNT_FLOW_STATES,
})

function isValidTransitionPayload(payload) {
  if (!payload || typeof payload !== "object") return false
  const value = payload
  return (
    typeof value.flowId === "string" &&
    PRE_AUTOFILL_ACCOUNT_FLOW_STATES.includes(value.intent) &&
    typeof value.sourceUrl === "string" &&
    (value.targetUrl === undefined || typeof value.targetUrl === "string") &&
    typeof value.sourcePageKind === "string" &&
    (typeof value.transitionStep === "string" || typeof value.submitStep === "string") &&
    (value.transitionStep === undefined || typeof value.transitionStep === "string") &&
    (value.submitStep === undefined || typeof value.submitStep === "string") &&
    (value.completedSteps === undefined ||
      (Array.isArray(value.completedSteps) &&
        value.completedSteps.every((step) => typeof step === "string"))) &&
    (value.currentStep === undefined ||
      typeof value.currentStep === "string" ||
      value.currentStep === null)
  )
}

export const preAutofillAccountTransitionSession = createOneShotSessionStore({
  storageKey: PRE_AUTOFILL_ACCOUNT_TRANSITION_SESSION_KEY,
  ttlMs: PRE_AUTOFILL_ACCOUNT_TRANSITION_TTL_MS,
  validatePayload: isValidTransitionPayload,
})

export const preAutofillAccountPendingSubmitSession = preAutofillAccountTransitionSession

function getPreAutofillAccountFlowSteps(pageKind) {
  return PRE_AUTOFILL_ACCOUNT_FLOW_CONFIG[pageKind].steps
}

export function getPreAutofillAccountProgressTitle(pageKind, status = "running") {
  switch (status) {
    case "running":
      return PRE_AUTOFILL_ACCOUNT_FLOW_CONFIG[pageKind].progressTitle
    case "completed":
      return "Completed"
  }
}

export const preAutofillAccountProgress = createPreAutofillStepProgressController({
  fillingMode: PRE_AUTOFILL_ACCOUNT_FLOW_FILLING_MODE,
  progressType: PRE_AUTOFILL_ACCOUNT_FLOW_PROGRESS_TYPE,
  getSteps: getPreAutofillAccountFlowSteps,
  getTitle: getPreAutofillAccountProgressTitle,
  sessionStore: preAutofillAccountFlowSession,
})

export function buildPreAutofillAccountProgress(options) {
  return preAutofillAccountProgress.build(options)
}

export function getPreAutofillAccountFlowCtaText(pageKind) {
  return PRE_AUTOFILL_ACCOUNT_FLOW_CONFIG[pageKind].ctaText
}
