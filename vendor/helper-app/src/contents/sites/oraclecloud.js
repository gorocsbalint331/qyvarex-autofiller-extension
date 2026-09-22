/**
 * Parcel module id: 8A5ca
 * Resolved path: src/contents/sites/oraclecloud.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/oraclecloud/address-operation -> cEpli  =>  src/contents/sites/oraclecloud/address-operation.js
 *   ~contents/sites/oraclecloud/answer -> 9Ki4d  =>  src/contents/sites/oraclecloud/answer.js
 *   ~contents/sites/oraclecloud/education-raw-values -> lJw3h  =>  src/contents/sites/oraclecloud/education-raw-values.js
 *   ~contents/sites/oraclecloud/operations -> gduo7  =>  src/contents/sites/oraclecloud/operations.js
 *   ~contents/sites/oraclecloud/rules -> j2pat  =>  src/contents/sites/oraclecloud/rules.js
 *   ~contents/sites/oraclecloud/section-results -> 9JNPk  =>  src/contents/sites/oraclecloud/section-results.js
 *   ~contents/sites/oraclecloud/url -> 7oftP  =>  src/contents/sites/oraclecloud/url.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "OracleCloud", () => P);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/methods/dom"),
  s = e("~contents/methods/observer"),
  u = e("~contents/methods/track"),
  c = e("~enums/http"),
  d = e("~contents/sites/base-filler"),
  f = e("~contents/sites/oraclecloud/address-operation"),
  p = e("~contents/sites/oraclecloud/education-raw-values"),
  m = e("~contents/sites/oraclecloud/answer"),
  h = e("~contents/sites/oraclecloud/operations"),
  g = e("~contents/sites/oraclecloud/rules"),
  b = e("~contents/sites/oraclecloud/url"),
  y = e("~contents/sites/oraclecloud/section-results"),
  v = e("~core/enums"),
  w = e("~store/autofillInfo"),
  S = e("~utils/delay"),
  E = e("~utils/fieldLabel");

function x() {
  if ("undefined" == typeof window) return !1;
  try {
    let e = "jobright_oraclecloud_combobox_debug";
    return "1" === new URLSearchParams(window.location?.search ?? "").get(e) || window.localStorage
      ?.getItem(e) === "1"
  } catch {
    return !1
  }
}

function C(e, t = {}) {
  let r = e.startsWith("education-major-text:") || "education:record-route" === e ||
    "education:pre-save-state" === e || "education:save-result" === e ||
    "employment:record-route" === e || "employment:save-result" === e,
    n = x();
  if (n || r) try {
    let r = n ? console.warn : console.info;
    r(`[OracleCloud][Flow] ${e} ${JSON.stringify({t:Date.now(),...t})}`)
  } catch {}
}

function A(e) {
  if (!e || "object" != typeof e) return {
    errorType: typeof e
  };
  let t = e;
  return {
    errorType: "string" == typeof t.name && t.name ? t.name : e.constructor?.name ?? "object",
    code: "string" == typeof t.code ? t.code : void 0,
    status: "number" == typeof t.status ? t.status : "number" == typeof t.statusCode ? t
      .statusCode : void 0,
    hasMessage: "string" == typeof t.message && t.message.length > 0
  }
}

function k(e) {
  let t = e?.result?.action === "SELECT_OPTIONS" ? e.result.selected_values : [];
  return {
    action: e?.result?.action ?? null,
    selectedValueCount: t.length,
    selectedValueLengths: t.map(e => String(e ?? "").trim().length)
  }
}
let T = new Set(["pageFooterNextButton", "bottom-navigation-next-button"]);

function F(e) {
  return (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "").replace(
    /\s+/g, " ").trim()
}

function I(e) {
  return e.classList?.contains("apply-flow-pagination__button") || String(e.className || "")
    .includes("apply-flow-pagination__button")
}

function j(e) {
  let t = e.$input?.getAttribute?.("name"),
    r = String(t || e.label || "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return "major" === r
}

function D(e) {
  let t = e.getAttribute("data-automation-id");
  if (t && T.has(t)) return !0;
  if (!I(e)) return !1;
  let r = F(e).toLowerCase();
  return "next" === r || "continue" === r || "submit" === r || "apply" === r || r.includes(
    "next") || r.includes("continue") || r.includes("submit")
}
class P extends d.BaseFiller {
  mergeSectionResult(e, t, r) {
    let n = (0, y.mergeOracleSectionResult)(this.sectionResults[e], t, r);
    this.sectionResults[e] = n, this.progressTracker.updateSectionResult(n)
  }
  markSectionResultRowMissed(e, t) {
    let r = this.sectionResults[e];
    if (!r) return;
    let n = (0, y.markOracleSectionResultRowMissed)(r, t);
    this.sectionResults[e] = n, this.progressTracker.updateSectionResult(n)
  }
  getFieldHandlers() {
    return {
      [v.FIELD_TYPE.TEXT]: {
        handler: async (e, t, r) => {
          let n = j(e),
            o = n ? (0, p.getOracleEducationRawValues)(r ?? {}).rawMajor : void 0,
            i = o || t,
            a = o ? "raw-major" : "answer";
          n && C("education-major-text:source", {
            answerLength: String(t ?? "").trim().length,
            rawMajorLength: o?.length || 0,
            source: a
          });
          let s = await (0, l.fillInputTextField)(e.$input, i);
          return n && C("education-major-text:done", {
            source: a,
            filled: !1 !== s,
            readbackLength: String(e.$input?.value ?? "").trim().length
          }), s
        },
        options: {
          expectArray: !1
        }
      },
      [v.FIELD_TYPE.SELECT]: {
        handler: async (e, t, r) => {
          let n = Array.isArray(t) ? t[0] : t,
            o = (0, f.isOracleAddressLine1Rule)(e),
            i = (0, f.isOracleAddressLine1PlainInputRule)(e);
          if (o && C("address:fill-start", {
              route: i ? "plain-input" : "combobox",
              rule: (0, f.describeOracleAddressLine1Rule)(e),
              hasAnswer: !!n,
              answerLength: String(n ?? "").trim().length
            }), i) {
            let t = await (0, l.fillInputTextField)(e.$input, n);
            return o && C("address:fill-done", {
              route: "plain-input",
              filled: t,
              readbackLength: this.getRuleCurrentInputValue(e).length
            }), t
          }
          if (!(0, m.canFillOracleSelectRule)(e, n)) return o && C("address:fill-skip", {
            reason: "invalid-select-answer",
            route: "combobox"
          }), !1;
          let a = await (0, h.fillSelectField)(this.getRuleInputElement(e) ?? e.$input, n, e
            .label, (0, p.getOracleEducationRawValues)(r ?? {}));
          return o && C("address:fill-done", {
            route: "combobox",
            filled: a,
            readbackLength: this.getRuleCurrentInputValue(e).length
          }), a
        },
        options: {
          expectArray: !0
        }
      },
      [v.FIELD_TYPE.LISTBOX]: {
        handler: (e, t) => (0, h.fillListboxField)(e.$input, t),
        options: {
          expectArray: !0
        }
      },
      [v.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, h.fillCheckBoxesField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [v.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, h.fillRadioGroupField)(e.$input, t),
        options: {
          expectArray: !0
        }
      },
      [v.FIELD_TYPE.DATE]: {
        handler: (e, t) => (0, h.fillDateField)(e, t),
        options: {
          expectArray: !1
        }
      }
    }
  }
  getEmploymentOperationConfig(e) {
    let t = {};
    for (let [r, n] of Object.entries(this.operationConfig)) n && (t[r] = async (t, r, o) => {
      C("employment:field-start", {
        recordIndex: e,
        label: t.label,
        type: t.type
      });
      try {
        let i = await n(t, r, o);
        return C("employment:field-result", {
          recordIndex: e,
          label: t.label,
          type: t.type,
          filled: !1 !== i
        }), i
      } catch (r) {
        throw C("employment:field-error", {
          recordIndex: e,
          label: t.label,
          type: t.type,
          ...A(r)
        }), r
      }
    });
    return t
  }
  async extractFormRules() {
    return (0, g.getRules)()
  }
  getSiteName() {
    return "oraclecloud"
  }
  getSubmitButtonSelector() {
    return '//button[@data-automation-id="pageFooterNextButton" or @data-automation-id="bottom-navigation-next-button"]'
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    let t = e.closest("button");
    return !t || t.disabled || "true" === t.getAttribute("aria-disabled") ? null : D(t) ? t :
      null
  }
  async getAutofillSnapshot(e = []) {
    return this.submitTrackingRules = e, (0, g.getFormSnapshot)(e)
  }
  async getSubmitSnapshot() {
    return (0, g.getFormSnapshot)(this.submitTrackingRules)
  }
  getAdditionalAutofillSnapshotData(e) {
    return this.getSavedSectionSnapshots()
  }
  getAdditionalSubmitSnapshotData() {
    return this.getSavedSectionSnapshots()
  }
  getSavedSectionSnapshots() {
    return {
      education: [...this.savedEducationSnapshots],
      employment: [...this.savedExperienceSnapshots]
    }
  }
  submitApplication() {}
  postCoverLetterStatusIfChanged(e, t = !1) {
    (t || this.lastCoverLetterStatus !== e) && (this.lastCoverLetterStatus = e, (0, l
      .postCoverLetterStatus)(e))
  }
  syncCoverLetterStatusFromDom(e = !1) {
    let t = (0, h.hasOracleCoverLetterSlot)();
    return this.postCoverLetterStatusIfChanged(t ? "required" : "", e), t
  }
  isCoverLetterSlotMutation(e) {
    let t = e => e.matches("cover-letter-upload-button") || !!e.closest(
      "cover-letter-upload-button") || !!e.querySelector("cover-letter-upload-button");
    return e.some(e => !!(e.target instanceof Element && t(e.target)) || [...e.addedNodes, ...e
      .removedNodes
    ].some(e => e instanceof Element && t(e)))
  }
  watchCoverLetterSlot() {
    if (this.coverLetterSlotObserver) return;
    let e = document.body || document.documentElement;
    e && (this.coverLetterSlotObserver = new MutationObserver(e => {
      this.isCoverLetterSlotMutation(e) && this.syncCoverLetterStatusFromDom()
    }), this.coverLetterSlotObserver.observe(e, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["class", "style", "hidden", "aria-hidden"]
    }))
  }
  async checkCoverLetter() {
    this.syncCoverLetterStatusFromDom(!0), this.watchCoverLetterSlot()
  }
  isOracleEmailGatePage() {
    return window.location.href.includes("/apply/email")
  }
  isOraclePinPage() {
    let e = Array.from(document.querySelectorAll("h1, h2, h3")).find(e => e.textContent?.trim()
        .toLowerCase() === "confirm your identity"),
      t = Array.from(document.querySelectorAll("button")).find(e => e.textContent?.trim()
        .toLowerCase() === "verify"),
      r = Array.from(document.querySelectorAll("a, button, div, span")).find(e => e.textContent
        ?.trim().toLowerCase() === "send new code"),
      n = Array.from(document.querySelectorAll("input")).filter(e => {
        let t = e,
          r = Number(t.maxLength || 0);
        return "text" === t.type && 1 === r && !t.disabled
      });
    return !!e && !!t && !!r && n.length >= 4
  }
  isOracleVerificationStep() {
    return this.isOraclePinPage()
  }
  isOracleApplyFlowPage() {
    return (0, b.isOracleApplyPath)(window.location.pathname)
  }
  async ensureToken() {
    if (this.token) return;
    let e = (0, b.normalizeOracleApplyTokenUrl)(window.location.href);
    this.token = await (0, o.sendToBackground)({
      name: "getSiteToken",
      body: {
        url: e
      }
    })
  }
  hasCountryDependentAddressFields() {
    return !!document.querySelector(
      'input[name="city"], input[name="region2"], input[name="postalCode"], input[name="region1"]'
      )
  }
  async prefillCountryBeforeRules() {
    this.latestAutofillInfo = null, this.currentRunCountry = null, this
      .currentRunCountryCommitted = !1;
    let e = await (0, w.useAutofillInfoStore).getState().fetchAutofillInfo().catch(() => null);
    this.latestAutofillInfo = e;
    let t = e?.location?.country;
    if (this.currentRunCountry = "string" == typeof t && t.trim() ? t.trim() : null, C(
        "country:prefill:prepared", {
          hasFreshCountry: !!this.currentRunCountry,
          freshCountryLength: this.currentRunCountry?.length ?? 0,
          countryInputPresent: !!document.querySelector(
            'input[name="country"], input[id="country-12"]'),
          refreshDependentAddress: !0
        }), !this.currentRunCountry || (this.currentRunCountryCommitted = await (0, h
        .fillCountry)(this.currentRunCountry, void 0, {
        refreshDependentAddress: !0
      }), C("country:prefill:result", {
        committed: this.currentRunCountryCommitted,
        dependentAddressFieldsPresent: this.hasCountryDependentAddressFields()
      }), !this.currentRunCountryCommitted)) return;
    let r = await (0, s.waitForCondition)(() => this.hasCountryDependentAddressFields(), {
      timeout: 8e3,
      interval: 200,
      observeTarget: document.body
    });
    C("country:prefill:dependent-address-ready", {
      committed: this.currentRunCountryCommitted,
      dependentAddressFieldsReady: r
    }), await (0, S.delay)(300)
  }
  async requestFormAnswers(e, t, r = {}) {
    C("answer:prepare", {
      ruleCount: e.length,
      fromAgent: t,
      updateTimeTrace: !1 !== r.updateTimeTrace
    }), await this.ensureToken(), C("answer:token-ready", {
      hasToken: !!this.token
    }), !1 !== r.updateTimeTrace && (this.timeTrace.requestStartTime = Date.now()), C(
      "answer:request-send", {
        ruleCount: e.length
      });
    let n = this.captureFalconResponseRun(),
      o = await (0, i.getElementRules)(e, "oraclecloud", this.token, t, this.resumeInfo.id, this
        .resumeInfo.tailorId);
    this.recordFalconResponse(o, n);
    let l = (0, m.formatAnswer)(o),
      s = (0, m.applyOracleAutofillLocationFallbacks)(l, this.latestAutofillInfo);
    return C("answer:request-settled", {
      regularCount: Object.keys(l.regular ?? {}).length,
      educationCount: l.education?.length ?? 0,
      workExperienceCount: l.workExperience?.length ?? 0,
      profileLocationFallbackFields: s
    }), (0, a.checkpoint)(), !1 !== r.updateTimeTrace && (this.timeTrace.fillStartTime = Date
      .now()), l
  }
  getCurrentPageUrl() {
    return window.location.href
  }
  async resolveAutofillOperation(e, t) {
    let r;
    let n = Date.now();
    C("resolve:send", {
      fieldType: e.field_type,
      hasOriginalAnswer: !!e.original_answer,
      originalAnswerLength: e.original_answer.length,
      endpoint: e.search_request_schema.url
    });
    let i = !1,
      a = new Promise(e => {
        r = setTimeout(() => {
          i = !0, e(null)
        }, this.addressResolveTimeoutMs)
      }),
      l = Promise.resolve().then(() => (0, o.sendToBackground)({
        name: "resolveAutofillOperation",
        body: {
          operation: e,
          source: "oraclecloud"
        }
      })).catch(e => (C("resolve:error", {
        ms: Date.now() - n,
        message: String(e)
      }), null));
    try {
      let e = await Promise.race([l, a]);
      return C("resolve:settled", {
        ms: Date.now() - n,
        timedOut: i,
        hasResult: !!e,
        ...k(e)
      }), i && t?.(l), e ?? null
    } catch (e) {
      return C("resolve:error", {
        ms: Date.now() - n,
        message: String(e)
      }), null
    } finally {
      void 0 !== r && clearTimeout(r)
    }
  }
  async resolveAddressLine1Record(e, t) {
    let r = e.find(f.isOracleAddressLine1SearchRule);
    if (!r) return C("address:resolve-skip", {
      reason: "no-searchable-address-rule",
      addressRules: e.filter(f.isOracleAddressLine1Rule).map(f
        .describeOracleAddressLine1Rule)
    }), t;
    C("address:resolve-candidate", {
      rule: (0, f.describeOracleAddressLine1Rule)(r)
    });
    let n = this.activeOracleAddressResolveRun;
    return await (0, f.resolveOracleAddressLine1Record)({
      currentUrl: this.getCurrentPageUrl(),
      rule: r,
      record: t,
      resolveOperation: e => this.resolveAutofillOperation(e, o => {
        n && this.applyLateAddressLine1Resolution({
          resolveRun: n,
          rule: r,
          record: t,
          fallbackSearchValue: e.original_answer,
          lateResolution: o
        })
      })
    })
  }
  beginOracleAddressResolveRun() {
    let e = () => {},
      t = {
        id: ++this.oracleAddressResolveRunId,
        signal: this.fillCancel.signal ?? null,
        pageUrl: this.getCurrentPageUrl(),
        normalFillDone: new Promise(t => {
          e = t
        }),
        allowLateApply: !1,
        finished: !1,
        finishNormalFill: r => {
          t.finished || (t.finished = !0, t.allowLateApply = r, e())
        }
      };
    return this.activeOracleAddressResolveRun = t, t
  }
  applyLateAddressLine1Resolution({
    resolveRun: e,
    rule: t,
    record: r,
    fallbackSearchValue: n,
    lateResolution: o
  }) {
    let a = String(r[t.label] ?? "").trim();
    o.then(async o => {
      let l = (0, f.getOracleResolvedAddressLine1Value)(o);
      if (C("resolve:late-settled", {
          action: o?.result?.action ?? null,
          resolvedValueLength: l.length
        }), !l) return;
      await e.normalFillDone;
      let s = e.id === this.oracleAddressResolveRunId,
        c = this.getCurrentPageUrl() === e.pageUrl;
      if (!e.allowLateApply || !s || e.signal?.aborted || !c) {
        C("resolve:late-discard", {
          reason: e.allowLateApply ? s ? e.signal?.aborted ? "cancelled" :
            "page-changed" : "stale-run" : "normal-fill-not-complete"
        });
        return
      }
      let d = this.getRuleCurrentInputValue(t),
        p = e => e.replace(/\s+/g, " ").trim().toLowerCase(),
        m = p(d),
        h = new Set([p(a), p(n)]);
      if (d && !h.has(m)) {
        C("resolve:late-discard", {
          reason: "address-value-changed",
          currentValueLength: d.length,
          originalValueLength: a.length,
          fallbackSearchValueLength: n.length
        });
        return
      }
      let g = this.getRuleInputElement(t);
      if (!g) {
        C("resolve:late-discard", {
          reason: "address-input-missing"
        });
        return
      }
      let b = {
          ...t,
          $input: g
        },
        y = {
          ...r,
          [t.label]: l
        };
      for (let e of (0, i.getRegularOperations)([b], y, this.operationConfig)) this
        .taskQueue.add(e);
      await this.taskQueue.run(), C("resolve:late-apply", {
        resolvedValueLength: l.length
      }), (0, u.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace)
    }).catch(e => {
      C("resolve:late-error", {
        errorType: e instanceof Error ? e.name : typeof e
      })
    })
  }
  getRuleInputElement(e) {
    let t = e.$input;
    if (!t) return null;
    if (!1 === t.isConnected && "undefined" != typeof document && "function" == typeof t
      .getAttribute) {
      let e = t.getAttribute("name"),
        r = e ? document.querySelector(
          `input[name="${e}"], textarea[name="${e}"], select[name="${e}"]`) : null;
      if (r) return r
    }
    return t
  }
  getRuleCurrentInputValue(e) {
    let t = e => {
      let t = e?.classList?.contains("cx-select-input--invalid") || e?.getAttribute?.(
        "aria-invalid") === "true" || e?.closest?.(".input-row")?.classList?.contains(
        "input-row--invalid");
      if (t) return "";
      let r = e && "value" in e ? e.value : "";
      return "string" == typeof r ? r.trim() : ""
    };
    return t(this.getRuleInputElement(e))
  }
  async clearSkippedOracleAddressDependentRules(e) {
    let t = e.filter(m.shouldSkipOracleAddressDependentFill);
    if (0 !== t.length)
      for (let e of (C("deps:skip-clear", {
          labels: t.map(e => e.label)
        }), t)) {
        let t = this.getRuleInputElement(e),
          r = t && "value" in t && "string" == typeof t.value ? t.value.trim() : "";
        r && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? await (0, l
          .fillInputTextField)(t, "") : t instanceof HTMLSelectElement && (t.value = "", t
          .dispatchEvent(new Event("input", {
            bubbles: !0
          })), t.dispatchEvent(new Event("change", {
            bubbles: !0
          })))), this.progressTracker.updateMissedProgress(e.label)
      }
  }
  async waitForOracleAddressDependentAutofill(e) {
    0 !== e.length && await (0, s.waitForCondition)(() => e.every(e => !!this
      .getRuleCurrentInputValue(e)), {
      timeout: 1500,
      interval: 150,
      observeTarget: document.body
    })
  }
  markFilledOracleAddressDependentRules(e, t = new Set, r = new Set) {
    for (let n of e) !t.has(n.label) && !r.has(n.label) && this.getRuleCurrentInputValue(n) && (
      this.progressTracker.updateFilledProgress(n.label), r.add(n.label))
  }
  getUnfilledOracleAddressDependentRules(e) {
    return e.filter(e => !this.getRuleCurrentInputValue(e))
  }
  hasOracleRegularAnswer(e) {
    try {
      return (0, i.findValueInRecord)(e.label, this.answer.regular), !0
    } catch {
      return !1
    }
  }
  async fillOracleAddressDependentRules(e, t = !0) {
    if (0 !== e.length) {
      for (let r of e) this.taskQueue.add(async () => {
        let e = this.getRuleInputElement(r),
          n = e ? {
            ...r,
            $input: e
          } : r,
          [o] = (0, i.getRegularOperations)([n], this.answer.regular, this
            .operationConfig, t);
        await o?.()
      });
      await this.taskQueue.run()
    }
  }
  reconcileOracleDependentProgress(e) {
    for (let t of e) {
      let e = (0, E.normalizeFieldLabel)(t.label),
        r = !!this.getRuleCurrentInputValue(t),
        n = this.progressTracker.fieldStatus.filledFields.some(t => (0, E.normalizeFieldLabel)(
          t) === e),
        o = this.progressTracker.fieldStatus.missingFields.some(t => (0, E.normalizeFieldLabel)(
          t) === e);
      r && !n ? this.progressTracker.updateFilledProgress(t.label) : r || o || this
        .progressTracker.updateMissedProgress(t.label)
    }
  }
  async resolveOracleAddressDependentRules(e) {
    if (0 === e.length) return;
    let t = e.filter(e => !(0, m.shouldSkipOracleAddressDependentFill)(e)),
      r = () => e.map(e => ({
        label: e.label,
        value: this.getRuleCurrentInputValue(e)
      }));
    C("deps:start", {
      values: r()
    }), await this.waitForOracleAddressDependentAutofill(t), C("deps:wait-done", {
      values: r()
    }), await this.clearSkippedOracleAddressDependentRules(e);
    let n = new Set;
    this.markFilledOracleAddressDependentRules(t, new Set, n);
    let o = t.filter(m.isOraclePostalCodeDependentRule),
      i = this.getUnfilledOracleAddressDependentRules(o),
      a = new Set;
    if (i.length > 0) {
      for (let e of (C("deps:postal-first", {
          labels: i.map(e => e.label)
        }), await this.fillOracleAddressDependentRules(i), i)) a.add(e.label);
      await this.waitForOracleAddressDependentAutofill(t), C("deps:postal-wait-done", {
        values: r()
      }), this.markFilledOracleAddressDependentRules(t, new Set(i.map(e => e.label)), n)
    }
    let l = this.getUnfilledOracleAddressDependentRules(t).filter(m.isOracleCityDependentRule);
    if (l.length > 0) {
      for (let e of (C("deps:city-second", {
          labels: l.map(e => e.label)
        }), await this.fillOracleAddressDependentRules(l), l)) a.add(e.label);
      await this.waitForOracleAddressDependentAutofill(t), C("deps:city-wait-done", {
        values: r()
      }), this.markFilledOracleAddressDependentRules(t, new Set(l.map(e => e.label)), n)
    }
    let s = this.getUnfilledOracleAddressDependentRules(t).filter(e => !a.has(e.label));
    C("deps:unfilled", {
      labels: s.map(e => e.label)
    }), s.length > 0 && await this.fillOracleAddressDependentRules(s), await (0, d
      .waitForComboQuestionsToSettle)(this.comboQuestionSettleDelayMs);
    let u = this.getUnfilledOracleAddressDependentRules(o).filter(e => this
      .hasOracleRegularAnswer(e));
    u.length > 0 && (C("deps:postal-final", {
        labels: u.map(e => e.label)
      }), await this.fillOracleAddressDependentRules(u, !1), this
      .reconcileOracleDependentProgress(u), C("deps:postal-final-done", {
        values: r()
      })), C("deps:done", {
      fallback: s.length > 0,
      postalRefilled: u.length > 0
    })
  }
  getOracleSkillValues() {
    let e = this.answer,
      t = e => "string" == typeof e || Array.isArray(e),
      r = e?.regular ?? {},
      n = r.Skills ?? r.Skill ?? r.skills ?? r.skill;
    if (t(n)) return n;
    let o = e?.profileData ?? e?.profile_data ?? {},
      i = o.Skills ?? o.Skill ?? o.skills ?? o.skill;
    return t(i) ? i : e?.skills ?? []
  }
  getOracleLanguageValues() {
    let e = this.answer,
      t = e?.regular ?? {},
      r = t.Languages ?? t.Language ?? t.languages ?? t.language;
    if (null != r) return r;
    let n = e?.profileData ?? e?.profile_data ?? {},
      o = n.Languages ?? n.Language ?? n.languages ?? n.language;
    if (null != o) return o;
    let i = Array.isArray(n.skillList) ? n.skillList : [],
      a = i.flatMap(e => {
        let t = "string" == typeof e?.category ? e.category.toLowerCase() : "";
        return t.includes("language") && Array.isArray(e?.skills) ? e.skills : []
      });
    if (a.length > 0) return a;
    let l = n.skills;
    return l && "object" == typeof l && !Array.isArray(l) ? l.Language ?? l.Languages ?? l
      .language ?? l.languages ?? [] : []
  }
  async getRulesAndAnswer(e) {
    C("rules:start", {
      fromAgent: e
    }), await this.prefillCountryBeforeRules(), C("rules:country-prefill-done", {
      hasCountry: !!this.currentRunCountry,
      committed: this.currentRunCountryCommitted
    });
    let t = await (0, g.getRules)(),
      r = this.isOracleEmailGatePage(),
      n = this.isOracleVerificationStep(),
      o = !!document.querySelector("apply-flow-block");
    if (C("rules:extracted", {
        ruleCount: t.length,
        isEmailGate: r,
        isVerificationStep: n,
        hasApplySurface: o,
        addressRules: t.filter(f.isOracleAddressLine1Rule).map(f
          .describeOracleAddressLine1Rule)
      }), 0 === t.length) return C("rules:empty-local-failure", {
        ruleCount: t.length,
        isEmailGate: r,
        isVerificationStep: n,
        hasApplySurface: o
      }), (0, u.sendHttpStatusMessage)(c.CUSTOM_ERROR_CODES.NO_ELEMENTS), c.CUSTOM_ERROR_CODES
      .NO_ELEMENTS;
    this.progressTracker.setFieldsRequiredStatus(t), await this
      .fillCountryRulesAndUpdateProgress(t.filter(m.isOracleProfileCountryRule)), C(
        "rules:country-fill-done");
    let i = (0, m.excludeOracleProfileCountryRules)(t);
    return 0 === i.length ? (C("rules:local-only-country", {
      ruleCount: t.length,
      countryRuleCount: t.length,
      countryCommitted: this.currentRunCountryCommitted
    }), this.answer = {
      education: [],
      workExperience: [],
      skills: [],
      regular: {}
    }) : (this.answer = await this.requestFormAnswers(i, e), C("rules:answer-ready", {
      regularCount: Object.keys(this.answer.regular ?? {}).length
    })), t
  }
  async fillCountryRulesAndUpdateProgress(e) {
    if (0 === e.length) return;
    let t = [];
    for (let r of e) t.push(await (0, h.fillCountry)(this.currentRunCountry, r.$input));
    let r = e[0].label;
    t.every(Boolean) ? this.progressTracker.updateFilledProgress(r) : this.progressTracker
      .updateMissedProgress(r)
  }
  async prepareOracleLinkRules(e) {
    let t = e.filter(m.isOracleLinkRule);
    if (0 === t.length) return e;
    let r = (0, m.applyOracleProfileLinkAnswers)(this.answer, this.latestAutofillInfo);
    if (0 === r.length || (await (0, h.ensureOracleLinkRows)(r.length), r.length <= t.length))
      return e;
    let n = await (0, g.getRules)(),
      o = n.filter(m.isOracleLinkRule),
      i = new Set(t.map(e => e.label));
    for (let e of o) i.has(e.label) || this.progressTracker.updateFieldRequiredStatus(e);
    return [...e.filter(e => !(0, m.isOracleLinkRule)(e)), ...o]
  }
  async fillRegularRules(e) {
    let t = await this.prepareOracleLinkRules(e),
      r = (0, m.excludeOracleProfileCountryRules)((0, m.orderOracleRegularRules)(t)).filter(e =>
        !(0, g.isOracleSkillsRule)(e) && !(0, g.isOracleLanguagesRule)(e)),
      n = r.filter(f.isOracleAddressLine1Rule),
      o = n.filter(f.isOracleAddressLine1SearchRule),
      a = n.length > 0,
      l = o.length > 0,
      s = l && o.some(e => (0, f.hasOracleAddressLine1Value)(e, this.answer.regular)),
      u = n.some(e => (0, f.isOracleAddressLine1PlainInputRule)(e) && (0, f
        .hasOracleAddressLine1Value)(e, this.answer.regular)),
      c = r.filter(m.isOracleAddressDependentRule),
      d = s ? c : [];
    C("regular:plan", {
      hasAddressLine1: a,
      hasAddressLine1Search: l,
      hasAddressLine1Answer: s,
      hasPlainAddressLine1Answer: u,
      addressRules: n.map(e => ({
        ...(0, f.describeOracleAddressLine1Rule)(e),
        hasAnswer: (0, f.hasOracleAddressLine1Value)(e, this.answer.regular)
      })),
      dependents: d.map(e => e.label)
    });
    let p = l ? this.resolveAddressLine1Record(r, this.answer.regular) : Promise.resolve(this
        .answer.regular),
      h = r.filter(e => !(0, m.shouldSkipOracleAddressDependentFill)(e) && !(0, f
          .isOracleAddressLine1Rule)(e) && !((s || u) && (0, m.isOracleAddressDependentRule)(
        e)));
    for (let e of (C("regular:immediate", {
        labels: h.map(e => e.label)
      }), (0, i.getRegularOperations)(h, this.answer.regular, this.operationConfig))) this
      .taskQueue.add(e);
    await this.taskQueue.run(), C("regular:immediate-done"), C("regular:resolve-await"), this
      .answer.regular = await p;
    let b = l && o.some(e => (0, f.hasOracleAddressLine1Value)(e, this.answer.regular));
    if (C("regular:resolve-await-done", {
        hasResolvedAddressLine1Answer: b,
        addressRules: n.map(e => ({
          ...(0, f.describeOracleAddressLine1Rule)(e),
          hasAnswer: (0, f.hasOracleAddressLine1Value)(e, this.answer.regular)
        }))
      }), n.length > 0) {
      let e = n.every(e => this.getRuleCurrentInputValue(e)) && d.length > 0 && d.every(e =>
        this.getRuleCurrentInputValue(e));
      if (e)
        for (let e of (C("regular:addressline-skip", {
            reason: "already-filled"
          }), n)) this.progressTracker.updateFilledProgress(e.label);
      else {
        for (let e of (C("regular:addressline", {
            addressRules: n.map(e => ({
              ...(0, f.describeOracleAddressLine1Rule)(e),
              hasAnswer: (0, f.hasOracleAddressLine1Value)(e, this.answer.regular)
            }))
          }), (0, i.getRegularOperations)(n, this.answer.regular, this.operationConfig))) this
          .taskQueue.add(e);
        await this.taskQueue.run(), C("regular:addressline-done")
      }
    }
    C("regular:dependents"), b ? await this.resolveOracleAddressDependentRules(d) : u ?
      await this.fillOracleAddressDependentRules(c.filter(e => !(0, m
        .shouldSkipOracleAddressDependentFill)(e))) : await this
      .fillOracleAddressDependentRules(d.filter(e => !(0, m
        .shouldSkipOracleAddressDependentFill)(e))), C("regular:done")
  }
  async runComboQuestionAutofillIfNeeded(e, t) {
    if (!this.hasComboQuestions) return e;
    await (0, d.waitForComboQuestionsToSettle)(this.comboQuestionSettleDelayMs);
    let r = await (0, g.getRules)(),
      n = (0, d.getNewComboQuestionRules)(e, r);
    if (0 === n.length) return e;
    for (let e of n) this.progressTracker.updateFieldRequiredStatus(e);
    let o = n.filter(m.isOracleProfileCountryRule),
      i = (0, m.excludeOracleProfileCountryRules)(n);
    if (i.length > 0) {
      let e = await this.requestFormAnswers(i, t, {
        updateTimeTrace: !1
      });
      this.answer = (0, d.mergeComboQuestionAnswer)(this.answer, e, i)
    }
    return await this.fillCountryRulesAndUpdateProgress(o), await this.fillRegularRules(i), [...
      e, ...n
    ]
  }
  async handleOracleEmailGate(e) {
    this.timeTrace.rulesParseStartTime = Date.now(), this.progressTracker.clear(), this
      .taskQueue.clear();
    try {
      let t = await this.getRulesAndAnswer(e);
      if ("string" == typeof t) return t;
      let r = [...(0, i.getRegularOperations)((0, m.orderOracleRegularRules)((0, m
        .excludeOracleProfileCountryRules)(t)).filter(e => !(0, m
        .shouldSkipOracleAddressDependentFill)(e) && !(0, g.isOracleSkillsRule)(e) && !(
        0, g.isOracleLanguagesRule)(e)), this.answer.regular, this.operationConfig)];
      for (let e of r) this.taskQueue.add(e);
      await this.taskQueue.run();
      let n = await (0, h.proceedOracleEmailGateStep)();
      if (!n) return this.progressTracker.generateFinalProgress();
      let o = await (0, s.waitForCondition)(() => this.isOracleApplyFlowPage() && !this
        .isOracleEmailGatePage() && !!document.querySelector("apply-flow-block") || this
        .isOracleVerificationStep(), {
          timeout: 2e4,
          interval: 200,
          observeTarget: document.body
        });
      if (!o) return console.warn(
          "[oraclecloud] email-gate: no apply form or verification step detected after next"),
        this.progressTracker.generateFinalProgress();
      if (this.isOracleVerificationStep()) return this.progressTracker.generateFinalProgress();
      return this.fillForm(e)
    } catch (e) {
      if (e instanceof i.HTTPError || e instanceof i.ResumeMissingCodeError) return (0, u
        .sendHttpStatusMessage)(e.message), e.message;
      return console.error("Unknown error occurred:", e), this.progressTracker
        .generateFinalProgress()
    }
  }
  async doFillForm(e = !1) {
    let t = this.beginOracleAddressResolveRun();
    this.resetFalconResponseAccumulator(), C("fill:entry", {
      fromAgent: e,
      isApplyFlow: this.isOracleApplyFlowPage(),
      isEmailGate: this.isOracleEmailGatePage(),
      isPinPage: this.isOraclePinPage()
    });
    let r = await (0, h.proceedOracleJobDetailToApply)();
    if (C("fill:apply-flow-check", {
        enteredApplyFlow: r,
        isEmailGate: this.isOracleEmailGatePage()
      }), r && this.isOracleEmailGatePage() || this.isOracleEmailGatePage()) return t
      .finishNormalFill(!1), this.handleOracleEmailGate(e);
    if (this.isOraclePinPage()) return t.finishNormalFill(!1), this.progressTracker
      .generateFinalProgress();
    this.timeTrace.rulesParseStartTime = Date.now(), this.progressTracker.clear(), this
      .savedEducationSnapshots = [], this.savedExperienceSnapshots = [], this
      .sectionResults = {}, this.taskQueue.clear(), this.taskQueue.add(async () => {
        await (0, h.cleanEduAndExp)()
      }), C("fill:cleanup-start"), await this.taskQueue.run(), C("fill:cleanup-done");
    try {
      let r = await this.getRulesAndAnswer(e);
      if ("string" == typeof r) return r;
      let n = (0, h.hasOracleCoverLetterSlot)(),
        o = (0, g.getSubmitButtonText)();
      (0, u.bindSubmitButton)(o, this.progressTracker.fieldStatus, this.timeTrace), await this
        .fillRegularRules(r), r = await this.runComboQuestionAutofillIfNeeded(r, e);
      let l = !1,
        s = !1,
        c = async e => {
          s = !0;
          let t = await (0, h.cancelEducation)();
          return C("education:failed-row-close-result", {
            recordIndex: e,
            closed: t
          }), t || (l = !0), t
        };
      for (let e = 0; e < this.answer.education.length; e++) {
        let t = this.answer.education[e],
          r = await (0, g.addAndGetEduRules)();
        if (!r) {
          if (C("education:rules-not-ready", {
              recordIndex: e
            }), !await c(e)) break;
          continue
        }
        let n = (0, p.getOracleEducationRawValues)(t, this.latestAutofillInfo?.education?.[e]),
          o = {
            ...t,
            ...n
          },
          a = r.children || [];
        C("education:record-route", {
          recordIndex: e,
          recordKeys: Object.keys(t),
          rawSchoolLength: n.rawSchool?.length || 0,
          rawMajorLength: n.rawMajor?.length || 0,
          fields: a.map(e => ({
            label: e.label,
            fieldName: e.$input?.getAttribute?.("name") || "",
            type: e.type,
            isMajorText: j(e)
          }))
        });
        let s = (0, i.getEducationOperations)([r], [o], this.operationConfig, void 0, {
          onSkipped: () => {
            l = !0
          },
          onSectionResultChanged: t => this.mergeSectionResult("education", t, e)
        }, {
          keepCurrentFieldOnExit: !0
        });
        for (let e of s) this.taskQueue.add(e);
        if (await this.taskQueue.run(), l) break;
        C("education:pre-save-state", {
          recordIndex: e,
          fields: a.map(e => ({
            label: e.label,
            valueLength: e.$input?.value?.length || 0,
            ariaInvalid: e.$input?.getAttribute?.("aria-invalid") || null,
            connected: e.$input?.isConnected !== !1
          }))
        });
        let u = (0, g.getSectionRowSnapshot)(r),
          d = await (0, h.saveEducation)();
        if (C("education:save-result", {
            recordIndex: e,
            saved: d
          }), !d) {
          if (this.markSectionResultRowMissed("education", e), !await c(e)) break;
          continue
        }
        this.savedEducationSnapshots.push(u)
      }
      this.answer.education.length > 0 && (0, a.updateCurrentField)(null), l || s ? this
        .progressTracker.updateMissedProgress("Education") : this.answer.education.length > 0 &&
        this.progressTracker.updateFilledProgress("Education");
      let d = !1,
        f = !1;
      for (let e = 0; e < this.answer.workExperience.length; e++) {
        let t = this.answer.workExperience[e],
          r = await (0, g.addAndGetWorkRules)(),
          n = r.children || [];
        C("employment:record-route", {
          recordIndex: e,
          recordKeys: Object.keys(t),
          fields: n.map(e => ({
            label: e.label,
            fieldName: e.$input?.getAttribute?.("name") || "",
            type: e.type,
            isDate: e.type === v.FIELD_TYPE.DATE
          }))
        });
        let o = (0, i.getEmploymentOperations)([r], [t], this.getEmploymentOperationConfig(e),
          void 0, {
            onSkipped: () => {
              d = !0
            },
            onSectionResultChanged: t => this.mergeSectionResult("employment", t, e)
          }, {
            keepCurrentFieldOnExit: !0
          });
        for (let e of o) this.taskQueue.add(e);
        if (await this.taskQueue.run(), d) break;
        let a = (0, g.getSectionRowSnapshot)(r),
          l = await (0, h.saveExperience)();
        if (C("employment:save-result", {
            recordIndex: e,
            saved: l
          }), !l) {
          f = !0, this.markSectionResultRowMissed("employment", e);
          continue
        }
        this.savedExperienceSnapshots.push(a)
      }
      this.answer.workExperience.length > 0 && (0, a.updateCurrentField)(null), d || f ? this
        .progressTracker.updateMissedProgress("Employment") : this.answer.workExperience
        .length > 0 && this.progressTracker.updateFilledProgress("Employment");
      let m = r.find(g.isOracleSkillsRule);
      m && (this.taskQueue.add(async () => {
        (0, a.updateCurrentField)(m.label);
        try {
          let e = await (0, h.fillSkills)(this.getOracleSkillValues());
          e ? this.progressTracker.updateFilledProgress(m.label) : this.progressTracker
            .updateMissedProgress(m.label)
        } finally {
          (0, a.updateCurrentField)(null)
        }
      }), await this.taskQueue.run());
      let b = r.find(g.isOracleLanguagesRule);
      return b && (this.taskQueue.add(async () => {
          (0, a.updateCurrentField)(b.label);
          try {
            let e = await (0, h.fillLanguages)(this.getOracleLanguageValues());
            e ? this.progressTracker.updateFilledProgress(b.label) : this.progressTracker
              .updateMissedProgress(b.label)
          } finally {
            (0, a.updateCurrentField)(null)
          }
        }), await this.taskQueue.run()), this.disableUploadResume ? this.progressTracker
        .updateMissedProgress("Resume/CV") : this.taskQueue.add(async () => {
          let e = await (0, h.uploadResume)(this.resumeInfo, this.progressTracker
            .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
          e || this.progressTracker.updateMissedProgress("Resume/CV")
        }), n && this.coverLetter?.coverLetterId && this.taskQueue.add(async () => {
          let e = await (0, h.uploadCoverLetter)(this.coverLetter, this.progressTracker
            .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
          e || this.progressTracker.updateMissedProgress("Cover Letter")
        }), await this.taskQueue.run(), await this.bindSubmitButtonTracking(r), (0, u
          .postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), t
        .finishNormalFill(!0), this.progressTracker.generateFinalProgress()
    } catch (e) {
      if (t.finishNormalFill(!1), C("fill:error", A(e)), e instanceof i.HTTPError ||
        e instanceof i.ResumeMissingCodeError) return (0, u.sendHttpStatusMessage)(e.message), e
        .message;
      return console.error("Unknown error occurred:", e), this.progressTracker
        .generateFinalProgress()
    }
  }
  constructor(...e) {
    super(...e), this.coverLetterSlotObserver = null, this.lastCoverLetterStatus = null, this
      .latestAutofillInfo = null, this.currentRunCountry = null, this
      .currentRunCountryCommitted = !1, this.submitTrackingRules = [], this
      .savedEducationSnapshots = [], this.savedExperienceSnapshots = [], this
      .sectionResults = {}, this.hasComboQuestions = !0, this.addressResolveTimeoutMs = 1e4,
      this.oracleAddressResolveRunId = 0, this.activeOracleAddressResolveRun = null
  }
}

