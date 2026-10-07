// @ts-nocheck
/**
 * Open the Eploy apply frame on careers.untypical.co.uk and finish fields
 * that appear only after a choice is made.
 */

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function registrationRoot(doc) {
  return doc?.querySelector?.("#regPanel [id$='ITSFields'], #regPanel")
}

function isVisible(element) {
  if (!element) return false
  const style = element.ownerDocument.defaultView.getComputedStyle(element)
  if (style.display === "none" || style.visibility === "hidden") return false
  const rect = element.getBoundingClientRect()
  return rect.width > 0 && rect.height > 0
}

export async function openApplicationForm() {
  if (registrationRoot(document)) return document
  const link = document.querySelector("a.apply, a[id$='LnkApplySticky'], a[id$='LnkApply']")
  link?.click()
  for (let attempt = 0; attempt < 40; attempt += 1) {
    const frame = [...document.querySelectorAll("iframe")].find((item) =>
      /registration\.aspx/i.test(item.src || ""),
    )
    const doc = frame?.contentDocument
    if (registrationRoot(doc)) return doc
    await sleep(250)
  }
  return null
}

function setSelectByText(select, pattern) {
  if (!(select instanceof HTMLSelectElement) || !isVisible(select)) return false
  const option = [...select.options].find((item) => {
    const text = item.textContent || ""
    if (!item.value || /please select/i.test(text)) return false
    return pattern.test(text)
  })
  if (!option) return false
  select.focus()
  select.value = option.value
  select.dispatchEvent(new Event("input", { bubbles: true }))
  select.dispatchEvent(new Event("change", { bubbles: true }))
  return true
}

function clickRadio(doc, idPart, label) {
  const radios = [...doc.querySelectorAll(`#regPanel input[type='radio'][id*='${idPart}']`)]
  const match = radios.find((radio) => {
    const text = doc.querySelector(`label[for="${CSS.escape(radio.id)}"]`)?.textContent || ""
    return text.trim().toLowerCase() === label.toLowerCase()
  })
  if (match && !match.checked) match.click()
}

function checkConsent(doc) {
  for (const box of doc.querySelectorAll("#regPanel input[type='checkbox']")) {
    const label = doc.querySelector(`label[for="${CSS.escape(box.id)}"]`)?.innerText || ""
    if (/marketing/i.test(label)) continue
    if (!/i agree|accurate/i.test(label)) continue
    if (!box.checked) box.click()
  }
}

export async function finishRegistrationChoices(doc) {
  if (!doc) return
  const source = doc.querySelector("select[id$='CanC_InfluenceToApply']")
  setSelectByText(source, /our careers website/i)
  const detail = doc.querySelector("select[id$='CanC_InfluenceToApplyDetail']")
  for (let attempt = 0; attempt < 8; attempt += 1) {
    await sleep(300)
    if (!isVisible(detail)) {
      if (attempt >= 2) break
      continue
    }
    if ([...detail.options].some((option) => option.value && !/please select/i.test(option.text))) {
      setSelectByText(detail, /./)
      break
    }
  }
  const email = doc.querySelector("input[id$='CanC_Email']")
  const confirm = doc.querySelector("input[id$='Email_Copy1']")
  if (email?.value && confirm && confirm.value !== email.value) {
    confirm.focus()
    confirm.value = email.value
    confirm.dispatchEvent(new Event("input", { bubbles: true }))
    confirm.dispatchEvent(new Event("change", { bubbles: true }))
  }
  clickRadio(doc, "CanC_IsEmployee", "No")
  clickRadio(doc, "CanC_IsPreviousEmployee", "No")
  clickRadio(doc, "CanC_OccasionalContact", "No")
  checkConsent(doc)
}

export function findUploadButton(doc) {
  return doc?.querySelector?.("#regPanel button[id$='btnUpload']") || null
}

export async function waitForUploadFrame() {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const frame = [...document.querySelectorAll("iframe")].find((item) =>
      /UploadFile\.aspx/i.test(item.src || ""),
    )
    const input = frame?.contentDocument?.querySelector("input[type='file']")
    if (input) return { frame, input }
    await sleep(250)
  }
  return null
}

export function clickUploadSave(frame) {
  const doc = frame?.contentDocument
  if (!doc) return
  const button = [...doc.querySelectorAll("button, input[type='submit'], input[type='button']")].find(
    (item) => /upload|save|add|ok/i.test(item.textContent || item.value || ""),
  )
  button?.click()
}
