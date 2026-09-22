/**
 * Parcel module id: 3WQu4
 * Resolved path: src/core/iframeEventHandle.js
 * Dependencies:
 *   ./dom -> hLMJX  =>  src/core/dom.js
 *   ./utils -> aTDh5  =>  src/core/utils.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents -> d4tj7  =>  src/contents.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/runtime-error -> cYBXq  =>  src/contents/methods/runtime-error.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/falcon-answer-tracking -> 2vI9E  =>  src/contents/sites/falcon-answer-tracking.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~enums -> drZvv  =>  src/enums.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~utils/autofill-install-attribution-client -> kEmo3  =>  src/utils/autofill-install-attribution-client.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "registerIframeEventHandle", () => b), n.export(r,
  "redirctAgentIframePages", () => y);
var o = e("~contents"),
  i = e("~contents/methods/cancellation"),
  a = e("~contents/methods/runtime-error"),
  l = e("~contents/methods/track"),
  s = e("~contents/sites/falcon-answer-tracking"),
  u = e("~core/enums"),
  c = e("~enums"),
  d = e("~enums/http"),
  f = e("~utils/autofill-install-attribution-client"),
  p = e("./dom"),
  m = e("./utils");
let h = 0,
  g = async e => {
    if (e.data.type === c.IFRAME_EVENTS.IFRAME_LOADED && (0, m.markIframeLoadedFromMessage)(e
        .source, e.data?.url), e.data.type === c.IFRAME_EVENTS.REQUEST_IFRAME_LOADED && window
      .top !== window.self && (0, m.checkSupportIframeSrc)(window.location.href)) {
      window.top.postMessage({
        type: c.IFRAME_EVENTS.IFRAME_LOADED,
        url: window.location.href
      }, {
        targetOrigin: "*"
      });
      return
    }
    let t = (0, o.getAutofillInstance)();
    if ((0, m.checkSupportIframeSrc)(e.data?.url ?? e.data.origin) && t) {
      if (e.data.type === c.IFRAME_EVENTS.CHECK_IFRAME_COVER_LETTER && t.checkCoverLetter(), e
        .data.type === c.IFRAME_EVENTS.EXECUTE_IFRAME_FUNCTION) {
        let r = ++h,
          n = "completed";
        console.info(`[IframeAutofillLifecycle] ${JSON.stringify({execution:r,phase:"start"})}`);
        try {
          (0, s.beginFalconResponseAnswerRequest)();
          let n = await t.fillForm(e.data.data.fromAgent);
          (0, f.reportAutofillFirstUseIfSuccessful)(n).catch(() => {
            console.warn("[AutofillInstallAttribution] first use upload failed", {
              reason: "event_upload_failed"
            })
          }), r === h && window.top.postMessage({
            type: u.MESSAGE_EVENTS.autoFillCompleteFromIframe,
            data: n
          }, {
            targetOrigin: "*"
          })
        } catch (o) {
          let e = o instanceof i.CancelledError,
            t = (0, a.isExtensionContextInvalidatedError)(o);
          n = e ? "cancelled" : t ? "extension-invalidated" : "failed", console.info(
            `[IframeAutofillLifecycle] ${JSON.stringify({execution:r,phase:"error",outcome:n})}`
            ), e || r !== h || (0, l.sendHttpStatusMessage)(t ? d.CUSTOM_ERROR_CODES
            .EXTENSION_CONTEXT_INVALIDATED : d.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
        } finally {
          let e = r !== h;
          console.info(
            `[IframeAutofillLifecycle] ${JSON.stringify({execution:r,phase:"end",outcome:n,superseded:e})}`
            ), e || "completed" === n || window.top.postMessage({
            type: u.MESSAGE_EVENTS.autoFillCompleteFromIframe,
            data: {}
          }, {
            targetOrigin: "*"
          })
        }
        return
      }
      if (e.data.type === c.IFRAME_EVENTS.UPDATE_IFRAME_DATA)
        for (let [r, n] of Object.entries(e.data.data)) t[r] = n;
      e.data.type === c.IFRAME_EVENTS.FOCUS_IFRAME_LABEL && (0, p.focusLabelElement)(e.data.data),
        e.data.type === c.IFRAME_EVENTS.CANCEL_AUTO_FILL && (0, o.cancelAutofillInstance)(t), e
        .data.type === c.IFRAME_EVENTS.SKIP_AUTO_FILL && "function" == typeof t.skip && t.skip(),
        e.data.type === c.IFRAME_EVENTS.SUBMIT_APPLICATION && t.submitApplication()
    }
  };

function b() {
  window.addEventListener("message", g)
}

function y() {
  if (window.top === window.self) return;
  let e = new URL(window.location.href);
  if (e.searchParams.get("ashby_jid")) {
    let e = document.getElementById("ashby_embed_iframe");
    e && e.src && e.src.includes("ashbyhq.com") && window.top.postMessage({
      type: u.MESSAGE_EVENTS.autoFillReloadIframe,
      src: e.src
    }, {
      targetOrigin: "*"
    })
  }
}

