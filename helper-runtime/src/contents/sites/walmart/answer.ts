// @ts-nocheck
/**
 * Walmart answer shaping — LinkedIn/GitHub/website URL fallbacks and middle initial.
 */

import * as enums from "../../../core/enums.js"

function normalizeSpace(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeLower(value) {
  return normalizeSpace(value).toLowerCase()
}

function isEmptyValue(value) {
  return Array.isArray(value)
    ? value.every(isEmptyValue)
    : null == value || "" === normalizeSpace(value)
}

function firstNonEmpty(value) {
  const candidate = Array.isArray(value)
    ? value.find((item) => !isEmptyValue(item))
    : value
  return isEmptyValue(candidate) ? null : normalizeSpace(candidate)
}

function firstPresent(...values) {
  for (const value of values) {
    const found = firstNonEmpty(value)
    if (found) return found
  }
  return null
}

function extractProfileUrls(autofillInfo) {
  const personal = autofillInfo?.personalInfo ?? {}
  return {
    linkedin: firstPresent(
      personal.linkedin_link,
      personal.linkedin,
      personal.linkedinUrl,
      autofillInfo?.linkedinUrl,
    ),
    github: firstPresent(
      personal.github_link,
      personal.github_url,
      personal.githubUrl,
      autofillInfo?.githubUrl,
    ),
    website: firstPresent(
      personal.personal_site_link,
      personal.personal_site,
      personal.personalSite,
      personal.websiteUrl,
      autofillInfo?.personalSite,
      autofillInfo?.websiteUrl,
    ),
  }
}

function resolveUrlFallback(label, autofillInfo) {
  const lower = normalizeLower(label)
  const urls = extractProfileUrls(autofillInfo)
  const isLinkedIn = /linked\s*in/.test(lower)
  const isGitHub = /git\s*hub/.test(lower)
  const isPortfolio = /portfolio/.test(lower)
  const isWebsite = /website|personal\s+site/.test(lower)

  if (!isLinkedIn || isGitHub || isPortfolio) {
    if (!isGitHub || isLinkedIn || isPortfolio) {
      if (isLinkedIn || isGitHub || isPortfolio) {
        return urls.linkedin || urls.github || urls.website
      }
      return isWebsite ? urls.website : null
    }
    return urls.github
  }
  return urls.linkedin
}

function isMiddleInitialLabel(label) {
  return /\bmiddle\s+initial\b/i.test(label)
}

function toMiddleInitial(value) {
  const text = firstNonEmpty(value)
  return text ? text.charAt(0).toUpperCase() : null
}

function applyWalmartUrlFallbacks(answer, rules, autofillInfo) {
  const regular = { ...(answer.regular || {}) }

  for (const rule of rules) {
    if (rule.type !== enums.FIELD_TYPE.TEXT) continue

    if (isMiddleInitialLabel(rule.label)) {
      const initial = toMiddleInitial(regular[rule.label])
      if (initial) regular[rule.label] = initial
      continue
    }

    if (!isEmptyValue(regular[rule.label])) continue

    const fallback = resolveUrlFallback(rule.label, autofillInfo)
    if (fallback) regular[rule.label] = fallback
  }

  return { ...answer, regular }
}

export { applyWalmartUrlFallbacks }
