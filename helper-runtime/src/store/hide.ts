// @ts-nocheck
/**
 * Zustand store for agent hide/show UI: icon, card, and open-in-agent click.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { create } from "zustand"
import { agentDomains } from "../api/env-resolver.js"

export const useHideStore = create((set) => ({
  displayIcon: agentDomains.includes(new URL(window.location.href).hostname),
  setDisplayIcon: (displayIcon) => set(() => ({
    displayIcon
  })),
  openCard: false,
  setOpenCard: (valueOrUpdater) => set((state) => ({
    openCard: "function" == typeof valueOrUpdater ? valueOrUpdater(state.openCard) : valueOrUpdater
  })),
  clickOpenInAgent: false,
  setClickOpenInAgent: (clickOpenInAgent) => set(() => ({
    clickOpenInAgent
  }))
}))
