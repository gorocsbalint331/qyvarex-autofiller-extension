// @ts-nocheck
/**
 * Cover letter preview phase helpers.
 */

export const PREVIEW_PHASE = {
  placeholderLoading: "placeholder-loading",
  iframeLoading: "iframe-loading",
  unavailable: "unavailable",
  ready: "ready",
  empty: "empty",
}

export function resolveCoverLetterPreviewPhase({
  fileUrl,
  extension,
  isFetchingFile,
  isIframeReady,
  isMinimumOverlayElapsed,
}) {
  if (!fileUrl) {
    return isFetchingFile
      ? PREVIEW_PHASE.placeholderLoading
      : PREVIEW_PHASE.empty
  }
  if (extension !== "pdf") return PREVIEW_PHASE.unavailable
  if (!isFetchingFile && isIframeReady && isMinimumOverlayElapsed) {
    return PREVIEW_PHASE.ready
  }
  return PREVIEW_PHASE.iframeLoading
}

export function resolveCoverLetterPreviewLoadKey(downloadRequest) {
  if (!downloadRequest?.coverLetterId) return ""
  return JSON.stringify([
    downloadRequest.coverLetterId,
    downloadRequest.markdown,
    downloadRequest.useLegacyDownload,
  ])
}
