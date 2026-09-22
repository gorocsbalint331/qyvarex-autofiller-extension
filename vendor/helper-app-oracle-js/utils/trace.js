/**
 * Parcel module id: 1ik0r
 * Resolved path: utils/trace.js (oracle restore)
 * Dependencies:
 *   ./autofill-answer-pair -> 5bGe0  =>  _tilde_utils/autofill-answer-pair.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "trackEvent", () => u);
var o = e("lodash-es"),
  i = e("@plasmohq/messaging"),
  a = e("./autofill-answer-pair");

function l(e) {
  return e instanceof Error && /Extension runtime is not available/i.test(e.message)
}

function s(e) {
  l(e) || console.error("trackEvent error", e)
}
let u = (e, t) => {
  let r, n;
  try {
    let n = JSON.stringify(t || {});
    r = JSON.parse(n), "autofill_answer_pair" === e && (r = (0, a
      .sanitizeAutofillAnswerPairPayload)(r || {}))
  } catch (e) {
    s(e)
  }
  try {
    n = (0, o.isEmpty)(r) ? {} : r, n = {
      platform: "pc",
      ...n
    }, (0, i.sendToBackground)({
      name: "postEventSubmit",
      body: {
        params: {
          channel: n?.scene ? n?.scene : "default",
          eventType: e,
          eventDetail: n
        }
      }
    }).catch(s)
  } catch (e) {
    s(e)
  }
}

