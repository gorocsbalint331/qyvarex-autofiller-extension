// @ts-nocheck
/**
 * Avature — combo-question rule diffing and Falcon answer merge.
 */

import * as fieldLabel from "../../../utils/fieldLabel.js"
import * as falconAnswerTracking from "../falcon-answer-tracking.js"

function getRegularRecord(answer) {
  return answer?.regular &&
    typeof answer.regular === "object" &&
    !Array.isArray(answer.regular)
    ? answer.regular
    : {}
}

function ruleKey(rule) {
  return `${rule.type}:${fieldLabel.normalizeFieldLabel(rule.label)}`
}

function getChildren(rule) {
  const children = rule?.children
  return Array.isArray(children) ? children : []
}

function getOptionTexts(rule) {
  const options = rule?.options
  return Array.isArray(options)
    ? options.map((opt) => String(opt ?? "").trim()).filter(Boolean)
    : []
}

const STATE_LABELS = new Set([
  "state",
  "province",
  "state / province",
  "home state / province",
])

const PLACEHOLDER_OPTIONS = new Set([
  "",
  "select an option",
  "select a state / province",
  "not required",
])

function isStateSelectRule(rule) {
  return (
    rule.type === "select" &&
    STATE_LABELS.has(fieldLabel.normalizeFieldLabel(rule.label))
  )
}

function meaningfulOptionSet(rule) {
  return new Set(
    getOptionTexts(rule)
      .map((opt) => fieldLabel.normalizeFieldLabel(opt))
      .filter((opt) => opt && !PLACEHOLDER_OPTIONS.has(opt)),
  )
}

function sameOptionSets(a, b) {
  return a.size === b.size && [...a].every((item) => b.has(item))
}

function mergeRecordArrays(prev, next) {
  const left = Array.isArray(prev) ? prev : []
  const right = Array.isArray(next) ? next : []
  const length = Math.max(left.length, right.length)
  const merged = []
  for (let i = 0; i < length; i++) {
    merged[i] = { ...(left[i] || {}), ...(right[i] || {}) }
  }
  return merged
}

export function getNewAvatureComboRules(previousRules, nextRules) {
  const byKey = new Map(previousRules.map((rule) => [ruleKey(rule), rule]))
  const newlySeen = []

  for (const rule of nextRules) {
    const key = ruleKey(rule)
    const existing = byKey.get(key)

    if (!existing) {
      newlySeen.push(rule)
      byKey.set(key, rule)
      continue
    }

    if (isStateSelectRule(rule)) {
      const prevOpts = meaningfulOptionSet(existing)
      const nextOpts = meaningfulOptionSet(rule)
      if (nextOpts.size > 0 && !sameOptionSets(prevOpts, nextOpts)) {
        newlySeen.push(rule)
        byKey.set(key, rule)
      }
      continue
    }

    const prevOptions = getOptionTexts(existing)
    const nextOptions = getOptionTexts(rule)
    if (prevOptions.length === 0 && nextOptions.length > 0) {
      newlySeen.push(rule)
      byKey.set(key, rule)
      continue
    }

    const prevChildren = getChildren(existing)
    const nextChildren = getChildren(rule)
    if (prevChildren.length === 0 || nextChildren.length === 0) continue

    const seenChildKeys = new Set(prevChildren.map(ruleKey))
    const hasNewChild = nextChildren.some((child) => {
      const childKey = ruleKey(child)
      if (!childKey || seenChildKeys.has(childKey)) return false
      seenChildKeys.add(childKey)
      return true
    })
    if (hasNewChild) newlySeen.push(rule)
  }

  return newlySeen
}

export function mergeAvatureComboAnswer(previous, next) {
  const prevFill = Array.isArray(previous.fillDataList) ? previous.fillDataList : []
  const nextFill = Array.isArray(next.fillDataList) ? next.fillDataList : []
  return falconAnswerTracking.inheritFalconResponseAnswerMarker(
    {
      ...previous,
      regular: { ...getRegularRecord(previous), ...getRegularRecord(next) },
      education: mergeRecordArrays(previous.education, next.education),
      workExperience: mergeRecordArrays(
        previous.workExperience,
        next.workExperience,
      ),
      ...(prevFill.length || nextFill.length
        ? { fillDataList: [...prevFill, ...nextFill] }
        : {}),
    },
    previous,
    next,
  )
}
