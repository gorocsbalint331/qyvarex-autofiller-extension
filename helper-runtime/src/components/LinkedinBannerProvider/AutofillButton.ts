// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/LinkedinBannerProvider/AutofillButton.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "../../assets/inline/images/aistar_l.svg.js"
import * as l from "../../core/utils.ts"
import * as s from "../../store/externalJob.ts"
import * as u from "../../utils/trace.ts"

const a = { default: i }
function c() {let e = s.useExternalJobStore(e => e.jobInfo);if (!e || !e?.jobResult?.jobId) return null;let t = e?.jobResult?.applyLink ?? e?.jobResult?.originalUrl,r = null;if (t) try {r = new URL(t)} catch (e) {console.error("Invalid URL:", t)}if (!r) return null;let n = l.checkSupportStatus(r);return n ? o.jsx("div", {style: {marginLeft: "8px",backgroundColor: "#D4FCBC",display: "flex",alignItems: "center",width: "197px",height: "40px",borderRadius: "24px",cursor: "pointer",userSelect: "none"},onClick: () => {r.searchParams.append("jr_id", e?.jobResult?.jobId), u.trackEvent("linkedin_autofill_apply_click", {jobId: e?.jobResult?.jobId,applyUrl: r.toString(),windowTopUrl: window.top.location.href}), window.open(r.toString(), "_blank")},children: o.jsxs("div", {style: {display: "flex",justifyContent: "center",alignItems: "center",paddingLeft: "15px",gap: 4},children: [o.jsx("img", {src: a.default,height: 20,width: 20}), o.jsx("div", {style: {fontFamily: "Inter",fontWeight: 600,fontStyle: "Semi Bold",fontSize: "16px",lineHeight: "20px",textAlign: "center",verticalAlign: "middle",color: "#000000"},children: "Apply with Autofill"})]})}) : null}

export default c
