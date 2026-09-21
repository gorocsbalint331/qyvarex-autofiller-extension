import { Storage } from "@plasmohq/storage"

const storage = new Storage({ area: "session" })

export type TabJobRecord = {
  jobId: string
  url: string
  pathname: string
  updatedAt: number
}

function keyForTab(tabId: number) {
  return `tabJobId:${tabId}`
}

export async function setTabJobRecord(
  tabId: number,
  record: TabJobRecord
): Promise<void> {
  await storage.set(keyForTab(tabId), record)
}

export async function getTabJobRecord(
  tabId: number
): Promise<TabJobRecord | null> {
  return (await storage.get<TabJobRecord>(keyForTab(tabId))) ?? null
}
