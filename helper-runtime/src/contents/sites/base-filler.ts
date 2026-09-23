// @ts-nocheck
/**
 * Shared BaseFiller for ATS site engines — readable TypeScript source of truth.
 *
 * Bundled from this file by scripts/bundle-engine-helper.mjs.
 * Site engines extend BaseFiller and override hooks (rules, uploads, combo, tracking).
 */

import * as filler from "../shared/filler.ts"
import * as answer from "../methods/answer.ts"
import * as cancellation from "../methods/cancellation.ts"
import * as coverLetter from "../methods/cover-letter.ts"
import * as dom from "../methods/dom.ts"
import * as runtimeError from "../methods/runtime-error.ts"
import * as track from "../methods/track.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as httpEnums from "../../enums/http.js"
import * as urlStore from "../../store/url.js"
import * as fieldLabel from "../../utils/fieldLabel.js"
import * as starRating from "../../utils/starRating.js"
import * as stringUtils from "../../utils/string.ts"
import * as autofillAnswerPairTracking from "./autofill-answer-pair-tracking.ts"
import * as falconAnswerTracking from "./falcon-answer-tracking.ts"
import * as falconResponseAccumulator from "./falcon-response-accumulator.ts"

function getStableElementAttrKey(el) {
  if (!el || typeof el !== "object") return ""

  const attrs = ["data-test-id", "name", "id", "aria-labelledby"]
  for (const attr of attrs) {
    const value = el.getAttribute?.(attr)
    if (typeof value === "string" && value.trim()) {
      return `${attr}:${value.trim()}`
    }
  }

  return typeof el.id === "string" && el.id.trim() ? `id:${el.id.trim()}` : ""
}

export function getComboQuestionRuleKey(rule) {
  const label = fieldLabel.normalizeFieldLabel(rule?.label)
  if (!label) return ""

  const inputKey = getStableElementAttrKey(rule.$input)
  const labelKey = getStableElementAttrKey(rule.$label)
  return [label, rule.type, inputKey || labelKey].filter(Boolean).join("|")
}

export function getNewComboQuestionRules(existingRules, candidateRules) {
  const seen = new Set(existingRules.map(getComboQuestionRuleKey))
  const next = []

  for (const rule of candidateRules) {
    const key = getComboQuestionRuleKey(rule)
    if (!key || seen.has(key)) continue
    seen.add(key)
    next.push(rule)
  }

  return next
}

export async function waitForComboQuestionsToSettle(
  settleDelayMs,
  quietPeriodMs = 0,
  maxWaitMs = settleDelayMs,
) {
  const settleMs = Math.max(0, settleDelayMs)
  const quietMs = Math.max(0, quietPeriodMs)
  const maxMs = Math.max(settleMs, maxWaitMs)
  const root =
    typeof document !== "undefined" ? document.documentElement : null

  if (
    settleMs > 0 &&
    quietMs > 0 &&
    maxMs > settleMs &&
    root &&
    typeof MutationObserver !== "undefined"
  ) {
    await new Promise((resolve) => {
      const startedAt = Date.now()
      let lastMutationAt = startedAt
      let timer = null

      const observer = new MutationObserver(() => {
        lastMutationAt = Date.now()
      })

      const finish = () => {
        observer.disconnect()
        if (timer) clearTimeout(timer)
        resolve()
      }

      const tick = () => {
        const now = Date.now()
        const elapsed = now - startedAt

        if (
          elapsed >= maxMs ||
          (elapsed >= settleMs && now - lastMutationAt >= quietMs)
        ) {
          finish()
          return
        }

        const untilSettle = Math.max(0, settleMs - elapsed)
        const untilQuiet = Math.max(0, quietMs - (now - lastMutationAt))
        const untilMax = Math.max(0, maxMs - elapsed)
        timer = setTimeout(
          tick,
          Math.max(1, Math.min(untilMax, Math.max(untilSettle, untilQuiet))),
        )
      }

      observer.observe(root, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
      })
      timer = setTimeout(tick, settleMs)
    })
  } else if (settleMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, settleMs))
  }

  cancellation.checkpoint()
}

function getNormalizedLabelSet(rules) {
  return rules
    ? new Set(rules.map((rule) => fieldLabel.normalizeFieldLabel(rule.label)))
    : null
}

export function getAnswerRegular(answerPayload, rules) {
  const regular =
    answerPayload?.regular &&
    typeof answerPayload.regular === "object" &&
    !Array.isArray(answerPayload.regular)
      ? answerPayload.regular
      : {}
  const labels = getNormalizedLabelSet(rules)
  return labels
    ? Object.fromEntries(
        Object.entries(regular).filter(([key]) =>
          labels.has(fieldLabel.normalizeFieldLabel(key)),
        ),
      )
    : regular
}

function getMatchingFillDataList(answerPayload, rules) {
  const list = Array.isArray(answerPayload?.fillDataList)
    ? answerPayload.fillDataList
    : []
  const labels = getNormalizedLabelSet(rules)
  return labels
    ? list.filter((item) =>
        labels.has(fieldLabel.normalizeFieldLabel(item?.name)),
      )
    : list
}

function cloneDeep(value) {
  if (value == null || typeof value !== "object") return value

  if (typeof structuredClone === "function") {
    try {
      return structuredClone(value)
    } catch {
      // fall through to JSON clone
    }
  }

  return JSON.parse(JSON.stringify(value))
}

export function mergeComboQuestionAnswer(existingAnswer, nextAnswer, rules) {
  if (!existingAnswer) {
    return rules
      ? falconAnswerTracking.inheritFalconResponseAnswerMarker(
          {
            ...nextAnswer,
            regular: getAnswerRegular(nextAnswer, rules),
            fillDataList: getMatchingFillDataList(nextAnswer, rules),
          },
          nextAnswer,
        )
      : nextAnswer
  }

  const existingFillData = getMatchingFillDataList(existingAnswer)
  const nextFillData = getMatchingFillDataList(nextAnswer, rules)

  return falconAnswerTracking.inheritFalconResponseAnswerMarker(
    {
      ...existingAnswer,
      regular: {
        ...getAnswerRegular(existingAnswer),
        ...getAnswerRegular(nextAnswer, rules),
      },
      ...(existingFillData.length || nextFillData.length
        ? {
            fillDataList: [...existingFillData, ...nextFillData],
          }
        : {}),
    },
    existingAnswer,
    nextAnswer,
  )
}

export class BaseFiller {
  constructor() {
    this.coverLetterFillTask = null
    this.hasComboQuestions = false
    this.comboQuestionSettleDelayMs = 300
    this.comboQuestionQuietPeriodMs = 0
    this.comboQuestionSettleMaxWaitMs = 300
    this.comboQuestionMaxRounds = 1
    this.timeTrace = {
      rulesParseStartTime: 0,
      requestStartTime: 0,
      fillStartTime: 0,
    }
    this.submitTrackingAbortController = null
    this.falconResponseAccumulator =
      new falconResponseAccumulator.FalconResponseAccumulator()
    this.progressTracker = new filler.ProgressTracker()
    this.taskQueue = new filler.TaskQueue()
    this.fillCancel = cancellation.createCancellation(
      () => this.taskQueue.clear(),
      this.progressTracker.setCurrentField,
    )
    this.cancel = this.fillCancel.cancel
    this.skip = this.fillCancel.skip
    this.createOperationHandler = answer.createOperationHandlerFactory(
      this.progressTracker.updateFilledProgress,
      this.progressTracker.updateMissedProgress,
    )
    this.operationConfig = this.buildOperationConfig()
  }

  buildOperationConfig() {
    const handlers = this.getFieldHandlers()
    const config = {}

    for (const [fieldType, handlerOrConfig] of Object.entries(handlers)) {
      if (typeof handlerOrConfig === "function") {
        config[fieldType] = this.createOperationHandler(handlerOrConfig, {
          expectArray: true,
        })
      } else if (handlerOrConfig && typeof handlerOrConfig === "object") {
        config[fieldType] = this.createOperationHandler(
          handlerOrConfig.handler,
          handlerOrConfig.options || { expectArray: true },
        )
      }
    }

    return config
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus("")
  }

  async fillForm(forceRefetch = false) {
    return this.fillCancel.wrap(() => this.doFillForm(forceRefetch))
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()

    const abortReason = this.getPreExtractionAbortReason()
    if (abortReason) return abortReason

    const rules = await this.extractFormRules()
    if (rules.length === 0) {
      if (this.hasUploadOnlyForm()) {
        await this.handleResumeUpload()
        await this.executeSiteSpecificSteps(rules)
        return await this.finalizeFillForm()
      }

      track.sendHttpStatusMessage(httpEnums.CUSTOM_ERROR_CODES.NO_ELEMENTS)
      return httpEnums.CUSTOM_ERROR_CODES.NO_ELEMENTS
    }

    let preparedRules = this.prepareCoverLetterRules(rules)
    this.progressTracker.setFieldsRequiredStatus(preparedRules)

    const answersOrError = await this.fetchFormAnswers(
      preparedRules,
      forceRefetch,
    )
    if (typeof answersOrError === "string") return answersOrError

    await this.handleResumeUpload()
    await this.fillRegularFields(preparedRules)
    await this.fillEducationAndEmployment(preparedRules)
    await this.fillCoverLetterFields()

    const comboResult = await this.runComboQuestionAutofillIfNeeded(
      preparedRules,
      forceRefetch,
    )
    if (typeof comboResult === "string") return comboResult

    preparedRules = comboResult
    await this.executeSiteSpecificSteps(preparedRules)
    return await this.finalizeFillForm()
  }

  async initializeFillForm() {
    this.resetFalconResponseAccumulator()
    this.timeTrace = {
      rulesParseStartTime: Date.now(),
      requestStartTime: 0,
      fillStartTime: 0,
    }
    this.progressTracker.clear()
    this.taskQueue.clear()
    await this.runPreFillForm()
  }

  async runPreFillForm() {}

  getPreExtractionAbortReason() {
    return null
  }

  hasUploadOnlyForm() {
    return false
  }

  prepareCoverLetterRules(rules) {
    const prepared = coverLetter.prepareCoverLetterFillTask({
      rules,
      coverLetter: this.coverLetter,
      jobId: this.currentJobId,
      resumeId: this.resumeInfo?.id,
      tailorId: this.resumeInfo?.tailorId,
    })
    this.coverLetterFillTask = prepared.task
    return prepared.rules
  }

  getElementRulesRequestUrl() {}

  async requestFormAnswers(rules, forceRefetch, options = {}) {
    try {
      if (!this.token) {
        this.token = await answer.getSiteToken()
      }
      if (options.updateTimeTrace !== false) {
        this.timeTrace.requestStartTime = Date.now()
      }

      const falconEpoch = this.captureFalconResponseRun()
      const falconAnswer = await answer.getElementRules(
        rules,
        this.getSiteName(),
        this.token,
        forceRefetch,
        this.resumeInfo.id,
        this.resumeInfo.tailorId,
        this.getElementRulesRequestUrl(),
      )
      this.recordFalconResponse(falconAnswer, falconEpoch)

      if (options.updateTimeTrace !== false) {
        this.timeTrace.fillStartTime = Date.now()
      }

      return this.formatAnswer?.(falconAnswer) ?? falconAnswer
    } catch (error) {
      if (
        error instanceof answer.HTTPError ||
        error instanceof answer.ResumeMissingCodeError
      ) {
        track.sendHttpStatusMessage(error.message)
        return error.message
      }

      if (runtimeError.isExtensionContextInvalidatedError(error)) {
        track.sendHttpStatusMessage(
          httpEnums.CUSTOM_ERROR_CODES.EXTENSION_CONTEXT_INVALIDATED,
        )
        return httpEnums.CUSTOM_ERROR_CODES.EXTENSION_CONTEXT_INVALIDATED
      }

      console.error("Unknown error occurred:", error)
    }

    cancellation.checkpoint()
  }

  async fetchFormAnswers(rules, forceRefetch) {
    const result = await this.requestFormAnswers(rules, forceRefetch)
    if (typeof result === "string") return result
    if (result) {
      this.answer = result
    }
  }

  captureFalconResponseRun() {
    return this.falconResponseAccumulator.captureEpoch()
  }

  recordFalconResponse(response, epoch) {
    this.falconResponseAccumulator.record(response, epoch)
  }

  resetFalconResponseAccumulator() {
    this.falconResponseAccumulator.reset()
  }

  getFalconResponseAnswerForTracking() {
    return this.falconResponseAccumulator.current()
  }

  async handleResumeUpload() {}

  async fillRegularFields(rules) {
    const operations = [
      ...answer.getRegularOperations(
        coverLetter.withoutCoverLetterRules(rules),
        this.answer.regular,
        this.operationConfig,
      ),
    ]
    for (const operation of operations) {
      this.taskQueue.add(operation)
    }
    await this.taskQueue.run()
  }

  async fillEducationAndEmployment(rules) {}

  async fillCoverLetterFields() {
    if (this.coverLetterFillTask?.rules.length) {
      await coverLetter.fillPreparedCoverLetterTask({
        task: this.coverLetterFillTask,
        coverLetter: this.coverLetter,
        answer: this.answer,
        updateMissedProgress: this.progressTracker.updateMissedProgress,
        operationConfig: this.operationConfig,
      })
    }
  }

  mergeComboQuestionAnswer(nextAnswer, rules) {
    this.answer = mergeComboQuestionAnswer(this.answer, nextAnswer, rules)
  }

  getNewComboQuestionRules(existingRules, candidateRules) {
    return getNewComboQuestionRules(existingRules, candidateRules)
  }

  async filterNewComboQuestionRules(rules) {
    return rules
  }

  async extractComboQuestionRules() {
    return await this.extractFormRules()
  }

  async waitForComboQuestionsToSettle() {
    await waitForComboQuestionsToSettle(
      this.comboQuestionSettleDelayMs,
      this.comboQuestionQuietPeriodMs,
      this.comboQuestionSettleMaxWaitMs,
    )
  }

  async runComboQuestionAutofillIfNeeded(rules, forceRefetch) {
    if (!this.hasComboQuestions) return rules

    let committedRules = [...rules]

    for (let round = 1; round <= this.comboQuestionMaxRounds; round++) {
      await this.waitForComboQuestionsToSettle()

      const extracted = await this.extractComboQuestionRules()
      const newRules = this.getNewComboQuestionRules(committedRules, extracted)
      const filtered = await this.filterNewComboQuestionRules(newRules)
      const prepared = this.prepareCoverLetterRules(filtered)

      if (newRules.length === 0) break

      committedRules = [...committedRules, ...newRules]

      if (prepared.length === 0) {
        console.info("[BaseFiller][Combo] skipped committed dynamic rules", {
          site: this.getSiteName(),
          round,
          skippedRuleCount: newRules.length,
        })
        break
      }

      console.info("[BaseFiller][Combo] discovered dynamic rules", {
        site: this.getSiteName(),
        round,
        newRuleCount: prepared.length,
      })

      for (const rule of prepared) {
        this.progressTracker.updateFieldRequiredStatus(rule)
      }

      const comboAnswer = await this.requestFormAnswers(prepared, forceRefetch, {
        updateTimeTrace: false,
      })
      if (typeof comboAnswer === "string") return comboAnswer

      if (comboAnswer) {
        this.mergeComboQuestionAnswer(comboAnswer, prepared)
      }

      await this.fillRegularFields(prepared)
      await this.fillEducationAndEmployment(prepared)
      await this.fillCoverLetterFields()

      if (
        round === this.comboQuestionMaxRounds &&
        this.comboQuestionMaxRounds > 1
      ) {
        console.warn(
          "[BaseFiller][Combo] stopped at dynamic rule round limit",
          {
            site: this.getSiteName(),
            maxRounds: this.comboQuestionMaxRounds,
            totalRuleCount: committedRules.length,
          },
        )
      }
    }

    return committedRules
  }

  async executeSiteSpecificSteps(rules) {
    await this.bindSubmitButtonTracking(rules)
  }

  async bindSubmitButtonTracking(rules) {
    let autofillSnapshot = cloneDeep(await this.getAutofillSnapshot(rules))
    let additionalAutofillData = cloneDeep(
      this.getAdditionalAutofillSnapshotData?.(rules) || {},
    )
    let scopeKey = this.getSubmitTrackingScopeKey()

    this.submitTrackingAbortController?.abort()
    this.submitTrackingAbortController = new AbortController()

    let clickAbortController = null

    const trackSubmit = async (abortSignal) => {
      let submitSnapshot
      const currentScopeKey = this.getSubmitTrackingScopeKey()
      if (scopeKey && currentScopeKey && scopeKey !== currentScopeKey) return

      let usedFallback = false
      try {
        submitSnapshot = await this.getSubmitSnapshot()
      } catch (error) {
        usedFallback = true
        submitSnapshot = cloneDeep(autofillSnapshot)
        console.warn(
          `[BaseFiller] Failed to capture ${this.getSiteName()} submit snapshot; using autofill baseline`,
          error,
        )
      }

      const additionalSubmitData = this.getAdditionalSubmitSnapshotData?.() || {}
      const falconPair =
        autofillAnswerPairTracking.buildFalconAutofillAnswerPairData(
          this.getFalconResponseAnswerForTracking(),
        )
      const extraData = {
        ...(falconPair ? { falcon: falconPair } : {}),
        ...(this.getAutofillAnswerPairExtraTrackingData?.() || {}),
        ...(usedFallback
          ? {
              submitTracking: {
                snapshotFallback: "autofill",
                reason: "submit_snapshot_error",
              },
            }
          : {}),
      }

      const trackingPayload = {
        formUrl: urlStore.useUrlStore.getState().currentTabUrl,
        autofillSnapshot: cloneDeep(autofillSnapshot),
        submitSnapshot,
        additionalAutofillData: cloneDeep(additionalAutofillData),
        additionalSubmitData,
        extraData,
        source: this.getSiteName(),
      }

      const normalized =
        this.normalizeAutofillAnswerPairTrackingData?.(trackingPayload) ??
        trackingPayload

      autofillAnswerPairTracking.sendAutofillAnswerPairEvent(normalized)
      autofillSnapshot = cloneDeep(normalized.submitSnapshot)
      additionalAutofillData = cloneDeep(normalized.additionalSubmitData || {})
      scopeKey = currentScopeKey || scopeKey

      starRating.handleSubmitStarRating(
        this.getSiteName(),
        normalized.autofillSnapshot,
        normalized.submitSnapshot,
        this.progressTracker.fieldStatus,
        this.getSubmitSuccessSelectors(),
        abortSignal,
      )
    }

    const nextClickSignal = () => {
      clickAbortController?.abort()
      clickAbortController = new AbortController()
      return clickAbortController.signal
    }

    const onTrackError = (error) => {
      console.error(
        `[BaseFiller] Failed to track ${this.getSiteName()} submit click`,
        error,
      )
    }

    const delegationRoot = this.getSubmitTrackingDelegationRoot?.()
    const resolveDelegated =
      this.resolveDelegatedSubmitButton?.bind(this)

    if (delegationRoot && resolveDelegated) {
      delegationRoot.addEventListener(
        "click",
        async (event) => {
          const target = event.target
          if (!(target instanceof HTMLElement)) return

          const button = resolveDelegated(target)
          if (!button) return

          try {
            await trackSubmit(nextClickSignal())
          } catch (error) {
            onTrackError(error)
          }
        },
        {
          capture: true,
          signal: this.submitTrackingAbortController.signal,
        },
      )
      return
    }

    const selector = this.getSubmitButtonSelector()
    if (!selector) return

    const button = xpath.getFirstOrderedNodeSafe(selector)
    if (!button) return

    button.addEventListener(
      "click",
      async () => {
        try {
          await trackSubmit(nextClickSignal())
        } catch (error) {
          onTrackError(error)
        }
      },
      {
        capture: true,
        signal: this.submitTrackingAbortController.signal,
      },
    )
  }

  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(@class, "submit")]'
  }

  getSubmitTrackingScopeKey() {
    return null
  }

  getSubmitSuccessSelectors() {
    return []
  }

  async finalizeFillForm() {
    track.postStatus("filling", this.progressTracker.fieldStatus, this.timeTrace)
    window.top?.postMessage(
      stringUtils.cleanObject({
        type: enums.MESSAGE_EVENTS.autoFillResultFromIframe,
        data: this.progressTracker.fieldStatus,
      }),
      { targetOrigin: "*" },
    )
    return this.progressTracker.generateFinalProgress()
  }
}
