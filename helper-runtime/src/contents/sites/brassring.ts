// @ts-nocheck
/**
 * BrassRing ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and brassring/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "brassring"
 */

import * as sectionResults from "../methods/section-results.js"
import * as dayjs from "dayjs"
import * as messaging from "@plasmohq/messaging"
import * as answerMethods from "../methods/answer.js"
import * as cancellation from "../methods/cancellation.js"
import * as dom from "../methods/dom.js"
import { BaseFiller } from "./base-filler.js"
import * as enums from "../../core/enums.js"
import * as brassringAnswer from "./answer.ts"
import * as brassringCountry from "./country.ts"
import * as operations from "./operations.ts"
import * as rules from "./rules.ts"

const dayjsDefault = { default: dayjs }

function normalizeLabel(label) {
  return label.replace(/\s+/g, " ").trim().toLowerCase()
}

/** Sort key: country first (0), other fields (1), state/province last (2). */
function getFillOrderRank(rule) {
  const label = normalizeLabel(rule.label)
  const spaced = label.replace(/[\/]+/g, " ").replace(/\s+/g, " ")
  if (/^country(?:\/region)?$/.test(label) || spaced === "country region") {
    return 0
  }
  if (
    [
      "state",
      "province",
      "state province",
      "state region province",
      "state region province county",
      "current state",
      "current province",
      "current state province",
    ].includes(spaced)
  ) {
    return 2
  }
  return 1
}

function isGeographicCountrySearchRule(rule) {
  const label = normalizeLabel(rule.label)
  if (
    !/^country(?:\s*\/\s*|\s+)region$/.test(label) ||
    rule.type !== enums.FIELD_TYPE.SEARCH
  ) {
    return false
  }
  const input = rule.$input
  const attrs = [
    input?.id,
    input?.getAttribute("name") || "",
    input?.getAttribute("dbfieldname") || "",
  ]
    .join(" ")
    .toLowerCase()
  return /(?:^|\s|[_-])profile(?:\s|[_-]|$)/.test(attrs)
}

function splitGeographicCountryRules(formRules) {
  const geographicCountryRules = []
  const regularRules = []
  for (const rule of formRules) {
    if (isGeographicCountrySearchRule(rule)) {
      geographicCountryRules.push(rule)
    } else {
      regularRules.push(rule)
    }
  }
  return { geographicCountryRules, regularRules }
}

function summarizeStateRules(formRules) {
  return formRules
    .filter((rule) => getFillOrderRank(rule) === 2)
    .map((rule) => ({
      label: rule.label,
      type: rule.type,
      optionCount: Array.isArray(rule.options) ? rule.options.length : 0,
    }))
}

function orderRulesForFill(formRules) {
  return formRules
    .map((rule, index) => ({ rule, index }))
    .sort((a, b) => {
      const rankDiff = getFillOrderRank(a.rule) - getFillOrderRank(b.rule)
      return rankDiff || a.index - b.index
    })
    .map(({ rule }) => rule)
}

function firstAnswerText(value) {
  const first = Array.isArray(value) ? value.find(Boolean) : value
  return String(first ?? "").trim()
}

function resolveCountryAnswer(answer) {
  const regular = answer?.regular || {}
  const entry = Object.entries(regular).find(([key]) =>
    /^country(?:\/region)?$/i.test(key.replace(/\s+/g, " ").trim()),
  )
  return (
    firstAnswerText(entry?.[1]) ||
    firstAnswerText(regular["Country/Region"]) ||
    firstAnswerText(answer?.country)
  )
}

function isDisabilitySignatureDateRule(rule) {
  const description = String(rule.description || "")
  return (
    rule.type === enums.FIELD_TYPE.DATE &&
    /^date$/i.test(rule.label.trim()) &&
    /Voluntary Self-Identification of Disability/i.test(description) &&
    /signature date/i.test(description) &&
    /today/i.test(description)
  )
}

function injectCountryIntoSnapshot(snapshot, answer) {
  const country = resolveCountryAnswer(answer)
  const countryKey = Object.keys(snapshot).find((key) =>
    /^country(?:\/region)?$/i.test(key.replace(/\s+/g, " ").trim()),
  )
  if (country && countryKey) snapshot[countryKey] = country
  return snapshot
}

function cleanFieldLabel(text) {
  return String(text ?? "")
    .replace(/\*/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function isVisibleInDom(el) {
  let node = el
  while (node && node !== document.documentElement) {
    const style =
      typeof window !== "undefined" && window.getComputedStyle
        ? window.getComputedStyle(node)
        : null
    const className = String(node.className || "")
    if (
      node.hidden ||
      node.getAttribute("aria-hidden") === "true" ||
      /\b(hidden|hiddenField|hide|ng-hide)\b/.test(className) ||
      style?.display === "none" ||
      style?.visibility === "hidden" ||
      style?.visibility === "collapse"
    ) {
      return false
    }
    node = node.parentElement
  }
  return true
}

function collectVisibleFieldLabels() {
  const labels = Array.from(document.querySelectorAll(".fieldcontain"))
    .filter(isVisibleInDom)
    .map((field) =>
      cleanFieldLabel(
        field.querySelector(
          "label.ListView, label[id$='-label'], label",
        )?.textContent,
      ),
    )
    .filter((label) => label && !/^(yes|no)$/i.test(label))
  return Array.from(new Set(labels)).slice(0, 40)
}

function collectUploadedFileKeys() {
  return Object.entries(operations.getUploadSnapshotValues())
    .filter(([, value]) => cleanFieldLabel(value))
    .map(([key]) => key)
    .sort()
}

function buildSubmitTrackingScopeKey() {
  const heading = cleanFieldLabel(
    document.querySelector("#ApplyPageHead")?.textContent,
  )
  const progress = cleanFieldLabel(
    document.querySelector(".progressBarContainer")?.textContent,
  )
  const labels = collectVisibleFieldLabels()
  const uploadKeys = collectUploadedFileKeys()
  if (!heading && !progress && labels.length === 0 && uploadKeys.length === 0) {
    return null
  }
  return JSON.stringify({
    heading,
    progress,
    labels,
    uploadKeys,
  })
}

function isEmptyMatchedAnswer(label, regular) {
  return Object.entries(regular || {}).some(([answerLabel, value]) => {
    if (!answerMethods.isMatched(label, answerLabel)) return false
    return Array.isArray(value)
      ? value.every((item) => String(item ?? "").trim() === "")
      : String(value ?? "").trim() === ""
  })
}

async function clearEmptyOtherTextFields(formRules, regular) {
  for (const rule of formRules) {
    if (
      rule.type !== enums.FIELD_TYPE.TEXT ||
      !/\bother\b/i.test(rule.label) ||
      !isEmptyMatchedAnswer(rule.label, regular)
    ) {
      continue
    }
    const input = rule.$input
    if (
      input instanceof HTMLInputElement ||
      input instanceof HTMLTextAreaElement
    ) {
      await operations.fillInputTextField(input, "")
    }
  }
}

const RESUME_PARSER_TIMEOUT_MESSAGE =
  "BrassRing resume parsing did not complete. Please retry Autofill."

export class Brassring extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) => {
          const text = Array.isArray(value) ? value[0] : value
          if (text != null && text !== "") {
            return operations.fillInputTextField(rule.$input, String(text))
          }
        },
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: (rule, value) => {
          const text = Array.isArray(value) ? value[0] : value
          if (text != null && text !== "") {
            return operations.fillInputTextField(rule.$input, String(text))
          }
        },
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) => operations.fillSelectField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.SEARCH]: {
        handler: (rule, value) => operations.fillSearchField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.MULTI_SELECT]: {
        handler: (rule, value) => operations.fillMultiselectField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => operations.fillCheckboxField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (rule, value) => operations.fillRadioGroupField(rule, value),
        options: { expectArray: true },
      },
    }
  }

  async runPreFillForm() {
    this.currentRunCountryCommitted = false
    console.info(
      `[BrassRingAutofill] fill-stage ${JSON.stringify({ stage: "prefill-start" })}`,
    )
    await operations.preFillForm()
    console.info(
      `[BrassRingAutofill] fill-stage ${JSON.stringify({ stage: "prefill-complete" })}`,
    )
  }

  async preFillCountryAndRefreshStateRules(formRules) {
    const { geographicCountryRules } = splitGeographicCountryRules(formRules)
    const result = await brassringCountry.runBrassringCountryPrefill({
      fetchAutofillInfo: () =>
        messaging
          .sendToBackground({
            name: "getAutofillInfo",
            body: { forceRefresh: true },
          })
          .catch(() => null),
      fillCountry: async (country) => {
        if (geographicCountryRules.length !== 1) {
          console.info(
            `[BrassRingAutofill] country-prefill-skipped ${JSON.stringify({
              reason: "country-control-not-unique",
              controlCount: geographicCountryRules.length,
            })}`,
          )
          return false
        }
        try {
          await operations.fillSearchField(geographicCountryRules[0], [
            country,
          ])
          return true
        } catch {
          console.info(
            `[BrassRingAutofill] country-prefill-skipped ${JSON.stringify({
              reason: "country-commit-rejected",
            })}`,
          )
          return false
        }
      },
      waitForDependentFields: async () => true,
    })
    this.currentRunCountryCommitted = result.committed
    console.info(
      `[BrassRingAutofill] country-prefill-result ${JSON.stringify({
        hasCountry: !!result.country,
        committed: result.committed,
        dependentSettled: result.dependentSettled,
      })}`,
    )
    return result.committed ? await rules.extractRules() : formRules
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    let formRules = await this.extractFormRules()
    console.info(
      `[BrassRingAutofill] fill-stage ${JSON.stringify({
        stage: "initial-rules-extracted",
        stateRules: summarizeStateRules(formRules),
      })}`,
    )

    const resumeResult = await this.handleResumeUpload()
    if (resumeResult?.newUpload) {
      formRules = await this.extractFormRules()
      console.info(
        `[BrassRingAutofill] fill-stage ${JSON.stringify({
          stage: "post-parser-rules-extracted",
          parserDetected: resumeResult.parserDetected,
          parserReady: resumeResult.parserReady,
          ruleCount: formRules.length,
        })}`,
      )
    }
    if (resumeResult?.parserDetected && !resumeResult.parserReady) {
      console.info(
        `[BrassRingAutofill] fill-stage ${JSON.stringify({
          stage: "resume-parser-abort",
          parserDetected: true,
          parserReady: false,
          reason: "parser-timeout",
        })}`,
      )
      return RESUME_PARSER_TIMEOUT_MESSAGE
    }

    formRules = await this.seedEmptyCompositeRules(formRules)
    formRules = await this.preFillCountryAndRefreshStateRules(formRules)
    console.info(
      `[BrassRingAutofill] fill-stage ${JSON.stringify({
        stage: "country-prefill-complete",
        countryCommitted: this.currentRunCountryCommitted,
        stateRules: summarizeStateRules(formRules),
      })}`,
    )
    formRules = this.prepareCoverLetterRules(formRules)

    const { geographicCountryRules, regularRules } =
      splitGeographicCountryRules(formRules)

    this.progressTracker.setFieldsRequiredStatus(formRules)
    if (resumeResult?.hasSection && !resumeResult.uploaded) {
      this.progressTracker.updateFieldRequiredStatus({
        label: operations.BRASSRING_RESUME_LABEL,
        required: true,
        type: "file",
      })
      this.progressTracker.updateMissedProgress(operations.BRASSRING_RESUME_LABEL)
    }
    if (this.currentRunCountryCommitted) {
      for (const rule of geographicCountryRules) {
        this.progressTracker.updateFilledProgress(rule.label)
      }
    }

    console.info(
      `[BrassRingAutofill] fill-stage ${JSON.stringify({
        stage: "fill-v2-request",
        stateRules: summarizeStateRules(regularRules),
      })}`,
    )

    const answersOrError = await this.fetchFormAnswers(
      regularRules,
      forceRefetch,
    )
    if (typeof answersOrError === "string") return answersOrError

    await this.fillRegularFields(regularRules)
    await this.fillEducationAndEmployment(formRules)
    await this.fillCoverLetterFields()

    const comboResult = await this.runComboQuestionAutofillIfNeeded(
      formRules,
      forceRefetch,
    )
    if (typeof comboResult === "string") return comboResult
    formRules = comboResult

    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  async seedEmptyCompositeRules(formRules) {
    const hasEducation = formRules.some(
      (rule) => rule.type === enums.FIELD_TYPE.EDUCATION,
    )
    const hasEmployment = formRules.some(
      (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
    )
    if (hasEducation && hasEmployment) return formRules

    const autofillInfo = await messaging
      .sendToBackground({
        name: "getAutofillInfo",
        body: { forceRefresh: true },
      })
      .catch(() => null)

    const educationCount = hasEducation
      ? 0
      : Array.isArray(autofillInfo?.education)
        ? autofillInfo.education.length
        : 0
    const employmentCount = hasEmployment
      ? 0
      : Array.isArray(autofillInfo?.workExperience)
        ? autofillInfo.workExperience.length
        : 0

    if (educationCount === 0 && employmentCount === 0) return formRules

    const hydrated = await operations.waitForCompositeSectionRows({
      educationCount,
      employmentCount,
    })

    const nextRules = [...formRules]
    const prepareComposite = async (kind, rowCount, getRule) => {
      if (rowCount === 0) return
      const opened = await operations.openSectionForEdit(kind, 0)
      const rule = opened ? getRule() : null
      console.info("[BrassRingAutofill] composite-rule-prepare", {
        kind,
        rowCount,
        opened,
        childCount: rule?.children?.length ?? 0,
      })
      if (rule) nextRules.push(rule)
    }

    if (!hasEducation) {
      await prepareComposite("education", hydrated.educationCount, () =>
        rules.getEducationRule(0),
      )
    }
    if (!hasEmployment) {
      await prepareComposite("experience", hydrated.employmentCount, () =>
        rules.getExperienceRule(0),
      )
    }

    const seededEducation = nextRules.some(
      (rule) => rule.type === enums.FIELD_TYPE.EDUCATION,
    )
    const seededEmployment = nextRules.some(
      (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
    )
    if (seededEducation && seededEmployment) return nextRules

    const didSeed = await operations.seedEmptyCompositeSections({
      educationCount: seededEducation ? 0 : educationCount,
      employmentCount: seededEmployment ? 0 : employmentCount,
    })
    if (!didSeed) return nextRules

    const refreshed = await rules.extractRules()
    for (const fieldType of [
      enums.FIELD_TYPE.EDUCATION,
      enums.FIELD_TYPE.EMPLOYMENT,
    ]) {
      if (nextRules.some((rule) => rule.type === fieldType)) continue
      const found = refreshed.find((rule) => rule.type === fieldType)
      if (found) nextRules.push(found)
    }
    return nextRules
  }

  getSiteName() {
    return "brassring"
  }

  async fetchFormAnswers(formRules, forceRefetch) {
    if (formRules.length === 0) {
      const now = Date.now()
      this.timeTrace.requestStartTime = now
      this.timeTrace.fillStartTime = now
      this.answer = {
        education: [],
        workExperience: [],
        skills: [],
        regular: {},
        fillDataList: [],
      }
      return
    }
    return await super.fetchFormAnswers(formRules, forceRefetch)
  }

  async fillRegularFields(formRules) {
    const ordered = orderRulesForFill(formRules)
    const operationsList = ordered.flatMap((rule) =>
      isDisabilitySignatureDateRule(rule)
        ? [
            async () => {
              await this.operationConfig[rule.type]?.(rule, {
                [rule.label]: dayjsDefault.default().format("M/D/YYYY"),
              })
            },
          ]
        : answerMethods.getRegularOperations(
            [rule],
            this.answer.regular,
            this.operationConfig,
          ),
    )
    for (const op of operationsList) this.taskQueue.add(op)
    await this.taskQueue.run()
    await clearEmptyOtherTextFields(ordered, this.answer.regular)
  }

  async checkCoverLetter() {
    this.ensureCoverLetterDetectionObserver()
    this.postCoverLetterDetectionStatus()
  }

  postCoverLetterDetectionStatus() {
    if (!operations.hasCoverLetterUploadSlot()) {
      dom.postCoverLetterStatus("")
      return
    }
    dom.postCoverLetterStatus(
      operations.isCoverLetterRequired() ? "required" : "optional",
    )
  }

  registerCoverLetterProgress() {
    if (!operations.hasCoverLetterUploadSlot()) return null
    const required = operations.isCoverLetterRequired()
    this.progressTracker.updateFieldRequiredStatus({
      label: "Cover Letter",
      required,
      type: "file",
    })
    return required
  }

  ensureCoverLetterDetectionObserver() {
    if (this.coverLetterDetectionObserver || !document.body) return
    this.coverLetterDetectionObserver = new MutationObserver(() => {
      if (this.coverLetterDetectionTimer) {
        clearTimeout(this.coverLetterDetectionTimer)
      }
      this.coverLetterDetectionTimer = setTimeout(() => {
        this.postCoverLetterDetectionStatus()
      }, 500)
    })
    this.coverLetterDetectionObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class", "aria-hidden"],
    })
  }

  async handleResumeUpload() {
    const state = operations.getResumeUploadState()
    if (!state.hasSection) {
      return {
        hasSection: false,
        newUpload: false,
        uploaded: false,
        parserDetected: false,
        parserReady: true,
      }
    }

    this.progressTracker.updateFieldRequiredStatus({
      label: operations.BRASSRING_RESUME_LABEL,
      required: true,
      type: "file",
    })

    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress(operations.BRASSRING_RESUME_LABEL)
      return {
        hasSection: true,
        newUpload: false,
        uploaded: false,
        parserDetected: false,
        parserReady: true,
      }
    }

    if (state.uploaded) {
      this.progressTracker.updateFilledProgress(operations.BRASSRING_RESUME_LABEL)
      return {
        hasSection: true,
        newUpload: false,
        uploaded: true,
        parserDetected: false,
        parserReady: true,
      }
    }

    if (!state.canUpload) {
      this.progressTracker.updateMissedProgress(operations.BRASSRING_RESUME_LABEL)
      return {
        hasSection: true,
        newUpload: false,
        uploaded: false,
        parserDetected: false,
        parserReady: true,
      }
    }

    const uploadResult = await operations.uploadResume(
      this.resumeInfo,
      this.progressTracker.updateFieldRequiredStatus,
      this.progressTracker.updateFilledProgress,
    )
    if (!uploadResult.uploaded) {
      this.progressTracker.updateMissedProgress(operations.BRASSRING_RESUME_LABEL)
    }
    return {
      hasSection: true,
      newUpload: uploadResult.uploaded,
      ...uploadResult,
    }
  }

  async executeSiteSpecificSteps(formRules) {
    const coverLetterRequired = this.registerCoverLetterProgress()
    const missed =
      coverLetterRequired != null &&
      (this.coverLetter?.coverLetterId
        ? !(await operations.uploadCoverLetter(
            this.coverLetter,
            this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress,
          ))
        : coverLetterRequired)
    if (missed && coverLetterRequired) {
      this.progressTracker.updateMissedProgress("Cover Letter")
    }
    await super.executeSiteSpecificSteps(formRules)
  }

  async fillEducationAndEmployment() {
    await this.fillCompositeSection(
      "education",
      this.answer.education || [],
      rules.getEducationRule,
      "Education",
    )
    await this.fillCompositeSection(
      "experience",
      this.answer.workExperience || [],
      rules.getExperienceRule,
      "Employment",
    )
  }

  async fillCompositeSection(kind, records, getRule, progressLabel) {
    const wantedCount = records.length
    if (wantedCount === 0) return

    const ensuredCount = await operations.ensureSectionCount(kind, wantedCount)
    const availableWithoutOpen =
      ensuredCount === 0
        ? this.countAvailableCompositeRules(getRule, wantedCount)
        : 0
    if (ensuredCount === 0 && availableWithoutOpen === 0) return

    const fillCount = Math.min(
      records.length,
      ensuredCount || availableWithoutOpen,
    )
    const skipOpen = ensuredCount === 0
    const indices = skipOpen
      ? Array.from({ length: fillCount }, (_, index) => index)
      : Array.from({ length: fillCount }, (_, index) => fillCount - 1 - index)

    const reporter = sectionResults.createSequentialSectionResultReporter(
      kind === "education" ? "education" : "employment",
      this.progressTracker,
      progressLabel,
    )
    let registered = false
    let skipped = false

    try {
      for (const index of indices) {
        if (!skipOpen) await operations.openSectionForEdit(kind, index)
        const rule = getRule(index)
        if (!rule?.children?.length) continue

        if (!registered) {
          this.progressTracker.updateFieldRequiredStatus({
            label: progressLabel,
            required: !!rule.required,
            type: kind === "education" ? "education" : "employment",
          })
          registered = true
        }

        const callbacks = {
          ...reporter.forRecord(index, [rule]),
          onSkipped: () => {
            skipped = true
          },
        }
        const ops =
          kind === "education"
            ? answerMethods.getEducationOperations(
                [rule],
                [records[index]],
                this.operationConfig,
                undefined,
                callbacks,
                { keepCurrentFieldOnExit: true },
              )
            : answerMethods.getEmploymentOperations(
                [rule],
                [records[index]],
                this.operationConfig,
                undefined,
                callbacks,
                { keepCurrentFieldOnExit: true },
              )

        for (const op of ops) this.taskQueue.add(op)
        await this.taskQueue.run()
        if (skipped) break
        if (!skipOpen) {
          await operations.saveSection(kind, index)
          reporter.clearRecordFocus(index)
        }
      }
    } finally {
      cancellation.updateCurrentField(null)
    }

    if (skipped) {
      this.progressTracker.updateMissedProgress(progressLabel)
      return
    }
    this.progressTracker.updateFilledProgress(progressLabel)
  }

  countAvailableCompositeRules(getRule, maxCount) {
    let count = 0
    for (let index = 0; index < maxCount; index++) {
      const rule = getRule(index)
      if (!rule?.children?.length) break
      count += 1
    }
    return count
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  getSubmitTrackingScopeKey() {
    return buildSubmitTrackingScopeKey()
  }

  resolveDelegatedSubmitButton(target) {
    const button = target.closest(
      "button, input[type='submit'], input[type='button'], a",
    )
    return button && this.isTrackedNavigationButton(button) ? button : null
  }

  isTrackedNavigationButton(el) {
    if (!this.isVisibleNavigationButton(el)) return false
    const text = this.getNavigationButtonText(el)
    const id = el.id.toLowerCase()
    const ngClick = (
      el.getAttribute("ng-click") ||
      el.getAttribute("data-ng-click") ||
      ""
    ).toLowerCase()
    if (
      id === "saveasdraft" ||
      text.includes("save and finish later") ||
      text.includes("finish later") ||
      text.includes("draft")
    ) {
      return false
    }
    return (
      id === "shownext" ||
      id === "showstart" ||
      ngClick.includes("gonext") ||
      ngClick.includes("gostart") ||
      ngClick.includes("submit") ||
      text.includes("save and continue") ||
      text.includes("let's get started") ||
      text.includes("submit") ||
      text === "next" ||
      text === "continue" ||
      text === "apply" ||
      text === "submit application"
    )
  }

  isVisibleNavigationButton(el) {
    const style = window.getComputedStyle(el)
    return (
      style.display !== "none" &&
      style.visibility !== "hidden" &&
      el.getAttribute("aria-hidden") !== "true" &&
      !el.disabled
    )
  }

  getNavigationButtonText(el) {
    return (el.textContent || el.value || el.getAttribute("aria-label") || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
  }

  getSubmitButtonSelector() {
    return `//*[self::button or self::input or self::a][contains(translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'submit') or contains(translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'submit') or contains(translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'save and continue') or contains(translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'save and continue') or contains(translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "let's get started") or contains(translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "let's get started") or translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'next' or translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'next' or translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'continue' or translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'continue' or translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'apply' or translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'apply' or translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'submit application' or translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'submit application']`
  }

  async getAutofillSnapshot() {
    return injectCountryIntoSnapshot(
      {
        ...(await rules.getFormSnapshot()),
        ...operations.getUploadSnapshotValues(),
      },
      this.answer,
    )
  }

  async getSubmitSnapshot() {
    return injectCountryIntoSnapshot(
      {
        ...(await rules.getFormSnapshot()),
        ...operations.getUploadSnapshotValues(),
      },
      this.answer,
    )
  }

  submitApplication() {
    operations.submitApplication()
  }

  constructor(...args) {
    super(...args)
    this.currentRunCountryCommitted = false
    this.formatAnswer = brassringAnswer.formatAnswer
  }
}
