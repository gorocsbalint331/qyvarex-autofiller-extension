/**
 * Parcel module id: g7awH
 * Resolved path: contents/sites/avature.js (oracle restore)
 * Dependencies:
 *   ../option-resolve-rollout -> kwH9q  =>  _dotdot_/_dotdot_/option-resolve-rollout.js
 *   ./answer -> ctNoD  =>  src/contents/sites/avature/answer.js
 *   ./combo-questions -> 5hwtt  =>  src/contents/sites/avature/combo-questions.js
 *   ./country -> 6pytM  =>  src/contents/sites/avature/country.js
 *   ./education-operation -> 8nwbv  =>  education-operation.js
 *   ./operations -> KsG95  =>  src/contents/sites/avature/operations.js
 *   ./rule -> iVHF6  =>  rule.js
 *   ./submit-button -> gdzxk  =>  submit-button.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  _tilde_contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/track -> h479b  =>  _tilde_contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Avature", () => x);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/methods/dom"),
  s = e("~contents/methods/track"),
  u = e("~contents/sites/base-filler"),
  c = e("~core/enums"),
  d = e("~core/xpath"),
  f = e("~store/autofillInfo"),
  p = e("./answer"),
  m = e("./combo-questions"),
  h = e("./country"),
  g = e("./operations"),
  b = e("./education-operation"),
  y = e("../option-resolve-rollout"),
  v = e("./rule"),
  w = e("./submit-button");
let S = 3,
  E = {
    requestStep: async e => await (0, o.sendToBackground)({
      name: "resolveAutofillClientSearchStep",
      body: e
    }),
    captureCandidates: g.captureAvatureInstitutionCandidates,
    closeCandidates: g.closeAvatureSelect2Search,
    commitCandidate: g.fillResolvedAvatureInstitutionField
  };
class x extends u.BaseFiller {
  constructor() {
    super(), this.rules = [], this.avatureEducationResolveFailed = !1, this
      .avatureEducationResolvedFields = new WeakSet, this.avatureEducationFailedFields =
      new WeakSet, this.currentRunCountryCommitted = !1, this.formatAnswer = e => (0, p
        .formatAnswer)(e), this.hasComboQuestions = !0, this.comboQuestionSettleDelayMs = 300
  }
  getFieldHandlers() {
    return {
      [c.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, g.fillInputTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [c.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, g.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [c.FIELD_TYPE.MULTI_SELECT]: {
        handler: (e, t) => (0, g.fillMultiSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [c.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, g.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [c.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, g.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [c.FIELD_TYPE.DATE]: {
        handler: (e, t) => (0, g.fillDateField)(e.$input, t),
        options: {
          expectArray: !1
        }
      }
    }
  }
  async checkCoverLetter() {
    (0, l.postCoverLetterStatus)((0, g.hasAvatureCoverLetterSlot)() ? "required" : "")
  }
  async runPreFillForm() {
    this.currentRunCountryCommitted = !1;
    let e = await (0, h.runAvatureCountryPrefill)({
      preFillForm: async () => {
        await (0, v.clearEduExp)(), this.avatureEducationResolveFailed = !1, this
          .avatureEducationResolvedFields = new WeakSet, this
          .avatureEducationFailedFields = new WeakSet
      },
      fetchAutofillInfo: () => (0, f.useAutofillInfoStore).getState().fetchAutofillInfo(),
      fillCountry: async e => {
        let t = (0, h.getAvatureGeographicCountrySelects)();
        return 1 !== t.length ? (console.warn("[Avature][Country] control-not-unique", {
          count: t.length
        }), !1) : (0, g.fillAvatureGeographicCountryField)(t[0], e, (0, h
          .getAvatureCountryAliases)(e))
      },
      waitForDependentFields: async () => !(0, g.hasAvatureStateField)() || await (0, g
        .waitForAvatureStateOptions)([])
    });
    this.currentRunCountryCommitted = e.committed, e.committed && !e.dependentSettled && console
      .warn("[Avature][Country] dependent-options-timeout", {
        dependent: "State/Province"
      })
  }
  async extractFormRules() {
    let e = await (0, v.extractRules)();
    return this.rules = e, e
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = this.prepareCoverLetterRules(await this.extractFormRules()),
      {
        regularRules: r
      } = (0, h.partitionAvatureCountryRules)(t);
    if (this.progressTracker.setFieldsRequiredStatus(t), (0, h.reconcileAvatureCountryProgress)(
        t, this.currentRunCountryCommitted, {
          updateFilledProgress: this.progressTracker.updateFilledProgress,
          updateMissedProgress: this.progressTracker.updateMissedProgress
        }), 0 === t.length && !this.disableUploadResume && (0, g.getAvatureResumeUploadDom)()
      .input) return console.info("[Avature][ResumeUpload] resume-only-page"), await this
      .uploadResumeOnly();
    let n = await this.fetchFormAnswers(r, e);
    if ("string" == typeof n) return n;
    await this.handleResumeUpload(), await this.fillRegularFields(r), await this
      .fillEducationAndEmployment(t), await this.fillCoverLetterFields();
    let o = await this.runComboQuestionAutofillIfNeeded(t, e);
    return "string" == typeof o ? o : (t = o, await this.executeSiteSpecificSteps(t), await this
      .finalizeFillForm())
  }
  async uploadResumeOnly() {
    this.progressTracker.setFieldsRequiredStatus([{
      label: "Resume/CV",
      required: !0
    }]);
    try {
      let e = await (0, g.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
      e || (this.progressTracker.updateMissedProgress("Resume/CV"), console.warn(
        "[Avature][ResumeUpload] resume-only-upload-failed", {
          reason: "file-not-selected"
        }))
    } catch (e) {
      if (e instanceof a.CancelledError) throw e;
      this.progressTracker.updateMissedProgress("Resume/CV"), console.error(
        "[Avature][ResumeUpload] resume-only-upload-failed", {
          reason: e instanceof Error ? e.message : String(e)
        })
    }
    return await this.finalizeFillForm()
  }
  async fetchFormAnswers(e, t) {
    let r = await super.fetchFormAnswers(e, t);
    return "string" == typeof r ? r : this.answer ? void this
    .bindAvatureClickSubmitTelemetry() : "Failed to get answer"
  }
  getSiteName() {
    return "avature"
  }
  bindAvatureClickSubmitTelemetry() {
    let e = (0, d.getFirstOrderedNodeSafe)(w.AVATURE_TRACKING_BUTTON_XPATH, document.body);
    e && (0, s.bindSubmitButton)(e.textContent || "Submit", this.progressTracker.fieldStatus,
      this.timeTrace)
  }
  async fillRegularFields(e) {
    let t = e.flatMap(t => (0, i.getRegularOperations)([t], (0, p
      .getAvatureRegularRecordForRule)(t, e, this.answer), this.operationConfig));
    for (let e of t) this.taskQueue.add(e);
    await this.taskQueue.run();
    let r = e.some(e => e.type === c.FIELD_TYPE.SELECT && e.$input?.classList?.contains(
      "countryFieldSelect"));
    r && await (0, g.waitForAvatureStateOptions)(e)
  }
  async fillEducationAndEmployment(e) {
    this.answer.workExperience?.length > 0 && await (0, g.fillEmploymentFields)(e, this.answer
      .workExperience, this.operationConfig, this.taskQueue, this.progressTracker
      .updateFilledProgress.bind(this.progressTracker), this.progressTracker
      .updateSectionResult), this.answer.education?.length > 0 && await (0, g
      .fillEducationFields)(e, this.answer.education, this.operationConfig, this.taskQueue,
      e => {
        if (this.avatureEducationResolveFailed) {
          this.progressTracker.updateMissedProgress("Education");
          return
        }
        this.progressTracker.updateFilledProgress(e)
      }, async (e, t, r) => this.resolveAvatureEducationField(e, t, r), this.progressTracker
        .updateSectionResult)
  }
  async resolveAvatureEducationField(e, t, r) {
    let n = (0, b.classifyAvatureEducationClientSearchField)(e),
      o = Object.keys(t).filter(e =>
        /rawmajor|rawdegree|major|speciali|field of study|area of study|discipline|study/i.test(
          e)),
      i = o.filter(e => {
        let r = t[e];
        return Array.isArray(r) ? r.some(e => "string" == typeof e && e.trim().length > 0) :
          "string" == typeof r && r.trim().length > 0
      }),
      a = e.$input;
    if (console.info("[Avature][Education] resolve-check", JSON.stringify({
        recordIndex: r,
        label: e.label,
        ruleType: e.type,
        fieldType: n,
        inputId: a?.id || null,
        multiple: a?.multiple === !0,
        className: String(a?.className || ""),
        answerKeys: o,
        answerSourceKeys: i,
        regularAnswerKeys: Object.keys(this.answer.regular || {}).filter(e =>
          /rawmajor|rawdegree|major|speciali|field of study|area of study|discipline|study/i
          .test(e))
      })), !y.V119_OPTION_RESOLVE_ROLLOUT.avatureEducationInstitution || !n) return "continue";
    if (!a) return this.avatureEducationResolveFailed = !0, "handled";
    if (this.avatureEducationResolvedFields.has(a) || this.avatureEducationFailedFields.has(a))
      return "handled";
    let l = await (0, b.resolveAvatureInstitutionClientSearch)(a, t, e.label, E, n);
    return l.success && l.selected ? (t[e.label] = l.selected.text, this
      .avatureEducationResolvedFields.add(a), console.info(
        "[Avature][Education] client-search-committed", {
          recordIndex: r,
          fieldType: n,
          label: e.label,
          roundCount: l.rounds.length
        })) : (this.avatureEducationResolveFailed = !0, this.avatureEducationFailedFields.add(
      a), (0, g.clearAvatureInstitutionField)(a), console.warn(
      "[Avature][Education] client-search-failed", JSON.stringify({
        recordIndex: r,
        fieldType: n,
        label: e.label,
        reason: l.failureReason || "unknown-error",
        roundCount: l.rounds.length
      }))), "handled"
  }
  getNewComboQuestionRules(e, t) {
    return (0, m.getNewAvatureComboRules)(e, t).filter(e => !(0, h
      .isAvatureGeographicCountryRule)(e))
  }
  mergeComboQuestionAnswer(e) {
    this.answer = (0, m.mergeAvatureComboAnswer)(this.answer, e)
  }
  async runComboQuestionAutofillIfNeeded(e, t) {
    let r = e;
    try {
      for (let e = 0; e < S; e++) {
        let e = await super.runComboQuestionAutofillIfNeeded(r, t);
        if ("string" == typeof e) {
          console.warn("[Avature] skip combo refill:", e);
          break
        }
        if (e.length === r.length) break;
        r = e, this.rules = e
      }
      return r
    } catch (e) {
      if (e instanceof a.CancelledError || e instanceof a.SkippedError) throw e;
      return console.warn("[Avature] combo refill failed, continue normal flow:", e), r
    }
  }
  async executeSiteSpecificSteps(e) {
    this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this
      .taskQueue.add(async () => {
        await (0, g.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      });
    let t = (0, g.hasAvatureCoverLetterSlot)();
    t && this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: !0
      }), t && this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName ? this
      .taskQueue.add(async () => {
        let e = await (0, g.uploadCoverLetter)(this.coverLetter, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        e || this.progressTracker.updateMissedProgress("Cover Letter")
      }) : t && this.progressTracker.updateMissedProgress("Cover Letter"), this.taskQueue.add(
        async () => await (0, g.fillAgreementField)(this.rules, this.answer.regular || {})),
      await this.taskQueue.run(), await this.bindSubmitButtonTracking(e)
  }
  submitApplication() {
    let e = (0, d.getFirstOrderedNodeSafe)(w.AVATURE_FINAL_SUBMIT_BUTTON_XPATH, document.body);
    e && e.click()
  }
  cancelAutoFill() {
    this.taskQueue.clear()
  }
  async getAutofillSnapshot() {
    return (0, v.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, v.getFormSnapshot)()
  }
  getAdditionalAutofillSnapshotData() {
    return (0, v.getAdditionalFormSnapshotData)()
  }
  getAdditionalSubmitSnapshotData() {
    return (0, v.getAdditionalFormSnapshotData)()
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    return (0, w.getAvatureSubmitButtonFromEventTarget)(e)
  }
}

