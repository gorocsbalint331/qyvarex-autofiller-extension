// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/contents/sites/base-filler.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import * as o from "../shared/filler.js"
import * as i from "../methods/answer.js"
import * as a from "../methods/cancellation.js"
import * as l from "../methods/cover-letter.js"
import * as s from "../methods/dom.js"
import * as u from "../methods/runtime-error.js"
import * as c from "../methods/track.js"
import * as d from "../../core/enums.js"
import * as f from "../../core/xpath.js"
import * as p from "../../enums/http.js"
import * as m from "../../store/url.js"
import * as h from "../../utils/fieldLabel.js"
import * as g from "../../utils/starRating.js"
import * as b from "../../utils/string.ts"
import * as y from "./autofill-answer-pair-tracking.ts"
import * as v from "./falcon-answer-tracking.ts"
import * as w from "./falcon-response-accumulator.ts"

function S(e) {
  if (!e || "object" != typeof e) return "";
  let t = e,
    r = ["data-test-id", "name", "id", "aria-labelledby"];
  for (let e of r) {
    let r = t.getAttribute?.(e);
    if ("string" == typeof r && r.trim()) return `${e}:${r.trim()}`
  }
  return "string" == typeof t.id && t.id.trim() ? `id:${t.id.trim()}` : ""
}

function E(e) {
  let t = h.normalizeFieldLabel(e?.label);
  if (!t) return "";
  let r = S(e.$input),
    n = S(e.$label);
  return [t, e.type, r || n].filter(Boolean).join("|")
}

function x(e, t) {
  let r = new Set(e.map(E)),
    n = [];
  for (let e of t) {
    let t = E(e);
    !t || r.has(t) || (r.add(t), n.push(e))
  }
  return n
}
async function C(e, t = 0, r = e) {
  let n = Math.max(0, e),
    o = Math.max(0, t),
    i = Math.max(n, r),
    l = "undefined" != typeof document ? document.documentElement : null;
  n > 0 && o > 0 && i > n && l && "undefined" != typeof MutationObserver ? await new Promise(
  e => {
    let t = Date.now(),
      r = t,
      a = null,
      s = new MutationObserver(() => {
        r = Date.now()
      }),
      u = () => {
        s.disconnect(), a && clearTimeout(a), e()
      },
      c = () => {
        let e = Date.now(),
          l = e - t;
        if (l >= i || l >= n && e - r >= o) {
          u();
          return
        }
        let s = Math.max(0, n - l),
          d = Math.max(0, o - (e - r)),
          f = Math.max(0, i - l);
        a = setTimeout(c, Math.max(1, Math.min(f, Math.max(s, d))))
      };
    s.observe(l, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true
    }), a = setTimeout(c, n)
  }) : n > 0 && await new Promise(e => setTimeout(e, n)), a.checkpoint()
}

function A(e) {
  return e ? new Set(e.map(e => h.normalizeFieldLabel(e.label))) : null
}

function k(e, t) {
  let r = e?.regular && "object" == typeof e.regular && !Array.isArray(e.regular) ? e.regular : {},
    n = A(t);
  return n ? Object.fromEntries(Object.entries(r).filter(([e]) => n.has(h.normalizeFieldLabel(
    e)))) : r
}

function T(e, t) {
  let r = Array.isArray(e?.fillDataList) ? e.fillDataList : [],
    n = A(t);
  return n ? r.filter(e => n.has(h.normalizeFieldLabel(e?.name))) : r
}

function F(e) {
  if (null == e || "object" != typeof e) return e;
  if ("function" == typeof structuredClone) try {
    return structuredClone(e)
  } catch {}
  return JSON.parse(JSON.stringify(e))
}

function I(e, t, r) {
  if (!e) return r ? v.inheritFalconResponseAnswerMarker({
    ...t,
    regular: k(t, r),
    fillDataList: T(t, r)
  }, t) : t;
  let n = T(e),
    o = T(t, r);
  return v.inheritFalconResponseAnswerMarker({
    ...e,
    regular: {
      ...k(e),
      ...k(t, r)
    },
    ...n.length || o.length ? {
      fillDataList: [...n, ...o]
    } : {}
  }, e, t)
}
class j {
  constructor() {
    this.coverLetterFillTask = null, this.hasComboQuestions = false, this
      .comboQuestionSettleDelayMs = 300, this.comboQuestionQuietPeriodMs = 0, this
      .comboQuestionSettleMaxWaitMs = 300, this.comboQuestionMaxRounds = 1, this.timeTrace = {
        rulesParseStartTime: 0,
        requestStartTime: 0,
        fillStartTime: 0
      }, this.submitTrackingAbortController = null, this.falconResponseAccumulator = new w
      .FalconResponseAccumulator, this.progressTracker = new o.ProgressTracker, this.taskQueue =
      new o.TaskQueue, this.fillCancel = a.createCancellation(() => this.taskQueue.clear(),
        this.progressTracker.setCurrentField), this.cancel = this.fillCancel.cancel, this.skip =
      this.fillCancel.skip, this.createOperationHandler = i.createOperationHandlerFactory(
        this.progressTracker.updateFilledProgress, this.progressTracker.updateMissedProgress),
      this.operationConfig = this.buildOperationConfig()
  }
  buildOperationConfig() {
    let e = this.getFieldHandlers(),
      t = {};
    for (let [r, n] of Object.entries(e)) "function" == typeof n ? t[r] = this
      .createOperationHandler(n, {
        expectArray: true
      }) : n && "object" == typeof n && (t[r] = this.createOperationHandler(n.handler, n
        .options || {
          expectArray: true
        }));
    return t
  }
  async checkCoverLetter() {
    s.postCoverLetterStatus("")
  }
  async fillForm(e = false) {
    return this.fillCancel.wrap(() => this.doFillForm(e))
  }
  async doFillForm(e = false) {
    await this.initializeFillForm();
    let t = this.getPreExtractionAbortReason();
    if (t) return t;
    let r = await this.extractFormRules();
    if (0 === r.length) return this.hasUploadOnlyForm() ? (await this.handleResumeUpload(),
      await this.executeSiteSpecificSteps(r), await this.finalizeFillForm()) : ((0, c
        .sendHttpStatusMessage)(p.CUSTOM_ERROR_CODES.NO_ELEMENTS), p.CUSTOM_ERROR_CODES
      .NO_ELEMENTS);
    let n = this.prepareCoverLetterRules(r);
    this.progressTracker.setFieldsRequiredStatus(n);
    let o = await this.fetchFormAnswers(n, e);
    if ("string" == typeof o) return o;
    await this.handleResumeUpload(), await this.fillRegularFields(n), await this
      .fillEducationAndEmployment(n), await this.fillCoverLetterFields();
    let i = await this.runComboQuestionAutofillIfNeeded(n, e);
    return "string" == typeof i ? i : (n = i, await this.executeSiteSpecificSteps(n), await this
      .finalizeFillForm())
  }
  async initializeFillForm() {
    this.resetFalconResponseAccumulator(), this.timeTrace = {
      rulesParseStartTime: Date.now(),
      requestStartTime: 0,
      fillStartTime: 0
    }, this.progressTracker.clear(), this.taskQueue.clear(), await this.runPreFillForm()
  }
  async runPreFillForm() {}
  getPreExtractionAbortReason() {
    return null
  }
  hasUploadOnlyForm() {
    return false
  }
  prepareCoverLetterRules(e) {
    let t = l.prepareCoverLetterFillTask({
      rules: e,
      coverLetter: this.coverLetter,
      jobId: this.currentJobId,
      resumeId: this.resumeInfo?.id,
      tailorId: this.resumeInfo?.tailorId
    });
    return this.coverLetterFillTask = t.task, t.rules
  }
  getElementRulesRequestUrl() {}
  async requestFormAnswers(e, t, r = {}) {
    try {
      this.token || (this.token = await i.getSiteToken()), false !== r.updateTimeTrace && (this
        .timeTrace.requestStartTime = Date.now());
      let n = this.captureFalconResponseRun(),
        o = await i.getElementRules(e, this.getSiteName(), this.token, t, this.resumeInfo.id,
          this.resumeInfo.tailorId, this.getElementRulesRequestUrl());
      return this.recordFalconResponse(o, n), false !== r.updateTimeTrace && (this.timeTrace
        .fillStartTime = Date.now()), this.formatAnswer?.(o) ?? o
    } catch (e) {
      if (e instanceof i.HTTPError || e instanceof i.ResumeMissingCodeError) return (0, c
        .sendHttpStatusMessage)(e.message), e.message;
      if (u.isExtensionContextInvalidatedError(e)) return c.sendHttpStatusMessage(p
          .CUSTOM_ERROR_CODES.EXTENSION_CONTEXT_INVALIDATED), p.CUSTOM_ERROR_CODES
        .EXTENSION_CONTEXT_INVALIDATED;
      console.error("Unknown error occurred:", e)
    }a.checkpoint()
  }
  async fetchFormAnswers(e, t) {
    let r = await this.requestFormAnswers(e, t);
    if ("string" == typeof r) return r;
    r && (this.answer = r)
  }
  captureFalconResponseRun() {
    return this.falconResponseAccumulator.captureEpoch()
  }
  recordFalconResponse(e, t) {
    this.falconResponseAccumulator.record(e, t)
  }
  resetFalconResponseAccumulator() {
    this.falconResponseAccumulator.reset()
  }
  getFalconResponseAnswerForTracking() {
    return this.falconResponseAccumulator.current()
  }
  async handleResumeUpload() {}
  async fillRegularFields(e) {
    let t = [...i.getRegularOperations(l.withoutCoverLetterRules(e), this.answer
      .regular, this.operationConfig)];
    for (let e of t) this.taskQueue.add(e);
    await this.taskQueue.run()
  }
  async fillEducationAndEmployment(e) {}
  async fillCoverLetterFields() {
    this.coverLetterFillTask?.rules.length && await l.fillPreparedCoverLetterTask({
      task: this.coverLetterFillTask,
      coverLetter: this.coverLetter,
      answer: this.answer,
      updateMissedProgress: this.progressTracker.updateMissedProgress,
      operationConfig: this.operationConfig
    })
  }
  mergeComboQuestionAnswer(e, t) {
    this.answer = I(this.answer, e, t)
  }
  getNewComboQuestionRules(e, t) {
    return x(e, t)
  }
  async filterNewComboQuestionRules(e) {
    return e
  }
  async extractComboQuestionRules() {
    return await this.extractFormRules()
  }
  async waitForComboQuestionsToSettle() {
    await C(this.comboQuestionSettleDelayMs, this.comboQuestionQuietPeriodMs, this
      .comboQuestionSettleMaxWaitMs)
  }
  async runComboQuestionAutofillIfNeeded(e, t) {
    if (!this.hasComboQuestions) return e;
    let r = [...e];
    for (let e = 1; e <= this.comboQuestionMaxRounds; e++) {
      await this.waitForComboQuestionsToSettle();
      let n = await this.extractComboQuestionRules(),
        o = this.getNewComboQuestionRules(r, n),
        i = await this.filterNewComboQuestionRules(o),
        a = this.prepareCoverLetterRules(i);
      if (0 === o.length) break;
      if (r = [...r, ...o], 0 === a.length) {
        console.info("[BaseFiller][Combo] skipped committed dynamic rules", {
          site: this.getSiteName(),
          round: e,
          skippedRuleCount: o.length
        });
        break
      }
      for (let t of (console.info("[BaseFiller][Combo] discovered dynamic rules", {
          site: this.getSiteName(),
          round: e,
          newRuleCount: a.length
        }), a)) this.progressTracker.updateFieldRequiredStatus(t);
      let l = await this.requestFormAnswers(a, t, {
        updateTimeTrace: false
      });
      if ("string" == typeof l) return l;
      l && this.mergeComboQuestionAnswer(l, a), await this.fillRegularFields(a), await this
        .fillEducationAndEmployment(a), await this.fillCoverLetterFields(), e === this
        .comboQuestionMaxRounds && this.comboQuestionMaxRounds > 1 && console.warn(
          "[BaseFiller][Combo] stopped at dynamic rule round limit", {
            site: this.getSiteName(),
            maxRounds: this.comboQuestionMaxRounds,
            totalRuleCount: r.length
          })
    }
    return r
  }
  async executeSiteSpecificSteps(e) {
    await this.bindSubmitButtonTracking(e)
  }
  async bindSubmitButtonTracking(e) {
    let t = F(await this.getAutofillSnapshot(e)),
      r = F(this.getAdditionalAutofillSnapshotData?.(e) || {}),
      n = this.getSubmitTrackingScopeKey();
    this.submitTrackingAbortController?.abort(), this.submitTrackingAbortController =
      new AbortController;
    let o = null,
      i = async e => {
          let o;
          let i = this.getSubmitTrackingScopeKey();
          if (n && i && n !== i) return;
          let a = false;
          try {
            o = await this.getSubmitSnapshot()
          } catch (e) {
            a = true, o = F(t), console.warn(
              `[BaseFiller] Failed to capture ${this.getSiteName()} submit snapshot; using autofill baseline`,
              e)
          }
          let l = this.getAdditionalSubmitSnapshotData?.() || {},
            s = y.buildFalconAutofillAnswerPairData(this
            .getFalconResponseAnswerForTracking()),
            u = {
              ...s ? {
                falcon: s
              } : {},
              ...this.getAutofillAnswerPairExtraTrackingData?.() || {},
              ...a ? {
                submitTracking: {
                  snapshotFallback: "autofill",
                  reason: "submit_snapshot_error"
                }
              } : {}
            },
            c = F(t),
            d = F(r),
            f = {
              formUrl: m.useUrlStore.getState().currentTabUrl,
              autofillSnapshot: c,
              submitSnapshot: o,
              additionalAutofillData: d,
              additionalSubmitData: l,
              extraData: u,
              source: this.getSiteName()
            },
            p = this.normalizeAutofillAnswerPairTrackingData?.(f) ?? f;
          y.sendAutofillAnswerPairEvent(p), t = F(p.submitSnapshot), r = F(p
            .additionalSubmitData || {}), n = i || n, g.handleSubmitStarRating(this
            .getSiteName(), p.autofillSnapshot, p.submitSnapshot, this.progressTracker
            .fieldStatus, this.getSubmitSuccessSelectors(), e)
        }, a = () => (o?.abort(), (o = new AbortController).signal), l = e => {
          console.error(`[BaseFiller] Failed to track ${this.getSiteName()} submit click`, e)
        }, s = this.getSubmitTrackingDelegationRoot?.(), u = this.resolveDelegatedSubmitButton
        ?.bind(this);
    if (s && u) {
      s.addEventListener("click", async e => {
        let t = e.target;
        if (!(t instanceof HTMLElement)) return;
        let r = u(t);
        if (r) try {
          await i(a())
        } catch (e) {
          l(e)
        }
      }, {
        capture: true,
        signal: this.submitTrackingAbortController.signal
      });
      return
    }
    let c = this.getSubmitButtonSelector();
    if (!c) return;
    let d = f.getFirstOrderedNodeSafe(c);
    d && d.addEventListener("click", async () => {
      try {
        await i(a())
      } catch (e) {
        l(e)
      }
    }, {
      capture: true,
      signal: this.submitTrackingAbortController.signal
    })
  }
  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(@class, "submit")]'
  }
  getSubmitTrackingScopeKey() {
    return null
  }
  getSubmitSuccessSelectors() {
    return []
  }
  async finalizeFillForm() {
    return c.postStatus("filling", this.progressTracker.fieldStatus, this.timeTrace), window
      .top?.postMessage(b.cleanObject({
        type: d.MESSAGE_EVENTS.autoFillResultFromIframe,
        data: this.progressTracker.fieldStatus
      }), {
        targetOrigin: "*"
      }), this.progressTracker.generateFinalProgress()
  }
}

export {
  E as getComboQuestionRuleKey,
  x as getNewComboQuestionRules,
  C as waitForComboQuestionsToSettle,
  k as getAnswerRegular,
  I as mergeComboQuestionAnswer,
  j as BaseFiller,
}
