// @ts-nocheck
/**
 * Apple Careers ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and apple/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "apple"
 */

import * as cancellation from "../methods/cancellation.ts"
import * as answerMethods from "../methods/answer.ts"
import * as rulesMethods from "../methods/rules.ts"
import * as dom from "../methods/dom.ts"
import * as track from "../methods/track.ts"
import * as operations from "./apple/operations.ts"
import * as appleAnswer from "./apple/answer.ts"
import * as appleCountry from "./apple/country.ts"
import * as appleRules from "./apple/rules.ts"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as delay from "../../utils/delay.js"
import { BaseFiller } from "./base-filler.js"

const SITE_NAME = "apple"

export class Apple extends BaseFiller {
  constructor() {
    super()
    this.continueButtonHandler = null
    this.activeFillPromise = null
    this.lastFillFromAgent = false
    this.continueRefillCaptureHandler = null
    this.lastContinueRefillAt = 0
    this.coverLetterStatusObserver = null
    this.coverLetterStatusTimer = null
    this.lastCoverLetterStatus = null
    this.currentRunCountryCommitted = false
    this.bindCoverLetterStatusObserver()
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) => {
          if (
            rule.label === "Skills" ||
            rule.$input.id === "apply-skills-typeahead-suggestion-textbox"
          ) {
            const skills = this.answer?.skills
            return operations.fillSkills(skills)
          }
          return operations.fillInputTextField(rule.$input, value, rule.label)
        },
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.LISTBOX]: {
        handler: (rule, value) => {
          if (
            rule.label === "Skills" ||
            rule.$input?.id === "apply-skills-typeahead-suggestion-textbox"
          ) {
            const skills = this.answer?.skills?.length ? this.answer.skills : value
            return operations.fillSkills(skills)
          }
          return operations.fillListbox(rule.$input, value, rule.label)
        },
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          rule.$input instanceof HTMLSelectElement
            ? operations.fillSelectField(rule.$input, value, rule.label)
            : operations.fillCustomDropdown(rule.$input, value, rule.label),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => operations.fillRadioGroup(rule, value),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: (rule, value) => operations.fillSplitDate(rule, value),
        options: {
          expectArray: false,
        },
      },
    }
  }

  async extractFormRules() {
    return await appleRules.getRules()
  }

  getSiteName() {
    return SITE_NAME
  }

  formatAnswer(answer) {
    return appleAnswer.formatAnswer(answer)
  }

  async getAutofillSnapshot() {
    return appleRules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return appleRules.getFormSnapshot()
  }

  async executeSiteSpecificSteps() {}

  async checkCoverLetter() {
    this.syncCoverLetterStatus(true)
  }

  syncCoverLetterStatus(force = false) {
    const status = operations.getAppleCoverLetterStatus()
    if (force || status !== this.lastCoverLetterStatus) {
      this.lastCoverLetterStatus = status
      dom.postCoverLetterStatus(status)
    }
  }

  scheduleCoverLetterStatusSync(force = false) {
    if (this.coverLetterStatusTimer) {
      window.clearTimeout(this.coverLetterStatusTimer)
    }
    this.coverLetterStatusTimer = window.setTimeout(() => {
      this.syncCoverLetterStatus(force)
    }, 150)
  }

  bindCoverLetterStatusObserver() {
    if (this.coverLetterStatusObserver || !document.body) {
      this.scheduleCoverLetterStatusSync(true)
      return
    }
    this.coverLetterStatusObserver = new MutationObserver(() => {
      this.scheduleCoverLetterStatusSync()
    })
    this.coverLetterStatusObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    })
    this.scheduleCoverLetterStatusSync(true)
  }

  async doFillForm(fromAgent) {
    this.lastFillFromAgent = fromAgent
    this.bindContinueRefillListener()
    if (this.activeFillPromise) return await this.activeFillPromise

    this.activeFillPromise = this.runFillForm(fromAgent)
    try {
      return await this.activeFillPromise
    } finally {
      this.activeFillPromise = null
    }
  }

  getCurrentStepFingerprint() {
    const stepLabel = document.querySelector(
      'li.apply-progress-step[aria-current="step"] .apply-progress-label span',
    )
    const stepText = stepLabel?.textContent?.trim().toLowerCase() || ""
    const region =
      document.getElementById("apply-profileInformation-form") ||
      document.querySelector("main")
    const regionKey =
      region?.getAttribute("id") ||
      region?.getAttribute("aria-label") ||
      region?.className ||
      ""
    return `${stepText}::${regionKey}`
  }

  bindContinueRefillListener() {
    if (this.continueRefillCaptureHandler) return
    const cooldownMs = 2500

    this.continueRefillCaptureHandler = (event) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const continueButton = target.closest("#apply-step-continue-button")
      if (
        !continueButton?.isConnected ||
        continueButton.disabled ||
        continueButton.getAttribute("aria-disabled") === "true"
      ) {
        return
      }

      const fingerprintBefore = this.getCurrentStepFingerprint()
      const now = Date.now()
      if (now - this.lastContinueRefillAt < cooldownMs) return
      this.lastContinueRefillAt = now

      window.setTimeout(() => {
        const pollStartedAt = Date.now()
        const poll = () => {
          const fingerprintAfter = this.getCurrentStepFingerprint()
          if (fingerprintAfter && fingerprintAfter !== fingerprintBefore) {
            this.scheduleCoverLetterStatusSync(true)
            this.fillForm(this.lastFillFromAgent)
            return
          }
          if (Date.now() - pollStartedAt > 8000) return
          window.setTimeout(poll, 300)
        }
        poll()
      }, 1200)
    }

    document.addEventListener("click", this.continueRefillCaptureHandler, true)
  }

  async runFillForm(fromAgent = false) {
    this.resetFalconResponseAccumulator()
    await this.taskQueue.run()

    const stepLabel = document.querySelector(
      'li.apply-progress-step[aria-current="step"] .apply-progress-label span',
    )
    const stepText = stepLabel?.textContent?.trim().toLowerCase() || ""

    if (stepText.includes("resume") && stepText.includes("add")) {
      this.timeTrace.rulesParseStartTime = Date.now()
      this.progressTracker.clear()
      this.taskQueue.clear()
      if (!this.disableUploadResume) {
        this.taskQueue.add(async () => {
          await operations.uploadResume(
            this.resumeInfo,
            this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress,
          )
        })
        await this.taskQueue.run()
      }

      const snapshot = appleRules.getFormSnapshot()
      const continueButton = document.getElementById("apply-step-continue-button")
      if (continueButton) {
        if (this.continueButtonHandler) {
          continueButton.removeEventListener("click", this.continueButtonHandler)
        }
        this.continueButtonHandler = operations.submitHandler.bind(null, snapshot)
        continueButton.addEventListener("click", this.continueButtonHandler)
      }
      track.postStatus("filling", this.progressTracker.fieldStatus, this.timeTrace)
      return this.progressTracker.generateFinalProgress()
    }

    this.timeTrace.rulesParseStartTime = Date.now()
    this.progressTracker.clear()
    this.taskQueue.clear()

    if (stepText.includes("profile") && stepText.includes("information")) {
      const manualOption = document.getElementById("manualOption")
      const resumeOption = document.getElementById("resumeOption")
      if (manualOption || resumeOption) {
        this.taskQueue.add(operations.selectManualFillOption)
        await this.taskQueue.run()
        await operations.waitPageClean()
        await delay.delay(1200)
        if (!document.getElementById("apply-profileInformation-form")) {
          console.warn(
            "[Apple] Profile Information form did not appear after selecting manual fill",
          )
          track.postStatus(
            "filling",
            this.progressTracker.fieldStatus,
            this.timeTrace,
          )
          return this.progressTracker.generateFinalProgress()
        }
      }
    }

    this.taskQueue.add(operations.preclickAddButtons)
    await this.taskQueue.run()
    this.currentRunCountryCommitted = false

    let freshAutofillInfo = null
    try {
      freshAutofillInfo = await autofillInfo.useAutofillInfoStore
        .getState()
        .fetchAutofillInfo()
    } catch {
      console.warn("[Apple][Country] fresh Autofill Information fetch failed")
    }

    cancellation.checkpoint()
    const countryResult = await appleCountry.prefillAppleCountry(
      freshAutofillInfo?.location?.country,
      document,
      {
        checkpoint: cancellation.checkpoint,
      },
    )
    this.currentRunCountryCommitted = countryResult.committed

    const allRules = await appleRules.getRules()
    const nonCountryRules = allRules.filter(
      (rule) => !appleCountry.isMainAppleCountryRule(rule),
    )
    const deferredDependentRules = countryResult.dependentsSettled
      ? []
      : nonCountryRules.filter(appleCountry.isAppleCountryDependentRule)
    const immediateRules = countryResult.dependentsSettled
      ? nonCountryRules
      : nonCountryRules.filter(
          (rule) => !appleCountry.isAppleCountryDependentRule(rule),
        )

    this.progressTracker.setFieldsRequiredStatus(allRules)

    const mainCountryRules = allRules.filter(appleCountry.isMainAppleCountryRule)
    for (const rule of mainCountryRules) {
      if (this.currentRunCountryCommitted) {
        this.progressTracker.updateFilledProgress(rule.label)
      } else {
        this.progressTracker.updateMissedProgress(rule.label)
      }
    }

    if (countryResult.discovery === "ambiguous") {
      for (const rule of deferredDependentRules) {
        this.progressTracker.updateMissedProgress(rule.label)
      }
      console.warn(
        "[Apple][Country] skipped stage: main geographic Country controls are ambiguous",
      )
      track.postStatus("filling", this.progressTracker.fieldStatus, this.timeTrace)
      return this.progressTracker.generateFinalProgress()
    }

    const emptyAnswer = () => ({
      education: [],
      workExperience: [],
      skills: [],
      regular: {},
    })

    try {
      const filteredRules = rulesMethods.filterRulesByLabel(immediateRules, [])
      if (filteredRules.length > 0) {
        if (!this.token) this.token = await answerMethods.getSiteToken()
        this.timeTrace.requestStartTime = Date.now()
        const falconRun = this.captureFalconResponseRun()
        const falconAnswer = await answerMethods.getElementRules(
          filteredRules,
          SITE_NAME,
          this.token,
          fromAgent,
          this.resumeInfo.id,
          this.resumeInfo.tailorId,
        )
        this.recordFalconResponse(falconAnswer, falconRun)
        this.answer = appleAnswer.formatAnswer(falconAnswer)
      } else {
        this.answer = emptyAnswer()
      }
    } catch (error) {
      if (
        error instanceof answerMethods.HTTPError ||
        error instanceof answerMethods.ResumeMissingCodeError
      ) {
        track.sendHttpStatusMessage(error.message)
        return error.message
      }
      throw error
    }

    cancellation.checkpoint()
    const submitButtonText = appleRules.getSubmitButtonText()
    track.bindSubmitButton(
      submitButtonText,
      this.progressTracker.fieldStatus,
      this.timeTrace,
    )

    if (this.answer.education && this.answer.education.length > 0) {
      for (let i = 1; i < this.answer.education.length; i++) {
        this.taskQueue.add(operations.addEducationSection)
      }
    }
    if (this.answer.workExperience && this.answer.workExperience.length > 0) {
      for (let i = 1; i < this.answer.workExperience.length; i++) {
        this.taskQueue.add(operations.addEmploymentSection)
      }
    }

    await this.taskQueue.run()
    await delay.delay(200)
    this.timeTrace.fillStartTime = Date.now()

    const eduRules = await appleRules.getEduRules()
    const expRules = await appleRules.getExpRules()
    coreDom.setSectionResultFocusRules("education", eduRules)
    coreDom.setSectionResultFocusRules("employment", expRules)

    const employmentOps = answerMethods.getEmploymentOperations(
      expRules,
      this.answer.workExperience,
      this.operationConfig,
      undefined,
      {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onCompleted: () => this.progressTracker.updateFilledProgress("Employment"),
        onSkipped: () => this.progressTracker.updateMissedProgress("Employment"),
      },
    )
    const educationOps = answerMethods.getEducationOperations(
      eduRules,
      this.answer.education,
      this.operationConfig,
      undefined,
      {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onCompleted: () => this.progressTracker.updateFilledProgress("Education"),
        onSkipped: () => this.progressTracker.updateMissedProgress("Education"),
      },
    )
    const regularOps = answerMethods.getRegularOperations(
      immediateRules,
      this.answer.regular,
      this.operationConfig,
    )
    const allOps = [...regularOps, ...employmentOps, ...educationOps]
    for (const op of allOps) this.taskQueue.add(op)

    await this.taskQueue.run()

    if (deferredDependentRules.length > 0) {
      const dependentsReady = await appleCountry.waitForAppleCountryDependents(
        countryResult.dependentBaseline,
        countryResult.dependentExpectation,
        document,
        {
          checkpoint: cancellation.checkpoint,
        },
      )
      if (dependentsReady) {
        const refreshedRules = await appleRules.getRules()
        const dependentRules = refreshedRules.filter(
          appleCountry.isAppleCountryDependentRule,
        )
        for (const rule of dependentRules) {
          this.progressTracker.updateFieldRequiredStatus(rule)
        }
        const filteredDependentRules = rulesMethods.filterRulesByLabel(
          dependentRules,
          [],
        )
        if (filteredDependentRules.length > 0) {
          try {
            if (!this.token) this.token = await answerMethods.getSiteToken()
            const falconRun = this.captureFalconResponseRun()
            const falconAnswer = await answerMethods.getElementRules(
              filteredDependentRules,
              SITE_NAME,
              this.token,
              fromAgent,
              this.resumeInfo.id,
              this.resumeInfo.tailorId,
            )
            this.recordFalconResponse(falconAnswer, falconRun)
            const formatted = appleAnswer.formatAnswer(falconAnswer)
            cancellation.checkpoint()
            const dependentOps = answerMethods.getRegularOperations(
              dependentRules,
              formatted.regular,
              this.operationConfig,
            )
            for (const op of dependentOps) this.taskQueue.add(op)
            await this.taskQueue.run()
          } catch (error) {
            if (
              error instanceof answerMethods.HTTPError ||
              error instanceof answerMethods.ResumeMissingCodeError
            ) {
              track.sendHttpStatusMessage(error.message)
              return error.message
            }
            throw error
          }
        }
      } else {
        for (const rule of deferredDependentRules) {
          this.progressTracker.updateMissedProgress(rule.label)
        }
        console.warn(
          "[Apple][Country] deferred address rules skipped: dependent state remains unverified",
        )
      }
    }

    const coverLetterStatus = operations.isAppleCoverLetterStep()
      ? operations.getAppleCoverLetterStatus()
      : ""
    if (coverLetterStatus === "required") {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: true,
        type: "file",
      })
      if (this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName) {
        this.taskQueue.add(async () => {
          const uploaded = await operations.uploadCoverLetter(
            this.coverLetter,
            this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress,
          )
          if (!uploaded) this.progressTracker.updateMissedProgress("Cover Letter")
        })
      } else {
        this.progressTracker.updateMissedProgress("Cover Letter")
      }
    }

    if (stepText.includes("self-disclosure")) {
      const modal = await operations.openDisabilityModal()
      if (modal) {
        const disabilityRules = await appleRules.getDisabilityModalRules()
        if (disabilityRules.length > 0) {
          let disabilityAnswer
          disabilityRules.forEach((rule) => {
            this.progressTracker.updateFieldRequiredStatus({
              label: rule.label,
              required: rule.required,
              options: rule.options,
              type: rule.type,
            })
          })
          const filteredDisabilityRules = rulesMethods.filterRulesByLabel(
            disabilityRules,
            [],
          )
          try {
            const falconRun = this.captureFalconResponseRun()
            const falconAnswer = await answerMethods.getElementRules(
              filteredDisabilityRules,
              SITE_NAME,
              this.token,
              fromAgent,
              this.resumeInfo.id,
              this.resumeInfo.tailorId,
            )
            this.recordFalconResponse(falconAnswer, falconRun)
            disabilityAnswer = appleAnswer.formatAnswer(falconAnswer)
          } catch (error) {
            if (
              error instanceof answerMethods.HTTPError ||
              error instanceof answerMethods.ResumeMissingCodeError
            ) {
              track.sendHttpStatusMessage(error.message)
              return error.message
            }
            throw error
          }
          cancellation.checkpoint()
          const disabilityOps = answerMethods.getRegularOperations(
            disabilityRules,
            disabilityAnswer.regular,
            this.operationConfig,
          )
          for (const op of disabilityOps) this.taskQueue.add(op)
          await this.taskQueue.run()
          const submitted = await operations.submitDisabilityModal()
          if (!submitted) {
            console.warn("[Apple] Disability modal submit did not complete")
          }
        }
      }
    }

    await delay.delay(500)
    await operations.blurPage()
    this.taskQueue.add(async () => {
      await operations.fillAgreementCheckbox()
    })
    await this.taskQueue.run()

    const finalSnapshot = appleRules.getFormSnapshot()
    const continueButton = document.getElementById("apply-step-continue-button")
    if (continueButton) {
      if (this.continueButtonHandler) {
        continueButton.removeEventListener("click", this.continueButtonHandler)
      }
      this.continueButtonHandler = operations.submitHandler.bind(null, finalSnapshot)
      continueButton.addEventListener("click", this.continueButtonHandler)
    }
    track.postStatus("filling", this.progressTracker.fieldStatus, this.timeTrace)
    return this.progressTracker.generateFinalProgress()
  }

  submitApplication() {}
}
