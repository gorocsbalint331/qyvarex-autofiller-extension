// @ts-nocheck
/**
 * Extract the AB-test config object from an experiment payload.
 */

export function normalizeAbConfig(experiment) {
  if (!experiment || typeof experiment !== "object" || !("config" in experiment)) {
    return {}
  }
  const config = experiment.config
  if (!config || typeof config !== "object" || Array.isArray(config)) {
    return {}
  }
  return config
}
