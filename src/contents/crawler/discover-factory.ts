import { discoverGreenhouseFields } from "~contents/crawler/discover-greenhouse"
import { discoverGenericFields } from "~contents/crawler/discover-generic"
import { discoverLeverFields } from "~contents/crawler/discover-lever"
import { discoverPersonioFields } from "~contents/crawler/discover-personio"
import { discoverWorkdayFields } from "~contents/crawler/discover-workday"
import { detectRegistryAts } from "~contents/crawler/detect-registry"
import type { AtsSiteId, DiscoveredField } from "~contents/crawler/types"

/** Map registry keys → Clean-TS discover adapters we own. */
const REGISTRY_TO_CLEAN: Record<string, AtsSiteId> = {
  personio: "personio",
  greenhouse: "greenhouse",
  lever: "lever",
  workday: "myworkday",
  myworkday: "myworkday",
  ashby: "ashby",
  oraclecloud: "oraclecloud",
  paycom: "paycomonline-v3",
  paycomonline: "paycomonline-v3"
}

export function detectAtsSite(hostname: string, href = ""): AtsSiteId {
  const h = (hostname || "").toLowerCase()
  const u = (href || "").toLowerCase()

  // Fast paths (fixtures / common hosts)
  if (h.includes("personio.") || h.includes("jobs.personio")) return "personio"
  if (
    h.includes("greenhouse.io") ||
    h.includes("boards.greenhouse") ||
    u.includes("gh_jid=")
  ) {
    return "greenhouse"
  }
  if (h.includes("lever.co") || h.includes("jobs.lever")) return "lever"
  if (h.includes("myworkdayjobs.com") || h.includes("workday.com")) {
    return "myworkday"
  }
  if (h.includes("ashbyhq.com") || h.includes("jobs.ashby")) return "ashby"
  if (h.includes("oraclecloud.com") || h.includes("fa.oracle")) {
    return "oraclecloud"
  }
  if (h.includes("paycomonline") || h.includes("paycom.com")) {
    return "paycomonline-v3"
  }

  const registered = detectRegistryAts(hostname, href)
  if (registered && REGISTRY_TO_CLEAN[registered]) {
    return REGISTRY_TO_CLEAN[registered]
  }

  // Unknown but registered ATS → generic native fill still helps
  if (registered) return "generic"
  return "generic"
}

export function discoverFieldsForSite(
  site: AtsSiteId,
  doc: Document
): DiscoveredField[] {
  switch (site) {
    case "personio":
      return discoverPersonioFields(doc)
    case "greenhouse":
      return discoverGreenhouseFields(doc)
    case "lever":
      return discoverLeverFields(doc)
    case "myworkday":
      return discoverWorkdayFields(doc)
    case "ashby":
    case "oraclecloud":
    case "paycomonline-v3":
    default:
      return discoverGenericFields(doc)
  }
}

export function discoverFieldsFromLocation(
  doc: Document,
  hostname: string,
  href = ""
): { site: AtsSiteId; fields: DiscoveredField[]; registryId: string | null } {
  const site = detectAtsSite(hostname, href)
  const registryId = detectRegistryAts(hostname, href)
  return { site, fields: discoverFieldsForSite(site, doc), registryId }
}

export type { AtsSiteId, DiscoveredField }
export { FIELD_TYPE } from "~contents/crawler/types"
export { detectRegistryAts } from "~contents/crawler/detect-registry"
