(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"c6WUt":[function(require,module,exports) {
var d = globalThis.process?.argv || [];
var y = ()=>globalThis.process?.env || {};
var H = new Set(d), _ = (e)=>H.has(e), G = d.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var Z = _("--dry-run"), p = ()=>_("--verbose") || y().VERBOSE === "true", q = p();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), S = 0, c = (...e)=>p() && u(`\u{1F7E1} ${S++}`, ...e);
var n = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\bootstrap.ts",
    "bundleId": "52a0773d4ec64c84",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function I(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function C() {
    return n.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let a of r.diagnostics.ansi){
            let w = a.codeframe || a.stack;
            m("[plasmo/parcel-runtime]: " + a.message + `
` + w + `

` + a.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var s = "__plasmo-loading__";
function $() {
    let e = globalThis.window?.trustedTypes;
    if (typeof e > "u") return;
    let t = document.querySelector('meta[name="trusted-types"]')?.content?.split(" "), o = t ? t[t?.length - 1].replace(/;/g, "") : void 0;
    return typeof e < "u" ? e.createPolicy(o || `trusted-html-${s}`, {
        createHTML: (a)=>a
    }) : void 0;
}
var T = $();
function g() {
    return document.getElementById(s);
}
function f() {
    return !g();
}
function F() {
    let e = document.createElement("div");
    e.id = s;
    let t = `
  <style>
    #${s} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${s}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${s} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${s} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${s} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${s} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function N(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = F();
        e = N(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var W = `${E}${module.id}__`, i, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    i?.disconnect(), i = l?.runtime.connect({
        name: W
    }), i.onDisconnect.addListener(()=>{
        h();
    }), i.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function j() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
j();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === n.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? i.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"dn0Rr":[function(require,module,exports) {
/**
 * Early content-script bootstrap (team fork).
 * Ported from Jobright contents.d42e7fcf.js \u2014 activation gate + helper inject.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
parcelHelpers.export(exports, "HOST_ID", ()=>HOST_ID);
parcelHelpers.export(exports, "jobId", ()=>jobId);
parcelHelpers.export(exports, "agentTailorId", ()=>agentTailorId);
parcelHelpers.export(exports, "agentResumeId", ()=>agentResumeId);
parcelHelpers.export(exports, "agentOriginalResume", ()=>agentOriginalResume);
parcelHelpers.export(exports, "setCurrentJobId", ()=>setCurrentJobId);
var _messaging = require("@plasmohq/messaging");
var _cloudflareChallenge = require("~core/cloudflare-challenge");
var _earlyUrlNormalization = require("~contents/shared/early-url-normalization");
var _runtimeActivation = require("~contents/shared/runtime-activation");
var _stickyJobId = require("~contents/shared/sticky-job-id");
const config = {
    matches: [
        "<all_urls>"
    ],
    all_frames: true,
    run_at: "document_start",
    exclude_matches: [
        "*://*.cloudflare.com/*",
        "https://li.protechts.net/*",
        "https://cs.ns1p.net/*",
        "https://merchantpool1.linkedin.com/*",
        "https://www.googletagmanager.com/*",
        "https://*.fls.doubleclick.net/activityi*",
        "https://lnkd.demdex.net/*",
        "https://www.google.com/recaptcha/enterprise/*",
        "https://crcldu.com/*",
        // Team Autofill Hub \u2014 do not inject helper into our own dashboard
        "https://jobright-team-site.vercel.app/*",
        "http://localhost:3210/*",
        "http://127.0.0.1:3210/*"
    ]
};
const HOST_ID = "jobright-fork-helper-plugin";
const BOOTSTRAP_FLAG = "__jobrightForkHelperBootstrapActive";
const JR_ID_PARAM = "jr_id";
const HELPER_BUNDLE = "assets/helper-app.js";
const initialParams = new URLSearchParams(window.location.search);
let jobId = initialParams.get(JR_ID_PARAM);
const agentTailorId = initialParams.get("a_t_id");
const agentResumeId = initialParams.get("a_r_id");
const agentOriginalResume = initialParams.get("useOriginalResume") === "true";
function setCurrentJobId(next) {
    jobId = next || null;
}
let helperStarted = false;
let stopObserver = null;
function waitForDocumentReady() {
    if (document.readyState !== "loading") return Promise.resolve();
    return new Promise((resolve)=>{
        document.addEventListener("DOMContentLoaded", ()=>resolve(), {
            once: true
        });
    });
}
function getCurrentRuntimeActivationReason() {
    const iframeUrls = Array.from(document.querySelectorAll("iframe[src]"), (el)=>el.src);
    const pageSourceUrls = Array.from(document.querySelectorAll("script[src], link[href]"), (el)=>el instanceof HTMLScriptElement ? el.src : el.href);
    return (0, _runtimeActivation.getRuntimeActivationReason)({
        href: window.location.href,
        isTopFrame: window.top === window.self,
        iframeUrls,
        pageSourceUrls
    });
}
async function injectAndBootstrapHelper(reason) {
    if (helperStarted) return;
    helperStarted = true;
    stopObserver?.();
    stopObserver = null;
    console.info("[jobright-fork] helper activation matched", {
        host: window.location.hostname,
        pathname: window.location.pathname,
        frame: window.top === window.self ? "top" : "child",
        reason
    });
    await waitForDocumentReady();
    if (await (0, _cloudflareChallenge.waitForCloudflareManagedChallengePage)()) {
        (0, _cloudflareChallenge.removeCloudflareChallengeInjectedHost)(HOST_ID);
        helperStarted = false;
        return;
    }
    const bundleUrl = chrome.runtime.getURL(HELPER_BUNDLE);
    const injected = await (0, _messaging.sendToBackground)({
        name: "injectHelperAppBundle",
        body: {
            bundleUrl
        }
    });
    if (!injected?.success) {
        console.warn("[jobright-fork] helper inject failed", injected);
        helperStarted = false;
        return;
    }
    const runtime = globalThis.bootstrapJobrightHelperRuntime;
    if (typeof runtime === "function") await runtime();
    window.dispatchEvent(new CustomEvent("jobright-fork:helper-injected", {
        detail: {
            reason
        }
    }));
}
function retainInitialJrIdIfPresent() {
    if (window.top !== window.self) return;
    try {
        const url = new URL(window.location.href);
        const id = url.searchParams.get(JR_ID_PARAM)?.trim();
        if (!id) return;
        const stop = (0, _stickyJobId.keepJobIdInUrl)(id, {
            originalHost: url.hostname,
            durationMs: 10000,
            intervalMs: 50,
            maxRestorations: 5
        });
        window.addEventListener("pagehide", stop, {
            once: true
        });
    } catch (error) {
        console.warn("[jobright-fork] jr_id retention failed", error);
    }
}
function watchForLaterActivation() {
    if (window.top !== window.self) return;
    stopObserver = (0, _runtimeActivation.observeRuntimeActivationSignals)((reason)=>{
        injectAndBootstrapHelper(reason).catch((error)=>{
            console.warn("[jobright-fork] delayed activation failed", error);
        });
    });
    chrome.runtime.onMessage.addListener((message)=>{
        if (message?.message !== "urlUpdated") return;
        const reason = getCurrentRuntimeActivationReason();
        if (reason) injectAndBootstrapHelper(reason);
    });
}
(async function bootstrap() {
    if (globalThis[BOOTSTRAP_FLAG]) return;
    globalThis[BOOTSTRAP_FLAG] = true;
    if (window.top === window.self) chrome.runtime.onMessage.addListener((message)=>{
        if (message?.message !== "iconClicked") return;
        injectAndBootstrapHelper("extension_icon");
    });
    if ((0, _earlyUrlNormalization.normalizeEarlyJobrightUrl)()) return;
    retainInitialJrIdIfPresent();
    await waitForDocumentReady();
    const reason = getCurrentRuntimeActivationReason();
    if (!reason) {
        watchForLaterActivation();
        return;
    }
    await injectAndBootstrapHelper(reason);
})().catch((error)=>{
    console.warn("[jobright-fork] bootstrap failed", error);
});

},{"@plasmohq/messaging":"k3omK","~core/cloudflare-challenge":"9Leq6","~contents/shared/early-url-normalization":"4Ai6Z","~contents/shared/runtime-activation":"gKD3E","~contents/shared/sticky-job-id":"6MM1J","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"k3omK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "relay", ()=>E);
parcelHelpers.export(exports, "relayMessage", ()=>M);
parcelHelpers.export(exports, "sendToActiveContentScript", ()=>h);
parcelHelpers.export(exports, "sendToBackground", ()=>p);
parcelHelpers.export(exports, "sendToBackgroundViaRelay", ()=>u);
parcelHelpers.export(exports, "sendToContentScript", ()=>x);
parcelHelpers.export(exports, "sendViaRelay", ()=>S);
var _nanoid = require("nanoid");
var l = globalThis.browser?.tabs || globalThis.chrome?.tabs, d = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime;
    if (!e) throw new Error("Extension runtime is not available");
    return e;
}, i = ()=>{
    if (!l) throw new Error("Extension tabs API is not available");
    return l;
}, m = async ()=>{
    let e = i(), [a] = await e.query({
        active: !0,
        currentWindow: !0
    });
    return a;
}, g = (e, a)=>!a.__internal && e.source === globalThis.window && e.data.name === a.name && (a.relayId === void 0 || e.data.relayId === a.relayId);
var c = (e, a, n = globalThis.window)=>{
    let r = async (s)=>{
        if (g(s, e) && !s.data.relayed) {
            let o = {
                name: e.name,
                relayId: e.relayId,
                body: s.data.body
            }, t = await a?.(o);
            n.postMessage({
                name: e.name,
                relayId: e.relayId,
                instanceId: s.data.instanceId,
                body: t,
                relayed: !0
            }, {
                targetOrigin: e.targetOrigin || "/"
            });
        }
    };
    return n.addEventListener("message", r), ()=>n.removeEventListener("message", r);
}, y = (e, a = globalThis.window)=>new Promise((n, r)=>{
        let s = (0, _nanoid.nanoid)(), o = new AbortController;
        a.addEventListener("message", (t)=>{
            g(t, e) && t.data.relayed && t.data.instanceId === s && (n(t.data.body), o.abort());
        }, {
            signal: o.signal
        }), a.postMessage({
            ...e,
            instanceId: s
        }, {
            targetOrigin: e.targetOrigin || "/"
        });
    });
var p = async (e)=>d().sendMessage(e.extensionId ?? null, e), x = async (e)=>{
    let a = typeof e.tabId == "number" ? e.tabId : (await m())?.id;
    if (!a) throw new Error("No active tab found to send message to.");
    return i().sendMessage(a, e);
}, h = x, M = (e)=>c(e, p), E = M, u = y, S = u;

},{"nanoid":"E2pqo","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"E2pqo":[function(require,module,exports) {
/* @ts-self-types="./index.d.ts" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>(0, _indexJs.urlAlphabet));
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "customRandom", ()=>customRandom);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
var _indexJs = require("./url-alphabet/index.js");
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log2(alphabet.length - 1)) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = "";
        while(true){
            let bytes = getRandom(step);
            let j = step | 0;
            while(j--){
                id += alphabet[bytes[j] & mask] || "";
                if (id.length >= size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size | 0, random);
let nanoid = (size = 21)=>{
    let id = "";
    let bytes = crypto.getRandomValues(new Uint8Array(size |= 0));
    while(size--)id += (0, _indexJs.urlAlphabet)[bytes[size] & 63];
    return id;
};

},{"./url-alphabet/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9Leq6":[function(require,module,exports) {
/**
 * Cloudflare managed-challenge detection (ported from ~core/cloudflare-challenge).
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCloudflareManagedChallengePage", ()=>isCloudflareManagedChallengePage);
parcelHelpers.export(exports, "collectCloudflareChallengePageProbe", ()=>collectCloudflareChallengePageProbe);
parcelHelpers.export(exports, "isCurrentDocumentCloudflareManagedChallengePage", ()=>isCurrentDocumentCloudflareManagedChallengePage);
parcelHelpers.export(exports, "waitForCloudflareManagedChallengePage", ()=>waitForCloudflareManagedChallengePage);
parcelHelpers.export(exports, "removeCloudflareChallengeInjectedHost", ()=>removeCloudflareChallengeInjectedHost);
const CF_RUNTIME_MARKER = /(?:\/cdn-cgi\/challenge-platform\b|window\._cf_chl_opt|__cf_chl_|cf_chl_opt|cf_chl_)/i;
const CF_TITLE_HINT = /(?:just a moment|security verification|one more step)/i;
const CF_BODY_HINTS = [
    /performing security verification/i,
    /checking (?:if|that) (?:the )?(?:site )?connection is secure/i,
    /this website uses a security service to protect against malicious bots/i,
    /this page is displayed while the website verifies you are not a bot/i
];
const CF_RAY_ID = /\b(?:cloudflare\s+)?ray id\s*:?\s*[a-f0-9]{12,}\b/i;
const CF_FOOTER = /performance and security by cloudflare/i;
function normalizeWhitespace(text) {
    return (text || "").replace(/\s+/g, " ").trim();
}
function bodyLooksLikeCloudflareChallenge(bodyText) {
    return CF_BODY_HINTS.some((re)=>re.test(bodyText)) || /verify you are human/i.test(bodyText) && /cloudflare/i.test(bodyText) && /(?:not a bot|malicious bots|security service)/i.test(bodyText);
}
function hasCloudflareFooter(bodyText) {
    return CF_RAY_ID.test(bodyText) && CF_FOOTER.test(bodyText);
}
function isSparseChallengeDocument({ bodyText, interactiveElementCount, allowFooterLinks = false }) {
    const length = bodyText.length;
    const interactive = interactiveElementCount ?? 0;
    return allowFooterLinks ? length <= 1500 && interactive <= 20 : length <= 2500 && interactive <= 4;
}
function isCloudflareManagedChallengePage(probe) {
    const title = normalizeWhitespace(probe.title);
    const bodyText = normalizeWhitespace(probe.bodyText);
    const html = probe.html || "";
    const hasManagedRuntime = !!probe.managedRuntimeFound || CF_RUNTIME_MARKER.test(html);
    const hasFooter = hasCloudflareFooter(bodyText);
    const hasChallengeSignal = hasManagedRuntime || !!probe.challengeMarkerFound || hasFooter;
    const titleLooksLikeChallenge = CF_TITLE_HINT.test(title);
    const copyLooksLikeChallenge = bodyLooksLikeCloudflareChallenge(bodyText) || titleLooksLikeChallenge || hasFooter;
    return hasChallengeSignal && copyLooksLikeChallenge && isSparseChallengeDocument({
        bodyText,
        interactiveElementCount: probe.interactiveElementCount,
        allowFooterLinks: hasFooter || hasManagedRuntime && titleLooksLikeChallenge
    });
}
function collectCloudflareChallengePageProbe(doc) {
    const title = doc.title;
    const challengeMarkerFound = !!doc.querySelector('#challenge-stage,#cf-challenge-running,#cf-please-wait,.cf-browser-verification,.cf-challenge,form[action*="/cdn-cgi/challenge-platform/"]');
    const win = doc.defaultView;
    const managedRuntimeFound = !!(doc.querySelector('script[src*="/cdn-cgi/challenge-platform/"]') || win?._cf_chl_opt);
    const interactiveElementCount = doc.querySelectorAll("button, input, select, textarea, a[href], [role='button']").length;
    const shouldReadBody = managedRuntimeFound || challengeMarkerFound || CF_TITLE_HINT.test(normalizeWhitespace(title)) || interactiveElementCount <= 4;
    return {
        title,
        bodyText: shouldReadBody ? (doc.body?.textContent || doc.body?.innerText || "").trim() : "",
        managedRuntimeFound,
        challengeMarkerFound,
        interactiveElementCount
    };
}
function isCurrentDocumentCloudflareManagedChallengePage() {
    return typeof document !== "undefined" && isCloudflareManagedChallengePage(collectCloudflareChallengePageProbe(document));
}
function isJobrightHostname(href) {
    if (!href) return false;
    try {
        const { hostname } = new URL(href);
        return hostname === "jobright.ai" || hostname.endsWith(".jobright.ai");
    } catch  {
        return false;
    }
}
function stillLooksLikePossibleChallenge(probe) {
    const title = normalizeWhitespace(probe.title);
    const bodyText = normalizeWhitespace(probe.bodyText);
    const html = probe.html || "";
    const hasManagedRuntime = !!probe.managedRuntimeFound || CF_RUNTIME_MARKER.test(html);
    const hasFooter = hasCloudflareFooter(bodyText);
    const hasChallengeSignal = hasManagedRuntime || !!probe.challengeMarkerFound || hasFooter;
    const titleLooksLikeChallenge = CF_TITLE_HINT.test(title);
    const copyLooksLikeChallenge = bodyLooksLikeCloudflareChallenge(bodyText) || titleLooksLikeChallenge || hasFooter;
    return !!hasChallengeSignal || !!titleLooksLikeChallenge || !!copyLooksLikeChallenge || isSparseChallengeDocument({
        bodyText,
        interactiveElementCount: probe.interactiveElementCount
    });
}
async function waitForCloudflareManagedChallengePage({ timeoutMs = 1500, intervalMs = 100, currentUrl = typeof window === "undefined" ? undefined : window.location.href, collectProbe } = {}) {
    if (isJobrightHostname(currentUrl)) return false;
    const probe = collectProbe || (()=>typeof document === "undefined" ? null : collectCloudflareChallengePageProbe(document));
    const deadline = Date.now() + timeoutMs;
    for(;;){
        const snapshot = probe();
        if (snapshot && isCloudflareManagedChallengePage(snapshot)) return true;
        if (snapshot && !stillLooksLikePossibleChallenge(snapshot) || Date.now() >= deadline) return false;
        await new Promise((resolve)=>setTimeout(resolve, Math.max(0, intervalMs)));
    }
}
function removeCloudflareChallengeInjectedHost(elementId) {
    if (typeof document === "undefined") return false;
    const el = document.getElementById(elementId);
    if (!el) return false;
    el.remove();
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"4Ai6Z":[function(require,module,exports) {
/** Early URL normalization for GoHire / Life at TikTok (ported). */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "JR_ID_PARAM", ()=>JR_ID_PARAM);
parcelHelpers.export(exports, "buildLifeAtTikTokApplyUrl", ()=>buildLifeAtTikTokApplyUrl);
parcelHelpers.export(exports, "shouldRetainLifeAtTikTokJobDetailJrId", ()=>shouldRetainLifeAtTikTokJobDetailJrId);
parcelHelpers.export(exports, "shouldKeepLifeAtTikTokApplyBridge", ()=>shouldKeepLifeAtTikTokApplyBridge);
parcelHelpers.export(exports, "shouldRecoverLifeAtTikTokJobDetailJrId", ()=>shouldRecoverLifeAtTikTokJobDetailJrId);
parcelHelpers.export(exports, "buildLifeAtTikTokRecoveredUrl", ()=>buildLifeAtTikTokRecoveredUrl);
parcelHelpers.export(exports, "buildNormalizedEarlyUrl", ()=>buildNormalizedEarlyUrl);
parcelHelpers.export(exports, "normalizeEarlyJobrightUrl", ()=>normalizeEarlyJobrightUrl);
const JR_ID_PARAM = "jr_id";
const GOHIRE_HOST = "jobs.gohire.io";
const GOHIRE_JOB_PATH = /^\/[^/]+\/.+-\d+\/?$/;
const LIFE_AT_TIKTOK_HOST = "lifeattiktok.com";
const LIFE_AT_TIKTOK_SEARCH_PATH = /^\/search\/\d+\/?$/;
function isLifeAtTikTokJobSearchUrl(url) {
    const hostname = url.hostname.toLowerCase();
    const isLifeAtTikTok = hostname === LIFE_AT_TIKTOK_HOST || hostname.endsWith(`.${LIFE_AT_TIKTOK_HOST}`);
    return isLifeAtTikTok && LIFE_AT_TIKTOK_SEARCH_PATH.test(url.pathname);
}
function buildLifeAtTikTokApplyUrl(currentHref, anchorHref, jobId) {
    const trimmedJobId = jobId.trim();
    if (!trimmedJobId) return null;
    let currentUrl;
    let applyUrl;
    try {
        currentUrl = new URL(currentHref);
        applyUrl = new URL(anchorHref);
    } catch  {
        return null;
    }
    const searchJobId = /^\/search\/(\d+)\/?$/.exec(currentUrl.pathname)?.[1];
    const applyJobId = /^\/resume\/(\d+)\/apply\/?$/.exec(applyUrl.pathname)?.[1];
    if (!isLifeAtTikTokJobSearchUrl(currentUrl) || applyUrl.hostname.toLowerCase() !== "careers.tiktok.com" || !searchJobId || applyJobId !== searchJobId || applyUrl.searchParams.has(JR_ID_PARAM)) return null;
    applyUrl.searchParams.set(JR_ID_PARAM, trimmedJobId);
    return applyUrl.toString();
}
function shouldRetainLifeAtTikTokJobDetailJrId(href) {
    try {
        const url = new URL(href);
        return isLifeAtTikTokJobSearchUrl(url) && !!url.searchParams.get(JR_ID_PARAM)?.trim();
    } catch  {
        return false;
    }
}
function shouldKeepLifeAtTikTokApplyBridge(originalHref, currentHref) {
    try {
        const originalUrl = new URL(originalHref);
        const currentUrl = new URL(currentHref);
        const jobId = originalUrl.searchParams.get(JR_ID_PARAM)?.trim();
        return !!jobId && originalUrl.hostname.toLowerCase() === currentUrl.hostname.toLowerCase() && originalUrl.pathname === currentUrl.pathname && currentUrl.searchParams.get(JR_ID_PARAM)?.trim() === jobId && isLifeAtTikTokJobSearchUrl(currentUrl);
    } catch  {
        return false;
    }
}
function shouldRecoverLifeAtTikTokJobDetailJrId(href) {
    try {
        const url = new URL(href);
        return isLifeAtTikTokJobSearchUrl(url) && !url.searchParams.has(JR_ID_PARAM);
    } catch  {
        return false;
    }
}
function buildLifeAtTikTokRecoveredUrl(href, jobId) {
    const trimmedJobId = jobId.trim();
    if (!trimmedJobId || !shouldRecoverLifeAtTikTokJobDetailJrId(href)) return null;
    const url = new URL(href);
    url.searchParams.set(JR_ID_PARAM, trimmedJobId);
    return url.toString();
}
function buildNormalizedEarlyUrl(href) {
    try {
        const url = new URL(href);
        if (url.hostname.toLowerCase() !== GOHIRE_HOST || !url.searchParams.has(JR_ID_PARAM) || !url.pathname.endsWith("/") || !GOHIRE_JOB_PATH.test(url.pathname)) return null;
        url.pathname = url.pathname.replace(/\/+$/, "");
        const normalized = url.toString();
        return normalized === href ? null : normalized;
    } catch  {
        return null;
    }
}
function normalizeEarlyJobrightUrl(win = window) {
    const normalized = buildNormalizedEarlyUrl(win.location.href);
    if (!normalized) return false;
    win.location.replace(normalized);
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"gKD3E":[function(require,module,exports) {
/**
 * Decide whether the helper runtime should activate on this frame.
 * Ported from ~contents/shared/runtime-activation + ~core/supported-sites usage.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSupportedRuntimeFrameUrl", ()=>isSupportedRuntimeFrameUrl);
parcelHelpers.export(exports, "getRuntimeActivationReason", ()=>getRuntimeActivationReason);
parcelHelpers.export(exports, "observeRuntimeActivationSignals", ()=>observeRuntimeActivationSignals);
var _envResolver = require("~api/env-resolver");
var _supportedSites = require("~core/supported-sites");
const POST_APPLY_PATH_REGEXES = [
    "confirmation",
    "applyConfirmation",
    "careers/chatbot",
    "success(?:ful)?",
    "thank[_-]?you",
    "thanks",
    "SuccessfulRegistration"
].map((segment)=>new RegExp(`/${segment}(?=/|$)`, "i"));
function hostnameEqualsOrIsSubdomain(hostname, domain) {
    return hostname === domain || hostname.endsWith(`.${domain}`);
}
function isPostApplyConfirmationPath(url) {
    return POST_APPLY_PATH_REGEXES.some((re)=>re.test(url.pathname));
}
function siteRuleMatchesHost(url, hostname, rule) {
    return rule.domains.some((domain)=>hostnameEqualsOrIsSubdomain(hostname, domain)) || rule.patterns.some((pattern)=>pattern.includes(url.href));
}
function siteRuleMatchesPath(url, rule) {
    const full = `${url.pathname}${url.search}${url.hash}`;
    return (rule.pathRegex?.test(url.pathname) ?? false) || (rule.urlRegex?.test(full) ?? false);
}
function isConstrainedSiteButWrongPath(url, hostname) {
    return (0, _supportedSites.CONSTRAINED_SITE_RULES).some((rule)=>siteRuleMatchesHost(url, hostname, rule) && !siteRuleMatchesPath(url, rule));
}
function isSupportedRuntimeFrameUrl(href) {
    if (!href) return false;
    try {
        if (isPostApplyConfirmationPath(new URL(href))) return false;
    } catch  {
    /* ignore */ }
    return (0, _supportedSites.IFRAME_CHECK_PATTERN).some((token)=>href.includes(token));
}
function pageSourcesIndicateForeignAts(pageHostname, pageSourceUrls) {
    for (const sourceUrl of pageSourceUrls){
        if ((0, _supportedSites.PAGE_SOURCE_ATS_LIST).some(([keyword, atsDomain])=>!hostnameEqualsOrIsSubdomain(pageHostname, atsDomain) && sourceUrl.includes(keyword))) return true;
    }
    return false;
}
function isSupportedTopLevelApplicationUrl(url) {
    if (isPostApplyConfirmationPath(url)) return false;
    const hostname = url.hostname;
    if (isConstrainedSiteButWrongPath(url, hostname)) return false;
    return (0, _supportedSites.SUPPORT_DOMAINS).some((domain)=>hostnameEqualsOrIsSubdomain(hostname, domain)) || (0, _supportedSites.SUPPORT_PATTERNS).some((pattern)=>pattern.includes(url.href)) || (0, _supportedSites.CONSTRAINED_SITE_RULES).some((rule)=>siteRuleMatchesHost(url, hostname, rule) && siteRuleMatchesPath(url, rule));
}
function hasSupportedEmbeddedFrame(iframeUrls) {
    return iframeUrls.some((iframeUrl)=>isSupportedRuntimeFrameUrl(iframeUrl));
}
function getRuntimeActivationReason({ href, isTopFrame, iframeUrls = [], pageSourceUrls = [] }) {
    let url;
    try {
        url = new URL(href);
    } catch  {
        return null;
    }
    if ((0, _envResolver.agentDomains).some((domain)=>hostnameEqualsOrIsSubdomain(url.hostname, domain))) return "jobright_domain";
    if (hostnameEqualsOrIsSubdomain(url.hostname, "linkedin.com")) return "linkedin_domain";
    if (!isTopFrame) return isSupportedRuntimeFrameUrl(url.href) ? "supported_frame_url" : null;
    if (isSupportedTopLevelApplicationUrl(url)) return "supported_top_url";
    if (!isConstrainedSiteButWrongPath(url, url.hostname) && (0, _supportedSites.QUERY_PARAM_LIST).some((param)=>url.searchParams.has(param))) return "supported_query_param";
    if (pageSourcesIndicateForeignAts(url.hostname, pageSourceUrls)) return "supported_page_source";
    if (hasSupportedEmbeddedFrame(iframeUrls)) return "supported_embedded_frame";
    return null;
}
function getActivationReasonFromElement(element) {
    if (element instanceof HTMLIFrameElement) return isSupportedRuntimeFrameUrl(element.src) ? "supported_embedded_frame" : null;
    if (element instanceof HTMLScriptElement || element instanceof HTMLLinkElement) {
        const sourceUrl = element instanceof HTMLScriptElement ? element.src : element.href;
        if (pageSourcesIndicateForeignAts(window.location.hostname, [
            sourceUrl
        ])) return "supported_page_source";
    }
    return null;
}
function getActivationReasonFromNode(node) {
    if (!(node instanceof Element)) return null;
    const direct = getActivationReasonFromElement(node);
    if (direct) return direct;
    for (const child of node.querySelectorAll("iframe[src], script[src], link[href]")){
        const reason = getActivationReasonFromElement(child);
        if (reason) return reason;
    }
    return null;
}
function observeRuntimeActivationSignals(onActivated) {
    if (typeof MutationObserver === "undefined" || typeof document === "undefined" || window.top !== window.self || !document.documentElement) return ()=>{};
    let observer = null;
    const activate = (reason)=>{
        observer?.disconnect();
        observer = null;
        onActivated(reason);
    };
    observer = new MutationObserver((mutations)=>{
        for (const mutation of mutations){
            if (mutation.type === "attributes") {
                const reason = getActivationReasonFromNode(mutation.target);
                if (reason) {
                    activate(reason);
                    return;
                }
            }
            for (const added of mutation.addedNodes){
                const reason = getActivationReasonFromNode(added);
                if (reason) {
                    activate(reason);
                    return;
                }
            }
        }
    });
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: [
            "src",
            "href"
        ],
        childList: true,
        subtree: true
    });
    return ()=>{
        observer?.disconnect();
        observer = null;
    };
}

},{"~api/env-resolver":"aa1kC","~core/supported-sites":"4oKit","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"aa1kC":[function(require,module,exports) {
/**
 * Environment / host config for the team fork.
 * Override via .env (PLASMO_PUBLIC_*).
 *
 * Autofill profile data comes from the Team Autofill Hub (team-site),
 * not Jobright cloud \u2014 see ~api/team-client and extension Options.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TEAM_SITE_URL", ()=>TEAM_SITE_URL);
/** Hub URL for the current build: localhost in plasmo dev, prod URL in builds. */ parcelHelpers.export(exports, "getHubUrl", ()=>getHubUrl);
parcelHelpers.export(exports, "API_DOMAIN", ()=>API_DOMAIN);
parcelHelpers.export(exports, "HOST_DOMAIN", ()=>HOST_DOMAIN);
parcelHelpers.export(exports, "COOKIE_DOMAIN", ()=>COOKIE_DOMAIN);
parcelHelpers.export(exports, "agentDomains", ()=>agentDomains);
const PROD_HUB = "https://jobright-team-site.vercel.app";
const DEV_HUB = "http://localhost:3210";
const TEAM_SITE_URL = "https://jobright-team-site.vercel.app" ?? PROD_HUB;
function getHubUrl() {
    return DEV_HUB;
}
const API_DOMAIN = undefined ?? TEAM_SITE_URL;
const HOST_DOMAIN = undefined ?? TEAM_SITE_URL;
const COOKIE_DOMAIN = undefined ?? "localhost";
const agentDomains = [
    "localhost",
    "127.0.0.1"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"4oKit":[function(require,module,exports) {
/**
 * Supported ATS site registry + derived lists.
 * Registry data lives in site-registry.raw.js (extracted from Jobright v1.23.0).
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SITE_REGISTRY", ()=>SITE_REGISTRY);
parcelHelpers.export(exports, "PINPOINTHQ_CAREERS_CDN", ()=>PINPOINTHQ_CAREERS_CDN);
parcelHelpers.export(exports, "EIGHTFOLD_CAREERHUB_JOB_PATH_REGEX_SOURCE", ()=>EIGHTFOLD_CAREERHUB_JOB_PATH_REGEX_SOURCE);
parcelHelpers.export(exports, "isEightfoldCareerHubJobPath", ()=>isEightfoldCareerHubJobPath);
parcelHelpers.export(exports, "SUPPORT_DOMAINS", ()=>SUPPORT_DOMAINS);
parcelHelpers.export(exports, "SUPPORT_PATTERNS", ()=>SUPPORT_PATTERNS);
parcelHelpers.export(exports, "SUPPORT_HOSTS", ()=>SUPPORT_HOSTS);
parcelHelpers.export(exports, "CONSTRAINED_SITE_RULES", ()=>CONSTRAINED_SITE_RULES);
parcelHelpers.export(exports, "IFRAME_CHECK_PATTERN", ()=>IFRAME_CHECK_PATTERN);
parcelHelpers.export(exports, "PAGE_SOURCE_ATS_LIST", ()=>PAGE_SOURCE_ATS_LIST);
parcelHelpers.export(exports, "IFRAME_ONLY_DOMAINS", ()=>IFRAME_ONLY_DOMAINS);
parcelHelpers.export(exports, "QUERY_PARAM_LIST", ()=>QUERY_PARAM_LIST);
var _matchPatterns = require("~core/match-patterns");
var _siteRegistryRaw = require("~core/site-registry.raw");
const SITE_REGISTRY = (0, _siteRegistryRaw.SITE_REGISTRY);
const PINPOINTHQ_CAREERS_CDN = "d2n5ied94mazop.cloudfront.net";
const EIGHTFOLD_CAREERHUB_JOB_PATH_REGEX_SOURCE = "^/careerhub/explore/jobs/(?!apply/?$)[^/?#]+/?$";
const eightfoldCareerHubJobPathRegex = new RegExp(EIGHTFOLD_CAREERHUB_JOB_PATH_REGEX_SOURCE);
function isEightfoldCareerHubJobPath(pathname) {
    return eightfoldCareerHubJobPathRegex.test(pathname);
}
function hostnameFromMatchPattern(pattern) {
    const match = /^[^:]+:\/\/([^/]+)/.exec(pattern);
    if (!match) return null;
    const host = match[1];
    if (!host || host === "*") return null;
    return host.startsWith("*.") ? host.slice(2) : host;
}
const unconstrainedSites = Object.values(SITE_REGISTRY).filter((site)=>!site.pathRegex && !site.urlRegex);
const SUPPORT_DOMAINS = unconstrainedSites.flatMap((site)=>site.domains ?? []);
const SUPPORT_PATTERNS = unconstrainedSites.flatMap((site)=>site.patterns ?? []).map((pattern)=>new (0, _matchPatterns.MatchPattern)(pattern));
const SUPPORT_HOSTS = Array.from(new Set(Object.values(SITE_REGISTRY).flatMap((site)=>[
        ...site.domains ?? [],
        ...(site.patterns ?? []).map(hostnameFromMatchPattern).filter((host)=>host !== null)
    ])));
const CONSTRAINED_SITE_RULES = Object.values(SITE_REGISTRY).filter((site)=>typeof site.pathRegex === "string" && site.pathRegex.length > 0 || typeof site.urlRegex === "string" && site.urlRegex.length > 0).map((site)=>({
        domains: site.domains ?? [],
        patterns: (site.patterns ?? []).map((pattern)=>new (0, _matchPatterns.MatchPattern)(pattern)),
        pathRegex: site.pathRegex ? new RegExp(site.pathRegex) : undefined,
        urlRegex: site.urlRegex ? new RegExp(site.urlRegex) : undefined
    }));
const IFRAME_CHECK_PATTERN = Object.values(SITE_REGISTRY).flatMap((site)=>site.iframeDomains ?? []);
const PAGE_SOURCE_ATS_LIST = Object.values(SITE_REGISTRY).filter((site)=>site.pageSourceKeyword && site.pageSourceDomain).map((site)=>[
        site.pageSourceKeyword,
        site.pageSourceDomain
    ]);
const IFRAME_ONLY_DOMAINS = Object.values(SITE_REGISTRY).filter((site)=>site.iframeOnly).flatMap((site)=>site.domains ?? []);
const QUERY_PARAM_LIST = Object.values(SITE_REGISTRY).flatMap((site)=>site.queryParams ?? []);

},{"~core/match-patterns":"3dGUR","~core/site-registry.raw":"azMiv","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"3dGUR":[function(require,module,exports) {
/**
 * Minimal Chrome match-pattern implementation for supported-sites.
 * (Ported subset of @webext-core/match-patterns.)
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InvalidMatchPattern", ()=>InvalidMatchPattern);
parcelHelpers.export(exports, "MatchPattern", ()=>MatchPattern);
class InvalidMatchPattern extends Error {
    constructor(pattern, reason){
        super(`Invalid match pattern "${pattern}": ${reason}`);
    }
}
class MatchPattern {
    static PROTOCOLS = [
        "http",
        "https",
        "file",
        "ftp",
        "urn"
    ];
    isAllUrls = false;
    protocolMatches = [];
    hostnameMatch = "*";
    pathnameMatch = "*";
    constructor(pattern){
        if (pattern === "<all_urls>") {
            this.isAllUrls = true;
            this.protocolMatches = [
                ...MatchPattern.PROTOCOLS
            ];
            this.hostnameMatch = "*";
            this.pathnameMatch = "*";
            return;
        }
        const parsed = /(.*):\/\/(.*?)(\/.*)/.exec(pattern);
        if (parsed == null) throw new InvalidMatchPattern(pattern, "Incorrect format");
        const [, protocol, hostname, pathname] = parsed;
        if (!MatchPattern.PROTOCOLS.includes(protocol) && protocol !== "*") throw new InvalidMatchPattern(pattern, `${protocol} not a valid protocol (${MatchPattern.PROTOCOLS.join(", ")})`);
        if (hostname.includes(":")) throw new InvalidMatchPattern(pattern, "Hostname cannot include a port");
        if (hostname.includes("*") && hostname.length > 1 && !hostname.startsWith("*.")) throw new InvalidMatchPattern(pattern, "If using a wildcard (*), it must go at the start of the hostname");
        this.protocolMatches = protocol === "*" ? [
            "http",
            "https"
        ] : [
            protocol
        ];
        this.hostnameMatch = hostname;
        this.pathnameMatch = pathname;
    }
    includes(input) {
        if (this.isAllUrls) return true;
        const url = typeof input === "string" ? new URL(input) : input instanceof Location ? new URL(input.href) : input;
        return this.protocolMatches.some((protocol)=>{
            if (protocol === "http") return this.isHttpMatch(url);
            if (protocol === "https") return this.isHttpsMatch(url);
            return false;
        });
    }
    isHttpMatch(url) {
        return url.protocol === "http:" && this.isHostPathMatch(url);
    }
    isHttpsMatch(url) {
        return url.protocol === "https:" && this.isHostPathMatch(url);
    }
    isHostPathMatch(url) {
        if (!this.hostnameMatch || !this.pathnameMatch) return false;
        const hostRegexes = [
            this.convertPatternToRegex(this.hostnameMatch),
            this.convertPatternToRegex(this.hostnameMatch.replace(/^\*\./, ""))
        ];
        const pathRegex = this.convertPatternToRegex(this.pathnameMatch);
        return hostRegexes.some((re)=>re.test(url.hostname)) && pathRegex.test(url.pathname);
    }
    convertPatternToRegex(pattern) {
        const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp(`^${escaped.replace(/\\\*/g, ".*")}$`);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"azMiv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SITE_REGISTRY", ()=>SITE_REGISTRY);
const SITE_REGISTRY = {
    greenhouse: {
        domains: [
            "greenhouse.io"
        ],
        iframeDomains: [
            "greenhouse.io"
        ],
        queryParams: [
            "gh_jid",
            "gh_src"
        ],
        pathRegex: "^/(?:[^/]+/jobs/\\d+|embed/job_app)"
    },
    xcompany: {
        patterns: [
            "*://x.company/*"
        ],
        pathRegex: "^/careers/[^/]+/?$"
    },
    walmart: {
        patterns: [
            "*://careers.walmart.com/*"
        ],
        pathRegex: "^/(us/en/(home|jobs?/[^/]+|apply(?:/.*)?|application(?:/.*)?)|content/careers/us/en/.*)$"
    },
    workday: {
        domains: [
            "myworkdayjobs.com",
            "myworkdayjobs-impl.com",
            "myworkdaysite.com",
            "myworkday.com"
        ]
    },
    kula: {
        domains: [
            "careers.kula.ai"
        ],
        pathRegex: "^/[^/]+/[^/]+"
    },
    icims: {
        domains: [
            "icims.com"
        ],
        iframeDomains: [
            "icims.com"
        ],
        iframeOnly: !0,
        pathRegex: "^/jobs/\\d+(?:/|$)"
    },
    dover: {
        domains: [
            "dover.com"
        ]
    },
    adobe: {
        domains: [
            "careers.adobe.com"
        ],
        pathRegex: "^/[^/]+/[^/]+/apply"
    },
    zohorecruit: {
        domains: [
            "zohorecruit.com",
            "zohorecruit.ca",
            "zohorecruit.eu"
        ],
        iframeDomains: [
            "zohorecruit.com",
            "zohorecruit.ca",
            "zohorecruit.eu"
        ],
        pathRegex: "^/jobs/Careers/.+"
    },
    gem: {
        domains: [
            "jobs.gem.com"
        ],
        pathRegex: "^/[\\w-]+/[\\w-]+/?$"
    },
    gusto: {
        domains: [
            "jobs.gusto.com"
        ],
        pathRegex: "^/postings/[^/]+(?:/applicants/new(?:/.*)?)?/?$"
    },
    hiringthing: {
        domains: [
            "hiringthing.com",
            "oasisrecruit.com",
            "elevate-ats.com",
            "prismhr-hire.com",
            "gnahiring.com",
            "rippling-ats.com"
        ],
        pathRegex: "^/job/\\d+/"
    },
    hubspot: {
        patterns: [
            "*://www.hubspot.com/careers/jobs/*"
        ]
    },
    paycomonline: {
        domains: [
            "paycomonline.com",
            "paycomonline.net"
        ],
        urlRegex: "^/v4/ats/web\\.php/portal/[^/]+/(?:applications(?:[/?#].*)?|jobs/[^/?#]+(?:[?#].*)?)"
    },
    teamtailor: {
        domains: [
            "teamtailor.com",
            "careers.blueorange.digital",
            "careers.totalperform.com"
        ],
        pageSourceKeyword: "teamtailor-cdn.com",
        pageSourceDomain: "teamtailor.com",
        pathRegex: "^/jobs/.+"
    },
    catsone: {
        domains: [
            "catsone.com"
        ],
        pathRegex: "^/careers/[^/]+/jobs/[^/]+(?:/apply)?/?$"
    },
    metacareers: {
        domains: [
            "metacareers.com"
        ],
        pathRegex: "^/profile/(create_application|job_details)/[^/]+"
    },
    ycombinator: {
        domains: [
            "www.ycombinator.com"
        ]
    },
    ripplehire: {
        domains: [
            "ripplehire.com"
        ]
    },
    personio: {
        domains: [
            "personio.de",
            "personio.com"
        ],
        pathRegex: "^/job/[^/?#]+(?:/apply)?/?$"
    },
    careerspage: {
        domains: [
            "careers-page.com"
        ]
    },
    careerplug: {
        domains: [
            "careerplug.com",
            "sfagentjobs.com",
            "sfagentcareers.com",
            "apscareerportal.com"
        ],
        pathRegex: "^/jobs/\\d+/apps/new"
    },
    careerswithwaymo: {
        patterns: [
            "*://careers.withwaymo.com/jobs/*"
        ],
        pathRegex: "^/jobs/(?!search(?:/|$))[^/]+"
    },
    successfactors: {
        domains: [
            "successfactors.eu",
            "successfactors.com",
            "sapsf.com"
        ]
    },
    clearcompany: {
        domains: [
            "clearcompany.com"
        ],
        patterns: [
            "*://*.hrmdirect.com/employment/job-opening.php*"
        ]
    },
    ashby: {
        patterns: [
            "*://*.ashbyhq.com/*/*"
        ],
        iframeDomains: [
            "jobs.ashbyhq.com",
            "ashby_jid"
        ],
        queryParams: [
            "ashby_jid"
        ],
        pathRegex: "^/[^/]+/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
    },
    isolved: {
        domains: [
            "isolvedhire.com"
        ],
        pathRegex: "^/(?:apply/|jobs/|iframe/mobile/|account/)"
    },
    jobdiva: {
        patterns: [
            "*://*.jobdiva.com/portal/*"
        ]
    },
    intuit: {
        domains: [
            "intuit-quiz.app.intuit.com"
        ],
        patterns: [
            "*://jobs.intuit.com/job/*",
            "*://intuit.avature.net/*/externalCareers/JobApplication*"
        ],
        iframeDomains: [
            "intuit-quiz.app.intuit.com"
        ]
    },
    jacobs: {
        patterns: [
            "*://careers.jacobs.com/en_US/careers/*"
        ],
        pathRegex: "^/en_US/careers/(JobDetail|Register|ApplicationForm|ApplicationReview)(?:/|$)"
    },
    smartrecruiters: {
        domains: [
            "smartr.me"
        ],
        patterns: [
            "*://jobs.smartrecruiters.com/oneclick-ui/company/*",
            "*://jobs.smartrecruiters.com/*/*"
        ]
    },
    phenom: {
        pageSourceKeyword: "APPLY_form_renderer.js",
        pageSourceDomain: "phenompeople.com",
        patterns: [
            "*://jobs.bswhealth.com/*/apply*",
            "*://careers.uvahealth.org/*/apply*",
            "*://careers.dukehealth.org/*/apply*",
            "*://www.jobs.abbott/*/apply*",
            "*://careers.aspendental.com/*/apply*",
            "*://careers.fivebelow.com/*/apply*",
            "*://careers.fourseasons.com/*/apply*",
            "*://careers.kbr.com/*/apply*",
            "*://jobs.kuehne-nagel.com/*/apply*",
            "*://careers.mastercard.com/*/apply*",
            "*://careers.mcafee.com/*/apply*",
            "*://jobs-cee.pwc.com/*/apply*",
            "*://careers.roche.com/*/apply*",
            "*://www.vcacareers.com/*/apply*",
            "*://careers.wasteconnections.com/*/apply*"
        ]
    },
    cisco: {
        patterns: [
            "*://careers.cisco.com/*/apply*"
        ]
    },
    tesla: {
        patterns: [
            "*://*.jobs.tesla.com/*",
            "*://*.tesla.com/careers/*"
        ],
        pathRegex: "/apply"
    },
    amazon: {
        patterns: [
            "*://*.amazon.jobs/*"
        ],
        pathRegex: "/jobs/[\\w-]+/apply"
    },
    amazonuniversity: {
        patterns: [
            "*://*.amazonuniversity.jobs/profile*"
        ]
    },
    uber: {
        domains: [
            "uber.com"
        ],
        pathRegex: "^/(?:(?:(?:[^/]+/){1,2})?careers/(?:apply(?:/|$)|list/[^/?#]+)|(?:[^/]+/)?jobs/[^/?#]+/?$)"
    },
    tiktok: {
        patterns: [
            "*://*.lifeattiktok.com/resume*",
            "*://*.tiktokusds.com/*/resume*",
            "*://*.tiktokusds.com/*/position/*/detail*"
        ]
    },
    bytedance: {
        patterns: [
            "*://*.jobs.bytedance.com/en/resume*",
            "*://jobs.bytedance.com/*/*/*/detail*",
            "*://jobs.bytedance.com/*/*/*/apply*",
            "*://jobs.bytedance.com/*/*/applied*",
            "*://joinbytedance.com/search/*"
        ]
    },
    google: {
        patterns: [
            "*://google.com/about/careers/*",
            "*://*.google.com/about/careers/*"
        ],
        pathRegex: "^/about/careers/applications(?:/(?:u/\\d+/)?apply(?:/|$)|/jobs/results/[^/?#]+)",
        urlRegex: "^/about/careers/applications/jobs/results(?:\\?[^#]*)?#.*[?&#]jid=[^&#]+"
    },
    lever: {
        patterns: [
            "*://jobs.lever.co/*/*",
            "*://jobs.eu.lever.co/*/*"
        ],
        iframeDomains: [
            "lever.co"
        ],
        queryParams: [
            "LeverAppId"
        ],
        pathRegex: "^/[^/]+/[^/]+(?:/apply)?/?$"
    },
    jobvite: {
        patterns: [
            "*://jobs.jobvite.com/*/job/*",
            "*://jobs.jobvite.com/*/apply*"
        ],
        iframeDomains: [
            "jobs.jobvite.com"
        ],
        queryParams: [
            "jobviteiframe"
        ]
    },
    breezy: {
        patterns: [
            "*://*.breezy.hr/p/*",
            "*://*.breezy.hr/*/apply*"
        ]
    },
    workable: {
        domains: [
            "careers.arbor-education.com"
        ],
        patterns: [
            "*://apply.workable.com/*",
            "*://jobs.workable.com/*"
        ],
        iframeDomains: [
            "workable.com"
        ],
        queryParams: [
            "selectedJobId"
        ],
        pathRegex: "^/(?:[^/]+/j/[^/]+(?:/apply)?/?$|(?:[a-z]{2}/)?(?:view|company)/[\\w-]+)"
    },
    gohire: {
        patterns: [
            "*://jobs.gohire.io/*/*"
        ],
        iframeDomains: [
            "app.gohire.io/widget/"
        ],
        pathRegex: "^/[^/]+/.+-\\d+/?$"
    },
    bamboohr: {
        patterns: [
            "*://*.bamboohr.com/jobs*",
            "*://*.bamboohr.com/careers*"
        ],
        iframeDomains: [
            "bamboohr.com"
        ],
        pathRegex: "^/(?:jobs|careers/[\\w-]*\\d)"
    },
    brassring: {
        patterns: [
            "*://*.brassring.com/TGnewUI/*"
        ],
        iframeDomains: [
            "brassring.com"
        ],
        urlRegex: "#(?:Applypage|jobDetails=)"
    },
    adp: {
        domains: [
            "workforcenow.adp.com"
        ],
        patterns: [
            "*://recruiting.adp.com/srccar/public/*",
            "*://myjobs.adp.com/*/cx/*"
        ]
    },
    oraclecloud: {
        patterns: [
            "*://*.oraclecloud.com/*/CandidateExperience/*/sites/*/job/*",
            "*://*.oraclecloud.com/*/CandidateExperience/*/sites/*/*/preview/*",
            "*://*/*/CandidateExperience/*/sites/*/job/*",
            "*://*/*/CandidateExperience/*/sites/*/*/preview/*",
            "*://*/*/sites/*/jobs/preview/*/apply/*"
        ],
        pathRegex: "(?:/CandidateExperience/.*/sites/[^/]+/job/[^/]+(?:/apply(?:/.*)?)?/?$|/apply)"
    },
    ultipro: {
        patterns: [
            "*://*.ultipro.com/*/JobBoard/*/OpportunityDetail*",
            "*://*.ultipro.com/*/JobBoard/*/OpportunityApply*",
            "*://*.ultipro.com/*/JobBoard/*/Account/Register*",
            "*://*.ultipro.ca/*/JobBoard/*/OpportunityDetail*",
            "*://*.ultipro.ca/*/JobBoard/*/OpportunityApply*",
            "*://*.ultipro.ca/*/JobBoard/*/Account/Register*",
            "*://*.rec.pro.ukg.net/*/JobBoard/*/OpportunityDetail*",
            "*://*.rec.pro.ukg.net/*/JobBoard/*/OpportunityApply*",
            "*://*.rec.pro.ukg.net/*/JobBoard/*/Account/Register*"
        ]
    },
    rippling: {
        patterns: [
            "*://*.rippling-ats.com/job/*/apply*",
            "*://*.rippling-ats.com/jobs/eop_survey/*"
        ],
        iframeDomains: [
            "ats.rippling.com"
        ]
    },
    ripplingHosted: {
        patterns: [
            "*://ats.rippling.com/*/jobs/*"
        ],
        pathRegex: "^/[^/]+/jobs/[^/]+(?:/apply(?:/.*)?)?/?$"
    },
    dayforce: {
        domains: [
            "jobs.dayforcehcm.com"
        ],
        pathRegex: "^/(?:[^/]+/)+jobs/[^/]+(?:/apply(?:/.*)?)?/?$"
    },
    dayforceIdentity: {
        patterns: [
            "https://dfid.dayforcehcm.com/globalidentity/account/*"
        ],
        pathRegex: "^/globalidentity/account/(?:register|login)/?$"
    },
    taleo: {
        patterns: [
            "*://*.taleo.net/*/application.jss*",
            "*://*.taleo.net/*/flow.jsf*",
            "*://*.taleo.net/*/jobapply*",
            "*://*.taleo.net/*/ats/careers/*",
            "*://*.taleo.net/careersection/*/jobdetail.ftl*",
            "*://*.taleo.net/*/htmlResourceViewer.jss*",
            "*://*.burnsmcd.com/apply*",
            "*://*.burnsmcd.com/careersection/application.jss*",
            "*://*.burnsmcd.com/careersection/flow.jsf*",
            "*://*.burnsmcd.com/careersection/jobapply*",
            "*://*.burnsmcd.com/careersection/htmlResourceViewer.jss*",
            "*://talentacquisition.3ds.com/*/application.jss*",
            "*://talentacquisition.3ds.com/*/flow.jsf*",
            "*://talentacquisition.3ds.com/*/jobapply*",
            "*://talentacquisition.3ds.com/*/ats/careers/*",
            "*://talentacquisition.3ds.com/*/htmlResourceViewer.jss*"
        ]
    },
    eightfold: {
        patterns: [
            "*://*.eightfold.ai/careers*",
            "*://*.eightfold.ai/careerhub/*"
        ],
        iframeDomains: [
            "eightfold.ai"
        ],
        pageSourceKeyword: "eightfold",
        pageSourceDomain: "eightfold.ai",
        urlRegex: "(?:^/careerhub/explore/jobs/(?!apply/?(?:[?#]|$))[^/?#]+/?(?:[?#].*)?$|^/careerhub/explore/jobs/apply/?\\?(?=[^#]*\\bpid=[^&#]+)[^#]*(?:#.*)?$|^/careers(?:/(?:job/[^/?#]+(?:/apply)?(?:[/?#]|$)|apply(?:[/?#]|$))|\\?(?=(?:pid=[^&#]+|[^#]*&pid=[^&#]+))[^#]*(?:#.*)?$))"
    },
    jazzhr: {
        patterns: [
            "*://*.applytojob.com/apply/*"
        ]
    },
    trakstar: {
        patterns: [
            "*://*.hire.trakstar.com/jobs/*"
        ],
        pathRegex: "^/jobs/[^/]+/?$"
    },
    freshteam: {
        patterns: [
            "*://*.freshteam.com/jobs/*"
        ]
    },
    pinpointhq: {
        patterns: [
            "*://*.pinpointhq.com/*/postings/*",
            "*://*.pinpointhq.com/postings/*"
        ],
        pageSourceKeyword: "pinpointhq",
        pageSourceDomain: "pinpointhq.com"
    },
    recruitee: {
        patterns: [
            "*://*.recruitee.com/*/*"
        ],
        pageSourceKeyword: "recruitee",
        pageSourceDomain: "recruitee.com"
    },
    trinethire: {
        patterns: [
            "*://app.trinethire.com/companies/*/jobs/*"
        ]
    },
    jobscore: {
        patterns: [
            "*://careers.jobscore.com/apply_flow/*",
            "*://careers.jobscore.com/careers/*/jobs/*"
        ],
        iframeDomains: [
            "jobscore.com"
        ]
    },
    paylocity: {
        patterns: [
            "*://*.paylocity.com/recruiting/*",
            "*://*.paylocity.com/Recruiting/*"
        ],
        iframeDomains: [
            "paylocity.com"
        ],
        urlRegex: "^/[Rr]ecruiting/[Jj]obs/(?:[Aa]pply/|[Dd]etails/[^/?#]+(?:[/?#]|$))"
    },
    avature: {
        patterns: [
            "*://*.avature.net/*/ApplicationForm*",
            "*://*.avature.net/*/ApplicationMethods*",
            "*://*.avature.net/*/ApplicationQuestions*",
            "*://*.avature.net/*/ApplicationReview*",
            "*://*.avature.net/*/Register*",
            "*://*.avature.net/LinkedInApplicationForm*",
            "*://*.avature.net/*/LinkedInApplicationForm*",
            "*://*.avature.net/*/YourInformation*",
            "*://*.avature.net/campusApply*",
            "*://*.avature.net/*/GeneralInfo*",
            "*://*.avature.net/careers/JobDetail*",
            "*://*.avature.net/careers/JobDetail/*",
            "*://*.avature.net/*/careers/JobDetail/*",
            "*://*.avature.net/*/External/JobDetail*",
            "*://*.avature.net/careers/LocationAndProfile/*",
            "*://*.avature.net/*/careers/LocationAndProfile/*",
            "*://careers.arcb.com/careersmarketplace/ApplicationForm*",
            "*://careers.arcb.com/careersmarketplace/ApplicationMethods*",
            "*://careers.arcb.com/careersmarketplace/ApplicationQuestions*",
            "*://careers.arcb.com/careersmarketplace/ApplicationReview*",
            "*://careers.arcb.com/careersmarketplace/Register*",
            "*://careers.arcb.com/careersmarketplace/GeneralInfo*",
            "*://careers.arcb.com/careersmarketplace/JobDetail*",
            "*://careers.arcb.com/careersmarketplace/ApplicationDotKnockedOutWizard*",
            "*://apply.deloitte.com/*/careers/*",
            "*://apply.deloitte.com/*/External/*",
            "*://careers.cbre.com/*/careers/ApplicationForm*",
            "*://careers.cbre.com/*/careers/ApplicationMethods*",
            "*://careers.cbre.com/*/careers/ApplicationQuestions*",
            "*://careers.cbre.com/*/careers/ApplicationReview*",
            "*://careers.cbre.com/*/careers/Register*",
            "*://careers.cbre.com/*/careers/InviteToApply*",
            "*://careers.cbre.com/*/careers/GeneralInfo*",
            "*://careers.cbre.com/*/careers/JobDetail*",
            "*://careers.cbre.com/*/careers/JobDetail/*",
            "*://careers.cbre.com/*/careers/LocationAndProfile/*",
            "*://careers.cbre.com/*/External/JobDetail*",
            "*://careers.mantech.com/*/careers/ApplicationForm*",
            "*://careers.mantech.com/*/careers/ApplicationMethods*",
            "*://careers.mantech.com/*/careers/ApplicationQuestions*",
            "*://careers.mantech.com/*/careers/ApplicationReview*",
            "*://careers.mantech.com/*/careers/Register*",
            "*://careers.mantech.com/*/careers/InviteToApply*",
            "*://careers.mantech.com/*/careers/GeneralInfo*",
            "*://careers.mantech.com/*/careers/JobDetail*",
            "*://careers.mantech.com/*/careers/JobDetail/*",
            "*://careers.mantech.com/*/careers/LocationAndProfile/*",
            "*://careers.mantech.com/*/External/JobDetail*",
            "*://careers.ibm.com/*/careers/JobDetail*",
            "*://careers.ibm.com/*/careers/ApplicationMethods*",
            "*://careers.ibm.com/*/careers/JobApplication*",
            "*://careers.ibm.com/*/careers/ApplicationForm*",
            "*://careers.ibm.com/*/careers/ApplicationQuestions*",
            "*://careers.ibm.com/*/careers/ApplicationReview*",
            "*://careers.ibm.com/*/careers/Register*",
            "*://careers.ibm.com/*/careers/GeneralInfo*",
            "*://careers.ibm.com/*/careers/YourInformation*",
            "*://careers.tql.com/*/TQLexternalcareers/ApplicationForm*",
            "*://careers.tql.com/*/TQLexternalcareers/ApplicationMethods*",
            "*://careers.tql.com/*/TQLexternalcareers/ApplicationQuestions*",
            "*://careers.tql.com/*/TQLexternalcareers/ApplicationReview*",
            "*://careers.tql.com/*/TQLexternalcareers/Register*",
            "*://careers.tql.com/*/TQLexternalcareers/InviteToApply*",
            "*://careers.tql.com/*/TQLexternalcareers/GeneralInfo*",
            "*://careers.tql.com/*/TQLexternalcareers/JobDetail*",
            "*://careers.tql.com/*/TQLexternalcareers/JobDetail/*",
            "*://careers.tql.com/*/TQLexternalcareers/LocationAndProfile/*",
            "*://careers.tql.com/*/External/JobDetail*"
        ],
        pageSourceKeyword: "avature",
        pageSourceDomain: "avature.net"
    },
    okta: {
        patterns: [
            "*://www.okta.com/company/careers/*/*"
        ],
        pathRegex: "^/company/careers/(?!job-listing(?:/|$))"
    },
    comeet: {
        patterns: [
            "*://*.comeet.com/jobs/*/*/*/*",
            "*://*.comeet.co/jobs/*/*/apply*"
        ],
        iframeDomains: [
            "comeet.co",
            "comeet.com"
        ]
    },
    apple: {
        patterns: [
            "*://jobs.apple.com/*/details/*",
            "*://jobs.apple.com/app/*/apply/*"
        ]
    },
    polymer: {
        patterns: [
            "*://jobs.polymer.co/*/*"
        ]
    },
    recruiterflow: {
        domains: [
            "recruiterflow.com"
        ],
        pageSourceKeyword: "recruiterflow.com",
        pageSourceDomain: "recruiterflow.com",
        pathRegex: "^/[^/]+/jobs/[^/?#]+"
    },
    careerstoasttab: {
        patterns: [
            "*://careers.toasttab.com/jobs*"
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"6MM1J":[function(require,module,exports) {
/** Keep jr_id in the URL across SPA redirects (ported from sticky-job-id). */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keepJobIdInUrl", ()=>keepJobIdInUrl);
const JR_ID_PARAM = "jr_id";
function keepJobIdInUrl(jobId, options) {
    const durationMs = options.durationMs ?? 3000;
    const intervalMs = options.intervalMs ?? 100;
    const maxRestorations = options.maxRestorations ?? 5;
    const startedAt = Date.now();
    let restorationCount = 0;
    const timer = setInterval(()=>{
        try {
            if (Date.now() - startedAt > durationMs) {
                clearInterval(timer);
                return;
            }
            const url = new URL(window.location.href);
            if (url.hostname.toLowerCase() !== options.originalHost.toLowerCase() || options.allowedPathname && url.pathname !== options.allowedPathname) {
                clearInterval(timer);
                return;
            }
            if (url.searchParams.get(JR_ID_PARAM) === jobId) return;
            if (restorationCount >= maxRestorations) {
                clearInterval(timer);
                return;
            }
            url.searchParams.set(JR_ID_PARAM, jobId);
            window.history.replaceState(window.history.state, "", url.toString());
            restorationCount += 1;
            options.onRestore?.({
                pathname: url.pathname,
                restorationCount
            });
        } catch  {
            clearInterval(timer);
        }
    }, intervalMs);
    return ()=>clearInterval(timer);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}]},["c6WUt","dn0Rr"], "dn0Rr", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkMsY0FBYztnQkFDZDtZQUNGO1lBQ0EsSUFBSSxhQUFhLElBQUksYUFBYTtZQUNsQyxPQUFPLFFBQVEsYUFBYSxPQUFPLFFBQVEsT0FBTyxJQUFJLElBQUk7WUFDMUQsb0JBQW9CO1lBQ3BCLFFBQVEsWUFBWTtnQkFBRSxVQUFVLElBQUk7Z0JBQVU7WUFBaUI7UUFDakUsRUFBRSxPQUFNO1lBQ04sY0FBYztRQUNoQjtJQUNGLEdBQUc7SUFFSCxPQUFPLElBQU0sY0FBYztBQUM3QiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtZjFhMTUyZWY3YzNiYjg0My5qcyIsInNyYy9jb250ZW50cy9ib290c3RyYXAudHMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL21lc3NhZ2luZy9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJzcmMvY29yZS9jbG91ZGZsYXJlLWNoYWxsZW5nZS50cyIsInNyYy9jb250ZW50cy9zaGFyZWQvZWFybHktdXJsLW5vcm1hbGl6YXRpb24udHMiLCJzcmMvY29udGVudHMvc2hhcmVkL3J1bnRpbWUtYWN0aXZhdGlvbi50cyIsInNyYy9hcGkvZW52LXJlc29sdmVyLnRzIiwic3JjL2NvcmUvc3VwcG9ydGVkLXNpdGVzLnRzIiwic3JjL2NvcmUvbWF0Y2gtcGF0dGVybnMudHMiLCJzcmMvY29yZS9zaXRlLXJlZ2lzdHJ5LnJhdy5qcyIsInNyYy9jb250ZW50cy9zaGFyZWQvc3RpY2t5LWpvYi1pZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZD1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciB5PSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEg9bmV3IFNldChkKSxfPWU9PkguaGFzKGUpLEc9ZC5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBaPV8oXCItLWRyeS1ydW5cIikscD0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8eSgpLlZFUkJPU0U9PT1cInRydWVcIixxPXAoKTt2YXIgdT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeD0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT51KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksbT0oLi4uZSk9PnUoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxTPTAsYz0oLi4uZSk9PnAoKSYmdShgXFx1ezFGN0UxfSAke1MrK31gLC4uLmUpO3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOnRydWUsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wic2NyaXB0LXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcYm9vdHN0cmFwLnRzXCIsXCJidW5kbGVJZFwiOlwiNTJhMDc3M2Q0ZWM2NGM4NFwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIEQ9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSShlKXtELmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUk7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBsPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gYigpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIEMoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBFPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7ZnVuY3Rpb24gTChlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIE8oZT1DKCkpe2xldCB0PWIoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBCKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJngoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBQKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChPKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IGEgb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgdz1hLmNvZGVmcmFtZXx8YS5zdGFjazttKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2EubWVzc2FnZStgXG5gK3crYFxuXG5gK2EuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixCKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e20oYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBzPVwiX19wbGFzbW8tbG9hZGluZ19fXCI7ZnVuY3Rpb24gJCgpe2xldCBlPWdsb2JhbFRoaXMud2luZG93Py50cnVzdGVkVHlwZXM7aWYodHlwZW9mIGU+XCJ1XCIpcmV0dXJuO2xldCB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInRydXN0ZWQtdHlwZXNcIl0nKT8uY29udGVudD8uc3BsaXQoXCIgXCIpLG89dD90W3Q/Lmxlbmd0aC0xXS5yZXBsYWNlKC87L2csXCJcIik6dm9pZCAwO3JldHVybiB0eXBlb2YgZTxcInVcIj9lLmNyZWF0ZVBvbGljeShvfHxgdHJ1c3RlZC1odG1sLSR7c31gLHtjcmVhdGVIVE1MOmE9PmF9KTp2b2lkIDB9dmFyIFQ9JCgpO2Z1bmN0aW9uIGcoKXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocyl9ZnVuY3Rpb24gZigpe3JldHVybiFnKCl9ZnVuY3Rpb24gRigpe2xldCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5pZD1zO2xldCB0PWBcbiAgPHN0eWxlPlxuICAgICMke3N9IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgICBib3gtc2hhZG93OiAjMzMzIDQuN3B4IDQuN3B4O1xuICAgIH1cblxuICAgICMke3N9OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwge1xuICAgICAgMCUge1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICBmaWxsOiAjMzMzO1xuICAgICAgfVxuICAgIH1cblxuICAgICMke3N9IC5zdmctZWxlbS0xIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjhzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTIge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG4gICAgXG4gICAgIyR7c30gLnN2Zy1lbGVtLTMge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDFzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7c30gLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICA8L3N0eWxlPlxuICBcbiAgPHN2ZyBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI2NCAzNTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEzOS4yMjEgMjgyLjI0M0MxNTQuMjUyIDI4Mi4yNDMgMTY2LjkwMyAyOTQuODQ5IDE2MS4zMzggMzA4LjgxMkMxNTkuNDg5IDMxMy40NTQgMTU3LjE1IDMxNy45MTMgMTU0LjM0NyAzMjIuMTA5QzE0Ni40NjQgMzMzLjkwOSAxMzUuMjYgMzQzLjEwNyAxMjIuMTUxIDM0OC41MzhDMTA5LjA0MyAzNTMuOTY5IDk0LjYxODIgMzU1LjM5IDgwLjcwMjIgMzUyLjYyMUM2Ni43ODYxIDM0OS44NTIgNTQuMDAzNCAzNDMuMDE4IDQzLjk3MDUgMzMyLjk4M0MzMy45Mzc1IDMyMi45NDcgMjcuMTA1IDMxMC4xNjIgMjQuMzM2OSAyOTYuMjQyQzIxLjU2ODkgMjgyLjMyMyAyMi45ODk1IDI2Ny44OTUgMjguNDE5MyAyNTQuNzgzQzMzLjg0OTEgMjQxLjY3MSA0My4wNDQxIDIzMC40NjQgNTQuODQxNiAyMjIuNTc5QzU5LjAzNTMgMjE5Ljc3NyA2My40OTA4IDIxNy40MzggNjguMTI5NSAyMTUuNTg4QzgyLjA5MTUgMjEwLjAyMSA5NC42OTc4IDIyMi42NzEgOTQuNjk3OCAyMzcuNzAzTDk0LjY5NzggMjU1LjAyN0M5NC42OTc4IDI3MC4wNTggMTA2Ljg4MyAyODIuMjQzIDEyMS45MTQgMjgyLjI0M0gxMzkuMjIxWlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0xXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTE5Mi4yNjEgMTQyLjAyOEMxOTIuMjYxIDEyNi45OTYgMjA0Ljg2NyAxMTQuMzQ2IDIxOC44MjkgMTE5LjkxM0MyMjMuNDY4IDEyMS43NjMgMjI3LjkyMyAxMjQuMTAyIDIzMi4xMTcgMTI2LjkwNEMyNDMuOTE1IDEzNC43ODkgMjUzLjExIDE0NS45OTYgMjU4LjUzOSAxNTkuMTA4QzI2My45NjkgMTcyLjIyIDI2NS4zOSAxODYuNjQ4IDI2Mi42MjIgMjAwLjU2N0MyNTkuODU0IDIxNC40ODcgMjUzLjAyMSAyMjcuMjcyIDI0Mi45ODggMjM3LjMwOEMyMzIuOTU1IDI0Ny4zNDMgMjIwLjE3MyAyNTQuMTc3IDIwNi4yNTYgMjU2Ljk0NkMxOTIuMzQgMjU5LjcxNSAxNzcuOTE2IDI1OC4yOTQgMTY0LjgwNyAyNTIuODYzQzE1MS42OTkgMjQ3LjQzMiAxNDAuNDk1IDIzOC4yMzQgMTMyLjYxMiAyMjYuNDM0QzEyOS44MDggMjIyLjIzOCAxMjcuNDcgMjE3Ljc3OSAxMjUuNjIgMjEzLjEzN0MxMjAuMDU2IDE5OS4xNzQgMTMyLjcwNyAxODYuNTY4IDE0Ny43MzggMTg2LjU2OEwxNjUuMDQ0IDE4Ni41NjhDMTgwLjA3NiAxODYuNTY4IDE5Mi4yNjEgMTc0LjM4MyAxOTIuMjYxIDE1OS4zNTJMMTkyLjI2MSAxNDIuMDI4WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0yXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTk1LjY1MjIgMTY0LjEzNUM5NS42NTIyIDE3OS4xNjcgODMuMjI3OSAxOTEuNzI1IDY4LjgwMTMgMTg3LjUwNUM1OS41MTQ1IDE4NC43ODggNTAuNjQzMiAxODAuNjYzIDQyLjUxMDYgMTc1LjIyN0MyNi43ODA2IDE2NC43MTQgMTQuNTIwNiAxNDkuNzcyIDcuMjgwODkgMTMyLjI4OUMwLjA0MTE4MyAxMTQuODA3IC0xLjg1MzA1IDk1LjU2OTcgMS44Mzc3MiA3Ny4wMTA0QzUuNTI4NDkgNTguNDUxMSAxNC42Mzg1IDQxLjQwMzMgMjguMDE1NyAyOC4wMjI4QzQxLjM5MyAxNC42NDIzIDU4LjQzNjYgNS41MzAwNiA3Ni45OTE0IDEuODM4MzlDOTUuNTQ2MSAtMS44NTMyOSAxMTQuNzc5IDAuMDQxNDE2MiAxMzIuMjU3IDcuMjgyOUMxNDkuNzM1IDE0LjUyNDQgMTY0LjY3NCAyNi43ODc0IDE3NS4xODQgNDIuNTIxMkMxODAuNjIgNTAuNjU3NiAxODQuNzQ0IDU5LjUzMzIgMTg3LjQ2IDY4LjgyNDVDMTkxLjY3OCA4My4yNTE5IDE3OS4xMTkgOTUuNjc1OSAxNjQuMDg4IDk1LjY3NTlMMTIyLjg2OSA5NS42NzU5QzEwNy44MzcgOTUuNjc1OSA5NS42NTIyIDEwNy44NjEgOTUuNjUyMiAxMjIuODkyTDk1LjY1MjIgMTY0LjEzNVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tM1wiPjwvcGF0aD5cbiAgPC9zdmc+XG4gIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCI+Q29udGV4dCBJbnZhbGlkYXRlZCwgUHJlc3MgdG8gUmVsb2FkPC9zcGFuPlxuICBgO3JldHVybiBlLmlubmVySFRNTD1UP1QuY3JlYXRlSFRNTCh0KTp0LGUuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixlLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIixlLnN0eWxlLmJvdHRvbT1cIjE0LjdweFwiLGUuc3R5bGUucmlnaHQ9XCIxNC43cHhcIixlLnN0eWxlLmZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCIsZS5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLGUuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIixlLnN0eWxlLmFsaWduSXRlbXM9XCJjZW50ZXJcIixlLnN0eWxlLnBhZGRpbmc9XCIxNC43cHhcIixlLnN0eWxlLmdhcD1cIjE0LjdweFwiLGUuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNC43cHhcIixlLnN0eWxlLnpJbmRleD1cIjIxNDc0ODM2NDdcIixlLnN0eWxlLm9wYWNpdHk9XCIwXCIsZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDAuNDdzIGVhc2UtaW4tb3V0XCIsZX1mdW5jdGlvbiBOKGUpe3JldHVybiBuZXcgUHJvbWlzZSh0PT57ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50PyhmKCkmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpKSx0KCkpOmdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e2YoKSYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKX0pfSl9dmFyIGs9KCk9PntsZXQgZTtpZihmKCkpe2xldCB0PUYoKTtlPU4odCl9cmV0dXJue3Nob3c6YXN5bmMoe3JlbG9hZEJ1dHRvbjp0PSExfT17fSk9Pnthd2FpdCBlO2xldCBvPWcoKTtvLnN0eWxlLm9wYWNpdHk9XCIxXCIsdCYmKG8ub25jbGljaz1yPT57ci5zdG9wUHJvcGFnYXRpb24oKSxnbG9iYWxUaGlzLmxvY2F0aW9uLnJlbG9hZCgpfSxvLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIiksby5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCIsby5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCIpfSxoaWRlOmFzeW5jKCk9Pnthd2FpdCBlO2xldCB0PWcoKTt0LnN0eWxlLm9wYWNpdHk9XCIwXCJ9fX07dmFyIFc9YCR7RX0ke21vZHVsZS5pZH1fX2AsaSxBPSExLE09aygpO2FzeW5jIGZ1bmN0aW9uIGgoKXtjKFwiU2NyaXB0IFJ1bnRpbWUgLSByZWxvYWRpbmdcIiksQT9nbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpOk0uc2hvdyh7cmVsb2FkQnV0dG9uOiEwfSl9ZnVuY3Rpb24gUigpe2k/LmRpc2Nvbm5lY3QoKSxpPWw/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpXfSksaS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntoKCl9KSxpLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihlPT57ZS5fX3BsYXNtb19jc19yZWxvYWRfXyYmaCgpLGUuX19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fJiYoQT0hMCl9KX1mdW5jdGlvbiBqKCl7aWYobD8ucnVudGltZSl0cnl7UigpLHNldEludGVydmFsKFIsMjRlMyl9Y2F0Y2h7cmV0dXJufX1qKCk7UChhc3luYyBlPT57YyhcIlNjcmlwdCBydW50aW1lIC0gb24gdXBkYXRlZCBhc3NldHNcIiksZS5maWx0ZXIobz0+by5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKG89PkwobW9kdWxlLmJ1bmRsZSxvLmlkKSkmJihNLnNob3coKSxsPy5ydW50aW1lP2kucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2NoYW5nZWRfXzohMH0pOnNldFRpbWVvdXQoKCk9PntoKCl9LDQ3MDApKX0pO1xuIiwiLyoqXG4gKiBFYXJseSBjb250ZW50LXNjcmlwdCBib290c3RyYXAgKHRlYW0gZm9yaykuXG4gKiBQb3J0ZWQgZnJvbSBKb2JyaWdodCBjb250ZW50cy5kNDJlN2ZjZi5qcyDigJQgYWN0aXZhdGlvbiBnYXRlICsgaGVscGVyIGluamVjdC5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFBsYXNtb0NTQ29uZmlnIH0gZnJvbSBcInBsYXNtb1wiXG5pbXBvcnQgeyBzZW5kVG9CYWNrZ3JvdW5kIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5pbXBvcnQge1xuICByZW1vdmVDbG91ZGZsYXJlQ2hhbGxlbmdlSW5qZWN0ZWRIb3N0LFxuICB3YWl0Rm9yQ2xvdWRmbGFyZU1hbmFnZWRDaGFsbGVuZ2VQYWdlXG59IGZyb20gXCJ+Y29yZS9jbG91ZGZsYXJlLWNoYWxsZW5nZVwiXG5pbXBvcnQgeyBub3JtYWxpemVFYXJseUpvYnJpZ2h0VXJsIH0gZnJvbSBcIn5jb250ZW50cy9zaGFyZWQvZWFybHktdXJsLW5vcm1hbGl6YXRpb25cIlxuaW1wb3J0IHtcbiAgZ2V0UnVudGltZUFjdGl2YXRpb25SZWFzb24sXG4gIG9ic2VydmVSdW50aW1lQWN0aXZhdGlvblNpZ25hbHMsXG4gIHR5cGUgUnVudGltZUFjdGl2YXRpb25SZWFzb25cbn0gZnJvbSBcIn5jb250ZW50cy9zaGFyZWQvcnVudGltZS1hY3RpdmF0aW9uXCJcbmltcG9ydCB7IGtlZXBKb2JJZEluVXJsIH0gZnJvbSBcIn5jb250ZW50cy9zaGFyZWQvc3RpY2t5LWpvYi1pZFwiXG5cbmV4cG9ydCBjb25zdCBjb25maWc6IFBsYXNtb0NTQ29uZmlnID0ge1xuICBtYXRjaGVzOiBbXCI8YWxsX3VybHM+XCJdLFxuICBhbGxfZnJhbWVzOiB0cnVlLFxuICBydW5fYXQ6IFwiZG9jdW1lbnRfc3RhcnRcIixcbiAgZXhjbHVkZV9tYXRjaGVzOiBbXG4gICAgXCIqOi8vKi5jbG91ZGZsYXJlLmNvbS8qXCIsXG4gICAgXCJodHRwczovL2xpLnByb3RlY2h0cy5uZXQvKlwiLFxuICAgIFwiaHR0cHM6Ly9jcy5uczFwLm5ldC8qXCIsXG4gICAgXCJodHRwczovL21lcmNoYW50cG9vbDEubGlua2VkaW4uY29tLypcIixcbiAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tLypcIixcbiAgICBcImh0dHBzOi8vKi5mbHMuZG91YmxlY2xpY2submV0L2FjdGl2aXR5aSpcIixcbiAgICBcImh0dHBzOi8vbG5rZC5kZW1kZXgubmV0LypcIixcbiAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2VudGVycHJpc2UvKlwiLFxuICAgIFwiaHR0cHM6Ly9jcmNsZHUuY29tLypcIixcbiAgICAvLyBUZWFtIEF1dG9maWxsIEh1YiDigJQgZG8gbm90IGluamVjdCBoZWxwZXIgaW50byBvdXIgb3duIGRhc2hib2FyZFxuICAgIFwiaHR0cHM6Ly9qb2JyaWdodC10ZWFtLXNpdGUudmVyY2VsLmFwcC8qXCIsXG4gICAgXCJodHRwOi8vbG9jYWxob3N0OjMyMTAvKlwiLFxuICAgIFwiaHR0cDovLzEyNy4wLjAuMTozMjEwLypcIlxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBIT1NUX0lEID0gXCJqb2JyaWdodC1mb3JrLWhlbHBlci1wbHVnaW5cIlxuY29uc3QgQk9PVFNUUkFQX0ZMQUcgPSBcIl9fam9icmlnaHRGb3JrSGVscGVyQm9vdHN0cmFwQWN0aXZlXCJcbmNvbnN0IEpSX0lEX1BBUkFNID0gXCJqcl9pZFwiXG5jb25zdCBIRUxQRVJfQlVORExFID0gXCJhc3NldHMvaGVscGVyLWFwcC5qc1wiXG5cbmNvbnN0IGluaXRpYWxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG5leHBvcnQgbGV0IGpvYklkOiBzdHJpbmcgfCBudWxsID0gaW5pdGlhbFBhcmFtcy5nZXQoSlJfSURfUEFSQU0pXG5leHBvcnQgY29uc3QgYWdlbnRUYWlsb3JJZCA9IGluaXRpYWxQYXJhbXMuZ2V0KFwiYV90X2lkXCIpXG5leHBvcnQgY29uc3QgYWdlbnRSZXN1bWVJZCA9IGluaXRpYWxQYXJhbXMuZ2V0KFwiYV9yX2lkXCIpXG5leHBvcnQgY29uc3QgYWdlbnRPcmlnaW5hbFJlc3VtZSA9XG4gIGluaXRpYWxQYXJhbXMuZ2V0KFwidXNlT3JpZ2luYWxSZXN1bWVcIikgPT09IFwidHJ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50Sm9iSWQobmV4dDogc3RyaW5nIHwgbnVsbCkge1xuICBqb2JJZCA9IG5leHQgfHwgbnVsbFxufVxuXG5sZXQgaGVscGVyU3RhcnRlZCA9IGZhbHNlXG5sZXQgc3RvcE9ic2VydmVyOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbFxuXG5mdW5jdGlvbiB3YWl0Rm9yRG9jdW1lbnRSZWFkeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gcmVzb2x2ZSgpLCB7IG9uY2U6IHRydWUgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFJ1bnRpbWVBY3RpdmF0aW9uUmVhc29uKCk6IFJ1bnRpbWVBY3RpdmF0aW9uUmVhc29uIHwgbnVsbCB7XG4gIGNvbnN0IGlmcmFtZVVybHMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpZnJhbWVbc3JjXVwiKSxcbiAgICAoZWwpID0+IChlbCBhcyBIVE1MSUZyYW1lRWxlbWVudCkuc3JjXG4gIClcbiAgY29uc3QgcGFnZVNvdXJjZVVybHMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzY3JpcHRbc3JjXSwgbGlua1tocmVmXVwiKSxcbiAgICAoZWwpID0+XG4gICAgICBlbCBpbnN0YW5jZW9mIEhUTUxTY3JpcHRFbGVtZW50XG4gICAgICAgID8gZWwuc3JjXG4gICAgICAgIDogKGVsIGFzIEhUTUxMaW5rRWxlbWVudCkuaHJlZlxuICApXG4gIHJldHVybiBnZXRSdW50aW1lQWN0aXZhdGlvblJlYXNvbih7XG4gICAgaHJlZjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgaXNUb3BGcmFtZTogd2luZG93LnRvcCA9PT0gd2luZG93LnNlbGYsXG4gICAgaWZyYW1lVXJscyxcbiAgICBwYWdlU291cmNlVXJsc1xuICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbmplY3RBbmRCb290c3RyYXBIZWxwZXIocmVhc29uOiBSdW50aW1lQWN0aXZhdGlvblJlYXNvbikge1xuICBpZiAoaGVscGVyU3RhcnRlZCkgcmV0dXJuXG4gIGhlbHBlclN0YXJ0ZWQgPSB0cnVlXG4gIHN0b3BPYnNlcnZlcj8uKClcbiAgc3RvcE9ic2VydmVyID0gbnVsbFxuXG4gIGNvbnNvbGUuaW5mbyhcIltqb2JyaWdodC1mb3JrXSBoZWxwZXIgYWN0aXZhdGlvbiBtYXRjaGVkXCIsIHtcbiAgICBob3N0OiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUsXG4gICAgcGF0aG5hbWU6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICBmcmFtZTogd2luZG93LnRvcCA9PT0gd2luZG93LnNlbGYgPyBcInRvcFwiIDogXCJjaGlsZFwiLFxuICAgIHJlYXNvblxuICB9KVxuXG4gIGF3YWl0IHdhaXRGb3JEb2N1bWVudFJlYWR5KClcblxuICBpZiAoYXdhaXQgd2FpdEZvckNsb3VkZmxhcmVNYW5hZ2VkQ2hhbGxlbmdlUGFnZSgpKSB7XG4gICAgcmVtb3ZlQ2xvdWRmbGFyZUNoYWxsZW5nZUluamVjdGVkSG9zdChIT1NUX0lEKVxuICAgIGhlbHBlclN0YXJ0ZWQgPSBmYWxzZVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgYnVuZGxlVXJsID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKEhFTFBFUl9CVU5ETEUpXG4gIGNvbnN0IGluamVjdGVkID0gYXdhaXQgc2VuZFRvQmFja2dyb3VuZCh7XG4gICAgbmFtZTogXCJpbmplY3RIZWxwZXJBcHBCdW5kbGVcIixcbiAgICBib2R5OiB7IGJ1bmRsZVVybCB9XG4gIH0pXG5cbiAgaWYgKCFpbmplY3RlZD8uc3VjY2Vzcykge1xuICAgIGNvbnNvbGUud2FybihcIltqb2JyaWdodC1mb3JrXSBoZWxwZXIgaW5qZWN0IGZhaWxlZFwiLCBpbmplY3RlZClcbiAgICBoZWxwZXJTdGFydGVkID0gZmFsc2VcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHJ1bnRpbWUgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLmJvb3RzdHJhcEpvYnJpZ2h0SGVscGVyUnVudGltZVxuICBpZiAodHlwZW9mIHJ1bnRpbWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGF3YWl0IHJ1bnRpbWUoKVxuICB9XG5cbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoXG4gICAgbmV3IEN1c3RvbUV2ZW50KFwiam9icmlnaHQtZm9yazpoZWxwZXItaW5qZWN0ZWRcIiwgeyBkZXRhaWw6IHsgcmVhc29uIH0gfSlcbiAgKVxufVxuXG5mdW5jdGlvbiByZXRhaW5Jbml0aWFsSnJJZElmUHJlc2VudCgpIHtcbiAgaWYgKHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmKSByZXR1cm5cbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGNvbnN0IGlkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoSlJfSURfUEFSQU0pPy50cmltKClcbiAgICBpZiAoIWlkKSByZXR1cm5cbiAgICBjb25zdCBzdG9wID0ga2VlcEpvYklkSW5VcmwoaWQsIHtcbiAgICAgIG9yaWdpbmFsSG9zdDogdXJsLmhvc3RuYW1lLFxuICAgICAgZHVyYXRpb25NczogMTBfMDAwLFxuICAgICAgaW50ZXJ2YWxNczogNTAsXG4gICAgICBtYXhSZXN0b3JhdGlvbnM6IDVcbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIiwgc3RvcCwgeyBvbmNlOiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKFwiW2pvYnJpZ2h0LWZvcmtdIGpyX2lkIHJldGVudGlvbiBmYWlsZWRcIiwgZXJyb3IpXG4gIH1cbn1cblxuZnVuY3Rpb24gd2F0Y2hGb3JMYXRlckFjdGl2YXRpb24oKSB7XG4gIGlmICh3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZikgcmV0dXJuXG4gIHN0b3BPYnNlcnZlciA9IG9ic2VydmVSdW50aW1lQWN0aXZhdGlvblNpZ25hbHMoKHJlYXNvbikgPT4ge1xuICAgIHZvaWQgaW5qZWN0QW5kQm9vdHN0cmFwSGVscGVyKHJlYXNvbikuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbam9icmlnaHQtZm9ya10gZGVsYXllZCBhY3RpdmF0aW9uIGZhaWxlZFwiLCBlcnJvcilcbiAgICB9KVxuICB9KVxuXG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSkgPT4ge1xuICAgIGlmIChtZXNzYWdlPy5tZXNzYWdlICE9PSBcInVybFVwZGF0ZWRcIikgcmV0dXJuXG4gICAgY29uc3QgcmVhc29uID0gZ2V0Q3VycmVudFJ1bnRpbWVBY3RpdmF0aW9uUmVhc29uKClcbiAgICBpZiAocmVhc29uKSB2b2lkIGluamVjdEFuZEJvb3RzdHJhcEhlbHBlcihyZWFzb24pXG4gIH0pXG59XG5cbjsoYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuICBpZiAoKGdsb2JhbFRoaXMgYXMgYW55KVtCT09UU1RSQVBfRkxBR10pIHJldHVyblxuICA7KGdsb2JhbFRoaXMgYXMgYW55KVtCT09UU1RSQVBfRkxBR10gPSB0cnVlXG5cbiAgaWYgKHdpbmRvdy50b3AgPT09IHdpbmRvdy5zZWxmKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgICBpZiAobWVzc2FnZT8ubWVzc2FnZSAhPT0gXCJpY29uQ2xpY2tlZFwiKSByZXR1cm5cbiAgICAgIHZvaWQgaW5qZWN0QW5kQm9vdHN0cmFwSGVscGVyKFwiZXh0ZW5zaW9uX2ljb25cIilcbiAgICB9KVxuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZUVhcmx5Sm9icmlnaHRVcmwoKSkgcmV0dXJuXG5cbiAgcmV0YWluSW5pdGlhbEpySWRJZlByZXNlbnQoKVxuICBhd2FpdCB3YWl0Rm9yRG9jdW1lbnRSZWFkeSgpXG5cbiAgY29uc3QgcmVhc29uID0gZ2V0Q3VycmVudFJ1bnRpbWVBY3RpdmF0aW9uUmVhc29uKClcbiAgaWYgKCFyZWFzb24pIHtcbiAgICB3YXRjaEZvckxhdGVyQWN0aXZhdGlvbigpXG4gICAgcmV0dXJuXG4gIH1cbiAgYXdhaXQgaW5qZWN0QW5kQm9vdHN0cmFwSGVscGVyKHJlYXNvbilcbn0pKCkuY2F0Y2goKGVycm9yKSA9PiB7XG4gIGNvbnNvbGUud2FybihcIltqb2JyaWdodC1mb3JrXSBib290c3RyYXAgZmFpbGVkXCIsIGVycm9yKVxufSlcbiIsImltcG9ydHtuYW5vaWQgYXMgYn1mcm9tXCJuYW5vaWRcIjt2YXIgbD1nbG9iYWxUaGlzLmJyb3dzZXI/LnRhYnN8fGdsb2JhbFRoaXMuY2hyb21lPy50YWJzLGQ9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lO2lmKCFlKXRocm93IG5ldyBFcnJvcihcIkV4dGVuc2lvbiBydW50aW1lIGlzIG5vdCBhdmFpbGFibGVcIik7cmV0dXJuIGV9LGk9KCk9PntpZighbCl0aHJvdyBuZXcgRXJyb3IoXCJFeHRlbnNpb24gdGFicyBBUEkgaXMgbm90IGF2YWlsYWJsZVwiKTtyZXR1cm4gbH0sbT1hc3luYygpPT57bGV0IGU9aSgpLFthXT1hd2FpdCBlLnF1ZXJ5KHthY3RpdmU6ITAsY3VycmVudFdpbmRvdzohMH0pO3JldHVybiBhfSxnPShlLGEpPT4hYS5fX2ludGVybmFsJiZlLnNvdXJjZT09PWdsb2JhbFRoaXMud2luZG93JiZlLmRhdGEubmFtZT09PWEubmFtZSYmKGEucmVsYXlJZD09PXZvaWQgMHx8ZS5kYXRhLnJlbGF5SWQ9PT1hLnJlbGF5SWQpO3ZhciBjPShlLGEsbj1nbG9iYWxUaGlzLndpbmRvdyk9PntsZXQgcj1hc3luYyBzPT57aWYoZyhzLGUpJiYhcy5kYXRhLnJlbGF5ZWQpe2xldCBvPXtuYW1lOmUubmFtZSxyZWxheUlkOmUucmVsYXlJZCxib2R5OnMuZGF0YS5ib2R5fSx0PWF3YWl0IGE/LihvKTtuLnBvc3RNZXNzYWdlKHtuYW1lOmUubmFtZSxyZWxheUlkOmUucmVsYXlJZCxpbnN0YW5jZUlkOnMuZGF0YS5pbnN0YW5jZUlkLGJvZHk6dCxyZWxheWVkOiEwfSx7dGFyZ2V0T3JpZ2luOmUudGFyZ2V0T3JpZ2lufHxcIi9cIn0pfX07cmV0dXJuIG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixyKSwoKT0+bi5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHIpfSx5PShlLGE9Z2xvYmFsVGhpcy53aW5kb3cpPT5uZXcgUHJvbWlzZSgobixyKT0+e2xldCBzPWIoKSxvPW5ldyBBYm9ydENvbnRyb2xsZXI7YS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHQ9PntnKHQsZSkmJnQuZGF0YS5yZWxheWVkJiZ0LmRhdGEuaW5zdGFuY2VJZD09PXMmJihuKHQuZGF0YS5ib2R5KSxvLmFib3J0KCkpfSx7c2lnbmFsOm8uc2lnbmFsfSksYS5wb3N0TWVzc2FnZSh7Li4uZSxpbnN0YW5jZUlkOnN9LHt0YXJnZXRPcmlnaW46ZS50YXJnZXRPcmlnaW58fFwiL1wifSl9KTt2YXIgcD1hc3luYyBlPT5kKCkuc2VuZE1lc3NhZ2UoZS5leHRlbnNpb25JZD8/bnVsbCxlKSx4PWFzeW5jIGU9PntsZXQgYT10eXBlb2YgZS50YWJJZD09XCJudW1iZXJcIj9lLnRhYklkOihhd2FpdCBtKCkpPy5pZDtpZighYSl0aHJvdyBuZXcgRXJyb3IoXCJObyBhY3RpdmUgdGFiIGZvdW5kIHRvIHNlbmQgbWVzc2FnZSB0by5cIik7cmV0dXJuIGkoKS5zZW5kTWVzc2FnZShhLGUpfSxoPXgsTT1lPT5jKGUscCksRT1NLHU9eSxTPXU7ZXhwb3J0e0UgYXMgcmVsYXksTSBhcyByZWxheU1lc3NhZ2UsaCBhcyBzZW5kVG9BY3RpdmVDb250ZW50U2NyaXB0LHAgYXMgc2VuZFRvQmFja2dyb3VuZCx1IGFzIHNlbmRUb0JhY2tncm91bmRWaWFSZWxheSx4IGFzIHNlbmRUb0NvbnRlbnRTY3JpcHQsUyBhcyBzZW5kVmlhUmVsYXl9O1xuIiwiLyogQHRzLXNlbGYtdHlwZXM9XCIuL2luZGV4LmQudHNcIiAqL1xuaW1wb3J0IHsgdXJsQWxwaGFiZXQgYXMgc2NvcGVkVXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5leHBvcnQgbGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuZXhwb3J0IGxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCBNYXRoLmxvZzIoYWxwaGFiZXQubGVuZ3RoIC0gMSkpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwIHwgMFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPj0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSB8IDAsIHJhbmRvbSlcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT4ge1xuICBsZXQgaWQgPSAnJ1xuICBsZXQgYnl0ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KChzaXplIHw9IDApKSlcbiAgd2hpbGUgKHNpemUtLSkge1xuICAgIGlkICs9IHNjb3BlZFVybEFscGhhYmV0W2J5dGVzW3NpemVdICYgNjNdXG4gIH1cbiAgcmV0dXJuIGlkXG59XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCIvKipcbiAqIENsb3VkZmxhcmUgbWFuYWdlZC1jaGFsbGVuZ2UgZGV0ZWN0aW9uIChwb3J0ZWQgZnJvbSB+Y29yZS9jbG91ZGZsYXJlLWNoYWxsZW5nZSkuXG4gKi9cblxuY29uc3QgQ0ZfUlVOVElNRV9NQVJLRVIgPVxuICAvKD86XFwvY2RuLWNnaVxcL2NoYWxsZW5nZS1wbGF0Zm9ybVxcYnx3aW5kb3dcXC5fY2ZfY2hsX29wdHxfX2NmX2NobF98Y2ZfY2hsX29wdHxjZl9jaGxfKS9pXG5jb25zdCBDRl9USVRMRV9ISU5UID0gLyg/Omp1c3QgYSBtb21lbnR8c2VjdXJpdHkgdmVyaWZpY2F0aW9ufG9uZSBtb3JlIHN0ZXApL2lcbmNvbnN0IENGX0JPRFlfSElOVFMgPSBbXG4gIC9wZXJmb3JtaW5nIHNlY3VyaXR5IHZlcmlmaWNhdGlvbi9pLFxuICAvY2hlY2tpbmcgKD86aWZ8dGhhdCkgKD86dGhlICk/KD86c2l0ZSApP2Nvbm5lY3Rpb24gaXMgc2VjdXJlL2ksXG4gIC90aGlzIHdlYnNpdGUgdXNlcyBhIHNlY3VyaXR5IHNlcnZpY2UgdG8gcHJvdGVjdCBhZ2FpbnN0IG1hbGljaW91cyBib3RzL2ksXG4gIC90aGlzIHBhZ2UgaXMgZGlzcGxheWVkIHdoaWxlIHRoZSB3ZWJzaXRlIHZlcmlmaWVzIHlvdSBhcmUgbm90IGEgYm90L2lcbl1cbmNvbnN0IENGX1JBWV9JRCA9IC9cXGIoPzpjbG91ZGZsYXJlXFxzKyk/cmF5IGlkXFxzKjo/XFxzKlthLWYwLTldezEyLH1cXGIvaVxuY29uc3QgQ0ZfRk9PVEVSID0gL3BlcmZvcm1hbmNlIGFuZCBzZWN1cml0eSBieSBjbG91ZGZsYXJlL2lcblxuZXhwb3J0IHR5cGUgQ2xvdWRmbGFyZVByb2JlID0ge1xuICB0aXRsZTogc3RyaW5nXG4gIGJvZHlUZXh0OiBzdHJpbmdcbiAgaHRtbD86IHN0cmluZ1xuICBtYW5hZ2VkUnVudGltZUZvdW5kOiBib29sZWFuXG4gIGNoYWxsZW5nZU1hcmtlckZvdW5kOiBib29sZWFuXG4gIGludGVyYWN0aXZlRWxlbWVudENvdW50OiBudW1iZXJcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplV2hpdGVzcGFjZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gKHRleHQgfHwgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpXG59XG5cbmZ1bmN0aW9uIGJvZHlMb29rc0xpa2VDbG91ZGZsYXJlQ2hhbGxlbmdlKGJvZHlUZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBDRl9CT0RZX0hJTlRTLnNvbWUoKHJlKSA9PiByZS50ZXN0KGJvZHlUZXh0KSkgfHxcbiAgICAoL3ZlcmlmeSB5b3UgYXJlIGh1bWFuL2kudGVzdChib2R5VGV4dCkgJiZcbiAgICAgIC9jbG91ZGZsYXJlL2kudGVzdChib2R5VGV4dCkgJiZcbiAgICAgIC8oPzpub3QgYSBib3R8bWFsaWNpb3VzIGJvdHN8c2VjdXJpdHkgc2VydmljZSkvaS50ZXN0KGJvZHlUZXh0KSlcbiAgKVxufVxuXG5mdW5jdGlvbiBoYXNDbG91ZGZsYXJlRm9vdGVyKGJvZHlUZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIENGX1JBWV9JRC50ZXN0KGJvZHlUZXh0KSAmJiBDRl9GT09URVIudGVzdChib2R5VGV4dClcbn1cblxuZnVuY3Rpb24gaXNTcGFyc2VDaGFsbGVuZ2VEb2N1bWVudCh7XG4gIGJvZHlUZXh0LFxuICBpbnRlcmFjdGl2ZUVsZW1lbnRDb3VudCxcbiAgYWxsb3dGb290ZXJMaW5rcyA9IGZhbHNlXG59OiB7XG4gIGJvZHlUZXh0OiBzdHJpbmdcbiAgaW50ZXJhY3RpdmVFbGVtZW50Q291bnQ6IG51bWJlclxuICBhbGxvd0Zvb3RlckxpbmtzPzogYm9vbGVhblxufSk6IGJvb2xlYW4ge1xuICBjb25zdCBsZW5ndGggPSBib2R5VGV4dC5sZW5ndGhcbiAgY29uc3QgaW50ZXJhY3RpdmUgPSBpbnRlcmFjdGl2ZUVsZW1lbnRDb3VudCA/PyAwXG4gIHJldHVybiBhbGxvd0Zvb3RlckxpbmtzXG4gICAgPyBsZW5ndGggPD0gMTUwMCAmJiBpbnRlcmFjdGl2ZSA8PSAyMFxuICAgIDogbGVuZ3RoIDw9IDI1MDAgJiYgaW50ZXJhY3RpdmUgPD0gNFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDbG91ZGZsYXJlTWFuYWdlZENoYWxsZW5nZVBhZ2UocHJvYmU6IENsb3VkZmxhcmVQcm9iZSk6IGJvb2xlYW4ge1xuICBjb25zdCB0aXRsZSA9IG5vcm1hbGl6ZVdoaXRlc3BhY2UocHJvYmUudGl0bGUpXG4gIGNvbnN0IGJvZHlUZXh0ID0gbm9ybWFsaXplV2hpdGVzcGFjZShwcm9iZS5ib2R5VGV4dClcbiAgY29uc3QgaHRtbCA9IHByb2JlLmh0bWwgfHwgXCJcIlxuICBjb25zdCBoYXNNYW5hZ2VkUnVudGltZSA9XG4gICAgISFwcm9iZS5tYW5hZ2VkUnVudGltZUZvdW5kIHx8IENGX1JVTlRJTUVfTUFSS0VSLnRlc3QoaHRtbClcbiAgY29uc3QgaGFzRm9vdGVyID0gaGFzQ2xvdWRmbGFyZUZvb3Rlcihib2R5VGV4dClcbiAgY29uc3QgaGFzQ2hhbGxlbmdlU2lnbmFsID1cbiAgICBoYXNNYW5hZ2VkUnVudGltZSB8fCAhIXByb2JlLmNoYWxsZW5nZU1hcmtlckZvdW5kIHx8IGhhc0Zvb3RlclxuICBjb25zdCB0aXRsZUxvb2tzTGlrZUNoYWxsZW5nZSA9IENGX1RJVExFX0hJTlQudGVzdCh0aXRsZSlcbiAgY29uc3QgY29weUxvb2tzTGlrZUNoYWxsZW5nZSA9XG4gICAgYm9keUxvb2tzTGlrZUNsb3VkZmxhcmVDaGFsbGVuZ2UoYm9keVRleHQpIHx8XG4gICAgdGl0bGVMb29rc0xpa2VDaGFsbGVuZ2UgfHxcbiAgICBoYXNGb290ZXJcblxuICByZXR1cm4gKFxuICAgIGhhc0NoYWxsZW5nZVNpZ25hbCAmJlxuICAgIGNvcHlMb29rc0xpa2VDaGFsbGVuZ2UgJiZcbiAgICBpc1NwYXJzZUNoYWxsZW5nZURvY3VtZW50KHtcbiAgICAgIGJvZHlUZXh0LFxuICAgICAgaW50ZXJhY3RpdmVFbGVtZW50Q291bnQ6IHByb2JlLmludGVyYWN0aXZlRWxlbWVudENvdW50LFxuICAgICAgYWxsb3dGb290ZXJMaW5rczogaGFzRm9vdGVyIHx8IChoYXNNYW5hZ2VkUnVudGltZSAmJiB0aXRsZUxvb2tzTGlrZUNoYWxsZW5nZSlcbiAgICB9KVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0Q2xvdWRmbGFyZUNoYWxsZW5nZVBhZ2VQcm9iZShcbiAgZG9jOiBEb2N1bWVudFxuKTogQ2xvdWRmbGFyZVByb2JlIHtcbiAgY29uc3QgdGl0bGUgPSBkb2MudGl0bGVcbiAgY29uc3QgY2hhbGxlbmdlTWFya2VyRm91bmQgPSAhIWRvYy5xdWVyeVNlbGVjdG9yKFxuICAgICcjY2hhbGxlbmdlLXN0YWdlLCNjZi1jaGFsbGVuZ2UtcnVubmluZywjY2YtcGxlYXNlLXdhaXQsLmNmLWJyb3dzZXItdmVyaWZpY2F0aW9uLC5jZi1jaGFsbGVuZ2UsZm9ybVthY3Rpb24qPVwiL2Nkbi1jZ2kvY2hhbGxlbmdlLXBsYXRmb3JtL1wiXSdcbiAgKVxuICBjb25zdCB3aW4gPSBkb2MuZGVmYXVsdFZpZXcgYXMgKFdpbmRvdyAmIHsgX2NmX2NobF9vcHQ/OiB1bmtub3duIH0pIHwgbnVsbFxuICBjb25zdCBtYW5hZ2VkUnVudGltZUZvdW5kID0gISEoXG4gICAgZG9jLnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwiL2Nkbi1jZ2kvY2hhbGxlbmdlLXBsYXRmb3JtL1wiXScpIHx8XG4gICAgd2luPy5fY2ZfY2hsX29wdFxuICApXG4gIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudENvdW50ID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCJidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBhW2hyZWZdLCBbcm9sZT0nYnV0dG9uJ11cIlxuICApLmxlbmd0aFxuICBjb25zdCBzaG91bGRSZWFkQm9keSA9XG4gICAgbWFuYWdlZFJ1bnRpbWVGb3VuZCB8fFxuICAgIGNoYWxsZW5nZU1hcmtlckZvdW5kIHx8XG4gICAgQ0ZfVElUTEVfSElOVC50ZXN0KG5vcm1hbGl6ZVdoaXRlc3BhY2UodGl0bGUpKSB8fFxuICAgIGludGVyYWN0aXZlRWxlbWVudENvdW50IDw9IDRcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGJvZHlUZXh0OiBzaG91bGRSZWFkQm9keVxuICAgICAgPyAoZG9jLmJvZHk/LnRleHRDb250ZW50IHx8IGRvYy5ib2R5Py5pbm5lclRleHQgfHwgXCJcIikudHJpbSgpXG4gICAgICA6IFwiXCIsXG4gICAgbWFuYWdlZFJ1bnRpbWVGb3VuZCxcbiAgICBjaGFsbGVuZ2VNYXJrZXJGb3VuZCxcbiAgICBpbnRlcmFjdGl2ZUVsZW1lbnRDb3VudFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0N1cnJlbnREb2N1bWVudENsb3VkZmxhcmVNYW5hZ2VkQ2hhbGxlbmdlUGFnZSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICBpc0Nsb3VkZmxhcmVNYW5hZ2VkQ2hhbGxlbmdlUGFnZShjb2xsZWN0Q2xvdWRmbGFyZUNoYWxsZW5nZVBhZ2VQcm9iZShkb2N1bWVudCkpXG4gIClcbn1cblxuZnVuY3Rpb24gaXNKb2JyaWdodEhvc3RuYW1lKGhyZWY/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCFocmVmKSByZXR1cm4gZmFsc2VcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGhvc3RuYW1lIH0gPSBuZXcgVVJMKGhyZWYpXG4gICAgcmV0dXJuIGhvc3RuYW1lID09PSBcImpvYnJpZ2h0LmFpXCIgfHwgaG9zdG5hbWUuZW5kc1dpdGgoXCIuam9icmlnaHQuYWlcIilcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RpbGxMb29rc0xpa2VQb3NzaWJsZUNoYWxsZW5nZShwcm9iZTogQ2xvdWRmbGFyZVByb2JlKTogYm9vbGVhbiB7XG4gIGNvbnN0IHRpdGxlID0gbm9ybWFsaXplV2hpdGVzcGFjZShwcm9iZS50aXRsZSlcbiAgY29uc3QgYm9keVRleHQgPSBub3JtYWxpemVXaGl0ZXNwYWNlKHByb2JlLmJvZHlUZXh0KVxuICBjb25zdCBodG1sID0gcHJvYmUuaHRtbCB8fCBcIlwiXG4gIGNvbnN0IGhhc01hbmFnZWRSdW50aW1lID1cbiAgICAhIXByb2JlLm1hbmFnZWRSdW50aW1lRm91bmQgfHwgQ0ZfUlVOVElNRV9NQVJLRVIudGVzdChodG1sKVxuICBjb25zdCBoYXNGb290ZXIgPSBoYXNDbG91ZGZsYXJlRm9vdGVyKGJvZHlUZXh0KVxuICBjb25zdCBoYXNDaGFsbGVuZ2VTaWduYWwgPVxuICAgIGhhc01hbmFnZWRSdW50aW1lIHx8ICEhcHJvYmUuY2hhbGxlbmdlTWFya2VyRm91bmQgfHwgaGFzRm9vdGVyXG4gIGNvbnN0IHRpdGxlTG9va3NMaWtlQ2hhbGxlbmdlID0gQ0ZfVElUTEVfSElOVC50ZXN0KHRpdGxlKVxuICBjb25zdCBjb3B5TG9va3NMaWtlQ2hhbGxlbmdlID1cbiAgICBib2R5TG9va3NMaWtlQ2xvdWRmbGFyZUNoYWxsZW5nZShib2R5VGV4dCkgfHxcbiAgICB0aXRsZUxvb2tzTGlrZUNoYWxsZW5nZSB8fFxuICAgIGhhc0Zvb3RlclxuICByZXR1cm4gKFxuICAgICEhaGFzQ2hhbGxlbmdlU2lnbmFsIHx8XG4gICAgISF0aXRsZUxvb2tzTGlrZUNoYWxsZW5nZSB8fFxuICAgICEhY29weUxvb2tzTGlrZUNoYWxsZW5nZSB8fFxuICAgIGlzU3BhcnNlQ2hhbGxlbmdlRG9jdW1lbnQoe1xuICAgICAgYm9keVRleHQsXG4gICAgICBpbnRlcmFjdGl2ZUVsZW1lbnRDb3VudDogcHJvYmUuaW50ZXJhY3RpdmVFbGVtZW50Q291bnRcbiAgICB9KVxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWl0Rm9yQ2xvdWRmbGFyZU1hbmFnZWRDaGFsbGVuZ2VQYWdlKHtcbiAgdGltZW91dE1zID0gMTUwMCxcbiAgaW50ZXJ2YWxNcyA9IDEwMCxcbiAgY3VycmVudFVybCA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyB1bmRlZmluZWQgOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgY29sbGVjdFByb2JlXG59OiB7XG4gIHRpbWVvdXRNcz86IG51bWJlclxuICBpbnRlcnZhbE1zPzogbnVtYmVyXG4gIGN1cnJlbnRVcmw/OiBzdHJpbmdcbiAgY29sbGVjdFByb2JlPzogKCkgPT4gQ2xvdWRmbGFyZVByb2JlIHwgbnVsbFxufSA9IHt9KTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGlmIChpc0pvYnJpZ2h0SG9zdG5hbWUoY3VycmVudFVybCkpIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IHByb2JlID1cbiAgICBjb2xsZWN0UHJvYmUgfHxcbiAgICAoKCkgPT5cbiAgICAgIHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBjb2xsZWN0Q2xvdWRmbGFyZUNoYWxsZW5nZVBhZ2VQcm9iZShkb2N1bWVudCkpXG4gIGNvbnN0IGRlYWRsaW5lID0gRGF0ZS5ub3coKSArIHRpbWVvdXRNc1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBzbmFwc2hvdCA9IHByb2JlKClcbiAgICBpZiAoc25hcHNob3QgJiYgaXNDbG91ZGZsYXJlTWFuYWdlZENoYWxsZW5nZVBhZ2Uoc25hcHNob3QpKSByZXR1cm4gdHJ1ZVxuICAgIGlmIChcbiAgICAgIChzbmFwc2hvdCAmJiAhc3RpbGxMb29rc0xpa2VQb3NzaWJsZUNoYWxsZW5nZShzbmFwc2hvdCkpIHx8XG4gICAgICBEYXRlLm5vdygpID49IGRlYWRsaW5lXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgTWF0aC5tYXgoMCwgaW50ZXJ2YWxNcykpKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbG91ZGZsYXJlQ2hhbGxlbmdlSW5qZWN0ZWRIb3N0KGVsZW1lbnRJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZVxuICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZClcbiAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlXG4gIGVsLnJlbW92ZSgpXG4gIHJldHVybiB0cnVlXG59XG4iLCIvKiogRWFybHkgVVJMIG5vcm1hbGl6YXRpb24gZm9yIEdvSGlyZSAvIExpZmUgYXQgVGlrVG9rIChwb3J0ZWQpLiAqL1xuXG5leHBvcnQgY29uc3QgSlJfSURfUEFSQU0gPSBcImpyX2lkXCJcbmNvbnN0IEdPSElSRV9IT1NUID0gXCJqb2JzLmdvaGlyZS5pb1wiXG5jb25zdCBHT0hJUkVfSk9CX1BBVEggPSAvXlxcL1teL10rXFwvListXFxkK1xcLz8kL1xuY29uc3QgTElGRV9BVF9USUtUT0tfSE9TVCA9IFwibGlmZWF0dGlrdG9rLmNvbVwiXG5jb25zdCBMSUZFX0FUX1RJS1RPS19TRUFSQ0hfUEFUSCA9IC9eXFwvc2VhcmNoXFwvXFxkK1xcLz8kL1xuXG5mdW5jdGlvbiBpc0xpZmVBdFRpa1Rva0pvYlNlYXJjaFVybCh1cmw6IFVSTCk6IGJvb2xlYW4ge1xuICBjb25zdCBob3N0bmFtZSA9IHVybC5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpXG4gIGNvbnN0IGlzTGlmZUF0VGlrVG9rID1cbiAgICBob3N0bmFtZSA9PT0gTElGRV9BVF9USUtUT0tfSE9TVCB8fFxuICAgIGhvc3RuYW1lLmVuZHNXaXRoKGAuJHtMSUZFX0FUX1RJS1RPS19IT1NUfWApXG4gIHJldHVybiBpc0xpZmVBdFRpa1RvayAmJiBMSUZFX0FUX1RJS1RPS19TRUFSQ0hfUEFUSC50ZXN0KHVybC5wYXRobmFtZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTGlmZUF0VGlrVG9rQXBwbHlVcmwoXG4gIGN1cnJlbnRIcmVmOiBzdHJpbmcsXG4gIGFuY2hvckhyZWY6IHN0cmluZyxcbiAgam9iSWQ6IHN0cmluZ1xuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IHRyaW1tZWRKb2JJZCA9IGpvYklkLnRyaW0oKVxuICBpZiAoIXRyaW1tZWRKb2JJZCkgcmV0dXJuIG51bGxcblxuICBsZXQgY3VycmVudFVybDogVVJMXG4gIGxldCBhcHBseVVybDogVVJMXG4gIHRyeSB7XG4gICAgY3VycmVudFVybCA9IG5ldyBVUkwoY3VycmVudEhyZWYpXG4gICAgYXBwbHlVcmwgPSBuZXcgVVJMKGFuY2hvckhyZWYpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBzZWFyY2hKb2JJZCA9IC9eXFwvc2VhcmNoXFwvKFxcZCspXFwvPyQvLmV4ZWMoY3VycmVudFVybC5wYXRobmFtZSk/LlsxXVxuICBjb25zdCBhcHBseUpvYklkID0gL15cXC9yZXN1bWVcXC8oXFxkKylcXC9hcHBseVxcLz8kLy5leGVjKGFwcGx5VXJsLnBhdGhuYW1lKT8uWzFdXG5cbiAgaWYgKFxuICAgICFpc0xpZmVBdFRpa1Rva0pvYlNlYXJjaFVybChjdXJyZW50VXJsKSB8fFxuICAgIGFwcGx5VXJsLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwiY2FyZWVycy50aWt0b2suY29tXCIgfHxcbiAgICAhc2VhcmNoSm9iSWQgfHxcbiAgICBhcHBseUpvYklkICE9PSBzZWFyY2hKb2JJZCB8fFxuICAgIGFwcGx5VXJsLnNlYXJjaFBhcmFtcy5oYXMoSlJfSURfUEFSQU0pXG4gICkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBhcHBseVVybC5zZWFyY2hQYXJhbXMuc2V0KEpSX0lEX1BBUkFNLCB0cmltbWVkSm9iSWQpXG4gIHJldHVybiBhcHBseVVybC50b1N0cmluZygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRSZXRhaW5MaWZlQXRUaWtUb2tKb2JEZXRhaWxKcklkKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoaHJlZilcbiAgICByZXR1cm4gKFxuICAgICAgaXNMaWZlQXRUaWtUb2tKb2JTZWFyY2hVcmwodXJsKSAmJlxuICAgICAgISF1cmwuc2VhcmNoUGFyYW1zLmdldChKUl9JRF9QQVJBTSk/LnRyaW0oKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEtlZXBMaWZlQXRUaWtUb2tBcHBseUJyaWRnZShcbiAgb3JpZ2luYWxIcmVmOiBzdHJpbmcsXG4gIGN1cnJlbnRIcmVmOiBzdHJpbmdcbik6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGNvbnN0IG9yaWdpbmFsVXJsID0gbmV3IFVSTChvcmlnaW5hbEhyZWYpXG4gICAgY29uc3QgY3VycmVudFVybCA9IG5ldyBVUkwoY3VycmVudEhyZWYpXG4gICAgY29uc3Qgam9iSWQgPSBvcmlnaW5hbFVybC5zZWFyY2hQYXJhbXMuZ2V0KEpSX0lEX1BBUkFNKT8udHJpbSgpXG4gICAgcmV0dXJuIChcbiAgICAgICEham9iSWQgJiZcbiAgICAgIG9yaWdpbmFsVXJsLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbnRVcmwuaG9zdG5hbWUudG9Mb3dlckNhc2UoKSAmJlxuICAgICAgb3JpZ2luYWxVcmwucGF0aG5hbWUgPT09IGN1cnJlbnRVcmwucGF0aG5hbWUgJiZcbiAgICAgIGN1cnJlbnRVcmwuc2VhcmNoUGFyYW1zLmdldChKUl9JRF9QQVJBTSk/LnRyaW0oKSA9PT0gam9iSWQgJiZcbiAgICAgIGlzTGlmZUF0VGlrVG9rSm9iU2VhcmNoVXJsKGN1cnJlbnRVcmwpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkUmVjb3ZlckxpZmVBdFRpa1Rva0pvYkRldGFpbEpySWQoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChocmVmKVxuICAgIHJldHVybiBpc0xpZmVBdFRpa1Rva0pvYlNlYXJjaFVybCh1cmwpICYmICF1cmwuc2VhcmNoUGFyYW1zLmhhcyhKUl9JRF9QQVJBTSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTGlmZUF0VGlrVG9rUmVjb3ZlcmVkVXJsKFxuICBocmVmOiBzdHJpbmcsXG4gIGpvYklkOiBzdHJpbmdcbik6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCB0cmltbWVkSm9iSWQgPSBqb2JJZC50cmltKClcbiAgaWYgKCF0cmltbWVkSm9iSWQgfHwgIXNob3VsZFJlY292ZXJMaWZlQXRUaWtUb2tKb2JEZXRhaWxKcklkKGhyZWYpKSByZXR1cm4gbnVsbFxuICBjb25zdCB1cmwgPSBuZXcgVVJMKGhyZWYpXG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KEpSX0lEX1BBUkFNLCB0cmltbWVkSm9iSWQpXG4gIHJldHVybiB1cmwudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROb3JtYWxpemVkRWFybHlVcmwoaHJlZjogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChocmVmKVxuICAgIGlmIChcbiAgICAgIHVybC5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpICE9PSBHT0hJUkVfSE9TVCB8fFxuICAgICAgIXVybC5zZWFyY2hQYXJhbXMuaGFzKEpSX0lEX1BBUkFNKSB8fFxuICAgICAgIXVybC5wYXRobmFtZS5lbmRzV2l0aChcIi9cIikgfHxcbiAgICAgICFHT0hJUkVfSk9CX1BBVEgudGVzdCh1cmwucGF0aG5hbWUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB1cmwucGF0aG5hbWUgPSB1cmwucGF0aG5hbWUucmVwbGFjZSgvXFwvKyQvLCBcIlwiKVxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB1cmwudG9TdHJpbmcoKVxuICAgIHJldHVybiBub3JtYWxpemVkID09PSBocmVmID8gbnVsbCA6IG5vcm1hbGl6ZWRcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRWFybHlKb2JyaWdodFVybCh3aW46IFdpbmRvdyA9IHdpbmRvdyk6IGJvb2xlYW4ge1xuICBjb25zdCBub3JtYWxpemVkID0gYnVpbGROb3JtYWxpemVkRWFybHlVcmwod2luLmxvY2F0aW9uLmhyZWYpXG4gIGlmICghbm9ybWFsaXplZCkgcmV0dXJuIGZhbHNlXG4gIHdpbi5sb2NhdGlvbi5yZXBsYWNlKG5vcm1hbGl6ZWQpXG4gIHJldHVybiB0cnVlXG59XG4iLCIvKipcbiAqIERlY2lkZSB3aGV0aGVyIHRoZSBoZWxwZXIgcnVudGltZSBzaG91bGQgYWN0aXZhdGUgb24gdGhpcyBmcmFtZS5cbiAqIFBvcnRlZCBmcm9tIH5jb250ZW50cy9zaGFyZWQvcnVudGltZS1hY3RpdmF0aW9uICsgfmNvcmUvc3VwcG9ydGVkLXNpdGVzIHVzYWdlLlxuICovXG5cbmltcG9ydCB7IGFnZW50RG9tYWlucyB9IGZyb20gXCJ+YXBpL2Vudi1yZXNvbHZlclwiXG5pbXBvcnQge1xuICBDT05TVFJBSU5FRF9TSVRFX1JVTEVTLFxuICBJRlJBTUVfQ0hFQ0tfUEFUVEVSTixcbiAgUEFHRV9TT1VSQ0VfQVRTX0xJU1QsXG4gIFFVRVJZX1BBUkFNX0xJU1QsXG4gIFNVUFBPUlRfRE9NQUlOUyxcbiAgU1VQUE9SVF9QQVRURVJOUyxcbiAgdHlwZSBDb25zdHJhaW5lZFNpdGVSdWxlXG59IGZyb20gXCJ+Y29yZS9zdXBwb3J0ZWQtc2l0ZXNcIlxuXG5jb25zdCBQT1NUX0FQUExZX1BBVEhfUkVHRVhFUyA9IFtcbiAgXCJjb25maXJtYXRpb25cIixcbiAgXCJhcHBseUNvbmZpcm1hdGlvblwiLFxuICBcImNhcmVlcnMvY2hhdGJvdFwiLFxuICBcInN1Y2Nlc3MoPzpmdWwpP1wiLFxuICBcInRoYW5rW18tXT95b3VcIixcbiAgXCJ0aGFua3NcIixcbiAgXCJTdWNjZXNzZnVsUmVnaXN0cmF0aW9uXCJcbl0ubWFwKChzZWdtZW50KSA9PiBuZXcgUmVnRXhwKGAvJHtzZWdtZW50fSg/PS98JClgLCBcImlcIikpXG5cbmV4cG9ydCB0eXBlIFJ1bnRpbWVBY3RpdmF0aW9uUmVhc29uID1cbiAgfCBcImpvYnJpZ2h0X2RvbWFpblwiXG4gIHwgXCJsaW5rZWRpbl9kb21haW5cIlxuICB8IFwic3VwcG9ydGVkX3RvcF91cmxcIlxuICB8IFwic3VwcG9ydGVkX3F1ZXJ5X3BhcmFtXCJcbiAgfCBcInN1cHBvcnRlZF9wYWdlX3NvdXJjZVwiXG4gIHwgXCJzdXBwb3J0ZWRfZW1iZWRkZWRfZnJhbWVcIlxuICB8IFwic3VwcG9ydGVkX2ZyYW1lX3VybFwiXG4gIHwgXCJleHRlbnNpb25faWNvblwiXG5cbmZ1bmN0aW9uIGhvc3RuYW1lRXF1YWxzT3JJc1N1YmRvbWFpbihob3N0bmFtZTogc3RyaW5nLCBkb21haW46IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gaG9zdG5hbWUgPT09IGRvbWFpbiB8fCBob3N0bmFtZS5lbmRzV2l0aChgLiR7ZG9tYWlufWApXG59XG5cbmZ1bmN0aW9uIGlzUG9zdEFwcGx5Q29uZmlybWF0aW9uUGF0aCh1cmw6IFVSTCk6IGJvb2xlYW4ge1xuICByZXR1cm4gUE9TVF9BUFBMWV9QQVRIX1JFR0VYRVMuc29tZSgocmUpID0+IHJlLnRlc3QodXJsLnBhdGhuYW1lKSlcbn1cblxuZnVuY3Rpb24gc2l0ZVJ1bGVNYXRjaGVzSG9zdChcbiAgdXJsOiBVUkwsXG4gIGhvc3RuYW1lOiBzdHJpbmcsXG4gIHJ1bGU6IENvbnN0cmFpbmVkU2l0ZVJ1bGVcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHJ1bGUuZG9tYWlucy5zb21lKChkb21haW4pID0+XG4gICAgICBob3N0bmFtZUVxdWFsc09ySXNTdWJkb21haW4oaG9zdG5hbWUsIGRvbWFpbilcbiAgICApIHx8IHJ1bGUucGF0dGVybnMuc29tZSgocGF0dGVybikgPT4gcGF0dGVybi5pbmNsdWRlcyh1cmwuaHJlZikpXG4gIClcbn1cblxuZnVuY3Rpb24gc2l0ZVJ1bGVNYXRjaGVzUGF0aCh1cmw6IFVSTCwgcnVsZTogQ29uc3RyYWluZWRTaXRlUnVsZSk6IGJvb2xlYW4ge1xuICBjb25zdCBmdWxsID0gYCR7dXJsLnBhdGhuYW1lfSR7dXJsLnNlYXJjaH0ke3VybC5oYXNofWBcbiAgcmV0dXJuIChcbiAgICAocnVsZS5wYXRoUmVnZXg/LnRlc3QodXJsLnBhdGhuYW1lKSA/PyBmYWxzZSkgfHxcbiAgICAocnVsZS51cmxSZWdleD8udGVzdChmdWxsKSA/PyBmYWxzZSlcbiAgKVxufVxuXG5mdW5jdGlvbiBpc0NvbnN0cmFpbmVkU2l0ZUJ1dFdyb25nUGF0aCh1cmw6IFVSTCwgaG9zdG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gQ09OU1RSQUlORURfU0lURV9SVUxFUy5zb21lKFxuICAgIChydWxlKSA9PlxuICAgICAgc2l0ZVJ1bGVNYXRjaGVzSG9zdCh1cmwsIGhvc3RuYW1lLCBydWxlKSAmJiAhc2l0ZVJ1bGVNYXRjaGVzUGF0aCh1cmwsIHJ1bGUpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3VwcG9ydGVkUnVudGltZUZyYW1lVXJsKGhyZWY6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiBib29sZWFuIHtcbiAgaWYgKCFocmVmKSByZXR1cm4gZmFsc2VcbiAgdHJ5IHtcbiAgICBpZiAoaXNQb3N0QXBwbHlDb25maXJtYXRpb25QYXRoKG5ldyBVUkwoaHJlZikpKSByZXR1cm4gZmFsc2VcbiAgfSBjYXRjaCB7XG4gICAgLyogaWdub3JlICovXG4gIH1cbiAgcmV0dXJuIElGUkFNRV9DSEVDS19QQVRURVJOLnNvbWUoKHRva2VuKSA9PiBocmVmLmluY2x1ZGVzKHRva2VuKSlcbn1cblxuZnVuY3Rpb24gcGFnZVNvdXJjZXNJbmRpY2F0ZUZvcmVpZ25BdHMoXG4gIHBhZ2VIb3N0bmFtZTogc3RyaW5nLFxuICBwYWdlU291cmNlVXJsczogc3RyaW5nW11cbik6IGJvb2xlYW4ge1xuICBmb3IgKGNvbnN0IHNvdXJjZVVybCBvZiBwYWdlU291cmNlVXJscykge1xuICAgIGlmIChcbiAgICAgIFBBR0VfU09VUkNFX0FUU19MSVNULnNvbWUoXG4gICAgICAgIChba2V5d29yZCwgYXRzRG9tYWluXSkgPT5cbiAgICAgICAgICAhaG9zdG5hbWVFcXVhbHNPcklzU3ViZG9tYWluKHBhZ2VIb3N0bmFtZSwgYXRzRG9tYWluKSAmJlxuICAgICAgICAgIHNvdXJjZVVybC5pbmNsdWRlcyhrZXl3b3JkKVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGlzU3VwcG9ydGVkVG9wTGV2ZWxBcHBsaWNhdGlvblVybCh1cmw6IFVSTCk6IGJvb2xlYW4ge1xuICBpZiAoaXNQb3N0QXBwbHlDb25maXJtYXRpb25QYXRoKHVybCkpIHJldHVybiBmYWxzZVxuICBjb25zdCBob3N0bmFtZSA9IHVybC5ob3N0bmFtZVxuICBpZiAoaXNDb25zdHJhaW5lZFNpdGVCdXRXcm9uZ1BhdGgodXJsLCBob3N0bmFtZSkpIHJldHVybiBmYWxzZVxuICByZXR1cm4gKFxuICAgIFNVUFBPUlRfRE9NQUlOUy5zb21lKChkb21haW4pID0+XG4gICAgICBob3N0bmFtZUVxdWFsc09ySXNTdWJkb21haW4oaG9zdG5hbWUsIGRvbWFpbilcbiAgICApIHx8XG4gICAgU1VQUE9SVF9QQVRURVJOUy5zb21lKChwYXR0ZXJuKSA9PiBwYXR0ZXJuLmluY2x1ZGVzKHVybC5ocmVmKSkgfHxcbiAgICBDT05TVFJBSU5FRF9TSVRFX1JVTEVTLnNvbWUoXG4gICAgICAocnVsZSkgPT5cbiAgICAgICAgc2l0ZVJ1bGVNYXRjaGVzSG9zdCh1cmwsIGhvc3RuYW1lLCBydWxlKSAmJiBzaXRlUnVsZU1hdGNoZXNQYXRoKHVybCwgcnVsZSlcbiAgICApXG4gIClcbn1cblxuZnVuY3Rpb24gaGFzU3VwcG9ydGVkRW1iZWRkZWRGcmFtZShpZnJhbWVVcmxzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gaWZyYW1lVXJscy5zb21lKChpZnJhbWVVcmwpID0+IGlzU3VwcG9ydGVkUnVudGltZUZyYW1lVXJsKGlmcmFtZVVybCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSdW50aW1lQWN0aXZhdGlvblJlYXNvbih7XG4gIGhyZWYsXG4gIGlzVG9wRnJhbWUsXG4gIGlmcmFtZVVybHMgPSBbXSxcbiAgcGFnZVNvdXJjZVVybHMgPSBbXVxufToge1xuICBocmVmOiBzdHJpbmdcbiAgaXNUb3BGcmFtZTogYm9vbGVhblxuICBpZnJhbWVVcmxzPzogc3RyaW5nW11cbiAgcGFnZVNvdXJjZVVybHM/OiBzdHJpbmdbXVxufSk6IFJ1bnRpbWVBY3RpdmF0aW9uUmVhc29uIHwgbnVsbCB7XG4gIGxldCB1cmw6IFVSTFxuICB0cnkge1xuICAgIHVybCA9IG5ldyBVUkwoaHJlZilcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChhZ2VudERvbWFpbnMuc29tZSgoZG9tYWluKSA9PiBob3N0bmFtZUVxdWFsc09ySXNTdWJkb21haW4odXJsLmhvc3RuYW1lLCBkb21haW4pKSkge1xuICAgIHJldHVybiBcImpvYnJpZ2h0X2RvbWFpblwiXG4gIH1cbiAgaWYgKGhvc3RuYW1lRXF1YWxzT3JJc1N1YmRvbWFpbih1cmwuaG9zdG5hbWUsIFwibGlua2VkaW4uY29tXCIpKSB7XG4gICAgcmV0dXJuIFwibGlua2VkaW5fZG9tYWluXCJcbiAgfVxuICBpZiAoIWlzVG9wRnJhbWUpIHtcbiAgICByZXR1cm4gaXNTdXBwb3J0ZWRSdW50aW1lRnJhbWVVcmwodXJsLmhyZWYpID8gXCJzdXBwb3J0ZWRfZnJhbWVfdXJsXCIgOiBudWxsXG4gIH1cbiAgaWYgKGlzU3VwcG9ydGVkVG9wTGV2ZWxBcHBsaWNhdGlvblVybCh1cmwpKSB7XG4gICAgcmV0dXJuIFwic3VwcG9ydGVkX3RvcF91cmxcIlxuICB9XG4gIGlmIChcbiAgICAhaXNDb25zdHJhaW5lZFNpdGVCdXRXcm9uZ1BhdGgodXJsLCB1cmwuaG9zdG5hbWUpICYmXG4gICAgUVVFUllfUEFSQU1fTElTVC5zb21lKChwYXJhbSkgPT4gdXJsLnNlYXJjaFBhcmFtcy5oYXMocGFyYW0pKVxuICApIHtcbiAgICByZXR1cm4gXCJzdXBwb3J0ZWRfcXVlcnlfcGFyYW1cIlxuICB9XG4gIGlmIChwYWdlU291cmNlc0luZGljYXRlRm9yZWlnbkF0cyh1cmwuaG9zdG5hbWUsIHBhZ2VTb3VyY2VVcmxzKSkge1xuICAgIHJldHVybiBcInN1cHBvcnRlZF9wYWdlX3NvdXJjZVwiXG4gIH1cbiAgaWYgKGhhc1N1cHBvcnRlZEVtYmVkZGVkRnJhbWUoaWZyYW1lVXJscykpIHtcbiAgICByZXR1cm4gXCJzdXBwb3J0ZWRfZW1iZWRkZWRfZnJhbWVcIlxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2YXRpb25SZWFzb25Gcm9tRWxlbWVudChcbiAgZWxlbWVudDogRWxlbWVudFxuKTogUnVudGltZUFjdGl2YXRpb25SZWFzb24gfCBudWxsIHtcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSUZyYW1lRWxlbWVudCkge1xuICAgIHJldHVybiBpc1N1cHBvcnRlZFJ1bnRpbWVGcmFtZVVybChlbGVtZW50LnNyYylcbiAgICAgID8gXCJzdXBwb3J0ZWRfZW1iZWRkZWRfZnJhbWVcIlxuICAgICAgOiBudWxsXG4gIH1cbiAgaWYgKFxuICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2NyaXB0RWxlbWVudCB8fFxuICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnRcbiAgKSB7XG4gICAgY29uc3Qgc291cmNlVXJsID1cbiAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2NyaXB0RWxlbWVudCA/IGVsZW1lbnQuc3JjIDogZWxlbWVudC5ocmVmXG4gICAgaWYgKHBhZ2VTb3VyY2VzSW5kaWNhdGVGb3JlaWduQXRzKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSwgW3NvdXJjZVVybF0pKSB7XG4gICAgICByZXR1cm4gXCJzdXBwb3J0ZWRfcGFnZV9zb3VyY2VcIlxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmF0aW9uUmVhc29uRnJvbU5vZGUoXG4gIG5vZGU6IE5vZGVcbik6IFJ1bnRpbWVBY3RpdmF0aW9uUmVhc29uIHwgbnVsbCB7XG4gIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkgcmV0dXJuIG51bGxcbiAgY29uc3QgZGlyZWN0ID0gZ2V0QWN0aXZhdGlvblJlYXNvbkZyb21FbGVtZW50KG5vZGUpXG4gIGlmIChkaXJlY3QpIHJldHVybiBkaXJlY3RcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCJpZnJhbWVbc3JjXSwgc2NyaXB0W3NyY10sIGxpbmtbaHJlZl1cIlxuICApKSB7XG4gICAgY29uc3QgcmVhc29uID0gZ2V0QWN0aXZhdGlvblJlYXNvbkZyb21FbGVtZW50KGNoaWxkKVxuICAgIGlmIChyZWFzb24pIHJldHVybiByZWFzb25cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZVJ1bnRpbWVBY3RpdmF0aW9uU2lnbmFscyhcbiAgb25BY3RpdmF0ZWQ6IChyZWFzb246IFJ1bnRpbWVBY3RpdmF0aW9uUmVhc29uKSA9PiB2b2lkXG4pOiAoKSA9PiB2b2lkIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgdHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGYgfHxcbiAgICAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICkge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgbGV0IG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGxcbiAgY29uc3QgYWN0aXZhdGUgPSAocmVhc29uOiBSdW50aW1lQWN0aXZhdGlvblJlYXNvbikgPT4ge1xuICAgIG9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICBvYnNlcnZlciA9IG51bGxcbiAgICBvbkFjdGl2YXRlZChyZWFzb24pXG4gIH1cblxuICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICAgIGNvbnN0IHJlYXNvbiA9IGdldEFjdGl2YXRpb25SZWFzb25Gcm9tTm9kZShtdXRhdGlvbi50YXJnZXQpXG4gICAgICAgIGlmIChyZWFzb24pIHtcbiAgICAgICAgICBhY3RpdmF0ZShyZWFzb24pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgYWRkZWQgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xuICAgICAgICBjb25zdCByZWFzb24gPSBnZXRBY3RpdmF0aW9uUmVhc29uRnJvbU5vZGUoYWRkZWQpXG4gICAgICAgIGlmIChyZWFzb24pIHtcbiAgICAgICAgICBhY3RpdmF0ZShyZWFzb24pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wic3JjXCIsIFwiaHJlZlwiXSxcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZVxuICB9KVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgb2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgIG9ic2VydmVyID0gbnVsbFxuICB9XG59XG4iLCIvKipcbiAqIEVudmlyb25tZW50IC8gaG9zdCBjb25maWcgZm9yIHRoZSB0ZWFtIGZvcmsuXG4gKiBPdmVycmlkZSB2aWEgLmVudiAoUExBU01PX1BVQkxJQ18qKS5cbiAqXG4gKiBBdXRvZmlsbCBwcm9maWxlIGRhdGEgY29tZXMgZnJvbSB0aGUgVGVhbSBBdXRvZmlsbCBIdWIgKHRlYW0tc2l0ZSksXG4gKiBub3QgSm9icmlnaHQgY2xvdWQg4oCUIHNlZSB+YXBpL3RlYW0tY2xpZW50IGFuZCBleHRlbnNpb24gT3B0aW9ucy5cbiAqL1xuXG5jb25zdCBQUk9EX0hVQiA9IFwiaHR0cHM6Ly9qb2JyaWdodC10ZWFtLXNpdGUudmVyY2VsLmFwcFwiXG5jb25zdCBERVZfSFVCID0gXCJodHRwOi8vbG9jYWxob3N0OjMyMTBcIlxuXG5leHBvcnQgY29uc3QgVEVBTV9TSVRFX1VSTCA9XG4gIHByb2Nlc3MuZW52LlBMQVNNT19QVUJMSUNfVEVBTV9TSVRFX1VSTCA/PyBQUk9EX0hVQlxuXG4vKiogSHViIFVSTCBmb3IgdGhlIGN1cnJlbnQgYnVpbGQ6IGxvY2FsaG9zdCBpbiBwbGFzbW8gZGV2LCBwcm9kIFVSTCBpbiBidWlsZHMuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SHViVXJsKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgcmV0dXJuIERFVl9IVUJcbiAgcmV0dXJuIFRFQU1fU0lURV9VUkwgfHwgUFJPRF9IVUJcbn1cblxuLyoqIEBkZXByZWNhdGVkIFByZWZlciBURUFNX1NJVEVfVVJMIOKAlCBrZXB0IGZvciBvbGRlciBzdHVicyAqL1xuZXhwb3J0IGNvbnN0IEFQSV9ET01BSU4gPVxuICBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX0FQSV9ET01BSU4gPz8gVEVBTV9TSVRFX1VSTFxuXG5leHBvcnQgY29uc3QgSE9TVF9ET01BSU4gPVxuICBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX0hPU1RfRE9NQUlOID8/IFRFQU1fU0lURV9VUkxcblxuZXhwb3J0IGNvbnN0IENPT0tJRV9ET01BSU4gPVxuICBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX0NPT0tJRV9ET01BSU4gPz8gXCJsb2NhbGhvc3RcIlxuXG4vKiogT3JpZ2lucyB0cmVhdGVkIGFzIHRoZSB0ZWFtIC8gYWdlbnQgVUkgaG9zdC4gKi9cbmV4cG9ydCBjb25zdCBhZ2VudERvbWFpbnMgPSBbXG4gIFwibG9jYWxob3N0XCIsXG4gIFwiMTI3LjAuMC4xXCJcbl0gYXMgY29uc3RcbiIsIi8qKlxuICogU3VwcG9ydGVkIEFUUyBzaXRlIHJlZ2lzdHJ5ICsgZGVyaXZlZCBsaXN0cy5cbiAqIFJlZ2lzdHJ5IGRhdGEgbGl2ZXMgaW4gc2l0ZS1yZWdpc3RyeS5yYXcuanMgKGV4dHJhY3RlZCBmcm9tIEpvYnJpZ2h0IHYxLjIzLjApLlxuICovXG5cbmltcG9ydCB7IE1hdGNoUGF0dGVybiB9IGZyb20gXCJ+Y29yZS9tYXRjaC1wYXR0ZXJuc1wiXG5pbXBvcnQgeyBTSVRFX1JFR0lTVFJZIGFzIFJBV19SRUdJU1RSWSB9IGZyb20gXCJ+Y29yZS9zaXRlLXJlZ2lzdHJ5LnJhd1wiXG5cbmV4cG9ydCB0eXBlIFNpdGVEZWZpbml0aW9uID0ge1xuICBkb21haW5zPzogc3RyaW5nW11cbiAgcGF0dGVybnM/OiBzdHJpbmdbXVxuICBpZnJhbWVEb21haW5zPzogc3RyaW5nW11cbiAgcXVlcnlQYXJhbXM/OiBzdHJpbmdbXVxuICBwYXRoUmVnZXg/OiBzdHJpbmdcbiAgdXJsUmVnZXg/OiBzdHJpbmdcbiAgcGFnZVNvdXJjZUtleXdvcmQ/OiBzdHJpbmdcbiAgcGFnZVNvdXJjZURvbWFpbj86IHN0cmluZ1xuICBpZnJhbWVPbmx5PzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgU0lURV9SRUdJU1RSWSA9IFJBV19SRUdJU1RSWSBhcyBSZWNvcmQ8c3RyaW5nLCBTaXRlRGVmaW5pdGlvbj5cblxuZXhwb3J0IGNvbnN0IFBJTlBPSU5USFFfQ0FSRUVSU19DRE4gPSBcImQybjVpZWQ5NG1hem9wLmNsb3VkZnJvbnQubmV0XCJcbmV4cG9ydCBjb25zdCBFSUdIVEZPTERfQ0FSRUVSSFVCX0pPQl9QQVRIX1JFR0VYX1NPVVJDRSA9XG4gIFwiXi9jYXJlZXJodWIvZXhwbG9yZS9qb2JzLyg/IWFwcGx5Lz8kKVteLz8jXSsvPyRcIlxuXG5jb25zdCBlaWdodGZvbGRDYXJlZXJIdWJKb2JQYXRoUmVnZXggPSBuZXcgUmVnRXhwKFxuICBFSUdIVEZPTERfQ0FSRUVSSFVCX0pPQl9QQVRIX1JFR0VYX1NPVVJDRVxuKVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFaWdodGZvbGRDYXJlZXJIdWJKb2JQYXRoKHBhdGhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGVpZ2h0Zm9sZENhcmVlckh1YkpvYlBhdGhSZWdleC50ZXN0KHBhdGhuYW1lKVxufVxuXG5mdW5jdGlvbiBob3N0bmFtZUZyb21NYXRjaFBhdHRlcm4ocGF0dGVybjogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IG1hdGNoID0gL15bXjpdKzpcXC9cXC8oW14vXSspLy5leGVjKHBhdHRlcm4pXG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsXG4gIGNvbnN0IGhvc3QgPSBtYXRjaFsxXVxuICBpZiAoIWhvc3QgfHwgaG9zdCA9PT0gXCIqXCIpIHJldHVybiBudWxsXG4gIHJldHVybiBob3N0LnN0YXJ0c1dpdGgoXCIqLlwiKSA/IGhvc3Quc2xpY2UoMikgOiBob3N0XG59XG5cbmNvbnN0IHVuY29uc3RyYWluZWRTaXRlcyA9IE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSkuZmlsdGVyKFxuICAoc2l0ZSkgPT4gIXNpdGUucGF0aFJlZ2V4ICYmICFzaXRlLnVybFJlZ2V4XG4pXG5cbmV4cG9ydCBjb25zdCBTVVBQT1JUX0RPTUFJTlMgPSB1bmNvbnN0cmFpbmVkU2l0ZXMuZmxhdE1hcChcbiAgKHNpdGUpID0+IHNpdGUuZG9tYWlucyA/PyBbXVxuKVxuXG5leHBvcnQgY29uc3QgU1VQUE9SVF9QQVRURVJOUyA9IHVuY29uc3RyYWluZWRTaXRlc1xuICAuZmxhdE1hcCgoc2l0ZSkgPT4gc2l0ZS5wYXR0ZXJucyA/PyBbXSlcbiAgLm1hcCgocGF0dGVybikgPT4gbmV3IE1hdGNoUGF0dGVybihwYXR0ZXJuKSlcblxuZXhwb3J0IGNvbnN0IFNVUFBPUlRfSE9TVFMgPSBBcnJheS5mcm9tKFxuICBuZXcgU2V0KFxuICAgIE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSkuZmxhdE1hcCgoc2l0ZSkgPT4gW1xuICAgICAgLi4uKHNpdGUuZG9tYWlucyA/PyBbXSksXG4gICAgICAuLi4oc2l0ZS5wYXR0ZXJucyA/PyBbXSlcbiAgICAgICAgLm1hcChob3N0bmFtZUZyb21NYXRjaFBhdHRlcm4pXG4gICAgICAgIC5maWx0ZXIoKGhvc3QpOiBob3N0IGlzIHN0cmluZyA9PiBob3N0ICE9PSBudWxsKVxuICAgIF0pXG4gIClcbilcblxuZXhwb3J0IHR5cGUgQ29uc3RyYWluZWRTaXRlUnVsZSA9IHtcbiAgZG9tYWluczogc3RyaW5nW11cbiAgcGF0dGVybnM6IE1hdGNoUGF0dGVybltdXG4gIHBhdGhSZWdleD86IFJlZ0V4cFxuICB1cmxSZWdleD86IFJlZ0V4cFxufVxuXG5leHBvcnQgY29uc3QgQ09OU1RSQUlORURfU0lURV9SVUxFUzogQ29uc3RyYWluZWRTaXRlUnVsZVtdID0gT2JqZWN0LnZhbHVlcyhcbiAgU0lURV9SRUdJU1RSWVxuKVxuICAuZmlsdGVyKFxuICAgIChzaXRlKSA9PlxuICAgICAgKHR5cGVvZiBzaXRlLnBhdGhSZWdleCA9PT0gXCJzdHJpbmdcIiAmJiBzaXRlLnBhdGhSZWdleC5sZW5ndGggPiAwKSB8fFxuICAgICAgKHR5cGVvZiBzaXRlLnVybFJlZ2V4ID09PSBcInN0cmluZ1wiICYmIHNpdGUudXJsUmVnZXgubGVuZ3RoID4gMClcbiAgKVxuICAubWFwKChzaXRlKSA9PiAoe1xuICAgIGRvbWFpbnM6IHNpdGUuZG9tYWlucyA/PyBbXSxcbiAgICBwYXR0ZXJuczogKHNpdGUucGF0dGVybnMgPz8gW10pLm1hcCgocGF0dGVybikgPT4gbmV3IE1hdGNoUGF0dGVybihwYXR0ZXJuKSksXG4gICAgcGF0aFJlZ2V4OiBzaXRlLnBhdGhSZWdleCA/IG5ldyBSZWdFeHAoc2l0ZS5wYXRoUmVnZXgpIDogdW5kZWZpbmVkLFxuICAgIHVybFJlZ2V4OiBzaXRlLnVybFJlZ2V4ID8gbmV3IFJlZ0V4cChzaXRlLnVybFJlZ2V4KSA6IHVuZGVmaW5lZFxuICB9KSlcblxuZXhwb3J0IGNvbnN0IElGUkFNRV9DSEVDS19QQVRURVJOID0gT2JqZWN0LnZhbHVlcyhTSVRFX1JFR0lTVFJZKS5mbGF0TWFwKFxuICAoc2l0ZSkgPT4gc2l0ZS5pZnJhbWVEb21haW5zID8/IFtdXG4pXG5cbmV4cG9ydCBjb25zdCBQQUdFX1NPVVJDRV9BVFNfTElTVCA9IE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSlcbiAgLmZpbHRlcigoc2l0ZSkgPT4gc2l0ZS5wYWdlU291cmNlS2V5d29yZCAmJiBzaXRlLnBhZ2VTb3VyY2VEb21haW4pXG4gIC5tYXAoXG4gICAgKHNpdGUpID0+XG4gICAgICBbc2l0ZS5wYWdlU291cmNlS2V5d29yZCEsIHNpdGUucGFnZVNvdXJjZURvbWFpbiFdIGFzIFtzdHJpbmcsIHN0cmluZ11cbiAgKVxuXG5leHBvcnQgY29uc3QgSUZSQU1FX09OTFlfRE9NQUlOUyA9IE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSlcbiAgLmZpbHRlcigoc2l0ZSkgPT4gc2l0ZS5pZnJhbWVPbmx5KVxuICAuZmxhdE1hcCgoc2l0ZSkgPT4gc2l0ZS5kb21haW5zID8/IFtdKVxuXG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1fTElTVCA9IE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSkuZmxhdE1hcChcbiAgKHNpdGUpID0+IHNpdGUucXVlcnlQYXJhbXMgPz8gW11cbilcbiIsIi8qKlxuICogTWluaW1hbCBDaHJvbWUgbWF0Y2gtcGF0dGVybiBpbXBsZW1lbnRhdGlvbiBmb3Igc3VwcG9ydGVkLXNpdGVzLlxuICogKFBvcnRlZCBzdWJzZXQgb2YgQHdlYmV4dC1jb3JlL21hdGNoLXBhdHRlcm5zLilcbiAqL1xuXG5leHBvcnQgY2xhc3MgSW52YWxpZE1hdGNoUGF0dGVybiBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IocGF0dGVybjogc3RyaW5nLCByZWFzb246IHN0cmluZykge1xuICAgIHN1cGVyKGBJbnZhbGlkIG1hdGNoIHBhdHRlcm4gXCIke3BhdHRlcm59XCI6ICR7cmVhc29ufWApXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoUGF0dGVybiB7XG4gIHN0YXRpYyBQUk9UT0NPTFMgPSBbXCJodHRwXCIsIFwiaHR0cHNcIiwgXCJmaWxlXCIsIFwiZnRwXCIsIFwidXJuXCJdIGFzIGNvbnN0XG5cbiAgaXNBbGxVcmxzID0gZmFsc2VcbiAgcHJvdG9jb2xNYXRjaGVzOiBzdHJpbmdbXSA9IFtdXG4gIGhvc3RuYW1lTWF0Y2ggPSBcIipcIlxuICBwYXRobmFtZU1hdGNoID0gXCIqXCJcblxuICBjb25zdHJ1Y3RvcihwYXR0ZXJuOiBzdHJpbmcpIHtcbiAgICBpZiAocGF0dGVybiA9PT0gXCI8YWxsX3VybHM+XCIpIHtcbiAgICAgIHRoaXMuaXNBbGxVcmxzID0gdHJ1ZVxuICAgICAgdGhpcy5wcm90b2NvbE1hdGNoZXMgPSBbLi4uTWF0Y2hQYXR0ZXJuLlBST1RPQ09MU11cbiAgICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IFwiKlwiXG4gICAgICB0aGlzLnBhdGhuYW1lTWF0Y2ggPSBcIipcIlxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gLyguKik6XFwvXFwvKC4qPykoXFwvLiopLy5leGVjKHBhdHRlcm4pXG4gICAgaWYgKHBhcnNlZCA9PSBudWxsKSB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihwYXR0ZXJuLCBcIkluY29ycmVjdCBmb3JtYXRcIilcblxuICAgIGNvbnN0IFssIHByb3RvY29sLCBob3N0bmFtZSwgcGF0aG5hbWVdID0gcGFyc2VkXG5cbiAgICBpZiAoXG4gICAgICAhTWF0Y2hQYXR0ZXJuLlBST1RPQ09MUy5pbmNsdWRlcyhwcm90b2NvbCBhcyAodHlwZW9mIE1hdGNoUGF0dGVybi5QUk9UT0NPTFMpW251bWJlcl0pICYmXG4gICAgICBwcm90b2NvbCAhPT0gXCIqXCJcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkTWF0Y2hQYXR0ZXJuKFxuICAgICAgICBwYXR0ZXJuLFxuICAgICAgICBgJHtwcm90b2NvbH0gbm90IGEgdmFsaWQgcHJvdG9jb2wgKCR7TWF0Y2hQYXR0ZXJuLlBST1RPQ09MUy5qb2luKFwiLCBcIil9KWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4ocGF0dGVybiwgXCJIb3N0bmFtZSBjYW5ub3QgaW5jbHVkZSBhIHBvcnRcIilcbiAgICB9XG4gICAgaWYgKFxuICAgICAgaG9zdG5hbWUuaW5jbHVkZXMoXCIqXCIpICYmXG4gICAgICBob3N0bmFtZS5sZW5ndGggPiAxICYmXG4gICAgICAhaG9zdG5hbWUuc3RhcnRzV2l0aChcIiouXCIpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihcbiAgICAgICAgcGF0dGVybixcbiAgICAgICAgXCJJZiB1c2luZyBhIHdpbGRjYXJkICgqKSwgaXQgbXVzdCBnbyBhdCB0aGUgc3RhcnQgb2YgdGhlIGhvc3RuYW1lXCJcbiAgICAgIClcbiAgICB9XG5cbiAgICB0aGlzLnByb3RvY29sTWF0Y2hlcyA9IHByb3RvY29sID09PSBcIipcIiA/IFtcImh0dHBcIiwgXCJodHRwc1wiXSA6IFtwcm90b2NvbF1cbiAgICB0aGlzLmhvc3RuYW1lTWF0Y2ggPSBob3N0bmFtZVxuICAgIHRoaXMucGF0aG5hbWVNYXRjaCA9IHBhdGhuYW1lXG4gIH1cblxuICBpbmNsdWRlcyhpbnB1dDogc3RyaW5nIHwgVVJMIHwgTG9jYXRpb24pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc0FsbFVybHMpIHJldHVybiB0cnVlXG4gICAgY29uc3QgdXJsID1cbiAgICAgIHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IG5ldyBVUkwoaW5wdXQpXG4gICAgICAgIDogaW5wdXQgaW5zdGFuY2VvZiBMb2NhdGlvblxuICAgICAgICAgID8gbmV3IFVSTChpbnB1dC5ocmVmKVxuICAgICAgICAgIDogaW5wdXRcbiAgICByZXR1cm4gdGhpcy5wcm90b2NvbE1hdGNoZXMuc29tZSgocHJvdG9jb2wpID0+IHtcbiAgICAgIGlmIChwcm90b2NvbCA9PT0gXCJodHRwXCIpIHJldHVybiB0aGlzLmlzSHR0cE1hdGNoKHVybClcbiAgICAgIGlmIChwcm90b2NvbCA9PT0gXCJodHRwc1wiKSByZXR1cm4gdGhpcy5pc0h0dHBzTWF0Y2godXJsKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgaXNIdHRwTWF0Y2godXJsOiBVUkwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXJsLnByb3RvY29sID09PSBcImh0dHA6XCIgJiYgdGhpcy5pc0hvc3RQYXRoTWF0Y2godXJsKVxuICB9XG5cbiAgcHJpdmF0ZSBpc0h0dHBzTWF0Y2godXJsOiBVUkwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXJsLnByb3RvY29sID09PSBcImh0dHBzOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybClcbiAgfVxuXG4gIHByaXZhdGUgaXNIb3N0UGF0aE1hdGNoKHVybDogVVJMKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmhvc3RuYW1lTWF0Y2ggfHwgIXRoaXMucGF0aG5hbWVNYXRjaCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgaG9zdFJlZ2V4ZXMgPSBbXG4gICAgICB0aGlzLmNvbnZlcnRQYXR0ZXJuVG9SZWdleCh0aGlzLmhvc3RuYW1lTWF0Y2gpLFxuICAgICAgdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5ob3N0bmFtZU1hdGNoLnJlcGxhY2UoL15cXCpcXC4vLCBcIlwiKSlcbiAgICBdXG4gICAgY29uc3QgcGF0aFJlZ2V4ID0gdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5wYXRobmFtZU1hdGNoKVxuICAgIHJldHVybiAoXG4gICAgICBob3N0UmVnZXhlcy5zb21lKChyZSkgPT4gcmUudGVzdCh1cmwuaG9zdG5hbWUpKSAmJiBwYXRoUmVnZXgudGVzdCh1cmwucGF0aG5hbWUpXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UGF0dGVyblRvUmVnZXgocGF0dGVybjogc3RyaW5nKTogUmVnRXhwIHtcbiAgICBjb25zdCBlc2NhcGVkID0gcGF0dGVybi5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIilcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7ZXNjYXBlZC5yZXBsYWNlKC9cXFxcXFwqL2csIFwiLipcIil9JGApXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBTSVRFX1JFR0lTVFJZID0ge1xyXG4gIGdyZWVuaG91c2U6IHtcclxuICAgIGRvbWFpbnM6IFtcImdyZWVuaG91c2UuaW9cIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJncmVlbmhvdXNlLmlvXCJdLFxyXG4gICAgcXVlcnlQYXJhbXM6IFtcImdoX2ppZFwiLCBcImdoX3NyY1wiXSxcclxuICAgIHBhdGhSZWdleDogXCJeLyg/OlteL10rL2pvYnMvXFxcXGQrfGVtYmVkL2pvYl9hcHApXCJcclxuICB9LFxyXG4gIHhjb21wYW55OiB7IHBhdHRlcm5zOiBbXCIqOi8veC5jb21wYW55LypcIl0sIHBhdGhSZWdleDogXCJeL2NhcmVlcnMvW14vXSsvPyRcIiB9LFxyXG4gIHdhbG1hcnQ6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vY2FyZWVycy53YWxtYXJ0LmNvbS8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OlxyXG4gICAgICBcIl4vKHVzL2VuLyhob21lfGpvYnM/L1teL10rfGFwcGx5KD86Ly4qKT98YXBwbGljYXRpb24oPzovLiopPyl8Y29udGVudC9jYXJlZXJzL3VzL2VuLy4qKSRcIlxyXG4gIH0sXHJcbiAgd29ya2RheToge1xyXG4gICAgZG9tYWluczogW1xyXG4gICAgICBcIm15d29ya2RheWpvYnMuY29tXCIsXHJcbiAgICAgIFwibXl3b3JrZGF5am9icy1pbXBsLmNvbVwiLFxyXG4gICAgICBcIm15d29ya2RheXNpdGUuY29tXCIsXHJcbiAgICAgIFwibXl3b3JrZGF5LmNvbVwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBrdWxhOiB7IGRvbWFpbnM6IFtcImNhcmVlcnMua3VsYS5haVwiXSwgcGF0aFJlZ2V4OiBcIl4vW14vXSsvW14vXStcIiB9LFxyXG4gIGljaW1zOiB7XHJcbiAgICBkb21haW5zOiBbXCJpY2ltcy5jb21cIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJpY2ltcy5jb21cIl0sXHJcbiAgICBpZnJhbWVPbmx5OiAhMCxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvXFxcXGQrKD86L3wkKVwiXHJcbiAgfSxcclxuICBkb3ZlcjogeyBkb21haW5zOiBbXCJkb3Zlci5jb21cIl0gfSxcclxuICBhZG9iZTogeyBkb21haW5zOiBbXCJjYXJlZXJzLmFkb2JlLmNvbVwiXSwgcGF0aFJlZ2V4OiBcIl4vW14vXSsvW14vXSsvYXBwbHlcIiB9LFxyXG4gIHpvaG9yZWNydWl0OiB7XHJcbiAgICBkb21haW5zOiBbXCJ6b2hvcmVjcnVpdC5jb21cIiwgXCJ6b2hvcmVjcnVpdC5jYVwiLCBcInpvaG9yZWNydWl0LmV1XCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiem9ob3JlY3J1aXQuY29tXCIsIFwiem9ob3JlY3J1aXQuY2FcIiwgXCJ6b2hvcmVjcnVpdC5ldVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvQ2FyZWVycy8uK1wiXHJcbiAgfSxcclxuICBnZW06IHsgZG9tYWluczogW1wiam9icy5nZW0uY29tXCJdLCBwYXRoUmVnZXg6IFwiXi9bXFxcXHctXSsvW1xcXFx3LV0rLz8kXCIgfSxcclxuICBndXN0bzoge1xyXG4gICAgZG9tYWluczogW1wiam9icy5ndXN0by5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9wb3N0aW5ncy9bXi9dKyg/Oi9hcHBsaWNhbnRzL25ldyg/Oi8uKik/KT8vPyRcIlxyXG4gIH0sXHJcbiAgaGlyaW5ndGhpbmc6IHtcclxuICAgIGRvbWFpbnM6IFtcclxuICAgICAgXCJoaXJpbmd0aGluZy5jb21cIixcclxuICAgICAgXCJvYXNpc3JlY3J1aXQuY29tXCIsXHJcbiAgICAgIFwiZWxldmF0ZS1hdHMuY29tXCIsXHJcbiAgICAgIFwicHJpc21oci1oaXJlLmNvbVwiLFxyXG4gICAgICBcImduYWhpcmluZy5jb21cIixcclxuICAgICAgXCJyaXBwbGluZy1hdHMuY29tXCJcclxuICAgIF0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2IvXFxcXGQrL1wiXHJcbiAgfSxcclxuICBodWJzcG90OiB7IHBhdHRlcm5zOiBbXCIqOi8vd3d3Lmh1YnNwb3QuY29tL2NhcmVlcnMvam9icy8qXCJdIH0sXHJcbiAgcGF5Y29tb25saW5lOiB7XHJcbiAgICBkb21haW5zOiBbXCJwYXljb21vbmxpbmUuY29tXCIsIFwicGF5Y29tb25saW5lLm5ldFwiXSxcclxuICAgIHVybFJlZ2V4OlxyXG4gICAgICBcIl4vdjQvYXRzL3dlYlxcXFwucGhwL3BvcnRhbC9bXi9dKy8oPzphcHBsaWNhdGlvbnMoPzpbLz8jXS4qKT98am9icy9bXi8/I10rKD86Wz8jXS4qKT8pXCJcclxuICB9LFxyXG4gIHRlYW10YWlsb3I6IHtcclxuICAgIGRvbWFpbnM6IFtcInRlYW10YWlsb3IuY29tXCIsIFwiY2FyZWVycy5ibHVlb3JhbmdlLmRpZ2l0YWxcIiwgXCJjYXJlZXJzLnRvdGFscGVyZm9ybS5jb21cIl0sXHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJ0ZWFtdGFpbG9yLWNkbi5jb21cIixcclxuICAgIHBhZ2VTb3VyY2VEb21haW46IFwidGVhbXRhaWxvci5jb21cIixcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvLitcIlxyXG4gIH0sXHJcbiAgY2F0c29uZToge1xyXG4gICAgZG9tYWluczogW1wiY2F0c29uZS5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9jYXJlZXJzL1teL10rL2pvYnMvW14vXSsoPzovYXBwbHkpPy8/JFwiXHJcbiAgfSxcclxuICBtZXRhY2FyZWVyczoge1xyXG4gICAgZG9tYWluczogW1wibWV0YWNhcmVlcnMuY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vcHJvZmlsZS8oY3JlYXRlX2FwcGxpY2F0aW9ufGpvYl9kZXRhaWxzKS9bXi9dK1wiXHJcbiAgfSxcclxuICB5Y29tYmluYXRvcjogeyBkb21haW5zOiBbXCJ3d3cueWNvbWJpbmF0b3IuY29tXCJdIH0sXHJcbiAgcmlwcGxlaGlyZTogeyBkb21haW5zOiBbXCJyaXBwbGVoaXJlLmNvbVwiXSB9LFxyXG4gIHBlcnNvbmlvOiB7XHJcbiAgICBkb21haW5zOiBbXCJwZXJzb25pby5kZVwiLCBcInBlcnNvbmlvLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYi9bXi8/I10rKD86L2FwcGx5KT8vPyRcIlxyXG4gIH0sXHJcbiAgY2FyZWVyc3BhZ2U6IHsgZG9tYWluczogW1wiY2FyZWVycy1wYWdlLmNvbVwiXSB9LFxyXG4gIGNhcmVlcnBsdWc6IHtcclxuICAgIGRvbWFpbnM6IFtcclxuICAgICAgXCJjYXJlZXJwbHVnLmNvbVwiLFxyXG4gICAgICBcInNmYWdlbnRqb2JzLmNvbVwiLFxyXG4gICAgICBcInNmYWdlbnRjYXJlZXJzLmNvbVwiLFxyXG4gICAgICBcImFwc2NhcmVlcnBvcnRhbC5jb21cIlxyXG4gICAgXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvXFxcXGQrL2FwcHMvbmV3XCJcclxuICB9LFxyXG4gIGNhcmVlcnN3aXRod2F5bW86IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vY2FyZWVycy53aXRod2F5bW8uY29tL2pvYnMvKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvKD8hc2VhcmNoKD86L3wkKSlbXi9dK1wiXHJcbiAgfSxcclxuICBzdWNjZXNzZmFjdG9yczogeyBkb21haW5zOiBbXCJzdWNjZXNzZmFjdG9ycy5ldVwiLCBcInN1Y2Nlc3NmYWN0b3JzLmNvbVwiLCBcInNhcHNmLmNvbVwiXSB9LFxyXG4gIGNsZWFyY29tcGFueToge1xyXG4gICAgZG9tYWluczogW1wiY2xlYXJjb21wYW55LmNvbVwiXSxcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5ocm1kaXJlY3QuY29tL2VtcGxveW1lbnQvam9iLW9wZW5pbmcucGhwKlwiXVxyXG4gIH0sXHJcbiAgYXNoYnk6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5hc2hieWhxLmNvbS8qLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJqb2JzLmFzaGJ5aHEuY29tXCIsIFwiYXNoYnlfamlkXCJdLFxyXG4gICAgcXVlcnlQYXJhbXM6IFtcImFzaGJ5X2ppZFwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL1teL10rL1swLTlhLWZdezh9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezEyfVwiXHJcbiAgfSxcclxuICBpc29sdmVkOiB7XHJcbiAgICBkb21haW5zOiBbXCJpc29sdmVkaGlyZS5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi8oPzphcHBseS98am9icy98aWZyYW1lL21vYmlsZS98YWNjb3VudC8pXCJcclxuICB9LFxyXG4gIGpvYmRpdmE6IHsgcGF0dGVybnM6IFtcIio6Ly8qLmpvYmRpdmEuY29tL3BvcnRhbC8qXCJdIH0sXHJcbiAgaW50dWl0OiB7XHJcbiAgICBkb21haW5zOiBbXCJpbnR1aXQtcXVpei5hcHAuaW50dWl0LmNvbVwiXSxcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovL2pvYnMuaW50dWl0LmNvbS9qb2IvKlwiLFxyXG4gICAgICBcIio6Ly9pbnR1aXQuYXZhdHVyZS5uZXQvKi9leHRlcm5hbENhcmVlcnMvSm9iQXBwbGljYXRpb24qXCJcclxuICAgIF0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJpbnR1aXQtcXVpei5hcHAuaW50dWl0LmNvbVwiXVxyXG4gIH0sXHJcbiAgamFjb2JzOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMuamFjb2JzLmNvbS9lbl9VUy9jYXJlZXJzLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6XHJcbiAgICAgIFwiXi9lbl9VUy9jYXJlZXJzLyhKb2JEZXRhaWx8UmVnaXN0ZXJ8QXBwbGljYXRpb25Gb3JtfEFwcGxpY2F0aW9uUmV2aWV3KSg/Oi98JClcIlxyXG4gIH0sXHJcbiAgc21hcnRyZWNydWl0ZXJzOiB7XHJcbiAgICBkb21haW5zOiBbXCJzbWFydHIubWVcIl0sXHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly9qb2JzLnNtYXJ0cmVjcnVpdGVycy5jb20vb25lY2xpY2stdWkvY29tcGFueS8qXCIsXHJcbiAgICAgIFwiKjovL2pvYnMuc21hcnRyZWNydWl0ZXJzLmNvbS8qLypcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgcGhlbm9tOiB7XHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJBUFBMWV9mb3JtX3JlbmRlcmVyLmpzXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcInBoZW5vbXBlb3BsZS5jb21cIixcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovL2pvYnMuYnN3aGVhbHRoLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnV2YWhlYWx0aC5vcmcvKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5kdWtlaGVhbHRoLm9yZy8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly93d3cuam9icy5hYmJvdHQvKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hc3BlbmRlbnRhbC5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5maXZlYmVsb3cuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuZm91cnNlYXNvbnMuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMua2JyLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLmt1ZWhuZS1uYWdlbC5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYXN0ZXJjYXJkLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1jYWZlZS5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vam9icy1jZWUucHdjLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnJvY2hlLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly93d3cudmNhY2FyZWVycy5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy53YXN0ZWNvbm5lY3Rpb25zLmNvbS8qL2FwcGx5KlwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBjaXNjbzogeyBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMuY2lzY28uY29tLyovYXBwbHkqXCJdIH0sXHJcbiAgdGVzbGE6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5qb2JzLnRlc2xhLmNvbS8qXCIsIFwiKjovLyoudGVzbGEuY29tL2NhcmVlcnMvKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCIvYXBwbHlcIlxyXG4gIH0sXHJcbiAgYW1hem9uOiB7IHBhdHRlcm5zOiBbXCIqOi8vKi5hbWF6b24uam9icy8qXCJdLCBwYXRoUmVnZXg6IFwiL2pvYnMvW1xcXFx3LV0rL2FwcGx5XCIgfSxcclxuICBhbWF6b251bml2ZXJzaXR5OiB7IHBhdHRlcm5zOiBbXCIqOi8vKi5hbWF6b251bml2ZXJzaXR5LmpvYnMvcHJvZmlsZSpcIl0gfSxcclxuICB1YmVyOiB7XHJcbiAgICBkb21haW5zOiBbXCJ1YmVyLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDpcclxuICAgICAgXCJeLyg/Oig/Oig/OlteL10rLyl7MSwyfSk/Y2FyZWVycy8oPzphcHBseSg/Oi98JCl8bGlzdC9bXi8/I10rKXwoPzpbXi9dKy8pP2pvYnMvW14vPyNdKy8/JClcIlxyXG4gIH0sXHJcbiAgdGlrdG9rOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLmxpZmVhdHRpa3Rvay5jb20vcmVzdW1lKlwiLFxyXG4gICAgICBcIio6Ly8qLnRpa3Rva3VzZHMuY29tLyovcmVzdW1lKlwiLFxyXG4gICAgICBcIio6Ly8qLnRpa3Rva3VzZHMuY29tLyovcG9zaXRpb24vKi9kZXRhaWwqXCJcclxuICAgIF1cclxuICB9LFxyXG4gIGJ5dGVkYW5jZToge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vKi5qb2JzLmJ5dGVkYW5jZS5jb20vZW4vcmVzdW1lKlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLmJ5dGVkYW5jZS5jb20vKi8qLyovZGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLmJ5dGVkYW5jZS5jb20vKi8qLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2pvYnMuYnl0ZWRhbmNlLmNvbS8qLyovYXBwbGllZCpcIixcclxuICAgICAgXCIqOi8vam9pbmJ5dGVkYW5jZS5jb20vc2VhcmNoLypcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgZ29vZ2xlOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2dvb2dsZS5jb20vYWJvdXQvY2FyZWVycy8qXCIsIFwiKjovLyouZ29vZ2xlLmNvbS9hYm91dC9jYXJlZXJzLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6XHJcbiAgICAgIFwiXi9hYm91dC9jYXJlZXJzL2FwcGxpY2F0aW9ucyg/Oi8oPzp1L1xcXFxkKy8pP2FwcGx5KD86L3wkKXwvam9icy9yZXN1bHRzL1teLz8jXSspXCIsXHJcbiAgICB1cmxSZWdleDogXCJeL2Fib3V0L2NhcmVlcnMvYXBwbGljYXRpb25zL2pvYnMvcmVzdWx0cyg/OlxcXFw/W14jXSopPyMuKls/JiNdamlkPVteJiNdK1wiXHJcbiAgfSxcclxuICBsZXZlcjoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9qb2JzLmxldmVyLmNvLyovKlwiLCBcIio6Ly9qb2JzLmV1LmxldmVyLmNvLyovKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImxldmVyLmNvXCJdLFxyXG4gICAgcXVlcnlQYXJhbXM6IFtcIkxldmVyQXBwSWRcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9bXi9dKy9bXi9dKyg/Oi9hcHBseSk/Lz8kXCJcclxuICB9LFxyXG4gIGpvYnZpdGU6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vam9icy5qb2J2aXRlLmNvbS8qL2pvYi8qXCIsIFwiKjovL2pvYnMuam9idml0ZS5jb20vKi9hcHBseSpcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJqb2JzLmpvYnZpdGUuY29tXCJdLFxyXG4gICAgcXVlcnlQYXJhbXM6IFtcImpvYnZpdGVpZnJhbWVcIl1cclxuICB9LFxyXG4gIGJyZWV6eTogeyBwYXR0ZXJuczogW1wiKjovLyouYnJlZXp5LmhyL3AvKlwiLCBcIio6Ly8qLmJyZWV6eS5oci8qL2FwcGx5KlwiXSB9LFxyXG4gIHdvcmthYmxlOiB7XHJcbiAgICBkb21haW5zOiBbXCJjYXJlZXJzLmFyYm9yLWVkdWNhdGlvbi5jb21cIl0sXHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2FwcGx5LndvcmthYmxlLmNvbS8qXCIsIFwiKjovL2pvYnMud29ya2FibGUuY29tLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJ3b3JrYWJsZS5jb21cIl0sXHJcbiAgICBxdWVyeVBhcmFtczogW1wic2VsZWN0ZWRKb2JJZFwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeLyg/OlteL10rL2ovW14vXSsoPzovYXBwbHkpPy8/JHwoPzpbYS16XXsyfS8pPyg/OnZpZXd8Y29tcGFueSkvW1xcXFx3LV0rKVwiXHJcbiAgfSxcclxuICBnb2hpcmU6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vam9icy5nb2hpcmUuaW8vKi8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiYXBwLmdvaGlyZS5pby93aWRnZXQvXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vW14vXSsvListXFxcXGQrLz8kXCJcclxuICB9LFxyXG4gIGJhbWJvb2hyOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouYmFtYm9vaHIuY29tL2pvYnMqXCIsIFwiKjovLyouYmFtYm9vaHIuY29tL2NhcmVlcnMqXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiYmFtYm9vaHIuY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vKD86am9ic3xjYXJlZXJzL1tcXFxcdy1dKlxcXFxkKVwiXHJcbiAgfSxcclxuICBicmFzc3Jpbmc6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5icmFzc3JpbmcuY29tL1RHbmV3VUkvKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImJyYXNzcmluZy5jb21cIl0sXHJcbiAgICB1cmxSZWdleDogXCIjKD86QXBwbHlwYWdlfGpvYkRldGFpbHM9KVwiXHJcbiAgfSxcclxuICBhZHA6IHtcclxuICAgIGRvbWFpbnM6IFtcIndvcmtmb3JjZW5vdy5hZHAuY29tXCJdLFxyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9yZWNydWl0aW5nLmFkcC5jb20vc3JjY2FyL3B1YmxpYy8qXCIsIFwiKjovL215am9icy5hZHAuY29tLyovY3gvKlwiXVxyXG4gIH0sXHJcbiAgb3JhY2xlY2xvdWQ6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyoub3JhY2xlY2xvdWQuY29tLyovQ2FuZGlkYXRlRXhwZXJpZW5jZS8qL3NpdGVzLyovam9iLypcIixcclxuICAgICAgXCIqOi8vKi5vcmFjbGVjbG91ZC5jb20vKi9DYW5kaWRhdGVFeHBlcmllbmNlLyovc2l0ZXMvKi8qL3ByZXZpZXcvKlwiLFxyXG4gICAgICBcIio6Ly8qLyovQ2FuZGlkYXRlRXhwZXJpZW5jZS8qL3NpdGVzLyovam9iLypcIixcclxuICAgICAgXCIqOi8vKi8qL0NhbmRpZGF0ZUV4cGVyaWVuY2UvKi9zaXRlcy8qLyovcHJldmlldy8qXCIsXHJcbiAgICAgIFwiKjovLyovKi9zaXRlcy8qL2pvYnMvcHJldmlldy8qL2FwcGx5LypcIlxyXG4gICAgXSxcclxuICAgIHBhdGhSZWdleDpcclxuICAgICAgXCIoPzovQ2FuZGlkYXRlRXhwZXJpZW5jZS8uKi9zaXRlcy9bXi9dKy9qb2IvW14vXSsoPzovYXBwbHkoPzovLiopPyk/Lz8kfC9hcHBseSlcIlxyXG4gIH0sXHJcbiAgdWx0aXBybzoge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vKi51bHRpcHJvLmNvbS8qL0pvYkJvYXJkLyovT3Bwb3J0dW5pdHlEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jb20vKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5QXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jb20vKi9Kb2JCb2FyZC8qL0FjY291bnQvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jYS8qL0pvYkJvYXJkLyovT3Bwb3J0dW5pdHlEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jYS8qL0pvYkJvYXJkLyovT3Bwb3J0dW5pdHlBcHBseSpcIixcclxuICAgICAgXCIqOi8vKi51bHRpcHJvLmNhLyovSm9iQm9hcmQvKi9BY2NvdW50L1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly8qLnJlYy5wcm8udWtnLm5ldC8qL0pvYkJvYXJkLyovT3Bwb3J0dW5pdHlEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovLyoucmVjLnByby51a2cubmV0LyovSm9iQm9hcmQvKi9PcHBvcnR1bml0eUFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLnJlYy5wcm8udWtnLm5ldC8qL0pvYkJvYXJkLyovQWNjb3VudC9SZWdpc3RlcipcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgcmlwcGxpbmc6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyoucmlwcGxpbmctYXRzLmNvbS9qb2IvKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vKi5yaXBwbGluZy1hdHMuY29tL2pvYnMvZW9wX3N1cnZleS8qXCJcclxuICAgIF0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJhdHMucmlwcGxpbmcuY29tXCJdXHJcbiAgfSxcclxuICByaXBwbGluZ0hvc3RlZDoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9hdHMucmlwcGxpbmcuY29tLyovam9icy8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vW14vXSsvam9icy9bXi9dKyg/Oi9hcHBseSg/Oi8uKik/KT8vPyRcIlxyXG4gIH0sXHJcbiAgZGF5Zm9yY2U6IHtcclxuICAgIGRvbWFpbnM6IFtcImpvYnMuZGF5Zm9yY2VoY20uY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vKD86W14vXSsvKStqb2JzL1teL10rKD86L2FwcGx5KD86Ly4qKT8pPy8/JFwiXHJcbiAgfSxcclxuICBkYXlmb3JjZUlkZW50aXR5OiB7XHJcbiAgICBwYXR0ZXJuczogW1wiaHR0cHM6Ly9kZmlkLmRheWZvcmNlaGNtLmNvbS9nbG9iYWxpZGVudGl0eS9hY2NvdW50LypcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9nbG9iYWxpZGVudGl0eS9hY2NvdW50Lyg/OnJlZ2lzdGVyfGxvZ2luKS8/JFwiXHJcbiAgfSxcclxuICB0YWxlbzoge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vKi50YWxlby5uZXQvKi9hcHBsaWNhdGlvbi5qc3MqXCIsXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0LyovZmxvdy5qc2YqXCIsXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0Lyovam9iYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0LyovYXRzL2NhcmVlcnMvKlwiLFxyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC9jYXJlZXJzZWN0aW9uLyovam9iZGV0YWlsLmZ0bCpcIixcclxuICAgICAgXCIqOi8vKi50YWxlby5uZXQvKi9odG1sUmVzb3VyY2VWaWV3ZXIuanNzKlwiLFxyXG4gICAgICBcIio6Ly8qLmJ1cm5zbWNkLmNvbS9hcHBseSpcIixcclxuICAgICAgXCIqOi8vKi5idXJuc21jZC5jb20vY2FyZWVyc2VjdGlvbi9hcHBsaWNhdGlvbi5qc3MqXCIsXHJcbiAgICAgIFwiKjovLyouYnVybnNtY2QuY29tL2NhcmVlcnNlY3Rpb24vZmxvdy5qc2YqXCIsXHJcbiAgICAgIFwiKjovLyouYnVybnNtY2QuY29tL2NhcmVlcnNlY3Rpb24vam9iYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyouYnVybnNtY2QuY29tL2NhcmVlcnNlY3Rpb24vaHRtbFJlc291cmNlVmlld2VyLmpzcypcIixcclxuICAgICAgXCIqOi8vdGFsZW50YWNxdWlzaXRpb24uM2RzLmNvbS8qL2FwcGxpY2F0aW9uLmpzcypcIixcclxuICAgICAgXCIqOi8vdGFsZW50YWNxdWlzaXRpb24uM2RzLmNvbS8qL2Zsb3cuanNmKlwiLFxyXG4gICAgICBcIio6Ly90YWxlbnRhY3F1aXNpdGlvbi4zZHMuY29tLyovam9iYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL3RhbGVudGFjcXVpc2l0aW9uLjNkcy5jb20vKi9hdHMvY2FyZWVycy8qXCIsXHJcbiAgICAgIFwiKjovL3RhbGVudGFjcXVpc2l0aW9uLjNkcy5jb20vKi9odG1sUmVzb3VyY2VWaWV3ZXIuanNzKlwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBlaWdodGZvbGQ6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5laWdodGZvbGQuYWkvY2FyZWVycypcIiwgXCIqOi8vKi5laWdodGZvbGQuYWkvY2FyZWVyaHViLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJlaWdodGZvbGQuYWlcIl0sXHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJlaWdodGZvbGRcIixcclxuICAgIHBhZ2VTb3VyY2VEb21haW46IFwiZWlnaHRmb2xkLmFpXCIsXHJcbiAgICB1cmxSZWdleDpcclxuICAgICAgXCIoPzpeL2NhcmVlcmh1Yi9leHBsb3JlL2pvYnMvKD8hYXBwbHkvPyg/Ols/I118JCkpW14vPyNdKy8/KD86Wz8jXS4qKT8kfF4vY2FyZWVyaHViL2V4cGxvcmUvam9icy9hcHBseS8/XFxcXD8oPz1bXiNdKlxcXFxicGlkPVteJiNdKylbXiNdKig/OiMuKik/JHxeL2NhcmVlcnMoPzovKD86am9iL1teLz8jXSsoPzovYXBwbHkpPyg/OlsvPyNdfCQpfGFwcGx5KD86Wy8/I118JCkpfFxcXFw/KD89KD86cGlkPVteJiNdK3xbXiNdKiZwaWQ9W14mI10rKSlbXiNdKig/OiMuKik/JCkpXCJcclxuICB9LFxyXG4gIGphenpocjogeyBwYXR0ZXJuczogW1wiKjovLyouYXBwbHl0b2pvYi5jb20vYXBwbHkvKlwiXSB9LFxyXG4gIHRyYWtzdGFyOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouaGlyZS50cmFrc3Rhci5jb20vam9icy8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vam9icy9bXi9dKy8/JFwiXHJcbiAgfSxcclxuICBmcmVzaHRlYW06IHsgcGF0dGVybnM6IFtcIio6Ly8qLmZyZXNodGVhbS5jb20vam9icy8qXCJdIH0sXHJcbiAgcGlucG9pbnRocToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLnBpbnBvaW50aHEuY29tLyovcG9zdGluZ3MvKlwiLCBcIio6Ly8qLnBpbnBvaW50aHEuY29tL3Bvc3RpbmdzLypcIl0sXHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJwaW5wb2ludGhxXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcInBpbnBvaW50aHEuY29tXCJcclxuICB9LFxyXG4gIHJlY3J1aXRlZToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLnJlY3J1aXRlZS5jb20vKi8qXCJdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwicmVjcnVpdGVlXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcInJlY3J1aXRlZS5jb21cIlxyXG4gIH0sXHJcbiAgdHJpbmV0aGlyZTogeyBwYXR0ZXJuczogW1wiKjovL2FwcC50cmluZXRoaXJlLmNvbS9jb21wYW5pZXMvKi9qb2JzLypcIl0gfSxcclxuICBqb2JzY29yZToge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vY2FyZWVycy5qb2JzY29yZS5jb20vYXBwbHlfZmxvdy8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuam9ic2NvcmUuY29tL2NhcmVlcnMvKi9qb2JzLypcIlxyXG4gICAgXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImpvYnNjb3JlLmNvbVwiXVxyXG4gIH0sXHJcbiAgcGF5bG9jaXR5OiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyoucGF5bG9jaXR5LmNvbS9yZWNydWl0aW5nLypcIiwgXCIqOi8vKi5wYXlsb2NpdHkuY29tL1JlY3J1aXRpbmcvKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcInBheWxvY2l0eS5jb21cIl0sXHJcbiAgICB1cmxSZWdleDogXCJeL1tScl1lY3J1aXRpbmcvW0pqXW9icy8oPzpbQWFdcHBseS98W0RkXWV0YWlscy9bXi8/I10rKD86Wy8/I118JCkpXCJcclxuICB9LFxyXG4gIGF2YXR1cmU6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9BcHBsaWNhdGlvbk1ldGhvZHMqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9BcHBsaWNhdGlvblF1ZXN0aW9ucypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvTGlua2VkSW5BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9MaW5rZWRJbkFwcGxpY2F0aW9uRm9ybSpcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL1lvdXJJbmZvcm1hdGlvbipcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC9jYW1wdXNBcHBseSpcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL0dlbmVyYWxJbmZvKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0L2NhcmVlcnMvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0L2NhcmVlcnMvSm9iRGV0YWlsLypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL2NhcmVlcnMvSm9iRGV0YWlsLypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL0V4dGVybmFsL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC9jYXJlZXJzL0xvY2F0aW9uQW5kUHJvZmlsZS8qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9jYXJlZXJzL0xvY2F0aW9uQW5kUHJvZmlsZS8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0FwcGxpY2F0aW9uRm9ybSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9BcHBsaWNhdGlvblF1ZXN0aW9ucypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvQXBwbGljYXRpb25SZXZpZXcqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9HZW5lcmFsSW5mbypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9BcHBsaWNhdGlvbkRvdEtub2NrZWRPdXRXaXphcmQqXCIsXHJcbiAgICAgIFwiKjovL2FwcGx5LmRlbG9pdHRlLmNvbS8qL2NhcmVlcnMvKlwiLFxyXG4gICAgICBcIio6Ly9hcHBseS5kZWxvaXR0ZS5jb20vKi9FeHRlcm5hbC8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uRm9ybSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9BcHBsaWNhdGlvblF1ZXN0aW9ucypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25SZXZpZXcqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9JbnZpdGVUb0FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9HZW5lcmFsSW5mbypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9Kb2JEZXRhaWwvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9Mb2NhdGlvbkFuZFByb2ZpbGUvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovRXh0ZXJuYWwvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvSW52aXRlVG9BcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvSm9iRGV0YWlsLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvTG9jYXRpb25BbmRQcm9maWxlLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL0V4dGVybmFsL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL0pvYkFwcGxpY2F0aW9uKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uRm9ybSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9BcHBsaWNhdGlvblF1ZXN0aW9ucypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9HZW5lcmFsSW5mbypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9Zb3VySW5mb3JtYXRpb24qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9BcHBsaWNhdGlvbk1ldGhvZHMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9BcHBsaWNhdGlvblF1ZXN0aW9ucypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9JbnZpdGVUb0FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9Kb2JEZXRhaWwvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvTG9jYXRpb25BbmRQcm9maWxlLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovRXh0ZXJuYWwvSm9iRGV0YWlsKlwiXHJcbiAgICBdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwiYXZhdHVyZVwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJhdmF0dXJlLm5ldFwiXHJcbiAgfSxcclxuICBva3RhOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL3d3dy5va3RhLmNvbS9jb21wYW55L2NhcmVlcnMvKi8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vY29tcGFueS9jYXJlZXJzLyg/IWpvYi1saXN0aW5nKD86L3wkKSlcIlxyXG4gIH0sXHJcbiAgY29tZWV0OiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouY29tZWV0LmNvbS9qb2JzLyovKi8qLypcIiwgXCIqOi8vKi5jb21lZXQuY28vam9icy8qLyovYXBwbHkqXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiY29tZWV0LmNvXCIsIFwiY29tZWV0LmNvbVwiXVxyXG4gIH0sXHJcbiAgYXBwbGU6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vam9icy5hcHBsZS5jb20vKi9kZXRhaWxzLypcIiwgXCIqOi8vam9icy5hcHBsZS5jb20vYXBwLyovYXBwbHkvKlwiXVxyXG4gIH0sXHJcbiAgcG9seW1lcjogeyBwYXR0ZXJuczogW1wiKjovL2pvYnMucG9seW1lci5jby8qLypcIl0gfSxcclxuICByZWNydWl0ZXJmbG93OiB7XHJcbiAgICBkb21haW5zOiBbXCJyZWNydWl0ZXJmbG93LmNvbVwiXSxcclxuICAgIHBhZ2VTb3VyY2VLZXl3b3JkOiBcInJlY3J1aXRlcmZsb3cuY29tXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcInJlY3J1aXRlcmZsb3cuY29tXCIsXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9bXi9dKy9qb2JzL1teLz8jXStcIlxyXG4gIH0sXHJcbiAgY2FyZWVyc3RvYXN0dGFiOiB7IHBhdHRlcm5zOiBbXCIqOi8vY2FyZWVycy50b2FzdHRhYi5jb20vam9icypcIl0gfVxyXG59XHJcbiIsIi8qKiBLZWVwIGpyX2lkIGluIHRoZSBVUkwgYWNyb3NzIFNQQSByZWRpcmVjdHMgKHBvcnRlZCBmcm9tIHN0aWNreS1qb2ItaWQpLiAqL1xuXG5jb25zdCBKUl9JRF9QQVJBTSA9IFwianJfaWRcIlxuXG5leHBvcnQgdHlwZSBLZWVwSm9iSWRPcHRpb25zID0ge1xuICBvcmlnaW5hbEhvc3Q6IHN0cmluZ1xuICBhbGxvd2VkUGF0aG5hbWU/OiBzdHJpbmdcbiAgZHVyYXRpb25Ncz86IG51bWJlclxuICBpbnRlcnZhbE1zPzogbnVtYmVyXG4gIG1heFJlc3RvcmF0aW9ucz86IG51bWJlclxuICBvblJlc3RvcmU/OiAoaW5mbzogeyBwYXRobmFtZTogc3RyaW5nOyByZXN0b3JhdGlvbkNvdW50OiBudW1iZXIgfSkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24ga2VlcEpvYklkSW5VcmwoXG4gIGpvYklkOiBzdHJpbmcsXG4gIG9wdGlvbnM6IEtlZXBKb2JJZE9wdGlvbnNcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCBkdXJhdGlvbk1zID0gb3B0aW9ucy5kdXJhdGlvbk1zID8/IDMwMDBcbiAgY29uc3QgaW50ZXJ2YWxNcyA9IG9wdGlvbnMuaW50ZXJ2YWxNcyA/PyAxMDBcbiAgY29uc3QgbWF4UmVzdG9yYXRpb25zID0gb3B0aW9ucy5tYXhSZXN0b3JhdGlvbnMgPz8gNVxuICBjb25zdCBzdGFydGVkQXQgPSBEYXRlLm5vdygpXG4gIGxldCByZXN0b3JhdGlvbkNvdW50ID0gMFxuXG4gIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ZWRBdCA+IGR1cmF0aW9uTXMpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgICAgaWYgKFxuICAgICAgICB1cmwuaG9zdG5hbWUudG9Mb3dlckNhc2UoKSAhPT0gb3B0aW9ucy5vcmlnaW5hbEhvc3QudG9Mb3dlckNhc2UoKSB8fFxuICAgICAgICAob3B0aW9ucy5hbGxvd2VkUGF0aG5hbWUgJiYgdXJsLnBhdGhuYW1lICE9PSBvcHRpb25zLmFsbG93ZWRQYXRobmFtZSlcbiAgICAgICkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmdldChKUl9JRF9QQVJBTSkgPT09IGpvYklkKSByZXR1cm5cbiAgICAgIGlmIChyZXN0b3JhdGlvbkNvdW50ID49IG1heFJlc3RvcmF0aW9ucykge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KEpSX0lEX1BBUkFNLCBqb2JJZClcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh3aW5kb3cuaGlzdG9yeS5zdGF0ZSwgXCJcIiwgdXJsLnRvU3RyaW5nKCkpXG4gICAgICByZXN0b3JhdGlvbkNvdW50ICs9IDFcbiAgICAgIG9wdGlvbnMub25SZXN0b3JlPy4oeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCByZXN0b3JhdGlvbkNvdW50IH0pXG4gICAgfSBjYXRjaCB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgIH1cbiAgfSwgaW50ZXJ2YWxNcylcblxuICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcilcbn1cbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJib290c3RyYXAuNGVjNjRjODQuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);