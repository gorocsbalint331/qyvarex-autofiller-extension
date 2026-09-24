// @ts-nocheck
/**
 * Resume PDF iframe preview with loading overlay and Word unavailable state.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Typography } from "antd"
import { useEffect, useState } from "react"
import { sendToBackground } from "@plasmohq/messaging"
import * as smileSvg from "../assets/inline/images/smile.svg.js"
import { TAILOR_RESUME_ID_PREFIX } from "../contents/shared/constants.ts"
import Image from "../ui/Image.ts"
import ResumeLoading from "./Resume/ResumeReview/components/ResumeLoading.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

const CLASS_PREFIX = "resume-preview-"
const IFRAME_OVERSIZE_PERCENT = 4

const PDF_VIEWER_PARAMS =
  "toolbar=0&navpanes=0&scrollbar=0&view=FitH&bgcolor=FFFFFF&zoom=100&disablezoom=1"

function withPdfViewerParams(fileUrl) {
  return fileUrl.includes("#")
    ? `${fileUrl}&${PDF_VIEWER_PARAMS}`
    : `${fileUrl}#${PDF_VIEWER_PARAMS}`
}

export default function PDFPreview({
  resumeId,
  resumeMap,
  template,
  useOriginalResume = false,
  isWord = false,
  style,
}) {
  const [fileUrl, setFileUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [reloadToken, setReloadToken] = useState(0)

  useEffect(() => {
    async function loadPreview() {
      if (!resumeId) {
        console.warn("[PDFPreview] Missing resumeId")
        return
      }
      if (!resumeMap[resumeId]) {
        console.warn("[PDFPreview] Resume not in map yet, waiting...", {
          resumeId,
          resumeMapKeys: resumeMap ? Object.keys(resumeMap) : [],
        })
        return
      }

      setIsLoading(true)
      try {
        let base64URL
        if (resumeId.startsWith(TAILOR_RESUME_ID_PREFIX)) {
          const response = await sendToBackground({
            name: "getTailorResumeBlob",
            body: {
              tailorResume: resumeMap[resumeId],
              template,
            },
          })
          base64URL = response.base64URL
        } else if (useOriginalResume) {
          const response = await sendToBackground({
            name: "getResumeBlob",
            body: { resumeId },
          })
          base64URL = response.base64URL
        } else {
          const response = await sendToBackground({
            name: "getBaseResumeBlob",
            body: {
              diagnoseId: resumeMap[resumeId].diagnoseId,
              template,
            },
          })
          base64URL = response.base64URL
        }

        if (base64URL?.startsWith("data:application/octet-stream")) {
          base64URL = base64URL.replace(
            "data:application/octet-stream",
            "data:application/pdf",
          )
        }
        if (base64URL) {
          base64URL = withPdfViewerParams(base64URL)
        }

        setFileUrl(base64URL)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsLoading(false)
      } catch (error) {
        console.error("[PDFPreview] Failed to load PDF:", error)
        setIsLoading(false)
      }
    }

    loadPreview()
  }, [resumeId, reloadToken, useOriginalResume])

  useEffect(() => {
    setFileUrl(null)
    setIsLoading(true)
  }, [resumeId, useOriginalResume])

  useEffect(() => {
    function handleVisibilityChange() {
      if (document.visibilityState === "visible" && resumeId) {
        setFileUrl(null)
        setIsLoading(true)
        setReloadToken((token) => token + 1)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [resumeId])

  if (!fileUrl) {
    return jsx(Flex, {
      justify: "center",
      align: "center",
      style: {
        width: "100%",
        height: "100%",
        ...style,
      },
      children: jsx(ResumeLoading, { title: "Loading resume\u2026" }),
    })
  }

  if (isWord && useOriginalResume) {
    return jsx(Flex, {
      justify: "center",
      align: "center",
      style,
      children: jsxs(Flex, {
        vertical: true,
        gap: 16,
        justify: "center",
        align: "center",
        style: {
          width: "480px",
          padding: 48,
          borderRadius: 20,
          background: "#fff",
          boxShadow: "0 0 0 0.5px rgba(0, 0, 0, 0.06) inset",
          textAlign: "center",
        },
        children: [
          jsx(Image, {
            src: assetUrl(smileSvg),
            width: 48,
            height: 48,
            alt: "Preview Unavailable",
            preview: false,
          }),
          jsxs(Flex, {
            vertical: true,
            children: [
              jsx(Typography.Title, {
                level: 3,
                style: {
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: "24px",
                },
                children: "Preview Unavailable",
              }),
              jsx(Typography.Paragraph, {
                style: {
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: "20px",
                },
                children:
                  "Word documents aren't supported for preview, but your resume is fully usable in our system.",
              }),
            ],
          }),
        ],
      }),
    })
  }

  return jsxs("div", {
    className: `${CLASS_PREFIX}container`,
    style: {
      ...style,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    },
    children: [
      jsx("iframe", {
        src: fileUrl,
        className: `${CLASS_PREFIX}iframe`,
        title: "Resume Preview",
        style: {
          width: `calc(100% + ${IFRAME_OVERSIZE_PERCENT}%)`,
          height: `calc(100% + ${IFRAME_OVERSIZE_PERCENT}%)`,
          border: "none",
          display: "block",
          position: "absolute",
          top: `-${IFRAME_OVERSIZE_PERCENT / 2}%`,
          left: `-${IFRAME_OVERSIZE_PERCENT / 2}%`,
          zIndex: 1,
          touchAction: "none",
        },
      }),
      isLoading &&
        jsx(Flex, {
          justify: "center",
          align: "center",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#ffffff",
            zIndex: 100,
            pointerEvents: "none",
          },
          children: jsx(ResumeLoading, { title: "Loading resume\u2026" }),
        }),
    ],
  })
}
