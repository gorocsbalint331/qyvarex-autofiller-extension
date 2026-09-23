// @ts-nocheck
/**
 * Local storage helpers for Workday signup password information.
 */

import { Storage } from "@plasmohq/storage"
import {
  shouldValidateWorkdayPasswordOnUpdate,
  validateWorkdayPassword,
} from "../utils/workday-signup-password.ts"

export const WORKDAY_SIGNUP_INFORMATION_STORAGE_KEY =
  "WORKDAY_SIGNUP_INFORMATION"

export const WORKDAY_SIGNUP_PASSWORD_REQUIREMENTS_ERROR =
  "Password does not meet Workday requirements."

const defaultStorage = new Storage({
  area: "local",
})

function isWorkdaySignupInformation(value) {
  if (!value || typeof value !== "object") return false
  const record = value
  return (
    typeof record.password === "string" &&
    typeof record.updatedAt === "number" &&
    Object.keys(record).every(
      (key) => key === "password" || key === "updatedAt",
    )
  )
}

export async function getWorkdaySignupInformation(
  storage = defaultStorage,
) {
  const value = await storage.get(WORKDAY_SIGNUP_INFORMATION_STORAGE_KEY)
  return isWorkdaySignupInformation(value) ? value : null
}

export async function saveWorkdaySignupInformation(
  { password },
  options = {},
) {
  if (!validateWorkdayPassword(password).isValid) {
    throw Error(WORKDAY_SIGNUP_PASSWORD_REQUIREMENTS_ERROR)
  }
  const storage = options.storage ?? defaultStorage
  const now = options.now ?? Date.now
  await storage.set(WORKDAY_SIGNUP_INFORMATION_STORAGE_KEY, {
    password,
    updatedAt: now(),
  })
}

export function getWorkdaySignupPasswordLocalUpdateAction({
  password,
  isLoaded,
  isTouched,
}) {
  return shouldValidateWorkdayPasswordOnUpdate(password)
    ? "save"
    : isLoaded && isTouched && password.trim().length === 0
      ? "clear"
      : "skip"
}

export async function hasValidWorkdaySignupInformation(
  password,
  storage = defaultStorage,
) {
  if (!password.trim()) return false
  const information = await getWorkdaySignupInformation(storage)
  return (
    !!information && validateWorkdayPassword(information.password).isValid
  )
}
