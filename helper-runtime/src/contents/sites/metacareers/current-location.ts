// @ts-nocheck
/**
 * Meta Careers — current-location fill orchestration + education replay rules.
 */

import * as locationOperation from "./location-operation.ts"

export function getMetaCareersEducationReplayRules(formRules) {
  return formRules.filter(
    (rule) => !locationOperation.isMetaCurrentLocationRule(rule),
  )
}

export async function fillMetaCurrentLocation(
  { answer, rule, regularValue },
  {
    prepareCapture,
    triggerNativeSearch,
    resolveCaptured,
    fillResolvedLocation,
  },
) {
  const searchValue = locationOperation.getMetaCurrentLocationOriginalAnswer(
    answer,
    regularValue,
  )
  if (!searchValue) return false

  let searchSession = null
  let shouldCleanup = true
  try {
    const capture = await prepareCapture(searchValue)
    if (!capture?.captureId) return false

    searchSession = await triggerNativeSearch(rule.$input, searchValue)
    if (!searchSession) return false

    const resolveResult = await resolveCaptured(capture.captureId)
    const resolvedValue =
      locationOperation.getMetaResolvedLocationValue(resolveResult)
    if (!resolvedValue) {
      console.warn(
        "[MetaCurrentLocation] resolve returned no selected value",
        {
          action: resolveResult?.action ?? null,
          selectedValuesCount: resolveResult?.selected_values?.length ?? 0,
        },
      )
      return false
    }

    const committed = await fillResolvedLocation(
      rule.$input,
      resolvedValue,
      searchValue,
    )
    if (committed) {
      shouldCleanup = false
      return true
    }
    console.warn("[MetaCurrentLocation] resolved value was not committed")
    return false
  } catch (error) {
    console.warn("[MetaCurrentLocation] fill failed with an exception", {
      message: error instanceof Error ? error.message : String(error),
    })
    return false
  } finally {
    if (searchSession && shouldCleanup) {
      try {
        await searchSession.cleanup()
      } catch {
        // ignore cleanup failures
      }
    }
  }
}
