/**
 * Parcel module id: 3Jd0v
 * Resolved path: contents/sites/dayforce.js (oracle restore)
 * Dependencies:
 *   ./agreements -> deKYK  =>  agreements.js
 *   ./answer -> irXfm  =>  src/contents/sites/dayforce/answer.js
 *   ./auth -> 1TnOy  =>  _tilde_contents/sites/dayforce/auth.js
 *   ./operations -> gnj33  =>  src/contents/sites/dayforce/operations.js
 *   ./rules -> 5ymq4  =>  src/contents/sites/dayforce/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~api/autofill-signup-information -> 52vOt  =>  _tilde_api/autofill-signup-information.js
 *   ~contents/methods/cancellation -> luJfs  =>  _tilde_contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~store/workday-signup-info -> jjbI7  =>  _tilde_store/workday-signup-info.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Dayforce", () => v), n.export(r, "dedupeDayforceFieldStatus",
() => h.dedupeDayforceFieldStatus);
var o = e("@plasmohq/messaging"),
  i = e("~api/autofill-signup-information"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/methods/dom"),
  s = e("~contents/sites/base-filler"),
  u = e("~core/enums"),
  c = e("~store/workday-signup-info"),
  d = e("./agreements"),
  f = e("./auth"),
  p = e("./answer"),
  m = e("./operations"),
  h = e("./rules");
let g = "Resume/CV",
  b = "Cover Letter";

function y(e, t, r, n = {}) {
  console.info(
    `[Dayforce][ExperienceDiagnostics] ${JSON.stringify({stage:e,ruleCount:t?.length??null,sections:Object.entries(h.DAYFORCE_SECTIONS).map(([e,n])=>{let o=r?.[e],i=Array.from(document?.querySelectorAll?.(n.rowSelector)??[]);return{key:e,ruleCount:t?.filter(e=>e.type===n.type).length??null,answerType:null==o?"missing":Array.isArray(o)?"array":typeof o,answerCount:Array.isArray(o)?o.length:null,containerCount:document?.querySelectorAll?.(n.containerSelector)?.length??null,addButtonCount:document?.querySelectorAll?.(n.addButtonSelector)?.length??null,rowCount:i.length,rowFieldKeys:i.map(e=>n.fields.filter(t=>e.querySelector(t.selector)).map(e=>e.key))}}),...n})}`
    )
}
class v extends s.BaseFiller {
  getFieldHandlers() {
    return {
      [u.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, m.fillDayforceTextField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [u.FIELD_TYPE.DATE]: {
        handler: (e, t) => (0, m.fillDayforceDateField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [u.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, m.fillDayforceSelectField)(e, t),
        options: {
          expectArray: !1
        }
      },
      [u.FIELD_TYPE.DROPDOWN]: {
        handler: (e, t) => (0, m.fillDayforceDropdownField)(e, t, this.answer?.regular
          ?.Country),
        options: {
          expectArray: !0
        }
      },
      [u.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, m.fillDayforceCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  async doFillForm(e = !1) {
    if ((0, f.getDayforceAuthPageMode)()) return await this.fillAuthForm(e);
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    y("initial-rules", t), this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    if (y("answers-fetched", t, this.answer, {
        requestReturnedError: "string" == typeof r
      }), "string" == typeof r) return r;
    y("resume-gate-start", t, this.answer);
    let n = await this.uploadResumeBeforeRegularFields();
    if (y("resume-gate-result", t, this.answer, {
        resumeUploaded: n,
        stopsBeforeExperienceFill: !n
      }), !n) return await this.finalizeFillForm();
    let o = this.answer.education?.length ?? 0,
      i = this.answer.workExperience?.length ?? 0;
    console.info("[Dayforce][CompositeSections] reconciling after resume upload", {
      educationCount: o,
      workExperienceCount: i
    }), await (0, m.initializeDayforceCompositeSections)(o, i), console.info(
      "[Dayforce][CompositeSections] reconciliation completed", {
        educationCount: o,
        workExperienceCount: i
      }), await this.fillRegularFields(t);
    let a = t.length;
    console.info("[Dayforce][ConditionalFields] starting dynamic rule re-scan", {
      initialRuleCount: a
    });
    let l = await this.runComboQuestionAutofillIfNeeded(t, e);
    return "string" == typeof l ? (y("dynamic-rescan-failed", t, this.answer, {
      stopsBeforeExperienceFill: !0
    }), l) : (y("dynamic-rescan-completed", t = l, this.answer), console.info(
        "[Dayforce][ConditionalFields] completed dynamic rule re-scan", {
          initialRuleCount: a,
          totalRuleCount: l.length
        }), await this.fillEducationAndEmployment(t), await this.executeSiteSpecificSteps(t),
      await this.finalizeFillForm())
  }
  async fillAuthForm(e) {
    await this.initializeFillForm(), this.answer = {
      education: [],
      workExperience: [],
      skills: [],
      regular: {}
    }, this.timeTrace.requestStartTime = 0, this.timeTrace.fillStartTime = 0;
    let t = (0, f.getDayforceAuthNameRules)();
    if ("register" === (0, f.getDayforceAuthPageMode)() && 2 !== t.length)
    return "Dayforce registration form is not ready. Please wait for the name fields and try again.";
    this.progressTracker.setFieldsRequiredStatus(t);
    let [r, n] = await Promise.all([(0, o.sendToBackground)({
      name: "getAutofillInfo",
      body: {
        forceRefresh: !0
      }
    }).catch(() => null), (0, c.getWorkdaySignupInformation)().catch(() => null)]);
    (0, a.checkpoint)();
    let l = await (0, f.fillDayforceAuthCredentials)({
      email: (0, i.resolveSignupRegistrationEmail)(r),
      password: n?.password ?? ""
    });
    if (!l.foundForm)
    return "Dayforce account form is not ready. Please wait for the form and try again.";
    let s = {
      email: "Email",
      confirmEmail: "Confirm Email Address",
      password: "Password",
      confirmPassword: "Confirm Password"
    };
    for (let e of l.foundRoles) {
      let t = s[e];
      this.progressTracker.updateFieldRequiredStatus({
          label: t,
          required: !0
        }), l.filledRoles.includes(e) || l.skippedExistingRoles.includes(e) ? this
        .progressTracker.updateFilledProgress(t) : this.progressTracker.updateMissedProgress(t)
    }
    if (t.length > 0) {
      let r = await this.fetchFormAnswers(t, e);
      if ("string" == typeof r) return r;
      (0, a.checkpoint)(), await this.fillRegularFields(t)
    }
    if ("register" === (0, f.getDayforceAuthPageMode)()) {
      (0, a.checkpoint)();
      let e = "Privacy Statement and Terms of Use";
      this.progressTracker.updateFieldRequiredStatus({
        label: e,
        required: !0
      });
      let t = await (0, d.acceptDayforceRegistrationAgreements)();
      (0, a.checkpoint)(), t ? this.progressTracker.updateFilledProgress(e) : this
        .progressTracker.updateMissedProgress(e)
    }
    return await this.finalizeFillForm()
  }
  async extractFormRules() {
    return (0, f.getDayforceAuthPageMode)() ? (0, f.getDayforceAuthNameRules)() : await (0, h
      .getRules)()
  }
  getSiteName() {
    return "dayforce"
  }
  async fetchFormAnswers(e, t) {
    let r = await this.requestFormAnswers((0, p.prepareDayforceAnswerRequestRules)(e), t);
    if ("string" == typeof r) return r;
    r && (this.answer = r)
  }
  async uploadResumeBeforeRegularFields() {
    (0, a.updateCurrentField)(g), console.info("[Dayforce][UploadTask] starting", {
      label: g
    });
    try {
      let e = await (0, a.withSkip)(() => (0, m.uploadResume)(this.resumeInfo, this
        .disableUploadResume, this.progressTracker.updateFieldRequiredStatus, this
        .progressTracker.updateFilledProgress, this.progressTracker.updateMissedProgress));
      return console.info("[Dayforce][UploadTask] completed", {
        label: g,
        completed: e
      }), e
    } catch (e) {
      if (e instanceof a.SkippedError) return console.info("[Dayforce][UploadTask] skipped", {
        label: g
      }), this.progressTracker.updateMissedProgress(g), !0;
      throw e
    } finally {
      (0, a.updateCurrentField)(null)
    }
  }
  async handleResumeUpload() {
    await this.uploadResumeBeforeRegularFields()
  }
  async fillEducationAndEmployment(e) {
    await this.fillConfiguredSectionWithSkip(h.DAYFORCE_SECTIONS.education, this.answer
      .education || []), await this.fillConfiguredSectionWithSkip(h.DAYFORCE_SECTIONS
      .workExperience, this.answer.workExperience || [])
  }
  async fillConfiguredSectionWithSkip(e, t) {
    (0, a.updateCurrentField)(e.label), y("section-fill-start", null, this.answer, {
      sectionType: e.type,
      recordCount: t.length
    });
    try {
      await (0, a.withSkip)(() => (0, m.fillConfiguredSection)(e, t, {
        onSectionResultChanged: this.progressTracker.updateSectionResult
      }));
      let r = (0, m.isDayforceConfiguredSectionFilled)(e, t);
      y("section-fill-completed", null, this.answer, {
        sectionType: e.type,
        recordCount: t.length,
        committed: r
      }), r && this.progressTracker.updateFilledProgress(e.label)
    } catch (t) {
      if (t instanceof a.SkippedError) {
        y("section-fill-skipped", null, this.answer, {
          sectionType: e.type,
          reason: "user-skipped"
        }), this.progressTracker.updateMissedProgress(e.label);
        return
      }
      throw y("section-fill-failed", null, this.answer, {
        sectionType: e.type,
        reason: t instanceof Error ? t.name : typeof t
      }), t
    } finally {
      (0, a.updateCurrentField)(null)
    }
  }
  async executeSiteSpecificSteps(e) {
    (0, m.syncCoverLetterRequiredStatus)(this.progressTracker.replaceFieldRequiredStatus),
    await this.uploadCoverLetterWithSkip(), await this.bindSubmitButtonTracking(e)
  }
  async uploadCoverLetterWithSkip() {
    (0, a.updateCurrentField)(b), console.info("[Dayforce][UploadTask] starting", {
      label: b
    });
    try {
      await (0, a.withSkip)(() => (0, m.uploadCoverLetter)(this.coverLetter, this
        .progressTracker.replaceFieldRequiredStatus, this.progressTracker
        .updateFilledProgress, this.progressTracker.updateMissedProgress)), console.info(
        "[Dayforce][UploadTask] completed", {
          label: b
        })
    } catch (e) {
      if (e instanceof a.SkippedError) {
        let e = (0, m.getDayforceCoverLetterStatus)();
        console.info("[Dayforce][UploadTask] skipped", {
          label: b,
          status: e
        }), e && this.progressTracker.replaceFieldRequiredStatus({
          label: b,
          required: "required" === e
        }), "required" === e && this.progressTracker.updateMissedProgress(b);
        return
      }
      throw e
    } finally {
      (0, a.updateCurrentField)(null)
    }
  }
  async checkCoverLetter() {
    this.bindCoverLetterStatusObserver(), this.syncCoverLetterStatus(!0)
  }
  syncCoverLetterStatus(e = !1) {
    let t = (0, m.getDayforceCoverLetterStatus)();
    (e || t !== this.lastCoverLetterStatus) && (this.lastCoverLetterStatus = t, console.info(
      "[Dayforce][CoverLetter] detection status changed", {
        status: t
      }), (0, l.postCoverLetterStatus)(t))
  }
  scheduleCoverLetterStatusSync(e = !1) {
    this.coverLetterStatusTimer && window.clearTimeout(this.coverLetterStatusTimer), this
      .coverLetterStatusTimer = window.setTimeout(() => {
        this.syncCoverLetterStatus(e)
      }, 150)
  }
  bindCoverLetterStatusObserver() {
    if (this.coverLetterStatusObserver) {
      this.scheduleCoverLetterStatusSync(!0);
      return
    }
    let e = document.body || document.documentElement;
    if (!e) {
      this.syncCoverLetterStatus(!0);
      return
    }
    this.coverLetterStatusObserver = new MutationObserver(e => {
      let t = e.some(e => {
        let t = e.target;
        return !!(t instanceof Element && w(t)) || [...e.addedNodes, ...e.removedNodes]
          .some(e => e instanceof Element && w(e))
      });
      t && this.scheduleCoverLetterStatusSync()
    }), this.coverLetterStatusObserver.observe(e, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["class", "style", "hidden", "aria-hidden", "aria-required",
        "required", "test-id"
      ]
    }), this.scheduleCoverLetterStatusSync(!0)
  }
  getSubmitButtonSelector() {
    return './/button[@test-id="application-next-step"] | .//button[@test-id="application-submit"]'
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    return (0, h.resolveDayforceSubmitButtonFromTarget)(e)
  }
  async getAutofillSnapshot(e) {
    return this.lastEducationEmploymentAutofillSnapshot = (0, h
      .getDayforceEducationEmploymentSnapshot)(), (0, h.getDayforceNormalFormSnapshot)(e)
  }
  async getSubmitSnapshot() {
    return this.lastEducationEmploymentSubmitSnapshot = (0, h
      .getDayforceEducationEmploymentSnapshot)(), (0, h.getDayforceNormalFormSnapshot)()
  }
  getAdditionalAutofillSnapshotData() {
    return this.lastEducationEmploymentAutofillSnapshot
  }
  getAdditionalSubmitSnapshotData() {
    return this.lastEducationEmploymentSubmitSnapshot
  }
  submitApplication() {
    (0, f.getDayforceAuthPageMode)() || h.getSubmitButton()?.click()
  }
  constructor(...e) {
    super(...e), this.hasComboQuestions = !0, this.coverLetterStatusObserver = null, this
      .coverLetterStatusTimer = null, this.lastCoverLetterStatus = null, this
      .lastEducationEmploymentAutofillSnapshot = {}, this
      .lastEducationEmploymentSubmitSnapshot = {}, this.formatAnswer = e => (0, p.formatAnswer)(
        e, {
          profileData: {
            country: e.country
          }
        })
  }
}

function w(e) {
  return e.matches('section[test-id="cover-letter-upload-section"]') || e.matches(
    "#jobPostingApplication_files_coverLetter") || e.matches(".ant-upload-list") || !!e.closest(
    'section[test-id="cover-letter-upload-section"]') || !!e.querySelector(
    'section[test-id="cover-letter-upload-section"]')
}

