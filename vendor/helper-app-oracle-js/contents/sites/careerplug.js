/**
 * Parcel module id: iBjKs
 * Resolved path: contents/sites/careerplug.js (oracle restore)
 * Dependencies:
 *   ./operations -> aJPXi  =>  src/contents/sites/careerplug/operations.js
 *   ./rules -> hHAqn  =>  src/contents/sites/careerplug/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "CareerPlug", () => u);
var o = e("~contents/methods/dom"),
  i = e("~contents/sites/base-filler"),
  a = e("~core/enums"),
  l = e("./operations"),
  s = e("./rules");
class u extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, l.fillInputTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [a.FIELD_TYPE.COVER_LETTER]: {
        handler: (e, t) => (0, l.fillInputTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [a.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, l.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [a.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, l.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [a.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, l.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = this.prepareCoverLetterRules(await this.extractFormRules());
    this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    return "string" == typeof r ? r : (await this.handleResumeUpload(), await this
      .fillRegularFields(t), await this.fillCoverLetterFields(), await this
      .executeSiteSpecificSteps(t), await this.finalizeFillForm())
  }
  async extractFormRules() {
    return (0, s.extractRules)()
  }
  getSiteName() {
    return "careerplug"
  }
  async handleResumeUpload() {
    this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this
      .taskQueue.add(async () => {
        await (0, l.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), await this.taskQueue.run()
  }
  async fillCoverLetterFields() {
    if (await super.fillCoverLetterFields(), this.hasUploadedCoverLetter || !this.coverLetter
      ?.coverLetterId) return;
    let e = this.coverLetter;
    this.hasUploadedCoverLetter = await (0, l.uploadCoverLetter)({
        coverLetterId: e.coverLetterId,
        coverLetterName: e.coverLetterName || "Cover Letter",
        markdown: e.markdown
      }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
      .updateFilledProgress)
  }
  async checkCoverLetter() {
    (0, o.postCoverLetterStatus)((0, l.getCareerPlugCoverLetterStatus)())
  }
  async getAutofillSnapshot() {
    return (0, s.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, s.getFormSnapshot)()
  }
  getSubmitButtonSelector() {
    return './/input[@type="submit"] | .//button[@type="submit"]'
  }
  submitApplication() {
    let e = document.querySelector('input[type="submit"]') || document.querySelector(
      'button[type="submit"]');
    e?.click()
  }
  constructor(...e) {
    super(...e), this.hasUploadedCoverLetter = !1
  }
}

