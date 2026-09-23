// @ts-nocheck
/**
 * Resolve / insert the DOM mount point for the LinkedIn match banner.
 */

export const BANNER_MOUNT_ID = "jobright-linkedin-banner-mount"

const HEADING_SELECTOR = "h1, h2, h3, [role='heading']"
const MAIN_SELECTOR = "main, .scaffold-layout__main, [class*='jobs-details']"
const LAZY_COLUMN_SELECTOR = '[data-testid="lazy-column"]'
const ABOUT_JOB_SELECTOR = '[componentkey^="JobDetails_AboutTheJob"]'
const DESCRIPTION_SELECTOR =
  "article, .jobs-description, [class*='jobs-description']"
const MANAGE_JOB_BANNER_PREFIX = "JobDetails_ManageJobBanner"
const APPLY_OR_SAVE_SELECTOR =
  'a[aria-label*="Apply"], button[aria-label*="Apply"], button[aria-label*="Save"], a[href*="/jobs/view/"]'
const TOP_CARD_SELECTOR = "section.top-card-layout"
const PUBLIC_APPLY_MODAL_SELECTOR =
  'button[data-modal="job-details-topcard-apply-modal"]'

function normalizeText(value) {
  return value?.replace(/\s+/g, " ").trim().toLowerCase() ?? ""
}

function isVisible(element) {
  return element.getClientRects().length > 0
}

function isSimplifyResumeMatchCard(element) {
  const text = normalizeText(element.textContent)
  return (
    isVisible(element) &&
    text.includes("simplify") &&
    text.includes("resume match")
  )
}

function resolveAboutJobContainer(heading) {
  const aboutJob = heading.closest(ABOUT_JOB_SELECTOR)
  if (aboutJob) return isVisible(aboutJob) ? aboutJob : null

  let description = heading.closest(DESCRIPTION_SELECTOR)
  if (!description) return null

  let parentDescription = description.parentElement?.closest(DESCRIPTION_SELECTOR)
  while (parentDescription && parentDescription !== description) {
    description = parentDescription
    parentDescription = description.parentElement?.closest(DESCRIPTION_SELECTOR)
  }
  return isVisible(description) ? description : null
}

function getDirectChildContaining(parent, descendant) {
  let current = descendant
  while (current?.parentElement && current.parentElement !== parent) {
    current = current.parentElement
  }
  return current?.parentElement === parent ? current : null
}

function findInsertAfterSibling(column) {
  const manageBanner = Array.from(column.children).find((child) =>
    child.getAttribute("componentkey")?.startsWith(MANAGE_JOB_BANNER_PREFIX),
  )
  let sibling = manageBanner?.nextElementSibling ?? null
  while (
    sibling &&
    (sibling.id === BANNER_MOUNT_ID || !isVisible(sibling))
  ) {
    sibling = sibling.nextElementSibling
  }
  return sibling || getDirectChildContaining(column, column.querySelector(APPLY_OR_SAVE_SELECTOR))
}

function findPreferredInsertBefore(aboutJobContainer) {
  const column =
    aboutJobContainer.closest(LAZY_COLUMN_SELECTOR) ??
    aboutJobContainer.parentElement
  if (!column) return null

  const aboutChild = getDirectChildContaining(column, aboutJobContainer)
  if (!aboutChild) return null

  const afterSibling = findInsertAfterSibling(column)
  if (!afterSibling || afterSibling === aboutChild) return null

  let candidate = afterSibling.nextElementSibling
  if (candidate?.id === BANNER_MOUNT_ID) {
    candidate = candidate?.nextElementSibling ?? null
  }

  let cursor = candidate
  while (cursor && cursor !== aboutChild) {
    cursor = cursor.nextElementSibling
  }
  return cursor ? (candidate ?? aboutChild) : null
}

export function findLinkedInJobDetailInsertionTarget(root) {
  const aboutHeadings = Array.from(root.querySelectorAll(HEADING_SELECTOR)).filter(
    (element) =>
      normalizeText(element.textContent) === "about the job" &&
      isVisible(element),
  )
  const headingInMain = aboutHeadings.find((element) =>
    element.closest(MAIN_SELECTOR),
  )
  const aboutContainer = headingInMain
    ? resolveAboutJobContainer(headingInMain)
    : null
  if (!aboutContainer) return null

  const preferred = findPreferredInsertBefore(aboutContainer)
  if (preferred) return preferred

  let previous = aboutContainer.previousElementSibling
  for (let i = 0; previous && i < 3; i += 1) {
    if (previous.id === BANNER_MOUNT_ID) {
      previous = previous.previousElementSibling
      continue
    }
    if (isSimplifyResumeMatchCard(previous)) return previous
    previous = previous.previousElementSibling
  }
  return aboutContainer
}

function ensureMountBefore(doc, parent, beforeNode) {
  const mount =
    doc.getElementById(BANNER_MOUNT_ID) ?? doc.createElement("div")
  mount.id = BANNER_MOUNT_ID
  if (mount.parentElement !== parent || mount.nextElementSibling !== beforeNode) {
    parent.insertBefore(mount, beforeNode)
  }
  return mount
}

export function ensureLinkedInJobDetailBannerMount(doc = document) {
  const target = findLinkedInJobDetailInsertionTarget(doc)
  return target?.parentElement
    ? ensureMountBefore(doc, target.parentElement, target)
    : null
}

function ensureMountAfter(doc, afterElement) {
  if (!afterElement.parentElement) return null
  const next = afterElement.nextElementSibling
  const beforeNode =
    next?.id === BANNER_MOUNT_ID ? next.nextElementSibling : next
  return ensureMountBefore(doc, afterElement.parentElement, beforeNode)
}

export function ensureLinkedInPublicJobDetailBannerMount(doc = document) {
  const applyModalButton = doc.querySelector(PUBLIC_APPLY_MODAL_SELECTOR)
  const topCard =
    applyModalButton?.closest(TOP_CARD_SELECTOR) ??
    doc.querySelector(TOP_CARD_SELECTOR)
  return topCard ? ensureMountAfter(doc, topCard) : null
}

export function ensureLinkedInListBannerMount(doc, afterElement) {
  return ensureMountAfter(doc, afterElement)
}

export function shouldResolveLinkedInBannerMount(
  isJobDetailPage,
  currentMount,
  root,
) {
  return isJobDetailPage || !currentMount || !root.contains(currentMount)
}
