/**
 * Parcel module id: 4guEq
 * Resolved path: contents/sites/hiringthing.js (oracle restore)
 * Dependencies:
 *   ./answer -> 2wcwR  =>  src/contents/sites/hiringthing/answer.js
 *   ./operations -> kozjd  =>  src/contents/sites/hiringthing/operations.js
 *   ./rules -> fUNlN  =>  src/contents/sites/hiringthing/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "HiringThing", () => m), n.export(r,
  "formatHiringThingEmploymentRecord", () => g);
var o = e("~contents/methods/answer"),
  i = e("~contents/methods/dom"),
  a = e("~contents/sites/base-filler"),
  l = e("~core/dom"),
  s = e("~core/enums"),
  u = e("~store/autofillInfo"),
  c = e("./answer"),
  d = e("./operations"),
  f = e("./rules");

function p(e) {
  let t = e?.name || e?.id || "";
  return /\.(?:st_date|end_date)$/.test(t)
}
class m extends a.BaseFiller {
  getFieldHandlers() {
    return {
      [s.FIELD_TYPE.TEXT]: (e, t) => {
        let r = Array.isArray(t) ? t[0] : t;
        return e.$input?.getAttribute("role") === "combobox" ? (0, d.fillReactSelectField)(e,
          [String(r ?? "")]) : e.$input?.id === "user.phone" ? (0, d.fillPhoneField)(e
          .$input, String(r ?? "")) : p(e.$input) ? (0, d.fillDateTextField)(e.$input,
          String(r ?? "")) : (0, d.fillInputTextField)(e.$input, String(r ?? ""))
      },
      [s.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, d.fillRadioGroupField)(e, t),
      [s.FIELD_TYPE.SEARCH]: (e, t) => (0, d.fillReactSelectField)(e, t),
      [s.FIELD_TYPE.SELECT]: (e, t) => "Country Phone Code" === e.label ? (0, d
        .fillHiringThingPhoneCountryCodeField)(e, t) : (0, d.fillNativeSelectField)(e, t),
      [s.FIELD_TYPE.CHECKBOX]: (e, t) => (0, d.fillCheckboxField)(e, t)
    }
  }
  async runPreFillForm() {
    this.autofillCountry = "", this.autofillPhoneCountryCode = "";
    let e = await (0, u.useAutofillInfoStore).getState().fetchAutofillInfo();
    this.autofillCountry = e?.location?.country, this.autofillPhoneCountryCode = e
      ?.phoneCountryCode, this.taskQueue.add(d.preFillForm), await this.taskQueue.run()
  }
  async preFillCountryAndRefreshStateRules(e) {
    this.skippedDependentStateRules = [];
    let t = String(this.autofillCountry || "").trim(),
      r = e.filter(d.isHiringThingCountryRule);
    if (!t || 0 === r.length) return e;
    let n = e.filter(d.isHiringThingStateProvinceRule),
      o = (0, d.getHiringThingCountrySelectionValue)();
    for (let e of r) this.taskQueue.add(() => (0, d.fillReactSelectField)(e, [t]));
    await this.taskQueue.run();
    let i = o !== (0, d.getHiringThingCountrySelectionValue)();
    if (!i || 0 === n.length) return e;
    let a = await (0, d.waitForHiringThingStateOptions)(n.flatMap(e => e.options || []));
    if (!a) return this.skippedDependentStateRules = n, e.filter(e => !(0, d
      .isHiringThingStateProvinceRule)(e));
    let l = (0, f.extractRules)(),
      s = l.filter(d.isHiringThingStateProvinceRule);
    return console.info("[HiringThing][State] dependent-region-rules-refreshed", {
      optionCount: s.flatMap(e => e.options || []).length
    }), l
  }
  async preFillPhoneCountryCode(e) {
    let t = String(this.autofillPhoneCountryCode ?? "").trim(),
      r = e.filter(e => e.type === s.FIELD_TYPE.SELECT && "Country Phone Code" === e.label);
    if (!t || 0 === r.length) return;
    let n = 0;
    for (let e of r) this.taskQueue.add(async () => {
      await (0, d.fillHiringThingPhoneCountryCodeField)(e, t) && (n += 1)
    });
    await this.taskQueue.run(), console.info("[HiringThing][PhoneCountry] prefill", {
      ruleCount: r.length,
      committedCount: n
    })
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    for (let e of (await this.preFillPhoneCountryCode(t), t = await this
        .preFillCountryAndRefreshStateRules(t), t = this.prepareCoverLetterRules(t), this
        .progressTracker.setFieldsRequiredStatus([...t, ...this.skippedDependentStateRules]),
        this.skippedDependentStateRules)) this.progressTracker.updateMissedProgress(e.label);
    let r = await this.fetchFormAnswers(t, e);
    if ("string" == typeof r) return r;
    await this.handleResumeUpload(), await this.fillRegularFields(t), await this
      .fillEducationAndEmployment(t), await this.fillCoverLetterFields();
    let n = await this.runComboQuestionAutofillIfNeeded(t, e);
    return "string" == typeof n ? n : (t = n, await this.executeSiteSpecificSteps(t), await this
      .finalizeFillForm())
  }
  async extractFormRules() {
    return (0, f.extractRules)()
  }
  getSiteName() {
    return "hiringthing"
  }
  formatAnswer(e) {
    return (0, c.formatHiringThingAnswer)(e, this.autofillCountry, this
      .autofillPhoneCountryCode)
  }
  async fillRegularFields(e) {
    let t = e.filter(d.isHiringThingCountryRule);
    if (0 === t.length) {
      await super.fillRegularFields(e);
      return
    }
    let r = e.filter(d.isHiringThingStateProvinceRule),
      n = (0, d.getHiringThingCountrySelectionValue)();
    for (let e of (0, o.getRegularOperations)(t, this.answer.regular, this.operationConfig))
      this.taskQueue.add(e);
    await this.taskQueue.run();
    let i = n !== (0, d.getHiringThingCountrySelectionValue)(),
      a = e.filter(e => !(0, d.isHiringThingCountryRule)(e));
    if (i && r.length > 0) {
      let e = await (0, d.waitForHiringThingStateOptions)(r.flatMap(e => e.options || []));
      if (e) a = (0, f.extractRules)().filter(e => !(0, d.isHiringThingCountryRule)(e));
      else
        for (let e of (a = a.filter(e => !(0, d.isHiringThingStateProvinceRule)(e)), r)) this
          .progressTracker.updateMissedProgress(e.label)
    }
    for (let e of (0, o.getRegularOperations)(a, this.answer.regular, this.operationConfig))
      this.taskQueue.add(e);
    await this.taskQueue.run()
  }
  async checkCoverLetter() {
    (0, i.postCoverLetterStatus)((0, d.getHiringThingCoverLetterStatus)())
  }
  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV");
      return
    }
    this.taskQueue.add(async () => {
      await (0, d.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {
    if (e.some(e => e.type === s.FIELD_TYPE.EDUCATION) && this.answer?.education?.length > 0) {
      await (0, d.ensureHiringThingStructuredRows)("education", this.answer.education.length);
      let e = (0, f.extractRules)().filter(e => e.type === s.FIELD_TYPE.EDUCATION);
      for (let t of ((0, l.setSectionResultFocusRules)("education", e), (0, o
          .getEducationOperations)(e, this.answer.education.map(b), this.operationConfig,
          void 0, {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onCompleted: () => this.progressTracker.updateFilledProgress("Education"),
            onSkipped: () => this.progressTracker.updateMissedProgress("Education")
          }))) this.taskQueue.add(t);
      await this.taskQueue.run()
    }
    if (e.some(e => e.type === s.FIELD_TYPE.EMPLOYMENT) && this.answer?.workExperience?.length >
      0) {
      await (0, d.ensureHiringThingStructuredRows)("employment", this.answer.workExperience
        .length);
      let e = (0, f.extractRules)().filter(e => e.type === s.FIELD_TYPE.EMPLOYMENT);
      for (let t of ((0, l.setSectionResultFocusRules)("employment", e), (0, o
          .getEmploymentOperations)(e, this.answer.workExperience.map(g), this
          .operationConfig, void 0, {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onCompleted: () => this.progressTracker.updateFilledProgress("Employment"),
            onSkipped: () => this.progressTracker.updateMissedProgress("Employment")
          }))) this.taskQueue.add(t);
      await this.taskQueue.run()
    }
  }
  async executeSiteSpecificSteps(e) {
    let t = (0, d.getHiringThingCoverLetterStatus)();
    t && this.progressTracker.updateFieldRequiredStatus({
      label: "Cover Letter",
      required: !1
    });
    let r = this.coverLetter;
    r?.coverLetterId && (this.taskQueue.add(async () => {
      let e = await (0, d.uploadCoverLetter)({
          coverLetterId: r.coverLetterId,
          coverLetterName: (0, f.getHiringThingCoverLetterName)(r.coverLetterName),
          markdown: r.markdown,
          useLegacyDownload: r.useLegacyDownload
        }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress);
      e || this.progressTracker.updateMissedProgress("Cover Letter")
    }), await this.taskQueue.run()), await this.bindSubmitButtonTracking(e)
  }
  getSubmitButtonSelector() {
    return '//button[@type="submit" and contains(normalize-space(.), "Submit Application")]'
  }
  async getAutofillSnapshot(e) {
    return (0, f.getFormSnapshot)(e)
  }
  async getSubmitSnapshot() {
    return (0, f.getFormSnapshot)()
  }
  submitApplication() {
    let e = document.querySelector(
      'button[type="submit"].submit-app-button, button[type="submit"]');
    e?.click()
  }
  constructor(...e) {
    super(...e), this.autofillCountry = "", this.autofillPhoneCountryCode = "", this
      .skippedDependentStateRules = []
  }
}

function h(e, t) {
  for (let r of t) {
    let t = r.split(".").reduce((e, t) => e?.[t], e);
    if (null != t && "" !== t) return t
  }
  return ""
}

function g(e) {
  let t = h(e, ["Dates of Employment Start", "Start", "startDate", "start_date", "dates.startDate",
      "dates.start_date", "dates.start"
    ]),
    r = h(e, ["Dates of Employment End", "End", "endDate", "end_date", "dates.endDate",
      "dates.end_date", "dates.end", "dates.completionDate", "dates.completion_date"
    ]);
  return console.info("[HiringThing][Employment] normalized date record", {
    hasStartDate: !!t,
    hasEndDate: !!r
  }), {
    ...e,
    "Company Name": h(e, ["Company Name", "companyName", "company", "employer", "organization",
      "name"
    ]),
    "Your Position": h(e, ["Your Position", "position", "title", "jobTitle", "role"]),
    Duties: h(e, ["Duties", "duties", "description", "summary", "responsibilities"]),
    "Reason for Leaving": h(e, ["Reason for Leaving", "reasonForLeaving", "leavingReason",
      "reason"
    ]),
    "Dates of Employment Start": (0, f.formatHiringThingDate)(t),
    "Dates of Employment End": (0, f.formatHiringThingDate)(r)
  }
}

function b(e) {
  let t = h(e, ["completionDate", "dates.completionDate", "endDate", "dates.endDate"]);
  return {
    ...e,
    "Institution Name": h(e, ["Institution Name", "institution", "school", "schoolName",
      "organization", "name"
    ]),
    "Degree/Subject": h(e, ["Degree/Subject", "degree", "major", "discipline", "field",
      "fieldOfStudy"
    ]),
    "Degree obtained?": h(e, ["Degree obtained?", "degreeObtained", "completed", "isCompleted"]) ||
      (t ? "Yes" : "")
  }
}

