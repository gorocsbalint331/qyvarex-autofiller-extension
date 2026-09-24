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
})({"dn0Rr":[function(require,module,exports) {
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
var _csExcludeMatches = require("~lib/cs-exclude-matches");
var _earlyUrlNormalization = require("~contents/shared/early-url-normalization");
var _nativeRuntimeActivation = require("~contents/shared/native-runtime-activation");
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
        "https://crcldu.com/*",
        "https://jobright-team-site.vercel.app/*",
        "http://localhost:3210/*",
        "http://127.0.0.1:3210/*",
        // All Google consumer / Workspace hosts (Translate, Docs, Gmail, \u2026).
        // Activate can still direct-inject on rare Google careers pages.
        "*://google.com/*",
        "*://www.google.com/*",
        "*://*.google.com/*",
        "*://*.youtube.com/*",
        "*://youtu.be/*",
        "*://*.office.com/*",
        "*://*.office365.com/*",
        "*://*.sharepoint.com/*",
        "*://outlook.live.com/*",
        "*://outlook.office.com/*",
        "*://onedrive.live.com/*",
        "*://*.teams.microsoft.com/*",
        "*://*.facebook.com/*",
        "*://*.instagram.com/*",
        "*://*.twitter.com/*",
        "*://*.x.com/*",
        "*://*.tiktok.com/*",
        "*://*.reddit.com/*",
        "*://*.netflix.com/*",
        "*://*.twitch.tv/*",
        "*://*.discord.com/*",
        "*://*.slack.com/*",
        "*://*.whatsapp.com/*",
        "*://web.whatsapp.com/*",
        "*://*.spotify.com/*",
        "*://*.github.com/*",
        "*://gist.github.com/*",
        "*://*.stackoverflow.com/*",
        "*://*.stackexchange.com/*",
        "http://localhost:3000/*",
        "http://localhost:5173/*",
        "http://127.0.0.1:3000/*",
        "http://127.0.0.1:5173/*"
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
    return (0, _nativeRuntimeActivation.getRuntimeActivationReason)({
        href: window.location.href,
        isTopFrame: window.top === window.self,
        iframeUrls,
        pageSourceUrls
    });
}
async function injectAndBootstrapHelper(reason) {
    if (!chrome?.runtime?.id) throw new Error("Extension context invalidated.");
    const alreadyStarted = helperStarted;
    if (!alreadyStarted) {
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
        if (!chrome?.runtime?.id) {
            helperStarted = false;
            throw new Error("Extension context invalidated.");
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
    // Popup / toolbar Activate must open the floating UI even if the bundle
    // already booted in the background (otherwise Activate appears to no-op).
    if (reason === "extension_icon") {
        const open = globalThis.openJobrightHelperFromExtensionIcon;
        if (typeof open === "function") try {
            await open();
        } catch (error) {
            console.warn("[jobright-fork] open helper from icon failed", error);
        }
    }
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
    stopObserver = (0, _nativeRuntimeActivation.observeRuntimeActivationSignals)((reason)=>{
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
    // Consumer / non-ATS hosts: never watch or inject (Activate can still
    // direct-inject via the popup when the user explicitly requests it).
    try {
        if ((0, _csExcludeMatches.isNeverApplyHost)(window.location.hostname)) return;
    } catch  {
        return;
    }
    if (window.top === window.self) chrome.runtime.onMessage.addListener((message, _sender, sendResponse)=>{
        if (message?.message !== "iconClicked") return;
        // Stale CS after extension reload: refuse so background can direct-inject.
        if (!chrome?.runtime?.id) {
            try {
                sendResponse({
                    ok: false,
                    reason: "context_invalidated"
                });
            } catch  {
            /* ignore */ }
            return true;
        }
        injectAndBootstrapHelper("extension_icon").then(()=>{
            try {
                sendResponse({
                    ok: true
                });
            } catch  {
            /* ignore */ }
        }).catch((error)=>{
            const msg = error instanceof Error ? error.message : String(error);
            if (/extension context invalidated/i.test(msg)) {
                console.warn("[jobright-fork] extension was reloaded \u2014 refresh this tab, then Activate again");
                try {
                    sendResponse({
                        ok: false,
                        reason: "context_invalidated"
                    });
                } catch  {
                /* ignore */ }
                return;
            }
            console.warn("[jobright-fork] activate failed", error);
            try {
                sendResponse({
                    ok: false,
                    reason: msg || "activate_failed"
                });
            } catch  {
            /* ignore */ }
        });
        return true;
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

},{"@plasmohq/messaging":"k3omK","~core/cloudflare-challenge":"9Leq6","~lib/cs-exclude-matches":"eXTI3","~contents/shared/early-url-normalization":"4Ai6Z","~contents/shared/native-runtime-activation":"7ium7","~contents/shared/sticky-job-id":"6MM1J","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"k3omK":[function(require,module,exports) {
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
// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/core/cloudflare-challenge.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCloudflareManagedChallengePage", ()=>isCloudflareManagedChallengePage);
parcelHelpers.export(exports, "collectCloudflareChallengePageProbe", ()=>collectCloudflareChallengePageProbe);
parcelHelpers.export(exports, "isCurrentDocumentCloudflareManagedChallengePage", ()=>isCurrentDocumentCloudflareManagedChallengePage);
parcelHelpers.export(exports, "waitForCloudflareManagedChallengePage", ()=>waitForCloudflareManagedChallengePage);
parcelHelpers.export(exports, "removeCloudflareChallengeInjectedHost", ()=>removeCloudflareChallengeInjectedHost);
parcelHelpers.export(exports, "startCloudflareChallengeInjectedHostCleanup", ()=>startCloudflareChallengeInjectedHostCleanup);
const MANAGED_RUNTIME_RE = /(?:\/cdn-cgi\/challenge-platform\b|window\._cf_chl_opt|__cf_chl_|cf_chl_opt|cf_chl_)/i;
const CHALLENGE_TITLE_RE = /(?:just a moment|security verification|one more step)/i;
const CHALLENGE_BODY_RES = [
    /performing security verification/i,
    /checking (?:if|that) (?:the )?(?:site )?connection is secure/i,
    /this website uses a security service to protect against malicious bots/i,
    /this page is displayed while the website verifies you are not a bot/i
];
const RAY_ID_RE = /\b(?:cloudflare\s+)?ray id\s*:?\s*[a-f0-9]{12,}\b/i;
const CF_FOOTER_RE = /performance and security by cloudflare/i;
const CHALLENGE_MARKER_SELECTOR = '#challenge-stage,#cf-challenge-running,#cf-please-wait,.cf-browser-verification,.cf-challenge,form[action*="/cdn-cgi/challenge-platform/"]';
const CHALLENGE_SCRIPT_SELECTOR = 'script[src*="/cdn-cgi/challenge-platform/"]';
function normalizeWhitespace(text) {
    return (text || "").replace(/\s+/g, " ").trim();
}
function isJobrightUrl(url) {
    if (!url) return false;
    try {
        let { hostname } = new URL(url);
        return "jobright.ai" === hostname || hostname.endsWith(".jobright.ai");
    } catch  {
        return false;
    }
}
function hasChallengeBodyCopy(bodyText) {
    return !!CHALLENGE_BODY_RES.some((pattern)=>pattern.test(bodyText)) || /verify you are human/i.test(bodyText) && /cloudflare/i.test(bodyText) && /(?:not a bot|malicious bots|security service)/i.test(bodyText);
}
function hasCloudflareFooterSignals(bodyText) {
    return RAY_ID_RE.test(bodyText) && CF_FOOTER_RE.test(bodyText);
}
function isSparseChallengePage({ bodyText, interactiveElementCount, allowFooterLinks = false }) {
    let bodyLength = bodyText.length;
    let interactiveCount = interactiveElementCount ?? 0;
    return allowFooterLinks ? bodyLength <= 1500 && interactiveCount <= 20 : bodyLength <= 2500 && interactiveCount <= 4;
}
function isCloudflareManagedChallengePage(probe) {
    let title = normalizeWhitespace(probe.title);
    let bodyText = normalizeWhitespace(probe.bodyText);
    let html = probe.html || "";
    let managedRuntimeFound = !!probe.managedRuntimeFound || MANAGED_RUNTIME_RE.test(html);
    let footerSignals = hasCloudflareFooterSignals(bodyText);
    let hasPlatformSignals = managedRuntimeFound || !!probe.challengeMarkerFound || footerSignals;
    let titleLooksLikeChallenge = CHALLENGE_TITLE_RE.test(title);
    let bodyLooksLikeChallenge = hasChallengeBodyCopy(bodyText) || titleLooksLikeChallenge || footerSignals;
    return hasPlatformSignals && bodyLooksLikeChallenge && isSparseChallengePage({
        bodyText,
        interactiveElementCount: probe.interactiveElementCount,
        allowFooterLinks: footerSignals || managedRuntimeFound && titleLooksLikeChallenge
    });
}
function looksLikePossibleChallengePage(probe) {
    let title = normalizeWhitespace(probe.title);
    let bodyText = normalizeWhitespace(probe.bodyText);
    let html = probe.html || "";
    let managedRuntimeFound = !!probe.managedRuntimeFound || MANAGED_RUNTIME_RE.test(html);
    let footerSignals = hasCloudflareFooterSignals(bodyText);
    let hasPlatformSignals = managedRuntimeFound || !!probe.challengeMarkerFound || footerSignals;
    let titleLooksLikeChallenge = CHALLENGE_TITLE_RE.test(title);
    let bodyLooksLikeChallenge = hasChallengeBodyCopy(bodyText) || titleLooksLikeChallenge || footerSignals;
    return !!hasPlatformSignals || !!titleLooksLikeChallenge || !!bodyLooksLikeChallenge || isSparseChallengePage({
        bodyText,
        interactiveElementCount: probe.interactiveElementCount
    });
}
function collectCloudflareChallengePageProbe(doc) {
    let title = doc.title;
    let challengeMarkerFound = !!doc.querySelector(CHALLENGE_MARKER_SELECTOR);
    let defaultView = doc.defaultView;
    let managedRuntimeFound = !!(doc.querySelector(CHALLENGE_SCRIPT_SELECTOR) || defaultView?._cf_chl_opt);
    let interactiveElementCount = doc.querySelectorAll("button, input, select, textarea, a[href], [role='button']").length;
    let shouldReadBody = managedRuntimeFound || challengeMarkerFound || CHALLENGE_TITLE_RE.test(normalizeWhitespace(title)) || interactiveElementCount <= 4;
    return {
        title,
        bodyText: shouldReadBody ? (doc.body?.textContent || doc.body?.innerText || "").trim() : "",
        managedRuntimeFound,
        challengeMarkerFound,
        interactiveElementCount
    };
}
function isCurrentDocumentCloudflareManagedChallengePage() {
    return "undefined" != typeof document && isCloudflareManagedChallengePage(collectCloudflareChallengePageProbe(document));
}
async function waitForCloudflareManagedChallengePage({ timeoutMs = 1500, intervalMs = 100, currentUrl = "undefined" == typeof window ? undefined : window.location.href, collectProbe } = {}) {
    if (isJobrightUrl(currentUrl)) return false;
    let probeCollector = collectProbe || (()=>"undefined" == typeof document ? null : collectCloudflareChallengePageProbe(document));
    let deadline = Date.now() + timeoutMs;
    for(;;){
        let probe = probeCollector();
        if (probe && isCloudflareManagedChallengePage(probe)) return true;
        if (probe && !looksLikePossibleChallengePage(probe) || Date.now() >= deadline) return false;
        await new Promise((resolve)=>setTimeout(resolve, Math.max(0, intervalMs)));
    }
}
function removeCloudflareChallengeInjectedHost(hostId) {
    if ("undefined" == typeof document) return false;
    let host = document.getElementById(hostId);
    return !!host && (host.remove(), true);
}
function startCloudflareChallengeInjectedHostCleanup(hostId, { timeoutMs = 5e3, intervalMs = 250 } = {}) {
    if ("undefined" == typeof document) return ()=>{};
    let stopped = false;
    let timeoutHandle = null;
    let intervalHandle = null;
    let mutationObserver = null;
    let stop = ()=>{
        stopped || (stopped = true, timeoutHandle && clearTimeout(timeoutHandle), intervalHandle && clearInterval(intervalHandle), mutationObserver?.disconnect());
    };
    let checkAndCleanup = ()=>{
        !stopped && isCurrentDocumentCloudflareManagedChallengePage() && (removeCloudflareChallengeInjectedHost(hostId), stop());
    };
    return checkAndCleanup(), !stopped && (intervalHandle = setInterval(checkAndCleanup, intervalMs), timeoutHandle = setTimeout(stop, timeoutMs), "undefined" != typeof MutationObserver && document.documentElement && (mutationObserver = new MutationObserver(checkAndCleanup)).observe(document.documentElement, {
        childList: true,
        subtree: true,
        characterData: true
    })), stop;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"eXTI3":[function(require,module,exports) {
/**
 * Hostnames where bootstrap must no-op even if a CS somehow loads.
 * Keep in sync with the Google / consumer excludes in bootstrap.ts.
 *
 * Lives under src/lib (not contents/) so Plasmo does not register it
 * as its own <all_urls> content script.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNeverApplyHost", ()=>isNeverApplyHost);
function isNeverApplyHost(hostname) {
    const host = hostname.toLowerCase();
    // Entire Google property tree (docs, translate, gmail, search, \u2026)
    if (host === "google.com" || host.endsWith(".google.com")) return true;
    if (host === "youtu.be" || host === "youtube.com" || host.endsWith(".youtube.com")) return true;
    const suffixes = [
        "facebook.com",
        "instagram.com",
        "twitter.com",
        "x.com",
        "tiktok.com",
        "reddit.com",
        "netflix.com",
        "twitch.tv",
        "discord.com",
        "slack.com",
        "whatsapp.com",
        "spotify.com",
        "office.com",
        "office365.com",
        "sharepoint.com",
        "outlook.live.com",
        "onedrive.live.com",
        "teams.microsoft.com",
        "github.com",
        "stackoverflow.com",
        "stackexchange.com"
    ];
    return suffixes.some((suffix)=>host === suffix || host.endsWith(`.${suffix}`));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"4Ai6Z":[function(require,module,exports) {
// @ts-nocheck
/**
 * Early URL normalization for GoHire trailing-slash and LifeAtTikTok jr_id bridges.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildLifeAtTikTokApplyUrl", ()=>buildLifeAtTikTokApplyUrl);
parcelHelpers.export(exports, "shouldRetainLifeAtTikTokJobDetailJrId", ()=>shouldRetainLifeAtTikTokJobDetailJrId);
parcelHelpers.export(exports, "shouldKeepLifeAtTikTokApplyBridge", ()=>shouldKeepLifeAtTikTokApplyBridge);
parcelHelpers.export(exports, "shouldRecoverLifeAtTikTokJobDetailJrId", ()=>shouldRecoverLifeAtTikTokJobDetailJrId);
parcelHelpers.export(exports, "buildLifeAtTikTokRecoveredUrl", ()=>buildLifeAtTikTokRecoveredUrl);
parcelHelpers.export(exports, "buildNormalizedEarlyUrl", ()=>buildNormalizedEarlyUrl);
parcelHelpers.export(exports, "shouldResolveGoHireDroppedJobIdUrl", ()=>shouldResolveGoHireDroppedJobIdUrl);
parcelHelpers.export(exports, "normalizeEarlyJobrightUrl", ()=>normalizeEarlyJobrightUrl);
const JR_ID_PARAM = "jr_id";
const GOHIRE_HOST = "jobs.gohire.io";
const GOHIRE_JOB_PATH = /^\/[^/]+\/.+-\d+\/?$/;
const LIFE_AT_TIKTOK_HOST = "lifeattiktok.com";
const LIFE_AT_TIKTOK_SEARCH_PATH = /^\/search\/\d+\/?$/;
function isLifeAtTikTokJobDetail(url) {
    const hostname = url.hostname.toLowerCase();
    const isLifeAtTikTok = hostname === LIFE_AT_TIKTOK_HOST || hostname.endsWith(`.${LIFE_AT_TIKTOK_HOST}`);
    return isLifeAtTikTok && LIFE_AT_TIKTOK_SEARCH_PATH.test(url.pathname);
}
function buildLifeAtTikTokApplyUrl(fromHref, toHref, jobId) {
    const trimmedJobId = jobId.trim();
    if (!trimmedJobId) return null;
    let fromUrl;
    let toUrl;
    try {
        fromUrl = new URL(fromHref);
        toUrl = new URL(toHref);
    } catch  {
        return null;
    }
    const fromJobId = /^\/search\/(\d+)\/?$/.exec(fromUrl.pathname)?.[1];
    const toJobId = /^\/resume\/(\d+)\/apply\/?$/.exec(toUrl.pathname)?.[1];
    if (!isLifeAtTikTokJobDetail(fromUrl) || toUrl.hostname.toLowerCase() !== "careers.tiktok.com" || !fromJobId || toJobId !== fromJobId || toUrl.searchParams.has(JR_ID_PARAM)) return null;
    toUrl.searchParams.set(JR_ID_PARAM, trimmedJobId);
    return toUrl.toString();
}
function shouldRetainLifeAtTikTokJobDetailJrId(href) {
    let url;
    try {
        url = new URL(href);
    } catch  {
        return false;
    }
    return isLifeAtTikTokJobDetail(url) && !!url.searchParams.get(JR_ID_PARAM)?.trim();
}
function shouldKeepLifeAtTikTokApplyBridge(fromHref, toHref) {
    let fromUrl;
    let toUrl;
    try {
        fromUrl = new URL(fromHref);
        toUrl = new URL(toHref);
    } catch  {
        return false;
    }
    const jobId = fromUrl.searchParams.get(JR_ID_PARAM)?.trim();
    return !!jobId && fromUrl.hostname.toLowerCase() === toUrl.hostname.toLowerCase() && fromUrl.pathname === toUrl.pathname && toUrl.searchParams.get(JR_ID_PARAM)?.trim() === jobId && isLifeAtTikTokJobDetail(toUrl);
}
function shouldRecoverLifeAtTikTokJobDetailJrId(href) {
    let url;
    try {
        url = new URL(href);
    } catch  {
        return false;
    }
    return isLifeAtTikTokJobDetail(url) && !url.searchParams.has(JR_ID_PARAM);
}
function buildLifeAtTikTokRecoveredUrl(href, jobId) {
    const trimmedJobId = jobId.trim();
    if (!trimmedJobId || !shouldRecoverLifeAtTikTokJobDetailJrId(href)) return null;
    const url = new URL(href);
    url.searchParams.set(JR_ID_PARAM, trimmedJobId);
    return url.toString();
}
function buildNormalizedEarlyUrl(href) {
    let url;
    try {
        url = new URL(href);
    } catch  {
        return null;
    }
    if (url.hostname.toLowerCase() !== GOHIRE_HOST || !url.searchParams.has(JR_ID_PARAM) || !url.pathname.endsWith("/") || !GOHIRE_JOB_PATH.test(url.pathname)) return null;
    url.pathname = url.pathname.replace(/\/+$/, "");
    const normalized = url.toString();
    return normalized === href ? null : normalized;
}
function shouldResolveGoHireDroppedJobIdUrl(href) {
    let url;
    try {
        url = new URL(href);
    } catch  {
        return false;
    }
    return url.hostname.toLowerCase() === GOHIRE_HOST && !url.searchParams.has(JR_ID_PARAM) && GOHIRE_JOB_PATH.test(url.pathname);
}
function normalizeEarlyJobrightUrl(win = window) {
    const normalized = buildNormalizedEarlyUrl(win.location.href);
    return !!normalized && (win.location.replace(normalized), true);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7ium7":[function(require,module,exports) {
// @ts-nocheck
/**
 * Decide whether the helper runtime should activate on this frame.
 * Team fork: tight activation \u2014 ATS / apply surfaces only.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSupportedRuntimeFrameUrl", ()=>isSupportedRuntimeFrameUrl);
parcelHelpers.export(exports, "getRuntimeActivationReason", ()=>getRuntimeActivationReason);
parcelHelpers.export(exports, "observeRuntimeActivationSignals", ()=>observeRuntimeActivationSignals);
var _hubEnv = require("~api/hub-env");
var _nativeSupportedSites = require("~core/native-supported-sites");
const POST_APPLY_PATH_REGEXES = [
    "confirmation",
    "applyConfirmation",
    "careers/chatbot",
    "success(?:ful)?",
    "thank[_-]?you",
    "thanks",
    "SuccessfulRegistration"
].map((segment)=>new RegExp(`/${segment}(?=/|$)`, "i"));
const SAFE_QUERY_PARAMS = new Set([
    "gh_jid",
    "gh_src",
    "ashby_jid",
    "LeverAppId",
    "jobviteiframe"
]);
const WORKABLE_HOST_RE = /workable\.com$/i;
const LINKEDIN_JOB_PATH_RE = /^\/(?:jobs|job|easy-apply|in\/[^/]+\/overlay\/apply|hiring|talent)\b/i;
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
    return (0, _nativeSupportedSites.CONSTRAINED_SITE_RULES).some((rule)=>siteRuleMatchesHost(url, hostname, rule) && !siteRuleMatchesPath(url, rule));
}
function isSupportedRuntimeFrameUrl(href) {
    if (!href) return false;
    try {
        if (isPostApplyConfirmationPath(new URL(href))) return false;
    } catch  {
    /* ignore */ }
    return (0, _nativeSupportedSites.IFRAME_CHECK_PATTERN).some((token)=>href.includes(token));
}
function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function sourceUrlIndicatesAts(sourceUrl, keyword, atsDomain) {
    try {
        const src = new URL(sourceUrl);
        if (hostnameEqualsOrIsSubdomain(src.hostname, atsDomain)) return true;
        const hay = `${src.hostname}${src.pathname}`.toLowerCase();
        const needle = keyword.toLowerCase();
        if (needle.includes(".")) return hay.includes(needle);
        return new RegExp(`(?:^|[./_-])${escapeRegExp(needle)}(?:[./_-]|$)`, "i").test(hay);
    } catch  {
        return false;
    }
}
function pageSourcesIndicateForeignAts(pageHostname, pageSourceUrls) {
    for (const sourceUrl of pageSourceUrls)for (const [keyword, atsDomain] of (0, _nativeSupportedSites.PAGE_SOURCE_ATS_LIST)){
        if (hostnameEqualsOrIsSubdomain(pageHostname, atsDomain)) continue;
        if (sourceUrlIndicatesAts(sourceUrl, keyword, atsDomain)) return true;
    }
    return false;
}
function isSupportedTopLevelApplicationUrl(url) {
    if (isPostApplyConfirmationPath(url)) return false;
    const hostname = url.hostname;
    if (isConstrainedSiteButWrongPath(url, hostname)) return false;
    return (0, _nativeSupportedSites.SUPPORT_DOMAINS).some((domain)=>hostnameEqualsOrIsSubdomain(hostname, domain)) || (0, _nativeSupportedSites.SUPPORT_PATTERNS).some((pattern)=>pattern.includes(url.href)) || (0, _nativeSupportedSites.CONSTRAINED_SITE_RULES).some((rule)=>siteRuleMatchesHost(url, hostname, rule) && siteRuleMatchesPath(url, rule));
}
function hasSupportedEmbeddedFrame(iframeUrls) {
    return iframeUrls.some((iframeUrl)=>isSupportedRuntimeFrameUrl(iframeUrl));
}
function isLinkedInJobSurface(url) {
    return hostnameEqualsOrIsSubdomain(url.hostname, "linkedin.com") && LINKEDIN_JOB_PATH_RE.test(url.pathname);
}
function hasSafeAtsQueryParam(url) {
    for (const param of (0, _nativeSupportedSites.QUERY_PARAM_LIST)){
        if (!url.searchParams.has(param)) continue;
        if (SAFE_QUERY_PARAMS.has(param)) return true;
        if (param === "selectedJobId" && WORKABLE_HOST_RE.test(url.hostname)) return true;
    }
    return false;
}
function isAgentProductHost(hostname) {
    return (0, _hubEnv.agentDomains).some((domain)=>hostnameEqualsOrIsSubdomain(hostname, domain));
}
function getRuntimeActivationReason({ href, isTopFrame, iframeUrls = [], pageSourceUrls = [] }) {
    let url;
    try {
        url = new URL(href);
    } catch  {
        return null;
    }
    if (isAgentProductHost(url.hostname)) return "jobright_domain";
    if (isLinkedInJobSurface(url)) return "linkedin_domain";
    if (!isTopFrame) return isSupportedRuntimeFrameUrl(url.href) ? "supported_frame_url" : null;
    if (isSupportedTopLevelApplicationUrl(url)) return "supported_top_url";
    if (!isConstrainedSiteButWrongPath(url, url.hostname) && hasSafeAtsQueryParam(url)) return "supported_query_param";
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

},{"~api/hub-env":"3rlFE","~core/native-supported-sites":"9OOvL","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"3rlFE":[function(require,module,exports) {
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
    "jobright-team-site.vercel.app"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"9OOvL":[function(require,module,exports) {
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
// @ts-nocheck
/**
 * Keep jr_id in the URL across SPA redirects.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keepJobIdInUrl", ()=>keepJobIdInUrl);
const JR_ID_PARAM = "jr_id";
const DEFAULT_DURATION_MS = 3000;
const DEFAULT_INTERVAL_MS = 100;
const DEFAULT_MAX_RESTORATIONS = 5;
function keepJobIdInUrl(jobId, options) {
    const durationMs = options.durationMs ?? DEFAULT_DURATION_MS;
    const intervalMs = options.intervalMs ?? DEFAULT_INTERVAL_MS;
    const maxRestorations = options.maxRestorations ?? DEFAULT_MAX_RESTORATIONS;
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}]},["dn0Rr"], "dn0Rr", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUI7UUFBRSxVQUFVO1lBQUM7U0FBaUM7SUFBQztBQUNsRTs7O0FDN1pBLGNBQWM7QUFDZDs7Q0FFQzs7QUFPRCxvREFBZ0I7QUFMaEIsTUFBTSxjQUFjO0FBQ3BCLE1BQU0sc0JBQXNCO0FBQzVCLE1BQU0sc0JBQXNCO0FBQzVCLE1BQU0sMkJBQTJCO0FBRTFCLFNBQVMsZUFBZSxLQUFLLEVBQUUsT0FBTztJQUMzQyxNQUFNLGFBQWEsUUFBUSxjQUFjO0lBQ3pDLE1BQU0sYUFBYSxRQUFRLGNBQWM7SUFDekMsTUFBTSxrQkFBa0IsUUFBUSxtQkFBbUI7SUFDbkQsTUFBTSxZQUFZLEtBQUs7SUFDdkIsSUFBSSxtQkFBbUI7SUFFdkIsTUFBTSxRQUFRLFlBQVk7UUFDeEIsSUFBSTtZQUNGLElBQUksS0FBSyxRQUFRLFlBQVksWUFBWTtnQkFDdkMsY0FBYztnQkFDZDtZQUNGO1lBQ0EsTUFBTSxNQUFNLElBQUksSUFBSSxPQUFPLFNBQVM7WUFDcEMsSUFDRSxJQUFJLFNBQVMsa0JBQWtCLFFBQVEsYUFBYSxpQkFDbkQsUUFBUSxtQkFBbUIsSUFBSSxhQUFhLFFBQVEsaUJBQ3JEO2dCQUNBLGNBQWM7Z0JBQ2Q7WUFDRjtZQUNBLElBQUksSUFBSSxhQUFhLElBQUksaUJBQWlCLE9BQU87WUFDakQsSUFBSSxvQkFBb0IsaUJBQWlCO2dCQUN2QyxjQUFjO2dCQUNkO1lBQ0Y7WUFDQSxJQUFJLGFBQWEsSUFBSSxhQUFhO1lBQ2xDLE9BQU8sUUFBUSxhQUFhLE9BQU8sUUFBUSxPQUFPLElBQUksSUFBSTtZQUMxRCxvQkFBb0I7WUFDcEIsUUFBUSxZQUFZO2dCQUFFLFVBQVUsSUFBSTtnQkFBVTtZQUFpQjtRQUNqRSxFQUFFLE9BQU07WUFDTixjQUFjO1FBQ2hCO0lBQ0YsR0FBRztJQUVILE9BQU8sSUFBTSxjQUFjO0FBQzdCIiwic291cmNlcyI6WyJzcmMvY29udGVudHMvYm9vdHN0cmFwLnRzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9tZXNzYWdpbmcvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwic3JjL2NvcmUvY2xvdWRmbGFyZS1jaGFsbGVuZ2UudHMiLCJzcmMvbGliL2NzLWV4Y2x1ZGUtbWF0Y2hlcy50cyIsInNyYy9jb250ZW50cy9zaGFyZWQvZWFybHktdXJsLW5vcm1hbGl6YXRpb24udHMiLCJzcmMvY29udGVudHMvc2hhcmVkL25hdGl2ZS1ydW50aW1lLWFjdGl2YXRpb24udHMiLCJzcmMvYXBpL2h1Yi1lbnYudHMiLCJzcmMvY29yZS9uYXRpdmUtc3VwcG9ydGVkLXNpdGVzLnRzIiwic3JjL2NvcmUvbWF0Y2gtcGF0dGVybnMudHMiLCJzcmMvY29yZS9zaXRlLXJlZ2lzdHJ5LnJhdy5qcyIsInNyYy9jb250ZW50cy9zaGFyZWQvc3RpY2t5LWpvYi1pZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEVhcmx5IGNvbnRlbnQtc2NyaXB0IGJvb3RzdHJhcCAodGVhbSBmb3JrKS5cbiAqIFBvcnRlZCBmcm9tIEpvYnJpZ2h0IGNvbnRlbnRzLmQ0MmU3ZmNmLmpzIOKAlCBhY3RpdmF0aW9uIGdhdGUgKyBoZWxwZXIgaW5qZWN0LlxuICovXG5cbmltcG9ydCB0eXBlIHsgUGxhc21vQ1NDb25maWcgfSBmcm9tIFwicGxhc21vXCJcbmltcG9ydCB7IHNlbmRUb0JhY2tncm91bmQgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7XG4gIHJlbW92ZUNsb3VkZmxhcmVDaGFsbGVuZ2VJbmplY3RlZEhvc3QsXG4gIHdhaXRGb3JDbG91ZGZsYXJlTWFuYWdlZENoYWxsZW5nZVBhZ2Vcbn0gZnJvbSBcIn5jb3JlL2Nsb3VkZmxhcmUtY2hhbGxlbmdlXCJcbmltcG9ydCB7IGlzTmV2ZXJBcHBseUhvc3QgfSBmcm9tIFwifmxpYi9jcy1leGNsdWRlLW1hdGNoZXNcIlxuaW1wb3J0IHsgbm9ybWFsaXplRWFybHlKb2JyaWdodFVybCB9IGZyb20gXCJ+Y29udGVudHMvc2hhcmVkL2Vhcmx5LXVybC1ub3JtYWxpemF0aW9uXCJcbmltcG9ydCB7XG4gIGdldFJ1bnRpbWVBY3RpdmF0aW9uUmVhc29uLFxuICBvYnNlcnZlUnVudGltZUFjdGl2YXRpb25TaWduYWxzLFxuICB0eXBlIFJ1bnRpbWVBY3RpdmF0aW9uUmVhc29uXG59IGZyb20gXCJ+Y29udGVudHMvc2hhcmVkL25hdGl2ZS1ydW50aW1lLWFjdGl2YXRpb25cIlxuaW1wb3J0IHsga2VlcEpvYklkSW5VcmwgfSBmcm9tIFwifmNvbnRlbnRzL3NoYXJlZC9zdGlja3ktam9iLWlkXCJcblxuLy8gUGxhc21vIHN0YXRpY2FsbHkgYW5hbHl6ZXMgdGhpcyBvYmplY3Qg4oCUIGtlZXAgZXhjbHVkZV9tYXRjaGVzIGFzIGEgbGl0ZXJhbC5cbmV4cG9ydCBjb25zdCBjb25maWc6IFBsYXNtb0NTQ29uZmlnID0ge1xuICBtYXRjaGVzOiBbXCI8YWxsX3VybHM+XCJdLFxuICBhbGxfZnJhbWVzOiB0cnVlLFxuICBydW5fYXQ6IFwiZG9jdW1lbnRfc3RhcnRcIixcbiAgZXhjbHVkZV9tYXRjaGVzOiBbXG4gICAgXCIqOi8vKi5jbG91ZGZsYXJlLmNvbS8qXCIsXG4gICAgXCJodHRwczovL2xpLnByb3RlY2h0cy5uZXQvKlwiLFxuICAgIFwiaHR0cHM6Ly9jcy5uczFwLm5ldC8qXCIsXG4gICAgXCJodHRwczovL21lcmNoYW50cG9vbDEubGlua2VkaW4uY29tLypcIixcbiAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tLypcIixcbiAgICBcImh0dHBzOi8vKi5mbHMuZG91YmxlY2xpY2submV0L2FjdGl2aXR5aSpcIixcbiAgICBcImh0dHBzOi8vbG5rZC5kZW1kZXgubmV0LypcIixcbiAgICBcImh0dHBzOi8vY3JjbGR1LmNvbS8qXCIsXG4gICAgXCJodHRwczovL2pvYnJpZ2h0LXRlYW0tc2l0ZS52ZXJjZWwuYXBwLypcIixcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzIxMC8qXCIsXG4gICAgXCJodHRwOi8vMTI3LjAuMC4xOjMyMTAvKlwiLFxuICAgIC8vIEFsbCBHb29nbGUgY29uc3VtZXIgLyBXb3Jrc3BhY2UgaG9zdHMgKFRyYW5zbGF0ZSwgRG9jcywgR21haWwsIOKApikuXG4gICAgLy8gQWN0aXZhdGUgY2FuIHN0aWxsIGRpcmVjdC1pbmplY3Qgb24gcmFyZSBHb29nbGUgY2FyZWVycyBwYWdlcy5cbiAgICBcIio6Ly9nb29nbGUuY29tLypcIixcbiAgICBcIio6Ly93d3cuZ29vZ2xlLmNvbS8qXCIsXG4gICAgXCIqOi8vKi5nb29nbGUuY29tLypcIixcbiAgICBcIio6Ly8qLnlvdXR1YmUuY29tLypcIixcbiAgICBcIio6Ly95b3V0dS5iZS8qXCIsXG4gICAgXCIqOi8vKi5vZmZpY2UuY29tLypcIixcbiAgICBcIio6Ly8qLm9mZmljZTM2NS5jb20vKlwiLFxuICAgIFwiKjovLyouc2hhcmVwb2ludC5jb20vKlwiLFxuICAgIFwiKjovL291dGxvb2subGl2ZS5jb20vKlwiLFxuICAgIFwiKjovL291dGxvb2sub2ZmaWNlLmNvbS8qXCIsXG4gICAgXCIqOi8vb25lZHJpdmUubGl2ZS5jb20vKlwiLFxuICAgIFwiKjovLyoudGVhbXMubWljcm9zb2Z0LmNvbS8qXCIsXG4gICAgXCIqOi8vKi5mYWNlYm9vay5jb20vKlwiLFxuICAgIFwiKjovLyouaW5zdGFncmFtLmNvbS8qXCIsXG4gICAgXCIqOi8vKi50d2l0dGVyLmNvbS8qXCIsXG4gICAgXCIqOi8vKi54LmNvbS8qXCIsXG4gICAgXCIqOi8vKi50aWt0b2suY29tLypcIixcbiAgICBcIio6Ly8qLnJlZGRpdC5jb20vKlwiLFxuICAgIFwiKjovLyoubmV0ZmxpeC5jb20vKlwiLFxuICAgIFwiKjovLyoudHdpdGNoLnR2LypcIixcbiAgICBcIio6Ly8qLmRpc2NvcmQuY29tLypcIixcbiAgICBcIio6Ly8qLnNsYWNrLmNvbS8qXCIsXG4gICAgXCIqOi8vKi53aGF0c2FwcC5jb20vKlwiLFxuICAgIFwiKjovL3dlYi53aGF0c2FwcC5jb20vKlwiLFxuICAgIFwiKjovLyouc3BvdGlmeS5jb20vKlwiLFxuICAgIFwiKjovLyouZ2l0aHViLmNvbS8qXCIsXG4gICAgXCIqOi8vZ2lzdC5naXRodWIuY29tLypcIixcbiAgICBcIio6Ly8qLnN0YWNrb3ZlcmZsb3cuY29tLypcIixcbiAgICBcIio6Ly8qLnN0YWNrZXhjaGFuZ2UuY29tLypcIixcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8qXCIsXG4gICAgXCJodHRwOi8vbG9jYWxob3N0OjUxNzMvKlwiLFxuICAgIFwiaHR0cDovLzEyNy4wLjAuMTozMDAwLypcIixcbiAgICBcImh0dHA6Ly8xMjcuMC4wLjE6NTE3My8qXCJcbiAgXVxufVxuXG5leHBvcnQgY29uc3QgSE9TVF9JRCA9IFwiam9icmlnaHQtZm9yay1oZWxwZXItcGx1Z2luXCJcbmNvbnN0IEJPT1RTVFJBUF9GTEFHID0gXCJfX2pvYnJpZ2h0Rm9ya0hlbHBlckJvb3RzdHJhcEFjdGl2ZVwiXG5jb25zdCBKUl9JRF9QQVJBTSA9IFwianJfaWRcIlxuY29uc3QgSEVMUEVSX0JVTkRMRSA9IFwiYXNzZXRzL2hlbHBlci1hcHAuanNcIlxuXG5jb25zdCBpbml0aWFsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuZXhwb3J0IGxldCBqb2JJZDogc3RyaW5nIHwgbnVsbCA9IGluaXRpYWxQYXJhbXMuZ2V0KEpSX0lEX1BBUkFNKVxuZXhwb3J0IGNvbnN0IGFnZW50VGFpbG9ySWQgPSBpbml0aWFsUGFyYW1zLmdldChcImFfdF9pZFwiKVxuZXhwb3J0IGNvbnN0IGFnZW50UmVzdW1lSWQgPSBpbml0aWFsUGFyYW1zLmdldChcImFfcl9pZFwiKVxuZXhwb3J0IGNvbnN0IGFnZW50T3JpZ2luYWxSZXN1bWUgPVxuICBpbml0aWFsUGFyYW1zLmdldChcInVzZU9yaWdpbmFsUmVzdW1lXCIpID09PSBcInRydWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudEpvYklkKG5leHQ6IHN0cmluZyB8IG51bGwpIHtcbiAgam9iSWQgPSBuZXh0IHx8IG51bGxcbn1cblxubGV0IGhlbHBlclN0YXJ0ZWQgPSBmYWxzZVxubGV0IHN0b3BPYnNlcnZlcjogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGxcblxuZnVuY3Rpb24gd2FpdEZvckRvY3VtZW50UmVhZHkoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIikgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHJlc29sdmUoKSwgeyBvbmNlOiB0cnVlIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRSdW50aW1lQWN0aXZhdGlvblJlYXNvbigpOiBSdW50aW1lQWN0aXZhdGlvblJlYXNvbiB8IG51bGwge1xuICBjb25zdCBpZnJhbWVVcmxzID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaWZyYW1lW3NyY11cIiksXG4gICAgKGVsKSA9PiAoZWwgYXMgSFRNTElGcmFtZUVsZW1lbnQpLnNyY1xuICApXG4gIGNvbnN0IHBhZ2VTb3VyY2VVcmxzID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2NyaXB0W3NyY10sIGxpbmtbaHJlZl1cIiksXG4gICAgKGVsKSA9PlxuICAgICAgZWwgaW5zdGFuY2VvZiBIVE1MU2NyaXB0RWxlbWVudFxuICAgICAgICA/IGVsLnNyY1xuICAgICAgICA6IChlbCBhcyBIVE1MTGlua0VsZW1lbnQpLmhyZWZcbiAgKVxuICByZXR1cm4gZ2V0UnVudGltZUFjdGl2YXRpb25SZWFzb24oe1xuICAgIGhyZWY6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgIGlzVG9wRnJhbWU6IHdpbmRvdy50b3AgPT09IHdpbmRvdy5zZWxmLFxuICAgIGlmcmFtZVVybHMsXG4gICAgcGFnZVNvdXJjZVVybHNcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5qZWN0QW5kQm9vdHN0cmFwSGVscGVyKHJlYXNvbjogUnVudGltZUFjdGl2YXRpb25SZWFzb24pIHtcbiAgaWYgKCFjaHJvbWU/LnJ1bnRpbWU/LmlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXh0ZW5zaW9uIGNvbnRleHQgaW52YWxpZGF0ZWQuXCIpXG4gIH1cblxuICBjb25zdCBhbHJlYWR5U3RhcnRlZCA9IGhlbHBlclN0YXJ0ZWRcbiAgaWYgKCFhbHJlYWR5U3RhcnRlZCkge1xuICAgIGhlbHBlclN0YXJ0ZWQgPSB0cnVlXG4gICAgc3RvcE9ic2VydmVyPy4oKVxuICAgIHN0b3BPYnNlcnZlciA9IG51bGxcblxuICAgIGNvbnNvbGUuaW5mbyhcIltqb2JyaWdodC1mb3JrXSBoZWxwZXIgYWN0aXZhdGlvbiBtYXRjaGVkXCIsIHtcbiAgICAgIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSxcbiAgICAgIHBhdGhuYW1lOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBmcmFtZTogd2luZG93LnRvcCA9PT0gd2luZG93LnNlbGYgPyBcInRvcFwiIDogXCJjaGlsZFwiLFxuICAgICAgcmVhc29uXG4gICAgfSlcblxuICAgIGF3YWl0IHdhaXRGb3JEb2N1bWVudFJlYWR5KClcblxuICAgIGlmIChhd2FpdCB3YWl0Rm9yQ2xvdWRmbGFyZU1hbmFnZWRDaGFsbGVuZ2VQYWdlKCkpIHtcbiAgICAgIHJlbW92ZUNsb3VkZmxhcmVDaGFsbGVuZ2VJbmplY3RlZEhvc3QoSE9TVF9JRClcbiAgICAgIGhlbHBlclN0YXJ0ZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFjaHJvbWU/LnJ1bnRpbWU/LmlkKSB7XG4gICAgICBoZWxwZXJTdGFydGVkID0gZmFsc2VcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4dGVuc2lvbiBjb250ZXh0IGludmFsaWRhdGVkLlwiKVxuICAgIH1cblxuICAgIGNvbnN0IGJ1bmRsZVVybCA9IGNocm9tZS5ydW50aW1lLmdldFVSTChIRUxQRVJfQlVORExFKVxuICAgIGNvbnN0IGluamVjdGVkID0gYXdhaXQgc2VuZFRvQmFja2dyb3VuZCh7XG4gICAgICBuYW1lOiBcImluamVjdEhlbHBlckFwcEJ1bmRsZVwiLFxuICAgICAgYm9keTogeyBidW5kbGVVcmwgfVxuICAgIH0pXG5cbiAgICBpZiAoIWluamVjdGVkPy5zdWNjZXNzKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbam9icmlnaHQtZm9ya10gaGVscGVyIGluamVjdCBmYWlsZWRcIiwgaW5qZWN0ZWQpXG4gICAgICBoZWxwZXJTdGFydGVkID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJ1bnRpbWUgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLmJvb3RzdHJhcEpvYnJpZ2h0SGVscGVyUnVudGltZVxuICAgIGlmICh0eXBlb2YgcnVudGltZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBhd2FpdCBydW50aW1lKClcbiAgICB9XG5cbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudChcImpvYnJpZ2h0LWZvcms6aGVscGVyLWluamVjdGVkXCIsIHsgZGV0YWlsOiB7IHJlYXNvbiB9IH0pXG4gICAgKVxuICB9XG5cbiAgLy8gUG9wdXAgLyB0b29sYmFyIEFjdGl2YXRlIG11c3Qgb3BlbiB0aGUgZmxvYXRpbmcgVUkgZXZlbiBpZiB0aGUgYnVuZGxlXG4gIC8vIGFscmVhZHkgYm9vdGVkIGluIHRoZSBiYWNrZ3JvdW5kIChvdGhlcndpc2UgQWN0aXZhdGUgYXBwZWFycyB0byBuby1vcCkuXG4gIGlmIChyZWFzb24gPT09IFwiZXh0ZW5zaW9uX2ljb25cIikge1xuICAgIGNvbnN0IG9wZW4gPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLm9wZW5Kb2JyaWdodEhlbHBlckZyb21FeHRlbnNpb25JY29uXG4gICAgaWYgKHR5cGVvZiBvcGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG9wZW4oKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW2pvYnJpZ2h0LWZvcmtdIG9wZW4gaGVscGVyIGZyb20gaWNvbiBmYWlsZWRcIiwgZXJyb3IpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJldGFpbkluaXRpYWxKcklkSWZQcmVzZW50KCkge1xuICBpZiAod2luZG93LnRvcCAhPT0gd2luZG93LnNlbGYpIHJldHVyblxuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgY29uc3QgaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChKUl9JRF9QQVJBTSk/LnRyaW0oKVxuICAgIGlmICghaWQpIHJldHVyblxuICAgIGNvbnN0IHN0b3AgPSBrZWVwSm9iSWRJblVybChpZCwge1xuICAgICAgb3JpZ2luYWxIb3N0OiB1cmwuaG9zdG5hbWUsXG4gICAgICBkdXJhdGlvbk1zOiAxMF8wMDAsXG4gICAgICBpbnRlcnZhbE1zOiA1MCxcbiAgICAgIG1heFJlc3RvcmF0aW9uczogNVxuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLCBzdG9wLCB7IG9uY2U6IHRydWUgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLndhcm4oXCJbam9icmlnaHQtZm9ya10ganJfaWQgcmV0ZW50aW9uIGZhaWxlZFwiLCBlcnJvcilcbiAgfVxufVxuXG5mdW5jdGlvbiB3YXRjaEZvckxhdGVyQWN0aXZhdGlvbigpIHtcbiAgaWYgKHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmKSByZXR1cm5cbiAgc3RvcE9ic2VydmVyID0gb2JzZXJ2ZVJ1bnRpbWVBY3RpdmF0aW9uU2lnbmFscygocmVhc29uKSA9PiB7XG4gICAgdm9pZCBpbmplY3RBbmRCb290c3RyYXBIZWxwZXIocmVhc29uKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUud2FybihcIltqb2JyaWdodC1mb3JrXSBkZWxheWVkIGFjdGl2YXRpb24gZmFpbGVkXCIsIGVycm9yKVxuICAgIH0pXG4gIH0pXG5cbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2U/Lm1lc3NhZ2UgIT09IFwidXJsVXBkYXRlZFwiKSByZXR1cm5cbiAgICBjb25zdCByZWFzb24gPSBnZXRDdXJyZW50UnVudGltZUFjdGl2YXRpb25SZWFzb24oKVxuICAgIGlmIChyZWFzb24pIHZvaWQgaW5qZWN0QW5kQm9vdHN0cmFwSGVscGVyKHJlYXNvbilcbiAgfSlcbn1cblxuOyhhc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGlmICgoZ2xvYmFsVGhpcyBhcyBhbnkpW0JPT1RTVFJBUF9GTEFHXSkgcmV0dXJuXG4gIDsoZ2xvYmFsVGhpcyBhcyBhbnkpW0JPT1RTVFJBUF9GTEFHXSA9IHRydWVcblxuICAvLyBDb25zdW1lciAvIG5vbi1BVFMgaG9zdHM6IG5ldmVyIHdhdGNoIG9yIGluamVjdCAoQWN0aXZhdGUgY2FuIHN0aWxsXG4gIC8vIGRpcmVjdC1pbmplY3QgdmlhIHRoZSBwb3B1cCB3aGVuIHRoZSB1c2VyIGV4cGxpY2l0bHkgcmVxdWVzdHMgaXQpLlxuICB0cnkge1xuICAgIGlmIChpc05ldmVyQXBwbHlIb3N0KHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSkpIHJldHVyblxuICB9IGNhdGNoIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh3aW5kb3cudG9wID09PSB3aW5kb3cuc2VsZikge1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgX3NlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAobWVzc2FnZT8ubWVzc2FnZSAhPT0gXCJpY29uQ2xpY2tlZFwiKSByZXR1cm5cbiAgICAgIC8vIFN0YWxlIENTIGFmdGVyIGV4dGVuc2lvbiByZWxvYWQ6IHJlZnVzZSBzbyBiYWNrZ3JvdW5kIGNhbiBkaXJlY3QtaW5qZWN0LlxuICAgICAgaWYgKCFjaHJvbWU/LnJ1bnRpbWU/LmlkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHsgb2s6IGZhbHNlLCByZWFzb246IFwiY29udGV4dF9pbnZhbGlkYXRlZFwiIH0pXG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8qIGlnbm9yZSAqL1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICB2b2lkIGluamVjdEFuZEJvb3RzdHJhcEhlbHBlcihcImV4dGVuc2lvbl9pY29uXCIpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgb2s6IHRydWUgfSlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8qIGlnbm9yZSAqL1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1zZyA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKVxuICAgICAgICAgIGlmICgvZXh0ZW5zaW9uIGNvbnRleHQgaW52YWxpZGF0ZWQvaS50ZXN0KG1zZykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJbam9icmlnaHQtZm9ya10gZXh0ZW5zaW9uIHdhcyByZWxvYWRlZCDigJQgcmVmcmVzaCB0aGlzIHRhYiwgdGhlbiBBY3RpdmF0ZSBhZ2FpblwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBvazogZmFsc2UsIHJlYXNvbjogXCJjb250ZXh0X2ludmFsaWRhdGVkXCIgfSlcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAvKiBpZ25vcmUgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbam9icmlnaHQtZm9ya10gYWN0aXZhdGUgZmFpbGVkXCIsIGVycm9yKVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICBvazogZmFsc2UsXG4gICAgICAgICAgICAgIHJlYXNvbjogbXNnIHx8IFwiYWN0aXZhdGVfZmFpbGVkXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvKiBpZ25vcmUgKi9cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBpZiAobm9ybWFsaXplRWFybHlKb2JyaWdodFVybCgpKSByZXR1cm5cblxuICByZXRhaW5Jbml0aWFsSnJJZElmUHJlc2VudCgpXG4gIGF3YWl0IHdhaXRGb3JEb2N1bWVudFJlYWR5KClcblxuICBjb25zdCByZWFzb24gPSBnZXRDdXJyZW50UnVudGltZUFjdGl2YXRpb25SZWFzb24oKVxuICBpZiAoIXJlYXNvbikge1xuICAgIHdhdGNoRm9yTGF0ZXJBY3RpdmF0aW9uKClcbiAgICByZXR1cm5cbiAgfVxuICBhd2FpdCBpbmplY3RBbmRCb290c3RyYXBIZWxwZXIocmVhc29uKVxufSkoKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgY29uc29sZS53YXJuKFwiW2pvYnJpZ2h0LWZvcmtdIGJvb3RzdHJhcCBmYWlsZWRcIiwgZXJyb3IpXG59KVxuIiwiaW1wb3J0e25hbm9pZCBhcyBifWZyb21cIm5hbm9pZFwiO3ZhciBsPWdsb2JhbFRoaXMuYnJvd3Nlcj8udGFic3x8Z2xvYmFsVGhpcy5jaHJvbWU/LnRhYnMsZD0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWU7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiRXh0ZW5zaW9uIHJ1bnRpbWUgaXMgbm90IGF2YWlsYWJsZVwiKTtyZXR1cm4gZX0saT0oKT0+e2lmKCFsKXRocm93IG5ldyBFcnJvcihcIkV4dGVuc2lvbiB0YWJzIEFQSSBpcyBub3QgYXZhaWxhYmxlXCIpO3JldHVybiBsfSxtPWFzeW5jKCk9PntsZXQgZT1pKCksW2FdPWF3YWl0IGUucXVlcnkoe2FjdGl2ZTohMCxjdXJyZW50V2luZG93OiEwfSk7cmV0dXJuIGF9LGc9KGUsYSk9PiFhLl9faW50ZXJuYWwmJmUuc291cmNlPT09Z2xvYmFsVGhpcy53aW5kb3cmJmUuZGF0YS5uYW1lPT09YS5uYW1lJiYoYS5yZWxheUlkPT09dm9pZCAwfHxlLmRhdGEucmVsYXlJZD09PWEucmVsYXlJZCk7dmFyIGM9KGUsYSxuPWdsb2JhbFRoaXMud2luZG93KT0+e2xldCByPWFzeW5jIHM9PntpZihnKHMsZSkmJiFzLmRhdGEucmVsYXllZCl7bGV0IG89e25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGJvZHk6cy5kYXRhLmJvZHl9LHQ9YXdhaXQgYT8uKG8pO24ucG9zdE1lc3NhZ2Uoe25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGluc3RhbmNlSWQ6cy5kYXRhLmluc3RhbmNlSWQsYm9keTp0LHJlbGF5ZWQ6ITB9LHt0YXJnZXRPcmlnaW46ZS50YXJnZXRPcmlnaW58fFwiL1wifSl9fTtyZXR1cm4gbi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHIpLCgpPT5uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIscil9LHk9KGUsYT1nbG9iYWxUaGlzLndpbmRvdyk9Pm5ldyBQcm9taXNlKChuLHIpPT57bGV0IHM9YigpLG89bmV3IEFib3J0Q29udHJvbGxlcjthLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdD0+e2codCxlKSYmdC5kYXRhLnJlbGF5ZWQmJnQuZGF0YS5pbnN0YW5jZUlkPT09cyYmKG4odC5kYXRhLmJvZHkpLG8uYWJvcnQoKSl9LHtzaWduYWw6by5zaWduYWx9KSxhLnBvc3RNZXNzYWdlKHsuLi5lLGluc3RhbmNlSWQ6c30se3RhcmdldE9yaWdpbjplLnRhcmdldE9yaWdpbnx8XCIvXCJ9KX0pO3ZhciBwPWFzeW5jIGU9PmQoKS5zZW5kTWVzc2FnZShlLmV4dGVuc2lvbklkPz9udWxsLGUpLHg9YXN5bmMgZT0+e2xldCBhPXR5cGVvZiBlLnRhYklkPT1cIm51bWJlclwiP2UudGFiSWQ6KGF3YWl0IG0oKSk/LmlkO2lmKCFhKXRocm93IG5ldyBFcnJvcihcIk5vIGFjdGl2ZSB0YWIgZm91bmQgdG8gc2VuZCBtZXNzYWdlIHRvLlwiKTtyZXR1cm4gaSgpLnNlbmRNZXNzYWdlKGEsZSl9LGg9eCxNPWU9PmMoZSxwKSxFPU0sdT15LFM9dTtleHBvcnR7RSBhcyByZWxheSxNIGFzIHJlbGF5TWVzc2FnZSxoIGFzIHNlbmRUb0FjdGl2ZUNvbnRlbnRTY3JpcHQscCBhcyBzZW5kVG9CYWNrZ3JvdW5kLHUgYXMgc2VuZFRvQmFja2dyb3VuZFZpYVJlbGF5LHggYXMgc2VuZFRvQ29udGVudFNjcmlwdCxTIGFzIHNlbmRWaWFSZWxheX07XG4iLCIvKiBAdHMtc2VsZi10eXBlcz1cIi4vaW5kZXguZC50c1wiICovXG5pbXBvcnQgeyB1cmxBbHBoYWJldCBhcyBzY29wZWRVcmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuZXhwb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCBsZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5leHBvcnQgbGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IE1hdGgubG9nMihhbHBoYWJldC5sZW5ndGggLSAxKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXAgfCAwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA+PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplIHwgMCwgcmFuZG9tKVxuZXhwb3J0IGxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PiB7XG4gIGxldCBpZCA9ICcnXG4gIGxldCBieXRlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoKHNpemUgfD0gMCkpKVxuICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgaWQgKz0gc2NvcGVkVXJsQWxwaGFiZXRbYnl0ZXNbc2l6ZV0gJiA2M11cbiAgfVxuICByZXR1cm4gaWRcbn1cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsIi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIFJlYWRhYmxlIFR5cGVTY3JpcHQgY29udmVydGVkIGZyb20gUGFyY2VsIGR1bXAgKGhlbHBlci1ydW50aW1lL3NyYy9jb3JlL2Nsb3VkZmxhcmUtY2hhbGxlbmdlLmpzKS5cbiAqIEJ1bmRsZWQgZGlyZWN0bHkgYnkgc2NyaXB0cy9idW5kbGUtZW5naW5lLWhlbHBlci5tanMuXG4gKi9cbmNvbnN0IE1BTkFHRURfUlVOVElNRV9SRSA9XG4gIC8oPzpcXC9jZG4tY2dpXFwvY2hhbGxlbmdlLXBsYXRmb3JtXFxifHdpbmRvd1xcLl9jZl9jaGxfb3B0fF9fY2ZfY2hsX3xjZl9jaGxfb3B0fGNmX2NobF8pL2lcbmNvbnN0IENIQUxMRU5HRV9USVRMRV9SRSA9XG4gIC8oPzpqdXN0IGEgbW9tZW50fHNlY3VyaXR5IHZlcmlmaWNhdGlvbnxvbmUgbW9yZSBzdGVwKS9pXG5jb25zdCBDSEFMTEVOR0VfQk9EWV9SRVMgPSBbXG4gIC9wZXJmb3JtaW5nIHNlY3VyaXR5IHZlcmlmaWNhdGlvbi9pLFxuICAvY2hlY2tpbmcgKD86aWZ8dGhhdCkgKD86dGhlICk/KD86c2l0ZSApP2Nvbm5lY3Rpb24gaXMgc2VjdXJlL2ksXG4gIC90aGlzIHdlYnNpdGUgdXNlcyBhIHNlY3VyaXR5IHNlcnZpY2UgdG8gcHJvdGVjdCBhZ2FpbnN0IG1hbGljaW91cyBib3RzL2ksXG4gIC90aGlzIHBhZ2UgaXMgZGlzcGxheWVkIHdoaWxlIHRoZSB3ZWJzaXRlIHZlcmlmaWVzIHlvdSBhcmUgbm90IGEgYm90L2ksXG5dXG5jb25zdCBSQVlfSURfUkUgPSAvXFxiKD86Y2xvdWRmbGFyZVxccyspP3JheSBpZFxccyo6P1xccypbYS1mMC05XXsxMix9XFxiL2lcbmNvbnN0IENGX0ZPT1RFUl9SRSA9IC9wZXJmb3JtYW5jZSBhbmQgc2VjdXJpdHkgYnkgY2xvdWRmbGFyZS9pXG5jb25zdCBDSEFMTEVOR0VfTUFSS0VSX1NFTEVDVE9SID1cbiAgJyNjaGFsbGVuZ2Utc3RhZ2UsI2NmLWNoYWxsZW5nZS1ydW5uaW5nLCNjZi1wbGVhc2Utd2FpdCwuY2YtYnJvd3Nlci12ZXJpZmljYXRpb24sLmNmLWNoYWxsZW5nZSxmb3JtW2FjdGlvbio9XCIvY2RuLWNnaS9jaGFsbGVuZ2UtcGxhdGZvcm0vXCJdJ1xuY29uc3QgQ0hBTExFTkdFX1NDUklQVF9TRUxFQ1RPUiA9ICdzY3JpcHRbc3JjKj1cIi9jZG4tY2dpL2NoYWxsZW5nZS1wbGF0Zm9ybS9cIl0nXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVdoaXRlc3BhY2UodGV4dCkge1xuICByZXR1cm4gKHRleHQgfHwgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpXG59XG5cbmZ1bmN0aW9uIGlzSm9icmlnaHRVcmwodXJsKSB7XG4gIGlmICghdXJsKSByZXR1cm4gZmFsc2VcbiAgdHJ5IHtcbiAgICBsZXQgeyBob3N0bmFtZSB9ID0gbmV3IFVSTCh1cmwpXG4gICAgcmV0dXJuIFwiam9icmlnaHQuYWlcIiA9PT0gaG9zdG5hbWUgfHwgaG9zdG5hbWUuZW5kc1dpdGgoXCIuam9icmlnaHQuYWlcIilcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzQ2hhbGxlbmdlQm9keUNvcHkoYm9keVRleHQpIHtcbiAgcmV0dXJuIChcbiAgICAhIUNIQUxMRU5HRV9CT0RZX1JFUy5zb21lKChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QoYm9keVRleHQpKSB8fFxuICAgICgvdmVyaWZ5IHlvdSBhcmUgaHVtYW4vaS50ZXN0KGJvZHlUZXh0KSAmJlxuICAgICAgL2Nsb3VkZmxhcmUvaS50ZXN0KGJvZHlUZXh0KSAmJlxuICAgICAgLyg/Om5vdCBhIGJvdHxtYWxpY2lvdXMgYm90c3xzZWN1cml0eSBzZXJ2aWNlKS9pLnRlc3QoYm9keVRleHQpKVxuICApXG59XG5cbmZ1bmN0aW9uIGhhc0Nsb3VkZmxhcmVGb290ZXJTaWduYWxzKGJvZHlUZXh0KSB7XG4gIHJldHVybiBSQVlfSURfUkUudGVzdChib2R5VGV4dCkgJiYgQ0ZfRk9PVEVSX1JFLnRlc3QoYm9keVRleHQpXG59XG5cbmZ1bmN0aW9uIGlzU3BhcnNlQ2hhbGxlbmdlUGFnZSh7XG4gIGJvZHlUZXh0LFxuICBpbnRlcmFjdGl2ZUVsZW1lbnRDb3VudCxcbiAgYWxsb3dGb290ZXJMaW5rcyA9IGZhbHNlLFxufSkge1xuICBsZXQgYm9keUxlbmd0aCA9IGJvZHlUZXh0Lmxlbmd0aFxuICBsZXQgaW50ZXJhY3RpdmVDb3VudCA9IGludGVyYWN0aXZlRWxlbWVudENvdW50ID8/IDBcbiAgcmV0dXJuIGFsbG93Rm9vdGVyTGlua3NcbiAgICA/IGJvZHlMZW5ndGggPD0gMTUwMCAmJiBpbnRlcmFjdGl2ZUNvdW50IDw9IDIwXG4gICAgOiBib2R5TGVuZ3RoIDw9IDI1MDAgJiYgaW50ZXJhY3RpdmVDb3VudCA8PSA0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Nsb3VkZmxhcmVNYW5hZ2VkQ2hhbGxlbmdlUGFnZShwcm9iZSkge1xuICBsZXQgdGl0bGUgPSBub3JtYWxpemVXaGl0ZXNwYWNlKHByb2JlLnRpdGxlKVxuICBsZXQgYm9keVRleHQgPSBub3JtYWxpemVXaGl0ZXNwYWNlKHByb2JlLmJvZHlUZXh0KVxuICBsZXQgaHRtbCA9IHByb2JlLmh0bWwgfHwgXCJcIlxuICBsZXQgbWFuYWdlZFJ1bnRpbWVGb3VuZCA9XG4gICAgISFwcm9iZS5tYW5hZ2VkUnVudGltZUZvdW5kIHx8IE1BTkFHRURfUlVOVElNRV9SRS50ZXN0KGh0bWwpXG4gIGxldCBmb290ZXJTaWduYWxzID0gaGFzQ2xvdWRmbGFyZUZvb3RlclNpZ25hbHMoYm9keVRleHQpXG4gIGxldCBoYXNQbGF0Zm9ybVNpZ25hbHMgPVxuICAgIG1hbmFnZWRSdW50aW1lRm91bmQgfHwgISFwcm9iZS5jaGFsbGVuZ2VNYXJrZXJGb3VuZCB8fCBmb290ZXJTaWduYWxzXG4gIGxldCB0aXRsZUxvb2tzTGlrZUNoYWxsZW5nZSA9IENIQUxMRU5HRV9USVRMRV9SRS50ZXN0KHRpdGxlKVxuICBsZXQgYm9keUxvb2tzTGlrZUNoYWxsZW5nZSA9XG4gICAgaGFzQ2hhbGxlbmdlQm9keUNvcHkoYm9keVRleHQpIHx8IHRpdGxlTG9va3NMaWtlQ2hhbGxlbmdlIHx8IGZvb3RlclNpZ25hbHNcbiAgcmV0dXJuIChcbiAgICBoYXNQbGF0Zm9ybVNpZ25hbHMgJiZcbiAgICBib2R5TG9va3NMaWtlQ2hhbGxlbmdlICYmXG4gICAgaXNTcGFyc2VDaGFsbGVuZ2VQYWdlKHtcbiAgICAgIGJvZHlUZXh0LFxuICAgICAgaW50ZXJhY3RpdmVFbGVtZW50Q291bnQ6IHByb2JlLmludGVyYWN0aXZlRWxlbWVudENvdW50LFxuICAgICAgYWxsb3dGb290ZXJMaW5rczogZm9vdGVyU2lnbmFscyB8fCAobWFuYWdlZFJ1bnRpbWVGb3VuZCAmJiB0aXRsZUxvb2tzTGlrZUNoYWxsZW5nZSksXG4gICAgfSlcbiAgKVxufVxuXG5mdW5jdGlvbiBsb29rc0xpa2VQb3NzaWJsZUNoYWxsZW5nZVBhZ2UocHJvYmUpIHtcbiAgbGV0IHRpdGxlID0gbm9ybWFsaXplV2hpdGVzcGFjZShwcm9iZS50aXRsZSlcbiAgbGV0IGJvZHlUZXh0ID0gbm9ybWFsaXplV2hpdGVzcGFjZShwcm9iZS5ib2R5VGV4dClcbiAgbGV0IGh0bWwgPSBwcm9iZS5odG1sIHx8IFwiXCJcbiAgbGV0IG1hbmFnZWRSdW50aW1lRm91bmQgPVxuICAgICEhcHJvYmUubWFuYWdlZFJ1bnRpbWVGb3VuZCB8fCBNQU5BR0VEX1JVTlRJTUVfUkUudGVzdChodG1sKVxuICBsZXQgZm9vdGVyU2lnbmFscyA9IGhhc0Nsb3VkZmxhcmVGb290ZXJTaWduYWxzKGJvZHlUZXh0KVxuICBsZXQgaGFzUGxhdGZvcm1TaWduYWxzID1cbiAgICBtYW5hZ2VkUnVudGltZUZvdW5kIHx8ICEhcHJvYmUuY2hhbGxlbmdlTWFya2VyRm91bmQgfHwgZm9vdGVyU2lnbmFsc1xuICBsZXQgdGl0bGVMb29rc0xpa2VDaGFsbGVuZ2UgPSBDSEFMTEVOR0VfVElUTEVfUkUudGVzdCh0aXRsZSlcbiAgbGV0IGJvZHlMb29rc0xpa2VDaGFsbGVuZ2UgPVxuICAgIGhhc0NoYWxsZW5nZUJvZHlDb3B5KGJvZHlUZXh0KSB8fCB0aXRsZUxvb2tzTGlrZUNoYWxsZW5nZSB8fCBmb290ZXJTaWduYWxzXG4gIHJldHVybiAoXG4gICAgISFoYXNQbGF0Zm9ybVNpZ25hbHMgfHxcbiAgICAhIXRpdGxlTG9va3NMaWtlQ2hhbGxlbmdlIHx8XG4gICAgISFib2R5TG9va3NMaWtlQ2hhbGxlbmdlIHx8XG4gICAgaXNTcGFyc2VDaGFsbGVuZ2VQYWdlKHtcbiAgICAgIGJvZHlUZXh0LFxuICAgICAgaW50ZXJhY3RpdmVFbGVtZW50Q291bnQ6IHByb2JlLmludGVyYWN0aXZlRWxlbWVudENvdW50LFxuICAgIH0pXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RDbG91ZGZsYXJlQ2hhbGxlbmdlUGFnZVByb2JlKGRvYykge1xuICBsZXQgdGl0bGUgPSBkb2MudGl0bGVcbiAgbGV0IGNoYWxsZW5nZU1hcmtlckZvdW5kID0gISFkb2MucXVlcnlTZWxlY3RvcihDSEFMTEVOR0VfTUFSS0VSX1NFTEVDVE9SKVxuICBsZXQgZGVmYXVsdFZpZXcgPSBkb2MuZGVmYXVsdFZpZXdcbiAgbGV0IG1hbmFnZWRSdW50aW1lRm91bmQgPSAhIShcbiAgICBkb2MucXVlcnlTZWxlY3RvcihDSEFMTEVOR0VfU0NSSVBUX1NFTEVDVE9SKSB8fCBkZWZhdWx0Vmlldz8uX2NmX2NobF9vcHRcbiAgKVxuICBsZXQgaW50ZXJhY3RpdmVFbGVtZW50Q291bnQgPSBkb2MucXVlcnlTZWxlY3RvckFsbChcbiAgICBcImJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGFbaHJlZl0sIFtyb2xlPSdidXR0b24nXVwiLFxuICApLmxlbmd0aFxuICBsZXQgc2hvdWxkUmVhZEJvZHkgPVxuICAgIG1hbmFnZWRSdW50aW1lRm91bmQgfHxcbiAgICBjaGFsbGVuZ2VNYXJrZXJGb3VuZCB8fFxuICAgIENIQUxMRU5HRV9USVRMRV9SRS50ZXN0KG5vcm1hbGl6ZVdoaXRlc3BhY2UodGl0bGUpKSB8fFxuICAgIGludGVyYWN0aXZlRWxlbWVudENvdW50IDw9IDRcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBib2R5VGV4dDogc2hvdWxkUmVhZEJvZHlcbiAgICAgID8gKGRvYy5ib2R5Py50ZXh0Q29udGVudCB8fCBkb2MuYm9keT8uaW5uZXJUZXh0IHx8IFwiXCIpLnRyaW0oKVxuICAgICAgOiBcIlwiLFxuICAgIG1hbmFnZWRSdW50aW1lRm91bmQsXG4gICAgY2hhbGxlbmdlTWFya2VyRm91bmQsXG4gICAgaW50ZXJhY3RpdmVFbGVtZW50Q291bnQsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ3VycmVudERvY3VtZW50Q2xvdWRmbGFyZU1hbmFnZWRDaGFsbGVuZ2VQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50ICYmXG4gICAgaXNDbG91ZGZsYXJlTWFuYWdlZENoYWxsZW5nZVBhZ2UoXG4gICAgICBjb2xsZWN0Q2xvdWRmbGFyZUNoYWxsZW5nZVBhZ2VQcm9iZShkb2N1bWVudCksXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWl0Rm9yQ2xvdWRmbGFyZU1hbmFnZWRDaGFsbGVuZ2VQYWdlKHtcbiAgdGltZW91dE1zID0gMTUwMCxcbiAgaW50ZXJ2YWxNcyA9IDEwMCxcbiAgY3VycmVudFVybCA9XG4gICAgXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2Ygd2luZG93ID8gdW5kZWZpbmVkIDogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gIGNvbGxlY3RQcm9iZSxcbn0gPSB7fSkge1xuICBpZiAoaXNKb2JyaWdodFVybChjdXJyZW50VXJsKSkgcmV0dXJuIGZhbHNlXG4gIGxldCBwcm9iZUNvbGxlY3RvciA9XG4gICAgY29sbGVjdFByb2JlIHx8XG4gICAgKCgpID0+XG4gICAgICBcInVuZGVmaW5lZFwiID09IHR5cGVvZiBkb2N1bWVudFxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBjb2xsZWN0Q2xvdWRmbGFyZUNoYWxsZW5nZVBhZ2VQcm9iZShkb2N1bWVudCkpXG4gIGxldCBkZWFkbGluZSA9IERhdGUubm93KCkgKyB0aW1lb3V0TXNcbiAgZm9yICg7Oykge1xuICAgIGxldCBwcm9iZSA9IHByb2JlQ29sbGVjdG9yKClcbiAgICBpZiAocHJvYmUgJiYgaXNDbG91ZGZsYXJlTWFuYWdlZENoYWxsZW5nZVBhZ2UocHJvYmUpKSByZXR1cm4gdHJ1ZVxuICAgIGlmIChcbiAgICAgIChwcm9iZSAmJiAhbG9va3NMaWtlUG9zc2libGVDaGFsbGVuZ2VQYWdlKHByb2JlKSkgfHxcbiAgICAgIERhdGUubm93KCkgPj0gZGVhZGxpbmVcbiAgICApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgTWF0aC5tYXgoMCwgaW50ZXJ2YWxNcykpLFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xvdWRmbGFyZUNoYWxsZW5nZUluamVjdGVkSG9zdChob3N0SWQpIHtcbiAgaWYgKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGRvY3VtZW50KSByZXR1cm4gZmFsc2VcbiAgbGV0IGhvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChob3N0SWQpXG4gIHJldHVybiAhIWhvc3QgJiYgKGhvc3QucmVtb3ZlKCksIHRydWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydENsb3VkZmxhcmVDaGFsbGVuZ2VJbmplY3RlZEhvc3RDbGVhbnVwKFxuICBob3N0SWQsXG4gIHsgdGltZW91dE1zID0gNWUzLCBpbnRlcnZhbE1zID0gMjUwIH0gPSB7fSxcbikge1xuICBpZiAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgZG9jdW1lbnQpXG4gICAgcmV0dXJuICgpID0+IHt9XG4gIGxldCBzdG9wcGVkID0gZmFsc2VcbiAgbGV0IHRpbWVvdXRIYW5kbGUgPSBudWxsXG4gIGxldCBpbnRlcnZhbEhhbmRsZSA9IG51bGxcbiAgbGV0IG11dGF0aW9uT2JzZXJ2ZXIgPSBudWxsXG4gIGxldCBzdG9wID0gKCkgPT4ge1xuICAgIHN0b3BwZWQgfHxcbiAgICAgICgoc3RvcHBlZCA9IHRydWUpLFxuICAgICAgdGltZW91dEhhbmRsZSAmJiBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSksXG4gICAgICBpbnRlcnZhbEhhbmRsZSAmJiBjbGVhckludGVydmFsKGludGVydmFsSGFuZGxlKSxcbiAgICAgIG11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKSlcbiAgfVxuICBsZXQgY2hlY2tBbmRDbGVhbnVwID0gKCkgPT4ge1xuICAgICFzdG9wcGVkICYmXG4gICAgICBpc0N1cnJlbnREb2N1bWVudENsb3VkZmxhcmVNYW5hZ2VkQ2hhbGxlbmdlUGFnZSgpICYmXG4gICAgICAocmVtb3ZlQ2xvdWRmbGFyZUNoYWxsZW5nZUluamVjdGVkSG9zdChob3N0SWQpLCBzdG9wKCkpXG4gIH1cbiAgcmV0dXJuIChcbiAgICBjaGVja0FuZENsZWFudXAoKSxcbiAgICAhc3RvcHBlZCAmJlxuICAgICAgKChpbnRlcnZhbEhhbmRsZSA9IHNldEludGVydmFsKGNoZWNrQW5kQ2xlYW51cCwgaW50ZXJ2YWxNcykpLFxuICAgICAgKHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KHN0b3AsIHRpbWVvdXRNcykpLFxuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAmJlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgKG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjaGVja0FuZENsZWFudXApKS5vYnNlcnZlKFxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICApKSxcbiAgICBzdG9wXG4gIClcbn1cbiIsIi8qKlxuICogSG9zdG5hbWVzIHdoZXJlIGJvb3RzdHJhcCBtdXN0IG5vLW9wIGV2ZW4gaWYgYSBDUyBzb21laG93IGxvYWRzLlxuICogS2VlcCBpbiBzeW5jIHdpdGggdGhlIEdvb2dsZSAvIGNvbnN1bWVyIGV4Y2x1ZGVzIGluIGJvb3RzdHJhcC50cy5cbiAqXG4gKiBMaXZlcyB1bmRlciBzcmMvbGliIChub3QgY29udGVudHMvKSBzbyBQbGFzbW8gZG9lcyBub3QgcmVnaXN0ZXIgaXRcbiAqIGFzIGl0cyBvd24gPGFsbF91cmxzPiBjb250ZW50IHNjcmlwdC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOZXZlckFwcGx5SG9zdChob3N0bmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGhvc3QgPSBob3N0bmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgLy8gRW50aXJlIEdvb2dsZSBwcm9wZXJ0eSB0cmVlIChkb2NzLCB0cmFuc2xhdGUsIGdtYWlsLCBzZWFyY2gsIOKApilcbiAgaWYgKGhvc3QgPT09IFwiZ29vZ2xlLmNvbVwiIHx8IGhvc3QuZW5kc1dpdGgoXCIuZ29vZ2xlLmNvbVwiKSkgcmV0dXJuIHRydWVcbiAgaWYgKGhvc3QgPT09IFwieW91dHUuYmVcIiB8fCBob3N0ID09PSBcInlvdXR1YmUuY29tXCIgfHwgaG9zdC5lbmRzV2l0aChcIi55b3V0dWJlLmNvbVwiKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCBzdWZmaXhlcyA9IFtcbiAgICBcImZhY2Vib29rLmNvbVwiLFxuICAgIFwiaW5zdGFncmFtLmNvbVwiLFxuICAgIFwidHdpdHRlci5jb21cIixcbiAgICBcInguY29tXCIsXG4gICAgXCJ0aWt0b2suY29tXCIsXG4gICAgXCJyZWRkaXQuY29tXCIsXG4gICAgXCJuZXRmbGl4LmNvbVwiLFxuICAgIFwidHdpdGNoLnR2XCIsXG4gICAgXCJkaXNjb3JkLmNvbVwiLFxuICAgIFwic2xhY2suY29tXCIsXG4gICAgXCJ3aGF0c2FwcC5jb21cIixcbiAgICBcInNwb3RpZnkuY29tXCIsXG4gICAgXCJvZmZpY2UuY29tXCIsXG4gICAgXCJvZmZpY2UzNjUuY29tXCIsXG4gICAgXCJzaGFyZXBvaW50LmNvbVwiLFxuICAgIFwib3V0bG9vay5saXZlLmNvbVwiLFxuICAgIFwib25lZHJpdmUubGl2ZS5jb21cIixcbiAgICBcInRlYW1zLm1pY3Jvc29mdC5jb21cIixcbiAgICBcImdpdGh1Yi5jb21cIixcbiAgICBcInN0YWNrb3ZlcmZsb3cuY29tXCIsXG4gICAgXCJzdGFja2V4Y2hhbmdlLmNvbVwiXG4gIF1cblxuICByZXR1cm4gc3VmZml4ZXMuc29tZShcbiAgICAoc3VmZml4KSA9PiBob3N0ID09PSBzdWZmaXggfHwgaG9zdC5lbmRzV2l0aChgLiR7c3VmZml4fWApXG4gIClcbn1cbiIsIi8vIEB0cy1ub2NoZWNrXHJcbi8qKlxyXG4gKiBFYXJseSBVUkwgbm9ybWFsaXphdGlvbiBmb3IgR29IaXJlIHRyYWlsaW5nLXNsYXNoIGFuZCBMaWZlQXRUaWtUb2sganJfaWQgYnJpZGdlcy5cclxuICovXHJcblxyXG5jb25zdCBKUl9JRF9QQVJBTSA9IFwianJfaWRcIlxyXG5jb25zdCBHT0hJUkVfSE9TVCA9IFwiam9icy5nb2hpcmUuaW9cIlxyXG5jb25zdCBHT0hJUkVfSk9CX1BBVEggPSAvXlxcL1teL10rXFwvListXFxkK1xcLz8kL1xyXG5jb25zdCBMSUZFX0FUX1RJS1RPS19IT1NUID0gXCJsaWZlYXR0aWt0b2suY29tXCJcclxuY29uc3QgTElGRV9BVF9USUtUT0tfU0VBUkNIX1BBVEggPSAvXlxcL3NlYXJjaFxcL1xcZCtcXC8/JC9cclxuXHJcbmZ1bmN0aW9uIGlzTGlmZUF0VGlrVG9rSm9iRGV0YWlsKHVybCkge1xyXG4gIGNvbnN0IGhvc3RuYW1lID0gdXJsLmhvc3RuYW1lLnRvTG93ZXJDYXNlKClcclxuICBjb25zdCBpc0xpZmVBdFRpa1RvayA9XHJcbiAgICBob3N0bmFtZSA9PT0gTElGRV9BVF9USUtUT0tfSE9TVCB8fFxyXG4gICAgaG9zdG5hbWUuZW5kc1dpdGgoYC4ke0xJRkVfQVRfVElLVE9LX0hPU1R9YClcclxuICByZXR1cm4gaXNMaWZlQXRUaWtUb2sgJiYgTElGRV9BVF9USUtUT0tfU0VBUkNIX1BBVEgudGVzdCh1cmwucGF0aG5hbWUpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZExpZmVBdFRpa1Rva0FwcGx5VXJsKGZyb21IcmVmLCB0b0hyZWYsIGpvYklkKSB7XHJcbiAgY29uc3QgdHJpbW1lZEpvYklkID0gam9iSWQudHJpbSgpXHJcbiAgaWYgKCF0cmltbWVkSm9iSWQpIHJldHVybiBudWxsXHJcblxyXG4gIGxldCBmcm9tVXJsXHJcbiAgbGV0IHRvVXJsXHJcbiAgdHJ5IHtcclxuICAgIGZyb21VcmwgPSBuZXcgVVJMKGZyb21IcmVmKVxyXG4gICAgdG9VcmwgPSBuZXcgVVJMKHRvSHJlZilcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBmcm9tSm9iSWQgPSAvXlxcL3NlYXJjaFxcLyhcXGQrKVxcLz8kLy5leGVjKGZyb21VcmwucGF0aG5hbWUpPy5bMV1cclxuICBjb25zdCB0b0pvYklkID0gL15cXC9yZXN1bWVcXC8oXFxkKylcXC9hcHBseVxcLz8kLy5leGVjKHRvVXJsLnBhdGhuYW1lKT8uWzFdXHJcblxyXG4gIGlmIChcclxuICAgICFpc0xpZmVBdFRpa1Rva0pvYkRldGFpbChmcm9tVXJsKSB8fFxyXG4gICAgdG9VcmwuaG9zdG5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJjYXJlZXJzLnRpa3Rvay5jb21cIiB8fFxyXG4gICAgIWZyb21Kb2JJZCB8fFxyXG4gICAgdG9Kb2JJZCAhPT0gZnJvbUpvYklkIHx8XHJcbiAgICB0b1VybC5zZWFyY2hQYXJhbXMuaGFzKEpSX0lEX1BBUkFNKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIHRvVXJsLnNlYXJjaFBhcmFtcy5zZXQoSlJfSURfUEFSQU0sIHRyaW1tZWRKb2JJZClcclxuICByZXR1cm4gdG9VcmwudG9TdHJpbmcoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkUmV0YWluTGlmZUF0VGlrVG9rSm9iRGV0YWlsSnJJZChocmVmKSB7XHJcbiAgbGV0IHVybFxyXG4gIHRyeSB7XHJcbiAgICB1cmwgPSBuZXcgVVJMKGhyZWYpXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIGlzTGlmZUF0VGlrVG9rSm9iRGV0YWlsKHVybCkgJiYgISF1cmwuc2VhcmNoUGFyYW1zLmdldChKUl9JRF9QQVJBTSk/LnRyaW0oKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkS2VlcExpZmVBdFRpa1Rva0FwcGx5QnJpZGdlKGZyb21IcmVmLCB0b0hyZWYpIHtcclxuICBsZXQgZnJvbVVybFxyXG4gIGxldCB0b1VybFxyXG4gIHRyeSB7XHJcbiAgICBmcm9tVXJsID0gbmV3IFVSTChmcm9tSHJlZilcclxuICAgIHRvVXJsID0gbmV3IFVSTCh0b0hyZWYpXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgY29uc3Qgam9iSWQgPSBmcm9tVXJsLnNlYXJjaFBhcmFtcy5nZXQoSlJfSURfUEFSQU0pPy50cmltKClcclxuICByZXR1cm4gKFxyXG4gICAgISFqb2JJZCAmJlxyXG4gICAgZnJvbVVybC5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpID09PSB0b1VybC5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpICYmXHJcbiAgICBmcm9tVXJsLnBhdGhuYW1lID09PSB0b1VybC5wYXRobmFtZSAmJlxyXG4gICAgdG9Vcmwuc2VhcmNoUGFyYW1zLmdldChKUl9JRF9QQVJBTSk/LnRyaW0oKSA9PT0gam9iSWQgJiZcclxuICAgIGlzTGlmZUF0VGlrVG9rSm9iRGV0YWlsKHRvVXJsKVxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFJlY292ZXJMaWZlQXRUaWtUb2tKb2JEZXRhaWxKcklkKGhyZWYpIHtcclxuICBsZXQgdXJsXHJcbiAgdHJ5IHtcclxuICAgIHVybCA9IG5ldyBVUkwoaHJlZilcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gaXNMaWZlQXRUaWtUb2tKb2JEZXRhaWwodXJsKSAmJiAhdXJsLnNlYXJjaFBhcmFtcy5oYXMoSlJfSURfUEFSQU0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZExpZmVBdFRpa1Rva1JlY292ZXJlZFVybChocmVmLCBqb2JJZCkge1xyXG4gIGNvbnN0IHRyaW1tZWRKb2JJZCA9IGpvYklkLnRyaW0oKVxyXG4gIGlmICghdHJpbW1lZEpvYklkIHx8ICFzaG91bGRSZWNvdmVyTGlmZUF0VGlrVG9rSm9iRGV0YWlsSnJJZChocmVmKSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbiAgY29uc3QgdXJsID0gbmV3IFVSTChocmVmKVxyXG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KEpSX0lEX1BBUkFNLCB0cmltbWVkSm9iSWQpXHJcbiAgcmV0dXJuIHVybC50b1N0cmluZygpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5vcm1hbGl6ZWRFYXJseVVybChocmVmKSB7XHJcbiAgbGV0IHVybFxyXG4gIHRyeSB7XHJcbiAgICB1cmwgPSBuZXcgVVJMKGhyZWYpXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBpZiAoXHJcbiAgICB1cmwuaG9zdG5hbWUudG9Mb3dlckNhc2UoKSAhPT0gR09ISVJFX0hPU1QgfHxcclxuICAgICF1cmwuc2VhcmNoUGFyYW1zLmhhcyhKUl9JRF9QQVJBTSkgfHxcclxuICAgICF1cmwucGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpIHx8XHJcbiAgICAhR09ISVJFX0pPQl9QQVRILnRlc3QodXJsLnBhdGhuYW1lKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbiAgdXJsLnBhdGhuYW1lID0gdXJsLnBhdGhuYW1lLnJlcGxhY2UoL1xcLyskLywgXCJcIilcclxuICBjb25zdCBub3JtYWxpemVkID0gdXJsLnRvU3RyaW5nKClcclxuICByZXR1cm4gbm9ybWFsaXplZCA9PT0gaHJlZiA/IG51bGwgOiBub3JtYWxpemVkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRSZXNvbHZlR29IaXJlRHJvcHBlZEpvYklkVXJsKGhyZWYpIHtcclxuICBsZXQgdXJsXHJcbiAgdHJ5IHtcclxuICAgIHVybCA9IG5ldyBVUkwoaHJlZilcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgdXJsLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkgPT09IEdPSElSRV9IT1NUICYmXHJcbiAgICAhdXJsLnNlYXJjaFBhcmFtcy5oYXMoSlJfSURfUEFSQU0pICYmXHJcbiAgICBHT0hJUkVfSk9CX1BBVEgudGVzdCh1cmwucGF0aG5hbWUpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRWFybHlKb2JyaWdodFVybCh3aW4gPSB3aW5kb3cpIHtcclxuICBjb25zdCBub3JtYWxpemVkID0gYnVpbGROb3JtYWxpemVkRWFybHlVcmwod2luLmxvY2F0aW9uLmhyZWYpXHJcbiAgcmV0dXJuICEhbm9ybWFsaXplZCAmJiAod2luLmxvY2F0aW9uLnJlcGxhY2Uobm9ybWFsaXplZCksIHRydWUpXHJcbn1cclxuIiwiLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogRGVjaWRlIHdoZXRoZXIgdGhlIGhlbHBlciBydW50aW1lIHNob3VsZCBhY3RpdmF0ZSBvbiB0aGlzIGZyYW1lLlxuICogVGVhbSBmb3JrOiB0aWdodCBhY3RpdmF0aW9uIOKAlCBBVFMgLyBhcHBseSBzdXJmYWNlcyBvbmx5LlxuICovXG5cbmltcG9ydCB7IGFnZW50RG9tYWlucyB9IGZyb20gXCJ+YXBpL2h1Yi1lbnZcIlxuaW1wb3J0IHtcbiAgQ09OU1RSQUlORURfU0lURV9SVUxFUyxcbiAgSUZSQU1FX0NIRUNLX1BBVFRFUk4sXG4gIFBBR0VfU09VUkNFX0FUU19MSVNULFxuICBRVUVSWV9QQVJBTV9MSVNULFxuICBTVVBQT1JUX0RPTUFJTlMsXG4gIFNVUFBPUlRfUEFUVEVSTlMsXG59IGZyb20gXCJ+Y29yZS9uYXRpdmUtc3VwcG9ydGVkLXNpdGVzXCJcblxuY29uc3QgUE9TVF9BUFBMWV9QQVRIX1JFR0VYRVMgPSBbXG4gIFwiY29uZmlybWF0aW9uXCIsXG4gIFwiYXBwbHlDb25maXJtYXRpb25cIixcbiAgXCJjYXJlZXJzL2NoYXRib3RcIixcbiAgXCJzdWNjZXNzKD86ZnVsKT9cIixcbiAgXCJ0aGFua1tfLV0/eW91XCIsXG4gIFwidGhhbmtzXCIsXG4gIFwiU3VjY2Vzc2Z1bFJlZ2lzdHJhdGlvblwiLFxuXS5tYXAoKHNlZ21lbnQpID0+IG5ldyBSZWdFeHAoYC8ke3NlZ21lbnR9KD89L3wkKWAsIFwiaVwiKSlcblxuY29uc3QgU0FGRV9RVUVSWV9QQVJBTVMgPSBuZXcgU2V0KFtcbiAgXCJnaF9qaWRcIixcbiAgXCJnaF9zcmNcIixcbiAgXCJhc2hieV9qaWRcIixcbiAgXCJMZXZlckFwcElkXCIsXG4gIFwiam9idml0ZWlmcmFtZVwiLFxuXSlcblxuY29uc3QgV09SS0FCTEVfSE9TVF9SRSA9IC93b3JrYWJsZVxcLmNvbSQvaVxuY29uc3QgTElOS0VESU5fSk9CX1BBVEhfUkUgPVxuICAvXlxcLyg/OmpvYnN8am9ifGVhc3ktYXBwbHl8aW5cXC9bXi9dK1xcL292ZXJsYXlcXC9hcHBseXxoaXJpbmd8dGFsZW50KVxcYi9pXG5cbmZ1bmN0aW9uIGhvc3RuYW1lRXF1YWxzT3JJc1N1YmRvbWFpbihob3N0bmFtZSwgZG9tYWluKSB7XG4gIHJldHVybiBob3N0bmFtZSA9PT0gZG9tYWluIHx8IGhvc3RuYW1lLmVuZHNXaXRoKGAuJHtkb21haW59YClcbn1cblxuZnVuY3Rpb24gaXNQb3N0QXBwbHlDb25maXJtYXRpb25QYXRoKHVybCkge1xuICByZXR1cm4gUE9TVF9BUFBMWV9QQVRIX1JFR0VYRVMuc29tZSgocmUpID0+IHJlLnRlc3QodXJsLnBhdGhuYW1lKSlcbn1cblxuZnVuY3Rpb24gc2l0ZVJ1bGVNYXRjaGVzSG9zdCh1cmwsIGhvc3RuYW1lLCBydWxlKSB7XG4gIHJldHVybiAoXG4gICAgcnVsZS5kb21haW5zLnNvbWUoKGRvbWFpbikgPT5cbiAgICAgIGhvc3RuYW1lRXF1YWxzT3JJc1N1YmRvbWFpbihob3N0bmFtZSwgZG9tYWluKSxcbiAgICApIHx8IHJ1bGUucGF0dGVybnMuc29tZSgocGF0dGVybikgPT4gcGF0dGVybi5pbmNsdWRlcyh1cmwuaHJlZikpXG4gIClcbn1cblxuZnVuY3Rpb24gc2l0ZVJ1bGVNYXRjaGVzUGF0aCh1cmwsIHJ1bGUpIHtcbiAgY29uc3QgZnVsbCA9IGAke3VybC5wYXRobmFtZX0ke3VybC5zZWFyY2h9JHt1cmwuaGFzaH1gXG4gIHJldHVybiAoXG4gICAgKHJ1bGUucGF0aFJlZ2V4Py50ZXN0KHVybC5wYXRobmFtZSkgPz8gZmFsc2UpIHx8XG4gICAgKHJ1bGUudXJsUmVnZXg/LnRlc3QoZnVsbCkgPz8gZmFsc2UpXG4gIClcbn1cblxuZnVuY3Rpb24gaXNDb25zdHJhaW5lZFNpdGVCdXRXcm9uZ1BhdGgodXJsLCBob3N0bmFtZSkge1xuICByZXR1cm4gQ09OU1RSQUlORURfU0lURV9SVUxFUy5zb21lKFxuICAgIChydWxlKSA9PlxuICAgICAgc2l0ZVJ1bGVNYXRjaGVzSG9zdCh1cmwsIGhvc3RuYW1lLCBydWxlKSAmJlxuICAgICAgIXNpdGVSdWxlTWF0Y2hlc1BhdGgodXJsLCBydWxlKSxcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdXBwb3J0ZWRSdW50aW1lRnJhbWVVcmwoaHJlZikge1xuICBpZiAoIWhyZWYpIHJldHVybiBmYWxzZVxuICB0cnkge1xuICAgIGlmIChpc1Bvc3RBcHBseUNvbmZpcm1hdGlvblBhdGgobmV3IFVSTChocmVmKSkpIHJldHVybiBmYWxzZVxuICB9IGNhdGNoIHtcbiAgICAvKiBpZ25vcmUgKi9cbiAgfVxuICByZXR1cm4gSUZSQU1FX0NIRUNLX1BBVFRFUk4uc29tZSgodG9rZW4pID0+IGhyZWYuaW5jbHVkZXModG9rZW4pKVxufVxuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKVxufVxuXG5mdW5jdGlvbiBzb3VyY2VVcmxJbmRpY2F0ZXNBdHMoc291cmNlVXJsLCBrZXl3b3JkLCBhdHNEb21haW4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzcmMgPSBuZXcgVVJMKHNvdXJjZVVybClcbiAgICBpZiAoaG9zdG5hbWVFcXVhbHNPcklzU3ViZG9tYWluKHNyYy5ob3N0bmFtZSwgYXRzRG9tYWluKSkgcmV0dXJuIHRydWVcbiAgICBjb25zdCBoYXkgPSBgJHtzcmMuaG9zdG5hbWV9JHtzcmMucGF0aG5hbWV9YC50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbmVlZGxlID0ga2V5d29yZC50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKG5lZWRsZS5pbmNsdWRlcyhcIi5cIikpIHJldHVybiBoYXkuaW5jbHVkZXMobmVlZGxlKVxuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgYCg/Ol58Wy4vXy1dKSR7ZXNjYXBlUmVnRXhwKG5lZWRsZSl9KD86Wy4vXy1dfCQpYCxcbiAgICAgIFwiaVwiLFxuICAgICkudGVzdChoYXkpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhZ2VTb3VyY2VzSW5kaWNhdGVGb3JlaWduQXRzKHBhZ2VIb3N0bmFtZSwgcGFnZVNvdXJjZVVybHMpIHtcbiAgZm9yIChjb25zdCBzb3VyY2VVcmwgb2YgcGFnZVNvdXJjZVVybHMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXl3b3JkLCBhdHNEb21haW5dIG9mIFBBR0VfU09VUkNFX0FUU19MSVNUKSB7XG4gICAgICBpZiAoaG9zdG5hbWVFcXVhbHNPcklzU3ViZG9tYWluKHBhZ2VIb3N0bmFtZSwgYXRzRG9tYWluKSkgY29udGludWVcbiAgICAgIGlmIChzb3VyY2VVcmxJbmRpY2F0ZXNBdHMoc291cmNlVXJsLCBrZXl3b3JkLCBhdHNEb21haW4pKSByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gaXNTdXBwb3J0ZWRUb3BMZXZlbEFwcGxpY2F0aW9uVXJsKHVybCkge1xuICBpZiAoaXNQb3N0QXBwbHlDb25maXJtYXRpb25QYXRoKHVybCkpIHJldHVybiBmYWxzZVxuICBjb25zdCBob3N0bmFtZSA9IHVybC5ob3N0bmFtZVxuICBpZiAoaXNDb25zdHJhaW5lZFNpdGVCdXRXcm9uZ1BhdGgodXJsLCBob3N0bmFtZSkpIHJldHVybiBmYWxzZVxuICByZXR1cm4gKFxuICAgIFNVUFBPUlRfRE9NQUlOUy5zb21lKChkb21haW4pID0+XG4gICAgICBob3N0bmFtZUVxdWFsc09ySXNTdWJkb21haW4oaG9zdG5hbWUsIGRvbWFpbiksXG4gICAgKSB8fFxuICAgIFNVUFBPUlRfUEFUVEVSTlMuc29tZSgocGF0dGVybikgPT4gcGF0dGVybi5pbmNsdWRlcyh1cmwuaHJlZikpIHx8XG4gICAgQ09OU1RSQUlORURfU0lURV9SVUxFUy5zb21lKFxuICAgICAgKHJ1bGUpID0+XG4gICAgICAgIHNpdGVSdWxlTWF0Y2hlc0hvc3QodXJsLCBob3N0bmFtZSwgcnVsZSkgJiZcbiAgICAgICAgc2l0ZVJ1bGVNYXRjaGVzUGF0aCh1cmwsIHJ1bGUpLFxuICAgIClcbiAgKVxufVxuXG5mdW5jdGlvbiBoYXNTdXBwb3J0ZWRFbWJlZGRlZEZyYW1lKGlmcmFtZVVybHMpIHtcbiAgcmV0dXJuIGlmcmFtZVVybHMuc29tZSgoaWZyYW1lVXJsKSA9PiBpc1N1cHBvcnRlZFJ1bnRpbWVGcmFtZVVybChpZnJhbWVVcmwpKVxufVxuXG5mdW5jdGlvbiBpc0xpbmtlZEluSm9iU3VyZmFjZSh1cmwpIHtcbiAgcmV0dXJuIChcbiAgICBob3N0bmFtZUVxdWFsc09ySXNTdWJkb21haW4odXJsLmhvc3RuYW1lLCBcImxpbmtlZGluLmNvbVwiKSAmJlxuICAgIExJTktFRElOX0pPQl9QQVRIX1JFLnRlc3QodXJsLnBhdGhuYW1lKVxuICApXG59XG5cbmZ1bmN0aW9uIGhhc1NhZmVBdHNRdWVyeVBhcmFtKHVybCkge1xuICBmb3IgKGNvbnN0IHBhcmFtIG9mIFFVRVJZX1BBUkFNX0xJU1QpIHtcbiAgICBpZiAoIXVybC5zZWFyY2hQYXJhbXMuaGFzKHBhcmFtKSkgY29udGludWVcbiAgICBpZiAoU0FGRV9RVUVSWV9QQVJBTVMuaGFzKHBhcmFtKSkgcmV0dXJuIHRydWVcbiAgICBpZiAocGFyYW0gPT09IFwic2VsZWN0ZWRKb2JJZFwiICYmIFdPUktBQkxFX0hPU1RfUkUudGVzdCh1cmwuaG9zdG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gaXNBZ2VudFByb2R1Y3RIb3N0KGhvc3RuYW1lKSB7XG4gIHJldHVybiBhZ2VudERvbWFpbnMuc29tZSgoZG9tYWluKSA9PlxuICAgIGhvc3RuYW1lRXF1YWxzT3JJc1N1YmRvbWFpbihob3N0bmFtZSwgZG9tYWluKSxcbiAgKVxufVxuXG5leHBvcnQgdHlwZSBSdW50aW1lQWN0aXZhdGlvblJlYXNvbiA9XG4gIHwgXCJqb2JyaWdodF9kb21haW5cIlxuICB8IFwibGlua2VkaW5fZG9tYWluXCJcbiAgfCBcInN1cHBvcnRlZF9mcmFtZV91cmxcIlxuICB8IFwic3VwcG9ydGVkX3RvcF91cmxcIlxuICB8IFwic3VwcG9ydGVkX3F1ZXJ5X3BhcmFtXCJcbiAgfCBcInN1cHBvcnRlZF9wYWdlX3NvdXJjZVwiXG4gIHwgXCJzdXBwb3J0ZWRfZW1iZWRkZWRfZnJhbWVcIlxuICB8IFwiZXh0ZW5zaW9uX2ljb25cIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UnVudGltZUFjdGl2YXRpb25SZWFzb24oe1xuICBocmVmLFxuICBpc1RvcEZyYW1lLFxuICBpZnJhbWVVcmxzID0gW10sXG4gIHBhZ2VTb3VyY2VVcmxzID0gW10sXG59KTogUnVudGltZUFjdGl2YXRpb25SZWFzb24gfCBudWxsIHtcbiAgbGV0IHVybFxuICB0cnkge1xuICAgIHVybCA9IG5ldyBVUkwoaHJlZilcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChpc0FnZW50UHJvZHVjdEhvc3QodXJsLmhvc3RuYW1lKSkge1xuICAgIHJldHVybiBcImpvYnJpZ2h0X2RvbWFpblwiXG4gIH1cbiAgaWYgKGlzTGlua2VkSW5Kb2JTdXJmYWNlKHVybCkpIHtcbiAgICByZXR1cm4gXCJsaW5rZWRpbl9kb21haW5cIlxuICB9XG4gIGlmICghaXNUb3BGcmFtZSkge1xuICAgIHJldHVybiBpc1N1cHBvcnRlZFJ1bnRpbWVGcmFtZVVybCh1cmwuaHJlZikgPyBcInN1cHBvcnRlZF9mcmFtZV91cmxcIiA6IG51bGxcbiAgfVxuICBpZiAoaXNTdXBwb3J0ZWRUb3BMZXZlbEFwcGxpY2F0aW9uVXJsKHVybCkpIHtcbiAgICByZXR1cm4gXCJzdXBwb3J0ZWRfdG9wX3VybFwiXG4gIH1cbiAgaWYgKFxuICAgICFpc0NvbnN0cmFpbmVkU2l0ZUJ1dFdyb25nUGF0aCh1cmwsIHVybC5ob3N0bmFtZSkgJiZcbiAgICBoYXNTYWZlQXRzUXVlcnlQYXJhbSh1cmwpXG4gICkge1xuICAgIHJldHVybiBcInN1cHBvcnRlZF9xdWVyeV9wYXJhbVwiXG4gIH1cbiAgaWYgKHBhZ2VTb3VyY2VzSW5kaWNhdGVGb3JlaWduQXRzKHVybC5ob3N0bmFtZSwgcGFnZVNvdXJjZVVybHMpKSB7XG4gICAgcmV0dXJuIFwic3VwcG9ydGVkX3BhZ2Vfc291cmNlXCJcbiAgfVxuICBpZiAoaGFzU3VwcG9ydGVkRW1iZWRkZWRGcmFtZShpZnJhbWVVcmxzKSkge1xuICAgIHJldHVybiBcInN1cHBvcnRlZF9lbWJlZGRlZF9mcmFtZVwiXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZhdGlvblJlYXNvbkZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSUZyYW1lRWxlbWVudCkge1xuICAgIHJldHVybiBpc1N1cHBvcnRlZFJ1bnRpbWVGcmFtZVVybChlbGVtZW50LnNyYylcbiAgICAgID8gXCJzdXBwb3J0ZWRfZW1iZWRkZWRfZnJhbWVcIlxuICAgICAgOiBudWxsXG4gIH1cbiAgaWYgKFxuICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2NyaXB0RWxlbWVudCB8fFxuICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnRcbiAgKSB7XG4gICAgY29uc3Qgc291cmNlVXJsID1cbiAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2NyaXB0RWxlbWVudCA/IGVsZW1lbnQuc3JjIDogZWxlbWVudC5ocmVmXG4gICAgaWYgKHBhZ2VTb3VyY2VzSW5kaWNhdGVGb3JlaWduQXRzKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSwgW3NvdXJjZVVybF0pKSB7XG4gICAgICByZXR1cm4gXCJzdXBwb3J0ZWRfcGFnZV9zb3VyY2VcIlxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmF0aW9uUmVhc29uRnJvbU5vZGUobm9kZSkge1xuICBpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybiBudWxsXG4gIGNvbnN0IGRpcmVjdCA9IGdldEFjdGl2YXRpb25SZWFzb25Gcm9tRWxlbWVudChub2RlKVxuICBpZiAoZGlyZWN0KSByZXR1cm4gZGlyZWN0XG4gIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiaWZyYW1lW3NyY10sIHNjcmlwdFtzcmNdLCBsaW5rW2hyZWZdXCIsXG4gICkpIHtcbiAgICBjb25zdCByZWFzb24gPSBnZXRBY3RpdmF0aW9uUmVhc29uRnJvbUVsZW1lbnQoY2hpbGQpXG4gICAgaWYgKHJlYXNvbikgcmV0dXJuIHJlYXNvblxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlUnVudGltZUFjdGl2YXRpb25TaWduYWxzKG9uQWN0aXZhdGVkKSB7XG4gIGlmIChcbiAgICB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciA9PT0gXCJ1bmRlZmluZWRcIiB8fFxuICAgIHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIiB8fFxuICAgIHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmIHx8XG4gICAgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICApIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIGxldCBvYnNlcnZlciA9IG51bGxcbiAgY29uc3QgYWN0aXZhdGUgPSAocmVhc29uKSA9PiB7XG4gICAgb2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgIG9ic2VydmVyID0gbnVsbFxuICAgIG9uQWN0aXZhdGVkKHJlYXNvbilcbiAgfVxuXG4gIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgICAgY29uc3QgcmVhc29uID0gZ2V0QWN0aXZhdGlvblJlYXNvbkZyb21Ob2RlKG11dGF0aW9uLnRhcmdldClcbiAgICAgICAgaWYgKHJlYXNvbikge1xuICAgICAgICAgIGFjdGl2YXRlKHJlYXNvbilcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBhZGRlZCBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSB7XG4gICAgICAgIGNvbnN0IHJlYXNvbiA9IGdldEFjdGl2YXRpb25SZWFzb25Gcm9tTm9kZShhZGRlZClcbiAgICAgICAgaWYgKHJlYXNvbikge1xuICAgICAgICAgIGFjdGl2YXRlKHJlYXNvbilcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgYXR0cmlidXRlRmlsdGVyOiBbXCJzcmNcIiwgXCJocmVmXCJdLFxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlLFxuICB9KVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgb2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKVxuICAgIG9ic2VydmVyID0gbnVsbFxuICB9XG59XG4iLCIvKipcbiAqIEVudmlyb25tZW50IC8gaG9zdCBjb25maWcgZm9yIHRoZSB0ZWFtIGZvcmsuXG4gKiBPdmVycmlkZSB2aWEgLmVudiAoUExBU01PX1BVQkxJQ18qKS5cbiAqXG4gKiBBdXRvZmlsbCBwcm9maWxlIGRhdGEgY29tZXMgZnJvbSB0aGUgVGVhbSBBdXRvZmlsbCBIdWIgKHRlYW0tc2l0ZSksXG4gKiBub3QgSm9icmlnaHQgY2xvdWQg4oCUIHNlZSB+YXBpL3RlYW0tY2xpZW50IGFuZCBleHRlbnNpb24gT3B0aW9ucy5cbiAqL1xuXG5jb25zdCBQUk9EX0hVQiA9IFwiaHR0cHM6Ly9qb2JyaWdodC10ZWFtLXNpdGUudmVyY2VsLmFwcFwiXG5jb25zdCBERVZfSFVCID0gXCJodHRwOi8vbG9jYWxob3N0OjMyMTBcIlxuXG5leHBvcnQgY29uc3QgVEVBTV9TSVRFX1VSTCA9XG4gIHByb2Nlc3MuZW52LlBMQVNNT19QVUJMSUNfVEVBTV9TSVRFX1VSTCA/PyBQUk9EX0hVQlxuXG4vKiogSHViIFVSTCBmb3IgdGhlIGN1cnJlbnQgYnVpbGQ6IGxvY2FsaG9zdCBpbiBwbGFzbW8gZGV2LCBwcm9kIFVSTCBpbiBidWlsZHMuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SHViVXJsKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgcmV0dXJuIERFVl9IVUJcbiAgcmV0dXJuIFRFQU1fU0lURV9VUkwgfHwgUFJPRF9IVUJcbn1cblxuLyoqIEBkZXByZWNhdGVkIFByZWZlciBURUFNX1NJVEVfVVJMIOKAlCBrZXB0IGZvciBvbGRlciBzdHVicyAqL1xuZXhwb3J0IGNvbnN0IEFQSV9ET01BSU4gPVxuICBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX0FQSV9ET01BSU4gPz8gVEVBTV9TSVRFX1VSTFxuXG5leHBvcnQgY29uc3QgSE9TVF9ET01BSU4gPVxuICBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX0hPU1RfRE9NQUlOID8/IFRFQU1fU0lURV9VUkxcblxuZXhwb3J0IGNvbnN0IENPT0tJRV9ET01BSU4gPVxuICBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX0NPT0tJRV9ET01BSU4gPz8gXCJsb2NhbGhvc3RcIlxuXG4vKiogVGVhbSBodWIgaG9zdCBvbmx5IOKAlCBkbyBOT1QgaW5jbHVkZSBsb2NhbGhvc3QgKHdvdWxkIGFjdGl2YXRlIG9uIGV2ZXJ5IGxvY2FsIGFwcCkuICovXG5leHBvcnQgY29uc3QgYWdlbnREb21haW5zID0gW1wiam9icmlnaHQtdGVhbS1zaXRlLnZlcmNlbC5hcHBcIl0gYXMgY29uc3RcbiIsIi8qKlxuICogU3VwcG9ydGVkIEFUUyBzaXRlIHJlZ2lzdHJ5ICsgZGVyaXZlZCBsaXN0cy5cbiAqIFJlZ2lzdHJ5IGRhdGEgbGl2ZXMgaW4gc2l0ZS1yZWdpc3RyeS5yYXcuanMgKGV4dHJhY3RlZCBmcm9tIEpvYnJpZ2h0IHYxLjIzLjApLlxuICovXG5cbmltcG9ydCB7IE1hdGNoUGF0dGVybiB9IGZyb20gXCJ+Y29yZS9tYXRjaC1wYXR0ZXJuc1wiXG5pbXBvcnQgeyBTSVRFX1JFR0lTVFJZIGFzIFJBV19SRUdJU1RSWSB9IGZyb20gXCJ+Y29yZS9zaXRlLXJlZ2lzdHJ5LnJhd1wiXG5cbmV4cG9ydCB0eXBlIFNpdGVEZWZpbml0aW9uID0ge1xuICBkb21haW5zPzogc3RyaW5nW11cbiAgcGF0dGVybnM/OiBzdHJpbmdbXVxuICBpZnJhbWVEb21haW5zPzogc3RyaW5nW11cbiAgcXVlcnlQYXJhbXM/OiBzdHJpbmdbXVxuICBwYXRoUmVnZXg/OiBzdHJpbmdcbiAgdXJsUmVnZXg/OiBzdHJpbmdcbiAgcGFnZVNvdXJjZUtleXdvcmQ/OiBzdHJpbmdcbiAgcGFnZVNvdXJjZURvbWFpbj86IHN0cmluZ1xuICBpZnJhbWVPbmx5PzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgU0lURV9SRUdJU1RSWSA9IFJBV19SRUdJU1RSWSBhcyBSZWNvcmQ8c3RyaW5nLCBTaXRlRGVmaW5pdGlvbj5cblxuZXhwb3J0IGNvbnN0IFBJTlBPSU5USFFfQ0FSRUVSU19DRE4gPSBcImQybjVpZWQ5NG1hem9wLmNsb3VkZnJvbnQubmV0XCJcbmV4cG9ydCBjb25zdCBFSUdIVEZPTERfQ0FSRUVSSFVCX0pPQl9QQVRIX1JFR0VYX1NPVVJDRSA9XG4gIFwiXi9jYXJlZXJodWIvZXhwbG9yZS9qb2JzLyg/IWFwcGx5Lz8kKVteLz8jXSsvPyRcIlxuXG5jb25zdCBlaWdodGZvbGRDYXJlZXJIdWJKb2JQYXRoUmVnZXggPSBuZXcgUmVnRXhwKFxuICBFSUdIVEZPTERfQ0FSRUVSSFVCX0pPQl9QQVRIX1JFR0VYX1NPVVJDRVxuKVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFaWdodGZvbGRDYXJlZXJIdWJKb2JQYXRoKHBhdGhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGVpZ2h0Zm9sZENhcmVlckh1YkpvYlBhdGhSZWdleC50ZXN0KHBhdGhuYW1lKVxufVxuXG5mdW5jdGlvbiBob3N0bmFtZUZyb21NYXRjaFBhdHRlcm4ocGF0dGVybjogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IG1hdGNoID0gL15bXjpdKzpcXC9cXC8oW14vXSspLy5leGVjKHBhdHRlcm4pXG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsXG4gIGNvbnN0IGhvc3QgPSBtYXRjaFsxXVxuICBpZiAoIWhvc3QgfHwgaG9zdCA9PT0gXCIqXCIpIHJldHVybiBudWxsXG4gIHJldHVybiBob3N0LnN0YXJ0c1dpdGgoXCIqLlwiKSA/IGhvc3Quc2xpY2UoMikgOiBob3N0XG59XG5cbmNvbnN0IHVuY29uc3RyYWluZWRTaXRlcyA9IE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSkuZmlsdGVyKFxuICAoc2l0ZSkgPT4gIXNpdGUucGF0aFJlZ2V4ICYmICFzaXRlLnVybFJlZ2V4XG4pXG5cbmV4cG9ydCBjb25zdCBTVVBQT1JUX0RPTUFJTlMgPSB1bmNvbnN0cmFpbmVkU2l0ZXMuZmxhdE1hcChcbiAgKHNpdGUpID0+IHNpdGUuZG9tYWlucyA/PyBbXVxuKVxuXG5leHBvcnQgY29uc3QgU1VQUE9SVF9QQVRURVJOUyA9IHVuY29uc3RyYWluZWRTaXRlc1xuICAuZmxhdE1hcCgoc2l0ZSkgPT4gc2l0ZS5wYXR0ZXJucyA/PyBbXSlcbiAgLm1hcCgocGF0dGVybikgPT4gbmV3IE1hdGNoUGF0dGVybihwYXR0ZXJuKSlcblxuZXhwb3J0IGNvbnN0IFNVUFBPUlRfSE9TVFMgPSBBcnJheS5mcm9tKFxuICBuZXcgU2V0KFxuICAgIE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSkuZmxhdE1hcCgoc2l0ZSkgPT4gW1xuICAgICAgLi4uKHNpdGUuZG9tYWlucyA/PyBbXSksXG4gICAgICAuLi4oc2l0ZS5wYXR0ZXJucyA/PyBbXSlcbiAgICAgICAgLm1hcChob3N0bmFtZUZyb21NYXRjaFBhdHRlcm4pXG4gICAgICAgIC5maWx0ZXIoKGhvc3QpOiBob3N0IGlzIHN0cmluZyA9PiBob3N0ICE9PSBudWxsKVxuICAgIF0pXG4gIClcbilcblxuZXhwb3J0IHR5cGUgQ29uc3RyYWluZWRTaXRlUnVsZSA9IHtcbiAgZG9tYWluczogc3RyaW5nW11cbiAgcGF0dGVybnM6IE1hdGNoUGF0dGVybltdXG4gIHBhdGhSZWdleD86IFJlZ0V4cFxuICB1cmxSZWdleD86IFJlZ0V4cFxufVxuXG5leHBvcnQgY29uc3QgQ09OU1RSQUlORURfU0lURV9SVUxFUzogQ29uc3RyYWluZWRTaXRlUnVsZVtdID0gT2JqZWN0LnZhbHVlcyhcbiAgU0lURV9SRUdJU1RSWVxuKVxuICAuZmlsdGVyKFxuICAgIChzaXRlKSA9PlxuICAgICAgKHR5cGVvZiBzaXRlLnBhdGhSZWdleCA9PT0gXCJzdHJpbmdcIiAmJiBzaXRlLnBhdGhSZWdleC5sZW5ndGggPiAwKSB8fFxuICAgICAgKHR5cGVvZiBzaXRlLnVybFJlZ2V4ID09PSBcInN0cmluZ1wiICYmIHNpdGUudXJsUmVnZXgubGVuZ3RoID4gMClcbiAgKVxuICAubWFwKChzaXRlKSA9PiAoe1xuICAgIGRvbWFpbnM6IHNpdGUuZG9tYWlucyA/PyBbXSxcbiAgICBwYXR0ZXJuczogKHNpdGUucGF0dGVybnMgPz8gW10pLm1hcCgocGF0dGVybikgPT4gbmV3IE1hdGNoUGF0dGVybihwYXR0ZXJuKSksXG4gICAgcGF0aFJlZ2V4OiBzaXRlLnBhdGhSZWdleCA/IG5ldyBSZWdFeHAoc2l0ZS5wYXRoUmVnZXgpIDogdW5kZWZpbmVkLFxuICAgIHVybFJlZ2V4OiBzaXRlLnVybFJlZ2V4ID8gbmV3IFJlZ0V4cChzaXRlLnVybFJlZ2V4KSA6IHVuZGVmaW5lZFxuICB9KSlcblxuZXhwb3J0IGNvbnN0IElGUkFNRV9DSEVDS19QQVRURVJOID0gT2JqZWN0LnZhbHVlcyhTSVRFX1JFR0lTVFJZKS5mbGF0TWFwKFxuICAoc2l0ZSkgPT4gc2l0ZS5pZnJhbWVEb21haW5zID8/IFtdXG4pXG5cbmV4cG9ydCBjb25zdCBQQUdFX1NPVVJDRV9BVFNfTElTVCA9IE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSlcbiAgLmZpbHRlcigoc2l0ZSkgPT4gc2l0ZS5wYWdlU291cmNlS2V5d29yZCAmJiBzaXRlLnBhZ2VTb3VyY2VEb21haW4pXG4gIC5tYXAoXG4gICAgKHNpdGUpID0+XG4gICAgICBbc2l0ZS5wYWdlU291cmNlS2V5d29yZCEsIHNpdGUucGFnZVNvdXJjZURvbWFpbiFdIGFzIFtzdHJpbmcsIHN0cmluZ11cbiAgKVxuXG5leHBvcnQgY29uc3QgSUZSQU1FX09OTFlfRE9NQUlOUyA9IE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSlcbiAgLmZpbHRlcigoc2l0ZSkgPT4gc2l0ZS5pZnJhbWVPbmx5KVxuICAuZmxhdE1hcCgoc2l0ZSkgPT4gc2l0ZS5kb21haW5zID8/IFtdKVxuXG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1fTElTVCA9IE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSkuZmxhdE1hcChcbiAgKHNpdGUpID0+IHNpdGUucXVlcnlQYXJhbXMgPz8gW11cbilcbiIsIi8qKlxuICogTWluaW1hbCBDaHJvbWUgbWF0Y2gtcGF0dGVybiBpbXBsZW1lbnRhdGlvbiBmb3Igc3VwcG9ydGVkLXNpdGVzLlxuICogKFBvcnRlZCBzdWJzZXQgb2YgQHdlYmV4dC1jb3JlL21hdGNoLXBhdHRlcm5zLilcbiAqL1xuXG5leHBvcnQgY2xhc3MgSW52YWxpZE1hdGNoUGF0dGVybiBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IocGF0dGVybjogc3RyaW5nLCByZWFzb246IHN0cmluZykge1xuICAgIHN1cGVyKGBJbnZhbGlkIG1hdGNoIHBhdHRlcm4gXCIke3BhdHRlcm59XCI6ICR7cmVhc29ufWApXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoUGF0dGVybiB7XG4gIHN0YXRpYyBQUk9UT0NPTFMgPSBbXCJodHRwXCIsIFwiaHR0cHNcIiwgXCJmaWxlXCIsIFwiZnRwXCIsIFwidXJuXCJdIGFzIGNvbnN0XG5cbiAgaXNBbGxVcmxzID0gZmFsc2VcbiAgcHJvdG9jb2xNYXRjaGVzOiBzdHJpbmdbXSA9IFtdXG4gIGhvc3RuYW1lTWF0Y2ggPSBcIipcIlxuICBwYXRobmFtZU1hdGNoID0gXCIqXCJcblxuICBjb25zdHJ1Y3RvcihwYXR0ZXJuOiBzdHJpbmcpIHtcbiAgICBpZiAocGF0dGVybiA9PT0gXCI8YWxsX3VybHM+XCIpIHtcbiAgICAgIHRoaXMuaXNBbGxVcmxzID0gdHJ1ZVxuICAgICAgdGhpcy5wcm90b2NvbE1hdGNoZXMgPSBbLi4uTWF0Y2hQYXR0ZXJuLlBST1RPQ09MU11cbiAgICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IFwiKlwiXG4gICAgICB0aGlzLnBhdGhuYW1lTWF0Y2ggPSBcIipcIlxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gLyguKik6XFwvXFwvKC4qPykoXFwvLiopLy5leGVjKHBhdHRlcm4pXG4gICAgaWYgKHBhcnNlZCA9PSBudWxsKSB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihwYXR0ZXJuLCBcIkluY29ycmVjdCBmb3JtYXRcIilcblxuICAgIGNvbnN0IFssIHByb3RvY29sLCBob3N0bmFtZSwgcGF0aG5hbWVdID0gcGFyc2VkXG5cbiAgICBpZiAoXG4gICAgICAhTWF0Y2hQYXR0ZXJuLlBST1RPQ09MUy5pbmNsdWRlcyhwcm90b2NvbCBhcyAodHlwZW9mIE1hdGNoUGF0dGVybi5QUk9UT0NPTFMpW251bWJlcl0pICYmXG4gICAgICBwcm90b2NvbCAhPT0gXCIqXCJcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkTWF0Y2hQYXR0ZXJuKFxuICAgICAgICBwYXR0ZXJuLFxuICAgICAgICBgJHtwcm90b2NvbH0gbm90IGEgdmFsaWQgcHJvdG9jb2wgKCR7TWF0Y2hQYXR0ZXJuLlBST1RPQ09MUy5qb2luKFwiLCBcIil9KWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4ocGF0dGVybiwgXCJIb3N0bmFtZSBjYW5ub3QgaW5jbHVkZSBhIHBvcnRcIilcbiAgICB9XG4gICAgaWYgKFxuICAgICAgaG9zdG5hbWUuaW5jbHVkZXMoXCIqXCIpICYmXG4gICAgICBob3N0bmFtZS5sZW5ndGggPiAxICYmXG4gICAgICAhaG9zdG5hbWUuc3RhcnRzV2l0aChcIiouXCIpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihcbiAgICAgICAgcGF0dGVybixcbiAgICAgICAgXCJJZiB1c2luZyBhIHdpbGRjYXJkICgqKSwgaXQgbXVzdCBnbyBhdCB0aGUgc3RhcnQgb2YgdGhlIGhvc3RuYW1lXCJcbiAgICAgIClcbiAgICB9XG5cbiAgICB0aGlzLnByb3RvY29sTWF0Y2hlcyA9IHByb3RvY29sID09PSBcIipcIiA/IFtcImh0dHBcIiwgXCJodHRwc1wiXSA6IFtwcm90b2NvbF1cbiAgICB0aGlzLmhvc3RuYW1lTWF0Y2ggPSBob3N0bmFtZVxuICAgIHRoaXMucGF0aG5hbWVNYXRjaCA9IHBhdGhuYW1lXG4gIH1cblxuICBpbmNsdWRlcyhpbnB1dDogc3RyaW5nIHwgVVJMIHwgTG9jYXRpb24pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc0FsbFVybHMpIHJldHVybiB0cnVlXG4gICAgY29uc3QgdXJsID1cbiAgICAgIHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IG5ldyBVUkwoaW5wdXQpXG4gICAgICAgIDogaW5wdXQgaW5zdGFuY2VvZiBMb2NhdGlvblxuICAgICAgICAgID8gbmV3IFVSTChpbnB1dC5ocmVmKVxuICAgICAgICAgIDogaW5wdXRcbiAgICByZXR1cm4gdGhpcy5wcm90b2NvbE1hdGNoZXMuc29tZSgocHJvdG9jb2wpID0+IHtcbiAgICAgIGlmIChwcm90b2NvbCA9PT0gXCJodHRwXCIpIHJldHVybiB0aGlzLmlzSHR0cE1hdGNoKHVybClcbiAgICAgIGlmIChwcm90b2NvbCA9PT0gXCJodHRwc1wiKSByZXR1cm4gdGhpcy5pc0h0dHBzTWF0Y2godXJsKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgaXNIdHRwTWF0Y2godXJsOiBVUkwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXJsLnByb3RvY29sID09PSBcImh0dHA6XCIgJiYgdGhpcy5pc0hvc3RQYXRoTWF0Y2godXJsKVxuICB9XG5cbiAgcHJpdmF0ZSBpc0h0dHBzTWF0Y2godXJsOiBVUkwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXJsLnByb3RvY29sID09PSBcImh0dHBzOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybClcbiAgfVxuXG4gIHByaXZhdGUgaXNIb3N0UGF0aE1hdGNoKHVybDogVVJMKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmhvc3RuYW1lTWF0Y2ggfHwgIXRoaXMucGF0aG5hbWVNYXRjaCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgaG9zdFJlZ2V4ZXMgPSBbXG4gICAgICB0aGlzLmNvbnZlcnRQYXR0ZXJuVG9SZWdleCh0aGlzLmhvc3RuYW1lTWF0Y2gpLFxuICAgICAgdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5ob3N0bmFtZU1hdGNoLnJlcGxhY2UoL15cXCpcXC4vLCBcIlwiKSlcbiAgICBdXG4gICAgY29uc3QgcGF0aFJlZ2V4ID0gdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5wYXRobmFtZU1hdGNoKVxuICAgIHJldHVybiAoXG4gICAgICBob3N0UmVnZXhlcy5zb21lKChyZSkgPT4gcmUudGVzdCh1cmwuaG9zdG5hbWUpKSAmJiBwYXRoUmVnZXgudGVzdCh1cmwucGF0aG5hbWUpXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UGF0dGVyblRvUmVnZXgocGF0dGVybjogc3RyaW5nKTogUmVnRXhwIHtcbiAgICBjb25zdCBlc2NhcGVkID0gcGF0dGVybi5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIilcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7ZXNjYXBlZC5yZXBsYWNlKC9cXFxcXFwqL2csIFwiLipcIil9JGApXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBTSVRFX1JFR0lTVFJZID0ge1xyXG4gIGdyZWVuaG91c2U6IHtcclxuICAgIGRvbWFpbnM6IFtcImdyZWVuaG91c2UuaW9cIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJncmVlbmhvdXNlLmlvXCJdLFxyXG4gICAgcXVlcnlQYXJhbXM6IFtcImdoX2ppZFwiLCBcImdoX3NyY1wiXSxcclxuICAgIHBhdGhSZWdleDogXCJeLyg/OlteL10rL2pvYnMvXFxcXGQrfGVtYmVkL2pvYl9hcHApXCJcclxuICB9LFxyXG4gIHhjb21wYW55OiB7IHBhdHRlcm5zOiBbXCIqOi8veC5jb21wYW55LypcIl0sIHBhdGhSZWdleDogXCJeL2NhcmVlcnMvW14vXSsvPyRcIiB9LFxyXG4gIHdhbG1hcnQ6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vY2FyZWVycy53YWxtYXJ0LmNvbS8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OlxyXG4gICAgICBcIl4vKHVzL2VuLyhob21lfGpvYnM/L1teL10rfGFwcGx5KD86Ly4qKT98YXBwbGljYXRpb24oPzovLiopPyl8Y29udGVudC9jYXJlZXJzL3VzL2VuLy4qKSRcIlxyXG4gIH0sXHJcbiAgd29ya2RheToge1xyXG4gICAgZG9tYWluczogW1xyXG4gICAgICBcIm15d29ya2RheWpvYnMuY29tXCIsXHJcbiAgICAgIFwibXl3b3JrZGF5am9icy1pbXBsLmNvbVwiLFxyXG4gICAgICBcIm15d29ya2RheXNpdGUuY29tXCIsXHJcbiAgICAgIFwibXl3b3JrZGF5LmNvbVwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBrdWxhOiB7IGRvbWFpbnM6IFtcImNhcmVlcnMua3VsYS5haVwiXSwgcGF0aFJlZ2V4OiBcIl4vW14vXSsvW14vXStcIiB9LFxyXG4gIGljaW1zOiB7XHJcbiAgICBkb21haW5zOiBbXCJpY2ltcy5jb21cIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJpY2ltcy5jb21cIl0sXHJcbiAgICBpZnJhbWVPbmx5OiAhMCxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvXFxcXGQrKD86L3wkKVwiXHJcbiAgfSxcclxuICBkb3ZlcjogeyBkb21haW5zOiBbXCJkb3Zlci5jb21cIl0gfSxcclxuICBhZG9iZTogeyBkb21haW5zOiBbXCJjYXJlZXJzLmFkb2JlLmNvbVwiXSwgcGF0aFJlZ2V4OiBcIl4vW14vXSsvW14vXSsvYXBwbHlcIiB9LFxyXG4gIHpvaG9yZWNydWl0OiB7XHJcbiAgICBkb21haW5zOiBbXCJ6b2hvcmVjcnVpdC5jb21cIiwgXCJ6b2hvcmVjcnVpdC5jYVwiLCBcInpvaG9yZWNydWl0LmV1XCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiem9ob3JlY3J1aXQuY29tXCIsIFwiem9ob3JlY3J1aXQuY2FcIiwgXCJ6b2hvcmVjcnVpdC5ldVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvQ2FyZWVycy8uK1wiXHJcbiAgfSxcclxuICBnZW06IHsgZG9tYWluczogW1wiam9icy5nZW0uY29tXCJdLCBwYXRoUmVnZXg6IFwiXi9bXFxcXHctXSsvW1xcXFx3LV0rLz8kXCIgfSxcclxuICBndXN0bzoge1xyXG4gICAgZG9tYWluczogW1wiam9icy5ndXN0by5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9wb3N0aW5ncy9bXi9dKyg/Oi9hcHBsaWNhbnRzL25ldyg/Oi8uKik/KT8vPyRcIlxyXG4gIH0sXHJcbiAgaGlyaW5ndGhpbmc6IHtcclxuICAgIGRvbWFpbnM6IFtcclxuICAgICAgXCJoaXJpbmd0aGluZy5jb21cIixcclxuICAgICAgXCJvYXNpc3JlY3J1aXQuY29tXCIsXHJcbiAgICAgIFwiZWxldmF0ZS1hdHMuY29tXCIsXHJcbiAgICAgIFwicHJpc21oci1oaXJlLmNvbVwiLFxyXG4gICAgICBcImduYWhpcmluZy5jb21cIixcclxuICAgICAgXCJyaXBwbGluZy1hdHMuY29tXCJcclxuICAgIF0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2IvXFxcXGQrL1wiXHJcbiAgfSxcclxuICBodWJzcG90OiB7IHBhdHRlcm5zOiBbXCIqOi8vd3d3Lmh1YnNwb3QuY29tL2NhcmVlcnMvam9icy8qXCJdIH0sXHJcbiAgcGF5Y29tb25saW5lOiB7XHJcbiAgICBkb21haW5zOiBbXCJwYXljb21vbmxpbmUuY29tXCIsIFwicGF5Y29tb25saW5lLm5ldFwiXSxcclxuICAgIHVybFJlZ2V4OlxyXG4gICAgICBcIl4vdjQvYXRzL3dlYlxcXFwucGhwL3BvcnRhbC9bXi9dKy8oPzphcHBsaWNhdGlvbnMoPzpbLz8jXS4qKT98am9icy9bXi8/I10rKD86Wz8jXS4qKT8pXCJcclxuICB9LFxyXG4gIHRlYW10YWlsb3I6IHtcclxuICAgIGRvbWFpbnM6IFtcInRlYW10YWlsb3IuY29tXCIsIFwiY2FyZWVycy5ibHVlb3JhbmdlLmRpZ2l0YWxcIiwgXCJjYXJlZXJzLnRvdGFscGVyZm9ybS5jb21cIl0sXHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJ0ZWFtdGFpbG9yLWNkbi5jb21cIixcclxuICAgIHBhZ2VTb3VyY2VEb21haW46IFwidGVhbXRhaWxvci5jb21cIixcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvLitcIlxyXG4gIH0sXHJcbiAgY2F0c29uZToge1xyXG4gICAgZG9tYWluczogW1wiY2F0c29uZS5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9jYXJlZXJzL1teL10rL2pvYnMvW14vXSsoPzovYXBwbHkpPy8/JFwiXHJcbiAgfSxcclxuICBtZXRhY2FyZWVyczoge1xyXG4gICAgZG9tYWluczogW1wibWV0YWNhcmVlcnMuY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vcHJvZmlsZS8oY3JlYXRlX2FwcGxpY2F0aW9ufGpvYl9kZXRhaWxzKS9bXi9dK1wiXHJcbiAgfSxcclxuICB5Y29tYmluYXRvcjogeyBkb21haW5zOiBbXCJ3d3cueWNvbWJpbmF0b3IuY29tXCJdIH0sXHJcbiAgcmlwcGxlaGlyZTogeyBkb21haW5zOiBbXCJyaXBwbGVoaXJlLmNvbVwiXSB9LFxyXG4gIHBlcnNvbmlvOiB7XHJcbiAgICBkb21haW5zOiBbXCJwZXJzb25pby5kZVwiLCBcInBlcnNvbmlvLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYi9bXi8/I10rKD86L2FwcGx5KT8vPyRcIlxyXG4gIH0sXHJcbiAgY2FyZWVyc3BhZ2U6IHsgZG9tYWluczogW1wiY2FyZWVycy1wYWdlLmNvbVwiXSB9LFxyXG4gIGNhcmVlcnBsdWc6IHtcclxuICAgIGRvbWFpbnM6IFtcclxuICAgICAgXCJjYXJlZXJwbHVnLmNvbVwiLFxyXG4gICAgICBcInNmYWdlbnRqb2JzLmNvbVwiLFxyXG4gICAgICBcInNmYWdlbnRjYXJlZXJzLmNvbVwiLFxyXG4gICAgICBcImFwc2NhcmVlcnBvcnRhbC5jb21cIlxyXG4gICAgXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvXFxcXGQrL2FwcHMvbmV3XCJcclxuICB9LFxyXG4gIGNhcmVlcnN3aXRod2F5bW86IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vY2FyZWVycy53aXRod2F5bW8uY29tL2pvYnMvKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvKD8hc2VhcmNoKD86L3wkKSlbXi9dK1wiXHJcbiAgfSxcclxuICBzdWNjZXNzZmFjdG9yczogeyBkb21haW5zOiBbXCJzdWNjZXNzZmFjdG9ycy5ldVwiLCBcInN1Y2Nlc3NmYWN0b3JzLmNvbVwiLCBcInNhcHNmLmNvbVwiXSB9LFxyXG4gIGNsZWFyY29tcGFueToge1xyXG4gICAgZG9tYWluczogW1wiY2xlYXJjb21wYW55LmNvbVwiXSxcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5ocm1kaXJlY3QuY29tL2VtcGxveW1lbnQvam9iLW9wZW5pbmcucGhwKlwiXVxyXG4gIH0sXHJcbiAgYXNoYnk6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5hc2hieWhxLmNvbS8qLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJqb2JzLmFzaGJ5aHEuY29tXCIsIFwiYXNoYnlfamlkXCJdLFxyXG4gICAgcXVlcnlQYXJhbXM6IFtcImFzaGJ5X2ppZFwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL1teL10rL1swLTlhLWZdezh9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezEyfVwiXHJcbiAgfSxcclxuICBpc29sdmVkOiB7XHJcbiAgICBkb21haW5zOiBbXCJpc29sdmVkaGlyZS5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi8oPzphcHBseS98am9icy98aWZyYW1lL21vYmlsZS98YWNjb3VudC8pXCJcclxuICB9LFxyXG4gIGpvYmRpdmE6IHsgcGF0dGVybnM6IFtcIio6Ly8qLmpvYmRpdmEuY29tL3BvcnRhbC8qXCJdIH0sXHJcbiAgaW50dWl0OiB7XHJcbiAgICBkb21haW5zOiBbXCJpbnR1aXQtcXVpei5hcHAuaW50dWl0LmNvbVwiXSxcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovL2pvYnMuaW50dWl0LmNvbS9qb2IvKlwiLFxyXG4gICAgICBcIio6Ly9pbnR1aXQuYXZhdHVyZS5uZXQvKi9leHRlcm5hbENhcmVlcnMvSm9iQXBwbGljYXRpb24qXCJcclxuICAgIF0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJpbnR1aXQtcXVpei5hcHAuaW50dWl0LmNvbVwiXVxyXG4gIH0sXHJcbiAgamFjb2JzOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMuamFjb2JzLmNvbS9lbl9VUy9jYXJlZXJzLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6XHJcbiAgICAgIFwiXi9lbl9VUy9jYXJlZXJzLyhKb2JEZXRhaWx8UmVnaXN0ZXJ8QXBwbGljYXRpb25Gb3JtfEFwcGxpY2F0aW9uUmV2aWV3KSg/Oi98JClcIlxyXG4gIH0sXHJcbiAgc21hcnRyZWNydWl0ZXJzOiB7XHJcbiAgICBkb21haW5zOiBbXCJzbWFydHIubWVcIl0sXHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly9qb2JzLnNtYXJ0cmVjcnVpdGVycy5jb20vb25lY2xpY2stdWkvY29tcGFueS8qXCIsXHJcbiAgICAgIFwiKjovL2pvYnMuc21hcnRyZWNydWl0ZXJzLmNvbS8qLypcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgcGhlbm9tOiB7XHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJBUFBMWV9mb3JtX3JlbmRlcmVyLmpzXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcInBoZW5vbXBlb3BsZS5jb21cIixcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovL2pvYnMuYnN3aGVhbHRoLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnV2YWhlYWx0aC5vcmcvKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5kdWtlaGVhbHRoLm9yZy8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly93d3cuam9icy5hYmJvdHQvKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hc3BlbmRlbnRhbC5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5maXZlYmVsb3cuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuZm91cnNlYXNvbnMuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMua2JyLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLmt1ZWhuZS1uYWdlbC5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYXN0ZXJjYXJkLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1jYWZlZS5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vam9icy1jZWUucHdjLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnJvY2hlLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly93d3cudmNhY2FyZWVycy5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy53YXN0ZWNvbm5lY3Rpb25zLmNvbS8qL2FwcGx5KlwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBjaXNjbzogeyBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMuY2lzY28uY29tLyovYXBwbHkqXCJdIH0sXHJcbiAgdGVzbGE6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5qb2JzLnRlc2xhLmNvbS8qXCIsIFwiKjovLyoudGVzbGEuY29tL2NhcmVlcnMvKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCIvYXBwbHlcIlxyXG4gIH0sXHJcbiAgYW1hem9uOiB7IHBhdHRlcm5zOiBbXCIqOi8vKi5hbWF6b24uam9icy8qXCJdLCBwYXRoUmVnZXg6IFwiL2pvYnMvW1xcXFx3LV0rL2FwcGx5XCIgfSxcclxuICBhbWF6b251bml2ZXJzaXR5OiB7IHBhdHRlcm5zOiBbXCIqOi8vKi5hbWF6b251bml2ZXJzaXR5LmpvYnMvcHJvZmlsZSpcIl0gfSxcclxuICB1YmVyOiB7XHJcbiAgICBkb21haW5zOiBbXCJ1YmVyLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDpcclxuICAgICAgXCJeLyg/Oig/Oig/OlteL10rLyl7MSwyfSk/Y2FyZWVycy8oPzphcHBseSg/Oi98JCl8bGlzdC9bXi8/I10rKXwoPzpbXi9dKy8pP2pvYnMvW14vPyNdKy8/JClcIlxyXG4gIH0sXHJcbiAgdGlrdG9rOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLmxpZmVhdHRpa3Rvay5jb20vcmVzdW1lKlwiLFxyXG4gICAgICBcIio6Ly8qLnRpa3Rva3VzZHMuY29tLyovcmVzdW1lKlwiLFxyXG4gICAgICBcIio6Ly8qLnRpa3Rva3VzZHMuY29tLyovcG9zaXRpb24vKi9kZXRhaWwqXCJcclxuICAgIF1cclxuICB9LFxyXG4gIGJ5dGVkYW5jZToge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vKi5qb2JzLmJ5dGVkYW5jZS5jb20vZW4vcmVzdW1lKlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLmJ5dGVkYW5jZS5jb20vKi8qLyovZGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLmJ5dGVkYW5jZS5jb20vKi8qLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2pvYnMuYnl0ZWRhbmNlLmNvbS8qLyovYXBwbGllZCpcIixcclxuICAgICAgXCIqOi8vam9pbmJ5dGVkYW5jZS5jb20vc2VhcmNoLypcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgZ29vZ2xlOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2dvb2dsZS5jb20vYWJvdXQvY2FyZWVycy8qXCIsIFwiKjovLyouZ29vZ2xlLmNvbS9hYm91dC9jYXJlZXJzLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6XHJcbiAgICAgIFwiXi9hYm91dC9jYXJlZXJzL2FwcGxpY2F0aW9ucyg/Oi8oPzp1L1xcXFxkKy8pP2FwcGx5KD86L3wkKXwvam9icy9yZXN1bHRzL1teLz8jXSspXCIsXHJcbiAgICB1cmxSZWdleDogXCJeL2Fib3V0L2NhcmVlcnMvYXBwbGljYXRpb25zL2pvYnMvcmVzdWx0cyg/OlxcXFw/W14jXSopPyMuKls/JiNdamlkPVteJiNdK1wiXHJcbiAgfSxcclxuICBsZXZlcjoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9qb2JzLmxldmVyLmNvLyovKlwiLCBcIio6Ly9qb2JzLmV1LmxldmVyLmNvLyovKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImxldmVyLmNvXCJdLFxyXG4gICAgcXVlcnlQYXJhbXM6IFtcIkxldmVyQXBwSWRcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9bXi9dKy9bXi9dKyg/Oi9hcHBseSk/Lz8kXCJcclxuICB9LFxyXG4gIGpvYnZpdGU6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vam9icy5qb2J2aXRlLmNvbS8qL2pvYi8qXCIsIFwiKjovL2pvYnMuam9idml0ZS5jb20vKi9hcHBseSpcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJqb2JzLmpvYnZpdGUuY29tXCJdLFxyXG4gICAgcXVlcnlQYXJhbXM6IFtcImpvYnZpdGVpZnJhbWVcIl1cclxuICB9LFxyXG4gIGJyZWV6eTogeyBwYXR0ZXJuczogW1wiKjovLyouYnJlZXp5LmhyL3AvKlwiLCBcIio6Ly8qLmJyZWV6eS5oci8qL2FwcGx5KlwiXSB9LFxyXG4gIHdvcmthYmxlOiB7XHJcbiAgICBkb21haW5zOiBbXCJjYXJlZXJzLmFyYm9yLWVkdWNhdGlvbi5jb21cIl0sXHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2FwcGx5LndvcmthYmxlLmNvbS8qXCIsIFwiKjovL2pvYnMud29ya2FibGUuY29tLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJ3b3JrYWJsZS5jb21cIl0sXHJcbiAgICBxdWVyeVBhcmFtczogW1wic2VsZWN0ZWRKb2JJZFwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeLyg/OlteL10rL2ovW14vXSsoPzovYXBwbHkpPy8/JHwoPzpbYS16XXsyfS8pPyg/OnZpZXd8Y29tcGFueSkvW1xcXFx3LV0rKVwiXHJcbiAgfSxcclxuICBnb2hpcmU6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vam9icy5nb2hpcmUuaW8vKi8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiYXBwLmdvaGlyZS5pby93aWRnZXQvXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vW14vXSsvListXFxcXGQrLz8kXCJcclxuICB9LFxyXG4gIGJhbWJvb2hyOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouYmFtYm9vaHIuY29tL2pvYnMqXCIsIFwiKjovLyouYmFtYm9vaHIuY29tL2NhcmVlcnMqXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiYmFtYm9vaHIuY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vKD86am9ic3xjYXJlZXJzL1tcXFxcdy1dKlxcXFxkKVwiXHJcbiAgfSxcclxuICBicmFzc3Jpbmc6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5icmFzc3JpbmcuY29tL1RHbmV3VUkvKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImJyYXNzcmluZy5jb21cIl0sXHJcbiAgICB1cmxSZWdleDogXCIjKD86QXBwbHlwYWdlfGpvYkRldGFpbHM9KVwiXHJcbiAgfSxcclxuICBhZHA6IHtcclxuICAgIGRvbWFpbnM6IFtcIndvcmtmb3JjZW5vdy5hZHAuY29tXCJdLFxyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9yZWNydWl0aW5nLmFkcC5jb20vc3JjY2FyL3B1YmxpYy8qXCIsIFwiKjovL215am9icy5hZHAuY29tLyovY3gvKlwiXVxyXG4gIH0sXHJcbiAgb3JhY2xlY2xvdWQ6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyoub3JhY2xlY2xvdWQuY29tLyovQ2FuZGlkYXRlRXhwZXJpZW5jZS8qL3NpdGVzLyovam9iLypcIixcclxuICAgICAgXCIqOi8vKi5vcmFjbGVjbG91ZC5jb20vKi9DYW5kaWRhdGVFeHBlcmllbmNlLyovc2l0ZXMvKi8qL3ByZXZpZXcvKlwiLFxyXG4gICAgICBcIio6Ly8qLyovQ2FuZGlkYXRlRXhwZXJpZW5jZS8qL3NpdGVzLyovam9iLypcIixcclxuICAgICAgXCIqOi8vKi8qL0NhbmRpZGF0ZUV4cGVyaWVuY2UvKi9zaXRlcy8qLyovcHJldmlldy8qXCIsXHJcbiAgICAgIFwiKjovLyovKi9zaXRlcy8qL2pvYnMvcHJldmlldy8qL2FwcGx5LypcIlxyXG4gICAgXSxcclxuICAgIHBhdGhSZWdleDpcclxuICAgICAgXCIoPzovQ2FuZGlkYXRlRXhwZXJpZW5jZS8uKi9zaXRlcy9bXi9dKy9qb2IvW14vXSsoPzovYXBwbHkoPzovLiopPyk/Lz8kfC9hcHBseSlcIlxyXG4gIH0sXHJcbiAgdWx0aXBybzoge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vKi51bHRpcHJvLmNvbS8qL0pvYkJvYXJkLyovT3Bwb3J0dW5pdHlEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jb20vKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5QXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jb20vKi9Kb2JCb2FyZC8qL0FjY291bnQvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jYS8qL0pvYkJvYXJkLyovT3Bwb3J0dW5pdHlEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jYS8qL0pvYkJvYXJkLyovT3Bwb3J0dW5pdHlBcHBseSpcIixcclxuICAgICAgXCIqOi8vKi51bHRpcHJvLmNhLyovSm9iQm9hcmQvKi9BY2NvdW50L1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly8qLnJlYy5wcm8udWtnLm5ldC8qL0pvYkJvYXJkLyovT3Bwb3J0dW5pdHlEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovLyoucmVjLnByby51a2cubmV0LyovSm9iQm9hcmQvKi9PcHBvcnR1bml0eUFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLnJlYy5wcm8udWtnLm5ldC8qL0pvYkJvYXJkLyovQWNjb3VudC9SZWdpc3RlcipcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgcmlwcGxpbmc6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyoucmlwcGxpbmctYXRzLmNvbS9qb2IvKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vKi5yaXBwbGluZy1hdHMuY29tL2pvYnMvZW9wX3N1cnZleS8qXCJcclxuICAgIF0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJhdHMucmlwcGxpbmcuY29tXCJdXHJcbiAgfSxcclxuICByaXBwbGluZ0hvc3RlZDoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9hdHMucmlwcGxpbmcuY29tLyovam9icy8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vW14vXSsvam9icy9bXi9dKyg/Oi9hcHBseSg/Oi8uKik/KT8vPyRcIlxyXG4gIH0sXHJcbiAgZGF5Zm9yY2U6IHtcclxuICAgIGRvbWFpbnM6IFtcImpvYnMuZGF5Zm9yY2VoY20uY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vKD86W14vXSsvKStqb2JzL1teL10rKD86L2FwcGx5KD86Ly4qKT8pPy8/JFwiXHJcbiAgfSxcclxuICBkYXlmb3JjZUlkZW50aXR5OiB7XHJcbiAgICBwYXR0ZXJuczogW1wiaHR0cHM6Ly9kZmlkLmRheWZvcmNlaGNtLmNvbS9nbG9iYWxpZGVudGl0eS9hY2NvdW50LypcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9nbG9iYWxpZGVudGl0eS9hY2NvdW50Lyg/OnJlZ2lzdGVyfGxvZ2luKS8/JFwiXHJcbiAgfSxcclxuICB0YWxlbzoge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vKi50YWxlby5uZXQvKi9hcHBsaWNhdGlvbi5qc3MqXCIsXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0LyovZmxvdy5qc2YqXCIsXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0Lyovam9iYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0LyovYXRzL2NhcmVlcnMvKlwiLFxyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC9jYXJlZXJzZWN0aW9uLyovam9iZGV0YWlsLmZ0bCpcIixcclxuICAgICAgXCIqOi8vKi50YWxlby5uZXQvKi9odG1sUmVzb3VyY2VWaWV3ZXIuanNzKlwiLFxyXG4gICAgICBcIio6Ly8qLmJ1cm5zbWNkLmNvbS9hcHBseSpcIixcclxuICAgICAgXCIqOi8vKi5idXJuc21jZC5jb20vY2FyZWVyc2VjdGlvbi9hcHBsaWNhdGlvbi5qc3MqXCIsXHJcbiAgICAgIFwiKjovLyouYnVybnNtY2QuY29tL2NhcmVlcnNlY3Rpb24vZmxvdy5qc2YqXCIsXHJcbiAgICAgIFwiKjovLyouYnVybnNtY2QuY29tL2NhcmVlcnNlY3Rpb24vam9iYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyouYnVybnNtY2QuY29tL2NhcmVlcnNlY3Rpb24vaHRtbFJlc291cmNlVmlld2VyLmpzcypcIixcclxuICAgICAgXCIqOi8vdGFsZW50YWNxdWlzaXRpb24uM2RzLmNvbS8qL2FwcGxpY2F0aW9uLmpzcypcIixcclxuICAgICAgXCIqOi8vdGFsZW50YWNxdWlzaXRpb24uM2RzLmNvbS8qL2Zsb3cuanNmKlwiLFxyXG4gICAgICBcIio6Ly90YWxlbnRhY3F1aXNpdGlvbi4zZHMuY29tLyovam9iYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL3RhbGVudGFjcXVpc2l0aW9uLjNkcy5jb20vKi9hdHMvY2FyZWVycy8qXCIsXHJcbiAgICAgIFwiKjovL3RhbGVudGFjcXVpc2l0aW9uLjNkcy5jb20vKi9odG1sUmVzb3VyY2VWaWV3ZXIuanNzKlwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBlaWdodGZvbGQ6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5laWdodGZvbGQuYWkvY2FyZWVycypcIiwgXCIqOi8vKi5laWdodGZvbGQuYWkvY2FyZWVyaHViLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJlaWdodGZvbGQuYWlcIl0sXHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJlaWdodGZvbGRcIixcclxuICAgIHBhZ2VTb3VyY2VEb21haW46IFwiZWlnaHRmb2xkLmFpXCIsXHJcbiAgICB1cmxSZWdleDpcclxuICAgICAgXCIoPzpeL2NhcmVlcmh1Yi9leHBsb3JlL2pvYnMvKD8hYXBwbHkvPyg/Ols/I118JCkpW14vPyNdKy8/KD86Wz8jXS4qKT8kfF4vY2FyZWVyaHViL2V4cGxvcmUvam9icy9hcHBseS8/XFxcXD8oPz1bXiNdKlxcXFxicGlkPVteJiNdKylbXiNdKig/OiMuKik/JHxeL2NhcmVlcnMoPzovKD86am9iL1teLz8jXSsoPzovYXBwbHkpPyg/OlsvPyNdfCQpfGFwcGx5KD86Wy8/I118JCkpfFxcXFw/KD89KD86cGlkPVteJiNdK3xbXiNdKiZwaWQ9W14mI10rKSlbXiNdKig/OiMuKik/JCkpXCJcclxuICB9LFxyXG4gIGphenpocjogeyBwYXR0ZXJuczogW1wiKjovLyouYXBwbHl0b2pvYi5jb20vYXBwbHkvKlwiXSB9LFxyXG4gIHRyYWtzdGFyOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouaGlyZS50cmFrc3Rhci5jb20vam9icy8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vam9icy9bXi9dKy8/JFwiXHJcbiAgfSxcclxuICBmcmVzaHRlYW06IHsgcGF0dGVybnM6IFtcIio6Ly8qLmZyZXNodGVhbS5jb20vam9icy8qXCJdIH0sXHJcbiAgcGlucG9pbnRocToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLnBpbnBvaW50aHEuY29tLyovcG9zdGluZ3MvKlwiLCBcIio6Ly8qLnBpbnBvaW50aHEuY29tL3Bvc3RpbmdzLypcIl0sXHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJwaW5wb2ludGhxXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcInBpbnBvaW50aHEuY29tXCJcclxuICB9LFxyXG4gIHJlY3J1aXRlZToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLnJlY3J1aXRlZS5jb20vKi8qXCJdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwicmVjcnVpdGVlXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcInJlY3J1aXRlZS5jb21cIlxyXG4gIH0sXHJcbiAgdHJpbmV0aGlyZTogeyBwYXR0ZXJuczogW1wiKjovL2FwcC50cmluZXRoaXJlLmNvbS9jb21wYW5pZXMvKi9qb2JzLypcIl0gfSxcclxuICBqb2JzY29yZToge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vY2FyZWVycy5qb2JzY29yZS5jb20vYXBwbHlfZmxvdy8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuam9ic2NvcmUuY29tL2NhcmVlcnMvKi9qb2JzLypcIlxyXG4gICAgXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImpvYnNjb3JlLmNvbVwiXVxyXG4gIH0sXHJcbiAgcGF5bG9jaXR5OiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyoucGF5bG9jaXR5LmNvbS9yZWNydWl0aW5nLypcIiwgXCIqOi8vKi5wYXlsb2NpdHkuY29tL1JlY3J1aXRpbmcvKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcInBheWxvY2l0eS5jb21cIl0sXHJcbiAgICB1cmxSZWdleDogXCJeL1tScl1lY3J1aXRpbmcvW0pqXW9icy8oPzpbQWFdcHBseS98W0RkXWV0YWlscy9bXi8/I10rKD86Wy8/I118JCkpXCJcclxuICB9LFxyXG4gIGF2YXR1cmU6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9BcHBsaWNhdGlvbk1ldGhvZHMqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9BcHBsaWNhdGlvblF1ZXN0aW9ucypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvTGlua2VkSW5BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9MaW5rZWRJbkFwcGxpY2F0aW9uRm9ybSpcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL1lvdXJJbmZvcm1hdGlvbipcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC9jYW1wdXNBcHBseSpcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL0dlbmVyYWxJbmZvKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0L2NhcmVlcnMvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0L2NhcmVlcnMvSm9iRGV0YWlsLypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL2NhcmVlcnMvSm9iRGV0YWlsLypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL0V4dGVybmFsL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC9jYXJlZXJzL0xvY2F0aW9uQW5kUHJvZmlsZS8qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9jYXJlZXJzL0xvY2F0aW9uQW5kUHJvZmlsZS8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0FwcGxpY2F0aW9uRm9ybSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9BcHBsaWNhdGlvblF1ZXN0aW9ucypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvQXBwbGljYXRpb25SZXZpZXcqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9HZW5lcmFsSW5mbypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9BcHBsaWNhdGlvbkRvdEtub2NrZWRPdXRXaXphcmQqXCIsXHJcbiAgICAgIFwiKjovL2FwcGx5LmRlbG9pdHRlLmNvbS8qL2NhcmVlcnMvKlwiLFxyXG4gICAgICBcIio6Ly9hcHBseS5kZWxvaXR0ZS5jb20vKi9FeHRlcm5hbC8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uRm9ybSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9BcHBsaWNhdGlvblF1ZXN0aW9ucypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25SZXZpZXcqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9JbnZpdGVUb0FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9HZW5lcmFsSW5mbypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9Kb2JEZXRhaWwvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9Mb2NhdGlvbkFuZFByb2ZpbGUvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovRXh0ZXJuYWwvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvSW52aXRlVG9BcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvSm9iRGV0YWlsLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvTG9jYXRpb25BbmRQcm9maWxlLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL0V4dGVybmFsL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL0pvYkFwcGxpY2F0aW9uKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uRm9ybSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9BcHBsaWNhdGlvblF1ZXN0aW9ucypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9HZW5lcmFsSW5mbypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9Zb3VySW5mb3JtYXRpb24qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9BcHBsaWNhdGlvbk1ldGhvZHMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9BcHBsaWNhdGlvblF1ZXN0aW9ucypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9JbnZpdGVUb0FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9Kb2JEZXRhaWwvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvTG9jYXRpb25BbmRQcm9maWxlLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovRXh0ZXJuYWwvSm9iRGV0YWlsKlwiXHJcbiAgICBdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwiYXZhdHVyZVwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJhdmF0dXJlLm5ldFwiXHJcbiAgfSxcclxuICBva3RhOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL3d3dy5va3RhLmNvbS9jb21wYW55L2NhcmVlcnMvKi8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vY29tcGFueS9jYXJlZXJzLyg/IWpvYi1saXN0aW5nKD86L3wkKSlcIlxyXG4gIH0sXHJcbiAgY29tZWV0OiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouY29tZWV0LmNvbS9qb2JzLyovKi8qLypcIiwgXCIqOi8vKi5jb21lZXQuY28vam9icy8qLyovYXBwbHkqXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiY29tZWV0LmNvXCIsIFwiY29tZWV0LmNvbVwiXVxyXG4gIH0sXHJcbiAgYXBwbGU6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vam9icy5hcHBsZS5jb20vKi9kZXRhaWxzLypcIiwgXCIqOi8vam9icy5hcHBsZS5jb20vYXBwLyovYXBwbHkvKlwiXVxyXG4gIH0sXHJcbiAgcG9seW1lcjogeyBwYXR0ZXJuczogW1wiKjovL2pvYnMucG9seW1lci5jby8qLypcIl0gfSxcclxuICByZWNydWl0ZXJmbG93OiB7XHJcbiAgICBkb21haW5zOiBbXCJyZWNydWl0ZXJmbG93LmNvbVwiXSxcclxuICAgIHBhZ2VTb3VyY2VLZXl3b3JkOiBcInJlY3J1aXRlcmZsb3cuY29tXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcInJlY3J1aXRlcmZsb3cuY29tXCIsXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9bXi9dKy9qb2JzL1teLz8jXStcIlxyXG4gIH0sXHJcbiAgY2FyZWVyc3RvYXN0dGFiOiB7IHBhdHRlcm5zOiBbXCIqOi8vY2FyZWVycy50b2FzdHRhYi5jb20vam9icypcIl0gfVxyXG59XHJcbiIsIi8vIEB0cy1ub2NoZWNrXHJcbi8qKlxyXG4gKiBLZWVwIGpyX2lkIGluIHRoZSBVUkwgYWNyb3NzIFNQQSByZWRpcmVjdHMuXHJcbiAqL1xyXG5cclxuY29uc3QgSlJfSURfUEFSQU0gPSBcImpyX2lkXCJcclxuY29uc3QgREVGQVVMVF9EVVJBVElPTl9NUyA9IDMwMDBcclxuY29uc3QgREVGQVVMVF9JTlRFUlZBTF9NUyA9IDEwMFxyXG5jb25zdCBERUZBVUxUX01BWF9SRVNUT1JBVElPTlMgPSA1XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2VlcEpvYklkSW5Vcmwoam9iSWQsIG9wdGlvbnMpIHtcclxuICBjb25zdCBkdXJhdGlvbk1zID0gb3B0aW9ucy5kdXJhdGlvbk1zID8/IERFRkFVTFRfRFVSQVRJT05fTVNcclxuICBjb25zdCBpbnRlcnZhbE1zID0gb3B0aW9ucy5pbnRlcnZhbE1zID8/IERFRkFVTFRfSU5URVJWQUxfTVNcclxuICBjb25zdCBtYXhSZXN0b3JhdGlvbnMgPSBvcHRpb25zLm1heFJlc3RvcmF0aW9ucyA/PyBERUZBVUxUX01BWF9SRVNUT1JBVElPTlNcclxuICBjb25zdCBzdGFydGVkQXQgPSBEYXRlLm5vdygpXHJcbiAgbGV0IHJlc3RvcmF0aW9uQ291bnQgPSAwXHJcblxyXG4gIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydGVkQXQgPiBkdXJhdGlvbk1zKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdXJsLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkgIT09IG9wdGlvbnMub3JpZ2luYWxIb3N0LnRvTG93ZXJDYXNlKCkgfHxcclxuICAgICAgICAob3B0aW9ucy5hbGxvd2VkUGF0aG5hbWUgJiYgdXJsLnBhdGhuYW1lICE9PSBvcHRpb25zLmFsbG93ZWRQYXRobmFtZSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5nZXQoSlJfSURfUEFSQU0pID09PSBqb2JJZCkgcmV0dXJuXHJcbiAgICAgIGlmIChyZXN0b3JhdGlvbkNvdW50ID49IG1heFJlc3RvcmF0aW9ucykge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoSlJfSURfUEFSQU0sIGpvYklkKVxyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUod2luZG93Lmhpc3Rvcnkuc3RhdGUsIFwiXCIsIHVybC50b1N0cmluZygpKVxyXG4gICAgICByZXN0b3JhdGlvbkNvdW50ICs9IDFcclxuICAgICAgb3B0aW9ucy5vblJlc3RvcmU/Lih7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHJlc3RvcmF0aW9uQ291bnQgfSlcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKVxyXG4gICAgfVxyXG4gIH0sIGludGVydmFsTXMpXHJcblxyXG4gIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJib290c3RyYXAuNGVjNjRjODQuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);