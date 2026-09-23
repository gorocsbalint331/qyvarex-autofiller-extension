// @ts-nocheck
/**
 * Resume review download menu + autofill-info handoff helpers.
 */

import { buildResumeDownloadMenuItems } from "./ResumeReview/download-menu.ts"

export function getResumeReviewDownloadMenuItems({
  disableUploadResume,
  downloadPdf,
  downloadWord,
}) {
  if (disableUploadResume) return undefined
  return buildResumeDownloadMenuItems(downloadPdf, downloadWord)
}

export function openAutofillInfoFromResumeReview({
  closeResumeReview,
  openAutofillInfo,
}) {
  closeResumeReview()
  openAutofillInfo()
}
