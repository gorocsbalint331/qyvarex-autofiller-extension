// @ts-nocheck
/**
 * BambooHR DOM fill operations (inputs, selects, checkboxes, resume, cover letter).
 */

import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutMod from "../../../utils/getTargetOrTimeout.js"
import * as stringUtils from "../../../utils/string.ts"

export async function preFillForm() {
  const applyButton = xpath.getFirstOrderedNodeSafe(
    './/button[child::span[text()="Apply for This Job"]]',
  )
  if (applyButton) {
    applyButton?.click()
    await delay.delay(500)
  }
}

export async function uploadResume(resumeInfo, updateRequired, updateFilled) {
  const hiddenInput = document.querySelector('input[name="resumeFileId"]')
  if (hiddenInput.value) {
    const existingName = hiddenInput?.closest("div")?.textContent?.trim()
    if (existingName && existingName !== resumeInfo.resumeName) {
      const removeButton = hiddenInput?.closest("div")?.querySelector("button")
      removeButton.click()
      await delay.delay(200)
    }
  }
  const fileInput = hiddenInput
    ?.closest("div")
    ?.querySelector('input[type="file"]')
  if (fileInput) {
    await dom.uploadFiles(
      fileInput,
      await answerMethods.fetchPdfAsBlob(resumeInfo),
      updateRequired,
      updateFilled,
      "Resume/CV",
    )
  }
}

export function getBamboohrCoverLetterUploadDom() {
  const hiddenInput = document.querySelector(
    'input[name="coverLetterFileId"][type="hidden"], input[name="coverLetterFileId"]',
  )
  const container =
    hiddenInput?.closest('[data-fabric-component="FileUpload"]') ||
    hiddenInput?.parentElement ||
    null
  const input =
    container?.querySelector(
      'input[type="file"][aria-label="file-input"], input[type="file"]',
    ) || null
  const list =
    container?.querySelector('[data-fabric-component="FileUploadList"]') || null
  const uploadedFileName =
    list?.querySelector(
      '[class*="-name"], [class*="FileUploadList"] span',
    ) || null
  const removeButton =
    container?.querySelector(
      'button[aria-label="remove file"], button[aria-label*="remove" i]',
    ) || null

  return {
    input,
    hiddenInput,
    uploadedFileName,
    removeButton,
  }
}

export function getBamboohrCoverLetterStatus() {
  const { hiddenInput, input, uploadedFileName } =
    getBamboohrCoverLetterUploadDom()
  return hiddenInput && (input || uploadedFileName || hiddenInput.value)
    ? "optional"
    : ""
}

function getUploadedCoverLetterName() {
  return (
    getBamboohrCoverLetterUploadDom().uploadedFileName?.textContent?.trim() ||
    ""
  )
}

export async function uploadCoverLetter(
  coverLetter,
  updateRequired,
  updateFilled,
) {
  let uploadDom = getBamboohrCoverLetterUploadDom()
  if (!uploadDom.hiddenInput) return false

  const alreadyUploaded = !!(
    uploadDom.hiddenInput.value || uploadDom.uploadedFileName
  )
  if (alreadyUploaded && !uploadDom.removeButton) {
    return false
  }
  if (alreadyUploaded) {
    uploadDom.removeButton.click()
    uploadDom =
      (await getTargetOrTimeoutMod.default(() => {
        const next = getBamboohrCoverLetterUploadDom()
        return next.input ? next : null
      })) || getBamboohrCoverLetterUploadDom()
  }
  if (!uploadDom.input) return false

  await dom.uploadFiles(
    uploadDom.input,
    await answerMethods.fetchCoverLetterPdfAsBlob(coverLetter),
    updateRequired,
    () => {},
    "Cover Letter",
    false,
  )

  const uploadedName = await getTargetOrTimeoutMod.default(
    () => getUploadedCoverLetterName() || null,
    undefined,
    30,
  )
  if (!uploadedName) return false
  updateFilled("Cover Letter")
  return true
}

export async function getSelectOptionList(toggleEl, forceRetry = false) {
  const menuId = toggleEl?.getAttribute("data-menu-id")
  const menuContainer = await getTargetOrTimeoutMod.default(
    () => {
      toggleEl.dispatchEvent(
        new Event("click", {
          bubbles: true,
        }),
      )
      const byId = menuId ? document.getElementById(menuId) : null
      if (byId?.querySelector(".fab-MenuOption")) return byId
      return xpath.getFirstOrderedNode(
        `//div[@data-fabric-component="Menu" and @data-helium-id="${menuId}"]`,
      )
    },
    null,
    forceRetry ? 15 : 1,
  )

  if (!menuContainer) {
    console.warn("[BambooHR][Select] option-container-missing", {
      expanded: toggleEl.getAttribute("aria-expanded"),
      menuIdPresent: !!menuId,
    })
    return forceRetry ? [] : await getSelectOptionListWithClose(toggleEl)
  }

  const optionNodes = await getTargetOrTimeoutMod.default(
    () => {
      const options = menuContainer.querySelectorAll(".fab-MenuOption")
      return options.length > 0 ? options : null
    },
    null,
    15,
  )

  if (!optionNodes.length) return []

  console.debug("[BambooHR][Select] option-container-ready", {
    lookup: menuContainer.id === menuId ? "id" : "legacy-data-helium-id",
    optionCount: optionNodes.length,
  })
  return Array.from(optionNodes)
}

async function getSelectOptionListWithClose(toggleEl) {
  const options = await getSelectOptionList(toggleEl, true)
  const root =
    document.querySelector("#applicationFormWrapper") ||
    document.querySelector("#poRoot")
  root.dispatchEvent(
    new Event("click", {
      bubbles: true,
      cancelable: false,
    }),
  )
  return options
}

async function setInputValue(input, value) {
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
}

export async function clearInputField(input) {
  await setInputValue(input, "")
}

export async function fillInputField(input, value) {
  input.focus()
  input.dispatchEvent(
    new FocusEvent("focus", {
      bubbles: true,
    }),
  )
  if (value !== input.value) {
    await setInputValue(input, value)
  }
  await delay.delay(200)
  input.blur()
  input.dispatchEvent(
    new FocusEvent("blur", {
      bubbles: true,
    }),
  )
}

export async function clearCustomSelectField(toggleEl) {
  const clearButton = toggleEl.parentElement.querySelector(
    ".fab-SelectToggle__clearButtonContainer button",
  )
  clearButton?.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
}

export async function fillCustomSelectField(toggleEl, values) {
  try {
    toggleEl.focus()
    toggleEl.dispatchEvent(
      new FocusEvent("focus", {
        bubbles: true,
      }),
    )

    const targetValue = values[0]
    const contentEl = toggleEl.querySelector(".fab-SelectToggle__content")
    const currentValue = contentEl?.textContent?.trim() || ""

    if (!targetValue && currentValue) {
      await clearCustomSelectField(toggleEl)
    } else if (targetValue && targetValue !== currentValue) {
      toggleEl.dispatchEvent(
        new Event("click", {
          bubbles: true,
        }),
      )
      await delay.delay(200)

      const optionList = await getSelectOptionList(toggleEl, true)
      if (!optionList) {
        throw Error("fillCustomSelectField - optionList is null")
      }

      let matched = false
      const optionTexts = []
      for (const option of optionList) {
        const optionText = option?.textContent?.trim()
        optionTexts.push(optionText.toLowerCase())
        if (isSelectOptionMatch(optionText, targetValue)) {
          option.dispatchEvent(
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
              view: window,
            }),
          )
          matched = true
          break
        }
      }

      if (!matched) {
        const otherIndex = optionTexts.indexOf("other")
        if (otherIndex > -1) {
          optionList[otherIndex].dispatchEvent(
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
              view: window,
            }),
          )
          const selectEl = toggleEl
            .closest(".fab-Select")
            ?.querySelector("select")
          const selectKey = selectEl.name || selectEl.id
          const otherInput = document.querySelector(
            `input[name^="${selectKey}"], input[id^="${selectKey}"]`,
          )
          if (otherInput) {
            await fillInputField(otherInput, targetValue)
            matched = true
          }
        }
      }

      if (!matched) {
        throw Error("fillCustomSelectField - no select")
      }
    }
  } catch {
    // intentional swallow — matches parcel behavior
  } finally {
    await delay.delay(200)
    toggleEl.blur()
    toggleEl.dispatchEvent(
      new FocusEvent("blur", {
        bubbles: true,
      }),
    )
  }
}

function normalizeDisabilityText(text) {
  return text
    .replace(/don't/gi, "do not")
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim()
}

function disabilitySelfIdentifyKey(text) {
  const normalized = normalizeDisabilityText(text)
  if (normalized.startsWith("no i do not have a disability")) {
    return "disability:no"
  }
  if (normalized.startsWith("yes i have a disability")) {
    return "disability:yes"
  }
  if (
    normalized === "decline to answer" ||
    normalized === "i do not want to answer" ||
    normalized === "i do not wish to self identify" ||
    normalized === "i prefer not to respond"
  ) {
    return "self-identify:decline"
  }
  return null
}

function isSelectOptionMatch(optionText, answerText) {
  if (optionText === answerText) return true
  const optionKey = disabilitySelfIdentifyKey(optionText)
  const answerKey = disabilitySelfIdentifyKey(answerText)
  return !!optionKey && optionKey === answerKey
}

function findCommonAncestor(elements) {
  if (!elements || elements.length === 0) return null
  if (elements.length === 1) return elements[0].parentElement

  const lowestCommonAncestor = (left, right) => {
    const ancestors = /* @__PURE__ */ new Set()
    let node = left
    while (node) {
      ancestors.add(node)
      node = node.parentElement
    }
    node = right
    while (node) {
      if (ancestors.has(node)) return node
      node = node.parentElement
    }
    return null
  }

  let common = elements[0]
  for (let index = 1; index < elements.length; index++) {
    if (!common) return null
    common = lowestCommonAncestor(common, elements[index])
  }
  return common
}

function setCheckboxChecked(input, checked) {
  if (!(input instanceof HTMLInputElement) || input.type !== "checkbox") {
    console.error("Error type error or value null", input)
    return
  }
  if (input.checked !== checked) {
    input.checked = checked
    input.dispatchEvent(
      new Event("click", {
        bubbles: true,
        cancelable: true,
      }),
    )
  }
}

export async function clearCustomCheckboxField(rule) {
  try {
    const input = rule.$input
    if (input.type === "radio") {
      const wrapper =
        input.closest("div.fab-Radio") ||
        input.closest('[data-fabric-component="Radio"]') ||
        input.closest('[data-fabric-component="Checkbox"]')
      const clone = wrapper.cloneNode(true)
      const fakeInput = clone.querySelector(
        "input[type='radio'], input[type='checkbox']",
      )
      fakeInput.value = undefined
      fakeInput.style.display = "none"
      const container = findCommonAncestor(rule.$checkboxs)
      container.appendChild(fakeInput)
      fakeInput.checked = true
      fakeInput.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
        }),
      )
      fakeInput.click()
      await delay.delay(100)
      container.removeChild(fakeInput)
    } else if (input.type === "checkbox") {
      const checkboxes = Array.from(rule.$checkboxs)
      for (const checkbox of checkboxes) {
        setCheckboxChecked(checkbox, false)
      }
      await delay.delay(100)
    }
  } catch (error) {
    console.error("Error clear checkbox:", error)
  }
}

export async function fillCustomCheckboxField(rule, values) {
  await clearCustomCheckboxField(rule)
  const checkboxes = Array.from(rule.$checkboxs)
  if (checkboxes.length === 1 && checkboxes[0].type === "checkbox") {
    setCheckboxChecked(checkboxes[0], values[0] === "Yes")
  } else {
    await dom.fillCheckBoxesField(rule, values)
  }
  await delay.delay(200)
}

export async function fillVeteranField(rule, values) {
  const targetValue = values[0]
  const optionIndex = rule.options.indexOf(targetValue)
  if (optionIndex < 0) return false

  try {
    await clearCustomCheckboxField(rule)
    if (optionIndex < 2) {
      await dom.fillCheckBoxesField(rule, [targetValue])
    } else {
      await dom.fillCheckBoxesField(rule, ["Veteran"])
      const veteranSelect = document.querySelector(
        ".CandidateField--veteranStatuses .fab-Select .fab-SelectToggle",
      )
      await fillCustomSelectField(veteranSelect, [])
      await fillCustomSelectField(veteranSelect, [targetValue])
    }
    return true
  } catch (error) {
    console.error("An unexpected error occurred:", error)
    return false
  }
}

export function injectStyle() {
  const styleId = "fabric-menu-hide-style"
  if (document.getElementById(styleId)) {
    console.warn(
      "The style already exists and does not need to be injected again",
    )
    return document.getElementById(styleId)
  }

  const style = document.createElement("style")
  style.id = styleId
  style.textContent = `
    div[data-fabric-component="Menu"] {
      opacity: 0 !important;
      pointer-events: none !important;
    }
    .CandidateField--veteranStatusesShown {
      opacity: 0 !important;
      pointer-events: none !important;
    }
    .fab-Radio__input:checked+.fab-Radio__label {
      color: inherit !important;
      font-weight: inherit !important;
    }
    .fab-Radio__input:checked+.fab-Radio__label::before,
    .fab-Radio__input:checked+.fab-Radio__label::after {
	    transform: scale(0) !important;
      box-shadow: none !important;
    }
    .fab-TextInput--error,
    .fab-SelectToggle__innerFacade--errorCondition,
    .fab-SelectToggle__toggleButton--errorCondition {
      border-color: #c6c2bf !important;
    }
    .fab-Label::before {
      display:none !important;
    }
    .fab-Label--error {
      color: #38312f !important;
    }
  `
  document.head.appendChild(style)
  return style
}

export function removeStyle() {
  const styleId = "fabric-menu-hide-style"
  const style = document.getElementById(styleId)
  if (!style) return false
  style.remove()
  return true
}

export function blurPage() {
  const root = xpath.getFirstOrderedNode('//*[@id="js-careers-root"]')
  if (!root) return
  for (let index = 0; index < 3; index++) {
    dom.triggerEvents(root, ["click"])
    dom.triggerEvents(root, ["mousedown"])
    dom.triggerEvents(root, ["mouseup"])
  }
}

export function submitObserver(submitButton) {
  if (!submitButton) return

  const observer = new MutationObserver(() => {
    const successRoot = xpath.getFirstOrderedNodeSafe(
      '//p[contains(text(), "Your application was submitted successfully")]',
      document,
    )?.parentElement?.parentElement?.parentElement

    if (successRoot && successRoot.offsetHeight > 0) {
      observer.disconnect()
      setTimeout(() => {
        window.top?.postMessage(
          stringUtils.cleanObject({
            type: enums.MESSAGE_EVENTS.agentSubmitClicked,
          }),
          {
            targetOrigin: "*",
          },
        )
      }, 1000)
    }
  })

  const careersRoot = document.getElementById("js-careers-root")
  if (careersRoot) {
    observer.observe(careersRoot, {
      childList: true,
      subtree: true,
    })
  }
}
