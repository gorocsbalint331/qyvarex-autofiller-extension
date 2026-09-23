// @ts-nocheck
/**
 * Zoho Recruit v2 — WebToLeads form rule extraction and snapshots.
 */

import * as enums from "../../../core/enums.js"

export async function getRules() {
  const form = document.querySelector("form[name*='WebToLeads']")
  if (!form) return []
  return [
    ...extractRegularFields(form),
    ...extractEducationRules(form),
    ...extractExperienceRules(form),
  ]
}

function extractRegularFields(form) {
  const rules = []
  const textInputs = form.querySelectorAll(
    "input[aria-label], textarea[aria-label]",
  )
  textInputs.forEach((input) => {
    if (
      input.closest(".TD-twocol[data-l*='Educational']") ||
      input.closest(".TD-twocol[data-l*='Experience']")
    ) {
      return
    }
    const label = input.getAttribute("aria-label") || ""
    if (label) {
      rules.push({
        type: enums.FIELD_TYPE.TEXT,
        label,
        name: label,
        $input: input,
        $label: null,
        required: input.getAttribute("aria-required") === "true",
      })
    }
  })
  const selects = form.querySelectorAll("select[aria-label]")
  selects.forEach((select) => {
    if (
      select.closest(".TD-twocol[data-l*='Educational']") ||
      select.closest(".TD-twocol[data-l*='Experience']")
    ) {
      return
    }
    const label = select.getAttribute("aria-label") || ""
    if (label) {
      rules.push({
        type: enums.FIELD_TYPE.SELECT,
        label,
        name: label,
        $input: select,
        $label: null,
        required: select.getAttribute("aria-required") === "true",
      })
    }
  })
  return rules
}

function extractEducationRules(form) {
  const section = form.querySelector(
    ".TD-twocol[data-l*='Educational']",
  )
  return section
    ? extractSectionRecords(
        section,
        enums.FIELD_TYPE.EDUCATION,
        "education",
      )
    : []
}

function extractExperienceRules(form) {
  const section = form.querySelector(
    ".TD-twocol[data-l*='Experience']",
  )
  return section
    ? extractSectionRecords(
        section,
        enums.FIELD_TYPE.EMPLOYMENT,
        "workExperience",
      )
    : []
}

function extractSectionRecords(section, fieldType, label) {
  const records = []
  const innerElems = section.querySelectorAll(".innerElem")
  let blocks = innerElems.length > 0 ? Array.from(innerElems) : []
  if (blocks.length === 0) {
    const single = section.querySelector(".innerElem")
    if (single) blocks.push(single)
  }
  blocks.forEach((block) => {
    const children = []
    const textInputs = block.querySelectorAll(
      "input[aria-label], textarea[aria-label]",
    )
    textInputs.forEach((input) => {
      const inputLabel = input.getAttribute("aria-label") || ""
      if (inputLabel) {
        children.push({
          type: enums.FIELD_TYPE.TEXT,
          label: inputLabel,
          name: inputLabel,
          $input: input,
          $label: null,
          required: false,
        })
      }
    })
    const dateSelects = {
      "Start Month": block.querySelector("select[class*='from_month']"),
      "Start Year": block.querySelector("select[class*='from_year']"),
      "End Month": block.querySelector("select[class*='to_month']"),
      "End Year": block.querySelector("select[class*='to_year']"),
    }
    Object.entries(dateSelects).forEach(([dateLabel, select]) => {
      if (select) {
        children.push({
          type: enums.FIELD_TYPE.SELECT,
          label: dateLabel,
          name: dateLabel,
          $input: select,
          $label: null,
          required: false,
        })
      }
    })
    if (children.length > 0) {
      records.push({
        type: fieldType,
        label,
        $input: block,
        $label: block,
        required: false,
        children,
        options: children.map((child) => ({
          type: child.type,
          label: child.label,
          options: [],
        })),
      })
    }
  })
  return records
}

export async function getEduRules() {
  const allRules = await getRules()
  return allRules.filter(
    (rule) => rule.type === enums.FIELD_TYPE.EDUCATION,
  )
}

export async function getExpRules() {
  const allRules = await getRules()
  return allRules.filter(
    (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
  )
}

export function getEduAddButton() {
  return document.querySelector("a[title='Add Educational Details']")
}

export function getEduDeleteButtons() {
  return Array.from(
    document.querySelectorAll("a[title='Delete Educational Details']"),
  )
}

export function getExpAddButton() {
  return document.querySelector("a[title='Add Experience Details']")
}

export function getExpDeleteButtons() {
  return Array.from(
    document.querySelectorAll("a[title='Delete Experience Details']"),
  )
}

function snapshotSectionChildren(sectionRule) {
  const snapshot = {}
  const rule = sectionRule
  rule.children?.forEach((child) => {
    snapshot[child.label] = readFieldValue(child.$input)
  })
  return snapshot
}

export function getAdditionalFormSnapshotData(rules) {
  const snapshot = {}
  for (const rule of rules) {
    if (
      rule.type === enums.FIELD_TYPE.EDUCATION ||
      rule.type === enums.FIELD_TYPE.EMPLOYMENT
    ) {
      if (!snapshot[rule.type]) snapshot[rule.type] = []
      snapshot[rule.type].push(snapshotSectionChildren(rule))
    }
  }
  return snapshot
}

export async function getFormSnapshot(rules) {
  const snapshot = {}
  for (const rule of rules) {
    if (
      rule.type === enums.FIELD_TYPE.EDUCATION ||
      rule.type === enums.FIELD_TYPE.EMPLOYMENT
    ) {
      continue
    }
    const fieldRule = rule
    snapshot[rule.label] = readFieldValue(fieldRule.$input)
  }
  return snapshot
}

function readFieldValue(input) {
  return (
    (input &&
      (input.tagName === "SELECT" ||
        input instanceof HTMLInputElement ||
        input instanceof HTMLTextAreaElement) &&
      input.value) ||
    ""
  )
}
