// @ts-nocheck
/**
 * Meta Careers ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and metacareers/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "metacareers"
 */

import * as messaging from "@plasmohq/messaging"
import * as answerMethods from "../methods/answer.ts"
import { BaseFiller } from "./base-filler.ts"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as metacareersAnswer from "./metacareers/answer.ts"
import * as currentLocation from "./metacareers/current-location.ts"
import * as locationOperation from "./metacareers/location-operation.ts"
import * as operations from "./metacareers/operations.ts"
import * as rules from "./metacareers/rules.ts"

class MetaCareers extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        let regularValue = value
        if (!locationOperation.isMetaCurrentLocationRule(rule)) {
          if (!regularValue) return
          return operations.fillInputTextField(
            rule.$input,
            String(regularValue ?? ""),
            rule.label,
          )
        }
        return currentLocation.fillMetaCurrentLocation(
          {
            answer: this.answer,
            rule,
            regularValue,
          },
          {
            prepareCapture: async (expectedValue) =>
              await messaging.sendToBackground({
                name: "prepareMetaCareersLocationCapture",
                body: {
                  expectedValue,
                },
              }),
            triggerNativeSearch: operations.triggerMetaCurrentLocationSearch,
            resolveCaptured: async (captureId) =>
              await messaging.sendToBackground({
                name: "resolveCapturedMetaCareersLocation",
                body: {
                  captureId,
                },
              }),
            fillResolvedLocation: operations.fillResolvedCurrentLocation,
          },
        )
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIO]: (rule, value) =>
        operations.fillRadioFiled(rule, value),
      [enums.FIELD_TYPE.MULTI_SELECT]: (rule, value) =>
        operations.fillMultiSelectField(rule, value),
    }
  }

  async doFillForm(skipPreFill = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    const fetchResult = await this.fetchFormAnswers(formRules, skipPreFill)
    if (typeof fetchResult === "string") return fetchResult

    this.answer = metacareersAnswer.formatAnswer(this.answer, formRules)
    await this.fillRegularFields(formRules)
    await this.executeSiteSpecificSteps(formRules)
    await this.handleResumeUpload()
    await rules.getFormSnapshot()
    return this.finalizeFillForm()
  }

  async executeSiteSpecificSteps(formRules) {
    let educationOperations = []
    if (this.answer.education.length > 0) {
      await operations.addExpOrEduSection(this.answer.education.length - 1)
      const educationRules = await rules.getAllExpOrEduRulesInFill(true)
      coreDom.setSectionResultFocusRules("education", educationRules)
      const educationFillOps = answerMethods.getEducationOperations(
        educationRules,
        this.answer.education,
        this.operationConfig,
        undefined,
        answerMethods.sectionProgressCallbacks(
          "Education",
          this.progressTracker,
        ),
      )
      educationOperations = [
        ...answerMethods.getRegularOperations(
          currentLocation.getMetaCareersEducationReplayRules(formRules),
          this.answer.regular,
          this.operationConfig,
        ),
        ...educationFillOps,
      ]
    }

    if (this.answer.workExperience.length > 0) {
      let sectionsToAdd = this.answer.workExperience.length - 1
      if (this.answer.workExperience.length > 6) {
        sectionsToAdd = 5
      }
      await operations.addExpOrEduSection(sectionsToAdd)
      this.taskQueue.add(async () => {
        await operations.fillWorkExperience(
          this.answer.workExperience.length > 6
            ? this.answer.workExperience.slice(0, 6)
            : this.answer.workExperience,
          {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
          },
        )
      })
      this.taskQueue.add(async () => {
        await operations.fillSkills(this.answer.skills)
      })
    }

    for (const operation of educationOperations) {
      this.taskQueue.add(operation)
    }
    await this.taskQueue.run()
    if (this.answer.workExperience.length > 0) {
      this.progressTracker.updateFilledProgress("Employment")
    }
    await this.bindSubmitButtonTracking(formRules)
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "metacareers"
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

  getSubmitButtonSelector() {
    return "//div[@role='button' and .//span[text()='Submit']]"
  }

  async getAutofillSnapshot(formRules) {
    return await rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot()
  }

  submitApplication() {
    const selector = this.getSubmitButtonSelector()
    if (!selector) return
    const button = xpath.getFirstOrderedNodeSafe(selector)
    if (!button) {
      console.warn("[submitApplication] No submit button found")
      return
    }
    if (button) button.click()
  }
}

export { MetaCareers }
