// @ts-nocheck
/**
 * JobScore ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and JobScore/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "jobscore"
 */

import * as answerMethods from "../methods/answer.js"
import * as coverLetter from "../methods/cover-letter.js"
import * as dom from "../methods/dom.js"
import * as track from "../methods/track.js"
import { BaseFiller } from "./base-filler.ts"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as iframeEnums from "../../enums.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as delay from "../../utils/delay.js"
import * as stringUtils from "../../utils/string.ts"
import * as answers from "./JobScore/answers.ts"
import * as contactRuleOrder from "./JobScore/contact-rule-order.ts"
import * as country from "./JobScore/country.ts"
import * as operations from "./JobScore/operations.ts"
import * as rules from "./JobScore/rules.ts"

export class JobScore extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.hasComboQuestions = true
    this.lastFullAutofillSnapshot = null
    this.lastFullSubmitSnapshot = null
    this.currentRunCountry = null
    this.currentRunCountryPrefilled = false
    this.currentRunAutofillInfo = null
    this.formatAnswer = (answer) => answers.formatAnswer(answer)
  }

  async extractComboQuestionRules() {
    return coverLetter.markTextCoverLetterRules(
      await this.extractFormRules(true),
    )
  }

  async checkCoverLetter() {
    await operations.preFillForm()
    const coverRules = await rules.extractRules("div.js-section-cover-letter")
    const coverRule = coverRules.find((rule) => {
      const input = rule.$input
      const label = rule.label
        ?.toLowerCase()
        .replace(/[^a-z]+/g, " ")
        .trim()
      return (
        input?.name === "cover_letter" ||
        input?.id === "cover_letter" ||
        label === "cover letter"
      )
    })
    if (!coverRule) {
      dom.postCoverLetterStatus("")
      return
    }
    dom.postCoverLetterStatus(coverRule.required ? "required" : "optional")
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const text = value?.[0]
        if (!text) return
        const isCoverLetter =
          rule.$input.name === "cover_letter" ||
          rule.$input.id === "cover_letter" ||
          rule.label?.toLowerCase().includes("cover letter") ||
          rule.$input.closest(".js-section-cover-letter") !== null
        return isCoverLetter
          ? operations.fillCoverLetterField(String(text ?? ""))
          : operations.fillInputTextField(rule.$input, String(text ?? ""))
      },
      [enums.FIELD_TYPE.NUMBER]: (rule, value) =>
        operations.fillInputTextField(rule.$input, String(value?.[0] ?? "")),
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupFiled(rule, value),
    }
  }

  async fillIframeForm(fromAgent = false) {
    await this.initializeFillForm()
    operations.resetFilledElementsForNewRun()
    const formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    const answer = await this.fetchFormAnswers(formRules, fromAgent)
    if (typeof answer === "string") return answer

    await this.fillRegularFields(formRules)
    await this.executeSiteSpecificSteps(formRules)
    track.postStatus(
      "filling",
      this.progressTracker.fieldStatus,
      this.timeTrace,
    )
    window.top?.postMessage(
      stringUtils.cleanObject({
        type: enums.MESSAGE_EVENTS.autoFillResultFromIframe,
        data: this.progressTracker.fieldStatus,
      }),
      { targetOrigin: "*" },
    )
    return this.progressTracker.generateFinalProgress()
  }

  async extractFormRules(skipEditToggle = false) {
    if (this.isRunningInJobScoreIframe()) {
      return await rules.extractIframeFormRules()
    }

    if (!skipEditToggle) {
      await Promise.all([
        operations.clickSeeButton(
          '.js-area-container.experience[data-display="preview"] .js-link-edit-area-toggler[data-context="edit-area-data"]',
        ),
        operations.clickSeeButton(
          '.js-area-container.education[data-display="preview"] .js-link-edit-area-toggler[data-context="edit-area-data"]',
        ),
      ])
      await delay.delay(500)
    }

    const allRules = []
    allRules.push(...(await rules.extractRules("div.js-area-container.contact")))
    allRules.push(...(await rules.extractRules("div.js-section-cover-letter")))
    allRules.push(
      ...(await rules.extractEmploymentRules(
        ".js-area-container.experience[data-display='form']",
      )),
    )
    allRules.push(
      ...(await rules.extractEducationRules(
        '.js-area-container.education[data-display="form"]',
      )),
    )
    allRules.push(...(await rules.extractRules("div.js-section-questions")))
    return operations.cleanRules(allRules)
  }

  getSiteName() {
    return "jobscore"
  }

  isRunningInIframe() {
    return window.top !== window.self
  }

  isRunningInJobScoreIframe() {
    if (!this.isRunningInIframe()) return false
    const href = window.location.href
    if (href.startsWith("about:blank") || href.startsWith("about:")) {
      return false
    }
    const onJobScore =
      href.includes("jobscore.com") || href.includes("jobscore.co")
    const hasForm =
      document.querySelector(".js-section-container") !== null ||
      document.querySelector("form") !== null ||
      document.querySelector(".js-area-container") !== null
    return onJobScore && hasForm
  }

  hasOFCCPIframe() {
    if (this.isRunningInIframe()) return false
    for (const iframe of document.getElementsByTagName("iframe")) {
      if (!iframe.src) continue
      if (
        iframe.src.includes("ofccp/form?job_id=") &&
        iframe.src.includes("&internal_board=")
      ) {
        return true
      }
    }
    return false
  }

  hasCrossOriginJobScoreIframe() {
    if (this.isRunningInIframe()) return false
    for (const iframe of document.getElementsByTagName("iframe")) {
      if (!iframe.src) continue
      const isJobScore =
        iframe.src.includes("jobscore.com") ||
        iframe.src.includes("jobscore.co")
      if (!isJobScore) continue
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document
        if (!doc) return true
      } catch {
        return true
      }
    }
    return false
  }

  triggerJobScoreIframeFill(fromAgent = false) {
    if (!this.hasCrossOriginJobScoreIframe()) return
    for (const iframe of document.getElementsByTagName("iframe")) {
      if (!iframe.src) continue
      const isJobScore =
        iframe.src.includes("jobscore.com") ||
        iframe.src.includes("jobscore.co")
      if (!isJobScore) continue

      const interval = setInterval(() => {
        if (window.iframeLoaded) {
          iframe.contentWindow?.postMessage(
            {
              type: iframeEnums.IFRAME_EVENTS.EXECUTE_IFRAME_FUNCTION,
              data: {
                timestamp: Date.now(),
                fromAgent,
              },
              url: iframe.src,
            },
            "*",
          )
          clearInterval(interval)
        }
      }, 500)
      setTimeout(() => {
        clearInterval(interval)
      }, 10000)
    }
  }

  async getAutofillSnapshot() {
    const full = (await rules.getFormSnapshot()) || {}
    this.lastFullAutofillSnapshot = full
    const { education, employment, ...rest } = full
    return rest
  }

  async getSubmitSnapshot() {
    const full = (await rules.getFormSnapshot()) || {}
    this.lastFullSubmitSnapshot = full
    const { education, employment, ...rest } = full
    return rest
  }

  extractEducationEmploymentAdditional(snapshot) {
    const { education, employment } = snapshot || {}
    return {
      education: education || [],
      employment: employment || [],
    }
  }

  getAdditionalAutofillSnapshotData() {
    return this.extractEducationEmploymentAdditional(
      this.lastFullAutofillSnapshot,
    )
  }

  getAdditionalSubmitSnapshotData() {
    return this.extractEducationEmploymentAdditional(
      this.lastFullSubmitSnapshot,
    )
  }

  submitApplication() {
    const selector = this.getSubmitButtonSelector()
    if (!selector) return
    const button = xpath.getFirstOrderedNode(selector)
    if (button) button?.click()
  }

  async doFillForm(fromAgent = false) {
    if (this.isRunningInJobScoreIframe()) {
      return await this.fillIframeForm(fromAgent)
    }

    if (this.hasOFCCPIframe()) {
      return new Promise((resolve) => {
        const onMessage = (event) => {
          if (
            event.data.type === enums.MESSAGE_EVENTS.autoFillResultFromIframe
          ) {
            window.removeEventListener("message", onMessage)
            resolve(event.data.data)
          }
        }
        window.addEventListener("message", onMessage)
        setTimeout(() => {
          window.removeEventListener("message", onMessage)
          this.progressTracker.clear()
          resolve(this.progressTracker.generateFinalProgress())
        }, 60000)
      })
    }

    await this.initializeFillForm()
    operations.resetFilledElementsForNewRun()

    const initialRules = this.prepareCoverLetterRules(
      await this.extractFormRules(),
    )
    if (operations.isResumeOnlyPage()) {
      this.progressTracker.setFieldsRequiredStatus(
        operations.getResumeOnlyPageRequiredFields(initialRules),
      )
      await this.handleResumeUpload()
      return this.finalizeFillForm()
    }

    await this.handleResumeUpload()
    const answerResult = await this.fetchFormAnswers(initialRules, fromAgent)
    if (typeof answerResult === "string") return answerResult

    if (this.answer.education && Array.isArray(this.answer.education)) {
      await operations.addEducationFormElements(this.answer.education)
    }
    if (
      this.answer.workExperience &&
      Array.isArray(this.answer.workExperience)
    ) {
      this.answer.workExperience =
        operations.normalizeWorkExperienceRecords(this.answer.workExperience)
      await operations.addEmploymentFormElements(this.answer.workExperience)
    }

    const refreshedRules = coverLetter.markTextCoverLetterRules(
      await this.extractFormRules(true),
    )
    const resumeStatusBefore =
      this.progressTracker.fieldStatus.fieldRequiredStatus.find(
        (item) => item.label === "Resume/CV",
      )
    const wasResumeFilled =
      this.progressTracker.fieldStatus.filledFields.includes("Resume/CV")

    this.progressTracker.setFieldsRequiredStatus(refreshedRules)
    operations.restoreResumeProgressAfterRulesUpdate({
      resumeStatusBefore: resumeStatusBefore ?? undefined,
      wasResumeFilled,
      updateFieldRequiredStatus: this.progressTracker.updateFieldRequiredStatus,
      updateFilledProgress: this.progressTracker.updateFilledProgress,
    })

    const contactRules = refreshedRules.filter(
      (rule) =>
        rule.type !== enums.FIELD_TYPE.EDUCATION &&
        rule.type !== enums.FIELD_TYPE.EMPLOYMENT &&
        "$input" in rule &&
        rule.$input?.closest(".js-area-container.contact") !== null,
    )

    if (contactRules.length > 0) {
      const { mainCountryRules, regularRules } =
        country.partitionJobScoreContactRules(contactRules)

      if (this.currentRunCountryPrefilled) {
        for (const rule of mainCountryRules) {
          this.progressTracker.updateFilledProgress(rule.label)
        }
      }

      await this.fillRegularFields(
        contactRuleOrder.orderJobScoreContactRules(regularRules),
      )

      const retryRules = contactRuleOrder.getJobScoreLocationRetryRules(
        await rules.extractRules("div.js-area-container.contact"),
      )
      if (retryRules.length > 0) {
        const retryAnswer = await this.requestFormAnswers(
          retryRules,
          fromAgent,
          { updateTimeTrace: false },
        )
        if (typeof retryAnswer === "string") return retryAnswer
        if (retryAnswer) this.mergeComboQuestionAnswer(retryAnswer, retryRules)
        operations.resetFilledElementsForNewRun()
        this.answer.regular = contactRuleOrder.applyJobScoreLocationFallbacks(
          this.answer.regular,
          this.currentRunAutofillInfo,
        )
        await this.fillRegularFields(retryRules)
      }
    }

    if (
      this.answer.workExperience &&
      Array.isArray(this.answer.workExperience)
    ) {
      const employmentRules = await rules.extractEmploymentRules(
        ".js-area-container.experience[data-display='form']",
      )
      coreDom.setSectionResultFocusRules("employment", employmentRules)
      const ordered = operations.orderWorkExperienceByDom(
        employmentRules,
        this.answer.workExperience,
        operations.normalizeWorkExperienceRecords,
      )
      const ops = answerMethods.getEmploymentOperations(
        employmentRules,
        ordered,
        this.operationConfig,
        undefined,
        {
          onCompleted: () => {
            if (employmentRules.length > 0) {
              this.progressTracker.updateFilledProgress("Employment")
            }
          },
          onSkipped: () =>
            this.progressTracker.updateMissedProgress("Employment"),
          onSectionResultChanged: this.progressTracker.updateSectionResult,
        },
      )
      for (const op of ops) this.taskQueue.add(op)
      await this.taskQueue.run()
    }

    if (this.answer.education && Array.isArray(this.answer.education)) {
      const educationAnswers = operations.normalizeEducationRecords(
        this.answer.education,
      )
      const educationRules = await rules.extractEducationRules(
        '.js-area-container.education[data-display="form"]',
      )
      coreDom.setSectionResultFocusRules("education", educationRules)
      const ops = answerMethods.getEducationOperations(
        educationRules,
        educationAnswers,
        this.operationConfig,
        undefined,
        {
          onCompleted: () => {
            if (educationRules.length > 0) {
              this.progressTracker.updateFilledProgress("Education")
            }
          },
          onSkipped: () =>
            this.progressTracker.updateMissedProgress("Education"),
          onSectionResultChanged: this.progressTracker.updateSectionResult,
        },
      )
      for (const op of ops) this.taskQueue.add(op)
      await this.taskQueue.run()
    }

    const questionRules = refreshedRules.filter(
      (rule) =>
        rule.type !== enums.FIELD_TYPE.EDUCATION &&
        rule.type !== enums.FIELD_TYPE.EMPLOYMENT &&
        "$input" in rule &&
        rule.$input?.closest(".js-section-questions") !== null,
    )
    if (questionRules.length > 0) {
      await this.fillRegularFields(questionRules)
    }

    await this.fillCoverLetterFields()
    const comboResult = await this.runComboQuestionAutofillIfNeeded(
      refreshedRules,
      fromAgent,
    )
    if (typeof comboResult === "string") return comboResult

    await this.executeSiteSpecificSteps(comboResult)
    if (!this.disableUploadResume) {
      operations.syncResumeFilledProgress(
        this.progressTracker.updateFieldRequiredStatus,
        this.progressTracker.updateFilledProgress,
      )
    }
    return this.finalizeFillForm()
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
    await this.taskQueue.run()
  }

  async runPreFillForm() {
    this.currentRunCountry = null
    this.currentRunCountryPrefilled = false
    this.currentRunAutofillInfo = null

    const result = await country.runJobScoreCountryPrefill({
      preFillForm: operations.preFillForm,
      fetchAutofillInfo: async () => {
        const info = await autofillInfo.useAutofillInfoStore
          .getState()
          .fetchAutofillInfo()
        this.currentRunAutofillInfo = info
        return info
      },
      prefillCountry: (value) => country.prefillJobScoreCountry(value),
      waitForStateProvince: async (value) => {
        await country.waitForJobScoreStateProvinceControl(value)
      },
    })

    this.currentRunCountry = result.country
    this.currentRunCountryPrefilled = result.prefilled
  }

  getSubmitButtonSelector() {
    return './/button[@id="apply-button" or (@type="submit" and (contains(@class, "js-btn-apply") or contains(@class, "js-btn")))]'
  }
}
