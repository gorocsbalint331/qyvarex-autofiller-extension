// @ts-nocheck
/**
 * iCIMS ATS filler — readable TypeScript source of truth.
 */

import * as messaging from "@plasmohq/messaging"
import * as answerMethods from "../methods/answer.js"
import * as cancellation from "../methods/cancellation.js"
import * as observer from "../methods/observer.js"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as coreUtils from "../../core/utils.js"
import * as xpath from "../../core/xpath.js"
import * as appEnums from "../../enums.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as urlStore from "../../store/url.js"
import * as delay from "../../utils/delay.js"
import * as starRating from "../../utils/starRating.js"
import * as stringUtils from "../../utils/string.ts"
import * as answerPairTracking from "./autofill-answer-pair-tracking.ts"
import { BaseFiller } from "./base-filler.ts"
import * as educationItemTrace from "./education-item-trace.js"
import * as jobDetailEntry from "./icims/job-detail-entry.ts"
import * as jobDetailContinuation from "./icims/job-detail-continuation.ts"
import * as continueAutofill from "./icims/continue-autofill.ts"
import * as educationClientSearch from "./icims/education-client-search.ts"
import * as icimsAnswer from "./icims/answer.ts"
import * as clientSearchWidget from "./icims/client-search-widget.ts"
import * as createLogin from "./icims/create-login.ts"
import * as operations from "./icims/operations.ts"
import * as rules from "./icims/rules.ts"
import * as submitTracking from "./icims/submit-tracking.ts"
import * as utils from "./icims/utils.ts"

const UPLOAD_PENDING_KEY = "jobright:icims:upload-pending-autofill"
const UPLOAD_PENDING_TTL_MS = 3e4
const CONTINUE_REQUEST_TYPE = "jobright:icims:continue-request"
const ADDRESS_LIKE_KEY =
  /(?:address|city|zip|postal|country|state|province|county)/i

function getAddressDomDiagnostics() {
  let collections = Array.from(
    document.querySelectorAll("fieldset.iCIMS_CollectionGroup"),
  ).filter((fieldset) =>
    /^addresses?\b/i.test(
      fieldset
        .querySelector("legend")
        ?.textContent?.replace(/\s+/g, " ")
        .trim() ?? "",
    ),
  )
  let controls = collections.flatMap((fieldset) =>
    Array.from(fieldset.querySelectorAll("input, textarea, select")).filter(
      (control) =>
        control.id.includes("Address") &&
        !(control instanceof HTMLInputElement && control.type === "hidden"),
    ),
  )
  return {
    collectionCount: collections.length,
    rowCount: collections.reduce(
      (sum, fieldset) =>
        sum + fieldset.querySelectorAll(".iCIMS_TableRow").length,
      0,
    ),
    controlCount: controls.length,
    emptyControlCount: controls.filter((control) => !control.value.trim())
      .length,
  }
}

function countAddressLikeRegularKeys(answer) {
  return Object.keys(answer?.regular ?? {}).filter((key) =>
    ADDRESS_LIKE_KEY.test(key),
  ).length
}

const CLIENT_SEARCH_DEPS = {
  requestStep: async (body) =>
    await messaging.sendToBackground({
      name: "resolveAutofillClientSearchStep",
      body,
    }),
  captureCandidates: clientSearchWidget.captureIcimsProfileOptionsCandidates,
  commitCandidate: clientSearchWidget.commitExactIcimsProfileOptionCandidate,
  clearSelect: clientSearchWidget.clearIcimsSearchSelectAndVerify,
  resolveSchoolCompanionInput: operations.resolveIcimsSchoolCompanionInput,
  fillCompanionInput: operations.fillInputTextField,
}

function readRecordDisplayValue(label, record) {
  try {
    let value = answerMethods.findValueInRecord(label, record)
    return Array.isArray(value) ? value.join(", ") : value
  } catch {
    return
  }
}

export async function fillIcimsEducationRows(educationRecords, deps) {
  let educationRules = []
  let visibleCount = 0
  let fillCount = 0
  let ledger = []
  let hadMiss = false
  let skipped = false
  let reporter = answerMethods.createSectionResultReporter("education", {
    onSectionResultChanged: deps.onSectionResultChanged,
  })

  reporter.setLabel("Education")
  cancellation.updateCurrentField("Education")

  try {
    await cancellation.withSkip(async () => {
      cancellation.checkpoint()
      await deps.syncEducationSections(educationRecords.length)
      cancellation.checkpoint()
    })

    educationRules = deps.getEducationRules()
    coreDom.setSectionResultFocusRules("education", educationRules)
    visibleCount = deps.getVisibleEducationSectionCount()
    fillCount = Math.min(educationRecords.length, educationRules.length)

    await cancellation.withSkip(async () => {
      cancellation.checkpoint()
      await deps.clearRuleValues(educationRules.slice(0, fillCount))
      cancellation.checkpoint()
    })

    rowLoop: for (let rowIndex = 0; rowIndex < fillCount; rowIndex += 1) {
      let rule = educationRules[rowIndex]
      let record = educationRecords[rowIndex]
      if (!rule || !record) continue

      let row = reporter.ensureRow(rowIndex, record)
      reporter.emit()

      let children = [...(rule.children ?? [])].sort((left, right) => {
        let rank = (child) => {
          let fieldType =
            educationClientSearch.classifyIcimsEducationClientSearchRule(
              child,
            )
          return fieldType === "school" ? 0 : fieldType === "major" ? 1 : 2
        }
        return rank(left) - rank(right)
      })

      for (let child of children) {
        cancellation.checkpoint()
        let fieldType =
          educationClientSearch.classifyIcimsEducationClientSearchRule(child)

        if (fieldType) {
          let originalAnswer =
            educationClientSearch.getIcimsEducationOriginalAnswer(
              fieldType,
              record,
            )
          if (!originalAnswer) {
            reporter.updateField(row, child.label, undefined, "missed")
            reporter.emit()
            continue
          }

          try {
            let outcome = await cancellation.withSkip(() =>
              deps.fillClientSearchField(
                child,
                record,
                rowIndex,
                deps.clientSearchDeps,
              ),
            )
            ledger.push(outcome)
            reporter.updateRow(row, record)
            reporter.updateField(
              row,
              child.label,
              originalAnswer,
              outcome.success ? "filled" : "missed",
            )
            reporter.emit()
            if (!outcome.success) {
              console.warn(
                "[AutofillClientSearch] Education field outcome",
                JSON.stringify({
                  rowIndex,
                  fieldType,
                  actions: outcome.actions,
                  roundCandidateCounts: outcome.rounds.map(
                    (round) => round.candidateCount,
                  ),
                  failureReason: outcome.failureReason ?? null,
                }),
              )
            }
          } catch (error) {
            if (error instanceof cancellation.CancelledError) throw error
            if (error instanceof cancellation.SkippedError) {
              reporter.updateRow(row, record)
              reporter.updateField(
                row,
                child.label,
                originalAnswer,
                "skipped",
              )
              reporter.emit()
              skipped = true
              break rowLoop
            }
            ledger.push({
              rowIndex,
              fieldType,
              attempted: true,
              success: false,
              actions: [],
              rounds: [],
              failureReason: "orchestration-error",
            })
            reporter.updateRow(row, record)
            reporter.updateField(row, child.label, originalAnswer, "missed")
            reporter.emit()
          }
          continue
        }

        try {
          let filled = await cancellation.withSkip(async () => {
            let transformed = await deps.transformRecordByRule(child, record)
            record = transformed
            cancellation.checkpoint()
            return await deps.operationConfig[child.type]?.(
              child,
              transformed,
              false,
            )
          })
          let display = readRecordDisplayValue(child.label, record)
          reporter.updateRow(row, record)
          reporter.updateField(
            row,
            child.label,
            display,
            filled !== false && display ? "filled" : "missed",
          )
          reporter.emit()
          if (filled === false) hadMiss = true
        } catch (error) {
          if (error instanceof cancellation.CancelledError) throw error
          if (error instanceof cancellation.SkippedError) {
            reporter.updateRow(row, record)
            reporter.updateField(
              row,
              child.label,
              readRecordDisplayValue(child.label, record),
              "skipped",
            )
            reporter.emit()
            skipped = true
            break rowLoop
          }
          hadMiss = true
          reporter.updateRow(row, record)
          reporter.updateField(
            row,
            child.label,
            readRecordDisplayValue(child.label, record),
            "missed",
          )
          reporter.emit()
        }
      }
    }
  } catch (error) {
    if (error instanceof cancellation.CancelledError) throw error
    if (error instanceof cancellation.SkippedError) skipped = true
    else throw error
  } finally {
    cancellation.updateCurrentField(null)
  }

  let filled =
    visibleCount >= educationRecords.length &&
    educationRules.length >= educationRecords.length &&
    !skipped &&
    !hadMiss &&
    ledger.every((outcome) => outcome.success)

  if (filled) deps.updateFilledProgress("Education")
  else deps.updateMissedProgress("Education")

  return {
    filled,
    skipped,
    ledger,
  }
}

export class Icims extends BaseFiller {
  constructor() {
    super()
    this.hasComboQuestions = true
    this.comboQuestionSettleDelayMs = 500
    this.lastFullAutofillSnapshot = {}
    this.lastFullSubmitSnapshot = {}
    this.educationClientSearchLedger = []
    this.educationTraceRunId = null
    this.continueAutofillContext = null
    this.navigationTracking =
      new submitTracking.IcimsNavigationTrackingController()

    let originalCancel = this.cancel
    this.cancel = async () => {
      this.continueAutofillContext = null
      try {
        jobDetailContinuation.clearIcimsJobDetailAutofill(
          window.sessionStorage,
        )
      } catch {
        // ignore
      }
      await originalCancel()
    }

    continueAutofill.bindIcimsContinueAutofill(
      document,
      () => this.continueAutofillContext !== null,
      () => {
        let signature =
          continueAutofill.getIcimsContinuationSignature(document)
        if (signature !== null && this.continueAutofillContext) {
          try {
            jobDetailContinuation.saveIcimsJobDetailAutofill(
              window.sessionStorage,
              window.location.href,
              {
                ...this.continueAutofillContext,
                disableUploadResume: !!this.disableUploadResume,
                resumeInfo: this.resumeInfo,
              },
              Date.now(),
              signature,
            )
          } catch {
            console.info(
              '[IcimsJobDetailContinuation] {"reason":"storage-unavailable"}',
            )
          }
        }
      },
    )

    this.resumeAutofillAfterJobDetail()
    this.resumeAutofillAfterUploadRefresh()
    window.addEventListener("message", (event) => {
      if (event.data?.type === CONTINUE_REQUEST_TYPE) {
        this.continueApplication(!!event.data?.data?.fromAgent)
      }
    })
  }

  async resumeAutofillAfterJobDetail() {
    try {
      await jobDetailContinuation.resumeIcimsJobDetailAutofill(
        window.sessionStorage,
        window.location.href,
        () =>
          observer.waitForCondition(
            () => rules.detectIcimsPageType() !== null,
            {
              timeout: 15e3,
              interval: 200,
            },
          ),
        async (intent) => {
          this.disableUploadResume = intent.disableUploadResume
          if (intent.resumeInfo) this.resumeInfo = intent.resumeInfo
          await this.fillForm(intent.fromAgent)
        },
        () => continueAutofill.getIcimsContinuationSignature(document),
        (intent) => {
          this.continueAutofillContext = {
            fromAgent: intent.fromAgent,
          }
          this.disableUploadResume = intent.disableUploadResume
          if (intent.resumeInfo) this.resumeInfo = intent.resumeInfo
        },
        () =>
          document.documentElement.setAttribute(
            "data-jobright-icims-continuation-claimed",
            "pending",
          ),
      )
    } catch {
      console.info(
        '[IcimsJobDetailContinuation] {"reason":"storage-unavailable"}',
      )
    }
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: async (rule, value) => {
          let text = Array.isArray(value) ? value[0] : value
          if (text != null && text !== "") {
            await operations.fillInputTextField(
              rule.$input,
              String(text ?? ""),
            )
          }
        },
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          operations.fillSearchSelectField(rule.$input, value, rule.label),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.SELECT_ORIGINAL]: {
        handler: async (rule, value) => {
          let text = Array.isArray(value) ? value[0] : value
          return (
            text != null &&
            text !== "" &&
            operations.fillOriginSelectField(rule.$input, String(text))
          )
        },
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => operations.fillCheckboxField(rule, value),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: async (rule, value) => {
          let text = Array.isArray(value) ? value[0] : value
          if (text != null && text !== "") {
            await operations.fillDateField(rule.$input, String(text))
          }
        },
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (rule, value) =>
          operations.fillRadioGroupField(rule, value),
        options: {
          expectArray: true,
        },
      },
    }
  }

  getSiteName() {
    return "icims"
  }

  async extractFormRules() {
    let formRules = icimsAnswer.formatRulesForRequest(rules.extractRules())
    console.info(
      `[IcimsAddressDebug] rules extracted ${JSON.stringify({
        dom: getAddressDomDiagnostics(),
        rules: utils.getIcimsAddressRuleDiagnostics(formRules),
      })}`,
    )
    return formRules
  }

  getNewComboQuestionRules(existingRules, previousLabels) {
    return rules.getIcimsComboQuestionRules(existingRules, previousLabels)
  }

  async fetchFormAnswers(formRules, fromAgent) {
    let requestRules =
      icimsAnswer.expandIcimsPhoneSectionRulesForRequest(formRules)
    console.info(
      `[IcimsAddressDebug] rules requested ${JSON.stringify({
        rules: utils.getIcimsAddressRuleDiagnostics(requestRules),
      })}`,
    )
    let response = await this.requestFormAnswers(requestRules, fromAgent)
    if (typeof response === "string") {
      console.info(
        '[IcimsAddressDebug] answer unavailable {"status":"request-error"}',
      )
      return response
    }
    if (response) {
      this.answer = response
      console.info(
        `[IcimsAddressDebug] answer received ${JSON.stringify({
          addressLikeRegularKeyCount: countAddressLikeRegularKeys(response),
        })}`,
      )
    } else {
      console.info(
        '[IcimsAddressDebug] answer unavailable {"status":"empty-response"}',
      )
    }
  }

  formatAnswer(answer) {
    return icimsAnswer.formatAnswer(answer)
  }

  splitSnapshot(snapshot) {
    let { education = [], employment = [], ...normal } = snapshot || {}
    return {
      normal,
      education: Array.isArray(education) ? education : [],
      employment: Array.isArray(employment) ? employment : [],
    }
  }

  extractEducationEmploymentAdditional(snapshot) {
    let { education, employment } = this.splitSnapshot(snapshot)
    return {
      education,
      employment,
    }
  }

  filterSectionRecordForEndDateRule(rule, record, section) {
    return utils.filterIcimsOptionalEndDateRecord(rule, record, {
      legacyMatchLabels: icimsAnswer.ICIMS_LEGACY_END_DATE_MATCH_LABELS,
      recordKeys:
        section === "education"
          ? icimsAnswer.ICIMS_EDUCATION_END_DATE_RECORD_KEYS
          : icimsAnswer.ICIMS_EMPLOYMENT_END_DATE_RECORD_KEYS,
    })
  }

  async getAutofillSnapshot(answer) {
    let snapshot =
      rules.getFormSnapshot(undefined, {
        markEducationRows: true,
        includeEducationSnapshotIndex: true,
        includeEducationTrace: true,
        educationTraceRunId: this.ensureEducationTraceRunId(),
      }) || {}
    this.lastFullAutofillSnapshot = snapshot
    return this.splitSnapshot(snapshot).normal
  }

  async getSubmitSnapshot() {
    let snapshot =
      rules.getFormSnapshot(undefined, {
        includeEducationSnapshotIndex: true,
        includeEducationTrace: true,
        educationTraceRunId: this.ensureEducationTraceRunId(),
      }) || {}
    this.lastFullSubmitSnapshot = snapshot
    return this.splitSnapshot(snapshot).normal
  }

  getAdditionalAutofillSnapshotData(answer) {
    return this.extractEducationEmploymentAdditional(
      this.lastFullAutofillSnapshot,
    )
  }

  getAdditionalSubmitSnapshotData() {
    return this.extractEducationEmploymentAdditional(
      this.lastFullSubmitSnapshot,
    )
  }

  getSubmitButtonSelector() {
    return null
  }

  ensureEducationTraceRunId() {
    if (!this.educationTraceRunId) {
      this.educationTraceRunId = educationItemTrace.createEducationTraceRunId()
    }
    return this.educationTraceRunId
  }

  getNavigationButtonFromEventTarget(target) {
    if (!(target instanceof HTMLElement)) return null
    let button = target.closest(
      'input[type="submit"], button[type="submit"]',
    )
    return button && utils.isVisibleIcimsElement(button) ? button : null
  }

  isTrackedNavigationButton(button) {
    let text = this.getNavigationButtonText(button)
    return (
      (!(button instanceof HTMLInputElement) ||
        button.name !== "icims_save") &&
      text !== "finish later" &&
      text !== "save & return later" &&
      text !== "save and return later" &&
      (!!(
        text === "submit" ||
        text === "submit profile" ||
        text === "apply" ||
        text.includes("submit")
      ) ||
        this.isContinueNavigationButton(button))
    )
  }

  async bindSubmitButtonTracking(answer) {
    let autofillSnapshot = await this.getAutofillSnapshot(answer)
    let additionalAutofillData =
      this.getAdditionalAutofillSnapshotData?.(answer) || {}

    this.navigationTracking.bind({
      root: document,
      resolveButton: (target) =>
        this.getNavigationButtonFromEventTarget(target),
      isTrackedButton: (button) => this.isTrackedNavigationButton(button),
      formUrl: () => urlStore.useUrlStore.getState().currentTabUrl,
      source: () => this.getSiteName(),
      answer: () => this.answer,
      autofillSnapshot,
      additionalAutofillData,
      getSubmitSnapshot: () => this.getSubmitSnapshot(),
      getAdditionalSubmitData: () =>
        this.getAdditionalSubmitSnapshotData?.() || {},
      educationOutcomes: () => this.educationClientSearchLedger,
      send: answerPairTracking.sendAutofillAnswerPairEvent,
      afterSend: async ({ submitSnapshot }) => {
        await starRating.handleSubmitStarRating(
          this.getSiteName(),
          autofillSnapshot,
          submitSnapshot,
          this.progressTracker.fieldStatus,
        )
      },
    })
  }

  async continueApplication(fromAgent = false) {
    let button = this.getActiveContinueButton()
    if (button) {
      button.click()
      return true
    }
    return this.forwardContinueToChildIframe(fromAgent)
  }

  isReadyForSecondPhase() {
    return (
      operations.hasUploadedResumeQueryFlag() &&
      operations.hasUploadedResume()
    )
  }

  readPendingUploadAutofill() {
    try {
      let raw = window.sessionStorage.getItem(UPLOAD_PENDING_KEY)
      if (!raw) return null
      let pending = JSON.parse(raw)
      if (
        !pending ||
        Date.now() - Number(pending.startedAt) > UPLOAD_PENDING_TTL_MS
      ) {
        this.clearPendingUploadAutofill()
        return null
      }
      return {
        fromAgent: !!pending.fromAgent,
        disableUploadResume: !!pending.disableUploadResume,
        sourceUrl:
          typeof pending.sourceUrl === "string" && pending.sourceUrl
            ? pending.sourceUrl
            : window.location.href,
        sourceUploadSignature:
          typeof pending.sourceUploadSignature === "string"
            ? pending.sourceUploadSignature
            : "",
        startedAt:
          typeof pending.startedAt === "number"
            ? pending.startedAt
            : Date.now(),
        resumeInfo: pending.resumeInfo,
      }
    } catch {
      this.clearPendingUploadAutofill()
      return null
    }
  }

  savePendingUploadAutofill(fromAgent) {
    try {
      window.sessionStorage.setItem(
        UPLOAD_PENDING_KEY,
        JSON.stringify({
          fromAgent,
          disableUploadResume: !!this.disableUploadResume,
          sourceUrl: window.location.href,
          sourceUploadSignature: this.getUploadPendingSignature(),
          startedAt: Date.now(),
          resumeInfo: this.resumeInfo,
        }),
      )
    } catch {
      // ignore
    }
  }

  clearPendingUploadAutofill() {
    try {
      window.sessionStorage.removeItem(UPLOAD_PENDING_KEY)
    } catch {
      // ignore
    }
  }

  getUploadPendingSignature() {
    return [
      operations.hasUploadedResume() ? "uploaded" : "empty",
      operations.hasUploadedResumeQueryFlag() ? "upload-query" : "no-query",
      this.getIcimsPrefillSignature(),
    ].join("|")
  }

  isSamePendingUploadPage(pending) {
    try {
      let current = new URL(window.location.href)
      let source = new URL(pending.sourceUrl, window.location.href)
      return (
        current.origin === source.origin &&
        current.pathname === source.pathname
      )
    } catch {
      return false
    }
  }

  hasUploadRefreshTransition(pending) {
    try {
      let current = new URL(window.location.href)
      let source = new URL(pending.sourceUrl, window.location.href)
      return (
        current.origin === source.origin &&
        current.pathname === source.pathname &&
        (current.href !== source.href ||
          operations.hasUploadedResumeQueryFlag() ||
          this.getUploadPendingSignature() !== pending.sourceUploadSignature)
      )
    } catch {
      return false
    }
  }

  async resumeAutofillAfterUploadRefresh() {
    let pending = this.readPendingUploadAutofill()
    if (!pending || !this.isSamePendingUploadPage(pending)) return
    if (!this.hasUploadRefreshTransition(pending)) {
      this.clearPendingUploadAutofill()
      return
    }

    this.disableUploadResume = pending.disableUploadResume
    if (pending.resumeInfo) this.resumeInfo = pending.resumeInfo

    let ready = await observer.waitForCondition(
      () => this.isReadyForSecondPhase(),
      {
        timeout: 5e3,
        interval: 200,
      },
    )
    if (!ready) {
      this.clearPendingUploadAutofill()
      return
    }

    try {
      this.continueAutofillContext = {
        fromAgent: pending.fromAgent,
      }
      await this.runFieldFillPhase(pending.fromAgent)
    } finally {
      this.clearPendingUploadAutofill()
    }
  }

  shouldUploadResumeFirst() {
    return !this.disableUploadResume && operations.hasResumeSection()
  }

  syncUploadedResumeProgress() {
    if (!operations.hasUploadedResume()) return
    let hasRequired =
      this.progressTracker.fieldStatus.fieldRequiredStatus.some(
        (item) => item.label === "Resume/CV",
      )
    if (!hasRequired) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Resume/CV",
        required: true,
        type: "file",
      })
    }
    if (
      !this.progressTracker.fieldStatus.filledFields.includes("Resume/CV")
    ) {
      this.progressTracker.updateFilledProgress("Resume/CV")
    }
  }

  getIcimsPrefillSignature() {
    let controls = Array.from(
      document.querySelectorAll("input, textarea, select"),
    )
    let filledCount = 0
    for (let control of controls) {
      if (
        !(control instanceof HTMLElement) ||
        !utils.isVisibleIcimsElement(control)
      ) {
        continue
      }
      if (control instanceof HTMLInputElement) {
        if (
          ["hidden", "file", "button", "submit", "radio", "checkbox"].includes(
            control.type,
          )
        ) {
          continue
        }
        if (control.value.trim()) filledCount += 1
        continue
      }
      if (control instanceof HTMLTextAreaElement) {
        if (control.value.trim()) filledCount += 1
        continue
      }
      if (control instanceof HTMLSelectElement && control.value) {
        filledCount += 1
      }
    }
    return `${operations.getVisibleEmploymentSectionCount()}:${filledCount}`
  }

  async waitForIcimsPrefillToSettle() {
    let lastSignature = ""
    let stableCount = 0
    let deadline = Date.now() + 8e3
    while (Date.now() < deadline) {
      let signature = this.getIcimsPrefillSignature()
      if (signature === lastSignature) stableCount += 1
      else {
        lastSignature = signature
        stableCount = 0
      }
      if (stableCount >= 4) {
        await delay.delay(300)
        return
      }
      await delay.delay(250)
    }
  }

  async waitForPostUploadTransition(previousHref, previousSignature) {
    await observer.waitForCondition(
      () =>
        window.location.href !== previousHref ||
        operations.hasUploadedResumeQueryFlag() ||
        this.getIcimsPrefillSignature() !== previousSignature,
      {
        timeout: 8e3,
        interval: 250,
      },
    )
  }

  async clearRuleValue(rule) {
    if (!rule) return

    if (
      rule.type === enums.FIELD_TYPE.EDUCATION ||
      rule.type === enums.FIELD_TYPE.EMPLOYMENT
    ) {
      for (let child of rule.children ?? []) await this.clearRuleValue(child)
      return
    }

    if (rule.type === enums.FIELD_TYPE.TEXT && rule.$input) {
      await operations.clearInputField(rule.$input)
      return
    }

    if (rule.type === enums.FIELD_TYPE.DATE && rule.$input) {
      await operations.clearDateFieldValue(rule.$input)
      return
    }

    if (
      (rule.type === enums.FIELD_TYPE.SELECT ||
        rule.type === enums.FIELD_TYPE.SELECT_ORIGINAL) &&
      rule.$input
    ) {
      operations.clearSelectField(rule.$input)
    }
  }

  async clearRuleValues(formRules) {
    for (let rule of formRules) await this.clearRuleValue(rule)
  }

  async runResumeUploadPhase(fromAgent) {
    let previousHref = window.location.href
    let previousSignature = this.getIcimsPrefillSignature()
    await this.initializeFillForm()
    this.savePendingUploadAutofill(fromAgent)

    try {
      let uploaded = await operations.uploadResume(
        this.resumeInfo,
        () => {},
        () => {},
      )
      if (!uploaded) {
        this.clearPendingUploadAutofill()
        return this.runFieldFillPhase(fromAgent)
      }
      await this.waitForPostUploadTransition(
        previousHref,
        previousSignature,
      )
      await this.waitForIcimsPrefillToSettle()
      let result = await this.runFieldFillPhase(fromAgent)
      this.clearPendingUploadAutofill()
      return result
    } catch (error) {
      this.clearPendingUploadAutofill()
      throw error
    }
  }

  getNavigationButtonText(button) {
    let text =
      button instanceof HTMLInputElement
        ? button.value
        : button.innerText || button.textContent || ""
    let ariaLabel = button.getAttribute("aria-label") ?? ""
    return (text || ariaLabel).trim().toLowerCase()
  }

  getCurrentStepText() {
    let node = xpath.getFirstOrderedNode(
      ".//div[contains(@class, 'iCIMS_PageStepText')]",
    )
    return (node?.textContent || "").trim().toLowerCase()
  }

  isFinalNavigationStep() {
    let stepText = this.getCurrentStepText()
    return (
      !!stepText &&
      (stepText.includes("submit") ||
        stepText.includes("review") ||
        stepText.includes("complete") ||
        stepText.includes("confirmation") ||
        stepText.includes("finish"))
    )
  }

  isSubmitNavigationButton(button) {
    let text = this.getNavigationButtonText(button)
    return (
      text === "submit" ||
      text === "submit profile" ||
      text === "apply" ||
      text.includes("submit")
    )
  }

  isContinueNavigationButton(button) {
    let text = this.getNavigationButtonText(button)
    if (button instanceof HTMLInputElement && button.name === "icims_save") {
      return false
    }
    if (
      (button instanceof HTMLInputElement &&
        button.name === "icims_submit" &&
        text === "submit") ||
      (button instanceof HTMLInputElement &&
        button.id === "cp_form_submit_i" &&
        button.name === "profileButton" &&
        text === "submit")
    ) {
      return true
    }
    if (text === "finish later" || text === "save & return later") {
      return false
    }
    let stepText = this.getCurrentStepText()
    return stepText
      ? !this.isFinalNavigationStep()
      : !this.isSubmitNavigationButton(button)
  }

  getActiveContinueButton() {
    let buttons = Array.from(
      document.querySelectorAll(
        'input[type="submit"], button[type="submit"]',
      ),
    )
    let continues = buttons.filter(
      (button) =>
        !!utils.isVisibleIcimsElement(button) &&
        this.isContinueNavigationButton(button),
    )
    return continues[0] ?? null
  }

  getSupportedChildIframes() {
    let iframes = Array.from(document.getElementsByTagName("iframe"))
    return iframes.filter((iframe) => {
      if (!iframe.contentWindow || !iframe.src) return false
      try {
        return coreUtils.checkSupportIframeSrc(iframe.src)
      } catch {
        return false
      }
    })
  }

  waitForChildIframeAutofill() {
    return new Promise((resolve) => {
      try {
        let target = window.top ?? window
        let settled = false
        let timeoutId = window.setTimeout(() => {
          if (!settled) {
            settled = true
            target.removeEventListener("message", onMessage)
            resolve()
          }
        }, 15e3)
        let onMessage = (event) => {
          let type = event.data?.type
          if (
            type === enums.MESSAGE_EVENTS.autoFillResultFromIframe ||
            type === enums.MESSAGE_EVENTS.autoFillCompleteFromIframe
          ) {
            if (!settled) {
              settled = true
              window.clearTimeout(timeoutId)
              target.removeEventListener("message", onMessage)
              resolve()
            }
          }
        }
        target.addEventListener("message", onMessage)
      } catch {
        resolve()
      }
    })
  }

  async forwardAutofillToChildIframe(fromAgent) {
    let iframes = this.getSupportedChildIframes()
    let iframe = iframes[iframes.length - 1]
    if (!iframe?.contentWindow) return false

    let waitPromise = this.waitForChildIframeAutofill()
    iframe.contentWindow.postMessage(
      stringUtils.cleanObject({
        type: appEnums.IFRAME_EVENTS.UPDATE_IFRAME_DATA,
        data: {
          resumeInfo: this.resumeInfo,
          disableUploadResume: this.disableUploadResume,
          token: this.token,
        },
        url: iframe.src,
      }),
      {
        targetOrigin: "*",
      },
    )
    iframe.contentWindow.postMessage(
      stringUtils.cleanObject({
        type: appEnums.IFRAME_EVENTS.EXECUTE_IFRAME_FUNCTION,
        data: {
          fromAgent,
          timestamp: Date.now(),
        },
        url: iframe.src,
      }),
      {
        targetOrigin: "*",
      },
    )
    await waitPromise
    return true
  }

  forwardContinueToChildIframe(fromAgent) {
    let iframes = this.getSupportedChildIframes()
    let iframe = iframes[iframes.length - 1]
    if (!iframe?.contentWindow) return false

    iframe.contentWindow.postMessage(
      stringUtils.cleanObject({
        type: CONTINUE_REQUEST_TYPE,
        data: {
          fromAgent,
          timestamp: Date.now(),
        },
        url: iframe.src,
      }),
      {
        targetOrigin: "*",
      },
    )
    return true
  }

  async runFieldFillPhase(fromAgent = false) {
    this.navigationTracking.startRun()
    this.educationTraceRunId = null
    this.educationClientSearchLedger = []

    let forwardedToIframe = false
    let country = ""
    let stateProvince = ""
    await this.initializeFillForm()

    try {
      if (this.isReadyForSecondPhase()) {
        await this.waitForIcimsPrefillToSettle()
      }

      let profileInfo =
        await autofillInfo.useAutofillInfoStore.getState().fetchAutofillInfo()
      let credentials =
        await createLogin.loadIcimsCreateLoginCredentials(profileInfo)
      let createLoginResult =
        await createLogin.fillIcimsCreateLoginCredentials(credentials)
      console.info(
        `[IcimsCreateLogin] ${JSON.stringify({
          foundSection: createLoginResult.foundSection,
          foundRoleCount: createLoginResult.foundRoles.length,
          filledRoleCount: createLoginResult.filledRoles.length,
          skippedExistingRoleCount:
            createLoginResult.skippedExistingRoles.length,
          rejectedRoleCount: createLoginResult.rejectedRoles.length,
        })}`,
      )

      country = autofillInfo.useAutofillInfoStore.getState().country
      stateProvince = String(
        profileInfo?.location?.state ?? profileInfo?.state ?? "",
      ).trim()

      if (country) {
        let previousCountry = operations.getSelectedIcimsCountryText()
        let previousStateSignature =
          utils.getIcimsStateProvinceOptionsSignature()
        let countryFilled = false
        this.taskQueue.add(async () => {
          countryFilled = await operations.fillCountry(country)
        })
        await this.taskQueue.run()
        let nextCountry = operations.getSelectedIcimsCountryText()
        if (
          countryFilled &&
          previousCountry.toLowerCase() !== nextCountry.toLowerCase()
        ) {
          await utils.waitForIcimsStateProvinceOptionsRefresh(
            previousStateSignature,
          )
        }
      }

      let certifyField = operations.autoSelectCertifyField()
      let formRules = await this.extractFormRules()
      let requiredStatus = certifyField ? [certifyField] : []

      if (formRules.length === 0) {
        if (certifyField) {
          this.progressTracker.setFieldsRequiredStatus(requiredStatus)
          if (certifyField.filled) {
            this.progressTracker.updateFilledProgress(certifyField.label)
          } else {
            this.progressTracker.updateMissedProgress(certifyField.label)
          }
        }
        forwardedToIframe = await this.forwardAutofillToChildIframe(fromAgent)
        return this.progressTracker.generateFinalProgress()
      }

      let seenSectionTypes = new Set()
      let employmentLabel = "Employment"
      for (let rule of formRules) {
        let type = rule.type
        if (
          type === enums.FIELD_TYPE.EDUCATION ||
          type === enums.FIELD_TYPE.EMPLOYMENT
        ) {
          let typeKey = String(type)
          if (seenSectionTypes.has(typeKey)) continue
          seenSectionTypes.add(typeKey)
        }

        if (type === enums.FIELD_TYPE.EMPLOYMENT) {
          let firstOption = Array.isArray(rule.options)
            ? rule.options[0]
            : null
          employmentLabel =
            typeof firstOption === "object" && firstOption?.label
              ? firstOption.label
              : rule.label
          requiredStatus.push({
            label: employmentLabel,
            required: rule.required ?? null,
            options: rule.options,
            type: rule.type,
          })
          continue
        }

        if (
          type === enums.FIELD_TYPE.SECTION &&
          Array.isArray(rule.children)
        ) {
          for (let child of rule.children) {
            requiredStatus.push({
              label: child.label,
              required: child.required ?? null,
              options: child.options,
              type: child.type,
            })
          }
          continue
        }

        requiredStatus.push({
          label: rule.label,
          required: rule.required ?? null,
          options: rule.options,
          type: rule.type,
        })
      }

      this.progressTracker.setFieldsRequiredStatus(requiredStatus)
      if (certifyField) {
        if (certifyField.filled) {
          this.progressTracker.updateFilledProgress(certifyField.label)
        } else {
          this.progressTracker.updateMissedProgress(certifyField.label)
        }
      }

      let answerError = await this.fetchFormAnswers(formRules, fromAgent)
      if (typeof answerError === "string") return answerError

      icimsAnswer.applyIcimsEducationProfileRawFallback(
        this.answer,
        profileInfo,
      )
      icimsAnswer.applyIcimsStateProvinceFallback(this.answer, stateProvince)

      window.top?.postMessage(
        stringUtils.cleanObject({
          type: enums.MESSAGE_EVENTS.agentStartFillingFields,
        }),
        {
          targetOrigin: "*",
        },
      )

      if (operations.hasUploadedResume()) {
        this.syncUploadedResumeProgress()
      } else if (this.disableUploadResume) {
        this.progressTracker.updateMissedProgress("Resume/CV")
      }

      let flatRules = formRules.reduce((acc, rule) => {
        if (
          rule.type === enums.FIELD_TYPE.EDUCATION ||
          rule.type === enums.FIELD_TYPE.EMPLOYMENT
        ) {
          return acc
        }
        if (
          rule.type === enums.FIELD_TYPE.SECTION &&
          Array.isArray(rule.children)
        ) {
          acc.push(...rule.children)
        } else {
          acc.push(rule)
        }
        return acc
      }, [])

      let countryRule = flatRules.find(
        (rule) =>
          (rule.type === enums.FIELD_TYPE.SELECT ||
            rule.type === enums.FIELD_TYPE.SELECT_ORIGINAL) &&
          /^country$/i.test(rule.label),
      )
      let nonCountryRules = flatRules.filter(
        (rule) => !/^country$/i.test(rule.label),
      )
      let regularRules = utils.getIcimsRegularRulesForFill(nonCountryRules)
      let countryAnswer = String(
        country || this.answer?.country || "",
      ).trim()

      await this.clearRuleValues(regularRules)

      if (countryRule) {
        let filled =
          !!countryAnswer &&
          (await operations.fillCountry(countryAnswer, countryRule.$input))
        if (filled) this.progressTracker.updateFilledProgress("Country")
        else this.progressTracker.updateMissedProgress("Country")
      }

      let regularOperations = answerMethods.getRegularOperations(
        regularRules,
        this.answer.regular,
        this.operationConfig,
      )
      console.info(
        `[IcimsAddressDebug] regular fill queued ${JSON.stringify({
          addressRules: utils.getIcimsAddressRuleDiagnostics(formRules),
          addressLikeRegularKeyCount: countAddressLikeRegularKeys(
            this.answer,
          ),
          totalRegularOperationCount: regularOperations.length,
        })}`,
      )
      for (let operation of regularOperations) this.taskQueue.add(operation)
      await this.taskQueue.run()
      console.info(
        `[IcimsAddressDebug] regular fill completed ${JSON.stringify({
          dom: getAddressDomDiagnostics(),
        })}`,
      )

      await operations.fillSignatureCheckboxes()

      let comboRules = await this.runComboQuestionAutofillIfNeeded(
        formRules,
        fromAgent,
      )
      if (typeof comboRules === "string") return comboRules
      formRules = comboRules

      let educationRecords = this.answer.education ?? []
      this.educationClientSearchLedger = []
      if (educationRecords.length > 0) {
        let educationResult = await fillIcimsEducationRows(
          educationRecords,
          {
            syncEducationSections: operations.syncEducationSections,
            getEducationRules: rules.getEducationRules,
            getVisibleEducationSectionCount:
              operations.getVisibleEducationSectionCount,
            clearRuleValues: (items) => this.clearRuleValues(items),
            operationConfig: this.operationConfig,
            transformRecordByRule: (rule, record) =>
              this.filterSectionRecordForEndDateRule(
                rule,
                record,
                "education",
              ),
            fillClientSearchField:
              educationClientSearch.fillIcimsEducationClientSearchField,
            clientSearchDeps: CLIENT_SEARCH_DEPS,
            updateFilledProgress: (label) =>
              this.progressTracker.updateFilledProgress(label),
            updateMissedProgress: (label) =>
              this.progressTracker.updateMissedProgress(label),
            onSectionResultChanged: this.progressTracker.updateSectionResult,
          },
        )
        this.educationClientSearchLedger = educationResult.ledger
      }

      let workExperience = this.answer.workExperience ?? []
      if (workExperience.length > 0) {
        await operations.syncEmploymentSections(workExperience.length)
        operations.getVisibleEmploymentSectionCount()

        let experienceRules = rules.getExperienceRules()
        coreDom.setSectionResultFocusRules("employment", experienceRules)
        let fillCount = Math.min(
          workExperience.length,
          experienceRules.length,
        )
        await this.clearRuleValues(experienceRules.slice(0, fillCount))

        let employmentSkipped = false
        let employmentReporter = answerMethods.createSectionResultReporter(
          "employment",
          {
            onSectionResultChanged:
              this.progressTracker.updateSectionResult,
          },
        )
        employmentReporter.setLabel(employmentLabel)

        for (let rowIndex = 0; rowIndex < fillCount; rowIndex++) {
          let rule = experienceRules[rowIndex]
          if (!rule) continue

          let record = workExperience[rowIndex]
          let children = rule.children ?? []
          let row = employmentReporter.ensureRow(rowIndex, record)
          employmentReporter.emit()
          this.taskQueue.add(async () => {
            let currentChild
            let currentRecord = record
            try {
              for (let child of children) {
                let transformed = this.filterSectionRecordForEndDateRule(
                  child,
                  record,
                  "employment",
                )
                currentChild = child
                currentRecord = transformed
                let filled = await this.operationConfig[child.type]?.(
                  child,
                  transformed,
                  false,
                )
                let display = readRecordDisplayValue(child.label, transformed)
                employmentReporter.updateRow(row, transformed)
                employmentReporter.updateField(
                  row,
                  child.label,
                  display,
                  filled !== false && display ? "filled" : "missed",
                )
                employmentReporter.emit()
              }
            } catch (error) {
              if (error instanceof cancellation.SkippedError) {
                employmentSkipped = true
                if (currentChild) {
                  employmentReporter.updateField(
                    row,
                    currentChild.label,
                    readRecordDisplayValue(
                      currentChild.label,
                      currentRecord,
                    ),
                    "skipped",
                  )
                  employmentReporter.emit()
                }
                return
              }
              throw error
            }
          })
          await this.taskQueue.run()
          if (employmentSkipped) break
        }

        operations.getVisibleEmploymentSectionCount()
        if (employmentSkipped) {
          this.progressTracker.updateMissedProgress(employmentLabel)
        } else {
          this.progressTracker.updateFilledProgress(employmentLabel)
        }
      }

      await this.taskQueue.run()
      await this.bindSubmitButtonTracking(formRules)
    } catch (error) {
      if (error instanceof cancellation.CancelledError) throw error
    } finally {
      if (forwardedToIframe) {
        return this.progressTracker.generateFinalProgress()
      }
      await this.finalizeFillForm()
    }

    return this.progressTracker.generateFinalProgress()
  }

  async doFillForm(fromAgent = false) {
    this.continueAutofillContext = {
      fromAgent,
    }

    if (
      jobDetailEntry.proceedIcimsJobDetailToApply(document, () => {
        try {
          jobDetailContinuation.saveIcimsJobDetailAutofill(
            window.sessionStorage,
            window.location.href,
            {
              fromAgent,
              disableUploadResume: !!this.disableUploadResume,
              resumeInfo: this.resumeInfo,
            },
          )
        } catch {
          console.info(
            '[IcimsJobDetailContinuation] {"reason":"storage-unavailable"}',
          )
        }
      })
    ) {
      return this.progressTracker.generateFinalProgress()
    }

    try {
      jobDetailContinuation.clearIcimsJobDetailAutofill(
        window.sessionStorage,
      )
    } catch {
      // ignore
    }

    this.navigationTracking.startRun()
    return this.shouldUploadResumeFirst()
      ? this.runResumeUploadPhase(fromAgent)
      : this.runFieldFillPhase(fromAgent)
  }

  submitApplication() {
    let button = xpath.getFirstOrderedNode(
      `.//input[@type='submit' and @value="Submit Profile"]`,
    )
    if (button) button.click()
  }
}
