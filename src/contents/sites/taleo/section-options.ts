// @ts-nocheck
/**
 * Taleo — map section children to option payloads for rules.
 */

function mapChildrenToOptions(children) {
  return children.map((child) => ({
    type: child.type,
    label: child.label,
    ...(Array.isArray(child.options) && child.options.length > 0
      ? { options: child.options }
      : {}),
  }))
}

export { mapChildrenToOptions }
