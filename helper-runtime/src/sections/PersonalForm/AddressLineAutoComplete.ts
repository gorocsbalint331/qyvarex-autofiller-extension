// @ts-nocheck
/**
 * Address line autocomplete with background suggestion resolution.
 */

import { useEffect, useMemo, useRef, useState } from "react"
import { jsx } from "react/jsx-runtime"
import { useRequest } from "ahooks"
import { AutoComplete } from "antd"
import { sendToBackground } from "@plasmohq/messaging"
import {
  ADDRESS_SUGGESTION_DEBOUNCE_WAIT,
  createAddressSuggestionSession,
  getAddressSuggestionOptions,
  getAddressSuggestionRequestParams,
  getResolvedAddressPersonalPatch,
  isAddressSuggestionQueryEligible,
  shouldApplyAddressSuggestionResponse,
} from "./address-suggestion.ts"

export function AddressLineAutoComplete({
  value,
  personal,
  placeholder,
  className,
  popupClassName,
  onFocus,
  onChange,
  onResolvedAddress,
}) {
  const sessionRef = useRef(createAddressSuggestionSession())
  const latestQueryRef = useRef("")
  const pendingPlaceIdRef = useRef(null)
  const pendingDisplayAddressRef = useRef("")
  const currentValueRef = useRef(value)
  const isFocusedRef = useRef(false)
  const [options, setOptions] = useState([])
  const [open, setOpen] = useState(false)
  const suggestionOptions = useMemo(() => options, [options])

  useEffect(() => {
    currentValueRef.current = value
  }, [value])

  const clearSuggestions = () => {
    setOpen(false)
    setOptions([])
  }

  const { run: fetchSuggestions, cancel: cancelFetch } = useRequest(
    async (input, country) => {
      const request = sessionRef.current.startRequest(input)
      if (!request) return null
      return await sendToBackground({
        name: "getAddressSuggestions",
        body: getAddressSuggestionRequestParams(
          request.input,
          request.sessionToken,
          country,
        ),
      })
    },
    {
      manual: true,
      debounceWait: ADDRESS_SUGGESTION_DEBOUNCE_WAIT,
      onSuccess: (response, params) => {
        if (response === null) return
        const [requestInput] = params
        if (
          !isFocusedRef.current ||
          !shouldApplyAddressSuggestionResponse(
            requestInput,
            latestQueryRef.current,
          )
        ) {
          return
        }
        const nextOptions = getAddressSuggestionOptions(
          Array.isArray(response) ? response : [],
        )
        setOptions(nextOptions)
        setOpen(nextOptions.length > 0)
      },
      onError: () => {
        clearSuggestions()
      },
    },
  )

  const { runAsync: resolveSuggestion } = useRequest(
    async (placeId, sessionToken) =>
      await sendToBackground({
        name: "resolveAddressSuggestion",
        body: { placeId, sessionToken },
      }),
    { manual: true },
  )

  const requestSuggestions = (input) => {
    const trimmed = input.trim()
    cancelFetch()
    latestQueryRef.current = trimmed
    if (!isAddressSuggestionQueryEligible(trimmed)) {
      clearSuggestions()
      return
    }
    fetchSuggestions(trimmed, personal.country)
  }

  const handleChange = (nextValue) => {
    if (suggestionOptions.some((option) => option.value === nextValue)) return
    currentValueRef.current = nextValue
    pendingPlaceIdRef.current = null
    pendingDisplayAddressRef.current = ""
    clearSuggestions()
    latestQueryRef.current = nextValue.trim()
    onChange(nextValue)
    requestSuggestions(nextValue)
  }

  const handleSelect = async (_value, option) => {
    const { placeId, displayAddress } = option.originData
    if (!placeId) return

    const selectedPlaceId = placeId
    const sessionToken = sessionRef.current.getToken()
    sessionRef.current.completeSession(sessionToken)
    pendingPlaceIdRef.current = selectedPlaceId
    pendingDisplayAddressRef.current = displayAddress ?? ""
    cancelFetch()
    latestQueryRef.current = ""
    clearSuggestions()

    if (displayAddress) {
      currentValueRef.current = displayAddress
      onChange(displayAddress)
    }

    try {
      const resolved = await resolveSuggestion(selectedPlaceId, sessionToken)
      const isSamePlace = pendingPlaceIdRef.current === selectedPlaceId
      const isSameDisplay =
        pendingDisplayAddressRef.current.trim() ===
        currentValueRef.current.trim()
      if (!isSamePlace || !isSameDisplay) return

      const patch = getResolvedAddressPersonalPatch(personal, resolved)
      if (Object.keys(patch).length > 0) onResolvedAddress(patch)
    } catch (error) {
      console.warn(
        "[AutofillInfoModal] address suggestion resolve failed",
        error,
      )
    }
  }

  const handleFocus = (event) => {
    isFocusedRef.current = true
    onFocus(event)
  }

  const handleBlur = () => {
    isFocusedRef.current = false
    cancelFetch()
    clearSuggestions()
  }

  const handleDropdownVisibleChange = (visible) => {
    if (!visible || !isFocusedRef.current) {
      clearSuggestions()
      return
    }
    setOpen(suggestionOptions.length > 0)
  }

  return jsx(AutoComplete, {
    allowClear: false,
    defaultActiveFirstOption: false,
    value,
    options: suggestionOptions,
    open,
    placeholder,
    className,
    popupClassName,
    filterOption: false,
    onChange: handleChange,
    onSelect: handleSelect,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onDropdownVisibleChange: handleDropdownVisibleChange,
  })
}
