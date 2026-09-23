// @ts-nocheck
/**
 * TeamTailor ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and teamtailor/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "teamtailor"
 */

import { BaseFiller } from "./base-filler.ts"
import * as dom from "../methods/dom.ts"
import * as autofillAnswerPairTracking from "./autofill-answer-pair-tracking.ts"
import * as enums from "../../core/enums.js"
import * as phoneCountryCode from "../../core/phone-country-code.js"
import * as operations from "./teamtailor/operations.ts"
import * as teamtailorAnswer from "./teamtailor/answer.ts"
import * as rules from "./teamtailor/rules.ts"
import * as xpath from "../../core/xpath.js"
import * as urlStore from "../../store/url.js"

export class TeamTailor extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.coverLetterStatusObserver = null
    this.coverLetterStatusTimer = null
    this.lastCoverLetterStatus = ""
    this.formatAnswer = (answer) => teamtailorAnswer.formatAnswer(answer)
  }

  async checkCoverLetter() {
    this.bindCoverLetterStatusObserver()
    await this.syncCoverLetterStatus(true)
  }

  getApplicationFormFrame() {
    return document.querySelector(rules.TEAMTAILOR_APPLICATION_FORM_SELECTOR)
  }

  async syncCoverLetterStatus(force = false) {
    await rules.waitForApplicationFormReady()
    const status = rules.getCoverLetterStatus()
    if (force || status !== this.lastCoverLetterStatus) {
      this.lastCoverLetterStatus = status
      dom.postCoverLetterStatus(status)
    }
  }

  scheduleCoverLetterStatusSync(force = false) {
    if (this.coverLetterStatusTimer) {
      window.clearTimeout(this.coverLetterStatusTimer)
    }
    this.coverLetterStatusTimer = window.setTimeout(() => {
      this.syncCoverLetterStatus(force)
    }, 150)
  }

  isRelevantCoverLetterMutation(mutations) {
    const frame = this.getApplicationFormFrame()
    return mutations.some((mutation) => {
      const nodes = [
        mutation.target,
        ...mutation.addedNodes,
        ...mutation.removedNodes,
      ]
      return nodes.some(
        (node) =>
          node instanceof Element &&
          (!!(
            node.matches(rules.TEAMTAILOR_APPLICATION_FORM_SELECTOR) ||
            node.querySelector(rules.TEAMTAILOR_APPLICATION_FORM_SELECTOR)
          ) ||
            (!!frame && frame.contains(node))),
      )
    })
  }

  bindCoverLetterStatusObserver() {
    if (this.coverLetterStatusObserver) {
      this.scheduleCoverLetterStatusSync(true)
      return
    }
    const root = document.body || document.documentElement
    if (!root) {
      this.syncCoverLetterStatus(true)
      return
    }
    this.coverLetterStatusObserver = new MutationObserver((mutations) => {
      if (!this.isRelevantCoverLetterMutation(mutations)) return
      const frame = this.getApplicationFormFrame()
      if (frame) {
        frame.scrollIntoView({
          block: "center",
          inline: "nearest",
        })
      }
      this.scheduleCoverLetterStatusSync()
    })
    this.coverLetterStatusObserver.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [
        "loading",
        "src",
        "class",
        "style",
        "hidden",
        "aria-hidden",
      ],
    })
    this.scheduleCoverLetterStatusSync(true)
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, values) => {
        const value = values?.[0]
        if (value) {
          return operations.fillInputTextField(
            rule.$input,
            String(value ?? ""),
            phoneCountryCode.resolvePhoneCountryCodeAnswer(this.answer),
          )
        }
      },
      [enums.FIELD_TYPE.SELECT]: (rule, values) =>
        operations.fillSelectField(rule, values),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, values) =>
        operations.fillCheckboxField(rule, values),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, values) =>
        operations.fillRadioGroupFiled(rule, values),
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

  async executeSiteSpecificSteps(formRules) {
    await operations.checkAllConsentCheckboxes()
    const autofillSnapshot = rules.getFormSnapshot()
    const submitButton = xpath.getFirstOrderedNodeSafe(
      './/input[@type="submit"]',
    )
    if (submitButton) {
      const onSubmitClick = function () {
        const submitSnapshot = rules.getFormSnapshot()
        autofillAnswerPairTracking.sendAutofillAnswerPairEvent({
          formUrl: urlStore.useUrlStore.getState().currentTabUrl,
          autofillSnapshot,
          submitSnapshot,
          source: "teamtailor",
        })
      }
      submitButton.addEventListener("click", onSubmitClick)
    }
    await super.executeSiteSpecificSteps(formRules)
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "teamtailor"
  }

  async getAutofillSnapshot(_formRules) {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  submitApplication() {
    const xpathExpr = './input[@type="submit"]'
    const button = xpath.getFirstOrderedNode(xpathExpr)
    if (button) button?.click()
  }
}
