/**
 * Parcel module id: d9UPP
 * Resolved path: contents/sites/JobScore.js (oracle restore)
 * Dependencies:
 *   ./answers -> hq3DQ  =>  answers.js
 *   ./contact-rule-order -> iZ6Kd  =>  contact-rule-order.js
 *   ./country -> iH7NT  =>  src/contents/sites/JobScore/country.js
 *   ./operations -> jdxtK  =>  src/contents/sites/JobScore/operations.js
 *   ./rules -> 4QaIN  =>  src/contents/sites/JobScore/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   da3ae0c8d8acafe1 -> 4QaIN  =>  src/contents/sites/JobScore/rules.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  _tilde_contents/methods/cover-letter.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/track -> h479b  =>  _tilde_contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~enums -> drZvv  =>  _tilde_enums.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 *   ~utils/string -> ijEFi  =>  _tilde_utils/string.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "JobScore", () => S);
var o = e("~contents/methods/answer"),
  i = e("~contents/methods/cover-letter"),
  a = e("~contents/methods/dom"),
  l = e("~contents/methods/track"),
  s = e("~contents/sites/base-filler"),
  u = e("~core/dom"),
  c = e("~core/enums"),
  d = e("~core/xpath"),
  f = e("~enums"),
  p = e("~store/autofillInfo"),
  m = e("~utils/delay"),
  h = e("~utils/string"),
  g = e("./answers"),
  b = e("./contact-rule-order"),
  y = e("./country"),
  v = e("./operations"),
  w = e("./rules");
class S extends s.BaseFiller {
  async extractComboQuestionRules() {
    return (0, i.markTextCoverLetterRules)(await this.extractFormRules(!0))
  }
  async checkCoverLetter() {
    await (0, v.preFillForm)();
    let e = await (0, w.extractRules)("div.js-section-cover-letter"),
      t = e.find(e => {
        let t = e.$input,
          r = e.label?.toLowerCase().replace(/[^a-z]+/g, " ").trim();
        return t?.name === "cover_letter" || t?.id === "cover_letter" || "cover letter" === r
      });
    if (!t) {
      (0, a.postCoverLetterStatus)("");
      return
    }(0, a.postCoverLetterStatus)(t.required ? "required" : "optional")
  }
  getFieldHandlers() {
    return {
      [c.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (e.label, e.$input.id, e.$input.name, e.$input.closest(".js-section-questions"), !
          r) return;
        let n = "cover_letter" === e.$input.name || "cover_letter" === e.$input.id || e.label
          ?.toLowerCase().includes("cover letter") || null !== e.$input.closest(
            ".js-section-cover-letter");
        return n ? (0, v.fillCoverLetterField)(String(r ?? "")) : (0, v.fillInputTextField)(e
          .$input, String(r ?? ""))
      },
      [c.FIELD_TYPE.NUMBER]: (e, t) => (0, v.fillInputTextField)(e.$input, String(t?.[0] ??
        "")),
      [c.FIELD_TYPE.SELECT]: (e, t) => {
        let r = e.$input;
        return e.label, r?.id, r?.name, r?.closest(".js-section-questions"), (0, v
          .fillSelectField)(e, t)
      },
      [c.FIELD_TYPE.CHECKBOX]: (e, t) => {
        let r = e.$input;
        return e.label, r?.id, r?.name, r?.closest(".js-section-questions"), (0, v
          .fillCheckboxField)(e, t)
      },
      [c.FIELD_TYPE.RADIOGROUP]: (e, t) => {
        let r = e.$input;
        return e.label, r?.id, r?.name, r?.closest(".js-section-questions"), (0, v
          .fillRadioGroupFiled)(e, t)
      }
    }
  }
  async fillIframeForm(e = !1) {
    await this.initializeFillForm(), (0, v.resetFilledElementsForNewRun)();
    let t = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    return "string" == typeof r ? r : (await this.fillRegularFields(t), await this
      .executeSiteSpecificSteps(t), (0, l.postStatus)("filling", this.progressTracker
        .fieldStatus, this.timeTrace), window.top?.postMessage(h.cleanObject({
        type: c.MESSAGE_EVENTS.autoFillResultFromIframe,
        data: this.progressTracker.fieldStatus
      }), {
        targetOrigin: "*"
      }), this.progressTracker.generateFinalProgress())
  }
  async extractFormRules(e = !1) {
    if (this.isRunningInJobScoreIframe()) return await (0, w.extractIframeFormRules)();
    e || (await Promise.all([(0, v.clickSeeButton)(
      '.js-area-container.experience[data-display="preview"] .js-link-edit-area-toggler[data-context="edit-area-data"]'
      ), (0, v.clickSeeButton)(
      '.js-area-container.education[data-display="preview"] .js-link-edit-area-toggler[data-context="edit-area-data"]'
      )]), await (0, m.delay)(500));
    let t = [],
      r = await (0, w.extractRules)("div.js-area-container.contact");
    t.push(...r);
    let n = await (0, w.extractRules)("div.js-section-cover-letter");
    t.push(...n);
    let o = await (0, w.extractEmploymentRules)(
      ".js-area-container.experience[data-display='form']");
    t.push(...o);
    let i = await (0, w.extractEducationRules)(
      '.js-area-container.education[data-display="form"]');
    t.push(...i);
    let a = await (0, w.extractRules)("div.js-section-questions");
    t.push(...a);
    let l = (0, v.cleanRules)(t);
    return l
  }
  getSiteName() {
    return "jobscore"
  }
  isRunningInIframe() {
    return window.top !== window.self
  }
  isRunningInJobScoreIframe() {
    if (!this.isRunningInIframe()) return !1;
    let e = window.location.href;
    if (e.startsWith("about:blank") || e.startsWith("about:")) return !1;
    let t = e.includes("jobscore.com") || e.includes("jobscore.co"),
      r = null !== document.querySelector(".js-section-container") || null !== document
      .querySelector("form") || null !== document.querySelector(".js-area-container");
    return t && r
  }
  hasOFCCPIframe() {
    if (this.isRunningInIframe()) return !1;
    let e = document.getElementsByTagName("iframe");
    for (let t of e) {
      if (!t.src) continue;
      let e = t.src.includes("ofccp/form?job_id=") && t.src.includes("&internal_board=");
      if (e) return !0
    }
    return !1
  }
  hasCrossOriginJobScoreIframe() {
    if (this.isRunningInIframe()) return !1;
    let e = document.getElementsByTagName("iframe");
    for (let t of e) {
      if (!t.src) continue;
      let e = t.src.includes("jobscore.com") || t.src.includes("jobscore.co");
      if (e) try {
        let e = t.contentDocument || t.contentWindow?.document;
        if (!e) return !0
      } catch (e) {
        return !0
      }
    }
    return !1
  }
  triggerJobScoreIframeFill(e = !1) {
    if (!this.hasCrossOriginJobScoreIframe()) return;
    let t = document.getElementsByTagName("iframe");
    for (let r of t) {
      if (!r.src) continue;
      let t = r.src.includes("jobscore.com") || r.src.includes("jobscore.co");
      if (!t) continue;
      let n = setInterval(() => {
        window.iframeLoaded && (r.contentWindow?.postMessage({
          type: f.IFRAME_EVENTS.EXECUTE_IFRAME_FUNCTION,
          data: {
            timestamp: Date.now(),
            fromAgent: e
          },
          url: r.src
        }, "*"), clearInterval(n))
      }, 500);
      setTimeout(() => {
        clearInterval(n)
      }, 1e4)
    }
  }
  async getAutofillSnapshot(e) {
    let t = await (0, w.getFormSnapshot)() || {};
    this.lastFullAutofillSnapshot = t;
    let {
      education: r,
      employment: n,
      ...o
    } = t;
    return o
  }
  async getSubmitSnapshot() {
    let e = await (0, w.getFormSnapshot)() || {};
    this.lastFullSubmitSnapshot = e;
    let {
      education: t,
      employment: r,
      ...n
    } = e;
    return n
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
  getAdditionalAutofillSnapshotData(e) {
    return this.extractEducationEmploymentAdditional(this.lastFullAutofillSnapshot)
  }
  getAdditionalSubmitSnapshotData() {
    return this.extractEducationEmploymentAdditional(this.lastFullSubmitSnapshot)
  }
  submitApplication() {
    let e = this.getSubmitButtonSelector();
    if (!e) return;
    let t = (0, d.getFirstOrderedNode)(e);
    t && t?.click()
  }
  async doFillForm(t = !1) {
    if (this.isRunningInJobScoreIframe()) return await this.fillIframeForm(t);
    if (this.hasOFCCPIframe()) return new Promise(e => {
      let t = r => {
        r.data.type === c.MESSAGE_EVENTS.autoFillResultFromIframe && (window
          .removeEventListener("message", t), e(r.data.data))
      };
      window.addEventListener("message", t), setTimeout(() => {
        window.removeEventListener("message", t), this.progressTracker.clear(), e(this
          .progressTracker.generateFinalProgress())
      }, 6e4)
    });
    await this.initializeFillForm(), (0, v.resetFilledElementsForNewRun)();
    let r = this.prepareCoverLetterRules(await this.extractFormRules());
    if ((0, v.isResumeOnlyPage)()) return this.progressTracker.setFieldsRequiredStatus((0, v
        .getResumeOnlyPageRequiredFields)(r)), await this.handleResumeUpload(), this
      .finalizeFillForm();
    await this.handleResumeUpload();
    let n = await this.fetchFormAnswers(r, t);
    if ("string" == typeof n) return n;
    this.answer.education && Array.isArray(this.answer.education) && await (0, v
        .addEducationFormElements)(this.answer.education), this.answer.workExperience && Array
      .isArray(this.answer.workExperience) && (this.answer.workExperience = (0, v
        .normalizeWorkExperienceRecords)(this.answer.workExperience), await (0, v
        .addEmploymentFormElements)(this.answer.workExperience));
    let a = (0, i.markTextCoverLetterRules)(await this.extractFormRules(!0)),
      l = this.progressTracker.fieldStatus.fieldRequiredStatus.find(e => "Resume/CV" === e
        .label),
      s = this.progressTracker.fieldStatus.filledFields.includes("Resume/CV");
    this.progressTracker.setFieldsRequiredStatus(a), (0, v
      .restoreResumeProgressAfterRulesUpdate)({
      resumeStatusBefore: l ?? void 0,
      wasResumeFilled: s,
      updateFieldRequiredStatus: this.progressTracker.updateFieldRequiredStatus,
      updateFilledProgress: this.progressTracker.updateFilledProgress
    });
    let d = a.filter(e => e.type !== c.FIELD_TYPE.EDUCATION && e.type !== c.FIELD_TYPE
      .EMPLOYMENT && "$input" in e && e.$input?.closest(".js-area-container.contact") !== null
      );
    if (d.length > 0) {
      let {
        mainCountryRules: e,
        regularRules: r
      } = (0, y.partitionJobScoreContactRules)(d);
      if (this.currentRunCountryPrefilled)
        for (let t of e) this.progressTracker.updateFilledProgress(t.label);
      await this.fillRegularFields((0, b.orderJobScoreContactRules)(r));
      let n = (0, b.getJobScoreLocationRetryRules)(await (0, w.extractRules)(
        "div.js-area-container.contact"));
      if (n.length > 0) {
        let e = await this.requestFormAnswers(n, t, {
          updateTimeTrace: !1
        });
        if ("string" == typeof e) return e;
        e && this.mergeComboQuestionAnswer(e, n), (0, v.resetFilledElementsForNewRun)(), this
          .answer.regular = (0, b.applyJobScoreLocationFallbacks)(this.answer.regular, this
            .currentRunAutofillInfo), await this.fillRegularFields(n)
      }
    }
    if (this.answer.workExperience && Array.isArray(this.answer.workExperience)) {
      let {
        extractEmploymentRules: t
      } = await e("da3ae0c8d8acafe1"), r = await t(
        ".js-area-container.experience[data-display='form']");
      (0, u.setSectionResultFocusRules)("employment", r);
      let n = (0, v.orderWorkExperienceByDom)(r, this.answer.workExperience, v
          .normalizeWorkExperienceRecords),
        i = (0, o.getEmploymentOperations)(r, n, this.operationConfig, void 0, {
          onCompleted: () => {
            r.length > 0 && this.progressTracker.updateFilledProgress("Employment")
          },
          onSkipped: () => this.progressTracker.updateMissedProgress("Employment"),
          onSectionResultChanged: this.progressTracker.updateSectionResult
        });
      for (let e of i) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
    if (this.answer.education && Array.isArray(this.answer.education)) {
      let t = (0, v.normalizeEducationRecords)(this.answer.education),
        {
          extractEducationRules: r
        } = await e("da3ae0c8d8acafe1"),
        n = await r('.js-area-container.education[data-display="form"]');
      (0, u.setSectionResultFocusRules)("education", n);
      let i = (0, o.getEducationOperations)(n, t, this.operationConfig, void 0, {
        onCompleted: () => {
          n.length > 0 && this.progressTracker.updateFilledProgress("Education")
        },
        onSkipped: () => this.progressTracker.updateMissedProgress("Education"),
        onSectionResultChanged: this.progressTracker.updateSectionResult
      });
      for (let e of i) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
    let f = a.filter(e => e.type !== c.FIELD_TYPE.EDUCATION && e.type !== c.FIELD_TYPE
      .EMPLOYMENT && "$input" in e && e.$input?.closest(".js-section-questions") !== null);
    f.length > 0 && await this.fillRegularFields(f), await this.fillCoverLetterFields();
    let p = await this.runComboQuestionAutofillIfNeeded(a, t);
    if ("string" == typeof p) return p;
    let m = p;
    return await this.executeSiteSpecificSteps(m), this.disableUploadResume || (0, v
      .syncResumeFilledProgress)(this.progressTracker.updateFieldRequiredStatus, this
      .progressTracker.updateFilledProgress), this.finalizeFillForm()
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, v.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, v.removeResume)(), await (0, v.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async runPreFillForm() {
    this.currentRunCountry = null, this.currentRunCountryPrefilled = !1, this
      .currentRunAutofillInfo = null;
    let e = await (0, y.runJobScoreCountryPrefill)({
      preFillForm: v.preFillForm,
      fetchAutofillInfo: async () => {
        let e = await (0, p.useAutofillInfoStore).getState().fetchAutofillInfo();
        return this.currentRunAutofillInfo = e, e
      },
      prefillCountry: e => (0, y.prefillJobScoreCountry)(e),
      waitForStateProvince: async e => {
        await (0, y.waitForJobScoreStateProvinceControl)(e)
      }
    });
    this.currentRunCountry = e.country, this.currentRunCountryPrefilled = e.prefilled
  }
  getSubmitButtonSelector() {
    return './/button[@id="apply-button" or (@type="submit" and (contains(@class, "js-btn-apply") or contains(@class, "js-btn")))]'
  }
  constructor(...e) {
    super(...e), this.hasComboQuestions = !0, this.lastFullAutofillSnapshot = null, this
      .lastFullSubmitSnapshot = null, this.currentRunCountry = null, this
      .currentRunCountryPrefilled = !1, this.currentRunAutofillInfo = null, this.formatAnswer =
      e => (0, g.formatAnswer)(e)
  }
}

