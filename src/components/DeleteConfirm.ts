// @ts-nocheck
/**
 * Two-step delete control for autofill info list rows.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Button } from "antd"
import * as closeMiniSvg from "../assets/inline/images/close_mini.svg.js"
import * as confirmSvg from "../assets/inline/images/confirm.svg.js"

function assetUrl(mod) {
  return mod?.default ?? mod
}

function TrashIcon() {
  return jsxs("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 15.5602 15.58",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: [
      jsx("path", {
        d: "M3.28012 14.58L1.78006 13.08L1.78012 2.58L5.28012 3.08L5.78012 1.08L7.78018 0.08L9.78012 1.08V3.08L13.7801 2.58L13.2801 13.58L12.2801 14.58H3.28012Z",
        fill: "white",
      }),
      jsx("path", {
        d: "M13.8765 12.6796C13.8226 14.2965 12.4963 15.5798 10.8785 15.58H4.6812L4.3814 15.5653C2.90264 15.4181 1.73368 14.1953 1.68315 12.6796L1.34722 2.62002L2.5103 2.70303L2.84233 12.6415C2.8755 13.633 3.68921 14.4195 4.6812 14.4198H10.8785C11.8706 14.4197 12.6842 13.6331 12.7173 12.6415L13.0611 2.3251L14.2271 2.15811L13.8765 12.6796Z",
        fill: "black",
      }),
      jsx("path", {
        d: "M0.580117 2.08C5.32913 3.06938 10.2311 3.06938 14.9801 2.08",
        stroke: "black",
        strokeWidth: "1.16",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      jsx("path", {
        d: "M5.78012 2.58C5.78012 1.47543 6.67555 0.58 7.78012 0.58C8.88469 0.58 9.78012 1.47543 9.78012 2.58",
        stroke: "black",
        strokeWidth: "1.16",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      jsx("path", {
        d: "M6.28012 6.08V11.08",
        stroke: "black",
        strokeWidth: "1.16",
        strokeLinecap: "round",
      }),
      jsx("path", {
        d: "M9.28012 6.08V11.08",
        stroke: "black",
        strokeWidth: "1.16",
        strokeLinecap: "round",
      }),
    ],
  })
}

export function DeleteConfirm({
  isConfirming,
  confirmText,
  onRequestConfirm,
  onConfirm,
  onCancel,
}) {
  if (isConfirming) {
    return jsxs("div", {
      className: "autofill-info-modal-delete-confirm",
      children: [
        jsx("span", {
          className: "autofill-info-modal-delete-confirm-text",
          children: confirmText,
        }),
        jsx("button", {
          className: "autofill-info-modal-delete-confirm-btn",
          onClick: onConfirm,
          children: jsx("img", {
            src: assetUrl(confirmSvg),
            alt: "confirm",
            width: 16,
            height: 16,
          }),
        }),
        jsx("button", {
          className: "autofill-info-modal-delete-confirm-btn",
          onClick: onCancel,
          children: jsx("img", {
            src: assetUrl(closeMiniSvg),
            alt: "cancel",
            width: 16,
            height: 16,
          }),
        }),
      ],
    })
  }

  return jsx(Button, {
    className: "autofill-info-modal-delete",
    icon: jsx(TrashIcon, {}),
    "aria-label": "delete",
    onClick: onRequestConfirm,
  })
}
