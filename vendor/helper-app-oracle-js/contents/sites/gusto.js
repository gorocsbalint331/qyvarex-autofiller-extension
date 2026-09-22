/**
 * Parcel module id: htn4O
 * Resolved path: contents/sites/gusto.js (oracle restore)
 * Dependencies:
 *   ./answer -> FFIyS  =>  src/contents/sites/gusto/answer.js
 *   ./operations -> bsufU  =>  src/contents/sites/gusto/operations.js
 *   ./rules -> 8bOoA  =>  src/contents/sites/gusto/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Gusto", () => d);
var o = e("~contents/methods/dom"),
  i = e("~contents/sites/base-filler"),
  a = e("~core/enums"),
  l = e("~core/xpath"),
  s = e("./answer"),
  u = e("./operations"),
  c = e("./rules");
class d extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (null != r && "" !== r) return (0, u.fillInputTextField)(e.$input, String(r ?? ""))
      },
      [a.FIELD_TYPE.DATE]: {
        handler: () => {},
        options: {
          expectArray: !1
        }
      },
      [a.FIELD_TYPE.SELECT]: (e, t) => (0, u.fillSelectField)(e, t),
      [a.FIELD_TYPE.CHECKBOX]: (e, t) => (0, u.fillCheckboxField)(e, t),
      [a.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, u.fillRadioGroupFiled)(e, t)
    }
  }
  buildOperationConfig() {
    let e = super.buildOperationConfig();
    return e[a.FIELD_TYPE.DATE] = (0, s.createDateFillHandler)({
      fillInputTextField: u.fillInputTextField,
      updateFilledProgress: this.progressTracker.updateFilledProgress.bind(this
        .progressTracker),
      updateMissedProgress: this.progressTracker.updateMissedProgress.bind(this
        .progressTracker)
    }), e
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules(),
      r = [];
    for (let e of t) r.push({
      label: e.label,
      required: e.required ?? null,
      options: e.options,
      type: e.type
    });
    this.progressTracker.setFieldsRequiredStatus(r), await this.handleResumeUpload();
    let n = await this.fetchFormAnswers((0, c.buildGustoRequestRules)(t), e);
    return "string" == typeof n ? n : (await this.fillRegularFields(t), await this
      .executeSiteSpecificSteps(t), this.finalizeFillForm())
  }
  async runPreFillForm() {
    this.taskQueue.add(u.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, c.extractRules)()
  }
  getSiteName() {
    return "gusto"
  }
  async checkCoverLetter() {
    let e = document.querySelector("#job_applicant_cover_letter"),
      t = "";
    e && (t = e.getAttribute("required") ? "required" : "optional"), (0, o
      .postCoverLetterStatus)(t)
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, u.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, u.removeResume)();
      let e = await (0, u.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
      e || this.progressTracker.updateMissedProgress("Resume/CV")
    }), await this.taskQueue.run()
  }
  async executeSiteSpecificSteps(e) {
    this.coverLetter?.coverLetterId && this.taskQueue.add(async () => {
      let e = await (0, u.uploadCoverLetter)(this.coverLetter, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
      e || this.progressTracker.updateMissedProgress("Cover Letter")
    }), await this.taskQueue.run(), await super.executeSiteSpecificSteps(e)
  }
  async getAutofillSnapshot(e) {
    return await (0, c.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return await (0, c.getFormSnapshot)()
  }
  getSubmitButtonSelector() {
    return './/form[@id="job-applicant-form"]//input[@type="submit" and (@name="commit" or contains(@value, "Submit your application") or contains(@data-disable-with, "Submit your application"))] | .//form[@id="job-applicant-form"]//button[@type="submit" or contains(normalize-space(.), "Submit your application") or contains(normalize-space(.), "Apply")]'
  }
  submitApplication() {
    let e = this.getSubmitButtonSelector();
    if (!e) return;
    let t = (0, l.getFirstOrderedNodeSafe)(e);
    t && !t.disabled && t.click()
  }
}

