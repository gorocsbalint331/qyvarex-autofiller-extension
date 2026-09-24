// @ts-nocheck
/**
 * Zustand store for autofill progress / filling-session UI state.
 */

import { create } from "zustand"
import { applyAutofillProgressMessage } from "../core/autofill-progress-protocol.js"

export const useAutofillResultStore = create((set) => ({
  isFilling: false,
  setIsFilling: (isFilling) =>
    set({
      isFilling,
    }),
  stopCurrentFilling: () =>
    set((state) => ({
      isFilling: false,
      autoFillResult: state.autoFillResult
        ? {
            ...state.autoFillResult,
            currentField: null,
          }
        : state.autoFillResult,
    })),
  fillingMode: "standard_autofill",
  setFillingMode: (fillingMode) =>
    set({
      fillingMode,
    }),
  progressTitle: null,
  setProgressTitle: (progressTitle) =>
    set({
      progressTitle,
    }),
  hasClickedAutoFill: false,
  setHasClickedAutoFill: (hasClickedAutoFill) =>
    set({
      hasClickedAutoFill,
    }),
  autoFillResult: null,
  progressSessionId: null,
  setAutoFillResult: (autoFillResult) =>
    set({
      autoFillResult,
      progressSessionId: null,
    }),
  applyAutoFillProgressMessage: (message) =>
    set((state) => {
      const next = applyAutofillProgressMessage(
        {
          sessionId: state.progressSessionId,
          data: state.autoFillResult,
        },
        message,
      )
      return next.sessionId === state.progressSessionId &&
        next.data === state.autoFillResult
        ? state
        : {
            autoFillResult: next.data,
            progressSessionId: next.sessionId,
          }
    }),
}))
