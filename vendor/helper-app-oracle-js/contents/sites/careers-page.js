/**
 * Parcel module id: dcvWr
 * Resolved path: contents/sites/careers-page.js (oracle restore)
 * Dependencies:
 *   ./answer -> 7ABcJ  =>  src/contents/sites/careers-page/answer.js
 *   ./operations -> 1VGS1  =>  src/contents/sites/careers-page/operations.js
 *   ./rules -> 9NM9Q  =>  src/contents/sites/careers-page/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/section-results -> 6WWsC  =>  _tilde_contents/methods/section-results.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  _tilde_contents/sites/autofill-answer-pair-tracking.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~store/url -> b53L3  =>  _tilde_store/url.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Careerspage", () => v);
var o = e("~contents/methods/section-results"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/dom"),
  l = e("~contents/sites/base-filler"),
  s = e("~contents/sites/autofill-answer-pair-tracking"),
  u = e("~core/enums"),
  c = e("~core/xpath"),
  d = e("~store/url"),
  f = e("~utils/delay"),
  p = e("./answer"),
  m = e("./operations"),
  h = e("./rules");

function g(e) {
  let t = [],
    r = document.querySelectorAll(".form-group");
  for (let n of r)(0, h.detectEduExpType)(n) === e && n.querySelectorAll(
    ".education-experience-item").forEach(e => t.push(e));
  return t
}

function b() {
  return g("education")
}

function y() {
  return g("experience")
}
class v extends l.BaseFiller {
  extractEducationEmploymentAdditional(e) {
    let {
      education: t,
      employment: r
    } = e || {};
    return {
      education: t || [],
      employment: r || []
    }
  }
  async fillSequentialSectionRecords(e) {
    let {
      sectionName: t,
      records: r,
      getSections: n,
      addSection: i,
      getRules: a,
      getOperations: l,
      beforeFillSection: s,
      afterFillSection: u,
      onSkipped: c
    } = e;
    if (!r.length) return;
    let d = (0, o.createSequentialSectionResultReporter)("education" === t ? "education" :
        "employment", this.progressTracker, "education" === t ? "Education" : "Experience"),
      p = !1;
    for (let e = 0; e < r.length; e++) {
      let o = n();
      if (console.debug("[careers-page][section] preparing record", {
          sectionName: t,
          recordIndex: e,
          recordCount: r.length,
          sectionCount: o.length
        }), e > 0 || 0 === o.length) {
        let r = o.length;
        await i(1);
        let a = !1;
        for (let e = 0; e < 10; e++) {
          if ((o = n()).length > r) {
            a = !0;
            break
          }
          await (0, f.delay)(200)
        }
        if (console.debug("[careers-page][section] add attempt completed", {
            sectionName: t,
            recordIndex: e,
            beforeCount: r,
            sectionCount: o.length,
            added: a
          }), !a && e > 0) {
          console.warn(`Failed to add next ${t} section at index ${e}`);
          break
        }
      }
      o = n();
      let g = o[o.length - 1];
      if (!g) {
        console.warn("[careers-page][section] current section not found", {
          sectionName: t,
          recordIndex: e,
          sectionCount: o.length,
          formGroups: Array.from(document.querySelectorAll(".form-group")).map(e => ({
            detectedType: (0, h.detectEduExpType)(e),
            label: e.querySelector(":scope > label")?.textContent?.trim() || "",
            itemCount: e.querySelectorAll(".education-experience-item").length
          }))
        });
        break
      }
      s && await s(g);
      let b = await a(),
        y = b[b.length - 1];
      if (console.debug("[careers-page][section] rules extracted", {
          sectionName: t,
          recordIndex: e,
          ruleCount: b.length,
          childCount: y?.children?.length || 0
        }), !y) {
        console.warn("[careers-page][section] current rule not found", {
          sectionName: t,
          recordIndex: e,
          sectionCount: o.length,
          ruleCount: b.length
        });
        break
      }
      let v = l([y], [r[e]], this.operationConfig, void 0, {
        ...d.forRecord(e, [y]),
        onSkipped: () => {
          p = !0
        }
      });
      for (let e of v) this.taskQueue.add(e);
      if (console.debug("[careers-page][section] operations started", {
          sectionName: t,
          recordIndex: e,
          operationCount: v.length
        }), await this.taskQueue.run(), console.debug(
          "[careers-page][section] operations completed", {
            sectionName: t,
            recordIndex: e
          }), p) {
        c?.();
        return
      }
      let w = n(),
        S = w[w.length - 1] || g;
      u && await u(S, r[e]), console.debug(
      "[careers-page][section] post-processing completed", {
        sectionName: t,
        recordIndex: e
      });
      let E = n()[n().length - 1] || S,
        x = await (0, m.clickSaveButton)(E);
      if (console.debug("[careers-page][section] save attempted", {
          sectionName: t,
          recordIndex: e,
          saved: x
        }), !x) {
        d.markRecordMissed(e), console.warn(`Save ${t} section failed at index ${e}`);
        break
      }
      d.clearRecordFocus(e)
    }
  }
  getRecordDateValue(e, t) {
    for (let r of t) try {
      let t = (0, i.findValueInRecord)(r, e),
        n = Array.isArray(t) ? t[0] : t,
        o = String(n || "").trim();
      if (o) return o
    } catch {}
    return null
  }
  async fillSectionEndDateAfterStart(e) {
    let {
      section: t,
      record: r,
      sectionName: n,
      startSelectors: o,
      endSelectors: i,
      preferredEndDateQuery: a,
      getSections: l
    } = e, s = this.getRecordDateValue(r, p.END_DATE_LABEL_ALIASES);
    if (!s) return;
    let c = o.join(", "),
      d = i.join(", "),
      h = () => {
        let e = l();
        return e[e.length - 1] || t
      },
      g = () => Array.from(document.querySelectorAll(".form-group")).filter(e => {
        let t = e.querySelector(":scope > label")?.textContent?.toLowerCase() || "";
        return !!t.includes(n) || Array.from(e.querySelectorAll("button")).some(e => {
          let t = e.textContent?.trim().toLowerCase() || "";
          return t.includes("add") && t.includes(n)
        })
      }),
      b = null,
      y = -1;
    for (let e = 0; e < 20; e++) {
      let t = h(),
        r = t.querySelector(c),
        n = g().map(e => e.querySelector(c)).find(e => !!e),
        o = r || n || null;
      if ((o?.value || "").trim()) {
        b = o, y = e;
        break
      }
      await (0, f.delay)(150)
    }
    b || console.warn("[careers-page][end-date] start input not ready", {
      sectionName: n,
      startQuery: c,
      startedAtCountInDocument: document.querySelectorAll(c).length
    });
    let v = null,
      w = -1,
      S = "";
    for (let e = 0; e < 20; e++) {
      let t = h(),
        r = b?.closest(".education-experience-item")?.querySelector(a),
        n = t.querySelector(a),
        o = g().map(e => e.querySelector(a)).find(e => !!e),
        i = document.querySelector(d);
      if (r ? (v = r, S = "byStartRow") : n ? (v = n, S = "bySection") : o ? (v = o, S =
          "byFormGroup") : i ? (v = i, S = "byDocument") : v = null, v) {
        w = e;
        break
      }
      await (0, f.delay)(200)
    }
    if (!v) {
      console.warn("[careers-page][end-date] end input not found after start filled", {
        sectionName: n,
        endQuery: d,
        preferredEndDateQuery: a,
        endedAtCountInDocument: document.querySelectorAll(d).length,
        endedAtCountByName: document.querySelectorAll('input[name="ended_at"]').length
      });
      return
    }
    let E = (v.value || "").trim();
    if (E) return;
    let x = t.closest(".form-group")?.querySelector(":scope > label") || v;
    await (0, m.fillDateField)({
      label: "End Date",
      type: u.FIELD_TYPE.DATE,
      required: !1,
      $label: x,
      $input: v
    }, s)
  }
  async ensureConsentCheckboxes() {
    try {
      let e = (0, m.querySelectorAllInDocumentAndShadows)('input[type="checkbox"]');
      if (!e.length) return;
      let t = ["terms and conditions", "privacy policy", "privacy", "terms"];
      for (let r of e) {
        if (r.checked) continue;
        let e = r.getRootNode(),
          n = (r.id ? e.querySelector(`label[for="${r.id}"]`) : null) || r.closest("label") || r
          .parentElement,
          o = (n?.textContent || "").toLowerCase();
        if (!o) continue;
        let i = t.some(e => o.includes(e));
        i && (r.click(), await (0, f.delay)(100))
      }
    } catch {}
  }
  async fillEducationEndDateAfterStart(e, t) {
    await this.fillSectionEndDateAfterStart({
      section: e,
      record: t,
      sectionName: "education",
      startSelectors: p.EDUCATION_START_DATE_SELECTORS,
      endSelectors: p.EDUCATION_END_DATE_SELECTORS,
      preferredEndDateQuery: p.EDUCATION_PREFERRED_END_DATE_QUERY,
      getSections: b
    })
  }
  async fillExperienceEndDateAfterStart(e, t) {
    await this.fillSectionEndDateAfterStart({
      section: e,
      record: t,
      sectionName: "experience",
      startSelectors: p.EXPERIENCE_START_DATE_SELECTORS,
      endSelectors: p.EXPERIENCE_END_DATE_SELECTORS,
      preferredEndDateQuery: p.EXPERIENCE_PREFERRED_END_DATE_QUERY,
      getSections: y
    })
  }
  async checkCoverLetter() {
    (0, a.postCoverLetterStatus)((0, h.getCoverLetterStatus)())
  }
  getFieldHandlers() {
    return {
      [u.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        if (!r) return;
        let n = e.label?.toLowerCase() || "";
        return n.includes("phone") ? (0, m.fillPhoneField)(e, String(r ?? "")) : (0, m
          .fillInputTextField)(e.$input, String(r ?? ""))
      },
      [u.FIELD_TYPE.SELECT]: (e, t) => (0, m.fillSelectField)(e, t),
      [u.FIELD_TYPE.CHECKBOX]: (e, t) => (0, m.fillCheckboxField)(e, t),
      [u.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, m.fillRadioGroupFiled)(e, t),
      [u.FIELD_TYPE.DATE]: (e, t) => {
        let r = t?.[0];
        if (r) return (0, m.fillDateField)(e, String(r))
      }
    }
  }
  async extractFormRules() {
    return await (0, h.extractRules)()
  }
  getSiteName() {
    return "careers-page"
  }
  async getAutofillSnapshot(e) {
    let t = await (0, h.getFormSnapshot)() || {},
      r = (0, h.getEduAndEmploymentSnapshot)() || {},
      n = {
        ...t,
        ...r
      };
    this.lastFullAutofillSnapshot = n;
    let o = {
      ...n
    };
    return delete o.education, delete o.employment, o
  }
  async getSubmitSnapshot() {
    let e = await (0, h.getFormSnapshot)() || {},
      t = (0, h.getEduAndEmploymentSnapshot)() || {},
      r = {
        ...e,
        ...t
      };
    this.lastFullSubmitSnapshot = r;
    let n = {
      ...r
    };
    return delete n.education, delete n.employment, n
  }
  getAdditionalAutofillSnapshotData(e) {
    return this.extractEducationEmploymentAdditional(this.lastFullAutofillSnapshot)
  }
  getAdditionalSubmitSnapshotData() {
    return this.extractEducationEmploymentAdditional(this.lastFullSubmitSnapshot)
  }
  async executeSiteSpecificSteps(e) {
    let t = (0, c.getFirstOrderedNode)(p.APPLY_SUBMIT_BUTTON_XPATH),
      r = document.querySelector("#application-root")?.shadowRoot || null,
      n = r ? r.querySelector('button[data-testid="mnkt-button"]') : null,
      o = n || t;
    await (0, f.delay)(300);
    let i = await this.getAutofillSnapshot(e),
      a = this.getAdditionalAutofillSnapshotData?.(e) || {};
    o && (this.careersSubmitTrackingAbortController?.abort(), this
      .careersSubmitTrackingAbortController = new AbortController, o.addEventListener("click",
        async () => {
          let e = await this.getSubmitSnapshot(),
            t = this.getAdditionalSubmitSnapshotData?.() || {};
          (0, s.sendAutofillAnswerPairEvent)({
            formUrl: (0, d.useUrlStore).getState().currentTabUrl,
            autofillSnapshot: i,
            submitSnapshot: e,
            additionalAutofillData: a,
            additionalSubmitData: t,
            source: this.getSiteName()
          })
        }, {
          signal: this.careersSubmitTrackingAbortController.signal
        }))
  }
  submitApplication() {
    let e = (0, c.getFirstOrderedNode)(p.APPLY_SUBMIT_BUTTON_XPATH),
      t = document.querySelector("#application-root")?.shadowRoot || null,
      r = t ? t.querySelector('button[data-testid="mnkt-button"]') : null,
      n = r || e;
    n && n.click()
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm(), console.debug("[careers-page][fill] initialized");
    let t = this.prepareCoverLetterRules(await this.extractFormRules());
    console.debug("[careers-page][fill] rules extracted", {
        total: t.length,
        education: t.filter(e => e.type === u.FIELD_TYPE.EDUCATION).length,
        employment: t.filter(e => e.type === u.FIELD_TYPE.EMPLOYMENT).length
      }), this.progressTracker.setFieldsRequiredStatus(t), console.debug(
        "[careers-page][fill] resume upload started"), await this.handleResumeUpload(), console
      .debug("[careers-page][fill] resume upload completed"), console.debug(
        "[careers-page][fill] answer request started");
    let r = await this.fetchFormAnswers(t, e);
    return "string" == typeof r ? (console.warn("[careers-page][fill] answer request stopped", {
      reason: r
    }), r) : (console.debug("[careers-page][fill] answer request completed", {
        regular: Object.keys(this.answer.regular || {}).length,
        education: this.answer.education?.length || 0,
        employment: this.answer.workExperience?.length || 0
      }), await this.fillRegularFields(t), console.debug(
        "[careers-page][fill] regular fields completed"), await this
    .ensureConsentCheckboxes(), await this.fillEducationAndEmployment(t), console.debug(
        "[careers-page][fill] structured sections completed"), await this
      .fillCoverLetterFields(), await this.executeSiteSpecificSteps(t), this
      .finalizeFillForm())
  }
  async fillEducationAndEmployment(e) {
    let t = this.answer.education || [],
      r = !1;
    await this.fillSequentialSectionRecords({
      sectionName: "education",
      records: t,
      getSections: b,
      addSection: m.addEducationSection,
      getRules: async () => await (0, h.getEducationRules)(),
      getOperations: i.getEducationOperations,
      afterFillSection: async (e, t) => {
        await this.fillEducationEndDateAfterStart(e, t)
      },
      onSkipped: () => {
        r = !0
      }
    });
    let n = this.answer.workExperience || [],
      o = !1;
    await this.fillSequentialSectionRecords({
        sectionName: "experience",
        records: n,
        getSections: y,
        addSection: m.addEmploymentSection,
        getRules: async () => await (0, h.getExperienceRules)(),
        getOperations: i.getEmploymentOperations,
        beforeFillSection: async e => {
          let t = e.querySelector('input[name="is_current_employer"]');
          t?.checked && (t.click(), await (0, f.delay)(300))
        },
        afterFillSection: async (e, t) => {
          await this.fillExperienceEndDateAfterStart(e, t)
        },
        onSkipped: () => {
          o = !0
        }
      }), r ? this.progressTracker.updateMissedProgress("Education") : t.length > 0 && this
      .progressTracker.updateFilledProgress("Education"), o ? this.progressTracker
      .updateMissedProgress("Employment") : n.length > 0 && this.progressTracker
      .updateFilledProgress("Employment")
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, m.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, m.removeResume)(), await (0, m.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  async runPreFillForm() {
    this.taskQueue.add(m.preFillForm), await this.taskQueue.run()
  }
  getSubmitButtonSelector() {
    return p.APPLY_SUBMIT_BUTTON_XPATH
  }
  constructor(...e) {
    super(...e), this.lastFullAutofillSnapshot = {}, this.lastFullSubmitSnapshot = {}, this
      .careersSubmitTrackingAbortController = null, this.formatAnswer = e => (0, p.formatAnswer)
      (e)
  }
}

