// @ts-nocheck
/**
 * Paycom Online v3 ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and paycomonline-v3/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "paycomonline"
 */

import * as answerMethods from "../methods/answer.js"
import * as dom from "../methods/dom.js"
import * as rulesMethods from "../methods/rules.js"
import * as track from "../methods/track.js"
import { BaseFiller } from "./base-filler.ts"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as urlStore from "../../store/url.js"
import * as starRating from "../../utils/starRating.js"
import * as paycomAnswer from "./paycomonline-v3/answer.ts"
import * as operations from "./paycomonline-v3/operations.ts"
import * as rules from "./paycomonline-v3/rules.ts"
import * as startApplicationDialog from "./paycomonline-v3/start-application-dialog.ts"
import * as submitOutcome from "./paycomonline-v3/submit-outcome.ts"
import * as submitTracking from "./paycomonline-v3/submit-tracking.ts"

const SITE_NAME = "paycomonline"

class PaycomOnline extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          operations.fillInputTextField(rule.$input, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => operations.fillCheckBoxesField(rule, value),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) => operations.fillPaycomSelect(rule, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: (rule, value) => operations.fillPaycomDateGroup(rule, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.LISTBOX]: {
        handler: (rule, value) =>
          operations.isPaycomPhoneCountryCodeButton(rule.$input)
            ? operations.fillPaycomPhoneCountryCode(
                rule,
                value,
                this.answer?.country,
              )
            : operations.fillPaycomListbox(rule, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (rule, value) =>
          operations.fillPaycomRadioGroup(rule, value),
        options: {
          expectArray: false,
        },
      },
    }
  }

  getSiteName() {
    return SITE_NAME
  }

  async extractFormRules() {
    return await rules.getRules()
  }

  formatAnswer(answer) {
    return paycomAnswer.normalizePaycomAnswer(answer)
  }

  getSubmitButtonSelector() {
    return ".//button[contains(., 'Submit Application') or contains(., 'Sign and Submit') or contains(., 'Submit') or contains(., 'Next')]"
  }

  async getAutofillSnapshot(_rules) {
    return await rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot()
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNodeSafe(
      this.getSubmitButtonSelector(),
    )
    button?.click()
  }

  async doFillForm(skipFetch = false) {
    await this.initializeFillForm()
    const activateButton = (el) =>
      dom.triggerEvents(el, ["mousedown", "mouseup", "click"])
    const resumePrefill =
      await startApplicationDialog.dismissPaycomResumeParserDialog(document, {
        timeoutMs: 0,
        activateButton,
      })
    const startResult =
      await startApplicationDialog.dismissPaycomStartApplicationDialog(
        document,
        {
          activateButton,
        },
      )
    const resumePostStart =
      startResult === "closed"
        ? await startApplicationDialog.dismissPaycomResumeParserDialog(
            document,
            {
              activateButton,
            },
          )
        : "not-found"

    if (resumePrefill !== "not-found") {
      console.info("[Paycom-v3][resume-parser-dialog] prefill result", {
        result: resumePrefill,
        action: "attach-only",
      })
    }
    if (startResult !== "not-found") {
      const log =
        startResult === "closed" ? console.info : console.warn
      log("[Paycom-v3][start-application-dialog] prefill result", {
        result: startResult,
        action: "apply-manually",
      })
    }
    if (resumePostStart !== "not-found") {
      const log =
        resumePostStart === "closed" ? console.info : console.warn
      log("[Paycom-v3][resume-parser-dialog] post-start result", {
        result: resumePostStart,
        action: "attach-only",
      })
    }

    this.currentRunCountry = ""
    const info =
      await autofillInfo.useAutofillInfoStore.getState().fetchAutofillInfo()
    this.currentRunCountry = info?.location?.country ?? ""
    ;(await operations.fillPaycomGeographicCountry(this.currentRunCountry)) &&
      (await operations.waitForDOMStable())

    let formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    const answersOrError = await this.fetchFormAnswers(formRules, skipFetch)
    if (typeof answersOrError === "string") return answersOrError

    this.taskQueue.add(() => operations.expandForm(this.answer))
    await this.taskQueue.run()
    this.taskQueue.clear()
    formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    ;(await operations.fillPaycomGeographicCountry(this.currentRunCountry)) &&
      (await operations.waitForDOMStable())
    formRules = await this.extractFormRules()
    formRules = rulesMethods.filterRulesByLabel(formRules, [
      "Referral Source",
      "Referral Name",
    ])
    this.progressTracker.setFieldsRequiredStatus(formRules)
    await this.fillRegularFields(formRules)
    await this.fillEducationAndEmployment(formRules)
    this.taskQueue.add(() => operations.fillAgreementCheckbox())
    await this.handleResumeUpload()
    await this.taskQueue.run()
    await this.handleCoverLetterUpload()
    await this.taskQueue.run()
    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  async fillEducationAndEmployment(formRules) {
    this.taskQueue.add(async () => {
      await operations.fillEducation(this.answer, {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
      })
      this.progressTracker.updateFilledProgress("Education")
    })

    let employmentRules = []
    const employmentParent = formRules.find(
      (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
    )
    employmentRules =
      employmentParent && employmentParent.children
        ? employmentParent.children
        : formRules.filter(
            (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
          )
    coreDom.setSectionResultFocusRules("employment", employmentRules)

    const employmentOps = answerMethods.getEmploymentOperations(
      employmentRules,
      this.answer.workExperience,
      this.operationConfig,
      undefined,
      {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onCompleted: () =>
          this.progressTracker.updateFilledProgress("Employment"),
        onSkipped: () =>
          this.progressTracker.updateMissedProgress("Employment"),
      },
    )
    for (const op of employmentOps) this.taskQueue.add(op)
    await this.taskQueue.run()
    console.info(
      "[Paycom-v3] Education/Employment progress callbacks finished",
      {
        educationEntryCount: this.answer.education?.length ?? 0,
        employmentEntryCount: this.answer.workExperience?.length ?? 0,
        filledSectionLabels:
          this.progressTracker.fieldStatus.filledFields?.filter(
            (label) => label === "Education" || label === "Employment",
          ),
      },
    )
  }

  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(() =>
        operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        ),
      )
    }
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getPaycomCoverLetterStatus())
  }

  async handleCoverLetterUpload() {
    const status = operations.getPaycomCoverLetterStatus()
    if (status) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: false,
      })
    }
    const coverLetter = this.coverLetter
    if (status && coverLetter?.coverLetterId && coverLetter.coverLetterName) {
      this.taskQueue.add(async () => {
        await operations.uploadCoverLetter(
          {
            coverLetterId: coverLetter.coverLetterId,
            coverLetterName: coverLetter.coverLetterName,
            markdown: coverLetter.markdown,
            useLegacyDownload: coverLetter.useLegacyDownload,
          },
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    }
  }

  async executeSiteSpecificSteps(formRules) {
    await this.bindSubmitButtonTracking(formRules)
    const submitButton =
      document.querySelector('button[type="submit"]') ||
      Array.from(document.querySelectorAll("button")).find((button) =>
        button.textContent?.toLowerCase().includes("submit"),
      )
    if (submitButton) {
      track.bindSubmitButton(
        submitButton.textContent || "Submit",
        this.progressTracker.fieldStatus,
        this.timeTrace,
      )
    }
  }

  async bindSubmitButtonTracking(formRules) {
    const selector = this.getSubmitButtonSelector()
    if (!selector) return

    const submitButton = xpath.getFirstOrderedNodeSafe(selector)
    if (!submitButton) {
      console.warn(
        "[Paycom-v3] \u7ED1\u5B9A\u65F6\u672A\u627E\u5230 Submit \u6309\u94AE\uFF1B\u4ECD\u4F1A\u542F\u7528\u4E8B\u4EF6\u59D4\u6258\u7B49\u5F85\u540E\u7EED\u6E32\u67D3\u3002",
        selector,
      )
    }

    const autofillSnapshot = await this.getAutofillSnapshot(formRules)
    const additionalAutofillData =
      this.getAdditionalAutofillSnapshotData?.(formRules) || {}
    this.submitDelegationAbortController?.abort()
    this.submitDelegationAbortController = new AbortController()
    const delegationSignal = this.submitDelegationAbortController.signal
    let outcomeAbortController = null

    const onClick = async (event) => {
      const target = event.target
      if (!target) return
      const liveSubmit = xpath.getFirstOrderedNodeSafe(selector)
      if (
        !liveSubmit ||
        (liveSubmit !== target && !liveSubmit.contains(target))
      ) {
        return
      }

      const baseline = submitOutcome.capturePaycomSubmitBaseline()
      try {
        outcomeAbortController?.abort()
        outcomeAbortController = new AbortController()
        const outcomeSignal = outcomeAbortController.signal
        const submitSnapshot = await this.getSubmitSnapshot()
        const additionalSubmitData =
          this.getAdditionalSubmitSnapshotData?.() || {}
        const extraData =
          submitTracking.buildPaycomSubmitExtraTrackingData(
            this.answer,
            this.getAutofillAnswerPairExtraTrackingData?.() || {},
          )
        submitTracking.sendPaycomAutofillAnswerPairOnAttempt({
          formUrl: urlStore.useUrlStore.getState().currentTabUrl,
          autofillSnapshot,
          submitSnapshot,
          additionalAutofillData,
          additionalSubmitData,
          extraData,
          source: this.getSiteName(),
        })
        await submitOutcome.waitForPaycomSubmitOutcome(
          baseline,
          liveSubmit,
          outcomeSignal,
          {
            findSubmitButton: () => xpath.getFirstOrderedNodeSafe(selector),
          },
        )
        starRating.handleSubmitStarRating(
          this.getSiteName(),
          autofillSnapshot,
          submitSnapshot,
          this.progressTracker.fieldStatus,
          this.getSubmitSuccessSelectors(),
          outcomeSignal,
        )
      } catch (error) {
        console.error(
          "[Paycom-v3] Submit \u8DDF\u8E2A\u5F02\u5E38:",
          error,
        )
      }
    }

    document.addEventListener("click", onClick, {
      capture: true,
      signal: delegationSignal,
    })
  }

  constructor(...args) {
    super(...args)
    this.currentRunCountry = ""
    this.submitDelegationAbortController = null
  }
}

export { PaycomOnline }
