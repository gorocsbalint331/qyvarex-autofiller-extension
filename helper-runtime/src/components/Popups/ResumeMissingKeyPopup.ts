// @ts-nocheck
/**
 * Prompt to complete missing Work Experience / Education on the resume.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Button, Flex, Modal } from "antd"
import { HOST_DOMAIN } from "../../api/env-resolver.ts"
import { useContainerStore } from "../../store/container.ts"
import { useProfileStore } from "../../store/profile.ts"
import { useResumeStore } from "../../store/resume.ts"

export default function ResumeMissingKeyPopup() {
  const showResumeMissingKeyPopup = useProfileStore(
    (state) => state.showResumeMissingKeyPopup,
  )
  const setShowResumeMissingKeyPopup = useProfileStore(
    (state) => state.setShowResumeMissingKeyPopup,
  )
  const resumeMap = useResumeStore((state) => state.resumeMap)
  const lastUsedResume = useResumeStore((state) => state.lastUsedResume)
  const containerDom = useContainerStore((state) => state.containerDom)

  return jsxs(Modal, {
    open: showResumeMissingKeyPopup,
    wrapClassName: "popup-modal-wrap jobright-helper-centered-popup-wrap",
    className: "popup-modal",
    mask: false,
    title: null,
    closable: false,
    getContainer: () => containerDom,
    footer: null,
    width: 320,
    children: [
      jsxs("div", {
        style: { textAlign: "left" },
        children: [
          "Your resume is missing key info in ",
          jsx("b", { children: "Work Experience" }),
          " or",
          " ",
          jsx("b", { children: "Education" }),
          ". Please complete it before using Autofill.",
        ],
      }),
      jsxs(Flex, {
        justify: "space-between",
        align: "center",
        gap: 12,
        className: "popup-modal-actions resume-missing-modal-actions",
        children: [
          jsx(Button, {
            type: "default",
            className: "resume-missing-key-model-button-cancel",
            onClick: () => setShowResumeMissingKeyPopup(false),
            children: "Cancel",
          }),
          jsx(Button, {
            type: "primary",
            className: "resume-missing-key-model-button-edit",
            onClick: () => {
              window.open(
                HOST_DOMAIN +
                  `/jobs/resume/edit/${resumeMap[lastUsedResume].diagnoseId}`,
                "_blank",
              )
              setShowResumeMissingKeyPopup(false)
            },
            children: "Edit Resume",
          }),
        ],
      }),
    ],
  })
}
