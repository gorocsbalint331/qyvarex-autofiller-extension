/**
 * Parcel module id: 6GcvC
 * Resolved path: src/contents/sites/polymer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/polymer/answer -> XfQNt  =>  src/contents/sites/polymer/answer.js
 *   ~contents/sites/polymer/operations -> 75HQr  =>  src/contents/sites/polymer/operations.js
 *   ~contents/sites/polymer/rules -> i5Zyz  =>  src/contents/sites/polymer/rules.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Polymer", () => c);
var o = e("~contents/methods/dom"),
  i = e("~contents/sites/base-filler"),
  a = e("~contents/sites/polymer/answer"),
  l = e("~contents/sites/polymer/operations"),
  s = e("~contents/sites/polymer/rules"),
  u = e("~core/enums");
class c extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [u.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, l.fillTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [u.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, l.fillReactSelect)(e.$input, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  getSiteName() {
    return "polymer"
  }
  hasUploadOnlyForm() {
    return !!(0, l.findUploaderInput)("resume") || !!(0, l.getPolymerCoverLetterStatus)()
  }
  async extractFormRules() {
    return (0, s.getRules)()
  }
  formatAnswer(e) {
    return (0, a.formatAnswer)(e)
  }
  async checkCoverLetter() {
    (0, o.postCoverLetterStatus)((0, l.getPolymerCoverLetterStatus)())
  }
  async handleResumeUpload() {
    let e = (0, l.findUploaderInput)("resume");
    !this.disableUploadResume && this.resumeInfo?.id && e ? this.taskQueue.add(async () => {
      await (0, l.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
    }) : e && (this.progressTracker.updateFieldRequiredStatus({
      label: "Resume/CV",
      required: e.required
    }), e.required && this.progressTracker.updateMissedProgress("Resume/CV"));
    let t = (0, l.getPolymerCoverLetterStatus)();
    t && this.progressTracker.updateFieldRequiredStatus({
      label: "Cover Letter",
      required: "required" === t
    });
    let r = this.coverLetter;
    t && r?.coverLetterId && r.coverLetterName ? this.taskQueue.add(async () => {
        let e = await (0, l.uploadCoverLetter)({
            coverLetterId: r.coverLetterId,
            coverLetterName: r.coverLetterName,
            markdown: r.markdown,
            useLegacyDownload: r.useLegacyDownload
          }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
          .updateFilledProgress);
        e || "required" !== t || this.progressTracker.updateMissedProgress("Cover Letter")
      }) : "required" === t && this.progressTracker.updateMissedProgress("Cover Letter"),
      await this.taskQueue.run()
  }
  getSubmitButtonSelector() {
    return './/button[contains(@class, "ApplicationForm_Button")]'
  }
  async getAutofillSnapshot(e) {
    return (0, s.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, s.getFormSnapshot)()
  }
  submitApplication() {
    s.getSubmitButton()?.click()
  }
}

