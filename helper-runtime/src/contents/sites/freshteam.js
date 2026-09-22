/**
 * Parcel module id: jqMtR
 * Resolved path: src/contents/sites/freshteam.js
 * Dependencies:
 *   ./operations -> 4rngB  =>  src/contents/sites/freshteam/operations.js
 *   ./rules -> 2Z3hS  =>  src/contents/sites/freshteam/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Freshteam", () => d);
var o = e("~contents/methods/track"),
  i = e("~contents/sites/base-filler"),
  a = e("~core/enums"),
  l = e("~core/xpath"),
  s = e("./operations"),
  u = e("./rules");
let c =
  '//input[@id="submit-button" and @type="submit"] | //input[@type="submit" and @value="Submit Application"] | //button[contains(@type, "submit")] | //button[contains(@class, "submit")]';
class d extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, s.fillInputTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [a.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, s.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [a.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, s.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [a.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, s.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [a.FIELD_TYPE.DATE]: {
        handler: (e, t) => (0, s.fillDateField)(e.$input, t),
        options: {
          expectArray: !1
        }
      }
    }
  }
  getSiteName() {
    return "freshteam"
  }
  async extractFormRules() {
    return (0, u.extractRules)()
  }
  checkCoverLetter() {
    (0, s.checkCoverLetter)()
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm(), await (0, u.clearExistingEntries)();
    let t = await this.extractFormRules();
    this.rules = t, this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers((0, u.buildFreshteamRequestRules)(t), e);
    return "string" == typeof r ? r : (this.bindLegacySubmitStatus(), await this
      .fillRegularFields(t), await this.fillStructuredSections(), await this
      .handleResumeUpload(), await this.handleFileCoverLetterUpload(), await this.taskQueue
      .run(), await this.bindSubmitButtonTracking(t), this.finalizeFillForm())
  }
  bindLegacySubmitStatus() {
    this.legacySubmitStatusAbortController?.abort(), this.legacySubmitStatusAbortController =
      new AbortController;
    let e = (0, l.getFirstOrderedNodeSafe)(c, document.body);
    e && (0, o.bindSubmitButton)(e.textContent || "Submit", this.progressTracker.fieldStatus,
      this.timeTrace, this.legacySubmitStatusAbortController.signal)
  }
  async fillStructuredSections() {
    this.answer.education?.length > 0 && await (0, s.fillEducationFields)(this.rules, this
        .answer.education, this.operationConfig, this.taskQueue, this.progressTracker
        .updateFilledProgress.bind(this.progressTracker), this.progressTracker), this.answer
      .workExperience?.length > 0 && await (0, s.fillEmploymentFields)(this.rules, this.answer
        .workExperience, this.operationConfig, this.taskQueue, this.progressTracker
        .updateFilledProgress.bind(this.progressTracker), this.progressTracker)
  }
  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV");
      return
    }
    this.taskQueue.add(async () => {
      await (0, s.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
    })
  }
  async handleFileCoverLetterUpload() {
    let e = (0, s.getFreshteamCoverLetterStatus)();
    e && this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: "required" === e
      }), this.coverLetter?.coverLetterId && this.coverLetter.coverLetterName ? this.taskQueue
      .add(async () => {
        let t = await (0, s.uploadCoverLetter)(this.coverLetter, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        t || "required" !== e || this.progressTracker.updateMissedProgress("Cover Letter")
      }) : "required" === e && this.progressTracker.updateMissedProgress("Cover Letter")
  }
  getSubmitButtonSelector() {
    return c
  }
  async getAutofillSnapshot(e) {
    return this.rules = e, (0, u.getFormSnapshot)(e)
  }
  async getSubmitSnapshot() {
    return (0, u.getFormSnapshot)(this.rules)
  }
  submitApplication() {
    let e = (0, l.getFirstOrderedNodeSafe)(c, document.body);
    e?.click()
  }
  constructor(...e) {
    super(...e), this.rules = [], this.legacySubmitStatusAbortController = null
  }
}

