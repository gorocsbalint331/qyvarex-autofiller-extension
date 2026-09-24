// @ts-nocheck
/**
 * Registers CancelAutoFill listener for agent cancel.
 */
import { useEffect } from "react"
import {
  cancelAutofillInstance,
  getAutofillInstance,
} from "../helper-shims/host.ts"
import { cancelPreAutofillAccountFlow } from "../contents/pre-autofill-flow/account-flow.ts"
import { cancelIframeAutofill } from "../core/utils.js"

export default function useRegisterAgentCancel() {
  useEffect(() => {
    const onCancelAutoFill = () => {
      cancelPreAutofillAccountFlow()
      cancelAutofillInstance(getAutofillInstance())
      cancelIframeAutofill()
    }
    document.addEventListener("CancelAutoFill", onCancelAutoFill)
    return () => {
      document.removeEventListener("CancelAutoFill", onCancelAutoFill)
    }
  }, [])
}
