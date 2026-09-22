/**
 * Parcel module id: egLL9
 * Resolved path: src/components/TraceProvider.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   crypto-js -> ewvlF  =>  crypto-js.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/checkLinkedin -> 5xJv6  =>  src/utils/checkLinkedin.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => p);
var o = e("react/jsx-runtime"),
  i = e("crypto-js"),
  a = n.interopDefault(i),
  l = e("lodash-es"),
  s = e("react"),
  u = e("~core/xpath"),
  c = e("~store/url"),
  d = e("~utils/checkLinkedin"),
  f = e("~utils/trace");

function p({
  children: e
}) {
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(m, {}), e]
  })
}

function m() {
  let e = (0, s.useRef)(new Set),
    t = (0, s.useRef)(null),
    r = (0, c.useUrlStore)(e => e.currentTabUrl);
  return (0, s.useEffect)(() => {
    if (window.self !== window.top || !(0, d.isLinkedinDomain)(r) || !(0, d
        .isLinkedinJobDetailPage)(r)) return;
    let e = async () => {
      let e = r.match(/\/jobs\/view\/(\d+)/);
      e && e[1] && !(0, l.isEqual)(e[1], t.current) && (t.current = e[1], (0, f.trackEvent)(
        "li_trace", await g({
          url: window.location.href,
          jobIds: Array.from([e[1]]),
          ivSeed: "ivSeed123"
        })))
    };
    e()
  }, [r]), (0, s.useEffect)(() => {
    if (window.self !== window.top || !(0, d.isLinkedinDomain)(r) || !(0, d
        .isLinkedinJobListPage)(r)) return;
    let t = (0, l.debounce)(async () => {
        let t = h();
        t.size > 0 && !(0, l.isEqual)(t, e.current) && (e.current = t, (0, f.trackEvent)(
          "li_trace", await g({
            url: window.location.href,
            jobIds: Array.from(t),
            ivSeed: "ivSeed123"
          })))
      }, 500),
      n = new MutationObserver(t);
    return n.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !0
    }), () => {
      n.disconnect()
    }
  }, [r]), (0, o.jsx)(o.Fragment, {})
}

function h() {
  let e = new Set,
    t = (0, u.getOrderedNodesSafe)("//li[@data-occludable-job-id]");
  if (0 !== t.length)
    for (let r of t) e.add(r.getAttribute("data-occludable-job-id"));
  return e
}
async function g({
  url: e,
  jobIds: t,
  ivSeed: r
}) {
  try {
    let n = await window.crypto.subtle.generateKey({
        name: "AES-CBC",
        length: 256
      }, !0, ["encrypt", "decrypt"]),
      o =
      "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAjnH9Zxlsa14cDWiab8PX\nxp96nUwbHizgCht2RVqti0hJ5PEd7kUpnsBFBmPpGmBcojXz+gpbR5W7JI7vA/D5\neahZVlhTBHblmSFyp48PKYuRyuKiVt9OotPOZRJQ3n6rH+xP88rWlj//QIz9vaGi\nbP8tiEI6MEPvEnIP+wH4g+AgjyEN56l++LR2qg8TQFcwtnTYg85q19iflYxrlYUF\nQocpSTaylBxfCrSeRlIGbPXZpNxmDEpLQ91RSIK2lJsEh4HP3tPGRD29/Lvl054T\nv7dEd72LZx7CBsv+/w/3DOfqZDQgWL95zMebJAJjFwJGD9CHhWs1ZmZC+xjetpY5\nvUSp5FmfMRdebswSWih336lkGKvhnS+lkh2AyyUyYWyjs4lsznwvnlowO9Vivx/a\npA3bLD9TlTlFIg/nBkf3M+ND7A313Wvc3jY6SvHcV6Kuu57YXYvZCPYj4Q/QFCoP\nb3ACW+/5jbU0f8TPBZgsRcET3XVG5Kq4DSRtffMhwCPvBjj++thieKfckOGPz3aL\ndt7K76gahxmxbani0aQdMqFBUfJ7tQDWjjj92l9hJ/HD1/7EgYLMd5IgovmA2uVY\n6O6jBFzoO8vLB5zg3lVVkK2tYFks2Bq+0XhxmJN5lq/KKW6KwazrRlAa+AqBZihA\npBX5msEhXmSqEoOa9O4xLl0CAwEAAQ==\n-----END PUBLIC KEY-----",
      i = await window.crypto.subtle.importKey("spki", y(o), {
        name: "RSA-OAEP",
        hash: "SHA-256"
      }, !0, ["encrypt"]),
      l = await window.crypto.subtle.exportKey("raw", n),
      s = await window.crypto.subtle.encrypt({
        name: "RSA-OAEP"
      }, i, l),
      u = (0, a.default).MD5(r),
      c = new Uint8Array(u.words.flatMap(e => [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 &
        e])),
      d = JSON.stringify(t),
      f = new TextEncoder().encode(d),
      p = await window.crypto.subtle.encrypt({
        name: "AES-CBC",
        iv: c
      }, n, f);
    return {
      url: e,
      data: b(p),
      key: b(s),
      iv: r
    }
  } catch (e) {
    throw console.error("Encryption failed:", e), e
  }
}

function b(e) {
  let t = "",
    r = new Uint8Array(e),
    n = r.byteLength;
  for (let e = 0; e < n; e++) t += String.fromCharCode(r[e]);
  return window.btoa(t)
}

function y(e) {
  let t = e.replace("-----BEGIN PUBLIC KEY-----", "").replace("-----END PUBLIC KEY-----", "")
    .replace(/\s/g, ""),
    r = window.atob(t),
    n = r.length,
    o = new Uint8Array(n);
  for (let e = 0; e < n; e++) o[e] = r.charCodeAt(e);
  return o.buffer
}

