// @ts-nocheck
/**
 * Resume / cover-letter drawer footer: return, primary (or dropdown), extras.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Button, Dropdown, Flex } from "antd"
import BasicButton from "../../../../ui/BasicButton.ts"
import Image from "../../../../ui/Image.ts"
import SimpleButton from "../../../../ui/SimpleButton.ts"

export default function DrawerFooter({
  primary,
  onClick,
  onReturn,
  items,
  primaryIcon,
  primaryMenuItems,
  loading = false,
}) {
  const primaryButton = jsx(SimpleButton, {
    shape: "round",
    className: "resume-align-submit-button",
    onClick,
    disabled: loading,
    icon: primaryIcon,
    children: primary,
  })

  const downloadTrigger = jsx(Button, {
    shape: "round",
    className: "resume-align-submit-button download-button",
    disabled: loading,
    icon: primaryIcon,
    children: primary,
  })

  return jsxs(Flex, {
    id: "resume-align-submit-container",
    gap: 12,
    children: [
      typeof onReturn === "function" &&
        jsx(BasicButton, {
          className: "resume-align-return-button",
          onClick: onReturn,
          icon: jsx(Image, {
            src: "/newimages/public/back.svg",
            width: 24,
            height: 24,
            alt: "back",
          }),
        }),
      primaryMenuItems && primaryMenuItems.length
        ? jsx(Dropdown, {
            trigger: ["click"],
            placement: "topLeft",
            menu: { items: primaryMenuItems },
            getPopupContainer: (node) => node.parentElement || document.body,
            children: downloadTrigger,
          })
        : onClick
          ? primaryButton
          : null,
      items
        ? items.map((item) =>
            jsx(
              SimpleButton,
              {
                shape: "round",
                className: "resume-align-submit-button",
                disabled: loading || item.disabled,
                onClick: item.onClick,
                children: item.label,
              },
              item?.key,
            ),
          )
        : null,
    ],
  })
}
