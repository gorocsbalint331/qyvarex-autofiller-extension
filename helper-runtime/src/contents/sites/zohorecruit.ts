// @ts-nocheck
/**
 * Zoho Recruit ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and zohorecruit/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "zohorecruit"
 */

import * as messaging from "@plasmohq/messaging"
import * as answerMethods from "../methods/answer.js"
import * as cancellation from "../methods/cancellation.js"
import * as dom from "../methods/dom.js"
import { BaseFiller } from "./base-filler.ts"
import * as zohoAnswer from "./zohorecruit/answer.ts"
import * as locationOperation from "./zohorecruit/location-operation.ts"
import * as operations from "./zohorecruit/operations.ts"
import * as progress from "./zohorecruit/progress.ts"
import * as rules from "./zohorecruit/rules.ts"
import * as enums from "../../core/enums.js"
import * as sectionResults from "../methods/section-results.js"
import * as zohoSectionResults from "./zohorecruit/section-results.ts"
import * as trace from "../../utils/trace.js"

function hasCrcFormRows() {
  return document.querySelectorAll(".crc-form-row").length > 0
}

function coerceBooleanFlag(value) {
  if (true === value) return true
  if (false === value || null == value) return false
  if (typeof value == "number") return value === 1
  const text = String(value).trim().toLowerCase()
  return ["true", "yes", "y", "1", "current", "present"].includes(text)
}

function isPresentEndDate(value) {
  const text = String(value ?? "")
    .trim()
    .toLowerCase()
  return ["present", "current", "ongoing"].includes(text)
}

function isEducationCurrentlyPursuing(record) {
  return "isCurrent" in record
    ? coerceBooleanFlag(record.isCurrent)
    : isPresentEndDate(record["End date"] || record.To || record.End)
}

function isExperienceCurrentlyWorking(record) {
  return "isCurrent" in record
    ? coerceBooleanFlag(record.isCurrent)
    : isPresentEndDate(record["End date"] || record.To || record.End)
}

function syncCheckboxChecked(input, checked) {
  if (input instanceof HTMLInputElement && input.checked !== checked) {
    input.click()
  }
}

async function clickImInterestedButton() {
  const buttons = Array.from(
    document.querySelectorAll(
      "button.lyte-button, button[type='button']",
    ),
  )
  const button = buttons.find((candidate) => {
    const text = candidate.textContent
      ?.replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
    return text === "i'm interested" || text === "i am interested"
  })
  if (!button) return false
  button.scrollIntoView({ block: "center", inline: "center" })
  button.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  button.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  button.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
  return true
}

async function extractRulesAfterInterestClick() {
  let formRules = await rules.getRules()
  if (formRules.length > 0 || hasCrcFormRows()) return formRules
  const clicked = await clickImInterestedButton()
  if (!clicked) return formRules
  for (
    let attempt = 0;
    attempt < 10 &&
    (await new Promise((resolve) => setTimeout(resolve, 500)),
    !((formRules = await rules.getRules()).length > 0 || hasCrcFormRows()));
    attempt++
  );
  return formRules
}

function getZohoSemanticType(rule) {
  return String(rule?.__zohoSemanticType || "")
}

function isAddressRule(rule) {
  return getZohoSemanticType(rule).startsWith("address.")
}

function getAddressClusterRoot(rule) {
  return rule?.__zohoClusterRoot || rule?.$fieldRow || rule?.$input || null
}

function buildFillOperations(
  formRules,
  regularAnswer,
  operationConfig,
  progressTracker,
  resolveCity,
) {
  const operationsList = []
  const scheduled = new Set()
  const addressClusters = new Map()
  for (const rule of formRules) {
    if (!isAddressRule(rule)) continue
    const root = getAddressClusterRoot(rule)
    const cluster = addressClusters.get(root) || []
    cluster.push(rule)
    addressClusters.set(root, cluster)
  }
  const enqueueSingle = (rule) => {
    operationsList.push(async () => {
      await operationConfig[rule.type]?.(rule, regularAnswer)
    })
  }
  for (const rule of formRules) {
    if (scheduled.has(rule)) continue
    if (isAddressRule(rule)) {
      const root = getAddressClusterRoot(rule)
      const cluster = addressClusters.get(root) || []
      if (cluster.length > 0) {
        cluster.forEach((clusterRule) => scheduled.add(clusterRule))
        operationsList.push(
          createAddressClusterFill(
            formRules,
            cluster,
            regularAnswer,
            operationConfig,
            progressTracker,
            resolveCity,
          ),
        )
        continue
      }
    }
    enqueueSingle(rule)
  }
  return operationsList
}

function findPhoneCountryCodeAnswer(answer) {
  const regular = answer?.regular || {}
  const preferredKeys = ["Phone Country Code", "Country Phone Code"]
  for (const key of preferredKeys) {
    const value = regular[key]
    if (null != value && String(value).trim()) {
      return String(value).trim()
    }
  }
  for (const [key, value] of Object.entries(regular)) {
    const keyLower = key.toLowerCase()
    const text = String(value ?? "").trim()
    if (
      text &&
      keyLower.includes("phone") &&
      keyLower.includes("country") &&
      keyLower.includes("code")
    ) {
      return text
    }
  }
  return answer?.country || ""
}

function createAddressClusterFill(
  formRules,
  cluster,
  regularAnswer,
  operationConfig,
  progressTracker,
  resolveCity,
) {
  return async () => {
    const findBySemantic = (semanticType) =>
      cluster.find(
        (rule) => getZohoSemanticType(rule) === semanticType,
      )
    const firstClusterIndex = formRules.findIndex((rule) =>
      cluster.includes(rule),
    )
    const precedingMobile = formRules
      .slice(
        0,
        firstClusterIndex === -1 ? formRules.length : firstClusterIndex,
      )
      .reverse()
      .find(
        (rule) => getZohoSemanticType(rule) === "contact.mobile",
      )
    if (precedingMobile) {
      await operations.waitForZohoPhoneFieldSettled(precedingMobile)
    }
    const countryRule = findBySemantic("address.country")
    const zipRule = findBySemantic("address.zip")
    const stateRule = findBySemantic("address.state")
    const cityRule = findBySemantic("address.city")
    const countryAnswer = findAnswerByLabels(
      ["Country", "Pays"],
      regularAnswer,
    )
    const postalAnswer = findAnswerByLabels(
      [
        "Zip/Postal Code",
        "Zip Code",
        "Postal Code",
        "ZIP",
        "Code postal",
      ],
      regularAnswer,
    )
    const stateAnswer = findAnswerByLabels(
      [
        "State/Province",
        "State",
        "Province",
        "État/Province",
        "Etat/Province",
        "État",
        "Etat",
      ],
      regularAnswer,
    )
    const cityAnswer = findAnswerByLabels(
      ["City", "Ville"],
      regularAnswer,
    )
    let resolved = false
    const isCityAutocomplete =
      locationOperation.isZohoRecruitCityAutocompleteRule(cityRule)
    if (!resolved && isCityAutocomplete) {
      resolved = await resolveCity(cityRule, cityAnswer, postalAnswer)
      await settleAddressClusterProgress(cluster, progressTracker)
      console.info("[ZohoRecruit][Address] city-resolve-settled", {
        cityResolveCommitted: resolved,
        hasPostalCode: !!postalAnswer,
        postalCodeEmpty: !readInputValue(zipRule),
      })
      if (!resolved) {
        progressTracker.updateMissedProgress(cityRule.label)
      }
    }
    if (!resolved && zipRule && postalAnswer) {
      resolved = await operations.selectZohoAutocompleteOption(
        zipRule,
        postalAnswer,
        [cityAnswer, stateAnswer, countryAnswer],
      )
      await settleAddressClusterProgress(cluster, progressTracker)
      if (!resolved) {
        resolved = hasAddressClusterValues(cluster)
      }
    }
    if (!resolved && cityRule && cityAnswer && !isCityAutocomplete) {
      resolved = await operations.selectZohoAutocompleteOption(
        cityRule,
        cityAnswer,
        [stateAnswer, countryAnswer, postalAnswer],
      )
      await settleAddressClusterProgress(cluster, progressTracker)
      if (!resolved) {
        resolved = hasAddressClusterValues(cluster)
      }
    }
    if (resolved) {
      await settleAddressClusterProgress(cluster, progressTracker, 1200)
    }
    if (!resolved) {
      await fillRuleIfEmpty(countryRule, regularAnswer, operationConfig)
      await fillRuleIfEmpty(zipRule, regularAnswer, operationConfig)
      await fillRuleIfEmpty(stateRule, regularAnswer, operationConfig)
      if (!isCityAutocomplete) {
        await fillRuleIfEmpty(cityRule, regularAnswer, operationConfig)
      }
    }
    await fillRuleIfEmpty(
      findBySemantic("address.street"),
      regularAnswer,
      operationConfig,
    )
    await settleAddressClusterProgress(cluster, progressTracker)
    const postalRule = await requeryPostalRule(zipRule, "address.zip")
    if (
      postalRule &&
      locationOperation.shouldRestoreZohoPostalCode({
        postalCode: postalAnswer,
        currentPostalCode: readInputValue(postalRule),
      })
    ) {
      console.info(
        "[ZohoRecruit][Postal] restore-after-address-settle",
        {
          cityResolveCommitted: resolved && isCityAutocomplete,
          postalRuleRequeried: postalRule !== zipRule,
        },
      )
      await fillRuleIfEmpty(
        postalRule,
        regularAnswer,
        operationConfig,
      )
      await settleAddressClusterProgress(cluster, progressTracker)
    }
  }
}

function findAnswerByLabels(labels, regularAnswer) {
  for (const label of labels) {
    try {
      return String(
        answerMethods.findValueInRecord(label, regularAnswer) || "",
      ).trim()
    } catch {
      continue
    }
  }
  return ""
}

function readInputValue(rule) {
  const input = rule?.$input
  return String(input?.value ?? "").trim()
}

async function requeryPostalRule(rule, semanticType) {
  if (!rule || rule?.$input?.isConnected !== false) return rule
  const freshRules = await rules.getRules()
  return (
    freshRules.find(
      (candidate) =>
        getZohoSemanticType(candidate) === semanticType &&
        (candidate.label === rule.label ||
          (candidate.name && candidate.name === rule.name)),
    ) || rule
  )
}

function hasAddressClusterValues(cluster) {
  const zipRule = cluster.find(
    (rule) => getZohoSemanticType(rule) === "address.zip",
  )
  const cityRule = cluster.find(
    (rule) => getZohoSemanticType(rule) === "address.city",
  )
  const stateRule = cluster.find(
    (rule) => getZohoSemanticType(rule) === "address.state",
  )
  const countryRule = cluster.find(
    (rule) => getZohoSemanticType(rule) === "address.country",
  )
  const zip = readInputValue(zipRule)
  const city = readInputValue(cityRule)
  const state = readInputValue(stateRule)
  const country = readInputValue(countryRule)
  return (
    !!(zip && (city || state || country)) ||
    !!(city && (state || country))
  )
}

async function settleAddressClusterProgress(
  cluster,
  progressTracker,
  durationMs = 300,
) {
  const startedAt = Date.now()
  while (Date.now() - startedAt < durationMs) {
    markFilledAddressFields(cluster, progressTracker)
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  markFilledAddressFields(cluster, progressTracker)
}

function markFilledAddressFields(cluster, progressTracker) {
  for (const rule of cluster) {
    const value = readInputValue(rule)
    if (
      value &&
      !progressTracker.fieldStatus.filledFields.includes(rule.label)
    ) {
      progressTracker.updateFilledProgress(rule.label)
    }
  }
}

async function fillRuleIfEmpty(rule, regularAnswer, operationConfig) {
  if (rule && !readInputValue(rule)) {
    await operationConfig[rule.type]?.(rule, regularAnswer)
  }
}

class ZohoRecruit extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: async (rule, value) => {
          const labelLower = rule.label.toLowerCase()
          if (
            labelLower.includes("phone") ||
            labelLower.includes("téléphone") ||
            labelLower.includes("mobile")
          ) {
            await operations.fillPhoneField(
              rule,
              value,
              findPhoneCountryCodeAnswer(this.answer),
              this.answer?.country,
            )
          } else {
            await operations.fillAutocompleteField(rule, value)
          }
        },
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: (rule, value) =>
          operations.fillZohoDateField(rule, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (rule, value) =>
          dom.fillCheckBoxesField(rule, [value]),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          operations.fillZohoDropdownDirectly(rule, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.MULTI_SELECT]: {
        handler: (rule, value) =>
          operations.fillMultiCheckbox(rule, value),
        options: {
          expectArray: false,
        },
      },
    }
  }

  getSiteName() {
    return "zohorecruit"
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
    await operations.clearAllPopups()
  }

  async extractFormRules() {
    return extractRulesAfterInterestClick()
  }

  formatAnswer(answer) {
    return zohoAnswer.formatAnswer(answer, answer.country)
  }

  async doFillForm(skipFetch = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    this.snapshotRules = formRules
    this.progressTracker.setFieldsRequiredStatus(formRules)
    const fetchResult = await this.fetchFormAnswers(
      formRules,
      skipFetch,
    )
    if (typeof fetchResult == "string") return fetchResult
    cancellation.checkpoint()
    const fillOps = buildFillOperations(
      formRules,
      this.answer.regular,
      this.operationConfig,
      this.progressTracker,
      (cityRule, cityAnswer, postalAnswer) =>
        this.resolveZohoCity(cityRule, cityAnswer, postalAnswer),
    )
    for (const op of fillOps) this.taskQueue.add(op)
    await this.taskQueue.run()
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(async () => {
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    }
    if (this.coverLetter?.coverLetterId) {
      this.taskQueue.add(async () => {
        await operations.uploadCoverLetter(
          this.coverLetter,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    }
    const skillRule = formRules.find(
      (rule) =>
        rule.type === "SKILL_SET" ||
        rule.label.toLowerCase().includes("skill") ||
        rule.label.toLowerCase().includes("compétence") ||
        rule.$input?.classList.contains("skillset-input"),
    )
    const skillLabel = skillRule?.label
    if (
      skillRule &&
      skillLabel &&
      this.answer.skills &&
      this.answer.skills.length > 0
    ) {
      this.progressTracker.updateFieldRequiredStatus({
        label: skillLabel,
        required: skillRule.required,
      })
      cancellation.updateCurrentField(skillLabel)
      try {
        await cancellation.withSkip(async () => {
          const filled = await operations.fillZohoSkillSetField(
            skillRule,
            this.answer.skills,
          )
          if (filled) {
            this.progressTracker.updateFilledProgress(skillLabel)
          } else {
            this.progressTracker.updateMissedProgress(skillLabel)
          }
        })
      } catch (error) {
        if (error instanceof cancellation.CancelledError) throw error
        if (!(error instanceof cancellation.SkippedError)) {
          console.error("[ZohoRecruit] skills fill error:", error)
        }
        this.progressTracker.updateMissedProgress(skillLabel)
      }
    }
    for (let index = 1; index < this.answer.education.length; index++) {
      await operations.addEducationRow(index)
    }
    const educationRules = await rules.getEduRules()
    const educationReporter =
      sectionResults.createSequentialSectionResultReporter(
        "education",
        this.progressTracker,
      )
    for (
      let index = 0;
      index < this.answer.education.length;
      index++
    ) {
      const record = this.answer.education[index]
      const sectionRule = educationRules[index]
      if (sectionRule && sectionRule.children) {
        const children = sectionRule.children
        const recordResult = zohoSectionResults.createZohoRecordResult(
          "education",
          index,
          sectionRule,
          record,
          educationReporter,
        )
        const textRules = children.filter(
          (child) => child.type === enums.FIELD_TYPE.TEXT,
        )
        const textOps = answerMethods.getRegularOperations(
          textRules,
          record,
          recordResult.operationConfig(this.operationConfig),
        )
        for (const op of textOps) await op()
        const currentlyPursuing = children.find((child) =>
          child.label.toLowerCase().includes("currently pursuing"),
        )
        if (currentlyPursuing && currentlyPursuing.$input) {
          const checked = isEducationCurrentlyPursuing(record)
          await recordResult.run(currentlyPursuing, checked, () => {
            const input = currentlyPursuing.$input
            syncCheckboxChecked(input, checked)
            return (
              input instanceof HTMLInputElement &&
              input.checked === checked
            )
          })
        }
        const selectRules = children.filter(
          (child) => child.type === enums.FIELD_TYPE.SELECT,
        )
        for (const selectRule of selectRules) {
          let selectValue =
            record[selectRule.name] || record[selectRule.label]
          if (!selectValue) {
            const labelLower = selectRule.label.toLowerCase()
            if (
              labelLower.includes("start") ||
              labelLower.includes("from")
            ) {
              const startDate =
                record["Start date"] || record.From
              if (startDate && startDate.includes("/")) {
                const [month, year] = startDate.split("/")
                selectValue = labelLower.includes("month")
                  ? month
                  : year
              }
            } else if (
              labelLower.includes("end") ||
              labelLower.includes("to")
            ) {
              const endDate = record["End date"] || record.To
              if (endDate && endDate.includes("/")) {
                const [month, year] = endDate.split("/")
                selectValue = labelLower.includes("month")
                  ? month
                  : year
              }
            }
          }
          if (selectValue) {
            try {
              await recordResult.run(selectRule, selectValue, () =>
                operations.fillZohoDropdownDirectly(
                  selectRule,
                  selectValue,
                ),
              )
            } catch (error) {
              console.error(
                `[Zoho-Manual] 填充 ${selectRule.label} 失败`,
                error,
              )
            }
          }
        }
      }
    }
    if (
      progress.shouldMarkZohoSectionFilled(
        this.answer.education,
        educationRules,
      )
    ) {
      this.progressTracker.updateFilledProgress("Education")
    }
    for (
      let index = 1;
      index < this.answer.workExperience.length;
      index++
    ) {
      await operations.addExperienceRow(index)
    }
    const experienceRules = await rules.getExpRules()
    const employmentReporter =
      sectionResults.createSequentialSectionResultReporter(
        "employment",
        this.progressTracker,
      )
    for (
      let index = 0;
      index < this.answer.workExperience.length;
      index++
    ) {
      const record = this.answer.workExperience[index]
      const sectionRule = experienceRules[index]
      if (sectionRule && sectionRule.children) {
        const children = sectionRule.children
        const recordResult = zohoSectionResults.createZohoRecordResult(
          "employment",
          index,
          sectionRule,
          record,
          employmentReporter,
        )
        const textRules = children.filter(
          (child) => child.type === enums.FIELD_TYPE.TEXT,
        )
        const textOps = answerMethods.getRegularOperations(
          textRules,
          record,
          recordResult.operationConfig(this.operationConfig),
        )
        for (const op of textOps) await op()
        const selectRules = children.filter(
          (child) => child.type === enums.FIELD_TYPE.SELECT,
        )
        for (const selectRule of selectRules) {
          let selectValue =
            record[selectRule.name] || record[selectRule.label]
          if (!selectValue) {
            const labelLower = selectRule.label.toLowerCase()
            if (
              labelLower.includes("start") ||
              labelLower.includes("from")
            ) {
              const startDate =
                record["Start date"] || record.From
              if (startDate && startDate.includes("/")) {
                const [month, year] = startDate.split("/")
                selectValue = labelLower.includes("month")
                  ? month
                  : year
              }
            } else if (
              labelLower.includes("end") ||
              labelLower.includes("to")
            ) {
              const endDate = record["End date"] || record.To
              if (endDate) {
                if (endDate.toLowerCase().includes("present")) {
                  labelLower.includes("month")
                  selectValue = ""
                } else if (endDate.includes("/")) {
                  const [month, year] = endDate.split("/")
                  selectValue = labelLower.includes("month")
                    ? month
                    : year
                }
              }
            }
          }
          if (selectValue) {
            try {
              await recordResult.run(selectRule, selectValue, () =>
                operations.fillZohoDropdownDirectly(
                  selectRule,
                  selectValue,
                ),
              )
              await new Promise((resolve) => setTimeout(resolve, 300))
            } catch (error) {
              console.error(
                `[Zoho-Manual] 工作经历 ${selectRule.label} 填充失败`,
                error,
              )
            }
          }
        }
        const currentlyWorking = children.find(
          (child) =>
            child.label.toLowerCase().includes("currently work") ||
            child.name.toLowerCase().includes("is_current"),
        )
        if (currentlyWorking && currentlyWorking.$input) {
          const checked = isExperienceCurrentlyWorking(record)
          await recordResult.run(currentlyWorking, checked, () => {
            const input = currentlyWorking.$input
            syncCheckboxChecked(input, checked)
            return (
              input instanceof HTMLInputElement &&
              input.checked === checked
            )
          })
        }
      }
    }
    if (
      progress.shouldMarkZohoSectionFilled(
        this.answer.workExperience,
        experienceRules,
      )
    ) {
      this.progressTracker.updateFilledProgress("Employment")
    }
    this.taskQueue.add(async () => {
      const inputs = document.querySelectorAll("input")
      inputs.forEach((input) =>
        input.dispatchEvent(new Event("blur")),
      )
      await operations.fillAgreementCheckbox()
    })
    await this.taskQueue.run()
    const finalizeResult = await this.finalizeFillForm()
    await this.bindSubmitButtonTracking(formRules)
    return finalizeResult
  }

  async resolveZohoCity(cityRule, cityAnswer, postalAnswer) {
    const input = cityRule?.$input
    if (
      !input ||
      !locationOperation.isZohoRecruitCityAutocompleteRule(cityRule)
    ) {
      return false
    }
    const originalAnswer =
      locationOperation.getZohoRecruitCityOriginalAnswer(
        this.answer,
        cityAnswer,
        postalAnswer,
      )
    const startedAt = Date.now()
    console.info("[ZohoRecruit][City] resolve-start", {
      answerSource: originalAnswer.source,
      hasOriginalAnswer: !!originalAnswer.value,
    })
    if (!originalAnswer.value) {
      await operations.clearZohoAutocompleteForInput(input)
      return false
    }
    try {
      const operation = locationOperation.buildZohoRecruitCityOperation({
        pageUrl: window.location.href,
        originalAnswer: originalAnswer.value,
      })
      const response = await messaging.sendToBackground({
        name: "resolveAutofillOperation",
        body: {
          operation,
          source: "zohorecruit",
        },
      })
      const resolvedCity =
        locationOperation.getZohoRecruitResolvedCityValue(response)
      console.info("[ZohoRecruit][City] resolve-result", {
        action: response?.result?.action ?? "missing",
        selectedCount:
          response?.result?.selected_values?.length ?? 0,
        elapsedMs: Date.now() - startedAt,
      })
      if (!resolvedCity) {
        await operations.clearZohoAutocompleteForInput(input)
        return false
      }
      const committed = await operations.selectZohoAutocompleteOption(
        cityRule,
        resolvedCity,
        [],
        { exactOnly: true },
      )
      console.info("[ZohoRecruit][City] commit-result", {
        committed,
        elapsedMs: Date.now() - startedAt,
      })
      return committed
    } catch (error) {
      console.warn("[ZohoRecruit][City] resolve-failed", {
        reason:
          error instanceof Error ? error.message : "unknown-error",
        elapsedMs: Date.now() - startedAt,
      })
      await operations.clearZohoAutocompleteForInput(input)
      return false
    }
  }

  async getAutofillSnapshot(formRules) {
    this.snapshotRules = formRules
    this.fixedAutofillSnapshot = await rules.getFormSnapshot(formRules)
    this.fixedAdditionalAutofillData =
      await rules.getAdditionalFormSnapshotData(formRules)
    trace.trackEvent("zohorecruit_form_autofill_answer", {
      formUrl: window.location.href,
      answer: {
        ...this.fixedAutofillSnapshot,
        ...this.fixedAdditionalAutofillData,
      },
    })
    return this.fixedAutofillSnapshot
  }

  async getSubmitSnapshot() {
    const snapshot = await rules.getFormSnapshot(this.snapshotRules)
    this.latestAdditionalSubmitData =
      await rules.getAdditionalFormSnapshotData(this.snapshotRules)
    return snapshot
  }

  getAdditionalAutofillSnapshotData() {
    return this.fixedAdditionalAutofillData
  }

  getAdditionalSubmitSnapshotData() {
    return this.latestAdditionalSubmitData
  }

  normalizeAutofillAnswerPairTrackingData(data) {
    return {
      ...data,
      formUrl: window.location.href,
      autofillSnapshot: this.fixedAutofillSnapshot,
      additionalAutofillData: this.fixedAdditionalAutofillData,
    }
  }

  getSubmitButtonSelector() {
    return './/*[@id="cw-submit-btn"]//button[@type="submit"]'
  }

  checkCoverLetter() {
    operations.checkCoverLetter()
  }

  submitApplication() {
    operations.submitApplication()
  }

  constructor(...args) {
    super(...args)
    this.snapshotRules = []
    this.fixedAutofillSnapshot = {}
    this.fixedAdditionalAutofillData = {}
    this.latestAdditionalSubmitData = {}
  }
}

export { ZohoRecruit }
