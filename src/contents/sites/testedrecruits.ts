// @ts-nocheck
/**
 * TestedRecruits filler.
 * Site id: "testedrecruits"
 */

import { DefaultFiller } from "./default.ts"
import * as answerMethods from "../methods/answer.ts"
import * as dom from "../methods/dom.ts"
import * as operations from "./testedrecruits/operations.ts"
import * as rules from "./testedrecruits/rules.ts"

export class TestedRecruits extends DefaultFiller {
  getSiteName() {
    return "testedrecruits"
  }

  async extractFormRules() {
    return rules.getRules()
  }

  async handleResumeUpload() {
    const input = operations.findTestedRecruitsResumeInput()
    if (!input || this.disableUploadResume || !this.resumeInfo) return
    const prepared = await answerMethods.fetchPdfAsBlob(this.resumeInfo)
    await dom.uploadFiles(
      input,
      prepared,
      this.progressTracker.updateFieldRequiredStatus,
      this.progressTracker.updateFilledProgress,
      "Resume/CV",
    )
  }

  async doFillForm(forceRefetch = false) {
    const result = await super.doFillForm(forceRefetch)
    operations.finishTestedRecruitsFields()
    return result
  }
}
