/**
 * Autofill cancellation / skip control (clean TS port of Parcel cancellation).
 * Parcel reference: engine/helper-app / vendor/helper-app-oracle-js contents/methods/cancellation.js
 */

export type FieldTracker = (label: string) => void

let cancelSignal: AbortSignal | null = null
let skipSignal: AbortSignal | null = null
let skipController: AbortController | null = null
let pendingSkip = false
let fieldTracker: FieldTracker | null = null

export function setCurrentFieldTracker(tracker: FieldTracker | null): void {
  fieldTracker = tracker
}

export function updateCurrentField(label: string): void {
  fieldTracker?.(label)
}

export class CancelledError extends Error {
  constructor() {
    super("Autofill cancelled")
    this.name = "CancelledError"
  }
}

export class SkippedError extends Error {
  constructor() {
    super("Field skipped")
    this.name = "SkippedError"
  }
}

export function getCurrentCancelSignal(): AbortSignal | null {
  return cancelSignal
}

export function getCurrentSkipSignal(): AbortSignal | null {
  return skipSignal
}

export function skipCurrentField(): void {
  if (skipController) skipController.abort()
  else pendingSkip = true
}

export function checkpoint(): void {
  if (cancelSignal?.aborted) throw new CancelledError()
  if (skipSignal?.aborted || pendingSkip) {
    pendingSkip = false
    throw new SkippedError()
  }
}

export function cancellableDelay(ms: number): Promise<void> {
  if (ms <= 0) return Promise.resolve()
  if (cancelSignal?.aborted) return Promise.reject(new CancelledError())
  if (skipSignal?.aborted || pendingSkip) {
    pendingSkip = false
    return Promise.reject(new SkippedError())
  }
  const cancel = cancelSignal
  const skip = skipSignal
  if (!cancel && !skip) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  return new Promise((resolve, reject) => {
    const cleanup = () => {
      clearTimeout(timer)
      cancel?.removeEventListener("abort", onCancel)
      skip?.removeEventListener("abort", onSkip)
    }
    const onCancel = () => {
      cleanup()
      reject(new CancelledError())
    }
    const onSkip = () => {
      cleanup()
      reject(new SkippedError())
    }
    const timer = setTimeout(() => {
      cleanup()
      resolve()
    }, ms)
    cancel?.addEventListener("abort", onCancel, { once: true })
    skip?.addEventListener("abort", onSkip, { once: true })
  })
}

export async function withCancellation<T>(
  signal: AbortSignal,
  fn: () => Promise<T>
): Promise<T> {
  const prev = cancelSignal
  cancelSignal = signal
  try {
    return await fn()
  } finally {
    cancelSignal = prev
  }
}

export async function withSkip<T>(fn: () => Promise<T>): Promise<T> {
  const prevSkip = skipSignal
  const prevController = skipController
  const controller = new AbortController()
  skipController = controller
  skipSignal = controller.signal
  if (pendingSkip) {
    pendingSkip = false
    controller.abort()
  }
  try {
    const result = await fn()
    if (controller.signal.aborted) throw new SkippedError()
    return result
  } catch (err) {
    if (
      controller.signal.aborted &&
      !(err instanceof CancelledError) &&
      !(err instanceof SkippedError)
    ) {
      throw new SkippedError()
    }
    throw err
  } finally {
    skipSignal = prevSkip
    skipController = prevController
  }
}

export type CancellationHandle = {
  cancel: () => Promise<void>
  skip: () => Promise<void>
  readonly signal: AbortSignal
  wrap: <T>(fn: () => Promise<T>) => Promise<T>
}

export function createCancellation(
  onCancel?: () => void,
  tracker?: FieldTracker | null
): CancellationHandle {
  let controller = new AbortController()
  return {
    cancel: async () => {
      controller.abort()
      onCancel?.()
    },
    skip: async () => {
      skipCurrentField()
    },
    get signal() {
      return controller.signal
    },
    async wrap(fn) {
      controller = new AbortController()
      pendingSkip = false
      const prevTracker = fieldTracker
      if (tracker) fieldTracker = tracker
      try {
        return await withCancellation(controller.signal, fn)
      } finally {
        fieldTracker = prevTracker
        pendingSkip = false
      }
    }
  }
}
