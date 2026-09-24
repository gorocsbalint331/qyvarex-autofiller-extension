// @ts-nocheck
/**
 * SuccessFactors — registration email/password field detection and fill.
 */

import * as enums from "../../../core/enums.js"
import * as workdaySignupInfo from "../../../store/workday-signup-info.js"
import * as signInCredentials from "./signin-credentials.ts"

const CAREER_FORM = "form#careerform"
const LOGIN_CONTENT = ".content.extLoginFormContent"
const FIELDS_TABLE = "table#fieldsContainer"
const PASSWORD_FIELD_IDS = {
  password: { id: "fbclc_pwd", type: "password" },
  confirmPassword: { id: "fbclc_pwdConf", type: "password" },
}
const PASSWORD_ROLES = Object.keys(PASSWORD_FIELD_IDS)

function isVisible(element) {
  if (
    element.hidden ||
    "true" === element.getAttribute("aria-hidden") ||
    element.classList.contains("displayNone")
  ) {
    return false
  }
  const style = window.getComputedStyle(element)
  return "none" !== style.display && "hidden" !== style.visibility
}

async function writeInputValue(input, value) {
  input.focus()
  const proto = Object.getPrototypeOf(input)
  const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set
  if (!setter) throw Error("input value setter unavailable")
  setter.call(input, value)
  input.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }))
  input.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }))
  input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }))
  input.blur()
}

function findRegistrationSection(root) {
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
  const section = form.querySelector(LOGIN_CONTENT)
  const fieldsTable = section?.querySelector(FIELDS_TABLE)
  return section && fieldsTable ? { section, fieldsTable } : null
}

function findPasswordInput(fieldsTable, role) {
  const config = PASSWORD_FIELD_IDS[role]
  const matches = Array.from(
    fieldsTable.querySelectorAll(`[id="${config.id}"]`),
  )
  if (1 !== matches.length) return null
  const input = matches[0]
  return input.id === config.id &&
    input.name === config.id &&
    input.type.toLowerCase() === config.type
    ? input
    : null
}

function findSuccessFactorsRegistrationPasswordFields(
  root = document,
  isVisibleFn = isVisible,
) {
  const sectionInfo = findRegistrationSection(root)
  if (!sectionInfo || !isVisibleFn(sectionInfo.section)) {
    return { section: null, fields: {} }
  }
  const fields = {}
  for (const role of PASSWORD_ROLES) {
    const input = findPasswordInput(sectionInfo.fieldsTable, role)
    if (!input) return { section: null, fields: {} }
    fields[role] = input
  }
  return { section: sectionInfo.section, fields }
}

function getSuccessFactorsRegistrationPasswordInputs(root = document) {
  const sectionInfo = findRegistrationSection(root)
  const signInPasswords =
    signInCredentials.getSuccessFactorsSignInPasswordInputs(root)
  if (!sectionInfo) return signInPasswords
  const registrationPasswords = PASSWORD_ROLES.map((role) =>
    findPasswordInput(sectionInfo.fieldsTable, role),
  ).filter((input) => null !== input)
  return /* @__PURE__ */ new Set([...registrationPasswords, ...signInPasswords])
}

async function loadSuccessFactorsRegistrationPassword(
  getSignupInfo = workdaySignupInfo.getWorkdaySignupInformation,
) {
  const info = await getSignupInfo().catch(() => null)
  return info?.password ?? ""
}

async function fillSuccessFactorsRegistrationPasswords({
  root = document,
  password,
  isVisible: isVisibleFn = isVisible,
  writeValue = writeInputValue,
}) {
  const { section, fields } = findSuccessFactorsRegistrationPasswordFields(
    root,
    isVisibleFn,
  )
  const result = {
    foundSection: null !== section,
    foundRoles: [],
    filledRoles: [],
    skippedExistingRoles: [],
    rejectedRoles: [],
  }
  if (!section) return result

  for (const role of PASSWORD_ROLES) {
    const input = fields[role]
    if (input && (result.foundRoles.push(role), !input.disabled && isVisibleFn(input))) {
      if (input.value.trim()) {
        result.skippedExistingRoles.push(role)
        continue
      }
      if (password) {
        try {
          await writeValue(input, password)
        } catch {
          result.rejectedRoles.push(role)
          continue
        }
        if (input.value === password) {
          result.filledRoles.push(role)
        } else {
          result.rejectedRoles.push(role)
        }
      }
    }
  }
  return result
}

function excludeSuccessFactorsRegistrationPasswordRules(rules, root = document) {
  const passwordInputs = getSuccessFactorsRegistrationPasswordInputs(root)
  if (0 === passwordInputs.size) return rules

  const filterRules = (items) =>
    items.flatMap((rule) => {
      if (passwordInputs.has(rule.$input)) return []
      if (
        rule.type !== enums.FIELD_TYPE.SECTION ||
        !Array.isArray(rule.children)
      ) {
        return [rule]
      }
      const children = filterRules(rule.children)
      return children.length > 0 ? [{ ...rule, children }] : []
    })

  return filterRules(rules)
}

const EMAIL_FIELD_IDS = {
  email: "fbclc_userName",
  confirmEmail: "fbclc_emailConf",
}
const EMAIL_ROLES = ["email", "confirmEmail"]

function findEmailInput(fieldsTable, role) {
  const id = EMAIL_FIELD_IDS[role]
  const matches = Array.from(fieldsTable.querySelectorAll(`[id="${id}"]`))
  if (1 !== matches.length) return null
  const input = matches[0]
  return input.id === id &&
    input.name === id &&
    ["text", "email"].includes(input.type.toLowerCase())
    ? input
    : null
}

function findSuccessFactorsRegistrationEmailFields(
  root = document,
  isVisibleFn = isVisible,
) {
  const sectionInfo = findRegistrationSection(root)
  if (!sectionInfo || !isVisibleFn(sectionInfo.section)) {
    return { section: null, fields: {} }
  }
  const email = findEmailInput(sectionInfo.fieldsTable, "email")
  const confirmEmail = findEmailInput(sectionInfo.fieldsTable, "confirmEmail")
  return email && confirmEmail
    ? { section: sectionInfo.section, fields: { email, confirmEmail } }
    : { section: null, fields: {} }
}

function getSuccessFactorsRegistrationEmailInputs(root = document) {
  const sectionInfo = findRegistrationSection(root)
  return sectionInfo
    ? new Set(
        EMAIL_ROLES.map((role) =>
          findEmailInput(sectionInfo.fieldsTable, role),
        ).filter((input) => null !== input),
      )
    : /* @__PURE__ */ new Set()
}

async function fillSuccessFactorsRegistrationEmails({
  root = document,
  email,
  isVisible: isVisibleFn = isVisible,
  writeValue = writeInputValue,
}) {
  const { section, fields } = findSuccessFactorsRegistrationEmailFields(
    root,
    isVisibleFn,
  )
  const result = {
    foundSection: null !== section,
    foundRoles: [],
    filledRoles: [],
    rejectedRoles: [],
  }
  if (!section) return result

  const trimmedEmail = email.trim()
  for (const role of EMAIL_ROLES) {
    const input = fields[role]
    if (
      input &&
      (result.foundRoles.push(role),
      trimmedEmail &&
        !input.disabled &&
        !input.readOnly &&
        isVisibleFn(input))
    ) {
      try {
        if (input.value !== trimmedEmail) await writeValue(input, trimmedEmail)
        if (input.value === trimmedEmail) {
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

function excludeSuccessFactorsRegistrationEmailRules(rules, root = document) {
  const emailInputs = getSuccessFactorsRegistrationEmailInputs(root)
  if (0 === emailInputs.size) return rules

  const filterRules = (items) =>
    items.flatMap((rule) => {
      if (emailInputs.has(rule.$input)) return []
      if (
        rule.type !== enums.FIELD_TYPE.SECTION ||
        !Array.isArray(rule.children)
      ) {
        return [rule]
      }
      const children = filterRules(rule.children)
      return children.length ? [{ ...rule, children }] : []
    })

  return filterRules(rules)
}

export {
  excludeSuccessFactorsRegistrationEmailRules,
  excludeSuccessFactorsRegistrationPasswordRules,
  fillSuccessFactorsRegistrationEmails,
  fillSuccessFactorsRegistrationPasswords,
  findSuccessFactorsRegistrationEmailFields,
  findSuccessFactorsRegistrationPasswordFields,
  getSuccessFactorsRegistrationEmailInputs,
  getSuccessFactorsRegistrationPasswordInputs,
  loadSuccessFactorsRegistrationPassword,
}
