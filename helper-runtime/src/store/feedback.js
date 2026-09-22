/**
 * Parcel module id: l2vHp
 * Resolved path: src/store/feedback.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   zustand -> ffRFv  =>  zustand.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useFeedbackStore", () => i);
var o = e("zustand");
let i = (0, o.create)(e => ({
  openFeedbackPopup: !1,
  showStarRatingModal: !1,
  setOpenFeedbackPopup: t => {
    e({
      openFeedbackPopup: t
    })
  },
  setShowStarRatingModal: t => {
    e({
      showStarRatingModal: t
    })
  }
}))

