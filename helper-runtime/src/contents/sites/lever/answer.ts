// @ts-nocheck
/**
 * Lever — answer shaping and operation-handler factory.
 */

import * as dayjs from "dayjs"
import * as filler from "../../shared/filler.ts"
import * as answerMethods from "../../methods/answer.ts"

const dayjsDefault = { default: dayjs }

export function formatAnswer(answer) {
  if (answer.regular) {
    answer.regular.Date = dayjsDefault.default().format("MM/DD/YYYY")
  }
  return answer
}

export function createOperationHandlerFactory(onFilled, onMissed) {
  return function (fillFn, options = { expectArray: false }) {
    return async (rule, record, trackProgress = true) => {
      try {
        const raw = answerMethods.findValueInRecord(rule.label, record)
        const value = options.expectArray
          ? answerMethods.ensureArray(raw)
          : raw
        await fillFn(rule, value)
        if (trackProgress) onFilled(rule.label)
      } catch (_error) {
        // Minified source referenced filler.ValueError as a no-op expression.
        filler.ValueError
        if (trackProgress) onMissed(rule.label)
      }
    }
  }
}
