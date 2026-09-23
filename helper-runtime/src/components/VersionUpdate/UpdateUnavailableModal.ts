// @ts-nocheck
/**
 * Modal shown when Chrome could not complete an extension update.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Modal } from "antd"
import * as warnSvg from "../../assets/inline/images/warn_b.svg.js"
import { useContainerStore } from "../../store/container.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export function UpdateUnavailableModal({ open, onTryAgainLater }) {
  const containerDom = useContainerStore((state) => state.containerDom)

  return jsx(Modal, {
    open,
    title: null,
    footer: null,
    centered: true,
    wrapClassName: "popup-modal-wrap jobright-version-modal-wrap",
    className: "popup-modal jobright-version-modal",
    closable: false,
    closeIcon: false,
    getContainer: () => containerDom,
    destroyOnClose: true,
    width: 320,
    children: jsxs("div", {
      className: "jobright-version-modal-body",
      children: [
        jsx("div", {
          className: "jobright-version-modal-warn-icon",
          children: jsx("img", {
            src: assetUrl(warnSvg),
            width: 32,
            height: 32,
            alt: "",
          }),
        }),
        jsxs("div", {
          className: "jobright-version-modal-texts",
          children: [
            jsx("div", {
              className: "jobright-version-modal-title",
              children: "Update not available right now",
            }),
            jsx("div", {
              className: "jobright-version-modal-desc",
              children:
                "Chrome couldn’t complete the update. Your current Autofill version will keep working.",
            }),
          ],
        }),
        jsx("div", {
          className: "jobright-version-modal-actions",
          children: jsx("button", {
            type: "button",
            className: "jobright-version-modal-primary",
            onClick: onTryAgainLater,
            children: "Try Again Later",
          }),
        }),
      ],
    }),
  })
}

export default UpdateUnavailableModal
