// @ts-nocheck
/**
 * Comeet ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and comeet/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "comeet"
 */

import { BaseFiller } from "./base-filler.ts"
import * as autofillAnswerPairTracking from "./autofill-answer-pair-tracking.ts"
import * as enums from "../../core/enums.js"
import * as observer from "../methods/observer.js"
import * as dom from "../methods/dom.js"
import * as iframeEnums from "../../enums.js"
import * as operations from "./comeet/operations.ts"
import * as phoneCountryCode from "./comeet/phone-country-code.ts"
import * as rules from "./comeet/rules.ts"
import * as urlStore from "../../store/url.js"
import * as track from "../methods/track.js"
import * as stringUtils from "../../utils/string.ts"
import * as lodash from "lodash-es"

export class Comeet extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.isFillingForm = false
    this.comeetSubmitTrackingAbortController = null
  }

  sendCompleteMessageToParent() {
    try {
      const fieldStatus = this.progressTracker?.fieldStatus
      window.top?.postMessage(
        stringUtils.cleanObject({
          type: enums.MESSAGE_EVENTS.autoFillResultFromIframe,
          data: {
            missingFields: fieldStatus?.missingFields ?? [],
            filledFields: fieldStatus?.filledFields ?? [],
            fieldRequiredStatus: (
              fieldStatus?.fieldRequiredStatus ?? []
            ).map((item) => lodash.pick(item, ["label", "required"])),
          },
        }),
        { targetOrigin: "*" },
      )
    } catch (error) {
      console.warn("[Comeet] sendCompleteMessageToParent failed", error)
    }
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const text = value?.[0]
        if (!text) return
        const countryCode = phoneCountryCode.getComeetPhoneCountryCodeForRule(
          this.answer,
          rule,
        )
        return operations.fillInputTextField(
          rule.$input,
          String(text ?? ""),
          countryCode,
          rule.label,
        )
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        rule.label === "Phone Country Code"
          ? operations.fillPhoneCountryCode(
              rule.$input,
              String(value?.[0] ?? ""),
            )
          : operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupFiled(rule, value),
    }
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "comeet"
  }

  async getAutofillSnapshot() {
    return await rules.getFormSnapshot(document)
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot(document)
  }

  submitApplication() {
    document.querySelector('button.applyButton[ng-click="apply()"]')
  }

  async doFillForm(forceRefetch = false) {
    if (!rules.isRunningInComeetIframe()) {
      return await new Promise((resolve) => {
        const timeoutMs = 10000
        const startedAt = Date.now()
        const cleanup = () => {
          window.removeEventListener("message", onMessage)
          clearTimeout(timeoutId)
        }
        const finish = (result) => {
          cleanup()
          resolve(
            result ??
              this.progressTracker?.generateFinalProgress?.() ?? {
                fieldRequiredStatus: [],
                filledFields: [],
                missingFields: [],
              },
          )
        }
        const onMessage = (event) => {
          if (
            event?.data?.type ===
            enums.MESSAGE_EVENTS.autoFillResultFromIframe
          ) {
            finish(event.data.data)
            return
          }
          if (
            event?.data?.type ===
            enums.MESSAGE_EVENTS.autoFillCompleteFromIframe
          ) {
            finish()
            return
          }
        }
        window.addEventListener("message", onMessage)
        const timeoutId = window.setTimeout(() => {
          console.warn("[Comeet] parent fillForm wait timeout", {
            waitedMs: Date.now() - startedAt,
          })
          finish()
        }, timeoutMs)
      })
    }

    if (this.isFillingForm) return await this.finalizeFillForm()

    this.isFillingForm = true
    window.top?.postMessage(
      stringUtils.cleanObject({
        type: enums.MESSAGE_EVENTS.agentStartFillingFields,
      }),
      { targetOrigin: "*" },
    )

    try {
      await this.initializeFillForm()
      const formRules = await this.extractFormRules()
      this.progressTracker.setFieldsRequiredStatus(formRules)
      await this.handleResumeUpload()
      const answers = await this.fetchFormAnswers(formRules, forceRefetch)
      if (typeof answers === "string") {
        this.isFillingForm = false
        this.sendCompleteMessageToParent()
        return answers
      }
      await this.fillRegularFields(formRules)
      await this.executeSiteSpecificSteps(formRules)
      return await this.finalizeFillForm()
    } catch (error) {
      this.isFillingForm = false
      this.sendCompleteMessageToParent()
      throw error
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

  async checkCoverLetter() {
    if (!rules.isRunningInComeetIframe()) {
      const ready = await observer.waitForCondition(
        () => {
          const wrapper = document.querySelector("#applyFormWrapper")
          const iframe = wrapper?.querySelector(
            'iframe[title="Job Application form"]',
          )
          return !!wrapper && !!iframe
        },
        {
          timeout: 10000,
          interval: 100,
          observeTarget: document.body,
        },
      )
      if (!ready) {
        dom.postCoverLetterStatus("")
        return
      }

      const iframe = document.querySelector(
        '#applyFormWrapper iframe[title="Job Application form"]',
      )
      if (!iframe?.contentWindow) {
        dom.postCoverLetterStatus("")
        return
      }

      await new Promise((resolve) => {
        let settled = false
        const cleanup = () => {
          settled = true
          window.removeEventListener("message", onMessage)
          iframe.removeEventListener("load", onLoad)
          clearInterval(intervalId)
          clearTimeout(timeoutId)
        }
        const finish = (postEmpty = false) => {
          if (settled) return
          cleanup()
          if (postEmpty) dom.postCoverLetterStatus("")
          resolve()
        }
        const ping = () => {
          iframe.contentWindow?.postMessage(
            {
              type: iframeEnums.IFRAME_EVENTS.CHECK_IFRAME_COVER_LETTER,
              data: { timestamp: Date.now() },
              url: iframe.src,
            },
            "*",
          )
        }
        const onMessage = (event) => {
          if (
            event.source === iframe.contentWindow &&
            event.data?.type === enums.MESSAGE_EVENTS.agentCheckCoverLetter
          ) {
            finish()
          }
        }
        const onLoad = () => {
          ping()
        }
        window.addEventListener("message", onMessage)
        iframe.addEventListener("load", onLoad)
        ping()
        const intervalId = window.setInterval(() => {
          ping()
        }, 400)
        const timeoutId = window.setTimeout(() => {
          finish(true)
        }, 8000)
      })
      return
    }

    operations.checkCoverLetter()
  }

  async executeSiteSpecificSteps(formRules) {
    const coverLetterField = operations.getComeetCoverLetterRequiredField()
    if (coverLetterField) {
      this.progressTracker.updateFieldRequiredStatus(coverLetterField)
      const required = coverLetterField.required === true
      if (
        this.coverLetter?.coverLetterId &&
        this.coverLetter?.coverLetterName
      ) {
        this.taskQueue.add(async () => {
          const uploaded = await operations.uploadCoverLetter(
            {
              coverLetterId: this.coverLetter.coverLetterId,
              coverLetterName: this.coverLetter.coverLetterName,
              markdown: this.coverLetter?.markdown,
              useLegacyDownload: this.coverLetter?.useLegacyDownload,
            },
            this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress,
          )
          if (!uploaded && required) {
            this.progressTracker.updateMissedProgress("Cover Letter")
          }
        })
      } else if (required) {
        this.progressTracker.updateMissedProgress("Cover Letter")
      }
    }

    if (this.taskQueue.queue.length > 0) await this.taskQueue.run()

    this.comeetSubmitTrackingAbortController?.abort()
    this.comeetSubmitTrackingAbortController = new AbortController()

    const applyButton = document.querySelector(
      'button.applyButton[ng-click="apply()"]',
    )
    if (!applyButton) return

    const autofillSnapshot = await this.getAutofillSnapshot(formRules)
    const additionalAutofillData =
      this.getAdditionalAutofillSnapshotData?.(formRules) || {}

    applyButton.addEventListener(
      "click",
      async () => {
        const submitSnapshot = await this.getSubmitSnapshot()
        const additionalSubmitData =
          this.getAdditionalSubmitSnapshotData?.() || {}
        const falcon =
          autofillAnswerPairTracking.buildFalconAutofillAnswerPairData(
            this.answer,
          )
        autofillAnswerPairTracking.sendAutofillAnswerPairEvent({
          formUrl: urlStore.useUrlStore.getState().currentTabUrl,
          autofillSnapshot,
          submitSnapshot,
          additionalAutofillData,
          additionalSubmitData,
          ...(falcon
            ? {
                extraData: {
                  falcon,
                },
              }
            : {}),
          source: "comeet",
        })
      },
      {
        signal: this.comeetSubmitTrackingAbortController.signal,
      },
    )
  }

  getAdditionalAutofillSnapshotData() {
    return rules.getEduAndEmploymentSnapshot() || {}
  }

  getAdditionalSubmitSnapshotData() {
    return rules.getEduAndEmploymentSnapshot() || {}
  }

  async finalizeFillForm() {
    try {
      const originalIds = operations.sanitizeElementIds()
      try {
        track.postStatus(
          "filling",
          this.progressTracker.fieldStatus,
          this.timeTrace,
        )
        this.sendCompleteMessageToParent()
        const progress = this.progressTracker.generateFinalProgress()
        this.isFillingForm = false
        return progress
      } finally {
        operations.restoreElementIds(originalIds)
      }
    } catch (error) {
      this.isFillingForm = false
      throw error
    }
  }
}
