/**
 * Parcel module id: hdblo
 * Resolved path: src/contents/sites/kula.js
 * Dependencies:
 *   ./answer -> 6ff0Q  =>  src/contents/sites/kula/answer.js
 *   ./company-client-search -> kX13u  =>  src/contents/sites/kula/company-client-search.js
 *   ./company-search-dom -> 7h1k6  =>  src/contents/sites/kula/company-search-dom.js
 *   ./education-client-search -> hrZcr  =>  src/contents/sites/kula/education-client-search.js
 *   ./education-search-dom -> f25fI  =>  src/contents/sites/kula/education-search-dom.js
 *   ./location-client-search -> wnU1d  =>  src/contents/sites/kula/location-client-search.js
 *   ./location-search-dom -> 6TELQ  =>  src/contents/sites/kula/location-search-dom.js
 *   ./operations -> 4wVIP  =>  src/contents/sites/kula/operations.js
 *   ./rules -> 7iog9  =>  src/contents/sites/kula/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Kula", () => S);
var o = e("./company-client-search"),
  i = e("./company-search-dom"),
  a = e("~contents/methods/cancellation"),
  l = e("@plasmohq/messaging"),
  s = e("./education-client-search"),
  u = e("./education-search-dom"),
  c = e("./location-client-search"),
  d = e("./location-search-dom"),
  f = e("~contents/methods/dom"),
  p = e("~contents/methods/answer"),
  m = e("~contents/sites/base-filler"),
  h = e("~core/dom"),
  g = e("~core/enums"),
  b = e("~utils/delay"),
  y = e("./answer"),
  v = e("./operations"),
  w = e("./rules");
class S extends m.BaseFiller {
  getFieldHandlers() {
    return {
      [g.FIELD_TYPE.TEXT]: {
        handler: (e, t) => {
          let r = Array.isArray(t) ? t[0] || "" : t || "",
            n = e.label?.toLowerCase() || "";
          return n.includes("phone") ? (0, v.fillPhoneField)(e, r) : (0, v.fillInputTextField)
            (e.$input, r)
        },
        options: {
          expectArray: !1
        }
      },
      [g.FIELD_TYPE.DATE]: {
        handler: (e, t) => {
          let r = Array.isArray(t) ? t[0] || "" : t || "";
          return (0, v.fillInputTextField)(e.$input, r)
        },
        options: {
          expectArray: !1
        }
      },
      [g.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, v.fillSelectField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [g.FIELD_TYPE.SEARCH]: {
        handler: (e, t) => (0, v.fillSearchField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [g.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, v.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [g.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, v.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  getSiteName() {
    return "kula"
  }
  formatAnswer(e) {
    return (0, y.formatAnswer)(e)
  }
  async runPreFillForm() {
    await (0, v.preFillForm)()
  }
  async checkCoverLetter() {
    (0, f.postCoverLetterStatus)((0, v.getKulaCoverLetterStatus)())
  }
  async extractFormRules() {
    return await (0, w.getRules)()
  }
  async handleResumeUpload() {
    !this.disableUploadResume && this.resumeInfo ? (this.taskQueue.add(async () => {
        await (0, v.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress, this
          .progressTracker.updateMissedProgress)
      }), await this.taskQueue.run(), await (0, b.delay)(400)) : this.progressTracker
      .updateMissedProgress("Resume/CV"), this.coverLetter?.coverLetterId && this.coverLetter
      ?.coverLetterName ? (this.taskQueue.add(async () => {
        await (0, v.uploadCoverLetter)({
            coverLetterId: this.coverLetter.coverLetterId,
            coverLetterName: this.coverLetter.coverLetterName,
            markdown: this.coverLetter.markdown,
            useLegacyDownload: this.coverLetter.useLegacyDownload
          }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker
          .updateFilledProgress, this.progressTracker.updateMissedProgress)
      }), await this.taskQueue.run(), await (0, b.delay)(400)) : this.progressTracker
      .updateMissedProgress("Cover Letter")
  }
  async fillRegularFields(e) {
    let t = {
      ...this.operationConfig
    };
    for (let e of [g.FIELD_TYPE.TEXT, g.FIELD_TYPE.SEARCH, g.FIELD_TYPE.SELECT]) {
      let r = t[e];
      t[e] = async (e, t, n) => {
        let o = (0, c.classifyKulaLocationField)(e);
        if (!o) return r?.(e, t, n);
        let i = await (0, a.withSkip)(() => (0, c.resolveKulaLocationField)(e.$input, t,
        o, {
          requestStep: async e => await (0, l.sendToBackground)({
            name: "resolveAutofillClientSearchStep",
            body: e
          }),
          captureCandidates: d.captureKulaLocationCandidates,
          commitCandidate: d.commitKulaLocationCandidate,
          clearSearch: d.clearKulaLocationSearch
        }));
        return i.success && i.selected ? t[e.label] = i.selected.text : console.warn(
          "[Kula][Address] client-search-failed", {
            reason: i.failureReason,
            rounds: i.rounds
          }), i.success
      }
    }
    let r = [...(0, p.getRegularOperations)(e, this.answer.regular, t)];
    for (let e of r) this.taskQueue.add(e);
    await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {
    let t = this.answer.education?.length ?? 0;
    if (t > 0) {
      let e = document.querySelectorAll('div[data-test-id="education"]').length;
      for (let r = e; r < t; r++) {
        let e = (0, v.getKulaSectionAddButton)("Education");
        e && (e.click(), await (0, b.delay)(500))
      }
      let r = await (0, w.getEducationRules)();
      (0, h.setSectionResultFocusRules)("education", r), console.debug(
        "[Autofill][kula][section-results] registered", {
          type: "education",
          records: r.length,
          fields: r.reduce((e, t) => e + (t.children?.length ?? 0), 0)
        });
      let n = !1,
        o = {
          ...this.operationConfig
        };
      for (let e of [g.FIELD_TYPE.TEXT, g.FIELD_TYPE.SEARCH, g.FIELD_TYPE.SELECT]) {
        let t = o[e];
        o[e] = async (e, r, o) => {
          let i = (0, s.classifyKulaEducationField)(e);
          if (!i) return t?.(e, r, o);
          let c = await (0, a.withSkip)(() => (0, s.resolveKulaEducationField)(e.$input, r,
            i, {
              requestStep: async e => await (0, l.sendToBackground)({
                name: "resolveAutofillClientSearchStep",
                body: e
              }),
              captureCandidates: u.captureKulaEducationCandidates,
              commitCandidate: u.commitKulaEducationCandidate,
              clearSearch: u.clearKulaEducationSearch
            }));
          return c.success && c.selected ? r[e.label] = c.selected.text : (n = !0, console
            .warn("[Kula][Education] client-search-failed", {
              fieldType: i,
              reason: c.failureReason,
              rounds: c.rounds
            })), c.success
        }
      }
      let i = (0, p.sectionProgressCallbacks)("Education", this.progressTracker),
        c = (0, p.getEducationOperations)(r, this.answer.education, o, void 0, {
          ...i,
          onCompleted: () => n ? this.progressTracker.updateMissedProgress("Education") : i
            .onCompleted?.()
        });
      for (let e of c) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
    let r = this.answer.workExperience?.length ?? 0;
    if (r > 0) {
      let e = document.querySelectorAll('div[data-test-id="experience"]').length;
      for (let t = e; t < r; t++) {
        let e = (0, v.getKulaSectionAddButton)("Experience");
        e && (e.click(), await (0, b.delay)(500))
      }
      let t = await (0, w.getExperienceRules)();
      (0, h.setSectionResultFocusRules)("employment", t), console.debug(
        "[Autofill][kula][section-results] registered", {
          type: "employment",
          records: t.length,
          fields: t.reduce((e, t) => e + (t.children?.length ?? 0), 0)
        });
      let n = {
          ...this.operationConfig
        },
        l = !1;
      for (let e of [g.FIELD_TYPE.TEXT, g.FIELD_TYPE.SEARCH, g.FIELD_TYPE.SELECT]) {
        let t = n[e];
        n[e] = async (e, r, n) => {
          if (!(0, o.classifyKulaCompanyField)(e)) return t?.(e, r, n);
          let s = await (0, a.withSkip)(() => (0, o.resolveKulaCompanyField)(e.$input, r, {
            captureCandidates: i.captureKulaCompanyCandidates,
            commitCandidate: i.commitKulaCompanyCandidate,
            clearSearch: i.clearKulaCompanySearch
          }));
          return s.success && s.selected ? r[e.label] = s.selected.text : (l = !0, console
            .warn("[Kula][Company] local-fill-failed", {
              reason: s.failureReason,
              rounds: s.rounds
            })), s.success
        }
      }
      let s = (0, p.sectionProgressCallbacks)("Experience", this.progressTracker),
        u = (0, p.getEmploymentOperations)(t, this.answer.workExperience, n, void 0, {
          ...s,
          onCompleted: () => l ? this.progressTracker.updateMissedProgress("Experience") : s
            .onCompleted?.()
        });
      for (let e of u) this.taskQueue.add(e);
      await this.taskQueue.run()
    }
  }
  async getAutofillSnapshot() {
    let e = (0, w.getFormSnapshot)();
    return e
  }
  async getSubmitSnapshot() {
    return (0, w.getFormSnapshot)()
  }
  getSubmitButtonSelector() {
    return '//button[@data-testid="apply-button"]'
  }
  submitApplication() {
    let e = Array.from(document.querySelectorAll("button")).find(e =>
      /apply for this position|submit/i.test(e.textContent || ""));
    e && e.click()
  }
  async doFillForm(e = !1) {
    return super.doFillForm(e)
  }
}

