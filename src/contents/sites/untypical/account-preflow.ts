// @ts-nocheck
/**
 * Untypical asks for an account before the application can be submitted.
 * Show those register or login steps instead of the normal Autofill button.
 */

import { sendToBackground } from "@plasmohq/messaging"

import { resolveSignupRegistrationEmail } from "../../../api/autofill-signup-information.ts"
import * as accountFlow from "../../pre-autofill-flow/account-flow.ts"
import * as preAutofillDom from "../../pre-autofill-flow/dom.ts"
import { getWorkdaySignupInformation } from "../../../store/workday-signup-info.ts"
import * as operations from "./operations.ts"

const LABELS = accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS

function formDocument(doc) {
  if (!doc) return null
  if (doc.querySelector("#regPanel, #loginPanel")) return doc
  const frame = [...doc.querySelectorAll("iframe")].find((item) =>
    /registration\.aspx/i.test(item.src || ""),
  )
  return frame?.contentDocument || null
}

function visible(element) {
  return preAutofillDom.isVisiblePreAutofillElement(element)
}

function visiblePanel(doc, id) {
  const panel = formDocument(doc)?.querySelector(id)
  return panel && visible(panel) ? panel : null
}

function isLogin({ document: doc }) {
  return !!visiblePanel(doc, "#loginPanel") && !visiblePanel(doc, "#regPanel")
}

function isRegister({ document: doc }) {
  return !!visiblePanel(doc, "#regPanel")
}

function isVacancy({ document: doc }) {
  if (isLogin({ document: doc }) || isRegister({ document: doc })) return false
  return !!preAutofillDom.findVisiblePreAutofillElement(
    doc,
    "a.apply, a[id$='LnkApplySticky'], a[id$='LnkApply']",
  )
}

let profile = null

async function loadProfile() {
  const response = await sendToBackground({
    name: "getAutofillInfo",
    body: { forceRefresh: false },
  }).catch(() => null)
  profile = response?.autofillInfo || null
  return profile
}

async function getEmail() {
  const hub = profile || (await loadProfile())
  return hub?.identity?.email || resolveSignupRegistrationEmail(hub) || ""
}

async function getPassword() {
  const saved = await getWorkdaySignupInformation().catch(() => null)
  return saved?.password || ""
}

function setText(input, value) {
  if (!input || !value) return
  preAutofillDom.setNativeInputValue(input, value)
}

function activePanel(doc) {
  return visiblePanel(doc, "#loginPanel") || visiblePanel(doc, "#regPanel")
}

async function fillEmail({ document: doc, credentials, signal }) {
  const panel = activePanel(doc)
  const email = panel?.querySelector("input[id$='CanC_Email'], input[id$='txtUsername']")
  const filled = await preAutofillDom.fillPreAutofillInput({
    document: doc,
    signal,
    findInput: () => (email && visible(email) ? email : null),
    value: credentials.email,
  })
  setText(panel?.querySelector("input[id$='Email_Copy1']"), credentials.email)
  const identity = profile?.identity
  setText(panel?.querySelector("input[id$='CanC_FirstName']"), identity?.firstName)
  setText(panel?.querySelector("input[id$='CanC_Surname']"), identity?.lastName)
  return filled
}

async function fillPassword({ document: doc, credentials, signal }) {
  return preAutofillDom.fillPreAutofillInput({
    document: doc,
    signal,
    findInput: () => {
      const input = activePanel(doc)?.querySelector("input[type='password']")
      return input && visible(input) ? input : null
    },
    value: credentials.password,
  })
}

async function agree({ document: doc }) {
  const root = formDocument(doc)
  if (!root) return false
  await operations.finishRegistrationChoices(root)
  return true
}

async function openApply({ document: doc, signal }) {
  const opened = await preAutofillDom.clickPreAutofillElement({
    document: doc,
    signal,
    findElement: () =>
      preAutofillDom.findVisiblePreAutofillElement(
        doc,
        "a.apply, a[id$='LnkApplySticky'], a[id$='LnkApply']",
      ),
  })
  if (!opened) return false
  const form = await preAutofillDom.waitForPreAutofillElement(
    doc,
    () => visiblePanel(doc, "#regPanel") || visiblePanel(doc, "#loginPanel"),
    8000,
    signal,
  )
  return !!form
}

const registerSteps = [
  {
    label: LABELS.emailAddress,
    type: "fill",
    progressGroup: "create_account",
    waitForCredential: "email",
    run: fillEmail,
  },
  {
    label: LABELS.password,
    type: "fill",
    progressGroup: "create_account",
    waitForCredential: "password",
    run: fillPassword,
  },
  {
    label: LABELS.agreePrivacyNotice,
    type: "check",
    progressGroup: "create_account",
    run: agree,
  },
]

const loginSteps = [
  {
    label: LABELS.emailAddress,
    type: "fill",
    waitForCredential: "email",
    run: fillEmail,
  },
  {
    label: LABELS.password,
    type: "fill",
    waitForCredential: "password",
    run: fillPassword,
  },
  {
    label: LABELS.clickSignIn,
    type: "track_submit",
    progress: false,
    run: () => true,
  },
]

export const untypicalAccountFlowAdapter = accountFlow.createPreAutofillAccountFlowAdapter({
  flowId: "untypical_account_flow",
  getEmail,
  getPassword,
  rules: {
    sign_in: {
      state: "sign_in",
      detect: isLogin,
      steps: loginSteps,
    },
    create_account: {
      state: "registration",
      detect: isRegister,
      steps: registerSteps,
    },
    vacancy: {
      state: "registration",
      entry: true,
      completeEntryProgress: true,
      detect: isVacancy,
      steps: [
        {
          label: LABELS.clickApply,
          type: "click",
          run: openApply,
        },
        ...registerSteps,
      ],
    },
  },
})
