/**
 * Parcel module id: 3gFNd
 * Resolved path: contents/sites/okta.js (oracle restore)
 * Dependencies:
 *   ./answer -> 92sgA  =>  src/contents/sites/okta/answer.js
 *   ./operations -> 4Peux  =>  src/contents/sites/okta/operations.js
 *   ./rules -> 78502  =>  src/contents/sites/okta/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/track -> h479b  =>  _tilde_contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Okta", () => p);
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
        handler: (e, t) => (0, c.fillInputTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [l.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, c.fillSelectField)(e, t),
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
    return "okta"
  }
  async extractFormRules() {
    return (0, d.extractRules)()
  }
  formatAnswer(e) {
    return (0, u.formatAnswer)(e)
  }
  async checkCoverLetter() {
    (0, o.postCoverLetterStatus)((0, c.getOktaCoverLetterStatus)())
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.rules = t, this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    return "string" == typeof r ? r : (this.bindLegacySubmitStatus(), await this
      .fillRegularFields(t), await (0, c.agreementCheckboxField)(), await this
      .handleResumeUpload(), await this.handleFileCoverLetterUpload(), await this.taskQueue
      .run(), this.progressTracker.updateFilledProgress("Country"), await this
      .bindSubmitButtonTracking(t), this.finalizeFillForm())
  }
  bindLegacySubmitStatus() {
    this.legacySubmitStatusAbortController?.abort(), this.legacySubmitStatusAbortController =
      new AbortController;
    let e = (0, s.getFirstOrderedNodeSafe)(f, document.body);
    e && (0, i.bindSubmitButton)(e.textContent || "Submit", this.progressTracker.fieldStatus,
      this.timeTrace, this.legacySubmitStatusAbortController.signal)
  }
  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV");
      return
    }
    this.taskQueue.add(async () => {
      try {
        let e = await (0, c.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        e || this.progressTracker.updateMissedProgress("Resume/CV")
      } catch (e) {
        console.error("Error uploading Okta resume:", e), this.progressTracker
          .updateMissedProgress("Resume/CV")
      }
    })
  }
  async handleFileCoverLetterUpload() {
    let e = (0, c.getOktaCoverLetterStatus)();
    "required" === e && this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: !0,
        type: "file"
      }), "required" === e && this.coverLetter?.coverLetterId && this.coverLetter
      .coverLetterName ? this.taskQueue.add(async () => {
        try {
          let e = await (0, c.uploadCoverLetter)(this.coverLetter, this.progressTracker
            .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
          e || this.progressTracker.updateMissedProgress("Cover Letter")
        } catch (e) {
          console.error("Error uploading Okta cover letter:", e), this.progressTracker
            .updateMissedProgress("Cover Letter")
        }
      }) : "required" === e && this.progressTracker.updateMissedProgress("Cover Letter")
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

