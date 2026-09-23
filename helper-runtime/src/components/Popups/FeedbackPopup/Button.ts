// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Popups/FeedbackPopup/Button.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../../../assets/inline/images/feedback.svg.js"
import * as s from "../../../store/feedback.ts"
import * as u from "../../../ui/Image.ts"

const l = { default: a }
const c = { default: u }
function d() {let e = s.useFeedbackStore(e => e.setOpenFeedbackPopup);return o.jsxs(i.Button, {id: "feedback-entry",onClick: () => e(true),children: [o.jsx(c.default, {src: l.default,alt: "logo-image",preview: false}), "Feedback"]})}

export default d
