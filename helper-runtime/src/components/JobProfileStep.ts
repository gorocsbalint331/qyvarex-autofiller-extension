// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/JobProfileStep.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "clsx"
import * as s from "../assets/inline/images/credits.svg.js"
import * as c from "lodash-es"
import * as d from "react"
import * as f from "@plasmohq/messaging"
import * as p from "../api/env-resolver.ts"
import * as m from "./ExternalJob/ExternalJobAnalyzing.ts"
import * as g from "./ExternalJob/ExternalJobEntry.ts"
import * as y from "./ExternalJob/ExternalJobFail.ts"
import * as w from "./ExternalJob/ExternalJobForm.ts"
import * as E from "./FillProgress.ts"
import * as C from "./JobCard.ts"
import * as k from "./JobProfileStep/myworkday-progress.ts"
import * as T from "./JobProfileStep/resolve-job-to-show.ts"
import * as F from "./LoadingButton.js"
import * as j from "./NextPageButton.js"
import * as P from "./Popups/AutofillErrorModal.js"
import * as L from "./Popups/DoubleConfirmPopup.js"
import * as O from "./Popups/OutofCreditModal.js"
import * as N from "./Popups/ResumeMissingKeyPopup.js"
import * as B from "./ResumeSwitcher.js"
import * as U from "./UpdateJobInfoLink.js"
import * as Y from "./VersionUpdate.js"
import * as V from "../constants/payment.ts"
import * as W from "../contents/crawler/target.js"
import * as G from "../contents/pre-autofill-flow/account-flow-state.js"
import * as K from "../contents/pre-autofill-flow/tracking.js"
import * as X from "../core/pagenation.ts"
import * as J from "../hooks/usePaginationObserver.ts"
import * as Q from "../hooks/usePreAutofillFlowRunner.ts"
import * as Z from "../hooks/useRegisterAgentCancel.ts"
import * as et from "../hooks/useRegisterAgentSkip.ts"
import * as en from "../hooks/useStartAutofill.ts"
import * as ei from "../hooks/useSubmitApplication.ts"
import * as el from "../hooks/useUpdateAgentResume.ts"
import * as eu from "../hooks/useUpdateCoverLetter.ts"
import * as ed from "../store/autofillResult.ts"
import * as ef from "../store/externalJob.ts"
import * as ep from "../store/feedback.ts"
import * as em from "../store/profile.ts"
import * as eh from "../store/resume.ts"
import * as eg from "../store/url.ts"
import * as eb from "../ui/Image.ts"
import * as ev from "../utils/checkLinkedin.ts"
import * as ew from "../utils/trace.ts"

const l = { default: a }
const u = { default: s }
const h = { default: m }
const b = { default: g }
const v = { default: y }
const S = { default: w }
const x = { default: E }
const A = { default: C }
const I = { default: F }
const D = { default: j }
const _ = { default: P }
const R = { default: L }
const M = { default: O }
const $ = { default: N }
const q = { default: B }
const H = { default: U }
const z = { default: Y }
const ee = { default: Z }
const er = { default: et }
const eo = { default: en }
const ea = { default: ei }
const es = { default: el }
const ec = { default: eu }
const ey = { default: eb }
let JobProfileStep = ({currentTabJob: e,showContinue: t,jobContextLoading: r = false,fallbackJobId: n = null}) => {let a = em.useProfileStore(e => e.userProfile),s = em.useProfileStore(e => e.userStage),f = ef.useExternalJobStore(e => e.jobInfo),m = ef.useExternalJobStore(e => e.useExternalJobDetailRequest),h = ef.useExternalJobStore(e => e.manualOverrideJobId);m();let g = ed.useAutofillResultStore(e => e.isFilling),y = ed.useAutofillResultStore(e => e.setIsFilling),v = ed.useAutofillResultStore(e => e.fillingMode),w = ed.useAutofillResultStore(e => e.setFillingMode),S = ed.useAutofillResultStore(e => e.setProgressTitle),[E, C] = d.useState(false),F = d.useRef(false),j = d.useRef(false),P = d.useRef(null),[L, O] = d.useState(null),[N, B] = d.useState(null),[U, Y] = d.useState(0),[Z, et] = d.useState(0);d.useEffect(() => {F.current && !g ? C(true) : g && C(false), F.current = g}, [g]), d.useEffect(() => {let e = () => {let e = ed.useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse?.[G.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY],t = e && "object" == typeof e ? e : null,r = "string" == typeof t?.messageType ? t.messageType : null;r && P.current !== r && (K.sendWorkdayAccountSubmitWarningExposure({targetName: W.getTargetName(),url: window.location.href,pending: {flowId: "workday_forgot_password_flow",intent: "forgot_password",sourceUrl: window.location.href,sourcePageKind: "forgot_password",submitStep: G.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickResetPassword},submitError: {message: "string" == typeof t.message ? t.message : "",rawMessage: "string" == typeof t.rawMessage ? t.rawMessage : "",messageType: r}}), P.current = r), j.current = true, C(true)};return document.addEventListener(G.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_EVENT, e), () => {document.removeEventListener(G.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_EVENT, e)}}, []), d.useEffect(() => {if (!L || !N) return;let e = () => Y(N.offsetTop);e();let t = new ResizeObserver(e);return Array.from(L.children).forEach(e => {e instanceof HTMLElement && t.observe(e)}), () => t.disconnect()}, [L, N]);let en = ed.useAutofillResultStore(e => e.setHasClickedAutoFill),ei = ed.useAutofillResultStore(e => !!e.autoFillResult),el = ed.useAutofillResultStore(e => e.setAutoFillResult),eu = eg.useUrlStore(e => e.currentTabUrl),eb = ep.useFeedbackStore(e => e.setShowStarRatingModal),ev = T.resolveJobToShow({currentTabJob: e,externalJobInfo: f,manualOverrideJobId: h}),{startAutofill: eS} = eo.default({currentTabJob: ev}),ex = d.useCallback(() => {j.current = false, P.current = null, et(e => e + 1)}, []),eC = W.getTargetName(),eA = eu || window.location.href,{match: ek,ctaText: eT,startMatchedFlow: eF} = Q.usePreAutofillFlowRunner({targetName: eC,url: eA,isFilling: g,startStandardAutofill: eS,onFlowStart: ex,onAccountTransitionStart: () => {if (j.current) return;let e = ed.useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse?.[G.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY];e || C(false)},onAccountTransitionError: () => {j.current = true, C(true)}}),[eI, ej] = d.useState(false),eD = true;ev?.jobResult?.jobId.startsWith("external") && (eD = false);let eP = em.useProfileStore(e => e.doubleConfirmPopupVisible),e_ = em.useProfileStore(e => e.setDoubleConfirmPopupVisible),eL = em.useProfileStore(e => e.autofillDoNotAskAgain),eR = em.useProfileStore(e => e.syncAutofillDoNotAskAgainWithStorage),eO = eh.useResumeStore(e => e.updateFillingResume);ee.default(), er.default(), es.default(), ec.default();let eM = em.useProfileStore(e => e.creditsLeft);ea.default();let eN = () => {eb(false), w("standard_autofill"), S(null), el(null), eS()};J.usePaginationObserver(eS), d.useEffect(() => {eR()}, [eL]), d.useEffect(() => {a && a?.step === 5 && eO()}, [a]);let e$ = em.useProfileStore(e => e.creditSwitchStatus),eB = em.useProfileStore(e => e.paymentDataLoaded),eq = em.useProfileStore(e => e.initPaymentData),[eU, eH] = d.useState(null),eY = d.useRef(null);d.useEffect(() => {eB || eq()}, [eB]), d.useEffect(() => {if (!ek) return;let e = K.shouldTrackWorkdayAccountCtaExposure({targetName: eC,match: ek,lastStatus: eY.current,pending: G.preAutofillAccountTransitionSession.peek()?.payload});if (!e.status) return;if (!e.shouldTrack) {G.preAutofillAccountTransitionSession.peek()?.payload && (eY.current = e.status);return}let t = K.sendWorkdayAccountCreationCtaExposure({targetName: eC,url: eA,match: ek});t && (eY.current = e.status)}, [eA, ek, eC]), d.useEffect(() => {if ("apple" === eC && eu) {if (null === eU) {eH(eu);return}eu !== eU && (y(false), el(null), e_(false), eH(eu))}}, [eC, eu, eU, y, el, e_]), d.useEffect(() => {if ("myworkday" !== eC) return;let e = () => {let e = X.getMyWorkdayStepState(),t = eu || window.location.href;if (!e && k.shouldClearMissingMyWorkdayStepProgress({fillingMode: v,hasAutoFillResult: ei,isFilling: g,url: t})) {y(false), el(null), S(null), C(false);return}if (!e) return;let r = "review" === e.title || e.title.includes("review");r && (y(false), el(null), S(null), C(false))};e();let t = new MutationObserver(e);t.observe(document.body, {attributes: true,childList: true,subtree: true});let r = window.setInterval(e, 800);return () => {t.disconnect(), window.clearInterval(r)}}, [eC, eu, g, v, ei, y, el, S, C]);let ez = !eM?.subscribed && eB && !!e$;d.useEffect(() => {ez && c.isNumber(eM?.credit?.autofill) && ew.trackEvent("autofill_extension_credits_show", {})}, [ez, eM?.credit?.autofill]);let eV = async () => {if (g) return;let e = K.getWorkdayAccountCtaStatus({targetName: eC,match: ek});e && (eY.current = e), en(true), eH(eA), ei && el(null), (0, K.sendWorkdayAccountCreationCtaClick)({targetName: eC,url: eA,match: ek});let t = await eF();t || (ex(), w("standard_autofill"), S(null), y(true), eS())}, eW = () => {if (g) return;let t = e?.jobResult?.jobId ?? null;ew.trackEvent("autofill_update_job_info_click", {uid: s?.userId,website_url: window.location.href});let r = ef.useExternalJobStore.getState();r.resetFormValues(), r.setJobId(null), r.setAndBroadcastAnalyzeStatus("idle"), r.setPendingOverrideJobId(t), ej(true)}, eG = !!ev && !eI;return a ? eI ? o.jsx(eE, {setOpenExternalJob: ej}) : o.jsxs(o.Fragment, {children: [o.jsxs(i.Flex, {className: "job-profile-container",vertical: true,gap: 0,children: [o.jsxs(i.Flex, {ref: O,vertical: true,gap: 0,className: l.default("job-profile-scrollable-content", {"job-profile-scrollable-content--is-filling": g || E}),style: U > 0 ? {"--completion-overlay-top": `${U}px`} : undefined,children: [o.jsx("div", {className: "job-profile-job-section",children: ev ? o.jsx(A.default, {data: ev,hideActions: true,hideApplicantsCount: !eD,style: {marginBottom: "0"}}) : o.jsx(b.default, {entryFunction: () => {ej(true)}})}), o.jsxs(i.Flex, {ref: B,vertical: true,gap: 12,className: "job-profile-content-section",children: [o.jsxs(i.Flex, {vertical: true,className: ez ?"autofill-button-group autofill-button-group--with-credit" :"autofill-button-group",children: [o.jsx(I.default, {type: "default",className: "auto-fill-button",loading: g,onClick: eV,children: g ? "Autofilling" : eT}), ez && c.isNumber(eM?.credit?.autofill) && o.jsxs(i.Flex, {justify: "center",align: "center",gap: 8,className: "autofill-credit-row",children: [o.jsxs(i.Flex, {gap: 2,align: "center",children: [o.jsx(ey.default, {src: u.default,alt: "credits",width: 12,height: 12,preview: false}), o.jsxs(i.Typography.Text, {className: "autofill-credit-text",children: [eM?.credit?.autofill," credits left"]})]}), o.jsx(i.Typography.Text, {className: "autofill-credit-text-right",onClick: () => {ew.trackEvent("autofill_extension_credits_click"),window.open(p.HOST_DOMAIN + V.MEMBERSHIP_RETARGET_PATH,"_blank")},children: "Get Unlimited"})]})]}), o.jsx(q.default, {currentTabJob: e,jobContextLoading: r,fallbackJobId: n,onRequestAddJob: () => ej(true)}), eG && o.jsx(H.default, {disabled: g,onClick: eW})]}), o.jsx(x.default, {connected: t,expanded: E,onToggleExpanded: () => C(e => !e)}, Z)]}), t && o.jsx("div", {className: "continue-button-shell",children: o.jsx("div", {className: "continue-button-dock",children: o.jsx(D.default, {isFilling: g})})}), o.jsx(z.default, {currentJobId: e?.jobResult?.jobId ?? n})]}), o.jsx(R.default, {open: eP,onCancel: () => e_(false),onConfirm: () => {eN()}}), o.jsx($.default, {}), o.jsx(M.default, {}), o.jsx(_.default, {onRetry: () => {w("standard_autofill"), S(null), eS()}})]}) : null},eE = ({setOpenExternalJob: e}) => {let [t, r] = d.useState("form"), n = ef.useExternalJobStore(e => e.jobInfo), a = ef.useExternalJobStore(e => e.analyzeStatus), l = ef.useExternalJobStore(e => e.setAndBroadcastAnalyzeStatus);d.useEffect(() => {"loading" === a ? r("analyzing") : "success" === a ? (ev.isLinkedinDomain(window.top.location.href) && f.sendToBackground({name: "saveExternalJobId",body: {linkedinJobId: ev.getCurrentJobId(),externalJobId: n?.jobResult?.jobId}}), r("analyze-success"), e(false)) : "error" === a && r("analyze-failed")}, [a]), d.useEffect(() => () => {l("idle"), ef.useExternalJobStore.getState().setPendingOverrideJobId(null)}, []);let s = ef.useExternalJobStore(e => e.useExternalJobDetailRequest);s();let u = () => {e(false), l("idle"), ef.useExternalJobStore.getState().setPendingOverrideJobId(null)},c = () => {r("form"), l("idle")},p = () => {switch (t) {case "form":return o.jsx(S.default, {jumpToInitPage: u});case "analyzing":return o.jsx(h.default, {backToForm: c});case "analyze-success":return o.jsx(i.Flex, {vertical: true,className: "not-available-status-container",children: o.jsx(i.Flex, {vertical: true,justify: "center",align: "center",gap: 12,className: "not-available-status-body",children: o.jsx(A.default, {data: n,hideActions: true,hideApplicantsCount: true})})});case "analyze-failed":return o.jsx(v.default, {backToForm: c,backToInit: u})}};return p()};

export default JobProfileStep
