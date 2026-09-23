// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Popups/FeedbackPopup.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "clsx"
import * as s from "../../assets/inline/images/feedback.svg.js"
import * as c from "../../assets/inline/images/logo.svg.js"
import * as f from "react"
import * as p from "@plasmohq/messaging"
import * as m from "../BasicButton.ts"
import * as g from "../CustomRate.ts"
import * as y from "../../constants.ts"
import * as v from "../../contents.ts"
import * as w from "../../store/feedback.ts"
import * as S from "../../ui/Image.ts"

const l = { default: a }
const u = { default: s }
const d = { default: c }
n.interopDefault(f);const h = { default: m }
const b = { default: g }
const E = { default: S }
let x = "feedback-popup",C = [{label: "Fields were not filled correctly",value: 1}, {label: "Some fields were not detected",value: 2}, {label: "The process took too long",value: 3}, {label: "Not enough sites were supported",value: 4}, {label: "The pop-up appeared when it shouldn't have",value: 6}, {label: "Edit with AI was not helpful",value: 7}].sort(() => Math.random() - .5).concat({label: "Other",value: 5}),A = ({jobId: e,configs: t = {type: "checkbox",options: C},variant: r = "full"}) => {let n = w.useFeedbackStore(e => e.openFeedbackPopup),a = w.useFeedbackStore(e => e.setOpenFeedbackPopup),[s] = i.Form.useForm(),[c, f] = i.message.useMessage({getContainer: () => document.getElementById(v.HOST_ID)?.shadowRoot}),m = () => {a(false), s.resetFields()},g = t => p.sendToBackground({name: "postPluginFeedback",body: {jobId: e,pageUrl: window.location.href,...t}}).then(() => {c.info({duration: 5,icon: o.jsx(o.Fragment, {}),content: "Feedback received, thank you!"}), a(false)}),S = t?.type === "radio" ? i.Radio : i.Checkbox,A = "modal-only" !== r,k = "button-only" !== r;return o.jsxs(o.Fragment, {children: [k && f, A && o.jsxs(i.Button, {id: "feedback-entry",onClick: () => a(true),children: [o.jsx(E.default, {src: u.default,alt: "logo-image",preview: false}), "Feedback"]}), k && o.jsx(i.Modal, {open: n,title: null,footer: null,zIndex: y.HELPER_MODAL_Z_INDEX,className: x,rootClassName: x + "-root",closeIcon: false,getContainer: () => document.getElementById(v.HOST_ID)?.shadowRoot,destroyOnClose: true,onCancel: m,keyboard: true,width: 480,children: o.jsxs(i.Flex, {vertical: true,gap: 16,children: [o.jsx(E.default, {src: d.default,height: 24,width: 96,alt: "logo-image",draggable: false,preview: false,style: {userSelect: "none",pointerEvents: "none"}}), o.jsxs(i.Form, {form: s,name: "feedback-form",layout: "vertical",onFinish: g,children: [o.jsx(i.Form.Item, {name: "score",label: "How would you rate your overall experience with our Autofill Plugin?",rules: [{required: true,message: "Please select at least one option to proceed"}],children: o.jsxs(i.Flex, {vertical: true,gap: 8,children: [o.jsx(b.default, {buttonClassName: "feedback-button",scores: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],onSelect: e => {s.setFieldValue("score", e)}}), o.jsxs(i.Flex, {className: "feedback-scale",children: [o.jsx("span", {children: "Not Satisfied"}), o.jsx("span", {children: "Very Satisfied"})]})]})}), o.jsx(i.Divider, {className: x + "-divider"}), o.jsx(i.Form.Item, {shouldUpdate: true,children: () => o.jsx(i.Form.Item, {name: "reasons",label: "What aspects of the autofill experience did not meet your expectations?",rules: [{required: true,message: "Please select at least one option to proceed"}],children: o.jsx(S.Group, {className: x + "-radio-group",children: t?.options?.map(e => o.jsx(S, {value: e.value,className: x + "-radio-item",children: e.label}, e.value))})})}), o.jsx(i.Divider, {className: x + "-divider"}), o.jsx(i.Form.Item, {name: "description",label: "Any specific feedback on how we can improve for you?",rules: [{required: true,message: "Please describe your experience or share your ideas."}],children: o.jsx(i.Input.TextArea, {placeholder: "The more specific you are, the better we can address your feedback.",className: l.default(x + "-textarea", x +"-input", x + "-radio-item-extra")})}), o.jsx(i.Form.Item, {className: x + "-form-action-button-group",children: o.jsxs(i.Flex, {gap: 12,justify: "center",children: [o.jsx(h.default, {className: l.default(x + "-button", x +"-button-cancel"),onClick: m,children: "Cancel"}), o.jsx(h.default, {className: l.default(x + "-button", x +"-button-submit"),onClick: () => s.submit(),children: "Submit"})]})})]})]})})]})};

export default A
