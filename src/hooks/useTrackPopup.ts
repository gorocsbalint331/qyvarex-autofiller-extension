// @ts-nocheck
/**
 * Tracks autofill popup exposure events after a delay.
 */
import { isNil } from "lodash-es"
import { useEffect, useRef } from "react"
import { useProfileStore } from "../store/profile.ts"
import { trackEvent } from "../utils/trace.ts"

export function useTrackPopup(
  autoFillResult,
  isSupported,
  _unusedDependency,
  userStage,
  shouldTrack,
) {
  const isLoggedIn = !!userStage?.logined
  const userProfile = useProfileStore((state) => state.userProfile)
  const isProfileSetupComplete = userProfile?.step === 5
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    let status = null
    if (!isNil(autoFillResult) && shouldTrack) {
      status = isProfileSetupComplete
        ? isSupported
          ? "setup_support"
          : "setup_not_support"
        : isLoggedIn
          ? "not_setup_profile"
          : "not_setup_account"
      timeoutRef.current = setTimeout(() => {
        trackEvent("autofill_popup", {
          url: window.location.href,
          user_id: userStage?.userId,
          status,
        })
        timeoutRef.current = null
      }, 5e3)
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
      }
    }
  }, [
    autoFillResult,
    _unusedDependency,
    isSupported,
    isLoggedIn,
    isProfileSetupComplete,
    shouldTrack,
  ])
}
