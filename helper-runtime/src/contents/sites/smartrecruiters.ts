// @ts-nocheck
/**
 * SmartRecruiters ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and smartrecruiters/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "smartrecruiters"
 */

import * as messaging from "@plasmohq/messaging"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as coreDom from "../../core/dom.js"
import * as xpath from "../../core/xpath.js"
import * as fieldLabel from "../../utils/fieldLabel.js"
import * as operations from "./smartrecruiters/operations.ts"
import * as rules from "./smartrecruiters/rules.ts"
import * as answerMethods from "../methods/answer.ts"
import * as smartRecruitersAnswer from "./smartrecruiters/answer.ts"
import * as locationOperation from "./smartrecruiters/location-operation.ts"
import * as educationOperation from "./smartrecruiters/education-operation.ts"
import * as optionResolveRollout from "../option-resolve-rollout.js"

const SUBMIT_BUTTON_TEXT_RE =
  /^(?:continue(?:\s+to\s+the\s+next\s+page|\s+application)?|next|submit(?:\s+application)?|apply(?:\s+now)?|review\s+and\s+submit|finish)$/i

function getElementAccessibleText(element) {
  return (
    element.textContent ||
    element.getAttribute("aria-label") ||
    element.getAttribute("title") ||
    ""
  )
    .replace(/\s+/g, " ")
    .trim()
}

function isDisabledControl(element) {
  return (
    (element instanceof HTMLButtonElement && element.disabled) ||
    "true" === element.getAttribute("aria-disabled")
  )
}

const institutionClientSearchAdapters = {
  requestStep: async (body) =>
    await messaging.sendToBackground({
      name: "resolveAutofillClientSearchStep",
      body,
    }),
  captureCandidates: operations.captureSmartRecruitersInstitutionCandidates,
  commitCandidate: (input, candidate, searchInput) =>
    operations.fillSmartRecruitersInstitutionCandidate(
      input,
      candidate,
      searchInput,
    ),
}

function findAnswerValueByLabel(answer, label) {
  const normalized = fieldLabel.normalizeFieldLabel(label)
  const regular = answer?.regular || {}
  for (const [key, value] of Object.entries(regular)) {
    if (fieldLabel.normalizeFieldLabel(key) === normalized) return value
  }
  const fillDataList = Array.isArray(answer?.fillDataList)
    ? answer.fillDataList
    : []
  for (const entry of fillDataList) {
    if (fieldLabel.normalizeFieldLabel(entry?.name) === normalized) {
      return entry.value
    }
  }
}

function isPhoneCountryCodeLabel(label) {
  return (
    fieldLabel.normalizeFieldLabel(label) ===
    fieldLabel.normalizeFieldLabel(
      rules.SMARTRECRUITERS_PHONE_COUNTRY_CODE_LABEL,
    )
  )
}

function maybeNormalizePhoneCountryValue(rule, value) {
  return isPhoneCountryCodeLabel(rule.label)
    ? rules.normalizeSmartRecruitersPhoneCountryText(value)
    : value
}

function buildAnswerSnapshotFromRecord(rulesList, answer) {
  const snapshot = {}
  for (const rule of rulesList) {
    if (
      rule.type === enums.FIELD_TYPE.EDUCATION ||
      rule.type === enums.FIELD_TYPE.EMPLOYMENT
    ) {
      continue
    }
    const value = findAnswerValueByLabel(answer, rule.label)
    if (void 0 !== value) {
      snapshot[rule.label] = maybeNormalizePhoneCountryValue(rule, value)
    }
  }
  return snapshot
}

function findNormalizedDateValue(record, label) {
  const normalizedRecord =
    smartRecruitersAnswer.normalizeSmartRecruitersDateRecordForRule(
      record,
      label,
    )
  const normalizedLabel = fieldLabel.normalizeFieldLabel(label)
  for (const [key, value] of Object.entries(normalizedRecord)) {
    if (fieldLabel.normalizeFieldLabel(key) === normalizedLabel) return value
  }
}

function mapRecordsToRuleSnapshot(sectionRules, records) {
  const template = sectionRules[0]
  return records.map((record, index) => {
    const sectionRule = sectionRules[index] || template
    const children = sectionRule?.children || []
    const snapshot = {}
    for (const child of children) {
      const value = findNormalizedDateValue(record, child.label)
      if (void 0 !== value) snapshot[child.label] = value
    }
    return snapshot
  })
}

function readOptionText(option) {
  return (
    (option &&
      (option.textContent?.replace?.(/\s+/g, " ")?.trim?.() ||
        option.getAttribute?.("label")?.trim?.() ||
        option.getAttribute?.("value")?.trim?.())) ||
    ""
  )
}

function collectSelectOptions(select) {
  const light = Array.from(select.querySelectorAll?.("spl-select-option") || [])
  const shadow = Array.from(
    select.shadowRoot?.querySelectorAll?.("spl-select-option") || [],
  )
  return [...light, ...shadow]
}

function readSelectValue(select) {
  const value =
    select.getAttribute?.("value")?.trim?.() ||
    ("string" == typeof select.value ? select.value.trim() : "")
  const options = collectSelectOptions(select)
  if (value) {
    const matched = options.find(
      (option) => option.getAttribute?.("value") === value,
    )
    const text = readOptionText(matched || null)
    if (text) return text
  }
  const selectedLight = select.querySelector?.(
    '[aria-selected="true"], spl-select-option[selected]',
  )
  const selectedLightText = readOptionText(selectedLight)
  if (selectedLightText) return selectedLightText
  const selectedShadow = select.shadowRoot?.querySelector?.(
    '[aria-selected="true"], spl-select-option[selected]',
  )
  const selectedShadowText = readOptionText(selectedShadow)
  if (selectedShadowText) return selectedShadowText
  const button = select.shadowRoot?.querySelector?.("button")
  return button?.textContent?.trim()
    ? button.textContent.trim()
    : value || select.textContent?.trim?.() || ""
}

function readInputValue(element) {
  if (!element) return ""
  if (element.tagName?.toLowerCase?.() === "spl-select") {
    return readSelectValue(element)
  }
  if (void 0 !== element.value) return element.value
  const shadowInput = element.shadowRoot?.querySelector?.(
    "input, textarea",
  )
  if (shadowInput && void 0 !== shadowInput.value) return shadowInput.value
  const selectedLight = element.querySelector?.(
    '[aria-selected="true"], spl-select-option[selected]',
  )
  if (selectedLight?.textContent?.trim()) {
    return selectedLight.textContent.trim()
  }
  const selectedShadow = element.shadowRoot?.querySelector?.(
    '[aria-selected="true"], spl-select-option[selected]',
  )
  if (selectedShadow?.textContent?.trim()) {
    return selectedShadow.textContent.trim()
  }
  const button = element.shadowRoot?.querySelector?.("button")
  return button?.textContent?.trim()
    ? button.textContent.trim()
    : element.textContent?.trim?.() || ""
}

function cleanTagText(text) {
  return String(text ?? "")
    .replace(/\s+/g, " ")
    .replace(/\s*\u00d7\s*$/, "")
    .trim()
}

function collectMultiSelectTags(root) {
  if (!root?.querySelectorAll) return []
  const selectors = [
    "spl-tag",
    '[class*="tag"]',
    '[class*="chip"]',
    '[class*="pill"]',
    '[class*="selected-value"]',
    '[class*="selected-option"]',
  ]
  const tags = []
  for (const selector of selectors) {
    const elements = Array.from(root.querySelectorAll(selector) || [])
    for (const element of elements) {
      const text = cleanTagText(element.textContent)
      if (text && !tags.includes(text)) tags.push(text)
    }
  }
  return tags
}

function readMultiSelectValue(input) {
  const trigger = input?.closest?.(
    'div[class*="c-spl-multiselect-autocomplete-trigger"]',
  )
  const host = input?.closest?.("spl-multiselect-autocomplete")
  const roots = [trigger, trigger?.shadowRoot, host, host?.shadowRoot].filter(
    Boolean,
  )
  for (const root of roots) {
    const tags = collectMultiSelectTags(root)
    if (tags.length > 0) return tags.join(", ")
  }
  return cleanTagText(readInputValue(input))
}

function readCheckboxValue(rule) {
  const checkboxes = rule.$checkboxs || []
  return checkboxes.some((checkbox) => checkbox.checked) ? "Yes" : "No"
}

function readRadioGroupValue(rule) {
  const parent = rule.$radioParent
  const radios = Array.from(parent?.querySelectorAll?.("spl-radio") || [])
  for (const radio of radios) {
    const input = radio.shadowRoot?.querySelector('input[type="radio"]')
    if (!input?.checked) continue
    const label = radio.shadowRoot?.querySelector(
      'span[class*="c-spl-form-field-label-wrapper"]',
    )
    return label?.textContent?.trim() || input.value || ""
  }
  return ""
}

function readRuleValue(rule) {
  let value
  if (rule.type === enums.FIELD_TYPE.CHECKBOX) value = readCheckboxValue(rule)
  else if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
    value = readRadioGroupValue(rule)
  } else if (rule.type === enums.FIELD_TYPE.MULTI_SELECT) {
    value = readMultiSelectValue(rule.$input)
  } else {
    value = readInputValue(rule.$input)
  }
  return maybeNormalizePhoneCountryValue(rule, value)
}

function buildFormSnapshot(rulesList) {
  const snapshot = {}
  for (const rule of rulesList) {
    if (
      rule.type !== enums.FIELD_TYPE.EDUCATION &&
      rule.type !== enums.FIELD_TYPE.EMPLOYMENT
    ) {
      snapshot[rule.label] = readRuleValue(rule)
    }
  }
  return snapshot
}

function buildSectionSnapshots(sectionRules) {
  return sectionRules.map((rule) => buildFormSnapshot(rule.children || []))
}

function getEducationOrEmploymentRules(isEmployment) {
  try {
    return rules.processEduOrWorkExpAnwser(isEmployment) || []
  } catch {
    return []
  }
}

function hasAnyFilledValue(record) {
  return Object.values(record).some((value) => String(value ?? "").trim())
}

function normalizeMatchText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function getSavedSectionEntryTexts(isEmployment) {
  if ("undefined" == typeof document) return []
  const sectionTag = isEmployment ? "oc-experience" : "oc-education"
  const entryTag = isEmployment
    ? "oc-experience-entry"
    : "oc-education-entry"
  const entries = Array.from(
    document.querySelector(sectionTag)?.querySelectorAll(entryTag) || [],
  )
  return entries
    .map((entry) => normalizeMatchText(entry.textContent))
    .filter(Boolean)
}

function scoreRecordAgainstEntryText(record, entryText, isEmployment) {
  const keys = isEmployment
    ? ["Title", "Company", "Office location"]
    : ["Institution", "Major", "Degree"]
  return keys.reduce((score, key) => {
    const value = normalizeMatchText(record[key])
    return value && entryText.includes(value) ? score + 1 : score
  }, 0)
}

function alignRecordsToSavedEntries(records, isEmployment) {
  const entryTexts = getSavedSectionEntryTexts(isEmployment)
  if (0 === entryTexts.length) return []
  const usedIndexes = /* @__PURE__ */ new Set()
  return entryTexts
    .map((entryText, entryIndex) => {
      let bestIndex = -1
      let bestScore = 0
      records.forEach((record, recordIndex) => {
        if (usedIndexes.has(recordIndex)) return
        const score = scoreRecordAgainstEntryText(
          record,
          entryText,
          isEmployment,
        )
        if (score > bestScore) {
          bestScore = score
          bestIndex = recordIndex
        }
      })
      if (bestIndex >= 0) {
        usedIndexes.add(bestIndex)
        return records[bestIndex]
      }
      const fallback = records[entryIndex]
      if (fallback) {
        usedIndexes.add(entryIndex)
        return fallback
      }
    })
    .filter(Boolean)
}

function resolveSectionSnapshot(isEmployment, trackingRules) {
  const liveRules = getEducationOrEmploymentRules(isEmployment)
  const liveSnapshots = buildSectionSnapshots(liveRules)
  if (liveSnapshots.some(hasAnyFilledValue)) {
    const aligned = alignRecordsToSavedEntries(liveSnapshots, isEmployment)
    return aligned.length > 0 ? aligned : liveSnapshots
  }
  return alignRecordsToSavedEntries(
    buildSectionSnapshots(trackingRules),
    isEmployment,
  ).filter(hasAnyFilledValue)
}

function resolveSectionSnapshotFromAnswer(
  isEmployment,
  trackingRules,
  answerRecords,
) {
  const mapped = mapRecordsToRuleSnapshot(trackingRules, answerRecords)
  const aligned = alignRecordsToSavedEntries(mapped, isEmployment)
  return aligned.length > 0 ? aligned : mapped
}

const normalizeEmploymentRecordForRule = (rule, record) =>
  smartRecruitersAnswer.normalizeSmartRecruitersDateRecordForRule(
    record,
    rule.label,
  )

class SmartRecruiters extends BaseFiller {
  isSmartRecruitersInstitutionResolveEnabled() {
    return optionResolveRollout.V119_OPTION_RESOLVE_ROLLOUT
      .smartRecruitersEducationInstitution
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: async (rule, values) => {
        const value = values?.[0]
        if (locationOperation.isSmartRecruitersCityAutocompleteRule(rule)) {
          return this.fillSmartRecruitersCity(rule, String(value ?? ""))
        }
        if (
          this.isSmartRecruitersInstitutionResolveEnabled() &&
          educationOperation.isSmartRecruitersInstitutionRule(rule)
        ) {
          try {
            const result =
              await educationOperation.resolveSmartRecruitersInstitutionClientSearch(
                rule.$input,
                String(value ?? ""),
                institutionClientSearchAdapters,
              )
            if (!result.success) {
              this.educationInstitutionFailed = true
              console.warn(
                "[SmartRecruiters][Institution] client-search-failed",
                {
                  reason: result.failureReason || "unknown-error",
                  roundCount: result.rounds.length,
                },
              )
              await this.markSmartRecruitersEducationInstitutionFailed(
                rule.$input,
                {
                  error: Error("client-search-failed"),
                  stage: "commit",
                },
              )
            }
            return result.success
          } catch (error) {
            await this.markSmartRecruitersEducationInstitutionFailed(
              rule.$input,
              {
                error,
                stage: "commit",
              },
            )
            return false
          }
        }
        if (value) {
          return operations.fillInputTextField(
            rule.$input,
            String(value ?? ""),
          )
        }
      },
      [enums.FIELD_TYPE.SELECT]: async (rule, values) =>
        locationOperation.isSmartRecruitersCityAutocompleteRule(rule)
          ? this.fillSmartRecruitersCity(rule, String(values?.[0] ?? ""))
          : operations.fillSelectField(rule, values),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, values) =>
        operations.fillCheckboxField(rule, values),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, values) =>
        operations.fillRadioGroupFiled(rule, values),
      [enums.FIELD_TYPE.MULTI_SELECT]: (rule, values) =>
        operations.fillMultiSelectField(rule, values),
    }
  }

  async fillSmartRecruitersCity(rule, answerValue) {
    const input = rule.$input
    if (this.deferredSmartRecruitersCityValues.has(input)) {
      const resolved = this.deferredSmartRecruitersCityValues.get(input)
      this.deferredSmartRecruitersCityValues.delete(input)
      console.info("[SmartRecruiters][City] commit-resumed", {
        hasResolvedCity: !!resolved,
      })
      return this.commitSmartRecruitersCity(input, resolved ?? "")
    }
    const resolvedCity = await this.resolveSmartRecruitersCity(
      input,
      answerValue,
    )
    return this.commitSmartRecruitersCity(input, resolvedCity)
  }

  async resolveSmartRecruitersCity(input, answerValue, capturedRequest) {
    const originalAnswer = locationOperation.getSmartRecruitersCityOriginalAnswer(
      this.answer,
      answerValue,
    )
    const startedAt = Date.now()
    if (void 0 === capturedRequest) {
      input.setAttribute(
        "data-jr-smartrecruiters-city-resolve-stage",
        "started",
      )
      console.info("[SmartRecruiters][City] resolve-start", {
        answerSource: originalAnswer.source,
        hasOriginalAnswer: !!originalAnswer.value,
      })
    }
    if (!originalAnswer.value) return null
    try {
      const requestUrl =
        void 0 === capturedRequest
          ? await operations.captureSmartRecruitersCityRequest(
              input,
              originalAnswer.value,
            )
          : capturedRequest
      if (!requestUrl) {
        console.warn("[SmartRecruiters][City] resolve-skipped", {
          reason: "autocomplete-request-not-captured",
        })
        input.setAttribute(
          "data-jr-smartrecruiters-city-resolve-stage",
          "request-missing",
        )
        return null
      }
      const operation = locationOperation.buildSmartRecruitersCityOperation({
        requestUrl,
        originalAnswer: originalAnswer.value,
      })
      const response = await messaging.sendToBackground({
        name: "resolveAutofillOperation",
        body: {
          operation,
          source: "smartrecruiters",
        },
      })
      const resolved =
        locationOperation.getSmartRecruitersResolvedCityValue(response)
      console.info("[SmartRecruiters][City] resolve-result", {
        action: response?.result?.action ?? "missing",
        selectedCount: response?.result?.selected_values?.length ?? 0,
        elapsedMs: Date.now() - startedAt,
      })
      return resolved || null
    } catch (error) {
      input.setAttribute(
        "data-jr-smartrecruiters-city-resolve-stage",
        "failed",
      )
      console.warn("[SmartRecruiters][City] resolve-failed", {
        reason: error instanceof Error ? error.message : "unknown-error",
        elapsedMs: Date.now() - startedAt,
      })
      return null
    }
  }

  async commitSmartRecruitersCity(input, resolvedCity) {
    if (!resolvedCity) {
      const previouslyFailed =
        "failed" ===
        input.getAttribute("data-jr-smartrecruiters-city-resolve-stage")
      await operations.clearSmartRecruitersCityField(input)
      input.setAttribute(
        "data-jr-smartrecruiters-city-resolve-stage",
        previouslyFailed ? "failed" : "empty-result",
      )
      return false
    }
    const committed = await operations.fillResolvedSmartRecruitersCityField(
      input,
      resolvedCity,
    )
    input.setAttribute(
      "data-jr-smartrecruiters-city-resolve-stage",
      committed ? "committed" : "commit-failed",
    )
    return committed
  }

  async fillRegularFields(formRules) {
    this.deferredSmartRecruitersCityValues.clear()
    const cityRules = formRules.filter(
      locationOperation.isSmartRecruitersCityAutocompleteRule,
    )
    if (1 !== cityRules.length) {
      await super.fillRegularFields(formRules)
      return
    }
    const [cityRule] = cityRules
    const cityInput = cityRule.$input
    const cityAnswer = String(
      answerMethods.findValueInRecord(cityRule.label, this.answer.regular) ??
        "",
    )
    const otherRules = formRules.filter(
      (rule) =>
        !locationOperation.isSmartRecruitersCityAutocompleteRule(rule),
    )
    const originalAnswer =
      locationOperation.getSmartRecruitersCityOriginalAnswer(
        this.answer,
        cityAnswer,
      )
    const startedAt = Date.now()
    let capturedRequest = null
    if (originalAnswer.value) {
      cityInput.setAttribute(
        "data-jr-smartrecruiters-city-resolve-stage",
        "started",
      )
      console.info("[SmartRecruiters][City] resolve-start", {
        answerSource: originalAnswer.source,
        hasOriginalAnswer: true,
      })
      try {
        capturedRequest = await operations.captureSmartRecruitersCityRequest(
          cityInput,
          originalAnswer.value,
          2,
        )
      } catch (error) {
        cityInput.setAttribute(
          "data-jr-smartrecruiters-city-resolve-stage",
          "failed",
        )
        console.warn("[SmartRecruiters][City] resolve-failed", {
          reason: error instanceof Error ? error.message : "unknown-error",
          elapsedMs: Date.now() - startedAt,
        })
      }
    }
    console.info("[SmartRecruiters][City] resolve-deferred", {
      immediateRuleCount: otherRules.length,
      hasCapturedRequest: !!capturedRequest,
    })
    await locationOperation.runDeferredSmartRecruitersCityResolution({
      startResolve: () =>
        capturedRequest
          ? this.resolveSmartRecruitersCity(
              cityInput,
              cityAnswer,
              capturedRequest,
            )
          : Promise.resolve(null),
      fillOtherFields: async () => {
        for (const operation of answerMethods.getRegularOperations(
          otherRules,
          this.answer.regular,
          this.operationConfig,
        )) {
          this.taskQueue.add(operation)
        }
        await this.taskQueue.run()
      },
      commitResolvedCity: async (resolvedCity) => {
        this.deferredSmartRecruitersCityValues.set(cityInput, resolvedCity)
        console.info("[SmartRecruiters][City] resolve-ready", {
          hasResolvedCity: !!resolvedCity,
          elapsedMs: Date.now() - startedAt,
        })
        for (const operation of answerMethods.getRegularOperations(
          [cityRule],
          this.answer.regular,
          this.operationConfig,
        )) {
          this.taskQueue.add(operation)
        }
        await this.taskQueue.run()
      },
    })
  }

  async markSmartRecruitersEducationInstitutionFailed(input, details) {
    this.educationInstitutionFailed = true
    if (details) {
      console.warn(
        `[SmartRecruiters][Institution] ${details.stage}-failed`,
        {
          reason:
            details.error instanceof Error
              ? details.error.name
              : "unknown-error",
        },
      )
    }
    try {
      await operations.clearSmartRecruitersInstitutionField(input)
    } catch (error) {
      console.warn("[SmartRecruiters][Institution] cleanup-failed", {
        reason: error instanceof Error ? error.name : "unknown-error",
      })
    }
  }

  async transformSmartRecruitersEducationRecordByRule(rule, record) {
    const normalized =
      smartRecruitersAnswer.normalizeSmartRecruitersDateRecordForRule(
        record,
        rule.label,
      )
    if (!educationOperation.isSmartRecruitersInstitutionRule(rule)) {
      return normalized
    }
    const input = rule.$input
    const originalAnswer =
      educationOperation.getSmartRecruitersInstitutionOriginalAnswer(
        normalized,
      )
    return originalAnswer
      ? {
          ...normalized,
          [rule.label]: originalAnswer,
        }
      : (await this.markSmartRecruitersEducationInstitutionFailed(input),
        {
          ...normalized,
          [rule.label]: "",
        })
  }

  async doFillForm(skipFetch = false) {
    await this.initializeFillForm()
    let formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    await this.handleResumeUpload()
    const fetchResult = await this.fetchFormAnswers(formRules, skipFetch)
    if ("string" == typeof fetchResult) return fetchResult
    this.answer = smartRecruitersAnswer.formatAnswer(this.answer, formRules)
    await this.fillRegularFields(formRules)
    const comboResult = await this.runComboQuestionAutofillIfNeeded(
      formRules,
      skipFetch,
    )
    return "string" == typeof comboResult
      ? comboResult
      : ((formRules = comboResult),
        await this.executeSiteSpecificSteps(formRules),
        this.finalizeFillForm())
  }

  async executeSiteSpecificSteps(formRules) {
    this.trackingEducationRules = []
    this.trackingEmploymentRules = []
    await operations.clickAddButton(
      true,
      this.answer.workExperience?.length - 1 || 0,
    )
    await operations.clickAddButton(
      false,
      this.answer.education?.length - 1 || 0,
    )

    if (this.answer.workExperience.length > 0) {
      const employmentRules = rules.processEduOrWorkExpAnwser(true)
      this.trackingEmploymentRules = employmentRules || []
      coreDom.setSectionResultFocusRules(
        "employment",
        employmentRules || [],
      )
      const employmentOperations = answerMethods.getEmploymentOperations(
        employmentRules,
        this.answer.workExperience,
        this.operationConfig,
        normalizeEmploymentRecordForRule,
        {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onCompleted: () =>
            this.progressTracker.updateFilledProgress("Employment"),
          onSkipped: () =>
            this.progressTracker.updateMissedProgress("Employment"),
        },
      )
      for (const operation of [...employmentOperations]) {
        this.taskQueue.add(operation)
      }
      await this.taskQueue.run()
      await operations.clickSaveButton(true)
      const savedFocusRules = rules.getSavedSmartRecruitersSectionFocusRules(
        true,
        employmentRules,
      )
      if (savedFocusRules) {
        this.trackingEmploymentRules = savedFocusRules
        coreDom.setSectionResultFocusRules("employment", savedFocusRules)
      } else {
        console.debug(
          "[Autofill][smartrecruiters-section-focus] saved targets unavailable",
          {
            type: "employment",
            expectedRecords: employmentRules.length,
          },
        )
      }
    }

    if (this.answer.education.length > 0) {
      this.educationInstitutionFailed = false
      const educationRules = rules.processEduOrWorkExpAnwser(false)
      this.trackingEducationRules = educationRules || []
      coreDom.setSectionResultFocusRules("education", educationRules || [])
      const educationOperations = answerMethods.getEducationOperations(
        educationRules,
        this.answer.education,
        this.operationConfig,
        (rule, record) =>
          this.isSmartRecruitersInstitutionResolveEnabled()
            ? this.transformSmartRecruitersEducationRecordByRule(rule, record)
            : smartRecruitersAnswer.normalizeSmartRecruitersDateRecordForRule(
                record,
                rule.label,
              ),
        {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onCompleted: () => {
            if (this.educationInstitutionFailed) {
              this.progressTracker.updateMissedProgress("Education")
              return
            }
            this.progressTracker.updateFilledProgress("Education")
          },
          onSkipped: () =>
            this.progressTracker.updateMissedProgress("Education"),
        },
      )
      for (const operation of [...educationOperations]) {
        this.taskQueue.add(operation)
      }
      if (
        (await this.taskQueue.run(), !this.educationInstitutionFailed)
      ) {
        await operations.clickSaveButton(false)
        const savedFocusRules =
          rules.getSavedSmartRecruitersSectionFocusRules(
            false,
            educationRules,
          )
        if (savedFocusRules) {
          this.trackingEducationRules = savedFocusRules
          coreDom.setSectionResultFocusRules("education", savedFocusRules)
        } else {
          console.debug(
            "[Autofill][smartrecruiters-section-focus] saved targets unavailable",
            {
              type: "education",
              expectedRecords: educationRules.length,
            },
          )
        }
      }
    }

    await this.bindSubmitButtonTracking(formRules)
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "smartrecruiters"
  }

  async handleResumeUpload() {
    if (this.disableUploadResume) {
      await operations.removeResume()
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(async () => {
        await operations.removeResume()
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    }
    await this.taskQueue.run()
  }

  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(@class, "submit") or normalize-space(.)="Submit" or normalize-space(.)="Next" or normalize-space(.)="Continue" or normalize-space(.)="Continue To The Next Page"]'
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  resolveDelegatedSubmitButton(target) {
    const button = target.closest("button")
    if (button instanceof HTMLButtonElement) {
      if (isDisabledControl(button)) return null
      const text = getElementAccessibleText(button)
      return SUBMIT_BUTTON_TEXT_RE.test(text) ? button : null
    }
    const splButton = target.closest("spl-button")
    if (!splButton || isDisabledControl(splButton)) return null
    const text = getElementAccessibleText(splButton)
    if (!SUBMIT_BUTTON_TEXT_RE.test(text)) return null
    const shadowButton = splButton.shadowRoot?.querySelector("button")
    return shadowButton instanceof HTMLButtonElement
      ? isDisabledControl(shadowButton)
        ? null
        : shadowButton
      : splButton
  }

  async getAutofillSnapshot(formRules) {
    this.trackingRules = formRules
    const liveSnapshot = buildFormSnapshot(formRules)
    return hasAnyFilledValue(liveSnapshot)
      ? liveSnapshot
      : buildAnswerSnapshotFromRecord(formRules, this.answer)
  }

  async getSubmitSnapshot() {
    return this.trackingRules.length > 0
      ? buildFormSnapshot(this.trackingRules)
      : await rules.getFormSnapshot()
  }

  getAdditionalAutofillSnapshotData() {
    const additional = {}
    if (this.trackingEducationRules.length > 0) {
      const education = resolveSectionSnapshot(
        false,
        this.trackingEducationRules,
      )
      if (education.length > 0) additional.education = education
      else if ((this.answer.education || []).length > 0) {
        additional.education = mapRecordsToRuleSnapshot(
          this.trackingEducationRules,
          this.answer.education || [],
        )
      }
    }
    if (this.trackingEmploymentRules.length > 0) {
      const employment = resolveSectionSnapshot(
        true,
        this.trackingEmploymentRules,
      )
      if (employment.length > 0) additional.employment = employment
      else if ((this.answer.workExperience || []).length > 0) {
        additional.employment = mapRecordsToRuleSnapshot(
          this.trackingEmploymentRules,
          this.answer.workExperience || [],
        )
      }
    }
    return additional
  }

  getAdditionalSubmitSnapshotData() {
    const additional = {}
    if (this.trackingEducationRules.length > 0) {
      const education = resolveSectionSnapshot(
        false,
        this.trackingEducationRules,
      )
      if (education.length > 0) additional.education = education
      else if ((this.answer.education || []).length > 0) {
        additional.education = resolveSectionSnapshotFromAnswer(
          false,
          this.trackingEducationRules,
          this.answer.education || [],
        )
      }
    }
    if (this.trackingEmploymentRules.length > 0) {
      const employment = resolveSectionSnapshot(
        true,
        this.trackingEmploymentRules,
      )
      if (employment.length > 0) additional.employment = employment
      else if ((this.answer.workExperience || []).length > 0) {
        additional.employment = resolveSectionSnapshotFromAnswer(
          true,
          this.trackingEmploymentRules,
          this.answer.workExperience || [],
        )
      }
    }
    return additional
  }

  submitApplication() {
    const selector =
      './/button[@type="submit" or contains(@class, "submit")]'
    const button = xpath.getFirstOrderedNode(selector)
    if (button) button?.click()
  }

  constructor(...args) {
    super(...args)
    this.hasComboQuestions = true
    this.comboQuestionMaxRounds = 4
    this.comboQuestionSettleDelayMs = 600
    this.comboQuestionQuietPeriodMs = 200
    this.comboQuestionSettleMaxWaitMs = 1600
    this.trackingRules = []
    this.trackingEducationRules = []
    this.trackingEmploymentRules = []
    this.educationInstitutionFailed = false
    this.deferredSmartRecruitersCityValues = /* @__PURE__ */ new Map()
  }
}

export { SmartRecruiters }
