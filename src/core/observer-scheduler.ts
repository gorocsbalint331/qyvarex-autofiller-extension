// @ts-nocheck
/**
 * Single-flight scheduler wrapper for MutationObserver-style work.
 */

export function createSingleFlightScheduler({ run, schedule, cancel }) {
  let scheduledHandle
  let isScheduled = false
  return {
    schedule() {
      if (!isScheduled) {
        isScheduled = true
        scheduledHandle = schedule(() => {
          isScheduled = false
          scheduledHandle = undefined
          run()
        })
      }
    },
    cancel() {
      if (isScheduled) {
        isScheduled = false
        cancel(scheduledHandle)
        scheduledHandle = undefined
      }
    }
  }
}
