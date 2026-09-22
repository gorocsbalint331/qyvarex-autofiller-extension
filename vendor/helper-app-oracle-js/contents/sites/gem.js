/**
 * Parcel module id: eT4X2
 * Resolved path: contents/sites/gem.js (oracle restore)
 * Dependencies:
 *   ./answer -> dRGXb  =>  src/contents/sites/gem/answer.js
 *   ./operations -> 2OQ69  =>  src/contents/sites/gem/operations.js
 *   ./rules -> fXFdA  =>  src/contents/sites/gem/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Gem", () => c);
var o = e("~contents/methods/dom"),
  i = e("~contents/sites/base-filler"),
  a = e("~core/enums"),
  l = e("./answer"),
  s = e("./operations"),
  u = e("./rules");
class c extends i.BaseFiller {
  async requestFormAnswers(e, t, r = {}) {
    return (0, l.requestGemAnswers)(e, e => super.requestFormAnswers(e, t, r))
  }
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (!r) return;
        let n = "file" === e.$input.type;
        return n ? Promise.resolve() : (0, s.fillInputTextField)(e.$input, String(r ?? ""))
      },
      [a.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, s.fillRadioGroupFiled)(e, t),
      [a.FIELD_TYPE.CHECKBOX]: (e, t) => (0, s.fillCheckboxGroupField)(e, t),
      [a.FIELD_TYPE.SELECT]: (e, t) => (0, s.fillSelectField)(e, t)
    }
  }
  async runPreFillForm() {
    this.taskQueue.add(s.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, u.extractRules)()
  }
  getSiteName() {
    return "gem"
  }
  async checkCoverLetter() {
    (0, o.postCoverLetterStatus)((0, s.getGemCoverLetterStatus)())
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, s.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, s.removeResume)(), await (0, s.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async getAutofillSnapshot(e) {
    return await (0, u.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return await (0, u.getFormSnapshot)()
  }
  async executeSiteSpecificSteps(e) {
    let t = (0, s.getGemCoverLetterStatus)();
    t && this.progressTracker.updateFieldRequiredStatus({
      label: "Cover Letter",
      required: "required" === t
    });
    let r = this.coverLetter;
    r?.coverLetterId && r.coverLetterName ? (this.taskQueue.add(async () => {
        let e = await (0, s.uploadCoverLetter)({
            coverLetterId: r.coverLetterId,
            coverLetterName: r.coverLetterName,
            markdown: r.markdown,
            useLegacyDownload: r.useLegacyDownload
          }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
          .updateFilledProgress);
        e || "required" !== t || this.progressTracker.updateMissedProgress("Cover Letter")
      }), await this.taskQueue.run()) : "required" === t && this.progressTracker
      .updateMissedProgress("Cover Letter"), await this.bindSubmitButtonTracking(e)
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    let t = "BUTTON" === e.tagName ? e : e.closest("button");
    if (!t) return null;
    let r = t.textContent?.trim() || "",
      n = "submit" === t.getAttribute("type") || r.includes("Apply and save") || r.includes(
        "Apply without saving") || "Apply" === r;
    return n ? t : null
  }
  submitApplication() {
    let e = Array.from(document.querySelectorAll('button[type="submit"]'));
    if (0 === e.length) return;
    let t = e.find(e => e.textContent?.trim().includes("Apply and save"));
    t || (t = e.find(e => e.textContent?.trim().includes("Apply without saving"))), t || (t = e
        .find(e => e.textContent?.trim().includes("Apply"))), t || (t = e[0]), t && !t
      .disabled && t.click()
  }
}

