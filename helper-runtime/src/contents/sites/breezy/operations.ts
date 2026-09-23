// @ts-nocheck
/**
 * Breezy ATS — DOM fill operations (inputs, resume, edu/work, snapshots).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as urlStore from "../../../store/url.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeout from "../../../utils/getTargetOrTimeout.js"
import * as rules from "./rules.js"

const getTargetOrTimeoutDefault = { default: getTargetOrTimeout }

export let stabilizeBreezyAngularLocation = ({
  currentTabUrl,
  currentUrl = window.location.href,
  history = window.history,
  setCurrentTabUrl,
} = {}) => {
  let parsed
  try {
    parsed = new URL(currentUrl)
  } catch {
    return null
  }
  if (!parsed.searchParams.has("jr_id")) return null

  let preservedAutofillUrl =
    currentTabUrl ||
    urlStore.useUrlStore.getState().currentTabUrl ||
    currentUrl
  parsed.searchParams.delete("jr_id")
  let visibleUrl = parsed.toString()
  if (visibleUrl === currentUrl) return null

  history.replaceState(history.state, "", visibleUrl)
  ;(setCurrentTabUrl || urlStore.useUrlStore.getState().setCurrentTabUrl)(
    preservedAutofillUrl,
  )
  return {
    visibleUrl,
    preservedAutofillUrl,
  }
}

let clickWithoutNavigation = (el) => {
  let prevent = (event) => {
    event.preventDefault()
  }
  document.addEventListener("click", prevent, {
    capture: true,
    once: true,
  })
  try {
    el.click()
  } finally {
    document.removeEventListener("click", prevent, {
      capture: true,
    })
  }
}

export let preFillForm = async () => {
  let applyLink = xpath.getFirstOrderedNodeSafe(
    './/a[child::span[text()="Apply To Position"]]',
  )
  if (applyLink) {
    applyLink?.click()
    return
  }
}

export let afterUploadResume = async () => {
  let attached = await getTargetOrTimeoutDefault.default(
    () => {
      let node = xpath.getFirstOrderedNode(
        "//div[contains(@class, 'file-input-container') and .//span[text()='Attached']]",
      )
      if (node) return node
    },
    () => false,
    100,
  )
  if (attached) {
    await clickDeleteItemButton(document)
    await clickDeleteItemButton(document)
    await clickAddItemButton(
      document,
      rules.hardCodeConfig[rules.HARDCODE_KEY.education].addButton,
      xpath.getOrderedNodes(
        rules.hardCodeConfig[rules.HARDCODE_KEY.education].container,
      ).length > 0
        ? 0
        : 1,
    )
    await clickAddItemButton(
      document,
      rules.hardCodeConfig[rules.HARDCODE_KEY.workExperience].addButton,
      xpath.getOrderedNodes(
        rules.hardCodeConfig[rules.HARDCODE_KEY.workExperience].container,
      ).length > 0
        ? 0
        : 1,
    )
  }
}

export let uploadResume = async (resumeInfo) => {
  let input = xpath.getFirstOrderedNode('//input[@name="cResume"]')
  if (input) {
    await uploadFiles(input, await answerMethods.fetchPdfAsBlob(resumeInfo))
  }
  await afterUploadResume()
}

export let uploadFiles = async (input, fileList) => {
  if (input && fileList) {
    try {
      input.files = fileList.files
      input.dispatchEvent(
        new Event("change", {
          bubbles: true,
          cancelable: false,
        }),
      )
    } catch (error) {
      console.error("Error uploading files:", error)
      return
    }
    await waitForBreezyResumeReady()
  }
}

export let waitForBreezyResumeReady = async (timeoutMs = 15e3) => {
  let start = Date.now()
  let attached = await getTargetOrTimeoutDefault.default(
    () =>
      xpath.getFirstOrderedNode(
        "//div[contains(@class, 'file-input-container') and .//span[text()='Attached']]",
      ),
    () => Date.now() - start > timeoutMs,
    Math.max(1, Math.ceil((timeoutMs - (Date.now() - start)) / 100)),
  )
  if (!attached) return

  let http = window.angular?.element?.(document.body)?.injector?.()?.get?.(
    "$http",
  )
  if (!http?.pendingRequests) {
    await waitForDomSettle(attached, start, timeoutMs)
    return
  }

  let idleSince = 0
  for (; Date.now() - start < timeoutMs; ) {
    if (http.pendingRequests.length === 0) {
      if (!idleSince) idleSince = Date.now()
      if (Date.now() - idleSince >= 500) return
    } else {
      idleSince = 0
    }
    await delay.delay(100)
  }
}

let waitForDomSettle = async (
  attachedNode,
  start,
  timeoutMs,
  settleMs = 500,
  minWaitMs = 1e3,
) => {
  if (typeof MutationObserver === "undefined") {
    await delay.delay(minWaitMs)
    return
  }
  let root = attachedNode.closest("form") || document.body
  let lastMutation = Date.now()
  let observer = new MutationObserver(() => {
    lastMutation = Date.now()
  })
  observer.observe(root, {
    attributes: true,
    childList: true,
    subtree: true,
  })
  try {
    for (; Date.now() - start < timeoutMs; ) {
      let elapsed = Date.now() - start
      let sinceMutation = Date.now() - lastMutation
      if (elapsed >= minWaitMs && sinceMutation >= settleMs) return
      await delay.delay(100)
    }
  } finally {
    observer.disconnect()
  }
}

export let fillInputField = async (input, value) => {
  if (input && value) {
    input.focus()
    input.value = value
    input.dispatchEvent(
      new Event("input", {
        bubbles: true,
        cancelable: true,
      }),
    )
    input.dispatchEvent(
      new Event("change", {
        bubbles: true,
        cancelable: true,
      }),
    )
    await delay.delay(100)
    input.blur()
  }
}

export let fillDateField = async (input, value) => {
  if (!input || !value) return
  if (Array.isArray(value)) value = value[0]

  let text = value.trim()
  let yearOnly = /^\d{4}$/
  let yearMonth = /^\d{4}[-/]\d{2}$/
  if (yearOnly.test(text)) {
    text = `${text}-01-01`
  } else if (yearMonth.test(text)) {
    text = `${text.replace("/", "-")}-01`
  }

  input.focus()
  input.value = text
  input.dispatchEvent(
    new Event("input", {
      bubbles: true,
      cancelable: true,
    }),
  )
  input.dispatchEvent(
    new Event("change", {
      bubbles: true,
      cancelable: true,
    }),
  )
  await delay.delay(100)
  input.blur()
}

export let fillSelectField = async (select, values) => {
  if (!select || !values.length) return
  let target = values[0]
  let options = Array.from(select.options)
  for (let option of options) {
    if (
      choiceMatch.isExactChoiceMatch(
        option.text.toLowerCase(),
        target.toLowerCase(),
      )
    ) {
      select.value = option.value
      select.dispatchEvent(
        new Event("change", {
          bubbles: true,
          cancelable: true,
        }),
      )
      await delay.delay(100)
      select.blur()
      return
    }
  }
}

export let fillRadioField = async (radios, value) => {
  if (!radios.length || !value.length) return
  if (Array.isArray(value)) value = value[0]

  let target = value.toLowerCase()
  for (let radio of radios) {
    let labelEl = radio.closest("label") || radio.nextElementSibling
    let labelText = labelEl?.textContent?.trim().toLowerCase() || ""
    if (labelText === target) {
      radio.click()
      radio.dispatchEvent(
        new Event("change", {
          bubbles: true,
          cancelable: true,
        }),
      )
      await delay.delay(100)
      radio.blur()
      return
    }
  }
}

export let fillCheckboxField = async (checkboxes, values) => {
  if (!checkboxes.length || !values.length) return
  let targets = values.map((v) => v.toLowerCase())
  for (let checkbox of checkboxes) {
    let labelEl = checkbox.closest("label") || checkbox.nextElementSibling
    let labelText = labelEl?.textContent?.trim().toLowerCase() || ""
    if (targets.includes(labelText)) {
      checkbox.click()
      checkbox.dispatchEvent(
        new Event("change", {
          bubbles: true,
          cancelable: true,
        }),
      )
      await delay.delay(100)
      checkbox.blur()
    }
  }
}

export let clickDeleteItemButton = async (root) => {
  if (!root) return
  let deleteLinks = xpath.getOrderedNodes('.//a[text()="Delete"]', root) || []
  for (let link of deleteLinks) {
    clickWithoutNavigation(link)
    await delay.delay(300)
  }
}

export let clickAddItemButton = async (root, xpathExpr, count) => {
  if (count <= 0) return
  let button = null
  if ((button = xpath.getFirstOrderedNode(xpathExpr, root))) {
    for (let i = 0; i < count; i++) {
      clickWithoutNavigation(button)
      await delay.delay(500)
    }
    await delay.delay(500)
  }
}

export let ensureEducationAndWorkExperienceContainers = async () => {
  for (let config of [
    rules.hardCodeConfig[rules.HARDCODE_KEY.education],
    rules.hardCodeConfig[rules.HARDCODE_KEY.workExperience],
  ]) {
    let addButton = xpath.getFirstOrderedNode(config.addButton, document)
    let containers = xpath.getOrderedNodes(config.container, document)
    if (addButton && containers.length === 0) {
      await clickAddItemButton(document, config.addButton, 1)
    }
  }
}

export let blurPage = () => {
  let active = document.activeElement
  if (active) active.blur()
}

export let getSnapshot = (formRules) => {
  let snapshot = {}
  for (let rule of formRules) {
    let label = rule.label
    if (!label) continue
    let field = rule
    switch (rule.type) {
      case enums.FIELD_TYPE.TEXT:
      case enums.FIELD_TYPE.DATE: {
        let input = field.$input
        snapshot[label] = input?.value || ""
        break
      }
      case enums.FIELD_TYPE.SELECT: {
        let select = field.$input
        if (select && select.selectedIndex >= 0) {
          let option = select.options[select.selectedIndex]
          snapshot[label] = option?.text?.trim() || ""
        } else {
          snapshot[label] = ""
        }
        break
      }
      case enums.FIELD_TYPE.RADIO: {
        let radios = field.$input
        let checked = radios?.find((r) => r.checked)
        if (checked) {
          let labelEl = checked.closest("label") || checked.nextElementSibling
          snapshot[label] = labelEl?.textContent?.trim() || checked.value
        } else {
          snapshot[label] = ""
        }
        break
      }
      case enums.FIELD_TYPE.CHECKBOX: {
        let checkboxes = field.$checkboxs
        let checkedLabels = []
        if (checkboxes) {
          for (let checkbox of checkboxes) {
            if (checkbox.checked) {
              let labelEl =
                checkbox.closest("label") || checkbox.nextElementSibling
              checkedLabels.push(
                labelEl?.textContent?.trim() || checkbox.value,
              )
            }
          }
        }
        snapshot[label] = checkedLabels
      }
    }
  }

  let educationNodes = xpath.getOrderedNodes(
    rules.hardCodeConfig[rules.HARDCODE_KEY.education].snapshot,
  )
  if (educationNodes.length > 0) {
    let fields = rules.hardCodeConfig[rules.HARDCODE_KEY.education].fields
    let education = []
    for (let node of educationNodes) {
      let row = {}
      for (let field of fields) {
        let input = xpath.getFirstOrderedNode(field.xpath, node)
        row[field.key] = input?.value || ""
      }
      if (!Object.values(row).every((v) => !v)) education.push(row)
    }
    snapshot.education = education
  }

  let employmentNodes = xpath.getOrderedNodes(
    rules.hardCodeConfig[rules.HARDCODE_KEY.workExperience].snapshot,
  )
  if (employmentNodes.length > 0) {
    let fields = rules.hardCodeConfig[rules.HARDCODE_KEY.workExperience].fields
    let employment = []
    for (let node of employmentNodes) {
      let row = {}
      for (let field of fields) {
        let input = xpath.getFirstOrderedNode(field.xpath, node)
        row[field.key] = input?.value || ""
      }
      if (!Object.values(row).every((v) => !v)) employment.push(row)
    }
    snapshot.employment = employment
  }

  return snapshot
}

export let submitObserver = (submitButton) => {
  if (!submitButton) return
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) mutation.type
  })
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}
