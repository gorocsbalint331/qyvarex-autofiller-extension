// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/DraggableIcon.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "@ant-design/cssinjs"
import * as a from "antd"
import * as l from "../assets/inline/images/close_mini.svg.js"
import * as u from "../assets/inline/images/logo_bird.svg.js"
import * as d from "../assets/inline/images/order_mini.svg.js"
import * as p from "react"
import * as m from "react-draggable"
import * as g from "../api/env-resolver.ts"
import * as b from "./HelperContainer.js"
import * as v from "../store/hide.ts"
import * as w from "../utils/hide-logic.ts"
import * as S from "../utils/trace.ts"
import * as E from "../ui/Image.ts"
import * as C from "../theme.ts"

const s = { default: l }
const c = { default: u }
const f = { default: d }
const h = { default: m }
const y = { default: b }
const x = { default: E }
let A = [{key: "next_visit",label: "Hide until next visit"}, {key: "this_domain",label: "Hide on this domain"}, {key: "all_websites",label: "Hide on all websites"}];function k({hostId: e,domainSupport: t,helperReady: r}) {let [n, l] = p.useState(false), [u, d] = p.useState(false), [m, b] = p.useState({top: 0,right: 0}), [E, k] = p.useState(false), T = p.useRef(null), F = v.useHideStore(e => e.openCard), I = v.useHideStore(e => e.setOpenCard), j = v.useHideStore(e => e.setDisplayIcon);p.useEffect(() => {r && k(true)}, [r]);let D = async e => {"this_domain" === e ? await w.hideOnDomain(window.location.hostname) :"all_websites" === e && await w.hideOnAllWebsites(), d(false), j(false), S.trackEvent("autofill_plugin_hide", {hide_type: e,url: window.location.href})}, P = () => {let e = T.current?.getBoundingClientRect();e && b({top: e.bottom + 4,right: window.innerWidth - e.right}), d(true)};return p.useEffect(() => {if (!u) return;let t = t => {let r = t.composedPath(),n = document.getElementById(e)?.shadowRoot?.querySelector(".hide-menu-popup"),o = T.current;n && !r.includes(n) && o && !r.includes(o) && d(false)};return document.addEventListener("mousedown", t, true), () => document.removeEventListener("mousedown", t, true)}, [u, e]), o.jsx(C.ThemeProvider, {children: o.jsxs(i.StyleProvider, {container: document.getElementById(e)?.shadowRoot,children: [o.jsx(h.default, {axis: "y",bounds: "body",handle: ".handle",onStart: () => {l(true)},onStop: e => {l(false)},onMouseDown: e => {e.stopPropagation()},children: o.jsx("div", {style: {position: "fixed",right: 0,top: F ? 0 : 120,zIndex: 1e3,fontFamily: "Inter",visibility: g.agentDomains.includes(window.location.hostname) ?"hidden" : "visible"},children: !F && o.jsxs("div", {className: "handle",style: {cursor: n ? "grabbing" : "grab",display: "flex",alignItems: "center",backgroundColor: "#fff",boxShadow: "0px 0px 40px 0px rgba(32, 38, 44, 0.25)"},onMouseDown: e => {l(true)},children: [o.jsxs("div", {className: "bird-button",onClick: e => {n || I(true), I(true)},children: [o.jsx(x.default, {height: 48,width: 48,draggable: false,src: c.default,alt: "logo-image",preview: false}), o.jsx("div", {ref: T,className: "close-button-wrapper","data-open": u ? "true" : "false",onMouseDown: e => e.stopPropagation(),onClick: e => {e.stopPropagation(), P()},children: o.jsx(x.default, {width: 12,height: 12,draggable: false,src: s.default,alt: "close",preview: false})})]}), o.jsx(a.Flex, {vertical: true,justify: "center",align: "center",gap: 8,style: {paddingInline: 4,background: "#CEFFEF",height: 64},children: o.jsx(x.default, {height: 16,width: 8,draggable: false,src: f.default,alt: "order",preview: false})})]})})}), u && !F && o.jsx("div", {className: "hide-menu-popup",style: {position: "fixed",top: m.top,right: m.right,zIndex: 2147483e3},children: A.map(e => o.jsx("div", {className: "hide-menu-item",onClick: () => D(e.key),children: e.label}, e.key))}), F && (r || E) && o.jsx(y.default, {domainSupport: t || g.agentDomains.includes(new URL(window.location.href).hostname)})]})})}

export default k
