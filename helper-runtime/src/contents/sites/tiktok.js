/**
 * Parcel module id: 9OkhZ
 * Resolved path: src/contents/sites/tiktok.js
 * Dependencies:
 *   ./operations -> 3hmvY  =>  src/contents/sites/tiktok/operations.js
 *   ./rules -> 52Ram  =>  src/contents/sites/tiktok/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/tiktok/answer -> jM4Cn  =>  src/contents/sites/tiktok/answer.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Tiktok", () => b);
var o = e("~contents/methods/answer"),
  i = e("~contents/sites/base-filler"),
  a = e("~contents/sites/tiktok/answer"),
  l = e("~core/dom"),
  s = e("~core/enums"),
  u = e("~core/xpath"),
  c = e("./operations"),
  d = e("./rules");

function f(e) {
  return String(e || "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
}

function p(e, t) {
  return !!e && Object.entries(e).some(([e, r]) => f(e) === t && (Array.isArray(r) ? r.some(e =>
    null != e && String(e).trim()) : null != r && String(r).trim()))
}

function m(e, t) {
  return f(e.label) === t
}

function h(e, t) {
  let r = e.find(e => m(e, t));
  if (!r?.$input) return !1;
  let n = r.$input.value;
  return "string" == typeof n && n.trim().length > 0
}

function g(e, t) {
  let r = e.find(e => m(e, t)),
    n = r?.$input?.closest?.(".ud__select");
  if (n) return !!n.querySelector(".ud__select__selector__selectItem")?.textContent?.trim();
  let o = r?.$input?.closest?.(".atsx-phone");
  return !!(o?.querySelector('[data-cy="selectedValue"] [data-cy-value]')?.getAttribute(
    "data-cy-value") || o?.querySelector('[data-cy="selectedValue"]')?.textContent?.trim())
}
class b extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [s.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (r) return (0, c.fillInputTextField)(e.$input, String(r ?? ""))
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
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules(),
      r = t.filter(e => e.type !== s.FIELD_TYPE.EDUCATION && e.type !== s.FIELD_TYPE.EMPLOYMENT)
      .length;
    console.debug(
      `[tiktok][rules] fill request total=${t.length}, normal=${r}, name=${t.some(e=>m(e,"name"))}, email=${t.some(e=>m(e,"email"))}, phoneCountryCode=${t.some(e=>m(e,"phonecountrycode"))}, mobile=${t.some(e=>m(e,"mobile"))}, education=${t.filter(e=>e.type===s.FIELD_TYPE.EDUCATION).length}, employment=${t.filter(e=>e.type===s.FIELD_TYPE.EMPLOYMENT).length}`
      );
    let n = [],
      o = new Set;
    for (let e of t) {
      let t = e.type;
      if (t === s.FIELD_TYPE.EDUCATION || t === s.FIELD_TYPE.EMPLOYMENT) {
        let e = String(t);
        if (o.has(e)) continue;
        o.add(e)
      }
      n.push({
        label: e.label,
        required: e.required ?? null,
        options: e.options,
        type: e.type
      })
    }
    this.progressTracker.setFieldsRequiredStatus(n), await this.handleResumeUpload();
    let i = await this.fetchFormAnswers(t, e);
    if ("string" == typeof i) return i;
    this.answer = (0, a.formatAnswer)(this.answer);
    let l = this.answer?.regular;
    return console.debug(
      `[tiktok][answers] regularKeys=${Object.keys(l||{}).length}, name=${p(l,"name")}, email=${p(l,"email")}, phoneCountryCode=${p(l,"phonecountrycode")}, mobile=${p(l,"mobile")}, education=${this.answer?.education?.length||0}, employment=${this.answer?.workExperience?.length||0}`
      ), await this.fillRegularFields(t), console.debug(
      `[tiktok][regular-fill] name=${h(t,"name")}, email=${h(t,"email")}, phoneCountryCode=${g(t,"phonecountrycode")}, mobile=${h(t,"mobile")}`
      ), await this.executeSiteSpecificSteps(t), this.finalizeFillForm()
  }
  async runPreFillForm() {
    this.taskQueue.add(c.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, d.extractRules)()
  }
  getSiteName() {
    return "tiktok"
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
    await this.fillEducationAndEmployment(e), await (0, c.fillOthersConditionalFields)(this
      .answer?.regular ?? {}), await super.executeSiteSpecificSteps(e)
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

