/**
 * Parcel module id: ehZj5
 * Resolved path: src/components/InsiderConnections.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/arr_go.svg -> erL9L  =>  src/assets/inline/images/arr_go.svg.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  src/api/env-resolver.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~ui/Image -> 4wCrP  =>  src/ui/Image.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("react/jsx-runtime"),i=e("antd"),a=e("data-base64:~assets/images/arr_go.svg"),l=n.interopDefault(a),s=e("react");n.interopDefault(s);var u=e("~api/env-resolver"),c=e("~store/profile"),d=e("~ui/Image"),f=n.interopDefault(d),p=e("~utils/trace");let m=4,h=5,g=e=>e.firstName?e.firstName.charAt(0).toUpperCase():e.fullName?e.fullName.charAt(0).toUpperCase():"?",b=({socialConnections:e=[],personalSocialConnections:t,jobId:r})=>{let n=(0,s.useMemo)(()=>{let r=t?.company||[],n=t?.school||[];return[...r,...n,...e]},[e,t]),a=n.length,d=(0,c.useProfileStore)(e=>e.userStage),b=(0,s.useRef)(null);if((0,s.useEffect)(()=>{a>0&&r&&d?.userId&&b.current!==r&&(b.current=r,(0,p.trackEvent)("autofill_insider_connections_impression",{user_id:d.userId,job_id:r}))},[a,r,d?.userId]),0===a)return null;let y=a<=h,v=y?n:n.slice(0,m),w=a-m,S=()=>{r&&((0,p.trackEvent)("autofill_insider_connections_click",{user_id:d?.userId,job_id:r}),window.open(u.HOST_DOMAIN+`/jobs/info/${r}#insider-connection`,"_blank"))};return(0,o.jsxs)(i.Flex,{className:"insider-connections",align:"center",justify:"space-between",onClick:S,children:[(0,o.jsx)(i.Typography.Text,{className:"insider-connections-title",children:"Your Insider Connections"}),(0,o.jsxs)(i.Flex,{align:"center",gap:0,className:"insider-connections-right",children:[(0,o.jsxs)(i.Flex,{className:"insider-connections-avatars",children:[v.map((e,t)=>(0,o.jsx)("div",{className:"insider-connections-avatar",children:(0,o.jsx)("span",{children:g(e)})},t)),!y&&w>0&&(0,o.jsx)("div",{className:"insider-connections-avatar insider-connections-avatar-more",children:(0,o.jsxs)("span",{children:[w,"+"]})})]}),(0,o.jsx)(f.default,{src:l.default,alt:"arrow",width:16,height:16,preview:!1})]})]})};r.default=b
