// @ts-nocheck
/**
 * Signup registration email section helpers for autofill profile updates.
 */

export const SIGNUP_REGISTRATION_EMAIL_SECTION = "regenerationEmail"

export function resolveSignupRegistrationEmail(info) {
  const value = info?.regenerationEmail
  return typeof value === "string" && value.trim() ? value : ""
}

export function buildSignupRegistrationEmailUpdateBody(email) {
  return {
    updateSection: SIGNUP_REGISTRATION_EMAIL_SECTION,
    structuredData: {
      regenerationEmail: email.trim(),
    },
  }
}
