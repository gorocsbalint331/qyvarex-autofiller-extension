/**
 * waitForCondition — MutationObserver-backed poll (clean TS).
 * Parcel reference: contents/methods/observer.js
 */

export type WaitForConditionOptions = {
  timeout?: number
  interval?: number
  observeTarget?: Node | null
  observeOptions?: MutationObserverInit
}

export function waitForCondition(
  predicate: () => boolean,
  options: WaitForConditionOptions = {}
): Promise<boolean> {
  const timeout = options.timeout ?? 5000
  const interval = options.interval ?? 100
  const observeTarget = options.observeTarget ?? null
  const observeOptions = options.observeOptions ?? {
    childList: true,
    subtree: true,
    attributes: true
  }

  if (predicate()) return Promise.resolve(true)

  return new Promise((resolve) => {
    const cleanups: Array<() => void> = []
    const done = (ok: boolean) => {
      for (const c of cleanups) c()
      resolve(ok)
    }

    const timer = setTimeout(() => done(false), timeout)
    cleanups.push(() => clearTimeout(timer))

    const tick = setInterval(() => {
      if (predicate()) done(true)
    }, interval)
    cleanups.push(() => clearInterval(tick))

    if (observeTarget && typeof MutationObserver !== "undefined") {
      const obs = new MutationObserver(() => {
        if (predicate()) done(true)
      })
      obs.observe(observeTarget, observeOptions)
      cleanups.push(() => obs.disconnect())
    }
  })
}
