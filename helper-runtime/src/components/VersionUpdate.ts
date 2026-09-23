// @ts-nocheck
/**
 * Version-update UI: bottom bar, ready/unavailable modals, What’s New sheet.
 */

import { jsx, jsxs, Fragment } from "react/jsx-runtime"
import { useVersionUpdate } from "../hooks/useVersionUpdate.ts"
import { UpdateReadyModal } from "./VersionUpdate/UpdateReadyModal.ts"
import { UpdateUnavailableModal } from "./VersionUpdate/UpdateUnavailableModal.ts"
import { VersionBottomBar } from "./VersionUpdate/VersionBottomBar.ts"
import { WhatsNewSheet } from "./VersionUpdate/WhatsNewSheet.ts"

export function VersionUpdate({ currentJobId = null }) {
  const versionUpdate = useVersionUpdate()

  return jsxs(Fragment, {
    children: [
      jsx(VersionBottomBar, {
        banner: versionUpdate.banner,
        localVersion: versionUpdate.localVersion,
        onClickUpdate: versionUpdate.onClickUpdate,
        onClickLater: versionUpdate.onClickLaterNewVersion,
        onOpenWhatsNew: versionUpdate.onOpenWhatsNew,
      }),
      jsx(UpdateReadyModal, {
        open: versionUpdate.readyModalOpen,
        targetVersion: versionUpdate.refreshTargetVersion,
        submitting: versionUpdate.refreshSubmitting,
        onRefresh: versionUpdate.onClickRefresh,
        onLater: versionUpdate.onClickLaterReady,
      }),
      jsx(UpdateUnavailableModal, {
        open: versionUpdate.unavailableModalOpen,
        onTryAgainLater: versionUpdate.onClickTryAgainLater,
      }),
      jsx(WhatsNewSheet, {
        releaseConfig: versionUpdate.releaseConfig,
        currentJobId,
      }),
    ],
  })
}

export default VersionUpdate
