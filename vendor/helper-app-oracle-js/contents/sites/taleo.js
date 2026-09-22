/**
 * Parcel module id: 4lwWU
 * Resolved path: contents/sites/taleo.js (oracle restore)
 * Dependencies:
 *   ./answer -> 7mDe5  =>  src/contents/sites/taleo/answer.js
 *   ./operations -> eMu8S  =>  src/contents/sites/taleo/operations.js
 *   ./rules -> IwDjp  =>  src/contents/sites/taleo/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/crawler/utils/executor -> iAZMN  =>  _tilde_contents/crawler/utils/executor.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  _tilde_contents/methods/observer.js
 *   ~contents/shared/filler -> 2aGsX  =>  _tilde_contents/shared/filler.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Taleo", () => h);
var o = e("~contents/crawler/utils/executor"),
  i = e("~contents/shared/filler"),
  a = e("~contents/methods/answer"),
  l = e("~contents/methods/dom"),
  s = e("~contents/methods/observer"),
  u = e("~contents/sites/base-filler"),
  c = e("~core/enums"),
  d = e("~core/xpath"),
  f = e("./answer"),
  p = e("./operations"),
  m = e("./rules");
class h extends u.BaseFiller {
  getFieldHandlers() {
    return {
      [c.FIELD_TYPE.TEXT]: {
        handler: async (e, t) => {
          let r = await (0, p.fillTaleoTextField)(e.$input, t);
          if (!r) throw new i.ValueError(`Failed to fill ${e.label}`)
        },
        options: {
          expectArray: !1
        }
      },
      [c.FIELD_TYPE.DATE]: {
        handler: async (e, t) => {
          let r = await (0, p.fillTaleoTextField)(e.$input, t);
          if (!r) throw new i.ValueError(`Failed to fill ${e.label}`)
        },
        options: {
          expectArray: !1
        }
      },
      [c.FIELD_TYPE.CHECKBOX]: {
        handler: async (e, t) => {
          let r = await (0, p.fillTaleoCheckboxField)(e, t);
          if (!r) throw new i.ValueError(`Failed to fill ${e.label}`)
        },
        options: {
          expectArray: !0
        }
      },
      [c.FIELD_TYPE.SELECT]: {
        handler: async (e, t) => {
          let r = await (0, p.fillTaleoSelectField)(e.$input, t);
          if (!r) throw new i.ValueError(`Failed to fill ${e.label}`)
        },
        options: {
          expectArray: !0
        }
      },
      [c.FIELD_TYPE.DROPDOWN]: {
        handler: async (e, t) => {
          let r = await (0, p.fillTaleoDropdownField)(e.$input, t, e.label, this.answer
            ?.country || this.answer?.regular?.Country);
          if (!r) throw new i.ValueError(`Failed to fill ${e.label}`)
        },
        options: {
          expectArray: !0
        }
      }
    }
  }
  getSiteName() {
    return "taleo"
  }
  async runPreFillForm() {
    this.typeIndex = (0, m.getTaleoTypeIndex)()
  }
  async checkCoverLetter() {
    await (0, s.waitForCondition)(() => !!(0, m.getCwsV2CoverLetterTextarea)({
      requireVisible: !1
    }), {
      timeout: 4e3,
      interval: 100,
      observeTarget: document.body
    }), (0, l.postCoverLetterStatus)((0, m.getCwsV2CoverLetterTextarea)({
      requireVisible: !1
    }) ? "optional" : "")
  }
  async extractFormRules() {
    let [e] = await (0, m.extractRules)({
      typeIndex: this.typeIndex
    });
    return this.lastRules = e, e
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = this.prepareCoverLetterRules(await this.extractFormRules());
    if (this.progressTracker.setFieldsRequiredStatus(t), 0 === t.length) return console.info(
      "[TaleoResumeUpload] resume-only-page", {
        disableUploadResume: this.disableUploadResume
      }), await this.handleResumeUpload(), await this.finalizeFillForm();
    let r = await this.fetchFormAnswers(t, e);
    if ("string" == typeof r) return r;
    await this.handleResumeUpload(), await this.fillRegularFields(t), await this
      .fillEducationAndEmployment(t), await this.fillCoverLetterFields();
    let n = await this.runComboQuestionAutofillIfNeeded(t, e);
    return "string" == typeof n ? n : (t = n, await this.executeSiteSpecificSteps(t), await this
      .finalizeFillForm())
  }
  async fillRegularFields(e) {
    let t = e.filter(e => e.type !== c.FIELD_TYPE.SECTION && e.type !== c.FIELD_TYPE
        .EDUCATION && e.type !== c.FIELD_TYPE.EMPLOYMENT && e.type !== c.FIELD_TYPE.COVER_LETTER
        ),
      r = (0, a.getRegularOperations)(t, this.answer.regular, this.operationConfig);
    for (let e of r) this.taskQueue.add(e);
    await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {
    let t = !1,
      r = !1;
    for (let n of e) n.type === c.FIELD_TYPE.EDUCATION && (t = !0), n.type === c.FIELD_TYPE
      .EMPLOYMENT && (r = !0);
    let n = await (0, p.fillTaleoHardCodeSection)(p.TALEO_HARDCODE_CONFIG.education, this.answer
        ?.education || [], this.typeIndex, this.progressTracker) || [],
      i = await (0, p.fillTaleoHardCodeSection)(p.TALEO_HARDCODE_CONFIG.workExperience, this
        .answer?.workExperience || [], this.typeIndex, this.progressTracker) || [],
      a = n.length > 0,
      l = i.length > 0;
    (a || l) && await (0, o.executeSequentially)(...n, ...i), a ? this.progressTracker
      .updateFilledProgress("Education") : t && this.progressTracker.updateMissedProgress(
        "Education"), l ? this.progressTracker.updateFilledProgress("Employment") : r && this
      .progressTracker.updateMissedProgress("Employment")
  }
  async handleResumeUpload() {
    await (0, p.uploadTaleoFiles)({
      disableUploadResume: this.disableUploadResume,
      progressTracker: this.progressTracker,
      resumeInfo: this.resumeInfo
    })
  }
  async executeSiteSpecificSteps(e) {
    await (0, o.delay)(1e3), await (0, p.clickSuggestInputSpan)(), await super
      .executeSiteSpecificSteps(e)
  }
  async getAutofillSnapshot(e) {
    let [t] = await (0, m.extractRules)({
      typeIndex: this.typeIndex
    });
    this.lastRules = t;
    let r = await (0, m.getFormSnapshot)(t),
      {
        education: n,
        employment: o,
        ...i
      } = r;
    return this.lastEducationSnapshot = Array.isArray(n) ? n : [], this.lastEmploymentSnapshot =
      Array.isArray(o) ? o : [], i
  }
  async getSubmitSnapshot() {
    let [e] = await (0, m.extractRules)({
      typeIndex: this.typeIndex
    });
    this.lastRules = e;
    let t = await (0, m.getFormSnapshot)(e),
      {
        education: r,
        employment: n,
        ...o
      } = t;
    return this.lastEducationSnapshot = Array.isArray(r) ? r : [], this.lastEmploymentSnapshot =
      Array.isArray(n) ? n : [], o
  }
  getAdditionalAutofillSnapshotData() {
    return {
      education: this.lastEducationSnapshot,
      employment: this.lastEmploymentSnapshot
    }
  }
  getAdditionalSubmitSnapshotData() {
    return {
      education: this.lastEducationSnapshot,
      employment: this.lastEmploymentSnapshot
    }
  }
  getSubmitButtonSelector() {
    return ".//button[@test-id='application-next-step'] | .//input[@value='Save and Continue'] | .//input[@value='Submit']"
  }
  submitApplication() {
    let e = (0, d.getFirstOrderedNode)(this.getSubmitButtonSelector());
    e?.click()
  }
  constructor(...e) {
    super(...e), this.typeIndex = 0, this.lastRules = [], this.lastEducationSnapshot = [], this
      .lastEmploymentSnapshot = [], this.formatAnswer = e => (0, f.formatAnswer)(e, this
        .typeIndex)
  }
}

