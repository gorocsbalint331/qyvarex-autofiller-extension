// @ts-nocheck
/**
 * Paylocity ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and paylocity/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "paylocity"
 */

import * as filler from "../shared/filler.js"
import * as cancellation from "../methods/cancellation.js"
import { BaseFiller } from "./base-filler.ts"
import * as answerMethods from "../methods/answer.js"
import * as dom from "../methods/dom.js"
import * as rulesMethods from "../methods/rules.js"
import * as track from "../methods/track.js"
import * as paylocityAnswer from "./paylocity/answer.ts"
import * as operations from "./paylocity/operations.ts"
import * as rules from "./paylocity/rules.ts"
import * as enums from "../../core/enums.js"
import * as coreDom from "../../core/dom.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as delay from "../../utils/delay.js"

function normalizeLabelKey(label) {
  return answerMethods.removeSpecialCharacters(label).toLowerCase().trim()
}

function findDegreeObtainedFallback(label, record) {
  const normalizedLabel = normalizeLabelKey(label)
  const candidates = Object.keys(record || {})
    .filter(
      (key) =>
        key && void 0 !== record[key] && null !== record[key],
    )
    .map((key) => ({
      key,
      normalizedKey: normalizeLabelKey(key),
    }))
    .filter(({ normalizedKey }) => normalizedKey)
  const exactOrPartial = candidates.find(
    ({ normalizedKey }) =>
      normalizedKey === normalizedLabel ||
      normalizedLabel.includes(normalizedKey) ||
      normalizedKey.includes(normalizedLabel),
  )
  if (exactOrPartial) return record[exactOrPartial.key]
  if (/degreeobtained/i.test(normalizedLabel)) {
    const degreeKey = candidates.find(({ normalizedKey }) =>
      normalizedKey.includes("degree"),
    )
    if (degreeKey) return record[degreeKey.key]
  }
}

function didGraduateFromRecord(record) {
  try {
    let foundValue
    const graduateKeys = [
      "Did you graduate?",
      "Did you Graduate?",
      "didGraduate",
      "Did You Graduate?",
      "graduated",
      "Graduated",
      "Did you graduate",
      "didYouGraduate",
    ]
    let matchedKey = ""
    for (const key of graduateKeys)
      try {
        if (
          null != (foundValue = answerMethods.findValueInRecord(key, record)) &&
          "" !== foundValue
        ) {
          matchedKey = key
          break
        }
      } catch {
        continue
      }
    if (null == foundValue || "" === foundValue) {
      for (const [key, value] of Object.entries(record))
        if (/did.*graduate/i.test(key) || /graduate/i.test(key)) {
          foundValue = value
          matchedKey = key
          break
        }
    }
    const raw = Array.isArray(foundValue) ? foundValue[0] : foundValue
    const normalized = String(raw).trim().toLowerCase()
    const didGraduate =
      "yes" === normalized ||
      "y" === normalized ||
      "true" === normalized ||
      "1" === normalized
    return didGraduate
  } catch (error) {
    return true
  }
}

function getRuleContainer(rule) {
  const container = rule?.$container ?? rule?.$input
  return container instanceof HTMLElement ? container : null
}

function coerceHandlerValue(value, expectArray) {
  return expectArray
    ? answerMethods.ensureArray(value)
    : Array.isArray(value)
      ? value[0]
      : value
}

class Paylocity extends BaseFiller {
  doFillForm(force = false) {
    return this.runDoFillFormSingleFlight(force)
  }

  getSiteName() {
    return "paylocity"
  }

  async runPreFillForm() {
    this.currentRunCountryFilled = false
    this.taskQueue.add(operations.waitPageClean)
    await this.taskQueue.run()
    const autofill = await autofillInfo.useAutofillInfoStore
      .getState()
      .fetchAutofillInfo()
    this.taskQueue.add(async () => {
      this.currentRunCountryFilled = await operations.fillCountry(
        autofill?.location?.country,
      )
    })
    await this.taskQueue.run()
    this.taskQueue.add(async () => {
      await operations.preclickAddButtons()
    })
    await this.taskQueue.run()
    this.taskQueue.add(async () => {
      await operations.expandFormFromProfile({
        expandEmployment: false,
      })
    })
    await this.taskQueue.run()
  }

  async extractFormRules() {
    const formRules = await rules.getRules()
    this.taskQueue.add(operations.blurPage)
    await this.taskQueue.run()
    return formRules
  }

  formatAnswer(answer) {
    return paylocityAnswer.formatAnswer(answer)
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(
      await operations.getPaylocityCoverLetterStatus(),
    )
  }

  async fetchFormAnswers(formRules, options) {
    try {
      this.token || (this.token = await answerMethods.getSiteToken())
      this.timeTrace.requestStartTime = Date.now()
      const filteredRules = rulesMethods.filterRulesByLabel(formRules, [
        "Security Code",
        "Country",
        "Country / Territory",
        "United States of America",
        "Date",
        "Employee ID (if applicable)",
        "What is your desired start date?",
        "What is your date of availability?",
      ])
      const falconCapture = this.captureFalconResponseRun()
      const falconResponse = await answerMethods.getElementRules(
        filteredRules,
        this.getSiteName(),
        this.token,
        options,
        this.resumeInfo.id,
        this.resumeInfo.tailorId,
      )
      this.recordFalconResponse(falconResponse, falconCapture)
      this.answer = this.formatAnswer(falconResponse)
      this.timeTrace.fillStartTime = Date.now()
    } catch (error) {
      if (
        error instanceof answerMethods.HTTPError ||
        error instanceof answerMethods.ResumeMissingCodeError
      )
        return track.sendHttpStatusMessage(error.message), error.message
      console.error("Unknown error occurred:", error)
    }
    cancellation.checkpoint()
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.NUMBER]: {
        handler: (rule, value) => (
          console.info("[Paylocity][SalaryRange] filling field", {
            id: rule.$input?.id,
            label: rule.label,
            hasValue: null != value && "" !== value,
          }),
          dom.fillInputTextField(rule.$input, value)
        ),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        dom.fillCheckBoxesField(rule, value),
      [enums.FIELD_TYPE.MULTI_SELECT]: (rule, value) =>
        operations.fillSearchBoxInputField(rule.$input, value),
      [enums.FIELD_TYPE.SEARCH]: (rule, value) =>
        operations.fillSearchBoxInputField(rule.$input, value),
      [enums.FIELD_TYPE.LISTBOX]: (rule, value) =>
        operations.fillListboxButtonField(rule.$input, value),
    }
  }

  buildOperationConfig() {
    const config = super.buildOperationConfig()
    const textHandler = this.createOperationHandler(
      async (rule, value) =>
        operations.isPaylocityPersonalAddressInput(rule.$input)
          ? await operations.fillPaylocityPersonalAddressField(
              rule.$input,
              String(value),
            )
          : (await dom.fillInputTextField(rule.$input, value),
            await delay.delay(
              operations.PAYLOCITY_PERSONAL_ADDRESS_SETTLE_DELAY_MS,
            ),
            true),
      {
        expectArray: true,
      },
    )
    const selectHandler = this.createOperationHandler(
      (rule, value) =>
        operations.fillListboxSelectButtonField(rule.$input, value),
      {
        expectArray: true,
      },
    )
    return (
      (config[enums.FIELD_TYPE.TEXT] = async (
        rule,
        record,
        updateProgress = true,
      ) => {
        if (/^Graduation Date$/i.test(rule.label)) {
          if (!didGraduateFromRecord(record)) return
          const container = getRuleContainer(rule)
          await this.runCustomHandler(
            rule,
            record,
            async (value) => {
              if (!container) return false
              const filled =
                await operations.fillPaylocityEducationGraduationDate(
                  container,
                  String(value),
                )
              return filled
            },
            {
              expectArray: false,
            },
            updateProgress,
          )
          return
        }
        await textHandler(rule, record, updateProgress)
      }),
      (config[enums.FIELD_TYPE.SELECT] = async (
        rule,
        record,
        updateProgress = true,
      ) => {
        if (/^Degree Obtained$/i.test(rule.label)) {
          if (!didGraduateFromRecord(record)) return
          const container = getRuleContainer(rule)
          await this.runCustomHandler(
            rule,
            record,
            async (value) => {
              if (!container) return false
              const filled =
                await operations.fillPaylocityEducationDegreeObtained(
                  container,
                  value,
                )
              return filled
            },
            {
              expectArray: true,
            },
            updateProgress,
          )
          return
        }
        await selectHandler(rule, record, updateProgress)
      }),
      (config[enums.FIELD_TYPE.DATE] = async (
        rule,
        record,
        updateProgress = true,
      ) => {
        if (/^Available to Start$/i.test(rule.label)) {
          await this.runCustomHandler(
            rule,
            record,
            async (value) => {
              const input = rule.$input
              return (
                !!input &&
                (await operations.fillAvailableToStartField(
                  input,
                  String(value),
                ),
                true)
              )
            },
            {
              expectArray: false,
            },
            updateProgress,
          )
          return
        }
        const dateHandler = this.createOperationHandler((rule2, value) =>
          operations.fillPaylocityDateField(rule2.$input, value),
        )
        await dateHandler(rule, record, updateProgress)
      }),
      config
    )
  }

  async runCustomHandler(
    rule,
    record,
    handler,
    options = {},
    updateProgress = true,
  ) {
    try {
      let rawValue
      try {
        rawValue = answerMethods.findValueInRecord(rule.label, record)
      } catch (error) {
        if (
          error instanceof filler.ValueError &&
          /^Degree Obtained$/i.test(rule.label)
        ) {
          const fallback = findDegreeObtainedFallback(rule.label, record)
          if (void 0 === fallback) throw error
          rawValue = fallback
        } else throw error
      }
      const value = coerceHandlerValue(rawValue, options.expectArray)
      const result = await handler(value)
      if (false === result)
        throw new filler.ValueError(`No target found for label: ${rule.label}`)
      updateProgress && this.progressTracker.updateFilledProgress(rule.label)
    } catch (error) {
      filler.ValueError,
        updateProgress &&
          this.progressTracker.updateMissedProgress(rule.label)
    }
  }

  async fillRegularFields(formRules) {
    const nonSkills = formRules.filter(
      (rule) => "skills" !== normalizeLabelKey(rule.label),
    )
    const addressRules = operations.orderPaylocityPersonalAddressRules(
      nonSkills.filter(operations.isPaylocityPersonalAddressRule),
    )
    const otherRules = nonSkills.filter(
      (rule) => !operations.isPaylocityPersonalAddressRule(rule),
    )
    for (const rule of (await super.fillRegularFields(otherRules),
    addressRules)) {
      await super.fillRegularFields([rule])
      const input = rule.$input
      const controlId = input?.id || input?.querySelector("input")?.id
      if ("public-site-address-address-1" === controlId) {
        const addressRoot = document.querySelector(
          '[data-automation-id="public-site-address"]',
        )
        if (addressRoot) {
          const quiet =
            await operations.waitForPaylocityPersonalAddressQuiet(addressRoot)
          console.info("[Paylocity][PersonalAddress] native update settled", {
            quiet,
          })
        }
      }
    }
  }

  async fillEducationAndEmployment(formRules) {
    await operations.expandForm(this.answer)
    const eduRules = await rules.getEduRules()
    const expRules = await rules.getExpRules()
    const educationRules =
      eduRules.length > 0
        ? eduRules
        : formRules.filter((rule) => rule.type === enums.FIELD_TYPE.EDUCATION)
    const employmentRules =
      expRules.length > 0
        ? expRules
        : formRules.filter((rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT)
    coreDom.setSectionResultFocusRules("employment", employmentRules)
    const employmentOps = answerMethods.getEmploymentOperations(
      employmentRules,
      this.answer.workExperience,
      this.operationConfig,
      void 0,
      {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onCompleted: () => {
          employmentRules.length > 0 &&
            this.progressTracker.updateFilledProgress("Employment")
        },
        onSkipped: () =>
          this.progressTracker.updateMissedProgress("Employment"),
      },
    )
    coreDom.setSectionResultFocusRules("education", educationRules)
    const educationOps = answerMethods.getEducationOperations(
      educationRules,
      this.answer.education,
      this.operationConfig,
      void 0,
      {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onCompleted: () => {
          educationRules.length > 0 &&
            this.progressTracker.updateFilledProgress("Education")
        },
        onSkipped: () =>
          this.progressTracker.updateMissedProgress("Education"),
      },
    )
    const sectionOps = [...employmentOps, ...educationOps]
    for (const op of sectionOps) this.taskQueue.add(op)
    await this.taskQueue.run()
  }

  async handleResumeUpload() {
    const removeResume = document.querySelector("#remove-resume")
    removeResume
      ? this.progressTracker.updateFilledProgress("Resume/CV")
      : this.disableUploadResume
        ? this.progressTracker.updateMissedProgress("Resume/CV")
        : this.taskQueue.add(async () => {
            const useAttached = document.querySelector(
              "#useAttachedResumeToFillOutApplication",
            )
            const isChecked =
              useAttached?.hasAttribute("checked") || useAttached?.checked
            isChecked && useAttached.click()
            await operations.uploadResume(
              this.resumeInfo,
              this.progressTracker.updateFieldRequiredStatus,
              this.progressTracker.updateFilledProgress,
            )
          })
    this.taskQueue.add(async () => {
      const filled = await operations.fillSkills(this.answer.skills)
      filled
        ? this.progressTracker.updateFilledProgress("Skills")
        : this.progressTracker.updateMissedProgress("Skills")
    })
  }

  async executeSiteSpecificSteps(formRules) {
    const reconcileResult = await operations.reconcilePaylocityPersonalAddress({
      rules: formRules,
      record: this.answer.regular,
      fillRule: async (rule, value) => {
        const input = rule.$input
        if (!input) return false
        const controlId =
          input.id || input.querySelector("input")?.id || ""
        return operations.isPaylocityPersonalStateControlId(controlId)
          ? await operations.fillPaylocityPersonalStateField(
              controlId,
              answerMethods.ensureArray(value),
            )
          : operations.isPaylocityPersonalAddressInput(input)
            ? await operations.fillPaylocityPersonalAddressField(
                input,
                String(value ?? ""),
              )
            : await operations.fillListboxSelectButtonField(
                input,
                answerMethods.ensureArray(value),
              )
      },
      waitForQuiet: async () => {
        const addressRoot = document.querySelector(
          '[data-automation-id="public-site-address"]',
        )
        return (
          !!addressRoot &&
          (await operations.waitForPaylocityPersonalAddressQuiet(addressRoot))
        )
      },
    })
    for (const rule of formRules.filter(
      operations.isPaylocityPersonalAddressRule,
    )) {
      const input = rule.$input
      const controlId = input?.id || input?.querySelector("input")?.id
      controlId && reconcileResult.filledControlIds.includes(controlId)
        ? this.progressTracker.updateFilledProgress(rule.label)
        : controlId &&
          reconcileResult.missingControlIds.includes(controlId) &&
          this.progressTracker.updateMissedProgress(rule.label)
    }
    console.info("[Paylocity][PersonalAddress] final validation", {
      attemptedControlIds: reconcileResult.attemptedControlIds,
      filledControlIds: reconcileResult.filledControlIds,
      missingControlIds: reconcileResult.missingControlIds,
    }),
      this.currentRunCountryFilled &&
        this.progressTracker.updateFilledProgress("Country"),
      operations.hasPaylocityCoverLetterSlot() &&
        (this.progressTracker.updateFieldRequiredStatus({
          label: "Cover Letter",
          required: true,
        }),
        this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName
          ? this.taskQueue.add(async () => {
              const uploaded = await operations.uploadCoverLetter(
                {
                  coverLetterId: this.coverLetter.coverLetterId,
                  coverLetterName: this.coverLetter.coverLetterName,
                  markdown: this.coverLetter.markdown,
                  useLegacyDownload: this.coverLetter.useLegacyDownload,
                },
                this.progressTracker.updateFieldRequiredStatus,
                this.progressTracker.updateFilledProgress,
              )
              uploaded ||
                this.progressTracker.updateMissedProgress("Cover Letter")
            })
          : operations.hasUploadedPaylocityCoverLetter()
            ? this.progressTracker.updateFilledProgress("Cover Letter")
            : this.progressTracker.updateMissedProgress("Cover Letter")),
      this.taskQueue.add(async () => {
        await operations.blurPage()
      }),
      await this.taskQueue.run()
    const submitButtonText = rules.getSubmitButtonText()
    track.bindSubmitButton(
      submitButtonText,
      this.progressTracker.fieldStatus,
      this.timeTrace,
    )
    const nextButton = document.querySelector(
      'button[data-automation-id="pageFooterNextButton"], button[data-automation-id="bottom-navigation-next-button"], button#btn-submit[data-automation-id="btnNext"]',
    )
    if (nextButton && "Submit" !== nextButton.innerText) {
      this.continueButtonHandler &&
        nextButton.removeEventListener("click", this.continueButtonHandler)
      const snapshot = await this.getAutofillSnapshot(formRules)
      this.continueButtonHandler = operations.submitHandler.bind(
        null,
        snapshot,
        formRules,
        this.answer,
      )
      nextButton.addEventListener("click", this.continueButtonHandler)
    }
  }

  async getAutofillSnapshot(formRules) {
    return rules.getFormSnapshot(formRules)
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  submitApplication() {
    const snapshot = rules.getFormSnapshot()
    operations.submitHandler(snapshot, [], this.answer)
  }

  constructor(...args) {
    super(...args),
      (this.continueButtonHandler = null),
      (this.currentRunCountryFilled = false),
      (this.runDoFillFormSingleFlight = operations.createPaylocitySingleFlight(
        (force = false) => super.doFillForm(force),
      ))
  }
}

export { Paylocity }
