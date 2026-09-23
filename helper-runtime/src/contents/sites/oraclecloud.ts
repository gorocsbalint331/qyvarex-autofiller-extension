// @ts-nocheck
/**
 * Oracle Cloud ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and oraclecloud/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "oraclecloud"
 */

import * as messaging from "@plasmohq/messaging";
import * as answerMethods from "../methods/answer.js";
import * as cancellation from "../methods/cancellation.js";
import * as dom from "../methods/dom.js";
import * as observer from "../methods/observer.js";
import * as track from "../methods/track.js";
import * as httpEnums from "../../enums/http.js";
import { BaseFiller } from "./base-filler.ts";
import * as addressOperation from "./oraclecloud/address-operation.ts";
import * as educationRawValues from "./oraclecloud/education-raw-values.ts";
import * as oracleAnswer from "./oraclecloud/answer.ts";
import * as operations from "./oraclecloud/operations.ts";
import * as rules from "./oraclecloud/rules.ts";
import * as oracleUrl from "./oraclecloud/url.ts";
import * as sectionResults from "./oraclecloud/section-results.ts";
import * as enums from "../../core/enums.js";
import * as autofillInfo from "../../store/autofillInfo.js";
import * as delay from "../../utils/delay.js";
import * as fieldLabel from "../../utils/fieldLabel.js";
function x() {
  if ("undefined" == typeof window) return false;
  try {
    let e = "jobright_oraclecloud_combobox_debug";
    return (
      "1" === new URLSearchParams(window.location?.search ?? "").get(e) ||
      window.localStorage?.getItem(e) === "1"
    );
  } catch {
    return false;
  }
}
function C(e, t = {}) {
  let r =
      e.startsWith("education-major-text:") ||
      "education:record-route" === e ||
      "education:pre-save-state" === e ||
      "education:save-result" === e ||
      "employment:record-route" === e ||
      "employment:save-result" === e,
    n = x();
  if (n || r)
    try {
      let r2 = n ? console.warn : console.info;
      r2(`[OracleCloud][Flow] ${e} ${JSON.stringify({ t: Date.now(), ...t })}`);
    } catch {}
}
function A(e) {
  if (!e || "object" != typeof e)
    return {
      errorType: typeof e,
    };
  let t = e;
  return {
    errorType:
      "string" == typeof t.name && t.name
        ? t.name
        : (e.constructor?.name ?? "object"),
    code: "string" == typeof t.code ? t.code : void 0,
    status:
      "number" == typeof t.status
        ? t.status
        : "number" == typeof t.statusCode
          ? t.statusCode
          : void 0,
    hasMessage: "string" == typeof t.message && t.message.length > 0,
  };
}
function k(e) {
  let t =
    e?.result?.action === "SELECT_OPTIONS" ? e.result.selected_values : [];
  return {
    action: e?.result?.action ?? null,
    selectedValueCount: t.length,
    selectedValueLengths: t.map((e2) => String(e2 ?? "").trim().length),
  };
}
let T = /* @__PURE__ */ new Set([
  "pageFooterNextButton",
  "bottom-navigation-next-button",
]);
function F(e) {
  return (
    e.textContent ||
    e.getAttribute("value") ||
    e.getAttribute("aria-label") ||
    ""
  )
    .replace(/\s+/g, " ")
    .trim();
}
function I(e) {
  return (
    e.classList?.contains("apply-flow-pagination__button") ||
    String(e.className || "").includes("apply-flow-pagination__button")
  );
}
function j(e) {
  let t = e.$input?.getAttribute?.("name"),
    r = String(t || e.label || "")
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();
  return "major" === r;
}
function D(e) {
  let t = e.getAttribute("data-automation-id");
  if (t && T.has(t)) return true;
  if (!I(e)) return false;
  let r = F(e).toLowerCase();
  return (
    "next" === r ||
    "continue" === r ||
    "submit" === r ||
    "apply" === r ||
    r.includes("next") ||
    r.includes("continue") ||
    r.includes("submit")
  );
}
class OracleCloud extends BaseFiller {
  mergeSectionResult(e, t, r) {
    let n = sectionResults.mergeOracleSectionResult(
      this.sectionResults[e],
      t,
      r,
    );
    ((this.sectionResults[e] = n), this.progressTracker.updateSectionResult(n));
  }
  markSectionResultRowMissed(e, t) {
    let r = this.sectionResults[e];
    if (!r) return;
    let n = sectionResults.markOracleSectionResultRowMissed(r, t);
    ((this.sectionResults[e] = n), this.progressTracker.updateSectionResult(n));
  }
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: async (e, t, r) => {
          let n = j(e),
            o2 = n
              ? educationRawValues.getOracleEducationRawValues(r ?? {}).rawMajor
              : void 0,
            i2 = o2 || t,
            a2 = o2 ? "raw-major" : "answer";
          n &&
            C("education-major-text:source", {
              answerLength: String(t ?? "").trim().length,
              rawMajorLength: o2?.length || 0,
              source: a2,
            });
          let s2 = await dom.fillInputTextField(e.$input, i2);
          return (
            n &&
              C("education-major-text:done", {
                source: a2,
                filled: false !== s2,
                readbackLength: String(e.$input?.value ?? "").trim().length,
              }),
            s2
          );
        },
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: async (e, t, r) => {
          let n = Array.isArray(t) ? t[0] : t,
            o2 = addressOperation.isOracleAddressLine1Rule(e),
            i2 = addressOperation.isOracleAddressLine1PlainInputRule(e);
          if (
            (o2 &&
              C("address:fill-start", {
                route: i2 ? "plain-input" : "combobox",
                rule: addressOperation.describeOracleAddressLine1Rule(e),
                hasAnswer: !!n,
                answerLength: String(n ?? "").trim().length,
              }),
            i2)
          ) {
            let t2 = await dom.fillInputTextField(e.$input, n);
            return (
              o2 &&
                C("address:fill-done", {
                  route: "plain-input",
                  filled: t2,
                  readbackLength: this.getRuleCurrentInputValue(e).length,
                }),
              t2
            );
          }
          if (!oracleAnswer.canFillOracleSelectRule(e, n))
            return (
              o2 &&
                C("address:fill-skip", {
                  reason: "invalid-select-answer",
                  route: "combobox",
                }),
              false
            );
          let a2 = await operations.fillSelectField(
            this.getRuleInputElement(e) ?? e.$input,
            n,
            e.label,
            educationRawValues.getOracleEducationRawValues(r ?? {}),
          );
          return (
            o2 &&
              C("address:fill-done", {
                route: "combobox",
                filled: a2,
                readbackLength: this.getRuleCurrentInputValue(e).length,
              }),
            a2
          );
        },
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.LISTBOX]: {
        handler: (e, t) => operations.fillListboxField(e.$input, t),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => operations.fillCheckBoxesField(e, t),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (e, t) => operations.fillRadioGroupField(e.$input, t),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: (e, t) => operations.fillDateField(e, t),
        options: {
          expectArray: false,
        },
      },
    };
  }
  getEmploymentOperationConfig(e) {
    let t = {};
    for (let [r, n] of Object.entries(this.operationConfig))
      n &&
        (t[r] = async (t2, r2, o2) => {
          C("employment:field-start", {
            recordIndex: e,
            label: t2.label,
            type: t2.type,
          });
          try {
            let i2 = await n(t2, r2, o2);
            return (
              C("employment:field-result", {
                recordIndex: e,
                label: t2.label,
                type: t2.type,
                filled: false !== i2,
              }),
              i2
            );
          } catch (r3) {
            throw (
              C("employment:field-error", {
                recordIndex: e,
                label: t2.label,
                type: t2.type,
                ...A(r3),
              }),
              r3
            );
          }
        });
    return t;
  }
  async extractFormRules() {
    return rules.getRules();
  }
  getSiteName() {
    return "oraclecloud";
  }
  getSubmitButtonSelector() {
    return '//button[@data-automation-id="pageFooterNextButton" or @data-automation-id="bottom-navigation-next-button"]';
  }
  getSubmitTrackingDelegationRoot() {
    return document;
  }
  resolveDelegatedSubmitButton(e) {
    let t = e.closest("button");
    return !t || t.disabled || "true" === t.getAttribute("aria-disabled")
      ? null
      : D(t)
        ? t
        : null;
  }
  async getAutofillSnapshot(e = []) {
    return ((this.submitTrackingRules = e), rules.getFormSnapshot(e));
  }
  async getSubmitSnapshot() {
    return rules.getFormSnapshot(this.submitTrackingRules);
  }
  getAdditionalAutofillSnapshotData(e) {
    return this.getSavedSectionSnapshots();
  }
  getAdditionalSubmitSnapshotData() {
    return this.getSavedSectionSnapshots();
  }
  getSavedSectionSnapshots() {
    return {
      education: [...this.savedEducationSnapshots],
      employment: [...this.savedExperienceSnapshots],
    };
  }
  submitApplication() {}
  postCoverLetterStatusIfChanged(e, t = false) {
    (t || this.lastCoverLetterStatus !== e) &&
      ((this.lastCoverLetterStatus = e), (0, dom.postCoverLetterStatus)(e));
  }
  syncCoverLetterStatusFromDom(e = false) {
    let t = operations.hasOracleCoverLetterSlot();
    return (this.postCoverLetterStatusIfChanged(t ? "required" : "", e), t);
  }
  isCoverLetterSlotMutation(e) {
    let t = (e2) =>
      e2.matches("cover-letter-upload-button") ||
      !!e2.closest("cover-letter-upload-button") ||
      !!e2.querySelector("cover-letter-upload-button");
    return e.some(
      (e2) =>
        !!(e2.target instanceof Element && t(e2.target)) ||
        [...e2.addedNodes, ...e2.removedNodes].some(
          (e3) => e3 instanceof Element && t(e3),
        ),
    );
  }
  watchCoverLetterSlot() {
    if (this.coverLetterSlotObserver) return;
    let e = document.body || document.documentElement;
    e &&
      ((this.coverLetterSlotObserver = new MutationObserver((e2) => {
        this.isCoverLetterSlotMutation(e2) &&
          this.syncCoverLetterStatusFromDom();
      })),
      this.coverLetterSlotObserver.observe(e, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "style", "hidden", "aria-hidden"],
      }));
  }
  async checkCoverLetter() {
    (this.syncCoverLetterStatusFromDom(true), this.watchCoverLetterSlot());
  }
  isOracleEmailGatePage() {
    return window.location.href.includes("/apply/email");
  }
  isOraclePinPage() {
    let e = Array.from(document.querySelectorAll("h1, h2, h3")).find(
        (e2) =>
          e2.textContent?.trim().toLowerCase() === "confirm your identity",
      ),
      t = Array.from(document.querySelectorAll("button")).find(
        (e2) => e2.textContent?.trim().toLowerCase() === "verify",
      ),
      r = Array.from(document.querySelectorAll("a, button, div, span")).find(
        (e2) => e2.textContent?.trim().toLowerCase() === "send new code",
      ),
      n = Array.from(document.querySelectorAll("input")).filter((e2) => {
        let t2 = e2,
          r2 = Number(t2.maxLength || 0);
        return "text" === t2.type && 1 === r2 && !t2.disabled;
      });
    return !!e && !!t && !!r && n.length >= 4;
  }
  isOracleVerificationStep() {
    return this.isOraclePinPage();
  }
  isOracleApplyFlowPage() {
    return oracleUrl.isOracleApplyPath(window.location.pathname);
  }
  async ensureToken() {
    if (this.token) return;
    let e = oracleUrl.normalizeOracleApplyTokenUrl(window.location.href);
    this.token = await messaging.sendToBackground({
      name: "getSiteToken",
      body: {
        url: e,
      },
    });
  }
  hasCountryDependentAddressFields() {
    return !!document.querySelector(
      'input[name="city"], input[name="region2"], input[name="postalCode"], input[name="region1"]',
    );
  }
  async prefillCountryBeforeRules() {
    ((this.latestAutofillInfo = null),
      (this.currentRunCountry = null),
      (this.currentRunCountryCommitted = false));
    let e = await autofillInfo.useAutofillInfoStore
      .getState()
      .fetchAutofillInfo()
      .catch(() => null);
    this.latestAutofillInfo = e;
    let t = e?.location?.country;
    if (
      ((this.currentRunCountry =
        "string" == typeof t && t.trim() ? t.trim() : null),
      C("country:prefill:prepared", {
        hasFreshCountry: !!this.currentRunCountry,
        freshCountryLength: this.currentRunCountry?.length ?? 0,
        countryInputPresent: !!document.querySelector(
          'input[name="country"], input[id="country-12"]',
        ),
        refreshDependentAddress: true,
      }),
      !this.currentRunCountry ||
        ((this.currentRunCountryCommitted = await (0, operations.fillCountry)(
          this.currentRunCountry,
          void 0,
          {
            refreshDependentAddress: true,
          },
        )),
        C("country:prefill:result", {
          committed: this.currentRunCountryCommitted,
          dependentAddressFieldsPresent:
            this.hasCountryDependentAddressFields(),
        }),
        !this.currentRunCountryCommitted))
    )
      return;
    let r = await observer.waitForCondition(
      () => this.hasCountryDependentAddressFields(),
      {
        timeout: 8e3,
        interval: 200,
        observeTarget: document.body,
      },
    );
    (C("country:prefill:dependent-address-ready", {
      committed: this.currentRunCountryCommitted,
      dependentAddressFieldsReady: r,
    }),
      await delay.delay(300));
  }
  async requestFormAnswers(e, t, r = {}) {
    (C("answer:prepare", {
      ruleCount: e.length,
      fromAgent: t,
      updateTimeTrace: false !== r.updateTimeTrace,
    }),
      await this.ensureToken(),
      C("answer:token-ready", {
        hasToken: !!this.token,
      }),
      false !== r.updateTimeTrace &&
        (this.timeTrace.requestStartTime = Date.now()),
      C("answer:request-send", {
        ruleCount: e.length,
      }));
    let n = this.captureFalconResponseRun(),
      o2 = await answerMethods.getElementRules(
        e,
        "oraclecloud",
        this.token,
        t,
        this.resumeInfo.id,
        this.resumeInfo.tailorId,
      );
    this.recordFalconResponse(o2, n);
    let l2 = oracleAnswer.formatAnswer(o2),
      s2 = oracleAnswer.applyOracleAutofillLocationFallbacks(
        l2,
        this.latestAutofillInfo,
      );
    return (
      C("answer:request-settled", {
        regularCount: Object.keys(l2.regular ?? {}).length,
        educationCount: l2.education?.length ?? 0,
        workExperienceCount: l2.workExperience?.length ?? 0,
        profileLocationFallbackFields: s2,
      }),
      cancellation.checkpoint(),
      false !== r.updateTimeTrace &&
        (this.timeTrace.fillStartTime = Date.now()),
      l2
    );
  }
  getCurrentPageUrl() {
    return window.location.href;
  }
  async resolveAutofillOperation(e, t) {
    let r;
    let n = Date.now();
    C("resolve:send", {
      fieldType: e.field_type,
      hasOriginalAnswer: !!e.original_answer,
      originalAnswerLength: e.original_answer.length,
      endpoint: e.search_request_schema.url,
    });
    let i2 = false,
      a2 = new Promise((e2) => {
        r = setTimeout(() => {
          ((i2 = true), e2(null));
        }, this.addressResolveTimeoutMs);
      }),
      l2 = Promise.resolve()
        .then(() =>
          messaging.sendToBackground({
            name: "resolveAutofillOperation",
            body: {
              operation: e,
              source: "oraclecloud",
            },
          }),
        )
        .catch(
          (e2) => (
            C("resolve:error", {
              ms: Date.now() - n,
              message: String(e2),
            }),
            null
          ),
        );
    try {
      let e2 = await Promise.race([l2, a2]);
      return (
        C("resolve:settled", {
          ms: Date.now() - n,
          timedOut: i2,
          hasResult: !!e2,
          ...k(e2),
        }),
        i2 && t?.(l2),
        e2 ?? null
      );
    } catch (e2) {
      return (
        C("resolve:error", {
          ms: Date.now() - n,
          message: String(e2),
        }),
        null
      );
    } finally {
      void 0 !== r && clearTimeout(r);
    }
  }
  async resolveAddressLine1Record(e, t) {
    let r = e.find(addressOperation.isOracleAddressLine1SearchRule);
    if (!r)
      return (
        C("address:resolve-skip", {
          reason: "no-searchable-address-rule",
          addressRules: e
            .filter(addressOperation.isOracleAddressLine1Rule)
            .map(addressOperation.describeOracleAddressLine1Rule),
        }),
        t
      );
    C("address:resolve-candidate", {
      rule: addressOperation.describeOracleAddressLine1Rule(r),
    });
    let n = this.activeOracleAddressResolveRun;
    return await addressOperation.resolveOracleAddressLine1Record({
      currentUrl: this.getCurrentPageUrl(),
      rule: r,
      record: t,
      resolveOperation: (e2) =>
        this.resolveAutofillOperation(e2, (o2) => {
          n &&
            this.applyLateAddressLine1Resolution({
              resolveRun: n,
              rule: r,
              record: t,
              fallbackSearchValue: e2.original_answer,
              lateResolution: o2,
            });
        }),
    });
  }
  beginOracleAddressResolveRun() {
    let e = () => {},
      t = {
        id: ++this.oracleAddressResolveRunId,
        signal: this.fillCancel.signal ?? null,
        pageUrl: this.getCurrentPageUrl(),
        normalFillDone: new Promise((t2) => {
          e = t2;
        }),
        allowLateApply: false,
        finished: false,
        finishNormalFill: (r) => {
          t.finished || ((t.finished = true), (t.allowLateApply = r), e());
        },
      };
    return ((this.activeOracleAddressResolveRun = t), t);
  }
  applyLateAddressLine1Resolution({
    resolveRun: e,
    rule: t,
    record: r,
    fallbackSearchValue: n,
    lateResolution: o2,
  }) {
    let a2 = String(r[t.label] ?? "").trim();
    o2.then(async (o3) => {
      let l2 = addressOperation.getOracleResolvedAddressLine1Value(o3);
      if (
        (C("resolve:late-settled", {
          action: o3?.result?.action ?? null,
          resolvedValueLength: l2.length,
        }),
        !l2)
      )
        return;
      await e.normalFillDone;
      let s2 = e.id === this.oracleAddressResolveRunId,
        c2 = this.getCurrentPageUrl() === e.pageUrl;
      if (!e.allowLateApply || !s2 || e.signal?.aborted || !c2) {
        C("resolve:late-discard", {
          reason: e.allowLateApply
            ? s2
              ? e.signal?.aborted
                ? "cancelled"
                : "page-changed"
              : "stale-run"
            : "normal-fill-not-complete",
        });
        return;
      }
      let d2 = this.getRuleCurrentInputValue(t),
        p2 = (e2) => e2.replace(/\s+/g, " ").trim().toLowerCase(),
        m2 = p2(d2),
        h2 = /* @__PURE__ */ new Set([p2(a2), p2(n)]);
      if (d2 && !h2.has(m2)) {
        C("resolve:late-discard", {
          reason: "address-value-changed",
          currentValueLength: d2.length,
          originalValueLength: a2.length,
          fallbackSearchValueLength: n.length,
        });
        return;
      }
      let g2 = this.getRuleInputElement(t);
      if (!g2) {
        C("resolve:late-discard", {
          reason: "address-input-missing",
        });
        return;
      }
      let b2 = {
          ...t,
          $input: g2,
        },
        y2 = {
          ...r,
          [t.label]: l2,
        };
      for (let e2 of answerMethods.getRegularOperations(
        [b2],
        y2,
        this.operationConfig,
      ))
        this.taskQueue.add(e2);
      (await this.taskQueue.run(),
        C("resolve:late-apply", {
          resolvedValueLength: l2.length,
        }),
        track.postStatus(
          "filling",
          this.progressTracker.fieldStatus,
          this.timeTrace,
        ));
    }).catch((e2) => {
      C("resolve:late-error", {
        errorType: e2 instanceof Error ? e2.name : typeof e2,
      });
    });
  }
  getRuleInputElement(e) {
    let t = e.$input;
    if (!t) return null;
    if (
      false === t.isConnected &&
      "undefined" != typeof document &&
      "function" == typeof t.getAttribute
    ) {
      let e2 = t.getAttribute("name"),
        r = e2
          ? document.querySelector(
              `input[name="${e2}"], textarea[name="${e2}"], select[name="${e2}"]`,
            )
          : null;
      if (r) return r;
    }
    return t;
  }
  getRuleCurrentInputValue(e) {
    let t = (e2) => {
      let t2 =
        e2?.classList?.contains("cx-select-input--invalid") ||
        e2?.getAttribute?.("aria-invalid") === "true" ||
        e2?.closest?.(".input-row")?.classList?.contains("input-row--invalid");
      if (t2) return "";
      let r = e2 && "value" in e2 ? e2.value : "";
      return "string" == typeof r ? r.trim() : "";
    };
    return t(this.getRuleInputElement(e));
  }
  async clearSkippedOracleAddressDependentRules(e) {
    let t = e.filter(oracleAnswer.shouldSkipOracleAddressDependentFill);
    if (0 !== t.length)
      for (let e2 of (C("deps:skip-clear", {
        labels: t.map((e3) => e3.label),
      }),
      t)) {
        let t2 = this.getRuleInputElement(e2),
          r =
            t2 && "value" in t2 && "string" == typeof t2.value
              ? t2.value.trim()
              : "";
        (r &&
          (t2 instanceof HTMLInputElement || t2 instanceof HTMLTextAreaElement
            ? await (0, dom.fillInputTextField)(t2, "")
            : t2 instanceof HTMLSelectElement &&
              ((t2.value = ""),
              t2.dispatchEvent(
                new Event("input", {
                  bubbles: true,
                }),
              ),
              t2.dispatchEvent(
                new Event("change", {
                  bubbles: true,
                }),
              ))),
          this.progressTracker.updateMissedProgress(e2.label));
      }
  }
  async waitForOracleAddressDependentAutofill(e) {
    0 !== e.length &&
      (await observer.waitForCondition(
        () => e.every((e2) => !!this.getRuleCurrentInputValue(e2)),
        {
          timeout: 1500,
          interval: 150,
          observeTarget: document.body,
        },
      ));
  }
  markFilledOracleAddressDependentRules(
    e,
    t = /* @__PURE__ */ new Set(),
    r = /* @__PURE__ */ new Set(),
  ) {
    for (let n of e)
      !t.has(n.label) &&
        !r.has(n.label) &&
        this.getRuleCurrentInputValue(n) &&
        (this.progressTracker.updateFilledProgress(n.label), r.add(n.label));
  }
  getUnfilledOracleAddressDependentRules(e) {
    return e.filter((e2) => !this.getRuleCurrentInputValue(e2));
  }
  hasOracleRegularAnswer(e) {
    try {
      return (
        answerMethods.findValueInRecord(e.label, this.answer.regular),
        true
      );
    } catch {
      return false;
    }
  }
  async fillOracleAddressDependentRules(e, t = true) {
    if (0 !== e.length) {
      for (let r of e)
        this.taskQueue.add(async () => {
          let e2 = this.getRuleInputElement(r),
            n = e2
              ? {
                  ...r,
                  $input: e2,
                }
              : r,
            [o2] = answerMethods.getRegularOperations(
              [n],
              this.answer.regular,
              this.operationConfig,
              t,
            );
          await o2?.();
        });
      await this.taskQueue.run();
    }
  }
  reconcileOracleDependentProgress(e) {
    for (let t of e) {
      let e2 = fieldLabel.normalizeFieldLabel(t.label),
        r = !!this.getRuleCurrentInputValue(t),
        n = this.progressTracker.fieldStatus.filledFields.some(
          (t2) => fieldLabel.normalizeFieldLabel(t2) === e2,
        ),
        o2 = this.progressTracker.fieldStatus.missingFields.some(
          (t2) => fieldLabel.normalizeFieldLabel(t2) === e2,
        );
      r && !n
        ? this.progressTracker.updateFilledProgress(t.label)
        : r || o2 || this.progressTracker.updateMissedProgress(t.label);
    }
  }
  async resolveOracleAddressDependentRules(e) {
    if (0 === e.length) return;
    let t = e.filter(
        (e2) => !oracleAnswer.shouldSkipOracleAddressDependentFill(e2),
      ),
      r = () =>
        e.map((e2) => ({
          label: e2.label,
          value: this.getRuleCurrentInputValue(e2),
        }));
    (C("deps:start", {
      values: r(),
    }),
      await this.waitForOracleAddressDependentAutofill(t),
      C("deps:wait-done", {
        values: r(),
      }),
      await this.clearSkippedOracleAddressDependentRules(e));
    let n = /* @__PURE__ */ new Set();
    this.markFilledOracleAddressDependentRules(t, /* @__PURE__ */ new Set(), n);
    let o2 = t.filter(oracleAnswer.isOraclePostalCodeDependentRule),
      i2 = this.getUnfilledOracleAddressDependentRules(o2),
      a2 = /* @__PURE__ */ new Set();
    if (i2.length > 0) {
      for (let e2 of (C("deps:postal-first", {
        labels: i2.map((e3) => e3.label),
      }),
      await this.fillOracleAddressDependentRules(i2),
      i2))
        a2.add(e2.label);
      (await this.waitForOracleAddressDependentAutofill(t),
        C("deps:postal-wait-done", {
          values: r(),
        }),
        this.markFilledOracleAddressDependentRules(
          t,
          new Set(i2.map((e2) => e2.label)),
          n,
        ));
    }
    let l2 = this.getUnfilledOracleAddressDependentRules(t).filter(
      oracleAnswer.isOracleCityDependentRule,
    );
    if (l2.length > 0) {
      for (let e2 of (C("deps:city-second", {
        labels: l2.map((e3) => e3.label),
      }),
      await this.fillOracleAddressDependentRules(l2),
      l2))
        a2.add(e2.label);
      (await this.waitForOracleAddressDependentAutofill(t),
        C("deps:city-wait-done", {
          values: r(),
        }),
        this.markFilledOracleAddressDependentRules(
          t,
          new Set(l2.map((e2) => e2.label)),
          n,
        ));
    }
    let s2 = this.getUnfilledOracleAddressDependentRules(t).filter(
      (e2) => !a2.has(e2.label),
    );
    (C("deps:unfilled", {
      labels: s2.map((e2) => e2.label),
    }),
      s2.length > 0 && (await this.fillOracleAddressDependentRules(s2)),
      await (0, d.waitForComboQuestionsToSettle)(
        this.comboQuestionSettleDelayMs,
      ));
    let u2 = this.getUnfilledOracleAddressDependentRules(o2).filter((e2) =>
      this.hasOracleRegularAnswer(e2),
    );
    (u2.length > 0 &&
      (C("deps:postal-final", {
        labels: u2.map((e2) => e2.label),
      }),
      await this.fillOracleAddressDependentRules(u2, false),
      this.reconcileOracleDependentProgress(u2),
      C("deps:postal-final-done", {
        values: r(),
      })),
      C("deps:done", {
        fallback: s2.length > 0,
        postalRefilled: u2.length > 0,
      }));
  }
  getOracleSkillValues() {
    let e = this.answer,
      t = (e2) => "string" == typeof e2 || Array.isArray(e2),
      r = e?.regular ?? {},
      n = r.Skills ?? r.Skill ?? r.skills ?? r.skill;
    if (t(n)) return n;
    let o2 = e?.profileData ?? e?.profile_data ?? {},
      i2 = o2.Skills ?? o2.Skill ?? o2.skills ?? o2.skill;
    return t(i2) ? i2 : (e?.skills ?? []);
  }
  getOracleLanguageValues() {
    let e = this.answer,
      t = e?.regular ?? {},
      r = t.Languages ?? t.Language ?? t.languages ?? t.language;
    if (null != r) return r;
    let n = e?.profileData ?? e?.profile_data ?? {},
      o2 = n.Languages ?? n.Language ?? n.languages ?? n.language;
    if (null != o2) return o2;
    let i2 = Array.isArray(n.skillList) ? n.skillList : [],
      a2 = i2.flatMap((e2) => {
        let t2 =
          "string" == typeof e2?.category ? e2.category.toLowerCase() : "";
        return t2.includes("language") && Array.isArray(e2?.skills)
          ? e2.skills
          : [];
      });
    if (a2.length > 0) return a2;
    let l2 = n.skills;
    return l2 && "object" == typeof l2 && !Array.isArray(l2)
      ? (l2.Language ?? l2.Languages ?? l2.language ?? l2.languages ?? [])
      : [];
  }
  async getRulesAndAnswer(e) {
    (C("rules:start", {
      fromAgent: e,
    }),
      await this.prefillCountryBeforeRules(),
      C("rules:country-prefill-done", {
        hasCountry: !!this.currentRunCountry,
        committed: this.currentRunCountryCommitted,
      }));
    let t = await rules.getRules(),
      r = this.isOracleEmailGatePage(),
      n = this.isOracleVerificationStep(),
      o2 = !!document.querySelector("apply-flow-block");
    if (
      (C("rules:extracted", {
        ruleCount: t.length,
        isEmailGate: r,
        isVerificationStep: n,
        hasApplySurface: o2,
        addressRules: t
          .filter(addressOperation.isOracleAddressLine1Rule)
          .map(addressOperation.describeOracleAddressLine1Rule),
      }),
      0 === t.length)
    )
      return (
        C("rules:empty-local-failure", {
          ruleCount: t.length,
          isEmailGate: r,
          isVerificationStep: n,
          hasApplySurface: o2,
        }),
        track.sendHttpStatusMessage(httpEnums.CUSTOM_ERROR_CODES.NO_ELEMENTS),
        httpEnums.CUSTOM_ERROR_CODES.NO_ELEMENTS
      );
    (this.progressTracker.setFieldsRequiredStatus(t),
      await this.fillCountryRulesAndUpdateProgress(
        t.filter(oracleAnswer.isOracleProfileCountryRule),
      ),
      C("rules:country-fill-done"));
    let i2 = oracleAnswer.excludeOracleProfileCountryRules(t);
    return (
      0 === i2.length
        ? (C("rules:local-only-country", {
            ruleCount: t.length,
            countryRuleCount: t.length,
            countryCommitted: this.currentRunCountryCommitted,
          }),
          (this.answer = {
            education: [],
            workExperience: [],
            skills: [],
            regular: {},
          }))
        : ((this.answer = await this.requestFormAnswers(i2, e)),
          C("rules:answer-ready", {
            regularCount: Object.keys(this.answer.regular ?? {}).length,
          })),
      t
    );
  }
  async fillCountryRulesAndUpdateProgress(e) {
    if (0 === e.length) return;
    let t = [];
    for (let r2 of e)
      t.push(await operations.fillCountry(this.currentRunCountry, r2.$input));
    let r = e[0].label;
    t.every(Boolean)
      ? this.progressTracker.updateFilledProgress(r)
      : this.progressTracker.updateMissedProgress(r);
  }
  async prepareOracleLinkRules(e) {
    let t = e.filter(oracleAnswer.isOracleLinkRule);
    if (0 === t.length) return e;
    let r = oracleAnswer.applyOracleProfileLinkAnswers(
      this.answer,
      this.latestAutofillInfo,
    );
    if (
      0 === r.length ||
      (await operations.ensureOracleLinkRows(r.length), r.length <= t.length)
    )
      return e;
    let n = await rules.getRules(),
      o2 = n.filter(oracleAnswer.isOracleLinkRule),
      i2 = new Set(t.map((e2) => e2.label));
    for (let e2 of o2)
      i2.has(e2.label) || this.progressTracker.updateFieldRequiredStatus(e2);
    return [...e.filter((e2) => !oracleAnswer.isOracleLinkRule(e2)), ...o2];
  }
  async fillRegularRules(e) {
    let t = await this.prepareOracleLinkRules(e),
      r = oracleAnswer
        .excludeOracleProfileCountryRules(
          oracleAnswer.orderOracleRegularRules(t),
        )
        .filter(
          (e2) =>
            !rules.isOracleSkillsRule(e2) && !rules.isOracleLanguagesRule(e2),
        ),
      n = r.filter(addressOperation.isOracleAddressLine1Rule),
      o2 = n.filter(addressOperation.isOracleAddressLine1SearchRule),
      a2 = n.length > 0,
      l2 = o2.length > 0,
      s2 =
        l2 &&
        o2.some((e2) =>
          addressOperation.hasOracleAddressLine1Value(e2, this.answer.regular),
        ),
      u2 = n.some(
        (e2) =>
          addressOperation.isOracleAddressLine1PlainInputRule(e2) &&
          (0, addressOperation.hasOracleAddressLine1Value)(
            e2,
            this.answer.regular,
          ),
      ),
      c2 = r.filter(oracleAnswer.isOracleAddressDependentRule),
      d2 = s2 ? c2 : [];
    C("regular:plan", {
      hasAddressLine1: a2,
      hasAddressLine1Search: l2,
      hasAddressLine1Answer: s2,
      hasPlainAddressLine1Answer: u2,
      addressRules: n.map((e2) => ({
        ...addressOperation.describeOracleAddressLine1Rule(e2),
        hasAnswer: addressOperation.hasOracleAddressLine1Value(
          e2,
          this.answer.regular,
        ),
      })),
      dependents: d2.map((e2) => e2.label),
    });
    let p2 = l2
        ? this.resolveAddressLine1Record(r, this.answer.regular)
        : Promise.resolve(this.answer.regular),
      h2 = r.filter(
        (e2) =>
          !oracleAnswer.shouldSkipOracleAddressDependentFill(e2) &&
          !(0, addressOperation.isOracleAddressLine1Rule)(e2) &&
          !((s2 || u2) && oracleAnswer.isOracleAddressDependentRule(e2)),
      );
    for (let e2 of (C("regular:immediate", {
      labels: h2.map((e3) => e3.label),
    }),
    answerMethods.getRegularOperations(
      h2,
      this.answer.regular,
      this.operationConfig,
    )))
      this.taskQueue.add(e2);
    (await this.taskQueue.run(),
      C("regular:immediate-done"),
      C("regular:resolve-await"),
      (this.answer.regular = await p2));
    let b2 =
      l2 &&
      o2.some((e2) =>
        addressOperation.hasOracleAddressLine1Value(e2, this.answer.regular),
      );
    if (
      (C("regular:resolve-await-done", {
        hasResolvedAddressLine1Answer: b2,
        addressRules: n.map((e2) => ({
          ...addressOperation.describeOracleAddressLine1Rule(e2),
          hasAnswer: addressOperation.hasOracleAddressLine1Value(
            e2,
            this.answer.regular,
          ),
        })),
      }),
      n.length > 0)
    ) {
      let e2 =
        n.every((e3) => this.getRuleCurrentInputValue(e3)) &&
        d2.length > 0 &&
        d2.every((e3) => this.getRuleCurrentInputValue(e3));
      if (e2)
        for (let e3 of (C("regular:addressline-skip", {
          reason: "already-filled",
        }),
        n))
          this.progressTracker.updateFilledProgress(e3.label);
      else {
        for (let e3 of (C("regular:addressline", {
          addressRules: n.map((e4) => ({
            ...addressOperation.describeOracleAddressLine1Rule(e4),
            hasAnswer: addressOperation.hasOracleAddressLine1Value(
              e4,
              this.answer.regular,
            ),
          })),
        }),
        answerMethods.getRegularOperations(
          n,
          this.answer.regular,
          this.operationConfig,
        )))
          this.taskQueue.add(e3);
        (await this.taskQueue.run(), C("regular:addressline-done"));
      }
    }
    (C("regular:dependents"),
      b2
        ? await this.resolveOracleAddressDependentRules(d2)
        : u2
          ? await this.fillOracleAddressDependentRules(
              c2.filter(
                (e2) =>
                  !(0, oracleAnswer.shouldSkipOracleAddressDependentFill)(e2),
              ),
            )
          : await this.fillOracleAddressDependentRules(
              d2.filter(
                (e2) =>
                  !(0, oracleAnswer.shouldSkipOracleAddressDependentFill)(e2),
              ),
            ),
      C("regular:done"));
  }
  async runComboQuestionAutofillIfNeeded(e, t) {
    if (!this.hasComboQuestions) return e;
    await d.waitForComboQuestionsToSettle(this.comboQuestionSettleDelayMs);
    let r = await rules.getRules(),
      n = d.getNewComboQuestionRules(e, r);
    if (0 === n.length) return e;
    for (let e2 of n) this.progressTracker.updateFieldRequiredStatus(e2);
    let o2 = n.filter(oracleAnswer.isOracleProfileCountryRule),
      i2 = oracleAnswer.excludeOracleProfileCountryRules(n);
    if (i2.length > 0) {
      let e2 = await this.requestFormAnswers(i2, t, {
        updateTimeTrace: false,
      });
      this.answer = d.mergeComboQuestionAnswer(this.answer, e2, i2);
    }
    return (
      await this.fillCountryRulesAndUpdateProgress(o2),
      await this.fillRegularRules(i2),
      [...e, ...n]
    );
  }
  async handleOracleEmailGate(e) {
    ((this.timeTrace.rulesParseStartTime = Date.now()),
      this.progressTracker.clear(),
      this.taskQueue.clear());
    try {
      let t = await this.getRulesAndAnswer(e);
      if ("string" == typeof t) return t;
      let r = [
        ...answerMethods.getRegularOperations(
          oracleAnswer
            .orderOracleRegularRules(
              (0, oracleAnswer.excludeOracleProfileCountryRules)(t),
            )
            .filter(
              (e2) =>
                !(0, oracleAnswer.shouldSkipOracleAddressDependentFill)(e2) &&
                !rules.isOracleSkillsRule(e2) &&
                !(0, rules.isOracleLanguagesRule)(e2),
            ),
          this.answer.regular,
          this.operationConfig,
        ),
      ];
      for (let e2 of r) this.taskQueue.add(e2);
      await this.taskQueue.run();
      let n = await operations.proceedOracleEmailGateStep();
      if (!n) return this.progressTracker.generateFinalProgress();
      let o2 = await observer.waitForCondition(
        () =>
          (this.isOracleApplyFlowPage() &&
            !this.isOracleEmailGatePage() &&
            !!document.querySelector("apply-flow-block")) ||
          this.isOracleVerificationStep(),
        {
          timeout: 2e4,
          interval: 200,
          observeTarget: document.body,
        },
      );
      if (!o2)
        return (
          console.warn(
            "[oraclecloud] email-gate: no apply form or verification step detected after next",
          ),
          this.progressTracker.generateFinalProgress()
        );
      if (this.isOracleVerificationStep())
        return this.progressTracker.generateFinalProgress();
      return this.fillForm(e);
    } catch (e2) {
      if (
        e2 instanceof answerMethods.HTTPError ||
        e2 instanceof answerMethods.ResumeMissingCodeError
      )
        return ((0, track.sendHttpStatusMessage)(e2.message), e2.message);
      return (
        console.error("Unknown error occurred:", e2),
        this.progressTracker.generateFinalProgress()
      );
    }
  }
  async doFillForm(e = false) {
    let t = this.beginOracleAddressResolveRun();
    (this.resetFalconResponseAccumulator(),
      C("fill:entry", {
        fromAgent: e,
        isApplyFlow: this.isOracleApplyFlowPage(),
        isEmailGate: this.isOracleEmailGatePage(),
        isPinPage: this.isOraclePinPage(),
      }));
    let r = await operations.proceedOracleJobDetailToApply();
    if (
      (C("fill:apply-flow-check", {
        enteredApplyFlow: r,
        isEmailGate: this.isOracleEmailGatePage(),
      }),
      (r && this.isOracleEmailGatePage()) || this.isOracleEmailGatePage())
    )
      return (t.finishNormalFill(false), this.handleOracleEmailGate(e));
    if (this.isOraclePinPage())
      return (
        t.finishNormalFill(false),
        this.progressTracker.generateFinalProgress()
      );
    ((this.timeTrace.rulesParseStartTime = Date.now()),
      this.progressTracker.clear(),
      (this.savedEducationSnapshots = []),
      (this.savedExperienceSnapshots = []),
      (this.sectionResults = {}),
      this.taskQueue.clear(),
      this.taskQueue.add(async () => {
        await operations.cleanEduAndExp();
      }),
      C("fill:cleanup-start"),
      await this.taskQueue.run(),
      C("fill:cleanup-done"));
    try {
      let r2 = await this.getRulesAndAnswer(e);
      if ("string" == typeof r2) return r2;
      let n = operations.hasOracleCoverLetterSlot(),
        o2 = rules.getSubmitButtonText();
      (track.bindSubmitButton(
        o2,
        this.progressTracker.fieldStatus,
        this.timeTrace,
      ),
        await this.fillRegularRules(r2),
        (r2 = await this.runComboQuestionAutofillIfNeeded(r2, e)));
      let l2 = false,
        s2 = false,
        c2 = async (e2) => {
          s2 = true;
          let t2 = await operations.cancelEducation();
          return (
            C("education:failed-row-close-result", {
              recordIndex: e2,
              closed: t2,
            }),
            t2 || (l2 = true),
            t2
          );
        };
      for (let e2 = 0; e2 < this.answer.education.length; e2++) {
        let t2 = this.answer.education[e2],
          r3 = await rules.addAndGetEduRules();
        if (!r3) {
          if (
            (C("education:rules-not-ready", {
              recordIndex: e2,
            }),
            !(await c2(e2)))
          )
            break;
          continue;
        }
        let n2 = educationRawValues.getOracleEducationRawValues(
            t2,
            this.latestAutofillInfo?.education?.[e2],
          ),
          o3 = {
            ...t2,
            ...n2,
          },
          a2 = r3.children || [];
        C("education:record-route", {
          recordIndex: e2,
          recordKeys: Object.keys(t2),
          rawSchoolLength: n2.rawSchool?.length || 0,
          rawMajorLength: n2.rawMajor?.length || 0,
          fields: a2.map((e3) => ({
            label: e3.label,
            fieldName: e3.$input?.getAttribute?.("name") || "",
            type: e3.type,
            isMajorText: j(e3),
          })),
        });
        let s3 = answerMethods.getEducationOperations(
          [r3],
          [o3],
          this.operationConfig,
          void 0,
          {
            onSkipped: () => {
              l2 = true;
            },
            onSectionResultChanged: (t3) =>
              this.mergeSectionResult("education", t3, e2),
          },
          {
            keepCurrentFieldOnExit: true,
          },
        );
        for (let e3 of s3) this.taskQueue.add(e3);
        if ((await this.taskQueue.run(), l2)) break;
        C("education:pre-save-state", {
          recordIndex: e2,
          fields: a2.map((e3) => ({
            label: e3.label,
            valueLength: e3.$input?.value?.length || 0,
            ariaInvalid: e3.$input?.getAttribute?.("aria-invalid") || null,
            connected: e3.$input?.isConnected !== false,
          })),
        });
        let u2 = rules.getSectionRowSnapshot(r3),
          d3 = await operations.saveEducation();
        if (
          (C("education:save-result", {
            recordIndex: e2,
            saved: d3,
          }),
          !d3)
        ) {
          if (
            (this.markSectionResultRowMissed("education", e2), !(await c2(e2)))
          )
            break;
          continue;
        }
        this.savedEducationSnapshots.push(u2);
      }
      (this.answer.education.length > 0 &&
        cancellation.updateCurrentField(null),
        l2 || s2
          ? this.progressTracker.updateMissedProgress("Education")
          : this.answer.education.length > 0 &&
            this.progressTracker.updateFilledProgress("Education"));
      let d2 = false,
        f2 = false;
      for (let e2 = 0; e2 < this.answer.workExperience.length; e2++) {
        let t2 = this.answer.workExperience[e2],
          r3 = await rules.addAndGetWorkRules(),
          n2 = r3.children || [];
        C("employment:record-route", {
          recordIndex: e2,
          recordKeys: Object.keys(t2),
          fields: n2.map((e3) => ({
            label: e3.label,
            fieldName: e3.$input?.getAttribute?.("name") || "",
            type: e3.type,
            isDate: e3.type === enums.FIELD_TYPE.DATE,
          })),
        });
        let o3 = answerMethods.getEmploymentOperations(
          [r3],
          [t2],
          this.getEmploymentOperationConfig(e2),
          void 0,
          {
            onSkipped: () => {
              d2 = true;
            },
            onSectionResultChanged: (t3) =>
              this.mergeSectionResult("employment", t3, e2),
          },
          {
            keepCurrentFieldOnExit: true,
          },
        );
        for (let e3 of o3) this.taskQueue.add(e3);
        if ((await this.taskQueue.run(), d2)) break;
        let a2 = rules.getSectionRowSnapshot(r3),
          l3 = await operations.saveExperience();
        if (
          (C("employment:save-result", {
            recordIndex: e2,
            saved: l3,
          }),
          !l3)
        ) {
          ((f2 = true), this.markSectionResultRowMissed("employment", e2));
          continue;
        }
        this.savedExperienceSnapshots.push(a2);
      }
      (this.answer.workExperience.length > 0 &&
        cancellation.updateCurrentField(null),
        d2 || f2
          ? this.progressTracker.updateMissedProgress("Employment")
          : this.answer.workExperience.length > 0 &&
            this.progressTracker.updateFilledProgress("Employment"));
      let m2 = r2.find(rules.isOracleSkillsRule);
      m2 &&
        (this.taskQueue.add(async () => {
          cancellation.updateCurrentField(m2.label);
          try {
            let e2 = await operations.fillSkills(this.getOracleSkillValues());
            e2
              ? this.progressTracker.updateFilledProgress(m2.label)
              : this.progressTracker.updateMissedProgress(m2.label);
          } finally {
            cancellation.updateCurrentField(null);
          }
        }),
        await this.taskQueue.run());
      let b2 = r2.find(rules.isOracleLanguagesRule);
      return (
        b2 &&
          (this.taskQueue.add(async () => {
            cancellation.updateCurrentField(b2.label);
            try {
              let e2 = await operations.fillLanguages(
                this.getOracleLanguageValues(),
              );
              e2
                ? this.progressTracker.updateFilledProgress(b2.label)
                : this.progressTracker.updateMissedProgress(b2.label);
            } finally {
              cancellation.updateCurrentField(null);
            }
          }),
          await this.taskQueue.run()),
        this.disableUploadResume
          ? this.progressTracker.updateMissedProgress("Resume/CV")
          : this.taskQueue.add(async () => {
              let e2 = await operations.uploadResume(
                this.resumeInfo,
                this.progressTracker.updateFieldRequiredStatus,
                this.progressTracker.updateFilledProgress,
              );
              e2 || this.progressTracker.updateMissedProgress("Resume/CV");
            }),
        n &&
          this.coverLetter?.coverLetterId &&
          this.taskQueue.add(async () => {
            let e2 = await operations.uploadCoverLetter(
              this.coverLetter,
              this.progressTracker.updateFieldRequiredStatus,
              this.progressTracker.updateFilledProgress,
            );
            e2 || this.progressTracker.updateMissedProgress("Cover Letter");
          }),
        await this.taskQueue.run(),
        await this.bindSubmitButtonTracking(r2),
        (0, track.postStatus)(
          "filling",
          this.progressTracker.fieldStatus,
          this.timeTrace,
        ),
        t.finishNormalFill(true),
        this.progressTracker.generateFinalProgress()
      );
    } catch (e2) {
      if (
        (t.finishNormalFill(false),
        C("fill:error", A(e2)),
        e2 instanceof answerMethods.HTTPError ||
          e2 instanceof answerMethods.ResumeMissingCodeError)
      )
        return (track.sendHttpStatusMessage(e2.message), e2.message);
      return (
        console.error("Unknown error occurred:", e2),
        this.progressTracker.generateFinalProgress()
      );
    }
  }
  constructor(...e) {
    (super(...e),
      (this.coverLetterSlotObserver = null),
      (this.lastCoverLetterStatus = null),
      (this.latestAutofillInfo = null),
      (this.currentRunCountry = null),
      (this.currentRunCountryCommitted = false),
      (this.submitTrackingRules = []),
      (this.savedEducationSnapshots = []),
      (this.savedExperienceSnapshots = []),
      (this.sectionResults = {}),
      (this.hasComboQuestions = true),
      (this.addressResolveTimeoutMs = 1e4),
      (this.oracleAddressResolveRunId = 0),
      (this.activeOracleAddressResolveRun = null));
  }
}

export { OracleCloud };
