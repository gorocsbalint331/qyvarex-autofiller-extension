// @ts-nocheck
/**
 * JobScore — work-experience record normalizers.
 */

export function getEmployerFromRecord(record) {
  return String(
    record.Employer ??
      record.employer ??
      record.Company ??
      record.company ??
      record["Company Name"] ??
      record.companyName ??
      record.Organization ??
      record.organization ??
      "",
  ).trim()
}

export function getTitleFromRecord(record) {
  return String(
    record.Title ??
      record.title ??
      record["Job Title"] ??
      record.jobTitle ??
      record.Position ??
      record.position ??
      record.Role ??
      record.role ??
      "",
  ).trim()
}

function firstPresent(record, keys) {
  for (const key of keys) {
    const value = record[key]
    if (value != null && String(value).trim() !== "") return value
  }
}

export function isCurrentWorkExperienceRecord(record) {
  const value = firstPresent(record, [
    "isCurrent",
    "current",
    "Current",
    "Current Employer",
    "Currently Work Here",
  ])
  return (
    value === true ||
    String(value).toLowerCase() === "true" ||
    String(value).toLowerCase() === "yes" ||
    String(value).toLowerCase() === "present"
  )
}

export function normalizeJobScoreWorkExperienceRecord(record) {
  const next = { ...record }
  const employer = getEmployerFromRecord(record)
  const title = getTitleFromRecord(record)
  const start = firstPresent(record, [
    "Start",
    "start",
    "Start Date",
    "startDate",
    "start_date",
    "From",
    "from",
  ])
  const end = firstPresent(record, [
    "End",
    "end",
    "End Date",
    "endDate",
    "end_date",
    "To",
    "to",
  ])

  if (employer && !firstPresent(next, ["Employer", "employer"])) {
    next.Employer = employer
  }
  if (title && !firstPresent(next, ["Title", "title"])) {
    next.Title = title
  }
  if (start && !firstPresent(next, ["Start", "start"])) {
    next.Start = start
  }
  if (end && !firstPresent(next, ["End", "end"])) {
    next.End = end
  }
  if (isCurrentWorkExperienceRecord(next)) {
    next.End = "present"
  }
  return next
}

export function normalizeWorkExperienceRecords(records) {
  if (!Array.isArray(records) || records.length === 0) return []

  const normalized = records
    .map(normalizeJobScoreWorkExperienceRecord)
    .filter(
      (record) => getEmployerFromRecord(record) && getTitleFromRecord(record),
    )

  const withPresent = normalized.map((record) => {
    const isCurrent = isCurrentWorkExperienceRecord(record)
    return isCurrent ? { ...record, End: "present" } : record
  })

  const byEmployer = new Map()
  for (const record of withPresent) {
    const employer = getEmployerFromRecord(record)
    if (!byEmployer.has(employer)) byEmployer.set(employer, [])
    byEmployer.get(employer).push(record)
  }

  return Array.from(byEmployer.values()).flat()
}
