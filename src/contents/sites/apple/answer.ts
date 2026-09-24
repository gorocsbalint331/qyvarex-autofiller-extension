// @ts-nocheck
/**
 * Apple Careers answer shaping — skills, education keys, and phone E.164 → national.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

function remapEducationKeys(items, keyMap) {
  if (!Array.isArray(items)) return []
  return items.map((item) => {
    if (!item || typeof item !== "object") return item
    const next = { ...item }
    for (const [fromKey, toKey] of Object.entries(keyMap)) {
      if (next[toKey] === undefined && next[fromKey] !== undefined) {
        next[toKey] = next[fromKey]
      }
    }
    return next
  })
}

function splitSkillsList(value) {
  if (Array.isArray(value)) {
    return value
      .flatMap((entry) => String(entry ?? "").split(/[,\n]/))
      .map((entry) => entry.trim())
      .filter(Boolean)
  }
  if (typeof value === "string") {
    return value
      .split(/[,\n]/)
      .map((entry) => entry.trim())
      .filter(Boolean)
  }
  return []
}

/** Normalize Falcon answers for Apple form labels (skills, Field of Study, phones). */
export function formatAnswer(answer) {
  answer.skills = splitSkillsList(answer.skills)
  answer.education = remapEducationKeys(answer.education, {
    Study: "Field of Study",
  })

  if (answer.regular) {
    const skillsKey = Object.keys(answer.regular).find(
      (key) => key.toLowerCase() === "skills",
    )
    if (skillsKey) {
      const merged = [
        ...answer.skills,
        ...splitSkillsList(answer.regular[skillsKey]),
      ]
      answer.skills = Array.from(new Set(merged))
    }
  }

  if (answer.regular) {
    const phoneKeys = Object.keys(answer.regular).filter((key) => {
      const lower = key.toLowerCase()
      return (
        (lower.includes("phone") || lower.includes("mobile")) &&
        !lower.includes("country code") &&
        !lower.includes("dial code")
      )
    })
    phoneKeys.forEach((key) => {
      const value = answer.regular[key]
      if (typeof value === "string" && value.trim().startsWith("+")) {
        answer.regular[key] = phoneCountryCode.resolvePhoneFieldValue(value)
      }
    })
  }

  return answer
}
