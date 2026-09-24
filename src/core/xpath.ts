// @ts-nocheck
/**
 * XPath helpers for querying and building selectors.
 */

export function escapeXPath(value) {
  return -1 === value.indexOf('"')
    ? `"${value}"`
    : -1 === value.indexOf("'")
      ? `'${value}'`
      : `concat('${value.replace(/'/g, `',"'",'`)}')`
}

export function getFirstOrderedNode(xpath, context) {
  return document.evaluate(
    xpath,
    context || document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue
}

export function getFirstOrderedNodeSafe(xpath, context = document) {
  return null == context || undefined === context
    ? null
    : document.evaluate(
        xpath,
        context,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue
}

export function getExactText(selectorText) {
  let match = selectorText.match(/^([^\.]+?)(?:\s+\.|$)/)
  let exact = match ? match[1].trim() : selectorText.trim()
  return exact
}

function getOrderedNodeAtIndex(xpath, context = document, index = 0) {
  try {
    let snapshot = document.evaluate(
      xpath,
      context,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    )
    if (snapshot.snapshotLength <= index) return null
    return snapshot.snapshotItem(index)
  } catch (error) {
    return (
      console.error(`XPath error for query "${xpath}" with index ${index}:`, error),
      null
    )
  }
}

export function getOrderedNodes(xpath, context) {
  let snapshot = document.evaluate(
    xpath,
    context || document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  )
  let nodes = []
  for (let index = 0; index < snapshot.snapshotLength; index++) {
    nodes.push(snapshot.snapshotItem(index))
  }
  return nodes
}

export function getOrderedNodesSafe(xpath, context = document) {
  if (!context) return []
  let snapshot = document.evaluate(
    xpath,
    context,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  )
  let nodes = []
  for (let index = 0; index < snapshot.snapshotLength; index++) {
    nodes.push(snapshot.snapshotItem(index))
  }
  return nodes
}

export function getFirstVisibleNode(xpath, context) {
  let nodes = getOrderedNodes(xpath, context)
  return nodes.find((node) => null !== node.offsetParent)
}

export const formatXpathString = (value) =>
  value.replace(/"/g, '\\"').replace(/'/g, "\\'")

export const getXpathEndsWith = (attributeName, suffix) =>
  `substring(@${attributeName}, string-length(@${attributeName}) - string-length("${suffix}") +1) = "${suffix}"`

export const getXpathContainsText = (text) =>
  `contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), ${escapeXPath(text).toLowerCase()})`

export const getXpathMatchText = (text) =>
  `translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = ${escapeXPath(text).toLowerCase()}`
