// @ts-nocheck
/**
 * Feedback entry button that opens the feedback modal.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Button } from "antd"
import * as feedbackSvg from "../../../assets/inline/images/feedback.svg.js"
import { useFeedbackStore } from "../../../store/feedback.ts"
import Image from "../../../ui/Image.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function FeedbackEntryButton() {
  const setOpenFeedbackPopup = useFeedbackStore(
    (state) => state.setOpenFeedbackPopup,
  )
  return jsxs(Button, {
    id: "feedback-entry",
    onClick: () => setOpenFeedbackPopup(true),
    children: [
      jsx(Image, {
        src: assetUrl(feedbackSvg),
        alt: "logo-image",
        preview: false,
      }),
      "Feedback",
    ],
  })
}
