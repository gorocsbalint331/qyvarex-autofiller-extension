// @ts-nocheck
/**
 * "Apply with Autofill" chip next to LinkedIn apply controls.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import * as aistarSvg from "../../assets/inline/images/aistar_l.svg.js"
import { checkSupportStatus } from "../../core/utils.ts"
import { useExternalJobStore } from "../../store/externalJob.ts"
import { trackEvent } from "../../utils/trace.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function AutofillButton() {
  const jobInfo = useExternalJobStore((state) => state.jobInfo)
  if (!jobInfo || !jobInfo?.jobResult?.jobId) return null

  const applyUrl =
    jobInfo?.jobResult?.applyLink ?? jobInfo?.jobResult?.originalUrl
  let parsedUrl = null
  if (applyUrl) {
    try {
      parsedUrl = new URL(applyUrl)
    } catch {
      console.error("Invalid URL:", applyUrl)
    }
  }
  if (!parsedUrl) return null
  if (!checkSupportStatus(parsedUrl)) return null

  return jsx("div", {
    style: {
      marginLeft: "8px",
      backgroundColor: "#D4FCBC",
      display: "flex",
      alignItems: "center",
      width: "197px",
      height: "40px",
      borderRadius: "24px",
      cursor: "pointer",
      userSelect: "none",
    },
    onClick: () => {
      parsedUrl.searchParams.append("jr_id", jobInfo?.jobResult?.jobId)
      trackEvent("linkedin_autofill_apply_click", {
        jobId: jobInfo?.jobResult?.jobId,
        applyUrl: parsedUrl.toString(),
        windowTopUrl: window.top.location.href,
      })
      window.open(parsedUrl.toString(), "_blank")
    },
    children: jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "15px",
        gap: 4,
      },
      children: [
        jsx("img", {
          src: assetUrl(aistarSvg),
          height: 20,
          width: 20,
        }),
        jsx("div", {
          style: {
            fontFamily: "Inter",
            fontWeight: 600,
            fontStyle: "Semi Bold",
            fontSize: "16px",
            lineHeight: "20px",
            textAlign: "center",
            verticalAlign: "middle",
            color: "#000000",
          },
          children: "Apply with Autofill",
        }),
      ],
    }),
  })
}
