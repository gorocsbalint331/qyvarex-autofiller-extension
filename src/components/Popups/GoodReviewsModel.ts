// @ts-nocheck
/**
 * Invite a positive rater to leave a Chrome Web Store review.
 */

import { useEffect } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { Button, Flex, Modal } from "antd"
import * as goodStarSvg from "../../assets/inline/images/goodstar.svg.js"
import {
  BODY_TEXT_STYLE,
  CloseIcon,
  DEFAULT_BUTTON_STYLE,
  PRIMARY_BUTTON_STYLE,
  RATING_MODAL_STYLES,
  TITLE_STYLE,
} from "../StarRatingModal/shared.ts"
import Image from "../../ui/Image.ts"
import { trackEvent } from "../../utils/trace.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

const CHROME_WEB_STORE_REVIEW_URL =
  "https://chromewebstore.google.com/detail/jobright-autofill-\u2013-insta/odcnpipkhjegpefkfplmedhmkmmhmoko/reviews"

export default function GoodReviewsModel({ open, onCancel, onConfirm }) {
  useEffect(() => {
    if (!open) return
    trackEvent("autofill_starrating_popup_exposure", {
      current_url: window.location.href,
      type: "webstore",
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
        style: { paddingTop: 40 },
        children: [
          jsx(Image, {
            src: assetUrl(goodStarSvg),
            height: 96,
            width: 96,
            preview: false,
          }),
          jsx("span", {
            style: TITLE_STYLE,
            children: "Leave a Quick Review",
          }),
          jsx("span", {
            style: BODY_TEXT_STYLE,
            children:
              "Your feedback means a lot to us. Could you leave a quick review on the Chrome Web Store?",
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
            children: "Maybe Later",
          }),
          jsx(Button, {
            type: "primary",
            style: PRIMARY_BUTTON_STYLE,
            onClick: () => {
              trackEvent("autofill_starrating_popup_click", {
                current_url: window.location.href,
                type: "webstore",
              })
              window.open(CHROME_WEB_STORE_REVIEW_URL)
              onConfirm()
            },
            children: "Yes, I'd love to",
          }),
        ],
      }),
    ],
  })
}
