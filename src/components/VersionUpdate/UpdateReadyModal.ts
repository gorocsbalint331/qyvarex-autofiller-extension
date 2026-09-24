// @ts-nocheck
/**
 * Modal shown when a downloaded update is ready to apply via refresh.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Modal } from "antd"
import * as oktagSvg from "../../assets/inline/images/oktag.svg.js"
import { useContainerStore } from "../../store/container.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export function UpdateReadyModal({
  open,
  targetVersion,
  submitting,
  onRefresh,
  onLater,
}) {
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
        jsx("img", {
          src: assetUrl(oktagSvg),
          width: 48,
          height: 48,
          alt: "",
        }),
        jsxs("div", {
          className: "jobright-version-modal-texts",
          children: [
            jsx("div", {
              className: "jobright-version-modal-title",
              children: "Autofill is ready to refresh",
            }),
            jsxs("div", {
              className: "jobright-version-modal-desc",
              children: [
                "The update has been downloaded. Refresh Autofill to finish updating",
                targetVersion ? ` to v${targetVersion}` : "",
                ". Your application page will stay open.",
              ],
            }),
          ],
        }),
        jsxs("div", {
          className: "jobright-version-modal-actions",
          children: [
            jsx("button", {
              type: "button",
              className: "jobright-version-modal-primary",
              disabled: submitting,
              onClick: onRefresh,
              children: "Refresh Autofill",
            }),
            jsx("button", {
              type: "button",
              className: "jobright-version-modal-secondary",
              disabled: submitting,
              onClick: onLater,
              children: "Later",
            }),
          ],
        }),
      ],
    }),
  })
}

export default UpdateReadyModal
