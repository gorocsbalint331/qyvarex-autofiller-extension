// @ts-nocheck
/**
 * Join.com application wizard.
 * Site id: "join"
 * Each screening question is its own /apply/question-{n} step.
 */

import { DefaultFiller } from "./default.ts"
import * as enums from "../../core/enums.js"
import * as operations from "./default/operations.ts"
import {
  joinQuestionForPath,
  readJoinQuestions,
  rememberJoinQuestions,
} from "../../lib/join-steps.ts"

export class Join extends DefaultFiller {
  getSiteName() {
    return "join"
  }

  async extractFormRules() {
    const found = await super.extractFormRules()
    const question = joinQuestionForPath()
    if (!question) return found
    const input = operations.findJoinAnswerInput()
    for (const rule of found) {
      if (operations.isWeakJoinLabel(rule.label) || rule.label === operations.joinHeading()) {
        rule.label = question.question
      }
      if (question.required) rule.required = true
      if (question.options.length && !(rule.options || []).length) rule.options = question.options
    }
    if (question.question && input && !found.some((rule) => rule.$input === input)) {
      found.push({
        type: question.type === "MULTI_CHOICE" || question.type === "BOOLEAN"
          ? enums.FIELD_TYPE.RADIOGROUP
          : enums.FIELD_TYPE.TEXT,
        label: question.question,
        required: question.required,
        options: question.options,
        $input: input,
      })
    }
    return found
  }

  publishJoinSteps() {
    for (const question of rememberJoinQuestions(readJoinQuestions())) {
      if (!question.required) continue
      this.progressTracker.updateFieldRequiredStatus({
        label: question.question,
        required: true,
      })
    }
  }

  async doFillForm(forceRefetch = false) {
    this.publishJoinSteps()
    return super.doFillForm(forceRefetch)
  }
}
