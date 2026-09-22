/**
 * Parcel module id: 4GQXn
 * Resolved path: src/contents/sites/google.js
 * Dependencies:
 *   ./answer -> 7manN  =>  src/contents/sites/google/answer.js
 *   ./operations -> 9hp0S  =>  src/contents/sites/google/operations.js
 *   ./rules -> WnxUk  =>  src/contents/sites/google/rules.js
 *   ./skills-operation -> cPUQK  =>  src/contents/sites/google/skills-operation.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents -> d4tj7  =>  src/contents.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  src/contents/methods/cover-letter.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/falcon-answer-tracking -> 2vI9E  =>  src/contents/sites/falcon-answer-tracking.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/pagenation -> l1kUK  =>  src/core/pagenation.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "GOOGLE_STEP_CHANGE_EVENT", () => m.GOOGLE_STEP_CHANGE_EVENT), n
  .export(r, "getCurrentAdvanceButton", () => S), n.export(r, "clickAdvanceButton", () => E), n
  .export(r, "Google", () => x);
var o = e("~contents/sites/base-filler"),
  i = e("~contents"),
  a = e("~contents/methods/answer"),
  l = e("~contents/methods/cancellation"),
  s = e("~contents/methods/cover-letter"),
  u = e("~contents/methods/dom"),
  c = e("~contents/methods/track"),
  d = e("~contents/sites/falcon-answer-tracking"),
  f = e("~core/dom"),
  p = e("~core/enums"),
  m = e("~core/pagenation"),
  h = e("~store/autofillInfo"),
  g = e("~utils/delay"),
  b = e("./operations"),
  y = e("./skills-operation"),
  v = e("./rules"),
  w = e("./answer");

function S() {
  try {
    let e = (0, v.findStepAdvanceButton)();
    if (!e) return null;
    let t = (e.innerText ?? e.textContent ?? "").trim().toLowerCase(),
      r = (e.getAttribute("aria-label") ?? "").trim().toLowerCase(),
      n = "apply" === t || "apply" === r;
    if (n) return {
      element: e,
      type: "submit"
    };
    let o = t.includes("continue") || r.includes("continue"),
      i = t.includes("submit") || r.includes("submit");
    if (o) return {
      element: e,
      type: "continue"
    };
    if (i) return {
      element: e,
      type: "submit"
    };
    return {
      element: e,
      type: "continue"
    }
  } catch (e) {
    return null
  }
}

function E(e) {
  try {
    if (!e?.isConnected) return;
    e.scrollIntoView({
      block: "center",
      inline: "nearest"
    }), e.focus();
    let t = e.getBoundingClientRect(),
      r = t.left + t.width / 2,
      n = t.top + t.height / 2,
      o = {
        bubbles: !0,
        cancelable: !0,
        view: window,
        clientX: r,
        clientY: n
      };
    e.dispatchEvent(new MouseEvent("mousedown", o)), e.dispatchEvent(new MouseEvent("mouseup", o)),
      e.dispatchEvent(new MouseEvent("click", o))
  } catch {}
}
class x extends o.BaseFiller {
  getSiteName() {
    return "google"
  }
  async checkCoverLetter() {
    (0, u.postCoverLetterStatus)((0, v.getCoverLetterStatus)())
  }
  buildOperationConfig() {
    let e = super.buildOperationConfig(),
      t = (0, w.getGoogleOperationConfigOverrides)({
        handlers: this.getFieldHandlers(),
        progressTracker: this.progressTracker,
        createOperationHandler: this.createOperationHandler
      });
    return {
      ...e,
      ...t
    }
  }
  getFieldHandlers() {
    return (0, v.isGoogleFormsPage)() ? this.getFormsFieldHandlers() : {
      [p.FIELD_TYPE.TEXT]: async (e, t) => {
        if (e.label === y.GOOGLE_SKILLS_LABEL) {
          let r = (0, w.normalizeGoogleSkillsItems)(t);
          return (0, y.fillGoogleSkillsAutocomplete)(e.$input, r, {
            onInterruptedResult: t => this.progressTracker.updateFieldItemProgress(e
              .label, t)
          })
        }
        let r = Array.isArray(t) ? t[0] : t;
        return (0, b.fillInputTextField)(e.$input, String(r ?? ""), e)
      },
      [p.FIELD_TYPE.SELECT]: (e, t) => (0, b.fillSelectField)(e, t),
      [p.FIELD_TYPE.CHECKBOX]: (e, t) => (0, b.fillCheckboxField)(e, t),
      [p.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, b.fillRadioGroupFiled)(e, t)
    }
  }
  getFormsFieldHandlers() {
    return {
      [p.FIELD_TYPE.TEXT]: async (e, t) => {
        let r = Array.isArray(t) ? t[0] : t;
        return (0, b.fillInputTextField)(e.$input, String(r ?? ""))
      },
      [p.FIELD_TYPE.SELECT]: (e, t) => (0, b.fillFormsSelect)(e, t),
      [p.FIELD_TYPE.CHECKBOX]: (e, t) => (0, b.fillFormsCheckbox)(e, t),
      [p.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, b.fillFormsRadioGroup)(e, t)
    }
  }
  async initializeFillForm() {
    await super.initializeFillForm(), (0, v.isGoogleFormsPage)() ? this
    .ensureFormsAutoAdvance() : this.ensureDelegatedAdvanceTracking()
  }
  async runPreFillForm() {
    this.autofillCountry = "";
    let e = await (0, h.useAutofillInfoStore).getState().fetchAutofillInfo();
    this.autofillCountry = String(e?.location?.country ?? "").trim(), await (0, b.preFillForm)()
  }
  static {
    this.ADVANCE_TRACKING_TIMEOUT_MS = 5e3
  }
  ensureDelegatedAdvanceTracking() {
    this._delegatedAdvanceTrackingBound || (this._delegatedAdvanceTrackingBound = !0, document
      .body.addEventListener("click", e => {
        if (!(0, v.isAdvanceButton)(e.target)) return;
        let t = e.target.closest("button") ?? e.target.closest('div[role="button"]');
        if (!t) return;
        let r = new Promise(e => setTimeout(e, x.ADVANCE_TRACKING_TIMEOUT_MS));
        Promise.race([(0, b.sendAdvanceTrackingEvent)(this.tracking, () => this
        .getSiteName()), r]), setTimeout(() => window.dispatchEvent(new CustomEvent(m
          .GOOGLE_STEP_CHANGE_EVENT)), 800), setTimeout(() => window.dispatchEvent(
          new CustomEvent(m.GOOGLE_STEP_CHANGE_EVENT)), 1500)
      }, !0))
  }
  async extractFormRules() {
    return (0, v.isGoogleFormsPage)() ? (0, v.extractGoogleFormsRules)() : (0, v.extractRules)({
      eagerSelectOptions: !1
    })
  }
  async getAutofillSnapshot(e) {
    if ((0, v.isGoogleFormsPage)()) return (0, v.getGoogleFormsSnapshot)();
    let t = await (0, v.extractRules)({
      eagerSelectOptions: !1,
      silentLog: !0
    });
    return (0, v.getFormSnapshot)(t)
  }
  async getSubmitSnapshot() {
    if ((0, v.isGoogleFormsPage)()) return (0, v.getGoogleFormsSnapshot)();
    let e = await (0, v.extractRules)({
      eagerSelectOptions: !1,
      silentLog: !0
    });
    return (0, v.getFormSnapshot)(e)
  }
  getAdditionalAutofillSnapshotData(e) {
    return {}
  }
  async handleResumeUpload() {
    let e = !1;
    this.disableUploadResume ? this.taskQueue.add(async () => {
      await (0, b.removeResume)(), this.progressTracker.updateMissedProgress("Resume/CV")
    }) : this.taskQueue.add(async () => {
      e = await (0, b.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
    }), await this.taskQueue.run(), this._resumeUploaded = e
  }
  async fetchFormAnswers(e, t) {
    let r = (0, d.beginFalconResponseAnswerRequest)();
    try {
      let n = async () => {
        let e = Date.now(),
          t = 0;
        for (; Date.now() - e < 6e3;) {
          t++;
          let e = (await (0, a.getSiteToken)() ?? "").toString().trim();
          if (e) return e;
          await (0, g.delay)(Math.min(800, 200 + 150 * t))
        }
        return ""
      };
      if (this.token || (this.token = await n()), !this.token) return (0, c
        .sendHttpStatusMessage)("TOKEN_MISSING"), "TOKEN_MISSING";
      let o = (0, w.serializeRulesForApi)(e);
      if (!o?.length) return (0, c.sendHttpStatusMessage)("NO_ELEMENTS"), "NO_ELEMENTS";
      let l = await (0, w.requestGoogleFormAnswers)({
        elements: o,
        token: this.token,
        getSiteName: this.getSiteName(),
        fromAgent: !!(t || i.agentTailorId || i.agentResumeId),
        resumeId: this.resumeInfo?.id,
        tailorId: this.resumeInfo?.tailorId
      });
      l && (this.answer = (0, a.initUserData)(l, r))
    } catch (e) {
      if (e instanceof a.HTTPError || e instanceof a.ResumeMissingCodeError) return (0, c
        .sendHttpStatusMessage)(e.message), e.message
    }(0, l.checkpoint)()
  }
  getSubmitButtonSelector() {
    return './/button[contains(@aria-label, "Submit") or contains(., "Submit")]'
  }
  submitApplication() {
    try {
      (0, b.clickSubmitButton)(this.getSubmitButtonSelector())
    } catch {}
  }
  async doFillForm(e = !1) {
    if ((0, v.isGoogleFormsPage)()) return this.fillFormForGoogleForms(e);
    await this.initializeFillForm(), await (0, v.waitForGooglePageClean)(), this.tracking
      .startOrResumeRun();
    let t = document.body;
    await (0, b.resetFormBaselineBeforeFetch)(t);
    let r = {
      "Attended university degree program?": "yes",
      "Applying for your first job?": "no"
    };
    for (let [e, n] of Object.entries(r)) {
      let r = t.querySelector(`[role="radiogroup"][aria-label="${e}"]`);
      if (!r) continue;
      let o = Array.from(r.querySelectorAll('input[type="radio"]')).find(e => e.value
        .toLowerCase() === n);
      o && !o.checked && o.click()
    }
    await (0, g.delay)(300);
    let n = this.prepareCoverLetterRules(await this.extractFormRules());
    this.progressTracker.setFieldsRequiredStatus(n);
    let o = await this.fetchFormAnswers(n, e);
    if ("string" == typeof o) return o;
    this.answer = (0, w.formatAnswer)(this.answer, {
      autofillCountry: this.autofillCountry
    }), await this.handleResumeUpload(), await (0, g.delay)(600);
    let i = this.answer.regular,
      a = (0, b.getDefaultEmailFromPage)(t),
      l = (0, w.normalizeEmailsForContactDetails)(i, a);
    l.regular !== i && (this.answer.regular = l.regular);
    let s = l.additionalEmailCount,
      u = Array.isArray(this.answer.regular.Phone) ? Math.max(0, this.answer.regular.Phone
        .length - 1) : 0;
    return await this.fillCareersContactAndRegular(t, n, s, u), await this
      .fillCareersEducationIfNeeded(), await this.fillCareersWorkExperienceIfNeeded(t),
      await this.fillCoverLetterFields(), await (0, b.collapseOpenComboboxes)(), await this
      .fillDeferredGooglePhoneNumber(), await this.recordCareersSnapshot(), await this
      .finalizeFillForm()
  }
  async fillCareersContactAndRegular(e, t, r, n) {
    await (0, b.syncContactAdditionalSlots)(e, r, n), await (0, b
      .waitForAdditionalEmailInputsReady)(e, r);
    let o = r > 0 || n > 0 ? (0, s.markTextCoverLetterRules)(await this.extractFormRules()) : t;
    this.progressTracker.setFieldsRequiredStatus(o);
    let i = (0, s.withoutCoverLetterRules)(o),
      l = async e => {
        let t = (0, a.getRegularOperations)(e, this.answer.regular, this.operationConfig);
        for (let e of t) this.taskQueue.add(e);
        await this.taskQueue.run()
      }, u = (0, v.stageGooglePhoneCountryCodeRules)(i, []);
    if (u.countryCodeRules.length > 0) {
      await l(u.countryCodeRules);
      let e = 1500;
      await (0, g.delay)(e);
      let t = await (0, v.extractRules)({
          eagerSelectOptions: !1,
          silentLog: !0
        }),
        r = (0, v.stageGooglePhoneCountryCodeRules)(i, t);
      await l(r.postPhoneRules)
    } else await l(i);
    await (0, g.delay)(300), await (0, b.collapseOpenComboboxes)();
    let c = await (0, v.extractRules)({
        eagerSelectOptions: !1,
        silentLog: !0
      }),
      d = this.answer.regular,
      f = c.filter(e => {
        let t = (e.label || "").trim().toLowerCase(),
          r = "country / region" === t || "country" === t || "country/region" === t;
        if (r) return !0;
        let n = "state / province" === t || "state" === t;
        if (!n) return !1;
        let o = "state / province" === t ? d["State / province"] : d.State;
        return "" !== String(o ?? "").trim()
      });
    if (f.length > 0) {
      let e = (0, a.getRegularOperations)(f, d, this.operationConfig);
      for (let t of e) this.taskQueue.add(t);
      await this.taskQueue.run()
    }
    await (0, b.retryFillAdditionalEmailsIfNeeded)(e, this.answer.regular, r)
  }
  async fillDeferredGooglePhoneNumber() {
    let e = (0, s.withoutCoverLetterRules)(await this.extractFormRules()),
      t = (0, v.stageGooglePhoneCountryCodeRules)(e, []);
    if (0 === t.countryCodeRules.length) return;
    let r = async e => {
      let t = (0, a.getRegularOperations)(e, this.answer.regular, this.operationConfig);
      for (let e of t) this.taskQueue.add(e);
      await this.taskQueue.run()
    };
    await r(t.countryCodeRules);
    let n = 1500;
    await (0, g.delay)(n);
    let o = (0, s.withoutCoverLetterRules)(await this.extractFormRules()),
      i = (0, v.stageGooglePhoneCountryCodeRules)(e, o),
      l = this.answer.regular,
      u = Array.isArray(l["Country calling code"]) ? l["Country calling code"][0] : l[
        "Country calling code"],
      c = String(u ?? "").match(/\+\d{1,4}/)?.[0] ?? "",
      d = i.phoneRules[0]?.$input,
      f = d?.value?.trim().match(/^\+\d{1,4}/)?.[0] ?? "",
      p = !c || f === c;
    p && await r(i.phoneRules)
  }
  async fillCareersEducationIfNeeded() {
    let e = "Attended university degree program?";
    if (this.answer.regular[e]?.toString().toLowerCase() !== "yes") return;
    let t = Array.isArray(this.answer.education) ? this.answer.education : [],
      r = t.length > 0 ? t.map(e => (0, w.mapEducationRecordToRegular)(e)) : [(0, w
        .mapEducationRecordToRegular)(this.answer.regular)];
    if (0 === r.length) return;
    await (0, b.addHigherEducationDegreeSection)(r.length), await (0, g.delay)(500);
    let n = await (0, v.getHigherEducationRules)(!1);
    if (0 === n.length) return;
    (0, f.setSectionResultFocusRules)("education", n);
    let o = !1,
      i = (0, a.getEducationOperations)(n, r, this.operationConfig, void 0, {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onSkipped: () => {
          o = !0
        }
      });
    for (let e of i) this.taskQueue.add(e);
    if (await this.taskQueue.run(), o) {
      this.progressTracker.updateMissedProgress("Education");
      return
    }
    let l = await (0, v.getStructuredEducationSnapshot)(!1);
    (0, v.isStructuredSectionFilled)(l, n) ? this.progressTracker.updateFilledProgress(
      "Education"): this.progressTracker.updateMissedProgress("Education")
  }
  async fillCareersWorkExperienceIfNeeded(e) {
    if (!(0, v.findWorkExperienceSection)(e)) return;
    let t = this.answer.regular["Work experience"];
    if (!Array.isArray(t) || 0 === t.length) return;
    await (0, b.syncWorkExperienceSlots)(e, t.length), await (0, g.delay)(500);
    let r = !1,
      n = new Map,
      o = async e => {
        let o = e ?? (0, v.getWorkExperienceRules)();
        if (o.length <= 0) return;
        let i = o.some(e => void 0 !== e.__originalRowIndex),
          l = i ? o.map(e => t[e.__originalRowIndex] ?? {}) : t,
          s = (0, w.attachGoogleEmploymentRuleContext)(o, l);
        (0, f.setSectionResultFocusRules)("employment", i ? (0, v.getWorkExperienceRules)() :
          s);
        let u = (0, a.getEmploymentOperations)(s, l, this.operationConfig, void 0, {
          onSectionResultChanged: e => {
            for (let t of e.rows) {
              let e = o[t.index].__originalRowIndex ?? t.index,
                r = n.get(e),
                i = new Map((r?.fields ?? []).map(e => [e.label, e]));
              for (let e of t.fields) i.set(e.label, e);
              let a = [...i.values()];
              n.set(e, {
                ...r,
                ...t,
                index: e,
                fields: a,
                status: a.some(e => "skipped" === e.status) ? "skipped" : a.some(
                    e => "missed" === e.status) ? "missed" : a.length > 0 && a
                  .every(e => "filled" === e.status) ? "filled" : "pending"
              })
            }
            this.progressTracker.updateSectionResult({
              ...e,
              rows: [...n.values()].sort((e, t) => e.index - t.index)
            })
          },
          onSkipped: () => {
            r = !0
          }
        });
        for (let e of u) this.taskQueue.add(e);
        await this.taskQueue.run()
      }, i = (e, r) => {
        let n = e => {
            let t = String(e ?? "").trim().toLowerCase();
            return "true" === t || "yes" === t || "1" === t || "y" === t
          },
          o = e => "" !== String(e ?? "").trim(),
          i = (e, t) => {
            let r = "State" === t || "State / province" === t ? [e.State, e[
              "State / province"]] : [e[t]];
            return r.some(e => null != e && ("boolean" == typeof e || ("number" == typeof e ?
              !Number.isNaN(e) : Array.isArray(e) ? e.some(e => o(e)) : "string" ==
              typeof e && "" !== e.trim())))
          },
          a = [];
        return r.forEach((r, l) => {
          let s = (r.children ?? []).filter(e => !!e?.label);
          if (0 === s.length) return;
          let u = t[l] && "object" == typeof t[l] ? t[l] : {},
            c = s.filter(e => !!e?.label && (!0 === e.required || i(u, e.label)));
          if (0 === c.length) return;
          let d = e[l] ?? {},
            f = n(d["This is your current job"]),
            p = new Set;
          for (let e of c) {
            let t = e.label;
            if (t && (!f || "End Month" !== t && "End Year" !== t)) {
              if ("State" === t || "State / province" === t) {
                if (o(d.State) || o(d["State / province"])) continue;
                p.add(t);
                continue
              }
              o(d[t]) || p.add(t)
            }
          }
          if (0 === p.size) return;
          let m = s.filter(e => p.has(e.label));
          0 !== m.length && a.push({
            ...r,
            children: m,
            __originalRowIndex: l
          })
        }), a
      };
    if (await o(), r) {
      this.progressTracker.updateMissedProgress("Employment");
      return
    }
    let l = (0, v.getStructuredWorkExperienceSnapshot)(),
      s = (0, v.getWorkExperienceRules)(),
      u = i(l, s);
    if (u.length > 0) {
      await (0, g.delay)(400), await (0, b.collapseOpenComboboxes)(), l = (0, v
        .getStructuredWorkExperienceSnapshot)(), s = (0, v.getWorkExperienceRules)();
      let e = i(l, s);
      if (e.length > 0 && await o(e), r) {
        this.progressTracker.updateMissedProgress("Employment");
        return
      }
      l = (0, v.getStructuredWorkExperienceSnapshot)(), s = (0, v.getWorkExperienceRules)()
    }(0, f.setSectionResultFocusRules)("employment", s), (0, v.isStructuredSectionFilled)(l,
    s) ? this.progressTracker.updateFilledProgress("Employment"): this.progressTracker
      .updateMissedProgress("Employment")
  }
  async recordCareersSnapshot() {
    let e = await (0, v.extractRules)({
        eagerSelectOptions: !1,
        silentLog: !0
      }),
      t = await (0, v.getFormSnapshot)(e),
      r = await (0, v.getStructuredEducationSnapshot)(!1),
      n = (0, v.getStructuredWorkExperienceSnapshot)(),
      o = (0, v.getCurrentStepFingerprint)();
    this.tracking.recordAutofillSnapshot(o, t, {
      education: r,
      employment: n
    })
  }
  async fillFormForGoogleForms(e) {
    await this.initializeFillForm(), this.tracking.startOrResumeRun(), this
      .disableUploadResume || (this.taskQueue.add(async () => {
        await (0, b.uploadFormsResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), await this.taskQueue.run());
    let t = this.prepareCoverLetterRules(await (0, v.extractGoogleFormsRules)());
    this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    if ("string" == typeof r) return r;
    if (this.answer) try {
      this.answer = (0, w.formatAnswer)(this.answer, {
        autofillCountry: this.autofillCountry
      })
    } catch {}
    return await this.runFormsRegularFill(t), await this.fillCoverLetterFields(), this
      .recordFormsSnapshot(), await this.finalizeFillForm()
  }
  async runFormsRegularFill(e) {
    let t = this.answer?.regular || {},
      r = (0, a.getRegularOperations)((0, s.withoutCoverLetterRules)(e), t, this
        .operationConfig);
    for (let e of r) this.taskQueue.add(e);
    await this.taskQueue.run()
  }
  recordFormsSnapshot() {
    this.tracking.recordAutofillSnapshot((0, v.getFormsPageFingerprint)(), (0, v
      .getGoogleFormsSnapshot)(), {
      education: [],
      employment: []
    })
  }
  ensureFormsAutoAdvance() {
    this._formsAdvanceBound || (this._formsAdvanceBound = !0, document.body.addEventListener(
      "click", e => {
        (0, v.isFormsAdvanceButton)(e.target) && (0, b.sendFormsAdvanceSnapshot)(this
          .tracking, () => this.getSiteName())
      }, !0))
  }
  constructor(...e) {
    super(...e), this.tracking = new v.GoogleTrackingManager, this.autofillCountry = "", this
      ._delegatedAdvanceTrackingBound = !1, this._formsAdvanceBound = !1, this
      ._resumeUploaded = !1
  }
}

