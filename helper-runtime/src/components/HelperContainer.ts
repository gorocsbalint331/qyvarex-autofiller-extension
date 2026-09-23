// @ts-nocheck
/**
 * Helper sidebar shell: page-layout reservation, step routing, settings + modals.
 */

import { useEffect, useMemo, useRef, useState } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { useRequest } from "ahooks"
import { Flex } from "antd"
import clsx from "clsx"
import { isNil } from "lodash-es"
import { sendToBackground } from "@plasmohq/messaging"
import { useStorage } from "@plasmohq/storage/hook"
import { agentDomains } from "../api/env-resolver.ts"
import { getTargetName } from "../contents/crawler/target.js"
import useShowContinue from "../hooks/useShowContinue.ts"
import { useTrackPopup } from "../hooks/useTrackPopup.ts"
import { useAutofillResultStore } from "../store/autofillResult.ts"
import { useContainerStore } from "../store/container.ts"
import { useFeedbackStore } from "../store/feedback.ts"
import { useHideStore } from "../store/hide.ts"
import { useInventoryMatchJobStore } from "../store/inventory-match-job.ts"
import { useProfileStore } from "../store/profile.ts"
import { useResumeStore } from "../store/resume.ts"
import { useUrlStore } from "../store/url.ts"
import { extractJobIdFromUrl } from "../utils/job-id.ts"
import { resolveSuccessFactorsStickyJobId } from "../utils/successfactors-job-context.ts"
import AutofillInfoModal from "./AutofillInfoModal.ts"
import CoverLetterReview from "./CoverLetter/CoverLetterReview.ts"
import HelperHeader from "./HelperHeader.ts"
import ResumeReview from "./Resume/ResumeReview.ts"
import {
  PAGE_LAYOUT_GOHIRE_DRAWER_STYLE,
  PAGE_LAYOUT_SITE_ADAPTERS,
  PAGE_LAYOUT_YCOMBINATOR_DIALOG_STYLE,
  PAGE_RESERVED_BODY_STYLE,
  getPageLayoutMutationSyncDecision,
  shouldFlushDeferredPageLayoutSync,
  shouldRetainManagedFixedPageLayoutTarget,
  shouldRetainManagedRootPageLayoutTarget,
  shouldUseGenericPageLayoutDetection,
} from "./HelperContainer/page-layout.ts"
import PluginSetting from "./HelperContainer/PluginSetting.ts"
import { resolveHelperRenderStep } from "./HelperContainer/render-step.ts"
import StepContent from "./HelperContainer/StepContent.ts"
import { isHelperSidebarVisible } from "./HelperContainer/visibility.ts"

const PAGE_LAYOUT_STYLE_ID = "jobright-helper-page-layout-style"
const ATTR_PANEL_OPEN = "data-jobright-helper-panel-open"
const ATTR_LINKEDIN_LAYOUT = "data-jobright-helper-linkedin-layout"
const ATTR_BYTEDANCE_CAREERS_LAYOUT =
  "data-jobright-helper-bytedance-careers-layout"
const ATTR_PAGE_ROOT = "data-jobright-helper-page-root"
const ATTR_PAGE_ROOT_FULL = "data-jobright-helper-page-root-full"
const ATTR_PAGE_FIXED = "data-jobright-helper-page-fixed"
const ATTR_PAGE_FIXED_FULL = "data-jobright-helper-page-fixed-full"
const ATTR_MIN_WIDTH_RESET = "data-jobright-helper-page-min-width-reset"
const ATTR_VW_LOCKED = "data-jobright-helper-page-vw-locked"
const ATTR_CONTENT_INSET = "data-jobright-helper-page-content-inset"
const ATTR_CENTER_BLOCK = "data-jobright-helper-page-center-block"
const ATTR_FIT_PARENT = "data-jobright-helper-page-fit-parent"

const PANEL_WIDTH_PX = 384
const PANEL_GAP_PX = 0
const PANEL_RESERVED_WIDTH_PX = PANEL_WIDTH_PX + 2 * PANEL_GAP_PX
const EDGE_TOLERANCE_PX = 32
const ROOT_WIDTH_RATIO = 0.6
const ROOT_FULL_WIDTH_RATIO = 0.9
const ROOT_SCAN_DEPTH = 2
const FIXED_WIDTH_RATIO = 0.4
const FIXED_TOP_RATIO = 0.5
const WIDTH_MATCH_TOLERANCE_PX = 4

const HELPER_PLUGIN_ID = "jobright-helper-plugin"
const HELPER_CONTENT_ID = "jobright-helper-id"

const managedAttributeMap = new Map()
let pageLayoutObserver = null
let unsubscribeAutofillStore = null
let pendingSyncFrame = 0
let layoutSyncCount = 0
let hasDeferredLayoutSync = false

const LAYOUT_DEBUG_FLAG = "__JOBRIGHT_LAYOUT_DEBUG"
const MODAL_SELECTOR =
  '[role="dialog"], [role="alertdialog"], [aria-modal="true"], dialog'
const SKIP_LAYOUT_CLOSEST = [`#${HELPER_PLUGIN_ID}`, `#${HELPER_CONTENT_ID}`, MODAL_SELECTOR].join(
  ", ",
)

const PIXEL_VALUE_RE = /^\d+(?:\.\d+)?px$/

function isLayoutDebugEnabled() {
  return typeof window !== "undefined" && !!window[LAYOUT_DEBUG_FLAG]
}

function layoutDebug(...args) {
  if (isLayoutDebugEnabled()) {
    console.log("[jobright-helper:layout]", ...args)
  }
}

function describeElement(element) {
  const id = element.id ? `#${element.id}` : ""
  const className = element.getAttribute("class") ?? ""
  const classSelector = className
    ? `.${className.trim().split(/\s+/).slice(0, 2).join(".")}`
    : ""
  const role = element.getAttribute("role")
  const ariaModal = element.getAttribute("aria-modal")
  const attrs = []
  if (role) attrs.push(`role=${role}`)
  if (ariaModal) attrs.push(`aria-modal=${ariaModal}`)
  const attrSelector = attrs.length ? `[${attrs.join(",")}]` : ""
  return `${element.tagName.toLowerCase()}${id}${classSelector}${attrSelector}`
}

function ensurePageLayoutStyleElement() {
  let style = document.getElementById(PAGE_LAYOUT_STYLE_ID)
  if (!style) {
    style = document.createElement("style")
    style.id = PAGE_LAYOUT_STYLE_ID
    document.head.appendChild(style)
  }
  style.textContent = `
${PAGE_RESERVED_BODY_STYLE}
${PAGE_LAYOUT_GOHIRE_DRAWER_STYLE}
${PAGE_LAYOUT_YCOMBINATOR_DIALOG_STYLE}
html[${ATTR_PANEL_OPEN}="true"] body [${ATTR_PAGE_ROOT}="true"]:not([${ATTR_PAGE_ROOT_FULL}="true"]) {
max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
}
html[${ATTR_PANEL_OPEN}="true"] body [${ATTR_PAGE_ROOT_FULL}="true"] {
width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
}
html[${ATTR_PANEL_OPEN}="true"] body [${ATTR_PAGE_FIXED}="true"] {
right: var(--jobright-helper-panel-reserved-width) !important;
max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
}
html[${ATTR_PANEL_OPEN}="true"] body [${ATTR_PAGE_FIXED}="true"][${ATTR_PAGE_FIXED_FULL}="true"] {
left: 0 !important;
right: var(--jobright-helper-panel-reserved-width) !important;
width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
transform: none !important;
}
html[${ATTR_PANEL_OPEN}="true"] body [${ATTR_MIN_WIDTH_RESET}="true"] {
min-width: 0 !important;
}
html[${ATTR_PANEL_OPEN}="true"] body [${ATTR_VW_LOCKED}="true"] {
width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
min-width: 0 !important;
grid-template-columns: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
}
html[${ATTR_PANEL_OPEN}="true"] body [${ATTR_CONTENT_INSET}="true"] {
box-sizing: border-box !important;
padding-left: clamp(24px, 3vw, 56px) !important;
padding-right: clamp(24px, 3vw, 56px) !important;
}
html[${ATTR_PANEL_OPEN}="true"] body [${ATTR_CENTER_BLOCK}="true"] {
box-sizing: border-box !important;
width: 100% !important;
max-width: 760px !important;
margin-left: auto !important;
margin-right: auto !important;
}
html[${ATTR_PANEL_OPEN}="true"] body [${ATTR_FIT_PARENT}="true"] {
box-sizing: border-box !important;
width: 100% !important;
max-width: 100% !important;
}
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body main#workspace,
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body main#workspace *,
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body .jobs-search,
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body .jobs-search * {
box-sizing: border-box !important;
max-width: 100% !important;
min-width: 0 !important;
}
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body main#workspace,
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body .scaffold-layout:has(.jobs-search),
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body main.scaffold-layout__main:has(.jobs-search),
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body .jobs-search {
width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
min-width: 0 !important;
overflow-x: clip !important;
}
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body header:has(input[placeholder="Describe the job you want"]),
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body header:has(a[href*="/jobs/"]),
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body [role="banner"]:has(input[placeholder="Describe the job you want"]),
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body [role="banner"]:has(a[href*="/jobs/"]),
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body nav[aria-label*="Primary"],
html[${ATTR_PANEL_OPEN}="true"][${ATTR_LINKEDIN_LAYOUT}="true"] body [role="toolbar"] {
box-sizing: border-box !important;
left: 0 !important;
right: var(--jobright-helper-panel-reserved-width) !important;
width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
min-width: 0 !important;
overflow-x: clip !important;
}
/*
* joinbytedance.com pins <body> to min-width:1440px and never reflows below
* it. Under the border-box reservation above, that floor is measured
* *including* the reserved strip, so the page's content box collapses to
* 1440 - 384 and its right edge disappears under the panel. Reverting body
* to content-box makes the page's own floor apply to its content, and the
* reservation is added beyond it: the layout keeps its designed width and
* the document scrolls horizontally instead of being crushed. Specificity
* here (0,3,2) must stay above PAGE_RESERVED_BODY_STYLE's (0,2,2).
*/
html[${ATTR_PANEL_OPEN}="true"][${ATTR_BYTEDANCE_CAREERS_LAYOUT}="true"] body[${ATTR_PANEL_OPEN}="true"] {
box-sizing: content-box !important;
overflow-x: visible !important;
}
@media (max-width: 900px) {
html[${ATTR_PANEL_OPEN}="true"] body [${ATTR_CONTENT_INSET}="true"] {
padding-left: 16px !important;
padding-right: 16px !important;
}
}
`
  return style
}

function clearManagedAttributes() {
  for (const [element, attrs] of managedAttributeMap) {
    for (const attr of attrs) element.removeAttribute(attr)
  }
  managedAttributeMap.clear()
}

function clearFixedFullAttributes(root) {
  for (const element of root.querySelectorAll(`[${ATTR_PAGE_FIXED_FULL}]`)) {
    element.removeAttribute(ATTR_PAGE_FIXED_FULL)
  }
}

function isInsideSkippedLayoutRegion(element) {
  return element.closest(SKIP_LAYOUT_CLOSEST) !== null
}

function isStyleVisible(style, rect) {
  return !(
    style.display === "none" ||
    style.visibility === "hidden" ||
    rect.width <= 0 ||
    rect.height <= 0
  )
}

function isInViewportBand(style, rect, viewportHeight) {
  return (
    isStyleVisible(style, rect) &&
    rect.bottom > 0 &&
    rect.top < viewportHeight
  )
}

function isElementInViewportBand(element, viewportHeight) {
  return isInViewportBand(
    window.getComputedStyle(element),
    element.getBoundingClientRect(),
    viewportHeight,
  )
}

function addManagedAttrs(targetMap, element, ...attrs) {
  let set = targetMap.get(element)
  if (!set) {
    set = new Set()
    targetMap.set(element, set)
  }
  for (const attr of attrs) set.add(attr)
}

function hasManagedRootAncestor(targetMap, element) {
  let parent = element.parentElement
  while (parent && parent !== document.body) {
    const attrs = targetMap.get(parent)
    if (attrs && attrs.has(ATTR_PAGE_ROOT)) return true
    parent = parent.parentElement
  }
  return false
}

function hasManagedFixedAncestor(targetMap, element) {
  let parent = element.parentElement
  while (parent && parent !== document.body) {
    const attrs = targetMap.get(parent)
    if (attrs && attrs.has(ATTR_PAGE_FIXED)) return true
    parent = parent.parentElement
  }
  return false
}

function hostMatchesSuffix(hostname, hostSuffix) {
  return hostname === hostSuffix || hostname.endsWith(`.${hostSuffix}`)
}

function adapterMatchesHost(adapter, hostname) {
  return hostMatchesSuffix(hostname, adapter.hostSuffix)
}

function getMatchingSiteAdapters(hostname) {
  return PAGE_LAYOUT_SITE_ADAPTERS.filter((adapter) =>
    adapterMatchesHost(adapter, hostname),
  )
}

function getRootTargetAttrs(target) {
  const attrs = [ATTR_PAGE_ROOT]
  if (target.fullWidth) attrs.push(ATTR_PAGE_ROOT_FULL)
  if (target.resetMinWidth) attrs.push(ATTR_MIN_WIDTH_RESET)
  return attrs
}

function getContentTargetAttrs(target) {
  const attrs = []
  if (target.contentInset) attrs.push(ATTR_CONTENT_INSET)
  if (target.centerBlock) attrs.push(ATTR_CENTER_BLOCK)
  if (target.fitParent) attrs.push(ATTR_FIT_PARENT)
  return attrs
}

function getFixedTargetAttrs(target) {
  const attrs = [ATTR_PAGE_FIXED]
  if (target.fullWidth) attrs.push(ATTR_PAGE_FIXED_FULL)
  if (target.resetMinWidth) attrs.push(ATTR_MIN_WIDTH_RESET)
  return attrs
}

function getTargetAttrs(target) {
  if (target.type === "root") return getRootTargetAttrs(target)
  if (target.type === "content") return getContentTargetAttrs(target)
  return getFixedTargetAttrs(target)
}

function queryVisibleTargetElements(target, viewportHeight) {
  return Array.from(document.querySelectorAll(target.selector)).filter(
    (element) =>
      element instanceof HTMLElement &&
      !isInsideSkippedLayoutRegion(element) &&
      isElementInViewportBand(element, viewportHeight),
  )
}

function applySiteAdapterTargets(targetMap, viewportHeight) {
  const adapters = getMatchingSiteAdapters(window.location.hostname)
  for (const adapter of adapters) {
    for (const target of adapter.targets) {
      const attrs = getTargetAttrs(target)
      for (const element of queryVisibleTargetElements(target, viewportHeight)) {
        addManagedAttrs(targetMap, element, ...attrs)
      }
    }
  }
}

function collectShallowBodyDescendants(body) {
  const collected = []
  const walk = (element, depth) => {
    if (isInsideSkippedLayoutRegion(element)) return
    collected.push(element)
    if (depth >= ROOT_SCAN_DEPTH) return
    for (const child of Array.from(element.children)) {
      if (child instanceof HTMLElement) walk(child, depth + 1)
    }
  }
  for (const child of Array.from(body.children)) {
    if (child instanceof HTMLElement) walk(child, 0)
  }
  return collected
}

function collectPageLayoutTargets(body) {
  const targetMap = new Map()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  applySiteAdapterTargets(targetMap, viewportHeight)
  if (!shouldUseGenericPageLayoutDetection(window.location.hostname)) {
    return targetMap
  }

  for (const element of collectShallowBodyDescendants(body)) {
    if (targetMap.has(element) || hasManagedRootAncestor(targetMap, element)) {
      continue
    }
    const style = window.getComputedStyle(element)
    const rect = element.getBoundingClientRect()
    const previousAttrs = managedAttributeMap.get(element)

    if (
      shouldRetainManagedRootPageLayoutTarget({
        isManaged: previousAttrs?.has(ATTR_PAGE_ROOT) === true,
        isRendered: isStyleVisible(style, rect),
        position: style.position,
      })
    ) {
      addManagedAttrs(targetMap, element, ...(previousAttrs ?? []))
      layoutDebug("retained managed root after page reflow", describeElement(element))
      continue
    }

    if (style.position === "fixed" || !isInViewportBand(style, rect, viewportHeight)) {
      continue
    }

    const spansViewport =
      rect.left <= EDGE_TOLERANCE_PX &&
      rect.right >= viewportWidth - EDGE_TOLERANCE_PX
    const wideEnough = rect.width >= viewportWidth * ROOT_WIDTH_RATIO
    if (!spansViewport || !wideEnough) continue

    const attrs = [ATTR_PAGE_ROOT]
    if (rect.width >= viewportWidth * ROOT_FULL_WIDTH_RATIO) {
      attrs.push(ATTR_PAGE_ROOT_FULL)
    }
    addManagedAttrs(targetMap, element, ...attrs)
  }

  for (const element of body.querySelectorAll("*")) {
    if (isInsideSkippedLayoutRegion(element)) continue

    const style = window.getComputedStyle(element)
    const rect = element.getBoundingClientRect()
    const inBand = isInViewportBand(style, rect, viewportHeight)
    if (!inBand) continue

    const isFixedOrSticky =
      style.position === "fixed" || style.position === "sticky"
    if (isFixedOrSticky) {
      const previousAttrs = managedAttributeMap.get(element)
      if (
        shouldRetainManagedFixedPageLayoutTarget({
          isManaged: previousAttrs?.has(ATTR_PAGE_FIXED) === true,
          isVisible: inBand,
          position: style.position,
        })
      ) {
        addManagedAttrs(targetMap, element, ...(previousAttrs ?? []))
        continue
      }

      const spansViewport =
        rect.left <= EDGE_TOLERANCE_PX &&
        rect.right >= viewportWidth - EDGE_TOLERANCE_PX
      const wideEnough = rect.width >= viewportWidth * FIXED_WIDTH_RATIO
      const nearTop = rect.top <= viewportHeight * FIXED_TOP_RATIO
      const nearBottom = rect.bottom >= viewportHeight - EDGE_TOLERANCE_PX
      if (spansViewport && wideEnough && (nearTop || nearBottom)) {
        addManagedAttrs(targetMap, element, ATTR_PAGE_FIXED)
      }
      continue
    }

    if (
      targetMap.has(element) ||
      hasManagedFixedAncestor(targetMap, element) ||
      rect.left > EDGE_TOLERANCE_PX ||
      Math.abs(rect.width - viewportWidth) > WIDTH_MATCH_TOLERANCE_PX
    ) {
      continue
    }

    const isPixelGrid =
      style.display.includes("grid") && PIXEL_VALUE_RE.test(style.gridTemplateColumns)
    const isPixelWidth = PIXEL_VALUE_RE.test(style.width)
    if (isPixelGrid || isPixelWidth) {
      addManagedAttrs(targetMap, element, ATTR_VW_LOCKED)
    }
  }

  return targetMap
}

function syncManagedPageLayoutAttributes() {
  const body = document.body
  if (!body) return

  const nextMap = collectPageLayoutTargets(body)
  const debug = isLayoutDebugEnabled()
  const removedElements = []
  const changedElements = []
  const addedElements = []

  for (const [element, prevAttrs] of managedAttributeMap) {
    const nextAttrs = nextMap.get(element)
    if (!nextAttrs) {
      for (const attr of prevAttrs) element.removeAttribute(attr)
      managedAttributeMap.delete(element)
      if (debug) removedElements.push(element)
      continue
    }

    const added = []
    const removed = []
    for (const attr of prevAttrs) {
      if (!nextAttrs.has(attr)) {
        element.removeAttribute(attr)
        if (debug) removed.push(attr)
      }
    }
    for (const attr of nextAttrs) {
      if (!prevAttrs.has(attr)) {
        element.setAttribute(attr, "true")
        if (debug) added.push(attr)
      }
    }
    managedAttributeMap.set(element, nextAttrs)
    if (debug && (added.length || removed.length)) {
      changedElements.push({ element, added, removed })
    }
  }

  for (const [element, attrs] of nextMap) {
    if (managedAttributeMap.has(element)) continue
    for (const attr of attrs) element.setAttribute(attr, "true")
    managedAttributeMap.set(element, attrs)
    if (debug) addedElements.push(element)
  }

  if (!debug) return

  layoutSyncCount += 1
  if (
    addedElements.length === 0 &&
    removedElements.length === 0 &&
    changedElements.length === 0
  ) {
    layoutDebug(`sync #${layoutSyncCount} (no-op)`)
    return
  }

  layoutDebug(`sync #${layoutSyncCount}`, {
    added: addedElements.map((element) => ({
      el: describeElement(element),
      attrs: [...(nextMap.get(element) ?? [])],
    })),
    removed: removedElements.map((element) => describeElement(element)),
    changed: changedElements.map(({ element, added, removed }) => ({
      el: describeElement(element),
      added,
      removed,
    })),
  })
}

function schedulePageLayoutSync() {
  if (pendingSyncFrame) return
  pendingSyncFrame = window.requestAnimationFrame(() => {
    pendingSyncFrame = 0
    if (document.documentElement.getAttribute(ATTR_PANEL_OPEN) !== "true") {
      return
    }
    if (useAutofillResultStore.getState().isFilling) {
      hasDeferredLayoutSync = true
      layoutDebug("sync deferred (autofill in progress)")
      return
    }
    syncManagedPageLayoutAttributes()
  })
}

function teardownPageLayoutObservers() {
  if (pageLayoutObserver) {
    pageLayoutObserver.disconnect()
    pageLayoutObserver = null
  }
  if (unsubscribeAutofillStore) {
    unsubscribeAutofillStore()
    unsubscribeAutofillStore = null
  }
  hasDeferredLayoutSync = false
  if (pendingSyncFrame) {
    window.cancelAnimationFrame(pendingSyncFrame)
    pendingSyncFrame = 0
  }
  window.removeEventListener("resize", schedulePageLayoutSync)
}

function areMutationsModalOnly(mutations) {
  for (const mutation of mutations) {
    const { target } = mutation
    const element =
      target instanceof HTMLElement
        ? target
        : target?.parentElement instanceof HTMLElement
          ? target.parentElement
          : null
    if (!element || !element.closest(MODAL_SELECTOR)) return false
  }
  return true
}

function setupPageLayoutObservers() {
  teardownPageLayoutObservers()
  if (!document.body) return

  pageLayoutObserver = new MutationObserver((mutations) => {
    const decision = getPageLayoutMutationSyncDecision({
      isFilling: useAutofillResultStore.getState().isFilling,
      isModalOnly: areMutationsModalOnly(mutations),
    })
    if (decision === "skip") {
      layoutDebug("observer skipped (modal-only mutations)", mutations.length)
      return
    }
    if (decision === "defer") {
      hasDeferredLayoutSync = true
      layoutDebug("observer deferred (autofill in progress)", mutations.length)
      return
    }
    schedulePageLayoutSync()
  })
  pageLayoutObserver.observe(document.body, {
    childList: true,
    subtree: true,
  })

  unsubscribeAutofillStore = useAutofillResultStore.subscribe(
    (state, previous) => {
      if (
        shouldFlushDeferredPageLayoutSync({
          wasFilling: previous.isFilling,
          isFilling: state.isFilling,
          hasDeferredSync: hasDeferredLayoutSync,
        })
      ) {
        hasDeferredLayoutSync = false
        layoutDebug("sync scheduled (autofill completed)")
        schedulePageLayoutSync()
      }
    },
  )

  window.addEventListener("resize", schedulePageLayoutSync)
}

function isLinkedInJobsPage() {
  return (
    hostMatchesSuffix(window.location.hostname, "linkedin.com") &&
    window.location.pathname.startsWith("/jobs/")
  )
}

function isJoinBytedancePage() {
  return hostMatchesSuffix(window.location.hostname, "joinbytedance.com")
}

function setPageLayoutPanelOpen(open) {
  const html = document.documentElement
  const body = document.body
  if (!body) return

  if (open) {
    ensurePageLayoutStyleElement()
    html.setAttribute(ATTR_PANEL_OPEN, "true")
    body.setAttribute(ATTR_PANEL_OPEN, "true")
    if (isLinkedInJobsPage()) {
      html.setAttribute(ATTR_LINKEDIN_LAYOUT, "true")
    } else {
      html.removeAttribute(ATTR_LINKEDIN_LAYOUT)
    }
    if (isJoinBytedancePage()) {
      html.setAttribute(ATTR_BYTEDANCE_CAREERS_LAYOUT, "true")
    } else {
      html.removeAttribute(ATTR_BYTEDANCE_CAREERS_LAYOUT)
    }
    html.style.setProperty(
      "--jobright-helper-panel-width",
      `${PANEL_WIDTH_PX}px`,
    )
    html.style.setProperty(
      "--jobright-helper-panel-gap",
      `${PANEL_GAP_PX}px`,
    )
    html.style.setProperty(
      "--jobright-helper-panel-reserved-width",
      `${PANEL_RESERVED_WIDTH_PX}px`,
    )
    clearFixedFullAttributes(body)
    syncManagedPageLayoutAttributes()
    setupPageLayoutObservers()
    return
  }

  teardownPageLayoutObservers()
  clearManagedAttributes()
  html.removeAttribute(ATTR_PANEL_OPEN)
  html.removeAttribute(ATTR_LINKEDIN_LAYOUT)
  html.removeAttribute(ATTR_BYTEDANCE_CAREERS_LAYOUT)
  body.removeAttribute(ATTR_PANEL_OPEN)
  html.style.removeProperty("--jobright-helper-panel-width")
  html.style.removeProperty("--jobright-helper-panel-gap")
  html.style.removeProperty("--jobright-helper-panel-reserved-width")
}

export default function HelperContainer({ domainSupport }) {
  const [renderStep, setRenderStep] = useState(null)
  const [pluginActived] = useStorage("plugin-actived", true)
  const [openSetting, setOpenSetting] = useState(false)
  const containerRef = useRef(null)

  const setContainerDom = useContainerStore((state) => state.setContainerDom)
  const openResumeSelector = useResumeStore((state) => state.openResumeSelector)
  const openAutofillInfo = useResumeStore((state) => state.openAutofillInfo)
  const openCoverLetterPreview = useResumeStore(
    (state) => state.openCoverLetterPreview,
  )
  const openFeedbackPopup = useFeedbackStore((state) => state.openFeedbackPopup)
  const hasOverlayModal =
    openResumeSelector || openAutofillInfo || openCoverLetterPreview
  const hasBlockingOverlay = hasOverlayModal || openFeedbackPopup

  const openCard = useHideStore((state) => state.openCard)
  const clickOpenInAgent = useHideStore((state) => state.clickOpenInAgent)
  const isAgentDomain = agentDomains.includes(
    new URL(window.location.href).hostname,
  )
  const sidebarVisible = isHelperSidebarVisible({
    openCard,
    isAgentDomain,
    clickOpenInAgent,
  })
  const reservePageLayout = sidebarVisible
  const suppressPointerUnderOverlay = sidebarVisible && hasBlockingOverlay

  useEffect(() => {
    if (containerRef.current) setContainerDom(containerRef.current)
  }, [openCard, renderStep, openResumeSelector])

  const userStage = useProfileStore((state) => state.userStage)
  const userProfile = useProfileStore((state) => state.userProfile)
  const currentTabUrl = useUrlStore((state) => state.currentTabUrl)
  const showContinue = useShowContinue()

  const jobIdFromUrl = useMemo(
    () => extractJobIdFromUrl(currentTabUrl || window.location.href),
    [currentTabUrl],
  )
  const targetName = useMemo(() => getTargetName(), [currentTabUrl])
  const stickyJobId = useMemo(
    () => resolveSuccessFactorsStickyJobId(jobIdFromUrl, targetName),
    [jobIdFromUrl, targetName],
  )

  const { data: jobBannerDetail, loading: jobContextLoading } = useRequest(
    () =>
      sendToBackground({
        name: "getJobBannerDetail",
        body: { jobId: stickyJobId },
      }),
    {
      refreshDeps: [userStage?.logined, currentTabUrl],
      cacheKey: `jobBannerDetail|${userStage?.logined ? 1 : 0}|${currentTabUrl ?? ""}|${stickyJobId ?? ""}`,
      staleTime: 300000,
    },
  )

  useEffect(() => {
    const inventoryStore = useInventoryMatchJobStore.getState()
    if (jobBannerDetail?.jobResult?.jobId) {
      inventoryStore.setInventoryMatchJob({ jobInfo: jobBannerDetail })
      return
    }
    inventoryStore.clearInventoryMatchJob()
  }, [jobBannerDetail])

  useEffect(() => {
    setRenderStep(
      resolveHelperRenderStep({
        isAgentDomain,
        userProfile,
        userStage,
      }),
    )
  }, [isAgentDomain, userStage, userProfile])

  useTrackPopup(
    renderStep,
    domainSupport,
    pluginActived,
    userStage,
    sidebarVisible,
  )

  useEffect(() => {
    if (window.self !== window.top) return
    setPageLayoutPanelOpen(reservePageLayout)
    return () => {
      setPageLayoutPanelOpen(false)
    }
  }, [reservePageLayout])

  if (!openCard) return null

  return jsxs("div", {
    style: {
      visibility: sidebarVisible || hasOverlayModal ? "visible" : "hidden",
    },
    children: [
      reservePageLayout &&
        !suppressPointerUnderOverlay &&
        jsx("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            width: `var(--jobright-helper-panel-reserved-width, ${PANEL_RESERVED_WIDTH_PX}px)`,
            height: "100vh",
            background: "linear-gradient(180deg, #f7f8f9 0%, #f1f3f4 100%)",
            boxShadow: "inset 1px 0 0 rgba(0, 0, 0, 0.04)",
            zIndex: 1000,
            pointerEvents: "none",
          },
        }),
      jsx(Flex, {
        ref: containerRef,
        gap: 0,
        id: HELPER_CONTENT_ID,
        className: clsx("jobright-helper-content-container", {
          "jobright-helper-content-container-show-continue": showContinue,
        }),
        vertical: true,
        style: {
          display: "flex",
          visibility: sidebarVisible ? "visible" : "hidden",
          zIndex: suppressPointerUnderOverlay ? 900 : undefined,
          pointerEvents: suppressPointerUnderOverlay ? "none" : undefined,
        },
        children:
          !isNil(renderStep) &&
          jsxs(Fragment, {
            children: [
              jsx(HelperHeader, {
                currentTabJob: jobBannerDetail,
                setOpenSetting,
              }),
              openSetting
                ? jsx(PluginSetting, {
                    closeSetting: () => setOpenSetting(false),
                  })
                : jsx(StepContent, {
                    renderStep,
                    domainSupport,
                    currentTabJob: jobBannerDetail,
                    showContinue,
                    jobContextLoading,
                    fallbackJobId: stickyJobId,
                  }),
            ],
          }),
      }),
      openResumeSelector &&
        jsx(ResumeReview, { currentTabJob: jobBannerDetail }),
      openCoverLetterPreview && jsx(CoverLetterReview, {}),
      openAutofillInfo && jsx(AutofillInfoModal, {}),
    ],
  })
}
