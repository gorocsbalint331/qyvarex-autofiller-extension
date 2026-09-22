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
})({"jyww8":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\clean-fill.ts",
    "bundleId": "ffd04b79c4ab41ba",
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

},{}],"7SyAi":[function(require,module,exports) {
/**
 * Clean-TS fill content script \u2014 native ATS fill without Parcel operations.
 * Runs alongside bootstrap; for personio/greenhouse/lever prefers clean path
 * when popup/icon requests fill via message `runCleanTsFill`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _nativeFiller = require("~contents/sites/native-filler");
const config = {
    matches: [
        "<all_urls>"
    ],
    all_frames: false,
    run_at: "document_idle",
    exclude_matches: [
        "https://jobright-team-site.vercel.app/*",
        "http://localhost:3210/*",
        "http://127.0.0.1:3210/*"
    ]
};
function installApi() {
    const site = (0, _nativeFiller.detectAtsSite)(location.hostname, location.href);
    window.__qyvarexCleanFill = {
        site,
        native: (0, _nativeFiller.isCleanTsNativeSite)(site),
        run: ()=>(0, _nativeFiller.runCleanTsFill)()
    };
    window.dispatchEvent(new CustomEvent("qyvarex:clean-fill-ready", {
        detail: {
            site,
            native: (0, _nativeFiller.isCleanTsNativeSite)(site)
        }
    }));
}
chrome.runtime.onMessage.addListener((message, _sender, sendResponse)=>{
    if (message?.name === "runCleanTsFill" || message?.message === "runCleanTsFill") {
        (0, _nativeFiller.runCleanTsFill)().then((report)=>sendResponse({
                ok: true,
                report
            })).catch((err)=>sendResponse({
                ok: false,
                message: err instanceof Error ? err.message : "fill_failed"
            }));
        return true;
    }
    return undefined;
});
installApi();

},{"~contents/sites/native-filler":"dWVet","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"dWVet":[function(require,module,exports) {
/**
 * Clean-TS BaseFiller \u2014 discover \u2192 answers \u2192 fill native fields \u2192 upload docs.
 * Replaces Parcel fill *operations* for sites with native HTML controls.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detectAtsSite", ()=>(0, _discoverFactory.detectAtsSite));
parcelHelpers.export(exports, "detectRegistryAts", ()=>(0, _discoverFactory.detectRegistryAts));
parcelHelpers.export(exports, "BaseFiller", ()=>BaseFiller);
parcelHelpers.export(exports, "CLEAN_TS_NATIVE_SITES", ()=>CLEAN_TS_NATIVE_SITES);
parcelHelpers.export(exports, "isCleanTsNativeSite", ()=>isCleanTsNativeSite);
parcelHelpers.export(exports, "runCleanTsFill", ()=>runCleanTsFill);
var _discoverFactory = require("~contents/crawler/discover-factory");
var _delay = require("~contents/crawler/utils/delay");
var _nativeAnswer = require("~contents/methods/native-answer");
var _nativeDom = require("~contents/methods/native-dom");
function findInputForLabel(label) {
    const want = label.replace(/\s*\*+\s*/g, " ").trim().toLowerCase();
    const labels = Array.from(document.querySelectorAll("label"));
    for (const lab of labels){
        const text = (lab.textContent || "").replace(/\s*\*+\s*/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
        if (text !== want && !text.startsWith(want)) continue;
        if (lab.htmlFor) {
            const byId = document.getElementById(lab.htmlFor);
            if (byId) return byId;
        }
        const nested = lab.querySelector("input, textarea, select");
        if (nested) return nested;
    }
    // aria-label / aria-labelledby fallback
    const controls = Array.from(document.querySelectorAll("input, textarea, select"));
    for (const el of controls){
        const aria = (el.getAttribute("aria-label") || "").toLowerCase();
        if (aria && aria.replace(/\s*\*/g, "").trim() === want) return el;
    }
    return null;
}
function collectRadios(nameOrEl) {
    const name = nameOrEl.name;
    if (name) return Array.from(document.querySelectorAll(`input[type="radio"][name="${CSS.escape(name)}"]`));
    const parent = nameOrEl.closest("fieldset, div, section") || document.body;
    return Array.from(parent.querySelectorAll('input[type="radio"]'));
}
function collectCheckboxes(el) {
    const parent = el.closest("fieldset, div, section") || document.body;
    return Array.from(parent.querySelectorAll('input[type="checkbox"]'));
}
class BaseFiller {
    site;
    hostname;
    href;
    constructor(opts){
        this.hostname = opts?.hostname || (typeof location !== "undefined" ? location.hostname : "");
        this.href = opts?.href || (typeof location !== "undefined" ? location.href : "");
        this.site = opts?.site || (0, _discoverFactory.detectAtsSite)(this.hostname, this.href);
    }
    discover(doc = document) {
        return (0, _discoverFactory.discoverFieldsForSite)(this.site, doc);
    }
    async fillField(field, value) {
        const el = findInputForLabel(field.label);
        if (!el) return false;
        if (field.type === "select" && el instanceof HTMLSelectElement) return (0, _nativeDom.fillSelectField)(el, value);
        if (field.type === "radio" && el instanceof HTMLInputElement) return (0, _nativeDom.fillRadioGroupField)(collectRadios(el), value);
        if (field.type === "checkbox" && el instanceof HTMLInputElement) {
            const n = await (0, _nativeDom.fillCheckboxField)(collectCheckboxes(el), value.split(/[,;]/).map((s)=>s.trim()).filter(Boolean));
            return n > 0;
        }
        if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
            await (0, _nativeDom.fillInputTextField)(el, value);
            return true;
        }
        return false;
    }
    async uploadResumeIfPresent() {
        const input = document.querySelector('input[type="file"][name*="cv" i], input[type="file"][name*="resume" i], input[type="file"][id*="cv" i], input[type="file"][id*="resume" i], input[type="file"]') || null;
        if (!input) return false;
        // Prefer CV/resume labelled input when multiple
        const wrappers = Array.from(document.querySelectorAll(".document-field-wrapper, [class*='document']"));
        let target = input;
        for (const w of wrappers){
            const label = (w.textContent || "").toLowerCase();
            if (/cover\s*letter|anschreiben/.test(label)) continue;
            if (/cv|resume|lebenslauf/.test(label)) {
                const f = w.querySelector('input[type="file"]');
                if (f) {
                    target = f;
                    break;
                }
            }
        }
        const file = await (0, _nativeAnswer.fetchResumeFile)();
        if (!file) return false;
        return (0, _nativeDom.uploadFiles)(target, file.file, file.fileName);
    }
    async uploadCoverLetterIfPresent() {
        const wrappers = Array.from(document.querySelectorAll(".document-field-wrapper, [class*='document']"));
        let input = null;
        for (const w of wrappers){
            const label = (w.textContent || "").toLowerCase();
            if (/cover\s*letter|anschreiben/.test(label)) {
                input = w.querySelector('input[type="file"]');
                if (input) break;
            }
        }
        if (!input) input = document.querySelector('input[type="file"][name*="cover" i], input[type="file"][id*="cover" i]');
        if (!input) return false;
        const file = await (0, _nativeAnswer.fetchCoverLetterFile)();
        if (!file) return false;
        return (0, _nativeDom.uploadFiles)(input, file.file, file.fileName);
    }
    async doFillForm(doc = document) {
        const fields = this.discover(doc);
        const answers = await (0, _nativeAnswer.fetchFormAnswers)(fields);
        const map = (0, _nativeAnswer.answerMap)(answers);
        const missed = [];
        let filled = 0;
        for (const field of fields){
            const value = (0, _nativeAnswer.lookupFieldAnswer)(map, field.label);
            if (!value) {
                missed.push(field.label);
                continue;
            }
            try {
                const ok = await this.fillField(field, value);
                if (ok) filled += 1;
                else missed.push(field.label);
            } catch  {
                missed.push(field.label);
            }
            await (0, _delay.delay)(40);
        }
        const resumeUploaded = await this.uploadResumeIfPresent();
        const coverLetterUploaded = await this.uploadCoverLetterIfPresent();
        return {
            site: this.site,
            discovered: fields.length,
            answered: answers.length,
            filled,
            missed,
            resumeUploaded,
            coverLetterUploaded
        };
    }
}
const CLEAN_TS_NATIVE_SITES = [
    "personio",
    "greenhouse",
    "lever",
    "generic",
    "ashby",
    "oraclecloud",
    "paycomonline-v3",
    "myworkday"
];
function isCleanTsNativeSite(site) {
    return CLEAN_TS_NATIVE_SITES.includes(site);
}
async function runCleanTsFill(opts) {
    const filler = new BaseFiller(opts);
    return filler.doFillForm();
}

},{"~contents/crawler/discover-factory":"dfxf9","~contents/crawler/utils/delay":"1kcE1","~contents/methods/native-answer":"7WGaQ","~contents/methods/native-dom":"dMvar","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"dfxf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FIELD_TYPE", ()=>(0, _types.FIELD_TYPE));
parcelHelpers.export(exports, "detectRegistryAts", ()=>(0, _detectRegistry.detectRegistryAts));
parcelHelpers.export(exports, "detectAtsSite", ()=>detectAtsSite);
parcelHelpers.export(exports, "discoverFieldsForSite", ()=>discoverFieldsForSite);
parcelHelpers.export(exports, "discoverFieldsFromLocation", ()=>discoverFieldsFromLocation);
var _discoverGreenhouse = require("~contents/crawler/discover-greenhouse");
var _discoverGeneric = require("~contents/crawler/discover-generic");
var _discoverLever = require("~contents/crawler/discover-lever");
var _discoverPersonio = require("~contents/crawler/discover-personio");
var _discoverWorkday = require("~contents/crawler/discover-workday");
var _detectRegistry = require("~contents/crawler/detect-registry");
var _types = require("~contents/crawler/types");
/** Map registry keys \u2192 Clean-TS discover adapters we own. */ const REGISTRY_TO_CLEAN = {
    personio: "personio",
    greenhouse: "greenhouse",
    lever: "lever",
    workday: "myworkday",
    myworkday: "myworkday",
    ashby: "ashby",
    oraclecloud: "oraclecloud",
    paycom: "paycomonline-v3",
    paycomonline: "paycomonline-v3"
};
function detectAtsSite(hostname, href = "") {
    const h = (hostname || "").toLowerCase();
    const u = (href || "").toLowerCase();
    // Fast paths (fixtures / common hosts)
    if (h.includes("personio.") || h.includes("jobs.personio")) return "personio";
    if (h.includes("greenhouse.io") || h.includes("boards.greenhouse") || u.includes("gh_jid=")) return "greenhouse";
    if (h.includes("lever.co") || h.includes("jobs.lever")) return "lever";
    if (h.includes("myworkdayjobs.com") || h.includes("workday.com")) return "myworkday";
    if (h.includes("ashbyhq.com") || h.includes("jobs.ashby")) return "ashby";
    if (h.includes("oraclecloud.com") || h.includes("fa.oracle")) return "oraclecloud";
    if (h.includes("paycomonline") || h.includes("paycom.com")) return "paycomonline-v3";
    const registered = (0, _detectRegistry.detectRegistryAts)(hostname, href);
    if (registered && REGISTRY_TO_CLEAN[registered]) return REGISTRY_TO_CLEAN[registered];
    // Unknown but registered ATS \u2192 generic native fill still helps
    if (registered) return "generic";
    return "generic";
}
function discoverFieldsForSite(site, doc) {
    switch(site){
        case "personio":
            return (0, _discoverPersonio.discoverPersonioFields)(doc);
        case "greenhouse":
            return (0, _discoverGreenhouse.discoverGreenhouseFields)(doc);
        case "lever":
            return (0, _discoverLever.discoverLeverFields)(doc);
        case "myworkday":
            return (0, _discoverWorkday.discoverWorkdayFields)(doc);
        case "ashby":
        case "oraclecloud":
        case "paycomonline-v3":
        default:
            return (0, _discoverGeneric.discoverGenericFields)(doc);
    }
}
function discoverFieldsFromLocation(doc, hostname, href = "") {
    const site = detectAtsSite(hostname, href);
    const registryId = (0, _detectRegistry.detectRegistryAts)(hostname, href);
    return {
        site,
        fields: discoverFieldsForSite(site, doc),
        registryId
    };
}

},{"~contents/crawler/discover-greenhouse":"215pX","~contents/crawler/discover-generic":"kYeSD","~contents/crawler/discover-lever":"7RG71","~contents/crawler/discover-personio":"kK4ch","~contents/crawler/discover-workday":"eFmw7","~contents/crawler/detect-registry":"8mwCD","~contents/crawler/types":"3nY6i","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"215pX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Greenhouse boards / embedded apply forms. */ parcelHelpers.export(exports, "discoverGreenhouseFields", ()=>discoverGreenhouseFields);
var _discoverGeneric = require("~contents/crawler/discover-generic");
function discoverGreenhouseFields(doc) {
    return (0, _discoverGeneric.discoverGenericFields)(doc, {
        preferRootSelector: "#application_form, form#application-form, form"
    });
}

},{"~contents/crawler/discover-generic":"kYeSD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"kYeSD":[function(require,module,exports) {
/**
 * Generic ATS form discovery \u2014 works for native label/input HTML.
 * Linkedom-safe (no DOM instanceof).
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "discoverGenericFields", ()=>discoverGenericFields);
const FIELD_SELECTOR = 'input:not([type="hidden"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]), textarea, select';
function collapseWs(text) {
    return (text || "").replace(/\s+/g, " ").trim();
}
function cleanLabel(text) {
    return collapseWs(text).replace(/\s*\*+\s*/g, " ").replace(/\(\s*(required|erforderlich|optional)\s*\)/gi, "").replace(/\s+/g, " ").trim();
}
function classStr(el) {
    const c = el.className;
    return typeof c === "string" ? c : c?.toString?.() || "";
}
function isVisible(el) {
    if (!el?.getAttribute) return false;
    if (el.getAttribute("aria-hidden") === "true" || el.hidden) return false;
    if (el.closest?.("[aria-hidden='true'], [hidden]")) return false;
    return true;
}
function isFillable(el) {
    const tag = (el.tagName || "").toUpperCase();
    if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") return false;
    if (el.disabled) return false;
    if (tag === "INPUT" && [
        "hidden",
        "file",
        "submit",
        "button",
        "reset",
        "image"
    ].includes(el.type || "")) return false;
    return isVisible(el);
}
function list(selRoot, selector) {
    const root = selRoot;
    const nodes = root.querySelectorAll?.(selector);
    return nodes ? Array.from(nodes) : [];
}
function pickFormRoot(doc, preferSelector) {
    const body = doc.body || doc.documentElement;
    if (preferSelector) {
        const preferred = doc.querySelector?.(preferSelector);
        if (preferred && isVisible(preferred)) return preferred;
    }
    const forms = list(doc, "form").filter(isVisible);
    let best = null;
    let bestScore = -1;
    for (const form of forms){
        const fields = list(form, FIELD_SELECTOR).filter(isFillable).length;
        const labels = list(form, "label, legend").filter(isVisible).length;
        const score = 10 * fields + labels;
        if (score > bestScore) {
            bestScore = score;
            best = form;
        }
    }
    return best || body;
}
function fieldContainer(el, root) {
    const maxSiblings = (el.tagName || "").toUpperCase() === "INPUT" && [
        "radio",
        "checkbox"
    ].includes(el.type || "") ? 12 : 4;
    let node = el.parentElement;
    let best = el.parentElement || root;
    const body = el.ownerDocument?.body ?? null;
    while(node && node !== root && node !== body){
        const classId = `${node.id || ""} ${classStr(node)}`;
        const siblingCount = list(node, FIELD_SELECTOR).filter(isFillable).length;
        const hasLabel = !!node.querySelector?.("label, legend");
        const looksLikeField = /field|form|question|group|row|item|control|wrapper|input/i.test(classId);
        if ((hasLabel || looksLikeField) && siblingCount <= maxSiblings) return node;
        if (hasLabel || looksLikeField) best = node;
        node = node.parentElement;
    }
    return best;
}
function labelForId(root, id) {
    if (!id) return null;
    const safe = id.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    try {
        const hit = root.querySelector?.(`label[for="${safe}"]`) || null;
        return hit && isVisible(hit) ? hit : null;
    } catch  {
        return null;
    }
}
function resolveLabel(el, container) {
    const byFor = el.id && (labelForId(container, el.id) || labelForId(el.ownerDocument, el.id));
    if (byFor) {
        const text = cleanLabel(byFor.textContent);
        if (text) return text;
    }
    const closestLabel = el.closest?.("label");
    if (closestLabel && isVisible(closestLabel)) {
        const text = cleanLabel(closestLabel.textContent);
        if (text) return text;
    }
    const aria = cleanLabel(el.getAttribute?.("aria-label"));
    if (aria && !/^(select|choose|option|yes|no|upload|browse)$/i.test(aria)) return aria;
    const labelledBy = (el.getAttribute?.("aria-labelledby") || "").split(/\s+/).filter(Boolean).map((id)=>el.ownerDocument?.getElementById?.(id) || null).filter((n)=>!!n && isVisible(n)).map((n)=>n.textContent).join(" ");
    const ariaText = cleanLabel(labelledBy);
    if (ariaText) return ariaText;
    const candidates = list(container, "label, legend, h1, h2, h3, h4, h5, h6, p, span, div").filter((n)=>{
        if (!isVisible(n)) return false;
        if (n.contains?.(el) && n.tagName !== "LABEL") return false;
        const t = cleanLabel(n.textContent);
        return !!t && !/^(select|choose|option|yes|no|upload|browse)$/i.test(t);
    });
    return cleanLabel(candidates[0]?.textContent);
}
function isRequired(el, container) {
    if (el.hasAttribute?.("required") || el.getAttribute?.("aria-required") === "true") return true;
    return /\*|required|erforderlich/i.test(container.textContent || "");
}
function selectOptions(select) {
    const opts = select.options ? Array.from(select.options) : [];
    return opts.map((o)=>collapseWs(o.textContent).replace(/\s*\*+\s*/g, " ").trim()).filter((t)=>t && !/^(select|please select|--)$/i.test(t));
}
function discoverGenericFields(doc, opts = {}) {
    const root = pickFormRoot(doc, opts.preferRootSelector);
    const nodes = list(root, FIELD_SELECTOR).filter(isFillable);
    const out = [];
    const seen = new Set();
    for (const el of nodes){
        if (seen.has(el)) continue;
        const tag = (el.tagName || "").toUpperCase();
        if (tag === "INPUT" && (el.type === "radio" || el.type === "checkbox")) {
            const container = fieldContainer(el, root);
            const group = list(container, `input[type="${el.type}"]`).filter(isFillable);
            const named = el.name || el.id ? group.filter((g)=>g.name === el.name || g.id === el.id) : group;
            for (const g of named)seen.add(g);
            const label = resolveLabel(el, container);
            if (!label) continue;
            const options = named.map((g)=>{
                const lab = g.id && labelForId(container, g.id)?.textContent || g.closest?.("label")?.textContent || g.getAttribute?.("aria-label") || g.value;
                return collapseWs(lab);
            }).filter(Boolean);
            out.push({
                type: el.type === "radio" ? "radio" : "checkbox",
                label,
                required: named.some((g)=>isRequired(g, container)),
                options
            });
            continue;
        }
        seen.add(el);
        const container = fieldContainer(el, root);
        const label = resolveLabel(el, container);
        if (!label) continue;
        if (tag === "SELECT") {
            out.push({
                type: "select",
                label,
                required: isRequired(el, container),
                options: selectOptions(el)
            });
            continue;
        }
        out.push({
            type: tag === "TEXTAREA" ? "textarea" : "text",
            label,
            required: isRequired(el, container)
        });
    }
    return out;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports) {
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

},{}],"7RG71":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Lever hire apply forms. */ parcelHelpers.export(exports, "discoverLeverFields", ()=>discoverLeverFields);
var _discoverGeneric = require("~contents/crawler/discover-generic");
function discoverLeverFields(doc) {
    return (0, _discoverGeneric.discoverGenericFields)(doc, {
        preferRootSelector: ".application-form, form#application-form, form"
    });
}

},{"~contents/crawler/discover-generic":"kYeSD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"kK4ch":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Personio careers apply pages \u2014 native form fields. */ parcelHelpers.export(exports, "discoverPersonioFields", ()=>discoverPersonioFields);
var _discoverGeneric = require("~contents/crawler/discover-generic");
function discoverPersonioFields(doc) {
    return (0, _discoverGeneric.discoverGenericFields)(doc, {
        preferRootSelector: "form.application-form, form"
    });
}

},{"~contents/crawler/discover-generic":"kYeSD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"eFmw7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Workday apply \u2014 many widgets are custom; this discovers native inputs present
 * in the fixture / simplified pages. Full Workday ops stay in the engine bundle.
 */ parcelHelpers.export(exports, "discoverWorkdayFields", ()=>discoverWorkdayFields);
var _discoverGeneric = require("~contents/crawler/discover-generic");
function discoverWorkdayFields(doc) {
    return (0, _discoverGeneric.discoverGenericFields)(doc, {
        preferRootSelector: '[data-automation-id="applyFlow"], form, body'
    });
}

},{"~contents/crawler/discover-generic":"kYeSD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"8mwCD":[function(require,module,exports) {
/**
 * Resolve ATS id from hostname/href using the Jobright site registry.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Best-effort ATS id from SITE_REGISTRY (greenhouse, workday, \u2026).
 * Returns null when nothing matches.
 */ parcelHelpers.export(exports, "detectRegistryAts", ()=>detectRegistryAts);
var _supportedSites = require("~core/supported-sites");
function hostMatchesDomain(hostname, domain) {
    const h = hostname.toLowerCase();
    const d = domain.toLowerCase();
    return h === d || h.endsWith("." + d);
}
function hostMatchesPattern(hostname, pattern) {
    // MatchPattern-like: *://*.example.com/* or *://example.com/*
    const m = /^[^:]+:\/\/([^/]+)/.exec(pattern);
    if (!m) return false;
    let host = m[1].toLowerCase();
    if (host.startsWith("*.")) {
        const base = host.slice(2);
        return hostname === base || hostname.endsWith("." + base);
    }
    if (host === "*") return true;
    return hostname === host || hostname.endsWith("." + host);
}
function pathOk(pathname, href, site) {
    if (site.pathRegex) try {
        if (!new RegExp(site.pathRegex).test(pathname)) return false;
    } catch  {
        return false;
    }
    if (site.urlRegex) try {
        if (!new RegExp(site.urlRegex).test(href)) return false;
    } catch  {
        return false;
    }
    return true;
}
function detectRegistryAts(hostname, href = "") {
    const h = (hostname || "").toLowerCase();
    let pathname = "/";
    try {
        pathname = href ? new URL(href).pathname : "/";
    } catch  {
        pathname = "/";
    }
    let best = null;
    for (const [id, site] of Object.entries((0, _supportedSites.SITE_REGISTRY))){
        let score = 0;
        const domains = site.domains ?? [];
        const patterns = site.patterns ?? [];
        for (const d of domains)if (hostMatchesDomain(h, d)) score = Math.max(score, d.length + 10);
        for (const p of patterns)if (hostMatchesPattern(h, p)) score = Math.max(score, 20);
        if (score === 0) continue;
        if (!pathOk(pathname, href || `https://${h}/`, site)) continue;
        // Prefer constrained path matches
        if (site.pathRegex || site.urlRegex) score += 50;
        if (!best || score > best.score) best = {
            id,
            score
        };
    }
    return best?.id ?? null;
}

},{"~core/supported-sites":"4oKit","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"4oKit":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"3nY6i":[function(require,module,exports) {
/** Shared field types for the clean-TS crawler (mirrors engine FIELD_TYPE subset). */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FIELD_TYPE", ()=>FIELD_TYPE);
const FIELD_TYPE = {
    TEXT: "text",
    TEXTAREA: "textarea",
    SELECT: "select",
    CHECKBOX: "checkbox",
    RADIO: "radio",
    RADIOGROUP: "radiogroup",
    DATE: "date",
    FILE: "file"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"1kcE1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delay", ()=>delay);
parcelHelpers.export(exports, "executeSequentially", ()=>executeSequentially);
function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
async function executeSequentially(steps, defaultDelayMs = 80) {
    for (const step of steps)if (typeof step === "function") {
        await step();
        await delay(defaultDelayMs);
    } else {
        await step.func();
        await delay(step.delay ?? defaultDelayMs);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7WGaQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Strip punctuation (keep CJK) \u2014 oracle `removeSpecialCharacters`. */ parcelHelpers.export(exports, "removeSpecialCharacters", ()=>removeSpecialCharacters);
/** Label equality after stripping punctuation / asterisks / whitespace. */ parcelHelpers.export(exports, "isMatched", ()=>isMatched);
parcelHelpers.export(exports, "ensureArray", ()=>ensureArray);
/** Parse `YYYY-MM-DD` (or / .) into year / short month / day. */ parcelHelpers.export(exports, "parseDateParts", ()=>parseDateParts);
/**
 * Ask background getGptResults for answers mapped to discovered labels.
 */ parcelHelpers.export(exports, "fetchFormAnswers", ()=>fetchFormAnswers);
parcelHelpers.export(exports, "fetchResumeFile", ()=>fetchResumeFile);
parcelHelpers.export(exports, "fetchCoverLetterFile", ()=>fetchCoverLetterFile);
parcelHelpers.export(exports, "answerMap", ()=>answerMap);
parcelHelpers.export(exports, "lookupFieldAnswer", ()=>lookupFieldAnswer);
var _messaging = require("@plasmohq/messaging");
/** Loose messaging wrapper \u2014 extension BG handlers are not typed in this package. */ async function sendToBackground(msg) {
    return (0, _messaging.sendToBackground)(msg);
}
const NON_ALNUM_EXCEPT_CJK = /[^a-zA-Z0-9\s\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/g;
function removeSpecialCharacters(text) {
    return text.replace(NON_ALNUM_EXCEPT_CJK, "");
}
function isMatched(a, b) {
    if (!a || !b || typeof a !== "string" || typeof b !== "string") return false;
    const left = removeSpecialCharacters(a).replace(/\s*\*\s*/g, "").replace(/\s+/g, " ").toLowerCase().trim();
    const right = removeSpecialCharacters(b).replace(/\s*\*\s*/g, "").replace(/\s+/g, " ").toLowerCase().trim();
    return !!left && !!right && left === right;
}
function ensureArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}
function parseDateParts(raw) {
    try {
        if (!raw || typeof raw !== "string") return {
            year: "",
            month: "",
            day: ""
        };
        const normalized = raw.replace(/[/.]/g, "-").trim();
        const parts = normalized.split("-");
        if (parts.length < 2) return {
            year: "",
            month: "",
            day: ""
        };
        const [year, monthNum, day] = parts;
        const MONTHS = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        const monthIndex = Number(monthNum) - 1;
        const month = monthIndex >= 0 && monthIndex < 12 ? MONTHS[monthIndex] : "";
        return {
            year: year || "",
            month,
            day: day ? day.replace(/^0/, "") : ""
        };
    } catch  {
        return {
            year: "",
            month: "",
            day: ""
        };
    }
}
async function fetchFormAnswers(fields) {
    const elements = fields.map((f)=>({
            label: f.label,
            type: f.type,
            options: f.options || []
        }));
    const res = await sendToBackground({
        name: "getGptResults",
        body: {
            params: {
                elements,
                parser: "internal",
                source: "cleanTs",
                url: typeof location !== "undefined" ? location.href : ""
            }
        }
    });
    const list = res?.data?.fill_data_list;
    if (!Array.isArray(list)) return [];
    return list.map((row)=>({
            name: String(row?.name || ""),
            value: Array.isArray(row?.value) ? String(row.value[0] ?? "") : String(row?.value ?? "")
        })).filter((r)=>r.name && r.value);
}
async function fetchResumeFile() {
    const res = await sendToBackground({
        name: "getResumeBlob",
        body: {}
    });
    if (!res?.ok || !res.base64URL) return null;
    const file = await dataUrlToFile(res.base64URL, res.fileName || `resume.${res.extension || "pdf"}`, res.mimeType);
    return {
        file,
        fileName: file.name
    };
}
async function fetchCoverLetterFile() {
    const res = await sendToBackground({
        name: "getCoverLetterBlob",
        body: {}
    });
    if (!res?.ok || !res.base64URL) return null;
    const file = await dataUrlToFile(res.base64URL, res.fileName || `cover-letter.${res.extension || "pdf"}`, res.mimeType);
    return {
        file,
        fileName: file.name
    };
}
async function dataUrlToFile(dataUrl, fileName, mimeHint) {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([
        blob
    ], fileName, {
        type: mimeHint || blob.type || "application/pdf"
    });
}
function answerMap(answers) {
    const m = new Map();
    for (const a of answers){
        m.set(a.name.trim().toLowerCase(), a.value);
        m.set(a.name.replace(/\s*\*+\s*/g, " ").trim().toLowerCase(), a.value);
    }
    return m;
}
function lookupFieldAnswer(map, label) {
    const key = label.replace(/\s*\*+\s*/g, " ").trim().toLowerCase();
    return map.get(key) || map.get(label.trim().toLowerCase()) || null;
}

},{"@plasmohq/messaging":"k3omK","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"k3omK":[function(require,module,exports) {
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

},{"./url-alphabet/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"dMvar":[function(require,module,exports) {
/**
 * Shared DOM fill primitives for clean-TS autofill.
 *
 * Lives in the extension (`src/contents/methods`).
 * Parcel reference: engine/helper-app/src/contents/methods/dom.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Dispatch typed DOM events (mousedown/click/focus/input/\u2026) like the oracle. */ parcelHelpers.export(exports, "triggerEvents", ()=>triggerEvents);
parcelHelpers.export(exports, "fillInputTextField", ()=>fillInputTextField);
/**
 * Oracle-shaped checkbox/radio group fill (`field.$checkboxs`, `field.label`).
 * Returns `false` on ambiguous multi-match; otherwise void/undefined like the oracle.
 */ parcelHelpers.export(exports, "fillCheckBoxesField", ()=>fillCheckBoxesField);
/** Simple label-list fill used by BaseFiller / Personio. */ parcelHelpers.export(exports, "fillCheckboxField", ()=>fillCheckboxField);
/**
 * Focus a <select> and pick the first option matching any answer via isMatched.
 * Also accepts a single string (BaseFiller / Personio).
 */ parcelHelpers.export(exports, "fillSelectField", ()=>fillSelectField);
/** Exact option `.text` or `.title` match (no fuzzy). */ parcelHelpers.export(exports, "fillOriginSelectField", ()=>fillOriginSelectField);
parcelHelpers.export(exports, "fillRadioGroupField", ()=>fillRadioGroupField);
parcelHelpers.export(exports, "fillSingleCheckbox", ()=>fillSingleCheckbox);
/**
 * Attach a File / Blob to a file input (clean-TS).
 * Oracle also accepts a prepared `{ files: FileList }` + progress callbacks.
 */ parcelHelpers.export(exports, "uploadFiles", ()=>uploadFiles);
/** Tell the top frame the agent covered letter status changed. */ parcelHelpers.export(exports, "postCoverLetterStatus", ()=>postCoverLetterStatus);
parcelHelpers.export(exports, "fillDefaultInputField", ()=>(0, _input.fillDefaultInputField));
parcelHelpers.export(exports, "fillCheckbox", ()=>(0, _checkbox.fillCheckbox));
parcelHelpers.export(exports, "delay", ()=>(0, _delay.delay));
var _input = require("~contents/crawler/utils/input");
var _checkbox = require("~contents/crawler/utils/checkbox");
var _delay = require("~contents/crawler/utils/delay");
var _choiceMatch = require("~contents/methods/choice-match");
var _checkboxLabel = require("~contents/methods/checkbox-label");
var _nativeAnswer = require("~contents/methods/native-answer");
var _enums = require("~core/enums");
/** Aliases when answers map true/false / job boards to visible labels. */ const ANSWER_ALIAS = {
    true: "yes",
    false: "no",
    linkedin: "linkedin.com",
    indeed: "indeed.com"
};
function triggerEvents(el, eventNames = [
    "input",
    "change",
    "blur"
]) {
    if (!el) return;
    for (const name of eventNames){
        let ev;
        if ((name === "mousedown" || name === "mouseup" || name === "click") && typeof MouseEvent === "function") ev = new MouseEvent(name, {
            bubbles: true,
            cancelable: true
        });
        else if ((name === "focus" || name === "blur") && typeof FocusEvent === "function") ev = new FocusEvent(name, {
            bubbles: true,
            cancelable: true
        });
        else if (name === "input" && typeof InputEvent === "function") {
            const value = "value" in el && typeof el.value === "string" ? el.value : null;
            ev = new InputEvent(name, {
                bubbles: true,
                cancelable: true,
                data: value,
                inputType: "insertText"
            });
        } else ev = new Event(name, {
            bubbles: true,
            cancelable: true
        });
        el.dispatchEvent(ev);
    }
}
async function fillInputTextField(input, value) {
    await (0, _input.fillDefaultInputField)(input, value);
}
function choiceLabelText(inputEl) {
    const fromControl = (0, _checkboxLabel.normalizeRadioCheckText)((0, _checkboxLabel.getRadioCheckText)(inputEl));
    if (fromControl) return fromControl;
    return "";
}
function labelMatchesAnswer(labelText, answer) {
    const normalized = typeof answer === "string" || typeof answer === "number" ? String(answer).toLowerCase().trim() : "";
    return !!normalized && (0, _choiceMatch.isExactChoiceMatch)(labelText, normalized);
}
/**
 * Decide whether a single checkbox should be checked given answer list + field label.
 * Handles yes/no, "have read", and "current" employment heuristics.
 */ async function maybeCheckSingleBox(inputEl, answers, fieldLabel, fillFn = (0, _checkbox.fillCheckbox)) {
    const labelText = choiceLabelText(inputEl);
    if (!labelText) return;
    if (answers.some((a)=>labelMatchesAnswer(labelText, a))) {
        await fillFn(inputEl, true);
        return;
    }
    const first = String(answers[0] ?? "").toLowerCase();
    const label = String(fieldLabel ?? "").toLowerCase();
    const shouldCheck = first === "true" && labelText === "yes" || first === "false" && labelText === "no" || labelText.includes("have read") && first === "true" || (0, _nativeAnswer.isMatched)(labelText, fieldLabel ?? "") && first === "true" || first === "true" && (labelText.includes("current") || label.includes("current")) || label.includes("current") && first === "true";
    if (shouldCheck) await fillFn(inputEl, true);
}
async function fillCheckBoxesField(field, rawAnswers, fillFn = (0, _checkbox.fillCheckbox)) {
    // Back-compat: BaseFiller passes (boxes[], string[])
    if (Array.isArray(field) && !field.$checkboxs) return fillCheckboxField(field, rawAnswers);
    const answers = (Array.isArray(rawAnswers) ? rawAnswers : [
        rawAnswers
    ]).filter((a)=>(0, _choiceMatch.normalizeChoiceText)(a));
    if (!answers.length) return false;
    const boxField = field;
    const inputs = Array.from(boxField.$checkboxs ?? []);
    const isMultiOrRadio = inputs.length > 1 || inputs.some((el)=>el.type === "radio");
    if (isMultiOrRadio) {
        const selected = new Set();
        const allRadios = inputs.every((el)=>el.type === "radio");
        for (const answer of answers){
            const want = (0, _choiceMatch.normalizeChoiceText)(answer);
            if (!want) continue;
            const exactHits = inputs.filter((el)=>(0, _choiceMatch.isExactChoiceMatch)(choiceLabelText(el), want));
            if (exactHits.length > 1) return false;
            let match = (0, _choiceMatch.findExactChoice)(inputs, want, choiceLabelText);
            if (!match) {
                const alias = ANSWER_ALIAS[want];
                if (alias) {
                    const aliasHits = inputs.filter((el)=>(0, _choiceMatch.isExactChoiceMatch)(choiceLabelText(el), alias));
                    if (aliasHits.length > 1) return false;
                    match = (0, _choiceMatch.findExactChoice)(inputs, alias, choiceLabelText);
                }
            }
            if (!match) {
                if (allRadios) continue;
                return false;
            }
            selected.add(match);
            if (allRadios) break;
        }
        if (!selected.size) return false;
        for (const el of selected)await fillFn(el, true);
        return;
    }
    for (const box of inputs)await maybeCheckSingleBox(box, answers, boxField.label, fillFn);
}
async function fillCheckboxField(boxes, values) {
    let filled = 0;
    for (const want of values){
        const match = (0, _choiceMatch.findExactChoice)(boxes, want, choiceLabelText);
        if (match) {
            await (0, _checkbox.fillCheckbox)(match, true);
            filled += 1;
        }
    }
    return filled;
}
async function fillSelectField(select, answers) {
    if (!select) return false;
    const list = (Array.isArray(answers) ? answers : [
        answers
    ]).filter(Boolean);
    if (!list.length) return false;
    const focusEv = new FocusEvent("focus", {
        bubbles: true,
        cancelable: true,
        view: window
    });
    select.dispatchEvent(focusEv);
    select.focus();
    if (select.options?.length) for(let i = 0; i < select.options.length; i++){
        const opt = select.options[i];
        if (opt?.value && opt.text && list.some((a)=>(0, _nativeAnswer.isMatched)(a, opt.text) || (0, _choiceMatch.isExactChoiceMatch)(opt.text, a))) {
            opt.click();
            opt.dispatchEvent(new MouseEvent("mousedown", {
                bubbles: true,
                cancelable: true
            }));
            opt.dispatchEvent(new MouseEvent("mouseup", {
                bubbles: true,
                cancelable: true
            }));
            opt.selected = true;
            select.dispatchEvent(new Event("change", {
                bubbles: true,
                cancelable: true
            }));
            select.blur();
            return true;
        }
    }
    select.blur();
    return false;
}
function fillOriginSelectField(select, values) {
    if (!select?.options) return false;
    const wants = (Array.isArray(values) ? values : [
        values
    ]).map(String);
    for (const want of wants)for(let i = 0; i < select.options.length; i++){
        const opt = select.options[i];
        if (opt.text === want || opt.title === want) {
            opt.selected = true;
            select.dispatchEvent(new Event("change", {
                bubbles: true
            }));
            return true;
        }
    }
    return false;
}
async function fillRadioGroupField(radios, value) {
    const want = Array.isArray(value) ? value[0] : value;
    if (!want) return false;
    const match = (0, _choiceMatch.findExactChoice)(radios, want, choiceLabelText);
    if (!match) return false;
    if (!match.checked) {
        match.click();
        match.checked = true;
        match.dispatchEvent(new Event("change", {
            bubbles: true
        }));
        match.dispatchEvent(new Event("click", {
            bubbles: true
        }));
    }
    return true;
}
async function fillSingleCheckbox(el, checked = true) {
    await (0, _checkbox.fillCheckbox)(el, checked);
}
async function uploadFiles(input, file, fileName) {
    if (!input || input.type !== "file") return false;
    const blob = file instanceof File ? file : new File([
        file
    ], fileName, {
        type: file.type || "application/pdf"
    });
    const dt = new DataTransfer();
    dt.items.add(blob);
    input.files = dt.files;
    input.dispatchEvent(new Event("input", {
        bubbles: true
    }));
    input.dispatchEvent(new Event("change", {
        bubbles: true
    }));
    await (0, _delay.delay)(100);
    return true;
}
function postCoverLetterStatus(status) {
    window.top?.postMessage({
        type: (0, _enums.MESSAGE_EVENTS).agentCheckCoverLetter,
        status
    }, {
        targetOrigin: "*"
    });
}

},{"~contents/crawler/utils/input":"gm6tm","~contents/crawler/utils/checkbox":"1eAtY","~contents/crawler/utils/delay":"1kcE1","~contents/methods/choice-match":"hYmUM","~contents/methods/checkbox-label":"jYmCR","~contents/methods/native-answer":"7WGaQ","~core/enums":"7a65S","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"gm6tm":[function(require,module,exports) {
/**
 * Native input fill with React-compatible value setter (engine input.js port).
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillDefaultInputField", ()=>fillDefaultInputField);
async function fillDefaultInputField(el, value) {
    if (!el) {
        console.error("[clean-fill] element is null");
        return;
    }
    el.focus();
    const proto = Object.getPrototypeOf(el);
    const desc = Object.getOwnPropertyDescriptor(proto, "value");
    if (desc?.set) desc.set.call(el, value);
    else el.value = value;
    el.dispatchEvent(new Event("input", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new Event("change", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new Event("blur"));
    el.dispatchEvent(new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        key: "Enter",
        keyCode: 13
    }));
    el.dispatchEvent(new KeyboardEvent("keyup", {
        bubbles: true,
        cancelable: true,
        key: "Enter",
        keyCode: 13
    }));
    el.blur();
    el.dispatchEvent(new FocusEvent("focus", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new Event("change", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new FocusEvent("blur", {
        bubbles: true,
        cancelable: true
    }));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"1eAtY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillCheckbox", ()=>fillCheckbox);
parcelHelpers.export(exports, "fillCheckboxesByLabels", ()=>fillCheckboxesByLabels);
parcelHelpers.export(exports, "fillRadioByLabel", ()=>fillRadioByLabel);
var _choiceMatch = require("~contents/methods/choice-match");
var _delay = require("~contents/crawler/utils/delay");
async function fillCheckbox(el, checked = true) {
    if (!el) return;
    el.focus();
    if (el.checked !== checked) {
        el.click();
        await (0, _delay.delay)(30);
    }
    el.checked = checked;
    el.dispatchEvent(new Event("change", {
        bubbles: true
    }));
    const role = el.closest('[role="checkbox"]');
    if (role) role.click();
}
async function fillCheckboxesByLabels(checkboxes, wants) {
    let filled = 0;
    for (const want of wants)for (const box of checkboxes){
        const label = box.id && document.querySelector(`label[for="${CSS.escape(box.id)}"]`)?.textContent || box.closest("label")?.textContent || box.getAttribute("aria-label") || box.value;
        if ((0, _choiceMatch.isExactChoiceMatch)(label, want)) {
            await fillCheckbox(box, true);
            filled += 1;
            break;
        }
    }
    return filled;
}
async function fillRadioByLabel(radios, want) {
    for (const radio of radios){
        const label = radio.id && document.querySelector(`label[for="${CSS.escape(radio.id)}"]`)?.textContent || radio.closest("label")?.textContent || radio.getAttribute("aria-label") || radio.value;
        if ((0, _choiceMatch.isExactChoiceMatch)(label, want)) {
            if (!radio.checked) {
                radio.click();
                radio.checked = true;
                radio.dispatchEvent(new Event("change", {
                    bubbles: true
                }));
                radio.dispatchEvent(new Event("click", {
                    bubbles: true
                }));
            }
            return true;
        }
    }
    return false;
}

},{"~contents/methods/choice-match":"hYmUM","~contents/crawler/utils/delay":"1kcE1","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"hYmUM":[function(require,module,exports) {
/** Exact / normalized choice matching (port of engine choice-match).
 * Oracle: engine/helper-app/src/contents/methods/choice-match.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeChoiceText", ()=>normalizeChoiceText);
parcelHelpers.export(exports, "isExactChoiceMatch", ()=>isExactChoiceMatch);
parcelHelpers.export(exports, "findExactChoice", ()=>findExactChoice);
/** Simple fuzzy score 0\u20131 (token overlap + substring). */ parcelHelpers.export(exports, "fuzzyScore", ()=>fuzzyScore);
parcelHelpers.export(exports, "fuzzyFindBest", ()=>fuzzyFindBest);
function normalizeChoiceText(value) {
    if (typeof value !== "string" && typeof value !== "number") return "";
    return String(value).normalize("NFKC").replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/\s+/g, " ").trim().toLowerCase();
}
function isExactChoiceMatch(optionText, want) {
    const w = normalizeChoiceText(want);
    return !!w && normalizeChoiceText(optionText) === w;
}
function findExactChoice(items, want, getLabel, getSecondary) {
    if (!normalizeChoiceText(want)) return undefined;
    const byLabel = items.filter((item)=>isExactChoiceMatch(getLabel(item), want));
    if (byLabel.length === 1) return byLabel[0];
    if (byLabel.length > 1 || !getSecondary) return undefined;
    const bySec = items.filter((item)=>isExactChoiceMatch(getSecondary(item), want));
    return bySec.length === 1 ? bySec[0] : undefined;
}
function fuzzyScore(a, b) {
    const na = normalizeChoiceText(a);
    const nb = normalizeChoiceText(b);
    if (!na || !nb) return 0;
    if (na === nb) return 1;
    if (nb.includes(na) || na.includes(nb)) return 0.85;
    const at = new Set(na.split(" ").filter(Boolean));
    const bt = nb.split(" ").filter(Boolean);
    if (!bt.length) return 0;
    let hit = 0;
    for (const t of bt)if (at.has(t)) hit += 1;
    return hit / Math.max(at.size, bt.length);
}
function fuzzyFindBest(items, want, getLabel, minScore = 0.45) {
    let best;
    let bestScore = 0;
    for (const item of items){
        const s = fuzzyScore(want, getLabel(item));
        if (s > bestScore) {
            bestScore = s;
            best = item;
        }
    }
    return bestScore >= minScore ? best : undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"jYmCR":[function(require,module,exports) {
/**
 * Checkbox / radio label helpers (clean-TS).
 * Oracle: engine/helper-app/src/contents/methods/checkbox-label.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Visible label text for a checkbox/radio. */ parcelHelpers.export(exports, "getRadioCheckText", ()=>getRadioCheckText);
parcelHelpers.export(exports, "normalizeRadioCheckText", ()=>normalizeRadioCheckText);
function textOf(el) {
    return (el?.textContent || "").trim();
}
function labelForInput(input) {
    if (!input.id || typeof document === "undefined") return null;
    try {
        return document.querySelector(`label[for="${CSS.escape(input.id)}"]`);
    } catch  {
        return null;
    }
}
function getRadioCheckText(input) {
    const parent = input.parentElement;
    const grand = parent?.parentElement;
    const candidates = [
        typeof input.closest === "function" ? input.closest("label") : null,
        labelForInput(input),
        parent,
        parent?.nextElementSibling,
        parent?.previousElementSibling,
        grand
    ];
    for (const el of candidates){
        const t = textOf(el);
        if (t) return t;
    }
    return input.getAttribute("aria-label") || input.value || "";
}
function normalizeRadioCheckText(text) {
    return text.toLowerCase().trim().replace("*", "");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7a65S":[function(require,module,exports) {
/** Core enums ported from Jobright helper `~core/enums`. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RENDER_STEP", ()=>RENDER_STEP);
parcelHelpers.export(exports, "MESSAGE_EVENTS", ()=>MESSAGE_EVENTS);
parcelHelpers.export(exports, "FIELD_TYPE", ()=>FIELD_TYPE);
parcelHelpers.export(exports, "APPLICATION_STATUS", ()=>APPLICATION_STATUS);
parcelHelpers.export(exports, "MIME_TYPE", ()=>MIME_TYPE);
var RENDER_STEP;
(function(RENDER_STEP) {
    RENDER_STEP[RENDER_STEP["INITIAL"] = 0] = "INITIAL";
    RENDER_STEP[RENDER_STEP["FILLING"] = 1] = "FILLING";
    RENDER_STEP[RENDER_STEP["FILLED"] = 2] = "FILLED";
    RENDER_STEP[RENDER_STEP["FAILED"] = 3] = "FAILED";
})(RENDER_STEP || (RENDER_STEP = {}));
var MESSAGE_EVENTS;
(function(MESSAGE_EVENTS) {
    MESSAGE_EVENTS["autoFillResultFromIframe"] = "autoFillResultFromIframe";
    MESSAGE_EVENTS["autoFillCompleteFromIframe"] = "autoFillCompleteFromIframe";
    MESSAGE_EVENTS["autoFillReloadIframe"] = "autoFillReloadIframe";
    MESSAGE_EVENTS["updateResultFromIframe"] = "updateResultFromIframe";
    MESSAGE_EVENTS["sendHttpStatusIframe"] = "sendHttpStatusIframe";
    MESSAGE_EVENTS["complateAgent"] = "complateAgent";
    MESSAGE_EVENTS["agentStartFillingFields"] = "agentStartFillingFields";
    MESSAGE_EVENTS["agentGetResumeInfo"] = "agentGetResumeInfo";
    MESSAGE_EVENTS["agentSubmitClicked"] = "agentSubmitClicked";
    MESSAGE_EVENTS["agentCheckCoverLetter"] = "agentCheckCoverLetter";
})(MESSAGE_EVENTS || (MESSAGE_EVENTS = {}));
var FIELD_TYPE;
(function(FIELD_TYPE) {
    FIELD_TYPE["TEXT"] = "text";
    FIELD_TYPE["NUMBER"] = "number";
    FIELD_TYPE["COVER_LETTER"] = "cover-letter";
    FIELD_TYPE["CHECKBOX"] = "checkbox";
    FIELD_TYPE["SELECT"] = "select";
    FIELD_TYPE["RADIO"] = "radio";
    FIELD_TYPE["SEARCH"] = "search";
    FIELD_TYPE["SELECT_ORIGINAL"] = "select-original";
    FIELD_TYPE["MULTI_SELECT"] = "multi-select";
    FIELD_TYPE["LISTBOX"] = "listbox";
    FIELD_TYPE["EMPLOYMENT"] = "employment";
    FIELD_TYPE["EDUCATION"] = "education";
    FIELD_TYPE["DROPDOWN"] = "dropdown";
    FIELD_TYPE["DATE"] = "date";
    FIELD_TYPE["RADIOGROUP"] = "radio-group";
    FIELD_TYPE["BAMBOOHR_SPECIAL"] = "bamboohr-special";
    FIELD_TYPE["SECTION"] = "section";
    FIELD_TYPE["ASHBY_SEARCH"] = "ashby-search";
})(FIELD_TYPE || (FIELD_TYPE = {}));
var APPLICATION_STATUS;
(function(APPLICATION_STATUS) {
    APPLICATION_STATUS[APPLICATION_STATUS["RUNNING"] = 0] = "RUNNING";
    APPLICATION_STATUS[APPLICATION_STATUS["SUCCESS"] = 1] = "SUCCESS";
    APPLICATION_STATUS[APPLICATION_STATUS["FAILED"] = 2] = "FAILED";
})(APPLICATION_STATUS || (APPLICATION_STATUS = {}));
const MIME_TYPE = {
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}]},["jyww8","7SyAi"], "7SyAi", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBTFUsZUFNVixtQkFBQTtJQU5VLGVBT1YsNkJBQUE7SUFQVSxlQVFWLHdCQUFBO0lBUlUsZUFTVix3QkFBQTtJQVRVLGVBVVYsMkJBQUE7R0FWVSxtQkFBQTtJQWFMO1VBQUssVUFBVTtJQUFWLFdBQ1YsVUFBTztJQURHLFdBRVYsWUFBUztJQUZDLFdBR1Ysa0JBQWU7SUFITCxXQUlWLGNBQVc7SUFKRCxXQUtWLFlBQVM7SUFMQyxXQU1WLFdBQVE7SUFORSxXQU9WLFlBQVM7SUFQQyxXQVFWLHFCQUFrQjtJQVJSLFdBU1Ysa0JBQWU7SUFUTCxXQVVWLGFBQVU7SUFWQSxXQVdWLGdCQUFhO0lBWEgsV0FZVixlQUFZO0lBWkYsV0FhVixjQUFXO0lBYkQsV0FjVixVQUFPO0lBZEcsV0FlVixnQkFBYTtJQWZILFdBZ0JWLHNCQUFtQjtJQWhCVCxXQWlCVixhQUFVO0lBakJBLFdBa0JWLGtCQUFlO0dBbEJMLGVBQUE7SUFxQkw7VUFBSyxrQkFBa0I7SUFBbEIsbUJBQUEsbUJBQ1YsYUFBVSxLQUFWO0lBRFUsbUJBQUEsbUJBRVYsYUFBVSxLQUFWO0lBRlUsbUJBQUEsbUJBR1YsWUFBUyxLQUFUO0dBSFUsdUJBQUE7QUFNTCxNQUFNLFlBQVk7SUFDdkIsS0FBSztJQUNMLEtBQUs7SUFDTCxNQUFNO0FBQ1IiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTA3Yzk0NmY0MjEwMWY3MzguanMiLCJzcmMvY29udGVudHMvY2xlYW4tZmlsbC50cyIsInNyYy9jb250ZW50cy9zaXRlcy9uYXRpdmUtZmlsbGVyLnRzIiwic3JjL2NvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItZmFjdG9yeS50cyIsInNyYy9jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLWdyZWVuaG91c2UudHMiLCJzcmMvY29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1nZW5lcmljLnRzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJzcmMvY29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1sZXZlci50cyIsInNyYy9jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLXBlcnNvbmlvLnRzIiwic3JjL2NvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItd29ya2RheS50cyIsInNyYy9jb250ZW50cy9jcmF3bGVyL2RldGVjdC1yZWdpc3RyeS50cyIsInNyYy9jb3JlL3N1cHBvcnRlZC1zaXRlcy50cyIsInNyYy9jb3JlL21hdGNoLXBhdHRlcm5zLnRzIiwic3JjL2NvcmUvc2l0ZS1yZWdpc3RyeS5yYXcuanMiLCJzcmMvY29udGVudHMvY3Jhd2xlci90eXBlcy50cyIsInNyYy9jb250ZW50cy9jcmF3bGVyL3V0aWxzL2RlbGF5LnRzIiwic3JjL2NvbnRlbnRzL21ldGhvZHMvbmF0aXZlLWFuc3dlci50cyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvbWVzc2FnaW5nL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmJyb3dzZXIuanMiLCJzcmMvY29udGVudHMvbWV0aG9kcy9uYXRpdmUtZG9tLnRzIiwic3JjL2NvbnRlbnRzL2NyYXdsZXIvdXRpbHMvaW5wdXQudHMiLCJzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy9jaGVja2JveC50cyIsInNyYy9jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaC50cyIsInNyYy9jb250ZW50cy9tZXRob2RzL2NoZWNrYm94LWxhYmVsLnRzIiwic3JjL2NvcmUvZW51bXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGQ9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgeT0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBIPW5ldyBTZXQoZCksXz1lPT5ILmhhcyhlKSxHPWQuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgWj1fKFwiLS1kcnktcnVuXCIpLHA9KCk9Pl8oXCItLXZlcmJvc2VcIil8fHkoKS5WRVJCT1NFPT09XCJ0cnVlXCIscT1wKCk7dmFyIHU9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHg9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+dShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLG09KC4uLmUpPT51KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUz0wLGM9KC4uLmUpPT5wKCkmJnUoYFxcdXsxRjdFMX0gJHtTKyt9YCwuLi5lKTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjp0cnVlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInNjcmlwdC1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXGNsZWFuLWZpbGwudHNcIixcImJ1bmRsZUlkXCI6XCJmZmQwNGI3OWM0YWI0MWJhXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBJKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9STttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBiKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gQygpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIEU9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjtmdW5jdGlvbiBMKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gTyhlPUMoKSl7bGV0IHQ9YigpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEIoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFAoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KE8oKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgYSBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCB3PWEuY29kZWZyYW1lfHxhLnN0YWNrO20oXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrYS5tZXNzYWdlK2BcbmArdytgXG5cbmArYS5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57bShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHM9XCJfX3BsYXNtby1sb2FkaW5nX19cIjtmdW5jdGlvbiAkKCl7bGV0IGU9Z2xvYmFsVGhpcy53aW5kb3c/LnRydXN0ZWRUeXBlcztpZih0eXBlb2YgZT5cInVcIilyZXR1cm47bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHJ1c3RlZC10eXBlc1wiXScpPy5jb250ZW50Py5zcGxpdChcIiBcIiksbz10P3RbdD8ubGVuZ3RoLTFdLnJlcGxhY2UoLzsvZyxcIlwiKTp2b2lkIDA7cmV0dXJuIHR5cGVvZiBlPFwidVwiP2UuY3JlYXRlUG9saWN5KG98fGB0cnVzdGVkLWh0bWwtJHtzfWAse2NyZWF0ZUhUTUw6YT0+YX0pOnZvaWQgMH12YXIgVD0kKCk7ZnVuY3Rpb24gZygpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKX1mdW5jdGlvbiBmKCl7cmV0dXJuIWcoKX1mdW5jdGlvbiBGKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPXM7bGV0IHQ9YFxuICA8c3R5bGU+XG4gICAgIyR7c30ge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgIGJveC1zaGFkb3c6ICMzMzMgNC43cHggNC43cHg7XG4gICAgfVxuXG4gICAgIyR7c306aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCB7XG4gICAgICAwJSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIGZpbGw6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTEge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOHMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuc3ZnLWVsZW0tMiB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC45cyBib3RoIGluZmluaXRlO1xuICAgIH1cbiAgICBcbiAgICAjJHtzfSAuc3ZnLWVsZW0tMyB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIDwvc3R5bGU+XG4gIFxuICA8c3ZnIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjY0IDM1NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTM5LjIyMSAyODIuMjQzQzE1NC4yNTIgMjgyLjI0MyAxNjYuOTAzIDI5NC44NDkgMTYxLjMzOCAzMDguODEyQzE1OS40ODkgMzEzLjQ1NCAxNTcuMTUgMzE3LjkxMyAxNTQuMzQ3IDMyMi4xMDlDMTQ2LjQ2NCAzMzMuOTA5IDEzNS4yNiAzNDMuMTA3IDEyMi4xNTEgMzQ4LjUzOEMxMDkuMDQzIDM1My45NjkgOTQuNjE4MiAzNTUuMzkgODAuNzAyMiAzNTIuNjIxQzY2Ljc4NjEgMzQ5Ljg1MiA1NC4wMDM0IDM0My4wMTggNDMuOTcwNSAzMzIuOTgzQzMzLjkzNzUgMzIyLjk0NyAyNy4xMDUgMzEwLjE2MiAyNC4zMzY5IDI5Ni4yNDJDMjEuNTY4OSAyODIuMzIzIDIyLjk4OTUgMjY3Ljg5NSAyOC40MTkzIDI1NC43ODNDMzMuODQ5MSAyNDEuNjcxIDQzLjA0NDEgMjMwLjQ2NCA1NC44NDE2IDIyMi41NzlDNTkuMDM1MyAyMTkuNzc3IDYzLjQ5MDggMjE3LjQzOCA2OC4xMjk1IDIxNS41ODhDODIuMDkxNSAyMTAuMDIxIDk0LjY5NzggMjIyLjY3MSA5NC42OTc4IDIzNy43MDNMOTQuNjk3OCAyNTUuMDI3Qzk0LjY5NzggMjcwLjA1OCAxMDYuODgzIDI4Mi4yNDMgMTIxLjkxNCAyODIuMjQzSDEzOS4yMjFaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTFcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNMTkyLjI2MSAxNDIuMDI4QzE5Mi4yNjEgMTI2Ljk5NiAyMDQuODY3IDExNC4zNDYgMjE4LjgyOSAxMTkuOTEzQzIyMy40NjggMTIxLjc2MyAyMjcuOTIzIDEyNC4xMDIgMjMyLjExNyAxMjYuOTA0QzI0My45MTUgMTM0Ljc4OSAyNTMuMTEgMTQ1Ljk5NiAyNTguNTM5IDE1OS4xMDhDMjYzLjk2OSAxNzIuMjIgMjY1LjM5IDE4Ni42NDggMjYyLjYyMiAyMDAuNTY3QzI1OS44NTQgMjE0LjQ4NyAyNTMuMDIxIDIyNy4yNzIgMjQyLjk4OCAyMzcuMzA4QzIzMi45NTUgMjQ3LjM0MyAyMjAuMTczIDI1NC4xNzcgMjA2LjI1NiAyNTYuOTQ2QzE5Mi4zNCAyNTkuNzE1IDE3Ny45MTYgMjU4LjI5NCAxNjQuODA3IDI1Mi44NjNDMTUxLjY5OSAyNDcuNDMyIDE0MC40OTUgMjM4LjIzNCAxMzIuNjEyIDIyNi40MzRDMTI5LjgwOCAyMjIuMjM4IDEyNy40NyAyMTcuNzc5IDEyNS42MiAyMTMuMTM3QzEyMC4wNTYgMTk5LjE3NCAxMzIuNzA3IDE4Ni41NjggMTQ3LjczOCAxODYuNTY4TDE2NS4wNDQgMTg2LjU2OEMxODAuMDc2IDE4Ni41NjggMTkyLjI2MSAxNzQuMzgzIDE5Mi4yNjEgMTU5LjM1MkwxOTIuMjYxIDE0Mi4wMjhaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTJcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNOTUuNjUyMiAxNjQuMTM1Qzk1LjY1MjIgMTc5LjE2NyA4My4yMjc5IDE5MS43MjUgNjguODAxMyAxODcuNTA1QzU5LjUxNDUgMTg0Ljc4OCA1MC42NDMyIDE4MC42NjMgNDIuNTEwNiAxNzUuMjI3QzI2Ljc4MDYgMTY0LjcxNCAxNC41MjA2IDE0OS43NzIgNy4yODA4OSAxMzIuMjg5QzAuMDQxMTgzIDExNC44MDcgLTEuODUzMDUgOTUuNTY5NyAxLjgzNzcyIDc3LjAxMDRDNS41Mjg0OSA1OC40NTExIDE0LjYzODUgNDEuNDAzMyAyOC4wMTU3IDI4LjAyMjhDNDEuMzkzIDE0LjY0MjMgNTguNDM2NiA1LjUzMDA2IDc2Ljk5MTQgMS44MzgzOUM5NS41NDYxIC0xLjg1MzI5IDExNC43NzkgMC4wNDE0MTYyIDEzMi4yNTcgNy4yODI5QzE0OS43MzUgMTQuNTI0NCAxNjQuNjc0IDI2Ljc4NzQgMTc1LjE4NCA0Mi41MjEyQzE4MC42MiA1MC42NTc2IDE4NC43NDQgNTkuNTMzMiAxODcuNDYgNjguODI0NUMxOTEuNjc4IDgzLjI1MTkgMTc5LjExOSA5NS42NzU5IDE2NC4wODggOTUuNjc1OUwxMjIuODY5IDk1LjY3NTlDMTA3LjgzNyA5NS42NzU5IDk1LjY1MjIgMTA3Ljg2MSA5NS42NTIyIDEyMi44OTJMOTUuNjUyMiAxNjQuMTM1WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0zXCI+PC9wYXRoPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj5Db250ZXh0IEludmFsaWRhdGVkLCBQcmVzcyB0byBSZWxvYWQ8L3NwYW4+XG4gIGA7cmV0dXJuIGUuaW5uZXJIVE1MPVQ/VC5jcmVhdGVIVE1MKHQpOnQsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3R5bGUuYm90dG9tPVwiMTQuN3B4XCIsZS5zdHlsZS5yaWdodD1cIjE0LjdweFwiLGUuc3R5bGUuZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIixlLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZS5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGUuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGUuc3R5bGUucGFkZGluZz1cIjE0LjdweFwiLGUuc3R5bGUuZ2FwPVwiMTQuN3B4XCIsZS5zdHlsZS5ib3JkZXJSYWRpdXM9XCI0LjdweFwiLGUuc3R5bGUuekluZGV4PVwiMjE0NzQ4MzY0N1wiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40N3MgZWFzZS1pbi1vdXRcIixlfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pntkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/KGYoKSYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCkpLHQoKSk6Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57ZigpJiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpfSl9KX12YXIgaz0oKT0+e2xldCBlO2lmKGYoKSl7bGV0IHQ9RigpO2U9Tih0KX1yZXR1cm57c2hvdzphc3luYyh7cmVsb2FkQnV0dG9uOnQ9ITF9PXt9KT0+e2F3YWl0IGU7bGV0IG89ZygpO28uc3R5bGUub3BhY2l0eT1cIjFcIix0JiYoby5vbmNsaWNrPXI9PntyLnN0b3BQcm9wYWdhdGlvbigpLGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCl9LG8ucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKSxvLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIil9LGhpZGU6YXN5bmMoKT0+e2F3YWl0IGU7bGV0IHQ9ZygpO3Quc3R5bGUub3BhY2l0eT1cIjBcIn19fTt2YXIgVz1gJHtFfSR7bW9kdWxlLmlkfV9fYCxpLEE9ITEsTT1rKCk7YXN5bmMgZnVuY3Rpb24gaCgpe2MoXCJTY3JpcHQgUnVudGltZSAtIHJlbG9hZGluZ1wiKSxBP2dsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCk6TS5zaG93KHtyZWxvYWRCdXR0b246ITB9KX1mdW5jdGlvbiBSKCl7aT8uZGlzY29ubmVjdCgpLGk9bD8ucnVudGltZS5jb25uZWN0KHtuYW1lOld9KSxpLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e2goKX0pLGkub25NZXNzYWdlLmFkZExpc3RlbmVyKGU9PntlLl9fcGxhc21vX2NzX3JlbG9hZF9fJiZoKCksZS5fX3BsYXNtb19jc19hY3RpdmVfdGFiX18mJihBPSEwKX0pfWZ1bmN0aW9uIGooKXtpZihsPy5ydW50aW1lKXRyeXtSKCksc2V0SW50ZXJ2YWwoUiwyNGUzKX1jYXRjaHtyZXR1cm59fWooKTtQKGFzeW5jIGU9PntjKFwiU2NyaXB0IHJ1bnRpbWUgLSBvbiB1cGRhdGVkIGFzc2V0c1wiKSxlLmZpbHRlcihvPT5vLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUobz0+TChtb2R1bGUuYnVuZGxlLG8uaWQpKSYmKE0uc2hvdygpLGw/LnJ1bnRpbWU/aS5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfY2hhbmdlZF9fOiEwfSk6c2V0VGltZW91dCgoKT0+e2goKX0sNDcwMCkpfSk7XG4iLCIvKipcclxuICogQ2xlYW4tVFMgZmlsbCBjb250ZW50IHNjcmlwdCDigJQgbmF0aXZlIEFUUyBmaWxsIHdpdGhvdXQgUGFyY2VsIG9wZXJhdGlvbnMuXHJcbiAqIFJ1bnMgYWxvbmdzaWRlIGJvb3RzdHJhcDsgZm9yIHBlcnNvbmlvL2dyZWVuaG91c2UvbGV2ZXIgcHJlZmVycyBjbGVhbiBwYXRoXHJcbiAqIHdoZW4gcG9wdXAvaWNvbiByZXF1ZXN0cyBmaWxsIHZpYSBtZXNzYWdlIGBydW5DbGVhblRzRmlsbGAuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHR5cGUgeyBQbGFzbW9DU0NvbmZpZyB9IGZyb20gXCJwbGFzbW9cIlxyXG5cclxuaW1wb3J0IHtcclxuICBkZXRlY3RBdHNTaXRlLFxyXG4gIGlzQ2xlYW5Uc05hdGl2ZVNpdGUsXHJcbiAgcnVuQ2xlYW5Uc0ZpbGxcclxufSBmcm9tIFwifmNvbnRlbnRzL3NpdGVzL25hdGl2ZS1maWxsZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGxhc21vQ1NDb25maWcgPSB7XHJcbiAgbWF0Y2hlczogW1wiPGFsbF91cmxzPlwiXSxcclxuICBhbGxfZnJhbWVzOiBmYWxzZSxcclxuICBydW5fYXQ6IFwiZG9jdW1lbnRfaWRsZVwiLFxyXG4gIGV4Y2x1ZGVfbWF0Y2hlczogW1xyXG4gICAgXCJodHRwczovL2pvYnJpZ2h0LXRlYW0tc2l0ZS52ZXJjZWwuYXBwLypcIixcclxuICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMjEwLypcIixcclxuICAgIFwiaHR0cDovLzEyNy4wLjAuMTozMjEwLypcIlxyXG4gIF1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgX19xeXZhcmV4Q2xlYW5GaWxsPzoge1xyXG4gICAgICBydW46ICgpID0+IFByb21pc2U8dW5rbm93bj5cclxuICAgICAgc2l0ZTogc3RyaW5nXHJcbiAgICAgIG5hdGl2ZTogYm9vbGVhblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5zdGFsbEFwaSgpIHtcclxuICBjb25zdCBzaXRlID0gZGV0ZWN0QXRzU2l0ZShsb2NhdGlvbi5ob3N0bmFtZSwgbG9jYXRpb24uaHJlZilcclxuICB3aW5kb3cuX19xeXZhcmV4Q2xlYW5GaWxsID0ge1xyXG4gICAgc2l0ZSxcclxuICAgIG5hdGl2ZTogaXNDbGVhblRzTmF0aXZlU2l0ZShzaXRlKSxcclxuICAgIHJ1bjogKCkgPT4gcnVuQ2xlYW5Uc0ZpbGwoKVxyXG4gIH1cclxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcclxuICAgIG5ldyBDdXN0b21FdmVudChcInF5dmFyZXg6Y2xlYW4tZmlsbC1yZWFkeVwiLCB7XHJcbiAgICAgIGRldGFpbDogeyBzaXRlLCBuYXRpdmU6IGlzQ2xlYW5Uc05hdGl2ZVNpdGUoc2l0ZSkgfVxyXG4gICAgfSlcclxuICApXHJcbn1cclxuXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgX3NlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKG1lc3NhZ2U/Lm5hbWUgPT09IFwicnVuQ2xlYW5Uc0ZpbGxcIiB8fCBtZXNzYWdlPy5tZXNzYWdlID09PSBcInJ1bkNsZWFuVHNGaWxsXCIpIHtcclxuICAgIHZvaWQgcnVuQ2xlYW5Uc0ZpbGwoKVxyXG4gICAgICAudGhlbigocmVwb3J0KSA9PiBzZW5kUmVzcG9uc2UoeyBvazogdHJ1ZSwgcmVwb3J0IH0pKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT5cclxuICAgICAgICBzZW5kUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiZmlsbF9mYWlsZWRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWRcclxufSlcclxuXHJcbmluc3RhbGxBcGkoKVxyXG4iLCIvKipcclxuICogQ2xlYW4tVFMgQmFzZUZpbGxlciDigJQgZGlzY292ZXIg4oaSIGFuc3dlcnMg4oaSIGZpbGwgbmF0aXZlIGZpZWxkcyDihpIgdXBsb2FkIGRvY3MuXHJcbiAqIFJlcGxhY2VzIFBhcmNlbCBmaWxsICpvcGVyYXRpb25zKiBmb3Igc2l0ZXMgd2l0aCBuYXRpdmUgSFRNTCBjb250cm9scy5cclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIGRldGVjdEF0c1NpdGUsXHJcbiAgZGlzY292ZXJGaWVsZHNGb3JTaXRlXHJcbn0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLWZhY3RvcnlcIlxyXG5pbXBvcnQgdHlwZSB7IEF0c1NpdGVJZCwgRGlzY292ZXJlZEZpZWxkIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3R5cGVzXCJcclxuaW1wb3J0IHsgZGVsYXkgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMvZGVsYXlcIlxyXG5pbXBvcnQge1xyXG4gIGFuc3dlck1hcCxcclxuICBmZXRjaENvdmVyTGV0dGVyRmlsZSxcclxuICBmZXRjaEZvcm1BbnN3ZXJzLFxyXG4gIGZldGNoUmVzdW1lRmlsZSxcclxuICBsb29rdXBGaWVsZEFuc3dlcixcclxuICB0eXBlIEZpbGxBbnN3ZXJcclxufSBmcm9tIFwifmNvbnRlbnRzL21ldGhvZHMvbmF0aXZlLWFuc3dlclwiXHJcbmltcG9ydCB7XHJcbiAgZmlsbENoZWNrYm94RmllbGQsXHJcbiAgZmlsbElucHV0VGV4dEZpZWxkLFxyXG4gIGZpbGxSYWRpb0dyb3VwRmllbGQsXHJcbiAgZmlsbFNlbGVjdEZpZWxkLFxyXG4gIHVwbG9hZEZpbGVzXHJcbn0gZnJvbSBcIn5jb250ZW50cy9tZXRob2RzL25hdGl2ZS1kb21cIlxyXG5cclxuZXhwb3J0IHR5cGUgRmlsbFJlcG9ydCA9IHtcclxuICBzaXRlOiBBdHNTaXRlSWRcclxuICBkaXNjb3ZlcmVkOiBudW1iZXJcclxuICBhbnN3ZXJlZDogbnVtYmVyXHJcbiAgZmlsbGVkOiBudW1iZXJcclxuICBtaXNzZWQ6IHN0cmluZ1tdXHJcbiAgcmVzdW1lVXBsb2FkZWQ6IGJvb2xlYW5cclxuICBjb3ZlckxldHRlclVwbG9hZGVkOiBib29sZWFuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRJbnB1dEZvckxhYmVsKGxhYmVsOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gIGNvbnN0IHdhbnQgPSBsYWJlbC5yZXBsYWNlKC9cXHMqXFwqK1xccyovZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXHJcbiAgY29uc3QgbGFiZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWxcIikpXHJcbiAgZm9yIChjb25zdCBsYWIgb2YgbGFiZWxzKSB7XHJcbiAgICBjb25zdCB0ZXh0ID0gKGxhYi50ZXh0Q29udGVudCB8fCBcIlwiKVxyXG4gICAgICAucmVwbGFjZSgvXFxzKlxcKitcXHMqL2csIFwiIFwiKVxyXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcclxuICAgICAgLnRyaW0oKVxyXG4gICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgaWYgKHRleHQgIT09IHdhbnQgJiYgIXRleHQuc3RhcnRzV2l0aCh3YW50KSkgY29udGludWVcclxuICAgIGlmIChsYWIuaHRtbEZvcikge1xyXG4gICAgICBjb25zdCBieUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGFiLmh0bWxGb3IpXHJcbiAgICAgIGlmIChieUlkKSByZXR1cm4gYnlJZFxyXG4gICAgfVxyXG4gICAgY29uc3QgbmVzdGVkID0gbGFiLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKVxyXG4gICAgaWYgKG5lc3RlZCkgcmV0dXJuIG5lc3RlZCBhcyBIVE1MRWxlbWVudFxyXG4gIH1cclxuXHJcbiAgLy8gYXJpYS1sYWJlbCAvIGFyaWEtbGFiZWxsZWRieSBmYWxsYmFja1xyXG4gIGNvbnN0IGNvbnRyb2xzID0gQXJyYXkuZnJvbShcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKVxyXG4gICkgYXMgSFRNTEVsZW1lbnRbXVxyXG4gIGZvciAoY29uc3QgZWwgb2YgY29udHJvbHMpIHtcclxuICAgIGNvbnN0IGFyaWEgPSAoZWwuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpXHJcbiAgICBpZiAoYXJpYSAmJiBhcmlhLnJlcGxhY2UoL1xccypcXCovZywgXCJcIikudHJpbSgpID09PSB3YW50KSByZXR1cm4gZWxcclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGVjdFJhZGlvcyhuYW1lT3JFbDogSFRNTElucHV0RWxlbWVudCk6IEhUTUxJbnB1dEVsZW1lbnRbXSB7XHJcbiAgY29uc3QgbmFtZSA9IG5hbWVPckVsLm5hbWVcclxuICBpZiAobmFtZSkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJHtDU1MuZXNjYXBlKG5hbWUpfVwiXWApXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnRbXVxyXG4gIH1cclxuICBjb25zdCBwYXJlbnQgPSBuYW1lT3JFbC5jbG9zZXN0KFwiZmllbGRzZXQsIGRpdiwgc2VjdGlvblwiKSB8fCBkb2N1bWVudC5ib2R5XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oXHJcbiAgICBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcclxuICApIGFzIEhUTUxJbnB1dEVsZW1lbnRbXVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xsZWN0Q2hlY2tib3hlcyhlbDogSFRNTElucHV0RWxlbWVudCk6IEhUTUxJbnB1dEVsZW1lbnRbXSB7XHJcbiAgY29uc3QgcGFyZW50ID0gZWwuY2xvc2VzdChcImZpZWxkc2V0LCBkaXYsIHNlY3Rpb25cIikgfHwgZG9jdW1lbnQuYm9keVxyXG4gIHJldHVybiBBcnJheS5mcm9tKFxyXG4gICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXHJcbiAgKSBhcyBIVE1MSW5wdXRFbGVtZW50W11cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VGaWxsZXIge1xyXG4gIHNpdGU6IEF0c1NpdGVJZFxyXG4gIGhvc3RuYW1lOiBzdHJpbmdcclxuICBocmVmOiBzdHJpbmdcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0cz86IHsgaG9zdG5hbWU/OiBzdHJpbmc7IGhyZWY/OiBzdHJpbmc7IHNpdGU/OiBBdHNTaXRlSWQgfSkge1xyXG4gICAgdGhpcy5ob3N0bmFtZSA9XHJcbiAgICAgIG9wdHM/Lmhvc3RuYW1lIHx8XHJcbiAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IFwiXCIpXHJcbiAgICB0aGlzLmhyZWYgPVxyXG4gICAgICBvcHRzPy5ocmVmIHx8ICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgPyBsb2NhdGlvbi5ocmVmIDogXCJcIilcclxuICAgIHRoaXMuc2l0ZSA9IG9wdHM/LnNpdGUgfHwgZGV0ZWN0QXRzU2l0ZSh0aGlzLmhvc3RuYW1lLCB0aGlzLmhyZWYpXHJcbiAgfVxyXG5cclxuICBkaXNjb3Zlcihkb2M6IERvY3VtZW50ID0gZG9jdW1lbnQpOiBEaXNjb3ZlcmVkRmllbGRbXSB7XHJcbiAgICByZXR1cm4gZGlzY292ZXJGaWVsZHNGb3JTaXRlKHRoaXMuc2l0ZSwgZG9jKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmlsbEZpZWxkKGZpZWxkOiBEaXNjb3ZlcmVkRmllbGQsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGVsID0gZmluZElucHV0Rm9yTGFiZWwoZmllbGQubGFiZWwpXHJcbiAgICBpZiAoIWVsKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gXCJzZWxlY3RcIiAmJiBlbCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiBmaWxsU2VsZWN0RmllbGQoZWwsIHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC50eXBlID09PSBcInJhZGlvXCIgJiYgZWwgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiBmaWxsUmFkaW9Hcm91cEZpZWxkKGNvbGxlY3RSYWRpb3MoZWwpLCB2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gXCJjaGVja2JveFwiICYmIGVsIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xyXG4gICAgICBjb25zdCBuID0gYXdhaXQgZmlsbENoZWNrYm94RmllbGQoXHJcbiAgICAgICAgY29sbGVjdENoZWNrYm94ZXMoZWwpLFxyXG4gICAgICAgIHZhbHVlLnNwbGl0KC9bLDtdLykubWFwKChzKSA9PiBzLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgIClcclxuICAgICAgcmV0dXJuIG4gPiAwXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBlbCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHxcclxuICAgICAgZWwgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50XHJcbiAgICApIHtcclxuICAgICAgYXdhaXQgZmlsbElucHV0VGV4dEZpZWxkKGVsLCB2YWx1ZSlcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGFzeW5jIHVwbG9hZFJlc3VtZUlmUHJlc2VudCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGlucHV0ID1cclxuICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgJ2lucHV0W3R5cGU9XCJmaWxlXCJdW25hbWUqPVwiY3ZcIiBpXSwgaW5wdXRbdHlwZT1cImZpbGVcIl1bbmFtZSo9XCJyZXN1bWVcIiBpXSwgaW5wdXRbdHlwZT1cImZpbGVcIl1baWQqPVwiY3ZcIiBpXSwgaW5wdXRbdHlwZT1cImZpbGVcIl1baWQqPVwicmVzdW1lXCIgaV0sIGlucHV0W3R5cGU9XCJmaWxlXCJdJ1xyXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsKSB8fCBudWxsXHJcbiAgICBpZiAoIWlucHV0KSByZXR1cm4gZmFsc2VcclxuICAgIC8vIFByZWZlciBDVi9yZXN1bWUgbGFiZWxsZWQgaW5wdXQgd2hlbiBtdWx0aXBsZVxyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSBBcnJheS5mcm9tKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvY3VtZW50LWZpZWxkLXdyYXBwZXIsIFtjbGFzcyo9J2RvY3VtZW50J11cIilcclxuICAgIClcclxuICAgIGxldCB0YXJnZXQgPSBpbnB1dFxyXG4gICAgZm9yIChjb25zdCB3IG9mIHdyYXBwZXJzKSB7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gKHcudGV4dENvbnRlbnQgfHwgXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gICAgICBpZiAoL2NvdmVyXFxzKmxldHRlcnxhbnNjaHJlaWJlbi8udGVzdChsYWJlbCkpIGNvbnRpbnVlXHJcbiAgICAgIGlmICgvY3Z8cmVzdW1lfGxlYmVuc2xhdWYvLnRlc3QobGFiZWwpKSB7XHJcbiAgICAgICAgY29uc3QgZiA9IHcucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbFxyXG4gICAgICAgIGlmIChmKSB7XHJcbiAgICAgICAgICB0YXJnZXQgPSBmXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBmZXRjaFJlc3VtZUZpbGUoKVxyXG4gICAgaWYgKCFmaWxlKSByZXR1cm4gZmFsc2VcclxuICAgIHJldHVybiB1cGxvYWRGaWxlcyh0YXJnZXQsIGZpbGUuZmlsZSwgZmlsZS5maWxlTmFtZSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHVwbG9hZENvdmVyTGV0dGVySWZQcmVzZW50KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSBBcnJheS5mcm9tKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvY3VtZW50LWZpZWxkLXdyYXBwZXIsIFtjbGFzcyo9J2RvY3VtZW50J11cIilcclxuICAgIClcclxuICAgIGxldCBpbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBudWxsXHJcbiAgICBmb3IgKGNvbnN0IHcgb2Ygd3JhcHBlcnMpIHtcclxuICAgICAgY29uc3QgbGFiZWwgPSAody50ZXh0Q29udGVudCB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIGlmICgvY292ZXJcXHMqbGV0dGVyfGFuc2NocmVpYmVuLy50ZXN0KGxhYmVsKSkge1xyXG4gICAgICAgIGlucHV0ID0gdy5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgJ2lucHV0W3R5cGU9XCJmaWxlXCJdJ1xyXG4gICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGxcclxuICAgICAgICBpZiAoaW5wdXQpIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghaW5wdXQpIHtcclxuICAgICAgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICdpbnB1dFt0eXBlPVwiZmlsZVwiXVtuYW1lKj1cImNvdmVyXCIgaV0sIGlucHV0W3R5cGU9XCJmaWxlXCJdW2lkKj1cImNvdmVyXCIgaV0nXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGlmICghaW5wdXQpIHJldHVybiBmYWxzZVxyXG4gICAgY29uc3QgZmlsZSA9IGF3YWl0IGZldGNoQ292ZXJMZXR0ZXJGaWxlKClcclxuICAgIGlmICghZmlsZSkgcmV0dXJuIGZhbHNlXHJcbiAgICByZXR1cm4gdXBsb2FkRmlsZXMoaW5wdXQsIGZpbGUuZmlsZSwgZmlsZS5maWxlTmFtZSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGRvRmlsbEZvcm0oZG9jOiBEb2N1bWVudCA9IGRvY3VtZW50KTogUHJvbWlzZTxGaWxsUmVwb3J0PiB7XHJcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmRpc2NvdmVyKGRvYylcclxuICAgIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBmZXRjaEZvcm1BbnN3ZXJzKGZpZWxkcylcclxuICAgIGNvbnN0IG1hcCA9IGFuc3dlck1hcChhbnN3ZXJzKVxyXG4gICAgY29uc3QgbWlzc2VkOiBzdHJpbmdbXSA9IFtdXHJcbiAgICBsZXQgZmlsbGVkID0gMFxyXG5cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gbG9va3VwRmllbGRBbnN3ZXIobWFwLCBmaWVsZC5sYWJlbClcclxuICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIG1pc3NlZC5wdXNoKGZpZWxkLmxhYmVsKVxyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvayA9IGF3YWl0IHRoaXMuZmlsbEZpZWxkKGZpZWxkLCB2YWx1ZSlcclxuICAgICAgICBpZiAob2spIGZpbGxlZCArPSAxXHJcbiAgICAgICAgZWxzZSBtaXNzZWQucHVzaChmaWVsZC5sYWJlbClcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgbWlzc2VkLnB1c2goZmllbGQubGFiZWwpXHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgZGVsYXkoNDApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdW1lVXBsb2FkZWQgPSBhd2FpdCB0aGlzLnVwbG9hZFJlc3VtZUlmUHJlc2VudCgpXHJcbiAgICBjb25zdCBjb3ZlckxldHRlclVwbG9hZGVkID0gYXdhaXQgdGhpcy51cGxvYWRDb3ZlckxldHRlcklmUHJlc2VudCgpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2l0ZTogdGhpcy5zaXRlLFxyXG4gICAgICBkaXNjb3ZlcmVkOiBmaWVsZHMubGVuZ3RoLFxyXG4gICAgICBhbnN3ZXJlZDogYW5zd2Vycy5sZW5ndGgsXHJcbiAgICAgIGZpbGxlZCxcclxuICAgICAgbWlzc2VkLFxyXG4gICAgICByZXN1bWVVcGxvYWRlZCxcclxuICAgICAgY292ZXJMZXR0ZXJVcGxvYWRlZFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqIFNpdGVzIGZ1bGx5IHN1cHBvcnRlZCBieSBjbGVhbi1UUyBuYXRpdmUgZmlsbCAobm8gY3VzdG9tIHdpZGdldHMgcmVxdWlyZWQpLiAqL1xyXG5leHBvcnQgY29uc3QgQ0xFQU5fVFNfTkFUSVZFX1NJVEVTOiBBdHNTaXRlSWRbXSA9IFtcclxuICBcInBlcnNvbmlvXCIsXHJcbiAgXCJncmVlbmhvdXNlXCIsXHJcbiAgXCJsZXZlclwiLFxyXG4gIFwiZ2VuZXJpY1wiLFxyXG4gIFwiYXNoYnlcIixcclxuICBcIm9yYWNsZWNsb3VkXCIsXHJcbiAgXCJwYXljb21vbmxpbmUtdjNcIixcclxuICBcIm15d29ya2RheVwiXHJcbl1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0NsZWFuVHNOYXRpdmVTaXRlKHNpdGU6IEF0c1NpdGVJZCk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBDTEVBTl9UU19OQVRJVkVfU0lURVMuaW5jbHVkZXMoc2l0ZSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bkNsZWFuVHNGaWxsKG9wdHM/OiB7XHJcbiAgaG9zdG5hbWU/OiBzdHJpbmdcclxuICBocmVmPzogc3RyaW5nXHJcbn0pOiBQcm9taXNlPEZpbGxSZXBvcnQ+IHtcclxuICBjb25zdCBmaWxsZXIgPSBuZXcgQmFzZUZpbGxlcihvcHRzKVxyXG4gIHJldHVybiBmaWxsZXIuZG9GaWxsRm9ybSgpXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIHsgRmlsbEFuc3dlciwgRGlzY292ZXJlZEZpZWxkLCBBdHNTaXRlSWQgfVxyXG5leHBvcnQgeyBkZXRlY3RBdHNTaXRlLCBkZXRlY3RSZWdpc3RyeUF0cyB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1mYWN0b3J5XCJcclxuIiwiaW1wb3J0IHsgZGlzY292ZXJHcmVlbmhvdXNlRmllbGRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLWdyZWVuaG91c2VcIlxyXG5pbXBvcnQgeyBkaXNjb3ZlckdlbmVyaWNGaWVsZHMgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItZ2VuZXJpY1wiXHJcbmltcG9ydCB7IGRpc2NvdmVyTGV2ZXJGaWVsZHMgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItbGV2ZXJcIlxyXG5pbXBvcnQgeyBkaXNjb3ZlclBlcnNvbmlvRmllbGRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLXBlcnNvbmlvXCJcclxuaW1wb3J0IHsgZGlzY292ZXJXb3JrZGF5RmllbGRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLXdvcmtkYXlcIlxyXG5pbXBvcnQgeyBkZXRlY3RSZWdpc3RyeUF0cyB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci9kZXRlY3QtcmVnaXN0cnlcIlxyXG5pbXBvcnQgdHlwZSB7IEF0c1NpdGVJZCwgRGlzY292ZXJlZEZpZWxkIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3R5cGVzXCJcclxuXHJcbi8qKiBNYXAgcmVnaXN0cnkga2V5cyDihpIgQ2xlYW4tVFMgZGlzY292ZXIgYWRhcHRlcnMgd2Ugb3duLiAqL1xyXG5jb25zdCBSRUdJU1RSWV9UT19DTEVBTjogUmVjb3JkPHN0cmluZywgQXRzU2l0ZUlkPiA9IHtcclxuICBwZXJzb25pbzogXCJwZXJzb25pb1wiLFxyXG4gIGdyZWVuaG91c2U6IFwiZ3JlZW5ob3VzZVwiLFxyXG4gIGxldmVyOiBcImxldmVyXCIsXHJcbiAgd29ya2RheTogXCJteXdvcmtkYXlcIixcclxuICBteXdvcmtkYXk6IFwibXl3b3JrZGF5XCIsXHJcbiAgYXNoYnk6IFwiYXNoYnlcIixcclxuICBvcmFjbGVjbG91ZDogXCJvcmFjbGVjbG91ZFwiLFxyXG4gIHBheWNvbTogXCJwYXljb21vbmxpbmUtdjNcIixcclxuICBwYXljb21vbmxpbmU6IFwicGF5Y29tb25saW5lLXYzXCJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdEF0c1NpdGUoaG9zdG5hbWU6IHN0cmluZywgaHJlZiA9IFwiXCIpOiBBdHNTaXRlSWQge1xyXG4gIGNvbnN0IGggPSAoaG9zdG5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gIGNvbnN0IHUgPSAoaHJlZiB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpXHJcblxyXG4gIC8vIEZhc3QgcGF0aHMgKGZpeHR1cmVzIC8gY29tbW9uIGhvc3RzKVxyXG4gIGlmIChoLmluY2x1ZGVzKFwicGVyc29uaW8uXCIpIHx8IGguaW5jbHVkZXMoXCJqb2JzLnBlcnNvbmlvXCIpKSByZXR1cm4gXCJwZXJzb25pb1wiXHJcbiAgaWYgKFxyXG4gICAgaC5pbmNsdWRlcyhcImdyZWVuaG91c2UuaW9cIikgfHxcclxuICAgIGguaW5jbHVkZXMoXCJib2FyZHMuZ3JlZW5ob3VzZVwiKSB8fFxyXG4gICAgdS5pbmNsdWRlcyhcImdoX2ppZD1cIilcclxuICApIHtcclxuICAgIHJldHVybiBcImdyZWVuaG91c2VcIlxyXG4gIH1cclxuICBpZiAoaC5pbmNsdWRlcyhcImxldmVyLmNvXCIpIHx8IGguaW5jbHVkZXMoXCJqb2JzLmxldmVyXCIpKSByZXR1cm4gXCJsZXZlclwiXHJcbiAgaWYgKGguaW5jbHVkZXMoXCJteXdvcmtkYXlqb2JzLmNvbVwiKSB8fCBoLmluY2x1ZGVzKFwid29ya2RheS5jb21cIikpIHtcclxuICAgIHJldHVybiBcIm15d29ya2RheVwiXHJcbiAgfVxyXG4gIGlmIChoLmluY2x1ZGVzKFwiYXNoYnlocS5jb21cIikgfHwgaC5pbmNsdWRlcyhcImpvYnMuYXNoYnlcIikpIHJldHVybiBcImFzaGJ5XCJcclxuICBpZiAoaC5pbmNsdWRlcyhcIm9yYWNsZWNsb3VkLmNvbVwiKSB8fCBoLmluY2x1ZGVzKFwiZmEub3JhY2xlXCIpKSB7XHJcbiAgICByZXR1cm4gXCJvcmFjbGVjbG91ZFwiXHJcbiAgfVxyXG4gIGlmIChoLmluY2x1ZGVzKFwicGF5Y29tb25saW5lXCIpIHx8IGguaW5jbHVkZXMoXCJwYXljb20uY29tXCIpKSB7XHJcbiAgICByZXR1cm4gXCJwYXljb21vbmxpbmUtdjNcIlxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJlZCA9IGRldGVjdFJlZ2lzdHJ5QXRzKGhvc3RuYW1lLCBocmVmKVxyXG4gIGlmIChyZWdpc3RlcmVkICYmIFJFR0lTVFJZX1RPX0NMRUFOW3JlZ2lzdGVyZWRdKSB7XHJcbiAgICByZXR1cm4gUkVHSVNUUllfVE9fQ0xFQU5bcmVnaXN0ZXJlZF1cclxuICB9XHJcblxyXG4gIC8vIFVua25vd24gYnV0IHJlZ2lzdGVyZWQgQVRTIOKGkiBnZW5lcmljIG5hdGl2ZSBmaWxsIHN0aWxsIGhlbHBzXHJcbiAgaWYgKHJlZ2lzdGVyZWQpIHJldHVybiBcImdlbmVyaWNcIlxyXG4gIHJldHVybiBcImdlbmVyaWNcIlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzY292ZXJGaWVsZHNGb3JTaXRlKFxyXG4gIHNpdGU6IEF0c1NpdGVJZCxcclxuICBkb2M6IERvY3VtZW50XHJcbik6IERpc2NvdmVyZWRGaWVsZFtdIHtcclxuICBzd2l0Y2ggKHNpdGUpIHtcclxuICAgIGNhc2UgXCJwZXJzb25pb1wiOlxyXG4gICAgICByZXR1cm4gZGlzY292ZXJQZXJzb25pb0ZpZWxkcyhkb2MpXHJcbiAgICBjYXNlIFwiZ3JlZW5ob3VzZVwiOlxyXG4gICAgICByZXR1cm4gZGlzY292ZXJHcmVlbmhvdXNlRmllbGRzKGRvYylcclxuICAgIGNhc2UgXCJsZXZlclwiOlxyXG4gICAgICByZXR1cm4gZGlzY292ZXJMZXZlckZpZWxkcyhkb2MpXHJcbiAgICBjYXNlIFwibXl3b3JrZGF5XCI6XHJcbiAgICAgIHJldHVybiBkaXNjb3ZlcldvcmtkYXlGaWVsZHMoZG9jKVxyXG4gICAgY2FzZSBcImFzaGJ5XCI6XHJcbiAgICBjYXNlIFwib3JhY2xlY2xvdWRcIjpcclxuICAgIGNhc2UgXCJwYXljb21vbmxpbmUtdjNcIjpcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBkaXNjb3ZlckdlbmVyaWNGaWVsZHMoZG9jKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyRmllbGRzRnJvbUxvY2F0aW9uKFxyXG4gIGRvYzogRG9jdW1lbnQsXHJcbiAgaG9zdG5hbWU6IHN0cmluZyxcclxuICBocmVmID0gXCJcIlxyXG4pOiB7IHNpdGU6IEF0c1NpdGVJZDsgZmllbGRzOiBEaXNjb3ZlcmVkRmllbGRbXTsgcmVnaXN0cnlJZDogc3RyaW5nIHwgbnVsbCB9IHtcclxuICBjb25zdCBzaXRlID0gZGV0ZWN0QXRzU2l0ZShob3N0bmFtZSwgaHJlZilcclxuICBjb25zdCByZWdpc3RyeUlkID0gZGV0ZWN0UmVnaXN0cnlBdHMoaG9zdG5hbWUsIGhyZWYpXHJcbiAgcmV0dXJuIHsgc2l0ZSwgZmllbGRzOiBkaXNjb3ZlckZpZWxkc0ZvclNpdGUoc2l0ZSwgZG9jKSwgcmVnaXN0cnlJZCB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIHsgQXRzU2l0ZUlkLCBEaXNjb3ZlcmVkRmllbGQgfVxyXG5leHBvcnQgeyBGSUVMRF9UWVBFIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3R5cGVzXCJcclxuZXhwb3J0IHsgZGV0ZWN0UmVnaXN0cnlBdHMgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvZGV0ZWN0LXJlZ2lzdHJ5XCJcclxuIiwiaW1wb3J0IHsgZGlzY292ZXJHZW5lcmljRmllbGRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLWdlbmVyaWNcIlxyXG5pbXBvcnQgdHlwZSB7IERpc2NvdmVyZWRGaWVsZCB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci90eXBlc1wiXHJcblxyXG4vKiogR3JlZW5ob3VzZSBib2FyZHMgLyBlbWJlZGRlZCBhcHBseSBmb3Jtcy4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyR3JlZW5ob3VzZUZpZWxkcyhkb2M6IERvY3VtZW50KTogRGlzY292ZXJlZEZpZWxkW10ge1xyXG4gIHJldHVybiBkaXNjb3ZlckdlbmVyaWNGaWVsZHMoZG9jLCB7XHJcbiAgICBwcmVmZXJSb290U2VsZWN0b3I6IFwiI2FwcGxpY2F0aW9uX2Zvcm0sIGZvcm0jYXBwbGljYXRpb24tZm9ybSwgZm9ybVwiXHJcbiAgfSlcclxufVxyXG4iLCIvKipcclxuICogR2VuZXJpYyBBVFMgZm9ybSBkaXNjb3Zlcnkg4oCUIHdvcmtzIGZvciBuYXRpdmUgbGFiZWwvaW5wdXQgSFRNTC5cclxuICogTGlua2Vkb20tc2FmZSAobm8gRE9NIGluc3RhbmNlb2YpLlxyXG4gKi9cclxuXHJcbmltcG9ydCB0eXBlIHsgRGlzY292ZXJlZEZpZWxkIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3R5cGVzXCJcclxuXHJcbnR5cGUgQW55RWwgPSB7XHJcbiAgdGFnTmFtZTogc3RyaW5nXHJcbiAgaWQ/OiBzdHJpbmdcclxuICBjbGFzc05hbWU/OiBzdHJpbmcgfCB7IHRvU3RyaW5nKCk6IHN0cmluZyB9XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuXHJcbiAgaGlkZGVuPzogYm9vbGVhblxyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBuYW1lPzogc3RyaW5nXHJcbiAgdmFsdWU/OiBzdHJpbmdcclxuICB0ZXh0Q29udGVudD86IHN0cmluZyB8IG51bGxcclxuICBvcHRpb25zPzogQXJyYXlMaWtlPHsgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsIH0+XHJcbiAgcGFyZW50RWxlbWVudDogQW55RWwgfCBudWxsXHJcbiAgb3duZXJEb2N1bWVudD86IHtcclxuICAgIGJvZHk/OiBBbnlFbCB8IG51bGxcclxuICAgIGdldEVsZW1lbnRCeUlkPzogKGlkOiBzdHJpbmcpID0+IEFueUVsIHwgbnVsbFxyXG4gIH1cclxuICBnZXRBdHRyaWJ1dGU/OiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmcgfCBudWxsXHJcbiAgaGFzQXR0cmlidXRlPzogKG5hbWU6IHN0cmluZykgPT4gYm9vbGVhblxyXG4gIGNsb3Nlc3Q/OiAoc2VsOiBzdHJpbmcpID0+IEFueUVsIHwgbnVsbFxyXG4gIHF1ZXJ5U2VsZWN0b3I/OiAoc2VsOiBzdHJpbmcpID0+IEFueUVsIHwgbnVsbFxyXG4gIHF1ZXJ5U2VsZWN0b3JBbGw/OiAoc2VsOiBzdHJpbmcpID0+IEFycmF5TGlrZTxBbnlFbD5cclxuICBjb250YWlucz86IChvdGhlcjogQW55RWwpID0+IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgRklFTERfU0VMRUNUT1IgPVxyXG4gICdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbdHlwZT1cImZpbGVcIl0pOm5vdChbdHlwZT1cInN1Ym1pdFwiXSk6bm90KFt0eXBlPVwiYnV0dG9uXCJdKTpub3QoW3R5cGU9XCJyZXNldFwiXSk6bm90KFt0eXBlPVwiaW1hZ2VcIl0pLCB0ZXh0YXJlYSwgc2VsZWN0J1xyXG5cclxuZnVuY3Rpb24gY29sbGFwc2VXcyh0ZXh0OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSB7XHJcbiAgcmV0dXJuICh0ZXh0IHx8IFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbkxhYmVsKHRleHQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpIHtcclxuICByZXR1cm4gY29sbGFwc2VXcyh0ZXh0KVxyXG4gICAgLnJlcGxhY2UoL1xccypcXCorXFxzKi9nLCBcIiBcIilcclxuICAgIC5yZXBsYWNlKC9cXChcXHMqKHJlcXVpcmVkfGVyZm9yZGVybGljaHxvcHRpb25hbClcXHMqXFwpL2dpLCBcIlwiKVxyXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpXHJcbiAgICAudHJpbSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsYXNzU3RyKGVsOiBBbnlFbCkge1xyXG4gIGNvbnN0IGMgPSBlbC5jbGFzc05hbWVcclxuICByZXR1cm4gdHlwZW9mIGMgPT09IFwic3RyaW5nXCIgPyBjIDogYz8udG9TdHJpbmc/LigpIHx8IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gaXNWaXNpYmxlKGVsOiBBbnlFbCk6IGJvb2xlYW4ge1xyXG4gIGlmICghZWw/LmdldEF0dHJpYnV0ZSkgcmV0dXJuIGZhbHNlXHJcbiAgaWYgKGVsLmdldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpID09PSBcInRydWVcIiB8fCBlbC5oaWRkZW4pIHJldHVybiBmYWxzZVxyXG4gIGlmIChlbC5jbG9zZXN0Py4oXCJbYXJpYS1oaWRkZW49J3RydWUnXSwgW2hpZGRlbl1cIikpIHJldHVybiBmYWxzZVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRmlsbGFibGUoZWw6IEFueUVsKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgdGFnID0gKGVsLnRhZ05hbWUgfHwgXCJcIikudG9VcHBlckNhc2UoKVxyXG4gIGlmICh0YWcgIT09IFwiSU5QVVRcIiAmJiB0YWcgIT09IFwiVEVYVEFSRUFcIiAmJiB0YWcgIT09IFwiU0VMRUNUXCIpIHJldHVybiBmYWxzZVxyXG4gIGlmIChlbC5kaXNhYmxlZCkgcmV0dXJuIGZhbHNlXHJcbiAgaWYgKFxyXG4gICAgdGFnID09PSBcIklOUFVUXCIgJiZcclxuICAgIFtcImhpZGRlblwiLCBcImZpbGVcIiwgXCJzdWJtaXRcIiwgXCJidXR0b25cIiwgXCJyZXNldFwiLCBcImltYWdlXCJdLmluY2x1ZGVzKGVsLnR5cGUgfHwgXCJcIilcclxuICApIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gaXNWaXNpYmxlKGVsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0KHNlbFJvb3Q6IEFueUVsIHwgRG9jdW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBBbnlFbFtdIHtcclxuICBjb25zdCByb290ID0gc2VsUm9vdCBhcyBBbnlFbFxyXG4gIGNvbnN0IG5vZGVzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsPy4oc2VsZWN0b3IpXHJcbiAgcmV0dXJuIG5vZGVzID8gQXJyYXkuZnJvbShub2RlcyBhcyBBcnJheUxpa2U8QW55RWw+KSA6IFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBpY2tGb3JtUm9vdChkb2M6IERvY3VtZW50LCBwcmVmZXJTZWxlY3Rvcj86IHN0cmluZyk6IEFueUVsIHtcclxuICBjb25zdCBib2R5ID0gKGRvYy5ib2R5IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQpIGFzIHVua25vd24gYXMgQW55RWxcclxuICBpZiAocHJlZmVyU2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IHByZWZlcnJlZCA9IChkb2MgYXMgdW5rbm93biBhcyBBbnlFbCkucXVlcnlTZWxlY3Rvcj8uKHByZWZlclNlbGVjdG9yKVxyXG4gICAgaWYgKHByZWZlcnJlZCAmJiBpc1Zpc2libGUocHJlZmVycmVkKSkgcmV0dXJuIHByZWZlcnJlZFxyXG4gIH1cclxuICBjb25zdCBmb3JtcyA9IGxpc3QoZG9jIGFzIHVua25vd24gYXMgQW55RWwsIFwiZm9ybVwiKS5maWx0ZXIoaXNWaXNpYmxlKVxyXG4gIGxldCBiZXN0OiBBbnlFbCB8IG51bGwgPSBudWxsXHJcbiAgbGV0IGJlc3RTY29yZSA9IC0xXHJcbiAgZm9yIChjb25zdCBmb3JtIG9mIGZvcm1zKSB7XHJcbiAgICBjb25zdCBmaWVsZHMgPSBsaXN0KGZvcm0sIEZJRUxEX1NFTEVDVE9SKS5maWx0ZXIoaXNGaWxsYWJsZSkubGVuZ3RoXHJcbiAgICBjb25zdCBsYWJlbHMgPSBsaXN0KGZvcm0sIFwibGFiZWwsIGxlZ2VuZFwiKS5maWx0ZXIoaXNWaXNpYmxlKS5sZW5ndGhcclxuICAgIGNvbnN0IHNjb3JlID0gMTAgKiBmaWVsZHMgKyBsYWJlbHNcclxuICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xyXG4gICAgICBiZXN0U2NvcmUgPSBzY29yZVxyXG4gICAgICBiZXN0ID0gZm9ybVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYmVzdCB8fCBib2R5XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpZWxkQ29udGFpbmVyKGVsOiBBbnlFbCwgcm9vdDogQW55RWwpOiBBbnlFbCB7XHJcbiAgY29uc3QgbWF4U2libGluZ3MgPVxyXG4gICAgKGVsLnRhZ05hbWUgfHwgXCJcIikudG9VcHBlckNhc2UoKSA9PT0gXCJJTlBVVFwiICYmXHJcbiAgICBbXCJyYWRpb1wiLCBcImNoZWNrYm94XCJdLmluY2x1ZGVzKGVsLnR5cGUgfHwgXCJcIilcclxuICAgICAgPyAxMlxyXG4gICAgICA6IDRcclxuICBsZXQgbm9kZTogQW55RWwgfCBudWxsID0gZWwucGFyZW50RWxlbWVudFxyXG4gIGxldCBiZXN0OiBBbnlFbCA9IGVsLnBhcmVudEVsZW1lbnQgfHwgcm9vdFxyXG4gIGNvbnN0IGJvZHkgPSBlbC5vd25lckRvY3VtZW50Py5ib2R5ID8/IG51bGxcclxuICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSByb290ICYmIG5vZGUgIT09IGJvZHkpIHtcclxuICAgIGNvbnN0IGNsYXNzSWQgPSBgJHtub2RlLmlkIHx8IFwiXCJ9ICR7Y2xhc3NTdHIobm9kZSl9YFxyXG4gICAgY29uc3Qgc2libGluZ0NvdW50ID0gbGlzdChub2RlLCBGSUVMRF9TRUxFQ1RPUikuZmlsdGVyKGlzRmlsbGFibGUpLmxlbmd0aFxyXG4gICAgY29uc3QgaGFzTGFiZWwgPSAhIW5vZGUucXVlcnlTZWxlY3Rvcj8uKFwibGFiZWwsIGxlZ2VuZFwiKVxyXG4gICAgY29uc3QgbG9va3NMaWtlRmllbGQgPVxyXG4gICAgICAvZmllbGR8Zm9ybXxxdWVzdGlvbnxncm91cHxyb3d8aXRlbXxjb250cm9sfHdyYXBwZXJ8aW5wdXQvaS50ZXN0KGNsYXNzSWQpXHJcbiAgICBpZiAoKGhhc0xhYmVsIHx8IGxvb2tzTGlrZUZpZWxkKSAmJiBzaWJsaW5nQ291bnQgPD0gbWF4U2libGluZ3MpIHtcclxuICAgICAgcmV0dXJuIG5vZGVcclxuICAgIH1cclxuICAgIGlmIChoYXNMYWJlbCB8fCBsb29rc0xpa2VGaWVsZCkgYmVzdCA9IG5vZGVcclxuICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnRcclxuICB9XHJcbiAgcmV0dXJuIGJlc3RcclxufVxyXG5cclxuZnVuY3Rpb24gbGFiZWxGb3JJZChyb290OiBBbnlFbCB8IERvY3VtZW50LCBpZDogc3RyaW5nKTogQW55RWwgfCBudWxsIHtcclxuICBpZiAoIWlkKSByZXR1cm4gbnVsbFxyXG4gIGNvbnN0IHNhZmUgPSBpZC5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIikucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGhpdCA9IChyb290IGFzIEFueUVsKS5xdWVyeVNlbGVjdG9yPy4oYGxhYmVsW2Zvcj1cIiR7c2FmZX1cIl1gKSB8fCBudWxsXHJcbiAgICByZXR1cm4gaGl0ICYmIGlzVmlzaWJsZShoaXQpID8gaGl0IDogbnVsbFxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVMYWJlbChlbDogQW55RWwsIGNvbnRhaW5lcjogQW55RWwpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGJ5Rm9yID1cclxuICAgIGVsLmlkICYmXHJcbiAgICAobGFiZWxGb3JJZChjb250YWluZXIsIGVsLmlkKSB8fFxyXG4gICAgICBsYWJlbEZvcklkKGVsLm93bmVyRG9jdW1lbnQgYXMgdW5rbm93biBhcyBEb2N1bWVudCwgZWwuaWQpKVxyXG4gIGlmIChieUZvcikge1xyXG4gICAgY29uc3QgdGV4dCA9IGNsZWFuTGFiZWwoYnlGb3IudGV4dENvbnRlbnQpXHJcbiAgICBpZiAodGV4dCkgcmV0dXJuIHRleHRcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3Nlc3RMYWJlbCA9IGVsLmNsb3Nlc3Q/LihcImxhYmVsXCIpXHJcbiAgaWYgKGNsb3Nlc3RMYWJlbCAmJiBpc1Zpc2libGUoY2xvc2VzdExhYmVsKSkge1xyXG4gICAgY29uc3QgdGV4dCA9IGNsZWFuTGFiZWwoY2xvc2VzdExhYmVsLnRleHRDb250ZW50KVxyXG4gICAgaWYgKHRleHQpIHJldHVybiB0ZXh0XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcmlhID0gY2xlYW5MYWJlbChlbC5nZXRBdHRyaWJ1dGU/LihcImFyaWEtbGFiZWxcIikpXHJcbiAgaWYgKGFyaWEgJiYgIS9eKHNlbGVjdHxjaG9vc2V8b3B0aW9ufHllc3xub3x1cGxvYWR8YnJvd3NlKSQvaS50ZXN0KGFyaWEpKSB7XHJcbiAgICByZXR1cm4gYXJpYVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbGFiZWxsZWRCeSA9IChlbC5nZXRBdHRyaWJ1dGU/LihcImFyaWEtbGFiZWxsZWRieVwiKSB8fCBcIlwiKVxyXG4gICAgLnNwbGl0KC9cXHMrLylcclxuICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgIC5tYXAoKGlkKSA9PiBlbC5vd25lckRvY3VtZW50Py5nZXRFbGVtZW50QnlJZD8uKGlkKSB8fCBudWxsKVxyXG4gICAgLmZpbHRlcigobik6IG4gaXMgQW55RWwgPT4gISFuICYmIGlzVmlzaWJsZShuKSlcclxuICAgIC5tYXAoKG4pID0+IG4udGV4dENvbnRlbnQpXHJcbiAgICAuam9pbihcIiBcIilcclxuICBjb25zdCBhcmlhVGV4dCA9IGNsZWFuTGFiZWwobGFiZWxsZWRCeSlcclxuICBpZiAoYXJpYVRleHQpIHJldHVybiBhcmlhVGV4dFxyXG5cclxuICBjb25zdCBjYW5kaWRhdGVzID0gbGlzdChcclxuICAgIGNvbnRhaW5lcixcclxuICAgIFwibGFiZWwsIGxlZ2VuZCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgc3BhbiwgZGl2XCJcclxuICApLmZpbHRlcigobikgPT4ge1xyXG4gICAgaWYgKCFpc1Zpc2libGUobikpIHJldHVybiBmYWxzZVxyXG4gICAgaWYgKG4uY29udGFpbnM/LihlbCkgJiYgbi50YWdOYW1lICE9PSBcIkxBQkVMXCIpIHJldHVybiBmYWxzZVxyXG4gICAgY29uc3QgdCA9IGNsZWFuTGFiZWwobi50ZXh0Q29udGVudClcclxuICAgIHJldHVybiAhIXQgJiYgIS9eKHNlbGVjdHxjaG9vc2V8b3B0aW9ufHllc3xub3x1cGxvYWR8YnJvd3NlKSQvaS50ZXN0KHQpXHJcbiAgfSlcclxuICByZXR1cm4gY2xlYW5MYWJlbChjYW5kaWRhdGVzWzBdPy50ZXh0Q29udGVudClcclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZXF1aXJlZChlbDogQW55RWwsIGNvbnRhaW5lcjogQW55RWwpIHtcclxuICBpZiAoZWwuaGFzQXR0cmlidXRlPy4oXCJyZXF1aXJlZFwiKSB8fCBlbC5nZXRBdHRyaWJ1dGU/LihcImFyaWEtcmVxdWlyZWRcIikgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gL1xcKnxyZXF1aXJlZHxlcmZvcmRlcmxpY2gvaS50ZXN0KGNvbnRhaW5lci50ZXh0Q29udGVudCB8fCBcIlwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RPcHRpb25zKHNlbGVjdDogQW55RWwpOiBzdHJpbmdbXSB7XHJcbiAgY29uc3Qgb3B0cyA9IHNlbGVjdC5vcHRpb25zID8gQXJyYXkuZnJvbShzZWxlY3Qub3B0aW9ucykgOiBbXVxyXG4gIHJldHVybiBvcHRzXHJcbiAgICAubWFwKChvKSA9PiBjb2xsYXBzZVdzKG8udGV4dENvbnRlbnQpLnJlcGxhY2UoL1xccypcXCorXFxzKi9nLCBcIiBcIikudHJpbSgpKVxyXG4gICAgLmZpbHRlcigodCkgPT4gdCAmJiAhL14oc2VsZWN0fHBsZWFzZSBzZWxlY3R8LS0pJC9pLnRlc3QodCkpXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIERpc2NvdmVyT3B0aW9ucyA9IHtcclxuICAvKiogUHJlZmVyIGEgcm9vdCBzZWxlY3RvciAoZS5nLiBHcmVlbmhvdXNlICNhcHBsaWNhdGlvbl9mb3JtKSAqL1xyXG4gIHByZWZlclJvb3RTZWxlY3Rvcj86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzY292ZXJHZW5lcmljRmllbGRzKFxyXG4gIGRvYzogRG9jdW1lbnQsXHJcbiAgb3B0czogRGlzY292ZXJPcHRpb25zID0ge31cclxuKTogRGlzY292ZXJlZEZpZWxkW10ge1xyXG4gIGNvbnN0IHJvb3QgPSBwaWNrRm9ybVJvb3QoZG9jLCBvcHRzLnByZWZlclJvb3RTZWxlY3RvcilcclxuICBjb25zdCBub2RlcyA9IGxpc3Qocm9vdCwgRklFTERfU0VMRUNUT1IpLmZpbHRlcihpc0ZpbGxhYmxlKVxyXG4gIGNvbnN0IG91dDogRGlzY292ZXJlZEZpZWxkW10gPSBbXVxyXG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0PEFueUVsPigpXHJcblxyXG4gIGZvciAoY29uc3QgZWwgb2Ygbm9kZXMpIHtcclxuICAgIGlmIChzZWVuLmhhcyhlbCkpIGNvbnRpbnVlXHJcbiAgICBjb25zdCB0YWcgPSAoZWwudGFnTmFtZSB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpXHJcblxyXG4gICAgaWYgKHRhZyA9PT0gXCJJTlBVVFwiICYmIChlbC50eXBlID09PSBcInJhZGlvXCIgfHwgZWwudHlwZSA9PT0gXCJjaGVja2JveFwiKSkge1xyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBmaWVsZENvbnRhaW5lcihlbCwgcm9vdClcclxuICAgICAgY29uc3QgZ3JvdXAgPSBsaXN0KGNvbnRhaW5lciwgYGlucHV0W3R5cGU9XCIke2VsLnR5cGV9XCJdYCkuZmlsdGVyKGlzRmlsbGFibGUpXHJcbiAgICAgIGNvbnN0IG5hbWVkID1cclxuICAgICAgICBlbC5uYW1lIHx8IGVsLmlkXHJcbiAgICAgICAgICA/IGdyb3VwLmZpbHRlcigoZykgPT4gZy5uYW1lID09PSBlbC5uYW1lIHx8IGcuaWQgPT09IGVsLmlkKVxyXG4gICAgICAgICAgOiBncm91cFxyXG4gICAgICBmb3IgKGNvbnN0IGcgb2YgbmFtZWQpIHNlZW4uYWRkKGcpXHJcblxyXG4gICAgICBjb25zdCBsYWJlbCA9IHJlc29sdmVMYWJlbChlbCwgY29udGFpbmVyKVxyXG4gICAgICBpZiAoIWxhYmVsKSBjb250aW51ZVxyXG4gICAgICBjb25zdCBvcHRpb25zID0gbmFtZWRcclxuICAgICAgICAubWFwKChnKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsYWIgPVxyXG4gICAgICAgICAgICAoZy5pZCAmJiBsYWJlbEZvcklkKGNvbnRhaW5lciwgZy5pZCk/LnRleHRDb250ZW50KSB8fFxyXG4gICAgICAgICAgICBnLmNsb3Nlc3Q/LihcImxhYmVsXCIpPy50ZXh0Q29udGVudCB8fFxyXG4gICAgICAgICAgICBnLmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1sYWJlbFwiKSB8fFxyXG4gICAgICAgICAgICBnLnZhbHVlXHJcbiAgICAgICAgICByZXR1cm4gY29sbGFwc2VXcyhsYWIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXHJcblxyXG4gICAgICBvdXQucHVzaCh7XHJcbiAgICAgICAgdHlwZTogZWwudHlwZSA9PT0gXCJyYWRpb1wiID8gXCJyYWRpb1wiIDogXCJjaGVja2JveFwiLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHJlcXVpcmVkOiBuYW1lZC5zb21lKChnKSA9PiBpc1JlcXVpcmVkKGcsIGNvbnRhaW5lcikpLFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgfSlcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICBzZWVuLmFkZChlbClcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGZpZWxkQ29udGFpbmVyKGVsLCByb290KVxyXG4gICAgY29uc3QgbGFiZWwgPSByZXNvbHZlTGFiZWwoZWwsIGNvbnRhaW5lcilcclxuICAgIGlmICghbGFiZWwpIGNvbnRpbnVlXHJcblxyXG4gICAgaWYgKHRhZyA9PT0gXCJTRUxFQ1RcIikge1xyXG4gICAgICBvdXQucHVzaCh7XHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICByZXF1aXJlZDogaXNSZXF1aXJlZChlbCwgY29udGFpbmVyKSxcclxuICAgICAgICBvcHRpb25zOiBzZWxlY3RPcHRpb25zKGVsKVxyXG4gICAgICB9KVxyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIG91dC5wdXNoKHtcclxuICAgICAgdHlwZTogdGFnID09PSBcIlRFWFRBUkVBXCIgPyBcInRleHRhcmVhXCIgOiBcInRleHRcIixcclxuICAgICAgbGFiZWwsXHJcbiAgICAgIHJlcXVpcmVkOiBpc1JlcXVpcmVkKGVsLCBjb250YWluZXIpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG91dFxyXG59XHJcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGRpc2NvdmVyR2VuZXJpY0ZpZWxkcyB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1nZW5lcmljXCJcclxuaW1wb3J0IHR5cGUgeyBEaXNjb3ZlcmVkRmllbGQgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdHlwZXNcIlxyXG5cclxuLyoqIExldmVyIGhpcmUgYXBwbHkgZm9ybXMuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNjb3ZlckxldmVyRmllbGRzKGRvYzogRG9jdW1lbnQpOiBEaXNjb3ZlcmVkRmllbGRbXSB7XHJcbiAgcmV0dXJuIGRpc2NvdmVyR2VuZXJpY0ZpZWxkcyhkb2MsIHtcclxuICAgIHByZWZlclJvb3RTZWxlY3RvcjogXCIuYXBwbGljYXRpb24tZm9ybSwgZm9ybSNhcHBsaWNhdGlvbi1mb3JtLCBmb3JtXCJcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCB7IGRpc2NvdmVyR2VuZXJpY0ZpZWxkcyB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1nZW5lcmljXCJcclxuaW1wb3J0IHR5cGUgeyBEaXNjb3ZlcmVkRmllbGQgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdHlwZXNcIlxyXG5cclxuLyoqIFBlcnNvbmlvIGNhcmVlcnMgYXBwbHkgcGFnZXMg4oCUIG5hdGl2ZSBmb3JtIGZpZWxkcy4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyUGVyc29uaW9GaWVsZHMoZG9jOiBEb2N1bWVudCk6IERpc2NvdmVyZWRGaWVsZFtdIHtcclxuICByZXR1cm4gZGlzY292ZXJHZW5lcmljRmllbGRzKGRvYywge1xyXG4gICAgcHJlZmVyUm9vdFNlbGVjdG9yOiBcImZvcm0uYXBwbGljYXRpb24tZm9ybSwgZm9ybVwiXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgeyBkaXNjb3ZlckdlbmVyaWNGaWVsZHMgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItZ2VuZXJpY1wiXHJcbmltcG9ydCB0eXBlIHsgRGlzY292ZXJlZEZpZWxkIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3R5cGVzXCJcclxuXHJcbi8qKlxyXG4gKiBXb3JrZGF5IGFwcGx5IOKAlCBtYW55IHdpZGdldHMgYXJlIGN1c3RvbTsgdGhpcyBkaXNjb3ZlcnMgbmF0aXZlIGlucHV0cyBwcmVzZW50XHJcbiAqIGluIHRoZSBmaXh0dXJlIC8gc2ltcGxpZmllZCBwYWdlcy4gRnVsbCBXb3JrZGF5IG9wcyBzdGF5IGluIHRoZSBlbmdpbmUgYnVuZGxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyV29ya2RheUZpZWxkcyhkb2M6IERvY3VtZW50KTogRGlzY292ZXJlZEZpZWxkW10ge1xyXG4gIHJldHVybiBkaXNjb3ZlckdlbmVyaWNGaWVsZHMoZG9jLCB7XHJcbiAgICBwcmVmZXJSb290U2VsZWN0b3I6ICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwiYXBwbHlGbG93XCJdLCBmb3JtLCBib2R5J1xyXG4gIH0pXHJcbn1cclxuIiwiLyoqXHJcbiAqIFJlc29sdmUgQVRTIGlkIGZyb20gaG9zdG5hbWUvaHJlZiB1c2luZyB0aGUgSm9icmlnaHQgc2l0ZSByZWdpc3RyeS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBTSVRFX1JFR0lTVFJZLCB0eXBlIFNpdGVEZWZpbml0aW9uIH0gZnJvbSBcIn5jb3JlL3N1cHBvcnRlZC1zaXRlc1wiXHJcblxyXG5leHBvcnQgdHlwZSBSZWdpc3RyeUF0c0lkID0gc3RyaW5nXHJcblxyXG5mdW5jdGlvbiBob3N0TWF0Y2hlc0RvbWFpbihob3N0bmFtZTogc3RyaW5nLCBkb21haW46IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGggPSBob3N0bmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgY29uc3QgZCA9IGRvbWFpbi50b0xvd2VyQ2FzZSgpXHJcbiAgcmV0dXJuIGggPT09IGQgfHwgaC5lbmRzV2l0aChcIi5cIiArIGQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvc3RNYXRjaGVzUGF0dGVybihob3N0bmFtZTogc3RyaW5nLCBwYXR0ZXJuOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAvLyBNYXRjaFBhdHRlcm4tbGlrZTogKjovLyouZXhhbXBsZS5jb20vKiBvciAqOi8vZXhhbXBsZS5jb20vKlxyXG4gIGNvbnN0IG0gPSAvXlteOl0rOlxcL1xcLyhbXi9dKykvLmV4ZWMocGF0dGVybilcclxuICBpZiAoIW0pIHJldHVybiBmYWxzZVxyXG4gIGxldCBob3N0ID0gbVsxXS50b0xvd2VyQ2FzZSgpXHJcbiAgaWYgKGhvc3Quc3RhcnRzV2l0aChcIiouXCIpKSB7XHJcbiAgICBjb25zdCBiYXNlID0gaG9zdC5zbGljZSgyKVxyXG4gICAgcmV0dXJuIGhvc3RuYW1lID09PSBiYXNlIHx8IGhvc3RuYW1lLmVuZHNXaXRoKFwiLlwiICsgYmFzZSlcclxuICB9XHJcbiAgaWYgKGhvc3QgPT09IFwiKlwiKSByZXR1cm4gdHJ1ZVxyXG4gIHJldHVybiBob3N0bmFtZSA9PT0gaG9zdCB8fCBob3N0bmFtZS5lbmRzV2l0aChcIi5cIiArIGhvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGhPayhwYXRobmFtZTogc3RyaW5nLCBocmVmOiBzdHJpbmcsIHNpdGU6IFNpdGVEZWZpbml0aW9uKTogYm9vbGVhbiB7XHJcbiAgaWYgKHNpdGUucGF0aFJlZ2V4KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIW5ldyBSZWdFeHAoc2l0ZS5wYXRoUmVnZXgpLnRlc3QocGF0aG5hbWUpKSByZXR1cm4gZmFsc2VcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHNpdGUudXJsUmVnZXgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghbmV3IFJlZ0V4cChzaXRlLnVybFJlZ2V4KS50ZXN0KGhyZWYpKSByZXR1cm4gZmFsc2VcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLyoqXHJcbiAqIEJlc3QtZWZmb3J0IEFUUyBpZCBmcm9tIFNJVEVfUkVHSVNUUlkgKGdyZWVuaG91c2UsIHdvcmtkYXksIOKApikuXHJcbiAqIFJldHVybnMgbnVsbCB3aGVuIG5vdGhpbmcgbWF0Y2hlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RSZWdpc3RyeUF0cyhcclxuICBob3N0bmFtZTogc3RyaW5nLFxyXG4gIGhyZWYgPSBcIlwiXHJcbik6IFJlZ2lzdHJ5QXRzSWQgfCBudWxsIHtcclxuICBjb25zdCBoID0gKGhvc3RuYW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKClcclxuICBsZXQgcGF0aG5hbWUgPSBcIi9cIlxyXG4gIHRyeSB7XHJcbiAgICBwYXRobmFtZSA9IGhyZWYgPyBuZXcgVVJMKGhyZWYpLnBhdGhuYW1lIDogXCIvXCJcclxuICB9IGNhdGNoIHtcclxuICAgIHBhdGhuYW1lID0gXCIvXCJcclxuICB9XHJcblxyXG4gIGxldCBiZXN0OiB7IGlkOiBzdHJpbmc7IHNjb3JlOiBudW1iZXIgfSB8IG51bGwgPSBudWxsXHJcblxyXG4gIGZvciAoY29uc3QgW2lkLCBzaXRlXSBvZiBPYmplY3QuZW50cmllcyhTSVRFX1JFR0lTVFJZKSkge1xyXG4gICAgbGV0IHNjb3JlID0gMFxyXG4gICAgY29uc3QgZG9tYWlucyA9IHNpdGUuZG9tYWlucyA/PyBbXVxyXG4gICAgY29uc3QgcGF0dGVybnMgPSBzaXRlLnBhdHRlcm5zID8/IFtdXHJcblxyXG4gICAgZm9yIChjb25zdCBkIG9mIGRvbWFpbnMpIHtcclxuICAgICAgaWYgKGhvc3RNYXRjaGVzRG9tYWluKGgsIGQpKSB7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heChzY29yZSwgZC5sZW5ndGggKyAxMClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBwIG9mIHBhdHRlcm5zKSB7XHJcbiAgICAgIGlmIChob3N0TWF0Y2hlc1BhdHRlcm4oaCwgcCkpIHtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KHNjb3JlLCAyMClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNjb3JlID09PSAwKSBjb250aW51ZVxyXG4gICAgaWYgKCFwYXRoT2socGF0aG5hbWUsIGhyZWYgfHwgYGh0dHBzOi8vJHtofS9gLCBzaXRlKSkgY29udGludWVcclxuXHJcbiAgICAvLyBQcmVmZXIgY29uc3RyYWluZWQgcGF0aCBtYXRjaGVzXHJcbiAgICBpZiAoc2l0ZS5wYXRoUmVnZXggfHwgc2l0ZS51cmxSZWdleCkgc2NvcmUgKz0gNTBcclxuXHJcbiAgICBpZiAoIWJlc3QgfHwgc2NvcmUgPiBiZXN0LnNjb3JlKSBiZXN0ID0geyBpZCwgc2NvcmUgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGJlc3Q/LmlkID8/IG51bGxcclxufVxyXG4iLCIvKipcbiAqIFN1cHBvcnRlZCBBVFMgc2l0ZSByZWdpc3RyeSArIGRlcml2ZWQgbGlzdHMuXG4gKiBSZWdpc3RyeSBkYXRhIGxpdmVzIGluIHNpdGUtcmVnaXN0cnkucmF3LmpzIChleHRyYWN0ZWQgZnJvbSBKb2JyaWdodCB2MS4yMy4wKS5cbiAqL1xuXG5pbXBvcnQgeyBNYXRjaFBhdHRlcm4gfSBmcm9tIFwifmNvcmUvbWF0Y2gtcGF0dGVybnNcIlxuaW1wb3J0IHsgU0lURV9SRUdJU1RSWSBhcyBSQVdfUkVHSVNUUlkgfSBmcm9tIFwifmNvcmUvc2l0ZS1yZWdpc3RyeS5yYXdcIlxuXG5leHBvcnQgdHlwZSBTaXRlRGVmaW5pdGlvbiA9IHtcbiAgZG9tYWlucz86IHN0cmluZ1tdXG4gIHBhdHRlcm5zPzogc3RyaW5nW11cbiAgaWZyYW1lRG9tYWlucz86IHN0cmluZ1tdXG4gIHF1ZXJ5UGFyYW1zPzogc3RyaW5nW11cbiAgcGF0aFJlZ2V4Pzogc3RyaW5nXG4gIHVybFJlZ2V4Pzogc3RyaW5nXG4gIHBhZ2VTb3VyY2VLZXl3b3JkPzogc3RyaW5nXG4gIHBhZ2VTb3VyY2VEb21haW4/OiBzdHJpbmdcbiAgaWZyYW1lT25seT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IFNJVEVfUkVHSVNUUlkgPSBSQVdfUkVHSVNUUlkgYXMgUmVjb3JkPHN0cmluZywgU2l0ZURlZmluaXRpb24+XG5cbmV4cG9ydCBjb25zdCBQSU5QT0lOVEhRX0NBUkVFUlNfQ0ROID0gXCJkMm41aWVkOTRtYXpvcC5jbG91ZGZyb250Lm5ldFwiXG5leHBvcnQgY29uc3QgRUlHSFRGT0xEX0NBUkVFUkhVQl9KT0JfUEFUSF9SRUdFWF9TT1VSQ0UgPVxuICBcIl4vY2FyZWVyaHViL2V4cGxvcmUvam9icy8oPyFhcHBseS8/JClbXi8/I10rLz8kXCJcblxuY29uc3QgZWlnaHRmb2xkQ2FyZWVySHViSm9iUGF0aFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgRUlHSFRGT0xEX0NBUkVFUkhVQl9KT0JfUEFUSF9SRUdFWF9TT1VSQ0VcbilcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWlnaHRmb2xkQ2FyZWVySHViSm9iUGF0aChwYXRobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBlaWdodGZvbGRDYXJlZXJIdWJKb2JQYXRoUmVnZXgudGVzdChwYXRobmFtZSlcbn1cblxuZnVuY3Rpb24gaG9zdG5hbWVGcm9tTWF0Y2hQYXR0ZXJuKHBhdHRlcm46IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBtYXRjaCA9IC9eW146XSs6XFwvXFwvKFteL10rKS8uZXhlYyhwYXR0ZXJuKVxuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbFxuICBjb25zdCBob3N0ID0gbWF0Y2hbMV1cbiAgaWYgKCFob3N0IHx8IGhvc3QgPT09IFwiKlwiKSByZXR1cm4gbnVsbFxuICByZXR1cm4gaG9zdC5zdGFydHNXaXRoKFwiKi5cIikgPyBob3N0LnNsaWNlKDIpIDogaG9zdFxufVxuXG5jb25zdCB1bmNvbnN0cmFpbmVkU2l0ZXMgPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpLmZpbHRlcihcbiAgKHNpdGUpID0+ICFzaXRlLnBhdGhSZWdleCAmJiAhc2l0ZS51cmxSZWdleFxuKVxuXG5leHBvcnQgY29uc3QgU1VQUE9SVF9ET01BSU5TID0gdW5jb25zdHJhaW5lZFNpdGVzLmZsYXRNYXAoXG4gIChzaXRlKSA9PiBzaXRlLmRvbWFpbnMgPz8gW11cbilcblxuZXhwb3J0IGNvbnN0IFNVUFBPUlRfUEFUVEVSTlMgPSB1bmNvbnN0cmFpbmVkU2l0ZXNcbiAgLmZsYXRNYXAoKHNpdGUpID0+IHNpdGUucGF0dGVybnMgPz8gW10pXG4gIC5tYXAoKHBhdHRlcm4pID0+IG5ldyBNYXRjaFBhdHRlcm4ocGF0dGVybikpXG5cbmV4cG9ydCBjb25zdCBTVVBQT1JUX0hPU1RTID0gQXJyYXkuZnJvbShcbiAgbmV3IFNldChcbiAgICBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpLmZsYXRNYXAoKHNpdGUpID0+IFtcbiAgICAgIC4uLihzaXRlLmRvbWFpbnMgPz8gW10pLFxuICAgICAgLi4uKHNpdGUucGF0dGVybnMgPz8gW10pXG4gICAgICAgIC5tYXAoaG9zdG5hbWVGcm9tTWF0Y2hQYXR0ZXJuKVxuICAgICAgICAuZmlsdGVyKChob3N0KTogaG9zdCBpcyBzdHJpbmcgPT4gaG9zdCAhPT0gbnVsbClcbiAgICBdKVxuICApXG4pXG5cbmV4cG9ydCB0eXBlIENvbnN0cmFpbmVkU2l0ZVJ1bGUgPSB7XG4gIGRvbWFpbnM6IHN0cmluZ1tdXG4gIHBhdHRlcm5zOiBNYXRjaFBhdHRlcm5bXVxuICBwYXRoUmVnZXg/OiBSZWdFeHBcbiAgdXJsUmVnZXg/OiBSZWdFeHBcbn1cblxuZXhwb3J0IGNvbnN0IENPTlNUUkFJTkVEX1NJVEVfUlVMRVM6IENvbnN0cmFpbmVkU2l0ZVJ1bGVbXSA9IE9iamVjdC52YWx1ZXMoXG4gIFNJVEVfUkVHSVNUUllcbilcbiAgLmZpbHRlcihcbiAgICAoc2l0ZSkgPT5cbiAgICAgICh0eXBlb2Ygc2l0ZS5wYXRoUmVnZXggPT09IFwic3RyaW5nXCIgJiYgc2l0ZS5wYXRoUmVnZXgubGVuZ3RoID4gMCkgfHxcbiAgICAgICh0eXBlb2Ygc2l0ZS51cmxSZWdleCA9PT0gXCJzdHJpbmdcIiAmJiBzaXRlLnVybFJlZ2V4Lmxlbmd0aCA+IDApXG4gIClcbiAgLm1hcCgoc2l0ZSkgPT4gKHtcbiAgICBkb21haW5zOiBzaXRlLmRvbWFpbnMgPz8gW10sXG4gICAgcGF0dGVybnM6IChzaXRlLnBhdHRlcm5zID8/IFtdKS5tYXAoKHBhdHRlcm4pID0+IG5ldyBNYXRjaFBhdHRlcm4ocGF0dGVybikpLFxuICAgIHBhdGhSZWdleDogc2l0ZS5wYXRoUmVnZXggPyBuZXcgUmVnRXhwKHNpdGUucGF0aFJlZ2V4KSA6IHVuZGVmaW5lZCxcbiAgICB1cmxSZWdleDogc2l0ZS51cmxSZWdleCA/IG5ldyBSZWdFeHAoc2l0ZS51cmxSZWdleCkgOiB1bmRlZmluZWRcbiAgfSkpXG5cbmV4cG9ydCBjb25zdCBJRlJBTUVfQ0hFQ0tfUEFUVEVSTiA9IE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSkuZmxhdE1hcChcbiAgKHNpdGUpID0+IHNpdGUuaWZyYW1lRG9tYWlucyA/PyBbXVxuKVxuXG5leHBvcnQgY29uc3QgUEFHRV9TT1VSQ0VfQVRTX0xJU1QgPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpXG4gIC5maWx0ZXIoKHNpdGUpID0+IHNpdGUucGFnZVNvdXJjZUtleXdvcmQgJiYgc2l0ZS5wYWdlU291cmNlRG9tYWluKVxuICAubWFwKFxuICAgIChzaXRlKSA9PlxuICAgICAgW3NpdGUucGFnZVNvdXJjZUtleXdvcmQhLCBzaXRlLnBhZ2VTb3VyY2VEb21haW4hXSBhcyBbc3RyaW5nLCBzdHJpbmddXG4gIClcblxuZXhwb3J0IGNvbnN0IElGUkFNRV9PTkxZX0RPTUFJTlMgPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpXG4gIC5maWx0ZXIoKHNpdGUpID0+IHNpdGUuaWZyYW1lT25seSlcbiAgLmZsYXRNYXAoKHNpdGUpID0+IHNpdGUuZG9tYWlucyA/PyBbXSlcblxuZXhwb3J0IGNvbnN0IFFVRVJZX1BBUkFNX0xJU1QgPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpLmZsYXRNYXAoXG4gIChzaXRlKSA9PiBzaXRlLnF1ZXJ5UGFyYW1zID8/IFtdXG4pXG4iLCIvKipcbiAqIE1pbmltYWwgQ2hyb21lIG1hdGNoLXBhdHRlcm4gaW1wbGVtZW50YXRpb24gZm9yIHN1cHBvcnRlZC1zaXRlcy5cbiAqIChQb3J0ZWQgc3Vic2V0IG9mIEB3ZWJleHQtY29yZS9tYXRjaC1wYXR0ZXJucy4pXG4gKi9cblxuZXhwb3J0IGNsYXNzIEludmFsaWRNYXRjaFBhdHRlcm4gZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm46IHN0cmluZywgcmVhc29uOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgSW52YWxpZCBtYXRjaCBwYXR0ZXJuIFwiJHtwYXR0ZXJufVwiOiAke3JlYXNvbn1gKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaFBhdHRlcm4ge1xuICBzdGF0aWMgUFJPVE9DT0xTID0gW1wiaHR0cFwiLCBcImh0dHBzXCIsIFwiZmlsZVwiLCBcImZ0cFwiLCBcInVyblwiXSBhcyBjb25zdFxuXG4gIGlzQWxsVXJscyA9IGZhbHNlXG4gIHByb3RvY29sTWF0Y2hlczogc3RyaW5nW10gPSBbXVxuICBob3N0bmFtZU1hdGNoID0gXCIqXCJcbiAgcGF0aG5hbWVNYXRjaCA9IFwiKlwiXG5cbiAgY29uc3RydWN0b3IocGF0dGVybjogc3RyaW5nKSB7XG4gICAgaWYgKHBhdHRlcm4gPT09IFwiPGFsbF91cmxzPlwiKSB7XG4gICAgICB0aGlzLmlzQWxsVXJscyA9IHRydWVcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gWy4uLk1hdGNoUGF0dGVybi5QUk9UT0NPTFNdXG4gICAgICB0aGlzLmhvc3RuYW1lTWF0Y2ggPSBcIipcIlxuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gXCIqXCJcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IC8oLiopOlxcL1xcLyguKj8pKFxcLy4qKS8uZXhlYyhwYXR0ZXJuKVxuICAgIGlmIChwYXJzZWQgPT0gbnVsbCkgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4ocGF0dGVybiwgXCJJbmNvcnJlY3QgZm9ybWF0XCIpXG5cbiAgICBjb25zdCBbLCBwcm90b2NvbCwgaG9zdG5hbWUsIHBhdGhuYW1lXSA9IHBhcnNlZFxuXG4gICAgaWYgKFxuICAgICAgIU1hdGNoUGF0dGVybi5QUk9UT0NPTFMuaW5jbHVkZXMocHJvdG9jb2wgYXMgKHR5cGVvZiBNYXRjaFBhdHRlcm4uUFJPVE9DT0xTKVtudW1iZXJdKSAmJlxuICAgICAgcHJvdG9jb2wgIT09IFwiKlwiXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihcbiAgICAgICAgcGF0dGVybixcbiAgICAgICAgYCR7cHJvdG9jb2x9IG5vdCBhIHZhbGlkIHByb3RvY29sICgke01hdGNoUGF0dGVybi5QUk9UT0NPTFMuam9pbihcIiwgXCIpfSlgXG4gICAgICApXG4gICAgfVxuICAgIGlmIChob3N0bmFtZS5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkTWF0Y2hQYXR0ZXJuKHBhdHRlcm4sIFwiSG9zdG5hbWUgY2Fubm90IGluY2x1ZGUgYSBwb3J0XCIpXG4gICAgfVxuICAgIGlmIChcbiAgICAgIGhvc3RuYW1lLmluY2x1ZGVzKFwiKlwiKSAmJlxuICAgICAgaG9zdG5hbWUubGVuZ3RoID4gMSAmJlxuICAgICAgIWhvc3RuYW1lLnN0YXJ0c1dpdGgoXCIqLlwiKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4oXG4gICAgICAgIHBhdHRlcm4sXG4gICAgICAgIFwiSWYgdXNpbmcgYSB3aWxkY2FyZCAoKiksIGl0IG11c3QgZ28gYXQgdGhlIHN0YXJ0IG9mIHRoZSBob3N0bmFtZVwiXG4gICAgICApXG4gICAgfVxuXG4gICAgdGhpcy5wcm90b2NvbE1hdGNoZXMgPSBwcm90b2NvbCA9PT0gXCIqXCIgPyBbXCJodHRwXCIsIFwiaHR0cHNcIl0gOiBbcHJvdG9jb2xdXG4gICAgdGhpcy5ob3N0bmFtZU1hdGNoID0gaG9zdG5hbWVcbiAgICB0aGlzLnBhdGhuYW1lTWF0Y2ggPSBwYXRobmFtZVxuICB9XG5cbiAgaW5jbHVkZXMoaW5wdXQ6IHN0cmluZyB8IFVSTCB8IExvY2F0aW9uKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNBbGxVcmxzKSByZXR1cm4gdHJ1ZVxuICAgIGNvbnN0IHVybCA9XG4gICAgICB0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCJcbiAgICAgICAgPyBuZXcgVVJMKGlucHV0KVxuICAgICAgICA6IGlucHV0IGluc3RhbmNlb2YgTG9jYXRpb25cbiAgICAgICAgICA/IG5ldyBVUkwoaW5wdXQuaHJlZilcbiAgICAgICAgICA6IGlucHV0XG4gICAgcmV0dXJuIHRoaXMucHJvdG9jb2xNYXRjaGVzLnNvbWUoKHByb3RvY29sKSA9PiB7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cFwiKSByZXR1cm4gdGhpcy5pc0h0dHBNYXRjaCh1cmwpXG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cHNcIikgcmV0dXJuIHRoaXMuaXNIdHRwc01hdGNoKHVybClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGlzSHR0cE1hdGNoKHVybDogVVJMKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybClcbiAgfVxuXG4gIHByaXZhdGUgaXNIdHRwc01hdGNoKHVybDogVVJMKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gXCJodHRwczpcIiAmJiB0aGlzLmlzSG9zdFBhdGhNYXRjaCh1cmwpXG4gIH1cblxuICBwcml2YXRlIGlzSG9zdFBhdGhNYXRjaCh1cmw6IFVSTCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5ob3N0bmFtZU1hdGNoIHx8ICF0aGlzLnBhdGhuYW1lTWF0Y2gpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IGhvc3RSZWdleGVzID0gW1xuICAgICAgdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5ob3N0bmFtZU1hdGNoKSxcbiAgICAgIHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMuaG9zdG5hbWVNYXRjaC5yZXBsYWNlKC9eXFwqXFwuLywgXCJcIikpXG4gICAgXVxuICAgIGNvbnN0IHBhdGhSZWdleCA9IHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMucGF0aG5hbWVNYXRjaClcbiAgICByZXR1cm4gKFxuICAgICAgaG9zdFJlZ2V4ZXMuc29tZSgocmUpID0+IHJlLnRlc3QodXJsLmhvc3RuYW1lKSkgJiYgcGF0aFJlZ2V4LnRlc3QodXJsLnBhdGhuYW1lKVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFBhdHRlcm5Ub1JlZ2V4KHBhdHRlcm46IHN0cmluZyk6IFJlZ0V4cCB7XG4gICAgY29uc3QgZXNjYXBlZCA9IHBhdHRlcm4ucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke2VzY2FwZWQucmVwbGFjZSgvXFxcXFxcKi9nLCBcIi4qXCIpfSRgKVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgU0lURV9SRUdJU1RSWSA9IHtcclxuICBncmVlbmhvdXNlOiB7XHJcbiAgICBkb21haW5zOiBbXCJncmVlbmhvdXNlLmlvXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiZ3JlZW5ob3VzZS5pb1wiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJnaF9qaWRcIiwgXCJnaF9zcmNcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi8oPzpbXi9dKy9qb2JzL1xcXFxkK3xlbWJlZC9qb2JfYXBwKVwiXHJcbiAgfSxcclxuICB4Y29tcGFueTogeyBwYXR0ZXJuczogW1wiKjovL3guY29tcGFueS8qXCJdLCBwYXRoUmVnZXg6IFwiXi9jYXJlZXJzL1teL10rLz8kXCIgfSxcclxuICB3YWxtYXJ0OiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMud2FsbWFydC5jb20vKlwiXSxcclxuICAgIHBhdGhSZWdleDpcclxuICAgICAgXCJeLyh1cy9lbi8oaG9tZXxqb2JzPy9bXi9dK3xhcHBseSg/Oi8uKik/fGFwcGxpY2F0aW9uKD86Ly4qKT8pfGNvbnRlbnQvY2FyZWVycy91cy9lbi8uKikkXCJcclxuICB9LFxyXG4gIHdvcmtkYXk6IHtcclxuICAgIGRvbWFpbnM6IFtcclxuICAgICAgXCJteXdvcmtkYXlqb2JzLmNvbVwiLFxyXG4gICAgICBcIm15d29ya2RheWpvYnMtaW1wbC5jb21cIixcclxuICAgICAgXCJteXdvcmtkYXlzaXRlLmNvbVwiLFxyXG4gICAgICBcIm15d29ya2RheS5jb21cIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAga3VsYTogeyBkb21haW5zOiBbXCJjYXJlZXJzLmt1bGEuYWlcIl0sIHBhdGhSZWdleDogXCJeL1teL10rL1teL10rXCIgfSxcclxuICBpY2ltczoge1xyXG4gICAgZG9tYWluczogW1wiaWNpbXMuY29tXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiaWNpbXMuY29tXCJdLFxyXG4gICAgaWZyYW1lT25seTogITAsXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzL1xcXFxkKyg/Oi98JClcIlxyXG4gIH0sXHJcbiAgZG92ZXI6IHsgZG9tYWluczogW1wiZG92ZXIuY29tXCJdIH0sXHJcbiAgYWRvYmU6IHsgZG9tYWluczogW1wiY2FyZWVycy5hZG9iZS5jb21cIl0sIHBhdGhSZWdleDogXCJeL1teL10rL1teL10rL2FwcGx5XCIgfSxcclxuICB6b2hvcmVjcnVpdDoge1xyXG4gICAgZG9tYWluczogW1wiem9ob3JlY3J1aXQuY29tXCIsIFwiem9ob3JlY3J1aXQuY2FcIiwgXCJ6b2hvcmVjcnVpdC5ldVwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcInpvaG9yZWNydWl0LmNvbVwiLCBcInpvaG9yZWNydWl0LmNhXCIsIFwiem9ob3JlY3J1aXQuZXVcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzL0NhcmVlcnMvLitcIlxyXG4gIH0sXHJcbiAgZ2VtOiB7IGRvbWFpbnM6IFtcImpvYnMuZ2VtLmNvbVwiXSwgcGF0aFJlZ2V4OiBcIl4vW1xcXFx3LV0rL1tcXFxcdy1dKy8/JFwiIH0sXHJcbiAgZ3VzdG86IHtcclxuICAgIGRvbWFpbnM6IFtcImpvYnMuZ3VzdG8uY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vcG9zdGluZ3MvW14vXSsoPzovYXBwbGljYW50cy9uZXcoPzovLiopPyk/Lz8kXCJcclxuICB9LFxyXG4gIGhpcmluZ3RoaW5nOiB7XHJcbiAgICBkb21haW5zOiBbXHJcbiAgICAgIFwiaGlyaW5ndGhpbmcuY29tXCIsXHJcbiAgICAgIFwib2FzaXNyZWNydWl0LmNvbVwiLFxyXG4gICAgICBcImVsZXZhdGUtYXRzLmNvbVwiLFxyXG4gICAgICBcInByaXNtaHItaGlyZS5jb21cIixcclxuICAgICAgXCJnbmFoaXJpbmcuY29tXCIsXHJcbiAgICAgIFwicmlwcGxpbmctYXRzLmNvbVwiXHJcbiAgICBdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vam9iL1xcXFxkKy9cIlxyXG4gIH0sXHJcbiAgaHVic3BvdDogeyBwYXR0ZXJuczogW1wiKjovL3d3dy5odWJzcG90LmNvbS9jYXJlZXJzL2pvYnMvKlwiXSB9LFxyXG4gIHBheWNvbW9ubGluZToge1xyXG4gICAgZG9tYWluczogW1wicGF5Y29tb25saW5lLmNvbVwiLCBcInBheWNvbW9ubGluZS5uZXRcIl0sXHJcbiAgICB1cmxSZWdleDpcclxuICAgICAgXCJeL3Y0L2F0cy93ZWJcXFxcLnBocC9wb3J0YWwvW14vXSsvKD86YXBwbGljYXRpb25zKD86Wy8/I10uKik/fGpvYnMvW14vPyNdKyg/Ols/I10uKik/KVwiXHJcbiAgfSxcclxuICB0ZWFtdGFpbG9yOiB7XHJcbiAgICBkb21haW5zOiBbXCJ0ZWFtdGFpbG9yLmNvbVwiLCBcImNhcmVlcnMuYmx1ZW9yYW5nZS5kaWdpdGFsXCIsIFwiY2FyZWVycy50b3RhbHBlcmZvcm0uY29tXCJdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwidGVhbXRhaWxvci1jZG4uY29tXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcInRlYW10YWlsb3IuY29tXCIsXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzLy4rXCJcclxuICB9LFxyXG4gIGNhdHNvbmU6IHtcclxuICAgIGRvbWFpbnM6IFtcImNhdHNvbmUuY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vY2FyZWVycy9bXi9dKy9qb2JzL1teL10rKD86L2FwcGx5KT8vPyRcIlxyXG4gIH0sXHJcbiAgbWV0YWNhcmVlcnM6IHtcclxuICAgIGRvbWFpbnM6IFtcIm1ldGFjYXJlZXJzLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL3Byb2ZpbGUvKGNyZWF0ZV9hcHBsaWNhdGlvbnxqb2JfZGV0YWlscykvW14vXStcIlxyXG4gIH0sXHJcbiAgeWNvbWJpbmF0b3I6IHsgZG9tYWluczogW1wid3d3Lnljb21iaW5hdG9yLmNvbVwiXSB9LFxyXG4gIHJpcHBsZWhpcmU6IHsgZG9tYWluczogW1wicmlwcGxlaGlyZS5jb21cIl0gfSxcclxuICBwZXJzb25pbzoge1xyXG4gICAgZG9tYWluczogW1wicGVyc29uaW8uZGVcIiwgXCJwZXJzb25pby5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2IvW14vPyNdKyg/Oi9hcHBseSk/Lz8kXCJcclxuICB9LFxyXG4gIGNhcmVlcnNwYWdlOiB7IGRvbWFpbnM6IFtcImNhcmVlcnMtcGFnZS5jb21cIl0gfSxcclxuICBjYXJlZXJwbHVnOiB7XHJcbiAgICBkb21haW5zOiBbXHJcbiAgICAgIFwiY2FyZWVycGx1Zy5jb21cIixcclxuICAgICAgXCJzZmFnZW50am9icy5jb21cIixcclxuICAgICAgXCJzZmFnZW50Y2FyZWVycy5jb21cIixcclxuICAgICAgXCJhcHNjYXJlZXJwb3J0YWwuY29tXCJcclxuICAgIF0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzL1xcXFxkKy9hcHBzL25ld1wiXHJcbiAgfSxcclxuICBjYXJlZXJzd2l0aHdheW1vOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMud2l0aHdheW1vLmNvbS9qb2JzLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzLyg/IXNlYXJjaCg/Oi98JCkpW14vXStcIlxyXG4gIH0sXHJcbiAgc3VjY2Vzc2ZhY3RvcnM6IHsgZG9tYWluczogW1wic3VjY2Vzc2ZhY3RvcnMuZXVcIiwgXCJzdWNjZXNzZmFjdG9ycy5jb21cIiwgXCJzYXBzZi5jb21cIl0gfSxcclxuICBjbGVhcmNvbXBhbnk6IHtcclxuICAgIGRvbWFpbnM6IFtcImNsZWFyY29tcGFueS5jb21cIl0sXHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouaHJtZGlyZWN0LmNvbS9lbXBsb3ltZW50L2pvYi1vcGVuaW5nLnBocCpcIl1cclxuICB9LFxyXG4gIGFzaGJ5OiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouYXNoYnlocS5jb20vKi8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiam9icy5hc2hieWhxLmNvbVwiLCBcImFzaGJ5X2ppZFwiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJhc2hieV9qaWRcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9bXi9dKy9bMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXsxMn1cIlxyXG4gIH0sXHJcbiAgaXNvbHZlZDoge1xyXG4gICAgZG9tYWluczogW1wiaXNvbHZlZGhpcmUuY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vKD86YXBwbHkvfGpvYnMvfGlmcmFtZS9tb2JpbGUvfGFjY291bnQvKVwiXHJcbiAgfSxcclxuICBqb2JkaXZhOiB7IHBhdHRlcm5zOiBbXCIqOi8vKi5qb2JkaXZhLmNvbS9wb3J0YWwvKlwiXSB9LFxyXG4gIGludHVpdDoge1xyXG4gICAgZG9tYWluczogW1wiaW50dWl0LXF1aXouYXBwLmludHVpdC5jb21cIl0sXHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly9qb2JzLmludHVpdC5jb20vam9iLypcIixcclxuICAgICAgXCIqOi8vaW50dWl0LmF2YXR1cmUubmV0LyovZXh0ZXJuYWxDYXJlZXJzL0pvYkFwcGxpY2F0aW9uKlwiXHJcbiAgICBdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiaW50dWl0LXF1aXouYXBwLmludHVpdC5jb21cIl1cclxuICB9LFxyXG4gIGphY29iczoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9jYXJlZXJzLmphY29icy5jb20vZW5fVVMvY2FyZWVycy8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OlxyXG4gICAgICBcIl4vZW5fVVMvY2FyZWVycy8oSm9iRGV0YWlsfFJlZ2lzdGVyfEFwcGxpY2F0aW9uRm9ybXxBcHBsaWNhdGlvblJldmlldykoPzovfCQpXCJcclxuICB9LFxyXG4gIHNtYXJ0cmVjcnVpdGVyczoge1xyXG4gICAgZG9tYWluczogW1wic21hcnRyLm1lXCJdLFxyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vam9icy5zbWFydHJlY3J1aXRlcnMuY29tL29uZWNsaWNrLXVpL2NvbXBhbnkvKlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLnNtYXJ0cmVjcnVpdGVycy5jb20vKi8qXCJcclxuICAgIF1cclxuICB9LFxyXG4gIHBoZW5vbToge1xyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwiQVBQTFlfZm9ybV9yZW5kZXJlci5qc1wiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJwaGVub21wZW9wbGUuY29tXCIsXHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly9qb2JzLmJzd2hlYWx0aC5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy51dmFoZWFsdGgub3JnLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuZHVrZWhlYWx0aC5vcmcvKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vd3d3LmpvYnMuYWJib3R0LyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXNwZW5kZW50YWwuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuZml2ZWJlbG93LmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmZvdXJzZWFzb25zLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmtici5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vam9icy5rdWVobmUtbmFnZWwuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFzdGVyY2FyZC5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tY2FmZWUuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2pvYnMtY2VlLnB3Yy5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5yb2NoZS5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vd3d3LnZjYWNhcmVlcnMuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMud2FzdGVjb25uZWN0aW9ucy5jb20vKi9hcHBseSpcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgY2lzY286IHsgcGF0dGVybnM6IFtcIio6Ly9jYXJlZXJzLmNpc2NvLmNvbS8qL2FwcGx5KlwiXSB9LFxyXG4gIHRlc2xhOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouam9icy50ZXNsYS5jb20vKlwiLCBcIio6Ly8qLnRlc2xhLmNvbS9jYXJlZXJzLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiL2FwcGx5XCJcclxuICB9LFxyXG4gIGFtYXpvbjogeyBwYXR0ZXJuczogW1wiKjovLyouYW1hem9uLmpvYnMvKlwiXSwgcGF0aFJlZ2V4OiBcIi9qb2JzL1tcXFxcdy1dKy9hcHBseVwiIH0sXHJcbiAgYW1hem9udW5pdmVyc2l0eTogeyBwYXR0ZXJuczogW1wiKjovLyouYW1hem9udW5pdmVyc2l0eS5qb2JzL3Byb2ZpbGUqXCJdIH0sXHJcbiAgdWJlcjoge1xyXG4gICAgZG9tYWluczogW1widWJlci5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6XHJcbiAgICAgIFwiXi8oPzooPzooPzpbXi9dKy8pezEsMn0pP2NhcmVlcnMvKD86YXBwbHkoPzovfCQpfGxpc3QvW14vPyNdKyl8KD86W14vXSsvKT9qb2JzL1teLz8jXSsvPyQpXCJcclxuICB9LFxyXG4gIHRpa3Rvazoge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vKi5saWZlYXR0aWt0b2suY29tL3Jlc3VtZSpcIixcclxuICAgICAgXCIqOi8vKi50aWt0b2t1c2RzLmNvbS8qL3Jlc3VtZSpcIixcclxuICAgICAgXCIqOi8vKi50aWt0b2t1c2RzLmNvbS8qL3Bvc2l0aW9uLyovZGV0YWlsKlwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBieXRlZGFuY2U6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyouam9icy5ieXRlZGFuY2UuY29tL2VuL3Jlc3VtZSpcIixcclxuICAgICAgXCIqOi8vam9icy5ieXRlZGFuY2UuY29tLyovKi8qL2RldGFpbCpcIixcclxuICAgICAgXCIqOi8vam9icy5ieXRlZGFuY2UuY29tLyovKi8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLmJ5dGVkYW5jZS5jb20vKi8qL2FwcGxpZWQqXCIsXHJcbiAgICAgIFwiKjovL2pvaW5ieXRlZGFuY2UuY29tL3NlYXJjaC8qXCJcclxuICAgIF1cclxuICB9LFxyXG4gIGdvb2dsZToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9nb29nbGUuY29tL2Fib3V0L2NhcmVlcnMvKlwiLCBcIio6Ly8qLmdvb2dsZS5jb20vYWJvdXQvY2FyZWVycy8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OlxyXG4gICAgICBcIl4vYWJvdXQvY2FyZWVycy9hcHBsaWNhdGlvbnMoPzovKD86dS9cXFxcZCsvKT9hcHBseSg/Oi98JCl8L2pvYnMvcmVzdWx0cy9bXi8/I10rKVwiLFxyXG4gICAgdXJsUmVnZXg6IFwiXi9hYm91dC9jYXJlZXJzL2FwcGxpY2F0aW9ucy9qb2JzL3Jlc3VsdHMoPzpcXFxcP1teI10qKT8jLipbPyYjXWppZD1bXiYjXStcIlxyXG4gIH0sXHJcbiAgbGV2ZXI6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vam9icy5sZXZlci5jby8qLypcIiwgXCIqOi8vam9icy5ldS5sZXZlci5jby8qLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJsZXZlci5jb1wiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJMZXZlckFwcElkXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vW14vXSsvW14vXSsoPzovYXBwbHkpPy8/JFwiXHJcbiAgfSxcclxuICBqb2J2aXRlOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2pvYnMuam9idml0ZS5jb20vKi9qb2IvKlwiLCBcIio6Ly9qb2JzLmpvYnZpdGUuY29tLyovYXBwbHkqXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiam9icy5qb2J2aXRlLmNvbVwiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJqb2J2aXRlaWZyYW1lXCJdXHJcbiAgfSxcclxuICBicmVlenk6IHsgcGF0dGVybnM6IFtcIio6Ly8qLmJyZWV6eS5oci9wLypcIiwgXCIqOi8vKi5icmVlenkuaHIvKi9hcHBseSpcIl0gfSxcclxuICB3b3JrYWJsZToge1xyXG4gICAgZG9tYWluczogW1wiY2FyZWVycy5hcmJvci1lZHVjYXRpb24uY29tXCJdLFxyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9hcHBseS53b3JrYWJsZS5jb20vKlwiLCBcIio6Ly9qb2JzLndvcmthYmxlLmNvbS8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wid29ya2FibGUuY29tXCJdLFxyXG4gICAgcXVlcnlQYXJhbXM6IFtcInNlbGVjdGVkSm9iSWRcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi8oPzpbXi9dKy9qL1teL10rKD86L2FwcGx5KT8vPyR8KD86W2Etel17Mn0vKT8oPzp2aWV3fGNvbXBhbnkpL1tcXFxcdy1dKylcIlxyXG4gIH0sXHJcbiAgZ29oaXJlOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2pvYnMuZ29oaXJlLmlvLyovKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImFwcC5nb2hpcmUuaW8vd2lkZ2V0L1wiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL1teL10rLy4rLVxcXFxkKy8/JFwiXHJcbiAgfSxcclxuICBiYW1ib29ocjoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmJhbWJvb2hyLmNvbS9qb2JzKlwiLCBcIio6Ly8qLmJhbWJvb2hyLmNvbS9jYXJlZXJzKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImJhbWJvb2hyLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeLyg/OmpvYnN8Y2FyZWVycy9bXFxcXHctXSpcXFxcZClcIlxyXG4gIH0sXHJcbiAgYnJhc3NyaW5nOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouYnJhc3NyaW5nLmNvbS9UR25ld1VJLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJicmFzc3JpbmcuY29tXCJdLFxyXG4gICAgdXJsUmVnZXg6IFwiIyg/OkFwcGx5cGFnZXxqb2JEZXRhaWxzPSlcIlxyXG4gIH0sXHJcbiAgYWRwOiB7XHJcbiAgICBkb21haW5zOiBbXCJ3b3JrZm9yY2Vub3cuYWRwLmNvbVwiXSxcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vcmVjcnVpdGluZy5hZHAuY29tL3NyY2Nhci9wdWJsaWMvKlwiLCBcIio6Ly9teWpvYnMuYWRwLmNvbS8qL2N4LypcIl1cclxuICB9LFxyXG4gIG9yYWNsZWNsb3VkOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLm9yYWNsZWNsb3VkLmNvbS8qL0NhbmRpZGF0ZUV4cGVyaWVuY2UvKi9zaXRlcy8qL2pvYi8qXCIsXHJcbiAgICAgIFwiKjovLyoub3JhY2xlY2xvdWQuY29tLyovQ2FuZGlkYXRlRXhwZXJpZW5jZS8qL3NpdGVzLyovKi9wcmV2aWV3LypcIixcclxuICAgICAgXCIqOi8vKi8qL0NhbmRpZGF0ZUV4cGVyaWVuY2UvKi9zaXRlcy8qL2pvYi8qXCIsXHJcbiAgICAgIFwiKjovLyovKi9DYW5kaWRhdGVFeHBlcmllbmNlLyovc2l0ZXMvKi8qL3ByZXZpZXcvKlwiLFxyXG4gICAgICBcIio6Ly8qLyovc2l0ZXMvKi9qb2JzL3ByZXZpZXcvKi9hcHBseS8qXCJcclxuICAgIF0sXHJcbiAgICBwYXRoUmVnZXg6XHJcbiAgICAgIFwiKD86L0NhbmRpZGF0ZUV4cGVyaWVuY2UvLiovc2l0ZXMvW14vXSsvam9iL1teL10rKD86L2FwcGx5KD86Ly4qKT8pPy8/JHwvYXBwbHkpXCJcclxuICB9LFxyXG4gIHVsdGlwcm86IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jb20vKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5RGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY29tLyovSm9iQm9hcmQvKi9PcHBvcnR1bml0eUFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY29tLyovSm9iQm9hcmQvKi9BY2NvdW50L1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY2EvKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5RGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY2EvKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5QXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jYS8qL0pvYkJvYXJkLyovQWNjb3VudC9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vKi5yZWMucHJvLnVrZy5uZXQvKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5RGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly8qLnJlYy5wcm8udWtnLm5ldC8qL0pvYkJvYXJkLyovT3Bwb3J0dW5pdHlBcHBseSpcIixcclxuICAgICAgXCIqOi8vKi5yZWMucHJvLnVrZy5uZXQvKi9Kb2JCb2FyZC8qL0FjY291bnQvUmVnaXN0ZXIqXCJcclxuICAgIF1cclxuICB9LFxyXG4gIHJpcHBsaW5nOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLnJpcHBsaW5nLWF0cy5jb20vam9iLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyoucmlwcGxpbmctYXRzLmNvbS9qb2JzL2VvcF9zdXJ2ZXkvKlwiXHJcbiAgICBdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiYXRzLnJpcHBsaW5nLmNvbVwiXVxyXG4gIH0sXHJcbiAgcmlwcGxpbmdIb3N0ZWQ6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vYXRzLnJpcHBsaW5nLmNvbS8qL2pvYnMvKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL1teL10rL2pvYnMvW14vXSsoPzovYXBwbHkoPzovLiopPyk/Lz8kXCJcclxuICB9LFxyXG4gIGRheWZvcmNlOiB7XHJcbiAgICBkb21haW5zOiBbXCJqb2JzLmRheWZvcmNlaGNtLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeLyg/OlteL10rLykram9icy9bXi9dKyg/Oi9hcHBseSg/Oi8uKik/KT8vPyRcIlxyXG4gIH0sXHJcbiAgZGF5Zm9yY2VJZGVudGl0eToge1xyXG4gICAgcGF0dGVybnM6IFtcImh0dHBzOi8vZGZpZC5kYXlmb3JjZWhjbS5jb20vZ2xvYmFsaWRlbnRpdHkvYWNjb3VudC8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vZ2xvYmFsaWRlbnRpdHkvYWNjb3VudC8oPzpyZWdpc3Rlcnxsb2dpbikvPyRcIlxyXG4gIH0sXHJcbiAgdGFsZW86IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0LyovYXBwbGljYXRpb24uanNzKlwiLFxyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC8qL2Zsb3cuanNmKlwiLFxyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC8qL2pvYmFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC8qL2F0cy9jYXJlZXJzLypcIixcclxuICAgICAgXCIqOi8vKi50YWxlby5uZXQvY2FyZWVyc2VjdGlvbi8qL2pvYmRldGFpbC5mdGwqXCIsXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0LyovaHRtbFJlc291cmNlVmlld2VyLmpzcypcIixcclxuICAgICAgXCIqOi8vKi5idXJuc21jZC5jb20vYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyouYnVybnNtY2QuY29tL2NhcmVlcnNlY3Rpb24vYXBwbGljYXRpb24uanNzKlwiLFxyXG4gICAgICBcIio6Ly8qLmJ1cm5zbWNkLmNvbS9jYXJlZXJzZWN0aW9uL2Zsb3cuanNmKlwiLFxyXG4gICAgICBcIio6Ly8qLmJ1cm5zbWNkLmNvbS9jYXJlZXJzZWN0aW9uL2pvYmFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLmJ1cm5zbWNkLmNvbS9jYXJlZXJzZWN0aW9uL2h0bWxSZXNvdXJjZVZpZXdlci5qc3MqXCIsXHJcbiAgICAgIFwiKjovL3RhbGVudGFjcXVpc2l0aW9uLjNkcy5jb20vKi9hcHBsaWNhdGlvbi5qc3MqXCIsXHJcbiAgICAgIFwiKjovL3RhbGVudGFjcXVpc2l0aW9uLjNkcy5jb20vKi9mbG93LmpzZipcIixcclxuICAgICAgXCIqOi8vdGFsZW50YWNxdWlzaXRpb24uM2RzLmNvbS8qL2pvYmFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly90YWxlbnRhY3F1aXNpdGlvbi4zZHMuY29tLyovYXRzL2NhcmVlcnMvKlwiLFxyXG4gICAgICBcIio6Ly90YWxlbnRhY3F1aXNpdGlvbi4zZHMuY29tLyovaHRtbFJlc291cmNlVmlld2VyLmpzcypcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgZWlnaHRmb2xkOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouZWlnaHRmb2xkLmFpL2NhcmVlcnMqXCIsIFwiKjovLyouZWlnaHRmb2xkLmFpL2NhcmVlcmh1Yi8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiZWlnaHRmb2xkLmFpXCJdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwiZWlnaHRmb2xkXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcImVpZ2h0Zm9sZC5haVwiLFxyXG4gICAgdXJsUmVnZXg6XHJcbiAgICAgIFwiKD86Xi9jYXJlZXJodWIvZXhwbG9yZS9qb2JzLyg/IWFwcGx5Lz8oPzpbPyNdfCQpKVteLz8jXSsvPyg/Ols/I10uKik/JHxeL2NhcmVlcmh1Yi9leHBsb3JlL2pvYnMvYXBwbHkvP1xcXFw/KD89W14jXSpcXFxcYnBpZD1bXiYjXSspW14jXSooPzojLiopPyR8Xi9jYXJlZXJzKD86Lyg/OmpvYi9bXi8/I10rKD86L2FwcGx5KT8oPzpbLz8jXXwkKXxhcHBseSg/OlsvPyNdfCQpKXxcXFxcPyg/PSg/OnBpZD1bXiYjXSt8W14jXSomcGlkPVteJiNdKykpW14jXSooPzojLiopPyQpKVwiXHJcbiAgfSxcclxuICBqYXp6aHI6IHsgcGF0dGVybnM6IFtcIio6Ly8qLmFwcGx5dG9qb2IuY29tL2FwcGx5LypcIl0gfSxcclxuICB0cmFrc3Rhcjoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmhpcmUudHJha3N0YXIuY29tL2pvYnMvKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvW14vXSsvPyRcIlxyXG4gIH0sXHJcbiAgZnJlc2h0ZWFtOiB7IHBhdHRlcm5zOiBbXCIqOi8vKi5mcmVzaHRlYW0uY29tL2pvYnMvKlwiXSB9LFxyXG4gIHBpbnBvaW50aHE6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5waW5wb2ludGhxLmNvbS8qL3Bvc3RpbmdzLypcIiwgXCIqOi8vKi5waW5wb2ludGhxLmNvbS9wb3N0aW5ncy8qXCJdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwicGlucG9pbnRocVwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJwaW5wb2ludGhxLmNvbVwiXHJcbiAgfSxcclxuICByZWNydWl0ZWU6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5yZWNydWl0ZWUuY29tLyovKlwiXSxcclxuICAgIHBhZ2VTb3VyY2VLZXl3b3JkOiBcInJlY3J1aXRlZVwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJyZWNydWl0ZWUuY29tXCJcclxuICB9LFxyXG4gIHRyaW5ldGhpcmU6IHsgcGF0dGVybnM6IFtcIio6Ly9hcHAudHJpbmV0aGlyZS5jb20vY29tcGFuaWVzLyovam9icy8qXCJdIH0sXHJcbiAgam9ic2NvcmU6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuam9ic2NvcmUuY29tL2FwcGx5X2Zsb3cvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmpvYnNjb3JlLmNvbS9jYXJlZXJzLyovam9icy8qXCJcclxuICAgIF0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJqb2JzY29yZS5jb21cIl1cclxuICB9LFxyXG4gIHBheWxvY2l0eToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLnBheWxvY2l0eS5jb20vcmVjcnVpdGluZy8qXCIsIFwiKjovLyoucGF5bG9jaXR5LmNvbS9SZWNydWl0aW5nLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJwYXlsb2NpdHkuY29tXCJdLFxyXG4gICAgdXJsUmVnZXg6IFwiXi9bUnJdZWNydWl0aW5nL1tKal1vYnMvKD86W0FhXXBwbHkvfFtEZF1ldGFpbHMvW14vPyNdKyg/OlsvPyNdfCQpKVwiXHJcbiAgfSxcclxuICBhdmF0dXJlOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0L0xpbmtlZEluQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovTGlua2VkSW5BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9Zb3VySW5mb3JtYXRpb24qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvY2FtcHVzQXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9HZW5lcmFsSW5mbypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC9jYXJlZXJzL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC9jYXJlZXJzL0pvYkRldGFpbC8qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9jYXJlZXJzL0pvYkRldGFpbC8qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9FeHRlcm5hbC9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvY2FyZWVycy9Mb2NhdGlvbkFuZFByb2ZpbGUvKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovY2FyZWVycy9Mb2NhdGlvbkFuZFByb2ZpbGUvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvQXBwbGljYXRpb25Eb3RLbm9ja2VkT3V0V2l6YXJkKlwiLFxyXG4gICAgICBcIio6Ly9hcHBseS5kZWxvaXR0ZS5jb20vKi9jYXJlZXJzLypcIixcclxuICAgICAgXCIqOi8vYXBwbHkuZGVsb2l0dGUuY29tLyovRXh0ZXJuYWwvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvSW52aXRlVG9BcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvSm9iRGV0YWlsLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvTG9jYXRpb25BbmRQcm9maWxlLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL0V4dGVybmFsL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbk1ldGhvZHMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uUXVlc3Rpb25zKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0ludml0ZVRvQXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0dlbmVyYWxJbmZvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0pvYkRldGFpbC8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0xvY2F0aW9uQW5kUHJvZmlsZS8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9FeHRlcm5hbC9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9Kb2JBcHBsaWNhdGlvbipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25SZXZpZXcqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvWW91ckluZm9ybWF0aW9uKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvSW52aXRlVG9BcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0dlbmVyYWxJbmZvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvSm9iRGV0YWlsLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0xvY2F0aW9uQW5kUHJvZmlsZS8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL0V4dGVybmFsL0pvYkRldGFpbCpcIlxyXG4gICAgXSxcclxuICAgIHBhZ2VTb3VyY2VLZXl3b3JkOiBcImF2YXR1cmVcIixcclxuICAgIHBhZ2VTb3VyY2VEb21haW46IFwiYXZhdHVyZS5uZXRcIlxyXG4gIH0sXHJcbiAgb2t0YToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly93d3cub2t0YS5jb20vY29tcGFueS9jYXJlZXJzLyovKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2NvbXBhbnkvY2FyZWVycy8oPyFqb2ItbGlzdGluZyg/Oi98JCkpXCJcclxuICB9LFxyXG4gIGNvbWVldDoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmNvbWVldC5jb20vam9icy8qLyovKi8qXCIsIFwiKjovLyouY29tZWV0LmNvL2pvYnMvKi8qL2FwcGx5KlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImNvbWVldC5jb1wiLCBcImNvbWVldC5jb21cIl1cclxuICB9LFxyXG4gIGFwcGxlOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2pvYnMuYXBwbGUuY29tLyovZGV0YWlscy8qXCIsIFwiKjovL2pvYnMuYXBwbGUuY29tL2FwcC8qL2FwcGx5LypcIl1cclxuICB9LFxyXG4gIHBvbHltZXI6IHsgcGF0dGVybnM6IFtcIio6Ly9qb2JzLnBvbHltZXIuY28vKi8qXCJdIH0sXHJcbiAgcmVjcnVpdGVyZmxvdzoge1xyXG4gICAgZG9tYWluczogW1wicmVjcnVpdGVyZmxvdy5jb21cIl0sXHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJyZWNydWl0ZXJmbG93LmNvbVwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJyZWNydWl0ZXJmbG93LmNvbVwiLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vW14vXSsvam9icy9bXi8/I10rXCJcclxuICB9LFxyXG4gIGNhcmVlcnN0b2FzdHRhYjogeyBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMudG9hc3R0YWIuY29tL2pvYnMqXCJdIH1cclxufVxyXG4iLCIvKiogU2hhcmVkIGZpZWxkIHR5cGVzIGZvciB0aGUgY2xlYW4tVFMgY3Jhd2xlciAobWlycm9ycyBlbmdpbmUgRklFTERfVFlQRSBzdWJzZXQpLiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEUgPSB7XHJcbiAgVEVYVDogXCJ0ZXh0XCIsXHJcbiAgVEVYVEFSRUE6IFwidGV4dGFyZWFcIixcclxuICBTRUxFQ1Q6IFwic2VsZWN0XCIsXHJcbiAgQ0hFQ0tCT1g6IFwiY2hlY2tib3hcIixcclxuICBSQURJTzogXCJyYWRpb1wiLFxyXG4gIFJBRElPR1JPVVA6IFwicmFkaW9ncm91cFwiLFxyXG4gIERBVEU6IFwiZGF0ZVwiLFxyXG4gIEZJTEU6IFwiZmlsZVwiXHJcbn0gYXMgY29uc3RcclxuXHJcbmV4cG9ydCB0eXBlIEZpZWxkVHlwZSA9ICh0eXBlb2YgRklFTERfVFlQRSlba2V5b2YgdHlwZW9mIEZJRUxEX1RZUEVdXHJcblxyXG5leHBvcnQgdHlwZSBEaXNjb3ZlcmVkRmllbGQgPSB7XHJcbiAgdHlwZTogRmllbGRUeXBlIHwgXCJ0ZXh0XCIgfCBcInNlbGVjdFwiIHwgXCJ0ZXh0YXJlYVwiIHwgXCJyYWRpb1wiIHwgXCJjaGVja2JveFwiXHJcbiAgbGFiZWw6IHN0cmluZ1xyXG4gIHJlcXVpcmVkOiBib29sZWFuXHJcbiAgb3B0aW9ucz86IHN0cmluZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEF0c1NpdGVJZCA9XHJcbiAgfCBcInBlcnNvbmlvXCJcclxuICB8IFwiZ3JlZW5ob3VzZVwiXHJcbiAgfCBcImxldmVyXCJcclxuICB8IFwibXl3b3JrZGF5XCJcclxuICB8IFwiYXNoYnlcIlxyXG4gIHwgXCJvcmFjbGVjbG91ZFwiXHJcbiAgfCBcInBheWNvbW9ubGluZS12M1wiXHJcbiAgfCBcImdlbmVyaWNcIlxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZGVsYXkobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjdXRlU2VxdWVudGlhbGx5KFxyXG4gIHN0ZXBzOiBBcnJheTwoKCkgPT4gUHJvbWlzZTx2b2lkPiB8IHZvaWQpIHwgeyBmdW5jOiAoKSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZDsgZGVsYXk/OiBudW1iZXIgfT4sXHJcbiAgZGVmYXVsdERlbGF5TXMgPSA4MFxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICBmb3IgKGNvbnN0IHN0ZXAgb2Ygc3RlcHMpIHtcclxuICAgIGlmICh0eXBlb2Ygc3RlcCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIGF3YWl0IHN0ZXAoKVxyXG4gICAgICBhd2FpdCBkZWxheShkZWZhdWx0RGVsYXlNcylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHN0ZXAuZnVuYygpXHJcbiAgICAgIGF3YWl0IGRlbGF5KHN0ZXAuZGVsYXkgPz8gZGVmYXVsdERlbGF5TXMpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNlbmRUb0JhY2tncm91bmQgYXMgcGxhc21vaHFTZW5kVG9CYWNrZ3JvdW5kIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxyXG5cclxuaW1wb3J0IHR5cGUgeyBEaXNjb3ZlcmVkRmllbGQgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdHlwZXNcIlxyXG5cclxuLyoqIExvb3NlIG1lc3NhZ2luZyB3cmFwcGVyIOKAlCBleHRlbnNpb24gQkcgaGFuZGxlcnMgYXJlIG5vdCB0eXBlZCBpbiB0aGlzIHBhY2thZ2UuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmRUb0JhY2tncm91bmQobXNnOiB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgYm9keT86IHVua25vd25cclxufSk6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIHBsYXNtb2hxU2VuZFRvQmFja2dyb3VuZChtc2cgYXMgbmV2ZXIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGVhbi1UUyBhbnN3ZXIgaGVscGVycyAoZXh0ZW5zaW9uLW93bmVkKS5cclxuICogUGFyY2VsIHJlZmVyZW5jZTogZW5naW5lL2hlbHBlci1hcHAvc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqL1xyXG5cclxuZXhwb3J0IHR5cGUgRmlsbEFuc3dlciA9IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH1cclxuXHJcbmNvbnN0IE5PTl9BTE5VTV9FWENFUFRfQ0pLID1cclxuICAvW15hLXpBLVowLTlcXHNcXHUzMDQwLVxcdTMwZmZcXHUzNDAwLVxcdTRkYmZcXHU0ZTAwLVxcdTlmZmZcXHVmOTAwLVxcdWZhZmZcXHVhYzAwLVxcdWQ3YWZdL2dcclxuXHJcbi8qKiBTdHJpcCBwdW5jdHVhdGlvbiAoa2VlcCBDSkspIOKAlCBvcmFjbGUgYHJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzYC4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHRleHQucmVwbGFjZShOT05fQUxOVU1fRVhDRVBUX0NKSywgXCJcIilcclxufVxyXG5cclxuLyoqIExhYmVsIGVxdWFsaXR5IGFmdGVyIHN0cmlwcGluZyBwdW5jdHVhdGlvbiAvIGFzdGVyaXNrcyAvIHdoaXRlc3BhY2UuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc01hdGNoZWQoYTogdW5rbm93biwgYjogdW5rbm93bik6IGJvb2xlYW4ge1xyXG4gIGlmICghYSB8fCAhYiB8fCB0eXBlb2YgYSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgYiAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbHNlXHJcbiAgY29uc3QgbGVmdCA9IHJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKGEpXHJcbiAgICAucmVwbGFjZSgvXFxzKlxcKlxccyovZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxyXG4gICAgLnRvTG93ZXJDYXNlKClcclxuICAgIC50cmltKClcclxuICBjb25zdCByaWdodCA9IHJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKGIpXHJcbiAgICAucmVwbGFjZSgvXFxzKlxcKlxccyovZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxyXG4gICAgLnRvTG93ZXJDYXNlKClcclxuICAgIC50cmltKClcclxuICByZXR1cm4gISFsZWZ0ICYmICEhcmlnaHQgJiYgbGVmdCA9PT0gcmlnaHRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZUFycmF5PFQ+KHZhbHVlOiBUIHwgVFtdKTogVFtdIHtcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV1cclxufVxyXG5cclxuLyoqIFBhcnNlIGBZWVlZLU1NLUREYCAob3IgLyAuKSBpbnRvIHllYXIgLyBzaG9ydCBtb250aCAvIGRheS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZVBhcnRzKHJhdzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHtcclxuICB5ZWFyOiBzdHJpbmdcclxuICBtb250aDogc3RyaW5nXHJcbiAgZGF5OiBzdHJpbmdcclxufSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghcmF3IHx8IHR5cGVvZiByYXcgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgcmV0dXJuIHsgeWVhcjogXCJcIiwgbW9udGg6IFwiXCIsIGRheTogXCJcIiB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0gcmF3LnJlcGxhY2UoL1svLl0vZywgXCItXCIpLnRyaW0oKVxyXG4gICAgY29uc3QgcGFydHMgPSBub3JtYWxpemVkLnNwbGl0KFwiLVwiKVxyXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA8IDIpIHJldHVybiB7IHllYXI6IFwiXCIsIG1vbnRoOiBcIlwiLCBkYXk6IFwiXCIgfVxyXG4gICAgY29uc3QgW3llYXIsIG1vbnRoTnVtLCBkYXldID0gcGFydHNcclxuICAgIGNvbnN0IE1PTlRIUyA9IFtcclxuICAgICAgXCJKYW5cIixcclxuICAgICAgXCJGZWJcIixcclxuICAgICAgXCJNYXJcIixcclxuICAgICAgXCJBcHJcIixcclxuICAgICAgXCJNYXlcIixcclxuICAgICAgXCJKdW5cIixcclxuICAgICAgXCJKdWxcIixcclxuICAgICAgXCJBdWdcIixcclxuICAgICAgXCJTZXBcIixcclxuICAgICAgXCJPY3RcIixcclxuICAgICAgXCJOb3ZcIixcclxuICAgICAgXCJEZWNcIlxyXG4gICAgXVxyXG4gICAgY29uc3QgbW9udGhJbmRleCA9IE51bWJlcihtb250aE51bSkgLSAxXHJcbiAgICBjb25zdCBtb250aCA9XHJcbiAgICAgIG1vbnRoSW5kZXggPj0gMCAmJiBtb250aEluZGV4IDwgMTIgPyBNT05USFNbbW9udGhJbmRleF0gOiBcIlwiXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB5ZWFyOiB5ZWFyIHx8IFwiXCIsXHJcbiAgICAgIG1vbnRoLFxyXG4gICAgICBkYXk6IGRheSA/IGRheS5yZXBsYWNlKC9eMC8sIFwiXCIpIDogXCJcIlxyXG4gICAgfVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIHsgeWVhcjogXCJcIiwgbW9udGg6IFwiXCIsIGRheTogXCJcIiB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXNrIGJhY2tncm91bmQgZ2V0R3B0UmVzdWx0cyBmb3IgYW5zd2VycyBtYXBwZWQgdG8gZGlzY292ZXJlZCBsYWJlbHMuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hGb3JtQW5zd2VycyhcclxuICBmaWVsZHM6IERpc2NvdmVyZWRGaWVsZFtdXHJcbik6IFByb21pc2U8RmlsbEFuc3dlcltdPiB7XHJcbiAgY29uc3QgZWxlbWVudHMgPSBmaWVsZHMubWFwKChmKSA9PiAoe1xyXG4gICAgbGFiZWw6IGYubGFiZWwsXHJcbiAgICB0eXBlOiBmLnR5cGUsXHJcbiAgICBvcHRpb25zOiBmLm9wdGlvbnMgfHwgW11cclxuICB9KSlcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgc2VuZFRvQmFja2dyb3VuZCh7XHJcbiAgICBuYW1lOiBcImdldEdwdFJlc3VsdHNcIixcclxuICAgIGJvZHk6IHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgZWxlbWVudHMsXHJcbiAgICAgICAgcGFyc2VyOiBcImludGVybmFsXCIsXHJcbiAgICAgICAgc291cmNlOiBcImNsZWFuVHNcIixcclxuICAgICAgICB1cmw6IHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiA/IGxvY2F0aW9uLmhyZWYgOiBcIlwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBsaXN0ID0gcmVzPy5kYXRhPy5maWxsX2RhdGFfbGlzdFxyXG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkgcmV0dXJuIFtdXHJcbiAgcmV0dXJuIGxpc3RcclxuICAgIC5tYXAoKHJvdzogeyBuYW1lPzogc3RyaW5nOyB2YWx1ZT86IHVua25vd24gfSkgPT4gKHtcclxuICAgICAgbmFtZTogU3RyaW5nKHJvdz8ubmFtZSB8fCBcIlwiKSxcclxuICAgICAgdmFsdWU6IEFycmF5LmlzQXJyYXkocm93Py52YWx1ZSlcclxuICAgICAgICA/IFN0cmluZyhyb3cudmFsdWVbMF0gPz8gXCJcIilcclxuICAgICAgICA6IFN0cmluZyhyb3c/LnZhbHVlID8/IFwiXCIpXHJcbiAgICB9KSlcclxuICAgIC5maWx0ZXIoKHI6IEZpbGxBbnN3ZXIpID0+IHIubmFtZSAmJiByLnZhbHVlKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXN1bWVGaWxlKCk6IFByb21pc2U8e1xyXG4gIGZpbGU6IEZpbGVcclxuICBmaWxlTmFtZTogc3RyaW5nXHJcbn0gfCBudWxsPiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgc2VuZFRvQmFja2dyb3VuZCh7XHJcbiAgICBuYW1lOiBcImdldFJlc3VtZUJsb2JcIixcclxuICAgIGJvZHk6IHt9XHJcbiAgfSlcclxuICBpZiAoIXJlcz8ub2sgfHwgIXJlcy5iYXNlNjRVUkwpIHJldHVybiBudWxsXHJcbiAgY29uc3QgZmlsZSA9IGF3YWl0IGRhdGFVcmxUb0ZpbGUoXHJcbiAgICByZXMuYmFzZTY0VVJMLFxyXG4gICAgcmVzLmZpbGVOYW1lIHx8IGByZXN1bWUuJHtyZXMuZXh0ZW5zaW9uIHx8IFwicGRmXCJ9YCxcclxuICAgIHJlcy5taW1lVHlwZVxyXG4gIClcclxuICByZXR1cm4geyBmaWxlLCBmaWxlTmFtZTogZmlsZS5uYW1lIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQ292ZXJMZXR0ZXJGaWxlKCk6IFByb21pc2U8e1xyXG4gIGZpbGU6IEZpbGVcclxuICBmaWxlTmFtZTogc3RyaW5nXHJcbn0gfCBudWxsPiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgc2VuZFRvQmFja2dyb3VuZCh7XHJcbiAgICBuYW1lOiBcImdldENvdmVyTGV0dGVyQmxvYlwiLFxyXG4gICAgYm9keToge31cclxuICB9KVxyXG4gIGlmICghcmVzPy5vayB8fCAhcmVzLmJhc2U2NFVSTCkgcmV0dXJuIG51bGxcclxuICBjb25zdCBmaWxlID0gYXdhaXQgZGF0YVVybFRvRmlsZShcclxuICAgIHJlcy5iYXNlNjRVUkwsXHJcbiAgICByZXMuZmlsZU5hbWUgfHwgYGNvdmVyLWxldHRlci4ke3Jlcy5leHRlbnNpb24gfHwgXCJwZGZcIn1gLFxyXG4gICAgcmVzLm1pbWVUeXBlXHJcbiAgKVxyXG4gIHJldHVybiB7IGZpbGUsIGZpbGVOYW1lOiBmaWxlLm5hbWUgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYXRhVXJsVG9GaWxlKFxyXG4gIGRhdGFVcmw6IHN0cmluZyxcclxuICBmaWxlTmFtZTogc3RyaW5nLFxyXG4gIG1pbWVIaW50Pzogc3RyaW5nXHJcbik6IFByb21pc2U8RmlsZT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRhdGFVcmwpXHJcbiAgY29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKClcclxuICByZXR1cm4gbmV3IEZpbGUoW2Jsb2JdLCBmaWxlTmFtZSwge1xyXG4gICAgdHlwZTogbWltZUhpbnQgfHwgYmxvYi50eXBlIHx8IFwiYXBwbGljYXRpb24vcGRmXCJcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW5zd2VyTWFwKGFuc3dlcnM6IEZpbGxBbnN3ZXJbXSk6IE1hcDxzdHJpbmcsIHN0cmluZz4ge1xyXG4gIGNvbnN0IG0gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXHJcbiAgZm9yIChjb25zdCBhIG9mIGFuc3dlcnMpIHtcclxuICAgIG0uc2V0KGEubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSwgYS52YWx1ZSlcclxuICAgIG0uc2V0KGEubmFtZS5yZXBsYWNlKC9cXHMqXFwqK1xccyovZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBhLnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gbVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9va3VwRmllbGRBbnN3ZXIoXHJcbiAgbWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+LFxyXG4gIGxhYmVsOiBzdHJpbmdcclxuKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgY29uc3Qga2V5ID0gbGFiZWwucmVwbGFjZSgvXFxzKlxcKitcXHMqL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG4gIHJldHVybiBtYXAuZ2V0KGtleSkgfHwgbWFwLmdldChsYWJlbC50cmltKCkudG9Mb3dlckNhc2UoKSkgfHwgbnVsbFxyXG59XHJcbiIsImltcG9ydHtuYW5vaWQgYXMgYn1mcm9tXCJuYW5vaWRcIjt2YXIgbD1nbG9iYWxUaGlzLmJyb3dzZXI/LnRhYnN8fGdsb2JhbFRoaXMuY2hyb21lPy50YWJzLGQ9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lO2lmKCFlKXRocm93IG5ldyBFcnJvcihcIkV4dGVuc2lvbiBydW50aW1lIGlzIG5vdCBhdmFpbGFibGVcIik7cmV0dXJuIGV9LGk9KCk9PntpZighbCl0aHJvdyBuZXcgRXJyb3IoXCJFeHRlbnNpb24gdGFicyBBUEkgaXMgbm90IGF2YWlsYWJsZVwiKTtyZXR1cm4gbH0sbT1hc3luYygpPT57bGV0IGU9aSgpLFthXT1hd2FpdCBlLnF1ZXJ5KHthY3RpdmU6ITAsY3VycmVudFdpbmRvdzohMH0pO3JldHVybiBhfSxnPShlLGEpPT4hYS5fX2ludGVybmFsJiZlLnNvdXJjZT09PWdsb2JhbFRoaXMud2luZG93JiZlLmRhdGEubmFtZT09PWEubmFtZSYmKGEucmVsYXlJZD09PXZvaWQgMHx8ZS5kYXRhLnJlbGF5SWQ9PT1hLnJlbGF5SWQpO3ZhciBjPShlLGEsbj1nbG9iYWxUaGlzLndpbmRvdyk9PntsZXQgcj1hc3luYyBzPT57aWYoZyhzLGUpJiYhcy5kYXRhLnJlbGF5ZWQpe2xldCBvPXtuYW1lOmUubmFtZSxyZWxheUlkOmUucmVsYXlJZCxib2R5OnMuZGF0YS5ib2R5fSx0PWF3YWl0IGE/LihvKTtuLnBvc3RNZXNzYWdlKHtuYW1lOmUubmFtZSxyZWxheUlkOmUucmVsYXlJZCxpbnN0YW5jZUlkOnMuZGF0YS5pbnN0YW5jZUlkLGJvZHk6dCxyZWxheWVkOiEwfSx7dGFyZ2V0T3JpZ2luOmUudGFyZ2V0T3JpZ2lufHxcIi9cIn0pfX07cmV0dXJuIG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixyKSwoKT0+bi5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHIpfSx5PShlLGE9Z2xvYmFsVGhpcy53aW5kb3cpPT5uZXcgUHJvbWlzZSgobixyKT0+e2xldCBzPWIoKSxvPW5ldyBBYm9ydENvbnRyb2xsZXI7YS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHQ9PntnKHQsZSkmJnQuZGF0YS5yZWxheWVkJiZ0LmRhdGEuaW5zdGFuY2VJZD09PXMmJihuKHQuZGF0YS5ib2R5KSxvLmFib3J0KCkpfSx7c2lnbmFsOm8uc2lnbmFsfSksYS5wb3N0TWVzc2FnZSh7Li4uZSxpbnN0YW5jZUlkOnN9LHt0YXJnZXRPcmlnaW46ZS50YXJnZXRPcmlnaW58fFwiL1wifSl9KTt2YXIgcD1hc3luYyBlPT5kKCkuc2VuZE1lc3NhZ2UoZS5leHRlbnNpb25JZD8/bnVsbCxlKSx4PWFzeW5jIGU9PntsZXQgYT10eXBlb2YgZS50YWJJZD09XCJudW1iZXJcIj9lLnRhYklkOihhd2FpdCBtKCkpPy5pZDtpZighYSl0aHJvdyBuZXcgRXJyb3IoXCJObyBhY3RpdmUgdGFiIGZvdW5kIHRvIHNlbmQgbWVzc2FnZSB0by5cIik7cmV0dXJuIGkoKS5zZW5kTWVzc2FnZShhLGUpfSxoPXgsTT1lPT5jKGUscCksRT1NLHU9eSxTPXU7ZXhwb3J0e0UgYXMgcmVsYXksTSBhcyByZWxheU1lc3NhZ2UsaCBhcyBzZW5kVG9BY3RpdmVDb250ZW50U2NyaXB0LHAgYXMgc2VuZFRvQmFja2dyb3VuZCx1IGFzIHNlbmRUb0JhY2tncm91bmRWaWFSZWxheSx4IGFzIHNlbmRUb0NvbnRlbnRTY3JpcHQsUyBhcyBzZW5kVmlhUmVsYXl9O1xuIiwiLyogQHRzLXNlbGYtdHlwZXM9XCIuL2luZGV4LmQudHNcIiAqL1xuaW1wb3J0IHsgdXJsQWxwaGFiZXQgYXMgc2NvcGVkVXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5leHBvcnQgbGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuZXhwb3J0IGxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCBNYXRoLmxvZzIoYWxwaGFiZXQubGVuZ3RoIC0gMSkpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwIHwgMFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPj0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSB8IDAsIHJhbmRvbSlcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT4ge1xuICBsZXQgaWQgPSAnJ1xuICBsZXQgYnl0ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KChzaXplIHw9IDApKSlcbiAgd2hpbGUgKHNpemUtLSkge1xuICAgIGlkICs9IHNjb3BlZFVybEFscGhhYmV0W2J5dGVzW3NpemVdICYgNjNdXG4gIH1cbiAgcmV0dXJuIGlkXG59XG4iLCIvKipcclxuICogU2hhcmVkIERPTSBmaWxsIHByaW1pdGl2ZXMgZm9yIGNsZWFuLVRTIGF1dG9maWxsLlxyXG4gKlxyXG4gKiBMaXZlcyBpbiB0aGUgZXh0ZW5zaW9uIChgc3JjL2NvbnRlbnRzL21ldGhvZHNgKS5cclxuICogUGFyY2VsIHJlZmVyZW5jZTogZW5naW5lL2hlbHBlci1hcHAvc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZmlsbERlZmF1bHRJbnB1dEZpZWxkIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2lucHV0XCJcclxuaW1wb3J0IHsgZmlsbENoZWNrYm94IH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2NoZWNrYm94XCJcclxuaW1wb3J0IHsgZGVsYXkgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMvZGVsYXlcIlxyXG5pbXBvcnQge1xyXG4gIGZpbmRFeGFjdENob2ljZSxcclxuICBpc0V4YWN0Q2hvaWNlTWF0Y2gsXHJcbiAgbm9ybWFsaXplQ2hvaWNlVGV4dFxyXG59IGZyb20gXCJ+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2hcIlxyXG5pbXBvcnQge1xyXG4gIGdldFJhZGlvQ2hlY2tUZXh0LFxyXG4gIG5vcm1hbGl6ZVJhZGlvQ2hlY2tUZXh0XHJcbn0gZnJvbSBcIn5jb250ZW50cy9tZXRob2RzL2NoZWNrYm94LWxhYmVsXCJcclxuaW1wb3J0IHsgaXNNYXRjaGVkIH0gZnJvbSBcIn5jb250ZW50cy9tZXRob2RzL25hdGl2ZS1hbnN3ZXJcIlxyXG5pbXBvcnQgeyBNRVNTQUdFX0VWRU5UUyB9IGZyb20gXCJ+Y29yZS9lbnVtc1wiXHJcblxyXG4vKiogRmllbGQgc2hhcGUgdXNlZCBieSBvcmFjbGUgc2l0ZSBmaWxsZXJzIChgZmllbGQuJGNoZWNrYm94c2AsIGBmaWVsZC5sYWJlbGApLiAqL1xyXG5leHBvcnQgdHlwZSBDaGVja2JveEZpZWxkID0ge1xyXG4gICRjaGVja2JveHM/OiBJdGVyYWJsZTxIVE1MSW5wdXRFbGVtZW50PiB8IEhUTUxJbnB1dEVsZW1lbnRbXSB8IG51bGxcclxuICBsYWJlbD86IHN0cmluZ1xyXG59XHJcblxyXG4vKiogQWxpYXNlcyB3aGVuIGFuc3dlcnMgbWFwIHRydWUvZmFsc2UgLyBqb2IgYm9hcmRzIHRvIHZpc2libGUgbGFiZWxzLiAqL1xyXG5jb25zdCBBTlNXRVJfQUxJQVM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgdHJ1ZTogXCJ5ZXNcIixcclxuICBmYWxzZTogXCJub1wiLFxyXG4gIGxpbmtlZGluOiBcImxpbmtlZGluLmNvbVwiLFxyXG4gIGluZGVlZDogXCJpbmRlZWQuY29tXCJcclxufVxyXG5cclxudHlwZSBGaWxsQ2hlY2tib3hGbiA9IChcclxuICBlbDogSFRNTElucHV0RWxlbWVudCxcclxuICBjaGVja2VkPzogYm9vbGVhblxyXG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XHJcblxyXG4vKiogRGlzcGF0Y2ggdHlwZWQgRE9NIGV2ZW50cyAobW91c2Vkb3duL2NsaWNrL2ZvY3VzL2lucHV0L+KApikgbGlrZSB0aGUgb3JhY2xlLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlckV2ZW50cyhcclxuICBlbDogRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgZXZlbnROYW1lczogc3RyaW5nW10gPSBbXCJpbnB1dFwiLCBcImNoYW5nZVwiLCBcImJsdXJcIl1cclxuKTogdm9pZCB7XHJcbiAgaWYgKCFlbCkgcmV0dXJuXHJcbiAgZm9yIChjb25zdCBuYW1lIG9mIGV2ZW50TmFtZXMpIHtcclxuICAgIGxldCBldjogRXZlbnRcclxuICAgIGlmIChcclxuICAgICAgKG5hbWUgPT09IFwibW91c2Vkb3duXCIgfHwgbmFtZSA9PT0gXCJtb3VzZXVwXCIgfHwgbmFtZSA9PT0gXCJjbGlja1wiKSAmJlxyXG4gICAgICB0eXBlb2YgTW91c2VFdmVudCA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICApIHtcclxuICAgICAgZXYgPSBuZXcgTW91c2VFdmVudChuYW1lLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSlcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIChuYW1lID09PSBcImZvY3VzXCIgfHwgbmFtZSA9PT0gXCJibHVyXCIpICYmXHJcbiAgICAgIHR5cGVvZiBGb2N1c0V2ZW50ID09PSBcImZ1bmN0aW9uXCJcclxuICAgICkge1xyXG4gICAgICBldiA9IG5ldyBGb2N1c0V2ZW50KG5hbWUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KVxyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSBcImlucHV0XCIgJiYgdHlwZW9mIElucHV0RXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9XHJcbiAgICAgICAgXCJ2YWx1ZVwiIGluIGVsICYmIHR5cGVvZiAoZWwgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgID8gKGVsIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICAgICAgICA6IG51bGxcclxuICAgICAgZXYgPSBuZXcgSW5wdXRFdmVudChuYW1lLCB7XHJcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHZhbHVlLFxyXG4gICAgICAgIGlucHV0VHlwZTogXCJpbnNlcnRUZXh0XCJcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ID0gbmV3IEV2ZW50KG5hbWUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KVxyXG4gICAgfVxyXG4gICAgZWwuZGlzcGF0Y2hFdmVudChldilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxsSW5wdXRUZXh0RmllbGQoXHJcbiAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICB2YWx1ZTogc3RyaW5nXHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gIGF3YWl0IGZpbGxEZWZhdWx0SW5wdXRGaWVsZChpbnB1dCwgdmFsdWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNob2ljZUxhYmVsVGV4dChpbnB1dEVsOiBIVE1MSW5wdXRFbGVtZW50KTogc3RyaW5nIHtcclxuICBjb25zdCBmcm9tQ29udHJvbCA9IG5vcm1hbGl6ZVJhZGlvQ2hlY2tUZXh0KGdldFJhZGlvQ2hlY2tUZXh0KGlucHV0RWwpKVxyXG4gIGlmIChmcm9tQ29udHJvbCkgcmV0dXJuIGZyb21Db250cm9sXHJcbiAgcmV0dXJuIFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gbGFiZWxNYXRjaGVzQW5zd2VyKGxhYmVsVGV4dDogc3RyaW5nLCBhbnN3ZXI6IHVua25vd24pOiBib29sZWFuIHtcclxuICBjb25zdCBub3JtYWxpemVkID1cclxuICAgIHR5cGVvZiBhbnN3ZXIgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGFuc3dlciA9PT0gXCJudW1iZXJcIlxyXG4gICAgICA/IFN0cmluZyhhbnN3ZXIpLnRvTG93ZXJDYXNlKCkudHJpbSgpXHJcbiAgICAgIDogXCJcIlxyXG4gIHJldHVybiAhIW5vcm1hbGl6ZWQgJiYgaXNFeGFjdENob2ljZU1hdGNoKGxhYmVsVGV4dCwgbm9ybWFsaXplZClcclxufVxyXG5cclxuLyoqXHJcbiAqIERlY2lkZSB3aGV0aGVyIGEgc2luZ2xlIGNoZWNrYm94IHNob3VsZCBiZSBjaGVja2VkIGdpdmVuIGFuc3dlciBsaXN0ICsgZmllbGQgbGFiZWwuXHJcbiAqIEhhbmRsZXMgeWVzL25vLCBcImhhdmUgcmVhZFwiLCBhbmQgXCJjdXJyZW50XCIgZW1wbG95bWVudCBoZXVyaXN0aWNzLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbWF5YmVDaGVja1NpbmdsZUJveChcclxuICBpbnB1dEVsOiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIGFuc3dlcnM6IHVua25vd25bXSxcclxuICBmaWVsZExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgZmlsbEZuOiBGaWxsQ2hlY2tib3hGbiA9IGZpbGxDaGVja2JveFxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb25zdCBsYWJlbFRleHQgPSBjaG9pY2VMYWJlbFRleHQoaW5wdXRFbClcclxuICBpZiAoIWxhYmVsVGV4dCkgcmV0dXJuXHJcblxyXG4gIGlmIChhbnN3ZXJzLnNvbWUoKGEpID0+IGxhYmVsTWF0Y2hlc0Fuc3dlcihsYWJlbFRleHQsIGEpKSkge1xyXG4gICAgYXdhaXQgZmlsbEZuKGlucHV0RWwsIHRydWUpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvbnN0IGZpcnN0ID0gU3RyaW5nKGFuc3dlcnNbMF0gPz8gXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gIGNvbnN0IGxhYmVsID0gU3RyaW5nKGZpZWxkTGFiZWwgPz8gXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gIGNvbnN0IHNob3VsZENoZWNrID1cclxuICAgIChmaXJzdCA9PT0gXCJ0cnVlXCIgJiYgbGFiZWxUZXh0ID09PSBcInllc1wiKSB8fFxyXG4gICAgKGZpcnN0ID09PSBcImZhbHNlXCIgJiYgbGFiZWxUZXh0ID09PSBcIm5vXCIpIHx8XHJcbiAgICAobGFiZWxUZXh0LmluY2x1ZGVzKFwiaGF2ZSByZWFkXCIpICYmIGZpcnN0ID09PSBcInRydWVcIikgfHxcclxuICAgIChpc01hdGNoZWQobGFiZWxUZXh0LCBmaWVsZExhYmVsID8/IFwiXCIpICYmIGZpcnN0ID09PSBcInRydWVcIikgfHxcclxuICAgIChmaXJzdCA9PT0gXCJ0cnVlXCIgJiZcclxuICAgICAgKGxhYmVsVGV4dC5pbmNsdWRlcyhcImN1cnJlbnRcIikgfHwgbGFiZWwuaW5jbHVkZXMoXCJjdXJyZW50XCIpKSkgfHxcclxuICAgIChsYWJlbC5pbmNsdWRlcyhcImN1cnJlbnRcIikgJiYgZmlyc3QgPT09IFwidHJ1ZVwiKVxyXG5cclxuICBpZiAoc2hvdWxkQ2hlY2spIGF3YWl0IGZpbGxGbihpbnB1dEVsLCB0cnVlKVxyXG59XHJcblxyXG4vKipcclxuICogT3JhY2xlLXNoYXBlZCBjaGVja2JveC9yYWRpbyBncm91cCBmaWxsIChgZmllbGQuJGNoZWNrYm94c2AsIGBmaWVsZC5sYWJlbGApLlxyXG4gKiBSZXR1cm5zIGBmYWxzZWAgb24gYW1iaWd1b3VzIG11bHRpLW1hdGNoOyBvdGhlcndpc2Ugdm9pZC91bmRlZmluZWQgbGlrZSB0aGUgb3JhY2xlLlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGxDaGVja0JveGVzRmllbGQoXHJcbiAgZmllbGQ6IENoZWNrYm94RmllbGQgfCBIVE1MSW5wdXRFbGVtZW50W10sXHJcbiAgcmF3QW5zd2VyczogdW5rbm93bixcclxuICBmaWxsRm46IEZpbGxDaGVja2JveEZuID0gZmlsbENoZWNrYm94XHJcbik6IFByb21pc2U8ZmFsc2UgfCB2b2lkIHwgbnVtYmVyPiB7XHJcbiAgLy8gQmFjay1jb21wYXQ6IEJhc2VGaWxsZXIgcGFzc2VzIChib3hlc1tdLCBzdHJpbmdbXSlcclxuICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZCkgJiYgIShmaWVsZCBhcyBDaGVja2JveEZpZWxkKS4kY2hlY2tib3hzKSB7XHJcbiAgICByZXR1cm4gZmlsbENoZWNrYm94RmllbGQoZmllbGQgYXMgSFRNTElucHV0RWxlbWVudFtdLCByYXdBbnN3ZXJzIGFzIHN0cmluZ1tdKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYW5zd2VycyA9IChcclxuICAgIEFycmF5LmlzQXJyYXkocmF3QW5zd2VycykgPyByYXdBbnN3ZXJzIDogW3Jhd0Fuc3dlcnNdXHJcbiAgKS5maWx0ZXIoKGEpID0+IG5vcm1hbGl6ZUNob2ljZVRleHQoYSkpXHJcbiAgaWYgKCFhbnN3ZXJzLmxlbmd0aCkgcmV0dXJuIGZhbHNlXHJcblxyXG4gIGNvbnN0IGJveEZpZWxkID0gZmllbGQgYXMgQ2hlY2tib3hGaWVsZFxyXG4gIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oYm94RmllbGQuJGNoZWNrYm94cyA/PyBbXSlcclxuICBjb25zdCBpc011bHRpT3JSYWRpbyA9XHJcbiAgICBpbnB1dHMubGVuZ3RoID4gMSB8fCBpbnB1dHMuc29tZSgoZWwpID0+IGVsLnR5cGUgPT09IFwicmFkaW9cIilcclxuXHJcbiAgaWYgKGlzTXVsdGlPclJhZGlvKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IG5ldyBTZXQ8SFRNTElucHV0RWxlbWVudD4oKVxyXG4gICAgY29uc3QgYWxsUmFkaW9zID0gaW5wdXRzLmV2ZXJ5KChlbCkgPT4gZWwudHlwZSA9PT0gXCJyYWRpb1wiKVxyXG5cclxuICAgIGZvciAoY29uc3QgYW5zd2VyIG9mIGFuc3dlcnMpIHtcclxuICAgICAgY29uc3Qgd2FudCA9IG5vcm1hbGl6ZUNob2ljZVRleHQoYW5zd2VyKVxyXG4gICAgICBpZiAoIXdhbnQpIGNvbnRpbnVlXHJcblxyXG4gICAgICBjb25zdCBleGFjdEhpdHMgPSBpbnB1dHMuZmlsdGVyKChlbCkgPT5cclxuICAgICAgICBpc0V4YWN0Q2hvaWNlTWF0Y2goY2hvaWNlTGFiZWxUZXh0KGVsKSwgd2FudClcclxuICAgICAgKVxyXG4gICAgICBpZiAoZXhhY3RIaXRzLmxlbmd0aCA+IDEpIHJldHVybiBmYWxzZVxyXG5cclxuICAgICAgbGV0IG1hdGNoID0gZmluZEV4YWN0Q2hvaWNlKGlucHV0cywgd2FudCwgY2hvaWNlTGFiZWxUZXh0KVxyXG5cclxuICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgIGNvbnN0IGFsaWFzID0gQU5TV0VSX0FMSUFTW3dhbnRdXHJcbiAgICAgICAgaWYgKGFsaWFzKSB7XHJcbiAgICAgICAgICBjb25zdCBhbGlhc0hpdHMgPSBpbnB1dHMuZmlsdGVyKChlbCkgPT5cclxuICAgICAgICAgICAgaXNFeGFjdENob2ljZU1hdGNoKGNob2ljZUxhYmVsVGV4dChlbCksIGFsaWFzKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgaWYgKGFsaWFzSGl0cy5sZW5ndGggPiAxKSByZXR1cm4gZmFsc2VcclxuICAgICAgICAgIG1hdGNoID0gZmluZEV4YWN0Q2hvaWNlKGlucHV0cywgYWxpYXMsIGNob2ljZUxhYmVsVGV4dClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICBpZiAoYWxsUmFkaW9zKSBjb250aW51ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxlY3RlZC5hZGQobWF0Y2gpXHJcbiAgICAgIGlmIChhbGxSYWRpb3MpIGJyZWFrXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZC5zaXplKSByZXR1cm4gZmFsc2VcclxuICAgIGZvciAoY29uc3QgZWwgb2Ygc2VsZWN0ZWQpIGF3YWl0IGZpbGxGbihlbCwgdHJ1ZSlcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBib3ggb2YgaW5wdXRzKSB7XHJcbiAgICBhd2FpdCBtYXliZUNoZWNrU2luZ2xlQm94KGJveCwgYW5zd2VycywgYm94RmllbGQubGFiZWwsIGZpbGxGbilcclxuICB9XHJcbn1cclxuXHJcbi8qKiBTaW1wbGUgbGFiZWwtbGlzdCBmaWxsIHVzZWQgYnkgQmFzZUZpbGxlciAvIFBlcnNvbmlvLiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlsbENoZWNrYm94RmllbGQoXHJcbiAgYm94ZXM6IEhUTUxJbnB1dEVsZW1lbnRbXSxcclxuICB2YWx1ZXM6IHN0cmluZ1tdXHJcbik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgbGV0IGZpbGxlZCA9IDBcclxuICBmb3IgKGNvbnN0IHdhbnQgb2YgdmFsdWVzKSB7XHJcbiAgICBjb25zdCBtYXRjaCA9IGZpbmRFeGFjdENob2ljZShib3hlcywgd2FudCwgY2hvaWNlTGFiZWxUZXh0KVxyXG4gICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgIGF3YWl0IGZpbGxDaGVja2JveChtYXRjaCwgdHJ1ZSlcclxuICAgICAgZmlsbGVkICs9IDFcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZpbGxlZFxyXG59XHJcblxyXG4vKipcclxuICogRm9jdXMgYSA8c2VsZWN0PiBhbmQgcGljayB0aGUgZmlyc3Qgb3B0aW9uIG1hdGNoaW5nIGFueSBhbnN3ZXIgdmlhIGlzTWF0Y2hlZC5cclxuICogQWxzbyBhY2NlcHRzIGEgc2luZ2xlIHN0cmluZyAoQmFzZUZpbGxlciAvIFBlcnNvbmlvKS5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxsU2VsZWN0RmllbGQoXHJcbiAgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgYW5zd2Vyczogc3RyaW5nIHwgc3RyaW5nW11cclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgaWYgKCFzZWxlY3QpIHJldHVybiBmYWxzZVxyXG4gIGNvbnN0IGxpc3QgPSAoQXJyYXkuaXNBcnJheShhbnN3ZXJzKSA/IGFuc3dlcnMgOiBbYW5zd2Vyc10pLmZpbHRlcihCb29sZWFuKVxyXG4gIGlmICghbGlzdC5sZW5ndGgpIHJldHVybiBmYWxzZVxyXG5cclxuICBjb25zdCBmb2N1c0V2ID0gbmV3IEZvY3VzRXZlbnQoXCJmb2N1c1wiLCB7XHJcbiAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgIHZpZXc6IHdpbmRvd1xyXG4gIH0pXHJcbiAgc2VsZWN0LmRpc3BhdGNoRXZlbnQoZm9jdXNFdilcclxuICBzZWxlY3QuZm9jdXMoKVxyXG5cclxuICBpZiAoc2VsZWN0Lm9wdGlvbnM/Lmxlbmd0aCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBvcHQgPSBzZWxlY3Qub3B0aW9uc1tpXVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgb3B0Py52YWx1ZSAmJlxyXG4gICAgICAgIG9wdC50ZXh0ICYmXHJcbiAgICAgICAgbGlzdC5zb21lKChhKSA9PiBpc01hdGNoZWQoYSwgb3B0LnRleHQpIHx8IGlzRXhhY3RDaG9pY2VNYXRjaChvcHQudGV4dCwgYSkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIG9wdC5jbGljaygpXHJcbiAgICAgICAgb3B0LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgb3B0LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIG9wdC5zZWxlY3RlZCA9IHRydWVcclxuICAgICAgICBzZWxlY3QuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgIG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgc2VsZWN0LmJsdXIoKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc2VsZWN0LmJsdXIoKVxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG4vKiogRXhhY3Qgb3B0aW9uIGAudGV4dGAgb3IgYC50aXRsZWAgbWF0Y2ggKG5vIGZ1enp5KS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxPcmlnaW5TZWxlY3RGaWVsZChcclxuICBzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICB2YWx1ZXM6IHN0cmluZyB8IHN0cmluZ1tdXHJcbik6IGJvb2xlYW4ge1xyXG4gIGlmICghc2VsZWN0Py5vcHRpb25zKSByZXR1cm4gZmFsc2VcclxuICBjb25zdCB3YW50cyA9IChBcnJheS5pc0FycmF5KHZhbHVlcykgPyB2YWx1ZXMgOiBbdmFsdWVzXSkubWFwKFN0cmluZylcclxuICBmb3IgKGNvbnN0IHdhbnQgb2Ygd2FudHMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgb3B0ID0gc2VsZWN0Lm9wdGlvbnNbaV1cclxuICAgICAgaWYgKG9wdC50ZXh0ID09PSB3YW50IHx8IG9wdC50aXRsZSA9PT0gd2FudCkge1xyXG4gICAgICAgIG9wdC5zZWxlY3RlZCA9IHRydWVcclxuICAgICAgICBzZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBidWJibGVzOiB0cnVlIH0pKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxsUmFkaW9Hcm91cEZpZWxkKFxyXG4gIHJhZGlvczogSFRNTElucHV0RWxlbWVudFtdLFxyXG4gIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXVxyXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICBjb25zdCB3YW50ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZVswXSA6IHZhbHVlXHJcbiAgaWYgKCF3YW50KSByZXR1cm4gZmFsc2VcclxuICBjb25zdCBtYXRjaCA9IGZpbmRFeGFjdENob2ljZShyYWRpb3MsIHdhbnQsIGNob2ljZUxhYmVsVGV4dClcclxuICBpZiAoIW1hdGNoKSByZXR1cm4gZmFsc2VcclxuICBpZiAoIW1hdGNoLmNoZWNrZWQpIHtcclxuICAgIG1hdGNoLmNsaWNrKClcclxuICAgIG1hdGNoLmNoZWNrZWQgPSB0cnVlXHJcbiAgICBtYXRjaC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUgfSkpXHJcbiAgICBtYXRjaC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNsaWNrXCIsIHsgYnViYmxlczogdHJ1ZSB9KSlcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGxTaW5nbGVDaGVja2JveChcclxuICBlbDogSFRNTElucHV0RWxlbWVudCxcclxuICBjaGVja2VkID0gdHJ1ZVxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICBhd2FpdCBmaWxsQ2hlY2tib3goZWwsIGNoZWNrZWQpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdHRhY2ggYSBGaWxlIC8gQmxvYiB0byBhIGZpbGUgaW5wdXQgKGNsZWFuLVRTKS5cclxuICogT3JhY2xlIGFsc28gYWNjZXB0cyBhIHByZXBhcmVkIGB7IGZpbGVzOiBGaWxlTGlzdCB9YCArIHByb2dyZXNzIGNhbGxiYWNrcy5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRGaWxlcyhcclxuICBpbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgZmlsZTogRmlsZSB8IEJsb2IsXHJcbiAgZmlsZU5hbWU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICBpZiAoIWlucHV0IHx8IGlucHV0LnR5cGUgIT09IFwiZmlsZVwiKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgY29uc3QgYmxvYiA9XHJcbiAgICBmaWxlIGluc3RhbmNlb2YgRmlsZVxyXG4gICAgICA/IGZpbGVcclxuICAgICAgOiBuZXcgRmlsZShbZmlsZV0sIGZpbGVOYW1lLCB7XHJcbiAgICAgICAgICB0eXBlOiAoZmlsZSBhcyBCbG9iKS50eXBlIHx8IFwiYXBwbGljYXRpb24vcGRmXCJcclxuICAgICAgICB9KVxyXG5cclxuICBjb25zdCBkdCA9IG5ldyBEYXRhVHJhbnNmZXIoKVxyXG4gIGR0Lml0ZW1zLmFkZChibG9iKVxyXG4gIGlucHV0LmZpbGVzID0gZHQuZmlsZXNcclxuICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHsgYnViYmxlczogdHJ1ZSB9KSlcclxuICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUgfSkpXHJcbiAgYXdhaXQgZGVsYXkoMTAwKVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8qKiBUZWxsIHRoZSB0b3AgZnJhbWUgdGhlIGFnZW50IGNvdmVyZWQgbGV0dGVyIHN0YXR1cyBjaGFuZ2VkLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zdENvdmVyTGV0dGVyU3RhdHVzKHN0YXR1czogdW5rbm93bik6IHZvaWQge1xyXG4gIHdpbmRvdy50b3A/LnBvc3RNZXNzYWdlKFxyXG4gICAge1xyXG4gICAgICB0eXBlOiBNRVNTQUdFX0VWRU5UUy5hZ2VudENoZWNrQ292ZXJMZXR0ZXIsXHJcbiAgICAgIHN0YXR1c1xyXG4gICAgfSxcclxuICAgIHsgdGFyZ2V0T3JpZ2luOiBcIipcIiB9XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGZpbGxEZWZhdWx0SW5wdXRGaWVsZCxcclxuICBmaWxsQ2hlY2tib3gsXHJcbiAgZGVsYXlcclxufVxyXG4iLCIvKipcclxuICogTmF0aXZlIGlucHV0IGZpbGwgd2l0aCBSZWFjdC1jb21wYXRpYmxlIHZhbHVlIHNldHRlciAoZW5naW5lIGlucHV0LmpzIHBvcnQpLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxsRGVmYXVsdElucHV0RmllbGQoXHJcbiAgZWw6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICB2YWx1ZTogc3RyaW5nXHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gIGlmICghZWwpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJbY2xlYW4tZmlsbF0gZWxlbWVudCBpcyBudWxsXCIpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGVsLmZvY3VzKClcclxuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihlbClcclxuICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgXCJ2YWx1ZVwiKVxyXG4gIGlmIChkZXNjPy5zZXQpIHtcclxuICAgIGRlc2Muc2V0LmNhbGwoZWwsIHZhbHVlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBlbC52YWx1ZSA9IHZhbHVlXHJcbiAgfVxyXG5cclxuICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSlcclxuICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSkpXHJcbiAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJibHVyXCIpKVxyXG4gIGVsLmRpc3BhdGNoRXZlbnQoXHJcbiAgICBuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBrZXk6IFwiRW50ZXJcIiwga2V5Q29kZTogMTMgfSlcclxuICApXHJcbiAgZWwuZGlzcGF0Y2hFdmVudChcclxuICAgIG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBrZXk6IFwiRW50ZXJcIiwga2V5Q29kZTogMTMgfSlcclxuICApXHJcbiAgZWwuYmx1cigpXHJcbiAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRm9jdXNFdmVudChcImZvY3VzXCIsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSlcclxuICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pKVxyXG4gIGVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSlcclxuICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBGb2N1c0V2ZW50KFwiYmx1clwiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSkpXHJcbn1cclxuIiwiaW1wb3J0IHsgaXNFeGFjdENob2ljZU1hdGNoIH0gZnJvbSBcIn5jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaFwiXHJcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2RlbGF5XCJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxsQ2hlY2tib3goXHJcbiAgZWw6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG4gIGNoZWNrZWQgPSB0cnVlXHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gIGlmICghZWwpIHJldHVyblxyXG4gIGVsLmZvY3VzKClcclxuICBpZiAoZWwuY2hlY2tlZCAhPT0gY2hlY2tlZCkge1xyXG4gICAgZWwuY2xpY2soKVxyXG4gICAgYXdhaXQgZGVsYXkoMzApXHJcbiAgfVxyXG4gIGVsLmNoZWNrZWQgPSBjaGVja2VkXHJcbiAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBidWJibGVzOiB0cnVlIH0pKVxyXG4gIGNvbnN0IHJvbGUgPSBlbC5jbG9zZXN0KCdbcm9sZT1cImNoZWNrYm94XCJdJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsXHJcbiAgaWYgKHJvbGUpIHJvbGUuY2xpY2soKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlsbENoZWNrYm94ZXNCeUxhYmVscyhcclxuICBjaGVja2JveGVzOiBIVE1MSW5wdXRFbGVtZW50W10sXHJcbiAgd2FudHM6IHN0cmluZ1tdXHJcbik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgbGV0IGZpbGxlZCA9IDBcclxuICBmb3IgKGNvbnN0IHdhbnQgb2Ygd2FudHMpIHtcclxuICAgIGZvciAoY29uc3QgYm94IG9mIGNoZWNrYm94ZXMpIHtcclxuICAgICAgY29uc3QgbGFiZWwgPVxyXG4gICAgICAgIChib3guaWQgJiZcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7Q1NTLmVzY2FwZShib3guaWQpfVwiXWApXHJcbiAgICAgICAgICAgID8udGV4dENvbnRlbnQpIHx8XHJcbiAgICAgICAgYm94LmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnQgfHxcclxuICAgICAgICBib3guZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSB8fFxyXG4gICAgICAgIGJveC52YWx1ZVxyXG4gICAgICBpZiAoaXNFeGFjdENob2ljZU1hdGNoKGxhYmVsLCB3YW50KSkge1xyXG4gICAgICAgIGF3YWl0IGZpbGxDaGVja2JveChib3gsIHRydWUpXHJcbiAgICAgICAgZmlsbGVkICs9IDFcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmaWxsZWRcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGxSYWRpb0J5TGFiZWwoXHJcbiAgcmFkaW9zOiBIVE1MSW5wdXRFbGVtZW50W10sXHJcbiAgd2FudDogc3RyaW5nXHJcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGZvciAoY29uc3QgcmFkaW8gb2YgcmFkaW9zKSB7XHJcbiAgICBjb25zdCBsYWJlbCA9XHJcbiAgICAgIChyYWRpby5pZCAmJlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7Q1NTLmVzY2FwZShyYWRpby5pZCl9XCJdYClcclxuICAgICAgICAgID8udGV4dENvbnRlbnQpIHx8XHJcbiAgICAgIHJhZGlvLmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnQgfHxcclxuICAgICAgcmFkaW8uZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSB8fFxyXG4gICAgICByYWRpby52YWx1ZVxyXG4gICAgaWYgKGlzRXhhY3RDaG9pY2VNYXRjaChsYWJlbCwgd2FudCkpIHtcclxuICAgICAgaWYgKCFyYWRpby5jaGVja2VkKSB7XHJcbiAgICAgICAgcmFkaW8uY2xpY2soKVxyXG4gICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgcmFkaW8uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBidWJibGVzOiB0cnVlIH0pKVxyXG4gICAgICAgIHJhZGlvLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2xpY2tcIiwgeyBidWJibGVzOiB0cnVlIH0pKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcbiIsIi8qKiBFeGFjdCAvIG5vcm1hbGl6ZWQgY2hvaWNlIG1hdGNoaW5nIChwb3J0IG9mIGVuZ2luZSBjaG9pY2UtbWF0Y2gpLlxyXG4gKiBPcmFjbGU6IGVuZ2luZS9oZWxwZXItYXBwL3NyYy9jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaC5qc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDaG9pY2VUZXh0KHZhbHVlOiB1bmtub3duKTogc3RyaW5nIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikgcmV0dXJuIFwiXCJcclxuICByZXR1cm4gU3RyaW5nKHZhbHVlKVxyXG4gICAgLm5vcm1hbGl6ZShcIk5GS0NcIilcclxuICAgIC5yZXBsYWNlKC9bXFx1MjAxOFxcdTIwMTldL2csIFwiJ1wiKVxyXG4gICAgLnJlcGxhY2UoL1tcXHUyMDFjXFx1MjAxZF0vZywgJ1wiJylcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRXhhY3RDaG9pY2VNYXRjaChvcHRpb25UZXh0OiB1bmtub3duLCB3YW50OiB1bmtub3duKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgdyA9IG5vcm1hbGl6ZUNob2ljZVRleHQod2FudClcclxuICByZXR1cm4gISF3ICYmIG5vcm1hbGl6ZUNob2ljZVRleHQob3B0aW9uVGV4dCkgPT09IHdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFeGFjdENob2ljZTxUPihcclxuICBpdGVtczogVFtdLFxyXG4gIHdhbnQ6IHVua25vd24sXHJcbiAgZ2V0TGFiZWw6IChpdGVtOiBUKSA9PiB1bmtub3duLFxyXG4gIGdldFNlY29uZGFyeT86IChpdGVtOiBUKSA9PiB1bmtub3duXHJcbik6IFQgfCB1bmRlZmluZWQge1xyXG4gIGlmICghbm9ybWFsaXplQ2hvaWNlVGV4dCh3YW50KSkgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIGNvbnN0IGJ5TGFiZWwgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGlzRXhhY3RDaG9pY2VNYXRjaChnZXRMYWJlbChpdGVtKSwgd2FudCkpXHJcbiAgaWYgKGJ5TGFiZWwubGVuZ3RoID09PSAxKSByZXR1cm4gYnlMYWJlbFswXVxyXG4gIGlmIChieUxhYmVsLmxlbmd0aCA+IDEgfHwgIWdldFNlY29uZGFyeSkgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIGNvbnN0IGJ5U2VjID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PlxyXG4gICAgaXNFeGFjdENob2ljZU1hdGNoKGdldFNlY29uZGFyeShpdGVtKSwgd2FudClcclxuICApXHJcbiAgcmV0dXJuIGJ5U2VjLmxlbmd0aCA9PT0gMSA/IGJ5U2VjWzBdIDogdW5kZWZpbmVkXHJcbn1cclxuXHJcbi8qKiBTaW1wbGUgZnV6enkgc2NvcmUgMOKAkzEgKHRva2VuIG92ZXJsYXAgKyBzdWJzdHJpbmcpLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZnV6enlTY29yZShhOiBzdHJpbmcsIGI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgY29uc3QgbmEgPSBub3JtYWxpemVDaG9pY2VUZXh0KGEpXHJcbiAgY29uc3QgbmIgPSBub3JtYWxpemVDaG9pY2VUZXh0KGIpXHJcbiAgaWYgKCFuYSB8fCAhbmIpIHJldHVybiAwXHJcbiAgaWYgKG5hID09PSBuYikgcmV0dXJuIDFcclxuICBpZiAobmIuaW5jbHVkZXMobmEpIHx8IG5hLmluY2x1ZGVzKG5iKSkgcmV0dXJuIDAuODVcclxuICBjb25zdCBhdCA9IG5ldyBTZXQobmEuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKSlcclxuICBjb25zdCBidCA9IG5iLnNwbGl0KFwiIFwiKS5maWx0ZXIoQm9vbGVhbilcclxuICBpZiAoIWJ0Lmxlbmd0aCkgcmV0dXJuIDBcclxuICBsZXQgaGl0ID0gMFxyXG4gIGZvciAoY29uc3QgdCBvZiBidCkgaWYgKGF0Lmhhcyh0KSkgaGl0ICs9IDFcclxuICByZXR1cm4gaGl0IC8gTWF0aC5tYXgoYXQuc2l6ZSwgYnQubGVuZ3RoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnV6enlGaW5kQmVzdDxUPihcclxuICBpdGVtczogVFtdLFxyXG4gIHdhbnQ6IHN0cmluZyxcclxuICBnZXRMYWJlbDogKGl0ZW06IFQpID0+IHN0cmluZyxcclxuICBtaW5TY29yZSA9IDAuNDVcclxuKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgbGV0IGJlc3Q6IFQgfCB1bmRlZmluZWRcclxuICBsZXQgYmVzdFNjb3JlID0gMFxyXG4gIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgY29uc3QgcyA9IGZ1enp5U2NvcmUod2FudCwgZ2V0TGFiZWwoaXRlbSkpXHJcbiAgICBpZiAocyA+IGJlc3RTY29yZSkge1xyXG4gICAgICBiZXN0U2NvcmUgPSBzXHJcbiAgICAgIGJlc3QgPSBpdGVtXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBiZXN0U2NvcmUgPj0gbWluU2NvcmUgPyBiZXN0IDogdW5kZWZpbmVkXHJcbn1cclxuIiwiLyoqXHJcbiAqIENoZWNrYm94IC8gcmFkaW8gbGFiZWwgaGVscGVycyAoY2xlYW4tVFMpLlxyXG4gKiBPcmFjbGU6IGVuZ2luZS9oZWxwZXItYXBwL3NyYy9jb250ZW50cy9tZXRob2RzL2NoZWNrYm94LWxhYmVsLmpzXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gdGV4dE9mKGVsOiBFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIChlbD8udGV4dENvbnRlbnQgfHwgXCJcIikudHJpbSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxhYmVsRm9ySW5wdXQoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiBIVE1MTGFiZWxFbGVtZW50IHwgbnVsbCB7XHJcbiAgaWYgKCFpbnB1dC5pZCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBudWxsXHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke0NTUy5lc2NhcGUoaW5wdXQuaWQpfVwiXWApXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuLyoqIFZpc2libGUgbGFiZWwgdGV4dCBmb3IgYSBjaGVja2JveC9yYWRpby4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhZGlvQ2hlY2tUZXh0KGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KTogc3RyaW5nIHtcclxuICBjb25zdCBwYXJlbnQgPSBpbnB1dC5wYXJlbnRFbGVtZW50XHJcbiAgY29uc3QgZ3JhbmQgPSBwYXJlbnQ/LnBhcmVudEVsZW1lbnRcclxuICBjb25zdCBjYW5kaWRhdGVzOiBBcnJheTxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZD4gPSBbXHJcbiAgICB0eXBlb2YgaW5wdXQuY2xvc2VzdCA9PT0gXCJmdW5jdGlvblwiID8gaW5wdXQuY2xvc2VzdChcImxhYmVsXCIpIDogbnVsbCxcclxuICAgIGxhYmVsRm9ySW5wdXQoaW5wdXQpLFxyXG4gICAgcGFyZW50LFxyXG4gICAgcGFyZW50Py5uZXh0RWxlbWVudFNpYmxpbmcsXHJcbiAgICBwYXJlbnQ/LnByZXZpb3VzRWxlbWVudFNpYmxpbmcsXHJcbiAgICBncmFuZFxyXG4gIF1cclxuICBmb3IgKGNvbnN0IGVsIG9mIGNhbmRpZGF0ZXMpIHtcclxuICAgIGNvbnN0IHQgPSB0ZXh0T2YoZWwpXHJcbiAgICBpZiAodCkgcmV0dXJuIHRcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIGlucHV0LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgfHxcclxuICAgIGlucHV0LnZhbHVlIHx8XHJcbiAgICBcIlwiXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUmFkaW9DaGVja1RleHQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKFwiKlwiLCBcIlwiKVxyXG59XHJcbiIsIi8qKiBDb3JlIGVudW1zIHBvcnRlZCBmcm9tIEpvYnJpZ2h0IGhlbHBlciBgfmNvcmUvZW51bXNgLiAqL1xuXG5leHBvcnQgZW51bSBSRU5ERVJfU1RFUCB7XG4gIElOSVRJQUwgPSAwLFxuICBGSUxMSU5HID0gMSxcbiAgRklMTEVEID0gMixcbiAgRkFJTEVEID0gM1xufVxuXG5leHBvcnQgZW51bSBNRVNTQUdFX0VWRU5UUyB7XG4gIGF1dG9GaWxsUmVzdWx0RnJvbUlmcmFtZSA9IFwiYXV0b0ZpbGxSZXN1bHRGcm9tSWZyYW1lXCIsXG4gIGF1dG9GaWxsQ29tcGxldGVGcm9tSWZyYW1lID0gXCJhdXRvRmlsbENvbXBsZXRlRnJvbUlmcmFtZVwiLFxuICBhdXRvRmlsbFJlbG9hZElmcmFtZSA9IFwiYXV0b0ZpbGxSZWxvYWRJZnJhbWVcIixcbiAgdXBkYXRlUmVzdWx0RnJvbUlmcmFtZSA9IFwidXBkYXRlUmVzdWx0RnJvbUlmcmFtZVwiLFxuICBzZW5kSHR0cFN0YXR1c0lmcmFtZSA9IFwic2VuZEh0dHBTdGF0dXNJZnJhbWVcIixcbiAgY29tcGxhdGVBZ2VudCA9IFwiY29tcGxhdGVBZ2VudFwiLFxuICBhZ2VudFN0YXJ0RmlsbGluZ0ZpZWxkcyA9IFwiYWdlbnRTdGFydEZpbGxpbmdGaWVsZHNcIixcbiAgYWdlbnRHZXRSZXN1bWVJbmZvID0gXCJhZ2VudEdldFJlc3VtZUluZm9cIixcbiAgYWdlbnRTdWJtaXRDbGlja2VkID0gXCJhZ2VudFN1Ym1pdENsaWNrZWRcIixcbiAgYWdlbnRDaGVja0NvdmVyTGV0dGVyID0gXCJhZ2VudENoZWNrQ292ZXJMZXR0ZXJcIlxufVxuXG5leHBvcnQgZW51bSBGSUVMRF9UWVBFIHtcbiAgVEVYVCA9IFwidGV4dFwiLFxuICBOVU1CRVIgPSBcIm51bWJlclwiLFxuICBDT1ZFUl9MRVRURVIgPSBcImNvdmVyLWxldHRlclwiLFxuICBDSEVDS0JPWCA9IFwiY2hlY2tib3hcIixcbiAgU0VMRUNUID0gXCJzZWxlY3RcIixcbiAgUkFESU8gPSBcInJhZGlvXCIsXG4gIFNFQVJDSCA9IFwic2VhcmNoXCIsXG4gIFNFTEVDVF9PUklHSU5BTCA9IFwic2VsZWN0LW9yaWdpbmFsXCIsXG4gIE1VTFRJX1NFTEVDVCA9IFwibXVsdGktc2VsZWN0XCIsXG4gIExJU1RCT1ggPSBcImxpc3Rib3hcIixcbiAgRU1QTE9ZTUVOVCA9IFwiZW1wbG95bWVudFwiLFxuICBFRFVDQVRJT04gPSBcImVkdWNhdGlvblwiLFxuICBEUk9QRE9XTiA9IFwiZHJvcGRvd25cIixcbiAgREFURSA9IFwiZGF0ZVwiLFxuICBSQURJT0dST1VQID0gXCJyYWRpby1ncm91cFwiLFxuICBCQU1CT09IUl9TUEVDSUFMID0gXCJiYW1ib29oci1zcGVjaWFsXCIsXG4gIFNFQ1RJT04gPSBcInNlY3Rpb25cIixcbiAgQVNIQllfU0VBUkNIID0gXCJhc2hieS1zZWFyY2hcIlxufVxuXG5leHBvcnQgZW51bSBBUFBMSUNBVElPTl9TVEFUVVMge1xuICBSVU5OSU5HID0gMCxcbiAgU1VDQ0VTUyA9IDEsXG4gIEZBSUxFRCA9IDJcbn1cblxuZXhwb3J0IGNvbnN0IE1JTUVfVFlQRSA9IHtcbiAgcGRmOiBcImFwcGxpY2F0aW9uL3BkZlwiLFxuICBkb2M6IFwiYXBwbGljYXRpb24vbXN3b3JkXCIsXG4gIGRvY3g6IFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnRcIlxufSBhcyBjb25zdFxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImNsZWFuLWZpbGwuYzRhYjQxYmEuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);