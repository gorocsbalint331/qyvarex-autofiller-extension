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
var _logApplication = require("~background/messages/logApplication");
var _logApplicationDefault = parcelHelpers.interopDefault(_logApplication);
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
        case "logApplication":
            (0, _logApplicationDefault.default)({
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

},{"~background/messages/acceptAutofillInstallAttribution":"ccbTs","~background/messages/activateHelperOnTab":"dTamR","~background/messages/consumeOracleEducationLovCapture":"2i48w","~background/messages/convertResumePdfToWord":"jyzHv","~background/messages/countExternalJobIds":"4dlfp","~background/messages/flushAutofillInstallAttribution":"k22qr","~background/messages/generateAutofillCoverLetter":"4H7FZ","~background/messages/getAbUser":"j95gs","~background/messages/getAddressSuggestions":"8SnWK","~background/messages/getAgentCoverLetter":"9QmNG","~background/messages/getAgentQLRule":"66qsD","~background/messages/getAgentTailorResume":"iucsd","~background/messages/getAutofillConfig":"lwNg1","~background/messages/getAutofillInfo":"etznj","~background/messages/getBaseResumeBlob":"5fWaa","~background/messages/getCompanyNameList":"5Oy7G","~background/messages/getCoverLetterBlob":"429Q5","~background/messages/getCreditFeed":"5HlZl","~background/messages/getCreditsLeft":"4NlXQ","~background/messages/getCreditSwitchStatus":"bCwt0","~background/messages/getCurrentCoverLetter":"8MKE2","~background/messages/getCurrentFillAnswer":"4Q79V","~background/messages/getCurrentTabId":"khUrO","~background/messages/getCurrentTabUrl":"i5VU9","~background/messages/getDegreeSuggestions":"frfxe","~background/messages/getExternalJobId":"djptI","~background/messages/getExternalJobStatus":"67xsX","~background/messages/getGptResults":"4qZmt","~background/messages/getJobBannerDetail":"dej2B","~background/messages/getJobDetail":"7k2HI","~background/messages/getMajorSuggestions":"8IGK5","~background/messages/getOpenCitiesByRegion":"bDQBa","~background/messages/getOpenRegions":"j1GMZ","~background/messages/getPageLinkedinJobInfo":"kyzkM","~background/messages/getPaymentPrice":"hulLn","~background/messages/getReleaseConfig":"6IlOX","~background/messages/getResumeBlob":"1fz8D","~background/messages/getResumeCollection":"4LqFS","~background/messages/getResumeDiagnose":"hsOno","~background/messages/getResumeInfo":"4rS0H","~background/messages/getSimilarJobs":"04qkk","~background/messages/getSiteToken":"1NRjw","~background/messages/getTabContext":"iQ4cn","~background/messages/getTabJobId":"d6Vvg","~background/messages/getTailorResume":"bhrND","~background/messages/getTailorResumeBlob":"baD7V","~background/messages/getTailorResumeFileName":"jXPYF","~background/messages/getUserProfile":"98SkO","~background/messages/getVersionUpdateState":"lhPqw","~background/messages/injectAshbyFieldMetadata":"k0hTD","~background/messages/injectHelperAppBundle":"dWkE2","~background/messages/injectReactSelectFiber":"1D3w0","~background/messages/injectRecruiteeFiber":"5TGWG","~background/messages/injectWorkableCheckbox":"h8XLK","~background/messages/injectWorkdayFiber":"9DukL","~background/messages/installMainWorldAlertSuppressor":"iD4c3","~background/messages/interceptFileInputClick":"7q19v","~background/messages/kulaCompanyDom":"jjxIg","~background/messages/learnAnswers":"lmIy3","~background/messages/logApplication":"fKYma","~background/messages/markRefreshRequested":"hVZ3t","~background/messages/markWhatsNewRead":"fe7Z6","~background/messages/openAgentApplyTab":"gCFbI","~background/messages/openBrassringFullPageAutocomplete":"aAauv","~background/messages/openDayforcePolicyTab":"6rsOp","~background/messages/parsePageMarkdown":"aWRCQ","~background/messages/ping":"eQJct","~background/messages/postApplyJob":"6Vrzm","~background/messages/postAutofillAnswerPairAttributed":"lr7El","~background/messages/postAutofillFeedback":"jJgDk","~background/messages/postEventSubmit":"asjhc","~background/messages/postExternalJobImport":"AvTM0","~background/messages/postPluginFeedback":"3uA6Z","~background/messages/postSimilarJobPopupExposure":"e3AYM","~background/messages/prepareMetaCareersLocationCapture":"hWkEU","~background/messages/prepareOracleEducationLovCapture":"21sUf","~background/messages/preparePhenomSchoolCapture":"jjUaW","~background/messages/previewBaseResumeBlob":"eDw8J","~background/messages/previewTailorResumeBlob":"hWzia","~background/messages/regenerateAnswer":"ce4OD","~background/messages/reloadExtension":"ezLiA","~background/messages/reportAutofillFirstUseAttribution":"3Tvcc","~background/messages/requestExtensionUpdateCheck":"lBm2x","~background/messages/resolveAddressSuggestion":"6iwT2","~background/messages/resolveAutofillClientSearchStep":"baSvW","~background/messages/resolveAutofillOperation":"mxjqE","~background/messages/resolveCapturedMetaCareersLocation":"5N3CK","~background/messages/resolveCapturedPhenomSchool":"8UYRG","~background/messages/resolveJobIdByUrl":"4RWjG","~background/messages/saveAutofillInfo":"bSrWZ","~background/messages/saveExternalJobId":"2i3dL","~background/messages/saveJobDetail":"8mahq","~background/messages/saveSubmitStatus":"gxJFI","~background/messages/searchIcimsProfileOptions":"1Typx","~background/messages/selectIcimsProfileOption":"2jtw4","~background/messages/setTabJobId":"iMbPj","~background/messages/updateAutofillSection":"azWRy","~background/messages/updateResumeCollection":"k2B8P","~background/messages/uploadBrassringProfileBuilderFile":"73d8c","~background/messages/waitForPhenomSchoolCapture":"7f40R","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"ccbTs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("acceptAutofillInstallAttribution");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"7FuE3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Soft success for Jobright telemetry / product messages we do not mirror. */ parcelHelpers.export(exports, "softOk", ()=>softOk);
/** Soft empty payload for suggestion / search stubs. */ parcelHelpers.export(exports, "softEmpty", ()=>softEmpty);
/** Soft null payload (Jobright often sends bare null on miss). */ parcelHelpers.export(exports, "softNull", ()=>softNull);
/** Soft fixed JSON body (credits, config, etc.). */ parcelHelpers.export(exports, "softValue", ()=>softValue);
function softOk(handler, extra = {}) {
    return async (_req, res)=>{
        res.send({
            ok: true,
            stub: true,
            handler,
            ...extra
        });
    };
}
function softEmpty(handler, key = "results") {
    return async (_req, res)=>{
        res.send({
            ok: true,
            stub: true,
            handler,
            [key]: []
        });
    };
}
function softNull(handler) {
    return async (_req, res)=>{
        res.send(null);
    };
}
function softValue(handler, value) {
    return async (_req, res)=>{
        res.send(value);
    };
}

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
 * After an extension reload, a stale content script may still receive
 * messages but cannot use chrome.* APIs. We require an explicit { ok: true }
 * ACK; anything else falls back to injecting the helper bundle directly.
 */ async function pingIconClicked(tabId) {
    const response = await chrome.tabs.sendMessage(tabId, {
        message: "iconClicked"
    }, {
        frameId: 0
    });
    if (response && typeof response === "object" && response.ok === true) return {
        ok: true
    };
    return {
        ok: false,
        response
    };
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
    // Bundle auto-boots; call again if the page already had a partial load.
    await chrome.scripting.executeScript({
        target: {
            tabId,
            allFrames: true
        },
        world: "ISOLATED",
        func: ()=>{
            const g = globalThis;
            const boot = g.bootstrapJobrightHelperRuntime;
            const open = g.openJobrightHelperFromExtensionIcon;
            (async ()=>{
                if (typeof boot === "function") await boot();
                if (typeof open === "function") await open();
            })();
        }
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
            const ack = await pingIconClicked(tabId);
            if (ack.ok) {
                res.send({
                    success: true,
                    mode: "content_script"
                });
                return;
            }
            console.warn("[activateHelperOnTab] content script ACK failed \u2014 direct inject", ack.response);
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
var _oracleLovCapture = require("~background/lib/oracle-lov-capture");
const READ_PAGE_CAPTURE = function readOracleLovFromPage() {
    const w = window;
    return w.__jrOracleLov || null;
};
const handler = async (req, res)=>{
    try {
        const captureId = typeof req.body?.captureId === "string" ? req.body.captureId : "";
        if (!captureId) {
            res.send({
                ok: false,
                message: "captureId_required",
                items: []
            });
            return;
        }
        const tabId = typeof req.body?.tabId === "number" ? req.body.tabId : (await chrome.tabs.query({
            active: true,
            currentWindow: true
        }))[0]?.id;
        let pageItems = [];
        if (tabId) {
            const results = await chrome.scripting.executeScript({
                target: {
                    tabId
                },
                world: "MAIN",
                func: READ_PAGE_CAPTURE
            });
            const page = results?.[0]?.result;
            if (page?.items?.length) {
                pageItems = page.items;
                (0, _oracleLovCapture.updateOracleCaptureItems)(captureId, pageItems);
            }
        }
        const stored = (0, _oracleLovCapture.getOracleCapture)(captureId);
        const items = pageItems.length ? pageItems : stored?.items || [];
        res.send({
            ok: true,
            captureId,
            items,
            field: stored?.field,
            search: stored?.search
        });
    } catch (err) {
        res.send({
            ok: false,
            items: [],
            message: err instanceof Error ? err.message : "consume_failed"
        });
    }
};
exports.default = handler;

},{"~background/lib/oracle-lov-capture":"f3yDF","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"f3yDF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setOracleCapture", ()=>setOracleCapture);
parcelHelpers.export(exports, "getOracleCapture", ()=>getOracleCapture);
parcelHelpers.export(exports, "updateOracleCaptureItems", ()=>updateOracleCaptureItems);
const captures = new Map();
function setOracleCapture(id, data) {
    captures.set(id, {
        ...data,
        createdAt: Date.now()
    });
}
function getOracleCapture(id) {
    return captures.get(id);
}
function updateOracleCaptureItems(id, items) {
    const prev = captures.get(id);
    if (!prev) {
        captures.set(id, {
            field: "",
            search: "",
            items,
            createdAt: Date.now()
        });
        return;
    }
    captures.set(id, {
        ...prev,
        items
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"jyzHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("convertResumePdfToWord");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4dlfp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** No LinkedIn\u2194external id store yet \u2014 report zero. */ const handler = async (_req, res)=>{
    res.send(0);
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"k22qr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("flushAutofillInstallAttribution");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4H7FZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/**
 * Jobright shape: { data: { markdown, coverLetterId, jobId }, error?: { HTTP_STATUS } }
 */ const handler = async (req, res)=>{
    try {
        const jobId = typeof req.body?.jobId === "string" ? req.body.jobId.trim() : "";
        const userPrompt = typeof req.body?.userPrompt === "string" ? req.body.userPrompt.trim() : "";
        if (!jobId || !userPrompt) {
            res.send({
                data: null,
                error: {
                    HTTP_STATUS: 400,
                    errorMsg: "Missing jobId or userPrompt"
                }
            });
            return;
        }
        const result = await (0, _teamClient.generateCoverLetter)({
            jobId,
            userPrompt,
            resumeId: req.body?.resumeId,
            tailorId: req.body?.tailorId,
            coverLetterId: typeof req.body?.coverLetterId === "string" ? req.body.coverLetterId : undefined,
            currentCoverLetter: typeof req.body?.currentCoverLetter === "string" ? req.body.currentCoverLetter : undefined,
            profileId: typeof req.body?.profileId === "string" ? req.body.profileId : null,
            jobContext: req.body?.jobContext && typeof req.body.jobContext === "object" ? req.body.jobContext : undefined
        });
        if (!result.ok || !result.data) {
            res.send({
                data: null,
                error: {
                    HTTP_STATUS: result.status || 500,
                    errorMsg: result.error || "cover_letter_failed"
                }
            });
            return;
        }
        res.send({
            data: result.data
        });
    } catch (err) {
        res.send({
            data: null,
            error: {
                HTTP_STATUS: 500,
                errorMsg: err instanceof Error ? err.message : "Unknown error"
            }
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
parcelHelpers.export(exports, "fetchCoverLetterBlob", ()=>fetchCoverLetterBlob);
/** Merge learned Q\u2192A into the selected profile on the hub (global + optional site/step). */ parcelHelpers.export(exports, "mergeProfileAnswers", ()=>mergeProfileAnswers);
/** Log a successful job application to the hub Google Sheet. */ parcelHelpers.export(exports, "logApplication", ()=>logApplication);
parcelHelpers.export(exports, "verifyTeamConnection", ()=>verifyTeamConnection);
/** LLM regenerate a form-field answer via hub. */ parcelHelpers.export(exports, "regenerateAnswer", ()=>regenerateAnswer);
/** Generate cover letter markdown via hub LLM. */ parcelHelpers.export(exports, "generateCoverLetter", ()=>generateCoverLetter);
parcelHelpers.export(exports, "fetchDegreeSuggestions", ()=>fetchDegreeSuggestions);
parcelHelpers.export(exports, "fetchMajorSuggestions", ()=>fetchMajorSuggestions);
parcelHelpers.export(exports, "fetchCompanyNameList", ()=>fetchCompanyNameList);
parcelHelpers.export(exports, "fetchAddressSuggestions", ()=>fetchAddressSuggestions);
parcelHelpers.export(exports, "resolveAddressSuggestion", ()=>resolveAddressSuggestion);
parcelHelpers.export(exports, "fetchOpenRegions", ()=>fetchOpenRegions);
parcelHelpers.export(exports, "fetchOpenCitiesByRegion", ()=>fetchOpenCitiesByRegion);
var _storage = require("@plasmohq/storage");
var _hubEnv = require("~api/hub-env");
const storage = new (0, _storage.Storage)({
    area: "local"
});
const TEAM_SETTINGS_KEY = "teamHubSettings";
const DEFAULT_TEAM_SETTINGS = {
    siteUrl: (0, _hubEnv.getHubUrl)(),
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
    const siteUrl = (opts.siteUrl || current.siteUrl || (0, _hubEnv.TEAM_SITE_URL)).replace(/\/+$/, "");
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
async function fetchCoverLetterBlob(coverLetterId) {
    const settings = await getTeamSettings();
    if (!settings.apiToken) return null;
    const res = await fetch(joinUrl(settings.siteUrl, `/api/v1/cover-letters/${encodeURIComponent(coverLetterId)}/download`), {
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
        fileName: match?.[1] || "cover-letter.pdf",
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
async function logApplication(row) {
    const settings = await getTeamSettings();
    const profileId = row.profileId || settings.selectedProfileId;
    const { ok, data } = await teamFetch("/api/v1/applications/log", {
        method: "POST",
        body: JSON.stringify({
            ...row,
            profileId: profileId || undefined,
            status: row.status || "applied"
        })
    });
    if (!ok || !data.ok) return {
        ok: false,
        error: data.error || "log_failed",
        message: data.message,
        tabName: data.tabName
    };
    return {
        ok: true,
        tabName: data.tabName
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
async function regenerateAnswer(body) {
    const settings = await getTeamSettings();
    const { ok, status, data } = await teamFetch("/api/v1/ai/regenerate-answer", {
        method: "POST",
        body: JSON.stringify({
            ...body,
            profileId: body.profileId || settings.selectedProfileId || undefined
        })
    });
    if (!ok || !data?.ok || !data.answer) return {
        ok: false,
        error: data?.error || "regenerate_failed",
        status
    };
    return {
        ok: true,
        answer: data.answer,
        uniqueId: data.uniqueId ?? null,
        regenerated: !!data.regenerated
    };
}
async function generateCoverLetter(body) {
    const settings = await getTeamSettings();
    const { ok, status, data } = await teamFetch("/api/v1/ai/cover-letter", {
        method: "POST",
        body: JSON.stringify({
            ...body,
            profileId: body.profileId || settings.selectedProfileId || undefined
        })
    });
    const payload = data?.data || data?.result;
    if (!ok || !payload?.markdown) return {
        ok: false,
        error: data?.error || "cover_letter_failed",
        status
    };
    return {
        ok: true,
        data: payload
    };
}
async function fetchDegreeSuggestions(input) {
    const { ok, data } = await teamFetch("/api/v1/suggestions/degrees", {
        method: "POST",
        body: JSON.stringify({
            input
        })
    });
    if (!ok) return [];
    return data.results || data.result || [];
}
async function fetchMajorSuggestions(input) {
    const { ok, data } = await teamFetch("/api/v1/suggestions/majors", {
        method: "POST",
        body: JSON.stringify({
            input
        })
    });
    if (!ok) return [];
    return data.results || data.result || [];
}
async function fetchCompanyNameList(input, companyId) {
    const { ok, data } = await teamFetch("/api/v1/suggestions/companies", {
        method: "POST",
        body: JSON.stringify({
            input,
            companyId
        })
    });
    if (!ok) return [];
    return data.results || data.result || [];
}
async function fetchAddressSuggestions(body) {
    const { ok, data } = await teamFetch("/api/v1/address/autocomplete", {
        method: "POST",
        body: JSON.stringify(body)
    });
    if (!ok) return [];
    return data.suggestions || data.result || [];
}
async function resolveAddressSuggestion(body) {
    const { ok, data } = await teamFetch("/api/v1/address/resolve", {
        method: "POST",
        body: JSON.stringify(body)
    });
    if (!ok) return null;
    return data.result ?? null;
}
async function fetchOpenRegions(country) {
    const { ok, data } = await teamFetch("/api/v1/geo/regions", {
        method: "POST",
        body: JSON.stringify({
            country
        })
    });
    if (!ok) return [];
    return data.result || [];
}
async function fetchOpenCitiesByRegion(country, region) {
    const { ok, data } = await teamFetch("/api/v1/geo/cities", {
        method: "POST",
        body: JSON.stringify({
            country,
            region
        })
    });
    if (!ok) return [];
    return data.result || [];
}

},{"@plasmohq/storage":"i0YkM","~api/hub-env":"e1kuR","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"i0YkM":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"e1kuR":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"j95gs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Control cohort \u2014 no Jobright A/B experiments. */ const handler = async (_req, res)=>{
    res.send({
        config: {},
        stub: true
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"8SnWK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/** Returns raw suggestion array (Jobright shape). */ const handler = async (req, res)=>{
    try {
        const input = typeof req.body?.input === "string" ? req.body.input : "";
        if (!input.trim()) {
            res.send([]);
            return;
        }
        const suggestions = await (0, _teamClient.fetchAddressSuggestions)({
            input,
            sessionToken: typeof req.body?.sessionToken === "string" ? req.body.sessionToken : undefined,
            countryCodes: Array.isArray(req.body?.countryCodes) ? req.body.countryCodes.filter((c)=>typeof c === "string") : undefined,
            limit: typeof req.body?.limit === "number" ? req.body.limit : 5
        });
        res.send(suggestions);
    } catch  {
        res.send([]);
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"9QmNG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softNull)("getAgentCoverLetter");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"66qsD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softNull)("getAgentQLRule");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iucsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softNull)("getAgentTailorResume");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"lwNg1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Static autofill feature config \u2014 Jobright fetches this from cloud.
 * Empty/default copy keeps payment banners from resolving to upsell text.
 */ const TEAM_AUTOFILL_CONFIG = {
    autofillBannerCopy: {
        off: ""
    },
    autofillStuBannerCopy: {
        off: ""
    },
    autofillCreditsCopy: {
        off: ""
    },
    enableAutofill: true,
    enableResumeUpload: true,
    enableCoverLetter: true,
    teamHub: true
};
const handler = async (_req, res)=>{
    res.send(TEAM_AUTOFILL_CONFIG);
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"etznj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
var _hubToJobright = require("~lib/hub-to-jobright");
/**
 * Returns autofill payload for the selected team profile.
 * `data` is Jobright-shaped for the engine runtime; `autofillInfo` keeps hub shape.
 * Body: { forceRefresh?: boolean, profileId?: string }
 */ const handler = async (req, res)=>{
    try {
        const profileId = typeof req.body?.profileId === "string" ? req.body.profileId : null;
        const hub = await (0, _teamClient.fetchAutofillInfo)(profileId);
        if (!hub) {
            res.send({
                ok: false,
                data: null,
                autofillInfo: null,
                message: "No profile selected or team hub not connected. Open extension options."
            });
            return;
        }
        const data = (0, _hubToJobright.hubToJobrightAutofill)(hub);
        res.send({
            ok: true,
            data,
            autofillInfo: hub,
            autoUpdate: true,
            revision: null
        });
    } catch (err) {
        res.send({
            ok: false,
            data: null,
            autofillInfo: null,
            message: err instanceof Error ? err.message : "fetch_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","~lib/hub-to-jobright":"2hkCS","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"2hkCS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Map team-hub autofill payload into the Jobright-shaped object that
 * engine stores / BaseFiller expect (personalInfo, location, etc.).
 */ parcelHelpers.export(exports, "hubToJobrightAutofill", ()=>hubToJobrightAutofill);
parcelHelpers.export(exports, "lookupAnswer", ()=>lookupAnswer);
/**
 * Local stand-in for Jobright fill-v2 / getGptResults.
 * Builds fill_data_list from hub identity + answers + structured extras.
 */ parcelHelpers.export(exports, "buildLocalGptResults", ()=>buildLocalGptResults);
function mapEducation(raw) {
    if (!Array.isArray(raw)) return [];
    return raw.filter((item)=>item && typeof item === "object").map((item)=>{
        const e = item;
        if (e.organization || e.dates) return {
            organization: e.organization || e.schoolName || "",
            accreditation: e.accreditation || "",
            gpa: e.gpa || "",
            dates: e.dates || {
                start_date: e.startDate || null,
                completion_date: e.isCurrent ? null : e.endDate || null,
                is_current: !!e.isCurrent
            }
        };
        return {
            organization: e.schoolName || "",
            accreditation: e.accreditation || "",
            gpa: e.gpa || "",
            dates: {
                start_date: e.startDate || null,
                completion_date: e.isCurrent ? null : e.endDate || null,
                is_current: !!e.isCurrent
            }
        };
    });
}
function mapWork(raw) {
    if (!Array.isArray(raw)) return [];
    return raw.filter((item)=>item && typeof item === "object").map((item)=>{
        const w = item;
        if (w.organization || w.job_title || w.dates) return {
            organization: w.organization || w.companyName || "",
            job_title: w.job_title || w.jobTitle || "",
            location: w.location || w.city || "",
            dates: w.dates || {
                start_date: w.startDate || null,
                completion_date: w.isCurrent ? null : w.endDate || null,
                is_current: !!w.isCurrent
            },
            summary: w.summary || "",
            job_descriptions: w.job_descriptions || w.descriptions || (w.summary ? [
                w.summary
            ] : [])
        };
        return {
            organization: w.companyName || "",
            job_title: w.jobTitle || "",
            location: w.city || "",
            dates: {
                start_date: w.startDate || null,
                completion_date: w.isCurrent ? null : w.endDate || null,
                is_current: !!w.isCurrent
            },
            summary: w.summary || "",
            job_descriptions: w.descriptions?.length ? w.descriptions : w.summary ? [
                w.summary
            ] : []
        };
    });
}
function mapSkills(raw) {
    if (Array.isArray(raw)) {
        const list = raw.map((s)=>String(s).trim()).filter(Boolean);
        return list.length ? {
            DEFAULT: list
        } : {};
    }
    if (raw && typeof raw === "object") return raw;
    return {};
}
function hubToJobrightAutofill(hub) {
    const addr = hub.identity?.address ?? {
        line1: "",
        line2: "",
        city: "",
        state: "",
        postalCode: "",
        country: ""
    };
    const extras = hub.extras && typeof hub.extras === "object" ? hub.extras : {};
    const education = mapEducation(extras.engineEducation ?? extras.education ?? extras.Education);
    const workExperience = mapWork(extras.engineWorkExperience ?? extras.workExperience ?? extras.employment);
    const employmentInfo = extras.employmentInfo && typeof extras.employmentInfo === "object" ? extras.employmentInfo : {};
    const skills = mapSkills(extras.engineSkills ?? extras.skills);
    return {
        ...hub,
        personalInfo: {
            firstName: hub.identity.firstName || "",
            middleName: String(extras.middleName ?? ""),
            lastName: hub.identity.lastName || "",
            preferredFirstName: String(extras.preferredFirstName ?? ""),
            preferredMiddleName: String(extras.preferredMiddleName ?? ""),
            preferredLastName: String(extras.preferredLastName ?? ""),
            email: hub.identity.email || "",
            phone_number: hub.identity.phone || "",
            linkedin_link: hub.identity.linkedin || "",
            linkedin: hub.identity.linkedin || "",
            github_link: String(extras.github ?? extras.github_link ?? ""),
            personal_site_link: hub.identity.website || "",
            personal_site: hub.identity.website || ""
        },
        location: {
            country: addr.country || "",
            state: addr.state || "",
            city: addr.city || "",
            postCode: addr.postalCode || "",
            county: String(extras.county ?? "")
        },
        addressLine: [
            addr.line1,
            addr.line2
        ].filter(Boolean).join(", "),
        state: addr.state || "",
        education,
        workExperience,
        employmentInfo,
        skills,
        salary: String(extras.salary ?? ""),
        hiringDate: (()=>{
            const tomorrow = localTomorrowYmd();
            const today = localTodayYmd();
            const raw = String(extras.hiringDate ?? "").trim();
            if (/^\d{4}-\d{2}-\d{2}$/.test(raw) && raw >= today) return raw;
            return tomorrow;
        })(),
        birthday: String(extras.birthday ?? extras.dateOfBirth ?? ""),
        yearsOfExperience: String(extras.yearsOfExperience ?? ""),
        plannedWorkLocation: String(extras.plannedWorkLocation ?? ""),
        additionalApplicationInfo: String(extras.additionalApplicationInfo ?? ""),
        pronouns: String(extras.pronouns ?? ""),
        phoneType: String(extras.phoneType ?? "Mobile"),
        phoneCountryCode: String(extras.phoneCountryCode ?? ""),
        _hubAnswers: hub.answers || {},
        defaultResumeId: hub.defaultResumeId,
        resumes: hub.resumes
    };
}
function normalizeLabel(text) {
    return (text || "").toLowerCase().replace(/\s*\*\s*/g, " ").replace(/[^a-z0-9]+/g, " ").trim();
}
function localTodayYmd() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}
/** Default start / available-from date: tomorrow (local). */ function localTomorrowYmd() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}
function parseYmd(raw) {
    const t = raw.trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return t;
    if (/^\d{4}-\d{2}$/.test(t)) return `${t}-01`;
    const us = t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (us) return `${us[3]}-${us[1].padStart(2, "0")}-${us[2].padStart(2, "0")}`;
    return null;
}
function extrasString(hub, key) {
    const extras = hub.extras || {};
    const v = extras[key];
    return typeof v === "string" ? v : v != null ? String(v) : "";
}
function employmentField(hub, key) {
    const info = hub.extras?.employmentInfo;
    if (!info || typeof info !== "object" || Array.isArray(info)) return "";
    const v = info[key];
    return typeof v === "string" ? v : v != null ? String(v) : "";
}
function formatLocation(hub) {
    const a = hub.identity.address;
    return [
        a.city,
        a.state,
        a.country
    ].map((s)=>s?.trim()).filter(Boolean).join(", ");
}
/**
 * Available-from / hiring date for forms.
 * Prefer hub hiringDate when it is today or later; otherwise tomorrow.
 */ function formatHiringDate(hub) {
    const tomorrow = localTomorrowYmd();
    const today = localTodayYmd();
    const parsed = parseYmd(extrasString(hub, "hiringDate"));
    if (parsed && parsed >= today) return parsed;
    return tomorrow;
}
function formatHiringDateUs(hub) {
    const iso = formatHiringDate(hub);
    const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) return iso;
    return `${m[2]}/${m[3]}/${m[1]}`;
}
/** True if candidate needs employer sponsorship. */ function needsSponsorship(hub) {
    const status = employmentField(hub, "sponsorshipStatus").toLowerCase();
    const auth = employmentField(hub, "workAuthorization").toLowerCase();
    if (!status && !auth) return null;
    if (/will not require|no sponsorship|do not require|doesn't require|does not require/.test(status)) return false;
    if (/require sponsorship|needs sponsorship|need sponsorship/.test(status)) return true;
    if (/need sponsorship|not authorized/.test(auth)) return true;
    if (/authorized to work/.test(auth) && !/sponsorship/.test(status)) return false;
    return null;
}
/** True if authorized to work (generally / without needing sponsorship framing). */ function isWorkAuthorized(hub) {
    const auth = employmentField(hub, "workAuthorization").toLowerCase();
    if (!auth) return null;
    if (/not authorized/.test(auth)) return false;
    if (/authorized to work|authorized/.test(auth)) return true;
    if (/need sponsorship/.test(auth)) return false;
    return null;
}
function elementOptions(el) {
    const raw = el.options;
    if (!Array.isArray(raw)) return [];
    return raw.map((o)=>typeof o === "string" ? o : String(o ?? "")).map((s)=>s.trim()).filter(Boolean);
}
function hasYesNoOptions(options) {
    const norms = options.map(normalizeLabel);
    return norms.some((n)=>n === "yes" || n.startsWith("yes ")) && norms.some((n)=>n === "no" || n.startsWith("no "));
}
function pickYesNo(options, yes) {
    const want = yes ? "yes" : "no";
    const hit = options.find((o)=>{
        const n = normalizeLabel(o);
        return n === want || n.startsWith(`${want} `);
    });
    return hit || (yes ? "Yes" : "No");
}
/** Pull leading year-range numbers from strings like "5-7 years" / "10+". */ function yearRangeParts(text) {
    const n = normalizeLabel(text);
    const plus = n.match(/^(\d+)\s*\+\s*(years?)?$/);
    if (plus) {
        const lo = Number(plus[1]);
        return {
            lo,
            hi: 99
        };
    }
    const range = n.match(/^(\d+)\s*[-\u2013\u2014to]+\s*(\d+)\s*(years?)?$/);
    if (range) return {
        lo: Number(range[1]),
        hi: Number(range[2])
    };
    const single = n.match(/^(\d+)\s*(years?)?$/);
    if (single) {
        const v = Number(single[1]);
        return {
            lo: v,
            hi: v
        };
    }
    return null;
}
function scoreOption(candidate, option) {
    const c = normalizeLabel(candidate);
    const o = normalizeLabel(option);
    if (!c || !o) return 0;
    if (/^please select|^select |^choose |^\u2014|^-$/.test(o) || o === "select") return 0;
    if (c === o) return 100;
    const cFlat = c.replace(/\s*[-\u2013\u2014]\s*/g, "-").replace(/\s+/g, "");
    const oFlat = o.replace(/\s*[-\u2013\u2014]\s*/g, "-").replace(/\s+/g, "");
    if (cFlat === oFlat) return 98;
    const cr = yearRangeParts(c);
    const or = yearRangeParts(o);
    if (cr && or) {
        // Overlapping experience bands (Personio often differs slightly from hub)
        const overlap = Math.min(cr.hi, or.hi) - Math.max(cr.lo, or.lo);
        if (overlap >= 0) return 90;
        const midC = (cr.lo + cr.hi) / 2;
        const midO = (or.lo + or.hi) / 2;
        if (Math.abs(midC - midO) <= 2) return 75;
    }
    if (o.includes(c) || c.includes(o)) return 80;
    const ct = new Set(c.split(" ").filter(Boolean));
    const ot = o.split(" ").filter(Boolean);
    let hit = 0;
    for (const t of ot)if (ct.has(t)) hit += 1;
    if (!ot.length) return 0;
    return Math.round(hit / ot.length * 60);
}
function adaptToOptions(value, options) {
    if (!options.length) return value;
    let best = value;
    let bestScore = 0;
    for (const opt of options){
        const s = scoreOption(value, opt);
        if (s > bestScore) {
            bestScore = s;
            best = opt;
        }
    }
    return bestScore >= 40 ? best : value;
}
function labelMatches(norm, keys) {
    for (const key of keys){
        if (norm === key) return true;
        if (key.length >= 4 && norm.includes(key)) return true;
        if (norm.length >= 4 && key.includes(norm) && norm.length >= key.length - 2) return true;
    }
    return false;
}
/** Long legal / eligibility questions \u2014 never treat as plain location fields. */ function isLegalEligibilityQuestion(norm) {
    return norm.includes("authorized") || norm.includes("authorised") || norm.includes("sponsorship") || norm.includes("sponsor") || norm.includes("eligible to work") || norm.includes("work authorization") || norm.includes("visa") || norm.includes("require") && norm.includes("employer");
}
function isPlainLocationLabel(norm) {
    if (isLegalEligibilityQuestion(norm)) return false;
    if (norm.includes("planned work location")) return false;
    if (norm.includes("preferred work location")) return false;
    return norm === "location" || norm === "current location" || norm === "current city" || norm === "where are you located" || norm === "where are you based" || norm === "where based" || norm === "your location" || norm === "city" || norm === "town" || /^current (city|location|address)$/.test(norm) || norm.includes("where are you") && (norm.includes("based") || norm.includes("located"));
}
function isPlannedWorkLocationLabel(norm) {
    if (isLegalEligibilityQuestion(norm)) return false;
    return norm === "planned work location" || norm === "preferred work location" || norm === "work location" || norm === "preferred location" || norm.includes("planned") && norm.includes("location") && !norm.includes("authorized") || norm.includes("preferred") && norm.includes("work") && norm.includes("location") && !norm.includes("authorized");
}
const ANSWER_RESOLVERS = [
    {
        keys: [
            "first name",
            "firstname",
            "given name",
            "legal first name"
        ],
        priority: 20,
        get: (h)=>h.identity.firstName
    },
    {
        keys: [
            "middle name",
            "middlename"
        ],
        priority: 20,
        get: (h)=>extrasString(h, "middleName")
    },
    {
        keys: [
            "last name",
            "lastname",
            "surname",
            "family name",
            "legal last name"
        ],
        priority: 20,
        get: (h)=>h.identity.lastName
    },
    {
        keys: [
            "preferred name",
            "preferred first name"
        ],
        priority: 15,
        get: (h)=>extrasString(h, "preferredFirstName")
    },
    {
        keys: [
            "full name",
            "candidate name",
            "applicant name"
        ],
        priority: 10,
        get: (h)=>h.identity.fullName || `${h.identity.firstName} ${h.identity.lastName}`.trim()
    },
    {
        // Bare "name" only when label is exactly name (Personio "Name*")
        keys: [
            "name"
        ],
        priority: 5,
        get: (h, labelNorm)=>{
            if (labelNorm !== "name") return "";
            return h.identity.fullName || `${h.identity.firstName} ${h.identity.lastName}`.trim();
        }
    },
    {
        keys: [
            "email",
            "e mail",
            "email address",
            "work email"
        ],
        get: (h)=>h.identity.email
    },
    {
        keys: [
            "phone",
            "phone number",
            "mobile",
            "mobile phone",
            "cell",
            "telephone"
        ],
        get: (h)=>h.identity.phone
    },
    {
        keys: [
            "linkedin",
            "linkedin url",
            "linkedin profile",
            "linkedin link"
        ],
        get: (h)=>h.identity.linkedin
    },
    {
        keys: [
            "github",
            "github url",
            "github profile"
        ],
        get: (h)=>extrasString(h, "github")
    },
    {
        keys: [
            "website",
            "personal website",
            "portfolio",
            "personal site"
        ],
        get: (h)=>h.identity.website
    },
    {
        keys: [
            "current location",
            "current city",
            "where are you located",
            "where are you based",
            "where based",
            "your location",
            "location city"
        ],
        priority: 25,
        get: (h, labelNorm)=>{
            if (isLegalEligibilityQuestion(labelNorm)) return "";
            if (!isPlainLocationLabel(labelNorm)) {
                if (labelNorm !== "current city" && labelNorm !== "where are you located" && labelNorm !== "where are you based" && labelNorm !== "where based" && labelNorm !== "your location" && labelNorm !== "location city") return "";
            }
            return formatLocation(h) || h.identity.address.city;
        }
    },
    {
        keys: [
            "city",
            "town"
        ],
        priority: 10,
        get: (h, labelNorm)=>{
            if (isLegalEligibilityQuestion(labelNorm)) return "";
            if (labelNorm.includes("location") && !isPlainLocationLabel(labelNorm)) return "";
            return h.identity.address.city;
        }
    },
    {
        keys: [
            "state",
            "province",
            "region"
        ],
        get: (h)=>h.identity.address.state
    },
    {
        keys: [
            "country",
            "country region",
            "nation"
        ],
        get: (h)=>h.identity.address.country
    },
    {
        keys: [
            "county"
        ],
        get: (h)=>extrasString(h, "county")
    },
    {
        keys: [
            "zip",
            "zip code",
            "postal",
            "postal code",
            "postcode"
        ],
        get: (h)=>h.identity.address.postalCode
    },
    {
        keys: [
            "address line 2",
            "address 2",
            "apt",
            "suite",
            "unit"
        ],
        priority: 15,
        get: (h)=>h.identity.address.line2
    },
    {
        keys: [
            "address",
            "street address",
            "address line 1",
            "address 1",
            "street"
        ],
        priority: 10,
        get: (h)=>h.identity.address.line1
    },
    {
        keys: [
            "gender",
            "sex"
        ],
        get: (h)=>employmentField(h, "gender")
    },
    {
        keys: [
            "race",
            "ethnicity",
            "ethnic"
        ],
        get: (h)=>employmentField(h, "race")
    },
    {
        keys: [
            "veteran",
            "military"
        ],
        get: (h)=>employmentField(h, "veteran")
    },
    {
        keys: [
            "disability",
            "disabled"
        ],
        get: (h)=>employmentField(h, "disability")
    },
    {
        keys: [
            "hispanic",
            "latino",
            "latina"
        ],
        get: (h)=>employmentField(h, "hispanic")
    },
    {
        keys: [
            "lgbt",
            "lgbtq"
        ],
        get: (h)=>employmentField(h, "lgbt")
    },
    {
        keys: [
            "pronouns"
        ],
        get: (h)=>extrasString(h, "pronouns")
    },
    {
        keys: [
            "expected salary",
            "desired salary",
            "salary expectation",
            "salary expectations",
            "compensation",
            "salary"
        ],
        priority: 20,
        get: (h)=>extrasString(h, "salary")
    },
    {
        keys: [
            "birthday",
            "date of birth",
            "dob",
            "birth date",
            "birthdate"
        ],
        priority: 25,
        get: (h, _n, options)=>{
            const raw = extrasString(h, "birthday") || extrasString(h, "dateOfBirth");
            if (!raw.trim()) return "";
            const t = raw.trim();
            let ymd = t;
            if (/^\d{4}-\d{2}$/.test(t)) ymd = `${t}-01`;
            else {
                const us = t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
                if (us) ymd = `${us[3]}-${us[1].padStart(2, "0")}-${us[2].padStart(2, "0")}`;
            }
            const m = ymd.match(/^(\d{4})-(\d{2})-(\d{2})$/);
            const usFmt = m ? `${m[2]}/${m[3]}/${m[1]}` : ymd;
            if (!options.length) return usFmt;
            const joined = options.map(normalizeLabel).join(" ");
            if (joined.includes("yyyy") || joined.includes("-")) return ymd;
            return usFmt;
        }
    },
    {
        keys: [
            "years of experience",
            "years experience",
            "total experience",
            "how many years"
        ],
        priority: 35,
        get: (h, labelNorm, options)=>{
            if (isLegalEligibilityQuestion(labelNorm)) return "";
            const v = extrasString(h, "yearsOfExperience");
            if (!v) return "";
            return options.length ? adaptToOptions(v, options) : v;
        }
    },
    {
        keys: [
            "planned work location",
            "preferred work location",
            "work location",
            "preferred location"
        ],
        priority: 35,
        get: (h, labelNorm, options)=>{
            if (!isPlannedWorkLocationLabel(labelNorm)) return "";
            const v = extrasString(h, "plannedWorkLocation");
            if (!v) return "";
            return options.length ? adaptToOptions(v, options) : v;
        }
    },
    {
        keys: [
            "available from",
            "available date",
            "availability date",
            "earliest start",
            "start date",
            "hiring date",
            "availability"
        ],
        priority: 20,
        get: (h, _n, options)=>{
            const iso = formatHiringDate(h);
            const us = formatHiringDateUs(h);
            if (!options.length) return iso;
            const joined = options.map(normalizeLabel).join(" ");
            if (joined.includes("mm") || joined.includes("dd")) return us;
            return iso;
        }
    },
    {
        keys: [
            "source",
            "job portal",
            "how did you hear",
            "referral source",
            "application source"
        ],
        priority: 15,
        get: (h, _n, options)=>{
            const linkedin = h.identity.linkedin;
            if (linkedin && options.length) {
                const hit = options.find((o)=>/linkedin/i.test(o));
                if (hit) return hit;
            }
            if (linkedin) return "LinkedIn";
            const other = options.find((o)=>/^other$/i.test(o.trim()));
            return other || extrasString(h, "additionalApplicationInfo") || "Other";
        }
    },
    {
        keys: [
            "gdpr",
            "privacy policy",
            "data retention",
            "retain my data",
            "consent",
            "i agree",
            "terms and conditions",
            "terms of use"
        ],
        priority: 30,
        get: (_h, labelNorm, options)=>{
            // Never answer legal work-auth with GDPR yes
            if (isLegalEligibilityQuestion(labelNorm)) return "";
            if (!options.length) return "Yes";
            const hit = options.find((o)=>/agree|accept|consent|yes|i have read|acknowledge/i.test(o)) || options.find((o)=>!/select|choose|please/i.test(o));
            return hit || "Yes";
        }
    },
    {
        // "authorized ... without employer sponsorship?" \u2192 Yes only if authorized AND no sponsorship
        keys: [
            "without employer sponsorship",
            "without sponsorship",
            "authorized to work",
            "legally authorized",
            "eligible to work",
            "work authorization",
            "work authorisation"
        ],
        priority: 40,
        get: (h, labelNorm, options)=>{
            if (!isLegalEligibilityQuestion(labelNorm) && !labelNorm.includes("authorized")) {
                if (!labelNorm.includes("work authorization")) return "";
            }
            const auth = isWorkAuthorized(h);
            const sponsor = needsSponsorship(h);
            const asksWithoutSponsorship = labelNorm.includes("without") && labelNorm.includes("sponsorship");
            const asksAuthorized = labelNorm.includes("authorized") || labelNorm.includes("authorised") || labelNorm.includes("eligible to work") || labelNorm.includes("work authorization");
            let yes = null;
            if (asksWithoutSponsorship) yes = auth === true && sponsor !== true ? true : auth === false || sponsor === true ? false : null;
            else if (asksAuthorized) yes = auth;
            const raw = employmentField(h, "workAuthorization");
            // Native Yes/No controls
            if (yes != null && hasYesNoOptions(options)) return pickYesNo(options, yes);
            // Free-text / textarea: write a clear sentence, never location junk
            if (yes != null && !options.length) {
                if (asksWithoutSponsorship) return yes ? "Yes \u2014 I am authorized to work without employer sponsorship." : "No \u2014 I will require employer sponsorship.";
                return yes ? raw || "Yes, I am authorized to work." : raw || "No, I am not currently authorized without sponsorship.";
            }
            return options.length ? adaptToOptions(raw, options) : raw;
        }
    },
    {
        keys: [
            "require employer sponsorship",
            "require sponsorship",
            "visa sponsorship",
            "sponsorship now or in the future",
            "sponsorship"
        ],
        priority: 40,
        get: (h, labelNorm, options)=>{
            if (!labelNorm.includes("sponsor") && !labelNorm.includes("visa")) return "";
            const sponsor = needsSponsorship(h);
            const asksRequire = labelNorm.includes("require") || labelNorm.includes("need") || labelNorm.includes("will you");
            const raw = employmentField(h, "sponsorshipStatus");
            if (sponsor != null && asksRequire && hasYesNoOptions(options)) return pickYesNo(options, sponsor);
            if (sponsor != null && asksRequire && !options.length) return sponsor ? "Yes \u2014 I will require employer sponsorship now or in the future." : "No \u2014 I will not require employer sponsorship.";
            return options.length ? adaptToOptions(raw, options) : raw;
        }
    }
];
function lookupAnswer(hub, label, options = []) {
    const norm = normalizeLabel(label);
    if (!norm) return null;
    // Explicit Q&A from hub first (exact / careful contains)
    let bestAnswer = null;
    let bestAnswerScore = 0;
    for (const [key, value] of Object.entries(hub.answers || {})){
        if (!value) continue;
        const nk = normalizeLabel(key);
        let score = 0;
        if (nk === norm) score = 100;
        else if (// Contiguous phrase only \u2014 blocks short keys like "Location" matching
        // "\u2026planned work location\u2026" / auth questions.
        nk.split(" ").length >= 2 && nk.length >= 8 && norm.includes(nk)) score = 85;
        else if (nk.split(" ").length >= 2 && norm.split(" ").length <= nk.split(" ").length + 3 && (norm.includes(nk) || nk.includes(norm))) score = 70;
        else if (!isLegalEligibilityQuestion(norm)) {
            const nt = new Set(norm.split(" ").filter((t)=>t.length > 2));
            const kt = nk.split(" ").filter((t)=>t.length > 2);
            if (kt.length >= 2) {
                const hits = kt.filter((t)=>nt.has(t)).length;
                const ratio = hits / Math.max(kt.length, nt.size);
                if (ratio >= 0.7 && hits >= 2) score = Math.round(ratio * 65);
            }
        }
        // Never let location answers win on legal questions
        if (isLegalEligibilityQuestion(norm) && /location|city|address/.test(nk) && !/sponsor|authoriz|visa|eligible/.test(nk)) score = 0;
        if (score > bestAnswerScore) {
            bestAnswerScore = score;
            bestAnswer = value;
        }
    }
    if (bestAnswer && bestAnswerScore >= 70) {
        // Prefer structured resolvers for legal Yes/No when the field is free-text
        // (Personio auth questions are textareas, not radios).
        const shortYesNo = /^(yes|no)\b/i.test(bestAnswer.trim());
        if (!(isLegalEligibilityQuestion(norm) && !options.length && shortYesNo)) return options.length ? adaptToOptions(bestAnswer, options) : bestAnswer;
    }
    const matches = ANSWER_RESOLVERS.filter((r)=>labelMatches(norm, r.keys)).sort((a, b)=>(b.priority ?? 0) - (a.priority ?? 0));
    for (const resolver of matches){
        const v = resolver.get(hub, norm, options)?.trim();
        if (v) return options.length ? adaptToOptions(v, options) : v;
    }
    if (bestAnswer && bestAnswerScore >= 70) return options.length ? adaptToOptions(bestAnswer, options) : bestAnswer;
    return null;
}
function buildLocalGptResults(hub, elements) {
    const jobright = hubToJobrightAutofill(hub);
    const fill_data_list = [];
    for (const el of elements){
        const label = typeof el?.label === "string" ? el.label : "";
        if (!label) continue;
        const options = elementOptions(el);
        let value = lookupAnswer(hub, label, options);
        // Fallback: applicationSummary from hub extras (team-site derived)
        if (!value) {
            const summary = hub.extras?.applicationSummary && typeof hub.extras.applicationSummary === "object" && !Array.isArray(hub.extras.applicationSummary) ? hub.extras.applicationSummary : null;
            const norm = normalizeLabel(label);
            if (summary) {
                if (/salary|compensation/.test(norm) && !isLegalEligibilityQuestion(norm) && typeof summary.salary === "string" && summary.salary.trim()) value = summary.salary.trim();
                else if (/available from|available date|hiring date|earliest start|^availability$/.test(norm) && typeof summary.hiringDate === "string" && summary.hiringDate.trim()) value = summary.hiringDate.trim();
                else if (isPlainLocationLabel(norm) && typeof summary.location === "string" && summary.location.trim()) value = summary.location.trim();
                else if (/birthday|date of birth|^dob$|birth date/.test(norm) && typeof summary.birthday === "string" && summary.birthday.trim()) value = summary.birthday.trim();
                else if (/years of experience|years experience/.test(norm) && typeof summary.yearsOfExperience === "string" && summary.yearsOfExperience.trim()) value = options.length ? adaptToOptions(summary.yearsOfExperience.trim(), options) : summary.yearsOfExperience.trim();
                else if (isPlannedWorkLocationLabel(norm) && typeof summary.plannedWorkLocation === "string" && summary.plannedWorkLocation.trim()) value = options.length ? adaptToOptions(summary.plannedWorkLocation.trim(), options) : summary.plannedWorkLocation.trim();
            }
        }
        if (value != null && value !== "") fill_data_list.push({
            name: label,
            value
        });
    }
    return {
        fill_data_list,
        profile_data: jobright,
        profileData: jobright
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"5fWaa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _resumeBlob = require("~background/lib/resume-blob");
/**
 * Team fork: base resume == selected profile default resume.
 * Engine helper calls this when tailor/diagnose paths are absent.
 */ const handler = async (req, res)=>{
    const resumeId = typeof req.body?.resumeId === "string" ? req.body.resumeId : null;
    res.send(await (0, _resumeBlob.resolveResumeBlobResponse)({
        resumeId
    }));
};
exports.default = handler;

},{"~background/lib/resume-blob":"6dfNF","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"6dfNF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Resolve a resume blob for the selected (or requested) hub profile.
 * Team fork has no separate tailor/base diagnose pipeline \u2014 all aliases
 * resolve to the profile's default or named resume.
 */ parcelHelpers.export(exports, "resolveResumeBlobResponse", ()=>resolveResumeBlobResponse);
var _teamClient = require("~api/team-client");
function blobToBase64(blob) {
    return blob.arrayBuffer().then((buffer)=>{
        const bytes = new Uint8Array(buffer);
        let binary = "";
        for(let i = 0; i < bytes.length; i++)binary += String.fromCharCode(bytes[i]);
        const mime = blob.type || "application/pdf";
        return {
            base64: btoa(binary),
            mime
        };
    });
}
async function resolveResumeBlobResponse(opts) {
    try {
        let resumeId = typeof opts?.resumeId === "string" && opts.resumeId.trim() ? opts.resumeId.trim() : null;
        if (!resumeId) {
            const info = await (0, _teamClient.fetchAutofillInfo)();
            resumeId = info?.defaultResumeId ?? info?.resumes?.[0]?.id ?? null;
        }
        if (!resumeId) return {
            ok: false,
            message: "no_resume",
            base64URL: ""
        };
        const file = await (0, _teamClient.fetchResumeBlob)(resumeId);
        if (!file) return {
            ok: false,
            message: "download_failed",
            base64URL: ""
        };
        const { base64, mime } = await blobToBase64(file.blob);
        const mimeType = file.mimeType || mime || "application/pdf";
        const extension = (file.fileName.split(".").pop() || "pdf").toLowerCase() || "pdf";
        return {
            ok: true,
            resumeId,
            fileName: file.fileName,
            mimeType,
            extension,
            base64,
            base64URL: `data:${mimeType};base64,${base64}`
        };
    } catch (err) {
        return {
            ok: false,
            message: err instanceof Error ? err.message : "fetch_failed",
            base64URL: ""
        };
    }
}

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"5Oy7G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
const handler = async (req, res)=>{
    try {
        const input = typeof req.body?.input === "string" ? req.body.input : "";
        const companyId = typeof req.body?.linkedinCompanyId === "string" ? req.body.linkedinCompanyId : typeof req.body?.companyId === "string" ? req.body.companyId : undefined;
        res.send(await (0, _teamClient.fetchCompanyNameList)(input, companyId));
    } catch  {
        res.send([]);
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"429Q5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
function blobToBase64(blob) {
    return blob.arrayBuffer().then((buffer)=>{
        const bytes = new Uint8Array(buffer);
        let binary = "";
        for(let i = 0; i < bytes.length; i++)binary += String.fromCharCode(bytes[i]);
        return {
            base64: btoa(binary),
            mime: blob.type || "application/pdf"
        };
    });
}
/**
 * Body: { coverLetterId?: string }
 * Falls back to the selected profile's default cover letter.
 */ const handler = async (req, res)=>{
    try {
        let coverLetterId = typeof req.body?.coverLetterId === "string" ? req.body.coverLetterId : null;
        if (!coverLetterId) {
            const info = await (0, _teamClient.fetchAutofillInfo)();
            coverLetterId = info?.defaultCoverLetterId ?? info?.coverLetters?.[0]?.id ?? null;
        }
        if (!coverLetterId) {
            res.send({
                ok: false,
                message: "no_cover_letter",
                base64URL: ""
            });
            return;
        }
        const file = await (0, _teamClient.fetchCoverLetterBlob)(coverLetterId);
        if (!file) {
            res.send({
                ok: false,
                message: "download_failed",
                base64URL: ""
            });
            return;
        }
        const { base64, mime } = await blobToBase64(file.blob);
        const mimeType = file.mimeType || mime;
        const extension = (file.fileName.split(".").pop() || "pdf").toLowerCase() || "pdf";
        res.send({
            ok: true,
            coverLetterId,
            fileName: file.fileName,
            mimeType,
            extension,
            base64,
            base64URL: `data:${mimeType};base64,${base64}`
        });
    } catch (err) {
        res.send({
            ok: false,
            message: err instanceof Error ? err.message : "fetch_failed",
            base64URL: ""
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"5HlZl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softNull)("getCreditFeed");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4NlXQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Team fork has no credit metering \u2014 report subscribed + high balance
 * so Jobright UI (payment banners, out-of-credit modals) stays quiet.
 */ const handler = async (_req, res)=>{
    res.send({
        credit: {
            autofill: 9999,
            tailor: 9999,
            coverLetter: 9999
        },
        subscribed: true,
        stub: true
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"bCwt0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Credits UI off \u2014 team hub does not sell Turbo. */ const handler = async (_req, res)=>{
    res.send(false);
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"8MKE2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/** Current cover letter metadata from the selected hub profile. */ const handler = async (_req, res)=>{
    try {
        const info = await (0, _teamClient.fetchAutofillInfo)();
        if (!info) {
            res.send(null);
            return;
        }
        const letters = info.coverLetters ?? [];
        const def = letters.find((c)=>c.id === info.defaultCoverLetterId) ?? letters[0];
        if (!def) {
            res.send(null);
            return;
        }
        res.send({
            id: def.id,
            coverLetterId: def.id,
            name: def.displayName || def.fileName,
            fileName: def.fileName,
            mimeType: def.mimeType,
            isDefault: !!def.isDefault
        });
    } catch  {
        res.send(null);
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4Q79V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
var _hubToJobright = require("~lib/hub-to-jobright");
/**
 * Local stand-in for Jobright company-answer API.
 * Resolves a single field label against the selected hub profile.
 *
 * Body: { label?: string, companyName?: string, options?: string[] }
 */ const handler = async (req, res)=>{
    try {
        const body = req.body ?? {};
        const label = typeof body.label === "string" ? body.label : typeof body.companyName === "string" ? body.companyName : "";
        const options = Array.isArray(body.options) ? body.options.filter((o)=>typeof o === "string") : [];
        if (!label.trim()) {
            res.send({
                ok: false,
                data: null,
                message: "label_required"
            });
            return;
        }
        const hub = await (0, _teamClient.fetchAutofillInfo)(typeof body.profileId === "string" ? body.profileId : null);
        if (!hub) {
            res.send({
                ok: false,
                data: null,
                message: "no_profile"
            });
            return;
        }
        const value = (0, _hubToJobright.lookupAnswer)(hub, label, options);
        res.send({
            ok: true,
            data: value,
            result: value
        });
    } catch (err) {
        res.send({
            ok: false,
            data: null,
            message: err instanceof Error ? err.message : "resolve_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","~lib/hub-to-jobright":"2hkCS","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"khUrO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const handler = async (req, res)=>{
    res.send(req.sender?.tab?.id ?? null);
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"i5VU9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const handler = async (_req, res)=>{
    const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });
    res.send(tabs[0]?.url ?? null);
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"frfxe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
const handler = async (req, res)=>{
    try {
        const input = typeof req.body?.input === "string" ? req.body.input : "";
        res.send(await (0, _teamClient.fetchDegreeSuggestions)(input));
    } catch  {
        res.send([]);
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"djptI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softNull)("getExternalJobId");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"67xsX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softNull)("getExternalJobStatus");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4qZmt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
var _hubToJobright = require("~lib/hub-to-jobright");
/**
 * Local fill-v2 stand-in: map extracted form labels \u2192 hub answers / identity.
 * Engine helpers call this instead of Jobright /swan/autofill/fill-v2.
 */ const handler = async (req, res)=>{
    try {
        const params = req.body?.params ?? req.body ?? {};
        const elements = Array.isArray(params.elements) ? params.elements : [];
        const hub = await (0, _teamClient.fetchAutofillInfo)(typeof params.profileId === "string" ? params.profileId : null);
        if (!hub) {
            res.send({
                ok: false,
                data: {
                    HTTP_STATUS: 401
                },
                message: "No profile selected"
            });
            return;
        }
        const result = (0, _hubToJobright.buildLocalGptResults)(hub, elements);
        res.send({
            ok: true,
            data: result
        });
    } catch (err) {
        console.error("[getGptResults] local resolve failed", err);
        res.send({
            ok: false,
            data: {
                HTTP_STATUS: 500
            },
            message: err instanceof Error ? err.message : "resolve_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","~lib/hub-to-jobright":"2hkCS","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"dej2B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softNull)("getJobBannerDetail");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"7k2HI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softNull)("getJobDetail");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"8IGK5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
const handler = async (req, res)=>{
    try {
        const input = typeof req.body?.input === "string" ? req.body.input : "";
        res.send(await (0, _teamClient.fetchMajorSuggestions)(input));
    } catch  {
        res.send([]);
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"bDQBa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/** Returns city name string array (Jobright shape). */ const handler = async (req, res)=>{
    try {
        const country = typeof req.body?.country === "string" ? req.body.country : "";
        const region = typeof req.body?.region === "string" ? req.body.region : "";
        if (!country || !region) {
            res.send([]);
            return;
        }
        res.send(await (0, _teamClient.fetchOpenCitiesByRegion)(country, region));
    } catch  {
        res.send([]);
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"j1GMZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/** Returns region array [{ code, name }] (Jobright shape). */ const handler = async (req, res)=>{
    try {
        const country = typeof req.body?.country === "string" ? req.body.country : "";
        if (!country) {
            res.send([]);
            return;
        }
        res.send(await (0, _teamClient.fetchOpenRegions)(country));
    } catch  {
        res.send([]);
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"kyzkM":[function(require,module,exports) {
// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../getPageLinkedinJobInfo.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function injectMain() {
    try {
        let e = function() {
            let e = window.top.location.href, t = new URLSearchParams(window.top.location.search), r = t.get("currentJobId");
            if (r) return r;
            let a = e.match(/jobs\/view\/(\d+)/);
            return a && a[1] ? r = a[1] : null;
        }();
        if (!e) return console.error("[LinkedIn Job Extractor] Cannot get JobID"), null;
        let t = function() {
            try {
                let e = window.requireModule ? window.requireModule("ember").default : window.Ember;
                if (!e) return console.error("[LinkedIn Job Extractor] Cannot find Ember module"), null;
                let t = e.Namespace.NAMESPACES.find((t)=>t instanceof e.Application);
                if (!t || !t.__container__) return console.error("[LinkedIn Job Extractor] Cannot find Ember application container"), null;
                let r = t.__container__, a = r.lookup("service:store");
                if (!a || !a._globalM3RecordDataCache) return console.error("[LinkedIn Job Extractor] Cannot find Ember data cache"), null;
                return {
                    ember: e,
                    cache: a._globalM3RecordDataCache
                };
            } catch (e) {
                return console.error("[LinkedIn Job Extractor] Error getting Ember cache:", e), null;
            }
        }();
        if (!t) return console.error("[LinkedIn Job Extractor] Cannot get Ember cache"), null;
        let r = function(e, t) {
            try {
                let r = `urn:li:fsd_jobPosting:${t}`, a = `urn:li:fsd_jobPostingCard:(${t},JOB_DETAILS)`, o = e[r];
                if (!o || !o.__data) return console.error("[LinkedIn Job Extractor] Cannot find job base data:", r), {
                    error: "Cannot find job base data",
                    job_id: t
                };
                let s = o.__data, n = e[a], l = n && n.__data || {};
                l && 0 !== Object.keys(l).length || console.error("[LinkedIn Job Extractor] Cannot find job card data:", a);
                let { company_id: i, company_name: u } = function(e, t) {
                    try {
                        let r = t.companyDetails && t.companyDetails.jobCompany && t.companyDetails.jobCompany["*company"];
                        if (!r) return {
                            company_id: null,
                            company_name: document.querySelector(".job-details-jobs-unified-top-card__company-name")?.textContent.trim() || ""
                        };
                        let a = null, o = r.split(":");
                        a = o[o.length - 1];
                        let s = e[r] && e[r].__data, n = s && s.name || "";
                        return {
                            company_id: a,
                            company_name: n
                        };
                    } catch (e) {
                        return console.warn("[LinkedIn Job Extractor] Getting company info failed:", e), {
                            company_id: null,
                            company_name: ""
                        };
                    }
                }(e, s), c = {
                    job_id: t,
                    job_title: s.title || "",
                    job_description: s.description && s.description.text || "",
                    company_id: i,
                    company_name: u,
                    location: function(e, t) {
                        try {
                            let r = t["*location"];
                            if (!r) return "";
                            let a = e[r] && e[r].__data;
                            return a && a.defaultLocalizedName || "";
                        } catch (e) {
                            return console.warn("[LinkedIn Job Extractor] Getting location info failed:", e), "";
                        }
                    }(e, s),
                    job_state: s.jobState || "",
                    is_expired: "CLOSED" === s.jobState
                };
                return c;
            } catch (e) {
                return console.error("[LinkedIn Job Extractor] Error extracting job info:", e), {
                    error: e.message,
                    job_id: t,
                    stack: e.stack
                };
            }
        }(t.cache, e);
        return r;
    } catch (e) {
        console.error("[LinkedIn Job Extractor] Error occurred during execution:", e);
    }
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        if (!tabId) {
            res.send({
                success: false,
                ok: false,
                message: "no_tab"
            });
            return;
        }
        const frameId = req.sender?.frameId ?? 0;
        const target = req.body?.allFrames === true ? {
            tabId,
            allFrames: true
        } : {
            tabId,
            frameIds: [
                frameId
            ]
        };
        const results = await chrome.scripting.executeScript({
            target,
            world: "MAIN",
            func: injectMain
        });
        res.send({
            success: true,
            ok: true,
            result: results?.[0]?.result ?? null
        });
    } catch (err) {
        console.error("[getPageLinkedinJobInfo]", err);
        res.send({
            success: false,
            ok: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"hulLn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softNull)("getPaymentPrice");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"6IlOX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** No forced update / what's-new from Jobright cloud. */ const handler = async (_req, res)=>{
    res.send({
        version: chrome.runtime.getManifest().version,
        hasWhatsNewContent: false,
        whatsNew: {
            features: [],
            updates: [],
            improvements: []
        },
        releasedAt: null,
        stub: true
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"1fz8D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _resumeBlob = require("~background/lib/resume-blob");
/**
 * Downloads the default (or requested) resume for the selected profile.
 * Body: { resumeId?: string }
 */ const handler = async (req, res)=>{
    const resumeId = typeof req.body?.resumeId === "string" ? req.body.resumeId : null;
    res.send(await (0, _resumeBlob.resolveResumeBlobResponse)({
        resumeId
    }));
};
exports.default = handler;

},{"~background/lib/resume-blob":"6dfNF","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4LqFS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/**
 * Resume collection list for ResumeSwitcher / ResumeReview UI.
 * Shape mirrors Jobright getResumeCollection for the helper.
 */ const handler = async (_req, res)=>{
    try {
        const info = await (0, _teamClient.fetchAutofillInfo)();
        if (!info) {
            res.send({
                ok: false,
                result: [],
                message: "no_profile"
            });
            return;
        }
        const result = (info.resumes ?? []).map((r)=>({
                id: r.id,
                resumeId: r.id,
                resumeName: r.displayName || r.fileName,
                fileName: r.fileName,
                mimeType: r.mimeType,
                isDefault: !!r.isDefault,
                isTailor: false
            }));
        res.send({
            ok: true,
            result,
            data: result,
            defaultResumeId: info.defaultResumeId ?? result[0]?.id ?? null
        });
    } catch (err) {
        res.send({
            ok: false,
            result: [],
            message: err instanceof Error ? err.message : "fetch_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"hsOno":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softNull)("getResumeDiagnose");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4rS0H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/**
 * Resume metadata for the selected hub profile (no Jobright diagnose id).
 */ const handler = async (_req, res)=>{
    try {
        const info = await (0, _teamClient.fetchAutofillInfo)();
        if (!info) {
            res.send({
                ok: false,
                message: "no_profile"
            });
            return;
        }
        const defaultId = info.defaultResumeId ?? info.resumes?.[0]?.id ?? null;
        const def = info.resumes?.find((r)=>r.id === defaultId) ?? info.resumes?.[0];
        res.send({
            ok: true,
            resumes: info.resumes ?? [],
            defaultResumeId: defaultId,
            resumeInfo: def ? {
                id: def.id,
                resumeName: def.displayName || def.fileName,
                fileName: def.fileName,
                mimeType: def.mimeType,
                isDefault: !!def.isDefault
            } : null
        });
    } catch (err) {
        res.send({
            ok: false,
            message: err instanceof Error ? err.message : "fetch_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"04qkk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softEmpty)("getSimilarJobs", "jobs");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"1NRjw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Site CSRF / session token \u2014 unused by team hub local fill path.
 */ const handler = async (_req, res)=>{
    res.send("");
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iQ4cn":[function(require,module,exports) {
/**
 * In-memory tab context (open tailor/cover-letter tabs, refresh sender).
 * Ported lightly from engine getTabContext \u2014 no Jobright cloud.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const contexts = new Map();
const handler = async (req, res)=>{
    const action = String(req.body?.action || "get");
    const key = String(req.body?.key || "default");
    const senderTabId = req.sender?.tab?.id ?? null;
    if (action === "set") {
        const related = typeof req.body?.tabId === "number" ? [
            req.body.tabId
        ] : Array.isArray(req.body?.relatedTabIds) ? req.body.relatedTabIds.filter((n)=>typeof n === "number") : [];
        contexts.set(key, {
            senderTabId: senderTabId ?? contexts.get(key)?.senderTabId ?? null,
            relatedTabIds: related
        });
        res.send({
            ok: true
        });
        return;
    }
    if (action === "clear") {
        contexts.delete(key);
        res.send({
            ok: true
        });
        return;
    }
    res.send({
        ok: true,
        ...contexts.get(key) || {
            senderTabId: null,
            relatedTabIds: []
        }
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
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softNull)("getTailorResume");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"baD7V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _resumeBlob = require("~background/lib/resume-blob");
/**
 * Team fork: no separate tailor pipeline \u2014 fall back to profile default resume.
 */ const handler = async (req, res)=>{
    const resumeId = typeof req.body?.resumeId === "string" ? req.body.resumeId : typeof req.body?.tailorId === "string" ? req.body.tailorId : null;
    res.send(await (0, _resumeBlob.resolveResumeBlobResponse)({
        resumeId
    }));
};
exports.default = handler;

},{"~background/lib/resume-blob":"6dfNF","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"jXPYF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/** Filename for tailor resume UI \u2014 team hub uses base resume name. */ const handler = async (_req, res)=>{
    try {
        const info = await (0, _teamClient.fetchAutofillInfo)();
        const def = info?.resumes?.find((r)=>r.id === info.defaultResumeId) ?? info?.resumes?.[0];
        res.send(def?.fileName || def?.displayName || null);
    } catch  {
        res.send(null);
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"98SkO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/**
 * Jobright helper expects:
 *   { data: { userStage, userProfile } }
 * where userStage.logined + userProfile.step === 5 unlocks FILLING.
 * Team hub: signed-in + selected profile \u21d2 treat as fully onboarded.
 */ const FILTE_RESUME_READY = 30;
const handler = async (_req, res)=>{
    try {
        const settings = await (0, _teamClient.getTeamSettings)();
        const conn = await (0, _teamClient.verifyTeamConnection)();
        if (!conn.ok || !settings.apiToken) {
            res.send({
                data: {
                    userStage: {
                        logined: false,
                        userId: null,
                        currentStage: 0,
                        email: null
                    },
                    userProfile: null
                }
            });
            return;
        }
        const hub = settings.selectedProfileId ? await (0, _teamClient.fetchAutofillInfo)(settings.selectedProfileId) : null;
        const userId = settings.selectedProfileId || conn.email || settings.userEmail || "team-user";
        const userStage = {
            logined: true,
            userId,
            currentStage: FILTE_RESUME_READY,
            email: conn.email || settings.userEmail || null,
            name: conn.name || settings.userName || null,
            siteUrl: settings.siteUrl
        };
        // step 5 = Jobright "ready to autofill" onboarding step
        const userProfile = {
            step: 5,
            email: conn.email || settings.userEmail || "",
            name: conn.name || settings.userName || "",
            profileId: settings.selectedProfileId,
            hasResume: Boolean(hub && (Array.isArray(hub.resumes) ? hub.resumes.length > 0 : true)),
            teamHub: true
        };
        res.send({
            data: {
                userStage,
                userProfile
            }
        });
    } catch (err) {
        res.send({
            data: {
                userStage: {
                    logined: false,
                    userId: null,
                    currentStage: 0
                },
                userProfile: null
            },
            message: err instanceof Error ? err.message : "profile_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"lhPqw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softNull)("getVersionUpdateState");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"k0hTD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Inject MAIN-world helper that stamps Ashby field metadata onto inputs
 * (data-jr-ashby-field-type, data-jr-ashby-location-types).
 */ const INJECT_FN = function injectAshbyMeta() {
    const w = window;
    if (w.__jrAshbyMetaInstalled) return {
        ok: true,
        already: true
    };
    w.__jrAshbyMetaInstalled = true;
    function walk(root) {
        const inputs = root.querySelectorAll("input, textarea, [role='combobox']");
        inputs.forEach((el)=>{
            const name = (el.getAttribute("name") || "").toLowerCase();
            const id = (el.getAttribute("id") || "").toLowerCase();
            const label = (el.getAttribute("aria-label") || "") + " " + (el.closest("label")?.textContent || "");
            const blob = `${name} ${id} ${label}`.toLowerCase();
            if (name.includes("_systemfield_location") || /geo|location|city/.test(blob)) {
                el.setAttribute("data-jr-ashby-field-type", "Location");
                el.setAttribute("data-jr-ashby-location-types", JSON.stringify([
                    "CITY",
                    "ADMINISTRATIVE_AREA_LEVEL_1",
                    "COUNTRY"
                ]));
            } else if (/school|university|college/.test(blob)) el.setAttribute("data-jr-ashby-field-type", "School");
        });
    }
    walk(document);
    const obs = new MutationObserver(()=>walk(document));
    obs.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
    window.dispatchEvent(new CustomEvent("__jr_ashby_field_metadata_ready"));
    return {
        ok: true
    };
};
const handler = async (req, res)=>{
    try {
        const tabId = typeof req.body?.tabId === "number" ? req.body.tabId : (await chrome.tabs.query({
            active: true,
            currentWindow: true
        }))[0]?.id;
        if (!tabId) {
            res.send({
                ok: false,
                message: "no_tab"
            });
            return;
        }
        const results = await chrome.scripting.executeScript({
            target: {
                tabId
            },
            world: "MAIN",
            func: INJECT_FN
        });
        res.send({
            ok: true,
            result: results?.[0]?.result ?? null
        });
    } catch (err) {
        res.send({
            ok: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
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
// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../injectReactSelectFiber.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function injectMain() {
    function e(e) {
        return Object.keys(e).find((e)=>e.startsWith("__reactFiber$") || e.startsWith("__reactInternalInstance$"));
    }
    function t(t) {
        let r = e(t);
        if (!r) return null;
        let a = t[r];
        for(let e = 0; e < 30 && a; e++){
            let e = a.stateNode;
            if (e && "object" == typeof e) {
                let t = e.select || e;
                if ("function" == typeof t.setValue && t.props) return t;
            }
            a = a.return;
        }
        return null;
    }
    window.__jr_react_select_injected || (window.__jr_react_select_injected = !0, document.addEventListener("__jr_react_select_request", (e)=>{
        let r = e.detail || {}, a = r.anchorSelector, o = r.candidates || [], s = r.requestId, n = {
            success: !1,
            requestId: s
        };
        try {
            let e = document.querySelector(a);
            if (!e) {
                n.error = "anchor not found", l(n);
                return;
            }
            let r = t(e);
            if (!r) {
                n.error = "no Select instance found", l(n);
                return;
            }
            let s = r.props?.options || [], i = function(e, t) {
                for (let r of t){
                    let t = r.trim().toLowerCase(), a = e.find((e)=>e.label && e.label.trim().toLowerCase() === t);
                    if (a) return a;
                    let o = e.find((e)=>e.label && -1 !== e.label.trim().toLowerCase().indexOf(t));
                    if (o) return o;
                }
                return null;
            }(s, o);
            if (!i) {
                n.error = "no matching option", l(n);
                return;
            }
            r.setValue(i, "select-option"), n.success = !0, n.matchedLabel = i.label;
        } catch (e) {
            n.error = String(e);
        }
        function l(e) {
            document.dispatchEvent(new CustomEvent("__jr_react_select_response", {
                detail: e
            }));
        }
        l(n);
    }), document.addEventListener("__jr_react_select_click_request", (r)=>{
        let a = r.detail || {}, o = a.optionSelector, s = a.anchorSelector, n = a.requestId, l = {
            success: !1,
            requestId: n
        };
        try {
            let r = document.querySelector(o);
            if (!r) {
                l.error = "option element not found", i(l);
                return;
            }
            let a = e(r);
            if (a) {
                let e = r[a];
                for(let r = 0; r < 15 && e; r++){
                    let r = e.memoizedProps || e.pendingProps;
                    if (r?.data?.value !== void 0 && r?.data?.label) {
                        let e = document.querySelector(s), a = e ? t(e) : null;
                        if (a) {
                            a.setValue(r.data, "select-option"), l.success = !0, l.matchedLabel = r.data.label, i(l);
                            return;
                        }
                        break;
                    }
                    e = e.return;
                }
            }
            if (a) {
                let e = r[a];
                for(let t = 0; t < 15 && e; t++){
                    let t = e.memoizedProps || e.pendingProps;
                    if ("function" == typeof t?.onClick) {
                        t.onClick({
                            preventDefault: ()=>{},
                            stopPropagation: ()=>{}
                        }), l.success = !0, i(l);
                        return;
                    }
                    if ("function" == typeof t?.innerProps?.onClick) {
                        t.innerProps.onClick({
                            preventDefault: ()=>{},
                            stopPropagation: ()=>{}
                        }), l.success = !0, i(l);
                        return;
                    }
                    e = e.return;
                }
            }
            l.error = "could not find option data or onClick handler";
        } catch (e) {
            l.error = String(e);
        }
        function i(e) {
            document.dispatchEvent(new CustomEvent("__jr_react_select_click_response", {
                detail: e
            }));
        }
        i(l);
    }));
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        if (!tabId) {
            res.send({
                success: false,
                ok: false,
                message: "no_tab"
            });
            return;
        }
        const frameId = req.sender?.frameId ?? 0;
        const target = req.body?.allFrames === true ? {
            tabId,
            allFrames: true
        } : {
            tabId,
            frameIds: [
                frameId
            ]
        };
        const results = await chrome.scripting.executeScript({
            target,
            world: "MAIN",
            func: injectMain
        });
        res.send({
            success: true,
            ok: true,
            result: results?.[0]?.result ?? null
        });
    } catch (err) {
        console.error("[injectReactSelectFiber]", err);
        res.send({
            success: false,
            ok: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"5TGWG":[function(require,module,exports) {
// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../injectRecruiteeFiber.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function injectMain() {
    function e(e) {
        let t = "string" == typeof e ? e : e?.value ?? e?.iso2 ?? e?.code ?? "";
        return String(t).trim().toUpperCase();
    }
    function t(e) {
        document.dispatchEvent(new CustomEvent("__jr_recruitee_phone_country_response", {
            detail: e
        }));
    }
    window.__jr_recruitee_fiber_injected || (window.__jr_recruitee_fiber_injected = !0, document.addEventListener("__jr_recruitee_phone_country_request", (r)=>{
        let a = r.detail || {}, o = a.requestId, s = {
            success: !1,
            requestId: o
        };
        try {
            let r = document.querySelector(a.selector);
            if (!r) {
                s.error = "phone country element not found", t(s);
                return;
            }
            let o = function(t) {
                let r = Object.keys(t).find((e)=>e.startsWith("__reactFiber$") || e.startsWith("__reactInternalInstance$"));
                if (!r) return null;
                let a = null, o = null, s = t[r];
                for(let t = 0; t < 30 && s; t += 1){
                    let t = [
                        s.memoizedProps,
                        s.pendingProps
                    ].filter((e, t, r)=>e && r.indexOf(e) === t);
                    for (let r of t)!a && r?.name === "candidate.phoneCountry" && e(r.value) && Array.isArray(r.options) && "function" == typeof r.onChange && (a = r), o || (o = function(t) {
                        let r = t?.metadata?.country_calling_codes;
                        if (!r || "object" != typeof r || Array.isArray(r)) return null;
                        let a = Object.entries(r).some(([t, r])=>t.replace(/\D/g, "") && Array.isArray(r) && r.some((t)=>e(t)));
                        return a ? r : null;
                    }(r));
                    s = s.return;
                }
                if (!a || !o) return null;
                let n = new Map;
                for (let [t, r] of Object.entries(o)){
                    if (!Array.isArray(r)) continue;
                    let a = t.replace(/\D/g, "");
                    if (a) for (let t of r){
                        let r = e(t);
                        r && !n.has(r) && n.set(r, a);
                    }
                }
                let l = a.options.flatMap((t)=>{
                    let r = e(t), a = String(t?.label ?? t?.countryName ?? t?.name ?? "").trim(), o = n.get(r) || "";
                    return r && a && o ? [
                        {
                            iso2: r,
                            countryName: a,
                            dialCode: o
                        }
                    ] : [];
                }), i = e(a.value);
                return {
                    controlledProps: a,
                    currentIso2: i,
                    options: l
                };
            }(r);
            if (!o) {
                s.error = "phone country Fiber metadata not found", t(s);
                return;
            }
            if (s.currentIso2 = o.currentIso2, s.options = o.options, "read" === a.action) s.success = !0;
            else if ("select" === a.action) {
                let t = e(a.targetIso2);
                if (s.targetIso2 = t, t) {
                    let r = o.options.filter((r)=>e(r.iso2) === t);
                    0 === r.length ? (s.changed = !1, s.error = "target ISO not found in live options") : r.length > 1 ? (s.changed = !1, s.error = "target ISO matched multiple live options") : t === o.currentIso2 ? (s.success = !0, s.changed = !1) : (o.controlledProps.onChange(t), s.success = !0, s.changed = !0);
                } else s.error = "target ISO is required";
            } else s.error = "unsupported phone country action";
        } catch (e) {
            s.error = String(e);
        }
        t(s);
    }));
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        if (!tabId) {
            res.send({
                success: false,
                ok: false,
                message: "no_tab"
            });
            return;
        }
        const frameId = req.sender?.frameId ?? 0;
        const target = req.body?.allFrames === true ? {
            tabId,
            allFrames: true
        } : {
            tabId,
            frameIds: [
                frameId
            ]
        };
        const results = await chrome.scripting.executeScript({
            target,
            world: "MAIN",
            func: injectMain
        });
        res.send({
            success: true,
            ok: true,
            result: results?.[0]?.result ?? null
        });
    } catch (err) {
        console.error("[injectRecruiteeFiber]", err);
        res.send({
            success: false,
            ok: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"h8XLK":[function(require,module,exports) {
// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../injectWorkableCheckbox.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function injectMain() {
    function e(e) {
        return new Promise((t)=>setTimeout(t, e));
    }
    function t(e) {
        return !0 === e.checked;
    }
    function r(e, t) {
        t && !e.includes(t) && e.push(t);
    }
    function a(e) {
        return String(e ?? "").toLowerCase().replace(/\*/g, "").replace(/\s+/g, " ").trim();
    }
    function o(e) {
        return e ? a(e.innerText || e.textContent || "") : "";
    }
    function s(e) {
        return new MouseEvent(e, {
            bubbles: !0,
            cancelable: !0,
            view: window
        });
    }
    function n(e) {
        document.dispatchEvent(new CustomEvent("__jr_workable_checkbox_response", {
            detail: e
        }));
    }
    window.__jr_workable_checkbox_injected || (window.__jr_workable_checkbox_injected = !0, document.addEventListener("__jr_workable_checkbox_request", async (l)=>{
        let i = l.detail || {}, u = i.requestId, c = i.selector, d = i.label, p = Array.isArray(i.options) ? i.options : [], f = {
            requestId: u,
            success: !1
        };
        try {
            let l = document.querySelector(c);
            if (!(l instanceof HTMLInputElement)) {
                f.error = "checkbox input not found", n(f);
                return;
            }
            if (!t(l)) {
                for (let n of function(e, t, s) {
                    let n = [], l = e.closest("[data-ui='option']");
                    for (let i of (r(n, e.closest("label")), r(n, function(e) {
                        if (!e.id) return null;
                        let t = e.id.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
                        try {
                            return document.querySelector(`label[for="${t}"]`);
                        } catch  {
                            return null;
                        }
                    }(e)), r(n, e.closest("[role='checkbox']")), r(n, l), function(e, t) {
                        let r = function(e, t) {
                            let r = [
                                e,
                                ...t
                            ].map(a).filter((e)=>e && "*" !== e && e.length >= 4), o = r.join(" ");
                            return [
                                "agree",
                                "accept",
                                "acknowledge",
                                "authorize",
                                "certify",
                                "consent",
                                "privacy",
                                "terms",
                                "notice",
                                "read understand"
                            ].some((e)=>o.includes(e)) && r.push("privacy notice", "consent to the processing", "processing of my data", "part of this application"), Array.from(new Set(r));
                        }(e, t);
                        return r.length ? Array.from(document.querySelectorAll("label, [role='checkbox'], [data-ui='option'], button, span, div")).filter((e)=>(function(e, t) {
                                let r = o(e);
                                return !!r && t.some((e)=>e.length < 8 ? r === e : r.includes(e) || e.includes(r) && r.length >= 16);
                            })(e, r)).sort((e, t)=>o(e).length - o(t).length) : [];
                    }(t, s)))r(n, i);
                    return r(n, e), n;
                }(l, d, p))if (n.scrollIntoView?.({
                    block: "center",
                    inline: "nearest"
                }), n.focus?.(), n.dispatchEvent(s("mousedown")), n.dispatchEvent(s("mouseup")), n.click(), await e(120), t(l) && (await e(150), t(l))) break;
            }
            t(l) && (l.dispatchEvent(new Event("input", {
                bubbles: !0,
                cancelable: !0
            })), l.dispatchEvent(new Event("change", {
                bubbles: !0,
                cancelable: !0
            })), l.dispatchEvent(new Event("blur", {
                bubbles: !0,
                cancelable: !0
            })), await e(120)), f.success = t(l), f.checked = l.checked, f.visualState = function(e) {
                let t = e.closest("[data-ui='option']"), r = [
                    e.closest("[role='checkbox']"),
                    e.closest("label[data-checked]"),
                    t?.querySelector("label[data-checked]"),
                    e.closest("label")
                ];
                for (let e of r){
                    let t = function(e) {
                        if (!e) return null;
                        for (let t of [
                            "aria-checked",
                            "data-checked"
                        ]){
                            let r = e.getAttribute(t);
                            if ("true" === r) return !0;
                            if ("false" === r) return !1;
                        }
                        return null;
                    }(e);
                    if (null !== t) return t;
                }
                return null;
            }(l);
        } catch (e) {
            f.error = String(e);
        }
        n(f);
    }));
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        if (!tabId) {
            res.send({
                success: false,
                ok: false,
                message: "no_tab"
            });
            return;
        }
        const frameId = req.sender?.frameId ?? 0;
        const target = req.body?.allFrames === true ? {
            tabId,
            allFrames: true
        } : {
            tabId,
            frameIds: [
                frameId
            ]
        };
        const results = await chrome.scripting.executeScript({
            target,
            world: "MAIN",
            func: injectMain
        });
        res.send({
            success: true,
            ok: true,
            result: results?.[0]?.result ?? null
        });
    } catch (err) {
        console.error("[injectWorkableCheckbox]", err);
        res.send({
            success: false,
            ok: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"9DukL":[function(require,module,exports) {
// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../injectWorkdayFiber.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function injectMain() {
    if (window.__jr_workday_fiber_injected) return;
    window.__jr_workday_fiber_injected = !0;
    let e = "__jr_workday_text_response", t = "__jr_workday_select_response", r = "__jr_workday_select_options_response", a = "__jr_workday_date_response", o = "__jr_workday_checkbox_response";
    function s(e) {
        return Object.keys(e).find((e)=>e.startsWith("__reactProps$"));
    }
    function n(e) {
        return Object.keys(e).find((e)=>e.startsWith("__reactFiber$") || e.startsWith("__reactInternalInstance$"));
    }
    function l(e, t) {
        document.dispatchEvent(new CustomEvent(e, {
            detail: t
        }));
    }
    function i(e) {
        return "string" == typeof e ? e : String(e?.label ?? e?.descriptor ?? e?.name ?? e?.text ?? e?.value ?? "");
    }
    function u(e, t, r) {
        let a = "function" == typeof Proxy ? new Proxy(e, {
            get (e, r) {
                if ("checked" === r) return t;
                let a = Reflect.get(e, r, e);
                return "function" == typeof a ? a.bind(e) : a;
            }
        }) : e;
        return {
            target: a,
            currentTarget: a,
            type: r,
            preventDefault () {},
            stopPropagation () {},
            nativeEvent: {
                target: a,
                currentTarget: a,
                type: r
            }
        };
    }
    function c(e, t, r) {
        let a = !1;
        if ("function" == typeof e?.onClick) try {
            e.onClick(u(t, r, "click")), a = !0;
        } catch (e) {}
        if ("function" == typeof e?.onChange) try {
            e.onChange(u(t, r, "change")), a = !0;
        } catch (e) {}
        return a;
    }
    function d(e, t) {
        return {
            target: e,
            currentTarget: e,
            type: t,
            preventDefault () {},
            stopPropagation () {},
            nativeEvent: {
                target: e,
                currentTarget: e,
                type: t
            }
        };
    }
    document.addEventListener("__jr_workday_text_request", (t)=>{
        let r = t.detail || {}, a = r.selector, o = r.value, n = r.requestId, i = {
            success: !1,
            requestId: n
        };
        try {
            let t = document.querySelector(a);
            if (!t) {
                i.error = "element not found", l(e, i);
                return;
            }
            let r = s(t);
            if (!r) {
                i.error = "no __reactProps found", l(e, i);
                return;
            }
            let n = t[r];
            t.value = o, "function" == typeof n.onInput && n.onInput({
                target: t,
                currentTarget: t,
                preventDefault () {},
                stopPropagation () {}
            }), "function" == typeof n.onChange && n.onChange({
                target: t,
                currentTarget: t,
                preventDefault () {},
                stopPropagation () {}
            }), "function" == typeof n.onBlur && n.onBlur({
                target: t,
                currentTarget: t,
                relatedTarget: null,
                preventDefault () {},
                stopPropagation () {}
            }), i.success = !0;
        } catch (e) {
            i.error = String(e);
        }
        l(e, i);
    }), document.addEventListener("__jr_workday_select_request", (e)=>{
        let r = e.detail || {}, a = r.selector, o = r.candidates || [], s = r.requestId, i = {
            success: !1,
            requestId: s
        };
        try {
            let e = document.querySelector(a);
            if (!e) {
                i.error = "button not found", l(t, i);
                return;
            }
            let r = n(e);
            if (!r) {
                i.error = "no fiber key", l(t, i);
                return;
            }
            let s = e[r], u = null, c = null, d = [], p = [];
            for(let e = 0; e < 15 && s; e++){
                let t = s.stateNode, r = s.type?.displayName || s.type?.name || s.type || "(no type)", a = t && "object" == typeof t ? Object.getOwnPropertyNames(Object.getPrototypeOf(t) || {}).filter((e)=>"function" == typeof t[e]).slice(0, 10) : [];
                if (p.push(`depth ${e}: ${r} methods=[${a.join(",")}]`), d.push(s), t && "object" == typeof t && "function" == typeof t.updateStateFromValue) {
                    u = t, c = s.memoizedProps || s.pendingProps;
                    break;
                }
                s = s.return;
            }
            if (!u) {
                i.error = "no Select instance with updateStateFromValue found", l(t, i);
                return;
            }
            let f = c?.options || [], m = null;
            for (let e of o){
                let t = e.trim().toLowerCase();
                if ((m = f.find((e)=>e.label && e.label.trim().toLowerCase() === t) || null) || (m = f.find((e)=>e.label && -1 !== e.label.trim().toLowerCase().indexOf(t)) || null)) break;
            }
            if (!m) {
                i.error = "no matching option", i.availableOptions = f.slice(0, 10).map((e)=>e.label), l(t, i);
                return;
            }
            u.updateStateFromValue(m.value);
            try {
                u.fireChangeEvent(m.value);
            } catch (e) {}
            for (let e of d){
                let t = e.memoizedProps || e.pendingProps;
                if (t) {
                    if ("function" == typeof t.onOptionSelection) try {
                        t.onOptionSelection(m);
                    } catch (e) {}
                    if ("function" == typeof t.onChange) try {
                        t.onChange(m.value);
                    } catch (e) {}
                }
            }
            i.success = !0, i.matchedLabel = m.label;
        } catch (e) {
            i.error = String(e);
        }
        l(t, i);
    }), document.addEventListener("__jr_workday_select_options_request", (e)=>{
        let t = e.detail || {}, a = t.selector, o = t.requestId, s = {
            success: !1,
            requestId: o,
            options: []
        };
        try {
            let e = document.querySelector(a);
            if (!e) {
                s.error = "button not found", l(r, s);
                return;
            }
            let t = n(e);
            if (!t) {
                s.error = "no fiber key", l(r, s);
                return;
            }
            let o = e[t], u = null;
            for(let e = 0; e < 15 && o; e++){
                let e = o.stateNode;
                if (e && "object" == typeof e && "function" == typeof e.updateStateFromValue) {
                    u = o.memoizedProps || o.pendingProps;
                    break;
                }
                o = o.return;
            }
            if (!u) {
                s.error = "no Select instance with updateStateFromValue found", l(r, s);
                return;
            }
            let c = Array.isArray(u?.options) ? u.options.map(i).map((e)=>e.replace(/\s+/g, " ").trim()).filter(Boolean) : [];
            s.success = c.length > 0, s.options = c;
        } catch (e) {
            s.error = String(e);
        }
        l(r, s);
    }), document.addEventListener("__jr_workday_date_request", (e)=>{
        (async ()=>{
            let t = e.detail || {}, r = t.selector, o = t.month, i = t.day, u = t.year, c = t.requestId, p = {
                success: !1,
                requestId: c
            };
            try {
                let e = document.querySelector(r);
                if (!e) {
                    p.error = "date container not found", l(a, p);
                    return;
                }
                let t = [], c = e.querySelector('[data-automation-id="dateSectionMonth-input"]');
                c && o && t.push({
                    input: c,
                    val: o
                });
                let m = e.querySelector('[data-automation-id="dateSectionDay-input"]');
                m && i && t.push({
                    input: m,
                    val: i
                });
                let h = e.querySelector('[data-automation-id="dateSectionYear-input"]');
                h && u && t.push({
                    input: h,
                    val: u
                });
                let g = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set, b = !!c, y = !!m, j = b && y && o && i ? `${o}/${i}/${u}` : b && o ? `${o}/${u}` : u, x = function(e, t, r, a, o) {
                    let s = e.padStart(4, "0");
                    return a && o && t && r ? `${s}-${t.padStart(2, "0")}-${r.padStart(2, "0")}` : a && t ? `${s}-${t.padStart(2, "0")}` : s;
                }(u, o, i, b, y), D = !1, v = !1, E = !1, _ = function(e) {
                    let t = e.id || "", r = t.split("--");
                    return r.length > 1 ? r[r.length - 1] : null;
                }(e), A = null, w = new Set, T = new Set;
                for (let { input: e, val: r } of t){
                    let t = n(e);
                    if (t) {
                        let a = e[t];
                        for(let e = 0; e < 10 && a; e++){
                            let e = a.stateNode;
                            if (e && "object" == typeof e && e.state && "object" == typeof e.state && "currentValue" in e.state && "dirty" in e.state) {
                                "function" == typeof e.setState ? e.setState({
                                    currentValue: r,
                                    dirty: !0
                                }) : (e.state.currentValue = r, e.state.dirty = !0, "function" == typeof e.forceUpdate && e.forceUpdate()), D = !0;
                                break;
                            }
                            a = a.return;
                        }
                    }
                    let a = e._valueTracker;
                    a && a.setValue(""), g ? g.call(e, r) : e.value = r, e.dispatchEvent(new Event("input", {
                        bubbles: !0
                    })), e.dispatchEvent(new Event("change", {
                        bubbles: !0
                    })), D = function(e) {
                        let t = s(e);
                        if (!t) return !1;
                        let r = e[t], a = !1;
                        if ("function" == typeof r?.onInput) try {
                            r.onInput(d(e, "input")), a = !0;
                        } catch (e) {}
                        if ("function" == typeof r?.onChange) try {
                            r.onChange(d(e, "change")), a = !0;
                        } catch (e) {}
                        if ("function" == typeof r?.onBlur) try {
                            r.onBlur(d(e, "blur")), a = !0;
                        } catch (e) {}
                        return a;
                    }(e) || D;
                }
                for (let { input: e } of t)e.dispatchEvent(new FocusEvent("blur", {
                    bubbles: !0,
                    relatedTarget: null
                }));
                let I = c || m || h, S = [];
                for (let t of [
                    I,
                    c,
                    m,
                    h,
                    e
                ])t && !S.includes(t) && S.push(t);
                let R = e.parentElement;
                for(let e = 0; e < 8 && R; e++)S.push(R), R = R.parentElement;
                for (let e of S){
                    let t = n(e);
                    if (t) {
                        let r = e[t];
                        for(let e = 0; e < 45 && r; e++){
                            var f;
                            let e = r.stateNode, t = r.memoizedProps || r.pendingProps;
                            if (_ || "string" != typeof t?.metadataId || (_ = t.metadataId), !A && (f = t?.value) && "object" == typeof f && "function" == typeof f.setValue && f.value && "object" == typeof f.value && (A = t.value), e && "object" == typeof e && !T.has(e)) {
                                if (T.add(e), "function" == typeof e.setValue) try {
                                    e.setValue(j), v = !0;
                                } catch (e) {}
                                if ("function" == typeof e.setDateValue) try {
                                    e.setDateValue(j), v = !0;
                                } catch (e) {}
                                if ("function" == typeof e.updateStateFromValue) try {
                                    e.updateStateFromValue(j), v = !0, "function" == typeof e.fireChangeEvent && (e.fireChangeEvent(j), v = !0);
                                } catch (e) {}
                            }
                            if (t && !w.has(t) && "function" == typeof t.onDatePicked) {
                                w.add(t);
                                let e = {
                                    yyyy: u.padStart(4, "0")
                                };
                                b && o && (e.mm = o.padStart(2, "0")), y && i && (e.dd = i.padStart(2, "0"));
                                try {
                                    t.onDatePicked(e), v = !0;
                                } catch (e) {}
                            }
                            r = r.return;
                        }
                    }
                }
                if (_ && A) try {
                    await Promise.resolve(A.setValue({
                        id: _,
                        value: x
                    })), "function" == typeof A.clearFieldErrors && await Promise.resolve(A.clearFieldErrors(_)), v = !0, E = !0;
                } catch (e) {
                    p.contextCommitError = String(e);
                }
                p.success = v, p.inputHandled = D, p.parentCommitHandled = v, p.contextCommitHandled = E, p.dateFieldMetadataId = _;
            } catch (e) {
                p.error = String(e);
            }
            l(a, p);
        })();
    }), document.addEventListener("__jr_workday_checkbox_request", (e)=>{
        let t = e.detail || {}, r = t.selector, a = t.checked ?? !0, i = t.requestId, u = {
            success: !1,
            requestId: i
        };
        try {
            let e = document.querySelector(r);
            if (!e) {
                u.error = "element not found", l(o, u);
                return;
            }
            let t = s(e), i = new Set, d = !1;
            if (t) {
                let r = e[t];
                r && (i.add(r), d = c(r, e, a) || d);
            }
            let p = n(e);
            if (p) {
                let t = e[p];
                for(let r = 0; r < 15 && t; r++){
                    let r = t.memoizedProps || t.pendingProps;
                    r && !i.has(r) && (i.add(r), d = c(r, e, a) || d), t = t.return;
                }
            } else t || (u.error = "no reactProps or fiber key found");
            u.success = d;
        } catch (e) {
            u.error = String(e);
        }
        l(o, u);
    });
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        if (!tabId) {
            res.send({
                success: false,
                ok: false,
                message: "no_tab"
            });
            return;
        }
        const frameId = req.sender?.frameId ?? 0;
        const target = req.body?.allFrames === true ? {
            tabId,
            allFrames: true
        } : {
            tabId,
            frameIds: [
                frameId
            ]
        };
        const results = await chrome.scripting.executeScript({
            target,
            world: "MAIN",
            func: injectMain
        });
        res.send({
            success: true,
            ok: true,
            result: results?.[0]?.result ?? null
        });
    } catch (err) {
        console.error("[injectWorkdayFiber]", err);
        res.send({
            success: false,
            ok: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iD4c3":[function(require,module,exports) {
// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../installMainWorldAlertSuppressor.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function injectMain(e) {
    let { markerAttr: t, patternFlags: r, patternSource: a, stateKey: o } = e, s = document.documentElement, n = window[o];
    if (n && window.alert === n.patchedAlert) return s?.setAttribute(t, "true"), !0;
    let l = n?.originalAlert || window.alert, i = new RegExp(a, r), u = function(e) {
        if (!i.test(String(e ?? ""))) return l.call(window, e);
    };
    return window[o] = {
        originalAlert: l,
        patchedAlert: u
    }, window.alert = u, s?.setAttribute(t, "true"), s?.getAttribute(t) === "true";
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        if (!tabId) {
            res.send({
                success: false,
                ok: false,
                message: "no_tab"
            });
            return;
        }
        const frameId = req.sender?.frameId ?? 0;
        const target = req.body?.allFrames === true ? {
            tabId,
            allFrames: true
        } : {
            tabId,
            frameIds: [
                frameId
            ]
        };
        const results = await chrome.scripting.executeScript({
            target,
            world: "MAIN",
            func: injectMain,
            args: [
                req.body
            ]
        });
        res.send({
            success: true,
            ok: true,
            result: results?.[0]?.result ?? null
        });
    } catch (err) {
        console.error("[installMainWorldAlertSuppressor]", err);
        res.send({
            success: false,
            ok: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"7q19v":[function(require,module,exports) {
// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../interceptFileInputClick.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function injectMain() {
    let e = "__jr_resume_source", t = HTMLInputElement.prototype.click;
    HTMLInputElement.prototype.click = function() {
        if ("file" === this.type) {
            HTMLInputElement.prototype.click = t;
            let r = document.getElementById(e);
            if (r?.files?.length > 0) {
                try {
                    this.files = r.files, this.dispatchEvent(new Event("change", {
                        bubbles: !0,
                        cancelable: !1
                    }));
                } catch (e) {
                    console.warn("[jr/interceptFileInputClick] set files failed:", e);
                }
                r.remove();
                return;
            }
        }
        return t.call(this);
    };
    let r = window.showOpenFilePicker;
    "function" == typeof r && (window.showOpenFilePicker = async function(...t) {
        window.showOpenFilePicker = r;
        let a = document.getElementById(e);
        if (a?.files?.length > 0) {
            let e = a.files[0];
            return a.remove(), [
                {
                    getFile: async ()=>e,
                    kind: "file",
                    name: e.name
                }
            ];
        }
        return r.apply(window, t);
    }), setTimeout(()=>{
        HTMLInputElement.prototype.click = t, "function" == typeof r && (window.showOpenFilePicker = r);
        let a = document.getElementById(e);
        a && a.remove();
    }, 1e4);
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        if (!tabId) {
            res.send({
                success: false,
                ok: false,
                message: "no_tab"
            });
            return;
        }
        const frameId = req.sender?.frameId ?? 0;
        const target = req.body?.allFrames === true ? {
            tabId,
            allFrames: true
        } : {
            tabId,
            frameIds: [
                frameId
            ]
        };
        const results = await chrome.scripting.executeScript({
            target,
            world: "MAIN",
            func: injectMain
        });
        res.send({
            success: true,
            ok: true,
            result: results?.[0]?.result ?? null
        });
    } catch (err) {
        console.error("[interceptFileInputClick]", err);
        res.send({
            success: false,
            ok: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"jjxIg":[function(require,module,exports) {
// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../kulaCompanyDom.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function injectMain(e) {
    let t;
    let r = ()=>({
            status: "failed",
            candidates: []
        });
    if ("careers.kula.ai" !== location.hostname || !e || !/^profile\.experience\[\d+\]\.company$/.test(e.inputName) || "string" != typeof e.query || e.query.length > 256 || ![
        "snapshot",
        "click"
    ].includes(e.action)) return r();
    let a = Array.from(document.getElementsByName(e.inputName)).filter((e)=>"INPUT" === e.tagName);
    if (1 !== a.length) return r();
    let o = a[0], s = o.closest('[data-test-id="company"]');
    if (!s || !o.isConnected) return r();
    let n = s.querySelector('section.chakra-popover__content[role="dialog"]'), l = (e)=>{
        if (!e?.isConnected) return !1;
        let t = getComputedStyle(e);
        return "none" !== t.display && "hidden" !== t.visibility && Number(t.opacity || 1) > .1;
    }, i = (e)=>{
        let t = Object.keys(e).find((e)=>e.startsWith("__reactFiber$") || e.startsWith("__reactInternalInstance$")), r = t ? e[t] : null;
        for (let e of [
            r,
            r?.alternate
        ]){
            if (!e) continue;
            let t = e, r = new Set;
            for(let e = 0; t.return && e < 1e3 && !r.has(t); e++)r.add(t), t = t.return;
            if (!t.return && (!t.stateNode?.current || t.stateNode.current === t)) return e;
        }
        return null;
    }, u = (e)=>e && ("string" == typeof e.id || "number" == typeof e.id) && String(e.id).trim() && "new_custom_value" !== String(e.id) && "string" == typeof e.name && e.name.trim() ? {
            id: String(e.id),
            name: e.name,
            ..."string" == typeof e.domain && e.domain.trim() ? {
                domain: e.domain.trim()
            } : {}
        } : null;
    for(let r = i(o), a = 0; r && a < 30; r = r.return, a++)if (r.memoizedProps?.field?.name === e.inputName) {
        t = u(r.memoizedProps.field.value)?.id;
        break;
    }
    let c = l(n), d = {
        committedId: t,
        menuOpen: c,
        inputValue: o.value,
        invalid: "true" === o.getAttribute("aria-invalid") || s.hasAttribute("data-invalid") || !!s.querySelector(".chakra-form__error-message")
    };
    if (!c) return {
        status: "ready",
        candidates: [],
        ...d
    };
    if (o.value !== e.query) return r();
    if (n.querySelector('.chakra-spinner, [role="progressbar"]')) return {
        status: "pending",
        candidates: [],
        ...d
    };
    let p = [];
    for (let t of Array.from(n.children)){
        if (!(t instanceof HTMLElement) || !l(t) || "DIV" !== t.tagName || !t.querySelector("p") || "true" === t.getAttribute("aria-disabled") || /^Add and select\b/i.test(t.textContent?.trim() || "")) continue;
        let a = null;
        for(let e = i(t), r = 0; e && r < 10 && e.stateNode !== n; e = e.return, r++)if (e.memoizedProps?.option) {
            a = u(e.memoizedProps.option);
            break;
        }
        if (!a || a.name !== t.textContent?.trim()) return r();
        p.push({
            element: t,
            option: {
                candidate_key: `${e.inputName}:${a.id}`,
                value: a.id,
                text: a.name,
                ...a.domain ? {
                    domain: a.domain
                } : {}
            }
        });
    }
    if (new Set(p.map((e)=>e.option.candidate_key)).size !== p.length) return r();
    if ("click" === e.action) {
        let t = e.selected, a = p.filter(({ option: e })=>t && e.candidate_key === t.candidate_key && e.value === t.value && e.text === t.text && e.domain === t.domain);
        if (1 !== a.length) return r();
        a[0].element.click();
    }
    return {
        status: "ready",
        candidates: p.map((e)=>e.option),
        ...d
    };
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        if (!tabId) {
            res.send({
                success: false,
                ok: false,
                opened: false,
                message: "no_tab"
            });
            return;
        }
        const frameId = req.sender?.frameId ?? 0;
        const results = await chrome.scripting.executeScript({
            target: {
                tabId,
                frameIds: [
                    frameId
                ]
            },
            world: "MAIN",
            func: injectMain,
            args: [
                req.body
            ]
        });
        const result = results?.[0]?.result ?? null;
        res.send({
            success: true,
            ok: true,
            opened: result?.opened === true,
            result,
            ...result && typeof result === "object" ? result : {}
        });
    } catch (err) {
        console.error("[kulaCompanyDom]", err);
        res.send({
            success: false,
            ok: false,
            opened: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
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

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"fKYma":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/**
 * Append a row to the configured Google Sheet via the team hub.
 * Body mirrors POST /api/v1/applications/log
 */ const handler = async (req, res)=>{
    try {
        const title = String(req.body?.title || "").trim();
        const link = String(req.body?.link || "").trim();
        if (!title || !link) {
            res.send({
                ok: false,
                message: "title_and_link_required"
            });
            return;
        }
        const result = await (0, _teamClient.logApplication)({
            profileId: typeof req.body?.profileId === "string" ? req.body.profileId : null,
            country: typeof req.body?.country === "string" ? req.body.country : "",
            resume: typeof req.body?.resume === "string" ? req.body.resume : "",
            title,
            link,
            company: typeof req.body?.company === "string" ? req.body.company : "",
            cost: typeof req.body?.cost === "string" ? req.body.cost : "",
            status: typeof req.body?.status === "string" ? req.body.status : "applied",
            other: typeof req.body?.other === "string" ? req.body.other : "",
            tabName: typeof req.body?.tabName === "string" ? req.body.tabName : ""
        });
        if (!result.ok) {
            res.send({
                ok: false,
                message: result.message || result.error || "log_failed",
                tabName: result.tabName
            });
            return;
        }
        res.send({
            ok: true,
            tabName: result.tabName
        });
    } catch (err) {
        res.send({
            ok: false,
            message: err instanceof Error ? err.message : "log_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"hVZ3t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("markRefreshRequested");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"fe7Z6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("markWhatsNewRead");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"gCFbI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("openAgentApplyTab");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"aAauv":[function(require,module,exports) {
// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../openBrassringFullPageAutocomplete.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function injectMain(e) {
    let t = document.getElementById(e);
    if (!t) return {
        opened: !1
    };
    let r = t.closest(".fieldcontain"), a = r?.querySelector(".ui-icon-triangle-1-s, [ng-click*='blanketSearch']");
    if (!a) return {
        opened: !1
    };
    let o = window, s = o.pageSize, n = ()=>{
        void 0 === s ? delete o.pageSize : o.pageSize = s;
    }, l = ()=>{
        o.pageSize = 1e3;
        let e = o.jQuery || o.$, r = e?.(t).data?.("uiAutocomplete");
        r ? r.pageIndex = 0 : t.pageIndex = 0;
    }, i = !1;
    try {
        return t.focus(), a.addEventListener("click", l, {
            capture: !0,
            once: !0
        }), l(), a.click(), i = !0, {
            opened: !0
        };
    } catch  {
        return {
            opened: !1
        };
    } finally{
        i ? o.setTimeout(n, 3e3) : n();
    }
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        if (!tabId) {
            res.send({
                success: false,
                ok: false,
                opened: false,
                message: "no_tab"
            });
            return;
        }
        const frameId = req.sender?.frameId ?? 0;
        const results = await chrome.scripting.executeScript({
            target: {
                tabId,
                frameIds: [
                    frameId
                ]
            },
            world: "MAIN",
            func: injectMain,
            args: [
                req.body?.inputId
            ]
        });
        const result = results?.[0]?.result ?? null;
        res.send({
            success: true,
            ok: true,
            opened: result?.opened === true,
            result,
            ...result && typeof result === "object" ? result : {}
        });
    } catch (err) {
        console.error("[openBrassringFullPageAutocomplete]", err);
        res.send({
            success: false,
            ok: false,
            opened: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"6rsOp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("openDayforcePolicyTab");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"aWRCQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("parsePageMarkdown");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"eQJct":[function(require,module,exports) {
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
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("postApplyJob");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"lr7El":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("postAutofillAnswerPairAttributed");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"jJgDk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("postAutofillFeedback");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"asjhc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("postEventSubmit");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"AvTM0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("postExternalJobImport");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"3uA6Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("postPluginFeedback");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"e3AYM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("postSimilarJobPopupExposure");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"hWkEU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("prepareMetaCareersLocationCapture");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"21sUf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _oracleLovCapture = require("~background/lib/oracle-lov-capture");
const INSTALL_INTERCEPTOR = function installOracleLovInterceptor(captureId) {
    const w = window;
    w.__jrOracleLov = {
        captureId,
        items: [],
        lastUrl: ""
    };
    const orig = w.fetch.bind(window);
    w.fetch = async (input, init)=>{
        const res = await orig(input, init);
        try {
            const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
            if (/lov|lookup|contentitem|flexfield|education|school/i.test(url)) {
                const clone = res.clone();
                const json = await clone.json().catch(()=>null);
                const items = json && (json.items || json.ContentItems || json.data || (Array.isArray(json) ? json : null)) || [];
                if (Array.isArray(items) && items.length) {
                    w.__jrOracleLov.items = items;
                    w.__jrOracleLov.lastUrl = url;
                    window.dispatchEvent(new CustomEvent("__jr_oracle_lov_captured", {
                        detail: {
                            captureId,
                            count: items.length,
                            url
                        }
                    }));
                }
            }
        } catch  {
        /* ignore */ }
        return res;
    };
    return {
        ok: true,
        captureId
    };
};
const handler = async (req, res)=>{
    try {
        const field = String(req.body?.field || req.body?.label || "education");
        const search = String(req.body?.search || req.body?.query || "");
        const captureId = typeof req.body?.captureId === "string" ? req.body.captureId : `oracle-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        (0, _oracleLovCapture.setOracleCapture)(captureId, {
            field,
            search,
            items: []
        });
        const tabId = typeof req.body?.tabId === "number" ? req.body.tabId : (await chrome.tabs.query({
            active: true,
            currentWindow: true
        }))[0]?.id;
        if (tabId) await chrome.scripting.executeScript({
            target: {
                tabId
            },
            world: "MAIN",
            func: INSTALL_INTERCEPTOR,
            args: [
                captureId
            ]
        });
        res.send({
            ok: true,
            captureId,
            field,
            search
        });
    } catch (err) {
        res.send({
            ok: false,
            message: err instanceof Error ? err.message : "prepare_failed"
        });
    }
};
exports.default = handler;

},{"~background/lib/oracle-lov-capture":"f3yDF","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"jjUaW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("preparePhenomSchoolCapture");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"eDw8J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _resumeBlob = require("~background/lib/resume-blob");
const handler = async (req, res)=>{
    const resumeId = typeof req.body?.resumeId === "string" ? req.body.resumeId : null;
    res.send(await (0, _resumeBlob.resolveResumeBlobResponse)({
        resumeId
    }));
};
exports.default = handler;

},{"~background/lib/resume-blob":"6dfNF","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"hWzia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _resumeBlob = require("~background/lib/resume-blob");
const handler = async (req, res)=>{
    const resumeId = typeof req.body?.resumeId === "string" ? req.body.resumeId : null;
    res.send(await (0, _resumeBlob.resolveResumeBlobResponse)({
        resumeId
    }));
};
exports.default = handler;

},{"~background/lib/resume-blob":"6dfNF","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"ce4OD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/**
 * Jobright shape: { data: { answer, uniqueId } | { HTTP_STATUS } }
 */ const handler = async (req, res)=>{
    try {
        const question = typeof req.body?.question === "string" ? req.body.question : typeof req.body?.label === "string" ? req.body.label : typeof req.body?.fieldLabel === "string" ? req.body.fieldLabel : "";
        if (!question) {
            res.send({
                data: {
                    HTTP_STATUS: 400
                }
            });
            return;
        }
        const result = await (0, _teamClient.regenerateAnswer)({
            question,
            promptList: Array.isArray(req.body?.promptList) ? req.body.promptList.filter((p)=>typeof p === "string") : [],
            fieldInput: typeof req.body?.fieldInput === "string" ? req.body.fieldInput : null,
            uniqueId: typeof req.body?.uniqueId === "string" ? req.body.uniqueId : null,
            jobId: typeof req.body?.jobId === "string" ? req.body.jobId : null,
            profileId: typeof req.body?.profileId === "string" ? req.body.profileId : null,
            jobContext: req.body?.jobContext && typeof req.body.jobContext === "object" ? req.body.jobContext : undefined
        });
        if (!result.ok || !result.answer) {
            const status = result.status === 401 || result.status === 403 ? 403 : result.status === 503 ? 503 : 500;
            res.send({
                data: {
                    HTTP_STATUS: status
                }
            });
            return;
        }
        res.send({
            data: {
                answer: result.answer,
                uniqueId: result.uniqueId ?? null
            }
        });
    } catch (err) {
        console.error("[regenerateAnswer]", err);
        res.send({
            data: {
                HTTP_STATUS: 500
            }
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"ezLiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Reload the extension (after update apply). */ const handler = async (_req, res)=>{
    try {
        res.send({
            ok: true
        });
        // Defer so the response can flush
        setTimeout(()=>{
            try {
                chrome.runtime.reload();
            } catch  {
            /* ignore */ }
        }, 50);
    } catch (err) {
        res.send({
            ok: false,
            message: err instanceof Error ? err.message : "reload_failed"
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"3Tvcc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("reportAutofillFirstUseAttribution");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"lBm2x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("requestExtensionUpdateCheck");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"6iwT2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/** Returns resolved address object or null (Jobright shape). */ const handler = async (req, res)=>{
    try {
        const placeId = typeof req.body?.placeId === "string" ? req.body.placeId.trim() : "";
        if (!placeId) {
            res.send(null);
            return;
        }
        const result = await (0, _teamClient.resolveAddressSuggestion)({
            placeId,
            sessionToken: typeof req.body?.sessionToken === "string" ? req.body.sessionToken : undefined
        });
        res.send(result);
    } catch  {
        res.send(null);
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"baSvW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
var _resolveOperation = require("~lib/resolve-operation");
var _oracleEducationPlan = require("~lib/oracle-education-plan");
/**
 * Multi-turn client-search step (Oracle edu LOV, etc.).
 */ const handler = async (req, res)=>{
    try {
        const body = req.body ?? {};
        const hub = await (0, _teamClient.fetchAutofillInfo)(typeof body.profileId === "string" ? body.profileId : null);
        if (!hub) {
            res.send({
                ok: false,
                results: [],
                options: [],
                message: "no_profile"
            });
            return;
        }
        const round = typeof body.round === "number" ? body.round : 0;
        const candidates = Array.isArray(body.candidates) ? body.candidates : [];
        const searchText = typeof body.query === "string" ? body.query : typeof body.searchText === "string" ? body.searchText : "";
        // Oracle-style planner when candidates / round provided
        if (body.mode === "oracle-education" || candidates.length || body.round != null) {
            const desired = typeof body.desired === "string" ? body.desired : searchText;
            const plan = (0, _oracleEducationPlan.planOracleEducationClientSearchStep)({
                round,
                searchText,
                candidates: candidates.map((c)=>({
                        candidate_key: String(c.candidate_key || c.value || c.text || ""),
                        value: String(c.value || c.candidate_key || c.text || ""),
                        text: String(c.text || c.value || "")
                    })),
                desired
            });
            res.send({
                ok: true,
                action: plan.action,
                results: plan.selected_values || [],
                options: plan.selected_values || [],
                searchText: plan.searchText,
                result: plan
            });
            return;
        }
        const operation = {
            label: body.label || body.field || body.step || "",
            query: searchText,
            options: body.options || body.results || [],
            search_request_schema: body.search_request_schema
        };
        const result = await (0, _resolveOperation.resolveOperationLocally)(hub, operation, typeof body.source === "string" ? body.source : "generic");
        res.send({
            ok: true,
            results: result.selected_values,
            options: result.selected_values,
            result
        });
    } catch (err) {
        res.send({
            ok: false,
            results: [],
            options: [],
            message: err instanceof Error ? err.message : "resolve_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","~lib/resolve-operation":"34r4X","~lib/oracle-education-plan":"8CzHE","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"34r4X":[function(require,module,exports) {
/**
 * Local + network LOV resolve (Jobright autofill-operation stand-in).
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchSearchSchemaOptions", ()=>fetchSearchSchemaOptions);
/**
 * Resolve an ATS LOV / typeahead / select operation against hub + optional network schema.
 */ parcelHelpers.export(exports, "resolveOperationLocally", ()=>resolveOperationLocally);
var _hubToJobright = require("~lib/hub-to-jobright");
function norm(s) {
    return (s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
function scoreOption(candidate, option) {
    const c = norm(candidate);
    const o = norm(option);
    if (!c || !o) return 0;
    if (/^please select|^select |^choose |^select one|^--$/.test(o)) return 0;
    if (c === o) return 100;
    if (o.includes(c) || c.includes(o)) return 80;
    const ct = new Set(c.split(" ").filter(Boolean));
    const ot = o.split(" ").filter(Boolean);
    let hit = 0;
    for (const t of ot)if (ct.has(t)) hit += 1;
    if (!ot.length) return 0;
    return Math.round(hit / ot.length * 60);
}
function adaptToOptions(value, options) {
    if (!value.trim() || !options.length) return null;
    let best = null;
    let bestScore = 0;
    for (const opt of options){
        const s = scoreOption(value, opt);
        if (s > bestScore) {
            bestScore = s;
            best = opt;
        }
    }
    return bestScore >= 40 ? best : null;
}
function asStringList(raw) {
    if (!Array.isArray(raw)) return [];
    return raw.map((o)=>{
        if (typeof o === "string") return o;
        if (o && typeof o === "object") {
            const rec = o;
            for (const k of [
                "label",
                "text",
                "name",
                "value",
                "displayName",
                "descriptor"
            ]){
                if (typeof rec[k] === "string") return rec[k];
            }
        }
        return "";
    }).map((s)=>s.trim()).filter(Boolean);
}
function dig(obj, path) {
    if (!path) return obj;
    let cur = obj;
    for (const part of path.split(".").filter(Boolean)){
        if (cur == null || typeof cur !== "object") return undefined;
        cur = cur[part];
    }
    return cur;
}
function extractLabelsFromPayload(payload, schema) {
    const root = dig(payload, schema.resultPath || "");
    const list = Array.isArray(root) ? root : Array.isArray(root?.results) ? root.results : Array.isArray(payload) ? payload : [];
    const labelKey = schema.labelKey || "label";
    const valueKey = schema.valueKey || "value";
    const out = [];
    for (const item of list){
        if (typeof item === "string") {
            out.push(item);
            continue;
        }
        if (item && typeof item === "object") {
            const rec = item;
            const label = typeof rec[labelKey] === "string" && rec[labelKey] || typeof rec[valueKey] === "string" && rec[valueKey] || typeof rec.descriptor === "string" && rec.descriptor || typeof rec.text === "string" && rec.text || typeof rec.name === "string" && rec.name;
            if (typeof label === "string" && label.trim()) out.push(label.trim());
        }
    }
    return out;
}
async function fetchSearchSchemaOptions(schema) {
    const method = (schema.method || "GET").toUpperCase();
    const init = {
        method,
        headers: {
            Accept: "application/json",
            ...schema.headers || {}
        },
        credentials: "omit"
    };
    if (method !== "GET" && schema.body != null) {
        init.body = typeof schema.body === "string" ? schema.body : JSON.stringify(schema.body);
        if (!schema.headers?.["content-type"] && !schema.headers?.["Content-Type"]) init.headers["content-type"] = "application/json";
    }
    const res = await fetch(schema.url, init);
    if (!res.ok) return [];
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
        const json = await res.json();
        return extractLabelsFromPayload(json, schema);
    }
    const text = await res.text();
    try {
        return extractLabelsFromPayload(JSON.parse(text), schema);
    } catch  {
        return [];
    }
}
function desiredFromHub(hub, operation) {
    const label = typeof operation.label === "string" && operation.label || typeof operation.question === "string" && operation.question || typeof operation.field === "string" && operation.field || "";
    const options = [
        ...asStringList(operation.options),
        ...asStringList(operation.candidates),
        ...asStringList(operation.values)
    ];
    const query = typeof operation.query === "string" && operation.query || typeof operation.searchText === "string" && operation.searchText || "";
    let desired = label && (0, _hubToJobright.lookupAnswer)(hub, label, options) || query && (0, _hubToJobright.lookupAnswer)(hub, query, options) || query || null;
    if (!desired && /country/i.test(label)) desired = hub.identity.address.country;
    if (!desired && /^(city|location)$/i.test(norm(label))) desired = hub.identity.address.city;
    if (!desired && /state|province/i.test(label)) desired = hub.identity.address.state;
    if (!desired && /school|university|college/i.test(label)) {
        const edu = hub.extras?.education;
        if (Array.isArray(edu) && edu[0] && typeof edu[0] === "object") {
            const row = edu[0];
            desired = typeof row.schoolName === "string" && row.schoolName || typeof row.school === "string" && row.school || null;
        }
    }
    if (!desired && /degree/i.test(label)) {
        const edu = hub.extras?.education;
        if (Array.isArray(edu) && edu[0] && typeof edu[0] === "object") {
            const row = edu[0];
            desired = typeof row.accreditation === "string" && row.accreditation || typeof row.degree === "string" && row.degree || null;
        }
    }
    return desired;
}
async function resolveOperationLocally(hub, operation, source = "generic") {
    const desired = desiredFromHub(hub, operation);
    let options = [
        ...asStringList(operation.options),
        ...asStringList(operation.candidates),
        ...asStringList(operation.values)
    ];
    if (operation.search_request_schema?.url) try {
        const remote = await fetchSearchSchemaOptions(operation.search_request_schema);
        if (remote.length) options = [
            ...remote,
            ...options
        ];
    } catch (err) {
        console.warn("[resolve-operation] search schema fetch failed", err);
    }
    if (!desired?.trim()) return {
        action: "NO_MATCH",
        selected_values: [],
        source,
        options
    };
    if (!options.length) return {
        action: "SELECT_OPTIONS",
        selected_values: [
            desired.trim()
        ],
        source
    };
    const matched = adaptToOptions(desired, options);
    if (!matched) return {
        action: "NO_MATCH",
        selected_values: [],
        source,
        options
    };
    return {
        action: "SELECT_OPTIONS",
        selected_values: [
            matched
        ],
        source,
        options
    };
}

},{"~lib/hub-to-jobright":"2hkCS","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"8CzHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Multi-step client-search planner for Oracle education LOV.
 */ parcelHelpers.export(exports, "planOracleEducationClientSearchStep", ()=>planOracleEducationClientSearchStep);
function planOracleEducationClientSearchStep(opts) {
    const max = opts.maxRounds ?? 5;
    if (opts.round >= max) return {
        action: "NO_MATCH"
    };
    if (!opts.candidates.length) return {
        action: "REQUEST_SEARCH",
        searchText: opts.searchText
    };
    const want = opts.desired.toLowerCase();
    const hit = opts.candidates.find((c)=>c.text.toLowerCase() === want || c.text.toLowerCase().includes(want) || want.includes(c.text.toLowerCase()));
    if (hit) return {
        action: "SELECT_OPTIONS",
        selected_values: [
            hit.text
        ]
    };
    const token = opts.searchText.split(/\s+/)[0] || opts.searchText;
    if (opts.round < max - 1 && token !== opts.searchText) return {
        action: "REQUEST_SEARCH",
        searchText: token
    };
    return {
        action: "SELECT_OPTIONS",
        selected_values: [
            opts.candidates[0].text
        ]
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"mxjqE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
var _resolveOperation = require("~lib/resolve-operation");
const ALLOWED_SOURCES = new Set([
    "ashby",
    "eightfold",
    "greenhouse",
    "metacareers",
    "myworkday",
    "oraclecloud",
    "pinpointhq",
    "phenom",
    "rippling",
    "smartrecruiters",
    "zohorecruit",
    "personio",
    "lever",
    "generic",
    "autoFill",
    "cleanTs"
]);
const handler = async (req, res)=>{
    try {
        const operation = req.body?.operation;
        const source = typeof req.body?.source === "string" ? req.body.source : "generic";
        if (!operation || typeof operation !== "object") {
            res.send({
                ok: false,
                operation,
                result: {
                    action: "RETRYABLE_FAILURE",
                    selected_values: []
                },
                message: "missing_operation"
            });
            return;
        }
        if (source && source.length > 64) {
            res.send({
                ok: false,
                operation,
                result: {
                    action: "RETRYABLE_FAILURE",
                    selected_values: []
                },
                message: "invalid_source"
            });
            return;
        }
        const hub = await (0, _teamClient.fetchAutofillInfo)();
        if (!hub) {
            res.send({
                ok: false,
                operation,
                result: {
                    action: "RETRYABLE_FAILURE",
                    selected_values: []
                },
                message: "no_profile"
            });
            return;
        }
        const result = await (0, _resolveOperation.resolveOperationLocally)(hub, operation, source);
        res.send({
            ok: true,
            operation,
            result
        });
    } catch (err) {
        res.send({
            ok: false,
            result: {
                action: "RETRYABLE_FAILURE",
                selected_values: []
            },
            message: err instanceof Error ? err.message : "resolve_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","~lib/resolve-operation":"34r4X","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"5N3CK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("resolveCapturedMetaCareersLocation");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"8UYRG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("resolveCapturedPhenomSchool");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4RWjG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("resolveJobIdByUrl");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"bSrWZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _teamClient = require("~api/team-client");
/**
 * Persist autofill info patches from the helper UI to the team hub.
 * Jobright called profile.saveAutofillInfo; we merge answers / extras.
 */ const handler = async (req, res)=>{
    try {
        const body = req.body || {};
        const answers = body.answers && typeof body.answers === "object" ? body.answers : body.autofillInfo?.answers && typeof body.autofillInfo.answers === "object" ? body.autofillInfo.answers : null;
        if (!answers || !Object.keys(answers).length) {
            // Nothing to merge \u2014 treat as success so UI does not block
            res.send({
                ok: true,
                stub: false,
                skipped: true
            });
            return;
        }
        const profileId = typeof body.profileId === "string" ? body.profileId : null;
        const result = await (0, _teamClient.mergeProfileAnswers)(answers, profileId);
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
            extras: result.extras
        });
    } catch (err) {
        res.send({
            ok: false,
            message: err instanceof Error ? err.message : "save_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"2i3dL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("saveExternalJobId");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"8mahq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("saveJobDetail");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"gxJFI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("saveSubmitStatus");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"1Typx":[function(require,module,exports) {
// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../searchIcimsProfileOptions.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
async function injectMain(e) {
    let t = (e)=>({
            status: "failure",
            reason: e
        }), r = (e)=>"string" == typeof e ? e.replace(/\s+/g, " ").trim() : "", a = r(e?.selectId), o = r(e?.searchInput);
    if (!a || a.length > 256 || !o || o.length > 256) return t("invalid-request");
    let s = globalThis.location, n = s?.hostname?.toLowerCase() ?? "";
    if (s?.protocol !== "https:" || "icims.com" !== n && !n.endsWith(".icims.com")) return t("invalid-context");
    let l = globalThis.document?.getElementById(a), i = a.endsWith("CandProfileFields.School") ? "CandProfileFields.School" : a.endsWith("CandProfileFields.Major") ? "CandProfileFields.Major" : "", u = r(l?.getAttribute("hash"));
    if (!l || !l.isConnected || !i || !u || u.length > 256 || "1" !== l.getAttribute("icimsdropdown-enabled") || "1" !== l.getAttribute("icimsdropdown-search") || "1" !== l.getAttribute("icimsdropdown-ajax")) return t("invalid-control");
    let c = new URL("/jobs/profileoptions", s.origin);
    for (let [e, t] of [
        [
            "in_iframe",
            "1"
        ],
        [
            "q",
            o
        ],
        [
            "page",
            "0"
        ],
        [
            "size",
            "25"
        ],
        [
            "parentValue",
            ""
        ],
        [
            "id",
            i
        ],
        [
            "hash",
            u
        ]
    ])c.searchParams.append(e, t);
    let d = new AbortController, p = setTimeout(()=>d.abort(), 3e3);
    try {
        let e;
        let a = await fetch(c.toString(), {
            method: "GET",
            credentials: "same-origin",
            redirect: "error",
            cache: "no-store",
            signal: d.signal
        }), o = new URL(a.url);
        if (!a.ok || 200 !== a.status || a.redirected || o.origin !== s.origin || "/jobs/profileoptions" !== o.pathname) return t("request-failed");
        try {
            e = await a.json();
        } catch  {
            return t("invalid-response");
        }
        if (!e || "object" != typeof e || Array.isArray(e)) return t("invalid-response");
        let n = e.total, l = e.options;
        if ("number" != typeof n || !Number.isFinite(n) || !Number.isInteger(n) || n < 0 || !Array.isArray(l) || l.length > 25 || 0 === n && l.length > 0 || n > 0 && 0 === l.length) return t("invalid-response");
        let i = [], u = new Set;
        for (let e of l){
            if (!e || "object" != typeof e || Array.isArray(e)) return t("invalid-response");
            let a = r(e.value), o = r(e.text);
            if (!a || a.length > 256 || !o || o.length > 512) return t("invalid-response");
            let s = JSON.stringify([
                a,
                o
            ]);
            u.has(s) || (u.add(s), i.push({
                value: a,
                text: o
            }));
        }
        return i.length ? {
            status: "ready",
            candidates: i
        } : {
            status: "no-results",
            candidates: []
        };
    } catch  {
        return t("request-failed");
    } finally{
        clearTimeout(p);
    }
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        if (!tabId) {
            res.send({
                success: false,
                ok: false,
                opened: false,
                message: "no_tab"
            });
            return;
        }
        const frameId = req.sender?.frameId ?? 0;
        const results = await chrome.scripting.executeScript({
            target: {
                tabId,
                frameIds: [
                    frameId
                ]
            },
            world: "MAIN",
            func: injectMain,
            args: [
                req.body
            ]
        });
        const result = results?.[0]?.result ?? null;
        res.send({
            success: true,
            ok: true,
            opened: result?.opened === true,
            result,
            ...result && typeof result === "object" ? result : {}
        });
    } catch (err) {
        console.error("[searchIcimsProfileOptions]", err);
        res.send({
            success: false,
            ok: false,
            opened: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"2jtw4":[function(require,module,exports) {
// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../selectIcimsProfileOption.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function injectMain(e) {
    let t = (e)=>({
            status: "failure",
            reason: e
        }), r = (e)=>"string" == typeof e ? e.replace(/\s+/g, " ").trim() : "", a = r(e?.selectId), o = r(e?.candidate?.value), s = r(e?.candidate?.text);
    if (!a || a.length > 256 || !o || o.length > 256 || !s || s.length > 512) return t("invalid-request");
    let n = globalThis.location, l = n?.hostname?.toLowerCase() ?? "";
    if (n?.protocol !== "https:" || "icims.com" !== l && !l.endsWith(".icims.com")) return t("invalid-context");
    let i = globalThis.document?.getElementById(a);
    if (!i || !i.isConnected || !a.endsWith("CandProfileFields.School") && !a.endsWith("CandProfileFields.Major") || "1" !== i.getAttribute("icimsdropdown-enabled")) return t("invalid-control");
    let u = globalThis.ICIMS ?? globalThis.icimsUtils, c = u?.dropdowns?.[a];
    if ("function" != typeof c?.findWordFromValue || "function" != typeof c.optionSelected) return t("missing-dropdown");
    let d = c.findWordFromValue(o);
    if (!d || "object" != typeof d || r(d.value) !== o || r(d.text) !== s) return t("missing-option");
    c.optionSelected(d);
    let p = i.selectedOptions?.[0], f = r(globalThis.document?.getElementById(`${a}_fakeSelected_icimsDropdown`)?.textContent);
    return r(p?.value) !== o || r(p?.text) !== s || f !== s ? t("uncommitted") : {
        status: "selected"
    };
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        if (!tabId) {
            res.send({
                success: false,
                ok: false,
                opened: false,
                message: "no_tab"
            });
            return;
        }
        const frameId = req.sender?.frameId ?? 0;
        const results = await chrome.scripting.executeScript({
            target: {
                tabId,
                frameIds: [
                    frameId
                ]
            },
            world: "MAIN",
            func: injectMain,
            args: [
                req.body
            ]
        });
        const result = results?.[0]?.result ?? null;
        res.send({
            success: true,
            ok: true,
            opened: result?.opened === true,
            result,
            ...result && typeof result === "object" ? result : {}
        });
    } catch (err) {
        console.error("[selectIcimsProfileOption]", err);
        res.send({
            success: false,
            ok: false,
            opened: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
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
var _teamClient = require("~api/team-client");
/**
 * Update one autofill section (identity / answers / extras) on the hub profile.
 * Body: { section?: string, data?: Record<string, unknown>, answers?: Record<string, string> }
 */ const handler = async (req, res)=>{
    try {
        const body = req.body || {};
        const answers = body.answers && typeof body.answers === "object" ? body.answers : body.data?.answers && typeof body.data.answers === "object" ? body.data.answers : null;
        if (answers && Object.keys(answers).length) {
            const result = await (0, _teamClient.mergeProfileAnswers)(answers, typeof body.profileId === "string" ? body.profileId : null);
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
                extras: result.extras
            });
            return;
        }
        // Generic extras / section patch
        const settings = await (0, _teamClient.getTeamSettings)();
        const id = typeof body.profileId === "string" && body.profileId || settings.selectedProfileId;
        if (!id) {
            res.send({
                ok: false,
                message: "no_profile"
            });
            return;
        }
        const patch = {};
        if (body.extras && typeof body.extras === "object") patch.extras = body.extras;
        if (body.data && typeof body.data === "object") {
            const d = body.data;
            for (const key of [
                "firstName",
                "lastName",
                "email",
                "phone",
                "linkedin",
                "website",
                "address1",
                "address2",
                "city",
                "state",
                "postalCode",
                "country"
            ])if (typeof d[key] === "string") patch[key] = d[key];
            if (d.extras && typeof d.extras === "object") patch.extras = d.extras;
        }
        if (!Object.keys(patch).length) {
            res.send({
                ok: true,
                skipped: true
            });
            return;
        }
        const { ok, data } = await (0, _teamClient.teamFetch)(`/api/v1/profiles/${encodeURIComponent(id)}`, {
            method: "PATCH",
            body: JSON.stringify(patch)
        });
        res.send({
            ok: ok && !!data?.ok,
            error: data?.error
        });
    } catch (err) {
        res.send({
            ok: false,
            message: err instanceof Error ? err.message : "update_failed"
        });
    }
};
exports.default = handler;

},{"~api/team-client":"7DK0L","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"k2B8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("updateResumeCollection");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"73d8c":[function(require,module,exports) {
// @ts-nocheck
/**
 * Ported MAIN-world inject from engine/background/.../uploadBrassringProfileBuilderFile.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function injectMain(e) {
    let t = (e)=>"resume" === e ? "resume" : "coverletter";
    if (!(()=>{
        try {
            let r = new URL(window.location.href);
            return /\/TGNewUI\/Profile\/Home\/ProfileBuilder$/i.test(r.pathname) && (r.searchParams.get("calledFrom") || "").toLowerCase() === t(e.kind);
        } catch  {
            return !1;
        }
    })()) return {
        matched: !1,
        success: !1
    };
    let r = document.querySelector("input[type='file']#file, input[type='file'][name='file'], input[type='file']");
    if (!r || r.disabled) return {
        matched: !0,
        success: !1,
        reason: "missing-file-input"
    };
    if (!e.base64 || !e.fileName) return {
        matched: !0,
        success: !1,
        reason: "missing-file-payload"
    };
    try {
        let t = atob(e.base64), a = new Uint8Array(t.length);
        for(let e = 0; e < t.length; e += 1)a[e] = t.charCodeAt(e);
        let o = new File([
            a
        ], e.fileName, {
            type: e.fileType || "application/pdf",
            lastModified: e.lastModified || Date.now()
        }), s = new DataTransfer;
        s.items.add(o);
        try {
            r.files = s.files;
        } catch  {
            Object.defineProperty(r, "files", {
                configurable: !0,
                value: s.files
            });
        }
        for (let e of [
            "input",
            "change",
            "blur"
        ])r.dispatchEvent(new Event(e, {
            bubbles: !0,
            cancelable: !1
        }));
        return {
            matched: !0,
            success: !!r.files?.length
        };
    } catch (e) {
        return {
            matched: !0,
            success: !1,
            reason: String(e)
        };
    }
}
const handler = async (req, res)=>{
    try {
        const tabId = req.sender?.tab?.id;
        if (!tabId) {
            res.send({
                success: false,
                ok: false,
                message: "no_tab"
            });
            return;
        }
        const frameId = req.sender?.frameId ?? 0;
        const target = req.body?.allFrames === true ? {
            tabId,
            allFrames: true
        } : {
            tabId,
            frameIds: [
                frameId
            ]
        };
        const results = await chrome.scripting.executeScript({
            target,
            world: "MAIN",
            func: injectMain,
            args: [
                req.body
            ]
        });
        res.send({
            success: true,
            ok: true,
            result: results?.[0]?.result ?? null
        });
    } catch (err) {
        console.error("[uploadBrassringProfileBuilderFile]", err);
        res.send({
            success: false,
            ok: false,
            message: err instanceof Error ? err.message : "inject_failed"
        });
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"7f40R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("waitForPhenomSchoolCapture");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"kimL1":[function(require,module,exports) {
/**
 * Background service worker entry.
 * Message handlers live in background/messages/*.
 */ var _hubEnv = require("~api/hub-env");
var _teamClient = require("~api/team-client");
chrome.runtime.onMessageExternal.addListener((message, _sender, sendResponse)=>{
    if (message?.type !== "TEAM_HUB_AUTH" || !message.token) {
        sendResponse({
            ok: false,
            error: "unknown_message"
        });
        return false;
    }
    const siteUrl = String(message.siteUrl || (0, _hubEnv.getHubUrl)()).replace(/\/+$/, "");
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

},{"~api/hub-env":"e1kuR","~api/team-client":"7DK0L"}]},["2i2v6","8oeFb"], "8oeFb", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLGFBQWE7WUFBRSxJQUFJO1FBQUssSUFDbkMsTUFBTSxDQUFDLE1BQ04sYUFBYTtZQUNYLElBQUk7WUFDSixPQUFPLGVBQWUsUUFBUSxJQUFJLFVBQVU7UUFDOUM7SUFHSixPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWFiNDhjNWQ3OWVkZmI1MTIuanMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9tZXNzYWdpbmcudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9hY2NlcHRBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvbi50cyIsInNyYy9iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWIudHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2FjdGl2YXRlSGVscGVyT25UYWIudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9jb25zdW1lT3JhY2xlRWR1Y2F0aW9uTG92Q2FwdHVyZS50cyIsInNyYy9iYWNrZ3JvdW5kL2xpYi9vcmFjbGUtbG92LWNhcHR1cmUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9jb252ZXJ0UmVzdW1lUGRmVG9Xb3JkLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvY291bnRFeHRlcm5hbEpvYklkcy50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2ZsdXNoQXV0b2ZpbGxJbnN0YWxsQXR0cmlidXRpb24udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZW5lcmF0ZUF1dG9maWxsQ292ZXJMZXR0ZXIudHMiLCJzcmMvYXBpL3RlYW0tY2xpZW50LnRzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9zdG9yYWdlL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcGlmeS9pbmRleC5qcyIsInNyYy9hcGkvaHViLWVudi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFiVXNlci50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFkZHJlc3NTdWdnZXN0aW9ucy50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFnZW50Q292ZXJMZXR0ZXIudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBZ2VudFFMUnVsZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFnZW50VGFpbG9yUmVzdW1lLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0QXV0b2ZpbGxDb25maWcudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBdXRvZmlsbEluZm8udHMiLCJzcmMvbGliL2h1Yi10by1qb2JyaWdodC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEJhc2VSZXN1bWVCbG9iLnRzIiwic3JjL2JhY2tncm91bmQvbGliL3Jlc3VtZS1ibG9iLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q29tcGFueU5hbWVMaXN0LnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q292ZXJMZXR0ZXJCbG9iLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3JlZGl0RmVlZC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldENyZWRpdHNMZWZ0LnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3JlZGl0U3dpdGNoU3RhdHVzLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3VycmVudENvdmVyTGV0dGVyLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3VycmVudEZpbGxBbnN3ZXIudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDdXJyZW50VGFiSWQudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDdXJyZW50VGFiVXJsLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0RGVncmVlU3VnZ2VzdGlvbnMudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRFeHRlcm5hbEpvYklkLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0RXh0ZXJuYWxKb2JTdGF0dXMudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRHcHRSZXN1bHRzLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Sm9iQmFubmVyRGV0YWlsLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Sm9iRGV0YWlsLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0TWFqb3JTdWdnZXN0aW9ucy50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldE9wZW5DaXRpZXNCeVJlZ2lvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldE9wZW5SZWdpb25zLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0UGFnZUxpbmtlZGluSm9iSW5mby50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFBheW1lbnRQcmljZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlbGVhc2VDb25maWcudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRSZXN1bWVCbG9iLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0UmVzdW1lQ29sbGVjdGlvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlc3VtZURpYWdub3NlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0UmVzdW1lSW5mby50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFNpbWlsYXJKb2JzLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0U2l0ZVRva2VuLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFiQ29udGV4dC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhYkpvYklkLnRzIiwic3JjL2JhY2tncm91bmQvdGFiLWpvYi1pZC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhaWxvclJlc3VtZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhaWxvclJlc3VtZUJsb2IudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRUYWlsb3JSZXN1bWVGaWxlTmFtZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFVzZXJQcm9maWxlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VmVyc2lvblVwZGF0ZVN0YXRlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0QXNoYnlGaWVsZE1ldGFkYXRhLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0SGVscGVyQXBwQnVuZGxlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0UmVhY3RTZWxlY3RGaWJlci50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2luamVjdFJlY3J1aXRlZUZpYmVyLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0V29ya2FibGVDaGVja2JveC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2luamVjdFdvcmtkYXlGaWJlci50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2luc3RhbGxNYWluV29ybGRBbGVydFN1cHByZXNzb3IudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9pbnRlcmNlcHRGaWxlSW5wdXRDbGljay50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2t1bGFDb21wYW55RG9tLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvbGVhcm5BbnN3ZXJzLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvbG9nQXBwbGljYXRpb24udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9tYXJrUmVmcmVzaFJlcXVlc3RlZC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL21hcmtXaGF0c05ld1JlYWQudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuQWdlbnRBcHBseVRhYi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL29wZW5CcmFzc3JpbmdGdWxsUGFnZUF1dG9jb21wbGV0ZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL29wZW5EYXlmb3JjZVBvbGljeVRhYi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3BhcnNlUGFnZU1hcmtkb3duLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcGluZy50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RBcHBseUpvYi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RBdXRvZmlsbEFuc3dlclBhaXJBdHRyaWJ1dGVkLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcG9zdEF1dG9maWxsRmVlZGJhY2sudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0RXZlbnRTdWJtaXQudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0RXh0ZXJuYWxKb2JJbXBvcnQudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0UGx1Z2luRmVlZGJhY2sudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0U2ltaWxhckpvYlBvcHVwRXhwb3N1cmUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wcmVwYXJlTWV0YUNhcmVlcnNMb2NhdGlvbkNhcHR1cmUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wcmVwYXJlT3JhY2xlRWR1Y2F0aW9uTG92Q2FwdHVyZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3ByZXBhcmVQaGVub21TY2hvb2xDYXB0dXJlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcHJldmlld0Jhc2VSZXN1bWVCbG9iLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcHJldmlld1RhaWxvclJlc3VtZUJsb2IudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZWdlbmVyYXRlQW5zd2VyLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVsb2FkRXh0ZW5zaW9uLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVwb3J0QXV0b2ZpbGxGaXJzdFVzZUF0dHJpYnV0aW9uLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVxdWVzdEV4dGVuc2lvblVwZGF0ZUNoZWNrLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUFkZHJlc3NTdWdnZXN0aW9uLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUF1dG9maWxsQ2xpZW50U2VhcmNoU3RlcC50cyIsInNyYy9saWIvcmVzb2x2ZS1vcGVyYXRpb24udHMiLCJzcmMvbGliL29yYWNsZS1lZHVjYXRpb24tcGxhbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVBdXRvZmlsbE9wZXJhdGlvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVDYXB0dXJlZE1ldGFDYXJlZXJzTG9jYXRpb24udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQ2FwdHVyZWRQaGVub21TY2hvb2wudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlSm9iSWRCeVVybC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3NhdmVBdXRvZmlsbEluZm8udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9zYXZlRXh0ZXJuYWxKb2JJZC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3NhdmVKb2JEZXRhaWwudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9zYXZlU3VibWl0U3RhdHVzLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2VhcmNoSWNpbXNQcm9maWxlT3B0aW9ucy50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3NlbGVjdEljaW1zUHJvZmlsZU9wdGlvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3NldFRhYkpvYklkLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvdXBkYXRlQXV0b2ZpbGxTZWN0aW9uLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvdXBkYXRlUmVzdW1lQ29sbGVjdGlvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3VwbG9hZEJyYXNzcmluZ1Byb2ZpbGVCdWlsZGVyRmlsZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3dhaXRGb3JQaGVub21TY2hvb2xDYXB0dXJlLnRzIiwic3JjL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHU9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgaD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBCPW5ldyBTZXQodSksXz1lPT5CLmhhcyhlKSxHPXUuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgVT1fKFwiLS1kcnktcnVuXCIpLGc9KCk9Pl8oXCItLXZlcmJvc2VcIil8fGgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsTj1nKCk7dmFyIG09KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHk9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+bShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGY9KC4uLmUpPT5tKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksTT0wLGk9KC4uLmUpPT5nKCkmJm0oYFxcdXsxRjdFMX0gJHtNKyt9YCwuLi5lKTt2YXIgYj0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWUsdD0oKT0+c2V0SW50ZXJ2YWwoZS5nZXRQbGF0Zm9ybUluZm8sMjRlMyk7ZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIodCksdCgpfTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOnRydWUsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcImJhY2tncm91bmQtc2VydmljZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcLnBsYXNtb1xcXFxzdGF0aWNcXFxcYmFja2dyb3VuZFxcXFxpbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImMzMzg5MDhlNzA0YzkxZjFcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEgoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1IO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgYz1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIFIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24geCgpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIGQoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBQPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFM9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgTz1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHtSKCl9OiR7ZCgpfS9gO2FzeW5jIGZ1bmN0aW9uIGsoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKE8pO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGMucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1jLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIEUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBDKGU9ZCgpKXtsZXQgdD14KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gTChlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ5KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gVChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQyhOdW1iZXIoZCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7YXdhaXQgZShzKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdH1mdW5jdGlvbiBBKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHMudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUocy5hc3NldHMpLHMudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IHIgb2Ygcy5kaWFnbm9zdGljcy5hbnNpKXtsZXQgbD1yLmNvZGVmcmFtZXx8ci5zdGFjaztmKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK3IubWVzc2FnZStgXG5gK2wrYFxuXG5gK3IuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixMKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciB3PW1vZHVsZS5idW5kbGUucGFyZW50LGE9e2J1aWxkUmVhZHk6ITEsYmdDaGFuZ2VkOiExLGNzQ2hhbmdlZDohMSxwYWdlQ2hhbmdlZDohMSxzY3JpcHRQb3J0czpuZXcgU2V0LHBhZ2VQb3J0czpuZXcgU2V0fTthc3luYyBmdW5jdGlvbiBwKGU9ITEpe2lmKGV8fGEuYnVpbGRSZWFkeSYmYS5wYWdlQ2hhbmdlZCl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBQYWdlXCIpO2ZvcihsZXQgdCBvZiBhLnBhZ2VQb3J0cyl0LnBvc3RNZXNzYWdlKG51bGwpfWlmKGV8fGEuYnVpbGRSZWFkeSYmKGEuYmdDaGFuZ2VkfHxhLmNzQ2hhbmdlZCkpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgQ1NcIik7bGV0IHQ9YXdhaXQgYz8udGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBvIG9mIGEuc2NyaXB0UG9ydHMpe2xldCBzPXQuc29tZShyPT5yLmlkPT09by5zZW5kZXIudGFiPy5pZCk7by5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fOnN9KX1jLnJ1bnRpbWUucmVsb2FkKCl9fWlmKCF3fHwhdy5pc1BhcmNlbFJlcXVpcmUpe2IoKTtsZXQgZT1BKGFzeW5jIHQ9PntpKFwiQkdTVyBSdW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxhLmJnQ2hhbmdlZHx8PXQuZmlsdGVyKHM9PnMuZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShzPT5FKG1vZHVsZS5idW5kbGUscy5pZCkpO2xldCBvPXQuZmluZChzPT5zLnR5cGU9PT1cImpzb25cIik7aWYobyl7bGV0IHM9bmV3IFNldCh0Lm1hcChsPT5sLmlkKSkscj1PYmplY3QudmFsdWVzKG8uZGVwc0J5QnVuZGxlKS5tYXAobD0+T2JqZWN0LnZhbHVlcyhsKSkuZmxhdCgpO2EuYmdDaGFuZ2VkfHw9ci5ldmVyeShsPT5zLmhhcyhsKSl9cCgpfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57bGV0IHQ9c2V0SW50ZXJ2YWwoKCk9PmUuc2VuZChcInBpbmdcIiksMjRlMyk7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+Y2xlYXJJbnRlcnZhbCh0KSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGFzeW5jKCk9Pnthd2FpdCBrKCkscCghMCl9KX1UKGFzeW5jIGU9Pntzd2l0Y2goaShcIkJHU1cgUnVudGltZSAtIE9uIEJ1aWxkIFJlcGFja2FnZWRcIiksZS50eXBlKXtjYXNlXCJidWlsZF9yZWFkeVwiOnthLmJ1aWxkUmVhZHl8fD0hMCxwKCk7YnJlYWt9Y2FzZVwiY3NfY2hhbmdlZFwiOnthLmNzQ2hhbmdlZHx8PSEwLHAoKTticmVha319fSk7Yy5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihlKXtsZXQgdD1lLm5hbWUuc3RhcnRzV2l0aChQKSxvPWUubmFtZS5zdGFydHNXaXRoKFMpO2lmKHR8fG8pe2xldCBzPXQ/YS5wYWdlUG9ydHM6YS5zY3JpcHRQb3J0cztzLmFkZChlKSxlLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3MuZGVsZXRlKGUpfSksZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocil7aShcIkJHU1cgUnVudGltZSAtIE9uIHNvdXJjZSBjaGFuZ2VkXCIsciksci5fX3BsYXNtb19jc19jaGFuZ2VkX18mJihhLmNzQ2hhbmdlZHx8PSEwKSxyLl9fcGxhc21vX3BhZ2VfY2hhbmdlZF9fJiYoYS5wYWdlQ2hhbmdlZHx8PSEwKSxwKCl9KX19KTtjLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcGxhc21vX2Z1bGxfcmVsb2FkX18mJihpKFwiQkdTVyBSdW50aW1lIC0gT24gdG9wLWxldmVsIGNvZGUgY2hhbmdlZFwiKSxwKCkpLCEwfSk7XG4iLCJpbXBvcnQgXCIuL21lc3NhZ2luZ1wiXG5pbXBvcnQgXCIuLi8uLi8uLi9zcmMvYmFja2dyb3VuZFwiIiwiLy8gQHRzLW5vY2hlY2tcbmdsb2JhbFRoaXMuX19wbGFzbW9JbnRlcm5hbFBvcnRNYXAgPSBuZXcgTWFwKClcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0FjY2VwdEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2FjY2VwdEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNBY3RpdmF0ZUhlbHBlck9uVGFiIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2FjdGl2YXRlSGVscGVyT25UYWJcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0NvbnN1bWVPcmFjbGVFZHVjYXRpb25Mb3ZDYXB0dXJlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2NvbnN1bWVPcmFjbGVFZHVjYXRpb25Mb3ZDYXB0dXJlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNDb252ZXJ0UmVzdW1lUGRmVG9Xb3JkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2NvbnZlcnRSZXN1bWVQZGZUb1dvcmRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0NvdW50RXh0ZXJuYWxKb2JJZHMgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvY291bnRFeHRlcm5hbEpvYklkc1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzRmx1c2hBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9mbHVzaEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZW5lcmF0ZUF1dG9maWxsQ292ZXJMZXR0ZXIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2VuZXJhdGVBdXRvZmlsbENvdmVyTGV0dGVyXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRBYlVzZXIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0QWJVc2VyXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRBZGRyZXNzU3VnZ2VzdGlvbnMgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0QWRkcmVzc1N1Z2dlc3Rpb25zXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRBZ2VudENvdmVyTGV0dGVyIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFnZW50Q292ZXJMZXR0ZXJcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEFnZW50UWxSdWxlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFnZW50UUxSdWxlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRBZ2VudFRhaWxvclJlc3VtZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBZ2VudFRhaWxvclJlc3VtZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0QXV0b2ZpbGxDb25maWcgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0QXV0b2ZpbGxDb25maWdcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEF1dG9maWxsSW5mbyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBdXRvZmlsbEluZm9cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEJhc2VSZXN1bWVCbG9iIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEJhc2VSZXN1bWVCbG9iXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRDb21wYW55TmFtZUxpc3QgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q29tcGFueU5hbWVMaXN0XCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRDb3ZlckxldHRlckJsb2IgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q292ZXJMZXR0ZXJCbG9iXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRDcmVkaXRGZWVkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldENyZWRpdEZlZWRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldENyZWRpdHNMZWZ0IH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldENyZWRpdHNMZWZ0XCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRDcmVkaXRTd2l0Y2hTdGF0dXMgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3JlZGl0U3dpdGNoU3RhdHVzXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRDdXJyZW50Q292ZXJMZXR0ZXIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3VycmVudENvdmVyTGV0dGVyXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRDdXJyZW50RmlsbEFuc3dlciB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDdXJyZW50RmlsbEFuc3dlclwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0Q3VycmVudFRhYklkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEN1cnJlbnRUYWJJZFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0Q3VycmVudFRhYlVybCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDdXJyZW50VGFiVXJsXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXREZWdyZWVTdWdnZXN0aW9ucyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXREZWdyZWVTdWdnZXN0aW9uc1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0RXh0ZXJuYWxKb2JJZCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRFeHRlcm5hbEpvYklkXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRFeHRlcm5hbEpvYlN0YXR1cyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRFeHRlcm5hbEpvYlN0YXR1c1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0R3B0UmVzdWx0cyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRHcHRSZXN1bHRzXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRKb2JCYW5uZXJEZXRhaWwgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0Sm9iQmFubmVyRGV0YWlsXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRKb2JEZXRhaWwgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0Sm9iRGV0YWlsXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRNYWpvclN1Z2dlc3Rpb25zIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldE1ham9yU3VnZ2VzdGlvbnNcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldE9wZW5DaXRpZXNCeVJlZ2lvbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRPcGVuQ2l0aWVzQnlSZWdpb25cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldE9wZW5SZWdpb25zIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldE9wZW5SZWdpb25zXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRQYWdlTGlua2VkaW5Kb2JJbmZvIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFBhZ2VMaW5rZWRpbkpvYkluZm9cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFBheW1lbnRQcmljZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRQYXltZW50UHJpY2VcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFJlbGVhc2VDb25maWcgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0UmVsZWFzZUNvbmZpZ1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0UmVzdW1lQmxvYiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRSZXN1bWVCbG9iXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRSZXN1bWVDb2xsZWN0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlc3VtZUNvbGxlY3Rpb25cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFJlc3VtZURpYWdub3NlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlc3VtZURpYWdub3NlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRSZXN1bWVJbmZvIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlc3VtZUluZm9cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFNpbWlsYXJKb2JzIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFNpbWlsYXJKb2JzXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRTaXRlVG9rZW4gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0U2l0ZVRva2VuXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRUYWJDb250ZXh0IH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhYkNvbnRleHRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFRhYkpvYklkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhYkpvYklkXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRUYWlsb3JSZXN1bWUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFpbG9yUmVzdW1lXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRUYWlsb3JSZXN1bWVCbG9iIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhaWxvclJlc3VtZUJsb2JcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFRhaWxvclJlc3VtZUZpbGVOYW1lIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhaWxvclJlc3VtZUZpbGVOYW1lXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRVc2VyUHJvZmlsZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRVc2VyUHJvZmlsZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0VmVyc2lvblVwZGF0ZVN0YXRlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFZlcnNpb25VcGRhdGVTdGF0ZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzSW5qZWN0QXNoYnlGaWVsZE1ldGFkYXRhIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2luamVjdEFzaGJ5RmllbGRNZXRhZGF0YVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzSW5qZWN0SGVscGVyQXBwQnVuZGxlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2luamVjdEhlbHBlckFwcEJ1bmRsZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzSW5qZWN0UmVhY3RTZWxlY3RGaWJlciB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RSZWFjdFNlbGVjdEZpYmVyXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNJbmplY3RSZWNydWl0ZWVGaWJlciB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RSZWNydWl0ZWVGaWJlclwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzSW5qZWN0V29ya2FibGVDaGVja2JveCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RXb3JrYWJsZUNoZWNrYm94XCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNJbmplY3RXb3JrZGF5RmliZXIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0V29ya2RheUZpYmVyXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNJbnN0YWxsTWFpbldvcmxkQWxlcnRTdXBwcmVzc29yIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2luc3RhbGxNYWluV29ybGRBbGVydFN1cHByZXNzb3JcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0ludGVyY2VwdEZpbGVJbnB1dENsaWNrIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2ludGVyY2VwdEZpbGVJbnB1dENsaWNrXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNLdWxhQ29tcGFueURvbSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9rdWxhQ29tcGFueURvbVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzTGVhcm5BbnN3ZXJzIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2xlYXJuQW5zd2Vyc1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzTG9nQXBwbGljYXRpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvbG9nQXBwbGljYXRpb25cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc01hcmtSZWZyZXNoUmVxdWVzdGVkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL21hcmtSZWZyZXNoUmVxdWVzdGVkXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNNYXJrV2hhdHNOZXdSZWFkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL21hcmtXaGF0c05ld1JlYWRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc09wZW5BZ2VudEFwcGx5VGFiIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL29wZW5BZ2VudEFwcGx5VGFiXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNPcGVuQnJhc3NyaW5nRnVsbFBhZ2VBdXRvY29tcGxldGUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvb3BlbkJyYXNzcmluZ0Z1bGxQYWdlQXV0b2NvbXBsZXRlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNPcGVuRGF5Zm9yY2VQb2xpY3lUYWIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvb3BlbkRheWZvcmNlUG9saWN5VGFiXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNQYXJzZVBhZ2VNYXJrZG93biB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wYXJzZVBhZ2VNYXJrZG93blwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUGluZyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9waW5nXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNQb3N0QXBwbHlKb2IgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcG9zdEFwcGx5Sm9iXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNQb3N0QXV0b2ZpbGxBbnN3ZXJQYWlyQXR0cmlidXRlZCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0QXV0b2ZpbGxBbnN3ZXJQYWlyQXR0cmlidXRlZFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUG9zdEF1dG9maWxsRmVlZGJhY2sgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcG9zdEF1dG9maWxsRmVlZGJhY2tcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Bvc3RFdmVudFN1Ym1pdCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0RXZlbnRTdWJtaXRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Bvc3RFeHRlcm5hbEpvYkltcG9ydCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0RXh0ZXJuYWxKb2JJbXBvcnRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Bvc3RQbHVnaW5GZWVkYmFjayB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0UGx1Z2luRmVlZGJhY2tcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Bvc3RTaW1pbGFySm9iUG9wdXBFeHBvc3VyZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0U2ltaWxhckpvYlBvcHVwRXhwb3N1cmVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1ByZXBhcmVNZXRhQ2FyZWVyc0xvY2F0aW9uQ2FwdHVyZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wcmVwYXJlTWV0YUNhcmVlcnNMb2NhdGlvbkNhcHR1cmVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1ByZXBhcmVPcmFjbGVFZHVjYXRpb25Mb3ZDYXB0dXJlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3ByZXBhcmVPcmFjbGVFZHVjYXRpb25Mb3ZDYXB0dXJlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNQcmVwYXJlUGhlbm9tU2Nob29sQ2FwdHVyZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wcmVwYXJlUGhlbm9tU2Nob29sQ2FwdHVyZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUHJldmlld0Jhc2VSZXN1bWVCbG9iIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3ByZXZpZXdCYXNlUmVzdW1lQmxvYlwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUHJldmlld1RhaWxvclJlc3VtZUJsb2IgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcHJldmlld1RhaWxvclJlc3VtZUJsb2JcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1JlZ2VuZXJhdGVBbnN3ZXIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcmVnZW5lcmF0ZUFuc3dlclwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVsb2FkRXh0ZW5zaW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3JlbG9hZEV4dGVuc2lvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVwb3J0QXV0b2ZpbGxGaXJzdFVzZUF0dHJpYnV0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3JlcG9ydEF1dG9maWxsRmlyc3RVc2VBdHRyaWJ1dGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVxdWVzdEV4dGVuc2lvblVwZGF0ZUNoZWNrIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3JlcXVlc3RFeHRlbnNpb25VcGRhdGVDaGVja1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVzb2x2ZUFkZHJlc3NTdWdnZXN0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVBZGRyZXNzU3VnZ2VzdGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVzb2x2ZUF1dG9maWxsQ2xpZW50U2VhcmNoU3RlcCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQXV0b2ZpbGxDbGllbnRTZWFyY2hTdGVwXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNSZXNvbHZlQXV0b2ZpbGxPcGVyYXRpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUF1dG9maWxsT3BlcmF0aW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNSZXNvbHZlQ2FwdHVyZWRNZXRhQ2FyZWVyc0xvY2F0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVDYXB0dXJlZE1ldGFDYXJlZXJzTG9jYXRpb25cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Jlc29sdmVDYXB0dXJlZFBoZW5vbVNjaG9vbCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQ2FwdHVyZWRQaGVub21TY2hvb2xcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Jlc29sdmVKb2JJZEJ5VXJsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVKb2JJZEJ5VXJsXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNTYXZlQXV0b2ZpbGxJbmZvIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3NhdmVBdXRvZmlsbEluZm9cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1NhdmVFeHRlcm5hbEpvYklkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3NhdmVFeHRlcm5hbEpvYklkXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNTYXZlSm9iRGV0YWlsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3NhdmVKb2JEZXRhaWxcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1NhdmVTdWJtaXRTdGF0dXMgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvc2F2ZVN1Ym1pdFN0YXR1c1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzU2VhcmNoSWNpbXNQcm9maWxlT3B0aW9ucyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9zZWFyY2hJY2ltc1Byb2ZpbGVPcHRpb25zXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNTZWxlY3RJY2ltc1Byb2ZpbGVPcHRpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvc2VsZWN0SWNpbXNQcm9maWxlT3B0aW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNTZXRUYWJKb2JJZCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9zZXRUYWJKb2JJZFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzVXBkYXRlQXV0b2ZpbGxTZWN0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3VwZGF0ZUF1dG9maWxsU2VjdGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzVXBkYXRlUmVzdW1lQ29sbGVjdGlvbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy91cGRhdGVSZXN1bWVDb2xsZWN0aW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNVcGxvYWRCcmFzc3JpbmdQcm9maWxlQnVpbGRlckZpbGUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvdXBsb2FkQnJhc3NyaW5nUHJvZmlsZUJ1aWxkZXJGaWxlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNXYWl0Rm9yUGhlbm9tU2Nob29sQ2FwdHVyZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy93YWl0Rm9yUGhlbm9tU2Nob29sQ2FwdHVyZVwiXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICBzd2l0Y2ggKHJlcXVlc3Q/Lm5hbWUpIHtcbiAgICBcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIHN3aXRjaCAocmVxdWVzdC5uYW1lKSB7XG4gICAgY2FzZSBcImFjY2VwdEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uXCI6XG4gIG1lc3NhZ2VzQWNjZXB0QXV0b2ZpbGxJbnN0YWxsQXR0cmlidXRpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiYWN0aXZhdGVIZWxwZXJPblRhYlwiOlxuICBtZXNzYWdlc0FjdGl2YXRlSGVscGVyT25UYWIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiY29uc3VtZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmVcIjpcbiAgbWVzc2FnZXNDb25zdW1lT3JhY2xlRWR1Y2F0aW9uTG92Q2FwdHVyZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJjb252ZXJ0UmVzdW1lUGRmVG9Xb3JkXCI6XG4gIG1lc3NhZ2VzQ29udmVydFJlc3VtZVBkZlRvV29yZCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJjb3VudEV4dGVybmFsSm9iSWRzXCI6XG4gIG1lc3NhZ2VzQ291bnRFeHRlcm5hbEpvYklkcyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJmbHVzaEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uXCI6XG4gIG1lc3NhZ2VzRmx1c2hBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZW5lcmF0ZUF1dG9maWxsQ292ZXJMZXR0ZXJcIjpcbiAgbWVzc2FnZXNHZW5lcmF0ZUF1dG9maWxsQ292ZXJMZXR0ZXIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0QWJVc2VyXCI6XG4gIG1lc3NhZ2VzR2V0QWJVc2VyKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEFkZHJlc3NTdWdnZXN0aW9uc1wiOlxuICBtZXNzYWdlc0dldEFkZHJlc3NTdWdnZXN0aW9ucyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRBZ2VudENvdmVyTGV0dGVyXCI6XG4gIG1lc3NhZ2VzR2V0QWdlbnRDb3ZlckxldHRlcih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRBZ2VudFFMUnVsZVwiOlxuICBtZXNzYWdlc0dldEFnZW50UWxSdWxlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEFnZW50VGFpbG9yUmVzdW1lXCI6XG4gIG1lc3NhZ2VzR2V0QWdlbnRUYWlsb3JSZXN1bWUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0QXV0b2ZpbGxDb25maWdcIjpcbiAgbWVzc2FnZXNHZXRBdXRvZmlsbENvbmZpZyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRBdXRvZmlsbEluZm9cIjpcbiAgbWVzc2FnZXNHZXRBdXRvZmlsbEluZm8oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0QmFzZVJlc3VtZUJsb2JcIjpcbiAgbWVzc2FnZXNHZXRCYXNlUmVzdW1lQmxvYih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRDb21wYW55TmFtZUxpc3RcIjpcbiAgbWVzc2FnZXNHZXRDb21wYW55TmFtZUxpc3Qoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0Q292ZXJMZXR0ZXJCbG9iXCI6XG4gIG1lc3NhZ2VzR2V0Q292ZXJMZXR0ZXJCbG9iKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldENyZWRpdEZlZWRcIjpcbiAgbWVzc2FnZXNHZXRDcmVkaXRGZWVkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldENyZWRpdHNMZWZ0XCI6XG4gIG1lc3NhZ2VzR2V0Q3JlZGl0c0xlZnQoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0Q3JlZGl0U3dpdGNoU3RhdHVzXCI6XG4gIG1lc3NhZ2VzR2V0Q3JlZGl0U3dpdGNoU3RhdHVzKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEN1cnJlbnRDb3ZlckxldHRlclwiOlxuICBtZXNzYWdlc0dldEN1cnJlbnRDb3ZlckxldHRlcih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRDdXJyZW50RmlsbEFuc3dlclwiOlxuICBtZXNzYWdlc0dldEN1cnJlbnRGaWxsQW5zd2VyKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEN1cnJlbnRUYWJJZFwiOlxuICBtZXNzYWdlc0dldEN1cnJlbnRUYWJJZCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRDdXJyZW50VGFiVXJsXCI6XG4gIG1lc3NhZ2VzR2V0Q3VycmVudFRhYlVybCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXREZWdyZWVTdWdnZXN0aW9uc1wiOlxuICBtZXNzYWdlc0dldERlZ3JlZVN1Z2dlc3Rpb25zKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEV4dGVybmFsSm9iSWRcIjpcbiAgbWVzc2FnZXNHZXRFeHRlcm5hbEpvYklkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEV4dGVybmFsSm9iU3RhdHVzXCI6XG4gIG1lc3NhZ2VzR2V0RXh0ZXJuYWxKb2JTdGF0dXMoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0R3B0UmVzdWx0c1wiOlxuICBtZXNzYWdlc0dldEdwdFJlc3VsdHMoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0Sm9iQmFubmVyRGV0YWlsXCI6XG4gIG1lc3NhZ2VzR2V0Sm9iQmFubmVyRGV0YWlsKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEpvYkRldGFpbFwiOlxuICBtZXNzYWdlc0dldEpvYkRldGFpbCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRNYWpvclN1Z2dlc3Rpb25zXCI6XG4gIG1lc3NhZ2VzR2V0TWFqb3JTdWdnZXN0aW9ucyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRPcGVuQ2l0aWVzQnlSZWdpb25cIjpcbiAgbWVzc2FnZXNHZXRPcGVuQ2l0aWVzQnlSZWdpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0T3BlblJlZ2lvbnNcIjpcbiAgbWVzc2FnZXNHZXRPcGVuUmVnaW9ucyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRQYWdlTGlua2VkaW5Kb2JJbmZvXCI6XG4gIG1lc3NhZ2VzR2V0UGFnZUxpbmtlZGluSm9iSW5mbyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRQYXltZW50UHJpY2VcIjpcbiAgbWVzc2FnZXNHZXRQYXltZW50UHJpY2Uoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0UmVsZWFzZUNvbmZpZ1wiOlxuICBtZXNzYWdlc0dldFJlbGVhc2VDb25maWcoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0UmVzdW1lQmxvYlwiOlxuICBtZXNzYWdlc0dldFJlc3VtZUJsb2Ioe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0UmVzdW1lQ29sbGVjdGlvblwiOlxuICBtZXNzYWdlc0dldFJlc3VtZUNvbGxlY3Rpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0UmVzdW1lRGlhZ25vc2VcIjpcbiAgbWVzc2FnZXNHZXRSZXN1bWVEaWFnbm9zZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRSZXN1bWVJbmZvXCI6XG4gIG1lc3NhZ2VzR2V0UmVzdW1lSW5mbyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRTaW1pbGFySm9ic1wiOlxuICBtZXNzYWdlc0dldFNpbWlsYXJKb2JzKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFNpdGVUb2tlblwiOlxuICBtZXNzYWdlc0dldFNpdGVUb2tlbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRUYWJDb250ZXh0XCI6XG4gIG1lc3NhZ2VzR2V0VGFiQ29udGV4dCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRUYWJKb2JJZFwiOlxuICBtZXNzYWdlc0dldFRhYkpvYklkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFRhaWxvclJlc3VtZVwiOlxuICBtZXNzYWdlc0dldFRhaWxvclJlc3VtZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRUYWlsb3JSZXN1bWVCbG9iXCI6XG4gIG1lc3NhZ2VzR2V0VGFpbG9yUmVzdW1lQmxvYih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRUYWlsb3JSZXN1bWVGaWxlTmFtZVwiOlxuICBtZXNzYWdlc0dldFRhaWxvclJlc3VtZUZpbGVOYW1lKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFVzZXJQcm9maWxlXCI6XG4gIG1lc3NhZ2VzR2V0VXNlclByb2ZpbGUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0VmVyc2lvblVwZGF0ZVN0YXRlXCI6XG4gIG1lc3NhZ2VzR2V0VmVyc2lvblVwZGF0ZVN0YXRlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImluamVjdEFzaGJ5RmllbGRNZXRhZGF0YVwiOlxuICBtZXNzYWdlc0luamVjdEFzaGJ5RmllbGRNZXRhZGF0YSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJpbmplY3RIZWxwZXJBcHBCdW5kbGVcIjpcbiAgbWVzc2FnZXNJbmplY3RIZWxwZXJBcHBCdW5kbGUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiaW5qZWN0UmVhY3RTZWxlY3RGaWJlclwiOlxuICBtZXNzYWdlc0luamVjdFJlYWN0U2VsZWN0RmliZXIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiaW5qZWN0UmVjcnVpdGVlRmliZXJcIjpcbiAgbWVzc2FnZXNJbmplY3RSZWNydWl0ZWVGaWJlcih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJpbmplY3RXb3JrYWJsZUNoZWNrYm94XCI6XG4gIG1lc3NhZ2VzSW5qZWN0V29ya2FibGVDaGVja2JveCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJpbmplY3RXb3JrZGF5RmliZXJcIjpcbiAgbWVzc2FnZXNJbmplY3RXb3JrZGF5RmliZXIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiaW5zdGFsbE1haW5Xb3JsZEFsZXJ0U3VwcHJlc3NvclwiOlxuICBtZXNzYWdlc0luc3RhbGxNYWluV29ybGRBbGVydFN1cHByZXNzb3Ioe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiaW50ZXJjZXB0RmlsZUlucHV0Q2xpY2tcIjpcbiAgbWVzc2FnZXNJbnRlcmNlcHRGaWxlSW5wdXRDbGljayh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJrdWxhQ29tcGFueURvbVwiOlxuICBtZXNzYWdlc0t1bGFDb21wYW55RG9tKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImxlYXJuQW5zd2Vyc1wiOlxuICBtZXNzYWdlc0xlYXJuQW5zd2Vycyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJsb2dBcHBsaWNhdGlvblwiOlxuICBtZXNzYWdlc0xvZ0FwcGxpY2F0aW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcIm1hcmtSZWZyZXNoUmVxdWVzdGVkXCI6XG4gIG1lc3NhZ2VzTWFya1JlZnJlc2hSZXF1ZXN0ZWQoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwibWFya1doYXRzTmV3UmVhZFwiOlxuICBtZXNzYWdlc01hcmtXaGF0c05ld1JlYWQoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwib3BlbkFnZW50QXBwbHlUYWJcIjpcbiAgbWVzc2FnZXNPcGVuQWdlbnRBcHBseVRhYih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJvcGVuQnJhc3NyaW5nRnVsbFBhZ2VBdXRvY29tcGxldGVcIjpcbiAgbWVzc2FnZXNPcGVuQnJhc3NyaW5nRnVsbFBhZ2VBdXRvY29tcGxldGUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwib3BlbkRheWZvcmNlUG9saWN5VGFiXCI6XG4gIG1lc3NhZ2VzT3BlbkRheWZvcmNlUG9saWN5VGFiKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInBhcnNlUGFnZU1hcmtkb3duXCI6XG4gIG1lc3NhZ2VzUGFyc2VQYWdlTWFya2Rvd24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicGluZ1wiOlxuICBtZXNzYWdlc1Bpbmcoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicG9zdEFwcGx5Sm9iXCI6XG4gIG1lc3NhZ2VzUG9zdEFwcGx5Sm9iKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInBvc3RBdXRvZmlsbEFuc3dlclBhaXJBdHRyaWJ1dGVkXCI6XG4gIG1lc3NhZ2VzUG9zdEF1dG9maWxsQW5zd2VyUGFpckF0dHJpYnV0ZWQoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicG9zdEF1dG9maWxsRmVlZGJhY2tcIjpcbiAgbWVzc2FnZXNQb3N0QXV0b2ZpbGxGZWVkYmFjayh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwb3N0RXZlbnRTdWJtaXRcIjpcbiAgbWVzc2FnZXNQb3N0RXZlbnRTdWJtaXQoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicG9zdEV4dGVybmFsSm9iSW1wb3J0XCI6XG4gIG1lc3NhZ2VzUG9zdEV4dGVybmFsSm9iSW1wb3J0KHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInBvc3RQbHVnaW5GZWVkYmFja1wiOlxuICBtZXNzYWdlc1Bvc3RQbHVnaW5GZWVkYmFjayh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwb3N0U2ltaWxhckpvYlBvcHVwRXhwb3N1cmVcIjpcbiAgbWVzc2FnZXNQb3N0U2ltaWxhckpvYlBvcHVwRXhwb3N1cmUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicHJlcGFyZU1ldGFDYXJlZXJzTG9jYXRpb25DYXB0dXJlXCI6XG4gIG1lc3NhZ2VzUHJlcGFyZU1ldGFDYXJlZXJzTG9jYXRpb25DYXB0dXJlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInByZXBhcmVPcmFjbGVFZHVjYXRpb25Mb3ZDYXB0dXJlXCI6XG4gIG1lc3NhZ2VzUHJlcGFyZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicHJlcGFyZVBoZW5vbVNjaG9vbENhcHR1cmVcIjpcbiAgbWVzc2FnZXNQcmVwYXJlUGhlbm9tU2Nob29sQ2FwdHVyZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwcmV2aWV3QmFzZVJlc3VtZUJsb2JcIjpcbiAgbWVzc2FnZXNQcmV2aWV3QmFzZVJlc3VtZUJsb2Ioe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicHJldmlld1RhaWxvclJlc3VtZUJsb2JcIjpcbiAgbWVzc2FnZXNQcmV2aWV3VGFpbG9yUmVzdW1lQmxvYih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJyZWdlbmVyYXRlQW5zd2VyXCI6XG4gIG1lc3NhZ2VzUmVnZW5lcmF0ZUFuc3dlcih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJyZWxvYWRFeHRlbnNpb25cIjpcbiAgbWVzc2FnZXNSZWxvYWRFeHRlbnNpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicmVwb3J0QXV0b2ZpbGxGaXJzdFVzZUF0dHJpYnV0aW9uXCI6XG4gIG1lc3NhZ2VzUmVwb3J0QXV0b2ZpbGxGaXJzdFVzZUF0dHJpYnV0aW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInJlcXVlc3RFeHRlbnNpb25VcGRhdGVDaGVja1wiOlxuICBtZXNzYWdlc1JlcXVlc3RFeHRlbnNpb25VcGRhdGVDaGVjayh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJyZXNvbHZlQWRkcmVzc1N1Z2dlc3Rpb25cIjpcbiAgbWVzc2FnZXNSZXNvbHZlQWRkcmVzc1N1Z2dlc3Rpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicmVzb2x2ZUF1dG9maWxsQ2xpZW50U2VhcmNoU3RlcFwiOlxuICBtZXNzYWdlc1Jlc29sdmVBdXRvZmlsbENsaWVudFNlYXJjaFN0ZXAoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicmVzb2x2ZUF1dG9maWxsT3BlcmF0aW9uXCI6XG4gIG1lc3NhZ2VzUmVzb2x2ZUF1dG9maWxsT3BlcmF0aW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInJlc29sdmVDYXB0dXJlZE1ldGFDYXJlZXJzTG9jYXRpb25cIjpcbiAgbWVzc2FnZXNSZXNvbHZlQ2FwdHVyZWRNZXRhQ2FyZWVyc0xvY2F0aW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInJlc29sdmVDYXB0dXJlZFBoZW5vbVNjaG9vbFwiOlxuICBtZXNzYWdlc1Jlc29sdmVDYXB0dXJlZFBoZW5vbVNjaG9vbCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJyZXNvbHZlSm9iSWRCeVVybFwiOlxuICBtZXNzYWdlc1Jlc29sdmVKb2JJZEJ5VXJsKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInNhdmVBdXRvZmlsbEluZm9cIjpcbiAgbWVzc2FnZXNTYXZlQXV0b2ZpbGxJbmZvKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInNhdmVFeHRlcm5hbEpvYklkXCI6XG4gIG1lc3NhZ2VzU2F2ZUV4dGVybmFsSm9iSWQoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwic2F2ZUpvYkRldGFpbFwiOlxuICBtZXNzYWdlc1NhdmVKb2JEZXRhaWwoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwic2F2ZVN1Ym1pdFN0YXR1c1wiOlxuICBtZXNzYWdlc1NhdmVTdWJtaXRTdGF0dXMoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwic2VhcmNoSWNpbXNQcm9maWxlT3B0aW9uc1wiOlxuICBtZXNzYWdlc1NlYXJjaEljaW1zUHJvZmlsZU9wdGlvbnMoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwic2VsZWN0SWNpbXNQcm9maWxlT3B0aW9uXCI6XG4gIG1lc3NhZ2VzU2VsZWN0SWNpbXNQcm9maWxlT3B0aW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInNldFRhYkpvYklkXCI6XG4gIG1lc3NhZ2VzU2V0VGFiSm9iSWQoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwidXBkYXRlQXV0b2ZpbGxTZWN0aW9uXCI6XG4gIG1lc3NhZ2VzVXBkYXRlQXV0b2ZpbGxTZWN0aW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInVwZGF0ZVJlc3VtZUNvbGxlY3Rpb25cIjpcbiAgbWVzc2FnZXNVcGRhdGVSZXN1bWVDb2xsZWN0aW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInVwbG9hZEJyYXNzcmluZ1Byb2ZpbGVCdWlsZGVyRmlsZVwiOlxuICBtZXNzYWdlc1VwbG9hZEJyYXNzcmluZ1Byb2ZpbGVCdWlsZGVyRmlsZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJ3YWl0Rm9yUGhlbm9tU2Nob29sQ2FwdHVyZVwiOlxuICBtZXNzYWdlc1dhaXRGb3JQaGVub21TY2hvb2xDYXB0dXJlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIHRydWVcbn0pXG5cbmNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihwb3J0KSB7XG4gIGdsb2JhbFRoaXMuX19wbGFzbW9JbnRlcm5hbFBvcnRNYXAuc2V0KHBvcnQubmFtZSwgcG9ydClcbiAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIHN3aXRjaCAocG9ydC5uYW1lKSB7XG4gICAgICBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9KVxufSlcblxuIiwiaW1wb3J0IHsgc29mdE9rIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0T2soXCJhY2NlcHRBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvblwiKVxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTb2Z0IHN1Y2Nlc3MgZm9yIEpvYnJpZ2h0IHRlbGVtZXRyeSAvIHByb2R1Y3QgbWVzc2FnZXMgd2UgZG8gbm90IG1pcnJvci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb2Z0T2soXG4gIGhhbmRsZXI6IHN0cmluZyxcbiAgZXh0cmE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge31cbik6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciB7XG4gIHJldHVybiBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IHRydWUsXG4gICAgICBzdHViOiB0cnVlLFxuICAgICAgaGFuZGxlcixcbiAgICAgIC4uLmV4dHJhXG4gICAgfSlcbiAgfVxufVxuXG4vKiogU29mdCBlbXB0eSBwYXlsb2FkIGZvciBzdWdnZXN0aW9uIC8gc2VhcmNoIHN0dWJzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvZnRFbXB0eShcbiAgaGFuZGxlcjogc3RyaW5nLFxuICBrZXkgPSBcInJlc3VsdHNcIlxuKTogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyIHtcbiAgcmV0dXJuIGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgICByZXMuc2VuZCh7XG4gICAgICBvazogdHJ1ZSxcbiAgICAgIHN0dWI6IHRydWUsXG4gICAgICBoYW5kbGVyLFxuICAgICAgW2tleV06IFtdXG4gICAgfSlcbiAgfVxufVxuXG4vKiogU29mdCBudWxsIHBheWxvYWQgKEpvYnJpZ2h0IG9mdGVuIHNlbmRzIGJhcmUgbnVsbCBvbiBtaXNzKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb2Z0TnVsbChoYW5kbGVyOiBzdHJpbmcpOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIge1xuICByZXR1cm4gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kKG51bGwpXG4gIH1cbn1cblxuLyoqIFNvZnQgZml4ZWQgSlNPTiBib2R5IChjcmVkaXRzLCBjb25maWcsIGV0Yy4pLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvZnRWYWx1ZShcbiAgaGFuZGxlcjogc3RyaW5nLFxuICB2YWx1ZTogdW5rbm93blxuKTogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyIHtcbiAgcmV0dXJuIGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgICByZXMuc2VuZCh2YWx1ZSlcbiAgfVxufVxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmNvbnN0IEhFTFBFUl9CVU5ETEUgPSBcImFzc2V0cy9oZWxwZXItYXBwLmpzXCJcblxuLyoqXG4gKiBBY3RpdmF0ZSB0aGUgaGVscGVyIG9uIGEgdGFiIGZyb20gdGhlIHBvcHVwLlxuICpcbiAqIEFmdGVyIGFuIGV4dGVuc2lvbiByZWxvYWQsIGEgc3RhbGUgY29udGVudCBzY3JpcHQgbWF5IHN0aWxsIHJlY2VpdmVcbiAqIG1lc3NhZ2VzIGJ1dCBjYW5ub3QgdXNlIGNocm9tZS4qIEFQSXMuIFdlIHJlcXVpcmUgYW4gZXhwbGljaXQgeyBvazogdHJ1ZSB9XG4gKiBBQ0s7IGFueXRoaW5nIGVsc2UgZmFsbHMgYmFjayB0byBpbmplY3RpbmcgdGhlIGhlbHBlciBidW5kbGUgZGlyZWN0bHkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHBpbmdJY29uQ2xpY2tlZChcbiAgdGFiSWQ6IG51bWJlclxuKTogUHJvbWlzZTx7IG9rOiBib29sZWFuOyByZXNwb25zZT86IHVua25vd24gfT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKFxuICAgIHRhYklkLFxuICAgIHsgbWVzc2FnZTogXCJpY29uQ2xpY2tlZFwiIH0sXG4gICAgeyBmcmFtZUlkOiAwIH1cbiAgKVxuICBpZiAocmVzcG9uc2UgJiYgdHlwZW9mIHJlc3BvbnNlID09PSBcIm9iamVjdFwiICYmIChyZXNwb25zZSBhcyB7IG9rPzogYm9vbGVhbiB9KS5vayA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiB7IG9rOiB0cnVlIH1cbiAgfVxuICByZXR1cm4geyBvazogZmFsc2UsIHJlc3BvbnNlIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5qZWN0SGVscGVyRGlyZWN0bHkodGFiSWQ6IG51bWJlcikge1xuICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgIHRhcmdldDogeyB0YWJJZCwgYWxsRnJhbWVzOiB0cnVlIH0sXG4gICAgZmlsZXM6IFtIRUxQRVJfQlVORExFXSxcbiAgICB3b3JsZDogXCJJU09MQVRFRFwiXG4gIH0pXG4gIC8vIEJ1bmRsZSBhdXRvLWJvb3RzOyBjYWxsIGFnYWluIGlmIHRoZSBwYWdlIGFscmVhZHkgaGFkIGEgcGFydGlhbCBsb2FkLlxuICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgIHRhcmdldDogeyB0YWJJZCwgYWxsRnJhbWVzOiB0cnVlIH0sXG4gICAgd29ybGQ6IFwiSVNPTEFURURcIixcbiAgICBmdW5jOiAoKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ2xvYmFsVGhpcyBhcyB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcbiAgICAgICAgYm9vdHN0cmFwSm9icmlnaHRIZWxwZXJSdW50aW1lPzogKCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cbiAgICAgICAgb3BlbkpvYnJpZ2h0SGVscGVyRnJvbUV4dGVuc2lvbkljb24/OiAoKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuICAgICAgfVxuICAgICAgY29uc3QgYm9vdCA9IGcuYm9vdHN0cmFwSm9icmlnaHRIZWxwZXJSdW50aW1lXG4gICAgICBjb25zdCBvcGVuID0gZy5vcGVuSm9icmlnaHRIZWxwZXJGcm9tRXh0ZW5zaW9uSWNvblxuICAgICAgdm9pZCAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGJvb3QgPT09IFwiZnVuY3Rpb25cIikgYXdhaXQgYm9vdCgpXG4gICAgICAgIGlmICh0eXBlb2Ygb3BlbiA9PT0gXCJmdW5jdGlvblwiKSBhd2FpdCBvcGVuKClcbiAgICAgIH0pKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlzUmVzdHJpY3RlZFVybCh1cmw/OiBzdHJpbmcpIHtcbiAgaWYgKCF1cmwpIHJldHVybiB0cnVlXG4gIHJldHVybiAvXihjaHJvbWV8Y2hyb21lLWV4dGVuc2lvbnxlZGdlfGFib3V0fGRldnRvb2xzfHZpZXctc291cmNlKTovaS50ZXN0KFxuICAgIHVybFxuICApXG59XG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlcjx7IHRhYklkPzogbnVtYmVyIH0+ID0gYXN5bmMgKFxuICByZXEsXG4gIHJlc1xuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFiSWQgPSByZXEuYm9keT8udGFiSWRcbiAgICBpZiAodHlwZW9mIHRhYklkICE9PSBcIm51bWJlclwiKSB7XG4gICAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJtaXNzaW5nX3RhYlwiIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YWIgPSBhd2FpdCBjaHJvbWUudGFicy5nZXQodGFiSWQpXG4gICAgaWYgKGlzUmVzdHJpY3RlZFVybCh0YWIudXJsKSkge1xuICAgICAgcmVzLnNlbmQoe1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IFwiT3BlbiBhIGpvYiBhcHBsaWNhdGlvbiBwYWdlIChub3QgYSBicm93c2VyIGludGVybmFsIHBhZ2UpLlwiXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjayA9IGF3YWl0IHBpbmdJY29uQ2xpY2tlZCh0YWJJZClcbiAgICAgIGlmIChhY2sub2spIHtcbiAgICAgICAgcmVzLnNlbmQoeyBzdWNjZXNzOiB0cnVlLCBtb2RlOiBcImNvbnRlbnRfc2NyaXB0XCIgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiW2FjdGl2YXRlSGVscGVyT25UYWJdIGNvbnRlbnQgc2NyaXB0IEFDSyBmYWlsZWQg4oCUIGRpcmVjdCBpbmplY3RcIixcbiAgICAgICAgYWNrLnJlc3BvbnNlXG4gICAgICApXG4gICAgfSBjYXRjaCAocGluZ0Vycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiW2FjdGl2YXRlSGVscGVyT25UYWJdIGNvbnRlbnQgc2NyaXB0IG1pc3NpbmcsIGluamVjdGluZyBoZWxwZXIgZGlyZWN0bHk6XCIsXG4gICAgICAgIHBpbmdFcnJvciBpbnN0YW5jZW9mIEVycm9yID8gcGluZ0Vycm9yLm1lc3NhZ2UgOiBwaW5nRXJyb3JcbiAgICAgIClcbiAgICB9XG5cbiAgICBhd2FpdCBpbmplY3RIZWxwZXJEaXJlY3RseSh0YWJJZClcbiAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IHRydWUsIG1vZGU6IFwiZGlyZWN0X2luamVjdFwiIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlthY3RpdmF0ZUhlbHBlck9uVGFiXSBmYWlsZWQ6XCIsIGVycm9yKVxuICAgIHJlcy5zZW5kKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgICAgICA/IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICA6IFwiQ291bGQgbm90IGFjdGl2YXRlIGhlbHBlciDigJQgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uXCJcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5pbXBvcnQge1xuICBnZXRPcmFjbGVDYXB0dXJlLFxuICB1cGRhdGVPcmFjbGVDYXB0dXJlSXRlbXNcbn0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9vcmFjbGUtbG92LWNhcHR1cmVcIlxuXG5jb25zdCBSRUFEX1BBR0VfQ0FQVFVSRSA9IGZ1bmN0aW9uIHJlYWRPcmFjbGVMb3ZGcm9tUGFnZSgpIHtcbiAgY29uc3QgdyA9IHdpbmRvdyBhcyB1bmtub3duIGFzIHtcbiAgICBfX2pyT3JhY2xlTG92PzogeyBpdGVtczogdW5rbm93bltdOyBsYXN0VXJsOiBzdHJpbmc7IGNhcHR1cmVJZDogc3RyaW5nIH1cbiAgfVxuICByZXR1cm4gdy5fX2pyT3JhY2xlTG92IHx8IG51bGxcbn1cblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2FwdHVyZUlkID1cbiAgICAgIHR5cGVvZiByZXEuYm9keT8uY2FwdHVyZUlkID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkuY2FwdHVyZUlkIDogXCJcIlxuICAgIGlmICghY2FwdHVyZUlkKSB7XG4gICAgICByZXMuc2VuZCh7IG9rOiBmYWxzZSwgbWVzc2FnZTogXCJjYXB0dXJlSWRfcmVxdWlyZWRcIiwgaXRlbXM6IFtdIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YWJJZCA9XG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LnRhYklkID09PSBcIm51bWJlclwiXG4gICAgICAgID8gcmVxLmJvZHkudGFiSWRcbiAgICAgICAgOiAoXG4gICAgICAgICAgICBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KVxuICAgICAgICAgIClbMF0/LmlkXG5cbiAgICBsZXQgcGFnZUl0ZW1zOiB1bmtub3duW10gPSBbXVxuICAgIGlmICh0YWJJZCkge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICB3b3JsZDogXCJNQUlOXCIsXG4gICAgICAgIGZ1bmM6IFJFQURfUEFHRV9DQVBUVVJFXG4gICAgICB9KVxuICAgICAgY29uc3QgcGFnZSA9IHJlc3VsdHM/LlswXT8ucmVzdWx0IGFzIHtcbiAgICAgICAgaXRlbXM/OiB1bmtub3duW11cbiAgICAgICAgY2FwdHVyZUlkPzogc3RyaW5nXG4gICAgICB9IHwgbnVsbFxuICAgICAgaWYgKHBhZ2U/Lml0ZW1zPy5sZW5ndGgpIHtcbiAgICAgICAgcGFnZUl0ZW1zID0gcGFnZS5pdGVtc1xuICAgICAgICB1cGRhdGVPcmFjbGVDYXB0dXJlSXRlbXMoY2FwdHVyZUlkLCBwYWdlSXRlbXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVkID0gZ2V0T3JhY2xlQ2FwdHVyZShjYXB0dXJlSWQpXG4gICAgY29uc3QgaXRlbXMgPSBwYWdlSXRlbXMubGVuZ3RoID8gcGFnZUl0ZW1zIDogc3RvcmVkPy5pdGVtcyB8fCBbXVxuXG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IHRydWUsXG4gICAgICBjYXB0dXJlSWQsXG4gICAgICBpdGVtcyxcbiAgICAgIGZpZWxkOiBzdG9yZWQ/LmZpZWxkLFxuICAgICAgc2VhcmNoOiBzdG9yZWQ/LnNlYXJjaFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcImNvbnN1bWVfZmFpbGVkXCJcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsInR5cGUgQ2FwdHVyZSA9IHtcbiAgZmllbGQ6IHN0cmluZ1xuICBzZWFyY2g6IHN0cmluZ1xuICBpdGVtczogdW5rbm93bltdXG4gIGNyZWF0ZWRBdDogbnVtYmVyXG59XG5cbmNvbnN0IGNhcHR1cmVzID0gbmV3IE1hcDxzdHJpbmcsIENhcHR1cmU+KClcblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yYWNsZUNhcHR1cmUoXG4gIGlkOiBzdHJpbmcsXG4gIGRhdGE6IHsgZmllbGQ6IHN0cmluZzsgc2VhcmNoOiBzdHJpbmc7IGl0ZW1zOiB1bmtub3duW10gfVxuKSB7XG4gIGNhcHR1cmVzLnNldChpZCwgeyAuLi5kYXRhLCBjcmVhdGVkQXQ6IERhdGUubm93KCkgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yYWNsZUNhcHR1cmUoaWQ6IHN0cmluZykge1xuICByZXR1cm4gY2FwdHVyZXMuZ2V0KGlkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT3JhY2xlQ2FwdHVyZUl0ZW1zKGlkOiBzdHJpbmcsIGl0ZW1zOiB1bmtub3duW10pIHtcbiAgY29uc3QgcHJldiA9IGNhcHR1cmVzLmdldChpZClcbiAgaWYgKCFwcmV2KSB7XG4gICAgY2FwdHVyZXMuc2V0KGlkLCB7XG4gICAgICBmaWVsZDogXCJcIixcbiAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgIGl0ZW1zLFxuICAgICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuICBjYXB0dXJlcy5zZXQoaWQsIHsgLi4ucHJldiwgaXRlbXMgfSlcbn1cbiIsImltcG9ydCB7IHNvZnRPayB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdE9rKFwiY29udmVydFJlc3VtZVBkZlRvV29yZFwiKVxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBObyBMaW5rZWRJbuKGlGV4dGVybmFsIGlkIHN0b3JlIHlldCDigJQgcmVwb3J0IHplcm8uICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKDApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB7IHNvZnRPayB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdE9rKFwiZmx1c2hBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvblwiKVxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7IGdlbmVyYXRlQ292ZXJMZXR0ZXIgfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXG5cbi8qKlxuICogSm9icmlnaHQgc2hhcGU6IHsgZGF0YTogeyBtYXJrZG93biwgY292ZXJMZXR0ZXJJZCwgam9iSWQgfSwgZXJyb3I/OiB7IEhUVFBfU1RBVFVTIH0gfVxuICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBqb2JJZCA9XG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LmpvYklkID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkuam9iSWQudHJpbSgpIDogXCJcIlxuICAgIGNvbnN0IHVzZXJQcm9tcHQgPVxuICAgICAgdHlwZW9mIHJlcS5ib2R5Py51c2VyUHJvbXB0ID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkudXNlclByb21wdC50cmltKCkgOiBcIlwiXG5cbiAgICBpZiAoIWpvYklkIHx8ICF1c2VyUHJvbXB0KSB7XG4gICAgICByZXMuc2VuZCh7XG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIGVycm9yOiB7IEhUVFBfU1RBVFVTOiA0MDAsIGVycm9yTXNnOiBcIk1pc3Npbmcgam9iSWQgb3IgdXNlclByb21wdFwiIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZW5lcmF0ZUNvdmVyTGV0dGVyKHtcbiAgICAgIGpvYklkLFxuICAgICAgdXNlclByb21wdCxcbiAgICAgIHJlc3VtZUlkOiByZXEuYm9keT8ucmVzdW1lSWQsXG4gICAgICB0YWlsb3JJZDogcmVxLmJvZHk/LnRhaWxvcklkLFxuICAgICAgY292ZXJMZXR0ZXJJZDpcbiAgICAgICAgdHlwZW9mIHJlcS5ib2R5Py5jb3ZlckxldHRlcklkID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgPyByZXEuYm9keS5jb3ZlckxldHRlcklkXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBjdXJyZW50Q292ZXJMZXR0ZXI6XG4gICAgICAgIHR5cGVvZiByZXEuYm9keT8uY3VycmVudENvdmVyTGV0dGVyID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgPyByZXEuYm9keS5jdXJyZW50Q292ZXJMZXR0ZXJcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHByb2ZpbGVJZDpcbiAgICAgICAgdHlwZW9mIHJlcS5ib2R5Py5wcm9maWxlSWQgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5wcm9maWxlSWQgOiBudWxsLFxuICAgICAgam9iQ29udGV4dDpcbiAgICAgICAgcmVxLmJvZHk/LmpvYkNvbnRleHQgJiYgdHlwZW9mIHJlcS5ib2R5LmpvYkNvbnRleHQgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICA/IHJlcS5ib2R5LmpvYkNvbnRleHRcbiAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH0pXG5cbiAgICBpZiAoIXJlc3VsdC5vayB8fCAhcmVzdWx0LmRhdGEpIHtcbiAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBIVFRQX1NUQVRVUzogcmVzdWx0LnN0YXR1cyB8fCA1MDAsXG4gICAgICAgICAgZXJyb3JNc2c6IHJlc3VsdC5lcnJvciB8fCBcImNvdmVyX2xldHRlcl9mYWlsZWRcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmVzLnNlbmQoeyBkYXRhOiByZXN1bHQuZGF0YSB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc2VuZCh7XG4gICAgICBkYXRhOiBudWxsLFxuICAgICAgZXJyb3I6IHtcbiAgICAgICAgSFRUUF9TVEFUVVM6IDUwMCxcbiAgICAgICAgZXJyb3JNc2c6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIlxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiLyoqXG4gKiBUZWFtIEF1dG9maWxsIEh1YiBjbGllbnQg4oCUIHRhbGtzIHRvIHRlYW0tc2l0ZSAvYXBpIHdpdGggc2Vzc2lvbiBKV1Qgb3IgQVBJIHRva2VuLlxuICovXG5cbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiQHBsYXNtb2hxL3N0b3JhZ2VcIlxuXG5pbXBvcnQgeyBURUFNX1NJVEVfVVJMLCBnZXRIdWJVcmwgfSBmcm9tIFwifmFwaS9odWItZW52XCJcbmltcG9ydCB0eXBlIHsgQXV0b2ZpbGxJbmZvUGF5bG9hZCwgUHJvZmlsZVN1bW1hcnksIFRlYW1TZXR0aW5ncyB9IGZyb20gXCJ+YXBpL3RlYW0tdHlwZXNcIlxuXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoeyBhcmVhOiBcImxvY2FsXCIgfSlcblxuZXhwb3J0IGNvbnN0IFRFQU1fU0VUVElOR1NfS0VZID0gXCJ0ZWFtSHViU2V0dGluZ3NcIlxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9URUFNX1NFVFRJTkdTOiBUZWFtU2V0dGluZ3MgPSB7XG4gIHNpdGVVcmw6IGdldEh1YlVybCgpLFxuICBhcGlUb2tlbjogXCJcIixcbiAgc2VsZWN0ZWRQcm9maWxlSWQ6IG51bGwsXG4gIHVzZXJFbWFpbDogXCJcIixcbiAgdXNlck5hbWU6IFwiXCJcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRlYW1TZXR0aW5ncygpOiBQcm9taXNlPFRlYW1TZXR0aW5ncz4ge1xuICBjb25zdCBzYXZlZCA9IGF3YWl0IHN0b3JhZ2UuZ2V0PFRlYW1TZXR0aW5ncz4oVEVBTV9TRVRUSU5HU19LRVkpXG4gIHJldHVybiB7IC4uLkRFRkFVTFRfVEVBTV9TRVRUSU5HUywgLi4uKHNhdmVkIHx8IHt9KSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlVGVhbVNldHRpbmdzKFxuICBwYXRjaDogUGFydGlhbDxUZWFtU2V0dGluZ3M+XG4pOiBQcm9taXNlPFRlYW1TZXR0aW5ncz4ge1xuICBjb25zdCBuZXh0ID0geyAuLi4oYXdhaXQgZ2V0VGVhbVNldHRpbmdzKCkpLCAuLi5wYXRjaCB9XG4gIGF3YWl0IHN0b3JhZ2Uuc2V0KFRFQU1fU0VUVElOR1NfS0VZLCBuZXh0KVxuICByZXR1cm4gbmV4dFxufVxuXG5mdW5jdGlvbiBqb2luVXJsKGJhc2U6IHN0cmluZywgcGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHJvb3QgPSBiYXNlLnJlcGxhY2UoL1xcLyskLywgXCJcIilcbiAgY29uc3QgcCA9IHBhdGguc3RhcnRzV2l0aChcIi9cIikgPyBwYXRoIDogYC8ke3BhdGh9YFxuICByZXR1cm4gYCR7cm9vdH0ke3B9YFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVhbUZldGNoPFQgPSB1bmtub3duPihcbiAgcGF0aDogc3RyaW5nLFxuICBpbml0OiBSZXF1ZXN0SW5pdCA9IHt9XG4pOiBQcm9taXNlPHsgb2s6IGJvb2xlYW47IHN0YXR1czogbnVtYmVyOyBkYXRhOiBUIH0+IHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBnZXRUZWFtU2V0dGluZ3MoKVxuICBpZiAoIXNldHRpbmdzLmFwaVRva2VuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIHN0YXR1czogNDAxLFxuICAgICAgZGF0YTogeyBvazogZmFsc2UsIGVycm9yOiBcIm5vdF9zaWduZWRfaW5cIiB9IGFzIFRcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5pdC5oZWFkZXJzIHx8IHt9KVxuICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke3NldHRpbmdzLmFwaVRva2VufWApXG4gIGlmIChpbml0LmJvZHkgJiYgIShpbml0LmJvZHkgaW5zdGFuY2VvZiBGb3JtRGF0YSkgJiYgIWhlYWRlcnMuaGFzKFwiQ29udGVudC1UeXBlXCIpKSB7XG4gICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXG4gIH1cblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChqb2luVXJsKHNldHRpbmdzLnNpdGVVcmwsIHBhdGgpLCB7XG4gICAgLi4uaW5pdCxcbiAgICBoZWFkZXJzXG4gIH0pXG5cbiAgY29uc3QgY29udGVudFR5cGUgPSByZXMuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIikgfHwgXCJcIlxuICBsZXQgZGF0YTogVFxuICBpZiAoY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgZGF0YSA9IChhd2FpdCByZXMuanNvbigpKSBhcyBUXG4gIH0gZWxzZSB7XG4gICAgZGF0YSA9IChhd2FpdCByZXMudGV4dCgpKSBhcyBUXG4gIH1cblxuICByZXR1cm4geyBvazogcmVzLm9rLCBzdGF0dXM6IHJlcy5zdGF0dXMsIGRhdGEgfVxufVxuXG4vKiogU2lnbiBpbiB3aXRoIGh1YiBlbWFpbC9wYXNzd29yZDsgc3RvcmVzIHNlc3Npb24gSldUIGZvciBBUEkgY2FsbHMuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbkluV2l0aFBhc3N3b3JkKG9wdHM6IHtcbiAgc2l0ZVVybD86IHN0cmluZ1xuICBlbWFpbDogc3RyaW5nXG4gIHBhc3N3b3JkOiBzdHJpbmdcbn0pOiBQcm9taXNlPHtcbiAgb2s6IGJvb2xlYW5cbiAgZXJyb3I/OiBzdHJpbmdcbiAgdXNlcj86IHsgZW1haWw6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1cbn0+IHtcbiAgY29uc3QgY3VycmVudCA9IGF3YWl0IGdldFRlYW1TZXR0aW5ncygpXG4gIGNvbnN0IHNpdGVVcmwgPSAob3B0cy5zaXRlVXJsIHx8IGN1cnJlbnQuc2l0ZVVybCB8fCBURUFNX1NJVEVfVVJMKS5yZXBsYWNlKFxuICAgIC9cXC8rJC8sXG4gICAgXCJcIlxuICApXG4gIGNvbnN0IGVtYWlsID0gb3B0cy5lbWFpbC50cmltKCkudG9Mb3dlckNhc2UoKVxuICBjb25zdCBwYXNzd29yZCA9IG9wdHMucGFzc3dvcmRcblxuICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgIHJldHVybiB7IG9rOiBmYWxzZSwgZXJyb3I6IFwiRW1haWwgYW5kIHBhc3N3b3JkIHJlcXVpcmVkXCIgfVxuICB9XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goam9pblVybChzaXRlVXJsLCBcIi9hcGkvYXV0aC9sb2dpblwiKSwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pXG4gIH0pXG5cbiAgY29uc3QgZGF0YSA9IChhd2FpdCByZXMuanNvbigpLmNhdGNoKCgpID0+IG51bGwpKSBhcyB7XG4gICAgb2s/OiBib29sZWFuXG4gICAgZXJyb3I/OiBzdHJpbmdcbiAgICB0b2tlbj86IHN0cmluZ1xuICAgIHVzZXI/OiB7IGVtYWlsOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgaWQ6IHN0cmluZyB9XG4gIH0gfCBudWxsXG5cbiAgaWYgKCFyZXMub2sgfHwgIWRhdGE/Lm9rIHx8ICFkYXRhLnRva2VuIHx8ICFkYXRhLnVzZXIpIHtcbiAgICBjb25zdCBlcnIgPSBkYXRhPy5lcnJvclxuICAgIGlmIChlcnIgPT09IFwiaW52YWxpZF9jcmVkZW50aWFsc1wiKSB7XG4gICAgICByZXR1cm4geyBvazogZmFsc2UsIGVycm9yOiBcIldyb25nIGVtYWlsIG9yIHBhc3N3b3JkXCIgfVxuICAgIH1cbiAgICByZXR1cm4geyBvazogZmFsc2UsIGVycm9yOiBlcnIgfHwgXCJTaWduLWluIGZhaWxlZFwiIH1cbiAgfVxuXG4gIGF3YWl0IHNhdmVUZWFtU2V0dGluZ3Moe1xuICAgIHNpdGVVcmwsXG4gICAgYXBpVG9rZW46IGRhdGEudG9rZW4sXG4gICAgdXNlckVtYWlsOiBkYXRhLnVzZXIuZW1haWwsXG4gICAgdXNlck5hbWU6IGRhdGEudXNlci5uYW1lXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBvazogdHJ1ZSxcbiAgICB1c2VyOiB7IGVtYWlsOiBkYXRhLnVzZXIuZW1haWwsIG5hbWU6IGRhdGEudXNlci5uYW1lIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgc2F2ZVRlYW1TZXR0aW5ncyh7XG4gICAgYXBpVG9rZW46IFwiXCIsXG4gICAgdXNlckVtYWlsOiBcIlwiLFxuICAgIHVzZXJOYW1lOiBcIlwiLFxuICAgIHNlbGVjdGVkUHJvZmlsZUlkOiBudWxsXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0UHJvZmlsZXMoKTogUHJvbWlzZTxQcm9maWxlU3VtbWFyeVtdPiB7XG4gIGNvbnN0IHsgb2ssIGRhdGEgfSA9IGF3YWl0IHRlYW1GZXRjaDx7XG4gICAgb2s6IGJvb2xlYW5cbiAgICBwcm9maWxlcz86IFByb2ZpbGVTdW1tYXJ5W11cbiAgICBlcnJvcj86IHN0cmluZ1xuICB9PihcIi9hcGkvdjEvcHJvZmlsZXNcIilcbiAgaWYgKCFvayB8fCAhZGF0YS5vayB8fCAhZGF0YS5wcm9maWxlcykgcmV0dXJuIFtdXG4gIHJldHVybiBkYXRhLnByb2ZpbGVzXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEF1dG9maWxsSW5mbyhcbiAgcHJvZmlsZUlkPzogc3RyaW5nIHwgbnVsbFxuKTogUHJvbWlzZTxBdXRvZmlsbEluZm9QYXlsb2FkIHwgbnVsbD4ge1xuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFRlYW1TZXR0aW5ncygpXG4gIGNvbnN0IGlkID0gcHJvZmlsZUlkIHx8IHNldHRpbmdzLnNlbGVjdGVkUHJvZmlsZUlkXG4gIGlmICghaWQpIHJldHVybiBudWxsXG5cbiAgY29uc3QgeyBvaywgZGF0YSB9ID0gYXdhaXQgdGVhbUZldGNoPHtcbiAgICBvazogYm9vbGVhblxuICAgIGF1dG9maWxsSW5mbz86IEF1dG9maWxsSW5mb1BheWxvYWRcbiAgfT4oYC9hcGkvdjEvcHJvZmlsZXMvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfT9hdXRvZmlsbD0xYClcblxuICBpZiAoIW9rIHx8ICFkYXRhLm9rIHx8ICFkYXRhLmF1dG9maWxsSW5mbykgcmV0dXJuIG51bGxcbiAgcmV0dXJuIGRhdGEuYXV0b2ZpbGxJbmZvXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFJlc3VtZUJsb2IoXG4gIHJlc3VtZUlkOiBzdHJpbmdcbik6IFByb21pc2U8eyBibG9iOiBCbG9iOyBmaWxlTmFtZTogc3RyaW5nOyBtaW1lVHlwZTogc3RyaW5nIH0gfCBudWxsPiB7XG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0VGVhbVNldHRpbmdzKClcbiAgaWYgKCFzZXR0aW5ncy5hcGlUb2tlbikgcmV0dXJuIG51bGxcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBqb2luVXJsKHNldHRpbmdzLnNpdGVVcmwsIGAvYXBpL3YxL3Jlc3VtZXMvJHtlbmNvZGVVUklDb21wb25lbnQocmVzdW1lSWQpfS9kb3dubG9hZGApLFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3NldHRpbmdzLmFwaVRva2VufWAgfVxuICAgIH1cbiAgKVxuICBpZiAoIXJlcy5vaykgcmV0dXJuIG51bGxcblxuICBjb25zdCBibG9iID0gYXdhaXQgcmVzLmJsb2IoKVxuICBjb25zdCBkaXNwb3NpdGlvbiA9IHJlcy5oZWFkZXJzLmdldChcImNvbnRlbnQtZGlzcG9zaXRpb25cIikgfHwgXCJcIlxuICBjb25zdCBtYXRjaCA9IC9maWxlbmFtZT1cIihbXlwiXSspXCIvaS5leGVjKGRpc3Bvc2l0aW9uKVxuICByZXR1cm4ge1xuICAgIGJsb2IsXG4gICAgZmlsZU5hbWU6IG1hdGNoPy5bMV0gfHwgXCJyZXN1bWUucGRmXCIsXG4gICAgbWltZVR5cGU6IHJlcy5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSB8fCBibG9iLnR5cGUgfHwgXCJhcHBsaWNhdGlvbi9wZGZcIlxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaENvdmVyTGV0dGVyQmxvYihcbiAgY292ZXJMZXR0ZXJJZDogc3RyaW5nXG4pOiBQcm9taXNlPHsgYmxvYjogQmxvYjsgZmlsZU5hbWU6IHN0cmluZzsgbWltZVR5cGU6IHN0cmluZyB9IHwgbnVsbD4ge1xuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFRlYW1TZXR0aW5ncygpXG4gIGlmICghc2V0dGluZ3MuYXBpVG9rZW4pIHJldHVybiBudWxsXG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgam9pblVybChcbiAgICAgIHNldHRpbmdzLnNpdGVVcmwsXG4gICAgICBgL2FwaS92MS9jb3Zlci1sZXR0ZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGNvdmVyTGV0dGVySWQpfS9kb3dubG9hZGBcbiAgICApLFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3NldHRpbmdzLmFwaVRva2VufWAgfVxuICAgIH1cbiAgKVxuICBpZiAoIXJlcy5vaykgcmV0dXJuIG51bGxcblxuICBjb25zdCBibG9iID0gYXdhaXQgcmVzLmJsb2IoKVxuICBjb25zdCBkaXNwb3NpdGlvbiA9IHJlcy5oZWFkZXJzLmdldChcImNvbnRlbnQtZGlzcG9zaXRpb25cIikgfHwgXCJcIlxuICBjb25zdCBtYXRjaCA9IC9maWxlbmFtZT1cIihbXlwiXSspXCIvaS5leGVjKGRpc3Bvc2l0aW9uKVxuICByZXR1cm4ge1xuICAgIGJsb2IsXG4gICAgZmlsZU5hbWU6IG1hdGNoPy5bMV0gfHwgXCJjb3Zlci1sZXR0ZXIucGRmXCIsXG4gICAgbWltZVR5cGU6IHJlcy5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSB8fCBibG9iLnR5cGUgfHwgXCJhcHBsaWNhdGlvbi9wZGZcIlxuICB9XG59XG5cbi8qKiBNZXJnZSBsZWFybmVkIFHihpJBIGludG8gdGhlIHNlbGVjdGVkIHByb2ZpbGUgb24gdGhlIGh1YiAoZ2xvYmFsICsgb3B0aW9uYWwgc2l0ZS9zdGVwKS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtZXJnZVByb2ZpbGVBbnN3ZXJzKFxuICBhbnN3ZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICBwcm9maWxlSWQ/OiBzdHJpbmcgfCBudWxsLFxuICBzY29wZT86IHtcbiAgICBzY29wZUtleT86IHN0cmluZyB8IG51bGxcbiAgICBob3N0bmFtZT86IHN0cmluZyB8IG51bGxcbiAgICBzdGVwS2V5Pzogc3RyaW5nIHwgbnVsbFxuICB9IHwgbnVsbFxuKTogUHJvbWlzZTx7XG4gIG9rOiBib29sZWFuXG4gIGFuc3dlcnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gIGV4dHJhcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGVycm9yPzogc3RyaW5nXG59PiB7XG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0VGVhbVNldHRpbmdzKClcbiAgY29uc3QgaWQgPSBwcm9maWxlSWQgfHwgc2V0dGluZ3Muc2VsZWN0ZWRQcm9maWxlSWRcbiAgaWYgKCFpZCkgcmV0dXJuIHsgb2s6IGZhbHNlLCBlcnJvcjogXCJub19wcm9maWxlXCIgfVxuICBpZiAoIU9iamVjdC5rZXlzKGFuc3dlcnMpLmxlbmd0aCkgcmV0dXJuIHsgb2s6IGZhbHNlLCBlcnJvcjogXCJlbXB0eVwiIH1cblxuICBjb25zdCBib2R5OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcbiAgICBhbnN3ZXJzLFxuICAgIGFuc3dlcnNNb2RlOiBcIm1lcmdlXCJcbiAgfVxuICBpZiAoc2NvcGU/LnNjb3BlS2V5KSB7XG4gICAgYm9keS5zY29wZUtleSA9IHNjb3BlLnNjb3BlS2V5XG4gICAgaWYgKHNjb3BlLmhvc3RuYW1lKSBib2R5Lmhvc3RuYW1lID0gc2NvcGUuaG9zdG5hbWVcbiAgICBpZiAoc2NvcGUuc3RlcEtleSkgYm9keS5zdGVwS2V5ID0gc2NvcGUuc3RlcEtleVxuICB9XG5cbiAgY29uc3QgeyBvaywgZGF0YSB9ID0gYXdhaXQgdGVhbUZldGNoPHtcbiAgICBvazogYm9vbGVhblxuICAgIGFuc3dlcnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgZXh0cmFzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICBlcnJvcj86IHN0cmluZ1xuICB9PihgL2FwaS92MS9wcm9maWxlcy8ke2VuY29kZVVSSUNvbXBvbmVudChpZCl9YCwge1xuICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG4gIH0pXG5cbiAgaWYgKCFvayB8fCAhZGF0YS5vaykge1xuICAgIHJldHVybiB7IG9rOiBmYWxzZSwgZXJyb3I6IGRhdGEuZXJyb3IgfHwgXCJzYXZlX2ZhaWxlZFwiIH1cbiAgfVxuICByZXR1cm4geyBvazogdHJ1ZSwgYW5zd2VyczogZGF0YS5hbnN3ZXJzLCBleHRyYXM6IGRhdGEuZXh0cmFzIH1cbn1cblxuLyoqIExvZyBhIHN1Y2Nlc3NmdWwgam9iIGFwcGxpY2F0aW9uIHRvIHRoZSBodWIgR29vZ2xlIFNoZWV0LiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ0FwcGxpY2F0aW9uKHJvdzoge1xuICBwcm9maWxlSWQ/OiBzdHJpbmcgfCBudWxsXG4gIGNvdW50cnk/OiBzdHJpbmdcbiAgcmVzdW1lPzogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgbGluazogc3RyaW5nXG4gIGNvbXBhbnk/OiBzdHJpbmdcbiAgY29zdD86IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbiAgb3RoZXI/OiBzdHJpbmdcbiAgdGFiTmFtZT86IHN0cmluZ1xufSk6IFByb21pc2U8eyBvazogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IG1lc3NhZ2U/OiBzdHJpbmc7IHRhYk5hbWU/OiBzdHJpbmcgfT4ge1xuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFRlYW1TZXR0aW5ncygpXG4gIGNvbnN0IHByb2ZpbGVJZCA9IHJvdy5wcm9maWxlSWQgfHwgc2V0dGluZ3Muc2VsZWN0ZWRQcm9maWxlSWRcbiAgY29uc3QgeyBvaywgZGF0YSB9ID0gYXdhaXQgdGVhbUZldGNoPHtcbiAgICBvazogYm9vbGVhblxuICAgIGVycm9yPzogc3RyaW5nXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuICAgIHRhYk5hbWU/OiBzdHJpbmdcbiAgfT4oXCIvYXBpL3YxL2FwcGxpY2F0aW9ucy9sb2dcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4ucm93LFxuICAgICAgcHJvZmlsZUlkOiBwcm9maWxlSWQgfHwgdW5kZWZpbmVkLFxuICAgICAgc3RhdHVzOiByb3cuc3RhdHVzIHx8IFwiYXBwbGllZFwiXG4gICAgfSlcbiAgfSlcbiAgaWYgKCFvayB8fCAhZGF0YS5vaykge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBlcnJvcjogZGF0YS5lcnJvciB8fCBcImxvZ19mYWlsZWRcIixcbiAgICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcbiAgICAgIHRhYk5hbWU6IGRhdGEudGFiTmFtZVxuICAgIH1cbiAgfVxuICByZXR1cm4geyBvazogdHJ1ZSwgdGFiTmFtZTogZGF0YS50YWJOYW1lIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVRlYW1Db25uZWN0aW9uKCk6IFByb21pc2U8e1xuICBvazogYm9vbGVhblxuICBlbWFpbD86IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nXG4gIGVycm9yPzogc3RyaW5nXG59PiB7XG4gIGNvbnN0IHsgb2ssIGRhdGEgfSA9IGF3YWl0IHRlYW1GZXRjaDx7XG4gICAgb2s6IGJvb2xlYW5cbiAgICB1c2VyPzogeyBlbWFpbDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVxuICAgIGVycm9yPzogc3RyaW5nXG4gIH0+KFwiL2FwaS9hdXRoL21lXCIpXG5cbiAgaWYgKCFvayB8fCAhZGF0YS5vayB8fCAhZGF0YS51c2VyKSB7XG4gICAgcmV0dXJuIHsgb2s6IGZhbHNlLCBlcnJvcjogZGF0YS5lcnJvciB8fCBcInVuYXV0aG9yaXplZFwiIH1cbiAgfVxuICByZXR1cm4geyBvazogdHJ1ZSwgZW1haWw6IGRhdGEudXNlci5lbWFpbCwgbmFtZTogZGF0YS51c2VyLm5hbWUgfVxufVxuXG4vKiogTExNIHJlZ2VuZXJhdGUgYSBmb3JtLWZpZWxkIGFuc3dlciB2aWEgaHViLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2VuZXJhdGVBbnN3ZXIoYm9keToge1xuICBwcm9maWxlSWQ/OiBzdHJpbmcgfCBudWxsXG4gIHF1ZXN0aW9uOiBzdHJpbmdcbiAgcHJvbXB0TGlzdD86IHN0cmluZ1tdXG4gIGZpZWxkSW5wdXQ/OiBzdHJpbmcgfCBudWxsXG4gIHVuaXF1ZUlkPzogc3RyaW5nIHwgbnVsbFxuICBqb2JJZD86IHN0cmluZyB8IG51bGxcbiAgam9iQ29udGV4dD86IHtcbiAgICB0aXRsZT86IHN0cmluZ1xuICAgIGNvbXBhbnk/OiBzdHJpbmdcbiAgICB1cmw/OiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICB9XG59KTogUHJvbWlzZTx7XG4gIG9rOiBib29sZWFuXG4gIGFuc3dlcj86IHN0cmluZ1xuICB1bmlxdWVJZD86IHN0cmluZyB8IG51bGxcbiAgcmVnZW5lcmF0ZWQ/OiBib29sZWFuXG4gIGVycm9yPzogc3RyaW5nXG4gIHN0YXR1cz86IG51bWJlclxufT4ge1xuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFRlYW1TZXR0aW5ncygpXG4gIGNvbnN0IHsgb2ssIHN0YXR1cywgZGF0YSB9ID0gYXdhaXQgdGVhbUZldGNoPHtcbiAgICBvaz86IGJvb2xlYW5cbiAgICBhbnN3ZXI/OiBzdHJpbmdcbiAgICB1bmlxdWVJZD86IHN0cmluZyB8IG51bGxcbiAgICByZWdlbmVyYXRlZD86IGJvb2xlYW5cbiAgICBlcnJvcj86IHN0cmluZ1xuICB9PihcIi9hcGkvdjEvYWkvcmVnZW5lcmF0ZS1hbnN3ZXJcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4uYm9keSxcbiAgICAgIHByb2ZpbGVJZDogYm9keS5wcm9maWxlSWQgfHwgc2V0dGluZ3Muc2VsZWN0ZWRQcm9maWxlSWQgfHwgdW5kZWZpbmVkXG4gICAgfSlcbiAgfSlcbiAgaWYgKCFvayB8fCAhZGF0YT8ub2sgfHwgIWRhdGEuYW5zd2VyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIGVycm9yOiBkYXRhPy5lcnJvciB8fCBcInJlZ2VuZXJhdGVfZmFpbGVkXCIsXG4gICAgICBzdGF0dXNcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvazogdHJ1ZSxcbiAgICBhbnN3ZXI6IGRhdGEuYW5zd2VyLFxuICAgIHVuaXF1ZUlkOiBkYXRhLnVuaXF1ZUlkID8/IG51bGwsXG4gICAgcmVnZW5lcmF0ZWQ6ICEhZGF0YS5yZWdlbmVyYXRlZFxuICB9XG59XG5cbi8qKiBHZW5lcmF0ZSBjb3ZlciBsZXR0ZXIgbWFya2Rvd24gdmlhIGh1YiBMTE0uICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVDb3ZlckxldHRlcihib2R5OiB7XG4gIHByb2ZpbGVJZD86IHN0cmluZyB8IG51bGxcbiAgam9iSWQ6IHN0cmluZ1xuICB1c2VyUHJvbXB0OiBzdHJpbmdcbiAgcmVzdW1lSWQ/OiBzdHJpbmcgfCBudW1iZXJcbiAgdGFpbG9ySWQ/OiBzdHJpbmcgfCBudW1iZXJcbiAgY292ZXJMZXR0ZXJJZD86IHN0cmluZ1xuICBjdXJyZW50Q292ZXJMZXR0ZXI/OiBzdHJpbmdcbiAgam9iQ29udGV4dD86IHtcbiAgICB0aXRsZT86IHN0cmluZ1xuICAgIGNvbXBhbnk/OiBzdHJpbmdcbiAgICB1cmw/OiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICB9XG59KTogUHJvbWlzZTx7XG4gIG9rOiBib29sZWFuXG4gIGRhdGE/OiB7XG4gICAgbWFya2Rvd246IHN0cmluZ1xuICAgIGNvdmVyTGV0dGVySWQ/OiBzdHJpbmdcbiAgICBqb2JJZD86IHN0cmluZ1xuICAgIHJlc3VtZUlkPzogc3RyaW5nIHwgbnVsbFxuICB9XG4gIGVycm9yPzogc3RyaW5nXG4gIHN0YXR1cz86IG51bWJlclxufT4ge1xuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFRlYW1TZXR0aW5ncygpXG4gIGNvbnN0IHsgb2ssIHN0YXR1cywgZGF0YSB9ID0gYXdhaXQgdGVhbUZldGNoPHtcbiAgICBvaz86IGJvb2xlYW5cbiAgICBkYXRhPzoge1xuICAgICAgbWFya2Rvd246IHN0cmluZ1xuICAgICAgY292ZXJMZXR0ZXJJZD86IHN0cmluZ1xuICAgICAgam9iSWQ/OiBzdHJpbmdcbiAgICAgIHJlc3VtZUlkPzogc3RyaW5nIHwgbnVsbFxuICAgIH1cbiAgICByZXN1bHQ/OiB7XG4gICAgICBtYXJrZG93bjogc3RyaW5nXG4gICAgICBjb3ZlckxldHRlcklkPzogc3RyaW5nXG4gICAgICBqb2JJZD86IHN0cmluZ1xuICAgICAgcmVzdW1lSWQ/OiBzdHJpbmcgfCBudWxsXG4gICAgfVxuICAgIGVycm9yPzogc3RyaW5nXG4gIH0+KFwiL2FwaS92MS9haS9jb3Zlci1sZXR0ZXJcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLi4uYm9keSxcbiAgICAgIHByb2ZpbGVJZDogYm9keS5wcm9maWxlSWQgfHwgc2V0dGluZ3Muc2VsZWN0ZWRQcm9maWxlSWQgfHwgdW5kZWZpbmVkXG4gICAgfSlcbiAgfSlcbiAgY29uc3QgcGF5bG9hZCA9IGRhdGE/LmRhdGEgfHwgZGF0YT8ucmVzdWx0XG4gIGlmICghb2sgfHwgIXBheWxvYWQ/Lm1hcmtkb3duKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIGVycm9yOiBkYXRhPy5lcnJvciB8fCBcImNvdmVyX2xldHRlcl9mYWlsZWRcIixcbiAgICAgIHN0YXR1c1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBvazogdHJ1ZSwgZGF0YTogcGF5bG9hZCB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaERlZ3JlZVN1Z2dlc3Rpb25zKGlucHV0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHsgb2ssIGRhdGEgfSA9IGF3YWl0IHRlYW1GZXRjaDx7XG4gICAgb2s/OiBib29sZWFuXG4gICAgcmVzdWx0Pzogc3RyaW5nW11cbiAgICByZXN1bHRzPzogc3RyaW5nW11cbiAgfT4oXCIvYXBpL3YxL3N1Z2dlc3Rpb25zL2RlZ3JlZXNcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpbnB1dCB9KVxuICB9KVxuICBpZiAoIW9rKSByZXR1cm4gW11cbiAgcmV0dXJuIGRhdGEucmVzdWx0cyB8fCBkYXRhLnJlc3VsdCB8fCBbXVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNYWpvclN1Z2dlc3Rpb25zKGlucHV0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHsgb2ssIGRhdGEgfSA9IGF3YWl0IHRlYW1GZXRjaDx7XG4gICAgb2s/OiBib29sZWFuXG4gICAgcmVzdWx0Pzogc3RyaW5nW11cbiAgICByZXN1bHRzPzogc3RyaW5nW11cbiAgfT4oXCIvYXBpL3YxL3N1Z2dlc3Rpb25zL21ham9yc1wiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlucHV0IH0pXG4gIH0pXG4gIGlmICghb2spIHJldHVybiBbXVxuICByZXR1cm4gZGF0YS5yZXN1bHRzIHx8IGRhdGEucmVzdWx0IHx8IFtdXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaENvbXBhbnlOYW1lTGlzdChcbiAgaW5wdXQ6IHN0cmluZyxcbiAgY29tcGFueUlkPzogc3RyaW5nXG4pOiBQcm9taXNlPFxuICBBcnJheTx7XG4gICAgY29tcGFueU5hbWU6IHN0cmluZ1xuICAgIGxpbmtlZGluX2NvbXBhbnlfaWQ6IHN0cmluZ1xuICAgIGxsb2dvVXJsPzogc3RyaW5nXG4gIH0+XG4+IHtcbiAgY29uc3QgeyBvaywgZGF0YSB9ID0gYXdhaXQgdGVhbUZldGNoPHtcbiAgICBvaz86IGJvb2xlYW5cbiAgICByZXN1bHQ/OiBBcnJheTx7XG4gICAgICBjb21wYW55TmFtZTogc3RyaW5nXG4gICAgICBsaW5rZWRpbl9jb21wYW55X2lkOiBzdHJpbmdcbiAgICAgIGxsb2dvVXJsPzogc3RyaW5nXG4gICAgfT5cbiAgICByZXN1bHRzPzogQXJyYXk8e1xuICAgICAgY29tcGFueU5hbWU6IHN0cmluZ1xuICAgICAgbGlua2VkaW5fY29tcGFueV9pZDogc3RyaW5nXG4gICAgICBsbG9nb1VybD86IHN0cmluZ1xuICAgIH0+XG4gIH0+KFwiL2FwaS92MS9zdWdnZXN0aW9ucy9jb21wYW5pZXNcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpbnB1dCwgY29tcGFueUlkIH0pXG4gIH0pXG4gIGlmICghb2spIHJldHVybiBbXVxuICByZXR1cm4gZGF0YS5yZXN1bHRzIHx8IGRhdGEucmVzdWx0IHx8IFtdXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFkZHJlc3NTdWdnZXN0aW9ucyhib2R5OiB7XG4gIGlucHV0OiBzdHJpbmdcbiAgc2Vzc2lvblRva2VuPzogc3RyaW5nXG4gIGNvdW50cnlDb2Rlcz86IHN0cmluZ1tdXG4gIGxpbWl0PzogbnVtYmVyXG59KTogUHJvbWlzZTxBcnJheTx7IHBsYWNlSWQ6IHN0cmluZzsgZGlzcGxheUFkZHJlc3M6IHN0cmluZyB9Pj4ge1xuICBjb25zdCB7IG9rLCBkYXRhIH0gPSBhd2FpdCB0ZWFtRmV0Y2g8e1xuICAgIG9rPzogYm9vbGVhblxuICAgIHJlc3VsdD86IEFycmF5PHsgcGxhY2VJZDogc3RyaW5nOyBkaXNwbGF5QWRkcmVzczogc3RyaW5nIH0+XG4gICAgc3VnZ2VzdGlvbnM/OiBBcnJheTx7IHBsYWNlSWQ6IHN0cmluZzsgZGlzcGxheUFkZHJlc3M6IHN0cmluZyB9PlxuICB9PihcIi9hcGkvdjEvYWRkcmVzcy9hdXRvY29tcGxldGVcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgfSlcbiAgaWYgKCFvaykgcmV0dXJuIFtdXG4gIHJldHVybiBkYXRhLnN1Z2dlc3Rpb25zIHx8IGRhdGEucmVzdWx0IHx8IFtdXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlQWRkcmVzc1N1Z2dlc3Rpb24oYm9keToge1xuICBwbGFjZUlkOiBzdHJpbmdcbiAgc2Vzc2lvblRva2VuPzogc3RyaW5nXG59KTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGw+IHtcbiAgY29uc3QgeyBvaywgZGF0YSB9ID0gYXdhaXQgdGVhbUZldGNoPHtcbiAgICBvaz86IGJvb2xlYW5cbiAgICByZXN1bHQ/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGxcbiAgfT4oXCIvYXBpL3YxL2FkZHJlc3MvcmVzb2x2ZVwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICB9KVxuICBpZiAoIW9rKSByZXR1cm4gbnVsbFxuICByZXR1cm4gZGF0YS5yZXN1bHQgPz8gbnVsbFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hPcGVuUmVnaW9ucyhcbiAgY291bnRyeTogc3RyaW5nXG4pOiBQcm9taXNlPEFycmF5PHsgY29kZTogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfT4+IHtcbiAgY29uc3QgeyBvaywgZGF0YSB9ID0gYXdhaXQgdGVhbUZldGNoPHtcbiAgICBvaz86IGJvb2xlYW5cbiAgICByZXN1bHQ/OiBBcnJheTx7IGNvZGU6IHN0cmluZzsgbmFtZTogc3RyaW5nIH0+XG4gIH0+KFwiL2FwaS92MS9nZW8vcmVnaW9uc1wiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvdW50cnkgfSlcbiAgfSlcbiAgaWYgKCFvaykgcmV0dXJuIFtdXG4gIHJldHVybiBkYXRhLnJlc3VsdCB8fCBbXVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hPcGVuQ2l0aWVzQnlSZWdpb24oXG4gIGNvdW50cnk6IHN0cmluZyxcbiAgcmVnaW9uOiBzdHJpbmdcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgeyBvaywgZGF0YSB9ID0gYXdhaXQgdGVhbUZldGNoPHtcbiAgICBvaz86IGJvb2xlYW5cbiAgICByZXN1bHQ/OiBzdHJpbmdbXVxuICB9PihcIi9hcGkvdjEvZ2VvL2NpdGllc1wiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvdW50cnksIHJlZ2lvbiB9KVxuICB9KVxuICBpZiAoIW9rKSByZXR1cm4gW11cbiAgcmV0dXJuIGRhdGEucmVzdWx0IHx8IFtdXG59XG4iLCJpbXBvcnQgbSBmcm9tXCJwaWZ5XCI7dmFyIGw9KCk9Pnt0cnl7bGV0IGU9KGdsb2JhbFRoaXMubmF2aWdhdG9yPy51c2VyQWdlbnQpLm1hdGNoKC8ob3BlcmF8Y2hyb21lfHNhZmFyaXxmaXJlZm94fG1zaWV8dHJpZGVudCg/PVxcLykpXFwvP1xccyooXFxkKykvaSl8fFtdO2lmKGVbMV09PT1cIkNocm9tZVwiKXJldHVybiBwYXJzZUludChlWzJdKTwxMDB8fGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWU/LmdldE1hbmlmZXN0KCk/Lm1hbmlmZXN0X3ZlcnNpb249PT0yfWNhdGNoe3JldHVybiExfXJldHVybiExfTt2YXIgbz1jbGFzc3sjcjsjdDtnZXQgcHJpbWFyeUNsaWVudCgpe3JldHVybiB0aGlzLiN0fSNlO2dldCBzZWNvbmRhcnlDbGllbnQoKXtyZXR1cm4gdGhpcy4jZX0jYTtnZXQgYXJlYSgpe3JldHVybiB0aGlzLiNhfWdldCBoYXNXZWJBcGkoKXt0cnl7cmV0dXJuIHR5cGVvZiB3aW5kb3c8XCJ1XCImJiEhd2luZG93LmxvY2FsU3RvcmFnZX1jYXRjaChlKXtyZXR1cm4gY29uc29sZS5lcnJvcihlKSwhMX19I3M9bmV3IE1hcDsjaTtnZXQgY29waWVkS2V5U2V0KCl7cmV0dXJuIHRoaXMuI2l9aXNDb3BpZWQ9ZT0+dGhpcy5oYXNXZWJBcGkmJih0aGlzLmFsbENvcGllZHx8dGhpcy5jb3BpZWRLZXlTZXQuaGFzKGUpKTsjbj0hMTtnZXQgYWxsQ29waWVkKCl7cmV0dXJuIHRoaXMuI259Z2V0RXh0U3RvcmFnZUFwaT0oKT0+Z2xvYmFsVGhpcy5icm93c2VyPy5zdG9yYWdlfHxnbG9iYWxUaGlzLmNocm9tZT8uc3RvcmFnZTtnZXQgaGFzRXh0ZW5zaW9uQXBpKCl7dHJ5e3JldHVybiEhdGhpcy5nZXRFeHRTdG9yYWdlQXBpKCl9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoZSksITF9fWlzV2F0Y2hTdXBwb3J0ZWQ9KCk9PnRoaXMuaGFzRXh0ZW5zaW9uQXBpO2tleU5hbWVzcGFjZT1cIlwiO2lzVmFsaWRLZXk9ZT0+ZS5zdGFydHNXaXRoKHRoaXMua2V5TmFtZXNwYWNlKTtnZXROYW1lc3BhY2VkS2V5PWU9PmAke3RoaXMua2V5TmFtZXNwYWNlfSR7ZX1gO2dldFVubmFtZXNwYWNlZEtleT1lPT5lLnNsaWNlKHRoaXMua2V5TmFtZXNwYWNlLmxlbmd0aCk7c2VyZGU9e3NlcmlhbGl6ZXI6SlNPTi5zdHJpbmdpZnksZGVzZXJpYWxpemVyOkpTT04ucGFyc2V9O2NvbnN0cnVjdG9yKHthcmVhOmU9XCJzeW5jXCIsYWxsQ29waWVkOnQ9ITEsY29waWVkS2V5TGlzdDpzPVtdLHNlcmRlOnI9e319PXt9KXt0aGlzLnNldENvcGllZEtleVNldChzKSx0aGlzLiNhPWUsdGhpcy4jbj10LHRoaXMuc2VyZGU9ey4uLnRoaXMuc2VyZGUsLi4ucn07dHJ5e3RoaXMuaGFzV2ViQXBpJiYodHx8cy5sZW5ndGg+MCkmJih0aGlzLiNlPXdpbmRvdy5sb2NhbFN0b3JhZ2UpfWNhdGNoe310cnl7dGhpcy5oYXNFeHRlbnNpb25BcGkmJih0aGlzLiNyPXRoaXMuZ2V0RXh0U3RvcmFnZUFwaSgpLGwoKT90aGlzLiN0PW0odGhpcy4jclt0aGlzLmFyZWFdLHtleGNsdWRlOltcImdldEJ5dGVzSW5Vc2VcIl0sZXJyb3JGaXJzdDohMX0pOnRoaXMuI3Q9dGhpcy4jclt0aGlzLmFyZWFdKX1jYXRjaHt9fXNldENvcGllZEtleVNldChlKXt0aGlzLiNpPW5ldyBTZXQoZSl9cmF3R2V0QWxsPSgpPT50aGlzLiN0Py5nZXQoKTtnZXRBbGw9YXN5bmMoKT0+e2xldCBlPWF3YWl0IHRoaXMucmF3R2V0QWxsKCk7cmV0dXJuIE9iamVjdC5lbnRyaWVzKGUpLmZpbHRlcigoW3RdKT0+dGhpcy5pc1ZhbGlkS2V5KHQpKS5yZWR1Y2UoKHQsW3Mscl0pPT4odFt0aGlzLmdldFVubmFtZXNwYWNlZEtleShzKV09cix0KSx7fSl9O2NvcHk9YXN5bmMgZT0+e2xldCB0PWU9PT12b2lkIDA7aWYoIXQmJiF0aGlzLmNvcGllZEtleVNldC5oYXMoZSl8fCF0aGlzLmFsbENvcGllZHx8IXRoaXMuaGFzRXh0ZW5zaW9uQXBpKXJldHVybiExO2xldCBzPXRoaXMuYWxsQ29waWVkP2F3YWl0IHRoaXMucmF3R2V0QWxsKCk6YXdhaXQgdGhpcy4jdC5nZXQoKHQ/Wy4uLnRoaXMuY29waWVkS2V5U2V0XTpbZV0pLm1hcCh0aGlzLmdldE5hbWVzcGFjZWRLZXkpKTtpZighcylyZXR1cm4hMTtsZXQgcj0hMTtmb3IobGV0IGEgaW4gcyl7bGV0IGk9c1thXSxuPXRoaXMuI2U/LmdldEl0ZW0oYSk7dGhpcy4jZT8uc2V0SXRlbShhLGkpLHJ8fD1pIT09bn1yZXR1cm4gcn07cmF3R2V0PWFzeW5jIGU9Pihhd2FpdCB0aGlzLnJhd0dldE1hbnkoW2VdKSlbZV07cmF3R2V0TWFueT1hc3luYyBlPT50aGlzLmhhc0V4dGVuc2lvbkFwaT9hd2FpdCB0aGlzLiN0LmdldChlKTplLmZpbHRlcih0aGlzLmlzQ29waWVkKS5yZWR1Y2UoKHQscyk9Pih0W3NdPXRoaXMuI2U/LmdldEl0ZW0ocyksdCkse30pO3Jhd1NldD1hc3luYyhlLHQpPT5hd2FpdCB0aGlzLnJhd1NldE1hbnkoe1tlXTp0fSk7cmF3U2V0TWFueT1hc3luYyBlPT4odGhpcy4jZSYmT2JqZWN0LmVudHJpZXMoZSkuZmlsdGVyKChbdF0pPT50aGlzLmlzQ29waWVkKHQpKS5mb3JFYWNoKChbdCxzXSk9PnRoaXMuI2Uuc2V0SXRlbSh0LHMpKSx0aGlzLmhhc0V4dGVuc2lvbkFwaSYmYXdhaXQgdGhpcy4jdC5zZXQoZSksbnVsbCk7Y2xlYXI9YXN5bmMoZT0hMSk9PntlJiZ0aGlzLiNlPy5jbGVhcigpLGF3YWl0IHRoaXMuI3QuY2xlYXIoKX07cmF3UmVtb3ZlPWFzeW5jIGU9Pnthd2FpdCB0aGlzLnJhd1JlbW92ZU1hbnkoW2VdKX07cmF3UmVtb3ZlTWFueT1hc3luYyBlPT57dGhpcy4jZSYmZS5maWx0ZXIodGhpcy5pc0NvcGllZCkuZm9yRWFjaCh0PT50aGlzLiNlLnJlbW92ZUl0ZW0odCkpLHRoaXMuaGFzRXh0ZW5zaW9uQXBpJiZhd2FpdCB0aGlzLiN0LnJlbW92ZShlKX07cmVtb3ZlQWxsPWFzeW5jKCk9PntsZXQgZT1hd2FpdCB0aGlzLmdldEFsbCgpLHQ9T2JqZWN0LmtleXMoZSk7YXdhaXQgdGhpcy5yZW1vdmVNYW55KHQpfTt3YXRjaD1lPT57bGV0IHQ9dGhpcy5pc1dhdGNoU3VwcG9ydGVkKCk7cmV0dXJuIHQmJnRoaXMuI28oZSksdH07I289ZT0+e2ZvcihsZXQgdCBpbiBlKXtsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkodCkscj10aGlzLiNzLmdldChzKT8uY2FsbGJhY2tTZXR8fG5ldyBTZXQ7aWYoci5hZGQoZVt0XSksci5zaXplPjEpY29udGludWU7bGV0IGE9KGksbik9PntpZihuIT09dGhpcy5hcmVhfHwhaVtzXSlyZXR1cm47bGV0IGg9dGhpcy4jcy5nZXQocyk7aWYoIWgpdGhyb3cgbmV3IEVycm9yKGBTdG9yYWdlIGNvbW1zIGRvZXMgbm90IGV4aXN0IGZvciBuc0tleTogJHtzfWApO1Byb21pc2UuYWxsKFt0aGlzLnBhcnNlVmFsdWUoaVtzXS5uZXdWYWx1ZSksdGhpcy5wYXJzZVZhbHVlKGlbc10ub2xkVmFsdWUpXSkudGhlbigoW3ksZF0pPT57Zm9yKGxldCBwIG9mIGguY2FsbGJhY2tTZXQpcCh7bmV3VmFsdWU6eSxvbGRWYWx1ZTpkfSxuKX0pfTt0aGlzLiNyLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihhKSx0aGlzLiNzLnNldChzLHtjYWxsYmFja1NldDpyLGxpc3RlbmVyOmF9KX19O3Vud2F0Y2g9ZT0+e2xldCB0PXRoaXMuaXNXYXRjaFN1cHBvcnRlZCgpO3JldHVybiB0JiZ0aGlzLiNjKGUpLHR9OyNjKGUpe2ZvcihsZXQgdCBpbiBlKXtsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkodCkscj1lW3RdLGE9dGhpcy4jcy5nZXQocyk7YSYmKGEuY2FsbGJhY2tTZXQuZGVsZXRlKHIpLGEuY2FsbGJhY2tTZXQuc2l6ZT09PTAmJih0aGlzLiNzLmRlbGV0ZShzKSx0aGlzLiNyLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihhLmxpc3RlbmVyKSkpfX11bndhdGNoQWxsPSgpPT50aGlzLiNoKCk7I2goKXt0aGlzLiNzLmZvckVhY2goKHtsaXN0ZW5lcjplfSk9PnRoaXMuI3Iub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKGUpKSx0aGlzLiNzLmNsZWFyKCl9YXN5bmMgZ2V0SXRlbShlKXtyZXR1cm4gdGhpcy5nZXQoZSl9YXN5bmMgZ2V0SXRlbXMoZSl7cmV0dXJuIGF3YWl0IHRoaXMuZ2V0TWFueShlKX1hc3luYyBzZXRJdGVtKGUsdCl7YXdhaXQgdGhpcy5zZXQoZSx0KX1hc3luYyBzZXRJdGVtcyhlKXthd2FpdCBhd2FpdCB0aGlzLnNldE1hbnkoZSl9YXN5bmMgcmVtb3ZlSXRlbShlKXtyZXR1cm4gdGhpcy5yZW1vdmUoZSl9YXN5bmMgcmVtb3ZlSXRlbXMoZSl7cmV0dXJuIGF3YWl0IHRoaXMucmVtb3ZlTWFueShlKX19LGc9Y2xhc3MgZXh0ZW5kcyBve2dldD1hc3luYyBlPT57bGV0IHQ9dGhpcy5nZXROYW1lc3BhY2VkS2V5KGUpLHM9YXdhaXQgdGhpcy5yYXdHZXQodCk7cmV0dXJuIHRoaXMucGFyc2VWYWx1ZShzKX07Z2V0TWFueT1hc3luYyBlPT57bGV0IHQ9ZS5tYXAodGhpcy5nZXROYW1lc3BhY2VkS2V5KSxzPWF3YWl0IHRoaXMucmF3R2V0TWFueSh0KSxyPWF3YWl0IFByb21pc2UuYWxsKE9iamVjdC52YWx1ZXMocykubWFwKHRoaXMucGFyc2VWYWx1ZSkpO3JldHVybiBPYmplY3Qua2V5cyhzKS5yZWR1Y2UoKGEsaSxuKT0+KGFbdGhpcy5nZXRVbm5hbWVzcGFjZWRLZXkoaSldPXJbbl0sYSkse30pfTtzZXQ9YXN5bmMoZSx0KT0+e2xldCBzPXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKSxyPXRoaXMuc2VyZGUuc2VyaWFsaXplcih0KTtyZXR1cm4gdGhpcy5yYXdTZXQocyxyKX07c2V0TWFueT1hc3luYyBlPT57bGV0IHQ9T2JqZWN0LmVudHJpZXMoZSkucmVkdWNlKChzLFtyLGFdKT0+KHNbdGhpcy5nZXROYW1lc3BhY2VkS2V5KHIpXT10aGlzLnNlcmRlLnNlcmlhbGl6ZXIoYSkscykse30pO3JldHVybiBhd2FpdCB0aGlzLnJhd1NldE1hbnkodCl9O3JlbW92ZT1hc3luYyBlPT57bGV0IHQ9dGhpcy5nZXROYW1lc3BhY2VkS2V5KGUpO3JldHVybiB0aGlzLnJhd1JlbW92ZSh0KX07cmVtb3ZlTWFueT1hc3luYyBlPT57bGV0IHQ9ZS5tYXAodGhpcy5nZXROYW1lc3BhY2VkS2V5KTtyZXR1cm4gYXdhaXQgdGhpcy5yYXdSZW1vdmVNYW55KHQpfTtzZXROYW1lc3BhY2U9ZT0+e3RoaXMua2V5TmFtZXNwYWNlPWV9O3BhcnNlVmFsdWU9YXN5bmMgZT0+e3RyeXtpZihlIT09dm9pZCAwKXJldHVybiB0aGlzLnNlcmRlLmRlc2VyaWFsaXplcihlKX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKHQpfX19O2V4cG9ydHtvIGFzIEJhc2VTdG9yYWdlLGcgYXMgU3RvcmFnZX07XG4iLCJjb25zdCBwcm9jZXNzRnVuY3Rpb24gPSAoZnVuY3Rpb25fLCBvcHRpb25zLCBwcm94eSwgdW53cmFwcGVkKSA9PiBmdW5jdGlvbiAoLi4uYXJndW1lbnRzXykge1xuXHRjb25zdCBQID0gb3B0aW9ucy5wcm9taXNlTW9kdWxlO1xuXG5cdHJldHVybiBuZXcgUCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0aWYgKG9wdGlvbnMubXVsdGlBcmdzKSB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2goKC4uLnJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAob3B0aW9ucy5lcnJvckZpcnN0KSB7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdFswXSkge1xuXHRcdFx0XHRcdFx0cmVqZWN0KHJlc3VsdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdC5zaGlmdCgpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy5lcnJvckZpcnN0KSB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2goKGVycm9yLCByZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2gocmVzb2x2ZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMgPT09IHByb3h5ID8gdW53cmFwcGVkIDogdGhpcztcblx0XHRSZWZsZWN0LmFwcGx5KGZ1bmN0aW9uXywgc2VsZiwgYXJndW1lbnRzXyk7XG5cdH0pO1xufTtcblxuY29uc3QgZmlsdGVyQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwaWZ5KGlucHV0LCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0ZXhjbHVkZTogWy8uKyg/OlN5bmN8U3RyZWFtKSQvXSxcblx0XHRlcnJvckZpcnN0OiB0cnVlLFxuXHRcdHByb21pc2VNb2R1bGU6IFByb21pc2UsXG5cdFx0Li4ub3B0aW9ucyxcblx0fTtcblxuXHRjb25zdCBvYmplY3RUeXBlID0gdHlwZW9mIGlucHV0O1xuXHRpZiAoIShpbnB1dCAhPT0gbnVsbCAmJiAob2JqZWN0VHlwZSA9PT0gJ29iamVjdCcgfHwgb2JqZWN0VHlwZSA9PT0gJ2Z1bmN0aW9uJykpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgaW5wdXRcXGAgdG8gYmUgYSBcXGBGdW5jdGlvblxcYCBvciBcXGBPYmplY3RcXGAsIGdvdCBcXGAke2lucHV0ID09PSBudWxsID8gJ251bGwnIDogb2JqZWN0VHlwZX1cXGBgKTtcblx0fVxuXG5cdGNvbnN0IGZpbHRlciA9ICh0YXJnZXQsIGtleSkgPT4ge1xuXHRcdGxldCBjYWNoZWQgPSBmaWx0ZXJDYWNoZS5nZXQodGFyZ2V0KTtcblxuXHRcdGlmICghY2FjaGVkKSB7XG5cdFx0XHRjYWNoZWQgPSB7fTtcblx0XHRcdGZpbHRlckNhY2hlLnNldCh0YXJnZXQsIGNhY2hlZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGtleSBpbiBjYWNoZWQpIHtcblx0XHRcdHJldHVybiBjYWNoZWRba2V5XTtcblx0XHR9XG5cblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4gPT4gKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJyB8fCB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJykgPyBrZXkgPT09IHBhdHRlcm4gOiBwYXR0ZXJuLnRlc3Qoa2V5KTtcblx0XHRjb25zdCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuXHRcdGNvbnN0IHdyaXRhYmxlT3JDb25maWd1cmFibGVPd24gPSAoZGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkIHx8IGRlc2NyaXB0b3Iud3JpdGFibGUgfHwgZGVzY3JpcHRvci5jb25maWd1cmFibGUpO1xuXHRcdGNvbnN0IGluY2x1ZGVkID0gb3B0aW9ucy5pbmNsdWRlID8gb3B0aW9ucy5pbmNsdWRlLnNvbWUoZWxlbWVudCA9PiBtYXRjaChlbGVtZW50KSkgOiAhb3B0aW9ucy5leGNsdWRlLnNvbWUoZWxlbWVudCA9PiBtYXRjaChlbGVtZW50KSk7XG5cdFx0Y29uc3Qgc2hvdWxkRmlsdGVyID0gaW5jbHVkZWQgJiYgd3JpdGFibGVPckNvbmZpZ3VyYWJsZU93bjtcblx0XHRjYWNoZWRba2V5XSA9IHNob3VsZEZpbHRlcjtcblx0XHRyZXR1cm4gc2hvdWxkRmlsdGVyO1xuXHR9O1xuXG5cdGNvbnN0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuXHRjb25zdCBwcm94eSA9IG5ldyBQcm94eShpbnB1dCwge1xuXHRcdGFwcGx5KHRhcmdldCwgdGhpc0FyZywgYXJncykge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KHRhcmdldCk7XG5cblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0cmV0dXJuIFJlZmxlY3QuYXBwbHkoY2FjaGVkLCB0aGlzQXJnLCBhcmdzKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGlmaWVkID0gb3B0aW9ucy5leGNsdWRlTWFpbiA/IHRhcmdldCA6IHByb2Nlc3NGdW5jdGlvbih0YXJnZXQsIG9wdGlvbnMsIHByb3h5LCB0YXJnZXQpO1xuXHRcdFx0Y2FjaGUuc2V0KHRhcmdldCwgcGlmaWVkKTtcblx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KHBpZmllZCwgdGhpc0FyZywgYXJncyk7XG5cdFx0fSxcblxuXHRcdGdldCh0YXJnZXQsIGtleSkge1xuXHRcdFx0Y29uc3QgcHJvcGVydHkgPSB0YXJnZXRba2V5XTtcblxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1leHRlbmQtbmF0aXZlL25vLXVzZS1leHRlbmQtbmF0aXZlXG5cdFx0XHRpZiAoIWZpbHRlcih0YXJnZXQsIGtleSkgfHwgcHJvcGVydHkgPT09IEZ1bmN0aW9uLnByb3RvdHlwZVtrZXldKSB7XG5cdFx0XHRcdHJldHVybiBwcm9wZXJ0eTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KHByb3BlcnR5KTtcblxuXHRcdFx0aWYgKGNhY2hlZCkge1xuXHRcdFx0XHRyZXR1cm4gY2FjaGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IHBpZmllZCA9IHByb2Nlc3NGdW5jdGlvbihwcm9wZXJ0eSwgb3B0aW9ucywgcHJveHksIHRhcmdldCk7XG5cdFx0XHRcdGNhY2hlLnNldChwcm9wZXJ0eSwgcGlmaWVkKTtcblx0XHRcdFx0cmV0dXJuIHBpZmllZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByb3BlcnR5O1xuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiBwcm94eTtcbn1cbiIsIi8qKlxuICogRW52aXJvbm1lbnQgLyBob3N0IGNvbmZpZyBmb3IgdGhlIHRlYW0gZm9yay5cbiAqIE92ZXJyaWRlIHZpYSAuZW52IChQTEFTTU9fUFVCTElDXyopLlxuICpcbiAqIEF1dG9maWxsIHByb2ZpbGUgZGF0YSBjb21lcyBmcm9tIHRoZSBUZWFtIEF1dG9maWxsIEh1YiAodGVhbS1zaXRlKSxcbiAqIG5vdCBKb2JyaWdodCBjbG91ZCDigJQgc2VlIH5hcGkvdGVhbS1jbGllbnQgYW5kIGV4dGVuc2lvbiBPcHRpb25zLlxuICovXG5cbmNvbnN0IFBST0RfSFVCID0gXCJodHRwczovL2pvYnJpZ2h0LXRlYW0tc2l0ZS52ZXJjZWwuYXBwXCJcbmNvbnN0IERFVl9IVUIgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzIxMFwiXG5cbmV4cG9ydCBjb25zdCBURUFNX1NJVEVfVVJMID1cbiAgcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19URUFNX1NJVEVfVVJMID8/IFBST0RfSFVCXG5cbi8qKiBIdWIgVVJMIGZvciB0aGUgY3VycmVudCBidWlsZDogbG9jYWxob3N0IGluIHBsYXNtbyBkZXYsIHByb2QgVVJMIGluIGJ1aWxkcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRIdWJVcmwoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSByZXR1cm4gREVWX0hVQlxuICByZXR1cm4gVEVBTV9TSVRFX1VSTCB8fCBQUk9EX0hVQlxufVxuXG4vKiogQGRlcHJlY2F0ZWQgUHJlZmVyIFRFQU1fU0lURV9VUkwg4oCUIGtlcHQgZm9yIG9sZGVyIHN0dWJzICovXG5leHBvcnQgY29uc3QgQVBJX0RPTUFJTiA9XG4gIHByb2Nlc3MuZW52LlBMQVNNT19QVUJMSUNfQVBJX0RPTUFJTiA/PyBURUFNX1NJVEVfVVJMXG5cbmV4cG9ydCBjb25zdCBIT1NUX0RPTUFJTiA9XG4gIHByb2Nlc3MuZW52LlBMQVNNT19QVUJMSUNfSE9TVF9ET01BSU4gPz8gVEVBTV9TSVRFX1VSTFxuXG5leHBvcnQgY29uc3QgQ09PS0lFX0RPTUFJTiA9XG4gIHByb2Nlc3MuZW52LlBMQVNNT19QVUJMSUNfQ09PS0lFX0RPTUFJTiA/PyBcImxvY2FsaG9zdFwiXG5cbi8qKiBUZWFtIGh1YiBob3N0IG9ubHkg4oCUIGRvIE5PVCBpbmNsdWRlIGxvY2FsaG9zdCAod291bGQgYWN0aXZhdGUgb24gZXZlcnkgbG9jYWwgYXBwKS4gKi9cbmV4cG9ydCBjb25zdCBhZ2VudERvbWFpbnMgPSBbXCJqb2JyaWdodC10ZWFtLXNpdGUudmVyY2VsLmFwcFwiXSBhcyBjb25zdFxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBDb250cm9sIGNvaG9ydCDigJQgbm8gSm9icmlnaHQgQS9CIGV4cGVyaW1lbnRzLiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgY29uZmlnOiB7fSxcbiAgICBzdHViOiB0cnVlXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5pbXBvcnQgeyBmZXRjaEFkZHJlc3NTdWdnZXN0aW9ucyB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcblxuLyoqIFJldHVybnMgcmF3IHN1Z2dlc3Rpb24gYXJyYXkgKEpvYnJpZ2h0IHNoYXBlKS4gKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGlucHV0ID0gdHlwZW9mIHJlcS5ib2R5Py5pbnB1dCA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LmlucHV0IDogXCJcIlxuICAgIGlmICghaW5wdXQudHJpbSgpKSB7XG4gICAgICByZXMuc2VuZChbXSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IGF3YWl0IGZldGNoQWRkcmVzc1N1Z2dlc3Rpb25zKHtcbiAgICAgIGlucHV0LFxuICAgICAgc2Vzc2lvblRva2VuOlxuICAgICAgICB0eXBlb2YgcmVxLmJvZHk/LnNlc3Npb25Ub2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgID8gcmVxLmJvZHkuc2Vzc2lvblRva2VuXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBjb3VudHJ5Q29kZXM6IEFycmF5LmlzQXJyYXkocmVxLmJvZHk/LmNvdW50cnlDb2RlcylcbiAgICAgICAgPyByZXEuYm9keS5jb3VudHJ5Q29kZXMuZmlsdGVyKChjOiB1bmtub3duKSA9PiB0eXBlb2YgYyA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBsaW1pdDogdHlwZW9mIHJlcS5ib2R5Py5saW1pdCA9PT0gXCJudW1iZXJcIiA/IHJlcS5ib2R5LmxpbWl0IDogNVxuICAgIH0pXG4gICAgcmVzLnNlbmQoc3VnZ2VzdGlvbnMpXG4gIH0gY2F0Y2gge1xuICAgIHJlcy5zZW5kKFtdKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB7IHNvZnROdWxsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0TnVsbChcImdldEFnZW50Q292ZXJMZXR0ZXJcIilcbiIsImltcG9ydCB7IHNvZnROdWxsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0TnVsbChcImdldEFnZW50UUxSdWxlXCIpXG4iLCJpbXBvcnQgeyBzb2Z0TnVsbCB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdE51bGwoXCJnZXRBZ2VudFRhaWxvclJlc3VtZVwiKVxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKlxuICogU3RhdGljIGF1dG9maWxsIGZlYXR1cmUgY29uZmlnIOKAlCBKb2JyaWdodCBmZXRjaGVzIHRoaXMgZnJvbSBjbG91ZC5cbiAqIEVtcHR5L2RlZmF1bHQgY29weSBrZWVwcyBwYXltZW50IGJhbm5lcnMgZnJvbSByZXNvbHZpbmcgdG8gdXBzZWxsIHRleHQuXG4gKi9cbmNvbnN0IFRFQU1fQVVUT0ZJTExfQ09ORklHID0ge1xuICBhdXRvZmlsbEJhbm5lckNvcHk6IHsgb2ZmOiBcIlwiIH0sXG4gIGF1dG9maWxsU3R1QmFubmVyQ29weTogeyBvZmY6IFwiXCIgfSxcbiAgYXV0b2ZpbGxDcmVkaXRzQ29weTogeyBvZmY6IFwiXCIgfSxcbiAgZW5hYmxlQXV0b2ZpbGw6IHRydWUsXG4gIGVuYWJsZVJlc3VtZVVwbG9hZDogdHJ1ZSxcbiAgZW5hYmxlQ292ZXJMZXR0ZXI6IHRydWUsXG4gIHRlYW1IdWI6IHRydWVcbn1cblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZChURUFNX0FVVE9GSUxMX0NPTkZJRylcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7IGZldGNoQXV0b2ZpbGxJbmZvIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxuaW1wb3J0IHsgaHViVG9Kb2JyaWdodEF1dG9maWxsIH0gZnJvbSBcIn5saWIvaHViLXRvLWpvYnJpZ2h0XCJcblxuLyoqXG4gKiBSZXR1cm5zIGF1dG9maWxsIHBheWxvYWQgZm9yIHRoZSBzZWxlY3RlZCB0ZWFtIHByb2ZpbGUuXG4gKiBgZGF0YWAgaXMgSm9icmlnaHQtc2hhcGVkIGZvciB0aGUgZW5naW5lIHJ1bnRpbWU7IGBhdXRvZmlsbEluZm9gIGtlZXBzIGh1YiBzaGFwZS5cbiAqIEJvZHk6IHsgZm9yY2VSZWZyZXNoPzogYm9vbGVhbiwgcHJvZmlsZUlkPzogc3RyaW5nIH1cbiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcHJvZmlsZUlkID1cbiAgICAgIHR5cGVvZiByZXEuYm9keT8ucHJvZmlsZUlkID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkucHJvZmlsZUlkIDogbnVsbFxuICAgIGNvbnN0IGh1YiA9IGF3YWl0IGZldGNoQXV0b2ZpbGxJbmZvKHByb2ZpbGVJZClcblxuICAgIGlmICghaHViKSB7XG4gICAgICByZXMuc2VuZCh7XG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgYXV0b2ZpbGxJbmZvOiBudWxsLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgIFwiTm8gcHJvZmlsZSBzZWxlY3RlZCBvciB0ZWFtIGh1YiBub3QgY29ubmVjdGVkLiBPcGVuIGV4dGVuc2lvbiBvcHRpb25zLlwiXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGh1YlRvSm9icmlnaHRBdXRvZmlsbChodWIpXG5cbiAgICByZXMuc2VuZCh7XG4gICAgICBvazogdHJ1ZSxcbiAgICAgIGRhdGEsXG4gICAgICBhdXRvZmlsbEluZm86IGh1YixcbiAgICAgIGF1dG9VcGRhdGU6IHRydWUsXG4gICAgICByZXZpc2lvbjogbnVsbFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBhdXRvZmlsbEluZm86IG51bGwsXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJmZXRjaF9mYWlsZWRcIlxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHR5cGUgeyBBdXRvZmlsbEluZm9QYXlsb2FkIH0gZnJvbSBcIn5hcGkvdGVhbS10eXBlc1wiXG5cbnR5cGUgSHViRWR1Y2F0aW9uID0ge1xuICBzY2hvb2xOYW1lPzogc3RyaW5nXG4gIG9yZ2FuaXphdGlvbj86IHN0cmluZ1xuICBhY2NyZWRpdGF0aW9uPzogc3RyaW5nXG4gIGdwYT86IHN0cmluZ1xuICBzdGFydERhdGU/OiBzdHJpbmdcbiAgZW5kRGF0ZT86IHN0cmluZ1xuICBpc0N1cnJlbnQ/OiBib29sZWFuXG4gIGRhdGVzPzoge1xuICAgIHN0YXJ0X2RhdGU/OiBzdHJpbmcgfCBudWxsXG4gICAgY29tcGxldGlvbl9kYXRlPzogc3RyaW5nIHwgbnVsbFxuICAgIGlzX2N1cnJlbnQ/OiBib29sZWFuXG4gIH1cbn1cblxudHlwZSBIdWJXb3JrID0ge1xuICBjb21wYW55TmFtZT86IHN0cmluZ1xuICBvcmdhbml6YXRpb24/OiBzdHJpbmdcbiAgam9iVGl0bGU/OiBzdHJpbmdcbiAgam9iX3RpdGxlPzogc3RyaW5nXG4gIGNpdHk/OiBzdHJpbmdcbiAgbG9jYXRpb24/OiBzdHJpbmdcbiAgc3RhcnREYXRlPzogc3RyaW5nXG4gIGVuZERhdGU/OiBzdHJpbmdcbiAgaXNDdXJyZW50PzogYm9vbGVhblxuICBzdW1tYXJ5Pzogc3RyaW5nXG4gIGRlc2NyaXB0aW9ucz86IHN0cmluZ1tdXG4gIGpvYl9kZXNjcmlwdGlvbnM/OiBzdHJpbmdbXVxuICBkYXRlcz86IHtcbiAgICBzdGFydF9kYXRlPzogc3RyaW5nIHwgbnVsbFxuICAgIGNvbXBsZXRpb25fZGF0ZT86IHN0cmluZyB8IG51bGxcbiAgICBpc19jdXJyZW50PzogYm9vbGVhblxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEVkdWNhdGlvbihyYXc6IHVua25vd24pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHJhdykpIHJldHVybiBbXVxuICByZXR1cm4gcmF3XG4gICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIilcbiAgICAubWFwKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBlID0gaXRlbSBhcyBIdWJFZHVjYXRpb25cbiAgICAgIGlmIChlLm9yZ2FuaXphdGlvbiB8fCBlLmRhdGVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb3JnYW5pemF0aW9uOiBlLm9yZ2FuaXphdGlvbiB8fCBlLnNjaG9vbE5hbWUgfHwgXCJcIixcbiAgICAgICAgICBhY2NyZWRpdGF0aW9uOiBlLmFjY3JlZGl0YXRpb24gfHwgXCJcIixcbiAgICAgICAgICBncGE6IGUuZ3BhIHx8IFwiXCIsXG4gICAgICAgICAgZGF0ZXM6IGUuZGF0ZXMgfHwge1xuICAgICAgICAgICAgc3RhcnRfZGF0ZTogZS5zdGFydERhdGUgfHwgbnVsbCxcbiAgICAgICAgICAgIGNvbXBsZXRpb25fZGF0ZTogZS5pc0N1cnJlbnQgPyBudWxsIDogZS5lbmREYXRlIHx8IG51bGwsXG4gICAgICAgICAgICBpc19jdXJyZW50OiAhIWUuaXNDdXJyZW50XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcmdhbml6YXRpb246IGUuc2Nob29sTmFtZSB8fCBcIlwiLFxuICAgICAgICBhY2NyZWRpdGF0aW9uOiBlLmFjY3JlZGl0YXRpb24gfHwgXCJcIixcbiAgICAgICAgZ3BhOiBlLmdwYSB8fCBcIlwiLFxuICAgICAgICBkYXRlczoge1xuICAgICAgICAgIHN0YXJ0X2RhdGU6IGUuc3RhcnREYXRlIHx8IG51bGwsXG4gICAgICAgICAgY29tcGxldGlvbl9kYXRlOiBlLmlzQ3VycmVudCA/IG51bGwgOiBlLmVuZERhdGUgfHwgbnVsbCxcbiAgICAgICAgICBpc19jdXJyZW50OiAhIWUuaXNDdXJyZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBtYXBXb3JrKHJhdzogdW5rbm93bik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocmF3KSkgcmV0dXJuIFtdXG4gIHJldHVybiByYXdcbiAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKVxuICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHcgPSBpdGVtIGFzIEh1YldvcmtcbiAgICAgIGlmICh3Lm9yZ2FuaXphdGlvbiB8fCB3LmpvYl90aXRsZSB8fCB3LmRhdGVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb3JnYW5pemF0aW9uOiB3Lm9yZ2FuaXphdGlvbiB8fCB3LmNvbXBhbnlOYW1lIHx8IFwiXCIsXG4gICAgICAgICAgam9iX3RpdGxlOiB3LmpvYl90aXRsZSB8fCB3LmpvYlRpdGxlIHx8IFwiXCIsXG4gICAgICAgICAgbG9jYXRpb246IHcubG9jYXRpb24gfHwgdy5jaXR5IHx8IFwiXCIsXG4gICAgICAgICAgZGF0ZXM6IHcuZGF0ZXMgfHwge1xuICAgICAgICAgICAgc3RhcnRfZGF0ZTogdy5zdGFydERhdGUgfHwgbnVsbCxcbiAgICAgICAgICAgIGNvbXBsZXRpb25fZGF0ZTogdy5pc0N1cnJlbnQgPyBudWxsIDogdy5lbmREYXRlIHx8IG51bGwsXG4gICAgICAgICAgICBpc19jdXJyZW50OiAhIXcuaXNDdXJyZW50XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdW1tYXJ5OiB3LnN1bW1hcnkgfHwgXCJcIixcbiAgICAgICAgICBqb2JfZGVzY3JpcHRpb25zOlxuICAgICAgICAgICAgdy5qb2JfZGVzY3JpcHRpb25zIHx8XG4gICAgICAgICAgICB3LmRlc2NyaXB0aW9ucyB8fFxuICAgICAgICAgICAgKHcuc3VtbWFyeSA/IFt3LnN1bW1hcnldIDogW10pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9yZ2FuaXphdGlvbjogdy5jb21wYW55TmFtZSB8fCBcIlwiLFxuICAgICAgICBqb2JfdGl0bGU6IHcuam9iVGl0bGUgfHwgXCJcIixcbiAgICAgICAgbG9jYXRpb246IHcuY2l0eSB8fCBcIlwiLFxuICAgICAgICBkYXRlczoge1xuICAgICAgICAgIHN0YXJ0X2RhdGU6IHcuc3RhcnREYXRlIHx8IG51bGwsXG4gICAgICAgICAgY29tcGxldGlvbl9kYXRlOiB3LmlzQ3VycmVudCA/IG51bGwgOiB3LmVuZERhdGUgfHwgbnVsbCxcbiAgICAgICAgICBpc19jdXJyZW50OiAhIXcuaXNDdXJyZW50XG4gICAgICAgIH0sXG4gICAgICAgIHN1bW1hcnk6IHcuc3VtbWFyeSB8fCBcIlwiLFxuICAgICAgICBqb2JfZGVzY3JpcHRpb25zOlxuICAgICAgICAgIHcuZGVzY3JpcHRpb25zPy5sZW5ndGhcbiAgICAgICAgICAgID8gdy5kZXNjcmlwdGlvbnNcbiAgICAgICAgICAgIDogdy5zdW1tYXJ5XG4gICAgICAgICAgICAgID8gW3cuc3VtbWFyeV1cbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG1hcFNraWxscyhyYXc6IHVua25vd24pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfCBzdHJpbmdbXSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHJhdykpIHtcbiAgICBjb25zdCBsaXN0ID0gcmF3Lm1hcCgocykgPT4gU3RyaW5nKHMpLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pXG4gICAgcmV0dXJuIGxpc3QubGVuZ3RoID8geyBERUZBVUxUOiBsaXN0IH0gOiB7fVxuICB9XG4gIGlmIChyYXcgJiYgdHlwZW9mIHJhdyA9PT0gXCJvYmplY3RcIikgcmV0dXJuIHJhdyBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT5cbiAgcmV0dXJuIHt9XG59XG5cbi8qKlxuICogTWFwIHRlYW0taHViIGF1dG9maWxsIHBheWxvYWQgaW50byB0aGUgSm9icmlnaHQtc2hhcGVkIG9iamVjdCB0aGF0XG4gKiBlbmdpbmUgc3RvcmVzIC8gQmFzZUZpbGxlciBleHBlY3QgKHBlcnNvbmFsSW5mbywgbG9jYXRpb24sIGV0Yy4pLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaHViVG9Kb2JyaWdodEF1dG9maWxsKFxuICBodWI6IEF1dG9maWxsSW5mb1BheWxvYWRcbik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgY29uc3QgYWRkciA9IGh1Yi5pZGVudGl0eT8uYWRkcmVzcyA/PyB7XG4gICAgbGluZTE6IFwiXCIsXG4gICAgbGluZTI6IFwiXCIsXG4gICAgY2l0eTogXCJcIixcbiAgICBzdGF0ZTogXCJcIixcbiAgICBwb3N0YWxDb2RlOiBcIlwiLFxuICAgIGNvdW50cnk6IFwiXCJcbiAgfVxuICBjb25zdCBleHRyYXMgPSAoaHViLmV4dHJhcyAmJiB0eXBlb2YgaHViLmV4dHJhcyA9PT0gXCJvYmplY3RcIlxuICAgID8gaHViLmV4dHJhc1xuICAgIDoge30pIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG5cbiAgY29uc3QgZWR1Y2F0aW9uID0gbWFwRWR1Y2F0aW9uKFxuICAgIGV4dHJhcy5lbmdpbmVFZHVjYXRpb24gPz8gZXh0cmFzLmVkdWNhdGlvbiA/PyBleHRyYXMuRWR1Y2F0aW9uXG4gIClcbiAgY29uc3Qgd29ya0V4cGVyaWVuY2UgPSBtYXBXb3JrKFxuICAgIGV4dHJhcy5lbmdpbmVXb3JrRXhwZXJpZW5jZSA/P1xuICAgICAgZXh0cmFzLndvcmtFeHBlcmllbmNlID8/XG4gICAgICBleHRyYXMuZW1wbG95bWVudFxuICApXG4gIGNvbnN0IGVtcGxveW1lbnRJbmZvID1cbiAgICBleHRyYXMuZW1wbG95bWVudEluZm8gJiYgdHlwZW9mIGV4dHJhcy5lbXBsb3ltZW50SW5mbyA9PT0gXCJvYmplY3RcIlxuICAgICAgPyBleHRyYXMuZW1wbG95bWVudEluZm9cbiAgICAgIDoge31cbiAgY29uc3Qgc2tpbGxzID0gbWFwU2tpbGxzKGV4dHJhcy5lbmdpbmVTa2lsbHMgPz8gZXh0cmFzLnNraWxscylcblxuICByZXR1cm4ge1xuICAgIC4uLmh1YixcbiAgICBwZXJzb25hbEluZm86IHtcbiAgICAgIGZpcnN0TmFtZTogaHViLmlkZW50aXR5LmZpcnN0TmFtZSB8fCBcIlwiLFxuICAgICAgbWlkZGxlTmFtZTogU3RyaW5nKGV4dHJhcy5taWRkbGVOYW1lID8/IFwiXCIpLFxuICAgICAgbGFzdE5hbWU6IGh1Yi5pZGVudGl0eS5sYXN0TmFtZSB8fCBcIlwiLFxuICAgICAgcHJlZmVycmVkRmlyc3ROYW1lOiBTdHJpbmcoZXh0cmFzLnByZWZlcnJlZEZpcnN0TmFtZSA/PyBcIlwiKSxcbiAgICAgIHByZWZlcnJlZE1pZGRsZU5hbWU6IFN0cmluZyhleHRyYXMucHJlZmVycmVkTWlkZGxlTmFtZSA/PyBcIlwiKSxcbiAgICAgIHByZWZlcnJlZExhc3ROYW1lOiBTdHJpbmcoZXh0cmFzLnByZWZlcnJlZExhc3ROYW1lID8/IFwiXCIpLFxuICAgICAgZW1haWw6IGh1Yi5pZGVudGl0eS5lbWFpbCB8fCBcIlwiLFxuICAgICAgcGhvbmVfbnVtYmVyOiBodWIuaWRlbnRpdHkucGhvbmUgfHwgXCJcIixcbiAgICAgIGxpbmtlZGluX2xpbms6IGh1Yi5pZGVudGl0eS5saW5rZWRpbiB8fCBcIlwiLFxuICAgICAgbGlua2VkaW46IGh1Yi5pZGVudGl0eS5saW5rZWRpbiB8fCBcIlwiLFxuICAgICAgZ2l0aHViX2xpbms6IFN0cmluZyhleHRyYXMuZ2l0aHViID8/IGV4dHJhcy5naXRodWJfbGluayA/PyBcIlwiKSxcbiAgICAgIHBlcnNvbmFsX3NpdGVfbGluazogaHViLmlkZW50aXR5LndlYnNpdGUgfHwgXCJcIixcbiAgICAgIHBlcnNvbmFsX3NpdGU6IGh1Yi5pZGVudGl0eS53ZWJzaXRlIHx8IFwiXCJcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICBjb3VudHJ5OiBhZGRyLmNvdW50cnkgfHwgXCJcIixcbiAgICAgIHN0YXRlOiBhZGRyLnN0YXRlIHx8IFwiXCIsXG4gICAgICBjaXR5OiBhZGRyLmNpdHkgfHwgXCJcIixcbiAgICAgIHBvc3RDb2RlOiBhZGRyLnBvc3RhbENvZGUgfHwgXCJcIixcbiAgICAgIGNvdW50eTogU3RyaW5nKGV4dHJhcy5jb3VudHkgPz8gXCJcIilcbiAgICB9LFxuICAgIGFkZHJlc3NMaW5lOiBbYWRkci5saW5lMSwgYWRkci5saW5lMl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIsIFwiKSxcbiAgICBzdGF0ZTogYWRkci5zdGF0ZSB8fCBcIlwiLFxuICAgIGVkdWNhdGlvbixcbiAgICB3b3JrRXhwZXJpZW5jZSxcbiAgICBlbXBsb3ltZW50SW5mbyxcbiAgICBza2lsbHMsXG4gICAgc2FsYXJ5OiBTdHJpbmcoZXh0cmFzLnNhbGFyeSA/PyBcIlwiKSxcbiAgICBoaXJpbmdEYXRlOiAoKCkgPT4ge1xuICAgICAgY29uc3QgdG9tb3Jyb3cgPSBsb2NhbFRvbW9ycm93WW1kKClcbiAgICAgIGNvbnN0IHRvZGF5ID0gbG9jYWxUb2RheVltZCgpXG4gICAgICBjb25zdCByYXcgPSBTdHJpbmcoZXh0cmFzLmhpcmluZ0RhdGUgPz8gXCJcIikudHJpbSgpXG4gICAgICBpZiAoL15cXGR7NH0tXFxkezJ9LVxcZHsyfSQvLnRlc3QocmF3KSAmJiByYXcgPj0gdG9kYXkpIHJldHVybiByYXdcbiAgICAgIHJldHVybiB0b21vcnJvd1xuICAgIH0pKCksXG4gICAgYmlydGhkYXk6IFN0cmluZyhleHRyYXMuYmlydGhkYXkgPz8gZXh0cmFzLmRhdGVPZkJpcnRoID8/IFwiXCIpLFxuICAgIHllYXJzT2ZFeHBlcmllbmNlOiBTdHJpbmcoZXh0cmFzLnllYXJzT2ZFeHBlcmllbmNlID8/IFwiXCIpLFxuICAgIHBsYW5uZWRXb3JrTG9jYXRpb246IFN0cmluZyhleHRyYXMucGxhbm5lZFdvcmtMb2NhdGlvbiA/PyBcIlwiKSxcbiAgICBhZGRpdGlvbmFsQXBwbGljYXRpb25JbmZvOiBTdHJpbmcoXG4gICAgICBleHRyYXMuYWRkaXRpb25hbEFwcGxpY2F0aW9uSW5mbyA/PyBcIlwiXG4gICAgKSxcbiAgICBwcm9ub3VuczogU3RyaW5nKGV4dHJhcy5wcm9ub3VucyA/PyBcIlwiKSxcbiAgICBwaG9uZVR5cGU6IFN0cmluZyhleHRyYXMucGhvbmVUeXBlID8/IFwiTW9iaWxlXCIpLFxuICAgIHBob25lQ291bnRyeUNvZGU6IFN0cmluZyhleHRyYXMucGhvbmVDb3VudHJ5Q29kZSA/PyBcIlwiKSxcbiAgICBfaHViQW5zd2VyczogaHViLmFuc3dlcnMgfHwge30sXG4gICAgZGVmYXVsdFJlc3VtZUlkOiBodWIuZGVmYXVsdFJlc3VtZUlkLFxuICAgIHJlc3VtZXM6IGh1Yi5yZXN1bWVzXG4gIH1cbn1cblxudHlwZSBGaWxsRWxlbWVudCA9IHtcbiAgbGFiZWw/OiBzdHJpbmdcbiAgdHlwZT86IHN0cmluZ1xuICBvcHRpb25zPzogdW5rbm93blxuICBba2V5OiBzdHJpbmddOiB1bmtub3duXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxhYmVsKHRleHQ6IHN0cmluZykge1xuICByZXR1cm4gKHRleHQgfHwgXCJcIilcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9cXHMqXFwqXFxzKi9nLCBcIiBcIilcbiAgICAucmVwbGFjZSgvW15hLXowLTldKy9nLCBcIiBcIilcbiAgICAudHJpbSgpXG59XG5cbmZ1bmN0aW9uIGxvY2FsVG9kYXlZbWQoKTogc3RyaW5nIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKClcbiAgY29uc3QgeSA9IGQuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBtID0gU3RyaW5nKGQuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKVxuICBjb25zdCBkYXkgPSBTdHJpbmcoZC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKVxuICByZXR1cm4gYCR7eX0tJHttfS0ke2RheX1gXG59XG5cbi8qKiBEZWZhdWx0IHN0YXJ0IC8gYXZhaWxhYmxlLWZyb20gZGF0ZTogdG9tb3Jyb3cgKGxvY2FsKS4gKi9cbmZ1bmN0aW9uIGxvY2FsVG9tb3Jyb3dZbWQoKTogc3RyaW5nIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKClcbiAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgMSlcbiAgY29uc3QgeSA9IGQuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBtID0gU3RyaW5nKGQuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKVxuICBjb25zdCBkYXkgPSBTdHJpbmcoZC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKVxuICByZXR1cm4gYCR7eX0tJHttfS0ke2RheX1gXG59XG5cbmZ1bmN0aW9uIHBhcnNlWW1kKHJhdzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IHQgPSByYXcudHJpbSgpXG4gIGlmICgvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9JC8udGVzdCh0KSkgcmV0dXJuIHRcbiAgaWYgKC9eXFxkezR9LVxcZHsyfSQvLnRlc3QodCkpIHJldHVybiBgJHt0fS0wMWBcbiAgY29uc3QgdXMgPSB0Lm1hdGNoKC9eKFxcZHsxLDJ9KVxcLyhcXGR7MSwyfSlcXC8oXFxkezR9KSQvKVxuICBpZiAodXMpIHtcbiAgICByZXR1cm4gYCR7dXNbM119LSR7dXNbMV0ucGFkU3RhcnQoMiwgXCIwXCIpfS0ke3VzWzJdLnBhZFN0YXJ0KDIsIFwiMFwiKX1gXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gZXh0cmFzU3RyaW5nKGh1YjogQXV0b2ZpbGxJbmZvUGF5bG9hZCwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBleHRyYXMgPSBodWIuZXh0cmFzIHx8IHt9XG4gIGNvbnN0IHYgPSBleHRyYXNba2V5XVxuICByZXR1cm4gdHlwZW9mIHYgPT09IFwic3RyaW5nXCIgPyB2IDogdiAhPSBudWxsID8gU3RyaW5nKHYpIDogXCJcIlxufVxuXG5mdW5jdGlvbiBlbXBsb3ltZW50RmllbGQoaHViOiBBdXRvZmlsbEluZm9QYXlsb2FkLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGluZm8gPSBodWIuZXh0cmFzPy5lbXBsb3ltZW50SW5mb1xuICBpZiAoIWluZm8gfHwgdHlwZW9mIGluZm8gIT09IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShpbmZvKSkgcmV0dXJuIFwiXCJcbiAgY29uc3QgdiA9IChpbmZvIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrZXldXG4gIHJldHVybiB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIiA/IHYgOiB2ICE9IG51bGwgPyBTdHJpbmcodikgOiBcIlwiXG59XG5cbmZ1bmN0aW9uIGZvcm1hdExvY2F0aW9uKGh1YjogQXV0b2ZpbGxJbmZvUGF5bG9hZCk6IHN0cmluZyB7XG4gIGNvbnN0IGEgPSBodWIuaWRlbnRpdHkuYWRkcmVzc1xuICByZXR1cm4gW2EuY2l0eSwgYS5zdGF0ZSwgYS5jb3VudHJ5XS5tYXAoKHMpID0+IHM/LnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIsIFwiKVxufVxuXG4vKipcbiAqIEF2YWlsYWJsZS1mcm9tIC8gaGlyaW5nIGRhdGUgZm9yIGZvcm1zLlxuICogUHJlZmVyIGh1YiBoaXJpbmdEYXRlIHdoZW4gaXQgaXMgdG9kYXkgb3IgbGF0ZXI7IG90aGVyd2lzZSB0b21vcnJvdy5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0SGlyaW5nRGF0ZShodWI6IEF1dG9maWxsSW5mb1BheWxvYWQpOiBzdHJpbmcge1xuICBjb25zdCB0b21vcnJvdyA9IGxvY2FsVG9tb3Jyb3dZbWQoKVxuICBjb25zdCB0b2RheSA9IGxvY2FsVG9kYXlZbWQoKVxuICBjb25zdCBwYXJzZWQgPSBwYXJzZVltZChleHRyYXNTdHJpbmcoaHViLCBcImhpcmluZ0RhdGVcIikpXG4gIGlmIChwYXJzZWQgJiYgcGFyc2VkID49IHRvZGF5KSByZXR1cm4gcGFyc2VkXG4gIHJldHVybiB0b21vcnJvd1xufVxuXG5mdW5jdGlvbiBmb3JtYXRIaXJpbmdEYXRlVXMoaHViOiBBdXRvZmlsbEluZm9QYXlsb2FkKTogc3RyaW5nIHtcbiAgY29uc3QgaXNvID0gZm9ybWF0SGlyaW5nRGF0ZShodWIpXG4gIGNvbnN0IG0gPSBpc28ubWF0Y2goL14oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KSQvKVxuICBpZiAoIW0pIHJldHVybiBpc29cbiAgcmV0dXJuIGAke21bMl19LyR7bVszXX0vJHttWzFdfWBcbn1cblxuLyoqIFRydWUgaWYgY2FuZGlkYXRlIG5lZWRzIGVtcGxveWVyIHNwb25zb3JzaGlwLiAqL1xuZnVuY3Rpb24gbmVlZHNTcG9uc29yc2hpcChodWI6IEF1dG9maWxsSW5mb1BheWxvYWQpOiBib29sZWFuIHwgbnVsbCB7XG4gIGNvbnN0IHN0YXR1cyA9IGVtcGxveW1lbnRGaWVsZChodWIsIFwic3BvbnNvcnNoaXBTdGF0dXNcIikudG9Mb3dlckNhc2UoKVxuICBjb25zdCBhdXRoID0gZW1wbG95bWVudEZpZWxkKGh1YiwgXCJ3b3JrQXV0aG9yaXphdGlvblwiKS50b0xvd2VyQ2FzZSgpXG4gIGlmICghc3RhdHVzICYmICFhdXRoKSByZXR1cm4gbnVsbFxuICBpZiAoL3dpbGwgbm90IHJlcXVpcmV8bm8gc3BvbnNvcnNoaXB8ZG8gbm90IHJlcXVpcmV8ZG9lc24ndCByZXF1aXJlfGRvZXMgbm90IHJlcXVpcmUvLnRlc3Qoc3RhdHVzKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmICgvcmVxdWlyZSBzcG9uc29yc2hpcHxuZWVkcyBzcG9uc29yc2hpcHxuZWVkIHNwb25zb3JzaGlwLy50ZXN0KHN0YXR1cykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGlmICgvbmVlZCBzcG9uc29yc2hpcHxub3QgYXV0aG9yaXplZC8udGVzdChhdXRoKSkgcmV0dXJuIHRydWVcbiAgaWYgKC9hdXRob3JpemVkIHRvIHdvcmsvLnRlc3QoYXV0aCkgJiYgIS9zcG9uc29yc2hpcC8udGVzdChzdGF0dXMpKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqIFRydWUgaWYgYXV0aG9yaXplZCB0byB3b3JrIChnZW5lcmFsbHkgLyB3aXRob3V0IG5lZWRpbmcgc3BvbnNvcnNoaXAgZnJhbWluZykuICovXG5mdW5jdGlvbiBpc1dvcmtBdXRob3JpemVkKGh1YjogQXV0b2ZpbGxJbmZvUGF5bG9hZCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgY29uc3QgYXV0aCA9IGVtcGxveW1lbnRGaWVsZChodWIsIFwid29ya0F1dGhvcml6YXRpb25cIikudG9Mb3dlckNhc2UoKVxuICBpZiAoIWF1dGgpIHJldHVybiBudWxsXG4gIGlmICgvbm90IGF1dGhvcml6ZWQvLnRlc3QoYXV0aCkpIHJldHVybiBmYWxzZVxuICBpZiAoL2F1dGhvcml6ZWQgdG8gd29ya3xhdXRob3JpemVkLy50ZXN0KGF1dGgpKSByZXR1cm4gdHJ1ZVxuICBpZiAoL25lZWQgc3BvbnNvcnNoaXAvLnRlc3QoYXV0aCkpIHJldHVybiBmYWxzZVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBlbGVtZW50T3B0aW9ucyhlbDogRmlsbEVsZW1lbnQpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHJhdyA9IGVsLm9wdGlvbnNcbiAgaWYgKCFBcnJheS5pc0FycmF5KHJhdykpIHJldHVybiBbXVxuICByZXR1cm4gcmF3XG4gICAgLm1hcCgobykgPT4gKHR5cGVvZiBvID09PSBcInN0cmluZ1wiID8gbyA6IFN0cmluZyhvID8/IFwiXCIpKSlcbiAgICAubWFwKChzKSA9PiBzLnRyaW0oKSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG59XG5cbmZ1bmN0aW9uIGhhc1llc05vT3B0aW9ucyhvcHRpb25zOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICBjb25zdCBub3JtcyA9IG9wdGlvbnMubWFwKG5vcm1hbGl6ZUxhYmVsKVxuICByZXR1cm4gKFxuICAgIG5vcm1zLnNvbWUoKG4pID0+IG4gPT09IFwieWVzXCIgfHwgbi5zdGFydHNXaXRoKFwieWVzIFwiKSkgJiZcbiAgICBub3Jtcy5zb21lKChuKSA9PiBuID09PSBcIm5vXCIgfHwgbi5zdGFydHNXaXRoKFwibm8gXCIpKVxuICApXG59XG5cbmZ1bmN0aW9uIHBpY2tZZXNObyhvcHRpb25zOiBzdHJpbmdbXSwgeWVzOiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3Qgd2FudCA9IHllcyA/IFwieWVzXCIgOiBcIm5vXCJcbiAgY29uc3QgaGl0ID0gb3B0aW9ucy5maW5kKChvKSA9PiB7XG4gICAgY29uc3QgbiA9IG5vcm1hbGl6ZUxhYmVsKG8pXG4gICAgcmV0dXJuIG4gPT09IHdhbnQgfHwgbi5zdGFydHNXaXRoKGAke3dhbnR9IGApXG4gIH0pXG4gIHJldHVybiBoaXQgfHwgKHllcyA/IFwiWWVzXCIgOiBcIk5vXCIpXG59XG5cbi8qKiBQdWxsIGxlYWRpbmcgeWVhci1yYW5nZSBudW1iZXJzIGZyb20gc3RyaW5ncyBsaWtlIFwiNS03IHllYXJzXCIgLyBcIjEwK1wiLiAqL1xuZnVuY3Rpb24geWVhclJhbmdlUGFydHModGV4dDogc3RyaW5nKTogeyBsbzogbnVtYmVyOyBoaTogbnVtYmVyIH0gfCBudWxsIHtcbiAgY29uc3QgbiA9IG5vcm1hbGl6ZUxhYmVsKHRleHQpXG4gIGNvbnN0IHBsdXMgPSBuLm1hdGNoKC9eKFxcZCspXFxzKlxcK1xccyooeWVhcnM/KT8kLylcbiAgaWYgKHBsdXMpIHtcbiAgICBjb25zdCBsbyA9IE51bWJlcihwbHVzWzFdKVxuICAgIHJldHVybiB7IGxvLCBoaTogOTkgfVxuICB9XG4gIGNvbnN0IHJhbmdlID0gbi5tYXRjaCgvXihcXGQrKVxccypbLeKAk+KAlHRvXStcXHMqKFxcZCspXFxzKih5ZWFycz8pPyQvKVxuICBpZiAocmFuZ2UpIHJldHVybiB7IGxvOiBOdW1iZXIocmFuZ2VbMV0pLCBoaTogTnVtYmVyKHJhbmdlWzJdKSB9XG4gIGNvbnN0IHNpbmdsZSA9IG4ubWF0Y2goL14oXFxkKylcXHMqKHllYXJzPyk/JC8pXG4gIGlmIChzaW5nbGUpIHtcbiAgICBjb25zdCB2ID0gTnVtYmVyKHNpbmdsZVsxXSlcbiAgICByZXR1cm4geyBsbzogdiwgaGk6IHYgfVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIHNjb3JlT3B0aW9uKGNhbmRpZGF0ZTogc3RyaW5nLCBvcHRpb246IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IGMgPSBub3JtYWxpemVMYWJlbChjYW5kaWRhdGUpXG4gIGNvbnN0IG8gPSBub3JtYWxpemVMYWJlbChvcHRpb24pXG4gIGlmICghYyB8fCAhbykgcmV0dXJuIDBcbiAgaWYgKC9ecGxlYXNlIHNlbGVjdHxec2VsZWN0IHxeY2hvb3NlIHxe4oCUfF4tJC8udGVzdChvKSB8fCBvID09PSBcInNlbGVjdFwiKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAoYyA9PT0gbykgcmV0dXJuIDEwMFxuICBjb25zdCBjRmxhdCA9IGMucmVwbGFjZSgvXFxzKlst4oCT4oCUXVxccyovZywgXCItXCIpLnJlcGxhY2UoL1xccysvZywgXCJcIilcbiAgY29uc3Qgb0ZsYXQgPSBvLnJlcGxhY2UoL1xccypbLeKAk+KAlF1cXHMqL2csIFwiLVwiKS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpXG4gIGlmIChjRmxhdCA9PT0gb0ZsYXQpIHJldHVybiA5OFxuXG4gIGNvbnN0IGNyID0geWVhclJhbmdlUGFydHMoYylcbiAgY29uc3Qgb3IgPSB5ZWFyUmFuZ2VQYXJ0cyhvKVxuICBpZiAoY3IgJiYgb3IpIHtcbiAgICAvLyBPdmVybGFwcGluZyBleHBlcmllbmNlIGJhbmRzIChQZXJzb25pbyBvZnRlbiBkaWZmZXJzIHNsaWdodGx5IGZyb20gaHViKVxuICAgIGNvbnN0IG92ZXJsYXAgPSBNYXRoLm1pbihjci5oaSwgb3IuaGkpIC0gTWF0aC5tYXgoY3IubG8sIG9yLmxvKVxuICAgIGlmIChvdmVybGFwID49IDApIHJldHVybiA5MFxuICAgIGNvbnN0IG1pZEMgPSAoY3IubG8gKyBjci5oaSkgLyAyXG4gICAgY29uc3QgbWlkTyA9IChvci5sbyArIG9yLmhpKSAvIDJcbiAgICBpZiAoTWF0aC5hYnMobWlkQyAtIG1pZE8pIDw9IDIpIHJldHVybiA3NVxuICB9XG5cbiAgaWYgKG8uaW5jbHVkZXMoYykgfHwgYy5pbmNsdWRlcyhvKSkgcmV0dXJuIDgwXG4gIGNvbnN0IGN0ID0gbmV3IFNldChjLnNwbGl0KFwiIFwiKS5maWx0ZXIoQm9vbGVhbikpXG4gIGNvbnN0IG90ID0gby5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pXG4gIGxldCBoaXQgPSAwXG4gIGZvciAoY29uc3QgdCBvZiBvdCkgaWYgKGN0Lmhhcyh0KSkgaGl0ICs9IDFcbiAgaWYgKCFvdC5sZW5ndGgpIHJldHVybiAwXG4gIHJldHVybiBNYXRoLnJvdW5kKChoaXQgLyBvdC5sZW5ndGgpICogNjApXG59XG5cbmZ1bmN0aW9uIGFkYXB0VG9PcHRpb25zKHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgaWYgKCFvcHRpb25zLmxlbmd0aCkgcmV0dXJuIHZhbHVlXG4gIGxldCBiZXN0ID0gdmFsdWVcbiAgbGV0IGJlc3RTY29yZSA9IDBcbiAgZm9yIChjb25zdCBvcHQgb2Ygb3B0aW9ucykge1xuICAgIGNvbnN0IHMgPSBzY29yZU9wdGlvbih2YWx1ZSwgb3B0KVxuICAgIGlmIChzID4gYmVzdFNjb3JlKSB7XG4gICAgICBiZXN0U2NvcmUgPSBzXG4gICAgICBiZXN0ID0gb3B0XG4gICAgfVxuICB9XG4gIHJldHVybiBiZXN0U2NvcmUgPj0gNDAgPyBiZXN0IDogdmFsdWVcbn1cblxuZnVuY3Rpb24gbGFiZWxNYXRjaGVzKG5vcm06IHN0cmluZywga2V5czogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGlmIChub3JtID09PSBrZXkpIHJldHVybiB0cnVlXG4gICAgaWYgKGtleS5sZW5ndGggPj0gNCAmJiBub3JtLmluY2x1ZGVzKGtleSkpIHJldHVybiB0cnVlXG4gICAgaWYgKG5vcm0ubGVuZ3RoID49IDQgJiYga2V5LmluY2x1ZGVzKG5vcm0pICYmIG5vcm0ubGVuZ3RoID49IGtleS5sZW5ndGggLSAyKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqIExvbmcgbGVnYWwgLyBlbGlnaWJpbGl0eSBxdWVzdGlvbnMg4oCUIG5ldmVyIHRyZWF0IGFzIHBsYWluIGxvY2F0aW9uIGZpZWxkcy4gKi9cbmZ1bmN0aW9uIGlzTGVnYWxFbGlnaWJpbGl0eVF1ZXN0aW9uKG5vcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIG5vcm0uaW5jbHVkZXMoXCJhdXRob3JpemVkXCIpIHx8XG4gICAgbm9ybS5pbmNsdWRlcyhcImF1dGhvcmlzZWRcIikgfHxcbiAgICBub3JtLmluY2x1ZGVzKFwic3BvbnNvcnNoaXBcIikgfHxcbiAgICBub3JtLmluY2x1ZGVzKFwic3BvbnNvclwiKSB8fFxuICAgIG5vcm0uaW5jbHVkZXMoXCJlbGlnaWJsZSB0byB3b3JrXCIpIHx8XG4gICAgbm9ybS5pbmNsdWRlcyhcIndvcmsgYXV0aG9yaXphdGlvblwiKSB8fFxuICAgIG5vcm0uaW5jbHVkZXMoXCJ2aXNhXCIpIHx8XG4gICAgKG5vcm0uaW5jbHVkZXMoXCJyZXF1aXJlXCIpICYmIG5vcm0uaW5jbHVkZXMoXCJlbXBsb3llclwiKSlcbiAgKVxufVxuXG5mdW5jdGlvbiBpc1BsYWluTG9jYXRpb25MYWJlbChub3JtOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKGlzTGVnYWxFbGlnaWJpbGl0eVF1ZXN0aW9uKG5vcm0pKSByZXR1cm4gZmFsc2VcbiAgaWYgKG5vcm0uaW5jbHVkZXMoXCJwbGFubmVkIHdvcmsgbG9jYXRpb25cIikpIHJldHVybiBmYWxzZVxuICBpZiAobm9ybS5pbmNsdWRlcyhcInByZWZlcnJlZCB3b3JrIGxvY2F0aW9uXCIpKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIChcbiAgICBub3JtID09PSBcImxvY2F0aW9uXCIgfHxcbiAgICBub3JtID09PSBcImN1cnJlbnQgbG9jYXRpb25cIiB8fFxuICAgIG5vcm0gPT09IFwiY3VycmVudCBjaXR5XCIgfHxcbiAgICBub3JtID09PSBcIndoZXJlIGFyZSB5b3UgbG9jYXRlZFwiIHx8XG4gICAgbm9ybSA9PT0gXCJ3aGVyZSBhcmUgeW91IGJhc2VkXCIgfHxcbiAgICBub3JtID09PSBcIndoZXJlIGJhc2VkXCIgfHxcbiAgICBub3JtID09PSBcInlvdXIgbG9jYXRpb25cIiB8fFxuICAgIG5vcm0gPT09IFwiY2l0eVwiIHx8XG4gICAgbm9ybSA9PT0gXCJ0b3duXCIgfHxcbiAgICAvXmN1cnJlbnQgKGNpdHl8bG9jYXRpb258YWRkcmVzcykkLy50ZXN0KG5vcm0pIHx8XG4gICAgKG5vcm0uaW5jbHVkZXMoXCJ3aGVyZSBhcmUgeW91XCIpICYmXG4gICAgICAobm9ybS5pbmNsdWRlcyhcImJhc2VkXCIpIHx8IG5vcm0uaW5jbHVkZXMoXCJsb2NhdGVkXCIpKSlcbiAgKVxufVxuXG5mdW5jdGlvbiBpc1BsYW5uZWRXb3JrTG9jYXRpb25MYWJlbChub3JtOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKGlzTGVnYWxFbGlnaWJpbGl0eVF1ZXN0aW9uKG5vcm0pKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIChcbiAgICBub3JtID09PSBcInBsYW5uZWQgd29yayBsb2NhdGlvblwiIHx8XG4gICAgbm9ybSA9PT0gXCJwcmVmZXJyZWQgd29yayBsb2NhdGlvblwiIHx8XG4gICAgbm9ybSA9PT0gXCJ3b3JrIGxvY2F0aW9uXCIgfHxcbiAgICBub3JtID09PSBcInByZWZlcnJlZCBsb2NhdGlvblwiIHx8XG4gICAgKG5vcm0uaW5jbHVkZXMoXCJwbGFubmVkXCIpICYmIG5vcm0uaW5jbHVkZXMoXCJsb2NhdGlvblwiKSAmJiAhbm9ybS5pbmNsdWRlcyhcImF1dGhvcml6ZWRcIikpIHx8XG4gICAgKG5vcm0uaW5jbHVkZXMoXCJwcmVmZXJyZWRcIikgJiZcbiAgICAgIG5vcm0uaW5jbHVkZXMoXCJ3b3JrXCIpICYmXG4gICAgICBub3JtLmluY2x1ZGVzKFwibG9jYXRpb25cIikgJiZcbiAgICAgICFub3JtLmluY2x1ZGVzKFwiYXV0aG9yaXplZFwiKSlcbiAgKVxufVxuXG50eXBlIEFuc3dlclJlc29sdmVyID0ge1xuICBrZXlzOiBzdHJpbmdbXVxuICAvKiogSGlnaGVyID0gdHJ5IGZpcnN0IGZvciBvdmVybGFwcGluZyBsYWJlbHMgKi9cbiAgcHJpb3JpdHk/OiBudW1iZXJcbiAgZ2V0OiAoaDogQXV0b2ZpbGxJbmZvUGF5bG9hZCwgbGFiZWxOb3JtOiBzdHJpbmcsIG9wdGlvbnM6IHN0cmluZ1tdKSA9PiBzdHJpbmdcbn1cblxuY29uc3QgQU5TV0VSX1JFU09MVkVSUzogQW5zd2VyUmVzb2x2ZXJbXSA9IFtcbiAge1xuICAgIGtleXM6IFtcImZpcnN0IG5hbWVcIiwgXCJmaXJzdG5hbWVcIiwgXCJnaXZlbiBuYW1lXCIsIFwibGVnYWwgZmlyc3QgbmFtZVwiXSxcbiAgICBwcmlvcml0eTogMjAsXG4gICAgZ2V0OiAoaCkgPT4gaC5pZGVudGl0eS5maXJzdE5hbWVcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcIm1pZGRsZSBuYW1lXCIsIFwibWlkZGxlbmFtZVwiXSxcbiAgICBwcmlvcml0eTogMjAsXG4gICAgZ2V0OiAoaCkgPT4gZXh0cmFzU3RyaW5nKGgsIFwibWlkZGxlTmFtZVwiKVxuICB9LFxuICB7XG4gICAga2V5czogW1wibGFzdCBuYW1lXCIsIFwibGFzdG5hbWVcIiwgXCJzdXJuYW1lXCIsIFwiZmFtaWx5IG5hbWVcIiwgXCJsZWdhbCBsYXN0IG5hbWVcIl0sXG4gICAgcHJpb3JpdHk6IDIwLFxuICAgIGdldDogKGgpID0+IGguaWRlbnRpdHkubGFzdE5hbWVcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcInByZWZlcnJlZCBuYW1lXCIsIFwicHJlZmVycmVkIGZpcnN0IG5hbWVcIl0sXG4gICAgcHJpb3JpdHk6IDE1LFxuICAgIGdldDogKGgpID0+IGV4dHJhc1N0cmluZyhoLCBcInByZWZlcnJlZEZpcnN0TmFtZVwiKVxuICB9LFxuICB7XG4gICAga2V5czogW1wiZnVsbCBuYW1lXCIsIFwiY2FuZGlkYXRlIG5hbWVcIiwgXCJhcHBsaWNhbnQgbmFtZVwiXSxcbiAgICBwcmlvcml0eTogMTAsXG4gICAgZ2V0OiAoaCkgPT5cbiAgICAgIGguaWRlbnRpdHkuZnVsbE5hbWUgfHxcbiAgICAgIGAke2guaWRlbnRpdHkuZmlyc3ROYW1lfSAke2guaWRlbnRpdHkubGFzdE5hbWV9YC50cmltKClcbiAgfSxcbiAge1xuICAgIC8vIEJhcmUgXCJuYW1lXCIgb25seSB3aGVuIGxhYmVsIGlzIGV4YWN0bHkgbmFtZSAoUGVyc29uaW8gXCJOYW1lKlwiKVxuICAgIGtleXM6IFtcIm5hbWVcIl0sXG4gICAgcHJpb3JpdHk6IDUsXG4gICAgZ2V0OiAoaCwgbGFiZWxOb3JtKSA9PiB7XG4gICAgICBpZiAobGFiZWxOb3JtICE9PSBcIm5hbWVcIikgcmV0dXJuIFwiXCJcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGguaWRlbnRpdHkuZnVsbE5hbWUgfHxcbiAgICAgICAgYCR7aC5pZGVudGl0eS5maXJzdE5hbWV9ICR7aC5pZGVudGl0eS5sYXN0TmFtZX1gLnRyaW0oKVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGtleXM6IFtcImVtYWlsXCIsIFwiZSBtYWlsXCIsIFwiZW1haWwgYWRkcmVzc1wiLCBcIndvcmsgZW1haWxcIl0sXG4gICAgZ2V0OiAoaCkgPT4gaC5pZGVudGl0eS5lbWFpbFxuICB9LFxuICB7XG4gICAga2V5czogW1wicGhvbmVcIiwgXCJwaG9uZSBudW1iZXJcIiwgXCJtb2JpbGVcIiwgXCJtb2JpbGUgcGhvbmVcIiwgXCJjZWxsXCIsIFwidGVsZXBob25lXCJdLFxuICAgIGdldDogKGgpID0+IGguaWRlbnRpdHkucGhvbmVcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcImxpbmtlZGluXCIsIFwibGlua2VkaW4gdXJsXCIsIFwibGlua2VkaW4gcHJvZmlsZVwiLCBcImxpbmtlZGluIGxpbmtcIl0sXG4gICAgZ2V0OiAoaCkgPT4gaC5pZGVudGl0eS5saW5rZWRpblxuICB9LFxuICB7XG4gICAga2V5czogW1wiZ2l0aHViXCIsIFwiZ2l0aHViIHVybFwiLCBcImdpdGh1YiBwcm9maWxlXCJdLFxuICAgIGdldDogKGgpID0+IGV4dHJhc1N0cmluZyhoLCBcImdpdGh1YlwiKVxuICB9LFxuICB7XG4gICAga2V5czogW1wid2Vic2l0ZVwiLCBcInBlcnNvbmFsIHdlYnNpdGVcIiwgXCJwb3J0Zm9saW9cIiwgXCJwZXJzb25hbCBzaXRlXCJdLFxuICAgIGdldDogKGgpID0+IGguaWRlbnRpdHkud2Vic2l0ZVxuICB9LFxuICB7XG4gICAga2V5czogW1xuICAgICAgXCJjdXJyZW50IGxvY2F0aW9uXCIsXG4gICAgICBcImN1cnJlbnQgY2l0eVwiLFxuICAgICAgXCJ3aGVyZSBhcmUgeW91IGxvY2F0ZWRcIixcbiAgICAgIFwid2hlcmUgYXJlIHlvdSBiYXNlZFwiLFxuICAgICAgXCJ3aGVyZSBiYXNlZFwiLFxuICAgICAgXCJ5b3VyIGxvY2F0aW9uXCIsXG4gICAgICBcImxvY2F0aW9uIGNpdHlcIlxuICAgIF0sXG4gICAgcHJpb3JpdHk6IDI1LFxuICAgIGdldDogKGgsIGxhYmVsTm9ybSkgPT4ge1xuICAgICAgaWYgKGlzTGVnYWxFbGlnaWJpbGl0eVF1ZXN0aW9uKGxhYmVsTm9ybSkpIHJldHVybiBcIlwiXG4gICAgICBpZiAoIWlzUGxhaW5Mb2NhdGlvbkxhYmVsKGxhYmVsTm9ybSkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGxhYmVsTm9ybSAhPT0gXCJjdXJyZW50IGNpdHlcIiAmJlxuICAgICAgICAgIGxhYmVsTm9ybSAhPT0gXCJ3aGVyZSBhcmUgeW91IGxvY2F0ZWRcIiAmJlxuICAgICAgICAgIGxhYmVsTm9ybSAhPT0gXCJ3aGVyZSBhcmUgeW91IGJhc2VkXCIgJiZcbiAgICAgICAgICBsYWJlbE5vcm0gIT09IFwid2hlcmUgYmFzZWRcIiAmJlxuICAgICAgICAgIGxhYmVsTm9ybSAhPT0gXCJ5b3VyIGxvY2F0aW9uXCIgJiZcbiAgICAgICAgICBsYWJlbE5vcm0gIT09IFwibG9jYXRpb24gY2l0eVwiXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXRMb2NhdGlvbihoKSB8fCBoLmlkZW50aXR5LmFkZHJlc3MuY2l0eVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGtleXM6IFtcImNpdHlcIiwgXCJ0b3duXCJdLFxuICAgIHByaW9yaXR5OiAxMCxcbiAgICBnZXQ6IChoLCBsYWJlbE5vcm0pID0+IHtcbiAgICAgIGlmIChpc0xlZ2FsRWxpZ2liaWxpdHlRdWVzdGlvbihsYWJlbE5vcm0pKSByZXR1cm4gXCJcIlxuICAgICAgaWYgKGxhYmVsTm9ybS5pbmNsdWRlcyhcImxvY2F0aW9uXCIpICYmICFpc1BsYWluTG9jYXRpb25MYWJlbChsYWJlbE5vcm0pKSB7XG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgICB9XG4gICAgICByZXR1cm4gaC5pZGVudGl0eS5hZGRyZXNzLmNpdHlcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXCJzdGF0ZVwiLCBcInByb3ZpbmNlXCIsIFwicmVnaW9uXCJdLFxuICAgIGdldDogKGgpID0+IGguaWRlbnRpdHkuYWRkcmVzcy5zdGF0ZVxuICB9LFxuICB7XG4gICAga2V5czogW1wiY291bnRyeVwiLCBcImNvdW50cnkgcmVnaW9uXCIsIFwibmF0aW9uXCJdLFxuICAgIGdldDogKGgpID0+IGguaWRlbnRpdHkuYWRkcmVzcy5jb3VudHJ5XG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXCJjb3VudHlcIl0sXG4gICAgZ2V0OiAoaCkgPT4gZXh0cmFzU3RyaW5nKGgsIFwiY291bnR5XCIpXG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXCJ6aXBcIiwgXCJ6aXAgY29kZVwiLCBcInBvc3RhbFwiLCBcInBvc3RhbCBjb2RlXCIsIFwicG9zdGNvZGVcIl0sXG4gICAgZ2V0OiAoaCkgPT4gaC5pZGVudGl0eS5hZGRyZXNzLnBvc3RhbENvZGVcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcImFkZHJlc3MgbGluZSAyXCIsIFwiYWRkcmVzcyAyXCIsIFwiYXB0XCIsIFwic3VpdGVcIiwgXCJ1bml0XCJdLFxuICAgIHByaW9yaXR5OiAxNSxcbiAgICBnZXQ6IChoKSA9PiBoLmlkZW50aXR5LmFkZHJlc3MubGluZTJcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcImFkZHJlc3NcIiwgXCJzdHJlZXQgYWRkcmVzc1wiLCBcImFkZHJlc3MgbGluZSAxXCIsIFwiYWRkcmVzcyAxXCIsIFwic3RyZWV0XCJdLFxuICAgIHByaW9yaXR5OiAxMCxcbiAgICBnZXQ6IChoKSA9PiBoLmlkZW50aXR5LmFkZHJlc3MubGluZTFcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcImdlbmRlclwiLCBcInNleFwiXSxcbiAgICBnZXQ6IChoKSA9PiBlbXBsb3ltZW50RmllbGQoaCwgXCJnZW5kZXJcIilcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcInJhY2VcIiwgXCJldGhuaWNpdHlcIiwgXCJldGhuaWNcIl0sXG4gICAgZ2V0OiAoaCkgPT4gZW1wbG95bWVudEZpZWxkKGgsIFwicmFjZVwiKVxuICB9LFxuICB7XG4gICAga2V5czogW1widmV0ZXJhblwiLCBcIm1pbGl0YXJ5XCJdLFxuICAgIGdldDogKGgpID0+IGVtcGxveW1lbnRGaWVsZChoLCBcInZldGVyYW5cIilcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcImRpc2FiaWxpdHlcIiwgXCJkaXNhYmxlZFwiXSxcbiAgICBnZXQ6IChoKSA9PiBlbXBsb3ltZW50RmllbGQoaCwgXCJkaXNhYmlsaXR5XCIpXG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXCJoaXNwYW5pY1wiLCBcImxhdGlub1wiLCBcImxhdGluYVwiXSxcbiAgICBnZXQ6IChoKSA9PiBlbXBsb3ltZW50RmllbGQoaCwgXCJoaXNwYW5pY1wiKVxuICB9LFxuICB7XG4gICAga2V5czogW1wibGdidFwiLCBcImxnYnRxXCJdLFxuICAgIGdldDogKGgpID0+IGVtcGxveW1lbnRGaWVsZChoLCBcImxnYnRcIilcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcInByb25vdW5zXCJdLFxuICAgIGdldDogKGgpID0+IGV4dHJhc1N0cmluZyhoLCBcInByb25vdW5zXCIpXG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXG4gICAgICBcImV4cGVjdGVkIHNhbGFyeVwiLFxuICAgICAgXCJkZXNpcmVkIHNhbGFyeVwiLFxuICAgICAgXCJzYWxhcnkgZXhwZWN0YXRpb25cIixcbiAgICAgIFwic2FsYXJ5IGV4cGVjdGF0aW9uc1wiLFxuICAgICAgXCJjb21wZW5zYXRpb25cIixcbiAgICAgIFwic2FsYXJ5XCJcbiAgICBdLFxuICAgIHByaW9yaXR5OiAyMCxcbiAgICBnZXQ6IChoKSA9PiBleHRyYXNTdHJpbmcoaCwgXCJzYWxhcnlcIilcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcbiAgICAgIFwiYmlydGhkYXlcIixcbiAgICAgIFwiZGF0ZSBvZiBiaXJ0aFwiLFxuICAgICAgXCJkb2JcIixcbiAgICAgIFwiYmlydGggZGF0ZVwiLFxuICAgICAgXCJiaXJ0aGRhdGVcIlxuICAgIF0sXG4gICAgcHJpb3JpdHk6IDI1LFxuICAgIGdldDogKGgsIF9uLCBvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCByYXcgPVxuICAgICAgICBleHRyYXNTdHJpbmcoaCwgXCJiaXJ0aGRheVwiKSB8fCBleHRyYXNTdHJpbmcoaCwgXCJkYXRlT2ZCaXJ0aFwiKVxuICAgICAgaWYgKCFyYXcudHJpbSgpKSByZXR1cm4gXCJcIlxuICAgICAgY29uc3QgdCA9IHJhdy50cmltKClcbiAgICAgIGxldCB5bWQgPSB0XG4gICAgICBpZiAoL15cXGR7NH0tXFxkezJ9JC8udGVzdCh0KSkgeW1kID0gYCR7dH0tMDFgXG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgdXMgPSB0Lm1hdGNoKC9eKFxcZHsxLDJ9KVxcLyhcXGR7MSwyfSlcXC8oXFxkezR9KSQvKVxuICAgICAgICBpZiAodXMpIHtcbiAgICAgICAgICB5bWQgPSBgJHt1c1szXX0tJHt1c1sxXS5wYWRTdGFydCgyLCBcIjBcIil9LSR7dXNbMl0ucGFkU3RhcnQoMiwgXCIwXCIpfWBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbSA9IHltZC5tYXRjaCgvXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pJC8pXG4gICAgICBjb25zdCB1c0ZtdCA9IG0gPyBgJHttWzJdfS8ke21bM119LyR7bVsxXX1gIDogeW1kXG4gICAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm4gdXNGbXRcbiAgICAgIGNvbnN0IGpvaW5lZCA9IG9wdGlvbnMubWFwKG5vcm1hbGl6ZUxhYmVsKS5qb2luKFwiIFwiKVxuICAgICAgaWYgKGpvaW5lZC5pbmNsdWRlcyhcInl5eXlcIikgfHwgam9pbmVkLmluY2x1ZGVzKFwiLVwiKSkgcmV0dXJuIHltZFxuICAgICAgcmV0dXJuIHVzRm10XG4gICAgfVxuICB9LFxuICB7XG4gICAga2V5czogW1xuICAgICAgXCJ5ZWFycyBvZiBleHBlcmllbmNlXCIsXG4gICAgICBcInllYXJzIGV4cGVyaWVuY2VcIixcbiAgICAgIFwidG90YWwgZXhwZXJpZW5jZVwiLFxuICAgICAgXCJob3cgbWFueSB5ZWFyc1wiXG4gICAgXSxcbiAgICBwcmlvcml0eTogMzUsXG4gICAgZ2V0OiAoaCwgbGFiZWxOb3JtLCBvcHRpb25zKSA9PiB7XG4gICAgICBpZiAoaXNMZWdhbEVsaWdpYmlsaXR5UXVlc3Rpb24obGFiZWxOb3JtKSkgcmV0dXJuIFwiXCJcbiAgICAgIGNvbnN0IHYgPSBleHRyYXNTdHJpbmcoaCwgXCJ5ZWFyc09mRXhwZXJpZW5jZVwiKVxuICAgICAgaWYgKCF2KSByZXR1cm4gXCJcIlxuICAgICAgcmV0dXJuIG9wdGlvbnMubGVuZ3RoID8gYWRhcHRUb09wdGlvbnModiwgb3B0aW9ucykgOiB2XG4gICAgfVxuICB9LFxuICB7XG4gICAga2V5czogW1xuICAgICAgXCJwbGFubmVkIHdvcmsgbG9jYXRpb25cIixcbiAgICAgIFwicHJlZmVycmVkIHdvcmsgbG9jYXRpb25cIixcbiAgICAgIFwid29yayBsb2NhdGlvblwiLFxuICAgICAgXCJwcmVmZXJyZWQgbG9jYXRpb25cIlxuICAgIF0sXG4gICAgcHJpb3JpdHk6IDM1LFxuICAgIGdldDogKGgsIGxhYmVsTm9ybSwgb3B0aW9ucykgPT4ge1xuICAgICAgaWYgKCFpc1BsYW5uZWRXb3JrTG9jYXRpb25MYWJlbChsYWJlbE5vcm0pKSByZXR1cm4gXCJcIlxuICAgICAgY29uc3QgdiA9IGV4dHJhc1N0cmluZyhoLCBcInBsYW5uZWRXb3JrTG9jYXRpb25cIilcbiAgICAgIGlmICghdikgcmV0dXJuIFwiXCJcbiAgICAgIHJldHVybiBvcHRpb25zLmxlbmd0aCA/IGFkYXB0VG9PcHRpb25zKHYsIG9wdGlvbnMpIDogdlxuICAgIH1cbiAgfSxcbiAge1xuICAgIGtleXM6IFtcbiAgICAgIFwiYXZhaWxhYmxlIGZyb21cIixcbiAgICAgIFwiYXZhaWxhYmxlIGRhdGVcIixcbiAgICAgIFwiYXZhaWxhYmlsaXR5IGRhdGVcIixcbiAgICAgIFwiZWFybGllc3Qgc3RhcnRcIixcbiAgICAgIFwic3RhcnQgZGF0ZVwiLFxuICAgICAgXCJoaXJpbmcgZGF0ZVwiLFxuICAgICAgXCJhdmFpbGFiaWxpdHlcIlxuICAgIF0sXG4gICAgcHJpb3JpdHk6IDIwLFxuICAgIGdldDogKGgsIF9uLCBvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBpc28gPSBmb3JtYXRIaXJpbmdEYXRlKGgpXG4gICAgICBjb25zdCB1cyA9IGZvcm1hdEhpcmluZ0RhdGVVcyhoKVxuICAgICAgaWYgKCFvcHRpb25zLmxlbmd0aCkgcmV0dXJuIGlzb1xuICAgICAgY29uc3Qgam9pbmVkID0gb3B0aW9ucy5tYXAobm9ybWFsaXplTGFiZWwpLmpvaW4oXCIgXCIpXG4gICAgICBpZiAoam9pbmVkLmluY2x1ZGVzKFwibW1cIikgfHwgam9pbmVkLmluY2x1ZGVzKFwiZGRcIikpIHJldHVybiB1c1xuICAgICAgcmV0dXJuIGlzb1xuICAgIH1cbiAgfSxcbiAge1xuICAgIGtleXM6IFtcbiAgICAgIFwic291cmNlXCIsXG4gICAgICBcImpvYiBwb3J0YWxcIixcbiAgICAgIFwiaG93IGRpZCB5b3UgaGVhclwiLFxuICAgICAgXCJyZWZlcnJhbCBzb3VyY2VcIixcbiAgICAgIFwiYXBwbGljYXRpb24gc291cmNlXCJcbiAgICBdLFxuICAgIHByaW9yaXR5OiAxNSxcbiAgICBnZXQ6IChoLCBfbiwgb3B0aW9ucykgPT4ge1xuICAgICAgY29uc3QgbGlua2VkaW4gPSBoLmlkZW50aXR5LmxpbmtlZGluXG4gICAgICBpZiAobGlua2VkaW4gJiYgb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gb3B0aW9ucy5maW5kKChvKSA9PiAvbGlua2VkaW4vaS50ZXN0KG8pKVxuICAgICAgICBpZiAoaGl0KSByZXR1cm4gaGl0XG4gICAgICB9XG4gICAgICBpZiAobGlua2VkaW4pIHJldHVybiBcIkxpbmtlZEluXCJcbiAgICAgIGNvbnN0IG90aGVyID0gb3B0aW9ucy5maW5kKChvKSA9PiAvXm90aGVyJC9pLnRlc3Qoby50cmltKCkpKVxuICAgICAgcmV0dXJuIG90aGVyIHx8IGV4dHJhc1N0cmluZyhoLCBcImFkZGl0aW9uYWxBcHBsaWNhdGlvbkluZm9cIikgfHwgXCJPdGhlclwiXG4gICAgfVxuICB9LFxuICB7XG4gICAga2V5czogW1xuICAgICAgXCJnZHByXCIsXG4gICAgICBcInByaXZhY3kgcG9saWN5XCIsXG4gICAgICBcImRhdGEgcmV0ZW50aW9uXCIsXG4gICAgICBcInJldGFpbiBteSBkYXRhXCIsXG4gICAgICBcImNvbnNlbnRcIixcbiAgICAgIFwiaSBhZ3JlZVwiLFxuICAgICAgXCJ0ZXJtcyBhbmQgY29uZGl0aW9uc1wiLFxuICAgICAgXCJ0ZXJtcyBvZiB1c2VcIlxuICAgIF0sXG4gICAgcHJpb3JpdHk6IDMwLFxuICAgIGdldDogKF9oLCBsYWJlbE5vcm0sIG9wdGlvbnMpID0+IHtcbiAgICAgIC8vIE5ldmVyIGFuc3dlciBsZWdhbCB3b3JrLWF1dGggd2l0aCBHRFBSIHllc1xuICAgICAgaWYgKGlzTGVnYWxFbGlnaWJpbGl0eVF1ZXN0aW9uKGxhYmVsTm9ybSkpIHJldHVybiBcIlwiXG4gICAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm4gXCJZZXNcIlxuICAgICAgY29uc3QgaGl0ID1cbiAgICAgICAgb3B0aW9ucy5maW5kKChvKSA9PlxuICAgICAgICAgIC9hZ3JlZXxhY2NlcHR8Y29uc2VudHx5ZXN8aSBoYXZlIHJlYWR8YWNrbm93bGVkZ2UvaS50ZXN0KG8pXG4gICAgICAgICkgfHwgb3B0aW9ucy5maW5kKChvKSA9PiAhL3NlbGVjdHxjaG9vc2V8cGxlYXNlL2kudGVzdChvKSlcbiAgICAgIHJldHVybiBoaXQgfHwgXCJZZXNcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIC8vIFwiYXV0aG9yaXplZCAuLi4gd2l0aG91dCBlbXBsb3llciBzcG9uc29yc2hpcD9cIiDihpIgWWVzIG9ubHkgaWYgYXV0aG9yaXplZCBBTkQgbm8gc3BvbnNvcnNoaXBcbiAgICBrZXlzOiBbXG4gICAgICBcIndpdGhvdXQgZW1wbG95ZXIgc3BvbnNvcnNoaXBcIixcbiAgICAgIFwid2l0aG91dCBzcG9uc29yc2hpcFwiLFxuICAgICAgXCJhdXRob3JpemVkIHRvIHdvcmtcIixcbiAgICAgIFwibGVnYWxseSBhdXRob3JpemVkXCIsXG4gICAgICBcImVsaWdpYmxlIHRvIHdvcmtcIixcbiAgICAgIFwid29yayBhdXRob3JpemF0aW9uXCIsXG4gICAgICBcIndvcmsgYXV0aG9yaXNhdGlvblwiXG4gICAgXSxcbiAgICBwcmlvcml0eTogNDAsXG4gICAgZ2V0OiAoaCwgbGFiZWxOb3JtLCBvcHRpb25zKSA9PiB7XG4gICAgICBpZiAoIWlzTGVnYWxFbGlnaWJpbGl0eVF1ZXN0aW9uKGxhYmVsTm9ybSkgJiYgIWxhYmVsTm9ybS5pbmNsdWRlcyhcImF1dGhvcml6ZWRcIikpIHtcbiAgICAgICAgaWYgKCFsYWJlbE5vcm0uaW5jbHVkZXMoXCJ3b3JrIGF1dGhvcml6YXRpb25cIikpIHJldHVybiBcIlwiXG4gICAgICB9XG4gICAgICBjb25zdCBhdXRoID0gaXNXb3JrQXV0aG9yaXplZChoKVxuICAgICAgY29uc3Qgc3BvbnNvciA9IG5lZWRzU3BvbnNvcnNoaXAoaClcbiAgICAgIGNvbnN0IGFza3NXaXRob3V0U3BvbnNvcnNoaXAgPVxuICAgICAgICBsYWJlbE5vcm0uaW5jbHVkZXMoXCJ3aXRob3V0XCIpICYmIGxhYmVsTm9ybS5pbmNsdWRlcyhcInNwb25zb3JzaGlwXCIpXG4gICAgICBjb25zdCBhc2tzQXV0aG9yaXplZCA9XG4gICAgICAgIGxhYmVsTm9ybS5pbmNsdWRlcyhcImF1dGhvcml6ZWRcIikgfHxcbiAgICAgICAgbGFiZWxOb3JtLmluY2x1ZGVzKFwiYXV0aG9yaXNlZFwiKSB8fFxuICAgICAgICBsYWJlbE5vcm0uaW5jbHVkZXMoXCJlbGlnaWJsZSB0byB3b3JrXCIpIHx8XG4gICAgICAgIGxhYmVsTm9ybS5pbmNsdWRlcyhcIndvcmsgYXV0aG9yaXphdGlvblwiKVxuXG4gICAgICBsZXQgeWVzOiBib29sZWFuIHwgbnVsbCA9IG51bGxcbiAgICAgIGlmIChhc2tzV2l0aG91dFNwb25zb3JzaGlwKSB7XG4gICAgICAgIHllcyA9XG4gICAgICAgICAgYXV0aCA9PT0gdHJ1ZSAmJiBzcG9uc29yICE9PSB0cnVlXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogYXV0aCA9PT0gZmFsc2UgfHwgc3BvbnNvciA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgfSBlbHNlIGlmIChhc2tzQXV0aG9yaXplZCkge1xuICAgICAgICB5ZXMgPSBhdXRoXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJhdyA9IGVtcGxveW1lbnRGaWVsZChoLCBcIndvcmtBdXRob3JpemF0aW9uXCIpXG5cbiAgICAgIC8vIE5hdGl2ZSBZZXMvTm8gY29udHJvbHNcbiAgICAgIGlmICh5ZXMgIT0gbnVsbCAmJiBoYXNZZXNOb09wdGlvbnMob3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHBpY2tZZXNObyhvcHRpb25zLCB5ZXMpXG4gICAgICB9XG4gICAgICAvLyBGcmVlLXRleHQgLyB0ZXh0YXJlYTogd3JpdGUgYSBjbGVhciBzZW50ZW5jZSwgbmV2ZXIgbG9jYXRpb24ganVua1xuICAgICAgaWYgKHllcyAhPSBudWxsICYmICFvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICBpZiAoYXNrc1dpdGhvdXRTcG9uc29yc2hpcCkge1xuICAgICAgICAgIHJldHVybiB5ZXNcbiAgICAgICAgICAgID8gXCJZZXMg4oCUIEkgYW0gYXV0aG9yaXplZCB0byB3b3JrIHdpdGhvdXQgZW1wbG95ZXIgc3BvbnNvcnNoaXAuXCJcbiAgICAgICAgICAgIDogXCJObyDigJQgSSB3aWxsIHJlcXVpcmUgZW1wbG95ZXIgc3BvbnNvcnNoaXAuXCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geWVzXG4gICAgICAgICAgPyByYXcgfHwgXCJZZXMsIEkgYW0gYXV0aG9yaXplZCB0byB3b3JrLlwiXG4gICAgICAgICAgOiByYXcgfHwgXCJObywgSSBhbSBub3QgY3VycmVudGx5IGF1dGhvcml6ZWQgd2l0aG91dCBzcG9uc29yc2hpcC5cIlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3B0aW9ucy5sZW5ndGggPyBhZGFwdFRvT3B0aW9ucyhyYXcsIG9wdGlvbnMpIDogcmF3XG4gICAgfVxuICB9LFxuICB7XG4gICAga2V5czogW1xuICAgICAgXCJyZXF1aXJlIGVtcGxveWVyIHNwb25zb3JzaGlwXCIsXG4gICAgICBcInJlcXVpcmUgc3BvbnNvcnNoaXBcIixcbiAgICAgIFwidmlzYSBzcG9uc29yc2hpcFwiLFxuICAgICAgXCJzcG9uc29yc2hpcCBub3cgb3IgaW4gdGhlIGZ1dHVyZVwiLFxuICAgICAgXCJzcG9uc29yc2hpcFwiXG4gICAgXSxcbiAgICBwcmlvcml0eTogNDAsXG4gICAgZ2V0OiAoaCwgbGFiZWxOb3JtLCBvcHRpb25zKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgICFsYWJlbE5vcm0uaW5jbHVkZXMoXCJzcG9uc29yXCIpICYmXG4gICAgICAgICFsYWJlbE5vcm0uaW5jbHVkZXMoXCJ2aXNhXCIpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNwb25zb3IgPSBuZWVkc1Nwb25zb3JzaGlwKGgpXG4gICAgICBjb25zdCBhc2tzUmVxdWlyZSA9XG4gICAgICAgIGxhYmVsTm9ybS5pbmNsdWRlcyhcInJlcXVpcmVcIikgfHxcbiAgICAgICAgbGFiZWxOb3JtLmluY2x1ZGVzKFwibmVlZFwiKSB8fFxuICAgICAgICBsYWJlbE5vcm0uaW5jbHVkZXMoXCJ3aWxsIHlvdVwiKVxuXG4gICAgICBjb25zdCByYXcgPSBlbXBsb3ltZW50RmllbGQoaCwgXCJzcG9uc29yc2hpcFN0YXR1c1wiKVxuXG4gICAgICBpZiAoc3BvbnNvciAhPSBudWxsICYmIGFza3NSZXF1aXJlICYmIGhhc1llc05vT3B0aW9ucyhvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gcGlja1llc05vKG9wdGlvbnMsIHNwb25zb3IpXG4gICAgICB9XG4gICAgICBpZiAoc3BvbnNvciAhPSBudWxsICYmIGFza3NSZXF1aXJlICYmICFvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc3BvbnNvclxuICAgICAgICAgID8gXCJZZXMg4oCUIEkgd2lsbCByZXF1aXJlIGVtcGxveWVyIHNwb25zb3JzaGlwIG5vdyBvciBpbiB0aGUgZnV0dXJlLlwiXG4gICAgICAgICAgOiBcIk5vIOKAlCBJIHdpbGwgbm90IHJlcXVpcmUgZW1wbG95ZXIgc3BvbnNvcnNoaXAuXCJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbnMubGVuZ3RoID8gYWRhcHRUb09wdGlvbnMocmF3LCBvcHRpb25zKSA6IHJhd1xuICAgIH1cbiAgfVxuXVxuXG5leHBvcnQgZnVuY3Rpb24gbG9va3VwQW5zd2VyKFxuICBodWI6IEF1dG9maWxsSW5mb1BheWxvYWQsXG4gIGxhYmVsOiBzdHJpbmcsXG4gIG9wdGlvbnM6IHN0cmluZ1tdID0gW11cbik6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBub3JtID0gbm9ybWFsaXplTGFiZWwobGFiZWwpXG4gIGlmICghbm9ybSkgcmV0dXJuIG51bGxcblxuICAvLyBFeHBsaWNpdCBRJkEgZnJvbSBodWIgZmlyc3QgKGV4YWN0IC8gY2FyZWZ1bCBjb250YWlucylcbiAgbGV0IGJlc3RBbnN3ZXI6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIGxldCBiZXN0QW5zd2VyU2NvcmUgPSAwXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGh1Yi5hbnN3ZXJzIHx8IHt9KSkge1xuICAgIGlmICghdmFsdWUpIGNvbnRpbnVlXG4gICAgY29uc3QgbmsgPSBub3JtYWxpemVMYWJlbChrZXkpXG4gICAgbGV0IHNjb3JlID0gMFxuICAgIGlmIChuayA9PT0gbm9ybSkgc2NvcmUgPSAxMDBcbiAgICBlbHNlIGlmIChcbiAgICAgIC8vIENvbnRpZ3VvdXMgcGhyYXNlIG9ubHkg4oCUIGJsb2NrcyBzaG9ydCBrZXlzIGxpa2UgXCJMb2NhdGlvblwiIG1hdGNoaW5nXG4gICAgICAvLyBcIuKApnBsYW5uZWQgd29yayBsb2NhdGlvbuKAplwiIC8gYXV0aCBxdWVzdGlvbnMuXG4gICAgICBuay5zcGxpdChcIiBcIikubGVuZ3RoID49IDIgJiZcbiAgICAgIG5rLmxlbmd0aCA+PSA4ICYmXG4gICAgICBub3JtLmluY2x1ZGVzKG5rKVxuICAgICkge1xuICAgICAgc2NvcmUgPSA4NVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBuay5zcGxpdChcIiBcIikubGVuZ3RoID49IDIgJiZcbiAgICAgIG5vcm0uc3BsaXQoXCIgXCIpLmxlbmd0aCA8PSBuay5zcGxpdChcIiBcIikubGVuZ3RoICsgMyAmJlxuICAgICAgKG5vcm0uaW5jbHVkZXMobmspIHx8IG5rLmluY2x1ZGVzKG5vcm0pKVxuICAgICkge1xuICAgICAgc2NvcmUgPSA3MFxuICAgIH0gZWxzZSBpZiAoIWlzTGVnYWxFbGlnaWJpbGl0eVF1ZXN0aW9uKG5vcm0pKSB7XG4gICAgICBjb25zdCBudCA9IG5ldyBTZXQobm9ybS5zcGxpdChcIiBcIikuZmlsdGVyKCh0KSA9PiB0Lmxlbmd0aCA+IDIpKVxuICAgICAgY29uc3Qga3QgPSBuay5zcGxpdChcIiBcIikuZmlsdGVyKCh0KSA9PiB0Lmxlbmd0aCA+IDIpXG4gICAgICBpZiAoa3QubGVuZ3RoID49IDIpIHtcbiAgICAgICAgY29uc3QgaGl0cyA9IGt0LmZpbHRlcigodCkgPT4gbnQuaGFzKHQpKS5sZW5ndGhcbiAgICAgICAgY29uc3QgcmF0aW8gPSBoaXRzIC8gTWF0aC5tYXgoa3QubGVuZ3RoLCBudC5zaXplKVxuICAgICAgICBpZiAocmF0aW8gPj0gMC43ICYmIGhpdHMgPj0gMikgc2NvcmUgPSBNYXRoLnJvdW5kKHJhdGlvICogNjUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTmV2ZXIgbGV0IGxvY2F0aW9uIGFuc3dlcnMgd2luIG9uIGxlZ2FsIHF1ZXN0aW9uc1xuICAgIGlmIChcbiAgICAgIGlzTGVnYWxFbGlnaWJpbGl0eVF1ZXN0aW9uKG5vcm0pICYmXG4gICAgICAvbG9jYXRpb258Y2l0eXxhZGRyZXNzLy50ZXN0KG5rKSAmJlxuICAgICAgIS9zcG9uc29yfGF1dGhvcml6fHZpc2F8ZWxpZ2libGUvLnRlc3QobmspXG4gICAgKSB7XG4gICAgICBzY29yZSA9IDBcbiAgICB9XG5cbiAgICBpZiAoc2NvcmUgPiBiZXN0QW5zd2VyU2NvcmUpIHtcbiAgICAgIGJlc3RBbnN3ZXJTY29yZSA9IHNjb3JlXG4gICAgICBiZXN0QW5zd2VyID0gdmFsdWVcbiAgICB9XG4gIH1cbiAgaWYgKGJlc3RBbnN3ZXIgJiYgYmVzdEFuc3dlclNjb3JlID49IDcwKSB7XG4gICAgLy8gUHJlZmVyIHN0cnVjdHVyZWQgcmVzb2x2ZXJzIGZvciBsZWdhbCBZZXMvTm8gd2hlbiB0aGUgZmllbGQgaXMgZnJlZS10ZXh0XG4gICAgLy8gKFBlcnNvbmlvIGF1dGggcXVlc3Rpb25zIGFyZSB0ZXh0YXJlYXMsIG5vdCByYWRpb3MpLlxuICAgIGNvbnN0IHNob3J0WWVzTm8gPSAvXih5ZXN8bm8pXFxiL2kudGVzdChiZXN0QW5zd2VyLnRyaW0oKSlcbiAgICBpZiAoXG4gICAgICAhKFxuICAgICAgICBpc0xlZ2FsRWxpZ2liaWxpdHlRdWVzdGlvbihub3JtKSAmJlxuICAgICAgICAhb3B0aW9ucy5sZW5ndGggJiZcbiAgICAgICAgc2hvcnRZZXNOb1xuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubGVuZ3RoID8gYWRhcHRUb09wdGlvbnMoYmVzdEFuc3dlciwgb3B0aW9ucykgOiBiZXN0QW5zd2VyXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWF0Y2hlcyA9IEFOU1dFUl9SRVNPTFZFUlMuZmlsdGVyKChyKSA9PiBsYWJlbE1hdGNoZXMobm9ybSwgci5rZXlzKSkuc29ydChcbiAgICAoYSwgYikgPT4gKGIucHJpb3JpdHkgPz8gMCkgLSAoYS5wcmlvcml0eSA/PyAwKVxuICApXG5cbiAgZm9yIChjb25zdCByZXNvbHZlciBvZiBtYXRjaGVzKSB7XG4gICAgY29uc3QgdiA9IHJlc29sdmVyLmdldChodWIsIG5vcm0sIG9wdGlvbnMpPy50cmltKClcbiAgICBpZiAodikgcmV0dXJuIG9wdGlvbnMubGVuZ3RoID8gYWRhcHRUb09wdGlvbnModiwgb3B0aW9ucykgOiB2XG4gIH1cblxuICBpZiAoYmVzdEFuc3dlciAmJiBiZXN0QW5zd2VyU2NvcmUgPj0gNzApIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sZW5ndGggPyBhZGFwdFRvT3B0aW9ucyhiZXN0QW5zd2VyLCBvcHRpb25zKSA6IGJlc3RBbnN3ZXJcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbi8qKlxuICogTG9jYWwgc3RhbmQtaW4gZm9yIEpvYnJpZ2h0IGZpbGwtdjIgLyBnZXRHcHRSZXN1bHRzLlxuICogQnVpbGRzIGZpbGxfZGF0YV9saXN0IGZyb20gaHViIGlkZW50aXR5ICsgYW5zd2VycyArIHN0cnVjdHVyZWQgZXh0cmFzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMb2NhbEdwdFJlc3VsdHMoXG4gIGh1YjogQXV0b2ZpbGxJbmZvUGF5bG9hZCxcbiAgZWxlbWVudHM6IEZpbGxFbGVtZW50W11cbik6IHtcbiAgZmlsbF9kYXRhX2xpc3Q6IEFycmF5PHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+XG4gIHByb2ZpbGVfZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgcHJvZmlsZURhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG59IHtcbiAgY29uc3Qgam9icmlnaHQgPSBodWJUb0pvYnJpZ2h0QXV0b2ZpbGwoaHViKVxuICBjb25zdCBmaWxsX2RhdGFfbGlzdDogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4gPSBbXVxuXG4gIGZvciAoY29uc3QgZWwgb2YgZWxlbWVudHMpIHtcbiAgICBjb25zdCBsYWJlbCA9IHR5cGVvZiBlbD8ubGFiZWwgPT09IFwic3RyaW5nXCIgPyBlbC5sYWJlbCA6IFwiXCJcbiAgICBpZiAoIWxhYmVsKSBjb250aW51ZVxuICAgIGNvbnN0IG9wdGlvbnMgPSBlbGVtZW50T3B0aW9ucyhlbClcbiAgICBsZXQgdmFsdWUgPSBsb29rdXBBbnN3ZXIoaHViLCBsYWJlbCwgb3B0aW9ucylcblxuICAgIC8vIEZhbGxiYWNrOiBhcHBsaWNhdGlvblN1bW1hcnkgZnJvbSBodWIgZXh0cmFzICh0ZWFtLXNpdGUgZGVyaXZlZClcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID1cbiAgICAgICAgaHViLmV4dHJhcz8uYXBwbGljYXRpb25TdW1tYXJ5ICYmXG4gICAgICAgIHR5cGVvZiBodWIuZXh0cmFzLmFwcGxpY2F0aW9uU3VtbWFyeSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheShodWIuZXh0cmFzLmFwcGxpY2F0aW9uU3VtbWFyeSlcbiAgICAgICAgICA/IChodWIuZXh0cmFzLmFwcGxpY2F0aW9uU3VtbWFyeSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilcbiAgICAgICAgICA6IG51bGxcbiAgICAgIGNvbnN0IG5vcm0gPSBub3JtYWxpemVMYWJlbChsYWJlbClcbiAgICAgIGlmIChzdW1tYXJ5KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAvc2FsYXJ5fGNvbXBlbnNhdGlvbi8udGVzdChub3JtKSAmJlxuICAgICAgICAgICFpc0xlZ2FsRWxpZ2liaWxpdHlRdWVzdGlvbihub3JtKSAmJlxuICAgICAgICAgIHR5cGVvZiBzdW1tYXJ5LnNhbGFyeSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgIHN1bW1hcnkuc2FsYXJ5LnRyaW0oKVxuICAgICAgICApIHtcbiAgICAgICAgICB2YWx1ZSA9IHN1bW1hcnkuc2FsYXJ5LnRyaW0oKVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIC9hdmFpbGFibGUgZnJvbXxhdmFpbGFibGUgZGF0ZXxoaXJpbmcgZGF0ZXxlYXJsaWVzdCBzdGFydHxeYXZhaWxhYmlsaXR5JC8udGVzdChcbiAgICAgICAgICAgIG5vcm1cbiAgICAgICAgICApICYmXG4gICAgICAgICAgdHlwZW9mIHN1bW1hcnkuaGlyaW5nRGF0ZSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgIHN1bW1hcnkuaGlyaW5nRGF0ZS50cmltKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsdWUgPSBzdW1tYXJ5LmhpcmluZ0RhdGUudHJpbSgpXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgaXNQbGFpbkxvY2F0aW9uTGFiZWwobm9ybSkgJiZcbiAgICAgICAgICB0eXBlb2Ygc3VtbWFyeS5sb2NhdGlvbiA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgIHN1bW1hcnkubG9jYXRpb24udHJpbSgpXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbHVlID0gc3VtbWFyeS5sb2NhdGlvbi50cmltKClcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAvYmlydGhkYXl8ZGF0ZSBvZiBiaXJ0aHxeZG9iJHxiaXJ0aCBkYXRlLy50ZXN0KG5vcm0pICYmXG4gICAgICAgICAgdHlwZW9mIHN1bW1hcnkuYmlydGhkYXkgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICBzdW1tYXJ5LmJpcnRoZGF5LnRyaW0oKVxuICAgICAgICApIHtcbiAgICAgICAgICB2YWx1ZSA9IHN1bW1hcnkuYmlydGhkYXkudHJpbSgpXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgL3llYXJzIG9mIGV4cGVyaWVuY2V8eWVhcnMgZXhwZXJpZW5jZS8udGVzdChub3JtKSAmJlxuICAgICAgICAgIHR5cGVvZiBzdW1tYXJ5LnllYXJzT2ZFeHBlcmllbmNlID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgc3VtbWFyeS55ZWFyc09mRXhwZXJpZW5jZS50cmltKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsdWUgPSBvcHRpb25zLmxlbmd0aFxuICAgICAgICAgICAgPyBhZGFwdFRvT3B0aW9ucyhzdW1tYXJ5LnllYXJzT2ZFeHBlcmllbmNlLnRyaW0oKSwgb3B0aW9ucylcbiAgICAgICAgICAgIDogc3VtbWFyeS55ZWFyc09mRXhwZXJpZW5jZS50cmltKClcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBpc1BsYW5uZWRXb3JrTG9jYXRpb25MYWJlbChub3JtKSAmJlxuICAgICAgICAgIHR5cGVvZiBzdW1tYXJ5LnBsYW5uZWRXb3JrTG9jYXRpb24gPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICBzdW1tYXJ5LnBsYW5uZWRXb3JrTG9jYXRpb24udHJpbSgpXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbHVlID0gb3B0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgID8gYWRhcHRUb09wdGlvbnMoc3VtbWFyeS5wbGFubmVkV29ya0xvY2F0aW9uLnRyaW0oKSwgb3B0aW9ucylcbiAgICAgICAgICAgIDogc3VtbWFyeS5wbGFubmVkV29ya0xvY2F0aW9uLnRyaW0oKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIGZpbGxfZGF0YV9saXN0LnB1c2goeyBuYW1lOiBsYWJlbCwgdmFsdWUgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbGxfZGF0YV9saXN0LFxuICAgIHByb2ZpbGVfZGF0YTogam9icmlnaHQsXG4gICAgcHJvZmlsZURhdGE6IGpvYnJpZ2h0XG4gIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5pbXBvcnQgeyByZXNvbHZlUmVzdW1lQmxvYlJlc3BvbnNlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9yZXN1bWUtYmxvYlwiXG5cbi8qKlxuICogVGVhbSBmb3JrOiBiYXNlIHJlc3VtZSA9PSBzZWxlY3RlZCBwcm9maWxlIGRlZmF1bHQgcmVzdW1lLlxuICogRW5naW5lIGhlbHBlciBjYWxscyB0aGlzIHdoZW4gdGFpbG9yL2RpYWdub3NlIHBhdGhzIGFyZSBhYnNlbnQuXG4gKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCByZXN1bWVJZCA9XG4gICAgdHlwZW9mIHJlcS5ib2R5Py5yZXN1bWVJZCA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnJlc3VtZUlkIDogbnVsbFxuICByZXMuc2VuZChhd2FpdCByZXNvbHZlUmVzdW1lQmxvYlJlc3BvbnNlKHsgcmVzdW1lSWQgfSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB7IGZldGNoQXV0b2ZpbGxJbmZvLCBmZXRjaFJlc3VtZUJsb2IgfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXG5cbmV4cG9ydCB0eXBlIFJlc3VtZUJsb2JSZXNwb25zZSA9IHtcbiAgb2s6IGJvb2xlYW5cbiAgcmVzdW1lSWQ/OiBzdHJpbmdcbiAgZmlsZU5hbWU/OiBzdHJpbmdcbiAgbWltZVR5cGU/OiBzdHJpbmdcbiAgZXh0ZW5zaW9uPzogc3RyaW5nXG4gIGJhc2U2ND86IHN0cmluZ1xuICBiYXNlNjRVUkw/OiBzdHJpbmdcbiAgbWVzc2FnZT86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBibG9iVG9CYXNlNjQoYmxvYjogQmxvYik6IFByb21pc2U8eyBiYXNlNjQ6IHN0cmluZzsgbWltZTogc3RyaW5nIH0+IHtcbiAgcmV0dXJuIGJsb2IuYXJyYXlCdWZmZXIoKS50aGVuKChidWZmZXIpID0+IHtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcilcbiAgICBsZXQgYmluYXJ5ID0gXCJcIlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKVxuICAgIH1cbiAgICBjb25zdCBtaW1lID0gYmxvYi50eXBlIHx8IFwiYXBwbGljYXRpb24vcGRmXCJcbiAgICByZXR1cm4geyBiYXNlNjQ6IGJ0b2EoYmluYXJ5KSwgbWltZSB9XG4gIH0pXG59XG5cbi8qKlxuICogUmVzb2x2ZSBhIHJlc3VtZSBibG9iIGZvciB0aGUgc2VsZWN0ZWQgKG9yIHJlcXVlc3RlZCkgaHViIHByb2ZpbGUuXG4gKiBUZWFtIGZvcmsgaGFzIG5vIHNlcGFyYXRlIHRhaWxvci9iYXNlIGRpYWdub3NlIHBpcGVsaW5lIOKAlCBhbGwgYWxpYXNlc1xuICogcmVzb2x2ZSB0byB0aGUgcHJvZmlsZSdzIGRlZmF1bHQgb3IgbmFtZWQgcmVzdW1lLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZVJlc3VtZUJsb2JSZXNwb25zZShvcHRzPzoge1xuICByZXN1bWVJZD86IHN0cmluZyB8IG51bGxcbn0pOiBQcm9taXNlPFJlc3VtZUJsb2JSZXNwb25zZT4ge1xuICB0cnkge1xuICAgIGxldCByZXN1bWVJZCA9XG4gICAgICB0eXBlb2Ygb3B0cz8ucmVzdW1lSWQgPT09IFwic3RyaW5nXCIgJiYgb3B0cy5yZXN1bWVJZC50cmltKClcbiAgICAgICAgPyBvcHRzLnJlc3VtZUlkLnRyaW0oKVxuICAgICAgICA6IG51bGxcblxuICAgIGlmICghcmVzdW1lSWQpIHtcbiAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBmZXRjaEF1dG9maWxsSW5mbygpXG4gICAgICByZXN1bWVJZCA9IGluZm8/LmRlZmF1bHRSZXN1bWVJZCA/PyBpbmZvPy5yZXN1bWVzPy5bMF0/LmlkID8/IG51bGxcbiAgICB9XG5cbiAgICBpZiAoIXJlc3VtZUlkKSB7XG4gICAgICByZXR1cm4geyBvazogZmFsc2UsIG1lc3NhZ2U6IFwibm9fcmVzdW1lXCIsIGJhc2U2NFVSTDogXCJcIiB9XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IGF3YWl0IGZldGNoUmVzdW1lQmxvYihyZXN1bWVJZClcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHJldHVybiB7IG9rOiBmYWxzZSwgbWVzc2FnZTogXCJkb3dubG9hZF9mYWlsZWRcIiwgYmFzZTY0VVJMOiBcIlwiIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IGJhc2U2NCwgbWltZSB9ID0gYXdhaXQgYmxvYlRvQmFzZTY0KGZpbGUuYmxvYilcbiAgICBjb25zdCBtaW1lVHlwZSA9IGZpbGUubWltZVR5cGUgfHwgbWltZSB8fCBcImFwcGxpY2F0aW9uL3BkZlwiXG4gICAgY29uc3QgZXh0ZW5zaW9uID1cbiAgICAgIChmaWxlLmZpbGVOYW1lLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBcInBkZlwiKS50b0xvd2VyQ2FzZSgpIHx8IFwicGRmXCJcblxuICAgIHJldHVybiB7XG4gICAgICBvazogdHJ1ZSxcbiAgICAgIHJlc3VtZUlkLFxuICAgICAgZmlsZU5hbWU6IGZpbGUuZmlsZU5hbWUsXG4gICAgICBtaW1lVHlwZSxcbiAgICAgIGV4dGVuc2lvbixcbiAgICAgIGJhc2U2NCxcbiAgICAgIGJhc2U2NFVSTDogYGRhdGE6JHttaW1lVHlwZX07YmFzZTY0LCR7YmFzZTY0fWBcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJmZXRjaF9mYWlsZWRcIixcbiAgICAgIGJhc2U2NFVSTDogXCJcIlxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7IGZldGNoQ29tcGFueU5hbWVMaXN0IH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnB1dCA9IHR5cGVvZiByZXEuYm9keT8uaW5wdXQgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5pbnB1dCA6IFwiXCJcbiAgICBjb25zdCBjb21wYW55SWQgPVxuICAgICAgdHlwZW9mIHJlcS5ib2R5Py5saW5rZWRpbkNvbXBhbnlJZCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IHJlcS5ib2R5LmxpbmtlZGluQ29tcGFueUlkXG4gICAgICAgIDogdHlwZW9mIHJlcS5ib2R5Py5jb21wYW55SWQgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICA/IHJlcS5ib2R5LmNvbXBhbnlJZFxuICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgcmVzLnNlbmQoYXdhaXQgZmV0Y2hDb21wYW55TmFtZUxpc3QoaW5wdXQsIGNvbXBhbnlJZCkpXG4gIH0gY2F0Y2gge1xuICAgIHJlcy5zZW5kKFtdKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5pbXBvcnQgeyBmZXRjaEF1dG9maWxsSW5mbywgZmV0Y2hDb3ZlckxldHRlckJsb2IgfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXG5cbmZ1bmN0aW9uIGJsb2JUb0Jhc2U2NChibG9iOiBCbG9iKTogUHJvbWlzZTx7IGJhc2U2NDogc3RyaW5nOyBtaW1lOiBzdHJpbmcgfT4ge1xuICByZXR1cm4gYmxvYi5hcnJheUJ1ZmZlcigpLnRoZW4oKGJ1ZmZlcikgPT4ge1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKVxuICAgIGxldCBiaW5hcnkgPSBcIlwiXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pXG4gICAgfVxuICAgIHJldHVybiB7IGJhc2U2NDogYnRvYShiaW5hcnkpLCBtaW1lOiBibG9iLnR5cGUgfHwgXCJhcHBsaWNhdGlvbi9wZGZcIiB9XG4gIH0pXG59XG5cbi8qKlxuICogQm9keTogeyBjb3ZlckxldHRlcklkPzogc3RyaW5nIH1cbiAqIEZhbGxzIGJhY2sgdG8gdGhlIHNlbGVjdGVkIHByb2ZpbGUncyBkZWZhdWx0IGNvdmVyIGxldHRlci5cbiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IGNvdmVyTGV0dGVySWQgPVxuICAgICAgdHlwZW9mIHJlcS5ib2R5Py5jb3ZlckxldHRlcklkID09PSBcInN0cmluZ1wiXG4gICAgICAgID8gcmVxLmJvZHkuY292ZXJMZXR0ZXJJZFxuICAgICAgICA6IG51bGxcblxuICAgIGlmICghY292ZXJMZXR0ZXJJZCkge1xuICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IGZldGNoQXV0b2ZpbGxJbmZvKClcbiAgICAgIGNvdmVyTGV0dGVySWQgPVxuICAgICAgICBpbmZvPy5kZWZhdWx0Q292ZXJMZXR0ZXJJZCA/PyBpbmZvPy5jb3ZlckxldHRlcnM/LlswXT8uaWQgPz8gbnVsbFxuICAgIH1cblxuICAgIGlmICghY292ZXJMZXR0ZXJJZCkge1xuICAgICAgcmVzLnNlbmQoe1xuICAgICAgICBvazogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwibm9fY292ZXJfbGV0dGVyXCIsXG4gICAgICAgIGJhc2U2NFVSTDogXCJcIlxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBmZXRjaENvdmVyTGV0dGVyQmxvYihjb3ZlckxldHRlcklkKVxuICAgIGlmICghZmlsZSkge1xuICAgICAgcmVzLnNlbmQoe1xuICAgICAgICBvazogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiZG93bmxvYWRfZmFpbGVkXCIsXG4gICAgICAgIGJhc2U2NFVSTDogXCJcIlxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgYmFzZTY0LCBtaW1lIH0gPSBhd2FpdCBibG9iVG9CYXNlNjQoZmlsZS5ibG9iKVxuICAgIGNvbnN0IG1pbWVUeXBlID0gZmlsZS5taW1lVHlwZSB8fCBtaW1lXG4gICAgY29uc3QgZXh0ZW5zaW9uID1cbiAgICAgIChmaWxlLmZpbGVOYW1lLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBcInBkZlwiKS50b0xvd2VyQ2FzZSgpIHx8IFwicGRmXCJcblxuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgY292ZXJMZXR0ZXJJZCxcbiAgICAgIGZpbGVOYW1lOiBmaWxlLmZpbGVOYW1lLFxuICAgICAgbWltZVR5cGUsXG4gICAgICBleHRlbnNpb24sXG4gICAgICBiYXNlNjQsXG4gICAgICBiYXNlNjRVUkw6IGBkYXRhOiR7bWltZVR5cGV9O2Jhc2U2NCwke2Jhc2U2NH1gXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiZmV0Y2hfZmFpbGVkXCIsXG4gICAgICBiYXNlNjRVUkw6IFwiXCJcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB7IHNvZnROdWxsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0TnVsbChcImdldENyZWRpdEZlZWRcIilcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKipcbiAqIFRlYW0gZm9yayBoYXMgbm8gY3JlZGl0IG1ldGVyaW5nIOKAlCByZXBvcnQgc3Vic2NyaWJlZCArIGhpZ2ggYmFsYW5jZVxuICogc28gSm9icmlnaHQgVUkgKHBheW1lbnQgYmFubmVycywgb3V0LW9mLWNyZWRpdCBtb2RhbHMpIHN0YXlzIHF1aWV0LlxuICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBjcmVkaXQ6IHtcbiAgICAgIGF1dG9maWxsOiA5OTk5LFxuICAgICAgdGFpbG9yOiA5OTk5LFxuICAgICAgY292ZXJMZXR0ZXI6IDk5OTlcbiAgICB9LFxuICAgIHN1YnNjcmliZWQ6IHRydWUsXG4gICAgc3R1YjogdHJ1ZVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIENyZWRpdHMgVUkgb2ZmIOKAlCB0ZWFtIGh1YiBkb2VzIG5vdCBzZWxsIFR1cmJvLiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZChmYWxzZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7IGZldGNoQXV0b2ZpbGxJbmZvIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxuXG4vKiogQ3VycmVudCBjb3ZlciBsZXR0ZXIgbWV0YWRhdGEgZnJvbSB0aGUgc2VsZWN0ZWQgaHViIHByb2ZpbGUuICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IGZldGNoQXV0b2ZpbGxJbmZvKClcbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHJlcy5zZW5kKG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgbGV0dGVycyA9IGluZm8uY292ZXJMZXR0ZXJzID8/IFtdXG4gICAgY29uc3QgZGVmID1cbiAgICAgIGxldHRlcnMuZmluZCgoYykgPT4gYy5pZCA9PT0gaW5mby5kZWZhdWx0Q292ZXJMZXR0ZXJJZCkgPz8gbGV0dGVyc1swXVxuICAgIGlmICghZGVmKSB7XG4gICAgICByZXMuc2VuZChudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJlcy5zZW5kKHtcbiAgICAgIGlkOiBkZWYuaWQsXG4gICAgICBjb3ZlckxldHRlcklkOiBkZWYuaWQsXG4gICAgICBuYW1lOiBkZWYuZGlzcGxheU5hbWUgfHwgZGVmLmZpbGVOYW1lLFxuICAgICAgZmlsZU5hbWU6IGRlZi5maWxlTmFtZSxcbiAgICAgIG1pbWVUeXBlOiBkZWYubWltZVR5cGUsXG4gICAgICBpc0RlZmF1bHQ6ICEhZGVmLmlzRGVmYXVsdFxuICAgIH0pXG4gIH0gY2F0Y2gge1xuICAgIHJlcy5zZW5kKG51bGwpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7IGZldGNoQXV0b2ZpbGxJbmZvIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxuaW1wb3J0IHsgbG9va3VwQW5zd2VyIH0gZnJvbSBcIn5saWIvaHViLXRvLWpvYnJpZ2h0XCJcblxuLyoqXG4gKiBMb2NhbCBzdGFuZC1pbiBmb3IgSm9icmlnaHQgY29tcGFueS1hbnN3ZXIgQVBJLlxuICogUmVzb2x2ZXMgYSBzaW5nbGUgZmllbGQgbGFiZWwgYWdhaW5zdCB0aGUgc2VsZWN0ZWQgaHViIHByb2ZpbGUuXG4gKlxuICogQm9keTogeyBsYWJlbD86IHN0cmluZywgY29tcGFueU5hbWU/OiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmdbXSB9XG4gKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keSA/PyB7fVxuICAgIGNvbnN0IGxhYmVsID1cbiAgICAgIHR5cGVvZiBib2R5LmxhYmVsID09PSBcInN0cmluZ1wiXG4gICAgICAgID8gYm9keS5sYWJlbFxuICAgICAgICA6IHR5cGVvZiBib2R5LmNvbXBhbnlOYW1lID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgPyBib2R5LmNvbXBhbnlOYW1lXG4gICAgICAgICAgOiBcIlwiXG4gICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmlzQXJyYXkoYm9keS5vcHRpb25zKVxuICAgICAgPyBib2R5Lm9wdGlvbnMuZmlsdGVyKChvOiB1bmtub3duKTogbyBpcyBzdHJpbmcgPT4gdHlwZW9mIG8gPT09IFwic3RyaW5nXCIpXG4gICAgICA6IFtdXG5cbiAgICBpZiAoIWxhYmVsLnRyaW0oKSkge1xuICAgICAgcmVzLnNlbmQoeyBvazogZmFsc2UsIGRhdGE6IG51bGwsIG1lc3NhZ2U6IFwibGFiZWxfcmVxdWlyZWRcIiB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaHViID0gYXdhaXQgZmV0Y2hBdXRvZmlsbEluZm8oXG4gICAgICB0eXBlb2YgYm9keS5wcm9maWxlSWQgPT09IFwic3RyaW5nXCIgPyBib2R5LnByb2ZpbGVJZCA6IG51bGxcbiAgICApXG4gICAgaWYgKCFodWIpIHtcbiAgICAgIHJlcy5zZW5kKHsgb2s6IGZhbHNlLCBkYXRhOiBudWxsLCBtZXNzYWdlOiBcIm5vX3Byb2ZpbGVcIiB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBsb29rdXBBbnN3ZXIoaHViLCBsYWJlbCwgb3B0aW9ucylcbiAgICByZXMuc2VuZCh7XG4gICAgICBvazogdHJ1ZSxcbiAgICAgIGRhdGE6IHZhbHVlLFxuICAgICAgcmVzdWx0OiB2YWx1ZVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJyZXNvbHZlX2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHJlcS5zZW5kZXI/LnRhYj8uaWQgPz8gbnVsbClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgY29uc3QgdGFicyA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pXG4gIHJlcy5zZW5kKHRhYnNbMF0/LnVybCA/PyBudWxsKVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgZmV0Y2hEZWdyZWVTdWdnZXN0aW9ucyB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5wdXQgPSB0eXBlb2YgcmVxLmJvZHk/LmlucHV0ID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkuaW5wdXQgOiBcIlwiXG4gICAgcmVzLnNlbmQoYXdhaXQgZmV0Y2hEZWdyZWVTdWdnZXN0aW9ucyhpbnB1dCkpXG4gIH0gY2F0Y2gge1xuICAgIHJlcy5zZW5kKFtdKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB7IHNvZnROdWxsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0TnVsbChcImdldEV4dGVybmFsSm9iSWRcIilcbiIsImltcG9ydCB7IHNvZnROdWxsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0TnVsbChcImdldEV4dGVybmFsSm9iU3RhdHVzXCIpXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgZmV0Y2hBdXRvZmlsbEluZm8gfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXG5pbXBvcnQgeyBidWlsZExvY2FsR3B0UmVzdWx0cyB9IGZyb20gXCJ+bGliL2h1Yi10by1qb2JyaWdodFwiXG5cbi8qKlxuICogTG9jYWwgZmlsbC12MiBzdGFuZC1pbjogbWFwIGV4dHJhY3RlZCBmb3JtIGxhYmVscyDihpIgaHViIGFuc3dlcnMgLyBpZGVudGl0eS5cbiAqIEVuZ2luZSBoZWxwZXJzIGNhbGwgdGhpcyBpbnN0ZWFkIG9mIEpvYnJpZ2h0IC9zd2FuL2F1dG9maWxsL2ZpbGwtdjIuXG4gKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHJlcS5ib2R5Py5wYXJhbXMgPz8gcmVxLmJvZHkgPz8ge31cbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmlzQXJyYXkocGFyYW1zLmVsZW1lbnRzKSA/IHBhcmFtcy5lbGVtZW50cyA6IFtdXG4gICAgY29uc3QgaHViID0gYXdhaXQgZmV0Y2hBdXRvZmlsbEluZm8oXG4gICAgICB0eXBlb2YgcGFyYW1zLnByb2ZpbGVJZCA9PT0gXCJzdHJpbmdcIiA/IHBhcmFtcy5wcm9maWxlSWQgOiBudWxsXG4gICAgKVxuXG4gICAgaWYgKCFodWIpIHtcbiAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgb2s6IGZhbHNlLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgSFRUUF9TVEFUVVM6IDQwMVxuICAgICAgICB9LFxuICAgICAgICBtZXNzYWdlOiBcIk5vIHByb2ZpbGUgc2VsZWN0ZWRcIlxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGJ1aWxkTG9jYWxHcHRSZXN1bHRzKGh1YiwgZWxlbWVudHMpXG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IHRydWUsXG4gICAgICBkYXRhOiByZXN1bHRcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW2dldEdwdFJlc3VsdHNdIGxvY2FsIHJlc29sdmUgZmFpbGVkXCIsIGVycilcbiAgICByZXMuc2VuZCh7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIEhUVFBfU1RBVFVTOiA1MDBcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJyZXNvbHZlX2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgeyBzb2Z0TnVsbCB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdE51bGwoXCJnZXRKb2JCYW5uZXJEZXRhaWxcIilcbiIsImltcG9ydCB7IHNvZnROdWxsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0TnVsbChcImdldEpvYkRldGFpbFwiKVxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7IGZldGNoTWFqb3JTdWdnZXN0aW9ucyB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5wdXQgPSB0eXBlb2YgcmVxLmJvZHk/LmlucHV0ID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkuaW5wdXQgOiBcIlwiXG4gICAgcmVzLnNlbmQoYXdhaXQgZmV0Y2hNYWpvclN1Z2dlc3Rpb25zKGlucHV0KSlcbiAgfSBjYXRjaCB7XG4gICAgcmVzLnNlbmQoW10pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7IGZldGNoT3BlbkNpdGllc0J5UmVnaW9uIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxuXG4vKiogUmV0dXJucyBjaXR5IG5hbWUgc3RyaW5nIGFycmF5IChKb2JyaWdodCBzaGFwZSkuICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb3VudHJ5ID1cbiAgICAgIHR5cGVvZiByZXEuYm9keT8uY291bnRyeSA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LmNvdW50cnkgOiBcIlwiXG4gICAgY29uc3QgcmVnaW9uID0gdHlwZW9mIHJlcS5ib2R5Py5yZWdpb24gPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5yZWdpb24gOiBcIlwiXG4gICAgaWYgKCFjb3VudHJ5IHx8ICFyZWdpb24pIHtcbiAgICAgIHJlcy5zZW5kKFtdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJlcy5zZW5kKGF3YWl0IGZldGNoT3BlbkNpdGllc0J5UmVnaW9uKGNvdW50cnksIHJlZ2lvbikpXG4gIH0gY2F0Y2gge1xuICAgIHJlcy5zZW5kKFtdKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5pbXBvcnQgeyBmZXRjaE9wZW5SZWdpb25zIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxuXG4vKiogUmV0dXJucyByZWdpb24gYXJyYXkgW3sgY29kZSwgbmFtZSB9XSAoSm9icmlnaHQgc2hhcGUpLiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY291bnRyeSA9XG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LmNvdW50cnkgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5jb3VudHJ5IDogXCJcIlxuICAgIGlmICghY291bnRyeSkge1xuICAgICAgcmVzLnNlbmQoW10pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcmVzLnNlbmQoYXdhaXQgZmV0Y2hPcGVuUmVnaW9ucyhjb3VudHJ5KSlcbiAgfSBjYXRjaCB7XG4gICAgcmVzLnNlbmQoW10pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogUG9ydGVkIE1BSU4td29ybGQgaW5qZWN0IGZyb20gZW5naW5lL2JhY2tncm91bmQvLi4uL2dldFBhZ2VMaW5rZWRpbkpvYkluZm8uanNcbiAqL1xuaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmZ1bmN0aW9uIGluamVjdE1haW4oKSB7XG4gIHRyeSB7XG4gICAgbGV0IGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBlID0gd2luZG93LnRvcC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICB0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cudG9wLmxvY2F0aW9uLnNlYXJjaCksXG4gICAgICAgIHIgPSB0LmdldChcImN1cnJlbnRKb2JJZFwiKTtcbiAgICAgIGlmIChyKSByZXR1cm4gcjtcbiAgICAgIGxldCBhID0gZS5tYXRjaCgvam9ic1xcL3ZpZXdcXC8oXFxkKykvKTtcbiAgICAgIHJldHVybiBhICYmIGFbMV0gPyByID0gYVsxXSA6IG51bGxcbiAgICB9KCk7XG4gICAgaWYgKCFlKSByZXR1cm4gY29uc29sZS5lcnJvcihcIltMaW5rZWRJbiBKb2IgRXh0cmFjdG9yXSBDYW5ub3QgZ2V0IEpvYklEXCIpLCBudWxsO1xuICAgIGxldCB0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgZSA9IHdpbmRvdy5yZXF1aXJlTW9kdWxlID8gd2luZG93LnJlcXVpcmVNb2R1bGUoXCJlbWJlclwiKS5kZWZhdWx0IDogd2luZG93LkVtYmVyO1xuICAgICAgICBpZiAoIWUpIHJldHVybiBjb25zb2xlLmVycm9yKFwiW0xpbmtlZEluIEpvYiBFeHRyYWN0b3JdIENhbm5vdCBmaW5kIEVtYmVyIG1vZHVsZVwiKSwgbnVsbDtcbiAgICAgICAgbGV0IHQgPSBlLk5hbWVzcGFjZS5OQU1FU1BBQ0VTLmZpbmQodCA9PiB0IGluc3RhbmNlb2YgZS5BcHBsaWNhdGlvbik7XG4gICAgICAgIGlmICghdCB8fCAhdC5fX2NvbnRhaW5lcl9fKSByZXR1cm4gY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIltMaW5rZWRJbiBKb2IgRXh0cmFjdG9yXSBDYW5ub3QgZmluZCBFbWJlciBhcHBsaWNhdGlvbiBjb250YWluZXJcIiksIG51bGw7XG4gICAgICAgIGxldCByID0gdC5fX2NvbnRhaW5lcl9fLFxuICAgICAgICAgIGEgPSByLmxvb2t1cChcInNlcnZpY2U6c3RvcmVcIik7XG4gICAgICAgIGlmICghYSB8fCAhYS5fZ2xvYmFsTTNSZWNvcmREYXRhQ2FjaGUpIHJldHVybiBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiW0xpbmtlZEluIEpvYiBFeHRyYWN0b3JdIENhbm5vdCBmaW5kIEVtYmVyIGRhdGEgY2FjaGVcIiksIG51bGw7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZW1iZXI6IGUsXG4gICAgICAgICAgY2FjaGU6IGEuX2dsb2JhbE0zUmVjb3JkRGF0YUNhY2hlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJbTGlua2VkSW4gSm9iIEV4dHJhY3Rvcl0gRXJyb3IgZ2V0dGluZyBFbWJlciBjYWNoZTpcIiwgZSksIG51bGxcbiAgICAgIH1cbiAgICB9KCk7XG4gICAgaWYgKCF0KSByZXR1cm4gY29uc29sZS5lcnJvcihcIltMaW5rZWRJbiBKb2IgRXh0cmFjdG9yXSBDYW5ub3QgZ2V0IEVtYmVyIGNhY2hlXCIpLCBudWxsO1xuICAgIGxldCByID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHIgPSBgdXJuOmxpOmZzZF9qb2JQb3N0aW5nOiR7dH1gLFxuICAgICAgICAgIGEgPSBgdXJuOmxpOmZzZF9qb2JQb3N0aW5nQ2FyZDooJHt0fSxKT0JfREVUQUlMUylgLFxuICAgICAgICAgIG8gPSBlW3JdO1xuICAgICAgICBpZiAoIW8gfHwgIW8uX19kYXRhKSByZXR1cm4gY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIltMaW5rZWRJbiBKb2IgRXh0cmFjdG9yXSBDYW5ub3QgZmluZCBqb2IgYmFzZSBkYXRhOlwiLCByKSwge1xuICAgICAgICAgIGVycm9yOiBcIkNhbm5vdCBmaW5kIGpvYiBiYXNlIGRhdGFcIixcbiAgICAgICAgICBqb2JfaWQ6IHRcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHMgPSBvLl9fZGF0YSxcbiAgICAgICAgICBuID0gZVthXSxcbiAgICAgICAgICBsID0gbiAmJiBuLl9fZGF0YSB8fCB7fTtcbiAgICAgICAgbCAmJiAwICE9PSBPYmplY3Qua2V5cyhsKS5sZW5ndGggfHwgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIltMaW5rZWRJbiBKb2IgRXh0cmFjdG9yXSBDYW5ub3QgZmluZCBqb2IgY2FyZCBkYXRhOlwiLCBhKTtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICBjb21wYW55X2lkOiBpLFxuICAgICAgICAgIGNvbXBhbnlfbmFtZTogdVxuICAgICAgICB9ID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgciA9IHQuY29tcGFueURldGFpbHMgJiYgdC5jb21wYW55RGV0YWlscy5qb2JDb21wYW55ICYmIHQuY29tcGFueURldGFpbHNcbiAgICAgICAgICAgICAgLmpvYkNvbXBhbnlbXCIqY29tcGFueVwiXTtcbiAgICAgICAgICAgIGlmICghcikgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY29tcGFueV9pZDogbnVsbCxcbiAgICAgICAgICAgICAgY29tcGFueV9uYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIFwiLmpvYi1kZXRhaWxzLWpvYnMtdW5pZmllZC10b3AtY2FyZF9fY29tcGFueS1uYW1lXCIpPy50ZXh0Q29udGVudC50cmltKCkgfHwgXCJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBhID0gbnVsbCxcbiAgICAgICAgICAgICAgbyA9IHIuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgYSA9IG9bby5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxldCBzID0gZVtyXSAmJiBlW3JdLl9fZGF0YSxcbiAgICAgICAgICAgICAgbiA9IHMgJiYgcy5uYW1lIHx8IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjb21wYW55X2lkOiBhLFxuICAgICAgICAgICAgICBjb21wYW55X25hbWU6IG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiW0xpbmtlZEluIEpvYiBFeHRyYWN0b3JdIEdldHRpbmcgY29tcGFueSBpbmZvIGZhaWxlZDpcIiwgZSksIHtcbiAgICAgICAgICAgICAgY29tcGFueV9pZDogbnVsbCxcbiAgICAgICAgICAgICAgY29tcGFueV9uYW1lOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KGUsIHMpLCBjID0ge1xuICAgICAgICAgIGpvYl9pZDogdCxcbiAgICAgICAgICBqb2JfdGl0bGU6IHMudGl0bGUgfHwgXCJcIixcbiAgICAgICAgICBqb2JfZGVzY3JpcHRpb246IHMuZGVzY3JpcHRpb24gJiYgcy5kZXNjcmlwdGlvbi50ZXh0IHx8IFwiXCIsXG4gICAgICAgICAgY29tcGFueV9pZDogaSxcbiAgICAgICAgICBjb21wYW55X25hbWU6IHUsXG4gICAgICAgICAgbG9jYXRpb246IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGxldCByID0gdFtcIipsb2NhdGlvblwiXTtcbiAgICAgICAgICAgICAgaWYgKCFyKSByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgbGV0IGEgPSBlW3JdICYmIGVbcl0uX19kYXRhO1xuICAgICAgICAgICAgICByZXR1cm4gYSAmJiBhLmRlZmF1bHRMb2NhbGl6ZWROYW1lIHx8IFwiXCJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcIltMaW5rZWRJbiBKb2IgRXh0cmFjdG9yXSBHZXR0aW5nIGxvY2F0aW9uIGluZm8gZmFpbGVkOlwiLFxuICAgICAgICAgICAgICAgIGUpLCBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfShlLCBzKSxcbiAgICAgICAgICBqb2Jfc3RhdGU6IHMuam9iU3RhdGUgfHwgXCJcIixcbiAgICAgICAgICBpc19leHBpcmVkOiBcIkNMT1NFRFwiID09PSBzLmpvYlN0YXRlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiW0xpbmtlZEluIEpvYiBFeHRyYWN0b3JdIEVycm9yIGV4dHJhY3Rpbmcgam9iIGluZm86XCIsIGUpLCB7XG4gICAgICAgICAgZXJyb3I6IGUubWVzc2FnZSxcbiAgICAgICAgICBqb2JfaWQ6IHQsXG4gICAgICAgICAgc3RhY2s6IGUuc3RhY2tcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0odC5jYWNoZSwgZSk7XG4gICAgcmV0dXJuIHJcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbTGlua2VkSW4gSm9iIEV4dHJhY3Rvcl0gRXJyb3Igb2NjdXJyZWQgZHVyaW5nIGV4ZWN1dGlvbjpcIiwgZSlcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9IHJlcS5zZW5kZXI/LnRhYj8uaWRcbiAgICBpZiAoIXRhYklkKSB7XG4gICAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBvazogZmFsc2UsIG1lc3NhZ2U6IFwibm9fdGFiXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBmcmFtZUlkID0gcmVxLnNlbmRlcj8uZnJhbWVJZCA/PyAwXG4gICAgY29uc3QgdGFyZ2V0ID1cbiAgICAgIHJlcS5ib2R5Py5hbGxGcmFtZXMgPT09IHRydWVcbiAgICAgICAgPyB7IHRhYklkLCBhbGxGcmFtZXM6IHRydWUgfVxuICAgICAgICA6IHsgdGFiSWQsIGZyYW1lSWRzOiBbZnJhbWVJZF0gfVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0LFxuICAgICAgd29ybGQ6IFwiTUFJTlwiLFxuICAgICAgZnVuYzogaW5qZWN0TWFpblxuICAgIH0pXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgcmVzdWx0OiByZXN1bHRzPy5bMF0/LnJlc3VsdCA/PyBudWxsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltnZXRQYWdlTGlua2VkaW5Kb2JJbmZvXVwiLCBlcnIpXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJpbmplY3RfZmFpbGVkXCJcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB7IHNvZnROdWxsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0TnVsbChcImdldFBheW1lbnRQcmljZVwiKVxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBObyBmb3JjZWQgdXBkYXRlIC8gd2hhdCdzLW5ldyBmcm9tIEpvYnJpZ2h0IGNsb3VkLiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgdmVyc2lvbjogY2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxuICAgIGhhc1doYXRzTmV3Q29udGVudDogZmFsc2UsXG4gICAgd2hhdHNOZXc6IHsgZmVhdHVyZXM6IFtdLCB1cGRhdGVzOiBbXSwgaW1wcm92ZW1lbnRzOiBbXSB9LFxuICAgIHJlbGVhc2VkQXQ6IG51bGwsXG4gICAgc3R1YjogdHJ1ZVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgcmVzb2x2ZVJlc3VtZUJsb2JSZXNwb25zZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvcmVzdW1lLWJsb2JcIlxuXG4vKipcbiAqIERvd25sb2FkcyB0aGUgZGVmYXVsdCAob3IgcmVxdWVzdGVkKSByZXN1bWUgZm9yIHRoZSBzZWxlY3RlZCBwcm9maWxlLlxuICogQm9keTogeyByZXN1bWVJZD86IHN0cmluZyB9XG4gKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCByZXN1bWVJZCA9XG4gICAgdHlwZW9mIHJlcS5ib2R5Py5yZXN1bWVJZCA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnJlc3VtZUlkIDogbnVsbFxuICByZXMuc2VuZChhd2FpdCByZXNvbHZlUmVzdW1lQmxvYlJlc3BvbnNlKHsgcmVzdW1lSWQgfSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5pbXBvcnQgeyBmZXRjaEF1dG9maWxsSW5mbyB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcblxuLyoqXG4gKiBSZXN1bWUgY29sbGVjdGlvbiBsaXN0IGZvciBSZXN1bWVTd2l0Y2hlciAvIFJlc3VtZVJldmlldyBVSS5cbiAqIFNoYXBlIG1pcnJvcnMgSm9icmlnaHQgZ2V0UmVzdW1lQ29sbGVjdGlvbiBmb3IgdGhlIGhlbHBlci5cbiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGluZm8gPSBhd2FpdCBmZXRjaEF1dG9maWxsSW5mbygpXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICByZXMuc2VuZCh7IG9rOiBmYWxzZSwgcmVzdWx0OiBbXSwgbWVzc2FnZTogXCJub19wcm9maWxlXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IChpbmZvLnJlc3VtZXMgPz8gW10pLm1hcCgocikgPT4gKHtcbiAgICAgIGlkOiByLmlkLFxuICAgICAgcmVzdW1lSWQ6IHIuaWQsXG4gICAgICByZXN1bWVOYW1lOiByLmRpc3BsYXlOYW1lIHx8IHIuZmlsZU5hbWUsXG4gICAgICBmaWxlTmFtZTogci5maWxlTmFtZSxcbiAgICAgIG1pbWVUeXBlOiByLm1pbWVUeXBlLFxuICAgICAgaXNEZWZhdWx0OiAhIXIuaXNEZWZhdWx0LFxuICAgICAgaXNUYWlsb3I6IGZhbHNlXG4gICAgfSkpXG5cbiAgICByZXMuc2VuZCh7XG4gICAgICBvazogdHJ1ZSxcbiAgICAgIHJlc3VsdCxcbiAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgIGRlZmF1bHRSZXN1bWVJZDogaW5mby5kZWZhdWx0UmVzdW1lSWQgPz8gcmVzdWx0WzBdPy5pZCA/PyBudWxsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgcmVzdWx0OiBbXSxcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcImZldGNoX2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgeyBzb2Z0TnVsbCB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdE51bGwoXCJnZXRSZXN1bWVEaWFnbm9zZVwiKVxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7IGZldGNoQXV0b2ZpbGxJbmZvIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxuXG4vKipcbiAqIFJlc3VtZSBtZXRhZGF0YSBmb3IgdGhlIHNlbGVjdGVkIGh1YiBwcm9maWxlIChubyBKb2JyaWdodCBkaWFnbm9zZSBpZCkuXG4gKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgZmV0Y2hBdXRvZmlsbEluZm8oKVxuICAgIGlmICghaW5mbykge1xuICAgICAgcmVzLnNlbmQoeyBvazogZmFsc2UsIG1lc3NhZ2U6IFwibm9fcHJvZmlsZVwiIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0SWQgPSBpbmZvLmRlZmF1bHRSZXN1bWVJZCA/PyBpbmZvLnJlc3VtZXM/LlswXT8uaWQgPz8gbnVsbFxuICAgIGNvbnN0IGRlZiA9IGluZm8ucmVzdW1lcz8uZmluZCgocikgPT4gci5pZCA9PT0gZGVmYXVsdElkKSA/PyBpbmZvLnJlc3VtZXM/LlswXVxuXG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IHRydWUsXG4gICAgICByZXN1bWVzOiBpbmZvLnJlc3VtZXMgPz8gW10sXG4gICAgICBkZWZhdWx0UmVzdW1lSWQ6IGRlZmF1bHRJZCxcbiAgICAgIHJlc3VtZUluZm86IGRlZlxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGlkOiBkZWYuaWQsXG4gICAgICAgICAgICByZXN1bWVOYW1lOiBkZWYuZGlzcGxheU5hbWUgfHwgZGVmLmZpbGVOYW1lLFxuICAgICAgICAgICAgZmlsZU5hbWU6IGRlZi5maWxlTmFtZSxcbiAgICAgICAgICAgIG1pbWVUeXBlOiBkZWYubWltZVR5cGUsXG4gICAgICAgICAgICBpc0RlZmF1bHQ6ICEhZGVmLmlzRGVmYXVsdFxuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiZmV0Y2hfZmFpbGVkXCJcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB7IHNvZnRFbXB0eSB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdEVtcHR5KFwiZ2V0U2ltaWxhckpvYnNcIiwgXCJqb2JzXCIpXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqXG4gKiBTaXRlIENTUkYgLyBzZXNzaW9uIHRva2VuIOKAlCB1bnVzZWQgYnkgdGVhbSBodWIgbG9jYWwgZmlsbCBwYXRoLlxuICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKFwiXCIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsIi8qKlxuICogSW4tbWVtb3J5IHRhYiBjb250ZXh0IChvcGVuIHRhaWxvci9jb3Zlci1sZXR0ZXIgdGFicywgcmVmcmVzaCBzZW5kZXIpLlxuICogUG9ydGVkIGxpZ2h0bHkgZnJvbSBlbmdpbmUgZ2V0VGFiQ29udGV4dCDigJQgbm8gSm9icmlnaHQgY2xvdWQuXG4gKi9cbmltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG50eXBlIFRhYkN0eCA9IHtcbiAgc2VuZGVyVGFiSWQ6IG51bWJlciB8IG51bGxcbiAgcmVsYXRlZFRhYklkczogbnVtYmVyW11cbn1cblxuY29uc3QgY29udGV4dHMgPSBuZXcgTWFwPHN0cmluZywgVGFiQ3R4PigpXG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBhY3Rpb24gPSBTdHJpbmcocmVxLmJvZHk/LmFjdGlvbiB8fCBcImdldFwiKVxuICBjb25zdCBrZXkgPSBTdHJpbmcocmVxLmJvZHk/LmtleSB8fCBcImRlZmF1bHRcIilcbiAgY29uc3Qgc2VuZGVyVGFiSWQgPSByZXEuc2VuZGVyPy50YWI/LmlkID8/IG51bGxcblxuICBpZiAoYWN0aW9uID09PSBcInNldFwiKSB7XG4gICAgY29uc3QgcmVsYXRlZCA9XG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LnRhYklkID09PSBcIm51bWJlclwiXG4gICAgICAgID8gW3JlcS5ib2R5LnRhYklkXVxuICAgICAgICA6IEFycmF5LmlzQXJyYXkocmVxLmJvZHk/LnJlbGF0ZWRUYWJJZHMpXG4gICAgICAgICAgPyByZXEuYm9keS5yZWxhdGVkVGFiSWRzLmZpbHRlcigobjogdW5rbm93bikgPT4gdHlwZW9mIG4gPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgOiBbXVxuICAgIGNvbnRleHRzLnNldChrZXksIHtcbiAgICAgIHNlbmRlclRhYklkOiBzZW5kZXJUYWJJZCA/PyBjb250ZXh0cy5nZXQoa2V5KT8uc2VuZGVyVGFiSWQgPz8gbnVsbCxcbiAgICAgIHJlbGF0ZWRUYWJJZHM6IHJlbGF0ZWRcbiAgICB9KVxuICAgIHJlcy5zZW5kKHsgb2s6IHRydWUgfSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChhY3Rpb24gPT09IFwiY2xlYXJcIikge1xuICAgIGNvbnRleHRzLmRlbGV0ZShrZXkpXG4gICAgcmVzLnNlbmQoeyBvazogdHJ1ZSB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgcmVzLnNlbmQoe1xuICAgIG9rOiB0cnVlLFxuICAgIC4uLihjb250ZXh0cy5nZXQoa2V5KSB8fCB7IHNlbmRlclRhYklkOiBudWxsLCByZWxhdGVkVGFiSWRzOiBbXSB9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgZ2V0VGFiSm9iUmVjb3JkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL3RhYi1qb2ItaWRcIlxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Qm9keSA9IHtcbiAgY3VycmVudFVybD86IHN0cmluZ1xuICByZXF1aXJlU2FtZVBhdGg/OiBib29sZWFuXG59XG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlcjxSZXF1ZXN0Qm9keT4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgdGFiSWQgPSByZXEuc2VuZGVyPy50YWI/LmlkXG4gIGlmICh0eXBlb2YgdGFiSWQgIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXMuc2VuZCh7IGpvYklkOiBudWxsIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCByZWNvcmQgPSBhd2FpdCBnZXRUYWJKb2JSZWNvcmQodGFiSWQpXG4gIGlmICghcmVjb3JkPy5qb2JJZCkge1xuICAgIHJlcy5zZW5kKHsgam9iSWQ6IG51bGwgfSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChyZXEuYm9keT8ucmVxdWlyZVNhbWVQYXRoICYmIHJlcS5ib2R5LmN1cnJlbnRVcmwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3VycmVudCA9IG5ldyBVUkwocmVxLmJvZHkuY3VycmVudFVybClcbiAgICAgIGlmIChjdXJyZW50LnBhdGhuYW1lICE9PSByZWNvcmQucGF0aG5hbWUpIHtcbiAgICAgICAgcmVzLnNlbmQoeyBqb2JJZDogbnVsbCB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIHJlcy5zZW5kKHsgam9iSWQ6IG51bGwgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIHJlcy5zZW5kKHsgam9iSWQ6IHJlY29yZC5qb2JJZCwgdXJsOiByZWNvcmQudXJsIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiQHBsYXNtb2hxL3N0b3JhZ2VcIlxuXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoeyBhcmVhOiBcInNlc3Npb25cIiB9KVxuXG5leHBvcnQgdHlwZSBUYWJKb2JSZWNvcmQgPSB7XG4gIGpvYklkOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICB1cGRhdGVkQXQ6IG51bWJlclxufVxuXG5mdW5jdGlvbiBrZXlGb3JUYWIodGFiSWQ6IG51bWJlcikge1xuICByZXR1cm4gYHRhYkpvYklkOiR7dGFiSWR9YFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0VGFiSm9iUmVjb3JkKFxuICB0YWJJZDogbnVtYmVyLFxuICByZWNvcmQ6IFRhYkpvYlJlY29yZFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHN0b3JhZ2Uuc2V0KGtleUZvclRhYih0YWJJZCksIHJlY29yZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRhYkpvYlJlY29yZChcbiAgdGFiSWQ6IG51bWJlclxuKTogUHJvbWlzZTxUYWJKb2JSZWNvcmQgfCBudWxsPiB7XG4gIHJldHVybiAoYXdhaXQgc3RvcmFnZS5nZXQ8VGFiSm9iUmVjb3JkPihrZXlGb3JUYWIodGFiSWQpKSkgPz8gbnVsbFxufVxuIiwiaW1wb3J0IHsgc29mdE51bGwgfSBmcm9tIFwifmJhY2tncm91bmQvbGliL3NvZnQtc3R1YlwiXG5cbmV4cG9ydCBkZWZhdWx0IHNvZnROdWxsKFwiZ2V0VGFpbG9yUmVzdW1lXCIpXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgcmVzb2x2ZVJlc3VtZUJsb2JSZXNwb25zZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvcmVzdW1lLWJsb2JcIlxuXG4vKipcbiAqIFRlYW0gZm9yazogbm8gc2VwYXJhdGUgdGFpbG9yIHBpcGVsaW5lIOKAlCBmYWxsIGJhY2sgdG8gcHJvZmlsZSBkZWZhdWx0IHJlc3VtZS5cbiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHJlc3VtZUlkID1cbiAgICB0eXBlb2YgcmVxLmJvZHk/LnJlc3VtZUlkID09PSBcInN0cmluZ1wiXG4gICAgICA/IHJlcS5ib2R5LnJlc3VtZUlkXG4gICAgICA6IHR5cGVvZiByZXEuYm9keT8udGFpbG9ySWQgPT09IFwic3RyaW5nXCJcbiAgICAgICAgPyByZXEuYm9keS50YWlsb3JJZFxuICAgICAgICA6IG51bGxcbiAgcmVzLnNlbmQoYXdhaXQgcmVzb2x2ZVJlc3VtZUJsb2JSZXNwb25zZSh7IHJlc3VtZUlkIH0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgZmV0Y2hBdXRvZmlsbEluZm8gfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXG5cbi8qKiBGaWxlbmFtZSBmb3IgdGFpbG9yIHJlc3VtZSBVSSDigJQgdGVhbSBodWIgdXNlcyBiYXNlIHJlc3VtZSBuYW1lLiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGluZm8gPSBhd2FpdCBmZXRjaEF1dG9maWxsSW5mbygpXG4gICAgY29uc3QgZGVmID1cbiAgICAgIGluZm8/LnJlc3VtZXM/LmZpbmQoKHIpID0+IHIuaWQgPT09IGluZm8uZGVmYXVsdFJlc3VtZUlkKSA/P1xuICAgICAgaW5mbz8ucmVzdW1lcz8uWzBdXG4gICAgcmVzLnNlbmQoZGVmPy5maWxlTmFtZSB8fCBkZWY/LmRpc3BsYXlOYW1lIHx8IG51bGwpXG4gIH0gY2F0Y2gge1xuICAgIHJlcy5zZW5kKG51bGwpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7XG4gIGZldGNoQXV0b2ZpbGxJbmZvLFxuICBnZXRUZWFtU2V0dGluZ3MsXG4gIHZlcmlmeVRlYW1Db25uZWN0aW9uXG59IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcblxuLyoqXG4gKiBKb2JyaWdodCBoZWxwZXIgZXhwZWN0czpcbiAqICAgeyBkYXRhOiB7IHVzZXJTdGFnZSwgdXNlclByb2ZpbGUgfSB9XG4gKiB3aGVyZSB1c2VyU3RhZ2UubG9naW5lZCArIHVzZXJQcm9maWxlLnN0ZXAgPT09IDUgdW5sb2NrcyBGSUxMSU5HLlxuICogVGVhbSBodWI6IHNpZ25lZC1pbiArIHNlbGVjdGVkIHByb2ZpbGUg4oeSIHRyZWF0IGFzIGZ1bGx5IG9uYm9hcmRlZC5cbiAqL1xuY29uc3QgRklMVEVfUkVTVU1FX1JFQURZID0gMzBcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0VGVhbVNldHRpbmdzKClcbiAgICBjb25zdCBjb25uID0gYXdhaXQgdmVyaWZ5VGVhbUNvbm5lY3Rpb24oKVxuXG4gICAgaWYgKCFjb25uLm9rIHx8ICFzZXR0aW5ncy5hcGlUb2tlbikge1xuICAgICAgcmVzLnNlbmQoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXNlclN0YWdlOiB7XG4gICAgICAgICAgICBsb2dpbmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHVzZXJJZDogbnVsbCxcbiAgICAgICAgICAgIGN1cnJlbnRTdGFnZTogMCxcbiAgICAgICAgICAgIGVtYWlsOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1c2VyUHJvZmlsZTogbnVsbFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaHViID0gc2V0dGluZ3Muc2VsZWN0ZWRQcm9maWxlSWRcbiAgICAgID8gYXdhaXQgZmV0Y2hBdXRvZmlsbEluZm8oc2V0dGluZ3Muc2VsZWN0ZWRQcm9maWxlSWQpXG4gICAgICA6IG51bGxcblxuICAgIGNvbnN0IHVzZXJJZCA9XG4gICAgICBzZXR0aW5ncy5zZWxlY3RlZFByb2ZpbGVJZCB8fFxuICAgICAgY29ubi5lbWFpbCB8fFxuICAgICAgc2V0dGluZ3MudXNlckVtYWlsIHx8XG4gICAgICBcInRlYW0tdXNlclwiXG5cbiAgICBjb25zdCB1c2VyU3RhZ2UgPSB7XG4gICAgICBsb2dpbmVkOiB0cnVlLFxuICAgICAgdXNlcklkLFxuICAgICAgY3VycmVudFN0YWdlOiBGSUxURV9SRVNVTUVfUkVBRFksXG4gICAgICBlbWFpbDogY29ubi5lbWFpbCB8fCBzZXR0aW5ncy51c2VyRW1haWwgfHwgbnVsbCxcbiAgICAgIG5hbWU6IGNvbm4ubmFtZSB8fCBzZXR0aW5ncy51c2VyTmFtZSB8fCBudWxsLFxuICAgICAgc2l0ZVVybDogc2V0dGluZ3Muc2l0ZVVybFxuICAgIH1cblxuICAgIC8vIHN0ZXAgNSA9IEpvYnJpZ2h0IFwicmVhZHkgdG8gYXV0b2ZpbGxcIiBvbmJvYXJkaW5nIHN0ZXBcbiAgICBjb25zdCB1c2VyUHJvZmlsZSA9IHtcbiAgICAgIHN0ZXA6IDUsXG4gICAgICBlbWFpbDogY29ubi5lbWFpbCB8fCBzZXR0aW5ncy51c2VyRW1haWwgfHwgXCJcIixcbiAgICAgIG5hbWU6IGNvbm4ubmFtZSB8fCBzZXR0aW5ncy51c2VyTmFtZSB8fCBcIlwiLFxuICAgICAgcHJvZmlsZUlkOiBzZXR0aW5ncy5zZWxlY3RlZFByb2ZpbGVJZCxcbiAgICAgIGhhc1Jlc3VtZTogQm9vbGVhbihcbiAgICAgICAgaHViICYmXG4gICAgICAgICAgKEFycmF5LmlzQXJyYXkoKGh1YiBhcyB7IHJlc3VtZXM/OiB1bmtub3duW10gfSkucmVzdW1lcylcbiAgICAgICAgICAgID8gKGh1YiBhcyB7IHJlc3VtZXM6IHVua25vd25bXSB9KS5yZXN1bWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgIDogdHJ1ZSlcbiAgICAgICksXG4gICAgICB0ZWFtSHViOiB0cnVlXG4gICAgfVxuXG4gICAgcmVzLnNlbmQoe1xuICAgICAgZGF0YTogeyB1c2VyU3RhZ2UsIHVzZXJQcm9maWxlIH1cbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc2VuZCh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJTdGFnZTogeyBsb2dpbmVkOiBmYWxzZSwgdXNlcklkOiBudWxsLCBjdXJyZW50U3RhZ2U6IDAgfSxcbiAgICAgICAgdXNlclByb2ZpbGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJwcm9maWxlX2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgeyBzb2Z0TnVsbCB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdE51bGwoXCJnZXRWZXJzaW9uVXBkYXRlU3RhdGVcIilcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKipcbiAqIEluamVjdCBNQUlOLXdvcmxkIGhlbHBlciB0aGF0IHN0YW1wcyBBc2hieSBmaWVsZCBtZXRhZGF0YSBvbnRvIGlucHV0c1xuICogKGRhdGEtanItYXNoYnktZmllbGQtdHlwZSwgZGF0YS1qci1hc2hieS1sb2NhdGlvbi10eXBlcykuXG4gKi9cbmNvbnN0IElOSkVDVF9GTiA9IGZ1bmN0aW9uIGluamVjdEFzaGJ5TWV0YSgpIHtcbiAgY29uc3QgdyA9IHdpbmRvdyBhcyB1bmtub3duIGFzIHtcbiAgICBfX2pyQXNoYnlNZXRhSW5zdGFsbGVkPzogYm9vbGVhblxuICB9XG4gIGlmICh3Ll9fanJBc2hieU1ldGFJbnN0YWxsZWQpIHJldHVybiB7IG9rOiB0cnVlLCBhbHJlYWR5OiB0cnVlIH1cbiAgdy5fX2pyQXNoYnlNZXRhSW5zdGFsbGVkID0gdHJ1ZVxuXG4gIGZ1bmN0aW9uIHdhbGsocm9vdDogUGFyZW50Tm9kZSkge1xuICAgIGNvbnN0IGlucHV0cyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgW3JvbGU9J2NvbWJvYm94J11cIilcbiAgICBpbnB1dHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSAoZWwuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpXG4gICAgICBjb25zdCBpZCA9IChlbC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpXG4gICAgICBjb25zdCBsYWJlbCA9XG4gICAgICAgIChlbC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpIHx8IFwiXCIpICtcbiAgICAgICAgXCIgXCIgK1xuICAgICAgICAoZWwuY2xvc2VzdChcImxhYmVsXCIpPy50ZXh0Q29udGVudCB8fCBcIlwiKVxuICAgICAgY29uc3QgYmxvYiA9IGAke25hbWV9ICR7aWR9ICR7bGFiZWx9YC50b0xvd2VyQ2FzZSgpXG5cbiAgICAgIGlmIChcbiAgICAgICAgbmFtZS5pbmNsdWRlcyhcIl9zeXN0ZW1maWVsZF9sb2NhdGlvblwiKSB8fFxuICAgICAgICAvZ2VvfGxvY2F0aW9ufGNpdHkvLnRlc3QoYmxvYilcbiAgICAgICkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWpyLWFzaGJ5LWZpZWxkLXR5cGVcIiwgXCJMb2NhdGlvblwiKVxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJkYXRhLWpyLWFzaGJ5LWxvY2F0aW9uLXR5cGVzXCIsXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW1wiQ0lUWVwiLCBcIkFETUlOSVNUUkFUSVZFX0FSRUFfTEVWRUxfMVwiLCBcIkNPVU5UUllcIl0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoL3NjaG9vbHx1bml2ZXJzaXR5fGNvbGxlZ2UvLnRlc3QoYmxvYikpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1qci1hc2hieS1maWVsZC10eXBlXCIsIFwiU2Nob29sXCIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHdhbGsoZG9jdW1lbnQpXG4gIGNvbnN0IG9icyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHdhbGsoZG9jdW1lbnQpKVxuICBvYnMub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXG5cbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiX19qcl9hc2hieV9maWVsZF9tZXRhZGF0YV9yZWFkeVwiKSlcbiAgcmV0dXJuIHsgb2s6IHRydWUgfVxufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9XG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LnRhYklkID09PSBcIm51bWJlclwiXG4gICAgICAgID8gcmVxLmJvZHkudGFiSWRcbiAgICAgICAgOiAoXG4gICAgICAgICAgICBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KVxuICAgICAgICAgIClbMF0/LmlkXG5cbiAgICBpZiAoIXRhYklkKSB7XG4gICAgICByZXMuc2VuZCh7IG9rOiBmYWxzZSwgbWVzc2FnZTogXCJub190YWJcIiB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgIHdvcmxkOiBcIk1BSU5cIixcbiAgICAgIGZ1bmM6IElOSkVDVF9GTlxuICAgIH0pXG5cbiAgICByZXMuc2VuZCh7XG4gICAgICBvazogdHJ1ZSxcbiAgICAgIHJlc3VsdDogcmVzdWx0cz8uWzBdPy5yZXN1bHQgPz8gbnVsbFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcImluamVjdF9mYWlsZWRcIlxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKlxuICogSW5qZWN0IHRoZSBoZWxwZXItYXBwIGJ1bmRsZSBpbnRvIHRoZSBzZW5kZXIgZnJhbWUgKHBvcnRlZCBmcm9tIEpvYnJpZ2h0KS5cbiAqL1xuZnVuY3Rpb24gcGF0aG5hbWVGcm9tQnVuZGxlVXJsKGJ1bmRsZVVybD86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIWJ1bmRsZVVybCkgcmV0dXJuIG51bGxcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGJ1bmRsZVVybClcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHVybC5wYXRobmFtZSkucmVwbGFjZSgvXlxcLysvLCBcIlwiKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gYnVuZGxlVXJsLnJlcGxhY2UoL15cXC8rLywgXCJcIilcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXI8eyBidW5kbGVVcmw/OiBzdHJpbmcgfT4gPSBhc3luYyAoXG4gIHJlcSxcbiAgcmVzXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9IHJlcS5zZW5kZXI/LnRhYj8uaWRcbiAgICBjb25zdCBmcmFtZUlkID0gcmVxLnNlbmRlcj8uZnJhbWVJZCA/PyAwXG4gICAgY29uc3QgZmlsZSA9IHBhdGhuYW1lRnJvbUJ1bmRsZVVybChyZXEuYm9keT8uYnVuZGxlVXJsKVxuXG4gICAgaWYgKHR5cGVvZiB0YWJJZCAhPT0gXCJudW1iZXJcIiB8fCAhZmlsZSkge1xuICAgICAgcmVzLnNlbmQoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwibWlzc2luZ190YWJfb3JfYnVuZGxlXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQ6IHsgdGFiSWQsIGZyYW1lSWRzOiBbZnJhbWVJZF0gfSxcbiAgICAgIGZpbGVzOiBbZmlsZV0sXG4gICAgICB3b3JsZDogXCJJU09MQVRFRFwiXG4gICAgfSlcblxuICAgIHJlcy5zZW5kKHsgc3VjY2VzczogdHJ1ZSB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbaW5qZWN0SGVscGVyQXBwQnVuZGxlXSBmYWlsZWQ6XCIsIGVycm9yKVxuICAgIHJlcy5zZW5kKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogUG9ydGVkIE1BSU4td29ybGQgaW5qZWN0IGZyb20gZW5naW5lL2JhY2tncm91bmQvLi4uL2luamVjdFJlYWN0U2VsZWN0RmliZXIuanNcbiAqL1xuaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmZ1bmN0aW9uIGluamVjdE1haW4oKSB7XG4gIGZ1bmN0aW9uIGUoZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhlKS5maW5kKGUgPT4gZS5zdGFydHNXaXRoKFwiX19yZWFjdEZpYmVyJFwiKSB8fCBlLnN0YXJ0c1dpdGgoXG4gICAgICBcIl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlJFwiKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHQodCkge1xuICAgIGxldCByID0gZSh0KTtcbiAgICBpZiAoIXIpIHJldHVybiBudWxsO1xuICAgIGxldCBhID0gdFtyXTtcbiAgICBmb3IgKGxldCBlID0gMDsgZSA8IDMwICYmIGE7IGUrKykge1xuICAgICAgbGV0IGUgPSBhLnN0YXRlTm9kZTtcbiAgICAgIGlmIChlICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUpIHtcbiAgICAgICAgbGV0IHQgPSBlLnNlbGVjdCB8fCBlO1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0LnNldFZhbHVlICYmIHQucHJvcHMpIHJldHVybiB0XG4gICAgICB9XG4gICAgICBhID0gYS5yZXR1cm5cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICB3aW5kb3cuX19qcl9yZWFjdF9zZWxlY3RfaW5qZWN0ZWQgfHwgKHdpbmRvdy5fX2pyX3JlYWN0X3NlbGVjdF9pbmplY3RlZCA9ICEwLCBkb2N1bWVudFxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiX19qcl9yZWFjdF9zZWxlY3RfcmVxdWVzdFwiLCBlID0+IHtcbiAgICAgIGxldCByID0gZS5kZXRhaWwgfHwge30sXG4gICAgICAgIGEgPSByLmFuY2hvclNlbGVjdG9yLFxuICAgICAgICBvID0gci5jYW5kaWRhdGVzIHx8IFtdLFxuICAgICAgICBzID0gci5yZXF1ZXN0SWQsXG4gICAgICAgIG4gPSB7XG4gICAgICAgICAgc3VjY2VzczogITEsXG4gICAgICAgICAgcmVxdWVzdElkOiBzXG4gICAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYSk7XG4gICAgICAgIGlmICghZSkge1xuICAgICAgICAgIG4uZXJyb3IgPSBcImFuY2hvciBub3QgZm91bmRcIiwgbChuKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgciA9IHQoZSk7XG4gICAgICAgIGlmICghcikge1xuICAgICAgICAgIG4uZXJyb3IgPSBcIm5vIFNlbGVjdCBpbnN0YW5jZSBmb3VuZFwiLCBsKG4pO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxldCBzID0gci5wcm9wcz8ub3B0aW9ucyB8fCBbXSxcbiAgICAgICAgICBpID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgZm9yIChsZXQgciBvZiB0KSB7XG4gICAgICAgICAgICAgIGxldCB0ID0gci50cmltKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICBhID0gZS5maW5kKGUgPT4gZS5sYWJlbCAmJiBlLmxhYmVsLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSB0KTtcbiAgICAgICAgICAgICAgaWYgKGEpIHJldHVybiBhO1xuICAgICAgICAgICAgICBsZXQgbyA9IGUuZmluZChlID0+IGUubGFiZWwgJiYgLTEgIT09IGUubGFiZWwudHJpbSgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0KSk7XG4gICAgICAgICAgICAgIGlmIChvKSByZXR1cm4gb1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9KHMsIG8pO1xuICAgICAgICBpZiAoIWkpIHtcbiAgICAgICAgICBuLmVycm9yID0gXCJubyBtYXRjaGluZyBvcHRpb25cIiwgbChuKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICByLnNldFZhbHVlKGksIFwic2VsZWN0LW9wdGlvblwiKSwgbi5zdWNjZXNzID0gITAsIG4ubWF0Y2hlZExhYmVsID0gaS5sYWJlbFxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBuLmVycm9yID0gU3RyaW5nKGUpXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGwoZSkge1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIl9fanJfcmVhY3Rfc2VsZWN0X3Jlc3BvbnNlXCIsIHtcbiAgICAgICAgICBkZXRhaWw6IGVcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgICBsKG4pXG4gICAgfSksIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJfX2pyX3JlYWN0X3NlbGVjdF9jbGlja19yZXF1ZXN0XCIsIHIgPT4ge1xuICAgICAgbGV0IGEgPSByLmRldGFpbCB8fCB7fSxcbiAgICAgICAgbyA9IGEub3B0aW9uU2VsZWN0b3IsXG4gICAgICAgIHMgPSBhLmFuY2hvclNlbGVjdG9yLFxuICAgICAgICBuID0gYS5yZXF1ZXN0SWQsXG4gICAgICAgIGwgPSB7XG4gICAgICAgICAgc3VjY2VzczogITEsXG4gICAgICAgICAgcmVxdWVzdElkOiBuXG4gICAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobyk7XG4gICAgICAgIGlmICghcikge1xuICAgICAgICAgIGwuZXJyb3IgPSBcIm9wdGlvbiBlbGVtZW50IG5vdCBmb3VuZFwiLCBpKGwpO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxldCBhID0gZShyKTtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICBsZXQgZSA9IHJbYV07XG4gICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCAxNSAmJiBlOyByKyspIHtcbiAgICAgICAgICAgIGxldCByID0gZS5tZW1vaXplZFByb3BzIHx8IGUucGVuZGluZ1Byb3BzO1xuICAgICAgICAgICAgaWYgKHI/LmRhdGE/LnZhbHVlICE9PSB2b2lkIDAgJiYgcj8uZGF0YT8ubGFiZWwpIHtcbiAgICAgICAgICAgICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHMpLFxuICAgICAgICAgICAgICAgIGEgPSBlID8gdChlKSA6IG51bGw7XG4gICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgYS5zZXRWYWx1ZShyLmRhdGEsIFwic2VsZWN0LW9wdGlvblwiKSwgbC5zdWNjZXNzID0gITAsIGwubWF0Y2hlZExhYmVsID0gci5kYXRhXG4gICAgICAgICAgICAgICAgICAubGFiZWwsIGkobCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUgPSBlLnJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgIGxldCBlID0gclthXTtcbiAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDE1ICYmIGU7IHQrKykge1xuICAgICAgICAgICAgbGV0IHQgPSBlLm1lbW9pemVkUHJvcHMgfHwgZS5wZW5kaW5nUHJvcHM7XG4gICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0Py5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgIHQub25DbGljayh7XG4gICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQ6ICgpID0+IHt9LFxuICAgICAgICAgICAgICAgIHN0b3BQcm9wYWdhdGlvbjogKCkgPT4ge31cbiAgICAgICAgICAgICAgfSksIGwuc3VjY2VzcyA9ICEwLCBpKGwpO1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQ/LmlubmVyUHJvcHM/Lm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgdC5pbm5lclByb3BzLm9uQ2xpY2soe1xuICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiAoKSA9PiB7fSxcbiAgICAgICAgICAgICAgICBzdG9wUHJvcGFnYXRpb246ICgpID0+IHt9XG4gICAgICAgICAgICAgIH0pLCBsLnN1Y2Nlc3MgPSAhMCwgaShsKTtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlID0gZS5yZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbC5lcnJvciA9IFwiY291bGQgbm90IGZpbmQgb3B0aW9uIGRhdGEgb3Igb25DbGljayBoYW5kbGVyXCJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbC5lcnJvciA9IFN0cmluZyhlKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJfX2pyX3JlYWN0X3NlbGVjdF9jbGlja19yZXNwb25zZVwiLCB7XG4gICAgICAgICAgZGV0YWlsOiBlXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgICAgaShsKVxuICAgIH0pKVxufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9IHJlcS5zZW5kZXI/LnRhYj8uaWRcbiAgICBpZiAoIXRhYklkKSB7XG4gICAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBvazogZmFsc2UsIG1lc3NhZ2U6IFwibm9fdGFiXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBmcmFtZUlkID0gcmVxLnNlbmRlcj8uZnJhbWVJZCA/PyAwXG4gICAgY29uc3QgdGFyZ2V0ID1cbiAgICAgIHJlcS5ib2R5Py5hbGxGcmFtZXMgPT09IHRydWVcbiAgICAgICAgPyB7IHRhYklkLCBhbGxGcmFtZXM6IHRydWUgfVxuICAgICAgICA6IHsgdGFiSWQsIGZyYW1lSWRzOiBbZnJhbWVJZF0gfVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0LFxuICAgICAgd29ybGQ6IFwiTUFJTlwiLFxuICAgICAgZnVuYzogaW5qZWN0TWFpblxuICAgIH0pXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgcmVzdWx0OiByZXN1bHRzPy5bMF0/LnJlc3VsdCA/PyBudWxsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltpbmplY3RSZWFjdFNlbGVjdEZpYmVyXVwiLCBlcnIpXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJpbmplY3RfZmFpbGVkXCJcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsIi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIFBvcnRlZCBNQUlOLXdvcmxkIGluamVjdCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kLy4uLi9pbmplY3RSZWNydWl0ZWVGaWJlci5qc1xuICovXG5pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuZnVuY3Rpb24gaW5qZWN0TWFpbigpIHtcbiAgZnVuY3Rpb24gZShlKSB7XG4gICAgbGV0IHQgPSBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gZSA6IGU/LnZhbHVlID8/IGU/LmlzbzIgPz8gZT8uY29kZSA/PyBcIlwiO1xuICAgIHJldHVybiBTdHJpbmcodCkudHJpbSgpLnRvVXBwZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHQoZSkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiX19qcl9yZWNydWl0ZWVfcGhvbmVfY291bnRyeV9yZXNwb25zZVwiLCB7XG4gICAgICBkZXRhaWw6IGVcbiAgICB9KSlcbiAgfVxuICB3aW5kb3cuX19qcl9yZWNydWl0ZWVfZmliZXJfaW5qZWN0ZWQgfHwgKHdpbmRvdy5fX2pyX3JlY3J1aXRlZV9maWJlcl9pbmplY3RlZCA9ICEwLCBkb2N1bWVudFxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiX19qcl9yZWNydWl0ZWVfcGhvbmVfY291bnRyeV9yZXF1ZXN0XCIsIHIgPT4ge1xuICAgICAgbGV0IGEgPSByLmRldGFpbCB8fCB7fSxcbiAgICAgICAgbyA9IGEucmVxdWVzdElkLFxuICAgICAgICBzID0ge1xuICAgICAgICAgIHN1Y2Nlc3M6ICExLFxuICAgICAgICAgIHJlcXVlc3RJZDogb1xuICAgICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEuc2VsZWN0b3IpO1xuICAgICAgICBpZiAoIXIpIHtcbiAgICAgICAgICBzLmVycm9yID0gXCJwaG9uZSBjb3VudHJ5IGVsZW1lbnQgbm90IGZvdW5kXCIsIHQocyk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG8gPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgbGV0IHIgPSBPYmplY3Qua2V5cyh0KS5maW5kKGUgPT4gZS5zdGFydHNXaXRoKFwiX19yZWFjdEZpYmVyJFwiKSB8fCBlLnN0YXJ0c1dpdGgoXG4gICAgICAgICAgICBcIl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlJFwiKSk7XG4gICAgICAgICAgaWYgKCFyKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICBsZXQgYSA9IG51bGwsXG4gICAgICAgICAgICBvID0gbnVsbCxcbiAgICAgICAgICAgIHMgPSB0W3JdO1xuICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMzAgJiYgczsgdCArPSAxKSB7XG4gICAgICAgICAgICBsZXQgdCA9IFtzLm1lbW9pemVkUHJvcHMsIHMucGVuZGluZ1Byb3BzXS5maWx0ZXIoKGUsIHQsIHIpID0+IGUgJiYgci5pbmRleE9mKFxuICAgICAgICAgICAgICBlKSA9PT0gdCk7XG4gICAgICAgICAgICBmb3IgKGxldCByIG9mIHQpICFhICYmIHI/Lm5hbWUgPT09IFwiY2FuZGlkYXRlLnBob25lQ291bnRyeVwiICYmIGUoci52YWx1ZSkgJiYgQXJyYXlcbiAgICAgICAgICAgICAgLmlzQXJyYXkoci5vcHRpb25zKSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHIub25DaGFuZ2UgJiYgKGEgPSByKSwgbyB8fCAobyA9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgbGV0IHIgPSB0Py5tZXRhZGF0YT8uY291bnRyeV9jYWxsaW5nX2NvZGVzO1xuICAgICAgICAgICAgICAgICAgaWYgKCFyIHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIHIgfHwgQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICBsZXQgYSA9IE9iamVjdC5lbnRyaWVzKHIpLnNvbWUoKFt0LCByXSkgPT4gdC5yZXBsYWNlKC9cXEQvZywgXCJcIikgJiYgQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgLmlzQXJyYXkocikgJiYgci5zb21lKHQgPT4gZSh0KSkpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPyByIDogbnVsbFxuICAgICAgICAgICAgICAgIH0ocikpO1xuICAgICAgICAgICAgcyA9IHMucmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghYSB8fCAhbykgcmV0dXJuIG51bGw7XG4gICAgICAgICAgbGV0IG4gPSBuZXcgTWFwO1xuICAgICAgICAgIGZvciAobGV0IFt0LCByXSBvZiBPYmplY3QuZW50cmllcyhvKSkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHIpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGxldCBhID0gdC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICAgICAgICBpZiAoYSlcbiAgICAgICAgICAgICAgZm9yIChsZXQgdCBvZiByKSB7XG4gICAgICAgICAgICAgICAgbGV0IHIgPSBlKHQpO1xuICAgICAgICAgICAgICAgIHIgJiYgIW4uaGFzKHIpICYmIG4uc2V0KHIsIGEpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGwgPSBhLm9wdGlvbnMuZmxhdE1hcCh0ID0+IHtcbiAgICAgICAgICAgICAgbGV0IHIgPSBlKHQpLFxuICAgICAgICAgICAgICAgIGEgPSBTdHJpbmcodD8ubGFiZWwgPz8gdD8uY291bnRyeU5hbWUgPz8gdD8ubmFtZSA/PyBcIlwiKS50cmltKCksXG4gICAgICAgICAgICAgICAgbyA9IG4uZ2V0KHIpIHx8IFwiXCI7XG4gICAgICAgICAgICAgIHJldHVybiByICYmIGEgJiYgbyA/IFt7XG4gICAgICAgICAgICAgICAgaXNvMjogcixcbiAgICAgICAgICAgICAgICBjb3VudHJ5TmFtZTogYSxcbiAgICAgICAgICAgICAgICBkaWFsQ29kZTogb1xuICAgICAgICAgICAgICB9XSA6IFtdXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGkgPSBlKGEudmFsdWUpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250cm9sbGVkUHJvcHM6IGEsXG4gICAgICAgICAgICBjdXJyZW50SXNvMjogaSxcbiAgICAgICAgICAgIG9wdGlvbnM6IGxcbiAgICAgICAgICB9XG4gICAgICAgIH0ocik7XG4gICAgICAgIGlmICghbykge1xuICAgICAgICAgIHMuZXJyb3IgPSBcInBob25lIGNvdW50cnkgRmliZXIgbWV0YWRhdGEgbm90IGZvdW5kXCIsIHQocyk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMuY3VycmVudElzbzIgPSBvLmN1cnJlbnRJc28yLCBzLm9wdGlvbnMgPSBvLm9wdGlvbnMsIFwicmVhZFwiID09PSBhLmFjdGlvbikgc1xuICAgICAgICAgIC5zdWNjZXNzID0gITA7XG4gICAgICAgIGVsc2UgaWYgKFwic2VsZWN0XCIgPT09IGEuYWN0aW9uKSB7XG4gICAgICAgICAgbGV0IHQgPSBlKGEudGFyZ2V0SXNvMik7XG4gICAgICAgICAgaWYgKHMudGFyZ2V0SXNvMiA9IHQsIHQpIHtcbiAgICAgICAgICAgIGxldCByID0gby5vcHRpb25zLmZpbHRlcihyID0+IGUoci5pc28yKSA9PT0gdCk7XG4gICAgICAgICAgICAwID09PSByLmxlbmd0aCA/IChzLmNoYW5nZWQgPSAhMSwgcy5lcnJvciA9XG4gICAgICAgICAgICAgIFwidGFyZ2V0IElTTyBub3QgZm91bmQgaW4gbGl2ZSBvcHRpb25zXCIpIDogci5sZW5ndGggPiAxID8gKHMuY2hhbmdlZCA9ICExLCBzXG4gICAgICAgICAgICAgICAgLmVycm9yID0gXCJ0YXJnZXQgSVNPIG1hdGNoZWQgbXVsdGlwbGUgbGl2ZSBvcHRpb25zXCIpIDogdCA9PT0gby5jdXJyZW50SXNvMiA/IChzXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MgPSAhMCwgcy5jaGFuZ2VkID0gITEpIDogKG8uY29udHJvbGxlZFByb3BzLm9uQ2hhbmdlKHQpLCBzLnN1Y2Nlc3MgPSAhMCxcbiAgICAgICAgICAgICAgICBzLmNoYW5nZWQgPSAhMClcbiAgICAgICAgICB9IGVsc2Ugcy5lcnJvciA9IFwidGFyZ2V0IElTTyBpcyByZXF1aXJlZFwiXG4gICAgICAgIH0gZWxzZSBzLmVycm9yID0gXCJ1bnN1cHBvcnRlZCBwaG9uZSBjb3VudHJ5IGFjdGlvblwiXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHMuZXJyb3IgPSBTdHJpbmcoZSlcbiAgICAgIH1cbiAgICAgIHQocylcbiAgICB9KSlcbn1cblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFiSWQgPSByZXEuc2VuZGVyPy50YWI/LmlkXG4gICAgaWYgKCF0YWJJZCkge1xuICAgICAgcmVzLnNlbmQoeyBzdWNjZXNzOiBmYWxzZSwgb2s6IGZhbHNlLCBtZXNzYWdlOiBcIm5vX3RhYlwiIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZnJhbWVJZCA9IHJlcS5zZW5kZXI/LmZyYW1lSWQgPz8gMFxuICAgIGNvbnN0IHRhcmdldCA9XG4gICAgICByZXEuYm9keT8uYWxsRnJhbWVzID09PSB0cnVlXG4gICAgICAgID8geyB0YWJJZCwgYWxsRnJhbWVzOiB0cnVlIH1cbiAgICAgICAgOiB7IHRhYklkLCBmcmFtZUlkczogW2ZyYW1lSWRdIH1cbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldCxcbiAgICAgIHdvcmxkOiBcIk1BSU5cIixcbiAgICAgIGZ1bmM6IGluamVjdE1haW5cbiAgICB9KVxuICAgIHJlcy5zZW5kKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBvazogdHJ1ZSxcbiAgICAgIHJlc3VsdDogcmVzdWx0cz8uWzBdPy5yZXN1bHQgPz8gbnVsbFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbaW5qZWN0UmVjcnVpdGVlRmliZXJdXCIsIGVycilcbiAgICByZXMuc2VuZCh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcImluamVjdF9mYWlsZWRcIlxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogUG9ydGVkIE1BSU4td29ybGQgaW5qZWN0IGZyb20gZW5naW5lL2JhY2tncm91bmQvLi4uL2luamVjdFdvcmthYmxlQ2hlY2tib3guanNcbiAqL1xuaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmZ1bmN0aW9uIGluamVjdE1haW4oKSB7XG4gIGZ1bmN0aW9uIGUoZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSh0ID0+IHNldFRpbWVvdXQodCwgZSkpXG4gIH1cblxuICBmdW5jdGlvbiB0KGUpIHtcbiAgICByZXR1cm4gITAgPT09IGUuY2hlY2tlZFxuICB9XG5cbiAgZnVuY3Rpb24gcihlLCB0KSB7XG4gICAgdCAmJiAhZS5pbmNsdWRlcyh0KSAmJiBlLnB1c2godClcbiAgfVxuXG4gIGZ1bmN0aW9uIGEoZSkge1xuICAgIHJldHVybiBTdHJpbmcoZSA/PyBcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcKi9nLCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG8oZSkge1xuICAgIHJldHVybiBlID8gYShlLmlubmVyVGV4dCB8fCBlLnRleHRDb250ZW50IHx8IFwiXCIpIDogXCJcIlxuICB9XG5cbiAgZnVuY3Rpb24gcyhlKSB7XG4gICAgcmV0dXJuIG5ldyBNb3VzZUV2ZW50KGUsIHtcbiAgICAgIGJ1YmJsZXM6ICEwLFxuICAgICAgY2FuY2VsYWJsZTogITAsXG4gICAgICB2aWV3OiB3aW5kb3dcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gbihlKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJfX2pyX3dvcmthYmxlX2NoZWNrYm94X3Jlc3BvbnNlXCIsIHtcbiAgICAgIGRldGFpbDogZVxuICAgIH0pKVxuICB9XG4gIHdpbmRvdy5fX2pyX3dvcmthYmxlX2NoZWNrYm94X2luamVjdGVkIHx8ICh3aW5kb3cuX19qcl93b3JrYWJsZV9jaGVja2JveF9pbmplY3RlZCA9ICEwLCBkb2N1bWVudFxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiX19qcl93b3JrYWJsZV9jaGVja2JveF9yZXF1ZXN0XCIsIGFzeW5jIGwgPT4ge1xuICAgICAgbGV0IGkgPSBsLmRldGFpbCB8fCB7fSxcbiAgICAgICAgdSA9IGkucmVxdWVzdElkLFxuICAgICAgICBjID0gaS5zZWxlY3RvcixcbiAgICAgICAgZCA9IGkubGFiZWwsXG4gICAgICAgIHAgPSBBcnJheS5pc0FycmF5KGkub3B0aW9ucykgPyBpLm9wdGlvbnMgOiBbXSxcbiAgICAgICAgZiA9IHtcbiAgICAgICAgICByZXF1ZXN0SWQ6IHUsXG4gICAgICAgICAgc3VjY2VzczogITFcbiAgICAgICAgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjKTtcbiAgICAgICAgaWYgKCEobCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICAgICAgZi5lcnJvciA9IFwiY2hlY2tib3ggaW5wdXQgbm90IGZvdW5kXCIsIG4oZik7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0KGwpKSB7XG4gICAgICAgICAgZm9yIChsZXQgbiBvZiBmdW5jdGlvbihlLCB0LCBzKSB7XG4gICAgICAgICAgICAgIGxldCBuID0gW10sXG4gICAgICAgICAgICAgICAgbCA9IGUuY2xvc2VzdChcIltkYXRhLXVpPSdvcHRpb24nXVwiKTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSBvZiAocihuLCBlLmNsb3Nlc3QoXCJsYWJlbFwiKSksIHIobiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFlLmlkKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgIGxldCB0ID0gZS5pZC5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIikucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpO1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7dH1cIl1gKVxuICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfShlKSksIHIobiwgZS5jbG9zZXN0KFwiW3JvbGU9J2NoZWNrYm94J11cIikpLCByKG4sIGwpLCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICBsZXQgciA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSBbZSwgLi4udF0ubWFwKGEpLmZpbHRlcihlID0+IGUgJiYgXCIqXCIgIT09IGUgJiYgZS5sZW5ndGggPj1cbiAgICAgICAgICAgICAgICAgICAgICAgIDQpLFxuICAgICAgICAgICAgICAgICAgICAgIG8gPSByLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1wiYWdyZWVcIiwgXCJhY2NlcHRcIiwgXCJhY2tub3dsZWRnZVwiLCBcImF1dGhvcml6ZVwiLCBcImNlcnRpZnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbnNlbnRcIiwgXCJwcml2YWN5XCIsIFwidGVybXNcIiwgXCJub3RpY2VcIiwgXCJyZWFkIHVuZGVyc3RhbmRcIlxuICAgICAgICAgICAgICAgICAgICBdLnNvbWUoZSA9PiBvLmluY2x1ZGVzKGUpKSAmJiByLnB1c2goXCJwcml2YWN5IG5vdGljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY29uc2VudCB0byB0aGUgcHJvY2Vzc2luZ1wiLCBcInByb2Nlc3Npbmcgb2YgbXkgZGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicGFydCBvZiB0aGlzIGFwcGxpY2F0aW9uXCIpLCBBcnJheS5mcm9tKG5ldyBTZXQocikpXG4gICAgICAgICAgICAgICAgICB9KGUsIHQpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHIubGVuZ3RoID8gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsLCBbcm9sZT0nY2hlY2tib3gnXSwgW2RhdGEtdWk9J29wdGlvbiddLCBidXR0b24sIHNwYW4sIGRpdlwiXG4gICAgICAgICAgICAgICAgICAgICkpLmZpbHRlcihlID0+IChmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gbyhlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhciAmJiB0LnNvbWUoZSA9PiBlLmxlbmd0aCA8IDggPyByID09PSBlIDogci5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICBlKSB8fCBlLmluY2x1ZGVzKHIpICYmIHIubGVuZ3RoID49IDE2KVxuICAgICAgICAgICAgICAgICAgfSkoZSwgcikpLnNvcnQoKGUsIHQpID0+IG8oZSkubGVuZ3RoIC0gbyh0KS5sZW5ndGgpIDogW11cbiAgICAgICAgICAgICAgICB9KHQsIHMpKSkgcihuLCBpKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHIobiwgZSksIG5cbiAgICAgICAgICAgIH0obCwgZCwgcCkpXG4gICAgICAgICAgICBpZiAobi5zY3JvbGxJbnRvVmlldz8uKHtcbiAgICAgICAgICAgICAgICBibG9jazogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBpbmxpbmU6IFwibmVhcmVzdFwiXG4gICAgICAgICAgICAgIH0pLCBuLmZvY3VzPy4oKSwgbi5kaXNwYXRjaEV2ZW50KHMoXCJtb3VzZWRvd25cIikpLCBuLmRpc3BhdGNoRXZlbnQocyhcIm1vdXNldXBcIikpLFxuICAgICAgICAgICAgICBuLmNsaWNrKCksIGF3YWl0IGUoMTIwKSwgdChsKSAmJiAoYXdhaXQgZSgxNTApLCB0KGwpKSkgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICB0KGwpICYmIChsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgYnViYmxlczogITAsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiAhMFxuICAgICAgICAgIH0pKSwgbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7XG4gICAgICAgICAgICBidWJibGVzOiAhMCxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6ICEwXG4gICAgICAgICAgfSkpLCBsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYmx1clwiLCB7XG4gICAgICAgICAgICBidWJibGVzOiAhMCxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6ICEwXG4gICAgICAgICAgfSkpLCBhd2FpdCBlKDEyMCkpLCBmLnN1Y2Nlc3MgPSB0KGwpLCBmLmNoZWNrZWQgPSBsLmNoZWNrZWQsIGYudmlzdWFsU3RhdGUgPVxuICAgICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGxldCB0ID0gZS5jbG9zZXN0KFwiW2RhdGEtdWk9J29wdGlvbiddXCIpLFxuICAgICAgICAgICAgICByID0gW2UuY2xvc2VzdChcIltyb2xlPSdjaGVja2JveCddXCIpLCBlLmNsb3Nlc3QoXCJsYWJlbFtkYXRhLWNoZWNrZWRdXCIpLCB0XG4gICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFwibGFiZWxbZGF0YS1jaGVja2VkXVwiKSwgZS5jbG9zZXN0KFwibGFiZWxcIilcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGZvciAobGV0IGUgb2Ygcikge1xuICAgICAgICAgICAgICBsZXQgdCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWUpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgb2YgW1wiYXJpYS1jaGVja2VkXCIsIFwiZGF0YS1jaGVja2VkXCJdKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgciA9IGUuZ2V0QXR0cmlidXRlKHQpO1xuICAgICAgICAgICAgICAgICAgaWYgKFwidHJ1ZVwiID09PSByKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICBpZiAoXCJmYWxzZVwiID09PSByKSByZXR1cm4gITFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgfShlKTtcbiAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHQpIHJldHVybiB0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH0obClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZi5lcnJvciA9IFN0cmluZyhlKVxuICAgICAgfVxuICAgICAgbihmKVxuICAgIH0pKVxufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9IHJlcS5zZW5kZXI/LnRhYj8uaWRcbiAgICBpZiAoIXRhYklkKSB7XG4gICAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBvazogZmFsc2UsIG1lc3NhZ2U6IFwibm9fdGFiXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBmcmFtZUlkID0gcmVxLnNlbmRlcj8uZnJhbWVJZCA/PyAwXG4gICAgY29uc3QgdGFyZ2V0ID1cbiAgICAgIHJlcS5ib2R5Py5hbGxGcmFtZXMgPT09IHRydWVcbiAgICAgICAgPyB7IHRhYklkLCBhbGxGcmFtZXM6IHRydWUgfVxuICAgICAgICA6IHsgdGFiSWQsIGZyYW1lSWRzOiBbZnJhbWVJZF0gfVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0LFxuICAgICAgd29ybGQ6IFwiTUFJTlwiLFxuICAgICAgZnVuYzogaW5qZWN0TWFpblxuICAgIH0pXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgcmVzdWx0OiByZXN1bHRzPy5bMF0/LnJlc3VsdCA/PyBudWxsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltpbmplY3RXb3JrYWJsZUNoZWNrYm94XVwiLCBlcnIpXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJpbmplY3RfZmFpbGVkXCJcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsIi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIFBvcnRlZCBNQUlOLXdvcmxkIGluamVjdCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kLy4uLi9pbmplY3RXb3JrZGF5RmliZXIuanNcbiAqL1xuaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmZ1bmN0aW9uIGluamVjdE1haW4oKSB7XG4gIGlmICh3aW5kb3cuX19qcl93b3JrZGF5X2ZpYmVyX2luamVjdGVkKSByZXR1cm47XG4gIHdpbmRvdy5fX2pyX3dvcmtkYXlfZmliZXJfaW5qZWN0ZWQgPSAhMDtcbiAgbGV0IGUgPSBcIl9fanJfd29ya2RheV90ZXh0X3Jlc3BvbnNlXCIsXG4gICAgdCA9IFwiX19qcl93b3JrZGF5X3NlbGVjdF9yZXNwb25zZVwiLFxuICAgIHIgPSBcIl9fanJfd29ya2RheV9zZWxlY3Rfb3B0aW9uc19yZXNwb25zZVwiLFxuICAgIGEgPSBcIl9fanJfd29ya2RheV9kYXRlX3Jlc3BvbnNlXCIsXG4gICAgbyA9IFwiX19qcl93b3JrZGF5X2NoZWNrYm94X3Jlc3BvbnNlXCI7XG5cbiAgZnVuY3Rpb24gcyhlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGUpLmZpbmQoZSA9PiBlLnN0YXJ0c1dpdGgoXCJfX3JlYWN0UHJvcHMkXCIpKVxuICB9XG5cbiAgZnVuY3Rpb24gbihlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGUpLmZpbmQoZSA9PiBlLnN0YXJ0c1dpdGgoXCJfX3JlYWN0RmliZXIkXCIpIHx8IGUuc3RhcnRzV2l0aChcbiAgICAgIFwiX19yZWFjdEludGVybmFsSW5zdGFuY2UkXCIpKVxuICB9XG5cbiAgZnVuY3Rpb24gbChlLCB0KSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZSwge1xuICAgICAgZGV0YWlsOiB0XG4gICAgfSkpXG4gIH1cblxuICBmdW5jdGlvbiBpKGUpIHtcbiAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IGUgOiBTdHJpbmcoZT8ubGFiZWwgPz8gZT8uZGVzY3JpcHRvciA/PyBlPy5uYW1lID8/IGU/LnRleHQgPz8gZVxuICAgICAgPy52YWx1ZSA/PyBcIlwiKVxuICB9XG5cbiAgZnVuY3Rpb24gdShlLCB0LCByKSB7XG4gICAgbGV0IGEgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFByb3h5ID8gbmV3IFByb3h5KGUsIHtcbiAgICAgIGdldChlLCByKSB7XG4gICAgICAgIGlmIChcImNoZWNrZWRcIiA9PT0gcikgcmV0dXJuIHQ7XG4gICAgICAgIGxldCBhID0gUmVmbGVjdC5nZXQoZSwgciwgZSk7XG4gICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGEgPyBhLmJpbmQoZSkgOiBhXG4gICAgICB9XG4gICAgfSkgOiBlO1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXQ6IGEsXG4gICAgICBjdXJyZW50VGFyZ2V0OiBhLFxuICAgICAgdHlwZTogcixcbiAgICAgIHByZXZlbnREZWZhdWx0KCkge30sXG4gICAgICBzdG9wUHJvcGFnYXRpb24oKSB7fSxcbiAgICAgIG5hdGl2ZUV2ZW50OiB7XG4gICAgICAgIHRhcmdldDogYSxcbiAgICAgICAgY3VycmVudFRhcmdldDogYSxcbiAgICAgICAgdHlwZTogclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGMoZSwgdCwgcikge1xuICAgIGxldCBhID0gITE7XG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZT8ub25DbGljaykgdHJ5IHtcbiAgICAgIGUub25DbGljayh1KHQsIHIsIFwiY2xpY2tcIikpLCBhID0gITBcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGU/Lm9uQ2hhbmdlKSB0cnkge1xuICAgICAgZS5vbkNoYW5nZSh1KHQsIHIsIFwiY2hhbmdlXCIpKSwgYSA9ICEwXG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gYVxuICB9XG5cbiAgZnVuY3Rpb24gZChlLCB0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhcmdldDogZSxcbiAgICAgIGN1cnJlbnRUYXJnZXQ6IGUsXG4gICAgICB0eXBlOiB0LFxuICAgICAgcHJldmVudERlZmF1bHQoKSB7fSxcbiAgICAgIHN0b3BQcm9wYWdhdGlvbigpIHt9LFxuICAgICAgbmF0aXZlRXZlbnQ6IHtcbiAgICAgICAgdGFyZ2V0OiBlLFxuICAgICAgICBjdXJyZW50VGFyZ2V0OiBlLFxuICAgICAgICB0eXBlOiB0XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJfX2pyX3dvcmtkYXlfdGV4dF9yZXF1ZXN0XCIsIHQgPT4ge1xuICAgIGxldCByID0gdC5kZXRhaWwgfHwge30sXG4gICAgICBhID0gci5zZWxlY3RvcixcbiAgICAgIG8gPSByLnZhbHVlLFxuICAgICAgbiA9IHIucmVxdWVzdElkLFxuICAgICAgaSA9IHtcbiAgICAgICAgc3VjY2VzczogITEsXG4gICAgICAgIHJlcXVlc3RJZDogblxuICAgICAgfTtcbiAgICB0cnkge1xuICAgICAgbGV0IHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEpO1xuICAgICAgaWYgKCF0KSB7XG4gICAgICAgIGkuZXJyb3IgPSBcImVsZW1lbnQgbm90IGZvdW5kXCIsIGwoZSwgaSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IHIgPSBzKHQpO1xuICAgICAgaWYgKCFyKSB7XG4gICAgICAgIGkuZXJyb3IgPSBcIm5vIF9fcmVhY3RQcm9wcyBmb3VuZFwiLCBsKGUsIGkpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxldCBuID0gdFtyXTtcbiAgICAgIHQudmFsdWUgPSBvLCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4ub25JbnB1dCAmJiBuLm9uSW5wdXQoe1xuICAgICAgICB0YXJnZXQ6IHQsXG4gICAgICAgIGN1cnJlbnRUYXJnZXQ6IHQsXG4gICAgICAgIHByZXZlbnREZWZhdWx0KCkge30sXG4gICAgICAgIHN0b3BQcm9wYWdhdGlvbigpIHt9XG4gICAgICB9KSwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBuLm9uQ2hhbmdlICYmIG4ub25DaGFuZ2Uoe1xuICAgICAgICB0YXJnZXQ6IHQsXG4gICAgICAgIGN1cnJlbnRUYXJnZXQ6IHQsXG4gICAgICAgIHByZXZlbnREZWZhdWx0KCkge30sXG4gICAgICAgIHN0b3BQcm9wYWdhdGlvbigpIHt9XG4gICAgICB9KSwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBuLm9uQmx1ciAmJiBuLm9uQmx1cih7XG4gICAgICAgIHRhcmdldDogdCxcbiAgICAgICAgY3VycmVudFRhcmdldDogdCxcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbnVsbCxcbiAgICAgICAgcHJldmVudERlZmF1bHQoKSB7fSxcbiAgICAgICAgc3RvcFByb3BhZ2F0aW9uKCkge31cbiAgICAgIH0pLCBpLnN1Y2Nlc3MgPSAhMFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGkuZXJyb3IgPSBTdHJpbmcoZSlcbiAgICB9XG4gICAgbChlLCBpKVxuICB9KSwgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIl9fanJfd29ya2RheV9zZWxlY3RfcmVxdWVzdFwiLCBlID0+IHtcbiAgICBsZXQgciA9IGUuZGV0YWlsIHx8IHt9LFxuICAgICAgYSA9IHIuc2VsZWN0b3IsXG4gICAgICBvID0gci5jYW5kaWRhdGVzIHx8IFtdLFxuICAgICAgcyA9IHIucmVxdWVzdElkLFxuICAgICAgaSA9IHtcbiAgICAgICAgc3VjY2VzczogITEsXG4gICAgICAgIHJlcXVlc3RJZDogc1xuICAgICAgfTtcbiAgICB0cnkge1xuICAgICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEpO1xuICAgICAgaWYgKCFlKSB7XG4gICAgICAgIGkuZXJyb3IgPSBcImJ1dHRvbiBub3QgZm91bmRcIiwgbCh0LCBpKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgciA9IG4oZSk7XG4gICAgICBpZiAoIXIpIHtcbiAgICAgICAgaS5lcnJvciA9IFwibm8gZmliZXIga2V5XCIsIGwodCwgaSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IHMgPSBlW3JdLFxuICAgICAgICB1ID0gbnVsbCxcbiAgICAgICAgYyA9IG51bGwsXG4gICAgICAgIGQgPSBbXSxcbiAgICAgICAgcCA9IFtdO1xuICAgICAgZm9yIChsZXQgZSA9IDA7IGUgPCAxNSAmJiBzOyBlKyspIHtcbiAgICAgICAgbGV0IHQgPSBzLnN0YXRlTm9kZSxcbiAgICAgICAgICByID0gcy50eXBlPy5kaXNwbGF5TmFtZSB8fCBzLnR5cGU/Lm5hbWUgfHwgcy50eXBlIHx8IFwiKG5vIHR5cGUpXCIsXG4gICAgICAgICAgYSA9IHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSB8fFxuICAgICAgICAgIHt9KS5maWx0ZXIoZSA9PiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHRbZV0pLnNsaWNlKDAsIDEwKSA6IFtdO1xuICAgICAgICBpZiAocC5wdXNoKGBkZXB0aCAke2V9OiAke3J9IG1ldGhvZHM9WyR7YS5qb2luKFwiLFwiKX1dYCksIGQucHVzaChzKSwgdCAmJiBcIm9iamVjdFwiID09XG4gICAgICAgICAgdHlwZW9mIHQgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiB0LnVwZGF0ZVN0YXRlRnJvbVZhbHVlKSB7XG4gICAgICAgICAgdSA9IHQsIGMgPSBzLm1lbW9pemVkUHJvcHMgfHwgcy5wZW5kaW5nUHJvcHM7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBzID0gcy5yZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICghdSkge1xuICAgICAgICBpLmVycm9yID0gXCJubyBTZWxlY3QgaW5zdGFuY2Ugd2l0aCB1cGRhdGVTdGF0ZUZyb21WYWx1ZSBmb3VuZFwiLCBsKHQsIGkpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxldCBmID0gYz8ub3B0aW9ucyB8fCBbXSxcbiAgICAgICAgbSA9IG51bGw7XG4gICAgICBmb3IgKGxldCBlIG9mIG8pIHtcbiAgICAgICAgbGV0IHQgPSBlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoKG0gPSBmLmZpbmQoZSA9PiBlLmxhYmVsICYmIGUubGFiZWwudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IHQpIHx8IG51bGwpIHx8IChtID0gZlxuICAgICAgICAgICAgLmZpbmQoZSA9PiBlLmxhYmVsICYmIC0xICE9PSBlLmxhYmVsLnRyaW0oKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodCkpIHx8IG51bGwpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBpZiAoIW0pIHtcbiAgICAgICAgaS5lcnJvciA9IFwibm8gbWF0Y2hpbmcgb3B0aW9uXCIsIGkuYXZhaWxhYmxlT3B0aW9ucyA9IGYuc2xpY2UoMCwgMTApLm1hcChlID0+IGUubGFiZWwpLFxuICAgICAgICAgIGwodCwgaSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdS51cGRhdGVTdGF0ZUZyb21WYWx1ZShtLnZhbHVlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHUuZmlyZUNoYW5nZUV2ZW50KG0udmFsdWUpXG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgZm9yIChsZXQgZSBvZiBkKSB7XG4gICAgICAgIGxldCB0ID0gZS5tZW1vaXplZFByb3BzIHx8IGUucGVuZGluZ1Byb3BzO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQub25PcHRpb25TZWxlY3Rpb24pIHRyeSB7XG4gICAgICAgICAgICB0Lm9uT3B0aW9uU2VsZWN0aW9uKG0pXG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0Lm9uQ2hhbmdlKSB0cnkge1xuICAgICAgICAgICAgdC5vbkNoYW5nZShtLnZhbHVlKVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGkuc3VjY2VzcyA9ICEwLCBpLm1hdGNoZWRMYWJlbCA9IG0ubGFiZWxcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpLmVycm9yID0gU3RyaW5nKGUpXG4gICAgfVxuICAgIGwodCwgaSlcbiAgfSksIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJfX2pyX3dvcmtkYXlfc2VsZWN0X29wdGlvbnNfcmVxdWVzdFwiLCBlID0+IHtcbiAgICBsZXQgdCA9IGUuZGV0YWlsIHx8IHt9LFxuICAgICAgYSA9IHQuc2VsZWN0b3IsXG4gICAgICBvID0gdC5yZXF1ZXN0SWQsXG4gICAgICBzID0ge1xuICAgICAgICBzdWNjZXNzOiAhMSxcbiAgICAgICAgcmVxdWVzdElkOiBvLFxuICAgICAgICBvcHRpb25zOiBbXVxuICAgICAgfTtcbiAgICB0cnkge1xuICAgICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEpO1xuICAgICAgaWYgKCFlKSB7XG4gICAgICAgIHMuZXJyb3IgPSBcImJ1dHRvbiBub3QgZm91bmRcIiwgbChyLCBzKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgdCA9IG4oZSk7XG4gICAgICBpZiAoIXQpIHtcbiAgICAgICAgcy5lcnJvciA9IFwibm8gZmliZXIga2V5XCIsIGwociwgcyk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IG8gPSBlW3RdLFxuICAgICAgICB1ID0gbnVsbDtcbiAgICAgIGZvciAobGV0IGUgPSAwOyBlIDwgMTUgJiYgbzsgZSsrKSB7XG4gICAgICAgIGxldCBlID0gby5zdGF0ZU5vZGU7XG4gICAgICAgIGlmIChlICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLnVwZGF0ZVN0YXRlRnJvbVZhbHVlKSB7XG4gICAgICAgICAgdSA9IG8ubWVtb2l6ZWRQcm9wcyB8fCBvLnBlbmRpbmdQcm9wcztcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIG8gPSBvLnJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCF1KSB7XG4gICAgICAgIHMuZXJyb3IgPSBcIm5vIFNlbGVjdCBpbnN0YW5jZSB3aXRoIHVwZGF0ZVN0YXRlRnJvbVZhbHVlIGZvdW5kXCIsIGwociwgcyk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IGMgPSBBcnJheS5pc0FycmF5KHU/Lm9wdGlvbnMpID8gdS5vcHRpb25zLm1hcChpKS5tYXAoZSA9PiBlLnJlcGxhY2UoL1xccysvZywgXCIgXCIpXG4gICAgICAudHJpbSgpKS5maWx0ZXIoQm9vbGVhbikgOiBbXTtcbiAgICAgIHMuc3VjY2VzcyA9IGMubGVuZ3RoID4gMCwgcy5vcHRpb25zID0gY1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHMuZXJyb3IgPSBTdHJpbmcoZSlcbiAgICB9XG4gICAgbChyLCBzKVxuICB9KSwgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIl9fanJfd29ya2RheV9kYXRlX3JlcXVlc3RcIiwgZSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGxldCB0ID0gZS5kZXRhaWwgfHwge30sXG4gICAgICAgIHIgPSB0LnNlbGVjdG9yLFxuICAgICAgICBvID0gdC5tb250aCxcbiAgICAgICAgaSA9IHQuZGF5LFxuICAgICAgICB1ID0gdC55ZWFyLFxuICAgICAgICBjID0gdC5yZXF1ZXN0SWQsXG4gICAgICAgIHAgPSB7XG4gICAgICAgICAgc3VjY2VzczogITEsXG4gICAgICAgICAgcmVxdWVzdElkOiBjXG4gICAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocik7XG4gICAgICAgIGlmICghZSkge1xuICAgICAgICAgIHAuZXJyb3IgPSBcImRhdGUgY29udGFpbmVyIG5vdCBmb3VuZFwiLCBsKGEsIHApO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxldCB0ID0gW10sXG4gICAgICAgICAgYyA9IGUucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b21hdGlvbi1pZD1cImRhdGVTZWN0aW9uTW9udGgtaW5wdXRcIl0nKTtcbiAgICAgICAgYyAmJiBvICYmIHQucHVzaCh7XG4gICAgICAgICAgaW5wdXQ6IGMsXG4gICAgICAgICAgdmFsOiBvXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbSA9IGUucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b21hdGlvbi1pZD1cImRhdGVTZWN0aW9uRGF5LWlucHV0XCJdJyk7XG4gICAgICAgIG0gJiYgaSAmJiB0LnB1c2goe1xuICAgICAgICAgIGlucHV0OiBtLFxuICAgICAgICAgIHZhbDogaVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGggPSBlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJkYXRlU2VjdGlvblllYXItaW5wdXRcIl0nKTtcbiAgICAgICAgaCAmJiB1ICYmIHQucHVzaCh7XG4gICAgICAgICAgaW5wdXQ6IGgsXG4gICAgICAgICAgdmFsOiB1XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsIFwidmFsdWVcIik/LnNldCxcbiAgICAgICAgICBiID0gISFjLFxuICAgICAgICAgIHkgPSAhIW0sXG4gICAgICAgICAgaiA9IGIgJiYgeSAmJiBvICYmIGkgPyBgJHtvfS8ke2l9LyR7dX1gIDogYiAmJiBvID8gYCR7b30vJHt1fWAgOiB1LFxuICAgICAgICAgIHggPSBmdW5jdGlvbihlLCB0LCByLCBhLCBvKSB7XG4gICAgICAgICAgICBsZXQgcyA9IGUucGFkU3RhcnQoNCwgXCIwXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGEgJiYgbyAmJiB0ICYmIHIgPyBgJHtzfS0ke3QucGFkU3RhcnQoMiwgXCIwXCIpfS0ke3IucGFkU3RhcnQoMiwgXCIwXCIpfWAgOlxuICAgICAgICAgICAgICBhICYmIHQgPyBgJHtzfS0ke3QucGFkU3RhcnQoMiwgXCIwXCIpfWAgOiBzXG4gICAgICAgICAgfSh1LCBvLCBpLCBiLCB5KSxcbiAgICAgICAgICBEID0gITEsXG4gICAgICAgICAgdiA9ICExLFxuICAgICAgICAgIEUgPSAhMSxcbiAgICAgICAgICBfID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbGV0IHQgPSBlLmlkIHx8IFwiXCIsXG4gICAgICAgICAgICAgIHIgPSB0LnNwbGl0KFwiLS1cIik7XG4gICAgICAgICAgICByZXR1cm4gci5sZW5ndGggPiAxID8gcltyLmxlbmd0aCAtIDFdIDogbnVsbFxuICAgICAgICAgIH0oZSksXG4gICAgICAgICAgQSA9IG51bGwsXG4gICAgICAgICAgdyA9IG5ldyBTZXQsXG4gICAgICAgICAgVCA9IG5ldyBTZXQ7XG4gICAgICAgIGZvciAobGV0IHtcbiAgICAgICAgICAgIGlucHV0OiBlLFxuICAgICAgICAgICAgdmFsOiByXG4gICAgICAgICAgfVxuICAgICAgICAgIG9mIHQpIHtcbiAgICAgICAgICBsZXQgdCA9IG4oZSk7XG4gICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIGxldCBhID0gZVt0XTtcbiAgICAgICAgICAgIGZvciAobGV0IGUgPSAwOyBlIDwgMTAgJiYgYTsgZSsrKSB7XG4gICAgICAgICAgICAgIGxldCBlID0gYS5zdGF0ZU5vZGU7XG4gICAgICAgICAgICAgIGlmIChlICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgJiYgZS5zdGF0ZSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50VmFsdWVcIiBpbiBlLnN0YXRlICYmIFwiZGlydHlcIiBpbiBlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLnNldFN0YXRlID8gZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWU6IHIsXG4gICAgICAgICAgICAgICAgICBkaXJ0eTogITBcbiAgICAgICAgICAgICAgICB9KSA6IChlLnN0YXRlLmN1cnJlbnRWYWx1ZSA9IHIsIGUuc3RhdGUuZGlydHkgPSAhMCwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlXG4gICAgICAgICAgICAgICAgICAuZm9yY2VVcGRhdGUgJiYgZS5mb3JjZVVwZGF0ZSgpKSwgRCA9ICEwO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYSA9IGEucmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBhID0gZS5fdmFsdWVUcmFja2VyO1xuICAgICAgICAgIGEgJiYgYS5zZXRWYWx1ZShcIlwiKSwgZyA/IGcuY2FsbChlLCByKSA6IGUudmFsdWUgPSByLCBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGJ1YmJsZXM6ICEwXG4gICAgICAgICAgICB9KSksIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuICAgICAgICAgICAgYnViYmxlczogITBcbiAgICAgICAgICB9KSksIEQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBsZXQgdCA9IHMoZSk7XG4gICAgICAgICAgICBpZiAoIXQpIHJldHVybiAhMTtcbiAgICAgICAgICAgIGxldCByID0gZVt0XSxcbiAgICAgICAgICAgICAgYSA9ICExO1xuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygcj8ub25JbnB1dCkgdHJ5IHtcbiAgICAgICAgICAgICAgci5vbklucHV0KGQoZSwgXCJpbnB1dFwiKSksIGEgPSAhMFxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHI/Lm9uQ2hhbmdlKSB0cnkge1xuICAgICAgICAgICAgICByLm9uQ2hhbmdlKGQoZSwgXCJjaGFuZ2VcIikpLCBhID0gITBcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiByPy5vbkJsdXIpIHRyeSB7XG4gICAgICAgICAgICAgIHIub25CbHVyKGQoZSwgXCJibHVyXCIpKSwgYSA9ICEwXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgcmV0dXJuIGFcbiAgICAgICAgICB9KGUpIHx8IERcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB7XG4gICAgICAgICAgICBpbnB1dDogZVxuICAgICAgICAgIH1cbiAgICAgICAgICBvZiB0KSBlLmRpc3BhdGNoRXZlbnQobmV3IEZvY3VzRXZlbnQoXCJibHVyXCIsIHtcbiAgICAgICAgICBidWJibGVzOiAhMCxcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBudWxsXG4gICAgICAgIH0pKTtcbiAgICAgICAgbGV0IEkgPSBjIHx8IG0gfHwgaCxcbiAgICAgICAgICBTID0gW107XG4gICAgICAgIGZvciAobGV0IHQgb2YgW0ksIGMsIG0sIGgsIGVdKSB0ICYmICFTLmluY2x1ZGVzKHQpICYmIFMucHVzaCh0KTtcbiAgICAgICAgbGV0IFIgPSBlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGZvciAobGV0IGUgPSAwOyBlIDwgOCAmJiBSOyBlKyspIFMucHVzaChSKSwgUiA9IFIucGFyZW50RWxlbWVudDtcbiAgICAgICAgZm9yIChsZXQgZSBvZiBTKSB7XG4gICAgICAgICAgbGV0IHQgPSBuKGUpO1xuICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICBsZXQgciA9IGVbdF07XG4gICAgICAgICAgICBmb3IgKGxldCBlID0gMDsgZSA8IDQ1ICYmIHI7IGUrKykge1xuICAgICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgICAgbGV0IGUgPSByLnN0YXRlTm9kZSxcbiAgICAgICAgICAgICAgICB0ID0gci5tZW1vaXplZFByb3BzIHx8IHIucGVuZGluZ1Byb3BzO1xuICAgICAgICAgICAgICBpZiAoXyB8fCBcInN0cmluZ1wiICE9IHR5cGVvZiB0Py5tZXRhZGF0YUlkIHx8IChfID0gdC5tZXRhZGF0YUlkKSwgIUEgJiYgKGYgPSB0XG4gICAgICAgICAgICAgICAgICA/LnZhbHVlKSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBmICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZi5zZXRWYWx1ZSAmJiBmXG4gICAgICAgICAgICAgICAgLnZhbHVlICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGYudmFsdWUgJiYgKEEgPSB0LnZhbHVlKSwgZSAmJiBcIm9iamVjdFwiID09XG4gICAgICAgICAgICAgICAgdHlwZW9mIGUgJiYgIVQuaGFzKGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKFQuYWRkKGUpLCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuc2V0VmFsdWUpIHRyeSB7XG4gICAgICAgICAgICAgICAgICBlLnNldFZhbHVlKGopLCB2ID0gITBcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuc2V0RGF0ZVZhbHVlKSB0cnkge1xuICAgICAgICAgICAgICAgICAgZS5zZXREYXRlVmFsdWUoaiksIHYgPSAhMFxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS51cGRhdGVTdGF0ZUZyb21WYWx1ZSkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGUudXBkYXRlU3RhdGVGcm9tVmFsdWUoaiksIHYgPSAhMCwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlXG4gICAgICAgICAgICAgICAgICAgIC5maXJlQ2hhbmdlRXZlbnQgJiYgKGUuZmlyZUNoYW5nZUV2ZW50KGopLCB2ID0gITApXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodCAmJiAhdy5oYXModCkgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiB0Lm9uRGF0ZVBpY2tlZCkge1xuICAgICAgICAgICAgICAgIHcuYWRkKHQpO1xuICAgICAgICAgICAgICAgIGxldCBlID0ge1xuICAgICAgICAgICAgICAgICAgeXl5eTogdS5wYWRTdGFydCg0LCBcIjBcIilcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGIgJiYgbyAmJiAoZS5tbSA9IG8ucGFkU3RhcnQoMiwgXCIwXCIpKSwgeSAmJiBpICYmIChlLmRkID0gaS5wYWRTdGFydCgyLFxuICAgICAgICAgICAgICAgIFwiMFwiKSk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHQub25EYXRlUGlja2VkKGUpLCB2ID0gITBcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHIgPSByLnJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXyAmJiBBKSB0cnkge1xuICAgICAgICAgIGF3YWl0IFByb21pc2UucmVzb2x2ZShBLnNldFZhbHVlKHtcbiAgICAgICAgICAgIGlkOiBfLFxuICAgICAgICAgICAgdmFsdWU6IHhcbiAgICAgICAgICB9KSksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgQS5jbGVhckZpZWxkRXJyb3JzICYmIGF3YWl0IFByb21pc2UucmVzb2x2ZShBXG4gICAgICAgICAgICAuY2xlYXJGaWVsZEVycm9ycyhfKSksIHYgPSAhMCwgRSA9ICEwXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBwLmNvbnRleHRDb21taXRFcnJvciA9IFN0cmluZyhlKVxuICAgICAgICB9XG4gICAgICAgIHAuc3VjY2VzcyA9IHYsIHAuaW5wdXRIYW5kbGVkID0gRCwgcC5wYXJlbnRDb21taXRIYW5kbGVkID0gdiwgcFxuICAgICAgICAgIC5jb250ZXh0Q29tbWl0SGFuZGxlZCA9IEUsIHAuZGF0ZUZpZWxkTWV0YWRhdGFJZCA9IF9cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcC5lcnJvciA9IFN0cmluZyhlKVxuICAgICAgfVxuICAgICAgbChhLCBwKVxuICAgIH0pKClcbiAgfSksIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJfX2pyX3dvcmtkYXlfY2hlY2tib3hfcmVxdWVzdFwiLCBlID0+IHtcbiAgICBsZXQgdCA9IGUuZGV0YWlsIHx8IHt9LFxuICAgICAgciA9IHQuc2VsZWN0b3IsXG4gICAgICBhID0gdC5jaGVja2VkID8/ICEwLFxuICAgICAgaSA9IHQucmVxdWVzdElkLFxuICAgICAgdSA9IHtcbiAgICAgICAgc3VjY2VzczogITEsXG4gICAgICAgIHJlcXVlc3RJZDogaVxuICAgICAgfTtcbiAgICB0cnkge1xuICAgICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHIpO1xuICAgICAgaWYgKCFlKSB7XG4gICAgICAgIHUuZXJyb3IgPSBcImVsZW1lbnQgbm90IGZvdW5kXCIsIGwobywgdSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IHQgPSBzKGUpLFxuICAgICAgICBpID0gbmV3IFNldCxcbiAgICAgICAgZCA9ICExO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgbGV0IHIgPSBlW3RdO1xuICAgICAgICByICYmIChpLmFkZChyKSwgZCA9IGMociwgZSwgYSkgfHwgZClcbiAgICAgIH1cbiAgICAgIGxldCBwID0gbihlKTtcbiAgICAgIGlmIChwKSB7XG4gICAgICAgIGxldCB0ID0gZVtwXTtcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCAxNSAmJiB0OyByKyspIHtcbiAgICAgICAgICBsZXQgciA9IHQubWVtb2l6ZWRQcm9wcyB8fCB0LnBlbmRpbmdQcm9wcztcbiAgICAgICAgICByICYmICFpLmhhcyhyKSAmJiAoaS5hZGQociksIGQgPSBjKHIsIGUsIGEpIHx8IGQpLCB0ID0gdC5yZXR1cm5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHQgfHwgKHUuZXJyb3IgPSBcIm5vIHJlYWN0UHJvcHMgb3IgZmliZXIga2V5IGZvdW5kXCIpO1xuICAgICAgdS5zdWNjZXNzID0gZFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHUuZXJyb3IgPSBTdHJpbmcoZSlcbiAgICB9XG4gICAgbChvLCB1KVxuICB9KVxufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9IHJlcS5zZW5kZXI/LnRhYj8uaWRcbiAgICBpZiAoIXRhYklkKSB7XG4gICAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBvazogZmFsc2UsIG1lc3NhZ2U6IFwibm9fdGFiXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBmcmFtZUlkID0gcmVxLnNlbmRlcj8uZnJhbWVJZCA/PyAwXG4gICAgY29uc3QgdGFyZ2V0ID1cbiAgICAgIHJlcS5ib2R5Py5hbGxGcmFtZXMgPT09IHRydWVcbiAgICAgICAgPyB7IHRhYklkLCBhbGxGcmFtZXM6IHRydWUgfVxuICAgICAgICA6IHsgdGFiSWQsIGZyYW1lSWRzOiBbZnJhbWVJZF0gfVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0LFxuICAgICAgd29ybGQ6IFwiTUFJTlwiLFxuICAgICAgZnVuYzogaW5qZWN0TWFpblxuICAgIH0pXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgcmVzdWx0OiByZXN1bHRzPy5bMF0/LnJlc3VsdCA/PyBudWxsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltpbmplY3RXb3JrZGF5RmliZXJdXCIsIGVycilcbiAgICByZXMuc2VuZCh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcImluamVjdF9mYWlsZWRcIlxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogUG9ydGVkIE1BSU4td29ybGQgaW5qZWN0IGZyb20gZW5naW5lL2JhY2tncm91bmQvLi4uL2luc3RhbGxNYWluV29ybGRBbGVydFN1cHByZXNzb3IuanNcbiAqL1xuaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmZ1bmN0aW9uIGluamVjdE1haW4oZSkge1xuICBsZXQge1xuICAgIG1hcmtlckF0dHI6IHQsXG4gICAgcGF0dGVybkZsYWdzOiByLFxuICAgIHBhdHRlcm5Tb3VyY2U6IGEsXG4gICAgc3RhdGVLZXk6IG9cbiAgfSA9IGUsIHMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIG4gPSB3aW5kb3dbb107XG4gIGlmIChuICYmIHdpbmRvdy5hbGVydCA9PT0gbi5wYXRjaGVkQWxlcnQpIHJldHVybiBzPy5zZXRBdHRyaWJ1dGUodCwgXCJ0cnVlXCIpLCAhMDtcbiAgbGV0IGwgPSBuPy5vcmlnaW5hbEFsZXJ0IHx8IHdpbmRvdy5hbGVydCxcbiAgICBpID0gbmV3IFJlZ0V4cChhLCByKSxcbiAgICB1ID0gZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKCFpLnRlc3QoU3RyaW5nKGUgPz8gXCJcIikpKSByZXR1cm4gbC5jYWxsKHdpbmRvdywgZSlcbiAgICB9O1xuICByZXR1cm4gd2luZG93W29dID0ge1xuICAgIG9yaWdpbmFsQWxlcnQ6IGwsXG4gICAgcGF0Y2hlZEFsZXJ0OiB1XG4gIH0sIHdpbmRvdy5hbGVydCA9IHUsIHM/LnNldEF0dHJpYnV0ZSh0LCBcInRydWVcIiksIHM/LmdldEF0dHJpYnV0ZSh0KSA9PT0gXCJ0cnVlXCJcbn1cblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFiSWQgPSByZXEuc2VuZGVyPy50YWI/LmlkXG4gICAgaWYgKCF0YWJJZCkge1xuICAgICAgcmVzLnNlbmQoeyBzdWNjZXNzOiBmYWxzZSwgb2s6IGZhbHNlLCBtZXNzYWdlOiBcIm5vX3RhYlwiIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZnJhbWVJZCA9IHJlcS5zZW5kZXI/LmZyYW1lSWQgPz8gMFxuICAgIGNvbnN0IHRhcmdldCA9XG4gICAgICByZXEuYm9keT8uYWxsRnJhbWVzID09PSB0cnVlXG4gICAgICAgID8geyB0YWJJZCwgYWxsRnJhbWVzOiB0cnVlIH1cbiAgICAgICAgOiB7IHRhYklkLCBmcmFtZUlkczogW2ZyYW1lSWRdIH1cbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldCxcbiAgICAgIHdvcmxkOiBcIk1BSU5cIixcbiAgICAgIGZ1bmM6IGluamVjdE1haW4sXG4gICAgICBhcmdzOiBbcmVxLmJvZHldXG4gICAgfSlcbiAgICByZXMuc2VuZCh7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgb2s6IHRydWUsXG4gICAgICByZXN1bHQ6IHJlc3VsdHM/LlswXT8ucmVzdWx0ID8/IG51bGxcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW2luc3RhbGxNYWluV29ybGRBbGVydFN1cHByZXNzb3JdXCIsIGVycilcbiAgICByZXMuc2VuZCh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcImluamVjdF9mYWlsZWRcIlxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogUG9ydGVkIE1BSU4td29ybGQgaW5qZWN0IGZyb20gZW5naW5lL2JhY2tncm91bmQvLi4uL2ludGVyY2VwdEZpbGVJbnB1dENsaWNrLmpzXG4gKi9cbmltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5mdW5jdGlvbiBpbmplY3RNYWluKCkge1xuICBsZXQgZSA9IFwiX19qcl9yZXN1bWVfc291cmNlXCIsXG4gICAgdCA9IEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLmNsaWNrO1xuICBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZS5jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChcImZpbGVcIiA9PT0gdGhpcy50eXBlKSB7XG4gICAgICBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZS5jbGljayA9IHQ7XG4gICAgICBsZXQgciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpO1xuICAgICAgaWYgKHI/LmZpbGVzPy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5maWxlcyA9IHIuZmlsZXMsIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuICAgICAgICAgICAgYnViYmxlczogITAsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiAhMVxuICAgICAgICAgIH0pKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW2pyL2ludGVyY2VwdEZpbGVJbnB1dENsaWNrXSBzZXQgZmlsZXMgZmFpbGVkOlwiLCBlKVxuICAgICAgICB9XG4gICAgICAgIHIucmVtb3ZlKCk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdC5jYWxsKHRoaXMpXG4gIH07XG4gIGxldCByID0gd2luZG93LnNob3dPcGVuRmlsZVBpY2tlcjtcbiAgXCJmdW5jdGlvblwiID09IHR5cGVvZiByICYmICh3aW5kb3cuc2hvd09wZW5GaWxlUGlja2VyID0gYXN5bmMgZnVuY3Rpb24oLi4udCkge1xuICAgIHdpbmRvdy5zaG93T3BlbkZpbGVQaWNrZXIgPSByO1xuICAgIGxldCBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSk7XG4gICAgaWYgKGE/LmZpbGVzPy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgZSA9IGEuZmlsZXNbMF07XG4gICAgICByZXR1cm4gYS5yZW1vdmUoKSwgW3tcbiAgICAgICAgZ2V0RmlsZTogYXN5bmMgKCkgPT4gZSxcbiAgICAgICAga2luZDogXCJmaWxlXCIsXG4gICAgICAgIG5hbWU6IGUubmFtZVxuICAgICAgfV1cbiAgICB9XG4gICAgcmV0dXJuIHIuYXBwbHkod2luZG93LCB0KVxuICB9KSwgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUuY2xpY2sgPSB0LCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHIgJiYgKHdpbmRvdy5zaG93T3BlbkZpbGVQaWNrZXIgPVxuICAgICAgcik7XG4gICAgbGV0IGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKTtcbiAgICBhICYmIGEucmVtb3ZlKClcbiAgfSwgMWU0KVxufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9IHJlcS5zZW5kZXI/LnRhYj8uaWRcbiAgICBpZiAoIXRhYklkKSB7XG4gICAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBvazogZmFsc2UsIG1lc3NhZ2U6IFwibm9fdGFiXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBmcmFtZUlkID0gcmVxLnNlbmRlcj8uZnJhbWVJZCA/PyAwXG4gICAgY29uc3QgdGFyZ2V0ID1cbiAgICAgIHJlcS5ib2R5Py5hbGxGcmFtZXMgPT09IHRydWVcbiAgICAgICAgPyB7IHRhYklkLCBhbGxGcmFtZXM6IHRydWUgfVxuICAgICAgICA6IHsgdGFiSWQsIGZyYW1lSWRzOiBbZnJhbWVJZF0gfVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0LFxuICAgICAgd29ybGQ6IFwiTUFJTlwiLFxuICAgICAgZnVuYzogaW5qZWN0TWFpblxuICAgIH0pXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgcmVzdWx0OiByZXN1bHRzPy5bMF0/LnJlc3VsdCA/PyBudWxsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltpbnRlcmNlcHRGaWxlSW5wdXRDbGlja11cIiwgZXJyKVxuICAgIHJlcy5zZW5kKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiaW5qZWN0X2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCIvLyBAdHMtbm9jaGVja1xuLyoqXG4gKiBQb3J0ZWQgTUFJTi13b3JsZCBpbmplY3QgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC8uLi4va3VsYUNvbXBhbnlEb20uanNcbiAqL1xuaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmZ1bmN0aW9uIGluamVjdE1haW4oZSkge1xuICBsZXQgdDtcbiAgbGV0IHIgPSAoKSA9PiAoe1xuICAgIHN0YXR1czogXCJmYWlsZWRcIixcbiAgICBjYW5kaWRhdGVzOiBbXVxuICB9KTtcbiAgaWYgKFwiY2FyZWVycy5rdWxhLmFpXCIgIT09IGxvY2F0aW9uLmhvc3RuYW1lIHx8ICFlIHx8ICEvXnByb2ZpbGVcXC5leHBlcmllbmNlXFxbXFxkK1xcXVxcLmNvbXBhbnkkL1xuICAgIC50ZXN0KGUuaW5wdXROYW1lKSB8fCBcInN0cmluZ1wiICE9IHR5cGVvZiBlLnF1ZXJ5IHx8IGUucXVlcnkubGVuZ3RoID4gMjU2IHx8ICFbXCJzbmFwc2hvdFwiLFxuICAgICAgXCJjbGlja1wiXG4gICAgXS5pbmNsdWRlcyhlLmFjdGlvbikpIHJldHVybiByKCk7XG4gIGxldCBhID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShlLmlucHV0TmFtZSkpLmZpbHRlcihlID0+IFwiSU5QVVRcIiA9PT0gZS50YWdOYW1lKTtcbiAgaWYgKDEgIT09IGEubGVuZ3RoKSByZXR1cm4gcigpO1xuICBsZXQgbyA9IGFbMF0sXG4gICAgcyA9IG8uY2xvc2VzdCgnW2RhdGEtdGVzdC1pZD1cImNvbXBhbnlcIl0nKTtcbiAgaWYgKCFzIHx8ICFvLmlzQ29ubmVjdGVkKSByZXR1cm4gcigpO1xuICBsZXQgbiA9IHMucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5jaGFrcmEtcG9wb3Zlcl9fY29udGVudFtyb2xlPVwiZGlhbG9nXCJdJyksXG4gICAgbCA9IGUgPT4ge1xuICAgICAgaWYgKCFlPy5pc0Nvbm5lY3RlZCkgcmV0dXJuICExO1xuICAgICAgbGV0IHQgPSBnZXRDb21wdXRlZFN0eWxlKGUpO1xuICAgICAgcmV0dXJuIFwibm9uZVwiICE9PSB0LmRpc3BsYXkgJiYgXCJoaWRkZW5cIiAhPT0gdC52aXNpYmlsaXR5ICYmIE51bWJlcih0Lm9wYWNpdHkgfHwgMSkgPiAuMVxuICAgIH0sXG4gICAgaSA9IGUgPT4ge1xuICAgICAgbGV0IHQgPSBPYmplY3Qua2V5cyhlKS5maW5kKGUgPT4gZS5zdGFydHNXaXRoKFwiX19yZWFjdEZpYmVyJFwiKSB8fCBlLnN0YXJ0c1dpdGgoXG4gICAgICAgICAgXCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSRcIikpLFxuICAgICAgICByID0gdCA/IGVbdF0gOiBudWxsO1xuICAgICAgZm9yIChsZXQgZSBvZiBbciwgcj8uYWx0ZXJuYXRlXSkge1xuICAgICAgICBpZiAoIWUpIGNvbnRpbnVlO1xuICAgICAgICBsZXQgdCA9IGUsXG4gICAgICAgICAgciA9IG5ldyBTZXQ7XG4gICAgICAgIGZvciAobGV0IGUgPSAwOyB0LnJldHVybiAmJiBlIDwgMWUzICYmICFyLmhhcyh0KTsgZSsrKSByLmFkZCh0KSwgdCA9IHQucmV0dXJuO1xuICAgICAgICBpZiAoIXQucmV0dXJuICYmICghdC5zdGF0ZU5vZGU/LmN1cnJlbnQgfHwgdC5zdGF0ZU5vZGUuY3VycmVudCA9PT0gdCkpIHJldHVybiBlXG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0sXG4gICAgdSA9IGUgPT4gZSAmJiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZS5pZCB8fCBcIm51bWJlclwiID09IHR5cGVvZiBlLmlkKSAmJiBTdHJpbmcoZS5pZCkudHJpbSgpICYmXG4gICAgXCJuZXdfY3VzdG9tX3ZhbHVlXCIgIT09IFN0cmluZyhlLmlkKSAmJiBcInN0cmluZ1wiID09IHR5cGVvZiBlLm5hbWUgJiYgZS5uYW1lLnRyaW0oKSA/IHtcbiAgICAgIGlkOiBTdHJpbmcoZS5pZCksXG4gICAgICBuYW1lOiBlLm5hbWUsXG4gICAgICAuLi5cInN0cmluZ1wiID09IHR5cGVvZiBlLmRvbWFpbiAmJiBlLmRvbWFpbi50cmltKCkgPyB7XG4gICAgICAgIGRvbWFpbjogZS5kb21haW4udHJpbSgpXG4gICAgICB9IDoge31cbiAgICB9IDogbnVsbDtcbiAgZm9yIChsZXQgciA9IGkobyksIGEgPSAwOyByICYmIGEgPCAzMDsgciA9IHIucmV0dXJuLCBhKyspXG4gICAgaWYgKHIubWVtb2l6ZWRQcm9wcz8uZmllbGQ/Lm5hbWUgPT09IGUuaW5wdXROYW1lKSB7XG4gICAgICB0ID0gdShyLm1lbW9pemVkUHJvcHMuZmllbGQudmFsdWUpPy5pZDtcbiAgICAgIGJyZWFrXG4gICAgfSBsZXQgYyA9IGwobiksXG4gICAgZCA9IHtcbiAgICAgIGNvbW1pdHRlZElkOiB0LFxuICAgICAgbWVudU9wZW46IGMsXG4gICAgICBpbnB1dFZhbHVlOiBvLnZhbHVlLFxuICAgICAgaW52YWxpZDogXCJ0cnVlXCIgPT09IG8uZ2V0QXR0cmlidXRlKFwiYXJpYS1pbnZhbGlkXCIpIHx8IHMuaGFzQXR0cmlidXRlKFwiZGF0YS1pbnZhbGlkXCIpIHx8ICEhc1xuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5jaGFrcmEtZm9ybV9fZXJyb3ItbWVzc2FnZVwiKVxuICAgIH07XG4gIGlmICghYykgcmV0dXJuIHtcbiAgICBzdGF0dXM6IFwicmVhZHlcIixcbiAgICBjYW5kaWRhdGVzOiBbXSxcbiAgICAuLi5kXG4gIH07XG4gIGlmIChvLnZhbHVlICE9PSBlLnF1ZXJ5KSByZXR1cm4gcigpO1xuICBpZiAobi5xdWVyeVNlbGVjdG9yKCcuY2hha3JhLXNwaW5uZXIsIFtyb2xlPVwicHJvZ3Jlc3NiYXJcIl0nKSkgcmV0dXJuIHtcbiAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgIGNhbmRpZGF0ZXM6IFtdLFxuICAgIC4uLmRcbiAgfTtcbiAgbGV0IHAgPSBbXTtcbiAgZm9yIChsZXQgdCBvZiBBcnJheS5mcm9tKG4uY2hpbGRyZW4pKSB7XG4gICAgaWYgKCEodCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhbCh0KSB8fCBcIkRJVlwiICE9PSB0LnRhZ05hbWUgfHwgIXQucXVlcnlTZWxlY3RvcihcInBcIikgfHxcbiAgICAgIFwidHJ1ZVwiID09PSB0LmdldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIikgfHwgL15BZGQgYW5kIHNlbGVjdFxcYi9pLnRlc3QodC50ZXh0Q29udGVudFxuICAgICAgPy50cmltKCkgfHwgXCJcIikpIGNvbnRpbnVlO1xuICAgIGxldCBhID0gbnVsbDtcbiAgICBmb3IgKGxldCBlID0gaSh0KSwgciA9IDA7IGUgJiYgciA8IDEwICYmIGUuc3RhdGVOb2RlICE9PSBuOyBlID0gZS5yZXR1cm4sIHIrKylcbiAgICAgIGlmIChlLm1lbW9pemVkUHJvcHM/Lm9wdGlvbikge1xuICAgICAgICBhID0gdShlLm1lbW9pemVkUHJvcHMub3B0aW9uKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gaWYgKCFhIHx8IGEubmFtZSAhPT0gdC50ZXh0Q29udGVudD8udHJpbSgpKSByZXR1cm4gcigpO1xuICAgIHAucHVzaCh7XG4gICAgICBlbGVtZW50OiB0LFxuICAgICAgb3B0aW9uOiB7XG4gICAgICAgIGNhbmRpZGF0ZV9rZXk6IGAke2UuaW5wdXROYW1lfToke2EuaWR9YCxcbiAgICAgICAgdmFsdWU6IGEuaWQsXG4gICAgICAgIHRleHQ6IGEubmFtZSxcbiAgICAgICAgLi4uYS5kb21haW4gPyB7XG4gICAgICAgICAgZG9tYWluOiBhLmRvbWFpblxuICAgICAgICB9IDoge31cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGlmIChuZXcgU2V0KHAubWFwKGUgPT4gZS5vcHRpb24uY2FuZGlkYXRlX2tleSkpLnNpemUgIT09IHAubGVuZ3RoKSByZXR1cm4gcigpO1xuICBpZiAoXCJjbGlja1wiID09PSBlLmFjdGlvbikge1xuICAgIGxldCB0ID0gZS5zZWxlY3RlZCxcbiAgICAgIGEgPSBwLmZpbHRlcigoe1xuICAgICAgICAgIG9wdGlvbjogZVxuICAgICAgICB9KSA9PiB0ICYmIGUuY2FuZGlkYXRlX2tleSA9PT0gdC5jYW5kaWRhdGVfa2V5ICYmIGUudmFsdWUgPT09IHQudmFsdWUgJiYgZS50ZXh0ID09PSB0XG4gICAgICAgIC50ZXh0ICYmIGUuZG9tYWluID09PSB0LmRvbWFpbik7XG4gICAgaWYgKDEgIT09IGEubGVuZ3RoKSByZXR1cm4gcigpO1xuICAgIGFbMF0uZWxlbWVudC5jbGljaygpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdGF0dXM6IFwicmVhZHlcIixcbiAgICBjYW5kaWRhdGVzOiBwLm1hcChlID0+IGUub3B0aW9uKSxcbiAgICAuLi5kXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFiSWQgPSByZXEuc2VuZGVyPy50YWI/LmlkXG4gICAgaWYgKCF0YWJJZCkge1xuICAgICAgcmVzLnNlbmQoeyBzdWNjZXNzOiBmYWxzZSwgb2s6IGZhbHNlLCBvcGVuZWQ6IGZhbHNlLCBtZXNzYWdlOiBcIm5vX3RhYlwiIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZnJhbWVJZCA9IHJlcS5zZW5kZXI/LmZyYW1lSWQgPz8gMFxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkLCBmcmFtZUlkczogW2ZyYW1lSWRdIH0sXG4gICAgICB3b3JsZDogXCJNQUlOXCIsXG4gICAgICBmdW5jOiBpbmplY3RNYWluLFxuICAgICAgYXJnczogW3JlcS5ib2R5XVxuICAgIH0pXG4gICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0cz8uWzBdPy5yZXN1bHQgPz8gbnVsbFxuICAgIHJlcy5zZW5kKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBvazogdHJ1ZSxcbiAgICAgIG9wZW5lZDogcmVzdWx0Py5vcGVuZWQgPT09IHRydWUsXG4gICAgICByZXN1bHQsXG4gICAgICAuLi4ocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT09IFwib2JqZWN0XCIgPyByZXN1bHQgOiB7fSlcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW2t1bGFDb21wYW55RG9tXVwiLCBlcnIpXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBvazogZmFsc2UsXG4gICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiaW5qZWN0X2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgbWVyZ2VQcm9maWxlQW5zd2VycyB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcblxuY29uc3QgTk9JU0VfUkUgPVxuICAvcXl2YXJleHxmaWxsZWRcXHMqXFxkKlxccyppdGVtcz98dGV4dCBmaWVsZHM/IG9rfG5vIHJlc3VtZSBmaWxlIGlucHV0fGZpbGxcXHMqYWdhaW58ZGlzbWlzc3xidXR0b24gY2xpY2tzIHN5bmN8bGVhcm5pbmcgYW5zd2VycyBmb3IgbmV4dHxzYXZlZCB0byBodWIvaVxuXG4vKipcbiAqIE1lcmdlIGxlYXJuZWQgc2NyZWVuaW5nIGFuc3dlcnMgaW50byB0aGUgc2VsZWN0ZWQgaHViIHByb2ZpbGUuXG4gKiBCb2R5OiB7XG4gKiAgIGFuc3dlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gKiAgIHByb2ZpbGVJZD86IHN0cmluZyxcbiAqICAgc2NvcGVLZXk/OiBzdHJpbmcsXG4gKiAgIGhvc3RuYW1lPzogc3RyaW5nLFxuICogICBzdGVwS2V5Pzogc3RyaW5nXG4gKiB9XG4gKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFuc3dlcnMgPVxuICAgICAgcmVxLmJvZHk/LmFuc3dlcnMgJiYgdHlwZW9mIHJlcS5ib2R5LmFuc3dlcnMgPT09IFwib2JqZWN0XCJcbiAgICAgICAgPyAocmVxLmJvZHkuYW5zd2VycyBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KVxuICAgICAgICA6IG51bGxcbiAgICBpZiAoIWFuc3dlcnMgfHwgIU9iamVjdC5rZXlzKGFuc3dlcnMpLmxlbmd0aCkge1xuICAgICAgcmVzLnNlbmQoeyBvazogZmFsc2UsIG1lc3NhZ2U6IFwiYW5zd2Vyc19yZXF1aXJlZFwiIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhbnN3ZXJzKSkge1xuICAgICAgY29uc3QgcXVlc3Rpb24gPSBTdHJpbmcoayB8fCBcIlwiKS50cmltKClcbiAgICAgIGNvbnN0IGFuc3dlciA9IFN0cmluZyh2ID8/IFwiXCIpLnRyaW0oKVxuICAgICAgaWYgKCFxdWVzdGlvbiB8fCAhYW5zd2VyKSBjb250aW51ZVxuICAgICAgaWYgKHF1ZXN0aW9uLmxlbmd0aCA+IDUwMCB8fCBhbnN3ZXIubGVuZ3RoID4gMjAwMCkgY29udGludWVcbiAgICAgIGlmIChOT0lTRV9SRS50ZXN0KHF1ZXN0aW9uKSB8fCBOT0lTRV9SRS50ZXN0KGFuc3dlcikpIGNvbnRpbnVlXG4gICAgICBjb25zdCBjb21wYWN0ID0gKHF1ZXN0aW9uICsgYW5zd2VyKS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgIGlmICgvZmlsbGFnYWlufGRpc21pc3N8cXl2YXJleGF1dG9maWxsfF55ZXNubyQvLnRlc3QoY29tcGFjdCkpIGNvbnRpbnVlXG4gICAgICBjbGVhbmVkW3F1ZXN0aW9uXSA9IGFuc3dlclxuICAgIH1cbiAgICBpZiAoIU9iamVjdC5rZXlzKGNsZWFuZWQpLmxlbmd0aCkge1xuICAgICAgcmVzLnNlbmQoeyBvazogZmFsc2UsIG1lc3NhZ2U6IFwiYW5zd2Vyc19lbXB0eVwiIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwcm9maWxlSWQgPVxuICAgICAgdHlwZW9mIHJlcS5ib2R5Py5wcm9maWxlSWQgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5wcm9maWxlSWQgOiBudWxsXG4gICAgY29uc3Qgc2NvcGVLZXkgPVxuICAgICAgdHlwZW9mIHJlcS5ib2R5Py5zY29wZUtleSA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnNjb3BlS2V5LnRyaW0oKSA6IFwiXCJcbiAgICBjb25zdCBob3N0bmFtZSA9XG4gICAgICB0eXBlb2YgcmVxLmJvZHk/Lmhvc3RuYW1lID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkuaG9zdG5hbWUudHJpbSgpIDogXCJcIlxuICAgIGNvbnN0IHN0ZXBLZXkgPVxuICAgICAgdHlwZW9mIHJlcS5ib2R5Py5zdGVwS2V5ID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkuc3RlcEtleS50cmltKCkgOiBcIlwiXG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZXJnZVByb2ZpbGVBbnN3ZXJzKFxuICAgICAgY2xlYW5lZCxcbiAgICAgIHByb2ZpbGVJZCxcbiAgICAgIHNjb3BlS2V5XG4gICAgICAgID8geyBzY29wZUtleSwgaG9zdG5hbWU6IGhvc3RuYW1lIHx8IG51bGwsIHN0ZXBLZXk6IHN0ZXBLZXkgfHwgbnVsbCB9XG4gICAgICAgIDogbnVsbFxuICAgIClcbiAgICBpZiAoIXJlc3VsdC5vaykge1xuICAgICAgcmVzLnNlbmQoeyBvazogZmFsc2UsIG1lc3NhZ2U6IHJlc3VsdC5lcnJvciB8fCBcInNhdmVfZmFpbGVkXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXMuc2VuZCh7XG4gICAgICBvazogdHJ1ZSxcbiAgICAgIGFuc3dlcnM6IHJlc3VsdC5hbnN3ZXJzLFxuICAgICAgZXh0cmFzOiByZXN1bHQuZXh0cmFzLFxuICAgICAgbGVhcm5lZDogY2xlYW5lZCxcbiAgICAgIHNjb3BlS2V5OiBzY29wZUtleSB8fCBudWxsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwic2F2ZV9mYWlsZWRcIlxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7IGxvZ0FwcGxpY2F0aW9uIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxuXG4vKipcbiAqIEFwcGVuZCBhIHJvdyB0byB0aGUgY29uZmlndXJlZCBHb29nbGUgU2hlZXQgdmlhIHRoZSB0ZWFtIGh1Yi5cbiAqIEJvZHkgbWlycm9ycyBQT1NUIC9hcGkvdjEvYXBwbGljYXRpb25zL2xvZ1xuICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0aXRsZSA9IFN0cmluZyhyZXEuYm9keT8udGl0bGUgfHwgXCJcIikudHJpbSgpXG4gICAgY29uc3QgbGluayA9IFN0cmluZyhyZXEuYm9keT8ubGluayB8fCBcIlwiKS50cmltKClcbiAgICBpZiAoIXRpdGxlIHx8ICFsaW5rKSB7XG4gICAgICByZXMuc2VuZCh7IG9rOiBmYWxzZSwgbWVzc2FnZTogXCJ0aXRsZV9hbmRfbGlua19yZXF1aXJlZFwiIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2dBcHBsaWNhdGlvbih7XG4gICAgICBwcm9maWxlSWQ6XG4gICAgICAgIHR5cGVvZiByZXEuYm9keT8ucHJvZmlsZUlkID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkucHJvZmlsZUlkIDogbnVsbCxcbiAgICAgIGNvdW50cnk6IHR5cGVvZiByZXEuYm9keT8uY291bnRyeSA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LmNvdW50cnkgOiBcIlwiLFxuICAgICAgcmVzdW1lOiB0eXBlb2YgcmVxLmJvZHk/LnJlc3VtZSA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnJlc3VtZSA6IFwiXCIsXG4gICAgICB0aXRsZSxcbiAgICAgIGxpbmssXG4gICAgICBjb21wYW55OiB0eXBlb2YgcmVxLmJvZHk/LmNvbXBhbnkgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5jb21wYW55IDogXCJcIixcbiAgICAgIGNvc3Q6IHR5cGVvZiByZXEuYm9keT8uY29zdCA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LmNvc3QgOiBcIlwiLFxuICAgICAgc3RhdHVzOiB0eXBlb2YgcmVxLmJvZHk/LnN0YXR1cyA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnN0YXR1cyA6IFwiYXBwbGllZFwiLFxuICAgICAgb3RoZXI6IHR5cGVvZiByZXEuYm9keT8ub3RoZXIgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5vdGhlciA6IFwiXCIsXG4gICAgICB0YWJOYW1lOiB0eXBlb2YgcmVxLmJvZHk/LnRhYk5hbWUgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS50YWJOYW1lIDogXCJcIlxuICAgIH0pXG5cbiAgICBpZiAoIXJlc3VsdC5vaykge1xuICAgICAgcmVzLnNlbmQoe1xuICAgICAgICBvazogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlIHx8IHJlc3VsdC5lcnJvciB8fCBcImxvZ19mYWlsZWRcIixcbiAgICAgICAgdGFiTmFtZTogcmVzdWx0LnRhYk5hbWVcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcmVzLnNlbmQoeyBvazogdHJ1ZSwgdGFiTmFtZTogcmVzdWx0LnRhYk5hbWUgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwibG9nX2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgeyBzb2Z0T2sgfSBmcm9tIFwifmJhY2tncm91bmQvbGliL3NvZnQtc3R1YlwiXG5cbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcIm1hcmtSZWZyZXNoUmVxdWVzdGVkXCIpXG4iLCJpbXBvcnQgeyBzb2Z0T2sgfSBmcm9tIFwifmJhY2tncm91bmQvbGliL3NvZnQtc3R1YlwiXG5cbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcIm1hcmtXaGF0c05ld1JlYWRcIilcbiIsImltcG9ydCB7IHNvZnRPayB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdE9rKFwib3BlbkFnZW50QXBwbHlUYWJcIilcbiIsIi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIFBvcnRlZCBNQUlOLXdvcmxkIGluamVjdCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kLy4uLi9vcGVuQnJhc3NyaW5nRnVsbFBhZ2VBdXRvY29tcGxldGUuanNcbiAqL1xuaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmZ1bmN0aW9uIGluamVjdE1haW4oZSkge1xuICBsZXQgdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpO1xuICBpZiAoIXQpIHJldHVybiB7XG4gICAgb3BlbmVkOiAhMVxuICB9O1xuICBsZXQgciA9IHQuY2xvc2VzdChcIi5maWVsZGNvbnRhaW5cIiksXG4gICAgYSA9IHI/LnF1ZXJ5U2VsZWN0b3IoXCIudWktaWNvbi10cmlhbmdsZS0xLXMsIFtuZy1jbGljayo9J2JsYW5rZXRTZWFyY2gnXVwiKTtcbiAgaWYgKCFhKSByZXR1cm4ge1xuICAgIG9wZW5lZDogITFcbiAgfTtcbiAgbGV0IG8gPSB3aW5kb3csXG4gICAgcyA9IG8ucGFnZVNpemUsXG4gICAgbiA9ICgpID0+IHtcbiAgICAgIHZvaWQgMCA9PT0gcyA/IGRlbGV0ZSBvLnBhZ2VTaXplIDogby5wYWdlU2l6ZSA9IHNcbiAgICB9LFxuICAgIGwgPSAoKSA9PiB7XG4gICAgICBvLnBhZ2VTaXplID0gMWUzO1xuICAgICAgbGV0IGUgPSBvLmpRdWVyeSB8fCBvLiQsXG4gICAgICAgIHIgPSBlPy4odCkuZGF0YT8uKFwidWlBdXRvY29tcGxldGVcIik7XG4gICAgICByID8gci5wYWdlSW5kZXggPSAwIDogdC5wYWdlSW5kZXggPSAwXG4gICAgfSxcbiAgICBpID0gITE7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHQuZm9jdXMoKSwgYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbCwge1xuICAgICAgY2FwdHVyZTogITAsXG4gICAgICBvbmNlOiAhMFxuICAgIH0pLCBsKCksIGEuY2xpY2soKSwgaSA9ICEwLCB7XG4gICAgICBvcGVuZWQ6ICEwXG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbmVkOiAhMVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpID8gby5zZXRUaW1lb3V0KG4sIDNlMykgOiBuKClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9IHJlcS5zZW5kZXI/LnRhYj8uaWRcbiAgICBpZiAoIXRhYklkKSB7XG4gICAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBvazogZmFsc2UsIG9wZW5lZDogZmFsc2UsIG1lc3NhZ2U6IFwibm9fdGFiXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBmcmFtZUlkID0gcmVxLnNlbmRlcj8uZnJhbWVJZCA/PyAwXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQ6IHsgdGFiSWQsIGZyYW1lSWRzOiBbZnJhbWVJZF0gfSxcbiAgICAgIHdvcmxkOiBcIk1BSU5cIixcbiAgICAgIGZ1bmM6IGluamVjdE1haW4sXG4gICAgICBhcmdzOiBbcmVxLmJvZHk/LmlucHV0SWRdXG4gICAgfSlcbiAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzPy5bMF0/LnJlc3VsdCA/PyBudWxsXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgb3BlbmVkOiByZXN1bHQ/Lm9wZW5lZCA9PT0gdHJ1ZSxcbiAgICAgIHJlc3VsdCxcbiAgICAgIC4uLihyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdCA9PT0gXCJvYmplY3RcIiA/IHJlc3VsdCA6IHt9KVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbb3BlbkJyYXNzcmluZ0Z1bGxQYWdlQXV0b2NvbXBsZXRlXVwiLCBlcnIpXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBvazogZmFsc2UsXG4gICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiaW5qZWN0X2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgeyBzb2Z0T2sgfSBmcm9tIFwifmJhY2tncm91bmQvbGliL3NvZnQtc3R1YlwiXG5cbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcIm9wZW5EYXlmb3JjZVBvbGljeVRhYlwiKVxuIiwiaW1wb3J0IHsgc29mdE9rIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0T2soXCJwYXJzZVBhZ2VNYXJrZG93blwiKVxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBIZWFsdGggY2hlY2sgZm9yIHRlYW0gdG9vbGluZyAvIENJLiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IHRydWUsXG4gICAgbmFtZTogXCJqb2JyaWdodC1mb3JrLWV4dGVuc2lvblwiLFxuICAgIHZlcnNpb246IGNocm9tZS5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvblxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgeyBzb2Z0T2sgfSBmcm9tIFwifmJhY2tncm91bmQvbGliL3NvZnQtc3R1YlwiXG5cbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcInBvc3RBcHBseUpvYlwiKVxuIiwiaW1wb3J0IHsgc29mdE9rIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0T2soXCJwb3N0QXV0b2ZpbGxBbnN3ZXJQYWlyQXR0cmlidXRlZFwiKVxuIiwiaW1wb3J0IHsgc29mdE9rIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0T2soXCJwb3N0QXV0b2ZpbGxGZWVkYmFja1wiKVxuIiwiaW1wb3J0IHsgc29mdE9rIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0T2soXCJwb3N0RXZlbnRTdWJtaXRcIilcbiIsImltcG9ydCB7IHNvZnRPayB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdE9rKFwicG9zdEV4dGVybmFsSm9iSW1wb3J0XCIpXG4iLCJpbXBvcnQgeyBzb2Z0T2sgfSBmcm9tIFwifmJhY2tncm91bmQvbGliL3NvZnQtc3R1YlwiXG5cbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcInBvc3RQbHVnaW5GZWVkYmFja1wiKVxuIiwiaW1wb3J0IHsgc29mdE9rIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0T2soXCJwb3N0U2ltaWxhckpvYlBvcHVwRXhwb3N1cmVcIilcbiIsImltcG9ydCB7IHNvZnRPayB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdE9rKFwicHJlcGFyZU1ldGFDYXJlZXJzTG9jYXRpb25DYXB0dXJlXCIpXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgc2V0T3JhY2xlQ2FwdHVyZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvb3JhY2xlLWxvdi1jYXB0dXJlXCJcblxuY29uc3QgSU5TVEFMTF9JTlRFUkNFUFRPUiA9IGZ1bmN0aW9uIGluc3RhbGxPcmFjbGVMb3ZJbnRlcmNlcHRvcihjYXB0dXJlSWQ6IHN0cmluZykge1xuICBjb25zdCB3ID0gd2luZG93IGFzIHVua25vd24gYXMge1xuICAgIF9fanJPcmFjbGVMb3Y/OiB7XG4gICAgICBjYXB0dXJlSWQ6IHN0cmluZ1xuICAgICAgaXRlbXM6IHVua25vd25bXVxuICAgICAgbGFzdFVybDogc3RyaW5nXG4gICAgfVxuICAgIGZldGNoOiB0eXBlb2YgZmV0Y2hcbiAgfVxuICB3Ll9fanJPcmFjbGVMb3YgPSB7IGNhcHR1cmVJZCwgaXRlbXM6IFtdLCBsYXN0VXJsOiBcIlwiIH1cbiAgY29uc3Qgb3JpZyA9IHcuZmV0Y2guYmluZCh3aW5kb3cpXG4gIHcuZmV0Y2ggPSBhc3luYyAoaW5wdXQ6IFJlcXVlc3RJbmZvIHwgVVJMLCBpbml0PzogUmVxdWVzdEluaXQpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcmlnKGlucHV0LCBpbml0KVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPVxuICAgICAgICB0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICA/IGlucHV0XG4gICAgICAgICAgOiBpbnB1dCBpbnN0YW5jZW9mIFVSTFxuICAgICAgICAgICAgPyBpbnB1dC5ocmVmXG4gICAgICAgICAgICA6IGlucHV0LnVybFxuICAgICAgaWYgKC9sb3Z8bG9va3VwfGNvbnRlbnRpdGVtfGZsZXhmaWVsZHxlZHVjYXRpb258c2Nob29sL2kudGVzdCh1cmwpKSB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gcmVzLmNsb25lKClcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IGNsb25lLmpzb24oKS5jYXRjaCgoKSA9PiBudWxsKVxuICAgICAgICBjb25zdCBpdGVtcyA9XG4gICAgICAgICAgKGpzb24gJiZcbiAgICAgICAgICAgIChqc29uLml0ZW1zIHx8XG4gICAgICAgICAgICAgIGpzb24uQ29udGVudEl0ZW1zIHx8XG4gICAgICAgICAgICAgIGpzb24uZGF0YSB8fFxuICAgICAgICAgICAgICAoQXJyYXkuaXNBcnJheShqc29uKSA/IGpzb24gOiBudWxsKSkpIHx8XG4gICAgICAgICAgW11cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHcuX19qck9yYWNsZUxvdiEuaXRlbXMgPSBpdGVtc1xuICAgICAgICAgIHcuX19qck9yYWNsZUxvdiEubGFzdFVybCA9IHVybFxuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiX19qcl9vcmFjbGVfbG92X2NhcHR1cmVkXCIsIHtcbiAgICAgICAgICAgICAgZGV0YWlsOiB7IGNhcHR1cmVJZCwgY291bnQ6IGl0ZW1zLmxlbmd0aCwgdXJsIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBpZ25vcmUgKi9cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG4gIHJldHVybiB7IG9rOiB0cnVlLCBjYXB0dXJlSWQgfVxufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmaWVsZCA9IFN0cmluZyhyZXEuYm9keT8uZmllbGQgfHwgcmVxLmJvZHk/LmxhYmVsIHx8IFwiZWR1Y2F0aW9uXCIpXG4gICAgY29uc3Qgc2VhcmNoID0gU3RyaW5nKHJlcS5ib2R5Py5zZWFyY2ggfHwgcmVxLmJvZHk/LnF1ZXJ5IHx8IFwiXCIpXG4gICAgY29uc3QgY2FwdHVyZUlkID1cbiAgICAgIHR5cGVvZiByZXEuYm9keT8uY2FwdHVyZUlkID09PSBcInN0cmluZ1wiXG4gICAgICAgID8gcmVxLmJvZHkuY2FwdHVyZUlkXG4gICAgICAgIDogYG9yYWNsZS0ke0RhdGUubm93KCl9LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgOCl9YFxuXG4gICAgc2V0T3JhY2xlQ2FwdHVyZShjYXB0dXJlSWQsIHsgZmllbGQsIHNlYXJjaCwgaXRlbXM6IFtdIH0pXG5cbiAgICBjb25zdCB0YWJJZCA9XG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LnRhYklkID09PSBcIm51bWJlclwiXG4gICAgICAgID8gcmVxLmJvZHkudGFiSWRcbiAgICAgICAgOiAoXG4gICAgICAgICAgICBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KVxuICAgICAgICAgIClbMF0/LmlkXG5cbiAgICBpZiAodGFiSWQpIHtcbiAgICAgIGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICB3b3JsZDogXCJNQUlOXCIsXG4gICAgICAgIGZ1bmM6IElOU1RBTExfSU5URVJDRVBUT1IsXG4gICAgICAgIGFyZ3M6IFtjYXB0dXJlSWRdXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgY2FwdHVyZUlkLFxuICAgICAgZmllbGQsXG4gICAgICBzZWFyY2hcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc2VuZCh7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJwcmVwYXJlX2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgeyBzb2Z0T2sgfSBmcm9tIFwifmJhY2tncm91bmQvbGliL3NvZnQtc3R1YlwiXG5cbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcInByZXBhcmVQaGVub21TY2hvb2xDYXB0dXJlXCIpXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgcmVzb2x2ZVJlc3VtZUJsb2JSZXNwb25zZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvcmVzdW1lLWJsb2JcIlxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcmVzdW1lSWQgPVxuICAgIHR5cGVvZiByZXEuYm9keT8ucmVzdW1lSWQgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5yZXN1bWVJZCA6IG51bGxcbiAgcmVzLnNlbmQoYXdhaXQgcmVzb2x2ZVJlc3VtZUJsb2JSZXNwb25zZSh7IHJlc3VtZUlkIH0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgcmVzb2x2ZVJlc3VtZUJsb2JSZXNwb25zZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvcmVzdW1lLWJsb2JcIlxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcmVzdW1lSWQgPVxuICAgIHR5cGVvZiByZXEuYm9keT8ucmVzdW1lSWQgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5yZXN1bWVJZCA6IG51bGxcbiAgcmVzLnNlbmQoYXdhaXQgcmVzb2x2ZVJlc3VtZUJsb2JSZXNwb25zZSh7IHJlc3VtZUlkIH0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgcmVnZW5lcmF0ZUFuc3dlciBhcyBodWJSZWdlbmVyYXRlIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxuXG4vKipcbiAqIEpvYnJpZ2h0IHNoYXBlOiB7IGRhdGE6IHsgYW5zd2VyLCB1bmlxdWVJZCB9IHwgeyBIVFRQX1NUQVRVUyB9IH1cbiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcXVlc3Rpb24gPVxuICAgICAgdHlwZW9mIHJlcS5ib2R5Py5xdWVzdGlvbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IHJlcS5ib2R5LnF1ZXN0aW9uXG4gICAgICAgIDogdHlwZW9mIHJlcS5ib2R5Py5sYWJlbCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgID8gcmVxLmJvZHkubGFiZWxcbiAgICAgICAgICA6IHR5cGVvZiByZXEuYm9keT8uZmllbGRMYWJlbCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyByZXEuYm9keS5maWVsZExhYmVsXG4gICAgICAgICAgICA6IFwiXCJcblxuICAgIGlmICghcXVlc3Rpb24pIHtcbiAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgZGF0YTogeyBIVFRQX1NUQVRVUzogNDAwIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBodWJSZWdlbmVyYXRlKHtcbiAgICAgIHF1ZXN0aW9uLFxuICAgICAgcHJvbXB0TGlzdDogQXJyYXkuaXNBcnJheShyZXEuYm9keT8ucHJvbXB0TGlzdClcbiAgICAgICAgPyByZXEuYm9keS5wcm9tcHRMaXN0LmZpbHRlcigocDogdW5rbm93bikgPT4gdHlwZW9mIHAgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIDogW10sXG4gICAgICBmaWVsZElucHV0OlxuICAgICAgICB0eXBlb2YgcmVxLmJvZHk/LmZpZWxkSW5wdXQgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5maWVsZElucHV0IDogbnVsbCxcbiAgICAgIHVuaXF1ZUlkOlxuICAgICAgICB0eXBlb2YgcmVxLmJvZHk/LnVuaXF1ZUlkID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkudW5pcXVlSWQgOiBudWxsLFxuICAgICAgam9iSWQ6IHR5cGVvZiByZXEuYm9keT8uam9iSWQgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5qb2JJZCA6IG51bGwsXG4gICAgICBwcm9maWxlSWQ6XG4gICAgICAgIHR5cGVvZiByZXEuYm9keT8ucHJvZmlsZUlkID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkucHJvZmlsZUlkIDogbnVsbCxcbiAgICAgIGpvYkNvbnRleHQ6XG4gICAgICAgIHJlcS5ib2R5Py5qb2JDb250ZXh0ICYmIHR5cGVvZiByZXEuYm9keS5qb2JDb250ZXh0ID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgPyByZXEuYm9keS5qb2JDb250ZXh0XG4gICAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9KVxuXG4gICAgaWYgKCFyZXN1bHQub2sgfHwgIXJlc3VsdC5hbnN3ZXIpIHtcbiAgICAgIGNvbnN0IHN0YXR1cyA9XG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPT09IDQwMSB8fCByZXN1bHQuc3RhdHVzID09PSA0MDNcbiAgICAgICAgICA/IDQwM1xuICAgICAgICAgIDogcmVzdWx0LnN0YXR1cyA9PT0gNTAzXG4gICAgICAgICAgICA/IDUwM1xuICAgICAgICAgICAgOiA1MDBcbiAgICAgIHJlcy5zZW5kKHsgZGF0YTogeyBIVFRQX1NUQVRVUzogc3RhdHVzIH0gfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJlcy5zZW5kKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYW5zd2VyOiByZXN1bHQuYW5zd2VyLFxuICAgICAgICB1bmlxdWVJZDogcmVzdWx0LnVuaXF1ZUlkID8/IG51bGxcbiAgICAgIH1cbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3JlZ2VuZXJhdGVBbnN3ZXJdXCIsIGVycilcbiAgICByZXMuc2VuZCh7IGRhdGE6IHsgSFRUUF9TVEFUVVM6IDUwMCB9IH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBSZWxvYWQgdGhlIGV4dGVuc2lvbiAoYWZ0ZXIgdXBkYXRlIGFwcGx5KS4gKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICByZXMuc2VuZCh7IG9rOiB0cnVlIH0pXG4gICAgLy8gRGVmZXIgc28gdGhlIHJlc3BvbnNlIGNhbiBmbHVzaFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUucmVsb2FkKClcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvKiBpZ25vcmUgKi9cbiAgICAgIH1cbiAgICB9LCA1MClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwicmVsb2FkX2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgeyBzb2Z0T2sgfSBmcm9tIFwifmJhY2tncm91bmQvbGliL3NvZnQtc3R1YlwiXG5cbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcInJlcG9ydEF1dG9maWxsRmlyc3RVc2VBdHRyaWJ1dGlvblwiKVxuIiwiaW1wb3J0IHsgc29mdE9rIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0T2soXCJyZXF1ZXN0RXh0ZW5zaW9uVXBkYXRlQ2hlY2tcIilcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5pbXBvcnQgeyByZXNvbHZlQWRkcmVzc1N1Z2dlc3Rpb24gYXMgaHViUmVzb2x2ZSB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcblxuLyoqIFJldHVybnMgcmVzb2x2ZWQgYWRkcmVzcyBvYmplY3Qgb3IgbnVsbCAoSm9icmlnaHQgc2hhcGUpLiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGxhY2VJZCA9XG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LnBsYWNlSWQgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5wbGFjZUlkLnRyaW0oKSA6IFwiXCJcbiAgICBpZiAoIXBsYWNlSWQpIHtcbiAgICAgIHJlcy5zZW5kKG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaHViUmVzb2x2ZSh7XG4gICAgICBwbGFjZUlkLFxuICAgICAgc2Vzc2lvblRva2VuOlxuICAgICAgICB0eXBlb2YgcmVxLmJvZHk/LnNlc3Npb25Ub2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgID8gcmVxLmJvZHkuc2Vzc2lvblRva2VuXG4gICAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9KVxuICAgIHJlcy5zZW5kKHJlc3VsdClcbiAgfSBjYXRjaCB7XG4gICAgcmVzLnNlbmQobnVsbClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgZmV0Y2hBdXRvZmlsbEluZm8gfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXG5pbXBvcnQge1xuICByZXNvbHZlT3BlcmF0aW9uTG9jYWxseSxcbiAgdHlwZSBPcGVyYXRpb25QYXlsb2FkXG59IGZyb20gXCJ+bGliL3Jlc29sdmUtb3BlcmF0aW9uXCJcbmltcG9ydCB7IHBsYW5PcmFjbGVFZHVjYXRpb25DbGllbnRTZWFyY2hTdGVwIH0gZnJvbSBcIn5saWIvb3JhY2xlLWVkdWNhdGlvbi1wbGFuXCJcblxuLyoqXG4gKiBNdWx0aS10dXJuIGNsaWVudC1zZWFyY2ggc3RlcCAoT3JhY2xlIGVkdSBMT1YsIGV0Yy4pLlxuICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHkgPz8ge31cbiAgICBjb25zdCBodWIgPSBhd2FpdCBmZXRjaEF1dG9maWxsSW5mbyhcbiAgICAgIHR5cGVvZiBib2R5LnByb2ZpbGVJZCA9PT0gXCJzdHJpbmdcIiA/IGJvZHkucHJvZmlsZUlkIDogbnVsbFxuICAgIClcbiAgICBpZiAoIWh1Yikge1xuICAgICAgcmVzLnNlbmQoe1xuICAgICAgICBvazogZmFsc2UsXG4gICAgICAgIHJlc3VsdHM6IFtdLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgbWVzc2FnZTogXCJub19wcm9maWxlXCJcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3VuZCA9IHR5cGVvZiBib2R5LnJvdW5kID09PSBcIm51bWJlclwiID8gYm9keS5yb3VuZCA6IDBcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gQXJyYXkuaXNBcnJheShib2R5LmNhbmRpZGF0ZXMpID8gYm9keS5jYW5kaWRhdGVzIDogW11cbiAgICBjb25zdCBzZWFyY2hUZXh0ID1cbiAgICAgIHR5cGVvZiBib2R5LnF1ZXJ5ID09PSBcInN0cmluZ1wiXG4gICAgICAgID8gYm9keS5xdWVyeVxuICAgICAgICA6IHR5cGVvZiBib2R5LnNlYXJjaFRleHQgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICA/IGJvZHkuc2VhcmNoVGV4dFxuICAgICAgICAgIDogXCJcIlxuXG4gICAgLy8gT3JhY2xlLXN0eWxlIHBsYW5uZXIgd2hlbiBjYW5kaWRhdGVzIC8gcm91bmQgcHJvdmlkZWRcbiAgICBpZiAoYm9keS5tb2RlID09PSBcIm9yYWNsZS1lZHVjYXRpb25cIiB8fCBjYW5kaWRhdGVzLmxlbmd0aCB8fCBib2R5LnJvdW5kICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlc2lyZWQgPVxuICAgICAgICB0eXBlb2YgYm9keS5kZXNpcmVkID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgPyBib2R5LmRlc2lyZWRcbiAgICAgICAgICA6IHNlYXJjaFRleHRcbiAgICAgIGNvbnN0IHBsYW4gPSBwbGFuT3JhY2xlRWR1Y2F0aW9uQ2xpZW50U2VhcmNoU3RlcCh7XG4gICAgICAgIHJvdW5kLFxuICAgICAgICBzZWFyY2hUZXh0LFxuICAgICAgICBjYW5kaWRhdGVzOiBjYW5kaWRhdGVzLm1hcCgoYzogeyB0ZXh0Pzogc3RyaW5nOyB2YWx1ZT86IHN0cmluZzsgY2FuZGlkYXRlX2tleT86IHN0cmluZyB9KSA9PiAoe1xuICAgICAgICAgIGNhbmRpZGF0ZV9rZXk6IFN0cmluZyhjLmNhbmRpZGF0ZV9rZXkgfHwgYy52YWx1ZSB8fCBjLnRleHQgfHwgXCJcIiksXG4gICAgICAgICAgdmFsdWU6IFN0cmluZyhjLnZhbHVlIHx8IGMuY2FuZGlkYXRlX2tleSB8fCBjLnRleHQgfHwgXCJcIiksXG4gICAgICAgICAgdGV4dDogU3RyaW5nKGMudGV4dCB8fCBjLnZhbHVlIHx8IFwiXCIpXG4gICAgICAgIH0pKSxcbiAgICAgICAgZGVzaXJlZFxuICAgICAgfSlcbiAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgb2s6IHRydWUsXG4gICAgICAgIGFjdGlvbjogcGxhbi5hY3Rpb24sXG4gICAgICAgIHJlc3VsdHM6IHBsYW4uc2VsZWN0ZWRfdmFsdWVzIHx8IFtdLFxuICAgICAgICBvcHRpb25zOiBwbGFuLnNlbGVjdGVkX3ZhbHVlcyB8fCBbXSxcbiAgICAgICAgc2VhcmNoVGV4dDogcGxhbi5zZWFyY2hUZXh0LFxuICAgICAgICByZXN1bHQ6IHBsYW5cbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvcGVyYXRpb246IE9wZXJhdGlvblBheWxvYWQgPSB7XG4gICAgICBsYWJlbDogYm9keS5sYWJlbCB8fCBib2R5LmZpZWxkIHx8IGJvZHkuc3RlcCB8fCBcIlwiLFxuICAgICAgcXVlcnk6IHNlYXJjaFRleHQsXG4gICAgICBvcHRpb25zOiBib2R5Lm9wdGlvbnMgfHwgYm9keS5yZXN1bHRzIHx8IFtdLFxuICAgICAgc2VhcmNoX3JlcXVlc3Rfc2NoZW1hOiBib2R5LnNlYXJjaF9yZXF1ZXN0X3NjaGVtYVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc29sdmVPcGVyYXRpb25Mb2NhbGx5KFxuICAgICAgaHViLFxuICAgICAgb3BlcmF0aW9uLFxuICAgICAgdHlwZW9mIGJvZHkuc291cmNlID09PSBcInN0cmluZ1wiID8gYm9keS5zb3VyY2UgOiBcImdlbmVyaWNcIlxuICAgIClcblxuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgcmVzdWx0czogcmVzdWx0LnNlbGVjdGVkX3ZhbHVlcyxcbiAgICAgIG9wdGlvbnM6IHJlc3VsdC5zZWxlY3RlZF92YWx1ZXMsXG4gICAgICByZXN1bHRcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc2VuZCh7XG4gICAgICBvazogZmFsc2UsXG4gICAgICByZXN1bHRzOiBbXSxcbiAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwicmVzb2x2ZV9mYWlsZWRcIlxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiLyoqXG4gKiBMb2NhbCArIG5ldHdvcmsgTE9WIHJlc29sdmUgKEpvYnJpZ2h0IGF1dG9maWxsLW9wZXJhdGlvbiBzdGFuZC1pbikuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBBdXRvZmlsbEluZm9QYXlsb2FkIH0gZnJvbSBcIn5hcGkvdGVhbS10eXBlc1wiXG5pbXBvcnQgeyBsb29rdXBBbnN3ZXIgfSBmcm9tIFwifmxpYi9odWItdG8tam9icmlnaHRcIlxuXG5mdW5jdGlvbiBub3JtKHM6IHN0cmluZykge1xuICByZXR1cm4gKHMgfHwgXCJcIilcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9bXmEtejAtOV0rL2csIFwiIFwiKVxuICAgIC50cmltKClcbn1cblxuZnVuY3Rpb24gc2NvcmVPcHRpb24oY2FuZGlkYXRlOiBzdHJpbmcsIG9wdGlvbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgYyA9IG5vcm0oY2FuZGlkYXRlKVxuICBjb25zdCBvID0gbm9ybShvcHRpb24pXG4gIGlmICghYyB8fCAhbykgcmV0dXJuIDBcbiAgaWYgKC9ecGxlYXNlIHNlbGVjdHxec2VsZWN0IHxeY2hvb3NlIHxec2VsZWN0IG9uZXxeLS0kLy50ZXN0KG8pKSByZXR1cm4gMFxuICBpZiAoYyA9PT0gbykgcmV0dXJuIDEwMFxuICBpZiAoby5pbmNsdWRlcyhjKSB8fCBjLmluY2x1ZGVzKG8pKSByZXR1cm4gODBcbiAgY29uc3QgY3QgPSBuZXcgU2V0KGMuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKSlcbiAgY29uc3Qgb3QgPSBvLnNwbGl0KFwiIFwiKS5maWx0ZXIoQm9vbGVhbilcbiAgbGV0IGhpdCA9IDBcbiAgZm9yIChjb25zdCB0IG9mIG90KSBpZiAoY3QuaGFzKHQpKSBoaXQgKz0gMVxuICBpZiAoIW90Lmxlbmd0aCkgcmV0dXJuIDBcbiAgcmV0dXJuIE1hdGgucm91bmQoKGhpdCAvIG90Lmxlbmd0aCkgKiA2MClcbn1cblxuZnVuY3Rpb24gYWRhcHRUb09wdGlvbnModmFsdWU6IHN0cmluZywgb3B0aW9uczogc3RyaW5nW10pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCF2YWx1ZS50cmltKCkgfHwgIW9wdGlvbnMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBsZXQgYmVzdDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgbGV0IGJlc3RTY29yZSA9IDBcbiAgZm9yIChjb25zdCBvcHQgb2Ygb3B0aW9ucykge1xuICAgIGNvbnN0IHMgPSBzY29yZU9wdGlvbih2YWx1ZSwgb3B0KVxuICAgIGlmIChzID4gYmVzdFNjb3JlKSB7XG4gICAgICBiZXN0U2NvcmUgPSBzXG4gICAgICBiZXN0ID0gb3B0XG4gICAgfVxuICB9XG4gIHJldHVybiBiZXN0U2NvcmUgPj0gNDAgPyBiZXN0IDogbnVsbFxufVxuXG5leHBvcnQgdHlwZSBPcGVyYXRpb25QYXlsb2FkID0ge1xuICBsYWJlbD86IHN0cmluZ1xuICBxdWVzdGlvbj86IHN0cmluZ1xuICBmaWVsZD86IHN0cmluZ1xuICBxdWVyeT86IHN0cmluZ1xuICBzZWFyY2hUZXh0Pzogc3RyaW5nXG4gIG9wdGlvbnM/OiB1bmtub3duXG4gIGNhbmRpZGF0ZXM/OiB1bmtub3duXG4gIHZhbHVlcz86IHVua25vd25cbiAgc2VhcmNoX3JlcXVlc3Rfc2NoZW1hPzogU2VhcmNoUmVxdWVzdFNjaGVtYVxuICBba2V5OiBzdHJpbmddOiB1bmtub3duXG59XG5cbmV4cG9ydCB0eXBlIFNlYXJjaFJlcXVlc3RTY2hlbWEgPSB7XG4gIG1ldGhvZD86IHN0cmluZ1xuICB1cmw6IHN0cmluZ1xuICBoZWFkZXJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICBib2R5PzogdW5rbm93blxuICByZXN1bHRQYXRoPzogc3RyaW5nXG4gIGxhYmVsS2V5Pzogc3RyaW5nXG4gIHZhbHVlS2V5Pzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFJlc29sdmVSZXN1bHQgPSB7XG4gIGFjdGlvbjogXCJTRUxFQ1RcIiB8IFwiU0VMRUNUX09QVElPTlNcIiB8IFwiUkVUUllBQkxFX0ZBSUxVUkVcIiB8IFwiTk9fTUFUQ0hcIlxuICBzZWxlY3RlZF92YWx1ZXM6IHN0cmluZ1tdXG4gIHNvdXJjZTogc3RyaW5nXG4gIG9wdGlvbnM/OiBzdHJpbmdbXVxufVxuXG5mdW5jdGlvbiBhc1N0cmluZ0xpc3QocmF3OiB1bmtub3duKTogc3RyaW5nW10ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocmF3KSkgcmV0dXJuIFtdXG4gIHJldHVybiByYXdcbiAgICAubWFwKChvKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBvXG4gICAgICBpZiAobyAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBjb25zdCByZWMgPSBvIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBbXCJsYWJlbFwiLCBcInRleHRcIiwgXCJuYW1lXCIsIFwidmFsdWVcIiwgXCJkaXNwbGF5TmFtZVwiLCBcImRlc2NyaXB0b3JcIl0pIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlY1trXSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlY1trXSBhcyBzdHJpbmdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFwiXCJcbiAgICB9KVxuICAgIC5tYXAoKHMpID0+IHMudHJpbSgpKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbn1cblxuZnVuY3Rpb24gZGlnKG9iajogdW5rbm93biwgcGF0aDogc3RyaW5nKTogdW5rbm93biB7XG4gIGlmICghcGF0aCkgcmV0dXJuIG9ialxuICBsZXQgY3VyOiB1bmtub3duID0gb2JqXG4gIGZvciAoY29uc3QgcGFydCBvZiBwYXRoLnNwbGl0KFwiLlwiKS5maWx0ZXIoQm9vbGVhbikpIHtcbiAgICBpZiAoY3VyID09IG51bGwgfHwgdHlwZW9mIGN1ciAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHVuZGVmaW5lZFxuICAgIGN1ciA9IChjdXIgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW3BhcnRdXG4gIH1cbiAgcmV0dXJuIGN1clxufVxuXG5mdW5jdGlvbiBleHRyYWN0TGFiZWxzRnJvbVBheWxvYWQoXG4gIHBheWxvYWQ6IHVua25vd24sXG4gIHNjaGVtYTogU2VhcmNoUmVxdWVzdFNjaGVtYVxuKTogc3RyaW5nW10ge1xuICBjb25zdCByb290ID0gZGlnKHBheWxvYWQsIHNjaGVtYS5yZXN1bHRQYXRoIHx8IFwiXCIpXG4gIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KHJvb3QpXG4gICAgPyByb290XG4gICAgOiBBcnJheS5pc0FycmF5KChyb290IGFzIHsgcmVzdWx0cz86IHVua25vd24gfSk/LnJlc3VsdHMpXG4gICAgICA/ICgocm9vdCBhcyB7IHJlc3VsdHM6IHVua25vd25bXSB9KS5yZXN1bHRzKVxuICAgICAgOiBBcnJheS5pc0FycmF5KHBheWxvYWQpXG4gICAgICAgID8gcGF5bG9hZFxuICAgICAgICA6IFtdXG5cbiAgY29uc3QgbGFiZWxLZXkgPSBzY2hlbWEubGFiZWxLZXkgfHwgXCJsYWJlbFwiXG4gIGNvbnN0IHZhbHVlS2V5ID0gc2NoZW1hLnZhbHVlS2V5IHx8IFwidmFsdWVcIlxuICBjb25zdCBvdXQ6IHN0cmluZ1tdID0gW11cbiAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG91dC5wdXNoKGl0ZW0pXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29uc3QgcmVjID0gaXRlbSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgY29uc3QgbGFiZWwgPVxuICAgICAgICAodHlwZW9mIHJlY1tsYWJlbEtleV0gPT09IFwic3RyaW5nXCIgJiYgcmVjW2xhYmVsS2V5XSkgfHxcbiAgICAgICAgKHR5cGVvZiByZWNbdmFsdWVLZXldID09PSBcInN0cmluZ1wiICYmIHJlY1t2YWx1ZUtleV0pIHx8XG4gICAgICAgICh0eXBlb2YgcmVjLmRlc2NyaXB0b3IgPT09IFwic3RyaW5nXCIgJiYgcmVjLmRlc2NyaXB0b3IpIHx8XG4gICAgICAgICh0eXBlb2YgcmVjLnRleHQgPT09IFwic3RyaW5nXCIgJiYgcmVjLnRleHQpIHx8XG4gICAgICAgICh0eXBlb2YgcmVjLm5hbWUgPT09IFwic3RyaW5nXCIgJiYgcmVjLm5hbWUpXG4gICAgICBpZiAodHlwZW9mIGxhYmVsID09PSBcInN0cmluZ1wiICYmIGxhYmVsLnRyaW0oKSkgb3V0LnB1c2gobGFiZWwudHJpbSgpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFNlYXJjaFNjaGVtYU9wdGlvbnMoXG4gIHNjaGVtYTogU2VhcmNoUmVxdWVzdFNjaGVtYVxuKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBjb25zdCBtZXRob2QgPSAoc2NoZW1hLm1ldGhvZCB8fCBcIkdFVFwiKS50b1VwcGVyQ2FzZSgpXG4gIGNvbnN0IGluaXQ6IFJlcXVlc3RJbml0ID0ge1xuICAgIG1ldGhvZCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgLi4uKHNjaGVtYS5oZWFkZXJzIHx8IHt9KVxuICAgIH0sXG4gICAgY3JlZGVudGlhbHM6IFwib21pdFwiXG4gIH1cbiAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBzY2hlbWEuYm9keSAhPSBudWxsKSB7XG4gICAgaW5pdC5ib2R5ID1cbiAgICAgIHR5cGVvZiBzY2hlbWEuYm9keSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IHNjaGVtYS5ib2R5XG4gICAgICAgIDogSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmJvZHkpXG4gICAgaWYgKCFzY2hlbWEuaGVhZGVycz8uW1wiY29udGVudC10eXBlXCJdICYmICFzY2hlbWEuaGVhZGVycz8uW1wiQ29udGVudC1UeXBlXCJdKSB7XG4gICAgICA7KGluaXQuaGVhZGVycyBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KVtcImNvbnRlbnQtdHlwZVwiXSA9XG4gICAgICAgIFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goc2NoZW1hLnVybCwgaW5pdClcbiAgaWYgKCFyZXMub2spIHJldHVybiBbXVxuICBjb25zdCBjb250ZW50VHlwZSA9IHJlcy5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSB8fCBcIlwiXG4gIGlmIChjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBleHRyYWN0TGFiZWxzRnJvbVBheWxvYWQoanNvbiwgc2NoZW1hKVxuICB9XG4gIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpXG4gIHRyeSB7XG4gICAgcmV0dXJuIGV4dHJhY3RMYWJlbHNGcm9tUGF5bG9hZChKU09OLnBhcnNlKHRleHQpLCBzY2hlbWEpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlc2lyZWRGcm9tSHViKFxuICBodWI6IEF1dG9maWxsSW5mb1BheWxvYWQsXG4gIG9wZXJhdGlvbjogT3BlcmF0aW9uUGF5bG9hZFxuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGxhYmVsID1cbiAgICAodHlwZW9mIG9wZXJhdGlvbi5sYWJlbCA9PT0gXCJzdHJpbmdcIiAmJiBvcGVyYXRpb24ubGFiZWwpIHx8XG4gICAgKHR5cGVvZiBvcGVyYXRpb24ucXVlc3Rpb24gPT09IFwic3RyaW5nXCIgJiYgb3BlcmF0aW9uLnF1ZXN0aW9uKSB8fFxuICAgICh0eXBlb2Ygb3BlcmF0aW9uLmZpZWxkID09PSBcInN0cmluZ1wiICYmIG9wZXJhdGlvbi5maWVsZCkgfHxcbiAgICBcIlwiXG5cbiAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAuLi5hc1N0cmluZ0xpc3Qob3BlcmF0aW9uLm9wdGlvbnMpLFxuICAgIC4uLmFzU3RyaW5nTGlzdChvcGVyYXRpb24uY2FuZGlkYXRlcyksXG4gICAgLi4uYXNTdHJpbmdMaXN0KG9wZXJhdGlvbi52YWx1ZXMpXG4gIF1cblxuICBjb25zdCBxdWVyeSA9XG4gICAgKHR5cGVvZiBvcGVyYXRpb24ucXVlcnkgPT09IFwic3RyaW5nXCIgJiYgb3BlcmF0aW9uLnF1ZXJ5KSB8fFxuICAgICh0eXBlb2Ygb3BlcmF0aW9uLnNlYXJjaFRleHQgPT09IFwic3RyaW5nXCIgJiYgb3BlcmF0aW9uLnNlYXJjaFRleHQpIHx8XG4gICAgXCJcIlxuXG4gIGxldCBkZXNpcmVkID1cbiAgICAobGFiZWwgJiYgbG9va3VwQW5zd2VyKGh1YiwgbGFiZWwsIG9wdGlvbnMpKSB8fFxuICAgIChxdWVyeSAmJiBsb29rdXBBbnN3ZXIoaHViLCBxdWVyeSwgb3B0aW9ucykpIHx8XG4gICAgcXVlcnkgfHxcbiAgICBudWxsXG5cbiAgaWYgKCFkZXNpcmVkICYmIC9jb3VudHJ5L2kudGVzdChsYWJlbCkpIGRlc2lyZWQgPSBodWIuaWRlbnRpdHkuYWRkcmVzcy5jb3VudHJ5XG4gIGlmICghZGVzaXJlZCAmJiAvXihjaXR5fGxvY2F0aW9uKSQvaS50ZXN0KG5vcm0obGFiZWwpKSkge1xuICAgIGRlc2lyZWQgPSBodWIuaWRlbnRpdHkuYWRkcmVzcy5jaXR5XG4gIH1cbiAgaWYgKCFkZXNpcmVkICYmIC9zdGF0ZXxwcm92aW5jZS9pLnRlc3QobGFiZWwpKSB7XG4gICAgZGVzaXJlZCA9IGh1Yi5pZGVudGl0eS5hZGRyZXNzLnN0YXRlXG4gIH1cbiAgaWYgKCFkZXNpcmVkICYmIC9zY2hvb2x8dW5pdmVyc2l0eXxjb2xsZWdlL2kudGVzdChsYWJlbCkpIHtcbiAgICBjb25zdCBlZHUgPSBodWIuZXh0cmFzPy5lZHVjYXRpb25cbiAgICBpZiAoQXJyYXkuaXNBcnJheShlZHUpICYmIGVkdVswXSAmJiB0eXBlb2YgZWR1WzBdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb25zdCByb3cgPSBlZHVbMF0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgIGRlc2lyZWQgPVxuICAgICAgICAodHlwZW9mIHJvdy5zY2hvb2xOYW1lID09PSBcInN0cmluZ1wiICYmIHJvdy5zY2hvb2xOYW1lKSB8fFxuICAgICAgICAodHlwZW9mIHJvdy5zY2hvb2wgPT09IFwic3RyaW5nXCIgJiYgcm93LnNjaG9vbCkgfHxcbiAgICAgICAgbnVsbFxuICAgIH1cbiAgfVxuICBpZiAoIWRlc2lyZWQgJiYgL2RlZ3JlZS9pLnRlc3QobGFiZWwpKSB7XG4gICAgY29uc3QgZWR1ID0gaHViLmV4dHJhcz8uZWR1Y2F0aW9uXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZWR1KSAmJiBlZHVbMF0gJiYgdHlwZW9mIGVkdVswXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29uc3Qgcm93ID0gZWR1WzBdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICBkZXNpcmVkID1cbiAgICAgICAgKHR5cGVvZiByb3cuYWNjcmVkaXRhdGlvbiA9PT0gXCJzdHJpbmdcIiAmJiByb3cuYWNjcmVkaXRhdGlvbikgfHxcbiAgICAgICAgKHR5cGVvZiByb3cuZGVncmVlID09PSBcInN0cmluZ1wiICYmIHJvdy5kZWdyZWUpIHx8XG4gICAgICAgIG51bGxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVzaXJlZFxufVxuXG4vKipcbiAqIFJlc29sdmUgYW4gQVRTIExPViAvIHR5cGVhaGVhZCAvIHNlbGVjdCBvcGVyYXRpb24gYWdhaW5zdCBodWIgKyBvcHRpb25hbCBuZXR3b3JrIHNjaGVtYS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVPcGVyYXRpb25Mb2NhbGx5KFxuICBodWI6IEF1dG9maWxsSW5mb1BheWxvYWQsXG4gIG9wZXJhdGlvbjogT3BlcmF0aW9uUGF5bG9hZCxcbiAgc291cmNlID0gXCJnZW5lcmljXCJcbik6IFByb21pc2U8UmVzb2x2ZVJlc3VsdD4ge1xuICBjb25zdCBkZXNpcmVkID0gZGVzaXJlZEZyb21IdWIoaHViLCBvcGVyYXRpb24pXG5cbiAgbGV0IG9wdGlvbnMgPSBbXG4gICAgLi4uYXNTdHJpbmdMaXN0KG9wZXJhdGlvbi5vcHRpb25zKSxcbiAgICAuLi5hc1N0cmluZ0xpc3Qob3BlcmF0aW9uLmNhbmRpZGF0ZXMpLFxuICAgIC4uLmFzU3RyaW5nTGlzdChvcGVyYXRpb24udmFsdWVzKVxuICBdXG5cbiAgaWYgKG9wZXJhdGlvbi5zZWFyY2hfcmVxdWVzdF9zY2hlbWE/LnVybCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZW1vdGUgPSBhd2FpdCBmZXRjaFNlYXJjaFNjaGVtYU9wdGlvbnMob3BlcmF0aW9uLnNlYXJjaF9yZXF1ZXN0X3NjaGVtYSlcbiAgICAgIGlmIChyZW1vdGUubGVuZ3RoKSBvcHRpb25zID0gWy4uLnJlbW90ZSwgLi4ub3B0aW9uc11cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIltyZXNvbHZlLW9wZXJhdGlvbl0gc2VhcmNoIHNjaGVtYSBmZXRjaCBmYWlsZWRcIiwgZXJyKVxuICAgIH1cbiAgfVxuXG4gIGlmICghZGVzaXJlZD8udHJpbSgpKSB7XG4gICAgcmV0dXJuIHsgYWN0aW9uOiBcIk5PX01BVENIXCIsIHNlbGVjdGVkX3ZhbHVlczogW10sIHNvdXJjZSwgb3B0aW9ucyB9XG4gIH1cblxuICBpZiAoIW9wdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvbjogXCJTRUxFQ1RfT1BUSU9OU1wiLFxuICAgICAgc2VsZWN0ZWRfdmFsdWVzOiBbZGVzaXJlZC50cmltKCldLFxuICAgICAgc291cmNlXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWF0Y2hlZCA9IGFkYXB0VG9PcHRpb25zKGRlc2lyZWQsIG9wdGlvbnMpXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiB7IGFjdGlvbjogXCJOT19NQVRDSFwiLCBzZWxlY3RlZF92YWx1ZXM6IFtdLCBzb3VyY2UsIG9wdGlvbnMgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb246IFwiU0VMRUNUX09QVElPTlNcIixcbiAgICBzZWxlY3RlZF92YWx1ZXM6IFttYXRjaGVkXSxcbiAgICBzb3VyY2UsXG4gICAgb3B0aW9uc1xuICB9XG59XG4iLCJleHBvcnQgdHlwZSBPcmFjbGVMb3ZDYW5kaWRhdGUgPSB7XG4gIGNhbmRpZGF0ZV9rZXk6IHN0cmluZ1xuICB2YWx1ZTogc3RyaW5nXG4gIHRleHQ6IHN0cmluZ1xufVxuXG4vKipcbiAqIE11bHRpLXN0ZXAgY2xpZW50LXNlYXJjaCBwbGFubmVyIGZvciBPcmFjbGUgZWR1Y2F0aW9uIExPVi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBsYW5PcmFjbGVFZHVjYXRpb25DbGllbnRTZWFyY2hTdGVwKG9wdHM6IHtcbiAgcm91bmQ6IG51bWJlclxuICBtYXhSb3VuZHM/OiBudW1iZXJcbiAgc2VhcmNoVGV4dDogc3RyaW5nXG4gIGNhbmRpZGF0ZXM6IE9yYWNsZUxvdkNhbmRpZGF0ZVtdXG4gIGRlc2lyZWQ6IHN0cmluZ1xufSk6IHtcbiAgYWN0aW9uOiBcIlJFUVVFU1RfU0VBUkNIXCIgfCBcIlNFTEVDVF9PUFRJT05TXCIgfCBcIk5PX01BVENIXCJcbiAgc2VhcmNoVGV4dD86IHN0cmluZ1xuICBzZWxlY3RlZF92YWx1ZXM/OiBzdHJpbmdbXVxufSB7XG4gIGNvbnN0IG1heCA9IG9wdHMubWF4Um91bmRzID8/IDVcbiAgaWYgKG9wdHMucm91bmQgPj0gbWF4KSByZXR1cm4geyBhY3Rpb246IFwiTk9fTUFUQ0hcIiB9XG5cbiAgaWYgKCFvcHRzLmNhbmRpZGF0ZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvbjogXCJSRVFVRVNUX1NFQVJDSFwiLFxuICAgICAgc2VhcmNoVGV4dDogb3B0cy5zZWFyY2hUZXh0XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgd2FudCA9IG9wdHMuZGVzaXJlZC50b0xvd2VyQ2FzZSgpXG4gIGNvbnN0IGhpdCA9IG9wdHMuY2FuZGlkYXRlcy5maW5kKFxuICAgIChjKSA9PlxuICAgICAgYy50ZXh0LnRvTG93ZXJDYXNlKCkgPT09IHdhbnQgfHxcbiAgICAgIGMudGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHdhbnQpIHx8XG4gICAgICB3YW50LmluY2x1ZGVzKGMudGV4dC50b0xvd2VyQ2FzZSgpKVxuICApXG4gIGlmIChoaXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uOiBcIlNFTEVDVF9PUFRJT05TXCIsXG4gICAgICBzZWxlY3RlZF92YWx1ZXM6IFtoaXQudGV4dF1cbiAgICB9XG4gIH1cblxuICBjb25zdCB0b2tlbiA9IG9wdHMuc2VhcmNoVGV4dC5zcGxpdCgvXFxzKy8pWzBdIHx8IG9wdHMuc2VhcmNoVGV4dFxuICBpZiAob3B0cy5yb3VuZCA8IG1heCAtIDEgJiYgdG9rZW4gIT09IG9wdHMuc2VhcmNoVGV4dCkge1xuICAgIHJldHVybiB7IGFjdGlvbjogXCJSRVFVRVNUX1NFQVJDSFwiLCBzZWFyY2hUZXh0OiB0b2tlbiB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFjdGlvbjogXCJTRUxFQ1RfT1BUSU9OU1wiLFxuICAgIHNlbGVjdGVkX3ZhbHVlczogW29wdHMuY2FuZGlkYXRlc1swXS50ZXh0XVxuICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgZmV0Y2hBdXRvZmlsbEluZm8gfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXG5pbXBvcnQgeyByZXNvbHZlT3BlcmF0aW9uTG9jYWxseSB9IGZyb20gXCJ+bGliL3Jlc29sdmUtb3BlcmF0aW9uXCJcblxuY29uc3QgQUxMT1dFRF9TT1VSQ0VTID0gbmV3IFNldChbXG4gIFwiYXNoYnlcIixcbiAgXCJlaWdodGZvbGRcIixcbiAgXCJncmVlbmhvdXNlXCIsXG4gIFwibWV0YWNhcmVlcnNcIixcbiAgXCJteXdvcmtkYXlcIixcbiAgXCJvcmFjbGVjbG91ZFwiLFxuICBcInBpbnBvaW50aHFcIixcbiAgXCJwaGVub21cIixcbiAgXCJyaXBwbGluZ1wiLFxuICBcInNtYXJ0cmVjcnVpdGVyc1wiLFxuICBcInpvaG9yZWNydWl0XCIsXG4gIFwicGVyc29uaW9cIixcbiAgXCJsZXZlclwiLFxuICBcImdlbmVyaWNcIixcbiAgXCJhdXRvRmlsbFwiLFxuICBcImNsZWFuVHNcIlxuXSlcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3BlcmF0aW9uID0gcmVxLmJvZHk/Lm9wZXJhdGlvblxuICAgIGNvbnN0IHNvdXJjZSA9XG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LnNvdXJjZSA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnNvdXJjZSA6IFwiZ2VuZXJpY1wiXG5cbiAgICBpZiAoIW9wZXJhdGlvbiB8fCB0eXBlb2Ygb3BlcmF0aW9uICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXMuc2VuZCh7XG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICByZXN1bHQ6IHsgYWN0aW9uOiBcIlJFVFJZQUJMRV9GQUlMVVJFXCIsIHNlbGVjdGVkX3ZhbHVlczogW10gfSxcbiAgICAgICAgbWVzc2FnZTogXCJtaXNzaW5nX29wZXJhdGlvblwiXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UubGVuZ3RoID4gNjQpIHtcbiAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgb2s6IGZhbHNlLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIHJlc3VsdDogeyBhY3Rpb246IFwiUkVUUllBQkxFX0ZBSUxVUkVcIiwgc2VsZWN0ZWRfdmFsdWVzOiBbXSB9LFxuICAgICAgICBtZXNzYWdlOiBcImludmFsaWRfc291cmNlXCJcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2b2lkIEFMTE9XRURfU09VUkNFU1xuXG4gICAgY29uc3QgaHViID0gYXdhaXQgZmV0Y2hBdXRvZmlsbEluZm8oKVxuICAgIGlmICghaHViKSB7XG4gICAgICByZXMuc2VuZCh7XG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICByZXN1bHQ6IHsgYWN0aW9uOiBcIlJFVFJZQUJMRV9GQUlMVVJFXCIsIHNlbGVjdGVkX3ZhbHVlczogW10gfSxcbiAgICAgICAgbWVzc2FnZTogXCJub19wcm9maWxlXCJcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNvbHZlT3BlcmF0aW9uTG9jYWxseShodWIsIG9wZXJhdGlvbiwgc291cmNlKVxuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgb3BlcmF0aW9uLFxuICAgICAgcmVzdWx0XG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgcmVzdWx0OiB7IGFjdGlvbjogXCJSRVRSWUFCTEVfRkFJTFVSRVwiLCBzZWxlY3RlZF92YWx1ZXM6IFtdIH0sXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJyZXNvbHZlX2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgeyBzb2Z0T2sgfSBmcm9tIFwifmJhY2tncm91bmQvbGliL3NvZnQtc3R1YlwiXG5cbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcInJlc29sdmVDYXB0dXJlZE1ldGFDYXJlZXJzTG9jYXRpb25cIilcbiIsImltcG9ydCB7IHNvZnRPayB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdE9rKFwicmVzb2x2ZUNhcHR1cmVkUGhlbm9tU2Nob29sXCIpXG4iLCJpbXBvcnQgeyBzb2Z0T2sgfSBmcm9tIFwifmJhY2tncm91bmQvbGliL3NvZnQtc3R1YlwiXG5cbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcInJlc29sdmVKb2JJZEJ5VXJsXCIpXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgbWVyZ2VQcm9maWxlQW5zd2VycyB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcblxuLyoqXG4gKiBQZXJzaXN0IGF1dG9maWxsIGluZm8gcGF0Y2hlcyBmcm9tIHRoZSBoZWxwZXIgVUkgdG8gdGhlIHRlYW0gaHViLlxuICogSm9icmlnaHQgY2FsbGVkIHByb2ZpbGUuc2F2ZUF1dG9maWxsSW5mbzsgd2UgbWVyZ2UgYW5zd2VycyAvIGV4dHJhcy5cbiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IHJlcS5ib2R5IHx8IHt9XG4gICAgY29uc3QgYW5zd2VycyA9XG4gICAgICBib2R5LmFuc3dlcnMgJiYgdHlwZW9mIGJvZHkuYW5zd2VycyA9PT0gXCJvYmplY3RcIlxuICAgICAgICA/IChib2R5LmFuc3dlcnMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPilcbiAgICAgICAgOiBib2R5LmF1dG9maWxsSW5mbz8uYW5zd2VycyAmJlxuICAgICAgICAgICAgdHlwZW9mIGJvZHkuYXV0b2ZpbGxJbmZvLmFuc3dlcnMgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICA/IChib2R5LmF1dG9maWxsSW5mby5hbnN3ZXJzIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pXG4gICAgICAgICAgOiBudWxsXG5cbiAgICBpZiAoIWFuc3dlcnMgfHwgIU9iamVjdC5rZXlzKGFuc3dlcnMpLmxlbmd0aCkge1xuICAgICAgLy8gTm90aGluZyB0byBtZXJnZSDigJQgdHJlYXQgYXMgc3VjY2VzcyBzbyBVSSBkb2VzIG5vdCBibG9ja1xuICAgICAgcmVzLnNlbmQoeyBvazogdHJ1ZSwgc3R1YjogZmFsc2UsIHNraXBwZWQ6IHRydWUgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHByb2ZpbGVJZCA9XG4gICAgICB0eXBlb2YgYm9keS5wcm9maWxlSWQgPT09IFwic3RyaW5nXCIgPyBib2R5LnByb2ZpbGVJZCA6IG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZXJnZVByb2ZpbGVBbnN3ZXJzKGFuc3dlcnMsIHByb2ZpbGVJZClcbiAgICBpZiAoIXJlc3VsdC5vaykge1xuICAgICAgcmVzLnNlbmQoeyBvazogZmFsc2UsIG1lc3NhZ2U6IHJlc3VsdC5lcnJvciB8fCBcInNhdmVfZmFpbGVkXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXMuc2VuZCh7IG9rOiB0cnVlLCBhbnN3ZXJzOiByZXN1bHQuYW5zd2VycywgZXh0cmFzOiByZXN1bHQuZXh0cmFzIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcInNhdmVfZmFpbGVkXCJcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB7IHNvZnRPayB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdE9rKFwic2F2ZUV4dGVybmFsSm9iSWRcIilcbiIsImltcG9ydCB7IHNvZnRPayB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcblxuZXhwb3J0IGRlZmF1bHQgc29mdE9rKFwic2F2ZUpvYkRldGFpbFwiKVxuIiwiaW1wb3J0IHsgc29mdE9rIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0T2soXCJzYXZlU3VibWl0U3RhdHVzXCIpXG4iLCIvLyBAdHMtbm9jaGVja1xuLyoqXG4gKiBQb3J0ZWQgTUFJTi13b3JsZCBpbmplY3QgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC8uLi4vc2VhcmNoSWNpbXNQcm9maWxlT3B0aW9ucy5qc1xuICovXG5pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuYXN5bmMgZnVuY3Rpb24gaW5qZWN0TWFpbihlKSB7XG4gIGxldCB0ID0gZSA9PiAoe1xuICAgICAgc3RhdHVzOiBcImZhaWx1cmVcIixcbiAgICAgIHJlYXNvbjogZVxuICAgIH0pLFxuICAgIHIgPSBlID0+IFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgPyBlLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKSA6IFwiXCIsXG4gICAgYSA9IHIoZT8uc2VsZWN0SWQpLFxuICAgIG8gPSByKGU/LnNlYXJjaElucHV0KTtcbiAgaWYgKCFhIHx8IGEubGVuZ3RoID4gMjU2IHx8ICFvIHx8IG8ubGVuZ3RoID4gMjU2KSByZXR1cm4gdChcImludmFsaWQtcmVxdWVzdFwiKTtcbiAgbGV0IHMgPSBnbG9iYWxUaGlzLmxvY2F0aW9uLFxuICAgIG4gPSBzPy5ob3N0bmFtZT8udG9Mb3dlckNhc2UoKSA/PyBcIlwiO1xuICBpZiAocz8ucHJvdG9jb2wgIT09IFwiaHR0cHM6XCIgfHwgXCJpY2ltcy5jb21cIiAhPT0gbiAmJiAhbi5lbmRzV2l0aChcIi5pY2ltcy5jb21cIikpIHJldHVybiB0KFxuICAgIFwiaW52YWxpZC1jb250ZXh0XCIpO1xuICBsZXQgbCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ/LmdldEVsZW1lbnRCeUlkKGEpLFxuICAgIGkgPSBhLmVuZHNXaXRoKFwiQ2FuZFByb2ZpbGVGaWVsZHMuU2Nob29sXCIpID8gXCJDYW5kUHJvZmlsZUZpZWxkcy5TY2hvb2xcIiA6IGEuZW5kc1dpdGgoXG4gICAgICBcIkNhbmRQcm9maWxlRmllbGRzLk1ham9yXCIpID8gXCJDYW5kUHJvZmlsZUZpZWxkcy5NYWpvclwiIDogXCJcIixcbiAgICB1ID0gcihsPy5nZXRBdHRyaWJ1dGUoXCJoYXNoXCIpKTtcbiAgaWYgKCFsIHx8ICFsLmlzQ29ubmVjdGVkIHx8ICFpIHx8ICF1IHx8IHUubGVuZ3RoID4gMjU2IHx8IFwiMVwiICE9PSBsLmdldEF0dHJpYnV0ZShcbiAgICAgIFwiaWNpbXNkcm9wZG93bi1lbmFibGVkXCIpIHx8IFwiMVwiICE9PSBsLmdldEF0dHJpYnV0ZShcImljaW1zZHJvcGRvd24tc2VhcmNoXCIpIHx8IFwiMVwiICE9PSBsXG4gICAgLmdldEF0dHJpYnV0ZShcImljaW1zZHJvcGRvd24tYWpheFwiKSkgcmV0dXJuIHQoXCJpbnZhbGlkLWNvbnRyb2xcIik7XG4gIGxldCBjID0gbmV3IFVSTChcIi9qb2JzL3Byb2ZpbGVvcHRpb25zXCIsIHMub3JpZ2luKTtcbiAgZm9yIChsZXQgW2UsIHRdIG9mIFtcbiAgICAgIFtcImluX2lmcmFtZVwiLCBcIjFcIl0sXG4gICAgICBbXCJxXCIsIG9dLFxuICAgICAgW1wicGFnZVwiLCBcIjBcIl0sXG4gICAgICBbXCJzaXplXCIsIFwiMjVcIl0sXG4gICAgICBbXCJwYXJlbnRWYWx1ZVwiLCBcIlwiXSxcbiAgICAgIFtcImlkXCIsIGldLFxuICAgICAgW1wiaGFzaFwiLCB1XVxuICAgIF0pIGMuc2VhcmNoUGFyYW1zLmFwcGVuZChlLCB0KTtcbiAgbGV0IGQgPSBuZXcgQWJvcnRDb250cm9sbGVyLFxuICAgIHAgPSBzZXRUaW1lb3V0KCgpID0+IGQuYWJvcnQoKSwgM2UzKTtcbiAgdHJ5IHtcbiAgICBsZXQgZTtcbiAgICBsZXQgYSA9IGF3YWl0IGZldGNoKGMudG9TdHJpbmcoKSwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICAgIHJlZGlyZWN0OiBcImVycm9yXCIsXG4gICAgICAgIGNhY2hlOiBcIm5vLXN0b3JlXCIsXG4gICAgICAgIHNpZ25hbDogZC5zaWduYWxcbiAgICAgIH0pLFxuICAgICAgbyA9IG5ldyBVUkwoYS51cmwpO1xuICAgIGlmICghYS5vayB8fCAyMDAgIT09IGEuc3RhdHVzIHx8IGEucmVkaXJlY3RlZCB8fCBvLm9yaWdpbiAhPT0gcy5vcmlnaW4gfHxcbiAgICAgIFwiL2pvYnMvcHJvZmlsZW9wdGlvbnNcIiAhPT0gby5wYXRobmFtZSkgcmV0dXJuIHQoXCJyZXF1ZXN0LWZhaWxlZFwiKTtcbiAgICB0cnkge1xuICAgICAgZSA9IGF3YWl0IGEuanNvbigpXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gdChcImludmFsaWQtcmVzcG9uc2VcIilcbiAgICB9XG4gICAgaWYgKCFlIHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIGUgfHwgQXJyYXkuaXNBcnJheShlKSkgcmV0dXJuIHQoXCJpbnZhbGlkLXJlc3BvbnNlXCIpO1xuICAgIGxldCBuID0gZS50b3RhbCxcbiAgICAgIGwgPSBlLm9wdGlvbnM7XG4gICAgaWYgKFwibnVtYmVyXCIgIT0gdHlwZW9mIG4gfHwgIU51bWJlci5pc0Zpbml0ZShuKSB8fCAhTnVtYmVyLmlzSW50ZWdlcihuKSB8fCBuIDwgMCB8fCAhQXJyYXlcbiAgICAgIC5pc0FycmF5KGwpIHx8IGwubGVuZ3RoID4gMjUgfHwgMCA9PT0gbiAmJiBsLmxlbmd0aCA+IDAgfHwgbiA+IDAgJiYgMCA9PT0gbC5sZW5ndGgpXG4gICAgcmV0dXJuIHQoXCJpbnZhbGlkLXJlc3BvbnNlXCIpO1xuICAgIGxldCBpID0gW10sXG4gICAgICB1ID0gbmV3IFNldDtcbiAgICBmb3IgKGxldCBlIG9mIGwpIHtcbiAgICAgIGlmICghZSB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiBlIHx8IEFycmF5LmlzQXJyYXkoZSkpIHJldHVybiB0KFwiaW52YWxpZC1yZXNwb25zZVwiKTtcbiAgICAgIGxldCBhID0gcihlLnZhbHVlKSxcbiAgICAgICAgbyA9IHIoZS50ZXh0KTtcbiAgICAgIGlmICghYSB8fCBhLmxlbmd0aCA+IDI1NiB8fCAhbyB8fCBvLmxlbmd0aCA+IDUxMikgcmV0dXJuIHQoXCJpbnZhbGlkLXJlc3BvbnNlXCIpO1xuICAgICAgbGV0IHMgPSBKU09OLnN0cmluZ2lmeShbYSwgb10pO1xuICAgICAgdS5oYXMocykgfHwgKHUuYWRkKHMpLCBpLnB1c2goe1xuICAgICAgICB2YWx1ZTogYSxcbiAgICAgICAgdGV4dDogb1xuICAgICAgfSkpXG4gICAgfVxuICAgIHJldHVybiBpLmxlbmd0aCA/IHtcbiAgICAgIHN0YXR1czogXCJyZWFkeVwiLFxuICAgICAgY2FuZGlkYXRlczogaVxuICAgIH0gOiB7XG4gICAgICBzdGF0dXM6IFwibm8tcmVzdWx0c1wiLFxuICAgICAgY2FuZGlkYXRlczogW11cbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB0KFwicmVxdWVzdC1mYWlsZWRcIilcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGVhclRpbWVvdXQocClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9IHJlcS5zZW5kZXI/LnRhYj8uaWRcbiAgICBpZiAoIXRhYklkKSB7XG4gICAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBvazogZmFsc2UsIG9wZW5lZDogZmFsc2UsIG1lc3NhZ2U6IFwibm9fdGFiXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBmcmFtZUlkID0gcmVxLnNlbmRlcj8uZnJhbWVJZCA/PyAwXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQ6IHsgdGFiSWQsIGZyYW1lSWRzOiBbZnJhbWVJZF0gfSxcbiAgICAgIHdvcmxkOiBcIk1BSU5cIixcbiAgICAgIGZ1bmM6IGluamVjdE1haW4sXG4gICAgICBhcmdzOiBbcmVxLmJvZHldXG4gICAgfSlcbiAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzPy5bMF0/LnJlc3VsdCA/PyBudWxsXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgb3BlbmVkOiByZXN1bHQ/Lm9wZW5lZCA9PT0gdHJ1ZSxcbiAgICAgIHJlc3VsdCxcbiAgICAgIC4uLihyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdCA9PT0gXCJvYmplY3RcIiA/IHJlc3VsdCA6IHt9KVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbc2VhcmNoSWNpbXNQcm9maWxlT3B0aW9uc11cIiwgZXJyKVxuICAgIHJlcy5zZW5kKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgb2s6IGZhbHNlLFxuICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcImluamVjdF9mYWlsZWRcIlxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogUG9ydGVkIE1BSU4td29ybGQgaW5qZWN0IGZyb20gZW5naW5lL2JhY2tncm91bmQvLi4uL3NlbGVjdEljaW1zUHJvZmlsZU9wdGlvbi5qc1xuICovXG5pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuZnVuY3Rpb24gaW5qZWN0TWFpbihlKSB7XG4gIGxldCB0ID0gZSA9PiAoe1xuICAgICAgc3RhdHVzOiBcImZhaWx1cmVcIixcbiAgICAgIHJlYXNvbjogZVxuICAgIH0pLFxuICAgIHIgPSBlID0+IFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgPyBlLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKSA6IFwiXCIsXG4gICAgYSA9IHIoZT8uc2VsZWN0SWQpLFxuICAgIG8gPSByKGU/LmNhbmRpZGF0ZT8udmFsdWUpLFxuICAgIHMgPSByKGU/LmNhbmRpZGF0ZT8udGV4dCk7XG4gIGlmICghYSB8fCBhLmxlbmd0aCA+IDI1NiB8fCAhbyB8fCBvLmxlbmd0aCA+IDI1NiB8fCAhcyB8fCBzLmxlbmd0aCA+IDUxMikgcmV0dXJuIHQoXG4gICAgXCJpbnZhbGlkLXJlcXVlc3RcIik7XG4gIGxldCBuID0gZ2xvYmFsVGhpcy5sb2NhdGlvbixcbiAgICBsID0gbj8uaG9zdG5hbWU/LnRvTG93ZXJDYXNlKCkgPz8gXCJcIjtcbiAgaWYgKG4/LnByb3RvY29sICE9PSBcImh0dHBzOlwiIHx8IFwiaWNpbXMuY29tXCIgIT09IGwgJiYgIWwuZW5kc1dpdGgoXCIuaWNpbXMuY29tXCIpKSByZXR1cm4gdChcbiAgICBcImludmFsaWQtY29udGV4dFwiKTtcbiAgbGV0IGkgPSBnbG9iYWxUaGlzLmRvY3VtZW50Py5nZXRFbGVtZW50QnlJZChhKTtcbiAgaWYgKCFpIHx8ICFpLmlzQ29ubmVjdGVkIHx8ICFhLmVuZHNXaXRoKFwiQ2FuZFByb2ZpbGVGaWVsZHMuU2Nob29sXCIpICYmICFhLmVuZHNXaXRoKFxuICAgICAgXCJDYW5kUHJvZmlsZUZpZWxkcy5NYWpvclwiKSB8fCBcIjFcIiAhPT0gaS5nZXRBdHRyaWJ1dGUoXCJpY2ltc2Ryb3Bkb3duLWVuYWJsZWRcIikpIHJldHVybiB0KFxuICAgIFwiaW52YWxpZC1jb250cm9sXCIpO1xuICBsZXQgdSA9IGdsb2JhbFRoaXMuSUNJTVMgPz8gZ2xvYmFsVGhpcy5pY2ltc1V0aWxzLFxuICAgIGMgPSB1Py5kcm9wZG93bnM/LlthXTtcbiAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgYz8uZmluZFdvcmRGcm9tVmFsdWUgfHwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBjLm9wdGlvblNlbGVjdGVkKSByZXR1cm4gdChcbiAgICBcIm1pc3NpbmctZHJvcGRvd25cIik7XG4gIGxldCBkID0gYy5maW5kV29yZEZyb21WYWx1ZShvKTtcbiAgaWYgKCFkIHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIGQgfHwgcihkLnZhbHVlKSAhPT0gbyB8fCByKGQudGV4dCkgIT09IHMpIHJldHVybiB0KFwibWlzc2luZy1vcHRpb25cIik7XG4gIGMub3B0aW9uU2VsZWN0ZWQoZCk7XG4gIGxldCBwID0gaS5zZWxlY3RlZE9wdGlvbnM/LlswXSxcbiAgICBmID0gcihnbG9iYWxUaGlzLmRvY3VtZW50Py5nZXRFbGVtZW50QnlJZChgJHthfV9mYWtlU2VsZWN0ZWRfaWNpbXNEcm9wZG93bmApPy50ZXh0Q29udGVudCk7XG4gIHJldHVybiByKHA/LnZhbHVlKSAhPT0gbyB8fCByKHA/LnRleHQpICE9PSBzIHx8IGYgIT09IHMgPyB0KFwidW5jb21taXR0ZWRcIikgOiB7XG4gICAgc3RhdHVzOiBcInNlbGVjdGVkXCJcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9IHJlcS5zZW5kZXI/LnRhYj8uaWRcbiAgICBpZiAoIXRhYklkKSB7XG4gICAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBvazogZmFsc2UsIG9wZW5lZDogZmFsc2UsIG1lc3NhZ2U6IFwibm9fdGFiXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBmcmFtZUlkID0gcmVxLnNlbmRlcj8uZnJhbWVJZCA/PyAwXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQ6IHsgdGFiSWQsIGZyYW1lSWRzOiBbZnJhbWVJZF0gfSxcbiAgICAgIHdvcmxkOiBcIk1BSU5cIixcbiAgICAgIGZ1bmM6IGluamVjdE1haW4sXG4gICAgICBhcmdzOiBbcmVxLmJvZHldXG4gICAgfSlcbiAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzPy5bMF0/LnJlc3VsdCA/PyBudWxsXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgb3BlbmVkOiByZXN1bHQ/Lm9wZW5lZCA9PT0gdHJ1ZSxcbiAgICAgIHJlc3VsdCxcbiAgICAgIC4uLihyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdCA9PT0gXCJvYmplY3RcIiA/IHJlc3VsdCA6IHt9KVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbc2VsZWN0SWNpbXNQcm9maWxlT3B0aW9uXVwiLCBlcnIpXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBvazogZmFsc2UsXG4gICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiaW5qZWN0X2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgc2V0VGFiSm9iUmVjb3JkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL3RhYi1qb2ItaWRcIlxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Qm9keSA9IHtcbiAgam9iSWQ/OiBzdHJpbmdcbiAgdXJsPzogc3RyaW5nXG59XG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlcjxSZXF1ZXN0Qm9keT4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgdGFiSWQgPSByZXEuc2VuZGVyPy50YWI/LmlkXG4gIGNvbnN0IGpvYklkID0gcmVxLmJvZHk/LmpvYklkPy50cmltKClcbiAgY29uc3QgdXJsID0gcmVxLmJvZHk/LnVybCB8fCByZXEuc2VuZGVyPy50YWI/LnVybCB8fCBcIlwiXG5cbiAgaWYgKHR5cGVvZiB0YWJJZCAhPT0gXCJudW1iZXJcIiB8fCAham9iSWQpIHtcbiAgICByZXMuc2VuZCh7IG9rOiBmYWxzZSB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IHBhdGhuYW1lID0gXCIvXCJcbiAgdHJ5IHtcbiAgICBwYXRobmFtZSA9IG5ldyBVUkwodXJsKS5wYXRobmFtZVxuICB9IGNhdGNoIHtcbiAgICAvKiBpZ25vcmUgKi9cbiAgfVxuXG4gIGF3YWl0IHNldFRhYkpvYlJlY29yZCh0YWJJZCwge1xuICAgIGpvYklkLFxuICAgIHVybCxcbiAgICBwYXRobmFtZSxcbiAgICB1cGRhdGVkQXQ6IERhdGUubm93KClcbiAgfSlcblxuICByZXMuc2VuZCh7IG9rOiB0cnVlIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5pbXBvcnQgeyBtZXJnZVByb2ZpbGVBbnN3ZXJzLCB0ZWFtRmV0Y2gsIGdldFRlYW1TZXR0aW5ncyB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcblxuLyoqXG4gKiBVcGRhdGUgb25lIGF1dG9maWxsIHNlY3Rpb24gKGlkZW50aXR5IC8gYW5zd2VycyAvIGV4dHJhcykgb24gdGhlIGh1YiBwcm9maWxlLlxuICogQm9keTogeyBzZWN0aW9uPzogc3RyaW5nLCBkYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIGFuc3dlcnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH1cbiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IHJlcS5ib2R5IHx8IHt9XG4gICAgY29uc3QgYW5zd2VycyA9XG4gICAgICBib2R5LmFuc3dlcnMgJiYgdHlwZW9mIGJvZHkuYW5zd2VycyA9PT0gXCJvYmplY3RcIlxuICAgICAgICA/IChib2R5LmFuc3dlcnMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPilcbiAgICAgICAgOiBib2R5LmRhdGE/LmFuc3dlcnMgJiYgdHlwZW9mIGJvZHkuZGF0YS5hbnN3ZXJzID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgPyAoYm9keS5kYXRhLmFuc3dlcnMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPilcbiAgICAgICAgICA6IG51bGxcblxuICAgIGlmIChhbnN3ZXJzICYmIE9iamVjdC5rZXlzKGFuc3dlcnMpLmxlbmd0aCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVyZ2VQcm9maWxlQW5zd2VycyhcbiAgICAgICAgYW5zd2VycyxcbiAgICAgICAgdHlwZW9mIGJvZHkucHJvZmlsZUlkID09PSBcInN0cmluZ1wiID8gYm9keS5wcm9maWxlSWQgOiBudWxsXG4gICAgICApXG4gICAgICBpZiAoIXJlc3VsdC5vaykge1xuICAgICAgICByZXMuc2VuZCh7IG9rOiBmYWxzZSwgbWVzc2FnZTogcmVzdWx0LmVycm9yIHx8IFwic2F2ZV9mYWlsZWRcIiB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJlcy5zZW5kKHsgb2s6IHRydWUsIGFuc3dlcnM6IHJlc3VsdC5hbnN3ZXJzLCBleHRyYXM6IHJlc3VsdC5leHRyYXMgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEdlbmVyaWMgZXh0cmFzIC8gc2VjdGlvbiBwYXRjaFxuICAgIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0VGVhbVNldHRpbmdzKClcbiAgICBjb25zdCBpZCA9XG4gICAgICAodHlwZW9mIGJvZHkucHJvZmlsZUlkID09PSBcInN0cmluZ1wiICYmIGJvZHkucHJvZmlsZUlkKSB8fFxuICAgICAgc2V0dGluZ3Muc2VsZWN0ZWRQcm9maWxlSWRcbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXMuc2VuZCh7IG9rOiBmYWxzZSwgbWVzc2FnZTogXCJub19wcm9maWxlXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhdGNoOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG4gICAgaWYgKGJvZHkuZXh0cmFzICYmIHR5cGVvZiBib2R5LmV4dHJhcyA9PT0gXCJvYmplY3RcIikgcGF0Y2guZXh0cmFzID0gYm9keS5leHRyYXNcbiAgICBpZiAoYm9keS5kYXRhICYmIHR5cGVvZiBib2R5LmRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IGQgPSBib2R5LmRhdGEgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIFtcbiAgICAgICAgXCJmaXJzdE5hbWVcIixcbiAgICAgICAgXCJsYXN0TmFtZVwiLFxuICAgICAgICBcImVtYWlsXCIsXG4gICAgICAgIFwicGhvbmVcIixcbiAgICAgICAgXCJsaW5rZWRpblwiLFxuICAgICAgICBcIndlYnNpdGVcIixcbiAgICAgICAgXCJhZGRyZXNzMVwiLFxuICAgICAgICBcImFkZHJlc3MyXCIsXG4gICAgICAgIFwiY2l0eVwiLFxuICAgICAgICBcInN0YXRlXCIsXG4gICAgICAgIFwicG9zdGFsQ29kZVwiLFxuICAgICAgICBcImNvdW50cnlcIlxuICAgICAgXSkge1xuICAgICAgICBpZiAodHlwZW9mIGRba2V5XSA9PT0gXCJzdHJpbmdcIikgcGF0Y2hba2V5XSA9IGRba2V5XVxuICAgICAgfVxuICAgICAgaWYgKGQuZXh0cmFzICYmIHR5cGVvZiBkLmV4dHJhcyA9PT0gXCJvYmplY3RcIikgcGF0Y2guZXh0cmFzID0gZC5leHRyYXNcbiAgICB9XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKHBhdGNoKS5sZW5ndGgpIHtcbiAgICAgIHJlcy5zZW5kKHsgb2s6IHRydWUsIHNraXBwZWQ6IHRydWUgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgb2ssIGRhdGEgfSA9IGF3YWl0IHRlYW1GZXRjaDx7IG9rOiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PihcbiAgICAgIGAvYXBpL3YxL3Byb2ZpbGVzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gLFxuICAgICAgeyBtZXRob2Q6IFwiUEFUQ0hcIiwgYm9keTogSlNPTi5zdHJpbmdpZnkocGF0Y2gpIH1cbiAgICApXG4gICAgcmVzLnNlbmQoeyBvazogb2sgJiYgISFkYXRhPy5vaywgZXJyb3I6IGRhdGE/LmVycm9yIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcInVwZGF0ZV9mYWlsZWRcIlxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHsgc29mdE9rIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0T2soXCJ1cGRhdGVSZXN1bWVDb2xsZWN0aW9uXCIpXG4iLCIvLyBAdHMtbm9jaGVja1xuLyoqXG4gKiBQb3J0ZWQgTUFJTi13b3JsZCBpbmplY3QgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC8uLi4vdXBsb2FkQnJhc3NyaW5nUHJvZmlsZUJ1aWxkZXJGaWxlLmpzXG4gKi9cbmltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5mdW5jdGlvbiBpbmplY3RNYWluKGUpIHtcbiAgbGV0IHQgPSBlID0+IFwicmVzdW1lXCIgPT09IGUgPyBcInJlc3VtZVwiIDogXCJjb3ZlcmxldHRlclwiO1xuICBpZiAoISgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgciA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICByZXR1cm4gL1xcL1RHTmV3VUlcXC9Qcm9maWxlXFwvSG9tZVxcL1Byb2ZpbGVCdWlsZGVyJC9pLnRlc3Qoci5wYXRobmFtZSkgJiYgKHIuc2VhcmNoUGFyYW1zXG4gICAgICAgICAgLmdldChcImNhbGxlZEZyb21cIikgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gdChlLmtpbmQpXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuICExXG4gICAgICB9XG4gICAgfSkoKSkgcmV0dXJuIHtcbiAgICBtYXRjaGVkOiAhMSxcbiAgICBzdWNjZXNzOiAhMVxuICB9O1xuICBsZXQgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJpbnB1dFt0eXBlPSdmaWxlJ10jZmlsZSwgaW5wdXRbdHlwZT0nZmlsZSddW25hbWU9J2ZpbGUnXSwgaW5wdXRbdHlwZT0nZmlsZSddXCIpO1xuICBpZiAoIXIgfHwgci5kaXNhYmxlZCkgcmV0dXJuIHtcbiAgICBtYXRjaGVkOiAhMCxcbiAgICBzdWNjZXNzOiAhMSxcbiAgICByZWFzb246IFwibWlzc2luZy1maWxlLWlucHV0XCJcbiAgfTtcbiAgaWYgKCFlLmJhc2U2NCB8fCAhZS5maWxlTmFtZSkgcmV0dXJuIHtcbiAgICBtYXRjaGVkOiAhMCxcbiAgICBzdWNjZXNzOiAhMSxcbiAgICByZWFzb246IFwibWlzc2luZy1maWxlLXBheWxvYWRcIlxuICB9O1xuICB0cnkge1xuICAgIGxldCB0ID0gYXRvYihlLmJhc2U2NCksXG4gICAgICBhID0gbmV3IFVpbnQ4QXJyYXkodC5sZW5ndGgpO1xuICAgIGZvciAobGV0IGUgPSAwOyBlIDwgdC5sZW5ndGg7IGUgKz0gMSkgYVtlXSA9IHQuY2hhckNvZGVBdChlKTtcbiAgICBsZXQgbyA9IG5ldyBGaWxlKFthXSwgZS5maWxlTmFtZSwge1xuICAgICAgICB0eXBlOiBlLmZpbGVUeXBlIHx8IFwiYXBwbGljYXRpb24vcGRmXCIsXG4gICAgICAgIGxhc3RNb2RpZmllZDogZS5sYXN0TW9kaWZpZWQgfHwgRGF0ZS5ub3coKVxuICAgICAgfSksXG4gICAgICBzID0gbmV3IERhdGFUcmFuc2ZlcjtcbiAgICBzLml0ZW1zLmFkZChvKTtcbiAgICB0cnkge1xuICAgICAgci5maWxlcyA9IHMuZmlsZXNcbiAgICB9IGNhdGNoIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLCBcImZpbGVzXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IHMuZmlsZXNcbiAgICAgIH0pXG4gICAgfVxuICAgIGZvciAobGV0IGUgb2YgW1wiaW5wdXRcIiwgXCJjaGFuZ2VcIiwgXCJibHVyXCJdKSByLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KGUsIHtcbiAgICAgIGJ1YmJsZXM6ICEwLFxuICAgICAgY2FuY2VsYWJsZTogITFcbiAgICB9KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hdGNoZWQ6ICEwLFxuICAgICAgc3VjY2VzczogISFyLmZpbGVzPy5sZW5ndGhcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWF0Y2hlZDogITAsXG4gICAgICBzdWNjZXNzOiAhMSxcbiAgICAgIHJlYXNvbjogU3RyaW5nKGUpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRhYklkID0gcmVxLnNlbmRlcj8udGFiPy5pZFxuICAgIGlmICghdGFiSWQpIHtcbiAgICAgIHJlcy5zZW5kKHsgc3VjY2VzczogZmFsc2UsIG9rOiBmYWxzZSwgbWVzc2FnZTogXCJub190YWJcIiB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGZyYW1lSWQgPSByZXEuc2VuZGVyPy5mcmFtZUlkID8/IDBcbiAgICBjb25zdCB0YXJnZXQgPVxuICAgICAgcmVxLmJvZHk/LmFsbEZyYW1lcyA9PT0gdHJ1ZVxuICAgICAgICA/IHsgdGFiSWQsIGFsbEZyYW1lczogdHJ1ZSB9XG4gICAgICAgIDogeyB0YWJJZCwgZnJhbWVJZHM6IFtmcmFtZUlkXSB9XG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQsXG4gICAgICB3b3JsZDogXCJNQUlOXCIsXG4gICAgICBmdW5jOiBpbmplY3RNYWluLFxuICAgICAgYXJnczogW3JlcS5ib2R5XVxuICAgIH0pXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgcmVzdWx0OiByZXN1bHRzPy5bMF0/LnJlc3VsdCA/PyBudWxsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt1cGxvYWRCcmFzc3JpbmdQcm9maWxlQnVpbGRlckZpbGVdXCIsIGVycilcbiAgICByZXMuc2VuZCh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcImluamVjdF9mYWlsZWRcIlxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHsgc29mdE9rIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWJcIlxuXG5leHBvcnQgZGVmYXVsdCBzb2Z0T2soXCJ3YWl0Rm9yUGhlbm9tU2Nob29sQ2FwdHVyZVwiKVxuIiwiLyoqXG4gKiBCYWNrZ3JvdW5kIHNlcnZpY2Ugd29ya2VyIGVudHJ5LlxuICogTWVzc2FnZSBoYW5kbGVycyBsaXZlIGluIGJhY2tncm91bmQvbWVzc2FnZXMvKi5cbiAqL1xuXG5pbXBvcnQgeyBnZXRIdWJVcmwgfSBmcm9tIFwifmFwaS9odWItZW52XCJcbmltcG9ydCB7IHNhdmVUZWFtU2V0dGluZ3MgfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsLmFkZExpc3RlbmVyKChtZXNzYWdlLCBfc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgaWYgKG1lc3NhZ2U/LnR5cGUgIT09IFwiVEVBTV9IVUJfQVVUSFwiIHx8ICFtZXNzYWdlLnRva2VuKSB7XG4gICAgc2VuZFJlc3BvbnNlKHsgb2s6IGZhbHNlLCBlcnJvcjogXCJ1bmtub3duX21lc3NhZ2VcIiB9KVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3Qgc2l0ZVVybCA9IFN0cmluZyhtZXNzYWdlLnNpdGVVcmwgfHwgZ2V0SHViVXJsKCkpLnJlcGxhY2UoL1xcLyskLywgXCJcIilcblxuICB2b2lkIHNhdmVUZWFtU2V0dGluZ3Moe1xuICAgIHNpdGVVcmwsXG4gICAgYXBpVG9rZW46IFN0cmluZyhtZXNzYWdlLnRva2VuKSxcbiAgICB1c2VyRW1haWw6IG1lc3NhZ2UudXNlcj8uZW1haWwgfHwgXCJcIixcbiAgICB1c2VyTmFtZTogbWVzc2FnZS51c2VyPy5uYW1lIHx8IFwiXCJcbiAgfSlcbiAgICAudGhlbigoKSA9PiBzZW5kUmVzcG9uc2UoeyBvazogdHJ1ZSB9KSlcbiAgICAuY2F0Y2goKGVycikgPT5cbiAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcInNhdmVfZmFpbGVkXCJcbiAgICAgIH0pXG4gICAgKVxuXG4gIHJldHVybiB0cnVlXG59KVxuXG5leHBvcnQge31cbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);