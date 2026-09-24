// @ts-nocheck
/**
 * Country / region / city option loading and change handlers for autofill address fields.
 */

import {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react"
import { sendToBackground } from "@plasmohq/messaging"
import { resolveCountryCode } from "../model.js"
import { normalizeCountryInput } from "../utils/address-lookup.ts"
import {
  resolveRegionCode,
  normalizeRegionInput,
} from "../utils/location-normalizer.ts"

export function useAddressLocation({ personal, setAutofillInfo }) {
  const [regionOptions, setRegionOptions] = useState([])
  const [cityOptions, setCityOptions] = useState([])
  const regionRequestIdRef = useRef(0)
  const cityRequestIdRef = useRef(0)

  const countryCode = useMemo(
    () => resolveCountryCode(personal.country ?? ""),
    [personal.country],
  )

  const loadRegions = useCallback((country) => {
    const requestId = ++regionRequestIdRef.current
    if (!country) {
      setRegionOptions([])
      cityRequestIdRef.current += 1
      setCityOptions([])
      return
    }
    sendToBackground({
      name: "getOpenRegions",
      body: { country },
    }).then((regions) => {
      if (requestId === regionRequestIdRef.current) {
        setRegionOptions(Array.isArray(regions) ? regions : [])
      }
    })
  }, [])

  const loadCities = useCallback((country, region) => {
    const requestId = ++cityRequestIdRef.current
    if (!country || !region) {
      setCityOptions([])
      return
    }
    sendToBackground({
      name: "getOpenCitiesByRegion",
      body: { country, region },
    }).then((cities) => {
      if (requestId === cityRequestIdRef.current) {
        setCityOptions(Array.isArray(cities) ? cities : [])
      }
    })
  }, [])

  useEffect(() => {
    loadRegions(countryCode)
  }, [countryCode, loadRegions])

  useEffect(() => {
    loadCities(countryCode, personal.state)
  }, [countryCode, personal.state, loadCities])

  const handleCountryChange = (nextCountry) => {
    setAutofillInfo((prev) => {
      const prevCode = resolveCountryCode(prev.personal.country)
      const nextCode = resolveCountryCode(nextCountry)
      const sameCountry = !!prevCode && prevCode === nextCode
      const shouldClearRegionCity =
        prev.personal.country.trim() !== nextCountry.trim() && !sameCountry
      return {
        ...prev,
        personal: {
          ...prev.personal,
          country: nextCountry,
          state: shouldClearRegionCity ? "" : prev.personal.state,
          city: shouldClearRegionCity ? "" : prev.personal.city,
        },
      }
    })
  }

  const handleRegionChange = (nextRegion) => {
    setAutofillInfo((prev) => {
      const prevCode = resolveRegionCode(prev.personal.state, regionOptions)
      const nextCode = resolveRegionCode(nextRegion, regionOptions)
      const sameRegion = !!prevCode && prevCode === nextCode
      const shouldClearCity =
        prev.personal.state.trim() !== nextRegion.trim() && !sameRegion
      return {
        ...prev,
        personal: {
          ...prev.personal,
          state: nextRegion,
          city: shouldClearCity ? "" : prev.personal.city,
        },
      }
    })
  }

  const handleRegionBlur = useCallback(() => {
    const normalized = normalizeRegionInput(personal.state, regionOptions)
    if (normalized !== personal.state) {
      setAutofillInfo((prev) => ({
        ...prev,
        personal: { ...prev.personal, state: normalized },
      }))
    }
  }, [personal.state, regionOptions, setAutofillInfo])

  const handleCountryBlur = useCallback(() => {
    const normalized = normalizeCountryInput(personal.country)
    if (normalized !== personal.country) {
      setAutofillInfo((prev) => ({
        ...prev,
        personal: { ...prev.personal, country: normalized },
      }))
    }
  }, [personal.country, setAutofillInfo])

  return {
    countryCode,
    regionOptions,
    cityOptions,
    handleCountryChange,
    handleRegionChange,
    handleCountryBlur,
    handleRegionBlur,
  }
}
