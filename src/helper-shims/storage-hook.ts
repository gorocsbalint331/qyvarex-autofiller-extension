/**
 * Minimal @plasmohq/storage/hook for the injected helper world.
 */
import { useEffect, useState } from "react"

type StorageLike = {
  get: (key: string) => Promise<any>
  set: (key: string, value: any) => Promise<void>
  watch?: (callbacks: Record<string, (c: { newValue: any }) => void>) => void
}

const memory = new Map<string, any>()

async function chromeGet(key: string) {
  try {
    const bag = await chrome.storage.local.get(key)
    return bag?.[key]
  } catch {
    return memory.get(key)
  }
}

async function chromeSet(key: string, value: any) {
  try {
    await chrome.storage.local.set({ [key]: value })
  } catch {
    memory.set(key, value)
  }
}

export function useStorage<T = any>(
  key: string,
  initialValue?: T,
): [T | undefined, (v: T) => Promise<void>, { isLoading: boolean }] {
  const [value, setValue] = useState<T | undefined>(initialValue)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true
    void chromeGet(key).then((v) => {
      if (!alive) return
      if (v !== undefined) setValue(v)
      setLoading(false)
    })
    const onChanged = (
      changes: Record<string, chrome.storage.StorageChange>,
      area: string,
    ) => {
      if (area !== "local" || !changes[key]) return
      setValue(changes[key].newValue)
    }
    try {
      chrome.storage.onChanged.addListener(onChanged)
      return () => {
        alive = false
        chrome.storage.onChanged.removeListener(onChanged)
      }
    } catch {
      return () => {
        alive = false
      }
    }
  }, [key])

  const setter = async (next: T) => {
    setValue(next)
    await chromeSet(key, next)
  }

  return [value, setter, { isLoading }]
}

export default { useStorage }
