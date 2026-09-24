// @ts-nocheck
/**
 * Match-score gauge ring for the LinkedIn banner.
 */

import { useMemo } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Tooltip } from "antd"
import * as infoDarkSvg from "../../assets/inline/images/info-dark.svg.js"
import * as infoSvg from "../../assets/inline/images/info.svg.js"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export const REPORT_SCORE_LEVEL = {
  POOR: "Poor",
  FAIR: "Fair",
  EXCELLENT: "Excellent",
}

export function getScoreLevel(score) {
  if (Number.isNaN(score)) return REPORT_SCORE_LEVEL.POOR
  if (score >= 9) return REPORT_SCORE_LEVEL.EXCELLENT
  if (score >= 6.1) return REPORT_SCORE_LEVEL.FAIR
  if (score >= 0) return REPORT_SCORE_LEVEL.POOR
  return undefined
}

function Needle({ value, max = 10 }) {
  const startAngle = -180
  const endAngle = 0
  const sweep = endAngle - startAngle
  const clamped = Math.max(0, Math.min(max, value))
  const ratio = clamped / max
  const angle = startAngle + ratio * sweep

  return jsx("div", {
    style: {
      position: "absolute",
      bottom: "4px",
      left: "50%",
      width: "44px",
      height: "0.5px",
      transformOrigin: "left center",
      transform: `rotate(${angle}deg)`,
    },
    children: jsx("div", {
      style: {
        position: "absolute",
        right: 0,
        top: "50%",
        width: "12px",
        height: "12px",
        background: "#FFFFFF",
        border: "1.76px solid #000000",
        borderRadius: "50%",
        boxSizing: "border-box",
        transform: "translate(50%, -50%)",
      },
    }),
  })
}

export default function Ring({
  missing,
  score,
  max = 10,
  unit,
  darkMode,
}) {
  const [displayScore, scoreLevel] = useMemo(() => {
    const clamped = Math.max(Math.min(score, max), 0)
    return [clamped, getScoreLevel(score)]
  }, [score, max])

  const fractionDigits = Math.floor(10 / max)

  return jsxs(Flex, {
    style: {
      height: "80px",
      position: "relative",
    },
    vertical: true,
    justify: "end",
    align: "center",
    children: [
      jsxs("div", {
        style: {
          position: "absolute",
          bottom: "26px",
          height: "52px",
        },
        children: [
          jsxs("svg", {
            width: "96",
            height: "52",
            viewBox: "0 0 96 52",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              jsx("g", {
                clipPath: "url(#paint0_angular_3_16283_clip_path)",
                "data-figma-skip-parse": "true",
                children: jsx("g", {
                  transform: "matrix(0 0.0700333 -0.0700333 0 48 26)",
                  children: jsx("foreignObject", {
                    x: "-742.504",
                    y: "-742.504",
                    width: "1485.01",
                    height: "1485.01",
                    children: jsx("div", {
                      style: {
                        background:
                          "conic-gradient(from 90deg,rgba(164, 175, 95, 1) 0deg,rgba(255, 103, 57, 1) 38.4578deg,rgba(255, 222, 106, 1) 134.247deg,rgba(66, 221, 255, 1) 225.133deg,rgba(75, 246, 133, 1) 322.2deg,rgba(164, 175, 95, 1) 360deg)",
                        height: "100%",
                        width: "100%",
                        opacity: 1,
                      },
                    }),
                  }),
                }),
              }),
              jsx("path", {
                d: "M88 48C88 50.2091 89.7909 52 92 52C94.2091 52 96 50.2091 96 48H92H88ZM0 48C0 50.2091 1.79086 52 4 52C6.20914 52 8 50.2091 8 48H4H0ZM4 48H8C8 25.9086 25.9086 8 48 8V4V0C21.4903 0 0 21.4903 0 48H4ZM48 4V8C70.0914 8 88 25.9086 88 48H92H96C96 21.4903 74.5097 0 48 0V4Z",
                "data-figma-gradient-fill":
                  '{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":1.0,"g":0.40553957223892212,"b":0.22394205629825592,"a":1.0},"position":0.10682711750268936},{"color":{"r":1.0,"g":0.87199252843856812,"b":0.41814777255058289,"a":1.0},"position":0.37290802597999573},{"color":{"r":0.26108399033546448,"g":0.86699521541595459,"b":1.0,"a":1.0},"position":0.62537020444869995},{"color":{"r":0.29591467976570129,"g":0.96831053495407104,"b":0.52452915906906128,"a":1.0},"position":0.89499998092651367}],"stopsVar":[],"transform":{"m00":1.4850748126897517e-13,"m01":-140.0666503906250,"m02":118.03332519531250,"m10":140.0666503906250,"m11":-1.2994404814323235e-12,"m12":-44.03332519531250},"opacity":1.0,"blendMode":"NORMAL","visible":true}',
              }),
              jsx("defs", {
                children: jsx("clipPath", {
                  id: "paint0_angular_3_16283_clip_path",
                  children: jsx("path", {
                    d: "M88 48C88 50.2091 89.7909 52 92 52C94.2091 52 96 50.2091 96 48H92H88ZM0 48C0 50.2091 1.79086 52 4 52C6.20914 52 8 50.2091 8 48H4H0ZM4 48H8C8 25.9086 25.9086 8 48 8V4V0C21.4903 0 0 21.4903 0 48H4ZM48 4V8C70.0914 8 88 25.9086 88 48H92H96C96 21.4903 74.5097 0 48 0V4Z",
                  }),
                }),
              }),
            ],
          }),
          jsx(Needle, { value: score }),
        ],
      }),
      jsxs(Flex, {
        vertical: true,
        gap: 2,
        justify: "center",
        align: "center",
        style: { width: "100px" },
        children: [
          jsxs("p", {
            style: {
              color: darkMode ? "#ffffff" : "#000",
              fontSize: "32px",
              fontFamily: "Inter",
              fontWeight: "700",
              lineHeight: "36px",
            },
            children: [
              missing ? "--" : Number.isNaN(score) ? "--" : displayScore.toFixed(fractionDigits),
              !missing && unit ? unit : " ",
            ],
          }),
          jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "96px",
              height: "22px",
              padding: "5px 11px 5px 11px",
              gap: "4px",
              borderRadius: "1.7px 1.7px 7px 7px",
              background: darkMode
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(0, 0, 0, 0.08)",
              fontSize: "12px",
              fontWeight: "700",
              lineHeight: "16px",
              color: darkMode ? "#FFFFFF" : "#000000",
            },
            children: [
              missing ? "Missing" : scoreLevel,
              jsx(Tooltip, {
                placement: "bottom",
                title:
                  "This score measures how effectively your resume represents your qualifications in relation to this specific job description.",
                children: jsx("img", {
                  src: assetUrl(darkMode ? infoDarkSvg : infoSvg),
                  width: 12,
                  height: 12,
                  alt: "expire-info-icon",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
