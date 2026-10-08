// @ts-nocheck
/**
 * First-run onboarding checklist (account + profile) before applying.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Button, Flex, Typography } from "antd"
import * as flashSvg from "../assets/inline/images/flash.svg.js"
import { useStorage } from "@plasmohq/storage/hook"
import { HOST_DOMAIN } from "../api/env-resolver.ts"
import QuickChecklistItem from "./QuickChecklistItem.ts"
import { useProfileStore } from "../store/profile.ts"
import Image from "../ui/Image.ts"
function hubBase() {
  return String(HOST_DOMAIN || "").replace(/\/+$/, "")
}

function openHubSignIn() {
  const extensionId =
    typeof chrome !== "undefined" && chrome.runtime?.id ? chrome.runtime.id : ""
  window.open(
    `${hubBase()}/extension/connect?ext=${encodeURIComponent(extensionId)}`,
    "_blank",
    "noopener,noreferrer"
  )
}

function openHubSignUp() {
  window.open(`${hubBase()}/?mode=register`, "_blank", "noopener,noreferrer")
}

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function Onboarding() {
  const userStage = useProfileStore((state) => state.userStage)
  const userProfile = useProfileStore((state) => state.userProfile)
  const isLoggedIn = !!userStage?.logined
  const profileComplete = userProfile?.step === 5
  const [, setPluginActived] = useStorage("plugin-actived", true)

  return jsxs(Flex, {
    className: "initial-phase-container",
    vertical: true,
    gap: 32,
    children: [
      jsxs(Flex, {
        className: "apply-hint",
        vertical: true,
        align: "center",
        gap: 16,
        children: [
          jsx(Image, {
            src: assetUrl(flashSvg),
            preview: false,
            width: 48,
            height: 48,
          }),
          jsx(Typography.Text, {
            className: "hint-main-title",
            children: "Autofill with Qyvarex",
          }),
          jsx(Typography.Text, {
            className: "hint-description",
            children:
              "Complete your setup to start autofilling\napplications in one click.",
          }),
        ],
      }),
      jsx(Flex, {
        className: "quick-start-checklist",
        vertical: true,
        gap: 8,
        children: jsxs(Flex, {
          className: "list-items-group",
          vertical: true,
          gap: 8,
          children: [
            jsx(QuickChecklistItem, {
              checked: isLoggedIn,
              stepNumber: 1,
              onClick: openHubSignIn,
              title: "Sign in to Team Hub",
            }),
            jsx(QuickChecklistItem, {
              checked: profileComplete,
              stepNumber: 2,
              onClick: () => {
                window.open(`${HOST_DOMAIN}/dashboard`, "_blank")
              },
              title: "Complete Your Profile Details",
            }),
          ],
        }),
      }),
      jsx(Flex, {
        className: "confirm-area",
        vertical: true,
        gap: 12,
        align: "center",
        children: [
          jsx(Button, {
            className: "go-to-next-button",
            disabled:
              !userStage?.logined ||
              (!!userStage?.logined && userProfile?.step !== 5),
            onClick: () => {
              setPluginActived(true)
            },
            children: "Start Applying",
          }),
          !isLoggedIn
            ? jsx("button", {
                type: "button",
                onClick: openHubSignUp,
                style: {
                  border: 0,
                  background: "transparent",
                  color: "#667085",
                  fontSize: 13,
                  cursor: "pointer",
                },
                children: "Don't have an account? Sign up",
              })
            : null,
        ],
      }),
    ],
  })
}
