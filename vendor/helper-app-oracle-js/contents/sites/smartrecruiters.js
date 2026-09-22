/**
 * Parcel module id: 4pApn
 * Resolved path: contents/sites/smartrecruiters.js (oracle restore)
 * Dependencies:
 *   ../option-resolve-rollout -> kwH9q  =>  _dotdot_/_dotdot_/option-resolve-rollout.js
 *   ./answer -> ahzUi  =>  src/contents/sites/smartrecruiters/answer.js
 *   ./education-operation -> 7CJrO  =>  src/contents/sites/smartrecruiters/education-operation.js
 *   ./location-operation -> 8eiSq  =>  src/contents/sites/smartrecruiters/location-operation.js
 *   ./operations -> lpr2d  =>  src/contents/sites/smartrecruiters/operations.js
 *   ./rules -> fGyHE  =>  src/contents/sites/smartrecruiters/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~utils/fieldLabel -> 1RmGw  =>  _tilde_utils/fieldLabel.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "SmartRecruiters", () => W);
var o = e("@plasmohq/messaging"),
  i = e("~contents/sites/base-filler"),
  a = e("~core/enums"),
  l = e("~core/dom"),
  s = e("~core/xpath"),
  u = e("~utils/fieldLabel"),
  c = e("./operations"),
  d = e("./rules"),
  f = e("~contents/methods/answer"),
  p = e("./answer"),
  m = e("./location-operation"),
  h = e("./education-operation"),
  g = e("../option-resolve-rollout");
let b =
  /^(?:continue(?:\s+to\s+the\s+next\s+page|\s+application)?|next|submit(?:\s+application)?|apply(?:\s+now)?|review\s+and\s+submit|finish)$/i;

function y(e) {
  return (e.textContent || e.getAttribute("aria-label") || e.getAttribute("title") || "").replace(
    /\s+/g, " ").trim()
}

function v(e) {
  return e instanceof HTMLButtonElement && e.disabled || "true" === e.getAttribute("aria-disabled")
}
let w = {
  requestStep: async e => await (0, o.sendToBackground)({
    name: "resolveAutofillClientSearchStep",
    body: e
  }),
  captureCandidates: c.captureSmartRecruitersInstitutionCandidates,
  commitCandidate: (e, t, r) => (0, c.fillSmartRecruitersInstitutionCandidate)(e, t, r)
};

function S(e, t) {
  let r = (0, u.normalizeFieldLabel)(t),
    n = e?.regular || {};
  for (let [e, t] of Object.entries(n))
    if ((0, u.normalizeFieldLabel)(e) === r) return t;
  let o = Array.isArray(e?.fillDataList) ? e.fillDataList : [];
  for (let e of o)
    if ((0, u.normalizeFieldLabel)(e?.name) === r) return e.value
}

function E(e) {
  return (0, u.normalizeFieldLabel)(e) === (0, u.normalizeFieldLabel)(d
    .SMARTRECRUITERS_PHONE_COUNTRY_CODE_LABEL)
}

function x(e, t) {
  return E(e.label) ? (0, d.normalizeSmartRecruitersPhoneCountryText)(t) : t
}

function C(e, t) {
  let r = {};
  for (let n of e) {
    if (n.type === a.FIELD_TYPE.EDUCATION || n.type === a.FIELD_TYPE.EMPLOYMENT) continue;
    let e = S(t, n.label);
    void 0 !== e && (r[n.label] = x(n, e))
  }
  return r
}

function A(e, t) {
  let r = (0, p.normalizeSmartRecruitersDateRecordForRule)(e, t),
    n = (0, u.normalizeFieldLabel)(t);
  for (let [e, t] of Object.entries(r))
    if ((0, u.normalizeFieldLabel)(e) === n) return t
}

function k(e, t) {
  let r = e[0];
  return t.map((t, n) => {
    let o = e[n] || r,
      i = o?.children || [],
      a = {};
    for (let e of i) {
      let r = A(t, e.label);
      void 0 !== r && (a[e.label] = r)
    }
    return a
  })
}

function T(e) {
  return e && (e.textContent?.replace?.(/\s+/g, " ")?.trim?.() || e.getAttribute?.("label")?.trim?.
  () || e.getAttribute?.("value")?.trim?.()) || ""
}

function F(e) {
  let t = Array.from(e.querySelectorAll?.("spl-select-option") || []),
    r = Array.from(e.shadowRoot?.querySelectorAll?.("spl-select-option") || []);
  return [...t, ...r]
}

function I(e) {
  let t = e.getAttribute?.("value")?.trim?.() || ("string" == typeof e.value ? e.value.trim() : ""),
    r = F(e);
  if (t) {
    let e = r.find(e => e.getAttribute?.("value") === t),
      n = T(e || null);
    if (n) return n
  }
  let n = e.querySelector?.('[aria-selected="true"], spl-select-option[selected]'),
    o = T(n);
  if (o) return o;
  let i = e.shadowRoot?.querySelector?.('[aria-selected="true"], spl-select-option[selected]'),
    a = T(i);
  if (a) return a;
  let l = e.shadowRoot?.querySelector?.("button");
  return l?.textContent?.trim() ? l.textContent.trim() : t || e.textContent?.trim?.() || ""
}

function j(e) {
  if (!e) return "";
  if (e.tagName?.toLowerCase?.() === "spl-select") return I(e);
  if (void 0 !== e.value) return e.value;
  let t = e.shadowRoot?.querySelector?.("input, textarea");
  if (t && void 0 !== t.value) return t.value;
  let r = e.querySelector?.('[aria-selected="true"], spl-select-option[selected]');
  if (r?.textContent?.trim()) return r.textContent.trim();
  let n = e.shadowRoot?.querySelector?.('[aria-selected="true"], spl-select-option[selected]');
  if (n?.textContent?.trim()) return n.textContent.trim();
  let o = e.shadowRoot?.querySelector?.("button");
  return o?.textContent?.trim() ? o.textContent.trim() : e.textContent?.trim?.() || ""
}

function D(e) {
  return String(e ?? "").replace(/\s+/g, " ").replace(/\s*\u00d7\s*$/, "").trim()
}

function P(e) {
  if (!e?.querySelectorAll) return [];
  let t = ["spl-tag", '[class*="tag"]', '[class*="chip"]', '[class*="pill"]',
      '[class*="selected-value"]', '[class*="selected-option"]'
    ],
    r = [];
  for (let n of t) {
    let t = Array.from(e.querySelectorAll(n) || []);
    for (let e of t) {
      let t = D(e.textContent);
      t && !r.includes(t) && r.push(t)
    }
  }
  return r
}

function _(e) {
  let t = e?.closest?.('div[class*="c-spl-multiselect-autocomplete-trigger"]'),
    r = e?.closest?.("spl-multiselect-autocomplete"),
    n = [t, t?.shadowRoot, r, r?.shadowRoot].filter(Boolean);
  for (let e of n) {
    let t = P(e);
    if (t.length > 0) return t.join(", ")
  }
  return D(j(e))
}

function L(e) {
  let t = e.$checkboxs || [];
  return t.some(e => e.checked) ? "Yes" : "No"
}

function R(e) {
  let t = e.$radioParent,
    r = Array.from(t?.querySelectorAll?.("spl-radio") || []);
  for (let e of r) {
    let t = e.shadowRoot?.querySelector('input[type="radio"]');
    if (!t?.checked) continue;
    let r = e.shadowRoot?.querySelector('span[class*="c-spl-form-field-label-wrapper"]');
    return r?.textContent?.trim() || t.value || ""
  }
  return ""
}

function O(e) {
  let t;
  return t = e.type === a.FIELD_TYPE.CHECKBOX ? L(e) : e.type === a.FIELD_TYPE.RADIOGROUP ? R(e) : e
    .type === a.FIELD_TYPE.MULTI_SELECT ? _(e.$input) : j(e.$input), x(e, t)
}

function M(e) {
  let t = {};
  for (let r of e) r.type !== a.FIELD_TYPE.EDUCATION && r.type !== a.FIELD_TYPE.EMPLOYMENT && (t[r
    .label] = O(r));
  return t
}

function N(e) {
  return e.map(e => M(e.children || []))
}

function $(e) {
  try {
    return (0, d.processEduOrWorkExpAnwser)(e) || []
  } catch {
    return []
  }
}

function B(e) {
  return Object.values(e).some(e => String(e ?? "").trim())
}

function q(e) {
  return String(e ?? "").replace(/\s+/g, " ").trim().toLowerCase()
}

function U(e) {
  if ("undefined" == typeof document) return [];
  let t = e ? "oc-experience" : "oc-education",
    r = e ? "oc-experience-entry" : "oc-education-entry",
    n = Array.from(document.querySelector(t)?.querySelectorAll(r) || []);
  return n.map(e => q(e.textContent)).filter(Boolean)
}

function H(e, t, r) {
  let n = r ? ["Title", "Company", "Office location"] : ["Institution", "Major", "Degree"];
  return n.reduce((r, n) => {
    let o = q(e[n]);
    return o && t.includes(o) ? r + 1 : r
  }, 0)
}

function Y(e, t) {
  let r = U(t);
  if (0 === r.length) return [];
  let n = new Set;
  return r.map((r, o) => {
    let i = -1,
      a = 0;
    if (e.forEach((e, o) => {
        if (n.has(o)) return;
        let l = H(e, r, t);
        l > a && (a = l, i = o)
      }), i >= 0) return n.add(i), e[i];
    let l = e[o];
    if (l) return n.add(o), l
  }).filter(Boolean)
}

function z(e, t) {
  let r = $(e),
    n = N(r);
  if (n.some(B)) {
    let t = Y(n, e);
    return t.length > 0 ? t : n
  }
  return Y(N(t), e).filter(B)
}

function V(e, t, r) {
  let n = k(t, r),
    o = Y(n, e);
  return o.length > 0 ? o : n
}
class W extends i.BaseFiller {
  isSmartRecruitersInstitutionResolveEnabled() {
    return g.V119_OPTION_RESOLVE_ROLLOUT.smartRecruitersEducationInstitution
  }
  getFieldHandlers() {
    return {
      [a.FIELD_TYPE.TEXT]: async (e, t) => {
        let r = t?.[0];
        if ((0, m.isSmartRecruitersCityAutocompleteRule)(e)) return this
          .fillSmartRecruitersCity(e, String(r ?? ""));
        if (this.isSmartRecruitersInstitutionResolveEnabled() && (0, h
            .isSmartRecruitersInstitutionRule)(e)) try {
          let t = await (0, h.resolveSmartRecruitersInstitutionClientSearch)(e.$input,
            String(r ?? ""), w);
          return t.success || (this.educationInstitutionFailed = !0, console.warn(
            "[SmartRecruiters][Institution] client-search-failed", {
              reason: t.failureReason || "unknown-error",
              roundCount: t.rounds.length
            }), await this.markSmartRecruitersEducationInstitutionFailed(e.$input, {
            error: Error("client-search-failed"),
            stage: "commit"
          })), t.success
        } catch (t) {
          return await this.markSmartRecruitersEducationInstitutionFailed(e.$input, {
            error: t,
            stage: "commit"
          }), !1
        }
        if (r) return (0, c.fillInputTextField)(e.$input, String(r ?? ""))
      },
      [a.FIELD_TYPE.SELECT]: async (e, t) => (0, m.isSmartRecruitersCityAutocompleteRule)(e) ?
        this.fillSmartRecruitersCity(e, String(t?.[0] ?? "")) : (0, c.fillSelectField)(e, t),
      [a.FIELD_TYPE.CHECKBOX]: (e, t) => (0, c.fillCheckboxField)(e, t),
      [a.FIELD_TYPE.RADIOGROUP]: (e, t) => (0, c.fillRadioGroupFiled)(e, t),
      [a.FIELD_TYPE.MULTI_SELECT]: (e, t) => (0, c.fillMultiSelectField)(e, t)
    }
  }
  async fillSmartRecruitersCity(e, t) {
    let r = e.$input;
    if (this.deferredSmartRecruitersCityValues.has(r)) {
      let e = this.deferredSmartRecruitersCityValues.get(r);
      return this.deferredSmartRecruitersCityValues.delete(r), console.info(
        "[SmartRecruiters][City] commit-resumed", {
          hasResolvedCity: !!e
        }), this.commitSmartRecruitersCity(r, e ?? "")
    }
    let n = await this.resolveSmartRecruitersCity(r, t);
    return this.commitSmartRecruitersCity(r, n)
  }
  async resolveSmartRecruitersCity(e, t, r) {
    let n = (0, m.getSmartRecruitersCityOriginalAnswer)(this.answer, t),
      i = Date.now();
    if (void 0 === r && (e.setAttribute("data-jr-smartrecruiters-city-resolve-stage",
        "started"), console.info("[SmartRecruiters][City] resolve-start", {
          answerSource: n.source,
          hasOriginalAnswer: !!n.value
        })), !n.value) return null;
    try {
      let t = void 0 === r ? await (0, c.captureSmartRecruitersCityRequest)(e, n.value) : r;
      if (!t) return console.warn("[SmartRecruiters][City] resolve-skipped", {
          reason: "autocomplete-request-not-captured"
        }), e.setAttribute("data-jr-smartrecruiters-city-resolve-stage", "request-missing"),
        null;
      let a = (0, m.buildSmartRecruitersCityOperation)({
          requestUrl: t,
          originalAnswer: n.value
        }),
        l = await (0, o.sendToBackground)({
          name: "resolveAutofillOperation",
          body: {
            operation: a,
            source: "smartrecruiters"
          }
        }),
        s = (0, m.getSmartRecruitersResolvedCityValue)(l);
      return console.info("[SmartRecruiters][City] resolve-result", {
        action: l?.result?.action ?? "missing",
        selectedCount: l?.result?.selected_values?.length ?? 0,
        elapsedMs: Date.now() - i
      }), s || null
    } catch (t) {
      return e.setAttribute("data-jr-smartrecruiters-city-resolve-stage", "failed"), console
        .warn("[SmartRecruiters][City] resolve-failed", {
          reason: t instanceof Error ? t.message : "unknown-error",
          elapsedMs: Date.now() - i
        }), null
    }
  }
  async commitSmartRecruitersCity(e, t) {
    if (!t) {
      let t = "failed" === e.getAttribute("data-jr-smartrecruiters-city-resolve-stage");
      return await (0, c.clearSmartRecruitersCityField)(e), e.setAttribute(
        "data-jr-smartrecruiters-city-resolve-stage", t ? "failed" : "empty-result"), !1
    }
    let r = await (0, c.fillResolvedSmartRecruitersCityField)(e, t);
    return e.setAttribute("data-jr-smartrecruiters-city-resolve-stage", r ? "committed" :
      "commit-failed"), r
  }
  async fillRegularFields(e) {
    this.deferredSmartRecruitersCityValues.clear();
    let t = e.filter(m.isSmartRecruitersCityAutocompleteRule);
    if (1 !== t.length) {
      await super.fillRegularFields(e);
      return
    }
    let [r] = t, n = r.$input, o = String((0, f.findValueInRecord)(r.label, this.answer
        .regular) ?? ""), i = e.filter(e => !(0, m.isSmartRecruitersCityAutocompleteRule)(e)),
      a = (0, m.getSmartRecruitersCityOriginalAnswer)(this.answer, o), l = Date.now(), s = null;
    if (a.value) {
      n.setAttribute("data-jr-smartrecruiters-city-resolve-stage", "started"), console.info(
        "[SmartRecruiters][City] resolve-start", {
          answerSource: a.source,
          hasOriginalAnswer: !0
        });
      try {
        s = await (0, c.captureSmartRecruitersCityRequest)(n, a.value, 2)
      } catch (e) {
        n.setAttribute("data-jr-smartrecruiters-city-resolve-stage", "failed"), console.warn(
          "[SmartRecruiters][City] resolve-failed", {
            reason: e instanceof Error ? e.message : "unknown-error",
            elapsedMs: Date.now() - l
          })
      }
    }
    console.info("[SmartRecruiters][City] resolve-deferred", {
      immediateRuleCount: i.length,
      hasCapturedRequest: !!s
    }), await (0, m.runDeferredSmartRecruitersCityResolution)({
      startResolve: () => s ? this.resolveSmartRecruitersCity(n, o, s) : Promise.resolve(
        null),
      fillOtherFields: async () => {
        for (let e of (0, f.getRegularOperations)(i, this.answer.regular, this
            .operationConfig)) this.taskQueue.add(e);
        await this.taskQueue.run()
      },
      commitResolvedCity: async e => {
        for (let t of (this.deferredSmartRecruitersCityValues.set(n, e), console.info(
            "[SmartRecruiters][City] resolve-ready", {
              hasResolvedCity: !!e,
              elapsedMs: Date.now() - l
            }), (0, f.getRegularOperations)([r], this.answer.regular, this
            .operationConfig))) this.taskQueue.add(t);
        await this.taskQueue.run()
      }
    })
  }
  async markSmartRecruitersEducationInstitutionFailed(e, t) {
    this.educationInstitutionFailed = !0, t && console.warn(
      `[SmartRecruiters][Institution] ${t.stage}-failed`, {
        reason: t.error instanceof Error ? t.error.name : "unknown-error"
      });
    try {
      await (0, c.clearSmartRecruitersInstitutionField)(e)
    } catch (e) {
      console.warn("[SmartRecruiters][Institution] cleanup-failed", {
        reason: e instanceof Error ? e.name : "unknown-error"
      })
    }
  }
  async transformSmartRecruitersEducationRecordByRule(e, t) {
    let r = (0, p.normalizeSmartRecruitersDateRecordForRule)(t, e.label);
    if (!(0, h.isSmartRecruitersInstitutionRule)(e)) return r;
    let n = e.$input,
      o = (0, h.getSmartRecruitersInstitutionOriginalAnswer)(r);
    return o ? {
      ...r,
      [e.label]: o
    } : (await this.markSmartRecruitersEducationInstitutionFailed(n), {
      ...r,
      [e.label]: ""
    })
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules();
    this.progressTracker.setFieldsRequiredStatus(t), await this.handleResumeUpload();
    let r = await this.fetchFormAnswers(t, e);
    if ("string" == typeof r) return r;
    this.answer = (0, p.formatAnswer)(this.answer, t), await this.fillRegularFields(t);
    let n = await this.runComboQuestionAutofillIfNeeded(t, e);
    return "string" == typeof n ? n : (t = n, await this.executeSiteSpecificSteps(t), this
      .finalizeFillForm())
  }
  async executeSiteSpecificSteps(e) {
    if (this.trackingEducationRules = [], this.trackingEmploymentRules = [], await (0, c
        .clickAddButton)(!0, this.answer.workExperience?.length - 1 || 0), await (0, c
        .clickAddButton)(!1, this.answer.education?.length - 1 || 0), this.answer.workExperience
      .length > 0) {
      let e = (0, d.processEduOrWorkExpAnwser)(!0);
      this.trackingEmploymentRules = e || [], (0, l.setSectionResultFocusRules)("employment",
        e || []);
      let t = (0, f.getEmploymentOperations)(e, this.answer.workExperience, this
          .operationConfig, G, {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onCompleted: () => this.progressTracker.updateFilledProgress("Employment"),
            onSkipped: () => this.progressTracker.updateMissedProgress("Employment")
          }),
        r = [...t];
      for (let e of r) this.taskQueue.add(e);
      await this.taskQueue.run(), await (0, c.clickSaveButton)(!0);
      let n = (0, d.getSavedSmartRecruitersSectionFocusRules)(!0, e);
      n ? (this.trackingEmploymentRules = n, (0, l.setSectionResultFocusRules)("employment",
        n)) : console.debug(
          "[Autofill][smartrecruiters-section-focus] saved targets unavailable", {
            type: "employment",
            expectedRecords: e.length
          })
    }
    if (this.answer.education.length > 0) {
      this.educationInstitutionFailed = !1;
      let e = (0, d.processEduOrWorkExpAnwser)(!1);
      this.trackingEducationRules = e || [], (0, l.setSectionResultFocusRules)("education", e ||
        []);
      let t = (0, f.getEducationOperations)(e, this.answer.education, this.operationConfig, (e,
            t) => this.isSmartRecruitersInstitutionResolveEnabled() ? this
          .transformSmartRecruitersEducationRecordByRule(e, t) : (0, p
            .normalizeSmartRecruitersDateRecordForRule)(t, e.label), {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onCompleted: () => {
              if (this.educationInstitutionFailed) {
                this.progressTracker.updateMissedProgress("Education");
                return
              }
              this.progressTracker.updateFilledProgress("Education")
            },
            onSkipped: () => this.progressTracker.updateMissedProgress("Education")
          }),
        r = [...t];
      for (let e of r) this.taskQueue.add(e);
      if (await this.taskQueue.run(), !this.educationInstitutionFailed) {
        await (0, c.clickSaveButton)(!1);
        let t = (0, d.getSavedSmartRecruitersSectionFocusRules)(!1, e);
        t ? (this.trackingEducationRules = t, (0, l.setSectionResultFocusRules)("education",
          t)) : console.debug(
            "[Autofill][smartrecruiters-section-focus] saved targets unavailable", {
              type: "education",
              expectedRecords: e.length
            })
      }
    }
    await this.bindSubmitButtonTracking(e)
  }
  async runPreFillForm() {
    this.taskQueue.add(c.preFillForm), await this.taskQueue.run()
  }
  async extractFormRules() {
    return await (0, d.extractRules)()
  }
  getSiteName() {
    return "smartrecruiters"
  }
  async handleResumeUpload() {
    this.disableUploadResume ? (await (0, c.removeResume)(), this.progressTracker
      .updateMissedProgress("Resume/CV")) : this.taskQueue.add(async () => {
      await (0, c.removeResume)(), await (0, c.uploadResume)(this.resumeInfo, this
        .progressTracker.updateFieldRequiredStatus, this.progressTracker
        .updateFilledProgress)
    }), await this.taskQueue.run()
  }
  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(@class, "submit") or normalize-space(.)="Submit" or normalize-space(.)="Next" or normalize-space(.)="Continue" or normalize-space(.)="Continue To The Next Page"]'
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    let t = e.closest("button");
    if (t instanceof HTMLButtonElement) {
      if (v(t)) return null;
      let e = y(t);
      return b.test(e) ? t : null
    }
    let r = e.closest("spl-button");
    if (!r || v(r)) return null;
    let n = y(r);
    if (!b.test(n)) return null;
    let o = r.shadowRoot?.querySelector("button");
    return o instanceof HTMLButtonElement ? v(o) ? null : o : r
  }
  async getAutofillSnapshot(e) {
    this.trackingRules = e;
    let t = M(e);
    return B(t) ? t : C(e, this.answer)
  }
  async getSubmitSnapshot() {
    return this.trackingRules.length > 0 ? M(this.trackingRules) : await (0, d.getFormSnapshot)
    ()
  }
  getAdditionalAutofillSnapshotData() {
    let e = {};
    if (this.trackingEducationRules.length > 0) {
      let t = z(!1, this.trackingEducationRules);
      t.length > 0 ? e.education = t : (this.answer.education || []).length > 0 && (e
        .education = k(this.trackingEducationRules, this.answer.education || []))
    }
    if (this.trackingEmploymentRules.length > 0) {
      let t = z(!0, this.trackingEmploymentRules);
      t.length > 0 ? e.employment = t : (this.answer.workExperience || []).length > 0 && (e
        .employment = k(this.trackingEmploymentRules, this.answer.workExperience || []))
    }
    return e
  }
  getAdditionalSubmitSnapshotData() {
    let e = {};
    if (this.trackingEducationRules.length > 0) {
      let t = z(!1, this.trackingEducationRules);
      t.length > 0 ? e.education = t : (this.answer.education || []).length > 0 && (e
        .education = V(!1, this.trackingEducationRules, this.answer.education || []))
    }
    if (this.trackingEmploymentRules.length > 0) {
      let t = z(!0, this.trackingEmploymentRules);
      t.length > 0 ? e.employment = t : (this.answer.workExperience || []).length > 0 && (e
        .employment = V(!0, this.trackingEmploymentRules, this.answer.workExperience || []))
    }
    return e
  }
  submitApplication() {
    let e = './/button[@type="submit" or contains(@class, "submit")]',
      t = (0, s.getFirstOrderedNode)(e);
    t && t?.click()
  }
  constructor(...e) {
    super(...e), this.hasComboQuestions = !0, this.comboQuestionMaxRounds = 4, this
      .comboQuestionSettleDelayMs = 600, this.comboQuestionQuietPeriodMs = 200, this
      .comboQuestionSettleMaxWaitMs = 1600, this.trackingRules = [], this
      .trackingEducationRules = [], this.trackingEmploymentRules = [], this
      .educationInstitutionFailed = !1, this.deferredSmartRecruitersCityValues = new Map
  }
}
let G = (e, t) => (0, p.normalizeSmartRecruitersDateRecordForRule)(t, e.label)

