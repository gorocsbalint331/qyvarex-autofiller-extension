// @ts-nocheck
/**
 * Keeps the fill-progress checklist in sync with fields the user edits by hand
 * after autofill finishes.
 */
import { useEffect } from "react"
import { getRuleFieldFilledState } from "../core/dom.ts"
import { useAutofillResultStore } from "../store/autofillResult.ts"

const PAGE_EVENTS = ["change", "input", "click"]
const SYNC_DELAY_MS = 150

export function useManualFieldSync(enabled) {
  useEffect(() => {
    if (!enabled) return
    let timeoutId
    const sync = () => {
      timeoutId = undefined
      useAutofillResultStore
        .getState()
        .syncFieldFilledStates(getRuleFieldFilledState)
    }
    const schedule = () => {
      window.clearTimeout(timeoutId)
      timeoutId = window.setTimeout(sync, SYNC_DELAY_MS)
    }
    for (const type of PAGE_EVENTS) {
      document.addEventListener(type, schedule, true)
    }
    return () => {
      window.clearTimeout(timeoutId)
      for (const type of PAGE_EVENTS) {
        document.removeEventListener(type, schedule, true)
      }
    }
  }, [enabled])
}
