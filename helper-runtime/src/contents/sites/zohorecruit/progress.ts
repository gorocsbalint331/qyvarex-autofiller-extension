// @ts-nocheck
/**
 * Zoho Recruit — section progress helpers.
 */

export function shouldMarkZohoSectionFilled(answers, sectionRules) {
  return (
    Array.isArray(answers) &&
    answers.length > 0 &&
    Array.isArray(sectionRules) &&
    sectionRules.some(
      (rule) =>
        Array.isArray(rule?.children) && rule.children.length > 0,
    )
  )
}
