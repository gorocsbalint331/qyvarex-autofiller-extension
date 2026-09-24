// @ts-nocheck
/**
 * Pick which job payload to show in the profile step (tab vs external override).
 */

export function resolveJobToShow({
  currentTabJob,
  externalJobInfo,
  manualOverrideJobId,
}) {
  const useExternalOverride =
    !!manualOverrideJobId &&
    !!externalJobInfo &&
    currentTabJob?.jobResult?.jobId === manualOverrideJobId
  return useExternalOverride
    ? externalJobInfo
    : (currentTabJob ?? externalJobInfo ?? null)
}
