/**
 * Parcel module id: 9H7dQ
 * Resolved path: src/contents/sites/ashby.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/ashby/answer -> Cpwm9  =>  src/contents/sites/ashby/answer.js
 *   ~contents/sites/ashby/canonical-search -> 99dYo  =>  src/contents/sites/ashby/canonical-search.js
 *   ~contents/sites/ashby/location-operation -> e158F  =>  src/contents/sites/ashby/location-operation.js
 *   ~contents/sites/ashby/operations -> 3giV6  =>  src/contents/sites/ashby/operations.js
 *   ~contents/sites/ashby/rules -> 5iMv1  =>  src/contents/sites/ashby/rules.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/profile-location-original-answer -> 8kwJN  =>  src/contents/sites/profile-location-original-answer.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Ashby", () => E), n.export(r, "isAshbyMainCountryRule", () =>
  x);
var o = e("~core/dom"),
  i = e("@plasmohq/messaging"),
  a = e("~contents/methods/answer"),
  l = e("~contents/methods/dom"),
  s = e("~contents/sites/ashby/answer"),
  u = e("~contents/sites/ashby/canonical-search"),
  c = e("~contents/sites/ashby/location-operation"),
  d = e("~contents/sites/ashby/operations"),
  f = e("~contents/sites/ashby/rules"),
  p = e("~contents/sites/base-filler"),
  m = e("~contents/sites/profile-location-original-answer"),
  h = e("~core/enums"),
  g = e("~core/phone-country-code"),
  b = e("~core/xpath"),
  y = e("~store/autofillInfo"),
  v = e("~utils/string");
let w = ["school (", "graduation date (", "degree (", "discipline (", "major (", "gpa ("],
  S = [
    './/div[contains(@class, "application-form-success-container") and contains(translate(., "SUCCESS", "success"), "success")]'
  ];
class E extends p.BaseFiller {
  constructor() {
    super(), this.submitDOMQuery =
      './/button[contains(@class, "ashby-application-form-submit-button")]', this
      .initialCoverLetterObserver = null, this.currentRunCountry = "", this
      .scheduleInitialCoverLetterCheck()
  }
  getFieldHandlers() {
    return {
      [h.FIELD_TYPE.TEXT]: {
        handler: (e, t) => (0, d.fillInputTextField)(e.$input, t, e.label, (0, g
          .resolvePhoneCountryCodeAnswer)(this.answer)),
        options: {
          expectArray: !0
        }
      },
      [h.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, d.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [h.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, d.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [h.FIELD_TYPE.MULTI_SELECT]: {
        handler: (e, t) => (0, d.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [h.FIELD_TYPE.ASHBY_SEARCH]: {
        handler: async (e, t) => {
          if (!(0, c.isAshbyGeoLocationRule)(e)) return (0, d.fillComboboxField)(e, t);
          let r = String(Array.isArray(t) ? t[0] ?? "" : t ?? "").trim(),
            n = (0, c.getAshbyGeoLocationTypes)(e),
            o = (0, m.getProfileLocationOriginalAnswer)(this.answer, {
              locationTypes: n
            }),
            a = o.value || r;
          if (e.$input.setAttribute?.("data-jr-ashby-resolve-stage", "started"), console.info(
              "[Ashby][GeoLocation] resolve-start", {
                label: e.label,
                answerSource: o.value ? o.source : "regular",
                hasOriginalAnswer: !!a,
                locationTypes: n
              }), !a) throw console.warn("[Ashby][GeoLocation] resolve-skipped", {
            label: e.label,
            reason: "empty-original-answer"
          }), Error("Ashby GeoLocation answer is empty");
          let l = (0, c.buildAshbyLocationOperation)({
              currentUrl: this.getCurrentPageUrl(),
              originalAnswer: a,
              locationTypes: n
            }),
            s = await (0, i.sendToBackground)({
              name: "resolveAutofillOperation",
              body: {
                operation: l,
                source: "ashby"
              }
            });
          e.$input.setAttribute?.("data-jr-ashby-resolve-action", s?.result?.action ??
            "missing"), console.info("[Ashby][GeoLocation] resolve-result", {
            label: e.label,
            action: s?.result?.action ?? "missing",
            selectedCount: s?.result?.selected_values?.length ?? 0
          });
          let u = (0, c.getAshbyResolvedLocationValue)(s);
          if (!u) throw e.$input.setAttribute?.("data-jr-ashby-resolve-stage",
            "empty-result"), Error("Ashby GeoLocation resolve returned empty");
          await (0, d.fillResolvedLocationCombobox)(e, u)
        },
        options: {
          expectArray: !0
        }
      }
    }
  }
  getSiteName() {
    return "ashby"
  }
  getCurrentPageUrl() {
    return window.location.href
  }
  async runPreFillForm() {
    this.currentRunCountry = "", (0, u.clearAshbyCanonicalSchoolCache)();
    let e = await (0, y.useAutofillInfoStore).getState().fetchAutofillInfo().catch(() => null);
    this.currentRunCountry = String(e?.location?.country ?? "").trim(), this.taskQueue.add(d
      .preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, f.extractRules)()
  }
  formatAnswer(e) {
    return (0, s.formatAnswer)(e)
  }
  async getAutofillSnapshot() {
    return (0, f.getFormSnapshot)()
  }
  async getSubmitSnapshot() {
    return (0, f.getFormSnapshot)()
  }
  getAdditionalAutofillSnapshotData() {
    let e = (0, f.getAshbyEducationSnapshot)();
    return e.length > 0 ? {
      education: e
    } : {}
  }
  getAdditionalSubmitSnapshotData() {
    let e = (0, f.getAshbyEducationSnapshot)();
    return e.length > 0 ? {
      education: e
    } : {}
  }
  getSubmitButtonSelector() {
    return this.submitDOMQuery
  }
  getSubmitSuccessSelectors() {
    return S
  }
  scheduleInitialCoverLetterCheck() {
    if ("undefined" == typeof window || "undefined" == typeof document) return;
    let e = () => {
        this.checkCoverLetter()
      },
      t = [500, 1500, 3e3, 6e3, 1e4];
    t.forEach(t => {
      window.setTimeout(e, t)
    }), "undefined" != typeof MutationObserver && document.documentElement && (this
      .initialCoverLetterObserver = new MutationObserver(e), this.initialCoverLetterObserver
      .observe(document.documentElement, {
        childList: !0,
        subtree: !0
      }), window.setTimeout(() => {
        this.initialCoverLetterObserver?.disconnect(), this.initialCoverLetterObserver =
          null
      }, 1e4))
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = this.prepareCoverLetterRules(await this.extractFormRules()),
      r = await this.requestFormAnswers(t, e);
    if ("string" == typeof r) return r;
    r && (this.answer = r), (0, u.prefetchAshbySchoolCanonicalNames)(this.answer?.education);
    let n = C(t, this.answer.regular);
    this.progressTracker.setFieldsRequiredStatus(n);
    let o = n.filter(e => e.type !== h.FIELD_TYPE.EDUCATION),
      i = o.filter(e => !x(e));
    return await this.fillRegularFields(i), await this.fillCountryField(o), await this
      .fillEducationHistory(), await this.fillCoverLetterFields(), await this
      .bindSubmitButtonTracking(n), await this.handleFileUploads(), await this
      .finalizeFillForm()
  }
  async fillCountryField(e) {
    let t = e.find(x);
    if (!t) return;
    if (!this.currentRunCountry) {
      this.progressTracker.updateMissedProgress(t.label);
      return
    }
    let r = t,
      n = r.$input;
    n && ("text" === n.type || "TEXTAREA" === n.tagName) && (this.taskQueue.add(async () => {
      let e = await (0, d.fillAshbyCountryCombobox)(n, this.currentRunCountry);
      e && this.progressTracker.updateFilledProgress(r.label)
    }), await this.taskQueue.run())
  }
  async handleFileUploads() {
    if (this.disableUploadResume ? (await (0, d.clearExistingResume)(document), this
        .progressTracker.updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
        await (0, d.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), this.coverLetter?.coverLetterId) {
      let e = this.coverLetter;
      this.taskQueue.add(async () => {
        await (0, d.uploadCoverLetter)(e, this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress)
      })
    }
    await this.taskQueue.run()
  }
  async fillEducationHistory() {
    let e = Array.isArray(this.answer?.education) ? this.answer.education : [];
    if (0 === e.length) return;
    await (0, d.syncEducationHistorySections)(e.length);
    let t = (0, f.getEducationRules)();
    (0, o.setSectionResultFocusRules)(h.FIELD_TYPE.EDUCATION, t);
    let r = (0, a.getEducationOperations)(t, e, this.operationConfig, void 0, (0, a
      .sectionProgressCallbacks)("Education History", this.progressTracker));
    for (let e of r) this.taskQueue.add(e);
    await this.taskQueue.run()
  }
  async checkCoverLetter() {
    (0, l.postCoverLetterStatus)((0, d.getAshbyCoverLetterStatus)())
  }
  submitApplication() {
    let e = (0, b.getFirstOrderedNode)(this.submitDOMQuery);
    if (e) {
      e?.click();
      let t = new MutationObserver((e, t) => {
          for (let t of e) "childList" === t.type && t.addedNodes.forEach(e => {
            e.nodeType === Node.ELEMENT_NODE && e.classList.contains(
              "ashby-application-form-success-container") && window.top?.postMessage(v
              .cleanObject({
                type: h.MESSAGE_EVENTS.agentSubmitClicked
              }), {
                targetOrigin: "*"
              })
          })
        }),
        r = {
          childList: !0,
          subtree: !0
        };
      t.observe(document.body, r)
    }
  }
}

function x(e) {
  let t = String(e.label ?? "").replace(/(?:\s*\*)+\s*$/g, "").replace(/\s+/g, " ").trim()
    .toLowerCase();
  if ("country" !== t) return !1;
  let r = e.$input;
  return !!r?.closest?.('[data-field-path="_systemfield_country"]')
}

function C(e, t) {
  return e.filter(e => A(e, t))
}

function A(e, t) {
  if (!k(e.label)) return !0;
  let r = T(e.label);
  if (!r) return !0;
  let n = F(r, t);
  return !!n && I(t[n])
}

function k(e) {
  let t = e.toLowerCase();
  return w.some(e => t.startsWith(e))
}

function T(e) {
  let t = e.match(/\(([^)]+)\)\s*$/);
  return t?.[1]?.trim().toLowerCase() || ""
}

function F(e, t) {
  for (let r of Object.keys(t || {}))
    if (r.toLowerCase().startsWith("school (") && T(r) === e) return r;
  return ""
}

function I(e) {
  return Array.isArray(e) ? e.some(e => "" !== String(e ?? "").trim()) : "" !== String(e ?? "")
    .trim()
}

