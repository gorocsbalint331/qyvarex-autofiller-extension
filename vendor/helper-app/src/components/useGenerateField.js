/**
 * Parcel module id: cGhAQ
 * Resolved path: src/components/useGenerateField.js
 * Dependencies:
 *   ./fieldFilter -> kklEO  =>  src/components/fieldFilter.js
 *   ./labelExtraction -> 5DftU  =>  src/components/labelExtraction.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~contents/crawler/utils/input -> iPIvT  =>  src/contents/crawler/utils/input.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  src/contents/methods/cover-letter.js
 *   ~contents/shared/constants -> ayCbq  =>  src/contents/shared/constants.js
 *   ~store/cover-letter-state -> 7Ks3y  =>  src/store/cover-letter-state.js
 *   ~store/resume -> iSBDf  =>  src/store/resume.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/job-id -> klnOn  =>  src/utils/job-id.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"useGenerateField",()=>h);var o=e("react"),i=e("@plasmohq/messaging"),a=e("~contents/shared/constants"),l=e("~contents/crawler/utils/input"),s=e("~contents/methods/cover-letter"),u=e("~store/cover-letter-state"),c=e("~store/resume"),d=e("~store/url"),f=e("~utils/job-id"),p=e("./fieldFilter"),m=e("./labelExtraction");function h(){let[e,t]=(0,o.useState)(()=>new Map),r=(0,o.useRef)(new Map),n=(e,r)=>{t(t=>{let n=new Map(t);return n.set(e,r),n})},h=(0,o.useRef)(e);h.current=e;let g=(0,o.useCallback)(async(e,t=[])=>{let o=h.current.get(e);if("loading"===o)return;let g=(0,m.extractVisibleLabel)(e),b=(0,s.getCurrentAutofillJobId)(),y=!!b&&(0,p.isCoverLetterTextarea)({label:g,name:e.name||"",id:e.id||""}),v=g||e.name||"";if(!y&&!v)return;let w=(0,m.extractDescription)(e),S=w?[`Question context: ${w}`,...t]:t;n(e,"loading");try{if(y){let t=(0,c.useResumeStore).getState(),r=(0,u.resolveEditWithAiCoverLetterSeedId)(t.editWithAiCoverLetterSeed,b),n=t.lastUsedResume,o={};n&&(n.startsWith(a.TAILOR_RESUME_ID_PREFIX)?o.tailorId=n.slice(a.TAILOR_RESUME_ID_PREFIX.length):o.resumeId=n);let d=S.join("\n").trim()||s.DEFAULT_AUTOFILL_COVER_LETTER_PROMPT,f=await (0,i.sendToBackground)({name:"generateAutofillCoverLetter",body:{jobId:b,userPrompt:d,...o,...r?{coverLetterId:r}:{},...e.value?{currentCoverLetter:e.value}:{}}});if(f?.error?.HTTP_STATUS)throw Error(String(f.error.HTTP_STATUS));let p=f?.data,m=(0,s.formatCoverLetterMarkdownAsText)(p?.markdown);m&&await (0,l.fillDefaultInputField)(e,m);let h=(0,u.buildEditWithAiCoverLetterSeed)(p);h&&(0,c.useResumeStore).getState().setEditWithAiCoverLetterSeed(h)}else{let t=(0,f.extractJobIdFromUrl)((0,d.useUrlStore).getState().currentTabUrl||window.location.href),n=await (0,i.sendToBackground)({name:"regenerateAnswer",body:{jobId:t??null,question:v,promptList:S,uniqueId:r.current.get(e)??null,fieldInput:e.value||null}});if(n?.data?.HTTP_STATUS)throw Error(n.data.HTTP_STATUS);let o=n?.data?.answer,a=n?.data?.uniqueId;o&&await (0,l.fillDefaultInputField)(e,o),a&&r.current.set(e,a)}n(e,"idle")}catch(t){console.warn("[TextareaGenerateButton] generate error",t),n(e,"error"),setTimeout(()=>n(e,"idle"),2e3)}},[]);return{statusMap:e,generate:g}}
