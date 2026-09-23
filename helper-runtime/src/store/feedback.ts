// @ts-nocheck
/**
 * Zustand store for feedback popup and star-rating modal visibility.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { create } from "zustand"

export const useFeedbackStore = create((set) => ({
  openFeedbackPopup: false,
  showStarRatingModal: false,
  setOpenFeedbackPopup: (openFeedbackPopup) => {
    set({
      openFeedbackPopup
    })
  },
  setShowStarRatingModal: (showStarRatingModal) => {
    set({
      showStarRatingModal
    })
  }
}))
