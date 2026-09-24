// @ts-nocheck
/**
 * Resume download basename helpers.
 */

function stripExtension(filename) {
  return filename.replace(/\.[^/.]+$/, "")
}

export function getResumeDownloadBaseName({
  selectedResume,
  isTailorResume,
  tailorResumeName,
}) {
  const resumeName = selectedResume?.resumeName?.trim()
  const tailorName = tailorResumeName.trim()
  const withSuffix = selectedResume?.resumeNameWithSuffix?.trim()
  if (resumeName) return stripExtension(resumeName)
  if (isTailorResume && tailorName) return stripExtension(tailorName)
  if (withSuffix) return stripExtension(withSuffix)
  return "resume"
}
