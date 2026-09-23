// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/PDFPreview.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "react"
import * as l from "@plasmohq/messaging"
import * as s from "../assets/inline/images/smile.svg.js"
import * as c from "../contents/shared/constants.js"
import * as d from "../ui/Image.ts"
import * as p from "../ResumeLoading.ts"

const u = { default: s }

const f = { default: d }
const m = { default: p }
let h="resume-preview-",g=4,b=({resumeId:e,resumeMap:t,template:r,useOriginalResume:n=false,isWord:s=false,style:d})=>{let[p,b]=a.useState(null),[y,v]=a.useState(true),[w,S]=a.useState(0);return(a.useEffect(()=>{let o=async()=>{if(!e){console.warn("[PDFPreview] Missing resumeId");return}if(!t[e]){console.warn("[PDFPreview] Resume not in map yet, waiting...",{resumeId:e,resumeMapKeys:t?Object.keys(t):[]});return}v(true);try{let o;if(e.startsWith(c.TAILOR_RESUME_ID_PREFIX)){let n={tailorResume:t[e],template:r},i=await l.sendToBackground({name:"getTailorResumeBlob",body:n});o=i.base64URL}else if(n){let t={resumeId:e},r=await l.sendToBackground({name:"getResumeBlob",body:t});o=r.base64URL}else{let n={diagnoseId:t[e].diagnoseId,template:r},i=await l.sendToBackground({name:"getBaseResumeBlob",body:n});o=i.base64URL}o&&o.startsWith("data:application/octet-stream")&&(o=o.replace("data:application/octet-stream","data:application/pdf")),o&&(o.includes("#")?o+="&toolbar=0&navpanes=0&scrollbar=0&view=FitH&bgcolor=FFFFFF&zoom=100&disablezoom=1":o+="#toolbar=0&navpanes=0&scrollbar=0&view=FitH&bgcolor=FFFFFF&zoom=100&disablezoom=1"),b(o),await new Promise(e=>setTimeout(e,1e3)),v(false)}catch(e){console.error("[PDFPreview] Failed to load PDF:",e),v(false)}};o()},[e,w,n]),a.useEffect(()=>{b(null),v(true)},[e,n]),a.useEffect(()=>{let t=()=>{"visible"===document.visibilityState&&e&&(b(null),v(true),S(e=>e+1))};return document.addEventListener("visibilitychange",t),()=>{document.removeEventListener("visibilitychange",t)}},[e]),p)?s&&n?o.jsx(i.Flex,{justify:"center",align:"center",style:d,children:o.jsxs(i.Flex,{vertical:true,gap:16,justify:"center",align:"center",style:{width:"480px",padding:48,borderRadius:20,background:"#fff",boxShadow:"0 0 0 0.5px rgba(0, 0, 0, 0.06) inset",textAlign:"center"},children:[o.jsx(f.default,{src:u.default,width:48,height:48,alt:"Preview Unavailable",preview:false}),o.jsxs(i.Flex,{vertical:true,children:[o.jsx(i.Typography.Title,{level:3,style:{fontSize:16,fontWeight:600,lineHeight:"24px"},children:"Preview Unavailable"}),o.jsx(i.Typography.Paragraph,{style:{fontSize:14,fontWeight:400,lineHeight:"20px"},children:"Word documents aren't supported for preview, but your resume is fully usable in our system."})]})]})}):o.jsxs("div",{className:h+"container",style:{...d,position:"relative",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsx("iframe",{src:p,className:h+"iframe",title:"Resume Preview",style:{width:`calc(100% + ${g}%)`,height:`calc(100% + ${g}%)`,border:"none",display:"block",position:"absolute",top:`-${g/2}%`,left:`-${g/2}%`,zIndex:1,touchAction:"none"}}),y&&o.jsx(i.Flex,{justify:"center",align:"center",style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#ffffff",zIndex:100,pointerEvents:"none"},children:o.jsx(m.default,{title:"Loading resume\u2026"})})]}):o.jsx(i.Flex,{justify:"center",align:"center",style:{width:"100%",height:"100%",...d},children:o.jsx(m.default,{title:"Loading resume\u2026"})})};

export default b
