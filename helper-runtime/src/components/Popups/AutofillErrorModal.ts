// @ts-nocheck
/**
 * Autofill failure / extension-update error modal.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Button, Flex, Modal } from "antd"
import { useContainerStore } from "../../store/container.ts"
import { useProfileStore } from "../../store/profile.ts"

export default function AutofillErrorModal({ onRetry }) {
  const showErrorPopup = useProfileStore((state) => state.showErrorPopup)
  const autofillErrorReason = useProfileStore(
    (state) => state.autofillErrorReason,
  )
  const setShowErrorPopup = useProfileStore((state) => state.setShowErrorPopup)
  const containerDom = useContainerStore((state) => state.containerDom)

  const isExtensionUpdated = autofillErrorReason === "extension_updated"
  const isNoFillableForm = autofillErrorReason === "no_fillable_form"

  const handleRefreshPage = () => {
    setShowErrorPopup(false)
    try {
      ;(window.top ?? window).location.reload()
    } catch {
      window.location.reload()
    }
  }

  const message = isExtensionUpdated
    ? "Jobright extension has been updated. Please refresh this page to reload the extension."
    : isNoFillableForm
      ? "No fillable application form was found on this page."
      : "Autofill failed, please try it later. If the issue persists, contact us at support@jobright.ai"

  return jsxs(Modal, {
    open: showErrorPopup,
    wrapClassName: "popup-modal-wrap jobright-helper-centered-popup-wrap",
    className: isExtensionUpdated
      ? "popup-modal extension-update-modal"
      : "popup-modal",
    mask: false,
    title: null,
    closable: false,
    getContainer: () => containerDom,
    footer: null,
    width: 320,
    children: [
      jsx("div", {
        className: isExtensionUpdated
          ? "extension-update-modal-message"
          : undefined,
        children: message,
      }),
      jsxs(Flex, {
        justify: "space-between",
        align: "center",
        gap: 12,
        className: isExtensionUpdated
          ? "popup-modal-actions extension-update-modal-actions"
          : "popup-modal-actions",
        children: [
          jsx(Button, {
            type: "default",
            onClick: () => setShowErrorPopup(false),
            children: "Cancel",
          }),
          isExtensionUpdated
            ? jsx(Button, {
                type: "primary",
                onClick: handleRefreshPage,
                children: "Refresh Page",
              })
            : jsx(Button, {
                type: "primary",
                onClick: () => {
                  onRetry()
                  setShowErrorPopup(false)
                },
                children: "Try Again",
              }),
        ],
      }),
    ],
  })
}
