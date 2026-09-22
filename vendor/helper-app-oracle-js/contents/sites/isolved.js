/**
 * Parcel module id: 8kaHg
 * Resolved path: contents/sites/isolved.js (oracle restore)
 * Dependencies:
 *   ./answer -> 77eiZ  =>  src/contents/sites/isolved/answer.js
 *   ./operation -> kqqzW  =>  operation.js
 *   ./rules -> bArT1  =>  src/contents/sites/isolved/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   ~contents -> d4tj7  =>  _tilde_contents.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  _tilde_contents/methods/cancellation.js
 *   ~contents/methods/track -> h479b  =>  _tilde_contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~contents/sites/falcon-answer-tracking -> 2vI9E  =>  _tilde_contents/sites/falcon-answer-tracking.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/utils -> aTDh5  =>  _tilde_core/utils.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~enums/http -> eJFqj  =>  _tilde_enums/http.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Isolved", () => x);
var o = e("lodash-es"),
  i = e("@plasmohq/messaging"),
  a = e("~contents"),
  l = e("~contents/methods/cancellation"),
  s = e("~core/dom"),
  u = e("~contents/sites/base-filler"),
  c = e("~contents/sites/falcon-answer-tracking"),
  d = e("~contents/methods/answer"),
  f = e("~contents/methods/track"),
  p = e("~core/enums"),
  m = e("~core/xpath"),
  h = e("~core/utils"),
  g = e("~utils/delay"),
  b = e("~enums/http"),
  y = e("./answer"),
  v = e("./operation"),
  w = e("./rules");
let S = ["$input", "$label", "children", "$checkboxs"];

function E(e) {
  let t = e?.data?.profile_data?.city ?? e?.data?.profile_data?.City ?? e?.data?.profile_data
    ?.CITY ?? "";
  return String(Array.isArray(t) ? t[0] : t || "").trim()
}
class x extends u.BaseFiller {
  getCurrentProgressStepType() {
    let e = document.querySelector("#steps .step.current"),
      t = e?.textContent?.trim().toLowerCase() || "",
      r = e?.getAttribute("data-file")?.trim().toLowerCase() || "",
      n = `${t} ${r}`.trim();
    return n ? /education|school|college|university/.test(n) ? "education" :
      /employment|experience|employer|work history|work experience/.test(n) ? "employment" :
      "other" : "unknown"
  }
  buildRegularProgressFieldStatus(e) {
    return e.filter(e => e.type !== p.FIELD_TYPE.EDUCATION && e.type !== p.FIELD_TYPE
      .EMPLOYMENT).map(e => ({
      label: e.label,
      required: e.required ?? null
    }))
  }
  buildUnifiedProgressFieldStatus(e) {
    let t = this.getCurrentProgressStepType(),
      r = this.buildRegularProgressFieldStatus(e),
      n = e.some(e => e.type === p.FIELD_TYPE.EDUCATION),
      o = e.some(e => e.type === p.FIELD_TYPE.EMPLOYMENT),
      i = [];
    return ("education" === t || "unknown" === t) && n && this.answer.education.length > 0 && i
      .push(...(0, y.buildEducationFieldStatus)(this.answer.education.length)), (
        "employment" === t || "unknown" === t) && o && this.answer.workExperience.length > 0 &&
      i.push(...(0, y.buildExperienceFieldStatus)(this.answer.workExperience.length)), [...r,
        ...i
      ]
  }
  ensureProgressFields(e) {
    for (let t of e) this.progressTracker.updateFieldRequiredStatus(t)
  }
  async doFillForm(e = !1) {
    if ((0, w.isReferencePage)()) return this.timeTrace.rulesParseStartTime = Date.now(), this
      .progressTracker.clear(), this.taskQueue.clear(), await this.finalizeFillForm();
    await this.initializeFillForm(), this.savedEducationSnapshots = [], this
      .savedEmploymentSnapshots = [];
    let t = await this.extractFormRules(),
      r = (0, v.hasResumeUploadUI)() && 0 === t.length;
    if (r) return this.progressTracker.setFieldsRequiredStatus([{
      label: "Resume/CV",
      required: !0
    }]), await this.handleResumeUpload(), await this.finalizeFillForm();
    let n = await this.fetchFormAnswers(t, e);
    return "string" == typeof n ? n : (this.progressTracker.setFieldsRequiredStatus(this
        .buildUnifiedProgressFieldStatus(t)), await this.handleResumeUpload(), await this
      .fillRegularFields(t), await this.fillEducationAndEmployment(t), await this
      .executeSiteSpecificSteps(t), await this.finalizeFillForm())
  }
  extractEducationEmploymentAdditional(e) {
    let {
      education: t,
      employment: r
    } = e || {}, n = Array.isArray(t) ? t : [], o = Array.isArray(r) ? r : [];
    return {
      education: n.length > 0 ? n : this.savedEducationSnapshots,
      employment: o.length > 0 ? o : this.savedEmploymentSnapshots
    }
  }
  applyMergedUploadProgress(e) {
    let t = this.progressTracker.fieldStatus;
    t.fieldRequiredStatus.some(t => t.label === e) || (t.fieldRequiredStatus = [...t
        .fieldRequiredStatus, {
          label: e,
          required: !0
        }
      ]), t.missingFields = t.missingFields.filter(t => t !== e), t.filledFields.includes(e) ||
      (t.filledFields = [...t.filledFields, e]), this.progressTracker.syncProgress()
  }
  getFieldHandlers() {
    return {
      [p.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (r) return (0, v.fillInputTextField)(e.$input, String(r ?? ""))
      },
      [p.FIELD_TYPE.SELECT]: (e, t) => (0, v.fillSelectField)(e, t),
      [p.FIELD_TYPE.CHECKBOX]: (e, t) => (0, v.fillCheckboxField)(e, t),
      [p.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, v.fillRadioGroupFiled)(e, t)
    }
  }
  async runFieldBatch(e, t, r) {
    for (let n of e) this.taskQueue.add(async () => {
      try {
        let e = this.operationConfig[n.type],
          o = await e?.(n, t, !1);
        if (r) {
          let t = (0, w.getSectionRecordSnapshot)([n])[n.label],
            i = Array.isArray(t) ? t.length > 0 : !!t?.trim();
          r.reporter.updateField(r.row, n.label, i ? Array.isArray(t) ? t.join(", ") : t :
            void 0, e && !1 !== o && i ? "filled" : "missed"), r.reporter.emit()
        }
      } catch (e) {
        throw r && e instanceof l.SkippedError && (r.reporter.updateField(r.row, n.label,
          void 0, "skipped"), r.reporter.emit()), e
      }
    });
    await this.taskQueue.run()
  }
  async runPreFillForm() {
    this.taskQueue.add(v.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, w.extractRules)()
  }
  getSiteName() {
    return "isolved"
  }
  async fetchFormAnswers(e, t) {
    let r = (0, c.beginFalconResponseAnswerRequest)();
    try {
      this.token || (this.token = await (0, d.getSiteToken)()), this.timeTrace
        .requestStartTime = Date.now();
      let n = await (0, i.sendToBackground)({
        name: "getGptResults",
        body: {
          params: {
            elements: e.map(e => (0, o.omit)(e, ...S)),
            token: this.token,
            url: (0, h.removeEndStrings)(window.location.href),
            parser: "internal",
            source: this.getSiteName(),
            fromAgent: !!(t || a.agentTailorId || a.agentResumeId),
            ...this.resumeInfo.id && {
              resumeId: this.resumeInfo.id
            },
            ...this.resumeInfo.tailorId && {
              tailorId: this.resumeInfo.tailorId
            }
          }
        }
      });
      if (n?.data?.data === b.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY) throw new d
        .ResumeMissingCodeError(b.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY);
      if (n?.data?.HTTP_STATUS) throw new d.HTTPError(n?.data?.HTTP_STATUS);
      let l = (0, d.initUserData)(n, r),
        s = E(n);
      s && (l.education = l.education.map(e => ({
          ...e,
          City: e?.City || s
        }))), this.answer = this.formatAnswer?.(l) ?? l, this.timeTrace.fillStartTime = Date
        .now()
    } catch (e) {
      if (e instanceof d.HTTPError || e instanceof d.ResumeMissingCodeError) return (0, f
        .sendHttpStatusMessage)(e.message), e.message;
      console.error("Unknown error occurred:", e)
    }(0, l.checkpoint)()
  }
  async handleResumeUpload() {
    (0, v.hasResumeUploadUI)() && (this.disableUploadResume ? (await (0, v.removeResume)(), this
      .progressTracker.updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, v.removeResume)();
      let e = await (0, v.uploadResume)(this.resumeInfo);
      e ? this.applyMergedUploadProgress("Resume/CV") : this.progressTracker
        .updateMissedProgress("Resume/CV")
    }), await this.taskQueue.run())
  }
  async fillRegularFields(e) {
    await super.fillRegularFields(e)
  }
  async fillEducationAndEmployment(e) {
    if (this.answer.education && this.answer.education.length > 0) {
      let e = this.answer.education.length;
      this.ensureProgressFields((0, y.buildEducationFieldStatus)(e));
      for (let t = 0; t < e; t++) {
        let e = this.answer.education[t];
        await (0, v.addEducationSection)(1);
        let r = await (0, w.getEducationEditorRules)();
        if (!r) break;
        let n = (0, d.createSectionResultReporter)("education", {
          onSectionResultChanged: this.progressTracker.updateSectionResult
        });
        n.setLabel(`Education ${t+1}`);
        let o = {
          reporter: n,
          row: n.ensureRow(t, e)
        };
        n.emit();
        let i = [];
        i[t] = {
          type: p.FIELD_TYPE.EDUCATION,
          label: "Education",
          children: r
        }, (0, s.setSectionResultFocusRules)("education", i);
        let a = e => /\b(state|province)\b/i.test(e),
          l = r.filter(e => !a(e.label)),
          u = r.filter(e => a(e.label));
        await this.runFieldBatch(l, e, o), u.length > 0 && await (0, g.delay)(500), await this
          .runFieldBatch(u, e, o);
        let c = (0, w.getSectionRecordSnapshot)(r),
          f = !1;
        try {
          f = await (0, v.submitEducationSection)(!0)
        } finally {
          if ((0, s.setSectionResultFocusRules)("education", []), !f)
            for (let e of o.row.fields) "skipped" !== e.status && n.updateField(o.row, e.label,
              e.value, "missed");
          n.emit()
        }
        f ? (this.savedEducationSnapshots[t] = c, this.progressTracker.updateFilledProgress(
          `Education ${t+1}`)) : this.progressTracker.updateMissedProgress(`Education ${t+1}`)
      }
    }
    if (this.answer.workExperience && this.answer.workExperience.length > 0) {
      let e = this.answer.workExperience.length;
      this.ensureProgressFields((0, y.buildExperienceFieldStatus)(e));
      for (let t = 0; t < e; t++) {
        let e = this.answer.workExperience[t];
        await (0, v.addEmploymentSection)(1);
        let r = await (0, w.getEmploymentEditorRules)();
        if (!r) break;
        let n = (0, d.createSectionResultReporter)("employment", {
          onSectionResultChanged: this.progressTracker.updateSectionResult
        });
        n.setLabel(`Employment ${t+1}`);
        let o = {
          reporter: n,
          row: n.ensureRow(t, e)
        };
        n.emit();
        let i = [];
        i[t] = {
          type: p.FIELD_TYPE.EMPLOYMENT,
          label: "Employment",
          children: r
        }, (0, s.setSectionResultFocusRules)("employment", i);
        let a = e => e.toLowerCase().includes("dates employed") || e.toLowerCase().includes(
            "date started") || e.toLowerCase().includes("date ended"),
          l = e => /\b(state|province)\b/i.test(e),
          u = r.filter(e => a(e.label)),
          c = r.filter(e => !a(e.label) && !l(e.label)),
          f = r.filter(e => !a(e.label) && l(e.label));
        await this.runFieldBatch(c, e, o), f.length > 0 && await (0, g.delay)(500), await this
          .runFieldBatch(f, e, o), await this.runFieldBatch(u, e, o);
        let m = 2;
        for (let t = 0; t < m; t++) {
          await (0, g.delay)(300);
          let t = u.filter(e => {
            let t = e.$input;
            return t instanceof HTMLSelectElement ? !t.value || t.selectedIndex <= 0 :
              t instanceof HTMLInputElement && !t.value.trim()
          });
          if (0 === t.length) break;
          await this.runFieldBatch(t, e, o)
        }
        let h = (0, w.getSectionRecordSnapshot)(r),
          b = !1;
        try {
          b = await (0, v.submitEmploymentSection)(!0)
        } finally {
          if ((0, s.setSectionResultFocusRules)("employment", []), !b)
            for (let e of o.row.fields) "skipped" !== e.status && n.updateField(o.row, e.label,
              e.value, "missed");
          n.emit()
        }
        b ? (this.savedEmploymentSnapshots[t] = h, this.progressTracker.updateFilledProgress(
          `Employment ${t+1}`)) : this.progressTracker.updateMissedProgress(
          `Employment ${t+1}`)
      }
    }
  }
  async executeSiteSpecificSteps(e) {
    await super.executeSiteSpecificSteps(e)
  }
  getSubmitButtonSelector() {
    return './/button[@id="save_contact_info_button" or @id="next" or @id="verify_contact_info_button" or @id="new_upload_button"] | .//input[@id="save_contact_info_button" or @id="next" or @id="verify_contact_info_button" or @id="new_upload_button"]'
  }
  async getAutofillSnapshot(e) {
    let t = await (0, w.getFormSnapshot)() || {};
    this.lastFullAutofillSnapshot = t;
    let {
      education: r,
      employment: n,
      ...o
    } = t;
    return o
  }
  async getSubmitSnapshot() {
    let e = await (0, w.getFormSnapshot)() || {};
    this.lastFullSubmitSnapshot = e;
    let {
      education: t,
      employment: r,
      ...n
    } = e;
    return n
  }
  getAdditionalAutofillSnapshotData(e) {
    return this.extractEducationEmploymentAdditional(this.lastFullAutofillSnapshot)
  }
  getAdditionalSubmitSnapshotData() {
    return this.extractEducationEmploymentAdditional(this.lastFullSubmitSnapshot)
  }
  async finalizeFillForm() {
    return await super.finalizeFillForm()
  }
  submitApplication() {
    let e = (0, m.getFirstOrderedNode)(this.getSubmitButtonSelector());
    e && e.click()
  }
  constructor(...e) {
    super(...e), this.lastFullAutofillSnapshot = null, this.lastFullSubmitSnapshot = null, this
      .savedEducationSnapshots = [], this.savedEmploymentSnapshots = [], this.formatAnswer = y
      .formatAnswer
  }
}

