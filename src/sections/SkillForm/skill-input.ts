// @ts-nocheck
/**
 * Skill tag input helpers.
 */

export function addSkillAndResetInput(skills, inputValue) {
  const trimmed = inputValue.trim()
  if (!trimmed) {
    return { skills, inputValue }
  }
  return {
    skills: [...skills, trimmed],
    inputValue: "",
  }
}
