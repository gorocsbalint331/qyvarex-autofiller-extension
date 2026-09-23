// @ts-nocheck
/**
 * Resume loading placeholder with linear progress + AI star animation.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Typography } from "antd"
import clsx from "clsx"
import * as infoSvg from "../../../../assets/inline/images/info.svg.js"
import Image from "../../../../ui/Image.ts"
import AiStarAnimation from "./AiStarAnimation.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

const CLASS_PREFIX = "resume-loading-"

export default function ResumeLoading({
  title,
  description,
  className,
  bordered = true,
}) {
  return jsxs(Flex, {
    vertical: true,
    align: "center",
    justify: "center",
    gap: 32,
    className: clsx(
      CLASS_PREFIX + "container",
      bordered && CLASS_PREFIX + "container-bordered",
      className,
    ),
    style: {
      width: "480px",
      padding: "48px 60px",
      borderRadius: "20px",
      background: "#ffffff",
      ...(bordered
        ? { boxShadow: "0 0 0 0.5px rgba(0, 0, 0, 0.06) inset" }
        : {}),
    },
    children: [
      jsx(AiStarAnimation, {}),
      jsxs("div", {
        className: CLASS_PREFIX + "linear-progress",
        style: {
          width: "360px",
          minWidth: "360px",
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
          display: "block",
          height: "2px",
          minHeight: "2px",
          borderRadius: "2px",
          background: "var(--base-color-grey, #f3f4f5)",
        },
        children: [
          jsx("span", {
            className: CLASS_PREFIX + "linear-progress-first",
            style: {
              position: "absolute",
              left: 0,
              bottom: 0,
              top: 0,
              transition: "transform 0.2s linear",
              transformOrigin: "left",
              borderRadius: "2px",
              background: "#000",
              width: "auto",
              animation:
                "animation-first 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
            },
          }),
          jsx("span", {
            className: CLASS_PREFIX + "linear-progress-second",
            style: {
              borderRadius: "2px",
              position: "absolute",
              left: 0,
              bottom: 0,
              top: 0,
              transition: "transform 0.2s linear",
              transformOrigin: "left",
              background: "#000",
              width: "auto",
              animation:
                "animation-second 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite",
            },
          }),
        ],
      }),
      title &&
        jsx(Typography.Text, {
          className: CLASS_PREFIX + "title",
          children: title,
        }),
      description &&
        jsxs(Flex, {
          gap: 8,
          className: CLASS_PREFIX + "description",
          children: [
            jsx(Image, {
              src: assetUrl(infoSvg),
              width: 16,
              height: 16,
              alt: "info-icon",
              preview: false,
            }),
            jsx(Typography.Paragraph, { children: description }),
          ],
        }),
    ],
  })
}
