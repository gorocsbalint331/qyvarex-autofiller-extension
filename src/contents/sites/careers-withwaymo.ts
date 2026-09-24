// @ts-nocheck
/**
 * Careers With Waymo ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and careers-withwaymo/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "careerswithwaymo"
 */

import * as coreDom from "../../core/dom.js"
import * as answerMethods from "../methods/answer.ts"
import * as dom from "../methods/dom.ts"
import * as track from "../methods/track.ts"
import * as autofillAnswerPairTracking from "./autofill-answer-pair-tracking.ts"
import { BaseFiller } from "./base-filler.js"
import * as urlStore from "../../store/url.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as starRating from "../../utils/starRating.js"
import * as waymoAnswer from "./careers-withwaymo/answer.ts"
import * as operations from "./careers-withwaymo/operations.ts"
import * as rules from "./careers-withwaymo/rules.ts"

class CareersWithWaymo extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.withwaymoSubmitTrackingAbortController = null
    this.lastFullAutofillSnapshot = null
    this.lastFullSubmitSnapshot = null
    this.formatAnswer = waymoAnswer.formatAnswer
  }

  extractEducationEmploymentAdditional(snapshot) {
    const { education, employment } = snapshot || {}
    return {
      education: education || [],
      employment: employment || [],
    }
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    const answers = await this.fetchFormAnswers(formRules, forceRefetch)
    if (typeof answers === "string") return answers

    await this.fillRegularFields(formRules)
    await this.fillEducationAndEmployment(formRules)
    await this.executeSiteSpecificSteps(formRules)
    await this.handleResumeUpload()
    return await this.finalizeFillForm()
  }

  async checkCoverLetter() {
    const input = rules.getCoverLetterInput()
    let status = ""
    if (input) {
      status = rules.isCoverLetterRequired(input) ? "required" : "optional"
    }
    dom.postCoverLetterStatus(status)
  }

  async executeSiteSpecificSteps(formRules) {
    await this.bindSubmitButtonTracking(formRules)
    const submitButton = rules.getFormContainer()?.querySelector(
      'button[type="submit"][name="next_step"][data-action="call-to-action--form#sendFormSubmission"][data-call-to-action--form-target="submitButton"][id^="form_submit_"]',
    )
    const submitText =
      submitButton
        ?.querySelector(".submit-state.submit-start")
        ?.textContent?.trim() ||
      submitButton?.textContent?.trim() ||
      "Submit your application"
    track.bindSubmitButton(
      submitText,
      this.progressTracker.fieldStatus,
      this.timeTrace,
    )
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const text = value?.[0]
        if (text != null) {
          return operations.fillInputTextField(
            rule.$input,
            String(text ?? ""),
            String(
              this.answer?.regular?.[waymoAnswer.PHONE_AREA_CODE_KEY] ?? "",
            ),
            this.answer?.country,
            rule.label,
          )
        }
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupFiled(rule, value),
    }
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "careerswithwaymo"
  }

  async handleResumeUpload() {
    if (this.disableUploadResume) {
      await operations.removeResume()
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(async () => {
        await operations.removeResume()
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    }

    if (this.coverLetter?.coverLetterId) {
      this.taskQueue.add(async () => {
        await operations.uploadCoverLetter(
          this.coverLetter,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    }

    await this.taskQueue.run()
  }

  async fillEducationAndEmployment(_formRules) {
    if (
      Array.isArray(this.answer?.education) &&
      this.answer.education.length
    ) {
      await operations.addEducationSection(this.answer.education.length)
      const educationRules = await rules.getEducationRules()
      coreDom.setSectionResultFocusRules("education", educationRules)
      const educationOps = answerMethods.getEducationOperations(
        educationRules,
        this.answer.education,
        this.operationConfig,
        undefined,
        {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onSkipped: () =>
            this.progressTracker.updateMissedProgress("Education"),
        },
      )
      for (const op of educationOps) this.taskQueue.add(op)
      await this.taskQueue.run()
    }

    if (
      Array.isArray(this.answer?.workExperience) &&
      this.answer.workExperience.length
    ) {
      await operations.addEmploymentSection(this.answer.workExperience.length)
      const experienceRules = await rules.getExperienceRules()
      coreDom.setSectionResultFocusRules("employment", experienceRules)
      const employmentOps = answerMethods.getEmploymentOperations(
        experienceRules,
        this.answer.workExperience,
        this.operationConfig,
        undefined,
        {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onSkipped: () =>
            this.progressTracker.updateMissedProgress("Employment"),
        },
      )
      for (const op of employmentOps) this.taskQueue.add(op)
      await this.taskQueue.run()
    }
  }

  getSubmitButtonSelector() {
    return './/form[@class="form-template" and @data-turbo="true" and @data-call-to-action--form-target="form" and starts-with(@id, "new_form_submission_") and @enctype="multipart/form-data" and contains(@action, "/call_to_actions/") and contains(@action, "/form_submissions")]//button[@type="submit" and @name="next_step" and @data-action="call-to-action--form#sendFormSubmission" and @data-call-to-action--form-target="submitButton" and starts-with(@id, "form_submit_")]'
  }

  async getAutofillSnapshot(_formRules) {
    const snapshot = (await rules.getFormSnapshot()) || {}
    this.lastFullAutofillSnapshot = snapshot
    const { education, employment, ...rest } = snapshot
    return rest
  }

  async getSubmitSnapshot() {
    const snapshot = (await rules.getFormSnapshot()) || {}
    this.lastFullSubmitSnapshot = snapshot
    const { education, employment, ...rest } = snapshot
    return rest
  }

  getAdditionalAutofillSnapshotData(_formRules) {
    return this.extractEducationEmploymentAdditional(
      this.lastFullAutofillSnapshot,
    )
  }

  getAdditionalSubmitSnapshotData() {
    return this.extractEducationEmploymentAdditional(
      this.lastFullSubmitSnapshot,
    )
  }

  async bindSubmitButtonTracking(formRules) {
    const autofillSnapshot = await this.getAutofillSnapshot(formRules)
    const additionalAutofillData =
      this.getAdditionalAutofillSnapshotData?.(formRules) || {}

    this.withwaymoSubmitTrackingAbortController?.abort()
    this.withwaymoSubmitTrackingAbortController = new AbortController()
    const { signal } = this.withwaymoSubmitTrackingAbortController

    let pendingSubmitSnapshot = null
    let starRatingAbortController = null

    const resolveSubmitButton = (target) => {
      if (!(target instanceof HTMLElement)) return null
      const button = target.closest(
        'button[type="submit"][name="next_step"][data-action="call-to-action--form#sendFormSubmission"][data-call-to-action--form-target="submitButton"][id^="form_submit_"]',
      )
      if (!button) return null
      const form = rules.getFormContainer()
      return button.closest("form") === form ? button : null
    }

    document.addEventListener(
      "pointerdown",
      async (event) => {
        const button = resolveSubmitButton(event.target)
        if (button) {
          pendingSubmitSnapshot = await this.getSubmitSnapshot()
        }
      },
      { capture: true, signal },
    )

    document.addEventListener(
      "click",
      async (event) => {
        const button = resolveSubmitButton(event.target)
        if (!button) return

        starRatingAbortController?.abort()
        starRatingAbortController = new AbortController()
        const starRatingSignal = starRatingAbortController.signal

        const submitSnapshot =
          pendingSubmitSnapshot ?? (await this.getSubmitSnapshot())
        pendingSubmitSnapshot = null

        const additionalSubmitData =
          this.getAdditionalSubmitSnapshotData?.() || {}
        const extraData =
          this.getAutofillAnswerPairExtraTrackingData?.() || {}

        autofillAnswerPairTracking.sendAutofillAnswerPairEvent({
          formUrl: urlStore.useUrlStore.getState().currentTabUrl,
          autofillSnapshot,
          submitSnapshot,
          additionalAutofillData,
          additionalSubmitData,
          extraData,
          source: this.getSiteName(),
        })

        starRating.handleSubmitStarRating(
          this.getSiteName(),
          autofillSnapshot,
          submitSnapshot,
          this.progressTracker.fieldStatus,
          this.getSubmitSuccessSelectors(),
          starRatingSignal,
        )
      },
      { capture: true, signal },
    )
  }

  submitApplication() {
    const selector = this.getSubmitButtonSelector()
    const button = selector ? xpath.getFirstOrderedNode(selector) : null
    if (button) button.click()
  }
}

export { CareersWithWaymo }
