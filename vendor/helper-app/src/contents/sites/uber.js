/**
 * Parcel module id: jpdPu
 * Resolved path: src/contents/sites/uber.js
 * Dependencies:
 *   ./answer -> 4fNc6  =>  src/contents/sites/uber/answer.js
 *   ./operations -> hjxys  =>  src/contents/sites/uber/operations.js
 *   ./rules -> k57Bl  =>  src/contents/sites/uber/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Uber", () => c);
var o = e("~contents/sites/base-filler"),
  i = e("~core/enums"),
  a = e("~core/xpath"),
  l = e("./operations"),
  s = e("./rules"),
  u = e("./answer");
class c extends o.BaseFiller {
  constructor() {
    super(), this.lastRules = [];
    let e = this.progressTracker.updateFilledProgress;
    this.progressTracker.updateFilledProgress = t => {
      this.progressTracker.fieldStatus.filledFields.includes(t) || e.call(this
        .progressTracker, t)
    }
  }
  getFieldHandlers() {
    return {
      [i.FIELD_TYPE.TEXT]: async (e, t) => {
        let r = t?.[0];
        return null != r && await (0, l.fillInputTextField)(e.$input, String(r ?? ""), e)
      },
      [i.FIELD_TYPE.SELECT]: (e, t) => (0, l.fillSelectField)(e, t),
      [i.FIELD_TYPE.CHECKBOX]: (e, t) => (0, l.fillCheckboxField)(e, t),
      [i.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, l.fillRadioGroupFiled)(e, t)
    }
  }
  buildOperationConfig() {
    let e = super.buildOperationConfig(),
      t = e[i.FIELD_TYPE.TEXT];
    return t && (e[i.FIELD_TYPE.TEXT] = async (e, r, n = !0) => {
      if ((0, l.isLinkField)(e.label)) {
        let t = (0, l.createLinksFieldOperationHandler)(this.progressTracker
          .updateFilledProgress.bind(this.progressTracker), this.progressTracker
          .updateMissedProgress.bind(this.progressTracker));
        return t(e, r, n)
      }
      if ((0, l.isDescriptionField)(e.label)) {
        let t = (0, l.createDescriptionFieldOperationHandler)(this.progressTracker
          .updateFilledProgress.bind(this.progressTracker), this.progressTracker
          .updateMissedProgress.bind(this.progressTracker));
        return t(e, r, n)
      }
      return t(e, r, n)
    }), e
  }
  async runPreFillForm() {
    this.taskQueue.add(l.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, s.extractRules)()
  }
  getSiteName() {
    return "uber"
  }
  async fillRegularFields(e) {
    let t = e.filter(e => {
      let t = e.$input;
      if (!t) return !1;
      let r = (0, l.isLinkField)(e.label);
      if (r) {
        if (t.isConnected) return !0;
        let e = (0, s.findMainForm)();
        if (e && t.name) {
          let r = e.querySelector(`input[name="${t.name}"]`);
          if (r && (r === t || r.name === t.name && r.type === t.type && r.id === t.id))
            return !0
        }
        return !1
      }
      return !!t.isConnected
    });
    return await super.fillRegularFields(t)
  }
  async executeSiteSpecificSteps(e) {
    await (0, l.fillConditionalAccommodationsQuestion)(this.answer), await super
      .executeSiteSpecificSteps(e)
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.lastRules = t;
    let r = t.filter(e => {
      let t = e.$input;
      return !!t && !!t.isConnected
    });
    for (let e of r) e.type === i.FIELD_TYPE.RADIOGROUP && (e.required = !0);
    let n = r.map(e => ({
      label: e.label,
      required: !0 === e.required,
      type: e.type === i.FIELD_TYPE.RADIOGROUP ? "radio" : e.type === i.FIELD_TYPE
        .CHECKBOX ? "checkbox" : e.type === i.FIELD_TYPE.SELECT ? "select" : e.type === i
        .FIELD_TYPE.TEXT ? "text" : void 0,
      options: e.options
    }));
    this.progressTracker.setFieldsRequiredStatus(n);
    let o = await this.fetchFormAnswers(t, e);
    if ("string" == typeof o) return o;
    try {
      this.answer = (0, u.formatAnswer)(this.answer)
    } catch (e) {}
    try {
      let e = Array.isArray(this.answer?.workExperience) && this.answer.workExperience.length >
        0;
      if (!e) {
        let e = (0, u.buildEmploymentRecordsFromRegular)(this.answer?.regular);
        e.length > 0 && (this.answer.workExperience = e, this.answer = (0, u.formatAnswer)(this
          .answer))
      }
    } catch (e) {}
    try {
      let e = Array.isArray(this.answer?.education) && this.answer.education.length > 0;
      if (!e) {
        let e = (0, u.buildEducationRecordsFromRegular)(this.answer?.regular);
        e.length > 0 && (this.answer.education = e, this.answer = (0, u.formatAnswer)(this
          .answer))
      }
    } catch (e) {}
    await this.handleResumeUpload();
    try {
      await this.fillRegularFields(t)
    } catch (e) {}
    try {
      await (0, l.fillEducationAndEmploymentSections)(this.answer, this.taskQueue, this
        .operationConfig, s.getEducationRules, s.getEmploymentRules, s.sortEducationFields, s
        .sortEmploymentFields, {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onEducationCompleted: () => this.progressTracker.updateFilledProgress("Education"),
          onEmploymentCompleted: () => this.progressTracker.updateFilledProgress("Employment")
        })
    } catch (e) {}
    try {
      await this.executeSiteSpecificSteps(r)
    } catch (e) {}
    try {
      await (0, l.reapplyFirstLastNameFromRecord)((0, s.findMainForm)(), this.answer?.regular)
    } catch (e) {}
    return (0, l.checkConditionalAccommodationsRequirement)(this.progressTracker), (0, l
      .validateRequiredRadioGroups)(this.progressTracker), this.finalizeFillForm()
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, l.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, l.removeResume)(), await (0, l.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {}
  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(normalize-space(.), "Submit application")]'
  }
  async getAutofillSnapshot(e) {
    return this.lastRules = e, await (0, s.getFormSnapshotFromRules)(e)
  }
  async getSubmitSnapshot() {
    return this.lastRules.length > 0 ? await (0, s.getFormSnapshotFromRules)(this.lastRules) :
      await (0, s.getFormSnapshotWithEducationAndEmployment)()
  }
  submitApplication() {
    let e = this.getSubmitButtonSelector(),
      t = (0, a.getFirstOrderedNode)(e);
    t?.click()
  }
  async initializeFillForm() {
    await super.initializeFillForm(), window.uberScrollToField = l.scrollToField
  }
}

