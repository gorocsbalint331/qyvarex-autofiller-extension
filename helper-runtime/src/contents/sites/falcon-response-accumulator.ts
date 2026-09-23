// @ts-nocheck
/**
 * Merge Falcon fill responses across combo / deferred answer rounds.
 */

import * as falconAnswerTracking from "./falcon-answer-tracking.ts"
import * as fieldLabel from "../../utils/fieldLabel.js"

function isPlainObject(value) {
  return !!value && typeof value === "object" && !Array.isArray(value)
}

function collectProfileData(answer) {
  return {
    ...(isPlainObject(answer?.profile_data) ? answer.profile_data : {}),
    ...(isPlainObject(answer?.profileData) ? answer.profileData : {}),
  }
}

function mergeFillDataList(left, right) {
  const rows = [
    ...(Array.isArray(left?.fillDataList) ? left.fillDataList : []),
    ...(Array.isArray(right.fillDataList) ? right.fillDataList : []),
  ]
  const indexByLabel = new Map()
  const merged = []
  for (const row of rows) {
    const label = fieldLabel.normalizeFieldLabel(row?.name)
    if (!label) continue
    const existing = indexByLabel.get(label)
    if (existing === undefined) {
      indexByLabel.set(label, merged.length)
      merged.push(row)
    } else {
      merged[existing] = row
    }
  }
  return merged.length ? merged : undefined
}

function pickNonEmptyArray(left, right) {
  if (Array.isArray(right) && right.length > 0) return [...right]
  if (Array.isArray(left) && left.length > 0) return [...left]
  return []
}

export function mergeFalconResponseAnswers(existing, incoming) {
  const profileData = {
    ...collectProfileData(existing),
    ...collectProfileData(incoming),
  }

  const merged = {
    ...existing,
    ...incoming,
    profileData,
    profile_data: profileData,
    education: pickNonEmptyArray(existing?.education, incoming.education),
    workExperience: pickNonEmptyArray(
      existing?.workExperience,
      incoming.workExperience,
    ),
    skills: pickNonEmptyArray(existing?.skills, incoming.skills),
    regular: {
      ...(isPlainObject(existing?.regular) ? existing.regular : {}),
      ...(isPlainObject(incoming.regular) ? incoming.regular : {}),
    },
    fillDataList: mergeFillDataList(existing, incoming),
  }

  if (incoming.state === undefined && existing?.state !== undefined) {
    merged.state = existing.state
  }
  if (incoming.country === undefined && existing?.country !== undefined) {
    merged.country = existing.country
  }

  return falconAnswerTracking.inheritFalconResponseAnswerMarker(
    merged,
    incoming,
    existing,
  )
}

export class FalconResponseAccumulator {
  constructor() {
    this.epoch = 0
    this.answer = undefined
  }

  reset() {
    this.epoch += 1
    this.answer = undefined
  }

  captureEpoch() {
    return this.epoch
  }

  record(response, epoch) {
    if (
      epoch === this.epoch &&
      falconAnswerTracking.isCurrentFalconResponseAnswer(response)
    ) {
      this.answer = mergeFalconResponseAnswers(this.answer, response)
    }
  }

  current() {
    return falconAnswerTracking.isCurrentFalconResponseAnswer(this.answer)
      ? this.answer
      : undefined
  }
}
