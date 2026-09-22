/**
 * Parcel module id: cL87T
 * Resolved path: src/components/CoverLetterPreview/view-model.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"PREVIEW_PHASE",()=>o),n.export(r,"resolveCoverLetterPreviewPhase",()=>i),n.export(r,"resolveCoverLetterPreviewLoadKey",()=>a);let o={placeholderLoading:"placeholder-loading",iframeLoading:"iframe-loading",unavailable:"unavailable",ready:"ready",empty:"empty"},i=({fileUrl:e,extension:t,isFetchingFile:r,isIframeReady:n,isMinimumOverlayElapsed:i})=>e?"pdf"!==t?o.unavailable:!r&&n&&i?o.ready:o.iframeLoading:r?o.placeholderLoading:o.empty,a=e=>e?.coverLetterId?JSON.stringify([e.coverLetterId,e.markdown,e.useLegacyDownload]):""
