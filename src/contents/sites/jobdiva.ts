// @ts-nocheck
/**
 * JobDiva ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and jobdiva/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "jobdiva"
 */

import * as answerMethods from "../methods/answer.ts"
import * as track from "../methods/track.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as coreDom from "../../core/dom.js"
import * as httpEnums from "../../enums/http.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as autofillSignupInformation from "../../api/autofill-signup-information.js"
import * as workdaySignupInfo from "../../store/workday-signup-info.js"
import * as jobdivaAnswer from "./jobdiva/answer.ts"
import * as operations from "./jobdiva/operations.ts"
import * as rules from "./jobdiva/rules.ts"
import * as signinCredentials from "./jobdiva/signin-credentials.ts"

export class Jobdiva extends BaseFiller {
  static MODAL_SUBMIT_SELECTOR =
    ".job-app-btn .jd-btn-mobile, .job-app-btns .jd-btn-mobile"

  constructor(...args) {
    super(...args)
    this.activeSurface = {
      mode: "regular",
      root: document.body,
    }
    this.lastFullAutofillSnapshot = null
    this.lastFullSubmitSnapshot = null
  }

  formatAnswer(answer) {
    return jobdivaAnswer.formatAnswer(answer)
  }

  async fetchFormAnswers(formRules, fromAgent) {
    const requestRules =
      jobdivaAnswer.prepareJobdivaAnswerRequestRules(formRules)
    const answer = await this.requestFormAnswers(requestRules, fromAgent)
    if (typeof answer === "string") return answer
    if (answer) this.answer = answer
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const text = value?.[0]
        if (text != null) {
          return operations.fillInputTextField(
            rule.$input,
            String(text ?? ""),
          )
        }
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupFiled(rule, value),
    }
  }

  getSiteName() {
    return "jobdiva"
  }

  isVisible(element) {
    if (!element) return false
    const style = window.getComputedStyle(element)
    return (
      style.display !== "none" &&
      style.visibility !== "hidden" &&
      element.getClientRects().length > 0
    )
  }

  isModalAdvanceButton(element) {
    if (!(element instanceof HTMLElement)) return false
    const text = (
      element.textContent ||
      element.getAttribute("value") ||
      element.getAttribute("aria-label") ||
      ""
    )
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase()
    return (
      !!text &&
      text !== "back" &&
      text !== "cancel" &&
      (text === "next" ||
        text === "continue" ||
        text === "submit" ||
        text === "apply" ||
        text === "save" ||
        text.includes("next") ||
        text.includes("continue") ||
        text.includes("submit"))
    )
  }

  getActiveModalSurface() {
    const visibleModals = Array.from(
      document.querySelectorAll(".modal.show .modal-content"),
    ).filter((node) => this.isVisible(node))
    const advanced = visibleModals.filter(
      (modal) =>
        !!modal.querySelector(".job-app-main, .jd-form-layout") ||
        Array.from(
          modal.querySelectorAll("button, [role='button']"),
        ).some((button) => this.isModalAdvanceButton(button)),
    )
    const root = advanced[advanced.length - 1]
    return root ? { mode: "modal", root } : null
  }

  detectActiveSurface() {
    const modalSurface = this.getActiveModalSurface()
    if (modalSurface) return modalSurface

    const visibleModals = Array.from(
      document.querySelectorAll(".modal-content"),
    ).filter(
      (node) =>
        this.isVisible(node) && !!node.querySelector(".job-app-main"),
    )
    const modalRoot = visibleModals[visibleModals.length - 1]
    if (modalRoot) return { mode: "modal", root: modalRoot }

    const regularRoot =
      Array.from(document.querySelectorAll(".row")).find(
        (row) =>
          this.isVisible(row) &&
          (!!row.querySelector(".jd-reg-title") ||
            !!row.querySelector(".jd-reg-card") ||
            !!row.querySelector(".jd-form-layout") ||
            !!row.querySelector(".jd-actioncard.jd-reg-introcard") ||
            !!row.querySelector('input[type="file"]') ||
            !!row.querySelector(".jd-dropzone")),
      ) ||
      document.querySelector(".jd-reg-title")?.closest(".row") ||
      document.querySelector(".jd-reg-card")?.closest(".row") ||
      document.body

    return { mode: "regular", root: regularRoot }
  }

  resolveModalSubmitButton(eventTarget) {
    if (this.activeSurface.mode !== "modal") return null
    if (eventTarget instanceof HTMLElement) {
      const button = eventTarget.closest(Jobdiva.MODAL_SUBMIT_SELECTOR)
      return button &&
        this.activeSurface.root.contains(button) &&
        button.classList.contains("jd-btn-mobile")
        ? button
        : null
    }
    return (
      this.activeSurface.root.querySelector(Jobdiva.MODAL_SUBMIT_SELECTOR) ||
      null
    )
  }

  getActiveSubmitButton() {
    if (this.activeSurface.mode === "modal") {
      return this.resolveModalSubmitButton()
    }
    const buttons = Array.from(
      this.activeSurface.root.querySelectorAll("button.jd-btn"),
    ).filter((button) => this.isVisible(button))
    return buttons[buttons.length - 1] || null
  }

  getSubmitTrackingDelegationRoot() {
    return this.activeSurface.root || null
  }

  resolveDelegatedSubmitButton(eventTarget) {
    if (this.activeSurface.mode === "modal") {
      return this.resolveModalSubmitButton(eventTarget)
    }
    const button = eventTarget.closest("button.jd-btn")
    const active = this.getActiveSubmitButton()
    return button && active === button ? button : null
  }

  async extractFormRules() {
    const formRules = await rules.extractRules(
      this.activeSurface.root,
      this.activeSurface.mode,
    )
    return rules.excludeJobdivaSignInRules(
      formRules,
      this.activeSurface.root,
    )
  }

  async runPreFillForm() {
    if (this.activeSurface.mode === "regular") {
      this.taskQueue.add(() =>
        operations.preFillForm(this.activeSurface.root),
      )
      await this.taskQueue.run()
    }
    const info = await autofillInfo.useAutofillInfoStore
      .getState()
      .fetchAutofillInfo()
    await operations.prefillCountry(
      this.activeSurface.root,
      info?.location?.country,
    )
  }

  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(async () => {
        await operations.uploadResume(
          this.activeSurface.root,
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    }
    await this.taskQueue.run()
  }

  async fillEducationAndEmployment() {
    if (this.activeSurface.mode !== "regular") return

    if (
      Array.isArray(this.answer.education) &&
      this.answer.education.length > 0
    ) {
      let educationRules = await rules.getEducationRulesForRoot(
        this.activeSurface.root,
      )
      if (educationRules.length !== this.answer.education.length) {
        await operations.addEducationSectionForRoot(
          this.activeSurface.root,
          this.answer.education.length,
        )
        educationRules = await rules.getEducationRulesForRoot(
          this.activeSurface.root,
        )
      }
      if (educationRules.length !== this.answer.education.length) {
        console.warn(
          "[jobdiva fillEdu] skip fill because counts still mismatch",
          {
            eduRulesLen: educationRules.length,
            answerLen: this.answer.education.length,
          },
        )
        return
      }

      coreDom.setSectionResultFocusRules("education", educationRules)
      const ops = answerMethods.getEducationOperations(
        educationRules,
        this.answer.education,
        this.operationConfig,
        undefined,
        {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onCompleted: () =>
            this.progressTracker.updateFilledProgress("Education"),
          onSkipped: () =>
            this.progressTracker.updateMissedProgress("Education"),
        },
      )
      for (const op of ops) this.taskQueue.add(op)
      await this.taskQueue.run()
    }

    if (
      Array.isArray(this.answer.workExperience) &&
      this.answer.workExperience.length > 0
    ) {
      let experienceRules = await rules.getExperienceRulesForRoot(
        this.activeSurface.root,
      )
      if (experienceRules.length !== this.answer.workExperience.length) {
        await operations.addEmploymentSectionForRoot(
          this.activeSurface.root,
          this.answer.workExperience.length,
        )
        experienceRules = await rules.getExperienceRulesForRoot(
          this.activeSurface.root,
        )
      }
      if (experienceRules.length !== this.answer.workExperience.length) {
        console.warn(
          "[jobdiva fillExp] skip fill because counts still mismatch",
          {
            expRulesLen: experienceRules.length,
            answerLen: this.answer.workExperience.length,
          },
        )
        return
      }

      coreDom.setSectionResultFocusRules("employment", experienceRules)
      const ops = answerMethods.getEmploymentOperations(
        experienceRules,
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
      for (const op of ops) this.taskQueue.add(op)
      await this.taskQueue.run()
    }
  }

  async fillRegularFields(formRules) {
    const regularRules = formRules.filter(
      (rule) =>
        rule.type !== enums.FIELD_TYPE.SECTION &&
        rule.label !==
          "I consent to receive employment-related text messages to this number",
    )
    const ops = answerMethods.getRegularOperations(
      regularRules,
      this.answer.regular,
      this.operationConfig,
    )
    for (const op of ops) this.taskQueue.add(op)
    await this.taskQueue.run()

    const phoneSections = formRules.filter(
      (rule) =>
        rule.type === enums.FIELD_TYPE.SECTION && rule.label === "Phone",
    )
    for (const section of phoneSections) {
      this.taskQueue.add(async () => {
        await operations.fillPhoneSectionField(
          section,
          this.answer.regular,
          this.progressTracker.updateFilledProgress,
          this.progressTracker.updateMissedProgress,
        )
      })
    }
    if (phoneSections.length > 0) await this.taskQueue.run()
  }

  getSubmitButtonSelector() {
    return null
  }

  extractEducationEmploymentAdditional(snapshot) {
    const { education, employment } = snapshot || {}
    return {
      education: education || [],
      employment: employment || [],
    }
  }

  async getAutofillSnapshot() {
    const full = rules.getFormSnapshot(this.activeSurface.root) || {}
    this.lastFullAutofillSnapshot = full
    const snapshot = { ...full }
    delete snapshot.education
    delete snapshot.employment
    return snapshot
  }

  async getSubmitSnapshot() {
    const full = rules.getFormSnapshot(this.activeSurface.root) || {}
    this.lastFullSubmitSnapshot = full
    const snapshot = { ...full }
    delete snapshot.education
    delete snapshot.employment
    return snapshot
  }

  getAdditionalAutofillSnapshotData() {
    return this.extractEducationEmploymentAdditional(
      this.lastFullAutofillSnapshot,
    )
  }

  getAdditionalSubmitSnapshotData() {
    return this.extractEducationEmploymentAdditional(
      this.lastFullSubmitSnapshot,
    )
  }

  isResumeUploadOnlyPage(formRules) {
    if (this.activeSurface.mode !== "regular") return false
    const hasUpload =
      !!this.activeSurface.root.querySelector('input[type="file"]') ||
      !!this.activeSurface.root.querySelector(".jd-dropzone")
    return !!hasUpload && formRules.length === 0
  }

  async tryFillSignIn() {
    console.debug("[JobDiva] sign-in surface check", {
      foundSignIn: !!signinCredentials.findJobdivaSignInFields(),
    })
    if (!signinCredentials.findJobdivaSignInFields()) return null

    this.progressTracker.clear()
    this.taskQueue.clear()

    const [autofill, signup] = await Promise.all([
      autofillInfo.useAutofillInfoStore.getState().fetchAutofillInfo(),
      workdaySignupInfo.getWorkdaySignupInformation().catch(() => null),
    ])
    const email =
      autofillSignupInformation.resolveSignupRegistrationEmail(autofill)
    const password = signup?.password ?? ""
    const fillResult =
      await signinCredentials.fillJobdivaSignInCredentials({
        email,
        password,
      })

    console.info(
      "[JobDiva] sign-in credential fill",
      JSON.stringify({
        hasRegistrationEmail: !!email,
        hasLocalPassword: !!password,
        foundForm: fillResult.foundForm,
        filledRoles: fillResult.filledRoles,
        skippedExistingRoles: fillResult.skippedExistingRoles,
        rejectedRoles: fillResult.rejectedRoles,
      }),
    )

    this.progressTracker.setFieldsRequiredStatus([
      { label: "Email", required: true },
      { label: "Password", required: true },
    ])

    for (const role of ["email", "password"]) {
      const label = role === "email" ? "Email" : "Password"
      if (
        fillResult.filledRoles.includes(role) ||
        fillResult.skippedExistingRoles.includes(role)
      ) {
        this.progressTracker.updateFilledProgress(label)
      } else {
        this.progressTracker.updateMissedProgress(label)
      }
    }

    return this.finalizeFillForm()
  }

  async doFillForm(fromAgent = false) {
    this.activeSurface = this.detectActiveSurface()
    const earlySignIn = await this.tryFillSignIn()
    if (earlySignIn !== null) return earlySignIn

    await this.initializeFillForm()
    this.activeSurface = this.detectActiveSurface()
    const lateSignIn = await this.tryFillSignIn()
    if (lateSignIn !== null) return lateSignIn

    const formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)

    if (formRules.length === 0) {
      const resumeOnly = this.isResumeUploadOnlyPage(formRules)
      console.warn("[jobdiva] skip fill-v2: no extracted rules", {
        surfaceMode: this.activeSurface.mode,
        hasFormLayout: !!this.activeSurface.root.querySelector(
          ".jd-form-layout",
        ),
        hasRegistrationCard: !!this.activeSurface.root.querySelector(
          ".jd-reg-title, .jd-reg-card",
        ),
        hasResumeUpload: resumeOnly,
      })
      if (resumeOnly) {
        await this.handleResumeUpload()
        await this.executeSiteSpecificSteps(formRules)
        return this.finalizeFillForm()
      }
      track.sendHttpStatusMessage(httpEnums.CUSTOM_ERROR_CODES.NO_ELEMENTS)
      return httpEnums.CUSTOM_ERROR_CODES.NO_ELEMENTS
    }

    await this.handleResumeUpload()
    const answerResult = await this.fetchFormAnswers(formRules, fromAgent)
    if (typeof answerResult === "string") {
      console.warn(
        "[jobdiva fillForm] early return due to string answer:",
        answerResult,
      )
      return answerResult
    }

    await this.fillRegularFields(formRules)
    await this.fillEducationAndEmployment(formRules)
    await this.executeSiteSpecificSteps(formRules)
    return this.finalizeFillForm()
  }

  submitApplication() {
    this.getActiveSubmitButton()?.click()
  }
}
