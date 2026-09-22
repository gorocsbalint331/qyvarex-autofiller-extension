/**
 * Parcel module id: dUXAd
 * Resolved path: src/contents/sites/ycombinator.js
 * Dependencies:
 *   ./operations -> foT7A  =>  src/contents/sites/ycombinator/operations.js
 *   ./rules -> lCWmd  =>  src/contents/sites/ycombinator/rules.js
 *   ./submit-tracking -> 5ec9e  =>  src/contents/sites/ycombinator/submit-tracking.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "YCombinator", () => c);
var o = e("~contents/sites/base-filler"),
  i = e("~core/enums"),
  a = e("~core/phone-country-code"),
  l = e("./operations"),
  s = e("./rules"),
  u = e("./submit-tracking");
class c extends o.BaseFiller {
  getFieldHandlers() {
    return {
      [i.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, l.fillInputTextField)(e, t, (0, a.resolvePhoneCountryCodeAnswer)(
          this.answer)),
        options: {
          expectArray: !1
        }
      },
      [i.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, l.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [i.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, l.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [i.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, l.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  getSiteName() {
    return "ycombinator"
  }
  async extractFormRules() {
    let e = await (0, s.extractRules)();
    return this.snapshotRules = e, e
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.requestFormAnswers(t, e);
    return "string" == typeof r ? r : (r && (this.answer = r), await this.fillRegularFields(t),
      await this.handleResumeUpload(), await this.bindSubmitButtonTracking(t), await this
      .finalizeFillForm())
  }
  async handleResumeUpload() {
    this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this
      .taskQueue.add(async () => {
        await (0, l.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), await this.taskQueue.run()
  }
  async getAutofillSnapshot(e) {
    return this.snapshotRules = e, (0, s.getYCombinatorFormSnapshotFromRules)(e)
  }
  async getSubmitSnapshot() {
    return (0, s.getYCombinatorFormSnapshotFromRules)(this.snapshotRules)
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    return (0, u.resolveYCombinatorSubmitButton)(e)
  }
  submitApplication() {
    u.getYCombinatorSubmitButton()?.click()
  }
  cancelAutoFill() {
    this.taskQueue.clear()
  }
  constructor(...e) {
    super(...e), this.snapshotRules = []
  }
}

