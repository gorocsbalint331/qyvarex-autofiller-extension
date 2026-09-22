/**
 * Parcel module id: fVVzT
 * Resolved path: contents/sites/zohorecruit.js (oracle restore)
 * Dependencies:
 *   ./section-results -> 1A34s  =>  _tilde_contents/sites/zohorecruit/section-results.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  _tilde_contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/section-results -> 6WWsC  =>  _tilde_contents/methods/section-results.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~contents/sites/zohorecruit/answer -> 9TR3h  =>  _tilde_contents/sites/zohorecruit/answer.js
 *   ~contents/sites/zohorecruit/location-operation -> joTPk  =>  _tilde_contents/sites/zohorecruit/location-operation.js
 *   ~contents/sites/zohorecruit/operations -> ayFdv  =>  _tilde_contents/sites/zohorecruit/operations.js
 *   ~contents/sites/zohorecruit/progress -> gn723  =>  _tilde_contents/sites/zohorecruit/progress.js
 *   ~contents/sites/zohorecruit/rules -> 6kRQQ  =>  _tilde_contents/sites/zohorecruit/rules.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "ZohoRecruit", () => $);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/methods/dom"),
  s = e("~contents/sites/base-filler"),
  u = e("~contents/sites/zohorecruit/answer"),
  c = e("~contents/sites/zohorecruit/location-operation"),
  d = e("~contents/sites/zohorecruit/operations"),
  f = e("~contents/sites/zohorecruit/progress"),
  p = e("~contents/sites/zohorecruit/rules"),
  m = e("~core/enums"),
  h = e("~contents/methods/section-results"),
  g = e("./section-results"),
  b = e("~utils/trace");

function y() {
  return document.querySelectorAll(".crc-form-row").length > 0
}

function v(e) {
  if (!0 === e) return !0;
  if (!1 === e || null == e) return !1;
  if ("number" == typeof e) return 1 === e;
  let t = String(e).trim().toLowerCase();
  return ["true", "yes", "y", "1", "current", "present"].includes(t)
}

function w(e) {
  let t = String(e ?? "").trim().toLowerCase();
  return ["present", "current", "ongoing"].includes(t)
}

function S(e) {
  return "isCurrent" in e ? v(e.isCurrent) : w(e["End date"] || e.To || e.End)
}

function E(e) {
  return "isCurrent" in e ? v(e.isCurrent) : w(e["End date"] || e.To || e.End)
}

function x(e, t) {
  e instanceof HTMLInputElement && e.checked !== t && e.click()
}
async function C() {
  let e = Array.from(document.querySelectorAll("button.lyte-button, button[type='button']")),
    t = e.find(e => {
      let t = e.textContent?.replace(/\s+/g, " ").trim().toLowerCase();
      return "i'm interested" === t || "i am interested" === t
    });
  return !!t && (t.scrollIntoView({
    block: "center",
    inline: "center"
  }), t.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0
  })), t.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0,
    cancelable: !0
  })), t.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0
  })), !0)
}
async function A() {
  let e = await (0, p.getRules)();
  if (e.length > 0 || y()) return e;
  let t = await C();
  if (!t) return e;
  for (let t = 0; t < 10 && (await new Promise(e => setTimeout(e, 500)), !((e = await (0, p
      .getRules)()).length > 0 || y())); t++);
  return e
}

function k(e) {
  return String(e?.__zohoSemanticType || "")
}

function T(e) {
  return k(e).startsWith("address.")
}

function F(e) {
  return e?.__zohoClusterRoot || e?.$fieldRow || e?.$input || null
}

function I(e, t, r, n, o) {
  let i = [],
    a = new Set,
    l = new Map;
  for (let t of e) {
    if (!T(t)) continue;
    let e = F(t),
      r = l.get(e) || [];
    r.push(t), l.set(e, r)
  }
  let s = e => {
    i.push(async () => {
      await r[e.type]?.(e, t)
    })
  };
  for (let u of e)
    if (!a.has(u)) {
      if (T(u)) {
        let s = F(u),
          c = l.get(s) || [];
        if (c.length > 0) {
          c.forEach(e => a.add(e)), i.push(D(e, c, t, r, n, o));
          continue
        }
      }
      s(u)
    } return i
}

function j(e) {
  let t = e?.regular || {},
    r = ["Phone Country Code", "Country Phone Code"];
  for (let e of r) {
    let r = t[e];
    if (null != r && String(r).trim()) return String(r).trim()
  }
  for (let [e, r] of Object.entries(t)) {
    let t = e.toLowerCase(),
      n = String(r ?? "").trim();
    if (n && t.includes("phone") && t.includes("country") && t.includes("code")) return n
  }
  return e?.country || ""
}

function D(e, t, r, n, o, i) {
  return async () => {
    let a = e => t.find(t => k(t) === e),
      l = e.findIndex(e => t.includes(e)),
      s = e.slice(0, -1 === l ? e.length : l).reverse().find(e => "contact.mobile" === k(e));
    s && await (0, d.waitForZohoPhoneFieldSettled)(s);
    let u = a("address.country"),
      f = a("address.zip"),
      p = a("address.state"),
      m = a("address.city"),
      h = P(["Country", "Pays"], r),
      g = P(["Zip/Postal Code", "Zip Code", "Postal Code", "ZIP", "Code postal"], r),
      b = P(["State/Province", "State", "Province", "\xc9tat/Province", "Etat/Province",
        "\xc9tat", "Etat"
      ], r),
      y = P(["City", "Ville"], r),
      v = !1,
      w = (0, c.isZohoRecruitCityAutocompleteRule)(m);
    v || !w || (v = await i(m, y, g), await O(t, o), console.info(
        "[ZohoRecruit][Address] city-resolve-settled", {
          cityResolveCommitted: v,
          hasPostalCode: !!g,
          postalCodeEmpty: !_(f)
        }), v || o.updateMissedProgress(m.label)), !v && f && g && (v = await (0, d
        .selectZohoAutocompleteOption)(f, g, [y, b, h]), await O(t, o), v || (v = R(t))), v || !
      m || !y || w || (v = await (0, d.selectZohoAutocompleteOption)(m, y, [b, h, g]), await O(
        t, o), v || (v = R(t))), v && await O(t, o, 1200), v || (await N(u, r, n), await N(f, r,
        n), await N(p, r, n), w || await N(m, r, n)), await N(a("address.street"), r, n),
      await O(t, o);
    let S = await L(f, "address.zip");
    S && (0, c.shouldRestoreZohoPostalCode)({
      postalCode: g,
      currentPostalCode: _(S)
    }) && (console.info("[ZohoRecruit][Postal] restore-after-address-settle", {
      cityResolveCommitted: v && w,
      postalRuleRequeried: S !== f
    }), await N(S, r, n), await O(t, o))
  }
}

function P(e, t) {
  for (let r of e) try {
    return String((0, i.findValueInRecord)(r, t) || "").trim()
  } catch {
    continue
  }
  return ""
}

function _(e) {
  let t = e?.$input;
  return String(t?.value ?? "").trim()
}
async function L(e, t) {
  if (!e || e?.$input?.isConnected !== !1) return e;
  let r = await (0, p.getRules)();
  return r.find(r => k(r) === t && (r.label === e.label || r.name && r.name === e.name)) || e
}

function R(e) {
  let t = e.find(e => "address.zip" === k(e)),
    r = e.find(e => "address.city" === k(e)),
    n = e.find(e => "address.state" === k(e)),
    o = e.find(e => "address.country" === k(e)),
    i = _(t),
    a = _(r),
    l = _(n),
    s = _(o);
  return !!(i && (a || l || s)) || !!(a && (l || s))
}
async function O(e, t, r = 300) {
  let n = Date.now();
  for (; Date.now() - n < r;) M(e, t), await new Promise(e => setTimeout(e, 100));
  M(e, t)
}

function M(e, t) {
  for (let r of e) {
    let e = _(r);
    e && !t.fieldStatus.filledFields.includes(r.label) && t.updateFilledProgress(r.label)
  }
}
async function N(e, t, r) {
  e && (_(e) || await r[e.type]?.(e, t))
}
class $ extends s.BaseFiller {
  getFieldHandlers() {
    return {
      [m.FIELD_TYPE.TEXT]: {
        handler: async (e, t) => {
          let r = e.label.toLowerCase();
          r.includes("phone") || r.includes("t\xe9l\xe9phone") || r.includes("mobile") ?
            await (0, d.fillPhoneField)(e, t, j(this.answer), this.answer?.country) : await (
              0, d.fillAutocompleteField)(e, t)
        },
        options: {
          expectArray: !1
        }
      },
      [m.FIELD_TYPE.DATE]: {
        handler: (e, t) => (0, d.fillZohoDateField)(e, t),
        options: {
          expectArray: !1
        }
      },
      [m.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, l.fillCheckBoxesField)(e, [t]),
        options: {
          expectArray: !1
        }
      },
      [m.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, d.fillZohoDropdownDirectly)(e, t),
        options: {
          expectArray: !1
        }
      },
      [m.FIELD_TYPE.MULTI_SELECT]: {
        handler: (e, t) => (0, d.fillMultiCheckbox)(e, t),
        options: {
          expectArray: !1
        }
      }
    }
  }
  getSiteName() {
    return "zohorecruit"
  }
  async runPreFillForm() {
    this.taskQueue.add(d.preFillForm), await this.taskQueue.run(), await (0, d.clearAllPopups)()
  }
  async extractFormRules() {
    return A()
  }
  formatAnswer(e) {
    return (0, u.formatAnswer)(e, e.country)
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.snapshotRules = t, this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    if ("string" == typeof r) return r;
    (0, a.checkpoint)();
    let n = I(t, this.answer.regular, this.operationConfig, this.progressTracker, (e, t, r) =>
      this.resolveZohoCity(e, t, r));
    for (let e of n) this.taskQueue.add(e);
    await this.taskQueue.run(), this.disableUploadResume ? this.progressTracker
      .updateMissedProgress("Resume/CV") : this.taskQueue.add(async () => {
        await (0, d.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), this.coverLetter?.coverLetterId && this.taskQueue.add(async () => {
        await (0, d.uploadCoverLetter)(this.coverLetter, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      });
    let o = t.find(e => "SKILL_SET" === e.type || e.label.toLowerCase().includes("skill") || e
        .label.toLowerCase().includes("comp\xe9tence") || e.$input?.classList.contains(
          "skillset-input")),
      l = o?.label;
    if (o && l && this.answer.skills && this.answer.skills.length > 0) {
      this.progressTracker.updateFieldRequiredStatus({
        label: l,
        required: o.required
      }), (0, a.updateCurrentField)(l);
      try {
        await (0, a.withSkip)(async () => {
          let e = await (0, d.fillZohoSkillSetField)(o, this.answer.skills);
          e ? this.progressTracker.updateFilledProgress(l) : this.progressTracker
            .updateMissedProgress(l)
        })
      } catch (e) {
        if (e instanceof a.CancelledError) throw e;
        e instanceof a.SkippedError || console.error("[ZohoRecruit] skills fill error:", e),
          this.progressTracker.updateMissedProgress(l)
      }
    }
    for (let e = 1; e < this.answer.education.length; e++) await (0, d.addEducationRow)(e);
    let s = await (0, p.getEduRules)(),
      u = (0, h.createSequentialSectionResultReporter)("education", this.progressTracker);
    for (let e = 0; e < this.answer.education.length; e++) {
      let t = this.answer.education[e],
        r = s[e];
      if (r && r.children) {
        let n = r.children,
          o = (0, g.createZohoRecordResult)("education", e, r, t, u),
          a = n.filter(e => e.type === m.FIELD_TYPE.TEXT),
          l = (0, i.getRegularOperations)(a, t, o.operationConfig(this.operationConfig));
        for (let e of l) await e();
        let s = n.find(e => e.label.toLowerCase().includes("currently pursuing"));
        if (s && s.$input) {
          let e = S(t);
          await o.run(s, e, () => {
            let t = s.$input;
            return x(t, e), t instanceof HTMLInputElement && t.checked === e
          })
        }
        let c = n.filter(e => e.type === m.FIELD_TYPE.SELECT);
        for (let e of c) {
          let r = t[e.name] || t[e.label];
          if (!r) {
            let n = e.label.toLowerCase();
            if (n.includes("start") || n.includes("from")) {
              let e = t["Start date"] || t.From;
              if (e && e.includes("/")) {
                let [t, o] = e.split("/");
                r = n.includes("month") ? t : o
              }
            } else if (n.includes("end") || n.includes("to")) {
              let e = t["End date"] || t.To;
              if (e && e.includes("/")) {
                let [t, o] = e.split("/");
                r = n.includes("month") ? t : o
              }
            }
          }
          if (r) try {
            await o.run(e, r, () => (0, d.fillZohoDropdownDirectly)(e, r))
          } catch (t) {
            console.error(`[Zoho-Manual] \u586b\u5145 ${e.label} \u5931\u8d25`, t)
          }
        }
      }
    }(0, f.shouldMarkZohoSectionFilled)(this.answer.education, s) && this.progressTracker
      .updateFilledProgress("Education");
    for (let e = 1; e < this.answer.workExperience.length; e++) await (0, d.addExperienceRow)(
    e);
    let c = await (0, p.getExpRules)(),
      b = (0, h.createSequentialSectionResultReporter)("employment", this.progressTracker);
    for (let e = 0; e < this.answer.workExperience.length; e++) {
      let t = this.answer.workExperience[e],
        r = c[e];
      if (r && r.children) {
        let n = r.children,
          o = (0, g.createZohoRecordResult)("employment", e, r, t, b),
          a = n.filter(e => e.type === m.FIELD_TYPE.TEXT),
          l = (0, i.getRegularOperations)(a, t, o.operationConfig(this.operationConfig));
        for (let e of l) await e();
        let s = n.filter(e => e.type === m.FIELD_TYPE.SELECT);
        for (let e of s) {
          let r = t[e.name] || t[e.label];
          if (!r) {
            let n = e.label.toLowerCase();
            if (n.includes("start") || n.includes("from")) {
              let e = t["Start date"] || t.From;
              if (e && e.includes("/")) {
                let [t, o] = e.split("/");
                r = n.includes("month") ? t : o
              }
            } else if (n.includes("end") || n.includes("to")) {
              let e = t["End date"] || t.To;
              if (e) {
                if (e.toLowerCase().includes("present")) n.includes("month"), r = "";
                else if (e.includes("/")) {
                  let [t, o] = e.split("/");
                  r = n.includes("month") ? t : o
                }
              }
            }
          }
          if (r) try {
            await o.run(e, r, () => (0, d.fillZohoDropdownDirectly)(e, r)), await new Promise(
              e => setTimeout(e, 300))
          } catch (t) {
            console.error(
              `[Zoho-Manual] \u5de5\u4f5c\u7ecf\u5386 ${e.label} \u586b\u5145\u5931\u8d25`,
              t)
          }
        }
        let u = n.find(e => e.label.toLowerCase().includes("currently work") || e.name
          .toLowerCase().includes("is_current"));
        if (u && u.$input) {
          let e = E(t);
          await o.run(u, e, () => {
            let t = u.$input;
            return x(t, e), t instanceof HTMLInputElement && t.checked === e
          })
        }
      }
    }(0, f.shouldMarkZohoSectionFilled)(this.answer.workExperience, c) && this.progressTracker
      .updateFilledProgress("Employment"), this.taskQueue.add(async () => {
        let e = document.querySelectorAll("input");
        e.forEach(e => e.dispatchEvent(new Event("blur"))), await (0, d
          .fillAgreementCheckbox)()
      }), await this.taskQueue.run();
    let y = await this.finalizeFillForm();
    return await this.bindSubmitButtonTracking(t), y
  }
  async resolveZohoCity(e, t, r) {
    let n = e?.$input;
    if (!n || !(0, c.isZohoRecruitCityAutocompleteRule)(e)) return !1;
    let i = (0, c.getZohoRecruitCityOriginalAnswer)(this.answer, t, r),
      a = Date.now();
    if (console.info("[ZohoRecruit][City] resolve-start", {
        answerSource: i.source,
        hasOriginalAnswer: !!i.value
      }), !i.value) return await (0, d.clearZohoAutocompleteForInput)(n), !1;
    try {
      let t = (0, c.buildZohoRecruitCityOperation)({
          pageUrl: window.location.href,
          originalAnswer: i.value
        }),
        r = await (0, o.sendToBackground)({
          name: "resolveAutofillOperation",
          body: {
            operation: t,
            source: "zohorecruit"
          }
        }),
        l = (0, c.getZohoRecruitResolvedCityValue)(r);
      if (console.info("[ZohoRecruit][City] resolve-result", {
          action: r?.result?.action ?? "missing",
          selectedCount: r?.result?.selected_values?.length ?? 0,
          elapsedMs: Date.now() - a
        }), !l) return await (0, d.clearZohoAutocompleteForInput)(n), !1;
      let s = await (0, d.selectZohoAutocompleteOption)(e, l, [], {
        exactOnly: !0
      });
      return console.info("[ZohoRecruit][City] commit-result", {
        committed: s,
        elapsedMs: Date.now() - a
      }), s
    } catch (e) {
      return console.warn("[ZohoRecruit][City] resolve-failed", {
        reason: e instanceof Error ? e.message : "unknown-error",
        elapsedMs: Date.now() - a
      }), await (0, d.clearZohoAutocompleteForInput)(n), !1
    }
  }
  async getAutofillSnapshot(e) {
    return this.snapshotRules = e, this.fixedAutofillSnapshot = await (0, p.getFormSnapshot)(e),
      this.fixedAdditionalAutofillData = await (0, p.getAdditionalFormSnapshotData)(e), (0, b
        .trackEvent)("zohorecruit_form_autofill_answer", {
        formUrl: window.location.href,
        answer: {
          ...this.fixedAutofillSnapshot,
          ...this.fixedAdditionalAutofillData
        }
      }), this.fixedAutofillSnapshot
  }
  async getSubmitSnapshot() {
    let e = await (0, p.getFormSnapshot)(this.snapshotRules);
    return this.latestAdditionalSubmitData = await (0, p.getAdditionalFormSnapshotData)(this
      .snapshotRules), e
  }
  getAdditionalAutofillSnapshotData() {
    return this.fixedAdditionalAutofillData
  }
  getAdditionalSubmitSnapshotData() {
    return this.latestAdditionalSubmitData
  }
  normalizeAutofillAnswerPairTrackingData(e) {
    return {
      ...e,
      formUrl: window.location.href,
      autofillSnapshot: this.fixedAutofillSnapshot,
      additionalAutofillData: this.fixedAdditionalAutofillData
    }
  }
  getSubmitButtonSelector() {
    return './/*[@id="cw-submit-btn"]//button[@type="submit"]'
  }
  checkCoverLetter() {
    (0, d.checkCoverLetter)()
  }
  submitApplication() {
    (0, d.submitApplication)()
  }
  constructor(...e) {
    super(...e), this.snapshotRules = [], this.fixedAutofillSnapshot = {}, this
      .fixedAdditionalAutofillData = {}, this.latestAdditionalSubmitData = {}
  }
}

