// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/useTextareaTracker.js).
 */
import * as o from "react"
import * as i from "../contents.ts"
import * as a from "../utils/trace.ts"
import * as l from "./constants.ts"
import * as s from "./fieldFilter.ts"

function u(){let[e,t]=o.useState(()=>new Map),r=o.useRef(new Set),n=o.useRef(new WeakSet),u=o.useRef(null),c=o.useRef(null),d=o.useCallback(()=>{let e=new Map;for(let t of r.current){if(!t.isConnected){r.current.delete(t),n.current.delete(t),u.current?.unobserve(t);continue}let o=t.getBoundingClientRect();o.width<=0||o.height<=0||e.set(t,{top:o.top,left:o.left,width:o.width,height:o.height})}t(t=>{if(t.size!==e.size)return e;for(let[r,n]of e){let o=t.get(r);if(!o||o.top!==n.top||o.left!==n.left||o.width!==n.width||o.height!==n.height)return e}return t})},[]),f=o.useCallback(()=>{null==c.current&&(c.current=requestAnimationFrame(()=>{c.current=null,d()}))},[d]),p=o.useCallback(e=>{if(r.current.has(e)||n.current.has(e))return;n.current.add(e);let t=s.readTextareaSignals(e),o=s.isAiRelevantTextarea(t);if(!o.relevant){a.trackEvent("autofill_ai_regenerate_entry_filtered",{label:t.label||null,autocomplete:t.autocomplete||null,name:t.name||null,reason:o.reason||null});return}r.current.add(e),u.current?.observe(e),d()},[d]);return o.useEffect(()=>{u.current=new ResizeObserver(f);let e=new WeakSet,t=e=>e.id===i.HOST_ID||e.classList.contains(l.JR_EDIT_AI_HOST_CLASS),o=e=>{let r=e.getRootNode();for(;r instanceof ShadowRoot;){if(t(r.host))return true;r=r.host.getRootNode()}return false},a=e=>{o(e)||e.disabled||e.readOnly||"true"===e.getAttribute("aria-hidden")||e.tabIndex<0||p(e)},s=t=>{e.has(t)||(e.add(t),h.observe(t,{childList:true,subtree:true}))},d=e=>{"TEXTAREA"===e.tagName&&a(e);let r=e.shadowRoot;r&&!t(e)&&(s(r),m(r))},m=e=>{e.nodeType===Node.ELEMENT_NODE&&d(e);let t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),r=t.nextNode();for(;r;)d(r),r=t.nextNode()},h=new MutationObserver(e=>{for(let e of r.current)e.isConnected||(r.current.delete(e),n.current.delete(e),u.current?.unobserve(e));for(let t of e)for(let e of t.addedNodes)e.nodeType===Node.ELEMENT_NODE&&m(e);f()});return h.observe(document.body,{childList:true,subtree:true}),m(document),window.addEventListener("resize",f,{passive:true}),()=>{h.disconnect(),u.current?.disconnect(),window.removeEventListener("resize",f),null!=c.current&&(cancelAnimationFrame(c.current),c.current=null)}},[]),e}

export { u as useTextareaTracker }
