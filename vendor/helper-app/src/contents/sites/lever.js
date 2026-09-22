/**
 * Parcel module id: j4zKu
 * Resolved path: src/contents/sites/lever.js
 * Dependencies:
 *   ./answer -> 8Bisn  =>  src/contents/sites/lever/answer.js
 *   ./operations -> iPTYa  =>  src/contents/sites/lever/operations.js
 *   ./rules -> 745F0  =>  src/contents/sites/lever/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Lever", () => h);
var o = e("~contents/methods/answer"),
  i = e("~contents/sites/base-filler"),
  a = e("~core/enums"),
  l = e("~core/xpath"),
  s = e("./answer"),
  u = e("./operations"),
  c = e("./rules");
let d = ['.//h3[@data-qa="msg-submit-success" and contains(., "Application")]',
    './/*[contains(translate(., "APPLICATION RECEIVED", "application received"), "application received") or contains(translate(., "APPLICATION SUBMI", "application submi"), "application submi") or contains(translate(., "THANK YOU FOR SUBMIT", "thank you for submit"), "thank you for submit") or contains(translate(., "THANKS FOR SUBMIT", "thanks for submit"), "thanks for submit")]'
  ],
  f = ["agree", "agreement", "accept", "authorize", "certify", "consent", "marketing", "privacy",
    "terms", "notice", "future job"
  ];

function p(e) {
  return String(e ?? "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim()
}

function m(e) {
  let t = e.$checkboxs?.length ?? (e.$input ? 1 : 0);
  if (1 !== t) return !1;
  let r = e.$checkboxs?.[0] || e.$input,
    n = [e.label, ...e.options || [], r?.name, r?.id].map(p).join(" ");
  return f.some(e => n.includes(e))
}
class h extends i.BaseFiller {
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: {
        handler: (e, t) => {
          let r = t?.[0];
          if (r) return e.$input && e.$input.matches('input[data-qa="location-input"]') ? (0,
            u.handleLocationInput)(e, r) : (0, u.fillInputTextField)(e.$input, String(r ??
            ""))
        },
        options: {
          expectArray: !0
        }
      },
      [a.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, u.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [a.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, u.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [a.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, u.fillRadioGroupFiled)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  getSiteName() {
    return "lever"
  }
  ensureAutocheckCheckboxAnswers(e) {
    (!this.answer.regular || "object" != typeof this.answer.regular || Array.isArray(this.answer
      .regular)) && (this.answer.regular = {});
    let t = this.answer.regular,
      r = e => Object.keys(t).some(t => (0, o.isMatched)(e, t));
    for (let n of e) n.type === a.FIELD_TYPE.CHECKBOX && m(n) && !r(n.label) && (t[n.label] = n
      .options?.[0] || n.label || "True")
  }
  async runPreFillForm() {
    this.taskQueue.add(u.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return (0, c.extractRules)()
  }
  formatAnswer(e) {
    return (0, s.formatAnswer)(e)
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.requestFormAnswers(t, e);
    return "string" == typeof r ? r : (r && (this.answer = r), this
      .ensureAutocheckCheckboxAnswers(t), await this.fillRegularFields(t), await this
      .bindSubmitButtonTracking(t), await this.handleResumeUpload(), await this
      .finalizeFillForm())
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, u.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, u.removeResume)(), await (0, u.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  getSubmitButtonSelector() {
    return './/button[contains(@id, "btn-submit")]'
  }
  getSubmitSuccessSelectors() {
    return d
  }
  async getAutofillSnapshot(e) {
    return (0, c.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, c.getFormSnapshot)()
  }
  submitApplication() {
    let e = './/button[@id="btn-submit"]',
      t = (0, l.getFirstOrderedNode)(e);
    t && t?.click()
  }
}

