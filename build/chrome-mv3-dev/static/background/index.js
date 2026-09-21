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
})({"2i2v6":[function(require,module,exports) {
var u = globalThis.process?.argv || [];
var h = ()=>globalThis.process?.env || {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var b = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\.plasmo\\static\\background\\index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
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
function H(e) {
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
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function L(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", L), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", L), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    b();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _messaging = require("./messaging");
var _background = require("../../../src/background");

},{"./messaging":"gGuoe","../../../src/background":"kimL1"}],"gGuoe":[function(require,module,exports) {
// @ts-nocheck
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _acceptAutofillInstallAttribution = require("~background/messages/acceptAutofillInstallAttribution");
var _acceptAutofillInstallAttributionDefault = parcelHelpers.interopDefault(_acceptAutofillInstallAttribution);
var _activateHelperOnTab = require("~background/messages/activateHelperOnTab");
var _activateHelperOnTabDefault = parcelHelpers.interopDefault(_activateHelperOnTab);
var _consumeOracleEducationLovCapture = require("~background/messages/consumeOracleEducationLovCapture");
var _consumeOracleEducationLovCaptureDefault = parcelHelpers.interopDefault(_consumeOracleEducationLovCapture);
var _convertResumePdfToWord = require("~background/messages/convertResumePdfToWord");
var _convertResumePdfToWordDefault = parcelHelpers.interopDefault(_convertResumePdfToWord);
var _countExternalJobIds = require("~background/messages/countExternalJobIds");
var _countExternalJobIdsDefault = parcelHelpers.interopDefault(_countExternalJobIds);
var _flushAutofillInstallAttribution = require("~background/messages/flushAutofillInstallAttribution");
var _flushAutofillInstallAttributionDefault = parcelHelpers.interopDefault(_flushAutofillInstallAttribution);
var _generateAutofillCoverLetter = require("~background/messages/generateAutofillCoverLetter");
var _generateAutofillCoverLetterDefault = parcelHelpers.interopDefault(_generateAutofillCoverLetter);
var _getAbUser = require("~background/messages/getAbUser");
var _getAbUserDefault = parcelHelpers.interopDefault(_getAbUser);
var _getAddressSuggestions = require("~background/messages/getAddressSuggestions");
var _getAddressSuggestionsDefault = parcelHelpers.interopDefault(_getAddressSuggestions);
var _getAgentCoverLetter = require("~background/messages/getAgentCoverLetter");
var _getAgentCoverLetterDefault = parcelHelpers.interopDefault(_getAgentCoverLetter);
var _getAgentQLRule = require("~background/messages/getAgentQLRule");
var _getAgentQLRuleDefault = parcelHelpers.interopDefault(_getAgentQLRule);
var _getAgentTailorResume = require("~background/messages/getAgentTailorResume");
var _getAgentTailorResumeDefault = parcelHelpers.interopDefault(_getAgentTailorResume);
var _getAutofillConfig = require("~background/messages/getAutofillConfig");
var _getAutofillConfigDefault = parcelHelpers.interopDefault(_getAutofillConfig);
var _getAutofillInfo = require("~background/messages/getAutofillInfo");
var _getAutofillInfoDefault = parcelHelpers.interopDefault(_getAutofillInfo);
var _getBaseResumeBlob = require("~background/messages/getBaseResumeBlob");
var _getBaseResumeBlobDefault = parcelHelpers.interopDefault(_getBaseResumeBlob);
var _getCompanyNameList = require("~background/messages/getCompanyNameList");
var _getCompanyNameListDefault = parcelHelpers.interopDefault(_getCompanyNameList);
var _getCoverLetterBlob = require("~background/messages/getCoverLetterBlob");
var _getCoverLetterBlobDefault = parcelHelpers.interopDefault(_getCoverLetterBlob);
var _getCreditFeed = require("~background/messages/getCreditFeed");
var _getCreditFeedDefault = parcelHelpers.interopDefault(_getCreditFeed);
var _getCreditsLeft = require("~background/messages/getCreditsLeft");
var _getCreditsLeftDefault = parcelHelpers.interopDefault(_getCreditsLeft);
var _getCreditSwitchStatus = require("~background/messages/getCreditSwitchStatus");
var _getCreditSwitchStatusDefault = parcelHelpers.interopDefault(_getCreditSwitchStatus);
var _getCurrentCoverLetter = require("~background/messages/getCurrentCoverLetter");
var _getCurrentCoverLetterDefault = parcelHelpers.interopDefault(_getCurrentCoverLetter);
var _getCurrentFillAnswer = require("~background/messages/getCurrentFillAnswer");
var _getCurrentFillAnswerDefault = parcelHelpers.interopDefault(_getCurrentFillAnswer);
var _getCurrentTabId = require("~background/messages/getCurrentTabId");
var _getCurrentTabIdDefault = parcelHelpers.interopDefault(_getCurrentTabId);
var _getCurrentTabUrl = require("~background/messages/getCurrentTabUrl");
var _getCurrentTabUrlDefault = parcelHelpers.interopDefault(_getCurrentTabUrl);
var _getDegreeSuggestions = require("~background/messages/getDegreeSuggestions");
var _getDegreeSuggestionsDefault = parcelHelpers.interopDefault(_getDegreeSuggestions);
var _getExternalJobId = require("~background/messages/getExternalJobId");
var _getExternalJobIdDefault = parcelHelpers.interopDefault(_getExternalJobId);
var _getExternalJobStatus = require("~background/messages/getExternalJobStatus");
var _getExternalJobStatusDefault = parcelHelpers.interopDefault(_getExternalJobStatus);
var _getGptResults = require("~background/messages/getGptResults");
var _getGptResultsDefault = parcelHelpers.interopDefault(_getGptResults);
var _getJobBannerDetail = require("~background/messages/getJobBannerDetail");
var _getJobBannerDetailDefault = parcelHelpers.interopDefault(_getJobBannerDetail);
var _getJobDetail = require("~background/messages/getJobDetail");
var _getJobDetailDefault = parcelHelpers.interopDefault(_getJobDetail);
var _getMajorSuggestions = require("~background/messages/getMajorSuggestions");
var _getMajorSuggestionsDefault = parcelHelpers.interopDefault(_getMajorSuggestions);
var _getOpenCitiesByRegion = require("~background/messages/getOpenCitiesByRegion");
var _getOpenCitiesByRegionDefault = parcelHelpers.interopDefault(_getOpenCitiesByRegion);
var _getOpenRegions = require("~background/messages/getOpenRegions");
var _getOpenRegionsDefault = parcelHelpers.interopDefault(_getOpenRegions);
var _getPageLinkedinJobInfo = require("~background/messages/getPageLinkedinJobInfo");
var _getPageLinkedinJobInfoDefault = parcelHelpers.interopDefault(_getPageLinkedinJobInfo);
var _getPaymentPrice = require("~background/messages/getPaymentPrice");
var _getPaymentPriceDefault = parcelHelpers.interopDefault(_getPaymentPrice);
var _getReleaseConfig = require("~background/messages/getReleaseConfig");
var _getReleaseConfigDefault = parcelHelpers.interopDefault(_getReleaseConfig);
var _getResumeBlob = require("~background/messages/getResumeBlob");
var _getResumeBlobDefault = parcelHelpers.interopDefault(_getResumeBlob);
var _getResumeCollection = require("~background/messages/getResumeCollection");
var _getResumeCollectionDefault = parcelHelpers.interopDefault(_getResumeCollection);
var _getResumeDiagnose = require("~background/messages/getResumeDiagnose");
var _getResumeDiagnoseDefault = parcelHelpers.interopDefault(_getResumeDiagnose);
var _getResumeInfo = require("~background/messages/getResumeInfo");
var _getResumeInfoDefault = parcelHelpers.interopDefault(_getResumeInfo);
var _getSimilarJobs = require("~background/messages/getSimilarJobs");
var _getSimilarJobsDefault = parcelHelpers.interopDefault(_getSimilarJobs);
var _getSiteToken = require("~background/messages/getSiteToken");
var _getSiteTokenDefault = parcelHelpers.interopDefault(_getSiteToken);
var _getTabContext = require("~background/messages/getTabContext");
var _getTabContextDefault = parcelHelpers.interopDefault(_getTabContext);
var _getTabJobId = require("~background/messages/getTabJobId");
var _getTabJobIdDefault = parcelHelpers.interopDefault(_getTabJobId);
var _getTailorResume = require("~background/messages/getTailorResume");
var _getTailorResumeDefault = parcelHelpers.interopDefault(_getTailorResume);
var _getTailorResumeBlob = require("~background/messages/getTailorResumeBlob");
var _getTailorResumeBlobDefault = parcelHelpers.interopDefault(_getTailorResumeBlob);
var _getTailorResumeFileName = require("~background/messages/getTailorResumeFileName");
var _getTailorResumeFileNameDefault = parcelHelpers.interopDefault(_getTailorResumeFileName);
var _getUserProfile = require("~background/messages/getUserProfile");
var _getUserProfileDefault = parcelHelpers.interopDefault(_getUserProfile);
var _getVersionUpdateState = require("~background/messages/getVersionUpdateState");
var _getVersionUpdateStateDefault = parcelHelpers.interopDefault(_getVersionUpdateState);
var _injectAshbyFieldMetadata = require("~background/messages/injectAshbyFieldMetadata");
var _injectAshbyFieldMetadataDefault = parcelHelpers.interopDefault(_injectAshbyFieldMetadata);
var _injectHelperAppBundle = require("~background/messages/injectHelperAppBundle");
var _injectHelperAppBundleDefault = parcelHelpers.interopDefault(_injectHelperAppBundle);
var _injectReactSelectFiber = require("~background/messages/injectReactSelectFiber");
var _injectReactSelectFiberDefault = parcelHelpers.interopDefault(_injectReactSelectFiber);
var _injectRecruiteeFiber = require("~background/messages/injectRecruiteeFiber");
var _injectRecruiteeFiberDefault = parcelHelpers.interopDefault(_injectRecruiteeFiber);
var _injectWorkableCheckbox = require("~background/messages/injectWorkableCheckbox");
var _injectWorkableCheckboxDefault = parcelHelpers.interopDefault(_injectWorkableCheckbox);
var _injectWorkdayFiber = require("~background/messages/injectWorkdayFiber");
var _injectWorkdayFiberDefault = parcelHelpers.interopDefault(_injectWorkdayFiber);
var _installMainWorldAlertSuppressor = require("~background/messages/installMainWorldAlertSuppressor");
var _installMainWorldAlertSuppressorDefault = parcelHelpers.interopDefault(_installMainWorldAlertSuppressor);
var _interceptFileInputClick = require("~background/messages/interceptFileInputClick");
var _interceptFileInputClickDefault = parcelHelpers.interopDefault(_interceptFileInputClick);
var _kulaCompanyDom = require("~background/messages/kulaCompanyDom");
var _kulaCompanyDomDefault = parcelHelpers.interopDefault(_kulaCompanyDom);
var _learnAnswers = require("~background/messages/learnAnswers");
var _learnAnswersDefault = parcelHelpers.interopDefault(_learnAnswers);
var _markRefreshRequested = require("~background/messages/markRefreshRequested");
var _markRefreshRequestedDefault = parcelHelpers.interopDefault(_markRefreshRequested);
var _markWhatsNewRead = require("~background/messages/markWhatsNewRead");
var _markWhatsNewReadDefault = parcelHelpers.interopDefault(_markWhatsNewRead);
var _openAgentApplyTab = require("~background/messages/openAgentApplyTab");
var _openAgentApplyTabDefault = parcelHelpers.interopDefault(_openAgentApplyTab);
var _openBrassringFullPageAutocomplete = require("~background/messages/openBrassringFullPageAutocomplete");
var _openBrassringFullPageAutocompleteDefault = parcelHelpers.interopDefault(_openBrassringFullPageAutocomplete);
var _openDayforcePolicyTab = require("~background/messages/openDayforcePolicyTab");
var _openDayforcePolicyTabDefault = parcelHelpers.interopDefault(_openDayforcePolicyTab);
var _parsePageMarkdown = require("~background/messages/parsePageMarkdown");
var _parsePageMarkdownDefault = parcelHelpers.interopDefault(_parsePageMarkdown);
var _ping = require("~background/messages/ping");
var _pingDefault = parcelHelpers.interopDefault(_ping);
var _postApplyJob = require("~background/messages/postApplyJob");
var _postApplyJobDefault = parcelHelpers.interopDefault(_postApplyJob);
var _postAutofillAnswerPairAttributed = require("~background/messages/postAutofillAnswerPairAttributed");
var _postAutofillAnswerPairAttributedDefault = parcelHelpers.interopDefault(_postAutofillAnswerPairAttributed);
var _postAutofillFeedback = require("~background/messages/postAutofillFeedback");
var _postAutofillFeedbackDefault = parcelHelpers.interopDefault(_postAutofillFeedback);
var _postEventSubmit = require("~background/messages/postEventSubmit");
var _postEventSubmitDefault = parcelHelpers.interopDefault(_postEventSubmit);
var _postExternalJobImport = require("~background/messages/postExternalJobImport");
var _postExternalJobImportDefault = parcelHelpers.interopDefault(_postExternalJobImport);
var _postPluginFeedback = require("~background/messages/postPluginFeedback");
var _postPluginFeedbackDefault = parcelHelpers.interopDefault(_postPluginFeedback);
var _postSimilarJobPopupExposure = require("~background/messages/postSimilarJobPopupExposure");
var _postSimilarJobPopupExposureDefault = parcelHelpers.interopDefault(_postSimilarJobPopupExposure);
var _prepareMetaCareersLocationCapture = require("~background/messages/prepareMetaCareersLocationCapture");
var _prepareMetaCareersLocationCaptureDefault = parcelHelpers.interopDefault(_prepareMetaCareersLocationCapture);
var _prepareOracleEducationLovCapture = require("~background/messages/prepareOracleEducationLovCapture");
var _prepareOracleEducationLovCaptureDefault = parcelHelpers.interopDefault(_prepareOracleEducationLovCapture);
var _preparePhenomSchoolCapture = require("~background/messages/preparePhenomSchoolCapture");
var _preparePhenomSchoolCaptureDefault = parcelHelpers.interopDefault(_preparePhenomSchoolCapture);
var _previewBaseResumeBlob = require("~background/messages/previewBaseResumeBlob");
var _previewBaseResumeBlobDefault = parcelHelpers.interopDefault(_previewBaseResumeBlob);
var _previewTailorResumeBlob = require("~background/messages/previewTailorResumeBlob");
var _previewTailorResumeBlobDefault = parcelHelpers.interopDefault(_previewTailorResumeBlob);
var _regenerateAnswer = require("~background/messages/regenerateAnswer");
var _regenerateAnswerDefault = parcelHelpers.interopDefault(_regenerateAnswer);
var _reloadExtension = require("~background/messages/reloadExtension");
var _reloadExtensionDefault = parcelHelpers.interopDefault(_reloadExtension);
var _reportAutofillFirstUseAttribution = require("~background/messages/reportAutofillFirstUseAttribution");
var _reportAutofillFirstUseAttributionDefault = parcelHelpers.interopDefault(_reportAutofillFirstUseAttribution);
var _requestExtensionUpdateCheck = require("~background/messages/requestExtensionUpdateCheck");
var _requestExtensionUpdateCheckDefault = parcelHelpers.interopDefault(_requestExtensionUpdateCheck);
var _resolveAddressSuggestion = require("~background/messages/resolveAddressSuggestion");
var _resolveAddressSuggestionDefault = parcelHelpers.interopDefault(_resolveAddressSuggestion);
var _resolveAutofillClientSearchStep = require("~background/messages/resolveAutofillClientSearchStep");
var _resolveAutofillClientSearchStepDefault = parcelHelpers.interopDefault(_resolveAutofillClientSearchStep);
var _resolveAutofillOperation = require("~background/messages/resolveAutofillOperation");
var _resolveAutofillOperationDefault = parcelHelpers.interopDefault(_resolveAutofillOperation);
var _resolveCapturedMetaCareersLocation = require("~background/messages/resolveCapturedMetaCareersLocation");
var _resolveCapturedMetaCareersLocationDefault = parcelHelpers.interopDefault(_resolveCapturedMetaCareersLocation);
var _resolveCapturedPhenomSchool = require("~background/messages/resolveCapturedPhenomSchool");
var _resolveCapturedPhenomSchoolDefault = parcelHelpers.interopDefault(_resolveCapturedPhenomSchool);
var _resolveJobIdByUrl = require("~background/messages/resolveJobIdByUrl");
var _resolveJobIdByUrlDefault = parcelHelpers.interopDefault(_resolveJobIdByUrl);
var _saveAutofillInfo = require("~background/messages/saveAutofillInfo");
var _saveAutofillInfoDefault = parcelHelpers.interopDefault(_saveAutofillInfo);
var _saveExternalJobId = require("~background/messages/saveExternalJobId");
var _saveExternalJobIdDefault = parcelHelpers.interopDefault(_saveExternalJobId);
var _saveJobDetail = require("~background/messages/saveJobDetail");
var _saveJobDetailDefault = parcelHelpers.interopDefault(_saveJobDetail);
var _saveSubmitStatus = require("~background/messages/saveSubmitStatus");
var _saveSubmitStatusDefault = parcelHelpers.interopDefault(_saveSubmitStatus);
var _searchIcimsProfileOptions = require("~background/messages/searchIcimsProfileOptions");
var _searchIcimsProfileOptionsDefault = parcelHelpers.interopDefault(_searchIcimsProfileOptions);
var _selectIcimsProfileOption = require("~background/messages/selectIcimsProfileOption");
var _selectIcimsProfileOptionDefault = parcelHelpers.interopDefault(_selectIcimsProfileOption);
var _setTabJobId = require("~background/messages/setTabJobId");
var _setTabJobIdDefault = parcelHelpers.interopDefault(_setTabJobId);
var _updateAutofillSection = require("~background/messages/updateAutofillSection");
var _updateAutofillSectionDefault = parcelHelpers.interopDefault(_updateAutofillSection);
var _updateResumeCollection = require("~background/messages/updateResumeCollection");
var _updateResumeCollectionDefault = parcelHelpers.interopDefault(_updateResumeCollection);
var _uploadBrassringProfileBuilderFile = require("~background/messages/uploadBrassringProfileBuilderFile");
var _uploadBrassringProfileBuilderFileDefault = parcelHelpers.interopDefault(_uploadBrassringProfileBuilderFile);
var _waitForPhenomSchoolCapture = require("~background/messages/waitForPhenomSchoolCapture");
var _waitForPhenomSchoolCaptureDefault = parcelHelpers.interopDefault(_waitForPhenomSchoolCapture);
globalThis.__plasmoInternalPortMap = new Map();
chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse)=>{
    request?.name;
    return true;
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    switch(request.name){
        case "acceptAutofillInstallAttribution":
            (0, _acceptAutofillInstallAttributionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "activateHelperOnTab":
            (0, _activateHelperOnTabDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "consumeOracleEducationLovCapture":
            (0, _consumeOracleEducationLovCaptureDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "convertResumePdfToWord":
            (0, _convertResumePdfToWordDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "countExternalJobIds":
            (0, _countExternalJobIdsDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "flushAutofillInstallAttribution":
            (0, _flushAutofillInstallAttributionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "generateAutofillCoverLetter":
            (0, _generateAutofillCoverLetterDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getAbUser":
            (0, _getAbUserDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getAddressSuggestions":
            (0, _getAddressSuggestionsDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getAgentCoverLetter":
            (0, _getAgentCoverLetterDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getAgentQLRule":
            (0, _getAgentQLRuleDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getAgentTailorResume":
            (0, _getAgentTailorResumeDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getAutofillConfig":
            (0, _getAutofillConfigDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getAutofillInfo":
            (0, _getAutofillInfoDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getBaseResumeBlob":
            (0, _getBaseResumeBlobDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getCompanyNameList":
            (0, _getCompanyNameListDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getCoverLetterBlob":
            (0, _getCoverLetterBlobDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getCreditFeed":
            (0, _getCreditFeedDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getCreditsLeft":
            (0, _getCreditsLeftDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getCreditSwitchStatus":
            (0, _getCreditSwitchStatusDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getCurrentCoverLetter":
            (0, _getCurrentCoverLetterDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getCurrentFillAnswer":
            (0, _getCurrentFillAnswerDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getCurrentTabId":
            (0, _getCurrentTabIdDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getCurrentTabUrl":
            (0, _getCurrentTabUrlDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getDegreeSuggestions":
            (0, _getDegreeSuggestionsDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getExternalJobId":
            (0, _getExternalJobIdDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getExternalJobStatus":
            (0, _getExternalJobStatusDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getGptResults":
            (0, _getGptResultsDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getJobBannerDetail":
            (0, _getJobBannerDetailDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getJobDetail":
            (0, _getJobDetailDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getMajorSuggestions":
            (0, _getMajorSuggestionsDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getOpenCitiesByRegion":
            (0, _getOpenCitiesByRegionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getOpenRegions":
            (0, _getOpenRegionsDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getPageLinkedinJobInfo":
            (0, _getPageLinkedinJobInfoDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getPaymentPrice":
            (0, _getPaymentPriceDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getReleaseConfig":
            (0, _getReleaseConfigDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getResumeBlob":
            (0, _getResumeBlobDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getResumeCollection":
            (0, _getResumeCollectionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getResumeDiagnose":
            (0, _getResumeDiagnoseDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getResumeInfo":
            (0, _getResumeInfoDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getSimilarJobs":
            (0, _getSimilarJobsDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getSiteToken":
            (0, _getSiteTokenDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getTabContext":
            (0, _getTabContextDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getTabJobId":
            (0, _getTabJobIdDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getTailorResume":
            (0, _getTailorResumeDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getTailorResumeBlob":
            (0, _getTailorResumeBlobDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getTailorResumeFileName":
            (0, _getTailorResumeFileNameDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getUserProfile":
            (0, _getUserProfileDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "getVersionUpdateState":
            (0, _getVersionUpdateStateDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "injectAshbyFieldMetadata":
            (0, _injectAshbyFieldMetadataDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "injectHelperAppBundle":
            (0, _injectHelperAppBundleDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "injectReactSelectFiber":
            (0, _injectReactSelectFiberDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "injectRecruiteeFiber":
            (0, _injectRecruiteeFiberDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "injectWorkableCheckbox":
            (0, _injectWorkableCheckboxDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "injectWorkdayFiber":
            (0, _injectWorkdayFiberDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "installMainWorldAlertSuppressor":
            (0, _installMainWorldAlertSuppressorDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "interceptFileInputClick":
            (0, _interceptFileInputClickDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "kulaCompanyDom":
            (0, _kulaCompanyDomDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "learnAnswers":
            (0, _learnAnswersDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "markRefreshRequested":
            (0, _markRefreshRequestedDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "markWhatsNewRead":
            (0, _markWhatsNewReadDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "openAgentApplyTab":
            (0, _openAgentApplyTabDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "openBrassringFullPageAutocomplete":
            (0, _openBrassringFullPageAutocompleteDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "openDayforcePolicyTab":
            (0, _openDayforcePolicyTabDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "parsePageMarkdown":
            (0, _parsePageMarkdownDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "ping":
            (0, _pingDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "postApplyJob":
            (0, _postApplyJobDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "postAutofillAnswerPairAttributed":
            (0, _postAutofillAnswerPairAttributedDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "postAutofillFeedback":
            (0, _postAutofillFeedbackDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "postEventSubmit":
            (0, _postEventSubmitDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "postExternalJobImport":
            (0, _postExternalJobImportDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "postPluginFeedback":
            (0, _postPluginFeedbackDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "postSimilarJobPopupExposure":
            (0, _postSimilarJobPopupExposureDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "prepareMetaCareersLocationCapture":
            (0, _prepareMetaCareersLocationCaptureDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "prepareOracleEducationLovCapture":
            (0, _prepareOracleEducationLovCaptureDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "preparePhenomSchoolCapture":
            (0, _preparePhenomSchoolCaptureDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "previewBaseResumeBlob":
            (0, _previewBaseResumeBlobDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "previewTailorResumeBlob":
            (0, _previewTailorResumeBlobDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "regenerateAnswer":
            (0, _regenerateAnswerDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "reloadExtension":
            (0, _reloadExtensionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "reportAutofillFirstUseAttribution":
            (0, _reportAutofillFirstUseAttributionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "requestExtensionUpdateCheck":
            (0, _requestExtensionUpdateCheckDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "resolveAddressSuggestion":
            (0, _resolveAddressSuggestionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "resolveAutofillClientSearchStep":
            (0, _resolveAutofillClientSearchStepDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "resolveAutofillOperation":
            (0, _resolveAutofillOperationDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "resolveCapturedMetaCareersLocation":
            (0, _resolveCapturedMetaCareersLocationDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "resolveCapturedPhenomSchool":
            (0, _resolveCapturedPhenomSchoolDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "resolveJobIdByUrl":
            (0, _resolveJobIdByUrlDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "saveAutofillInfo":
            (0, _saveAutofillInfoDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "saveExternalJobId":
            (0, _saveExternalJobIdDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "saveJobDetail":
            (0, _saveJobDetailDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "saveSubmitStatus":
            (0, _saveSubmitStatusDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "searchIcimsProfileOptions":
            (0, _searchIcimsProfileOptionsDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "selectIcimsProfileOption":
            (0, _selectIcimsProfileOptionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "setTabJobId":
            (0, _setTabJobIdDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "updateAutofillSection":
            (0, _updateAutofillSectionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "updateResumeCollection":
            (0, _updateResumeCollectionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "uploadBrassringProfileBuilderFile":
            (0, _uploadBrassringProfileBuilderFileDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "waitForPhenomSchoolCapture":
            (0, _waitForPhenomSchoolCaptureDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        default:
            break;
    }
    return true;
});
chrome.runtime.onConnect.addListener(function(port) {
    globalThis.__plasmoInternalPortMap.set(port.name, port);
    port.onMessage.addListener(function(request) {
        port.name;
    });
});

},{"~background/messages/acceptAutofillInstallAttribution":"ccbTs","~background/messages/activateHelperOnTab":"dTamR","~background/messages/consumeOracleEducationLovCapture":"2i48w","~background/messages/convertResumePdfToWord":"jyzHv","~background/messages/countExternalJobIds":"4dlfp","~background/messages/flushAutofillInstallAttribution":"k22qr","~background/messages/generateAutofillCoverLetter":"4H7FZ","~background/messages/getAbUser":"j95gs","~background/messages/getAddressSuggestions":"8SnWK","~background/messages/getAgentCoverLetter":"9QmNG","~background/messages/getAgentQLRule":"66qsD","~background/messages/getAgentTailorResume":"iucsd","~background/messages/getAutofillConfig":"lwNg1","~background/messages/getAutofillInfo":"etznj","~background/messages/getBaseResumeBlob":"5fWaa","~background/messages/getCompanyNameList":"5Oy7G","~background/messages/getCoverLetterBlob":"429Q5","~background/messages/getCreditFeed":"5HlZl","~background/messages/getCreditsLeft":"4NlXQ","~background/messages/getCreditSwitchStatus":"bCwt0","~background/messages/getCurrentCoverLetter":"8MKE2","~background/messages/getCurrentFillAnswer":"4Q79V","~background/messages/getCurrentTabId":"khUrO","~background/messages/getCurrentTabUrl":"i5VU9","~background/messages/getDegreeSuggestions":"frfxe","~background/messages/getExternalJobId":"djptI","~background/messages/getExternalJobStatus":"67xsX","~background/messages/getGptResults":"4qZmt","~background/messages/getJobBannerDetail":"dej2B","~background/messages/getJobDetail":"7k2HI","~background/messages/getMajorSuggestions":"8IGK5","~background/messages/getOpenCitiesByRegion":"bDQBa","~background/messages/getOpenRegions":"j1GMZ","~background/messages/getPageLinkedinJobInfo":"kyzkM","~background/messages/getPaymentPrice":"hulLn","~background/messages/getReleaseConfig":"6IlOX","~background/messages/getResumeBlob":"1fz8D","~background/messages/getResumeCollection":"4LqFS","~background/messages/getResumeDiagnose":"hsOno","~background/messages/getResumeInfo":"4rS0H","~background/messages/getSimilarJobs":"04qkk","~background/messages/getSiteToken":"1NRjw","~background/messages/getTabContext":"iQ4cn","~background/messages/getTabJobId":"d6Vvg","~background/messages/getTailorResume":"bhrND","~background/messages/getTailorResumeBlob":"baD7V","~background/messages/getTailorResumeFileName":"jXPYF","~background/messages/getUserProfile":"98SkO","~background/messages/getVersionUpdateState":"lhPqw","~background/messages/injectAshbyFieldMetadata":"k0hTD","~background/messages/injectHelperAppBundle":"dWkE2","~background/messages/injectReactSelectFiber":"1D3w0","~background/messages/injectRecruiteeFiber":"5TGWG","~background/messages/injectWorkableCheckbox":"h8XLK","~background/messages/injectWorkdayFiber":"9DukL","~background/messages/installMainWorldAlertSuppressor":"iD4c3","~background/messages/interceptFileInputClick":"7q19v","~background/messages/kulaCompanyDom":"jjxIg","~background/messages/learnAnswers":"lmIy3","~background/messages/markRefreshRequested":"hVZ3t","~background/messages/markWhatsNewRead":"fe7Z6","~background/messages/openAgentApplyTab":"gCFbI","~background/messages/openBrassringFullPageAutocomplete":"aAauv","~background/messages/openDayforcePolicyTab":"6rsOp","~background/messages/parsePageMarkdown":"aWRCQ","~background/messages/ping":"eQJct","~background/messages/postApplyJob":"6Vrzm","~background/messages/postAutofillAnswerPairAttributed":"lr7El","~background/messages/postAutofillFeedback":"jJgDk","~background/messages/postEventSubmit":"asjhc","~background/messages/postExternalJobImport":"AvTM0","~background/messages/postPluginFeedback":"3uA6Z","~background/messages/postSimilarJobPopupExposure":"e3AYM","~background/messages/prepareMetaCareersLocationCapture":"hWkEU","~background/messages/prepareOracleEducationLovCapture":"21sUf","~background/messages/preparePhenomSchoolCapture":"jjUaW","~background/messages/previewBaseResumeBlob":"eDw8J","~background/messages/previewTailorResumeBlob":"hWzia","~background/messages/regenerateAnswer":"ce4OD","~background/messages/reloadExtension":"ezLiA","~background/messages/reportAutofillFirstUseAttribution":"3Tvcc","~background/messages/requestExtensionUpdateCheck":"lBm2x","~background/messages/resolveAddressSuggestion":"6iwT2","~background/messages/resolveAutofillClientSearchStep":"baSvW","~background/messages/resolveAutofillOperation":"mxjqE","~background/messages/resolveCapturedMetaCareersLocation":"5N3CK","~background/messages/resolveCapturedPhenomSchool":"8UYRG","~background/messages/resolveJobIdByUrl":"4RWjG","~background/messages/saveAutofillInfo":"bSrWZ","~background/messages/saveExternalJobId":"2i3dL","~background/messages/saveJobDetail":"8mahq","~background/messages/saveSubmitStatus":"gxJFI","~background/messages/searchIcimsProfileOptions":"1Typx","~background/messages/selectIcimsProfileOption":"2jtw4","~background/messages/setTabJobId":"iMbPj","~background/messages/updateAutofillSection":"azWRy","~background/messages/updateResumeCollection":"k2B8P","~background/messages/uploadBrassringProfileBuilderFile":"73d8c","~background/messages/waitForPhenomSchoolCapture":"7f40R","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"ccbTs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/acceptAutofillInstallAttribution.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "acceptAutofillInstallAttribution",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iIXqM":[function(require,module,exports) {
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

},{}],"dTamR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const HELPER_BUNDLE = "assets/helper-app.js";
/**
 * Activate the helper on a tab from the popup.
 *
 * "Receiving end does not exist" means no content script is listening
 * (page opened before the extension loaded, or CS not injected yet).
 * Re-injecting Plasmo's CS via scripting often still fails to attach
 * listeners, so we fall back to injecting the helper bundle directly.
 */ async function pingIconClicked(tabId) {
    await chrome.tabs.sendMessage(tabId, {
        message: "iconClicked"
    });
}
async function injectHelperDirectly(tabId) {
    await chrome.scripting.executeScript({
        target: {
            tabId,
            allFrames: true
        },
        files: [
            HELPER_BUNDLE
        ],
        world: "ISOLATED"
    });
}
function isRestrictedUrl(url) {
    if (!url) return true;
    return /^(chrome|chrome-extension|edge|about|devtools|view-source):/i.test(url);
}
const handler = async (req, res)=>{
    try {
        const tabId = req.body?.tabId;
        if (typeof tabId !== "number") {
            res.send({
                success: false,
                error: "missing_tab"
            });
            return;
        }
        const tab = await chrome.tabs.get(tabId);
        if (isRestrictedUrl(tab.url)) {
            res.send({
                success: false,
                error: "Open a job application page (not a browser internal page)."
            });
            return;
        }
        try {
            await pingIconClicked(tabId);
            res.send({
                success: true,
                mode: "content_script"
            });
            return;
        } catch (pingError) {
            console.warn("[activateHelperOnTab] content script missing, injecting helper directly:", pingError instanceof Error ? pingError.message : pingError);
        }
        await injectHelperDirectly(tabId);
        res.send({
            success: true,
            mode: "direct_inject"
        });
    } catch (error) {
        console.error("[activateHelperOnTab] failed:", error);
        res.send({
            success: false,
            error: error instanceof Error ? error.message : "Could not activate helper \u2014 reload the page and try again."
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"2i48w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/consumeOracleEducationLovCapture.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "consumeOracleEducationLovCapture",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"jyzHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/convertResumePdfToWord.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "convertResumePdfToWord",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4dlfp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/countExternalJobIds.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "countExternalJobIds",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"k22qr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/flushAutofillInstallAttribution.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "flushAutofillInstallAttribution",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4H7FZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/generateAutofillCoverLetter.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "generateAutofillCoverLetter",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"j95gs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getAbUser.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getAbUser",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"8SnWK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getAddressSuggestions.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getAddressSuggestions",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"9QmNG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getAgentCoverLetter.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getAgentCoverLetter",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"66qsD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getAgentQLRule.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getAgentQLRule",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iucsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getAgentTailorResume.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getAgentTailorResume",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"lwNg1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getAutofillConfig.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getAutofillConfig",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"etznj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/**
 * Returns autofill payload for the selected team profile.
 * Body: { forceRefresh?: boolean, profileId?: string }
 */ const handler = async (req, res)=>{
    try {
        const profileId = typeof req.body?.profileId === "string" ? req.body.profileId : null;
        const autofillInfo = await (0, _teamClient.fetchAutofillInfo)(profileId);
        if (!autofillInfo) {
            res.send({
                ok: false,
                autofillInfo: null,
                message: "No profile selected or team hub not connected. Open extension options."
            });
            return;
        }
        res.send({
            ok: true,
            data: autofillInfo,
            autofillInfo,
            autoUpdate: true,
            revision: null
        });
    } catch (err) {
        res.send({
            ok: false,
            autofillInfo: null,
            message: err instanceof Error ? err.message : "fetch_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"7DK0L":[function(require,module,exports) {
/**
 * Team Autofill Hub client \u2014 talks to team-site /api with session JWT or API token.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TEAM_SETTINGS_KEY", ()=>TEAM_SETTINGS_KEY);
parcelHelpers.export(exports, "DEFAULT_TEAM_SETTINGS", ()=>DEFAULT_TEAM_SETTINGS);
parcelHelpers.export(exports, "getTeamSettings", ()=>getTeamSettings);
parcelHelpers.export(exports, "saveTeamSettings", ()=>saveTeamSettings);
parcelHelpers.export(exports, "teamFetch", ()=>teamFetch);
/** Sign in with hub email/password; stores session JWT for API calls. */ parcelHelpers.export(exports, "signInWithPassword", ()=>signInWithPassword);
parcelHelpers.export(exports, "signOut", ()=>signOut);
parcelHelpers.export(exports, "listProfiles", ()=>listProfiles);
parcelHelpers.export(exports, "fetchAutofillInfo", ()=>fetchAutofillInfo);
parcelHelpers.export(exports, "fetchResumeBlob", ()=>fetchResumeBlob);
/** Merge learned Q\u2192A into the selected profile on the hub (global + optional site/step). */ parcelHelpers.export(exports, "mergeProfileAnswers", ()=>mergeProfileAnswers);
parcelHelpers.export(exports, "verifyTeamConnection", ()=>verifyTeamConnection);
var _storage = require("@plasmohq/storage");
var _envResolver = require("~api/env-resolver");
const storage = new (0, _storage.Storage)({
    area: "local"
});
const TEAM_SETTINGS_KEY = "teamHubSettings";
const DEFAULT_TEAM_SETTINGS = {
    siteUrl: (0, _envResolver.getHubUrl)(),
    apiToken: "",
    selectedProfileId: null,
    userEmail: "",
    userName: ""
};
async function getTeamSettings() {
    const saved = await storage.get(TEAM_SETTINGS_KEY);
    return {
        ...DEFAULT_TEAM_SETTINGS,
        ...saved || {}
    };
}
async function saveTeamSettings(patch) {
    const next = {
        ...await getTeamSettings(),
        ...patch
    };
    await storage.set(TEAM_SETTINGS_KEY, next);
    return next;
}
function joinUrl(base, path) {
    const root = base.replace(/\/+$/, "");
    const p = path.startsWith("/") ? path : `/${path}`;
    return `${root}${p}`;
}
async function teamFetch(path, init = {}) {
    const settings = await getTeamSettings();
    if (!settings.apiToken) return {
        ok: false,
        status: 401,
        data: {
            ok: false,
            error: "not_signed_in"
        }
    };
    const headers = new Headers(init.headers || {});
    headers.set("Authorization", `Bearer ${settings.apiToken}`);
    if (init.body && !(init.body instanceof FormData) && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");
    const res = await fetch(joinUrl(settings.siteUrl, path), {
        ...init,
        headers
    });
    const contentType = res.headers.get("content-type") || "";
    let data;
    if (contentType.includes("application/json")) data = await res.json();
    else data = await res.text();
    return {
        ok: res.ok,
        status: res.status,
        data
    };
}
async function signInWithPassword(opts) {
    const current = await getTeamSettings();
    const siteUrl = (opts.siteUrl || current.siteUrl || (0, _envResolver.TEAM_SITE_URL)).replace(/\/+$/, "");
    const email = opts.email.trim().toLowerCase();
    const password = opts.password;
    if (!email || !password) return {
        ok: false,
        error: "Email and password required"
    };
    const res = await fetch(joinUrl(siteUrl, "/api/auth/login"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await res.json().catch(()=>null);
    if (!res.ok || !data?.ok || !data.token || !data.user) {
        const err = data?.error;
        if (err === "invalid_credentials") return {
            ok: false,
            error: "Wrong email or password"
        };
        return {
            ok: false,
            error: err || "Sign-in failed"
        };
    }
    await saveTeamSettings({
        siteUrl,
        apiToken: data.token,
        userEmail: data.user.email,
        userName: data.user.name
    });
    return {
        ok: true,
        user: {
            email: data.user.email,
            name: data.user.name
        }
    };
}
async function signOut() {
    await saveTeamSettings({
        apiToken: "",
        userEmail: "",
        userName: "",
        selectedProfileId: null
    });
}
async function listProfiles() {
    const { ok, data } = await teamFetch("/api/v1/profiles");
    if (!ok || !data.ok || !data.profiles) return [];
    return data.profiles;
}
async function fetchAutofillInfo(profileId) {
    const settings = await getTeamSettings();
    const id = profileId || settings.selectedProfileId;
    if (!id) return null;
    const { ok, data } = await teamFetch(`/api/v1/profiles/${encodeURIComponent(id)}?autofill=1`);
    if (!ok || !data.ok || !data.autofillInfo) return null;
    return data.autofillInfo;
}
async function fetchResumeBlob(resumeId) {
    const settings = await getTeamSettings();
    if (!settings.apiToken) return null;
    const res = await fetch(joinUrl(settings.siteUrl, `/api/v1/resumes/${encodeURIComponent(resumeId)}/download`), {
        headers: {
            Authorization: `Bearer ${settings.apiToken}`
        }
    });
    if (!res.ok) return null;
    const blob = await res.blob();
    const disposition = res.headers.get("content-disposition") || "";
    const match = /filename="([^"]+)"/i.exec(disposition);
    return {
        blob,
        fileName: match?.[1] || "resume.pdf",
        mimeType: res.headers.get("content-type") || blob.type || "application/pdf"
    };
}
async function mergeProfileAnswers(answers, profileId, scope) {
    const settings = await getTeamSettings();
    const id = profileId || settings.selectedProfileId;
    if (!id) return {
        ok: false,
        error: "no_profile"
    };
    if (!Object.keys(answers).length) return {
        ok: false,
        error: "empty"
    };
    const body = {
        answers,
        answersMode: "merge"
    };
    if (scope?.scopeKey) {
        body.scopeKey = scope.scopeKey;
        if (scope.hostname) body.hostname = scope.hostname;
        if (scope.stepKey) body.stepKey = scope.stepKey;
    }
    const { ok, data } = await teamFetch(`/api/v1/profiles/${encodeURIComponent(id)}`, {
        method: "PATCH",
        body: JSON.stringify(body)
    });
    if (!ok || !data.ok) return {
        ok: false,
        error: data.error || "save_failed"
    };
    return {
        ok: true,
        answers: data.answers,
        extras: data.extras
    };
}
async function verifyTeamConnection() {
    const { ok, data } = await teamFetch("/api/auth/me");
    if (!ok || !data.ok || !data.user) return {
        ok: false,
        error: data.error || "unauthorized"
    };
    return {
        ok: true,
        email: data.user.email,
        name: data.user.name
    };
}

},{"@plasmohq/storage":"i0YkM","~api/env-resolver":"70Vv4","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"i0YkM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseStorage", ()=>o);
parcelHelpers.export(exports, "Storage", ()=>g);
var _pify = require("pify");
var _pifyDefault = parcelHelpers.interopDefault(_pify);
var l = ()=>{
    try {
        let e = globalThis.navigator?.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (e[1] === "Chrome") return parseInt(e[2]) < 100 || globalThis.chrome.runtime?.getManifest()?.manifest_version === 2;
    } catch  {
        return !1;
    }
    return !1;
};
var o = class {
    #r;
    #t;
    get primaryClient() {
        return this.#t;
    }
    #e;
    get secondaryClient() {
        return this.#e;
    }
    #a;
    get area() {
        return this.#a;
    }
    get hasWebApi() {
        try {
            return typeof window < "u" && !!window.localStorage;
        } catch (e) {
            return console.error(e), !1;
        }
    }
    #s = new Map;
    #i;
    get copiedKeySet() {
        return this.#i;
    }
    isCopied = (e)=>this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e));
    #n = !1;
    get allCopied() {
        return this.#n;
    }
    getExtStorageApi = ()=>globalThis.browser?.storage || globalThis.chrome?.storage;
    get hasExtensionApi() {
        try {
            return !!this.getExtStorageApi();
        } catch (e) {
            return console.error(e), !1;
        }
    }
    isWatchSupported = ()=>this.hasExtensionApi;
    keyNamespace = "";
    isValidKey = (e)=>e.startsWith(this.keyNamespace);
    getNamespacedKey = (e)=>`${this.keyNamespace}${e}`;
    getUnnamespacedKey = (e)=>e.slice(this.keyNamespace.length);
    serde = {
        serializer: JSON.stringify,
        deserializer: JSON.parse
    };
    constructor({ area: e = "sync", allCopied: t = !1, copiedKeyList: s = [], serde: r = {} } = {}){
        this.setCopiedKeySet(s), this.#a = e, this.#n = t, this.serde = {
            ...this.serde,
            ...r
        };
        try {
            this.hasWebApi && (t || s.length > 0) && (this.#e = window.localStorage);
        } catch  {}
        try {
            this.hasExtensionApi && (this.#r = this.getExtStorageApi(), l() ? this.#t = (0, _pifyDefault.default)(this.#r[this.area], {
                exclude: [
                    "getBytesInUse"
                ],
                errorFirst: !1
            }) : this.#t = this.#r[this.area]);
        } catch  {}
    }
    setCopiedKeySet(e) {
        this.#i = new Set(e);
    }
    rawGetAll = ()=>this.#t?.get();
    getAll = async ()=>{
        let e = await this.rawGetAll();
        return Object.entries(e).filter(([t])=>this.isValidKey(t)).reduce((t, [s, r])=>(t[this.getUnnamespacedKey(s)] = r, t), {});
    };
    copy = async (e)=>{
        let t = e === void 0;
        if (!t && !this.copiedKeySet.has(e) || !this.allCopied || !this.hasExtensionApi) return !1;
        let s = this.allCopied ? await this.rawGetAll() : await this.#t.get((t ? [
            ...this.copiedKeySet
        ] : [
            e
        ]).map(this.getNamespacedKey));
        if (!s) return !1;
        let r = !1;
        for(let a in s){
            let i = s[a], n = this.#e?.getItem(a);
            this.#e?.setItem(a, i), r ||= i !== n;
        }
        return r;
    };
    rawGet = async (e)=>(await this.rawGetMany([
            e
        ]))[e];
    rawGetMany = async (e)=>this.hasExtensionApi ? await this.#t.get(e) : e.filter(this.isCopied).reduce((t, s)=>(t[s] = this.#e?.getItem(s), t), {});
    rawSet = async (e, t)=>await this.rawSetMany({
            [e]: t
        });
    rawSetMany = async (e)=>(this.#e && Object.entries(e).filter(([t])=>this.isCopied(t)).forEach(([t, s])=>this.#e.setItem(t, s)), this.hasExtensionApi && await this.#t.set(e), null);
    clear = async (e = !1)=>{
        e && this.#e?.clear(), await this.#t.clear();
    };
    rawRemove = async (e)=>{
        await this.rawRemoveMany([
            e
        ]);
    };
    rawRemoveMany = async (e)=>{
        this.#e && e.filter(this.isCopied).forEach((t)=>this.#e.removeItem(t)), this.hasExtensionApi && await this.#t.remove(e);
    };
    removeAll = async ()=>{
        let e = await this.getAll(), t = Object.keys(e);
        await this.removeMany(t);
    };
    watch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#o(e), t;
    };
    #o = (e)=>{
        for(let t in e){
            let s = this.getNamespacedKey(t), r = this.#s.get(s)?.callbackSet || new Set;
            if (r.add(e[t]), r.size > 1) continue;
            let a = (i, n)=>{
                if (n !== this.area || !i[s]) return;
                let h = this.#s.get(s);
                if (!h) throw new Error(`Storage comms does not exist for nsKey: ${s}`);
                Promise.all([
                    this.parseValue(i[s].newValue),
                    this.parseValue(i[s].oldValue)
                ]).then(([y, d])=>{
                    for (let p of h.callbackSet)p({
                        newValue: y,
                        oldValue: d
                    }, n);
                });
            };
            this.#r.onChanged.addListener(a), this.#s.set(s, {
                callbackSet: r,
                listener: a
            });
        }
    };
    unwatch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#c(e), t;
    };
    #c(e) {
        for(let t in e){
            let s = this.getNamespacedKey(t), r = e[t], a = this.#s.get(s);
            a && (a.callbackSet.delete(r), a.callbackSet.size === 0 && (this.#s.delete(s), this.#r.onChanged.removeListener(a.listener)));
        }
    }
    unwatchAll = ()=>this.#h();
    #h() {
        this.#s.forEach(({ listener: e })=>this.#r.onChanged.removeListener(e)), this.#s.clear();
    }
    async getItem(e) {
        return this.get(e);
    }
    async getItems(e) {
        return await this.getMany(e);
    }
    async setItem(e, t) {
        await this.set(e, t);
    }
    async setItems(e) {
        await await this.setMany(e);
    }
    async removeItem(e) {
        return this.remove(e);
    }
    async removeItems(e) {
        return await this.removeMany(e);
    }
}, g = class extends o {
    get = async (e)=>{
        let t = this.getNamespacedKey(e), s = await this.rawGet(t);
        return this.parseValue(s);
    };
    getMany = async (e)=>{
        let t = e.map(this.getNamespacedKey), s = await this.rawGetMany(t), r = await Promise.all(Object.values(s).map(this.parseValue));
        return Object.keys(s).reduce((a, i, n)=>(a[this.getUnnamespacedKey(i)] = r[n], a), {});
    };
    set = async (e, t)=>{
        let s = this.getNamespacedKey(e), r = this.serde.serializer(t);
        return this.rawSet(s, r);
    };
    setMany = async (e)=>{
        let t = Object.entries(e).reduce((s, [r, a])=>(s[this.getNamespacedKey(r)] = this.serde.serializer(a), s), {});
        return await this.rawSetMany(t);
    };
    remove = async (e)=>{
        let t = this.getNamespacedKey(e);
        return this.rawRemove(t);
    };
    removeMany = async (e)=>{
        let t = e.map(this.getNamespacedKey);
        return await this.rawRemoveMany(t);
    };
    setNamespace = (e)=>{
        this.keyNamespace = e;
    };
    parseValue = async (e)=>{
        try {
            if (e !== void 0) return this.serde.deserializer(e);
        } catch (t) {
            console.error(t);
        }
    };
};

},{"pify":"6Hkib","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"6Hkib":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pify);
const processFunction = (function_, options, proxy, unwrapped)=>function(...arguments_) {
        const P = options.promiseModule;
        return new P((resolve, reject)=>{
            if (options.multiArgs) arguments_.push((...result)=>{
                if (options.errorFirst) {
                    if (result[0]) reject(result);
                    else {
                        result.shift();
                        resolve(result);
                    }
                } else resolve(result);
            });
            else if (options.errorFirst) arguments_.push((error, result)=>{
                if (error) reject(error);
                else resolve(result);
            });
            else arguments_.push(resolve);
            const self = this === proxy ? unwrapped : this;
            Reflect.apply(function_, self, arguments_);
        });
    };
const filterCache = new WeakMap();
function pify(input, options) {
    options = {
        exclude: [
            /.+(?:Sync|Stream)$/
        ],
        errorFirst: true,
        promiseModule: Promise,
        ...options
    };
    const objectType = typeof input;
    if (!(input !== null && (objectType === "object" || objectType === "function"))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
    const filter = (target, key)=>{
        let cached = filterCache.get(target);
        if (!cached) {
            cached = {};
            filterCache.set(target, cached);
        }
        if (key in cached) return cached[key];
        const match = (pattern)=>typeof pattern === "string" || typeof key === "symbol" ? key === pattern : pattern.test(key);
        const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
        const writableOrConfigurableOwn = descriptor === undefined || descriptor.writable || descriptor.configurable;
        const included = options.include ? options.include.some((element)=>match(element)) : !options.exclude.some((element)=>match(element));
        const shouldFilter = included && writableOrConfigurableOwn;
        cached[key] = shouldFilter;
        return shouldFilter;
    };
    const cache = new WeakMap();
    const proxy = new Proxy(input, {
        apply (target, thisArg, args) {
            const cached = cache.get(target);
            if (cached) return Reflect.apply(cached, thisArg, args);
            const pified = options.excludeMain ? target : processFunction(target, options, proxy, target);
            cache.set(target, pified);
            return Reflect.apply(pified, thisArg, args);
        },
        get (target, key) {
            const property = target[key];
            // eslint-disable-next-line no-use-extend-native/no-use-extend-native
            if (!filter(target, key) || property === Function.prototype[key]) return property;
            const cached = cache.get(property);
            if (cached) return cached;
            if (typeof property === "function") {
                const pified = processFunction(property, options, proxy, target);
                cache.set(property, pified);
                return pified;
            }
            return property;
        }
    });
    return proxy;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"70Vv4":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"5fWaa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getBaseResumeBlob.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getBaseResumeBlob",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"5Oy7G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getCompanyNameList.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getCompanyNameList",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"429Q5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getCoverLetterBlob.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getCoverLetterBlob",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"5HlZl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getCreditFeed.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getCreditFeed",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4NlXQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getCreditsLeft.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getCreditsLeft",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"bCwt0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getCreditSwitchStatus.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getCreditSwitchStatus",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"8MKE2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getCurrentCoverLetter.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getCurrentCoverLetter",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4Q79V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getCurrentFillAnswer.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getCurrentFillAnswer",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"khUrO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getCurrentTabId.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getCurrentTabId",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"i5VU9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getCurrentTabUrl.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getCurrentTabUrl",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"frfxe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getDegreeSuggestions.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getDegreeSuggestions",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"djptI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getExternalJobId.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getExternalJobId",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"67xsX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getExternalJobStatus.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getExternalJobStatus",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4qZmt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getGptResults.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getGptResults",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"dej2B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getJobBannerDetail.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getJobBannerDetail",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"7k2HI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getJobDetail.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getJobDetail",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"8IGK5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getMajorSuggestions.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getMajorSuggestions",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"bDQBa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getOpenCitiesByRegion.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getOpenCitiesByRegion",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"j1GMZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getOpenRegions.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getOpenRegions",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"kyzkM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getPageLinkedinJobInfo.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getPageLinkedinJobInfo",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"hulLn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getPaymentPrice.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getPaymentPrice",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"6IlOX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getReleaseConfig.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getReleaseConfig",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"1fz8D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/**
 * Downloads the default (or requested) resume for the selected profile.
 * Body: { resumeId?: string }
 */ const handler = async (req, res)=>{
    try {
        let resumeId = typeof req.body?.resumeId === "string" ? req.body.resumeId : null;
        if (!resumeId) {
            const info = await (0, _teamClient.fetchAutofillInfo)();
            resumeId = info?.defaultResumeId ?? info?.resumes?.[0]?.id ?? null;
        }
        if (!resumeId) {
            res.send({
                ok: false,
                message: "no_resume"
            });
            return;
        }
        const file = await (0, _teamClient.fetchResumeBlob)(resumeId);
        if (!file) {
            res.send({
                ok: false,
                message: "download_failed"
            });
            return;
        }
        const buffer = await file.blob.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        let binary = "";
        for(let i = 0; i < bytes.length; i++)binary += String.fromCharCode(bytes[i]);
        res.send({
            ok: true,
            resumeId,
            fileName: file.fileName,
            mimeType: file.mimeType,
            /** base64 for structured clone across messaging */ base64: btoa(binary)
        });
    } catch (err) {
        res.send({
            ok: false,
            message: err instanceof Error ? err.message : "fetch_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4LqFS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getResumeCollection.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getResumeCollection",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"hsOno":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getResumeDiagnose.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getResumeDiagnose",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4rS0H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getResumeInfo.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getResumeInfo",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"04qkk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getSimilarJobs.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getSimilarJobs",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"1NRjw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getSiteToken.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getSiteToken",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iQ4cn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getTabContext.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getTabContext",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"d6Vvg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tabJobId = require("~background/tab-job-id");
const handler = async (req, res)=>{
    const tabId = req.sender?.tab?.id;
    if (typeof tabId !== "number") {
        res.send({
            jobId: null
        });
        return;
    }
    const record = await (0, _tabJobId.getTabJobRecord)(tabId);
    if (!record?.jobId) {
        res.send({
            jobId: null
        });
        return;
    }
    if (req.body?.requireSamePath && req.body.currentUrl) try {
        const current = new URL(req.body.currentUrl);
        if (current.pathname !== record.pathname) {
            res.send({
                jobId: null
            });
            return;
        }
    } catch  {
        res.send({
            jobId: null
        });
        return;
    }
    res.send({
        jobId: record.jobId,
        url: record.url
    });
};
exports.default = handler;

},{"~background/tab-job-id":"e1LIN","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"e1LIN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setTabJobRecord", ()=>setTabJobRecord);
parcelHelpers.export(exports, "getTabJobRecord", ()=>getTabJobRecord);
var _storage = require("@plasmohq/storage");
const storage = new (0, _storage.Storage)({
    area: "session"
});
function keyForTab(tabId) {
    return `tabJobId:${tabId}`;
}
async function setTabJobRecord(tabId, record) {
    await storage.set(keyForTab(tabId), record);
}
async function getTabJobRecord(tabId) {
    return await storage.get(keyForTab(tabId)) ?? null;
}

},{"@plasmohq/storage":"i0YkM","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"bhrND":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getTailorResume.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getTailorResume",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"baD7V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getTailorResumeBlob.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getTailorResumeBlob",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"jXPYF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getTailorResumeFileName.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getTailorResumeFileName",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"98SkO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
const handler = async (_req, res)=>{
    const settings = await (0, _teamClient.getTeamSettings)();
    const conn = await (0, _teamClient.verifyTeamConnection)();
    res.send({
        ok: conn.ok,
        siteUrl: settings.siteUrl,
        selectedProfileId: settings.selectedProfileId,
        user: conn.ok ? {
            email: conn.email,
            name: conn.name
        } : null,
        error: conn.error
    });
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"lhPqw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/getVersionUpdateState.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "getVersionUpdateState",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"k0hTD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/injectAshbyFieldMetadata.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "injectAshbyFieldMetadata",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"dWkE2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Inject the helper-app bundle into the sender frame (ported from Jobright).
 */ function pathnameFromBundleUrl(bundleUrl) {
    if (!bundleUrl) return null;
    try {
        const url = new URL(bundleUrl);
        return decodeURIComponent(url.pathname).replace(/^\/+/, "");
    } catch  {
        return bundleUrl.replace(/^\/+/, "");
    }
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        const frameId = req.sender?.frameId ?? 0;
        const file = pathnameFromBundleUrl(req.body?.bundleUrl);
        if (typeof tabId !== "number" || !file) {
            res.send({
                success: false,
                error: "missing_tab_or_bundle"
            });
            return;
        }
        await chrome.scripting.executeScript({
            target: {
                tabId,
                frameIds: [
                    frameId
                ]
            },
            files: [
                file
            ],
            world: "ISOLATED"
        });
        res.send({
            success: true
        });
    } catch (error) {
        console.error("[injectHelperAppBundle] failed:", error);
        res.send({
            success: false,
            error: error instanceof Error ? error.message : String(error)
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"1D3w0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/injectReactSelectFiber.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "injectReactSelectFiber",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"5TGWG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/injectRecruiteeFiber.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "injectRecruiteeFiber",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"h8XLK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/injectWorkableCheckbox.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "injectWorkableCheckbox",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"9DukL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/injectWorkdayFiber.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "injectWorkdayFiber",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iD4c3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/installMainWorldAlertSuppressor.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "installMainWorldAlertSuppressor",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"7q19v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/interceptFileInputClick.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "interceptFileInputClick",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"jjxIg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/kulaCompanyDom.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "kulaCompanyDom",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"lmIy3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
const NOISE_RE = /qyvarex|filled\s*\d*\s*items?|text fields? ok|no resume file input|fill\s*again|dismiss|button clicks sync|learning answers for next|saved to hub/i;
/**
 * Merge learned screening answers into the selected hub profile.
 * Body: {
 *   answers: Record<string, string>,
 *   profileId?: string,
 *   scopeKey?: string,
 *   hostname?: string,
 *   stepKey?: string
 * }
 */ const handler = async (req, res)=>{
    try {
        const answers = req.body?.answers && typeof req.body.answers === "object" ? req.body.answers : null;
        if (!answers || !Object.keys(answers).length) {
            res.send({
                ok: false,
                message: "answers_required"
            });
            return;
        }
        const cleaned = {};
        for (const [k, v] of Object.entries(answers)){
            const question = String(k || "").trim();
            const answer = String(v ?? "").trim();
            if (!question || !answer) continue;
            if (question.length > 500 || answer.length > 2000) continue;
            if (NOISE_RE.test(question) || NOISE_RE.test(answer)) continue;
            const compact = (question + answer).replace(/\s+/g, "").toLowerCase();
            if (/fillagain|dismiss|qyvarexautofill|^yesno$/.test(compact)) continue;
            cleaned[question] = answer;
        }
        if (!Object.keys(cleaned).length) {
            res.send({
                ok: false,
                message: "answers_empty"
            });
            return;
        }
        const profileId = typeof req.body?.profileId === "string" ? req.body.profileId : null;
        const scopeKey = typeof req.body?.scopeKey === "string" ? req.body.scopeKey.trim() : "";
        const hostname = typeof req.body?.hostname === "string" ? req.body.hostname.trim() : "";
        const stepKey = typeof req.body?.stepKey === "string" ? req.body.stepKey.trim() : "";
        const result = await (0, _teamClient.mergeProfileAnswers)(cleaned, profileId, scopeKey ? {
            scopeKey,
            hostname: hostname || null,
            stepKey: stepKey || null
        } : null);
        if (!result.ok) {
            res.send({
                ok: false,
                message: result.error || "save_failed"
            });
            return;
        }
        res.send({
            ok: true,
            answers: result.answers,
            extras: result.extras,
            learned: cleaned,
            scopeKey: scopeKey || null
        });
    } catch (err) {
        res.send({
            ok: false,
            message: err instanceof Error ? err.message : "save_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"hVZ3t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/markRefreshRequested.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "markRefreshRequested",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"fe7Z6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/markWhatsNewRead.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "markWhatsNewRead",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"gCFbI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/openAgentApplyTab.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "openAgentApplyTab",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"aAauv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/openBrassringFullPageAutocomplete.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "openBrassringFullPageAutocomplete",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"6rsOp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/openDayforcePolicyTab.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "openDayforcePolicyTab",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"aWRCQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/parsePageMarkdown.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "parsePageMarkdown",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"eQJct":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Health check for team tooling / CI. */ const handler = async (_req, res)=>{
    res.send({
        ok: true,
        name: "jobright-fork-extension",
        version: chrome.runtime.getManifest().version
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"6Vrzm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/postApplyJob.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "postApplyJob",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"lr7El":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/postAutofillAnswerPairAttributed.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "postAutofillAnswerPairAttributed",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"jJgDk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/postAutofillFeedback.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "postAutofillFeedback",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"asjhc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/postEventSubmit.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "postEventSubmit",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"AvTM0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/postExternalJobImport.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "postExternalJobImport",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"3uA6Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/postPluginFeedback.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "postPluginFeedback",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"e3AYM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/postSimilarJobPopupExposure.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "postSimilarJobPopupExposure",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"hWkEU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/prepareMetaCareersLocationCapture.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "prepareMetaCareersLocationCapture",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"21sUf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/prepareOracleEducationLovCapture.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "prepareOracleEducationLovCapture",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"jjUaW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/preparePhenomSchoolCapture.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "preparePhenomSchoolCapture",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"eDw8J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/previewBaseResumeBlob.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "previewBaseResumeBlob",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"hWzia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/previewTailorResumeBlob.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "previewTailorResumeBlob",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"ce4OD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/regenerateAnswer.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "regenerateAnswer",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"ezLiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/reloadExtension.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "reloadExtension",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"3Tvcc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/reportAutofillFirstUseAttribution.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "reportAutofillFirstUseAttribution",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"lBm2x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/requestExtensionUpdateCheck.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "requestExtensionUpdateCheck",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"6iwT2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/resolveAddressSuggestion.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "resolveAddressSuggestion",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"baSvW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/resolveAutofillClientSearchStep.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "resolveAutofillClientSearchStep",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"mxjqE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/resolveAutofillOperation.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "resolveAutofillOperation",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"5N3CK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/resolveCapturedMetaCareersLocation.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "resolveCapturedMetaCareersLocation",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"8UYRG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/resolveCapturedPhenomSchool.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "resolveCapturedPhenomSchool",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4RWjG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/resolveJobIdByUrl.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "resolveJobIdByUrl",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"bSrWZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/saveAutofillInfo.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "saveAutofillInfo",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"2i3dL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/saveExternalJobId.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "saveExternalJobId",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"8mahq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/saveJobDetail.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "saveJobDetail",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"gxJFI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/saveSubmitStatus.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "saveSubmitStatus",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"1Typx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/searchIcimsProfileOptions.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "searchIcimsProfileOptions",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"2jtw4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/selectIcimsProfileOption.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "selectIcimsProfileOption",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iMbPj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tabJobId = require("~background/tab-job-id");
const handler = async (req, res)=>{
    const tabId = req.sender?.tab?.id;
    const jobId = req.body?.jobId?.trim();
    const url = req.body?.url || req.sender?.tab?.url || "";
    if (typeof tabId !== "number" || !jobId) {
        res.send({
            ok: false
        });
        return;
    }
    let pathname = "/";
    try {
        pathname = new URL(url).pathname;
    } catch  {
    /* ignore */ }
    await (0, _tabJobId.setTabJobRecord)(tabId, {
        jobId,
        url,
        pathname,
        updatedAt: Date.now()
    });
    res.send({
        ok: true
    });
};
exports.default = handler;

},{"~background/tab-job-id":"e1LIN","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"azWRy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/updateAutofillSection.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "updateAutofillSection",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"k2B8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/updateResumeCollection.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "updateResumeCollection",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"73d8c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/uploadBrassringProfileBuilderFile.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "uploadBrassringProfileBuilderFile",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"7f40R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Stub \u2014 port from engine/background/src/background/messages/waitForPhenomSchoolCapture.js */ const handler = async (_req, res)=>{
    res.send({
        ok: false,
        stub: true,
        handler: "waitForPhenomSchoolCapture",
        message: "Not implemented yet in the team fork"
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"kimL1":[function(require,module,exports) {
/**
 * Background service worker entry.
 * Message handlers live in background/messages/*.
 */ var _envResolver = require("~api/env-resolver");
var _teamClient = require("~api/team-client");
chrome.runtime.onMessageExternal.addListener((message, _sender, sendResponse)=>{
    if (message?.type !== "TEAM_HUB_AUTH" || !message.token) {
        sendResponse({
            ok: false,
            error: "unknown_message"
        });
        return false;
    }
    const siteUrl = String(message.siteUrl || (0, _envResolver.getHubUrl)()).replace(/\/+$/, "");
    (0, _teamClient.saveTeamSettings)({
        siteUrl,
        apiToken: String(message.token),
        userEmail: message.user?.email || "",
        userName: message.user?.name || ""
    }).then(()=>sendResponse({
            ok: true
        })).catch((err)=>sendResponse({
            ok: false,
            error: err instanceof Error ? err.message : "save_failed"
        }));
    return true;
});

},{"~api/env-resolver":"70Vv4","~api/team-client":"7DK0L"}]},["2i2v6","8oeFb"], "8oeFb", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsSUFBRyxDQUFBLEdBQUcsQ0FBQyxHQUFHO0lBQUEsU0FBTyxPQUFNLEdBQUUsSUFBSSxNQUFNLElBQUksQ0FBQyxXQUFXO1lBQUMsQ0FBQyxFQUFFLEVBQUM7UUFBQyxHQUFHO0lBQUEsYUFBVyxPQUFNLElBQUksQ0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUUsT0FBTyxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRSxLQUFJLElBQUksQ0FBQyxtQkFBaUIsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFHLElBQUcsRUFBRztJQUFBLFFBQU0sT0FBTSxJQUFFLENBQUMsQ0FBQztRQUFJLEtBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVEsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBTyxFQUFFO0lBQUEsWUFBVSxPQUFNO1FBQUksTUFBTSxJQUFJLENBQUMsY0FBYztZQUFDO1NBQUU7SUFBQyxFQUFFO0lBQUEsZ0JBQWMsT0FBTTtRQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLFVBQVUsUUFBUSxDQUFBLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSSxJQUFJLENBQUMsbUJBQWlCLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87SUFBRSxFQUFFO0lBQUEsWUFBVTtRQUFVLElBQUksSUFBRSxNQUFNLElBQUksQ0FBQyxVQUFTLElBQUUsT0FBTyxLQUFLO1FBQUcsTUFBTSxJQUFJLENBQUMsV0FBVztJQUFFLEVBQUU7SUFBQSxRQUFNLENBQUE7UUFBSSxJQUFJLElBQUUsSUFBSSxDQUFDO1FBQW1CLE9BQU8sS0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRztJQUFDLEVBQUU7SUFBQSxDQUFDLENBQUMsR0FBQyxDQUFBO1FBQUksSUFBSSxJQUFJLEtBQUssRUFBRTtZQUFDLElBQUksSUFBRSxJQUFJLENBQUMsaUJBQWlCLElBQUcsSUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGVBQWEsSUFBSTtZQUFJLElBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUUsRUFBRSxPQUFLLEdBQUU7WUFBUyxJQUFJLElBQUUsQ0FBQyxHQUFFO2dCQUFLLElBQUcsTUFBSSxJQUFJLENBQUMsUUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBQU8sSUFBSSxJQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUFHLElBQUcsQ0FBQyxHQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsd0NBQXdDLEVBQUUsRUFBRSxDQUFDO2dCQUFFLFFBQVEsSUFBSTtvQkFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFFLEVBQUU7b0JBQUksS0FBSSxJQUFJLEtBQUssRUFBRSxZQUFZLEVBQUU7d0JBQUMsVUFBUzt3QkFBRSxVQUFTO29CQUFDLEdBQUU7Z0JBQUU7WUFBRTtZQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLFlBQVksSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFFO2dCQUFDLGFBQVk7Z0JBQUUsVUFBUztZQUFDO1FBQUU7SUFBQyxFQUFFO0lBQUEsVUFBUSxDQUFBO1FBQUksSUFBSSxJQUFFLElBQUksQ0FBQztRQUFtQixPQUFPLEtBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUc7SUFBQyxFQUFFO0lBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFFLElBQUksSUFBSSxLQUFLLEVBQUU7WUFBQyxJQUFJLElBQUUsSUFBSSxDQUFDLGlCQUFpQixJQUFHLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQUcsS0FBSSxDQUFBLEVBQUUsWUFBWSxPQUFPLElBQUcsRUFBRSxZQUFZLFNBQU8sS0FBSSxDQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsZUFBZSxFQUFFLFNBQVEsQ0FBQztRQUFFO0lBQUM7SUFBQyxhQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHO0lBQUEsQ0FBQyxDQUFDO1FBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFDLFVBQVMsQ0FBQyxFQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsZUFBZSxLQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFPO0lBQUMsTUFBTSxRQUFRLENBQUMsRUFBQztRQUFDLE9BQU8sSUFBSSxDQUFDLElBQUk7SUFBRTtJQUFDLE1BQU0sU0FBUyxDQUFDLEVBQUM7UUFBQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFFBQVE7SUFBRTtJQUFDLE1BQU0sUUFBUSxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxHQUFFO0lBQUU7SUFBQyxNQUFNLFNBQVMsQ0FBQyxFQUFDO1FBQUMsTUFBTSxNQUFNLElBQUksQ0FBQyxRQUFRO0lBQUU7SUFBQyxNQUFNLFdBQVcsQ0FBQyxFQUFDO1FBQUMsT0FBTyxJQUFJLENBQUMsT0FBTztJQUFFO0lBQUMsTUFBTSxZQUFZLENBQUMsRUFBQztRQUFDLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVztJQUFFO0FBQUMsR0FBRSxJQUFFLGNBQWM7SUFBRSxNQUFJLE9BQU07UUFBSSxJQUFJLElBQUUsSUFBSSxDQUFDLGlCQUFpQixJQUFHLElBQUUsTUFBTSxJQUFJLENBQUMsT0FBTztRQUFHLE9BQU8sSUFB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UztRQUNULFNBQVM7SUFDWDtBQUNGO2tCQUVlOzs7OztBQ1ZmLDZGQUE2RixHQUM3RixNQUFNLFVBQTBDLE9BQU8sTUFBTTtJQUMzRCxJQUFJLEtBQUs7UUFDUCxJQUFJO1FBQ0osTUFBTTtRQUNOLFNBQVM7UUFDVCxTQUFTO0lBQ1g7QUFDRjtrQkFFZTs7O0FDWmY7OztDQUdDLEdBRUQ7QUFDQTtBQUVBLE9BQU8sUUFBUSxrQkFBa0IsWUFBWSxDQUFDLFNBQVMsU0FBUztJQUM5RCxJQUFJLFNBQVMsU0FBUyxtQkFBbUIsQ0FBQyxRQUFRLE9BQU87UUFDdkQsYUFBYTtZQUFFLElBQUk7WUFBTyxPQUFPO1FBQWtCO1FBQ25ELE9BQU87SUFDVDtJQUVBLE1BQU0sVUFBVSxPQUFPLFFBQVEsV0FBVyxDQUFBLEdBQUEsc0JBQVEsS0FBSyxRQUFRLFFBQVE7SUFFbEUsQ0FBQSxHQUFBLDRCQUFlLEVBQUU7UUFDcEI7UUFDQSxVQUFVLE9BQU8sUUFBUTtRQUN6QixXQUFXLFFBQVEsTUFBTSxTQUFTO1FBQ2xDLFVBQVUsUUFBUSxNQUFNLFFBQVE7SUFDbEMsR0FDRyxLQUFLLElBQU0sYUFBYTtZQUFFLElBQUk7UUFBSyxJQUNuQyxNQUFNLENBQUMsTUFDTixhQUFhO1lBQ1gsSUFBSTtZQUNKLE9BQU8sZUFBZSxRQUFRLElBQUksVUFBVTtRQUM5QztJQUdKLE9BQU87QUFDVCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtYWI0OGM1ZDc5ZWRmYjUxMi5qcyIsIi5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL21lc3NhZ2luZy50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2FjY2VwdEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uLnRzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9hY3RpdmF0ZUhlbHBlck9uVGFiLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvY29uc3VtZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9jb252ZXJ0UmVzdW1lUGRmVG9Xb3JkLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvY291bnRFeHRlcm5hbEpvYklkcy50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2ZsdXNoQXV0b2ZpbGxJbnN0YWxsQXR0cmlidXRpb24udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZW5lcmF0ZUF1dG9maWxsQ292ZXJMZXR0ZXIudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBYlVzZXIudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBZGRyZXNzU3VnZ2VzdGlvbnMudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBZ2VudENvdmVyTGV0dGVyLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0QWdlbnRRTFJ1bGUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBZ2VudFRhaWxvclJlc3VtZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEF1dG9maWxsQ29uZmlnLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0QXV0b2ZpbGxJbmZvLnRzIiwic3JjL2FwaS90ZWFtLWNsaWVudC50cyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvc3RvcmFnZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3BpZnkvaW5kZXguanMiLCJzcmMvYXBpL2Vudi1yZXNvbHZlci50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEJhc2VSZXN1bWVCbG9iLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q29tcGFueU5hbWVMaXN0LnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q292ZXJMZXR0ZXJCbG9iLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3JlZGl0RmVlZC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldENyZWRpdHNMZWZ0LnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3JlZGl0U3dpdGNoU3RhdHVzLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3VycmVudENvdmVyTGV0dGVyLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3VycmVudEZpbGxBbnN3ZXIudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDdXJyZW50VGFiSWQudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDdXJyZW50VGFiVXJsLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0RGVncmVlU3VnZ2VzdGlvbnMudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRFeHRlcm5hbEpvYklkLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0RXh0ZXJuYWxKb2JTdGF0dXMudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRHcHRSZXN1bHRzLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Sm9iQmFubmVyRGV0YWlsLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Sm9iRGV0YWlsLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0TWFqb3JTdWdnZXN0aW9ucy50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldE9wZW5DaXRpZXNCeVJlZ2lvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldE9wZW5SZWdpb25zLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0UGFnZUxpbmtlZGluSm9iSW5mby50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFBheW1lbnRQcmljZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlbGVhc2VDb25maWcudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRSZXN1bWVCbG9iLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0UmVzdW1lQ29sbGVjdGlvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlc3VtZURpYWdub3NlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0UmVzdW1lSW5mby50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFNpbWlsYXJKb2JzLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0U2l0ZVRva2VuLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFiQ29udGV4dC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhYkpvYklkLnRzIiwic3JjL2JhY2tncm91bmQvdGFiLWpvYi1pZC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhaWxvclJlc3VtZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhaWxvclJlc3VtZUJsb2IudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRUYWlsb3JSZXN1bWVGaWxlTmFtZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFVzZXJQcm9maWxlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VmVyc2lvblVwZGF0ZVN0YXRlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0QXNoYnlGaWVsZE1ldGFkYXRhLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0SGVscGVyQXBwQnVuZGxlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0UmVhY3RTZWxlY3RGaWJlci50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2luamVjdFJlY3J1aXRlZUZpYmVyLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0V29ya2FibGVDaGVja2JveC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2luamVjdFdvcmtkYXlGaWJlci50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2luc3RhbGxNYWluV29ybGRBbGVydFN1cHByZXNzb3IudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9pbnRlcmNlcHRGaWxlSW5wdXRDbGljay50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2t1bGFDb21wYW55RG9tLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvbGVhcm5BbnN3ZXJzLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvbWFya1JlZnJlc2hSZXF1ZXN0ZWQudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9tYXJrV2hhdHNOZXdSZWFkLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvb3BlbkFnZW50QXBwbHlUYWIudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuQnJhc3NyaW5nRnVsbFBhZ2VBdXRvY29tcGxldGUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuRGF5Zm9yY2VQb2xpY3lUYWIudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wYXJzZVBhZ2VNYXJrZG93bi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3BpbmcudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0QXBwbHlKb2IudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0QXV0b2ZpbGxBbnN3ZXJQYWlyQXR0cmlidXRlZC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RBdXRvZmlsbEZlZWRiYWNrLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcG9zdEV2ZW50U3VibWl0LnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcG9zdEV4dGVybmFsSm9iSW1wb3J0LnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcG9zdFBsdWdpbkZlZWRiYWNrLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcG9zdFNpbWlsYXJKb2JQb3B1cEV4cG9zdXJlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcHJlcGFyZU1ldGFDYXJlZXJzTG9jYXRpb25DYXB0dXJlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcHJlcGFyZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wcmVwYXJlUGhlbm9tU2Nob29sQ2FwdHVyZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3ByZXZpZXdCYXNlUmVzdW1lQmxvYi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3ByZXZpZXdUYWlsb3JSZXN1bWVCbG9iLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVnZW5lcmF0ZUFuc3dlci50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3JlbG9hZEV4dGVuc2lvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3JlcG9ydEF1dG9maWxsRmlyc3RVc2VBdHRyaWJ1dGlvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3JlcXVlc3RFeHRlbnNpb25VcGRhdGVDaGVjay50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVBZGRyZXNzU3VnZ2VzdGlvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVBdXRvZmlsbENsaWVudFNlYXJjaFN0ZXAudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQXV0b2ZpbGxPcGVyYXRpb24udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQ2FwdHVyZWRNZXRhQ2FyZWVyc0xvY2F0aW9uLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUNhcHR1cmVkUGhlbm9tU2Nob29sLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUpvYklkQnlVcmwudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9zYXZlQXV0b2ZpbGxJbmZvLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2F2ZUV4dGVybmFsSm9iSWQudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9zYXZlSm9iRGV0YWlsLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2F2ZVN1Ym1pdFN0YXR1cy50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3NlYXJjaEljaW1zUHJvZmlsZU9wdGlvbnMudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9zZWxlY3RJY2ltc1Byb2ZpbGVPcHRpb24udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9zZXRUYWJKb2JJZC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3VwZGF0ZUF1dG9maWxsU2VjdGlvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3VwZGF0ZVJlc3VtZUNvbGxlY3Rpb24udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy91cGxvYWRCcmFzc3JpbmdQcm9maWxlQnVpbGRlckZpbGUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy93YWl0Rm9yUGhlbm9tU2Nob29sQ2FwdHVyZS50cyIsInNyYy9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB1PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIGg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgQj1uZXcgU2V0KHUpLF89ZT0+Qi5oYXMoZSksRz11LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFU9XyhcIi0tZHJ5LXJ1blwiKSxnPSgpPT5fKFwiLS12ZXJib3NlXCIpfHxoKCkuVkVSQk9TRT09PVwidHJ1ZVwiLE49ZygpO3ZhciBtPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB5PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9Pm0oXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxmPSguLi5lKT0+bShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLE09MCxpPSguLi5lKT0+ZygpJiZtKGBcXHV7MUY3RTF9ICR7TSsrfWAsLi4uZSk7dmFyIGI9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXC5wbGFzbW9cXFxcc3RhdGljXFxcXGJhY2tncm91bmRcXFxcaW5kZXgudHNcIixcImJ1bmRsZUlkXCI6XCJjMzM4OTA4ZTcwNGM5MWYxXCIsXCJlbnZIYXNoXCI6XCJkOTlhNWZmYTU3YWNkNjM4XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBIKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9SDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGM9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBSKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIHgoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBkKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUD1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIixTPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7dmFyIE89YCR7bi5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7UigpfToke2QoKX0vYDthc3luYyBmdW5jdGlvbiBrKGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChPKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShvPT5zZXRUaW1lb3V0KG8sZSkpfX1pZihjLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9Yy5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IG89dC5yZXF1ZXN0LnVybDtpZihvLnN0YXJ0c1dpdGgoZSkpe2xldCBzPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KG8uc2xpY2UoZS5sZW5ndGgpKSk7cy5ob3N0bmFtZT09PW4uaG9zdCYmcy5wb3J0PT09YCR7bi5wb3J0fWA/KHMuc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gocykudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBFKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gQyhlPWQoKSl7bGV0IHQ9eCgpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEwoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFQoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoTnVtYmVyKGQoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2F3YWl0IGUocyl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEwpLHR9ZnVuY3Rpb24gQShlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGw9ci5jb2RlZnJhbWV8fHIuc3RhY2s7ZihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtsK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntmKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgdz1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gcChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGM/LnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgbyBvZiBhLnNjcmlwdFBvcnRzKXtsZXQgcz10LnNvbWUocj0+ci5pZD09PW8uc2VuZGVyLnRhYj8uaWQpO28ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpzfSl9Yy5ydW50aW1lLnJlbG9hZCgpfX1pZighd3x8IXcuaXNQYXJjZWxSZXF1aXJlKXtiKCk7bGV0IGU9QShhc3luYyB0PT57aShcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5iZ0NoYW5nZWR8fD10LmZpbHRlcihzPT5zLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUocz0+RShtb2R1bGUuYnVuZGxlLHMuaWQpKTtsZXQgbz10LmZpbmQocz0+cy50eXBlPT09XCJqc29uXCIpO2lmKG8pe2xldCBzPW5ldyBTZXQodC5tYXAobD0+bC5pZCkpLHI9T2JqZWN0LnZhbHVlcyhvLmRlcHNCeUJ1bmRsZSkubWFwKGw9Pk9iamVjdC52YWx1ZXMobCkpLmZsYXQoKTthLmJnQ2hhbmdlZHx8PXIuZXZlcnkobD0+cy5oYXMobCkpfXAoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgaygpLHAoITApfSl9VChhc3luYyBlPT57c3dpdGNoKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGUudHlwZSl7Y2FzZVwiYnVpbGRfcmVhZHlcIjp7YS5idWlsZFJlYWR5fHw9ITAscCgpO2JyZWFrfWNhc2VcImNzX2NoYW5nZWRcIjp7YS5jc0NoYW5nZWR8fD0hMCxwKCk7YnJlYWt9fX0pO2MucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoUCksbz1lLm5hbWUuc3RhcnRzV2l0aChTKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCkscCgpfSl9fSk7Yy5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIikscCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi9tZXNzYWdpbmdcIlxuaW1wb3J0IFwiLi4vLi4vLi4vc3JjL2JhY2tncm91bmRcIiIsIi8vIEB0cy1ub2NoZWNrXG5nbG9iYWxUaGlzLl9fcGxhc21vSW50ZXJuYWxQb3J0TWFwID0gbmV3IE1hcCgpXG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNBY2NlcHRBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9hY2NlcHRBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzQWN0aXZhdGVIZWxwZXJPblRhYiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9hY3RpdmF0ZUhlbHBlck9uVGFiXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNDb25zdW1lT3JhY2xlRWR1Y2F0aW9uTG92Q2FwdHVyZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9jb25zdW1lT3JhY2xlRWR1Y2F0aW9uTG92Q2FwdHVyZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzQ29udmVydFJlc3VtZVBkZlRvV29yZCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9jb252ZXJ0UmVzdW1lUGRmVG9Xb3JkXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNDb3VudEV4dGVybmFsSm9iSWRzIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2NvdW50RXh0ZXJuYWxKb2JJZHNcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0ZsdXNoQXV0b2ZpbGxJbnN0YWxsQXR0cmlidXRpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZmx1c2hBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2VuZXJhdGVBdXRvZmlsbENvdmVyTGV0dGVyIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dlbmVyYXRlQXV0b2ZpbGxDb3ZlckxldHRlclwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0QWJVc2VyIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFiVXNlclwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0QWRkcmVzc1N1Z2dlc3Rpb25zIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFkZHJlc3NTdWdnZXN0aW9uc1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0QWdlbnRDb3ZlckxldHRlciB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBZ2VudENvdmVyTGV0dGVyXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRBZ2VudFFsUnVsZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBZ2VudFFMUnVsZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0QWdlbnRUYWlsb3JSZXN1bWUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0QWdlbnRUYWlsb3JSZXN1bWVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEF1dG9maWxsQ29uZmlnIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEF1dG9maWxsQ29uZmlnXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRBdXRvZmlsbEluZm8gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0QXV0b2ZpbGxJbmZvXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRCYXNlUmVzdW1lQmxvYiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRCYXNlUmVzdW1lQmxvYlwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0Q29tcGFueU5hbWVMaXN0IH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldENvbXBhbnlOYW1lTGlzdFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0Q292ZXJMZXR0ZXJCbG9iIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldENvdmVyTGV0dGVyQmxvYlwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0Q3JlZGl0RmVlZCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDcmVkaXRGZWVkXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRDcmVkaXRzTGVmdCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDcmVkaXRzTGVmdFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0Q3JlZGl0U3dpdGNoU3RhdHVzIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldENyZWRpdFN3aXRjaFN0YXR1c1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0Q3VycmVudENvdmVyTGV0dGVyIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEN1cnJlbnRDb3ZlckxldHRlclwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0Q3VycmVudEZpbGxBbnN3ZXIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3VycmVudEZpbGxBbnN3ZXJcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEN1cnJlbnRUYWJJZCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDdXJyZW50VGFiSWRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEN1cnJlbnRUYWJVcmwgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3VycmVudFRhYlVybFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0RGVncmVlU3VnZ2VzdGlvbnMgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0RGVncmVlU3VnZ2VzdGlvbnNcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEV4dGVybmFsSm9iSWQgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0RXh0ZXJuYWxKb2JJZFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0RXh0ZXJuYWxKb2JTdGF0dXMgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0RXh0ZXJuYWxKb2JTdGF0dXNcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEdwdFJlc3VsdHMgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0R3B0UmVzdWx0c1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0Sm9iQmFubmVyRGV0YWlsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEpvYkJhbm5lckRldGFpbFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0Sm9iRGV0YWlsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEpvYkRldGFpbFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0TWFqb3JTdWdnZXN0aW9ucyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRNYWpvclN1Z2dlc3Rpb25zXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRPcGVuQ2l0aWVzQnlSZWdpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0T3BlbkNpdGllc0J5UmVnaW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRPcGVuUmVnaW9ucyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRPcGVuUmVnaW9uc1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0UGFnZUxpbmtlZGluSm9iSW5mbyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRQYWdlTGlua2VkaW5Kb2JJbmZvXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRQYXltZW50UHJpY2UgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0UGF5bWVudFByaWNlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRSZWxlYXNlQ29uZmlnIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlbGVhc2VDb25maWdcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFJlc3VtZUJsb2IgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0UmVzdW1lQmxvYlwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0UmVzdW1lQ29sbGVjdGlvbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRSZXN1bWVDb2xsZWN0aW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRSZXN1bWVEaWFnbm9zZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRSZXN1bWVEaWFnbm9zZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0UmVzdW1lSW5mbyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRSZXN1bWVJbmZvXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRTaW1pbGFySm9icyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRTaW1pbGFySm9ic1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0U2l0ZVRva2VuIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFNpdGVUb2tlblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0VGFiQ29udGV4dCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRUYWJDb250ZXh0XCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRUYWJKb2JJZCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRUYWJKb2JJZFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0VGFpbG9yUmVzdW1lIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhaWxvclJlc3VtZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0VGFpbG9yUmVzdW1lQmxvYiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRUYWlsb3JSZXN1bWVCbG9iXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRUYWlsb3JSZXN1bWVGaWxlTmFtZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRUYWlsb3JSZXN1bWVGaWxlTmFtZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0VXNlclByb2ZpbGUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0VXNlclByb2ZpbGVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFZlcnNpb25VcGRhdGVTdGF0ZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRWZXJzaW9uVXBkYXRlU3RhdGVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0luamVjdEFzaGJ5RmllbGRNZXRhZGF0YSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RBc2hieUZpZWxkTWV0YWRhdGFcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0luamVjdEhlbHBlckFwcEJ1bmRsZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RIZWxwZXJBcHBCdW5kbGVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0luamVjdFJlYWN0U2VsZWN0RmliZXIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0UmVhY3RTZWxlY3RGaWJlclwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzSW5qZWN0UmVjcnVpdGVlRmliZXIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0UmVjcnVpdGVlRmliZXJcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0luamVjdFdvcmthYmxlQ2hlY2tib3ggfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0V29ya2FibGVDaGVja2JveFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzSW5qZWN0V29ya2RheUZpYmVyIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2luamVjdFdvcmtkYXlGaWJlclwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzSW5zdGFsbE1haW5Xb3JsZEFsZXJ0U3VwcHJlc3NvciB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9pbnN0YWxsTWFpbldvcmxkQWxlcnRTdXBwcmVzc29yXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNJbnRlcmNlcHRGaWxlSW5wdXRDbGljayB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9pbnRlcmNlcHRGaWxlSW5wdXRDbGlja1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzS3VsYUNvbXBhbnlEb20gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMva3VsYUNvbXBhbnlEb21cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0xlYXJuQW5zd2VycyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9sZWFybkFuc3dlcnNcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc01hcmtSZWZyZXNoUmVxdWVzdGVkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL21hcmtSZWZyZXNoUmVxdWVzdGVkXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNNYXJrV2hhdHNOZXdSZWFkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL21hcmtXaGF0c05ld1JlYWRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc09wZW5BZ2VudEFwcGx5VGFiIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL29wZW5BZ2VudEFwcGx5VGFiXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNPcGVuQnJhc3NyaW5nRnVsbFBhZ2VBdXRvY29tcGxldGUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvb3BlbkJyYXNzcmluZ0Z1bGxQYWdlQXV0b2NvbXBsZXRlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNPcGVuRGF5Zm9yY2VQb2xpY3lUYWIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvb3BlbkRheWZvcmNlUG9saWN5VGFiXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNQYXJzZVBhZ2VNYXJrZG93biB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wYXJzZVBhZ2VNYXJrZG93blwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUGluZyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9waW5nXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNQb3N0QXBwbHlKb2IgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcG9zdEFwcGx5Sm9iXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNQb3N0QXV0b2ZpbGxBbnN3ZXJQYWlyQXR0cmlidXRlZCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0QXV0b2ZpbGxBbnN3ZXJQYWlyQXR0cmlidXRlZFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUG9zdEF1dG9maWxsRmVlZGJhY2sgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcG9zdEF1dG9maWxsRmVlZGJhY2tcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Bvc3RFdmVudFN1Ym1pdCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0RXZlbnRTdWJtaXRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Bvc3RFeHRlcm5hbEpvYkltcG9ydCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0RXh0ZXJuYWxKb2JJbXBvcnRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Bvc3RQbHVnaW5GZWVkYmFjayB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0UGx1Z2luRmVlZGJhY2tcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Bvc3RTaW1pbGFySm9iUG9wdXBFeHBvc3VyZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0U2ltaWxhckpvYlBvcHVwRXhwb3N1cmVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1ByZXBhcmVNZXRhQ2FyZWVyc0xvY2F0aW9uQ2FwdHVyZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wcmVwYXJlTWV0YUNhcmVlcnNMb2NhdGlvbkNhcHR1cmVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1ByZXBhcmVPcmFjbGVFZHVjYXRpb25Mb3ZDYXB0dXJlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3ByZXBhcmVPcmFjbGVFZHVjYXRpb25Mb3ZDYXB0dXJlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNQcmVwYXJlUGhlbm9tU2Nob29sQ2FwdHVyZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wcmVwYXJlUGhlbm9tU2Nob29sQ2FwdHVyZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUHJldmlld0Jhc2VSZXN1bWVCbG9iIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3ByZXZpZXdCYXNlUmVzdW1lQmxvYlwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUHJldmlld1RhaWxvclJlc3VtZUJsb2IgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcHJldmlld1RhaWxvclJlc3VtZUJsb2JcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1JlZ2VuZXJhdGVBbnN3ZXIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcmVnZW5lcmF0ZUFuc3dlclwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVsb2FkRXh0ZW5zaW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3JlbG9hZEV4dGVuc2lvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVwb3J0QXV0b2ZpbGxGaXJzdFVzZUF0dHJpYnV0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3JlcG9ydEF1dG9maWxsRmlyc3RVc2VBdHRyaWJ1dGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVxdWVzdEV4dGVuc2lvblVwZGF0ZUNoZWNrIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3JlcXVlc3RFeHRlbnNpb25VcGRhdGVDaGVja1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVzb2x2ZUFkZHJlc3NTdWdnZXN0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVBZGRyZXNzU3VnZ2VzdGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVzb2x2ZUF1dG9maWxsQ2xpZW50U2VhcmNoU3RlcCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQXV0b2ZpbGxDbGllbnRTZWFyY2hTdGVwXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNSZXNvbHZlQXV0b2ZpbGxPcGVyYXRpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUF1dG9maWxsT3BlcmF0aW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNSZXNvbHZlQ2FwdHVyZWRNZXRhQ2FyZWVyc0xvY2F0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVDYXB0dXJlZE1ldGFDYXJlZXJzTG9jYXRpb25cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Jlc29sdmVDYXB0dXJlZFBoZW5vbVNjaG9vbCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQ2FwdHVyZWRQaGVub21TY2hvb2xcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Jlc29sdmVKb2JJZEJ5VXJsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVKb2JJZEJ5VXJsXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNTYXZlQXV0b2ZpbGxJbmZvIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3NhdmVBdXRvZmlsbEluZm9cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1NhdmVFeHRlcm5hbEpvYklkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3NhdmVFeHRlcm5hbEpvYklkXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNTYXZlSm9iRGV0YWlsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3NhdmVKb2JEZXRhaWxcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1NhdmVTdWJtaXRTdGF0dXMgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvc2F2ZVN1Ym1pdFN0YXR1c1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzU2VhcmNoSWNpbXNQcm9maWxlT3B0aW9ucyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9zZWFyY2hJY2ltc1Byb2ZpbGVPcHRpb25zXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNTZWxlY3RJY2ltc1Byb2ZpbGVPcHRpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvc2VsZWN0SWNpbXNQcm9maWxlT3B0aW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNTZXRUYWJKb2JJZCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9zZXRUYWJKb2JJZFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzVXBkYXRlQXV0b2ZpbGxTZWN0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3VwZGF0ZUF1dG9maWxsU2VjdGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzVXBkYXRlUmVzdW1lQ29sbGVjdGlvbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy91cGRhdGVSZXN1bWVDb2xsZWN0aW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNVcGxvYWRCcmFzc3JpbmdQcm9maWxlQnVpbGRlckZpbGUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvdXBsb2FkQnJhc3NyaW5nUHJvZmlsZUJ1aWxkZXJGaWxlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNXYWl0Rm9yUGhlbm9tU2Nob29sQ2FwdHVyZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy93YWl0Rm9yUGhlbm9tU2Nob29sQ2FwdHVyZVwiXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICBzd2l0Y2ggKHJlcXVlc3Q/Lm5hbWUpIHtcbiAgICBcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIHN3aXRjaCAocmVxdWVzdC5uYW1lKSB7XG4gICAgY2FzZSBcImFjY2VwdEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uXCI6XG4gIG1lc3NhZ2VzQWNjZXB0QXV0b2ZpbGxJbnN0YWxsQXR0cmlidXRpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiYWN0aXZhdGVIZWxwZXJPblRhYlwiOlxuICBtZXNzYWdlc0FjdGl2YXRlSGVscGVyT25UYWIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiY29uc3VtZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmVcIjpcbiAgbWVzc2FnZXNDb25zdW1lT3JhY2xlRWR1Y2F0aW9uTG92Q2FwdHVyZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJjb252ZXJ0UmVzdW1lUGRmVG9Xb3JkXCI6XG4gIG1lc3NhZ2VzQ29udmVydFJlc3VtZVBkZlRvV29yZCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJjb3VudEV4dGVybmFsSm9iSWRzXCI6XG4gIG1lc3NhZ2VzQ291bnRFeHRlcm5hbEpvYklkcyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJmbHVzaEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uXCI6XG4gIG1lc3NhZ2VzRmx1c2hBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZW5lcmF0ZUF1dG9maWxsQ292ZXJMZXR0ZXJcIjpcbiAgbWVzc2FnZXNHZW5lcmF0ZUF1dG9maWxsQ292ZXJMZXR0ZXIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0QWJVc2VyXCI6XG4gIG1lc3NhZ2VzR2V0QWJVc2VyKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEFkZHJlc3NTdWdnZXN0aW9uc1wiOlxuICBtZXNzYWdlc0dldEFkZHJlc3NTdWdnZXN0aW9ucyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRBZ2VudENvdmVyTGV0dGVyXCI6XG4gIG1lc3NhZ2VzR2V0QWdlbnRDb3ZlckxldHRlcih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRBZ2VudFFMUnVsZVwiOlxuICBtZXNzYWdlc0dldEFnZW50UWxSdWxlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEFnZW50VGFpbG9yUmVzdW1lXCI6XG4gIG1lc3NhZ2VzR2V0QWdlbnRUYWlsb3JSZXN1bWUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0QXV0b2ZpbGxDb25maWdcIjpcbiAgbWVzc2FnZXNHZXRBdXRvZmlsbENvbmZpZyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRBdXRvZmlsbEluZm9cIjpcbiAgbWVzc2FnZXNHZXRBdXRvZmlsbEluZm8oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0QmFzZVJlc3VtZUJsb2JcIjpcbiAgbWVzc2FnZXNHZXRCYXNlUmVzdW1lQmxvYih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRDb21wYW55TmFtZUxpc3RcIjpcbiAgbWVzc2FnZXNHZXRDb21wYW55TmFtZUxpc3Qoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0Q292ZXJMZXR0ZXJCbG9iXCI6XG4gIG1lc3NhZ2VzR2V0Q292ZXJMZXR0ZXJCbG9iKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldENyZWRpdEZlZWRcIjpcbiAgbWVzc2FnZXNHZXRDcmVkaXRGZWVkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldENyZWRpdHNMZWZ0XCI6XG4gIG1lc3NhZ2VzR2V0Q3JlZGl0c0xlZnQoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0Q3JlZGl0U3dpdGNoU3RhdHVzXCI6XG4gIG1lc3NhZ2VzR2V0Q3JlZGl0U3dpdGNoU3RhdHVzKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEN1cnJlbnRDb3ZlckxldHRlclwiOlxuICBtZXNzYWdlc0dldEN1cnJlbnRDb3ZlckxldHRlcih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRDdXJyZW50RmlsbEFuc3dlclwiOlxuICBtZXNzYWdlc0dldEN1cnJlbnRGaWxsQW5zd2VyKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEN1cnJlbnRUYWJJZFwiOlxuICBtZXNzYWdlc0dldEN1cnJlbnRUYWJJZCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRDdXJyZW50VGFiVXJsXCI6XG4gIG1lc3NhZ2VzR2V0Q3VycmVudFRhYlVybCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXREZWdyZWVTdWdnZXN0aW9uc1wiOlxuICBtZXNzYWdlc0dldERlZ3JlZVN1Z2dlc3Rpb25zKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEV4dGVybmFsSm9iSWRcIjpcbiAgbWVzc2FnZXNHZXRFeHRlcm5hbEpvYklkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEV4dGVybmFsSm9iU3RhdHVzXCI6XG4gIG1lc3NhZ2VzR2V0RXh0ZXJuYWxKb2JTdGF0dXMoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0R3B0UmVzdWx0c1wiOlxuICBtZXNzYWdlc0dldEdwdFJlc3VsdHMoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0Sm9iQmFubmVyRGV0YWlsXCI6XG4gIG1lc3NhZ2VzR2V0Sm9iQmFubmVyRGV0YWlsKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEpvYkRldGFpbFwiOlxuICBtZXNzYWdlc0dldEpvYkRldGFpbCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRNYWpvclN1Z2dlc3Rpb25zXCI6XG4gIG1lc3NhZ2VzR2V0TWFqb3JTdWdnZXN0aW9ucyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRPcGVuQ2l0aWVzQnlSZWdpb25cIjpcbiAgbWVzc2FnZXNHZXRPcGVuQ2l0aWVzQnlSZWdpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0T3BlblJlZ2lvbnNcIjpcbiAgbWVzc2FnZXNHZXRPcGVuUmVnaW9ucyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRQYWdlTGlua2VkaW5Kb2JJbmZvXCI6XG4gIG1lc3NhZ2VzR2V0UGFnZUxpbmtlZGluSm9iSW5mbyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRQYXltZW50UHJpY2VcIjpcbiAgbWVzc2FnZXNHZXRQYXltZW50UHJpY2Uoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0UmVsZWFzZUNvbmZpZ1wiOlxuICBtZXNzYWdlc0dldFJlbGVhc2VDb25maWcoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0UmVzdW1lQmxvYlwiOlxuICBtZXNzYWdlc0dldFJlc3VtZUJsb2Ioe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0UmVzdW1lQ29sbGVjdGlvblwiOlxuICBtZXNzYWdlc0dldFJlc3VtZUNvbGxlY3Rpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0UmVzdW1lRGlhZ25vc2VcIjpcbiAgbWVzc2FnZXNHZXRSZXN1bWVEaWFnbm9zZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRSZXN1bWVJbmZvXCI6XG4gIG1lc3NhZ2VzR2V0UmVzdW1lSW5mbyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRTaW1pbGFySm9ic1wiOlxuICBtZXNzYWdlc0dldFNpbWlsYXJKb2JzKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFNpdGVUb2tlblwiOlxuICBtZXNzYWdlc0dldFNpdGVUb2tlbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRUYWJDb250ZXh0XCI6XG4gIG1lc3NhZ2VzR2V0VGFiQ29udGV4dCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRUYWJKb2JJZFwiOlxuICBtZXNzYWdlc0dldFRhYkpvYklkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFRhaWxvclJlc3VtZVwiOlxuICBtZXNzYWdlc0dldFRhaWxvclJlc3VtZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRUYWlsb3JSZXN1bWVCbG9iXCI6XG4gIG1lc3NhZ2VzR2V0VGFpbG9yUmVzdW1lQmxvYih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRUYWlsb3JSZXN1bWVGaWxlTmFtZVwiOlxuICBtZXNzYWdlc0dldFRhaWxvclJlc3VtZUZpbGVOYW1lKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFVzZXJQcm9maWxlXCI6XG4gIG1lc3NhZ2VzR2V0VXNlclByb2ZpbGUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0VmVyc2lvblVwZGF0ZVN0YXRlXCI6XG4gIG1lc3NhZ2VzR2V0VmVyc2lvblVwZGF0ZVN0YXRlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImluamVjdEFzaGJ5RmllbGRNZXRhZGF0YVwiOlxuICBtZXNzYWdlc0luamVjdEFzaGJ5RmllbGRNZXRhZGF0YSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJpbmplY3RIZWxwZXJBcHBCdW5kbGVcIjpcbiAgbWVzc2FnZXNJbmplY3RIZWxwZXJBcHBCdW5kbGUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiaW5qZWN0UmVhY3RTZWxlY3RGaWJlclwiOlxuICBtZXNzYWdlc0luamVjdFJlYWN0U2VsZWN0RmliZXIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiaW5qZWN0UmVjcnVpdGVlRmliZXJcIjpcbiAgbWVzc2FnZXNJbmplY3RSZWNydWl0ZWVGaWJlcih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJpbmplY3RXb3JrYWJsZUNoZWNrYm94XCI6XG4gIG1lc3NhZ2VzSW5qZWN0V29ya2FibGVDaGVja2JveCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJpbmplY3RXb3JrZGF5RmliZXJcIjpcbiAgbWVzc2FnZXNJbmplY3RXb3JrZGF5RmliZXIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiaW5zdGFsbE1haW5Xb3JsZEFsZXJ0U3VwcHJlc3NvclwiOlxuICBtZXNzYWdlc0luc3RhbGxNYWluV29ybGRBbGVydFN1cHByZXNzb3Ioe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiaW50ZXJjZXB0RmlsZUlucHV0Q2xpY2tcIjpcbiAgbWVzc2FnZXNJbnRlcmNlcHRGaWxlSW5wdXRDbGljayh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJrdWxhQ29tcGFueURvbVwiOlxuICBtZXNzYWdlc0t1bGFDb21wYW55RG9tKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImxlYXJuQW5zd2Vyc1wiOlxuICBtZXNzYWdlc0xlYXJuQW5zd2Vycyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJtYXJrUmVmcmVzaFJlcXVlc3RlZFwiOlxuICBtZXNzYWdlc01hcmtSZWZyZXNoUmVxdWVzdGVkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcIm1hcmtXaGF0c05ld1JlYWRcIjpcbiAgbWVzc2FnZXNNYXJrV2hhdHNOZXdSZWFkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcIm9wZW5BZ2VudEFwcGx5VGFiXCI6XG4gIG1lc3NhZ2VzT3BlbkFnZW50QXBwbHlUYWIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwib3BlbkJyYXNzcmluZ0Z1bGxQYWdlQXV0b2NvbXBsZXRlXCI6XG4gIG1lc3NhZ2VzT3BlbkJyYXNzcmluZ0Z1bGxQYWdlQXV0b2NvbXBsZXRlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcIm9wZW5EYXlmb3JjZVBvbGljeVRhYlwiOlxuICBtZXNzYWdlc09wZW5EYXlmb3JjZVBvbGljeVRhYih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwYXJzZVBhZ2VNYXJrZG93blwiOlxuICBtZXNzYWdlc1BhcnNlUGFnZU1hcmtkb3duKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInBpbmdcIjpcbiAgbWVzc2FnZXNQaW5nKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInBvc3RBcHBseUpvYlwiOlxuICBtZXNzYWdlc1Bvc3RBcHBseUpvYih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwb3N0QXV0b2ZpbGxBbnN3ZXJQYWlyQXR0cmlidXRlZFwiOlxuICBtZXNzYWdlc1Bvc3RBdXRvZmlsbEFuc3dlclBhaXJBdHRyaWJ1dGVkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInBvc3RBdXRvZmlsbEZlZWRiYWNrXCI6XG4gIG1lc3NhZ2VzUG9zdEF1dG9maWxsRmVlZGJhY2soe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicG9zdEV2ZW50U3VibWl0XCI6XG4gIG1lc3NhZ2VzUG9zdEV2ZW50U3VibWl0KHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInBvc3RFeHRlcm5hbEpvYkltcG9ydFwiOlxuICBtZXNzYWdlc1Bvc3RFeHRlcm5hbEpvYkltcG9ydCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwb3N0UGx1Z2luRmVlZGJhY2tcIjpcbiAgbWVzc2FnZXNQb3N0UGx1Z2luRmVlZGJhY2soe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicG9zdFNpbWlsYXJKb2JQb3B1cEV4cG9zdXJlXCI6XG4gIG1lc3NhZ2VzUG9zdFNpbWlsYXJKb2JQb3B1cEV4cG9zdXJlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInByZXBhcmVNZXRhQ2FyZWVyc0xvY2F0aW9uQ2FwdHVyZVwiOlxuICBtZXNzYWdlc1ByZXBhcmVNZXRhQ2FyZWVyc0xvY2F0aW9uQ2FwdHVyZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwcmVwYXJlT3JhY2xlRWR1Y2F0aW9uTG92Q2FwdHVyZVwiOlxuICBtZXNzYWdlc1ByZXBhcmVPcmFjbGVFZHVjYXRpb25Mb3ZDYXB0dXJlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInByZXBhcmVQaGVub21TY2hvb2xDYXB0dXJlXCI6XG4gIG1lc3NhZ2VzUHJlcGFyZVBoZW5vbVNjaG9vbENhcHR1cmUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicHJldmlld0Jhc2VSZXN1bWVCbG9iXCI6XG4gIG1lc3NhZ2VzUHJldmlld0Jhc2VSZXN1bWVCbG9iKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInByZXZpZXdUYWlsb3JSZXN1bWVCbG9iXCI6XG4gIG1lc3NhZ2VzUHJldmlld1RhaWxvclJlc3VtZUJsb2Ioe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicmVnZW5lcmF0ZUFuc3dlclwiOlxuICBtZXNzYWdlc1JlZ2VuZXJhdGVBbnN3ZXIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicmVsb2FkRXh0ZW5zaW9uXCI6XG4gIG1lc3NhZ2VzUmVsb2FkRXh0ZW5zaW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInJlcG9ydEF1dG9maWxsRmlyc3RVc2VBdHRyaWJ1dGlvblwiOlxuICBtZXNzYWdlc1JlcG9ydEF1dG9maWxsRmlyc3RVc2VBdHRyaWJ1dGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJyZXF1ZXN0RXh0ZW5zaW9uVXBkYXRlQ2hlY2tcIjpcbiAgbWVzc2FnZXNSZXF1ZXN0RXh0ZW5zaW9uVXBkYXRlQ2hlY2soe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicmVzb2x2ZUFkZHJlc3NTdWdnZXN0aW9uXCI6XG4gIG1lc3NhZ2VzUmVzb2x2ZUFkZHJlc3NTdWdnZXN0aW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInJlc29sdmVBdXRvZmlsbENsaWVudFNlYXJjaFN0ZXBcIjpcbiAgbWVzc2FnZXNSZXNvbHZlQXV0b2ZpbGxDbGllbnRTZWFyY2hTdGVwKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInJlc29sdmVBdXRvZmlsbE9wZXJhdGlvblwiOlxuICBtZXNzYWdlc1Jlc29sdmVBdXRvZmlsbE9wZXJhdGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJyZXNvbHZlQ2FwdHVyZWRNZXRhQ2FyZWVyc0xvY2F0aW9uXCI6XG4gIG1lc3NhZ2VzUmVzb2x2ZUNhcHR1cmVkTWV0YUNhcmVlcnNMb2NhdGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJyZXNvbHZlQ2FwdHVyZWRQaGVub21TY2hvb2xcIjpcbiAgbWVzc2FnZXNSZXNvbHZlQ2FwdHVyZWRQaGVub21TY2hvb2woe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicmVzb2x2ZUpvYklkQnlVcmxcIjpcbiAgbWVzc2FnZXNSZXNvbHZlSm9iSWRCeVVybCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJzYXZlQXV0b2ZpbGxJbmZvXCI6XG4gIG1lc3NhZ2VzU2F2ZUF1dG9maWxsSW5mbyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJzYXZlRXh0ZXJuYWxKb2JJZFwiOlxuICBtZXNzYWdlc1NhdmVFeHRlcm5hbEpvYklkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInNhdmVKb2JEZXRhaWxcIjpcbiAgbWVzc2FnZXNTYXZlSm9iRGV0YWlsKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInNhdmVTdWJtaXRTdGF0dXNcIjpcbiAgbWVzc2FnZXNTYXZlU3VibWl0U3RhdHVzKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInNlYXJjaEljaW1zUHJvZmlsZU9wdGlvbnNcIjpcbiAgbWVzc2FnZXNTZWFyY2hJY2ltc1Byb2ZpbGVPcHRpb25zKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInNlbGVjdEljaW1zUHJvZmlsZU9wdGlvblwiOlxuICBtZXNzYWdlc1NlbGVjdEljaW1zUHJvZmlsZU9wdGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJzZXRUYWJKb2JJZFwiOlxuICBtZXNzYWdlc1NldFRhYkpvYklkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInVwZGF0ZUF1dG9maWxsU2VjdGlvblwiOlxuICBtZXNzYWdlc1VwZGF0ZUF1dG9maWxsU2VjdGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJ1cGRhdGVSZXN1bWVDb2xsZWN0aW9uXCI6XG4gIG1lc3NhZ2VzVXBkYXRlUmVzdW1lQ29sbGVjdGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJ1cGxvYWRCcmFzc3JpbmdQcm9maWxlQnVpbGRlckZpbGVcIjpcbiAgbWVzc2FnZXNVcGxvYWRCcmFzc3JpbmdQcm9maWxlQnVpbGRlckZpbGUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwid2FpdEZvclBoZW5vbVNjaG9vbENhcHR1cmVcIjpcbiAgbWVzc2FnZXNXYWl0Rm9yUGhlbm9tU2Nob29sQ2FwdHVyZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuXG5jaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocG9ydCkge1xuICBnbG9iYWxUaGlzLl9fcGxhc21vSW50ZXJuYWxQb3J0TWFwLnNldChwb3J0Lm5hbWUsIHBvcnQpXG4gIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICBzd2l0Y2ggKHBvcnQubmFtZSkge1xuICAgICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVha1xuICAgIH1cbiAgfSlcbn0pXG5cbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2FjY2VwdEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImFjY2VwdEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxyXG5cclxuY29uc3QgSEVMUEVSX0JVTkRMRSA9IFwiYXNzZXRzL2hlbHBlci1hcHAuanNcIlxyXG5cclxuLyoqXHJcbiAqIEFjdGl2YXRlIHRoZSBoZWxwZXIgb24gYSB0YWIgZnJvbSB0aGUgcG9wdXAuXHJcbiAqXHJcbiAqIFwiUmVjZWl2aW5nIGVuZCBkb2VzIG5vdCBleGlzdFwiIG1lYW5zIG5vIGNvbnRlbnQgc2NyaXB0IGlzIGxpc3RlbmluZ1xyXG4gKiAocGFnZSBvcGVuZWQgYmVmb3JlIHRoZSBleHRlbnNpb24gbG9hZGVkLCBvciBDUyBub3QgaW5qZWN0ZWQgeWV0KS5cclxuICogUmUtaW5qZWN0aW5nIFBsYXNtbydzIENTIHZpYSBzY3JpcHRpbmcgb2Z0ZW4gc3RpbGwgZmFpbHMgdG8gYXR0YWNoXHJcbiAqIGxpc3RlbmVycywgc28gd2UgZmFsbCBiYWNrIHRvIGluamVjdGluZyB0aGUgaGVscGVyIGJ1bmRsZSBkaXJlY3RseS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHBpbmdJY29uQ2xpY2tlZCh0YWJJZDogbnVtYmVyKSB7XHJcbiAgYXdhaXQgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgbWVzc2FnZTogXCJpY29uQ2xpY2tlZFwiIH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluamVjdEhlbHBlckRpcmVjdGx5KHRhYklkOiBudW1iZXIpIHtcclxuICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xyXG4gICAgdGFyZ2V0OiB7IHRhYklkLCBhbGxGcmFtZXM6IHRydWUgfSxcclxuICAgIGZpbGVzOiBbSEVMUEVSX0JVTkRMRV0sXHJcbiAgICB3b3JsZDogXCJJU09MQVRFRFwiXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZXN0cmljdGVkVXJsKHVybD86IHN0cmluZykge1xyXG4gIGlmICghdXJsKSByZXR1cm4gdHJ1ZVxyXG4gIHJldHVybiAvXihjaHJvbWV8Y2hyb21lLWV4dGVuc2lvbnxlZGdlfGFib3V0fGRldnRvb2xzfHZpZXctc291cmNlKTovaS50ZXN0KFxyXG4gICAgdXJsXHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXI8eyB0YWJJZD86IG51bWJlciB9PiA9IGFzeW5jIChcclxuICByZXEsXHJcbiAgcmVzXHJcbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0YWJJZCA9IHJlcS5ib2R5Py50YWJJZFxyXG4gICAgaWYgKHR5cGVvZiB0YWJJZCAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJtaXNzaW5nX3RhYlwiIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhYiA9IGF3YWl0IGNocm9tZS50YWJzLmdldCh0YWJJZClcclxuICAgIGlmIChpc1Jlc3RyaWN0ZWRVcmwodGFiLnVybCkpIHtcclxuICAgICAgcmVzLnNlbmQoe1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBcIk9wZW4gYSBqb2IgYXBwbGljYXRpb24gcGFnZSAobm90IGEgYnJvd3NlciBpbnRlcm5hbCBwYWdlKS5cIlxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBwaW5nSWNvbkNsaWNrZWQodGFiSWQpXHJcbiAgICAgIHJlcy5zZW5kKHsgc3VjY2VzczogdHJ1ZSwgbW9kZTogXCJjb250ZW50X3NjcmlwdFwiIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfSBjYXRjaCAocGluZ0Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIlthY3RpdmF0ZUhlbHBlck9uVGFiXSBjb250ZW50IHNjcmlwdCBtaXNzaW5nLCBpbmplY3RpbmcgaGVscGVyIGRpcmVjdGx5OlwiLFxyXG4gICAgICAgIHBpbmdFcnJvciBpbnN0YW5jZW9mIEVycm9yID8gcGluZ0Vycm9yLm1lc3NhZ2UgOiBwaW5nRXJyb3JcclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGluamVjdEhlbHBlckRpcmVjdGx5KHRhYklkKVxyXG4gICAgcmVzLnNlbmQoeyBzdWNjZXNzOiB0cnVlLCBtb2RlOiBcImRpcmVjdF9pbmplY3RcIiB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiW2FjdGl2YXRlSGVscGVyT25UYWJdIGZhaWxlZDpcIiwgZXJyb3IpXHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjpcclxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yXHJcbiAgICAgICAgICA/IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICAgIDogXCJDb3VsZCBub3QgYWN0aXZhdGUgaGVscGVyIOKAlCByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5cIlxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvY29uc3VtZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmUuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiY29uc3VtZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmVcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvY29udmVydFJlc3VtZVBkZlRvV29yZC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJjb252ZXJ0UmVzdW1lUGRmVG9Xb3JkXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2NvdW50RXh0ZXJuYWxKb2JJZHMuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiY291bnRFeHRlcm5hbEpvYklkc1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9mbHVzaEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImZsdXNoQXV0b2ZpbGxJbnN0YWxsQXR0cmlidXRpb25cIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2VuZXJhdGVBdXRvZmlsbENvdmVyTGV0dGVyLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdlbmVyYXRlQXV0b2ZpbGxDb3ZlckxldHRlclwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBYlVzZXIuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0QWJVc2VyXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFkZHJlc3NTdWdnZXN0aW9ucy5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRBZGRyZXNzU3VnZ2VzdGlvbnNcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0QWdlbnRDb3ZlckxldHRlci5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRBZ2VudENvdmVyTGV0dGVyXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFnZW50UUxSdWxlLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldEFnZW50UUxSdWxlXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFnZW50VGFpbG9yUmVzdW1lLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldEFnZW50VGFpbG9yUmVzdW1lXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEF1dG9maWxsQ29uZmlnLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldEF1dG9maWxsQ29uZmlnXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5pbXBvcnQgeyBmZXRjaEF1dG9maWxsSW5mbyB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcblxuLyoqXG4gKiBSZXR1cm5zIGF1dG9maWxsIHBheWxvYWQgZm9yIHRoZSBzZWxlY3RlZCB0ZWFtIHByb2ZpbGUuXG4gKiBCb2R5OiB7IGZvcmNlUmVmcmVzaD86IGJvb2xlYW4sIHByb2ZpbGVJZD86IHN0cmluZyB9XG4gKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHByb2ZpbGVJZCA9XG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LnByb2ZpbGVJZCA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnByb2ZpbGVJZCA6IG51bGxcbiAgICBjb25zdCBhdXRvZmlsbEluZm8gPSBhd2FpdCBmZXRjaEF1dG9maWxsSW5mbyhwcm9maWxlSWQpXG5cbiAgICBpZiAoIWF1dG9maWxsSW5mbykge1xuICAgICAgcmVzLnNlbmQoe1xuICAgICAgICBvazogZmFsc2UsXG4gICAgICAgIGF1dG9maWxsSW5mbzogbnVsbCxcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICBcIk5vIHByb2ZpbGUgc2VsZWN0ZWQgb3IgdGVhbSBodWIgbm90IGNvbm5lY3RlZC4gT3BlbiBleHRlbnNpb24gb3B0aW9ucy5cIlxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgZGF0YTogYXV0b2ZpbGxJbmZvLFxuICAgICAgYXV0b2ZpbGxJbmZvLFxuICAgICAgYXV0b1VwZGF0ZTogdHJ1ZSxcbiAgICAgIHJldmlzaW9uOiBudWxsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgYXV0b2ZpbGxJbmZvOiBudWxsLFxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiZmV0Y2hfZmFpbGVkXCJcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsIi8qKlxuICogVGVhbSBBdXRvZmlsbCBIdWIgY2xpZW50IOKAlCB0YWxrcyB0byB0ZWFtLXNpdGUgL2FwaSB3aXRoIHNlc3Npb24gSldUIG9yIEFQSSB0b2tlbi5cbiAqL1xuXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIkBwbGFzbW9ocS9zdG9yYWdlXCJcblxuaW1wb3J0IHsgVEVBTV9TSVRFX1VSTCwgZ2V0SHViVXJsIH0gZnJvbSBcIn5hcGkvZW52LXJlc29sdmVyXCJcbmltcG9ydCB0eXBlIHsgQXV0b2ZpbGxJbmZvUGF5bG9hZCwgUHJvZmlsZVN1bW1hcnksIFRlYW1TZXR0aW5ncyB9IGZyb20gXCJ+YXBpL3RlYW0tdHlwZXNcIlxuXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoeyBhcmVhOiBcImxvY2FsXCIgfSlcblxuZXhwb3J0IGNvbnN0IFRFQU1fU0VUVElOR1NfS0VZID0gXCJ0ZWFtSHViU2V0dGluZ3NcIlxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9URUFNX1NFVFRJTkdTOiBUZWFtU2V0dGluZ3MgPSB7XG4gIHNpdGVVcmw6IGdldEh1YlVybCgpLFxuICBhcGlUb2tlbjogXCJcIixcbiAgc2VsZWN0ZWRQcm9maWxlSWQ6IG51bGwsXG4gIHVzZXJFbWFpbDogXCJcIixcbiAgdXNlck5hbWU6IFwiXCJcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRlYW1TZXR0aW5ncygpOiBQcm9taXNlPFRlYW1TZXR0aW5ncz4ge1xuICBjb25zdCBzYXZlZCA9IGF3YWl0IHN0b3JhZ2UuZ2V0PFRlYW1TZXR0aW5ncz4oVEVBTV9TRVRUSU5HU19LRVkpXG4gIHJldHVybiB7IC4uLkRFRkFVTFRfVEVBTV9TRVRUSU5HUywgLi4uKHNhdmVkIHx8IHt9KSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlVGVhbVNldHRpbmdzKFxuICBwYXRjaDogUGFydGlhbDxUZWFtU2V0dGluZ3M+XG4pOiBQcm9taXNlPFRlYW1TZXR0aW5ncz4ge1xuICBjb25zdCBuZXh0ID0geyAuLi4oYXdhaXQgZ2V0VGVhbVNldHRpbmdzKCkpLCAuLi5wYXRjaCB9XG4gIGF3YWl0IHN0b3JhZ2Uuc2V0KFRFQU1fU0VUVElOR1NfS0VZLCBuZXh0KVxuICByZXR1cm4gbmV4dFxufVxuXG5mdW5jdGlvbiBqb2luVXJsKGJhc2U6IHN0cmluZywgcGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHJvb3QgPSBiYXNlLnJlcGxhY2UoL1xcLyskLywgXCJcIilcbiAgY29uc3QgcCA9IHBhdGguc3RhcnRzV2l0aChcIi9cIikgPyBwYXRoIDogYC8ke3BhdGh9YFxuICByZXR1cm4gYCR7cm9vdH0ke3B9YFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVhbUZldGNoPFQgPSB1bmtub3duPihcbiAgcGF0aDogc3RyaW5nLFxuICBpbml0OiBSZXF1ZXN0SW5pdCA9IHt9XG4pOiBQcm9taXNlPHsgb2s6IGJvb2xlYW47IHN0YXR1czogbnVtYmVyOyBkYXRhOiBUIH0+IHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBnZXRUZWFtU2V0dGluZ3MoKVxuICBpZiAoIXNldHRpbmdzLmFwaVRva2VuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIHN0YXR1czogNDAxLFxuICAgICAgZGF0YTogeyBvazogZmFsc2UsIGVycm9yOiBcIm5vdF9zaWduZWRfaW5cIiB9IGFzIFRcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5pdC5oZWFkZXJzIHx8IHt9KVxuICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke3NldHRpbmdzLmFwaVRva2VufWApXG4gIGlmIChpbml0LmJvZHkgJiYgIShpbml0LmJvZHkgaW5zdGFuY2VvZiBGb3JtRGF0YSkgJiYgIWhlYWRlcnMuaGFzKFwiQ29udGVudC1UeXBlXCIpKSB7XG4gICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXG4gIH1cblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChqb2luVXJsKHNldHRpbmdzLnNpdGVVcmwsIHBhdGgpLCB7XG4gICAgLi4uaW5pdCxcbiAgICBoZWFkZXJzXG4gIH0pXG5cbiAgY29uc3QgY29udGVudFR5cGUgPSByZXMuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIikgfHwgXCJcIlxuICBsZXQgZGF0YTogVFxuICBpZiAoY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgZGF0YSA9IChhd2FpdCByZXMuanNvbigpKSBhcyBUXG4gIH0gZWxzZSB7XG4gICAgZGF0YSA9IChhd2FpdCByZXMudGV4dCgpKSBhcyBUXG4gIH1cblxuICByZXR1cm4geyBvazogcmVzLm9rLCBzdGF0dXM6IHJlcy5zdGF0dXMsIGRhdGEgfVxufVxuXG4vKiogU2lnbiBpbiB3aXRoIGh1YiBlbWFpbC9wYXNzd29yZDsgc3RvcmVzIHNlc3Npb24gSldUIGZvciBBUEkgY2FsbHMuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbkluV2l0aFBhc3N3b3JkKG9wdHM6IHtcbiAgc2l0ZVVybD86IHN0cmluZ1xuICBlbWFpbDogc3RyaW5nXG4gIHBhc3N3b3JkOiBzdHJpbmdcbn0pOiBQcm9taXNlPHtcbiAgb2s6IGJvb2xlYW5cbiAgZXJyb3I/OiBzdHJpbmdcbiAgdXNlcj86IHsgZW1haWw6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1cbn0+IHtcbiAgY29uc3QgY3VycmVudCA9IGF3YWl0IGdldFRlYW1TZXR0aW5ncygpXG4gIGNvbnN0IHNpdGVVcmwgPSAob3B0cy5zaXRlVXJsIHx8IGN1cnJlbnQuc2l0ZVVybCB8fCBURUFNX1NJVEVfVVJMKS5yZXBsYWNlKFxuICAgIC9cXC8rJC8sXG4gICAgXCJcIlxuICApXG4gIGNvbnN0IGVtYWlsID0gb3B0cy5lbWFpbC50cmltKCkudG9Mb3dlckNhc2UoKVxuICBjb25zdCBwYXNzd29yZCA9IG9wdHMucGFzc3dvcmRcblxuICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgIHJldHVybiB7IG9rOiBmYWxzZSwgZXJyb3I6IFwiRW1haWwgYW5kIHBhc3N3b3JkIHJlcXVpcmVkXCIgfVxuICB9XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goam9pblVybChzaXRlVXJsLCBcIi9hcGkvYXV0aC9sb2dpblwiKSwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pXG4gIH0pXG5cbiAgY29uc3QgZGF0YSA9IChhd2FpdCByZXMuanNvbigpLmNhdGNoKCgpID0+IG51bGwpKSBhcyB7XG4gICAgb2s/OiBib29sZWFuXG4gICAgZXJyb3I/OiBzdHJpbmdcbiAgICB0b2tlbj86IHN0cmluZ1xuICAgIHVzZXI/OiB7IGVtYWlsOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgaWQ6IHN0cmluZyB9XG4gIH0gfCBudWxsXG5cbiAgaWYgKCFyZXMub2sgfHwgIWRhdGE/Lm9rIHx8ICFkYXRhLnRva2VuIHx8ICFkYXRhLnVzZXIpIHtcbiAgICBjb25zdCBlcnIgPSBkYXRhPy5lcnJvclxuICAgIGlmIChlcnIgPT09IFwiaW52YWxpZF9jcmVkZW50aWFsc1wiKSB7XG4gICAgICByZXR1cm4geyBvazogZmFsc2UsIGVycm9yOiBcIldyb25nIGVtYWlsIG9yIHBhc3N3b3JkXCIgfVxuICAgIH1cbiAgICByZXR1cm4geyBvazogZmFsc2UsIGVycm9yOiBlcnIgfHwgXCJTaWduLWluIGZhaWxlZFwiIH1cbiAgfVxuXG4gIGF3YWl0IHNhdmVUZWFtU2V0dGluZ3Moe1xuICAgIHNpdGVVcmwsXG4gICAgYXBpVG9rZW46IGRhdGEudG9rZW4sXG4gICAgdXNlckVtYWlsOiBkYXRhLnVzZXIuZW1haWwsXG4gICAgdXNlck5hbWU6IGRhdGEudXNlci5uYW1lXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBvazogdHJ1ZSxcbiAgICB1c2VyOiB7IGVtYWlsOiBkYXRhLnVzZXIuZW1haWwsIG5hbWU6IGRhdGEudXNlci5uYW1lIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgc2F2ZVRlYW1TZXR0aW5ncyh7XG4gICAgYXBpVG9rZW46IFwiXCIsXG4gICAgdXNlckVtYWlsOiBcIlwiLFxuICAgIHVzZXJOYW1lOiBcIlwiLFxuICAgIHNlbGVjdGVkUHJvZmlsZUlkOiBudWxsXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0UHJvZmlsZXMoKTogUHJvbWlzZTxQcm9maWxlU3VtbWFyeVtdPiB7XG4gIGNvbnN0IHsgb2ssIGRhdGEgfSA9IGF3YWl0IHRlYW1GZXRjaDx7XG4gICAgb2s6IGJvb2xlYW5cbiAgICBwcm9maWxlcz86IFByb2ZpbGVTdW1tYXJ5W11cbiAgICBlcnJvcj86IHN0cmluZ1xuICB9PihcIi9hcGkvdjEvcHJvZmlsZXNcIilcbiAgaWYgKCFvayB8fCAhZGF0YS5vayB8fCAhZGF0YS5wcm9maWxlcykgcmV0dXJuIFtdXG4gIHJldHVybiBkYXRhLnByb2ZpbGVzXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEF1dG9maWxsSW5mbyhcbiAgcHJvZmlsZUlkPzogc3RyaW5nIHwgbnVsbFxuKTogUHJvbWlzZTxBdXRvZmlsbEluZm9QYXlsb2FkIHwgbnVsbD4ge1xuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFRlYW1TZXR0aW5ncygpXG4gIGNvbnN0IGlkID0gcHJvZmlsZUlkIHx8IHNldHRpbmdzLnNlbGVjdGVkUHJvZmlsZUlkXG4gIGlmICghaWQpIHJldHVybiBudWxsXG5cbiAgY29uc3QgeyBvaywgZGF0YSB9ID0gYXdhaXQgdGVhbUZldGNoPHtcbiAgICBvazogYm9vbGVhblxuICAgIGF1dG9maWxsSW5mbz86IEF1dG9maWxsSW5mb1BheWxvYWRcbiAgfT4oYC9hcGkvdjEvcHJvZmlsZXMvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfT9hdXRvZmlsbD0xYClcblxuICBpZiAoIW9rIHx8ICFkYXRhLm9rIHx8ICFkYXRhLmF1dG9maWxsSW5mbykgcmV0dXJuIG51bGxcbiAgcmV0dXJuIGRhdGEuYXV0b2ZpbGxJbmZvXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFJlc3VtZUJsb2IoXG4gIHJlc3VtZUlkOiBzdHJpbmdcbik6IFByb21pc2U8eyBibG9iOiBCbG9iOyBmaWxlTmFtZTogc3RyaW5nOyBtaW1lVHlwZTogc3RyaW5nIH0gfCBudWxsPiB7XG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0VGVhbVNldHRpbmdzKClcbiAgaWYgKCFzZXR0aW5ncy5hcGlUb2tlbikgcmV0dXJuIG51bGxcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBqb2luVXJsKHNldHRpbmdzLnNpdGVVcmwsIGAvYXBpL3YxL3Jlc3VtZXMvJHtlbmNvZGVVUklDb21wb25lbnQocmVzdW1lSWQpfS9kb3dubG9hZGApLFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3NldHRpbmdzLmFwaVRva2VufWAgfVxuICAgIH1cbiAgKVxuICBpZiAoIXJlcy5vaykgcmV0dXJuIG51bGxcblxuICBjb25zdCBibG9iID0gYXdhaXQgcmVzLmJsb2IoKVxuICBjb25zdCBkaXNwb3NpdGlvbiA9IHJlcy5oZWFkZXJzLmdldChcImNvbnRlbnQtZGlzcG9zaXRpb25cIikgfHwgXCJcIlxuICBjb25zdCBtYXRjaCA9IC9maWxlbmFtZT1cIihbXlwiXSspXCIvaS5leGVjKGRpc3Bvc2l0aW9uKVxuICByZXR1cm4ge1xuICAgIGJsb2IsXG4gICAgZmlsZU5hbWU6IG1hdGNoPy5bMV0gfHwgXCJyZXN1bWUucGRmXCIsXG4gICAgbWltZVR5cGU6IHJlcy5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSB8fCBibG9iLnR5cGUgfHwgXCJhcHBsaWNhdGlvbi9wZGZcIlxuICB9XG59XG5cbi8qKiBNZXJnZSBsZWFybmVkIFHihpJBIGludG8gdGhlIHNlbGVjdGVkIHByb2ZpbGUgb24gdGhlIGh1YiAoZ2xvYmFsICsgb3B0aW9uYWwgc2l0ZS9zdGVwKS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtZXJnZVByb2ZpbGVBbnN3ZXJzKFxuICBhbnN3ZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICBwcm9maWxlSWQ/OiBzdHJpbmcgfCBudWxsLFxuICBzY29wZT86IHtcbiAgICBzY29wZUtleT86IHN0cmluZyB8IG51bGxcbiAgICBob3N0bmFtZT86IHN0cmluZyB8IG51bGxcbiAgICBzdGVwS2V5Pzogc3RyaW5nIHwgbnVsbFxuICB9IHwgbnVsbFxuKTogUHJvbWlzZTx7XG4gIG9rOiBib29sZWFuXG4gIGFuc3dlcnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gIGV4dHJhcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGVycm9yPzogc3RyaW5nXG59PiB7XG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0VGVhbVNldHRpbmdzKClcbiAgY29uc3QgaWQgPSBwcm9maWxlSWQgfHwgc2V0dGluZ3Muc2VsZWN0ZWRQcm9maWxlSWRcbiAgaWYgKCFpZCkgcmV0dXJuIHsgb2s6IGZhbHNlLCBlcnJvcjogXCJub19wcm9maWxlXCIgfVxuICBpZiAoIU9iamVjdC5rZXlzKGFuc3dlcnMpLmxlbmd0aCkgcmV0dXJuIHsgb2s6IGZhbHNlLCBlcnJvcjogXCJlbXB0eVwiIH1cblxuICBjb25zdCBib2R5OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcbiAgICBhbnN3ZXJzLFxuICAgIGFuc3dlcnNNb2RlOiBcIm1lcmdlXCJcbiAgfVxuICBpZiAoc2NvcGU/LnNjb3BlS2V5KSB7XG4gICAgYm9keS5zY29wZUtleSA9IHNjb3BlLnNjb3BlS2V5XG4gICAgaWYgKHNjb3BlLmhvc3RuYW1lKSBib2R5Lmhvc3RuYW1lID0gc2NvcGUuaG9zdG5hbWVcbiAgICBpZiAoc2NvcGUuc3RlcEtleSkgYm9keS5zdGVwS2V5ID0gc2NvcGUuc3RlcEtleVxuICB9XG5cbiAgY29uc3QgeyBvaywgZGF0YSB9ID0gYXdhaXQgdGVhbUZldGNoPHtcbiAgICBvazogYm9vbGVhblxuICAgIGFuc3dlcnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgZXh0cmFzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICBlcnJvcj86IHN0cmluZ1xuICB9PihgL2FwaS92MS9wcm9maWxlcy8ke2VuY29kZVVSSUNvbXBvbmVudChpZCl9YCwge1xuICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG4gIH0pXG5cbiAgaWYgKCFvayB8fCAhZGF0YS5vaykge1xuICAgIHJldHVybiB7IG9rOiBmYWxzZSwgZXJyb3I6IGRhdGEuZXJyb3IgfHwgXCJzYXZlX2ZhaWxlZFwiIH1cbiAgfVxuICByZXR1cm4geyBvazogdHJ1ZSwgYW5zd2VyczogZGF0YS5hbnN3ZXJzLCBleHRyYXM6IGRhdGEuZXh0cmFzIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVRlYW1Db25uZWN0aW9uKCk6IFByb21pc2U8e1xuICBvazogYm9vbGVhblxuICBlbWFpbD86IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nXG4gIGVycm9yPzogc3RyaW5nXG59PiB7XG4gIGNvbnN0IHsgb2ssIGRhdGEgfSA9IGF3YWl0IHRlYW1GZXRjaDx7XG4gICAgb2s6IGJvb2xlYW5cbiAgICB1c2VyPzogeyBlbWFpbDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVxuICAgIGVycm9yPzogc3RyaW5nXG4gIH0+KFwiL2FwaS9hdXRoL21lXCIpXG5cbiAgaWYgKCFvayB8fCAhZGF0YS5vayB8fCAhZGF0YS51c2VyKSB7XG4gICAgcmV0dXJuIHsgb2s6IGZhbHNlLCBlcnJvcjogZGF0YS5lcnJvciB8fCBcInVuYXV0aG9yaXplZFwiIH1cbiAgfVxuICByZXR1cm4geyBvazogdHJ1ZSwgZW1haWw6IGRhdGEudXNlci5lbWFpbCwgbmFtZTogZGF0YS51c2VyLm5hbWUgfVxufVxuIiwiaW1wb3J0IG0gZnJvbVwicGlmeVwiO3ZhciBsPSgpPT57dHJ5e2xldCBlPShnbG9iYWxUaGlzLm5hdmlnYXRvcj8udXNlckFnZW50KS5tYXRjaCgvKG9wZXJhfGNocm9tZXxzYWZhcml8ZmlyZWZveHxtc2llfHRyaWRlbnQoPz1cXC8pKVxcLz9cXHMqKFxcZCspL2kpfHxbXTtpZihlWzFdPT09XCJDaHJvbWVcIilyZXR1cm4gcGFyc2VJbnQoZVsyXSk8MTAwfHxnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lPy5nZXRNYW5pZmVzdCgpPy5tYW5pZmVzdF92ZXJzaW9uPT09Mn1jYXRjaHtyZXR1cm4hMX1yZXR1cm4hMX07dmFyIG89Y2xhc3N7I3I7I3Q7Z2V0IHByaW1hcnlDbGllbnQoKXtyZXR1cm4gdGhpcy4jdH0jZTtnZXQgc2Vjb25kYXJ5Q2xpZW50KCl7cmV0dXJuIHRoaXMuI2V9I2E7Z2V0IGFyZWEoKXtyZXR1cm4gdGhpcy4jYX1nZXQgaGFzV2ViQXBpKCl7dHJ5e3JldHVybiB0eXBlb2Ygd2luZG93PFwidVwiJiYhIXdpbmRvdy5sb2NhbFN0b3JhZ2V9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoZSksITF9fSNzPW5ldyBNYXA7I2k7Z2V0IGNvcGllZEtleVNldCgpe3JldHVybiB0aGlzLiNpfWlzQ29waWVkPWU9PnRoaXMuaGFzV2ViQXBpJiYodGhpcy5hbGxDb3BpZWR8fHRoaXMuY29waWVkS2V5U2V0LmhhcyhlKSk7I249ITE7Z2V0IGFsbENvcGllZCgpe3JldHVybiB0aGlzLiNufWdldEV4dFN0b3JhZ2VBcGk9KCk9Pmdsb2JhbFRoaXMuYnJvd3Nlcj8uc3RvcmFnZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnN0b3JhZ2U7Z2V0IGhhc0V4dGVuc2lvbkFwaSgpe3RyeXtyZXR1cm4hIXRoaXMuZ2V0RXh0U3RvcmFnZUFwaSgpfWNhdGNoKGUpe3JldHVybiBjb25zb2xlLmVycm9yKGUpLCExfX1pc1dhdGNoU3VwcG9ydGVkPSgpPT50aGlzLmhhc0V4dGVuc2lvbkFwaTtrZXlOYW1lc3BhY2U9XCJcIjtpc1ZhbGlkS2V5PWU9PmUuc3RhcnRzV2l0aCh0aGlzLmtleU5hbWVzcGFjZSk7Z2V0TmFtZXNwYWNlZEtleT1lPT5gJHt0aGlzLmtleU5hbWVzcGFjZX0ke2V9YDtnZXRVbm5hbWVzcGFjZWRLZXk9ZT0+ZS5zbGljZSh0aGlzLmtleU5hbWVzcGFjZS5sZW5ndGgpO3NlcmRlPXtzZXJpYWxpemVyOkpTT04uc3RyaW5naWZ5LGRlc2VyaWFsaXplcjpKU09OLnBhcnNlfTtjb25zdHJ1Y3Rvcih7YXJlYTplPVwic3luY1wiLGFsbENvcGllZDp0PSExLGNvcGllZEtleUxpc3Q6cz1bXSxzZXJkZTpyPXt9fT17fSl7dGhpcy5zZXRDb3BpZWRLZXlTZXQocyksdGhpcy4jYT1lLHRoaXMuI249dCx0aGlzLnNlcmRlPXsuLi50aGlzLnNlcmRlLC4uLnJ9O3RyeXt0aGlzLmhhc1dlYkFwaSYmKHR8fHMubGVuZ3RoPjApJiYodGhpcy4jZT13aW5kb3cubG9jYWxTdG9yYWdlKX1jYXRjaHt9dHJ5e3RoaXMuaGFzRXh0ZW5zaW9uQXBpJiYodGhpcy4jcj10aGlzLmdldEV4dFN0b3JhZ2VBcGkoKSxsKCk/dGhpcy4jdD1tKHRoaXMuI3JbdGhpcy5hcmVhXSx7ZXhjbHVkZTpbXCJnZXRCeXRlc0luVXNlXCJdLGVycm9yRmlyc3Q6ITF9KTp0aGlzLiN0PXRoaXMuI3JbdGhpcy5hcmVhXSl9Y2F0Y2h7fX1zZXRDb3BpZWRLZXlTZXQoZSl7dGhpcy4jaT1uZXcgU2V0KGUpfXJhd0dldEFsbD0oKT0+dGhpcy4jdD8uZ2V0KCk7Z2V0QWxsPWFzeW5jKCk9PntsZXQgZT1hd2FpdCB0aGlzLnJhd0dldEFsbCgpO3JldHVybiBPYmplY3QuZW50cmllcyhlKS5maWx0ZXIoKFt0XSk9PnRoaXMuaXNWYWxpZEtleSh0KSkucmVkdWNlKCh0LFtzLHJdKT0+KHRbdGhpcy5nZXRVbm5hbWVzcGFjZWRLZXkocyldPXIsdCkse30pfTtjb3B5PWFzeW5jIGU9PntsZXQgdD1lPT09dm9pZCAwO2lmKCF0JiYhdGhpcy5jb3BpZWRLZXlTZXQuaGFzKGUpfHwhdGhpcy5hbGxDb3BpZWR8fCF0aGlzLmhhc0V4dGVuc2lvbkFwaSlyZXR1cm4hMTtsZXQgcz10aGlzLmFsbENvcGllZD9hd2FpdCB0aGlzLnJhd0dldEFsbCgpOmF3YWl0IHRoaXMuI3QuZ2V0KCh0P1suLi50aGlzLmNvcGllZEtleVNldF06W2VdKS5tYXAodGhpcy5nZXROYW1lc3BhY2VkS2V5KSk7aWYoIXMpcmV0dXJuITE7bGV0IHI9ITE7Zm9yKGxldCBhIGluIHMpe2xldCBpPXNbYV0sbj10aGlzLiNlPy5nZXRJdGVtKGEpO3RoaXMuI2U/LnNldEl0ZW0oYSxpKSxyfHw9aSE9PW59cmV0dXJuIHJ9O3Jhd0dldD1hc3luYyBlPT4oYXdhaXQgdGhpcy5yYXdHZXRNYW55KFtlXSkpW2VdO3Jhd0dldE1hbnk9YXN5bmMgZT0+dGhpcy5oYXNFeHRlbnNpb25BcGk/YXdhaXQgdGhpcy4jdC5nZXQoZSk6ZS5maWx0ZXIodGhpcy5pc0NvcGllZCkucmVkdWNlKCh0LHMpPT4odFtzXT10aGlzLiNlPy5nZXRJdGVtKHMpLHQpLHt9KTtyYXdTZXQ9YXN5bmMoZSx0KT0+YXdhaXQgdGhpcy5yYXdTZXRNYW55KHtbZV06dH0pO3Jhd1NldE1hbnk9YXN5bmMgZT0+KHRoaXMuI2UmJk9iamVjdC5lbnRyaWVzKGUpLmZpbHRlcigoW3RdKT0+dGhpcy5pc0NvcGllZCh0KSkuZm9yRWFjaCgoW3Qsc10pPT50aGlzLiNlLnNldEl0ZW0odCxzKSksdGhpcy5oYXNFeHRlbnNpb25BcGkmJmF3YWl0IHRoaXMuI3Quc2V0KGUpLG51bGwpO2NsZWFyPWFzeW5jKGU9ITEpPT57ZSYmdGhpcy4jZT8uY2xlYXIoKSxhd2FpdCB0aGlzLiN0LmNsZWFyKCl9O3Jhd1JlbW92ZT1hc3luYyBlPT57YXdhaXQgdGhpcy5yYXdSZW1vdmVNYW55KFtlXSl9O3Jhd1JlbW92ZU1hbnk9YXN5bmMgZT0+e3RoaXMuI2UmJmUuZmlsdGVyKHRoaXMuaXNDb3BpZWQpLmZvckVhY2godD0+dGhpcy4jZS5yZW1vdmVJdGVtKHQpKSx0aGlzLmhhc0V4dGVuc2lvbkFwaSYmYXdhaXQgdGhpcy4jdC5yZW1vdmUoZSl9O3JlbW92ZUFsbD1hc3luYygpPT57bGV0IGU9YXdhaXQgdGhpcy5nZXRBbGwoKSx0PU9iamVjdC5rZXlzKGUpO2F3YWl0IHRoaXMucmVtb3ZlTWFueSh0KX07d2F0Y2g9ZT0+e2xldCB0PXRoaXMuaXNXYXRjaFN1cHBvcnRlZCgpO3JldHVybiB0JiZ0aGlzLiNvKGUpLHR9OyNvPWU9Pntmb3IobGV0IHQgaW4gZSl7bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KHQpLHI9dGhpcy4jcy5nZXQocyk/LmNhbGxiYWNrU2V0fHxuZXcgU2V0O2lmKHIuYWRkKGVbdF0pLHIuc2l6ZT4xKWNvbnRpbnVlO2xldCBhPShpLG4pPT57aWYobiE9PXRoaXMuYXJlYXx8IWlbc10pcmV0dXJuO2xldCBoPXRoaXMuI3MuZ2V0KHMpO2lmKCFoKXRocm93IG5ldyBFcnJvcihgU3RvcmFnZSBjb21tcyBkb2VzIG5vdCBleGlzdCBmb3IgbnNLZXk6ICR7c31gKTtQcm9taXNlLmFsbChbdGhpcy5wYXJzZVZhbHVlKGlbc10ubmV3VmFsdWUpLHRoaXMucGFyc2VWYWx1ZShpW3NdLm9sZFZhbHVlKV0pLnRoZW4oKFt5LGRdKT0+e2ZvcihsZXQgcCBvZiBoLmNhbGxiYWNrU2V0KXAoe25ld1ZhbHVlOnksb2xkVmFsdWU6ZH0sbil9KX07dGhpcy4jci5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoYSksdGhpcy4jcy5zZXQocyx7Y2FsbGJhY2tTZXQ6cixsaXN0ZW5lcjphfSl9fTt1bndhdGNoPWU9PntsZXQgdD10aGlzLmlzV2F0Y2hTdXBwb3J0ZWQoKTtyZXR1cm4gdCYmdGhpcy4jYyhlKSx0fTsjYyhlKXtmb3IobGV0IHQgaW4gZSl7bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KHQpLHI9ZVt0XSxhPXRoaXMuI3MuZ2V0KHMpO2EmJihhLmNhbGxiYWNrU2V0LmRlbGV0ZShyKSxhLmNhbGxiYWNrU2V0LnNpemU9PT0wJiYodGhpcy4jcy5kZWxldGUocyksdGhpcy4jci5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIoYS5saXN0ZW5lcikpKX19dW53YXRjaEFsbD0oKT0+dGhpcy4jaCgpOyNoKCl7dGhpcy4jcy5mb3JFYWNoKCh7bGlzdGVuZXI6ZX0pPT50aGlzLiNyLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihlKSksdGhpcy4jcy5jbGVhcigpfWFzeW5jIGdldEl0ZW0oZSl7cmV0dXJuIHRoaXMuZ2V0KGUpfWFzeW5jIGdldEl0ZW1zKGUpe3JldHVybiBhd2FpdCB0aGlzLmdldE1hbnkoZSl9YXN5bmMgc2V0SXRlbShlLHQpe2F3YWl0IHRoaXMuc2V0KGUsdCl9YXN5bmMgc2V0SXRlbXMoZSl7YXdhaXQgYXdhaXQgdGhpcy5zZXRNYW55KGUpfWFzeW5jIHJlbW92ZUl0ZW0oZSl7cmV0dXJuIHRoaXMucmVtb3ZlKGUpfWFzeW5jIHJlbW92ZUl0ZW1zKGUpe3JldHVybiBhd2FpdCB0aGlzLnJlbW92ZU1hbnkoZSl9fSxnPWNsYXNzIGV4dGVuZHMgb3tnZXQ9YXN5bmMgZT0+e2xldCB0PXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKSxzPWF3YWl0IHRoaXMucmF3R2V0KHQpO3JldHVybiB0aGlzLnBhcnNlVmFsdWUocyl9O2dldE1hbnk9YXN5bmMgZT0+e2xldCB0PWUubWFwKHRoaXMuZ2V0TmFtZXNwYWNlZEtleSkscz1hd2FpdCB0aGlzLnJhd0dldE1hbnkodCkscj1hd2FpdCBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKHMpLm1hcCh0aGlzLnBhcnNlVmFsdWUpKTtyZXR1cm4gT2JqZWN0LmtleXMocykucmVkdWNlKChhLGksbik9PihhW3RoaXMuZ2V0VW5uYW1lc3BhY2VkS2V5KGkpXT1yW25dLGEpLHt9KX07c2V0PWFzeW5jKGUsdCk9PntsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkoZSkscj10aGlzLnNlcmRlLnNlcmlhbGl6ZXIodCk7cmV0dXJuIHRoaXMucmF3U2V0KHMscil9O3NldE1hbnk9YXN5bmMgZT0+e2xldCB0PU9iamVjdC5lbnRyaWVzKGUpLnJlZHVjZSgocyxbcixhXSk9PihzW3RoaXMuZ2V0TmFtZXNwYWNlZEtleShyKV09dGhpcy5zZXJkZS5zZXJpYWxpemVyKGEpLHMpLHt9KTtyZXR1cm4gYXdhaXQgdGhpcy5yYXdTZXRNYW55KHQpfTtyZW1vdmU9YXN5bmMgZT0+e2xldCB0PXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKTtyZXR1cm4gdGhpcy5yYXdSZW1vdmUodCl9O3JlbW92ZU1hbnk9YXN5bmMgZT0+e2xldCB0PWUubWFwKHRoaXMuZ2V0TmFtZXNwYWNlZEtleSk7cmV0dXJuIGF3YWl0IHRoaXMucmF3UmVtb3ZlTWFueSh0KX07c2V0TmFtZXNwYWNlPWU9Pnt0aGlzLmtleU5hbWVzcGFjZT1lfTtwYXJzZVZhbHVlPWFzeW5jIGU9Pnt0cnl7aWYoZSE9PXZvaWQgMClyZXR1cm4gdGhpcy5zZXJkZS5kZXNlcmlhbGl6ZXIoZSl9Y2F0Y2godCl7Y29uc29sZS5lcnJvcih0KX19fTtleHBvcnR7byBhcyBCYXNlU3RvcmFnZSxnIGFzIFN0b3JhZ2V9O1xuIiwiY29uc3QgcHJvY2Vzc0Z1bmN0aW9uID0gKGZ1bmN0aW9uXywgb3B0aW9ucywgcHJveHksIHVud3JhcHBlZCkgPT4gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0Y29uc3QgUCA9IG9wdGlvbnMucHJvbWlzZU1vZHVsZTtcblxuXHRyZXR1cm4gbmV3IFAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGlmIChvcHRpb25zLm11bHRpQXJncykge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKCguLi5yZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKG9wdGlvbnMuZXJyb3JGaXJzdCkge1xuXHRcdFx0XHRcdGlmIChyZXN1bHRbMF0pIHtcblx0XHRcdFx0XHRcdHJlamVjdChyZXN1bHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQuc2hpZnQoKTtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKG9wdGlvbnMuZXJyb3JGaXJzdCkge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKChlcnJvciwgcmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKHJlc29sdmUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzID09PSBwcm94eSA/IHVud3JhcHBlZCA6IHRoaXM7XG5cdFx0UmVmbGVjdC5hcHBseShmdW5jdGlvbl8sIHNlbGYsIGFyZ3VtZW50c18pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGZpbHRlckNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGlmeShpbnB1dCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0ge1xuXHRcdGV4Y2x1ZGU6IFsvLisoPzpTeW5jfFN0cmVhbSkkL10sXG5cdFx0ZXJyb3JGaXJzdDogdHJ1ZSxcblx0XHRwcm9taXNlTW9kdWxlOiBQcm9taXNlLFxuXHRcdC4uLm9wdGlvbnMsXG5cdH07XG5cblx0Y29uc3Qgb2JqZWN0VHlwZSA9IHR5cGVvZiBpbnB1dDtcblx0aWYgKCEoaW5wdXQgIT09IG51bGwgJiYgKG9iamVjdFR5cGUgPT09ICdvYmplY3QnIHx8IG9iamVjdFR5cGUgPT09ICdmdW5jdGlvbicpKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFxcYGlucHV0XFxgIHRvIGJlIGEgXFxgRnVuY3Rpb25cXGAgb3IgXFxgT2JqZWN0XFxgLCBnb3QgXFxgJHtpbnB1dCA9PT0gbnVsbCA/ICdudWxsJyA6IG9iamVjdFR5cGV9XFxgYCk7XG5cdH1cblxuXHRjb25zdCBmaWx0ZXIgPSAodGFyZ2V0LCBrZXkpID0+IHtcblx0XHRsZXQgY2FjaGVkID0gZmlsdGVyQ2FjaGUuZ2V0KHRhcmdldCk7XG5cblx0XHRpZiAoIWNhY2hlZCkge1xuXHRcdFx0Y2FjaGVkID0ge307XG5cdFx0XHRmaWx0ZXJDYWNoZS5zZXQodGFyZ2V0LCBjYWNoZWQpO1xuXHRcdH1cblxuXHRcdGlmIChrZXkgaW4gY2FjaGVkKSB7XG5cdFx0XHRyZXR1cm4gY2FjaGVkW2tleV07XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuID0+ICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGtleSA9PT0gJ3N5bWJvbCcpID8ga2V5ID09PSBwYXR0ZXJuIDogcGF0dGVybi50ZXN0KGtleSk7XG5cdFx0Y29uc3QgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcblx0XHRjb25zdCB3cml0YWJsZU9yQ29uZmlndXJhYmxlT3duID0gKGRlc2NyaXB0b3IgPT09IHVuZGVmaW5lZCB8fCBkZXNjcmlwdG9yLndyaXRhYmxlIHx8IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlKTtcblx0XHRjb25zdCBpbmNsdWRlZCA9IG9wdGlvbnMuaW5jbHVkZSA/IG9wdGlvbnMuaW5jbHVkZS5zb21lKGVsZW1lbnQgPT4gbWF0Y2goZWxlbWVudCkpIDogIW9wdGlvbnMuZXhjbHVkZS5zb21lKGVsZW1lbnQgPT4gbWF0Y2goZWxlbWVudCkpO1xuXHRcdGNvbnN0IHNob3VsZEZpbHRlciA9IGluY2x1ZGVkICYmIHdyaXRhYmxlT3JDb25maWd1cmFibGVPd247XG5cdFx0Y2FjaGVkW2tleV0gPSBzaG91bGRGaWx0ZXI7XG5cdFx0cmV0dXJuIHNob3VsZEZpbHRlcjtcblx0fTtcblxuXHRjb25zdCBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cblx0Y29uc3QgcHJveHkgPSBuZXcgUHJveHkoaW5wdXQsIHtcblx0XHRhcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3MpIHtcblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldCh0YXJnZXQpO1xuXG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KGNhY2hlZCwgdGhpc0FyZywgYXJncyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBpZmllZCA9IG9wdGlvbnMuZXhjbHVkZU1haW4gPyB0YXJnZXQgOiBwcm9jZXNzRnVuY3Rpb24odGFyZ2V0LCBvcHRpb25zLCBwcm94eSwgdGFyZ2V0KTtcblx0XHRcdGNhY2hlLnNldCh0YXJnZXQsIHBpZmllZCk7XG5cdFx0XHRyZXR1cm4gUmVmbGVjdC5hcHBseShwaWZpZWQsIHRoaXNBcmcsIGFyZ3MpO1xuXHRcdH0sXG5cblx0XHRnZXQodGFyZ2V0LCBrZXkpIHtcblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtZXh0ZW5kLW5hdGl2ZS9uby11c2UtZXh0ZW5kLW5hdGl2ZVxuXHRcdFx0aWYgKCFmaWx0ZXIodGFyZ2V0LCBrZXkpIHx8IHByb3BlcnR5ID09PSBGdW5jdGlvbi5wcm90b3R5cGVba2V5XSkge1xuXHRcdFx0XHRyZXR1cm4gcHJvcGVydHk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChwcm9wZXJ0eSk7XG5cblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBwaWZpZWQgPSBwcm9jZXNzRnVuY3Rpb24ocHJvcGVydHksIG9wdGlvbnMsIHByb3h5LCB0YXJnZXQpO1xuXHRcdFx0XHRjYWNoZS5zZXQocHJvcGVydHksIHBpZmllZCk7XG5cdFx0XHRcdHJldHVybiBwaWZpZWQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwcm9wZXJ0eTtcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gcHJveHk7XG59XG4iLCIvKipcbiAqIEVudmlyb25tZW50IC8gaG9zdCBjb25maWcgZm9yIHRoZSB0ZWFtIGZvcmsuXG4gKiBPdmVycmlkZSB2aWEgLmVudiAoUExBU01PX1BVQkxJQ18qKS5cbiAqXG4gKiBBdXRvZmlsbCBwcm9maWxlIGRhdGEgY29tZXMgZnJvbSB0aGUgVGVhbSBBdXRvZmlsbCBIdWIgKHRlYW0tc2l0ZSksXG4gKiBub3QgSm9icmlnaHQgY2xvdWQg4oCUIHNlZSB+YXBpL3RlYW0tY2xpZW50IGFuZCBleHRlbnNpb24gT3B0aW9ucy5cbiAqL1xuXG5jb25zdCBQUk9EX0hVQiA9IFwiaHR0cHM6Ly9qb2JyaWdodC10ZWFtLXNpdGUudmVyY2VsLmFwcFwiXG5jb25zdCBERVZfSFVCID0gXCJodHRwOi8vbG9jYWxob3N0OjMyMTBcIlxuXG5leHBvcnQgY29uc3QgVEVBTV9TSVRFX1VSTCA9XG4gIHByb2Nlc3MuZW52LlBMQVNNT19QVUJMSUNfVEVBTV9TSVRFX1VSTCA/PyBQUk9EX0hVQlxuXG4vKiogSHViIFVSTCBmb3IgdGhlIGN1cnJlbnQgYnVpbGQ6IGxvY2FsaG9zdCBpbiBwbGFzbW8gZGV2LCBwcm9kIFVSTCBpbiBidWlsZHMuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SHViVXJsKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgcmV0dXJuIERFVl9IVUJcbiAgcmV0dXJuIFRFQU1fU0lURV9VUkwgfHwgUFJPRF9IVUJcbn1cblxuLyoqIEBkZXByZWNhdGVkIFByZWZlciBURUFNX1NJVEVfVVJMIOKAlCBrZXB0IGZvciBvbGRlciBzdHVicyAqL1xuZXhwb3J0IGNvbnN0IEFQSV9ET01BSU4gPVxuICBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX0FQSV9ET01BSU4gPz8gVEVBTV9TSVRFX1VSTFxuXG5leHBvcnQgY29uc3QgSE9TVF9ET01BSU4gPVxuICBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX0hPU1RfRE9NQUlOID8/IFRFQU1fU0lURV9VUkxcblxuZXhwb3J0IGNvbnN0IENPT0tJRV9ET01BSU4gPVxuICBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX0NPT0tJRV9ET01BSU4gPz8gXCJsb2NhbGhvc3RcIlxuXG4vKiogT3JpZ2lucyB0cmVhdGVkIGFzIHRoZSB0ZWFtIC8gYWdlbnQgVUkgaG9zdC4gKi9cbmV4cG9ydCBjb25zdCBhZ2VudERvbWFpbnMgPSBbXG4gIFwibG9jYWxob3N0XCIsXG4gIFwiMTI3LjAuMC4xXCJcbl0gYXMgY29uc3RcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEJhc2VSZXN1bWVCbG9iLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldEJhc2VSZXN1bWVCbG9iXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldENvbXBhbnlOYW1lTGlzdC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRDb21wYW55TmFtZUxpc3RcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q292ZXJMZXR0ZXJCbG9iLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldENvdmVyTGV0dGVyQmxvYlwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDcmVkaXRGZWVkLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldENyZWRpdEZlZWRcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3JlZGl0c0xlZnQuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0Q3JlZGl0c0xlZnRcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3JlZGl0U3dpdGNoU3RhdHVzLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldENyZWRpdFN3aXRjaFN0YXR1c1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDdXJyZW50Q292ZXJMZXR0ZXIuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0Q3VycmVudENvdmVyTGV0dGVyXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEN1cnJlbnRGaWxsQW5zd2VyLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldEN1cnJlbnRGaWxsQW5zd2VyXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEN1cnJlbnRUYWJJZC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRDdXJyZW50VGFiSWRcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3VycmVudFRhYlVybC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRDdXJyZW50VGFiVXJsXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldERlZ3JlZVN1Z2dlc3Rpb25zLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldERlZ3JlZVN1Z2dlc3Rpb25zXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEV4dGVybmFsSm9iSWQuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0RXh0ZXJuYWxKb2JJZFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRFeHRlcm5hbEpvYlN0YXR1cy5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRFeHRlcm5hbEpvYlN0YXR1c1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRHcHRSZXN1bHRzLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldEdwdFJlc3VsdHNcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Sm9iQmFubmVyRGV0YWlsLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldEpvYkJhbm5lckRldGFpbFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRKb2JEZXRhaWwuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0Sm9iRGV0YWlsXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldE1ham9yU3VnZ2VzdGlvbnMuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0TWFqb3JTdWdnZXN0aW9uc1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRPcGVuQ2l0aWVzQnlSZWdpb24uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0T3BlbkNpdGllc0J5UmVnaW9uXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldE9wZW5SZWdpb25zLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldE9wZW5SZWdpb25zXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFBhZ2VMaW5rZWRpbkpvYkluZm8uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0UGFnZUxpbmtlZGluSm9iSW5mb1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRQYXltZW50UHJpY2UuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0UGF5bWVudFByaWNlXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlbGVhc2VDb25maWcuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0UmVsZWFzZUNvbmZpZ1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcclxuXHJcbmltcG9ydCB7IGZldGNoQXV0b2ZpbGxJbmZvLCBmZXRjaFJlc3VtZUJsb2IgfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXHJcblxyXG4vKipcclxuICogRG93bmxvYWRzIHRoZSBkZWZhdWx0IChvciByZXF1ZXN0ZWQpIHJlc3VtZSBmb3IgdGhlIHNlbGVjdGVkIHByb2ZpbGUuXHJcbiAqIEJvZHk6IHsgcmVzdW1lSWQ/OiBzdHJpbmcgfVxyXG4gKi9cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCByZXN1bWVJZCA9XHJcbiAgICAgIHR5cGVvZiByZXEuYm9keT8ucmVzdW1lSWQgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5yZXN1bWVJZCA6IG51bGxcclxuXHJcbiAgICBpZiAoIXJlc3VtZUlkKSB7XHJcbiAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBmZXRjaEF1dG9maWxsSW5mbygpXHJcbiAgICAgIHJlc3VtZUlkID0gaW5mbz8uZGVmYXVsdFJlc3VtZUlkID8/IGluZm8/LnJlc3VtZXM/LlswXT8uaWQgPz8gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzdW1lSWQpIHtcclxuICAgICAgcmVzLnNlbmQoeyBvazogZmFsc2UsIG1lc3NhZ2U6IFwibm9fcmVzdW1lXCIgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsZSA9IGF3YWl0IGZldGNoUmVzdW1lQmxvYihyZXN1bWVJZClcclxuICAgIGlmICghZmlsZSkge1xyXG4gICAgICByZXMuc2VuZCh7IG9rOiBmYWxzZSwgbWVzc2FnZTogXCJkb3dubG9hZF9mYWlsZWRcIiB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBmaWxlLmJsb2IuYXJyYXlCdWZmZXIoKVxyXG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpXHJcbiAgICBsZXQgYmluYXJ5ID0gXCJcIlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSlcclxuICAgIH1cclxuICAgIHJlcy5zZW5kKHtcclxuICAgICAgb2s6IHRydWUsXHJcbiAgICAgIHJlc3VtZUlkLFxyXG4gICAgICBmaWxlTmFtZTogZmlsZS5maWxlTmFtZSxcclxuICAgICAgbWltZVR5cGU6IGZpbGUubWltZVR5cGUsXHJcbiAgICAgIC8qKiBiYXNlNjQgZm9yIHN0cnVjdHVyZWQgY2xvbmUgYWNyb3NzIG1lc3NhZ2luZyAqL1xyXG4gICAgICBiYXNlNjQ6IGJ0b2EoYmluYXJ5KVxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJlcy5zZW5kKHtcclxuICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJmZXRjaF9mYWlsZWRcIlxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0UmVzdW1lQ29sbGVjdGlvbi5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRSZXN1bWVDb2xsZWN0aW9uXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlc3VtZURpYWdub3NlLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldFJlc3VtZURpYWdub3NlXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlc3VtZUluZm8uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0UmVzdW1lSW5mb1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRTaW1pbGFySm9icy5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRTaW1pbGFySm9ic1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRTaXRlVG9rZW4uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0U2l0ZVRva2VuXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhYkNvbnRleHQuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0VGFiQ29udGV4dFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgZ2V0VGFiSm9iUmVjb3JkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL3RhYi1qb2ItaWRcIlxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Qm9keSA9IHtcbiAgY3VycmVudFVybD86IHN0cmluZ1xuICByZXF1aXJlU2FtZVBhdGg/OiBib29sZWFuXG59XG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlcjxSZXF1ZXN0Qm9keT4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgdGFiSWQgPSByZXEuc2VuZGVyPy50YWI/LmlkXG4gIGlmICh0eXBlb2YgdGFiSWQgIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXMuc2VuZCh7IGpvYklkOiBudWxsIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCByZWNvcmQgPSBhd2FpdCBnZXRUYWJKb2JSZWNvcmQodGFiSWQpXG4gIGlmICghcmVjb3JkPy5qb2JJZCkge1xuICAgIHJlcy5zZW5kKHsgam9iSWQ6IG51bGwgfSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChyZXEuYm9keT8ucmVxdWlyZVNhbWVQYXRoICYmIHJlcS5ib2R5LmN1cnJlbnRVcmwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3VycmVudCA9IG5ldyBVUkwocmVxLmJvZHkuY3VycmVudFVybClcbiAgICAgIGlmIChjdXJyZW50LnBhdGhuYW1lICE9PSByZWNvcmQucGF0aG5hbWUpIHtcbiAgICAgICAgcmVzLnNlbmQoeyBqb2JJZDogbnVsbCB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIHJlcy5zZW5kKHsgam9iSWQ6IG51bGwgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIHJlcy5zZW5kKHsgam9iSWQ6IHJlY29yZC5qb2JJZCwgdXJsOiByZWNvcmQudXJsIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiQHBsYXNtb2hxL3N0b3JhZ2VcIlxuXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoeyBhcmVhOiBcInNlc3Npb25cIiB9KVxuXG5leHBvcnQgdHlwZSBUYWJKb2JSZWNvcmQgPSB7XG4gIGpvYklkOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICB1cGRhdGVkQXQ6IG51bWJlclxufVxuXG5mdW5jdGlvbiBrZXlGb3JUYWIodGFiSWQ6IG51bWJlcikge1xuICByZXR1cm4gYHRhYkpvYklkOiR7dGFiSWR9YFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0VGFiSm9iUmVjb3JkKFxuICB0YWJJZDogbnVtYmVyLFxuICByZWNvcmQ6IFRhYkpvYlJlY29yZFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHN0b3JhZ2Uuc2V0KGtleUZvclRhYih0YWJJZCksIHJlY29yZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRhYkpvYlJlY29yZChcbiAgdGFiSWQ6IG51bWJlclxuKTogUHJvbWlzZTxUYWJKb2JSZWNvcmQgfCBudWxsPiB7XG4gIHJldHVybiAoYXdhaXQgc3RvcmFnZS5nZXQ8VGFiSm9iUmVjb3JkPihrZXlGb3JUYWIodGFiSWQpKSkgPz8gbnVsbFxufVxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFpbG9yUmVzdW1lLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldFRhaWxvclJlc3VtZVwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRUYWlsb3JSZXN1bWVCbG9iLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldFRhaWxvclJlc3VtZUJsb2JcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFpbG9yUmVzdW1lRmlsZU5hbWUuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0VGFpbG9yUmVzdW1lRmlsZU5hbWVcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXHJcblxyXG5pbXBvcnQgeyBnZXRUZWFtU2V0dGluZ3MsIHZlcmlmeVRlYW1Db25uZWN0aW9uIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxyXG5cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0VGVhbVNldHRpbmdzKClcclxuICBjb25zdCBjb25uID0gYXdhaXQgdmVyaWZ5VGVhbUNvbm5lY3Rpb24oKVxyXG4gIHJlcy5zZW5kKHtcclxuICAgIG9rOiBjb25uLm9rLFxyXG4gICAgc2l0ZVVybDogc2V0dGluZ3Muc2l0ZVVybCxcclxuICAgIHNlbGVjdGVkUHJvZmlsZUlkOiBzZXR0aW5ncy5zZWxlY3RlZFByb2ZpbGVJZCxcclxuICAgIHVzZXI6IGNvbm4ub2tcclxuICAgICAgPyB7IGVtYWlsOiBjb25uLmVtYWlsLCBuYW1lOiBjb25uLm5hbWUgfVxyXG4gICAgICA6IG51bGwsXHJcbiAgICBlcnJvcjogY29ubi5lcnJvclxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VmVyc2lvblVwZGF0ZVN0YXRlLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldFZlcnNpb25VcGRhdGVTdGF0ZVwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RBc2hieUZpZWxkTWV0YWRhdGEuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiaW5qZWN0QXNoYnlGaWVsZE1ldGFkYXRhXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKipcbiAqIEluamVjdCB0aGUgaGVscGVyLWFwcCBidW5kbGUgaW50byB0aGUgc2VuZGVyIGZyYW1lIChwb3J0ZWQgZnJvbSBKb2JyaWdodCkuXG4gKi9cbmZ1bmN0aW9uIHBhdGhuYW1lRnJvbUJ1bmRsZVVybChidW5kbGVVcmw/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFidW5kbGVVcmwpIHJldHVybiBudWxsXG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChidW5kbGVVcmwpXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh1cmwucGF0aG5hbWUpLnJlcGxhY2UoL15cXC8rLywgXCJcIilcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGJ1bmRsZVVybC5yZXBsYWNlKC9eXFwvKy8sIFwiXCIpXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyPHsgYnVuZGxlVXJsPzogc3RyaW5nIH0+ID0gYXN5bmMgKFxuICByZXEsXG4gIHJlc1xuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFiSWQgPSByZXEuc2VuZGVyPy50YWI/LmlkXG4gICAgY29uc3QgZnJhbWVJZCA9IHJlcS5zZW5kZXI/LmZyYW1lSWQgPz8gMFxuICAgIGNvbnN0IGZpbGUgPSBwYXRobmFtZUZyb21CdW5kbGVVcmwocmVxLmJvZHk/LmJ1bmRsZVVybClcblxuICAgIGlmICh0eXBlb2YgdGFiSWQgIT09IFwibnVtYmVyXCIgfHwgIWZpbGUpIHtcbiAgICAgIHJlcy5zZW5kKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIm1pc3NpbmdfdGFiX29yX2J1bmRsZVwiIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkLCBmcmFtZUlkczogW2ZyYW1lSWRdIH0sXG4gICAgICBmaWxlczogW2ZpbGVdLFxuICAgICAgd29ybGQ6IFwiSVNPTEFURURcIlxuICAgIH0pXG5cbiAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IHRydWUgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW2luamVjdEhlbHBlckFwcEJ1bmRsZV0gZmFpbGVkOlwiLCBlcnJvcilcbiAgICByZXMuc2VuZCh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFN0cmluZyhlcnJvcilcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2luamVjdFJlYWN0U2VsZWN0RmliZXIuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiaW5qZWN0UmVhY3RTZWxlY3RGaWJlclwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RSZWNydWl0ZWVGaWJlci5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJpbmplY3RSZWNydWl0ZWVGaWJlclwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RXb3JrYWJsZUNoZWNrYm94LmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImluamVjdFdvcmthYmxlQ2hlY2tib3hcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0V29ya2RheUZpYmVyLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImluamVjdFdvcmtkYXlGaWJlclwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9pbnN0YWxsTWFpbldvcmxkQWxlcnRTdXBwcmVzc29yLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImluc3RhbGxNYWluV29ybGRBbGVydFN1cHByZXNzb3JcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW50ZXJjZXB0RmlsZUlucHV0Q2xpY2suanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiaW50ZXJjZXB0RmlsZUlucHV0Q2xpY2tcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMva3VsYUNvbXBhbnlEb20uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwia3VsYUNvbXBhbnlEb21cIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXHJcblxyXG5pbXBvcnQgeyBtZXJnZVByb2ZpbGVBbnN3ZXJzIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxyXG5cclxuY29uc3QgTk9JU0VfUkUgPVxyXG4gIC9xeXZhcmV4fGZpbGxlZFxccypcXGQqXFxzKml0ZW1zP3x0ZXh0IGZpZWxkcz8gb2t8bm8gcmVzdW1lIGZpbGUgaW5wdXR8ZmlsbFxccyphZ2FpbnxkaXNtaXNzfGJ1dHRvbiBjbGlja3Mgc3luY3xsZWFybmluZyBhbnN3ZXJzIGZvciBuZXh0fHNhdmVkIHRvIGh1Yi9pXHJcblxyXG4vKipcclxuICogTWVyZ2UgbGVhcm5lZCBzY3JlZW5pbmcgYW5zd2VycyBpbnRvIHRoZSBzZWxlY3RlZCBodWIgcHJvZmlsZS5cclxuICogQm9keToge1xyXG4gKiAgIGFuc3dlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXHJcbiAqICAgcHJvZmlsZUlkPzogc3RyaW5nLFxyXG4gKiAgIHNjb3BlS2V5Pzogc3RyaW5nLFxyXG4gKiAgIGhvc3RuYW1lPzogc3RyaW5nLFxyXG4gKiAgIHN0ZXBLZXk/OiBzdHJpbmdcclxuICogfVxyXG4gKi9cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFuc3dlcnMgPVxyXG4gICAgICByZXEuYm9keT8uYW5zd2VycyAmJiB0eXBlb2YgcmVxLmJvZHkuYW5zd2VycyA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgID8gKHJlcS5ib2R5LmFuc3dlcnMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPilcclxuICAgICAgICA6IG51bGxcclxuICAgIGlmICghYW5zd2VycyB8fCAhT2JqZWN0LmtleXMoYW5zd2VycykubGVuZ3RoKSB7XHJcbiAgICAgIHJlcy5zZW5kKHsgb2s6IGZhbHNlLCBtZXNzYWdlOiBcImFuc3dlcnNfcmVxdWlyZWRcIiB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGVhbmVkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGFuc3dlcnMpKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXN0aW9uID0gU3RyaW5nKGsgfHwgXCJcIikudHJpbSgpXHJcbiAgICAgIGNvbnN0IGFuc3dlciA9IFN0cmluZyh2ID8/IFwiXCIpLnRyaW0oKVxyXG4gICAgICBpZiAoIXF1ZXN0aW9uIHx8ICFhbnN3ZXIpIGNvbnRpbnVlXHJcbiAgICAgIGlmIChxdWVzdGlvbi5sZW5ndGggPiA1MDAgfHwgYW5zd2VyLmxlbmd0aCA+IDIwMDApIGNvbnRpbnVlXHJcbiAgICAgIGlmIChOT0lTRV9SRS50ZXN0KHF1ZXN0aW9uKSB8fCBOT0lTRV9SRS50ZXN0KGFuc3dlcikpIGNvbnRpbnVlXHJcbiAgICAgIGNvbnN0IGNvbXBhY3QgPSAocXVlc3Rpb24gKyBhbnN3ZXIpLnJlcGxhY2UoL1xccysvZywgXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gICAgICBpZiAoL2ZpbGxhZ2FpbnxkaXNtaXNzfHF5dmFyZXhhdXRvZmlsbHxeeWVzbm8kLy50ZXN0KGNvbXBhY3QpKSBjb250aW51ZVxyXG4gICAgICBjbGVhbmVkW3F1ZXN0aW9uXSA9IGFuc3dlclxyXG4gICAgfVxyXG4gICAgaWYgKCFPYmplY3Qua2V5cyhjbGVhbmVkKS5sZW5ndGgpIHtcclxuICAgICAgcmVzLnNlbmQoeyBvazogZmFsc2UsIG1lc3NhZ2U6IFwiYW5zd2Vyc19lbXB0eVwiIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2ZpbGVJZCA9XHJcbiAgICAgIHR5cGVvZiByZXEuYm9keT8ucHJvZmlsZUlkID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkucHJvZmlsZUlkIDogbnVsbFxyXG4gICAgY29uc3Qgc2NvcGVLZXkgPVxyXG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LnNjb3BlS2V5ID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkuc2NvcGVLZXkudHJpbSgpIDogXCJcIlxyXG4gICAgY29uc3QgaG9zdG5hbWUgPVxyXG4gICAgICB0eXBlb2YgcmVxLmJvZHk/Lmhvc3RuYW1lID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkuaG9zdG5hbWUudHJpbSgpIDogXCJcIlxyXG4gICAgY29uc3Qgc3RlcEtleSA9XHJcbiAgICAgIHR5cGVvZiByZXEuYm9keT8uc3RlcEtleSA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnN0ZXBLZXkudHJpbSgpIDogXCJcIlxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lcmdlUHJvZmlsZUFuc3dlcnMoXHJcbiAgICAgIGNsZWFuZWQsXHJcbiAgICAgIHByb2ZpbGVJZCxcclxuICAgICAgc2NvcGVLZXlcclxuICAgICAgICA/IHsgc2NvcGVLZXksIGhvc3RuYW1lOiBob3N0bmFtZSB8fCBudWxsLCBzdGVwS2V5OiBzdGVwS2V5IHx8IG51bGwgfVxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgKVxyXG4gICAgaWYgKCFyZXN1bHQub2spIHtcclxuICAgICAgcmVzLnNlbmQoeyBvazogZmFsc2UsIG1lc3NhZ2U6IHJlc3VsdC5lcnJvciB8fCBcInNhdmVfZmFpbGVkXCIgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIG9rOiB0cnVlLFxyXG4gICAgICBhbnN3ZXJzOiByZXN1bHQuYW5zd2VycyxcclxuICAgICAgZXh0cmFzOiByZXN1bHQuZXh0cmFzLFxyXG4gICAgICBsZWFybmVkOiBjbGVhbmVkLFxyXG4gICAgICBzY29wZUtleTogc2NvcGVLZXkgfHwgbnVsbFxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJlcy5zZW5kKHtcclxuICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJzYXZlX2ZhaWxlZFwiXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9tYXJrUmVmcmVzaFJlcXVlc3RlZC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJtYXJrUmVmcmVzaFJlcXVlc3RlZFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9tYXJrV2hhdHNOZXdSZWFkLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcIm1hcmtXaGF0c05ld1JlYWRcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvb3BlbkFnZW50QXBwbHlUYWIuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwib3BlbkFnZW50QXBwbHlUYWJcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvb3BlbkJyYXNzcmluZ0Z1bGxQYWdlQXV0b2NvbXBsZXRlLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcIm9wZW5CcmFzc3JpbmdGdWxsUGFnZUF1dG9jb21wbGV0ZVwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuRGF5Zm9yY2VQb2xpY3lUYWIuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwib3BlbkRheWZvcmNlUG9saWN5VGFiXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3BhcnNlUGFnZU1hcmtkb3duLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInBhcnNlUGFnZU1hcmtkb3duXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogSGVhbHRoIGNoZWNrIGZvciB0ZWFtIHRvb2xpbmcgLyBDSS4gKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiB0cnVlLFxuICAgIG5hbWU6IFwiam9icmlnaHQtZm9yay1leHRlbnNpb25cIixcbiAgICB2ZXJzaW9uOiBjaHJvbWUucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb25cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcG9zdEFwcGx5Sm9iLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInBvc3RBcHBseUpvYlwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0QXV0b2ZpbGxBbnN3ZXJQYWlyQXR0cmlidXRlZC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJwb3N0QXV0b2ZpbGxBbnN3ZXJQYWlyQXR0cmlidXRlZFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0QXV0b2ZpbGxGZWVkYmFjay5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJwb3N0QXV0b2ZpbGxGZWVkYmFja1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0RXZlbnRTdWJtaXQuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwicG9zdEV2ZW50U3VibWl0XCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RFeHRlcm5hbEpvYkltcG9ydC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJwb3N0RXh0ZXJuYWxKb2JJbXBvcnRcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcG9zdFBsdWdpbkZlZWRiYWNrLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInBvc3RQbHVnaW5GZWVkYmFja1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0U2ltaWxhckpvYlBvcHVwRXhwb3N1cmUuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwicG9zdFNpbWlsYXJKb2JQb3B1cEV4cG9zdXJlXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3ByZXBhcmVNZXRhQ2FyZWVyc0xvY2F0aW9uQ2FwdHVyZS5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJwcmVwYXJlTWV0YUNhcmVlcnNMb2NhdGlvbkNhcHR1cmVcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcHJlcGFyZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmUuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwicHJlcGFyZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmVcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcHJlcGFyZVBoZW5vbVNjaG9vbENhcHR1cmUuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwicHJlcGFyZVBoZW5vbVNjaG9vbENhcHR1cmVcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcHJldmlld0Jhc2VSZXN1bWVCbG9iLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInByZXZpZXdCYXNlUmVzdW1lQmxvYlwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wcmV2aWV3VGFpbG9yUmVzdW1lQmxvYi5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJwcmV2aWV3VGFpbG9yUmVzdW1lQmxvYlwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZWdlbmVyYXRlQW5zd2VyLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInJlZ2VuZXJhdGVBbnN3ZXJcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVsb2FkRXh0ZW5zaW9uLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInJlbG9hZEV4dGVuc2lvblwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXBvcnRBdXRvZmlsbEZpcnN0VXNlQXR0cmlidXRpb24uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwicmVwb3J0QXV0b2ZpbGxGaXJzdFVzZUF0dHJpYnV0aW9uXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3JlcXVlc3RFeHRlbnNpb25VcGRhdGVDaGVjay5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJyZXF1ZXN0RXh0ZW5zaW9uVXBkYXRlQ2hlY2tcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUFkZHJlc3NTdWdnZXN0aW9uLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInJlc29sdmVBZGRyZXNzU3VnZ2VzdGlvblwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQXV0b2ZpbGxDbGllbnRTZWFyY2hTdGVwLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInJlc29sdmVBdXRvZmlsbENsaWVudFNlYXJjaFN0ZXBcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUF1dG9maWxsT3BlcmF0aW9uLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInJlc29sdmVBdXRvZmlsbE9wZXJhdGlvblwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQ2FwdHVyZWRNZXRhQ2FyZWVyc0xvY2F0aW9uLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInJlc29sdmVDYXB0dXJlZE1ldGFDYXJlZXJzTG9jYXRpb25cIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUNhcHR1cmVkUGhlbm9tU2Nob29sLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInJlc29sdmVDYXB0dXJlZFBoZW5vbVNjaG9vbFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlSm9iSWRCeVVybC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJyZXNvbHZlSm9iSWRCeVVybFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9zYXZlQXV0b2ZpbGxJbmZvLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInNhdmVBdXRvZmlsbEluZm9cIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2F2ZUV4dGVybmFsSm9iSWQuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwic2F2ZUV4dGVybmFsSm9iSWRcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2F2ZUpvYkRldGFpbC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJzYXZlSm9iRGV0YWlsXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3NhdmVTdWJtaXRTdGF0dXMuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwic2F2ZVN1Ym1pdFN0YXR1c1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9zZWFyY2hJY2ltc1Byb2ZpbGVPcHRpb25zLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInNlYXJjaEljaW1zUHJvZmlsZU9wdGlvbnNcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2VsZWN0SWNpbXNQcm9maWxlT3B0aW9uLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInNlbGVjdEljaW1zUHJvZmlsZU9wdGlvblwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgc2V0VGFiSm9iUmVjb3JkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL3RhYi1qb2ItaWRcIlxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Qm9keSA9IHtcbiAgam9iSWQ/OiBzdHJpbmdcbiAgdXJsPzogc3RyaW5nXG59XG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlcjxSZXF1ZXN0Qm9keT4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgdGFiSWQgPSByZXEuc2VuZGVyPy50YWI/LmlkXG4gIGNvbnN0IGpvYklkID0gcmVxLmJvZHk/LmpvYklkPy50cmltKClcbiAgY29uc3QgdXJsID0gcmVxLmJvZHk/LnVybCB8fCByZXEuc2VuZGVyPy50YWI/LnVybCB8fCBcIlwiXG5cbiAgaWYgKHR5cGVvZiB0YWJJZCAhPT0gXCJudW1iZXJcIiB8fCAham9iSWQpIHtcbiAgICByZXMuc2VuZCh7IG9rOiBmYWxzZSB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IHBhdGhuYW1lID0gXCIvXCJcbiAgdHJ5IHtcbiAgICBwYXRobmFtZSA9IG5ldyBVUkwodXJsKS5wYXRobmFtZVxuICB9IGNhdGNoIHtcbiAgICAvKiBpZ25vcmUgKi9cbiAgfVxuXG4gIGF3YWl0IHNldFRhYkpvYlJlY29yZCh0YWJJZCwge1xuICAgIGpvYklkLFxuICAgIHVybCxcbiAgICBwYXRobmFtZSxcbiAgICB1cGRhdGVkQXQ6IERhdGUubm93KClcbiAgfSlcblxuICByZXMuc2VuZCh7IG9rOiB0cnVlIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3VwZGF0ZUF1dG9maWxsU2VjdGlvbi5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJ1cGRhdGVBdXRvZmlsbFNlY3Rpb25cIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvdXBkYXRlUmVzdW1lQ29sbGVjdGlvbi5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJ1cGRhdGVSZXN1bWVDb2xsZWN0aW9uXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3VwbG9hZEJyYXNzcmluZ1Byb2ZpbGVCdWlsZGVyRmlsZS5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJ1cGxvYWRCcmFzc3JpbmdQcm9maWxlQnVpbGRlckZpbGVcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvd2FpdEZvclBoZW5vbVNjaG9vbENhcHR1cmUuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwid2FpdEZvclBoZW5vbVNjaG9vbENhcHR1cmVcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwiLyoqXHJcbiAqIEJhY2tncm91bmQgc2VydmljZSB3b3JrZXIgZW50cnkuXHJcbiAqIE1lc3NhZ2UgaGFuZGxlcnMgbGl2ZSBpbiBiYWNrZ3JvdW5kL21lc3NhZ2VzLyouXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0SHViVXJsIH0gZnJvbSBcIn5hcGkvZW52LXJlc29sdmVyXCJcclxuaW1wb3J0IHsgc2F2ZVRlYW1TZXR0aW5ncyB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsLmFkZExpc3RlbmVyKChtZXNzYWdlLCBfc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcclxuICBpZiAobWVzc2FnZT8udHlwZSAhPT0gXCJURUFNX0hVQl9BVVRIXCIgfHwgIW1lc3NhZ2UudG9rZW4pIHtcclxuICAgIHNlbmRSZXNwb25zZSh7IG9rOiBmYWxzZSwgZXJyb3I6IFwidW5rbm93bl9tZXNzYWdlXCIgfSlcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2l0ZVVybCA9IFN0cmluZyhtZXNzYWdlLnNpdGVVcmwgfHwgZ2V0SHViVXJsKCkpLnJlcGxhY2UoL1xcLyskLywgXCJcIilcclxuXHJcbiAgdm9pZCBzYXZlVGVhbVNldHRpbmdzKHtcclxuICAgIHNpdGVVcmwsXHJcbiAgICBhcGlUb2tlbjogU3RyaW5nKG1lc3NhZ2UudG9rZW4pLFxyXG4gICAgdXNlckVtYWlsOiBtZXNzYWdlLnVzZXI/LmVtYWlsIHx8IFwiXCIsXHJcbiAgICB1c2VyTmFtZTogbWVzc2FnZS51c2VyPy5uYW1lIHx8IFwiXCJcclxuICB9KVxyXG4gICAgLnRoZW4oKCkgPT4gc2VuZFJlc3BvbnNlKHsgb2s6IHRydWUgfSkpXHJcbiAgICAuY2F0Y2goKGVycikgPT5cclxuICAgICAgc2VuZFJlc3BvbnNlKHtcclxuICAgICAgICBvazogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcInNhdmVfZmFpbGVkXCJcclxuICAgICAgfSlcclxuICAgIClcclxuXHJcbiAgcmV0dXJuIHRydWVcclxufSlcclxuXHJcbmV4cG9ydCB7fVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);