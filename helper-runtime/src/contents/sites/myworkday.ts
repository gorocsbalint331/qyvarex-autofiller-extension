// @ts-nocheck
/**
 * MyWorkday ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and myworkday/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "myworkday"
 */

import * as messaging from "@plasmohq/messaging";
import * as answerMethods from "../methods/answer.js";
import * as cancellation from "../methods/cancellation.js";
import * as rulesMethods from "../methods/rules.js";
import * as track from "../methods/track.js";
import * as autofillAnswerPairTracking from "./autofill-answer-pair-tracking.ts";
import {
  BaseFiller,
  getNewComboQuestionRules,
  mergeComboQuestionAnswer,
  waitForComboQuestionsToSettle,
} from "./base-filler.ts";
import * as educationItemTrace from "./education-item-trace.js";
import * as answer from "./myworkday/answer.ts";
import * as educationOperation from "./myworkday/education-operation.ts";
import * as educationResolveScheduler from "./myworkday/education-resolve-scheduler.ts";
import * as operations from "./myworkday/operations.ts";
import * as sectionResults from "./myworkday/section-results.ts";
import * as rules from "./myworkday/rules.ts";
import * as runtimeValidationTracking from "./runtime-validation-tracking.js";
import * as coreDom from "../../core/dom.js";
import * as enums from "../../core/enums.js";
import * as httpEnums from "../../enums/http.js";
import * as autofillInfoStore from "../../store/autofillInfo.js";
import * as urlStore from "../../store/url.js";
import * as fieldLabel from "../../utils/fieldLabel.js";
import * as formLoss from "./myworkday/form-loss.ts";
let k = "myworkday",
  T = [
    "Security Code",
    "Country",
    "Country / Territory",
    "United States of America",
    "Employee ID (if applicable)",
    "What is your date of availability?",
  ];
function F(e) {
  return {
    count: e.length,
    labels: e.map((e2) => ({
      label: e2.label,
      type: e2.type,
      required: !!e2.required,
    })),
  };
}
function I(e) {
  return {
    regularKeys: Object.keys(e?.regular ?? {}),
    educationCount: e?.education?.length ?? 0,
    workExperienceCount: e?.workExperience?.length ?? 0,
    skillsCount: e?.skills?.length ?? 0,
    hasResume: !!e?.resume,
    fillDataListCount: e?.fillDataList?.length ?? 0,
  };
}
function j(e) {
  return {
    hasResumeInfo: !!e,
    idPresent: !!e?.id,
    tailorIdPresent: !!e?.tailorId,
    tailorPresent: !!e?.tailor,
    diagnoseIdPresent: !!e?.diagnoseId,
    useOriginalResume: !!e?.useOriginalResume,
    resumeNamePresent: !!e?.resumeName,
    template: e?.template ?? null,
  };
}
function D(e) {
  return {
    name: e instanceof Error ? e.name : typeof e,
    message: e instanceof Error ? e.message : String(e),
  };
}
function P() {
  return "undefined" != typeof window && window.location
    ? window.location.href
    : "";
}
function _(e, t = {}) {
  console.info(`[MyWorkday][autofill-debug] ${e} ${JSON.stringify(t)}`);
}
function L(...e) {
  for (let t of e) {
    let e2 = answer.getWorkdayCountryFillValue(t);
    if (e2) return e2;
  }
  return null;
}
function R(e) {
  return e
    .replace(/\*/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
function O(e, t) {
  if (Object.prototype.hasOwnProperty.call(e, t))
    return {
      found: true,
      value: e[t],
    };
  let r = R(t);
  for (let [t2, n] of Object.entries(e))
    if (R(t2) === r)
      return {
        found: true,
        value: n,
      };
  return {
    found: false,
    value: void 0,
  };
}
async function M(e) {
  try {
    return await messaging.sendToBackground({
      name: "resolveAutofillOperation",
      body: {
        operation: e,
        source: "myworkday",
      },
    });
  } catch (e2) {
    return (
      console.warn("[MyWorkday] resolveAutofillOperation failed:", e2),
      null
    );
  }
}
class N extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (e, t) => operations.fillMyWorkdayTextField(e.$input, t),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.NUMBER]: {
        handler: (e, t) => operations.fillMyWorkdayTextField(e.$input, t),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (e, t) => operations.fillMyWorkdayCheckBoxesField(e, t),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.MULTI_SELECT]: {
        handler: (e, t) => operations.fillSearchBoxInputField(e.$input, t),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.SEARCH]: {
        handler: (e, t) => operations.fillSearchBoxInputField(e.$input, t),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.LISTBOX]: {
        handler: (e, t) => operations.fillMyWorkdayListboxRule(e, t),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: (e, t) => operations.fillMyWorkdayDateField(e.$input, t),
        options: {
          expectArray: false,
        },
      },
    };
  }
  getSiteName() {
    return k;
  }
  async extractFormRules() {
    return rules.getRules();
  }
  async runPreFillForm() {
    ((this.submitTrackingBinding = operations.unbindMyWorkdaySubmitTracking(
      this.submitTrackingBinding,
    )),
      (this.runtimeValidationRetryResults = []),
      (this.autofillInfoState = null),
      (this.autofillCountry = void 0),
      (this.countryFilled = false),
      (this.educationTraceRunId = null),
      this.taskQueue.add(operations.waitPageClean),
      await this.taskQueue.run(),
      await autofillInfoStore.useAutofillInfoStore
        .getState()
        .fetchAutofillInfo(),
      (this.autofillInfoState =
        autofillInfoStore.useAutofillInfoStore.getState()),
      (this.autofillCountry = this.autofillInfoState.country));
    let e = L(
      this.autofillCountry,
      this.autofillInfoState.autofillInfo?.location?.country,
    );
    (e &&
      (this.taskQueue.add(async () => {
        this.countryFilled = await operations.fillCountry(e);
      }),
      await this.taskQueue.run()),
      this.taskQueue.add(async () => {
        await operations.preclickAddButtons();
      }),
      await this.taskQueue.run());
  }
  async getAutofillSnapshot() {
    let e = this.ensureEducationTraceRunId();
    return rules.getFormSnapshot({
      markEducationRows: true,
      includeEducationSnapshotIndex: true,
      includeEducationTrace: true,
      educationTraceRunId: e,
    });
  }
  async getSubmitSnapshot() {
    return rules.getFormSnapshot({
      includeEducationSnapshotIndex: true,
      includeEducationTrace: true,
      educationTraceRunId: this.ensureEducationTraceRunId(),
    });
  }
  submitApplication() {}
  ensureEducationTraceRunId() {
    return (
      this.educationTraceRunId ||
        (this.educationTraceRunId = (0,
        educationItemTrace.createEducationTraceRunId)()),
      this.educationTraceRunId
    );
  }
  buildRuntimeValidationTrackingData(e, t) {
    return educationOperation.buildWorkdayEducationRuntimeValidationTrackingData(
      this.answer.education ?? [],
      Array.isArray(e.education) ? e.education : [],
      t,
      this.runtimeValidationRetryResults,
    );
  }
  isRuntimeValidationRetryCandidate(e) {
    return (
      "degree" === e.fieldType &&
      ("mismatched" === e.status || "empty" === e.status) &&
      e.attemptedCandidates.length > 0
    );
  }
  findEducationValidationRule(e, t) {
    let r = e[t.index],
      n = Array.isArray(r?.children) ? r.children : [],
      o2 = new Set(
        "school" === t.fieldType
          ? ["school", "school or university"]
          : "degree" === t.fieldType
            ? ["degree"]
            : ["field of study", "discipline"],
      );
    return (
      n.find((e2) => {
        let t2 = String(e2.label ?? "")
          .trim()
          .toLowerCase();
        return o2.has(t2);
      }) ?? null
    );
  }
  async requestFormAnswers(e, t, r = {}) {
    try {
      let n =
          this.autofillInfoState ??
          autofillInfoStore.useAutofillInfoStore.getState(),
        o2 = this.autofillCountry ?? n.country;
      (this.token || (this.token = await answerMethods.getSiteToken()),
        false !== r.updateTimeTrace &&
          (this.timeTrace.requestStartTime = Date.now()),
        _("requestFormAnswers:start", {
          fromAgent: t,
          resumeId: this.resumeInfo?.id,
          tailorId: this.resumeInfo?.tailorId,
          tokenPresent: !!this.token,
          autofillCountry: o2,
          rules: F(e),
        }));
      let a2 = this.captureFalconResponseRun(),
        s2 = await answerMethods.getElementRules(
          rulesMethods.filterRulesByLabel(e, T),
          k,
          this.token,
          t,
          this.resumeInfo.id,
          this.resumeInfo.tailorId,
        );
      this.recordFalconResponse(s2, a2);
      let u2 = answer.formatAnswer(s2, {
        autofillInfo: n.autofillInfo,
        country: o2,
        rules: e,
      });
      return (
        false !== r.updateTimeTrace &&
          (this.timeTrace.fillStartTime = Date.now()),
        _("requestFormAnswers:success", {
          answer: I(u2),
        }),
        u2
      );
    } catch (e2) {
      if (
        e2 instanceof answerMethods.HTTPError ||
        e2 instanceof answerMethods.ResumeMissingCodeError
      )
        return (
          console.warn(
            "[MyWorkday][autofill-debug] requestFormAnswers:known-error",
            {
              message: e2.message,
            },
          ),
          track.sendHttpStatusMessage(e2.message),
          e2.message
        );
      console.error(
        "[MyWorkday][autofill-debug] requestFormAnswers:unknown-error",
        e2,
      );
    }
    cancellation.checkpoint();
  }
  async runComboQuestionAutofillIfNeeded(e, t) {
    if (!this.hasComboQuestions) return e;
    (await waitForComboQuestionsToSettle(this.comboQuestionSettleDelayMs),
      this.markEmptyFilledFieldsFromSnapshot(await this.getAutofillSnapshot()));
    let r = await rules.getRules(),
      n = getNewComboQuestionRules(e, r),
      o2 = this.getMissedComboQuestionRetryRules(e, r);
    if (0 === n.length && 0 === o2.length) return e;
    for (let e2 of n) this.progressTracker.updateFieldRequiredStatus(e2);
    if (n.length > 0) {
      let e2 = await this.requestFormAnswers(n, t, {
        updateTimeTrace: false,
      });
      if ("string" == typeof e2) return e2;
      e2 && (this.answer = mergeComboQuestionAnswer(this.answer, e2, n));
    }
    let a2 = answerMethods.getRegularOperations(
      rules.getWorkdayRegularRules([...o2, ...n]),
      this.answer.regular,
      this.operationConfig,
    );
    for (let e2 of a2) this.taskQueue.add(e2);
    return (
      await this.taskQueue.run(),
      this.taskQueue.add(operations.blurPage),
      await this.taskQueue.run(),
      [...e, ...n]
    );
  }
  getMissedComboQuestionRetryRules(e, t) {
    let r = new Set(e.map((e2) => fieldLabel.normalizeFieldLabel(e2?.label))),
      n = new Set(
        this.progressTracker.fieldStatus.missingFields.map((e2) =>
          (0, fieldLabel.normalizeFieldLabel)(e2),
        ),
      ),
      o2 =
        this.answer?.regular &&
        "object" == typeof this.answer.regular &&
        !Array.isArray(this.answer.regular)
          ? this.answer.regular
          : {},
      i2 = new Set(
        Object.entries(o2)
          .filter(([, e2]) => null != e2 && "" !== e2)
          .map(([e2]) => (0, fieldLabel.normalizeFieldLabel)(e2)),
      ),
      a2 = [],
      l2 = /* @__PURE__ */ new Set();
    for (let e2 of t) {
      let t2 = fieldLabel.normalizeFieldLabel(e2?.label);
      !(!t2 || l2.has(t2)) &&
        r.has(t2) &&
        n.has(t2) &&
        i2.has(t2) &&
        (l2.add(t2), a2.push(e2));
    }
    return a2;
  }
  markEmptyFilledFieldsFromSnapshot(e) {
    let t = /* @__PURE__ */ new Set(["", "select one", "[]", "/", "//"]),
      r = (e2) => {
        if (null == e2) return true;
        let r2 = String(e2).trim().toLowerCase();
        return t.has(r2);
      };
    for (let t2 of [...this.progressTracker.fieldStatus.filledFields]) {
      let n = O(e, t2);
      if (n.found) {
        r(n.value) &&
          (console.warn(
            `[MyWorkday] field "${t2}" marked filled but actual value is empty:`,
            n.value,
          ),
          this.progressTracker.updateMissedProgress(t2));
        continue;
      }
      let o2 = e.education || e.employment;
      if (Array.isArray(o2))
        for (let e2 of o2) {
          if (!e2 || "object" != typeof e2) continue;
          let n2 = O(e2, t2);
          if (n2.found && r(n2.value)) {
            (console.warn(
              `[MyWorkday] grouped field "${t2}" marked filled but actual value is empty:`,
              n2.value,
            ),
              this.progressTracker.updateMissedProgress(t2));
            break;
          }
        }
    }
  }
  syncSectionResultsFromSnapshot(e) {
    let t = this.progressTracker.fieldStatus.sectionResults ?? [];
    for (let r of t) {
      let t2 = e[r.type],
        n = sectionResults.syncMyWorkdaySectionResult(r, t2);
      n !== r &&
        (console.info("[MyWorkday] synced section progress details from DOM", {
          section: r.type,
          rowCount: n.rows.length,
        }),
        this.progressTracker.updateSectionResult(n));
    }
  }
  async retryRuntimeValidationFailures({ autofillSnapshot: e, eduRules: t }) {
    let r = this.buildRuntimeValidationTrackingData(e, t),
      n = educationOperation
        .getWorkdayEducationRuntimeValidationLogEntries(r)
        .filter((e2) => this.isRuntimeValidationRetryCandidate(e2));
    if (0 === n.length)
      return {
        autofillSnapshot: e,
        runtimeValidationTrackingData: r,
      };
    for (let e2 of ((this.runtimeValidationRetryResults = []), n)) {
      let r2 = this.findEducationValidationRule(t, e2);
      if (!r2) continue;
      let n2 = r2.$input ?? null;
      (r2.type === enums.FIELD_TYPE.SEARCH ||
        r2.type === enums.FIELD_TYPE.MULTI_SELECT) &&
        (await (0, operations.clearWorkdaySearchSelection)(n2));
      let o2 =
        educationOperation.buildWorkdayEducationRuntimeValidationRetryRecord({
          record: this.answer.education?.[e2.index] ?? {},
          ruleLabel: r2.label,
          attemptedCandidates: e2.attemptedCandidates,
        });
      (await this.operationConfig[r2.type]?.(r2, o2, false),
        this.runtimeValidationRetryResults.push({
          index: e2.index,
          fieldType: e2.fieldType,
          initialStatus: e2.status,
          initialCommittedValue: e2.committedValue,
          retryCount: 1,
          resetApplied: false,
        }));
    }
    return (
      (e = rules.getFormSnapshot({
        markEducationRows: true,
        includeEducationSnapshotIndex: true,
        includeEducationTrace: true,
        educationTraceRunId: this.ensureEducationTraceRunId(),
      })),
      (r = this.buildRuntimeValidationTrackingData(e, t)),
      {
        autofillSnapshot: e,
        runtimeValidationTrackingData: r,
      }
    );
  }
  async uploadResumeOnly() {
    this.progressTracker.setFieldsRequiredStatus([
      {
        label: "Resume/CV",
        required: true,
      },
    ]);
    let e = null;
    return (this.taskQueue.add(async () => {
      try {
        let e2 = await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        );
        "not-applicable" === e2 &&
          this.progressTracker.updateMissedProgress("Resume/CV");
      } catch (t) {
        if (t instanceof cancellation.CancelledError) throw t;
        if (
          (this.progressTracker.updateMissedProgress("Resume/CV"),
          t instanceof answerMethods.ResumeMissingCodeError ||
            (t instanceof Error &&
              t.message === answerMethods.NO_RESUME_FOUND_ERROR))
        ) {
          ((e =
            t instanceof answerMethods.ResumeMissingCodeError
              ? t.message
              : httpEnums.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY),
            track.sendHttpStatusMessage(e));
          return;
        }
        console.error("[MyWorkday] resume-only upload failed:", t);
      }
    }),
    await this.taskQueue.run(),
    e)
      ? e
      : (track.postStatus(
          "filling",
          this.progressTracker.fieldStatus,
          this.timeTrace,
        ),
        this.progressTracker.generateFinalProgress());
  }
  clearProgressAfterFormUnavailable(e, t) {
    let r = this.progressTracker.fieldStatus;
    (console.warn(
      "[MyWorkday][autofill-debug] form-unavailable:clear-progress",
      {
        stage: e,
        href: P(),
        error: t instanceof Error ? t.message : String(t),
        fieldRequiredStatus: r.fieldRequiredStatus.map((e2) => ({
          label: e2.label,
          required: e2.required,
        })),
        filledFields: r.filledFields,
        missingFields: r.missingFields,
        currentField: r.currentField ?? null,
      },
    ),
      this.progressTracker.clear());
    let n = this.progressTracker.generateFinalProgress();
    return (
      window.top?.postMessage(
        {
          type: enums.MESSAGE_EVENTS.autoFillResultFromIframe,
          data: n,
        },
        {
          targetOrigin: "*",
        },
      ),
      n
    );
  }
  async doFillForm(e = false) {
    let t, r;
    (_("doFillForm:start", {
      href: P(),
      fromAgent: e,
      disableUploadResume: this.disableUploadResume,
    }),
      await this.initializeFillForm());
    try {
      t = await this.extractFormRules();
    } catch (e2) {
      if (formLoss.isWorkdayNoFormFieldsError(e2))
        return this.clearProgressAfterFormUnavailable("extract-form-rules", e2);
      throw e2;
    }
    if (
      (_("extractFormRules:done", {
        rules: F(t),
      }),
      this.progressTracker.setFieldsRequiredStatus(t),
      0 === t.length)
    )
      return !this.disableUploadResume &&
        operations.hasWorkdayResumeUploadInput()
        ? (_("no-rules:upload-resume-only"), await this.uploadResumeOnly())
        : (console.warn(
            "[MyWorkday][autofill-debug] no-rules:no-resume-upload",
          ),
          this.progressTracker.generateFinalProgress());
    (this.taskQueue.add(operations.blurPage), await this.taskQueue.run());
    let n = await this.requestFormAnswers(t, e);
    if ("string" == typeof n)
      return (
        console.warn("[MyWorkday][autofill-debug] doFillForm:answer-error", {
          answerResult: n,
        }),
        n
      );
    if (
      (n && (this.answer = n),
      _("doFillForm:answer-ready", {
        answer: I(this.answer),
      }),
      !this.countryFilled)
    ) {
      let e2 = L(
        this.autofillCountry,
        this.answer.country,
        this.autofillInfoState?.autofillInfo?.location?.country,
      );
      e2 &&
        (this.taskQueue.add(async () => {
          this.countryFilled = await operations.fillCountry(e2);
        }),
        await this.taskQueue.run());
    }
    cancellation.checkpoint();
    let o2 = rules.getSubmitButtonText();
    (track.bindSubmitButton(
      o2,
      this.progressTracker.fieldStatus,
      this.timeTrace,
    ),
      this.taskQueue.add(async () => {
        await operations.expandForm(this.answer);
      }),
      await this.taskQueue.run());
    let l2 = await rules.getEduRules(),
      c2 = await rules.getExpRules();
    (coreDom.setSectionResultFocusRules("employment", c2),
      coreDom.setSectionResultFocusRules("education", l2));
    let d2 = rules.getWorkdayEducationApiBase(),
      f2 =
        c2.length > 0
          ? answerMethods.getEmploymentOperations(
              c2,
              this.answer.workExperience,
              this.operationConfig,
              void 0,
              {
                onCompleted: () =>
                  this.progressTracker.updateFilledProgress("Employment"),
                onSkipped: () =>
                  this.progressTracker.updateMissedProgress("Employment"),
                onSectionResultChanged:
                  this.progressTracker.updateSectionResult,
              },
            )
          : [],
      g2 = this.answer.education ?? [],
      w2 = !!(d2 && l2.length > 0 && g2.length > 0),
      E2 = w2 ? educationResolveScheduler.cloneWorkdayEducationRecords(g2) : g2;
    if (
      (w2 &&
        _("education-resolve:start", {
          educationRecords: E2.length,
          educationRuleGroups: l2.length,
        }),
      await educationResolveScheduler.runDeferredWorkdayEducationResolve({
        fallbackValue: E2,
        startResolve: async () =>
          w2 && d2
            ? await (0,
              educationOperation.resolveWorkdayEducationRecordsInParallel)({
                apiBase: d2,
                rules: l2,
                records: E2,
                resolveOperation: M,
              })
            : E2,
        fillIndependentFields: async () => {
          let e2 = rules.getWorkdayRegularRules(t),
            r2 = [
              ...answerMethods.getRegularOperations(
                e2,
                this.answer.regular,
                this.operationConfig,
              ),
              ...f2,
            ];
          for (let t2 of (_("independent-operations:built", {
            regularRules: e2.length,
            expRules: c2.length,
            operations: r2.length,
            educationResolveStarted: w2,
          }),
          r2))
            this.taskQueue.add(t2);
          (await this.taskQueue.run(),
            _("independent-operations:finished", {
              educationResolveStarted: w2,
            }));
        },
        checkpoint: cancellation.checkpoint,
        onResolveSettled: ({ failed: e2, elapsedMs: t2, errorName: r2 }) => {
          w2 &&
            _("education-resolve:ready", {
              failed: e2,
              elapsedMs: t2,
              errorName: r2,
            });
        },
        fillEducation: async (e2) => {
          this.answer.education = e2;
          let t2 =
            l2.length > 0
              ? answerMethods.getEducationOperations(
                  l2,
                  this.answer.education,
                  this.operationConfig,
                  void 0,
                  {
                    onCompleted: () =>
                      this.progressTracker.updateFilledProgress("Education"),
                    onSkipped: () =>
                      this.progressTracker.updateMissedProgress("Education"),
                    onSectionResultChanged:
                      this.progressTracker.updateSectionResult,
                  },
                )
              : [];
          for (let e3 of t2) this.taskQueue.add(e3);
          (await this.taskQueue.run(),
            _("education-operations:finished", {
              eduRules: l2.length,
              operations: t2.length,
            }));
        },
      }),
      this.countryFilled)
    )
      for (let e2 of rules.findWorkdayCountryProgressLabels(
        this.progressTracker.fieldStatus,
      ))
        this.progressTracker.updateFilledProgress(e2);
    (this.disableUploadResume
      ? this.progressTracker.updateMissedProgress("Resume/CV")
      : this.taskQueue.add(async () => {
          _("resume-upload:start", {
            resumeInfo: j(this.resumeInfo),
            hasUploadInput: operations.hasWorkdayResumeUploadInput(),
          });
          try {
            let e2 = await operations.uploadResume(
              this.resumeInfo,
              this.progressTracker.updateFieldRequiredStatus,
              this.progressTracker.updateFilledProgress,
            );
            if ("not-applicable" === e2) {
              _("resume-upload:not-applicable", {
                reason: "no-upload-input",
              });
              return;
            }
            _("resume-upload:success", {
              resumeInfo: j(this.resumeInfo),
            });
          } catch (e2) {
            if (e2 instanceof cancellation.CancelledError) throw e2;
            (this.progressTracker.updateMissedProgress("Resume/CV"),
              console.warn("[MyWorkday][autofill-debug] resume-upload:failed", {
                resumeInfo: j(this.resumeInfo),
                hasUploadInput: operations.hasWorkdayResumeUploadInput(),
                error: D(e2),
              }),
              (e2 instanceof answerMethods.ResumeMissingCodeError ||
                (e2 instanceof Error &&
                  e2.message === answerMethods.NO_RESUME_FOUND_ERROR)) &&
                track.sendHttpStatusMessage(
                  e2 instanceof answerMethods.ResumeMissingCodeError
                    ? e2.message
                    : httpEnums.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY,
                ));
          }
        }),
      this.taskQueue.add(async () => {
        if (!this.answer.skills?.length) return;
        let e2 = !!document.querySelector(
          '[data-automation-id="skillsSection"] input[placeholder="Search"], [data-automation-id="formField-skills"] input[placeholder="Search"], [id*="Skills-section"] input[placeholder="Search"]',
        );
        if (!e2) return;
        let t2 = rules.findWorkdaySkillsProgressLabel(
          this.progressTracker.fieldStatus,
        );
        t2 && cancellation.updateCurrentField(t2);
        try {
          let e3 = await cancellation.withSkip(async () =>
            operations.fillSkills(this.answer.skills),
          );
          e3 && t2 && this.progressTracker.updateFilledProgress(t2);
        } catch (e3) {
          if (e3 instanceof cancellation.SkippedError) {
            t2 && this.progressTracker.updateMissedProgress(t2);
            return;
          }
          throw e3;
        }
      }),
      this.taskQueue.add(async () => {
        await operations.blurPage();
      }),
      await this.taskQueue.run());
    try {
      r = await this.runComboQuestionAutofillIfNeeded(t, e);
    } catch (e2) {
      if (formLoss.isWorkdayNoFormFieldsError(e2))
        return this.clearProgressAfterFormUnavailable(
          "combo-question-rules",
          e2,
        );
      throw e2;
    }
    if ("string" == typeof r) return r;
    t = r;
    let C2 = rules.getFormSnapshot({
      markEducationRows: true,
      includeEducationSnapshotIndex: true,
      includeEducationTrace: true,
      educationTraceRunId: this.ensureEducationTraceRunId(),
    });
    for (let e2 of rules.findFilledMyExperienceProgressLabels(
      this.progressTracker.fieldStatus,
      C2,
    ))
      this.progressTracker.updateFilledProgress(e2);
    let T2 = educationOperation.buildWorkdayEducationResolveTrackingData(
        this.answer.education ?? [],
      ),
      R2 = await this.retryRuntimeValidationFailures({
        autofillSnapshot: C2,
        eduRules: l2,
      });
    ((C2 = R2.autofillSnapshot), this.syncSectionResultsFromSnapshot(C2));
    let O2 = R2.runtimeValidationTrackingData;
    runtimeValidationTracking.sendRuntimeValidationDeviationEvent({
      formUrl: urlStore.useUrlStore.getState().currentTabUrl,
      source: k,
      trackingData: O2,
    });
    let N2 = autofillAnswerPairTracking.buildFalconAutofillAnswerPairData(
        this.answer,
      ),
      $ = {
        ...(N2
          ? {
              falcon: N2,
            }
          : {}),
        ...T2,
        ...O2,
      };
    educationOperation
      .getWorkdayEducationRuntimeValidationLogEntries(O2)
      .forEach((e2) => {
        let t2 = `[MyWorkday] ${e2.fieldLabel} validation ${e2.status}`,
          r2 = {
            index: e2.index,
            fieldType: e2.fieldType,
            committedValue: e2.committedValue,
            attemptedCandidates: e2.attemptedCandidates,
          };
        "info" === e2.level ? console.info(t2, r2) : console.warn(t2, r2);
      });
    let B =
      educationOperation.getUnresolvedWorkdayEducationRuntimeValidationLogEntries(
        O2,
      );
    for (let e2 of (B.length > 0 &&
      (console.warn(
        "[MyWorkday] Education runtime validation still has unresolved fields; marking Education as missed",
        B.map((e3) => ({
          index: e3.index,
          fieldType: e3.fieldType,
          status: e3.status,
          committedValue: e3.committedValue,
          attemptedCandidates: e3.attemptedCandidates,
        })),
      ),
      this.progressTracker.updateMissedProgress("Education")),
    this.markEmptyFilledFieldsFromSnapshot(C2),
    (0, rules.findUnfilledWorkdaySelfIdentifyCheckboxProgressLabels)(
      this.progressTracker.fieldStatus,
    )))
      this.progressTracker.updateMissedProgress(e2);
    for (let e2 of rules.findFilledWorkdaySelfIdentifyCheckboxProgressLabels(
      this.progressTracker.fieldStatus,
    ))
      this.progressTracker.updateFilledProgress(e2);
    return (
      (this.submitTrackingBinding = operations.bindMyWorkdaySubmitTracking(
        C2,
        this.submitTrackingBinding,
        $,
        this.educationTraceRunId,
      )),
      track.postStatus(
        "filling",
        this.progressTracker.fieldStatus,
        this.timeTrace,
      ),
      _("doFillForm:final", {
        fieldStatus: this.progressTracker.fieldStatus,
        timeTrace: this.timeTrace,
      }),
      this.progressTracker.generateFinalProgress()
    );
  }
  constructor(...e) {
    (super(...e),
      (this.submitTrackingBinding = null),
      (this.runtimeValidationRetryResults = []),
      (this.hasComboQuestions = true),
      (this.comboQuestionSettleDelayMs = 300),
      (this.autofillInfoState = null),
      (this.countryFilled = false),
      (this.educationTraceRunId = null));
  }
}
export { N as MyWorkDay };
