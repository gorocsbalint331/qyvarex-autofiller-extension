/**
 * Parcel module id: f8QJv
 * Resolved path: src/contents/sites/ripplehire.js
 * Dependencies:
 *   ./entry-navigation -> hz1tR  =>  src/contents/sites/ripplehire/entry-navigation.js
 *   ./location-client-search -> 5C5cJ  =>  src/contents/sites/ripplehire/location-client-search.js
 *   ./location-typeahead -> gU0Zg  =>  src/contents/sites/ripplehire/location-typeahead.js
 *   ./operations -> d6wH2  =>  src/contents/sites/ripplehire/operations.js
 *   ./phone-country-code -> eL1jL  =>  src/contents/sites/ripplehire/phone-country-code.js
 *   ./rules -> fGIK4  =>  src/contents/sites/ripplehire/rules.js
 *   ./skills-operation -> 2PtGF  =>  src/contents/sites/ripplehire/skills-operation.js
 *   ./submit-tracking -> d5UKD  =>  src/contents/sites/ripplehire/submit-tracking.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Ripplehire", () => L);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/cancellation"),
  l = e("~contents/shared/filler"),
  s = e("~contents/sites/base-filler"),
  u = e("~core/enums"),
  c = e("./entry-navigation"),
  d = e("./location-client-search"),
  f = e("./location-typeahead"),
  p = e("./operations"),
  m = e("./phone-country-code"),
  h = e("./rules"),
  g = e("./skills-operation"),
  b = e("./submit-tracking");
let y = "[RippleHire][locationClientSearch]",
  v = "[RippleHire][locationClientSearchStep]",
  w = 5,
  S = 25,
  E = 6e4,
  x = 128;

function C(e, t = {}) {
  console.debug(`[RippleHire][fill] ${JSON.stringify({stage:e,...t})}`)
}

function A() {
  if ("undefined" == typeof document || "function" != typeof document.getElementById) return {
    contactEmailLength: 0,
    contactPhoneLength: 0
  };
  let e = document.getElementById("emailAddr"),
    t = document.getElementById("phoneNo");
  return {
    contactEmailLength: e?.value?.length || 0,
    contactPhoneLength: t?.value?.length || 0
  }
}

function k() {
  if ("undefined" == typeof document || "function" != typeof document.getElementById) return {
    cityValueLength: 0,
    cityConnected: !1,
    cityFocused: !1
  };
  let e = document.getElementById("currentLocation");
  return {
    cityValueLength: e?.value?.length || 0,
    cityConnected: e?.isConnected === !0,
    cityFocused: document.activeElement === e
  }
}

function T(e) {
  let t = e.$input;
  return t?.id === "currentLocation" ? "city" : t?.id === "custom16" ? "postal-code" : t?.id ===
    "currentCTC" ? "current-salary" : "other"
}

function F(e) {
  let t = e.$input;
  return e.type === u.FIELD_TYPE.MULTI_SELECT && (t?.id === "secondarySkills" || "skills" === e
    .label.replace(/\s+/g, " ").trim().toLowerCase())
}

function I(e) {
  let t = [],
    r = [],
    n = [],
    o = new Set;
  for (let i of e) {
    let e = i.$input;
    if (F(i)) {
      let t = e?.id ? `id:${e.id}` : `label:${i.label.replace(/\s+/g," ").trim().toLowerCase()}`;
      o.has(t) || (o.add(t), n.push(i))
    } else(0, d.isRipplehireLocationClientSearchRule)(i) ? r.push(i) : t.push(i)
  }
  return {
    regularRules: t,
    locationRules: r,
    skillsRules: n
  }
}
let j = {
    requestStep: async e => await (0, o.sendToBackground)({
      name: "resolveAutofillClientSearchStep",
      body: e
    }),
    captureCandidates: f.captureRipplehireLocationCandidates,
    commitCandidate: f.commitRipplehireLocationCandidate,
    clearTemporaryValue: f.clearRipplehireLocationTemporaryValue,
    onDiagnostic: e => console.debug(`${v} ${JSON.stringify(e)}`)
  },
  D = new Set(["missing-original-answer", "request-error", "invalid-response", "round-limit",
    "invalid-search-request", "changed-resolve-session-id", "repeated-search", "capture-error",
    "invalid-capture-result", "capture-failed", "candidate-limit", "invalid-candidates",
    "invalid-candidate", "duplicate-candidate", "invalid-selection", "commit-failed",
    "commit-error", "empty", "retryable-failure", "resolver-exception"
  ]);

function P(e, t) {
  return "number" == typeof e && Number.isFinite(e) ? Math.min(t, Math.max(0, Math.floor(e))) : 0
}

function _(e, t) {
  let r = Array.isArray(e.rounds) ? e.rounds.slice(0, w) : [],
    n = {
      action: e.success ? "committed" : "failed",
      roundCount: r.length,
      candidateCounts: r.map(e => P(e?.options?.length, S)),
      elapsedMs: P(Date.now() - t, E)
    };
  if (!("failureReason" in e)) return n;
  let o = D.has(e.failureReason) ? e.failureReason : "resolver-failed";
  return {
    ...n,
    failureReason: o.slice(0, x)
  }
}
class L extends s.BaseFiller {
  buildOperationConfig() {
    let e = super.buildOperationConfig();
    return {
      ...e,
      [u.FIELD_TYPE.MULTI_SELECT]: async (e, t, r = !0) => {
        r && (0, a.updateCurrentField)(e.label);
        let n = !1;
        try {
          await (0, a.withSkip)(async () => {
            let o = (0, g.normalizeRipplehireSkillItems)(this.answer?.skills),
              s = [];
            try {
              s = (0, g.normalizeRipplehireSkillItems)((0, i.findValueInRecord)(e.label,
                t))
            } catch (e) {
              if (!(e instanceof l.ValueError)) throw e
            }
            let u = o.length > 0 ? o : s,
              c = o.length > 0 ? "profile" : "falcon",
              d = (0, g.createRipplehireSkillsDomAdapter)(e.$input),
              f = new Set(o.map(e => e.toLowerCase())),
              p = new Set(s.map(e => e.toLowerCase())),
              m = f.size === p.size && [...f].every(e => p.has(e));
            console.debug(
              `[RipplehireSkills] ${JSON.stringify({reason:"source-selected",source:c,requestedCount:u.length,profileCount:o.length,falconCount:s.length,sameSet:m})}`
              );
            let h = await (0, g.fillRipplehireSkillItems)(u, d, {
              isInterruption: e => e instanceof a.CancelledError || e instanceof a
                .SkippedError,
              onInterruptedResult: t => {
                r && (this.progressTracker.updateFieldItemProgress(e.label, t),
                  n = !0)
              }
            });
            r && (this.progressTracker.updateFieldItemProgress(e.label, h), n = !0)
          })
        } catch (t) {
          if (t instanceof a.CancelledError) throw t;
          if (t instanceof a.SkippedError) {
            if (!r) throw t;
            n || this.progressTracker.updateMissedProgress(e.label);
            return
          }
          console.error("[RipplehireSkills] operation failed", {
            fieldLabel: e.label,
            errorName: t instanceof Error ? t.name : typeof t
          }), r && this.progressTracker.updateMissedProgress(e.label)
        }
      }
    }
  }
  getFieldHandlers() {
    return {
      [u.FIELD_TYPE.TEXT]: {
        handler: async (e, t) => {
          if ((0, d.isRipplehireLocationClientSearchRule)(e)) {
            let r;
            let n = Date.now(),
              o = (0, d.getRipplehireLocationOriginalAnswer)(this.answer, t).value;
            try {
              r = await (0, d.resolveRipplehireLocationClientSearch)(e.$input, o, j)
            } catch (e) {
              if (e instanceof a.CancelledError || e instanceof a.SkippedError) throw e;
              r = {
                success: !1,
                rounds: [],
                failureReason: "resolver-exception"
              }
            }
            return console.info(y, {
              surface: (0, d.getRipplehireLocationClientSearchSurface)(e.$input),
              ..._(r, n)
            }), C("location-field-complete", {
              committed: r.success,
              ...k()
            }), r.success
          }
          let r = T(e);
          C("text-field-start", {
            fieldKind: r,
            ...k()
          });
          let n = await (0, p.fillInputTextField)(e, t, (0, m
            .resolveRipplehirePhoneCountryCode)(this.answer));
          return C("text-field-complete", {
            fieldKind: r,
            ...k()
          }), n
        },
        options: {
          expectArray: !1
        }
      },
      [u.FIELD_TYPE.NUMBER]: {
        handler: (e, t) => (0, p.fillInputTextField)(e, t),
        options: {
          expectArray: !1
        }
      },
      [u.FIELD_TYPE.SELECT]: {
        handler: async (e, t) => {
          if (e.label !== m.RIPPLEHIRE_PHONE_COUNTRY_CODE_LABEL) return (0, p.fillSelectField)
            (e, t);
          let r = A(),
            n = await (0, p.fillPhoneCountryCode)(e, t);
          return C("phone-country", {
            ...r,
            afterEmailLength: A().contactEmailLength,
            afterPhoneLength: A().contactPhoneLength,
            committed: n
          }), n
        },
        options: {
          expectArray: !0
        }
      },
      [u.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => (0, p.fillCheckboxField)(e, t),
        options: {
          expectArray: !0
        }
      },
      [u.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => (0, p.fillRadioGroupField)(e, t),
        options: {
          expectArray: !0
        }
      }
    }
  }
  async doFillForm(e = !1) {
    if (await this.initializeFillForm(), C("initialized"), this.entryAbortReason) return this
      .entryAbortReason;
    let t = await this.extractFormRules();
    C("rules-extracted", {
      ruleCount: t.length,
      requiredCount: t.filter(e => e.required).length
    }), this.progressTracker.setFieldsRequiredStatus(t);
    let r = t.filter(e => !F(e));
    C("answers-requested", {
      ruleCount: r.length,
      filteredSkillsCount: t.length - r.length
    });
    let n = await this.requestFormAnswers(r, e);
    if (C("answers-resolved", {
        resultType: null === n ? "null" : typeof n
      }), "string" == typeof n) return n;
    n && (this.answer = n), await this.handleResumeUpload(), C("resume-complete");
    let {
      regularRules: o,
      locationRules: i,
      skillsRules: a
    } = I(t);
    C("skills-deferred", {
      extractedCount: t.filter(e => e.type === u.FIELD_TYPE.MULTI_SELECT).length,
      uniqueCount: a.length
    }), await this.fillRegularFields(o), C("ordinary-fields-complete", {
      ruleCount: o.length,
      locationRuleCount: i.length,
      ...k()
    });
    let l = this.answer?.country || this.answer?.profileData?.country || this.answer
      ?.profile_data?.country;
    await (0, p.fillCountryFromStateFallback)(l) && this.progressTracker.updateFilledProgress(
      "Country"), C("country-fallback-complete", k()), (0, p.agreementCheckboxField)(), C(
      "agreement-complete", k()), await this.fillRegularFields(a), C("skills-complete", {
      executedCount: a.length,
      ...k()
    }), await this.fillRegularFields(i), C("regular-fields-complete", {
      ruleCount: t.length,
      ...A(),
      ...k()
    }), await this.bindSubmitButtonTracking(t);
    let s = await this.finalizeFillForm();
    return C("finalized", {
      resultType: null === s ? "null" : typeof s,
      ...A(),
      ...k()
    }), s
  }
  async runPreFillForm() {
    this.entryAbortReason = null, this.entryAbortReason = await (0, c
      .prepareRipplehireApplication)(), this.entryAbortReason || (0, p
      .preselectExpectedSalaryCurrencyToUsd)()
  }
  async extractFormRules() {
    return await (0, h.extractRules)()
  }
  getSiteName() {
    return "ripplehire"
  }
  async handleResumeUpload() {
    this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this
      .taskQueue.add(async () => {
        await (0, p.uploadResume)(this.resumeInfo, this.progressTracker
          .updateFieldRequiredStatus, this.progressTracker.updateFilledProgress)
      }), await this.taskQueue.run()
  }
  async getAutofillSnapshot(e) {
    return (0, h.getFormSnapshot)(e)
  }
  async getSubmitSnapshot() {
    return (0, h.getFormSnapshot)()
  }
  getSubmitTrackingDelegationRoot() {
    return document
  }
  resolveDelegatedSubmitButton(e) {
    return (0, b.resolveRipplehireSubmitButton)(e)
  }
  submitApplication() {
    b.getRipplehireSubmitButton()?.click()
  }
  cancelAutoFill() {
    this.taskQueue.clear()
  }
  constructor(...e) {
    super(...e), this.entryAbortReason = null
  }
}

