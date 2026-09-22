import { discoverGenericFields } from "~contents/crawler/discover-generic"
import type { DiscoveredField } from "~contents/crawler/types"

/** Greenhouse boards / embedded apply forms. */
export function discoverGreenhouseFields(doc: Document): DiscoveredField[] {
  return discoverGenericFields(doc, {
    preferRootSelector: "#application_form, form#application-form, form"
  })
}
