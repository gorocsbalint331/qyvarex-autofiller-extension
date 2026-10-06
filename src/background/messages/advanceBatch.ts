import type { PlasmoMessaging } from "@plasmohq/messaging"

import { activateHelperTab } from "~background/messages/activateHelperOnTab"
import { applicationKey } from "~background/lib/application-log"

const STORAGE_KEY = "qx-batch-apply"

type BatchState = {
  links?: string[]
  perStep?: number
  step?: number
  opened?: number[]
  verified?: number[]
  filledKeys?: string[]
}

let queue: Promise<unknown> = Promise.resolve()

function chunk(items: string[], size: number) {
  const groups: string[][] = []
  const count = Math.max(1, size)
  for (let index = 0; index < items.length; index += count) {
    groups.push(items.slice(index, index + count))
  }
  return groups
}

function waitForTab(tabId: number) {
  return new Promise<void>((resolve) => {
    const finish = () => {
      window.clearTimeout(timer)
      chrome.tabs.onUpdated.removeListener(onUpdated)
      resolve()
    }
    const timer = window.setTimeout(finish, 20000)
    const onUpdated = (id: number, info: chrome.tabs.TabChangeInfo) => {
      if (id === tabId && info.status === "complete") finish()
    }
    chrome.tabs.onUpdated.addListener(onUpdated)
  })
}

async function openStep(urls: string[]) {
  const opened: number[] = []
  for (const url of urls) {
    const tab = await chrome.tabs.create({ url, active: false })
    if (tab.id == null) continue
    opened.push(tab.id)
    await waitForTab(tab.id)
    await new Promise((resolve) => window.setTimeout(resolve, 500))
    await activateHelperTab(tab.id).catch(() => false)
  }
  if (opened[0] != null) await chrome.tabs.update(opened[0], { active: true })
}

async function advance(url: string) {
  const stored = await chrome.storage.local.get(STORAGE_KEY)
  const state = stored[STORAGE_KEY] as BatchState | undefined
  const links = Array.isArray(state?.links) ? state.links.filter(Boolean) : []
  if (!links.length) return { ok: false, reason: "no_batch" }

  const key = applicationKey(url)
  const perStep = Math.max(1, Math.floor(state?.perStep || 1))
  const steps = chunk(links, perStep)
  const stepIndex = steps.findIndex((group) => group.some((link) => applicationKey(link) === key))
  if (stepIndex < 0) return { ok: false, reason: "not_in_batch" }

  const filled = new Set(state?.filledKeys || [])
  filled.add(key)
  const stepDone = steps[stepIndex].every((link) => filled.has(applicationKey(link)))
  const nextIndex = stepIndex + 1
  const next = stepDone ? steps[nextIndex] : undefined
  const opened = new Set(state?.opened || [])
  if (next?.length) opened.add(nextIndex)

  await chrome.storage.local.set({
    [STORAGE_KEY]: {
      ...state,
      filledKeys: [...filled],
      step: next?.length ? nextIndex : stepIndex,
      opened: [...opened]
    }
  })

  if (next?.length) await openStep(next)
  return { ok: true, openedNext: !!next?.length }
}

const handler: PlasmoMessaging.MessageHandler<{ url?: string }> = async (req, res) => {
  const url = typeof req.body?.url === "string" ? req.body.url : req.sender?.tab?.url || ""
  if (!url) {
    res.send({ ok: false, reason: "missing_url" })
    return
  }
  const run = queue.then(() => advance(url))
  queue = run.catch(() => undefined)
  try {
    res.send(await run)
  } catch (error) {
    res.send({
      ok: false,
      reason: error instanceof Error ? error.message : "advance_failed"
    })
  }
}

export default handler
