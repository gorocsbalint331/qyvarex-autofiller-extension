// @ts-nocheck
/**
 * Detects Workday application submitted / congratulations state.
 */
import { useEffect, useState } from "react"
import { getTargetName } from "../contents/crawler/target.ts"
import { getFirstOrderedNodeSafe } from "../core/xpath.js"

function isWorkdaySubmittedPage() {
  return !!(
    window.location.pathname.includes("jobTasks/completed") ||
    getFirstOrderedNodeSafe("//h1[contains(text(), 'Congratulations')]")
  )
}

export default function useShowSubmitted() {
  const isMyWorkday = getTargetName() === "myworkday"
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (isMyWorkday) {
      if (isWorkdaySubmittedPage()) setSubmitted(true)
      else setSubmitted(false)
    }
  }, [isMyWorkday, submitted])

  useEffect(() => {
    if (!isMyWorkday) return
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          const congratulationsHeading = getFirstOrderedNodeSafe(
            "//h1[contains(text(), 'Congratulations')]",
          )
          if (congratulationsHeading) setSubmitted(true)
        }
      })
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
    return () => {
      observer.disconnect()
    }
  }, [])

  return submitted
}
