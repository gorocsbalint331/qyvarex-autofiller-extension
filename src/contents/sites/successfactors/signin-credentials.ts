// @ts-nocheck
/**
 * SuccessFactors — sign-in form field detection and credential fill.
 */

function isVisible(element) {
  return (
    !element.closest('[hidden], [aria-hidden="true"], .displayNone') &&
    element.getClientRects().length > 0 &&
    "hidden" !== window.getComputedStyle(element).visibility
  )
}

function findUniqueInputById(root, id) {
  const matches = Array.from(root.querySelectorAll(`[id="${id}"]`))
  if (1 !== matches.length) return null
  const input = matches[0]
  const allowedTypes =
    "password" === id ? ["password", "text"] : ["text", "email"]
  return input.name === id && allowedTypes.includes(input.type.toLowerCase())
    ? input
    : null
}

function findSuccessFactorsSignInFields(root = document, isVisibleFn = isVisible) {
  const forms = Array.from(root.querySelectorAll("form#careerform"))
  if (1 !== forms.length) return null
  const form = forms[0]
  const loginNs = form.querySelector("input#login_ns")?.value?.trim()
  if (loginNs && "login" !== loginNs) return null
  const email = findUniqueInputById(form, "username")
  const password = findUniqueInputById(form, "password")
  return isVisibleFn(form) && email && password
    ? { email, password }
    : null
}

function getSuccessFactorsSignInPasswordInputs(root = document) {
  const inputs = /* @__PURE__ */ new Set()
  for (const form of Array.from(root.querySelectorAll("form#careerform"))) {
    for (const input of Array.from(form.querySelectorAll('[id="password"]'))) {
      if (
        "password" === input.id &&
        "password" === input.name &&
        ["password", "text"].includes(input.type.toLowerCase())
      ) {
        inputs.add(input)
      }
    }
  }
  return inputs
}

async function writeInputValue(input, value) {
  input.focus()
  const setter = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(input),
    "value",
  )?.set
  if (!setter) throw Error("input value setter unavailable")
  setter.call(input, value)
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))
  input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }))
  input.blur()
}

async function fillSuccessFactorsSignInCredentials({
  root = document,
  email,
  password,
  isVisible: isVisibleFn = isVisible,
  writeValue = writeInputValue,
}) {
  const fields = findSuccessFactorsSignInFields(root, isVisibleFn)
  const result = {
    foundForm: null !== fields,
    filledRoles: [],
    skippedExistingRoles: [],
    rejectedRoles: [],
  }
  if (!fields) return result

  for (const role of ["email", "password"]) {
    const input = fields[role]
    if (input.disabled || input.readOnly || !isVisibleFn(input)) continue
    if (input.value.trim()) {
      result.skippedExistingRoles.push(role)
      continue
    }
    const value = "email" === role ? email : password
    if (
      value &&
      ("password" !== role ||
        (email.trim() &&
          fields.email.value.trim().toLowerCase() === email.trim().toLowerCase()))
    ) {
      try {
        await writeValue(input, value)
        if (input.value === value) {
          result.filledRoles.push(role)
        } else {
          result.rejectedRoles.push(role)
        }
      } catch {
        result.rejectedRoles.push(role)
      }
    }
  }
  return result
}

export {
  fillSuccessFactorsSignInCredentials,
  findSuccessFactorsSignInFields,
  getSuccessFactorsSignInPasswordInputs,
}
