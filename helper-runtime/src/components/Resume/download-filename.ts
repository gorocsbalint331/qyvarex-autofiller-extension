// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Resume/download-filename.js).
 */
function o(e){return e.replace(/\.[^/.]+$/,"")}function i({selectedResume:e,isTailorResume:t,tailorResumeName:r}){let n=e?.resumeName?.trim(),i=r.trim(),a=e?.resumeNameWithSuffix?.trim();return n?o(n):t&&i?o(i):a?o(a):"resume"}

export { i as getResumeDownloadBaseName }
