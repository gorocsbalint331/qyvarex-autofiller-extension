// @ts-nocheck
/**
 * Dayforce ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and dayforce/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "dayforce"
 */

import * as messaging from "@plasmohq/messaging"
import * as autofillSignupInformation from "../../api/autofill-signup-information.js"
import * as cancellation from "../methods/cancellation.js"
import * as dom from "../methods/dom.js"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as workdaySignupInfo from "../../store/workday-signup-info.js"
import * as agreements from "./dayforce/agreements.ts"
import * as auth from "./dayforce/auth.ts"
import * as dayforceAnswer from "./dayforce/answer.ts"
import * as operations from "./dayforce/operations.ts"
import * as rules from "./dayforce/rules.ts"

export { dedupeDayforceFieldStatus } from "./dayforce/rules.ts"

const RESUME_LABEL = "Resume/CV"
const COVER_LETTER_LABEL = "Cover Letter"

function logExperienceDiagnostics(stage, formRules, answer, extra = {}) {
  console.info(
    `[Dayforce][ExperienceDiagnostics] ${JSON.stringify({
      stage,
      ruleCount: formRules?.length ?? null,
      sections: Object.entries(rules.DAYFORCE_SECTIONS).map(
        ([key, section]) => {
          const sectionAnswer = answer?.[key]
          const rows = Array.from(
            document?.querySelectorAll?.(section.rowSelector) ?? [],
          )
          return {
            key,
            ruleCount:
              formRules?.filter((rule) => rule.type === section.type)
                .length ?? null,
            answerType:
              sectionAnswer == null
                ? "missing"
                : Array.isArray(sectionAnswer)
                  ? "array"
                  : typeof sectionAnswer,
            answerCount: Array.isArray(sectionAnswer)
              ? sectionAnswer.length
              : null,
            containerCount:
              document?.querySelectorAll?.(section.containerSelector)
                ?.length ?? null,
            addButtonCount:
              document?.querySelectorAll?.(section.addButtonSelector)
                ?.length ?? null,
            rowCount: rows.length,
            rowFieldKeys: rows.map((row) =>
              section.fields
                .filter((field) => row.querySelector(field.selector))
                .map((field) => field.key),
            ),
          }
        },
      ),
      ...extra,
    })}`,
  )
}

function isCoverLetterRelatedNode(node) {
  return (
    node.matches('section[test-id="cover-letter-upload-section"]') ||
    node.matches("#jobPostingApplication_files_coverLetter") ||
    node.matches(".ant-upload-list") ||
    !!node.closest('section[test-id="cover-letter-upload-section"]') ||
    !!node.querySelector('section[test-id="cover-letter-upload-section"]')
  )
}

export class Dayforce extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.hasComboQuestions = true
    this.coverLetterStatusObserver = null
    this.coverLetterStatusTimer = null
    this.lastCoverLetterStatus = null
    this.lastEducationEmploymentAutofillSnapshot = {}
    this.lastEducationEmploymentSubmitSnapshot = {}
    this.formatAnswer = (answer) =>
      dayforceAnswer.formatAnswer(answer, {
        profileData: {
          country: answer.country,
        },
      })
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          operations.fillDayforceTextField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: (rule, value) =>
          operations.fillDayforceDateField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          operations.fillDayforceSelectField(rule, value),
        options: { expectArray: false },
      },
      [enums.FIELD_TYPE.DROPDOWN]: {
        handler: (rule, value) =>
          operations.fillDayforceDropdownField(
            rule,
            value,
            this.answer?.regular?.Country,
          ),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) =>
          operations.fillDayforceCheckboxField(rule, value),
        options: { expectArray: true },
      },
    }
  }

  async doFillForm(forceRefetch = false) {
    if (auth.getDayforceAuthPageMode()) {
      return await this.fillAuthForm(forceRefetch)
    }

    await this.initializeFillForm()
    let formRules = await this.extractFormRules()
    logExperienceDiagnostics("initial-rules", formRules)
    this.progressTracker.setFieldsRequiredStatus(formRules)

    const answers = await this.fetchFormAnswers(formRules, forceRefetch)
    logExperienceDiagnostics("answers-fetched", formRules, this.answer, {
      requestReturnedError: typeof answers === "string",
    })
    if (typeof answers === "string") return answers

    logExperienceDiagnostics("resume-gate-start", formRules, this.answer)
    const resumeUploaded = await this.uploadResumeBeforeRegularFields()
    logExperienceDiagnostics("resume-gate-result", formRules, this.answer, {
      resumeUploaded,
      stopsBeforeExperienceFill: !resumeUploaded,
    })
    if (!resumeUploaded) return await this.finalizeFillForm()

    const educationCount = this.answer.education?.length ?? 0
    const workExperienceCount = this.answer.workExperience?.length ?? 0
    console.info(
      "[Dayforce][CompositeSections] reconciling after resume upload",
      { educationCount, workExperienceCount },
    )
    await operations.initializeDayforceCompositeSections(
      educationCount,
      workExperienceCount,
    )
    console.info("[Dayforce][CompositeSections] reconciliation completed", {
      educationCount,
      workExperienceCount,
    })

    await this.fillRegularFields(formRules)

    const initialRuleCount = formRules.length
    console.info(
      "[Dayforce][ConditionalFields] starting dynamic rule re-scan",
      { initialRuleCount },
    )
    const rescanned = await this.runComboQuestionAutofillIfNeeded(
      formRules,
      forceRefetch,
    )
    if (typeof rescanned === "string") {
      logExperienceDiagnostics("dynamic-rescan-failed", formRules, this.answer, {
        stopsBeforeExperienceFill: true,
      })
      return rescanned
    }

    formRules = rescanned
    logExperienceDiagnostics(
      "dynamic-rescan-completed",
      formRules,
      this.answer,
    )
    console.info(
      "[Dayforce][ConditionalFields] completed dynamic rule re-scan",
      {
        initialRuleCount,
        totalRuleCount: rescanned.length,
      },
    )

    await this.fillEducationAndEmployment(formRules)
    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  async fillAuthForm(forceRefetch) {
    await this.initializeFillForm()
    this.answer = {
      education: [],
      workExperience: [],
      skills: [],
      regular: {},
    }
    this.timeTrace.requestStartTime = 0
    this.timeTrace.fillStartTime = 0

    const nameRules = auth.getDayforceAuthNameRules()
    if (
      auth.getDayforceAuthPageMode() === "register" &&
      nameRules.length !== 2
    ) {
      return "Dayforce registration form is not ready. Please wait for the name fields and try again."
    }

    this.progressTracker.setFieldsRequiredStatus(nameRules)

    const [autofillInfo, signupInfo] = await Promise.all([
      messaging
        .sendToBackground({
          name: "getAutofillInfo",
          body: { forceRefresh: true },
        })
        .catch(() => null),
      workdaySignupInfo.getWorkdaySignupInformation().catch(() => null),
    ])
    cancellation.checkpoint()

    const fillResult = await auth.fillDayforceAuthCredentials({
      email:
        autofillSignupInformation.resolveSignupRegistrationEmail(autofillInfo),
      password: signupInfo?.password ?? "",
    })
    if (!fillResult.foundForm) {
      return "Dayforce account form is not ready. Please wait for the form and try again."
    }

    const roleLabels = {
      email: "Email",
      confirmEmail: "Confirm Email Address",
      password: "Password",
      confirmPassword: "Confirm Password",
    }
    for (const role of fillResult.foundRoles) {
      const label = roleLabels[role]
      this.progressTracker.updateFieldRequiredStatus({
        label,
        required: true,
      })
      if (
        fillResult.filledRoles.includes(role) ||
        fillResult.skippedExistingRoles.includes(role)
      ) {
        this.progressTracker.updateFilledProgress(label)
      } else {
        this.progressTracker.updateMissedProgress(label)
      }
    }

    if (nameRules.length > 0) {
      const answers = await this.fetchFormAnswers(nameRules, forceRefetch)
      if (typeof answers === "string") return answers
      cancellation.checkpoint()
      await this.fillRegularFields(nameRules)
    }

    if (auth.getDayforceAuthPageMode() === "register") {
      cancellation.checkpoint()
      const agreementLabel = "Privacy Statement and Terms of Use"
      this.progressTracker.updateFieldRequiredStatus({
        label: agreementLabel,
        required: true,
      })
      const accepted = await agreements.acceptDayforceRegistrationAgreements()
      cancellation.checkpoint()
      if (accepted) {
        this.progressTracker.updateFilledProgress(agreementLabel)
      } else {
        this.progressTracker.updateMissedProgress(agreementLabel)
      }
    }

    return await this.finalizeFillForm()
  }

  async extractFormRules() {
    return auth.getDayforceAuthPageMode()
      ? auth.getDayforceAuthNameRules()
      : await rules.getRules()
  }

  getSiteName() {
    return "dayforce"
  }

  async fetchFormAnswers(formRules, forceRefetch) {
    const answers = await this.requestFormAnswers(
      dayforceAnswer.prepareDayforceAnswerRequestRules(formRules),
      forceRefetch,
    )
    if (typeof answers === "string") return answers
    if (answers) this.answer = answers
  }

  async uploadResumeBeforeRegularFields() {
    cancellation.updateCurrentField(RESUME_LABEL)
    console.info("[Dayforce][UploadTask] starting", { label: RESUME_LABEL })
    try {
      const completed = await cancellation.withSkip(() =>
        operations.uploadResume(
          this.resumeInfo,
          this.disableUploadResume,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
          this.progressTracker.updateMissedProgress,
        ),
      )
      console.info("[Dayforce][UploadTask] completed", {
        label: RESUME_LABEL,
        completed,
      })
      return completed
    } catch (error) {
      if (error instanceof cancellation.SkippedError) {
        console.info("[Dayforce][UploadTask] skipped", {
          label: RESUME_LABEL,
        })
        this.progressTracker.updateMissedProgress(RESUME_LABEL)
        return true
      }
      throw error
    } finally {
      cancellation.updateCurrentField(null)
    }
  }

  async handleResumeUpload() {
    await this.uploadResumeBeforeRegularFields()
  }

  async fillEducationAndEmployment() {
    await this.fillConfiguredSectionWithSkip(
      rules.DAYFORCE_SECTIONS.education,
      this.answer.education || [],
    )
    await this.fillConfiguredSectionWithSkip(
      rules.DAYFORCE_SECTIONS.workExperience,
      this.answer.workExperience || [],
    )
  }

  async fillConfiguredSectionWithSkip(section, records) {
    cancellation.updateCurrentField(section.label)
    logExperienceDiagnostics("section-fill-start", null, this.answer, {
      sectionType: section.type,
      recordCount: records.length,
    })
    try {
      await cancellation.withSkip(() =>
        operations.fillConfiguredSection(section, records, {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
        }),
      )
      const committed = operations.isDayforceConfiguredSectionFilled(
        section,
        records,
      )
      logExperienceDiagnostics("section-fill-completed", null, this.answer, {
        sectionType: section.type,
        recordCount: records.length,
        committed,
      })
      if (committed) {
        this.progressTracker.updateFilledProgress(section.label)
      }
    } catch (error) {
      if (error instanceof cancellation.SkippedError) {
        logExperienceDiagnostics("section-fill-skipped", null, this.answer, {
          sectionType: section.type,
          reason: "user-skipped",
        })
        this.progressTracker.updateMissedProgress(section.label)
        return
      }
      logExperienceDiagnostics("section-fill-failed", null, this.answer, {
        sectionType: section.type,
        reason: error instanceof Error ? error.name : typeof error,
      })
      throw error
    } finally {
      cancellation.updateCurrentField(null)
    }
  }

  async executeSiteSpecificSteps(formRules) {
    operations.syncCoverLetterRequiredStatus(
      this.progressTracker.replaceFieldRequiredStatus,
    )
    await this.uploadCoverLetterWithSkip()
    await this.bindSubmitButtonTracking(formRules)
  }

  async uploadCoverLetterWithSkip() {
    cancellation.updateCurrentField(COVER_LETTER_LABEL)
    console.info("[Dayforce][UploadTask] starting", {
      label: COVER_LETTER_LABEL,
    })
    try {
      await cancellation.withSkip(() =>
        operations.uploadCoverLetter(
          this.coverLetter,
          this.progressTracker.replaceFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
          this.progressTracker.updateMissedProgress,
        ),
      )
      console.info("[Dayforce][UploadTask] completed", {
        label: COVER_LETTER_LABEL,
      })
    } catch (error) {
      if (error instanceof cancellation.SkippedError) {
        const status = operations.getDayforceCoverLetterStatus()
        console.info("[Dayforce][UploadTask] skipped", {
          label: COVER_LETTER_LABEL,
          status,
        })
        if (status) {
          this.progressTracker.replaceFieldRequiredStatus({
            label: COVER_LETTER_LABEL,
            required: status === "required",
          })
        }
        if (status === "required") {
          this.progressTracker.updateMissedProgress(COVER_LETTER_LABEL)
        }
        return
      }
      throw error
    } finally {
      cancellation.updateCurrentField(null)
    }
  }

  async checkCoverLetter() {
    this.bindCoverLetterStatusObserver()
    this.syncCoverLetterStatus(true)
  }

  syncCoverLetterStatus(force = false) {
    const status = operations.getDayforceCoverLetterStatus()
    if (force || status !== this.lastCoverLetterStatus) {
      this.lastCoverLetterStatus = status
      console.info("[Dayforce][CoverLetter] detection status changed", {
        status,
      })
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
      const relevant = mutations.some((mutation) => {
        const target = mutation.target
        return (
          !!(target instanceof Element && isCoverLetterRelatedNode(target)) ||
          [...mutation.addedNodes, ...mutation.removedNodes].some(
            (node) =>
              node instanceof Element && isCoverLetterRelatedNode(node),
          )
        )
      })
      if (relevant) this.scheduleCoverLetterStatusSync()
    })
    this.coverLetterStatusObserver.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [
        "class",
        "style",
        "hidden",
        "aria-hidden",
        "aria-required",
        "required",
        "test-id",
      ],
    })
    this.scheduleCoverLetterStatusSync(true)
  }

  getSubmitButtonSelector() {
    return './/button[@test-id="application-next-step"] | .//button[@test-id="application-submit"]'
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  resolveDelegatedSubmitButton(target) {
    return rules.resolveDayforceSubmitButtonFromTarget(target)
  }

  async getAutofillSnapshot(formRules) {
    this.lastEducationEmploymentAutofillSnapshot =
      rules.getDayforceEducationEmploymentSnapshot()
    return rules.getDayforceNormalFormSnapshot(formRules)
  }

  async getSubmitSnapshot() {
    this.lastEducationEmploymentSubmitSnapshot =
      rules.getDayforceEducationEmploymentSnapshot()
    return rules.getDayforceNormalFormSnapshot()
  }

  getAdditionalAutofillSnapshotData() {
    return this.lastEducationEmploymentAutofillSnapshot
  }

  getAdditionalSubmitSnapshotData() {
    return this.lastEducationEmploymentSubmitSnapshot
  }

  submitApplication() {
    if (!auth.getDayforceAuthPageMode()) {
      rules.getSubmitButton()?.click()
    }
  }
}
