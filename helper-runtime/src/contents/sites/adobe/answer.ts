// @ts-nocheck
/**
 * Adobe Careers answer shaping — normalize phone, dates, education, and
 * work-experience keys to match Adobe form labels.
 */

function firstValue(value) {
  return Array.isArray(value) ? value[0] : value
}

function extractYear(raw) {
  if (!raw) return raw
  const leading = String(raw).match(/^(\d{4})[-/]/)
  if (leading) return leading[1]
  const any = String(raw).match(/(\d{4})/)
  return any ? any[1] : raw
}

function normalizePhoneNumber(raw) {
  let digits = String(raw).replace(/\D/g, "")
  if (digits.length === 11 && digits[0] === "1") {
    digits = digits.substring(1)
  }
  if (digits.length === 10) {
    return `${digits.substring(0, 3)}-${digits.substring(3, 6)}-${digits.substring(6)}`
  }
  return raw
}

function formatWorkExperienceItem(item) {
  if (!item) return

  if (item.From) {
    item.From = extractYear(firstValue(item.From))
  } else if (item.Start) {
    item.From = extractYear(firstValue(item.Start))
  }

  if (item.To) {
    const raw = firstValue(item.To)
    if (raw) item["To (Actual or Expected)"] = extractYear(raw)
  } else if (item["To (Actual or Expected)"]) {
    const raw = firstValue(item["To (Actual or Expected)"])
    if (raw) item["To (Actual or Expected)"] = extractYear(raw)
  } else if (item.End) {
    if (item.End) item["To (Actual or Expected)"] = extractYear(item.End)
  }

  if (item["I currently work here"]) {
    const current = item["I currently work here"]
    item["I currently work here"] =
      Array.isArray(current) && current.length > 0
        ? current
        : item?.isCurrent === true
          ? ["I currently work here"]
          : []
  } else if (item?.isCurrent === true) {
    item["I currently work here"] = ["I currently work here"]
  }

  if (item["Role description"]) {
    item["Job Description"] = item["Role description"]
  } else if (item.jobDescriptions) {
    item["Job Description"] = item.jobDescriptions
  } else if (item["Job Descriptions"]) {
    item["Job Description"] = item["Job Descriptions"]
  }
}

function formatEducationItem(item) {
  if (!item) return

  if (item["School or University"]) {
    item["School or University"] = firstValue(item["School or University"])
  } else if (item.School) {
    item["School or University"] = item.School
  }

  if (item.Degree && !Array.isArray(item.Degree)) {
    item.Degree = [item.Degree]
  }

  if (item["Field of Study"]) {
    item["Field of Study"] = firstValue(item["Field of Study"])
  } else if (item["Field of study"]) {
    item["Field of Study"] = firstValue(item["Field of study"])
  } else if (item.Study) {
    item["Field of Study"] = item.Study
  }

  if (item.From) {
    item.From = extractYear(firstValue(item.From))
  } else if (item.Start) {
    item.From = extractYear(firstValue(item.Start))
  }

  if (item["To (Actual or Expected)"]) {
    const raw = firstValue(item["To (Actual or Expected)"])
    if (raw) item["To (Actual or Expected)"] = extractYear(raw)
  } else if (item.End) {
    if (item.End) item["To (Actual or Expected)"] = extractYear(item.End)
  }
}

/** Mutates and returns the Falcon answer for Adobe field labels. */
export function formatAnswer(answer) {
  if (answer.regular) {
    for (const key in answer.regular) {
      if (key.toLowerCase().includes("phone number") && answer.regular[key]) {
        answer.regular[key] = normalizePhoneNumber(answer.regular[key])
      }
    }
  }

  if (answer.workExperience?.length > 0) {
    for (const item of answer.workExperience) {
      formatWorkExperienceItem(item)
    }
  }

  if (answer.education?.length > 0) {
    for (const item of answer.education) {
      formatEducationItem(item)
    }
  }

  return answer
}
