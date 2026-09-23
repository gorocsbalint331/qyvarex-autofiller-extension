// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Popups/GoodReviewsModel.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../../assets/inline/images/goodstar.svg.js"
import * as s from "react"
import * as u from "../StarRatingModal/shared.js"
import * as c from "../../ui/Image.ts"
import * as f from "../../utils/trace.ts"

const l = { default: a }
const d = { default: c }
let p = e => (s.useEffect(() => {e.open && f.trackEvent("autofill_starrating_popup_exposure", {current_url: window.location.href,type: "webstore"})}, [e.open]), o.jsxs(i.Modal, {open: e.open,title: null,footer: null,mask: true,closable: true,closeIcon: o.jsx(u.CloseIcon, {}),centered: true,onCancel: e.onCancel,destroyOnClose: true,width: 480,styles: u.RATING_MODAL_STYLES,children: [o.jsxs(i.Flex, {align: "center",justify: "center",vertical: true,gap: 12,style: {paddingTop: 40},children: [o.jsx(d.default, {src: l.default,height: 96,width: 96,preview: false}), o.jsx("span", {style: u.TITLE_STYLE,children: "Leave a Quick Review"}), o.jsx("span", {style: u.BODY_TEXT_STYLE,children: "Your feedback means a lot to us. Could you leave a quick review on the Chrome Web Store?"})]}), o.jsxs(i.Flex, {align: "center",justify: "center",gap: 12,style: {marginTop: 24},children: [o.jsx(i.Button, {type: "default",style: u.DEFAULT_BUTTON_STYLE,onClick: e.onCancel,children: "Maybe Later"}), o.jsx(i.Button, {type: "primary",style: u.PRIMARY_BUTTON_STYLE,onClick: () => {f.trackEvent("autofill_starrating_popup_click", {current_url: window.location.href,type: "webstore"}), window.open("https://chromewebstore.google.com/detail/jobright-autofill-\u2013-insta/odcnpipkhjegpefkfplmedhmkmmhmoko/reviews"), e.onConfirm()},children: "Yes, I'd love to"})]})]}));

export default p
