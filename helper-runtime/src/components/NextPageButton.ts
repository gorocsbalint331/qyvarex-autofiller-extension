// @ts-nocheck
/**
 * Continue / Submit dock button that proxies ATS page navigation.
 */

import { useEffect, useState } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { Typography } from "antd"
import clsx from "clsx"
import * as confirmSvg from "../assets/inline/images/confirm.svg.js"
import * as playSvg from "../assets/inline/images/play_b.svg.js"
import { getTargetName } from "../contents/crawler/target.js"
import { getDayforceAuthPageMode } from "../contents/sites/dayforce/auth.ts"
import { getDayforceRegistrationNextTarget } from "../contents/sites/dayforce/navigation.ts"
import * as googleSite from "../contents/sites/google.ts"
import * as walmartSite from "../contents/sites/walmart.ts"
import * as pagination from "../core/pagenation.ts"
import useShowSubmitted from "../hooks/useShowSubmitted.ts"
import Image from "../ui/Image.ts"
import { trackEvent } from "../utils/trace.ts"
import {
  WORKDAY_NAVIGATION_BUTTON_SELECTOR,
  getWorkdayNextPageButtonTarget,
  shouldClickNextPageButtonTarget,
  shouldDisableNextPageButton,
  shouldTrackNextPageButtonClick,
} from "./NextPageButton/navigation-state.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

const ICIMS_CONTINUE_REQUEST_TYPE = "jobright:icims:continue-request"
const SUCCESSFACTORS_NEXT_SELECTOR =
  'button[title="Next"][name="Next"][type="button"]'
const SUCCESSFACTORS_SUBMIT_SELECTOR =
  'button[type="submit"][value="apply"], span[role="button"][id*="_submitBtn"], span[role="button"].rcmSaveButton'
const SUCCESSFACTORS_SELECTOR = `${SUCCESSFACTORS_NEXT_SELECTOR}, ${SUCCESSFACTORS_SUBMIT_SELECTOR}`
const AMAZON_ADVANCE_SELECTOR =
  "button[data-direct-call-identifier], a#save-and-continue-form-button, a.btn.btn-primary.mt-5, button.btn.btn-primary, div.form-group.submit-button button, div.form-group.submit-button a"
const AMAZON_ACTIVE_FORM_SELECTOR =
  ".application-content .question-form.active, .question-form.active"

function trackNavigationClick(type) {
  trackEvent("autofill_navigation_button_click", {
    page_url: window.location.href,
    type,
    screen_type: window.innerHeight <= 840 ? "small" : "normal",
  })
}

function resolveDisplayedButtonText({ buttonStation, buttonTextOverride }) {
  if (buttonTextOverride) return buttonTextOverride
  return buttonStation === "continue"
    ? "Continue To The Next Page"
    : "Submit Application"
}

function isVisible(element) {
  if (!element) return false
  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility() ?? false
  }
  return !!element.offsetParent
}

function getLabelText(element) {
  return (
    element.innerText?.trim() ||
    element.textContent?.trim() ||
    element.getAttribute("value")?.trim() ||
    element.getAttribute("aria-label")?.trim() ||
    ""
  ).toLowerCase()
}

function resolveSubmitOrContinue(element) {
  const text = getLabelText(element)
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

function resolveIcimsButtonType(element) {
  const stepText = (
    element.ownerDocument?.querySelector(".iCIMS_PageStepText")?.textContent ??
    ""
  )
    .trim()
    .toLowerCase()
  if (stepText) {
    const isSubmitStep =
      stepText.includes("submit") ||
      stepText.includes("review") ||
      stepText.includes("complete") ||
      stepText.includes("confirmation") ||
      stepText.includes("finish")
    return isSubmitStep ? "submit" : "continue"
  }
  const value =
    element.value?.trim().toLowerCase() ||
    element.innerText?.trim().toLowerCase() ||
    ""
  const ariaLabel =
    element.getAttribute("aria-label")?.trim().toLowerCase() ?? ""
  const isSubmit =
    value === "submit" ||
    value === "apply" ||
    value.includes("submit") ||
    ariaLabel === "submit" ||
    ariaLabel.includes("submit")
  return isSubmit ? "submit" : "continue"
}

function resolveGoogleButtonType(element) {
  const text = (element.innerText ?? element.textContent ?? "")
    .trim()
    .toLowerCase()
  const ariaLabel = (element.getAttribute("aria-label") ?? "")
    .trim()
    .toLowerCase()
  if (text.includes("continue") || ariaLabel.includes("continue")) {
    return "continue"
  }
  if (text === "apply" || ariaLabel === "apply") return "submit"
  const isSubmit =
    text === "submit" ||
    text.includes("submit") ||
    ariaLabel === "submit" ||
    ariaLabel.includes("submit")
  return isSubmit ? "submit" : "continue"
}

function resolveJobdivaButtonType(element) {
  const text = getLabelText(element)
  if (text === "next" || text.includes("continue")) return "continue"
  if (
    text.includes("submit") ||
    text.includes("application") ||
    text === "save" ||
    element.closest(".job-app-btns")
  ) {
    return "submit"
  }
  const stepTitle = document.querySelector(".jd-reg-title span")
  const match = stepTitle?.textContent?.match(/Step\s+(\d+)\s+of\s+(\d+)/i)
  if (match) {
    const current = Number(match[1])
    const total = Number(match[2])
    if (Number.isFinite(current) && Number.isFinite(total) && current >= total) {
      return "submit"
    }
  }
  return "continue"
}

function resolveIsolvedButtonType(element) {
  const id = element.getAttribute("id")?.trim().toLowerCase()
  if (id === "apply" || id === "apply_button") return "continue"
  const text = getLabelText(element)
  const ariaLabel = (element.getAttribute("aria-label") ?? "")
    .trim()
    .toLowerCase()
  const combined = text || ariaLabel
  if (
    combined === "submit" ||
    combined === "apply" ||
    combined.includes("submit") ||
    combined.includes("apply")
  ) {
    return "submit"
  }
  if (
    combined.includes("proceed to next step") ||
    combined.includes("continue") ||
    combined === "next" ||
    combined.includes("next step")
  ) {
    return "continue"
  }
  const nextStep = document.querySelector("#steps .step.current + .step")
  return nextStep?.getAttribute("data-file") === "submit"
    ? "submit"
    : "continue"
}

function resolveJacobsButtonType(element) {
  const stepState = pagination.getJacobsStepState()
  if (!stepState) return resolveSubmitOrContinue(element)
  return stepState.title === "submit" || stepState.title.includes("submit")
    ? "submit"
    : "continue"
}

function resolveJobviteButtonType(element) {
  if (pagination.isJobviteConsentAcceptButton(element)) return "continue"
  if (element instanceof HTMLButtonElement) {
    const type = (element.type || element.getAttribute("type") || "")
      .trim()
      .toLowerCase()
    return type === "submit" ? "submit" : "continue"
  }
  return resolveSubmitOrContinue(element)
}

function resolveSuccessFactorsButtonType(element) {
  const id = element.getAttribute("id") ?? ""
  const text = getLabelText(element)
  const value = element.getAttribute("value")?.trim().toLowerCase() ?? ""
  if (
    id.includes("_submitBtn") ||
    value === "apply" ||
    text.includes("apply")
  ) {
    return "submit"
  }
  return resolveSubmitOrContinue(element)
}

function collectSearchDocuments() {
  const docs = [document]
  if (window.self !== window.top) return docs
  for (const iframe of Array.from(document.querySelectorAll("iframe"))) {
    try {
      const iframeDoc =
        iframe.contentDocument ?? iframe.contentWindow?.document
      if (iframeDoc) docs.push(iframeDoc)
    } catch {
      // cross-origin
    }
  }
  return docs
}

function resolveIcimsStationFromSteps() {
  for (const doc of collectSearchDocuments()) {
    const steps = Array.from(doc.querySelectorAll('li[id^="Step_"]'))
    if (steps.length === 0) continue
    const currentIndex = steps.findIndex((step) => {
      const title = step.getAttribute("title") ?? ""
      const contentTitle =
        step.querySelector(".iCIMS_Steps_Content")?.getAttribute("title") ??
        ""
      return (
        step.classList.contains("iCIMS_Steps_Current") ||
        /current step/i.test(title) ||
        /current step/i.test(contentTitle)
      )
    })
    if (currentIndex === -1) continue
    const label = (
      doc.querySelector(".iCIMS_PageStepText")?.textContent ||
      steps[currentIndex]
        .querySelector(".iCIMS_Steps_Content")
        ?.getAttribute("title") ||
      steps[currentIndex].getAttribute("title") ||
      ""
    )
      .trim()
      .toLowerCase()
    const isSubmit =
      label.includes("submit") ||
      label.includes("review") ||
      label.includes("complete") ||
      label.includes("confirmation") ||
      label.includes("finish")
    return isSubmit ? "submit" : "continue"
  }
  return null
}

function getPlainLabel(element) {
  return (
    element.textContent ||
    element.getAttribute("value") ||
    element.getAttribute("aria-label") ||
    ""
  )
    .trim()
    .toLowerCase()
}

function firstVisible(elements) {
  return (
    elements.find(
      (element) =>
        isVisible(element) && !element.closest("#jobright-helper-id"),
    ) ?? null
  )
}

function filterVisible(elements) {
  return elements.filter(
    (element) =>
      isVisible(element) && !element.closest("#jobright-helper-id"),
  )
}

function isActivelyClickable(element) {
  if (element.closest("#jobright-helper-id")) return false
  if (
    element.disabled ||
    element.getAttribute("disabled") != null ||
    element.getAttribute("aria-disabled") === "true" ||
    element.getAttribute("aria-hidden") === "true" ||
    element.hidden
  ) {
    return false
  }
  const style = element.ownerDocument?.defaultView?.getComputedStyle?.(element)
  if (style?.display === "none" || style?.visibility === "hidden") return false
  const rect = element.getBoundingClientRect?.()
  return !!(rect && rect.width > 0 && rect.height > 0)
}

function collectAmazonAdvanceCandidates() {
  const found = new Set()
  const forms = Array.from(
    document.querySelectorAll(AMAZON_ACTIVE_FORM_SELECTOR),
  )
  for (const form of forms) {
    for (const button of Array.from(
      form.querySelectorAll(AMAZON_ADVANCE_SELECTOR),
    )) {
      found.add(button)
    }
  }
  if (found.size === 0) {
    for (const button of Array.from(
      document.querySelectorAll(AMAZON_ADVANCE_SELECTOR),
    )) {
      found.add(button)
    }
  }
  return Array.from(found)
}

function findAmazonAdvanceButton() {
  const candidates = collectAmazonAdvanceCandidates().filter(isActivelyClickable)
  const matchesAdvanceLabel = (element) => {
    const text = getLabelText(element)
    return (
      element.getAttribute("id") === "save-and-continue-form-button" ||
      text === "continue" ||
      text.includes("continue") ||
      text === "submit" ||
      text.includes("submit") ||
      text === "apply" ||
      text.includes("apply")
    )
  }
  return (
    candidates.find(
      (element) =>
        !!element.closest("div.form-group.submit-button") &&
        matchesAdvanceLabel(element),
    ) ||
    candidates.find(matchesAdvanceLabel) ||
    candidates[0] ||
    null
  )
}

function scrollFocusAndClick(element) {
  element.scrollIntoView?.({ block: "center", inline: "nearest" })
  element.focus?.({ preventScroll: true })
  element.click()
}

function lastVisible(elements) {
  const visible = filterVisible(elements)
  return visible.length > 0 ? visible[visible.length - 1] : null
}

function dispatchFullClick(element) {
  const eventInit = {
    bubbles: true,
    cancelable: true,
    composed: true,
    view: window,
  }
  element.focus?.()
  element.dispatchEvent(new MouseEvent("pointerdown", eventInit))
  element.dispatchEvent(new MouseEvent("mousedown", eventInit))
  element.dispatchEvent(new MouseEvent("pointerup", eventInit))
  element.dispatchEvent(new MouseEvent("mouseup", eventInit))
  element.click()
}

function resolveSmartRecruitersClickTarget(element) {
  return element.shadowRoot?.querySelector("button.c-spl-button") ?? element
}

function resolveAdpRecruitingButtonType(element) {
  const text = getPlainLabel(element)
  return text.includes("submit application") || text === "submit"
    ? "submit"
    : "continue"
}

function findAdpRecruitingTarget() {
  const nextPager = lastVisible(
    Array.from(
      document.querySelectorAll(
        '[data-dojo-attach-point="thePagerDualNext"], [data-dojo-attach-point="thePagerNext"]',
      ),
    ),
  )
  if (nextPager) return { element: nextPager, type: "continue" }

  const goButtons = filterVisible(
    Array.from(document.querySelectorAll("div.appGo.center")).filter(
      (element) =>
        !element.classList.contains("appBack") &&
        element.getAttribute("data-dojo-attach-point") !== "thePagerDualPrev",
    ),
  )
  if (goButtons.length > 0) {
    const element = goButtons[goButtons.length - 1]
    return { element, type: resolveAdpRecruitingButtonType(element) }
  }

  const submit = firstVisible(
    Array.from(
      document.querySelectorAll(
        'button, input[type="submit"], input[type="button"], [role="button"]',
      ),
    ).filter((element) => {
      const text = getPlainLabel(element)
      return text.includes("submit application") || text === "submit"
    }),
  )
  return submit ? { element: submit, type: "submit" } : null
}

function findAdpWorkforceNowTarget() {
  const footerNext = document.getElementById("ja_sv_cw_next_footer_btn")
  if (footerNext && isVisible(footerNext)) {
    return { element: footerNext, type: resolveSubmitOrContinue(footerNext) }
  }
  const recaptchaContinue = document.querySelector(
    pagination.ADP_WORKFORCENOW_RECAPTCHA_CONTINUE_BUTTON_SELECTOR,
  )
  if (recaptchaContinue && isVisible(recaptchaContinue)) {
    return { element: recaptchaContinue, type: "continue" }
  }
  const submit = firstVisible(
    Array.from(
      document.querySelectorAll(
        'button, input[type="submit"], input[type="button"], [role="button"]',
      ),
    ).filter((element) => getPlainLabel(element).includes("submit")),
  )
  return submit ? { element: submit, type: "submit" } : null
}

function findAdpMyJobsTarget() {
  const candidates = filterVisible(
    Array.from(
      document.querySelectorAll(pagination.ADP_MYJOBS_ADVANCE_BUTTON_SELECTOR),
    ),
  )
  const button =
    candidates.find((element) =>
      pagination.isAdpMyJobsAdvanceButton(element),
    ) || null
  return button
    ? { element: button, type: resolveSubmitOrContinue(button) }
    : null
}

function findConfiguredAdvanceTarget(config) {
  const candidates = filterVisible(
    Array.from(document.querySelectorAll(config.selector)),
  )
  const button =
    candidates.find((element) =>
      pagination.isPaycomOnlineAdvanceButton(element),
    ) || null
  return button
    ? { element: button, type: config.getButtonType(button) }
    : null
}

function findPreferSubmitTarget(config) {
  const candidates = filterVisible(
    Array.from(document.querySelectorAll(config.selector)),
  )
  const submit =
    candidates.find((element) => config.getButtonType(element) === "submit") ||
    candidates[0] ||
    firstVisible(Array.from(document.querySelectorAll(config.selector)))
  return submit
    ? { element: submit, type: config.getButtonType(submit) }
    : null
}

function findIcimsTarget(config) {
  const isDeferredSave = (element) => {
    const text = getLabelText(element)
    return text !== "save & return later" && text !== "finish later"
  }
  const pickBest = (candidates) => {
    const usable = candidates.filter(isDeferredSave)
    return (
      usable.find((element) => getLabelText(element) === "next") ||
      usable.find((element) => getLabelText(element).includes("continue")) ||
      usable.find((element) => {
        const text = getLabelText(element)
        return (
          text === "submit" ||
          text === "submit profile" ||
          text === "apply" ||
          text.includes("submit")
        )
      }) ||
      usable[0] ||
      null
    )
  }

  for (const doc of collectSearchDocuments()) {
    const candidates = filterVisible(
      Array.from(doc.querySelectorAll(config.selector)),
    )
    if (candidates.length === 0) continue
    const button = pickBest(candidates)
    if (button) {
      return { element: button, type: config.getButtonType(button) }
    }
  }
  return null
}

function findSuccessFactorsTarget() {
  const next = firstVisible(
    Array.from(document.querySelectorAll(SUCCESSFACTORS_NEXT_SELECTOR)),
  )
  if (next) return { element: next, type: "continue" }
  const submit = filterVisible(
    Array.from(document.querySelectorAll(SUCCESSFACTORS_SUBMIT_SELECTOR)),
  ).find((element) => resolveSuccessFactorsButtonType(element) === "submit")
  return submit ? { element: submit, type: "submit" } : null
}

function findTaleoTarget() {
  const cwsNext = Array.from(
    document.querySelectorAll(pagination.TALEO_CWS_V2_NEXT_BUTTON_SELECTOR),
  ).find(
    (element) =>
      isVisible(element) &&
      !element.closest("#jobright-helper-id") &&
      element.getAttribute("aria-disabled") !== "true",
  )
  if (cwsNext) return { element: cwsNext, type: "continue" }
  const classic = Array.from(
    document.querySelectorAll(
      pagination.TALEO_CLASSIC_SAVE_AND_CONTINUE_SELECTOR,
    ),
  ).find(
    (element) =>
      isVisible(element) &&
      !element.closest("#jobright-helper-id") &&
      !element.disabled,
  )
  return classic ? { element: classic, type: "continue" } : null
}

function postIcimsContinueRequest() {
  let posted = false
  for (const iframe of Array.from(document.querySelectorAll("iframe"))) {
    if (!iframe.contentWindow) continue
    iframe.contentWindow.postMessage(
      {
        type: ICIMS_CONTINUE_REQUEST_TYPE,
        data: { fromAgent: false, timestamp: Date.now() },
        url: iframe.src,
      },
      { targetOrigin: "*" },
    )
    posted = true
  }
  return posted
}

const SITE_NAV_CONFIG = {
  myworkday: {
    selector: WORKDAY_NAVIGATION_BUTTON_SELECTOR,
    getButtonType: resolveSubmitOrContinue,
  },
  jacobs: {
    selector: pagination.JACOBS_NAV_BUTTON_SELECTOR,
    getButtonType: resolveJacobsButtonType,
  },
  jobvite: {
    selector: pagination.JOBVITE_ADVANCE_BUTTON_SELECTOR,
    getButtonType: resolveJobviteButtonType,
  },
  phenom: {
    selector:
      'form.rjsf #next, form.rjsf button#next, form.rjsf button[aria-label="Continue"], form.rjsf button[type="submit"], form.rjsf input[type="submit"]',
    getButtonType: resolveSubmitOrContinue,
  },
  oraclecloud: {
    selector: 'button, [role="button"]',
    getButtonType: resolveSubmitOrContinue,
  },
  tesla: {
    selector: 'button[name="next"], button[type="submit"]',
    getButtonType: resolveSubmitOrContinue,
  },
  adobe: {
    selector:
      'button[type="submit"], button#next.btn-next, button[aria-label="Next"], button[aria-label="Submit"]',
    getButtonType: resolveSubmitOrContinue,
  },
  amazon: {
    selector: AMAZON_ADVANCE_SELECTOR,
    getButtonType: resolveSubmitOrContinue,
  },
  adpMyJobs: {
    selector: pagination.ADP_MYJOBS_ADVANCE_BUTTON_SELECTOR,
    getButtonType: resolveSubmitOrContinue,
  },
  brassring: {
    selector:
      "button#showstart:not([disabled]), button#shownext:not([disabled]), button[ng-click*='goStart']:not([disabled]), button[ng-click*='goNext']:not([disabled]), button[id*='submit'], button[ng-click*='submit'], button[type='submit'], input[type='submit']",
    getButtonType: resolveSubmitOrContinue,
  },
  apple: {
    selector: "#apply-step-continue-button",
    getButtonType: resolveSubmitOrContinue,
  },
  successfactors: {
    selector: SUCCESSFACTORS_SELECTOR,
    getButtonType: resolveSuccessFactorsButtonType,
  },
  cisco: {
    selector: 'button#next, button[atm-id="submit-button"]',
    getButtonType: resolveSubmitOrContinue,
  },
  hrmdirect: {
    selector: 'button[type="submit"]',
    getButtonType: resolveSubmitOrContinue,
  },
  paylocity: {
    selector: 'button#btn-submit[data-automation-id="btnNext"]',
    getButtonType: resolveSubmitOrContinue,
  },
  paycomonline: {
    selector: pagination.PAYCOMONLINE_ADVANCE_BUTTON_SELECTOR,
    getButtonType: resolveSubmitOrContinue,
  },
  icims: {
    selector: '#cp_form_submit_i, input[type="submit"], button[type="submit"]',
    getButtonType: resolveIcimsButtonType,
  },
  google: {
    selector:
      'button[jsname="M2UYVd"], button[aria-label*="Submit profile"], button[aria-label="Next"], .Rwgx2d button[aria-label="Next"], div[role="button"][jsname="OCpkoe"], div[role="button"][jsname="M2UYVd"]',
    getButtonType: resolveGoogleButtonType,
  },
  dayforce: {
    selector:
      'button[test-id="application-next-step"], button[test-id="application-submit"]',
    getButtonType: resolveSubmitOrContinue,
  },
  smartrecruiters: {
    selector: pagination.SMARTRECRUITERS_ADVANCE_BUTTON_SELECTOR,
    getButtonType: resolveSubmitOrContinue,
  },
  ripplehire: {
    selector: pagination.RIPPLEHIRE_ADVANCE_BUTTON_SELECTOR,
    getButtonType: resolveSubmitOrContinue,
  },
  isolved: {
    selector:
      "input#apply, button#apply_button, #save_contact_info_button, #verify_contact_info_button, #new_upload_button, #next",
    getButtonType: resolveIsolvedButtonType,
  },
  jobdiva: {
    selector: pagination.JOBDIVA_ADVANCE_BUTTON_SELECTOR,
    getButtonType: resolveJobdivaButtonType,
  },
}

function resolveNavigationTarget() {
  const targetName = getTargetName()
  if (targetName === "adpRecruiting") return findAdpRecruitingTarget()
  if (targetName === "adpWorkforceNow") return findAdpWorkforceNowTarget()
  if (targetName === "adpMyJobs") return findAdpMyJobsTarget()
  if (targetName === "walmart") {
    const button = walmartSite.getCurrentAdvanceButton()
    return button ? { element: button.element, type: button.type } : null
  }
  if (targetName === "myworkday") {
    return getWorkdayNextPageButtonTarget(document)
  }
  if (targetName === "taleo") return findTaleoTarget()

  const config = SITE_NAV_CONFIG[targetName]
  if (!config) return null
  if (targetName === "icims") return findIcimsTarget(config)

  if (targetName === "jobvite") {
    const all = Array.from(document.querySelectorAll(config.selector))
    const visible = filterVisible(all)
    const element = visible[0] || all[0] || null
    return element
      ? { element, type: config.getButtonType(element) }
      : null
  }

  if (targetName === "google") {
    const button = googleSite.getCurrentAdvanceButton()
    if (button) return { element: button.element, type: button.type }
  }

  if (targetName === "successfactors") return findSuccessFactorsTarget()

  let element = null
  if (targetName === "oraclecloud") {
    const all = Array.from(document.querySelectorAll(config.selector))
    const matching = all.filter((candidate) => {
      if (!isVisible(candidate) || candidate.closest("#jobright-helper-id")) {
        return false
      }
      const text = candidate.innerText?.trim().toLowerCase() ?? ""
      const ariaLabel =
        candidate.getAttribute("aria-label")?.trim().toLowerCase() ?? ""
      return (
        text === "submit" ||
        text === "next" ||
        text === "apply" ||
        text.includes("submit") ||
        text.includes("next") ||
        ariaLabel === "submit" ||
        ariaLabel === "next" ||
        ariaLabel.includes("submit") ||
        ariaLabel.includes("next") ||
        candidate.getAttribute("data-automation-id") ===
          "pageFooterNextButton" ||
        candidate.getAttribute("data-automation-id") ===
          "bottom-navigation-next-button"
      )
    })
    const submit = matching.find(
      (candidate) => config.getButtonType(candidate) === "submit",
    )
    element =
      submit ||
      matching[0] ||
      all.find((candidate) => config.getButtonType(candidate) === "submit") ||
      all[0] ||
      null
  } else if (targetName === "cisco") {
    return findPreferSubmitTarget(config)
  } else if (targetName === "isolved") {
    const modalVerify = document.querySelector(
      ".modal-content #verify_contact_info_button",
    )
    if (modalVerify && isVisible(modalVerify)) {
      element = modalVerify
    } else {
      const all = Array.from(document.querySelectorAll(config.selector))
      element = all.find((candidate) => isVisible(candidate)) || null
    }
  } else if (targetName === "brassring") {
    const all = Array.from(document.querySelectorAll(config.selector))
    element = all.find((candidate) => isVisible(candidate)) || null
  } else if (targetName === "amazon") {
    element = findAmazonAdvanceButton()
  } else if (targetName === "dayforce") {
    if (getDayforceAuthPageMode()) {
      return getDayforceRegistrationNextTarget()
    }
    element = firstVisible(
      Array.from(document.querySelectorAll(config.selector)),
    )
  } else if (targetName === "jobdiva") {
    element =
      filterVisible(
        Array.from(document.querySelectorAll(config.selector)),
      ).find((candidate) => pagination.isJobdivaAdvanceButton(candidate)) ||
      null
  } else if (targetName === "smartrecruiters") {
    element =
      filterVisible(
        Array.from(document.querySelectorAll(config.selector)),
      ).find((candidate) =>
        pagination.isSmartRecruitersAdvanceButton(candidate),
      ) || null
  } else if (targetName === "paycomonline") {
    return findConfiguredAdvanceTarget(config)
  } else {
    element = document.querySelector(config.selector)
  }

  if (!element && targetName === "amazon") {
    const group = document.querySelector(
      'div[class="form-group submit-button mt-5"], div.form-group.submit-button',
    )
    if (group) element = group.querySelector("button, a")
  }

  return element
    ? { element, type: config.getButtonType(element) }
    : null
}

function schedulePaginationAdvance(siteKey) {
  setTimeout(() => {
    pagination.getPaginationAdvanceCheck(siteKey)?.("next-button-800")
  }, 800)
  setTimeout(() => {
    pagination.getPaginationAdvanceCheck(siteKey)?.("next-button-1600")
  }, 1600)
}

export default function NextPageButton({ isFilling }) {
  const [buttonStation, setButtonStation] = useState("continue")
  const [icimsStation, setIcimsStation] = useState(null)
  const [buttonTextOverride, setButtonTextOverride] = useState(null)
  const [walmartCompositeDialogOpen, setWalmartCompositeDialogOpen] =
    useState(false)
  const showSubmitted = useShowSubmitted()
  const targetName = getTargetName()
  const disabled = shouldDisableNextPageButton({
    isFilling,
    targetName,
    walmartCompositeDialogOpen,
  })

  const handleClick = async () => {
    if (disabled) return
    const site = getTargetName()

    if (
      site === "icims" &&
      (icimsStation || buttonStation) &&
      postIcimsContinueRequest()
    ) {
      schedulePaginationAdvance("icims")
      trackNavigationClick(icimsStation ?? buttonStation)
      return
    }

    const target = resolveNavigationTarget()
    if (!target && site === "taleo") {
      console.warn("[Taleo][navigation] proxy target not found", {
        cwsV2NextFound: !!document.querySelector(
          pagination.TALEO_CWS_V2_NEXT_BUTTON_SELECTOR,
        ),
        classicSaveAndContinueFound: !!document.querySelector(
          pagination.TALEO_CLASSIC_SAVE_AND_CONTINUE_SELECTOR,
        ),
      })
    }

    if (
      !target ||
      !shouldClickNextPageButtonTarget({
        targetType: target.type,
        currentStation: buttonStation,
        source: target.source,
      })
    ) {
      return
    }

    if (site === "google") {
      googleSite.clickAdvanceButton(target.element)
    } else if (site === "walmart") {
      walmartSite.clickAdvanceButton(target.element)
      setTimeout(() => {
        pagination.getPaginationAdvanceCheck("walmart")?.("next-button-800")
        window.dispatchEvent(
          new CustomEvent(pagination.WALMART_STEP_CHANGE_EVENT),
        )
      }, 800)
      setTimeout(() => {
        pagination.getPaginationAdvanceCheck("walmart")?.("next-button-1600")
        window.dispatchEvent(
          new CustomEvent(pagination.WALMART_STEP_CHANGE_EVENT),
        )
      }, 1600)
    } else if (site === "adpRecruiting") {
      const nested = target.element.querySelector(
        'button, input[type="submit"], input[type="button"], a, [role="button"]',
      )
      dispatchFullClick(nested ?? target.element)
    } else if (site === "adpMyJobs") {
      target.element.click()
      schedulePaginationAdvance("adpMyJobs")
    } else if (site === "paycomonline") {
      target.element.click()
      schedulePaginationAdvance("paycomonline")
    } else if (site === "cisco") {
      target.element.click()
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent(pagination.CISCO_STEP_CHANGE_EVENT),
        )
      }, 400)
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent(pagination.CISCO_STEP_CHANGE_EVENT),
        )
      }, 1000)
    } else if (site === "myworkday") {
      target.element.click()
      schedulePaginationAdvance("myworkday")
    } else if (site === "oraclecloud") {
      const previous =
        pagination.saveOracleCloudPendingAutofillForCurrentStep()
      target.element.click()
      setTimeout(() => {
        pagination.getPaginationAdvanceCheck("oraclecloud")?.("next-button-800")
      }, 800)
      setTimeout(() => {
        pagination
          .getPaginationAdvanceCheck("oraclecloud")
          ?.("next-button-1600")
        window.dispatchEvent(
          new CustomEvent(pagination.ORACLE_CLOUD_CONTINUE_EVENT, {
            detail: { previousIndex: previous.index },
          }),
        )
      }, 1600)
    } else if (site === "jacobs") {
      target.element.click()
      schedulePaginationAdvance("jacobs")
    } else if (site === "amazon") {
      scrollFocusAndClick(target.element)
    } else if (site === "smartrecruiters") {
      pagination
        .getPaginationAdvanceCheck("smartrecruiters")
       ?.(pagination.SMARTRECRUITERS_PREPARE_ADVANCE_SOURCE)
      resolveSmartRecruitersClickTarget(target.element).click()
      schedulePaginationAdvance("smartrecruiters")
    } else if (site === "jobdiva") {
      target.element.click()
      schedulePaginationAdvance("jobdiva")
    } else if (site === "successfactors") {
      if (target.type === "continue") {
        pagination.markSuccessFactorsContinueAutofillPending()
      }
      target.element.click()
      schedulePaginationAdvance("successfactors")
    } else if (site === "taleo") {
      console.info("[Taleo][navigation] proxy click", {
        target: target.element.matches(
          pagination.TALEO_CLASSIC_SAVE_AND_CONTINUE_SELECTOR,
        )
          ? "classic-save-and-continue"
          : "cws-v2-next",
      })
      target.element.click()
      schedulePaginationAdvance("taleo")
    } else {
      target.element.click()
    }

    if (
      shouldTrackNextPageButtonClick({
        targetName: site,
        suppressClickTracking: target.suppressClickTracking,
      })
    ) {
      trackNavigationClick(target.type)
    }
  }

  useEffect(() => {
    const sync = () => {
      const site = getTargetName()
      setWalmartCompositeDialogOpen(
        site === "walmart" && walmartSite.hasVisibleWalmartCompositeDialog(),
      )
      const icimsFromSteps = site === "icims" ? resolveIcimsStationFromSteps() : null
      const target = resolveNavigationTarget()
      if (!target) {
        if (site === "icims" && icimsFromSteps) {
          setButtonStation(icimsFromSteps)
          setIcimsStation(icimsFromSteps)
          setButtonTextOverride(null)
        }
        setButtonTextOverride(null)
        return
      }
      setButtonStation(target.type)
      setButtonTextOverride(target.buttonText ?? null)
      if (site === "icims") {
        setIcimsStation(icimsFromSteps ?? target.type)
      }
    }

    sync()
    let debounceTimer = null
    const debounceMs = 600
    const observer = new MutationObserver(() => {
      if (debounceTimer == null) {
        debounceTimer = setTimeout(() => {
          debounceTimer = null
          sync()
        }, debounceMs)
      }
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [
        "class",
        "type",
        "aria-label",
        "data-automation-id",
      ],
    })
    const intervalId = window.setInterval(sync, 800)
    return () => {
      if (debounceTimer != null) clearTimeout(debounceTimer)
      observer.disconnect()
      window.clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    let clearPending
    if (getTargetName() !== "cisco") return
    const sync = () => {
      const target = resolveNavigationTarget()
      if (target) {
        setButtonStation(target.type)
        setButtonTextOverride(target.buttonText ?? null)
      }
      return !!target
    }
    const onStepChange = () => {
      clearPending?.()
      if (sync()) return
      const t1 = setTimeout(sync, 200)
      const t2 = setTimeout(sync, 500)
      clearPending = () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
    window.addEventListener(pagination.CISCO_STEP_CHANGE_EVENT, onStepChange)
    return () => {
      clearPending?.()
      window.removeEventListener(
        pagination.CISCO_STEP_CHANGE_EVENT,
        onStepChange,
      )
    }
  }, [])

  useEffect(() => {
    let clearPending
    if (getTargetName() !== "jacobs") return
    const sync = () => {
      const target = resolveNavigationTarget()
      if (target) {
        setButtonStation(target.type)
        setButtonTextOverride(target.buttonText ?? null)
      }
      return !!target
    }
    const onStepChange = () => {
      clearPending?.()
      if (sync()) return
      const t1 = setTimeout(sync, 200)
      const t2 = setTimeout(sync, 500)
      clearPending = () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
    window.addEventListener(pagination.JACOBS_STEP_CHANGE_EVENT, onStepChange)
    return () => {
      clearPending?.()
      window.removeEventListener(
        pagination.JACOBS_STEP_CHANGE_EVENT,
        onStepChange,
      )
    }
  }, [])

  useEffect(() => {
    let clearPending
    const site = getTargetName()
    if (site !== "google" && site !== "walmart") return
    const sync = () => {
      const target = resolveNavigationTarget()
      if (target) {
        setButtonStation(target.type)
        setButtonTextOverride(target.buttonText ?? null)
      }
      return !!target
    }
    const onStepChange = () => {
      clearPending?.()
      if (sync()) return
      const t1 = setTimeout(sync, 200)
      const t2 = setTimeout(sync, 500)
      clearPending = () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
    const eventName =
      site === "google"
        ? googleSite.GOOGLE_STEP_CHANGE_EVENT
        : pagination.WALMART_STEP_CHANGE_EVENT
    window.addEventListener(eventName, onStepChange)
    return () => {
      clearPending?.()
      window.removeEventListener(eventName, onStepChange)
    }
  }, [])

  useEffect(() => {
    if (showSubmitted) {
      setButtonStation("submit")
      setButtonTextOverride(null)
    }
  }, [showSubmitted])

  const showSubmittedState = buttonStation === "submit" && showSubmitted
  const activeStation = targetName === "icims" ? icimsStation : buttonStation
  if (targetName === "icims" && !activeStation) return null

  const isContinue = activeStation === "continue"
  const label = resolveDisplayedButtonText({
    buttonStation: activeStation,
    buttonTextOverride,
  })

  return jsx("div", {
    className: "continue-button-wrapper",
    children: showSubmittedState
      ? jsx("button", {
          className: "continue-button",
          children: jsxs("div", {
            className: "continue-button-content",
            children: [
              jsx(Image, {
                preview: false,
                src: assetUrl(confirmSvg),
                alt: "Submitted",
                width: 16,
              }),
              jsx(Typography.Text, {
                className: "continue-button-text",
                children: "Submitted!",
              }),
            ],
          }),
        })
      : jsx("button", {
          disabled,
          onClick: handleClick,
          className: clsx("continue-button", {
            "continue-button-disabled": disabled,
          }),
          children: jsxs("div", {
            className: "continue-button-content",
            children: [
              jsx(Typography.Text, {
                className: clsx("continue-button-text", {
                  "continue-button-text-disabled": disabled,
                }),
                children: label,
              }),
              isContinue &&
                jsx(Image, {
                  preview: false,
                  src: assetUrl(playSvg),
                  alt: "",
                  width: 16,
                  height: 16,
                  className: clsx("continue-button-icon", {
                    "continue-button-icon-disabled": disabled,
                  }),
                }),
            ],
          }),
        }),
  })
}
