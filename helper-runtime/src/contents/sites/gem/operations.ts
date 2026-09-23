// @ts-nocheck
/**
 * Gem — DOM fill operations (inputs, selects, resume, cover letter).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as filler from "../../shared/filler.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"
import * as rules from "./rules.ts"

const getTargetOrTimeout = {
  default: getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

export async function preFillForm() {
  await delay.delay(500)
}

function stripRequiredAsterisk(label) {
  return label.replace(/\s*\*\s*$/, "").trim()
}

function getBodyImportantLabel(container) {
  let node = xpath.getFirstOrderedNodeSafe(
    './/*[contains(@class, "bodyImportant-")]',
    container,
  )
  return (node && stripRequiredAsterisk(node.textContent || "")) || null
}

function findFileInputByKind(kind) {
  let isMatchLabel =
    kind === "resume"
      ? rules.isGemResumeUploadLabel
      : rules.isGemCoverLetterUploadLabel
  let fileInputs = Array.from(document.querySelectorAll('input[type="file"]'))
  for (let fileInput of fileInputs) {
    let parent = fileInput.parentElement
    let depth = 0
    while (parent && depth < 10) {
      let isSingleFileInput =
        parent.querySelectorAll('input[type="file"]').length === 1
      let label = isSingleFileInput ? getBodyImportantLabel(parent) : null
      if (label && isMatchLabel(label)) return fileInput
      parent = parent.parentElement
      depth += 1
    }
  }
  return null
}

export function getGemCoverLetterStatus() {
  return findFileInputByKind("coverLetter") ? "optional" : ""
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  console.log("[ResumeUploadDebug] gem:uploadResume:start", {
    resumeId: resumeInfo?.id,
    diagnoseId: resumeInfo?.diagnoseId,
    tailorId: resumeInfo?.tailorId,
    hasTailor: !!resumeInfo?.tailor,
    hasTailorResume: !!resumeInfo?.tailorResume,
    resumeName: resumeInfo?.resumeName,
    useOriginalResume: resumeInfo?.useOriginalResume,
  })
  let fileInput =
    findFileInputByKind("resume") ||
    document.querySelector(
      'input[type="file"][accept*=".pdf"], input[type="file"][accept*=".doc"]',
    )
  if (fileInput) {
    console.log("[ResumeUploadDebug] gem:uploadResume:input-found", {
      accept: fileInput.accept,
      id: fileInput.id,
      name: fileInput.name,
    })
    await dom.uploadFiles(
      fileInput,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
    await getTargetOrTimeout.default(
      () => {
        let container = fileInput?.closest(".container-107")
        if (container) {
          let hasDot = container.textContent?.includes(".")
          if (hasDot && fileInput?.files && fileInput.files.length > 0) {
            return container
          }
        }
        return null
      },
      () => false,
      50,
    )
  } else {
    throw new filler.FillError("(Resume) Could not find resume upload input")
  }
}

export async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
) {
  let fileInput = findFileInputByKind("coverLetter")
  if (!fileInput) return false
  await dom.uploadFiles(
    fileInput,
    await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
    updateRequired,
    updateFilled,
    "Cover Letter",
    false,
  )
  return true
}

export async function removeResume() {
  await delay.delay(100)
}

export async function fillInputTextField(input, value) {
  if (value) {
    input.focus()
    await delay.delay(100)
    input.value = ""
    await delay.delay(50)
    input.value = value
    input.dispatchEvent(new Event("input", { bubbles: true }))
    await delay.delay(50)
    input.dispatchEvent(new Event("change", { bubbles: true }))
    await delay.delay(50)
    input.blur()
    await delay.delay(50)
  }
}

export async function fillRadioGroupFiled(rule, values) {
  let label = rule.label
  let selectedValue = values?.[0]
  if (!selectedValue) return
  let matched = null
  if (rule.$radioParent) {
    let radios = xpath.getOrderedNodesSafe(
      './/input[@type="radio"]',
      rule.$radioParent,
    )
    matched =
      choiceMatch.findExactChoice(
        radios,
        selectedValue,
        (radio) => {
          let radioLabel = xpath.getFirstOrderedNodeSafe(
            `.//label[@for="${radio.id}"]`,
            rule.$radioParent,
          )
          let textNode = radioLabel
            ? xpath.getFirstOrderedNodeSafe(
                './/div[contains(@class, "body-52")]',
                radioLabel,
              ) || radioLabel
            : null
          let optionText = textNode?.textContent?.trim() || radio.value || ""
          return optionText
        },
        (radio) => radio.value,
      ) || null
  }
  if (!matched) {
    let xpathQuery = `.//input[@type='radio'][
      @value=${xpath.escapeXPath(selectedValue)} or
      following-sibling::*[normalize-space()=${xpath.escapeXPath(selectedValue)}] or
      parent::label[normalize-space()=${xpath.escapeXPath(selectedValue)}]
    ]`
    matched = xpath.getFirstOrderedNodeSafe(xpathQuery)
  }
  if (matched && !matched.checked) {
    matched.focus()
    await delay.delay(50)
    matched.click()
    await delay.delay(100)
    matched.blur()
    await delay.delay(50)
  } else if (!matched) {
    throw new filler.FillError(
      `(Radio) No option "${selectedValue}" found for label: "${label}"`,
    )
  }
}

function getCheckboxOptionText(checkbox, scope) {
  let label =
    (checkbox.id &&
      (scope || document).querySelector(`label[for="${checkbox.id}"]`)) ||
    checkbox.closest("label")
  if (!label) return checkbox.value || ""
  let body = label.querySelector('div[class*="body-"]')
  return body?.textContent?.trim() || label.textContent?.trim() || checkbox.value || ""
}

function normalizeChoiceText(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function isCheckboxChoiceMatch(optionText, answerText) {
  let left = normalizeChoiceText(optionText)
  let right = normalizeChoiceText(answerText)
  return !!left && !!right && choiceMatch.isExactChoiceMatch(left, right)
}

export async function fillCheckboxGroupField(rule, values) {
  let selectedValues = (Array.isArray(values) ? values : [values])
    .map((value) => String(value || "").trim())
    .filter(Boolean)
  if (!selectedValues.length) return
  let checkboxes = rule.$checkboxs || []
  let scope = rule.$radioParent || rule.$input?.parentElement
  for (let checkbox of checkboxes) {
    let optionText = getCheckboxOptionText(checkbox, scope)
    let shouldCheck = selectedValues.some((value) =>
      isCheckboxChoiceMatch(optionText, value),
    )
    if (!shouldCheck || checkbox.checked) continue
    let label = checkbox.id
      ? (scope || document).querySelector(`label[for="${checkbox.id}"]`)
      : null
    ;(label || checkbox).click()
    await delay.delay(100)
    if (!checkbox.checked) {
      checkbox.checked = true
      checkbox.dispatchEvent(new Event("input", { bubbles: true }))
      checkbox.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(50)
    }
  }
}

export async function fillSelectField(rule, values) {
  let selectedValue = values?.[0]
  if (!selectedValue) return
  let button = rule.$input
  if (!button) {
    throw new filler.FillError(
      `(Select) Button element not found for label: "${rule.label}"`,
    )
  }
  document.body.click()
  await delay.delay(200)
  button.focus()
  await delay.delay(100)
  button.click()

  let menu = null
  let attempts = 0
  let maxAttempts = 20
  while (attempts < maxAttempts && !menu) {
    await delay.delay(50)
    attempts++
    let ariaControls = button.getAttribute("aria-controls")
    let ariaOwns = button.getAttribute("aria-owns")
    if (ariaControls) {
      menu = document.getElementById(ariaControls)
    } else if (ariaOwns) {
      menu = document.getElementById(ariaOwns)
    }
    if (!menu) {
      let menus = Array.from(
        document.querySelectorAll('menu[class*="menu-"], menu[role="menu"]'),
      )
      let visibleMenus = menus.filter(
        (node) =>
          node.offsetParent !== null && node.style.display !== "none",
      )
      if (visibleMenus.length > 0) {
        menu = visibleMenus[visibleMenus.length - 1]
      }
    }
    if (!menu) {
      let menus = Array.from(
        document.querySelectorAll('menu, [role="listbox"], [role="menu"]'),
      )
      let visibleMenus = menus.filter(
        (node) =>
          node.offsetParent !== null && node.style.display !== "none",
      )
      if (visibleMenus.length > 0) {
        menu = visibleMenus[visibleMenus.length - 1]
      }
    }
    if (!menu) {
      let options = Array.from(
        document.querySelectorAll('li[role="menuitem"], li[role="option"]'),
      )
      let visibleOptions = options.filter(
        (node) => node.offsetParent !== null,
      )
      if (visibleOptions.length > 0) {
        let firstOption = visibleOptions[0]
        menu =
          firstOption.closest('menu, [role="listbox"], [role="menu"], ul') ||
          null
      }
    }
  }

  if (!menu) {
    document.body.click()
    button.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    )
    await delay.delay(100)
    throw new filler.FillError(
      `(Select) Dropdown menu not found for label: "${rule.label}"`,
    )
  }

  let optionNodes = menu.querySelectorAll(
    'li[role="menuitem"], li[role="option"], [role="option"], button[role="option"]',
  )
  let matched = null
  for (let optionNode of optionNodes) {
    let option = optionNode
    if (option.offsetParent === null) continue
    let textNode =
      option.querySelector('div[class*="text-"], div[class*="mainContent-"]') ||
      option
    let optionText = textNode.textContent?.trim() || ""
    if (optionText.toLowerCase() === selectedValue.toLowerCase()) {
      matched = option
      break
    }
    if (
      choiceMatch.isExactChoiceMatch(
        optionText.toLowerCase(),
        selectedValue.toLowerCase(),
      ) &&
      (!matched ||
        optionText.length > (matched.textContent?.trim().length || 0))
    ) {
      matched = option
    }
  }

  if (matched) {
    matched.focus()
    await delay.delay(50)
    matched.click()
    await delay.delay(200)
    button.blur()
    await delay.delay(100)
  } else if (optionNodes.length > 0) {
    let fallback = Array.from(optionNodes).find(
      (node) => node.offsetParent !== null,
    )
    if (fallback) {
      fallback.focus()
      await delay.delay(50)
      fallback.click()
      await delay.delay(200)
      button.blur()
      await delay.delay(100)
    } else {
      document.body.click()
      button.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
      )
      await delay.delay(100)
      throw new filler.FillError(
        `(Select) No visible options found for label: "${rule.label}" with value: "${selectedValue}"`,
      )
    }
  } else {
    document.body.click()
    button.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    )
    await delay.delay(100)
    throw new filler.FillError(
      `(Select) No options found for label: "${rule.label}" with value: "${selectedValue}"`,
    )
  }
}
