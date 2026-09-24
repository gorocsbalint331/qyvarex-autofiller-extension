// @ts-nocheck
/**
 * Delays exposing the autofill skip control for a field.
 */
import { useEffect, useState } from "react"
import { trackEvent } from "../utils/trace.ts"

export function useSkipTimer(fieldName, delayMs = 2e3) {
  const [exposedFieldName, setExposedFieldName] = useState(null)

  useEffect(() => {
    if (!fieldName) {
      setExposedFieldName(null)
      return
    }
    const timeoutId = window.setTimeout(() => {
      setExposedFieldName(fieldName)
      trackEvent("autofill_skip_exposure", {
        current_field_name: fieldName,
      })
    }, delayMs)
    return () => {
      window.clearTimeout(timeoutId)
      setExposedFieldName(null)
    }
  }, [fieldName, delayMs])

  return exposedFieldName
}
