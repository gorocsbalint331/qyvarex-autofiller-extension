// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/InsiderConnections.js).
 */
import * as o from "react/jsx-runtime"
import * as i from "antd"
import * as a from "../assets/inline/images/arr_go.svg.js"
import * as s from "react"
import * as u from "../api/env-resolver.ts"
import * as c from "../store/profile.ts"
import * as d from "../ui/Image.ts"
import * as p from "../utils/trace.ts"

const l = { default: a }
n.interopDefault(s);
const f = { default: d }
let m=4,h=5,g=e=>e.firstName?e.firstName.charAt(0).toUpperCase():e.fullName?e.fullName.charAt(0).toUpperCase():"?",b=({socialConnections:e=[],personalSocialConnections:t,jobId:r})=>{let n=s.useMemo(()=>{let r=t?.company||[],n=t?.school||[];return[...r,...n,...e]},[e,t]),a=n.length,d=c.useProfileStore(e=>e.userStage),b=s.useRef(null);if(s.useEffect(()=>{a>0&&r&&d?.userId&&b.current!==r&&(b.current=r,p.trackEvent("autofill_insider_connections_impression",{user_id:d.userId,job_id:r}))},[a,r,d?.userId]),0===a)return null;let y=a<=h,v=y?n:n.slice(0,m),w=a-m,S=()=>{r&&(p.trackEvent("autofill_insider_connections_click",{user_id:d?.userId,job_id:r}),window.open(u.HOST_DOMAIN+`/jobs/info/${r}#insider-connection`,"_blank"))};return o.jsxs(i.Flex,{className:"insider-connections",align:"center",justify:"space-between",onClick:S,children:[o.jsx(i.Typography.Text,{className:"insider-connections-title",children:"Your Insider Connections"}),o.jsxs(i.Flex,{align:"center",gap:0,className:"insider-connections-right",children:[o.jsxs(i.Flex,{className:"insider-connections-avatars",children:[v.map((e,t)=>o.jsx("div",{className:"insider-connections-avatar",children:o.jsx("span",{children:g(e)})},t)),!y&&w>0&&o.jsx("div",{className:"insider-connections-avatar insider-connections-avatar-more",children:o.jsxs("span",{children:[w,"+"]})})]}),o.jsx(f.default,{src:l.default,alt:"arrow",width:16,height:16,preview:false})]})]})};

export default b
