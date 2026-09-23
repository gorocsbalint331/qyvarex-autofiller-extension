// @ts-nocheck
/**
 * JobDiva — sign-in form detection and credential fill.
 */

function normalizeText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function isVisibleDefault(element) {
  if (element.closest?.("[hidden], [aria-hidden='true']")) return false
  const style = window.getComputedStyle(element)
  return (
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    element.getClientRects().length > 0
  )
}

function looksLikeSignInContainer(container) {
  const text = normalizeText(container.textContent)
  const buttons = Array.from(
    container.querySelectorAll("button, input[type='submit']"),
  )
  if (
    buttons.some((button) =>
      /\b(sign in|sign into|log in|login)\b/.test(
        normalizeText(button.textContent),
      ),
    )
  ) {
    return true
  }
  return (
    !/\b(create|register|forgot|reset)\b/.test(text) &&
    /\b(sign in|sign into|log in|login)\b/.test(text)
  )
}

function isEmailInput(input) {
  const identity =
    `${input.id} ${input.name} ${input.autocomplete}`.toLowerCase()
  const label = normalizeText(
    input
      .closest?.(".jd-form-layout")
      ?.querySelector("label.jd-label")
      ?.textContent,
  ).replace(/\s*\*\s*$/, "")
  return (
    input.type.toLowerCase() === "email" ||
    (input.type.toLowerCase() === "text" && label === "email") ||
    input.autocomplete === "username" ||
    /\b(email|username|user name|login)\b/.test(identity)
  )
}

function isPasswordInput(input) {
  const identity = `${input.id} ${input.name}`.toLowerCase()
  return (
    input.type.toLowerCase() === "password" ||
    (input.type.toLowerCase() === "text" && /\bpassword\b/.test(identity))
  )
}

function findSignInForm(root) {
  const candidates = Array.from(
    root.querySelectorAll(
      "form, [role='form'], .modal-body > .container-fluid",
    ),
  ).filter(
    (container) =>
      !!looksLikeSignInContainer(container) &&
      (!container.matches?.(".modal-body > .container-fluid") ||
        Array.from(container.querySelectorAll("h1,h2,h3,h4,h5,h6")).some(
          (heading) => normalizeText(heading.textContent) === "sign in",
        )),
  )
  if (candidates.length !== 1) return null

  const inputs = Array.from(candidates[0].querySelectorAll("input"))
  const emailInputs = inputs.filter(isEmailInput)
  const passwordInputs = inputs.filter(isPasswordInput)
  if (emailInputs.length !== 1 || passwordInputs.length !== 1) return null

  return {
    form: candidates[0],
    fields: {
      email: emailInputs[0],
      password: passwordInputs[0],
    },
  }
}

export function findJobdivaSignInFields(
  root = document,
  isVisible = isVisibleDefault,
) {
  const found = findSignInForm(root)
  if (!found) return null
  const { form, fields } = found
  return isVisible(form) && isVisible(fields.email) && isVisible(fields.password)
    ? fields
    : null
}

export function getJobdivaSignInInputs(root = document) {
  const found = findSignInForm(root)
  return found ? new Set(Object.values(found.fields)) : new Set()
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

export async function fillJobdivaSignInCredentials({
  root = document,
  email,
  password,
  isVisible = isVisibleDefault,
  writeValue = writeInputValue,
}) {
  const fields = findJobdivaSignInFields(root, isVisible)
  const result = {
    foundForm: fields !== null,
    filledRoles: [],
    skippedExistingRoles: [],
    rejectedRoles: [],
  }
  if (!fields) return result

  for (const role of ["email", "password"]) {
    const input = fields[role]
    if (input.disabled || input.readOnly || !isVisible(input)) continue
    if (input.value.trim()) {
      result.skippedExistingRoles.push(role)
      continue
    }
    const value = role === "email" ? email : password
    if (
      value &&
      (role !== "password" ||
        (email.trim() &&
          fields.email.value.trim().toLowerCase() === email.trim().toLowerCase()))
    ) {
      try {
        await writeValue(input, value)
        if (input.value === value) result.filledRoles.push(role)
        else result.rejectedRoles.push(role)
      } catch {
        result.rejectedRoles.push(role)
      }
    }
  }

  return result
}
