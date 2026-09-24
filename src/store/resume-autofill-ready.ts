// @ts-nocheck
/**
 * Decides whether resume data should refresh before autofill starts.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { TAILOR_RESUME_ID_PREFIX } from "../contents/shared/constants.ts"

export function shouldRefreshResumeBeforeAutofill({
  disableUploadResume,
  userLoggedIn,
  fromAgent,
  agentData,
  lastUsedResume,
  resumeMap,
  resumeCollectionLength
}) {
  return !(!userLoggedIn || disableUploadResume || fromAgent && (agentData?.resumeId || agentData?.tailorId)) &&
    (lastUsedResume
      ? (lastUsedResume.startsWith(TAILOR_RESUME_ID_PREFIX), !resumeMap[lastUsedResume])
      : 0 === resumeCollectionLength)
}
