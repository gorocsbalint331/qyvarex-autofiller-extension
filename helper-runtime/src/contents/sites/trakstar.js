/**
 * Parcel module id: 4fCvO
 * Resolved path: src/contents/sites/trakstar.js
 * Dependencies:
 *   ./operations -> laDXi  =>  src/contents/sites/trakstar/operations.js
 *   ./rules -> buuka  =>  src/contents/sites/trakstar/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Trakstar", () => f);
var o = e("~contents/sites/base-filler"),
  i = e("~contents/methods/dom"),
  a = e("~core/enums"),
  l = e("~core/xpath"),
  s = e("~utils/delay"),
  u = e("./operations"),
  c = e("./rules");
let d = e => {
  if (!e) return !1;
  let t = e.getBoundingClientRect();
  if (t.width <= 0 || t.height <= 0) return !1;
  let r = e;
  for (; r;) {
    let e = window.getComputedStyle(r);
    if ("none" === e.display || "hidden" === e.visibility) return !1;
    r = r.parentElement
  }
  return !0
};
class f extends o.BaseFiller {
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, u.fillInputTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [a.FIELD_TYPE.SELECT]: (e, t) => (0, u.fillSelectField)(e, t),
      [a.FIELD_TYPE.CHECKBOX]: (e, t) => (0, u.fillCheckboxField)(e, t),
      [a.FIELD_TYPE.RADIO]: (e, t) => (0, u.fillRadioField)(e, t)
    }
  }
  async runPreFillForm() {
    let e = document.querySelector("form#job_application_form");
    if (!e) return;
    let t = e.querySelector('input:not([type="hidden"]), textarea, select');
    if (d(t)) return;
    let r = document.querySelector(
      ".js-apply-for-job, #div_apply_to_job a.btn-apply, a.btn-apply") || Array.from(document
      .querySelectorAll("button, a, input[type='button']")).find(e => {
      let t = e.textContent || e.getAttribute("value") || "";
      return /apply/i.test(t) && !/indeed/i.test(t)
    });
    r?.click(), await (0, s.delay)(500)
  }
  async extractFormRules() {
    return (0, c.extractRules)()
  }
  getSiteName() {
    return "trakstar"
  }
  hasUploadOnlyForm() {
    return !!(0, u.getResumeInput)() || !!(0, u.getCoverLetterInput)()
  }
  async checkCoverLetter() {
    (0, i.postCoverLetterStatus)((0, u.getCoverLetterStatus)())
  }
  async handleResumeUpload() {
    let e = (0, u.getResumeInput)();
    !this.disableUploadResume && this.resumeInfo?.id && e ? this.taskQueue.add(async () => {
        await (0, u.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }) : e && (this.progressTracker.updateFieldRequiredStatus({
        label: "Resume/CV",
        required: e.required
      }), e.required && this.progressTracker.updateMissedProgress("Resume/CV")), await this
      .taskQueue.run();
    let t = (0, u.getCoverLetterInput)();
    t && (this.coverLetter?.coverLetterId && this.coverLetter.coverLetterName ? (this.taskQueue
      .add(async () => {
        await (0, u.uploadCoverLetter)({
            coverLetterId: this.coverLetter.coverLetterId,
            coverLetterName: this.coverLetter.coverLetterName,
            markdown: this.coverLetter.markdown,
            useLegacyDownload: this.coverLetter.useLegacyDownload
          }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
          .updateFilledProgress)
      }), await this.taskQueue.run()) : t.required && (this.progressTracker
      .updateFieldRequiredStatus({
        label: "Cover Letter",
        required: !0
      }), this.progressTracker.updateMissedProgress("Cover Letter")))
  }
  getSubmitButtonSelector() {
    return '//form[@id="job_application_form"]//input[@type="submit"] | //form[@id="job_application_form"]//button[@type="submit"]'
  }
  async getAutofillSnapshot(e) {
    return (0, c.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, c.getFormSnapshot)()
  }
  submitApplication() {
    let e = (0, l.getFirstOrderedNodeSafe)(this.getSubmitButtonSelector());
    e && !e.disabled && e.click()
  }
}

