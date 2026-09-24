// @ts-nocheck
/**
 * Jacobs form rule extraction, validation, and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as jacobsAnswer from "./answer.ts"

function classContains(className) {
  return `contains(concat(" ", normalize-space(@class), " "), " ${className} ")`
}

export const UPPERCASE_XPATH = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
export const LOWERCASE_XPATH = "abcdefghijklmnopqrstuvwxyz"

const FORM_XPATH = `//form[${classContains("tpt_wizard")}]`
const WIZARD_FIELD_HIDDEN = classContains("WizardFieldHidden")
const LOWERCASE_TEXT = `translate(normalize-space(.), '${UPPERCASE_XPATH}', '${LOWERCASE_XPATH}')`
const VISIBLE_FIELD_SPEC = `not(@hidden) and not(ancestor::*[@hidden]) and not(${WIZARD_FIELD_HIDDEN}) and not(ancestor::*[${WIZARD_FIELD_HIDDEN}])`
const VISIBLE_CONTROL = `not(@type="hidden") and not(@type="file") and not(@type="button") and not(@type="submit") and not(@type="reset") and not(${WIZARD_FIELD_HIDDEN}) and not(ancestor::*[${WIZARD_FIELD_HIDDEN}])`
const FIELD_CONTROL = `.//*[self::input or self::select or self::textarea][${VISIBLE_CONTROL}][1]`
const ANY_FIELD_CONTROL = `.//*[self::input or self::select or self::textarea][${VISIBLE_CONTROL}]`
const REGULAR_FIELD_SPECS = `.//div[${classContains("fieldSpec")}][${VISIBLE_FIELD_SPEC}][not(ancestor::div[${classContains("datasetcontent")}])][not(${classContains("datasetField")})][not(${classContains("FileField")})][not(${classContains("ButtonBarField")})][not(${classContains("formContainer")})][not(ancestor::div[${classContains("formContainer")}])][not(ancestor::div[${classContains("schemaFieldContainer")}])][${ANY_FIELD_CONTROL}]`
const JOB_SPECIFIC_FIELD_SPECS = `.//div[${classContains("schemaFieldContainer")}]//div[${classContains("formfieldSpec")}][${VISIBLE_FIELD_SPEC}][not(ancestor::div[${classContains("datasetcontent")}])][${ANY_FIELD_CONTROL}]`
const VISIBLE_DATASET_ROW = `${classContains("datasetField__row")} and not(${classContains("datasetField__row--sample")}) and not(@hidden) and not(@aria-hidden="true") and not(ancestor::*[@hidden])`
const DATASET_CONTENT = `${classContains("datasetcontent")} and @role="group"`
const EDUCATION_ROW_MARKERS =
  './/div[@data-schema-field-id="2021"] and .//div[@data-schema-field-id="1865"] and .//div[@data-schema-field-id="2106"]'
const EXPERIENCE_ROW_MARKERS =
  './/div[@data-schema-field-id="1870"] and .//div[@data-schema-field-id="2108"] and .//div[@data-schema-field-id="3487"]'

function withForm(xpathExpr) {
  return `${FORM_XPATH}${xpathExpr}`
}

const EDUCATION_CONTAINER = withForm(
  `//div[${DATASET_CONTENT}][.//fieldset[${classContains("datasetField__row")}][${EDUCATION_ROW_MARKERS}]]`,
)
const EXPERIENCE_CONTAINER = withForm(
  `//div[${DATASET_CONTENT}][.//fieldset[${classContains("datasetField__row")}][${EXPERIENCE_ROW_MARKERS}]]`,
)
const EDUCATION_ROWS = `${EDUCATION_CONTAINER}//fieldset[${VISIBLE_DATASET_ROW}]`
const EXPERIENCE_ROWS = `${EXPERIENCE_CONTAINER}//fieldset[${VISIBLE_DATASET_ROW}]`
const ROW_FIELD_SPECS = `.//div[${classContains("fieldSpec")} and ${VISIBLE_FIELD_SPEC} and ${ANY_FIELD_CONTROL}]`
const FILE_FIELD = `//div[${classContains("FileField")}][${VISIBLE_FIELD_SPEC}][.//input[@type="file" and not(@disabled)]]`
const RESUME_LABEL = `.//label[contains(${LOWERCASE_TEXT}, "resume") or contains(${LOWERCASE_TEXT}, "cv")]`
const ADDITIONAL_FILE_LABEL = `.//label[contains(${LOWERCASE_TEXT}, "upload additional file")]`
const RESUME_FILE_INPUT = `${FORM_XPATH}${FILE_FIELD}[${RESUME_LABEL}]//input[@type="file" and not(@disabled)][1]`
const ADDITIONAL_FILE_INPUT = `${FORM_XPATH}${FILE_FIELD}[${ADDITIONAL_FILE_LABEL}]//input[@type="file" and not(@disabled)][1]`
const ATTACHMENT_FILE_FIELD = withForm(
  `${FILE_FIELD}[${RESUME_LABEL} or ${ADDITIONAL_FILE_LABEL}]`,
)
const ATTACHMENT_FILE_INPUT = `${ATTACHMENT_FILE_FIELD}//input[@type="file" and not(@disabled)][1]`

const EDUCATION_ROW_FIELD_CHECKS = [
  {
    label: "College/university name",
    xpath: './/div[@data-schema-field-id="2021"]//select',
  },
  {
    label: "Level",
    xpath: './/div[@data-schema-field-id="1865"]//select',
  },
  {
    label: "Program/major",
    xpath: './/div[@data-schema-field-id="2106"]//select',
  },
  {
    label: "Start date (Month/Year)",
    xpath:
      './/div[@data-schema-field-id="1868"]//input[@type="month" and not(@hidden) and not(ancestor::*[@hidden])]',
  },
  {
    label: "End date (Month/Year)",
    xpath:
      './/div[@data-schema-field-id="1867"]//input[@type="month" and not(@hidden) and not(ancestor::*[@hidden])]',
  },
  {
    label: "Degree received? - Yes",
    xpath:
      './/div[@data-schema-field-id="3488"]//div[@role="radiogroup"]//input[@type="radio" and (@data-option-name="Yes" or following-sibling::label[contains(normalize-space(.), "Yes")])]',
  },
  {
    label: "Degree received? - No",
    xpath:
      './/div[@data-schema-field-id="3488"]//div[@role="radiogroup"]//input[@type="radio" and (@data-option-name="No" or following-sibling::label[contains(normalize-space(.), "No")])]',
  },
]

const EXPERIENCE_ROW_FIELD_CHECKS = [
  {
    label: "Company",
    xpath:
      './/div[@data-schema-field-id="1870"]//input[@type="text" and not(@type="hidden") and not(@hidden) and not(ancestor::*[@hidden])]',
  },
  {
    label: "Position title",
    xpath:
      './/div[@data-schema-field-id="2108"]//input[@type="text" and not(@type="hidden") and not(@hidden) and not(ancestor::*[@hidden])]',
  },
  {
    label: "Start date (Month/Year)",
    xpath:
      './/div[@data-schema-field-id="1872"]//input[@type="month" and not(@hidden) and not(ancestor::*[@hidden])]',
  },
  {
    label: "End date (Month/Year)",
    xpath:
      './/div[@data-schema-field-id="1871"]//input[@type="month" and not(@hidden) and not(ancestor::*[@hidden])]',
  },
  {
    label: "Current employer? - Yes",
    xpath:
      './/div[@data-schema-field-id="3487"]//div[@role="radiogroup"]//input[@type="radio" and (@data-option-name="Yes" or following-sibling::label[contains(normalize-space(.), "Yes")])]',
  },
  {
    label: "Current employer? - No",
    xpath:
      './/div[@data-schema-field-id="3487"]//div[@role="radiogroup"]//input[@type="radio" and (@data-option-name="No" or following-sibling::label[contains(normalize-space(.), "No")])]',
  },
]

const EXPERIENCE_ADD_BUTTON = withForm(
  `//div[${DATASET_CONTENT}][.//fieldset[${classContains("datasetField__row")}][${EXPERIENCE_ROW_MARKERS}]]//div[${classContains("datasetField__button--add")}]//a[${classContains("action--add")} and @role="button"]`,
)
const EDUCATION_ADD_BUTTON = withForm(
  `//div[${DATASET_CONTENT}][.//fieldset[${classContains("datasetField__row")}][${EDUCATION_ROW_MARKERS}]]//div[${classContains("datasetField__button--add")}]//a[${classContains("action--add")} and @role="button"]`,
)

export function getFormContainer() {
  return xpath.getFirstOrderedNodeSafe(FORM_XPATH)
}

function getRegularAndJobSpecificFieldSpecs(form) {
  const regular = xpath.getOrderedNodesSafe(REGULAR_FIELD_SPECS, form)
  const jobSpecific = xpath.getOrderedNodesSafe(JOB_SPECIFIC_FIELD_SPECS, form)
  return [...regular, ...jobSpecific]
}

function getEducationRowNodes() {
  return xpath.getOrderedNodesSafe(EDUCATION_ROWS)
}

function getExperienceRowNodes() {
  return xpath.getOrderedNodesSafe(EXPERIENCE_ROWS)
}

function hasNode(xpathExpr, context) {
  return !!xpath.getFirstOrderedNodeSafe(xpathExpr, context)
}

export function validateExperienceRow(row) {
  const missingFields = []
  const rowId = row.id || ""
  if (
    row.hidden ||
    row.getAttribute("aria-hidden") === "true" ||
    row.classList.contains("datasetField__row--sample")
  ) {
    missingFields.push("Visible experience row")
  }
  for (const check of EXPERIENCE_ROW_FIELD_CHECKS) {
    if (!hasNode(check.xpath, row)) missingFields.push(check.label)
  }
  return {
    rowId,
    valid: missingFields.length === 0,
    missingFields,
  }
}

function getValidExperienceRows() {
  return getExperienceRowNodes().filter((row) => validateExperienceRow(row).valid)
}

export function validateEducationRow(row) {
  const missingFields = []
  const rowId = row.id || ""
  if (
    row.hidden ||
    row.getAttribute("aria-hidden") === "true" ||
    row.classList.contains("datasetField__row--sample")
  ) {
    missingFields.push("Visible education row")
  }
  for (const check of EDUCATION_ROW_FIELD_CHECKS) {
    if (!hasNode(check.xpath, row)) missingFields.push(check.label)
  }
  return {
    rowId,
    valid: missingFields.length === 0,
    missingFields,
  }
}

function getValidEducationRows() {
  return getEducationRowNodes().filter((row) => validateEducationRow(row).valid)
}

export function validateExperienceSection(expectedCount) {
  const containerFound = hasNode(EXPERIENCE_CONTAINER)
  const addButtonFound = hasNode(EXPERIENCE_ADD_BUTTON)
  const rows = getExperienceRowNodes().map(validateExperienceRow)
  const actualCount = rows.length
  const validRowCount = rows.filter((row) => row.valid).length
  const countMatched =
    expectedCount == null ? actualCount > 0 : actualCount === expectedCount
  return {
    valid: containerFound && addButtonFound && countMatched,
    containerFound,
    addButtonFound,
    countMatched,
    actualCount,
    rowCount: actualCount,
    validRowCount,
    expectedCount,
    rows,
  }
}

export function validateEducationSection(expectedCount) {
  const containerFound = hasNode(EDUCATION_CONTAINER)
  const addButtonFound = hasNode(EDUCATION_ADD_BUTTON)
  const rows = getEducationRowNodes().map(validateEducationRow)
  const actualCount = rows.length
  const validRowCount = rows.filter((row) => row.valid).length
  const countMatched =
    expectedCount == null ? actualCount > 0 : actualCount === expectedCount
  return {
    valid: containerFound && addButtonFound && countMatched,
    containerFound,
    addButtonFound,
    countMatched,
    actualCount,
    rowCount: actualCount,
    validRowCount,
    expectedCount,
    rows,
  }
}

function getRowFieldSpecNodes(row) {
  return xpath.getOrderedNodesSafe(ROW_FIELD_SPECS, row)
}

function getFirstFieldControl(fieldSpec) {
  return xpath.getFirstOrderedNodeSafe(FIELD_CONTROL, fieldSpec)
}

function isEligibleControl(element) {
  if (
    !(
      element instanceof HTMLInputElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement
    ) ||
    element.closest(".WizardFieldHidden")
  ) {
    return false
  }
  if (!(element instanceof HTMLInputElement)) return true
  return !["hidden", "file", "button", "submit", "reset"].includes(element.type)
}

function queryEligibleControls(fieldSpec) {
  return Array.from(fieldSpec.querySelectorAll("input, select, textarea")).filter(
    isEligibleControl,
  )
}

function getFieldLabelNode(fieldSpec) {
  return xpath.getFirstOrderedNodeSafe(
    "./label[1] | ./fieldset/legend[1] | .//label[1] | .//legend[1]",
    fieldSpec,
  )
}

function resolvePrimaryControl(fieldSpec, labelNode) {
  const controls = queryEligibleControls(fieldSpec)
  if (!controls.length) return null
  if (!labelNode) return controls[0]
  const following = controls.find(
    (control) =>
      !!(labelNode.compareDocumentPosition(control) & Node.DOCUMENT_POSITION_FOLLOWING),
  )
  return following || controls[0] || getFirstFieldControl(fieldSpec)
}

export function getCleanLabelText(labelNode) {
  if (!labelNode) return ""
  const ignoredClasses = new Set(["labelRequiredIcon", "screenReaderVisibility"])
  const text = Array.from(labelNode.childNodes)
    .filter((node) => {
      const element = node
      const classList = element.classList ? Array.from(element.classList) : []
      return (
        !element.id?.endsWith("-labelValue") &&
        !classList.some((className) => ignoredClasses.has(className))
      )
    })
    .map((node) => node.textContent || "")
    .join("")
  return jacobsAnswer
    .normalizeText(text)
    .replace(/\s*\*\s*$/, "")
    .trim()
}

function isRequiredField(fieldSpec, control, labelNode) {
  return (
    fieldSpec.classList.contains("isRequired") ||
    control.hasAttribute("required") ||
    control.getAttribute("required") === "true" ||
    control.getAttribute("data-required") === "true" ||
    control.getAttribute("aria-required") === "true" ||
    /\*/.test(labelNode?.textContent || "")
  )
}

export function isAutoCompleteSelect(select) {
  return (
    select.classList.contains("AutoCompleteField") ||
    select.classList.contains("AutocompleteSelectFieldChildHtmlElement")
  )
}

function getSelectOptions(select) {
  if (isAutoCompleteSelect(select)) return []
  return Array.from(select.options)
    .map((option) =>
      jacobsAnswer.normalizeText(option.textContent || option.value),
    )
    .filter(
      (text) =>
        text &&
        !/^select (an?|a) /i.test(text) &&
        !/^not required$/i.test(text),
    )
}

function getRadioInputs(fieldSpec) {
  return xpath.getOrderedNodesSafe('.//input[@type="radio"]', fieldSpec)
}

function getCheckboxInputs(fieldSpec) {
  return xpath.getOrderedNodesSafe('.//input[@type="checkbox"]', fieldSpec)
}

function getOptionLabel(input) {
  const label = xpath.getFirstOrderedNodeSafe(
    `./ancestor::form[1]//label[@for=${xpath.escapeXPath(input.id)}][1]`,
    input,
  )
  return jacobsAnswer.normalizeText(
    label?.textContent || input.getAttribute("data-option-name") || input.value,
  )
}

function toChildOptions(rules) {
  return rules.map((rule) => ({
    label: rule.label,
    type: rule.type,
    options: "options" in rule ? rule.options : undefined,
  }))
}

async function buildRuleFromFieldSpec(fieldSpec) {
  const labelNode = getFieldLabelNode(fieldSpec)
  const control = resolvePrimaryControl(fieldSpec, labelNode)
  const label = getCleanLabelText(labelNode)
  if (!control || !label) return null

  if (control instanceof HTMLInputElement && control.type === "radio") {
    const radios = getRadioInputs(fieldSpec)
    if (!radios.length) return null
    return {
      label,
      type: enums.FIELD_TYPE.RADIOGROUP,
      required: radios.some((radio) =>
        isRequiredField(fieldSpec, radio, labelNode),
      ),
      options: radios.map(getOptionLabel).filter(Boolean),
      $label: labelNode || fieldSpec,
      $input: radios[0],
      $radioParent: fieldSpec,
      $radios: radios,
    }
  }

  if (control instanceof HTMLInputElement && control.type === "checkbox") {
    const checkboxes = getCheckboxInputs(fieldSpec)
    const checkboxList = checkboxes.length ? checkboxes : [control]
    return {
      label,
      type: enums.FIELD_TYPE.CHECKBOX,
      required: checkboxList.some((checkbox) =>
        isRequiredField(fieldSpec, checkbox, labelNode),
      ),
      options: checkboxList.map(getOptionLabel).filter(Boolean),
      $label: labelNode || fieldSpec,
      $input: control,
      $checkboxs: checkboxList,
    }
  }

  if (control instanceof HTMLSelectElement) {
    const type = control.multiple
      ? enums.FIELD_TYPE.MULTI_SELECT
      : enums.FIELD_TYPE.SELECT
    return {
      label,
      type,
      required: isRequiredField(fieldSpec, control, labelNode),
      options: getSelectOptions(control),
      $label: labelNode || fieldSpec,
      $input: control,
    }
  }

  const rule = {
    label,
    type: enums.FIELD_TYPE.TEXT,
    required: isRequiredField(fieldSpec, control, labelNode),
    $label: labelNode || fieldSpec,
    $input: control,
  }
  if (
    jacobsAnswer
      .normalizeText(label)
      .replace(/[?:.]+$/g, "")
      .toLowerCase() === "what is your expected annual salary"
  ) {
    rule.description = "Please return a specific number only."
  }
  return rule
}

async function getRulesFromRow(row) {
  const rules = []
  for (const fieldSpec of getRowFieldSpecNodes(row)) {
    const rule = await buildRuleFromFieldSpec(fieldSpec)
    if (rule) rules.push(rule)
  }
  return rules
}

export async function getEducationRules() {
  const rules = []
  for (const row of getValidEducationRows()) {
    const children = await getRulesFromRow(row)
    if (children.length) {
      rules.push({
        label: "Education",
        type: enums.FIELD_TYPE.EDUCATION,
        required: true,
        children,
        options: toChildOptions(children),
        $input: row,
      })
    }
  }
  return rules
}

export async function getExperienceRules() {
  const rules = []
  for (const row of getValidExperienceRows()) {
    const children = await getRulesFromRow(row)
    if (children.length) {
      rules.push({
        label: "Employment",
        type: enums.FIELD_TYPE.EMPLOYMENT,
        required: children.some((child) => child.required),
        children,
        options: toChildOptions(children),
        $input: row,
      })
    }
  }
  return rules
}

export function isPasswordRule(rule) {
  const input = rule.$input
  return (
    rule.type === enums.FIELD_TYPE.TEXT &&
    String(input?.type || "").toLowerCase() === "password"
  )
}

function getFieldSpecContainer(rule) {
  const input = rule.$input
  return input
    ? xpath.getFirstOrderedNodeSafe(
        './ancestor::div[contains(concat(" ", normalize-space(@class), " "), " fieldSpec ")][1]',
        input,
      )
    : null
}

export function isAcceptAcknowledgementRule(rule) {
  if (rule.type !== enums.FIELD_TYPE.CHECKBOX) return false
  const label = jacobsAnswer.normalizeText(rule.label).toLowerCase()
  const input = rule.$input
  return (
    input?.id === "1577" ||
    label === "i accept and acknowledge" ||
    label.startsWith("i accept and acknowledge") ||
    getFieldSpecContainer(rule)?.id === "fieldSpecContainer1577"
  )
}

export function getLocalOnlyAutofillRules(rules) {
  return rules.filter(isAcceptAcknowledgementRule)
}

export function getAutofillRules(rules) {
  return rules.filter(
    (rule) => !isPasswordRule(rule) && !isAcceptAcknowledgementRule(rule),
  )
}

function isCheckedInput(input) {
  return input.checked || input.getAttribute("aria-checked") === "true"
}

export async function extractRules() {
  const form = getFormContainer()
  const rules = []
  if (!form) return rules

  for (const fieldSpec of getRegularAndJobSpecificFieldSpecs(form)) {
    const rule = await buildRuleFromFieldSpec(fieldSpec)
    if (rule) rules.push(rule)
  }
  rules.push(...(await getEducationRules()))
  rules.push(...(await getExperienceRules()))
  return rules
}

function getRuleSnapshotValue(rule) {
  if (rule.type === enums.FIELD_TYPE.TEXT) {
    return rule.$input.value || ""
  }

  if (
    rule.type === enums.FIELD_TYPE.SELECT ||
    rule.type === enums.FIELD_TYPE.MULTI_SELECT
  ) {
    const select = rule.$input
    const selectedTexts = Array.from(select.selectedOptions || [])
      .map((option) =>
        jacobsAnswer.normalizeText(option.textContent || option.value),
      )
      .filter((text) => text.toLowerCase() !== "select an option")
      .filter(Boolean)
    const rawValue = jacobsAnswer.normalizeText(select.value)
    return selectedTexts.length
      ? selectedTexts.join(", ")
      : rawValue.toLowerCase() === "select an option"
        ? ""
        : rawValue
  }

  if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
    const checkedLabels = (rule.$checkboxs || [])
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => getOptionLabel(checkbox))
      .filter(Boolean)
    return checkedLabels.length > 0
      ? checkedLabels.join(", ")
      : rule.$input?.checked
        ? "Yes"
        : "No"
  }

  if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
    const radios = rule.$radios || []
    const selected = radios.find(isCheckedInput)
    return selected ? getOptionLabel(selected) : ""
  }

  return ""
}

function snapshotSectionRows(sectionRules) {
  return sectionRules.map((sectionRule) => {
    const values = {}
    const children = "children" in sectionRule ? sectionRule.children : []
    for (const child of children || []) {
      values[child.label] = getRuleSnapshotValue(child)
    }
    return values
  })
}

export async function getFormSnapshot() {
  const snapshot = {}
  const rules = getAutofillRules(await extractRules())
  for (const rule of rules) {
    if (
      rule.type !== enums.FIELD_TYPE.EDUCATION &&
      rule.type !== enums.FIELD_TYPE.EMPLOYMENT
    ) {
      snapshot[rule.label] = getRuleSnapshotValue(rule)
    }
  }
  snapshot.education = snapshotSectionRows(await getEducationRules())
  snapshot.employment = snapshotSectionRows(await getExperienceRules())
  return snapshot
}

export const jacobsXpaths = {
  form: FORM_XPATH,
  regularFieldSpecs: REGULAR_FIELD_SPECS,
  jobSpecificFieldSpecs: JOB_SPECIFIC_FIELD_SPECS,
  rowFieldSpecs: ROW_FIELD_SPECS,
  fieldControl: FIELD_CONTROL,
  educationContainer: EDUCATION_CONTAINER,
  experienceContainer: EXPERIENCE_CONTAINER,
  educationRows: EDUCATION_ROWS,
  experienceRows: EXPERIENCE_ROWS,
  educationAddButton: EDUCATION_ADD_BUTTON,
  experienceAddButton: EXPERIENCE_ADD_BUTTON,
  experienceRowFieldChecks: EXPERIENCE_ROW_FIELD_CHECKS,
  resumeFileInput: RESUME_FILE_INPUT,
  additionalFileInput: ADDITIONAL_FILE_INPUT,
  attachmentFileField: ATTACHMENT_FILE_FIELD,
  attachmentFileInput: ATTACHMENT_FILE_INPUT,
  submitButton: withForm(
    '//button[@name="save" and @type="submit" and contains(concat(" ", normalize-space(@class), " "), " saveButton ")]',
  ),
}
