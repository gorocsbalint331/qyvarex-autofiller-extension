// @ts-nocheck
/**
 * Cover letter review modal: rename, preview, and download (PDF / Word).
 */

import { useEffect, useMemo, useRef, useState } from "react"
import { jsx, jsxs, Fragment } from "react/jsx-runtime"
import { Flex, Input, Modal, Typography } from "antd"
import { sendToBackground } from "@plasmohq/messaging"
import * as closeSvg from "../../assets/inline/images/close.svg.js"
import * as downloadSvg from "../../assets/inline/images/download.svg.js"
import * as editSvg from "../../assets/inline/images/edit.svg.js"
import { shouldUseLegacyAgentCoverLetterDownload } from "../../api/resume-helpers.ts"
import { HELPER_MODAL_Z_INDEX } from "../../constants.ts"
import { HOST_ID } from "../../helper-shims/host.ts"
import {
  buildDefaultCoverLetterName,
  getCoverLetterDisplayName,
  hasValidCoverLetter,
  resolveCoverLetterDownloadRequest,
} from "../../store/cover-letter-state.ts"
import { useProfileStore } from "../../store/profile.ts"
import { useResumeStore } from "../../store/resume.ts"
import { downloadDataUrlFile } from "../../utils/download-file.ts"
import { trackEvent } from "../../utils/trace.ts"
import DrawerFooter from "../Resume/ResumeReview/components/DrawerFooter.ts"
import { buildResumeDownloadMenuItems } from "../Resume/ResumeReview/download-menu.ts"
import { CoverLetterPreview } from "../CoverLetterPreview.ts"

const CLASS_PREFIX = "cover-letter-review-"
const TOAST_DURATION_MS = 3000

function assetUrl(mod) {
  return mod?.default ?? mod
}

function className(...parts) {
  return parts.filter(Boolean).join(" ")
}

export function CoverLetterReview() {
  const openCoverLetterPreview = useResumeStore(
    (state) => state.openCoverLetterPreview,
  )
  const setOpenCoverLetterPreview = useResumeStore(
    (state) => state.setOpenCoverLetterPreview,
  )
  const agentCoverLetter = useResumeStore((state) => state.agentCoverLetter)
  const currentJobCoverLetter = useResumeStore(
    (state) => state.currentJobCoverLetter,
  )
  const setAgentCoverLetter = useResumeStore(
    (state) => state.setAgentCoverLetter,
  )
  const setCurrentJobCoverLetter = useResumeStore(
    (state) => state.setCurrentJobCoverLetter,
  )
  const userProfile = useProfileStore((state) => state.userProfile)

  const activeCoverLetter = hasValidCoverLetter(agentCoverLetter)
    ? agentCoverLetter
    : currentJobCoverLetter

  const defaultCoverLetterName = useMemo(() => {
    const personalInfo = userProfile?.profile?.personalInfo
    return buildDefaultCoverLetterName(
      personalInfo?.firstName,
      personalInfo?.lastName,
    )
  }, [userProfile])

  const displayName = activeCoverLetter
    ? getCoverLetterDisplayName(
        activeCoverLetter.coverLetterName,
        defaultCoverLetterName,
      )
    : ""

  const [isEditingName, setIsEditingName] = useState(false)
  const [draftName, setDraftName] = useState("")
  const [toast, setToast] = useState(null)
  const toastTimeoutRef = useRef()

  useEffect(() => {
    if (!openCoverLetterPreview) return
    setDraftName(displayName)
    trackEvent("autofill_cover_letter_modal_exposure", {})
  }, [displayName, openCoverLetterPreview])

  const isAgentCoverLetter = !!agentCoverLetter?.coverLetterId

  const useLegacyDownload = useMemo(
    () => shouldUseLegacyAgentCoverLetterDownload(window.location.href),
    [],
  )

  const downloadRequest = useMemo(
    () =>
      resolveCoverLetterDownloadRequest({
        useLegacyDownload,
        agentCoverLetter,
        currentJobCoverLetter,
      }),
    [agentCoverLetter, currentJobCoverLetter, useLegacyDownload],
  )

  const downloadMenuItems = useMemo(() => {
    async function fetchBlob() {
      if (!downloadRequest?.coverLetterId) return null
      return sendToBackground({
        name: "getCoverLetterBlob",
        body: {
          coverLetterId: downloadRequest.coverLetterId,
          markdown: downloadRequest.markdown,
          useLegacyDownload: downloadRequest.useLegacyDownload,
        },
      })
    }

    async function downloadPdf() {
      const blob = await fetchBlob()
      if (!blob) return
      const extension = blob.extension || "pdf"
      downloadDataUrlFile(
        blob.base64URL,
        `${draftName || displayName}.${extension}`,
      )
      trackEvent("autofill_cover_letter_download_click", { format: extension })
    }

    async function downloadWord() {
      const blob = await fetchBlob()
      if (!blob) return
      const converted = await sendToBackground({
        name: "convertResumePdfToWord",
        body: {
          pdfBase64URL: blob.base64URL,
          filename: `${draftName || displayName}.pdf`,
        },
      })
      const extension = converted.extension || "docx"
      downloadDataUrlFile(
        converted.base64URL,
        `${draftName || displayName}.${extension}`,
      )
      trackEvent("autofill_cover_letter_download_click", { format: extension })
    }

    return buildResumeDownloadMenuItems(downloadPdf, downloadWord)
  }, [downloadRequest, draftName, displayName])

  useEffect(() => {
    if (openCoverLetterPreview && !activeCoverLetter) {
      setOpenCoverLetterPreview(false)
    }
  }, [openCoverLetterPreview, activeCoverLetter, setOpenCoverLetterPreview])

  if (!activeCoverLetter) return null

  function showToast(type, text) {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current)
    setToast({ type, text })
    toastTimeoutRef.current = setTimeout(() => setToast(null), TOAST_DURATION_MS)
  }

  function commitRename() {
    const nextName = draftName.trim()
    if (!nextName || nextName === displayName) {
      setDraftName(displayName)
      setIsEditingName(false)
      return
    }
    const updated = {
      ...activeCoverLetter,
      coverLetterName: nextName,
    }
    if (isAgentCoverLetter) {
      setAgentCoverLetter(updated)
    } else {
      setCurrentJobCoverLetter(updated)
    }
    setIsEditingName(false)
    showToast("success", "Cover letter title updated successfully.")
    trackEvent("autofill_cover_letter_rename", {})
  }

  return jsxs(Fragment, {
    children: [
      jsx(Modal, {
        open: openCoverLetterPreview,
        width: 1120,
        zIndex: HELPER_MODAL_Z_INDEX,
        className: `${CLASS_PREFIX}container`,
        wrapClassName: "jobright-scroll-lock-modal-wrap",
        destroyOnClose: true,
        onCancel: () => setOpenCoverLetterPreview(false),
        getContainer: () => document.getElementById(HOST_ID)?.shadowRoot,
        closeIcon: jsx("img", {
          src: assetUrl(closeSvg),
          width: 16,
          height: 16,
          alt: "close",
        }),
        footer: jsx(DrawerFooter, {
          primary: "Download",
          primaryIcon: jsx("img", {
            src: assetUrl(downloadSvg),
            width: 16,
            height: 16,
            alt: "download",
          }),
          primaryMenuItems: downloadMenuItems,
          items: [
            {
              key: "continue",
              label: "Continue",
              onClick: () => setOpenCoverLetterPreview(false),
            },
          ],
        }),
        title: jsx(Flex, {
          justify: "flex-start",
          align: "center",
          gap: 8,
          children: jsx("strong", {
            className: `${CLASS_PREFIX}modal-title`,
            children: "View Your Cover Letter",
          }),
        }),
        children: jsxs(Flex, {
          className: `${CLASS_PREFIX}content`,
          children: [
            jsx("div", {
              className: `${CLASS_PREFIX}left`,
              children: jsx("div", {
                className: className(
                  `${CLASS_PREFIX}name-shell`,
                  isEditingName && `${CLASS_PREFIX}name-shell-editing`,
                ),
                children: isEditingName
                  ? jsx(Input, {
                      autoFocus: true,
                      value: draftName,
                      onChange: (event) => setDraftName(event.target.value),
                      onBlur: (event) => {
                        event.stopPropagation()
                        commitRename()
                      },
                      onPressEnter: commitRename,
                      variant: "borderless",
                      className: `${CLASS_PREFIX}edit-input`,
                    })
                  : jsxs(Fragment, {
                      children: [
                        jsx(Typography.Text, {
                          ellipsis: true,
                          className: `${CLASS_PREFIX}name`,
                          children: displayName,
                        }),
                        jsx("button", {
                          type: "button",
                          className: `${CLASS_PREFIX}edit`,
                          onClick: () => setIsEditingName(true),
                          "aria-label": "Rename cover letter",
                          children: jsx("img", {
                            src: assetUrl(editSvg),
                            width: 16,
                            height: 16,
                            alt: "edit",
                          }),
                        }),
                      ],
                    }),
              }),
            }),
            jsx(CoverLetterPreview, {
              downloadRequest,
              style: {
                flex: 1,
                width: "100%",
                height: "100%",
                minHeight: 496,
              },
            }),
          ],
        }),
      }),
      toast &&
        jsx("div", {
          className: `${CLASS_PREFIX}toast ${CLASS_PREFIX}toast-${toast.type}`,
          children: toast.text,
        }),
    ],
  })
}

export default CoverLetterReview
