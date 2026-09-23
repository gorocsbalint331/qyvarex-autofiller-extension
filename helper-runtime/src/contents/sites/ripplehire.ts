// @ts-nocheck
/**
 * RippleHire ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and ripplehire/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "ripplehire"
 */

import * as messaging from "@plasmohq/messaging"
import * as answerMethods from "../methods/answer.ts"
import * as cancellation from "../methods/cancellation.ts"
import * as filler from "../shared/filler.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as entryNavigation from "./ripplehire/entry-navigation.ts"
import * as locationClientSearch from "./ripplehire/location-client-search.ts"
import * as locationTypeahead from "./ripplehire/location-typeahead.ts"
import * as operations from "./ripplehire/operations.ts"
import * as phoneCountryCode from "./ripplehire/phone-country-code.ts"
import * as rules from "./ripplehire/rules.ts"
import * as skillsOperation from "./ripplehire/skills-operation.ts"
import * as submitTracking from "./ripplehire/submit-tracking.ts"
let y = "[RippleHire][locationClientSearch]", v = "[RippleHire][locationClientSearchStep]", w = 5, S = 25, E = 6e4, x = 128;
function C(e, t = {}) {
  console.debug(`[RippleHire][fill] ${JSON.stringify({ stage: e, ...t })}`);
}
function A() {
  if ("undefined" == typeof document || "function" != typeof document.getElementById) return {
    contactEmailLength: 0,
    contactPhoneLength: 0
  };
  let e = document.getElementById("emailAddr"), t = document.getElementById("phoneNo");
  return {
    contactEmailLength: e?.value?.length || 0,
    contactPhoneLength: t?.value?.length || 0
  };
}
function k() {
  if ("undefined" == typeof document || "function" != typeof document.getElementById) return {
    cityValueLength: 0,
    cityConnected: false,
    cityFocused: false
  };
  let e = document.getElementById("currentLocation");
  return {
    cityValueLength: e?.value?.length || 0,
    cityConnected: e?.isConnected === true,
    cityFocused: document.activeElement === e
  };
}
function T(e) {
  let t = e.$input;
  return t?.id === "currentLocation" ? "city" : t?.id === "custom16" ? "postal-code" : t?.id === "currentCTC" ? "current-salary" : "other";
}
function F(e) {
  let t = e.$input;
  return e.type === enums.FIELD_TYPE.MULTI_SELECT && (t?.id === "secondarySkills" || "skills" === e.label.replace(/\s+/g, " ").trim().toLowerCase());
}
function I(e) {
  let t = [], r = [], n = [], o2 = /* @__PURE__ */ new Set();
  for (let i2 of e) {
    let e2 = i2.$input;
    if (F(i2)) {
      let t2 = e2?.id ? `id:${e2.id}` : `label:${i2.label.replace(/\s+/g, " ").trim().toLowerCase()}`;
      o2.has(t2) || (o2.add(t2), n.push(i2));
    }
    else if (locationClientSearch.isRipplehireLocationClientSearchRule(i2)) {
      r.push(i2)
    } else {
      t.push(i2)
    }
  }
  return {
    regularRules: t,
    locationRules: r,
    skillsRules: n
  };
}
let j = {
  requestStep: async (e) => await messaging.sendToBackground({
    name: "resolveAutofillClientSearchStep",
    body: e
  }),
  captureCandidates: locationTypeahead.captureRipplehireLocationCandidates,
  commitCandidate: locationTypeahead.commitRipplehireLocationCandidate,
  clearTemporaryValue: locationTypeahead.clearRipplehireLocationTemporaryValue,
  onDiagnostic: (e) => console.debug(`${v} ${JSON.stringify(e)}`)
}, D = /* @__PURE__ */ new Set([
  "missing-original-answer",
  "request-error",
  "invalid-response",
  "round-limit",
  "invalid-search-request",
  "changed-resolve-session-id",
  "repeated-search",
  "capture-error",
  "invalid-capture-result",
  "capture-failed",
  "candidate-limit",
  "invalid-candidates",
  "invalid-candidate",
  "duplicate-candidate",
  "invalid-selection",
  "commit-failed",
  "commit-error",
  "empty",
  "retryable-failure",
  "resolver-exception"
]);
function P(e, t) {
  return "number" == typeof e && Number.isFinite(e) ? Math.min(t, Math.max(0, Math.floor(e))) : 0;
}
function _(e, t) {
  let r = Array.isArray(e.rounds) ? e.rounds.slice(0, w) : [], n = {
    action: e.success ? "committed" : "failed",
    roundCount: r.length,
    candidateCounts: r.map((e2) => P(e2?.options?.length, S)),
    elapsedMs: P(Date.now() - t, E)
  };
  if (!("failureReason" in e)) return n;
  let o2 = D.has(e.failureReason) ? e.failureReason : "resolver-failed";
  return {
    ...n,
    failureReason: o2.slice(0, x)
  };
}
class Ripplehire extends BaseFiller {
  buildOperationConfig() {
    let e = super.buildOperationConfig();
    return {
      ...e,
      [enums.FIELD_TYPE.MULTI_SELECT]: async (e2, t, r = true) => {
        r && cancellation.updateCurrentField(e2.label);
        let n = false;
        try {
          await cancellation.withSkip(async () => {
            let o2 = skillsOperation.normalizeRipplehireSkillItems(this.answer?.skills), s = [];
            try {
              s = skillsOperation.normalizeRipplehireSkillItems(answerMethods.findValueInRecord(
                e2.label,
                t
              ));
            } catch (e3) {
              if (!(e3 instanceof filler.ValueError)) throw e3;
            }
            let u2 = o2.length > 0 ? o2 : s, c2 = o2.length > 0 ? "profile" : "falcon", d2 = skillsOperation.createRipplehireSkillsDomAdapter(e2.$input), f2 = new Set(o2.map((e3) => e3.toLowerCase())), p2 = new Set(s.map((e3) => e3.toLowerCase())), m2 = f2.size === p2.size && [...f2].every((e3) => p2.has(e3));
            console.debug(
              `[RipplehireSkills] ${JSON.stringify({ reason: "source-selected", source: c2, requestedCount: u2.length, profileCount: o2.length, falconCount: s.length, sameSet: m2 })}`
            );
            let h2 = await skillsOperation.fillRipplehireSkillItems(u2, d2, {
              isInterruption: (e3) => e3 instanceof cancellation.CancelledError || e3 instanceof cancellation.SkippedError,
              onInterruptedResult: (t2) => {
                r && (this.progressTracker.updateFieldItemProgress(e2.label, t2), n = true);
              }
            });
            r && (this.progressTracker.updateFieldItemProgress(e2.label, h2), n = true);
          });
        } catch (t2) {
          if (t2 instanceof cancellation.CancelledError) throw t2;
          if (t2 instanceof cancellation.SkippedError) {
            if (!r) throw t2;
            n || this.progressTracker.updateMissedProgress(e2.label);
            return;
          }
          console.error("[RipplehireSkills] operation failed", {
            fieldLabel: e2.label,
            errorName: t2 instanceof Error ? t2.name : typeof t2
          }), r && this.progressTracker.updateMissedProgress(e2.label);
        }
      }
    };
  }
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: async (e, t) => {
          if (locationClientSearch.isRipplehireLocationClientSearchRule(e)) {
            let r2;
            let n2 = Date.now(), o2 = locationClientSearch.getRipplehireLocationOriginalAnswer(this.answer, t).value;
            try {
              r2 = await locationClientSearch.resolveRipplehireLocationClientSearch(e.$input, o2, j);
            } catch (e2) {
              if (e2 instanceof cancellation.CancelledError || e2 instanceof cancellation.SkippedError) throw e2;
              r2 = {
                success: false,
                rounds: [],
                failureReason: "resolver-exception"
              };
            }
            return console.info(y, {
              surface: locationClientSearch.getRipplehireLocationClientSearchSurface(e.$input),
              ..._(r2, n2)
            }), C("location-field-complete", {
              committed: r2.success,
              ...k()
            }), r2.success;
          }
          let r = T(e);
          C("text-field-start", {
            fieldKind: r,
            ...k()
          });
          let n = await operations.fillInputTextField(e, t, (0, phoneCountryCode.resolveRipplehirePhoneCountryCode)(this.answer));
          return C("text-field-complete", {
            fieldKind: r,
            ...k()
          }), n;
        },
        options: {
          expectArray: false
        }
      },
      [enums.FIELD_TYPE.NUMBER]: {
        handler: (e, t) => operations.fillInputTextField(e, t),
        options: {
          expectArray: false
        }
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: async (e, t) => {
          if (e.label !== phoneCountryCode.RIPPLEHIRE_PHONE_COUNTRY_CODE_LABEL) return operations.fillSelectField(e, t);
          let r = A(), n = await operations.fillPhoneCountryCode(e, t);
          return C("phone-country", {
            ...r,
            afterEmailLength: A().contactEmailLength,
            afterPhoneLength: A().contactPhoneLength,
            committed: n
          }), n;
        },
        options: {
          expectArray: true
        }
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => operations.fillCheckboxField(e, t),
        options: {
          expectArray: true
        }
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => operations.fillRadioGroupField(e, t),
        options: {
          expectArray: true
        }
      }
    };
  }
  async doFillForm(e = false) {
    if (await this.initializeFillForm(), C("initialized"), this.entryAbortReason) return this.entryAbortReason;
    let t = await this.extractFormRules();
    C("rules-extracted", {
      ruleCount: t.length,
      requiredCount: t.filter((e2) => e2.required).length
    }), this.progressTracker.setFieldsRequiredStatus(t);
    let r = t.filter((e2) => !F(e2));
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
      regularRules: o2,
      locationRules: i2,
      skillsRules: a2
    } = I(t);
    C("skills-deferred", {
      extractedCount: t.filter((e2) => e2.type === enums.FIELD_TYPE.MULTI_SELECT).length,
      uniqueCount: a2.length
    }), await this.fillRegularFields(o2), C("ordinary-fields-complete", {
      ruleCount: o2.length,
      locationRuleCount: i2.length,
      ...k()
    });
    let l2 = this.answer?.country || this.answer?.profileData?.country || this.answer?.profile_data?.country;
    await operations.fillCountryFromStateFallback(l2) && this.progressTracker.updateFilledProgress(
      "Country"
    ), C("country-fallback-complete", k()), operations.agreementCheckboxField(), C(
      "agreement-complete",
      k()
    ), await this.fillRegularFields(a2), C("skills-complete", {
      executedCount: a2.length,
      ...k()
    }), await this.fillRegularFields(i2), C("regular-fields-complete", {
      ruleCount: t.length,
      ...A(),
      ...k()
    }), await this.bindSubmitButtonTracking(t);
    let s = await this.finalizeFillForm();
    return C("finalized", {
      resultType: null === s ? "null" : typeof s,
      ...A(),
      ...k()
    }), s;
  }
  async runPreFillForm() {
    this.entryAbortReason = null, this.entryAbortReason = await (0, entryNavigation.prepareRipplehireApplication)(), this.entryAbortReason || (0, operations.preselectExpectedSalaryCurrencyToUsd)();
  }
  async extractFormRules() {
    return await rules.extractRules();
  }
  getSiteName() {
    return "ripplehire";
  }
  async handleResumeUpload() {
    this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this.taskQueue.add(async () => {
      await operations.uploadResume(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
    }), await this.taskQueue.run();
  }
  async getAutofillSnapshot(e) {
    return rules.getFormSnapshot(e);
  }
  async getSubmitSnapshot() {
    return rules.getFormSnapshot();
  }
  getSubmitTrackingDelegationRoot() {
    return document;
  }
  resolveDelegatedSubmitButton(e) {
    return submitTracking.resolveRipplehireSubmitButton(e);
  }
  submitApplication() {
    submitTracking.getRipplehireSubmitButton()?.click();
  }
  cancelAutoFill() {
    this.taskQueue.clear();
  }
  constructor(...e) {
    super(...e), this.entryAbortReason = null;
  }
}

export {
  Ripplehire,
}
