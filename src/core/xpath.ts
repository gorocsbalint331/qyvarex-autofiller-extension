/** XPath helpers (incremental port from ~core/xpath). */

export function escapeXPath(value: string): string {
  if (!value.includes("'")) return `'${value}'`
  if (!value.includes('"')) return `"${value}"`
  return `concat('${value.split("'").join("',\"'\",'")}')`
}

export function getOrderedNodesSafe(
  xpath: string,
  context: Node = document
): Element[] {
  try {
    const result = document.evaluate(
      xpath,
      context,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    )
    const nodes: Element[] = []
    for (let i = 0; i < result.snapshotLength; i++) {
      const node = result.snapshotItem(i)
      if (node instanceof Element) nodes.push(node)
    }
    return nodes
  } catch {
    return []
  }
}

export function getFirstOrderedNodeSafe(
  xpath: string,
  context: Node = document
): Element | null {
  return getOrderedNodesSafe(xpath, context)[0] ?? null
}

export function getXpathContainsText(text: string): string {
  return `contains(normalize-space(.), ${escapeXPath(text)})`
}
