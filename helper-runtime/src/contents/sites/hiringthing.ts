// @ts-nocheck
/**
 * HiringThing ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and hiringthing/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "hiringthing"
 */

import * as answerMethods from "../methods/answer.ts"
import * as methodsDom from "../methods/dom.ts"
import { BaseFiller } from "./base-filler.ts"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as hiringThingAnswer from "./hiringthing/answer.ts"
import * as operations from "./hiringthing/operations.ts"
import * as rules from "./hiringthing/rules.ts"

function isHiringThingDateTextField(input) {
  const nameOrId = input?.name || input?.id || ""
  return /\.(?:st_date|end_date)$/.test(nameOrId)
}

function pickNestedValue(record, paths) {
  for (const path of paths) {
    const value = path.split(".").reduce((acc, key) => acc?.[key], record)
    if (value != null && value !== "") return value
  }
  return ""
}

export function formatHiringThingEmploymentRecord(record) {
  const startDate = pickNestedValue(record, [
    "Dates of Employment Start",
    "Start",
    "startDate",
    "start_date",
    "dates.startDate",
    "dates.start_date",
    "dates.start",
  ])
  const endDate = pickNestedValue(record, [
    "Dates of Employment End",
    "End",
    "endDate",
    "end_date",
    "dates.endDate",
    "dates.end_date",
    "dates.end",
    "dates.completionDate",
    "dates.completion_date",
  ])

  console.info("[HiringThing][Employment] normalized date record", {
    hasStartDate: !!startDate,
    hasEndDate: !!endDate,
  })

  return {
    ...record,
    "Company Name": pickNestedValue(record, [
      "Company Name",
      "companyName",
      "company",
      "employer",
      "organization",
      "name",
    ]),
    "Your Position": pickNestedValue(record, [
      "Your Position",
      "position",
      "title",
      "jobTitle",
      "role",
    ]),
    Duties: pickNestedValue(record, [
      "Duties",
      "duties",
      "description",
      "summary",
      "responsibilities",
    ]),
    "Reason for Leaving": pickNestedValue(record, [
      "Reason for Leaving",
      "reasonForLeaving",
      "leavingReason",
      "reason",
    ]),
    "Dates of Employment Start": rules.formatHiringThingDate(startDate),
    "Dates of Employment End": rules.formatHiringThingDate(endDate),
  }
}

function formatHiringThingEducationRecord(record) {
  const completionDate = pickNestedValue(record, [
    "completionDate",
    "dates.completionDate",
    "endDate",
    "dates.endDate",
  ])
  return {
    ...record,
    "Institution Name": pickNestedValue(record, [
      "Institution Name",
      "institution",
      "school",
      "schoolName",
      "organization",
      "name",
    ]),
    "Degree/Subject": pickNestedValue(record, [
      "Degree/Subject",
      "degree",
      "major",
      "discipline",
      "field",
      "fieldOfStudy",
    ]),
    "Degree obtained?":
      pickNestedValue(record, [
        "Degree obtained?",
        "degreeObtained",
        "completed",
        "isCompleted",
      ]) || (completionDate ? "Yes" : ""),
  }
}

export class HiringThing extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.autofillCountry = ""
    this.autofillPhoneCountryCode = ""
    this.skippedDependentStateRules = []
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const text = Array.isArray(value) ? value[0] : value
        if (rule.$input?.getAttribute("role") === "combobox") {
          return operations.fillReactSelectField(rule, [String(text ?? "")])
        }
        if (rule.$input?.id === "user.phone") {
          return operations.fillPhoneField(rule.$input, String(text ?? ""))
        }
        if (isHiringThingDateTextField(rule.$input)) {
          return operations.fillDateTextField(rule.$input, String(text ?? ""))
        }
        return operations.fillInputTextField(rule.$input, String(text ?? ""))
      },
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupField(rule, value),
      [enums.FIELD_TYPE.SEARCH]: (rule, value) =>
        operations.fillReactSelectField(rule, value),
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        rule.label === "Country Phone Code"
          ? operations.fillHiringThingPhoneCountryCodeField(rule, value)
          : operations.fillNativeSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
    }
  }

  async runPreFillForm() {
    this.autofillCountry = ""
    this.autofillPhoneCountryCode = ""
    const info = await autofillInfo.useAutofillInfoStore
      .getState()
      .fetchAutofillInfo()
    this.autofillCountry = info?.location?.country
    this.autofillPhoneCountryCode = info?.phoneCountryCode
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async preFillCountryAndRefreshStateRules(formRules) {
    this.skippedDependentStateRules = []
    const country = String(this.autofillCountry || "").trim()
    const countryRules = formRules.filter(operations.isHiringThingCountryRule)
    if (!country || countryRules.length === 0) return formRules

    const stateRules = formRules.filter(operations.isHiringThingStateProvinceRule)
    const previousCountry = operations.getHiringThingCountrySelectionValue()

    for (const rule of countryRules) {
      this.taskQueue.add(() =>
        operations.fillReactSelectField(rule, [country]),
      )
    }
    await this.taskQueue.run()

    const countryChanged =
      previousCountry !== operations.getHiringThingCountrySelectionValue()
    if (!countryChanged || stateRules.length === 0) return formRules

    const ready = await operations.waitForHiringThingStateOptions(
      stateRules.flatMap((rule) => rule.options || []),
    )
    if (!ready) {
      this.skippedDependentStateRules = stateRules
      return formRules.filter(
        (rule) => !operations.isHiringThingStateProvinceRule(rule),
      )
    }

    const refreshed = rules.extractRules()
    const refreshedStateRules = refreshed.filter(
      operations.isHiringThingStateProvinceRule,
    )
    console.info("[HiringThing][State] dependent-region-rules-refreshed", {
      optionCount: refreshedStateRules.flatMap((rule) => rule.options || [])
        .length,
    })
    return refreshed
  }

  async preFillPhoneCountryCode(formRules) {
    const code = String(this.autofillPhoneCountryCode ?? "").trim()
    const phoneCountryRules = formRules.filter(
      (rule) =>
        rule.type === enums.FIELD_TYPE.SELECT &&
        rule.label === "Country Phone Code",
    )
    if (!code || phoneCountryRules.length === 0) return

    let committedCount = 0
    for (const rule of phoneCountryRules) {
      this.taskQueue.add(async () => {
        if (await operations.fillHiringThingPhoneCountryCodeField(rule, code)) {
          committedCount += 1
        }
      })
    }
    await this.taskQueue.run()
    console.info("[HiringThing][PhoneCountry] prefill", {
      ruleCount: phoneCountryRules.length,
      committedCount,
    })
  }

  async doFillForm(isCombo = false) {
    await this.initializeFillForm()
    let formRules = await this.extractFormRules()

    await this.preFillPhoneCountryCode(formRules)
    formRules = await this.preFillCountryAndRefreshStateRules(formRules)
    formRules = this.prepareCoverLetterRules(formRules)
    this.progressTracker.setFieldsRequiredStatus([
      ...formRules,
      ...this.skippedDependentStateRules,
    ])
    for (const rule of this.skippedDependentStateRules) {
      this.progressTracker.updateMissedProgress(rule.label)
    }

    const answers = await this.fetchFormAnswers(formRules, isCombo)
    if (typeof answers === "string") return answers

    await this.handleResumeUpload()
    await this.fillRegularFields(formRules)
    await this.fillEducationAndEmployment(formRules)
    await this.fillCoverLetterFields()

    const comboResult = await this.runComboQuestionAutofillIfNeeded(
      formRules,
      isCombo,
    )
    if (typeof comboResult === "string") return comboResult

    formRules = comboResult
    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  getSiteName() {
    return "hiringthing"
  }

  formatAnswer(answer) {
    return hiringThingAnswer.formatHiringThingAnswer(
      answer,
      this.autofillCountry,
      this.autofillPhoneCountryCode,
    )
  }

  async fillRegularFields(formRules) {
    const countryRules = formRules.filter(operations.isHiringThingCountryRule)
    if (countryRules.length === 0) {
      await super.fillRegularFields(formRules)
      return
    }

    const stateRules = formRules.filter(operations.isHiringThingStateProvinceRule)
    const previousCountry = operations.getHiringThingCountrySelectionValue()

    for (const op of answerMethods.getRegularOperations(
      countryRules,
      this.answer.regular,
      this.operationConfig,
    )) {
      this.taskQueue.add(op)
    }
    await this.taskQueue.run()

    const countryChanged =
      previousCountry !== operations.getHiringThingCountrySelectionValue()
    let remainingRules = formRules.filter(
      (rule) => !operations.isHiringThingCountryRule(rule),
    )

    if (countryChanged && stateRules.length > 0) {
      const ready = await operations.waitForHiringThingStateOptions(
        stateRules.flatMap((rule) => rule.options || []),
      )
      if (ready) {
        remainingRules = rules
          .extractRules()
          .filter((rule) => !operations.isHiringThingCountryRule(rule))
      } else {
        remainingRules = remainingRules.filter(
          (rule) => !operations.isHiringThingStateProvinceRule(rule),
        )
        for (const rule of stateRules) {
          this.progressTracker.updateMissedProgress(rule.label)
        }
      }
    }

    for (const op of answerMethods.getRegularOperations(
      remainingRules,
      this.answer.regular,
      this.operationConfig,
    )) {
      this.taskQueue.add(op)
    }
    await this.taskQueue.run()
  }

  async checkCoverLetter() {
    methodsDom.postCoverLetterStatus(
      operations.getHiringThingCoverLetterStatus(),
    )
  }

  async handleResumeUpload() {
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

  async fillEducationAndEmployment(formRules) {
    if (
      formRules.some((rule) => rule.type === enums.FIELD_TYPE.EDUCATION) &&
      this.answer?.education?.length > 0
    ) {
      await operations.ensureHiringThingStructuredRows(
        "education",
        this.answer.education.length,
      )
      const educationRules = rules
        .extractRules()
        .filter((rule) => rule.type === enums.FIELD_TYPE.EDUCATION)
      coreDom.setSectionResultFocusRules("education", educationRules)
      for (const op of answerMethods.getEducationOperations(
        educationRules,
        this.answer.education.map(formatHiringThingEducationRecord),
        this.operationConfig,
        undefined,
        {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onCompleted: () =>
            this.progressTracker.updateFilledProgress("Education"),
          onSkipped: () =>
            this.progressTracker.updateMissedProgress("Education"),
        },
      )) {
        this.taskQueue.add(op)
      }
      await this.taskQueue.run()
    }

    if (
      formRules.some((rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT) &&
      this.answer?.workExperience?.length > 0
    ) {
      await operations.ensureHiringThingStructuredRows(
        "employment",
        this.answer.workExperience.length,
      )
      const employmentRules = rules
        .extractRules()
        .filter((rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT)
      coreDom.setSectionResultFocusRules("employment", employmentRules)
      for (const op of answerMethods.getEmploymentOperations(
        employmentRules,
        this.answer.workExperience.map(formatHiringThingEmploymentRecord),
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
        this.taskQueue.add(op)
      }
      await this.taskQueue.run()
    }
  }

  async executeSiteSpecificSteps(formRules) {
    const coverLetterStatus = operations.getHiringThingCoverLetterStatus()
    if (coverLetterStatus) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: false,
      })
    }

    const coverLetter = this.coverLetter
    if (coverLetter?.coverLetterId) {
      this.taskQueue.add(async () => {
        const uploaded = await operations.uploadCoverLetter(
          {
            coverLetterId: coverLetter.coverLetterId,
            coverLetterName: rules.getHiringThingCoverLetterName(
              coverLetter.coverLetterName,
            ),
            markdown: coverLetter.markdown,
            useLegacyDownload: coverLetter.useLegacyDownload,
          },
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
        if (!uploaded) {
          this.progressTracker.updateMissedProgress("Cover Letter")
        }
      })
      await this.taskQueue.run()
    }

    await this.bindSubmitButtonTracking(formRules)
  }

  getSubmitButtonSelector() {
    return '//button[@type="submit" and contains(normalize-space(.), "Submit Application")]'
  }

  async getAutofillSnapshot(formRules) {
    return rules.getFormSnapshot(formRules)
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  submitApplication() {
    const button = document.querySelector(
      'button[type="submit"].submit-app-button, button[type="submit"]',
    )
    button?.click()
  }
}
