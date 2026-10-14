/**
 * Chrome logs "Unchecked runtime.lastError" when a page enters the
 * back/forward cache and closes an extension port. The dev reload port's
 * own disconnect listener does not read lastError, and Chrome checks every
 * listener, so a second listener is not enough. Read lastError inside each
 * disconnect callback, and close ports on pagehide before Chrome does.
 */

const INSTALLED = "__qxIgnoreBfcachePorts"

type RuntimeWithConnect = typeof chrome.runtime & {
  connect: typeof chrome.runtime.connect
}

type Listener = (...args: unknown[]) => unknown

type DisconnectEvent = chrome.events.Event<() => void> & {
  __qxInstanceWrapped?: boolean
}

type EventPrototype = {
  addListener: (callback: Listener) => void
  removeListener?: (callback: Listener) => void
  hasListener?: (callback: Listener) => boolean
  __qxBfcache?: boolean
}

function rememberLastError() {
  void chrome.runtime?.lastError
}

function patchDisconnectPrototype(sample: chrome.events.Event<() => void>): boolean {
  const proto = Object.getPrototypeOf(sample) as EventPrototype | null
  if (!proto || typeof proto.addListener !== "function") return false
  if (proto.__qxBfcache) return true

  const addListener = proto.addListener
  const removeListener = proto.removeListener
  const hasListener = proto.hasListener
  const wrappers = new WeakMap<Listener, Listener>()
  const wrap = (callback: Listener): Listener => {
    let wrapped = wrappers.get(callback)
    if (!wrapped) {
      wrapped = function (this: unknown, ...args: unknown[]) {
        rememberLastError()
        return callback.apply(this, args)
      }
      wrappers.set(callback, wrapped)
    }
    return wrapped
  }

  try {
    proto.__qxBfcache = true
    proto.addListener = function (this: unknown, callback: Listener) {
      return addListener.call(this, wrap(callback))
    }
    if (typeof removeListener === "function") {
      proto.removeListener = function (this: unknown, callback: Listener) {
        return removeListener.call(this, wrappers.get(callback) || callback)
      }
    }
    if (typeof hasListener === "function") {
      proto.hasListener = function (this: unknown, callback: Listener) {
        return Boolean(hasListener.call(this, wrappers.get(callback) || callback))
      }
    }
    return true
  } catch {
    return false
  }
}

function wrapPortDisconnect(port: chrome.runtime.Port) {
  const events = port.onDisconnect as DisconnectEvent
  if (events.__qxInstanceWrapped) return
  const addListener = events.addListener.bind(events)
  events.addListener = ((callback: () => void) => {
    addListener(() => {
      rememberLastError()
      callback()
    })
  }) as DisconnectEvent["addListener"]
  events.__qxInstanceWrapped = true
}

export function ignoreBackForwardCachePortErrors() {
  const root = globalThis as typeof globalThis & { [INSTALLED]?: boolean }
  if (root[INSTALLED] || typeof chrome === "undefined" || !chrome.runtime?.connect) return
  root[INSTALLED] = true

  const runtime = chrome.runtime as RuntimeWithConnect
  const connect = runtime.connect.bind(runtime)
  const ports = new Set<chrome.runtime.Port>()
  let patchedPrototype = false

  const track = (port: chrome.runtime.Port) => {
    ports.add(port)
    if (!patchedPrototype) wrapPortDisconnect(port)
    port.onDisconnect.addListener(() => {
      ports.delete(port)
    })
  }

  try {
    const probe = connect({ name: "qx-bfcache-probe" })
    patchedPrototype = patchDisconnectPrototype(probe.onDisconnect)
    track(probe)
    probe.disconnect()
  } catch {
    /* connect is not available yet */
  }

  runtime.connect = ((...args: Parameters<typeof chrome.runtime.connect>) => {
    const port = connect(...args)
    track(port)
    return port
  }) as typeof chrome.runtime.connect

  const browserRuntime = (globalThis as { browser?: { runtime?: RuntimeWithConnect } }).browser
    ?.runtime
  if (browserRuntime && browserRuntime !== runtime && typeof browserRuntime.connect === "function") {
    const browserConnect = browserRuntime.connect.bind(browserRuntime)
    browserRuntime.connect = ((...args: Parameters<typeof chrome.runtime.connect>) => {
      const port = browserConnect(...args)
      track(port)
      return port
    }) as typeof chrome.runtime.connect
  }

  if (typeof window === "undefined") return

  const closePorts = () => {
    for (const port of [...ports]) {
      try {
        port.disconnect()
      } catch {
        /* The page is already leaving. */
      }
    }
    ports.clear()
  }
  window.addEventListener("pagehide", closePorts)
  window.addEventListener("freeze", closePorts)
}

ignoreBackForwardCachePortErrors()
