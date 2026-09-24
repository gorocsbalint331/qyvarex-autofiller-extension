// @ts-nocheck
/**
 * Horizontal score picker (1–N) with hover highlight.
 */

import { jsx } from "react/jsx-runtime"
import { Flex } from "antd"
import clsx from "clsx"
import { useState } from "react"
import BasicButton from "./BasicButton.ts"

export default function CustomRate({
  scores,
  className,
  buttonClassName,
  onSelect,
}) {
  const [hoverScore, setHoverScore] = useState(undefined)
  const [isHovering, setIsHovering] = useState(false)
  const [selectedScore, setSelectedScore] = useState(undefined)

  return jsx(Flex, {
    gap: 8,
    className,
    onMouseLeave: () => {
      setIsHovering(false)
    },
    onMouseEnter: () => {
      setIsHovering(true)
    },
    children: scores.map((score) =>
      jsx(
        BasicButton,
        {
          className: clsx("rate-button", "rate-button-overwrite", buttonClassName, {
            "rate-button-hightlight": isHovering
              ? hoverScore !== undefined && score <= hoverScore
              : selectedScore !== undefined && score <= selectedScore,
          }),
          onClick: () => {
            setSelectedScore(score)
            onSelect?.(score)
          },
          onMouseEnter: () => {
            setHoverScore(score)
          },
          children: score,
        },
        score,
      ),
    ),
  })
}
