// @ts-nocheck
/**
 * Zustand store for autofill progress / filling-session UI state.
 */

import { create } from "zustand"
import { applyAutofillProgressMessage } from "../core/autofill-progress-protocol.js"
import { normalizeFieldLabel } from "../utils/fieldLabel.ts"

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
  /** Reconcile filled/missing lists with on-page state (`readState` returns true/false/null). */
  syncFieldFilledStates: (readState) =>
    set((state) => {
      const result = state.autoFillResult
      if (!result?.fieldRequiredStatus?.length) return state
      let filledFields = [...(result.filledFields || [])]
      let missingFields = [...(result.missingFields || [])]
      let changed = false
      for (const step of result.fieldRequiredStatus) {
        const label = step?.label
        if (!label) continue
        const filledNow = readState(label)
        if (filledNow == null) continue
        const key = normalizeFieldLabel(label)
        const matches = (field) => normalizeFieldLabel(field) === key
        if (filledNow === filledFields.some(matches)) continue
        filledFields = filledFields.filter((field) => !matches(field))
        missingFields = missingFields.filter((field) => !matches(field))
        ;(filledNow ? filledFields : missingFields).push(label)
        changed = true
      }
      return changed
        ? { autoFillResult: { ...result, filledFields, missingFields } }
        : state
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
