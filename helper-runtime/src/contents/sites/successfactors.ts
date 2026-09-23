// @ts-nocheck
/**
 * SuccessFactors ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and successfactors/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "successfactors"
 */

import * as messaging from "@plasmohq/messaging"
import * as autofillSignupInformation from "../../api/autofill-signup-information.js"
import * as answerMethods from "../methods/answer.ts"
import * as cancellation from "../methods/cancellation.ts"
import * as rulesMethods from "../methods/rules.ts"
import * as track from "../methods/track.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as coreDom from "../../core/dom.js"
import * as xpath from "../../core/xpath.js"
import * as delay from "../../utils/delay.js"
import * as sfAnswer from "./successfactors/answer.ts"
import * as operations from "./successfactors/operations.ts"
import * as dom from "../methods/dom.ts"
import * as registrationCredentials from "./successfactors/registration-credentials.ts"
import * as registrationPrivacy from "./successfactors/registration-privacy.ts"
import * as rules from "./successfactors/rules.ts"
import * as signInCredentials from "./successfactors/signin-credentials.ts"
const SITE_NAME = "successfactors";
function isCountryRule(e) {
  return e.label?.replace(/[*:]/g, " ").replace(/\s+/g, " ").trim().toLowerCase() === "country";
}
class SuccessFactors extends BaseFiller {
  constructor() {
    super(), this.cachedRules = null, this.cachedRulesPageSignature = null, this.nextButtonHandler = null;
  }
  async doFillForm(e = false) {
    if (signInCredentials.findSuccessFactorsSignInFields()) {
      this.resetFalconResponseAccumulator(), this.answer = {
        education: [],
        workExperience: [],
        skills: [],
        regular: {}
      }, this.cachedRules = null, this.cachedRulesPageSignature = null, this.timeTrace = {
        rulesParseStartTime: Date.now(),
        requestStartTime: 0,
        fillStartTime: 0
      }, this.progressTracker.clear(), this.taskQueue.clear();
      let [e2, t2] = await Promise.all([messaging.sendToBackground({
        name: "getAutofillInfo",
        body: {
          forceRefresh: true
        }
      }).catch(() => null), registrationCredentials.loadSuccessFactorsRegistrationPassword()]);
      cancellation.checkpoint();
      let r2 = await signInCredentials.fillSuccessFactorsSignInCredentials({
        email: autofillSignupInformation.resolveSignupRegistrationEmail(e2),
        password: t2
      });
      for (let e3 of (this.progressTracker.setFieldsRequiredStatus([{
        label: "Email",
        required: true
      }, {
        label: "Password",
        required: true
      }]), ["email", "password"])) {
        let t3 = "email" === e3 ? "Email" : "Password";
        r2.filledRoles.includes(e3) || r2.skippedExistingRoles.includes(e3) ? this.progressTracker.updateFilledProgress(t3) : this.progressTracker.updateMissedProgress(t3);
      }
      return super.finalizeFillForm();
    }
    await this.initializeFillForm(), await this.handleResumeUpload(), await this.runPreFillForm();
    let t = null;
    if (registrationCredentials.findSuccessFactorsRegistrationEmailFields().section) {
      let e2 = await messaging.sendToBackground({
        name: "getAutofillInfo",
        body: {
          forceRefresh: true
        }
      }).catch(() => null);
      cancellation.checkpoint(), t = await registrationCredentials.fillSuccessFactorsRegistrationEmails({
        email: autofillSignupInformation.resolveSignupRegistrationEmail(e2)
      });
    }
    let r = registrationCredentials.findSuccessFactorsRegistrationPasswordFields();
    if (r.section) {
      let e2 = await registrationCredentials.loadSuccessFactorsRegistrationPassword(), t2 = await registrationCredentials.fillSuccessFactorsRegistrationPasswords({
        password: e2
      });
      console.info("[SuccessFactorsRegistrationCredentials]", JSON.stringify({
        foundSection: t2.foundSection,
        foundRoleCount: t2.foundRoles.length,
        filledRoleCount: t2.filledRoles.length,
        skippedExistingRoleCount: t2.skippedExistingRoles.length,
        rejectedRoleCount: t2.rejectedRoles.length
      }));
    }
    let n = await this.extractFormRules();
    if (this.progressTracker.setFieldsRequiredStatus(n), this.restoreResumeProgressAfterRulesRefresh(), t?.foundSection)
      for (let e2 of t.foundRoles) {
        let r2 = "email" === e2 ? "Email Address:" : "Retype Email Address:";
        this.progressTracker.updateFieldRequiredStatus({
          label: r2,
          required: true
        }), t.filledRoles.includes(e2) ? this.progressTracker.updateFilledProgress(r2) : this.progressTracker.updateMissedProgress(r2);
      }
    let a2 = this.preprocessRulesForAnswer(n), s2 = await this.fetchFormAnswers(a2, e);
    if ("string" == typeof s2) return s2;
    let u2 = await this.fillCountryFromProfile();
    await this.fillEducationAndEmployment(n), await this.fillRegularFields(this.cachedRules ?? n, {
      skipProfileCountry: u2
    }), await this.executeSiteSpecificSteps(n);
    let c = await registrationPrivacy.acceptSuccessFactorsRegistrationPrivacy();
    return c.foundRegistrationForm && console.info("[SuccessFactorsRegistrationPrivacy]", JSON.stringify(c)), await this.finalizeFillForm();
  }
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (r) return operations.fillInputTextField(e.$input, String(r ?? ""));
      },
      [enums.FIELD_TYPE.SELECT]: (e, t) => operations.fillSelectField(e, t),
      [enums.FIELD_TYPE.CHECKBOX]: (e, t) => operations.fillCheckboxField(e, t),
      [enums.FIELD_TYPE.RADIOGROUP]: (e, t) => operations.fillRadioGroupFiled(e, t),
      [enums.FIELD_TYPE.EDUCATION]: (e, t) => operations.fillSelectField(e, t),
      [enums.FIELD_TYPE.EMPLOYMENT]: (e, t) => operations.fillSelectField(e, t)
    };
  }
  async runPreFillForm() {
    await operations.preclickAddButtons(), await delay.delay(500);
  }
  async extractFormRules() {
    let e = this.getCurrentPageSignature();
    return this.cachedRulesPageSignature !== e && (this.cachedRules = null, this.cachedRulesPageSignature = e), this.cachedRules || (this.cachedRules = await rules.extractRules()), this.cachedRules;
  }
  getCurrentPageSignature() {
    let e = "undefined" == typeof window ? "" : window.location?.href || "", t = !!document.querySelector(".profileUpperLayout"), r = !!document.querySelector("#questions"), n = document.querySelector(
      "#apply-profileInformation-form, #questions, .profileUpperLayout, .profileLowerLayout, form, main"
    ), o2 = [n?.id, n?.getAttribute("aria-label"), n?.className].filter(Boolean).join("|");
    return [e, t ? "profile" : "", r ? "questions" : "", o2].join("::");
  }
  preprocessRulesForAnswer(e) {
    return rules.prepareSuccessFactorsRulesForAnswer(e);
  }
  restoreResumeProgressAfterRulesRefresh() {
    let e = this.progressTracker.fieldStatus.filledFields.includes("Resume/CV") || this.progressTracker.fieldStatus.missingFields.includes("Resume/CV");
    e && this.progressTracker.updateFieldRequiredStatus({
      label: "Resume/CV",
      required: true,
      type: "file"
    });
  }
  async fetchFormAnswers(e, t) {
    try {
      this.token || (this.token = await answerMethods.getSiteToken());
      let r = rulesMethods.filterRulesByLabel(e, []), n = this.captureFalconResponseRun(), o2 = await answerMethods.getElementRules(r, SITE_NAME, this.token, t, this.resumeInfo?.id, this.resumeInfo?.tailorId);
      this.recordFalconResponse(o2, n), this.answer = sfAnswer.formatAnswer(o2), this.timeTrace.fillStartTime = Date.now();
    } catch (e2) {
      if (e2 instanceof answerMethods.HTTPError || e2 instanceof answerMethods.ResumeMissingCodeError) return track.sendHttpStatusMessage(e2.message), e2.message;
    }
    cancellation.checkpoint();
  }
  async fillRegularFields(e, t = {}) {
    let r = e.filter((e2) => e2.type !== enums.FIELD_TYPE.EDUCATION && e2.type !== enums.FIELD_TYPE.EMPLOYMENT && !(t.skipProfileCountry && isCountryRule(e2))), n = answerMethods.getRegularOperations(r, this.answer.regular, this.operationConfig).map((e2) => async () => {
      try {
        await e2();
      } catch (e3) {
        console.warn("Error filling field:", e3);
      }
    });
    for (let e2 of n) this.taskQueue.add(e2);
    await this.taskQueue.run();
  }
  async fillCountryFromProfile() {
    let e = this.answer?.country;
    if (null == e || "" === String(e).trim()) return false;
    let t = xpath.getFirstOrderedNode(
      "//input[@aria-label='Country' or @aria-label='Country:']",
      document
    );
    if (!t) return false;
    let r = await operations.fillCountryCombobox(t, String(e).trim());
    return r ? (this.progressTracker.updateFilledProgress("Country"), true) : (this.progressTracker.updateMissedProgress("Country"), false);
  }
  async fillEducationAndEmployment(e) {
    this.answer && (await operations.expandForm(this.answer), await delay.delay(500), this.cachedRules = await rules.extractRules());
    let t = this.cachedRules || e, r = t.filter((e2) => e2.type === enums.FIELD_TYPE.EDUCATION), n = t.filter((e2) => e2.type === enums.FIELD_TYPE.EMPLOYMENT), o2 = this.getSectionProgressLabel(n, "Employment"), i2 = this.getSectionProgressLabel(r, "Education");
    if (this.answer && (r.length > 0 || n.length > 0)) {
      coreDom.setSectionResultFocusRules("employment", n);
      let e2 = answerMethods.getEmploymentOperations(n, this.answer.workExperience, this.operationConfig, void 0, {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onCompleted: () => {
          n.length > 0 && this.progressTracker.updateFilledProgress(o2);
        },
        onSkipped: () => this.progressTracker.updateMissedProgress(o2)
      });
      coreDom.setSectionResultFocusRules("education", r);
      let t2 = answerMethods.getEducationOperations(
        r,
        this.answer.education,
        this.operationConfig,
        void 0,
        {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onCompleted: () => {
            r.length > 0 && this.progressTracker.updateFilledProgress(i2);
          },
          onSkipped: () => this.progressTracker.updateMissedProgress(i2)
        }
      ), l2 = [...e2, ...t2];
      for (let e3 of l2) this.taskQueue.add(e3);
      await this.taskQueue.run();
    }
  }
  getSectionProgressLabel(e, t) {
    return e.find((e2) => e2.label?.trim())?.label?.trim() || t;
  }
  async handleResumeUpload() {
    if (this.resumeInfo && operations.hasSuccessFactorsResumeUploadSurface()) {
      let e = operations.captureSuccessFactorsExperienceRows();
      try {
        await operations.uploadResume(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress), await operations.cleanupSuccessFactorsParsedExperienceRows(e);
      } catch {
        this.progressTracker.updateMissedProgress("Resume/CV");
      }
    }
  }
  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getSuccessFactorsCoverLetterStatus());
  }
  async executeSiteSpecificSteps(e) {
    await operations.fillSkills(this.answer);
    let t = operations.getSuccessFactorsCoverLetterStatus();
    if (t && this.progressTracker.updateFieldRequiredStatus({
      label: "Cover Letter",
      required: "required" === t
    }), this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName) {
      let e2 = await operations.uploadCoverLetter({
        coverLetterId: this.coverLetter.coverLetterId,
        coverLetterName: this.coverLetter.coverLetterName,
        markdown: this.coverLetter.markdown,
        useLegacyDownload: this.coverLetter.useLegacyDownload
      }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
      e2 || "required" !== t || this.progressTracker.updateMissedProgress("Cover Letter");
    } else "required" === t && this.progressTracker.updateMissedProgress("Cover Letter");
    ["mousedown", "mouseup", "click"].forEach((e2) => {
      document.dispatchEvent(new MouseEvent(e2, {
        bubbles: true
      }));
    }), await super.executeSiteSpecificSteps(e);
  }
  getSubmitTrackingDelegationRoot() {
    return document;
  }
  resolveDelegatedSubmitButton(e) {
    let t = "BUTTON" === e.tagName ? e : e.closest("button");
    if (t) {
      let e2 = t.textContent?.trim().toLowerCase() || "", r2 = "Next" === t.getAttribute("title") && "Next" === t.getAttribute("name") && "button" === t.getAttribute("type") || "submit" === t.getAttribute("type") && "apply" === t.getAttribute("value") || e2.includes("apply");
      return r2 ? t : null;
    }
    let r = "button" === e.getAttribute("role") && e.getAttribute("id")?.includes(
      "submitBtn"
    ) && (e.textContent?.toLowerCase().includes("apply") ?? false);
    return r ? e : null;
  }
  getSiteName() {
    return "successfactors";
  }
  async getAutofillSnapshot(e) {
    return await rules.getFormSnapshot();
  }
  async getSubmitSnapshot() {
    return rules.getFormSnapshot();
  }
  getAdditionalAutofillSnapshotData(e) {
    return rules.getAdditionalFormSnapshotData();
  }
  getAdditionalSubmitSnapshotData() {
    return rules.getAdditionalFormSnapshotData();
  }
  submitApplication() {
    let e = './/button[@type="submit" or contains(@class, "submit")]', t = xpath.getFirstOrderedNode(e);
    t && t?.click();
  }
  finalizeFillForm() {
    let e = rules.getFormSnapshot(), t = rules.getAdditionalFormSnapshotData(), r = document.querySelector('button[title="Next"][name="Next"][type="button"]');
    return r && (this.nextButtonHandler && r.removeEventListener("click", this.nextButtonHandler), this.nextButtonHandler = operations.submitHandler.bind(null, e, t), r.addEventListener("click", this.nextButtonHandler)), super.finalizeFillForm();
  }
}

export {
  SuccessFactors,
}
