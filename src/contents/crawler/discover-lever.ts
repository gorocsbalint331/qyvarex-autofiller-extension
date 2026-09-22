import { discoverGenericFields } from "~contents/crawler/discover-generic"
import type { DiscoveredField } from "~contents/crawler/types"

/** Lever hire apply forms. */
export function discoverLeverFields(doc: Document): DiscoveredField[] {
  return discoverGenericFields(doc, {
    preferRootSelector: ".application-form, form#application-form, form"
  })
}
