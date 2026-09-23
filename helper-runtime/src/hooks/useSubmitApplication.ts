// @ts-nocheck
/**
 * Registers SubmitAgentApplication listener.
 */
import { useEffect } from "react"
import { submitAgentApplication } from "../core/utils.js"

export default function useSubmitApplication() {
  useEffect(() => {
    const onSubmitAgentApplication = (_event) => {
      submitAgentApplication()
    }
    document.addEventListener(
      "SubmitAgentApplication",
      onSubmitAgentApplication,
    )
    return () => {
      document.removeEventListener(
        "SubmitAgentApplication",
        onSubmitAgentApplication,
      )
    }
  }, [])
}
