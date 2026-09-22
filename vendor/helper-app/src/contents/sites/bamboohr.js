/**
 * Parcel module id: flUgg
 * Resolved path: src/contents/sites/bamboohr.js
 * Dependencies:
 *   ./rules -> bxLeu  =>  src/contents/sites/bamboohr/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/bamboohr/answer -> 648AA  =>  src/contents/sites/bamboohr/answer.js
 *   ~contents/sites/bamboohr/operations -> gz0J8  =>  src/contents/sites/bamboohr/operations.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Bamboohr", () => m);
var o = e("~contents/methods/answer"),
  i = e("~contents/sites/base-filler"),
  a = e("~contents/sites/bamboohr/answer"),
  l = e("~contents/sites/bamboohr/operations"),
  s = e("~contents/methods/dom"),
  u = e("~core/enums"),
  c = e("~core/xpath"),
  d = e("~store/autofillInfo"),
  f = e("~utils/delay"),
  p = e("./rules");
class m extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [u.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, l.fillInputField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [u.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, l.fillCustomCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [u.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, l.fillCustomSelectField)(e.$input, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = [];
    (0, l.injectStyle)();
    try {
      t = await this.extractFormRules();
      let r = await this.fetchFormAnswers(t, e);
      if ("string" == typeof r) return r
    } finally {
      (0, l.removeStyle)()
    }
    return await this.fillRegularFields(t), await this.handleResumeUpload(), await this
      .executeSiteSpecificSteps(t), await this.finalizeFillForm()
  }
  async runPreFillForm() {
    await (0, d.useAutofillInfoStore).getState().fetchAutofillInfo(), this.taskQueue.add(l
      .preFillForm), await this.taskQueue.run();
    let e = Array.from(document.querySelectorAll("button")).find(e => e.textContent?.trim() ===
      "Apply for This Job");
    e && e.click(), await this.waitForApplicationForm(), (0, d.useAutofillInfoStore).getState()
      .country && await this.fillCountryField({
        allowFallback: !1,
        refreshRule: !0,
        useAnswer: !1
      })
  }
  async extractFormRules() {
    let e = await (0, p.getRules)();
    (0, p.findAndRemoveRule)(e, "Resume"), this.progressTracker.setFieldsRequiredStatus(e);
    let t = e.filter(e => e.type !== u.FIELD_TYPE.BAMBOOHR_SPECIAL);
    return this.countryRule = (0, p.findAndRemoveRule)(t, "Country"), t
  }
  getSiteName() {
    return "bamboohr"
  }
  formatAnswer(e) {
    return (0, a.formatAnswer)(e)
  }
  async getCountryRule(e, t = !0) {
    return !e && this.countryRule?.$input?.isConnected || (this.countryRule = this
      .getLiveCountryRule(), !this.countryRule && t && (this.countryRule = (0, p
        .findAndRemoveRule)(await (0, p.getRules)(), "Country"))), this.countryRule
  }
  async waitForApplicationForm() {
    for (let e = 0; e < 20; e++) {
      if (document.querySelector("#careerApplicationForm") || document.querySelector(
          "form#job-application-form")) return;
      await (0, f.delay)(250)
    }
  }
  getLiveCountryRule() {
    let e = Array.from(document.querySelectorAll(`#careerApplicationForm div.fab-FormRow,
        form#job-application-form .MuiFormControl-root`));
    for (let t of e) {
      let e = t.querySelector("label"),
        r = e?.textContent?.replaceAll("*", "").trim();
      if ("Country" !== r) continue;
      let n = t.querySelector(".fab-Select .fab-SelectToggle");
      if (!n) break;
      return {
        type: u.FIELD_TYPE.SELECT,
        label: "Country",
        required: e.classList.contains("fab-Label--required") || !!e.querySelector(
          ".MuiFormLabel-asterisk"),
        options: [],
        $input: n,
        $label: e
      }
    }
    return null
  }
  isCountrySelected(e, t) {
    let r = e.$input.querySelector(".fab-SelectToggle__content")?.textContent?.trim();
    return r === t
  }
  async fillCountryField(e = {}) {
    let t = await this.getCountryRule(!!e.refreshRule, !1 !== e.allowFallback);
    t && (this.taskQueue.add(async () => {
      try {
        let r = (0, a.getBamboohrCountryFillValue)(!1 === e.useAnswer ? null : this
            .answer, (0, d.useAutofillInfoStore).getState().country),
          n = t.$input.querySelector(".fab-SelectToggle__content")?.textContent?.trim();
        if (console.debug("[BambooHR][Country] prefill-start", {
            currentCountry: n,
            targetCountry: r
          }), this.isCountrySelected(t, r)) {
          console.debug("[BambooHR][Country] prefill-skip-already-selected"), !1 !== e
            .updateProgress && this.progressTracker.updateFilledProgress("Country");
          return
        }
        await (0, l.fillCustomSelectField)(t.$input, [r]);
        let o = t.$input.querySelector(".fab-SelectToggle__content")?.textContent
        ?.trim();
        console.debug("[BambooHR][Country] prefill-result", {
          committed: o === r,
          selectedCountry: o,
          targetCountry: r
        }), !1 !== e.updateProgress && this.progressTracker.updateFilledProgress(
          "Country")
      } catch (t) {
        console.error("An unexpected error occurred:", t), !1 !== e.updateProgress &&
          this.progressTracker.updateMissedProgress("Country")
      }
    }), await this.taskQueue.run())
  }
  async fillRegularFields(e) {
    let t = (0, p.findAndRemoveRule)(e, "Veteran Status"),
      r = [...(0, o.getRegularOperations)(e, this.answer.regular, this.operationConfig)];
    for (let e of (t && r.push(async () => {
        let e = (0, o.ensureArray)(this.answer.regular["Veteran Status"]),
          r = await (0, l.fillVeteranField)(t, e);
        r ? this.progressTracker.updateFilledProgress("Veteran Status") : this
          .progressTracker.updateMissedProgress("Veteran Status")
      }), r)) this.taskQueue.add(e);
    await this.taskQueue.run()
  }
  async handleResumeUpload() {
    this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this
      .taskQueue.add(async () => {
        await (0, l.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      })
  }
  async checkCoverLetter() {
    (0, s.postCoverLetterStatus)((0, l.getBamboohrCoverLetterStatus)())
  }
  async executeSiteSpecificSteps(e) {
    let t = (0, l.getBamboohrCoverLetterStatus)();
    t && (this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: !1
      }), this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName && this
      .taskQueue.add(async () => {
        let e = await (0, l.uploadCoverLetter)(this.coverLetter, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        e || this.progressTracker.updateMissedProgress("Cover Letter")
      })), this.taskQueue.add(() => {
      (0, l.blurPage)()
    }), await this.taskQueue.run(), await this.bindSubmitButtonTracking(e)
  }
  getSubmitButtonSelector() {
    return './/*[child::span[contains(text(), "Submit Application")]]'
  }
  async getAutofillSnapshot(e) {
    return (0, a.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, a.getFormSnapshot)()
  }
  submitApplication() {
    let e = (0, c.getFirstOrderedNodeSafe)(
      './/button[child::span[text()="Submit Application"]]');
    (0, l.submitObserver)(e), e && e.click()
  }
  constructor(...e) {
    super(...e), this.countryRule = null
  }
}

