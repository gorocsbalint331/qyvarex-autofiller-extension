// @ts-nocheck
/**
 * GoHire — iframe autofill payload builder.
 */

export function buildGoHireIframeAutofillData({
  resumeInfo,
  disableUploadResume,
  coverLetter,
  token,
  currentJobId,
}) {
  return {
    resumeInfo,
    disableUploadResume,
    coverLetter,
    token,
    currentJobId: currentJobId?.trim() || null,
  }
}
