// @ts-nocheck
/**
 * Helper panel header: logo, payment entry / workday toast, settings, collapse.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Button, Flex } from "antd"
import * as arrSubnavSvg from "../assets/inline/images/arr_subnav.svg.js"
import * as logoSvg from "../assets/inline/images/logo.svg.js"
import * as settingSvg from "../assets/inline/images/setting.svg.js"
import { useState } from "react"
import { useStorage } from "@plasmohq/storage/hook"
import { agentDomains } from "../api/env-resolver.ts"
import PaymentEntry from "./PaymentEntry.ts"
import FeedbackPopupButton from "./Popups/FeedbackPopup/Button.ts"
import WorkdayToast from "./WorkdayToast.ts"
import { getTargetName } from "../contents/crawler/target.ts"
import { STORAGE_KEY } from "../enums/storage.ts"
import { useExternalJobStore } from "../store/externalJob.ts"
import { useHideStore } from "../store/hide.ts"
import Image from "../ui/Image.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function HelperHeader({ currentTabJob, setOpenSetting }) {
  const [pluginActived] = useStorage("plugin-actived", true)
  const isAddingAnotherJob = useExternalJobStore(
    (state) => state.isAddingAnotherJob,
  )
  const setIsAddingAnotherJob = useExternalJobStore(
    (state) => state.setIsAddingAnotherJob,
  )
  const setOpenCard = useHideStore((state) => state.setOpenCard)
  const setClickOpenInAgent = useHideStore((state) => state.setClickOpenInAgent)

  const isWorkday = getTargetName() === "myworkday"
  const [workdayToastClosed, setWorkdayToastClosed] = useStorage(
    STORAGE_KEY.WORKDAY_TOAST_CLOSED,
    false,
  )
  const [workdayToastDismissedThisSession, setWorkdayToastDismissedThisSession] =
    useState(false)

  const showWorkdayToast = isWorkday && !workdayToastClosed
  const showPaymentEntry = !showWorkdayToast && !workdayToastDismissedThisSession

  function handleWorkdayToastClose() {
    setWorkdayToastClosed(true)
    setWorkdayToastDismissedThisSession(true)
  }

  return jsxs(Flex, {
    className: "header",
    vertical: true,
    gap: 0,
    children: [
      showWorkdayToast &&
        jsx(WorkdayToast, {
          onClose: handleWorkdayToastClose,
        }),
      showPaymentEntry && jsx(PaymentEntry, {}),
      jsxs(Flex, {
        className: "helper-header-row",
        align: "center",
        justify: "space-between",
        gap: 12,
        children: [
          jsx(Image, {
            src: assetUrl(logoSvg),
            height: 32,
            width: 128,
            alt: "logo-image",
            draggable: false,
            preview: false,
            style: {
              userSelect: "none",
              pointerEvents: "none",
            },
          }),
          jsxs(Flex, {
            align: "center",
            gap: 8,
            className: "helper-header-actions",
            children: [
              pluginActived && jsx(FeedbackPopupButton, {}),
              pluginActived &&
                jsx(Button, {
                  className: "toggle-handler",
                  onClick: () => setOpenSetting(true),
                  children: jsx(Image, {
                    src: assetUrl(settingSvg),
                    alt: "logo-image",
                    preview: false,
                  }),
                }),
              jsx(Button, {
                className: "toggle-handler",
                onClick: () => {
                  if (isAddingAnotherJob) setIsAddingAnotherJob(false)
                  if (
                    agentDomains.includes(
                      new URL(window.location.href).hostname,
                    )
                  ) {
                    setClickOpenInAgent(false)
                  }
                  setOpenCard((open) => !open)
                },
                children: jsx(Image, {
                  src: assetUrl(arrSubnavSvg),
                  alt: "logo-image",
                  preview: false,
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
