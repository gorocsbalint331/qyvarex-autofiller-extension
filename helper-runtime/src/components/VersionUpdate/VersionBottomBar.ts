// @ts-nocheck
/**
 * Bottom banner for new version / updating / What’s New entry.
 */

import { useEffect } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { LoadingOutlined } from "@ant-design/icons"
import * as arrGoSvg from "../../assets/inline/images/arr_go.svg.js"
import * as downloadSvg from "../../assets/inline/images/download.svg.js"
import * as lightSvg from "../../assets/inline/images/light.svg.js"
import { useVersionUpdateStore } from "../../store/version-update.ts"
import { trackEvent } from "../../utils/trace.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export function VersionBottomBar({
  banner,
  localVersion,
  onClickUpdate,
  onClickLater,
  onOpenWhatsNew,
}) {
  useEffect(() => {
    const store = useVersionUpdateStore.getState()
    if (banner.kind === "new_version" && !store.exposedNewVersion) {
      store.setExposedNewVersion(true)
      trackEvent("autofill_version_new_version_exposure", {
        local_version: localVersion,
        target_version: banner.targetVersion,
      })
    }
    if (banner.kind === "whats_new_entry" && !store.exposedWhatsNewEntry) {
      store.setExposedWhatsNewEntry(true)
      trackEvent("autofill_version_whats_new_entry_exposure", {
        release_version: banner.version,
      })
    }
  }, [banner, localVersion])

  if (banner.kind === "hidden") return null

  if (banner.kind === "new_version") {
    return jsxs("div", {
      className: "jobright-version-bar",
      children: [
        jsx("div", {
          className: "jobright-version-bar-icon",
          children: jsx("img", {
            src: assetUrl(downloadSvg),
            width: 16,
            height: 16,
            alt: "",
          }),
        }),
        jsxs("div", {
          className: "jobright-version-bar-text",
          children: [
            jsx("div", {
              className: "jobright-version-bar-title",
              children: "New version available",
            }),
            jsxs("div", {
              className: "jobright-version-bar-desc",
              children: ["Get the improvements in v", banner.targetVersion],
            }),
          ],
        }),
        jsxs("div", {
          className: "jobright-version-bar-actions",
          children: [
            jsx("span", {
              className: "jobright-version-bar-later",
              onClick: onClickLater,
              children: "Later",
            }),
            jsx("button", {
              type: "button",
              className: "jobright-version-bar-update",
              onClick: () => {
                trackEvent("autofill_version_update_click", {
                  local_version: localVersion,
                  target_version: banner.targetVersion,
                })
                onClickUpdate()
              },
              children: "Update",
            }),
          ],
        }),
      ],
    })
  }

  if (banner.kind === "updating") {
    return jsxs("div", {
      className: "jobright-version-bar",
      children: [
        jsx("div", {
          className: "jobright-version-bar-icon",
          children: jsx(LoadingOutlined, { style: { fontSize: 16 } }),
        }),
        jsx("div", {
          className: "jobright-version-bar-text",
          children: jsx("div", {
            className: "jobright-version-bar-title",
            children: "Updating Autofill…",
          }),
        }),
      ],
    })
  }

  // whats_new_entry
  return jsxs("div", {
    className: "jobright-version-bar jobright-version-bar-clickable",
    onClick: onOpenWhatsNew,
    children: [
      jsx("div", {
        className: "jobright-version-bar-icon",
        children: jsx("img", {
          src: assetUrl(lightSvg),
          width: 16,
          height: 16,
          alt: "",
        }),
      }),
      jsxs("div", {
        className: "jobright-version-bar-text jobright-version-bar-text-row",
        children: [
          jsx("span", {
            className: "jobright-version-bar-title",
            children: "What’s New",
          }),
          jsxs("span", {
            className: "jobright-version-bar-tag",
            children: ["v", banner.version],
          }),
        ],
      }),
      jsx("img", {
        src: assetUrl(arrGoSvg),
        width: 16,
        height: 16,
        alt: "",
      }),
    ],
  })
}

export default VersionBottomBar
