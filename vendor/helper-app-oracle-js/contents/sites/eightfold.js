/**
 * Parcel module id: 1Lzdy
 * Resolved path: contents/sites/eightfold.js (oracle restore)
 * Dependencies:
 *   ./answer -> 0548q  =>  _dotdot_/answer.js
 *   ./operations -> 6ct1g  =>  src/contents/sites/eightfold/operations.js
 *   ./rules -> 6MF9I  =>  _dotdot_/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillEightfoldPhoneCountryCodeWithProgress", () => v), n.export(
  r, "isEightfoldApplicationFormPage", () => x), n.export(r, "Eightfold", () => L);
var o = e("~contents/methods/answer"),
  i = e("~contents/methods/dom"),
  a = e("~contents/sites/base-filler"),
  l = e("~core/enums"),
  s = e("~core/xpath"),
  u = e("~store/autofillInfo"),
  c = e("./answer"),
  d = e("./operations"),
  f = e("./rules");
let p = new Set(["country code", "country phone code", "phone country code", "phone code",
    "phone country phone code"
  ]),
  m = new Set(["number", "phone", "phone number", "phone phone number", "phone device type",
    "phone phone device type", "phone extension", "phone phone extension"
  ]),
  h = 24,
  g = 2500,
  b = 4,
  y = 1;
async function v({
  label: e,
  source: t,
  fillCountryCode: r,
  updateFilled: n,
  updateMissed: o
}) {
  let i = t.trim();
  if (!i) return o(e), !1;
  try {
    return await r(i), n(e), !0
  } catch {
    return o(e), !1
  }
}

function w() {
  try {
    return window.location.href
  } catch {
    return ""
  }
}

function S(e) {
  try {
    let t = new URL(e),
      r = t.pathname.replace(/\/+$/, "");
    return "/careers/apply" === r || /^\/careers\/apply\/[^/]+$/.test(r) ||
      /^\/careers\/job\/[^/]+\/apply$/.test(r) || "/careerhub/explore/jobs/apply" === r && !!t
      .searchParams.get("pid")
  } catch {
    return !1
  }
}

function E(e) {
  if (e.querySelector("#careers-apply-form")) return !0;
  let t = Array.from(e.querySelectorAll('[class*="field-"]'));
  return t.some(e => {
    let t = e.querySelector('label[id*="_label"], legend[id*="_legend"]');
    if (t) return !0;
    let r = Array.from(e.querySelectorAll("input, textarea, select"));
    return r.some(e => {
      if ("INPUT" !== e.tagName) return !0;
      let t = (e.getAttribute("type") || e.type || "text").toLowerCase();
      return !["hidden", "file", "button", "submit"].includes(t)
    })
  })
}

function x(e = {}) {
  let t = e.url ?? w();
  if (S(t)) return !0;
  let r = e.root ?? document;
  return E(r)
}

function C(e) {
  if (!e) return "";
  let t = e.$input;
  if (t instanceof HTMLInputElement) return (t.value || "").trim();
  if (t instanceof HTMLSelectElement) {
    let e = t.selectedOptions?.[0];
    return (e?.textContent || t.value || "").trim()
  }
  return ""
}

function A(e) {
  let t = e.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  return ["us", "u s", "usa", "u s a", "united states", "united states of america"].includes(t) ?
    "united states" : ["gb", "uk", "u k", "great britain"].includes(t) ? "united kingdom" : t
}

function k(e, t) {
  let r = A(t);
  return "" !== r && A(e) === r
}

function T(e) {
  return e.toLowerCase().replace(/\s+/g, " ").trim()
}

function F(e) {
  let t = T(e);
  return !!t && "select" !== t && "select one" !== t
}

function I(e, t) {
  if (!e) return !1;
  if (!e.options?.length) return F(T(t));
  let r = T(t);
  return !!F(r) && e.options.some(e => {
    if (!F(e)) return !1;
    let t = T(e);
    return r === t
  })
}

function j(e, t) {
  if (!e) return !1;
  let r = C(e);
  return t(r)
}

function D(e, t) {
  if (!e || !t) return [];
  try {
    let r = (0, o.findValueInRecord)(e.label, t),
      n = Array.isArray(r) ? r : [r];
    return n.map(e => String(e).trim()).filter(e => "" !== e)
  } catch {
    return []
  }
}

function P(e) {
  let t = e.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  return t ? "yes" === t || t.startsWith("yes ") ? "yes" : "no" === t || t.startsWith("no ") ?
    "no" : "" : ""
}

function _(e) {
  if (!e) return "";
  let t = e.$input;
  if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) return t.value || t
    .textContent || "";
  if (t instanceof HTMLSelectElement) return t.selectedOptions?.[0]?.textContent || t.value || "";
  if (e.type === l.FIELD_TYPE.RADIOGROUP) {
    let t = e.$radioParent,
      r = Array.from(t?.querySelectorAll('input[type="radio"]') || []),
      n = r.find(e => e.checked);
    if (!n) return "";
    let o = n.id ? document.querySelector(`label[for="${n.id}"]`) : null;
    return o?.textContent?.trim() || n.value || ""
  }
  return t?.textContent || ""
}
class L extends a.BaseFiller {
  async refreshPhoneCountrySources() {
    let e = await (0, u.useAutofillInfoStore).getState().fetchAutofillInfo();
    return {
      autofillCountry: "string" == typeof e?.location?.country ? e.location.country : "",
      phoneCountrySources: {
        phoneCountryCode: e?.phoneCountryCode,
        country: e?.location?.country
      }
    }
  }
  formatAnswer(e) {
    return (0, c.formatAnswer)(e)
  }
  async filterNewComboQuestionRules(e) {
    return 0 === e.length ? e : (0, f.filterAlreadyCommittedEightfoldRules)(e, this
      .progressTracker.fieldStatus.filledFields, await (0, f.getFormSnapshot)())
  }
  requestFormAnswers(e, t, r = {}) {
    return super.requestFormAnswers((0, f.prepareEightfoldAnswerRequestRules)(e), t, r)
  }
  shouldSkipConditionalRule(e) {
    let t = e.__eightfoldConditional;
    if (!t) return !1;
    let r = _(t.parentRule) || D(t.parentRule, this.answer?.regular)[0] || "",
      n = P(r);
    return !!n && n !== t.condition
  }
  async waitForDynamicFieldsToSettle() {
    await (0, a.waitForComboQuestionsToSettle)(this.comboQuestionSettleDelayMs)
  }
  async waitForDynamicFieldMutation(e) {
    return !(e <= 0) && "function" == typeof MutationObserver && !!document.body &&
      await new Promise(t => {
        let r = !1,
          n = e => {
            r || (r = !0, o.disconnect(), clearTimeout(i), t(e))
          },
          o = new MutationObserver(() => n(!0)),
          i = setTimeout(() => n(!1), e);
        o.observe(document.body, {
          childList: !0,
          subtree: !0,
          attributes: !0
        })
      })
  }
  async fillNewlyRevealedFields(e, t, r = {}, n = () => !1) {
    this.hasPendingDynamicSelectHydration = !1;
    let o = await this.extractFormRules({
        shouldHydrateSelectOptions: () => !1
      }),
      i = this.getNewComboQuestionRules(e, o);
    if (0 === i.length) return e;
    let a = new Set,
      s = new Set,
      u = i.filter(e => !n(e)),
      c = i;
    for (let t = 0; t < b; t++) {
      let t = new Set,
        r = new Set;
      for (let e of u) {
        e.$input && (t.add(e.$input), a.add(e.$input));
        let n = (0, d.normalizeEightfoldFieldLabel)(e.label);
        r.add(n), s.add(n)
      }
      let o = await this.extractFormRules({
        shouldHydrateSelectOptions: (e, n) => !!n && t.has(n) || r.has((0, d
          .normalizeEightfoldFieldLabel)(e))
      });
      if (0 === (u = (c = this.getNewComboQuestionRules(e, o)).filter(e => !n(e) && e.type === l
          .FIELD_TYPE.SELECT && (e.$input ? !a.has(e.$input) : !s.has((0, d
            .normalizeEightfoldFieldLabel)(e.label))))).length) break
    }
    this.hasPendingDynamicSelectHydration = u.length > 0, c = c.filter(e => !!n(e) || e.type !==
      l.FIELD_TYPE.SELECT || (e.$input ? a.has(e.$input) : s.has((0, d
        .normalizeEightfoldFieldLabel)(e.label))));
    let f = c.filter(n),
      h = c.filter(e => !n(e));
    for (let e of f) this.progressTracker.updateFieldRequiredStatus(e), this.progressTracker
      .updateMissedProgress(e.label);
    for (let e of h) this.progressTracker.updateFieldRequiredStatus(e);
    if (0 === h.length) return [...e, ...c];
    let g = await this.requestFormAnswers(h, t, {
      updateTimeTrace: !1
    });
    if ("string" == typeof g) return g;
    g && this.mergeComboQuestionAnswer(g, h);
    let y = h.filter(e => p.has((0, d.normalizeEightfoldFieldLabel)(e.label))),
      v = h.filter(e => m.has((0, d.normalizeEightfoldFieldLabel)(e.label))),
      w = h.filter(e => {
        let t = (0, d.normalizeEightfoldFieldLabel)(e.label);
        return !p.has(t) && !m.has(t)
      });
    return w.length > 0 && await this.fillRegularFields(w), await this
      .fillPhoneCountryCodeRules(y, r), v.length > 0 && await this.fillRegularFields(v), [...e,
        ...c
      ]
  }
  async fillPhoneCountryCodeRules(e, t) {
    0 !== e.length && (this.taskQueue.add(async () => {
      for (let r of e) {
        if (r.type !== l.FIELD_TYPE.SELECT) {
          this.progressTracker.updateMissedProgress(r.label);
          continue
        }
        let e = r,
          n = e.$input;
        if (!(n instanceof HTMLInputElement) || "combobox" !== n.getAttribute("role")) {
          this.progressTracker.updateMissedProgress(r.label);
          continue
        }
        let o = (0, c.getEightfoldPhoneCountryCodeSource)(r, this.answer, t);
        await v({
          label: r.label,
          source: o,
          fillCountryCode: async e => await (0, d.fillCountryCodeCombobox)(n, e),
          updateFilled: e => this.progressTracker.updateFilledProgress(e),
          updateMissed: e => this.progressTracker.updateMissedProgress(e)
        })
      }
    }), await this.taskQueue.run())
  }
  getFieldHandlers() {
    return {
      [l.FIELD_TYPE.TEXT]: (e, t) => {
        if (this.shouldSkipConditionalRule(e)) return !1;
        let r = t?.[0];
        if (!r) return;
        let n = String(e?.label ?? "");
        return (0, d.fillInputTextField)((0, f.getEightfoldLiveTextInputByLabel)(n) || e
          .$input, String(r ?? ""), n)
      },
      [l.FIELD_TYPE.SELECT]: (e, t) => !this.shouldSkipConditionalRule(e) && (0, d
        .fillSelectField)(e, t),
      [l.FIELD_TYPE.CHECKBOX]: (e, t) => !this.shouldSkipConditionalRule(e) && (0, d
        .fillCheckboxField)(e, t),
      [l.FIELD_TYPE.RADIOGROUP]: (e, t) => !this.shouldSkipConditionalRule(e) && (0, d
        .fillRadioGroupFiled)(e, t)
    }
  }
  async doFillForm(e = !1) {
    if (!x()) return this.progressTracker.clear(), this.taskQueue.clear(), this.progressTracker
      .generateFinalProgress();
    if (await this.initializeFillForm(), !x()) return this.progressTracker
      .generateFinalProgress();
    let {
      autofillCountry: t,
      phoneCountrySources: r
    } = await this.refreshPhoneCountrySources();
    if (await this.handleResumeUpload(), this.isResumeUploadConfirmed || console.warn(
        "[Eightfold][Resume] upload completion was not confirmed; continuing field autofill"), !
      x()) return this.progressTracker.generateFinalProgress();
    console.info("[Eightfold][Country] applying after resume upload");
    let n = await (0, d.preFillCountry)(t);
    n && await (0, d.waitForCountryDependentFieldsToSettle)();
    let o = await this.extractFormRules(),
      i = o.find(e => (0, d.isEightfoldCountryLabel)(e.label)),
      a = j(i, e => k(e, t));
    if (!a && i && i.type === l.FIELD_TYPE.SELECT && t.trim()) {
      console.info("[Eightfold][Country] retrying before dependent rule extraction");
      try {
        await (0, d.fillSelectField)(i, [], t), await (0, d
          .waitForCountryDependentFieldsToSettle)(), o = await this.extractFormRules(), console
          .info("[Eightfold][Country] dependent rules refreshed", {
            dependentRules: o.filter(e => ["state", "state province", "province", "region"]
              .includes((0, d.normalizeEightfoldFieldLabel)(e.label))).map(e => ({
              label: e.label,
              type: e.type,
              optionCount: e.type === l.FIELD_TYPE.SELECT && Array.isArray(e.options) ?
                e.options.length : 0
            }))
          }), i = o.find(e => (0, d.isEightfoldCountryLabel)(e.label)), a = j(i, e => k(e, t))
      } catch (e) {
        console.warn("[Eightfold][Country] retry failed", {
          reason: e instanceof Error && e.name ? e.name : "unknown_error"
        }), a = !1
      }
    }
    this.progressTracker.setFieldsRequiredStatus(o);
    let s = o.find(e => "gender" === (0, d.normalizeEightfoldFieldLabel)(e.label)),
      u = i?.label || "Country";
    a ? this.progressTracker.updateFilledProgress(u) : this.progressTracker
      .updateMissedProgress(u);
    let c = (0, d.isMicrosoftEightfoldHost)() ? e => (0, d.isUnfillableMicrosoftLabel)(e) : e =>
      !1;
    o.filter(e => c(e.label)).forEach(e => this.progressTracker.updateMissedProgress(e.label));
    let f = o,
      b = o.filter(e => !(0, d.isEightfoldCountryLabel)(e.label) && !c(e.label)),
      v = await this.fetchFormAnswers(b, e);
    if ("string" == typeof v) return v;
    let w = o.filter(e => {
      let t = (0, d.normalizeEightfoldFieldLabel)(e.label);
      return !(0, d.isEightfoldCountryLabel)(e.label) && !m.has(t) && !p.has(t) && !c(e
        .label)
    });
    await this.fillRegularFields(w);
    let S = o.filter(e => p.has((0, d.normalizeEightfoldFieldLabel)(e.label)));
    await this.fillPhoneCountryCodeRules(S, r);
    let E = o.filter(e => m.has((0, d.normalizeEightfoldFieldLabel)(e.label)));
    if (E.length > 0 && await this.fillRegularFields(E), s && s.type === l.FIELD_TYPE.SELECT) {
      let e = I(s, C(s));
      if (!e) {
        let e = D(s, this.answer?.regular);
        e.length > 0 ? (this.taskQueue.add(async () => {
          try {
            await (0, d.fillSelectField)(s, e);
            let t = I(s, C(s));
            t ? this.progressTracker.updateFilledProgress("Gender") : this
              .progressTracker.updateMissedProgress("Gender")
          } catch {
            this.progressTracker.updateMissedProgress("Gender")
          }
        }), await this.taskQueue.run()) : this.progressTracker.updateMissedProgress("Gender")
      }
    }
    let A = Date.now() + g,
      T = !1,
      F = 0;
    for (let t = 0; t < h; t++) {
      if (T) {
        let e = A - Date.now();
        if (e <= 0 || !await this.waitForDynamicFieldMutation(e)) break
      }
      await this.waitForDynamicFieldsToSettle();
      let t = await this.fillNewlyRevealedFields(f, e, r, e => c(e.label));
      if ("string" == typeof t) return t;
      if (t.length === f.length) {
        if (this.hasPendingDynamicSelectHydration) {
          if (F >= y) break;
          F += 1, T = !1
        } else F = 0, T = !0;
        continue
      }
      f = t, A = Date.now() + g, T = !1, F = 0
    }
    return await this.executeSiteSpecificSteps(f), this.finalizeFillForm()
  }
  async runPreFillForm() {
    this.taskQueue.add(d.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules(e = {}) {
    return x() ? await (0, f.extractRules)(e) : []
  }
  getSiteName() {
    return "eightfold"
  }
  async handleResumeUpload() {
    if (!x()) return;
    this.isResumeUploadConfirmed = !0;
    let e = !1;
    this.disableUploadResume ? (await (0, d.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, d.removeResume)();
      let t = document.querySelector('input[type="file"][accept*=".pdf"]');
      if (!t) return;
      e = !0;
      let r = await (0, o.fetchPdfAsBlob)(this.resumeInfo);
      (0, d.isMicrosoftEightfoldHost)() && t.files ? (t.files = r.files, t.dispatchEvent(
          new Event("input", {
            bubbles: !0,
            cancelable: !1
          })), t.dispatchEvent(new Event("change", {
          bubbles: !0,
          cancelable: !1
        })), this.progressTracker.updateFieldRequiredStatus({
          label: "Resume/CV",
          required: !0
        }), this.progressTracker.updateFilledProgress("Resume/CV")) : await (0, i
          .uploadFiles)(t, r, this.progressTracker.updateFieldRequiredStatus, this
          .progressTracker.updateFilledProgress, "Resume/CV"), await this
        .handleDataPrivacyAgreement()
    }), await this.taskQueue.run(), e && (this.isResumeUploadConfirmed = await (0, d
        .waitForUploadComplete)(), this.isResumeUploadConfirmed || this.progressTracker
      .updateMissedProgress("Resume/CV"))
  }
  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(@class, "submit") or contains(text(), "Submit")]'
  }
  async getAutofillSnapshot(e) {
    return await (0, f.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return await (0, f.getFormSnapshot)()
  }
  submitApplication() {
    let e = './/button[@type="submit" or contains(@class, "submit")]',
      t = (0, s.getFirstOrderedNode)(e);
    t && t?.click()
  }
  async handleDataPrivacyAgreement() {
    let e = (0, f.getDataPrivacyAgreementButton)();
    if (e && !(null === e.offsetParent || e.disabled || e.hasAttribute("disabled"))) try {
      await (0, d.agreeDataPrivacyAgreement)(e)
    } catch (e) {}
  }
  constructor(...e) {
    super(...e), this.hasComboQuestions = !0, this.comboQuestionMaxRounds = 4, this
      .comboQuestionSettleDelayMs = 600, this.comboQuestionQuietPeriodMs = 200, this
      .comboQuestionSettleMaxWaitMs = 1600, this.isResumeUploadConfirmed = !0, this
      .hasPendingDynamicSelectHydration = !1
  }
}

