/**
 * Parcel module id: 2izun
 * Resolved path: components/HelperContainer/page-layout.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PAGE_RESERVED_BODY_STYLE", () => o), n.export(r,
  "PAGE_LAYOUT_GOHIRE_DRAWER_STYLE", () => i), n.export(r, "PAGE_LAYOUT_YCOMBINATOR_DIALOG_STYLE",
  () => a), n.export(r, "PAGE_LAYOUT_SITE_ADAPTERS", () => E), n.export(r,
  "shouldUseGenericPageLayoutDetection", () => C), n.export(r,
  "getPageLayoutMutationSyncDecision", () => A), n.export(r, "shouldFlushDeferredPageLayoutSync",
  () => k), n.export(r, "shouldRetainManagedFixedPageLayoutTarget", () => T), n.export(r,
  "shouldRetainManagedRootPageLayoutTarget", () => F);
let o = `
  html[data-jobright-helper-panel-open="true"] body[data-jobright-helper-panel-open="true"] {
    box-sizing: border-box !important;
    padding-right: var(--jobright-helper-panel-reserved-width) !important;
    overflow-x: hidden !important;
  }
`,
  i = `
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
`,
  a = `
  html[data-jobright-helper-panel-open="true"] body.ycdc2 #headlessui-portal-root [role="dialog"][aria-modal="true"] > .fixed.inset-0 {
    right: var(--jobright-helper-panel-reserved-width) !important;
    max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
  }
`,
  l = [{
    selector: '[data-component="PublicApp"], [data-component="PublicApp"] main, [data-component="PublicApp"] [data-scroll-point="section-navigation"]',
    type: "root",
    fullWidth: !0,
    resetMinWidth: !0
  }, {
    selector: '[data-component="PublicApp"] [data-cy="navigation-section-grid-container"], [data-component="PublicApp"] [data-cy="section-wrapper-padder"]',
    type: "content",
    contentInset: !0
  }, {
    selector: '[data-component="PublicApp"] #offer-application-form',
    type: "content",
    centerBlock: !0
  }],
  s = [{
    selector: ".resumator-jobboard-page .jobs-navbar > .container, .resumator-jobboard-page .page-header > .container, .resumator-jobboard-page .job-header > .container, .resumator-jobboard-page .job-details > .container, .resumator-jobboard-page .page-footer",
    type: "root",
    fullWidth: !1,
    resetMinWidth: !1
  }],
  u = [{
    selector: "#main-app-row > .apply.container",
    type: "root",
    fullWidth: !0,
    resetMinWidth: !1
  }, {
    selector: "#main-app-row > .apply.container > .apply-form-holder.apply-form-loaded",
    type: "root",
    fullWidth: !1,
    resetMinWidth: !1
  }],
  c = [{
    selector: 'body[data-fabric-mode][data-fabric-theme] #poRoot > main#micro-container2, body[data-fabric-mode][data-fabric-theme] #micro-container2 > [data-fabric-component="LayoutBox"], body[data-feature-toggles~="ATS_PO_APPLICATION_FORM"] #poRoot > main#micro-container2, #micro-container2 > div > div > div > [data-fabric-component="LayoutEscapeHatch"]',
    type: "root",
    fullWidth: !0,
    resetMinWidth: !0
  }],
  d = [{
    selector: ".rf-careers-header-wrapper",
    type: "fixed",
    fullWidth: !0,
    resetMinWidth: !0
  }],
  f = [{
    selector: 'header[role="banner"].header__alternate',
    type: "fixed",
    fullWidth: !0,
    resetMinWidth: !0
  }],
  p = [{
    selector: "#EFSmartApplyCustomHeaderContainer .jointtalentNetDiv",
    type: "content",
    contentInset: !0
  }],
  m = [{
    selector: "ukg-ignite-shell .container, ukg-ignite-shell .container-fluid",
    type: "content",
    fitParent: !0
  }],
  h = [{
    selector: ".header-main > .container, #content.container, .container.main-content",
    type: "content",
    fitParent: !0
  }],
  g = [{
    selector: ".fusion-header",
    type: "fixed",
    fullWidth: !0,
    resetMinWidth: !0
  }],
  b = [{
    selector: ".application-outlet:has(.jobs-search), .authentication-outlet:has(.jobs-search), .scaffold-layout:has(.jobs-search), main.scaffold-layout__main:has(.jobs-search), main#workspace, .jobs-search",
    type: "root",
    fullWidth: !0,
    resetMinWidth: !0
  }, {
    selector: "main#workspace > div, .jobs-search__left-rail, .jobs-search__job-details, .jobs-search__job-details--wrapper, .jobs-search-results-list, .jobs-search-results-list__container, .jobs-search-two-pane__details",
    type: "content",
    fitParent: !0
  }, {
    selector: 'header.global-nav, .global-nav, header:has(input[placeholder="Describe the job you want"]), header:has(a[href*="/jobs/"]), [role="banner"]:has(input[placeholder="Describe the job you want"]), [role="banner"]:has(a[href*="/jobs/"]), nav[aria-label*="Primary"], [role="toolbar"]',
    type: "fixed",
    fullWidth: !0,
    resetMinWidth: !0
  }, {
    selector: ".msg-overlay-list-bubble, .msg-overlay-conversation-bubble",
    type: "fixed",
    fullWidth: !1,
    resetMinWidth: !0
  }],
  y = [{
    selector: ".gohire_holder:not(.gohire_holder_hidden)",
    type: "fixed",
    fullWidth: !1,
    resetMinWidth: !1
  }],
  v = [],
  w = [{
    selector: "#bd",
    type: "root",
    fullWidth: !0,
    resetMinWidth: !0
  }, {
    selector: ".pcNav.with-color",
    type: "fixed",
    fullWidth: !0,
    resetMinWidth: !0
  }, {
    selector: ".resumeEdit-footer.resumePage-footer",
    type: "fixed",
    fullWidth: !0,
    resetMinWidth: !0
  }, {
    selector: ".resumeEditForm-wrapper",
    type: "content",
    fitParent: !0
  }],
  S = [{
    selector: '[data-testid="banner"]',
    type: "fixed",
    fullWidth: !0,
    resetMinWidth: !0
  }],
  E = [{
    site: "recruitee",
    hostSuffix: "recruitee.com",
    targets: l
  }, {
    site: "applytojob",
    hostSuffix: "applytojob.com",
    targets: s
  }, {
    site: "clearcompany",
    hostSuffix: "clearcompany.com",
    targets: u
  }, {
    site: "bamboohr",
    hostSuffix: "bamboohr.com",
    targets: c
  }, {
    site: "recruiterflow",
    hostSuffix: "recruiterflow.com",
    targets: d
  }, {
    site: "okta",
    hostSuffix: "okta.com",
    targets: f
  }, {
    site: "eightfold",
    hostSuffix: "eightfold.ai",
    targets: p
  }, {
    site: "ultipro",
    hostSuffix: "ultipro.com",
    targets: m
  }, {
    site: "ultipro-ca",
    hostSuffix: "ultipro.ca",
    targets: m
  }, {
    site: "ukg-pro",
    hostSuffix: "rec.pro.ukg.net",
    targets: m
  }, {
    site: "trakstar",
    hostSuffix: "hire.trakstar.com",
    targets: h
  }, {
    site: "icims",
    hostSuffix: "icims.com",
    targets: g
  }, {
    site: "linkedin-jobs",
    hostSuffix: "linkedin.com",
    targets: b
  }, {
    site: "gohire",
    hostSuffix: "jobs.gohire.io",
    targets: y
  }, {
    site: "personio",
    hostSuffix: "personio.com",
    targets: v,
    genericDetection: !1
  }, {
    site: "personio",
    hostSuffix: "personio.de",
    targets: v,
    genericDetection: !1
  }, {
    site: "bytedance",
    hostSuffix: "jobs.bytedance.com",
    targets: w,
    genericDetection: !1
  }, {
    site: "joinbytedance",
    hostSuffix: "joinbytedance.com",
    targets: S,
    genericDetection: !1
  }],
  x = (e, t) => e === t || e.endsWith(`.${t}`),
  C = e => !E.some(t => !1 === t.genericDetection && x(e, t.hostSuffix)),
  A = ({
    isFilling: e,
    isModalOnly: t
  }) => t ? "skip" : e ? "defer" : "schedule",
  k = ({
    wasFilling: e,
    isFilling: t,
    hasDeferredSync: r
  }) => e && !t && r,
  T = ({
    isManaged: e,
    isVisible: t,
    position: r
  }) => e && t && ("fixed" === r || "sticky" === r),
  F = ({
    isManaged: e,
    isRendered: t,
    position: r
  }) => e && t && "fixed" !== r && "sticky" !== r

