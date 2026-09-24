// @ts-nocheck
/**
 * Out-of-credit upsell modal.
 */

import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { Button, Flex, Modal } from "antd"
import * as turboPng from "../../assets/inline/images/turbo.png.js"
import { HOST_DOMAIN } from "../../api/env-resolver.ts"
import { MEMBERSHIP_RETARGET_PATH } from "../../constants/payment.ts"
import { useContainerStore } from "../../store/container.ts"
import { useProfileStore } from "../../store/profile.ts"
import Image from "../../ui/Image.ts"
import { trackEvent } from "../../utils/trace.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function OutofCreditModal() {
  const showOutofCredit = useProfileStore((state) => state.showOutofCredit)
  const setShowOutofCredit = useProfileStore(
    (state) => state.setShowOutofCredit,
  )
  const containerDom = useContainerStore((state) => state.containerDom)
  const showOutofCreditFrom = useProfileStore(
    (state) => state.showOutofCreditFrom,
  )
  const creditFeed = useProfileStore((state) => state.creditFeed)

  return jsxs(Modal, {
    open: showOutofCredit,
    wrapClassName: "popup-modal-wrap jobright-helper-centered-popup-wrap",
    className: "popup-modal",
    mask: false,
    title: null,
    closable: false,
    getContainer: () => containerDom,
    footer: null,
    width: 320,
    children: [
      jsx(Image, {
        src: assetUrl(turboPng),
        width: 60,
        height: 60,
        preview: false,
      }),
      jsx("div", {
        children:
          showOutofCreditFrom === "tooltip"
            ? jsxs(Fragment, {
                children: [
                  "Your credits refill to ",
                  creditFeed?.dailyFill?.autofill,
                  " every day. Upgrade to Turbo for unlimited use.",
                ],
              })
            : jsxs(Fragment, {
                children: [
                  "You have ",
                  jsx("strong", { children: "0" }),
                  " remaining Autofill credits. Your credits will be refilled up to ",
                  creditFeed?.dailyFill?.autofill,
                  " tomorrow. Upgrade to Turbo for unlimited use.",
                ],
              }),
      }),
      jsxs(Flex, {
        justify: "space-between",
        align: "center",
        gap: 12,
        className: "popup-modal-actions",
        children: [
          jsx(Button, {
            type: "default",
            onClick: () => setShowOutofCredit(false),
            children: "Cancel",
          }),
          jsx(Button, {
            type: "primary",
            onClick: () => {
              window.open(HOST_DOMAIN + MEMBERSHIP_RETARGET_PATH, "_blank")
              setShowOutofCredit(false)
              trackEvent("autofill_upgrade_click", {
                from: showOutofCreditFrom ? "" : "no_credit_popup",
              })
            },
            children: "Upgrade",
          }),
        ],
      }),
    ],
  })
}
