// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/hooks/useShowContinue.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { useEffect, useState } from "react"
import { getTargetName } from "../contents/crawler/target.js"
import { getDayforceAuthPageMode } from "../contents/sites/dayforce/auth.ts"
import { getDayforceRegistrationNextTarget } from "../contents/sites/dayforce/navigation.ts"
import { getCurrentAdvanceButton as getWalmartAdvanceButton } from "../contents/sites/walmart.ts"
import {
  ADP_MYJOBS_ADVANCE_BUTTON_SELECTOR,
  ADP_WORKFORCENOW_RECAPTCHA_CONTINUE_BUTTON_SELECTOR,
  isAdpMyJobsAdvanceButton,
  isJobdivaAdvanceButton,
  isPaycomOnlineAdvanceButton,
  isSmartRecruitersAdvanceButton,
  JOBDIVA_ADVANCE_BUTTON_SELECTOR,
  JOBVITE_ADVANCE_BUTTON_SELECTOR,
  PAYCOMONLINE_ADVANCE_BUTTON_SELECTOR,
  RIPPLEHIRE_ADVANCE_BUTTON_SELECTOR,
  SMARTRECRUITERS_ADVANCE_BUTTON_SELECTOR,
  TALEO_CLASSIC_SAVE_AND_CONTINUE_SELECTOR,
  TALEO_CWS_V2_NEXT_BUTTON_SELECTOR,
} from "../core/pagenation.js"
import { default as useShowSubmitted } from "./useShowSubmitted.js"
import {
  shouldRunContinueVisibilityMonitor,
  shouldShowNavigationAfterAutofill,
  shouldShowWalmartContinueButton,
} from "./useShowContinueState.js"
import { createSingleFlightScheduler } from "../core/observer-scheduler.js"
import { useAutofillResultStore } from "../store/autofillResult.ts"
import { useUrlStore } from "../store/url.ts"
import { getWorkdayNextPageButtonTarget } from "../components/NextPageButton/navigation-state.js"

const SUPPORTED_CONTINUE_TARGETS = [
  "myworkday",
  "phenom",
  "adobe",
  "tesla",
  "amazon",
  "apple",
  "adpRecruiting",
  "adpWorkforceNow",
  "adpMyJobs",
  "oraclecloud",
  "successfactors",
  "hrmdirect",
  "paylocity",
  "icims",
  "google",
  "cisco",
  "isolved",
  "brassring",
  "jacobs",
  "jobdiva",
  "walmart",
  "jobvite",
  "dayforce",
  "smartrecruiters",
  "paycomonline",
  "ripplehire",
  "taleo",
]

const SUCCESSFACTORS_ADVANCE_BUTTON_SELECTOR =
  'button[title="Next"][name="Next"][type="button"], button[type="submit"][value="apply"], span[role="button"][id*="_submitBtn"], span[role="button"].rcmSaveButton'

function isElementVisible(element) {
  if (!(element instanceof HTMLElement)) return false
  const hasCheckVisibility = typeof element.checkVisibility === "function"
  return hasCheckVisibility
    ? element.checkVisibility() ?? false
    : !!element.offsetParent
}

function getAdpRecruitingContinueVisible() {
  const pagerNext = document.querySelector(
    '[data-dojo-attach-point="thePagerDualNext"], [data-dojo-attach-point="thePagerNext"]',
  )
  if (isElementVisible(pagerNext)) return true
  const submitButton = Array.from(
    document.querySelectorAll(
      'button, input[type="submit"], input[type="button"], [role="button"]',
    ),
  ).find((element) => {
    if (!isElementVisible(element)) return false
    const label = (
      element.textContent ||
      element.getAttribute("value") ||
      element.getAttribute("aria-label") ||
      ""
    )
      .trim()
      .toLowerCase()
    return label.includes("submit application") || label === "submit"
  })
  return !!submitButton
}

function getAdpWorkforceNowContinueVisible() {
  const footerNext = document.getElementById("ja_sv_cw_next_footer_btn")
  if (isElementVisible(footerNext)) return true
  const recaptchaContinue = document.querySelector(
    ADP_WORKFORCENOW_RECAPTCHA_CONTINUE_BUTTON_SELECTOR,
  )
  if (isElementVisible(recaptchaContinue)) return true
  const submitButton = Array.from(
    document.querySelectorAll(
      'button, input[type="submit"], input[type="button"], [role="button"]',
    ),
  ).find((element) => {
    if (!isElementVisible(element)) return false
    const label = (
      element.textContent ||
      element.getAttribute("value") ||
      element.getAttribute("aria-label") ||
      ""
    )
      .trim()
      .toLowerCase()
    return label.includes("submit")
  })
  return !!submitButton
}

function getAdpMyJobsContinueVisible() {
  return Array.from(
    document.querySelectorAll(ADP_MYJOBS_ADVANCE_BUTTON_SELECTOR),
  ).some(
    (element) =>
      isElementVisible(element) && isAdpMyJobsAdvanceButton(element),
  )
}

function getAppleContinueVisible(currentTabUrl) {
  const continueButton = document.getElementById("apply-step-continue-button")
  const progressLabel =
    document
      .querySelector(
        'li.apply-progress-step[aria-current="step"] .apply-progress-label span',
      )
      ?.textContent?.trim()
      .toLowerCase() || ""
  const isReviewInfoStep = currentTabUrl?.includes("stepName=reviewinfo")
  const isReviewSubmitLabel =
    progressLabel.includes("review") && progressLabel.includes("submit")
  return !!continueButton || !!isReviewInfoStep || isReviewSubmitLabel
}

function getDefaultContinueVisible(submitted) {
  const activeStepLabel = document.querySelector(
    '[data-automation-id="progressBar"] [data-automation-id="progressBarActiveStep"] label:last-of-type',
  )
  const labelText = activeStepLabel?.textContent?.trim().toLowerCase()
  return labelText === "review" || submitted
}

function getWorkdayContinueVisible() {
  return !!getWorkdayNextPageButtonTarget(document)
}

function getPhenomContinueVisible() {
  const nextButton = document.querySelector(
    'form.rjsf #next, form.rjsf button#next, form.rjsf button[aria-label="Continue"], form.rjsf button[type="submit"], form.rjsf input[type="submit"]',
  )
  if (!isElementVisible(nextButton)) return false
  const label = (
    nextButton?.textContent ||
    nextButton?.getAttribute("value") ||
    nextButton?.getAttribute("aria-label") ||
    ""
  )
    .trim()
    .toLowerCase()
  return (
    label.includes("continue") ||
    label.includes("submit") ||
    label.includes("apply")
  )
}

function getOracleCloudContinueVisible() {
  const buttons = Array.from(
    document.querySelectorAll('button, [role="button"]'),
  )
  return buttons.some((element) => {
    if (!isElementVisible(element) || element.closest("#jobright-helper-id")) {
      return false
    }
    const label = (
      element.textContent ||
      element.getAttribute("value") ||
      element.getAttribute("aria-label") ||
      ""
    )
      .trim()
      .toLowerCase()
    const automationId = element.getAttribute("data-automation-id")
    return (
      label === "next" ||
      label === "submit" ||
      label === "apply" ||
      label.includes("next") ||
      label.includes("submit") ||
      automationId === "pageFooterNextButton" ||
      automationId === "bottom-navigation-next-button"
    )
  })
}

function getCiscoContinueVisible() {
  const nextButton = document.querySelector(
    'button#next, button[atm-id="submit-button"]',
  )
  if (!isElementVisible(nextButton)) return false
  const label = (
    nextButton?.textContent ||
    nextButton?.getAttribute("value") ||
    nextButton?.getAttribute("aria-label") ||
    ""
  )
    .trim()
    .toLowerCase()
  return (
    label.includes("next") ||
    label.includes("continue") ||
    label.includes("submit") ||
    label.includes("apply")
  )
}

function getBrassringContinueVisible() {
  const buttons = document.querySelectorAll(
    "button#showstart:not([disabled]), button#shownext:not([disabled]), button[ng-click*='goStart']:not([disabled]), button[ng-click*='goNext']:not([disabled]), button[id*='submit'], button[ng-click*='submit'], button[type='submit'], input[type='submit']",
  )
  return Array.from(buttons).some((element) => isElementVisible(element))
}

function getJobdivaContinueVisible() {
  return Array.from(
    document.querySelectorAll(JOBDIVA_ADVANCE_BUTTON_SELECTOR),
  ).some(
    (element) =>
      isElementVisible(element) && isJobdivaAdvanceButton(element),
  )
}

let lastJobviteContinueDebugKey = ""

function getJobviteContinueVisible() {
  const matched = Array.from(
    document.querySelectorAll(JOBVITE_ADVANCE_BUTTON_SELECTOR),
  )
  const visible = matched.filter((element) => isElementVisible(element))
  const iframes = Array.from(document.querySelectorAll("iframe"))
  const debugKey = `${matched.length}:${visible.length}:${iframes.length}`
  if (debugKey !== lastJobviteContinueDebugKey) {
    lastJobviteContinueDebugKey = debugKey
    console.log("[jobvite-debug] getJobviteContinueVisible", {
      selector: JOBVITE_ADVANCE_BUTTON_SELECTOR,
      matchedCount: matched.length,
      visibleCount: visible.length,
      matched: matched.slice(0, 5).map((element) => ({
        tag: element.tagName,
        type: element.getAttribute("type"),
        ngClick: element.getAttribute("ng-click"),
        ariaLabel: element.getAttribute("aria-label"),
        classes: element.className,
        ngHide: element.classList.contains("ng-hide"),
        offsetParent: !!element.offsetParent,
        visible: isElementVisible(element),
      })),
      hasJvApplyContainer: !!document.querySelector(".jv-apply-form-actions"),
      iframeCount: iframes.length,
      jobviteIframeSrcs: iframes
        .map((iframe) => iframe.src)
        .filter((src) => src.includes("jobvite")),
      inIframe: window.self !== window.top,
      href: window.location.href,
    })
  }
  return visible.length > 0
}

function getJacobsContinueVisible() {
  const saveButton = document.querySelector(
    'button[id="1578-save"].saveButton[name="save"][type="submit"], button[id="1578-save"].tc_formButton[type="submit"], form.tpt_wizard button.saveButton[type="submit"], form.tpt_wizard button[id$="-save"][type="submit"], form.tpt_wizard button[type="submit"]',
  )
  return isElementVisible(saveButton)
}

function getWalmartContinueVisible() {
  return !!getWalmartAdvanceButton()
}

function getPaylocityContinueVisible() {
  const nextButton = document.querySelector(
    'button#btn-submit[data-automation-id="btnNext"]',
  )
  return (
    nextButton instanceof HTMLButtonElement &&
    !nextButton.disabled &&
    isElementVisible(nextButton)
  )
}

function getDayforceContinueVisible() {
  if (getDayforceAuthPageMode()) {
    return !!getDayforceRegistrationNextTarget()
  }
  return Array.from(
    document.querySelectorAll(
      'button[test-id="application-next-step"], button[test-id="application-submit"]',
    ),
  ).some((element) => isElementVisible(element))
}

function getTaleoContinueVisible() {
  const hasCwsV2Next = Array.from(
    document.querySelectorAll(TALEO_CWS_V2_NEXT_BUTTON_SELECTOR),
  ).some(
    (element) =>
      isElementVisible(element) &&
      !element.closest("#jobright-helper-id") &&
      element.getAttribute("aria-disabled") !== "true",
  )
  return (
    !!hasCwsV2Next ||
    Array.from(
      document.querySelectorAll(TALEO_CLASSIC_SAVE_AND_CONTINUE_SELECTOR),
    ).some(
      (element) =>
        isElementVisible(element) &&
        !element.closest("#jobright-helper-id") &&
        !element.disabled,
    )
  )
}

function getSmartRecruitersContinueVisible() {
  return Array.from(
    document.querySelectorAll(SMARTRECRUITERS_ADVANCE_BUTTON_SELECTOR),
  ).some(
    (element) =>
      isElementVisible(element) && isSmartRecruitersAdvanceButton(element),
  )
}

function getPaycomOnlineContinueVisible() {
  return Array.from(
    document.querySelectorAll(PAYCOMONLINE_ADVANCE_BUTTON_SELECTOR),
  ).some(
    (element) =>
      isElementVisible(element) &&
      !element.closest("#jobright-helper-id") &&
      isPaycomOnlineAdvanceButton(element),
  )
}

function getSuccessFactorsContinueVisible() {
  return Array.from(
    document.querySelectorAll(SUCCESSFACTORS_ADVANCE_BUTTON_SELECTOR),
  ).some((element) => {
    if (!isElementVisible(element)) return false
    const id = element.getAttribute("id") ?? ""
    const name = element.getAttribute("name")?.trim().toLowerCase() ?? ""
    const title = element.getAttribute("title")?.trim().toLowerCase() ?? ""
    const value = element.getAttribute("value")?.trim().toLowerCase() ?? ""
    const text = element.textContent?.trim().toLowerCase() ?? ""
    return (
      (name === "next" && title === "next") ||
      id.includes("_submitBtn") ||
      value === "apply" ||
      text.includes("apply")
    )
  })
}

let lastRippleHireContinueDebugKey = ""

function getRippleHireContinueVisible() {
  const advanceButton = document.querySelector(
    RIPPLEHIRE_ADVANCE_BUTTON_SELECTOR,
  )
  const text = (advanceButton?.textContent || "")
    .replace(/\s+/g, " ")
    .trim()
  const textLower = text.toLowerCase()
  const visible = isElementVisible(advanceButton)
  const isAdvanceButton =
    textLower === "continue" || textLower === "submit application"
  const debugKey = `${!!advanceButton}:${visible}:${textLower}`
  if (debugKey !== lastRippleHireContinueDebugKey) {
    lastRippleHireContinueDebugKey = debugKey
    console.log("[RippleHire] sidebar navigation visibility", {
      selector: RIPPLEHIRE_ADVANCE_BUTTON_SELECTOR,
      matched: !!advanceButton,
      visible,
      text,
      isAdvanceButton,
    })
  }
  return visible && isAdvanceButton
}

export default function useShowContinue() {
  const targetName = getTargetName()
  const hasAutoFillResult = useAutofillResultStore(
    (state) => !!state.autoFillResult,
  )
  const isFilling = useAutofillResultStore((state) => state.isFilling)
  const hasClickedAutoFill = useAutofillResultStore(
    (state) => state.hasClickedAutoFill,
  )
  const currentTabUrl = useUrlStore((state) => state.currentTabUrl)
  const submitted = useShowSubmitted()
  const [continueVisible, setContinueVisible] = useState(false)

  useEffect(() => {
    const isSupported = SUPPORTED_CONTINUE_TARGETS.includes(targetName)
    if (
      !shouldRunContinueVisibilityMonitor({
        isSupported,
        isFilling,
      })
    ) {
      if (!isSupported) {
        setContinueVisible(false)
      }
      return
    }

    if (targetName === "jobvite") {
      console.log("[jobvite-debug] useShowContinue mounted", {
        targetName,
        href: window.location.href,
        hostname: window.location.hostname,
        hasAutoFillResult,
        submitted,
        inIframe: window.self !== window.top,
      })
    }

    const updateContinueVisibility = () => {
      if (targetName === "apple") {
        setContinueVisible(getAppleContinueVisible(currentTabUrl))
        return
      }
      if (targetName === "adpRecruiting") {
        setContinueVisible(getAdpRecruitingContinueVisible())
        return
      }
      if (targetName === "adpWorkforceNow") {
        setContinueVisible(getAdpWorkforceNowContinueVisible())
        return
      }
      if (targetName === "adpMyJobs") {
        setContinueVisible(getAdpMyJobsContinueVisible())
        return
      }
      if (targetName === "phenom") {
        setContinueVisible(getPhenomContinueVisible())
        return
      }
      if (targetName === "oraclecloud") {
        setContinueVisible(getOracleCloudContinueVisible())
        return
      }
      if (targetName === "cisco") {
        setContinueVisible(getCiscoContinueVisible())
        return
      }
      if (targetName === "brassring") {
        setContinueVisible(getBrassringContinueVisible())
        return
      }
      if (targetName === "jobdiva") {
        setContinueVisible(getJobdivaContinueVisible())
        return
      }
      if (targetName === "jobvite") {
        const visible = getJobviteContinueVisible()
        setContinueVisible(visible)
        return
      }
      if (targetName === "jacobs") {
        setContinueVisible(getJacobsContinueVisible())
        return
      }
      if (targetName === "walmart") {
        setContinueVisible(getWalmartContinueVisible())
        return
      }
      if (targetName === "myworkday") {
        setContinueVisible(getWorkdayContinueVisible())
        return
      }
      if (targetName === "paylocity") {
        setContinueVisible(getPaylocityContinueVisible())
        return
      }
      if (targetName === "dayforce") {
        setContinueVisible(getDayforceContinueVisible())
        return
      }
      if (targetName === "taleo") {
        setContinueVisible(getTaleoContinueVisible())
        return
      }
      if (targetName === "smartrecruiters") {
        setContinueVisible(getSmartRecruitersContinueVisible())
        return
      }
      if (targetName === "paycomonline") {
        setContinueVisible(getPaycomOnlineContinueVisible())
        return
      }
      if (targetName === "successfactors") {
        setContinueVisible(getSuccessFactorsContinueVisible())
        return
      }
      if (targetName === "ripplehire") {
        setContinueVisible(getRippleHireContinueVisible())
        return
      }
      setContinueVisible(getDefaultContinueVisible(submitted))
    }

    updateContinueVisibility()

    const scheduler = createSingleFlightScheduler({
      run: updateContinueVisibility,
      schedule: (callback) => window.requestAnimationFrame(callback),
      cancel: (frameId) => window.cancelAnimationFrame(frameId),
    })
    const mutationObserver = new MutationObserver(scheduler.schedule)
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [
        "aria-disabled",
        "aria-hidden",
        "aria-label",
        "class",
        "data-automation-id",
        "data-testid",
        "disabled",
        "hidden",
        "name",
        "style",
        "title",
        "type",
        "value",
      ],
    })
    const pollIntervalId = window.setInterval(updateContinueVisibility, 800)
    return () => {
      mutationObserver.disconnect()
      scheduler.cancel()
      window.clearInterval(pollIntervalId)
    }
  }, [targetName, currentTabUrl, submitted, isFilling])

  return (
    !!SUPPORTED_CONTINUE_TARGETS.includes(targetName) &&
    (targetName === "apple" ||
    (targetName === "dayforce" && getDayforceAuthPageMode())
      ? continueVisible
      : targetName === "adpMyJobs" ||
          targetName === "brassring" ||
          targetName === "paylocity" ||
          targetName === "paycomonline" ||
          targetName === "successfactors" ||
          targetName === "smartrecruiters" ||
          targetName === "ripplehire"
        ? hasAutoFillResult && continueVisible
        : targetName === "walmart"
          ? shouldShowWalmartContinueButton(
              hasAutoFillResult,
              hasClickedAutoFill,
              continueVisible,
            )
          : targetName === "myworkday"
            ? shouldShowNavigationAfterAutofill(
                hasAutoFillResult,
                hasClickedAutoFill,
                continueVisible,
              )
            : !!hasAutoFillResult || continueVisible)
  )
}
