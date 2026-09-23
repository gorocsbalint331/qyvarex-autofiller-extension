// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/HelperContainer/StepContent.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "../JobProfileStep.js"
import * as l from "../NotAvailableStatus.js"
import * as u from "../Onboarding.js"
import * as d from "../../core/enums.ts"

const a = { default: i }
const s = { default: l }
const c = { default: u }
function f({renderStep: e,domainSupport: t,currentTabJob: r,showContinue: n,jobContextLoading: i,fallbackJobId: l}) {return e === d.RENDER_STEP.INITIAL ? o.jsx(c.default, {}) : t && e !== d.RENDER_STEP.FAILED ?e === d.RENDER_STEP.FILLING ? o.jsx(a.default, {currentTabJob: r,showContinue: n,jobContextLoading: i,fallbackJobId: l}) : null : o.jsx(s.default, {})}

export default f
