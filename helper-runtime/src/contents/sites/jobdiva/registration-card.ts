// @ts-nocheck
/**
 * JobDiva — registration card helpers (start-with-resume).
 */

function normalizeCardText(value) {
  return String(value ?? "")
    .replace(/[*\u2731]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

export function findJobdivaStartWithResumeCard(cards, isVisible) {
  const matches = Array.from(cards).filter((card) => {
    const headings = Array.from(
      card.querySelectorAll("h1, h2, h3, h4, h5, h6, div, span"),
    ).filter(
      (node) => normalizeCardText(node.textContent) === "start with my resume",
    )
    return (
      !card.matches("[disabled]") &&
      card.getAttribute("aria-disabled") !== "true" &&
      isVisible(card) &&
      headings.length === 1
    )
  })
  return matches.length === 1 ? matches[0] : null
}
