// @ts-nocheck
/**
 * Register ATS pagination observers and schedule autofill after page/step changes.
 */

import { useState, useRef, useEffect } from "react"
import { getTargetName } from "../contents/crawler/target.js"
import {
  resolvePaginationAutofillStartDelay,
  getOracleCloudStepState,
  ORACLE_CLOUD_CONTINUE_EVENT,
  OBSERVER_LIST,
  shouldRegisterPaginationObserver,
} from "../core/pagenation.js"
import {
  shouldSuppressStandardAutofillForPreAutofillTransition,
  canStartPreAutofillStandardAutofill,
} from "../contents/pre-autofill-flow/registry.js"
import { useAutofillResultStore } from "../store/autofillResult.ts"
import { useProfileStore } from "../store/profile.ts"
import { useSettingStore } from "../store/setting.ts"
import { trackEvent } from "../utils/trace.ts"

export function usePaginationObserver(startAutofill) {
  const automaticallyTurnPage = useSettingStore(
    (state) => state.automaticallyTurnPage,
  )
  const hasClickedAutoFill = useAutofillResultStore(
    (state) => state.hasClickedAutoFill,
  )
  const [observerRevision, setObserverRevision] = useState(0)
  const userStage = useProfileStore((state) => state.userStage)
  const setIsFilling = useAutofillResultStore((state) => state.setIsFilling)
  const setAutoFillResult = useAutofillResultStore(
    (state) => state.setAutoFillResult,
  )
  const lastOracleTriggerAtRef = useRef(0)

  useEffect(() => {
    let pendingTimeoutId
    const targetName = getTargetName()

    const onPaginationAdvance = (detail) => {
      if ("oraclecloud" === targetName && !detail?.clearOnly) {
        const now = Date.now()
        if (now - lastOracleTriggerAtRef.current < 2500) return
        lastOracleTriggerAtRef.current = now
      }

      if (
        !detail?.clearOnly &&
        shouldSuppressStandardAutofillForPreAutofillTransition({
          targetName,
          canStartStandardAutofill: canStartPreAutofillStandardAutofill({
            targetName,
            url: window.location.href,
            document,
          }),
        })
      ) {
        if ("adpMyJobs" === targetName) {
          console.info("[ADP MyJobs][Pagination] Autofill suppressed", {
            reason: "pre-autofill-transition",
          })
        }
        return
      }

      setAutoFillResult(null)

      if (!detail?.clearOnly) {
        setIsFilling(true)
        const totalDelayMs = resolvePaginationAutofillStartDelay(detail?.delay)
        if ("adpMyJobs" === targetName) {
          console.info("[ADP MyJobs][Pagination] Autofill scheduled", {
            pageNumber: detail?.page_number ?? null,
            observerDelayMs: detail?.delay ?? 0,
            totalDelayMs,
          })
        }
        setTimeout(() => {
          setIsFilling(true)
          if ("adpMyJobs" === targetName) {
            console.info("[ADP MyJobs][Pagination] Autofill started", {
              pageNumber: detail?.page_number ?? null,
            })
          }
          startAutofill().catch((error) => {
            if ("adpMyJobs" === targetName) {
              console.error(
                "[ADP MyJobs][Pagination] Autofill start failed",
                {
                  errorName:
                    error instanceof Error ? error.name : "unknown",
                },
              )
              return
            }
            console.error(error)
          })
        }, totalDelayMs)
      }

      trackEvent("kafka_autofill_log", {
        user_id: userStage?.userId,
        currentUrl: window.location.href,
        fill_auto: !detail?.clearOnly,
        page_number: detail?.page_number,
        page_title: detail?.page_title,
      })
      setObserverRevision((revision) => revision + 1)
    }

    const onOracleCloudContinue = (event) => {
      if (!hasClickedAutoFill) return
      const detail =
        (event instanceof CustomEvent && event.detail) || {}
      const previousIndex = Number(detail.previousIndex)
      const stepState = getOracleCloudStepState()
      if (
        !stepState.isApplySection ||
        stepState.isTerminal ||
        (Number.isFinite(previousIndex) && stepState.index <= previousIndex)
      ) {
        return
      }
      onPaginationAdvance({
        delay: 200,
        page_number: stepState.pageNumber,
        page_title: stepState.title,
      })
    }

    if ("oraclecloud" === targetName) {
      window.addEventListener(
        ORACLE_CLOUD_CONTINUE_EVENT,
        onOracleCloudContinue,
      )
    }

    const hasObserver = !!OBSERVER_LIST[targetName]
    const shouldObserve = shouldRegisterPaginationObserver({
      siteName: targetName,
      automaticallyTurnPage,
      hasObserver,
    })

    if ("adpMyJobs" === targetName) {
      console.info("[ADP MyJobs][Pagination] observer registration", {
        automaticallyTurnPage,
        hasClickedAutoFill,
        hasObserver,
        shouldObserve,
      })
    }

    if (!shouldObserve) {
      return () => {
        if ("oraclecloud" === targetName) {
          window.removeEventListener(
            ORACLE_CLOUD_CONTINUE_EVENT,
            onOracleCloudContinue,
          )
        }
        clearTimeout(pendingTimeoutId)
      }
    }

    const observerPair = OBSERVER_LIST[targetName](
      onPaginationAdvance,
      hasClickedAutoFill,
    )
    const [startObserver, stopObserver] = observerPair || []

    startObserver?.()
    return () => {
      if ("oraclecloud" === targetName) {
        window.removeEventListener(
          ORACLE_CLOUD_CONTINUE_EVENT,
          onOracleCloudContinue,
        )
      }
      stopObserver?.()
      clearTimeout(pendingTimeoutId)
    }
  }, [hasClickedAutoFill, observerRevision, automaticallyTurnPage, startAutofill])
}
