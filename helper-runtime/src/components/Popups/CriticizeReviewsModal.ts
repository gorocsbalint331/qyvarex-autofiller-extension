// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Popups/CriticizeReviewsModal.js).
 */
import * as n from "react/jsx-runtime"
import * as o from "antd"
import * as i from "react"
import * as a from "../StarRatingModal/shared.js"
import * as l from "../../store/feedback.ts"
import * as s from "../../utils/trace.ts"

let u = e => {let t = l.useFeedbackStore(e => e.setOpenFeedbackPopup);return i.useEffect(() => {e.open && s.trackEvent("autofill_starrating_popup_exposure", {current_url: window.location.href,type: "feedback"})}, [e.open]), n.jsxs(o.Modal, {open: e.open,title: null,footer: null,mask: true,closable: true,closeIcon: n.jsx(a.CloseIcon, {}),centered: true,onCancel: e.onCancel,destroyOnClose: true,width: 480,styles: a.RATING_MODAL_STYLES,children: [n.jsxs(o.Flex, {align: "center",justify: "center",vertical: true,gap: 12,style: {paddingTop: 64},children: [n.jsx("span", {style: a.TITLE_STYLE,children: "Thanks for your rating!"}), n.jsx("span", {style: a.BODY_TEXT_STYLE,children: "Could you tell us a little more? Your feedback helps us improve Autofill for you."})]}), n.jsxs(o.Flex, {align: "center",justify: "center",gap: 12,style: {marginTop: 24},children: [n.jsx(o.Button, {type: "default",style: a.DEFAULT_BUTTON_STYLE,onClick: e.onCancel,children: "Cancel"}), n.jsx(o.Button, {type: "primary",style: a.PRIMARY_BUTTON_STYLE,onClick: () => {t(true), s.trackEvent("autofill_starrating_popup_click", {current_url: window.location.href,type: "feedback"}), e.onCancel()},children: "Give Feedback"})]})]})};

export default u
