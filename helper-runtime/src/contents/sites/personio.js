/**
 * Parcel module id: 53R5p
 * Resolved path: src/contents/sites/personio.js
 * Dependencies:
 *   ./operations -> dXVbA  =>  src/contents/sites/personio/operations.js
 *   ./rules -> 3hFfz  =>  src/contents/sites/personio/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Personio", () => p);
var o = e("~contents/methods/dom"),
  i = e("~contents/methods/track"),
  a = e("~contents/sites/base-filler"),
  l = e("~core/enums"),
  s = e("~core/phone-country-code"),
  u = e("~core/xpath"),
  c = e("./operations"),
  d = e("./rules");
let f = 'button.career-submit-application-btn[type="submit"]';
class p extends a.BaseFiller {
  getFieldHandlers() {
    return {
      [l.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, c.fillInputTextField)(e, t, (0, s.resolvePhoneCountryCodeAnswer)(
          this.answer)),
        options: {
          expectArray: !1
        }
      },
      [l.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, c.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [l.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, c.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [l.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, c.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  async checkCoverLetter() {
    (0, o.postCoverLetterStatus)((0, c.getPersonioCoverLetterStatus)())
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    return "string" == typeof r ? r : (this.bindSubmitStatusTracking(), await this
      .fillRegularFields(t), await this.handleDocumentUploads(), await this
      .bindSubmitButtonTracking(t), await this.finalizeFillForm())
  }
  bindSubmitStatusTracking() {
    let e = (0, u.getFirstOrderedNodeSafe)(
      '//button[contains(@type, "submit")] | //button[contains(@class, "submit")]', document
      .body);
    e && (0, i.bindSubmitButton)(e.textContent || "Submit", this.progressTracker.fieldStatus,
      this.timeTrace)
  }
  async handleDocumentUploads() {
    let e = (0, c.getPersonioCoverLetterStatus)();
    e && this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: "required" === e,
        type: "file"
      }), this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") :
      this.taskQueue.add(async () => {
        await (0, c.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      });
    let t = this.getCoverLetterFilePayload();
    e && t ? this.taskQueue.add(async () => {
        try {
          await (0, c.uploadCoverLetter)(t, this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress, "required" === e ? this
            .progressTracker.updateMissedProgress : () => {}, "required" === e)
        } catch (t) {
          console.error("Error uploading Personio cover letter:", t), "required" === e &&
            this.progressTracker.updateMissedProgress("Cover Letter")
        }
      }) : "required" === e && this.progressTracker.updateMissedProgress("Cover Letter"),
      await this.taskQueue.run()
  }
  getCoverLetterFilePayload() {
    let e = this.coverLetter;
    return e?.coverLetterId && e.coverLetterName ? {
      coverLetterId: e.coverLetterId,
      coverLetterName: e.coverLetterName,
      markdown: e.markdown,
      useLegacyDownload: e.useLegacyDownload
    } : null
  }
  async extractFormRules() {
    return (0, d.extractRules)()
  }
  getSiteName() {
    return "personio"
  }
  async getAutofillSnapshot() {
    return (0, d.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, d.getFormSnapshot)()
  }
  submitApplication() {
    let e = this.getSubmitButton();
    e && e.click()
  }
  getSubmitButton() {
    return document.querySelector(f) || (0, u.getFirstOrderedNodeSafe)(
      '//button[contains(@type, "submit")] | //button[contains(@class, "submit")]', document
      .body)
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    let t = e.closest("button");
    return t instanceof HTMLButtonElement ? t.matches(f) ? t : this.getSubmitButton() === t ?
      t : null : null
  }
}

