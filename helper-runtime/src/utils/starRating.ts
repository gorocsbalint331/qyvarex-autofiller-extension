// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/utils/starRating.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

import * as plasmohqStorage from "@plasmohq/storage"
import * as submitSuccessObserver from "../contents/methods/submit-success-observer.js"
import * as storageEnums from "../enums/storage.js"
import * as feedbackStore from "../store/feedback.js"

const SUBMIT_SUCCESS_TIMEOUT_MS = 3e4
const storage = new plasmohqStorage.Storage()
const EXPOSURE_COOLDOWN_MS = 1728e5
const TARGET_SITES = ["greenhouse", "lever", "ashby"]
const PENDING_SUCCESS_KEY = "JOBRIGHT_STAR_RATING_PENDING_SUCCESS"

function savePendingSuccess(payload) {
  try {
    window.sessionStorage.setItem(PENDING_SUCCESS_KEY, JSON.stringify(payload))
  } catch {
    // ignore
  }
}

function loadPendingSuccess() {
  try {
    let raw = window.sessionStorage.getItem(PENDING_SUCCESS_KEY)
    if (!raw) return null
    let parsed = JSON.parse(raw)
    if (
      !parsed ||
      "string" != typeof parsed.siteName ||
      !Array.isArray(parsed.selectors) ||
      "number" != typeof parsed.expiresAt
    ) {
      return null
    }
    return parsed
  } catch {
    return null
  }
}

function clearPendingSuccess() {
  try {
    window.sessionStorage.removeItem(PENDING_SUCCESS_KEY)
  } catch {
    // ignore
  }
}

function isTargetSite(siteName) {
  return TARGET_SITES.includes(siteName)
}

function computeModificationRate(beforeFields, afterFields) {
  let keys = Object.keys(beforeFields)
  if (0 === keys.length) return 0
  let changed = keys.filter((key) => {
    let beforeValue = String(beforeFields[key] ?? "")
    let afterValue = String(afterFields[key] ?? "")
    return beforeValue !== afterValue
  })
  return changed.length / keys.length
}

function computeFillRate(completion) {
  let requiredLabels = completion.fieldRequiredStatus
    .filter((field) => field.required)
    .map((field) => field.label)
  if (0 === requiredLabels.length) return 1
  let filledRequired = requiredLabels.filter((label) =>
    completion.filledFields.includes(label),
  )
  return filledRequired.length / requiredLabels.length
}

async function handleSubmitStarRating(
  siteName,
  beforeFields,
  afterFields,
  completion,
  selectors = [],
  signal,
) {
  if (!isTargetSite(siteName)) return
  let fillRate = computeFillRate(completion)
  let modificationRate = computeModificationRate(beforeFields, afterFields)
  if (
    fillRate < 0.9 ||
    modificationRate > 0.1 ||
    !selectors ||
    0 === selectors.length
  ) {
    return
  }
  let [clicked, exposureCount, lastExposureTime] = await Promise.all([
    storage.get(storageEnums.STORAGE_KEY.STAR_RATING_CLICKED),
    storage.get(storageEnums.STORAGE_KEY.STAR_RATING_EXPOSURE_COUNT_NO_CLICK),
    storage.get(storageEnums.STORAGE_KEY.STAR_RATING_LAST_EXPOSURE_TIME),
  ])
  if (
    clicked ||
    (exposureCount || 0) >= 3 ||
    Date.now() - (lastExposureTime || 0) < EXPOSURE_COOLDOWN_MS
  ) {
    return
  }
  let expiresAt = Date.now() + SUBMIT_SUCCESS_TIMEOUT_MS
  savePendingSuccess({
    siteName,
    selectors,
    expiresAt,
  })
  let success = await submitSuccessObserver.waitForSubmitSuccess(selectors, {
    timeout: SUBMIT_SUCCESS_TIMEOUT_MS,
    signal,
  })
  if (success) {
    clearPendingSuccess()
    await maybeShowStarRatingModal()
  }
}

async function resumePendingStarRating() {
  if ("undefined" == typeof window || window.self !== window.top) return
  let pending = loadPendingSuccess()
  if (!pending) return
  let remainingMs = pending.expiresAt - Date.now()
  if (remainingMs <= 0) {
    clearPendingSuccess()
    return
  }
  let success = await submitSuccessObserver.waitForSubmitSuccess(
    pending.selectors,
    {
      timeout: remainingMs,
      matchExisting: true,
    },
  )
  if (success) {
    clearPendingSuccess()
    await maybeShowStarRatingModal()
  }
}

let showingStarRatingModal = false

async function maybeShowStarRatingModal() {
  if (!showingStarRatingModal) {
    showingStarRatingModal = true
    try {
      let [siteFills, clicked, exposureCount, lastExposureTime] =
        await Promise.all([
          storage.get(storageEnums.STORAGE_KEY.STAR_RATING_SITE_FILLS),
          storage.get(storageEnums.STORAGE_KEY.STAR_RATING_CLICKED),
          storage.get(
            storageEnums.STORAGE_KEY.STAR_RATING_EXPOSURE_COUNT_NO_CLICK,
          ),
          storage.get(storageEnums.STORAGE_KEY.STAR_RATING_LAST_EXPOSURE_TIME),
        ])
      if (
        clicked ||
        (exposureCount || 0) >= 3 ||
        Date.now() - (lastExposureTime || 0) < EXPOSURE_COOLDOWN_MS
      ) {
        return
      }
      let fills =
        "number" != typeof siteFills || isNaN(siteFills) ? 0 : siteFills
      let nextFills = fills + 1
      if (nextFills < 1) {
        await storage.set(
          storageEnums.STORAGE_KEY.STAR_RATING_SITE_FILLS,
          nextFills,
        )
        return
      }
      await storage.set(
        storageEnums.STORAGE_KEY.STAR_RATING_LAST_EXPOSURE_TIME,
        Date.now(),
      )
      await storage.set(storageEnums.STORAGE_KEY.STAR_RATING_SITE_FILLS, 0)
      if (window.self === window.top) {
        ;(0, feedbackStore.useFeedbackStore).setState({
          showStarRatingModal: true,
        })
      } else {
        window.top?.postMessage(
          {
            type: "JOBRIGHT_SHOW_STAR_RATING_MODAL",
          },
          {
            targetOrigin: "*",
          },
        )
      }
    } finally {
      showingStarRatingModal = false
    }
  }
}

async function recordStarRatingClicked() {
  await storage.set(storageEnums.STORAGE_KEY.STAR_RATING_CLICKED, true)
}

async function recordStarRatingNoClick() {
  let exposureCount =
    (await storage.get(
      storageEnums.STORAGE_KEY.STAR_RATING_EXPOSURE_COUNT_NO_CLICK,
    )) || 0
  await storage.set(
    storageEnums.STORAGE_KEY.STAR_RATING_EXPOSURE_COUNT_NO_CLICK,
    exposureCount + 1,
  )
}

export {
  computeFillRate,
  computeModificationRate,
  handleSubmitStarRating,
  isTargetSite,
  recordStarRatingClicked,
  recordStarRatingNoClick,
  resumePendingStarRating,
}
