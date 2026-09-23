// @ts-nocheck
/**
 * ADP WorkforceNow DOM fill operations (inputs, selects, phone, resume, cover letter).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as answer from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as observer from "../../methods/observer.ts"
import * as enums from "../../../core/enums.js"
import * as phoneCountryCode from "../../../core/phone-country-code.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as stringUtils from "../../../utils/string.ts"
import * as adpAnswer from "./answer.ts"
import * as adpCountry from "./country.ts"

function isElementVisible(el) {
  if (!el) return false
  let hasCheckVisibility = typeof el.checkVisibility === "function"
  return hasCheckVisibility
    ? el.checkVisibility() ?? false
    : !!el.offsetParent
}

export function getAdpWorkforceNowAdvanceButton() {
  let footerBtn = document.getElementById("ja_sv_cw_next_footer_btn")
  if (footerBtn && isElementVisible(footerBtn)) return footerBtn

  let submitBtn = Array.from(
    document.querySelectorAll('button, input[type="submit"]'),
  ).find((btn) => {
    let text = (
      btn.textContent ||
      btn.getAttribute("value") ||
      btn.getAttribute("aria-label") ||
      ""
    )
      .trim()
      .toLowerCase()
    return isElementVisible(btn) && text.includes("submit")
  })
  return submitBtn ?? null
}

function getSdfButtonTitle(el) {
  return el
    ? (
        el.textContent ||
        el.getAttribute("button-title") ||
        el.getAttribute("aria-label") ||
        ""
      )
        .trim()
        .toLowerCase()
    : ""
}

export function getResumeUploadDom() {
  let container =
    document.querySelector(
      "#resumeUploadContainer, .resume-upload-container",
    ) ||
    Array.from(document.querySelectorAll(".upload-resume-container")).find(
      (node) => {
        let text = node.textContent?.toLowerCase() || ""
        return (
          !node.closest(".additional-documents-container") &&
          !!node.querySelector('input[type="file"]') &&
          (text.includes("upload resume") || text.includes("resume"))
        )
      },
    ) ||
    null

  let input = container?.querySelector(
    'input[type="file"][name="file"], input[type="file"]',
  )
  let uploadButton =
    container?.querySelector(
      'sdf-button[id^="fileUpload-"][button-title*="Upload resume"], sdf-button[id^="fileUpload-"][aria-label*="Upload resume"], sdf-button[button-title*="Upload resume"], sdf-button[aria-label*="Upload resume"]',
    ) ||
    Array.from(container?.querySelectorAll("sdf-button") || []).find((btn) =>
      getSdfButtonTitle(btn).includes("upload resume"),
    ) ||
    null

  return { container, input, uploadButton }
}

export function getCoverLetterUploadDom() {
  let container =
    Array.from(
      document.querySelectorAll(".additional-documents-container"),
    ).find((node) => {
      let heading = node.querySelector("h3")?.textContent?.toLowerCase() || ""
      let text = node.textContent?.toLowerCase() || ""
      return heading.includes("attachment") && text.includes("cover letter")
    }) || null

  let input = container?.querySelector('input[type="file"][name="file"]')
  let uploadButton = container?.querySelector(
    'sdf-button[id^="fileUpload-"], sdf-button[button-title*="Upload attachments"]',
  )
  let uploadedValue = container?.querySelector(
    ".additional-document-result, .additional-document-success",
  )
  let uploadedFileName = container?.querySelector(
    ".additional-document-result .fileDetails .fileName, .additional-document-result .fileName, [class*='fileName']",
  )
  let deleteButton = container?.querySelector(
    'button[id^="recruitment_afterAdditionalDocumentsUpload_remove_"], .additional-document-result button.removeIcon[aria-label^="Remove,"]',
  )

  return {
    container,
    input,
    uploadButton,
    uploadedValue,
    uploadedFileName,
    deleteButton,
  }
}

export function getCoverLetterFieldStatus() {
  let coverLetterDom = getCoverLetterUploadDom()
  let isPresent =
    !!coverLetterDom.container &&
    !!coverLetterDom.input &&
    !!coverLetterDom.uploadButton
  return isPresent ? "required" : ""
}

function getNextFooterButtonFromEvent(event) {
  for (let node of event.composedPath()) {
    if (!(node instanceof HTMLElement) || node.id !== "ja_sv_cw_next_footer_btn")
      continue
    if (node instanceof HTMLButtonElement) return node
    let button = node.closest("button")
    return button instanceof HTMLButtonElement ? button : null
  }
  return null
}

export function bindCoverLetterAdvanceRecheckObserver(onRecheck) {
  let lastSignature = ""
  let primed = false
  let debounceTimer = null

  let getPageSignature = () =>
    [
      window.location.pathname +
        window.location.search +
        window.location.hash,
      document.title?.trim() ?? "",
      document.querySelector("h1")?.textContent?.trim() ?? "",
    ].join("\x1e")

  let scheduleRecheck = (ms) => {
    if (debounceTimer) clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      debounceTimer = null
      onRecheck()
    }, ms)
  }

  document.addEventListener(
    "click",
    (event) => {
      let footerBtn = getNextFooterButtonFromEvent(event)
      if (
        footerBtn?.isConnected &&
        footerBtn.innerText?.trim() !== "Submit"
      ) {
        scheduleRecheck(1500)
      }
    },
    true,
  )

  setInterval(() => {
    let signature = getPageSignature()
    if (!primed) {
      lastSignature = signature
      primed = true
      return
    }
    if (signature !== lastSignature) {
      lastSignature = signature
      scheduleRecheck(800)
    }
  }, 1e3)
}

function getCoverLetterUploadedFileName() {
  return getCoverLetterUploadDom().uploadedFileName?.textContent?.trim() || ""
}

function hasCoverLetterUploaded() {
  let { uploadedFileName, deleteButton } = getCoverLetterUploadDom()
  return !!uploadedFileName?.textContent?.trim() || !!deleteButton
}

function resolveConnectedPhoneInput(el) {
  if (!el.id || typeof document.getElementById !== "function") {
    return el.isConnected ? el : null
  }
  let resolved = document.getElementById(el.id)
  return resolved instanceof HTMLInputElement ? resolved : null
}

function resolveConnectedTextInput(el) {
  if (
    !el.id ||
    typeof document === "undefined" ||
    typeof document.getElementById !== "function"
  ) {
    return el.isConnected ? el : null
  }
  let resolved = document.getElementById(el.id)
  return resolved instanceof HTMLInputElement ||
    (typeof HTMLTextAreaElement !== "undefined" &&
      resolved instanceof HTMLTextAreaElement)
    ? resolved
    : null
}

function getNativeValueSetter(el) {
  let proto = Object.getPrototypeOf(el)
  while (proto && proto !== Object.prototype) {
    let setter = Object.getOwnPropertyDescriptor(proto, "value")?.set
    if (setter) return setter
    proto = Object.getPrototypeOf(proto)
  }
  return null
}

export async function fillAdpWorkforceNowTextInput(input, value, label) {
  let connected = resolveConnectedTextInput(input)
  if (!connected) {
    return (
      console.info(
        "[AdpWorkforceNowInputDebug] write",
        JSON.stringify({
          label,
          valueLength: value.length,
          committed: false,
          reason: "input-not-connected-or-replaced",
        }),
      ),
      false
    )
  }

  try {
    connected.focus()
  } catch {
    return (
      console.info(
        "[AdpWorkforceNowInputDebug] write",
        JSON.stringify({
          label,
          valueLength: value.length,
          committed: false,
          reason: "focus-error",
        }),
      ),
      false
    )
  }

  if (await delay.delay(0), !(connected = resolveConnectedTextInput(connected))) {
    return (
      console.info(
        "[AdpWorkforceNowInputDebug] write",
        JSON.stringify({
          label,
          valueLength: value.length,
          committed: false,
          reason: "input-replaced-after-focus",
        }),
      ),
      false
    )
  }

  let nativeSetter = getNativeValueSetter(connected)
  if (!nativeSetter) {
    return (
      console.info(
        "[AdpWorkforceNowInputDebug] write",
        JSON.stringify({
          label,
          valueLength: value.length,
          committed: false,
          reason: "no-native-setter",
        }),
      ),
      false
    )
  }

  try {
    nativeSetter.call(connected, value)
    connected.dispatchEvent(
      new Event("input", { bubbles: true, cancelable: true }),
    )
    connected.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: true }),
    )
    connected.blur()
    await delay.delay(50)

    let afterWrite = resolveConnectedTextInput(connected)
    let committed =
      afterWrite?.isConnected === true && afterWrite.value === value
    return (
      console.info(
        "[AdpWorkforceNowInputDebug] write",
        JSON.stringify({
          label,
          valueLength: value.length,
          committed,
          events: "focus-input-change-blur",
        }),
      ),
      committed
    )
  } catch {
    return (
      console.info(
        "[AdpWorkforceNowInputDebug] write",
        JSON.stringify({
          label,
          valueLength: value.length,
          committed: false,
          reason: "write-error",
        }),
      ),
      false
    )
  }
}

export async function fillAdpWorkforceNowPhoneInput(input, answerValue, label) {
  let phoneText = phoneCountryCode.resolvePhoneAnswerText(answerValue)
  let connected = resolveConnectedPhoneInput(input)
  if (!connected || !phoneText) return false

  let wrote = await fillAdpWorkforceNowTextInput(connected, phoneText, label)
  if (!wrote) return false

  await delay.delay(100)
  let afterWrite = resolveConnectedPhoneInput(connected)
  let committed = adpAnswer.isAdpWorkforceNowPhoneValueCommitted(
    afterWrite?.value,
    phoneText,
  )
  return (
    console.info(
      "[AdpWorkforceNowPhoneDebug] phone-write",
      JSON.stringify({
        label,
        expectedLength: phoneText.length,
        expectedDigitsLength: phoneText.replace(/\D/g, "").length,
        actualLength: afterWrite?.value.length ?? 0,
        actualDigitsLength:
          afterWrite?.value.replace(/\D/g, "").length ?? 0,
        committed,
      }),
    ),
    committed
  )
}

export function fillAdpWorkforceNowPhoneCountryCode(select, answerValue, label) {
  let phoneText = phoneCountryCode.resolvePhoneAnswerText(answerValue)
  if (!phoneText || !select?.isConnected) return false

  let options = Array.from(select.options).map((option) => {
    let iso2 = option.value.trim().toLowerCase()
    let country = phoneCountryCode.getCountryByIso2(iso2)
    return {
      label: option.textContent?.trim() || "",
      countryName: country?.name || option.textContent?.trim() || "",
      dialCode: country?.dialCode || "",
      iso2,
      element: option,
    }
  })

  let matched = phoneCountryCode.findPhoneCountryOption(phoneText, options, {
    bareDialPolicy: "reject-shared",
  })?.element

  if (!matched) {
    return (
      console.info(
        "[AdpWorkforceNowPhoneDebug] country-code-write",
        JSON.stringify({
          label,
          answerLength: phoneText.length,
          optionCount: options.length,
          matched: false,
          committed: false,
        }),
      ),
      false
    )
  }

  select.value = matched.value
  matched.selected = true
  select.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))
  select.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }))

  let committed = select.value === matched.value && matched.selected
  return (
    console.info(
      "[AdpWorkforceNowPhoneDebug] country-code-write",
      JSON.stringify({
        label,
        answerLength: phoneText.length,
        optionCount: options.length,
        matched: true,
        committed,
      }),
    ),
    committed
  )
}

export async function fillCheckBoxesField(rule, values) {
  let answers = Array.isArray(values) ? values : [values]
  if (rule.$checkboxs && rule.$checkboxs.length !== 0) {
    for (let checkbox of rule.$checkboxs) {
      if (!checkbox || !checkbox.isConnected) continue
      let input = checkbox
      if (input.checked) continue

      let optionLabel = (
        input.closest("label")?.textContent?.trim() ||
        input
          .closest(".vdl-checkbox")
          ?.querySelector("label")
          ?.textContent?.trim() ||
        input.getAttribute("aria-label") ||
        ""
      )
        .toLowerCase()
        .trim()
        .replace("*", "")

      let shouldCheck = false
      if (
        answers.some((answerValue) =>
          choiceMatch.isExactChoiceMatch(
            optionLabel,
            answerValue?.toLowerCase().trim(),
          ),
        )
      ) {
        shouldCheck = true
      } else if (
        (answers[0]?.toLowerCase() === "true" && optionLabel === "yes") ||
        (answers[0]?.toLowerCase() === "false" && optionLabel === "no") ||
        (optionLabel.includes("have read") &&
          answers[0]?.toLowerCase() === "true") ||
        (answer.isMatched(optionLabel, rule.label) &&
          answers[0]?.toLowerCase() === "true") ||
        (answers[0]?.toLowerCase() === "true" &&
          (optionLabel.includes("current") ||
            rule.label.toLowerCase().includes("current"))) ||
        (rule.label.toLowerCase().includes("current") &&
          answers[0]?.toLowerCase() === "true")
      ) {
        shouldCheck = true
      }

      if (shouldCheck) {
        input.checked = true
        input.dispatchEvent(
          new Event("click", { bubbles: true, cancelable: true }),
        )
        input.dispatchEvent(
          new Event("change", { bubbles: true, cancelable: true }),
        )
        let roleCheckbox = input.closest('[role="checkbox"]')
        if (roleCheckbox) {
          roleCheckbox.dispatchEvent(
            new Event("click", { bubbles: true, cancelable: true }),
          )
        }
        await delay.delay(50)
      }
    }
  }
}

function normalizeMatchText(text) {
  return (text || "").replace(/\s+/g, " ").trim().toLowerCase()
}

function isSelectValueMatched(el, matcher) {
  if (el instanceof HTMLSelectElement) {
    let selected =
      Array.from(el.options).find((option) => option.selected) ||
      el.options[el.selectedIndex]
    if (selected) {
      return matcher(
        selected.textContent?.trim() || "",
        selected.value?.trim() || "",
      )
    }
  }

  let candidates = []
  if (
    typeof HTMLInputElement !== "undefined" &&
    el instanceof HTMLInputElement
  ) {
    candidates.push(el.value || "")
  }
  candidates.push(el.textContent || "")
  for (let node of el.querySelectorAll(
    ".MDFSelectBox__single-value, .single-value, [class*='SingleValue'], [class*='single-value']",
  )) {
    candidates.push(node.textContent || "")
  }

  let wrappers = [
    el.closest(".MDFSelectBox"),
    el.closest(".mdf-validated-field"),
  ].filter((node) => !!node)

  for (let wrapper of new Set(wrappers)) {
    for (let node of wrapper.querySelectorAll(
      ".MDFSelectBox__single-value, .single-value, [class*='SingleValue'], [class*='single-value']",
    )) {
      candidates.push(node.textContent || "")
    }
  }

  let sdfSelect = el.closest("sdf-select-simple")
  if (sdfSelect) {
    candidates.push(sdfSelect.textContent || "")
    for (let node of sdfSelect.querySelectorAll(
      ".MDFSelectBox__single-value, .single-value, [class*='SingleValue'], [class*='single-value']",
    )) {
      candidates.push(node.textContent || "")
    }
  }

  return candidates.some((candidate) => {
    let trimmed = candidate.trim()
    return trimmed.length > 0 && matcher(trimmed)
  })
}

function fillNativeSelect(select, matcher) {
  for (let option of Array.from(select.options)) {
    let label = option.textContent?.trim() || ""
    let value = option.value?.trim() || ""
    if (matcher(label, value)) {
      select.value = option.value
      option.selected = true
      select.dispatchEvent(
        new Event("input", { bubbles: true, cancelable: true }),
      )
      select.dispatchEvent(
        new Event("change", { bubbles: true, cancelable: true }),
      )
      return true
    }
  }
  return false
}

async function closeSelectDropdown(el) {
  try {
    if (!el || !el.isConnected) return
    let expanded = el.getAttribute("aria-expanded")
    if (expanded !== "true") return

    let escapeEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      bubbles: true,
      cancelable: true,
      view: window,
    })
    el.dispatchEvent(escapeEvent)
    await delay.delay(50)

    let stillExpanded = el.getAttribute("aria-expanded")
    if (stillExpanded === "true") {
      try {
        let focusOut = new FocusEvent("focusout", {
          bubbles: true,
          cancelable: true,
          view: window,
        })
        el.dispatchEvent(focusOut)
        await delay.delay(50)
      } catch {
      }
    }
  } catch {
  }
}

export async function getSelectOptionsElement(el, shouldClose = true) {
  try {
    let getOptionText = (option) =>
      (
        option.getAttribute("aria-label") ||
        option.getAttribute("value") ||
        option.textContent?.trim() ||
        ""
      ).trim()

    let opened = false

    let clickOpenTarget = async (target) => {
      if (target && target.isConnected) {
        try {
          await delay.delay(50)
          let mouseInit = {
            bubbles: true,
            cancelable: true,
            view: window,
            buttons: 1,
          }
          target.dispatchEvent(new MouseEvent("mousedown", mouseInit))
          await delay.delay(50)
          target.dispatchEvent(new MouseEvent("mouseup", mouseInit))
          await delay.delay(50)
          if (target.isConnected) {
            target.click()
            target.dispatchEvent(new MouseEvent("click", mouseInit))
          }
        } catch {
        }
      }
    }

    let vsidItem = el.closest(".vsid-item")
    if (vsidItem) {
      await clickOpenTarget(vsidItem)
      let control = vsidItem.querySelector(".MDFSelectBox__control")
      if (control) await clickOpenTarget(control)
      opened = true
    }

    if (!opened) {
      let vdlContainer = el.closest(".vdl-dropdown-list__input-container")
      if (vdlContainer) {
        let picker = vdlContainer.querySelector(".vdl-dropdown-list__picker")
        if (picker) await clickOpenTarget(picker)
        else await clickOpenTarget(vdlContainer)
        opened = true
      }
    }

    if (!opened) {
      let mdfControl = el.closest(".MDFSelectBox__control")
      if (mdfControl) {
        let indicator = mdfControl.querySelector(
          ".MDFSelectBox__dropdown-indicator",
        )
        if (indicator) await clickOpenTarget(indicator)
        else await clickOpenTarget(mdfControl)
        opened = true
      }
    }

    if (!opened) await clickOpenTarget(el)

    let ariaExpanded = el.getAttribute("aria-expanded")
    let waitCount = 0
    let hasAriaExpanded = el.hasAttribute("aria-expanded")
    let maxWait = hasAriaExpanded ? 20 : 4
    while (ariaExpanded !== "true" && waitCount < maxWait) {
      await delay.delay(100)
      ariaExpanded = el.getAttribute("aria-expanded")
      waitCount++
    }

    if (ariaExpanded === "false" || ariaExpanded === null) {
      let vdlContainer = el.closest(".vdl-dropdown-list__input-container")
      if (vdlContainer && vdlContainer.isConnected) {
        await clickOpenTarget(vdlContainer)
        await delay.delay(500)
        ariaExpanded = el.getAttribute("aria-expanded")
      } else {
        let mdfControl =
          el.closest(".MDFSelectBox__control") ||
          el.parentElement?.closest(".MDFSelectBox__control")
        if (mdfControl && mdfControl.isConnected) {
          await clickOpenTarget(mdfControl)
          await delay.delay(500)
          ariaExpanded = el.getAttribute("aria-expanded")
        }
      }
    }

    let listboxId = el?.getAttribute("aria-controls")
    if (!listboxId) {
      let describedBy = el.getAttribute("aria-describedby")
      if (describedBy) {
        let match = describedBy.match(
          /react-select-instance-(.*?)-placeholder/,
        )
        if (match && match[1]) {
          let instanceId = match[1]
          let derivedId = `react-select-instance-${instanceId}-listbox`
          if (document.getElementById(derivedId)) listboxId = derivedId
        }
      }
    }

    let optionNodes = []
    if (listboxId) {
      optionNodes = Array.from(
        document.querySelectorAll(
          `#${listboxId} .MDFSelectBox__option, #${listboxId} .vdl-list__option, #${listboxId} [role="option"]`,
        ),
      )
    } else {
      let menus = Array.from(
        document.querySelectorAll(
          ".MDFSelectBox__menu-list, [role='listbox']",
        ),
      )
      let visibleMenu = menus.find((menu) => {
        let rect = menu.getBoundingClientRect()
        let style = window.getComputedStyle(menu)
        let visible =
          rect.width > 0 &&
          rect.height > 0 &&
          style.display !== "none" &&
          style.visibility !== "hidden"
        return visible
      })
      if (visibleMenu) {
        optionNodes = Array.from(
          visibleMenu.querySelectorAll(
            ".MDFSelectBox__option, .vdl-list__option, [role='option']",
          ),
        )
      }
    }

    let options = optionNodes.filter((node) => !!getOptionText(node))
    if (options.length === 0) {
      let sdfSelect =
        el.tagName?.toLowerCase() === "sdf-select-simple"
          ? el
          : el.closest("sdf-select-simple")
      let shadowRoot = sdfSelect?.shadowRoot
      if (shadowRoot) {
        let shadowOptions = Array.from(
          shadowRoot.querySelectorAll("sdf-select-item, [role='option']"),
        )
        let unique = Array.from(new Set(shadowOptions))
        options = unique.filter((node) => !!getOptionText(node))
      }
    }

    if (options.length === 0) return null
    return options
  } finally {
    if (shouldClose) await closeSelectDropdown(el)
  }
}

async function fillSdfSelectSimple(sdfSelect, matcher, useLooseMatch = false) {
  try {
    let shadowRoot = sdfSelect.shadowRoot

    let isVisible = (node) => {
      if (
        !node ||
        !node.isConnected ||
        node.getAttribute("aria-hidden") === "true"
      ) {
        return false
      }
      let style = window.getComputedStyle(node)
      if (style.display === "none" || style.visibility === "hidden") {
        return false
      }
      let rect = node.getBoundingClientRect()
      return rect.width > 0 && rect.height > 0
    }

    let getItemText = (item) =>
      (
        item.getAttribute("aria-label") ||
        item.getAttribute("value") ||
        item.textContent ||
        ""
      ).trim()

    let itemMatches = (item) => {
      if (!useLooseMatch) {
        return matcher(
          getItemText(item),
          item.getAttribute("value") || undefined,
        )
      }
      let texts = [
        item.textContent,
        item.getAttribute("aria-label"),
        item.getAttribute("value"),
      ]
      return texts.some((text) => {
        let trimmed = text?.trim() || ""
        return trimmed.length > 0 && matcher(trimmed)
      })
    }

    let getVisibleListboxes = () =>
      Array.from(document.querySelectorAll('[role="listbox"]')).filter(
        isVisible,
      )

    let trigger =
      shadowRoot?.querySelector(
        'input[role="combobox"], [role="button"][aria-expanded], input, button',
      ) || sdfSelect.querySelector("input, button")
    if (!trigger) return false

    let knownListboxes = new Set(
      Array.from(document.querySelectorAll('[role="listbox"]')),
    )
    await delay.delay(100)
    if (trigger.isConnected) trigger.click()
    await delay.delay(300)

    let ariaControls = trigger.getAttribute("aria-controls")
    let listbox = null
    for (let attempt = 0; attempt < 6 && !listbox; attempt++) {
      if (attempt > 0) await delay.delay(100)

      if (ariaControls) {
        let controlled =
          shadowRoot?.querySelector(`[id="${ariaControls}"]`) ||
          document.getElementById(ariaControls)
        if (isVisible(controlled)) {
          listbox = controlled
          break
        }
      }

      let shadowListboxes = Array.from(
        shadowRoot?.querySelectorAll('[role="listbox"]') || [],
      ).filter(isVisible)
      if (shadowListboxes.length > 0) {
        listbox = shadowListboxes[shadowListboxes.length - 1]
        break
      }

      let visibleListboxes = getVisibleListboxes()
      let newListboxes = visibleListboxes.filter(
        (node) => !knownListboxes.has(node),
      )
      if (newListboxes.length > 0) {
        listbox = newListboxes[newListboxes.length - 1]
        break
      }
      if (visibleListboxes.length > 0) {
        listbox = visibleListboxes[visibleListboxes.length - 1]
        break
      }
    }

    if (!listbox) {
      let menus = Array.from(
        document.querySelectorAll("menu[role='menu'], ul[role='menu']"),
      )
      let visibleMenus = menus.filter(
        (menu) =>
          menu.offsetParent !== null && menu.style.display !== "none",
      )
      if (visibleMenus.length > 0) {
        listbox = visibleMenus[visibleMenus.length - 1]
      }
    }

    if (!listbox) return false

    let isSelectionCommitted = () => {
      let triggerValue =
        "value" in trigger ? (trigger.value || "").trim() : ""
      let triggerAriaLabel = (trigger.getAttribute("aria-label") || "").trim()
      let triggerText = (trigger.textContent || "").trim()
      let selectAriaLabel = (
        sdfSelect.getAttribute("aria-label") || ""
      ).trim()
      let selectText = (sdfSelect.textContent || "").trim()
      let candidates = [
        triggerValue,
        triggerAriaLabel,
        triggerText,
        selectAriaLabel,
        selectText,
      ]
      if (candidates.some((candidate) => candidate && matcher(candidate))) {
        return true
      }

      let activeId =
        trigger.getAttribute("aria-activedescendant") ||
        sdfSelect.getAttribute("aria-activedescendant")
      if (!activeId) return false
      let activeItem =
        shadowRoot?.querySelector(`[id="${activeId}"]`) ||
        document.getElementById(activeId)
      return !!activeItem && itemMatches(activeItem)
    }

    let items = listbox.querySelectorAll(
      "sdf-select-item, li[role='menuitem'], li[role='option'], [role='menuitem'], [role='option']",
    )
    for (let item of items) {
      let node = item
      if (
        isVisible(node) &&
        itemMatches(node) &&
        (await delay.delay(50),
        node.isConnected && node.click(),
        await delay.delay(200),
        isSelectionCommitted())
      ) {
        return true
      }
    }
    return false
  } catch {
    return false
  }
}

async function fillSelectField(el, value, matcher) {
  let optionMatcher = matcher ?? ((text) => answer.isMatched(text, value))
  try {
    if (el instanceof HTMLSelectElement) {
      return fillNativeSelect(
        el,
        matcher ??
          ((text, optionValue) =>
            answer.isMatched(text, value) ||
            (!!optionValue && answer.isMatched(optionValue, value))),
      )
    }
    if (isSelectValueMatched(el, optionMatcher)) return true

    let sdfSelect = el.closest("sdf-select-simple")
    if (sdfSelect) return await fillSdfSelectSimple(sdfSelect, optionMatcher, !!matcher)

    let options = await getSelectOptionsElement(el, false)
    if (!options || options.length === 0) return false

    for (let option of options) {
      let text = option.textContent?.trim()
      if (!text) continue
      let optionValue =
        option.getAttribute("value") || option.getAttribute("aria-label") || ""
      if (optionMatcher(text, optionValue) && option.isConnected) {
        try {
          return (
            option.dispatchEvent(
              new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                view: window,
              }),
            ),
            option.click(),
            await delay.delay(200),
            true
          )
        } catch {
          continue
        }
      }
    }
    return false
  } catch {
    return false
  } finally {
    try {
      await closeSelectDropdown(el)
    } catch {
    }
  }
}

async function waitForCountrySelection(el, matcher) {
  let observeTarget =
    el.closest(".mdf-validated-field, sdf-select-simple") || el
  return observer.waitForCondition(() => isSelectValueMatched(el, matcher), {
    timeout: 3e3,
    interval: 100,
    observeTarget,
  })
}

export async function fillCountry(el, countryValue) {
  if (!countryValue?.trim()) return false
  let matcher = (text, optionValue) =>
    adpCountry.isAdpCountryOptionMatch(countryValue, text, optionValue)
  if (isSelectValueMatched(el, matcher)) return true
  let selected = await fillSelectField(el, countryValue, matcher)
  return !!selected && waitForCountrySelection(el, matcher)
}

export async function prefillCountry(countryValue) {
  if (!countryValue?.trim()) return false
  let filledAny = false
  for (let field of Array.from(
    document.querySelectorAll(".mdf-validated-field"),
  )) {
    let labelEl = field.querySelector(".mdf-label label")
    let label = normalizeMatchText(
      labelEl?.textContent?.replace(/\*+/g, ""),
    )
    if (label !== "country") continue

    let forId = labelEl?.getAttribute("for")
    let input =
      (forId ? document.getElementById(forId) : null) ||
      field.querySelector('[role="combobox"], input.MDFSelectBox__input')
    if (input?.isConnected) {
      filledAny = (await fillCountry(input, countryValue)) || filledAny
    }
  }
  return filledAny
}

export async function preselectDesiredSalaryControls() {
  let questions = Array.from(
    document.querySelectorAll(".additional-question"),
  ).filter((node) =>
    normalizeMatchText(node.textContent).includes(
      "what is your desired salary",
    ),
  )

  for (let question of questions) {
    Array.from(question.querySelectorAll("sdf-radio-button"))
      .find((radio) => {
        let text =
          radio.getAttribute("label") ||
          radio.getAttribute("value") ||
          radio.textContent
        return normalizeMatchText(text) === "annually"
      })
      ?.click()

    let currencySelect = Array.from(
      question.querySelectorAll("sdf-select-simple"),
    ).find((select) =>
      normalizeMatchText(
        select.getAttribute("aria-label") ||
          select.getAttribute("label") ||
          select.textContent,
      ).includes("currency"),
    )
    if (currencySelect) {
      await fillSelectField(currencySelect, "United States Dollar ( USD )")
    }
  }
}

async function fillTableSelect(table, value) {
  if (!table) return null
  let tableId = table.getAttribute("id")
  dom.triggerEvents(table, ["mousedown"])
  await delay.delay(100)

  let optionNodes = xpath.getOrderedNodesSafe(
    `.//table[@aria-labelledby="${tableId}"]/tbody/tr/td[contains(@class, "dijitMenuItemLabel")]/span[@class="label"]`,
    document,
  )
  for (let option of optionNodes) {
    let text = option.textContent?.trim()
    if (answer.isMatched(text, value)) {
      dom.triggerEvents(option, ["click"])
      break
    }
  }
}

export async function fillCustomSelectField(el, values) {
  let value = Array.isArray(values) ? values[0] : values
  return el?.tagName === "TABLE"
    ? fillTableSelect(el, value)
    : fillSelectField(el, value)
}

export async function uploadResume(answerData, fileName, mimeType) {
  let { container, input } = getResumeUploadDom()
  return (
    !!container &&
    !!input &&
    (await dom.uploadFiles(
      input,
      await answer.fetchPdfAsBlob(answerData),
      fileName,
      mimeType,
      "Resume/CV",
    ),
    true)
  )
}

export async function uploadCoverLetter(answerData, fileName, mimeType) {
  let { container, input, deleteButton } = getCoverLetterUploadDom()
  if (!container || !input) return false

  if (hasCoverLetterUploaded()) {
    if (!deleteButton) return false
    deleteButton.click()
    let cleared = await observer.waitForCondition(
      () => !hasCoverLetterUploaded(),
      { timeout: 5e3, interval: 100, observeTarget: container },
    )
    if (!cleared) return false
  }

  await dom.uploadFiles(
    input,
    await answer.fetchCoverLetterPdfAsBlob(answerData),
    fileName,
    mimeType,
    "Cover Letter",
  )

  let expectedFileName = `${answerData.coverLetterName}.pdf`.toLowerCase()
  let uploaded = await observer.waitForCondition(
    () => {
      let currentName = getCoverLetterUploadedFileName().toLowerCase()
      if (
        currentName &&
        (currentName.includes(answerData.coverLetterName.toLowerCase()) ||
          currentName.includes(expectedFileName))
      ) {
        return true
      }
      let { uploadedValue } = getCoverLetterUploadDom()
      let successAlert = uploadedValue?.querySelector(
        'sdf-alert[status="success"]',
      )
      return !!successAlert
    },
    { timeout: 8e3, interval: 100, observeTarget: container },
  )
  return uploaded
}

export async function preclickAddButtons() {
  let clearProfile = xpath.getFirstOrderedNode(
    './/a[@aria-label="Clear Profile" and (not(@aria-disabled) or @aria-disabled != "true")]',
  )
  if (clearProfile) clearProfile.click()

  let addEducation = xpath.getFirstOrderedNode(
    ".//*[@data-ui='add-section' and @aria-label='Add Education']",
    xpath.getFirstOrderedNode("//*[@data-ui='education']"),
  )
  if (addEducation) {
    addEducation.click()
    await delay.delay(100)
  }

  let addExperience = xpath.getFirstOrderedNode(
    ".//*[@data-ui='add-section' and @aria-label='Add Experience']",
    xpath.getFirstOrderedNode("//*[@data-ui='experience']"),
  )
  if (addExperience) {
    addExperience.click()
    await delay.delay(100)
  }
}

async function waitForElement(getter, attempts) {
  for (let i = 0; i < attempts; i++) {
    let found = getter()
    if (found) return found
    await delay.delay(100)
  }
  return null
}

async function selectDisabilityDeclineOption() {
  let block = await waitForElement(
    () => document.querySelector(".vsid-status-question-block"),
    30,
  )
  let radioGroup = await waitForElement(
    () => block?.querySelector("sdf-radio-group") ?? null,
    30,
  )
  if (!radioGroup) return

  await delay.delay(200)
  let radios = Array.from(radioGroup.querySelectorAll("sdf-radio-button"))
  let decline =
    radios.find((radio) => {
      let label = radio.getAttribute("label")?.toLowerCase() ?? ""
      let value = radio.getAttribute("value") ?? ""
      return (
        label.includes("don't wish") ||
        label.includes("decline") ||
        value === "D"
      )
    }) ?? null

  if (decline?.isConnected) {
    decline.click()
    await delay.delay(100)
  }
}

export async function fillDisabilityStatusIfPresent() {
  let checkbox = document.querySelector(
    '#disabilityStatusCheck input[type="checkbox"], input[name="disabilityStatusCheck"][type="checkbox"]',
  )
  if (checkbox && !checkbox.checked) {
    checkbox.checked = true
    checkbox.dispatchEvent(
      new Event("click", { bubbles: true, cancelable: true }),
    )
    checkbox.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: true }),
    )
    checkbox
      .closest('[role="checkbox"], .vdl-checkbox')
      ?.dispatchEvent(
        new Event("click", { bubbles: true, cancelable: true }),
      )
    await delay.delay(300)
    await selectDisabilityDeclineOption()
  }
}

export async function fillRadioGroupField(rule, values) {
  let answerValue = values?.[0]
  if (!answerValue) return

  let radioRule = rule
  if (radioRule.$radios && radioRule.$radios.length > 0) {
    let matched = choiceMatch.findExactChoice(
      radioRule.$radios,
      answerValue,
      (radio) => radio.closest("label")?.textContent,
      (radio) => radio.value,
    )
    for (let radio of matched ? [matched] : []) {
      let label = radio.closest("label")?.textContent?.trim() || ""
      let value = radio.value || ""
      let isMatch =
        choiceMatch.isExactChoiceMatch(
          label.toLowerCase(),
          answerValue.toLowerCase(),
        ) ||
        choiceMatch.isExactChoiceMatch(
          value.toLowerCase(),
          answerValue.toLowerCase(),
        )
      if (isMatch && !radio.checked) {
        await delay.delay(50)
        if (radio.isConnected) radio.click()
        await delay.delay(100)
        return
      }
    }
  }

  let parent = rule.$radioParent || document
  let sdfRadios = Array.from(parent.querySelectorAll("sdf-radio-button"))
  let matchedSdf = choiceMatch.findExactChoice(
    sdfRadios,
    answerValue,
    (radio) => radio.getAttribute("label"),
    (radio) => radio.getAttribute("value"),
  )
  for (let radio of matchedSdf ? [matchedSdf] : []) {
    let label = radio.getAttribute("label") || ""
    let value = radio.getAttribute("value") || ""
    let isMatch =
      choiceMatch.isExactChoiceMatch(
        label.toLowerCase(),
        answerValue.toLowerCase(),
      ) ||
      choiceMatch.isExactChoiceMatch(
        value.toLowerCase(),
        answerValue.toLowerCase(),
      )
    if (isMatch) {
      let alreadyChecked = radio.getAttribute("aria-checked") === "true"
      if (alreadyChecked) return
      await delay.delay(50)
      if (radio.isConnected) radio.click()
      await delay.delay(100)
      let nativeRadio = radio.querySelector('input[type="radio"]')
      if (nativeRadio && !nativeRadio.checked) {
        nativeRadio.click()
        await delay.delay(50)
      }
      return
    }
  }
}

export function submitObserver(enabled) {
  if (enabled) {
    enabled.parentNode
    let mutationObserver = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (
            node?.getAttribute?.("data-ui") === "successful-submit" ||
            node?.querySelectorAll("[data-ui='successful-submit']").length >
              0
          ) {
            mutationObserver.disconnect()
            window.top?.postMessage(
              stringUtils.cleanObject({
                type: enums.MESSAGE_EVENTS.agentSubmitClicked,
              }),
              { targetOrigin: "*" },
            )
          }
        }
      }
    })
    mutationObserver.observe(document.getElementById("app"), {
      childList: true,
      subtree: true,
    })
  }
}
