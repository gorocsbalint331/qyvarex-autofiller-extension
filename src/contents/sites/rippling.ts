// @ts-nocheck
/**
 * Rippling ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and rippling/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "rippling"
 */

import * as messaging from "@plasmohq/messaging"
import * as dom from "../methods/dom.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as corePhoneCountryCode from "../../core/phone-country-code.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as answerModule from "./rippling/answer.ts"
import * as phoneValue from "./rippling/phone-value.ts"
import * as locationOperation from "./rippling/location-operation.ts"
import * as operations from "./rippling/operations.ts"
import * as rules from "./rippling/rules.ts"
import * as submitTracking from "./rippling/submit-tracking.ts"
function g(e, t) {
  if (!t || !/phone|mobile/i.test(e)) return false;
  if ("phone_number" === t.getAttribute("data-input")) return true;
  if (t instanceof HTMLInputElement) {
    let e2 = (t.type || "").toLowerCase();
    if ("tel" === e2) return true;
    let r = (t.id || "").toLowerCase(), n = (t.name || "").toLowerCase(), o2 = `${r} ${n}`;
    if (/phone|mobile|cell/.test(o2) && !/country|dial|areacode|prefix|code\s*select/i.test(o2))
      return true;
  }
  return false;
}
class Rippling extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: async (e, t) => {
          let r = t?.[0];
          if (locationOperation.isRipplingCanonicalLocationRule(e)) {
            let t2 = locationOperation.getRipplingLocationOriginalAnswer(this.answer, r);
            if (!t2) throw Error("Rippling canonical Location answer is empty");
            let n = locationOperation.extractRipplingGooglePlacesPredictionRequest(document, t2) || await locationOperation.bootstrapRipplingGooglePlacesPredictionRequest(e.$input, t2);
            if (!n) throw Error("Rippling Google Places prediction request is unavailable");
            let i2 = locationOperation.buildRipplingLocationOperation({
              currentUrl: window.location.href,
              originalAnswer: t2,
              predictionRequestUrl: n
            }), a = await messaging.sendToBackground({
              name: "resolveAutofillOperation",
              body: {
                operation: i2,
                source: "rippling"
              }
            }), l2 = locationOperation.getRipplingResolvedLocationValue(a);
            if (!l2) throw Error("Rippling canonical Location resolve returned empty");
            return operations.fillResolvedLocationInput(e, l2);
          }
          if (r) return g(e.label, e.$input) ? operations.fillInputTextField(e.$input, (0, phoneValue.resolveRipplingNationalPhoneValue)(r, this.answer)) : (0, operations.fillInputTextField)(e.$input, String(r ?? ""));
        },
        options: {
          expectArray: true
        }
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (e, t) => operations.fillSelectField(e, t),
        options: {
          expectArray: true
        }
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => operations.fillCheckboxField(e, t),
        options: {
          expectArray: true
        }
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => operations.fillRadioGroupFiled(e, t),
        options: {
          expectArray: true
        }
      }
    };
  }
  async checkCoverLetter() {
    dom.postCoverLetterStatus(await operations.waitForRipplingCoverLetterSlot() ? "optional" : "");
  }
  async doFillForm(e = false) {
    await this.initializeFillForm();
    let t = await autofillInfo.useAutofillInfoStore.getState().fetchAutofillInfo(), r = {
      phoneCountryCode: t?.phoneCountryCode,
      country: t?.location?.country
    }, n = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(n);
    let o2 = await this.requestFormAnswers(n, e);
    return "string" == typeof o2 ? o2 : (o2 && (this.answer = o2), await this.handleResumeUpload(), n = await this.extractFormRules(), this.progressTracker.setFieldsRequiredStatus(n), await this.selectRipplingPhoneCountry(r), await this.fillRegularFields(n), await this.fillEducationAndEmployment(n), await this.runRipplingPostFillSteps(), await this.bindSubmitButtonTracking(n), await this.finalizeFillForm());
  }
  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm), await this.taskQueue.run();
  }
  async extractFormRules() {
    return await rules.extractRules();
  }
  getSiteName() {
    return "rippling";
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await operations.removeResume(), this.progressTracker.updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await operations.removeResume(), await operations.uploadResume(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
    });
    let e = this.coverLetter?.coverLetterId;
    if (e) {
      let t = {
        coverLetterId: e,
        coverLetterName: this.coverLetter?.coverLetterName || "Cover Letter",
        markdown: this.coverLetter?.markdown,
        useLegacyDownload: this.coverLetter?.useLegacyDownload
      };
      this.taskQueue.add(async () => {
        await operations.uploadCoverLetter(
          t,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress
        );
      });
    }
    await this.taskQueue.run();
  }
  async fillEducationAndEmployment(e) {
    if (Array.isArray(this.answer.education)) {
      this.taskQueue.add(async () => {
        await operations.addEducationSection(this.answer.education.length);
      }), await this.taskQueue.run();
      let t = e.filter((e2) => e2.type === enums.FIELD_TYPE.EDUCATION);
      for (let e2 of answerModule.getEducationOperations(t, this.answer.education, this.operationConfig, {
        onSectionResultChanged: this.progressTracker.updateSectionResult
      })) this.taskQueue.add(e2);
      await this.taskQueue.run();
    }
    if (Array.isArray(this.answer.workExperience)) {
      this.taskQueue.add(async () => {
        await operations.addEmploymentSection(this.answer.workExperience.length);
      }), await this.taskQueue.run();
      let t = e.filter((e2) => e2.type === enums.FIELD_TYPE.EMPLOYMENT);
      for (let e2 of answerModule.getEmploymentOperations(t, this.answer.workExperience, this.operationConfig, {
        onSectionResultChanged: this.progressTracker.updateSectionResult
      })) this.taskQueue.add(e2);
      await this.taskQueue.run();
    }
  }
  async selectRipplingPhoneCountry(e) {
    this.taskQueue.add(async () => {
      let t = await operations.selectPhoneCountryCode(this.answer.regular, e);
      t ? this.progressTracker.updateFilledProgress(corePhoneCountryCode.PHONE_COUNTRY_CODE_LABEL) : this.progressTracker.updateMissedProgress(corePhoneCountryCode.PHONE_COUNTRY_CODE_LABEL);
    }), await this.taskQueue.run(), this.taskQueue.add(async () => {
      document.activeElement?.blur?.(), document.body.click(), await new Promise((e2) => setTimeout(e2, 100));
    }), await this.taskQueue.run();
  }
  async fillRegularFields(e) {
    return await super.fillRegularFields(e.filter((e2) => e2.label !== corePhoneCountryCode.PHONE_COUNTRY_CODE_LABEL));
  }
  async runRipplingPostFillSteps() {
    this.taskQueue.add(async () => {
      await this.closeOpenDatepicker();
    }), await this.taskQueue.run();
  }
  async closeOpenDatepicker() {
    let e = document.activeElement;
    e?.blur?.(), await new Promise((e2) => setTimeout(e2, 200));
    let t = document.querySelector(".react-datepicker-popper, .react-datepicker__tab-loop");
    if (!t) {
      document.body.click(), await new Promise((e2) => setTimeout(e2, 100));
      return;
    }
    document.dispatchEvent(new KeyboardEvent("keydown", {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      which: 27,
      bubbles: true,
      cancelable: true
    })), await new Promise((e2) => setTimeout(e2, 100)), document.querySelector(
      ".react-datepicker-popper"
    ) && (document.body.dispatchEvent(new MouseEvent(
      "mousedown",
      {
        bubbles: true,
        cancelable: true,
        view: window
      }
    )), await new Promise((e2) => setTimeout(e2, 100))), document.querySelector(
      ".react-datepicker-popper"
    ) && (document.querySelectorAll(
      ".react-datepicker-ignore-onclickoutside"
    ).forEach((e2) => {
      e2 instanceof HTMLElement && e2.blur();
    }), document.body.click(), await new Promise((e2) => setTimeout(e2, 100)));
  }
  async getAutofillSnapshot() {
    return rules.getFormSnapshot();
  }
  async getSubmitSnapshot() {
    return rules.getFormSnapshot();
  }
  getAdditionalAutofillSnapshotData() {
    return rules.getEduAndEmploymentSnapshot();
  }
  getAdditionalSubmitSnapshotData() {
    return rules.getEduAndEmploymentSnapshot();
  }
  getSubmitTrackingDelegationRoot() {
    return document;
  }
  resolveDelegatedSubmitButton(e) {
    return submitTracking.resolveRipplingSubmitButton(e);
  }
  submitApplication() {
    submitTracking.getRipplingSubmitButton()?.click();
  }
}

export {
  Rippling,
}
