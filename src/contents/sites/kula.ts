// @ts-nocheck
/**
 * Kula ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and kula/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "kula"
 */

import * as messaging from "@plasmohq/messaging"
import * as cancellation from "../methods/cancellation.ts"
import * as dom from "../methods/dom.ts"
import * as answerMethods from "../methods/answer.ts"
import { BaseFiller } from "./base-filler.ts"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as delay from "../../utils/delay.js"
import * as kulaAnswer from "./kula/answer.ts"
import * as companyClientSearch from "./kula/company-client-search.ts"
import * as companySearchDom from "./kula/company-search-dom.ts"
import * as educationClientSearch from "./kula/education-client-search.ts"
import * as educationSearchDom from "./kula/education-search-dom.ts"
import * as locationClientSearch from "./kula/location-client-search.ts"
import * as locationSearchDom from "./kula/location-search-dom.ts"
import * as operations from "./kula/operations.ts"
import * as rules from "./kula/rules.ts"

export class Kula extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) => {
          const text = Array.isArray(value) ? value[0] || "" : value || ""
          const label = rule.label?.toLowerCase() || ""
          return label.includes("phone")
            ? operations.fillPhoneField(rule, text)
            : operations.fillInputTextField(rule.$input, text)
        },
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: (rule, value) => {
          const text = Array.isArray(value) ? value[0] || "" : value || ""
          return operations.fillInputTextField(rule.$input, text)
        },
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
      [enums.FIELD_TYPE.SEARCH]: {
        handler: (rule, value) => operations.fillSearchField(rule, value),
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

  getSiteName() {
    return "kula"
  }

  formatAnswer(answer) {
    return kulaAnswer.formatAnswer(answer)
  }

  async runPreFillForm() {
    await operations.preFillForm()
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getKulaCoverLetterStatus())
  }

  async extractFormRules() {
    return await rules.getRules()
  }

  async handleResumeUpload() {
    if (!this.disableUploadResume && this.resumeInfo) {
      this.taskQueue.add(async () => {
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
          this.progressTracker.updateMissedProgress,
        )
      })
      await this.taskQueue.run()
      await delay.delay(400)
    } else {
      this.progressTracker.updateMissedProgress("Resume/CV")
    }

    if (
      this.coverLetter?.coverLetterId &&
      this.coverLetter?.coverLetterName
    ) {
      this.taskQueue.add(async () => {
        await operations.uploadCoverLetter(
          {
            coverLetterId: this.coverLetter.coverLetterId,
            coverLetterName: this.coverLetter.coverLetterName,
            markdown: this.coverLetter.markdown,
            useLegacyDownload: this.coverLetter.useLegacyDownload,
          },
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
          this.progressTracker.updateMissedProgress,
        )
      })
      await this.taskQueue.run()
      await delay.delay(400)
    } else {
      this.progressTracker.updateMissedProgress("Cover Letter")
    }
  }

  async fillRegularFields(formRules) {
    const operationConfig = {
      ...this.operationConfig,
    }

    for (const fieldType of [
      enums.FIELD_TYPE.TEXT,
      enums.FIELD_TYPE.SEARCH,
      enums.FIELD_TYPE.SELECT,
    ]) {
      const originalHandler = operationConfig[fieldType]
      operationConfig[fieldType] = async (rule, answer, options) => {
        const fieldTypeHint =
          locationClientSearch.classifyKulaLocationField(rule)
        if (!fieldTypeHint) return originalHandler?.(rule, answer, options)

        const result = await cancellation.withSkip(() =>
          locationClientSearch.resolveKulaLocationField(
            rule.$input,
            answer,
            fieldTypeHint,
            {
              requestStep: async (body) =>
                await messaging.sendToBackground({
                  name: "resolveAutofillClientSearchStep",
                  body,
                }),
              captureCandidates:
                locationSearchDom.captureKulaLocationCandidates,
              commitCandidate: locationSearchDom.commitKulaLocationCandidate,
              clearSearch: locationSearchDom.clearKulaLocationSearch,
            },
          ),
        )

        if (result.success && result.selected) {
          answer[rule.label] = result.selected.text
        } else {
          console.warn("[Kula][Address] client-search-failed", {
            reason: result.failureReason,
            rounds: result.rounds,
          })
        }
        return result.success
      }
    }

    const operationsList = [
      ...answerMethods.getRegularOperations(
        formRules,
        this.answer.regular,
        operationConfig,
      ),
    ]
    for (const operation of operationsList) {
      this.taskQueue.add(operation)
    }
    await this.taskQueue.run()
  }

  async fillEducationAndEmployment(_formRules) {
    const educationCount = this.answer.education?.length ?? 0
    if (educationCount > 0) {
      const existingCount = document.querySelectorAll(
        'div[data-test-id="education"]',
      ).length
      for (let i = existingCount; i < educationCount; i++) {
        const addButton = operations.getKulaSectionAddButton("Education")
        if (addButton) {
          addButton.click()
          await delay.delay(500)
        }
      }

      const educationRules = await rules.getEducationRules()
      coreDom.setSectionResultFocusRules("education", educationRules)
      console.debug("[Autofill][kula][section-results] registered", {
        type: "education",
        records: educationRules.length,
        fields: educationRules.reduce(
          (sum, rule) => sum + (rule.children?.length ?? 0),
          0,
        ),
      })

      let educationSearchFailed = false
      const operationConfig = {
        ...this.operationConfig,
      }

      for (const fieldType of [
        enums.FIELD_TYPE.TEXT,
        enums.FIELD_TYPE.SEARCH,
        enums.FIELD_TYPE.SELECT,
      ]) {
        const originalHandler = operationConfig[fieldType]
        operationConfig[fieldType] = async (rule, answer, options) => {
          const educationFieldType =
            educationClientSearch.classifyKulaEducationField(rule)
          if (!educationFieldType) {
            return originalHandler?.(rule, answer, options)
          }

          const result = await cancellation.withSkip(() =>
            educationClientSearch.resolveKulaEducationField(
              rule.$input,
              answer,
              educationFieldType,
              {
                requestStep: async (body) =>
                  await messaging.sendToBackground({
                    name: "resolveAutofillClientSearchStep",
                    body,
                  }),
                captureCandidates:
                  educationSearchDom.captureKulaEducationCandidates,
                commitCandidate:
                  educationSearchDom.commitKulaEducationCandidate,
                clearSearch: educationSearchDom.clearKulaEducationSearch,
              },
            ),
          )

          if (result.success && result.selected) {
            answer[rule.label] = result.selected.text
          } else {
            educationSearchFailed = true
            console.warn("[Kula][Education] client-search-failed", {
              fieldType: educationFieldType,
              reason: result.failureReason,
              rounds: result.rounds,
            })
          }
          return result.success
        }
      }

      const progressCallbacks = answerMethods.sectionProgressCallbacks(
        "Education",
        this.progressTracker,
      )
      const educationOperations = answerMethods.getEducationOperations(
        educationRules,
        this.answer.education,
        operationConfig,
        undefined,
        {
          ...progressCallbacks,
          onCompleted: () =>
            educationSearchFailed
              ? this.progressTracker.updateMissedProgress("Education")
              : progressCallbacks.onCompleted?.(),
        },
      )
      for (const operation of educationOperations) {
        this.taskQueue.add(operation)
      }
      await this.taskQueue.run()
    }

    const experienceCount = this.answer.workExperience?.length ?? 0
    if (experienceCount > 0) {
      const existingCount = document.querySelectorAll(
        'div[data-test-id="experience"]',
      ).length
      for (let i = existingCount; i < experienceCount; i++) {
        const addButton = operations.getKulaSectionAddButton("Experience")
        if (addButton) {
          addButton.click()
          await delay.delay(500)
        }
      }

      const experienceRules = await rules.getExperienceRules()
      coreDom.setSectionResultFocusRules("employment", experienceRules)
      console.debug("[Autofill][kula][section-results] registered", {
        type: "employment",
        records: experienceRules.length,
        fields: experienceRules.reduce(
          (sum, rule) => sum + (rule.children?.length ?? 0),
          0,
        ),
      })

      const operationConfig = {
        ...this.operationConfig,
      }
      let companySearchFailed = false

      for (const fieldType of [
        enums.FIELD_TYPE.TEXT,
        enums.FIELD_TYPE.SEARCH,
        enums.FIELD_TYPE.SELECT,
      ]) {
        const originalHandler = operationConfig[fieldType]
        operationConfig[fieldType] = async (rule, answer, options) => {
          if (!companyClientSearch.classifyKulaCompanyField(rule)) {
            return originalHandler?.(rule, answer, options)
          }

          const result = await cancellation.withSkip(() =>
            companyClientSearch.resolveKulaCompanyField(rule.$input, answer, {
              captureCandidates: companySearchDom.captureKulaCompanyCandidates,
              commitCandidate: companySearchDom.commitKulaCompanyCandidate,
              clearSearch: companySearchDom.clearKulaCompanySearch,
            }),
          )

          if (result.success && result.selected) {
            answer[rule.label] = result.selected.text
          } else {
            companySearchFailed = true
            console.warn("[Kula][Company] local-fill-failed", {
              reason: result.failureReason,
              rounds: result.rounds,
            })
          }
          return result.success
        }
      }

      const progressCallbacks = answerMethods.sectionProgressCallbacks(
        "Experience",
        this.progressTracker,
      )
      const experienceOperations = answerMethods.getEmploymentOperations(
        experienceRules,
        this.answer.workExperience,
        operationConfig,
        undefined,
        {
          ...progressCallbacks,
          onCompleted: () =>
            companySearchFailed
              ? this.progressTracker.updateMissedProgress("Experience")
              : progressCallbacks.onCompleted?.(),
        },
      )
      for (const operation of experienceOperations) {
        this.taskQueue.add(operation)
      }
      await this.taskQueue.run()
    }
  }

  async getAutofillSnapshot() {
    const snapshot = rules.getFormSnapshot()
    return snapshot
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  getSubmitButtonSelector() {
    return '//button[@data-testid="apply-button"]'
  }

  submitApplication() {
    const button = Array.from(document.querySelectorAll("button")).find(
      (el) =>
        /apply for this position|submit/i.test(el.textContent || ""),
    )
    if (button) button.click()
  }

  async doFillForm(forceRefetch = false) {
    return super.doFillForm(forceRefetch)
  }
}
