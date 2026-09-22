/**
 * Parcel module id: 9eGoe
 * Resolved path: contents/sites/jobdiva.js (oracle restore)
 * Dependencies:
 *   ./answer -> 9tSwu  =>  src/contents/sites/jobdiva/answer.js
 *   ./operations -> aBF8M  =>  src/contents/sites/jobdiva/operations.js
 *   ./rules -> bcuXB  =>  src/contents/sites/jobdiva/rules.js
 *   ./signin-credentials -> 30YY8  =>  signin-credentials.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~api/autofill-signup-information -> 52vOt  =>  _tilde_api/autofill-signup-information.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/track -> h479b  =>  _tilde_contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~enums/http -> eJFqj  =>  _tilde_enums/http.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 *   ~store/workday-signup-info -> jjbI7  =>  _tilde_store/workday-signup-info.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Jobdiva", () => b);
var o = e("~contents/methods/answer"),
  i = e("~contents/methods/track"),
  a = e("~contents/sites/base-filler"),
  l = e("~core/enums"),
  s = e("~core/dom"),
  u = e("~enums/http"),
  c = e("~store/autofillInfo"),
  d = e("~api/autofill-signup-information"),
  f = e("~store/workday-signup-info"),
  p = e("./answer"),
  m = e("./operations"),
  h = e("./rules"),
  g = e("./signin-credentials");
class b extends a.BaseFiller {
  static {
    this.MODAL_SUBMIT_SELECTOR = ".job-app-btn .jd-btn-mobile, .job-app-btns .jd-btn-mobile"
  }
  formatAnswer(e) {
    return (0, p.formatAnswer)(e)
  }
  async fetchFormAnswers(e, t) {
    let r = (0, p.prepareJobdivaAnswerRequestRules)(e),
      n = await this.requestFormAnswers(r, t);
    if ("string" == typeof n) return n;
    n && (this.answer = n)
  }
  getFieldHandlers() {
    return {
      [l.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (null != r) return (0, m.fillInputTextField)(e.$input, String(r ?? ""))
      },
      [l.FIELD_TYPE.SELECT]: (e, t) => (0, m.fillSelectField)(e, t),
      [l.FIELD_TYPE.CHECKBOX]: (e, t) => (0, m.fillCheckboxField)(e, t),
      [l.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, m.fillRadioGroupFiled)(e, t)
    }
  }
  getSiteName() {
    return "jobdiva"
  }
  isVisible(e) {
    if (!e) return !1;
    let t = window.getComputedStyle(e);
    return "none" !== t.display && "hidden" !== t.visibility && e.getClientRects().length > 0
  }
  isModalAdvanceButton(e) {
    if (!(e instanceof HTMLElement)) return !1;
    let t = (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "")
      .trim().replace(/\s+/g, " ").toLowerCase();
    return !!t && "back" !== t && "cancel" !== t && ("next" === t || "continue" === t ||
      "submit" === t || "apply" === t || "save" === t || t.includes("next") || t.includes(
        "continue") || t.includes("submit"))
  }
  getActiveModalSurface() {
    let e = Array.from(document.querySelectorAll(".modal.show .modal-content")).filter(e => this
        .isVisible(e)),
      t = e.filter(e => !!e.querySelector(".job-app-main, .jd-form-layout") || Array.from(e
        .querySelectorAll("button, [role='button']")).some(e => this.isModalAdvanceButton(e))),
      r = t[t.length - 1];
    return r ? {
      mode: "modal",
      root: r
    } : null
  }
  detectActiveSurface() {
    let e = this.getActiveModalSurface();
    if (e) return e;
    let t = Array.from(document.querySelectorAll(".modal-content")).filter(e => this.isVisible(
        e) && !!e.querySelector(".job-app-main")),
      r = t[t.length - 1];
    if (r) return {
      mode: "modal",
      root: r
    };
    let n = Array.from(document.querySelectorAll(".row")).find(e => this.isVisible(e) && (!!e
      .querySelector(".jd-reg-title") || !!e.querySelector(".jd-reg-card") || !!e
      .querySelector(".jd-form-layout") || !!e.querySelector(
        ".jd-actioncard.jd-reg-introcard") || !!e.querySelector('input[type="file"]') || !!e
      .querySelector(".jd-dropzone"))) || document.querySelector(".jd-reg-title")?.closest(
      ".row") || document.querySelector(".jd-reg-card")?.closest(".row") || document.body;
    return {
      mode: "regular",
      root: n
    }
  }
  resolveModalSubmitButton(e) {
    if ("modal" !== this.activeSurface.mode) return null;
    if (e instanceof HTMLElement) {
      let t = e.closest(b.MODAL_SUBMIT_SELECTOR);
      return t && this.activeSurface.root.contains(t) && t.classList.contains("jd-btn-mobile") ?
        t : null
    }
    return this.activeSurface.root.querySelector(b.MODAL_SUBMIT_SELECTOR) || null
  }
  getActiveSubmitButton() {
    if ("modal" === this.activeSurface.mode) return this.resolveModalSubmitButton();
    let e = Array.from(this.activeSurface.root.querySelectorAll("button.jd-btn")).filter(e =>
      this.isVisible(e));
    return e[e.length - 1] || null
  }
  getSubmitTrackingDelegationRoot() {
    return this.activeSurface.root || null
  }
  resolveDelegatedSubmitButton(e) {
    if ("modal" === this.activeSurface.mode) return this.resolveModalSubmitButton(e);
    let t = e.closest("button.jd-btn"),
      r = this.getActiveSubmitButton();
    return t && r === t ? t : null
  }
  async extractFormRules() {
    let e = await (0, h.extractRules)(this.activeSurface.root, this.activeSurface.mode);
    return (0, h.excludeJobdivaSignInRules)(e, this.activeSurface.root)
  }
  async runPreFillForm() {
    "regular" === this.activeSurface.mode && (this.taskQueue.add(() => (0, m.preFillForm)(this
      .activeSurface.root)), await this.taskQueue.run());
    let e = await (0, c.useAutofillInfoStore).getState().fetchAutofillInfo();
    await (0, m.prefillCountry)(this.activeSurface.root, e?.location?.country)
  }
  async handleResumeUpload() {
    this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this
      .taskQueue.add(async () => {
        await (0, m.uploadResume)(this.activeSurface.root, this.resumeInfo, this
          .progressTracker.updateFieldRequiredStatus, this.progressTracker
          .updateFilledProgress)
      }), await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {
    if ("regular" === this.activeSurface.mode) {
      if (Array.isArray(this.answer.education) && this.answer.education.length > 0) {
        let e = await (0, h.getEducationRulesForRoot)(this.activeSurface.root);
        if (e.length !== this.answer.education.length && (await (0, m
            .addEducationSectionForRoot)(this.activeSurface.root, this.answer.education
            .length), e = await (0, h.getEducationRulesForRoot)(this.activeSurface.root)), e
          .length !== this.answer.education.length) {
          console.warn("[jobdiva fillEdu] skip fill because counts still mismatch", {
            eduRulesLen: e.length,
            answerLen: this.answer.education.length
          });
          return
        }(0, s.setSectionResultFocusRules)("education", e);
        let t = (0, o.getEducationOperations)(e, this.answer.education, this.operationConfig,
          void 0, {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onCompleted: () => this.progressTracker.updateFilledProgress("Education"),
            onSkipped: () => this.progressTracker.updateMissedProgress("Education")
          });
        for (let e of t) this.taskQueue.add(e);
        await this.taskQueue.run()
      }
      if (Array.isArray(this.answer.workExperience) && this.answer.workExperience.length > 0) {
        let e = await (0, h.getExperienceRulesForRoot)(this.activeSurface.root);
        if (e.length !== this.answer.workExperience.length && (await (0, m
            .addEmploymentSectionForRoot)(this.activeSurface.root, this.answer.workExperience
            .length), e = await (0, h.getExperienceRulesForRoot)(this.activeSurface.root)), e
          .length !== this.answer.workExperience.length) {
          console.warn("[jobdiva fillExp] skip fill because counts still mismatch", {
            expRulesLen: e.length,
            answerLen: this.answer.workExperience.length
          });
          return
        }(0, s.setSectionResultFocusRules)("employment", e);
        let t = (0, o.getEmploymentOperations)(e, this.answer.workExperience, this
          .operationConfig, void 0, {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onCompleted: () => this.progressTracker.updateFilledProgress("Employment"),
            onSkipped: () => this.progressTracker.updateMissedProgress("Employment")
          });
        for (let e of t) this.taskQueue.add(e);
        await this.taskQueue.run()
      }
    }
  }
  async fillRegularFields(e) {
    let t = e.filter(e => e.type !== l.FIELD_TYPE.SECTION &&
        "I consent to receive employment-related text messages to this number" !== e.label),
      r = (0, o.getRegularOperations)(t, this.answer.regular, this.operationConfig);
    for (let e of r) this.taskQueue.add(e);
    await this.taskQueue.run();
    let n = e.filter(e => e.type === l.FIELD_TYPE.SECTION && "Phone" === e.label);
    for (let e of n) this.taskQueue.add(async () => {
      await (0, m.fillPhoneSectionField)(e, this.answer.regular, this.progressTracker
        .updateFilledProgress, this.progressTracker.updateMissedProgress)
    });
    n.length > 0 && await this.taskQueue.run()
  }
  getSubmitButtonSelector() {
    return null
  }
  extractEducationEmploymentAdditional(e) {
    let {
      education: t,
      employment: r
    } = e || {};
    return {
      education: t || [],
      employment: r || []
    }
  }
  async getAutofillSnapshot(e) {
    let t = (0, h.getFormSnapshot)(this.activeSurface.root) || {};
    this.lastFullAutofillSnapshot = t;
    let r = {
      ...t
    };
    return delete r.education, delete r.employment, r
  }
  async getSubmitSnapshot() {
    let e = (0, h.getFormSnapshot)(this.activeSurface.root) || {};
    this.lastFullSubmitSnapshot = e;
    let t = {
      ...e
    };
    return delete t.education, delete t.employment, t
  }
  getAdditionalAutofillSnapshotData(e) {
    return this.extractEducationEmploymentAdditional(this.lastFullAutofillSnapshot)
  }
  getAdditionalSubmitSnapshotData() {
    return this.extractEducationEmploymentAdditional(this.lastFullSubmitSnapshot)
  }
  isResumeUploadOnlyPage(e) {
    if ("regular" !== this.activeSurface.mode) return !1;
    let t = !!this.activeSurface.root.querySelector('input[type="file"]') || !!this
      .activeSurface.root.querySelector(".jd-dropzone");
    return !!t && 0 === e.length
  }
  async tryFillSignIn() {
    if (console.debug("[JobDiva] sign-in surface check", {
        foundSignIn: !!(0, g.findJobdivaSignInFields)()
      }), (0, g.findJobdivaSignInFields)()) {
      this.progressTracker.clear(), this.taskQueue.clear();
      let [e, t] = await Promise.all([(0, c.useAutofillInfoStore).getState()
      .fetchAutofillInfo(), (0, f.getWorkdaySignupInformation)().catch(() => null)
      ]), r = (0, d.resolveSignupRegistrationEmail)(e), n = t?.password ?? "", o = await (0, g
        .fillJobdivaSignInCredentials)({
        email: r,
        password: n
      });
      for (let e of (console.info("[JobDiva] sign-in credential fill", JSON.stringify({
          hasRegistrationEmail: !!r,
          hasLocalPassword: !!n,
          foundForm: o.foundForm,
          filledRoles: o.filledRoles,
          skippedExistingRoles: o.skippedExistingRoles,
          rejectedRoles: o.rejectedRoles
        })), this.progressTracker.setFieldsRequiredStatus([{
          label: "Email",
          required: !0
        }, {
          label: "Password",
          required: !0
        }]), ["email", "password"])) {
        let t = "email" === e ? "Email" : "Password";
        o.filledRoles.includes(e) || o.skippedExistingRoles.includes(e) ? this.progressTracker
          .updateFilledProgress(t) : this.progressTracker.updateMissedProgress(t)
      }
      return this.finalizeFillForm()
    }
    return null
  }
  async doFillForm(e = !1) {
    this.activeSurface = this.detectActiveSurface();
    let t = await this.tryFillSignIn();
    if (null !== t) return t;
    await this.initializeFillForm(), this.activeSurface = this.detectActiveSurface();
    let r = await this.tryFillSignIn();
    if (null !== r) return r;
    let n = await this.extractFormRules();
    if (this.progressTracker.setFieldsRequiredStatus(n), 0 === n.length) {
      let e = this.isResumeUploadOnlyPage(n);
      return (console.warn("[jobdiva] skip fill-v2: no extracted rules", {
        surfaceMode: this.activeSurface.mode,
        hasFormLayout: !!this.activeSurface.root.querySelector(".jd-form-layout"),
        hasRegistrationCard: !!this.activeSurface.root.querySelector(
          ".jd-reg-title, .jd-reg-card"),
        hasResumeUpload: e
      }), e) ? (await this.handleResumeUpload(), await this.executeSiteSpecificSteps(n), this
        .finalizeFillForm()) : ((0, i.sendHttpStatusMessage)(u.CUSTOM_ERROR_CODES
        .NO_ELEMENTS), u.CUSTOM_ERROR_CODES.NO_ELEMENTS)
    }
    await this.handleResumeUpload();
    let o = await this.fetchFormAnswers(n, e);
    return "string" == typeof o ? (console.warn(
      "[jobdiva fillForm] early return due to string answer:", o), o) : (await this
      .fillRegularFields(n), await this.fillEducationAndEmployment(n), await this
      .executeSiteSpecificSteps(n), this.finalizeFillForm())
  }
  submitApplication() {
    this.getActiveSubmitButton()?.click()
  }
  constructor(...e) {
    super(...e), this.activeSurface = {
      mode: "regular",
      root: document.body
    }, this.lastFullAutofillSnapshot = null, this.lastFullSubmitSnapshot = null
  }
}

