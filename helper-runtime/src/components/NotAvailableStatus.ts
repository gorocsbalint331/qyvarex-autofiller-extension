// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/NotAvailableStatus.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "ahooks"
import * as a from "antd"
import * as l from "react"
import * as s from "@plasmohq/messaging"
import * as u from "../api/env-resolver.ts"
import * as c from "./ExternalJob/ExternalJobAnalyzing.ts"
import * as f from "./ExternalJob/ExternalJobEntry.ts"
import * as m from "./ExternalJob/ExternalJobFail.ts"
import * as g from "./ExternalJob/ExternalJobForm.ts"
import * as y from "./JobCard.ts"
import * as w from "./ResumeSwitcher.js"
import * as E from "../contents/shared/constants.js"
import * as x from "../core/utils.ts"
import * as C from "../store/externalJob.ts"
import * as A from "../utils/checkLinkedin.ts"
import * as k from "../utils/job-id.ts"

const d = { default: c }
const p = { default: f }
const h = { default: m }
const b = { default: g }
const v = { default: y }
const S = { default: w }
let T = () => o.jsxs("svg", {width: "16",height: "16",viewBox: "0 0 16 16",fill: "none",xmlns: "http://www.w3.org/2000/svg",children: [o.jsx("circle", {cx: "7",cy: "7",r: "6.42",fill: "white",stroke: "black",strokeWidth: "1.16"}), o.jsx("path", {d: "M4 6.5C4 5.11929 5.11929 4 6.5 4",stroke: "black",strokeWidth: "1.16",strokeLinecap: "round"}), o.jsx("path", {d: "M12 12L12.7143 12.7143L14.5 14.5",stroke: "black",strokeWidth: "1.16",strokeLinecap: "round"})]}),F = () => {let [e, t] = l.useState(false), {run: r} = i.useRequest(() => s.sendToBackground({name: "postAutofillFeedback",body: {url: window.location.href}}), {manual: true,onSuccess: () => {t(true)}});return o.jsxs(a.Flex, {align: "center",justify: "space-between",className: "not-available-status-banner",children: [o.jsx(a.Typography.Text, {className: "not-available-status-banner-title",children: "Autofill Not Supported"}), e ? o.jsx(a.Typography.Text, {className: "not-available-status-banner-action",children: "Request Sent!"}) : o.jsx(a.Typography.Text, {className: "not-available-status-banner-action",onClick: () => r(),children: "Submit Request"})]})},I = () => {let e = C.useExternalJobStore(e => e.page),t = C.useExternalJobStore(e => e.setPage),r = C.useExternalJobStore(e => e.analyzeStatus),n = C.useExternalJobStore(e => e.setAndBroadcastAnalyzeStatus),i = C.useExternalJobStore(e => e.isAddingAnotherJob),s = C.useExternalJobStore(e => e.setIsAddingAnotherJob),c = C.useExternalJobStore(e => e.resetFormValues),f = C.useExternalJobStore(e => e.jobInfo),m = C.useExternalJobStore(e => e.jobId),g = C.useExternalJobStore(e => e.setJobId),y = C.useExternalJobStore(e => e.useExternalJobDetailRequest);y();let w = A.isLinkedinDomain(window.top.location?.href),I = !w && !x.checkSupportDomainLevel();l.useEffect(() => {if (m) return;let e = k.extractJobIdFromUrl(window.location.href);e && g(e)}, [m, g]), l.useEffect(() => {"loading" === r ? t("analyzing") : "success" === r ? t("analyze-success") : "error" === r &&t("analyze-failed")}, [r]), l.useEffect(() => () => {n("idle")}, []);let j = () => {t("init"), n("idle"), i && s(false)},D = () => {n("idle"), t("form")},P = () => {n("success"), t("analyze-success"), i && s(false)},_ = () => {switch (e) {case "init":return o.jsxs(a.Flex, {vertical: true,className: "not-available-status-container not-available-status-container-init",children: [o.jsxs(a.Flex, {vertical: true,gap: 12,className: "not-available-status-body not-available-status-init-body",children: [I && o.jsx(F, {}), o.jsx(p.default, {entryFunction: D}), o.jsx(S.default, {currentTabJob: f,onRequestAddJob: D})]}), o.jsxs("a", {className: "not-available-status-find-more-button",href: `${u.HOST_DOMAIN}${E.JOB_RECOMMEND_LIST_PATHNAME}`,target: "_blank",rel: "noreferrer",children: [o.jsx(T, {}), o.jsx("span", {children: "Find More Jobs on Jobright"})]})]});case "form":return o.jsx(b.default, {jumpToInitPage: j,jumpToSuccessPage: P});case "analyzing":return o.jsx(d.default, {backToForm: D});case "analyze-success":return o.jsx(a.Flex, {vertical: true,className: "not-available-status-container external-job-success-page",children: o.jsxs(a.Flex, {vertical: true,gap: 12,className: "not-available-status-body external-job-success-body",children: [I && o.jsx(F, {}), o.jsx(v.default, {data: f,hideActions: true,hideApplicantsCount: true}), o.jsx(S.default, {currentTabJob: f,onRequestAddJob: D}), o.jsx("button", {className: "external-job-another-job-link",onClick: () => {c(), f && s(true), D()},children: "Autofill for Another Job"})]})});case "analyze-failed":return o.jsx(h.default, {backToInit: j,backToForm: D})}};return _()};

export default I
