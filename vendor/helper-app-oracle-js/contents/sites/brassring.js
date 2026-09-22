/**
 * Parcel module id: jiUzT
 * Resolved path: contents/sites/brassring.js (oracle restore)
 * Dependencies:
 *   ./answer -> LdxVK  =>  src/contents/sites/brassring/answer.js
 *   ./country -> huUp4  =>  src/contents/sites/brassring/country.js
 *   ./operations -> 9ZJbU  =>  src/contents/sites/brassring/operations.js
 *   ./rules -> 79ZpG  =>  src/contents/sites/brassring/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  _tilde_contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/section-results -> 6WWsC  =>  _tilde_contents/methods/section-results.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Brassring", () => R);
var o = e("~contents/methods/section-results"),
  i = e("dayjs"),
  a = n.interopDefault(i),
  l = e("@plasmohq/messaging"),
  s = e("~contents/methods/answer"),
  u = e("~contents/methods/cancellation"),
  c = e("~contents/methods/dom"),
  d = e("~contents/sites/base-filler"),
  f = e("~core/enums"),
  p = e("./answer"),
  m = e("./country"),
  h = e("./operations"),
  g = e("./rules");

function b(e) {
  return e.replace(/\s+/g, " ").trim().toLowerCase()
}

function y(e) {
  let t = b(e.label),
    r = t.replace(/[\/]+/g, " ").replace(/\s+/g, " ");
  return /^country(?:\/region)?$/.test(t) || "country region" === r ? 0 : ["state", "province",
    "state province", "state region province", "state region province county", "current state",
    "current province", "current state province"
  ].includes(r) ? 2 : 1
}

function v(e) {
  let t = b(e.label);
  if (!/^country(?:\s*\/\s*|\s+)region$/.test(t) || e.type !== f.FIELD_TYPE.SEARCH) return !1;
  let r = e.$input,
    n = [r?.id, r?.getAttribute("name") || "", r?.getAttribute("dbfieldname") || ""].join(" ")
    .toLowerCase();
  return /(?:^|\s|[_-])profile(?:\s|[_-]|$)/.test(n)
}

function w(e) {
  let t = [],
    r = [];
  for (let n of e) v(n) ? t.push(n) : r.push(n);
  return {
    geographicCountryRules: t,
    regularRules: r
  }
}

function S(e) {
  return e.filter(e => 2 === y(e)).map(e => ({
    label: e.label,
    type: e.type,
    optionCount: Array.isArray(e.options) ? e.options.length : 0
  }))
}

function E(e) {
  return e.map((e, t) => ({
    rule: e,
    index: t
  })).sort((e, t) => {
    let r = y(e.rule) - y(t.rule);
    return r || e.index - t.index
  }).map(({
    rule: e
  }) => e)
}

function x(e) {
  let t = Array.isArray(e) ? e.find(Boolean) : e;
  return String(t ?? "").trim()
}

function C(e) {
  let t = e?.regular || {},
    r = Object.entries(t).find(([e]) => /^country(?:\/region)?$/i.test(e.replace(/\s+/g, " ")
    .trim()));
  return x(r?.[1]) || x(t["Country/Region"]) || x(e?.country)
}

function A(e) {
  let t = String(e.description || "");
  return e.type === f.FIELD_TYPE.DATE && /^date$/i.test(e.label.trim()) &&
    /Voluntary Self-Identification of Disability/i.test(t) && /signature date/i.test(t) && /today/i
    .test(t)
}

function k(e, t) {
  let r = C(t),
    n = Object.keys(e).find(e => /^country(?:\/region)?$/i.test(e.replace(/\s+/g, " ").trim()));
  return r && n && (e[n] = r), e
}

function T(e) {
  return String(e ?? "").replace(/\*/g, "").replace(/\s+/g, " ").trim()
}

function F(e) {
  let t = e;
  for (; t && t !== document.documentElement;) {
    let e = "undefined" != typeof window && window.getComputedStyle ? window.getComputedStyle(t) :
      null,
      r = String(t.className || "");
    if (t.hidden || "true" === t.getAttribute("aria-hidden") ||
      /\b(hidden|hiddenField|hide|ng-hide)\b/.test(r) || e?.display === "none" || e?.visibility ===
      "hidden" || e?.visibility === "collapse") return !1;
    t = t.parentElement
  }
  return !0
}

function I() {
  let e = Array.from(document.querySelectorAll(".fieldcontain")).filter(F).map(e => T(e
    .querySelector("label.ListView, label[id$='-label'], label")?.textContent)).filter(e => e && !
    /^(yes|no)$/i.test(e));
  return Array.from(new Set(e)).slice(0, 40)
}

function j() {
  return Object.entries((0, h.getUploadSnapshotValues)()).filter(([, e]) => T(e)).map(([e]) => e)
    .sort()
}

function D() {
  let e = T(document.querySelector("#ApplyPageHead")?.textContent),
    t = T(document.querySelector(".progressBarContainer")?.textContent),
    r = I(),
    n = j();
  return e || t || 0 !== r.length || 0 !== n.length ? JSON.stringify({
    heading: e,
    progress: t,
    labels: r,
    uploadKeys: n
  }) : null
}

function P(e, t) {
  return Object.entries(t || {}).some(([t, r]) => !!(0, s.isMatched)(e, t) && (Array.isArray(r) ? r
    .every(e => "" === String(e ?? "").trim()) : "" === String(r ?? "").trim()))
}
async function _(e, t) {
  for (let r of e) {
    if (r.type !== f.FIELD_TYPE.TEXT || !/\bother\b/i.test(r.label) || !P(r.label, t)) continue;
    let e = r.$input;
    (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && await (0, h
      .fillInputTextField)(e, "")
  }
}
let L = "BrassRing resume parsing did not complete. Please retry Autofill.";
class R extends d.BaseFiller {
  getFieldHandlers() {
    return {
      [f.FIELD_TYPE.TEXT]: {
        handler: (e, t) => {
          let r = Array.isArray(t) ? t[0] : t;
          if (null != r && "" !== r) return (0, h.fillInputTextField)(e.$input, String(r))
        },
        options: {
          expectArray: !0
        }
      },
      [f.FIELD_TYPE.DATE]: {
        handler: (e, t) => {
          let r = Array.isArray(t) ? t[0] : t;
          if (null != r && "" !== r) return (0, h.fillInputTextField)(e.$input, String(r))
        },
        options: {
          expectArray: !0
        }
      },
      [f.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, h.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [f.FIELD_TYPE.SEARCH]: {
        handler: (e, t) => (0, h.fillSearchField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [f.FIELD_TYPE.MULTI_SELECT]: {
        handler: (e, t) => (0, h.fillMultiselectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [f.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, h.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [f.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, h.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  async runPreFillForm() {
    this.currentRunCountryCommitted = !1, console.info(
      `[BrassRingAutofill] fill-stage ${JSON.stringify({stage:"prefill-start"})}`), await (0,
      h.preFillForm)(), console.info(
      `[BrassRingAutofill] fill-stage ${JSON.stringify({stage:"prefill-complete"})}`)
  }
  async preFillCountryAndRefreshStateRules(e) {
    let {
      geographicCountryRules: t
    } = w(e), r = await (0, m.runBrassringCountryPrefill)({
      fetchAutofillInfo: () => (0, l.sendToBackground)({
        name: "getAutofillInfo",
        body: {
          forceRefresh: !0
        }
      }).catch(() => null),
      fillCountry: async e => {
        if (1 !== t.length) return console.info(
          `[BrassRingAutofill] country-prefill-skipped ${JSON.stringify({reason:"country-control-not-unique",controlCount:t.length})}`
          ), !1;
        try {
          return await (0, h.fillSearchField)(t[0], [e]), !0
        } catch {
          return console.info(
            `[BrassRingAutofill] country-prefill-skipped ${JSON.stringify({reason:"country-commit-rejected"})}`
            ), !1
        }
      },
      waitForDependentFields: async () => !0
    });
    return this.currentRunCountryCommitted = r.committed, console.info(
      `[BrassRingAutofill] country-prefill-result ${JSON.stringify({hasCountry:!!r.country,committed:r.committed,dependentSettled:r.dependentSettled})}`
      ), r.committed ? await (0, g.extractRules)() : e
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    console.info(
      `[BrassRingAutofill] fill-stage ${JSON.stringify({stage:"initial-rules-extracted",stateRules:S(t)})}`
      );
    let r = await this.handleResumeUpload();
    if (r?.newUpload && (t = await this.extractFormRules(), console.info(
        `[BrassRingAutofill] fill-stage ${JSON.stringify({stage:"post-parser-rules-extracted",parserDetected:r.parserDetected,parserReady:r.parserReady,ruleCount:t.length})}`
        )), r?.parserDetected && !r.parserReady) return console.info(
      `[BrassRingAutofill] fill-stage ${JSON.stringify({stage:"resume-parser-abort",parserDetected:!0,parserReady:!1,reason:"parser-timeout"})}`
      ), L;
    t = await this.seedEmptyCompositeRules(t), t = await this
      .preFillCountryAndRefreshStateRules(t), console.info(
        `[BrassRingAutofill] fill-stage ${JSON.stringify({stage:"country-prefill-complete",countryCommitted:this.currentRunCountryCommitted,stateRules:S(t)})}`
        ), t = this.prepareCoverLetterRules(t);
    let {
      geographicCountryRules: n,
      regularRules: o
    } = w(t);
    if (this.progressTracker.setFieldsRequiredStatus(t), r?.hasSection && !r.uploaded && (this
        .progressTracker.updateFieldRequiredStatus({
          label: h.BRASSRING_RESUME_LABEL,
          required: !0,
          type: "file"
        }), this.progressTracker.updateMissedProgress(h.BRASSRING_RESUME_LABEL)), this
      .currentRunCountryCommitted)
      for (let e of n) this.progressTracker.updateFilledProgress(e.label);
    console.info(
      `[BrassRingAutofill] fill-stage ${JSON.stringify({stage:"fill-v2-request",stateRules:S(o)})}`
      );
    let i = await this.fetchFormAnswers(o, e);
    if ("string" == typeof i) return i;
    await this.fillRegularFields(o), await this.fillEducationAndEmployment(t), await this
      .fillCoverLetterFields();
    let a = await this.runComboQuestionAutofillIfNeeded(t, e);
    return "string" == typeof a ? a : (t = a, await this.executeSiteSpecificSteps(t), await this
      .finalizeFillForm())
  }
  async extractFormRules() {
    return await (0, g.extractRules)()
  }
  async seedEmptyCompositeRules(e) {
    let t = e.some(e => e.type === f.FIELD_TYPE.EDUCATION),
      r = e.some(e => e.type === f.FIELD_TYPE.EMPLOYMENT);
    if (t && r) return e;
    let n = await (0, l.sendToBackground)({
        name: "getAutofillInfo",
        body: {
          forceRefresh: !0
        }
      }).catch(() => null),
      o = t ? 0 : Array.isArray(n?.education) ? n.education.length : 0,
      i = r ? 0 : Array.isArray(n?.workExperience) ? n.workExperience.length : 0;
    if (0 === o && 0 === i) return e;
    let a = await (0, h.waitForCompositeSectionRows)({
        educationCount: o,
        employmentCount: i
      }),
      s = [...e],
      u = async (e, t, r) => {
        if (0 === t) return;
        let n = await (0, h.openSectionForEdit)(e, 0),
          o = n ? r() : null;
        console.info("[BrassRingAutofill] composite-rule-prepare", {
          kind: e,
          rowCount: t,
          opened: n,
          childCount: o?.children?.length ?? 0
        }), o && s.push(o)
      };
    t || await u("education", a.educationCount, () => (0, g.getEducationRule)(0)), r || await u(
      "experience", a.employmentCount, () => (0, g.getExperienceRule)(0));
    let c = s.some(e => e.type === f.FIELD_TYPE.EDUCATION),
      d = s.some(e => e.type === f.FIELD_TYPE.EMPLOYMENT);
    if (c && d) return s;
    let p = await (0, h.seedEmptyCompositeSections)({
      educationCount: c ? 0 : o,
      employmentCount: d ? 0 : i
    });
    if (!p) return s;
    let m = await (0, g.extractRules)();
    for (let e of [f.FIELD_TYPE.EDUCATION, f.FIELD_TYPE.EMPLOYMENT]) {
      if (s.some(t => t.type === e)) continue;
      let t = m.find(t => t.type === e);
      t && s.push(t)
    }
    return s
  }
  getSiteName() {
    return "brassring"
  }
  async fetchFormAnswers(e, t) {
    if (0 === e.length) {
      let e = Date.now();
      this.timeTrace.requestStartTime = e, this.timeTrace.fillStartTime = e, this.answer = {
        education: [],
        workExperience: [],
        skills: [],
        regular: {},
        fillDataList: []
      };
      return
    }
    return await super.fetchFormAnswers(e, t)
  }
  async fillRegularFields(e) {
    let t = E(e),
      r = t.flatMap(e => A(e) ? [async () => {
        await this.operationConfig[e.type]?.(e, {
          [e.label]: a.default().format("M/D/YYYY")
        })
      }] : (0, s.getRegularOperations)([e], this.answer.regular, this.operationConfig));
    for (let e of r) this.taskQueue.add(e);
    await this.taskQueue.run(), await _(t, this.answer.regular)
  }
  async checkCoverLetter() {
    this.ensureCoverLetterDetectionObserver(), this.postCoverLetterDetectionStatus()
  }
  postCoverLetterDetectionStatus() {
    if (!(0, h.hasCoverLetterUploadSlot)()) {
      (0, c.postCoverLetterStatus)("");
      return
    }(0, c.postCoverLetterStatus)((0, h.isCoverLetterRequired)() ? "required" : "optional")
  }
  registerCoverLetterProgress() {
    if (!(0, h.hasCoverLetterUploadSlot)()) return null;
    let e = (0, h.isCoverLetterRequired)();
    return this.progressTracker.updateFieldRequiredStatus({
      label: "Cover Letter",
      required: e,
      type: "file"
    }), e
  }
  ensureCoverLetterDetectionObserver() {
    !this.coverLetterDetectionObserver && document.body && (this.coverLetterDetectionObserver =
      new MutationObserver(() => {
        this.coverLetterDetectionTimer && clearTimeout(this.coverLetterDetectionTimer), this
          .coverLetterDetectionTimer = setTimeout(() => {
            this.postCoverLetterDetectionStatus()
          }, 500)
      }), this.coverLetterDetectionObserver.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["style", "class", "aria-hidden"]
      }))
  }
  async handleResumeUpload() {
    let e = (0, h.getResumeUploadState)();
    if (!e.hasSection) return {
      hasSection: !1,
      newUpload: !1,
      uploaded: !1,
      parserDetected: !1,
      parserReady: !0
    };
    if (this.progressTracker.updateFieldRequiredStatus({
        label: h.BRASSRING_RESUME_LABEL,
        required: !0,
        type: "file"
      }), this.disableUploadResume) return this.progressTracker.updateMissedProgress(h
      .BRASSRING_RESUME_LABEL), {
      hasSection: !0,
      newUpload: !1,
      uploaded: !1,
      parserDetected: !1,
      parserReady: !0
    };
    if (e.uploaded) return this.progressTracker.updateFilledProgress(h
    .BRASSRING_RESUME_LABEL), {
      hasSection: !0,
      newUpload: !1,
      uploaded: !0,
      parserDetected: !1,
      parserReady: !0
    };
    if (!e.canUpload) return this.progressTracker.updateMissedProgress(h
      .BRASSRING_RESUME_LABEL), {
        hasSection: !0,
        newUpload: !1,
        uploaded: !1,
        parserDetected: !1,
        parserReady: !0
      };
    let t = await (0, h.uploadResume)(this.resumeInfo, this.progressTracker
      .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
    return t.uploaded || this.progressTracker.updateMissedProgress(h.BRASSRING_RESUME_LABEL), {
      hasSection: !0,
      newUpload: t.uploaded,
      ...t
    }
  }
  async executeSiteSpecificSteps(e) {
    let t = this.registerCoverLetterProgress(),
      r = null != t && (this.coverLetter?.coverLetterId ? !await (0, h.uploadCoverLetter)(this
        .coverLetter, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress) : t);
    r && t && this.progressTracker.updateMissedProgress("Cover Letter"), await super
      .executeSiteSpecificSteps(e)
  }
  async fillEducationAndEmployment() {
    await this.fillCompositeSection("education", this.answer.education || [], g
      .getEducationRule, "Education"), await this.fillCompositeSection("experience", this
      .answer.workExperience || [], g.getExperienceRule, "Employment")
  }
  async fillCompositeSection(e, t, r, n) {
    let i = t.length;
    if (0 === i) return;
    let a = await (0, h.ensureSectionCount)(e, i),
      l = 0 === a ? this.countAvailableCompositeRules(r, i) : 0;
    if (0 === a && 0 === l) return;
    let c = Math.min(t.length, a || l),
      d = 0 === a,
      f = d ? Array.from({
        length: c
      }, (e, t) => t) : Array.from({
        length: c
      }, (e, t) => c - 1 - t),
      p = (0, o.createSequentialSectionResultReporter)("education" === e ? "education" :
        "employment", this.progressTracker, n),
      m = !1,
      g = !1;
    try {
      for (let o of f) {
        d || await (0, h.openSectionForEdit)(e, o);
        let i = r(o);
        if (!i?.children?.length) continue;
        m || (this.progressTracker.updateFieldRequiredStatus({
          label: n,
          required: !!i.required,
          type: "education" === e ? "education" : "employment"
        }), m = !0);
        let a = {
            ...p.forRecord(o, [i]),
            onSkipped: () => {
              g = !0
            }
          },
          l = "education" === e ? (0, s.getEducationOperations)([i], [t[o]], this
            .operationConfig, void 0, a, {
              keepCurrentFieldOnExit: !0
            }) : (0, s.getEmploymentOperations)([i], [t[o]], this.operationConfig, void 0, a, {
            keepCurrentFieldOnExit: !0
          });
        for (let e of l) this.taskQueue.add(e);
        if (await this.taskQueue.run(), g) break;
        d || (await (0, h.saveSection)(e, o), p.clearRecordFocus(o))
      }
    } finally {
      (0, u.updateCurrentField)(null)
    }
    if (g) {
      this.progressTracker.updateMissedProgress(n);
      return
    }
    this.progressTracker.updateFilledProgress(n)
  }
  countAvailableCompositeRules(e, t) {
    let r = 0;
    for (let n = 0; n < t; n++) {
      let t = e(n);
      if (!t?.children?.length) break;
      r += 1
    }
    return r
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  getSubmitTrackingScopeKey() {
    return D()
  }
  resolveDelegatedSubmitButton(e) {
    let t = e.closest("button, input[type='submit'], input[type='button'], a");
    return t && this.isTrackedNavigationButton(t) ? t : null
  }
  isTrackedNavigationButton(e) {
    if (!this.isVisibleNavigationButton(e)) return !1;
    let t = this.getNavigationButtonText(e),
      r = e.id.toLowerCase(),
      n = (e.getAttribute("ng-click") || e.getAttribute("data-ng-click") || "").toLowerCase();
    return !("saveasdraft" === r || t.includes("save and finish later") || t.includes(
      "finish later") || t.includes("draft")) && ("shownext" === r || "showstart" === r || n
      .includes("gonext") || n.includes("gostart") || n.includes("submit") || t.includes(
        "save and continue") || t.includes("let's get started") || t.includes("submit") ||
      "next" === t || "continue" === t || "apply" === t || "submit application" === t)
  }
  isVisibleNavigationButton(e) {
    let t = window.getComputedStyle(e);
    return "none" !== t.display && "hidden" !== t.visibility && "true" !== e.getAttribute(
      "aria-hidden") && !e.disabled
  }
  getNavigationButtonText(e) {
    return (e.textContent || e.value || e.getAttribute("aria-label") || "").replace(/\s+/g, " ")
      .trim().toLowerCase()
  }
  getSubmitButtonSelector() {
    return "//*[self::button or self::input or self::a][contains(translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'submit') or contains(translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'submit') or contains(translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'save and continue') or contains(translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'save and continue') or contains(translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"let's get started\") or contains(translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"let's get started\") or translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'next' or translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'next' or translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'continue' or translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'continue' or translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'apply' or translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'apply' or translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'submit application' or translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'submit application']"
  }
  async getAutofillSnapshot() {
    return k({
      ...await (0, g.getFormSnapshot)(),
      ...(0, h.getUploadSnapshotValues)()
    }, this.answer)
  }
  async getSubmitSnapshot() {
    return k({
      ...await (0, g.getFormSnapshot)(),
      ...(0, h.getUploadSnapshotValues)()
    }, this.answer)
  }
  submitApplication() {
    (0, h.submitApplication)()
  }
  constructor(...e) {
    super(...e), this.currentRunCountryCommitted = !1, this.formatAnswer = p.formatAnswer
  }
}

