// @ts-nocheck
/**
 * Normalize / extract structured skill lists from profile payloads.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

let normalizeSkillStrings = (value) =>
  Array.isArray(value)
    ? value
        .map((item) => ("string" == typeof item ? item : `${item ?? ""}`))
        .filter((item) => item.length > 0)
    : []

let normalizeSkillListEntries = (value) =>
  Array.isArray(value)
    ? value.flatMap((entry) => {
        if (!entry || "object" != typeof entry) return []
        let category =
          "string" == typeof entry.category && entry.category.length > 0
            ? entry.category
            : "DEFAULT"
        let skills = normalizeSkillStrings(entry.skills)
        return 0 === skills.length
          ? []
          : [
              {
                category,
                skills,
              },
            ]
      })
    : []

let flattenSkillsSource = (value) =>
  Array.isArray(value)
    ? normalizeSkillStrings(value)
    : value && "object" == typeof value
      ? Object.values(value).flatMap((item) => normalizeSkillStrings(item))
      : []

let extractSkillList = (profile) => {
  let structured = normalizeSkillListEntries(profile?.skillList)
  return structured.length > 0 || Array.isArray(profile?.skillList)
    ? structured.flatMap((entry) => entry.skills)
    : flattenSkillsSource(profile?.skills)
}

let toStructuredSkillList = (value) => {
  if (Array.isArray(value)) {
    let skills = normalizeSkillStrings(value)
    return skills.length > 0
      ? [
          {
            category: "DEFAULT",
            skills,
          },
        ]
      : []
  }
  return value && "object" == typeof value
    ? Object.entries(value).flatMap(([category, skillsValue]) => {
        let skills = normalizeSkillStrings(skillsValue)
        return skills.length > 0
          ? [
              {
                category,
                skills,
              },
            ]
          : []
      })
    : []
}

let withStructuredSkillList = (profile, skillsSource) => {
  let next = {
    ...profile,
  }
  delete next.skills
  return {
    ...next,
    skillList: toStructuredSkillList(skillsSource),
  }
}

export { extractSkillList, withStructuredSkillList }
