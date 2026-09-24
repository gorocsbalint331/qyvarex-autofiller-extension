// @ts-nocheck
/**
 * Cover letter file preview (PDF iframe or unavailable/non-PDF state).
 */

import { useEffect, useRef, useState } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Typography } from "antd"
import { sendToBackground } from "@plasmohq/messaging"
import * as smileSvg from "../assets/inline/images/smile.svg.js"
import ResumeLoading from "./Resume/ResumeReview/components/ResumeLoading.ts"
import {
  PREVIEW_PHASE,
  resolveCoverLetterPreviewLoadKey,
  resolveCoverLetterPreviewPhase,
} from "./CoverLetterPreview/view-model.ts"

const CLASS_PREFIX = "cover-letter-preview-"
const IFRAME_SCALE = 1.04
const MINIMUM_OVERLAY_MS = 1000
const IFRAME_READY_FALLBACK_MS = 1200

function assetUrl(mod) {
  return mod?.default ?? mod
}

function withPdfViewerParams(fileUrl) {
  const params =
    "toolbar=0&navpanes=0&scrollbar=0&view=FitH&bgcolor=FFFFFF&zoom=100&disablezoom=1"
  return fileUrl.includes("#")
    ? `${fileUrl}&${params}`
    : `${fileUrl}#${params}`
}

export function CoverLetterPreview({ downloadRequest, style }) {
  const [fileUrl, setFileUrl] = useState(null)
  const [extension, setExtension] = useState("pdf")
  const [isFetchingFile, setIsFetchingFile] = useState(true)
  const [isIframeReady, setIsIframeReady] = useState(false)
  const [isMinimumOverlayElapsed, setIsMinimumOverlayElapsed] = useState(false)

  const iframeReadyFallbackRef = useRef()
  const minimumOverlayRef = useRef()
  const loadKey = resolveCoverLetterPreviewLoadKey(downloadRequest)

  useEffect(() => {
    let cancelled = false

    if (iframeReadyFallbackRef.current) {
      clearTimeout(iframeReadyFallbackRef.current)
      iframeReadyFallbackRef.current = undefined
    }
    if (minimumOverlayRef.current) {
      clearTimeout(minimumOverlayRef.current)
      minimumOverlayRef.current = undefined
    }

    setFileUrl(null)
    setExtension("pdf")
    setIsFetchingFile(true)
    setIsIframeReady(false)
    setIsMinimumOverlayElapsed(false)

    async function loadPreview() {
      if (!downloadRequest?.coverLetterId) {
        setIsFetchingFile(false)
        return
      }

      const response = await sendToBackground({
        name: "getCoverLetterBlob",
        body: {
          coverLetterId: downloadRequest.coverLetterId,
          markdown: downloadRequest.markdown,
          useLegacyDownload: downloadRequest.useLegacyDownload,
        },
      })
      if (cancelled) return

      const nextExtension = response.extension || "pdf"
      setFileUrl(response.base64URL)
      setExtension(nextExtension)
      setIsFetchingFile(false)

      if (nextExtension !== "pdf") {
        setIsIframeReady(true)
        setIsMinimumOverlayElapsed(true)
        return
      }

      minimumOverlayRef.current = setTimeout(() => {
        if (!cancelled) setIsMinimumOverlayElapsed(true)
      }, MINIMUM_OVERLAY_MS)

      iframeReadyFallbackRef.current = setTimeout(() => {
        if (!cancelled) setIsIframeReady(true)
      }, IFRAME_READY_FALLBACK_MS)
    }

    loadPreview().catch(() => {
      if (cancelled) return
      setFileUrl(null)
      setExtension("pdf")
      setIsFetchingFile(false)
      setIsIframeReady(false)
      setIsMinimumOverlayElapsed(false)
    })

    return () => {
      cancelled = true
      if (iframeReadyFallbackRef.current) {
        clearTimeout(iframeReadyFallbackRef.current)
        iframeReadyFallbackRef.current = undefined
      }
      if (minimumOverlayRef.current) {
        clearTimeout(minimumOverlayRef.current)
        minimumOverlayRef.current = undefined
      }
    }
  }, [loadKey])

  const phase = resolveCoverLetterPreviewPhase({
    fileUrl,
    extension,
    isFetchingFile,
    isIframeReady,
    isMinimumOverlayElapsed,
  })

  if (phase === PREVIEW_PHASE.placeholderLoading) {
    return jsx(Flex, {
      justify: "center",
      align: "center",
      style: { width: "100%", height: "100%" },
      children: jsx(ResumeLoading, { title: "Loading cover letter…" }),
    })
  }

  if (phase === PREVIEW_PHASE.empty || !fileUrl) {
    return null
  }

  if (phase === PREVIEW_PHASE.unavailable) {
    return jsx(Flex, {
      justify: "center",
      align: "center",
      style: { width: "100%", height: "100%" },
      children: jsxs(Flex, {
        vertical: true,
        gap: 16,
        justify: "center",
        align: "center",
        style: {
          width: 480,
          padding: 48,
          borderRadius: 20,
          background: "#fff",
          boxShadow: "0 0 0 0.5px rgba(0, 0, 0, 0.06) inset",
          textAlign: "center",
        },
        children: [
          jsx("img", {
            src: assetUrl(smileSvg),
            width: 48,
            height: 48,
            alt: "Preview unavailable",
          }),
          jsxs(Flex, {
            vertical: true,
            children: [
              jsx(Typography.Title, {
                level: 3,
                style: { fontSize: 16, marginBottom: 8 },
                children: "Preview Unavailable",
              }),
              jsx(Typography.Paragraph, {
                style: { marginBottom: 0 },
                children:
                  "This cover letter file can still be downloaded, but preview is only available for PDF.",
              }),
            ],
          }),
        ],
      }),
    })
  }

  function handleIframeLoad() {
    if (iframeReadyFallbackRef.current) {
      clearTimeout(iframeReadyFallbackRef.current)
      iframeReadyFallbackRef.current = undefined
    }
    setIsIframeReady(true)
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
        src: withPdfViewerParams(fileUrl),
        title: "cover-letter-preview",
        className: `${CLASS_PREFIX}iframe`,
        onLoad: handleIframeLoad,
        style: {
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
          position: "absolute",
          inset: 0,
          transform: `scale(${IFRAME_SCALE})`,
          transformOrigin: "center center",
          zIndex: 1,
          touchAction: "none",
        },
      }),
      phase === PREVIEW_PHASE.iframeLoading &&
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
          children: jsx(ResumeLoading, { title: "Loading cover letter…" }),
        }),
    ],
  })
}

export default CoverLetterPreview
