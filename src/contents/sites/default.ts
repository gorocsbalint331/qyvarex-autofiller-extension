// @ts-nocheck
/**
 * Default filler for job sites that are not a known ATS.
 * Site id: "default"
 */

import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as answerMethods from "../methods/answer.ts"
import * as dom from "../methods/dom.ts"
import * as operations from "./default/operations.ts"
import * as rules from "./default/rules.ts"
import { englishFieldLabel } from "../../utils/fieldLabel.js"
import { armSubmittedApplication } from "../shared/application-log-watcher.ts"

export class DefaultFiller extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) => operations.fillTextField(rule.$input, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) => operations.fillSelectField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => operations.fillCheckboxField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (rule, value) => operations.fillRadioField(rule, value),
        options: { expectArray: true },
      },
    }
  }

  getSiteName() {
    return "default"
  }

  hasUploadOnlyForm() {
    return !!operations.findResumeFileInput()
  }

  async runPreFillForm() {
    await operations.openWorkableJobBoardForm()
  }

  async extractFormRules() {
    const found = rules.getRules()
    if (!/(^|\.)jobs\.workable\.com$/i.test(location.hostname)) return found
    const input = operations.findWorkableResumeInput()
    if (!input || found.some((rule) => /resume|\bcv\b/i.test(rule.label || ""))) return found
    found.push({
      type: "file",
      label: "Resume/CV",
      required: true,
      options: [],
      $input: input,
      $label: null,
    })
    return found
  }

  async handleResumeUpload() {
    if (this.disableUploadResume || !this.resumeInfo) return
    const prepared = await answerMethods.fetchPdfAsBlob(this.resumeInfo)
    if (/(^|\.)jobs\.workable\.com$/i.test(location.hostname)) {
      const input = operations.findWorkableResumeInput()
      if (!input) return
      this.progressTracker.updateFieldRequiredStatus({ label: "Resume/CV", required: true })
      const attached = await operations.attachWorkableResume(prepared)
      if (attached) this.progressTracker.updateFilledProgress("Resume/CV")
      else this.progressTracker.updateMissedProgress("Resume/CV")
      return
    }
    const input = operations.findResumeFileInput()
    if (!input) return
    if (/(^|\.)join\.com$/i.test(location.hostname)) {
      operations.attachResumeToDropzone(input, prepared)
    }
    await dom.uploadFiles(
      input,
      prepared,
      this.progressTracker.updateFieldRequiredStatus,
      this.progressTracker.updateFilledProgress,
      "Resume/CV",
    )
  }

  async doFillForm(forceRefetch = false) {
    if (!operations.isJoinApplyPage()) {
      return super.doFillForm(forceRefetch)
    }
    await this.initializeFillForm()
    const seen = new Set()
    for (let step = 0; step < 8; step += 1) {
      const path = `${location.pathname}|${operations.joinHeading()}`
      if (seen.has(path)) break
      seen.add(path)
      const kind = operations.joinStepKind()
      if (kind === "success") break
      if (!this.joinIdentity) this.joinIdentity = await this.loadJoinIdentity(forceRefetch)
      if (kind === "review" || kind === "identity") {
        if (this.joinIdentity) await this.fillJoinIdentityForm(kind === "review")
        if (kind === "review") {
          if (operations.joinApplyButton()) {
            armSubmittedApplication()
            await operations.clickJoinApply()
          }
          break
        }
        const advanced = await operations.clickJoinNext()
        if (!advanced) break
        continue
      }
      if (!kind) break
      if (this.joinIdentity) operations.applyJoinCandidate(this.joinIdentity)
      try {
        if (kind === "cv") await this.handleResumeUpload()
        else if (kind === "cover") await this.fillJoinCoverLetter()
        else {
          if (kind === "date" || operations.joinHasDatePicker()) await this.fillJoinDate(forceRefetch)
          if (kind !== "date" || operations.findJoinAnswerInput()) await this.fillJoinQuestion(forceRefetch)
        }
      } catch (error) {
        console.warn("[qyvarex] join step", kind, error)
      }
      const advanced = await operations.clickJoinNext()
      if (!advanced) break
    }
    return this.finalizeFillForm()
  }

  async loadJoinIdentity(forceRefetch) {
    const labels = [
      "First name",
      "Last name",
      "Email",
      "Phone",
      "City",
      "Country",
      "Address",
      "State",
      "Postal code",
    ]
    const rules = labels.map((label) => ({
      type: enums.FIELD_TYPE.TEXT,
      label,
      required: true,
      $input: document.createElement("input"),
    }))
    const result = await this.fetchFormAnswers(rules, forceRefetch)
    if (typeof result === "string") return null
    const record = this.answer?.regular || {}
    const pick = (label) => {
      const value = record[label]
      if (Array.isArray(value)) return String(value.find(Boolean) || "").trim()
      return String(value || "").trim()
    }
    const identity = {
      firstName: pick("First name"),
      lastName: pick("Last name"),
      email: pick("Email"),
      phone: pick("Phone"),
      city: pick("City"),
      country: pick("Country"),
      address: pick("Address"),
      state: pick("State"),
      postalCode: pick("Postal code"),
    }
    if (!identity.email && !identity.firstName && !identity.phone && !identity.city && !identity.country) {
      return null
    }
    return identity
  }

  noteJoinFields(labels) {
    for (const label of labels || []) {
      this.progressTracker.updateFieldRequiredStatus({ label, required: true })
      this.progressTracker.updateFilledProgress(label)
    }
  }

  async fillJoinIdentityForm(fromReview) {
    if (fromReview && !(await operations.openJoinPersonalEditor())) {
      operations.applyJoinCandidate(this.joinIdentity)
      return
    }
    const filled = await operations.fillJoinPersonalForm(this.joinIdentity)
    this.noteJoinFields(filled)
    if (fromReview) await operations.clickJoinNext()
  }

  async fillJoinCoverLetter() {
    if (!this.coverLetter?.coverLetterId) return
    const input = operations.findJoinDropzone()
    if (!input) return
    const prepared = await answerMethods.fetchCoverLetterPdfAsBlob(this.coverLetter)
    operations.attachResumeToDropzone(input, prepared)
    this.progressTracker.updateFieldRequiredStatus({ label: "Cover letter", required: false })
    this.progressTracker.updateFilledProgress("Cover letter")
  }

  async fillJoinDate(forceRefetch) {
    const heading = operations.joinHeading() || "Start date"
    const rules = [
      {
        type: enums.FIELD_TYPE.TEXT,
        label: heading,
        required: true,
        $input: document.createElement("input"),
      },
    ]
    let ymd = ""
    const result = await this.fetchFormAnswers(rules, forceRefetch)
    if (typeof result !== "string") {
      ymd = operations.ymdFromAnswer(this.answer?.regular?.[heading])
    }
    if (await operations.selectJoinCalendarDay(ymd)) {
      this.progressTracker.updateFieldRequiredStatus({ label: "Start date", required: true })
      this.progressTracker.updateFilledProgress("Start date")
    }
  }

  async fillJoinQuestion(forceRefetch) {
    const heading = operations.joinHeading()
    const shown = englishFieldLabel(heading) || heading
    const rules = await this.extractFormRules()
    if (shown) {
      for (const rule of rules) {
        if (operations.isWeakJoinLabel(rule.label) || rule.label === heading) rule.label = shown
        if (operations.joinStepKind() === "salary") rule.required = true
      }
    }
    const input = operations.findJoinAnswerInput()
    if (shown && input && !rules.some((rule) => rule.$input === input)) {
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label: shown,
        required: true,
        $input: input,
      })
    }
    if (!rules.length) return
    const prepared = this.prepareCoverLetterRules(rules)
    this.progressTracker.setFieldsRequiredStatus(prepared)
    const answers = await this.fetchFormAnswers(prepared, forceRefetch)
    if (typeof answers === "string") return
    try {
      await this.fillRegularFields(prepared)
    } catch (error) {
      console.warn("[qyvarex] join question", error)
    }
    if (operations.joinStepKind() !== "salary") return
    const salaryInput = operations.findJoinAnswerInput()
    if (!salaryInput || String(salaryInput.value || "").trim()) return
    const record = this.answer?.regular || {}
    const raw = String(record[shown] || record[heading] || Object.values(record)[0] || "")
    const digits = raw.replace(/[^\d]/g, "")
    await operations.fillTextField(salaryInput, digits || "60000")
  }

  async getAutofillSnapshot(formRules) {
    this.snapshotRules = formRules
    return rules.getFormSnapshot(formRules)
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot(this.snapshotRules || rules.getRules())
  }
}
