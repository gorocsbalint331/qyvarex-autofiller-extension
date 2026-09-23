// @ts-nocheck
/**
 * JazzHR ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and jazzhr/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "jazzhr"
 */

import * as messaging from "@plasmohq/messaging"
import * as cancellation from "../methods/cancellation.js"
import * as dom from "../methods/dom.js"
import * as coverLetter from "../methods/cover-letter.js"
import * as answerMethods from "../methods/answer.js"
import * as track from "../methods/track.js"
import * as enums from "../../core/enums.js"
import * as stringUtils from "../../utils/string.ts"
import { BaseFiller } from "./base-filler.ts"
import * as jazzhrAnswer from "./jazzhr/answer.ts"
import * as operations from "./jazzhr/operations.ts"
import * as rules from "./jazzhr/rules.ts"
import * as tracking from "./jazzhr/tracking.ts"

const DISABILITY_SIGNATURE_DATE_ID = "resumator-eeoc_disability_date-value"

function isDisabilitySignatureDateRule(rule) {
  return (
    rule.type === enums.FIELD_TYPE.DATE &&
    rule.$input?.id === DISABILITY_SIGNATURE_DATE_ID
  )
}

function formatCurrentDateYmd() {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const day = String(now.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export class Jazzhr extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.answerPairSnapshotRules = []
    this.answerPairAutofillSnapshot = null
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          operations.fillInputTextField(rule.$input, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: (rule, value) =>
          operations.fillInputTextField(rule.$input, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) => operations.fillSelectField(rule, value),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => operations.fillCheckboxField(rule, value),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (rule, value) => operations.fillRadioGroupField(rule, value),
        options: {
          expectArray: true,
        },
      },
    }
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  getSiteName() {
    return "jazzhr"
  }

  formatAnswer(answer) {
    return jazzhrAnswer.formatAnswer(answer)
  }

  async getAutofillSnapshot(snapshotRules) {
    this.answerPairSnapshotRules = snapshotRules
    this.answerPairAutofillSnapshot = rules.getFormSnapshot(snapshotRules)
    return this.answerPairAutofillSnapshot
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot(this.answerPairSnapshotRules)
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  resolveDelegatedSubmitButton(target) {
    return tracking.resolveJazzhrTrackingButton(target)
  }

  normalizeAutofillAnswerPairTrackingData(data) {
    const { extraData, ...rest } = data
    return {
      ...rest,
      formUrl: data.formUrl || window.location.href,
      autofillSnapshot:
        this.answerPairAutofillSnapshot ?? data.autofillSnapshot,
    }
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(rules.getCoverLetterStatus())
  }

  async doFillForm(forceRefresh) {
    this.resetFalconResponseAccumulator()
    this.timeTrace.rulesParseStartTime = Date.now()
    this.progressTracker.clear()
    this.taskQueue.clear()

    const { rules: formRules, task: coverLetterTask } =
      coverLetter.prepareCoverLetterFillTask({
        rules: rules.extractRules(),
        coverLetter: this.coverLetter,
        resumeId: this.resumeInfo?.id,
        tailorId: this.resumeInfo?.tailorId,
      })
    this.progressTracker.setFieldsRequiredStatus(formRules)

    try {
      if (!this.token) this.token = await answerMethods.getSiteToken()
      const requestRules = formRules.filter((rule) => {
        const label = rule.label.toLowerCase()
        return !label.includes("start date") && !label.includes("human check")
      })
      this.timeTrace.requestStartTime = Date.now()
      const falconRun = this.captureFalconResponseRun()
      const response = await answerMethods.getElementRules(
        requestRules,
        "jazzhr",
        this.token,
        forceRefresh,
        this.resumeInfo.id,
        this.resumeInfo.tailorId,
      )
      this.recordFalconResponse(response, falconRun)
      this.answer = jazzhrAnswer.formatAnswer(response)
      this.timeTrace.fillStartTime = Date.now()
    } catch (error) {
      if (
        error instanceof answerMethods.HTTPError ||
        error instanceof answerMethods.ResumeMissingCodeError
      ) {
        track.sendHttpStatusMessage(error.message)
        return error.message
      }
      console.error("Unknown error occurred:", error)
    }

    cancellation.checkpoint()
    const submitButton = tracking.getJazzhrSubmitButton(document.body)
    if (submitButton) {
      track.bindSubmitButton(
        submitButton.textContent || "Submit",
        this.progressTracker.fieldStatus,
        this.timeTrace,
      )
    }

    const fillOperations = coverLetter
      .withoutCoverLetterRules(formRules)
      .flatMap((rule) => {
        if (!isDisabilitySignatureDateRule(rule)) {
          return answerMethods.getRegularOperations(
            [rule],
            this.answer.regular,
            this.operationConfig,
          )
        }
        const today = formatCurrentDateYmd()
        console.info("[JazzHR][disability-signature] filling current date", {
          fieldId: DISABILITY_SIGNATURE_DATE_ID,
          format: "YYYY-MM-DD",
          date: today,
        })
        return answerMethods.getRegularOperations(
          [rule],
          { [rule.label]: today },
          this.operationConfig,
        )
      })

    for (const operation of fillOperations) this.taskQueue.add(operation)
    await this.taskQueue.run()

    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(async () => {
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    }
    await this.taskQueue.run()

    await coverLetter.fillPreparedCoverLetterTask({
      task: coverLetterTask,
      coverLetter: this.coverLetter,
      answer: this.answer,
      updateMissedProgress: this.progressTracker.updateMissedProgress,
      operationConfig: this.operationConfig,
    })
    await this.executeSiteSpecificSteps(
      coverLetter.withoutCoverLetterRules(formRules),
    )

    const submitStatus = track.generateSubmitStatus(
      "filling",
      this.progressTracker.fieldStatus,
      this.timeTrace,
    )
    if (submitStatus.formData) {
      submitStatus.formData = this.filterFormData(submitStatus.formData)
    }
    await messaging.sendToBackground({
      name: "saveSubmitStatus",
      body: {
        submitStatus,
        status: "filling",
      },
    })
    window.top?.postMessage(
      stringUtils.cleanObject({
        type: enums.MESSAGE_EVENTS.autoFillResultFromIframe,
        data: this.progressTracker.fieldStatus,
      }),
      { targetOrigin: "*" },
    )
    return this.progressTracker.generateFinalProgress()
  }

  submitApplication() {
    const button = tracking.getJazzhrSubmitButton(document.body)
    if (button) button.click()
  }

  filterFormData(formData) {
    if (!formData || typeof formData !== "object") return formData
    const filtered = {}
    for (const [key, value] of Object.entries(formData)) {
      if (key === "resumator-questionnaire") continue
      if (Array.isArray(value)) {
        const nonEmpty = value.filter((item) => {
          if (item == null) return false
          if (typeof item === "object") {
            const hasValue = Object.values(item).some((entry) =>
              typeof entry === "object" && entry !== null
                ? entry.value !== null &&
                  entry.value !== undefined &&
                  entry.value !== ""
                : entry != null && entry !== "",
            )
            return hasValue
          }
          return true
        })
        const ratio = nonEmpty.length / value.length
        if (ratio < 0.2) continue
      }
      filtered[key] = value
    }
    return filtered
  }
}
