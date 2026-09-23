// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/match.js).
 */
function o(e,t,r){if(r){let t=e.find(e=>e?.linkedin_company_id!=null&&String(e.linkedin_company_id)===String(r));if(t)return t}if(t)return e.find(e=>e?.companyName?.toLowerCase()===t.toLowerCase())}

export { o as findCompanyMatch }
