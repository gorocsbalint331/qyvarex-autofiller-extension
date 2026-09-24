// @ts-nocheck
/**
 * Workday next/continue button detection and continue blockers.
 */

const WORKDAY_ACCOUNT_SUBMIT_TARGETS = [
  {
    selector:
      '[data-automation-id="click_filter"][aria-label="Reset Password"]',
    buttonText: "Reset Password",
  },
  {
    selector:
      '[data-automation-id="click_filter"][aria-label="Create Account"]',
    buttonText: "Create Account",
  },
  {
    selector: '[data-automation-id="click_filter"][aria-label="Sign In"]',
    buttonText: "Sign In",
  },
  {
    selector:
      '[data-automation-id="noCaptchaWrapper"] [data-automation-id="click_filter"][aria-label="Submit"]',
  },
  {
    selector: 'button[data-automation-id="createAccountSubmitButton"]',
    buttonText: "Create Account",
  },
  {
    selector: 'button[data-automation-id="signInSubmitButton"]',
    buttonText: "Sign In",
  },
  {
    selector: 'button[data-automation-id="resetPasswordButton"]',
    buttonText: "Reset Password",
  },
]

const WORKDAY_ACCOUNT_SUBMIT_REAL_BUTTON_SELECTOR =
  'button[data-automation-id="createAccountSubmitButton"], button[data-automation-id="signInSubmitButton"], button[data-automation-id="resetPasswordButton"]'

export const WORKDAY_ACCOUNT_SUBMIT_BUTTON_SELECTOR =
  WORKDAY_ACCOUNT_SUBMIT_TARGETS.map((target) => target.selector).join(", ")

export const WORKDAY_NAVIGATION_BUTTON_SELECTOR =
  'button[data-automation-id="pageFooterNextButton"], button[data-automation-id="bottom-navigation-next-button"]'

const EMPTY_LISTBOX_VALUES = new Set([
  "",
  "select one",
  "select",
  "please select",
  "not selected",
])

export function shouldDisableNextPageButton({
  isFilling,
  targetName,
  walmartCompositeDialogOpen,
}) {
  return isFilling || (targetName === "walmart" && walmartCompositeDialogOpen)
}

function getButtonLabelText(element) {
  return (
    element.innerText?.trim() ||
    element.textContent?.trim() ||
    element.getAttribute("value")?.trim() ||
    element.getAttribute("aria-label")?.trim() ||
    ""
  ).toLowerCase()
}

function resolveContinueOrSubmitType(element) {
  const text = getButtonLabelText(element)
  const ariaLabel =
    element.getAttribute("aria-label")?.trim().toLowerCase() ?? ""
  const isSubmit =
    text === "submit" ||
    text === "apply" ||
    text.includes("submit") ||
    ariaLabel === "submit" ||
    ariaLabel.includes("submit")
  return isSubmit ? "submit" : "continue"
}

function isElementVisible(element) {
  if (typeof element.checkVisibility === "function") {
    return !!element.checkVisibility()
  }
  return !!element.offsetParent
}

function normalizeWhitespace(value) {
  return (value ?? "").replace(/\s+/g, " ").trim()
}

function isEmptyListboxValue(element) {
  const text = normalizeWhitespace(
    element.innerText || element.textContent || element.getAttribute("value"),
  ).toLowerCase()
  return EMPTY_LISTBOX_VALUES.has(text)
}

function getListboxFieldLabel(element) {
  const field =
    element.closest('[data-automation-id^="formField-"]') ??
    element.closest("fieldset")
  const fieldText = normalizeWhitespace(field?.textContent)
  return fieldText || normalizeWhitespace(element.getAttribute("aria-label"))
}

function isRequiredListbox(element) {
  const ariaLabel = normalizeWhitespace(
    element.getAttribute("aria-label"),
  ).toLowerCase()
  if (ariaLabel.includes("required")) return true
  const field =
    element.closest('[data-automation-id^="formField-"]') ??
    element.closest("fieldset")
  return !!field?.querySelector?.(
    ".requiredAsterisk, abbr[title='required']",
  )
}

export function getUnfilledRequiredWorkdayListboxes(root) {
  return Array.from(
    root.querySelectorAll('button[aria-haspopup="listbox"][type="button"]'),
  )
    .filter(
      (element) =>
        isElementVisible(element) &&
        !element.closest("#jobright-helper-id") &&
        isRequiredListbox(element) &&
        (element.getAttribute("aria-invalid") === "true" ||
          isEmptyListboxValue(element)),
    )
    .map((element) => ({
      label: getListboxFieldLabel(element),
      text: normalizeWhitespace(element.innerText || element.textContent),
      value: normalizeWhitespace(element.getAttribute("value")),
    }))
}

export function hasUnfilledRequiredWorkdayListbox(root) {
  return getUnfilledRequiredWorkdayListboxes(root).length > 0
}

function getNativeValidationErrors(root) {
  return Array.from(
    root.querySelectorAll(
      'button, [role="alert"], [data-automation-id="errorMessage"]',
    ),
  )
    .filter((element) => {
      if (!isElementVisible(element) || element.closest("#jobright-helper-id")) {
        return false
      }
      const text = normalizeWhitespace(
        element.innerText || element.textContent,
      )
      return (
        /^Error[-:]/i.test(text) ||
        /The field .+ is required and must have a value/i.test(text)
      )
    })
    .map((element) => {
      const text = normalizeWhitespace(
        element.innerText || element.textContent,
      )
      return {
        reason: "native_validation_error",
        label: text.replace(/^Error[-:]/i, "").trim() || "Workday validation",
        text,
      }
    })
}

function hasCheckIconNear(element) {
  const candidates = [
    element.parentElement,
    element.parentElement?.parentElement,
    typeof element.closest === "function" ? element.closest("label") : null,
  ]
  return candidates.some((candidate) =>
    candidate?.querySelector?.(
      'svg[class*="wd-icon-check"], .wd-icon-check-small, .wd-icon-check',
    ),
  )
}

function isCheckboxChecked(element) {
  return (
    element.getAttribute("aria-checked") === "true" ||
    element.parentElement?.getAttribute("aria-checked") === "true" ||
    hasCheckIconNear(element)
  )
}

function getRequiredDisabilityStatusCheckboxes(root) {
  return Array.from(
    root.querySelectorAll(
      'input[type="checkbox"][id*="disabilityStatus"], input[type="checkbox"][name*="disabilityStatus"]',
    ),
  ).filter(
    (element) =>
      isElementVisible(element) &&
      !element.closest("#jobright-helper-id") &&
      element.getAttribute("aria-required") === "true",
  )
}

function getUnfilledSelfIdentifyCheckboxBlockers(root) {
  const checkboxes = getRequiredDisabilityStatusCheckboxes(root)
  if (checkboxes.length === 0) return []
  if (checkboxes.some(isCheckboxChecked)) return []
  return [
    {
      reason: "unfilled_self_identify_checkbox",
      label: "Please check one of the boxes below:",
    },
  ]
}

export function getWorkdayContinueBlockers(root) {
  const listboxBlockers = getUnfilledRequiredWorkdayListboxes(root).map(
    (item) => ({
      reason: "unfilled_required_listbox",
      label: item.label,
      text: item.text,
    }),
  )
  return [
    ...listboxBlockers,
    ...getNativeValidationErrors(root),
    ...getUnfilledSelfIdentifyCheckboxBlockers(root),
  ]
}

function queryVisibleButtons(root, selector) {
  return Array.from(root.querySelectorAll(selector)).filter(
    (element) =>
      isElementVisible(element) && !element.closest("#jobright-helper-id"),
  )
}

function resolveAccountSubmitButtonText({ element, target }) {
  if (target.buttonText) return target.buttonText
  const realButton = element
    .closest('[data-automation-id="noCaptchaWrapper"]')
    ?.querySelector(WORKDAY_ACCOUNT_SUBMIT_REAL_BUTTON_SELECTOR)
  const automationId = realButton?.getAttribute("data-automation-id")
  if (automationId === "createAccountSubmitButton") return "Create Account"
  if (automationId === "resetPasswordButton") return "Reset Password"
  return "Sign In"
}

function getWorkdayAccountSubmitTarget(root) {
  for (const target of WORKDAY_ACCOUNT_SUBMIT_TARGETS) {
    const element = queryVisibleButtons(root, target.selector)[0]
    if (!element) continue
    return {
      element,
      type: "continue",
      source: "workday_account_submit",
      buttonText: resolveAccountSubmitButtonText({ element, target }),
      suppressClickTracking: true,
    }
  }
  return null
}

export function getWorkdayNextPageButtonTarget(root) {
  const navigationButton = queryVisibleButtons(
    root,
    WORKDAY_NAVIGATION_BUTTON_SELECTOR,
  )[0]
  if (navigationButton) {
    return {
      element: navigationButton,
      type: resolveContinueOrSubmitType(navigationButton),
      source: "workday_navigation",
    }
  }
  return getWorkdayAccountSubmitTarget(root)
}

export function shouldTrackNextPageButtonClick({
  targetName,
  suppressClickTracking,
}) {
  return !(
    (targetName === "myworkday" || targetName === "dayforce") &&
    suppressClickTracking
  )
}

export function shouldClickNextPageButtonTarget({
  targetType,
  currentStation,
  source,
}) {
  return source === "workday_account_submit" || targetType === currentStation
}
