/**
 * Parcel module id: 6yD7X
 * Resolved path: contents/sites/jobvite.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~contents/sites/jobvite/answer -> 92ViD  =>  _tilde_contents/sites/jobvite/answer.js
 *   ~contents/sites/jobvite/operations -> 2W7tx  =>  _tilde_contents/sites/jobvite/operations.js
 *   ~contents/sites/jobvite/rules -> e00gr  =>  _tilde_contents/sites/jobvite/rules.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/pagenation -> l1kUK  =>  _tilde_core/pagenation.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Jobvite", () => p);
var o = e("~contents/methods/answer"),
  i = e("~contents/methods/dom"),
  a = e("~contents/sites/base-filler"),
  l = e("~contents/sites/jobvite/answer"),
  s = e("~contents/sites/jobvite/operations"),
  u = e("~contents/sites/jobvite/rules"),
  c = e("~core/dom"),
  d = e("~core/enums"),
  f = e("~core/pagenation");
class p extends a.BaseFiller {
  getFieldHandlers() {
    return {
      [d.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, s.fillInputField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [d.FIELD_TYPE.CHECKBOX]: (e, t) => (0, s.fillCheckboxField)(e.$checkboxs, t),
      [d.FIELD_TYPE.SELECT]: (e, t) => (0, s.fillSelectField)(e.$input, t),
      [d.FIELD_TYPE.RADIO]: (e, t) => (0, s.fillRadioField)(e.$input, t),
      [d.FIELD_TYPE.DATE]: {
        handler: (e, t) => (0, s.fillDateField)(e.$input, t),
        options: {
          expectArray: !1
        }
      }
    }
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    return "string" == typeof r ? r : (this.answer = (0, l.formatAnswer)(this.answer),
      await this.handleResumeUpload(), await this.fillRegularFields(t), await this
      .fillEducationAndEmployment(t), await this.executeSiteSpecificSteps(t), await this
      .finalizeFillForm())
  }
  async extractFormRules() {
    let e = await (0, u.getRules)();
    return await (0, s.hasUploadedResume)() && e.push({
      label: "Resume/CV",
      required: !0
    }), e
  }
  getSiteName() {
    return "jobvite"
  }
  async fillEducationAndEmployment(e) {
    let t = e.filter(e => e.type === d.FIELD_TYPE.EMPLOYMENT),
      r = this.answer?.workExperience || [];
    if (0 !== t.length && 0 !== r.length) {
      for (let e of (console.info("[Jobvite][Employment] filling structured Work History", {
          ruleCount: t.length,
          recordCount: r.length
        }), (0, c.setSectionResultFocusRules)("employment", t), (0, o
          .getEmploymentOperations)(t, r, this.operationConfig, void 0, {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onCompleted: () => this.progressTracker.updateFilledProgress("Employment"),
          onSkipped: () => this.progressTracker.updateMissedProgress("Employment")
        }))) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
  }
  formatAnswer(e) {
    return (0, l.formatAnswer)(e)
  }
  async checkCoverLetter() {
    (0, i.postCoverLetterStatus)(await (0, s.waitForCoverLetterSlot)() ? (0, s
      .getCoverLetterStatus)() : "")
  }
  async executeSiteSpecificSteps(e) {
    try {
      await (0, s.uploadResume)(this.resumeInfo), this.progressTracker.updateFilledProgress(
        "Resume/CV")
    } catch (e) {
      console.error("Error uploading resume:", e), this.progressTracker.updateMissedProgress(
        "Resume/CV")
    }
    let t = (0, s.getCoverLetterStatus)();
    if (t && this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: "required" === t
      }), this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName) try {
      let e = await (0, s.uploadCoverLetter)({
        coverLetterId: this.coverLetter.coverLetterId,
        coverLetterName: this.coverLetter.coverLetterName,
        markdown: this.coverLetter.markdown,
        useLegacyDownload: this.coverLetter.useLegacyDownload
      });
      e ? this.progressTracker.updateFilledProgress("Cover Letter") : this.progressTracker
        .updateMissedProgress("Cover Letter")
    } catch (e) {
      console.error("Error uploading cover letter:", e), this.progressTracker
        .updateMissedProgress("Cover Letter")
    }
    this.taskQueue.add(() => {
      (0, s.blurPage)()
    }), await this.taskQueue.run(), await this.bindSubmitButtonTracking(e)
  }
  getSubmitButtonSelector() {
    return "//button[((@ng-click='nextStep()' and @aria-label='Next') or (@type='submit' and @aria-label='Send Application')) and not(contains(@class, 'ng-hide'))]"
  }
  async getAutofillSnapshot(e) {
    return (0, u.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, u.getFormSnapshot)()
  }
  submitApplication() {
    let e = Array.from(document.querySelectorAll(f.JOBVITE_ADVANCE_BUTTON_SELECTOR)).find(e => {
      if (e.classList.contains("ng-hide")) return !1;
      let t = window.getComputedStyle(e);
      return "none" !== t.display && "hidden" !== t.visibility
    });
    e?.click()
  }
}

