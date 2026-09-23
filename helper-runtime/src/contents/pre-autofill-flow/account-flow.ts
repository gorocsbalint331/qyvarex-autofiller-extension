// @ts-nocheck
/**
 * Pre-autofill account flow adapter: entry/form runners, transitions, and submit handling.
 */

import { useAutofillResultStore } from "../../store/autofillResult.ts"
import {
  definePreAutofillPageRules,
  resolvePreAutofillPageRule,
  waitForPreAutofillFlowDebugStep,
} from "./core.ts"
import {
  PRE_AUTOFILL_ACCOUNT_CREDENTIALS_CHANGED_EVENT,
  PRE_AUTOFILL_ACCOUNT_PASSWORD_WAIT_TIMEOUT_MS,
  PRE_AUTOFILL_ACCOUNT_REGISTRATION_ENTRY_STEPS,
  PRE_AUTOFILL_ACCOUNT_SETUP_MISSING_STEPS_KEY,
  PRE_AUTOFILL_ACCOUNT_SETUP_PROGRESS_TITLE,
  PRE_AUTOFILL_ACCOUNT_SETUP_PROMPT_DELAY_MS,
  PRE_AUTOFILL_ACCOUNT_STANDARD_READY_CHECK_INTERVAL_MS,
  PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY,
  PRE_AUTOFILL_ACCOUNT_SUBMIT_REFRESH_DEBOUNCE_MS,
  PRE_AUTOFILL_ACCOUNT_TRANSITION_CHANGED_EVENT,
  appendCompletedPreAutofillStep,
  debugPreAutofillAccountSetup,
  getPreAutofillAccountFlowCtaText,
  preAutofillAccountFlowSession,
  preAutofillAccountProgress,
  preAutofillAccountTransitionSession,
} from "./account-flow-state.ts"

export * from "./account-flow-state.ts"

export const PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_REFRESH_DELAY_MS = 500

let activeAbortController = null
let submitErrorRefreshPromise = null

export function cancelPreAutofillAccountFlow() {
  activeAbortController?.abort()
  activeAbortController = null
  preAutofillAccountFlowSession.clear()
  preAutofillAccountTransitionSession.clear()
  useAutofillResultStore.getState().stopCurrentFilling()
}

function isAborted(signal) {
  return signal.aborted
}

function toProgressSteps(steps) {
  return steps
    .filter((step) => step.progress !== false)
    .map((step) => ({
      label: step.label,
      metadata: buildStepMetadata(step),
    }))
}

function buildStepMetadata(step) {
  const signup = {}
  if (step.progressGroup) signup.progressGroup = step.progressGroup
  if (step.waitForCredential) signup.setupCredential = step.waitForCredential
  return Object.keys(signup).length > 0 ? { signup } : undefined
}

function getProgressStepLabels(progressSteps) {
  return progressSteps.map((step) => step.label)
}

function getNextProgressStepLabel({ steps, currentIndex }) {
  return steps.slice(currentIndex + 1).find((step) => step.progress !== false)?.label ?? null
}

function hasResumableAccountSession(session, state) {
  return (
    !!session &&
    session.status === "running" &&
    !!session.completedSteps.length &&
    (session.pageKind === state ||
      (state === "sign_in" &&
        session.pageKind === "registration" &&
        session.completedSteps.some((step) =>
          PRE_AUTOFILL_ACCOUNT_REGISTRATION_ENTRY_STEPS.includes(step),
        )))
  )
}

function shouldResumeAccountSession(session, state) {
  return hasResumableAccountSession(session, state)
}

function getCarriedCompletedSteps({ session, state, ruleProgressSteps }) {
  if (!hasResumableAccountSession(session, state) || !session) return []
  return session.pageKind === state
    ? session.completedSteps.filter((step) => !ruleProgressSteps.includes(step))
    : PRE_AUTOFILL_ACCOUNT_REGISTRATION_ENTRY_STEPS.filter((step) =>
        session.completedSteps.includes(step),
      )
}

function stopPreAutofillAccountFlow() {
  activeAbortController?.abort()
  activeAbortController = null
  preAutofillAccountFlowSession.clear()
  preAutofillAccountTransitionSession.clear()
  useAutofillResultStore.getState().stopCurrentFilling()
}

function stopFlowUnlessAborted(signal) {
  if (!isAborted(signal)) stopPreAutofillAccountFlow()
}

function asEventTarget(documentRoot) {
  return typeof documentRoot.addEventListener !== "function" ||
    typeof documentRoot.removeEventListener !== "function"
    ? null
    : documentRoot
}

async function waitForAccountCredential({
  credential,
  document: documentRoot,
  credentials,
  rereadCredential,
  progress,
  stepLabel,
  signal,
}) {
  if (credentials[credential]) return credentials
  const eventTarget = asEventTarget(documentRoot)
  debugPreAutofillAccountSetup("runner", "wait-start", {
    credential,
    stepLabel,
    hasEmail: !!credentials.email,
    hasPassword: !!credentials.password,
  })
  return new Promise((resolve) => {
    let settled = false
    let reading = false
    let prompted = false
    let timeoutId = null
    let promptTimeoutId = null

    const cleanup = () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (promptTimeoutId) clearTimeout(promptTimeoutId)
      eventTarget?.removeEventListener(
        PRE_AUTOFILL_ACCOUNT_CREDENTIALS_CHANGED_EVENT,
        onCredentialsChanged,
      )
      signal.removeEventListener("abort", onAbort)
    }

    const settle = (value) => {
      if (settled) return
      settled = true
      cleanup()
      resolve(value)
    }

    const onAbort = () => settle(null)

    const showPrompt = () => {
      if (settled || prompted) return
      prompted = true
      debugPreAutofillAccountSetup("runner", "prompt-show", {
        credential,
        stepLabel,
      })
      progress.markCredentialMissing(stepLabel)
      waitForPreAutofillFlowDebugStep(`Missing value for ${stepLabel}`, signal)
    }

    async function onCredentialsChanged() {
      if (reading || settled) return
      reading = true
      try {
        const nextCredentials = await rereadCredential(credentials, credential)
        debugPreAutofillAccountSetup("runner", "credential-read", {
          credential,
          stepLabel,
          hasEmail: !!nextCredentials.email,
          hasPassword: !!nextCredentials.password,
          found: !!nextCredentials[credential],
        })
        if (nextCredentials[credential]) settle(nextCredentials)
      } catch {
      } finally {
        reading = false
      }
    }

    eventTarget?.addEventListener(
      PRE_AUTOFILL_ACCOUNT_CREDENTIALS_CHANGED_EVENT,
      onCredentialsChanged,
    )
    signal.addEventListener("abort", onAbort, { once: true })
    timeoutId = setTimeout(() => {
      settle(null)
    }, PRE_AUTOFILL_ACCOUNT_PASSWORD_WAIT_TIMEOUT_MS)
    promptTimeoutId = setTimeout(showPrompt, PRE_AUTOFILL_ACCOUNT_SETUP_PROMPT_DELAY_MS)
    onCredentialsChanged()
  })
}

async function runTrackedStep({ context, progress, step, nextStep, action }) {
  if (isAborted(context.signal)) return false
  const result = await action(context)
  if (isAborted(context.signal)) return false
  if (result === false) {
    progress.markMissing(step)
    await waitForPreAutofillFlowDebugStep(`Missing ${step}`, context.signal)
    return false
  }
  progress.complete(step, nextStep)
  await waitForPreAutofillFlowDebugStep(nextStep ?? `${step} completed`, context.signal)
  return !isAborted(context.signal)
}

function saveAccountTransition({
  context,
  intent,
  transitionStep,
  completedSteps,
  currentStep,
  targetUrl,
}) {
  const pending = {
    flowId: context.match.flowId,
    intent: intent ?? context.state,
    sourceUrl: context.url,
    ...(targetUrl ? { targetUrl } : {}),
    sourcePageKind: context.match.pageKind,
    transitionStep,
    completedSteps,
    currentStep,
  }
  const existing = preAutofillAccountTransitionSession.peek()
  const existingPayload = existing?.payload
  const submitError =
    useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse?.[
      PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY
    ]
  if (existingPayload && isSameTransitionPayload(existingPayload, pending) && !submitError) {
    const ageMs = Date.now() - (existing?.createdAt ?? 0)
    if (ageMs > PRE_AUTOFILL_ACCOUNT_SUBMIT_REFRESH_DEBOUNCE_MS) {
      preAutofillAccountTransitionSession.save(pending)
      dispatchTransitionChanged()
    }
    return {
      pending: existingPayload,
      didSubmit: false,
    }
  }
  preAutofillAccountTransitionSession.save(pending)
  if (clearSubmitErrorFromResult()) scheduleSubmitErrorRefreshDelay()
  dispatchTransitionChanged()
  return {
    pending,
    didSubmit: true,
  }
}

function isSameTransitionPayload(left, right) {
  return (
    left.flowId === right.flowId &&
    left.intent === right.intent &&
    left.sourceUrl === right.sourceUrl &&
    left.targetUrl === right.targetUrl &&
    left.sourcePageKind === right.sourcePageKind &&
    left.transitionStep === right.transitionStep &&
    left.currentStep === right.currentStep &&
    areCompletedStepsEqual(left.completedSteps, right.completedSteps)
  )
}

function areCompletedStepsEqual(left, right) {
  const a = left ?? []
  const b = right ?? []
  return a.length === b.length && a.every((step, index) => step === b[index])
}

function dispatchTransitionChanged() {
  if (typeof window !== "undefined" && typeof window.dispatchEvent === "function") {
    window.dispatchEvent(new Event(PRE_AUTOFILL_ACCOUNT_TRANSITION_CHANGED_EVENT))
  }
}

function createEmptyPendingSubmit({ context, state }) {
  return {
    flowId: context.match.flowId,
    intent: state,
    sourceUrl: context.url,
    sourcePageKind: context.match.pageKind,
    transitionStep: "",
    completedSteps: [],
  }
}

function applyStepTransition({ context, progress, step, transition }) {
  const completedSteps = transition.includeStep
    ? appendCompletedPreAutofillStep(progress.getCompletedSteps(), step.label)
    : progress.getCompletedSteps()
  const targetUrl = transition.getTargetUrl?.(context) ?? undefined
  saveAccountTransition({
    context,
    intent: transition.intent,
    transitionStep: step.label,
    completedSteps,
    currentStep: transition.currentStep ?? null,
    targetUrl,
  })
}

function clearSubmitErrorFromResult() {
  const store = useAutofillResultStore.getState()
  const autoFillResult = store.autoFillResult
  if (!autoFillResult?.userAutoFillResponse?.[PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY]) {
    return false
  }
  const {
    [PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY]: _removed,
    ...userAutoFillResponse
  } = autoFillResult.userAutoFillResponse
  store.setAutoFillResult({
    ...autoFillResult,
    userAutoFillResponse,
  })
  return true
}

function scheduleSubmitErrorRefreshDelay() {
  submitErrorRefreshPromise = new Promise((resolve) => {
    setTimeout(resolve, PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_REFRESH_DELAY_MS)
  })
}

async function awaitSubmitErrorRefreshDelay() {
  const pending = submitErrorRefreshPromise
  if (pending) {
    await pending
    if (submitErrorRefreshPromise === pending) submitErrorRefreshPromise = null
  }
}

function createAccountProgressTracker({
  state,
  steps,
  completedSteps,
  missingSteps = [],
  progressTitle,
}) {
  let completed = completedSteps
  let missing = missingSteps
  let setupMissing = []

  function getUserAutoFillResponse() {
    return {
      [PRE_AUTOFILL_ACCOUNT_SETUP_MISSING_STEPS_KEY]: setupMissing,
    }
  }

  function publish(currentStep, titleOverride) {
    preAutofillAccountProgress.set({
      pageKind: state,
      steps,
      completedSteps: completed,
      missingSteps: missing,
      currentStep,
      userAutoFillResponse: getUserAutoFillResponse(),
      persistSession: false,
    })
    if (titleOverride !== undefined) {
      useAutofillResultStore.getState().setProgressTitle(titleOverride)
    } else if (progressTitle !== undefined) {
      useAutofillResultStore.getState().setProgressTitle(progressTitle)
    }
  }

  return {
    complete(step, nextStep) {
      completed = appendCompletedPreAutofillStep(completed, step)
      missing = missing.filter((value) => value !== step)
      setupMissing = setupMissing.filter((value) => value !== step)
      publish(nextStep)
    },
    markCredentialMissing(step) {
      missing = [step]
      setupMissing = [step]
      publish(step, PRE_AUTOFILL_ACCOUNT_SETUP_PROGRESS_TITLE)
    },
    markMissing(step) {
      missing = [step]
      setupMissing = []
      publish(step)
    },
    setCurrent(step) {
      publish(step)
    },
    getCompletedSteps: () => completed,
  }
}

function getRuleForMatch({ rules, match }) {
  return rules[match.pageKind] ?? null
}

function defineAccountPageRules(rules) {
  const normalized = Object.fromEntries(
    Object.entries(rules).map(
      ([
        pageKind,
        {
          state,
          entry,
          ctaText,
          progressTitle,
          completeEntryProgress,
          ...rest
        },
      ]) => [
        pageKind,
        {
          ...rest,
          ctaText: ctaText ?? getPreAutofillAccountFlowCtaText(state),
        },
      ],
    ),
  )
  return definePreAutofillPageRules(normalized)
}

async function filterRunnableSteps({ context, steps }) {
  const runnable = []
  for (const step of steps) {
    if (!step.shouldRun || (await step.shouldRun(context))) runnable.push(step)
  }
  return runnable
}

async function ensureStepCredential({ context, credentialReaders, progress, step }) {
  const credential = step.waitForCredential
  if (!credential || context.credentials[credential]) return true
  try {
    const nextCredentials = await credentialReaders.rereadCredential(
      context.credentials,
      credential,
    )
    context.credentials = nextCredentials
    if (nextCredentials[credential]) return true
  } catch {}
  const waited = await waitForAccountCredential({
    credential,
    document: context.document,
    credentials: context.credentials,
    rereadCredential: credentialReaders.rereadCredential,
    progress,
    stepLabel: step.label,
    signal: context.signal,
  })
  if (!waited) return false
  context.credentials = waited
  return true
}

async function runAccountSteps({ context, credentialReaders, progress, steps }) {
  for (const [index, step] of steps.entries()) {
    if (isAborted(context.signal)) return false
    const nextStep = getNextProgressStepLabel({
      steps,
      currentIndex: index,
    })
    if (step.transition?.timing === "before") {
      applyStepTransition({
        context,
        progress,
        step,
        transition: step.transition,
      })
    }
    const hasCredential = await ensureStepCredential({
      context,
      credentialReaders,
      progress,
      step,
    })
    if (!hasCredential || isAborted(context.signal)) return false

    const action = async () => {
      const completedSteps =
        context.match.pageKind === "jd" ? progress.getCompletedSteps() : []
      return step.run({
        ...context,
        onSubmit: () =>
          step.submitSession === false
            ? {
                pending: {
                  ...createEmptyPendingSubmit({
                    context,
                    state: context.state,
                  }),
                  transitionStep: step.label,
                  completedSteps,
                  currentStep: null,
                },
                didSubmit: true,
              }
            : saveAccountTransition({
                context,
                transitionStep: step.label,
                completedSteps,
                currentStep: null,
              }),
      })
    }

    if (step.progress === false) {
      const result = await action()
      if (result === false) return false
    } else {
      const ok = await runTrackedStep({
        context,
        progress,
        step: step.label,
        nextStep,
        action,
      })
      if (!ok) return false
    }

    if (step.transition?.timing === "after") {
      applyStepTransition({
        context,
        progress,
        step,
        transition: step.transition,
      })
    }
  }
  return true
}

async function runAccountEntryFlow({ context, rule, credentialReaders }) {
  const signal = context.signal ?? new AbortController().signal
  const state = rule.state
  const credentials = {
    email: "",
    password: "",
  }
  const entryContext = {
    ...context,
    document: context.document,
    state,
    signal,
    credentials,
    onSubmit: () => ({
      pending: createEmptyPendingSubmit({
        context,
        state,
      }),
      didSubmit: false,
    }),
  }
  const runnableSteps = await filterRunnableSteps({
    context: entryContext,
    steps: rule.steps,
  })
  const progressSteps = toProgressSteps(runnableSteps)
  const progress = createAccountProgressTracker({
    state,
    steps: progressSteps,
    completedSteps: [],
    progressTitle: rule.progressTitle,
  })
  const firstStep = progressSteps[0]?.label ?? null
  progress.setCurrent(firstStep)
  await waitForPreAutofillFlowDebugStep(firstStep ?? "Start account entry", signal)
  if (isAborted(signal)) return

  const ok = await runAccountSteps({
    context: entryContext,
    credentialReaders,
    progress,
    steps: runnableSteps,
  })
  if (!ok) {
    stopFlowUnlessAborted(signal)
    preAutofillAccountTransitionSession.clear()
    return
  }

  if (rule.completeEntryProgress && !isAborted(signal)) {
    const userAutoFillResponse =
      useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse
    preAutofillAccountProgress.set({
      pageKind: state,
      steps: progressSteps,
      completedSteps: progress.getCompletedSteps(),
      currentStep: null,
      status: "completed",
      userAutoFillResponse,
      persistSession: false,
    })
    useAutofillResultStore.getState().stopCurrentFilling()
    activeAbortController = null
  }
}

async function runAccountFormFlow({ context, rule, credentialReaders }) {
  const signal = context.signal ?? new AbortController().signal
  const state = rule.state
  const credentials = await credentialReaders.getInitialCredentials()
  if (isAborted(signal)) return

  const session = preAutofillAccountFlowSession.get()
  const resumable = shouldResumeAccountSession(session, state)
  if (resumable) preAutofillAccountFlowSession.clear()

  const baseContext = {
    document: context.document,
    state,
    signal,
  }
  const formContext = {
    ...context,
    ...baseContext,
    entrySession: resumable ? session : null,
    credentials,
    onSubmit: () => ({
      pending: createEmptyPendingSubmit({
        context,
        state,
      }),
      didSubmit: false,
    }),
  }
  const runnableSteps = await filterRunnableSteps({
    context: formContext,
    steps: rule.steps,
  })
  if (isAborted(signal)) return

  const progressSteps = toProgressSteps(runnableSteps)
  const carriedSteps = getCarriedCompletedSteps({
    session,
    state,
    ruleProgressSteps: getProgressStepLabels(progressSteps),
  })
  const allSteps = [...carriedSteps, ...progressSteps]
  const progress = createAccountProgressTracker({
    state,
    steps: allSteps,
    completedSteps: carriedSteps,
  })
  const firstStep = progressSteps[0]?.label ?? null
  progress.setCurrent(firstStep)
  await waitForPreAutofillFlowDebugStep(firstStep ?? "Start account form", signal)
  if (isAborted(signal)) return

  const ok = await runAccountSteps({
    context: formContext,
    credentialReaders,
    progress,
    steps: runnableSteps,
  })
  if (!ok) {
    stopFlowUnlessAborted(signal)
    return
  }
  if (isAborted(signal)) return

  const userAutoFillResponse =
    useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse
  preAutofillAccountProgress.set({
    pageKind: state,
    steps: allSteps,
    completedSteps: progress.getCompletedSteps(),
    currentStep: null,
    status: "completed",
    userAutoFillResponse,
    persistSession: false,
  })
  useAutofillResultStore.getState().stopCurrentFilling()
  activeAbortController = null
}

export function resolvePreAutofillAccountTransition({ pending, currentUrl, currentMatch }) {
  if (currentUrl === pending.sourceUrl && currentMatch?.flowId === pending.flowId &&
    currentMatch.pageKind === pending.sourcePageKind) {
    return "still_on_source_page"
  }
  if (!currentMatch) return "start_standard_autofill"
  if (
    currentMatch.flowId === pending.flowId ||
    (pending.intent === "reset_password" &&
      currentMatch.flowId === "workday_account_flow" &&
      currentMatch.pageKind === "sign_in")
  ) {
    return "continue_account_flow"
  }
  return "ignore"
}

export const resolvePreAutofillAccountPendingSubmit = resolvePreAutofillAccountTransition

function restoreFlowSessionFromPending(pending) {
  if (pending.completedSteps?.length) {
    preAutofillAccountFlowSession.save({
      pageKind: pending.intent,
      completedSteps: pending.completedSteps,
      currentStep: pending.currentStep ?? null,
      status: "running",
    })
  }
}

function delay(ms) {
  if (!ms || ms <= 0) return Promise.resolve()
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function waitUntilStandardAutofillReady({ pending, canStartStandardAutofill }) {
  if (!canStartStandardAutofill || canStartStandardAutofill(pending)) {
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    let intervalId = null
    let shouldClearImmediately = false
    const check = () => {
      if (canStartStandardAutofill(pending)) {
        if (intervalId !== null) clearInterval(intervalId)
        else shouldClearImmediately = true
        resolve()
      }
    }
    intervalId = setInterval(check, PRE_AUTOFILL_ACCOUNT_STANDARD_READY_CHECK_INTERVAL_MS)
    if (shouldClearImmediately) clearInterval(intervalId)
  })
}

function publishSubmitError({ pending, submitError }) {
  const store = useAutofillResultStore.getState()
  const existing =
    store.autoFillResult?.userAutoFillResponse?.[PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY]
  const existingError = existing && typeof existing === "object" ? existing : null
  if (
    existingError?.message === submitError.message &&
    existingError.rawMessage === submitError.rawMessage
  ) {
    return
  }
  const submitStep = pending.submitStep ?? pending.transitionStep ?? null
  const labelsFromResult = store.autoFillResult?.fieldRequiredStatus
    ?.map((field) => field.label)
    .filter((label) => typeof label === "string" && !!label)
  const baseSteps = labelsFromResult?.length
    ? labelsFromResult
    : preAutofillAccountProgress.getSteps(pending.intent)
  const steps =
    submitStep && !baseSteps.includes(submitStep) ? [...baseSteps, submitStep] : baseSteps
  const completedSteps = submitStep
    ? appendCompletedPreAutofillStep(
        store.autoFillResult?.filledFields ?? pending.completedSteps ?? [],
        submitStep,
      )
    : (store.autoFillResult?.filledFields ?? pending.completedSteps ?? [])
  preAutofillAccountProgress.set({
    pageKind: pending.intent,
    steps,
    completedSteps,
    currentStep: null,
    status: "completed",
    persistSession: false,
    userAutoFillResponse: {
      [PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY]: submitError,
    },
  })
  store.setIsFilling(false)
}

function beginStandardAutofillUi() {
  const store = useAutofillResultStore.getState()
  store.setFillingMode("standard_autofill")
  store.setProgressTitle(null)
  store.setAutoFillResult(null)
  store.setHasClickedAutoFill(true)
  store.setIsFilling(true)
}

export async function consumePreAutofillAccountTransition({
  currentUrl,
  currentMatch,
  startCurrentPreAutofillFlow,
  startStandardAutofill,
  canStartStandardAutofill,
  hasStandardAutofillSignal,
  isTransitionInScope,
  standardAutofillStartDelayMs,
  onTransitionComplete,
  detectSourcePageSubmitError,
}) {
  const peeked = preAutofillAccountTransitionSession.peek()
  if (!peeked) return false

  const resolution = resolvePreAutofillAccountTransition({
    pending: peeked.payload,
    currentUrl,
    currentMatch,
  })

  if (resolution === "still_on_source_page") {
    await awaitSubmitErrorRefreshDelay()
    const submitError = await detectSourcePageSubmitError?.(peeked.payload)
    if (submitError) {
      publishSubmitError({
        pending: peeked.payload,
        submitError,
      })
    }
    return false
  }

  if (isTransitionInScope?.(peeked.payload) === false) {
    preAutofillAccountTransitionSession.consume()
    preAutofillAccountFlowSession.clear()
    useAutofillResultStore.getState().stopCurrentFilling()
    return true
  }

  if (
    resolution === "start_standard_autofill" &&
    (hasStandardAutofillSignal?.(peeked.payload) ?? canStartStandardAutofill?.(peeked.payload)) ===
      false
  ) {
    return false
  }

  const consumed = preAutofillAccountTransitionSession.consume()
  if (!consumed) return false
  preAutofillAccountFlowSession.clear()

  const nextResolution = resolvePreAutofillAccountTransition({
    pending: consumed.payload,
    currentUrl,
    currentMatch,
  })

  if (nextResolution === "continue_account_flow" && currentMatch) {
    restoreFlowSessionFromPending(consumed.payload)
    await startCurrentPreAutofillFlow(currentMatch)
  } else if (nextResolution === "start_standard_autofill") {
    beginStandardAutofillUi()
    await waitUntilStandardAutofillReady({
      pending: consumed.payload,
      canStartStandardAutofill,
    })
    await delay(standardAutofillStartDelayMs)
    await startStandardAutofill()
    await onTransitionComplete?.({
      currentUrl,
      pending: consumed.payload,
    })
  } else if (nextResolution === "still_on_source_page") {
    useAutofillResultStore.getState().stopCurrentFilling()
  }

  return true
}

export const consumePreAutofillAccountPendingSubmit = consumePreAutofillAccountTransition

export function createPreAutofillAccountFlowAdapter({ flowId, rules, ...credentialOptions }) {
  const pageRules = defineAccountPageRules(rules)
  const credentialReaders = createCredentialReaders(credentialOptions)
  return {
    flowId,
    detect: (context) =>
      resolvePreAutofillPageRule({
        flowId,
        pageRules,
        context,
      }),
    async start(context) {
      activeAbortController?.abort()
      activeAbortController = new AbortController()
      const rule = getRuleForMatch({
        rules,
        match: context.match,
      })
      if (!rule) return
      useAutofillResultStore.getState().setIsFilling(true)
      if (rule.entry) {
        await runAccountEntryFlow({
          context: {
            ...context,
            signal: activeAbortController.signal,
          },
          rule,
          credentialReaders,
        })
        return
      }
      await runAccountFormFlow({
        context: {
          ...context,
          signal: activeAbortController.signal,
        },
        rule,
        credentialReaders,
      })
    },
    shouldResume(context) {
      const rule = getRuleForMatch({
        rules,
        match: context.match,
      })
      return !!(
        rule &&
        !rule.entry &&
        shouldResumeAccountSession(preAutofillAccountFlowSession.get(), rule.state)
      )
    },
  }
}

function createCredentialReaders(options) {
  if ("getCredentials" in options) {
    return {
      getInitialCredentials: options.getCredentials,
      rereadCredential: () => options.getCredentials(),
    }
  }
  return {
    async getInitialCredentials() {
      const email = await options.getEmail()
      const password = await options.getPassword()
      return {
        email,
        password,
      }
    },
    async rereadCredential(credentials, credential) {
      if (credential === "email") {
        const email = await options.getEmail()
        const password = await options.getPassword().catch(() => credentials.password)
        return {
          ...credentials,
          email,
          password,
        }
      }
      const password = await options.getPassword()
      return {
        ...credentials,
        password,
      }
    },
  }
}
