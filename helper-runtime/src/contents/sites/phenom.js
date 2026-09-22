/**
 * Parcel module id: 2Q4En
 * Resolved path: src/contents/sites/phenom.js
 * Dependencies:
 *   ../option-resolve-rollout -> kwH9q  =>  src/contents/option-resolve-rollout.js
 *   ./answer -> hTzPb  =>  src/contents/sites/phenom/answer.js
 *   ./cover-letter-detection -> i4Y9d  =>  src/contents/sites/phenom/cover-letter-detection.js
 *   ./education-operation -> 7eN6s  =>  src/contents/sites/phenom/education-operation.js
 *   ./operations -> hv55d  =>  src/contents/sites/phenom/operations.js
 *   ./rules -> eZc7r  =>  src/contents/sites/phenom/rules.js
 *   ./style -> 2T0sW  =>  src/contents/sites/phenom/style.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Phenom", () => w);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/dom"),
  a = e("~contents/methods/track"),
  l = e("~contents/sites/base-filler"),
  s = e("~core/enums"),
  u = e("~enums/http"),
  c = e("./answer"),
  d = e("./cover-letter-detection"),
  f = e("./education-operation"),
  p = e("../option-resolve-rollout"),
  m = e("./operations"),
  h = e("./rules"),
  g = e("./style");
let b = {
  requestStep: async e => await (0, o.sendToBackground)({
    name: "resolveAutofillClientSearchStep",
    body: e
  }),
  captureCandidates: m.capturePhenomSchoolCandidates,
  commitCandidate: async (e, t, r, n) => (0, m.fillResolvedPhenomSchoolField)(e, t.text, r, n)
};

function y(e) {
  return ["school", "school name", "schoolname", "school or university"].includes(e.trim().replace(
    /\s+/g, " ").toLowerCase())
}

function v(e) {
  return Array.isArray(e) ? e.some(e => String(e ?? "").trim().length > 0) : String(e ?? "").trim()
    .length > 0
}
class w extends l.BaseFiller {
  constructor() {
    if (super(), this.hasComboQuestions = !0, this.didUploadResumeSuccessfully = !1, this
      .resumeParserReady = !0, this.didUploadCoverLetterSuccessfully = !1, this
      .didMissResolvedSchool = !1, this.coverLetterCheckVersion = 0, this
      .coverLetterCheckTimer = null, this.checkCoverLetterEventHandler = () => {
        this.checkCoverLetter()
      }, this.checkCoverLetterAfterContinueHandler = e => {
        let t = e.target instanceof Element ? e.target.closest(
          "button, input[type='submit'], a, [role='button']") : null;
        t && (0, d.shouldScheduleCoverLetterCheckForAction)({
          text: t.textContent,
          id: t.id,
          ariaLabel: t.getAttribute("aria-label")
        }) && this.scheduleCoverLetterCheck()
      }, this.formatAnswer = c.formatAnswer, "undefined" == typeof document) return;
    (0, g.injectPhenomApplyPageLayoutFix)(), document.addEventListener("CheckAgentCoverLetter",
      this.checkCoverLetterEventHandler), document.addEventListener("click", this
      .checkCoverLetterAfterContinueHandler, !0), this.scheduleCoverLetterCheck()
  }
  async runWithLoaderGuard(e, t = 200) {
    let r = await (0, m.waitForPhenomLoaderIdle)();
    if (!r) return !1;
    let n = await e(),
      o = await (0, m.waitForPhenomLoaderIdle)(t);
    return !!o && n
  }
  isInitialStep() {
    return (0, h.isInitialApplicationStep)((0, h.getStepInfo)())
  }
  hasResumeInput() {
    return (0, m.hasResumeFieldPresence)()
  }
  isSnapshotFieldFilled(e) {
    let t = e.value;
    if (e.type === s.FIELD_TYPE.SELECT) return "string" == typeof t && t.trim().length > 0;
    if (Array.isArray(t)) return t.some(e => String(e ?? "").trim().length > 0);
    if ("string" == typeof t) return t.trim().length > 0;
    if (null != t) return !0;
    let r = e.text;
    return "string" == typeof r && r.trim().length > 0
  }
  reconcileFilledProgressFromSnapshot() {
    let e = (0, h.getFormSnapshot)(),
      t = Array.isArray(e.fields) ? e.fields : [];
    for (let e of t) {
      let t = "string" == typeof e.label ? e.label.trim() : "";
      if (!t || !this.isSnapshotFieldFilled(e) || !(0, m.hasPhenomAnswerForSnapshotField)(t,
          this.answer)) continue;
      let r = this.progressTracker.fieldStatus.missingFields.includes(t),
        n = this.progressTracker.fieldStatus.filledFields.includes(t);
      (r || !n) && this.progressTracker.updateFilledProgress(t)
    }
  }
  hasCiscoEducationSchoolReadback() {
    let e = (0, h.getFormSnapshot)(),
      t = Array.isArray(this.answer?.education) ? this.answer.education.length : 0,
      r = Array.isArray(e.education) ? e.education : [],
      n = !1;
    if ("string" == typeof e.url) try {
      n = "careers.cisco.com" === new URL(e.url).hostname
    } catch {
      n = !1
    }
    let o = n && t > 0 && r.length >= t && r.slice(0, t).every(e => !!e && "object" ==
      typeof e && Object.entries(e).some(([e, t]) => y(e) && v(t)));
    return n && console.info("[phenom] Cisco Education progress readback", {
      expectedRows: t,
      visibleRows: r.length,
      complete: o
    }), o
  }
  hasCoverLetterInput() {
    return (0, m.hasCoverLetterFieldPresence)()
  }
  scheduleCoverLetterCheck(e = 300) {
    this.coverLetterCheckTimer && clearTimeout(this.coverLetterCheckTimer), this
      .coverLetterCheckTimer = setTimeout(() => {
        this.coverLetterCheckTimer = null, this.checkCoverLetter()
      }, e)
  }
  syncResumeTrackingField() {
    this.isInitialStep() && this.progressTracker.updateFieldRequiredStatus({
      label: "Resume/CV",
      required: !0
    })
  }
  syncCoverLetterTrackingField() {
    this.hasCoverLetterInput() && this.progressTracker.updateFieldRequiredStatus({
      label: "Cover Letter",
      required: !0
    })
  }
  getFieldHandlers() {
    return {
      [s.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (null != r) return this.runWithLoaderGuard(() => (0, m.fillInputTextField)(e
          .$input, String(r), e.label))
      },
      [s.FIELD_TYPE.DATE]: (e, t) => {
        let r = t?.[0],
          n = e.$input;
        if ((0, m.recordPhenomDateDebug)("handler input", {
            label: e.label,
            inputId: n.id,
            inputName: n.name,
            preferredFormat: e.description,
            answerPresent: null != r && "" !== String(r).trim()
          }), null != r) return this.runWithLoaderGuard(async () => {
          let t = await (0, m.fillDateField)(e.$input, String(r), e.description),
            o = n.isConnected ? n : n.id ? document.getElementById(n.id) : null;
          return (0, m.recordPhenomDateDebug)("handler result", {
            label: e.label,
            inputId: n.id,
            inputName: n.name,
            filled: t,
            inputReacquired: o !== n,
            domValuePresent: "" !== String(o?.value ?? "").trim()
          }), t
        }, 0)
      },
      [s.FIELD_TYPE.SEARCH]: (e, t) => {
        let r = (0, f.isPhenomSchoolRule)(e),
          n = (0, f.takeResolvedPhenomSchoolValue)(e);
        if (r && n) return this.runWithLoaderGuard(() => (0, m.fillResolvedPhenomSchoolField)(
            e.$input, n)).then(e => (!0 !== e && (this.didMissResolvedSchool = !0), e))
          .catch(e => {
            throw this.didMissResolvedSchool = !0, e
          });
        let o = t?.[0];
        if (null == o) {
          r && (this.didMissResolvedSchool = !0);
          return
        }
        let i = this.runWithLoaderGuard(() => r ? (0, m.fillSearchField)(e.$input, String(
        o), {
          redactValues: !0
        }) : (0, m.fillSearchField)(e.$input, String(o)));
        return r ? i.then(e => (!1 === e && (this.didMissResolvedSchool = !0), e)).catch(
        e => {
          throw this.didMissResolvedSchool = !0, e
        }) : i
      },
      [s.FIELD_TYPE.SELECT]: (e, t) => this.runWithLoaderGuard(() => (0, m.fillSelectField)(e,
        Array.isArray(t) ? t[0] : t)),
      [s.FIELD_TYPE.RADIOGROUP]: (e, t) => this.runWithLoaderGuard(() => (0, m
        .fillRadioGroupField)(e, Array.isArray(t) ? t[0] : t)),
      [s.FIELD_TYPE.CHECKBOX]: (e, t) => this.runWithLoaderGuard(() => (0, m.fillCheckboxField)(
        e, Array.isArray(t) ? t.map(e => String(e)) : [String(t)]))
    }
  }
  async runPreFillForm() {
    this.taskQueue.add(m.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, h.extractRules)()
  }
  getSiteName() {
    return "phenom"
  }
  getElementRulesRequestUrl() {
    return (0, h.getPhenomFillRequestUrl)()
  }
  async checkCoverLetter() {
    let e = ++this.coverLetterCheckVersion;
    await (0, m.waitForPhenomLoaderIdle)(150);
    for (let t = 0; t < 12; t += 1) {
      if (e !== this.coverLetterCheckVersion) return;
      let t = (0, m.getCoverLetterFieldStatus)();
      if ("required" === t) {
        (0, i.postCoverLetterStatus)(t);
        return
      }
      await new Promise(e => setTimeout(e, 250))
    }
    e === this.coverLetterCheckVersion && (0, i.postCoverLetterStatus)("")
  }
  async handleResumeUpload() {
    let e = (0, h.getStepInfo)();
    if (console.log("[phenom] handleResumeUpload entry", {
        step: e.step,
        stepName: e.stepName,
        disableUploadResume: this.disableUploadResume
      }), this.didUploadResumeSuccessfully = !1, this.resumeParserReady = !0, !this
      .isInitialStep()) return;
    let t = await (0, m.waitForResumeFileInput)();
    if (!t) {
      console.log("[phenom] handleResumeUpload skip: no resume input found");
      return
    }
    if (this.disableUploadResume) {
      console.log("[phenom] handleResumeUpload skip: upload disabled"), this
        .syncResumeTrackingField(), this.progressTracker.updateMissedProgress("Resume/CV");
      return
    }
    this.taskQueue.add(async () => {
      console.log("[phenom] handleResumeUpload task start");
      let e = await (0, m.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
      e.uploaded ? (this.didUploadResumeSuccessfully = !0, this.resumeParserReady = e
        .parserReady, console.log(
          "[phenom] handleResumeUpload task result: upload succeeded", {
            parserReady: e.parserReady
          })) : (console.log("[phenom] handleResumeUpload task result: upload failed"),
        this.syncResumeTrackingField(), this.progressTracker.updateMissedProgress(
          "Resume/CV"))
    }), await this.taskQueue.run()
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = this.isInitialStep(),
      r = t && this.hasResumeInput();
    if (await this.handleResumeUpload(), t && this.didUploadResumeSuccessfully && !this
      .resumeParserReady) return console.warn(
        "[phenom] skip initial-step form fill because Cisco resume parser did not settle"),
      this.syncResumeTrackingField(), this.progressTracker.fieldStatus;
    let n = await this.extractFormRules();
    if (this.progressTracker.setFieldsRequiredStatus(n), 0 === n.length) return (console.warn(
      "[phenom] skip fill-v2: no extracted rules", {
        initialStep: t,
        hasResumeInput: r
      }), r) ? (this.syncResumeTrackingField(), this.didUploadResumeSuccessfully && !this
      .progressTracker.fieldStatus.filledFields.includes("Resume/CV") && this
      .progressTracker.updateFilledProgress("Resume/CV"), await this.finalizeFillForm()) : (
      (0, a.sendHttpStatusMessage)(u.CUSTOM_ERROR_CODES.NO_ELEMENTS), u.CUSTOM_ERROR_CODES
      .NO_ELEMENTS);
    r && (this.syncResumeTrackingField(), this.didUploadResumeSuccessfully && !this
        .progressTracker.fieldStatus.filledFields.includes("Resume/CV") && this.progressTracker
        .updateFilledProgress("Resume/CV")), t && this.hasCoverLetterInput() && this
      .syncCoverLetterTrackingField();
    let o = await this.fetchFormAnswers(n, e);
    if ("string" == typeof o) return o;
    let i = n.filter(e => e.type !== s.FIELD_TYPE.EDUCATION && e.type !== s.FIELD_TYPE
      .EMPLOYMENT);
    await this.fillRegularFields(i);
    let l = await this.runWithLoaderGuard(() => (0, m.fillPhoneCountryCodeSelectsFromRecord)(
      this.answer.regular));
    if (Array.isArray(l))
      for (let e of l) this.progressTracker.updateFilledProgress(e);
    this.reconcileFilledProgressFromSnapshot();
    let c = await this.runComboQuestionAutofillIfNeeded(n, e);
    if ("string" == typeof c) return c;
    n = c, this.reconcileFilledProgressFromSnapshot(), await this.fillEducationAndEmployment(n);
    let d = await this.runWithLoaderGuard(() => (0, m.fillRequiredConsentCheckboxes)());
    for (let e of d) this.progressTracker.updateFilledProgress(e);
    return await this.executeSiteSpecificSteps(n), this.reconcileFilledProgressFromSnapshot(),
      await this.finalizeFillForm()
  }
  async fillEducationAndEmployment(e) {
    let t = (0, h.getArrayContainer)(s.FIELD_TYPE.EDUCATION),
      r = (0, h.getArrayContainer)(s.FIELD_TYPE.EMPLOYMENT);
    t && Array.isArray(this.answer?.education) && this.answer.education.length > 0 && (this
        .didMissResolvedSchool = !1, await (0, m.processCompositeBlocks)(this.answer.education,
          s.FIELD_TYPE.EDUCATION, this.operationConfig, this.taskQueue, async (e, t, r) => {
            e.type === s.FIELD_TYPE.DATE && (0, m.recordPhenomDateDebug)(
              "education answer match", {
                recordIndex: r,
                label: e.label,
                exactLabelPresent: Object.prototype.hasOwnProperty.call(t, e.label),
                recordKeys: Object.keys(t)
              });
            let n = (0, f.isPhenomSchoolRule)(e),
              o = n ? (0, f.getPhenomSchoolRecordKey)(e, t) : null,
              i = n ? (0, f.getPhenomSchoolOriginalAnswer)(e, t) : "";
            n && !i && (this.didMissResolvedSchool = !0);
            let a = "function" == typeof f.resolvePhenomEducationClientSearchRecordForRule ?
              await (0, f.resolvePhenomEducationClientSearchRecordForRule)(e, t, r, {
                ...b,
                enabled: p.V119_OPTION_RESOLVE_ROLLOUT.phenomEducationSchool
              }) : await (0, f.resolvePhenomEducationRecordForRule)(e, t, r, {
                enabled: p.V119_OPTION_RESOLVE_ROLLOUT.phenomEducationSchool,
                typeProbe: async (e, t, r) => {
                  let n = await (0, m.typePhenomSchoolProbe)(e, t, r);
                  if (!0 !== n) throw Error("Phenom school probe was not confirmed")
                },
                clearProbe: async (e, t) => {
                  let r = await (0, m.clearPhenomSchoolProbe)(e, t);
                  if (!0 !== r) throw Error("Phenom school clear was not confirmed")
                }
              }),
              l = (0, f.getFirstNonblankPhenomSchoolValue)(o ? a[o] : void 0);
            return n && i && o && !l ? {
              ...a,
              [o]: i
            } : a
          }, {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onSkipped: () => {
              this.progressTracker.updateMissedProgress("Education")
            },
            onCompleted: () => {
              this.didMissResolvedSchool && !this.hasCiscoEducationSchoolReadback() ? this
                .progressTracker.updateMissedProgress("Education") : this.progressTracker
                .updateFilledProgress("Education")
            }
          })), r && Array.isArray(this.answer?.workExperience) && this.answer.workExperience
      .length > 0 && (await (0, m.processCompositeBlocks)(this.answer.workExperience, s
        .FIELD_TYPE.EMPLOYMENT, this.operationConfig, this.taskQueue, void 0, {
          onSectionResultChanged: this.progressTracker.updateSectionResult
        }), this.progressTracker.updateFilledProgress("Employment"))
  }
  async executeSiteSpecificSteps(e) {
    let t = this.hasCoverLetterInput();
    t && this.syncCoverLetterTrackingField(), this.didUploadCoverLetterSuccessfully = !1, t &&
      this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName && (this.taskQueue
        .add(async () => {
          let e = await (0, m.uploadCoverLetter)({
              coverLetterId: this.coverLetter.coverLetterId,
              coverLetterName: this.coverLetter.coverLetterName,
              markdown: this.coverLetter.markdown,
              useLegacyDownload: this.coverLetter.useLegacyDownload
            }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
            .updateFilledProgress);
          if (!e) {
            this.progressTracker.updateMissedProgress("Cover Letter");
            return
          }
          this.didUploadCoverLetterSuccessfully = !0
        }), await this.taskQueue.run()), !t || (this.didUploadCoverLetterSuccessfully ? this
        .progressTracker.fieldStatus.filledFields.includes("Cover Letter") || this
        .progressTracker.updateFilledProgress("Cover Letter") : this.progressTracker.fieldStatus
        .missingFields.includes("Cover Letter") || this.progressTracker.updateMissedProgress(
          "Cover Letter")), await super.executeSiteSpecificSteps(e)
  }
  async getAutofillSnapshot(e) {
    return (0, h.getTrackingFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, h.getTrackingFormSnapshot)()
  }
  getSubmitButtonSelector() {
    return './/form[contains(@class, "rjsf")]//button[@type="submit"] | .//form[contains(@class, "rjsf")]//input[@type="submit"]'
  }
  submitApplication() {
    m.getContinueButton()?.click()
  }
}

