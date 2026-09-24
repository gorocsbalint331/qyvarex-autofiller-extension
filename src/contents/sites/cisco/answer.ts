// @ts-nocheck
/**
 * Cisco Careers answer shaping — normalize country, phone, education, and
 * work-experience keys to match Cisco form labels.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

function normalizeCountryName(raw) {
  if (typeof raw !== "string") return ""
  const text = raw.trim().toLowerCase()
  if (!text) return ""
  if (text.includes("canada")) return "Canada"
  if (
    text.includes("united states") ||
    text === "us" ||
    text === "u.s." ||
    text === "usa"
  ) {
    return "United States"
  }
  return ""
}

function toCountryOrRegionLabel(country) {
  return country === "United States" ? "United States of America" : country
}

function toCountryPhoneCodeLabel(country) {
  if (country === "United States") return "United States"
  if (country === "Canada") return "Canada"
  return ""
}

function firstDefinedValue(value) {
  if (value == null) return
  if (Array.isArray(value)) {
    for (const item of value) {
      const nested = firstDefinedValue(item)
      if (nested !== undefined) return nested
    }
    return
  }
  if (typeof value !== "string" || value.trim() !== "") return value
}

function pickFirstDefined(obj, keys) {
  for (const key of keys) {
    const value = firstDefinedValue(obj?.[key])
    if (value !== undefined) return value
  }
}

function copyIfMissing(obj, targetKey, sourceKeys) {
  if (!obj || pickFirstDefined(obj, [targetKey]) != null) return
  const value = pickFirstDefined(obj, sourceKeys)
  if (value != null) obj[targetKey] = value
}

function isTruthyCurrent(value) {
  if (value === true || value === 1) return true
  const text = String(value ?? "")
    .trim()
    .toLowerCase()
  return (
    text === "true" || text === "yes" || text === "1" || text === "current"
  )
}

function joinSkills(value) {
  if (Array.isArray(value)) {
    return value
      .map((item) => String(firstDefinedValue(item) ?? "").trim())
      .filter(Boolean)
      .join(", ")
  }
  if (typeof value === "string") {
    return value
      .split(/\r?\n|,/)
      .map((part) => part.trim())
      .filter(Boolean)
      .join(", ")
  }
  return ""
}

export function formatAnswer(answer) {
  const country =
    normalizeCountryName(answer.country) ||
    normalizeCountryName(
      answer.regular
        ? pickFirstDefined(answer.regular, [
            "Country",
            "Country or Region",
            "country",
            "countryOrRegion",
          ])
        : "",
    )

  if (country) answer.country = country

  if (answer.regular) {
    copyIfMissing(answer.regular, "Legal Given Name(s)", [
      "First Name",
      "Legal Given Name",
      "Given Name",
      "First",
      "firstName",
    ])
    copyIfMissing(answer.regular, "Legal Family Name", [
      "Last Name",
      "Legal Family Name",
      "Family Name",
      "Surname",
      "lastName",
    ])
    copyIfMissing(answer.regular, "Postal District or City", [
      "City",
      "Current City",
      "Location",
      "City / Location",
    ])

    const preferredName = pickFirstDefined(answer.regular, [
      "Preferred Name",
      "preferredName",
    ])
    if (
      preferredName != null &&
      pickFirstDefined(answer.regular, ["I have a preferred name"]) == null
    ) {
      answer.regular["I have a preferred name"] = "Yes"
    }

    const resolvedPhoneCountryCode =
      phoneCountryCode.resolvePhoneCountryCodeAnswer(answer)

    for (const key of Object.keys(answer.regular)) {
      const raw = answer.regular[key]
      const value = firstDefinedValue(raw)
      const keyLower = key.trim().toLowerCase()

      if (keyLower === "country phone code") {
        if (country) {
          answer.regular[key] = toCountryPhoneCodeLabel(country)
          continue
        }
        const fromValue = normalizeCountryName(
          typeof value === "string" ? value : "",
        )
        if (fromValue) {
          answer.regular[key] = toCountryPhoneCodeLabel(fromValue)
        }
        continue
      }

      if (
        keyLower === "country or region" ||
        keyLower === "country" ||
        (country && /country|region/i.test(key))
      ) {
        if (country) {
          answer.regular[key] = toCountryOrRegionLabel(country)
          continue
        }
        const fromValue = normalizeCountryName(
          typeof value === "string" ? value : "",
        )
        if (fromValue) {
          answer.regular[key] = toCountryOrRegionLabel(fromValue)
        }
        continue
      }

      if (
        typeof value === "string" &&
        /phone/i.test(key) &&
        keyLower !== "country phone code"
      ) {
        answer.regular[key] = phoneCountryCode.toNationalPhoneValue(
          value,
          resolvedPhoneCountryCode,
        )
      }
    }

    if (country) {
      answer.regular["Country or Region"] = toCountryOrRegionLabel(country)
      answer.regular["Country Phone Code"] = toCountryPhoneCodeLabel(country)
      if (Object.prototype.hasOwnProperty.call(answer.regular, "Country")) {
        answer.regular.Country = toCountryOrRegionLabel(country)
      }
    }

    const skills =
      joinSkills(
        pickFirstDefined(answer.regular, [
          "Skills",
          "skills",
          "Separate each skill with a comma.",
        ]),
      ) || joinSkills(answer.skills)
    if (skills) {
      answer.regular.Skills = skills
      answer.regular["Separate each skill with a comma."] = skills
    }
  }

  if (Array.isArray(answer.education)) {
    for (const item of answer.education) {
      if (!item) continue
      copyIfMissing(item, "School or University", [
        "School",
        "School Name",
        "University",
        "University Name",
        "Institution",
        "College",
      ])
      copyIfMissing(item, "Highest Degree Obtained or Pursuing", [
        "Degree",
        "Education Level",
        "Highest Degree",
        "Degree Type",
      ])
      copyIfMissing(item, "From", [
        "Start",
        "Start Date",
        "start",
        "startDate",
        "From Date",
      ])
      copyIfMissing(item, "To", [
        "End",
        "End Date",
        "end",
        "endDate",
        "To Date",
      ])
    }
  }

  if (Array.isArray(answer.workExperience)) {
    for (const item of answer.workExperience) {
      if (!item) continue

      copyIfMissing(item, "Company", ["Employer", "Company Name"])
      copyIfMissing(item, "Job Title", ["Title", "Position"])
      copyIfMissing(item, "From", [
        "Start",
        "Start Date",
        "start",
        "startDate",
        "From Date",
      ])
      copyIfMissing(item, "Role Description", [
        "Description",
        "Job Description",
        "description",
        "jobDescriptions",
        "Job Descriptions",
      ])

      if (pickFirstDefined(item, ["To"]) == null) {
        const end = pickFirstDefined(item, [
          "End",
          "End Date",
          "end",
          "endDate",
          "To Date",
        ])
        if (end != null) {
          item.To = end
        } else if (
          isTruthyCurrent(item.isCurrent) ||
          isTruthyCurrent(item["Is Current"]) ||
          isTruthyCurrent(item.current) ||
          isTruthyCurrent(item.Current) ||
          isTruthyCurrent(item["I currently work here"]) ||
          isTruthyCurrent(item.currentlyWorkHere)
        ) {
          item.To = "current"
        }
      }

      if (pickFirstDefined(item, ["I currently work here"]) == null) {
        if (String(item.To ?? "").trim().toLowerCase() === "current") {
          item["I currently work here"] = "Yes"
        } else if (
          isTruthyCurrent(item.isCurrent) ||
          isTruthyCurrent(item["Is Current"]) ||
          isTruthyCurrent(item.current) ||
          isTruthyCurrent(item.Current) ||
          isTruthyCurrent(item.currentlyWorkHere)
        ) {
          item["I currently work here"] = "Yes"
        } else if (pickFirstDefined(item, ["To"]) != null) {
          item["I currently work here"] = "No"
        }
      }
    }
  }

  return answer
}
