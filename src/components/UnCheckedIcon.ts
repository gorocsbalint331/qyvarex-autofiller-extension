// @ts-nocheck
/**
 * Unchecked / missing-field icon for autofill field lists.
 */

import { jsx } from "react/jsx-runtime"
import * as lineSvg from "../assets/inline/images/line.svg.js"
import Image from "../ui/Image.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function UnCheckedIcon() {
  return jsx("div", {
    className: "unchecked-icon",
    children: jsx(Image, {
      preview: false,
      src: assetUrl(lineSvg),
      height: 12,
      width: 12,
      style: {
        minWidth: 12,
        minHeight: 12,
      },
    }),
  })
}
