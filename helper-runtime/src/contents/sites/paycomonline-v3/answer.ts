// @ts-nocheck
/**
 * Paycom Online v3 — answer shaping for work experience and education.
 */

export function normalizePaycomAnswer(answer) {
  if (!answer) return answer

  if (answer.regular) {
    Object.keys(answer.regular).forEach((key) => {
      if (typeof answer.regular[key] === "string") {
        answer.regular[key] = answer.regular[key].replace(/\u2011/g, "")
      }
    })
  }

  if (answer.workExperience && Array.isArray(answer.workExperience)) {
    answer.workExperience = answer.workExperience.map((item) => {
      const next = { ...item }
      if ("Start" in next) delete next.Start
      if ("End" in next) delete next.End

      let currentYesNo = ""
      if ("isCurrent" in next) {
        const raw = next.isCurrent
        if (raw === true || raw === "true") currentYesNo = "Yes"
        else if (raw === false || raw === "false") currentYesNo = "No"
        next.isCurrent = currentYesNo
      }

      if ("isCurrent" in next && currentYesNo) {
        next["Current Employer"] = currentYesNo
      } else if ("Current Employer" in next) {
        const raw = next["Current Employer"]
        if (raw === 1 || raw === "1") next["Current Employer"] = "Yes"
        else if (raw === 0 || raw === "0") next["Current Employer"] = "No"
      }

      if ("State / Territory" in next) {
        const state = next["State / Territory"]
        if (typeof state === "string" && /^\d+$/.test(state)) {
          next["State / Territory"] = (parseInt(state, 10) + 1).toString()
        }
      }

      return next
    })
  }

  if (answer.education && Array.isArray(answer.education)) {
    answer.education = answer.education.map((item) => {
      const next = { ...item }
      const institutionKey =
        "Institution Type" in next
          ? "Institution Type"
          : "Institution Information"

      if (institutionKey in next) {
        const raw = next[institutionKey]
        if (typeof raw === "string" && /^\d+$/.test(raw)) {
          next[institutionKey] = (parseInt(raw, 10) + 1).toString()
        }
      }

      if ("Graduated" in next) {
        const raw = next.Graduated
        if (raw === 1 || raw === "1" || raw === true || raw === "true") {
          next.Graduated = "Yes"
        } else if (
          raw === 0 ||
          raw === "0" ||
          raw === 2 ||
          raw === "2" ||
          raw === false ||
          raw === "false"
        ) {
          next.Graduated = "No"
        }
      }

      if ("Degree" in next) {
        const degree = next.Degree
        if (typeof degree === "string") {
          const lower = degree.toLowerCase()
          if (lower.includes("master")) next.Degree = "Masters"
          else if (lower.includes("bachelor")) next.Degree = "Bachelors"
          else if (lower.includes("associate")) next.Degree = "Associates"
          else if (lower.includes("doctor")) next.Degree = "Doctorate"
          else if (lower.includes("high school"))
            next.Degree = "High School Diploma"
          else if (lower.includes("ged")) next.Degree = "GED"
        }
      }

      return next
    })
  }

  return answer
}
