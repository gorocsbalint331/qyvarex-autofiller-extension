// @ts-nocheck
/**
 * JustJoin filler.
 * Site id: "justjoin"
 */

import { DefaultFiller } from "./default.ts"
import * as answerMethods from "../methods/answer.ts"
import * as dom from "../methods/dom.ts"
import * as operations from "./justjoin/operations.ts"
import * as rules from "./justjoin/rules.ts"

export class JustJoin extends DefaultFiller {
  getSiteName() {
    return "justjoin"
  }

  async runPreFillForm() {
    await operations.openJustJoinApplyForm()
  }

  async extractFormRules() {
    return rules.getRules()
  }

  async handleResumeUpload() {
    const input = operations.findJustJoinResumeInput()
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
    operations.acceptJustJoinConsent()
    return result
  }
}
