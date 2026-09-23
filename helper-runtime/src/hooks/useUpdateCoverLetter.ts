// @ts-nocheck
/**
 * Registers UpdateAgentCoverLetter listener.
 */
import { useEffect } from "react"
import { hasValidCoverLetter } from "../store/cover-letter-state.ts"
import { useResumeStore } from "../store/resume.ts"

export default function useUpdateCoverLetter() {
  const setAgentCoverLetter = useResumeStore(
    (state) => state.setAgentCoverLetter,
  )

  useEffect(() => {
    const onUpdateAgentCoverLetter = (event) => {
      const coverLetter = {
        coverLetterId: event.detail?.coverLetterId,
        coverLetterName: event.detail?.coverLetterName,
      }
      if (hasValidCoverLetter(coverLetter)) setAgentCoverLetter(coverLetter)
    }
    document.addEventListener(
      "UpdateAgentCoverLetter",
      onUpdateAgentCoverLetter,
    )
    return () => {
      document.removeEventListener(
        "UpdateAgentCoverLetter",
        onUpdateAgentCoverLetter,
      )
    }
  }, [setAgentCoverLetter])
}
