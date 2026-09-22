/**
 * Parcel module id: gzsfs
 * Resolved path: contents/sites/successfactors.js (oracle restore)
 * Dependencies:
 *   ./answer -> lBZzA  =>  src/contents/sites/successfactors/answer.js
 *   ./operations -> eGv5O  =>  src/contents/sites/successfactors/operations.js
 *   ./registration-credentials -> kjnz7  =>  registration-credentials.js
 *   ./registration-privacy -> a7WCJ  =>  registration-privacy.js
 *   ./rules -> 6S3gu  =>  src/contents/sites/successfactors/rules.js
 *   ./signin-credentials -> bCEw5  =>  src/contents/sites/successfactors/signin-credentials.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~api/autofill-signup-information -> 52vOt  =>  _tilde_api/autofill-signup-information.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  _tilde_contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/rules -> 3cWKC  =>  _tilde_contents/methods/rules.js
 *   ~contents/methods/track -> h479b  =>  _tilde_contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "SuccessFactors", () => C);
var o = e("@plasmohq/messaging"),
  i = e("~api/autofill-signup-information"),
  a = e("~contents/methods/answer"),
  l = e("~contents/methods/cancellation"),
  s = e("~contents/methods/rules"),
  u = e("~contents/methods/track"),
  c = e("~contents/sites/base-filler"),
  d = e("~core/enums"),
  f = e("~core/dom"),
  p = e("~core/xpath"),
  m = e("~utils/delay"),
  h = e("./answer"),
  g = e("./operations"),
  b = e("~contents/methods/dom"),
  y = e("./registration-credentials"),
  v = e("./registration-privacy"),
  w = e("./rules"),
  S = e("./signin-credentials");
let E = "successfactors";

function x(e) {
  return e.label?.replace(/[*:]/g, " ").replace(/\s+/g, " ").trim().toLowerCase() === "country"
}
class C extends c.BaseFiller {
  constructor() {
    super(), this.cachedRules = null, this.cachedRulesPageSignature = null, this
      .nextButtonHandler = null
  }
  async doFillForm(e = !1) {
    if ((0, S.findSuccessFactorsSignInFields)()) {
      this.resetFalconResponseAccumulator(), this.answer = {
        education: [],
        workExperience: [],
        skills: [],
        regular: {}
      }, this.cachedRules = null, this.cachedRulesPageSignature = null, this.timeTrace = {
        rulesParseStartTime: Date.now(),
        requestStartTime: 0,
        fillStartTime: 0
      }, this.progressTracker.clear(), this.taskQueue.clear();
      let [e, t] = await Promise.all([(0, o.sendToBackground)({
        name: "getAutofillInfo",
        body: {
          forceRefresh: !0
        }
      }).catch(() => null), (0, y.loadSuccessFactorsRegistrationPassword)()]);
      (0, l.checkpoint)();
      let r = await (0, S.fillSuccessFactorsSignInCredentials)({
        email: (0, i.resolveSignupRegistrationEmail)(e),
        password: t
      });
      for (let e of (this.progressTracker.setFieldsRequiredStatus([{
          label: "Email",
          required: !0
        }, {
          label: "Password",
          required: !0
        }]), ["email", "password"])) {
        let t = "email" === e ? "Email" : "Password";
        r.filledRoles.includes(e) || r.skippedExistingRoles.includes(e) ? this.progressTracker
          .updateFilledProgress(t) : this.progressTracker.updateMissedProgress(t)
      }
      return super.finalizeFillForm()
    }
    await this.initializeFillForm(), await this.handleResumeUpload(), await this
    .runPreFillForm();
    let t = null;
    if ((0, y.findSuccessFactorsRegistrationEmailFields)().section) {
      let e = await (0, o.sendToBackground)({
        name: "getAutofillInfo",
        body: {
          forceRefresh: !0
        }
      }).catch(() => null);
      (0, l.checkpoint)(), t = await (0, y.fillSuccessFactorsRegistrationEmails)({
        email: (0, i.resolveSignupRegistrationEmail)(e)
      })
    }
    let r = (0, y.findSuccessFactorsRegistrationPasswordFields)();
    if (r.section) {
      let e = await (0, y.loadSuccessFactorsRegistrationPassword)(),
        t = await (0, y.fillSuccessFactorsRegistrationPasswords)({
          password: e
        });
      console.info("[SuccessFactorsRegistrationCredentials]", JSON.stringify({
        foundSection: t.foundSection,
        foundRoleCount: t.foundRoles.length,
        filledRoleCount: t.filledRoles.length,
        skippedExistingRoleCount: t.skippedExistingRoles.length,
        rejectedRoleCount: t.rejectedRoles.length
      }))
    }
    let n = await this.extractFormRules();
    if (this.progressTracker.setFieldsRequiredStatus(n), this
      .restoreResumeProgressAfterRulesRefresh(), t?.foundSection)
      for (let e of t.foundRoles) {
        let r = "email" === e ? "Email Address:" : "Retype Email Address:";
        this.progressTracker.updateFieldRequiredStatus({
            label: r,
            required: !0
          }), t.filledRoles.includes(e) ? this.progressTracker.updateFilledProgress(r) : this
          .progressTracker.updateMissedProgress(r)
      }
    let a = this.preprocessRulesForAnswer(n),
      s = await this.fetchFormAnswers(a, e);
    if ("string" == typeof s) return s;
    let u = await this.fillCountryFromProfile();
    await this.fillEducationAndEmployment(n), await this.fillRegularFields(this.cachedRules ??
      n, {
        skipProfileCountry: u
      }), await this.executeSiteSpecificSteps(n);
    let c = await (0, v.acceptSuccessFactorsRegistrationPrivacy)();
    return c.foundRegistrationForm && console.info("[SuccessFactorsRegistrationPrivacy]", JSON
      .stringify(c)), await this.finalizeFillForm()
  }
  getFieldHandlers() {
    return {
      [d.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (r) return (0, g.fillInputTextField)(e.$input, String(r ?? ""))
      },
      [d.FIELD_TYPE.SELECT]: (e, t) => (0, g.fillSelectField)(e, t),
      [d.FIELD_TYPE.CHECKBOX]: (e, t) => (0, g.fillCheckboxField)(e, t),
      [d.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, g.fillRadioGroupFiled)(e, t),
      [d.FIELD_TYPE.EDUCATION]: (e, t) => (0, g.fillSelectField)(e, t),
      [d.FIELD_TYPE.EMPLOYMENT]: (e, t) => (0, g.fillSelectField)(e, t)
    }
  }
  async runPreFillForm() {
    await (0, g.preclickAddButtons)(), await (0, m.delay)(500)
  }
  async extractFormRules() {
    let e = this.getCurrentPageSignature();
    return this.cachedRulesPageSignature !== e && (this.cachedRules = null, this
      .cachedRulesPageSignature = e), this.cachedRules || (this.cachedRules = await (0, w
      .extractRules)()), this.cachedRules
  }
  getCurrentPageSignature() {
    let e = "undefined" == typeof window ? "" : window.location?.href || "",
      t = !!document.querySelector(".profileUpperLayout"),
      r = !!document.querySelector("#questions"),
      n = document.querySelector(
        "#apply-profileInformation-form, #questions, .profileUpperLayout, .profileLowerLayout, form, main"
        ),
      o = [n?.id, n?.getAttribute("aria-label"), n?.className].filter(Boolean).join("|");
    return [e, t ? "profile" : "", r ? "questions" : "", o].join("::")
  }
  preprocessRulesForAnswer(e) {
    return (0, w.prepareSuccessFactorsRulesForAnswer)(e)
  }
  restoreResumeProgressAfterRulesRefresh() {
    let e = this.progressTracker.fieldStatus.filledFields.includes("Resume/CV") || this
      .progressTracker.fieldStatus.missingFields.includes("Resume/CV");
    e && this.progressTracker.updateFieldRequiredStatus({
      label: "Resume/CV",
      required: !0,
      type: "file"
    })
  }
  async fetchFormAnswers(e, t) {
    try {
      this.token || (this.token = await (0, a.getSiteToken)());
      let r = (0, s.filterRulesByLabel)(e, []),
        n = this.captureFalconResponseRun(),
        o = await (0, a.getElementRules)(r, E, this.token, t, this.resumeInfo?.id, this
          .resumeInfo?.tailorId);
      this.recordFalconResponse(o, n), this.answer = (0, h.formatAnswer)(o), this.timeTrace
        .fillStartTime = Date.now()
    } catch (e) {
      if (e instanceof a.HTTPError || e instanceof a.ResumeMissingCodeError) return (0, u
        .sendHttpStatusMessage)(e.message), e.message
    }(0, l.checkpoint)()
  }
  async fillRegularFields(e, t = {}) {
    let r = e.filter(e => e.type !== d.FIELD_TYPE.EDUCATION && e.type !== d.FIELD_TYPE
        .EMPLOYMENT && !(t.skipProfileCountry && x(e))),
      n = (0, a.getRegularOperations)(r, this.answer.regular, this.operationConfig).map(e =>
        async () => {
          try {
            await e()
          } catch (e) {
            console.warn("Error filling field:", e)
          }
        });
    for (let e of n) this.taskQueue.add(e);
    await this.taskQueue.run()
  }
  async fillCountryFromProfile() {
    let e = this.answer?.country;
    if (null == e || "" === String(e).trim()) return !1;
    let t = (0, p.getFirstOrderedNode)(
      "//input[@aria-label='Country' or @aria-label='Country:']", document);
    if (!t) return !1;
    let r = await (0, g.fillCountryCombobox)(t, String(e).trim());
    return r ? (this.progressTracker.updateFilledProgress("Country"), !0) : (this
      .progressTracker.updateMissedProgress("Country"), !1)
  }
  async fillEducationAndEmployment(e) {
    this.answer && (await (0, g.expandForm)(this.answer), await (0, m.delay)(500), this
      .cachedRules = await (0, w.extractRules)());
    let t = this.cachedRules || e,
      r = t.filter(e => e.type === d.FIELD_TYPE.EDUCATION),
      n = t.filter(e => e.type === d.FIELD_TYPE.EMPLOYMENT),
      o = this.getSectionProgressLabel(n, "Employment"),
      i = this.getSectionProgressLabel(r, "Education");
    if (this.answer && (r.length > 0 || n.length > 0)) {
      (0, f.setSectionResultFocusRules)("employment", n);
      let e = (0, a.getEmploymentOperations)(n, this.answer.workExperience, this
        .operationConfig, void 0, {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onCompleted: () => {
            n.length > 0 && this.progressTracker.updateFilledProgress(o)
          },
          onSkipped: () => this.progressTracker.updateMissedProgress(o)
        });
      (0, f.setSectionResultFocusRules)("education", r);
      let t = (0, a.getEducationOperations)(r, this.answer.education, this.operationConfig,
          void 0, {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onCompleted: () => {
              r.length > 0 && this.progressTracker.updateFilledProgress(i)
            },
            onSkipped: () => this.progressTracker.updateMissedProgress(i)
          }),
        l = [...e, ...t];
      for (let e of l) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
  }
  getSectionProgressLabel(e, t) {
    return e.find(e => e.label?.trim())?.label?.trim() || t
  }
  async handleResumeUpload() {
    if (this.resumeInfo && (0, g.hasSuccessFactorsResumeUploadSurface)()) {
      let e = (0, g.captureSuccessFactorsExperienceRows)();
      try {
        await (0, g.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress), await (0, g
          .cleanupSuccessFactorsParsedExperienceRows)(e)
      } catch {
        this.progressTracker.updateMissedProgress("Resume/CV")
      }
    }
  }
  async checkCoverLetter() {
    (0, b.postCoverLetterStatus)((0, g.getSuccessFactorsCoverLetterStatus)())
  }
  async executeSiteSpecificSteps(e) {
    await (0, g.fillSkills)(this.answer);
    let t = (0, g.getSuccessFactorsCoverLetterStatus)();
    if (t && this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: "required" === t
      }), this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName) {
      let e = await (0, g.uploadCoverLetter)({
          coverLetterId: this.coverLetter.coverLetterId,
          coverLetterName: this.coverLetter.coverLetterName,
          markdown: this.coverLetter.markdown,
          useLegacyDownload: this.coverLetter.useLegacyDownload
        }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress);
      e || "required" !== t || this.progressTracker.updateMissedProgress("Cover Letter")
    } else "required" === t && this.progressTracker.updateMissedProgress("Cover Letter");
    ["mousedown", "mouseup", "click"].forEach(e => {
      document.dispatchEvent(new MouseEvent(e, {
        bubbles: !0
      }))
    }), await super.executeSiteSpecificSteps(e)
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    let t = "BUTTON" === e.tagName ? e : e.closest("button");
    if (t) {
      let e = t.textContent?.trim().toLowerCase() || "",
        r = "Next" === t.getAttribute("title") && "Next" === t.getAttribute("name") &&
        "button" === t.getAttribute("type") || "submit" === t.getAttribute("type") &&
        "apply" === t.getAttribute("value") || e.includes("apply");
      return r ? t : null
    }
    let r = "button" === e.getAttribute("role") && e.getAttribute("id")?.includes(
      "submitBtn") && (e.textContent?.toLowerCase().includes("apply") ?? !1);
    return r ? e : null
  }
  getSiteName() {
    return "successfactors"
  }
  async getAutofillSnapshot(e) {
    return await (0, w.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, w.getFormSnapshot)()
  }
  getAdditionalAutofillSnapshotData(e) {
    return (0, w.getAdditionalFormSnapshotData)()
  }
  getAdditionalSubmitSnapshotData() {
    return (0, w.getAdditionalFormSnapshotData)()
  }
  submitApplication() {
    let e = './/button[@type="submit" or contains(@class, "submit")]',
      t = (0, p.getFirstOrderedNode)(e);
    t && t?.click()
  }
  finalizeFillForm() {
    let e = (0, w.getFormSnapshot)(),
      t = (0, w.getAdditionalFormSnapshotData)(),
      r = document.querySelector('button[title="Next"][name="Next"][type="button"]');
    return r && (this.nextButtonHandler && r.removeEventListener("click", this
        .nextButtonHandler), this.nextButtonHandler = (0, g.submitHandler).bind(null, e, t), r
      .addEventListener("click", this.nextButtonHandler)), super.finalizeFillForm()
  }
}

