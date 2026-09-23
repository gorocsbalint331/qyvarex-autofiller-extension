// @ts-nocheck
/**
 * SuccessFactors — registration data-privacy dialog accept flow.
 */

const CAREER_FORM = "form#careerform"
const DATA_PRIVACY_OPENER = "#dataPrivacyId"
const DIALOG_SELECTOR = '[role="dialog"]'
const ACCEPT_LABELS = ["Accept", "Acknowledge", "I Acknowledge", "Confirm"]
const ACCEPT_BUTTON_SELECTOR = ACCEPT_LABELS.map(
  (label) => `button[name="${label}"], button[title="${label}"]`,
).join(", ")

function isVisible(element) {
  let node = element
  while (node) {
    if (
      node.hidden ||
      "true" === node.getAttribute("aria-hidden") ||
      node.classList.contains("displayNone")
    ) {
      return false
    }
    const style = window.getComputedStyle(node)
    if ("none" === style.display || "hidden" === style.visibility) return false
    node = node.parentElement
  }
  return true
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function findRegistrationForm(root) {
  const forms = Array.from(root.querySelectorAll(CAREER_FORM))
  if (1 !== forms.length) return null
  const form = forms[0]
  const loginNsInput = form.querySelector("input#login_ns")
  let loginNs = loginNsInput?.value
  if (loginNsInput && !loginNs) {
    try {
      const values = new URL(form.ownerDocument.URL).searchParams.getAll(
        "login_ns",
      )
      if (1 === values.length) loginNs = values[0]
    } catch {
      return null
    }
  }
  if ("register" !== loginNs) return null
  const content = form.querySelector(".content.extLoginFormContent")
  const fieldsTable = content?.querySelector("table#fieldsContainer")
  return content && fieldsTable ? form : null
}

function findVisibleDialogs(root, isVisibleFn) {
  return Array.from(root.querySelectorAll(DIALOG_SELECTOR)).filter((dialog) =>
    isVisibleFn(dialog),
  )
}

async function waitForNewDialog(root, isVisibleFn, waitFn, existingDialogs) {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const newDialogs = findVisibleDialogs(root, isVisibleFn).filter(
      (dialog) => !existingDialogs.has(dialog),
    )
    if (1 === newDialogs.length) return newDialogs[0]
    if (newDialogs.length > 1) break
    await waitFn(100)
  }
  return null
}

async function waitForDialogClosed(root, dialog, isVisibleFn, waitFn) {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    if (!findVisibleDialogs(root, isVisibleFn).includes(dialog)) return true
    await waitFn(100)
  }
  return !findVisibleDialogs(root, isVisibleFn).includes(dialog)
}

async function acceptSuccessFactorsRegistrationPrivacy({
  root = document,
  isVisible: isVisibleFn = isVisible,
  wait: waitFn = wait,
} = {}) {
  const result = {
    foundRegistrationForm: false,
    foundOpener: false,
    openedDialog: false,
    accepted: false,
  }
  const form = findRegistrationForm(root)
  if (!form || !isVisibleFn(form)) return result
  result.foundRegistrationForm = true

  const openers = Array.from(form.querySelectorAll(DATA_PRIVACY_OPENER))
  if (
    1 !== openers.length ||
    "dialog" !== openers[0].getAttribute("aria-haspopup") ||
    !isVisibleFn(openers[0])
  ) {
    return result
  }
  result.foundOpener = true

  const existingDialogs = new Set(findVisibleDialogs(root, isVisibleFn))
  openers[0].click()
  const dialog = await waitForNewDialog(
    root,
    isVisibleFn,
    waitFn,
    existingDialogs,
  )
  if (!dialog) return result
  result.openedDialog = true

  const acceptButtons = Array.from(
    dialog.querySelectorAll(ACCEPT_BUTTON_SELECTOR),
  ).filter((button) => {
    const el = button
    return (
      ACCEPT_LABELS.includes(el.textContent?.trim() ?? "") &&
      el.getAttribute("type")?.toLowerCase() === "button" &&
      !el.disabled &&
      isVisibleFn(el)
    )
  })
  if (1 !== acceptButtons.length) return result
  acceptButtons[0].click()
  result.accepted = await waitForDialogClosed(root, dialog, isVisibleFn, waitFn)

  const privacyIdInput = form.querySelector("input#fbclc_dpcsId")
  if (privacyIdInput) {
    result.accepted = result.accepted && !!privacyIdInput.value.trim()
  }
  return result
}

export { acceptSuccessFactorsRegistrationPrivacy }
