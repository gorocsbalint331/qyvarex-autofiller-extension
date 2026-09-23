// @ts-nocheck
/**
 * Lottie AI-star animation used by resume loading states.
 */

import { jsx } from "react/jsx-runtime"
import Lottie from "react-lottie"
import * as aiStarLottie from "../../../../assets/lottie/aistar.json.js"

function assetData(mod) {
  return mod?.default ?? mod
}

export default function AiStarAnimation() {
  return jsx(Lottie, {
    width: 40,
    height: 40,
    options: {
      animationData: assetData(aiStarLottie),
      loop: true,
      autoplay: true,
    },
  })
}
