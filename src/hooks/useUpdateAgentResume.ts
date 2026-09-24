// @ts-nocheck
/**
 * Registers UpdateAgentResume listener for agent resume payload.
 */
import { useEffect } from "react"
import { useResumeStore } from "../store/resume.ts"

export default function useUpdateAgentResume() {
  const setAgentData = useResumeStore((state) => state.setAgentData)
  const setAgentTailorResume = useResumeStore(
    (state) => state.setAgentTailorResume,
  )

  useEffect(() => {
    const onUpdateAgentResume = (event) => {
      setAgentData(event.detail)
      if (event.detail?.tailorId) {
        setAgentTailorResume(event.detail.tailorId, event.detail?.resumeName)
      }
    }
    document.addEventListener("UpdateAgentResume", onUpdateAgentResume)
    return () => {
      document.removeEventListener("UpdateAgentResume", onUpdateAgentResume)
    }
  }, [setAgentData, setAgentTailorResume])
}
