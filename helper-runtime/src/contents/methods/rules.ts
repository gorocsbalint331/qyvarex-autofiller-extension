// @ts-nocheck
/**
 * Filter autofill rules whose labels appear in an exclude list.
 */

function normalizeLabelKey(label) {
  return label.replace(/[^a-zA-Z]/g, "").toLowerCase()
}

export function filterRulesByLabel(rules, excludeLabels) {
  const excluded = new Set(excludeLabels.map(normalizeLabelKey))
  return rules.filter((rule) => !excluded.has(normalizeLabelKey(rule.label)))
}
