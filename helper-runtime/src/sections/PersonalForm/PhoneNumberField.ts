// @ts-nocheck
/**
 * intl-tel-input phone field for the personal autofill form.
 */

import { useCallback, useEffect, useMemo, useRef } from "react"
import { jsx } from "react/jsx-runtime"
import IntlTelInput, { intlTelInput } from "intl-tel-input/react"
import { COUNTRY_OPTIONS } from "../../constants/country.ts"
import { formatPhoneCountryCode } from "../../utils/phone-country-code.ts"
import {
  applyPhoneWidgetSyncAction,
  createPhoneInputInitOptions,
  getPhoneWidgetSyncAction,
  isPhoneCountryDropdownClick,
  resolveInitialPhoneCountryIso2,
  resolvePhoneDropdownHeight,
  resolvePhoneDropdownPosition,
  splitIntlPhoneValue,
} from "./phone-number.ts"

const phoneCountries = intlTelInput.getCountryData()

export function PhoneNumberField({
  country,
  phoneCountryCode,
  phone,
  popupContainer,
  onFocus,
  onChange,
}) {
  const inputRef = useRef(null)
  const isSyncingRef = useRef(false)
  const isUserEditingRef = useRef(false)
  const lastUserValueRef = useRef(null)
  const lastExternalValueRef = useRef({ phoneCountryCode, phone })

  const initialCountry = useMemo(
    () =>
      resolveInitialPhoneCountryIso2({
        country,
        phoneCountryCode,
        countryOptions: COUNTRY_OPTIONS,
        phoneCountries,
      }),
    [country, phoneCountryCode],
  )

  const initialValue = useMemo(() => {
    const action = getPhoneWidgetSyncAction({
      initialCountry,
      phoneCountryCode,
      phone,
      lastUserValue: null,
    })
    return action.type === "national" || action.type === "international"
      ? action.phoneNumber
      : ""
  }, [initialCountry, phone, phoneCountryCode])

  const getFormattedDialCode = useCallback(() => {
    const selected = inputRef.current?.getInstance()?.getSelectedCountryData()
    return formatPhoneCountryCode(selected?.dialCode, selected?.name)
  }, [])

  const positionDropdown = useCallback(() => {
    const input = inputRef.current?.getInput()
    const dropdown = popupContainer?.querySelector(
      ".iti--container.iti--inline-dropdown.autofill-info-modal-phone-control",
    )
    if (!input || !dropdown) return

    const searchWrapper = dropdown.querySelector(".iti__search-input-wrapper")
    const countryList = dropdown.querySelector(".iti__country-list")
    const popupHeight = resolvePhoneDropdownHeight({
      searchHeight: searchWrapper?.scrollHeight ?? 0,
      countryListScrollHeight: countryList?.scrollHeight ?? 0,
    })
    const position = resolvePhoneDropdownPosition({
      inputRect: input.getBoundingClientRect(),
      popupHeight,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
    })

    dropdown.style.setProperty("position-anchor", "none")
    dropdown.style.top = `${position.top}px`
    dropdown.style.right = "auto"
    dropdown.style.bottom = "auto"
    dropdown.style.left = `${position.left}px`
    dropdown.style.width = `${position.width}px`
    dropdown.style.height = `${popupHeight}px`
  }, [popupContainer])

  useEffect(() => {
    const root = popupContainer?.getRootNode()
    window.addEventListener("resize", positionDropdown)
    root?.addEventListener("scroll", positionDropdown, true)
    return () => {
      window.removeEventListener("resize", positionDropdown)
      root?.removeEventListener("scroll", positionDropdown, true)
    }
  }, [popupContainer, positionDropdown])

  useEffect(() => {
    if (!popupContainer) return
    const onClick = (event) => {
      if (isPhoneCountryDropdownClick(event)) event.stopPropagation()
    }
    popupContainer.addEventListener("click", onClick)
    return () => {
      popupContainer.removeEventListener("click", onClick)
    }
  }, [popupContainer])

  const markUserEditing = useCallback(() => {
    isUserEditingRef.current = true
  }, [])

  const handleFocus = useCallback(() => {
    markUserEditing()
    onFocus()
  }, [markUserEditing, onFocus])

  const handleOpenCountryDropdown = useCallback(() => {
    handleFocus()
    positionDropdown()
  }, [handleFocus, positionDropdown])

  const emitChange = useCallback(() => {
    if (isSyncingRef.current) return
    const instance = inputRef.current?.getInstance()
    const input = inputRef.current?.getInput()
    if (!instance) return

    const next = splitIntlPhoneValue(
      instance.getNumber() || input?.value || "",
      getFormattedDialCode(),
    )
    if (
      lastUserValueRef.current?.phoneCountryCode !== next.phoneCountryCode ||
      lastUserValueRef.current.phone !== next.phone
    ) {
      lastUserValueRef.current = next
      onChange(next)
    }
  }, [getFormattedDialCode, onChange])

  useEffect(() => {
    const externalValue = { phoneCountryCode, phone }
    const previous = lastExternalValueRef.current
    const didExternalChange =
      previous.phoneCountryCode !== phoneCountryCode || previous.phone !== phone
    lastExternalValueRef.current = externalValue

    if (isUserEditingRef.current && !didExternalChange) return

    const instance = inputRef.current?.getInstance()
    if (!instance) return

    const action = getPhoneWidgetSyncAction({
      initialCountry,
      phoneCountryCode,
      phone,
      lastUserValue: lastUserValueRef.current,
    })
    if (action.type === "none") return

    let cancelled = false
    instance.promise.then(() => {
      if (cancelled) return
      isSyncingRef.current = true
      try {
        applyPhoneWidgetSyncAction(instance, action)
        lastUserValueRef.current = null
      } finally {
        isSyncingRef.current = false
      }
    })

    return () => {
      cancelled = true
    }
  }, [initialCountry, phone, phoneCountryCode])

  useEffect(() => {
    const input = inputRef.current?.getInput()
    if (!input) return

    const onInput = (event) => {
      if (isSyncingRef.current || event.detail?.isSetNumber) return
      markUserEditing()
      emitChange()
    }
    const onCountryChange = () => {
      if (isSyncingRef.current) return
      markUserEditing()
      emitChange()
    }

    input.addEventListener("input", onInput)
    input.addEventListener("countrychange", onCountryChange)
    input.addEventListener("open:countrydropdown", handleOpenCountryDropdown)
    return () => {
      input.removeEventListener("input", onInput)
      input.removeEventListener("countrychange", onCountryChange)
      input.removeEventListener(
        "open:countrydropdown",
        handleOpenCountryDropdown,
      )
    }
  }, [emitChange, handleOpenCountryDropdown, markUserEditing])

  return jsx(IntlTelInput, {
    ref: inputRef,
    initialValue,
    initOptions: createPhoneInputInitOptions({
      initialCountry,
      popupContainer,
    }),
    inputProps: {
      id: "autofill-info-phone",
      name: "phone",
      className: "autofill-info-modal-phone-input",
      placeholder: "Enter your phone number",
      autoComplete: "tel",
      "aria-label": "Phone number",
      onFocus: handleFocus,
    },
  })
}
