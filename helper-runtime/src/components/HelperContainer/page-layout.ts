// @ts-nocheck
/**
 * Page-layout CSS snippets + per-site adapters for reserving space for the helper panel.
 */

export const PAGE_RESERVED_BODY_STYLE = `
html[data-jobright-helper-panel-open="true"] body[data-jobright-helper-panel-open="true"] {
box-sizing: border-box !important;
padding-right: var(--jobright-helper-panel-reserved-width) !important;
overflow-x: hidden !important;
}
`

export const PAGE_LAYOUT_GOHIRE_DRAWER_STYLE = `
html[data-jobright-helper-panel-open="true"] body.gohire_active .gohire.gohire_holder:not(.gohire_holder_hidden) {
left: auto !important;
right: var(--jobright-helper-panel-reserved-width) !important;
max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
transition: none !important;
}
html:not([data-jobright-helper-panel-open="true"]) body.gohire_active .gohire.gohire_holder:not(.gohire_holder_hidden) {
left: auto !important;
right: 0 !important;
transition: none !important;
}
`

export const PAGE_LAYOUT_YCOMBINATOR_DIALOG_STYLE = `
html[data-jobright-helper-panel-open="true"] body.ycdc2 #headlessui-portal-root [role="dialog"][aria-modal="true"] > .fixed.inset-0 {
right: var(--jobright-helper-panel-reserved-width) !important;
max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
}
`

const RECRUITEE_TARGETS = [
  {
    selector:
      '[data-component="PublicApp"], [data-component="PublicApp"] main, [data-component="PublicApp"] [data-scroll-point="section-navigation"]',
    type: "root",
    fullWidth: true,
    resetMinWidth: true,
  },
  {
    selector:
      '[data-component="PublicApp"] [data-cy="navigation-section-grid-container"], [data-component="PublicApp"] [data-cy="section-wrapper-padder"]',
    type: "content",
    contentInset: true,
  },
  {
    selector: '[data-component="PublicApp"] #offer-application-form',
    type: "content",
    centerBlock: true,
  },
]

const APPLYTOJOB_TARGETS = [
  {
    selector:
      ".resumator-jobboard-page .jobs-navbar > .container, .resumator-jobboard-page .page-header > .container, .resumator-jobboard-page .job-header > .container, .resumator-jobboard-page .job-details > .container, .resumator-jobboard-page .page-footer",
    type: "root",
    fullWidth: false,
    resetMinWidth: false,
  },
]

const CLEARCOMPANY_TARGETS = [
  {
    selector: "#main-app-row > .apply.container",
    type: "root",
    fullWidth: true,
    resetMinWidth: false,
  },
  {
    selector: "#main-app-row > .apply.container > .apply-form-holder.apply-form-loaded",
    type: "root",
    fullWidth: false,
    resetMinWidth: false,
  },
]

const BAMBOOHR_TARGETS = [
  {
    selector:
      'body[data-fabric-mode][data-fabric-theme] #poRoot > main#micro-container2, body[data-fabric-mode][data-fabric-theme] #micro-container2 > [data-fabric-component="LayoutBox"], body[data-feature-toggles~="ATS_PO_APPLICATION_FORM"] #poRoot > main#micro-container2, #micro-container2 > div > div > div > [data-fabric-component="LayoutEscapeHatch"]',
    type: "root",
    fullWidth: true,
    resetMinWidth: true,
  },
]

const RECRUITERFLOW_TARGETS = [
  {
    selector: ".rf-careers-header-wrapper",
    type: "fixed",
    fullWidth: true,
    resetMinWidth: true,
  },
]

const OKTA_TARGETS = [
  {
    selector: 'header[role="banner"].header__alternate',
    type: "fixed",
    fullWidth: true,
    resetMinWidth: true,
  },
]

const EIGHTFOLD_TARGETS = [
  {
    selector: "#EFSmartApplyCustomHeaderContainer .jointtalentNetDiv",
    type: "content",
    contentInset: true,
  },
]

const UKG_TARGETS = [
  {
    selector: "ukg-ignite-shell .container, ukg-ignite-shell .container-fluid",
    type: "content",
    fitParent: true,
  },
]

const TRAKSTAR_TARGETS = [
  {
    selector:
      ".header-main > .container, #content.container, .container.main-content",
    type: "content",
    fitParent: true,
  },
]

const ICIMS_TARGETS = [
  {
    selector: ".fusion-header",
    type: "fixed",
    fullWidth: true,
    resetMinWidth: true,
  },
]

const LINKEDIN_JOBS_TARGETS = [
  {
    selector:
      ".application-outlet:has(.jobs-search), .authentication-outlet:has(.jobs-search), .scaffold-layout:has(.jobs-search), main.scaffold-layout__main:has(.jobs-search), main#workspace, .jobs-search",
    type: "root",
    fullWidth: true,
    resetMinWidth: true,
  },
  {
    selector:
      "main#workspace > div, .jobs-search__left-rail, .jobs-search__job-details, .jobs-search__job-details--wrapper, .jobs-search-results-list, .jobs-search-results-list__container, .jobs-search-two-pane__details",
    type: "content",
    fitParent: true,
  },
  {
    selector:
      'header.global-nav, .global-nav, header:has(input[placeholder="Describe the job you want"]), header:has(a[href*="/jobs/"]), [role="banner"]:has(input[placeholder="Describe the job you want"]), [role="banner"]:has(a[href*="/jobs/"]), nav[aria-label*="Primary"], [role="toolbar"]',
    type: "fixed",
    fullWidth: true,
    resetMinWidth: true,
  },
  {
    selector: ".msg-overlay-list-bubble, .msg-overlay-conversation-bubble",
    type: "fixed",
    fullWidth: false,
    resetMinWidth: true,
  },
]

const GOHIRE_TARGETS = [
  {
    selector: ".gohire_holder:not(.gohire_holder_hidden)",
    type: "fixed",
    fullWidth: false,
    resetMinWidth: false,
  },
]

const PERSONIO_TARGETS = []

const BYTEDANCE_TARGETS = [
  {
    selector: "#bd",
    type: "root",
    fullWidth: true,
    resetMinWidth: true,
  },
  {
    selector: ".pcNav.with-color",
    type: "fixed",
    fullWidth: true,
    resetMinWidth: true,
  },
  {
    selector: ".resumeEdit-footer.resumePage-footer",
    type: "fixed",
    fullWidth: true,
    resetMinWidth: true,
  },
  {
    selector: ".resumeEditForm-wrapper",
    type: "content",
    fitParent: true,
  },
]

const JOINBYTEDANCE_TARGETS = [
  {
    selector: '[data-testid="banner"]',
    type: "fixed",
    fullWidth: true,
    resetMinWidth: true,
  },
]

export const PAGE_LAYOUT_SITE_ADAPTERS = [
  { site: "recruitee", hostSuffix: "recruitee.com", targets: RECRUITEE_TARGETS },
  {
    site: "applytojob",
    hostSuffix: "applytojob.com",
    targets: APPLYTOJOB_TARGETS,
  },
  {
    site: "clearcompany",
    hostSuffix: "clearcompany.com",
    targets: CLEARCOMPANY_TARGETS,
  },
  { site: "bamboohr", hostSuffix: "bamboohr.com", targets: BAMBOOHR_TARGETS },
  {
    site: "recruiterflow",
    hostSuffix: "recruiterflow.com",
    targets: RECRUITERFLOW_TARGETS,
  },
  { site: "okta", hostSuffix: "okta.com", targets: OKTA_TARGETS },
  { site: "eightfold", hostSuffix: "eightfold.ai", targets: EIGHTFOLD_TARGETS },
  { site: "ultipro", hostSuffix: "ultipro.com", targets: UKG_TARGETS },
  { site: "ultipro-ca", hostSuffix: "ultipro.ca", targets: UKG_TARGETS },
  { site: "ukg-pro", hostSuffix: "rec.pro.ukg.net", targets: UKG_TARGETS },
  {
    site: "trakstar",
    hostSuffix: "hire.trakstar.com",
    targets: TRAKSTAR_TARGETS,
  },
  { site: "icims", hostSuffix: "icims.com", targets: ICIMS_TARGETS },
  {
    site: "linkedin-jobs",
    hostSuffix: "linkedin.com",
    targets: LINKEDIN_JOBS_TARGETS,
  },
  { site: "gohire", hostSuffix: "jobs.gohire.io", targets: GOHIRE_TARGETS },
  {
    site: "personio",
    hostSuffix: "personio.com",
    targets: PERSONIO_TARGETS,
    genericDetection: false,
  },
  {
    site: "personio",
    hostSuffix: "personio.de",
    targets: PERSONIO_TARGETS,
    genericDetection: false,
  },
  {
    site: "bytedance",
    hostSuffix: "jobs.bytedance.com",
    targets: BYTEDANCE_TARGETS,
    genericDetection: false,
  },
  {
    site: "joinbytedance",
    hostSuffix: "joinbytedance.com",
    targets: JOINBYTEDANCE_TARGETS,
    genericDetection: false,
  },
]

function hostMatchesSuffix(hostname, hostSuffix) {
  return hostname === hostSuffix || hostname.endsWith(`.${hostSuffix}`)
}

export function shouldUseGenericPageLayoutDetection(hostname) {
  return !PAGE_LAYOUT_SITE_ADAPTERS.some(
    (adapter) =>
      adapter.genericDetection === false &&
      hostMatchesSuffix(hostname, adapter.hostSuffix),
  )
}

export function getPageLayoutMutationSyncDecision({ isFilling, isModalOnly }) {
  if (isModalOnly) return "skip"
  if (isFilling) return "defer"
  return "schedule"
}

export function shouldFlushDeferredPageLayoutSync({
  wasFilling,
  isFilling,
  hasDeferredSync,
}) {
  return wasFilling && !isFilling && hasDeferredSync
}

export function shouldRetainManagedFixedPageLayoutTarget({
  isManaged,
  isVisible,
  position,
}) {
  return isManaged && isVisible && (position === "fixed" || position === "sticky")
}

export function shouldRetainManagedRootPageLayoutTarget({
  isManaged,
  isRendered,
  position,
}) {
  return isManaged && isRendered && position !== "fixed" && position !== "sticky"
}
