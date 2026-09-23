// @ts-nocheck
/**
 * iCIMS continue-button detection and multi-step autofill continuation hooks.
 */

export function isIcimsAutofillContinue(buttonText, pageStepText) {
  return (
    /^(continue|save (?:and|&) continue|next)$/.test(
      buttonText.trim().replace(/\s+/g, " ").toLowerCase(),
    ) &&
    !/review|submit|complete|confirmation|finish/i.test(pageStepText)
  )
}

export function getIcimsContinuationSignature(root) {
  let pageStepText =
    root.querySelector(".iCIMS_PageStepText")?.textContent?.trim() || ""
  if (/review|submit|complete|confirmation|finish/i.test(pageStepText)) {
    return null
  }

  let forms = Array.from(root.querySelectorAll("form"))
  let preferredForm = forms.find(
    (form) =>
      form.id === "enterEmailForm" ||
      form.id === "iCIMS_MainForm" ||
      form.id === "profileForm",
  )

  return JSON.stringify([
    pageStepText,
    (preferredForm ? [preferredForm] : forms).map((form) => [
      form.id,
      Array.from(
        form.querySelectorAll(
          "input:not([type=hidden]),select,textarea",
        ),
      ).map((control) => [
        control.tagName,
        control.getAttribute("name"),
        control.getAttribute("type"),
      ]),
    ]),
  ])
}

export function bindIcimsContinueAutofill(root, isActive, onContinue) {
  let handleControl = (control) => {
    if (!isActive() || !control || typeof control.closest !== "function") {
      return
    }

    let button = control.closest(
      "button,input[type=submit],input[type=button],a[role=button]",
    )
    if (
      !button ||
      button.disabled ||
      button.getAttribute("aria-disabled") === "true"
    ) {
      return
    }

    let buttonText =
      button.tagName === "INPUT"
        ? button.value
        : button.textContent || button.getAttribute("aria-label") || ""
    let pageStepText =
      root.querySelector(".iCIMS_PageStepText")?.textContent || ""

    if (isIcimsAutofillContinue(buttonText, pageStepText)) {
      onContinue()
    }
  }

  root.addEventListener("click", (event) => handleControl(event.target), true)
  root.addEventListener(
    "submit",
    (event) => handleControl(event.submitter),
    true,
  )
}
