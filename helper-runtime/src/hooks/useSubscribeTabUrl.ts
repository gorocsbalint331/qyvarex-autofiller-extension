// @ts-nocheck
/**
 * Subscribes to tab URL updates from the extension runtime.
 */
import { useEffect } from "react"
import { useUrlStore } from "../store/url.ts"

export default function useSubscribeTabUrl() {
  const initCurrentTabUrl = useUrlStore((state) => state.initCurrentTabUrl)
  const updateCurrentTabUrl = useUrlStore(
    (state) => state.updateCurrentTabUrl,
  )

  useEffect(() => {
    initCurrentTabUrl()
    const onMessage = async (message) => {
      if (message.message === "urlUpdated") updateCurrentTabUrl()
    }
    chrome.runtime.onMessage.addListener(onMessage)
    return () => {
      chrome.runtime.onMessage.removeListener(onMessage)
    }
  }, [])
}
