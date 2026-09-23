// @ts-nocheck
/**
 * Zustand store for the helper UI container DOM element.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { create } from "zustand"

export const useContainerStore = create((set) => ({
  containerDom: null,
  setContainerDom: (containerDom) => set(() => ({
    containerDom
  }))
}))
