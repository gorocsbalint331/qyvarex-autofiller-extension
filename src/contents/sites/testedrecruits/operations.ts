// @ts-nocheck
/**
 * TestedRecruits uses Select2, so a filled <select> also has to be pushed
 * back into the visible widget. Resume and cover letter are separate inputs.
 */

import { isTestedRecruitsPosting } from "./detect.ts"

export function findTestedRecruitsResumeInput() {
  if (!isTestedRecruitsPosting()) return null
  const input = document.querySelector(
    "#resume_input, form#applyForm input[type='file'][name='resume']",
  )
  return input instanceof HTMLInputElement ? input : null
}

function setSelect(select, pattern) {
  if (!(select instanceof HTMLSelectElement) || select.value) return
  const option = [...select.options].find((item) => {
    const text = (item.textContent || "").replace(/\s+/g, " ").trim()
    return item.value && pattern.test(text)
  })
  if (!option) return
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLSelectElement.prototype,
    "value",
  )?.set
  if (setter) setter.call(select, option.value)
  else select.value = option.value
}

function syncSelect2() {
  const jq = window.jQuery || window.$
  if (!jq) return
  for (const select of document.querySelectorAll("#applyForm select")) {
    if (!(select instanceof HTMLSelectElement) || !select.value) continue
    try {
      jq(select).val(select.value).trigger("change")
    } catch {
      /* Select2 is optional; the native value is already set. */
    }
  }
}

export function finishTestedRecruitsFields() {
  if (!isTestedRecruitsPosting()) return
  setSelect(document.getElementById("preferred_contact_method"), /^e-?mail$/i)
  setSelect(document.getElementById("sourcing_location"), /linkedin/i)
  syncSelect2()
}
