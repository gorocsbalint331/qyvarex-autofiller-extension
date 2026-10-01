// @ts-nocheck
/**
 * Keeps the fill-progress checklist in sync with fields the user edits by hand
 * after autofill finishes.
 */
import { useEffect } from "react"
import { getRuleFieldFilledState } from "../core/dom.ts"
import { useAutofillResultStore } from "../store/autofillResult.ts"

// keyup/focusout cover dropdown options picked with the keyboard.
const PAGE_EVENTS = ["change", "input", "click", "keyup", "focusout"]
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
    schedule()
    return () => {
      window.clearTimeout(timeoutId)
      for (const type of PAGE_EVENTS) {
        document.removeEventListener(type, schedule, true)
      }
    }
  }, [enabled])
}
