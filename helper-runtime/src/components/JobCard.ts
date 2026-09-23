// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/JobCard.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "ahooks"
import * as a from "antd"
import * as l from "lodash-es"
import * as s from "@plasmohq/messaging"
import * as u from "../api/env-resolver.ts"
import * as c from "../contents/shared/constants.js"
import * as d from "../ui/Image.ts"
import * as p from "./formatPublishTime.ts"
import * as m from "./InsiderConnections.ts"
import * as g from "./RoundedRingProgress.js"

const f = { default: d }
const h = { default: m }
const b = { default: g }
let y = ({data: e,onApply: t,hideActions: r,hideApplicantsCount: n,style: d}) => {let {run: m} = i.useRequest(() => s.sendToBackground({name: "postApplyJob",body: {jobDetail: e}}), {manual: true,onSuccess: () => {t()}}), g = () => {window.open(u.HOST_DOMAIN + `${c.DETAIL_PATHNAME}/${e?.jobResult?.jobId}`, "_blank")};return o.jsxs(a.Flex, {className: "job-card",vertical: true,style: d,children: [o.jsxs(a.Flex, {className: "job-card-first-row",gap: 8,justify: "space-between",children: [o.jsx(f.default, {className: "job-card-company-logo",preview: false,width: 40,height: 40,src: e?.jobResult?.jdLogo || u.HOST_DOMAIN +"/newimages/public/img_none.svg",fallback: u.HOST_DOMAIN + "/newimages/public/img_none.svg"}), o.jsxs(a.Flex, {vertical: true,justify: "center",style: {marginRight: "auto",flex: "0 1 auto"},children: [o.jsx(a.Typography.Text, {className: "job-card-company-name",ellipsis: true,children: e?.companyResult?.companyName || e?.jobResult?.userCompanyName}), o.jsx(a.Typography.Text, {ellipsis: true,className: "job-card-company-desc",children: e?.companyResult?.companyCategories?.split(",")[0]})]}), o.jsx(a.Flex, {gap: 4,align: "center",children: !l.isNil(e?.displayScore) && o.jsx(b.default, {progress: Math.round(e?.displayScore) / 100,width: 56,height: 32,strokeWidth: 2,gradient: ["#50FABE", "#A0FA96"],progressText: Math.round(e?.displayScore)})})]}), o.jsxs(a.Flex, {className: "job-card-second-row",vertical: true,gap: 8,children: [o.jsx(a.Flex, {vertical: true,children: o.jsx("a", {href: `${u.HOST_DOMAIN}${c.DETAIL_PATHNAME}/${e?.jobResult?.jobId}`,target: "_blank",rel: "noreferrer",children: o.jsx(a.Typography.Title, {className: "job-card-job-title",ellipsis: {rows: 3,expandable: false},children: e?.jobResult?.jobTitle})})}), o.jsxs(a.Flex, {className: "job-detail-applicant-row",gap: 4,children: [o.jsxs(a.Typography.Text, {children: [p.formatPublishTimeDesc(e?.jobResult?.publishTimeDesc, e?.jobResult?.repost), " "]}), !n && o.jsxs(a.Typography.Text, {className: "job-card-applicant-detail",children: [" \xb7 ", " ", e?.jobResult?.applicantsCount," applicants"]})]})]}), o.jsx(h.default, {socialConnections: e?.jobResult?.socialConnections,personalSocialConnections: e?.jobResult?.personalSocialConnections,jobId: e?.jobResult?.jobId}), !r && o.jsx(a.Button, {className: "go-to-details-button",onClick: g,children: "View details"})]})};

export default y
