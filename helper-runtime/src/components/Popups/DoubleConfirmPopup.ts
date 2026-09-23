// @ts-nocheck
/**
 * Confirm re-running autofill (optionally don't ask again).
 */

import { useState } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { Button, Checkbox, Flex, Modal } from "antd"
import * as noteSvg from "../../assets/inline/images/note.svg.js"
import { useContainerStore } from "../../store/container.ts"
import { useProfileStore } from "../../store/profile.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function DoubleConfirmPopup({ open, onConfirm, onCancel }) {
  const [doNotAskAgain, setDoNotAskAgain] = useState(false)
  const setAutofillDoNotAskAgain = useProfileStore(
    (state) => state.setAutofillDoNotAskAgain,
  )
  const containerDom = useContainerStore((state) => state.containerDom)

  return jsxs(Modal, {
    open,
    title: null,
    footer: null,
    centered: true,
    wrapClassName: "popup-modal-wrap jobright-helper-double-confirm-popup-wrap",
    className: "popup-modal jobright-helper-double-confirm-popup",
    mask: false,
    closable: false,
    closeIcon: false,
    getContainer: () => containerDom,
    destroyOnClose: true,
    width: 320,
    children: [
      jsx("img", {
        src: assetUrl(noteSvg),
        width: 48,
        height: 48,
        alt: "",
        className: "jobright-helper-double-confirm-popup-icon",
      }),
      jsx("div", {
        className: "jobright-helper-double-confirm-popup-desc",
        children:
          "Are you sure to autofill again the current form? This will overwrite your current progress.",
      }),
      jsx(Flex, {
        align: "center",
        justify: "center",
        className: "jobright-helper-double-confirm-popup-checkbox-row",
        children: jsx(Checkbox, {
          checked: doNotAskAgain,
          onChange: (event) => setDoNotAskAgain(event.target.checked),
          className: "jobright-helper-double-confirm-popup-checkbox",
          children: "Don't ask again",
        }),
      }),
      jsxs(Flex, {
        vertical: true,
        className: "jobright-helper-double-confirm-popup-footer",
        gap: 8,
        children: [
          jsx(Button, {
            type: "primary",
            className: "jobright-helper-double-confirm-popup-confirm-btn",
            onClick: () => {
              if (doNotAskAgain) setAutofillDoNotAskAgain(true)
              onConfirm?.()
            },
            children: "Yes",
          }),
          jsx(Button, {
            type: "default",
            className: "jobright-helper-double-confirm-popup-cancel-btn",
            onClick: onCancel,
            children: "Cancel",
          }),
        ],
      }),
    ],
  })
}
