// @ts-nocheck
/**
 * Prompt to add the current job before creating resume / cover letter.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Button, Flex, Modal } from "antd"
import * as jobSvg from "../../assets/inline/images/job.svg.js"
import { useContainerStore } from "../../store/container.ts"
import Image from "../../ui/Image.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function AddJobFirstPopup({ open, onConfirm, onCancel }) {
  const containerDom = useContainerStore((state) => state.containerDom)
  return jsxs(Modal, {
    open,
    title: null,
    footer: null,
    centered: true,
    wrapClassName: "popup-modal-wrap add-job-first-popup-wrap",
    className: "popup-modal add-job-first-popup",
    mask: true,
    closable: false,
    closeIcon: false,
    getContainer: () => containerDom,
    destroyOnClose: true,
    width: 304,
    children: [
      jsx(Image, {
        src: assetUrl(jobSvg),
        width: 48,
        height: 48,
        preview: false,
        className: "add-job-first-popup-icon",
      }),
      jsx("div", {
        className: "add-job-first-popup-title",
        children: "Add this job first",
      }),
      jsx("div", {
        className: "add-job-first-popup-desc",
        children:
          "To create a custom resume or cover letter, please add this job to Jobright first.",
      }),
      jsxs(Flex, {
        vertical: true,
        className: "add-job-first-popup-footer",
        gap: 8,
        children: [
          jsx(Button, {
            type: "primary",
            className: "add-job-first-popup-confirm-btn",
            onClick: onConfirm,
            children: "Add This Job",
          }),
          jsx(Button, {
            type: "default",
            className: "add-job-first-popup-cancel-btn",
            onClick: onCancel,
            children: "Not Now",
          }),
        ],
      }),
    ],
  })
}
