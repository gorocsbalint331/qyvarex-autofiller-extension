/**
 * Chrome logs an unchecked runtime.lastError when a tab enters the
 * back/forward cache while an extension port is still open. Track ports
 * opened from this context and close them on pagehide.
 */

const INSTALLED = "__qxIgnoreBfcachePorts"

type RuntimeWithConnect = typeof chrome.runtime & {
  connect: typeof chrome.runtime.connect
}

export function ignoreBackForwardCachePortErrors() {
  const root = globalThis as typeof globalThis & { [INSTALLED]?: boolean }
  if (root[INSTALLED] || typeof chrome === "undefined" || !chrome.runtime) return
  root[INSTALLED] = true

  const runtime = chrome.runtime as RuntimeWithConnect
  const ports = new Set<chrome.runtime.Port>()

  if (typeof runtime.connect === "function") {
    const connect = runtime.connect.bind(runtime)
    runtime.connect = ((...args: Parameters<typeof chrome.runtime.connect>) => {
      const port = connect(...args)
      ports.add(port)
      port.onDisconnect.addListener(() => {
        ports.delete(port)
        void runtime.lastError
      })
      return port
    }) as typeof chrome.runtime.connect
  }

  if (runtime.onConnect?.addListener) {
    const addListener = runtime.onConnect.addListener.bind(runtime.onConnect)
    runtime.onConnect.addListener = ((listener: (port: chrome.runtime.Port) => void) => {
      addListener((port) => {
        const addDisconnect = port.onDisconnect.addListener.bind(port.onDisconnect)
        port.onDisconnect.addListener = ((callback: () => void) => {
          addDisconnect(() => {
            void runtime.lastError
            callback()
          })
        }) as typeof port.onDisconnect.addListener
        port.onDisconnect.addListener(() => {
          void runtime.lastError
        })
        listener(port)
      })
    }) as typeof runtime.onConnect.addListener
  }

  if (typeof window !== "undefined") {
    window.addEventListener("pagehide", () => {
      for (const port of ports) {
        try {
          port.disconnect()
        } catch {
          /* The page is already leaving. */
        }
      }
      ports.clear()
    })
  }
}

ignoreBackForwardCachePortErrors()
