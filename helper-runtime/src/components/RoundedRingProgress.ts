// @ts-nocheck
/**
 * Capsule-shaped SVG ring progress with optional percent label.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { useId, useMemo } from "react"

export default function RoundedRingProgress({
  progress,
  width = 56,
  height = 32,
  strokeWidth = 2,
  gradient = ["#50FABE", "#A0FA96"],
  progressText,
}) {
  const gradientId = useId().replace(/:/g, "")
  const clamped = Math.max(0, Math.min(1, progress || 0))
  const halfStroke = strokeWidth / 2
  const innerWidth = width - strokeWidth
  const innerHeight = height - strokeWidth
  const radius = innerHeight / 2
  const straightLength = Math.max(innerWidth - innerHeight, 0)
  const labelBox = { left: 13, top: 9, width: 30, height: 16 }

  const { trackPath, trackLength } = useMemo(() => {
    const path = `M ${width / 2} ${height - halfStroke} H ${halfStroke + radius} A ${radius} ${radius} 0 0 1 ${halfStroke + radius} ${halfStroke} H ${width - halfStroke - radius} A ${radius} ${radius} 0 0 1 ${width - halfStroke - radius} ${height - halfStroke} H ${width / 2}`
    return {
      trackPath: path,
      trackLength: 2 * straightLength + 2 * Math.PI * radius,
    }
  }, [height, halfStroke, radius, straightLength, width])

  const dashOffset = trackLength * (1 - clamped)

  return jsxs("div", {
    style: {
      position: "relative",
      width,
      height,
    },
    children: [
      jsxs("svg", {
        width,
        height,
        viewBox: `0 0 ${width} ${height}`,
        style: {
          display: "block",
          overflow: "visible",
        },
        children: [
          jsx("defs", {
            children: jsxs("linearGradient", {
              id: gradientId,
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                jsx("stop", {
                  offset: "0%",
                  stopColor: gradient[0],
                }),
                jsx("stop", {
                  offset: "100%",
                  stopColor: gradient[1],
                }),
              ],
            }),
          }),
          jsx("rect", {
            x: halfStroke,
            y: halfStroke,
            width: innerWidth,
            height: innerHeight,
            rx: radius,
            ry: radius,
            fill: "none",
            stroke: "#F3F4F5",
            strokeWidth,
          }),
          jsx("path", {
            d: trackPath,
            fill: "none",
            stroke: `url(#${gradientId})`,
            strokeWidth,
            strokeDasharray: trackLength,
            strokeDashoffset: dashOffset,
            strokeLinecap: "round",
          }),
        ],
      }),
      progressText !== undefined &&
        jsx("div", {
          style: {
            position: "absolute",
            left: labelBox.left,
            top: labelBox.top,
            width: labelBox.width,
            height: labelBox.height,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            pointerEvents: "none",
          },
          children: jsxs("div", {
            style: {
              display: "inline-flex",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: 0,
              width: "100%",
              height: "100%",
              whiteSpace: "nowrap",
              flexWrap: "nowrap",
            },
            children: [
              jsx("span", {
                style: {
                  color: "var(--mainFill, var(--base-color-black, #000))",
                  textAlign: "center",
                  fontFamily: "Rubik, Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: "16px",
                  flexShrink: 0,
                },
                children: progressText,
              }),
              jsx("span", {
                style: {
                  color: "var(--mainFill, var(--base-color-black, #000))",
                  fontFamily: "Rubik, Inter, sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  fontStyle: "normal",
                  lineHeight: "15px",
                  flexShrink: 0,
                  transform: "translateY(1px)",
                },
                children: "%",
              }),
            ],
          }),
        }),
    ],
  })
}
