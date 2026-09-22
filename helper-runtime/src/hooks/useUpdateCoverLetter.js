/**
 * Parcel module id: lTWHp
 * Resolved path: src/hooks/useUpdateCoverLetter.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~store/cover-letter-state -> 7Ks3y  =>  src/store/cover-letter-state.js
 *   ~store/resume -> iSBDf  =>  src/store/resume.js
 */

e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
var n = e("react"),
  o = e("~store/cover-letter-state"),
  i = e("~store/resume");
let a = () => {
  let e = (0, i.useResumeStore)(e => e.setAgentCoverLetter);
  (0, n.useEffect)(() => {
    let t = t => {
      let r = {
        coverLetterId: t.detail?.coverLetterId,
        coverLetterName: t.detail?.coverLetterName
      };
      (0, o.hasValidCoverLetter)(r) && e(r)
    };
    return document.addEventListener("UpdateAgentCoverLetter", t), () => {
      document.removeEventListener("UpdateAgentCoverLetter", t)
    }
  }, [e])
};
r.default = a

