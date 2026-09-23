// @ts-nocheck
/**
 * XCompany ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and xcompany/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "xcompany"
 */

import * as dom from "../methods/dom.js"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as xcompanyAnswer from "./xcompany/answer.ts"
import * as operations from "./xcompany/operations.ts"
import * as rules from "./xcompany/rules.ts"

class XCompany extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) => operations.fillTextField(rule, value),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) => operations.fillSelectField(rule, value),
        options: {
          expectArray: false,
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
    return "xcompany"
  }

  async runPreFillForm() {
    await operations.preFillForm()
  }

  async checkCoverLetter() {
    await operations.preFillForm()
    let coverLetterInput = operations.getCoverLetterInput()
    let status = ""
    if (coverLetterInput) {
      status = operations.isCoverLetterRequired() ? "required" : "optional"
    }
    dom.postCoverLetterStatus(status)
  }

  async getAutofillSnapshot(formRules) {
    return await rules.getFormSnapshot(formRules)
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot(this.cachedRulesForSnapshot)
  }

  getSubmitButtonSelector() {
    return '//*[@id="main"]//x-island//form//button[@type="submit"]'
  }

  async extractFormRules() {
    let formRules = await rules.extractRules()
    this.cachedRulesForSnapshot = formRules
    return formRules
  }

  async handleResumeUpload() {
    let resumeInput = operations.getResumeInput()
    if (!resumeInput) return

    let required = operations.isResumeRequired()
    this.progressTracker.updateFieldRequiredStatus({
      label: "Resume/CV",
      required,
    })

    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV")
      return
    }

    this.taskQueue.add(async () => {
      await operations.uploadResume(
        this.resumeInfo,
        this.progressTracker.updateFieldRequiredStatus,
        this.progressTracker.updateFilledProgress,
      )
    })
    await this.taskQueue.run()
  }

  async fillRegularFields(formRules) {
    this.taskQueue.add(async () => {
      await operations.fillConsentCheckbox()
    })
    await this.taskQueue.run()

    let fillableRules = formRules.filter((rule) => {
      if (rule.type !== enums.FIELD_TYPE.TEXT) return true
      let input = rule.$input
      return input?.type !== "file"
    })

    let firstValue = (value) => (Array.isArray(value) ? value[0] : value)
    let normalizeChoice = (value) =>
      String(firstValue(value) ?? "")
        .trim()
        .toLowerCase()

    let fillDataList = this.answer.fillDataList ?? []
    let labelCounts = /* @__PURE__ */ new Map()
    for (let rule of fillableRules) {
      labelCounts.set(rule.label, (labelCounts.get(rule.label) || 0) + 1)
    }

    let duplicateSelectLabels = /* @__PURE__ */ new Set()
    for (let [label, count] of labelCounts) {
      if (count > 1) {
        let hasSelect = fillableRules.some(
          (rule) =>
            rule.label === label && rule.type === enums.FIELD_TYPE.SELECT,
        )
        if (hasSelect) duplicateSelectLabels.add(label)
      }
    }

    let answerQueuesByLabel = /* @__PURE__ */ new Map()
    for (let item of fillDataList) {
      if (item?.name && duplicateSelectLabels.has(item.name)) {
        let queue = answerQueuesByLabel.get(item.name) ?? []
        queue.push(item.value)
        answerQueuesByLabel.set(item.name, queue)
      }
    }

    for (let rule of fillableRules) {
      let handler = this.operationConfig[rule.type]
      if (!handler) continue

      if (
        duplicateSelectLabels.has(rule.label) &&
        rule.type === enums.FIELD_TYPE.SELECT
      ) {
        this.taskQueue.add(async () => {
          let queue = answerQueuesByLabel.get(rule.label) ?? []
          let selectRule = rule
          let matchIndex = queue.findIndex((candidate) =>
            (selectRule.options ?? []).some(
              (option) => normalizeChoice(option) === normalizeChoice(candidate),
            ),
          )

          if (matchIndex >= 0) {
            let matched = firstValue(queue.splice(matchIndex, 1)[0])
            let filled = await operations.fillSelectField(
              selectRule,
              typeof matched === "string" ? matched : String(matched ?? ""),
            )
            if (filled) {
              this.progressTracker.updateFilledProgress(rule.label)
            } else {
              this.progressTracker.updateMissedProgress(rule.label)
            }
          } else {
            await handler(rule, this.answer.regular)
          }
        })
        continue
      }

      this.taskQueue.add(async () => {
        await handler(rule, this.answer.regular)
      })
    }

    await this.taskQueue.run()
  }

  async executeSiteSpecificSteps(formRules) {
    this.taskQueue.add(async () => {
      await operations.fillAcknowledgeCheckbox()
      await operations.fillNestedAcknowledgeCheckbox()
    })

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
    await this.bindSubmitButtonTracking(formRules)
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    await this.handleResumeUpload()

    let formRules = await this.extractFormRules()
    let requiredStatus = [...formRules]
    let resumeInput = operations.getResumeInput()
    if (resumeInput) {
      requiredStatus.push({
        label: "Resume/CV",
        required: operations.isResumeRequired(),
      })
    }
    this.progressTracker.setFieldsRequiredStatus(requiredStatus)

    let answers = await this.fetchFormAnswers(formRules, forceRefetch)
    if (typeof answers === "string") return answers

    await this.fillRegularFields(formRules)
    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  submitApplication() {
    let button = xpath.getFirstOrderedNodeSafe(
      '//*[@id="main"]//x-island//form//button[@type="submit"]',
    )
    button?.click()
  }

  constructor(...args) {
    super(...args)
    this.cachedRulesForSnapshot = []
    this.formatAnswer = xcompanyAnswer.formatAnswer
  }
}

export { XCompany }
