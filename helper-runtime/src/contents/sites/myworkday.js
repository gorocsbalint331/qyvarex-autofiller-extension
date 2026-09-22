/**
 * Parcel module id: 6Cqo2
 * Resolved path: src/contents/sites/myworkday.js
 * Dependencies:
 *   ./form-loss -> dkfwU  =>  src/contents/sites/myworkday/form-loss.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/rules -> 3cWKC  =>  src/contents/methods/rules.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/education-item-trace -> j7UGI  =>  src/contents/sites/education-item-trace.js
 *   ~contents/sites/myworkday/answer -> eUq3l  =>  src/contents/sites/myworkday/answer.js
 *   ~contents/sites/myworkday/education-operation -> aet9i  =>  src/contents/sites/myworkday/education-operation.js
 *   ~contents/sites/myworkday/education-resolve-scheduler -> 6KKZk  =>  src/contents/sites/myworkday/education-resolve-scheduler.js
 *   ~contents/sites/myworkday/operations -> apMik  =>  src/contents/sites/myworkday/operations.js
 *   ~contents/sites/myworkday/rules -> 1H2ID  =>  src/contents/sites/myworkday/rules.js
 *   ~contents/sites/myworkday/section-results -> jywL4  =>  src/contents/sites/myworkday/section-results.js
 *   ~contents/sites/runtime-validation-tracking -> 8W2JT  =>  src/contents/sites/runtime-validation-tracking.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "MyWorkDay", () => N);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/methods/rules"),
  s = e("~contents/methods/track"),
  u = e("~contents/sites/autofill-answer-pair-tracking"),
  c = e("~contents/sites/base-filler"),
  d = e("~contents/sites/education-item-trace"),
  f = e("~contents/sites/myworkday/answer"),
  p = e("~contents/sites/myworkday/education-operation"),
  m = e("~contents/sites/myworkday/education-resolve-scheduler"),
  h = e("~contents/sites/myworkday/operations"),
  g = e("~contents/sites/myworkday/section-results"),
  b = e("~contents/sites/myworkday/rules"),
  y = e("~contents/sites/runtime-validation-tracking"),
  v = e("~core/dom"),
  w = e("~core/enums"),
  S = e("~enums/http"),
  E = e("~store/autofillInfo"),
  x = e("~store/url"),
  C = e("~utils/fieldLabel"),
  A = e("./form-loss");
let k = "myworkday",
  T = ["Security Code", "Country", "Country / Territory", "United States of America",
    "Employee ID (if applicable)", "What is your date of availability?"
  ];

function F(e) {
  return {
    count: e.length,
    labels: e.map(e => ({
      label: e.label,
      type: e.type,
      required: !!e.required
    }))
  }
}

function I(e) {
  return {
    regularKeys: Object.keys(e?.regular ?? {}),
    educationCount: e?.education?.length ?? 0,
    workExperienceCount: e?.workExperience?.length ?? 0,
    skillsCount: e?.skills?.length ?? 0,
    hasResume: !!e?.resume,
    fillDataListCount: e?.fillDataList?.length ?? 0
  }
}

function j(e) {
  return {
    hasResumeInfo: !!e,
    idPresent: !!e?.id,
    tailorIdPresent: !!e?.tailorId,
    tailorPresent: !!e?.tailor,
    diagnoseIdPresent: !!e?.diagnoseId,
    useOriginalResume: !!e?.useOriginalResume,
    resumeNamePresent: !!e?.resumeName,
    template: e?.template ?? null
  }
}

function D(e) {
  return {
    name: e instanceof Error ? e.name : typeof e,
    message: e instanceof Error ? e.message : String(e)
  }
}

function P() {
  return "undefined" != typeof window && window.location ? window.location.href : ""
}

function _(e, t = {}) {
  console.info(`[MyWorkday][autofill-debug] ${e} ${JSON.stringify(t)}`)
}

function L(...e) {
  for (let t of e) {
    let e = (0, f.getWorkdayCountryFillValue)(t);
    if (e) return e
  }
  return null
}

function R(e) {
  return e.replace(/\*/g, "").replace(/\s+/g, " ").trim().toLowerCase()
}

function O(e, t) {
  if (Object.prototype.hasOwnProperty.call(e, t)) return {
    found: !0,
    value: e[t]
  };
  let r = R(t);
  for (let [t, n] of Object.entries(e))
    if (R(t) === r) return {
      found: !0,
      value: n
    };
  return {
    found: !1,
    value: void 0
  }
}
async function M(e) {
  try {
    return await (0, o.sendToBackground)({
      name: "resolveAutofillOperation",
      body: {
        operation: e,
        source: "myworkday"
      }
    })
  } catch (e) {
    return console.warn("[MyWorkday] resolveAutofillOperation failed:", e), null
  }
}
class N extends c.BaseFiller {
  getFieldHandlers() {
    return {
      [w.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, h.fillMyWorkdayTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [w.FIELD_TYPE.NUMBER]: {
        handler: (e, t) => (0, h.fillMyWorkdayTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [w.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, h.fillMyWorkdayCheckBoxesField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [w.FIELD_TYPE.MULTI_SELECT]: {
        handler: (e, t) => (0, h.fillSearchBoxInputField)(e.$input, t),
        options: {
          expectArray: !0
        }
      },
      [w.FIELD_TYPE.SEARCH]: {
        handler: (e, t) => (0, h.fillSearchBoxInputField)(e.$input, t),
        options: {
          expectArray: !0
        }
      },
      [w.FIELD_TYPE.LISTBOX]: {
        handler: (e, t) => (0, h.fillMyWorkdayListboxRule)(e, t),
        options: {
          expectArray: !0
        }
      },
      [w.FIELD_TYPE.DATE]: {
        handler: (e, t) => (0, h.fillMyWorkdayDateField)(e.$input, t),
        options: {
          expectArray: !1
        }
      }
    }
  }
  getSiteName() {
    return k
  }
  async extractFormRules() {
    return (0, b.getRules)()
  }
  async runPreFillForm() {
    this.submitTrackingBinding = (0, h.unbindMyWorkdaySubmitTracking)(this
        .submitTrackingBinding), this.runtimeValidationRetryResults = [], this
      .autofillInfoState = null, this.autofillCountry = void 0, this.countryFilled = !1, this
      .educationTraceRunId = null, this.taskQueue.add(h.waitPageClean), await this.taskQueue
      .run(), await (0, E.useAutofillInfoStore).getState().fetchAutofillInfo(), this
      .autofillInfoState = (0, E.useAutofillInfoStore).getState(), this.autofillCountry = this
      .autofillInfoState.country;
    let e = L(this.autofillCountry, this.autofillInfoState.autofillInfo?.location?.country);
    e && (this.taskQueue.add(async () => {
      this.countryFilled = await (0, h.fillCountry)(e)
    }), await this.taskQueue.run()), this.taskQueue.add(async () => {
      await (0, h.preclickAddButtons)()
    }), await this.taskQueue.run()
  }
  async getAutofillSnapshot() {
    let e = this.ensureEducationTraceRunId();
    return (0, b.getFormSnapshot)({
      markEducationRows: !0,
      includeEducationSnapshotIndex: !0,
      includeEducationTrace: !0,
      educationTraceRunId: e
    })
  }
  async getSubmitSnapshot() {
    return (0, b.getFormSnapshot)({
      includeEducationSnapshotIndex: !0,
      includeEducationTrace: !0,
      educationTraceRunId: this.ensureEducationTraceRunId()
    })
  }
  submitApplication() {}
  ensureEducationTraceRunId() {
    return this.educationTraceRunId || (this.educationTraceRunId = (0, d
      .createEducationTraceRunId)()), this.educationTraceRunId
  }
  buildRuntimeValidationTrackingData(e, t) {
    return (0, p.buildWorkdayEducationRuntimeValidationTrackingData)(this.answer.education ??
    [], Array.isArray(e.education) ? e.education : [], t, this.runtimeValidationRetryResults)
  }
  isRuntimeValidationRetryCandidate(e) {
    return "degree" === e.fieldType && ("mismatched" === e.status || "empty" === e.status) && e
      .attemptedCandidates.length > 0
  }
  findEducationValidationRule(e, t) {
    let r = e[t.index],
      n = Array.isArray(r?.children) ? r.children : [],
      o = new Set("school" === t.fieldType ? ["school", "school or university"] : "degree" === t
        .fieldType ? ["degree"] : ["field of study", "discipline"]);
    return n.find(e => {
      let t = String(e.label ?? "").trim().toLowerCase();
      return o.has(t)
    }) ?? null
  }
  async requestFormAnswers(e, t, r = {}) {
    try {
      let n = this.autofillInfoState ?? (0, E.useAutofillInfoStore).getState(),
        o = this.autofillCountry ?? n.country;
      this.token || (this.token = await (0, i.getSiteToken)()), !1 !== r.updateTimeTrace && (
        this.timeTrace.requestStartTime = Date.now()), _("requestFormAnswers:start", {
        fromAgent: t,
        resumeId: this.resumeInfo?.id,
        tailorId: this.resumeInfo?.tailorId,
        tokenPresent: !!this.token,
        autofillCountry: o,
        rules: F(e)
      });
      let a = this.captureFalconResponseRun(),
        s = await (0, i.getElementRules)((0, l.filterRulesByLabel)(e, T), k, this.token, t, this
          .resumeInfo.id, this.resumeInfo.tailorId);
      this.recordFalconResponse(s, a);
      let u = (0, f.formatAnswer)(s, {
        autofillInfo: n.autofillInfo,
        country: o,
        rules: e
      });
      return !1 !== r.updateTimeTrace && (this.timeTrace.fillStartTime = Date.now()), _(
        "requestFormAnswers:success", {
          answer: I(u)
        }), u
    } catch (e) {
      if (e instanceof i.HTTPError || e instanceof i.ResumeMissingCodeError) return console
        .warn("[MyWorkday][autofill-debug] requestFormAnswers:known-error", {
          message: e.message
        }), (0, s.sendHttpStatusMessage)(e.message), e.message;
      console.error("[MyWorkday][autofill-debug] requestFormAnswers:unknown-error", e)
    }(0, a.checkpoint)()
  }
  async runComboQuestionAutofillIfNeeded(e, t) {
    if (!this.hasComboQuestions) return e;
    await (0, c.waitForComboQuestionsToSettle)(this.comboQuestionSettleDelayMs), this
      .markEmptyFilledFieldsFromSnapshot(await this.getAutofillSnapshot());
    let r = await (0, b.getRules)(),
      n = (0, c.getNewComboQuestionRules)(e, r),
      o = this.getMissedComboQuestionRetryRules(e, r);
    if (0 === n.length && 0 === o.length) return e;
    for (let e of n) this.progressTracker.updateFieldRequiredStatus(e);
    if (n.length > 0) {
      let e = await this.requestFormAnswers(n, t, {
        updateTimeTrace: !1
      });
      if ("string" == typeof e) return e;
      e && (this.answer = (0, c.mergeComboQuestionAnswer)(this.answer, e, n))
    }
    let a = (0, i.getRegularOperations)((0, b.getWorkdayRegularRules)([...o, ...n]), this.answer
      .regular, this.operationConfig);
    for (let e of a) this.taskQueue.add(e);
    return await this.taskQueue.run(), this.taskQueue.add(h.blurPage), await this.taskQueue
    .run(), [...e, ...n]
  }
  getMissedComboQuestionRetryRules(e, t) {
    let r = new Set(e.map(e => (0, C.normalizeFieldLabel)(e?.label))),
      n = new Set(this.progressTracker.fieldStatus.missingFields.map(e => (0, C
        .normalizeFieldLabel)(e))),
      o = this.answer?.regular && "object" == typeof this.answer.regular && !Array.isArray(this
        .answer.regular) ? this.answer.regular : {},
      i = new Set(Object.entries(o).filter(([, e]) => null != e && "" !== e).map(([e]) => (0, C
        .normalizeFieldLabel)(e))),
      a = [],
      l = new Set;
    for (let e of t) {
      let t = (0, C.normalizeFieldLabel)(e?.label);
      !(!t || l.has(t)) && r.has(t) && n.has(t) && i.has(t) && (l.add(t), a.push(e))
    }
    return a
  }
  markEmptyFilledFieldsFromSnapshot(e) {
    let t = new Set(["", "select one", "[]", "/", "//"]),
      r = e => {
        if (null == e) return !0;
        let r = String(e).trim().toLowerCase();
        return t.has(r)
      };
    for (let t of [...this.progressTracker.fieldStatus.filledFields]) {
      let n = O(e, t);
      if (n.found) {
        r(n.value) && (console.warn(
            `[MyWorkday] field "${t}" marked filled but actual value is empty:`, n.value),
          this.progressTracker.updateMissedProgress(t));
        continue
      }
      let o = e.education || e.employment;
      if (Array.isArray(o))
        for (let e of o) {
          if (!e || "object" != typeof e) continue;
          let n = O(e, t);
          if (n.found && r(n.value)) {
            console.warn(
              `[MyWorkday] grouped field "${t}" marked filled but actual value is empty:`, n
              .value), this.progressTracker.updateMissedProgress(t);
            break
          }
        }
    }
  }
  syncSectionResultsFromSnapshot(e) {
    let t = this.progressTracker.fieldStatus.sectionResults ?? [];
    for (let r of t) {
      let t = e[r.type],
        n = (0, g.syncMyWorkdaySectionResult)(r, t);
      n !== r && (console.info("[MyWorkday] synced section progress details from DOM", {
        section: r.type,
        rowCount: n.rows.length
      }), this.progressTracker.updateSectionResult(n))
    }
  }
  async retryRuntimeValidationFailures({
    autofillSnapshot: e,
    eduRules: t
  }) {
    let r = this.buildRuntimeValidationTrackingData(e, t),
      n = (0, p.getWorkdayEducationRuntimeValidationLogEntries)(r).filter(e => this
        .isRuntimeValidationRetryCandidate(e));
    if (0 === n.length) return {
      autofillSnapshot: e,
      runtimeValidationTrackingData: r
    };
    for (let e of (this.runtimeValidationRetryResults = [], n)) {
      let r = this.findEducationValidationRule(t, e);
      if (!r) continue;
      let n = r.$input ?? null;
      (r.type === w.FIELD_TYPE.SEARCH || r.type === w.FIELD_TYPE.MULTI_SELECT) && await (0, h
        .clearWorkdaySearchSelection)(n);
      let o = (0, p.buildWorkdayEducationRuntimeValidationRetryRecord)({
        record: this.answer.education?.[e.index] ?? {},
        ruleLabel: r.label,
        attemptedCandidates: e.attemptedCandidates
      });
      await this.operationConfig[r.type]?.(r, o, !1), this.runtimeValidationRetryResults.push({
        index: e.index,
        fieldType: e.fieldType,
        initialStatus: e.status,
        initialCommittedValue: e.committedValue,
        retryCount: 1,
        resetApplied: !1
      })
    }
    return e = (0, b.getFormSnapshot)({
      markEducationRows: !0,
      includeEducationSnapshotIndex: !0,
      includeEducationTrace: !0,
      educationTraceRunId: this.ensureEducationTraceRunId()
    }), r = this.buildRuntimeValidationTrackingData(e, t), {
      autofillSnapshot: e,
      runtimeValidationTrackingData: r
    }
  }
  async uploadResumeOnly() {
    this.progressTracker.setFieldsRequiredStatus([{
      label: "Resume/CV",
      required: !0
    }]);
    let e = null;
    return (this.taskQueue.add(async () => {
      try {
        let e = await (0, h.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        "not-applicable" === e && this.progressTracker.updateMissedProgress("Resume/CV")
      } catch (t) {
        if (t instanceof a.CancelledError) throw t;
        if (this.progressTracker.updateMissedProgress("Resume/CV"), t instanceof i
          .ResumeMissingCodeError || t instanceof Error && t.message === i
          .NO_RESUME_FOUND_ERROR) {
          e = t instanceof i.ResumeMissingCodeError ? t.message : S.CUSTOM_ERROR_CODES
            .RESUME_MISSING_KEY, (0, s.sendHttpStatusMessage)(e);
          return
        }
        console.error("[MyWorkday] resume-only upload failed:", t)
      }
    }), await this.taskQueue.run(), e) ? e : ((0, s.postStatus)("filling", this
        .progressTracker.fieldStatus, this.timeTrace), this.progressTracker
      .generateFinalProgress())
  }
  clearProgressAfterFormUnavailable(e, t) {
    let r = this.progressTracker.fieldStatus;
    console.warn("[MyWorkday][autofill-debug] form-unavailable:clear-progress", {
      stage: e,
      href: P(),
      error: t instanceof Error ? t.message : String(t),
      fieldRequiredStatus: r.fieldRequiredStatus.map(e => ({
        label: e.label,
        required: e.required
      })),
      filledFields: r.filledFields,
      missingFields: r.missingFields,
      currentField: r.currentField ?? null
    }), this.progressTracker.clear();
    let n = this.progressTracker.generateFinalProgress();
    return window.top?.postMessage({
      type: w.MESSAGE_EVENTS.autoFillResultFromIframe,
      data: n
    }, {
      targetOrigin: "*"
    }), n
  }
  async doFillForm(e = !1) {
    let t, r;
    _("doFillForm:start", {
      href: P(),
      fromAgent: e,
      disableUploadResume: this.disableUploadResume
    }), await this.initializeFillForm();
    try {
      t = await this.extractFormRules()
    } catch (e) {
      if ((0, A.isWorkdayNoFormFieldsError)(e)) return this.clearProgressAfterFormUnavailable(
        "extract-form-rules", e);
      throw e
    }
    if (_("extractFormRules:done", {
        rules: F(t)
      }), this.progressTracker.setFieldsRequiredStatus(t), 0 === t.length) return !this
      .disableUploadResume && (0, h.hasWorkdayResumeUploadInput)() ? (_(
        "no-rules:upload-resume-only"), await this.uploadResumeOnly()) : (console.warn(
          "[MyWorkday][autofill-debug] no-rules:no-resume-upload"), this.progressTracker
        .generateFinalProgress());
    this.taskQueue.add(h.blurPage), await this.taskQueue.run();
    let n = await this.requestFormAnswers(t, e);
    if ("string" == typeof n) return console.warn(
      "[MyWorkday][autofill-debug] doFillForm:answer-error", {
        answerResult: n
      }), n;
    if (n && (this.answer = n), _("doFillForm:answer-ready", {
        answer: I(this.answer)
      }), !this.countryFilled) {
      let e = L(this.autofillCountry, this.answer.country, this.autofillInfoState?.autofillInfo
        ?.location?.country);
      e && (this.taskQueue.add(async () => {
        this.countryFilled = await (0, h.fillCountry)(e)
      }), await this.taskQueue.run())
    }(0, a.checkpoint)();
    let o = (0, b.getSubmitButtonText)();
    (0, s.bindSubmitButton)(o, this.progressTracker.fieldStatus, this.timeTrace), this.taskQueue
      .add(async () => {
        await (0, h.expandForm)(this.answer)
      }), await this.taskQueue.run();
    let l = await (0, b.getEduRules)(),
      c = await (0, b.getExpRules)();
    (0, v.setSectionResultFocusRules)("employment", c), (0, v.setSectionResultFocusRules)(
      "education", l);
    let d = (0, b.getWorkdayEducationApiBase)(),
      f = c.length > 0 ? (0, i.getEmploymentOperations)(c, this.answer.workExperience, this
        .operationConfig, void 0, {
          onCompleted: () => this.progressTracker.updateFilledProgress("Employment"),
          onSkipped: () => this.progressTracker.updateMissedProgress("Employment"),
          onSectionResultChanged: this.progressTracker.updateSectionResult
        }) : [],
      g = this.answer.education ?? [],
      w = !!(d && l.length > 0 && g.length > 0),
      E = w ? (0, m.cloneWorkdayEducationRecords)(g) : g;
    if (w && _("education-resolve:start", {
        educationRecords: E.length,
        educationRuleGroups: l.length
      }), await (0, m.runDeferredWorkdayEducationResolve)({
        fallbackValue: E,
        startResolve: async () => w && d ? await (0, p
          .resolveWorkdayEducationRecordsInParallel)({
          apiBase: d,
          rules: l,
          records: E,
          resolveOperation: M
        }) : E,
        fillIndependentFields: async () => {
          let e = (0, b.getWorkdayRegularRules)(t),
            r = [...(0, i.getRegularOperations)(e, this.answer.regular, this
              .operationConfig), ...f];
          for (let t of (_("independent-operations:built", {
              regularRules: e.length,
              expRules: c.length,
              operations: r.length,
              educationResolveStarted: w
            }), r)) this.taskQueue.add(t);
          await this.taskQueue.run(), _("independent-operations:finished", {
            educationResolveStarted: w
          })
        },
        checkpoint: a.checkpoint,
        onResolveSettled: ({
          failed: e,
          elapsedMs: t,
          errorName: r
        }) => {
          w && _("education-resolve:ready", {
            failed: e,
            elapsedMs: t,
            errorName: r
          })
        },
        fillEducation: async e => {
          this.answer.education = e;
          let t = l.length > 0 ? (0, i.getEducationOperations)(l, this.answer.education,
            this.operationConfig, void 0, {
              onCompleted: () => this.progressTracker.updateFilledProgress("Education"),
              onSkipped: () => this.progressTracker.updateMissedProgress("Education"),
              onSectionResultChanged: this.progressTracker.updateSectionResult
            }) : [];
          for (let e of t) this.taskQueue.add(e);
          await this.taskQueue.run(), _("education-operations:finished", {
            eduRules: l.length,
            operations: t.length
          })
        }
      }), this.countryFilled)
      for (let e of (0, b.findWorkdayCountryProgressLabels)(this.progressTracker.fieldStatus))
        this.progressTracker.updateFilledProgress(e);
    this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this
      .taskQueue.add(async () => {
        _("resume-upload:start", {
          resumeInfo: j(this.resumeInfo),
          hasUploadInput: (0, h.hasWorkdayResumeUploadInput)()
        });
        try {
          let e = await (0, h.uploadResume)(this.resumeInfo, this.progressTracker
            .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
          if ("not-applicable" === e) {
            _("resume-upload:not-applicable", {
              reason: "no-upload-input"
            });
            return
          }
          _("resume-upload:success", {
            resumeInfo: j(this.resumeInfo)
          })
        } catch (e) {
          if (e instanceof a.CancelledError) throw e;
          this.progressTracker.updateMissedProgress("Resume/CV"), console.warn(
            "[MyWorkday][autofill-debug] resume-upload:failed", {
              resumeInfo: j(this.resumeInfo),
              hasUploadInput: (0, h.hasWorkdayResumeUploadInput)(),
              error: D(e)
            }), (e instanceof i.ResumeMissingCodeError || e instanceof Error && e
            .message === i.NO_RESUME_FOUND_ERROR) && (0, s.sendHttpStatusMessage)(
            e instanceof i.ResumeMissingCodeError ? e.message : S.CUSTOM_ERROR_CODES
            .RESUME_MISSING_KEY)
        }
      }), this.taskQueue.add(async () => {
        if (!this.answer.skills?.length) return;
        let e = !!document.querySelector(
          '[data-automation-id="skillsSection"] input[placeholder="Search"], [data-automation-id="formField-skills"] input[placeholder="Search"], [id*="Skills-section"] input[placeholder="Search"]'
          );
        if (!e) return;
        let t = (0, b.findWorkdaySkillsProgressLabel)(this.progressTracker.fieldStatus);
        t && (0, a.updateCurrentField)(t);
        try {
          let e = await (0, a.withSkip)(async () => (0, h.fillSkills)(this.answer.skills));
          e && t && this.progressTracker.updateFilledProgress(t)
        } catch (e) {
          if (e instanceof a.SkippedError) {
            t && this.progressTracker.updateMissedProgress(t);
            return
          }
          throw e
        }
      }), this.taskQueue.add(async () => {
        await (0, h.blurPage)()
      }), await this.taskQueue.run();
    try {
      r = await this.runComboQuestionAutofillIfNeeded(t, e)
    } catch (e) {
      if ((0, A.isWorkdayNoFormFieldsError)(e)) return this.clearProgressAfterFormUnavailable(
        "combo-question-rules", e);
      throw e
    }
    if ("string" == typeof r) return r;
    t = r;
    let C = (0, b.getFormSnapshot)({
      markEducationRows: !0,
      includeEducationSnapshotIndex: !0,
      includeEducationTrace: !0,
      educationTraceRunId: this.ensureEducationTraceRunId()
    });
    for (let e of (0, b.findFilledMyExperienceProgressLabels)(this.progressTracker.fieldStatus,
        C)) this.progressTracker.updateFilledProgress(e);
    let T = (0, p.buildWorkdayEducationResolveTrackingData)(this.answer.education ?? []),
      R = await this.retryRuntimeValidationFailures({
        autofillSnapshot: C,
        eduRules: l
      });
    C = R.autofillSnapshot, this.syncSectionResultsFromSnapshot(C);
    let O = R.runtimeValidationTrackingData;
    (0, y.sendRuntimeValidationDeviationEvent)({
      formUrl: (0, x.useUrlStore).getState().currentTabUrl,
      source: k,
      trackingData: O
    });
    let N = (0, u.buildFalconAutofillAnswerPairData)(this.answer),
      $ = {
        ...N ? {
          falcon: N
        } : {},
        ...T,
        ...O
      };
    (0, p.getWorkdayEducationRuntimeValidationLogEntries)(O).forEach(e => {
      let t = `[MyWorkday] ${e.fieldLabel} validation ${e.status}`,
        r = {
          index: e.index,
          fieldType: e.fieldType,
          committedValue: e.committedValue,
          attemptedCandidates: e.attemptedCandidates
        };
      "info" === e.level ? console.info(t, r) : console.warn(t, r)
    });
    let B = (0, p.getUnresolvedWorkdayEducationRuntimeValidationLogEntries)(O);
    for (let e of (B.length > 0 && (console.warn(
          "[MyWorkday] Education runtime validation still has unresolved fields; marking Education as missed",
          B.map(e => ({
            index: e.index,
            fieldType: e.fieldType,
            status: e.status,
            committedValue: e.committedValue,
            attemptedCandidates: e.attemptedCandidates
          }))), this.progressTracker.updateMissedProgress("Education")), this
        .markEmptyFilledFieldsFromSnapshot(C), (0, b
          .findUnfilledWorkdaySelfIdentifyCheckboxProgressLabels)(this.progressTracker
          .fieldStatus))) this.progressTracker.updateMissedProgress(e);
    for (let e of (0, b.findFilledWorkdaySelfIdentifyCheckboxProgressLabels)(this
        .progressTracker.fieldStatus)) this.progressTracker.updateFilledProgress(e);
    return this.submitTrackingBinding = (0, h.bindMyWorkdaySubmitTracking)(C, this
      .submitTrackingBinding, $, this.educationTraceRunId), (0, s.postStatus)("filling", this
      .progressTracker.fieldStatus, this.timeTrace), _("doFillForm:final", {
      fieldStatus: this.progressTracker.fieldStatus,
      timeTrace: this.timeTrace
    }), this.progressTracker.generateFinalProgress()
  }
  constructor(...e) {
    super(...e), this.submitTrackingBinding = null, this.runtimeValidationRetryResults = [],
      this.hasComboQuestions = !0, this.comboQuestionSettleDelayMs = 300, this
      .autofillInfoState = null, this.countryFilled = !1, this.educationTraceRunId = null
  }
}

