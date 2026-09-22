/**
 * Parcel module id: 8CqoG
 * Resolved path: contents/sites/adp-workforcenow.js (oracle restore)
 * Dependencies:
 *   ./address -> 3tPLX  =>  address.js
 *   ./answer -> 3cqYs  =>  src/contents/sites/adp-workforcenow/answer.js
 *   ./operations -> lIV4n  =>  src/contents/sites/adp-workforcenow/operations.js
 *   ./rules -> 5fFF1  =>  src/contents/sites/adp-workforcenow/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "AdpWorkforceNow", () => E);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/dom"),
  a = e("~contents/sites/base-filler"),
  l = e("~core/enums"),
  s = e("~store/autofillInfo"),
  u = e("~utils/delay"),
  c = e("./address"),
  d = e("./answer"),
  f = e("./operations"),
  p = e("./rules");

function m(e) {
  return String(e.label || "").replace(/\s*\*\s*$/, "").replace(/\s+/g, " ").trim().toLowerCase()
}

function h(e) {
  return "country" === m(e)
}

function g(e) {
  return /(^|[\s/])(state|province|territory)($|[\s/])/.test(m(e))
}

function b(e) {
  let t = e.$input;
  return "address line 1" === m(e) && t instanceof HTMLInputElement && t.classList.contains(
    "pac-target-input")
}

function y(e) {
  return Array.isArray(e) ? e.map(y).find(Boolean) ?? "" : "string" == typeof e ? e.trim() :
    "number" == typeof e ? String(e) : ""
}

function v(e, t) {
  return e.map(e => {
    let r = m(e),
      n = Object.entries(t).find(([e]) => m({
        label: e
      }) === r),
      o = y(n?.[1]);
    return {
      label: e.label,
      type: e.type,
      present: !!o,
      valueLength: o.length,
      answerLabelMatch: n ? n[0] === e.label ? "exact" : "normalized" : "missing"
    }
  })
}

function w(e) {
  return e instanceof Error && e.name ? e.name : "unknown"
}

function S(e) {
  let t = e.findIndex(h),
    r = e.findIndex(g);
  if (t < 0 || r < 0 || t < r) return e;
  let n = e.filter(h),
    o = e.filter(e => !h(e)),
    i = o.findIndex(g);
  return [...o.slice(0, i), ...n, ...o.slice(i)]
}
class E extends a.BaseFiller {
  getFieldHandlers() {
    return {
      [l.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, d.isAdpWorkforceNowPhoneNumberLabel)(e.label) ? (0, f
          .fillAdpWorkforceNowPhoneInput)(e.$input, t, e.label) : (0, f
          .fillAdpWorkforceNowTextInput)(e.$input, t, e.label),
        options: {
          expectArray: !1
        }
      },
      [l.FIELD_TYPE.NUMBER]: {
        handler: (e, t) => (0, f.fillAdpWorkforceNowTextInput)(e.$input, String(t ?? ""), e
          .label),
        options: {
          expectArray: !1
        }
      },
      [l.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, i.fillCheckBoxesField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [l.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, d.isAdpWorkforceNowPhoneCountryCodeLabel)(e.label) ? (0, f
          .fillAdpWorkforceNowPhoneCountryCode)(e.$input, t, e.label) : (0, f
          .fillCustomSelectField)(e?.$input, t),
        options: {
          expectArray: !0
        }
      },
      [l.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, f.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  async checkCoverLetter() {
    this.coverLetterAdvanceObserverBound || ((0, f.bindCoverLetterAdvanceRecheckObserver)(() =>
      void this.checkCoverLetter()), this.coverLetterAdvanceObserverBound = !0);
    let e = ++this.coverLetterCheckVersion,
      t = !1;
    for (let r = 0; r < 40; r++) {
      if (e !== this.coverLetterCheckVersion) return;
      let r = (0, f.getAdpWorkforceNowAdvanceButton)();
      if (r && (t = !0), t) {
        let t = (0, f.getCoverLetterFieldStatus)();
        if ("required" === t) {
          e === this.coverLetterCheckVersion && (0, i.postCoverLetterStatus)(t);
          return
        }
      }
      await (0, u.delay)(t ? 200 : 250)
    }
    e === this.coverLetterCheckVersion && (0, i.postCoverLetterStatus)("")
  }
  async runPreFillForm() {
    await (0, f.preclickAddButtons)();
    let e = await (0, s.useAutofillInfoStore).getState().fetchAutofillInfo();
    this.currentRunCountry = "string" == typeof e?.location?.country ? e.location.country : "",
      this.currentRunCountryCommitted = await (0, f.prefillCountry)(this.currentRunCountry),
      console.info("[AdpWorkforceNowCountryDebug] prefill-result", JSON.stringify({
        hasCountry: !!this.currentRunCountry,
        committed: this.currentRunCountryCommitted
      })), await (0, f.preselectDesiredSalaryControls)()
  }
  async extractFormRules() {
    return await (0, p.getRules)()
  }
  getSiteName() {
    return "adp-workforcenow"
  }
  async handleResumeUpload() {
    await this.uploadCurrentFileSlots()
  }
  async getAutofillSnapshot() {
    return (0, p.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, p.getFormSnapshot)()
  }
  getSubmitButtonSelector() {
    return './/button[@id="ja_sv_cw_next_footer_btn" and normalize-space(.)="Submit"] | .//button[@type="submit" or contains(@class, "submit") or contains(normalize-space(.), "Submit")]'
  }
  async executeSiteSpecificSteps(e) {
    this.bindNextSnapshotHandler(), await super.executeSiteSpecificSteps(e)
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = S(this.prepareCoverLetterRules(await this.extractFormRules())),
      {
        readyRules: r,
        deferredRaceRules: n
      } = (0, p.partitionAdpWorkforceNowVsidRaceRules)(t),
      o = (0, p.hasAdpWorkforceNowVsidRaceDependency)(),
      i = this.getRulesWithoutManualCountry(r);
    if (this.logPhoneRules(i), this.progressTracker.setFieldsRequiredStatus(r), this.taskQueue
      .add(f.fillDisabilityStatusIfPresent), await this.taskQueue.run(), await this
      .handleResumeUpload(), i.length > 0) {
      let t = await this.fetchFormAnswers(i, e);
      if ("string" == typeof t) return t;
      this.logPhoneAnswerResult(), this.logRegularAnswerSummary(i)
    } else this.answer = (0, d.formatAnswer)({
      regular: {},
      education: [],
      workExperience: [],
      skills: []
    });
    let a = await this.fillCountryFields(r),
      l = a ? this.getRulesWithoutManualCountry((0, p.partitionAdpWorkforceNowVsidRaceRules)(S(
        this.prepareCoverLetterRules(await this.extractFormRules()))).readyRules) : i,
      s = a ? l : i;
    return a && console.info("[AdpWorkforceNowDebug] rules-refreshed-after-country", JSON
        .stringify({
          originalRuleCount: i.length,
          refreshedRuleCount: s.length
        })), await this.resolveGooglePlacesAddress(s), await this.fillRegularFields(s),
      await this.fillDeferredAdpWorkforceNowVsidRace(n, o, e), await this
      .fillCoverLetterFields(), await this.executeSiteSpecificSteps(r), this.finalizeFillForm()
  }
  submitApplication() {
    let e = (0, f.getAdpWorkforceNowAdvanceButton)();
    if (!e?.isConnected) return;
    let t = e.innerText?.trim() ?? "",
      r = e.getAttribute("type")?.toLowerCase() ?? "";
    ("Submit" === t || "submit" === r) && e.click()
  }
  async uploadCurrentFileSlots() {
    let e = (0, f.getResumeUploadDom)();
    if (e.container && (this.disableUploadResume ? this.progressTracker.updateMissedProgress(
        "Resume/CV") : this.taskQueue.add(async () => {
        let e = await (0, f.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        e || this.progressTracker.updateMissedProgress("Resume/CV")
      })), "required" === (0, f.getCoverLetterFieldStatus)()) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: !0
      });
      let e = this.getCoverLetterFilePayload();
      e ? this.taskQueue.add(async () => {
        let t = await (0, f.uploadCoverLetter)(e, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        t || this.progressTracker.updateMissedProgress("Cover Letter")
      }) : this.progressTracker.updateMissedProgress("Cover Letter")
    }
    await this.taskQueue.run()
  }
  getCoverLetterFilePayload() {
    return this.coverLetter?.coverLetterId && this.coverLetter.coverLetterName ? {
      coverLetterId: this.coverLetter.coverLetterId,
      coverLetterName: this.coverLetter.coverLetterName,
      markdown: this.coverLetter.markdown,
      useLegacyDownload: this.coverLetter.useLegacyDownload
    } : null
  }
  async fillCountryFields(e) {
    let t = e.filter(e => {
        let t = e.$input;
        return h(e) && t instanceof HTMLElement
      }),
      r = !1;
    for (let e of t) {
      let t = e.$input;
      this.taskQueue.add(async () => {
        if (this.currentRunCountryCommitted) {
          this.progressTracker.updateFilledProgress(e.label), console.info(
            "[AdpWorkforceNowCountryDebug] progress", JSON.stringify({
              label: e.label,
              outcome: "prefill-committed"
            }));
          return
        }
        let n = await (0, f.fillCountry)(t, this.currentRunCountry);
        console.info("[AdpWorkforceNowCountryDebug] progress", JSON.stringify({
            label: e.label,
            hasCountry: !!this.currentRunCountry,
            outcome: n ? "filled-after-prefill" : "not-committed"
          })), n ? (r = !0, this.progressTracker.updateFilledProgress(e.label)) : this
          .progressTracker.updateMissedProgress(e.label)
      })
    }
    return t.length > 0 && await this.taskQueue.run(), r
  }
  getRulesWithoutManualCountry(e) {
    return e.filter(e => !h(e))
  }
  async waitForEnabledAdpWorkforceNowVsidRaceRule(e) {
    let t = Date.now() + 1500,
      r = 0,
      n = null,
      o = !e;
    for (; Date.now() <= t;) {
      if (r += 1, e && (o = (0, p.isAdpWorkforceNowVsidRaceRequiredAfterEthnicity)()), !o) {
        await (0, u.delay)(100);
        continue
      }
      let t = await (0, p.getEnabledAdpWorkforceNowVsidRaceRule)();
      if (t && (n = t, t.options?.length)) return console.info(
        "[AdpWorkforceNow][VSID Race] live rule ready", {
          attempts: r,
          optionCount: t.options.length
        }), t;
      await (0, u.delay)(100)
    }
    return console.info("[AdpWorkforceNow][VSID Race] live rule wait ended", {
      attempts: r,
      ethnicityTriggerObserved: o,
      raceControlEnabled: !!n,
      optionCount: n?.options?.length ?? 0
    }), n
  }
  async fillDeferredAdpWorkforceNowVsidRace(e, t, r) {
    if (!e.length && !t) return;
    console.info("[AdpWorkforceNow][VSID Race] defer dependent rule", {
      deferredRuleCount: e.length,
      hasVsidRaceDependency: t,
      initialOptionCounts: e.map(e => e.options?.length ?? 0)
    });
    let n = await this.waitForEnabledAdpWorkforceNowVsidRaceRule(t);
    if (!n) {
      console.info("[AdpWorkforceNow][VSID Race] not rendered after Ethnicity", {
        deferredRuleCount: e.length
      });
      return
    }
    if (this.progressTracker.updateFieldRequiredStatus(n), !n.options?.length) {
      console.warn("[AdpWorkforceNow][VSID Race] enabled control has no options", {
        optionCount: 0
      }), this.progressTracker.updateMissedProgress(n.label);
      return
    }
    let o = await this.requestFormAnswers([n], r, {
      updateTimeTrace: !1
    });
    if (!o || "string" == typeof o) {
      console.warn(
        "[AdpWorkforceNow][VSID Race] answer request did not return a fillable result", {
          hasErrorCode: "string" == typeof o
        }), this.progressTracker.updateMissedProgress(n.label);
      return
    }
    this.answer.regular = {
      ...this.answer.regular,
      ...o.regular
    }, this.answer.fillDataList = [...this.answer.fillDataList || [], ...o.fillDataList || []];
    let i = this.operationConfig[n.type];
    if (!i) {
      console.warn("[AdpWorkforceNow][VSID Race] no select operation configured"), this
        .progressTracker.updateMissedProgress(n.label);
      return
    }
    let a = await i(n, this.answer.regular);
    console.info("[AdpWorkforceNow][VSID Race] fill finished", {
      optionCount: n.options.length,
      filled: a
    })
  }
  logRegularAnswerSummary(e) {
    let t = v(e, this.answer?.regular ?? {});
    console.info("[AdpWorkforceNowDebug] answer-summary", JSON.stringify({
      totalFields: t.length,
      answeredFields: t.filter(e => e.present).length,
      fields: t
    }))
  }
  async resolveGooglePlacesAddress(e) {
    let t = e.find(b);
    if (!t) {
      console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
        outcome: "skipped-no-google-places-address-rule"
      }));
      return
    }
    let r = (0, c.createAdpAddressSessionToken)();
    try {
      console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
        outcome: "suggestions-requested",
        label: t.label,
        sessionTokenLength: r.length
      }));
      let n = await (0, c.resolveAdpWorkforceNowAddress)({
        answer: this.answer,
        sessionToken: r,
        requestSuggestions: async e => {
          let t = await (0, o.sendToBackground)({
            name: "getAddressSuggestions",
            body: e
          });
          return console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
            outcome: "suggestions-received",
            resultCount: Array.isArray(t) ? t.length : 0
          })), t
        },
        resolveSuggestion: async e => {
          console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
            outcome: "place-resolve-requested",
            placeIdLength: e.placeId.length
          }));
          let t = await (0, o.sendToBackground)({
            name: "resolveAddressSuggestion",
            body: e
          });
          return console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
            outcome: "place-resolve-received",
            resolved: !!t && "object" == typeof t && !0 === t.resolved
          })), t
        }
      });
      if (!n) {
        console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
          outcome: "no-unique-resolved-address"
        }));
        return
      }
      this.answer.regular = (0, c.applyResolvedAdpAddressToRegularAnswers)(this.answer.regular,
        e.map(e => e.label), n), console.info("[AdpWorkforceNowAddressDebug] resolve", JSON
        .stringify({
          outcome: "resolved-address-applied",
          hasCity: !!n.city,
          hasState: !!n.state,
          hasPostalCode: !!n.postalCode
        }))
    } catch (e) {
      console.warn("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
        outcome: "request-failed",
        errorName: w(e)
      }))
    }
  }
  logPhoneRules(e) {
    let t = e.filter(e => (0, d.isAdpWorkforceNowPhoneNumberLabel)(e.label) || (0, d
      .isAdpWorkforceNowPhoneCountryCodeLabel)(e.label)).map(e => ({
      label: e.label,
      type: e.type,
      hasDescription: !!e.description,
      optionCount: Array.isArray(e.options) ? e.options.length : 0
    }));
    console.info("[AdpWorkforceNowPhoneDebug] rules", JSON.stringify({
      phoneRules: t
    }))
  }
  logPhoneAnswerResult() {
    let e = this.answer?.regular || {},
      t = ["Mobile Number", "Home Phone Number", (0, d.getAdpWorkforceNowPhoneCountryCodeLabel)(
        "Mobile Number"), (0, d.getAdpWorkforceNowPhoneCountryCodeLabel)("Home Phone Number")]
      .filter(e => !!e),
      r = t.map(t => {
        let r = e[t],
          n = Array.isArray(r) ? String(r.find(e => String(e ?? "").trim()) ?? "").trim() :
          String(r ?? "").trim();
        return {
          label: t,
          present: !!n,
          valueLength: n.length,
          digitsLength: n.replace(/\D/g, "").length,
          prefixOnly: /^\+\d{1,4}$/.test(n)
        }
      });
    console.info("[AdpWorkforceNowPhoneDebug] answer", JSON.stringify({
      fields: r
    }))
  }
  bindNextSnapshotHandler() {
    let e = document.getElementById("ja_sv_cw_next_footer_btn");
    if (!e?.isConnected) return;
    let t = e.innerText?.trim() ?? "";
    if ("Submit" === t) return;
    this.continueButtonHandler && e.removeEventListener("click", this.continueButtonHandler);
    let r = (0, p.getFormSnapshot)();
    this.continueButtonHandler = (0, p.submitHandler).bind(null, r), e.addEventListener("click",
      this.continueButtonHandler)
  }
  constructor(...e) {
    super(...e), this.formatAnswer = d.formatAnswer, this.continueButtonHandler = null, this
      .coverLetterCheckVersion = 0, this.coverLetterAdvanceObserverBound = !1, this
      .currentRunCountry = "", this.currentRunCountryCommitted = !1
  }
}

