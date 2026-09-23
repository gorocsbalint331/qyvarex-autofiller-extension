// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/useGenerateField.js).
 */
import * as o from "react"
import * as i from "@plasmohq/messaging"
import * as a from "../contents/shared/constants.js"
import * as l from "../contents/crawler/utils/input.js"
import * as s from "../contents/methods/cover-letter.js"
import * as u from "../store/cover-letter-state.ts"
import * as c from "../store/resume.ts"
import * as d from "../store/url.ts"
import * as f from "../utils/job-id.ts"
import * as p from "./fieldFilter.ts"
import * as m from "./labelExtraction.ts"

function h(){let[e,t]=o.useState(()=>new Map),r=o.useRef(new Map),n=(e,r)=>{t(t=>{let n=new Map(t);return n.set(e,r),n})},h=o.useRef(e);h.current=e;let g=o.useCallback(async(e,t=[])=>{let o=h.current.get(e);if("loading"===o)return;let g=m.extractVisibleLabel(e),b=s.getCurrentAutofillJobId(),y=!!b&&p.isCoverLetterTextarea({label:g,name:e.name||"",id:e.id||""}),v=g||e.name||"";if(!y&&!v)return;let w=m.extractDescription(e),S=w?[`Question context: ${w}`,...t]:t;n(e,"loading");try{if(y){let t=c.useResumeStore.getState(),r=u.resolveEditWithAiCoverLetterSeedId(t.editWithAiCoverLetterSeed,b),n=t.lastUsedResume,o={};n&&(n.startsWith(a.TAILOR_RESUME_ID_PREFIX)?o.tailorId=n.slice(a.TAILOR_RESUME_ID_PREFIX.length):o.resumeId=n);let d=S.join("\n").trim()||s.DEFAULT_AUTOFILL_COVER_LETTER_PROMPT,f=await i.sendToBackground({name:"generateAutofillCoverLetter",body:{jobId:b,userPrompt:d,...o,...r?{coverLetterId:r}:{},...e.value?{currentCoverLetter:e.value}:{}}});if(f?.error?.HTTP_STATUS)throw Error(String(f.error.HTTP_STATUS));let p=f?.data,m=s.formatCoverLetterMarkdownAsText(p?.markdown);m&&await l.fillDefaultInputField(e,m);let h=u.buildEditWithAiCoverLetterSeed(p);h&&c.useResumeStore.getState().setEditWithAiCoverLetterSeed(h)}else{let t=f.extractJobIdFromUrl(d.useUrlStore.getState().currentTabUrl||window.location.href),n=await i.sendToBackground({name:"regenerateAnswer",body:{jobId:t??null,question:v,promptList:S,uniqueId:r.current.get(e)??null,fieldInput:e.value||null}});if(n?.data?.HTTP_STATUS)throw Error(n.data.HTTP_STATUS);let o=n?.data?.answer,a=n?.data?.uniqueId;o&&await l.fillDefaultInputField(e,o),a&&r.current.set(e,a)}n(e,"idle")}catch(t){console.warn("[TextareaGenerateButton] generate error",t),n(e,"error"),setTimeout(()=>n(e,"idle"),2e3)}},[]);return{statusMap:e,generate:g}}

export { h as useGenerateField }
