// @ts-nocheck
/**
 * Ultipro / UKG ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and ultipro/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "ultipro"
 */

import * as sectionResults from "../methods/section-results.ts"
import * as answerMethods from "../methods/answer.ts"
import * as cancellation from "../methods/cancellation.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as ultiproAnswer from "./ultipro/answer.ts"
import * as operations from "./ultipro/operations.ts"
import * as rules from "./ultipro/rules.ts"

function withCanonicalEduExpKeys(record) {
  return {
    ...record,
    School: record["School Name"] ?? record.School,
    Company: record["Company / Organization"] ?? record.Company,
  }
}

class Ultipro extends BaseFiller {
  static POST_PARSE_ANSWER_TIMEOUT_MS = 2e4

  constructor(...args) {
    super(...args)
    this.hasComboQuestions = true
    this.currentRunCountry = ""
    this.hasCompletedRegularFillRun = false
    this.preserveCommittedRegularFieldsForCurrentRun = false
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const first = value?.[0]
        return first
          ? operations.fillInputTextField(rule.$input, String(first ?? ""))
          : hasMeaningfulRuleValue(rule)
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) => {
        const first = value?.[0]
        if (!first) return hasMeaningfulRuleValue(rule)
        const input = rule.$input
        if (
          input.id === "Country" &&
          rule.label?.trim().toLowerCase() === "country"
        ) {
          return operations.prefillUltiproCountry(String(first ?? ""))
        }
        if (
          input.id === "State" &&
          /(?:state|province)/i.test(rule.label ?? "")
        ) {
          return operations.fillUltiproStateProvinceField(
            input,
            String(first ?? ""),
          )
        }
        return operations.fillSelectField(input, String(first ?? ""))
      },
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.MULTI_SELECT]: (rule, value) =>
        operations.fillMultiSelectField(rule, value),
      [enums.FIELD_TYPE.DATE]: (rule, value) => {
        const first = value?.[0]
        return first
          ? operations.fillDateField(rule.$input, String(first ?? ""))
          : hasMeaningfulRuleValue(rule)
      },
    }
  }

  async extractFormRules() {
    let contactEditorOpened = false
    const formRules = await rules.extractRules({
      beforeContactInformationExtraction: async () => {
        if (
          !(contactEditorOpened =
            await operations.openUltiproContactInformationEditor())
        ) {
          return
        }
        const country = ultiproAnswer.normalizeUltiproCountry(
          this.currentRunCountry,
        )
        const preserveCountry =
          !!country &&
          this.preserveCommittedRegularFieldsForCurrentRun &&
          Array.from(document.querySelectorAll("select#Country")).some(
            (el) =>
              !rules.isElementHidden(el) &&
              operations.hasMeaningfulControlValue(el),
          )
        if (country && !preserveCountry) {
          await operations.prefillUltiproCountry(country)
        } else if (country && preserveCountry) {
          console.info("[Ultipro][RepeatFill] preserved committed Country")
        }
      },
      afterQuestionExtraction: async () => {
        if (contactEditorOpened) {
          await operations.cancelUltiproContactInformationEditor()
        }
      },
    })
    return formRules.filter((rule) => !isSkillsTextRule(rule))
  }

  getNewComboQuestionRules(previousRules, nextRules) {
    const base = super
      .getNewComboQuestionRules(previousRules, nextRules)
      .filter(
        (rule) =>
          !isStateProvinceSelectRule(rule) || !hasMeaningfulRuleValue(rule),
      )
    const stateRule = nextRules.find(
      (rule) =>
        isStateProvinceSelectRule(rule) && !hasMeaningfulRuleValue(rule),
    )
    if (!stateRule || base.includes(stateRule)) return base
    console.info("[Ultipro][State / Province] queued for dynamic re-crawl", {
      optionCount: stateRule.$input?.options?.length ?? 0,
    })
    return [...base, stateRule]
  }

  getSiteName() {
    return "ultipro"
  }

  async runPreFillForm() {
    this.currentRunCountry = ""
    const info = await autofillInfo.useAutofillInfoStore
      .getState()
      .fetchAutofillInfo()
    this.currentRunCountry = info?.location?.country ?? ""
    if (this.preserveCommittedRegularFieldsForCurrentRun) {
      console.info(
        "[Ultipro][RepeatFill] skipped hidden contact prefill copy",
      )
    } else {
      await operations.fillVisibleContactFieldsFromHiddenPrefill()
    }
  }

  async getAutofillSnapshot() {
    return await rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot()
  }

  getSubmitButtonSelector() {
    return '//*[@id="OpportunityApply"]//ukg-button[@data-automation="btn-submit"]'
  }

  submitApplication() {
    const selector =
      '//*[@id="OpportunityApply"]//ukg-button[@data-automation="btn-submit"]'
    const button = xpath.getFirstOrderedNode(selector)
    if (button) button?.click()
  }

  async doFillForm(isRefill = false) {
    this.preserveCommittedRegularFieldsForCurrentRun =
      this.hasCompletedRegularFillRun
    await this.initializeFillForm()

    let formRules = await this.extractFormRules()
    const fillable = this.getFillableRulesForCurrentRun(formRules)
    this.progressTracker.setFieldsRequiredStatus(fillable)

    const answersOrError = await this.fetchFormAnswers(fillable, isRefill)
    if (typeof answersOrError === "string") return answersOrError

    this.answer = ultiproAnswer.formatAnswer(
      this.answer,
      this.currentRunCountry,
    )

    const rulesBeforeParse = formRules
    const resumeParseBaseline =
      !this.preserveCommittedRegularFieldsForCurrentRun &&
      operations.hasSelectedUltiproResumeFile()
        ? {
            initialSignature:
              operations.getUltiproResumeParserStateSignature(),
            initialSavedRowsSignature:
              operations.getUltiproSavedExperienceRowsSignature(),
          }
        : null

    let resumeReady = null
    if (this.preserveCommittedRegularFieldsForCurrentRun) {
      console.info("[Ultipro][RepeatFill] skipped repeated resume upload")
    } else {
      resumeReady = await this.handleResumeUpload()
      if (resumeReady !== false) {
        resumeReady = await operations.waitForUltiproResumeParsingToFinish(
          resumeReady === null && resumeParseBaseline
            ? resumeParseBaseline
            : {},
        )
      }
    }

    const prefilledLabels = this
      .preserveCommittedRegularFieldsForCurrentRun
      ? []
      : await operations.fillVisibleContactFieldsFromHiddenPrefill()
    if (prefilledLabels.length > 0) await this.delay(800)

    formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(
      this.getFillableRulesForCurrentRun(formRules),
    )

    const postParseRules = this.getFillableRulesForCurrentRun(
      this.getNewComboQuestionRules(rulesBeforeParse, formRules),
    )
    if (postParseRules.length > 0) {
      try {
        await this.fetchAnswersForPostParseRules(postParseRules, isRefill)
      } catch (error) {
        if (error instanceof cancellation.CancelledError) throw error
        console.error("[Ultipro] post-parse answer step failed:", error)
      }
    }

    if (resumeReady !== false) {
      await this.fillEducationAndEmployment(formRules)
    } else {
      console.warn(
        "[Ultipro] skipped structured experience fill because resume parser was not ready",
      )
    }

    await this.fillRegularFields(formRules)
    this.hasCompletedRegularFillRun = true
    console.info("[Ultipro] starting post-fill dynamic rule re-crawl", {
      ruleCount: formRules.length,
    })

    const comboResult = await this.runComboQuestionAutofillIfNeeded(
      formRules,
      isRefill,
    )
    if (typeof comboResult === "string") return comboResult
    formRules = comboResult
    await this.executeSiteSpecificSteps(formRules)
    return this.finalizeFillForm()
  }

  async fetchAnswersForPostParseRules(postParseRules, isRefill) {
    let timeoutId
    const labels = postParseRules.map((rule) => rule.label)
    console.log("[Ultipro] post-parse answer request:", labels)

    const timeoutSymbol = Symbol("timeout")
    const timeoutPromise = new Promise((resolve) => {
      timeoutId = setTimeout(
        () => resolve(timeoutSymbol),
        Ultipro.POST_PARSE_ANSWER_TIMEOUT_MS,
      )
    })
    const answerPromise = this.requestFormAnswers(postParseRules, isRefill, {
      updateTimeTrace: false,
    })
    answerPromise.catch(() => {})

    const result = await Promise.race([answerPromise, timeoutPromise])
    if (timeoutId) clearTimeout(timeoutId)

    if (result && typeof result === "object") {
      console.log(
        "[Ultipro] post-parse answer response:",
        Object.keys(result.regular ?? {}),
      )
      this.mergeComboQuestionAnswer(result, postParseRules)
    } else {
      console.warn(
        "[Ultipro] post-parse answer request degraded:",
        result === timeoutSymbol ? "timeout" : (result ?? "empty"),
      )
    }

    this.applyPostParseStateFallback(postParseRules)
    this.answer = ultiproAnswer.formatAnswer(
      this.answer,
      this.currentRunCountry,
    )
  }

  applyPostParseStateFallback(formRules) {
    const state =
      typeof this.answer?.state === "string" ? this.answer.state.trim() : ""
    if (!state) return
    for (const rule of formRules) {
      const label = rule.label
      if (!label) continue
      const lower = label.toLowerCase()
      if (
        (lower.includes("state") || lower.includes("province")) &&
        !this.hasRegularAnswer(label)
      ) {
        this.answer.regular = {
          ...this.answer.regular,
          [label]: state,
        }
      }
    }
  }

  hasRegularAnswer(label) {
    try {
      answerMethods.findValueInRecord(label, this.answer.regular)
      return true
    } catch {
      return false
    }
  }

  async fillRegularFields(formRules) {
    this.applyPostParseStateFallback(
      formRules.filter(isStateProvinceSelectRule),
    )
    const candidates = formRules.filter(
      (rule) => !rule.__ultiproDialogSection && !isSkillsTextRule(rule),
    )
    const fillable = this.getFillableRulesForCurrentRun(candidates)
    if (this.preserveCommittedRegularFieldsForCurrentRun) {
      console.info(
        "[Ultipro][RepeatFill] preserved committed regular fields",
        {
          candidateCount: candidates.length,
          skippedCount: candidates.length - fillable.length,
          fillCount: fillable.length,
        },
      )
    }
    await super.fillRegularFields(fillable)
  }

  async filterNewComboQuestionRules(formRules) {
    return this.getFillableRulesForCurrentRun(formRules)
  }

  getFillableRulesForCurrentRun(formRules) {
    return this.preserveCommittedRegularFieldsForCurrentRun
      ? formRules.filter(
          (rule) =>
            !isCommittedRegularFieldRule(rule) ||
            !hasMeaningfulRuleValue(rule),
        )
      : formRules
  }

  async handleResumeUpload() {
    if (!operations.hasResumeUploadInput()) return null
    this.progressTracker.updateFieldRequiredStatus({
      label: "Resume/CV",
      required: true,
    })
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV")
      return null
    }
    let uploaded = null
    this.taskQueue.add(async () => {
      const ok = await operations.uploadResume(
        this.resumeInfo,
        this.progressTracker.updateFieldRequiredStatus,
        this.progressTracker.updateFilledProgress,
      )
      if (!ok) this.progressTracker.updateMissedProgress("Resume/CV")
      uploaded = ok
    })
    await this.taskQueue.run()
    return uploaded
  }

  async fillEducationAndEmployment(formRules) {
    const educationRule = formRules.find(
      (rule) => rule.type === enums.FIELD_TYPE.EDUCATION,
    )
    const employmentRule = formRules.find(
      (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
    )
    if (
      Array.isArray(this.answer.workExperience) &&
      (employmentRule || this.answer.workExperience.length === 0)
    ) {
      await this.fillEmploymentSection(employmentRule)
    }
    if (
      Array.isArray(this.answer.education) &&
      (educationRule || this.answer.education.length === 0)
    ) {
      await this.fillEducationSection(educationRule)
    }
  }

  async fillEmploymentSection(sectionRule) {
    const section = rules.getUltiproVisibleSection("employment")
    if (!section) return

    const addButton = sectionRule?.$input ?? null
    const records = this.answer.workExperience
    const reporter = sectionResults.createSequentialSectionResultReporter(
      "employment",
      this.progressTracker,
      "Employment",
    )
    const targetLabels = records.map((record) =>
      employmentRecordLabel(record),
    )
    const reconcile = await removeUltiproSavedEntriesOutsideFillV2(
      section,
      targetLabels,
      () => this.delay(100),
    )
    console.info(
      `[Ultipro] reconciled Employment rows to fill-v2: targetCount=${records.length}; removedCount=${reconcile.removed}; ready=${reconcile.ready}`,
    )
    if (!reconcile.ready) {
      console.warn(
        "[Ultipro] skipped Employment fill because parser rows could not be reconciled",
        { targetCount: records.length },
      )
      this.progressTracker.updateMissedProgress("Employment")
      return
    }

    const savedLabels = collectSavedEntryLabels(section)
    const isReviewCopy = rules.isUltiproReviewCopyLayout(section)
    const reviewEditors = isReviewCopy ? listSavedEntryRows(section) : []
    let needsFirstAdd = savedLabels.length === 0

    for (const [index, record] of records.entries()) {
      const focusCtx = {
        type: "employment",
        index,
        reporter,
        focusLabels: [],
      }
      if (this.progressTracker.updateSectionResult) {
        const rowReporter = answerMethods.createSectionResultReporter(
          "employment",
          reporter.forRecord(index, []),
        )
        rowReporter.ensureRow(0, withCanonicalEduExpKeys(record))
        rowReporter.emit()
      }

      const label = employmentRecordLabel(record)
      const retainedEditor = takeMatchingReviewEditor(reviewEditors, label)
      if (retainedEditor) {
        console.info("[Ultipro] filling retained Employment review editor", {
          remainingReviewEditors: reviewEditors.length,
        })
        await this.fillEduOrExpFields(
          section,
          retainedEditor,
          record,
          focusCtx,
        )
        await this.saveEduOrExpEditor(section)
        registerSectionFocus(focusCtx, retainedEditor)
        continue
      }

      if (!isReviewCopy && savedLabels.includes(label)) {
        registerSectionFocus(
          focusCtx,
          findSavedRowByLabel(section, targetLabels, index),
        )
        continue
      }

      const editor = await this.openEduOrExpEditor(
        section,
        addButton,
        needsFirstAdd,
      )
      needsFirstAdd = false
      if (!editor) {
        reporter.markRecordMissed(index)
        console.warn(
          "[Ultipro] skipped Employment row because no individual editor was available",
        )
        this.progressTracker.updateMissedProgress("Employment")
        return
      }

      await this.fillEduOrExpFields(section, editor, record, focusCtx)
      await this.saveEduOrExpEditor(section)
      registerSectionFocus(
        focusCtx,
        isReviewCopy
          ? editor
          : findSavedRowByLabel(section, targetLabels, index),
      )
      savedLabels.push(label)
    }

    const finalCount = listSavedEntryRows(section).length
    if (finalCount !== records.length) {
      console.warn("[Ultipro] Employment row count does not match fill-v2", {
        targetCount: records.length,
        finalCount,
      })
      this.progressTracker.updateMissedProgress("Employment")
      return
    }

    this.progressTracker.updateFilledProgress("Employment")
    const cancelButton = section.querySelector(
      'button[data-automation="cancel-button"]',
    )
    cancelButton?.click()
    await this.delay(300)
  }

  async fillEducationSection(sectionRule) {
    const section = rules.getUltiproVisibleSection("education")
    if (!section) return

    const addButton = sectionRule?.$input ?? null
    const records = this.answer.education
    const reporter = sectionResults.createSequentialSectionResultReporter(
      "education",
      this.progressTracker,
      "Education",
    )
    const targetLabels = records.map((record) =>
      educationRecordLabel(record),
    )
    const reconcile = await removeUltiproSavedEntriesOutsideFillV2(
      section,
      targetLabels,
      () => this.delay(100),
    )
    console.log("[Ultipro] reconciled Education rows to fill-v2", {
      targetCount: records.length,
      removedCount: reconcile.removed,
      ready: reconcile.ready,
    })
    if (!reconcile.ready) {
      console.warn(
        "[Ultipro] skipped Education fill because parser rows could not be reconciled",
        { targetCount: records.length },
      )
      this.progressTracker.updateMissedProgress("Education")
      return
    }

    const savedLabels = collectSavedEntryLabels(section)
    const isReviewCopy = rules.isUltiproReviewCopyLayout(section)
    const reviewEditors = isReviewCopy ? listSavedEntryRows(section) : []
    let needsFirstAdd = savedLabels.length === 0

    for (const [index, record] of records.entries()) {
      const focusCtx = {
        type: "education",
        index,
        reporter,
        focusLabels: [],
      }
      if (this.progressTracker.updateSectionResult) {
        const rowReporter = answerMethods.createSectionResultReporter(
          "education",
          reporter.forRecord(index, []),
        )
        rowReporter.ensureRow(0, withCanonicalEduExpKeys(record))
        rowReporter.emit()
      }

      const label = educationRecordLabel(record)
      const retainedEditor = takeMatchingReviewEditor(reviewEditors, label)
      if (retainedEditor) {
        console.info("[Ultipro] filling retained Education review editor", {
          remainingReviewEditors: reviewEditors.length,
        })
        await this.fillEduOrExpFields(
          section,
          retainedEditor,
          record,
          focusCtx,
        )
        await this.saveEduOrExpEditor(section)
        registerSectionFocus(focusCtx, retainedEditor)
        continue
      }

      if (!isReviewCopy && label && savedLabels.includes(label)) {
        registerSectionFocus(
          focusCtx,
          findSavedRowByLabel(section, targetLabels, index),
        )
        continue
      }

      const editor = await this.openEduOrExpEditor(
        section,
        addButton,
        needsFirstAdd,
      )
      needsFirstAdd = false
      if (!editor) {
        reporter.markRecordMissed(index)
        console.warn(
          "[Ultipro] skipped Education row because no individual editor was available",
        )
        this.progressTracker.updateMissedProgress("Education")
        return
      }

      await this.fillEduOrExpFields(section, editor, record, focusCtx)
      await this.saveEduOrExpEditor(section)
      registerSectionFocus(
        focusCtx,
        isReviewCopy
          ? editor
          : findSavedRowByLabel(section, targetLabels, index),
      )
      savedLabels.push(label)
    }

    const finalCount = listSavedEntryRows(section).length
    if (finalCount !== records.length) {
      console.warn("[Ultipro] Education row count does not match fill-v2", {
        targetCount: records.length,
        finalCount,
      })
      this.progressTracker.updateMissedProgress("Education")
      return
    }

    this.progressTracker.updateFilledProgress("Education")
    const cancelButton = section.querySelector(
      'button[data-automation="cancel-button"]',
    )
    cancelButton?.click()
    await this.delay(300)
  }

  async openEduOrExpEditor(section, fallbackAddButton, preferExisting) {
    const editorsBefore = rules.getUltiproSectionEditors(section)
    const isReviewCopy = rules.isUltiproReviewCopyLayout(section)
    if (isReviewCopy && preferExisting) {
      const existing = rules.getUltiproSectionEditor(section)
      console.info("[Ultipro] selected existing structured editor", {
        editorCount: editorsBefore.length,
        selected: !!existing,
      })
      if (existing) return existing
      console.info(
        "[Ultipro] no reusable review editor; adding structured row",
        { editorCount: editorsBefore.length },
      )
    }

    const addButton =
      section.querySelector(
        "button[data-automation='primary-action-button']",
      ) ?? fallbackAddButton
    if (!addButton) return null
    addButton.click()

    const deadline = Date.now() + 3e3
    while (Date.now() < deadline) {
      const editor = rules.getUltiproSectionEditor(section, editorsBefore)
      if (editor) {
        console.info("[Ultipro] selected newly added structured editor", {
          editorCountBefore: editorsBefore.length,
          editorCountAfter: rules.getUltiproSectionEditors(section).length,
        })
        return editor
      }
      await this.delay(50)
    }

    console.warn("[Ultipro] no individual editor appeared after Add", {
      editorCountBefore: editorsBefore.length,
    })
    return null
  }

  async saveEduOrExpEditor(section) {
    const saveButton = section.querySelector(
      'button[data-automation="save-button"]',
    )
    if (saveButton) {
      saveButton.click()
      await this.delay(2200)
    }
  }

  async fillEduOrExpFields(section, editor, record, focusCtx) {
    const groups = editor.querySelectorAll("div.form-group")
    const leafGroups = Array.from(groups).filter(
      (group) => !group.querySelector("div.form-group"),
    )
    const isReviewCopy = rules.isUltiproReviewCopyLayout(section)
    const allEditors = isReviewCopy
      ? rules.getUltiproSectionEditors(section)
      : []
    console.info(
      `[Ultipro] filling structured editor: reviewCopy=${isReviewCopy}; editorIndex=${allEditors.indexOf(editor)}; editorCount=${allEditors.length}; fieldCount=${leafGroups.length}`,
    )

    const childRules = []
    const rowReporter =
      focusCtx && this.progressTracker.updateSectionResult
        ? answerMethods.createSectionResultReporter(
            focusCtx.type,
            focusCtx.reporter.forRecord(focusCtx.index, [
              { label: focusCtx.type, children: childRules },
            ]),
          )
        : undefined
    const row = rowReporter?.ensureRow(0, withCanonicalEduExpKeys(record))
    rowReporter?.emit()

    for (const group of leafGroups) {
      let filled
      const fieldRule = this.extractRuleFromGroup(group)
      if (!fieldRule) continue
      childRules.push(fieldRule)
      focusCtx?.focusLabels.push(fieldRule.label)

      const value = ultiproAnswer.getValueForEduExpField(
        fieldRule.label,
        record,
        { $input: fieldRule.$input },
      )
      try {
        if (fieldRule.type === enums.FIELD_TYPE.SELECT) {
          const input = fieldRule.$input
          if (
            input?.tagName === "INPUT" &&
            input.getAttribute("role") === "combobox"
          ) {
            filled = await operations.fillUltiproTypeaheadField(input, value)
            await this.delay(50)
          } else {
            filled = await operations.fillSelectField(
              fieldRule.$input,
              value,
            )
            await this.delay(200)
          }
        } else if (fieldRule.type === enums.FIELD_TYPE.TEXT) {
          filled = await operations.fillInputTextField(
            fieldRule.$input,
            value,
          )
          await this.delay(50)
        }
        if (row) {
          rowReporter?.updateField(
            row,
            fieldRule.label,
            value || undefined,
            filled === true && value ? "filled" : "missed",
          )
        }
      } catch (error) {
        if (row) {
          rowReporter?.updateField(
            row,
            fieldRule.label,
            value || undefined,
            cancellation.SkippedError &&
              error instanceof cancellation.SkippedError
              ? "skipped"
              : "missed",
          )
        }
        throw error
      } finally {
        rowReporter?.emit()
      }
    }
  }

  extractRuleFromGroup(group) {
    return rules.extractExpAndEduRuleFromElement(group)
  }

  async executeSiteSpecificSteps(formRules) {
    const skills = normalizeSkillsList(this.answer.skills)
    if (skills.length > 0) {
      console.info("[Ultipro][Skills] selected answer source", {
        source: "profile_data",
        profileSkillCount: skills.length,
      })
      this.taskQueue.add(() =>
        operations.fillSkills(
          skills,
          this.progressTracker.updateFilledProgress,
        ),
      )
    }

    const behaviorsRule = formRules.find(
      (rule) =>
        rule.label === "Behaviors" &&
        rule.type === enums.FIELD_TYPE.MULTI_SELECT,
    )
    if (behaviorsRule && this.answer.regular.Behaviors) {
      this.taskQueue.add(async () => {
        await operations.fillBehaviorsAndMotivations(
          behaviorsRule,
          this.answer.regular.Behaviors,
        )
        this.progressTracker.updateFilledProgress("Behaviors")
      })
    }

    const motivationsRule = formRules.find(
      (rule) =>
        rule.label === "Motivations" &&
        rule.type === enums.FIELD_TYPE.MULTI_SELECT,
    )
    if (motivationsRule && this.answer.regular.Motivations) {
      this.taskQueue.add(async () => {
        await operations.fillBehaviorsAndMotivations(
          motivationsRule,
          this.answer.regular.Motivations,
        )
        this.progressTracker.updateFilledProgress("Motivations")
      })
    }

    const certificationRules = formRules.filter(
      (rule) => rule.__ultiproDialogSection === "certifications",
    )
    if (certificationRules.length > 0) {
      this.taskQueue.add(() =>
        operations.fillCertifications(
          certificationRules,
          this.answer.regular,
          this.progressTracker.updateFilledProgress,
          this.progressTracker.updateMissedProgress,
        ),
      )
    }

    const linkRules = formRules.filter(
      (rule) => rule.__ultiproDialogSection === "links",
    )
    if (linkRules.length > 0) {
      this.taskQueue.add(() =>
        operations.fillLicenses(
          linkRules,
          this.answer.regular,
          this.progressTracker.updateFilledProgress,
          this.progressTracker.updateMissedProgress,
        ),
      )
    }

    if (this.answer.regular.Race) {
      this.taskQueue.add(() =>
        operations.fillRace(this.answer.regular.Race),
      )
    }

    await this.taskQueue.run()
    await this.bindSubmitButtonTracking(formRules)
  }

  async delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

export function collectSavedEntryLabels(section) {
  return listSavedEntryRows(section)
    .map(readSavedEntryLabel)
    .filter((label) => !!label)
}

function listSavedEntryRows(section) {
  const list = section.querySelector("ul.listtype")
  if (!list) {
    const items = Array.from(
      section.querySelectorAll(
        "[data-automation='work-experience-item'], [data-automation='education-panel'], [data-automation='panel-list-item']",
      ),
    )
    return Array.from(
      new Set(
        items.map(
          (item) =>
            item.closest("[data-automation='panel-list-item']") ?? item,
        ),
      ),
    )
  }
  return Array.from(
    list.querySelectorAll("li.row, li[data-automation='panel-list-item']"),
  )
}

function findSavedRowByLabel(section, targetLabels, index) {
  const label = targetLabels[index] ?? ""
  const priorMatches = targetLabels
    .slice(0, index)
    .filter((item) => item === label).length
  const rows = listSavedEntryRows(section)
  return label
    ? (rows.filter((row) => readSavedEntryLabel(row) === label)[
        priorMatches
      ] ?? null)
    : (rows[index] ?? null)
}

function registerSectionFocus(focusCtx, row) {
  if (!row) {
    focusCtx.reporter.clearRecordFocus(focusCtx.index)
    console.debug("[Ultipro][section-focus] stable row unavailable", {
      type: focusCtx.type,
      index: focusCtx.index,
    })
    return
  }
  const children = Array.from(new Set(focusCtx.focusLabels)).map(
    (label) => ({
      label,
      required: false,
      type: enums.FIELD_TYPE.TEXT,
      $input: row,
      $label: row,
    }),
  )
  focusCtx.reporter.setRecordFocus(focusCtx.index, {
    label: focusCtx.type,
    required: false,
    type:
      focusCtx.type === "education"
        ? enums.FIELD_TYPE.EDUCATION
        : enums.FIELD_TYPE.EMPLOYMENT,
    $input: row,
    children,
    options: [],
  })
  console.debug("[Ultipro][section-focus] stable row registered", {
    type: focusCtx.type,
    index: focusCtx.index,
    fieldCount: children.length,
  })
}

function readSavedEntryLabel(row) {
  const strong = row.querySelector("strong")?.textContent
  if (strong) return normalizeEntryLabel(strong)

  const values = new Map()
  for (const group of Array.from(row.querySelectorAll("div.form-group"))) {
    const label = (group.querySelector("label")?.textContent ?? "")
      .replace(/\*/g, "")
      .trim()
      .toLowerCase()
    if (!label) continue
    const control = group.querySelector("input, textarea, select")
    const value = control?.value?.trim() ?? ""
    values.set(label, value)
  }

  const jobTitle = values.get("job title") ?? ""
  const company = values.get("company / organization") ?? ""
  if (jobTitle || company) {
    return normalizeEntryLabel(
      [jobTitle, company].filter(Boolean).join(", "),
    )
  }
  return normalizeEntryLabel(values.get("school name") ?? "")
}

function takeMatchingReviewEditor(editors, label) {
  const index = editors.findIndex(
    (editor) => readSavedEntryLabel(editor) === label,
  )
  return index < 0 ? null : (editors.splice(index, 1)[0] ?? null)
}

function firstScalarText(value) {
  const first = Array.isArray(value) ? value[0] : value
  return first?.toString().trim().toLowerCase() ?? ""
}

function employmentRecordLabel(record) {
  return normalizeEntryLabel(
    [
      firstScalarText(record["Job Title"]),
      firstScalarText(record["Company / Organization"]),
    ].join(", "),
  )
}

function educationRecordLabel(record) {
  return normalizeEntryLabel(firstScalarText(record["School Name"]))
}

function normalizeEntryLabel(raw) {
  const text = raw
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/\s*,\s*/g, ", ")
  return text.replace(/[,\s]/g, "") ? text : ""
}

export async function removeUltiproSavedEntriesOutsideFillV2(
  section,
  targetLabels,
  wait = () => new Promise((resolve) => setTimeout(resolve, 300)),
) {
  const normalizedTargets = targetLabels
    .map(normalizeEntryLabel)
    .filter(Boolean)
  let removed = 0
  console.info("[Ultipro] reconciling parser rows", {
    targetCount: normalizedTargets.length,
    currentRowCount: listSavedEntryRows(section).length,
  })

  for (let attempt = 0; attempt < 100; attempt += 1) {
    const remaining = new Map()
    for (const label of normalizedTargets) {
      remaining.set(label, (remaining.get(label) ?? 0) + 1)
    }

    const rows = listSavedEntryRows(section)
    const extras = []
    for (const row of rows) {
      const label = readSavedEntryLabel(row)
      const count = remaining.get(label) ?? 0
      if (label && count > 0) remaining.set(label, count - 1)
      else extras.push(row)
    }

    if (extras.length === 0) {
      return { removed, ready: true }
    }

    const extra = extras[extras.length - 1]
    const removeButton = extra.querySelector(
      "button[data-automation='remove-button'], button[data-automation='delete-button']",
    )
    if (!removeButton || removeButton.disabled) break

    const beforeCount = rows.length
    removeButton.click()
    const deadline = Date.now() + 3e3
    while (
      listSavedEntryRows(section).length >= beforeCount &&
      Date.now() < deadline
    ) {
      await wait()
    }
    if (listSavedEntryRows(section).length >= beforeCount) break
    removed += 1
  }

  return { removed, ready: false }
}

function hasMeaningfulRuleValue(rule) {
  if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
    const checkboxes = Array.isArray(rule.$checkboxs) ? rule.$checkboxs : []
    if (checkboxes.length > 0) {
      return checkboxes.some((checkbox) => checkbox.checked)
    }
    return rule.$input?.checked === true
  }

  const input = rule.$input
  if (!input) return false

  if (
    rule.type === enums.FIELD_TYPE.DATE &&
    input.tagName === "UKG-DATE-INPUT-TEXT"
  ) {
    const parts = ["Month", "Day", "Year"].map(
      (part) =>
        input.querySelector(`input[aria-label="${part}"]`)?.value,
    )
    return parts.every((part) => !!part?.trim())
  }

  return operations.hasMeaningfulControlValue(input)
}

function isCommittedRegularFieldRule(rule) {
  return (
    !(rule.__ultiproDialogSection || isSkillsTextRule(rule)) &&
    (rule.type === enums.FIELD_TYPE.TEXT ||
      rule.type === enums.FIELD_TYPE.SELECT ||
      rule.type === enums.FIELD_TYPE.CHECKBOX ||
      rule.type === enums.FIELD_TYPE.DATE)
  )
}

function isStateProvinceSelectRule(rule) {
  const input = rule.$input
  return (
    rule.type === enums.FIELD_TYPE.SELECT &&
    input?.id === "State" &&
    /(?:state|province)/i.test(rule.label ?? "")
  )
}

function isSkillsTextRule(rule) {
  return (
    rule.type === enums.FIELD_TYPE.TEXT &&
    rule.label?.trim().toLowerCase() === "skills"
  )
}

function normalizeSkillsList(skills) {
  return Array.isArray(skills)
    ? skills
        .map((skill) => String(skill ?? "").trim())
        .filter((skill) => skill.length > 0)
    : []
}

export { Ultipro }
