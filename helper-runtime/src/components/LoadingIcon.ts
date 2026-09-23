// @ts-nocheck
/**
 * Spinning loading indicator for autofill field lists.
 */

import { jsx } from "react/jsx-runtime"
import * as loadingPng from "../assets/inline/images/loading.png.js"
import Image from "../ui/Image.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function LoadingIcon() {
  return jsx("div", {
    className: "loading-icon",
    children: jsx(Image, {
      className: "spin-loading",
      src: assetUrl(loadingPng),
      height: 12,
      width: 12,
      style: {
        minWidth: 12,
        minHeight: 12,
      },
      preview: false,
    }),
  })
}
