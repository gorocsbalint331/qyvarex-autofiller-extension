/**
 * Parcel module id: gJ2cP
 * Resolved path: src/contents/sites/intuit.js
 * Dependencies:
 *   ./answer -> 4FaGo  =>  src/contents/sites/intuit/answer.js
 *   ./operations -> 3Am28  =>  src/contents/sites/intuit/operations.js
 *   ./rules -> 1Rydp  =>  src/contents/sites/intuit/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Intuit", () => f);
var o = e("~contents/methods/answer"),
  i = e("~contents/methods/dom"),
  a = e("~contents/sites/base-filler"),
  l = e("~core/enums"),
  s = e("~core/xpath"),
  u = e("./operations"),
  c = e("./rules"),
  d = e("./answer");
class f extends a.BaseFiller {
  getFieldHandlers() {
    return {
      [l.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (r) return (0, u.fillInputTextField)(e.$input, String(r ?? ""))
      },
      [l.FIELD_TYPE.SELECT]: (e, t) => (0, u.fillSelectField)(e, t),
      [l.FIELD_TYPE.MULTI_SELECT]: (e, t) => (0, u.fillMultiselectField)(e, t),
      [l.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, u.fillRadioGroupFiled)(e, t)
    }
  }
  async runPreFillForm() {
    this.taskQueue.add(u.preFillForm), await this.taskQueue.run()
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(t), await this.handleResumeUpload();
    let r = await this.fetchFormAnswers(t, e);
    return "string" == typeof r ? r : (await this.checkSpecificFields(), await this
      .fillRegularFields(t), await this.executeSiteSpecificSteps(t), this.finalizeFillForm())
  }
  async extractFormRules() {
    return await (0, c.extractRules)()
  }
  getSiteName() {
    return "intuit"
  }
  async handleResumeUpload() {
    this.taskQueue.add(async () => {
      let e = document.querySelector("#methodButton--file");
      if (!e) return;
      let t = document.querySelector("#methodButton--fileFieldSetContainer");
      t.style.display = "";
      let r = document.querySelector('input[type="file"][accept*=".pdf"]');
      await (0, i.uploadFiles)(r, await (0, o.fetchPdfAsBlob)(this.resumeInfo), this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress, "Resume/CV")
    }), await this.taskQueue.run()
  }
  async checkSpecificFields() {
    return await (0, u.prefillRegularFields)(this.answer)
  }
  getSubmitButtonSelector() {
    return '//*[@id="complete-questionsscreen-btn"]'
  }
  async getAutofillSnapshot() {
    let e = await (0, c.getFormSnapshot)();
    return e
  }
  async getSubmitSnapshot() {
    return await (0, c.getFormSnapshot)()
  }
  submitApplication() {
    let e = '//*[@id="complete-questionsscreen-btn"]',
      t = (0, s.getFirstOrderedNode)(e);
    t && t?.click()
  }
  constructor(...e) {
    super(...e), this.formatAnswer = d.formatAnswer
  }
}

