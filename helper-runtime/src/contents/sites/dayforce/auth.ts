// @ts-nocheck
/**
 * Dayforce — auth page mode detection and credential fill.
 */

import * as enums from "../../../core/enums.js"

export function getDayforceAuthPageMode(url = window.location.href) {
  try {
    const parsed = new URL(url)
    if (
      parsed.protocol !== "https:" ||
      parsed.host !== "dfid.dayforcehcm.com" ||
      parsed.username ||
      parsed.password
    ) {
      return null
    }
    return (
      parsed.pathname.match(
        /^\/globalidentity\/account\/(register|login)\/?$/,
      )?.[1] ?? null
    )
  } catch {
    return null
  }
}

function isVisible(el) {
  return (
    !el.closest('[hidden], [aria-hidden="true"]') &&
    el.getClientRects().length > 0 &&
    window.getComputedStyle(el).visibility !== "hidden"
  )
}

function findAuthInput(root, id) {
  const matches = Array.from(root.querySelectorAll(`input[id="${id}"]`))
  if (matches.length !== 1) return null
  const input = matches[0]
  const allowedTypes = id.toLowerCase().includes("password")
    ? ["password", "text"]
    : ["text", "email"]
  return allowedTypes.includes(input.type.toLowerCase()) ? input : null
}

function getAuthForm({ root = document, url, isVisible: checkVisible = isVisible } = {}) {
  const mode = getDayforceAuthPageMode(url)
  if (!mode) return null
  const mains = Array.from(root.querySelectorAll("main"))
  if (mains.length !== 1 || !checkVisible(mains[0])) return null

  const main = mains[0]
  const fieldIds =
    mode === "register"
      ? {
          email: "emailAddress",
          confirmEmail: "confirmEmailAddress",
          password: "password",
          confirmPassword: "confirmPassword",
        }
      : {
          email: "email",
          password: "password",
        }

  const fields = {}
  for (const [role, id] of Object.entries(fieldIds)) {
    const input = findAuthInput(main, id)
    if (!input) return null
    fields[role] = input
  }

  return { mode, main, fields }
}

export function getDayforceAuthNameRules(options = {}) {
  const form = getAuthForm(options)
  if (form?.mode !== "register") return []
  const checkVisible = options.isVisible ?? isVisible
  return [
    ["firstName", "First Name"],
    ["lastName", "Last Name"],
  ].flatMap(([id, label]) => {
    const input = findAuthInput(form.main, id)
    if (
      !input ||
      !checkVisible(input) ||
      input.disabled ||
      input.readOnly
    ) {
      return []
    }
    return [
      {
        type: enums.FIELD_TYPE.TEXT,
        label,
        required: input.required,
        $input: input,
      },
    ]
  })
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
  input.blur()
}

export async function fillDayforceAuthCredentials({
  email,
  password,
  writeValue = writeInputValue,
  ...options
}) {
  const form = getAuthForm(options)
  const result = {
    mode: getDayforceAuthPageMode(options.url),
    foundForm: form !== null,
    foundRoles: [],
    filledRoles: [],
    skippedExistingRoles: [],
    rejectedRoles: [],
  }
  if (!form) return result

  const checkVisible = options.isVisible ?? isVisible
  const emailTrimmed = email.trim()
  const emailMatches = (input) =>
    !!emailTrimmed &&
    input?.value.trim().toLowerCase() === emailTrimmed.toLowerCase()

  for (const role of Object.keys(form.fields)) {
    const input = form.fields[role]
    result.foundRoles.push(role)
    if (input.disabled || input.readOnly || !checkVisible(input)) continue

    const isEmailRole = role === "email" || role === "confirmEmail"
    if (
      input.value.trim() &&
      !(form.mode === "register" && isEmailRole)
    ) {
      result.skippedExistingRoles.push(role)
      continue
    }

    const value = isEmailRole ? emailTrimmed : password
    const canFill =
      value &&
      (isEmailRole ||
        (emailMatches(form.fields.email) &&
          (form.mode !== "register" ||
            emailMatches(form.fields.confirmEmail)))) &&
      (role !== "confirmPassword" ||
        form.fields.password?.value === password) &&
      (!(
        role === "password" && form.fields.confirmPassword?.value
      ) ||
        form.fields.confirmPassword.value === password)

    if (canFill) {
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
