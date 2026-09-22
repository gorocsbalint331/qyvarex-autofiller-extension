/**
 * Parcel module id: jt2yS
 * Resolved path: components/LinkedinBannerProvider.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   react-dom -> f20Gy  =>  react-dom-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/LinkedinBannerProvider/AutofillButton -> lff8Y  =>  _tilde_components/LinkedinBannerProvider/AutofillButton.js
 *   ~components/LinkedinBannerProvider/LinkedinBanner -> 7Bbgd  =>  _tilde_components/LinkedinBannerProvider/LinkedinBanner.js
 *   ~components/LinkedinBannerProvider/job-detail-mount -> 1dQk6  =>  _tilde_components/LinkedinBannerProvider/job-detail-mount.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~hooks/useLinkedinBannerClick -> kwAtx  =>  _tilde_hooks/useLinkedinBannerClick.js
 *   ~hooks/useLinkedinBannerRefresh -> 2Qwhr  =>  _tilde_hooks/useLinkedinBannerRefresh.js
 *   ~store/url -> b53L3  =>  _tilde_store/url.js
 *   ~utils/checkLinkedin -> 5xJv6  =>  _tilde_utils/checkLinkedin.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => A);
var o = e("react/jsx-runtime"),
  i = e("react"),
  a = e("react-dom"),
  l = e("~components/LinkedinBannerProvider/AutofillButton"),
  s = n.interopDefault(l),
  u = e("~components/LinkedinBannerProvider/job-detail-mount"),
  c = e("~components/LinkedinBannerProvider/LinkedinBanner"),
  d = n.interopDefault(c),
  f = e("~core/xpath"),
  p = e("~hooks/useLinkedinBannerClick"),
  m = e("~hooks/useLinkedinBannerRefresh"),
  h = e("~store/url"),
  g = e("~utils/checkLinkedin"),
  b = e("~utils/trace");
let y = "//div[contains(@class, 'job-details-jobs-unified-top-card__container--two-pane')]",
  v =
  "//div[contains(@class, 'job-details-jobs-unified-top-card__container--two-pane')]//div[@class='display-flex']",
  w =
  'a[aria-label*="Apply"], button[aria-label*="Apply"], a.jobs-apply-button, button.jobs-apply-button, #jobs-apply-button-id';

function S() {
  return document.querySelector(w)
}

function E() {
  return (0, u.ensureLinkedInJobDetailBannerMount)() ?? (0, u
    .ensureLinkedInPublicJobDetailBannerMount)(document)
}

function x() {
  let e = S();
  if (!e) return E();
  let t = e.closest("[data-display-contents]"),
    r = t?.parentElement;
  return r?.parentElement ? (0, u.ensureLinkedInListBannerMount)(document, r) : E()
}

function C() {
  let e = S();
  return e?.parentElement?.parentElement ? e.parentElement.parentElement : null
}

function A({
  userId: e,
  children: t
}) {
  let r = (0, h.useUrlStore)(e => e.currentTabUrl),
    n = (0, g.isLinkedinJobListPage)(r),
    i = (0, g.isLinkedinJobDetailPage)(r);
  return n || i ? (0, o.jsx)(k, {
    userId: e,
    currentTabUrl: r,
    children: t
  }) : (0, o.jsx)(o.Fragment, {
    children: t
  })
}

function k({
  userId: e,
  currentTabUrl: t,
  children: r
}) {
  let [n, l] = (0, i.useState)(null), [c, h] = (0, i.useState)(null), [w, S] = (0, i.useState)(!1),
  E = (0, g.isLinkedinJobDetailPage)(t), A = () => E ? (0, u.ensureLinkedInJobDetailBannerMount)
  () ?? (0, u.ensureLinkedInPublicJobDetailBannerMount)() : (0, f.getFirstOrderedNodeSafe)(y) ??
  x(), k = () => (0, f.getFirstOrderedNodeSafe)(v) ?? C(), {
      handleBannerClick: T,
      handleIframeBannerClick: F
    } = (0, p.useLinkedinBannerClick)(e);
  return (0, m.useLinkedinBannerRefresh)(t, e), (0, i.useEffect)(() => {
    if (window.self !== window.top) {
      if (!(0, g.isLinkedinPreloadIframe)()) return;
      (0, b.trackEvent)("autofill_linkedin_banner_iframe", {
        iframeUrl: window.location.href,
        windowTopUrl: window.top.location.href
      })
    }(0, b.trackEvent)("autofill_linkedin_banner_target_page_visited", {
      currentUrl: window.location.href
    });
    let e = document.documentElement,
      t = e.classList;
    t.contains("theme--dark") ? S(!0) : S(!1);
    let r = null,
      n = null,
      o = () => {
        if (!(0, u.shouldResolveLinkedInBannerMount)(E, r, document)) return;
        let e = A(),
          t = `${E?"detail":"list"}:${!!e}:${window.location.pathname}`;
        if (t !== n && (n = t, console.debug("[jobright] LinkedIn banner mount resolution", {
            pageKind: E ? "detail" : "list",
            urlPath: window.location.pathname,
            mountFound: !!e
          })), e && document.contains(e)) {
          e !== r && (r = e, l(e));
          let t = E ? null : k();
          h(e => e === t ? e : t)
        }
      };
    o();
    let i = null,
      a = new MutationObserver(() => {
        null === i && (i = window.requestAnimationFrame(() => {
          i = null, o()
        }))
      });
    return a.observe(document.body, {
      childList: !0,
      characterData: !0,
      subtree: !0
    }), () => {
      a.disconnect(), null !== i && window.cancelAnimationFrame(i)
    }
  }, [t]), (0, o.jsxs)(o.Fragment, {
    children: [n && (0, a.createPortal)((0, o.jsx)(d.default, {
      currentTabUrl: t,
      isJobDetailPage: E,
      darkMode: w,
      handleBannerClick: T,
      handleIframeBannerClick: F
    }), n), c && (0, a.createPortal)((0, o.jsx)(s.default, {}), c), r]
  })
}

