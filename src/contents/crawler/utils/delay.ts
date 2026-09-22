export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function executeSequentially(
  steps: Array<(() => Promise<void> | void) | { func: () => Promise<void> | void; delay?: number }>,
  defaultDelayMs = 80
): Promise<void> {
  for (const step of steps) {
    if (typeof step === "function") {
      await step()
      await delay(defaultDelayMs)
    } else {
      await step.func()
      await delay(step.delay ?? defaultDelayMs)
    }
  }
}
