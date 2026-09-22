/**
 * Parcel module id: jZodJ
 * Resolved path: components/HelperContainer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   @plasmohq/storage/hook -> 8QXHm  =>  @plasmohq/storage/hook.js
 *   ahooks -> 9sqtS  =>  ahooks.js
 *   antd -> 9tniX  =>  antd.js
 *   clsx -> jgTfo  =>  clsx.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  _tilde_api/env-resolver.js
 *   ~components/AutofillInfoModal -> PlGZV  =>  _tilde_components/AutofillInfoModal.js
 *   ~components/CoverLetter/CoverLetterReview -> gm8fZ  =>  _tilde_components/CoverLetter/CoverLetterReview.js
 *   ~components/HelperContainer/PluginSetting -> 2y1sa  =>  _tilde_components/HelperContainer/PluginSetting.js
 *   ~components/HelperContainer/StepContent -> 8dRWn  =>  _tilde_components/HelperContainer/StepContent.js
 *   ~components/HelperContainer/page-layout -> 2izun  =>  _tilde_components/HelperContainer/page-layout.js
 *   ~components/HelperContainer/render-step -> 2TASB  =>  _tilde_components/HelperContainer/render-step.js
 *   ~components/HelperContainer/visibility -> d9oZa  =>  _tilde_components/HelperContainer/visibility.js
 *   ~components/HelperHeader -> hfEAA  =>  _tilde_components/HelperHeader.js
 *   ~components/Resume/ResumeReview -> 9pWmc  =>  _tilde_components/Resume/ResumeReview.js
 *   ~contents/crawler/target -> kkscK  =>  _tilde_contents/crawler/target.js
 *   ~hooks/useShowContinue -> 7dIdK  =>  _tilde_hooks/useShowContinue.js
 *   ~hooks/useTrackPopup -> 33jc0  =>  _tilde_hooks/useTrackPopup.js
 *   ~store/autofillResult -> hCUzf  =>  _tilde_store/autofillResult.js
 *   ~store/container -> cKIaQ  =>  _tilde_store/container.js
 *   ~store/feedback -> l2vHp  =>  _tilde_store/feedback.js
 *   ~store/hide -> az1YZ  =>  _tilde_store/hide.js
 *   ~store/inventory-match-job -> bU3EA  =>  _tilde_store/inventory-match-job.js
 *   ~store/profile -> 9omPD  =>  _tilde_store/profile.js
 *   ~store/resume -> iSBDf  =>  _tilde_store/resume.js
 *   ~store/url -> b53L3  =>  _tilde_store/url.js
 *   ~utils/job-id -> klnOn  =>  _tilde_utils/job-id.js
 *   ~utils/successfactors-job-context -> 6uxLs  =>  _tilde_utils/successfactors-job-context.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("ahooks"),
  a = e("antd"),
  l = e("clsx"),
  s = n.interopDefault(l),
  u = e("lodash-es"),
  c = e("react"),
  d = e("@plasmohq/messaging"),
  f = e("@plasmohq/storage/hook"),
  p = e("~api/env-resolver"),
  m = e("~components/AutofillInfoModal"),
  h = n.interopDefault(m),
  g = e("~components/CoverLetter/CoverLetterReview"),
  b = n.interopDefault(g),
  y = e("~components/HelperContainer/page-layout"),
  v = e("~components/HelperContainer/PluginSetting"),
  w = n.interopDefault(v),
  S = e("~components/HelperContainer/render-step"),
  E = e("~components/HelperContainer/StepContent"),
  x = n.interopDefault(E),
  C = e("~components/HelperContainer/visibility"),
  A = e("~components/HelperHeader"),
  k = n.interopDefault(A),
  T = e("~components/Resume/ResumeReview"),
  F = n.interopDefault(T),
  I = e("~contents/crawler/target"),
  j = e("~hooks/useShowContinue"),
  D = n.interopDefault(j),
  P = e("~hooks/useTrackPopup"),
  _ = e("~store/autofillResult"),
  L = e("~store/container"),
  R = e("~store/feedback"),
  O = e("~store/hide"),
  M = e("~store/inventory-match-job"),
  N = e("~store/profile"),
  $ = e("~store/resume"),
  B = e("~store/url"),
  q = e("~utils/job-id"),
  U = e("~utils/successfactors-job-context");
let H = "jobright-helper-page-layout-style",
  Y = "data-jobright-helper-panel-open",
  z = "data-jobright-helper-linkedin-layout",
  V = "data-jobright-helper-bytedance-careers-layout",
  W = "data-jobright-helper-page-root",
  G = "data-jobright-helper-page-root-full",
  K = "data-jobright-helper-page-fixed",
  X = "data-jobright-helper-page-fixed-full",
  J = "data-jobright-helper-page-min-width-reset",
  Q = "data-jobright-helper-page-vw-locked",
  Z = "data-jobright-helper-page-content-inset",
  ee = "data-jobright-helper-page-center-block",
  et = "data-jobright-helper-page-fit-parent",
  er = 384,
  en = 0,
  eo = er + 2 * en,
  ei = 32,
  ea = .6,
  el = .9,
  es = 2,
  eu = .4,
  ec = .5,
  ed = 4,
  ef = "jobright-helper-plugin",
  ep = "jobright-helper-id",
  em = new Map,
  eh = null,
  eg = null,
  eb = 0,
  ey = 0,
  ev = !1,
  ew = "__JOBRIGHT_LAYOUT_DEBUG",
  eS = '[role="dialog"], [role="alertdialog"], [aria-modal="true"], dialog',
  eE = [`#${ef}`, `#${ep}`, eS].join(", "),
  ex = () => "undefined" != typeof window && !!window[ew],
  eC = (...e) => {
    ex() && console.log("[jobright-helper:layout]", ...e)
  },
  eA = e => {
    let t = e.id ? `#${e.id}` : "",
      r = e.getAttribute("class") ?? "",
      n = r ? `.${r.trim().split(/\s+/).slice(0,2).join(".")}` : "",
      o = e.getAttribute("role"),
      i = e.getAttribute("aria-modal"),
      a = [];
    o && a.push(`role=${o}`), i && a.push(`aria-modal=${i}`);
    let l = a.length ? `[${a.join(",")}]` : "";
    return `${e.tagName.toLowerCase()}${t}${n}${l}`
  },
  ek = () => {
    let e = document.getElementById(H);
    return e || ((e = document.createElement("style")).id = H, document.head.appendChild(e)), e
      .textContent = `
    ${y.PAGE_RESERVED_BODY_STYLE}
    ${y.PAGE_LAYOUT_GOHIRE_DRAWER_STYLE}
    ${y.PAGE_LAYOUT_YCOMBINATOR_DIALOG_STYLE}

    html[${Y}="true"] body [${W}="true"]:not([${G}="true"]) {
      max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
    }

    html[${Y}="true"] body [${G}="true"] {
      width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
    }

    html[${Y}="true"] body [${K}="true"] {
      right: var(--jobright-helper-panel-reserved-width) !important;
      max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
    }

    html[${Y}="true"] body [${K}="true"][${X}="true"] {
      left: 0 !important;
      right: var(--jobright-helper-panel-reserved-width) !important;
      width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
      max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
      transform: none !important;
    }

    html[${Y}="true"] body [${J}="true"] {
      min-width: 0 !important;
    }

    html[${Y}="true"] body [${Q}="true"] {
      width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
      max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
      min-width: 0 !important;
      grid-template-columns: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
    }

    html[${Y}="true"] body [${Z}="true"] {
      box-sizing: border-box !important;
      padding-left: clamp(24px, 3vw, 56px) !important;
      padding-right: clamp(24px, 3vw, 56px) !important;
    }

    html[${Y}="true"] body [${ee}="true"] {
      box-sizing: border-box !important;
      width: 100% !important;
      max-width: 760px !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }

    html[${Y}="true"] body [${et}="true"] {
      box-sizing: border-box !important;
      width: 100% !important;
      max-width: 100% !important;
    }

    html[${Y}="true"][${z}="true"] body main#workspace,
    html[${Y}="true"][${z}="true"] body main#workspace *,
    html[${Y}="true"][${z}="true"] body .jobs-search,
    html[${Y}="true"][${z}="true"] body .jobs-search * {
      box-sizing: border-box !important;
      max-width: 100% !important;
      min-width: 0 !important;
    }

    html[${Y}="true"][${z}="true"] body main#workspace,
    html[${Y}="true"][${z}="true"] body .scaffold-layout:has(.jobs-search),
    html[${Y}="true"][${z}="true"] body main.scaffold-layout__main:has(.jobs-search),
    html[${Y}="true"][${z}="true"] body .jobs-search {
      width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
      max-width: calc(100vw - var(--jobright-helper-panel-reserved-width)) !important;
      min-width: 0 !important;
      overflow-x: clip !important;
    }

    html[${Y}="true"][${z}="true"] body header:has(input[placeholder="Describe the job you want"]),
    html[${Y}="true"][${z}="true"] body header:has(a[href*="/jobs/"]),
    html[${Y}="true"][${z}="true"] body [role="banner"]:has(input[placeholder="Describe the job you want"]),
    html[${Y}="true"][${z}="true"] body [role="banner"]:has(a[href*="/jobs/"]),
    html[${Y}="true"][${z}="true"] body nav[aria-label*="Primary"],
    html[${Y}="true"][${z}="true"] body [role="toolbar"] {
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
    html[${Y}="true"][${V}="true"] body[${Y}="true"] {
      box-sizing: content-box !important;
      overflow-x: visible !important;
    }

    @media (max-width: 900px) {
      html[${Y}="true"] body [${Z}="true"] {
        padding-left: 16px !important;
        padding-right: 16px !important;
      }
    }
  `, e
  },
  eT = () => {
    for (let [e, t] of em)
      for (let r of t) e.removeAttribute(r);
    em.clear()
  },
  eF = e => {
    for (let t of e.querySelectorAll(`[${X}]`)) t.removeAttribute(X)
  },
  eI = e => null !== e.closest(eE),
  ej = (e, t, r) => !!eD(e, t) && t.bottom > 0 && t.top < r,
  eD = (e, t) => !("none" === e.display || "hidden" === e.visibility || t.width <= 0 || t.height <=
    0),
  eP = (e, t) => ej(window.getComputedStyle(e), e.getBoundingClientRect(), t),
  e_ = (e, t, ...r) => {
    let n = e.get(t);
    for (let o of (n || (n = new Set, e.set(t, n)), r)) n.add(o)
  },
  eL = (e, t) => {
    let r = t.parentElement;
    for (; r && r !== document.body;) {
      let t = e.get(r);
      if (t && t.has(W)) return !0;
      r = r.parentElement
    }
    return !1
  },
  eR = (e, t) => {
    let r = t.parentElement;
    for (; r && r !== document.body;) {
      let t = e.get(r);
      if (t && t.has(K)) return !0;
      r = r.parentElement
    }
    return !1
  },
  eO = (e, t) => eM(t, e.hostSuffix),
  eM = (e, t) => e === t || e.endsWith(`.${t}`),
  eN = e => (0, y.PAGE_LAYOUT_SITE_ADAPTERS).filter(t => eO(t, e)),
  e$ = e => {
    let t = [W];
    return e.fullWidth && t.push(G), e.resetMinWidth && t.push(J), t
  },
  eB = e => {
    let t = [];
    return e.contentInset && t.push(Z), e.centerBlock && t.push(ee), e.fitParent && t.push(et), t
  },
  eq = e => {
    let t = [K];
    return e.fullWidth && t.push(X), e.resetMinWidth && t.push(J), t
  },
  eU = e => "root" === e.type ? e$(e) : "content" === e.type ? eB(e) : eq(e),
  eH = (e, t) => Array.from(document.querySelectorAll(e.selector)).filter(e =>
    e instanceof HTMLElement && !eI(e) && eP(e, t)),
  eY = (e, t) => {
    let r = eN(window.location.hostname);
    for (let n of r)
      for (let r of n.targets) {
        let n = eU(r);
        for (let o of eH(r, t)) e_(e, o, ...n)
      }
  },
  ez = e => {
    let t = [],
      r = (e, n) => {
        if (!eI(e) && (t.push(e), !(n >= es)))
          for (let t of Array.from(e.children)) t instanceof HTMLElement && r(t, n + 1)
      };
    for (let t of Array.from(e.children)) t instanceof HTMLElement && r(t, 0);
    return t
  },
  eV = /^\d+(?:\.\d+)?px$/,
  eW = e => {
    let t = new Map,
      r = window.innerWidth,
      n = window.innerHeight;
    if (eY(t, n), !(0, y.shouldUseGenericPageLayoutDetection)(window.location.hostname)) return t;
    for (let o of ez(e)) {
      if (t.has(o) || eL(t, o)) continue;
      let e = window.getComputedStyle(o),
        i = o.getBoundingClientRect(),
        a = em.get(o);
      if ((0, y.shouldRetainManagedRootPageLayoutTarget)({
          isManaged: a?.has(W) === !0,
          isRendered: eD(e, i),
          position: e.position
        })) {
        e_(t, o, ...a ?? []), eC("retained managed root after page reflow", eA(o));
        continue
      }
      if ("fixed" === e.position || !ej(e, i, n)) continue;
      let l = i.left <= ei && i.right >= r - ei,
        s = i.width >= r * ea;
      if (!l || !s) continue;
      let u = [W];
      i.width >= r * el && u.push(G), e_(t, o, ...u)
    }
    for (let o of e.querySelectorAll("*")) {
      if (eI(o)) continue;
      let e = window.getComputedStyle(o),
        i = o.getBoundingClientRect(),
        a = ej(e, i, n);
      if (!a) continue;
      let l = "fixed" === e.position || "sticky" === e.position;
      if (l) {
        let l = em.get(o);
        if ((0, y.shouldRetainManagedFixedPageLayoutTarget)({
            isManaged: l?.has(K) === !0,
            isVisible: a,
            position: e.position
          })) {
          e_(t, o, ...l ?? []);
          continue
        }
        let s = i.left <= ei && i.right >= r - ei,
          u = i.width >= r * eu,
          c = i.top <= n * ec,
          d = i.bottom >= n - ei;
        s && u && (c || d) && e_(t, o, K);
        continue
      }
      if (t.has(o) || eR(t, o) || i.left > ei || Math.abs(i.width - r) > ed) continue;
      let s = e.display.includes("grid") && eV.test(e.gridTemplateColumns),
        u = eV.test(e.width);
      (s || u) && e_(t, o, Q)
    }
    return t
  },
  eG = () => {
    let e = document.body;
    if (!e) return;
    let t = eW(e),
      r = ex(),
      n = [],
      o = [],
      i = [];
    for (let [e, i] of em) {
      let a = t.get(e);
      if (!a) {
        for (let t of i) e.removeAttribute(t);
        em.delete(e), r && n.push(e);
        continue
      }
      let l = [],
        s = [];
      for (let t of i) !a.has(t) && (e.removeAttribute(t), r && s.push(t));
      for (let t of a) !i.has(t) && (e.setAttribute(t, "true"), r && l.push(t));
      em.set(e, a), r && (l.length || s.length) && o.push({
        element: e,
        added: l,
        removed: s
      })
    }
    for (let [e, n] of t)
      if (!em.has(e)) {
        for (let t of n) e.setAttribute(t, "true");
        em.set(e, n), r && i.push(e)
      } if (r) {
      if (ey += 1, 0 === i.length && 0 === n.length && 0 === o.length) {
        eC(`sync #${ey} (no-op)`);
        return
      }
      eC(`sync #${ey}`, {
        added: i.map(e => ({
          el: eA(e),
          attrs: [...t.get(e) ?? []]
        })),
        removed: n.map(e => eA(e)),
        changed: o.map(({
          element: e,
          added: t,
          removed: r
        }) => ({
          el: eA(e),
          added: t,
          removed: r
        }))
      })
    }
  },
  eK = () => {
    eb || (eb = window.requestAnimationFrame(() => {
      if (eb = 0, "true" === document.documentElement.getAttribute(Y)) {
        if ((0, _.useAutofillResultStore).getState().isFilling) {
          ev = !0, eC("sync deferred (autofill in progress)");
          return
        }
        eG()
      }
    }))
  },
  eX = () => {
    eh && (eh.disconnect(), eh = null), eg && (eg(), eg = null), ev = !1, eb && (window
      .cancelAnimationFrame(eb), eb = 0), window.removeEventListener("resize", eK)
  },
  eJ = e => {
    for (let t of e) {
      let {
        target: e
      } = t, r = e instanceof HTMLElement ? e : e?.parentElement instanceof HTMLElement ? e
        .parentElement : null;
      if (!r || !r.closest(eS)) return !1
    }
    return !0
  },
  eQ = () => {
    eX(), document.body && ((eh = new MutationObserver(e => {
      let t = (0, y.getPageLayoutMutationSyncDecision)({
        isFilling: (0, _.useAutofillResultStore).getState().isFilling,
        isModalOnly: eJ(e)
      });
      if ("skip" === t) {
        eC("observer skipped (modal-only mutations)", e.length);
        return
      }
      if ("defer" === t) {
        ev = !0, eC("observer deferred (autofill in progress)", e.length);
        return
      }
      eK()
    })).observe(document.body, {
      childList: !0,
      subtree: !0
    }), eg = (0, _.useAutofillResultStore).subscribe((e, t) => {
      (0, y.shouldFlushDeferredPageLayoutSync)({
        wasFilling: t.isFilling,
        isFilling: e.isFilling,
        hasDeferredSync: ev
      }) && (ev = !1, eC("sync scheduled (autofill completed)"), eK())
    }), window.addEventListener("resize", eK))
  },
  eZ = () => eM(window.location.hostname, "linkedin.com") && window.location.pathname.startsWith(
    "/jobs/"),
  e0 = () => eM(window.location.hostname, "joinbytedance.com"),
  e2 = e => {
    let t = document.documentElement,
      r = document.body;
    if (r) {
      if (e) {
        ek(), t.setAttribute(Y, "true"), r.setAttribute(Y, "true"), eZ() ? t.setAttribute(z,
          "true") : t.removeAttribute(z), e0() ? t.setAttribute(V, "true") : t.removeAttribute(V), t
          .style.setProperty("--jobright-helper-panel-width", `${er}px`), t.style.setProperty(
            "--jobright-helper-panel-gap", `${en}px`), t.style.setProperty(
            "--jobright-helper-panel-reserved-width", `${eo}px`), eF(r), eG(), eQ();
        return
      }
      eX(), eT(), t.removeAttribute(Y), t.removeAttribute(z), t.removeAttribute(V), r
        .removeAttribute(Y), t.style.removeProperty("--jobright-helper-panel-width"), t.style
        .removeProperty("--jobright-helper-panel-gap"), t.style.removeProperty(
          "--jobright-helper-panel-reserved-width")
    }
  },
  e1 = ({
    domainSupport: e
  }) => {
    let [t, r] = (0, c.useState)(null), [n] = (0, f.useStorage)("plugin-actived", !0), [l, m] = (0,
      c.useState)(!1), g = (0, c.useRef)(null), y = (0, L.useContainerStore)(e => e
      .setContainerDom), v = (0, $.useResumeStore)(e => e.openResumeSelector), E = (0, $
        .useResumeStore)(e => e.openAutofillInfo), A = (0, $.useResumeStore)(e => e
        .openCoverLetterPreview), T = (0, R.useFeedbackStore)(e => e.openFeedbackPopup), j = v ||
      E || A, _ = j || T, H = (0, O.useHideStore)(e => e.openCard), Y = (0, O.useHideStore)(e => e
        .clickOpenInAgent), z = (0, p.agentDomains).includes(new URL(window.location.href)
      .hostname), V = (0, C.isHelperSidebarVisible)({
        openCard: H,
        isAgentDomain: z,
        clickOpenInAgent: Y
      }), W = V, G = V && _;
    (0, c.useEffect)(() => {
      g.current && y(g.current)
    }, [H, t, v]);
    let K = (0, N.useProfileStore)(e => e.userStage),
      X = (0, N.useProfileStore)(e => e.userProfile),
      J = (0, B.useUrlStore)(e => e.currentTabUrl),
      Q = (0, D.default)(),
      Z = (0, c.useMemo)(() => (0, q.extractJobIdFromUrl)(J || window.location.href), [J]),
      ee = (0, c.useMemo)(() => (0, I.getTargetName)(), [J]),
      et = (0, c.useMemo)(() => (0, U.resolveSuccessFactorsStickyJobId)(Z, ee), [Z, ee]),
      {
        data: er,
        loading: en
      } = (0, i.useRequest)(() => (0, d.sendToBackground)({
        name: "getJobBannerDetail",
        body: {
          jobId: et
        }
      }), {
        refreshDeps: [K?.logined, J],
        cacheKey: `jobBannerDetail|${K?.logined?1:0}|${J??""}|${et??""}`,
        staleTime: 3e5
      });
    return ((0, c.useEffect)(() => {
      let e = (0, M.useInventoryMatchJobStore).getState();
      if (er?.jobResult?.jobId) {
        e.setInventoryMatchJob({
          jobInfo: er
        });
        return
      }
      e.clearInventoryMatchJob()
    }, [er]), (0, c.useEffect)(() => {
      r((0, S.resolveHelperRenderStep)({
        isAgentDomain: z,
        userProfile: X,
        userStage: K
      }))
    }, [z, K, X]), (0, P.useTrackPopup)(t, e, n, K, V), (0, c.useEffect)(() => {
      if (window.self === window.top) return e2(W), () => {
        e2(!1)
      }
    }, [W]), H) ? (0, o.jsxs)("div", {
      style: {
        visibility: V || j ? "visible" : "hidden"
      },
      children: [W && !G && (0, o.jsx)("div", {
        style: {
          position: "fixed",
          top: 0,
          right: 0,
          width: `var(--jobright-helper-panel-reserved-width, ${eo}px)`,
          height: "100vh",
          background: "linear-gradient(180deg, #f7f8f9 0%, #f1f3f4 100%)",
          boxShadow: "inset 1px 0 0 rgba(0, 0, 0, 0.04)",
          zIndex: 1e3,
          pointerEvents: "none"
        }
      }), (0, o.jsx)(a.Flex, {
        ref: g,
        gap: 0,
        id: "jobright-helper-id",
        className: (0, s.default)("jobright-helper-content-container", {
          "jobright-helper-content-container-show-continue": Q
        }),
        vertical: !0,
        style: {
          display: "flex",
          visibility: V ? "visible" : "hidden",
          zIndex: G ? 900 : void 0,
          pointerEvents: G ? "none" : void 0
        },
        children: !(0, u.isNil)(t) && (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)(k.default, {
            currentTabJob: er,
            setOpenSetting: m
          }), l ? (0, o.jsx)(w.default, {
            closeSetting: () => m(!1)
          }) : (0, o.jsx)(x.default, {
            renderStep: t,
            domainSupport: e,
            currentTabJob: er,
            showContinue: Q,
            jobContextLoading: en,
            fallbackJobId: et
          })]
        })
      }), v && (0, o.jsx)(F.default, {
        currentTabJob: er
      }), A && (0, o.jsx)(b.default, {}), E && (0, o.jsx)(h.default, {})]
    }) : null
  };
r.default = e1

