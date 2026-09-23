// @ts-nocheck
/**
 * What’s New slide-over sheet for the current release notes.
 */

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import dayjs from "dayjs"
import { sendToBackground } from "@plasmohq/messaging"
import * as arrGoSvg from "../../assets/inline/images/arr_go.svg.js"
import * as confirmSvg from "../../assets/inline/images/confirm.svg.js"
import { HOST_DOMAIN } from "../../api/env-resolver.ts"
import { whatsNewReadKey } from "../../background/update-check.js"
import { hasValidCoverLetter } from "../../store/cover-letter-state.ts"
import { useProfileStore } from "../../store/profile.ts"
import { useResumeStore } from "../../store/resume.ts"
import { useVersionUpdateStore } from "../../store/version-update.ts"
import { trackEvent } from "../../utils/trace.ts"
import { resolveWhatsNewIcon } from "./whats-new-icons.ts"

const DEFAULT_SHEET_TOP = 180
const SHEET_TOP_GAP = 12

function assetUrl(mod) {
  return mod?.default ?? mod
}

function ItemAction({ item, contentGroup, onAction }) {
  if (!item.action) return null
  return jsxs("div", {
    className: "jobright-whats-new-cta",
    onClick: () => onAction(contentGroup, item.action.page),
    children: [
      jsx("span", { children: item.action.label }),
      jsx("img", {
        src: assetUrl(arrGoSvg),
        width: 16,
        height: 16,
        alt: "",
      }),
    ],
  })
}

export function WhatsNewSheet({ releaseConfig, currentJobId }) {
  const openWhatsNewSheet = useVersionUpdateStore(
    (state) => state.openWhatsNewSheet,
  )
  const setOpenWhatsNewSheet = useVersionUpdateStore(
    (state) => state.setOpenWhatsNewSheet,
  )
  const addSessionReadKey = useVersionUpdateStore(
    (state) => state.addSessionReadKey,
  )
  const userStage = useProfileStore((state) => state.userStage)
  const setOpenAutofillInfo = useResumeStore((state) => state.setOpenAutofillInfo)
  const setOpenCoverLetterPreview = useResumeStore(
    (state) => state.setOpenCoverLetterPreview,
  )
  const agentCoverLetter = useResumeStore((state) => state.agentCoverLetter)
  const currentJobCoverLetter = useResumeStore(
    (state) => state.currentJobCoverLetter,
  )

  const sheetRef = useRef(null)
  const [sheetTop, setSheetTop] = useState(DEFAULT_SHEET_TOP)

  const userId = userStage?.userId ? String(userStage.userId) : null
  const releaseVersion = releaseConfig?.version ?? null

  useLayoutEffect(() => {
    if (!openWhatsNewSheet) return
    const container = sheetRef.current?.closest(".job-profile-container")
    const jobSection = container?.querySelector(".job-profile-job-section")
    if (jobSection) {
      setSheetTop(jobSection.offsetTop + jobSection.offsetHeight + SHEET_TOP_GAP)
    }
  }, [openWhatsNewSheet])

  useEffect(() => {
    if (
      !openWhatsNewSheet ||
      !releaseConfig?.hasWhatsNewContent ||
      !userId ||
      !releaseVersion
    ) {
      return
    }
    const readKey = whatsNewReadKey(userId, releaseVersion)
    const store = useVersionUpdateStore.getState()
    if (store.sessionReadKeys.includes(readKey)) return

    store.addSessionReadKey(readKey)
    trackEvent("autofill_version_whats_new_sheet_exposure", {
      release_version: releaseVersion,
    })
    sendToBackground({
      name: "markWhatsNewRead",
      body: { userId, version: releaseVersion },
    }).catch(() => {})
  }, [
    openWhatsNewSheet,
    releaseConfig,
    userId,
    releaseVersion,
    addSessionReadKey,
  ])

  if (!openWhatsNewSheet || !releaseConfig?.hasWhatsNewContent) {
    return null
  }

  const { features, updates, improvements } = releaseConfig.whatsNew
  const featured = features[0] ?? null

  const versionLabel = releaseConfig.releasedAt
    ? `v${releaseConfig.version} · Released ${dayjs(releaseConfig.releasedAt).format("MMM D, YYYY")}`
    : `v${releaseConfig.version}`

  function handleItemAction(contentGroup, actionPage) {
    trackEvent("autofill_version_whats_new_item_click", {
      release_version: releaseConfig.version,
      content_group: contentGroup,
      action_page: actionPage,
    })

    if (actionPage === "autofill_information") {
      setOpenAutofillInfo(true)
      return
    }

    const coverLetter = hasValidCoverLetter(agentCoverLetter)
      ? agentCoverLetter
      : currentJobCoverLetter

    if (coverLetter) {
      setOpenCoverLetterPreview(true)
      return
    }

    if (!currentJobId) return

    sendToBackground({
      name: "getTabContext",
      body: { command: "initListener" },
    })
      .then(() =>
        sendToBackground({
          name: "getTabContext",
          body: {
            command: "openTailorTab",
            url: `${HOST_DOMAIN}/jobs/info/${currentJobId}?plugin_cover_letter=1`,
          },
        }),
      )
      .catch(() => {})
  }

  return jsxs("div", {
    ref: sheetRef,
    className: "jobright-whats-new-sheet",
    style: { top: sheetTop },
    children: [
      jsxs("div", {
        className: "jobright-whats-new-header",
        children: [
          jsxs("div", {
            className: "jobright-whats-new-header-title",
            children: [
              jsx("div", {
                className: "jobright-whats-new-title",
                children: "What’s New",
              }),
              jsx("div", {
                className: "jobright-whats-new-version",
                children: versionLabel,
              }),
            ],
          }),
          jsx("span", {
            className: "jobright-whats-new-cancel",
            onClick: () => setOpenWhatsNewSheet(false),
            children: "Cancel",
          }),
        ],
      }),
      jsxs("div", {
        className: "jobright-whats-new-list",
        children: [
          featured &&
            jsxs("div", {
              className: "jobright-whats-new-feature-card",
              children: [
                jsx("div", {
                  className: "jobright-whats-new-feature-icon",
                  children:
                    resolveWhatsNewIcon(featured.icon) &&
                    jsx("img", {
                      src: resolveWhatsNewIcon(featured.icon),
                      width: 16,
                      height: 16,
                      alt: "",
                    }),
                }),
                jsxs("div", {
                  className: "jobright-whats-new-item-content",
                  children: [
                    jsx("div", {
                      className: "jobright-whats-new-item-title",
                      children: featured.title,
                    }),
                    featured.description &&
                      jsx("div", {
                        className: "jobright-whats-new-item-desc",
                        children: featured.description,
                      }),
                    jsx(ItemAction, {
                      item: featured,
                      contentGroup: "features",
                      onAction: handleItemAction,
                    }),
                  ],
                }),
              ],
            }),
          updates.length > 0 &&
            jsxs("div", {
              className: "jobright-whats-new-group",
              children: [
                jsx("div", {
                  className: "jobright-whats-new-group-title",
                  children: "In This Update",
                }),
                jsx("div", {
                  className: "jobright-whats-new-group-list",
                  children: updates.map((item, index) => {
                    const iconSrc = resolveWhatsNewIcon(item.icon)
                    return jsxs(
                      "div",
                      {
                        className: "jobright-whats-new-item",
                        children: [
                          iconSrc &&
                            jsx("div", {
                              className: "jobright-whats-new-item-icon",
                              children: jsx("img", {
                                src: iconSrc,
                                width: 16,
                                height: 16,
                                alt: "",
                              }),
                            }),
                          jsxs("div", {
                            className: "jobright-whats-new-item-content",
                            children: [
                              jsx("div", {
                                className: "jobright-whats-new-item-title",
                                children: item.title,
                              }),
                              item.description &&
                                jsx("div", {
                                  className: "jobright-whats-new-item-desc",
                                  children: item.description,
                                }),
                              jsx(ItemAction, {
                                item,
                                contentGroup: "updates",
                                onAction: handleItemAction,
                              }),
                            ],
                          }),
                        ],
                      },
                      index,
                    )
                  }),
                }),
              ],
            }),
          improvements.length > 0 &&
            jsxs("div", {
              className: "jobright-whats-new-group",
              children: [
                jsx("div", {
                  className: "jobright-whats-new-group-title",
                  children: "Improvements",
                }),
                jsx("div", {
                  className: "jobright-whats-new-group-list",
                  children: improvements.map((item, index) =>
                    jsxs(
                      "div",
                      {
                        className:
                          "jobright-whats-new-item jobright-whats-new-item-improvement",
                        children: [
                          jsxs("div", {
                            className: "jobright-whats-new-item-content",
                            children: [
                              jsx("div", {
                                className: "jobright-whats-new-item-title",
                                children: item.title,
                              }),
                              item.description &&
                                jsx("div", {
                                  className: "jobright-whats-new-item-desc",
                                  children: item.description,
                                }),
                            ],
                          }),
                          jsx("img", {
                            className: "jobright-whats-new-check",
                            src: assetUrl(confirmSvg),
                            width: 16,
                            height: 16,
                            alt: "",
                          }),
                        ],
                      },
                      index,
                    ),
                  ),
                }),
              ],
            }),
        ],
      }),
    ],
  })
}

export default WhatsNewSheet
