// @ts-nocheck
/**
 * Zustand store holding the inventory-matched job info for the current tab.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { create } from "zustand"

const normalizeOptionalTrimmedString = (value) => {
  if (null == value) return null
  let trimmed = String(value).trim()
  return trimmed || null
}

const initialState = {
  jobInfo: null
}

export const useInventoryMatchJobStore = create((set) => ({
  ...initialState,
  setInventoryMatchJob: ({
    jobInfo = null
  }) => {
    normalizeOptionalTrimmedString(jobInfo?.jobResult?.jobId) && set({
      jobInfo
    })
  },
  clearInventoryMatchJob: () => {
    set({
      ...initialState
    })
  },
  resetInventoryMatchJob: () => {
    set(initialState)
  }
}))
