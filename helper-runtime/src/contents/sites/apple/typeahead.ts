// @ts-nocheck
/**
 * Apple Careers typeahead — progressive input steps for controlled fields.
 */

/** Build incremental input values from current → target (for typeahead keystroke simulation). */
export function buildTypeaheadInputSteps(currentValue, targetValue) {
  const current = currentValue ?? ""
  const target = targetValue ?? ""
  const steps = []

  if (current.length > 0) steps.push("")

  for (let i = 0; i < target.length; i++) {
    steps.push(target.slice(0, i + 1))
  }

  return steps.filter((step, index) => step !== steps[index - 1])
}
