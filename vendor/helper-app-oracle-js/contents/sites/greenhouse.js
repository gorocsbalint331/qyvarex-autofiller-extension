/**
 * Parcel module id: jlOd6
 * Resolved path: contents/sites/greenhouse.js (oracle restore)
 * Dependencies:
 *   ../base-filler -> 8xj6F  =>  _tilde_contents/sites/base-filler.js
 *   ./country -> 8dguL  =>  src/contents/sites/greenhouse/country.js
 *   ./operations -> 1DkIp  =>  src/contents/sites/greenhouse/operations.js
 *   ./race -> cQ4Jg  =>  race.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/sites/education-item-trace -> j7UGI  =>  _tilde_contents/sites/education-item-trace.js
 *   ~contents/sites/greenhouse/answer -> 3lHOC  =>  _tilde_contents/sites/greenhouse/answer.js
 *   ~contents/sites/greenhouse/education-operation -> 1wqHT  =>  _tilde_contents/sites/greenhouse/education-operation.js
 *   ~contents/sites/greenhouse/location-operation -> 3FZ4r  =>  _tilde_contents/sites/greenhouse/location-operation.js
 *   ~contents/sites/greenhouse/resolve-tracking -> 6Nc4c  =>  _tilde_contents/sites/greenhouse/resolve-tracking.js
 *   ~contents/sites/greenhouse/rules -> jly3y  =>  _tilde_contents/sites/greenhouse/rules.js
 *   ~contents/sites/greenhouse/snapshot-alignment -> ewjev  =>  _tilde_contents/sites/greenhouse/snapshot-alignment.js
 *   ~contents/sites/greenhouse/validation-tracking -> aVQsr  =>  _tilde_contents/sites/greenhouse/validation-tracking.js
 *   ~contents/sites/profile-location-original-answer -> 8kwJN  =>  _tilde_contents/sites/profile-location-original-answer.js
 *   ~contents/sites/runtime-validation-tracking -> 8W2JT  =>  _tilde_contents/sites/runtime-validation-tracking.js
 *   ~core/dom -> hLMJX  =>  _tilde_core/dom.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Greenhouse", () => O);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/dom"),
  l = e("~contents/sites/education-item-trace"),
  s = e("~contents/sites/greenhouse/answer"),
  u = e("~contents/sites/greenhouse/education-operation"),
  c = e("~contents/sites/greenhouse/location-operation"),
  d = e("~contents/sites/greenhouse/resolve-tracking"),
  f = e("~contents/sites/greenhouse/rules"),
  p = e("~contents/sites/greenhouse/snapshot-alignment"),
  m = e("~contents/sites/greenhouse/validation-tracking"),
  h = e("~contents/sites/profile-location-original-answer"),
  g = e("~contents/sites/runtime-validation-tracking"),
  b = e("~core/dom"),
  y = e("~core/enums"),
  v = e("~core/xpath"),
  w = e("~store/autofillInfo"),
  S = e("../base-filler"),
  E = e("./country"),
  x = e("./operations"),
  C = e("./race");

function A(e) {
  return "string" == typeof e ? e.trim() : ""
}

function k(e) {
  return String(e ?? "").trim().replace(/\*+$/, "").trim().toLowerCase().replace(/\s+/g, " ")
}

function T(e) {
  return A(e?.profileData?.greenhouseLocation ?? e?.profile_data?.greenhouseLocation)
}

function F(e) {
  if (Array.isArray(e)) {
    for (let t of e) {
      let e = A(t);
      if (e) return e
    }
    return ""
  }
  return A(e)
}

function I(e, t) {
  let r = (0, h.getProfileLocationOriginalAnswer)(e);
  if (r.value) return r;
  let n = [t.label, "Location (City)", "Location / City", "Location", "City", "city"],
    o = new Set(n.map(e => k(e)).filter(Boolean)),
    i = e?.regular ?? {};
  for (let e of n) {
    if (!Object.prototype.hasOwnProperty.call(i, e)) continue;
    let t = F(i[e]);
    if (t) return {
      value: t,
      source: `regular.${e}`
    }
  }
  for (let [e, t] of Object.entries(i)) {
    if (!o.has(k(e))) continue;
    let r = F(t);
    if (r) return {
      value: r,
      source: `regular.${e}`
    }
  }
  for (let t of e?.fillDataList ?? []) {
    let e = t?.name;
    if (!o.has(k(e))) continue;
    let r = F(t?.value);
    if (r) return {
      value: r,
      source: `fillDataList.${e}`
    }
  }
  return {
    value: "",
    source: ""
  }
}

function j(e) {
  let t = new Set(["Phone Country Code", "Country Phone Code", "Country Code", "phoneCountryCode",
      "phone_country_code"
    ].map(e => k(e))),
    r = e?.regular ?? {};
  for (let [e, n] of Object.entries(r)) {
    if (!t.has(k(e))) continue;
    let r = F(n);
    if (r) return r
  }
  for (let r of e?.fillDataList ?? []) {
    if (!t.has(k(r?.name))) continue;
    let e = F(r?.value);
    if (e) return e
  }
  return ""
}

function D(e, t) {
  console.info(`[Greenhouse][Location] ${e}`, t)
}

function P(e) {
  let t = e?.search_request_schema?.params?.find?.(e => e?.name === "api_key");
  return !!A(t?.default_value)
}

function _(e) {
  return e ? e.matches?.("#candidate-location, input#candidate-location") ? e : e.querySelector?.(
    "#candidate-location, input#candidate-location") : null
}

function L(e) {
  let t = e.$input,
    r = _(t);
  return r ? r.closest(".select__container, .select") ?? t : t?.querySelector?.(
    ".select__control") ? t : null
}

function R(e) {
  if (e.type !== y.FIELD_TYPE.SEARCH) return !1;
  let t = k(e.label);
  return "location" === t || "location (city)" === t || "location / city" === t || !!_(e.$input)
}
class O extends S.BaseFiller {
  constructor() {
    super(), this.cachedRules = [], this.educationResolvePrefetchTaskMapPromise = null, this
      .educationResolveTrackingRecords = [], this.runtimeValidationTrackingData = {}, this
      .lastAutofillSnapshot = {}, this.lastAdditionalAutofillData = {}, this
      .lastEducationRules = [], this.runtimeValidationRetryResults = [], this
      .educationTraceRunId = null, this.locationRuntimeValidationContext = null, this
      .initialCoverLetterObserver = null, this.currentRunCountryCommitted = !1, this
      .formatAnswer = s.formatAnswer, this.scheduleInitialIframeCoverLetterCheck()
  }
  scheduleInitialIframeCoverLetterCheck() {
    if ("undefined" == typeof window || window.top === window.self) return;
    let e = () => {
        this.checkCoverLetter()
      },
      t = [500, 1500, 3e3, 6e3, 1e4];
    t.forEach(t => {
      window.setTimeout(e, t)
    }), "undefined" != typeof MutationObserver && (this.initialCoverLetterObserver =
      new MutationObserver(e), document.documentElement && this.initialCoverLetterObserver
      .observe(document.documentElement, {
        childList: !0,
        subtree: !0
      }), window.setTimeout(() => {
        this.initialCoverLetterObserver?.disconnect(), this.initialCoverLetterObserver =
          null
      }, 1e4))
  }
  getFieldHandlers() {
    return {
      [y.FIELD_TYPE.TEXT]: {
        handler: (e, t) => {
          let r = e.$input;
          if (r?.classList.contains("iti__search-input")) {
            let e = r.closest(".iti");
            if (e) {
              let t = e.querySelector("input[type='tel'], input:not(.iti__search-input)");
              t && (r = t)
            }
          }
          let n = e.label.toLowerCase().replace(/\s+/g, " ").trim(),
            o = /\bdate\b/.test(n);
          return o ? (0, x.fillTextField)(e, t, r) : (0, a.fillInputTextField)(r, t)
        },
        options: {
          expectArray: !0
        }
      },
      [y.FIELD_TYPE.SELECT]: {
        handler: (e, t) => (0, x.fillSelectField)(e, Array.isArray(t) ? t[0] : t),
        options: {
          expectArray: !1
        }
      },
      [y.FIELD_TYPE.SEARCH]: {
        handler: (e, t) => (0, x.fillAutocompleteField)(e, (0, i
          .buildAutocompleteAnswerCandidates)(e.label, t)),
        options: {
          expectArray: !0
        }
      },
      [y.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, a.fillCheckBoxesField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  async checkCoverLetter() {
    let e = (0, x.getGreenhouseCoverLetterInput)(),
      t = "";
    e && (t = (0, x.isGreenhouseCoverLetterRequired)(e) ? "required" : "optional"), (0, a
      .postCoverLetterStatus)(t)
  }
  getSiteName() {
    return "greenhouse"
  }
  async extractFormRules() {
    return await (0, f.getRules)()
  }
  async runPreFillForm() {
    this.currentRunCountryCommitted = !1;
    let e = await (0, E.runGreenhouseCountryPrefill)({
      preFillForm: async () => {
        this.taskQueue.add(x.reinitializeEducationAndEmployment), await this.taskQueue
          .run()
      },
      fetchAutofillInfo: () => (0, w.useAutofillInfoStore).getState().fetchAutofillInfo(),
      fillCountry: e => (0, E.fillGreenhouseGeographicCountry)(e)
    });
    this.currentRunCountryCommitted = e.committed
  }
  async fillRegularFields(e) {
    this.taskQueue.add(async () => {
      await (0, x.fillConsentCheckbox)()
    }), await this.taskQueue.run();
    let t = e => Array.isArray(e) ? e[0] : e,
      r = e => String(t(e) ?? "").trim().toLowerCase(),
      n = this.answer.fillDataList ?? [],
      o = T(this.answer),
      a = (0, c.extractGreenhouseLocationControlConfig)(),
      l = new Map,
      s = new Set;
    for (let t of e) l.set(t.label, (l.get(t.label) || 0) + 1), (t.type === y.FIELD_TYPE
      .SELECT || t.type === y.FIELD_TYPE.SEARCH) && s.add(t.label);
    let u = new Set;
    for (let [e, t] of l) t > 1 && s.has(e) && u.add(e);
    let d = new Map;
    for (let e of n)
      if (e?.name && u.has(e.name)) {
        let t = d.get(e.name) ?? [];
        t.push(e.value), d.set(e.name, t)
      } let f = [];
    for (let n of e) {
      let e = this.operationConfig[n.type];
      if (e) {
        if ((0, C.isGreenhouseConditionalRaceRule)(n)) {
          f.push(async () => {
            (0, C.findGreenhouseRaceContainer)() && (this.progressTracker
              .updateFieldRequiredStatus(n), await e(n, this.answer.regular))
          });
          continue
        }
        if (R(n)) {
          f.push(async () => {
            let e = L(n);
            if (o) {
              D("direct fill start", {
                label: n.label,
                source: "profileData.greenhouseLocation",
                location: o
              });
              let t = !!e && await (0, x.fillAutocompleteField)({
                ...n,
                $input: e
              }, o, {
                allowPartialMatch: !1
              });
              D("fill result", {
                  label: n.label,
                  source: "profileData.greenhouseLocation",
                  resolvedLocation: o,
                  filled: t
                }), this.captureLocationRuntimeValidation({
                  label: n.label,
                  sourceValue: o,
                  attemptedCandidates: [o]
                }), t ? this.progressTracker.updateFilledProgress(n.label) : this
                .progressTracker.updateMissedProgress(n.label);
              return
            }
            let t = I(this.answer, n);
            if (!t.value) {
              D("skip", {
                label: n.label,
                reason: "empty profileData.greenhouseLocation and city"
              }), this.progressTracker.updateMissedProgress(n.label);
              return
            }
            let r = (0, c.buildGreenhouseLocationOperation)({
              currentUrl: this.getCurrentPageUrl(),
              originalAnswer: t.value,
              locationControlConfig: a
            });
            D("resolve start", {
              label: n.label,
              source: t.source,
              originalAnswer: t.value,
              searchUrl: r.search_request_schema.url,
              hasApiKey: P(r)
            });
            let i = await this.resolveEducationOperation(r),
              l = (0, c.getGreenhouseResolvedLocationValue)(i),
              s = l ? [l] : [];
            if (D("resolve result", {
                label: n.label,
                source: t.source,
                action: i?.result?.action,
                selectedValues: i?.result?.selected_values ?? [],
                resolvedLocation: l
              }), !l) {
              D("fill result", {
                label: n.label,
                source: t.source,
                resolvedLocation: l,
                filled: !1,
                reason: "empty resolved location"
              }), this.captureLocationRuntimeValidation({
                label: n.label,
                sourceValue: t.value,
                resolveValue: l,
                attemptedCandidates: s
              }), this.progressTracker.updateMissedProgress(n.label);
              return
            }
            let u = !!e && await (0, x.fillAutocompleteField)({
              ...n,
              $input: e
            }, l, {
              allowPartialMatch: !1
            });
            D("fill result", {
                label: n.label,
                source: t.source,
                resolvedLocation: l,
                filled: u
              }), this.captureLocationRuntimeValidation({
                label: n.label,
                sourceValue: t.value,
                resolveValue: l,
                attemptedCandidates: s
              }), u ? this.progressTracker.updateFilledProgress(n.label) : this
              .progressTracker.updateMissedProgress(n.label)
          });
          continue
        }
        u.has(n.label) && (n.type === y.FIELD_TYPE.SELECT || n.type === y.FIELD_TYPE.SEARCH) ? f
          .push(async () => {
            let o = d.get(n.label) ?? [],
              a = o.findIndex(e => (n.options ?? []).some(t => r(t) === r(e)));
            if (a >= 0) {
              let e = t(o.splice(a, 1)[0]),
                r = !1;
              (r = n.type === y.FIELD_TYPE.SELECT ? await (0, x.fillSelectField)(n, e) :
                await (0, x.fillAutocompleteField)(n, (0, i
                  .buildAutocompleteAnswerCandidates)(n.label, e))) ? this.progressTracker
                .updateFilledProgress(n.label): this.progressTracker.updateMissedProgress(n
                  .label)
            } else await e(n, this.answer.regular)
          }) : f.push(async () => {
            await e(n, this.answer.regular)
          })
      }
    }
    for (let e of f) this.taskQueue.add(e);
    await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {
    let t = "undefined" != typeof window && window.location?.hostname?.startsWith(
    "job-boards.");
    await (0, x.addEducationSection)(this.answer.education.length);
    let r = t ? await (0, f.getEduRule)(!1, !1) : (0, f.getEducationRules)();
    this.lastEducationRules = r, (0, b.setSectionResultFocusRules)("education", r);
    let n = (0, i.getEducationOperations)(r, this.answer.education, this.operationConfig, (e, t,
      r) => this.applyEducationResolvePrefetchForRule(e.label, t, r), {
      onCompleted: () => {
        this.answer.education.length > 0 && this.progressTracker.updateFilledProgress(
          "Education")
      },
      onSkipped: () => {
        this.progressTracker.updateMissedProgress("Education")
      },
      onSectionResultChanged: this.progressTracker.updateSectionResult
    }, {
      fillReadyTransformedFieldsFirst: !0
    });
    for (let e of n) this.taskQueue.add(e);
    await this.taskQueue.run(), await (0, x.addEmploymentSection)(this.answer.workExperience
      .length);
    let o = t ? await (0, f.getEmploymentRule)(!1, !1) : (0, f.getExperienceRules)();
    (0, b.setSectionResultFocusRules)("employment", o);
    let a = (0, i.getEmploymentOperations)(o, this.answer.workExperience, this.operationConfig,
      void 0, {
        onCompleted: () => {
          this.answer.workExperience.length > 0 && this.progressTracker
            .updateFilledProgress("Employment")
        },
        onSkipped: () => {
          this.progressTracker.updateMissedProgress("Employment")
        },
        onSectionResultChanged: this.progressTracker.updateSectionResult
      });
    for (let e of a) this.taskQueue.add(e);
    await this.taskQueue.run(), await (0, x.fillCurrentEmploymentCheckboxes)(this.answer
      .workExperience), this.taskQueue.add(async () => {
      await (0, x.fillCountryFieldFirstOption)(this.answer.country, j(this.answer))
    }), await this.taskQueue.run()
  }
  async executeSiteSpecificSteps(e) {
    await this.bindSubmitButtonTracking(e), this.taskQueue.add(async () => {
        await (0, x.fillAcknowledgeCheckbox)(), await (0, x.fillNestedAcknowledgeCheckbox)()
      }), await this.handleResumeUpload(), this.coverLetter?.coverLetterId && this.taskQueue
      .add(async () => {
        await (0, x.uploadCoverLetter)(this.coverLetter, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), await this.taskQueue.run()
  }
  getSubmitButtonSelector() {
    return './/*[@id="submit_app" or text()="Submit application"]'
  }
  getSubmitSuccessSelectors() {
    return ['.//div[@class="confirmation"]/div[@class="confirmation__content"]',
      './/h2[contains(@class, "rich-text__title") and contains(text(), "We got your application")]'
    ]
  }
  async getAutofillSnapshot(e) {
    let t = "undefined" != typeof window && window.location?.hostname?.startsWith(
      "job-boards."),
      r = await (0, f.getFormSnapshot)(e, t);
    return this.lastAutofillSnapshot = r, r
  }
  async getSubmitSnapshot() {
    let e = "undefined" != typeof window && window.location?.hostname?.startsWith(
    "job-boards.");
    return (0, f.getFormSnapshot)(this.cachedRules, e)
  }
  getAdditionalAutofillSnapshotData(e) {
    let t = this.ensureEducationTraceRunId(),
      r = (0, f.getEduAndEmploymentSnapshot)({
        markEducationRows: !0,
        includeEducationSnapshotIndex: !0,
        includeEducationTrace: !0,
        educationTraceRunId: t
      }) || {};
    return this.lastAdditionalAutofillData = r, this.refreshRuntimeValidationTrackingData(), r
  }
  getAdditionalSubmitSnapshotData() {
    return (0, f.getEduAndEmploymentSnapshot)({
      includeEducationSnapshotIndex: !0,
      includeEducationTrace: !0,
      educationTraceRunId: this.educationTraceRunId ?? void 0
    }) || {}
  }
  getAutofillAnswerPairExtraTrackingData() {
    return {
      ...(0, d.buildGreenhouseResolveTrackingData)(this.educationResolveTrackingRecords),
      ...this.runtimeValidationTrackingData
    }
  }
  normalizeAutofillAnswerPairTrackingData(e) {
    return (0, p.alignGreenhouseEducationAnswerPairTrackingData)(e)
  }
  async handleResumeUpload() {
    let e = (0, x.isResumeRequired)();
    this.progressTracker.updateFieldRequiredStatus({
        label: "Resume/CV",
        required: e
      }), this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") :
      this.taskQueue.add(async () => {
        await (0, x.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      })
  }
  async doFillForm(e = !1) {
    await this.initializeFillForm();
    let t = await this.extractFormRules(),
      {
        regularRules: r
      } = (0, E.partitionGreenhouseCountryRules)(t);
    this.cachedRules = t, this.progressTracker.setFieldsRequiredStatus((0, C
      .excludeGreenhouseConditionalRaceRules)(t)), (0, E.reconcileGreenhouseCountryProgress)(
      t, this.currentRunCountryCommitted, {
        updateFilledProgress: this.progressTracker.updateFilledProgress,
        updateMissedProgress: this.progressTracker.updateMissedProgress
      });
    let n = await this.fetchFormAnswers(r, e);
    return "string" == typeof n ? n : ((0, x.dismissAllReactSelectMenus)(), this
      .educationResolvePrefetchTaskMapPromise = null, this
      .educationResolveTrackingRecords = [], this.runtimeValidationTrackingData = {}, this
      .runtimeValidationRetryResults = [], this.lastAutofillSnapshot = {}, this
      .lastAdditionalAutofillData = {}, this.lastEducationRules = [], this
      .educationTraceRunId = null, this.locationRuntimeValidationContext = null, this
      .startEducationResolvePrefetch(), await this.fillRegularFields(r), await this
      .fillEducationAndEmployment(t), await this.retryRuntimeValidationFailures(t), await this
      .executeSiteSpecificSteps(t), await this.finalizeFillForm())
  }
  submitApplication() {
    let e = (0, v.getFirstOrderedNodeSafe)(
      './/*[@id="submit_app" or text()="Submit application"]');
    e?.click()
  }
  getCurrentPageUrl() {
    return window.location.href
  }
  async resolveEducationOperation(e) {
    return await (0, o.sendToBackground)({
      name: "resolveAutofillOperation",
      body: {
        operation: e,
        source: "greenhouse"
      }
    })
  }
  async getEducationResolvePrefetchRules() {
    let e = "undefined" != typeof window && window.location?.hostname?.startsWith(
      "job-boards."),
      t = e ? (await f.getEduRule(!1, !0))?.[0] : f.getEducationRules()?.[0];
    return (t?.children ?? []).map(e => ({
      label: e.label
    })).filter(e => (0, u.shouldResolveEducationLabel)(e.label))
  }
  startEducationResolvePrefetch() {
    !this.educationResolvePrefetchTaskMapPromise && Array.isArray(this.answer?.education) &&
      0 !== this.answer.education.length && (this.educationResolvePrefetchTaskMapPromise = (
        async () => {
          try {
            let e = await this.getEducationResolvePrefetchRules();
            if (0 === e.length) return [];
            return (0, u.createEducationRecordResolutionTaskMap)({
              currentUrl: this.getCurrentPageUrl(),
              records: this.answer.education,
              rules: e,
              resolveOperation: e => this.resolveEducationOperation(e)
            })
          } catch (e) {
            return console.warn("[Greenhouse] Failed to prefetch education operations:", e),
              []
          }
        })())
  }
  async getEducationResolvePrefetchTaskMap() {
    return this.educationResolvePrefetchTaskMapPromise || this.startEducationResolvePrefetch(),
      await this.educationResolvePrefetchTaskMapPromise ?? []
  }
  async applyEducationResolvePrefetchForRule(e, t, r) {
    if (!(0, u.shouldResolveEducationLabel)(e)) return t;
    let n = await this.getEducationResolvePrefetchTaskMap(),
      o = n[r]?.[e],
      i = o ? await o : null;
    return this.captureEducationResolveTracking(e, r, i), (0, u
      .applyPrefetchedEducationResolutionForLabel)({
      record: t,
      label: e,
      prefetchedResolution: Promise.resolve(i)
    })
  }
  captureEducationResolveTracking(e, t, r) {
    let n = String(e ?? "").trim().toLowerCase();
    if ("school" !== n && "discipline" !== n) return;
    let o = {
      ...this.educationResolveTrackingRecords[t] ?? {}
    };
    "school" === n ? (o.school = (0, d.getGreenhouseResolvedEducationValue)(r), o
      .schoolPayload = (0, d.getGreenhouseResolveOperationPayload)(r)) : (o.discipline = (0, d
      .getGreenhouseResolvedEducationValue)(r), o.disciplinePayload = (0, d
      .getGreenhouseResolveOperationPayload)(r)), this.educationResolveTrackingRecords[t] = o
  }
  captureLocationRuntimeValidation(e) {
    this.locationRuntimeValidationContext = e
  }
  async captureRuntimeValidationSnapshots(e) {
    await this.getAutofillSnapshot(e), this.getAdditionalAutofillSnapshotData(e)
  }
  isRuntimeValidationRetryCandidate(e) {
    return ("mismatched" === e.status || "empty" === e.status) && e.attemptedCandidates.length >
      0
  }
  findEducationValidationRule(e) {
    if ("number" != typeof e.index) return null;
    let t = this.lastEducationRules[e.index],
      r = Array.isArray(t?.children) ? t.children : [];
    return r.find(t => {
      let r = String(t.label ?? "").trim().toLowerCase();
      return r === e.fieldLabel.toLowerCase()
    }) ?? null
  }
  findLocationValidationRule() {
    return this.cachedRules.find(e => R(e)) ?? null
  }
  async clearRuntimeValidationField(e) {
    if ("location" === e.fieldType) {
      let e = this.findLocationValidationRule();
      return (0, x.clearGreenhouseAutocompleteField)(e ? L(e) : null)
    }
    let t = this.findEducationValidationRule(e);
    return (0, x.clearGreenhouseAutocompleteField)(t?.$input ?? null)
  }
  async refillRuntimeValidationField(e) {
    if ("location" === e.fieldType) {
      let t = this.findLocationValidationRule(),
        r = t ? L(t) : null;
      return !!t && !!r && (0, x.fillAutocompleteField)({
        ...t,
        $input: r
      }, e.attemptedCandidates, {
        allowPartialMatch: !1
      })
    }
    let t = this.findEducationValidationRule(e);
    return !!t && t.type === y.FIELD_TYPE.SEARCH && (0, x.fillAutocompleteField)(t, e
      .attemptedCandidates, {
        allowPartialMatch: !1
      })
  }
  getValidationStatusForRetryResult(e) {
    let t = this.runtimeValidationTrackingData?.validation;
    return "location" === e.fieldType ? t?.location?.status ?? "" : "number" != typeof e.index ?
      "" : t?.education?.[e.index]?.[e.fieldType]?.status ?? ""
  }
  async retryRuntimeValidationFailures(e) {
    await this.captureRuntimeValidationSnapshots(e);
    let t = (0, m.getGreenhouseRuntimeValidationLogEntries)(this.runtimeValidationTrackingData)
      .filter(e => this.isRuntimeValidationRetryCandidate(e));
    if (0 !== t.length) {
      for (let e of (this.runtimeValidationRetryResults = [], t)) await this
        .clearRuntimeValidationField(e), await this.refillRuntimeValidationField(e), this
        .runtimeValidationRetryResults.push({
          ..."number" == typeof e.index ? {
            index: e.index
          } : {},
          fieldType: e.fieldType,
          initialStatus: e.status,
          initialCommittedValue: e.committedValue,
          retryCount: 1,
          resetApplied: !1
        });
      for (let t of (await this.captureRuntimeValidationSnapshots(e), this
          .runtimeValidationRetryResults)) {
        let e = this.getValidationStatusForRetryResult(t);
        if ("retry_matched" === e) continue;
        let r = await this.clearRuntimeValidationField({
          ..."number" == typeof t.index ? {
            index: t.index
          } : {},
          fieldType: t.fieldType,
          fieldLabel: "location" === t.fieldType ? this.locationRuntimeValidationContext
            ?.label ?? "Location" : "school" === t.fieldType ? "School" : "Discipline",
          level: "warn",
          status: t.initialStatus,
          committedValue: t.initialCommittedValue,
          attemptedCandidates: []
        });
        t.resetApplied = r
      }
      await this.captureRuntimeValidationSnapshots(e), (0, g
        .sendRuntimeValidationDeviationEvent)({
        formUrl: this.getCurrentPageUrl(),
        source: this.getSiteName(),
        trackingData: this.runtimeValidationTrackingData
      })
    }
  }
  refreshRuntimeValidationTrackingData() {
    this.runtimeValidationTrackingData = (0, m.buildGreenhouseRuntimeValidationTrackingData)({
        educationRecords: this.answer.education ?? [],
        educationSnapshotRecords: Array.isArray(this.lastAdditionalAutofillData.education) ?
          this.lastAdditionalAutofillData.education : [],
        educationResolveRecords: this.educationResolveTrackingRecords,
        autofillSnapshot: this.lastAutofillSnapshot,
        location: this.locationRuntimeValidationContext,
        retryResults: this.runtimeValidationRetryResults
      }), (0, m.getGreenhouseRuntimeValidationLogEntries)(this.runtimeValidationTrackingData)
      .forEach(e => {
        let t = `[Greenhouse] ${e.fieldLabel} validation ${e.status}`,
          r = {
            ..."number" == typeof e.index ? {
              index: e.index
            } : {},
            fieldType: e.fieldType,
            committedValue: e.committedValue,
            attemptedCandidates: e.attemptedCandidates
          };
        "info" === e.level ? console.info(t, r) : console.warn(t, r)
      })
  }
  ensureEducationTraceRunId() {
    return this.educationTraceRunId || (this.educationTraceRunId = (0, l
      .createEducationTraceRunId)()), this.educationTraceRunId
  }
}

