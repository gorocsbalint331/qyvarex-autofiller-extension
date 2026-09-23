// @ts-nocheck
/**
 * Generic confirm/cancel modal used by editor reload and similar flows.
 */

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

export default function PageConfirmPopup({
  open,
  title,
  content,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  getContainer,
  zIndex,
}) {
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
    zIndex,
    getContainer,
    styles: RATING_MODAL_STYLES,
    children: [
      jsxs(Flex, {
        align: "center",
        justify: "center",
        vertical: true,
        gap: 12,
        style: { paddingTop: 64 },
        children: [
          jsx("span", { style: TITLE_STYLE, children: title }),
          jsx("span", { style: BODY_TEXT_STYLE, children: content }),
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
            children: cancelText,
          }),
          jsx(Button, {
            type: "primary",
            style: PRIMARY_BUTTON_STYLE,
            onClick: onConfirm,
            children: confirmText,
          }),
        ],
      }),
    ],
  })
}
