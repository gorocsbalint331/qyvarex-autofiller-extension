/**
 * Parcel module id: 4QJwa
 * Resolved path: contents/sites/recruiterflow.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/rules -> 3cWKC  =>  _tilde_contents/methods/rules.js
 *   ~contents/methods/track -> h479b  =>  _tilde_contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~contents/sites/recruiterflow/answer -> 9ge8X  =>  _tilde_contents/sites/recruiterflow/answer.js
 *   ~contents/sites/recruiterflow/operations -> i18hS  =>  _tilde_contents/sites/recruiterflow/operations.js
 *   ~contents/sites/recruiterflow/phone-country-code -> gLFZj  =>  _tilde_contents/sites/recruiterflow/phone-country-code.js
 *   ~contents/sites/recruiterflow/rules -> aHzuN  =>  _tilde_contents/sites/recruiterflow/rules.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  _tilde_core/phone-country-code.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 *   ~utils/fieldLabel -> 1RmGw  =>  _tilde_utils/fieldLabel.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Recruiterflow", () => y);
var o = e("~contents/methods/answer"),
  i = e("~contents/methods/dom"),
  a = e("~contents/methods/rules"),
  l = e("~contents/methods/track"),
  s = e("~contents/sites/recruiterflow/answer"),
  u = e("~contents/sites/recruiterflow/operations"),
  c = e("~contents/sites/recruiterflow/phone-country-code"),
  d = e("~contents/sites/recruiterflow/rules"),
  f = e("~contents/sites/base-filler"),
  p = e("~core/enums"),
  m = e("~core/dom"),
  h = e("~core/phone-country-code"),
  g = e("~utils/delay"),
  b = e("~utils/fieldLabel");
class y extends f.BaseFiller {
  constructor() {
    super()
  }
  getFieldHandlers() {
    return {
      [p.FIELD_TYPE.TEXT]: async (e, t) => {
        await (0, u.fillInputTextField)(e.$input, t)
      },
      [p.FIELD_TYPE.CHECKBOX]: {
        handler: async (e, t) => {
          await (0, u.fillCheckboxField)(e, t)
        },
        options: {
          expectArray: !0
        }
      },
      [p.FIELD_TYPE.SELECT]: {
        handler: async (e, t) => {
          "select" === e.$input.tagName.toLowerCase() ? await (0, u.fillSelectField)(e.$input,
            t) : await (0, u.fillCustomSelect)(e, t)
        },
        options: {
          expectArray: !0
        }
      },
      [p.FIELD_TYPE.MULTI_SELECT]: {
        handler: async (e, t) => {
          await (0, u.fillCustomSelect)(e, t)
        },
        options: {
          expectArray: !0
        }
      },
      [p.FIELD_TYPE.DATE]: {
        handler: async (e, t) => {
          await (0, u.fillDatePicker)(e.$input, t)
        },
        options: {
          expectArray: !1
        }
      }
    }
  }
  getSiteName() {
    return "recruiterflow"
  }
  async extractFormRules() {
    return await (0, d.getRules)()
  }
  async getAutofillSnapshot(e) {
    return (0, d.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, d.getFormSnapshot)()
  }
  getAdditionalAutofillSnapshotData(e) {
    return (0, d.getAdditionalFormSnapshotData)()
  }
  getAdditionalSubmitSnapshotData() {
    return (0, d.getAdditionalFormSnapshotData)()
  }
  getSubmitButtonSelector() {
    return './/button[@id="submit-application-button"] | .//button[contains(@class, "submit-application-button")]'
  }
  submitApplication() {
    let e = document.querySelector(
      "button#submit-application-button, button.submit-application-button");
    e && e.click()
  }
  formatAnswer(e) {
    return (0, s.formatAnswer)(e)
  }
  async checkCoverLetter() {
    (0, i.postCoverLetterStatus)((0, u.getRecruiterflowCoverLetterStatus)())
  }
  async runPreFillForm() {
    this.taskQueue.add(u.waitPageClean), await this.taskQueue.run(), this.taskQueue.add(u
      .expandAllSections), await this.taskQueue.run()
  }
  async handleResumeUpload() {
    !this.disableUploadResume && this.resumeInfo ? (this.taskQueue.add(async () => {
        await (0, u.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), await this.taskQueue.run(), await (0, g.delay)(2e3)) : this.progressTracker
      .updateMissedProgress("Resume/CV")
  }
  async handleCoverLetterUpload() {
    let e = (0, u.getRecruiterflowCoverLetterStatus)();
    if ("required" !== e) return;
    if (this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: !0
      }), !this.coverLetter?.coverLetterId || !this.coverLetter.coverLetterName) {
      this.progressTracker.updateMissedProgress("Cover Letter");
      return
    }
    let t = await (0, u.uploadCoverLetter)(this.coverLetter, this.progressTracker
      .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
    t || this.progressTracker.updateMissedProgress("Cover Letter")
  }
  async getEducationAndEmploymentRules() {
    let e = await (0, d.getEduRules)(),
      t = await (0, d.getExpRules)();
    return [...t, ...e]
  }
  async fillEducationAndEmployment(e) {}
  async executeSiteSpecificSteps(e) {
    let t = await (0, d.getEduRules)(),
      r = await (0, d.getExpRules)();
    (0, m.setSectionResultFocusRules)("education", t), (0, m.setSectionResultFocusRules)(
      "employment", r), console.info("[Recruiterflow][Experience] fill-plan", {
      domRowCount: r.length,
      answerRecordCount: this.answer.workExperience?.length ?? 0,
      recordFieldCounts: (this.answer.workExperience || []).map(e => Object.keys(e || {})
        .length)
    });
    let n = (0, o.getEmploymentOperations)(r, this.answer.workExperience, this.operationConfig,
        void 0, {
          onCompleted: () => this.progressTracker.updateFilledProgress("Employment"),
          onSkipped: () => this.progressTracker.updateMissedProgress("Employment"),
          onSectionResultChanged: this.progressTracker.updateSectionResult
        }),
      i = (0, o.getEducationOperations)(t, this.answer.education, this.operationConfig,
      void 0, {
        onCompleted: () => this.progressTracker.updateFilledProgress("Education"),
        onSkipped: () => this.progressTracker.updateMissedProgress("Education"),
        onSectionResultChanged: this.progressTracker.updateSectionResult
      }),
      a = e.filter(e => !["phone", "phone number", "phone country code"].includes((0, b
        .normalizeFieldLabel)(e.label))),
      l = (0, o.getRegularOperations)(a, this.answer.regular, this.operationConfig),
      s = [...l, ...n, ...i];
    for (let e of s) this.taskQueue.add(e);
    await this.taskQueue.run(), await this.handleCountrySelection(e), await this
      .handlePhoneNumber(e), this.taskQueue.add(async () => {
        await (0, u.blurPage)()
      }), await this.taskQueue.run()
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules(),
      r = await this.getEducationAndEmploymentRules(),
      n = [...t, ...r];
    this.progressTracker.setFieldsRequiredStatus(n), this.taskQueue.add(u.blurPage), await this
      .taskQueue.run();
    let o = (0, a.filterRulesByLabel)(n, ["Upload Resume", "Cover Letter", "Country Phone Code",
        "Date"
      ]),
      i = await this.fetchFormAnswers(o, e);
    if ("string" == typeof i) return i;
    this.taskQueue.add(async () => {
        await (0, u.expandForm)(this.answer)
      }), await this.taskQueue.run(), await (0, g.delay)(500), await this.handleResumeUpload(),
      await this.handleCoverLetterUpload(), await this.executeSiteSpecificSteps(t), await this
      .bindSubmitButtonTracking(t);
    let s = (0, d.getSubmitButtonText)();
    return (0, l.bindSubmitButton)(s, this.progressTracker.fieldStatus, this.timeTrace),
      await this.finalizeFillForm()
  }
  async handlePhoneNumber(e = []) {
    let t = e.some(e => ["phone", "phone number"].includes((0, b.normalizeFieldLabel)(e
      .label))),
      r = e.some(e => "phone country code" === (0, b.normalizeFieldLabel)(e.label));
    try {
      let e = this.answer.regular?.Phone || this.answer.regular?.phone || this.answer.regular?.[
        "Phone Number"
      ];
      if (!e) {
        t && this.progressTracker.updateMissedProgress("Phone"), r && this.progressTracker
          .updateMissedProgress("Phone Country Code");
        return
      }
      let n = this.getRegularPhoneCountryCode(),
        o = this.getPhoneCountrySource(),
        i = await (0, u.fillPhoneNumber)((0, h.resolveDualControlPhoneValue)(e, o) || String(e),
          o);
      i.phoneFilled ? this.progressTracker.updateFilledProgress("Phone") : this.progressTracker
        .updateMissedProgress("Phone"), (r || n) && (i.phoneCountryFilled ? this.progressTracker
          .updateFilledProgress("Phone Country Code") : this.progressTracker
          .updateMissedProgress("Phone Country Code"))
    } catch (e) {
      t && this.progressTracker.updateMissedProgress("Phone"), r && this.progressTracker
        .updateMissedProgress("Phone Country Code")
    }
  }
  async handleCountrySelection(e) {
    try {
      let t = this.getProfileCountry(),
        r = this.getCountryRule(e);
      if (!r) return;
      let n = await (0, u.fillReactSelect)(t, r);
      if (!n) {
        this.progressTracker.updateMissedProgress("Country");
        return
      }
      this.progressTracker.updateFilledProgress("Country")
    } catch (e) {
      this.progressTracker.updateMissedProgress("Country")
    }
  }
  getProfileCountry() {
    return this.answer.profile_data?.country || this.answer.profileData?.country || this.answer
      .country || this.answer.regular?.Country || this.answer.regular?.country ||
      "United States"
  }
  getPhoneCountrySource() {
    return this.getRegularPhoneCountryCode() || this.getProfilePhoneCountryCode() || this
      .getProfileCountry()
  }
  getProfilePhoneCountryCode() {
    return (0, c.normalizePhoneCountryCodeSource)(this.answer.profileData?.phoneCountryCode ??
      this.answer.profileData?.phone_country_code ?? this.answer.profile_data
      ?.phoneCountryCode ?? this.answer.profile_data?.phone_country_code) || ""
  }
  getRegularPhoneCountryCode() {
    let e = this.answer.regular || {},
      t = ["Phone Country Code", "Country Phone Code", "Country Code", "phoneCountryCode",
        "phone_country_code"
      ];
    for (let r of t) {
      let t = (0, c.normalizePhoneCountryCodeSource)(e[r]);
      if (t) return t
    }
    return ""
  }
  getCountryRule(e) {
    return e.find(e => "country" === (0, b.normalizeFieldLabel)(e.label))
  }
}

