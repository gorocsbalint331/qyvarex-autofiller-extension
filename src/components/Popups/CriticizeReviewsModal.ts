// @ts-nocheck
/**
 * Low-rating follow-up: invite the user to leave written feedback.
 */

import { useEffect } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { Button, Flex, Modal } from "antd"
import {
  BODY_TEXT_STYLE,
  CloseIcon,
  DEFAULT_BUTTON_STYLE,
  PRIMARY_BUTTON_STYLE,
  RATING_MODAL_STYLES,
  TITLE_STYLE,
} from "../StarRatingModal/shared.ts"
import { useFeedbackStore } from "../../store/feedback.ts"
import { trackEvent } from "../../utils/trace.ts"

export default function CriticizeReviewsModal({ open, onCancel }) {
  const setOpenFeedbackPopup = useFeedbackStore(
    (state) => state.setOpenFeedbackPopup,
  )

  useEffect(() => {
    if (!open) return
    trackEvent("autofill_starrating_popup_exposure", {
      current_url: window.location.href,
      type: "feedback",
    })
  }, [open])

  return jsxs(Modal, {
    open,
    title: null,
    footer: null,
    mask: true,
    closable: true,
    closeIcon: jsx(CloseIcon, {}),
    centered: true,
    onCancel,
    destroyOnClose: true,
    width: 480,
    styles: RATING_MODAL_STYLES,
    children: [
      jsxs(Flex, {
        align: "center",
        justify: "center",
        vertical: true,
        gap: 12,
        style: { paddingTop: 64 },
        children: [
          jsx("span", {
            style: TITLE_STYLE,
            children: "Thanks for your rating!",
          }),
          jsx("span", {
            style: BODY_TEXT_STYLE,
            children:
              "Could you tell us a little more? Your feedback helps us improve Autofill for you.",
          }),
        ],
      }),
      jsxs(Flex, {
        align: "center",
        justify: "center",
        gap: 12,
        style: { marginTop: 24 },
        children: [
          jsx(Button, {
            type: "default",
            style: DEFAULT_BUTTON_STYLE,
            onClick: onCancel,
            children: "Cancel",
          }),
          jsx(Button, {
            type: "primary",
            style: PRIMARY_BUTTON_STYLE,
            onClick: () => {
              setOpenFeedbackPopup(true)
              trackEvent("autofill_starrating_popup_click", {
                current_url: window.location.href,
                type: "feedback",
              })
              onCancel()
            },
            children: "Give Feedback",
          }),
        ],
      }),
    ],
  })
}
