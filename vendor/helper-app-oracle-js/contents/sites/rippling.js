/**
 * Parcel module id: goL8m
 * Resolved path: contents/sites/rippling.js (oracle restore)
 * Dependencies:
 *   ./answer -> ULrZj  =>  src/contents/sites/rippling/answer.js
 *   ./location-operation -> ekE6E  =>  src/contents/sites/rippling/location-operation.js
 *   ./operations -> kxC8A  =>  src/contents/sites/rippling/operations.js
 *   ./phone-value -> cVp4x  =>  src/contents/sites/rippling/phone-value.js
 *   ./rules -> aNlNp  =>  src/contents/sites/rippling/rules.js
 *   ./submit-tracking -> 2vRmr  =>  src/contents/sites/rippling/submit-tracking.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  _tilde_core/phone-country-code.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Rippling", () => b);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/dom"),
  a = e("~contents/sites/base-filler"),
  l = e("~core/enums"),
  s = e("~core/phone-country-code"),
  u = e("~store/autofillInfo"),
  c = e("./answer"),
  d = e("./phone-value"),
  f = e("./location-operation"),
  p = e("./operations"),
  m = e("./rules"),
  h = e("./submit-tracking");

function g(e, t) {
  if (!t || !/phone|mobile/i.test(e)) return !1;
  if ("phone_number" === t.getAttribute("data-input")) return !0;
  if (t instanceof HTMLInputElement) {
    let e = (t.type || "").toLowerCase();
    if ("tel" === e) return !0;
    let r = (t.id || "").toLowerCase(),
      n = (t.name || "").toLowerCase(),
      o = `${r} ${n}`;
    if (/phone|mobile|cell/.test(o) && !/country|dial|areacode|prefix|code\s*select/i.test(o))
      return !0
  }
  return !1
}
class b extends a.BaseFiller {
  getFieldHandlers() {
    return {
      [l.FIELD_TYPE.TEXT]: {
        handler: async (e, t) => {
          let r = t?.[0];
          if ((0, f.isRipplingCanonicalLocationRule)(e)) {
            let t = (0, f.getRipplingLocationOriginalAnswer)(this.answer, r);
            if (!t) throw Error("Rippling canonical Location answer is empty");
            let n = (0, f.extractRipplingGooglePlacesPredictionRequest)(document, t) ||
              await (0, f.bootstrapRipplingGooglePlacesPredictionRequest)(e.$input, t);
            if (!n) throw Error("Rippling Google Places prediction request is unavailable");
            let i = (0, f.buildRipplingLocationOperation)({
                currentUrl: window.location.href,
                originalAnswer: t,
                predictionRequestUrl: n
              }),
              a = await (0, o.sendToBackground)({
                name: "resolveAutofillOperation",
                body: {
                  operation: i,
                  source: "rippling"
                }
              }),
              l = (0, f.getRipplingResolvedLocationValue)(a);
            if (!l) throw Error("Rippling canonical Location resolve returned empty");
            return (0, p.fillResolvedLocationInput)(e, l)
          }
          if (r) return g(e.label, e.$input) ? (0, p.fillInputTextField)(e.$input, (0, d
            .resolveRipplingNationalPhoneValue)(r, this.answer)) : (0, p
            .fillInputTextField)(e.$input, String(r ?? ""))
        },
        options: {
          expectArray: !0
        }
      },
      [l.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, p.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [l.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, p.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [l.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, p.fillRadioGroupFiled)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  async checkCoverLetter() {
    (0, i.postCoverLetterStatus)(await (0, p.waitForRipplingCoverLetterSlot)() ? "optional" :
      "")
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await (0, u.useAutofillInfoStore).getState().fetchAutofillInfo(),
      r = {
        phoneCountryCode: t?.phoneCountryCode,
        country: t?.location?.country
      },
      n = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(n);
    let o = await this.requestFormAnswers(n, e);
    return "string" == typeof o ? o : (o && (this.answer = o), await this.handleResumeUpload(),
      n = await this.extractFormRules(), this.progressTracker.setFieldsRequiredStatus(n),
      await this.selectRipplingPhoneCountry(r), await this.fillRegularFields(n), await this
      .fillEducationAndEmployment(n), await this.runRipplingPostFillSteps(), await this
      .bindSubmitButtonTracking(n), await this.finalizeFillForm())
  }
  async runPreFillForm() {
    this.taskQueue.add(p.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, m.extractRules)()
  }
  getSiteName() {
    return "rippling"
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, p.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, p.removeResume)(), await (0, p.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    });
    let e = this.coverLetter?.coverLetterId;
    if (e) {
      let t = {
        coverLetterId: e,
        coverLetterName: this.coverLetter?.coverLetterName || "Cover Letter",
        markdown: this.coverLetter?.markdown,
        useLegacyDownload: this.coverLetter?.useLegacyDownload
      };
      this.taskQueue.add(async () => {
        await (0, p.uploadCoverLetter)(t, this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress)
      })
    }
    await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {
    if (Array.isArray(this.answer.education)) {
      this.taskQueue.add(async () => {
        await (0, p.addEducationSection)(this.answer.education.length)
      }), await this.taskQueue.run();
      let t = e.filter(e => e.type === l.FIELD_TYPE.EDUCATION);
      for (let e of (0, c.getEducationOperations)(t, this.answer.education, this
          .operationConfig, {
            onSectionResultChanged: this.progressTracker.updateSectionResult
          })) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
    if (Array.isArray(this.answer.workExperience)) {
      this.taskQueue.add(async () => {
        await (0, p.addEmploymentSection)(this.answer.workExperience.length)
      }), await this.taskQueue.run();
      let t = e.filter(e => e.type === l.FIELD_TYPE.EMPLOYMENT);
      for (let e of (0, c.getEmploymentOperations)(t, this.answer.workExperience, this
          .operationConfig, {
            onSectionResultChanged: this.progressTracker.updateSectionResult
          })) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
  }
  async selectRipplingPhoneCountry(e) {
    this.taskQueue.add(async () => {
      let t = await (0, p.selectPhoneCountryCode)(this.answer.regular, e);
      t ? this.progressTracker.updateFilledProgress(s.PHONE_COUNTRY_CODE_LABEL) : this
        .progressTracker.updateMissedProgress(s.PHONE_COUNTRY_CODE_LABEL)
    }), await this.taskQueue.run(), this.taskQueue.add(async () => {
      document.activeElement?.blur?.(), document.body.click(), await new Promise(e =>
        setTimeout(e, 100))
    }), await this.taskQueue.run()
  }
  async fillRegularFields(e) {
    return await super.fillRegularFields(e.filter(e => e.label !== s.PHONE_COUNTRY_CODE_LABEL))
  }
  async runRipplingPostFillSteps() {
    this.taskQueue.add(async () => {
      await this.closeOpenDatepicker()
    }), await this.taskQueue.run()
  }
  async closeOpenDatepicker() {
    let e = document.activeElement;
    e?.blur?.(), await new Promise(e => setTimeout(e, 200));
    let t = document.querySelector(".react-datepicker-popper, .react-datepicker__tab-loop");
    if (!t) {
      document.body.click(), await new Promise(e => setTimeout(e, 100));
      return
    }
    document.dispatchEvent(new KeyboardEvent("keydown", {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      which: 27,
      bubbles: !0,
      cancelable: !0
    })), await new Promise(e => setTimeout(e, 100)), document.querySelector(
      ".react-datepicker-popper") && (document.body.dispatchEvent(new MouseEvent(
    "mousedown", {
      bubbles: !0,
      cancelable: !0,
      view: window
    })), await new Promise(e => setTimeout(e, 100))), document.querySelector(
      ".react-datepicker-popper") && (document.querySelectorAll(
      ".react-datepicker-ignore-onclickoutside").forEach(e => {
      e instanceof HTMLElement && e.blur()
    }), document.body.click(), await new Promise(e => setTimeout(e, 100)))
  }
  async getAutofillSnapshot() {
    return (0, m.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, m.getFormSnapshot)()
  }
  getAdditionalAutofillSnapshotData() {
    return (0, m.getEduAndEmploymentSnapshot)()
  }
  getAdditionalSubmitSnapshotData() {
    return (0, m.getEduAndEmploymentSnapshot)()
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    return (0, h.resolveRipplingSubmitButton)(e)
  }
  submitApplication() {
    h.getRipplingSubmitButton()?.click()
  }
}

