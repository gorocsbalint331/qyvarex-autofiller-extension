// @ts-nocheck
/**
 * Tailor resume display-name resolution and cached file-name loader.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
export function createTailorResumeFileNameLoader(loadFileName) {
  let cachedResumeId = null
  let cachedPromise = null
  return (resumeId) =>
    resumeId
      ? (resumeId === cachedResumeId && cachedPromise ||
          (cachedResumeId = resumeId, cachedPromise = loadFileName(resumeId).catch(() => "")),
        cachedPromise)
      : Promise.resolve("")
}

export const resolveTailorResumeName = ({
  userStage,
  currentTabJob,
  firstName,
  lastName,
  apiName
}) => {
  let trimmedApiName = apiName?.trim()
  if (trimmedApiName) return trimmedApiName
  if (!userStage || !currentTabJob) return null
  let composedName = [firstName, lastName, currentTabJob?.jobResult?.jobTitle]
    .filter(Boolean)
    .join(" ")
  return composedName || null
}
