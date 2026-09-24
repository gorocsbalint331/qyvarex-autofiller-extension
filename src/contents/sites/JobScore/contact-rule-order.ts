// @ts-nocheck
/**
 * JobScore — contact rule ordering and location fallbacks.
 */

function normalizeKey(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[:*]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function ruleIdentityText(rule) {
  const input = rule.$input
  return normalizeKey(
    [
      rule.label,
      input?.id,
      input?.name,
      input?.getAttribute?.("id"),
      input?.getAttribute?.("name"),
    ].join(" "),
  )
}

function isCountryRule(rule) {
  const text = ruleIdentityText(rule)
  return (
    /\bcountry\b/.test(text) &&
    !/\bstate\b/.test(text) &&
    !/\bprovince\b/.test(text)
  )
}

function isStateProvinceRule(rule) {
  const text = ruleIdentityText(rule)
  return (
    /\bstate\b/.test(text) ||
    /\bprovince\b/.test(text) ||
    /\bhome_state\b/.test(text)
  )
}

function isCityRule(rule) {
  const text = ruleIdentityText(rule)
  return /\bcity\b/.test(text) || /\bhome_city\b/.test(text)
}

function contactPriority(rule) {
  if (isCountryRule(rule)) return 0
  if (isStateProvinceRule(rule)) return 1
  return 2
}

export function orderJobScoreContactRules(rules) {
  return rules
    .map((rule, index) => ({
      index,
      priority: contactPriority(rule),
      rule,
    }))
    .sort(
      (left, right) =>
        left.priority - right.priority || left.index - right.index,
    )
    .map(({ rule }) => rule)
}

export function getJobScoreLocationRetryRules(rules) {
  return orderJobScoreContactRules(
    rules.filter((rule) => isStateProvinceRule(rule) || isCityRule(rule)),
  )
}

function isEmptyAnswerValue(value) {
  return (
    value == null ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) &&
      value.every((item) => String(item ?? "").trim() === ""))
  )
}

export function applyJobScoreLocationFallbacks(regular, autofillInfo) {
  const next = { ...regular }
  const location = autofillInfo?.location ?? {}
  for (const [label, source] of [
    ["City:", location.city ?? autofillInfo?.city],
    ["State or Province:", location.state ?? autofillInfo?.state],
  ]) {
    const existingKey = Object.keys(next).find(
      (key) => normalizeKey(key) === normalizeKey(label),
    )
    const value = String(source ?? "").trim()
    if (value && (!existingKey || isEmptyAnswerValue(next[existingKey]))) {
      next[existingKey || label] = value
    }
  }
  return next
}
