/**
 * Parcel module id: 8Ikc2
 * Resolved path: contents/sites/hrmdirect.js (oracle restore)
 * Dependencies:
 *   ./answer -> 3fn7Y  =>  src/contents/sites/hrmdirect/answer.js
 *   ./country -> gqN7c  =>  src/contents/sites/hrmdirect/country.js
 *   ./operations -> 9yJqz  =>  src/contents/sites/hrmdirect/operations.js
 *   ./rules -> 5Bfch  =>  src/contents/sites/hrmdirect/rules.js
 *   ./submit-tracking -> dGJqx  =>  submit-tracking.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Hrmdirect", () => g);
var o = e("~contents/methods/answer"),
  i = e("~contents/sites/base-filler"),
  a = e("~contents/methods/dom"),
  l = e("~core/dom"),
  s = e("~core/enums"),
  u = e("~store/autofillInfo"),
  c = e("~utils/delay"),
  d = e("./answer"),
  f = e("./country"),
  p = e("./operations"),
  m = e("./rules"),
  h = e("./submit-tracking");
class g extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [s.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (r) return (0, p.fillInputTextField)(e, String(r ?? ""))
      },
      [s.FIELD_TYPE.SELECT]: (e, t) => (0, p.fillSelectField)(e, t),
      [s.FIELD_TYPE.CHECKBOX]: (e, t) => (0, p.fillCheckboxField)(e, t),
      [s.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, p.fillRadioGroupFiled)(e, t),
      [s.FIELD_TYPE.DATE]: (e, t) => (0, p.fillDateField)(e.$input, t)
    }
  }
  async runPreFillForm() {
    this.currentRunCountryResult = {
      country: null,
      countryIso2: null,
      committed: !1,
      dependentsSettled: !1
    }, this.currentRunCountryResult = await (0, f.runHrmdirectCountryPrefill)({
      reinitialize: p.reinitializeEducationAndEmployment,
      fetchAutofillInfo: () => (0, u.useAutofillInfoStore).getState().fetchAutofillInfo(),
      getStateProvinceControl: () => (0, f.getHrmdirectStateProvinceControl)(),
      prefillCountry: e => (0, f.prefillHrmdirectCountry)(e),
      waitForStateProvince: (e, t) => (0, f.waitForHrmdirectStateProvince)(e, t)
    })
  }
  async extractFormRules() {
    return await (0, m.extractRules)()
  }
  async checkCoverLetter() {
    (0, a.postCoverLetterStatus)((0, p.getHrmdirectCoverLetterStatus)())
  }
  async handleResumeUpload() {
    this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this
      .taskQueue.add(async () => {
        await (0, p.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {
    let t = e.find(e => e.type === s.FIELD_TYPE.EDUCATION),
      r = e.find(e => e.type === s.FIELD_TYPE.EMPLOYMENT);
    t && Array.isArray(this.answer?.education) && this.answer.education.length > 0 && await this
      .processEduOrEmpBlock(t, this.answer.education, s.FIELD_TYPE.EDUCATION, o
        .getEducationOperations, "Education"), r && Array.isArray(this.answer
      ?.workExperience) && this.answer.workExperience.length > 0 && await this
      .processEduOrEmpBlock(r, this.answer.workExperience, s.FIELD_TYPE.EMPLOYMENT, o
        .getEmploymentOperations, "Employment")
  }
  async processEduOrEmpBlock(e, t, r, n, o) {
    let i = e.$input?.parentElement?.parentElement;
    if (!i) {
      console.warn(
        `[processEduOrEmpBlock] \u65e0\u6cd5\u83b7\u53d6 ${r} \u5bb9\u5668\uff0c\u8df3\u8fc7`);
      return
    }
    let a = t.length,
      u = (0, p.countEduOrExpSections)(i),
      d = a - u;
    if (d > 0)
      for (let e = 0; e < d; e++) {
        await (0, p.addEduOrExpSection)(i);
        let t = (0, p.countEduOrExpSections)(i);
        t === u && console.warn(
            `[processEduOrEmpBlock] [${r}] Block ${e+1} addition failed (count not increased)`),
          u = t, e < d - 1 && await (0, c.delay)(500)
      }
    let f = await (0, m.extractEduOrEmpRules)(i, r);
    if (0 === f.length) {
      console.warn(
        `[processEduOrEmpBlock] [${r}] \u63d0\u53d6\u590d\u5408\u89c4\u5219\u5931\u8d25\uff0c\u957f\u5ea6\u4e3a 0`
        );
      return
    }(0, l.setSectionResultFocusRules)(r === s.FIELD_TYPE.EDUCATION ? "education" :
      "employment", f);
    let h = n(f, t, this.operationConfig, void 0, {
      onSectionResultChanged: this.progressTracker.updateSectionResult,
      onCompleted: () => this.progressTracker.updateFilledProgress(o),
      onSkipped: () => this.progressTracker.updateMissedProgress(o)
    });
    if (h.length > 0) {
      for (let e of h) this.taskQueue.add(e);
      await this.taskQueue.run()
    } else console.warn(`[processEduOrEmpBlock] [${r}] No operations generated`)
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules(),
      {
        discovery: r,
        mainCountryRules: n,
        deferredDependentRules: o,
        regularRules: i
      } = (0, f.partitionHrmdirectCountryRules)(t, this.currentRunCountryResult);
    if (0 === t.length) {
      if (this.progressTracker.updateFieldRequiredStatus({
          label: "Resume/CV",
          required: !0
        }), this.resumeOnlyHandled) {
        let e = (0, p.hasHrmdirectUploadedResume)();
        console.info("[HRMDirect][ResumeUpload] resume-only progress reconciliation", {
          persistedResume: e,
          disableUploadResume: this.disableUploadResume
        }), !this.disableUploadResume && e ? this.progressTracker.updateFilledProgress(
          "Resume/CV") : this.progressTracker.updateMissedProgress("Resume/CV")
      } else this.resumeOnlyHandled = !0, console.info(
          "[HRMDirect][ResumeUpload] resume-only page", {
            rulesCount: t.length,
            disableUploadResume: this.disableUploadResume
          }), await this.handleResumeUpload(), this.progressTracker.fieldStatus.filledFields
        .includes("Resume/CV") || (console.warn(
          "[HRMDirect][ResumeUpload] resume-only upload missed", {
            disableUploadResume: this.disableUploadResume
          }), this.progressTracker.updateMissedProgress("Resume/CV")), await this
        .executeSiteSpecificSteps([]);
      return await this.finalizeFillForm()
    }
    for (let e of (this.progressTracker.setFieldsRequiredStatus(t), o)) this.progressTracker
      .updateMissedProgress(e.label);
    if ("ambiguous" === r) return (0, f.reconcileHrmdirectCountryProgress)(n, !1, this
        .progressTracker), await this.handleResumeUpload(), await this
      .executeSiteSpecificSteps(t), await this.finalizeFillForm();
    if (i.length > 0) {
      let t = await this.fetchFormAnswers(i, e);
      if ("string" == typeof t) return t
    }
    if (await this.handleResumeUpload(), i.length > 0 && await this.fillRegularFields(i), o
      .length > 0 && this.currentRunCountryResult.dependentCountryIso2) {
      let t = await (0, f.waitForHrmdirectStateProvince)(this.currentRunCountryResult
        .dependentCountryIso2, (0, f.getHrmdirectStateProvinceControl)());
      if (t) {
        this.currentRunCountryResult.dependentsSettled = !0;
        let t = await this.extractFormRules(),
          r = (0, f.partitionHrmdirectCountryRules)(t, {
            dependentsSettled: !1
          });
        if ("stable" === r.discovery && r.deferredDependentRules.length > 0) {
          let t = await this.requestFormAnswers(r.deferredDependentRules, e, {
            updateTimeTrace: !1
          });
          if ("string" == typeof t) return t;
          t && this.mergeComboQuestionAnswer(t, r.deferredDependentRules), await this
            .fillRegularFields(r.deferredDependentRules)
        }
      }
    }
    return await this.fillEducationAndEmployment(t), (0, f.reconcileHrmdirectCountryProgress)(n,
        this.currentRunCountryResult.committed && this.currentRunCountryResult
        .dependentsSettled, this.progressTracker), await this.executeSiteSpecificSteps(t),
      await this.finalizeFillForm()
  }
  getSiteName() {
    return "hrmdirect"
  }
  async getAutofillSnapshot() {
    return (0, m.getHrmdirectCurrentPageSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, m.getHrmdirectCurrentPageSnapshot)()
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    let t = (0, h.resolveHrmdirectSubmitButton)(e);
    return t ? (this.pendingSubmitTrackingContext = {
      pageScope: (0, h.getHrmdirectPageScope)(),
      submitAction: (0, h.getHrmdirectSubmitAction)(t)
    }, t) : null
  }
  getSubmitTrackingScopeKey() {
    return (0, h.getHrmdirectPageScope)()
  }
  getAutofillAnswerPairExtraTrackingData() {
    let e = this.pendingSubmitTrackingContext;
    return e ? {
      pageScope: e.pageScope ?? "unknown",
      submitAction: e.submitAction
    } : {}
  }
  async executeSiteSpecificSteps(e) {
    "required" === (0, p.getHrmdirectCoverLetterStatus)() && (this.progressTracker
      .updateFieldRequiredStatus({
        label: "Cover Letter",
        required: !0
      }), this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName ? this.taskQueue
      .add(async () => {
        let e = await (0, p.uploadCoverLetter)({
            coverLetterId: this.coverLetter.coverLetterId,
            coverLetterName: this.coverLetter.coverLetterName,
            markdown: this.coverLetter?.markdown,
            useLegacyDownload: this.coverLetter?.useLegacyDownload
          }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
          .updateFilledProgress);
        e || this.progressTracker.updateMissedProgress("Cover Letter")
      }) : this.progressTracker.updateMissedProgress("Cover Letter")), this.taskQueue.queue
      .length > 0 && await this.taskQueue.run(), ["mousedown", "mouseup", "click"].forEach(
      e => {
        document.dispatchEvent(new MouseEvent(e, {
          bubbles: !0
        }))
      }), await this.bindSubmitButtonTracking(e)
  }
  submitApplication() {
    h.getHrmdirectSubmitButton()?.click()
  }
  constructor(...e) {
    super(...e), this.resumeOnlyHandled = !1, this.currentRunCountryResult = {
      country: null,
      countryIso2: null,
      committed: !1,
      dependentsSettled: !1
    }, this.pendingSubmitTrackingContext = null, this.formatAnswer = d.formatAnswer
  }
}

