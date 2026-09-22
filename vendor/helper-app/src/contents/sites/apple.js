/**
 * Parcel module id: c6v3o
 * Resolved path: src/contents/sites/apple.js
 * Dependencies:
 *   ../base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/rules -> 3cWKC  =>  src/contents/methods/rules.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/apple/answer -> 1vP8Z  =>  src/contents/sites/apple/answer.js
 *   ~contents/sites/apple/country -> g9Qd1  =>  src/contents/sites/apple/country.js
 *   ~contents/sites/apple/operations -> dcxvW  =>  src/contents/sites/apple/operations.js
 *   ~contents/sites/apple/rules -> bPSBK  =>  src/contents/sites/apple/rules.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Apple", () => v);
var o = e("~contents/methods/cancellation"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/rules"),
  l = e("~contents/methods/dom"),
  s = e("~contents/methods/track"),
  u = e("~contents/sites/apple/operations"),
  c = e("~contents/sites/apple/answer"),
  d = e("~contents/sites/apple/country"),
  f = e("~contents/sites/apple/rules"),
  p = e("~core/dom"),
  m = e("~core/enums"),
  h = e("~store/autofillInfo"),
  g = e("~utils/delay"),
  b = e("../base-filler");
let y = "apple";
class v extends b.BaseFiller {
  constructor() {
    super(), this.continueButtonHandler = null, this.activeFillPromise = null, this
      .lastFillFromAgent = !1, this.continueRefillCaptureHandler = null, this
      .lastContinueRefillAt = 0, this.coverLetterStatusObserver = null, this
      .coverLetterStatusTimer = null, this.lastCoverLetterStatus = null, this
      .currentRunCountryCommitted = !1, this.bindCoverLetterStatusObserver()
  }
  getFieldHandlers() {
    return {
      [m.FIELD_TYPE.TEXT]: {
        handler: (e, t) => {
          if ("Skills" === e.label || "apply-skills-typeahead-suggestion-textbox" === e.$input
            .id) {
            let e = this.answer?.skills;
            return (0, u.fillSkills)(e)
          }
          return (0, u.fillInputTextField)(e.$input, t, e.label)
        },
        options: {
          expectArray: !1
        }
      },
      [m.FIELD_TYPE.LISTBOX]: {
        handler: (e, t) => {
          if ("Skills" === e.label || e.$input?.id ===
            "apply-skills-typeahead-suggestion-textbox") {
            let e = this.answer?.skills?.length ? this.answer.skills : t;
            return (0, u.fillSkills)(e)
          }
          return (0, u.fillListbox)(e.$input, t, e.label)
        },
        options: {
          expectArray: !1
        }
      },
      [m.FIELD_TYPE.SELECT]: {
        handler: (e, t) => e.$input instanceof HTMLSelectElement ? (0, u.fillSelectField)(e
          .$input, t, e.label) : (0, u.fillCustomDropdown)(e.$input, t, e.label),
        options: {
          expectArray: !0
        }
      },
      [m.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, u.fillRadioGroup)(e, t),
        options: {
          expectArray: !0
        }
      },
      [m.FIELD_TYPE.DATE]: {
        handler: (e, t) => (0, u.fillSplitDate)(e, t),
        options: {
          expectArray: !1
        }
      }
    }
  }
  async extractFormRules() {
    return await (0, f.getRules)()
  }
  getSiteName() {
    return y
  }
  formatAnswer(e) {
    return (0, c.formatAnswer)(e)
  }
  async getAutofillSnapshot() {
    return (0, f.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, f.getFormSnapshot)()
  }
  async executeSiteSpecificSteps() {}
  async checkCoverLetter() {
    this.syncCoverLetterStatus(!0)
  }
  syncCoverLetterStatus(e = !1) {
    let t = (0, u.getAppleCoverLetterStatus)();
    (e || t !== this.lastCoverLetterStatus) && (this.lastCoverLetterStatus = t, (0, l
      .postCoverLetterStatus)(t))
  }
  scheduleCoverLetterStatusSync(e = !1) {
    this.coverLetterStatusTimer && window.clearTimeout(this.coverLetterStatusTimer), this
      .coverLetterStatusTimer = window.setTimeout(() => {
        this.syncCoverLetterStatus(e)
      }, 150)
  }
  bindCoverLetterStatusObserver() {
    if (this.coverLetterStatusObserver || !document.body) {
      this.scheduleCoverLetterStatusSync(!0);
      return
    }
    this.coverLetterStatusObserver = new MutationObserver(() => {
      this.scheduleCoverLetterStatusSync()
    }), this.coverLetterStatusObserver.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      characterData: !0
    }), this.scheduleCoverLetterStatusSync(!0)
  }
  async doFillForm(e) {
    if (this.lastFillFromAgent = e, this.bindContinueRefillListener(), this.activeFillPromise)
      return await this.activeFillPromise;
    this.activeFillPromise = this.runFillForm(e);
    try {
      return await this.activeFillPromise
    } finally {
      this.activeFillPromise = null
    }
  }
  getCurrentStepFingerprint() {
    let e = document.querySelector(
        'li.apply-progress-step[aria-current="step"] .apply-progress-label span'),
      t = e?.textContent?.trim().toLowerCase() || "",
      r = document.getElementById("apply-profileInformation-form") || document.querySelector(
        "main"),
      n = r?.getAttribute("id") || r?.getAttribute("aria-label") || r?.className || "";
    return `${t}::${n}`
  }
  bindContinueRefillListener() {
    if (this.continueRefillCaptureHandler) return;
    let e = 2500;
    this.continueRefillCaptureHandler = t => {
      let r = t.target;
      if (!(r instanceof Element)) return;
      let n = r.closest("#apply-step-continue-button");
      if (!n?.isConnected || n.disabled || "true" === n.getAttribute("aria-disabled")) return;
      let o = this.getCurrentStepFingerprint(),
        i = Date.now();
      i - this.lastContinueRefillAt < e || (this.lastContinueRefillAt = i, window.setTimeout(
      () => {
        let e = Date.now(),
          t = () => {
            let r = this.getCurrentStepFingerprint();
            if (r && r !== o) {
              this.scheduleCoverLetterStatusSync(!0), this.fillForm(this
                .lastFillFromAgent);
              return
            }
            Date.now() - e > 8e3 || window.setTimeout(t, 300)
          };
        t()
      }, 1200))
    }, document.addEventListener("click", this.continueRefillCaptureHandler, !0)
  }
  async runFillForm(e = !1) {
    this.resetFalconResponseAccumulator(), await this.taskQueue.run();
    let t = document.querySelector(
        'li.apply-progress-step[aria-current="step"] .apply-progress-label span'),
      r = t?.textContent?.trim().toLowerCase() || "";
    if (r.includes("resume") && r.includes("add")) {
      this.timeTrace.rulesParseStartTime = Date.now(), this.progressTracker.clear(), this
        .taskQueue.clear(), this.disableUploadResume || (this.taskQueue.add(async () => {
          await (0, u.uploadResume)(this.resumeInfo, this.progressTracker
            .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
        }), await this.taskQueue.run());
      let e = (0, f.getFormSnapshot)(),
        t = document.getElementById("apply-step-continue-button");
      return t && (this.continueButtonHandler && t.removeEventListener("click", this
          .continueButtonHandler), this.continueButtonHandler = (0, u.submitHandler).bind(
          null, e), t.addEventListener("click", this.continueButtonHandler)), (0, s.postStatus)(
          "filling", this.progressTracker.fieldStatus, this.timeTrace), this.progressTracker
        .generateFinalProgress()
    }
    if (this.timeTrace.rulesParseStartTime = Date.now(), this.progressTracker.clear(), this
      .taskQueue.clear(), r.includes("profile") && r.includes("information")) {
      let e = document.getElementById("manualOption"),
        t = document.getElementById("resumeOption");
      if ((e || t) && (this.taskQueue.add(u.selectManualFillOption), await this.taskQueue.run(),
          await (0, u.waitPageClean)(), await (0, g.delay)(1200), !document.getElementById(
            "apply-profileInformation-form"))) return console.warn(
          "[Apple] Profile Information form did not appear after selecting manual fill"), (0,
          s.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), this
        .progressTracker.generateFinalProgress()
    }
    this.taskQueue.add(u.preclickAddButtons), await this.taskQueue.run(), this
      .currentRunCountryCommitted = !1;
    let n = null;
    try {
      n = await (0, h.useAutofillInfoStore).getState().fetchAutofillInfo()
    } catch {
      console.warn("[Apple][Country] fresh Autofill Information fetch failed")
    }(0, o.checkpoint)();
    let l = await (0, d.prefillAppleCountry)(n?.location?.country, document, {
      checkpoint: o.checkpoint
    });
    this.currentRunCountryCommitted = l.committed;
    let m = await (0, f.getRules)(),
      b = m.filter(e => !(0, d.isMainAppleCountryRule)(e)),
      v = l.dependentsSettled ? [] : b.filter(d.isAppleCountryDependentRule),
      w = l.dependentsSettled ? b : b.filter(e => !(0, d.isAppleCountryDependentRule)(e));
    this.progressTracker.setFieldsRequiredStatus(m);
    let S = m.filter(d.isMainAppleCountryRule);
    for (let e of S) this.currentRunCountryCommitted ? this.progressTracker
      .updateFilledProgress(e.label) : this.progressTracker.updateMissedProgress(e.label);
    if ("ambiguous" === l.discovery) {
      for (let e of v) this.progressTracker.updateMissedProgress(e.label);
      return console.warn(
          "[Apple][Country] skipped stage: main geographic Country controls are ambiguous"), (0,
          s.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), this
        .progressTracker.generateFinalProgress()
    }
    let E = () => ({
      education: [],
      workExperience: [],
      skills: [],
      regular: {}
    });
    try {
      let t = (0, a.filterRulesByLabel)(w, []);
      if (t.length > 0) {
        this.token || (this.token = await (0, i.getSiteToken)()), this.timeTrace
          .requestStartTime = Date.now();
        let r = this.captureFalconResponseRun(),
          n = await (0, i.getElementRules)(t, y, this.token, e, this.resumeInfo.id, this
            .resumeInfo.tailorId);
        this.recordFalconResponse(n, r), this.answer = (0, c.formatAnswer)(n)
      } else this.answer = E()
    } catch (e) {
      if (e instanceof i.HTTPError || e instanceof i.ResumeMissingCodeError) return (0, s
        .sendHttpStatusMessage)(e.message), e.message;
      throw e
    }(0, o.checkpoint)();
    let x = (0, f.getSubmitButtonText)();
    if ((0, s.bindSubmitButton)(x, this.progressTracker.fieldStatus, this.timeTrace), this
      .answer.education && this.answer.education.length > 0)
      for (let e = 1; e < this.answer.education.length; e++) this.taskQueue.add(u
        .addEducationSection);
    if (this.answer.workExperience && this.answer.workExperience.length > 0)
      for (let e = 1; e < this.answer.workExperience.length; e++) this.taskQueue.add(u
        .addEmploymentSection);
    await this.taskQueue.run(), await (0, g.delay)(200), this.timeTrace.fillStartTime = Date
      .now();
    let C = await (0, f.getEduRules)(),
      A = await (0, f.getExpRules)();
    (0, p.setSectionResultFocusRules)("education", C), (0, p.setSectionResultFocusRules)(
      "employment", A);
    let k = (0, i.getEmploymentOperations)(A, this.answer.workExperience, this.operationConfig,
        void 0, {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onCompleted: () => this.progressTracker.updateFilledProgress("Employment"),
          onSkipped: () => this.progressTracker.updateMissedProgress("Employment")
        }),
      T = (0, i.getEducationOperations)(C, this.answer.education, this.operationConfig,
      void 0, {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onCompleted: () => this.progressTracker.updateFilledProgress("Education"),
        onSkipped: () => this.progressTracker.updateMissedProgress("Education")
      }),
      F = (0, i.getRegularOperations)(w, this.answer.regular, this.operationConfig),
      I = [...F, ...k, ...T];
    for (let e of I) this.taskQueue.add(e);
    if (await this.taskQueue.run(), v.length > 0) {
      let t = await (0, d.waitForAppleCountryDependents)(l.dependentBaseline, l
        .dependentExpectation, document, {
          checkpoint: o.checkpoint
        });
      if (t) {
        let t = await (0, f.getRules)(),
          r = t.filter(d.isAppleCountryDependentRule);
        for (let e of r) this.progressTracker.updateFieldRequiredStatus(e);
        let n = (0, a.filterRulesByLabel)(r, []);
        if (n.length > 0) try {
          this.token || (this.token = await (0, i.getSiteToken)());
          let t = this.captureFalconResponseRun(),
            a = await (0, i.getElementRules)(n, y, this.token, e, this.resumeInfo.id, this
              .resumeInfo.tailorId);
          this.recordFalconResponse(a, t);
          let l = (0, c.formatAnswer)(a);
          (0, o.checkpoint)();
          let s = (0, i.getRegularOperations)(r, l.regular, this.operationConfig);
          for (let e of s) this.taskQueue.add(e);
          await this.taskQueue.run()
        } catch (e) {
          if (e instanceof i.HTTPError || e instanceof i.ResumeMissingCodeError) return (0, s
            .sendHttpStatusMessage)(e.message), e.message;
          throw e
        }
      } else {
        for (let e of v) this.progressTracker.updateMissedProgress(e.label);
        console.warn(
          "[Apple][Country] deferred address rules skipped: dependent state remains unverified"
          )
      }
    }
    let j = (0, u.isAppleCoverLetterStep)() ? (0, u.getAppleCoverLetterStatus)() : "";
    if ("required" === j && (this.progressTracker.updateFieldRequiredStatus({
          label: "Cover Letter",
          required: !0,
          type: "file"
        }), this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName ? this
        .taskQueue.add(async () => {
          let e = await (0, u.uploadCoverLetter)(this.coverLetter, this.progressTracker
            .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
          e || this.progressTracker.updateMissedProgress("Cover Letter")
        }) : this.progressTracker.updateMissedProgress("Cover Letter")), r.includes(
        "self-disclosure")) {
      let t = await (0, u.openDisabilityModal)();
      if (t) {
        let t = await (0, f.getDisabilityModalRules)();
        if (t.length > 0) {
          let r;
          t.forEach(e => {
            this.progressTracker.updateFieldRequiredStatus({
              label: e.label,
              required: e.required,
              options: e.options,
              type: e.type
            })
          });
          let n = (0, a.filterRulesByLabel)(t, []);
          try {
            let t = this.captureFalconResponseRun(),
              o = await (0, i.getElementRules)(n, y, this.token, e, this.resumeInfo.id, this
                .resumeInfo.tailorId);
            this.recordFalconResponse(o, t), r = (0, c.formatAnswer)(o)
          } catch (e) {
            if (e instanceof i.HTTPError || e instanceof i.ResumeMissingCodeError) return (0, s
              .sendHttpStatusMessage)(e.message), e.message;
            throw e
          }(0, o.checkpoint)();
          let l = (0, i.getRegularOperations)(t, r.regular, this.operationConfig);
          for (let e of l) this.taskQueue.add(e);
          await this.taskQueue.run();
          let d = await (0, u.submitDisabilityModal)();
          d || console.warn("[Apple] Disability modal submit did not complete")
        }
      }
    }
    await (0, g.delay)(500), await (0, u.blurPage)(), this.taskQueue.add(async () => {
      await (0, u.fillAgreementCheckbox)()
    }), await this.taskQueue.run();
    let D = (0, f.getFormSnapshot)(),
      P = document.getElementById("apply-step-continue-button");
    return P && (this.continueButtonHandler && P.removeEventListener("click", this
        .continueButtonHandler), this.continueButtonHandler = (0, u.submitHandler).bind(null,
        D), P.addEventListener("click", this.continueButtonHandler)), (0, s.postStatus)(
        "filling", this.progressTracker.fieldStatus, this.timeTrace), this.progressTracker
      .generateFinalProgress()
  }
  submitApplication() {}
}

