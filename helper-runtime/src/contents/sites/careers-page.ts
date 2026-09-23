// @ts-nocheck
/**
 * Careers Page ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and careers-page/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "careers-page"
 */

import * as sectionResults from "../methods/section-results.js"
import * as answerMethods from "../methods/answer.js"
import * as dom from "../methods/dom.js"
import { BaseFiller } from "./base-filler.ts"
import * as autofillAnswerPairTracking from "./autofill-answer-pair-tracking.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as urlStore from "../../store/url.js"
import * as delay from "../../utils/delay.js"
import * as careersAnswer from "./careers-page/answer.ts"
import * as operations from "./careers-page/operations.ts"
import * as rules from "./careers-page/rules.ts"

function collectEduExpSections(sectionType) {
  const sections = []
  const formGroups = document.querySelectorAll(".form-group")
  for (const formGroup of formGroups) {
    if (rules.detectEduExpType(formGroup) === sectionType) {
      formGroup
        .querySelectorAll(".education-experience-item")
        .forEach((item) => sections.push(item))
    }
  }
  return sections
}

function getEducationSections() {
  return collectEduExpSections("education")
}

function getExperienceSections() {
  return collectEduExpSections("experience")
}

class Careerspage extends BaseFiller {
  extractEducationEmploymentAdditional(snapshot) {
    const { education, employment } = snapshot || {}
    return {
      education: education || [],
      employment: employment || [],
    }
  }

  async fillSequentialSectionRecords(config) {
    const {
      sectionName,
      records,
      getSections,
      addSection,
      getRules,
      getOperations,
      beforeFillSection,
      afterFillSection,
      onSkipped,
    } = config

    if (!records.length) return

    const reporter = sectionResults.createSequentialSectionResultReporter(
      sectionName === "education" ? "education" : "employment",
      this.progressTracker,
      sectionName === "education" ? "Education" : "Experience",
    )
    let skipped = false

    for (let recordIndex = 0; recordIndex < records.length; recordIndex++) {
      let sections = getSections()
      console.debug("[careers-page][section] preparing record", {
        sectionName,
        recordIndex,
        recordCount: records.length,
        sectionCount: sections.length,
      })

      if (recordIndex > 0 || sections.length === 0) {
        const beforeCount = sections.length
        await addSection(1)
        let added = false

        for (let attempt = 0; attempt < 10; attempt++) {
          sections = getSections()
          if (sections.length > beforeCount) {
            added = true
            break
          }
          await delay.delay(200)
        }

        console.debug("[careers-page][section] add attempt completed", {
          sectionName,
          recordIndex,
          beforeCount,
          sectionCount: sections.length,
          added,
        })

        if (!added && recordIndex > 0) {
          console.warn(
            `Failed to add next ${sectionName} section at index ${recordIndex}`,
          )
          break
        }
      }

      sections = getSections()
      let currentSection = sections[sections.length - 1]
      if (!currentSection) {
        console.warn("[careers-page][section] current section not found", {
          sectionName,
          recordIndex,
          sectionCount: sections.length,
          formGroups: Array.from(
            document.querySelectorAll(".form-group"),
          ).map((group) => ({
            detectedType: rules.detectEduExpType(group),
            label:
              group.querySelector(":scope > label")?.textContent?.trim() || "",
            itemCount: group.querySelectorAll(".education-experience-item")
              .length,
          })),
        })
        break
      }

      if (beforeFillSection) await beforeFillSection(currentSection)

      const sectionRules = await getRules()
      const currentRule = sectionRules[sectionRules.length - 1]
      console.debug("[careers-page][section] rules extracted", {
        sectionName,
        recordIndex,
        ruleCount: sectionRules.length,
        childCount: currentRule?.children?.length || 0,
      })

      if (!currentRule) {
        console.warn("[careers-page][section] current rule not found", {
          sectionName,
          recordIndex,
          sectionCount: sections.length,
          ruleCount: sectionRules.length,
        })
        break
      }

      const ops = getOperations(
        [currentRule],
        [records[recordIndex]],
        this.operationConfig,
        undefined,
        {
          ...reporter.forRecord(recordIndex, [currentRule]),
          onSkipped: () => {
            skipped = true
          },
        },
      )

      for (const op of ops) this.taskQueue.add(op)

      console.debug("[careers-page][section] operations started", {
        sectionName,
        recordIndex,
        operationCount: ops.length,
      })

      await this.taskQueue.run()
      console.debug("[careers-page][section] operations completed", {
        sectionName,
        recordIndex,
      })

      if (skipped) {
        onSkipped?.()
        return
      }

      const afterSections = getSections()
      const filledSection =
        afterSections[afterSections.length - 1] || currentSection

      if (afterFillSection) {
        await afterFillSection(filledSection, records[recordIndex])
      }

      console.debug("[careers-page][section] post-processing completed", {
        sectionName,
        recordIndex,
      })

      const saveTarget =
        getSections()[getSections().length - 1] || filledSection
      const saved = await operations.clickSaveButton(saveTarget)

      console.debug("[careers-page][section] save attempted", {
        sectionName,
        recordIndex,
        saved,
      })

      if (!saved) {
        reporter.markRecordMissed(recordIndex)
        console.warn(
          `Save ${sectionName} section failed at index ${recordIndex}`,
        )
        break
      }

      reporter.clearRecordFocus(recordIndex)
    }
  }

  getRecordDateValue(record, aliases) {
    for (const alias of aliases) {
      try {
        const found = answerMethods.findValueInRecord(alias, record)
        const value = Array.isArray(found) ? found[0] : found
        const text = String(value || "").trim()
        if (text) return text
      } catch {
        // ignore lookup errors
      }
    }
    return null
  }

  async fillSectionEndDateAfterStart(config) {
    const {
      section,
      record,
      sectionName,
      startSelectors,
      endSelectors,
      preferredEndDateQuery,
      getSections,
    } = config

    const endDateValue = this.getRecordDateValue(
      record,
      careersAnswer.END_DATE_LABEL_ALIASES,
    )
    if (!endDateValue) return

    const startQuery = startSelectors.join(", ")
    const endQuery = endSelectors.join(", ")

    const getCurrentSection = () => {
      const sections = getSections()
      return sections[sections.length - 1] || section
    }

    const getMatchingFormGroups = () =>
      Array.from(document.querySelectorAll(".form-group")).filter((group) => {
        const label =
          group.querySelector(":scope > label")?.textContent?.toLowerCase() ||
          ""
        return (
          !!label.includes(sectionName) ||
          Array.from(group.querySelectorAll("button")).some((button) => {
            const text = button.textContent?.trim().toLowerCase() || ""
            return text.includes("add") && text.includes(sectionName)
          })
        )
      })

    let startInput = null
    let startReadyAt = -1

    for (let attempt = 0; attempt < 20; attempt++) {
      const current = getCurrentSection()
      const inSection = current.querySelector(startQuery)
      const inFormGroup = getMatchingFormGroups()
        .map((group) => group.querySelector(startQuery))
        .find((el) => !!el)
      const found = inSection || inFormGroup || null

      if ((found?.value || "").trim()) {
        startInput = found
        startReadyAt = attempt
        break
      }
      await delay.delay(150)
    }

    if (!startInput) {
      console.warn("[careers-page][end-date] start input not ready", {
        sectionName,
        startQuery,
        startedAtCountInDocument: document.querySelectorAll(startQuery).length,
      })
    }

    let endInput = null
    let endFoundAt = -1
    let endSource = ""

    for (let attempt = 0; attempt < 20; attempt++) {
      const current = getCurrentSection()
      const byStartRow = startInput
        ?.closest(".education-experience-item")
        ?.querySelector(preferredEndDateQuery)
      const bySection = current.querySelector(preferredEndDateQuery)
      const byFormGroup = getMatchingFormGroups()
        .map((group) => group.querySelector(preferredEndDateQuery))
        .find((el) => !!el)
      const byDocument = document.querySelector(endQuery)

      if (byStartRow) {
        endInput = byStartRow
        endSource = "byStartRow"
      } else if (bySection) {
        endInput = bySection
        endSource = "bySection"
      } else if (byFormGroup) {
        endInput = byFormGroup
        endSource = "byFormGroup"
      } else if (byDocument) {
        endInput = byDocument
        endSource = "byDocument"
      } else {
        endInput = null
      }

      if (endInput) {
        endFoundAt = attempt
        break
      }
      await delay.delay(200)
    }

    if (!endInput) {
      console.warn(
        "[careers-page][end-date] end input not found after start filled",
        {
          sectionName,
          endQuery,
          preferredEndDateQuery,
          endedAtCountInDocument: document.querySelectorAll(endQuery).length,
          endedAtCountByName: document.querySelectorAll(
            'input[name="ended_at"]',
          ).length,
        },
      )
      return
    }

    const existing = (endInput.value || "").trim()
    if (existing) return

    const labelEl =
      section.closest(".form-group")?.querySelector(":scope > label") ||
      endInput

    await operations.fillDateField(
      {
        label: "End Date",
        type: enums.FIELD_TYPE.DATE,
        required: false,
        $label: labelEl,
        $input: endInput,
      },
      endDateValue,
    )
  }

  async ensureConsentCheckboxes() {
    try {
      const checkboxes = operations.querySelectorAllInDocumentAndShadows(
        'input[type="checkbox"]',
      )
      if (!checkboxes.length) return

      const keywords = [
        "terms and conditions",
        "privacy policy",
        "privacy",
        "terms",
      ]

      for (const checkbox of checkboxes) {
        if (checkbox.checked) continue

        const root = checkbox.getRootNode()
        const labelEl =
          (checkbox.id
            ? root.querySelector(`label[for="${checkbox.id}"]`)
            : null) ||
          checkbox.closest("label") ||
          checkbox.parentElement

        const text = (labelEl?.textContent || "").toLowerCase()
        if (!text) continue

        const matches = keywords.some((keyword) => text.includes(keyword))
        if (matches) {
          checkbox.click()
          await delay.delay(100)
        }
      }
    } catch {
      // ignore consent checkbox errors
    }
  }

  async fillEducationEndDateAfterStart(section, record) {
    await this.fillSectionEndDateAfterStart({
      section,
      record,
      sectionName: "education",
      startSelectors: careersAnswer.EDUCATION_START_DATE_SELECTORS,
      endSelectors: careersAnswer.EDUCATION_END_DATE_SELECTORS,
      preferredEndDateQuery: careersAnswer.EDUCATION_PREFERRED_END_DATE_QUERY,
      getSections: getEducationSections,
    })
  }

  async fillExperienceEndDateAfterStart(section, record) {
    await this.fillSectionEndDateAfterStart({
      section,
      record,
      sectionName: "experience",
      startSelectors: careersAnswer.EXPERIENCE_START_DATE_SELECTORS,
      endSelectors: careersAnswer.EXPERIENCE_END_DATE_SELECTORS,
      preferredEndDateQuery: careersAnswer.EXPERIENCE_PREFERRED_END_DATE_QUERY,
      getSections: getExperienceSections,
    })
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(rules.getCoverLetterStatus())
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const text = value?.[0]
        if (!text) return
        const label = rule.label?.toLowerCase() || ""
        return label.includes("phone")
          ? operations.fillPhoneField(rule, String(text ?? ""))
          : operations.fillInputTextField(rule.$input, String(text ?? ""))
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupFiled(rule, value),
      [enums.FIELD_TYPE.DATE]: (rule, value) => {
        const text = value?.[0]
        if (text) return operations.fillDateField(rule, String(text))
      },
    }
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "careers-page"
  }

  async getAutofillSnapshot(formRules) {
    const formSnapshot = (await rules.getFormSnapshot()) || {}
    const eduEmployment = rules.getEduAndEmploymentSnapshot() || {}
    const full = {
      ...formSnapshot,
      ...eduEmployment,
    }
    this.lastFullAutofillSnapshot = full

    const withoutStructured = { ...full }
    delete withoutStructured.education
    delete withoutStructured.employment
    return withoutStructured
  }

  async getSubmitSnapshot() {
    const formSnapshot = (await rules.getFormSnapshot()) || {}
    const eduEmployment = rules.getEduAndEmploymentSnapshot() || {}
    const full = {
      ...formSnapshot,
      ...eduEmployment,
    }
    this.lastFullSubmitSnapshot = full

    const withoutStructured = { ...full }
    delete withoutStructured.education
    delete withoutStructured.employment
    return withoutStructured
  }

  getAdditionalAutofillSnapshotData(formRules) {
    return this.extractEducationEmploymentAdditional(
      this.lastFullAutofillSnapshot,
    )
  }

  getAdditionalSubmitSnapshotData() {
    return this.extractEducationEmploymentAdditional(
      this.lastFullSubmitSnapshot,
    )
  }

  async executeSiteSpecificSteps(formRules) {
    const xpathButton = xpath.getFirstOrderedNode(
      careersAnswer.APPLY_SUBMIT_BUTTON_XPATH,
    )
    const shadowRoot =
      document.querySelector("#application-root")?.shadowRoot || null
    const shadowButton = shadowRoot
      ? shadowRoot.querySelector('button[data-testid="mnkt-button"]')
      : null
    const submitButton = shadowButton || xpathButton

    await delay.delay(300)

    const autofillSnapshot = await this.getAutofillSnapshot(formRules)
    const additionalAutofillData =
      this.getAdditionalAutofillSnapshotData?.(formRules) || {}

    if (submitButton) {
      this.careersSubmitTrackingAbortController?.abort()
      this.careersSubmitTrackingAbortController = new AbortController()

      submitButton.addEventListener(
        "click",
        async () => {
          const submitSnapshot = await this.getSubmitSnapshot()
          const additionalSubmitData =
            this.getAdditionalSubmitSnapshotData?.() || {}

          autofillAnswerPairTracking.sendAutofillAnswerPairEvent({
            formUrl: urlStore.useUrlStore.getState().currentTabUrl,
            autofillSnapshot,
            submitSnapshot,
            additionalAutofillData,
            additionalSubmitData,
            source: this.getSiteName(),
          })
        },
        {
          signal: this.careersSubmitTrackingAbortController.signal,
        },
      )
    }
  }

  submitApplication() {
    const xpathButton = xpath.getFirstOrderedNode(
      careersAnswer.APPLY_SUBMIT_BUTTON_XPATH,
    )
    const shadowRoot =
      document.querySelector("#application-root")?.shadowRoot || null
    const shadowButton = shadowRoot
      ? shadowRoot.querySelector('button[data-testid="mnkt-button"]')
      : null
    const submitButton = shadowButton || xpathButton
    if (submitButton) submitButton.click()
  }

  async doFillForm(skipCoverLetter = false) {
    await this.initializeFillForm()
    console.debug("[careers-page][fill] initialized")

    const formRules = this.prepareCoverLetterRules(
      await this.extractFormRules(),
    )
    console.debug("[careers-page][fill] rules extracted", {
      total: formRules.length,
      education: formRules.filter(
        (rule) => rule.type === enums.FIELD_TYPE.EDUCATION,
      ).length,
      employment: formRules.filter(
        (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
      ).length,
    })

    this.progressTracker.setFieldsRequiredStatus(formRules)
    console.debug("[careers-page][fill] resume upload started")
    await this.handleResumeUpload()
    console.debug("[careers-page][fill] resume upload completed")
    console.debug("[careers-page][fill] answer request started")

    const answerResult = await this.fetchFormAnswers(
      formRules,
      skipCoverLetter,
    )

    if (typeof answerResult === "string") {
      console.warn("[careers-page][fill] answer request stopped", {
        reason: answerResult,
      })
      return answerResult
    }

    console.debug("[careers-page][fill] answer request completed", {
      regular: Object.keys(this.answer.regular || {}).length,
      education: this.answer.education?.length || 0,
      employment: this.answer.workExperience?.length || 0,
    })

    await this.fillRegularFields(formRules)
    console.debug("[careers-page][fill] regular fields completed")

    await this.ensureConsentCheckboxes()
    await this.fillEducationAndEmployment(formRules)
    console.debug("[careers-page][fill] structured sections completed")

    await this.fillCoverLetterFields()
    await this.executeSiteSpecificSteps(formRules)
    return this.finalizeFillForm()
  }

  async fillEducationAndEmployment(formRules) {
    const educationRecords = this.answer.education || []
    let educationSkipped = false

    await this.fillSequentialSectionRecords({
      sectionName: "education",
      records: educationRecords,
      getSections: getEducationSections,
      addSection: operations.addEducationSection,
      getRules: async () => await rules.getEducationRules(),
      getOperations: answerMethods.getEducationOperations,
      afterFillSection: async (section, record) => {
        await this.fillEducationEndDateAfterStart(section, record)
      },
      onSkipped: () => {
        educationSkipped = true
      },
    })

    const employmentRecords = this.answer.workExperience || []
    let employmentSkipped = false

    await this.fillSequentialSectionRecords({
      sectionName: "experience",
      records: employmentRecords,
      getSections: getExperienceSections,
      addSection: operations.addEmploymentSection,
      getRules: async () => await rules.getExperienceRules(),
      getOperations: answerMethods.getEmploymentOperations,
      beforeFillSection: async (section) => {
        const currentEmployer = section.querySelector(
          'input[name="is_current_employer"]',
        )
        if (currentEmployer?.checked) {
          currentEmployer.click()
          await delay.delay(300)
        }
      },
      afterFillSection: async (section, record) => {
        await this.fillExperienceEndDateAfterStart(section, record)
      },
      onSkipped: () => {
        employmentSkipped = true
      },
    })

    if (educationSkipped) {
      this.progressTracker.updateMissedProgress("Education")
    } else if (educationRecords.length > 0) {
      this.progressTracker.updateFilledProgress("Education")
    }

    if (employmentSkipped) {
      this.progressTracker.updateMissedProgress("Employment")
    } else if (employmentRecords.length > 0) {
      this.progressTracker.updateFilledProgress("Employment")
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

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  getSubmitButtonSelector() {
    return careersAnswer.APPLY_SUBMIT_BUTTON_XPATH
  }

  constructor(...args) {
    super(...args)
    this.lastFullAutofillSnapshot = {}
    this.lastFullSubmitSnapshot = {}
    this.careersSubmitTrackingAbortController = null
    this.formatAnswer = (answer) => careersAnswer.formatAnswer(answer)
  }
}

export { Careerspage }
