/**
 * Parcel module id: e52YT
 * Resolved path: hooks/useUpdateAgentResume.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~store/resume -> iSBDf  =>  _tilde_store/resume.js
 */

e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
var n = e("react"),
  o = e("~store/resume");
let i = () => {
  let e = (0, o.useResumeStore)(e => e.setAgentData),
    t = (0, o.useResumeStore)(e => e.setAgentTailorResume);
  (0, n.useEffect)(() => {
    let r = r => {
      e(r.detail), r.detail?.tailorId && t(r.detail.tailorId, r.detail?.resumeName)
    };
    return document.addEventListener("UpdateAgentResume", r), () => {
      document.removeEventListener("UpdateAgentResume", r)
    }
  }, [e, t])
};
r.default = i

