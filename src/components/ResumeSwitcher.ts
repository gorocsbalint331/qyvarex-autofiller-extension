// @ts-nocheck
/**
 * Autofill dashboard rows for autofill info, resume upload/tailor, and cover letter.
 */

import { jsx, jsxs, Fragment } from "react/jsx-runtime"
import { Button, Flex, Typography } from "antd"
import * as aistarSvg from "../assets/inline/images/aistar_c.svg.js"
import * as arrGoSvg from "../assets/inline/images/arr_go.svg.js"
import * as fileSvg from "../assets/inline/images/file.svg.js"
import * as folderSvg from "../assets/inline/images/folder.svg.js"
import * as mailSvg from "../assets/inline/images/mail.svg.js"
import { useEffect, useMemo, useRef, useState } from "react"
import { sendToBackground } from "@plasmohq/messaging"
import { agentDomains, HOST_DOMAIN } from "../api/env-resolver.ts"
import AddJobFirstPopup from "./Popups/AddJobFirstPopup.ts"
import { getAutofillInstance } from "../helper-shims/host.ts"
import { TAILOR_RESUME_ID_PREFIX } from "../contents/shared/constants.ts"
import { MESSAGE_EVENTS } from "../core/enums.ts"
import { useAutofillInfoStore } from "../store/autofillInfo.ts"
import {
  buildDefaultCoverLetterName,
  getCoverLetterDisplayName,
  resolveCoverLetterState,
} from "../store/cover-letter-state.ts"
import { useExternalJobStore } from "../store/externalJob.ts"
import { useProfileStore } from "../store/profile.ts"
import { useResumeStore } from "../store/resume.ts"
import Image from "../ui/Image.ts"
import {
  buildJobrightTailorUrl,
  resolveTailorSourceResumeId,
} from "../utils/job-id.ts"
import { trackEvent } from "../utils/trace.ts"
import { resolveResumeInitializationJobId } from "./resume-init-gate.ts"
import { resolveResumeTargetJob } from "./resume-target-job.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function ResumeSwitcher({
  currentTabJob,
  jobContextLoading = false,
  fallbackJobId = null,
  onRequestAddJob,
}) {
  const [addJobPopupOpen, setAddJobPopupOpen] = useState(false)

  const openAddJobPopup = () => {
    if (onRequestAddJob) setAddJobPopupOpen(true)
  }

  const initResume = useResumeStore((state) => state.initResume)
  const disableUploadResume = useResumeStore((state) => state.disableUploadResume)
  const resumeCollection = useResumeStore((state) => state.resumeCollection)
  const lastUsedResume = useResumeStore((state) => state.lastUsedResume)
  const tailorResumeName = useResumeStore((state) => state.tailorResumeName)
  const setOpenResumeSelector = useResumeStore(
    (state) => state.setOpenResumeSelector,
  )
  const tailorResume = useResumeStore((state) => state.tailorResume)
  const setOpenAutofillInfo = useResumeStore((state) => state.setOpenAutofillInfo)
  const setOpenCoverLetterPreview = useResumeStore(
    (state) => state.setOpenCoverLetterPreview,
  )
  const autofillChangedFields = useResumeStore(
    (state) => state.autofillChangedFields,
  )
  const agentCoverLetter = useResumeStore((state) => state.agentCoverLetter)
  const currentJobCoverLetter = useResumeStore(
    (state) => state.currentJobCoverLetter,
  )
  const coverLetterDetectionStatus = useResumeStore(
    (state) => state.coverLetterDetectionStatus,
  )
  const setAgentCoverLetter = useResumeStore((state) => state.setAgentCoverLetter)
  const setCurrentJobCoverLetter = useResumeStore(
    (state) => state.setCurrentJobCoverLetter,
  )
  const setCoverLetterDetectionStatus = useResumeStore(
    (state) => state.setCoverLetterDetectionStatus,
  )

  const fetchAutofillInfo = useAutofillInfoStore(
    (state) => state.fetchAutofillInfo,
  )
  const externalJobId = useExternalJobStore((state) => state.jobId)
  const userStage = useProfileStore((state) => state.userStage)
  const userProfile = useProfileStore((state) => state.userProfile)
  const externalJobInfo = useExternalJobStore((state) => state.jobInfo)

  const normalizedFallbackJobId = fallbackJobId?.trim() || null

  const resumeTargetJob = useMemo(
    () => resolveResumeTargetJob(currentTabJob, externalJobInfo),
    [currentTabJob, externalJobInfo],
  )

  const resumeTargetJobOrFallback = useMemo(
    () =>
      resumeTargetJob ||
      (normalizedFallbackJobId
        ? {
            jobResult: {
              jobId: normalizedFallbackJobId,
            },
          }
        : null),
    [normalizedFallbackJobId, resumeTargetJob],
  )

  const resumeInitializationJobId = useMemo(
    () =>
      resolveResumeInitializationJobId({
        resumeTargetJob,
        fallbackJobId: normalizedFallbackJobId,
        jobContextLoading,
      }),
    [resumeTargetJob, normalizedFallbackJobId, jobContextLoading],
  )

  const activeJobId =
    resumeTargetJob?.jobResult?.jobId || normalizedFallbackJobId
  const activeJobTitle = resumeTargetJob?.jobResult?.jobTitle

  const lastUsedResumeEntry = useMemo(
    () => resumeCollection.find((resume) => resume?.resumeId === lastUsedResume),
    [resumeCollection, lastUsedResume],
  )

  const tailorSourceResumeId = useMemo(
    () =>
      resolveTailorSourceResumeId({
        disableUploadResume,
        lastUsedResume,
        resumeCollection,
      }),
    [disableUploadResume, lastUsedResume, resumeCollection],
  )

  const coverLetterState = useMemo(
    () =>
      resolveCoverLetterState({
        detectionStatus: coverLetterDetectionStatus,
        agentCoverLetter,
        currentJobCoverLetter,
      }),
    [coverLetterDetectionStatus, agentCoverLetter, currentJobCoverLetter],
  )

  const defaultCoverLetterName = useMemo(() => {
    const personalInfo = userProfile?.profile?.personalInfo
    const fullName = [personalInfo?.firstName, personalInfo?.lastName]
      .filter(Boolean)
      .join(" ")
    return buildDefaultCoverLetterName(fullName, activeJobTitle)
  }, [activeJobTitle, userProfile])

  const initInFlightRef = useRef(false)
  const userStageRef = useRef(userStage)
  const resumeTargetJobOrFallbackRef = useRef(resumeTargetJobOrFallback)
  const pendingInitRef = useRef(null)
  const coverLetterExposureJobIdRef = useRef(null)

  const coverLetterDisplayName = useMemo(
    () =>
      coverLetterState.activeCoverLetter
        ? getCoverLetterDisplayName(
            coverLetterState.activeCoverLetter.coverLetterName,
            defaultCoverLetterName,
          )
        : "",
    [coverLetterState.activeCoverLetter, defaultCoverLetterName],
  )

  userStageRef.current = userStage
  resumeTargetJobOrFallbackRef.current = resumeTargetJobOrFallback

  useEffect(() => {
    const runInit = (forceRefresh, stage, targetJob) => {
      pendingInitRef.current = null
      initInFlightRef.current = true
      initResume(forceRefresh, stage, targetJob).finally(() => {
        if (pendingInitRef.current) {
          const pending = pendingInitRef.current
          runInit(false, pending.userStage, pending.resumeTargetJob)
        } else {
          initInFlightRef.current = false
        }
      })
    }

    const maybeInit = (forceRefresh, _reason) => {
      const stage = userStageRef.current
      const targetJob = resumeTargetJobOrFallbackRef.current
      if (stage?.logined && (forceRefresh || resumeInitializationJobId)) {
        if (initInFlightRef.current && !forceRefresh) {
          pendingInitRef.current = {
            userStage: stage,
            resumeTargetJob: targetJob,
          }
          return
        }
        runInit(forceRefresh, stage, targetJob)
      }
    }

    const onRuntimeMessage = (message, _sender, _sendResponse) => {
      if (message.name === "refreshResume") {
        maybeInit(true, "Received 'refreshResume' message")
        const targetJob = resumeTargetJobOrFallbackRef.current
        if (targetJob?.jobResult?.jobId) {
          trackEvent("autofill_tailor_complete", {
            jobId: targetJob.jobResult.jobId,
            scene: "Autofill",
          })
        }
      }
    }

    chrome.runtime.onMessage.addListener(onRuntimeMessage)
    maybeInit(false, "Component mounted")
    return () => {
      pendingInitRef.current = null
      chrome.runtime.onMessage.removeListener(onRuntimeMessage)
    }
  }, [initResume, resumeInitializationJobId])

  useEffect(() => {
    fetchAutofillInfo()
  }, [])

  useEffect(() => {
    const onFromExtension = (event) => {
      if (event.detail?.action === MESSAGE_EVENTS.agentCheckCoverLetter) {
        setCoverLetterDetectionStatus(event.detail?.status || "")
      }
    }
    document.addEventListener("FromExtension", onFromExtension)
    return () => {
      document.removeEventListener("FromExtension", onFromExtension)
    }
  }, [setCoverLetterDetectionStatus])

  useEffect(() => {
    setAgentCoverLetter(null)
    setCurrentJobCoverLetter(null)
    setCoverLetterDetectionStatus("")
    if (activeJobId) {
      if (agentDomains.includes(new URL(window.location.href).hostname)) {
        document.dispatchEvent(new CustomEvent("CheckAgentCoverLetter"))
        return
      }
      getAutofillInstance()?.checkCoverLetter?.()
    }
  }, [
    activeJobId,
    setAgentCoverLetter,
    setCurrentJobCoverLetter,
    setCoverLetterDetectionStatus,
  ])

  useEffect(() => {
    if (
      activeJobId &&
      coverLetterState.showModule &&
      coverLetterExposureJobIdRef.current !== activeJobId
    ) {
      trackEvent("autofill_cover_letter_section_exposure", {})
      coverLetterExposureJobIdRef.current = activeJobId
    }
  }, [coverLetterState.showModule, activeJobId])

  const handleGenerateCustomResume = async () => {
    if (!activeJobId) {
      openAddJobPopup()
      return
    }
    if (resumeTargetJob) {
      trackEvent("autofill_tailor_click", {
        jobId: activeJobId,
        scene: "Autofill",
      })
    }
    if (externalJobInfo && externalJobId) {
      trackEvent("autofill_tailor_click", {
        userId: userStage?.userId,
        jobId: externalJobInfo?.jobResult?.jobId,
        currentUrl: window.location.href,
      })
    }
    await sendToBackground({
      name: "getTabContext",
      body: {
        command: "initListener",
      },
    })
    await sendToBackground({
      name: "getTabContext",
      body: {
        command: "openTailorTab",
        url: buildJobrightTailorUrl(HOST_DOMAIN, activeJobId, {
          resumeId: tailorSourceResumeId,
        }),
      },
    })
  }

  const handleGenerateCoverLetter = async () => {
    if (!activeJobId) {
      openAddJobPopup()
      return
    }
    trackEvent("autofill_cover_letter_generate_click", {
      has_existing: coverLetterState.hasExistingCoverLetter,
    })
    await sendToBackground({
      name: "getTabContext",
      body: {
        command: "initListener",
      },
    })
    await sendToBackground({
      name: "getTabContext",
      body: {
        command: "openTailorTab",
        url: `${HOST_DOMAIN}/jobs/info/${activeJobId}?plugin_cover_letter=1`,
      },
    })
  }

  const handleConfirmAddJob = () => {
    setAddJobPopupOpen(false)
    onRequestAddJob?.()
  }

  const isCustomizedTailorResume =
    !!tailorResume?.tailorId &&
    lastUsedResumeEntry?.resumeId ===
      TAILOR_RESUME_ID_PREFIX + tailorResume.tailorId

  const resumeDisplayName = disableUploadResume
    ? "Apply without resume"
    : isCustomizedTailorResume
      ? tailorResumeName
      : lastUsedResumeEntry?.resumeName

  return jsxs(Flex, {
    className: "application-dashboard-base-resume",
    vertical: true,
    gap: 12,
    children: [
      jsx(Flex, {
        vertical: true,
        gap: 0,
        className:
          "application-dashboard-base-resume-section application-dashboard-base-resume-section--autofill",
        children: jsxs(Button, {
          className:
            "application-dashboard-row-action application-dashboard-resume-header",
          onClick: () => {
            trackEvent("autofill_info_view_click", {})
            setOpenAutofillInfo(true)
          },
          children: [
            jsxs(Flex, {
              gap: 4,
              align: "center",
              className: "application-dashboard-resume-title",
              children: [
                jsx(Image, {
                  src: assetUrl(folderSvg),
                  width: 16,
                  height: 16,
                  preview: false,
                  draggable: false,
                }),
                jsx("span", {
                  children: "Your Autofill Information",
                }),
              ],
            }),
            jsxs(Flex, {
              gap: 4,
              align: "center",
              className: "application-dashboard-resume-action",
              children: [
                autofillChangedFields.length > 0 &&
                  jsx("span", {
                    className: "application-dashboard-autofill-dot",
                  }),
                jsx(Image, {
                  src: assetUrl(arrGoSvg),
                  width: 16,
                  height: 16,
                  preview: false,
                  draggable: false,
                }),
              ],
            }),
          ],
        }),
      }),
      jsx("div", {
        className: "application-dashboard-resume-divider",
      }),
      jsxs(Flex, {
        vertical: true,
        gap: 8,
        className:
          "application-dashboard-base-resume-section application-dashboard-base-resume-section--resume",
        children: [
          jsxs(Button, {
            className:
              "application-dashboard-row-action application-dashboard-upload-row",
            onClick: () => setOpenResumeSelector(true),
            children: [
              jsxs(Flex, {
                gap: 4,
                align: "center",
                className: "application-dashboard-upload-header",
                children: [
                  jsx(Image, {
                    src: assetUrl(fileSvg),
                    width: 16,
                    height: 16,
                    preview: false,
                    draggable: false,
                  }),
                  jsx("span", {
                    className: "application-dashboard-upload-title",
                    children: "Upload Resume",
                  }),
                ],
              }),
              jsx(Flex, {
                gap: 4,
                align: "center",
                className: "application-dashboard-resume-action",
                children: jsx(Image, {
                  src: assetUrl(arrGoSvg),
                  width: 16,
                  height: 16,
                  preview: false,
                  draggable: false,
                }),
              }),
            ],
          }),
          jsxs(Flex, {
            align: "center",
            gap: 4,
            children: [
              isCustomizedTailorResume &&
                jsx("span", {
                  className: "application-dashboard-customized-tag",
                  children: "Customized",
                }),
              jsx(Typography.Text, {
                ellipsis: true,
                className: "application-dashboard-base-resume-name",
                children: resumeDisplayName,
              }),
            ],
          }),
          (activeJobId || onRequestAddJob) &&
            jsxs(Button, {
              className: "application-dashboard-tailor-resume",
              onClick: handleGenerateCustomResume,
              children: [
                jsx(Image, {
                  src: assetUrl(aistarSvg),
                  width: 16,
                  height: 16,
                  preview: false,
                  draggable: false,
                }),
                jsx("span", {
                  children: "Generate Custom Resume",
                }),
              ],
            }),
        ],
      }),
      (coverLetterState.showModule || onRequestAddJob) &&
        jsxs(Fragment, {
          children: [
            jsx("div", {
              className: "application-dashboard-resume-divider",
            }),
            jsxs(Flex, {
              vertical: true,
              gap: 8,
              className:
                "application-dashboard-base-resume-section application-dashboard-base-resume-section--cover-letter",
              children: [
                jsxs(Flex, {
                  gap: 4,
                  justify: "space-between",
                  align: "center",
                  style: {
                    cursor: coverLetterState.hasExistingCoverLetter
                      ? "pointer"
                      : "default",
                  },
                  onClick: () => {
                    if (coverLetterState.hasExistingCoverLetter) {
                      trackEvent("autofill_cover_letter_view_click", {})
                      setOpenCoverLetterPreview(true)
                    }
                  },
                  children: [
                    jsxs(Flex, {
                      gap: 4,
                      align: "center",
                      className: "application-dashboard-upload-header",
                      children: [
                        jsx(Image, {
                          src: assetUrl(mailSvg),
                          width: 16,
                          height: 16,
                          preview: false,
                          draggable: false,
                        }),
                        jsx("span", {
                          className: "application-dashboard-upload-title",
                          children: "Upload Cover Letter",
                        }),
                      ],
                    }),
                    coverLetterState.hasExistingCoverLetter &&
                      jsx(Flex, {
                        gap: 4,
                        align: "center",
                        className: "application-dashboard-resume-action",
                        children: jsx(Image, {
                          src: assetUrl(arrGoSvg),
                          width: 16,
                          height: 16,
                          preview: false,
                          draggable: false,
                        }),
                      }),
                  ],
                }),
                coverLetterState.activeCoverLetter &&
                  jsx(Flex, {
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    className: "application-dashboard-file-row",
                    children: jsx(Typography.Text, {
                      ellipsis: true,
                      className:
                        "application-dashboard-base-resume-name application-dashboard-file-name",
                      children: coverLetterDisplayName,
                    }),
                  }),
                jsxs(Button, {
                  className: "application-dashboard-tailor-resume",
                  onClick: handleGenerateCoverLetter,
                  children: [
                    jsx(Image, {
                      src: assetUrl(aistarSvg),
                      width: 16,
                      height: 16,
                      preview: false,
                      draggable: false,
                    }),
                    jsx("span", {
                      children: "Generate Cover Letter",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      jsx(AddJobFirstPopup, {
        open: addJobPopupOpen,
        onConfirm: handleConfirmAddJob,
        onCancel: () => setAddJobPopupOpen(false),
      }),
    ],
  })
}
