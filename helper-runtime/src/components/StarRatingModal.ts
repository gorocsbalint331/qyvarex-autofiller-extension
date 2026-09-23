// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/StarRatingModal.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../assets/inline/images/logo_bird.svg.js"
import * as s from "react"
import * as u from "./Popups/CriticizeReviewsModal.ts"
import * as d from "./Popups/GoodReviewsModel.ts"
import * as p from "../store/feedback.ts"
import * as m from "../ui/Image.ts"
import * as g from "../utils/starRating.ts"
import * as b from "../utils/trace.ts"
import * as y from "./shared.ts"

const l = { default: a }
const c = { default: u }
const f = { default: d }
const h = { default: m }
function v() {let e = p.useFeedbackStore(e => e.showStarRatingModal),t = p.useFeedbackStore(e => e.setShowStarRatingModal),[r, n] = s.useState(false),[a, u] = s.useState(false),[d, m] = s.useState(false);s.useEffect(() => {e && (m(false), b.trackEvent("autofill_starrating_exposure", {current_url: window.location.href}))}, [e]);let v = async () => {t(false), d || await g.recordStarRatingNoClick()};return o.jsxs(o.Fragment, {children: [o.jsx(i.Modal, {open: e && !r && !a,title: null,footer: null,centered: true,closable: true,closeIcon: o.jsx(y.CloseIcon, {}),onCancel: v,mask: true,maskClosable: false,destroyOnClose: true,width: 480,styles: y.RATING_MODAL_STYLES,children: o.jsxs(i.Flex, {align: "center",justify: "center",vertical: true,gap: 12,style: {paddingTop: 64,paddingBottom: 32},children: [o.jsx(h.default, {src: l.default,width: 48,height: 48,preview: false,alt: "Jobright"}), o.jsx("span", {style: {...y.TITLE_STYLE,textTransform: "capitalize",maxWidth: 354},children: "How Was Your Jobright Autofill Experience?"}), o.jsx(i.Rate, {className: "star-rating-modal-rate",style: {fontSize: 32,color: "#FDA700"},character: o.jsx(w, {}),onChange: async e => {m(true), await g.recordStarRatingClicked(), b.trackEvent("autofill_starrating_click", {current_url: window.location.href,rating: e}), 5 === e ? n(true) : e > 0 && u(true)}})]})}), o.jsx(f.default, {open: r,onCancel: () => {n(false), t(false)},onConfirm: () => {n(false), t(false)}}), o.jsx(c.default, {open: a,onCancel: () => {u(false), t(false)},onConfirm: () => {u(false), t(false)}})]})}function w() {return o.jsx("svg", {width: "32",height: "32",viewBox: "0 0 24 24",fill: "none",xmlns: "http://www.w3.org/2000/svg",children: o.jsx("path", {d: "M10.9679 0.800065C11.303 -0.266687 12.697 -0.266689 13.032 0.800063L15.1453 7.52891C15.2956 8.00726 15.7106 8.32897 16.1774 8.32897H22.9079C23.9757 8.32897 24.4067 9.81848 23.5297 10.4777L18.1704 14.5059C17.771 14.8061 17.6037 15.3563 17.7602 15.8546L19.827 22.4353C20.1654 23.5129 19.0369 24.4332 18.1731 23.7839L12.6217 19.6113C12.2479 19.3303 11.7521 19.3303 11.3782 19.6113L5.8268 23.7839C4.96305 24.4332 3.83455 23.5129 4.17299 22.4353L6.23978 15.8546C6.39627 15.3563 6.2289 14.8061 5.82951 14.5059L0.470309 10.4777C-0.406745 9.81848 0.0242682 8.32897 1.09208 8.32897H7.82257C8.28938 8.32897 8.70438 8.00726 8.85461 7.52891L10.9679 0.800065Z",fill: "currentColor"})})}

export default v
