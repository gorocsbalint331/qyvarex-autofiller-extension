/**
 * Parcel module id: bZSKO
 * Resolved path: src/contents/sites/cisco.js
 * Dependencies:
 *   ./answer -> leElr  =>  src/contents/sites/cisco/answer.js
 *   ./operations -> 48J5W  =>  src/contents/sites/cisco/operations.js
 *   ./rules -> hx3S7  =>  src/contents/sites/cisco/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Cisco", () => u);
var o = e("~contents/sites/base-filler"),
  i = e("~core/enums"),
  a = e("./answer"),
  l = e("./operations"),
  s = e("./rules");
class u extends o.BaseFiller {
  syncResumeTrackingField() {
    (0, l.isInitialStep)() && (0, l.hasResumeInput)() && this.progressTracker
      .updateFieldRequiredStatus({
        label: "Resume/CV",
        required: !0
      })
  }
  syncCoverLetterTrackingField() {
    (0, l.hasCoverLetterInput)() && this.progressTracker.updateFieldRequiredStatus({
      label: "Cover Letter",
      required: !1
    })
  }
  getFieldHandlers() {
    return {
      [i.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (null != r) return (0, l.fillInputTextField)(e.$input, String(r))
      },
      [i.FIELD_TYPE.DATE]: (e, t) => {
        let r = t?.[0];
        if (null != r) return (0, l.fillDateField)(e.$input, String(r), e.description)
      },
      [i.FIELD_TYPE.SEARCH]: (e, t) => {
        let r = t?.[0];
        if (null != r) return (0, l.fillSearchField)(e.$input, String(r))
      },
      [i.FIELD_TYPE.SELECT]: (e, t) => (0, l.fillSelectField)(e, t),
      [i.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, l.fillRadioGroupField)(e, t),
      [i.FIELD_TYPE.CHECKBOX]: (e, t) => (0, l.fillCheckboxField)(e, t),
      [i.FIELD_TYPE.EDUCATION]: () => Promise.resolve(),
      [i.FIELD_TYPE.EMPLOYMENT]: () => Promise.resolve()
    }
  }
  async runPreFillForm() {
    this.taskQueue.add(l.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, s.extractRules)()
  }
  getSiteName() {
    return "cisco"
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm(), await this.handleResumeUpload(), await this
      .handleCoverLetterUpload();
    let t = await this.extractFormRules();
    if (this.progressTracker.setFieldsRequiredStatus(t), this.syncResumeTrackingField(), this
      .syncCoverLetterTrackingField(), t.length > 0) {
      let r = await this.fetchFormAnswers(t, e);
      if ("string" == typeof r) return r;
      await this.fillRegularFields(t), await (0, l.preserveCiscoLegalNameFields)(t, this
      .answer);
      let n = await this.runComboQuestionAutofillIfNeeded(t, e);
      if ("string" == typeof n) return n;
      t = n
    }
    return await this.fillEducationAndEmployment(t), await this.executeSiteSpecificSteps(t),
      await this.finalizeFillForm()
  }
  async handleResumeUpload() {
    if ((0, l.isInitialStep)() && (0, l.hasResumeInput)()) {
      if (this.disableUploadResume) {
        this.syncResumeTrackingField(), this.progressTracker.updateMissedProgress("Resume/CV");
        return
      }
      this.taskQueue.add(async () => {
        let e = await (0, l.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        e || this.progressTracker.updateMissedProgress("Resume/CV")
      }), await this.taskQueue.run()
    }
  }
  async handleCoverLetterUpload() {
    if (!(0, l.hasCoverLetterInput)()) return;
    if (this.syncCoverLetterTrackingField(), !this.coverLetter?.coverLetterId || !this
      .coverLetter?.coverLetterName) {
      this.progressTracker.updateMissedProgress("Cover Letter");
      return
    }
    let e = this.coverLetter;
    this.taskQueue.add(async () => {
      let t = await (0, l.uploadCoverLetter)({
          coverLetterId: e.coverLetterId,
          coverLetterName: e.coverLetterName,
          markdown: e.markdown,
          useLegacyDownload: e.useLegacyDownload
        }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress);
      t || this.progressTracker.updateMissedProgress("Cover Letter")
    }), await this.taskQueue.run()
  }
  async executeSiteSpecificSteps(e) {
    let t = (0, s.getFormSnapshot)(),
      r = (0, s.getAdditionalFormSnapshotData)(),
      n = (0, l.getContinueButton)();
    if (n && "continue" === (0, l.getAdvanceButtonType)(n)) {
      this.continueButtonHandler && n.removeEventListener("click", this.continueButtonHandler),
        this.continueButtonHandler = (0, l.submitHandler).bind(null, t, r, this.answer, e), n
        .addEventListener("click", this.continueButtonHandler);
      return
    }
    await super.executeSiteSpecificSteps(e)
  }
  async fillRegularFields(e) {
    await super.fillRegularFields((0, s.getCiscoRegularFillRules)(e))
  }
  async fillEducationAndEmployment(e) {
    let t = e.some(e => e.type === i.FIELD_TYPE.EDUCATION),
      r = e.some(e => e.type === i.FIELD_TYPE.EMPLOYMENT),
      n = (0, s.getArrayContainer)(i.FIELD_TYPE.EDUCATION),
      o = (0, s.getArrayContainer)(i.FIELD_TYPE.EMPLOYMENT);
    t && n && Array.isArray(this.answer?.education) && this.answer.education.length > 0 && (
      await (0, l.processCompositeBlocks)(this.answer.education, i.FIELD_TYPE.EDUCATION, this
        .operationConfig, this.taskQueue, {
          onSectionResultChanged: this.progressTracker.updateSectionResult
        }), this.progressTracker.updateFilledProgress("Education")), r && o && Array.isArray(
      this.answer?.workExperience) && this.answer.workExperience.length > 0 && (await (0, l
      .processCompositeBlocks)(this.answer.workExperience, i.FIELD_TYPE.EMPLOYMENT, this
      .operationConfig, this.taskQueue, {
        onSectionResultChanged: this.progressTracker.updateSectionResult
      }), this.progressTracker.updateFilledProgress("Employment"))
  }
  async getAutofillSnapshot() {
    return (0, s.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, s.getFormSnapshot)()
  }
  getAdditionalAutofillSnapshotData(e) {
    return (0, s.getAdditionalFormSnapshotData)()
  }
  getAdditionalSubmitSnapshotData() {
    return (0, s.getAdditionalFormSnapshotData)()
  }
  submitApplication() {
    l.getContinueButton()?.click()
  }
  constructor(...e) {
    super(...e), this.hasComboQuestions = !0, this.comboQuestionSettleDelayMs = 500, this
      .continueButtonHandler = null, this.formatAnswer = a.formatAnswer
  }
}

