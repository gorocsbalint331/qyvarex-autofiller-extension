/**
 * Parcel module id: 8f5hc
 * Resolved path: contents/sites/tesla.js (oracle restore)
 * Dependencies:
 *   ./date -> aUedF  =>  src/contents/sites/tesla/date.js
 *   ./operations -> jrOUu  =>  src/contents/sites/tesla/operations.js
 *   ./rules -> fvMKj  =>  src/contents/sites/tesla/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  _tilde_core/phone-country-code.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Tesla", () => f);
var o = e("~contents/methods/answer"),
  i = e("~contents/sites/base-filler"),
  a = e("~core/enums"),
  l = e("~core/phone-country-code"),
  s = e("~core/xpath"),
  u = e("./operations"),
  c = e("./date"),
  d = e("./rules");
class f extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (!r) return;
        let n = this.answer?.country;
        return (0, u.fillInputTextField)(e, String(r ?? ""), n, (0, l
          .resolvePhoneCountryCodeAnswer)(this.answer))
      },
      [a.FIELD_TYPE.DATE]: (e, t) => {
        let r = t?.[0];
        if (r) return (0, c.fillTeslaDateField)(e, String(r ?? ""))
      },
      [a.FIELD_TYPE.SELECT]: (e, t) => (0, u.fillSelectField)(e, t),
      [a.FIELD_TYPE.CHECKBOX]: (e, t) => (0, u.fillCheckboxField)(e, t),
      [a.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, u.fillRadioGroupFiled)(e, t)
    }
  }
  async doFillForm(e = !1) {
    try {
      await this.initializeFillForm();
      let t = await this.extractFormRules();
      this.progressTracker.setFieldsRequiredStatus(t);
      let r = await this.fetchFormAnswers(t, e);
      if ("string" == typeof r) return r;
      await this.handleResumeUpload();
      let n = [...(0, o.getRegularOperations)(t, this.answer.regular, this.operationConfig)];
      for (let e of n) try {
        let t = e();
        t && "function" == typeof t.then && await t
      } catch (e) {
        console.error("Operation execution error:", e)
      }
      return await (0, u.scrollTeslaEeoDisclosurePanel)(), this.finalizeFillForm()
    } catch (e) {
      return console.error("fillForm error:", e), this.taskQueue.clear(), this
      .finalizeFillForm()
    }
  }
  async extractFormRules() {
    return await (0, d.extractRules)()
  }
  getSiteName() {
    return "tesla"
  }
  async getAutofillSnapshot(e) {
    return (0, d.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, d.getFormSnapshot)()
  }
  async finalizeFillForm() {
    let e = (0, d.getFormSnapshot)(),
      t = document.querySelector('button[name="next"]');
    return t && "next" === t.name && (this.nextButtonHandler && t.removeEventListener("click",
        this.nextButtonHandler), this.nextButtonHandler = (0, u.submitHandler).bind(null, e),
      t.addEventListener("click", this.nextButtonHandler)), await super.finalizeFillForm()
  }
  submitApplication() {
    let e = ".//button[@name='submit']",
      t = (0, s.getFirstOrderedNode)(e);
    t && t?.click()
  }
  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV");
      return
    }
    let e = document.querySelector('input[type="file"][name="personal.resume"]');
    if (!e) {
      console.warn("[Tesla] Resume input not found"), this.progressTracker.updateMissedProgress(
        "Resume/CV");
      return
    }
    await (0, u.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus,
      this.progressTracker.updateFilledProgress)
  }
  constructor(...e) {
    super(...e), this.nextButtonHandler = null
  }
}

