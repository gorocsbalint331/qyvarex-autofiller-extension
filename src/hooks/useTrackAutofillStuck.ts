// @ts-nocheck
/**
 * Tracks autofill stuck / long-duration completion analytics.
 */
import { useEffect, useRef } from "react"
import { useAutofillResultStore } from "../store/autofillResult.ts"
import { trackEvent } from "../utils/trace.ts"

const STUCK_THRESHOLD_MS = 3e4

export function useTrackAutofillStuck() {
  const isFilling = useAutofillResultStore((state) => state.isFilling)
  const fillStartedAtRef = useRef(null)
  const stuckTimeoutRef = useRef(null)

  useEffect(() => {
    if (isFilling) {
      fillStartedAtRef.current = Date.now()
      stuckTimeoutRef.current = setTimeout(() => {
        trackEvent("autofill_stuck_after_30s", {
          url: window.top.location.href,
        })
      }, STUCK_THRESHOLD_MS)
    } else {
      if (stuckTimeoutRef.current) {
        clearTimeout(stuckTimeoutRef.current)
        stuckTimeoutRef.current = null
      }
      if (fillStartedAtRef.current) {
        const endedAt = Date.now()
        const durationMs = endedAt - fillStartedAtRef.current
        if (durationMs > STUCK_THRESHOLD_MS) {
          const durationSeconds = durationMs / 1e3
          trackEvent("autofill_long_duration_completed", {
            url: window.top.location.href,
            duration_seconds: parseFloat(durationSeconds.toFixed(2)),
          })
        }
        fillStartedAtRef.current = null
      }
    }
    return () => {
      if (stuckTimeoutRef.current) clearTimeout(stuckTimeoutRef.current)
    }
  }, [isFilling])
}
