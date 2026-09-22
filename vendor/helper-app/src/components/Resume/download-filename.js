/**
 * Parcel module id: 5wifi
 * Resolved path: src/components/Resume/download-filename.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return e.replace(/\.[^/.]+$/,"")}function i({selectedResume:e,isTailorResume:t,tailorResumeName:r}){let n=e?.resumeName?.trim(),i=r.trim(),a=e?.resumeNameWithSuffix?.trim();return n?o(n):t&&i?o(i):a?o(a):"resume"}n.defineInteropFlag(r),n.export(r,"getResumeDownloadBaseName",()=>i)
