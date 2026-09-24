// @ts-nocheck
/**
 * Jacobs ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and jacobs/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "jacobs"
 */

import * as messaging from "@plasmohq/messaging"
import * as answerMethods from "../methods/answer.ts"
import { BaseFiller } from "./base-filler.ts"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as jacobsAnswer from "./jacobs/answer.ts"
import * as educationClientSearch from "./jacobs/education-client-search.ts"
import * as operations from "./jacobs/operations.ts"
import * as rules from "./jacobs/rules.ts"

function normalizeRuleLabel(rule) {
  return String(rule.label || "")
    .replace(/\s*\*\s*$/, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function isCountryRule(rule) {
  const label = normalizeRuleLabel(rule)
  return label === "country" || label.startsWith("country/")
}

function isStateRule(rule) {
  const label = normalizeRuleLabel(rule)
  return (
    label === "state" ||
    label.startsWith("state/") ||
    label.startsWith("state /") ||
    label.startsWith("state ")
  )
}

function reorderCountryBeforeState(rulesList) {
  const countryRules = rulesList.filter(isCountryRule)
  if (!countryRules.length) return rulesList
  const withoutCountry = rulesList.filter((rule) => !isCountryRule(rule))
  const stateIndex = withoutCountry.findIndex(isStateRule)
  return stateIndex < 0
    ? rulesList
    : [
        ...withoutCountry.slice(0, stateIndex),
        ...countryRules,
        ...withoutCountry.slice(stateIndex),
      ]
}

const educationClientSearchDeps = {
  requestStep: async (body) =>
    await messaging.sendToBackground({
      name: "resolveAutofillClientSearchStep",
      body,
    }),
  captureCandidates: operations.captureJacobsEducationSelect2Candidates,
  commitCandidate: operations.fillResolvedJacobsEducationSelect2Candidate,
}

export class Jacobs extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.hasComboQuestions = true
    this.lastFullAutofillSnapshot = null
    this.lastFullSubmitSnapshot = null
    this.jacobsEducationClientSearchFailed = false
  }

  formatAnswer(answer) {
    return jacobsAnswer.formatAnswer(answer)
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const text = value?.[0]
        if (text != null) {
          return operations.fillInputTextField(rule.$input, String(text ?? ""))
        }
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupFiled(rule, value),
      [enums.FIELD_TYPE.MULTI_SELECT]: (rule, value) =>
        operations.fillMultiSelectField(rule, value),
    }
  }

  async doFillForm(forceRefresh = false) {
    await this.initializeFillForm()
    const extracted = await this.extractFormRules()
    const autofillRules = rules.getAutofillRules(extracted)
    const localOnlyRules = rules.getLocalOnlyAutofillRules(extracted)
    this.progressTracker.setFieldsRequiredStatus([
      ...autofillRules,
      ...localOnlyRules,
    ])
    await this.handleResumeUpload()

    const answerOrError = await this.fetchFormAnswers(
      autofillRules,
      forceRefresh,
    )
    if (typeof answerOrError === "string") return answerOrError

    await this.fillRegularFields(autofillRules)
    await this.fillEducationAndEmployment(autofillRules)

    const comboResult = await this.runComboQuestionAutofillIfNeeded(
      autofillRules,
      forceRefresh,
    )
    if (typeof comboResult === "string") return comboResult

    const finalRules = comboResult
    console.info("[Jacobs][Combo] rescan-complete", {
      initialRuleCount: autofillRules.length,
      totalRuleCount: finalRules.length,
    })
    await this.executeSiteSpecificSteps(localOnlyRules)
    await this.bindSubmitButtonTracking(finalRules)
    return this.finalizeFillForm()
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  async extractComboQuestionRules() {
    const fillable = rules.getAutofillRules(await this.extractFormRules())
    console.info("[Jacobs][Combo] extracted-fillable-rules", {
      ruleCount: fillable.length,
    })
    return fillable
  }

  getSiteName() {
    return "jacobs"
  }

  async fillRegularFields(formRules) {
    const ordered = reorderCountryBeforeState(formRules)
    const operationsList = answerMethods.getRegularOperations(
      ordered,
      this.answer.regular,
      this.operationConfig,
    )
    for (const operation of operationsList) this.taskQueue.add(operation)
    await this.taskQueue.run()
  }

  async fillJacobsEducationSelectField(rule, value) {
    const select = rule.$input
    const fieldType =
      educationClientSearch.getJacobsEducationClientSearchFieldType(select)
    if (!fieldType) {
      return (
        (await this.operationConfig[enums.FIELD_TYPE.SELECT]?.(
          rule,
          value,
          false,
        )) ?? false
      )
    }

    if (!(await operations.waitForJacobsSelectFieldEnabled(select))) {
      this.jacobsEducationClientSearchFailed = true
      console.info("[Jacobs][Education] client-search", {
        fieldType,
        success: false,
        roundCount: 0,
        candidateCounts: [],
        failureReason: "disabled",
      })
      return false
    }

    const result =
      await educationClientSearch.resolveJacobsEducationClientSearch(
        select,
        value,
        fieldType,
        educationClientSearchDeps,
      )
    if (result.success) {
      console.info("[Jacobs][Education] client-search", {
        fieldType,
        success: true,
        roundCount: result.rounds.length,
        candidateCounts: result.rounds.map((round) => round.options.length),
      })
      return true
    }

    const originalAnswer =
      educationClientSearch.getJacobsEducationClientSearchOriginalAnswer(
        value,
        fieldType,
      )
    const usedSchoolOtherFallback =
      fieldType === "school" &&
      result.failureReason === "return-empty" &&
      !!originalAnswer &&
      (await operations.fillJacobsSchoolOtherFallback(select, originalAnswer))

    if (!usedSchoolOtherFallback) {
      this.jacobsEducationClientSearchFailed = true
    }
    await operations.closeJacobsEducationSelect2Search()
    console.info("[Jacobs][Education] client-search", {
      fieldType,
      success: usedSchoolOtherFallback,
      roundCount: result.rounds.length,
      candidateCounts: result.rounds.map((round) => round.options.length),
      failureReason: usedSchoolOtherFallback
        ? "return-empty-school-other"
        : result.failureReason,
    })
    return usedSchoolOtherFallback
  }

  getJacobsEducationOperationConfig() {
    return {
      ...this.operationConfig,
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        this.fillJacobsEducationSelectField(rule, value),
    }
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

  async fillEducationAndEmployment(formRules) {
    const hasEducation = formRules.some(
      (rule) => rule.type === enums.FIELD_TYPE.EDUCATION,
    )
    if (
      hasEducation &&
      Array.isArray(this.answer?.education) &&
      this.answer.education.length
    ) {
      const educationCount = this.answer.education.length
      await operations.adaptEducationSectionCount(educationCount)
      const educationRules = await rules.getEducationRules()
      const validation = rules.validateEducationSection(educationCount)
      if (validation.countMatched && educationRules.length === educationCount) {
        this.jacobsEducationClientSearchFailed = false
        coreDom.setSectionResultFocusRules(
          enums.FIELD_TYPE.EDUCATION,
          educationRules,
        )
        const educationOperations = answerMethods.getEducationOperations(
          educationRules,
          this.answer.education,
          this.getJacobsEducationOperationConfig(),
          undefined,
          {
            onCompleted: () => {
              if (this.jacobsEducationClientSearchFailed) {
                this.progressTracker.updateMissedProgress("Education")
                return
              }
              this.progressTracker.updateFilledProgress("Education")
            },
            onSkipped: () =>
              this.progressTracker.updateMissedProgress("Education"),
            onSectionResultChanged: this.progressTracker.updateSectionResult,
          },
        )
        for (const operation of educationOperations) {
          this.taskQueue.add(operation)
        }
        await this.taskQueue.run()
      } else {
        this.progressTracker.updateMissedProgress("Education")
      }
    }

    const hasEmployment = formRules.some(
      (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
    )
    if (
      hasEmployment &&
      Array.isArray(this.answer?.workExperience) &&
      this.answer.workExperience.length
    ) {
      const employmentCount = this.answer.workExperience.length
      await operations.adaptEmploymentSectionCount(employmentCount)
      const experienceRules = await rules.getExperienceRules()
      const validation = rules.validateExperienceSection(employmentCount)
      if (
        !validation.countMatched ||
        experienceRules.length !== employmentCount
      ) {
        this.progressTracker.updateMissedProgress("Employment")
        return
      }
      coreDom.setSectionResultFocusRules(
        enums.FIELD_TYPE.EMPLOYMENT,
        experienceRules,
      )
      const employmentOperations = answerMethods.getEmploymentOperations(
        experienceRules,
        this.answer.workExperience,
        this.operationConfig,
        undefined,
        answerMethods.sectionProgressCallbacks(
          "Employment",
          this.progressTracker,
        ),
      )
      for (const operation of employmentOperations) {
        this.taskQueue.add(operation)
      }
      await this.taskQueue.run()
    }
  }

  async executeSiteSpecificSteps(localOnlyRules) {
    for (const rule of localOnlyRules) {
      if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
        this.taskQueue.add(async () => {
          await operations.fillCheckboxField(rule, true)
          this.progressTracker.updateFilledProgress(rule.label)
        })
      }
    }
    await this.taskQueue.run()
  }

  getSubmitButtonSelector() {
    return rules.jacobsXpaths.submitButton
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  resolveDelegatedSubmitButton(target) {
    return operations.resolveJacobsSubmitButtonFromTarget(target)
  }

  async getAutofillSnapshot(_rules) {
    const snapshot = (await rules.getFormSnapshot()) || {}
    this.lastFullAutofillSnapshot = snapshot
    const { education, employment, ...regular } = snapshot
    return regular
  }

  async getSubmitSnapshot() {
    const snapshot = (await rules.getFormSnapshot()) || {}
    this.lastFullSubmitSnapshot = snapshot
    const { education, employment, ...regular } = snapshot
    return regular
  }

  getEducationEmploymentSnapshotData(snapshot) {
    return {
      education: Array.isArray(snapshot?.education) ? snapshot?.education : [],
      employment: Array.isArray(snapshot?.employment)
        ? snapshot?.employment
        : [],
    }
  }

  getAdditionalAutofillSnapshotData() {
    return this.getEducationEmploymentSnapshotData(
      this.lastFullAutofillSnapshot,
    )
  }

  getAdditionalSubmitSnapshotData() {
    return this.getEducationEmploymentSnapshotData(this.lastFullSubmitSnapshot)
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNodeSafe(
      rules.jacobsXpaths.submitButton,
    )
    if (button) button.click()
  }
}
