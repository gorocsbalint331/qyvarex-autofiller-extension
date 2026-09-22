/**
 * Parcel module id: 4VdlM
 * Resolved path: src/contents/sites/metacareers.js
 * Dependencies:
 *   ./answer -> eUOuS  =>  src/contents/sites/metacareers/answer.js
 *   ./current-location -> 93td1  =>  src/contents/sites/metacareers/current-location.js
 *   ./location-operation -> jTGaf  =>  src/contents/sites/metacareers/location-operation.js
 *   ./operations -> hu0IF  =>  src/contents/sites/metacareers/operations.js
 *   ./rules -> 8Fz7V  =>  src/contents/sites/metacareers/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "MetaCareers", () => h);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/answer"),
  a = e("~contents/sites/base-filler"),
  l = e("~core/dom"),
  s = e("~core/enums"),
  u = e("~core/xpath"),
  c = e("./answer"),
  d = e("./current-location"),
  f = e("./location-operation"),
  p = e("./operations"),
  m = e("./rules");
class h extends a.BaseFiller {
  getFieldHandlers() {
    return {
      [s.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t;
        if (!(0, f.isMetaCurrentLocationRule)(e)) {
          if (!r) return;
          return (0, p.fillInputTextField)(e.$input, String(r ?? ""), e.label)
        }
        return (0, d.fillMetaCurrentLocation)({
          answer: this.answer,
          rule: e,
          regularValue: r
        }, {
          prepareCapture: async e => await (0, o.sendToBackground)({
            name: "prepareMetaCareersLocationCapture",
            body: {
              expectedValue: e
            }
          }),
          triggerNativeSearch: p.triggerMetaCurrentLocationSearch,
          resolveCaptured: async e => await (0, o.sendToBackground)({
            name: "resolveCapturedMetaCareersLocation",
            body: {
              captureId: e
            }
          }),
          fillResolvedLocation: p.fillResolvedCurrentLocation
        })
      },
      [s.FIELD_TYPE.SELECT]: (e, t) => (0, p.fillSelectField)(e, t),
      [s.FIELD_TYPE.CHECKBOX]: (e, t) => (0, p.fillCheckboxField)(e, t),
      [s.FIELD_TYPE.RADIO]: (e, t) => (0, p.fillRadioFiled)(e, t),
      [s.FIELD_TYPE.MULTI_SELECT]: (e, t) => (0, p.fillMultiSelectField)(e, t)
    }
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    return "string" == typeof r ? r : (this.answer = (0, c.formatAnswer)(this.answer, t),
      await this.fillRegularFields(t), await this.executeSiteSpecificSteps(t), await this
      .handleResumeUpload(), await (0, m.getFormSnapshot)(), this.finalizeFillForm())
  }
  async executeSiteSpecificSteps(e) {
    let t = [];
    if (this.answer.education.length > 0) {
      await (0, p.addExpOrEduSection)(this.answer.education.length - 1);
      let r = await (0, m.getAllExpOrEduRulesInFill)(!0);
      (0, l.setSectionResultFocusRules)("education", r);
      let n = (0, i.getEducationOperations)(r, this.answer.education, this.operationConfig,
        void 0, (0, i.sectionProgressCallbacks)("Education", this.progressTracker));
      t = [...(0, i.getRegularOperations)((0, d.getMetaCareersEducationReplayRules)(e), this
        .answer.regular, this.operationConfig), ...n]
    }
    if (this.answer.workExperience.length > 0) {
      let e = this.answer.workExperience.length - 1;
      this.answer.workExperience.length > 6 && (e = 5), await (0, p.addExpOrEduSection)(e), this
        .taskQueue.add(async () => {
          await (0, p.fillWorkExperience)(this.answer.workExperience.length > 6 ? this
            .answer.workExperience.slice(0, 6) : this.answer.workExperience, {
              onSectionResultChanged: this.progressTracker.updateSectionResult
            })
        }), this.taskQueue.add(async () => {
          await (0, p.fillSkills)(this.answer.skills)
        })
    }
    for (let e of t) this.taskQueue.add(e);
    await this.taskQueue.run(), this.answer.workExperience.length > 0 && this.progressTracker
      .updateFilledProgress("Employment"), await this.bindSubmitButtonTracking(e)
  }
  async runPreFillForm() {
    this.taskQueue.add(p.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, m.extractRules)()
  }
  getSiteName() {
    return "metacareers"
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, p.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, p.removeResume)(), await (0, p.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  getSubmitButtonSelector() {
    return "//div[@role='button' and .//span[text()='Submit']]"
  }
  async getAutofillSnapshot(e) {
    return await (0, m.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return await (0, m.getFormSnapshot)()
  }
  submitApplication() {
    let e = this.getSubmitButtonSelector();
    if (!e) return;
    let t = (0, u.getFirstOrderedNodeSafe)(e);
    if (!t) {
      console.warn("[submitApplication] No submit button found");
      return
    }
    t && t.click()
  }
}

