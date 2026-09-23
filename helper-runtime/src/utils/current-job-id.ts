// @ts-nocheck
/**
 * Resolve the current job id from URL / store state.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

import * as externalJob from "../store/externalJob.js"
import * as inventoryMatchJob from "../store/inventory-match-job.js"
import * as urlStore from "../store/url.js"
import * as jobId from "./job-id.js"

let normalizeJobId = (value) => {
  if (null == value) return null
  let trimmed = String(value).trim()
  return trimmed || null
}

let getWindowHref = () =>
  "undefined" == typeof window ? null : window.location.href || null

let resolveCurrentJobId = ({ explicitJobId, pageUrl } = {}) => {
  let resolvedPageUrl = pageUrl || getWindowHref()
  let currentTabUrl = urlStore.useUrlStore.getState().currentTabUrl
  let externalJobState = externalJob.useExternalJobStore.getState()
  let inventoryMatchState = inventoryMatchJob.useInventoryMatchJobStore.getState()
  return (
    jobId.extractJobIdFromUrl(resolvedPageUrl) ||
    jobId.extractJobIdFromUrl(currentTabUrl) ||
    normalizeJobId(explicitJobId) ||
    normalizeJobId(inventoryMatchState.jobInfo?.jobResult?.jobId) ||
    normalizeJobId(externalJobState.jobInfo?.jobResult?.jobId) ||
    normalizeJobId(externalJobState.jobId)
  )
}

export { resolveCurrentJobId }
