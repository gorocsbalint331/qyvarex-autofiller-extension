/**
 * Parcel module id: 7sm2G
 * Resolved path: src/hooks/useSubscribeTabUrl.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => a);
var o = e("react"),
  i = e("~store/url");

function a() {
  let e = (0, i.useUrlStore)(e => e.initCurrentTabUrl),
    t = (0, i.useUrlStore)(e => e.updateCurrentTabUrl);
  (0, o.useEffect)(() => {
    e();
    let r = async e => {
      "urlUpdated" === e.message && t()
    };
    return chrome.runtime.onMessage.addListener(r), () => {
      chrome.runtime.onMessage.removeListener(r)
    }
  }, [])
}

