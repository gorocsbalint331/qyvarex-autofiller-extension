// @ts-nocheck
/**
 * Walk MutationObserver records and visit affected <a href> anchors once each.
 */

function isAnchorWithHref(node) {
  const element = node
  return (
    element?.tagName === "A" &&
    (!!element.href ||
      (typeof element.hasAttribute === "function" &&
        element.hasAttribute("href")))
  )
}

function visitAnchorOrClosest(node, visit) {
  const element = node
  if (isAnchorWithHref(element)) {
    visit(element)
    return
  }
  if (typeof element?.closest !== "function") return
  const closest = element.closest("a[href]")
  if (isAnchorWithHref(closest)) visit(closest)
}

function visitSubtreeAnchors(node, visit) {
  const element = node
  if (isAnchorWithHref(element)) visit(element)
  if (typeof element?.querySelectorAll === "function") {
    for (const anchor of element.querySelectorAll("a[href]")) {
      if (isAnchorWithHref(anchor)) visit(anchor)
    }
    return
  }
  visitAnchorOrClosest(element?.parentElement, visit)
}

export function visitChangedAnchors(mutations, visit) {
  const seen = new Set()
  const visitOnce = (anchor) => {
    if (seen.has(anchor)) return
    seen.add(anchor)
    visit(anchor)
  }

  for (const mutation of mutations) {
    if (mutation.type === "attributes") {
      visitAnchorOrClosest(mutation.target, visitOnce)
      continue
    }
    if (mutation.type === "characterData") {
      visitAnchorOrClosest(mutation.target.parentElement, visitOnce)
      continue
    }
    if (mutation.type === "childList") {
      visitAnchorOrClosest(mutation.target, visitOnce)
      for (const added of mutation.addedNodes) {
        visitSubtreeAnchors(added, visitOnce)
      }
    }
  }

  return seen.size
}
