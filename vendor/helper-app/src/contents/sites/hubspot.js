/**
 * Parcel module id: kqg1H
 * Resolved path: src/contents/sites/hubspot.js
 * Dependencies:
 *   ./operations -> gFF2N  =>  src/contents/sites/hubspot/operations.js
 *   ./rules -> 7kZkl  =>  src/contents/sites/hubspot/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "HubSpot", () => c);
var o = e("~contents/methods/dom"),
  i = e("~contents/sites/base-filler"),
  a = e("~core/enums"),
  l = e("~core/xpath"),
  s = e("./operations"),
  u = e("./rules");
class c extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, s.fillInputTextField)(e.$input, t),
        options: {
          expectArray: !1
        }
      },
      [a.FIELD_TYPE.SELECT]: (e, t) => (0, s.fillSelectField)(e, t),
      [a.FIELD_TYPE.SEARCH]: (e, t) => (0, s.fillSearchField)(e, t),
      [a.FIELD_TYPE.CHECKBOX]: (e, t) => (0, s.fillCheckboxField)(e, t),
      [a.FIELD_TYPE.RADIO]: (e, t) => (0, s.fillRadioField)(e, t)
    }
  }
  async extractFormRules() {
    return (0, u.extractRules)()
  }
  getSiteName() {
    return "hubspot"
  }
  hasUploadOnlyForm() {
    return !!(0, s.getUploadSlotDom)("resume").input || (0, s.hasCoverLetterSlot)()
  }
  async checkCoverLetter() {
    (0, o.postCoverLetterStatus)((0, s.hasCoverLetterSlot)() ? "required" : "")
  }
  async handleResumeUpload() {
    let e = (0, s.getUploadSlotDom)("resume").input;
    !this.disableUploadResume && this.resumeInfo?.id && e ? this.taskQueue.add(async () => {
      await (0, s.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
    }) : e && (this.disableUploadResume && await (0, s.removeUploadedFile)("resume"), this
      .progressTracker.updateFieldRequiredStatus({
        label: "Resume/CV",
        required: !0
      }), this.progressTracker.updateMissedProgress("Resume/CV")), await this.taskQueue.run()
  }
  async executeSiteSpecificSteps(e) {
    (0, s.hasCoverLetterSlot)() && this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: !0
      }), this.coverLetter?.coverLetterId && this.coverLetter.coverLetterName ? (this.taskQueue
        .add(async () => {
          await (0, s.uploadCoverLetter)({
              coverLetterId: this.coverLetter.coverLetterId,
              coverLetterName: this.coverLetter.coverLetterName,
              markdown: this.coverLetter.markdown,
              useLegacyDownload: this.coverLetter.useLegacyDownload
            }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
            .updateFilledProgress)
        }), await this.taskQueue.run()) : (0, s.hasCoverLetterSlot)() && this.progressTracker
      .updateMissedProgress("Cover Letter"), await this.bindSubmitButtonTracking(e)
  }
  getSubmitButtonSelector() {
    return '//button[@type="submit" and contains(normalize-space(.), "Submit Your Application")]'
  }
  async getAutofillSnapshot(e) {
    return (0, u.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, u.getFormSnapshot)()
  }
  submitApplication() {
    let e = (0, l.getFirstOrderedNode)(this.getSubmitButtonSelector());
    e && !e.disabled && e.click()
  }
}

