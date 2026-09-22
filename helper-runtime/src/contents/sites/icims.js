/**
 * Parcel module id: j70hj
 * Resolved path: src/contents/sites/icims.js
 * Dependencies:
 *   ../autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ../base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ../education-item-trace -> j7UGI  =>  src/contents/sites/education-item-trace.js
 *   ./answer -> 9Ic4b  =>  src/contents/sites/icims/answer.js
 *   ./client-search-widget -> exkSa  =>  src/contents/sites/icims/client-search-widget.js
 *   ./continue-autofill -> eqgAt  =>  src/contents/sites/icims/continue-autofill.js
 *   ./create-login -> 5BheW  =>  src/contents/sites/icims/create-login.js
 *   ./education-client-search -> cov4x  =>  src/contents/sites/icims/education-client-search.js
 *   ./job-detail-continuation -> a5F89  =>  src/contents/sites/icims/job-detail-continuation.js
 *   ./job-detail-entry -> 3Lplz  =>  src/contents/sites/icims/job-detail-entry.js
 *   ./operations -> lYqnX  =>  src/contents/sites/icims/operations.js
 *   ./rules -> 9LvSK  =>  src/contents/sites/icims/rules.js
 *   ./submit-tracking -> 5kesW  =>  src/contents/sites/icims/submit-tracking.js
 *   ./utils -> DQtoj  =>  src/contents/sites/icims/utils.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~enums -> drZvv  =>  src/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/starRating -> imWVP  =>  src/utils/starRating.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillIcimsEducationRows", () => B), n.export(r, "Icims", () =>
  q);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/methods/observer"),
  s = e("~core/dom"),
  u = e("~core/enums"),
  c = e("~core/utils"),
  d = e("~core/xpath"),
  f = e("~enums"),
  p = e("~store/autofillInfo"),
  m = e("~store/url"),
  h = e("~utils/delay"),
  g = e("~utils/starRating"),
  b = e("~utils/string"),
  y = e("../autofill-answer-pair-tracking"),
  v = e("../base-filler"),
  w = e("../education-item-trace"),
  S = e("./job-detail-entry"),
  E = e("./job-detail-continuation"),
  x = e("./continue-autofill"),
  C = e("./education-client-search"),
  A = e("./answer"),
  k = e("./client-search-widget"),
  T = e("./create-login"),
  F = e("./operations"),
  I = e("./rules"),
  j = e("./submit-tracking"),
  D = e("./utils");
let P = "jobright:icims:upload-pending-autofill",
  _ = 3e4,
  L = "jobright:icims:continue-request",
  R = /(?:address|city|zip|postal|country|state|province|county)/i;

function O() {
  let e = Array.from(document.querySelectorAll("fieldset.iCIMS_CollectionGroup")).filter(e =>
      /^addresses?\b/i.test(e.querySelector("legend")?.textContent?.replace(/\s+/g, " ").trim() ??
        "")),
    t = e.flatMap(e => Array.from(e.querySelectorAll("input, textarea, select")).filter(e => e.id
      .includes("Address") && !(e instanceof HTMLInputElement && "hidden" === e.type)));
  return {
    collectionCount: e.length,
    rowCount: e.reduce((e, t) => e + t.querySelectorAll(".iCIMS_TableRow").length, 0),
    controlCount: t.length,
    emptyControlCount: t.filter(e => !e.value.trim()).length
  }
}

function M(e) {
  return Object.keys(e?.regular ?? {}).filter(e => R.test(e)).length
}
let N = {
  requestStep: async e => await (0, o.sendToBackground)({
    name: "resolveAutofillClientSearchStep",
    body: e
  }),
  captureCandidates: k.captureIcimsProfileOptionsCandidates,
  commitCandidate: k.commitExactIcimsProfileOptionCandidate,
  clearSelect: k.clearIcimsSearchSelectAndVerify,
  resolveSchoolCompanionInput: F.resolveIcimsSchoolCompanionInput,
  fillCompanionInput: F.fillInputTextField
};

function $(e, t) {
  try {
    let r = (0, i.findValueInRecord)(e, t);
    return Array.isArray(r) ? r.join(", ") : r
  } catch {
    return
  }
}
async function B(e, t) {
  let r = [],
    n = 0,
    o = 0,
    l = [],
    u = !1,
    c = !1,
    d = (0, i.createSectionResultReporter)("education", {
      onSectionResultChanged: t.onSectionResultChanged
    });
  d.setLabel("Education"), (0, a.updateCurrentField)("Education");
  try {
    await (0, a.withSkip)(async () => {
      (0, a.checkpoint)(), await t.syncEducationSections(e.length), (0, a.checkpoint)()
    }), r = t.getEducationRules(), (0, s.setSectionResultFocusRules)("education", r), n = t
      .getVisibleEducationSectionCount(), o = Math.min(e.length, r.length), await (0, a.withSkip)(
        async () => {
          (0, a.checkpoint)(), await t.clearRuleValues(r.slice(0, o)), (0, a.checkpoint)()
        });
    n: for (let n = 0; n < o; n += 1) {
      let o = r[n],
        i = e[n];
      if (!o || !i) continue;
      let s = d.ensureRow(n, i);
      d.emit();
      let f = [...o.children ?? []].sort((e, t) => {
        let r = e => {
          let t = (0, C.classifyIcimsEducationClientSearchRule)(e);
          return "school" === t ? 0 : "major" === t ? 1 : 2
        };
        return r(e) - r(t)
      });
      for (let e of f) {
        (0, a.checkpoint)();
        let r = (0, C.classifyIcimsEducationClientSearchRule)(e);
        if (r) {
          let o = (0, C.getIcimsEducationOriginalAnswer)(r, i);
          if (!o) {
            d.updateField(s, e.label, void 0, "missed"), d.emit();
            continue
          }
          try {
            let u = await (0, a.withSkip)(() => t.fillClientSearchField(e, i, n, t
              .clientSearchDeps));
            l.push(u), d.updateRow(s, i), d.updateField(s, e.label, o, u.success ? "filled" :
              "missed"), d.emit(), u.success || console.warn(
              "[AutofillClientSearch] Education field outcome", JSON.stringify({
                rowIndex: n,
                fieldType: r,
                actions: u.actions,
                roundCandidateCounts: u.rounds.map(e => e.candidateCount),
                failureReason: u.failureReason ?? null
              }))
          } catch (t) {
            if (t instanceof a.CancelledError) throw t;
            if (t instanceof a.SkippedError) {
              d.updateRow(s, i), d.updateField(s, e.label, o, "skipped"), d.emit(), c = !0;
              break n
            }
            l.push({
              rowIndex: n,
              fieldType: r,
              attempted: !0,
              success: !1,
              actions: [],
              rounds: [],
              failureReason: "orchestration-error"
            }), d.updateRow(s, i), d.updateField(s, e.label, o, "missed"), d.emit()
          }
          continue
        }
        try {
          let r = await (0, a.withSkip)(async () => {
              let r = await t.transformRecordByRule(e, i);
              return i = r, (0, a.checkpoint)(), await t.operationConfig[e.type]?.(e, r, !1)
            }),
            n = $(e.label, i);
          d.updateRow(s, i), d.updateField(s, e.label, n, !1 !== r && n ? "filled" : "missed"),
            d.emit(), !1 === r && (u = !0)
        } catch (t) {
          if (t instanceof a.CancelledError) throw t;
          if (t instanceof a.SkippedError) {
            d.updateRow(s, i), d.updateField(s, e.label, $(e.label, i), "skipped"), d.emit(),
              c = !0;
            break n
          }
          u = !0, d.updateRow(s, i), d.updateField(s, e.label, $(e.label, i), "missed"), d
          .emit()
        }
      }
    }
  } catch (e) {
    if (e instanceof a.CancelledError) throw e;
    if (e instanceof a.SkippedError) c = !0;
    else throw e
  } finally {
    (0, a.updateCurrentField)(null)
  }
  let f = n >= e.length && r.length >= e.length && !c && !u && l.every(e => e.success);
  return f ? t.updateFilledProgress("Education") : t.updateMissedProgress("Education"), {
    filled: f,
    skipped: c,
    ledger: l
  }
}
class q extends v.BaseFiller {
  constructor() {
    super(), this.hasComboQuestions = !0, this.comboQuestionSettleDelayMs = 500, this
      .lastFullAutofillSnapshot = {}, this.lastFullSubmitSnapshot = {}, this
      .educationClientSearchLedger = [], this.educationTraceRunId = null, this
      .continueAutofillContext = null, this.navigationTracking = new j
      .IcimsNavigationTrackingController;
    let e = this.cancel;
    this.cancel = async () => {
        this.continueAutofillContext = null;
        try {
          (0, E.clearIcimsJobDetailAutofill)(window.sessionStorage)
        } catch {}
        await e()
      }, (0, x.bindIcimsContinueAutofill)(document, () => null !== this
        .continueAutofillContext, () => {
          let e = (0, x.getIcimsContinuationSignature)(document);
          if (null !== e && this.continueAutofillContext) try {
            (0, E.saveIcimsJobDetailAutofill)(window.sessionStorage, window.location.href, {
              ...this.continueAutofillContext,
              disableUploadResume: !!this.disableUploadResume,
              resumeInfo: this.resumeInfo
            }, Date.now(), e)
          } catch {
            console.info('[IcimsJobDetailContinuation] {"reason":"storage-unavailable"}')
          }
        }), this.resumeAutofillAfterJobDetail(), this.resumeAutofillAfterUploadRefresh(),
      window.addEventListener("message", e => {
        e.data?.type === L && this.continueApplication(!!e.data?.data?.fromAgent)
      })
  }
  async resumeAutofillAfterJobDetail() {
    try {
      await (0, E.resumeIcimsJobDetailAutofill)(window.sessionStorage, window.location.href,
      () => (0, l.waitForCondition)(() => null !== (0, I.detectIcimsPageType)(), {
          timeout: 15e3,
          interval: 200
        }), async e => {
          this.disableUploadResume = e.disableUploadResume, e.resumeInfo && (this.resumeInfo =
            e.resumeInfo), await this.fillForm(e.fromAgent)
        }, () => (0, x.getIcimsContinuationSignature)(document), e => {
          this.continueAutofillContext = {
            fromAgent: e.fromAgent
          }, this.disableUploadResume = e.disableUploadResume, e.resumeInfo && (this
            .resumeInfo = e.resumeInfo)
        }, () => document.documentElement.setAttribute(
          "data-jobright-icims-continuation-claimed", "pending"))
    } catch {
      console.info('[IcimsJobDetailContinuation] {"reason":"storage-unavailable"}')
    }
  }
  getFieldHandlers() {
    return {
      [u.FIELD_TYPE.TEXT]: {
        handler: async (e, t) => {
          let r = Array.isArray(t) ? t[0] : t;
          null != r && "" !== r && await (0, F.fillInputTextField)(e.$input, String(r ?? ""))
        },
        options: {
          expectArray: !1
        }
      },
      [u.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, F.fillSearchSelectField)(e.$input, t, e.label),
        options: {
          expectArray: !0
        }
      },
      [u.FIELD_TYPE.SELECT_ORIGINAL]: {
        handler: async (e, t) => {
          let r = Array.isArray(t) ? t[0] : t;
          return null != r && "" !== r && (0, F.fillOriginSelectField)(e.$input, String(r))
        },
        options: {
          expectArray: !1
        }
      },
      [u.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, F.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [u.FIELD_TYPE.DATE]: {
        handler: async (e, t) => {
          let r = Array.isArray(t) ? t[0] : t;
          null != r && "" !== r && await (0, F.fillDateField)(e.$input, String(r))
        },
        options: {
          expectArray: !1
        }
      },
      [u.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, F.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  getSiteName() {
    return "icims"
  }
  async extractFormRules() {
    let e = (0, A.formatRulesForRequest)((0, I.extractRules)());
    return console.info(
      `[IcimsAddressDebug] rules extracted ${JSON.stringify({dom:O(),rules:(0,D.getIcimsAddressRuleDiagnostics)(e)})}`
      ), e
  }
  getNewComboQuestionRules(e, t) {
    return (0, I.getIcimsComboQuestionRules)(e, t)
  }
  async fetchFormAnswers(e, t) {
    let r = (0, A.expandIcimsPhoneSectionRulesForRequest)(e);
    console.info(
      `[IcimsAddressDebug] rules requested ${JSON.stringify({rules:(0,D.getIcimsAddressRuleDiagnostics)(r)})}`
      );
    let n = await this.requestFormAnswers(r, t);
    if ("string" == typeof n) return console.info(
      '[IcimsAddressDebug] answer unavailable {"status":"request-error"}'), n;
    n ? (this.answer = n, console.info(
      `[IcimsAddressDebug] answer received ${JSON.stringify({addressLikeRegularKeyCount:M(n)})}`
      )) : console.info('[IcimsAddressDebug] answer unavailable {"status":"empty-response"}')
  }
  formatAnswer(e) {
    return (0, A.formatAnswer)(e)
  }
  splitSnapshot(e) {
    let {
      education: t = [],
      employment: r = [],
      ...n
    } = e || {};
    return {
      normal: n,
      education: Array.isArray(t) ? t : [],
      employment: Array.isArray(r) ? r : []
    }
  }
  extractEducationEmploymentAdditional(e) {
    let {
      education: t,
      employment: r
    } = this.splitSnapshot(e);
    return {
      education: t,
      employment: r
    }
  }
  filterSectionRecordForEndDateRule(e, t, r) {
    return (0, D.filterIcimsOptionalEndDateRecord)(e, t, {
      legacyMatchLabels: A.ICIMS_LEGACY_END_DATE_MATCH_LABELS,
      recordKeys: "education" === r ? A.ICIMS_EDUCATION_END_DATE_RECORD_KEYS : A
        .ICIMS_EMPLOYMENT_END_DATE_RECORD_KEYS
    })
  }
  async getAutofillSnapshot(e) {
    let t = (0, I.getFormSnapshot)(void 0, {
      markEducationRows: !0,
      includeEducationSnapshotIndex: !0,
      includeEducationTrace: !0,
      educationTraceRunId: this.ensureEducationTraceRunId()
    }) || {};
    return this.lastFullAutofillSnapshot = t, this.splitSnapshot(t).normal
  }
  async getSubmitSnapshot() {
    let e = (0, I.getFormSnapshot)(void 0, {
      includeEducationSnapshotIndex: !0,
      includeEducationTrace: !0,
      educationTraceRunId: this.ensureEducationTraceRunId()
    }) || {};
    return this.lastFullSubmitSnapshot = e, this.splitSnapshot(e).normal
  }
  getAdditionalAutofillSnapshotData(e) {
    return this.extractEducationEmploymentAdditional(this.lastFullAutofillSnapshot)
  }
  getAdditionalSubmitSnapshotData() {
    return this.extractEducationEmploymentAdditional(this.lastFullSubmitSnapshot)
  }
  getSubmitButtonSelector() {
    return null
  }
  ensureEducationTraceRunId() {
    return this.educationTraceRunId || (this.educationTraceRunId = (0, w
      .createEducationTraceRunId)()), this.educationTraceRunId
  }
  getNavigationButtonFromEventTarget(e) {
    if (!(e instanceof HTMLElement)) return null;
    let t = e.closest('input[type="submit"], button[type="submit"]');
    return t && (0, D.isVisibleIcimsElement)(t) ? t : null
  }
  isTrackedNavigationButton(e) {
    let t = this.getNavigationButtonText(e);
    return (!(e instanceof HTMLInputElement) || "icims_save" !== e.name) && "finish later" !==
      t && "save & return later" !== t && "save and return later" !== t && (!!("submit" === t ||
          "submit profile" === t || "apply" === t || t.includes("submit")) || this
        .isContinueNavigationButton(e))
  }
  async bindSubmitButtonTracking(e) {
    let t = await this.getAutofillSnapshot(e),
      r = this.getAdditionalAutofillSnapshotData?.(e) || {};
    this.navigationTracking.bind({
      root: document,
      resolveButton: e => this.getNavigationButtonFromEventTarget(e),
      isTrackedButton: e => this.isTrackedNavigationButton(e),
      formUrl: () => (0, m.useUrlStore).getState().currentTabUrl,
      source: () => this.getSiteName(),
      answer: () => this.answer,
      autofillSnapshot: t,
      additionalAutofillData: r,
      getSubmitSnapshot: () => this.getSubmitSnapshot(),
      getAdditionalSubmitData: () => this.getAdditionalSubmitSnapshotData?.() || {},
      educationOutcomes: () => this.educationClientSearchLedger,
      send: y.sendAutofillAnswerPairEvent,
      afterSend: async ({
        submitSnapshot: e
      }) => {
        await (0, g.handleSubmitStarRating)(this.getSiteName(), t, e, this.progressTracker
          .fieldStatus)
      }
    })
  }
  async continueApplication(e = !1) {
    let t = this.getActiveContinueButton();
    if (t) return t.click(), !0;
    let r = this.forwardContinueToChildIframe(e);
    return r
  }
  isReadyForSecondPhase() {
    return (0, F.hasUploadedResumeQueryFlag)() && (0, F.hasUploadedResume)()
  }
  readPendingUploadAutofill() {
    try {
      let e = window.sessionStorage.getItem(P);
      if (!e) return null;
      let t = JSON.parse(e);
      if (!t || Date.now() - Number(t.startedAt) > _) return this.clearPendingUploadAutofill(),
        null;
      return {
        fromAgent: !!t.fromAgent,
        disableUploadResume: !!t.disableUploadResume,
        sourceUrl: "string" == typeof t.sourceUrl && t.sourceUrl ? t.sourceUrl : window.location
          .href,
        sourceUploadSignature: "string" == typeof t.sourceUploadSignature ? t
          .sourceUploadSignature : "",
        startedAt: "number" == typeof t.startedAt ? t.startedAt : Date.now(),
        resumeInfo: t.resumeInfo
      }
    } catch (e) {
      return this.clearPendingUploadAutofill(), null
    }
  }
  savePendingUploadAutofill(e) {
    try {
      window.sessionStorage.setItem(P, JSON.stringify({
        fromAgent: e,
        disableUploadResume: !!this.disableUploadResume,
        sourceUrl: window.location.href,
        sourceUploadSignature: this.getUploadPendingSignature(),
        startedAt: Date.now(),
        resumeInfo: this.resumeInfo
      }))
    } catch (e) {}
  }
  clearPendingUploadAutofill() {
    try {
      window.sessionStorage.removeItem(P)
    } catch (e) {}
  }
  getUploadPendingSignature() {
    return [(0, F.hasUploadedResume)() ? "uploaded" : "empty", (0, F.hasUploadedResumeQueryFlag)
      () ? "upload-query" : "no-query", this.getIcimsPrefillSignature()
    ].join("|")
  }
  isSamePendingUploadPage(e) {
    try {
      let t = new URL(window.location.href),
        r = new URL(e.sourceUrl, window.location.href);
      return t.origin === r.origin && t.pathname === r.pathname
    } catch (e) {
      return !1
    }
  }
  hasUploadRefreshTransition(e) {
    try {
      let t = new URL(window.location.href),
        r = new URL(e.sourceUrl, window.location.href);
      return t.origin === r.origin && t.pathname === r.pathname && (t.href !== r.href || (0, F
          .hasUploadedResumeQueryFlag)() || this.getUploadPendingSignature() !== e
        .sourceUploadSignature)
    } catch (e) {
      return !1
    }
  }
  async resumeAutofillAfterUploadRefresh() {
    let e = this.readPendingUploadAutofill();
    if (!e || !this.isSamePendingUploadPage(e)) return;
    if (!this.hasUploadRefreshTransition(e)) {
      this.clearPendingUploadAutofill();
      return
    }
    this.disableUploadResume = e.disableUploadResume, e.resumeInfo && (this.resumeInfo = e
      .resumeInfo);
    let t = await (0, l.waitForCondition)(() => this.isReadyForSecondPhase(), {
      timeout: 5e3,
      interval: 200
    });
    if (!t) {
      this.clearPendingUploadAutofill();
      return
    }
    try {
      this.continueAutofillContext = {
        fromAgent: e.fromAgent
      }, await this.runFieldFillPhase(e.fromAgent)
    } finally {
      this.clearPendingUploadAutofill()
    }
  }
  shouldUploadResumeFirst() {
    return !this.disableUploadResume && (0, F.hasResumeSection)()
  }
  syncUploadedResumeProgress() {
    if (!(0, F.hasUploadedResume)()) return;
    let e = this.progressTracker.fieldStatus.fieldRequiredStatus.some(e => "Resume/CV" === e
      .label);
    e || this.progressTracker.updateFieldRequiredStatus({
        label: "Resume/CV",
        required: !0,
        type: "file"
      }), this.progressTracker.fieldStatus.filledFields.includes("Resume/CV") || this
      .progressTracker.updateFilledProgress("Resume/CV")
  }
  getIcimsPrefillSignature() {
    let e = Array.from(document.querySelectorAll("input, textarea, select")),
      t = 0;
    for (let r of e)
      if (r instanceof HTMLElement && (0, D.isVisibleIcimsElement)(r)) {
        if (r instanceof HTMLInputElement) {
          if (["hidden", "file", "button", "submit", "radio", "checkbox"].includes(r.type))
            continue;
          r.value.trim() && (t += 1);
          continue
        }
        if (r instanceof HTMLTextAreaElement) {
          r.value.trim() && (t += 1);
          continue
        }
        r instanceof HTMLSelectElement && r.value && (t += 1)
      } return `${(0,F.getVisibleEmploymentSectionCount)()}:${t}`
  }
  async waitForIcimsPrefillToSettle() {
    let e = "",
      t = 0,
      r = Date.now() + 8e3;
    for (; Date.now() < r;) {
      let r = this.getIcimsPrefillSignature();
      if (r === e ? t += 1 : (e = r, t = 0), t >= 4) {
        await (0, h.delay)(300);
        return
      }
      await (0, h.delay)(250)
    }
  }
  async waitForPostUploadTransition(e, t) {
    await (0, l.waitForCondition)(() => window.location.href !== e || (0, F
      .hasUploadedResumeQueryFlag)() || this.getIcimsPrefillSignature() !== t, {
      timeout: 8e3,
      interval: 250
    })
  }
  async clearRuleValue(e) {
    if (e) {
      if (e.type === u.FIELD_TYPE.EDUCATION || e.type === u.FIELD_TYPE.EMPLOYMENT) {
        for (let t of e.children ?? []) await this.clearRuleValue(t);
        return
      }
      if (e.type === u.FIELD_TYPE.TEXT && e.$input) {
        await (0, F.clearInputField)(e.$input);
        return
      }
      if (e.type === u.FIELD_TYPE.DATE && e.$input) {
        await (0, F.clearDateFieldValue)(e.$input);
        return
      }(e.type === u.FIELD_TYPE.SELECT || e.type === u.FIELD_TYPE.SELECT_ORIGINAL) && e
        .$input && (0, F.clearSelectField)(e.$input)
    }
  }
  async clearRuleValues(e) {
    for (let t of e) await this.clearRuleValue(t)
  }
  async runResumeUploadPhase(e) {
    let t = window.location.href,
      r = this.getIcimsPrefillSignature();
    await this.initializeFillForm(), this.savePendingUploadAutofill(e);
    try {
      let n = await (0, F.uploadResume)(this.resumeInfo, () => {}, () => {});
      if (!n) return this.clearPendingUploadAutofill(), this.runFieldFillPhase(e);
      await this.waitForPostUploadTransition(t, r), await this.waitForIcimsPrefillToSettle();
      let o = await this.runFieldFillPhase(e);
      return this.clearPendingUploadAutofill(), o
    } catch (e) {
      throw this.clearPendingUploadAutofill(), e
    }
  }
  getNavigationButtonText(e) {
    let t = e instanceof HTMLInputElement ? e.value : e.innerText || e.textContent || "",
      r = e.getAttribute("aria-label") ?? "";
    return (t || r).trim().toLowerCase()
  }
  getCurrentStepText() {
    let e = (0, d.getFirstOrderedNode)(".//div[contains(@class, 'iCIMS_PageStepText')]");
    return (e?.textContent || "").trim().toLowerCase()
  }
  isFinalNavigationStep() {
    let e = this.getCurrentStepText();
    return !!e && (e.includes("submit") || e.includes("review") || e.includes("complete") || e
      .includes("confirmation") || e.includes("finish"))
  }
  isSubmitNavigationButton(e) {
    let t = this.getNavigationButtonText(e);
    return "submit" === t || "submit profile" === t || "apply" === t || t.includes("submit")
  }
  isContinueNavigationButton(e) {
    let t = this.getNavigationButtonText(e);
    if (e instanceof HTMLInputElement && "icims_save" === e.name) return !1;
    if (e instanceof HTMLInputElement && "icims_submit" === e.name && "submit" === t ||
      e instanceof HTMLInputElement && "cp_form_submit_i" === e.id && "profileButton" === e
      .name && "submit" === t) return !0;
    if ("finish later" === t || "save & return later" === t) return !1;
    let r = this.getCurrentStepText();
    return r ? !this.isFinalNavigationStep() : !this.isSubmitNavigationButton(e)
  }
  getActiveContinueButton() {
    let e = Array.from(document.querySelectorAll(
      'input[type="submit"], button[type="submit"]')),
      t = e.filter(e => !!(0, D.isVisibleIcimsElement)(e) && this.isContinueNavigationButton(
      e));
    return t[0] ?? null
  }
  getSupportedChildIframes() {
    let e = Array.from(document.getElementsByTagName("iframe")),
      t = e.filter(e => {
        if (!e.contentWindow || !e.src) return !1;
        try {
          return (0, c.checkSupportIframeSrc)(e.src)
        } catch (e) {
          return !1
        }
      });
    return t
  }
  waitForChildIframeAutofill() {
    return new Promise(e => {
      try {
        let t = window.top ?? window,
          r = !1,
          n = window.setTimeout(() => {
            r || (r = !0, t.removeEventListener("message", o), e())
          }, 15e3),
          o = i => {
            let a = i.data?.type;
            (a === u.MESSAGE_EVENTS.autoFillResultFromIframe || a === u.MESSAGE_EVENTS
              .autoFillCompleteFromIframe) && (r || (r = !0, window.clearTimeout(n), t
              .removeEventListener("message", o), e()))
          };
        t.addEventListener("message", o)
      } catch (t) {
        e()
      }
    })
  }
  async forwardAutofillToChildIframe(e) {
    let t = this.getSupportedChildIframes(),
      r = t[t.length - 1];
    if (!r?.contentWindow) return !1;
    let n = this.waitForChildIframeAutofill();
    return r.contentWindow.postMessage((0, b.cleanObject)({
      type: f.IFRAME_EVENTS.UPDATE_IFRAME_DATA,
      data: {
        resumeInfo: this.resumeInfo,
        disableUploadResume: this.disableUploadResume,
        token: this.token
      },
      url: r.src
    }), {
      targetOrigin: "*"
    }), r.contentWindow.postMessage((0, b.cleanObject)({
      type: f.IFRAME_EVENTS.EXECUTE_IFRAME_FUNCTION,
      data: {
        fromAgent: e,
        timestamp: Date.now()
      },
      url: r.src
    }), {
      targetOrigin: "*"
    }), await n, !0
  }
  forwardContinueToChildIframe(e) {
    let t = this.getSupportedChildIframes(),
      r = t[t.length - 1];
    return !!r?.contentWindow && (r.contentWindow.postMessage((0, b.cleanObject)({
      type: L,
      data: {
        fromAgent: e,
        timestamp: Date.now()
      },
      url: r.src
    }), {
      targetOrigin: "*"
    }), !0)
  }
  async runFieldFillPhase(e = !1) {
    this.navigationTracking.startRun(), this.educationTraceRunId = null, this
      .educationClientSearchLedger = [];
    let t = !1,
      r = "",
      n = "";
    await this.initializeFillForm();
    try {
      this.isReadyForSecondPhase() && await this.waitForIcimsPrefillToSettle();
      let o = await (0, p.useAutofillInfoStore).getState().fetchAutofillInfo(),
        l = await (0, T.loadIcimsCreateLoginCredentials)(o),
        c = await (0, T.fillIcimsCreateLoginCredentials)(l);
      if (console.info(
          `[IcimsCreateLogin] ${JSON.stringify({foundSection:c.foundSection,foundRoleCount:c.foundRoles.length,filledRoleCount:c.filledRoles.length,skippedExistingRoleCount:c.skippedExistingRoles.length,rejectedRoleCount:c.rejectedRoles.length})}`
          ), r = (0, p.useAutofillInfoStore).getState().country, n = String(o?.location
          ?.state ?? o?.state ?? "").trim(), r) {
        let e = (0, F.getSelectedIcimsCountryText)(),
          t = (0, D.getIcimsStateProvinceOptionsSignature)(),
          n = !1;
        this.taskQueue.add(async () => {
          n = await (0, F.fillCountry)(r)
        }), await this.taskQueue.run();
        let o = (0, F.getSelectedIcimsCountryText)();
        n && e.toLowerCase() !== o.toLowerCase() && await (0, D
          .waitForIcimsStateProvinceOptionsRefresh)(t)
      }
      let d = (0, F.autoSelectCertifyField)(),
        f = await this.extractFormRules(),
        m = d ? [d] : [];
      if (0 === f.length) return d && (this.progressTracker.setFieldsRequiredStatus(m), d
          .filled ? this.progressTracker.updateFilledProgress(d.label) : this.progressTracker
          .updateMissedProgress(d.label)), t = await this.forwardAutofillToChildIframe(e),
        this.progressTracker.generateFinalProgress();
      let h = new Set,
        g = "Employment";
      for (let e of f) {
        let t = e.type;
        if (t === u.FIELD_TYPE.EDUCATION || t === u.FIELD_TYPE.EMPLOYMENT) {
          let e = String(t);
          if (h.has(e)) continue;
          h.add(e)
        }
        if (t === u.FIELD_TYPE.EMPLOYMENT) {
          let t = Array.isArray(e.options) ? e.options[0] : null;
          g = "object" == typeof t && t?.label ? t.label : e.label, m.push({
            label: g,
            required: e.required ?? null,
            options: e.options,
            type: e.type
          });
          continue
        }
        if (t === u.FIELD_TYPE.SECTION && Array.isArray(e.children)) {
          for (let t of e.children) m.push({
            label: t.label,
            required: t.required ?? null,
            options: t.options,
            type: t.type
          });
          continue
        }
        m.push({
          label: e.label,
          required: e.required ?? null,
          options: e.options,
          type: e.type
        })
      }
      this.progressTracker.setFieldsRequiredStatus(m), d && (d.filled ? this.progressTracker
        .updateFilledProgress(d.label) : this.progressTracker.updateMissedProgress(d.label));
      let y = await this.fetchFormAnswers(f, e);
      if ("string" == typeof y) return y;
      (0, A.applyIcimsEducationProfileRawFallback)(this.answer, o), (0, A
        .applyIcimsStateProvinceFallback)(this.answer, n), window.top?.postMessage(b
          .cleanObject({
            type: u.MESSAGE_EVENTS.agentStartFillingFields
          }), {
            targetOrigin: "*"
          }), (0, F.hasUploadedResume)() ? this.syncUploadedResumeProgress() : this
        .disableUploadResume && this.progressTracker.updateMissedProgress("Resume/CV");
      let v = f.reduce((e, t) => (t.type === u.FIELD_TYPE.EDUCATION || t.type === u.FIELD_TYPE
          .EMPLOYMENT || (t.type === u.FIELD_TYPE.SECTION && Array.isArray(t.children) ? e
            .push(...t.children) : e.push(t)), e), []),
        w = v.find(e => (e.type === u.FIELD_TYPE.SELECT || e.type === u.FIELD_TYPE
          .SELECT_ORIGINAL) && /^country$/i.test(e.label)),
        S = v.filter(e => !/^country$/i.test(e.label)),
        E = (0, D.getIcimsRegularRulesForFill)(S),
        x = String(r || this.answer?.country || "").trim();
      if (await this.clearRuleValues(E), w) {
        let e = !!x && await (0, F.fillCountry)(x, w.$input);
        e ? this.progressTracker.updateFilledProgress("Country") : this.progressTracker
          .updateMissedProgress("Country")
      }
      let k = (0, i.getRegularOperations)(E, this.answer.regular, this.operationConfig);
      for (let e of (console.info(
          `[IcimsAddressDebug] regular fill queued ${JSON.stringify({addressRules:(0,D.getIcimsAddressRuleDiagnostics)(f),addressLikeRegularKeyCount:M(this.answer),totalRegularOperationCount:k.length})}`
          ), k)) this.taskQueue.add(e);
      await this.taskQueue.run(), console.info(
        `[IcimsAddressDebug] regular fill completed ${JSON.stringify({dom:O()})}`), await (0,
        F.fillSignatureCheckboxes)();
      let j = await this.runComboQuestionAutofillIfNeeded(f, e);
      if ("string" == typeof j) return j;
      f = j;
      let P = this.answer.education ?? [];
      if (this.educationClientSearchLedger = [], P.length > 0) {
        let e = await B(P, {
          syncEducationSections: F.syncEducationSections,
          getEducationRules: I.getEducationRules,
          getVisibleEducationSectionCount: F.getVisibleEducationSectionCount,
          clearRuleValues: e => this.clearRuleValues(e),
          operationConfig: this.operationConfig,
          transformRecordByRule: (e, t) => this.filterSectionRecordForEndDateRule(e, t,
            "education"),
          fillClientSearchField: C.fillIcimsEducationClientSearchField,
          clientSearchDeps: N,
          updateFilledProgress: e => this.progressTracker.updateFilledProgress(e),
          updateMissedProgress: e => this.progressTracker.updateMissedProgress(e),
          onSectionResultChanged: this.progressTracker.updateSectionResult
        });
        this.educationClientSearchLedger = e.ledger
      }
      let _ = this.answer.workExperience ?? [];
      if (_.length > 0) {
        await (0, F.syncEmploymentSections)(_.length), (0, F.getVisibleEmploymentSectionCount)
      ();
        let e = (0, I.getExperienceRules)();
        (0, s.setSectionResultFocusRules)("employment", e);
        let t = Math.min(_.length, e.length);
        await this.clearRuleValues(e.slice(0, t));
        let r = !1,
          n = (0, i.createSectionResultReporter)("employment", {
            onSectionResultChanged: this.progressTracker.updateSectionResult
          });
        n.setLabel(g);
        for (let o = 0; o < t; o++) {
          let t = e[o];
          if (!t) continue;
          let i = _[o],
            l = t.children ?? [],
            s = n.ensureRow(o, i);
          if (n.emit(), this.taskQueue.add(async () => {
              let e;
              let t = i;
              try {
                for (let r of l) {
                  let o = this.filterSectionRecordForEndDateRule(r, i, "employment");
                  e = r, t = o;
                  let a = await this.operationConfig[r.type]?.(r, o, !1),
                    l = $(r.label, o);
                  n.updateRow(s, o), n.updateField(s, r.label, l, !1 !== a && l ? "filled" :
                    "missed"), n.emit()
                }
              } catch (o) {
                if (o instanceof a.SkippedError) {
                  r = !0, e && (n.updateField(s, e.label, $(e.label, t), "skipped"), n
                  .emit());
                  return
                }
                throw o
              }
            }), await this.taskQueue.run(), r) break
        }(0, F.getVisibleEmploymentSectionCount)(), r ? this.progressTracker
          .updateMissedProgress(g) : this.progressTracker.updateFilledProgress(g)
      }
      await this.taskQueue.run(), await this.bindSubmitButtonTracking(f)
    } catch (e) {
      if (e instanceof a.CancelledError) throw e
    } finally {
      if (t) return this.progressTracker.generateFinalProgress();
      await this.finalizeFillForm()
    }
    return this.progressTracker.generateFinalProgress()
  }
  async doFillForm(e = !1) {
    if (this.continueAutofillContext = {
        fromAgent: e
      }, (0, S.proceedIcimsJobDetailToApply)(document, () => {
        try {
          (0, E.saveIcimsJobDetailAutofill)(window.sessionStorage, window.location.href, {
            fromAgent: e,
            disableUploadResume: !!this.disableUploadResume,
            resumeInfo: this.resumeInfo
          })
        } catch {
          console.info('[IcimsJobDetailContinuation] {"reason":"storage-unavailable"}')
        }
      })) return this.progressTracker.generateFinalProgress();
    try {
      (0, E.clearIcimsJobDetailAutofill)(window.sessionStorage)
    } catch {}
    return (this.navigationTracking.startRun(), this.shouldUploadResumeFirst()) ? this
      .runResumeUploadPhase(e) : this.runFieldFillPhase(e)
  }
  submitApplication() {
    let e = (0, d.getFirstOrderedNode)(
    ".//input[@type='submit' and @value=\"Submit Profile\"]");
    e && e.click()
  }
}

