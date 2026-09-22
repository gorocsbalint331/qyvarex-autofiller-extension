// @ts-nocheck
/**
 * Describe / choose Greenhouse "Add another" buttons for edu/emp sections.
 */

function normalizeText(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
}

function descriptorMatchesHint(descriptor, hint) {
  const needle = normalizeText(hint)
  return [
    descriptor.id,
    descriptor.className,
    descriptor.text,
    descriptor.sectionId,
    descriptor.sectionClassName,
  ].some((part) => normalizeText(part).includes(needle))
}

/** Pick the best matching "Add another" button descriptor, or the first. */
export function chooseGreenhouseAddAnotherButton(descriptors, hint) {
  if (descriptors.length === 0) return null
  return (
    descriptors.find((descriptor) =>
      descriptorMatchesHint(descriptor, hint),
    ) ?? descriptors[0]
  )
}

/** Snapshot attributes used to identify an Add-another control. */
export function describeGreenhouseAddAnotherButton(element) {
  const section = element.closest(
    "#education_section, .education--container, #employment_section, .employment--container",
  )
  return {
    element,
    id: element.id || null,
    className: typeof element.className === "string" ? element.className : null,
    text: element.textContent?.trim() || null,
    sectionId: section?.id || null,
    sectionClassName: section?.className || null,
  }
}
