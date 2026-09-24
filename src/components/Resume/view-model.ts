// @ts-nocheck
/**
 * Build sidebar list items for the resume review picker.
 */

const MAX_VISIBLE_RESUMES = 7

function stripExtension(filename) {
  return filename.replace(/\.[^/.]+$/, "")
}

export function buildResumeReviewItems({
  resumes,
  tailorResumeId,
  tailorResumeName,
  lastUsedResumeId,
}) {
  const items = resumes.slice(0, MAX_VISIBLE_RESUMES).map((resume) => {
    const isCustomized = !!tailorResumeId && resume.resumeId === tailorResumeId
    return {
      type: "resume",
      value: resume.resumeId,
      label: isCustomized
        ? tailorResumeName ||
          resume.resumeName ||
          stripExtension(resume.resumeNameWithSuffix)
        : resume.resumeName || stripExtension(resume.resumeNameWithSuffix),
      primary: !!resume.primary,
      customized: isCustomized,
      lastUsed: resume.resumeId === lastUsedResumeId,
      targetJobTitle: resume.targetJobTitle?.trim() || null,
    }
  })
  items.push({
    type: "apply-without-resume",
    value: "NO_RESUME",
    label: "Apply without resume",
  })
  return items
}
