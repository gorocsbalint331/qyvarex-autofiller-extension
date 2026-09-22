// @ts-nocheck
/**
 * Adobe Careers ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and adobe/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "adobe" (careers.adobe.com apply flow)
 */

import * as messaging from "@plasmohq/messaging"
import * as filler from "../shared/filler.js"
import * as cancellation from "../methods/cancellation.js"
import * as answerMethods from "../methods/answer.js"
import * as rulesMethods from "../methods/rules.js"
import * as track from "../methods/track.js"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as coreUtils from "../../core/utils.js"
import * as xpath from "../../core/xpath.js"
import * as delay from "../../utils/delay.js"
import * as stringUtils from "../../utils/string.ts"
import * as falconAccumulator from "./falcon-response-accumulator.ts"
import * as adobeAnswer from "./answer.ts"
import * as operations from "./operations.ts"
import * as adobeRules from "./rules.ts"
import * as adobeStyle from "./style.ts"
import * as trackingSnapshot from "./tracking-snapshot.ts"

class Adobe {
  constructor() {
    this.timeTrace = {
      rulesParseStartTime: 0,
      requestStartTime: 0,
      fillStartTime: 0,
    }
    this.lastAutofillTrackingBaseline = {
      formSnapshot: {},
      additionalFormSnapshotData: {},
    }
    this.submitSnapshotAbortController = null
    this.falconResponseAccumulator =
      new falconAccumulator.FalconResponseAccumulator()

    adobeStyle.injectAdobeApplyPageLayoutFix()

    this.progressTracker = new filler.ProgressTracker()
    this.taskQueue = new filler.TaskQueue()
    this.fillCancel = cancellation.createCancellation(
      () => this.taskQueue.clear(),
      this.progressTracker.setCurrentField,
    )
    this.cancel = this.fillCancel.cancel
    this.skip = this.fillCancel.skip

    this.createOperationHandler = answerMethods.createOperationHandlerFactory(
      this.progressTracker.updateFilledProgress,
      this.progressTracker.updateMissedProgress,
    )

    this.operationConfig = {
      [enums.FIELD_TYPE.TEXT]: this.createOperationHandler((rule, value) =>
        operations.fillInputTextField(rule.$input, value),
      ),
      [enums.FIELD_TYPE.DATE]: this.createOperationHandler((rule, value) =>
        operations.fillDateField(rule.$input, value),
      ),
      [enums.FIELD_TYPE.SELECT]: this.createOperationHandler(
        (rule, value) => operations.fillSelectField(rule, value),
        { expectArray: true },
      ),
      [enums.FIELD_TYPE.CHECKBOX]: this.createOperationHandler(
        (rule, value) => operations.fillCheckboxField(rule, value),
        { expectArray: true },
      ),
      [enums.FIELD_TYPE.RADIOGROUP]: this.createOperationHandler(
        (rule, value) => operations.fillRadioGroupField(rule, value),
        { expectArray: true },
      ),
    }
  }

  async fillForm(forceRefetch = false) {
    return this.fillCancel.wrap(() => this.doFillForm(forceRefetch))
  }

  async doFillForm(forceRefetch) {
    this.resetFalconResponseAccumulator()
    this.timeTrace.rulesParseStartTime = Date.now()
    this.progressTracker.clear()
    this.taskQueue.clear()

    const allRules = adobeRules.extractRules()
    this.progressTracker.setFieldsRequiredStatus(allRules)

    try {
      if (!this.token) {
        let url = coreUtils.removeEndStrings(window.location.href)
        try {
          const parsed = new URL(url)
          if (parsed.hostname.includes("adobe.com")) {
            parsed.searchParams.delete("stepname")
            parsed.searchParams.delete("step")
            url = parsed.toString()
          }
        } catch (error) {
          console.error("Error parsing URL:", error)
        }
        this.token = await messaging.sendToBackground({
          name: "getSiteToken",
          body: { url },
        })
      }

      this.timeTrace.requestStartTime = Date.now()
      const falconEpoch = this.captureFalconResponseRun()
      const falconAnswer = await answerMethods.getElementRules(
        rulesMethods.filterRulesByLabel(allRules, [
          "Country",
          "Country / Territory",
          "Today’s Date",
        ]),
        "adobe",
        this.token,
        forceRefetch,
        this.resumeInfo.id,
        this.resumeInfo.tailorId,
      )
      this.recordFalconResponse(falconAnswer, falconEpoch)
      this.answer = adobeAnswer.formatAnswer(falconAnswer)
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
    this.bindAdobeSnapshotTrackingButtons()

    const eduRules = adobeRules.getEduRules()
    coreDom.setSectionResultFocusRules("education", eduRules)

    const educationOps = answerMethods.getEducationOperations(
      eduRules,
      this.answer.education || [],
      this.operationConfig,
      undefined,
      {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onCompleted: () => {
          if (eduRules.length > 0) {
            this.progressTracker.updateFilledProgress("Education")
          }
        },
        onSkipped: () => this.progressTracker.updateMissedProgress("Education"),
      },
    )

    const pageTitle = adobeRules.getCurrencyPageField()
    const isMyInformationPage = !pageTitle || pageTitle.includes("My Information")

    const regularRules = allRules.filter(
      (rule) =>
        rule.type !== enums.FIELD_TYPE.EDUCATION &&
        rule.type !== enums.FIELD_TYPE.EMPLOYMENT,
    )

    // On My Information, fill radios/selects before free-text fields.
    let orderedRegular = regularRules
    if (isMyInformationPage) {
      const radios = regularRules.filter(
        (rule) => rule.type === enums.FIELD_TYPE.RADIOGROUP,
      )
      const selects = regularRules.filter(
        (rule) => rule.type === enums.FIELD_TYPE.SELECT,
      )
      const rest = regularRules.filter(
        (rule) =>
          rule.type !== enums.FIELD_TYPE.RADIOGROUP &&
          rule.type !== enums.FIELD_TYPE.SELECT,
      )
      orderedRegular = [...radios, ...selects, ...rest]
    }

    const ops = [
      ...answerMethods.getRegularOperations(
        orderedRegular,
        this.answer.regular,
        this.operationConfig,
      ),
      ...educationOps,
    ]

    for (let index = 0; index < ops.length; index++) {
      const op = ops[index]
      this.taskQueue.add(async () => {
        await op()
        if (index < ops.length - 1) {
          await delay.delay(200 + 200 * Math.random())
        }
      })
    }

    await this.taskQueue.run()

    this.progressTracker.updateFilledProgress("Country")
    this.progressTracker.updateFilledProgress("Country Phone Code")
    this.progressTracker.updateFilledProgress("Employment")
    this.progressTracker.updateFilledProgress("Today’s Date")

    await delay.delay(300)
    this.taskQueue.add(operations.fillAgreementCheckbox)
    await this.taskQueue.run()

    if (!this.disableUploadResume && isMyInformationPage) {
      this.taskQueue.add(async () => {
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    } else {
      this.progressTracker.updateMissedProgress("Resume/CV")
    }

    await this.taskQueue.run()
    await this.scrollToLastFilledSection(orderedRegular)

    this.lastAutofillTrackingBaseline =
      trackingSnapshot.buildAdobeAutofillTrackingBaseline(
        await trackingSnapshot.waitForSettledAdobeTrackingSnapshot(),
        this.getFalconResponseAnswerForTracking(),
      )

    const { formSnapshot, additionalFormSnapshotData } =
      this.lastAutofillTrackingBaseline

    track.postStatus("filling", this.progressTracker.fieldStatus, this.timeTrace)

    const progress = this.progressTracker.generateFinalProgress()
    window.top?.postMessage(
      stringUtils.cleanObject({
        type: enums.MESSAGE_EVENTS.autoFillResultFromIframe,
        data: stringUtils.cleanObject({
          ...progress,
          formSnapshot: {
            ...formSnapshot,
            ...additionalFormSnapshotData,
          },
        }),
      }),
      { targetOrigin: "*" },
    )
    return progress
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNodeSafe(
      '//button[contains(@type, "submit")] | //button[contains(@class, "submit")]',
      document.body,
    )
    if (button) button.click()
  }

  cancelAutoFill() {
    this.submitSnapshotAbortController?.abort()
    this.submitSnapshotAbortController = null
    this.taskQueue.clear()
  }

  bindAdobeSnapshotTrackingButtons() {
    this.submitSnapshotAbortController?.abort()
    this.submitSnapshotAbortController = trackingSnapshot.bindAdobeSnapshotTracking({
      getAnswer: () => this.getFalconResponseAnswerForTracking(),
      getAutofillSnapshot: () => this.lastAutofillTrackingBaseline,
      setAutofillSnapshot: (snapshot) => {
        this.lastAutofillTrackingBaseline = snapshot
      },
      fieldStatus: this.progressTracker.fieldStatus,
      timeTrace: this.timeTrace,
    })
  }

  resetFalconResponseAccumulator() {
    this.falconResponseAccumulator.reset()
  }

  captureFalconResponseRun() {
    return this.falconResponseAccumulator.captureEpoch()
  }

  recordFalconResponse(response, epoch) {
    this.falconResponseAccumulator.record(response, epoch)
  }

  getFalconResponseAnswerForTracking() {
    return this.falconResponseAccumulator.current()
  }

  async scrollToLastFilledSection(rules) {
    let lastFilled = null

    for (let index = rules.length - 1; index >= 0; index--) {
      const rule = rules[index]
      if (!rule.$input && !rule.$label) continue

      if (rule.$input) {
        const filled = rule.$input.value || rule.$input.checked
        if (filled) {
          lastFilled = rule
          break
        }
      }

      if (
        rule.type === enums.FIELD_TYPE.CHECKBOX ||
        rule.type === enums.FIELD_TYPE.RADIOGROUP
      ) {
        const boxes = rule.$checkboxs || []
        if (boxes.some((box) => box.checked)) {
          lastFilled = rule
          break
        }
      }
    }

    if (!lastFilled) return

    const anchor = lastFilled.$input || lastFilled.$label
    if (!anchor) return

    const section = anchor.closest(
      'div.form-group, fieldset, div[class*="field-"]',
    )
    await delay.delay(200)
    ;(section || anchor).scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }
}

export { Adobe }
