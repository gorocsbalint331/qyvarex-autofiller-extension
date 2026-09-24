// @ts-nocheck
/**
 * Empty state with optional CTA button.
 */

import { jsx } from "react/jsx-runtime"
import { Empty } from "antd"
import clsx from "clsx"
import BasicButton from "./BasicButton.ts"

const CLASS_PREFIX = "empty-hint-"

export default function EmptyHint({
  className,
  image,
  description,
  buttonText,
  onClick,
}) {
  return jsx(Empty, {
    className: clsx(`${CLASS_PREFIX}container`, className),
    image,
    description: jsx("div", {
      className: `${CLASS_PREFIX}message`,
      children: description,
    }),
    children:
      !!buttonText &&
      jsx(BasicButton, {
        className: `${CLASS_PREFIX}button`,
        onClick,
        children: buttonText,
      }),
  })
}
