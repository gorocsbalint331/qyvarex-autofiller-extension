// @ts-nocheck
/**
 * Zustand store for global UI settings (turn page, default view) synced to storage.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { create } from "zustand"
import { Storage } from "@plasmohq/storage"
import { STORAGE_KEY } from "../enums/storage.js"

const storage = new Storage()

export const useSettingStore = create((set, get) => ({
  automaticallyTurnPage: "Automatically",
  setAutomaticallyTurnPage: async (automaticallyTurnPage) => {
    set({
      automaticallyTurnPage
    })
    await storage.setItem(STORAGE_KEY.GLOBAL_CONFIG_TURN_PAGE, automaticallyTurnPage)
  },
  defaultView: "Expanded",
  setDefaultView: async (defaultView) => {
    set({
      defaultView
    })
    await storage.setItem(STORAGE_KEY.GLOBAL_CONFIG_DEFAULT_VIEW, defaultView)
  },
  syncSettingsWithStorage: async () => {
    set({
      automaticallyTurnPage:
        (await storage.getItem(STORAGE_KEY.GLOBAL_CONFIG_TURN_PAGE)) || "Automatically",
      defaultView:
        (await storage.getItem(STORAGE_KEY.GLOBAL_CONFIG_DEFAULT_VIEW)) || "Expanded"
    })
  }
}))

export default useSettingStore
