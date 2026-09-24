// @ts-nocheck
/**
 * Choose a download filename for resume uploads (base vs tailor).
 */

function stripExtension(filename) {
  return filename.replace(/\.[^/.]+$/, "")
}

function extractExtension(filename) {
  const text = filename?.trim()
  if (!text) return ""
  const match = text.match(/(\.[^./\\]+)$/)
  return match?.[1] ?? ""
}

function withExtension(basename, extension) {
  const trimmed = basename.trim()
  if (!trimmed) return ""
  return extension ? `${stripExtension(trimmed)}${extension}` : trimmed
}

export function getResumeUploadFilename({
  selectedResume,
  isTailorResume,
  tailorResumeName = "",
}) {
  const resumeName = selectedResume?.resumeName?.trim() ?? ""
  const resumeNameWithSuffix =
    selectedResume?.resumeNameWithSuffix?.trim() ?? ""
  const tailorName = tailorResumeName.trim()
  const extension =
    extractExtension(resumeNameWithSuffix) || (isTailorResume ? ".pdf" : "")

  if (resumeName) return withExtension(resumeName, extension)
  if (isTailorResume && tailorName) {
    return withExtension(tailorName, extension || ".pdf")
  }
  return resumeNameWithSuffix || (extension ? `resume${extension}` : "resume")
}
