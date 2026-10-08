// @ts-nocheck
/**
 * Traffit filler.
 * Site id: "traffit"
 */

import { DefaultFiller } from "./default.ts"
import * as answerMethods from "../methods/answer.ts"
import * as dom from "../methods/dom.ts"
import * as operations from "./traffit/operations.ts"
import * as rules from "./traffit/rules.ts"

export class Traffit extends DefaultFiller {
  getSiteName() {
    return "traffit"
  }

  async extractFormRules() {
    return rules.getRules()
  }

  async doFillForm(forceRefetch = false) {
    const result = await super.doFillForm(forceRefetch)
    await operations.confirmTraffitDates()
    operations.selectStrongestRatings()
    return result
  }

  async handleResumeUpload() {
    const input = operations.findTraffitResumeInput()
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
}
