// @ts-nocheck
/**
 * Portal LinkedIn match banner + autofill chip onto job list/detail pages.
 */

import { useEffect, useState } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { createPortal } from "react-dom"
import { getFirstOrderedNodeSafe } from "../core/xpath.ts"
import { useLinkedinBannerClick } from "../hooks/useLinkedinBannerClick.ts"
import { useLinkedinBannerRefresh } from "../hooks/useLinkedinBannerRefresh.ts"
import { useUrlStore } from "../store/url.ts"
import {
  isLinkedinJobDetailPage,
  isLinkedinJobListPage,
  isLinkedinPreloadIframe,
} from "../utils/checkLinkedin.ts"
import { trackEvent } from "../utils/trace.ts"
import AutofillButton from "./LinkedinBannerProvider/AutofillButton.ts"
import {
  ensureLinkedInJobDetailBannerMount,
  ensureLinkedInListBannerMount,
  ensureLinkedInPublicJobDetailBannerMount,
  shouldResolveLinkedInBannerMount,
} from "./LinkedinBannerProvider/job-detail-mount.ts"
import LinkedinBanner from "./LinkedinBannerProvider/LinkedinBanner.ts"

const TWO_PANE_CARD_XPATH =
  "//div[contains(@class, 'job-details-jobs-unified-top-card__container--two-pane')]"
const TWO_PANE_DISPLAY_FLEX_XPATH =
  "//div[contains(@class, 'job-details-jobs-unified-top-card__container--two-pane')]//div[@class='display-flex']"
const APPLY_CONTROL_SELECTOR =
  'a[aria-label*="Apply"], button[aria-label*="Apply"], a.jobs-apply-button, button.jobs-apply-button, #jobs-apply-button-id'

function findApplyControl() {
  return document.querySelector(APPLY_CONTROL_SELECTOR)
}

function resolveDetailOrPublicMount() {
  return (
    ensureLinkedInJobDetailBannerMount() ??
    ensureLinkedInPublicJobDetailBannerMount(document)
  )
}

function resolveListBannerMount() {
  const applyControl = findApplyControl()
  if (!applyControl) return resolveDetailOrPublicMount()
  const displayContents = applyControl.closest("[data-display-contents]")
  const parent = displayContents?.parentElement
  return parent?.parentElement
    ? ensureLinkedInListBannerMount(document, parent)
    : resolveDetailOrPublicMount()
}

function resolveAutofillButtonMount() {
  const applyControl = findApplyControl()
  return applyControl?.parentElement?.parentElement
    ? applyControl.parentElement.parentElement
    : null
}

function LinkedinBannerHost({ userId, currentTabUrl, children }) {
  const [bannerMount, setBannerMount] = useState(null)
  const [autofillMount, setAutofillMount] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const isJobDetailPage = isLinkedinJobDetailPage(currentTabUrl)

  const resolveBannerMount = () =>
    isJobDetailPage
      ? ensureLinkedInJobDetailBannerMount() ??
        ensureLinkedInPublicJobDetailBannerMount()
      : getFirstOrderedNodeSafe(TWO_PANE_CARD_XPATH) ?? resolveListBannerMount()

  const resolveChipMount = () =>
    getFirstOrderedNodeSafe(TWO_PANE_DISPLAY_FLEX_XPATH) ??
    resolveAutofillButtonMount()

  const { handleBannerClick, handleIframeBannerClick } =
    useLinkedinBannerClick(userId)

  useLinkedinBannerRefresh(currentTabUrl, userId)

  useEffect(() => {
    if (window.self !== window.top) {
      if (!isLinkedinPreloadIframe()) return
      trackEvent("autofill_linkedin_banner_iframe", {
        iframeUrl: window.location.href,
        windowTopUrl: window.top.location.href,
      })
    }
    trackEvent("autofill_linkedin_banner_target_page_visited", {
      currentUrl: window.location.href,
    })

    setDarkMode(document.documentElement.classList.contains("theme--dark"))

    let currentMount = null
    let lastResolutionKey = null

    const resolveMounts = () => {
      if (
        !shouldResolveLinkedInBannerMount(
          isJobDetailPage,
          currentMount,
          document,
        )
      ) {
        return
      }

      const nextBannerMount = resolveBannerMount()
      const resolutionKey = `${isJobDetailPage ? "detail" : "list"}:${!!nextBannerMount}:${window.location.pathname}`
      if (resolutionKey !== lastResolutionKey) {
        lastResolutionKey = resolutionKey
        console.debug("[jobright] LinkedIn banner mount resolution", {
          pageKind: isJobDetailPage ? "detail" : "list",
          urlPath: window.location.pathname,
          mountFound: !!nextBannerMount,
        })
      }

      if (nextBannerMount && document.contains(nextBannerMount)) {
        if (nextBannerMount !== currentMount) {
          currentMount = nextBannerMount
          setBannerMount(nextBannerMount)
        }
        const nextAutofillMount = isJobDetailPage ? null : resolveChipMount()
        setAutofillMount((previous) =>
          previous === nextAutofillMount ? previous : nextAutofillMount,
        )
      }
    }

    resolveMounts()

    let rafId = null
    const observer = new MutationObserver(() => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(() => {
          rafId = null
          resolveMounts()
        })
      }
    })
    observer.observe(document.body, {
      childList: true,
      characterData: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      if (rafId !== null) window.cancelAnimationFrame(rafId)
    }
  }, [currentTabUrl])

  return jsxs(Fragment, {
    children: [
      bannerMount &&
        createPortal(
          jsx(LinkedinBanner, {
            currentTabUrl,
            isJobDetailPage,
            darkMode,
            handleBannerClick,
            handleIframeBannerClick,
          }),
          bannerMount,
        ),
      autofillMount && createPortal(jsx(AutofillButton, {}), autofillMount),
      children,
    ],
  })
}

export default function LinkedinBannerProvider({ userId, children }) {
  const currentTabUrl = useUrlStore((state) => state.currentTabUrl)
  const isListPage = isLinkedinJobListPage(currentTabUrl)
  const isDetailPage = isLinkedinJobDetailPage(currentTabUrl)

  if (!isListPage && !isDetailPage) {
    return jsx(Fragment, { children })
  }

  return jsx(LinkedinBannerHost, {
    userId,
    currentTabUrl,
    children,
  })
}
