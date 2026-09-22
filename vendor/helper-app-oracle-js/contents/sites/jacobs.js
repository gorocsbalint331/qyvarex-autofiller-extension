/**
 * Parcel module id: 4befB
 * Resolved path: contents/sites/jacobs.js (oracle restore)
 * Dependencies:
 *   ./answer -> iOFeQ  =>  src/contents/sites/jacobs/answer.js
 *   ./education-client-search -> iWUer  =>  src/contents/sites/jacobs/education-client-search.js
 *   ./operations -> 1w32k  =>  src/contents/sites/jacobs/operations.js
 *   ./rules -> iZWxZ  =>  src/contents/sites/jacobs/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Jacobs", () => v);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/answer"),
  a = e("~contents/sites/base-filler"),
  l = e("~core/dom"),
  s = e("~core/enums"),
  u = e("~core/xpath"),
  c = e("./answer"),
  d = e("./education-client-search"),
  f = e("./operations"),
  p = e("./rules");

function m(e) {
  return String(e.label || "").replace(/\s*\*\s*$/, "").replace(/\s+/g, " ").trim().toLowerCase()
}

function h(e) {
  let t = m(e);
  return "country" === t || t.startsWith("country/")
}

function g(e) {
  let t = m(e);
  return "state" === t || t.startsWith("state/") || t.startsWith("state /") || t.startsWith(
    "state ")
}

function b(e) {
  let t = e.filter(h);
  if (!t.length) return e;
  let r = e.filter(e => !h(e)),
    n = r.findIndex(g);
  return n < 0 ? e : [...r.slice(0, n), ...t, ...r.slice(n)]
}
let y = {
  requestStep: async e => await (0, o.sendToBackground)({
    name: "resolveAutofillClientSearchStep",
    body: e
  }),
  captureCandidates: f.captureJacobsEducationSelect2Candidates,
  commitCandidate: f.fillResolvedJacobsEducationSelect2Candidate
};
class v extends a.BaseFiller {
  formatAnswer(e) {
    return (0, c.formatAnswer)(e)
  }
  getFieldHandlers() {
    return {
      [s.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (null != r) return (0, f.fillInputTextField)(e.$input, String(r ?? ""))
      },
      [s.FIELD_TYPE.SELECT]: (e, t) => (0, f.fillSelectField)(e, t),
      [s.FIELD_TYPE.CHECKBOX]: (e, t) => (0, f.fillCheckboxField)(e, t),
      [s.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, f.fillRadioGroupFiled)(e, t),
      [s.FIELD_TYPE.MULTI_SELECT]: (e, t) => (0, f.fillMultiSelectField)(e, t)
    }
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules(),
      r = (0, p.getAutofillRules)(t),
      n = (0, p.getLocalOnlyAutofillRules)(t);
    this.progressTracker.setFieldsRequiredStatus([...r, ...n]), await this.handleResumeUpload();
    let o = await this.fetchFormAnswers(r, e);
    if ("string" == typeof o) return o;
    await this.fillRegularFields(r), await this.fillEducationAndEmployment(r);
    let i = await this.runComboQuestionAutofillIfNeeded(r, e);
    if ("string" == typeof i) return i;
    let a = i;
    return console.info("[Jacobs][Combo] rescan-complete", {
        initialRuleCount: r.length,
        totalRuleCount: a.length
      }), await this.executeSiteSpecificSteps(n), await this.bindSubmitButtonTracking(a), this
      .finalizeFillForm()
  }
  async runPreFillForm() {
    this.taskQueue.add(f.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, p.extractRules)()
  }
  async extractComboQuestionRules() {
    let e = (0, p.getAutofillRules)(await this.extractFormRules());
    return console.info("[Jacobs][Combo] extracted-fillable-rules", {
      ruleCount: e.length
    }), e
  }
  getSiteName() {
    return "jacobs"
  }
  async fillRegularFields(e) {
    let t = b(e),
      r = (0, i.getRegularOperations)(t, this.answer.regular, this.operationConfig);
    for (let e of r) this.taskQueue.add(e);
    await this.taskQueue.run()
  }
  async fillJacobsEducationSelectField(e, t) {
    let r = e.$input,
      n = (0, d.getJacobsEducationClientSearchFieldType)(r);
    if (!n) return await this.operationConfig[s.FIELD_TYPE.SELECT]?.(e, t, !1) ?? !1;
    if (!await (0, f.waitForJacobsSelectFieldEnabled)(r)) return this
      .jacobsEducationClientSearchFailed = !0, console.info(
        "[Jacobs][Education] client-search", {
          fieldType: n,
          success: !1,
          roundCount: 0,
          candidateCounts: [],
          failureReason: "disabled"
        }), !1;
    let o = await (0, d.resolveJacobsEducationClientSearch)(r, t, n, y);
    if (o.success) return console.info("[Jacobs][Education] client-search", {
      fieldType: n,
      success: !0,
      roundCount: o.rounds.length,
      candidateCounts: o.rounds.map(e => e.options.length)
    }), !0;
    let i = (0, d.getJacobsEducationClientSearchOriginalAnswer)(t, n),
      a = "school" === n && "return-empty" === o.failureReason && !!i && await (0, f
        .fillJacobsSchoolOtherFallback)(r, i);
    return a || (this.jacobsEducationClientSearchFailed = !0), await (0, f
      .closeJacobsEducationSelect2Search)(), console.info(
    "[Jacobs][Education] client-search", {
      fieldType: n,
      success: a,
      roundCount: o.rounds.length,
      candidateCounts: o.rounds.map(e => e.options.length),
      failureReason: a ? "return-empty-school-other" : o.failureReason
    }), a
  }
  getJacobsEducationOperationConfig() {
    return {
      ...this.operationConfig,
      [s.FIELD_TYPE.SELECT]: (e, t) => this.fillJacobsEducationSelectField(e, t)
    }
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, f.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, f.removeResume)(), await (0, f.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {
    let t = e.some(e => e.type === s.FIELD_TYPE.EDUCATION);
    if (t && Array.isArray(this.answer?.education) && this.answer.education.length) {
      let e = this.answer.education.length;
      await (0, f.adaptEducationSectionCount)(e);
      let t = await (0, p.getEducationRules)(),
        r = (0, p.validateEducationSection)(e);
      if (r.countMatched && t.length === e) {
        this.jacobsEducationClientSearchFailed = !1, (0, l.setSectionResultFocusRules)(s
          .FIELD_TYPE.EDUCATION, t);
        let e = (0, i.getEducationOperations)(t, this.answer.education, this
          .getJacobsEducationOperationConfig(), void 0, {
            onCompleted: () => {
              if (this.jacobsEducationClientSearchFailed) {
                this.progressTracker.updateMissedProgress("Education");
                return
              }
              this.progressTracker.updateFilledProgress("Education")
            },
            onSkipped: () => this.progressTracker.updateMissedProgress("Education"),
            onSectionResultChanged: this.progressTracker.updateSectionResult
          });
        for (let t of e) this.taskQueue.add(t);
        await this.taskQueue.run()
      } else this.progressTracker.updateMissedProgress("Education")
    }
    let r = e.some(e => e.type === s.FIELD_TYPE.EMPLOYMENT);
    if (r && Array.isArray(this.answer?.workExperience) && this.answer.workExperience.length) {
      let e = this.answer.workExperience.length;
      await (0, f.adaptEmploymentSectionCount)(e);
      let t = await (0, p.getExperienceRules)(),
        r = (0, p.validateExperienceSection)(e);
      if (!r.countMatched || t.length !== e) {
        this.progressTracker.updateMissedProgress("Employment");
        return
      }(0, l.setSectionResultFocusRules)(s.FIELD_TYPE.EMPLOYMENT, t);
      let n = (0, i.getEmploymentOperations)(t, this.answer.workExperience, this
        .operationConfig, void 0, (0, i.sectionProgressCallbacks)("Employment", this
          .progressTracker));
      for (let e of n) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
  }
  async executeSiteSpecificSteps(e) {
    for (let t of e) t.type === s.FIELD_TYPE.CHECKBOX && this.taskQueue.add(async () => {
      await (0, f.fillCheckboxField)(t, !0), this.progressTracker.updateFilledProgress(t
        .label)
    });
    await this.taskQueue.run()
  }
  getSubmitButtonSelector() {
    return p.jacobsXpaths.submitButton
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    return (0, f.resolveJacobsSubmitButtonFromTarget)(e)
  }
  async getAutofillSnapshot(e) {
    let t = await (0, p.getFormSnapshot)() || {};
    this.lastFullAutofillSnapshot = t;
    let {
      education: r,
      employment: n,
      ...o
    } = t;
    return o
  }
  async getSubmitSnapshot() {
    let e = await (0, p.getFormSnapshot)() || {};
    this.lastFullSubmitSnapshot = e;
    let {
      education: t,
      employment: r,
      ...n
    } = e;
    return n
  }
  getEducationEmploymentSnapshotData(e) {
    return {
      education: Array.isArray(e?.education) ? e?.education : [],
      employment: Array.isArray(e?.employment) ? e?.employment : []
    }
  }
  getAdditionalAutofillSnapshotData() {
    return this.getEducationEmploymentSnapshotData(this.lastFullAutofillSnapshot)
  }
  getAdditionalSubmitSnapshotData() {
    return this.getEducationEmploymentSnapshotData(this.lastFullSubmitSnapshot)
  }
  submitApplication() {
    let e = (0, u.getFirstOrderedNodeSafe)(p.jacobsXpaths.submitButton);
    e && e.click()
  }
  constructor(...e) {
    super(...e), this.hasComboQuestions = !0, this.lastFullAutofillSnapshot = null, this
      .lastFullSubmitSnapshot = null, this.jacobsEducationClientSearchFailed = !1
  }
}

