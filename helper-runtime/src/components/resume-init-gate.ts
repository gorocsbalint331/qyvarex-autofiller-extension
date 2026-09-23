// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/resume-init-gate.js).
 */
let o = "__resume-init-without-job-id__",i = e => {if (null == e) return null;let t = String(e).trim();return t || null},a = ({resumeTargetJob: e,fallbackJobId: t,jobContextLoading: r = false}) => r ? null : i(e?.jobResult?.jobId) || i(t) || o

export { a as resolveResumeInitializationJobId }
