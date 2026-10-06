import { useEffect, useMemo, useState } from "react"
import { sendToBackground } from "@plasmohq/messaging"

import { fetchSharedJobs } from "~api/team-client"

const STORAGE_KEY = "qx-batch-apply"

type BatchState = {
  draft: string
  perStep: number
  links: string[]
  step: number
  opened: number[]
  verified: number[]
}

const emptyState: BatchState = {
  draft: "",
  perStep: 5,
  links: [],
  step: 0,
  opened: [],
  verified: []
}

function parseLinks(raw: string) {
  const found = raw.match(/https?:\/\/[^\s<>"']+/gi) || []
  const seen = new Set<string>()
  const links: string[] = []
  for (const item of found) {
    const url = item.replace(/[),.;]+$/g, "")
    if (seen.has(url)) continue
    seen.add(url)
    links.push(url)
  }
  return links
}

function chunk<T>(items: T[], size: number) {
  const groups: T[][] = []
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
    void chrome.tabs.get(tabId).then((tab) => {
      if (tab.status === "complete") finish()
    })
  })
}

export default function BatchApplyPanel({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<BatchState>(emptyState)
  const [ready, setReady] = useState(false)
  const [running, setRunning] = useState(false)
  const [rowStatus, setRowStatus] = useState<Record<string, string>>({})
  const [notice, setNotice] = useState("")

  useEffect(() => {
    void chrome.storage.local.get(STORAGE_KEY).then((stored) => {
      const saved = stored[STORAGE_KEY] as BatchState | undefined
      if (saved && Array.isArray(saved.links)) {
        setState({ ...emptyState, ...saved, opened: saved.opened || [], verified: saved.verified || [] })
      }
      setReady(true)
    })
  }, [])

  useEffect(() => {
    if (!ready) return
    void chrome.storage.local.set({ [STORAGE_KEY]: state })
  }, [ready, state])

  const steps = useMemo(() => chunk(state.links, state.perStep), [state.links, state.perStep])
  const stepIndex = Math.min(state.step, Math.max(0, steps.length - 1))
  const current = steps[stepIndex] || []
  const stepOpened = state.opened.includes(stepIndex)
  const stepVerified = state.verified.includes(stepIndex)
  const finished = steps.length > 0 && state.verified.length >= steps.length

  function buildQueue() {
    const links = parseLinks(state.draft)
    if (!links.length) {
      setNotice("Add at least one http or https job link.")
      return
    }
    const perStep = Math.max(1, Math.floor(state.perStep) || 1)
    setState((currentState) => ({
      ...currentState,
      links,
      perStep,
      step: 0,
      opened: [],
      verified: []
    }))
    setRowStatus({})
    setNotice(`${links.length} links · ${chunk(links, perStep).length} steps of ${perStep}.`)
  }

  async function openLinks(urls: string[], index: number) {
    if (!urls.length || running) return
    setRunning(true)
    setState((currentState) => ({ ...currentState, step: index }))
    setNotice(`Opening step ${index + 1}. Autofill starts on each page after it loads.`)
    const openedTabs: number[] = []
    for (const url of urls) {
      setRowStatus((prev) => ({ ...prev, [url]: "Opening…" }))
      try {
        const tab = await chrome.tabs.create({ url, active: false })
        if (tab.id == null) {
          setRowStatus((prev) => ({ ...prev, [url]: "Could not open" }))
          continue
        }
        openedTabs.push(tab.id)
        await waitForTab(tab.id)
        await new Promise((resolve) => window.setTimeout(resolve, 500))
        const result = await sendToBackground({
          name: "activateHelperOnTab",
          body: { tabId: tab.id }
        })
        setRowStatus((prev) => ({
          ...prev,
          [url]: result?.success ? "Autofill ready — check this tab" : result?.error || "Activation failed"
        }))
      } catch (error) {
        setRowStatus((prev) => ({
          ...prev,
          [url]: error instanceof Error ? error.message : "Failed"
        }))
      }
    }
    if (openedTabs[0] != null) void chrome.tabs.update(openedTabs[0], { active: true })
    setState((currentState) => ({
      ...currentState,
      step: index,
      opened: currentState.opened.includes(index) ? currentState.opened : [...currentState.opened, index]
    }))
    setRunning(false)
    setNotice("Check each tab in this step, then verify it to continue.")
  }

  async function verifyAndForward() {
    const verified = state.verified.includes(stepIndex) ? state.verified : [...state.verified, stepIndex]
    const nextStep = stepIndex + 1
    if (nextStep >= steps.length) {
      setState((currentState) => ({ ...currentState, verified, step: stepIndex }))
      setNotice("All steps are verified.")
      return
    }
    setState((currentState) => ({ ...currentState, verified, step: nextStep }))
    await openLinks(steps[nextStep] || [], nextStep)
  }

  async function loadSharedJobs() {
    setNotice("Loading jobs other profiles already applied to…")
    const result = await fetchSharedJobs()
    if (!result.ok) {
      setNotice(result.error || "Could not load shared jobs.")
      return
    }
    const urls = (result.jobs || []).map((job) => job.url).filter(Boolean)
    if (!urls.length) {
      setNotice("No new jobs for this profile.")
      return
    }
    setState((currentState) => {
      const existing = parseLinks(currentState.draft)
      const seen = new Set(existing)
      const added = urls.filter((url) => !seen.has(url))
      const draft = [...existing, ...added].join("\n")
      return { ...currentState, draft }
    })
    setNotice(`${urls.length} job link${urls.length === 1 ? "" : "s"} added. Build steps when you are ready.`)
  }

  async function onFile(file: File | undefined) {
    if (!file) return
    const text = await file.text()
    setState((currentState) => ({
      ...currentState,
      draft: currentState.draft.trim() ? `${currentState.draft.trim()}\n${text.trim()}` : text
    }))
  }

  return (
    <section className={compact ? "qx-batch qx-batch--popup" : "qx-batch"}>
      {compact ? <h2 className="qx-batch__title">Batch apply</h2> : <h1>Batch apply</h1>}
      <p className="qx-batch__lead">
        Add job links, choose how many to autofill in one step, then verify that step before the next one opens.
      </p>

      <label className="qx-label">
        Job links
        <textarea
          className="qx-batch__links"
          value={state.draft}
          onChange={(event) => setState((currentState) => ({ ...currentState, draft: event.target.value }))}
          placeholder={"https://jobs.example.com/one\nhttps://jobs.example.com/two"}
          rows={compact ? 4 : 8}
        />
      </label>
      <label className="qx-label">
        Or upload a text file
        <input
          className="qx-batch__file"
          type="file"
          accept=".txt,.csv,text/plain"
          onChange={(event) => void onFile(event.target.files?.[0])}
        />
      </label>
      <label className="qx-label">
        Links per step
        <input
          className="qx-batch__count"
          type="number"
          min={1}
          max={20}
          value={state.perStep}
          onChange={(event) =>
            setState((currentState) => ({
              ...currentState,
              perStep: Math.max(1, Math.min(20, Number(event.target.value) || 1))
            }))
          }
        />
      </label>
      <div className="qx-batch__actions">
        <button type="button" className="qx-btn" onClick={buildQueue}>
          Build steps
        </button>
        <button type="button" className="qx-btn qx-btn--ghost" onClick={() => void loadSharedJobs()}>
          Load jobs this profile has not applied to
        </button>
      </div>

      {steps.length ? (
        <section className="qx-batch__step">
          <h2>
            Step {stepIndex + 1} of {steps.length}
            {finished ? " · finished" : ""}
          </h2>
          <p className="qx-meta">
            {current.length} link{current.length === 1 ? "" : "s"} in this step
            {stepVerified ? " · verified" : stepOpened ? " · opened" : ""}
          </p>
          <ol className="qx-batch__list">
            {current.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noreferrer">
                  {url}
                </a>
                {rowStatus[url] ? <span>{rowStatus[url]}</span> : null}
              </li>
            ))}
          </ol>
          <div className="qx-batch__actions">
            <button type="button" className="qx-btn" disabled={running} onClick={() => void openLinks(current, stepIndex)}>
              {running ? "Opening…" : stepOpened ? "Open this step again" : "Open and autofill this step"}
            </button>
            <button
              type="button"
              className="qx-btn qx-btn--ghost"
              disabled={!stepOpened || running || stepVerified}
              onClick={() => void verifyAndForward()}>
              {stepIndex + 1 >= steps.length ? "Verify and finish" : "Verified, next step"}
            </button>
          </div>
          <div className="qx-batch__dots" aria-label="Steps">
            {steps.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === stepIndex ? "is-current" : state.verified.includes(index) ? "is-done" : ""}
                onClick={() => setState((currentState) => ({ ...currentState, step: index }))}>
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {notice ? <p className="qx-status">{notice}</p> : null}
    </section>
  )
}
