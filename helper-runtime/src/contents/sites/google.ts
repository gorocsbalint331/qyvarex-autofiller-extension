// @ts-nocheck
/**
 * Google Careers ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and google/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "google"
 */

import { BaseFiller } from "./base-filler.ts";
import * as contents from "../../contents.js";
import * as answerMethods from "../methods/answer.ts";
import * as cancellation from "../methods/cancellation.ts";
import * as coverLetter from "../methods/cover-letter.ts";
import * as dom from "../methods/dom.ts";
import * as track from "../methods/track.ts";
import * as falconAnswerTracking from "./falcon-answer-tracking.ts";
import * as coreDom from "../../core/dom.js";
import * as enums from "../../core/enums.js";
import * as pagenation from "../../core/pagenation.js";
import * as autofillInfo from "../../store/autofillInfo.js";
import * as delay from "../../utils/delay.js";
import * as operations from "./google/operations.ts";
import * as skillsOperation from "./google/skills-operation.ts";
import * as rules from "./google/rules.ts";
import * as googleAnswer from "./google/answer.ts";

export { GOOGLE_STEP_CHANGE_EVENT } from "../../core/pagenation.js";

export function getCurrentAdvanceButton() {
  try {
    const button = rules.findStepAdvanceButton();
    if (!button) return null;
    const text = (button.innerText ?? button.textContent ?? "")
      .trim()
      .toLowerCase();
    const aria = (button.getAttribute("aria-label") ?? "").trim().toLowerCase();
    if (text === "apply" || aria === "apply") {
      return { element: button, type: "submit" };
    }
    const isContinue = text.includes("continue") || aria.includes("continue");
    const isSubmit = text.includes("submit") || aria.includes("submit");
    if (isContinue) return { element: button, type: "continue" };
    if (isSubmit) return { element: button, type: "submit" };
    return { element: button, type: "continue" };
  } catch {
    return null;
  }
}

export function clickAdvanceButton(element) {
  try {
    if (!element?.isConnected) return;
    element.scrollIntoView({ block: "center", inline: "nearest" });
    element.focus();
    const rect = element.getBoundingClientRect();
    const clientX = rect.left + rect.width / 2;
    const clientY = rect.top + rect.height / 2;
    const eventInit = {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX,
      clientY,
    };
    element.dispatchEvent(new MouseEvent("mousedown", eventInit));
    element.dispatchEvent(new MouseEvent("mouseup", eventInit));
    element.dispatchEvent(new MouseEvent("click", eventInit));
  } catch {
    /* ignore */
  }
}

export class Google extends BaseFiller {
  static ADVANCE_TRACKING_TIMEOUT_MS = 5000;

  constructor(...args) {
    super(...args);
    this.tracking = new rules.GoogleTrackingManager();
    this.autofillCountry = "";
    this._delegatedAdvanceTrackingBound = false;
    this._formsAdvanceBound = false;
    this._resumeUploaded = false;
  }

  getSiteName() {
    return "google";
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(rules.getCoverLetterStatus());
  }

  buildOperationConfig() {
    const base = super.buildOperationConfig();
    const overrides = googleAnswer.getGoogleOperationConfigOverrides({
      handlers: this.getFieldHandlers(),
      progressTracker: this.progressTracker,
      createOperationHandler: this.createOperationHandler,
    });
    return { ...base, ...overrides };
  }

  getFieldHandlers() {
    if (rules.isGoogleFormsPage()) return this.getFormsFieldHandlers();
    return {
      [enums.FIELD_TYPE.TEXT]: async (rule, value) => {
        if (rule.label === skillsOperation.GOOGLE_SKILLS_LABEL) {
          const items = googleAnswer.normalizeGoogleSkillsItems(value);
          return skillsOperation.fillGoogleSkillsAutocomplete(
            rule.$input,
            items,
            {
              onInterruptedResult: (result) =>
                this.progressTracker.updateFieldItemProgress(
                  rule.label,
                  result,
                ),
            },
          );
        }
        const text = Array.isArray(value) ? value[0] : value;
        return operations.fillInputTextField(
          rule.$input,
          String(text ?? ""),
          rule,
        );
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupFiled(rule, value),
    };
  }

  getFormsFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: async (rule, value) => {
        const text = Array.isArray(value) ? value[0] : value;
        return operations.fillInputTextField(rule.$input, String(text ?? ""));
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillFormsSelect(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillFormsCheckbox(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillFormsRadioGroup(rule, value),
    };
  }

  async initializeFillForm() {
    await super.initializeFillForm();
    if (rules.isGoogleFormsPage()) this.ensureFormsAutoAdvance();
    else this.ensureDelegatedAdvanceTracking();
  }

  async runPreFillForm() {
    this.autofillCountry = "";
    const info = await autofillInfo.useAutofillInfoStore
      .getState()
      .fetchAutofillInfo();
    this.autofillCountry = String(info?.location?.country ?? "").trim();
    await operations.preFillForm();
  }

  ensureDelegatedAdvanceTracking() {
    if (this._delegatedAdvanceTrackingBound) return;
    this._delegatedAdvanceTrackingBound = true;
    document.body.addEventListener(
      "click",
      (event) => {
        if (!rules.isAdvanceButton(event.target)) return;
        const button =
          event.target.closest("button") ??
          event.target.closest('div[role="button"]');
        if (!button) return;
        const timeout = new Promise((resolve) =>
          setTimeout(resolve, Google.ADVANCE_TRACKING_TIMEOUT_MS),
        );
        Promise.race([
          operations.sendAdvanceTrackingEvent(this.tracking, () =>
            this.getSiteName(),
          ),
          timeout,
        ]);
        setTimeout(
          () =>
            window.dispatchEvent(
              new CustomEvent(pagenation.GOOGLE_STEP_CHANGE_EVENT),
            ),
          800,
        );
        setTimeout(
          () =>
            window.dispatchEvent(
              new CustomEvent(pagenation.GOOGLE_STEP_CHANGE_EVENT),
            ),
          1500,
        );
      },
      true,
    );
  }

  async extractFormRules() {
    return rules.isGoogleFormsPage()
      ? rules.extractGoogleFormsRules()
      : rules.extractRules({ eagerSelectOptions: false });
  }

  async getAutofillSnapshot(_fingerprint) {
    if (rules.isGoogleFormsPage()) return rules.getGoogleFormsSnapshot();
    const formRules = await rules.extractRules({
      eagerSelectOptions: false,
      silentLog: true,
    });
    return rules.getFormSnapshot(formRules);
  }

  async getSubmitSnapshot() {
    if (rules.isGoogleFormsPage()) return rules.getGoogleFormsSnapshot();
    const formRules = await rules.extractRules({
      eagerSelectOptions: false,
      silentLog: true,
    });
    return rules.getFormSnapshot(formRules);
  }

  getAdditionalAutofillSnapshotData(_snapshot) {
    return {};
  }

  async handleResumeUpload() {
    let uploaded = false;
    if (this.disableUploadResume) {
      this.taskQueue.add(async () => {
        await operations.removeResume();
        this.progressTracker.updateMissedProgress("Resume/CV");
      });
    } else {
      this.taskQueue.add(async () => {
        uploaded = await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        );
      });
    }
    await this.taskQueue.run();
    this._resumeUploaded = uploaded;
  }

  async fetchFormAnswers(formRules, fromAgent) {
    const falconRequest =
      falconAnswerTracking.beginFalconResponseAnswerRequest();
    try {
      const waitForToken = async () => {
        const started = Date.now();
        let attempt = 0;
        while (Date.now() - started < 6000) {
          attempt++;
          const token = ((await answerMethods.getSiteToken()) ?? "")
            .toString()
            .trim();
          if (token) return token;
          await delay.delay(Math.min(800, 200 + 150 * attempt));
        }
        return "";
      };
      if (!this.token) this.token = await waitForToken();
      if (!this.token) {
        track.sendHttpStatusMessage("TOKEN_MISSING");
        return "TOKEN_MISSING";
      }
      const elements = googleAnswer.serializeRulesForApi(formRules);
      if (!elements?.length) {
        track.sendHttpStatusMessage("NO_ELEMENTS");
        return "NO_ELEMENTS";
      }
      const response = await googleAnswer.requestGoogleFormAnswers({
        elements,
        token: this.token,
        getSiteName: this.getSiteName(),
        fromAgent: !!(
          fromAgent ||
          contents.agentTailorId ||
          contents.agentResumeId
        ),
        resumeId: this.resumeInfo?.id,
        tailorId: this.resumeInfo?.tailorId,
      });
      if (response)
        this.answer = answerMethods.initUserData(response, falconRequest);
    } catch (error) {
      if (
        error instanceof answerMethods.HTTPError ||
        error instanceof answerMethods.ResumeMissingCodeError
      ) {
        track.sendHttpStatusMessage(error.message);
        return error.message;
      }
    }
    cancellation.checkpoint();
  }

  getSubmitButtonSelector() {
    return './/button[contains(@aria-label, "Submit") or contains(., "Submit")]';
  }

  submitApplication() {
    try {
      operations.clickSubmitButton(this.getSubmitButtonSelector());
    } catch {
      /* ignore */
    }
  }

  async doFillForm(fromAgent = false) {
    if (rules.isGoogleFormsPage())
      return this.fillFormForGoogleForms(fromAgent);
    await this.initializeFillForm();
    await rules.waitForGooglePageClean();
    this.tracking.startOrResumeRun();
    const root = document.body;
    await operations.resetFormBaselineBeforeFetch(root);
    const defaultRadios = {
      "Attended university degree program?": "yes",
      "Applying for your first job?": "no",
    };
    for (const [label, value] of Object.entries(defaultRadios)) {
      const group = root.querySelector(
        `[role="radiogroup"][aria-label="${label}"]`,
      );
      if (!group) continue;
      const radio = Array.from(
        group.querySelectorAll('input[type="radio"]'),
      ).find((input) => input.value.toLowerCase() === value);
      if (radio && !radio.checked) radio.click();
    }
    await delay.delay(300);
    const formRules = this.prepareCoverLetterRules(
      await this.extractFormRules(),
    );
    this.progressTracker.setFieldsRequiredStatus(formRules);
    const fetchResult = await this.fetchFormAnswers(formRules, fromAgent);
    if (typeof fetchResult === "string") return fetchResult;
    this.answer = googleAnswer.formatAnswer(this.answer, {
      autofillCountry: this.autofillCountry,
    });
    await this.handleResumeUpload();
    await delay.delay(600);
    const regular = this.answer.regular;
    const defaultEmail = operations.getDefaultEmailFromPage(root);
    const emailNormalized = googleAnswer.normalizeEmailsForContactDetails(
      regular,
      defaultEmail,
    );
    if (emailNormalized.regular !== regular) {
      this.answer.regular = emailNormalized.regular;
    }
    const additionalEmailCount = emailNormalized.additionalEmailCount;
    const additionalPhoneCount = Array.isArray(this.answer.regular.Phone)
      ? Math.max(0, this.answer.regular.Phone.length - 1)
      : 0;
    await this.fillCareersContactAndRegular(
      root,
      formRules,
      additionalEmailCount,
      additionalPhoneCount,
    );
    await this.fillCareersEducationIfNeeded();
    await this.fillCareersWorkExperienceIfNeeded(root);
    await this.fillCoverLetterFields();
    await operations.collapseOpenComboboxes();
    await this.fillDeferredGooglePhoneNumber();
    await this.recordCareersSnapshot();
    return await this.finalizeFillForm();
  }

  async fillCareersContactAndRegular(
    root,
    initialRules,
    additionalEmailCount,
    additionalPhoneCount,
  ) {
    await operations.syncContactAdditionalSlots(
      root,
      additionalEmailCount,
      additionalPhoneCount,
    );
    await operations.waitForAdditionalEmailInputsReady(
      root,
      additionalEmailCount,
    );
    const formRules =
      additionalEmailCount > 0 || additionalPhoneCount > 0
        ? coverLetter.markTextCoverLetterRules(await this.extractFormRules())
        : initialRules;
    this.progressTracker.setFieldsRequiredStatus(formRules);
    const withoutCover = coverLetter.withoutCoverLetterRules(formRules);
    const runRules = async (rulesToFill) => {
      const ops = answerMethods.getRegularOperations(
        rulesToFill,
        this.answer.regular,
        this.operationConfig,
      );
      for (const op of ops) this.taskQueue.add(op);
      await this.taskQueue.run();
    };
    const staged = rules.stageGooglePhoneCountryCodeRules(withoutCover, []);
    if (staged.countryCodeRules.length > 0) {
      await runRules(staged.countryCodeRules);
      await delay.delay(1500);
      const refreshed = await rules.extractRules({
        eagerSelectOptions: false,
        silentLog: true,
      });
      const restaged = rules.stageGooglePhoneCountryCodeRules(
        withoutCover,
        refreshed,
      );
      await runRules(restaged.postPhoneRules);
    } else {
      await runRules(withoutCover);
    }
    await delay.delay(300);
    await operations.collapseOpenComboboxes();
    const latestRules = await rules.extractRules({
      eagerSelectOptions: false,
      silentLog: true,
    });
    const regular = this.answer.regular;
    const countryStateRules = latestRules.filter((rule) => {
      const label = (rule.label || "").trim().toLowerCase();
      if (
        label === "country / region" ||
        label === "country" ||
        label === "country/region"
      ) {
        return true;
      }
      if (label !== "state / province" && label !== "state") return false;
      const value =
        label === "state / province"
          ? regular["State / province"]
          : regular.State;
      return String(value ?? "").trim() !== "";
    });
    if (countryStateRules.length > 0) {
      const ops = answerMethods.getRegularOperations(
        countryStateRules,
        regular,
        this.operationConfig,
      );
      for (const op of ops) this.taskQueue.add(op);
      await this.taskQueue.run();
    }
    await operations.retryFillAdditionalEmailsIfNeeded(
      root,
      this.answer.regular,
      additionalEmailCount,
    );
  }

  async fillDeferredGooglePhoneNumber() {
    const withoutCover = coverLetter.withoutCoverLetterRules(
      await this.extractFormRules(),
    );
    const staged = rules.stageGooglePhoneCountryCodeRules(withoutCover, []);
    if (staged.countryCodeRules.length === 0) return;
    const runRules = async (rulesToFill) => {
      const ops = answerMethods.getRegularOperations(
        rulesToFill,
        this.answer.regular,
        this.operationConfig,
      );
      for (const op of ops) this.taskQueue.add(op);
      await this.taskQueue.run();
    };
    await runRules(staged.countryCodeRules);
    await delay.delay(1500);
    const refreshed = coverLetter.withoutCoverLetterRules(
      await this.extractFormRules(),
    );
    const restaged = rules.stageGooglePhoneCountryCodeRules(
      withoutCover,
      refreshed,
    );
    const regular = this.answer.regular;
    const rawCode = Array.isArray(regular["Country calling code"])
      ? regular["Country calling code"][0]
      : regular["Country calling code"];
    const expectedPrefix = String(rawCode ?? "").match(/\+\d{1,4}/)?.[0] ?? "";
    const phoneInput = restaged.phoneRules[0]?.$input;
    const livePrefix = phoneInput?.value?.trim().match(/^\+\d{1,4}/)?.[0] ?? "";
    const prefixMatches = !expectedPrefix || livePrefix === expectedPrefix;
    if (prefixMatches) await runRules(restaged.phoneRules);
  }

  async fillCareersEducationIfNeeded() {
    const attendedLabel = "Attended university degree program?";
    if (
      this.answer.regular[attendedLabel]?.toString().toLowerCase() !== "yes"
    ) {
      return;
    }
    const educationRows = Array.isArray(this.answer.education)
      ? this.answer.education
      : [];
    const mapped =
      educationRows.length > 0
        ? educationRows.map((row) =>
            googleAnswer.mapEducationRecordToRegular(row),
          )
        : [googleAnswer.mapEducationRecordToRegular(this.answer.regular)];
    if (mapped.length === 0) return;
    await operations.addHigherEducationDegreeSection(mapped.length);
    await delay.delay(500);
    const educationRules = await rules.getHigherEducationRules(false);
    if (educationRules.length === 0) return;
    coreDom.setSectionResultFocusRules("education", educationRules);
    let skipped = false;
    const ops = answerMethods.getEducationOperations(
      educationRules,
      mapped,
      this.operationConfig,
      undefined,
      {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onSkipped: () => {
          skipped = true;
        },
      },
    );
    for (const op of ops) this.taskQueue.add(op);
    await this.taskQueue.run();
    if (skipped) {
      this.progressTracker.updateMissedProgress("Education");
      return;
    }
    const snapshot = await rules.getStructuredEducationSnapshot(false);
    if (rules.isStructuredSectionFilled(snapshot, educationRules)) {
      this.progressTracker.updateFilledProgress("Education");
    } else {
      this.progressTracker.updateMissedProgress("Education");
    }
  }

  async fillCareersWorkExperienceIfNeeded(root) {
    if (!rules.findWorkExperienceSection(root)) return;
    const workRows = this.answer.regular["Work experience"];
    if (!Array.isArray(workRows) || workRows.length === 0) return;
    await operations.syncWorkExperienceSlots(root, workRows.length);
    await delay.delay(500);
    let skipped = false;
    const mergedRows = new Map();

    const fillWorkRules = async (overrideRules) => {
      const workRules = overrideRules ?? rules.getWorkExperienceRules();
      if (workRules.length <= 0) return;
      const hasOriginalIndex = workRules.some(
        (rule) => rule.__originalRowIndex !== undefined,
      );
      const answers = hasOriginalIndex
        ? workRules.map((rule) => workRows[rule.__originalRowIndex] ?? {})
        : workRows;
      const contextual = googleAnswer.attachGoogleEmploymentRuleContext(
        workRules,
        answers,
      );
      coreDom.setSectionResultFocusRules(
        "employment",
        hasOriginalIndex ? rules.getWorkExperienceRules() : contextual,
      );
      const ops = answerMethods.getEmploymentOperations(
        contextual,
        answers,
        this.operationConfig,
        undefined,
        {
          onSectionResultChanged: (result) => {
            for (const row of result.rows) {
              const originalIndex =
                workRules[row.index].__originalRowIndex ?? row.index;
              const previous = mergedRows.get(originalIndex);
              const fieldMap = new Map(
                (previous?.fields ?? []).map((field) => [field.label, field]),
              );
              for (const field of row.fields) fieldMap.set(field.label, field);
              const fields = [...fieldMap.values()];
              mergedRows.set(originalIndex, {
                ...previous,
                ...row,
                index: originalIndex,
                fields,
                status: fields.some((field) => field.status === "skipped")
                  ? "skipped"
                  : fields.some((field) => field.status === "missed")
                    ? "missed"
                    : fields.length > 0 &&
                        fields.every((field) => field.status === "filled")
                      ? "filled"
                      : "pending",
              });
            }
            this.progressTracker.updateSectionResult({
              ...result,
              rows: [...mergedRows.values()].sort(
                (left, right) => left.index - right.index,
              ),
            });
          },
          onSkipped: () => {
            skipped = true;
          },
        },
      );
      for (const op of ops) this.taskQueue.add(op);
      await this.taskQueue.run();
    };

    const findMissingWorkRules = (snapshot, workRules) => {
      const isTruthy = (value) => {
        const text = String(value ?? "")
          .trim()
          .toLowerCase();
        return (
          text === "true" || text === "yes" || text === "1" || text === "y"
        );
      };
      const hasText = (value) => String(value ?? "").trim() !== "";
      const answerHasField = (answer, label) => {
        const candidates =
          label === "State" || label === "State / province"
            ? [answer.State, answer["State / province"]]
            : [answer[label]];
        return candidates.some(
          (value) =>
            value != null &&
            (typeof value === "boolean" ||
              (typeof value === "number"
                ? !Number.isNaN(value)
                : Array.isArray(value)
                  ? value.some((item) => hasText(item))
                  : typeof value === "string" && value.trim() !== "")),
        );
      };
      const missing = [];
      workRules.forEach((rule, rowIndex) => {
        const children = (rule.children ?? []).filter(
          (child) => !!child?.label,
        );
        if (children.length === 0) return;
        const answer =
          workRows[rowIndex] && typeof workRows[rowIndex] === "object"
            ? workRows[rowIndex]
            : {};
        const relevant = children.filter(
          (child) =>
            !!child?.label &&
            (child.required === true || answerHasField(answer, child.label)),
        );
        if (relevant.length === 0) return;
        const snap = snapshot[rowIndex] ?? {};
        const isCurrent = isTruthy(snap["This is your current job"]);
        const missingLabels = new Set();
        for (const child of relevant) {
          const label = child.label;
          if (!label) continue;
          if (isCurrent && (label === "End Month" || label === "End Year")) {
            continue;
          }
          if (label === "State" || label === "State / province") {
            if (hasText(snap.State) || hasText(snap["State / province"])) {
              continue;
            }
            missingLabels.add(label);
            continue;
          }
          if (!hasText(snap[label])) missingLabels.add(label);
        }
        if (missingLabels.size === 0) return;
        const missingChildren = children.filter((child) =>
          missingLabels.has(child.label),
        );
        if (missingChildren.length !== 0) {
          missing.push({
            ...rule,
            children: missingChildren,
            __originalRowIndex: rowIndex,
          });
        }
      });
      return missing;
    };

    await fillWorkRules();
    if (skipped) {
      this.progressTracker.updateMissedProgress("Employment");
      return;
    }
    let snapshot = rules.getStructuredWorkExperienceSnapshot();
    let workRules = rules.getWorkExperienceRules();
    let missing = findMissingWorkRules(snapshot, workRules);
    if (missing.length > 0) {
      await delay.delay(400);
      await operations.collapseOpenComboboxes();
      snapshot = rules.getStructuredWorkExperienceSnapshot();
      workRules = rules.getWorkExperienceRules();
      const stillMissing = findMissingWorkRules(snapshot, workRules);
      if (stillMissing.length > 0) await fillWorkRules(stillMissing);
      if (skipped) {
        this.progressTracker.updateMissedProgress("Employment");
        return;
      }
      snapshot = rules.getStructuredWorkExperienceSnapshot();
      workRules = rules.getWorkExperienceRules();
    }
    coreDom.setSectionResultFocusRules("employment", workRules);
    if (rules.isStructuredSectionFilled(snapshot, workRules)) {
      this.progressTracker.updateFilledProgress("Employment");
    } else {
      this.progressTracker.updateMissedProgress("Employment");
    }
  }

  async recordCareersSnapshot() {
    const formRules = await rules.extractRules({
      eagerSelectOptions: false,
      silentLog: true,
    });
    const snapshot = await rules.getFormSnapshot(formRules);
    const education = await rules.getStructuredEducationSnapshot(false);
    const employment = rules.getStructuredWorkExperienceSnapshot();
    const fingerprint = rules.getCurrentStepFingerprint();
    this.tracking.recordAutofillSnapshot(fingerprint, snapshot, {
      education,
      employment,
    });
  }

  async fillFormForGoogleForms(fromAgent) {
    await this.initializeFillForm();
    this.tracking.startOrResumeRun();
    if (!this.disableUploadResume) {
      this.taskQueue.add(async () => {
        await operations.uploadFormsResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        );
      });
      await this.taskQueue.run();
    }
    const formRules = this.prepareCoverLetterRules(
      await rules.extractGoogleFormsRules(),
    );
    this.progressTracker.setFieldsRequiredStatus(formRules);
    const fetchResult = await this.fetchFormAnswers(formRules, fromAgent);
    if (typeof fetchResult === "string") return fetchResult;
    if (this.answer) {
      try {
        this.answer = googleAnswer.formatAnswer(this.answer, {
          autofillCountry: this.autofillCountry,
        });
      } catch {
        /* ignore */
      }
    }
    await this.runFormsRegularFill(formRules);
    await this.fillCoverLetterFields();
    this.recordFormsSnapshot();
    return await this.finalizeFillForm();
  }

  async runFormsRegularFill(formRules) {
    const regular = this.answer?.regular || {};
    const ops = answerMethods.getRegularOperations(
      coverLetter.withoutCoverLetterRules(formRules),
      regular,
      this.operationConfig,
    );
    for (const op of ops) this.taskQueue.add(op);
    await this.taskQueue.run();
  }

  recordFormsSnapshot() {
    this.tracking.recordAutofillSnapshot(
      rules.getFormsPageFingerprint(),
      rules.getGoogleFormsSnapshot(),
      { education: [], employment: [] },
    );
  }

  ensureFormsAutoAdvance() {
    if (this._formsAdvanceBound) return;
    this._formsAdvanceBound = true;
    document.body.addEventListener(
      "click",
      (event) => {
        if (rules.isFormsAdvanceButton(event.target)) {
          operations.sendFormsAdvanceSnapshot(this.tracking, () =>
            this.getSiteName(),
          );
        }
      },
      true,
    );
  }
}
