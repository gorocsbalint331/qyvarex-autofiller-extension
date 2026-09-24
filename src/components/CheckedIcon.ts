// @ts-nocheck
/**
 * Small checked/conform icon used in autofill field lists.
 */

import { jsx } from "react/jsx-runtime"
import * as conformSvg from "../assets/inline/images/conform.svg.js"
import Image from "../ui/Image.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function CheckedIcon() {
  return jsx("div", {
    className: "checked-icon",
    children: jsx(Image, {
      preview: false,
      src: assetUrl(conformSvg),
      height: 12,
      width: 12,
      style: {
        minWidth: 12,
        minHeight: 12,
      },
    }),
  })
}
