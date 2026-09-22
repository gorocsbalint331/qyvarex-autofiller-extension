/**
 * Parcel module id: 3a5UU
 * Resolved path: contents/sites/walmart.js (oracle restore)
 * Dependencies:
 *   ./answer -> jevYI  =>  src/contents/sites/walmart/answer.js
 *   ./composite -> iO0f1  =>  composite.js
 *   ./navigation -> 7KkNI  =>  navigation.js
 *   ./operations -> 1ivz8  =>  src/contents/sites/walmart/operations.js
 *   ./rules -> hgvPN  =>  src/contents/sites/walmart/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/section-results -> 6WWsC  =>  _tilde_contents/methods/section-results.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "buildWalmartCompositeTemplateRule", () => c
    .buildWalmartCompositeTemplateRule), n.export(r, "getWalmartCompositeKindFromText", () => c
    .getWalmartCompositeKindFromText), n.export(r, "clickAdvanceButton", () => p
  .clickAdvanceButton), n.export(r, "getCurrentAdvanceButton", () => p.getCurrentAdvanceButton), n
  .export(r, "getWalmartAdvanceButtonType", () => p.getWalmartAdvanceButtonType), n.export(r,
    "hasVisibleWalmartCompositeDialog", () => p.hasVisibleWalmartCompositeDialog), n.export(r,
    "isWalmartAdvanceButtonCandidate", () => p.isWalmartAdvanceButtonCandidate), n.export(r,
    "Walmart", () => m);
var o = e("~contents/methods/section-results"),
  i = e("~contents/methods/answer"),
  a = e("~contents/sites/base-filler"),
  l = e("~core/enums"),
  s = e("~store/autofillInfo"),
  u = e("./answer"),
  c = e("./composite"),
  d = e("./operations"),
  f = e("./rules"),
  p = e("./navigation");
class m extends a.BaseFiller {
  getFieldHandlers() {
    return {
      [l.FIELD_TYPE.TEXT]: (e, t) => (0, d.fillInputTextField)(e.$input, t),
      [l.FIELD_TYPE.SELECT]: (e, t) => (0, d.fillSelectField)(e, t),
      [l.FIELD_TYPE.CHECKBOX]: (e, t) => (0, d.fillCheckboxField)(e, t),
      [l.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, d.fillRadioGroupFiled)(e, t)
    }
  }
  async runPreFillForm() {
    await (0, d.preFillForm)()
  }
  async extractFormRules() {
    return [...(0, f.extractRules)(), ...(0, c.getWalmartCompositeTemplateRules)()]
  }
  getNewComboQuestionRules(e, t) {
    return (0, f.getWalmartComboQuestionRules)(e, t)
  }
  async fetchFormAnswers(e, t) {
    if (0 === e.length) {
      this.answer = {
        education: [],
        workExperience: [],
        skills: [],
        regular: {}
      };
      return
    }
    let r = await super.fetchFormAnswers(e, t);
    if ("string" == typeof r) return r;
    this.answer = (0, u.applyWalmartUrlFallbacks)(this.answer, e, (0, s.useAutofillInfoStore)
      .getState().autofillInfo)
  }
  getSiteName() {
    return "walmart"
  }
  async handleResumeUpload() {
    let e = (0, d.getResumeInput)();
    if (!e) return;
    let t = e.required || "true" === e.getAttribute("aria-required");
    if (this.progressTracker.updateFieldRequiredStatus({
        label: "Resume/CV",
        required: t
      }), this.disableUploadResume) {
      await (0, d.removeResume)(), this.progressTracker.updateMissedProgress("Resume/CV");
      return
    }
    this.taskQueue.add(async () => {
      await (0, d.removeResume)(), await (0, d.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {
    await this.fillWalmartCompositeRecords("employment", this.answer?.workExperience ?? []),
      await this.fillWalmartCompositeRecords("education", this.answer?.education ?? [])
  }
  async fillWalmartCompositeRecords(e, t) {
    if (!Array.isArray(t) || 0 === t.length) return;
    let r = 0,
      n = "employment" === e ? "Employment" : "Education",
      a = (0, c.dedupeWalmartCompositeRecords)(e, t),
      l = (0, o.createSequentialSectionResultReporter)(e, this.progressTracker, n);
    for (let [t, n] of a.entries()) {
      let o = await (0, c.openWalmartCompositeDialog)(e, n, t);
      if (!o) break;
      let a = (0, c.getWalmartCompositeDialogRule)(e, o);
      if (!a) break;
      let s = "employment" === e ? (0, i.getEmploymentOperations)([a], [n], this
        .operationConfig, void 0, l.forRecord(t, [a])) : (0, i.getEducationOperations)([a], [
        n], this.operationConfig, void 0, l.forRecord(t, [a]));
      if (0 === s.length) break;
      for (let e of s) this.taskQueue.add(e);
      await this.taskQueue.run();
      let u = !1;
      try {
        u = await (0, c.saveWalmartCompositeDialog)(o)
      } finally {
        l.clearRecordFocus(t), u || l.markRecordMissed(t)
      }
      if (!u) break;
      r += 1
    }
    r > 0 ? this.progressTracker.updateFilledProgress(n) : this.progressTracker
      .updateMissedProgress(n)
  }
  async getAutofillSnapshot() {
    return (0, f.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, f.getFormSnapshot)()
  }
  getAdditionalAutofillSnapshotData() {
    return (0, c.getWalmartAdditionalFormSnapshotData)(this.answer)
  }
  getAdditionalSubmitSnapshotData() {
    return (0, c.getWalmartAdditionalFormSnapshotData)(this.answer)
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    let t = "BUTTON" === e.tagName ? e : e.closest("button");
    if (!t) return null;
    let r = t.textContent?.trim().toLowerCase() ?? "",
      n = t.getAttribute("type"),
      o = "submit" === n || r.includes("submit") || r.includes("apply") || r.includes(
        "continue");
    return o ? t : null
  }
  submitApplication() {
    let e = Array.from(document.querySelectorAll("button")).find(e => {
      let t = e.textContent?.trim().toLowerCase() ?? "";
      return !e.disabled && ("submit" === e.type || t.includes("submit") || t.includes(
        "apply") || t.includes("continue"))
    });
    e?.click()
  }
  constructor(...e) {
    super(...e), this.hasComboQuestions = !0, this.comboQuestionSettleDelayMs = 500
  }
}

