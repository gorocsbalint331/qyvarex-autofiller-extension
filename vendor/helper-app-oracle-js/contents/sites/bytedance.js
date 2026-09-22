/**
 * Parcel module id: jVtpK
 * Resolved path: contents/sites/bytedance.js (oracle restore)
 * Dependencies:
 *   ./operations -> 4D6AE  =>  src/contents/sites/bytedance/operations.js
 *   ./rules -> 8j7Jw  =>  src/contents/sites/bytedance/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~contents/sites/bytedance/answer -> ZCM0a  =>  _tilde_contents/sites/bytedance/answer.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "ByteDance", () => f);
var o = e("~contents/methods/answer"),
  i = e("~contents/sites/base-filler"),
  a = e("~contents/sites/bytedance/answer"),
  l = e("~core/dom"),
  s = e("~core/enums"),
  u = e("~core/xpath"),
  c = e("./operations"),
  d = e("./rules");
class f extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [s.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (!r) return;
        let n = this.answer?.country;
        if (e.label?.trim().toLowerCase() === "mobile") {
          let t = this.answer?.regular?.__mobileAreaCode || "";
          return (0, c.fillInputTextField)(e.$input, String(r ?? ""), t, n)
        }
        return (0, c.fillInputTextField)(e.$input, String(r ?? ""), void 0, n)
      },
      [s.FIELD_TYPE.DATE]: {
        handler: (e, t) => {},
        options: {
          expectArray: !1
        }
      },
      [s.FIELD_TYPE.SELECT]: (e, t) => (0, c.fillSelectField)(e, t),
      [s.FIELD_TYPE.CHECKBOX]: (e, t) => (0, c.fillCheckboxField)(e, t),
      [s.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, c.fillRadioGroupFiled)(e, t)
    }
  }
  buildOperationConfig() {
    let e = super.buildOperationConfig();
    return e[s.FIELD_TYPE.DATE] = (0, a.createDateFillHandler)({
      fillInputTextField: c.fillInputTextField,
      updateFilledProgress: this.progressTracker.updateFilledProgress.bind(this
        .progressTracker),
      updateMissedProgress: this.progressTracker.updateMissedProgress.bind(this
        .progressTracker)
    }), e
  }
  dedupeSectionRulesForBackend(e) {
    let t = new Set,
      r = [];
    for (let n of e) {
      if (n.type === s.FIELD_TYPE.EDUCATION || n.type === s.FIELD_TYPE.EMPLOYMENT) {
        let e = String(n.type);
        if (t.has(e)) continue;
        t.add(e)
      }
      r.push(n)
    }
    return r
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules(),
      r = [],
      n = new Set;
    for (let e of t) {
      let t = e.type;
      if (t === s.FIELD_TYPE.EDUCATION || t === s.FIELD_TYPE.EMPLOYMENT) {
        let e = String(t);
        if (n.has(e)) continue;
        n.add(e)
      }
      r.push({
        label: e.label,
        required: e.required ?? null,
        options: e.options,
        type: e.type
      })
    }
    this.progressTracker.setFieldsRequiredStatus(r), await this.handleResumeUpload();
    let o = this.dedupeSectionRulesForBackend(t),
      i = await this.fetchFormAnswers(o, e);
    return "string" == typeof i ? i : (this.answer = (0, a.formatAnswer)(this.answer),
      await this.fillRegularFields(t), await this.executeSiteSpecificSteps(t), this
      .finalizeFillForm())
  }
  async runPreFillForm() {
    this.taskQueue.add(c.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, d.extractRules)()
  }
  getSiteName() {
    return "bytedance"
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, c.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, c.removeResume)(), await (0, c.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {
    if (Array.isArray(this.answer?.education) && this.answer.education.length > 0) {
      await (0, c.addEducationSection)(this.answer.education.length);
      let e = (0, d.getEducationRules)();
      (0, l.setSectionResultFocusRules)(s.FIELD_TYPE.EDUCATION, e);
      let t = (0, o.getEducationOperations)(e, this.answer.education, this.operationConfig,
        void 0, (0, o.sectionProgressCallbacks)("Education", this.progressTracker));
      for (let e of t) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
    if (Array.isArray(this.answer?.workExperience) && this.answer.workExperience.length > 0) {
      await (0, c.addEmploymentSection)(this.answer.workExperience.length);
      let e = (0, d.getExperienceRules)();
      (0, l.setSectionResultFocusRules)(s.FIELD_TYPE.EMPLOYMENT, e);
      let t = e?.[0]?.label || "Work Experience",
        r = (0, o.getEmploymentOperations)(e, this.answer.workExperience, this.operationConfig,
          void 0, (0, o.sectionProgressCallbacks)(t, this.progressTracker));
      for (let e of r) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
  }
  async executeSiteSpecificSteps(e) {
    await this.fillEducationAndEmployment(e), await (0, c.ensurePrivacyPolicyChecked)(),
      await super.executeSiteSpecificSteps(e)
  }
  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(@class, "submit") or contains(normalize-space(.), "Submit")]'
  }
  async getAutofillSnapshot(e) {
    this._lastRules = e;
    let t = await (0, d.getFormSnapshot)(e),
      {
        education: r,
        employment: n,
        ...o
      } = t;
    return this._lastEducation = Array.isArray(r) ? r : [], this._lastEmployment = Array
      .isArray(n) ? n : [], o
  }
  async getSubmitSnapshot() {
    let e = await (0, d.getFormSnapshot)(this._lastRules),
      {
        education: t,
        employment: r,
        ...n
      } = e;
    return this._lastEducation = Array.isArray(t) ? t : [], this._lastEmployment = Array
      .isArray(r) ? r : [], n
  }
  getAdditionalAutofillSnapshotData(e) {
    return {
      education: this._lastEducation,
      employment: this._lastEmployment
    }
  }
  getAdditionalSubmitSnapshotData() {
    return {
      education: this._lastEducation,
      employment: this._lastEmployment
    }
  }
  submitApplication() {
    let e = './/button[@type="submit" or contains(@class, "submit")]',
      t = (0, u.getFirstOrderedNode)(e);
    t && t.click()
  }
  constructor(...e) {
    super(...e), this._lastRules = [], this._lastEducation = [], this._lastEmployment = []
  }
}

