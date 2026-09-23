// @ts-nocheck
/**
 * Taleo ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and taleo/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "taleo"
 */

import * as executor from "../crawler/utils/executor.js"
import * as filler from "../shared/filler.js"
import * as answerMethods from "../methods/answer.js"
import * as dom from "../methods/dom.js"
import * as observer from "../methods/observer.js"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as taleoAnswer from "./taleo/answer.ts"
import * as operations from "./taleo/operations.ts"
import * as rules from "./taleo/rules.ts"
class Taleo extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: async (e, t) => {
          let r = await operations.fillTaleoTextField(e.$input, t);
          if (!r) throw new filler.ValueError(`Failed to fill ${e.label}`);
        },
        options: {
          expectArray: false
        }
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: async (e, t) => {
          let r = await operations.fillTaleoTextField(e.$input, t);
          if (!r) throw new filler.ValueError(`Failed to fill ${e.label}`);
        },
        options: {
          expectArray: false
        }
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: async (e, t) => {
          let r = await operations.fillTaleoCheckboxField(e, t);
          if (!r) throw new filler.ValueError(`Failed to fill ${e.label}`);
        },
        options: {
          expectArray: true
        }
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: async (e, t) => {
          let r = await operations.fillTaleoSelectField(e.$input, t);
          if (!r) throw new filler.ValueError(`Failed to fill ${e.label}`);
        },
        options: {
          expectArray: true
        }
      },
      [enums.FIELD_TYPE.DROPDOWN]: {
        handler: async (e, t) => {
          let r = await operations.fillTaleoDropdownField(e.$input, t, e.label, this.answer?.country || this.answer?.regular?.Country);
          if (!r) throw new filler.ValueError(`Failed to fill ${e.label}`);
        },
        options: {
          expectArray: true
        }
      }
    };
  }
  getSiteName() {
    return "taleo";
  }
  async runPreFillForm() {
    this.typeIndex = rules.getTaleoTypeIndex();
  }
  async checkCoverLetter() {
    await observer.waitForCondition(() => !!rules.getCwsV2CoverLetterTextarea({
      requireVisible: false
    }), {
      timeout: 4e3,
      interval: 100,
      observeTarget: document.body
    }), dom.postCoverLetterStatus(rules.getCwsV2CoverLetterTextarea({
      requireVisible: false
    }) ? "optional" : "");
  }
  async extractFormRules() {
    let [e] = await rules.extractRules({
      typeIndex: this.typeIndex
    });
    return this.lastRules = e, e;
  }
  async doFillForm(e = false) {
    await this.initializeFillForm();
    let t = this.prepareCoverLetterRules(await this.extractFormRules());
    if (this.progressTracker.setFieldsRequiredStatus(t), 0 === t.length) return console.info(
      "[TaleoResumeUpload] resume-only-page",
      {
        disableUploadResume: this.disableUploadResume
      }
    ), await this.handleResumeUpload(), await this.finalizeFillForm();
    let r = await this.fetchFormAnswers(t, e);
    if ("string" == typeof r) return r;
    await this.handleResumeUpload(), await this.fillRegularFields(t), await this.fillEducationAndEmployment(t), await this.fillCoverLetterFields();
    let n = await this.runComboQuestionAutofillIfNeeded(t, e);
    return "string" == typeof n ? n : (t = n, await this.executeSiteSpecificSteps(t), await this.finalizeFillForm());
  }
  async fillRegularFields(e) {
    let t = e.filter(
      (e2) => e2.type !== enums.FIELD_TYPE.SECTION && e2.type !== enums.FIELD_TYPE.EDUCATION && e2.type !== enums.FIELD_TYPE.EMPLOYMENT && e2.type !== enums.FIELD_TYPE.COVER_LETTER
    ), r = answerMethods.getRegularOperations(t, this.answer.regular, this.operationConfig);
    for (let e2 of r) this.taskQueue.add(e2);
    await this.taskQueue.run();
  }
  async fillEducationAndEmployment(e) {
    let t = false, r = false;
    for (let n2 of e) n2.type === enums.FIELD_TYPE.EDUCATION && (t = true), n2.type === enums.FIELD_TYPE.EMPLOYMENT && (r = true);
    let n = await operations.fillTaleoHardCodeSection(operations.TALEO_HARDCODE_CONFIG.education, this.answer?.education || [], this.typeIndex, this.progressTracker) || [], i2 = await operations.fillTaleoHardCodeSection(operations.TALEO_HARDCODE_CONFIG.workExperience, this.answer?.workExperience || [], this.typeIndex, this.progressTracker) || [], a2 = n.length > 0, l2 = i2.length > 0;
    (a2 || l2) && await executor.executeSequentially(...n, ...i2), a2 ? this.progressTracker.updateFilledProgress("Education") : t && this.progressTracker.updateMissedProgress(
      "Education"
    ), l2 ? this.progressTracker.updateFilledProgress("Employment") : r && this.progressTracker.updateMissedProgress("Employment");
  }
  async handleResumeUpload() {
    await operations.uploadTaleoFiles({
      disableUploadResume: this.disableUploadResume,
      progressTracker: this.progressTracker,
      resumeInfo: this.resumeInfo
    });
  }
  async executeSiteSpecificSteps(e) {
    await executor.delay(1e3), await operations.clickSuggestInputSpan(), await super.executeSiteSpecificSteps(e);
  }
  async getAutofillSnapshot(e) {
    let [t] = await rules.extractRules({
      typeIndex: this.typeIndex
    });
    this.lastRules = t;
    let r = await rules.getFormSnapshot(t), {
      education: n,
      employment: o2,
      ...i2
    } = r;
    return this.lastEducationSnapshot = Array.isArray(n) ? n : [], this.lastEmploymentSnapshot = Array.isArray(o2) ? o2 : [], i2;
  }
  async getSubmitSnapshot() {
    let [e] = await rules.extractRules({
      typeIndex: this.typeIndex
    });
    this.lastRules = e;
    let t = await rules.getFormSnapshot(e), {
      education: r,
      employment: n,
      ...o2
    } = t;
    return this.lastEducationSnapshot = Array.isArray(r) ? r : [], this.lastEmploymentSnapshot = Array.isArray(n) ? n : [], o2;
  }
  getAdditionalAutofillSnapshotData() {
    return {
      education: this.lastEducationSnapshot,
      employment: this.lastEmploymentSnapshot
    };
  }
  getAdditionalSubmitSnapshotData() {
    return {
      education: this.lastEducationSnapshot,
      employment: this.lastEmploymentSnapshot
    };
  }
  getSubmitButtonSelector() {
    return ".//button[@test-id='application-next-step'] | .//input[@value='Save and Continue'] | .//input[@value='Submit']";
  }
  submitApplication() {
    let e = xpath.getFirstOrderedNode(this.getSubmitButtonSelector());
    e?.click();
  }
  constructor(...e) {
    super(...e), this.typeIndex = 0, this.lastRules = [], this.lastEducationSnapshot = [], this.lastEmploymentSnapshot = [], this.formatAnswer = (e2) => taleoAnswer.formatAnswer(e2, this.typeIndex);
  }
}

export {
  Taleo,
}
