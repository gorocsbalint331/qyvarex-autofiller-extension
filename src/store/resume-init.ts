// @ts-nocheck
/**
 * Resolves which resume ID becomes last-used during resume store init.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { TAILOR_RESUME_ID_PREFIX } from "../contents/shared/constants.ts"

const findResumeIdInCollection = (resumeCollection, resumeId) =>
  resumeCollection.find((resume) => resume.resumeId === resumeId)?.resumeId

export const resolveInitLastUsedResumeState = ({
  isFirstLoad,
  isResumeRefresh,
  disableUploadResume,
  storedLastUsedResume,
  previousLastUsedResumeInState,
  resumeCollection,
  tailorResume,
  agentResumeId,
  agentTailorId
}) => {
  let lastUsedResume = storedLastUsedResume
  lastUsedResume =
    agentResumeId ||
    (agentTailorId
      ? TAILOR_RESUME_ID_PREFIX + agentTailorId
      : disableUploadResume
        ? void 0
        : (isFirstLoad || isResumeRefresh) && tailorResume?.tailorId
          ? TAILOR_RESUME_ID_PREFIX + tailorResume.tailorId
          : findResumeIdInCollection(resumeCollection, previousLastUsedResumeInState) ||
            findResumeIdInCollection(resumeCollection, storedLastUsedResume) ||
            resumeCollection.find((resume) => resume.primary)?.resumeId)
  let shouldSyncResumeToAutofill = !!(
    lastUsedResume &&
    (isFirstLoad ? lastUsedResume !== storedLastUsedResume : lastUsedResume !== previousLastUsedResumeInState)
  )
  let shouldPersistLastUsedResume = lastUsedResume !== storedLastUsedResume
  return {
    lastUsedResume,
    shouldSyncResumeToAutofill,
    shouldPersistLastUsedResume
  }
}
