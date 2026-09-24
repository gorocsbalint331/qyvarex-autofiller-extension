// @ts-nocheck
/**
 * JobDiva — DOM fill operations (inputs, phone, resume, sections).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as filler from "../../shared/filler.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"
import * as jobdivaAnswer from "./answer.ts"
import * as registrationCard from "./registration-card.ts"

const getTargetOrTimeout = {
  default: getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}

const classContains = (className) =>
  `contains(concat(" ", normalize-space(@class), " "), " ${className} ")`

function normalizeLabelText(value) {
  return String(value ?? "")
    .replace(/[*\u2731]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export function findJobdivaDetailApplyButton(buttons, isVisible) {
  const matches = Array.from(buttons).filter((button) => {
    const text = (button.textContent || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
    return !button.disabled && isVisible(button) && text === "apply now"
  })
  return matches.length === 1 ? matches[0] : null
}

function isVisibleElement(element) {
  const style = window.getComputedStyle(element)
  return (
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    element.getClientRects().length > 0
  )
}

export async function preFillForm(root = document) {
  const applyButton = findJobdivaDetailApplyButton(
    root.querySelectorAll("button"),
    isVisibleElement,
  )
  if (applyButton) {
    console.debug("[jobdiva preFill] entering detail-page application", {
      text: applyButton.textContent?.trim(),
    })
    dispatchSafeClick(applyButton, {
      tag: "[jobdiva preFill]",
      actionLabel: "[detail-apply-now]",
    })
    await getTargetOrTimeout.default(
      () =>
        document.querySelector(
          ".job-app-main, .jd-form-layout, .jd-actioncard.jd-reg-introcard",
        ) || null,
      () => false,
      40,
    )
    await delay.delay(300)
    return
  }

  await delay.delay(300)
  const introCards = root.querySelectorAll(".jd-actioncard.jd-reg-introcard")
  const startWithResume = registrationCard.findJobdivaStartWithResumeCard(
    introCards,
    isVisibleElement,
  )
  console.debug("[jobdiva preFill] registration resume choice", {
    cardCount: introCards.length,
    foundStartWithResumeCard: !!startWithResume,
  })
  if (startWithResume) {
    dispatchSafeClick(startWithResume, {
      tag: "[jobdiva preFill]",
      actionLabel: "[start-with-resume]",
    })
    await getTargetOrTimeout.default(
      () =>
        document.querySelector(
          '.jd-form-layout input[type="file"], .jd-form-layout .jd-dropzone',
        ) || null,
      () => false,
      40,
    )
    await delay.delay(300)
    return
  }

  await expandCollapsedRegCards(root)
}

export async function fillInputTextField(input, value) {
  if (!input || (input instanceof HTMLInputElement && input.type === "password"))
    return

  input.focus()
  await delay.delay(80)

  const prototype =
    input instanceof HTMLInputElement
      ? window.HTMLInputElement.prototype
      : window.HTMLTextAreaElement.prototype
  const setter = Object.getOwnPropertyDescriptor(prototype, "value")?.set

  if (setter) setter.call(input, "")
  else input.value = ""
  input.dispatchEvent(new Event("input", { bubbles: true }))
  await delay.delay(50)

  if (setter) setter.call(input, value)
  else input.value = value
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  await delay.delay(80)
  input.blur()
  await delay.delay(50)
}

function isTextLikeInput(element) {
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLTextAreaElement
  )
}

async function fillDropdownSelect(container, value) {
  const toggle = xpath.getFirstOrderedNodeSafe(
    './/button[@data-bs-toggle="dropdown"]',
    container,
  )
  if (!toggle) return

  const expanded = toggle.getAttribute("aria-expanded") === "true"
  if (!expanded) {
    toggle.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    )
    await delay.delay(120)
  }

  const items = xpath.getOrderedNodesSafe(
    `.//div[${classContains("dropdown-menu")}]//*[${classContains("dropdown-item")}]`,
    container,
  )
  const match = choiceMatch.findExactChoice(
    items,
    value,
    (item) => item.textContent,
  )
  if (match) {
    match.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    )
    await delay.delay(120)
    return
  }

  toggle.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
  await delay.delay(80)
}

export async function fillSelectField(rule, value) {
  const input = rule.$input
  if (!input) return

  const raw = Array.isArray(value) ? value[0] : value
  const text = String(raw ?? "").trim()
  if (!text) return

  if (input instanceof HTMLSelectElement) {
    const option = choiceMatch.findExactChoice(
      Array.from(input.options),
      text,
      (item) => item.textContent,
      (item) => item.value,
    )
    if (option) {
      input.selectedIndex = Array.from(input.options).indexOf(option)
      input.dispatchEvent(new Event("input", { bubbles: true }))
      input.dispatchEvent(new Event("change", { bubbles: true }))
      await delay.delay(100)
    }
    return
  }

  if (
    input instanceof HTMLElement &&
    (input.classList.contains("jd-form-select") ||
      input.querySelector?.(".jd-form-select, .dropdown-menu"))
  ) {
    await fillDropdownSelect(input, text)
    return
  }

  if (input instanceof HTMLInputElement) await fillInputTextField(input, text)
}

export async function prefillCountry(root, country) {
  const text = String(country ?? "").trim()
  if (!text) return false

  const layout = Array.from(root.querySelectorAll(".jd-form-layout")).find(
    (node) => {
      const label = node.querySelector(":scope > label.jd-label")
      return normalizeLabelText(label?.textContent) === "country"
    },
  )
  const select = layout?.querySelector(".dropdown.jd-form-select")
  if (!select) return false

  const options = Array.from(
    select.querySelectorAll(".dropdown-menu .dropdown-item"),
  )
    .map((item) => String(item.textContent ?? "").trim())
    .filter(Boolean)
  const resolved = jobdivaAnswer.resolveJobdivaCountryOption(text, options)
  if (!resolved) return false

  await fillSelectField(
    {
      label: "Country",
      type: enums.FIELD_TYPE.SELECT,
      required: false,
      options: [],
      $input: select,
    },
    resolved,
  )

  const buttonText = normalizeLabelText(
    select.querySelector("button.jd-form")?.textContent,
  )
  return (
    buttonText === normalizeLabelText(resolved) &&
    (await delay.delay(300), true)
  )
}

export async function fillPhoneCountryField(rule, value) {
  if (!value) return
  const resolved =
    (/^\d+$/.test(value) &&
      Array.isArray(rule.options) &&
      rule.options[Number(value)]) ||
    value
  await fillSelectField(rule, resolved)
}

function resolvePhoneAnswer(label, regular) {
  let matched
  for (const key in regular) {
    if (answerMethods.isMatched(label, key)) {
      matched = regular[key]
      break
    }
  }
  if (matched == null || matched === "") {
    throw new filler.ValueError(`No matching field for label: ${label}`)
  }
  const phone = jobdivaAnswer.normalizeJobdivaPhoneValue(matched)
  if (!phone) {
    throw new filler.ValueError(`Invalid phone value for label: ${label}`)
  }
  return phone
}

export async function fillPhoneSectionField(
  rule,
  regular,
  onFilled,
  onMissed,
  reportProgress = true,
) {
  try {
    const phone = resolvePhoneAnswer(rule.label, regular)
    if (!phone.text) {
      throw new filler.ValueError(`Missing phone text for label: ${rule.label}`)
    }

    const children = rule.children || []
    const typeChild = children.find(
      (child) => child.label.toLowerCase() === "type",
    )
    const countryChild = children.find(
      (child) => child.label.toLowerCase() === "country",
    )
    const textChild = children.find(
      (child) => child.label.toLowerCase() === "text",
    )

    const typeValue =
      (typeChild &&
        /^\d+$/.test(phone.type) &&
        Array.isArray(typeChild.options) &&
        typeChild.options[Number(phone.type)]) ||
      phone.type

    if (typeChild && typeValue) await fillSelectField(typeChild, typeValue)
    if (countryChild && phone.country) {
      await fillPhoneCountryField(countryChild, phone.country)
    }
    if (textChild && phone.text) {
      if (!isTextLikeInput(textChild.$input)) {
        throw new filler.ValueError(
          `Invalid phone text input for label: ${rule.label}`,
        )
      }
      await fillInputTextField(textChild.$input, phone.text)
    }

    if (reportProgress) onFilled(rule.label)
  } catch (error) {
    if (!(error instanceof filler.ValueError)) {
      console.error("[jobdiva][phone section]", error)
    }
    if (reportProgress) onMissed(rule.label)
  }
}

export async function fillCheckboxField(rule, value) {
  const values = Array.isArray(value) ? value : [value]
  const checkboxes =
    rule.$checkboxs || (rule.$input ? [rule.$input] : [])

  const isTruthy = (item) =>
    item === true ||
    item === 1 ||
    String(item ?? "").toLowerCase() === "yes" ||
    String(item ?? "").toLowerCase() === "true"

  const normalizeOption = (item) =>
    String(item ?? "")
      .replace(/\u00a0/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase()

  const wanted = values.map(normalizeOption).filter(Boolean)

  const optionTextFor = (checkbox) => {
    const forLabel = checkbox.id
      ? normalizeOption(
          document.querySelector(`label[for="${checkbox.id}"]`)?.textContent ||
            "",
        )
      : ""
    const closestLabel = normalizeOption(
      checkbox.closest("label")?.textContent || "",
    )
    const ruleLabel = normalizeOption(rule.label || "")
    return forLabel || closestLabel || ruleLabel || normalizeOption(checkbox.value)
  }

  const matchesChoice = (optionText) =>
    wanted.some(
      (item) =>
        !isTruthy(item) && choiceMatch.isExactChoiceMatch(optionText, item),
    )

  if (checkboxes.length === 1) {
    const checkbox = checkboxes[0]
    const optionText = optionTextFor(checkbox)
    const shouldCheck =
      wanted.some((item) => isTruthy(item)) || matchesChoice(optionText)
    if (checkbox.checked !== shouldCheck) {
      checkbox.click()
      await delay.delay(100)
    }
    return
  }

  for (const checkbox of checkboxes) {
    const optionText = optionTextFor(checkbox)
    const shouldCheck = matchesChoice(optionText)
    if (shouldCheck && !checkbox.checked) {
      checkbox.click()
      await delay.delay(80)
    }
  }
}

export async function fillRadioGroupFiled(rule, value) {
  const text = String((Array.isArray(value) ? value[0] : value) ?? "").trim()
  if (!text) return

  const radios = rule.$radios
  const parent =
    rule.$radioParent || rule.$input?.parentElement || document
  const candidates =
    radios && radios.length > 0
      ? radios
      : Array.from(parent.querySelectorAll('input[type="radio"]'))

  const match = choiceMatch.findExactChoice(
    candidates.filter((radio) => !radio.disabled),
    text,
    (radio) => getRadioOptionText(radio),
    (radio) => radio.value,
  )
  if (match && !match.checked) {
    match.click()
    await delay.delay(80)
  }
}

function cleanRadioLabel(value) {
  return value
    .replace(/[*\u2731]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function getRadioOptionText(radio) {
  const forLabel = radio.id
    ? cleanRadioLabel(
        document.querySelector(`label[for="${radio.id}"]`)?.textContent || "",
      )
    : ""
  const closestLabel = cleanRadioLabel(
    radio.closest("label")?.textContent || "",
  )
  const siblingLabel = cleanRadioLabel(
    radio.nextElementSibling?.textContent || "",
  )
  const groupLabel = cleanRadioLabel(
    radio.closest(".radio-button")?.textContent || "",
  )
  return (
    forLabel ||
    closestLabel ||
    siblingLabel ||
    groupLabel ||
    cleanRadioLabel(radio.value)
  )
}

export async function uploadResume(
  root = document,
  resumeInfo,
  updateFieldRequiredStatus,
  updateFilledProgress,
) {
  const input = root.querySelector(
    'input[type="file"][accept*=".pdf"], input[type="file"][accept*="pdf"], input[type="file"]',
  )
  if (!input) return

  const blob = await answerMethods.fetchPdfAsBlob(resumeInfo)
  await dom.uploadFiles(
    input,
    blob,
    updateFieldRequiredStatus,
    updateFilledProgress,
    "Resume/CV",
  )
  await getTargetOrTimeout.default(
    () =>
      root.querySelector(
        '[class*="uploaded" i], [class*="file-name" i], [class*="resume-name" i]',
      ) || null,
    () => false,
    50,
  )
}

function queryAll(root, selector) {
  return Array.from(root.querySelectorAll(selector))
}

function queryExpandedCards(root, selector) {
  return queryAll(root, selector).filter((card) =>
    card.querySelector(".jd-form-layout"),
  )
}

function countExpandedCards(root, selector) {
  return queryExpandedCards(root, selector).length
}

function countEmploymentCards(root = document) {
  return countExpandedCards(root, ".jd-reg-card.id-reg-workexperience")
}

async function resolveSectionCount(root, selector, getCurrentCount) {
  return getCurrentCount
    ? await getCurrentCount()
    : countExpandedCards(root, selector)
}

export async function expandCollapsedRegCards(root = document) {
  const tag = "[jobdiva expandCollapsed]"
  const cards = Array.from(root.querySelectorAll(".jd-reg-card"))
  const collapsed = cards.filter(
    (card) => !card.querySelector(".jd-form-layout"),
  )
  for (const card of collapsed) {
    const trigger = resolveCollapsedCardTrigger(card)
    if (!trigger || trigger === card) {
      console.warn(`${tag} no trigger resolved for card`, card.className)
      continue
    }
    dispatchSafeClick(trigger, {
      tag,
      actionLabel: "[expand-collapsed]",
    })
    await delay.delay(400)
  }
}

function findAddEntryButton(root, keywords) {
  const buttons = Array.from(root.querySelectorAll(".jd-reg-entrybtn")).filter(
    (button) => {
      const text = (button.textContent || "").trim().toLowerCase()
      return !text.includes("remove")
    },
  )
  const includesKeywords = (text) =>
    keywords.some((keyword) => text.includes(keyword))

  return (
    buttons.find((button) => {
      const text = (button.textContent || "").trim().toLowerCase()
      return (
        text.includes("add") &&
        text.includes("another") &&
        includesKeywords(text)
      )
    }) ||
    buttons.find((button) => {
      const text = (button.textContent || "").trim().toLowerCase()
      return text.includes("add") && includesKeywords(text)
    }) ||
    null
  )
}

function findRemoveEntryButton(card) {
  const button = Array.from(card.querySelectorAll(".jd-reg-entrybtn")).find(
    (item) =>
      (item.textContent || "").trim().toLowerCase().includes("remove"),
  )
  return (
    button ||
    xpath.getFirstOrderedNodeSafe(
      ".//span[contains(normalize-space(text()), 'Remove Entry')]",
      card,
    ) ||
    null
  )
}

function firstMatchingXPath(root, expressions) {
  for (const expression of expressions) {
    const node = xpath.getFirstOrderedNodeSafe(expression, root)
    if (node) return node
  }
  return null
}

function dispatchClick(element) {
  element.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  )
}

function isUnsupportedReferenceTrigger(element) {
  const normalize = (value) =>
    (value || "").replace(/\s+/g, " ").trim().toLowerCase()
  const texts = [
    normalize(element.textContent),
    normalize(element.previousElementSibling?.textContent),
    normalize(element.parentElement?.textContent),
    normalize(element.parentElement?.previousElementSibling?.textContent),
  ]
  return texts.some((text) => text.includes("add a reference"))
}

function dispatchSafeClick(element, options) {
  if (!element) {
    console.warn(`${options.tag} ${options.actionLabel} target is null`)
    return null
  }
  const target = options.resolveClickTarget
    ? options.resolveClickTarget(element)
    : element
  if (isUnsupportedReferenceTrigger(target)) {
    console.warn(
      `${options.tag} ${options.actionLabel} skip unsupported reference trigger`,
      {
        tag: target.tagName,
        className: target.className,
        outerHTMLShort: target.outerHTML?.slice(0, 200),
      },
    )
    return null
  }
  dispatchClick(target)
  return target
}

function resolveCollapsedCardTrigger(card) {
  const sibling = xpath.getFirstOrderedNodeSafe(
    ".//span[contains(normalize-space(text()), 'Add a')]/following-sibling::span[1]",
    card,
  )
  return (
    sibling ||
    card.querySelector(
      'span[style*="cursor: pointer"], span[style*="margin-left: auto"]',
    ) ||
    card.querySelector("svg")?.parentElement ||
    card
  )
}

async function addRegCardSections(
  root,
  targetCount,
  cardSelector,
  keywords,
  options,
) {
  const tag = `[jobdiva addRegCardSections ${keywords.join("/")}]`
  let current = await resolveSectionCount(
    root,
    cardSelector,
    options?.getCurrentCount,
  )

  while (current > targetCount) {
    const cards = queryExpandedCards(root, cardSelector)
    const removeTarget = findRemoveEntryButton(cards[cards.length - 1])
    if (!removeTarget) {
      console.warn(`${tag} removeTarget is null, stop trimming`)
      break
    }
    dispatchSafeClick(removeTarget, {
      tag,
      actionLabel: "[trim-extra]",
    })
    await delay.delay(250)
    current = await resolveSectionCount(
      root,
      cardSelector,
      options?.getCurrentCount,
    )
  }

  if (targetCount <= 0) return

  let attempts = 0
  while (current < targetCount) {
    attempts += 1
    const isFirstEducation =
      current === 0 && keywords.includes("education")
    const isFirstEmployment =
      current === 0 &&
      (keywords.includes("employment") || keywords.includes("experience"))
    let addTarget = null

    if (isFirstEducation) {
      addTarget = firstMatchingXPath(root, [
        ".//span[contains(text(), 'Add a Education')]/following-sibling::span",
      ])
    } else if (isFirstEmployment) {
      addTarget = firstMatchingXPath(root, [
        ".//span[contains(text(), 'Add a Work Experience')]/following-sibling::span",
      ])
      if (!addTarget) addTarget = findAddEntryButton(root, keywords)
    } else if (current === 0) {
      addTarget =
        queryAll(root, cardSelector).find((card) => {
          if (card.querySelector(".jd-form-layout")) return false
          const text = (card.textContent || "").trim().toLowerCase()
          return (
            text.includes("add") &&
            keywords.some((keyword) => text.includes(keyword))
          )
        }) || null
    } else {
      const isEmployment =
        keywords.includes("employment") || keywords.includes("experience")
      addTarget =
        (isEmployment &&
          firstMatchingXPath(root, [
            ".//span[contains(normalize-space(text()), 'Add another work experience')]",
          ])) ||
        findAddEntryButton(root, keywords)
    }

    if (!addTarget) {
      console.warn(`${tag} addTarget is null, break`)
      break
    }

    const clicked = dispatchSafeClick(addTarget, {
      tag,
      actionLabel: "[add-section]",
      resolveClickTarget:
        isFirstEducation || current !== 0
          ? undefined
          : resolveCollapsedCardTrigger,
    })
    if (!clicked) break

    let poll = 0
    let increased = false
    while (poll < 20) {
      const next = await resolveSectionCount(
        root,
        cardSelector,
        options?.getCurrentCount,
      )
      if (next > current) {
        increased = true
        break
      }
      await delay.delay(100)
      poll += 1
    }

    const nextCurrent = await resolveSectionCount(
      root,
      cardSelector,
      options?.getCurrentCount,
    )
    if (nextCurrent <= current) {
      console.warn(
        `${tag} section count did not increase after add click`,
        {
          current,
          nextCurrent,
          count: targetCount,
        },
      )
      break
    }
    current = nextCurrent
  }

  await delay.delay(200)
}

export async function addEducationSection(count) {
  await addEducationSectionForRoot(document, count)
}

export async function addEducationSectionForRoot(root = document, count) {
  await addRegCardSections(root, count, ".jd-reg-card.id-reg-education", [
    "education",
  ])
}

export async function addEmploymentSection(count) {
  await addEmploymentSectionForRoot(document, count)
}

export async function addEmploymentSectionForRoot(root = document, count) {
  await addRegCardSections(
    root,
    count,
    ".jd-reg-card.id-reg-workexperience",
    ["employment", "experience", "work", "job"],
    { getCurrentCount: () => countEmploymentCards(root) },
  )
}
