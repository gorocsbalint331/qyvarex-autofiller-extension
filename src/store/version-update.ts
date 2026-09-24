// @ts-nocheck
/**
 * Zustand store for extension version-update UI phase and dismissal flags.
 */

import { create } from "zustand"

export const useVersionUpdateStore = create((set) => ({
  phase: "idle",
  setPhase: (phase) =>
    set({
      phase,
    }),
  dismissedNewVersion: false,
  setDismissedNewVersion: (dismissedNewVersion) =>
    set({
      dismissedNewVersion,
    }),
  updateCheckSuppressed: false,
  setUpdateCheckSuppressed: (updateCheckSuppressed) =>
    set({
      updateCheckSuppressed,
    }),
  dismissedReadyModal: false,
  setDismissedReadyModal: (dismissedReadyModal) =>
    set({
      dismissedReadyModal,
    }),
  openWhatsNewSheet: false,
  setOpenWhatsNewSheet: (openWhatsNewSheet) =>
    set({
      openWhatsNewSheet,
    }),
  sessionReadKeys: [],
  addSessionReadKey: (key) =>
    set((state) =>
      state.sessionReadKeys.includes(key)
        ? state
        : {
            sessionReadKeys: [...state.sessionReadKeys, key],
          },
    ),
  exposedNewVersion: false,
  setExposedNewVersion: (exposedNewVersion) =>
    set({
      exposedNewVersion,
    }),
  exposedWhatsNewEntry: false,
  setExposedWhatsNewEntry: (exposedWhatsNewEntry) =>
    set({
      exposedWhatsNewEntry,
    }),
  appliedEventReported: false,
  setAppliedEventReported: (appliedEventReported) =>
    set({
      appliedEventReported,
    }),
  lastUpdateFailReason: null,
  setLastUpdateFailReason: (lastUpdateFailReason) =>
    set({
      lastUpdateFailReason,
    }),
}))
