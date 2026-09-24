// @ts-nocheck
/**
 * Dayforce — registration agreements (privacy + terms checkbox).
 */

import * as messaging from "@plasmohq/messaging"
import * as auth from "./auth.js"
import * as policyLink from "./policy-link.js"

const AGREEMENT_ARIA_LABEL =
  "I agree to Dayforce's Global Privacy Statement and to the Terms of Use, I clicked the links above and reviewed these documents."

const acceptedCheckboxes = new WeakSet()

function isVisible(el) {
  return (
    !el.closest('[hidden], [aria-hidden="true"]') &&
    el.getClientRects().length > 0 &&
    window.getComputedStyle(el).visibility !== "hidden"
  )
}

export async function acceptDayforceRegistrationAgreements({
  root = document,
  url,
  isVisible: checkVisible = isVisible,
  openPolicyLink = (anchor) =>
    policyLink.openDayforcePolicyLink(anchor, (policyUrl) =>
      messaging.sendToBackground({
        name: "openDayforcePolicyTab",
        body: { url: policyUrl },
      }),
    ),
  settle = () => new Promise((resolve) => setTimeout(resolve, 100)),
} = {}) {
  if (auth.getDayforceAuthPageMode(url) !== "register") return false

  const findAgreementControls = () => {
    const mains = Array.from(root.querySelectorAll("main"))
    if (mains.length !== 1 || !checkVisible(mains[0])) return null

    const findSingleVisible = (selector) => {
      const matches = Array.from(mains[0].querySelectorAll(selector))
      return matches.length === 1 && checkVisible(matches[0])
        ? matches[0]
        : null
    }

    const privacy = findSingleVisible(
      'a[href="https://www.dayforce.com/privacy"][target="_blank"]',
    )
    const terms = findSingleVisible(
      'a[href="https://www.dayforce.com/terms"][target="_blank"]',
    )
    const checkboxSelector = `input[type="checkbox"][role="checkbox"][aria-label="${AGREEMENT_ARIA_LABEL}"]`
    const hosts = Array.from(
      mains[0].querySelectorAll(
        `evr-checkbox[arialabelcheckbox="${AGREEMENT_ARIA_LABEL}"]`,
      ),
    )
    if (hosts.length > 1 || (hosts.length === 1 && !checkVisible(hosts[0]))) {
      return null
    }

    const checkboxes = [
      ...Array.from(mains[0].querySelectorAll(checkboxSelector)),
      ...Array.from(
        hosts[0]?.shadowRoot?.querySelectorAll(checkboxSelector) ?? [],
      ),
    ]
    const checkbox =
      checkboxes.length === 1 && checkVisible(checkboxes[0])
        ? checkboxes[0]
        : null

    return privacy &&
      terms &&
      checkbox &&
      !checkbox.disabled &&
      checkbox.getAttribute("aria-disabled") !== "true"
      ? { privacy, terms, checkbox }
      : null
  }

  try {
    let controls = findAgreementControls()
    if (!controls) return false
    if (
      acceptedCheckboxes.has(controls.checkbox) &&
      controls.checkbox.checked
    ) {
      return true
    }

    if (!(await openPolicyLink(controls.privacy))) return false
    await settle()
    controls = findAgreementControls()
    if (!controls || !(await openPolicyLink(controls.terms))) return false
    await settle()
    controls = findAgreementControls()
    if (!controls) return false

    if (controls.checkbox.checked) {
      controls.checkbox.click()
      await settle()
      controls = findAgreementControls()
      if (!controls || controls.checkbox.checked) return false
    }

    controls.checkbox.click()
    await settle()
    controls = findAgreementControls()
    if (
      !controls ||
      !controls.checkbox.checked ||
      controls.checkbox.getAttribute("aria-checked") !== "true"
    ) {
      return false
    }

    acceptedCheckboxes.add(controls.checkbox)
    return true
  } catch {
    return false
  }
}
