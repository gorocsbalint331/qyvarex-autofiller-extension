import { discoverGenericFields } from "~contents/crawler/discover-generic"
import type { DiscoveredField } from "~contents/crawler/types"

/**
 * Workday apply — many widgets are custom; this discovers native inputs present
 * in the fixture / simplified pages. Full Workday ops stay in the engine bundle.
 */
export function discoverWorkdayFields(doc: Document): DiscoveredField[] {
  return discoverGenericFields(doc, {
    preferRootSelector: '[data-automation-id="applyFlow"], form, body'
  })
}
