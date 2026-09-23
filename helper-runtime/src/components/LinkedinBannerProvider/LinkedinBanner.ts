// @ts-nocheck
/**
 * LinkedIn match-score banner card (portal body).
 */

import { useEffect } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { useExternalJobStore } from "../../store/externalJob.ts"
import { trackEvent } from "../../utils/trace.ts"
import BirdBanner from "./BirdBanner.ts"
import {
  MISSING_JOB_MESSAGE,
  getMatchMessage,
  getPoorMatchDescription,
} from "./copy.ts"
import JumpArrow from "./JumpArrow.ts"
import Ring, { REPORT_SCORE_LEVEL, getScoreLevel } from "./Ring.ts"

function MatchDescription({
  matchedSkillCount,
  totalSkillCount,
  scoreLevel,
  darkMode,
}) {
  const textStyle = {
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "Regular",
    fontSize: "14px",
    lineHeight: "18px",
    letterSpacing: "0%",
    verticalAlign: "middle",
    color: darkMode ? "#ffffff" : "#000000",
  }

  if (totalSkillCount === 0) {
    return jsx("h2", {
      style: textStyle,
      children:
        "A quick update can make your resume relevant for this job.",
    })
  }

  switch (scoreLevel) {
    case REPORT_SCORE_LEVEL.EXCELLENT:
      return jsxs("h2", {
        style: textStyle,
        children: [
          jsxs("span", {
            style: { fontWeight: 700 },
            children: [matchedSkillCount, " out of ", totalSkillCount],
          }),
          " ",
          "keywords match! a quick update can make your resume stand out..",
        ],
      })
    case REPORT_SCORE_LEVEL.FAIR:
      return jsxs("h2", {
        style: textStyle,
        children: [
          jsx("span", {
            style: { fontWeight: 700 },
            children: matchedSkillCount,
          }),
          " keywords are present, let's perfect your resume.",
        ],
      })
    case REPORT_SCORE_LEVEL.POOR:
    default: {
      const description = getPoorMatchDescription(
        matchedSkillCount,
        totalSkillCount,
      )
      return jsxs("h2", {
        style: textStyle,
        children: [
          jsx("span", {
            style: { fontWeight: 700 },
            children: description.emphasis,
          }),
          " ",
          description.text,
        ],
      })
    }
  }
}

export default function LinkedinBanner({
  currentTabUrl,
  isJobDetailPage,
  darkMode,
  handleBannerClick,
  handleIframeBannerClick,
}) {
  const matchedSkillCount = useExternalJobStore(
    (state) => state.matchedSkillCount,
  )
  const totalSkillCount = useExternalJobStore((state) => state.totalSkillCount)
  const matchedScore = useExternalJobStore((state) => state.matchedScore)
  const missingJobSkills = useExternalJobStore(
    (state) => state.missingJobSkills,
  )
  const scoreLevel = getScoreLevel(matchedScore)
  const listPageMargin = isJobDetailPage
    ? {}
    : { marginTop: "32px", marginBottom: "32px" }

  useEffect(() => {
    trackEvent("autofill_linkedin_banner_exposed", {
      currentUrl: window.location.href,
    })
  }, [currentTabUrl])

  return jsxs("div", {
    style: {
      width: "100%",
      height: "140px",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: darkMode ? "rgba(29, 47, 35, 1)" : "#FFFFFF",
      borderRadius: "12px",
      ...listPageMargin,
      overflow: "hidden",
      border: "none",
      boxShadow: darkMode
        ? "0px 0px 0px 1px rgba(255, 255, 255, 0.04)"
        : "0px 0px 0px 1px rgba(201, 223, 190, 0.5)",
      userSelect: "none",
    },
    onClick: () => {
      if (window.top !== window.self) {
        handleIframeBannerClick()
      } else {
        handleBannerClick()
      }
    },
    children: [
      jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          padding: "16px",
          width: "100%",
          height: "104px",
          border: "none",
          boxShadow: darkMode
            ? "inset 0px -1px 0px rgba(255, 255, 255, 0.04)"
            : "inset 0px -1px 0px rgba(201, 223, 190, 0.5)",
          background: darkMode
            ? "linear-gradient(90deg, #2A4427 60%, #30592E 80%)"
            : "linear-gradient(90deg, #DDFFC3 60%, #FFFFFF 80%)",
        },
        children: [
          jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              gap: "4px",
            },
            children: [
              jsx("h1", {
                style: {
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontStyle: "Bold",
                  fontSize: "18px",
                  lineHeight: "20px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  color: darkMode ? "#ffffff" : "#000000",
                },
                children: missingJobSkills
                  ? MISSING_JOB_MESSAGE
                  : getMatchMessage(scoreLevel),
              }),
              !missingJobSkills &&
                jsx(MatchDescription, {
                  matchedSkillCount,
                  totalSkillCount,
                  scoreLevel,
                  darkMode,
                }),
            ],
          }),
          jsx("div", {
            style: { paddingLeft: "12px" },
            children: jsx(Ring, {
              missing: missingJobSkills,
              score: matchedScore,
              max: 10,
              unit: "",
              darkMode,
            }),
          }),
        ],
      }),
      jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 8px",
          width: "100%",
          height: 36,
          border: "none",
        },
        children: [
          jsx(BirdBanner, { darkMode }),
          jsx(JumpArrow, { darkMode }),
        ],
      }),
    ],
  })
}
