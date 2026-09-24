// @ts-nocheck
/**
 * Autofill cancel / skip signals, checkpoints, and cancellable delays.
 */

let currentCancelSignal = null
let currentSkipSignal = null
let currentSkipController = null
let pendingSkip = false
let currentFieldTracker = null

export function setCurrentFieldTracker(tracker) {
  currentFieldTracker = tracker
}

export function updateCurrentField(field) {
  currentFieldTracker?.(field)
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

export function getCurrentCancelSignal() {
  return currentCancelSignal
}

export function getCurrentSkipSignal() {
  return currentSkipSignal
}

export function skipCurrentField() {
  if (currentSkipController) currentSkipController.abort()
  else pendingSkip = true
}

export function checkpoint() {
  if (currentCancelSignal?.aborted) throw new CancelledError()
  if (currentSkipSignal?.aborted || pendingSkip) {
    pendingSkip = false
    throw new SkippedError()
  }
}

export function cancellableDelay(ms) {
  if (ms <= 0) return Promise.resolve()
  if (currentCancelSignal?.aborted) return Promise.reject(new CancelledError())
  if (currentSkipSignal?.aborted || pendingSkip) {
    pendingSkip = false
    return Promise.reject(new SkippedError())
  }

  const cancelSignal = currentCancelSignal
  const skipSignal = currentSkipSignal

  return new Promise(
    cancelSignal || skipSignal
      ? (resolve, reject) => {
          const cleanup = () => {
            clearTimeout(timeoutId)
            cancelSignal?.removeEventListener("abort", onCancel)
            skipSignal?.removeEventListener("abort", onSkip)
          }
          const onCancel = () => {
            cleanup()
            reject(new CancelledError())
          }
          const onSkip = () => {
            cleanup()
            reject(new SkippedError())
          }
          const timeoutId = setTimeout(() => {
            cleanup()
            resolve()
          }, ms)

          cancelSignal?.addEventListener("abort", onCancel, { once: true })
          skipSignal?.addEventListener("abort", onSkip, { once: true })
        }
      : (resolve) => setTimeout(resolve, ms),
  )
}

export async function withCancellation(signal, run) {
  const previous = currentCancelSignal
  currentCancelSignal = signal
  try {
    return await run()
  } finally {
    currentCancelSignal = previous
  }
}

export async function withSkip(run) {
  const previousSkipSignal = currentSkipSignal
  const previousSkipController = currentSkipController
  const controller = new AbortController()
  currentSkipController = controller
  currentSkipSignal = controller.signal

  if (pendingSkip) {
    pendingSkip = false
    controller.abort()
  }

  try {
    const result = await run()
    if (controller.signal.aborted) throw new SkippedError()
    return result
  } catch (error) {
    if (
      controller.signal.aborted &&
      !(error instanceof CancelledError) &&
      !(error instanceof SkippedError)
    ) {
      throw new SkippedError()
    }
    throw error
  } finally {
    currentSkipSignal = previousSkipSignal
    currentSkipController = previousSkipController
  }
}

export function createCancellation(onCancel, fieldTracker) {
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
    async wrap(run) {
      controller = new AbortController()
      pendingSkip = false
      const previousTracker = currentFieldTracker
      if (fieldTracker) currentFieldTracker = fieldTracker
      try {
        return await withCancellation(controller.signal, run)
      } finally {
        currentFieldTracker = previousTracker
        pendingSkip = false
      }
    },
  }
}
