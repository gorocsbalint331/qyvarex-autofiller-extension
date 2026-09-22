/**
 * Parcel module id: kQ6A7
 * Resolved path: src/contents/sites/recruitee.js
 * Dependencies:
 *   ./answer -> dh2wu  =>  src/contents/sites/recruitee/answer.js
 *   ./operations -> 5JPg9  =>  src/contents/sites/recruitee/operations.js
 *   ./rules -> jCgho  =>  src/contents/sites/recruitee/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Recruitee", () => p);
var o = e("~contents/methods/dom"),
  i = e("~contents/methods/track"),
  a = e("~contents/sites/base-filler"),
  l = e("~core/enums"),
  s = e("~core/xpath"),
  u = e("./answer"),
  c = e("./operations"),
  d = e("./rules");
let f = '//button[contains(@type, "submit")] | //button[contains(@class, "submit")]';
class p extends a.BaseFiller {
  getFieldHandlers() {
    return {
      [l.FIELD_TYPE.TEXT]: {
        handler: (e, t) => "number" === e.__recruiteePhoneField ? (0, c
          .fillRecruiteePhoneNumberField)(e, t) : (0, c.fillInputTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [l.FIELD_TYPE.SELECT]: {
        handler: (e, t) => "country" === e.__recruiteePhoneField ? (0, c
          .fillRecruiteePhoneCountryField)(e, this.answer) : (0, c.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [l.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, c.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [l.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, c.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  getSiteName() {
    return "recruitee"
  }
  async extractFormRules() {
    return (0, d.extractRules)()
  }
  formatAnswer(e) {
    return (0, u.formatAnswer)(e, this.rules)
  }
  async checkCoverLetter() {
    (0, o.postCoverLetterStatus)((0, c.hasCoverLetterSlot)() ? "required" : "")
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.rules = t, this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    return "string" == typeof r ? r : (this.bindLegacySubmitStatus(), await this
      .fillRegularFields(t), await (0, c.agreementCheckboxField)(), await this
      .handleResumeUpload(), await this.handleFileCoverLetterUpload(), await this.taskQueue
      .run(), await this.bindSubmitButtonTracking(t), this.finalizeFillForm())
  }
  bindLegacySubmitStatus() {
    let e = (0, s.getFirstOrderedNodeSafe)(f, document.body);
    this.legacySubmitStatusAbortController?.abort(), this.legacySubmitStatusAbortController =
      null, e && (this.legacySubmitStatusAbortController = new AbortController, (0, i
        .bindSubmitButton)(e.textContent || "Submit", this.progressTracker.fieldStatus, this
        .timeTrace, this.legacySubmitStatusAbortController.signal))
  }
  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV");
      return
    }
    this.taskQueue.add(async () => {
      await (0, c.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
    })
  }
  async handleFileCoverLetterUpload() {
    (0, c.hasCoverLetterSlot)() && (this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: !0
      }), this.coverLetter?.coverLetterId && this.coverLetter.coverLetterName ? this.taskQueue
      .add(async () => {
        let e = await (0, c.uploadCoverLetter)(this.coverLetter, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        e || this.progressTracker.updateMissedProgress("Cover Letter")
      }) : this.progressTracker.updateMissedProgress("Cover Letter"))
  }
  getSubmitButtonSelector() {
    return f
  }
  async getAutofillSnapshot(e) {
    return this.rules = e, (0, d.getFormSnapshot)(e)
  }
  async getSubmitSnapshot() {
    return (0, d.getFormSnapshot)(this.rules)
  }
  submitApplication() {
    let e = (0, s.getFirstOrderedNodeSafe)(f, document.body);
    e?.click()
  }
  constructor(...e) {
    super(...e), this.rules = [], this.legacySubmitStatusAbortController = null
  }
}

