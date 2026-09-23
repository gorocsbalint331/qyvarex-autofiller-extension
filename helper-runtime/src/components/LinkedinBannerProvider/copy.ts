// @ts-nocheck
/**
 * LinkedIn banner copy helpers for match messaging.
 */

export const MISSING_JOB_MESSAGE =
  "Add this job to view your Match Score and tailor your resume."

export function getMatchMessage(scoreLevel) {
  switch (scoreLevel) {
    case "Excellent":
      return "Good Match, Continue to Make it Unmissable."
    case "Fair":
      return "Partial Match, Let's Make it Perfect."
    default:
      return "Low match to this role"
  }
}

export function getPoorMatchDescription(matchedSkillCount, totalSkillCount) {
  return {
    emphasis: `${matchedSkillCount}/${totalSkillCount}`,
    text: "keywords are present in your resume, let's fix it",
  }
}
