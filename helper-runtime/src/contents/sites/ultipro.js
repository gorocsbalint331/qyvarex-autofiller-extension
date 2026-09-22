/**
 * Parcel module id: 5R3mN
 * Resolved path: src/contents/sites/ultipro.js
 * Dependencies:
 *   ./answer -> oH3tv  =>  src/contents/sites/ultipro/answer.js
 *   ./operations -> k21zl  =>  src/contents/sites/ultipro/operations.js
 *   ./rules -> e0jMO  =>  src/contents/sites/ultipro/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/section-results -> 6WWsC  =>  src/contents/methods/section-results.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Ultipro", () => h), n.export(r, "collectSavedEntryLabels",
() => g), n.export(r, "removeUltiproSavedEntriesOutsideFillV2", () => k);
var o = e("~contents/methods/section-results"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/sites/base-filler"),
  s = e("~core/enums"),
  u = e("~core/xpath"),
  c = e("~store/autofillInfo"),
  d = e("./answer"),
  f = e("./operations"),
  p = e("./rules");

function m(e) {
  return {
    ...e,
    School: e["School Name"] ?? e.School,
    Company: e["Company / Organization"] ?? e.Company
  }
}
class h extends l.BaseFiller {
  getFieldHandlers() {
    return {
      [s.FIELD_TYPE.TEXT]: (e, t) => {
        let r = t?.[0];
        return r ? (0, f.fillInputTextField)(e.$input, String(r ?? "")) : T(e)
      },
      [s.FIELD_TYPE.SELECT]: (e, t) => {
        let r = t?.[0];
        if (!r) return T(e);
        let n = e.$input;
        return "Country" === n.id && e.label?.trim().toLowerCase() === "country" ? (0, f
            .prefillUltiproCountry)(String(r ?? "")) : "State" === n.id &&
          /(?:state|province)/i.test(e.label ?? "") ? (0, f.fillUltiproStateProvinceField)(n,
            String(r ?? "")) : (0, f.fillSelectField)(n, String(r ?? ""))
      },
      [s.FIELD_TYPE.CHECKBOX]: (e, t) => (0, f.fillCheckboxField)(e, t),
      [s.FIELD_TYPE.MULTI_SELECT]: (e, t) => (0, f.fillMultiSelectField)(e, t),
      [s.FIELD_TYPE.DATE]: (e, t) => {
        let r = t?.[0];
        return r ? (0, f.fillDateField)(e.$input, String(r ?? "")) : T(e)
      }
    }
  }
  async extractFormRules() {
    let e = !1,
      t = await (0, p.extractRules)({
        beforeContactInformationExtraction: async () => {
          if (!(e = await (0, f.openUltiproContactInformationEditor)())) return;
          let t = (0, d.normalizeUltiproCountry)(this.currentRunCountry),
            r = !!t && this.preserveCommittedRegularFieldsForCurrentRun && Array.from(
              document.querySelectorAll("select#Country")).some(e => !(0, p.isElementHidden)
              (e) && (0, f.hasMeaningfulControlValue)(e));
          t && !r ? await (0, f.prefillUltiproCountry)(t) : t && r && console.info(
            "[Ultipro][RepeatFill] preserved committed Country")
        },
        afterQuestionExtraction: async () => {
          e && await (0, f.cancelUltiproContactInformationEditor)()
        }
      });
    return t.filter(e => !j(e))
  }
  getNewComboQuestionRules(e, t) {
    let r = super.getNewComboQuestionRules(e, t).filter(e => !I(e) || !T(e)),
      n = t.find(e => I(e) && !T(e));
    return !n || r.includes(n) ? r : (console.info(
      "[Ultipro][State / Province] queued for dynamic re-crawl", {
        optionCount: n.$input?.options?.length ?? 0
      }), [...r, n])
  }
  getSiteName() {
    return "ultipro"
  }
  async runPreFillForm() {
    this.currentRunCountry = "";
    let e = await (0, c.useAutofillInfoStore).getState().fetchAutofillInfo();
    this.currentRunCountry = e?.location?.country ?? "", this
      .preserveCommittedRegularFieldsForCurrentRun ? console.info(
        "[Ultipro][RepeatFill] skipped hidden contact prefill copy") : await (0, f
        .fillVisibleContactFieldsFromHiddenPrefill)()
  }
  async getAutofillSnapshot() {
    let e = await (0, p.getFormSnapshot)();
    return e
  }
  async getSubmitSnapshot() {
    return await (0, p.getFormSnapshot)()
  }
  getSubmitButtonSelector() {
    return '//*[@id="OpportunityApply"]//ukg-button[@data-automation="btn-submit"]'
  }
  submitApplication() {
    let e = '//*[@id="OpportunityApply"]//ukg-button[@data-automation="btn-submit"]',
      t = (0, u.getFirstOrderedNode)(e);
    t && t?.click()
  }
  async doFillForm(e = !1) {
    this.preserveCommittedRegularFieldsForCurrentRun = this.hasCompletedRegularFillRun,
      await this.initializeFillForm();
    let t = await this.extractFormRules(),
      r = this.getFillableRulesForCurrentRun(t);
    this.progressTracker.setFieldsRequiredStatus(r);
    let n = await this.fetchFormAnswers(r, e);
    if ("string" == typeof n) return n;
    this.answer = (0, d.formatAnswer)(this.answer, this.currentRunCountry);
    let o = t,
      i = !this.preserveCommittedRegularFieldsForCurrentRun && (0, f
        .hasSelectedUltiproResumeFile)() ? {
        initialSignature: (0, f.getUltiproResumeParserStateSignature)(),
        initialSavedRowsSignature: (0, f.getUltiproSavedExperienceRowsSignature)()
      } : null,
      l = null;
    this.preserveCommittedRegularFieldsForCurrentRun ? console.info(
      "[Ultipro][RepeatFill] skipped repeated resume upload") : !1 !== (l = await this
      .handleResumeUpload()) && (l = await (0, f.waitForUltiproResumeParsingToFinish)(null ===
      l && i ? i : {}));
    let s = this.preserveCommittedRegularFieldsForCurrentRun ? [] : await (0, f
      .fillVisibleContactFieldsFromHiddenPrefill)();
    s.length > 0 && await this.delay(800), t = await this.extractFormRules(), this
      .progressTracker.setFieldsRequiredStatus(this.getFillableRulesForCurrentRun(t));
    let u = this.getFillableRulesForCurrentRun(this.getNewComboQuestionRules(o, t));
    if (u.length > 0) try {
        await this.fetchAnswersForPostParseRules(u, e)
      } catch (e) {
        if (e instanceof a.CancelledError) throw e;
        console.error("[Ultipro] post-parse answer step failed:", e)
      }!1 !== l ? await this.fillEducationAndEmployment(t) : console.warn(
        "[Ultipro] skipped structured experience fill because resume parser was not ready"),
      await this.fillRegularFields(t), this.hasCompletedRegularFillRun = !0, console.info(
        "[Ultipro] starting post-fill dynamic rule re-crawl", {
          ruleCount: t.length
        });
    let c = await this.runComboQuestionAutofillIfNeeded(t, e);
    return "string" == typeof c ? c : (t = c, await this.executeSiteSpecificSteps(t), this
      .finalizeFillForm())
  }
  static {
    this.POST_PARSE_ANSWER_TIMEOUT_MS = 2e4
  }
  async fetchAnswersForPostParseRules(e, t) {
    let r;
    let n = e.map(e => e.label);
    console.log("[Ultipro] post-parse answer request:", n);
    let o = Symbol("timeout"),
      i = new Promise(e => {
        r = setTimeout(() => e(o), h.POST_PARSE_ANSWER_TIMEOUT_MS)
      }),
      a = this.requestFormAnswers(e, t, {
        updateTimeTrace: !1
      });
    a.catch(() => {});
    let l = await Promise.race([a, i]);
    r && clearTimeout(r), l && "object" == typeof l ? (console.log(
          "[Ultipro] post-parse answer response:", Object.keys(l.regular ?? {})), this
        .mergeComboQuestionAnswer(l, e)) : console.warn(
        "[Ultipro] post-parse answer request degraded:", l === o ? "timeout" : l ?? "empty"),
      this.applyPostParseStateFallback(e), this.answer = (0, d.formatAnswer)(this.answer, this
        .currentRunCountry)
  }
  applyPostParseStateFallback(e) {
    let t = "string" == typeof this.answer?.state ? this.answer.state.trim() : "";
    if (t)
      for (let r of e) {
        let e = r.label;
        if (!e) continue;
        let n = e.toLowerCase();
        (n.includes("state") || n.includes("province")) && (this.hasRegularAnswer(e) || (this
          .answer.regular = {
            ...this.answer.regular,
            [e]: t
          }))
      }
  }
  hasRegularAnswer(e) {
    try {
      return (0, i.findValueInRecord)(e, this.answer.regular), !0
    } catch {
      return !1
    }
  }
  async fillRegularFields(e) {
    this.applyPostParseStateFallback(e.filter(I));
    let t = e.filter(e => !e.__ultiproDialogSection && !j(e)),
      r = this.getFillableRulesForCurrentRun(t);
    this.preserveCommittedRegularFieldsForCurrentRun && console.info(
      "[Ultipro][RepeatFill] preserved committed regular fields", {
        candidateCount: t.length,
        skippedCount: t.length - r.length,
        fillCount: r.length
      }), await super.fillRegularFields(r)
  }
  async filterNewComboQuestionRules(e) {
    return this.getFillableRulesForCurrentRun(e)
  }
  getFillableRulesForCurrentRun(e) {
    return this.preserveCommittedRegularFieldsForCurrentRun ? e.filter(e => !F(e) || !T(e)) : e
  }
  async handleResumeUpload() {
    if (!(0, f.hasResumeUploadInput)()) return null;
    if (this.progressTracker.updateFieldRequiredStatus({
        label: "Resume/CV",
        required: !0
      }), this.disableUploadResume) return this.progressTracker.updateMissedProgress(
      "Resume/CV"), null;
    let e = null;
    return this.taskQueue.add(async () => {
      let t = await (0, f.uploadResume)(this.resumeInfo, this.progressTracker
        .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
      t || this.progressTracker.updateMissedProgress("Resume/CV"), e = t
    }), await this.taskQueue.run(), e
  }
  async fillEducationAndEmployment(e) {
    let t = e.find(e => e.type === s.FIELD_TYPE.EDUCATION),
      r = e.find(e => e.type === s.FIELD_TYPE.EMPLOYMENT);
    Array.isArray(this.answer.workExperience) && (r || 0 === this.answer.workExperience
      .length) && await this.fillEmploymentSection(r), Array.isArray(this.answer.education) && (
        t || 0 === this.answer.education.length) && await this.fillEducationSection(t)
  }
  async fillEmploymentSection(e) {
    let t = (0, p.getUltiproVisibleSection)("employment");
    if (!t) return;
    let r = e?.$input ?? null,
      n = this.answer.workExperience,
      a = (0, o.createSequentialSectionResultReporter)("employment", this.progressTracker,
        "Employment"),
      l = n.map(e => x(e)),
      s = await k(t, l, () => this.delay(100));
    if (console.info(
        `[Ultipro] reconciled Employment rows to fill-v2: targetCount=${n.length}; removedCount=${s.removed}; ready=${s.ready}`
        ), !s.ready) {
      console.warn(
        "[Ultipro] skipped Employment fill because parser rows could not be reconciled", {
          targetCount: n.length
        }), this.progressTracker.updateMissedProgress("Employment");
      return
    }
    let u = g(t),
      c = (0, p.isUltiproReviewCopyLayout)(t),
      d = c ? b(t) : [],
      f = 0 === u.length;
    for (let [e, o] of n.entries()) {
      let n = {
        type: "employment",
        index: e,
        reporter: a,
        focusLabels: []
      };
      if (this.progressTracker.updateSectionResult) {
        let t = (0, i.createSectionResultReporter)("employment", a.forRecord(e, []));
        t.ensureRow(0, m(o)), t.emit()
      }
      let s = x(o),
        p = S(d, s);
      if (p) {
        console.info("[Ultipro] filling retained Employment review editor", {
          remainingReviewEditors: d.length
        }), await this.fillEduOrExpFields(t, p, o, n), await this.saveEduOrExpEditor(t), v(n,
          p);
        continue
      }
      if (!c && u.includes(s)) {
        v(n, y(t, l, e));
        continue
      }
      let h = await this.openEduOrExpEditor(t, r, f);
      if (f = !1, !h) {
        a.markRecordMissed(e), console.warn(
            "[Ultipro] skipped Employment row because no individual editor was available"), this
          .progressTracker.updateMissedProgress("Employment");
        return
      }
      await this.fillEduOrExpFields(t, h, o, n), await this.saveEduOrExpEditor(t), v(n, c ? h :
        y(t, l, e)), u.push(s)
    }
    let h = b(t).length;
    if (h !== n.length) {
      console.warn("[Ultipro] Employment row count does not match fill-v2", {
        targetCount: n.length,
        finalCount: h
      }), this.progressTracker.updateMissedProgress("Employment");
      return
    }
    this.progressTracker.updateFilledProgress("Employment");
    let w = t.querySelector('button[data-automation="cancel-button"]');
    w?.click(), await this.delay(300)
  }
  async fillEducationSection(e) {
    let t = (0, p.getUltiproVisibleSection)("education");
    if (!t) return;
    let r = e?.$input ?? null,
      n = this.answer.education,
      a = (0, o.createSequentialSectionResultReporter)("education", this.progressTracker,
        "Education"),
      l = n.map(e => C(e)),
      s = await k(t, l, () => this.delay(100));
    if (console.log("[Ultipro] reconciled Education rows to fill-v2", {
        targetCount: n.length,
        removedCount: s.removed,
        ready: s.ready
      }), !s.ready) {
      console.warn(
        "[Ultipro] skipped Education fill because parser rows could not be reconciled", {
          targetCount: n.length
        }), this.progressTracker.updateMissedProgress("Education");
      return
    }
    let u = g(t),
      c = (0, p.isUltiproReviewCopyLayout)(t),
      d = c ? b(t) : [],
      f = 0 === u.length;
    for (let [e, o] of n.entries()) {
      let n = {
        type: "education",
        index: e,
        reporter: a,
        focusLabels: []
      };
      if (this.progressTracker.updateSectionResult) {
        let t = (0, i.createSectionResultReporter)("education", a.forRecord(e, []));
        t.ensureRow(0, m(o)), t.emit()
      }
      let s = C(o),
        p = S(d, s);
      if (p) {
        console.info("[Ultipro] filling retained Education review editor", {
          remainingReviewEditors: d.length
        }), await this.fillEduOrExpFields(t, p, o, n), await this.saveEduOrExpEditor(t), v(n,
          p);
        continue
      }
      if (!c && s && u.includes(s)) {
        v(n, y(t, l, e));
        continue
      }
      let h = await this.openEduOrExpEditor(t, r, f);
      if (f = !1, !h) {
        a.markRecordMissed(e), console.warn(
            "[Ultipro] skipped Education row because no individual editor was available"), this
          .progressTracker.updateMissedProgress("Education");
        return
      }
      await this.fillEduOrExpFields(t, h, o, n), await this.saveEduOrExpEditor(t), v(n, c ? h :
        y(t, l, e)), u.push(s)
    }
    let h = b(t).length;
    if (h !== n.length) {
      console.warn("[Ultipro] Education row count does not match fill-v2", {
        targetCount: n.length,
        finalCount: h
      }), this.progressTracker.updateMissedProgress("Education");
      return
    }
    this.progressTracker.updateFilledProgress("Education");
    let w = t.querySelector('button[data-automation="cancel-button"]');
    w?.click(), await this.delay(300)
  }
  async openEduOrExpEditor(e, t, r) {
    let n = (0, p.getUltiproSectionEditors)(e),
      o = (0, p.isUltiproReviewCopyLayout)(e);
    if (o && r) {
      let t = (0, p.getUltiproSectionEditor)(e);
      if (console.info("[Ultipro] selected existing structured editor", {
          editorCount: n.length,
          selected: !!t
        }), t) return t;
      console.info("[Ultipro] no reusable review editor; adding structured row", {
        editorCount: n.length
      })
    }
    let i = e.querySelector("button[data-automation='primary-action-button']") ?? t;
    if (!i) return null;
    i.click();
    let a = Date.now() + 3e3;
    for (; Date.now() < a;) {
      let t = (0, p.getUltiproSectionEditor)(e, n);
      if (t) return console.info("[Ultipro] selected newly added structured editor", {
        editorCountBefore: n.length,
        editorCountAfter: (0, p.getUltiproSectionEditors)(e).length
      }), t;
      await this.delay(50)
    }
    return console.warn("[Ultipro] no individual editor appeared after Add", {
      editorCountBefore: n.length
    }), null
  }
  async saveEduOrExpEditor(e) {
    let t = e.querySelector('button[data-automation="save-button"]');
    t && (t.click(), await this.delay(2200))
  }
  async fillEduOrExpFields(e, t, r, n) {
    let o = t.querySelectorAll("div.form-group"),
      l = Array.from(o).filter(e => !e.querySelector("div.form-group")),
      u = (0, p.isUltiproReviewCopyLayout)(e),
      c = u ? (0, p.getUltiproSectionEditors)(e) : [];
    console.info(
      `[Ultipro] filling structured editor: reviewCopy=${u}; editorIndex=${c.indexOf(t)}; editorCount=${c.length}; fieldCount=${l.length}`
      );
    let h = [],
      g = n && this.progressTracker.updateSectionResult ? (0, i.createSectionResultReporter)(n
        .type, n.reporter.forRecord(n.index, [{
          label: n.type,
          children: h
        }])) : void 0,
      b = g?.ensureRow(0, m(r));
    for (let e of (g?.emit(), l)) {
      let t;
      let o = this.extractRuleFromGroup(e);
      if (!o) continue;
      h.push(o), n?.focusLabels.push(o.label);
      let i = (0, d.getValueForEduExpField)(o.label, r, {
        $input: o.$input
      });
      try {
        if (o.type === s.FIELD_TYPE.SELECT) {
          let e = o.$input;
          e?.tagName === "INPUT" && "combobox" === e.getAttribute("role") ? (t = await (0, f
            .fillUltiproTypeaheadField)(e, i), await this.delay(50)) : (t = await (0, f
            .fillSelectField)(o.$input, i), await this.delay(200))
        } else o.type === s.FIELD_TYPE.TEXT && (t = await (0, f.fillInputTextField)(o.$input,
          i), await this.delay(50));
        b && g?.updateField(b, o.label, i || void 0, !0 === t && i ? "filled" : "missed")
      } catch (e) {
        throw b && g?.updateField(b, o.label, i || void 0, a.SkippedError && e instanceof a
          .SkippedError ? "skipped" : "missed"), e
      } finally {
        g?.emit()
      }
    }
  }
  extractRuleFromGroup(e) {
    return (0, p.extractExpAndEduRuleFromElement)(e)
  }
  async executeSiteSpecificSteps(e) {
    let t = D(this.answer.skills);
    t.length > 0 && (console.info("[Ultipro][Skills] selected answer source", {
      source: "profile_data",
      profileSkillCount: t.length
    }), this.taskQueue.add(() => (0, f.fillSkills)(t, this.progressTracker
      .updateFilledProgress)));
    let r = e.find(e => "Behaviors" === e.label && e.type === s.FIELD_TYPE.MULTI_SELECT);
    r && this.answer.regular.Behaviors && this.taskQueue.add(async () => {
      await (0, f.fillBehaviorsAndMotivations)(r, this.answer.regular.Behaviors), this
        .progressTracker.updateFilledProgress("Behaviors")
    });
    let n = e.find(e => "Motivations" === e.label && e.type === s.FIELD_TYPE.MULTI_SELECT);
    n && this.answer.regular.Motivations && this.taskQueue.add(async () => {
      await (0, f.fillBehaviorsAndMotivations)(n, this.answer.regular.Motivations), this
        .progressTracker.updateFilledProgress("Motivations")
    });
    let o = e.filter(e => "certifications" === e.__ultiproDialogSection);
    o.length > 0 && this.taskQueue.add(() => (0, f.fillCertifications)(o, this.answer.regular,
      this.progressTracker.updateFilledProgress, this.progressTracker.updateMissedProgress));
    let i = e.filter(e => "links" === e.__ultiproDialogSection);
    i.length > 0 && this.taskQueue.add(() => (0, f.fillLicenses)(i, this.answer.regular, this
        .progressTracker.updateFilledProgress, this.progressTracker.updateMissedProgress)), this
      .answer.regular.Race && this.taskQueue.add(() => (0, f.fillRace)(this.answer.regular
        .Race)), await this.taskQueue.run(), await this.bindSubmitButtonTracking(e)
  }
  async delay(e) {
    return new Promise(t => setTimeout(t, e))
  }
  constructor(...e) {
    super(...e), this.hasComboQuestions = !0, this.currentRunCountry = "", this
      .hasCompletedRegularFillRun = !1, this.preserveCommittedRegularFieldsForCurrentRun = !1
  }
}

function g(e) {
  return b(e).map(w).filter(e => !!e)
}

function b(e) {
  let t = e.querySelector("ul.listtype");
  if (!t) {
    let t = Array.from(e.querySelectorAll(
      "[data-automation='work-experience-item'], [data-automation='education-panel'], [data-automation='panel-list-item']"
      ));
    return Array.from(new Set(t.map(e => e.closest("[data-automation='panel-list-item']") ?? e)))
  }
  return Array.from(t.querySelectorAll("li.row, li[data-automation='panel-list-item']"))
}

function y(e, t, r) {
  let n = t[r] ?? "",
    o = t.slice(0, r).filter(e => e === n).length,
    i = b(e);
  return n ? i.filter(e => w(e) === n)[o] ?? null : i[r] ?? null
}

function v(e, t) {
  if (!t) {
    e.reporter.clearRecordFocus(e.index), console.debug(
      "[Ultipro][section-focus] stable row unavailable", {
        type: e.type,
        index: e.index
      });
    return
  }
  let r = Array.from(new Set(e.focusLabels)).map(e => ({
    label: e,
    required: !1,
    type: s.FIELD_TYPE.TEXT,
    $input: t,
    $label: t
  }));
  e.reporter.setRecordFocus(e.index, {
    label: e.type,
    required: !1,
    type: "education" === e.type ? s.FIELD_TYPE.EDUCATION : s.FIELD_TYPE.EMPLOYMENT,
    $input: t,
    children: r,
    options: []
  }), console.debug("[Ultipro][section-focus] stable row registered", {
    type: e.type,
    index: e.index,
    fieldCount: r.length
  })
}

function w(e) {
  let t = e.querySelector("strong")?.textContent;
  if (t) return A(t);
  let r = new Map;
  for (let t of Array.from(e.querySelectorAll("div.form-group"))) {
    let e = (t.querySelector("label")?.textContent ?? "").replace(/\*/g, "").trim().toLowerCase();
    if (!e) continue;
    let n = t.querySelector("input, textarea, select"),
      o = n?.value?.trim() ?? "";
    r.set(e, o)
  }
  let n = r.get("job title") ?? "",
    o = r.get("company / organization") ?? "";
  return n || o ? A([n, o].filter(Boolean).join(", ")) : A(r.get("school name") ?? "")
}

function S(e, t) {
  let r = e.findIndex(e => w(e) === t);
  return r < 0 ? null : e.splice(r, 1)[0] ?? null
}

function E(e) {
  let t = Array.isArray(e) ? e[0] : e;
  return t?.toString().trim().toLowerCase() ?? ""
}

function x(e) {
  return A([E(e["Job Title"]), E(e["Company / Organization"])].join(", "))
}

function C(e) {
  return A(E(e["School Name"]))
}

function A(e) {
  let t = e.trim().toLowerCase().replace(/\s+/g, " ").replace(/\s*,\s*/g, ", ");
  return t.replace(/[,\s]/g, "") ? t : ""
}
async function k(e, t, r = () => new Promise(e => setTimeout(e, 300))) {
  let n = t.map(A).filter(Boolean),
    o = 0;
  console.info("[Ultipro] reconciling parser rows", {
    targetCount: n.length,
    currentRowCount: b(e).length
  });
  for (let t = 0; t < 100; t += 1) {
    let t = new Map;
    for (let e of n) t.set(e, (t.get(e) ?? 0) + 1);
    let i = b(e),
      a = [];
    for (let e of i) {
      let r = w(e),
        n = t.get(r) ?? 0;
      r && n > 0 ? t.set(r, n - 1) : a.push(e)
    }
    if (0 === a.length) return {
      removed: o,
      ready: !0
    };
    let l = a[a.length - 1],
      s = l.querySelector(
        "button[data-automation='remove-button'], button[data-automation='delete-button']");
    if (!s || s.disabled) break;
    let u = i.length;
    s.click();
    let c = Date.now() + 3e3;
    for (; b(e).length >= u && Date.now() < c;) await r();
    if (b(e).length >= u) break;
    o += 1
  }
  return {
    removed: o,
    ready: !1
  }
}

function T(e) {
  if (e.type === s.FIELD_TYPE.CHECKBOX) {
    let t = Array.isArray(e.$checkboxs) ? e.$checkboxs : [];
    if (t.length > 0) return t.some(e => e.checked);
    let r = e.$input;
    return r?.checked === !0
  }
  let t = e.$input;
  if (!t) return !1;
  if (e.type === s.FIELD_TYPE.DATE && "UKG-DATE-INPUT-TEXT" === t.tagName) {
    let e = ["Month", "Day", "Year"].map(e => t.querySelector(`input[aria-label="${e}"]`)?.value);
    return e.every(e => !!e?.trim())
  }
  return (0, f.hasMeaningfulControlValue)(t)
}

function F(e) {
  return !(e.__ultiproDialogSection || j(e)) && (e.type === s.FIELD_TYPE.TEXT || e.type === s
    .FIELD_TYPE.SELECT || e.type === s.FIELD_TYPE.CHECKBOX || e.type === s.FIELD_TYPE.DATE)
}

function I(e) {
  let t = e.$input;
  return e.type === s.FIELD_TYPE.SELECT && t?.id === "State" && /(?:state|province)/i.test(e
    .label ?? "")
}

function j(e) {
  return e.type === s.FIELD_TYPE.TEXT && e.label?.trim().toLowerCase() === "skills"
}

function D(e) {
  return Array.isArray(e) ? e.map(e => String(e ?? "").trim()).filter(e => e.length > 0) : []
}

