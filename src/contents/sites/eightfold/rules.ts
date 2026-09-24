// @ts-nocheck
/**
 * Eightfold CareerHub — rule extraction for personal-info / preferences / records steps
 * (readable TypeScript source of truth).
 */

import * as enums from "../../../core/enums.js"
import * as records from "./records.ts"
import * as steps from "./steps.ts"

function getRecordSnapshotsWithoutCard(step, root) {
  return records
    .getCareerHubRecordSnapshots(step, root)
    .map(({ card, ...snapshot }) => snapshot)
}

const PREFERENCE_GROUP_LABELS = {
  "question-label-preferred_job_title": "Preferred Roles",
  "question-label-skills": "Preferred Skills",
  "question-label-location": "Preferred Locations",
}

function optionTitle(option) {
  return (option.getAttribute("title") || option.textContent || "")
    .replace(/\s+/g, " ")
    .trim()
}

function labelText(labelEl) {
  return labelEl
    ? (labelEl.textContent || "")
        .replace(/\s+/g, " ")
        .replace(/\s*\*+\s*$/, "")
        .trim()
    : ""
}

function uniqueOptionLabels(optionEls) {
  const seen = new Set()
  const labels = []
  for (const option of optionEls) {
    const text = optionTitle(option)
    const key = text.toLowerCase()
    if (!text || seen.has(key)) continue
    seen.add(key)
    labels.push(text)
  }
  return labels
}

function getAriaControlsId(el) {
  const controls = el.getAttribute("aria-controls")?.trim() ?? ""
  return controls && !/\s/.test(controls) ? controls : null
}

export function findCareerHubElementById(root, id) {
  if (!id || /\s/.test(id)) return null
  const scope = root
  return typeof scope.getElementById === "function"
    ? scope.getElementById(id)
    : (Array.from(root.querySelectorAll("[id]")).find(
        (el) => el.getAttribute("id") === id,
      ) ?? null)
}

function getComboboxOptions(root, combobox) {
  const controlsId = getAriaControlsId(combobox)
  if (!controlsId) return []
  const listbox = findCareerHubElementById(root, controlsId)
  return listbox &&
    listbox.isConnected &&
    !listbox.hidden &&
    listbox.getAttribute("aria-hidden") !== "true" &&
    listbox.getClientRects().length !== 0
    ? uniqueOptionLabels(Array.from(listbox.querySelectorAll('[role="option"]')))
    : []
}

function isRequired(el) {
  return el.hasAttribute("required") || el.getAttribute("aria-required") === "true"
}

function extractPersonalInfoRules(root) {
  const rules = []
  const fullname = root.querySelector(
    '#fullname[data-testid="common-text-input-fullname"]',
  )
  if (fullname?.getAttribute("aria-describedby") === "question-label-fullname") {
    const labelEl = root.querySelector("#question-label-fullname")
    const label = labelText(labelEl)
    if (label) {
      rules.push({
        label,
        type: enums.FIELD_TYPE.TEXT,
        required: isRequired(fullname),
        $label: labelEl,
        $input: fullname,
        __careerHub: { step: "personal-info", controlId: "fullname" },
      })
    }
  }
  const location = root.querySelector(
    '#location[role="combobox"][data-testid="common-text-input-location"]',
  )
  if (
    location?.isConnected &&
    location.getAttribute("aria-describedby") === "question-label-location" &&
    getAriaControlsId(location)
  ) {
    const labelEl = root.querySelector("#question-label-location")
    const label = labelText(labelEl)
    if (label) {
      rules.push({
        label,
        type: enums.FIELD_TYPE.SELECT,
        required: isRequired(location),
        options: getComboboxOptions(root, location),
        $label: labelEl,
        $input: location,
        __careerHub: { step: "personal-info", controlId: "location" },
      })
    }
  }
  return rules
}

function extractPreferenceRules(root) {
  const groups = Array.from(
    root.querySelectorAll('.type-autocomplete-pill[role="group"]'),
  )
  const rules = []
  for (const group of groups) {
    const labelledBy = group.getAttribute("aria-labelledby")
    if (!labelledBy || !(labelledBy in PREFERENCE_GROUP_LABELS)) continue
    const groupLabelId = labelledBy
    const labelEl = root.querySelector(`#${groupLabelId}`)
    const combobox = group.querySelector('.Select-input[role="combobox"]')
    rules.push({
      label: PREFERENCE_GROUP_LABELS[groupLabelId],
      type: enums.FIELD_TYPE.MULTI_SELECT,
      required: isRequired(group),
      options: combobox?.isConnected
        ? getComboboxOptions(root, combobox)
        : [],
      $label: labelEl ?? group,
      $input: group,
      __careerHub: { step: "preferences", groupLabelId },
    })
  }
  return rules
}

export async function extractCareerHubRules(root = document) {
  switch (steps.getCareerHubActiveStep(root)) {
    case "personal-info":
      return extractPersonalInfoRules(root)
    case "preferences":
      return extractPreferenceRules(root)
    case "experience":
      return [
        {
          label: "Experience",
          type: enums.FIELD_TYPE.EMPLOYMENT,
          required: false,
          children: [],
          options: [],
          __careerHub: {
            step: "experience",
            recordSnapshots: getRecordSnapshotsWithoutCard("experience", root),
          },
        },
      ]
    case "education":
      return [
        {
          label: "Education",
          type: enums.FIELD_TYPE.EDUCATION,
          required: false,
          children: [],
          options: [],
          __careerHub: {
            step: "education",
            recordSnapshots: getRecordSnapshotsWithoutCard("education", root),
          },
        },
      ]
    default:
      return []
  }
}
