// @ts-nocheck
/**
 * Post-autofill star rating modal; routes to webstore or feedback follow-ups.
 */

import { useEffect, useState } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { Flex, Modal, Rate } from "antd"
import * as logoBirdSvg from "../assets/inline/images/logo_bird.svg.js"
import { useFeedbackStore } from "../store/feedback.ts"
import Image from "../ui/Image.ts"
import {
  recordStarRatingClicked,
  recordStarRatingNoClick,
} from "../utils/starRating.ts"
import { trackEvent } from "../utils/trace.ts"
import CriticizeReviewsModal from "./Popups/CriticizeReviewsModal.ts"
import GoodReviewsModel from "./Popups/GoodReviewsModel.ts"
import {
  CloseIcon,
  RATING_MODAL_STYLES,
  TITLE_STYLE,
} from "./StarRatingModal/shared.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

function StarCharacter() {
  return jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: jsx("path", {
      d: "M10.9679 0.800065C11.303 -0.266687 12.697 -0.266689 13.032 0.800063L15.1453 7.52891C15.2956 8.00726 15.7106 8.32897 16.1774 8.32897H22.9079C23.9757 8.32897 24.4067 9.81848 23.5297 10.4777L18.1704 14.5059C17.771 14.8061 17.6037 15.3563 17.7602 15.8546L19.827 22.4353C20.1654 23.5129 19.0369 24.4332 18.1731 23.7839L12.6217 19.6113C12.2479 19.3303 11.7521 19.3303 11.3782 19.6113L5.8268 23.7839C4.96305 24.4332 3.83455 23.5129 4.17299 22.4353L6.23978 15.8546C6.39627 15.3563 6.2289 14.8061 5.82951 14.5059L0.470309 10.4777C-0.406745 9.81848 0.0242682 8.32897 1.09208 8.32897H7.82257C8.28938 8.32897 8.70438 8.00726 8.85461 7.52891L10.9679 0.800065Z",
      fill: "currentColor",
    }),
  })
}

export default function StarRatingModal() {
  const showStarRatingModal = useFeedbackStore(
    (state) => state.showStarRatingModal,
  )
  const setShowStarRatingModal = useFeedbackStore(
    (state) => state.setShowStarRatingModal,
  )
  const [showGoodReviews, setShowGoodReviews] = useState(false)
  const [showCriticizeReviews, setShowCriticizeReviews] = useState(false)
  const [hasRated, setHasRated] = useState(false)

  useEffect(() => {
    if (!showStarRatingModal) return
    setHasRated(false)
    trackEvent("autofill_starrating_exposure", {
      current_url: window.location.href,
    })
  }, [showStarRatingModal])

  const handleDismiss = async () => {
    setShowStarRatingModal(false)
    if (!hasRated) await recordStarRatingNoClick()
  }

  return jsxs(Fragment, {
    children: [
      jsx(Modal, {
        open: showStarRatingModal && !showGoodReviews && !showCriticizeReviews,
        title: null,
        footer: null,
        centered: true,
        closable: true,
        closeIcon: jsx(CloseIcon, {}),
        onCancel: handleDismiss,
        mask: true,
        maskClosable: false,
        destroyOnClose: true,
        width: 480,
        styles: RATING_MODAL_STYLES,
        children: jsxs(Flex, {
          align: "center",
          justify: "center",
          vertical: true,
          gap: 12,
          style: {
            paddingTop: 64,
            paddingBottom: 32,
          },
          children: [
            jsx(Image, {
              src: assetUrl(logoBirdSvg),
              width: 48,
              height: 48,
              preview: false,
              alt: "Qyvarex",
            }),
            jsx("span", {
              style: {
                ...TITLE_STYLE,
                textTransform: "capitalize",
                maxWidth: 354,
              },
              children: "How Was Your Jobright Autofill Experience?",
            }),
            jsx(Rate, {
              className: "star-rating-modal-rate",
              style: {
                fontSize: 32,
                color: "#FDA700",
              },
              character: jsx(StarCharacter, {}),
              onChange: async (rating) => {
                setHasRated(true)
                await recordStarRatingClicked()
                trackEvent("autofill_starrating_click", {
                  current_url: window.location.href,
                  rating,
                })
                if (rating === 5) {
                  setShowGoodReviews(true)
                } else if (rating > 0) {
                  setShowCriticizeReviews(true)
                }
              },
            }),
          ],
        }),
      }),
      jsx(GoodReviewsModel, {
        open: showGoodReviews,
        onCancel: () => {
          setShowGoodReviews(false)
          setShowStarRatingModal(false)
        },
        onConfirm: () => {
          setShowGoodReviews(false)
          setShowStarRatingModal(false)
        },
      }),
      jsx(CriticizeReviewsModal, {
        open: showCriticizeReviews,
        onCancel: () => {
          setShowCriticizeReviews(false)
          setShowStarRatingModal(false)
        },
      }),
    ],
  })
}
