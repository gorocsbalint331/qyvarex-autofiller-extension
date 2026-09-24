// @ts-nocheck
/**
 * Workday signup password field state and autofill sync.
 */
import { useCallback, useEffect, useRef, useState } from "react"
import { getWorkdaySignupInformation } from "../store/workday-signup-info.ts"

export const useSignupPassword = ({ open, activeSection }) => {
  const [signupPassword, setSignupPassword] = useState("")
  const [initialSignupPassword, setInitialSignupPassword] = useState("")
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isSignupPasswordLoaded, setIsSignupPasswordLoaded] = useState(false)
  const [isSignupPasswordTouched, setIsSignupPasswordTouched] = useState(false)
  const [showSignupPasswordErrors, setShowSignupPasswordErrors] =
    useState(false)
  const inputRef = useRef(null)
  const hasTouchedRef = useRef(false)

  useEffect(() => {
    if (!open) return
    let active = true
    hasTouchedRef.current = false
    setSignupPassword("")
    setInitialSignupPassword("")
    setIsSignupPasswordLoaded(false)
    setIsSignupPasswordTouched(false)
    setIsPasswordVisible(false)
    setShowSignupPasswordErrors(false)
    getWorkdaySignupInformation()
      .then((info) => {
        if (active) {
          const password = info?.password ?? ""
          setIsSignupPasswordLoaded(true)
          setInitialSignupPassword(password)
          if (!hasTouchedRef.current) {
            setSignupPassword(password)
            setIsSignupPasswordTouched(false)
          }
          setIsPasswordVisible(false)
          setShowSignupPasswordErrors(false)
        }
      })
      .catch(() => {
        if (active) {
          setIsSignupPasswordLoaded(false)
          setInitialSignupPassword("")
          if (!hasTouchedRef.current) {
            setSignupPassword("")
            setIsSignupPasswordTouched(false)
          }
          setIsPasswordVisible(false)
          setShowSignupPasswordErrors(false)
        }
      })
    return () => {
      active = false
    }
  }, [open])

  const syncPasswordValue = useCallback(
    (nextValue, options = {}) => {
      const value = nextValue ?? inputRef.current?.value ?? ""
      if (options.markTouched) {
        hasTouchedRef.current = true
        setIsSignupPasswordTouched(true)
      }
      setSignupPassword(value)
      if (value !== signupPassword) setShowSignupPasswordErrors(false)
    },
    [signupPassword],
  )

  const syncFromInput = useCallback(() => {
    syncPasswordValue()
  }, [syncPasswordValue])

  const syncFromInputOnFocus = useCallback(() => {
    window.setTimeout(syncFromInput, 0)
  }, [syncFromInput])

  useEffect(() => {
    if (!open || activeSection !== "signupInformation") return
    let pollCount = 0
    const pollInput = () => {
      const inputValue = inputRef.current?.value
      if (typeof inputValue === "string" && inputValue !== signupPassword) {
        syncPasswordValue(inputValue)
      }
      if ((pollCount += 1) >= 8) window.clearInterval(intervalId)
    }
    const intervalId = window.setInterval(pollInput, 250)
    pollInput()
    return () => {
      window.clearInterval(intervalId)
    }
  }, [activeSection, open, signupPassword, syncPasswordValue])

  return {
    signupPassword,
    initialSignupPassword,
    isSignupPasswordLoaded,
    isSignupPasswordTouched,
    setShowSignupPasswordErrors,
    passwordFieldProps: {
      inputRef,
      value: signupPassword,
      isVisible: isPasswordVisible,
      showErrors: showSignupPasswordErrors,
      onChange: (value) => syncPasswordValue(value, { markTouched: true }),
      onFocus: syncFromInputOnFocus,
      onBlur: syncFromInput,
      onKeyUp: syncFromInput,
      onToggleVisible: () => setIsPasswordVisible((visible) => !visible),
    },
  }
}
