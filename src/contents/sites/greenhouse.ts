// @ts-nocheck
/**
 * Greenhouse ATS filler — source of truth (readable TypeScript).
 *
 * Bundled directly from this file (and greenhouse/*.ts) by
 * scripts/bundle-engine-helper.mjs — no synced .js companions.
 *
 * Site id: "greenhouse" (jobs.greenhouse.io / job-boards.greenhouse.io)
 */

import * as messaging from "@plasmohq/messaging";
import * as answer from "../methods/answer.ts";
import * as dom from "../methods/dom.ts";
import * as educationItemTrace from "./education-item-trace.js";
import * as greenhouseAnswer from "./greenhouse/answer.ts";
import * as educationOperation from "./greenhouse/education-operation.ts";
import * as locationOperation from "./greenhouse/location-operation.ts";
import * as resolveTracking from "./greenhouse/resolve-tracking.ts";
import * as rules from "./greenhouse/rules.ts";
import * as snapshotAlignment from "./greenhouse/snapshot-alignment.ts";
import * as validationTracking from "./greenhouse/validation-tracking.ts";
import * as profileLocationOriginalAnswer from "./profile-location-original-answer.js";
import * as runtimeValidationTracking from "./runtime-validation-tracking.js";
import * as coreDom from "../../core/dom.js";
import * as enums from "../../core/enums.js";
import * as xpath from "../../core/xpath.js";
import * as autofillInfo from "../../store/autofillInfo.js";
import { BaseFiller } from "./base-filler.js";
import * as country from "./greenhouse/country.ts";
import * as operations from "./greenhouse/operations.ts";
import * as race from "./greenhouse/race.ts";

function trimStr(value) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeLabel(value) {
  return String(value ?? "")
    .trim()
    .replace(/\*+$/, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function greenhouseLocationFromProfile(answer) {
  return trimStr(
    answer?.profileData?.greenhouseLocation ??
      answer?.profile_data?.greenhouseLocation,
  );
}

function firstNonEmpty(value) {
  if (Array.isArray(value)) {
    for (let item of value) {
      let trimmed = trimStr(item);
      if (trimmed) return trimmed;
    }
    return "";
  }
  return trimStr(value);
}

function resolveLocationAnswer(answer, rule) {
  let profileOriginal =
    profileLocationOriginalAnswer.getProfileLocationOriginalAnswer(answer);
  if (profileOriginal.value) return profileOriginal;

  let candidateLabels = [
    rule.label,
    "Location (City)",
    "Location / City",
    "Location",
    "City",
    "city",
  ];
  let normalizedLabelSet = new Set(
    candidateLabels.map((label) => normalizeLabel(label)).filter(Boolean),
  );
  let regular = answer?.regular ?? {};

  for (let label of candidateLabels) {
    if (!Object.prototype.hasOwnProperty.call(regular, label)) continue;
    let value = firstNonEmpty(regular[label]);
    if (value)
      return {
        value: value,
        source: `regular.${label}`,
      };
  }

  for (let [key, rawValue] of Object.entries(regular)) {
    if (!normalizedLabelSet.has(normalizeLabel(key))) continue;
    let value = firstNonEmpty(rawValue);
    if (value)
      return {
        value: value,
        source: `regular.${key}`,
      };
  }

  for (let entry of answer?.fillDataList ?? []) {
    let name = entry?.name;
    if (!normalizedLabelSet.has(normalizeLabel(name))) continue;
    let value = firstNonEmpty(entry?.value);
    if (value)
      return {
        value: value,
        source: `fillDataList.${name}`,
      };
  }

  return {
    value: "",
    source: "",
  };
}

function resolvePhoneCountryCode(answer) {
  let labelSet = new Set(
    [
      "Phone Country Code",
      "Country Phone Code",
      "Country Code",
      "phoneCountryCode",
      "phone_country_code",
    ].map((label) => normalizeLabel(label)),
  );
  let regular = answer?.regular ?? {};

  for (let [key, rawValue] of Object.entries(regular)) {
    if (!labelSet.has(normalizeLabel(key))) continue;
    let value = firstNonEmpty(rawValue);
    if (value) return value;
  }

  for (let entry of answer?.fillDataList ?? []) {
    if (!labelSet.has(normalizeLabel(entry?.name))) continue;
    let value = firstNonEmpty(entry?.value);
    if (value) return value;
  }

  return "";
}

function logLocation(message, data) {
  console.info(`[Greenhouse][Location] ${message}`, data);
}

function hasApiKeyParam(operation) {
  let apiKeyParam = operation?.search_request_schema?.params?.find?.(
    (param) => param?.name === "api_key",
  );
  return !!trimStr(apiKeyParam?.default_value);
}

function findCandidateLocationInput(root) {
  return root
    ? root.matches?.("#candidate-location, input#candidate-location")
      ? root
      : root.querySelector?.("#candidate-location, input#candidate-location")
    : null;
}

function resolveLocationInputRoot(rule) {
  let input = rule.$input;
  let candidate = findCandidateLocationInput(input);
  return candidate
    ? (candidate.closest(".select__container, .select") ?? input)
    : input?.querySelector?.(".select__control")
      ? input
      : null;
}

function isLocationSearchField(rule) {
  if (rule.type !== enums.FIELD_TYPE.SEARCH) return false;
  let label = normalizeLabel(rule.label);
  return (
    label === "location" ||
    label === "location (city)" ||
    label === "location / city" ||
    !!findCandidateLocationInput(rule.$input)
  );
}

class Greenhouse extends BaseFiller {
  constructor() {
    super();
    this.cachedRules = [];
    this.educationResolvePrefetchTaskMapPromise = null;
    this.educationResolveTrackingRecords = [];
    this.runtimeValidationTrackingData = {};
    this.lastAutofillSnapshot = {};
    this.lastAdditionalAutofillData = {};
    this.lastEducationRules = [];
    this.runtimeValidationRetryResults = [];
    this.educationTraceRunId = null;
    this.locationRuntimeValidationContext = null;
    this.initialCoverLetterObserver = null;
    this.currentRunCountryCommitted = false;
    this.formatAnswer = greenhouseAnswer.formatAnswer;
    this.scheduleInitialIframeCoverLetterCheck();
  }

  scheduleInitialIframeCoverLetterCheck() {
    if (typeof window === "undefined" || window.top === window.self) return;
    const check = () => {
      this.checkCoverLetter();
    };
    const delays = [500, 1500, 3000, 6000, 10000];
    delays.forEach((ms) => {
      window.setTimeout(check, ms);
    });
    if (typeof MutationObserver !== "undefined") {
      this.initialCoverLetterObserver = new MutationObserver(check);
      if (document.documentElement) {
        this.initialCoverLetterObserver.observe(document.documentElement, {
          childList: true,
          subtree: true,
        });
      }
      window.setTimeout(() => {
        this.initialCoverLetterObserver?.disconnect();
        this.initialCoverLetterObserver = null;
      }, 10000);
    }
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) => {
          let input = rule.$input;
          if (input?.classList.contains("iti__search-input")) {
            let itiRoot = input.closest(".iti");
            if (itiRoot) {
              let telInput = itiRoot.querySelector(
                "input[type='tel'], input:not(.iti__search-input)",
              );
              if (telInput) {
                input = telInput;
              }
            }
          }
          let normalizedLabel = rule.label
            .toLowerCase()
            .replace(/\s+/g, " ")
            .trim();
          let isDateField = /\bdate\b/.test(normalizedLabel);
          return isDateField
            ? operations.fillTextField(rule, value, input)
            : dom.fillInputTextField(input, value);
        },
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          operations.fillSelectField(
            rule,
            Array.isArray(value) ? value[0] : value,
          ),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SEARCH]: {
        handler: (rule, value) =>
          operations.fillAutocompleteField(
            rule,
            answer.buildAutocompleteAnswerCandidates(rule.label, value),
          ),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => dom.fillCheckBoxesField(rule, value),
        options: {
          expectArray: true,
        },
      },
    };
  }

  async checkCoverLetter() {
    let coverLetterInput = operations.getGreenhouseCoverLetterInput();
    let status = "";
    if (coverLetterInput) {
      status = operations.isGreenhouseCoverLetterRequired(coverLetterInput)
        ? "required"
        : "optional";
    }
    dom.postCoverLetterStatus(status);
  }

  getSiteName() {
    return "greenhouse";
  }

  async extractFormRules() {
    return await rules.getRules();
  }

  async runPreFillForm() {
    this.currentRunCountryCommitted = false;
    let result = await country.runGreenhouseCountryPrefill({
      preFillForm: async () => {
        this.taskQueue.add(operations.reinitializeEducationAndEmployment);
        await this.taskQueue.run();
      },
      fetchAutofillInfo: () =>
        autofillInfo.useAutofillInfoStore.getState().fetchAutofillInfo(),
      fillCountry: (countryValue) =>
        country.fillGreenhouseGeographicCountry(countryValue),
    });
    this.currentRunCountryCommitted = result.committed;
  }

  async fillRegularFields(formRules) {
    this.taskQueue.add(async () => {
      await operations.fillConsentCheckbox();
    });
    await this.taskQueue.run();

    let firstValue = (value) => (Array.isArray(value) ? value[0] : value);
    let normalizeAnswer = (value) =>
      String(firstValue(value) ?? "")
        .trim()
        .toLowerCase();
    let fillDataList = this.answer.fillDataList ?? [];
    let profileLocation = greenhouseLocationFromProfile(this.answer);
    let locationControlConfig =
      locationOperation.extractGreenhouseLocationControlConfig();
    let labelCounts = new Map();
    let selectOrSearchLabels = new Set();

    for (let rule of formRules) {
      labelCounts.set(rule.label, (labelCounts.get(rule.label) || 0) + 1);
      if (
        rule.type === enums.FIELD_TYPE.SELECT ||
        rule.type === enums.FIELD_TYPE.SEARCH
      ) {
        selectOrSearchLabels.add(rule.label);
      }
    }

    let duplicateSelectSearchLabels = new Set();
    for (let [label, count] of labelCounts) {
      if (count > 1 && selectOrSearchLabels.has(label)) {
        duplicateSelectSearchLabels.add(label);
      }
    }

    let duplicateLabelValues = new Map();
    for (let entry of fillDataList) {
      if (entry?.name && duplicateSelectSearchLabels.has(entry.name)) {
        let values = duplicateLabelValues.get(entry.name) ?? [];
        values.push(entry.value);
        duplicateLabelValues.set(entry.name, values);
      }
    }

    let fillTasks = [];
    for (let rule of formRules) {
      let handler = this.operationConfig[rule.type];
      if (handler) {
        if (race.isGreenhouseConditionalRaceRule(rule)) {
          fillTasks.push(async () => {
            if (race.findGreenhouseRaceContainer()) {
              this.progressTracker.updateFieldRequiredStatus(rule);
              await handler(rule, this.answer.regular);
            }
          });
          continue;
        }

        if (isLocationSearchField(rule)) {
          fillTasks.push(async () => {
            let inputRoot = resolveLocationInputRoot(rule);
            if (profileLocation) {
              logLocation("direct fill start", {
                label: rule.label,
                source: "profileData.greenhouseLocation",
                location: profileLocation,
              });
              let filled =
                !!inputRoot &&
                (await operations.fillAutocompleteField(
                  {
                    ...rule,
                    $input: inputRoot,
                  },
                  profileLocation,
                  {
                    allowPartialMatch: false,
                  },
                ));
              logLocation("fill result", {
                label: rule.label,
                source: "profileData.greenhouseLocation",
                resolvedLocation: profileLocation,
                filled: filled,
              });
              this.captureLocationRuntimeValidation({
                label: rule.label,
                sourceValue: profileLocation,
                attemptedCandidates: [profileLocation],
              });
              if (filled) {
                this.progressTracker.updateFilledProgress(rule.label);
              } else {
                this.progressTracker.updateMissedProgress(rule.label);
              }
              return;
            }

            let locationAnswer = resolveLocationAnswer(this.answer, rule);
            if (!locationAnswer.value) {
              logLocation("skip", {
                label: rule.label,
                reason: "empty profileData.greenhouseLocation and city",
              });
              this.progressTracker.updateMissedProgress(rule.label);
              return;
            }

            let locationOp = locationOperation.buildGreenhouseLocationOperation({
              currentUrl: this.getCurrentPageUrl(),
              originalAnswer: locationAnswer.value,
              locationControlConfig: locationControlConfig,
            });
            logLocation("resolve start", {
              label: rule.label,
              source: locationAnswer.source,
              originalAnswer: locationAnswer.value,
              searchUrl: locationOp.search_request_schema.url,
              hasApiKey: hasApiKeyParam(locationOp),
            });

            let resolveResult = await this.resolveEducationOperation(
              locationOp,
            );
            let resolvedLocation =
              locationOperation.getGreenhouseResolvedLocationValue(
                resolveResult,
              );
            let attemptedCandidates = resolvedLocation
              ? [resolvedLocation]
              : [];

            logLocation("resolve result", {
              label: rule.label,
              source: locationAnswer.source,
              action: resolveResult?.result?.action,
              selectedValues: resolveResult?.result?.selected_values ?? [],
              resolvedLocation: resolvedLocation,
            });

            if (!resolvedLocation) {
              logLocation("fill result", {
                label: rule.label,
                source: locationAnswer.source,
                resolvedLocation: resolvedLocation,
                filled: false,
                reason: "empty resolved location",
              });
              this.captureLocationRuntimeValidation({
                label: rule.label,
                sourceValue: locationAnswer.value,
                resolveValue: resolvedLocation,
                attemptedCandidates: attemptedCandidates,
              });
              this.progressTracker.updateMissedProgress(rule.label);
              return;
            }

            let filled =
              !!inputRoot &&
              (await operations.fillAutocompleteField(
                {
                  ...rule,
                  $input: inputRoot,
                },
                resolvedLocation,
                {
                  allowPartialMatch: false,
                },
              ));
            logLocation("fill result", {
              label: rule.label,
              source: locationAnswer.source,
              resolvedLocation: resolvedLocation,
              filled: filled,
            });
            this.captureLocationRuntimeValidation({
              label: rule.label,
              sourceValue: locationAnswer.value,
              resolveValue: resolvedLocation,
              attemptedCandidates: attemptedCandidates,
            });
            if (filled) {
              this.progressTracker.updateFilledProgress(rule.label);
            } else {
              this.progressTracker.updateMissedProgress(rule.label);
            }
          });
          continue;
        }

        if (
          duplicateSelectSearchLabels.has(rule.label) &&
          (rule.type === enums.FIELD_TYPE.SELECT ||
            rule.type === enums.FIELD_TYPE.SEARCH)
        ) {
          fillTasks.push(async () => {
            let values = duplicateLabelValues.get(rule.label) ?? [];
            let matchIndex = values.findIndex((candidate) =>
              (rule.options ?? []).some(
                (option) =>
                  normalizeAnswer(option) === normalizeAnswer(candidate),
              ),
            );
            if (matchIndex >= 0) {
              let matchedValue = firstValue(values.splice(matchIndex, 1)[0]);
              let filled = false;
              if (rule.type === enums.FIELD_TYPE.SELECT) {
                filled = await operations.fillSelectField(rule, matchedValue);
              } else {
                filled = await operations.fillAutocompleteField(
                  rule,
                  answer.buildAutocompleteAnswerCandidates(
                    rule.label,
                    matchedValue,
                  ),
                );
              }
              if (filled) {
                this.progressTracker.updateFilledProgress(rule.label);
              } else {
                this.progressTracker.updateMissedProgress(rule.label);
              }
            } else {
              await handler(rule, this.answer.regular);
            }
          });
        } else {
          fillTasks.push(async () => {
            await handler(rule, this.answer.regular);
          });
        }
      }
    }

    for (let task of fillTasks) {
      this.taskQueue.add(task);
    }
    await this.taskQueue.run();
  }

  async fillEducationAndEmployment(formRules) {
    let isJobBoards =
      typeof window !== "undefined" &&
      window.location?.hostname?.startsWith("job-boards.");

    await operations.addEducationSection(this.answer.education.length);

    let educationRules = isJobBoards
      ? await rules.getEduRule(false, false)
      : rules.getEducationRules();
    this.lastEducationRules = educationRules;
    coreDom.setSectionResultFocusRules("education", educationRules);

    let educationOps = answer.getEducationOperations(
      educationRules,
      this.answer.education,
      this.operationConfig,
      (rule, record, index) =>
        this.applyEducationResolvePrefetchForRule(rule.label, record, index),
      {
        onCompleted: () => {
          if (this.answer.education.length > 0) {
            this.progressTracker.updateFilledProgress("Education");
          }
        },
        onSkipped: () => {
          this.progressTracker.updateMissedProgress("Education");
        },
        onSectionResultChanged: this.progressTracker.updateSectionResult,
      },
      {
        fillReadyTransformedFieldsFirst: true,
      },
    );
    for (let op of educationOps) {
      this.taskQueue.add(op);
    }
    await this.taskQueue.run();

    await operations.addEmploymentSection(this.answer.workExperience.length);

    let employmentRules = isJobBoards
      ? await rules.getEmploymentRule(false, false)
      : rules.getExperienceRules();
    coreDom.setSectionResultFocusRules("employment", employmentRules);

    let employmentOps = answer.getEmploymentOperations(
      employmentRules,
      this.answer.workExperience,
      this.operationConfig,
      undefined,
      {
        onCompleted: () => {
          if (this.answer.workExperience.length > 0) {
            this.progressTracker.updateFilledProgress("Employment");
          }
        },
        onSkipped: () => {
          this.progressTracker.updateMissedProgress("Employment");
        },
        onSectionResultChanged: this.progressTracker.updateSectionResult,
      },
    );
    for (let op of employmentOps) {
      this.taskQueue.add(op);
    }
    await this.taskQueue.run();

    await operations.fillCurrentEmploymentCheckboxes(
      this.answer.workExperience,
    );
    this.taskQueue.add(async () => {
      await operations.fillCountryFieldFirstOption(
        this.answer.country,
        resolvePhoneCountryCode(this.answer),
      );
    });
    await this.taskQueue.run();
  }

  async executeSiteSpecificSteps(formRules) {
    await this.bindSubmitButtonTracking(formRules);
    this.taskQueue.add(async () => {
      await operations.fillAcknowledgeCheckbox();
      await operations.fillNestedAcknowledgeCheckbox();
    });
    await this.handleResumeUpload();
    if (this.coverLetter?.coverLetterId) {
      this.taskQueue.add(async () => {
        await operations.uploadCoverLetter(
          this.coverLetter,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        );
      });
    }
    await this.taskQueue.run();
  }

  getSubmitButtonSelector() {
    return './/*[@id="submit_app" or text()="Submit application"]';
  }

  getSubmitSuccessSelectors() {
    return [
      './/div[@class="confirmation"]/div[@class="confirmation__content"]',
      './/h2[contains(@class, "rich-text__title") and contains(text(), "We got your application")]',
    ];
  }

  async getAutofillSnapshot(formRules) {
    let isJobBoards =
      typeof window !== "undefined" &&
      window.location?.hostname?.startsWith("job-boards.");
    let snapshot = await rules.getFormSnapshot(formRules, isJobBoards);
    this.lastAutofillSnapshot = snapshot;
    return snapshot;
  }

  async getSubmitSnapshot() {
    let isJobBoards =
      typeof window !== "undefined" &&
      window.location?.hostname?.startsWith("job-boards.");
    return rules.getFormSnapshot(this.cachedRules, isJobBoards);
  }

  getAdditionalAutofillSnapshotData(formRules) {
    let traceRunId = this.ensureEducationTraceRunId();
    let snapshot =
      rules.getEduAndEmploymentSnapshot({
        markEducationRows: true,
        includeEducationSnapshotIndex: true,
        includeEducationTrace: true,
        educationTraceRunId: traceRunId,
      }) || {};
    this.lastAdditionalAutofillData = snapshot;
    this.refreshRuntimeValidationTrackingData();
    return snapshot;
  }

  getAdditionalSubmitSnapshotData() {
    return (
      rules.getEduAndEmploymentSnapshot({
        includeEducationSnapshotIndex: true,
        includeEducationTrace: true,
        educationTraceRunId: this.educationTraceRunId ?? undefined,
      }) || {}
    );
  }

  getAutofillAnswerPairExtraTrackingData() {
    return {
      ...resolveTracking.buildGreenhouseResolveTrackingData(
        this.educationResolveTrackingRecords,
      ),
      ...this.runtimeValidationTrackingData,
    };
  }

  normalizeAutofillAnswerPairTrackingData(data) {
    return snapshotAlignment.alignGreenhouseEducationAnswerPairTrackingData(
      data,
    );
  }

  async handleResumeUpload() {
    let required = operations.isResumeRequired();
    this.progressTracker.updateFieldRequiredStatus({
      label: "Resume/CV",
      required: required,
    });
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV");
    } else {
      this.taskQueue.add(async () => {
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        );
      });
    }
  }

  async doFillForm(skipAnswerFetch = false) {
    await this.initializeFillForm();
    let formRules = await this.extractFormRules();
    let { regularRules } = country.partitionGreenhouseCountryRules(formRules);
    this.cachedRules = formRules;
    this.progressTracker.setFieldsRequiredStatus(
      race.excludeGreenhouseConditionalRaceRules(formRules),
    );
    country.reconcileGreenhouseCountryProgress(
      formRules,
      this.currentRunCountryCommitted,
      {
        updateFilledProgress: this.progressTracker.updateFilledProgress,
        updateMissedProgress: this.progressTracker.updateMissedProgress,
      },
    );
    let answersOrError = await this.fetchFormAnswers(
      regularRules,
      skipAnswerFetch,
    );
    if (typeof answersOrError === "string") {
      return answersOrError;
    }
    operations.dismissAllReactSelectMenus();
    this.educationResolvePrefetchTaskMapPromise = null;
    this.educationResolveTrackingRecords = [];
    this.runtimeValidationTrackingData = {};
    this.runtimeValidationRetryResults = [];
    this.lastAutofillSnapshot = {};
    this.lastAdditionalAutofillData = {};
    this.lastEducationRules = [];
    this.educationTraceRunId = null;
    this.locationRuntimeValidationContext = null;
    this.startEducationResolvePrefetch();
    await this.fillRegularFields(regularRules);
    await this.fillEducationAndEmployment(formRules);
    await this.retryRuntimeValidationFailures(formRules);
    await this.executeSiteSpecificSteps(formRules);
    return await this.finalizeFillForm();
  }

  submitApplication() {
    let submitButton = xpath.getFirstOrderedNodeSafe(
      './/*[@id="submit_app" or text()="Submit application"]',
    );
    submitButton?.click();
  }

  getCurrentPageUrl() {
    return window.location.href;
  }

  async resolveEducationOperation(operation) {
    return await messaging.sendToBackground({
      name: "resolveAutofillOperation",
      body: {
        operation: operation,
        source: "greenhouse",
      },
    });
  }

  async getEducationResolvePrefetchRules() {
    let isJobBoards =
      typeof window !== "undefined" &&
      window.location?.hostname?.startsWith("job-boards.");
    let firstEducationRule = isJobBoards
      ? (await rules.getEduRule(false, true))?.[0]
      : rules.getEducationRules()?.[0];
    return (firstEducationRule?.children ?? [])
      .map((child) => ({
        label: child.label,
      }))
      .filter((child) =>
        educationOperation.shouldResolveEducationLabel(child.label),
      );
  }

  startEducationResolvePrefetch() {
    if (
      !this.educationResolvePrefetchTaskMapPromise &&
      Array.isArray(this.answer?.education) &&
      this.answer.education.length !== 0
    ) {
      this.educationResolvePrefetchTaskMapPromise = (async () => {
        try {
          let prefetchRules = await this.getEducationResolvePrefetchRules();
          if (prefetchRules.length === 0) return [];
          return educationOperation.createEducationRecordResolutionTaskMap({
            currentUrl: this.getCurrentPageUrl(),
            records: this.answer.education,
            rules: prefetchRules,
            resolveOperation: (operation) =>
              this.resolveEducationOperation(operation),
          });
        } catch (error) {
          console.warn(
            "[Greenhouse] Failed to prefetch education operations:",
            error,
          );
          return [];
        }
      })();
    }
  }

  async getEducationResolvePrefetchTaskMap() {
    if (!this.educationResolvePrefetchTaskMapPromise) {
      this.startEducationResolvePrefetch();
    }
    return (await this.educationResolvePrefetchTaskMapPromise) ?? [];
  }

  async applyEducationResolvePrefetchForRule(label, record, index) {
    if (!educationOperation.shouldResolveEducationLabel(label)) return record;
    let taskMap = await this.getEducationResolvePrefetchTaskMap();
    let prefetchTask = taskMap[index]?.[label];
    let prefetchedResolution = prefetchTask ? await prefetchTask : null;
    this.captureEducationResolveTracking(label, index, prefetchedResolution);
    return educationOperation.applyPrefetchedEducationResolutionForLabel({
      record: record,
      label: label,
      prefetchedResolution: Promise.resolve(prefetchedResolution),
    });
  }

  captureEducationResolveTracking(label, index, resolution) {
    let normalizedLabel = String(label ?? "")
      .trim()
      .toLowerCase();
    if (normalizedLabel !== "school" && normalizedLabel !== "discipline") {
      return;
    }
    let record = {
      ...(this.educationResolveTrackingRecords[index] ?? {}),
    };
    if (normalizedLabel === "school") {
      record.school =
        resolveTracking.getGreenhouseResolvedEducationValue(resolution);
      record.schoolPayload =
        resolveTracking.getGreenhouseResolveOperationPayload(resolution);
    } else {
      record.discipline =
        resolveTracking.getGreenhouseResolvedEducationValue(resolution);
      record.disciplinePayload =
        resolveTracking.getGreenhouseResolveOperationPayload(resolution);
    }
    this.educationResolveTrackingRecords[index] = record;
  }

  captureLocationRuntimeValidation(context) {
    this.locationRuntimeValidationContext = context;
  }

  async captureRuntimeValidationSnapshots(formRules) {
    await this.getAutofillSnapshot(formRules);
    this.getAdditionalAutofillSnapshotData(formRules);
  }

  isRuntimeValidationRetryCandidate(entry) {
    return (
      (entry.status === "mismatched" || entry.status === "empty") &&
      entry.attemptedCandidates.length > 0
    );
  }

  findEducationValidationRule(entry) {
    if (typeof entry.index !== "number") return null;
    let educationRule = this.lastEducationRules[entry.index];
    let children = Array.isArray(educationRule?.children)
      ? educationRule.children
      : [];
    return (
      children.find((child) => {
        let childLabel = String(child.label ?? "")
          .trim()
          .toLowerCase();
        return childLabel === entry.fieldLabel.toLowerCase();
      }) ?? null
    );
  }

  findLocationValidationRule() {
    return this.cachedRules.find((rule) => isLocationSearchField(rule)) ?? null;
  }

  async clearRuntimeValidationField(entry) {
    if (entry.fieldType === "location") {
      let locationRule = this.findLocationValidationRule();
      return operations.clearGreenhouseAutocompleteField(
        locationRule ? resolveLocationInputRoot(locationRule) : null,
      );
    }
    let educationRule = this.findEducationValidationRule(entry);
    return operations.clearGreenhouseAutocompleteField(
      educationRule?.$input ?? null,
    );
  }

  async refillRuntimeValidationField(entry) {
    if (entry.fieldType === "location") {
      let locationRule = this.findLocationValidationRule();
      let inputRoot = locationRule
        ? resolveLocationInputRoot(locationRule)
        : null;
      return (
        !!locationRule &&
        !!inputRoot &&
        operations.fillAutocompleteField(
          {
            ...locationRule,
            $input: inputRoot,
          },
          entry.attemptedCandidates,
          {
            allowPartialMatch: false,
          },
        )
      );
    }
    let educationRule = this.findEducationValidationRule(entry);
    return (
      !!educationRule &&
      educationRule.type === enums.FIELD_TYPE.SEARCH &&
      operations.fillAutocompleteField(
        educationRule,
        entry.attemptedCandidates,
        {
          allowPartialMatch: false,
        },
      )
    );
  }

  getValidationStatusForRetryResult(retryResult) {
    let validation = this.runtimeValidationTrackingData?.validation;
    if (retryResult.fieldType === "location") {
      return validation?.location?.status ?? "";
    }
    if (typeof retryResult.index !== "number") {
      return "";
    }
    return (
      validation?.education?.[retryResult.index]?.[retryResult.fieldType]
        ?.status ?? ""
    );
  }

  async retryRuntimeValidationFailures(formRules) {
    await this.captureRuntimeValidationSnapshots(formRules);
    let retryCandidates = validationTracking
      .getGreenhouseRuntimeValidationLogEntries(
        this.runtimeValidationTrackingData,
      )
      .filter((entry) => this.isRuntimeValidationRetryCandidate(entry));

    if (retryCandidates.length === 0) {
      return;
    }

    this.runtimeValidationRetryResults = [];
    for (let entry of retryCandidates) {
      await this.clearRuntimeValidationField(entry);
      await this.refillRuntimeValidationField(entry);
      this.runtimeValidationRetryResults.push({
        ...(typeof entry.index === "number"
          ? {
              index: entry.index,
            }
          : {}),
        fieldType: entry.fieldType,
        initialStatus: entry.status,
        initialCommittedValue: entry.committedValue,
        retryCount: 1,
        resetApplied: false,
      });
    }

    await this.captureRuntimeValidationSnapshots(formRules);
    for (let retryResult of this.runtimeValidationRetryResults) {
      let status = this.getValidationStatusForRetryResult(retryResult);
      if (status === "retry_matched") continue;
      let resetApplied = await this.clearRuntimeValidationField({
        ...(typeof retryResult.index === "number"
          ? {
              index: retryResult.index,
            }
          : {}),
        fieldType: retryResult.fieldType,
        fieldLabel:
          retryResult.fieldType === "location"
            ? (this.locationRuntimeValidationContext?.label ?? "Location")
            : retryResult.fieldType === "school"
              ? "School"
              : "Discipline",
        level: "warn",
        status: retryResult.initialStatus,
        committedValue: retryResult.initialCommittedValue,
        attemptedCandidates: [],
      });
      retryResult.resetApplied = resetApplied;
    }

    await this.captureRuntimeValidationSnapshots(formRules);
    runtimeValidationTracking.sendRuntimeValidationDeviationEvent({
      formUrl: this.getCurrentPageUrl(),
      source: this.getSiteName(),
      trackingData: this.runtimeValidationTrackingData,
    });
  }

  refreshRuntimeValidationTrackingData() {
    this.runtimeValidationTrackingData =
      validationTracking.buildGreenhouseRuntimeValidationTrackingData({
        educationRecords: this.answer.education ?? [],
        educationSnapshotRecords: Array.isArray(
          this.lastAdditionalAutofillData.education,
        )
          ? this.lastAdditionalAutofillData.education
          : [],
        educationResolveRecords: this.educationResolveTrackingRecords,
        autofillSnapshot: this.lastAutofillSnapshot,
        location: this.locationRuntimeValidationContext,
        retryResults: this.runtimeValidationRetryResults,
      });
    validationTracking
      .getGreenhouseRuntimeValidationLogEntries(
        this.runtimeValidationTrackingData,
      )
      .forEach((entry) => {
        let message = `[Greenhouse] ${entry.fieldLabel} validation ${entry.status}`;
        let details = {
          ...(typeof entry.index === "number"
            ? {
                index: entry.index,
              }
            : {}),
          fieldType: entry.fieldType,
          committedValue: entry.committedValue,
          attemptedCandidates: entry.attemptedCandidates,
        };
        if (entry.level === "info") {
          console.info(message, details);
        } else {
          console.warn(message, details);
        }
      });
  }

  ensureEducationTraceRunId() {
    if (!this.educationTraceRunId) {
      this.educationTraceRunId = educationItemTrace.createEducationTraceRunId();
    }
    return this.educationTraceRunId;
  }
}

export { Greenhouse };
export default Greenhouse;
