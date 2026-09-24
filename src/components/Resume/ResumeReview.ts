// @ts-nocheck
/**
 * Resume picker modal: select resume / version, preview, download, continue.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { Flex, Input, Modal, Typography } from "antd"
import { sendToBackground } from "@plasmohq/messaging"
import * as closeSvg from "../../assets/inline/images/close.svg.js"
import * as downloadSvg from "../../assets/inline/images/download.svg.js"
import * as editSvg from "../../assets/inline/images/edit.svg.js"
import * as nonePng from "../../assets/inline/images/none.png.js"
import * as starSvg from "../../assets/inline/images/star_b.svg.js"
import { HELPER_MODAL_Z_INDEX } from "../../constants.ts"
import { HOST_ID, getAutofillInstance } from "../../helper-shims/host.ts"
import { TAILOR_RESUME_ID_PREFIX } from "../../contents/shared/constants.ts"
import { updateIframeUserInfo } from "../../core/utils.ts"
import { useProfileStore } from "../../store/profile.ts"
import {
  syncResumeToAutofill,
  useResumeStore,
} from "../../store/resume.ts"
import Image from "../../ui/Image.ts"
import { downloadDataUrlFile } from "../../utils/download-file.ts"
import { getResumeUploadFilename } from "../../utils/resume-upload-filename.ts"
import { trackEvent } from "../../utils/trace.ts"
import EmptyHint from "../EmptyHint.ts"
import PDFPreview from "../PDFPreview.ts"
import PageConfirmPopup from "../Popups/PageConfirmPopup.ts"
import {
  getResumeReviewDownloadMenuItems,
  openAutofillInfoFromResumeReview,
} from "./behavior.ts"
import DrawerFooter from "./ResumeReview/components/DrawerFooter.ts"
import {
  getResumePickerChangeSummary,
  isResumePickerContinueDisabled,
} from "./dirty-state.ts"
import { getResumeDownloadBaseName } from "./download-filename.ts"
import { buildResumeReviewItems } from "./view-model.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

const CLASS_PREFIX = "resume-review-"

export const RESUME_SEGMENTED_VALUES = {
  report: "Report",
  editor: "Editor",
  style: "Style",
}

export default function ResumeReview({ currentTabJob }) {
  const resumeCollection = useResumeStore((state) => state.resumeCollection)
  const resumeMap = useResumeStore((state) => state.resumeMap)
  const template = useResumeStore((state) => state.template)
  const lastUsedResume = useResumeStore((state) => state.lastUsedResume)
  const lastUsedOriginalResume = useResumeStore(
    (state) => state.lastUsedOriginalResume,
  )
  const disableUploadResume = useResumeStore(
    (state) => state.disableUploadResume,
  )
  const setLastUsedResume = useResumeStore((state) => state.setLastUsedResume)
  const setLastUsedOriginalResume = useResumeStore(
    (state) => state.setLastUsedOriginalResume,
  )
  const setDisableUploadResume = useResumeStore(
    (state) => state.setDisableUploadResume,
  )
  const tailorResumeName = useResumeStore((state) => state.tailorResumeName)
  const tailorResume = useResumeStore((state) => state.tailorResume)
  const setOpenResumeSelector = useResumeStore(
    (state) => state.setOpenResumeSelector,
  )
  const refreshResumeList = useResumeStore((state) => state.refreshResumeList)
  const openResumeSelector = useResumeStore((state) => state.openResumeSelector)
  const setOpenAutofillInfo = useResumeStore(
    (state) => state.setOpenAutofillInfo,
  )
  const userStage = useProfileStore((state) => state.userStage)

  const [draftDisableUpload, setDraftDisableUpload] =
    useState(disableUploadResume)
  const [draftSelectResume, setDraftSelectResume] = useState(
    disableUploadResume ? undefined : lastUsedResume,
  )
  const [draftUseOriginal, setDraftUseOriginal] = useState(
    lastUsedOriginalResume ? "true" : "false",
  )
  const [editingResumeId, setEditingResumeId] = useState(null)
  const [editingTitle, setEditingTitle] = useState("")
  const [isRenaming, setIsRenaming] = useState(false)
  const [toast, setToast] = useState(null)
  const [unsavedConfirmOpen, setUnsavedConfirmOpen] = useState(false)
  const toastTimerRef = useRef()

  useEffect(() => {
    if (draftSelectResume === lastUsedResume) {
      setDraftUseOriginal(lastUsedOriginalResume ? "true" : "false")
    }
  }, [lastUsedResume, lastUsedOriginalResume, draftSelectResume])

  const reviewItems = buildResumeReviewItems({
    resumes: resumeCollection.map((resume) => ({
      resumeId: resume.resumeId,
      resumeName: resume.resumeName,
      resumeNameWithSuffix: resume.resumeNameWithSuffix,
      primary: resume.primary,
      targetJobTitle: resume.targetJobTitle,
    })),
    tailorResumeId: tailorResume?.tailorId
      ? TAILOR_RESUME_ID_PREFIX + tailorResume.tailorId
      : null,
    tailorResumeName,
    lastUsedResumeId: lastUsedResume ?? null,
  })

  const hasRefreshedListRef = useRef(false)
  const hasTrackedExposureRef = useRef(false)
  const didSaveRef = useRef(false)
  const initialDisableUploadRef = useRef(disableUploadResume)
  const initialSelectResumeRef = useRef(
    disableUploadResume ? undefined : lastUsedResume,
  )
  const initialUseOriginalRef = useRef(
    lastUsedOriginalResume ? "true" : "false",
  )

  const getInitialSnapshot = () => ({
    disableUploadResume: initialDisableUploadRef.current,
    selectResume: initialSelectResumeRef.current,
    useOriginalResume: initialUseOriginalRef.current,
  })

  const getCurrentSnapshot = () => ({
    disableUploadResume: draftDisableUpload,
    selectResume: draftSelectResume,
    useOriginalResume: draftUseOriginal,
  })

  const changeSummary = useMemo(
    () =>
      getResumePickerChangeSummary({
        initial: getInitialSnapshot(),
        current: getCurrentSnapshot(),
      }),
    [draftDisableUpload, draftSelectResume, draftUseOriginal],
  )
  const continueDisabled = isResumePickerContinueDisabled(changeSummary)

  const revertAndClose = () => {
    if (!didSaveRef.current) {
      setDraftDisableUpload(initialDisableUploadRef.current)
      setDraftSelectResume(initialSelectResumeRef.current)
      setDraftUseOriginal(initialUseOriginalRef.current)
    }
    setOpenResumeSelector(false)
  }

  const handleCancel = () => {
    if (!changeSummary.hasChanges) {
      revertAndClose()
      return
    }
    setUnsavedConfirmOpen(true)
  }

  const discardAndClose = () => {
    setUnsavedConfirmOpen(false)
    revertAndClose()
  }

  const saveAndClose = async () => {
    setUnsavedConfirmOpen(false)
    await handleContinue()
  }

  const handleContinue = async () => {
    if (continueDisabled) return
    didSaveRef.current = true
    setDisableUploadResume(draftDisableUpload)
    if (draftDisableUpload) {
      trackEvent("autofill_not_apply_resume_click", {
        user_id: useProfileStore.getState().userStage?.userId,
        url: window.location.href,
      })
      setLastUsedResume(undefined)
      setLastUsedOriginalResume(false)
    } else {
      setLastUsedResume(draftSelectResume)
      setLastUsedOriginalResume(draftUseOriginal === "true")
      if (draftSelectResume) {
        await syncResumeToAutofill(draftSelectResume, resumeMap)
      }
    }
    setOpenResumeSelector(false)
    trackEvent("autofill_resumepicker_change", {
      selected_resume_type: draftDisableUpload
        ? "none"
        : draftSelectResume?.startsWith(TAILOR_RESUME_ID_PREFIX)
          ? "tailor"
          : "base",
      selected_template_type:
        draftDisableUpload ||
        draftSelectResume?.startsWith(TAILOR_RESUME_ID_PREFIX)
          ? "none"
          : draftUseOriginal === "true"
            ? "original"
            : "jobright",
      job_id: currentTabJob?.jobResult?.jobId,
    })
  }

  const selectItem = (value) => {
    if (value === "NO_RESUME") {
      setDraftSelectResume(undefined)
      setDraftDisableUpload(true)
      setDraftUseOriginal("false")
      return
    }
    setDraftSelectResume(value)
    if (value && draftDisableUpload) setDraftDisableUpload(false)
    if (value && value.startsWith(TAILOR_RESUME_ID_PREFIX)) {
      setDraftUseOriginal("false")
    } else if (value && value === lastUsedResume) {
      setDraftUseOriginal(lastUsedOriginalResume ? "true" : "false")
    }
  }

  const pushResumeInfoToAutofill = (payload = {}) => {
    const instance = getAutofillInstance()
    if (instance) {
      for (const [key, value] of Object.entries(payload)) {
        instance[key] = value
      }
    }
    updateIframeUserInfo(payload)
  }

  useEffect(() => {
    if (openResumeSelector) {
      initialDisableUploadRef.current = disableUploadResume
      initialSelectResumeRef.current = disableUploadResume
        ? undefined
        : lastUsedResume
      initialUseOriginalRef.current = lastUsedOriginalResume ? "true" : "false"
      setDraftDisableUpload(disableUploadResume)
      setDraftSelectResume(disableUploadResume ? undefined : lastUsedResume)
      setDraftUseOriginal(lastUsedOriginalResume ? "true" : "false")
      setEditingResumeId(null)
      setEditingTitle("")
      didSaveRef.current = false
      if (userStage?.logined && !hasRefreshedListRef.current) {
        refreshResumeList(userStage, currentTabJob)
        hasRefreshedListRef.current = true
      }
      if (!hasTrackedExposureRef.current) {
        trackEvent("autofill_resumepicker_exposure", {
          default_resume_type: disableUploadResume
            ? "none"
            : lastUsedResume?.startsWith(TAILOR_RESUME_ID_PREFIX)
              ? "tailor"
              : "base",
          default_template_mode:
            disableUploadResume ||
            lastUsedResume?.startsWith(TAILOR_RESUME_ID_PREFIX)
              ? "none"
              : lastUsedOriginalResume
                ? "original"
                : "jobright",
          resume_count: resumeCollection?.length,
          job_id: currentTabJob?.jobResult?.jobId,
        })
        hasTrackedExposureRef.current = true
      }
    } else {
      hasRefreshedListRef.current = false
      hasTrackedExposureRef.current = false
      didSaveRef.current = false
    }
  }, [openResumeSelector])

  useEffect(() => {
    if (!openResumeSelector || !userStage?.logined) return
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        refreshResumeList(userStage, currentTabJob)
      }
    }
    document.addEventListener("visibilitychange", onVisibility)
    return () => document.removeEventListener("visibilitychange", onVisibility)
  }, [openResumeSelector, userStage, currentTabJob, refreshResumeList])

  useEffect(() => {
    if (draftDisableUpload || !resumeCollection || resumeCollection.length === 0) {
      return
    }
    const stillExists =
      draftSelectResume &&
      resumeCollection.some((resume) => resume.resumeId === draftSelectResume)
    if (!stillExists && draftSelectResume) {
      const first = resumeCollection[0]
      if (first) {
        setDraftSelectResume(first.resumeId)
        if (first.resumeId.startsWith(TAILOR_RESUME_ID_PREFIX)) {
          setDraftUseOriginal("false")
        } else if (first.resumeId === lastUsedResume) {
          setDraftUseOriginal(lastUsedOriginalResume ? "true" : "false")
        }
      }
    }
  }, [
    resumeCollection,
    draftSelectResume,
    draftDisableUpload,
    lastUsedResume,
    lastUsedOriginalResume,
  ])

  const syncAutofillResumeInfo = useCallback(async () => {
    if (
      lastUsedResume &&
      lastUsedResume.startsWith(TAILOR_RESUME_ID_PREFIX)
    ) {
      pushResumeInfoToAutofill({
        disableUploadResume,
        resumeInfo: {
          tailor: true,
          tailorResume: resumeMap[lastUsedResume],
          template,
          resumeName: getResumeUploadFilename({
            selectedResume: resumeMap[lastUsedResume],
            isTailorResume: true,
            tailorResumeName,
          }),
        },
      })
    } else {
      const resumeName = getResumeUploadFilename({
        selectedResume: resumeMap[lastUsedResume],
        isTailorResume: false,
      })
      pushResumeInfoToAutofill({
        disableUploadResume,
        resumeInfo: {
          id: lastUsedResume,
          diagnoseId: resumeMap[lastUsedResume]?.diagnoseId,
          template,
          resumeName,
          useOriginalResume: lastUsedOriginalResume,
        },
      })
    }
  }, [
    disableUploadResume,
    lastUsedResume,
    lastUsedOriginalResume,
    resumeMap,
    template,
    tailorResumeName,
  ])

  useEffect(() => {
    syncAutofillResumeInfo()
  }, [syncAutofillResumeInfo])

  const selectedResume = draftSelectResume
    ? resumeMap[draftSelectResume]
    : null
  const resumeNameWithSuffix = selectedResume?.resumeNameWithSuffix || ""
  const isTailorSelected =
    !!draftSelectResume &&
    draftSelectResume.startsWith(TAILOR_RESUME_ID_PREFIX)
  const fileExtension = resumeNameWithSuffix.split(".").pop()?.toLowerCase()

  const fetchPreviewBlob = async () => {
    if (!draftSelectResume || draftDisableUpload) return null
    let base64URL = ""
    let extension = "pdf"
    if (draftSelectResume.startsWith(TAILOR_RESUME_ID_PREFIX)) {
      const response = await sendToBackground({
        name: "getTailorResumeBlob",
        body: {
          tailorResume: resumeMap[draftSelectResume],
          template,
        },
      })
      base64URL = response.base64URL
      extension = "pdf"
    } else if (draftUseOriginal === "true" && fileExtension === "pdf") {
      const response = await sendToBackground({
        name: "getResumeBlob",
        body: { resumeId: draftSelectResume },
      })
      base64URL = response.base64URL
      extension = response.extension || "pdf"
    } else {
      const response = await sendToBackground({
        name: "getBaseResumeBlob",
        body: {
          diagnoseId: resumeMap[draftSelectResume]?.diagnoseId,
          template,
        },
      })
      base64URL = response.base64URL
      extension = "pdf"
    }
    return { base64URL, extension }
  }

  const getDownloadBaseName = () =>
    getResumeDownloadBaseName({
      selectedResume,
      isTailorResume: isTailorSelected,
      tailorResumeName,
    })

  const showToast = (type, text) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    setToast({ type, text })
    toastTimerRef.current = setTimeout(() => setToast(null), 3000)
  }

  const applyLocalResumeRename = (resumeId, nextName) => {
    const state = useResumeStore.getState()
    const nextMap = { ...state.resumeMap }
    if (nextMap[resumeId]) {
      nextMap[resumeId] = { ...nextMap[resumeId], resumeName: nextName }
    }
    const nextCollection = state.resumeCollection.map((resume) =>
      resume.resumeId === resumeId
        ? { ...resume, resumeName: nextName }
        : resume,
    )
    const nextState = {
      resumeMap: nextMap,
      resumeCollection: nextCollection,
      userEditedResumeNames: {
        ...state.userEditedResumeNames,
        [resumeId]: nextName,
      },
    }
    if (resumeId.startsWith(TAILOR_RESUME_ID_PREFIX)) {
      nextState.tailorResumeName = nextName
    }
    useResumeStore.setState(nextState)
  }

  const commitRename = async () => {
    if (!editingResumeId || isRenaming) return
    const nextName = editingTitle.trim()
    if (!nextName) {
      setEditingResumeId(null)
      setEditingTitle("")
      return
    }
    const isTailor = editingResumeId.startsWith(TAILOR_RESUME_ID_PREFIX)
    if (isTailor) {
      applyLocalResumeRename(editingResumeId, nextName)
      setEditingResumeId(null)
      setEditingTitle("")
      return
    }
    setIsRenaming(true)
    try {
      const response = await sendToBackground({
        name: "updateResumeCollection",
        body: {
          resumeId: Number(editingResumeId),
          resumeName: nextName,
        },
      })
      if (response?.success) {
        applyLocalResumeRename(editingResumeId, nextName)
        setEditingResumeId(null)
        setEditingTitle("")
        showToast("success", "Resume title updated successfully.")
      } else {
        showToast("error", "Failed to update resume title. Please try again.")
      }
    } catch {
      showToast("error", "Failed to update resume title. Please try again.")
    } finally {
      setIsRenaming(false)
    }
  }

  const downloadPdf = async () => {
    const blob = await fetchPreviewBlob()
    if (blob) {
      downloadDataUrlFile(
        blob.base64URL,
        `${getDownloadBaseName()}.${blob.extension}`,
      )
    }
  }

  const downloadWord = async () => {
    if (
      draftSelectResume &&
      !draftDisableUpload &&
      !draftSelectResume.startsWith(TAILOR_RESUME_ID_PREFIX) &&
      draftUseOriginal === "true" &&
      (fileExtension === "doc" || fileExtension === "docx")
    ) {
      const response = await sendToBackground({
        name: "getResumeBlob",
        body: { resumeId: draftSelectResume },
      })
      downloadDataUrlFile(
        response.base64URL,
        `${getDownloadBaseName()}.${response.extension || "docx"}`,
      )
      return
    }
    const pdfBlob = await fetchPreviewBlob()
    if (!pdfBlob) return
    const converted = await sendToBackground({
      name: "convertResumePdfToWord",
      body: {
        pdfBase64URL: pdfBlob.base64URL,
        filename: `${getDownloadBaseName()}.pdf`,
      },
    })
    downloadDataUrlFile(
      converted.base64URL,
      `${getDownloadBaseName()}.${converted.extension || "docx"}`,
    )
  }

  const downloadMenuItems = getResumeReviewDownloadMenuItems({
    disableUploadResume: draftDisableUpload,
    downloadPdf,
    downloadWord,
  })

  const getModalContainer = () =>
    document.getElementById(HOST_ID)?.shadowRoot || document.body

  return jsxs(Fragment, {
    children: [
      jsx(Modal, {
        open: openResumeSelector,
        width: 1120,
        zIndex: HELPER_MODAL_Z_INDEX,
        centered: true,
        className: `${CLASS_PREFIX}container`,
        wrapClassName: "jobright-scroll-lock-modal-wrap",
        destroyOnClose: true,
        onCancel: handleCancel,
        getContainer: getModalContainer,
        closeIcon: jsx(Image, {
          preview: false,
          src: assetUrl(closeSvg),
          width: 16,
          height: 16,
          alt: "close",
        }),
        footer: jsx(DrawerFooter, {
          primary: "Download Resume",
          primaryIcon: jsx(Image, {
            preview: false,
            src: assetUrl(downloadSvg),
            width: 16,
            height: 16,
            alt: "download",
          }),
          primaryMenuItems: downloadMenuItems,
          items: [
            {
              key: "2",
              label: "Continue",
              disabled: continueDisabled,
              onClick: handleContinue,
            },
          ],
        }),
        title: jsx(Flex, {
          justify: "flex-start",
          align: "center",
          gap: 8,
          children: jsx("strong", {
            className: CLASS_PREFIX + "modal-title",
            children: "View & Select Your Resume",
          }),
        }),
        children: jsxs(Flex, {
          justify: "space-between",
          className: CLASS_PREFIX + "sidebar",
          children: [
            jsxs(Flex, {
              className: CLASS_PREFIX + "left-content",
              gap: 24,
              vertical: true,
              children: [
                jsxs(Flex, {
                  vertical: true,
                  gap: 8,
                  className: CLASS_PREFIX + "section-block",
                  children: [
                    jsx(Typography.Text, {
                      className: CLASS_PREFIX + "section-title",
                      children: "Your Resume",
                    }),
                    jsx(Flex, {
                      vertical: true,
                      gap: 4,
                      style: { width: "100%" },
                      children: reviewItems.map((item) => {
                        const isSelected =
                          item.type === "apply-without-resume"
                            ? draftDisableUpload
                            : !draftDisableUpload &&
                              item.value === draftSelectResume
                        const isEditing = editingResumeId === item.value
                        const hasTargetJob =
                          item.type === "resume" && !!item.targetJobTitle
                        return jsx(
                          "div",
                          {
                            className: `${CLASS_PREFIX}resume-item ${isSelected ? `${CLASS_PREFIX}resume-item-active` : ""} ${isSelected ? "plugin-setting-item-selected" : "plugin-setting-item-unselected"} ${isEditing ? `${CLASS_PREFIX}resume-item-editing` : hasTargetJob ? `${CLASS_PREFIX}resume-item-expanded` : ""}`,
                            onClick: () => {
                              if (!isEditing) selectItem(item.value)
                            },
                            role: "button",
                            tabIndex: 0,
                            onKeyDown: (event) => {
                              if (isEditing) return
                              if (
                                event.key === "Enter" ||
                                event.key === " "
                              ) {
                                event.preventDefault()
                                selectItem(item.value)
                              }
                            },
                            children: isEditing
                              ? jsx(Flex, {
                                  gap: 8,
                                  align: "center",
                                  style: { width: "100%" },
                                  children: jsx(Input, {
                                    autoFocus: true,
                                    value: editingTitle,
                                    maxLength: 50,
                                    onChange: (event) =>
                                      setEditingTitle(event.target.value),
                                    onBlur: (event) => {
                                      event.stopPropagation()
                                      commitRename()
                                    },
                                    onPressEnter: () => commitRename(),
                                    variant: "borderless",
                                    onClick: (event) =>
                                      event.stopPropagation(),
                                    className: CLASS_PREFIX + "edit-input",
                                  }),
                                })
                              : jsxs(Fragment, {
                                  children: [
                                    jsxs(Flex, {
                                      gap: 8,
                                      align: "center",
                                      style: { width: "100%" },
                                      children: [
                                        jsx("span", {
                                          className:
                                            "plugin-setting-item-radio",
                                          "aria-hidden": "true",
                                          children: jsx("span", {
                                            className:
                                              "plugin-setting-item-radio-inner",
                                          }),
                                        }),
                                        jsxs("div", {
                                          className:
                                            CLASS_PREFIX +
                                            "resume-item-content",
                                          children: [
                                            jsx(Typography.Text, {
                                              className:
                                                CLASS_PREFIX + "resume-name",
                                              ellipsis: true,
                                              children: item.label,
                                            }),
                                            item.type === "resume" &&
                                              item.customized &&
                                              jsx(Flex, {
                                                justify: "center",
                                                align: "center",
                                                className:
                                                  CLASS_PREFIX + "tailor-tag",
                                                gap: 2,
                                                children: jsx("span", {
                                                  children: "Customized",
                                                }),
                                              }),
                                            item.type === "resume" &&
                                              item.primary &&
                                              jsxs(Flex, {
                                                justify: "center",
                                                align: "center",
                                                className:
                                                  CLASS_PREFIX +
                                                  "primary-tag",
                                                gap: 2,
                                                children: [
                                                  jsx(Image, {
                                                    src: assetUrl(starSvg),
                                                    preview: false,
                                                    width: 12,
                                                    height: 12,
                                                  }),
                                                  jsx("span", {
                                                    children: "Primary",
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                        item.type === "resume" &&
                                          isSelected &&
                                          jsx("button", {
                                            type: "button",
                                            className:
                                              CLASS_PREFIX + "edit-button",
                                            onClick: (event) => {
                                              event.stopPropagation()
                                              setEditingResumeId(item.value)
                                              setEditingTitle(item.label)
                                            },
                                            children: jsx(Image, {
                                              src: assetUrl(editSvg),
                                              preview: false,
                                              width: 16,
                                              height: 16,
                                              alt: "edit",
                                            }),
                                          }),
                                      ],
                                    }),
                                    hasTargetJob &&
                                      jsxs("div", {
                                        className:
                                          CLASS_PREFIX + "target-job",
                                        children: [
                                          "Target job:",
                                          " ",
                                          item.type === "resume" &&
                                            item.targetJobTitle,
                                        ],
                                      }),
                                  ],
                                }),
                          },
                          item.value,
                        )
                      }),
                    }),
                  ],
                }),
                jsxs(Flex, {
                  vertical: true,
                  gap: 8,
                  className: CLASS_PREFIX + "section-block",
                  children: [
                    jsx(Typography.Text, {
                      className: CLASS_PREFIX + "section-title",
                      children: "Choose version",
                    }),
                    jsxs(Flex, {
                      gap: 4,
                      className: CLASS_PREFIX + "version-row",
                      children: [
                        jsxs("button", {
                          type: "button",
                          className: `${CLASS_PREFIX}version-chip ${draftUseOriginal === "false" || draftSelectResume?.startsWith(TAILOR_RESUME_ID_PREFIX) ? `${CLASS_PREFIX}version-chip-active plugin-setting-item-selected` : "plugin-setting-item-unselected"}`,
                          onClick: () => setDraftUseOriginal("false"),
                          disabled: draftDisableUpload,
                          children: [
                            jsx("span", {
                              className: "plugin-setting-item-radio",
                              "aria-hidden": "true",
                              children: jsx("span", {
                                className:
                                  "plugin-setting-item-radio-inner",
                              }),
                            }),
                            jsx("span", { children: "Jobright Template" }),
                          ],
                        }),
                        jsxs("button", {
                          type: "button",
                          className: `${CLASS_PREFIX}version-chip ${draftUseOriginal !== "true" || draftSelectResume?.startsWith(TAILOR_RESUME_ID_PREFIX) ? "plugin-setting-item-unselected" : `${CLASS_PREFIX}version-chip-active plugin-setting-item-selected`}`,
                          onClick: () => setDraftUseOriginal("true"),
                          disabled:
                            draftDisableUpload ||
                            (!!draftSelectResume &&
                              draftSelectResume.startsWith(
                                TAILOR_RESUME_ID_PREFIX,
                              )),
                          children: [
                            jsx("span", {
                              className: "plugin-setting-item-radio",
                              "aria-hidden": "true",
                              children: jsx("span", {
                                className:
                                  "plugin-setting-item-radio-inner",
                              }),
                            }),
                            jsx("span", { children: "Original Version" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            draftDisableUpload
              ? jsx(Flex, {
                  justify: "center",
                  align: "center",
                  style: {
                    flex: "0 0 720px",
                    minWidth: 720,
                    maxWidth: 720,
                    minHeight: 496,
                  },
                  children: jsx(EmptyHint, {
                    image: jsx("img", {
                      src: assetUrl(nonePng),
                      style: { width: 72, height: 72 },
                    }),
                    description: jsxs(Fragment, {
                      children: [
                        "No resume will be uploaded.",
                        jsx("br", {}),
                        "Autofill using your autofill information.",
                      ],
                    }),
                    buttonText: "View My Information",
                    onClick: () => {
                      openAutofillInfoFromResumeReview({
                        closeResumeReview: handleCancel,
                        openAutofillInfo: () => setOpenAutofillInfo(true),
                      })
                    },
                  }),
                })
              : draftSelectResume &&
                jsx(PDFPreview, {
                  resumeId: draftSelectResume,
                  resumeMap,
                  template,
                  useOriginalResume: draftUseOriginal === "true",
                  isWord:
                    resumeMap[draftSelectResume]?.resumeNameWithSuffix
                      ?.toLowerCase()
                      .endsWith(".docx") ||
                    resumeMap[draftSelectResume]?.resumeNameWithSuffix
                      ?.toLowerCase()
                      .endsWith(".doc") ||
                    false,
                  style: {
                    flex: "0 0 720px",
                    minWidth: 720,
                    maxWidth: 720,
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
      jsx(PageConfirmPopup, {
        open: unsavedConfirmOpen,
        title: "You have unsaved changes",
        content: "Do you want to save your changes before you leave?",
        confirmText: "Save",
        cancelText: "Close",
        zIndex: HELPER_MODAL_Z_INDEX + 1,
        getContainer: getModalContainer,
        onConfirm: saveAndClose,
        onCancel: discardAndClose,
      }),
    ],
  })
}
