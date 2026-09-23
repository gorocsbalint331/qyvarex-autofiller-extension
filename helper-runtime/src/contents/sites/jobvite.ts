// @ts-nocheck
/**
 * Jobvite ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and jobvite/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "jobvite"
 */

import * as answerMethods from "../methods/answer.ts"
import * as dom from "../methods/dom.ts"
import { BaseFiller } from "./base-filler.ts"
import * as jobviteAnswer from "./jobvite/answer.ts"
import * as operations from "./jobvite/operations.ts"
import * as rules from "./jobvite/rules.ts"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as pagenation from "../../core/pagenation.js"

export class Jobvite extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          operations.fillInputField(rule.$input, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule.$checkboxs, value),
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule.$input, value),
      [enums.FIELD_TYPE.RADIO]: (rule, value) =>
        operations.fillRadioField(rule.$input, value),
      [enums.FIELD_TYPE.DATE]: {
        handler: (rule, value) =>
          operations.fillDateField(rule.$input, value),
        options: {
          expectArray: false,
        },
      },
    }
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    const answersOrError = await this.fetchFormAnswers(formRules, forceRefetch)
    if (typeof answersOrError === "string") return answersOrError

    this.answer = jobviteAnswer.formatAnswer(this.answer)
    await this.handleResumeUpload()
    await this.fillRegularFields(formRules)
    await this.fillEducationAndEmployment(formRules)
    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  async extractFormRules() {
    const formRules = await rules.getRules()
    if (await operations.hasUploadedResume()) {
      formRules.push({
        label: "Resume/CV",
        required: true,
      })
    }
    return formRules
  }

  getSiteName() {
    return "jobvite"
  }

  async fillEducationAndEmployment(formRules) {
    const employmentRules = formRules.filter(
      (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
    )
    const workExperience = this.answer?.workExperience || []
    if (employmentRules.length === 0 || workExperience.length === 0) return

    console.info("[Jobvite][Employment] filling structured Work History", {
      ruleCount: employmentRules.length,
      recordCount: workExperience.length,
    })
    coreDom.setSectionResultFocusRules("employment", employmentRules)

    for (const operation of answerMethods.getEmploymentOperations(
      employmentRules,
      workExperience,
      this.operationConfig,
      undefined,
      {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onCompleted: () =>
          this.progressTracker.updateFilledProgress("Employment"),
        onSkipped: () =>
          this.progressTracker.updateMissedProgress("Employment"),
      },
    )) {
      this.taskQueue.add(operation)
    }
    await this.taskQueue.run()
  }

  formatAnswer(answer) {
    return jobviteAnswer.formatAnswer(answer)
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(
      (await operations.waitForCoverLetterSlot())
        ? operations.getCoverLetterStatus()
        : "",
    )
  }

  async executeSiteSpecificSteps(formRules) {
    try {
      await operations.uploadResume(this.resumeInfo)
      this.progressTracker.updateFilledProgress("Resume/CV")
    } catch (error) {
      console.error("Error uploading resume:", error)
      this.progressTracker.updateMissedProgress("Resume/CV")
    }

    const coverLetterStatus = operations.getCoverLetterStatus()
    if (coverLetterStatus) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: coverLetterStatus === "required",
      })
    }

    if (this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName) {
      try {
        const uploaded = await operations.uploadCoverLetter({
          coverLetterId: this.coverLetter.coverLetterId,
          coverLetterName: this.coverLetter.coverLetterName,
          markdown: this.coverLetter.markdown,
          useLegacyDownload: this.coverLetter.useLegacyDownload,
        })
        if (uploaded) {
          this.progressTracker.updateFilledProgress("Cover Letter")
        } else {
          this.progressTracker.updateMissedProgress("Cover Letter")
        }
      } catch (error) {
        console.error("Error uploading cover letter:", error)
        this.progressTracker.updateMissedProgress("Cover Letter")
      }
    }

    this.taskQueue.add(() => {
      operations.blurPage()
    })
    await this.taskQueue.run()
    await this.bindSubmitButtonTracking(formRules)
  }

  getSubmitButtonSelector() {
    return "//button[((@ng-click='nextStep()' and @aria-label='Next') or (@type='submit' and @aria-label='Send Application')) and not(contains(@class, 'ng-hide'))]"
  }

  async getAutofillSnapshot(_formRules) {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  submitApplication() {
    const button = Array.from(
      document.querySelectorAll(pagenation.JOBVITE_ADVANCE_BUTTON_SELECTOR),
    ).find((candidate) => {
      if (candidate.classList.contains("ng-hide")) return false
      const style = window.getComputedStyle(candidate)
      return style.display !== "none" && style.visibility !== "hidden"
    })
    button?.click()
  }
}
