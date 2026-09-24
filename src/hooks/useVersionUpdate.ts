// @ts-nocheck
/**
 * Extension version-update banner / modal state and update-check actions.
 */

import { useState, useRef, useCallback, useEffect } from "react"
import { sendToBackground } from "@plasmohq/messaging"
import { resolveVersionUiState } from "../core/version-update-ui.js"
import { useAutofillResultStore } from "../store/autofillResult.ts"
import { useProfileStore } from "../store/profile.ts"
import { useVersionUpdateStore } from "../store/version-update.ts"
import { trackEvent } from "../utils/trace.ts"

const UPDATE_READY_TIMEOUT_MS = 6e4
const UPDATE_POLL_INTERVAL_MS = 3e3

export function useVersionUpdate() {
  const userStage = useProfileStore((state) => state.userStage)
  const hasClickedAutoFill = useAutofillResultStore(
    (state) => state.hasClickedAutoFill,
  )
  const isFilling = useAutofillResultStore((state) => state.isFilling)
  const hasAutoFillResult = useAutofillResultStore(
    (state) => !!state.autoFillResult,
  )
  const phase = useVersionUpdateStore((state) => state.phase)
  const setPhase = useVersionUpdateStore((state) => state.setPhase)
  const dismissedNewVersion = useVersionUpdateStore(
    (state) => state.dismissedNewVersion,
  )
  const setDismissedNewVersion = useVersionUpdateStore(
    (state) => state.setDismissedNewVersion,
  )
  const updateCheckSuppressed = useVersionUpdateStore(
    (state) => state.updateCheckSuppressed,
  )
  const setUpdateCheckSuppressed = useVersionUpdateStore(
    (state) => state.setUpdateCheckSuppressed,
  )
  const dismissedReadyModal = useVersionUpdateStore(
    (state) => state.dismissedReadyModal,
  )
  const setDismissedReadyModal = useVersionUpdateStore(
    (state) => state.setDismissedReadyModal,
  )
  const setOpenWhatsNewSheet = useVersionUpdateStore(
    (state) => state.setOpenWhatsNewSheet,
  )
  const sessionReadKeys = useVersionUpdateStore(
    (state) => state.sessionReadKeys,
  )
  const appliedEventReported = useVersionUpdateStore(
    (state) => state.appliedEventReported,
  )
  const setAppliedEventReported = useVersionUpdateStore(
    (state) => state.setAppliedEventReported,
  )
  const setLastUpdateFailReason = useVersionUpdateStore(
    (state) => state.setLastUpdateFailReason,
  )

  const [releaseConfig, setReleaseConfig] = useState(null)
  const [versionUpdateState, setVersionUpdateState] = useState(null)
  const [refreshSubmitting, setRefreshSubmitting] = useState(false)
  const readyTimeoutRef = useRef(null)
  const pollIntervalRef = useRef(null)

  const clearTimers = useCallback(() => {
    if (readyTimeoutRef.current) {
      clearTimeout(readyTimeoutRef.current)
      readyTimeoutRef.current = null
    }
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current)
      pollIntervalRef.current = null
    }
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  useEffect(() => {
    const store = useVersionUpdateStore.getState()
    if ("idle" !== store.phase) store.setPhase("idle")
    if (store.openWhatsNewSheet) store.setOpenWhatsNewSheet(false)
    store.setLastUpdateFailReason(null)
  }, [])

  useEffect(() => {
    let cancelled = false
    sendToBackground({
      name: "getReleaseConfig",
    })
      .then((config) => {
        if (!cancelled) setReleaseConfig(config ?? null)
      })
      .catch(() => {
        if (!cancelled) setReleaseConfig(null)
      })
    sendToBackground({
      name: "getVersionUpdateState",
    })
      .then((state) => {
        if (!cancelled) setVersionUpdateState(state ?? null)
      })
      .catch(() => {
        if (!cancelled) setVersionUpdateState(null)
      })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (versionUpdateState?.appliedEvent && !appliedEventReported) {
      setAppliedEventReported(true)
      trackEvent(
        "autofill_version_update_applied_result",
        versionUpdateState.appliedEvent,
      )
    }
  }, [versionUpdateState, appliedEventReported, setAppliedEventReported])

  const localVersion = versionUpdateState?.localVersion ?? ""
  const userId = userStage?.userId ? String(userStage.userId) : null
  const whatsNewReadKeys = new Set(
    Object.keys(versionUpdateState?.whatsNewRead?.read ?? {}),
  )
  for (const key of sessionReadKeys) whatsNewReadKeys.add(key)

  const autofillStarted =
    hasClickedAutoFill || isFilling || hasAutoFillResult
  const logined = !!userStage?.logined
  const suppressUi = !logined || autofillStarted

  const versionUiState = versionUpdateState
    ? resolveVersionUiState({
        logined,
        userId,
        autofillStarted,
        localVersion,
        releaseConfig,
        updateReadyVersion:
          null === versionUpdateState.updateReady
            ? void 0
            : versionUpdateState.updateReady.version,
        lifecycleTransition:
          versionUpdateState.lifecycle?.transition ?? null,
        whatsNewReadKeys,
        sessionDismissedNewVersion: dismissedNewVersion,
      })
    : {
        kind: "hidden",
      }

  const targetVersion = releaseConfig?.version ?? null

  const startReadyPolling = useCallback(
    (onReady) => {
      if (!pollIntervalRef.current) {
        pollIntervalRef.current = setInterval(async () => {
          try {
            const state = await sendToBackground({
              name: "getVersionUpdateState",
            })
            if (state?.updateReady) {
              clearTimers()
              setVersionUpdateState(state)
              onReady()
            }
          } catch {
            // ignore poll errors
          }
        }, UPDATE_POLL_INTERVAL_MS)
      }
    },
    [clearTimers],
  )

  const handleUpdateReady = useCallback(() => {
    setPhase("ready")
    setDismissedReadyModal(false)
    trackEvent("autofill_version_update_result", {
      local_version: localVersion,
      target_version: targetVersion,
      result_status: "update_ready",
    })
  }, [localVersion, targetVersion, setPhase, setDismissedReadyModal])

  const handleUpdateUnavailable = useCallback(
    (failReason) => {
      clearTimers()
      setPhase("unavailable")
      setLastUpdateFailReason(failReason)
      if ("throttled" === failReason) setUpdateCheckSuppressed(true)
      trackEvent("autofill_version_update_result", {
        local_version: localVersion,
        target_version: targetVersion,
        result_status: "update_not_available",
        fail_reason: failReason,
      })
      startReadyPolling(handleUpdateReady)
    },
    [
      clearTimers,
      localVersion,
      targetVersion,
      startReadyPolling,
      handleUpdateReady,
      setPhase,
      setLastUpdateFailReason,
      setUpdateCheckSuppressed,
    ],
  )

  const onClickUpdate = useCallback(() => {
    if ("idle" !== phase || updateCheckSuppressed) return
    setPhase("updating")
    sendToBackground({
      name: "requestExtensionUpdateCheck",
    })
      .then((result) => {
        if (result?.kind === "update_ready") {
          readyTimeoutRef.current = setTimeout(() => {
            clearTimers()
            handleUpdateUnavailable("timeout")
          }, UPDATE_READY_TIMEOUT_MS)
          startReadyPolling(handleUpdateReady)
          return
        }
        handleUpdateUnavailable(result?.failReason ?? "runtime_error")
      })
      .catch(() => handleUpdateUnavailable("runtime_error"))
  }, [
    phase,
    updateCheckSuppressed,
    setPhase,
    clearTimers,
    handleUpdateReady,
    handleUpdateUnavailable,
    startReadyPolling,
  ])

  const onClickLaterNewVersion = useCallback(() => {
    setDismissedNewVersion(true)
  }, [setDismissedNewVersion])

  const refreshTargetVersion =
    versionUpdateState?.updateReady?.version ?? targetVersion

  const onClickRefresh = useCallback(() => {
    if (refreshSubmitting) return
    setRefreshSubmitting(true)
    const markRefresh = refreshTargetVersion
      ? sendToBackground({
          name: "markRefreshRequested",
          body: {
            targetVersion: refreshTargetVersion,
          },
        }).catch(() => {})
      : Promise.resolve()
    markRefresh.then(() =>
      sendToBackground({
        name: "reloadExtension",
      }).catch(() => {
        setRefreshSubmitting(false)
      }),
    )
  }, [refreshSubmitting, refreshTargetVersion])

  const onClickLaterReady = useCallback(() => {
    setDismissedReadyModal(true)
    if ("ready" === phase) setPhase("idle")
  }, [phase, setPhase, setDismissedReadyModal])

  const onClickTryAgainLater = useCallback(() => {
    clearTimers()
    setPhase("idle")
    setDismissedNewVersion(true)
  }, [clearTimers, setPhase, setDismissedNewVersion])

  const onOpenWhatsNew = useCallback(() => {
    setOpenWhatsNewSheet(true)
  }, [setOpenWhatsNewSheet])

  let banner = {
    kind: "hidden",
  }
  let readyModalOpen = false
  let unavailableModalOpen = false

  if (
    !(
      suppressUi ||
      ("hidden" === versionUiState.kind && "idle" === phase)
    )
  ) {
    if ("updating" === phase && targetVersion) {
      banner = {
        kind: "updating",
        targetVersion,
      }
    } else if ("unavailable" === phase) {
      unavailableModalOpen = true
    } else if ("ready" === phase) {
      readyModalOpen = !dismissedReadyModal
    } else if ("update_ready_modal" === versionUiState.kind) {
      readyModalOpen = !dismissedReadyModal
    } else if ("new_version" === versionUiState.kind) {
      banner = {
        kind: "new_version",
        targetVersion: versionUiState.targetVersion,
      }
    } else if ("whats_new_entry" === versionUiState.kind) {
      banner = {
        kind: "whats_new_entry",
        version: versionUiState.version,
        releasedAt: releaseConfig?.releasedAt ?? null,
      }
    }
  }

  return {
    banner,
    readyModalOpen,
    unavailableModalOpen,
    refreshTargetVersion,
    refreshSubmitting,
    localVersion,
    releaseConfig,
    onClickUpdate,
    onClickLaterNewVersion,
    onClickRefresh,
    onClickLaterReady,
    onClickTryAgainLater,
    onOpenWhatsNew,
  }
}
