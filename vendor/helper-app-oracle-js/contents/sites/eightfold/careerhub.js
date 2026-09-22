/**
 * Parcel module id: eMRh5
 * Resolved path: contents/sites/eightfold/careerhub.js (oracle restore)
 * Dependencies:
 *   ../../option-resolve-rollout -> kwH9q  =>  _dotdot_/_dotdot_/option-resolve-rollout.js
 *   ../answer -> 0548q  =>  _dotdot_/answer.js
 *   ../rules -> 6MF9I  =>  _dotdot_/rules.js
 *   ./location-operation -> 38kQO  =>  location-operation.js
 *   ./operations -> ejJsZ  =>  src/contents/sites/eightfold/operations.js
 *   ./records -> 48qwr  =>  records.js
 *   ./rules -> dYxzO  =>  src/contents/sites/eightfold/rules.js
 *   ./steps -> llTaO  =>  steps.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  _tilde_contents/methods/cancellation.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "EightfoldCareerHub", () => k);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/sites/base-filler"),
  s = e("~core/enums"),
  u = e("../answer"),
  c = e("../rules"),
  d = e("./location-operation"),
  f = e("../../option-resolve-rollout"),
  p = e("./operations"),
  m = e("./records"),
  h = e("./rules"),
  g = e("./steps");
let b = 4,
  y = 600,
  v = 200,
  w = 1600;

function S() {
  return {
    education: [],
    workExperience: [],
    skills: [],
    regular: {}
  }
}

function E(e, t) {
  let r = [];
  e.regular && Object.prototype.hasOwnProperty.call(e.regular, t) && r.push(e.regular[t]);
  let n = e.fillDataList?.find(e => e?.name === t)?.value;
  return void 0 !== n && r.push(n), r
}

function x(e, t) {
  if (e.type === s.FIELD_TYPE.MULTI_SELECT) {
    let e = (Array.isArray(t) ? t : [t]).filter(e => "string" == typeof e).map(e => e.trim())
      .filter(Boolean);
    return e.length ? e : null
  }
  let r = Array.isArray(t) ? t[0] : t;
  return "string" == typeof r && r.trim() ? r.trim() : null
}

function C(e, t) {
  for (let r of E(t, e.label)) {
    let t = x(e, r);
    if (null !== t) return t
  }
  return null
}

function A(e, t) {
  return (0, m.getCareerHubRecordSnapshots)(e, t).map(({
    card: e,
    ...t
  }) => t)
}
class k extends l.BaseFiller {
  getFieldHandlers() {
    return {}
  }
  getCareerHubRoot() {
    return document
  }
  getCurrentPageUrl() {
    return window.location.href
  }
  getActiveStep(e = this.getCareerHubRoot()) {
    let t = e;
    return "function" != typeof t?.querySelector || "function" != typeof t?.querySelectorAll ?
      null : (0, g.getCareerHubActiveStep)(e)
  }
  resetRunState() {
    this.timeTrace && (this.timeTrace.rulesParseStartTime = Date.now(), this.timeTrace
      .requestStartTime = 0, this.timeTrace.fillStartTime = 0), this.progressTracker?.clear?.
    (), this.taskQueue?.clear?.(), this.answer = S()
  }
  stopForStepChange(e, t) {
    return this.getActiveStep() !== e && (this.progressTracker?.clear?.(), console.warn(
      "[CareerHub autofill] stopped", {
        route: "careerhub",
        step: e,
        ruleCount: t,
        reason: "active-step-changed"
      }), !0)
  }
  async finalizeCareerHubRun() {
    return await this.finalizeFillForm()
  }
  async extractCareerHubActiveRules() {
    return await (0, h.extractCareerHubRules)(this.getCareerHubRoot())
  }
  async waitForCareerHubDynamicRules() {
    await (0, l.waitForComboQuestionsToSettle)(y, v, w)
  }
  async fillCareerHubInputRule(e, t) {
    return await (0, p.fillCareerHubRule)(e, t, this.getCareerHubRoot())
  }
  async resolveCareerHubLocationOperation(e) {
    return await (0, o.sendToBackground)({
      name: "resolveAutofillOperation",
      body: {
        operation: e,
        source: "eightfold"
      }
    })
  }
  isCareerHubLocationResolveEnabled() {
    return f.V119_OPTION_RESOLVE_ROLLOUT.eightfoldCareerHubLocation
  }
  isLocationRule(e) {
    return e.__careerHub?.step === "personal-info" && e.__careerHub?.controlId === "location" &&
      e.type === s.FIELD_TYPE.SELECT
  }
  async fillCareerHubLocationRule(e, t) {
    let r = (0, d.getCareerHubLocationOriginalAnswer)(this.answer, t);
    if (console.info(
        `[CareerHub][Location] resolve-start label=${JSON.stringify(e.label)} answerSource=${r.source||"missing"} hasOriginalAnswer=${!!r.value}`
        ), !r.value) return console.warn(
      "[CareerHub][Location] resolve-skipped reason=empty-original-answer"), {
      committed: !1,
      value: ""
    };
    let n = (0, d.buildCareerHubLocationOperation)({
        currentUrl: this.getCurrentPageUrl(),
        question: e.label,
        originalAnswer: r.value
      }),
      o = await this.resolveCareerHubLocationOperation(n);
    (0, a.checkpoint)();
    let i = (0, d.getCareerHubResolvedLocationValue)(o);
    return (console.info(
      `[CareerHub][Location] resolve-result action=${o?.result?.action??"missing"} selectedCount=${o?.result?.selected_values?.length??0}`
      ), i) ? "personal-info" !== this.getActiveStep() ? {
      committed: !1,
      value: ""
    } : await this.fillCareerHubInputRule(e, i) : (console.warn(
      "[CareerHub][Location] resolve-not-committed reason=empty-selected-value"), {
      committed: !1,
      value: ""
    })
  }
  async fillCareerHubRecordSection(e, t) {
    let r = (0, i.createSectionResultReporter)("experience" === e ? "employment" :
    "education", {
      onSectionResultChanged: this.progressTracker.updateSectionResult
    });
    return r.setLabel("experience" === e ? "Employment" : "Education"), await (0, m
      .fillCareerHubRecords)(e, t, {
      root: this.getCareerHubRoot(),
      sectionReporter: r
    })
  }
  getCareerHubLiveSnapshot(e, t) {
    if ("experience" === e || "education" === e) {
      let t = "experience" === e ? "Experience" : "Education";
      return {
        [t]: A(e, this.getCareerHubRoot())
      }
    }
    return (0, p.getCareerHubSnapshot)(t, this.getCareerHubRoot())
  }
  async fillInputRules(e, t) {
    for (let r of e) {
      if (this.stopForStepChange(t, e.length)) return !1;
      let n = C(r, this.answer),
        o = this.isCareerHubLocationResolveEnabled() && this.isLocationRule(r);
      if (null === n && !o) {
        this.progressTracker.updateMissedProgress(r.label);
        continue
      }(0, a.updateCurrentField)(r.label);
      try {
        let i = await (0, a.withSkip)(async () => {
          (0, a.checkpoint)();
          let e = o ? await this.fillCareerHubLocationRule(r, "string" == typeof n ? n :
            "") : await this.fillCareerHubInputRule(r, n);
          return (0, a.checkpoint)(), e
        });
        if (this.stopForStepChange(t, e.length)) return !1;
        i.committed ? this.progressTracker.updateFilledProgress(r.label) : this.progressTracker
          .updateMissedProgress(r.label)
      } catch (n) {
        if (n instanceof a.CancelledError) throw n;
        this.progressTracker.updateMissedProgress(r.label), n instanceof a.SkippedError ||
          console.warn("[CareerHub autofill] field not committed", {
            route: "careerhub",
            step: t,
            ruleCount: e.length,
            reason: "field-driver-error"
          })
      }
    }
    return !0
  }
  async fillRecordRule(e, t) {
    let r = "experience" === t ? "Employment" : "Education";
    (0, a.updateCurrentField)(r);
    let n = "experience" === t ? this.answer.workExperience : this.answer.education;
    if (!Array.isArray(n) || 0 === n.length) return e.required && this.progressTracker
      .updateMissedProgress(r), !0;
    try {
      let e = await (0, a.withSkip)(async () => {
        (0, a.checkpoint)();
        let e = await this.fillCareerHubRecordSection(t, n);
        return (0, a.checkpoint)(), e
      });
      if (this.stopForStepChange(t, 1)) return !1;
      let o = e.length === n.length && e.every(e => e.committed);
      o ? this.progressTracker.updateFilledProgress(r) : this.progressTracker
        .updateMissedProgress(r)
    } catch (e) {
      if (e instanceof a.CancelledError) throw e;
      this.progressTracker.updateMissedProgress(r), e instanceof a.SkippedError || console.warn(
        "[CareerHub autofill] record section not committed", {
          route: "careerhub",
          step: t,
          ruleCount: 1,
          reason: "record-driver-error"
        })
    }
    return !0
  }
  formatAnswer(e) {
    return (0, u.formatAnswer)(e)
  }
  async doFillForm(e = !1) {
    this.resetRunState();
    let t = this.getActiveStep();
    if (!t) return await this.finalizeCareerHubRun();
    let r = await this.extractCareerHubActiveRules();
    if (this.stopForStepChange(t, r.length) || 0 === r.length || r.some(e => e.__careerHub
        ?.step !== t)) return await this.finalizeCareerHubRun();
    this.progressTracker.setFieldsRequiredStatus(r);
    let n = await this.requestFormAnswers(r, e);
    if (this.stopForStepChange(t, r.length)) return await this.finalizeCareerHubRun();
    if ("string" == typeof n) return n;
    if (this.answer = n ?? S(), "experience" === t || "education" === t) return await this
      .fillRecordRule(r[0], t), await this.finalizeCareerHubRun();
    if (!await this.fillInputRules(r, t)) return await this.finalizeCareerHubRun();
    let o = [...r];
    for (let r = 1; r <= b && (await this.waitForCareerHubDynamicRules(), !this
        .stopForStepChange(t, o.length)); r++) {
      let n = await this.extractCareerHubActiveRules();
      if (this.stopForStepChange(t, n.length)) break;
      let i = this.getNewComboQuestionRules(o, n);
      if (0 === i.length || i.some(e => e.__careerHub?.step !== t)) break;
      o = [...o, ...i];
      let a = (0, c.filterAlreadyCommittedEightfoldRules)(i, this.progressTracker.fieldStatus
        .filledFields, this.getCareerHubLiveSnapshot(t, i));
      if (0 === a.length) {
        console.info("[CareerHub autofill] skipped committed dynamic rules", {
          route: "careerhub",
          step: t,
          round: r,
          skippedRuleCount: i.length
        });
        break
      }
      for (let e of (console.info("[CareerHub autofill] discovered dynamic rules", {
          route: "careerhub",
          step: t,
          round: r,
          newRuleCount: a.length
        }), a)) this.progressTracker.updateFieldRequiredStatus(e);
      let l = await this.requestFormAnswers(a, e, {
        updateTimeTrace: !1
      });
      if (this.stopForStepChange(t, a.length)) break;
      if ("string" == typeof l) return l;
      if (l && this.mergeComboQuestionAnswer(l, a), !await this.fillInputRules(a, t)) break;
      r === b && console.warn("[CareerHub autofill] stopped at dynamic rule round limit", {
        route: "careerhub",
        step: t,
        maxRounds: b,
        totalRuleCount: o.length
      })
    }
    return await this.finalizeCareerHubRun()
  }
  async extractFormRules() {
    return await this.extractCareerHubActiveRules()
  }
  getSiteName() {
    return "eightfold"
  }
  async handleResumeUpload() {}
  getSubmitButtonSelector() {
    return null
  }
  getSubmitTrackingScopeKey() {
    return this.getActiveStep()
  }
  async getAutofillSnapshot(e) {
    let t = this.getActiveStep();
    if (!t) return {};
    let r = e.filter(e => e.__careerHub?.step === t);
    return this.getCareerHubLiveSnapshot(t, r)
  }
  async getSubmitSnapshot() {
    let e = this.getActiveStep();
    if (!e) return {};
    let t = await this.extractCareerHubActiveRules();
    return this.getActiveStep() !== e ? {} : this.getCareerHubLiveSnapshot(e, t.filter(t => t
      .__careerHub?.step === e))
  }
  submitApplication() {}
}

