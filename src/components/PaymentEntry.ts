// @ts-nocheck
/**
 * Turbo upgrade banner in the helper header.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Typography } from "antd"
import clsx from "clsx"
import * as turboPng from "../assets/inline/images/turbo.png.js"
import { useEffect } from "react"
import { useStorage } from "@plasmohq/storage/hook"
import { HOST_DOMAIN } from "../api/env-resolver.ts"
import { MEMBERSHIP_RETARGET_PATH } from "../constants/payment.ts"
import { STORAGE_KEY } from "../enums/storage.ts"
import { useProfileStore } from "../store/profile.ts"
import Image from "../ui/Image.ts"
import { trackEvent } from "../utils/trace.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function PaymentEntry() {
  const [turboEntryClosed, setTurboEntryClosed] = useStorage(
    STORAGE_KEY.TURBO_ENTRY_CLOSED,
    false,
  )
  const creditsLeft = useProfileStore((state) => state.creditsLeft)
  const creditSwitchStatus = useProfileStore((state) => state.creditSwitchStatus)
  const priceRecord = useProfileStore((state) => state.priceRecord)
  const autofillConfig = useProfileStore((state) => state.autofillConfig)
  const paymentDataLoaded = useProfileStore((state) => state.paymentDataLoaded)

  const isStudentPricing =
    !!priceRecord?.student?.monthly &&
    !!priceRecord?.student?.quarterly &&
    !!priceRecord?.student?.weekly

  const showBanner =
    paymentDataLoaded &&
    !creditsLeft?.subscribed &&
    !!creditSwitchStatus &&
    !turboEntryClosed

  useEffect(() => {
    if (showBanner && paymentDataLoaded) {
      trackEvent("autofill_extension_turbo_banner_show", {})
    }
  }, [showBanner, paymentDataLoaded, creditsLeft?.subscribed, isStudentPricing])

  function handleBannerClick() {
    trackEvent("autofill_extension_turbo_banner_click", {})
    window.open(`${HOST_DOMAIN}${MEMBERSHIP_RETARGET_PATH}`, "_blank")
  }

  function handleClose() {
    trackEvent("autofill_extension_turbo_banner_close", {})
    setTurboEntryClosed(true)
  }

  function bannerCopy() {
    return isStudentPricing
      ? autofillConfig?.autofillStuBannerCopyResolved ||
          "Turbo for Students: Get Hired Faster!"
      : autofillConfig?.autofillBannerCopyResolved ||
          "Upgrade to Turbo: Get Hired Faster"
  }

  const quarterlyPlan = isStudentPricing
    ? priceRecord?.student?.quarterly
    : priceRecord?.standard?.quarterly
  const standardPrice = quarterlyPlan?.standardPrice
  const currentPrice = quarterlyPlan?.currentPrice
  const discountPercent =
    standardPrice != null &&
    currentPrice != null &&
    standardPrice > 0 &&
    standardPrice > currentPrice
      ? Math.round(((standardPrice - currentPrice) / standardPrice) * 100)
      : null

  if (!(paymentDataLoaded && showBanner)) return null

  return jsxs(Flex, {
    gap: 4,
    align: "center",
    justify: "space-between",
    className: clsx("payment-entry", {
      "payment-entry-padding": !isStudentPricing,
    }),
    onClick: handleBannerClick,
    children: [
      jsxs(Flex, {
        gap: 4,
        align: "center",
        className: "payment-entry-left",
        children: [
          jsx(Image, {
            src: assetUrl(turboPng),
            width: 24,
            height: 24,
            alt: "turbo",
            preview: false,
            className: "payment-entry-icon",
          }),
          jsxs(Flex, {
            flex: 1,
            align: "center",
            gap: 4,
            className: "payment-entry-content",
            children: [
              jsx(Typography.Text, {
                ellipsis: true,
                className: "payment-entry-text",
                children: bannerCopy(),
              }),
              discountPercent != null &&
                discountPercent > 0 &&
                jsxs("span", {
                  className: "payment-entry-amount",
                  children: [discountPercent, "%Off"],
                }),
            ],
          }),
        ],
      }),
      jsx("span", {
        role: "button",
        tabIndex: 0,
        className: "payment-entry-close",
        onClick: (event) => {
          event.stopPropagation()
          handleClose()
        },
        style: {
          cursor: "pointer",
          display: "flex",
        },
        children: jsxs("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            jsx("path", {
              d: "M11.5 3.5L4.5 10.5",
              stroke: "black",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            jsx("path", {
              d: "M4.5 3.5L11.5 10.5",
              stroke: "black",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
      }),
    ],
  })
}
