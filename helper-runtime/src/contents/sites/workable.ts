// @ts-nocheck
/**
 * Workable ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and workable/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "workable"
 */

import * as sectionResults from "../methods/section-results.js"
import * as answerMethods from "../methods/answer.js"
import * as cancellation from "../methods/cancellation.js"
import * as dom from "../methods/dom.js"
import * as track from "../methods/track.js"
import { BaseFiller } from "./base-filler.ts"
import * as workableAnswer from "./workable/answer.ts"
import * as operations from "./workable/operations.ts"
import * as phoneCountryCode from "./workable/phone-country-code.ts"
import * as rules from "./workable/rules.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"

class Workable extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          operations.fillReactInputField(
            rule.$input,
            value,
            rule.label,
            phoneCountryCode.resolveWorkablePhoneCountryCode(this.answer),
          ),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.NUMBER]: {
        handler: (rule, value) =>
          operations.fillReactInputField(rule.$input, value, rule.label),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) =>
          operations.fillWorkableCheckboxField(rule, value),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          rule.label === phoneCountryCode.WORKABLE_PHONE_COUNTRY_CODE_LABEL
            ? operations.fillWorkablePhoneCountryCode(
                rule,
                String(value[0] ?? ""),
              )
            : operations.fillCustomSelectField(rule.$input, value),
        options: {
          expectArray: true,
        },
      },
    }
  }

  buildOperationConfig() {
    return super.buildOperationConfig()
  }

  async checkCoverLetter() {
    await operations.preFillForm()
    dom.postCoverLetterStatus(rules.getWorkableCoverLetterStatus(document))
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    let formRules = this.prepareCoverLetterRules(await this.extractFormRules())
    this.progressTracker.setFieldsRequiredStatus(formRules)

    const answers = await this.fetchFormAnswers(formRules, forceRefetch)
    if ("string" == typeof answers) return answers

    this.ensureAgreementCheckboxAnswers(formRules)
    track.bindSubmitButton(
      rules.getSubmitButtonText(),
      this.progressTracker.fieldStatus,
      this.timeTrace,
    )
    await this.fillRegularFields(formRules)
    await this.fillEducationAndEmployment(formRules)
    await this.handleResumeUpload()

    this.taskQueue.add(async () => {
      await operations.fillDateInDetailsSection()
    })
    this.taskQueue.add(() => {
      operations.blurPage()
    })
    await this.taskQueue.run()
    await this.fillCoverLetterFields()

    let snapshotRules = formRules
    if (this.hasAgreementCheckboxRules(formRules)) {
      snapshotRules = await this.extractFormRules()
      await this.recheckAgreementCheckboxes(snapshotRules)
    }

    await this.executeSiteSpecificSteps(snapshotRules)
    return this.finalizeFillForm()
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
    this.taskQueue.add(async () => {
      await operations.preclickAddButtons()
    })
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.getRules()
  }

  getSiteName() {
    return "workable"
  }

  formatAnswer(answer) {
    return workableAnswer.formatAnswer(answer)
  }

  ensureAgreementCheckboxAnswers(formRules) {
    if (
      !this.answer.regular ||
      "object" != typeof this.answer.regular ||
      Array.isArray(this.answer.regular)
    ) {
      this.answer.regular = {}
    }
    const regular = this.answer.regular
    const hasAnswer = (label) =>
      Object.keys(regular).some((key) => answerMethods.isMatched(label, key))

    for (const rule of formRules) {
      if (
        rule.type === enums.FIELD_TYPE.CHECKBOX &&
        operations.isWorkableAgreementCheckbox(rule) &&
        !hasAnswer(rule.label)
      ) {
        regular[rule.label] = "True"
      }
    }
  }

  hasAgreementCheckboxRules(formRules) {
    return formRules.some(
      (rule) =>
        rule.type === enums.FIELD_TYPE.CHECKBOX &&
        operations.isWorkableAgreementCheckbox(rule),
    )
  }

  async recheckAgreementCheckboxes(formRules) {
    const agreementRules = formRules.filter(
      (rule) =>
        rule.type === enums.FIELD_TYPE.CHECKBOX &&
        operations.isWorkableAgreementCheckbox(rule),
    )
    if (agreementRules.length) {
      this.ensureAgreementCheckboxAnswers(formRules)
      for (const rule of agreementRules) {
        this.taskQueue.add(async () => {
          await this.operationConfig[enums.FIELD_TYPE.CHECKBOX]?.(
            rule,
            this.answer.regular,
          )
        })
      }
      await this.taskQueue.run()
    }
  }

  async fillEducationAndEmployment() {
    const educationReporter = sectionResults.createSequentialSectionResultReporter(
      "education",
      this.progressTracker,
      "Education",
    )
    const employmentReporter =
      sectionResults.createSequentialSectionResultReporter(
        "employment",
        this.progressTracker,
        "Employment",
      )

    let educationSkipped = false
    try {
      for (let index = 0; index < this.answer.education.length; index++) {
        const record = this.answer.education[index]
        operations.addEducation()
        const eduRules = await rules.getEduRules()
        const ops = answerMethods.getEducationOperations(
          eduRules,
          [record],
          this.operationConfig,
          void 0,
          {
            ...educationReporter.forRecord(index, eduRules),
            onSkipped: () => {
              educationSkipped = true
            },
          },
          {
            keepCurrentFieldOnExit: true,
          },
        )
        for (const op of ops) this.taskQueue.add(op)
        if ((await this.taskQueue.run(), educationSkipped)) break

        let focused = false
        try {
          await operations.saveEducation()
          const focusRule = rules.getLatestSavedEducationFocusRule(eduRules[0])
          if (focusRule) {
            educationReporter.setRecordFocus(index, focusRule)
            focused = true
          } else {
            console.debug(
              "[Autofill][workable-section-focus] saved target unavailable",
              {
                type: "education",
                index,
              },
            )
          }
        } finally {
          if (!focused) educationReporter.clearRecordFocus(index)
        }
      }
    } finally {
      if (this.answer.education.length > 0) {
        cancellation.updateCurrentField(null)
      }
    }

    if (educationSkipped) {
      this.progressTracker.updateMissedProgress("Education")
    } else if (this.answer.education.length > 0) {
      this.progressTracker.updateFilledProgress("Education")
    }

    let employmentSkipped = false
    try {
      for (let index = 0; index < this.answer.workExperience.length; index++) {
        const record = this.answer.workExperience[index]
        operations.addExperience()
        const expRules = await rules.getExpRules()
        const ops = answerMethods.getEmploymentOperations(
          expRules,
          [record],
          this.operationConfig,
          void 0,
          {
            ...employmentReporter.forRecord(index, expRules),
            onSkipped: () => {
              employmentSkipped = true
            },
          },
          {
            keepCurrentFieldOnExit: true,
          },
        )
        for (const op of ops) this.taskQueue.add(op)
        if ((await this.taskQueue.run(), employmentSkipped)) break

        let focused = false
        try {
          await operations.saveExperience()
          const focusRule = rules.getLatestSavedExperienceFocusRule(expRules[0])
          if (focusRule) {
            employmentReporter.setRecordFocus(index, focusRule)
            focused = true
          } else {
            console.debug(
              "[Autofill][workable-section-focus] saved target unavailable",
              {
                type: "employment",
                index,
              },
            )
          }
        } finally {
          if (!focused) employmentReporter.clearRecordFocus(index)
        }
      }
    } finally {
      if (this.answer.workExperience.length > 0) {
        cancellation.updateCurrentField(null)
      }
    }

    if (employmentSkipped) {
      this.progressTracker.updateMissedProgress("Employment")
    } else if (this.answer.workExperience.length > 0) {
      this.progressTracker.updateFilledProgress("Employment")
    }
  }

  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(async () => {
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
    return rules.getWorkableSubmitButtonSelector()
  }

  async getAutofillSnapshot(formRules) {
    this.lastRules = formRules
    const split = this.splitSnapshot(await rules.getFormSnapshot(formRules))
    this.autofillEducation = split.education
    this.autofillEmployment = split.employment
    return split.normal
  }

  async getSubmitSnapshot() {
    const split = this.splitSnapshot(
      await rules.getFormSnapshot(this.lastRules),
    )
    this.submitEducation = split.education
    this.submitEmployment = split.employment
    return split.normal
  }

  getAdditionalAutofillSnapshotData() {
    return {
      education: this.autofillEducation,
      employment: this.autofillEmployment,
    }
  }

  getAdditionalSubmitSnapshotData() {
    return {
      education: this.submitEducation,
      employment: this.submitEmployment,
    }
  }

  splitSnapshot(snapshot) {
    const { education, employment, ...normal } = snapshot
    return {
      normal,
      education: Array.isArray(education) ? education : void 0,
      employment: Array.isArray(employment) ? employment : void 0,
    }
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNode('.//*[@data-ui="apply-button"]')
    operations.submitObserver(button)
    if (button) button?.click()
  }

  constructor(...args) {
    super(...args)
    this.lastRules = []
  }
}

export { Workable }
