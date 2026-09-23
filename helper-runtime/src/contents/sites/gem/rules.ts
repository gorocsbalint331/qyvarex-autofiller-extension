// @ts-nocheck
/**
 * Gem — form rule extraction and form snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"

const RESUME_LABEL = "Resume/CV"

function stripRequiredAsterisk(label) {
  return label.replace(/\s*\*\s*$/, "").trim()
}

export function normalizeGemFileUploadLabel(label) {
  let trimmed = label.trim()
  return isGemResumeUploadLabel(trimmed)
    ? RESUME_LABEL
    : isGemCoverLetterUploadLabel(trimmed)
      ? "Cover Letter"
      : label
}

export function shouldSkipGemFileUploadRule(label) {
  return (
    isGemResumeUploadLabel(label.trim()) ||
    isGemCoverLetterUploadLabel(label.trim())
  )
}

export function isGemResumeUploadLabel(label) {
  return /^resume(?:\/cv)?$/i.test(label.trim())
}

export function isGemCoverLetterUploadLabel(label) {
  return /^cover\s*letter$/i.test(label.trim())
}

function getTextInput(container) {
  return xpath.getFirstOrderedNodeSafe(
    './/textarea | .//input[@type="text" or not(@type)]',
    container,
  )
}

export async function extractRules() {
  let rules = []
  let form = Array.from(document.querySelectorAll('[class*="form-"]')).find(
    (node) => !node.className.includes("formLayout-"),
  )
  let formLayout = document.querySelector('[class*="formLayout-"]')
  if (!form && !formLayout) return rules

  let containers = new Set()
  if (form) {
    let flexColumns = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "flex-")][contains(@style, "flex-direction: column")][not(ancestor::div[contains(@class, "formLayout-")])]',
      form,
    )
    let inputContainers = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "input-")][not(ancestor::div[contains(@class, "formLayout-")])]',
      form,
    )
    flexColumns.forEach((node) => containers.add(node))
    inputContainers.forEach((node) => containers.add(node))
  }
  if (formLayout) {
    let flexColumns = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "flex-")][contains(@style, "flex-direction: column")]',
      formLayout,
    )
    let inputContainers = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "input-")]',
      formLayout,
    )
    flexColumns.forEach((node) => containers.add(node))
    inputContainers.forEach((node) => containers.add(node))
  }

  let uniqueContainers = Array.from(containers)
  for (let container of uniqueContainers) {
    let rule = await getRuleFromContainer(container)
    if (rule) rules.push(rule)
  }
  return rules
}

async function getRuleFromContainer(container) {
  let labelNode = xpath.getFirstOrderedNodeSafe(
    './/*[contains(@class, "bodyImportant-")]',
    container,
  )
  if (!labelNode) return null
  let label = (labelNode.textContent || "").trim()
  label = stripRequiredAsterisk(label)
  if (!label) return null

  let hasRequiredAsteriskClass = !!xpath.getFirstOrderedNodeSafe(
    './/*[contains(@class, "requiredAsterisk-")]',
    container,
  )
  let hasAsteriskInText =
    label.includes("*") || (labelNode.textContent || "").includes("*")
  let required = hasRequiredAsteriskClass || hasAsteriskInText

  let fileInput = xpath.getFirstOrderedNodeSafe(
    './/input[@type="file"]',
    container,
  )
  if (fileInput && shouldSkipGemFileUploadRule(label)) return null

  let checkboxes = xpath.getOrderedNodesSafe(
    './/input[@type="checkbox"]',
    container,
  )
  if (checkboxes.length > 0) {
    let options = checkboxes
      .map((checkbox) => {
        let checkboxLabel = checkbox.id
          ? document.querySelector(`label[for="${checkbox.id}"]`)
          : null
        if (!checkboxLabel) return checkbox.value || ""
        let body = checkboxLabel.querySelector('div[class*="body-"]')
        return (
          body?.textContent?.trim() ||
          checkboxLabel.textContent?.trim() ||
          checkbox.value ||
          ""
        )
      })
      .filter((option) => option)
    return {
      type: enums.FIELD_TYPE.CHECKBOX,
      label,
      required,
      options,
      $input: checkboxes[0],
      $label: labelNode,
      $checkboxs: checkboxes,
      $radioParent: container,
    }
  }

  let radios = xpath.getOrderedNodesSafe(
    './/input[@type="radio"]',
    container,
  )
  if (radios.length > 0) {
    let options = radios.map((radio) => {
      let radioLabel = document.querySelector(`label[for="${radio.id}"]`)
      if (!radioLabel) return radio.value || ""
      let body = radioLabel.querySelector('div[class*="body-"]')
      return (
        body?.textContent?.trim() ||
        radioLabel.textContent?.trim() ||
        radio.value ||
        ""
      )
    })
    let radioParent = radios[0]?.closest('div[class*="flex-"]')
    return {
      type: enums.FIELD_TYPE.RADIOGROUP,
      label,
      required,
      options: options.filter((option) => option),
      $input: radios[0],
      $label: labelNode,
      $radioParent: radioParent || container,
    }
  }

  let selectButton = xpath.getFirstOrderedNodeSafe(
    './/button[contains(@class, "button-")][contains(@class, "inputGroupEligible-")]',
    container,
  )
  if (selectButton) {
    let options = []
    let menu = null
    try {
      document.body.click()
      await delay.delay(200)
      selectButton.focus()
      await delay.delay(100)
      selectButton.click()
      let attempts = 0
      let maxAttempts = 20
      while (attempts < maxAttempts && !menu) {
        await delay.delay(50)
        attempts++
        let ariaControls = selectButton.getAttribute("aria-controls")
        let ariaOwns = selectButton.getAttribute("aria-owns")
        if (ariaControls) {
          menu = document.getElementById(ariaControls)
        } else if (ariaOwns) {
          menu = document.getElementById(ariaOwns)
        }
        if (!menu) {
          let menus = Array.from(
            document.querySelectorAll(
              'menu[class*="menu-"], menu[role="menu"]',
            ),
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
          let nearest = selectButton.closest(
            'div[class*="input-"], div[class*="flex-"]',
          )
          if (nearest) {
            menu = nearest.querySelector(
              'menu, [role="listbox"], [role="menu"], ul[role="listbox"], ul[role="menu"]',
            )
          }
        }
        if (!menu) {
          let menus = Array.from(
            document.querySelectorAll(
              'menu, [role="listbox"], [role="menu"]',
            ),
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
          let optionNodes = Array.from(
            document.querySelectorAll(
              'li[role="menuitem"], div[role="option"], li[role="option"], button[role="option"]',
            ),
          )
          let visibleOptions = optionNodes.filter(
            (node) => node.offsetParent !== null,
          )
          if (visibleOptions.length > 0) {
            let firstOption = visibleOptions[0]
            menu =
              firstOption.closest(
                'menu, [role="listbox"], [role="menu"], ul',
              ) || null
          }
        }
      }
      if (menu) {
        let optionNodes = menu.querySelectorAll(
          'li[role="menuitem"], li[role="option"], [role="option"], button[role="option"]',
        )
        optionNodes.forEach((optionNode) => {
          let option = optionNode
          if (option.offsetParent !== null) {
            let textNode =
              option.querySelector(
                'div[class*="text-"], div[class*="mainContent-"]',
              ) || option
            let optionText = textNode.textContent?.trim() || ""
            if (
              optionText &&
              optionText !== "Please select" &&
              optionText !== "Select an option"
            ) {
              options.push(optionText)
            }
          }
        })
      }
      selectButton.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
      )
      await delay.delay(150)
      document.body.click()
      await delay.delay(150)
      if (menu && menu.offsetParent !== null) {
        selectButton.click()
        await delay.delay(150)
      }
    } catch {
      try {
        document.body.click()
        selectButton.dispatchEvent(
          new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
        )
        await delay.delay(100)
      } catch {
        // ignore cleanup errors
      }
    }
    return {
      type: enums.FIELD_TYPE.SELECT,
      label,
      required,
      $input: selectButton,
      $label: labelNode,
      options,
    }
  }

  let textInput = getTextInput(container)
  return textInput
    ? {
        type: enums.FIELD_TYPE.TEXT,
        label,
        required,
        $input: textInput,
        $label: labelNode,
      }
    : null
}

export async function getFormSnapshot() {
  let snapshot = {}
  let form = Array.from(document.querySelectorAll('[class*="form-"]')).find(
    (node) => !node.className.includes("formLayout-"),
  )
  let formLayout = document.querySelector('[class*="formLayout-"]')
  if (!form && !formLayout) return snapshot

  let containers = new Set()
  if (form) {
    let flexColumns = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "flex-")][contains(@style, "flex-direction: column")][not(ancestor::div[contains(@class, "formLayout-")])]',
      form,
    )
    let inputContainers = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "input-")][not(ancestor::div[contains(@class, "formLayout-")])]',
      form,
    )
    flexColumns.forEach((node) => containers.add(node))
    inputContainers.forEach((node) => containers.add(node))
  }
  if (formLayout) {
    let flexColumns = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "flex-")][contains(@style, "flex-direction: column")]',
      formLayout,
    )
    let inputContainers = xpath.getOrderedNodesSafe(
      './/div[contains(@class, "input-")]',
      formLayout,
    )
    flexColumns.forEach((node) => containers.add(node))
    inputContainers.forEach((node) => containers.add(node))
  }

  let uniqueContainers = Array.from(containers)
  let seenLabels = new Set()
  for (let container of uniqueContainers) {
    let labelNode = xpath.getFirstOrderedNodeSafe(
      './/*[contains(@class, "bodyImportant-")]',
      container,
    )
    if (!labelNode) continue
    let label = (labelNode.textContent || "").trim()
    label = stripRequiredAsterisk(label)
    if (!label) continue

    let textInput = getTextInput(container)
    if (textInput) {
      if (seenLabels.has(label)) continue
      seenLabels.add(label)
      snapshot[label] = textInput.value || ""
      continue
    }

    let checkboxes = xpath.getOrderedNodesSafe(
      './/input[@type="checkbox"]',
      container,
    )
    if (checkboxes.length > 0) {
      if (seenLabels.has(label)) continue
      seenLabels.add(label)
      snapshot[label] = checkboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => {
          let checkboxLabel = checkbox.id
            ? document.querySelector(`label[for="${checkbox.id}"]`)
            : null
          let body = checkboxLabel?.querySelector('div[class*="body-"]')
          return (
            body?.textContent?.trim() ||
            checkboxLabel?.textContent?.trim() ||
            checkbox.value ||
            ""
          )
        })
        .filter((option) => option)
      continue
    }

    let checkedRadio = xpath.getFirstOrderedNodeSafe(
      './/input[@type="radio"][@checked]',
      container,
    )
    let radioLabel = null
    let hasSelection = false
    if (checkedRadio) {
      hasSelection = true
      if (checkedRadio.id) {
        radioLabel = document.querySelector(`label[for="${checkedRadio.id}"]`)
      }
      if (!radioLabel) {
        let parent = checkedRadio.parentElement
        if (parent) radioLabel = parent.querySelector("label")
      }
    } else {
      let outerCircles = Array.from(
        container.querySelectorAll('span[class*="outerCircle-"]'),
      )
      let selectedCircle = outerCircles.find((node) => {
        let className = node.className || ""
        return (
          className.includes("selected-") &&
          !className.includes("unselected-")
        )
      })
      if (selectedCircle) {
        hasSelection = true
        radioLabel = selectedCircle.closest("label")
        if (radioLabel) {
          if (radioLabel.hasAttribute("for")) {
            let forId = radioLabel.getAttribute("for")
            if (forId) checkedRadio = document.getElementById(forId)
          }
          if (!checkedRadio) {
            let parent = radioLabel.parentElement
            if (parent) {
              checkedRadio = parent.querySelector('input[type="radio"]')
            }
          }
        }
      }
    }

    if (hasSelection) {
      let selectedText = ""
      if (radioLabel) {
        let body = radioLabel.querySelector('div[class*="body-"]')
        if (body) selectedText = body.textContent?.trim() || ""
        if (!selectedText) {
          let childDivs = Array.from(radioLabel.children).filter(
            (child) => child.tagName === "DIV",
          )
          for (let child of childDivs) {
            let text = child.textContent?.trim() || ""
            if (text && text !== "") {
              selectedText = text
              break
            }
          }
        }
        if (!selectedText) {
          selectedText = radioLabel.textContent?.trim() || ""
        }
      }
      if (!selectedText && checkedRadio) {
        selectedText = checkedRadio.value || ""
      }
      if (seenLabels.has(label)) continue
      seenLabels.add(label)
      snapshot[label] = selectedText
      continue
    }

    {
      let anyRadio = container.querySelector('input[type="radio"]')
      if (anyRadio) {
        if (seenLabels.has(label)) continue
        seenLabels.add(label)
        snapshot[label] = ""
        continue
      }
    }

    let fileInput = xpath.getFirstOrderedNodeSafe(
      './/input[@type="file"]',
      container,
    )
    if (fileInput) {
      let fileLabel = normalizeGemFileUploadLabel(label)
      if (seenLabels.has(fileLabel)) continue
      seenLabels.add(fileLabel)
      if (fileInput.files && fileInput.files.length > 0) {
        snapshot[fileLabel] = fileInput.files[0].name
      } else {
        snapshot[fileLabel] = ""
      }
      continue
    }

    let selectButton = xpath.getFirstOrderedNodeSafe(
      './/button[contains(@class, "button-")][contains(@class, "inputGroupEligible-")]',
      container,
    )
    if (selectButton) {
      if (seenLabels.has(label)) continue
      seenLabels.add(label)
      let content = selectButton.querySelector(
        '[class*="buttonContentContainer-"]',
      )
      if (content) {
        let text = content.textContent?.trim()
        if (
          text &&
          text !== "Please select" &&
          text !== "Select an option"
        ) {
          snapshot[label] = text
        } else {
          snapshot[label] = ""
        }
      } else {
        snapshot[label] = ""
      }
    }
  }
  return snapshot
}
