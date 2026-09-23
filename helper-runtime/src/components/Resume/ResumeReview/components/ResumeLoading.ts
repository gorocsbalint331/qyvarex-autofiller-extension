// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Resume/ResumeReview/components/ResumeLoading.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "clsx"
import * as s from "../../../../assets/inline/images/info.svg.js"
import * as c from "../../../../ui/Image.ts"
import * as f from "./AiStarAnimation.ts"

const l = { default: a }
const u = { default: s }
const d = { default: c }
const p = { default: f }
let m = "resume-loading-",h = ({title: e,description: t,className: r,bordered: n = true}) => o.jsxs(i.Flex, {vertical: true,align: "center",justify: "center",gap: 32,className: l.default(m + "container", n && m + "container-bordered", r),style: {width: "480px",padding: "48px 60px",borderRadius: "20px",background: "#ffffff",...n && {boxShadow: "0 0 0 0.5px rgba(0, 0, 0, 0.06) inset"}},children: [o.jsx(p.default, {}), o.jsxs("div", {className: m + "linear-progress",style: {width: "360px",minWidth: "360px",flexShrink: 0,position: "relative",overflow: "hidden",display: "block",height: "2px",minHeight: "2px",borderRadius: "2px",background: "var(--base-color-grey, #f3f4f5)"},children: [o.jsx("span", {className: m + "linear-progress-first",style: {position: "absolute",left: 0,bottom: 0,top: 0,transition: "transform 0.2s linear",transformOrigin: "left",borderRadius: "2px",background: "#000",width: "auto",animation: "animation-first 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"}}), o.jsx("span", {className: m + "linear-progress-second",style: {borderRadius: "2px",position: "absolute",left: 0,bottom: 0,top: 0,transition: "transform 0.2s linear",transformOrigin: "left",background: "#000",width: "auto",animation: "animation-second 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"}})]}), e && o.jsx(i.Typography.Text, {className: m + "title",children: e}), t && o.jsxs(i.Flex, {gap: 8,className: m + "description",children: [o.jsx(d.default, {src: u.default,width: 16,height: 16,alt: "info-icon",preview: false}), o.jsx(i.Typography.Paragraph, {children: t})]})]});

export default h
