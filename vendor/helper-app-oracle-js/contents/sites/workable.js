/**
 * Parcel module id: 2rZII
 * Resolved path: contents/sites/workable.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  _tilde_contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/section-results -> 6WWsC  =>  _tilde_contents/methods/section-results.js
 *   ~contents/methods/track -> h479b  =>  _tilde_contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~contents/sites/workable/answer -> 4X7iu  =>  _tilde_contents/sites/workable/answer.js
 *   ~contents/sites/workable/operations -> bQ04a  =>  _tilde_contents/sites/workable/operations.js
 *   ~contents/sites/workable/phone-country-code -> 5lsEB  =>  _tilde_contents/sites/workable/phone-country-code.js
 *   ~contents/sites/workable/rules -> 7FMtF  =>  _tilde_contents/sites/workable/rules.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Workable", () => g);
var o = e("~contents/methods/section-results"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/methods/dom"),
  s = e("~contents/methods/track"),
  u = e("~contents/sites/base-filler"),
  c = e("~contents/sites/workable/answer"),
  d = e("~contents/sites/workable/operations"),
  f = e("~contents/sites/workable/phone-country-code"),
  p = e("~contents/sites/workable/rules"),
  m = e("~core/enums"),
  h = e("~core/xpath");
class g extends u.BaseFiller {
  getFieldHandlers() {
    return {
      [m.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, d.fillReactInputField)(e.$input, t, e.label, (0, f
          .resolveWorkablePhoneCountryCode)(this.answer)),
        options: {
          expectArray: !1
        }
      },
      [m.FIELD_TYPE.NUMBER]: {
        handler: (e, t) => (0, d.fillReactInputField)(e.$input, t, e.label),
        options: {
          expectArray: !1
        }
      },
      [m.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, d.fillWorkableCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [m.FIELD_TYPE.SELECT]: {
        handler: (e, t) => e.label === f.WORKABLE_PHONE_COUNTRY_CODE_LABEL ? (0, d
            .fillWorkablePhoneCountryCode)(e, String(t[0] ?? "")) : (0, d.fillCustomSelectField)
          (e.$input, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  buildOperationConfig() {
    return super.buildOperationConfig()
  }
  async checkCoverLetter() {
    await (0, d.preFillForm)(), (0, l.postCoverLetterStatus)((0, p.getWorkableCoverLetterStatus)
      (document))
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = this.prepareCoverLetterRules(await this.extractFormRules());
    this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    if ("string" == typeof r) return r;
    this.ensureAgreementCheckboxAnswers(t), (0, s.bindSubmitButton)((0, p.getSubmitButtonText)
      (), this.progressTracker.fieldStatus, this.timeTrace), await this.fillRegularFields(t),
      await this.fillEducationAndEmployment(t), await this.handleResumeUpload(), this.taskQueue
      .add(async () => {
        await (0, d.fillDateInDetailsSection)()
      }), this.taskQueue.add(() => {
        (0, d.blurPage)()
      }), await this.taskQueue.run(), await this.fillCoverLetterFields();
    let n = t;
    return this.hasAgreementCheckboxRules(t) && (n = await this.extractFormRules(), await this
        .recheckAgreementCheckboxes(n)), await this.executeSiteSpecificSteps(n), this
      .finalizeFillForm()
  }
  async runPreFillForm() {
    this.taskQueue.add(d.preFillForm), await this.taskQueue.run(), this.taskQueue.add(
  async () => {
        await (0, d.preclickAddButtons)()
      }), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, p.getRules)()
  }
  getSiteName() {
    return "workable"
  }
  formatAnswer(e) {
    return (0, c.formatAnswer)(e)
  }
  ensureAgreementCheckboxAnswers(e) {
    (!this.answer.regular || "object" != typeof this.answer.regular || Array.isArray(this.answer
      .regular)) && (this.answer.regular = {});
    let t = this.answer.regular,
      r = e => Object.keys(t).some(t => (0, i.isMatched)(e, t));
    for (let n of e) n.type === m.FIELD_TYPE.CHECKBOX && (0, d.isWorkableAgreementCheckbox)(
      n) && !r(n.label) && (t[n.label] = "True")
  }
  hasAgreementCheckboxRules(e) {
    return e.some(e => e.type === m.FIELD_TYPE.CHECKBOX && (0, d.isWorkableAgreementCheckbox)(
      e))
  }
  async recheckAgreementCheckboxes(e) {
    let t = e.filter(e => e.type === m.FIELD_TYPE.CHECKBOX && (0, d.isWorkableAgreementCheckbox)
      (e));
    if (t.length) {
      for (let r of (this.ensureAgreementCheckboxAnswers(e), t)) this.taskQueue.add(
  async () => {
        await this.operationConfig[m.FIELD_TYPE.CHECKBOX]?.(r, this.answer.regular)
      });
      await this.taskQueue.run()
    }
  }
  async fillEducationAndEmployment(e) {
    let t = (0, o.createSequentialSectionResultReporter)("education", this.progressTracker,
        "Education"),
      r = (0, o.createSequentialSectionResultReporter)("employment", this.progressTracker,
        "Employment"),
      n = !1;
    try {
      for (let e = 0; e < this.answer.education.length; e++) {
        let r = this.answer.education[e];
        (0, d.addEducation)();
        let o = await (0, p.getEduRules)(),
          a = (0, i.getEducationOperations)(o, [r], this.operationConfig, void 0, {
            ...t.forRecord(e, o),
            onSkipped: () => {
              n = !0
            }
          }, {
            keepCurrentFieldOnExit: !0
          });
        for (let e of a) this.taskQueue.add(e);
        if (await this.taskQueue.run(), n) break;
        let l = !1;
        try {
          await (0, d.saveEducation)();
          let r = (0, p.getLatestSavedEducationFocusRule)(o[0]);
          r ? (t.setRecordFocus(e, r), l = !0) : console.debug(
            "[Autofill][workable-section-focus] saved target unavailable", {
              type: "education",
              index: e
            })
        } finally {
          l || t.clearRecordFocus(e)
        }
      }
    } finally {
      this.answer.education.length > 0 && (0, a.updateCurrentField)(null)
    }
    n ? this.progressTracker.updateMissedProgress("Education") : this.answer.education.length >
      0 && this.progressTracker.updateFilledProgress("Education");
    let l = !1;
    try {
      for (let e = 0; e < this.answer.workExperience.length; e++) {
        let t = this.answer.workExperience[e];
        (0, d.addExperience)();
        let n = await (0, p.getExpRules)(),
          o = (0, i.getEmploymentOperations)(n, [t], this.operationConfig, void 0, {
            ...r.forRecord(e, n),
            onSkipped: () => {
              l = !0
            }
          }, {
            keepCurrentFieldOnExit: !0
          });
        for (let e of o) this.taskQueue.add(e);
        if (await this.taskQueue.run(), l) break;
        let a = !1;
        try {
          await (0, d.saveExperience)();
          let t = (0, p.getLatestSavedExperienceFocusRule)(n[0]);
          t ? (r.setRecordFocus(e, t), a = !0) : console.debug(
            "[Autofill][workable-section-focus] saved target unavailable", {
              type: "employment",
              index: e
            })
        } finally {
          a || r.clearRecordFocus(e)
        }
      }
    } finally {
      this.answer.workExperience.length > 0 && (0, a.updateCurrentField)(null)
    }
    l ? this.progressTracker.updateMissedProgress("Employment") : this.answer.workExperience
      .length > 0 && this.progressTracker.updateFilledProgress("Employment")
  }
  async handleResumeUpload() {
    this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this
      .taskQueue.add(async () => {
        await (0, d.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), await this.taskQueue.run()
  }
  getSubmitButtonSelector() {
    return (0, p.getWorkableSubmitButtonSelector)()
  }
  async getAutofillSnapshot(e) {
    this.lastRules = e;
    let t = this.splitSnapshot(await (0, p.getFormSnapshot)(e));
    return this.autofillEducation = t.education, this.autofillEmployment = t.employment, t
      .normal
  }
  async getSubmitSnapshot() {
    let e = this.splitSnapshot(await (0, p.getFormSnapshot)(this.lastRules));
    return this.submitEducation = e.education, this.submitEmployment = e.employment, e.normal
  }
  getAdditionalAutofillSnapshotData() {
    return {
      education: this.autofillEducation,
      employment: this.autofillEmployment
    }
  }
  getAdditionalSubmitSnapshotData() {
    return {
      education: this.submitEducation,
      employment: this.submitEmployment
    }
  }
  splitSnapshot(e) {
    let {
      education: t,
      employment: r,
      ...n
    } = e;
    return {
      normal: n,
      education: Array.isArray(t) ? t : void 0,
      employment: Array.isArray(r) ? r : void 0
    }
  }
  submitApplication() {
    let e = (0, h.getFirstOrderedNode)('.//*[@data-ui="apply-button"]');
    (0, d.submitObserver)(e), e && e?.click()
  }
  constructor(...e) {
    super(...e), this.lastRules = []
  }
}

