/**
 * Parcel module id: 1lFq9
 * Resolved path: src/contents/sites/careers-withwaymo.js
 * Dependencies:
 *   ./answer -> 3ZdOq  =>  src/contents/sites/careers-withwaymo/answer.js
 *   ./operations -> dD71w  =>  src/contents/sites/careers-withwaymo/operations.js
 *   ./rules -> aBisk  =>  src/contents/sites/careers-withwaymo/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/starRating -> imWVP  =>  src/utils/starRating.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "CareersWithWaymo", () => b);
var o = e("~core/dom"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/dom"),
  l = e("~contents/methods/track"),
  s = e("~contents/sites/autofill-answer-pair-tracking"),
  u = e("~contents/sites/base-filler"),
  c = e("~store/url"),
  d = e("~core/enums"),
  f = e("~core/xpath"),
  p = e("~utils/starRating"),
  m = e("./answer"),
  h = e("./operations"),
  g = e("./rules");
class b extends u.BaseFiller {
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
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    return "string" == typeof r ? r : (await this.fillRegularFields(t), await this
      .fillEducationAndEmployment(t), await this.executeSiteSpecificSteps(t), await this
      .handleResumeUpload(), await this.finalizeFillForm())
  }
  async checkCoverLetter() {
    let e = (0, g.getCoverLetterInput)(),
      t = "";
    e && (t = (0, g.isCoverLetterRequired)(e) ? "required" : "optional"), (0, a
      .postCoverLetterStatus)(t)
  }
  async executeSiteSpecificSteps(e) {
    await this.bindSubmitButtonTracking(e);
    let t = g.getFormContainer()?.querySelector(
        'button[type="submit"][name="next_step"][data-action="call-to-action--form#sendFormSubmission"][data-call-to-action--form-target="submitButton"][id^="form_submit_"]'
        ),
      r = t?.querySelector(".submit-state.submit-start")?.textContent?.trim() || t?.textContent
      ?.trim() || "Submit your application";
    (0, l.bindSubmitButton)(r, this.progressTracker.fieldStatus, this.timeTrace)
  }
  getFieldHandlers() {
    return {
      [d.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (null != r) return (0, h.fillInputTextField)(e.$input, String(r ?? ""), String(this
            .answer?.regular?.[m.PHONE_AREA_CODE_KEY] ?? ""), this.answer?.country, e
          .label)
      },
      [d.FIELD_TYPE.SELECT]: (e, t) => (0, h.fillSelectField)(e, t),
      [d.FIELD_TYPE.CHECKBOX]: (e, t) => (0, h.fillCheckboxField)(e, t),
      [d.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, h.fillRadioGroupFiled)(e, t)
    }
  }
  async runPreFillForm() {
    this.taskQueue.add(h.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, g.extractRules)()
  }
  getSiteName() {
    return "careerswithwaymo"
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, h.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, h.removeResume)(), await (0, h.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), this.coverLetter?.coverLetterId && this.taskQueue.add(async () => {
      await (0, h.uploadCoverLetter)(this.coverLetter, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {
    if (Array.isArray(this.answer?.education) && this.answer.education.length) {
      await (0, h.addEducationSection)(this.answer.education.length);
      let e = await (0, g.getEducationRules)();
      (0, o.setSectionResultFocusRules)("education", e);
      let t = (0, i.getEducationOperations)(e, this.answer.education, this.operationConfig,
        void 0, {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onSkipped: () => this.progressTracker.updateMissedProgress("Education")
        });
      for (let e of t) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
    if (Array.isArray(this.answer?.workExperience) && this.answer.workExperience.length) {
      await (0, h.addEmploymentSection)(this.answer.workExperience.length);
      let e = await (0, g.getExperienceRules)();
      (0, o.setSectionResultFocusRules)("employment", e);
      let t = (0, i.getEmploymentOperations)(e, this.answer.workExperience, this
        .operationConfig, void 0, {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onSkipped: () => this.progressTracker.updateMissedProgress("Employment")
        });
      for (let e of t) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
  }
  getSubmitButtonSelector() {
    return './/form[@class="form-template" and @data-turbo="true" and @data-call-to-action--form-target="form" and starts-with(@id, "new_form_submission_") and @enctype="multipart/form-data" and contains(@action, "/call_to_actions/") and contains(@action, "/form_submissions")]//button[@type="submit" and @name="next_step" and @data-action="call-to-action--form#sendFormSubmission" and @data-call-to-action--form-target="submitButton" and starts-with(@id, "form_submit_")]'
  }
  async getAutofillSnapshot(e) {
    let t = await (0, g.getFormSnapshot)() || {};
    this.lastFullAutofillSnapshot = t;
    let {
      education: r,
      employment: n,
      ...o
    } = t;
    return o
  }
  async getSubmitSnapshot() {
    let e = await (0, g.getFormSnapshot)() || {};
    this.lastFullSubmitSnapshot = e;
    let {
      education: t,
      employment: r,
      ...n
    } = e;
    return n
  }
  getAdditionalAutofillSnapshotData(e) {
    return this.extractEducationEmploymentAdditional(this.lastFullAutofillSnapshot)
  }
  getAdditionalSubmitSnapshotData() {
    return this.extractEducationEmploymentAdditional(this.lastFullSubmitSnapshot)
  }
  async bindSubmitButtonTracking(e) {
    let t = await this.getAutofillSnapshot(e),
      r = this.getAdditionalAutofillSnapshotData?.(e) || {};
    this.withwaymoSubmitTrackingAbortController?.abort(), this
      .withwaymoSubmitTrackingAbortController = new AbortController;
    let {
      signal: n
    } = this.withwaymoSubmitTrackingAbortController, o = null, i = null, a = e => {
      if (!(e instanceof HTMLElement)) return null;
      let t = e.closest(
        'button[type="submit"][name="next_step"][data-action="call-to-action--form#sendFormSubmission"][data-call-to-action--form-target="submitButton"][id^="form_submit_"]'
        );
      if (!t) return null;
      let r = (0, g.getFormContainer)();
      return t.closest("form") === r ? t : null
    };
    document.addEventListener("pointerdown", async e => {
      let t = a(e.target);
      t && (o = await this.getSubmitSnapshot())
    }, {
      capture: !0,
      signal: n
    }), document.addEventListener("click", async e => {
      let n = a(e.target);
      if (!n) return;
      i?.abort(), i = new AbortController;
      let l = i.signal,
        u = o ?? await this.getSubmitSnapshot();
      o = null;
      let d = this.getAdditionalSubmitSnapshotData?.() || {},
        f = this.getAutofillAnswerPairExtraTrackingData?.() || {};
      (0, s.sendAutofillAnswerPairEvent)({
        formUrl: (0, c.useUrlStore).getState().currentTabUrl,
        autofillSnapshot: t,
        submitSnapshot: u,
        additionalAutofillData: r,
        additionalSubmitData: d,
        extraData: f,
        source: this.getSiteName()
      }), (0, p.handleSubmitStarRating)(this.getSiteName(), t, u, this.progressTracker
        .fieldStatus, this.getSubmitSuccessSelectors(), l)
    }, {
      capture: !0,
      signal: n
    })
  }
  submitApplication() {
    let e = this.getSubmitButtonSelector(),
      t = e ? (0, f.getFirstOrderedNode)(e) : null;
    t && t.click()
  }
  constructor(...e) {
    super(...e), this.withwaymoSubmitTrackingAbortController = null, this
      .lastFullAutofillSnapshot = null, this.lastFullSubmitSnapshot = null, this.formatAnswer =
      m.formatAnswer
  }
}

