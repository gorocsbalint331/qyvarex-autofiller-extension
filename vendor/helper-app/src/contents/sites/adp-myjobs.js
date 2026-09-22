/**
 * Parcel module id: i9smx
 * Resolved path: src/contents/sites/adp-myjobs.js
 * Dependencies:
 *   ./combo-questions -> cVef7  =>  src/contents/sites/adp-myjobs/combo-questions.js
 *   ./location -> M5XRV  =>  src/contents/sites/adp-myjobs/location.js
 *   ./operations -> 69xYI  =>  src/contents/sites/adp-myjobs/operations.js
 *   ./rules -> 7wDqa  =>  src/contents/sites/adp-myjobs/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isAdpMyJobsTrackingButton", () => h), n.export(r, "AdpMyJobs",
  () => b);
var o = e("~contents/methods/answer"),
  i = e("~contents/sites/base-filler"),
  a = e("~core/enums"),
  l = e("~core/phone-country-code"),
  s = e("~core/xpath"),
  u = e("~store/autofillInfo"),
  c = e("./combo-questions"),
  d = e("./location"),
  f = e("./operations"),
  p = e("./rules");
let m = 8;

function h(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = e.disabled || null !== e.getAttribute("disabled") || "true" === e.getAttribute(
    "aria-disabled");
  if (t) return !1;
  let r = (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || e
    .getAttribute("title") || "").replace(/\s+/g, " ").trim().toLowerCase();
  return !!r && ("continue" === r || "next" === r || "submit" === r || "apply" === r || r.includes(
    "continue") || r.includes("submit application"))
}

function g(e) {
  if (e.type !== a.FIELD_TYPE.SELECT) return !1;
  let t = e.$input?.closest?.("adp-form-group[data-name]")?.getAttribute?.("data-name")?.toLowerCase
    ?.() || "";
  return "country" === t || "state" === t
}
class b extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: (e, t) => {
        if (!(0, p.shouldFillAdpMyJobsPhoneRule)(e, this.primaryPhoneCountryCodeCommitted))
          return console.debug("[ADP MyJobs][PhoneCountryCode] skipped phone write", {
            countryCodeCommitted: !1
          }), !1;
        let r = t?.[0];
        if (!r) return e.description === l.LOCAL_PHONE_DESCRIPTION && console.debug(
          "[ADP MyJobs][PhoneCountryCode] missing phone answer"), !1;
        let n = e.description === l.LOCAL_PHONE_DESCRIPTION ? (0, l.resolveNationalPhoneValue)
          (r, this.answer) : String(r ?? "");
        return e.description === l.LOCAL_PHONE_DESCRIPTION ? (0, f.fillAdpMyJobsPhoneNumber)(e
          .$input, n) : (0, f.fillInputTextField)(e.$input, n)
      },
      [a.FIELD_TYPE.DATE]: (e, t) => {
        if (t && 0 !== t.length) return (0, f.fillDateField)(e.$input, t)
      },
      [a.FIELD_TYPE.SELECT]: async (e, t) => {
        if (e.label === l.PHONE_COUNTRY_CODE_LABEL) {
          let r = await (0, f.fillAdpMyJobsPhoneCountryCode)(e, t);
          return this.primaryPhoneCountryCodeCommitted = r, r
        }
        let r = (0, d.getAdpMyJobsCurrentLocationSelectValue)(e, t, this.currentRunLocation);
        if (void 0 !== r) return (0, f.fillSelectField)(e, r)
      },
      [a.FIELD_TYPE.CHECKBOX]: (e, t) => (0, f.fillCheckboxField)(e, t),
      [a.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, f.fillRadioGroupFiled)(e, t)
    }
  }
  async runPreFillForm() {
    this.currentRunLocation = {
      country: "",
      state: ""
    };
    let e = await (0, u.useAutofillInfoStore).getState().fetchAutofillInfo();
    this.currentRunLocation = (0, d.getAdpMyJobsAutofillLocation)(e), this.taskQueue.add(f
      .preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, p.extractRules)()
  }
  async fillRegularFields(e) {
    this.primaryPhoneCountryCodeCommitted = !1;
    let t = e.filter(e => !g(e)),
      r = [...(0, o.getRegularOperations)(t, this.answer.regular, this.operationConfig)];
    for (let e of r) this.taskQueue.add(e);
    await this.taskQueue.run()
  }
  getSiteName() {
    return "adp-myjobs"
  }
  async handleResumeUpload() {
    (0, f.hasAdpMyJobsResumeUploadUI)() && (this.disableUploadResume ? (await (0, f
        .removeResume)(), this.progressTracker.updateMissedProgress("Resume/CV")) : this
      .taskQueue.add(async () => {
        await (0, f.removeResume)();
        let e = await (0, f.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        e || (this.progressTracker.updateFieldRequiredStatus({
          label: "Resume/CV",
          required: !0
        }), this.progressTracker.updateMissedProgress("Resume/CV"))
      }), await this.taskQueue.run())
  }
  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(@class, "submit") or contains(text(), "Submit")]'
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    let t = e.closest("button, sdf-button, [role='button']");
    return t && h(t) ? t : null
  }
  async getAutofillSnapshot(e) {
    return await (0, p.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return await (0, p.getFormSnapshot)()
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    if (this.progressTracker.setFieldsRequiredStatus(t), 0 === t.length && (0, f
        .hasAdpMyJobsResumeUploadUI)()) return console.info(
      "[ADP MyJobs][ResumeUpload] resume-only-page", {
        rulesCount: t.length,
        disableUploadResume: this.disableUploadResume
      }), await this.handleResumeUpload(), this.finalizeFillForm();
    let r = await this.fetchFormAnswers(t, e);
    if ("string" == typeof r) return r;
    let n = !!document.querySelector(
    '.page-content-container[aria-label="Employment History"]');
    if (n) {
      let e = this.answer?.workExperience?.length || 0;
      e > 0 && await (0, f.ensureEmploymentEmployerCount)(e)
    }
    await this.handleResumeUpload(), await this.fillRegularFields(t);
    let i = await (0, f.fillAutofillInfoContactLocationSelects)(this.currentRunLocation);
    if (i.country && this.progressTracker.updateFilledProgress("Country"), i.state && (this
        .progressTracker.updateFilledProgress("State"), this.progressTracker
        .updateFilledProgress("Province")), (0, c.shouldRunAdpMyJobsComboQuestionAutofill)())
      for (let r = 0; r < m; r++) {
        let r = await this.runComboQuestionAutofillIfNeeded(t, e);
        if ("string" == typeof r) return r;
        if (r.length === t.length) break;
        t = r
      }
    if (n && (this.answer?.workExperience?.length || 0) > 0) {
      let e = await (0, p.extractEmploymentRulesForFillFromPage)(),
        t = (0, o.getEmploymentOperations)(e, this.answer.workExperience, this.operationConfig,
          void 0, (0, o.sectionProgressCallbacks)("Employment", this.progressTracker));
      for (let e of t) this.taskQueue.add(e);
      await this.taskQueue.run()
    } else await this.fillEducationAndEmployment(t);
    return await this.executeSiteSpecificSteps(t), this.finalizeFillForm()
  }
  submitApplication() {
    let e = './/button[@type="submit" or contains(@class, "submit")]',
      t = (0, s.getFirstOrderedNode)(e);
    t && t?.click()
  }
  constructor(...e) {
    super(...e), this.hasComboQuestions = !0, this.comboQuestionSettleDelayMs = 800, this
      .currentRunLocation = {
        country: "",
        state: ""
      }, this.primaryPhoneCountryCodeCommitted = !1
  }
}

