// @ts-nocheck
/**
 * Workday signup password validation rules.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

let specialCharacterPattern = /[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?`~]/

let passwordRequirements = [
  {
    id: "minLength",
    label: "At least 12 characters",
    isMet: (password) => password.length >= 12,
  },
  {
    id: "uppercase",
    label: "Uppercase letter",
    isMet: (password) => /[A-Z]/.test(password),
  },
  {
    id: "lowercase",
    label: "Lowercase letter",
    isMet: (password) => /[a-z]/.test(password),
  },
  {
    id: "number",
    label: "Number",
    isMet: (password) => /\d/.test(password),
  },
  {
    id: "specialCharacter",
    label: "Special character",
    isMet: (password) => specialCharacterPattern.test(password),
  },
]

let validateWorkdayPassword = (password) => {
  let requirements = passwordRequirements.map((requirement) => ({
    id: requirement.id,
    label: requirement.label,
    isMet: requirement.isMet(password),
  }))
  return {
    isValid: requirements.every((requirement) => requirement.isMet),
    requirements,
  }
}

let isValidWorkdayPassword = (password) =>
  validateWorkdayPassword(password).isValid

let shouldValidateWorkdayPasswordOnUpdate = (password) =>
  password.trim().length > 0

export {
  isValidWorkdayPassword,
  shouldValidateWorkdayPasswordOnUpdate,
  validateWorkdayPassword,
}
