// @ts-nocheck
/**
 * Eightfold CareerHub ATS filler — readable TypeScript source of truth.
 */

import * as messaging from "@plasmohq/messaging"
import * as answerMethods from "../../methods/answer.ts"
import * as cancellation from "../../methods/cancellation.ts"
import {
  BaseFiller,
  waitForComboQuestionsToSettle,
} from "../base-filler.ts"
import * as enums from "../../../core/enums.js"
import * as eightfoldAnswer from "./answer.ts"
import * as formRules from "./form-rules.ts"
import * as locationOperation from "./location-operation.ts"
import * as optionResolveRollout from "../../option-resolve-rollout.js"
import * as operations from "./operations.ts"
import * as records from "./records.ts"
import * as careerHubRules from "./rules.ts"
import * as careerHubSteps from "./steps.ts"

const DYNAMIC_RULE_MAX_ROUNDS = 4
const DYNAMIC_SETTLE_DELAY_MS = 600
const DYNAMIC_QUIET_PERIOD_MS = 200
const DYNAMIC_SETTLE_MAX_WAIT_MS = 1600

function emptyAnswer() {
  return {
    education: [],
    workExperience: [],
    skills: [],
    regular: {},
  }
}

function collectAnswerCandidates(answer, label) {
  const candidates = []
  if (
    answer.regular &&
    Object.prototype.hasOwnProperty.call(answer.regular, label)
  ) {
    candidates.push(answer.regular[label])
  }
  const fillDataValue = answer.fillDataList?.find(
    (entry) => entry?.name === label,
  )?.value
  if (fillDataValue !== undefined) candidates.push(fillDataValue)
  return candidates
}

function coerceRuleAnswer(rule, raw) {
  if (rule.type === enums.FIELD_TYPE.MULTI_SELECT) {
    const values = (Array.isArray(raw) ? raw : [raw])
      .filter((item) => typeof item === "string")
      .map((item) => item.trim())
      .filter(Boolean)
    return values.length ? values : null
  }
  const first = Array.isArray(raw) ? raw[0] : raw
  return typeof first === "string" && first.trim() ? first.trim() : null
}

function resolveRuleAnswer(rule, answer) {
  for (const candidate of collectAnswerCandidates(answer, rule.label)) {
    const coerced = coerceRuleAnswer(rule, candidate)
    if (coerced !== null) return coerced
  }
  return null
}

function recordSnapshotsWithoutCard(step, root) {
  return records.getCareerHubRecordSnapshots(step, root).map(
    ({ card, ...snapshot }) => snapshot,
  )
}

export class EightfoldCareerHub extends BaseFiller {
  getFieldHandlers() {
    return {}
  }

  getCareerHubRoot() {
    return document
  }

  getCurrentPageUrl() {
    return window.location.href
  }

  getActiveStep(root = this.getCareerHubRoot()) {
    const scope = root
    if (
      typeof scope?.querySelector !== "function" ||
      typeof scope?.querySelectorAll !== "function"
    ) {
      return null
    }
    return careerHubSteps.getCareerHubActiveStep(root)
  }

  resetRunState() {
    if (this.timeTrace) {
      this.timeTrace.rulesParseStartTime = Date.now()
      this.timeTrace.requestStartTime = 0
      this.timeTrace.fillStartTime = 0
    }
    this.progressTracker?.clear?.()
    this.taskQueue?.clear?.()
    this.answer = emptyAnswer()
  }

  stopForStepChange(expectedStep, ruleCount) {
    if (this.getActiveStep() !== expectedStep) {
      this.progressTracker?.clear?.()
      console.warn("[CareerHub autofill] stopped", {
        route: "careerhub",
        step: expectedStep,
        ruleCount,
        reason: "active-step-changed",
      })
      return true
    }
    return false
  }

  async finalizeCareerHubRun() {
    return await this.finalizeFillForm()
  }

  async extractCareerHubActiveRules() {
    return await careerHubRules.extractCareerHubRules(this.getCareerHubRoot())
  }

  async waitForCareerHubDynamicRules() {
    await waitForComboQuestionsToSettle(
      DYNAMIC_SETTLE_DELAY_MS,
      DYNAMIC_QUIET_PERIOD_MS,
      DYNAMIC_SETTLE_MAX_WAIT_MS,
    )
  }

  async fillCareerHubInputRule(rule, value) {
    return await operations.fillCareerHubRule(
      rule,
      value,
      this.getCareerHubRoot(),
    )
  }

  async resolveCareerHubLocationOperation(operation) {
    return await messaging.sendToBackground({
      name: "resolveAutofillOperation",
      body: {
        operation,
        source: "eightfold",
      },
    })
  }

  isCareerHubLocationResolveEnabled() {
    return optionResolveRollout.V119_OPTION_RESOLVE_ROLLOUT
      .eightfoldCareerHubLocation
  }

  isLocationRule(rule) {
    return (
      rule.__careerHub?.step === "personal-info" &&
      rule.__careerHub?.controlId === "location" &&
      rule.type === enums.FIELD_TYPE.SELECT
    )
  }

  async fillCareerHubLocationRule(rule, fallbackAnswer) {
    const original =
      locationOperation.getCareerHubLocationOriginalAnswer(
        this.answer,
        fallbackAnswer,
      )
    console.info(
      `[CareerHub][Location] resolve-start label=${JSON.stringify(rule.label)} answerSource=${original.source || "missing"} hasOriginalAnswer=${!!original.value}`,
    )
    if (!original.value) {
      console.warn(
        "[CareerHub][Location] resolve-skipped reason=empty-original-answer",
      )
      return { committed: false, value: "" }
    }
    const operation = locationOperation.buildCareerHubLocationOperation({
      currentUrl: this.getCurrentPageUrl(),
      question: rule.label,
      originalAnswer: original.value,
    })
    const resolveResult =
      await this.resolveCareerHubLocationOperation(operation)
    cancellation.checkpoint()
    const selected =
      locationOperation.getCareerHubResolvedLocationValue(resolveResult)
    console.info(
      `[CareerHub][Location] resolve-result action=${resolveResult?.result?.action ?? "missing"} selectedCount=${resolveResult?.result?.selected_values?.length ?? 0}`,
    )
    if (!selected) {
      console.warn(
        "[CareerHub][Location] resolve-not-committed reason=empty-selected-value",
      )
      return { committed: false, value: "" }
    }
    if (this.getActiveStep() !== "personal-info") {
      return { committed: false, value: "" }
    }
    return await this.fillCareerHubInputRule(rule, selected)
  }

  async fillCareerHubRecordSection(step, recordsList) {
    const sectionReporter = answerMethods.createSectionResultReporter(
      step === "experience" ? "employment" : "education",
      {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
      },
    )
    sectionReporter.setLabel(
      step === "experience" ? "Employment" : "Education",
    )
    return await records.fillCareerHubRecords(step, recordsList, {
      root: this.getCareerHubRoot(),
      sectionReporter,
    })
  }

  getCareerHubLiveSnapshot(step, rules) {
    if (step === "experience" || step === "education") {
      const label = step === "experience" ? "Experience" : "Education"
      return {
        [label]: recordSnapshotsWithoutCard(step, this.getCareerHubRoot()),
      }
    }
    return operations.getCareerHubSnapshot(rules, this.getCareerHubRoot())
  }

  async fillInputRules(rules, step) {
    for (const rule of rules) {
      if (this.stopForStepChange(step, rules.length)) return false
      const answer = resolveRuleAnswer(rule, this.answer)
      const useLocationResolve =
        this.isCareerHubLocationResolveEnabled() && this.isLocationRule(rule)
      if (answer === null && !useLocationResolve) {
        this.progressTracker.updateMissedProgress(rule.label)
        continue
      }
      cancellation.updateCurrentField(rule.label)
      try {
        const result = await cancellation.withSkip(async () => {
          cancellation.checkpoint()
          const fillResult = useLocationResolve
            ? await this.fillCareerHubLocationRule(
                rule,
                typeof answer === "string" ? answer : "",
              )
            : await this.fillCareerHubInputRule(rule, answer)
          cancellation.checkpoint()
          return fillResult
        })
        if (this.stopForStepChange(step, rules.length)) return false
        if (result.committed) {
          this.progressTracker.updateFilledProgress(rule.label)
        } else {
          this.progressTracker.updateMissedProgress(rule.label)
        }
      } catch (error) {
        if (error instanceof cancellation.CancelledError) throw error
        this.progressTracker.updateMissedProgress(rule.label)
        if (!(error instanceof cancellation.SkippedError)) {
          console.warn("[CareerHub autofill] field not committed", {
            route: "careerhub",
            step,
            ruleCount: rules.length,
            reason: "field-driver-error",
          })
        }
      }
    }
    return true
  }

  async fillRecordRule(rule, step) {
    const label = step === "experience" ? "Employment" : "Education"
    cancellation.updateCurrentField(label)
    const recordsList =
      step === "experience"
        ? this.answer.workExperience
        : this.answer.education
    if (!Array.isArray(recordsList) || recordsList.length === 0) {
      if (rule.required) this.progressTracker.updateMissedProgress(label)
      return true
    }
    try {
      const results = await cancellation.withSkip(async () => {
        cancellation.checkpoint()
        const fillResults = await this.fillCareerHubRecordSection(
          step,
          recordsList,
        )
        cancellation.checkpoint()
        return fillResults
      })
      if (this.stopForStepChange(step, 1)) return false
      const allCommitted =
        results.length === recordsList.length &&
        results.every((result) => result.committed)
      if (allCommitted) this.progressTracker.updateFilledProgress(label)
      else this.progressTracker.updateMissedProgress(label)
    } catch (error) {
      if (error instanceof cancellation.CancelledError) throw error
      this.progressTracker.updateMissedProgress(label)
      if (!(error instanceof cancellation.SkippedError)) {
        console.warn("[CareerHub autofill] record section not committed", {
          route: "careerhub",
          step,
          ruleCount: 1,
          reason: "record-driver-error",
        })
      }
    }
    return true
  }

  formatAnswer(answer) {
    return eightfoldAnswer.formatAnswer(answer)
  }

  async doFillForm(forceRefresh = false) {
    this.resetRunState()
    const activeStep = this.getActiveStep()
    if (!activeStep) return await this.finalizeCareerHubRun()
    const rules = await this.extractCareerHubActiveRules()
    if (
      this.stopForStepChange(activeStep, rules.length) ||
      rules.length === 0 ||
      rules.some((rule) => rule.__careerHub?.step !== activeStep)
    ) {
      return await this.finalizeCareerHubRun()
    }
    this.progressTracker.setFieldsRequiredStatus(rules)
    const answers = await this.requestFormAnswers(rules, forceRefresh)
    if (this.stopForStepChange(activeStep, rules.length)) {
      return await this.finalizeCareerHubRun()
    }
    if (typeof answers === "string") return answers
    this.answer = answers ?? emptyAnswer()
    if (activeStep === "experience" || activeStep === "education") {
      await this.fillRecordRule(rules[0], activeStep)
      return await this.finalizeCareerHubRun()
    }
    if (!(await this.fillInputRules(rules, activeStep))) {
      return await this.finalizeCareerHubRun()
    }
    let knownRules = [...rules]
    for (
      let round = 1;
      round <= DYNAMIC_RULE_MAX_ROUNDS &&
      (await this.waitForCareerHubDynamicRules(),
      !this.stopForStepChange(activeStep, knownRules.length));
      round++
    ) {
      const nextRules = await this.extractCareerHubActiveRules()
      if (this.stopForStepChange(activeStep, nextRules.length)) break
      const newRules = this.getNewComboQuestionRules(knownRules, nextRules)
      if (
        newRules.length === 0 ||
        newRules.some((rule) => rule.__careerHub?.step !== activeStep)
      ) {
        break
      }
      knownRules = [...knownRules, ...newRules]
      const uncommitted = formRules.filterAlreadyCommittedEightfoldRules(
        newRules,
        this.progressTracker.fieldStatus.filledFields,
        this.getCareerHubLiveSnapshot(activeStep, newRules),
      )
      if (uncommitted.length === 0) {
        console.info(
          "[CareerHub autofill] skipped committed dynamic rules",
          {
            route: "careerhub",
            step: activeStep,
            round,
            skippedRuleCount: newRules.length,
          },
        )
        break
      }
      console.info("[CareerHub autofill] discovered dynamic rules", {
        route: "careerhub",
        step: activeStep,
        round,
        newRuleCount: uncommitted.length,
      })
      for (const rule of uncommitted) {
        this.progressTracker.updateFieldRequiredStatus(rule)
      }
      const dynamicAnswers = await this.requestFormAnswers(
        uncommitted,
        forceRefresh,
        { updateTimeTrace: false },
      )
      if (this.stopForStepChange(activeStep, uncommitted.length)) break
      if (typeof dynamicAnswers === "string") return dynamicAnswers
      if (dynamicAnswers) {
        this.mergeComboQuestionAnswer(dynamicAnswers, uncommitted)
      }
      if (!(await this.fillInputRules(uncommitted, activeStep))) break
      if (round === DYNAMIC_RULE_MAX_ROUNDS) {
        console.warn(
          "[CareerHub autofill] stopped at dynamic rule round limit",
          {
            route: "careerhub",
            step: activeStep,
            maxRounds: DYNAMIC_RULE_MAX_ROUNDS,
            totalRuleCount: knownRules.length,
          },
        )
      }
    }
    return await this.finalizeCareerHubRun()
  }

  async extractFormRules() {
    return await this.extractCareerHubActiveRules()
  }

  getSiteName() {
    return "eightfold"
  }

  async handleResumeUpload() {}

  getSubmitButtonSelector() {
    return null
  }

  getSubmitTrackingScopeKey() {
    return this.getActiveStep()
  }

  async getAutofillSnapshot(rules) {
    const step = this.getActiveStep()
    if (!step) return {}
    const scoped = rules.filter((rule) => rule.__careerHub?.step === step)
    return this.getCareerHubLiveSnapshot(step, scoped)
  }

  async getSubmitSnapshot() {
    const step = this.getActiveStep()
    if (!step) return {}
    const rules = await this.extractCareerHubActiveRules()
    if (this.getActiveStep() !== step) return {}
    return this.getCareerHubLiveSnapshot(
      step,
      rules.filter((rule) => rule.__careerHub?.step === step),
    )
  }

  submitApplication() {}
}
