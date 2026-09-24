// @ts-nocheck
/**
 * Runs matched pre-autofill flows and account-transition resume/consume logic.
 */

import { useState, useRef, useCallback, useEffect } from "react"
import {
  PRE_AUTOFILL_ACCOUNT_TRANSITION_CHANGED_EVENT,
  PRE_AUTOFILL_ACCOUNT_TRANSITION_TTL_MS,
  preAutofillAccountTransitionSession,
  consumePreAutofillAccountTransition,
} from "../contents/pre-autofill-flow/account-flow.ts"
import {
  waitForPreAutofillFlowDebugStep,
  startPreAutofillFlow,
  shouldResumePreAutofillFlow,
  resolvePreAutofillFlow,
} from "../contents/pre-autofill-flow/core.ts"
import {
  PRE_AUTOFILL_FLOW_REGISTRY,
  canStartPreAutofillStandardAutofill,
  hasPreAutofillStandardAutofillSignal,
  getPreAutofillStandardAutofillStartDelayMs,
  getPreAutofillAccountTransitionCompleteHandler,
  isPreAutofillAccountTransitionInScope,
  detectPreAutofillAccountSourcePageSubmitError,
} from "../contents/pre-autofill-flow/registry.ts"
import { sendWorkdayAccountSubmitWarningExposure } from "../contents/pre-autofill-flow/tracking.ts"
import { useAutofillResultStore } from "../store/autofillResult.ts"
import { usePreAutofillFlow } from "./usePreAutofillFlow.ts"

const ACCOUNT_TRANSITION_POLL_MS = 1e3

export function usePreAutofillFlowRunner({
  targetName,
  url,
  isFilling,
  startStandardAutofill,
  onFlowStart,
  onAccountTransitionStart,
  onAccountTransitionError,
}) {
  const setIsFilling = useAutofillResultStore((state) => state.setIsFilling)
  const setFillingMode = useAutofillResultStore(
    (state) => state.setFillingMode,
  )
  const setProgressTitle = useAutofillResultStore(
    (state) => state.setProgressTitle,
  )
  const [consumeRevision, setConsumeRevision] = useState(0)
  const [transitionRevision, setTransitionRevision] = useState(0)
  const submitErrorDedupeKeysRef = useRef(/* @__PURE__ */ new Set())
  const lastSubmitErrorKeyRef = useRef(null)
  const lastSubmitErrorMessageTypeRef = useRef(null)

  const match = usePreAutofillFlow({
    targetName,
    url,
    enabled: !isFilling,
  })

  const bumpConsumeRevision = useCallback(() => {
    setConsumeRevision((revision) => revision + 1)
  }, [])

  const startMatchedFlow = useCallback(async () => {
    if (!match) return false
    onFlowStart?.()
    setFillingMode("pre_autofill_flow")
    setProgressTitle(null)
    setIsFilling(true)
    await waitForPreAutofillFlowDebugStep("Scanning the page")
    try {
      const started = await startPreAutofillFlow({
        targetName,
        url,
        document,
        match,
        registry: PRE_AUTOFILL_FLOW_REGISTRY,
        startStandardAutofill,
      })
      if (!started) setIsFilling(false)
      return started
    } catch (error) {
      console.error(error)
      setIsFilling(false)
      return true
    }
  }, [
    match,
    onFlowStart,
    setFillingMode,
    setIsFilling,
    setProgressTitle,
    startStandardAutofill,
    targetName,
    url,
  ])

  useEffect(() => {
    if (!match || isFilling) return

    const shouldResume = shouldResumePreAutofillFlow({
      targetName,
      url,
      document,
      match,
      registry: PRE_AUTOFILL_FLOW_REGISTRY,
      startStandardAutofill,
    })
    if (!shouldResume) return

    let cancelled = false
    onFlowStart?.()
    setFillingMode("signup_autofill_flow")
    setIsFilling(true)
    startPreAutofillFlow({
      targetName,
      url,
      document,
      match,
      registry: PRE_AUTOFILL_FLOW_REGISTRY,
      startStandardAutofill,
    }).catch((error) => {
      console.error(error)
      if (!cancelled) setIsFilling(false)
    })
    return () => {
      cancelled = true
    }
  }, [
    isFilling,
    match,
    onFlowStart,
    setFillingMode,
    setIsFilling,
    startStandardAutofill,
    targetName,
    url,
  ])

  useEffect(() => {
    const onTransitionChanged = () => {
      onAccountTransitionStart?.()
      setTransitionRevision((revision) => revision + 1)
      bumpConsumeRevision()
    }
    window.addEventListener(
      PRE_AUTOFILL_ACCOUNT_TRANSITION_CHANGED_EVENT,
      onTransitionChanged,
    )
    return () => {
      window.removeEventListener(
        PRE_AUTOFILL_ACCOUNT_TRANSITION_CHANGED_EVENT,
        onTransitionChanged,
      )
    }
  }, [onAccountTransitionStart, bumpConsumeRevision])

  useEffect(() => {
    if (!preAutofillAccountTransitionSession.peek()) return

    onAccountTransitionStart?.()

    let cancelled = false
    let animationFrameId = 0

    const scheduleRefresh = () => {
      if (cancelled) return
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId)
      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = 0
        if (!cancelled) bumpConsumeRevision()
      })
    }

    const observeRoot = document.body || document.documentElement
    const mutationObserver =
      observeRoot && "undefined" != typeof MutationObserver
        ? new MutationObserver(scheduleRefresh)
        : null

    mutationObserver?.observe(observeRoot, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [
        "data-automation-id",
        "aria-label",
        "role",
        "class",
        "style",
      ],
    })

    const pollIntervalId = window.setInterval(
      scheduleRefresh,
      ACCOUNT_TRANSITION_POLL_MS,
    )
    const ttlTimeoutId = window.setTimeout(() => {
      window.clearInterval(pollIntervalId)
    }, PRE_AUTOFILL_ACCOUNT_TRANSITION_TTL_MS)

    scheduleRefresh()

    return () => {
      cancelled = true
      mutationObserver?.disconnect()
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId)
      window.clearInterval(pollIntervalId)
      window.clearTimeout(ttlTimeoutId)
    }
  }, [
    isFilling,
    onAccountTransitionStart,
    bumpConsumeRevision,
    targetName,
    transitionRevision,
    url,
  ])

  useEffect(() => {
    if (!preAutofillAccountTransitionSession.peek()) return

    let cancelled = false
    const currentMatch = resolvePreAutofillFlow({
      targetName,
      url,
      document,
      registry: PRE_AUTOFILL_FLOW_REGISTRY,
    })

    consumePreAutofillAccountTransition({
      currentUrl: url,
      currentMatch,
      startCurrentPreAutofillFlow: async (flowMatch) => {
        onFlowStart?.()
        setFillingMode("signup_autofill_flow")
        setIsFilling(true)
        await startPreAutofillFlow({
          targetName,
          url,
          document,
          match: flowMatch,
          registry: PRE_AUTOFILL_FLOW_REGISTRY,
          startStandardAutofill,
        })
      },
      startStandardAutofill,
      canStartStandardAutofill: () =>
        canStartPreAutofillStandardAutofill({
          targetName,
          url,
          document,
        }),
      hasStandardAutofillSignal: () =>
        hasPreAutofillStandardAutofillSignal({
          targetName,
          url,
          document,
        }),
      standardAutofillStartDelayMs:
        getPreAutofillStandardAutofillStartDelayMs({
          targetName,
          url,
          document,
        }),
      onTransitionComplete:
        getPreAutofillAccountTransitionCompleteHandler(targetName),
      isTransitionInScope: (pending) =>
        isPreAutofillAccountTransitionInScope({
          targetName,
          url,
          pending,
        }),
      detectSourcePageSubmitError: async (pending) => {
        const session = preAutofillAccountTransitionSession.peek()
        if (!session) return null

        const dedupeKey = [
          session.createdAt,
          pending.flowId,
          pending.sourceUrl,
          pending.sourcePageKind,
          pending.transitionStep ?? pending.submitStep ?? "",
        ].join("|")

        if (submitErrorDedupeKeysRef.current.has(dedupeKey)) return null
        submitErrorDedupeKeysRef.current.add(dedupeKey)

        try {
          const submitError =
            await detectPreAutofillAccountSourcePageSubmitError({
              targetName,
              url,
              document,
              pending,
            })
          const errorKey = submitError
            ? [submitError.message, submitError.rawMessage ?? ""].join("|")
            : null

          if (errorKey) {
            if (!cancelled) {
              if (
                submitError.messageType &&
                lastSubmitErrorMessageTypeRef.current !==
                  submitError.messageType
              ) {
                lastSubmitErrorMessageTypeRef.current =
                  submitError.messageType
                sendWorkdayAccountSubmitWarningExposure({
                  targetName,
                  url,
                  pending,
                  submitError,
                })
              }
              if (lastSubmitErrorKeyRef.current !== errorKey) {
                lastSubmitErrorKeyRef.current = errorKey
                onAccountTransitionError?.()
              }
            }
          } else {
            lastSubmitErrorKeyRef.current = null
            lastSubmitErrorMessageTypeRef.current = null
          }

          return submitError
        } finally {
          submitErrorDedupeKeysRef.current.delete(dedupeKey)
        }
      },
    }).catch((error) => {
      console.error(error)
      if (!cancelled) setIsFilling(false)
    })

    return () => {
      cancelled = true
    }
  }, [
    isFilling,
    match,
    onAccountTransitionError,
    onAccountTransitionStart,
    onFlowStart,
    setFillingMode,
    setIsFilling,
    startStandardAutofill,
    targetName,
    consumeRevision,
    url,
  ])

  return {
    match,
    ctaText: match?.ctaText ?? "Autofill",
    startMatchedFlow,
  }
}
