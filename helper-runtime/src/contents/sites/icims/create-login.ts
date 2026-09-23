// @ts-nocheck
/**
 * iCIMS "Create a Login" credential field discovery and fill.
 */

import * as autofillSignupInformation from "../../../api/autofill-signup-information.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as enums from "../../../core/enums.js"
import * as workdaySignupInfo from "../../../store/workday-signup-info.js"
import * as utils from "./utils.js"

const CREATE_LOGIN_HEADER = "create a login"
const PROFILE_GROUP_SELECTOR = 'form#profileForm div[role="group"]'
const CANDIDATE_SUBHEADER_SELECTOR =
  "h2.iCIMS_SubHeader.iCIMS_SubHeader_Candidate"
const BASIC_PROFILE_TITLE_SELECTOR = "h2#iCIMS_BasicProfilePane_Title"

const FIELD_IDS = {
  login: "PersonProfileFields.Login",
  password: "PersonProfileFields.Password",
  confirmPassword: "PersonProfileFields.Password_Confirm",
}
const FIELD_ROLES = Object.keys(FIELD_IDS)

function groupHasCreateLoginHeader(group) {
  return Array.from(group.children).some((child) => {
    let text = utils.normalizeIcimsWhitespace(child.textContent).toLowerCase()
    if (typeof child.matches !== "function") return false
    return (
      (!!child.matches(BASIC_PROFILE_TITLE_SELECTOR) &&
        text === "create your profile") ||
      (child.matches(CANDIDATE_SUBHEADER_SELECTOR) &&
        (text === CREATE_LOGIN_HEADER ||
          text.startsWith(`${CREATE_LOGIN_HEADER} `)))
    )
  })
}

function getElementById(root, id) {
  let getter = root.getElementById
  return typeof getter === "function"
    ? getter.call(root, id)
    : root.querySelector(`[id="${id}"]`)
}

function isFillableInput(element) {
  if (!element || typeof element !== "object") return false
  return typeof element.value === "string" && typeof element.disabled === "boolean"
}

export function findIcimsCreateLoginFields(
  root = document,
  isVisible = utils.isVisibleIcimsElement,
) {
  let groups = Array.from(root.querySelectorAll(PROFILE_GROUP_SELECTOR))
  let matches = groups.filter(
    (group) => isVisible(group) && groupHasCreateLoginHeader(group),
  )
  if (matches.length !== 1) return { group: null, fields: {} }

  let group = matches[0]
  let fields = {}
  for (let role of FIELD_ROLES) {
    let input = getElementById(root, FIELD_IDS[role])
    if (isFillableInput(input) && group.contains(input)) {
      fields[role] = input
    }
  }
  return { group, fields }
}

export async function loadIcimsCreateLoginCredentials(
  answer,
  getSignupInfo = workdaySignupInfo.getWorkdaySignupInformation,
) {
  let signupInfo = await getSignupInfo().catch(() => null)
  return {
    registrationEmail:
      autofillSignupInformation.resolveSignupRegistrationEmail(answer),
    password: signupInfo?.password ?? "",
  }
}

export async function fillIcimsCreateLoginCredentials({
  root = document,
  registrationEmail,
  password,
  isVisible = utils.isVisibleIcimsElement,
  writeValue = inputUtils.fillDefaultInputField,
}) {
  let { group, fields } = findIcimsCreateLoginFields(root, isVisible)
  let result = {
    foundSection: group !== null,
    foundRoles: [],
    filledRoles: [],
    skippedExistingRoles: [],
    rejectedRoles: [],
  }
  if (!group) return result

  for (let role of FIELD_ROLES) {
    let input = fields[role]
    if (!input) continue

    result.foundRoles.push(role)
    if (input.disabled || !isVisible(input)) continue

    if (input.value.trim()) {
      result.skippedExistingRoles.push(role)
      continue
    }

    let value = role === "login" ? registrationEmail.trim() : password
    if (!value) continue

    try {
      await writeValue(input, value)
    } catch {
      result.rejectedRoles.push(role)
      continue
    }

    if (input.value === value) {
      result.filledRoles.push(role)
    } else {
      result.rejectedRoles.push(role)
    }
  }

  return result
}

export function excludeIcimsCreateLoginCredentialRules(
  rules,
  root = document,
  isVisible = utils.isVisibleIcimsElement,
) {
  let { group, fields } = findIcimsCreateLoginFields(root, isVisible)
  if (!group) return rules

  let credentialInputs = new Set(Object.values(fields))
  let filterRules = (items) =>
    items.flatMap((rule) => {
      if (credentialInputs.has(rule.$input)) return []
      if (
        rule.type !== enums.FIELD_TYPE.SECTION ||
        !Array.isArray(rule.children)
      ) {
        return [rule]
      }
      let children = filterRules(rule.children)
      return children.length > 0 ? [{ ...rule, children }] : []
    })

  return filterRules(rules)
}
