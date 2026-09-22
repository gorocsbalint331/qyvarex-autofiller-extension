/**
 * Parcel module id: 4sEbH
 * Resolved path: src/contents/sites/zohorecruit-v2.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/zohorecruit-v2/answer -> jmQw3  =>  src/contents/sites/zohorecruit-v2/answer.js
 *   ~contents/sites/zohorecruit-v2/operations -> 98qwB  =>  src/contents/sites/zohorecruit-v2/operations.js
 *   ~contents/sites/zohorecruit-v2/rules -> aNfWC  =>  src/contents/sites/zohorecruit-v2/rules.js
 *   ~contents/sites/zohorecruit/operations -> ayFdv  =>  src/contents/sites/zohorecruit/operations.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "ZohoRecruitV2", () => A);
var o = e("~contents/methods/cancellation"),
  i = e("~contents/methods/answer"),
  a = e("~contents/sites/base-filler"),
  l = e("~contents/sites/zohorecruit-v2/answer"),
  s = e("~contents/sites/zohorecruit-v2/operations"),
  u = e("~contents/sites/zohorecruit/operations"),
  c = e("~contents/sites/zohorecruit-v2/rules"),
  d = e("~core/enums"),
  f = e("~utils/trace");
let p = './/button[@type="submit"] | .//input[@type="submit"]';

function m() {
  return !!document.querySelector("form[name*='WebToLeads']")
}

function h(e) {
  return String(e || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

function g(e) {
  return [e?.label, e?.name].map(e => h(e))
}

function b(e) {
  return ["city", "ville", "country", "pays", "state", "province", "state/province", "etat",
    "etat/province", "zip", "zip code", "zip/postal code", "postal code", "code postal"
  ].includes(e)
}

function y(e) {
  return g(e).some(b)
}

function v(e) {
  return g(e).some(e => ["city", "ville"].includes(e))
}

function w(e, t) {
  for (let r of e) try {
    return String((0, i.findValueInRecord)(r, t) || "").trim()
  } catch {
    continue
  }
  return ""
}

function S(e) {
  let t = e?.$input;
  return String(t?.value ?? "").trim()
}
async function E(e, t, r) {
  let n = e.filter(y),
    o = n.find(v),
    i = o?.$input;
  if (!i?.closest?.("lyte-autocomplete, lyte-dropdown")) return !1;
  let a = w(["City", "Ville"], t);
  if (!a) return !1;
  let l = await (0, u.selectZohoAutocompleteOption)(o, a, [w(["State/Province", "State",
    "Province", "\xc9tat/Province", "Etat/Province"
  ], t), w(["Country", "Pays"], t), w(["Zip/Postal Code", "Zip Code", "Postal Code", "ZIP",
    "Code postal"
  ], t)]);
  if (!l) return !1;
  for (let e of (await new Promise(e => setTimeout(e, 300)), n)) S(e) && !r.fieldStatus
    .filledFields.includes(e.label) && r.updateFilledProgress(e.label);
  return !0
}
async function x() {
  let e = Array.from(document.querySelectorAll("button.lyte-button, button[type='button']")),
    t = e.find(e => {
      let t = e.textContent?.replace(/\s+/g, " ").trim().toLowerCase();
      return "i'm interested" === t || "i am interested" === t
    });
  return !!t && (t.scrollIntoView({
    block: "center",
    inline: "center"
  }), t.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0
  })), t.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0,
    cancelable: !0
  })), t.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0
  })), !0)
}
async function C() {
  let e = await (0, c.getRules)();
  if (e.length > 0 || m()) return e;
  let t = await x();
  if (!t) return e;
  for (let t = 0; t < 10 && (await new Promise(e => setTimeout(e, 500)), !((e = await (0, c
      .getRules)()).length > 0 || m())); t++);
  return e
}
class A extends a.BaseFiller {
  getFieldHandlers() {
    return {
      [d.FIELD_TYPE.TEXT]: {
        handler: async (e, t) => {
          let r = e.$input;
          r && (r.value = t, r.dispatchEvent(new Event("input", {
            bubbles: !0
          })), r.dispatchEvent(new Event("change", {
            bubbles: !0
          })), r.dispatchEvent(new Event("blur", {
            bubbles: !0
          })))
        },
        options: {
          expectArray: !1
        }
      },
      [d.FIELD_TYPE.SELECT]: {
        handler: async (e, t) => {
          e.$input instanceof HTMLSelectElement && await (0, s.fillSelect)(e.$input, t)
        },
        options: {
          expectArray: !1
        }
      },
      [d.FIELD_TYPE.CHECKBOX]: {
        handler: async (e, t) => {
          let r = e.$input;
          if (!r) return;
          let n = !0 === t || "true" === t || "Yes" === t;
          r.checked !== n && r.click()
        },
        options: {
          expectArray: !1
        }
      }
    }
  }
  async extractFormRules() {
    return this.rules = await C(), this.rules
  }
  getSiteName() {
    return "zohorecruit"
  }
  formatAnswer(e) {
    return (0, l.formatAnswer)(e, this.rules)
  }
  async doFillForm(e = !1) {
    this.trackingAutofillSnapshot = null, this.trackingAdditionalAutofillData = null, await this
      .initializeFillForm(), this.taskQueue.add(s.preExpandForm), await this.taskQueue.run();
    let t = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(t);
    let r = await this.fetchFormAnswers(t, e);
    if ("string" == typeof r) return r;
    (0, o.checkpoint)(), this.taskQueue.add(async () => {
      await (0, s.expandForm)(this.answer)
    });
    let n = await E(t, this.answer.regular, this.progressTracker),
      a = n ? t.filter(e => !y(e)) : t,
      l = (0, i.getRegularOperations)(a, this.answer.regular, this.operationConfig);
    for (let e of l) this.taskQueue.add(e);
    await this.taskQueue.run(), await this.handleResumeUpload(), this.answer.education?.length >
      0 && await (0, s.fillEducation)(this.answer.education, this.operationConfig, this
        .progressTracker), this.answer.workExperience?.length > 0 && await (0, s.fillExperience)
      (this.answer.workExperience, this.operationConfig, this.progressTracker), this.taskQueue
      .add(async () => {
        let e = document.querySelectorAll("input, textarea, select");
        e.forEach(e => e.dispatchEvent(new Event("blur")))
      }), await this.taskQueue.run();
    let u = await this.finalizeFillForm();
    return this.trackingAutofillSnapshot = await (0, c.getFormSnapshot)(t), this
      .trackingAdditionalAutofillData = (0, c.getAdditionalFormSnapshotData)(t), (0, f
        .trackEvent)("zohorecruit_v2_form_autofill_answer", {
        formUrl: window.location.href,
        answer: {
          ...this.trackingAutofillSnapshot,
          ...this.trackingAdditionalAutofillData
        }
      }), await this.bindSubmitButtonTracking(t), u
  }
  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV");
      return
    }
    this.taskQueue.add(async () => {
      await (0, s.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
    })
  }
  getSubmitButtonSelector() {
    return p
  }
  async getAutofillSnapshot(e) {
    return this.rules = e, this.trackingAutofillSnapshot || (this.trackingAutofillSnapshot =
      await (0, c.getFormSnapshot)(e)), this.trackingAutofillSnapshot
  }
  async getSubmitSnapshot() {
    return await (0, c.getFormSnapshot)(this.rules)
  }
  getAdditionalAutofillSnapshotData(e) {
    return this.trackingAdditionalAutofillData || (this.trackingAdditionalAutofillData = (0, c
      .getAdditionalFormSnapshotData)(e)), this.trackingAdditionalAutofillData
  }
  getAdditionalSubmitSnapshotData() {
    return (0, c.getAdditionalFormSnapshotData)(this.rules)
  }
  normalizeAutofillAnswerPairTrackingData(e) {
    return {
      ...e,
      formUrl: window.location.href,
      source: "zohorecruit-v2",
      autofillSnapshot: this.trackingAutofillSnapshot ?? e.autofillSnapshot,
      additionalAutofillData: this.trackingAdditionalAutofillData ?? e.additionalAutofillData
    }
  }
  submitApplication() {
    let e = document.querySelector('input[type="submit"]');
    e ? e.click() : console.error("[ZohoRecruit-V2] \u672a\u627e\u5230\u63d0\u4ea4\u6309\u94ae")
  }
  constructor(...e) {
    super(...e), this.rules = [], this.trackingAutofillSnapshot = null, this
      .trackingAdditionalAutofillData = null
  }
}

