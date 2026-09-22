/**
 * Parcel module id: kl5FS
 * Resolved path: src/contents/sites/breezy.js
 * Dependencies:
 *   ../base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ./rules -> hU5fc  =>  src/contents/sites/breezy/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/breezy/answer -> 1Ai17  =>  src/contents/sites/breezy/answer.js
 *   ~contents/sites/breezy/operations -> 4P8sE  =>  src/contents/sites/breezy/operations.js
 *   ~contents/sites/breezy/rules -> hU5fc  =>  src/contents/sites/breezy/rules.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Breezy", () => y);
var o = e("~contents/methods/answer"),
  i = e("~contents/methods/dom"),
  a = e("~contents/sites/breezy/answer"),
  l = e("~contents/sites/breezy/operations"),
  s = e("~contents/sites/breezy/rules"),
  u = e("~core/dom"),
  c = e("~core/enums"),
  d = e("~store/url"),
  f = e("../base-filler"),
  p = e("./rules");

function m(e) {
  return !!e && (e.classList.contains("required") || "true" === e.getAttribute("data-required") ||
    "true" === e.getAttribute("aria-required") || !!e.querySelector(
      ".required, [data-required='true']"))
}

function h(e) {
  let t = e.closest(".section");
  if (!t) return !1;
  let r = t.querySelector('h3, label, .section-header, [role="heading"]');
  return m(r)
}

function g(e) {
  let t = e.closest(".field, .form-group, .input, .textarea") ?? e.parentElement;
  return m(t)
}

function b(e) {
  return h(e) || g(e) || e.required || "true" === e.getAttribute("aria-required") || m(e)
}
class y extends f.BaseFiller {
  getSiteName() {
    return "breezy"
  }
  getElementRulesRequestUrl() {
    return this.breezyAutofillRequestUrl
  }
  async checkCoverLetter() {
    let e = (0, s.findCoverLetterTextarea)(),
      t = "";
    e && (t = b(e) ? "required" : "optional"), (0, i.postCoverLetterStatus)(t)
  }
  getFieldHandlers() {
    return {
      [c.FIELD_TYPE.TEXT]: (e, t) => (0, l.fillInputField)(e.$input, t),
      [c.FIELD_TYPE.NUMBER]: (e, t) => (0, l.fillInputField)(e.$input, t),
      [c.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, l.fillCheckboxField)(e.$checkboxs, t),
        options: {
          expectArray: !0
        }
      },
      [c.FIELD_TYPE.RADIO]: (e, t) => (0, l.fillRadioField)(e.$input, t),
      [c.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, l.fillSelectField)(e.$input, t),
        options: {
          expectArray: !0
        }
      },
      [c.FIELD_TYPE.DATE]: (e, t) => (0, l.fillDateField)(e.$input, t)
    }
  }
  formatAnswer(e) {
    return (0, a.formatAnswer)(e)
  }
  async extractFormRules() {
    let e = await (0, s.getRules)();
    return (0, s.findAndRemoveRule)(e, "Resume"), e
  }
  async runPreFillForm() {
    this.taskQueue.add(l.preFillForm), await this.taskQueue.run()
  }
  async handleResumeUpload() {
    this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume") : (this
      .taskQueue.add(async () => {
        await (0, l.uploadResume)(this.resumeInfo)
      }), await this.taskQueue.run())
  }
  async fillEducationAndEmployment(e) {
    if (await (0, l.clickAddItemButton)(document, p.hardCodeConfig[p.HARDCODE_KEY.education]
        .addButton, this.answer.education.length - 1), await (0, l.clickAddItemButton)(document,
        p.hardCodeConfig[p.HARDCODE_KEY.workExperience].addButton, this.answer.workExperience
        .length - 1), this.answer.education.length > 0) {
      let e = (0, s.processEduOrWorkExpRules)(!0) || [];
      (0, u.setSectionResultFocusRules)("education", e);
      let t = (0, o.getEducationOperations)(e, this.answer.education, this.operationConfig,
        void 0, (0, o.sectionProgressCallbacks)("Education", this.progressTracker));
      for (let e of t) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
    if (this.answer.workExperience.length > 0) {
      let e = (0, s.processEduOrWorkExpRules)(!1) || [];
      (0, u.setSectionResultFocusRules)("employment", e);
      let t = (0, o.getEmploymentOperations)(e, this.answer.workExperience, this
        .operationConfig, void 0, (0, o.sectionProgressCallbacks)("Employment", this
          .progressTracker));
      for (let e of t) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
  }
  async executeSiteSpecificSteps(e) {
    await this.bindSubmitButtonTracking(e), this.taskQueue.add(() => {
      (0, l.blurPage)()
    }), await this.taskQueue.run()
  }
  getSubmitButtonSelector() {
    return (0, s.getBreezySubmitButtonXpath)()
  }
  async getAutofillSnapshot(e) {
    return (0, l.getSnapshot)(e)
  }
  async getSubmitSnapshot() {
    let e = await this.extractFormRules();
    return (0, l.getSnapshot)(e)
  }
  async doFillForm(e = !1) {
    this.breezyAutofillRequestUrl = void 0;
    let t = (0, l.stabilizeBreezyAngularLocation)();
    this.breezyAutofillRequestUrl = t?.preservedAutofillUrl || (0, d.useUrlStore).getState()
      .currentTabUrl || void 0, await this.initializeFillForm(), await this
    .handleResumeUpload(), await (0, l.ensureEducationAndWorkExperienceContainers)();
    let r = this.prepareCoverLetterRules(await this.extractFormRules());
    this.progressTracker.setFieldsRequiredStatus(r);
    let n = await this.fetchFormAnswers(r, e);
    return "string" == typeof n ? n : (await this.fillRegularFields(r), await this
      .fillEducationAndEmployment(r), await this.fillCoverLetterFields(), await this
      .executeSiteSpecificSteps(r), await this.finalizeFillForm())
  }
  submitApplication() {
    let e = document.querySelector('button[type="submit"], input[type="submit"]');
    (0, l.submitObserver)(e), e && e.click()
  }
}

