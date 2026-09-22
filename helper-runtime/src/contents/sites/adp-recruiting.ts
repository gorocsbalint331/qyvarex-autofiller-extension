// @ts-nocheck
/**
 * ADP Recruiting ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and adp-recruiting/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "adp-recruiting"
 */

import * as sectionResults from "../methods/section-results.js"
import * as cancellation from "../methods/cancellation.js"
import * as answerMethods from "../methods/answer.js"
import * as dom from "../methods/dom.js"
import * as track from "../methods/track.js"
import * as enums from "../../core/enums.js"
import * as httpEnums from "../../enums/http.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as stringUtils from "../../utils/string.ts"
import * as delay from "../../utils/delay.js"
import { BaseFiller } from "./base-filler.ts"
import * as recruitingAnswer from "./answer.ts"
import * as operations from "./operations.ts"
import * as rules from "./rules.ts"

function isSubmitApplicationControl(el) {
  if (!(el instanceof Element)) return false
  const control = el.closest(
    "button, input[type='submit'], input[type='button'], [role='button']",
  )
  if (!control) return false
  const text = (control.textContent || "").replace(/\s+/g, " ").trim()
  return /submit\s+application/i.test(text) || /^submit\b/i.test(text)
}

function resolveRecruitingPagerTarget(target) {
  if (!(target instanceof Element) || isSubmitApplicationControl(target)) {
    return null
  }

  const appGo = target.closest("div.appGo.center")
  if (appGo) return appGo

  const dualNext = target.closest(
    `[data-dojo-attach-point="${rules.ADP_RECRUITING_PAGER_NEXT_ATTACH}"]`,
  )
  if (dualNext) return dualNext

  const pagerNext = target.closest('[data-dojo-attach-point="thePagerNext"]')
  if (pagerNext) return pagerNext

  let node = target
  while (node) {
    const attach = node.getAttribute("data-dojo-attach-point") || ""
    if (/pager/i.test(attach) && /next/i.test(attach)) return node
    node = node.parentElement
  }

  const twoColumn = target.closest(".two.column")
  if (twoColumn) {
    const buttons = twoColumn.querySelectorAll("div.appGo.center")
    for (let index = buttons.length - 1; index >= 0; index--) {
      const button = buttons[index]
      if (button.contains(target)) return button
    }
  }

  return null
}

function isDisabledPagerControl(el) {
  if (
    el.getAttribute("aria-disabled") === "true" ||
    el.classList.contains("dijitDisabled")
  ) {
    return true
  }
  if (el.parentElement?.classList.contains("dijitDisabled")) return true
  const style = window.getComputedStyle(el)
  return style.display === "none" || style.visibility === "hidden"
}

class AdpRecruiting extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.recruitingPagerCaptureHandler = null
    this.currentLocation = { country: "", state: "" }
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) => dom.fillInputTextField(rule.$input, value),
        options: { expectArray: false },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => dom.fillCheckBoxesField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          operations.fillCustomSelectField(
            rule?.$input,
            value,
            this.currentLocation,
          ),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (rule, value) => operations.fillRadioGroupField(rule, value),
        options: { expectArray: true },
      },
    }
  }

  async extractFormRules() {
    return await rules.getRules()
  }

  getSiteName() {
    return "adp-recruiting"
  }

  formatAnswer(answer) {
    return recruitingAnswer.formatAnswer(answer)
  }

  async getAutofillSnapshot() {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  async executeSiteSpecificSteps() {}

  isCountryRule(rule) {
    return rule.type === enums.FIELD_TYPE.SELECT && /^country$/i.test(rule.label)
  }

  isStateProvinceRule(rule) {
    if (rule.type !== enums.FIELD_TYPE.SELECT) return false
    const key = rule.label.replace(/[^a-z]/gi, "").toLowerCase()
    return [
      "state",
      "province",
      "stateprovince",
      "provincestate",
      "stateregion",
      "stateterritory",
      "stateprov",
      "stateprovinceterritory",
    ].includes(key)
  }

  getRulesWithoutClientLocationRules(allRules) {
    return allRules.filter(
      (rule) => !this.isCountryRule(rule) && !this.isStateProvinceRule(rule),
    )
  }

  async fillCountryRuleDirectly(allRules, location) {
    const rule = allRules.find((item) => this.isCountryRule(item))
    if (!rule) return false

    const country = operations.normalizeRecruitingCountryValue(location.country)
    if (!country) {
      this.progressTracker.updateMissedProgress(rule.label)
      return false
    }

    const filled = await operations.fillCustomSelectField(
      rule.$input,
      country,
      location,
    )
    if (filled) this.progressTracker.updateFilledProgress(rule.label)
    else this.progressTracker.updateMissedProgress(rule.label)
    return filled
  }

  async fillStateRuleDirectly(allRules, location) {
    const rule = allRules.find((item) => this.isStateProvinceRule(item))
    if (!rule) return false

    const state = location.state.trim()
    if (!state) {
      this.progressTracker.updateMissedProgress(rule.label)
      return false
    }

    const filled = await operations.fillCustomSelectField(
      rule.$input,
      state,
      location,
    )
    if (filled) this.progressTracker.updateFilledProgress(rule.label)
    else this.progressTracker.updateMissedProgress(rule.label)
    return filled
  }

  async uploadResumeOnly() {
    this.progressTracker.setFieldsRequiredStatus([
      { label: "Resume/CV", required: true },
    ])

    let errorCode = null
    this.taskQueue.add(async () => {
      try {
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      } catch (error) {
        if (error instanceof cancellation.CancelledError) throw error
        this.progressTracker.updateMissedProgress("Resume/CV")
        if (
          error instanceof answerMethods.ResumeMissingCodeError ||
          (error instanceof Error &&
            error.message === answerMethods.NO_RESUME_FOUND_ERROR)
        ) {
          errorCode =
            error instanceof answerMethods.ResumeMissingCodeError
              ? error.message
              : httpEnums.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY
          track.sendHttpStatusMessage(errorCode)
          return
        }
        console.error("[ADP Recruiting] resume-only upload failed:", error)
      }
    })
    await this.taskQueue.run()

    if (errorCode) return errorCode

    track.postStatus(
      "filling",
      this.progressTracker.fieldStatus,
      this.timeTrace,
    )
    return this.progressTracker.generateFinalProgress()
  }

  async waitForEnabledAdpRecruitingVsidRaceRule(waitForEthnicityTrigger) {
    const deadline = Date.now() + 1500
    let attempts = 0
    let lastRule = null
    let ethnicityTriggerObserved = !waitForEthnicityTrigger

    while (Date.now() <= deadline) {
      attempts += 1
      if (waitForEthnicityTrigger) {
        ethnicityTriggerObserved =
          rules.isAdpRecruitingVsidRaceRequiredAfterEthnicity()
      }
      if (!ethnicityTriggerObserved) {
        await delay.delay(100)
        continue
      }

      const liveRule = await rules.getEnabledAdpRecruitingVsidRaceRule()
      if (liveRule) {
        lastRule = liveRule
        if (liveRule.options?.length) {
          console.info("[ADP Recruiting][VSID Race] live rule ready", {
            attempts,
            optionCount: liveRule.options.length,
          })
          return liveRule
        }
      }
      await delay.delay(100)
    }

    console.info("[ADP Recruiting][VSID Race] live rule wait ended", {
      attempts,
      ethnicityTriggerObserved,
      raceControlEnabled: !!lastRule,
      optionCount: lastRule?.options?.length ?? 0,
    })
    return lastRule
  }

  async fillDeferredAdpRecruitingVsidRace(
    deferredRaceRules,
    hasVsidRaceDependency,
    forceRefetch,
  ) {
    if (!deferredRaceRules.length && !hasVsidRaceDependency) return

    console.info("[ADP Recruiting][VSID Race] defer dependent rule", {
      deferredRuleCount: deferredRaceRules.length,
      hasVsidRaceDependency,
      initialOptionCounts: deferredRaceRules.map(
        (rule) => rule.options?.length ?? 0,
      ),
    })

    const liveRule = await this.waitForEnabledAdpRecruitingVsidRaceRule(
      hasVsidRaceDependency,
    )
    if (!liveRule) {
      console.info("[ADP Recruiting][VSID Race] not rendered after Ethnicity", {
        deferredRuleCount: deferredRaceRules.length,
      })
      return
    }

    this.progressTracker.updateFieldRequiredStatus(liveRule)
    if (!liveRule.options?.length) {
      console.warn("[ADP Recruiting][VSID Race] enabled control has no options", {
        optionCount: 0,
      })
      this.progressTracker.updateMissedProgress(liveRule.label)
      return
    }

    const answer = await this.requestFormAnswers([liveRule], forceRefetch, {
      updateTimeTrace: false,
    })
    if (!answer || typeof answer === "string") {
      console.warn(
        "[ADP Recruiting][VSID Race] answer request did not return a fillable result",
        { hasErrorCode: typeof answer === "string" },
      )
      this.progressTracker.updateMissedProgress(liveRule.label)
      return
    }

    this.answer.regular = {
      ...this.answer.regular,
      ...answer.regular,
    }
    this.answer.fillDataList = [
      ...(this.answer.fillDataList || []),
      ...(answer.fillDataList || []),
    ]

    const handler = this.operationConfig[liveRule.type]
    if (!handler) {
      console.warn("[ADP Recruiting][VSID Race] no select operation configured")
      this.progressTracker.updateMissedProgress(liveRule.label)
      return
    }

    const filled = await handler(liveRule, this.answer.regular)
    console.info("[ADP Recruiting][VSID Race] fill finished", {
      optionCount: liveRule.options.length,
      filled,
    })
  }

  async doFillForm(forceRefetch) {
    this.resetFalconResponseAccumulator()

    if (this.recruitingPagerCaptureHandler) {
      document.removeEventListener(
        "click",
        this.recruitingPagerCaptureHandler,
        true,
      )
      this.recruitingPagerCaptureHandler = null
    }

    this.timeTrace.rulesParseStartTime = Date.now()
    this.progressTracker.clear()
    this.taskQueue.clear()

    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()

    this.taskQueue.add(async () => {
      await operations.preclickAddButtons()
    })
    await this.taskQueue.run()

    const info = await autofillInfo.useAutofillInfoStore
      .getState()
      .fetchAutofillInfo()
    this.currentLocation = {
      country: String(info?.location?.country ?? "").trim(),
      state: String(info?.location?.state ?? "").trim(),
    }

    const allRules = await rules.getRules()
    const { readyRules, deferredRaceRules } =
      rules.partitionAdpRecruitingVsidRaceRules(allRules)
    const hasVsidRaceDependency = rules.hasAdpRecruitingVsidRaceDependency()

    this.progressTracker.setFieldsRequiredStatus(readyRules)

    if (readyRules.length === 0) {
      if (!this.disableUploadResume && operations.hasResumeUploadInput()) {
        const now = Date.now()
        this.timeTrace.requestStartTime = now
        this.timeTrace.fillStartTime = now
        return await this.uploadResumeOnly()
      }
      return this.progressTracker.generateFinalProgress()
    }

    try {
      if (!this.token) {
        this.token = await answerMethods.getSiteToken()
      }
      this.timeTrace.requestStartTime = Date.now()
      const falconEpoch = this.captureFalconResponseRun()
      const falconAnswer = await answerMethods.getElementRules(
        readyRules,
        "adp-recruiting",
        this.token,
        forceRefetch,
        this.resumeInfo.id,
        this.resumeInfo.tailorId,
      )
      this.recordFalconResponse(falconAnswer, falconEpoch)
      this.answer = recruitingAnswer.formatAnswer(falconAnswer)
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

    const submitText = rules.getSubmitButtonText()
    track.bindSubmitButton(
      submitText,
      this.progressTracker.fieldStatus,
      this.timeTrace,
    )

    await this.fillCountryRuleDirectly(readyRules, this.currentLocation)
    await this.fillStateRuleDirectly(readyRules, this.currentLocation)

    const withoutLocation = this.getRulesWithoutClientLocationRules(readyRules)
    const regularOps = [
      ...answerMethods.getRegularOperations(
        withoutLocation,
        this.answer.regular,
        this.operationConfig,
      ),
    ]
    for (const op of regularOps) this.taskQueue.add(op)
    await this.taskQueue.run()

    await this.fillDeferredAdpRecruitingVsidRace(
      deferredRaceRules,
      hasVsidRaceDependency,
      forceRefetch,
    )

    const educationReporter = sectionResults.createSequentialSectionResultReporter(
      "education",
      this.progressTracker,
      "education",
    )
    let educationSkipped = false
    for (let index = 0; index < this.answer.education.length; index++) {
      const record = this.answer.education[index]
      const eduRules = await rules.getEduRules()
      const eduOps = answerMethods.getEducationOperations(
        eduRules,
        [record],
        this.operationConfig,
        undefined,
        {
          ...educationReporter.forRecord(index, eduRules.slice(0, 1)),
          onSkipped: () => {
            educationSkipped = true
          },
        },
      )
      for (const op of eduOps) this.taskQueue.add(op)
      await this.taskQueue.run()
      if (educationSkipped) break
    }
    if (educationSkipped) {
      this.progressTracker.updateMissedProgress("Education")
    } else if (this.answer.education.length > 0) {
      this.progressTracker.updateFilledProgress("Education")
    }

    const employmentReporter =
      sectionResults.createSequentialSectionResultReporter(
        "employment",
        this.progressTracker,
        "experience",
      )
    let employmentSkipped = false
    for (let index = 0; index < this.answer.workExperience.length; index++) {
      const record = this.answer.workExperience[index]
      const visibleCount = operations.getVisibleEmploymentCount()
      if (index >= visibleCount) {
        this.taskQueue.add(async () => {
          await operations.addSingleEmploymentSection()
        })
        await this.taskQueue.run()
      }

      const expRules = await rules.getExpRules()
      const expOps = answerMethods.getEmploymentOperations(
        expRules,
        [record],
        this.operationConfig,
        undefined,
        {
          ...employmentReporter.forRecord(index, expRules.slice(0, 1)),
          onSkipped: () => {
            employmentSkipped = true
          },
        },
      )
      for (const op of expOps) this.taskQueue.add(op)
      await this.taskQueue.run()
      if (employmentSkipped) break
    }
    if (employmentSkipped) {
      this.progressTracker.updateMissedProgress("Employment")
    } else if (this.answer.workExperience.length > 0) {
      this.progressTracker.updateFilledProgress("Employment")
    }

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

    this.taskQueue.add(() => {})
    await this.taskQueue.run()

    operations.syncFilledTextProgressFromCurrentValues(
      allRules,
      this.progressTracker.fieldStatus,
      this.progressTracker.updateFilledProgress,
    )

    const snapshot = rules.getFormSnapshot()
    this.recruitingPagerCaptureHandler = (event) => {
      const pager = resolveRecruitingPagerTarget(event.target)
      if (pager?.isConnected && !isDisabledPagerControl(pager)) {
        rules.submitHandler(snapshot, this.answer)
      }
    }
    document.addEventListener(
      "click",
      this.recruitingPagerCaptureHandler,
      true,
    )

    track.postStatus(
      "filling",
      this.progressTracker.fieldStatus,
      this.timeTrace,
    )
    window.top?.postMessage(
      stringUtils.cleanObject({
        type: enums.MESSAGE_EVENTS.autoFillResultFromIframe,
        data: this.progressTracker.fieldStatus,
      }),
      { targetOrigin: "*" },
    )
    return this.progressTracker.generateFinalProgress()
  }

  submitApplication() {}
}

export { AdpRecruiting }
