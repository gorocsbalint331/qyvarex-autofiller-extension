// @ts-nocheck
/**
 * Phenom ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and phenom/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "phenom"
 */

import * as messaging from "@plasmohq/messaging";
import * as dom from "../methods/dom.ts";
import * as track from "../methods/track.ts";
import { BaseFiller } from "./base-filler.ts";
import * as enums from "../../core/enums.js";
import * as httpEnums from "../../enums/http.js";
import * as phenomAnswer from "./phenom/answer.ts";
import * as coverLetterDetection from "./phenom/cover-letter-detection.ts";
import * as educationOperation from "./phenom/education-operation.ts";
import * as optionResolveRollout from "../option-resolve-rollout.js";
import * as operations from "./phenom/operations.ts";
import * as rules from "./phenom/rules.ts";
import * as phenomStyle from "./phenom/style.ts";
let phenomSchoolClientSearch = {
  requestStep: async (body) =>
    await messaging.sendToBackground({
      name: "resolveAutofillClientSearchStep",
      body,
    }),
  captureCandidates: operations.capturePhenomSchoolCandidates,
  commitCandidate: async (input, candidate, searchInput, value) =>
    operations.fillResolvedPhenomSchoolField(
      input,
      candidate.text,
      searchInput,
      value,
    ),
}

function isSchoolLabel(label) {
  return [
    "school",
    "school name",
    "schoolname",
    "school or university",
  ].includes(
    label
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase(),
  )
}

function hasNonblankValue(value) {
  return Array.isArray(value)
    ? value.some((item) => String(item ?? "").trim().length > 0)
    : String(value ?? "").trim().length > 0
}
export class Phenom extends BaseFiller {
  constructor() {
    if (super(), this.hasComboQuestions = true, this.didUploadResumeSuccessfully = false, this.resumeParserReady = true, this.didUploadCoverLetterSuccessfully = false, this.didMissResolvedSchool = false, this.coverLetterCheckVersion = 0, this.coverLetterCheckTimer = null, this.checkCoverLetterEventHandler = () => {
      this.checkCoverLetter();
    }, this.checkCoverLetterAfterContinueHandler = (e) => {
      let t = e.target instanceof Element ? e.target.closest(
        "button, input[type='submit'], a, [role='button']"
      ) : null;
      t && coverLetterDetection.shouldScheduleCoverLetterCheckForAction({
        text: t.textContent,
        id: t.id,
        ariaLabel: t.getAttribute("aria-label")
      }) && this.scheduleCoverLetterCheck();
    }, this.formatAnswer = phenomAnswer.formatAnswer, "undefined" == typeof document) return;
    phenomStyle.injectPhenomApplyPageLayoutFix(), document.addEventListener(
      "CheckAgentCoverLetter",
      this.checkCoverLetterEventHandler
    ), document.addEventListener("click", this.checkCoverLetterAfterContinueHandler, true), this.scheduleCoverLetterCheck();
  }
  async runWithLoaderGuard(e, t = 200) {
    let r = await operations.waitForPhenomLoaderIdle();
    if (!r) return false;
    let n = await e(), o2 = await operations.waitForPhenomLoaderIdle(t);
    return !!o2 && n;
  }
  isInitialStep() {
    return rules.isInitialApplicationStep(rules.getStepInfo());
  }
  hasResumeInput() {
    return operations.hasResumeFieldPresence();
  }
  isSnapshotFieldFilled(e) {
    let t = e.value;
    if (e.type === enums.FIELD_TYPE.SELECT) return "string" == typeof t && t.trim().length > 0;
    if (Array.isArray(t)) return t.some((e2) => String(e2 ?? "").trim().length > 0);
    if ("string" == typeof t) return t.trim().length > 0;
    if (null != t) return true;
    let r = e.text;
    return "string" == typeof r && r.trim().length > 0;
  }
  reconcileFilledProgressFromSnapshot() {
    let e = rules.getFormSnapshot(), t = Array.isArray(e.fields) ? e.fields : [];
    for (let e2 of t) {
      let t2 = "string" == typeof e2.label ? e2.label.trim() : "";
      if (!t2 || !this.isSnapshotFieldFilled(e2) || !operations.hasPhenomAnswerForSnapshotField(
        t2,
        this.answer
      )) continue;
      let r = this.progressTracker.fieldStatus.missingFields.includes(t2), n = this.progressTracker.fieldStatus.filledFields.includes(t2);
      (r || !n) && this.progressTracker.updateFilledProgress(t2);
    }
  }
  hasCiscoEducationSchoolReadback() {
    let e = rules.getFormSnapshot(), t = Array.isArray(this.answer?.education) ? this.answer.education.length : 0, r = Array.isArray(e.education) ? e.education : [], n = false;
    if ("string" == typeof e.url) try {
      n = "careers.cisco.com" === new URL(e.url).hostname;
    } catch {
      n = false;
    }
    let o2 = n && t > 0 && r.length >= t && r.slice(0, t).every((e2) => !!e2 && "object" == typeof e2 && Object.entries(e2).some(([e3, t2]) => isSchoolLabel(e3) && hasNonblankValue(t2)));
    return n && console.info("[phenom] Cisco Education progress readback", {
      expectedRows: t,
      visibleRows: r.length,
      complete: o2
    }), o2;
  }
  hasCoverLetterInput() {
    return operations.hasCoverLetterFieldPresence();
  }
  scheduleCoverLetterCheck(e = 300) {
    this.coverLetterCheckTimer && clearTimeout(this.coverLetterCheckTimer), this.coverLetterCheckTimer = setTimeout(() => {
      this.coverLetterCheckTimer = null, this.checkCoverLetter();
    }, e);
  }
  syncResumeTrackingField() {
    this.isInitialStep() && this.progressTracker.updateFieldRequiredStatus({
      label: "Resume/CV",
      required: true
    });
  }
  syncCoverLetterTrackingField() {
    this.hasCoverLetterInput() && this.progressTracker.updateFieldRequiredStatus({
      label: "Cover Letter",
      required: true
    });
  }
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (null != r) return this.runWithLoaderGuard(() => operations.fillInputTextField(e.$input, String(r), e.label));
      },
      [enums.FIELD_TYPE.DATE]: (e, t) => {
        let r = t?.[0], n = e.$input;
        if (operations.recordPhenomDateDebug("handler input", {
          label: e.label,
          inputId: n.id,
          inputName: n.name,
          preferredFormat: e.description,
          answerPresent: null != r && "" !== String(r).trim()
        }), null != r) return this.runWithLoaderGuard(async () => {
          let t2 = await operations.fillDateField(e.$input, String(r), e.description), o2 = n.isConnected ? n : n.id ? document.getElementById(n.id) : null;
          return operations.recordPhenomDateDebug("handler result", {
            label: e.label,
            inputId: n.id,
            inputName: n.name,
            filled: t2,
            inputReacquired: o2 !== n,
            domValuePresent: "" !== String(o2?.value ?? "").trim()
          }), t2;
        }, 0);
      },
      [enums.FIELD_TYPE.SEARCH]: (e, t) => {
        let r = educationOperation.isPhenomSchoolRule(e), n = educationOperation.takeResolvedPhenomSchoolValue(e);
        if (r && n) return this.runWithLoaderGuard(() => operations.fillResolvedPhenomSchoolField(
          e.$input,
          n
        )).then((e2) => (true !== e2 && (this.didMissResolvedSchool = true), e2)).catch((e2) => {
          throw this.didMissResolvedSchool = true, e2;
        });
        let o2 = t?.[0];
        if (null == o2) {
          r && (this.didMissResolvedSchool = true);
          return;
        }
        let i2 = this.runWithLoaderGuard(() => r ? operations.fillSearchField(e.$input, String(
          o2
        ), {
          redactValues: true
        }) : operations.fillSearchField(e.$input, String(o2)));
        return r ? i2.then((e2) => (false === e2 && (this.didMissResolvedSchool = true), e2)).catch(
          (e2) => {
            throw this.didMissResolvedSchool = true, e2;
          }
        ) : i2;
      },
      [enums.FIELD_TYPE.SELECT]: (e, t) => this.runWithLoaderGuard(() => operations.fillSelectField(
        e,
        Array.isArray(t) ? t[0] : t
      )),
      [enums.FIELD_TYPE.RADIOGROUP]: (e, t) => this.runWithLoaderGuard(() => (0, operations.fillRadioGroupField)(e, Array.isArray(t) ? t[0] : t)),
      [enums.FIELD_TYPE.CHECKBOX]: (e, t) => this.runWithLoaderGuard(() => operations.fillCheckboxField(
        e,
        Array.isArray(t) ? t.map((e2) => String(e2)) : [String(t)]
      ))
    };
  }
  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm), await this.taskQueue.run();
  }
  async extractFormRules() {
    return await rules.extractRules();
  }
  getSiteName() {
    return "phenom";
  }
  getElementRulesRequestUrl() {
    return rules.getPhenomFillRequestUrl();
  }
  async checkCoverLetter() {
    let e = ++this.coverLetterCheckVersion;
    await operations.waitForPhenomLoaderIdle(150);
    for (let t = 0; t < 12; t += 1) {
      if (e !== this.coverLetterCheckVersion) return;
      let t2 = operations.getCoverLetterFieldStatus();
      if ("required" === t2) {
        dom.postCoverLetterStatus(t2);
        return;
      }
      await new Promise((e2) => setTimeout(e2, 250));
    }
    e === this.coverLetterCheckVersion && dom.postCoverLetterStatus("");
  }
  async handleResumeUpload() {
    let e = rules.getStepInfo();
    if (console.log("[phenom] handleResumeUpload entry", {
      step: e.step,
      stepName: e.stepName,
      disableUploadResume: this.disableUploadResume
    }), this.didUploadResumeSuccessfully = false, this.resumeParserReady = true, !this.isInitialStep()) return;
    let t = await operations.waitForResumeFileInput();
    if (!t) {
      console.log("[phenom] handleResumeUpload skip: no resume input found");
      return;
    }
    if (this.disableUploadResume) {
      console.log("[phenom] handleResumeUpload skip: upload disabled"), this.syncResumeTrackingField(), this.progressTracker.updateMissedProgress("Resume/CV");
      return;
    }
    this.taskQueue.add(async () => {
      console.log("[phenom] handleResumeUpload task start");
      let e2 = await operations.uploadResume(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
      e2.uploaded ? (this.didUploadResumeSuccessfully = true, this.resumeParserReady = e2.parserReady, console.log(
        "[phenom] handleResumeUpload task result: upload succeeded",
        {
          parserReady: e2.parserReady
        }
      )) : (console.log("[phenom] handleResumeUpload task result: upload failed"), this.syncResumeTrackingField(), this.progressTracker.updateMissedProgress(
        "Resume/CV"
      ));
    }), await this.taskQueue.run();
  }
  async doFillForm(e = false) {
    await this.initializeFillForm();
    let t = this.isInitialStep(), r = t && this.hasResumeInput();
    if (await this.handleResumeUpload(), t && this.didUploadResumeSuccessfully && !this.resumeParserReady) return console.warn(
      "[phenom] skip initial-step form fill because Cisco resume parser did not settle"
    ), this.syncResumeTrackingField(), this.progressTracker.fieldStatus;
    let n = await this.extractFormRules();
    if (this.progressTracker.setFieldsRequiredStatus(n), 0 === n.length) return (console.warn(
      "[phenom] skip fill-v2: no extracted rules",
      {
        initialStep: t,
        hasResumeInput: r
      }
    ), r) ? (this.syncResumeTrackingField(), this.didUploadResumeSuccessfully && !this.progressTracker.fieldStatus.filledFields.includes("Resume/CV") && this.progressTracker.updateFilledProgress("Resume/CV"), await this.finalizeFillForm()) : (track.sendHttpStatusMessage(httpEnums.CUSTOM_ERROR_CODES.NO_ELEMENTS), httpEnums.CUSTOM_ERROR_CODES.NO_ELEMENTS);
    r && (this.syncResumeTrackingField(), this.didUploadResumeSuccessfully && !this.progressTracker.fieldStatus.filledFields.includes("Resume/CV") && this.progressTracker.updateFilledProgress("Resume/CV")), t && this.hasCoverLetterInput() && this.syncCoverLetterTrackingField();
    let o2 = await this.fetchFormAnswers(n, e);
    if ("string" == typeof o2) return o2;
    let i2 = n.filter((e2) => e2.type !== enums.FIELD_TYPE.EDUCATION && e2.type !== enums.FIELD_TYPE.EMPLOYMENT);
    await this.fillRegularFields(i2);
    let l = await this.runWithLoaderGuard(() => operations.fillPhoneCountryCodeSelectsFromRecord(
      this.answer.regular
    ));
    if (Array.isArray(l))
      for (let e2 of l) this.progressTracker.updateFilledProgress(e2);
    this.reconcileFilledProgressFromSnapshot();
    let c2 = await this.runComboQuestionAutofillIfNeeded(n, e);
    if ("string" == typeof c2) return c2;
    n = c2, this.reconcileFilledProgressFromSnapshot(), await this.fillEducationAndEmployment(n);
    let d2 = await this.runWithLoaderGuard(() => operations.fillRequiredConsentCheckboxes());
    for (let e2 of d2) this.progressTracker.updateFilledProgress(e2);
    return await this.executeSiteSpecificSteps(n), this.reconcileFilledProgressFromSnapshot(), await this.finalizeFillForm();
  }
  async fillEducationAndEmployment(e) {
    let t = rules.getArrayContainer(enums.FIELD_TYPE.EDUCATION), r = rules.getArrayContainer(enums.FIELD_TYPE.EMPLOYMENT);
    t && Array.isArray(this.answer?.education) && this.answer.education.length > 0 && (this.didMissResolvedSchool = false, await operations.processCompositeBlocks(
      this.answer.education,
      enums.FIELD_TYPE.EDUCATION,
      this.operationConfig,
      this.taskQueue,
      async (e2, t2, r2) => {
        e2.type === enums.FIELD_TYPE.DATE && operations.recordPhenomDateDebug(
          "education answer match",
          {
            recordIndex: r2,
            label: e2.label,
            exactLabelPresent: Object.prototype.hasOwnProperty.call(t2, e2.label),
            recordKeys: Object.keys(t2)
          }
        );
        let n = educationOperation.isPhenomSchoolRule(e2), o2 = n ? educationOperation.getPhenomSchoolRecordKey(e2, t2) : null, i2 = n ? educationOperation.getPhenomSchoolOriginalAnswer(e2, t2) : "";
        n && !i2 && (this.didMissResolvedSchool = true);
        let a2 = "function" == typeof educationOperation.resolvePhenomEducationClientSearchRecordForRule ? await educationOperation.resolvePhenomEducationClientSearchRecordForRule(e2, t2, r2, {
          ...phenomSchoolClientSearch,
          enabled: optionResolveRollout.V119_OPTION_RESOLVE_ROLLOUT.phenomEducationSchool
        }) : await educationOperation.resolvePhenomEducationRecordForRule(e2, t2, r2, {
          enabled: optionResolveRollout.V119_OPTION_RESOLVE_ROLLOUT.phenomEducationSchool,
          typeProbe: async (e3, t3, r3) => {
            let n2 = await operations.typePhenomSchoolProbe(e3, t3, r3);
            if (true !== n2) throw Error("Phenom school probe was not confirmed");
          },
          clearProbe: async (e3, t3) => {
            let r3 = await operations.clearPhenomSchoolProbe(e3, t3);
            if (true !== r3) throw Error("Phenom school clear was not confirmed");
          }
        }), l = educationOperation.getFirstNonblankPhenomSchoolValue(o2 ? a2[o2] : void 0);
        return n && i2 && o2 && !l ? {
          ...a2,
          [o2]: i2
        } : a2;
      },
      {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onSkipped: () => {
          this.progressTracker.updateMissedProgress("Education");
        },
        onCompleted: () => {
          this.didMissResolvedSchool && !this.hasCiscoEducationSchoolReadback() ? this.progressTracker.updateMissedProgress("Education") : this.progressTracker.updateFilledProgress("Education");
        }
      }
    )), r && Array.isArray(this.answer?.workExperience) && this.answer.workExperience.length > 0 && (await operations.processCompositeBlocks(this.answer.workExperience, enums.FIELD_TYPE.EMPLOYMENT, this.operationConfig, this.taskQueue, void 0, {
      onSectionResultChanged: this.progressTracker.updateSectionResult
    }), this.progressTracker.updateFilledProgress("Employment"));
  }
  async executeSiteSpecificSteps(e) {
    let t = this.hasCoverLetterInput();
    t && this.syncCoverLetterTrackingField(), this.didUploadCoverLetterSuccessfully = false, t && this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName && (this.taskQueue.add(async () => {
      let e2 = await operations.uploadCoverLetter({
        coverLetterId: this.coverLetter.coverLetterId,
        coverLetterName: this.coverLetter.coverLetterName,
        markdown: this.coverLetter.markdown,
        useLegacyDownload: this.coverLetter.useLegacyDownload
      }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
      if (!e2) {
        this.progressTracker.updateMissedProgress("Cover Letter");
        return;
      }
      this.didUploadCoverLetterSuccessfully = true;
    }), await this.taskQueue.run()), !t || (this.didUploadCoverLetterSuccessfully ? this.progressTracker.fieldStatus.filledFields.includes("Cover Letter") || this.progressTracker.updateFilledProgress("Cover Letter") : this.progressTracker.fieldStatus.missingFields.includes("Cover Letter") || this.progressTracker.updateMissedProgress(
      "Cover Letter"
    )), await super.executeSiteSpecificSteps(e);
  }
  async getAutofillSnapshot(e) {
    return rules.getTrackingFormSnapshot();
  }
  async getSubmitSnapshot() {
    return rules.getTrackingFormSnapshot();
  }
  getSubmitButtonSelector() {
    return './/form[contains(@class, "rjsf")]//button[@type="submit"] | .//form[contains(@class, "rjsf")]//input[@type="submit"]';
  }
  submitApplication() {
    operations.getContinueButton()?.click()
  }
}
