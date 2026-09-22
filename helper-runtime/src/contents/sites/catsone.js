/**
 * Parcel module id: hNdaV
 * Resolved path: src/contents/sites/catsone.js
 * Dependencies:
 *   ./answer -> dotEY  =>  src/contents/sites/catsone/answer.js
 *   ./operations -> euMfJ  =>  src/contents/sites/catsone/operations.js
 *   ./rules -> 5Fn00  =>  src/contents/sites/catsone/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Catsone", () => f);
var o = e("~contents/sites/base-filler"),
  i = e("~core/enums"),
  a = e("~core/xpath"),
  l = e("./operations"),
  s = e("./rules"),
  u = e("./answer"),
  c = e("~contents/methods/dom");
let d =
  './/button[@type="submit"] | .//input[@type="submit"] | .//button[.//span[normalize-space()="Submit Application"]] | .//button[contains(@class, "submit")] | .//button[contains(normalize-space(.), "Submit")] | .//button[contains(normalize-space(.), "Apply")] | .//button[contains(normalize-space(.), "Send")] | .//input[contains(@value, "Submit")] | .//input[contains(@value, "Apply")]';
class f extends o.BaseFiller {
  getFieldHandlers() {
    return {
      [i.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (r) return (0, l.fillInputTextField)(e.$input, String(r ?? ""))
      },
      [i.FIELD_TYPE.DATE]: (e, t) => {
        let r = t?.[0];
        if (r) return (0, l.fillDateField)(e.$input, String(r ?? ""))
      },
      [i.FIELD_TYPE.SELECT]: (e, t) => (0, l.fillSelectField)(e, t),
      [i.FIELD_TYPE.CHECKBOX]: (e, t) => (0, l.fillCheckboxField)(e, t),
      [i.FIELD_TYPE.RADIO]: (e, t) => (0, l.fillRadioFiled)(e, t),
      [i.FIELD_TYPE.MULTI_SELECT]: (e, t) => (0, l.fillMultiSelectField)(e, t)
    }
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(t), await this.handleResumeUpload(), t =
      await this.extractFormRules(), this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    return "string" == typeof r ? r : (this.answer = (0, u.formatAnswer)(this.answer),
      await this.fillRegularFields(t), await this.executeSiteSpecificSteps(t), this
      .finalizeFillForm())
  }
  async executeSiteSpecificSteps(e) {
    let t = (0, l.getCatsoneCoverLetterStatus)();
    if (t) {
      if (this.progressTracker.updateFieldRequiredStatus({
          label: "Cover Letter",
          required: "required" === t
        }), this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName) {
        let e = await (0, l.uploadCoverLetter)({
            coverLetterId: this.coverLetter.coverLetterId,
            coverLetterName: this.coverLetter.coverLetterName,
            markdown: this.coverLetter.markdown,
            useLegacyDownload: this.coverLetter.useLegacyDownload
          }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
          .updateFilledProgress);
        e || "required" !== t || this.progressTracker.updateMissedProgress("Cover Letter")
      } else "required" === t && this.progressTracker.updateMissedProgress("Cover Letter")
    }
    await this.bindSubmitButtonTracking(e)
  }
  async checkCoverLetter() {
    (0, c.postCoverLetterStatus)((0, l.getCatsoneCoverLetterStatus)())
  }
  async runPreFillForm() {
    this.taskQueue.add(l.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, s.extractRules)()
  }
  getSiteName() {
    return "catsone"
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, l.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, l.removeResume)(), await (0, l.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  getSubmitButtonSelector() {
    return d
  }
  async getAutofillSnapshot(e) {
    return await (0, s.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return await (0, s.getFormSnapshot)()
  }
  submitApplication() {
    let e = (0, a.getFirstOrderedNode)(d);
    e ? e.click() : console.warn("[submitApplication] No submit button found")
  }
}

