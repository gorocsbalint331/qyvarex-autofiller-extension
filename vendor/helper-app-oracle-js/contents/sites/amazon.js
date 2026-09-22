/**
 * Parcel module id: de7zi
 * Resolved path: contents/sites/amazon.js (oracle restore)
 * Dependencies:
 *   ./operations -> 8ZXaS  =>  src/contents/sites/amazon/operations.js
 *   ./rules -> 1pEJD  =>  src/contents/sites/amazon/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  _tilde_core/phone-country-code.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Amazon", () => y);
var o = e("~contents/methods/answer"),
  i = e("~contents/sites/base-filler"),
  a = e("~core/enums"),
  l = e("~core/phone-country-code"),
  s = e("~core/xpath"),
  u = e("~store/autofillInfo"),
  c = e("./operations"),
  d = e("./rules");
let f = ["button[data-direct-call-identifier]", "a#save-and-continue-form-button",
    "a.btn.btn-primary.mt-5", "button.btn.btn-primary", "div.form-group.submit-button button",
    "div.form-group.submit-button a"
  ],
  p = f.join(", "),
  m = ".application-content .question-form.active, .question-form.active";

function h(e) {
  let t = e.closest?.("button, a");
  return !!t && f.some(e => t.matches(e))
}

function g(e) {
  if (e.disabled || null != e.getAttribute("disabled") || "true" === e.getAttribute(
    "aria-disabled") || "true" === e.getAttribute("aria-hidden") || e.hidden) return !1;
  let t = e.ownerDocument?.defaultView?.getComputedStyle?.(e);
  if (t?.display === "none" || t?.visibility === "hidden") return !1;
  let r = e.getBoundingClientRect?.();
  return !!(r && r.width > 0 && r.height > 0)
}

function b() {
  let e = new Set,
    t = Array.from(document.querySelectorAll(m));
  for (let r of t)
    for (let t of Array.from(r.querySelectorAll(p))) e.add(t);
  if (0 === e.size)
    for (let t of Array.from(document.querySelectorAll(p))) e.add(t);
  let r = Array.from(e),
    n = r.filter(e => !e.closest("#jobright-helper-id") && g(e)),
    o = e => {
      let t = (e.innerText || e.textContent || "").trim().toLowerCase();
      return "save-and-continue-form-button" === e.getAttribute("id") || "continue" === t || t
        .includes("continue") || "submit" === t || t.includes("submit") || "apply" === t || t
        .includes("apply")
    };
  return n.find(e => e.closest("div.form-group.submit-button") && o(e)) || n.find(o) || n[0] || null
}
class y extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (r) return (0, c.fillInputTextField)(e, r, (0, l.resolvePhoneCountryCodeAnswer)(
          this.answer))
      },
      [a.FIELD_TYPE.SELECT]: (e, t) => (0, c.fillSelectField)(e, t),
      [a.FIELD_TYPE.CHECKBOX]: (e, t) => (0, c.fillRadioCheckField)(e, t),
      [a.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, c.fillRadioCheckField)(e, t)
    }
  }
  async doFillForm(e = !1) {
    try {
      await this.initializeFillForm();
      let [t] = await this.extractFormRulesWithSubmitButton();
      this.progressTracker.setFieldsRequiredStatus(t);
      let r = t.filter(e => (0, c.isMainAmazonCountrySelect)(e.$input)),
        n = t.filter(e => !(0, c.isMainAmazonCountrySelect)(e.$input));
      for (let e of r) this.currentRunCountryCommitted ? this.progressTracker
        .updateFilledProgress(e.label) : this.progressTracker.updateMissedProgress(e.label);
      let i = t.some(e => e._resumeUploadMarker);
      if (i) {
        await (0, c.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        let e = t.filter(e => !e._resumeUploadMarker);
        this.progressTracker.setFieldsRequiredStatus(e)
      }
      let a = await this.fetchFormAnswers(n, e);
      if ("string" == typeof a) return a;
      this.formatUserInfo();
      let l = [...(0, o.getRegularOperations)(n, this.answer.regular, this.operationConfig)];
      for (let e of l) try {
        let t = e();
        t && "function" == typeof t.then && await t
      } catch (e) {
        console.warn("Operation execution error:", e)
      }
      let s = await this.runComboQuestionAutofillIfNeeded(t, e);
      if ("string" == typeof s) return s;
      return t = s, (0, c.clickAmazonBlankAreaToCloseDropdowns)(), await this
        .executeSiteSpecificSteps(t), this.finalizeFillForm()
    } catch (e) {
      return console.warn("fillForm error:", e), this.taskQueue.clear(), this.finalizeFillForm()
    }
  }
  async extractFormRules() {
    let [e] = await (0, d.extractRules)();
    return e
  }
  async runPreFillForm() {
    this.currentRunCountryCommitted = !1;
    let e = await (0, u.useAutofillInfoStore).getState().fetchAutofillInfo();
    this.currentRunCountryCommitted = await (0, c.prefillAmazonCountry)(e?.location?.country)
  }
  async filterNewComboQuestionRules(e) {
    let t = [];
    for (let r of e) {
      if ((0, c.isMainAmazonCountrySelect)(r.$input)) {
        this.progressTracker.updateFieldRequiredStatus(r), this.currentRunCountryCommitted ?
          this.progressTracker.updateFilledProgress(r.label) : this.progressTracker
          .updateMissedProgress(r.label);
        continue
      }
      t.push(r)
    }
    return t
  }
  async extractFormRulesWithSubmitButton() {
    return await (0, d.extractRules)()
  }
  getSiteName() {
    return "amazon"
  }
  formatUserInfo() {
    this.answer.regular["How did you hear about this role?"] = "Other", this.answer.regular[
      'If "Other" please specify'] = "jobright.ai", this.answer.regular[
      "If 'Other' please specify"] = "jobright.ai"
  }
  async getAutofillSnapshot(e) {
    return await (0, d.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return await (0, d.getFormSnapshot)()
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    let t = e.closest?.("button, a");
    return t && h(t) ? t : null
  }
  submitApplication() {
    let e = b() || (0, s.getFirstOrderedNode)(
      "//div[contains(concat(' ', normalize-space(@class), ' '), ' form-group ') and contains(concat(' ', normalize-space(@class), ' '), ' submit-button ')]//button[@type=\"button\" and contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]"
      );
    e && e?.click()
  }
  constructor(...e) {
    super(...e), this.hasComboQuestions = !0, this.comboQuestionSettleDelayMs = 300, this
      .currentRunCountryCommitted = !1
  }
}

