// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/LinkedinBannerProvider.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "react"
import * as a from "react-dom"
import * as l from "./LinkedinBannerProvider/AutofillButton.ts"
import * as u from "./LinkedinBannerProvider/job-detail-mount.ts"
import * as c from "./LinkedinBannerProvider/LinkedinBanner.ts"
import * as f from "../core/xpath.ts"
import * as p from "../hooks/useLinkedinBannerClick.ts"
import * as m from "../hooks/useLinkedinBannerRefresh.ts"
import * as h from "../store/url.ts"
import * as g from "../utils/checkLinkedin.ts"
import * as b from "../utils/trace.ts"

const s = { default: l }
const d = { default: c }
let y = "//div[contains(@class, 'job-details-jobs-unified-top-card__container--two-pane')]",v ="//div[contains(@class, 'job-details-jobs-unified-top-card__container--two-pane')]//div[@class='display-flex']",w ='a[aria-label*="Apply"], button[aria-label*="Apply"], a.jobs-apply-button, button.jobs-apply-button, #jobs-apply-button-id';function S() {return document.querySelector(w)}function E() {return u.ensureLinkedInJobDetailBannerMount() ?? (0, u.ensureLinkedInPublicJobDetailBannerMount)(document)}function x() {let e = S();if (!e) return E();let t = e.closest("[data-display-contents]"),r = t?.parentElement;return r?.parentElement ? u.ensureLinkedInListBannerMount(document, r) : E()}function C() {let e = S();return e?.parentElement?.parentElement ? e.parentElement.parentElement : null}function LinkedinBannerProvider({userId: e,children: t}) {let r = h.useUrlStore(e => e.currentTabUrl),n = g.isLinkedinJobListPage(r),i = g.isLinkedinJobDetailPage(r);return n || i ? o.jsx(k, {userId: e,currentTabUrl: r,children: t}) : o.jsx(o.Fragment, {children: t})}function k({userId: e,currentTabUrl: t,children: r}) {let [n, l] = i.useState(null), [c, h] = i.useState(null), [w, S] = i.useState(false),E = g.isLinkedinJobDetailPage(t), A = () => E ? u.ensureLinkedInJobDetailBannerMount() ?? u.ensureLinkedInPublicJobDetailBannerMount() : f.getFirstOrderedNodeSafe(y) ??x(), k = () => f.getFirstOrderedNodeSafe(v) ?? C(), {handleBannerClick: T,handleIframeBannerClick: F} = p.useLinkedinBannerClick(e);return m.useLinkedinBannerRefresh(t, e), i.useEffect(() => {if (window.self !== window.top) {if (!g.isLinkedinPreloadIframe()) return;b.trackEvent("autofill_linkedin_banner_iframe", {iframeUrl: window.location.href,windowTopUrl: window.top.location.href})}b.trackEvent("autofill_linkedin_banner_target_page_visited", {currentUrl: window.location.href});let e = document.documentElement,t = e.classList;t.contains("theme--dark") ? S(true) : S(false);let r = null,n = null,o = () => {if (!u.shouldResolveLinkedInBannerMount(E, r, document)) return;let e = A(),t = `${E?"detail":"list"}:${!!e}:${window.location.pathname}`;if (t !== n && (n = t, console.debug("[jobright] LinkedIn banner mount resolution", {pageKind: E ? "detail" : "list",urlPath: window.location.pathname,mountFound: !!e})), e && document.contains(e)) {e !== r && (r = e, l(e));let t = E ? null : k();h(e => e === t ? e : t)}};o();let i = null,a = new MutationObserver(() => {null === i && (i = window.requestAnimationFrame(() => {i = null, o()}))});return a.observe(document.body, {childList: true,characterData: true,subtree: true}), () => {a.disconnect(), null !== i && window.cancelAnimationFrame(i)}}, [t]), o.jsxs(o.Fragment, {children: [n && a.createPortal(o.jsx(d.default, {currentTabUrl: t,isJobDetailPage: E,darkMode: w,handleBannerClick: T,handleIframeBannerClick: F}), n), c && a.createPortal(o.jsx(s.default, {}), c), r]})}

export default LinkedinBannerProvider
