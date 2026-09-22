import { discoverGenericFields } from "~contents/crawler/discover-generic"
import type { DiscoveredField } from "~contents/crawler/types"

/** Personio careers apply pages — native form fields. */
export function discoverPersonioFields(doc: Document): DiscoveredField[] {
  return discoverGenericFields(doc, {
    preferRootSelector: "form.application-form, form"
  })
}
