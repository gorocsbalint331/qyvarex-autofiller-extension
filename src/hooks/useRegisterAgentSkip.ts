// @ts-nocheck
/**
 * Registers SkipAutoFill listener for agent skip.
 */
import { useEffect } from "react"
import { getAutofillInstance } from "../helper-shims/host.ts"
import { skipIframeAutofill } from "../core/utils.js"

export default function useRegisterAgentSkip() {
  useEffect(() => {
    const onSkipAutoFill = () => {
      const instance = getAutofillInstance()
      if (instance && typeof instance.skip === "function") instance.skip()
      skipIframeAutofill()
    }
    document.addEventListener("SkipAutoFill", onSkipAutoFill)
    return () => {
      document.removeEventListener("SkipAutoFill", onSkipAutoFill)
    }
  }, [])
}
