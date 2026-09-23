// @ts-nocheck
/**
 * Falcon response answer markers — tag answers from the current fill run so
 * tracking can ignore stale / overlapping responses.
 */

const FALCON_RESPONSE_ANSWER_MARKER = Symbol.for(
  "jobright.falcon-response-answer",
)

let currentEpochId = 0
let markedEpochId

export function beginFalconResponseAnswerRequest() {
  currentEpochId += 1
  markedEpochId = undefined
  return currentEpochId
}

export function hasCurrentFalconResponseAnswer() {
  return markedEpochId === currentEpochId
}

function stampFalconResponseAnswer(answer, epochId) {
  Object.defineProperty(answer, FALCON_RESPONSE_ANSWER_MARKER, {
    configurable: true,
    enumerable: true,
    value: epochId,
  })
}

export function markFalconResponseAnswer(answer, epochId = currentEpochId) {
  if (epochId === currentEpochId) {
    markedEpochId = epochId
    stampFalconResponseAnswer(answer, epochId)
  }
  return answer
}

function getFalconResponseAnswerEpoch(answer) {
  if (!answer || typeof answer !== "object") return
  const epoch = answer[FALCON_RESPONSE_ANSWER_MARKER]
  return typeof epoch === "number" ? epoch : undefined
}

export function isFalconResponseAnswer(answer) {
  return getFalconResponseAnswerEpoch(answer) !== undefined
}

export function isCurrentFalconResponseAnswer(answer) {
  return (
    hasCurrentFalconResponseAnswer() &&
    getFalconResponseAnswerEpoch(answer) === currentEpochId
  )
}

/** Copy a falcon epoch marker onto `target` from the first marked source. */
export function inheritFalconResponseAnswerMarker(target, ...sources) {
  const epochs = sources
    .map((source) => getFalconResponseAnswerEpoch(source))
    .filter((epoch) => epoch !== undefined)
  const epoch =
    epochs.find((value) => value === currentEpochId) ?? epochs[0]
  if (epoch !== undefined) stampFalconResponseAnswer(target, epoch)
  return target
}
