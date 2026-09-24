// @ts-nocheck
/**
 * Isolved ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and isolved/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "isolved"
 */

import * as lodash from "lodash-es"
import * as messaging from "@plasmohq/messaging"
import * as contents from "../../helper-shims/host.ts"
import * as cancellation from "../methods/cancellation.ts"
import * as coreDom from "../../core/dom.js"
import { BaseFiller } from "./base-filler.ts"
import * as falconAnswerTracking from "./falcon-answer-tracking.ts"
import * as answerMethods from "../methods/answer.ts"
import * as track from "../methods/track.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as coreUtils from "../../core/utils.js"
import * as delay from "../../utils/delay.js"
import * as httpEnums from "../../enums/http.js"
import * as isolvedAnswer from "./isolved/answer.ts"
import * as operations from "./isolved/operation.ts"
import * as rules from "./isolved/rules.ts"

const OMIT_RULE_KEYS = ["$input", "$label", "children", "$checkboxs"]

function extractProfileCity(response) {
  const city =
    response?.data?.profile_data?.city ??
    response?.data?.profile_data?.City ??
    response?.data?.profile_data?.CITY ??
    ""
  return String(Array.isArray(city) ? city[0] : city || "").trim()
}

export class Isolved extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.lastFullAutofillSnapshot = null
    this.lastFullSubmitSnapshot = null
    this.savedEducationSnapshots = []
    this.savedEmploymentSnapshots = []
    this.formatAnswer = isolvedAnswer.formatAnswer
  }

  getCurrentProgressStepType() {
    const currentStep = document.querySelector("#steps .step.current")
    const stepText = currentStep?.textContent?.trim().toLowerCase() || ""
    const dataFile =
      currentStep?.getAttribute("data-file")?.trim().toLowerCase() || ""
    const combined = `${stepText} ${dataFile}`.trim()
    if (!combined) return "unknown"
    if (/education|school|college|university/.test(combined)) return "education"
    if (
      /employment|experience|employer|work history|work experience/.test(
        combined,
      )
    ) {
      return "employment"
    }
    return "other"
  }

  buildRegularProgressFieldStatus(formRules) {
    return formRules
      .filter(
        (rule) =>
          rule.type !== enums.FIELD_TYPE.EDUCATION &&
          rule.type !== enums.FIELD_TYPE.EMPLOYMENT,
      )
      .map((rule) => ({
        label: rule.label,
        required: rule.required ?? null,
      }))
  }

  buildUnifiedProgressFieldStatus(formRules) {
    const stepType = this.getCurrentProgressStepType()
    const regular = this.buildRegularProgressFieldStatus(formRules)
    const hasEducation = formRules.some(
      (rule) => rule.type === enums.FIELD_TYPE.EDUCATION,
    )
    const hasEmployment = formRules.some(
      (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
    )
    const sectionStatus = []
    if (
      (stepType === "education" || stepType === "unknown") &&
      hasEducation &&
      this.answer.education.length > 0
    ) {
      sectionStatus.push(
        ...isolvedAnswer.buildEducationFieldStatus(
          this.answer.education.length,
        ),
      )
    }
    if (
      (stepType === "employment" || stepType === "unknown") &&
      hasEmployment &&
      this.answer.workExperience.length > 0
    ) {
      sectionStatus.push(
        ...isolvedAnswer.buildExperienceFieldStatus(
          this.answer.workExperience.length,
        ),
      )
    }
    return [...regular, ...sectionStatus]
  }

  ensureProgressFields(fields) {
    for (const field of fields) {
      this.progressTracker.updateFieldRequiredStatus(field)
    }
  }

  async doFillForm(fromAgent = false) {
    if (rules.isReferencePage()) {
      this.timeTrace.rulesParseStartTime = Date.now()
      this.progressTracker.clear()
      this.taskQueue.clear()
      return await this.finalizeFillForm()
    }
    await this.initializeFillForm()
    this.savedEducationSnapshots = []
    this.savedEmploymentSnapshots = []
    const formRules = await this.extractFormRules()
    const resumeOnly =
      operations.hasResumeUploadUI() && formRules.length === 0
    if (resumeOnly) {
      this.progressTracker.setFieldsRequiredStatus([
        {
          label: "Resume/CV",
          required: true,
        },
      ])
      await this.handleResumeUpload()
      return await this.finalizeFillForm()
    }
    const answers = await this.fetchFormAnswers(formRules, fromAgent)
    if (typeof answers === "string") return answers
    this.progressTracker.setFieldsRequiredStatus(
      this.buildUnifiedProgressFieldStatus(formRules),
    )
    await this.handleResumeUpload()
    await this.fillRegularFields(formRules)
    await this.fillEducationAndEmployment(formRules)
    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  extractEducationEmploymentAdditional(snapshot) {
    const { education, employment } = snapshot || {}
    const educationRows = Array.isArray(education) ? education : []
    const employmentRows = Array.isArray(employment) ? employment : []
    return {
      education:
        educationRows.length > 0
          ? educationRows
          : this.savedEducationSnapshots,
      employment:
        employmentRows.length > 0
          ? employmentRows
          : this.savedEmploymentSnapshots,
    }
  }

  applyMergedUploadProgress(label) {
    const fieldStatus = this.progressTracker.fieldStatus
    if (
      !fieldStatus.fieldRequiredStatus.some((item) => item.label === label)
    ) {
      fieldStatus.fieldRequiredStatus = [
        ...fieldStatus.fieldRequiredStatus,
        {
          label,
          required: true,
        },
      ]
    }
    fieldStatus.missingFields = fieldStatus.missingFields.filter(
      (item) => item !== label,
    )
    if (!fieldStatus.filledFields.includes(label)) {
      fieldStatus.filledFields = [...fieldStatus.filledFields, label]
    }
    this.progressTracker.syncProgress()
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const first = value?.[0]
        if (first) {
          return operations.fillInputTextField(rule.$input, String(first ?? ""))
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

  async runFieldBatch(fields, answerRow, tracking) {
    for (const field of fields) {
      this.taskQueue.add(async () => {
        try {
          const handler = this.operationConfig[field.type]
          const result = await handler?.(field, answerRow, false)
          if (tracking) {
            const snapshotValue = rules.getSectionRecordSnapshot([field])[
              field.label
            ]
            const hasValue = Array.isArray(snapshotValue)
              ? snapshotValue.length > 0
              : !!snapshotValue?.trim()
            tracking.reporter.updateField(
              tracking.row,
              field.label,
              hasValue
                ? Array.isArray(snapshotValue)
                  ? snapshotValue.join(", ")
                  : snapshotValue
                : undefined,
              handler && result !== false && hasValue ? "filled" : "missed",
            )
            tracking.reporter.emit()
          }
        } catch (error) {
          if (tracking && error instanceof cancellation.SkippedError) {
            tracking.reporter.updateField(
              tracking.row,
              field.label,
              undefined,
              "skipped",
            )
            tracking.reporter.emit()
          }
          throw error
        }
      })
    }
    await this.taskQueue.run()
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "isolved"
  }

  async fetchFormAnswers(formRules, fromAgent) {
    const falconRequest =
      falconAnswerTracking.beginFalconResponseAnswerRequest()
    try {
      if (!this.token) this.token = await answerMethods.getSiteToken()
      this.timeTrace.requestStartTime = Date.now()
      const response = await messaging.sendToBackground({
        name: "getGptResults",
        body: {
          params: {
            elements: formRules.map((rule) =>
              lodash.omit(rule, ...OMIT_RULE_KEYS),
            ),
            token: this.token,
            url: coreUtils.removeEndStrings(window.location.href),
            parser: "internal",
            source: this.getSiteName(),
            fromAgent: !!(
              fromAgent ||
              contents.agentTailorId ||
              contents.agentResumeId
            ),
            ...(this.resumeInfo.id && {
              resumeId: this.resumeInfo.id,
            }),
            ...(this.resumeInfo.tailorId && {
              tailorId: this.resumeInfo.tailorId,
            }),
          },
        },
      })
      if (
        response?.data?.data === httpEnums.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY
      ) {
        throw new answerMethods.ResumeMissingCodeError(
          httpEnums.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY,
        )
      }
      if (response?.data?.HTTP_STATUS) {
        throw new answerMethods.HTTPError(response?.data?.HTTP_STATUS)
      }
      const userData = answerMethods.initUserData(response, falconRequest)
      const profileCity = extractProfileCity(response)
      if (profileCity) {
        userData.education = userData.education.map((row) => ({
          ...row,
          City: row?.City || profileCity,
        }))
      }
      this.answer = this.formatAnswer?.(userData) ?? userData
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
  }

  async handleResumeUpload() {
    if (!operations.hasResumeUploadUI()) return
    if (this.disableUploadResume) {
      await operations.removeResume()
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(async () => {
        await operations.removeResume()
        const uploaded = await operations.uploadResume(this.resumeInfo)
        if (uploaded) this.applyMergedUploadProgress("Resume/CV")
        else this.progressTracker.updateMissedProgress("Resume/CV")
      })
    }
    await this.taskQueue.run()
  }

  async fillRegularFields(formRules) {
    await super.fillRegularFields(formRules)
  }

  async fillEducationAndEmployment(formRules) {
    if (this.answer.education && this.answer.education.length > 0) {
      const educationCount = this.answer.education.length
      this.ensureProgressFields(
        isolvedAnswer.buildEducationFieldStatus(educationCount),
      )
      for (let index = 0; index < educationCount; index++) {
        const educationRow = this.answer.education[index]
        await operations.addEducationSection(1)
        const editorRules = await rules.getEducationEditorRules()
        if (!editorRules) break
        const reporter = answerMethods.createSectionResultReporter(
          "education",
          {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
          },
        )
        reporter.setLabel(`Education ${index + 1}`)
        const tracking = {
          reporter,
          row: reporter.ensureRow(index, educationRow),
        }
        reporter.emit()
        const focusRules = []
        focusRules[index] = {
          type: enums.FIELD_TYPE.EDUCATION,
          label: "Education",
          children: editorRules,
        }
        coreDom.setSectionResultFocusRules("education", focusRules)
        const isStateField = (label) => /\b(state|province)\b/i.test(label)
        const nonStateRules = editorRules.filter(
          (rule) => !isStateField(rule.label),
        )
        const stateRules = editorRules.filter((rule) =>
          isStateField(rule.label),
        )
        await this.runFieldBatch(nonStateRules, educationRow, tracking)
        if (stateRules.length > 0) await delay.delay(500)
        await this.runFieldBatch(stateRules, educationRow, tracking)
        const sectionSnapshot = rules.getSectionRecordSnapshot(editorRules)
        let submitted = false
        try {
          submitted = await operations.submitEducationSection(true)
        } finally {
          coreDom.setSectionResultFocusRules("education", [])
          if (!submitted) {
            for (const field of tracking.row.fields) {
              if (field.status !== "skipped") {
                reporter.updateField(
                  tracking.row,
                  field.label,
                  field.value,
                  "missed",
                )
              }
            }
          }
          reporter.emit()
        }
        if (submitted) {
          this.savedEducationSnapshots[index] = sectionSnapshot
          this.progressTracker.updateFilledProgress(`Education ${index + 1}`)
        } else {
          this.progressTracker.updateMissedProgress(`Education ${index + 1}`)
        }
      }
    }

    if (this.answer.workExperience && this.answer.workExperience.length > 0) {
      const employmentCount = this.answer.workExperience.length
      this.ensureProgressFields(
        isolvedAnswer.buildExperienceFieldStatus(employmentCount),
      )
      for (let index = 0; index < employmentCount; index++) {
        const employmentRow = this.answer.workExperience[index]
        await operations.addEmploymentSection(1)
        const editorRules = await rules.getEmploymentEditorRules()
        if (!editorRules) break
        const reporter = answerMethods.createSectionResultReporter(
          "employment",
          {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
          },
        )
        reporter.setLabel(`Employment ${index + 1}`)
        const tracking = {
          reporter,
          row: reporter.ensureRow(index, employmentRow),
        }
        reporter.emit()
        const focusRules = []
        focusRules[index] = {
          type: enums.FIELD_TYPE.EMPLOYMENT,
          label: "Employment",
          children: editorRules,
        }
        coreDom.setSectionResultFocusRules("employment", focusRules)
        const isDateField = (label) =>
          label.toLowerCase().includes("dates employed") ||
          label.toLowerCase().includes("date started") ||
          label.toLowerCase().includes("date ended")
        const isStateField = (label) => /\b(state|province)\b/i.test(label)
        const dateRules = editorRules.filter((rule) =>
          isDateField(rule.label),
        )
        const regularRules = editorRules.filter(
          (rule) =>
            !isDateField(rule.label) && !isStateField(rule.label),
        )
        const stateRules = editorRules.filter(
          (rule) =>
            !isDateField(rule.label) && isStateField(rule.label),
        )
        await this.runFieldBatch(regularRules, employmentRow, tracking)
        if (stateRules.length > 0) await delay.delay(500)
        await this.runFieldBatch(stateRules, employmentRow, tracking)
        await this.runFieldBatch(dateRules, employmentRow, tracking)
        const dateRetryLimit = 2
        for (let retry = 0; retry < dateRetryLimit; retry++) {
          await delay.delay(300)
          const emptyDateRules = dateRules.filter((rule) => {
            const input = rule.$input
            if (input instanceof HTMLSelectElement) {
              return !input.value || input.selectedIndex <= 0
            }
            return (
              input instanceof HTMLInputElement && !input.value.trim()
            )
          })
          if (emptyDateRules.length === 0) break
          await this.runFieldBatch(emptyDateRules, employmentRow, tracking)
        }
        const sectionSnapshot = rules.getSectionRecordSnapshot(editorRules)
        let submitted = false
        try {
          submitted = await operations.submitEmploymentSection(true)
        } finally {
          coreDom.setSectionResultFocusRules("employment", [])
          if (!submitted) {
            for (const field of tracking.row.fields) {
              if (field.status !== "skipped") {
                reporter.updateField(
                  tracking.row,
                  field.label,
                  field.value,
                  "missed",
                )
              }
            }
          }
          reporter.emit()
        }
        if (submitted) {
          this.savedEmploymentSnapshots[index] = sectionSnapshot
          this.progressTracker.updateFilledProgress(
            `Employment ${index + 1}`,
          )
        } else {
          this.progressTracker.updateMissedProgress(
            `Employment ${index + 1}`,
          )
        }
      }
    }
  }

  async executeSiteSpecificSteps(formRules) {
    await super.executeSiteSpecificSteps(formRules)
  }

  getSubmitButtonSelector() {
    return './/button[@id="save_contact_info_button" or @id="next" or @id="verify_contact_info_button" or @id="new_upload_button"] | .//input[@id="save_contact_info_button" or @id="next" or @id="verify_contact_info_button" or @id="new_upload_button"]'
  }

  async getAutofillSnapshot(_formRules) {
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

  async finalizeFillForm() {
    return await super.finalizeFillForm()
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNode(this.getSubmitButtonSelector())
    if (button) button.click()
  }
}
