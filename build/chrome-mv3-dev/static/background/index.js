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
    // Bundle auto-boots; call again if the page already had a partial load.
    await chrome.scripting.executeScript({
        target: {
            tabId,
            allFrames: true
        },
        world: "ISOLATED",
        func: ()=>{
            const g = globalThis;
            const boot = g.bootstrapJobrightHelperRuntime || g.openJobrightHelperFromExtensionIcon;
            if (typeof boot === "function") boot();
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
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softEmpty)("getAddressSuggestions", "suggestions");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"7FuE3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Soft success for Jobright telemetry / attribution messages we do not mirror. */ parcelHelpers.export(exports, "softOk", ()=>softOk);
/** Soft empty payload for suggestion / search stubs. */ parcelHelpers.export(exports, "softEmpty", ()=>softEmpty);
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

},{"~api/team-client":"7DK0L","~lib/hub-to-jobright":"2hkCS","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"7DK0L":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"2hkCS":[function(require,module,exports) {
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
/**
 * Site CSRF / session token \u2014 unused by team hub local fill path.
 */ const handler = async (_req, res)=>{
    res.send("");
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
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("reportAutofillFirstUseAttribution");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"lBm2x":[function(require,module,exports) {
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
var _softStub = require("~background/lib/soft-stub");
exports.default = (0, _softStub.softOk)("saveSubmitStatus");

},{"~background/lib/soft-stub":"7FuE3","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"1Typx":[function(require,module,exports) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsSUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFBRyxLQUFJLENBQUEsRUFBRSxZQUFZLE9BQU8sSUFBRyxFQUFFLFlBQVksU0FBTyxLQUFJLENBQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxlQUFlLEVBQUUsU0FBUSxDQUFDO1FBQUU7SUFBQztJQUFDLGFBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUc7SUFBQSxDQUFDLENBQUM7UUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsVUFBUyxDQUFDLEVBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxlQUFlLEtBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQU87SUFBQyxNQUFNLFFBQVEsQ0FBQyxFQUFDO1FBQUMsT0FBTyxJQUFJLENBQUMsSUFBSTtJQUFFO0lBQUMsTUFBTSxTQUFTLENBQUMsRUFBQztRQUFDLE9BQU8sTUFBTSxJQUFJLENBQUMsUUFBUTtJQUFFO0lBQUMsTUFBTSxRQUFRLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEdBQUU7SUFBRTtJQUFDLE1BQU0sU0FBUyxDQUFDLEVBQUM7UUFBQyxNQUFNLE1BQU0sSUFBSSxDQUFDLFFBQVE7SUFBRTtJQUFDLE1BQU0sV0FBVyxDQUFDLEVBQUM7UUFBQyxPQUFPLElBQUksQ0FBQyxPQUFPO0lBQUU7SUFBQyxNQUFNLFlBQVksQ0FBQyxFQUFDO1FBQUMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXO0lBQUU7QUFBQyxHQUFFLElBQUUsY0FBYztJQUFFLE1BQUksT0FBTTtRQUFJLElBQUksSUFBRSxJQUFJLENBQUMsaUJBQWlCLElBQUcsSUFBRSxNQUFNLElBQUksQ0FBQyxPQUFPO1FBQUcsT0FBTyxJQUFJLENBQUMsV0FBVztJQUFFLEVBQUU7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O1FBQ1QsU0FBUztJQUNYO0FBQ0Y7a0JBRWU7Ozs7O0FDVmYseUZBQXlGLEdBQ3pGLE1BQU0sVUFBMEMsT0FBTyxNQUFNO0lBQzNELElBQUksS0FBSztRQUNQLElBQUk7UUFDSixNQUFNO1FBQ04sU0FBUztRQUNULFNBQVM7SUFDWDtBQUNGO2tCQUVlOzs7OztBQ1ZmLG9HQUFvRyxHQUNwRyxNQUFNLFVBQTBDLE9BQU8sTUFBTTtJQUMzRCxJQUFJLEtBQUs7UUFDUCxJQUFJO1FBQ0osTUFBTTtRQUNOLFNBQVM7UUFDVCxTQUFTO0lBQ1g7QUFDRjtrQkFFZTs7Ozs7QUNWZiw2RkFBNkYsR0FDN0YsTUFBTSxVQUEwQyxPQUFPLE1BQU07SUFDM0QsSUFBSSxLQUFLO1FBQ1AsSUFBSTtRQUNKLE1BQU07UUFDTixTQUFTO1FBQ1QsU0FBUztJQUNYO0FBQ0Y7a0JBRWU7OztBQ1pmOzs7Q0FHQyxHQUVEO0FBQ0E7QUFFQSxPQUFPLFFBQVEsa0JBQWtCLFlBQVksQ0FBQyxTQUFTLFNBQVM7SUFDOUQsSUFBSSxTQUFTLFNBQVMsbUJBQW1CLENBQUMsUUFBUSxPQUFPO1FBQ3ZELGFBQWE7WUFBRSxJQUFJO1lBQU8sT0FBTztRQUFrQjtRQUNuRCxPQUFPO0lBQ1Q7SUFFQSxNQUFNLFVBQVUsT0FBTyxRQUFRLFdBQVcsQ0FBQSxHQUFBLHNCQUFRLEtBQUssUUFBUSxRQUFRO0lBRWxFLENBQUEsR0FBQSw0QkFBZSxFQUFFO1FBQ3BCO1FBQ0EsVUFBVSxPQUFPLFFBQVE7UUFDekIsV0FBVyxRQUFRLE1BQU0sU0FBUztRQUNsQyxVQUFVLFFBQVEsTUFBTSxRQUFRO0lBQ2xDLEdBQ0csS0FBSyxJQUFNLGFBQWE7WUFBRSxJQUFJO1FBQUssSUFDbkMsTUFBTSxDQUFDLE1BQ04sYUFBYTtZQUNYLElBQUk7WUFDSixPQUFPLGVBQWUsUUFBUSxJQUFJLFVBQVU7UUFDOUM7SUFHSixPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWFiNDhjNWQ3OWVkZmI1MTIuanMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9tZXNzYWdpbmcudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9hY2NlcHRBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvbi50cyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvYWN0aXZhdGVIZWxwZXJPblRhYi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2NvbnN1bWVPcmFjbGVFZHVjYXRpb25Mb3ZDYXB0dXJlLnRzIiwic3JjL2JhY2tncm91bmQvbGliL29yYWNsZS1sb3YtY2FwdHVyZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2NvbnZlcnRSZXN1bWVQZGZUb1dvcmQudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9jb3VudEV4dGVybmFsSm9iSWRzLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZmx1c2hBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dlbmVyYXRlQXV0b2ZpbGxDb3ZlckxldHRlci50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFiVXNlci50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFkZHJlc3NTdWdnZXN0aW9ucy50cyIsInNyYy9iYWNrZ3JvdW5kL2xpYi9zb2Z0LXN0dWIudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBZ2VudENvdmVyTGV0dGVyLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0QWdlbnRRTFJ1bGUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBZ2VudFRhaWxvclJlc3VtZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEF1dG9maWxsQ29uZmlnLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0QXV0b2ZpbGxJbmZvLnRzIiwic3JjL2FwaS90ZWFtLWNsaWVudC50cyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvc3RvcmFnZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3BpZnkvaW5kZXguanMiLCJzcmMvYXBpL2Vudi1yZXNvbHZlci50cyIsInNyYy9saWIvaHViLXRvLWpvYnJpZ2h0LnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0QmFzZVJlc3VtZUJsb2IudHMiLCJzcmMvYmFja2dyb3VuZC9saWIvcmVzdW1lLWJsb2IudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDb21wYW55TmFtZUxpc3QudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDb3ZlckxldHRlckJsb2IudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDcmVkaXRGZWVkLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3JlZGl0c0xlZnQudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDcmVkaXRTd2l0Y2hTdGF0dXMudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDdXJyZW50Q292ZXJMZXR0ZXIudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDdXJyZW50RmlsbEFuc3dlci50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEN1cnJlbnRUYWJJZC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEN1cnJlbnRUYWJVcmwudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXREZWdyZWVTdWdnZXN0aW9ucy50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEV4dGVybmFsSm9iSWQudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRFeHRlcm5hbEpvYlN0YXR1cy50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEdwdFJlc3VsdHMudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRKb2JCYW5uZXJEZXRhaWwudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRKb2JEZXRhaWwudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRNYWpvclN1Z2dlc3Rpb25zLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0T3BlbkNpdGllc0J5UmVnaW9uLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0T3BlblJlZ2lvbnMudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRQYWdlTGlua2VkaW5Kb2JJbmZvLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0UGF5bWVudFByaWNlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0UmVsZWFzZUNvbmZpZy50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlc3VtZUJsb2IudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRSZXN1bWVDb2xsZWN0aW9uLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0UmVzdW1lRGlhZ25vc2UudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRSZXN1bWVJbmZvLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0U2ltaWxhckpvYnMudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRTaXRlVG9rZW4udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRUYWJDb250ZXh0LnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFiSm9iSWQudHMiLCJzcmMvYmFja2dyb3VuZC90YWItam9iLWlkLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFpbG9yUmVzdW1lLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFpbG9yUmVzdW1lQmxvYi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhaWxvclJlc3VtZUZpbGVOYW1lLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VXNlclByb2ZpbGUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRWZXJzaW9uVXBkYXRlU3RhdGUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RBc2hieUZpZWxkTWV0YWRhdGEudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RIZWxwZXJBcHBCdW5kbGUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RSZWFjdFNlbGVjdEZpYmVyLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0UmVjcnVpdGVlRmliZXIudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RXb3JrYWJsZUNoZWNrYm94LnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0V29ya2RheUZpYmVyLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5zdGFsbE1haW5Xb3JsZEFsZXJ0U3VwcHJlc3Nvci50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2ludGVyY2VwdEZpbGVJbnB1dENsaWNrLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMva3VsYUNvbXBhbnlEb20udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9sZWFybkFuc3dlcnMudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9sb2dBcHBsaWNhdGlvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL21hcmtSZWZyZXNoUmVxdWVzdGVkLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvbWFya1doYXRzTmV3UmVhZC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL29wZW5BZ2VudEFwcGx5VGFiLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvb3BlbkJyYXNzcmluZ0Z1bGxQYWdlQXV0b2NvbXBsZXRlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvb3BlbkRheWZvcmNlUG9saWN5VGFiLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcGFyc2VQYWdlTWFya2Rvd24udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9waW5nLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcG9zdEFwcGx5Sm9iLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcG9zdEF1dG9maWxsQW5zd2VyUGFpckF0dHJpYnV0ZWQudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0QXV0b2ZpbGxGZWVkYmFjay50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RFdmVudFN1Ym1pdC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RFeHRlcm5hbEpvYkltcG9ydC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RQbHVnaW5GZWVkYmFjay50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RTaW1pbGFySm9iUG9wdXBFeHBvc3VyZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3ByZXBhcmVNZXRhQ2FyZWVyc0xvY2F0aW9uQ2FwdHVyZS50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3ByZXBhcmVPcmFjbGVFZHVjYXRpb25Mb3ZDYXB0dXJlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcHJlcGFyZVBoZW5vbVNjaG9vbENhcHR1cmUudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wcmV2aWV3QmFzZVJlc3VtZUJsb2IudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wcmV2aWV3VGFpbG9yUmVzdW1lQmxvYi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3JlZ2VuZXJhdGVBbnN3ZXIudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZWxvYWRFeHRlbnNpb24udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXBvcnRBdXRvZmlsbEZpcnN0VXNlQXR0cmlidXRpb24udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXF1ZXN0RXh0ZW5zaW9uVXBkYXRlQ2hlY2sudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQWRkcmVzc1N1Z2dlc3Rpb24udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQXV0b2ZpbGxDbGllbnRTZWFyY2hTdGVwLnRzIiwic3JjL2xpYi9yZXNvbHZlLW9wZXJhdGlvbi50cyIsInNyYy9saWIvb3JhY2xlLWVkdWNhdGlvbi1wbGFuLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUF1dG9maWxsT3BlcmF0aW9uLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUNhcHR1cmVkTWV0YUNhcmVlcnNMb2NhdGlvbi50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVDYXB0dXJlZFBoZW5vbVNjaG9vbC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVKb2JJZEJ5VXJsLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2F2ZUF1dG9maWxsSW5mby50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3NhdmVFeHRlcm5hbEpvYklkLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2F2ZUpvYkRldGFpbC50cyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3NhdmVTdWJtaXRTdGF0dXMudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9zZWFyY2hJY2ltc1Byb2ZpbGVPcHRpb25zLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2VsZWN0SWNpbXNQcm9maWxlT3B0aW9uLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2V0VGFiSm9iSWQudHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy91cGRhdGVBdXRvZmlsbFNlY3Rpb24udHMiLCJzcmMvYmFja2dyb3VuZC9tZXNzYWdlcy91cGRhdGVSZXN1bWVDb2xsZWN0aW9uLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvdXBsb2FkQnJhc3NyaW5nUHJvZmlsZUJ1aWxkZXJGaWxlLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvd2FpdEZvclBoZW5vbVNjaG9vbENhcHR1cmUudHMiLCJzcmMvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBoPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEI9bmV3IFNldCh1KSxfPWU9PkIuaGFzKGUpLEc9dS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBVPV8oXCItLWRyeS1ydW5cIiksZz0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8aCgpLlZFUkJPU0U9PT1cInRydWVcIixOPWcoKTt2YXIgbT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeT0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT5tKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksZj0oLi4uZSk9Pm0oXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxNPTAsaT0oLi4uZSk9PmcoKSYmbShgXFx1ezFGN0UxfSAke00rK31gLC4uLmUpO3ZhciBiPSgpPT57bGV0IGU9Z2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lfHxnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZSx0PSgpPT5zZXRJbnRlcnZhbChlLmdldFBsYXRmb3JtSW5mbywyNGUzKTtlLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcih0KSx0KCl9O3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6dHJ1ZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wiYmFja2dyb3VuZC1zZXJ2aWNlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFwucGxhc21vXFxcXHN0YXRpY1xcXFxiYWNrZ3JvdW5kXFxcXGluZGV4LnRzXCIsXCJidW5kbGVJZFwiOlwiYzMzODkwOGU3MDRjOTFmMVwiLFwiZW52SGFzaFwiOlwiZDk5YTVmZmE1N2FjZDYzOFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIEQ9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSChlKXtELmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUg7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBjPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gUigpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiB4KCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gZCgpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFA9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCIsUz1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO3ZhciBPPWAke24uc2VjdXJlP1wiaHR0cHNcIjpcImh0dHBcIn06Ly8ke1IoKX06JHtkKCl9L2A7YXN5bmMgZnVuY3Rpb24gayhlPTE0NzApe2Zvcig7Oyl0cnl7YXdhaXQgZmV0Y2goTyk7YnJlYWt9Y2F0Y2h7YXdhaXQgbmV3IFByb21pc2Uobz0+c2V0VGltZW91dChvLGUpKX19aWYoYy5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbj09PTMpe2xldCBlPWMucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiKTtnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLGZ1bmN0aW9uKHQpe2xldCBvPXQucmVxdWVzdC51cmw7aWYoby5zdGFydHNXaXRoKGUpKXtsZXQgcz1uZXcgVVJMKGRlY29kZVVSSUNvbXBvbmVudChvLnNsaWNlKGUubGVuZ3RoKSkpO3MuaG9zdG5hbWU9PT1uLmhvc3QmJnMucG9ydD09PWAke24ucG9ydH1gPyhzLnNlYXJjaFBhcmFtcy5zZXQoXCJ0XCIsRGF0ZS5ub3coKS50b1N0cmluZygpKSx0LnJlc3BvbmRXaXRoKGZldGNoKHMpLnRoZW4ocj0+bmV3IFJlc3BvbnNlKHIuYm9keSx7aGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpyLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPz9cInRleHQvamF2YXNjcmlwdFwifX0pKSkpOnQucmVzcG9uZFdpdGgobmV3IFJlc3BvbnNlKFwiUGxhc21vIEhNUlwiLHtzdGF0dXM6MjAwLHN0YXR1c1RleHQ6XCJUZXN0aW5nXCJ9KSl9fSl9ZnVuY3Rpb24gRShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIEMoZT1kKCkpe2xldCB0PXgoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBMKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJnkoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBUKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKE51bWJlcihkKCkpKzEpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTthd2FpdCBlKHMpfSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixMKSx0fWZ1bmN0aW9uIEEoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7aWYocy50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShzLmFzc2V0cykscy50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgciBvZiBzLmRpYWdub3N0aWNzLmFuc2kpe2xldCBsPXIuY29kZWZyYW1lfHxyLnN0YWNrO2YoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrci5tZXNzYWdlK2BcbmArbCtgXG5cbmArci5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEwpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57ZihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHc9bW9kdWxlLmJ1bmRsZS5wYXJlbnQsYT17YnVpbGRSZWFkeTohMSxiZ0NoYW5nZWQ6ITEsY3NDaGFuZ2VkOiExLHBhZ2VDaGFuZ2VkOiExLHNjcmlwdFBvcnRzOm5ldyBTZXQscGFnZVBvcnRzOm5ldyBTZXR9O2FzeW5jIGZ1bmN0aW9uIHAoZT0hMSl7aWYoZXx8YS5idWlsZFJlYWR5JiZhLnBhZ2VDaGFuZ2VkKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIFBhZ2VcIik7Zm9yKGxldCB0IG9mIGEucGFnZVBvcnRzKXQucG9zdE1lc3NhZ2UobnVsbCl9aWYoZXx8YS5idWlsZFJlYWR5JiYoYS5iZ0NoYW5nZWR8fGEuY3NDaGFuZ2VkKSl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBDU1wiKTtsZXQgdD1hd2FpdCBjPy50YWJzLnF1ZXJ5KHthY3RpdmU6ITB9KTtmb3IobGV0IG8gb2YgYS5zY3JpcHRQb3J0cyl7bGV0IHM9dC5zb21lKHI9PnIuaWQ9PT1vLnNlbmRlci50YWI/LmlkKTtvLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19hY3RpdmVfdGFiX186c30pfWMucnVudGltZS5yZWxvYWQoKX19aWYoIXd8fCF3LmlzUGFyY2VsUmVxdWlyZSl7YigpO2xldCBlPUEoYXN5bmMgdD0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGEuYmdDaGFuZ2VkfHw9dC5maWx0ZXIocz0+cy5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKHM9PkUobW9kdWxlLmJ1bmRsZSxzLmlkKSk7bGV0IG89dC5maW5kKHM9PnMudHlwZT09PVwianNvblwiKTtpZihvKXtsZXQgcz1uZXcgU2V0KHQubWFwKGw9PmwuaWQpKSxyPU9iamVjdC52YWx1ZXMoby5kZXBzQnlCdW5kbGUpLm1hcChsPT5PYmplY3QudmFsdWVzKGwpKS5mbGF0KCk7YS5iZ0NoYW5nZWR8fD1yLmV2ZXJ5KGw9PnMuaGFzKGwpKX1wKCl9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntsZXQgdD1zZXRJbnRlcnZhbCgoKT0+ZS5zZW5kKFwicGluZ1wiKSwyNGUzKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT5jbGVhckludGVydmFsKHQpKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsYXN5bmMoKT0+e2F3YWl0IGsoKSxwKCEwKX0pfVQoYXN5bmMgZT0+e3N3aXRjaChpKFwiQkdTVyBSdW50aW1lIC0gT24gQnVpbGQgUmVwYWNrYWdlZFwiKSxlLnR5cGUpe2Nhc2VcImJ1aWxkX3JlYWR5XCI6e2EuYnVpbGRSZWFkeXx8PSEwLHAoKTticmVha31jYXNlXCJjc19jaGFuZ2VkXCI6e2EuY3NDaGFuZ2VkfHw9ITAscCgpO2JyZWFrfX19KTtjLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uKGUpe2xldCB0PWUubmFtZS5zdGFydHNXaXRoKFApLG89ZS5uYW1lLnN0YXJ0c1dpdGgoUyk7aWYodHx8byl7bGV0IHM9dD9hLnBhZ2VQb3J0czphLnNjcmlwdFBvcnRzO3MuYWRkKGUpLGUub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57cy5kZWxldGUoZSl9KSxlLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyKXtpKFwiQkdTVyBSdW50aW1lIC0gT24gc291cmNlIGNoYW5nZWRcIixyKSxyLl9fcGxhc21vX2NzX2NoYW5nZWRfXyYmKGEuY3NDaGFuZ2VkfHw9ITApLHIuX19wbGFzbW9fcGFnZV9jaGFuZ2VkX18mJihhLnBhZ2VDaGFuZ2VkfHw9ITApLHAoKX0pfX0pO2MucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wbGFzbW9fZnVsbF9yZWxvYWRfXyYmKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiB0b3AtbGV2ZWwgY29kZSBjaGFuZ2VkXCIpLHAoKSksITB9KTtcbiIsImltcG9ydCBcIi4vbWVzc2FnaW5nXCJcbmltcG9ydCBcIi4uLy4uLy4uL3NyYy9iYWNrZ3JvdW5kXCIiLCIvLyBAdHMtbm9jaGVja1xuZ2xvYmFsVGhpcy5fX3BsYXNtb0ludGVybmFsUG9ydE1hcCA9IG5ldyBNYXAoKVxuXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzQWNjZXB0QXV0b2ZpbGxJbnN0YWxsQXR0cmlidXRpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvYWNjZXB0QXV0b2ZpbGxJbnN0YWxsQXR0cmlidXRpb25cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0FjdGl2YXRlSGVscGVyT25UYWIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvYWN0aXZhdGVIZWxwZXJPblRhYlwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzQ29uc3VtZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvY29uc3VtZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0NvbnZlcnRSZXN1bWVQZGZUb1dvcmQgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvY29udmVydFJlc3VtZVBkZlRvV29yZFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzQ291bnRFeHRlcm5hbEpvYklkcyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9jb3VudEV4dGVybmFsSm9iSWRzXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNGbHVzaEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2ZsdXNoQXV0b2ZpbGxJbnN0YWxsQXR0cmlidXRpb25cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dlbmVyYXRlQXV0b2ZpbGxDb3ZlckxldHRlciB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZW5lcmF0ZUF1dG9maWxsQ292ZXJMZXR0ZXJcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEFiVXNlciB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBYlVzZXJcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEFkZHJlc3NTdWdnZXN0aW9ucyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBZGRyZXNzU3VnZ2VzdGlvbnNcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEFnZW50Q292ZXJMZXR0ZXIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0QWdlbnRDb3ZlckxldHRlclwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0QWdlbnRRbFJ1bGUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0QWdlbnRRTFJ1bGVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEFnZW50VGFpbG9yUmVzdW1lIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFnZW50VGFpbG9yUmVzdW1lXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRBdXRvZmlsbENvbmZpZyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBdXRvZmlsbENvbmZpZ1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0QXV0b2ZpbGxJbmZvIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEF1dG9maWxsSW5mb1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0QmFzZVJlc3VtZUJsb2IgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0QmFzZVJlc3VtZUJsb2JcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldENvbXBhbnlOYW1lTGlzdCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDb21wYW55TmFtZUxpc3RcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldENvdmVyTGV0dGVyQmxvYiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDb3ZlckxldHRlckJsb2JcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldENyZWRpdEZlZWQgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3JlZGl0RmVlZFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0Q3JlZGl0c0xlZnQgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3JlZGl0c0xlZnRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldENyZWRpdFN3aXRjaFN0YXR1cyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDcmVkaXRTd2l0Y2hTdGF0dXNcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEN1cnJlbnRDb3ZlckxldHRlciB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDdXJyZW50Q292ZXJMZXR0ZXJcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEN1cnJlbnRGaWxsQW5zd2VyIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEN1cnJlbnRGaWxsQW5zd2VyXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRDdXJyZW50VGFiSWQgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3VycmVudFRhYklkXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRDdXJyZW50VGFiVXJsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEN1cnJlbnRUYWJVcmxcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldERlZ3JlZVN1Z2dlc3Rpb25zIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldERlZ3JlZVN1Z2dlc3Rpb25zXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRFeHRlcm5hbEpvYklkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEV4dGVybmFsSm9iSWRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEV4dGVybmFsSm9iU3RhdHVzIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEV4dGVybmFsSm9iU3RhdHVzXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRHcHRSZXN1bHRzIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEdwdFJlc3VsdHNcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEpvYkJhbm5lckRldGFpbCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRKb2JCYW5uZXJEZXRhaWxcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldEpvYkRldGFpbCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRKb2JEZXRhaWxcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldE1ham9yU3VnZ2VzdGlvbnMgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0TWFqb3JTdWdnZXN0aW9uc1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0T3BlbkNpdGllc0J5UmVnaW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldE9wZW5DaXRpZXNCeVJlZ2lvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0T3BlblJlZ2lvbnMgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0T3BlblJlZ2lvbnNcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFBhZ2VMaW5rZWRpbkpvYkluZm8gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0UGFnZUxpbmtlZGluSm9iSW5mb1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0UGF5bWVudFByaWNlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFBheW1lbnRQcmljZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0UmVsZWFzZUNvbmZpZyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRSZWxlYXNlQ29uZmlnXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRSZXN1bWVCbG9iIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlc3VtZUJsb2JcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFJlc3VtZUNvbGxlY3Rpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0UmVzdW1lQ29sbGVjdGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0UmVzdW1lRGlhZ25vc2UgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0UmVzdW1lRGlhZ25vc2VcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFJlc3VtZUluZm8gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0UmVzdW1lSW5mb1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0U2ltaWxhckpvYnMgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0U2ltaWxhckpvYnNcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFNpdGVUb2tlbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRTaXRlVG9rZW5cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFRhYkNvbnRleHQgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFiQ29udGV4dFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0VGFiSm9iSWQgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFiSm9iSWRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFRhaWxvclJlc3VtZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9nZXRUYWlsb3JSZXN1bWVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFRhaWxvclJlc3VtZUJsb2IgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFpbG9yUmVzdW1lQmxvYlwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0VGFpbG9yUmVzdW1lRmlsZU5hbWUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFpbG9yUmVzdW1lRmlsZU5hbWVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldFVzZXJQcm9maWxlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFVzZXJQcm9maWxlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNHZXRWZXJzaW9uVXBkYXRlU3RhdGUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0VmVyc2lvblVwZGF0ZVN0YXRlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNJbmplY3RBc2hieUZpZWxkTWV0YWRhdGEgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0QXNoYnlGaWVsZE1ldGFkYXRhXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNJbmplY3RIZWxwZXJBcHBCdW5kbGUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0SGVscGVyQXBwQnVuZGxlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNJbmplY3RSZWFjdFNlbGVjdEZpYmVyIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2luamVjdFJlYWN0U2VsZWN0RmliZXJcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0luamVjdFJlY3J1aXRlZUZpYmVyIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2luamVjdFJlY3J1aXRlZUZpYmVyXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNJbmplY3RXb3JrYWJsZUNoZWNrYm94IH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2luamVjdFdvcmthYmxlQ2hlY2tib3hcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0luamVjdFdvcmtkYXlGaWJlciB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RXb3JrZGF5RmliZXJcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0luc3RhbGxNYWluV29ybGRBbGVydFN1cHByZXNzb3IgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvaW5zdGFsbE1haW5Xb3JsZEFsZXJ0U3VwcHJlc3NvclwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzSW50ZXJjZXB0RmlsZUlucHV0Q2xpY2sgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvaW50ZXJjZXB0RmlsZUlucHV0Q2xpY2tcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0t1bGFDb21wYW55RG9tIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2t1bGFDb21wYW55RG9tXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNMZWFybkFuc3dlcnMgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvbGVhcm5BbnN3ZXJzXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNMb2dBcHBsaWNhdGlvbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9sb2dBcHBsaWNhdGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzTWFya1JlZnJlc2hSZXF1ZXN0ZWQgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvbWFya1JlZnJlc2hSZXF1ZXN0ZWRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc01hcmtXaGF0c05ld1JlYWQgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvbWFya1doYXRzTmV3UmVhZFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzT3BlbkFnZW50QXBwbHlUYWIgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvb3BlbkFnZW50QXBwbHlUYWJcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc09wZW5CcmFzc3JpbmdGdWxsUGFnZUF1dG9jb21wbGV0ZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuQnJhc3NyaW5nRnVsbFBhZ2VBdXRvY29tcGxldGVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc09wZW5EYXlmb3JjZVBvbGljeVRhYiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuRGF5Zm9yY2VQb2xpY3lUYWJcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1BhcnNlUGFnZU1hcmtkb3duIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3BhcnNlUGFnZU1hcmtkb3duXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNQaW5nIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3BpbmdcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Bvc3RBcHBseUpvYiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0QXBwbHlKb2JcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Bvc3RBdXRvZmlsbEFuc3dlclBhaXJBdHRyaWJ1dGVkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RBdXRvZmlsbEFuc3dlclBhaXJBdHRyaWJ1dGVkXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNQb3N0QXV0b2ZpbGxGZWVkYmFjayB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0QXV0b2ZpbGxGZWVkYmFja1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUG9zdEV2ZW50U3VibWl0IH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RFdmVudFN1Ym1pdFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUG9zdEV4dGVybmFsSm9iSW1wb3J0IH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RFeHRlcm5hbEpvYkltcG9ydFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUG9zdFBsdWdpbkZlZWRiYWNrIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RQbHVnaW5GZWVkYmFja1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUG9zdFNpbWlsYXJKb2JQb3B1cEV4cG9zdXJlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RTaW1pbGFySm9iUG9wdXBFeHBvc3VyZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUHJlcGFyZU1ldGFDYXJlZXJzTG9jYXRpb25DYXB0dXJlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3ByZXBhcmVNZXRhQ2FyZWVyc0xvY2F0aW9uQ2FwdHVyZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUHJlcGFyZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcHJlcGFyZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1ByZXBhcmVQaGVub21TY2hvb2xDYXB0dXJlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3ByZXBhcmVQaGVub21TY2hvb2xDYXB0dXJlXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNQcmV2aWV3QmFzZVJlc3VtZUJsb2IgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcHJldmlld0Jhc2VSZXN1bWVCbG9iXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNQcmV2aWV3VGFpbG9yUmVzdW1lQmxvYiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wcmV2aWV3VGFpbG9yUmVzdW1lQmxvYlwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVnZW5lcmF0ZUFuc3dlciB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9yZWdlbmVyYXRlQW5zd2VyXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNSZWxvYWRFeHRlbnNpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcmVsb2FkRXh0ZW5zaW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNSZXBvcnRBdXRvZmlsbEZpcnN0VXNlQXR0cmlidXRpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcmVwb3J0QXV0b2ZpbGxGaXJzdFVzZUF0dHJpYnV0aW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNSZXF1ZXN0RXh0ZW5zaW9uVXBkYXRlQ2hlY2sgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcmVxdWVzdEV4dGVuc2lvblVwZGF0ZUNoZWNrXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNSZXNvbHZlQWRkcmVzc1N1Z2dlc3Rpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUFkZHJlc3NTdWdnZXN0aW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNSZXNvbHZlQXV0b2ZpbGxDbGllbnRTZWFyY2hTdGVwIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVBdXRvZmlsbENsaWVudFNlYXJjaFN0ZXBcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Jlc29sdmVBdXRvZmlsbE9wZXJhdGlvbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQXV0b2ZpbGxPcGVyYXRpb25cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1Jlc29sdmVDYXB0dXJlZE1ldGFDYXJlZXJzTG9jYXRpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUNhcHR1cmVkTWV0YUNhcmVlcnNMb2NhdGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVzb2x2ZUNhcHR1cmVkUGhlbm9tU2Nob29sIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3Jlc29sdmVDYXB0dXJlZFBoZW5vbVNjaG9vbFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUmVzb2x2ZUpvYklkQnlVcmwgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUpvYklkQnlVcmxcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1NhdmVBdXRvZmlsbEluZm8gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvc2F2ZUF1dG9maWxsSW5mb1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzU2F2ZUV4dGVybmFsSm9iSWQgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvc2F2ZUV4dGVybmFsSm9iSWRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1NhdmVKb2JEZXRhaWwgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvc2F2ZUpvYkRldGFpbFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzU2F2ZVN1Ym1pdFN0YXR1cyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9zYXZlU3VibWl0U3RhdHVzXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNTZWFyY2hJY2ltc1Byb2ZpbGVPcHRpb25zIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3NlYXJjaEljaW1zUHJvZmlsZU9wdGlvbnNcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1NlbGVjdEljaW1zUHJvZmlsZU9wdGlvbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9zZWxlY3RJY2ltc1Byb2ZpbGVPcHRpb25cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1NldFRhYkpvYklkIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3NldFRhYkpvYklkXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNVcGRhdGVBdXRvZmlsbFNlY3Rpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvdXBkYXRlQXV0b2ZpbGxTZWN0aW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNVcGRhdGVSZXN1bWVDb2xsZWN0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3VwZGF0ZVJlc3VtZUNvbGxlY3Rpb25cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1VwbG9hZEJyYXNzcmluZ1Byb2ZpbGVCdWlsZGVyRmlsZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy91cGxvYWRCcmFzc3JpbmdQcm9maWxlQnVpbGRlckZpbGVcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc1dhaXRGb3JQaGVub21TY2hvb2xDYXB0dXJlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3dhaXRGb3JQaGVub21TY2hvb2xDYXB0dXJlXCJcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlRXh0ZXJuYWwuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIHN3aXRjaCAocmVxdWVzdD8ubmFtZSkge1xuICAgIFxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIHRydWVcbn0pXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgc3dpdGNoIChyZXF1ZXN0Lm5hbWUpIHtcbiAgICBjYXNlIFwiYWNjZXB0QXV0b2ZpbGxJbnN0YWxsQXR0cmlidXRpb25cIjpcbiAgbWVzc2FnZXNBY2NlcHRBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJhY3RpdmF0ZUhlbHBlck9uVGFiXCI6XG4gIG1lc3NhZ2VzQWN0aXZhdGVIZWxwZXJPblRhYih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJjb25zdW1lT3JhY2xlRWR1Y2F0aW9uTG92Q2FwdHVyZVwiOlxuICBtZXNzYWdlc0NvbnN1bWVPcmFjbGVFZHVjYXRpb25Mb3ZDYXB0dXJlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImNvbnZlcnRSZXN1bWVQZGZUb1dvcmRcIjpcbiAgbWVzc2FnZXNDb252ZXJ0UmVzdW1lUGRmVG9Xb3JkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImNvdW50RXh0ZXJuYWxKb2JJZHNcIjpcbiAgbWVzc2FnZXNDb3VudEV4dGVybmFsSm9iSWRzKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImZsdXNoQXV0b2ZpbGxJbnN0YWxsQXR0cmlidXRpb25cIjpcbiAgbWVzc2FnZXNGbHVzaEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdlbmVyYXRlQXV0b2ZpbGxDb3ZlckxldHRlclwiOlxuICBtZXNzYWdlc0dlbmVyYXRlQXV0b2ZpbGxDb3ZlckxldHRlcih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRBYlVzZXJcIjpcbiAgbWVzc2FnZXNHZXRBYlVzZXIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0QWRkcmVzc1N1Z2dlc3Rpb25zXCI6XG4gIG1lc3NhZ2VzR2V0QWRkcmVzc1N1Z2dlc3Rpb25zKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEFnZW50Q292ZXJMZXR0ZXJcIjpcbiAgbWVzc2FnZXNHZXRBZ2VudENvdmVyTGV0dGVyKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEFnZW50UUxSdWxlXCI6XG4gIG1lc3NhZ2VzR2V0QWdlbnRRbFJ1bGUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0QWdlbnRUYWlsb3JSZXN1bWVcIjpcbiAgbWVzc2FnZXNHZXRBZ2VudFRhaWxvclJlc3VtZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRBdXRvZmlsbENvbmZpZ1wiOlxuICBtZXNzYWdlc0dldEF1dG9maWxsQ29uZmlnKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEF1dG9maWxsSW5mb1wiOlxuICBtZXNzYWdlc0dldEF1dG9maWxsSW5mbyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRCYXNlUmVzdW1lQmxvYlwiOlxuICBtZXNzYWdlc0dldEJhc2VSZXN1bWVCbG9iKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldENvbXBhbnlOYW1lTGlzdFwiOlxuICBtZXNzYWdlc0dldENvbXBhbnlOYW1lTGlzdCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRDb3ZlckxldHRlckJsb2JcIjpcbiAgbWVzc2FnZXNHZXRDb3ZlckxldHRlckJsb2Ioe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0Q3JlZGl0RmVlZFwiOlxuICBtZXNzYWdlc0dldENyZWRpdEZlZWQoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0Q3JlZGl0c0xlZnRcIjpcbiAgbWVzc2FnZXNHZXRDcmVkaXRzTGVmdCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRDcmVkaXRTd2l0Y2hTdGF0dXNcIjpcbiAgbWVzc2FnZXNHZXRDcmVkaXRTd2l0Y2hTdGF0dXMoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0Q3VycmVudENvdmVyTGV0dGVyXCI6XG4gIG1lc3NhZ2VzR2V0Q3VycmVudENvdmVyTGV0dGVyKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEN1cnJlbnRGaWxsQW5zd2VyXCI6XG4gIG1lc3NhZ2VzR2V0Q3VycmVudEZpbGxBbnN3ZXIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0Q3VycmVudFRhYklkXCI6XG4gIG1lc3NhZ2VzR2V0Q3VycmVudFRhYklkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldEN1cnJlbnRUYWJVcmxcIjpcbiAgbWVzc2FnZXNHZXRDdXJyZW50VGFiVXJsKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldERlZ3JlZVN1Z2dlc3Rpb25zXCI6XG4gIG1lc3NhZ2VzR2V0RGVncmVlU3VnZ2VzdGlvbnMoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0RXh0ZXJuYWxKb2JJZFwiOlxuICBtZXNzYWdlc0dldEV4dGVybmFsSm9iSWQoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0RXh0ZXJuYWxKb2JTdGF0dXNcIjpcbiAgbWVzc2FnZXNHZXRFeHRlcm5hbEpvYlN0YXR1cyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRHcHRSZXN1bHRzXCI6XG4gIG1lc3NhZ2VzR2V0R3B0UmVzdWx0cyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRKb2JCYW5uZXJEZXRhaWxcIjpcbiAgbWVzc2FnZXNHZXRKb2JCYW5uZXJEZXRhaWwoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0Sm9iRGV0YWlsXCI6XG4gIG1lc3NhZ2VzR2V0Sm9iRGV0YWlsKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldE1ham9yU3VnZ2VzdGlvbnNcIjpcbiAgbWVzc2FnZXNHZXRNYWpvclN1Z2dlc3Rpb25zKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldE9wZW5DaXRpZXNCeVJlZ2lvblwiOlxuICBtZXNzYWdlc0dldE9wZW5DaXRpZXNCeVJlZ2lvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRPcGVuUmVnaW9uc1wiOlxuICBtZXNzYWdlc0dldE9wZW5SZWdpb25zKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFBhZ2VMaW5rZWRpbkpvYkluZm9cIjpcbiAgbWVzc2FnZXNHZXRQYWdlTGlua2VkaW5Kb2JJbmZvKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFBheW1lbnRQcmljZVwiOlxuICBtZXNzYWdlc0dldFBheW1lbnRQcmljZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRSZWxlYXNlQ29uZmlnXCI6XG4gIG1lc3NhZ2VzR2V0UmVsZWFzZUNvbmZpZyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRSZXN1bWVCbG9iXCI6XG4gIG1lc3NhZ2VzR2V0UmVzdW1lQmxvYih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRSZXN1bWVDb2xsZWN0aW9uXCI6XG4gIG1lc3NhZ2VzR2V0UmVzdW1lQ29sbGVjdGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRSZXN1bWVEaWFnbm9zZVwiOlxuICBtZXNzYWdlc0dldFJlc3VtZURpYWdub3NlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFJlc3VtZUluZm9cIjpcbiAgbWVzc2FnZXNHZXRSZXN1bWVJbmZvKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFNpbWlsYXJKb2JzXCI6XG4gIG1lc3NhZ2VzR2V0U2ltaWxhckpvYnMoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0U2l0ZVRva2VuXCI6XG4gIG1lc3NhZ2VzR2V0U2l0ZVRva2VuKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFRhYkNvbnRleHRcIjpcbiAgbWVzc2FnZXNHZXRUYWJDb250ZXh0KHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFRhYkpvYklkXCI6XG4gIG1lc3NhZ2VzR2V0VGFiSm9iSWQoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0VGFpbG9yUmVzdW1lXCI6XG4gIG1lc3NhZ2VzR2V0VGFpbG9yUmVzdW1lKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFRhaWxvclJlc3VtZUJsb2JcIjpcbiAgbWVzc2FnZXNHZXRUYWlsb3JSZXN1bWVCbG9iKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImdldFRhaWxvclJlc3VtZUZpbGVOYW1lXCI6XG4gIG1lc3NhZ2VzR2V0VGFpbG9yUmVzdW1lRmlsZU5hbWUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZ2V0VXNlclByb2ZpbGVcIjpcbiAgbWVzc2FnZXNHZXRVc2VyUHJvZmlsZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJnZXRWZXJzaW9uVXBkYXRlU3RhdGVcIjpcbiAgbWVzc2FnZXNHZXRWZXJzaW9uVXBkYXRlU3RhdGUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiaW5qZWN0QXNoYnlGaWVsZE1ldGFkYXRhXCI6XG4gIG1lc3NhZ2VzSW5qZWN0QXNoYnlGaWVsZE1ldGFkYXRhKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImluamVjdEhlbHBlckFwcEJ1bmRsZVwiOlxuICBtZXNzYWdlc0luamVjdEhlbHBlckFwcEJ1bmRsZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJpbmplY3RSZWFjdFNlbGVjdEZpYmVyXCI6XG4gIG1lc3NhZ2VzSW5qZWN0UmVhY3RTZWxlY3RGaWJlcih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJpbmplY3RSZWNydWl0ZWVGaWJlclwiOlxuICBtZXNzYWdlc0luamVjdFJlY3J1aXRlZUZpYmVyKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImluamVjdFdvcmthYmxlQ2hlY2tib3hcIjpcbiAgbWVzc2FnZXNJbmplY3RXb3JrYWJsZUNoZWNrYm94KHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImluamVjdFdvcmtkYXlGaWJlclwiOlxuICBtZXNzYWdlc0luamVjdFdvcmtkYXlGaWJlcih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJpbnN0YWxsTWFpbldvcmxkQWxlcnRTdXBwcmVzc29yXCI6XG4gIG1lc3NhZ2VzSW5zdGFsbE1haW5Xb3JsZEFsZXJ0U3VwcHJlc3Nvcih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJpbnRlcmNlcHRGaWxlSW5wdXRDbGlja1wiOlxuICBtZXNzYWdlc0ludGVyY2VwdEZpbGVJbnB1dENsaWNrKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImt1bGFDb21wYW55RG9tXCI6XG4gIG1lc3NhZ2VzS3VsYUNvbXBhbnlEb20oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwibGVhcm5BbnN3ZXJzXCI6XG4gIG1lc3NhZ2VzTGVhcm5BbnN3ZXJzKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImxvZ0FwcGxpY2F0aW9uXCI6XG4gIG1lc3NhZ2VzTG9nQXBwbGljYXRpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwibWFya1JlZnJlc2hSZXF1ZXN0ZWRcIjpcbiAgbWVzc2FnZXNNYXJrUmVmcmVzaFJlcXVlc3RlZCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJtYXJrV2hhdHNOZXdSZWFkXCI6XG4gIG1lc3NhZ2VzTWFya1doYXRzTmV3UmVhZCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJvcGVuQWdlbnRBcHBseVRhYlwiOlxuICBtZXNzYWdlc09wZW5BZ2VudEFwcGx5VGFiKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcIm9wZW5CcmFzc3JpbmdGdWxsUGFnZUF1dG9jb21wbGV0ZVwiOlxuICBtZXNzYWdlc09wZW5CcmFzc3JpbmdGdWxsUGFnZUF1dG9jb21wbGV0ZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJvcGVuRGF5Zm9yY2VQb2xpY3lUYWJcIjpcbiAgbWVzc2FnZXNPcGVuRGF5Zm9yY2VQb2xpY3lUYWIoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicGFyc2VQYWdlTWFya2Rvd25cIjpcbiAgbWVzc2FnZXNQYXJzZVBhZ2VNYXJrZG93bih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwaW5nXCI6XG4gIG1lc3NhZ2VzUGluZyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwb3N0QXBwbHlKb2JcIjpcbiAgbWVzc2FnZXNQb3N0QXBwbHlKb2Ioe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicG9zdEF1dG9maWxsQW5zd2VyUGFpckF0dHJpYnV0ZWRcIjpcbiAgbWVzc2FnZXNQb3N0QXV0b2ZpbGxBbnN3ZXJQYWlyQXR0cmlidXRlZCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwb3N0QXV0b2ZpbGxGZWVkYmFja1wiOlxuICBtZXNzYWdlc1Bvc3RBdXRvZmlsbEZlZWRiYWNrKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInBvc3RFdmVudFN1Ym1pdFwiOlxuICBtZXNzYWdlc1Bvc3RFdmVudFN1Ym1pdCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwb3N0RXh0ZXJuYWxKb2JJbXBvcnRcIjpcbiAgbWVzc2FnZXNQb3N0RXh0ZXJuYWxKb2JJbXBvcnQoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicG9zdFBsdWdpbkZlZWRiYWNrXCI6XG4gIG1lc3NhZ2VzUG9zdFBsdWdpbkZlZWRiYWNrKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInBvc3RTaW1pbGFySm9iUG9wdXBFeHBvc3VyZVwiOlxuICBtZXNzYWdlc1Bvc3RTaW1pbGFySm9iUG9wdXBFeHBvc3VyZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwcmVwYXJlTWV0YUNhcmVlcnNMb2NhdGlvbkNhcHR1cmVcIjpcbiAgbWVzc2FnZXNQcmVwYXJlTWV0YUNhcmVlcnNMb2NhdGlvbkNhcHR1cmUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicHJlcGFyZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmVcIjpcbiAgbWVzc2FnZXNQcmVwYXJlT3JhY2xlRWR1Y2F0aW9uTG92Q2FwdHVyZSh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwcmVwYXJlUGhlbm9tU2Nob29sQ2FwdHVyZVwiOlxuICBtZXNzYWdlc1ByZXBhcmVQaGVub21TY2hvb2xDYXB0dXJlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInByZXZpZXdCYXNlUmVzdW1lQmxvYlwiOlxuICBtZXNzYWdlc1ByZXZpZXdCYXNlUmVzdW1lQmxvYih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJwcmV2aWV3VGFpbG9yUmVzdW1lQmxvYlwiOlxuICBtZXNzYWdlc1ByZXZpZXdUYWlsb3JSZXN1bWVCbG9iKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInJlZ2VuZXJhdGVBbnN3ZXJcIjpcbiAgbWVzc2FnZXNSZWdlbmVyYXRlQW5zd2VyKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInJlbG9hZEV4dGVuc2lvblwiOlxuICBtZXNzYWdlc1JlbG9hZEV4dGVuc2lvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJyZXBvcnRBdXRvZmlsbEZpcnN0VXNlQXR0cmlidXRpb25cIjpcbiAgbWVzc2FnZXNSZXBvcnRBdXRvZmlsbEZpcnN0VXNlQXR0cmlidXRpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicmVxdWVzdEV4dGVuc2lvblVwZGF0ZUNoZWNrXCI6XG4gIG1lc3NhZ2VzUmVxdWVzdEV4dGVuc2lvblVwZGF0ZUNoZWNrKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInJlc29sdmVBZGRyZXNzU3VnZ2VzdGlvblwiOlxuICBtZXNzYWdlc1Jlc29sdmVBZGRyZXNzU3VnZ2VzdGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJyZXNvbHZlQXV0b2ZpbGxDbGllbnRTZWFyY2hTdGVwXCI6XG4gIG1lc3NhZ2VzUmVzb2x2ZUF1dG9maWxsQ2xpZW50U2VhcmNoU3RlcCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJyZXNvbHZlQXV0b2ZpbGxPcGVyYXRpb25cIjpcbiAgbWVzc2FnZXNSZXNvbHZlQXV0b2ZpbGxPcGVyYXRpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicmVzb2x2ZUNhcHR1cmVkTWV0YUNhcmVlcnNMb2NhdGlvblwiOlxuICBtZXNzYWdlc1Jlc29sdmVDYXB0dXJlZE1ldGFDYXJlZXJzTG9jYXRpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicmVzb2x2ZUNhcHR1cmVkUGhlbm9tU2Nob29sXCI6XG4gIG1lc3NhZ2VzUmVzb2x2ZUNhcHR1cmVkUGhlbm9tU2Nob29sKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcInJlc29sdmVKb2JJZEJ5VXJsXCI6XG4gIG1lc3NhZ2VzUmVzb2x2ZUpvYklkQnlVcmwoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwic2F2ZUF1dG9maWxsSW5mb1wiOlxuICBtZXNzYWdlc1NhdmVBdXRvZmlsbEluZm8oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwic2F2ZUV4dGVybmFsSm9iSWRcIjpcbiAgbWVzc2FnZXNTYXZlRXh0ZXJuYWxKb2JJZCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJzYXZlSm9iRGV0YWlsXCI6XG4gIG1lc3NhZ2VzU2F2ZUpvYkRldGFpbCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJzYXZlU3VibWl0U3RhdHVzXCI6XG4gIG1lc3NhZ2VzU2F2ZVN1Ym1pdFN0YXR1cyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJzZWFyY2hJY2ltc1Byb2ZpbGVPcHRpb25zXCI6XG4gIG1lc3NhZ2VzU2VhcmNoSWNpbXNQcm9maWxlT3B0aW9ucyh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJzZWxlY3RJY2ltc1Byb2ZpbGVPcHRpb25cIjpcbiAgbWVzc2FnZXNTZWxlY3RJY2ltc1Byb2ZpbGVPcHRpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwic2V0VGFiSm9iSWRcIjpcbiAgbWVzc2FnZXNTZXRUYWJKb2JJZCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJ1cGRhdGVBdXRvZmlsbFNlY3Rpb25cIjpcbiAgbWVzc2FnZXNVcGRhdGVBdXRvZmlsbFNlY3Rpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwidXBkYXRlUmVzdW1lQ29sbGVjdGlvblwiOlxuICBtZXNzYWdlc1VwZGF0ZVJlc3VtZUNvbGxlY3Rpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwidXBsb2FkQnJhc3NyaW5nUHJvZmlsZUJ1aWxkZXJGaWxlXCI6XG4gIG1lc3NhZ2VzVXBsb2FkQnJhc3NyaW5nUHJvZmlsZUJ1aWxkZXJGaWxlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcIndhaXRGb3JQaGVub21TY2hvb2xDYXB0dXJlXCI6XG4gIG1lc3NhZ2VzV2FpdEZvclBoZW5vbVNjaG9vbENhcHR1cmUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufSlcblxuY2hyb21lLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uKHBvcnQpIHtcbiAgZ2xvYmFsVGhpcy5fX3BsYXNtb0ludGVybmFsUG9ydE1hcC5zZXQocG9ydC5uYW1lLCBwb3J0KVxuICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgc3dpdGNoIChwb3J0Lm5hbWUpIHtcbiAgICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH0pXG59KVxuXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9hY2NlcHRBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvbi5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJhY2NlcHRBdXRvZmlsbEluc3RhbGxBdHRyaWJ1dGlvblwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcclxuXHJcbmNvbnN0IEhFTFBFUl9CVU5ETEUgPSBcImFzc2V0cy9oZWxwZXItYXBwLmpzXCJcclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZSB0aGUgaGVscGVyIG9uIGEgdGFiIGZyb20gdGhlIHBvcHVwLlxyXG4gKlxyXG4gKiBcIlJlY2VpdmluZyBlbmQgZG9lcyBub3QgZXhpc3RcIiBtZWFucyBubyBjb250ZW50IHNjcmlwdCBpcyBsaXN0ZW5pbmdcclxuICogKHBhZ2Ugb3BlbmVkIGJlZm9yZSB0aGUgZXh0ZW5zaW9uIGxvYWRlZCwgb3IgQ1Mgbm90IGluamVjdGVkIHlldCkuXHJcbiAqIFJlLWluamVjdGluZyBQbGFzbW8ncyBDUyB2aWEgc2NyaXB0aW5nIG9mdGVuIHN0aWxsIGZhaWxzIHRvIGF0dGFjaFxyXG4gKiBsaXN0ZW5lcnMsIHNvIHdlIGZhbGwgYmFjayB0byBpbmplY3RpbmcgdGhlIGhlbHBlciBidW5kbGUgZGlyZWN0bHkuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBwaW5nSWNvbkNsaWNrZWQodGFiSWQ6IG51bWJlcikge1xyXG4gIGF3YWl0IGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IG1lc3NhZ2U6IFwiaWNvbkNsaWNrZWRcIiB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbmplY3RIZWxwZXJEaXJlY3RseSh0YWJJZDogbnVtYmVyKSB7XHJcbiAgYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcclxuICAgIHRhcmdldDogeyB0YWJJZCwgYWxsRnJhbWVzOiB0cnVlIH0sXHJcbiAgICBmaWxlczogW0hFTFBFUl9CVU5ETEVdLFxyXG4gICAgd29ybGQ6IFwiSVNPTEFURURcIlxyXG4gIH0pXHJcbiAgLy8gQnVuZGxlIGF1dG8tYm9vdHM7IGNhbGwgYWdhaW4gaWYgdGhlIHBhZ2UgYWxyZWFkeSBoYWQgYSBwYXJ0aWFsIGxvYWQuXHJcbiAgYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcclxuICAgIHRhcmdldDogeyB0YWJJZCwgYWxsRnJhbWVzOiB0cnVlIH0sXHJcbiAgICB3b3JsZDogXCJJU09MQVRFRFwiLFxyXG4gICAgZnVuYzogKCkgPT4ge1xyXG4gICAgICBjb25zdCBnID0gZ2xvYmFsVGhpcyBhcyB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcclxuICAgICAgICBib290c3RyYXBKb2JyaWdodEhlbHBlclJ1bnRpbWU/OiAoKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxyXG4gICAgICAgIG9wZW5Kb2JyaWdodEhlbHBlckZyb21FeHRlbnNpb25JY29uPzogKCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBib290ID1cclxuICAgICAgICBnLmJvb3RzdHJhcEpvYnJpZ2h0SGVscGVyUnVudGltZSB8fCBnLm9wZW5Kb2JyaWdodEhlbHBlckZyb21FeHRlbnNpb25JY29uXHJcbiAgICAgIGlmICh0eXBlb2YgYm9vdCA9PT0gXCJmdW5jdGlvblwiKSB2b2lkIGJvb3QoKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVzdHJpY3RlZFVybCh1cmw/OiBzdHJpbmcpIHtcclxuICBpZiAoIXVybCkgcmV0dXJuIHRydWVcclxuICByZXR1cm4gL14oY2hyb21lfGNocm9tZS1leHRlbnNpb258ZWRnZXxhYm91dHxkZXZ0b29sc3x2aWV3LXNvdXJjZSk6L2kudGVzdChcclxuICAgIHVybFxyXG4gIClcclxufVxyXG5cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyPHsgdGFiSWQ/OiBudW1iZXIgfT4gPSBhc3luYyAoXHJcbiAgcmVxLFxyXG4gIHJlc1xyXG4pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdGFiSWQgPSByZXEuYm9keT8udGFiSWRcclxuICAgIGlmICh0eXBlb2YgdGFiSWQgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgcmVzLnNlbmQoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwibWlzc2luZ190YWJcIiB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YWIgPSBhd2FpdCBjaHJvbWUudGFicy5nZXQodGFiSWQpXHJcbiAgICBpZiAoaXNSZXN0cmljdGVkVXJsKHRhYi51cmwpKSB7XHJcbiAgICAgIHJlcy5zZW5kKHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogXCJPcGVuIGEgam9iIGFwcGxpY2F0aW9uIHBhZ2UgKG5vdCBhIGJyb3dzZXIgaW50ZXJuYWwgcGFnZSkuXCJcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgcGluZ0ljb25DbGlja2VkKHRhYklkKVxyXG4gICAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IHRydWUsIG1vZGU6IFwiY29udGVudF9zY3JpcHRcIiB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH0gY2F0Y2ggKHBpbmdFcnJvcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCJbYWN0aXZhdGVIZWxwZXJPblRhYl0gY29udGVudCBzY3JpcHQgbWlzc2luZywgaW5qZWN0aW5nIGhlbHBlciBkaXJlY3RseTpcIixcclxuICAgICAgICBwaW5nRXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IHBpbmdFcnJvci5tZXNzYWdlIDogcGluZ0Vycm9yXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBpbmplY3RIZWxwZXJEaXJlY3RseSh0YWJJZClcclxuICAgIHJlcy5zZW5kKHsgc3VjY2VzczogdHJ1ZSwgbW9kZTogXCJkaXJlY3RfaW5qZWN0XCIgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlthY3RpdmF0ZUhlbHBlck9uVGFiXSBmYWlsZWQ6XCIsIGVycm9yKVxyXG4gICAgcmVzLnNlbmQoe1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6XHJcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxyXG4gICAgICAgICAgPyBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgICA6IFwiQ291bGQgbm90IGFjdGl2YXRlIGhlbHBlciDigJQgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uXCJcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxyXG5cclxuaW1wb3J0IHtcclxuICBnZXRPcmFjbGVDYXB0dXJlLFxyXG4gIHVwZGF0ZU9yYWNsZUNhcHR1cmVJdGVtc1xyXG59IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvb3JhY2xlLWxvdi1jYXB0dXJlXCJcclxuXHJcbmNvbnN0IFJFQURfUEFHRV9DQVBUVVJFID0gZnVuY3Rpb24gcmVhZE9yYWNsZUxvdkZyb21QYWdlKCkge1xyXG4gIGNvbnN0IHcgPSB3aW5kb3cgYXMgdW5rbm93biBhcyB7XHJcbiAgICBfX2pyT3JhY2xlTG92PzogeyBpdGVtczogdW5rbm93bltdOyBsYXN0VXJsOiBzdHJpbmc7IGNhcHR1cmVJZDogc3RyaW5nIH1cclxuICB9XHJcbiAgcmV0dXJuIHcuX19qck9yYWNsZUxvdiB8fCBudWxsXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYXB0dXJlSWQgPVxyXG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LmNhcHR1cmVJZCA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LmNhcHR1cmVJZCA6IFwiXCJcclxuICAgIGlmICghY2FwdHVyZUlkKSB7XHJcbiAgICAgIHJlcy5zZW5kKHsgb2s6IGZhbHNlLCBtZXNzYWdlOiBcImNhcHR1cmVJZF9yZXF1aXJlZFwiLCBpdGVtczogW10gfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFiSWQgPVxyXG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LnRhYklkID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyByZXEuYm9keS50YWJJZFxyXG4gICAgICAgIDogKFxyXG4gICAgICAgICAgICBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KVxyXG4gICAgICAgICAgKVswXT8uaWRcclxuXHJcbiAgICBsZXQgcGFnZUl0ZW1zOiB1bmtub3duW10gPSBbXVxyXG4gICAgaWYgKHRhYklkKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xyXG4gICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxyXG4gICAgICAgIHdvcmxkOiBcIk1BSU5cIixcclxuICAgICAgICBmdW5jOiBSRUFEX1BBR0VfQ0FQVFVSRVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBwYWdlID0gcmVzdWx0cz8uWzBdPy5yZXN1bHQgYXMge1xyXG4gICAgICAgIGl0ZW1zPzogdW5rbm93bltdXHJcbiAgICAgICAgY2FwdHVyZUlkPzogc3RyaW5nXHJcbiAgICAgIH0gfCBudWxsXHJcbiAgICAgIGlmIChwYWdlPy5pdGVtcz8ubGVuZ3RoKSB7XHJcbiAgICAgICAgcGFnZUl0ZW1zID0gcGFnZS5pdGVtc1xyXG4gICAgICAgIHVwZGF0ZU9yYWNsZUNhcHR1cmVJdGVtcyhjYXB0dXJlSWQsIHBhZ2VJdGVtcylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3JlZCA9IGdldE9yYWNsZUNhcHR1cmUoY2FwdHVyZUlkKVxyXG4gICAgY29uc3QgaXRlbXMgPSBwYWdlSXRlbXMubGVuZ3RoID8gcGFnZUl0ZW1zIDogc3RvcmVkPy5pdGVtcyB8fCBbXVxyXG5cclxuICAgIHJlcy5zZW5kKHtcclxuICAgICAgb2s6IHRydWUsXHJcbiAgICAgIGNhcHR1cmVJZCxcclxuICAgICAgaXRlbXMsXHJcbiAgICAgIGZpZWxkOiBzdG9yZWQ/LmZpZWxkLFxyXG4gICAgICBzZWFyY2g6IHN0b3JlZD8uc2VhcmNoXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzLnNlbmQoe1xyXG4gICAgICBvazogZmFsc2UsXHJcbiAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiY29uc3VtZV9mYWlsZWRcIlxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwidHlwZSBDYXB0dXJlID0ge1xyXG4gIGZpZWxkOiBzdHJpbmdcclxuICBzZWFyY2g6IHN0cmluZ1xyXG4gIGl0ZW1zOiB1bmtub3duW11cclxuICBjcmVhdGVkQXQ6IG51bWJlclxyXG59XHJcblxyXG5jb25zdCBjYXB0dXJlcyA9IG5ldyBNYXA8c3RyaW5nLCBDYXB0dXJlPigpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0T3JhY2xlQ2FwdHVyZShcclxuICBpZDogc3RyaW5nLFxyXG4gIGRhdGE6IHsgZmllbGQ6IHN0cmluZzsgc2VhcmNoOiBzdHJpbmc7IGl0ZW1zOiB1bmtub3duW10gfVxyXG4pIHtcclxuICBjYXB0dXJlcy5zZXQoaWQsIHsgLi4uZGF0YSwgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmFjbGVDYXB0dXJlKGlkOiBzdHJpbmcpIHtcclxuICByZXR1cm4gY2FwdHVyZXMuZ2V0KGlkKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT3JhY2xlQ2FwdHVyZUl0ZW1zKGlkOiBzdHJpbmcsIGl0ZW1zOiB1bmtub3duW10pIHtcclxuICBjb25zdCBwcmV2ID0gY2FwdHVyZXMuZ2V0KGlkKVxyXG4gIGlmICghcHJldikge1xyXG4gICAgY2FwdHVyZXMuc2V0KGlkLCB7XHJcbiAgICAgIGZpZWxkOiBcIlwiLFxyXG4gICAgICBzZWFyY2g6IFwiXCIsXHJcbiAgICAgIGl0ZW1zLFxyXG4gICAgICBjcmVhdGVkQXQ6IERhdGUubm93KClcclxuICAgIH0pXHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgY2FwdHVyZXMuc2V0KGlkLCB7IC4uLnByZXYsIGl0ZW1zIH0pXHJcbn1cclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvY29udmVydFJlc3VtZVBkZlRvV29yZC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJjb252ZXJ0UmVzdW1lUGRmVG9Xb3JkXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2NvdW50RXh0ZXJuYWxKb2JJZHMuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiY291bnRFeHRlcm5hbEpvYklkc1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9mbHVzaEF1dG9maWxsSW5zdGFsbEF0dHJpYnV0aW9uLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImZsdXNoQXV0b2ZpbGxJbnN0YWxsQXR0cmlidXRpb25cIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2VuZXJhdGVBdXRvZmlsbENvdmVyTGV0dGVyLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdlbmVyYXRlQXV0b2ZpbGxDb3ZlckxldHRlclwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBYlVzZXIuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0QWJVc2VyXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB7IHNvZnRFbXB0eSB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNvZnRFbXB0eShcImdldEFkZHJlc3NTdWdnZXN0aW9uc1wiLCBcInN1Z2dlc3Rpb25zXCIpXHJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxyXG5cclxuLyoqIFNvZnQgc3VjY2VzcyBmb3IgSm9icmlnaHQgdGVsZW1ldHJ5IC8gYXR0cmlidXRpb24gbWVzc2FnZXMgd2UgZG8gbm90IG1pcnJvci4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNvZnRPayhcclxuICBoYW5kbGVyOiBzdHJpbmcsXHJcbiAgZXh0cmE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge31cclxuKTogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyIHtcclxuICByZXR1cm4gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzLnNlbmQoe1xyXG4gICAgICBvazogdHJ1ZSxcclxuICAgICAgc3R1YjogdHJ1ZSxcclxuICAgICAgaGFuZGxlcixcclxuICAgICAgLi4uZXh0cmFcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG4vKiogU29mdCBlbXB0eSBwYXlsb2FkIGZvciBzdWdnZXN0aW9uIC8gc2VhcmNoIHN0dWJzLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc29mdEVtcHR5KFxyXG4gIGhhbmRsZXI6IHN0cmluZyxcclxuICBrZXkgPSBcInJlc3VsdHNcIlxyXG4pOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIge1xyXG4gIHJldHVybiBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIG9rOiB0cnVlLFxyXG4gICAgICBzdHViOiB0cnVlLFxyXG4gICAgICBoYW5kbGVyLFxyXG4gICAgICBba2V5XTogW11cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEFnZW50Q292ZXJMZXR0ZXIuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0QWdlbnRDb3ZlckxldHRlclwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBZ2VudFFMUnVsZS5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRBZ2VudFFMUnVsZVwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBZ2VudFRhaWxvclJlc3VtZS5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRBZ2VudFRhaWxvclJlc3VtZVwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRBdXRvZmlsbENvbmZpZy5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRBdXRvZmlsbENvbmZpZ1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuaW1wb3J0IHsgZmV0Y2hBdXRvZmlsbEluZm8gfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXG5pbXBvcnQgeyBodWJUb0pvYnJpZ2h0QXV0b2ZpbGwgfSBmcm9tIFwifmxpYi9odWItdG8tam9icmlnaHRcIlxuXG4vKipcbiAqIFJldHVybnMgYXV0b2ZpbGwgcGF5bG9hZCBmb3IgdGhlIHNlbGVjdGVkIHRlYW0gcHJvZmlsZS5cbiAqIGBkYXRhYCBpcyBKb2JyaWdodC1zaGFwZWQgZm9yIHRoZSBlbmdpbmUgcnVudGltZTsgYGF1dG9maWxsSW5mb2Aga2VlcHMgaHViIHNoYXBlLlxuICogQm9keTogeyBmb3JjZVJlZnJlc2g/OiBib29sZWFuLCBwcm9maWxlSWQ/OiBzdHJpbmcgfVxuICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9maWxlSWQgPVxuICAgICAgdHlwZW9mIHJlcS5ib2R5Py5wcm9maWxlSWQgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5wcm9maWxlSWQgOiBudWxsXG4gICAgY29uc3QgaHViID0gYXdhaXQgZmV0Y2hBdXRvZmlsbEluZm8ocHJvZmlsZUlkKVxuXG4gICAgaWYgKCFodWIpIHtcbiAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgb2s6IGZhbHNlLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICBhdXRvZmlsbEluZm86IG51bGwsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgXCJObyBwcm9maWxlIHNlbGVjdGVkIG9yIHRlYW0gaHViIG5vdCBjb25uZWN0ZWQuIE9wZW4gZXh0ZW5zaW9uIG9wdGlvbnMuXCJcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gaHViVG9Kb2JyaWdodEF1dG9maWxsKGh1YilcblxuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgZGF0YSxcbiAgICAgIGF1dG9maWxsSW5mbzogaHViLFxuICAgICAgYXV0b1VwZGF0ZTogdHJ1ZSxcbiAgICAgIHJldmlzaW9uOiBudWxsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnNlbmQoe1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGF1dG9maWxsSW5mbzogbnVsbCxcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcImZldGNoX2ZhaWxlZFwiXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCIvKipcbiAqIFRlYW0gQXV0b2ZpbGwgSHViIGNsaWVudCDigJQgdGFsa3MgdG8gdGVhbS1zaXRlIC9hcGkgd2l0aCBzZXNzaW9uIEpXVCBvciBBUEkgdG9rZW4uXG4gKi9cblxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCJAcGxhc21vaHEvc3RvcmFnZVwiXG5cbmltcG9ydCB7IFRFQU1fU0lURV9VUkwsIGdldEh1YlVybCB9IGZyb20gXCJ+YXBpL2Vudi1yZXNvbHZlclwiXG5pbXBvcnQgdHlwZSB7IEF1dG9maWxsSW5mb1BheWxvYWQsIFByb2ZpbGVTdW1tYXJ5LCBUZWFtU2V0dGluZ3MgfSBmcm9tIFwifmFwaS90ZWFtLXR5cGVzXCJcblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKHsgYXJlYTogXCJsb2NhbFwiIH0pXG5cbmV4cG9ydCBjb25zdCBURUFNX1NFVFRJTkdTX0tFWSA9IFwidGVhbUh1YlNldHRpbmdzXCJcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVEVBTV9TRVRUSU5HUzogVGVhbVNldHRpbmdzID0ge1xuICBzaXRlVXJsOiBnZXRIdWJVcmwoKSxcbiAgYXBpVG9rZW46IFwiXCIsXG4gIHNlbGVjdGVkUHJvZmlsZUlkOiBudWxsLFxuICB1c2VyRW1haWw6IFwiXCIsXG4gIHVzZXJOYW1lOiBcIlwiXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZWFtU2V0dGluZ3MoKTogUHJvbWlzZTxUZWFtU2V0dGluZ3M+IHtcbiAgY29uc3Qgc2F2ZWQgPSBhd2FpdCBzdG9yYWdlLmdldDxUZWFtU2V0dGluZ3M+KFRFQU1fU0VUVElOR1NfS0VZKVxuICByZXR1cm4geyAuLi5ERUZBVUxUX1RFQU1fU0VUVElOR1MsIC4uLihzYXZlZCB8fCB7fSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZVRlYW1TZXR0aW5ncyhcbiAgcGF0Y2g6IFBhcnRpYWw8VGVhbVNldHRpbmdzPlxuKTogUHJvbWlzZTxUZWFtU2V0dGluZ3M+IHtcbiAgY29uc3QgbmV4dCA9IHsgLi4uKGF3YWl0IGdldFRlYW1TZXR0aW5ncygpKSwgLi4ucGF0Y2ggfVxuICBhd2FpdCBzdG9yYWdlLnNldChURUFNX1NFVFRJTkdTX0tFWSwgbmV4dClcbiAgcmV0dXJuIG5leHRcbn1cblxuZnVuY3Rpb24gam9pblVybChiYXNlOiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xuICBjb25zdCByb290ID0gYmFzZS5yZXBsYWNlKC9cXC8rJC8sIFwiXCIpXG4gIGNvbnN0IHAgPSBwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpID8gcGF0aCA6IGAvJHtwYXRofWBcbiAgcmV0dXJuIGAke3Jvb3R9JHtwfWBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlYW1GZXRjaDxUID0gdW5rbm93bj4oXG4gIHBhdGg6IHN0cmluZyxcbiAgaW5pdDogUmVxdWVzdEluaXQgPSB7fVxuKTogUHJvbWlzZTx7IG9rOiBib29sZWFuOyBzdGF0dXM6IG51bWJlcjsgZGF0YTogVCB9PiB7XG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0VGVhbVNldHRpbmdzKClcbiAgaWYgKCFzZXR0aW5ncy5hcGlUb2tlbikge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBzdGF0dXM6IDQwMSxcbiAgICAgIGRhdGE6IHsgb2s6IGZhbHNlLCBlcnJvcjogXCJub3Rfc2lnbmVkX2luXCIgfSBhcyBUXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKGluaXQuaGVhZGVycyB8fCB7fSlcbiAgaGVhZGVycy5zZXQoXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHtzZXR0aW5ncy5hcGlUb2tlbn1gKVxuICBpZiAoaW5pdC5ib2R5ICYmICEoaW5pdC5ib2R5IGluc3RhbmNlb2YgRm9ybURhdGEpICYmICFoZWFkZXJzLmhhcyhcIkNvbnRlbnQtVHlwZVwiKSkge1xuICAgIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKVxuICB9XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goam9pblVybChzZXR0aW5ncy5zaXRlVXJsLCBwYXRoKSwge1xuICAgIC4uLmluaXQsXG4gICAgaGVhZGVyc1xuICB9KVxuXG4gIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpIHx8IFwiXCJcbiAgbGV0IGRhdGE6IFRcbiAgaWYgKGNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgIGRhdGEgPSAoYXdhaXQgcmVzLmpzb24oKSkgYXMgVFxuICB9IGVsc2Uge1xuICAgIGRhdGEgPSAoYXdhaXQgcmVzLnRleHQoKSkgYXMgVFxuICB9XG5cbiAgcmV0dXJuIHsgb2s6IHJlcy5vaywgc3RhdHVzOiByZXMuc3RhdHVzLCBkYXRhIH1cbn1cblxuLyoqIFNpZ24gaW4gd2l0aCBodWIgZW1haWwvcGFzc3dvcmQ7IHN0b3JlcyBzZXNzaW9uIEpXVCBmb3IgQVBJIGNhbGxzLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25JbldpdGhQYXNzd29yZChvcHRzOiB7XG4gIHNpdGVVcmw/OiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICBwYXNzd29yZDogc3RyaW5nXG59KTogUHJvbWlzZTx7XG4gIG9rOiBib29sZWFuXG4gIGVycm9yPzogc3RyaW5nXG4gIHVzZXI/OiB7IGVtYWlsOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9XG59PiB7XG4gIGNvbnN0IGN1cnJlbnQgPSBhd2FpdCBnZXRUZWFtU2V0dGluZ3MoKVxuICBjb25zdCBzaXRlVXJsID0gKG9wdHMuc2l0ZVVybCB8fCBjdXJyZW50LnNpdGVVcmwgfHwgVEVBTV9TSVRFX1VSTCkucmVwbGFjZShcbiAgICAvXFwvKyQvLFxuICAgIFwiXCJcbiAgKVxuICBjb25zdCBlbWFpbCA9IG9wdHMuZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgY29uc3QgcGFzc3dvcmQgPSBvcHRzLnBhc3N3b3JkXG5cbiAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICByZXR1cm4geyBvazogZmFsc2UsIGVycm9yOiBcIkVtYWlsIGFuZCBwYXNzd29yZCByZXF1aXJlZFwiIH1cbiAgfVxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGpvaW5Vcmwoc2l0ZVVybCwgXCIvYXBpL2F1dGgvbG9naW5cIiksIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KVxuICB9KVxuXG4gIGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzLmpzb24oKS5jYXRjaCgoKSA9PiBudWxsKSkgYXMge1xuICAgIG9rPzogYm9vbGVhblxuICAgIGVycm9yPzogc3RyaW5nXG4gICAgdG9rZW4/OiBzdHJpbmdcbiAgICB1c2VyPzogeyBlbWFpbDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGlkOiBzdHJpbmcgfVxuICB9IHwgbnVsbFxuXG4gIGlmICghcmVzLm9rIHx8ICFkYXRhPy5vayB8fCAhZGF0YS50b2tlbiB8fCAhZGF0YS51c2VyKSB7XG4gICAgY29uc3QgZXJyID0gZGF0YT8uZXJyb3JcbiAgICBpZiAoZXJyID09PSBcImludmFsaWRfY3JlZGVudGlhbHNcIikge1xuICAgICAgcmV0dXJuIHsgb2s6IGZhbHNlLCBlcnJvcjogXCJXcm9uZyBlbWFpbCBvciBwYXNzd29yZFwiIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgb2s6IGZhbHNlLCBlcnJvcjogZXJyIHx8IFwiU2lnbi1pbiBmYWlsZWRcIiB9XG4gIH1cblxuICBhd2FpdCBzYXZlVGVhbVNldHRpbmdzKHtcbiAgICBzaXRlVXJsLFxuICAgIGFwaVRva2VuOiBkYXRhLnRva2VuLFxuICAgIHVzZXJFbWFpbDogZGF0YS51c2VyLmVtYWlsLFxuICAgIHVzZXJOYW1lOiBkYXRhLnVzZXIubmFtZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgb2s6IHRydWUsXG4gICAgdXNlcjogeyBlbWFpbDogZGF0YS51c2VyLmVtYWlsLCBuYW1lOiBkYXRhLnVzZXIubmFtZSB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHNhdmVUZWFtU2V0dGluZ3Moe1xuICAgIGFwaVRva2VuOiBcIlwiLFxuICAgIHVzZXJFbWFpbDogXCJcIixcbiAgICB1c2VyTmFtZTogXCJcIixcbiAgICBzZWxlY3RlZFByb2ZpbGVJZDogbnVsbFxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdFByb2ZpbGVzKCk6IFByb21pc2U8UHJvZmlsZVN1bW1hcnlbXT4ge1xuICBjb25zdCB7IG9rLCBkYXRhIH0gPSBhd2FpdCB0ZWFtRmV0Y2g8e1xuICAgIG9rOiBib29sZWFuXG4gICAgcHJvZmlsZXM/OiBQcm9maWxlU3VtbWFyeVtdXG4gICAgZXJyb3I/OiBzdHJpbmdcbiAgfT4oXCIvYXBpL3YxL3Byb2ZpbGVzXCIpXG4gIGlmICghb2sgfHwgIWRhdGEub2sgfHwgIWRhdGEucHJvZmlsZXMpIHJldHVybiBbXVxuICByZXR1cm4gZGF0YS5wcm9maWxlc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBdXRvZmlsbEluZm8oXG4gIHByb2ZpbGVJZD86IHN0cmluZyB8IG51bGxcbik6IFByb21pc2U8QXV0b2ZpbGxJbmZvUGF5bG9hZCB8IG51bGw+IHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBnZXRUZWFtU2V0dGluZ3MoKVxuICBjb25zdCBpZCA9IHByb2ZpbGVJZCB8fCBzZXR0aW5ncy5zZWxlY3RlZFByb2ZpbGVJZFxuICBpZiAoIWlkKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHsgb2ssIGRhdGEgfSA9IGF3YWl0IHRlYW1GZXRjaDx7XG4gICAgb2s6IGJvb2xlYW5cbiAgICBhdXRvZmlsbEluZm8/OiBBdXRvZmlsbEluZm9QYXlsb2FkXG4gIH0+KGAvYXBpL3YxL3Byb2ZpbGVzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX0/YXV0b2ZpbGw9MWApXG5cbiAgaWYgKCFvayB8fCAhZGF0YS5vayB8fCAhZGF0YS5hdXRvZmlsbEluZm8pIHJldHVybiBudWxsXG4gIHJldHVybiBkYXRhLmF1dG9maWxsSW5mb1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXN1bWVCbG9iKFxuICByZXN1bWVJZDogc3RyaW5nXG4pOiBQcm9taXNlPHsgYmxvYjogQmxvYjsgZmlsZU5hbWU6IHN0cmluZzsgbWltZVR5cGU6IHN0cmluZyB9IHwgbnVsbD4ge1xuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFRlYW1TZXR0aW5ncygpXG4gIGlmICghc2V0dGluZ3MuYXBpVG9rZW4pIHJldHVybiBudWxsXG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgam9pblVybChzZXR0aW5ncy5zaXRlVXJsLCBgL2FwaS92MS9yZXN1bWVzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHJlc3VtZUlkKX0vZG93bmxvYWRgKSxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXR0aW5ncy5hcGlUb2tlbn1gIH1cbiAgICB9XG4gIClcbiAgaWYgKCFyZXMub2spIHJldHVybiBudWxsXG5cbiAgY29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKClcbiAgY29uc3QgZGlzcG9zaXRpb24gPSByZXMuaGVhZGVycy5nZXQoXCJjb250ZW50LWRpc3Bvc2l0aW9uXCIpIHx8IFwiXCJcbiAgY29uc3QgbWF0Y2ggPSAvZmlsZW5hbWU9XCIoW15cIl0rKVwiL2kuZXhlYyhkaXNwb3NpdGlvbilcbiAgcmV0dXJuIHtcbiAgICBibG9iLFxuICAgIGZpbGVOYW1lOiBtYXRjaD8uWzFdIHx8IFwicmVzdW1lLnBkZlwiLFxuICAgIG1pbWVUeXBlOiByZXMuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIikgfHwgYmxvYi50eXBlIHx8IFwiYXBwbGljYXRpb24vcGRmXCJcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb3ZlckxldHRlckJsb2IoXG4gIGNvdmVyTGV0dGVySWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx7IGJsb2I6IEJsb2I7IGZpbGVOYW1lOiBzdHJpbmc7IG1pbWVUeXBlOiBzdHJpbmcgfSB8IG51bGw+IHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBnZXRUZWFtU2V0dGluZ3MoKVxuICBpZiAoIXNldHRpbmdzLmFwaVRva2VuKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGpvaW5VcmwoXG4gICAgICBzZXR0aW5ncy5zaXRlVXJsLFxuICAgICAgYC9hcGkvdjEvY292ZXItbGV0dGVycy8ke2VuY29kZVVSSUNvbXBvbmVudChjb3ZlckxldHRlcklkKX0vZG93bmxvYWRgXG4gICAgKSxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXR0aW5ncy5hcGlUb2tlbn1gIH1cbiAgICB9XG4gIClcbiAgaWYgKCFyZXMub2spIHJldHVybiBudWxsXG5cbiAgY29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKClcbiAgY29uc3QgZGlzcG9zaXRpb24gPSByZXMuaGVhZGVycy5nZXQoXCJjb250ZW50LWRpc3Bvc2l0aW9uXCIpIHx8IFwiXCJcbiAgY29uc3QgbWF0Y2ggPSAvZmlsZW5hbWU9XCIoW15cIl0rKVwiL2kuZXhlYyhkaXNwb3NpdGlvbilcbiAgcmV0dXJuIHtcbiAgICBibG9iLFxuICAgIGZpbGVOYW1lOiBtYXRjaD8uWzFdIHx8IFwiY292ZXItbGV0dGVyLnBkZlwiLFxuICAgIG1pbWVUeXBlOiByZXMuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIikgfHwgYmxvYi50eXBlIHx8IFwiYXBwbGljYXRpb24vcGRmXCJcbiAgfVxufVxuXG4vKiogTWVyZ2UgbGVhcm5lZCBR4oaSQSBpbnRvIHRoZSBzZWxlY3RlZCBwcm9maWxlIG9uIHRoZSBodWIgKGdsb2JhbCArIG9wdGlvbmFsIHNpdGUvc3RlcCkuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWVyZ2VQcm9maWxlQW5zd2VycyhcbiAgYW5zd2VyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgcHJvZmlsZUlkPzogc3RyaW5nIHwgbnVsbCxcbiAgc2NvcGU/OiB7XG4gICAgc2NvcGVLZXk/OiBzdHJpbmcgfCBudWxsXG4gICAgaG9zdG5hbWU/OiBzdHJpbmcgfCBudWxsXG4gICAgc3RlcEtleT86IHN0cmluZyB8IG51bGxcbiAgfSB8IG51bGxcbik6IFByb21pc2U8e1xuICBvazogYm9vbGVhblxuICBhbnN3ZXJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICBleHRyYXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBlcnJvcj86IHN0cmluZ1xufT4ge1xuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFRlYW1TZXR0aW5ncygpXG4gIGNvbnN0IGlkID0gcHJvZmlsZUlkIHx8IHNldHRpbmdzLnNlbGVjdGVkUHJvZmlsZUlkXG4gIGlmICghaWQpIHJldHVybiB7IG9rOiBmYWxzZSwgZXJyb3I6IFwibm9fcHJvZmlsZVwiIH1cbiAgaWYgKCFPYmplY3Qua2V5cyhhbnN3ZXJzKS5sZW5ndGgpIHJldHVybiB7IG9rOiBmYWxzZSwgZXJyb3I6IFwiZW1wdHlcIiB9XG5cbiAgY29uc3QgYm9keTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgYW5zd2VycyxcbiAgICBhbnN3ZXJzTW9kZTogXCJtZXJnZVwiXG4gIH1cbiAgaWYgKHNjb3BlPy5zY29wZUtleSkge1xuICAgIGJvZHkuc2NvcGVLZXkgPSBzY29wZS5zY29wZUtleVxuICAgIGlmIChzY29wZS5ob3N0bmFtZSkgYm9keS5ob3N0bmFtZSA9IHNjb3BlLmhvc3RuYW1lXG4gICAgaWYgKHNjb3BlLnN0ZXBLZXkpIGJvZHkuc3RlcEtleSA9IHNjb3BlLnN0ZXBLZXlcbiAgfVxuXG4gIGNvbnN0IHsgb2ssIGRhdGEgfSA9IGF3YWl0IHRlYW1GZXRjaDx7XG4gICAgb2s6IGJvb2xlYW5cbiAgICBhbnN3ZXJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGV4dHJhcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgZXJyb3I/OiBzdHJpbmdcbiAgfT4oYC9hcGkvdjEvcHJvZmlsZXMvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWAsIHtcbiAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICB9KVxuXG4gIGlmICghb2sgfHwgIWRhdGEub2spIHtcbiAgICByZXR1cm4geyBvazogZmFsc2UsIGVycm9yOiBkYXRhLmVycm9yIHx8IFwic2F2ZV9mYWlsZWRcIiB9XG4gIH1cbiAgcmV0dXJuIHsgb2s6IHRydWUsIGFuc3dlcnM6IGRhdGEuYW5zd2VycywgZXh0cmFzOiBkYXRhLmV4dHJhcyB9XG59XG5cbi8qKiBMb2cgYSBzdWNjZXNzZnVsIGpvYiBhcHBsaWNhdGlvbiB0byB0aGUgaHViIEdvb2dsZSBTaGVldC4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dBcHBsaWNhdGlvbihyb3c6IHtcbiAgcHJvZmlsZUlkPzogc3RyaW5nIHwgbnVsbFxuICBjb3VudHJ5Pzogc3RyaW5nXG4gIHJlc3VtZT86IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGxpbms6IHN0cmluZ1xuICBjb21wYW55Pzogc3RyaW5nXG4gIGNvc3Q/OiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG4gIG90aGVyPzogc3RyaW5nXG4gIHRhYk5hbWU/OiBzdHJpbmdcbn0pOiBQcm9taXNlPHsgb2s6IGJvb2xlYW47IGVycm9yPzogc3RyaW5nOyBtZXNzYWdlPzogc3RyaW5nOyB0YWJOYW1lPzogc3RyaW5nIH0+IHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBnZXRUZWFtU2V0dGluZ3MoKVxuICBjb25zdCBwcm9maWxlSWQgPSByb3cucHJvZmlsZUlkIHx8IHNldHRpbmdzLnNlbGVjdGVkUHJvZmlsZUlkXG4gIGNvbnN0IHsgb2ssIGRhdGEgfSA9IGF3YWl0IHRlYW1GZXRjaDx7XG4gICAgb2s6IGJvb2xlYW5cbiAgICBlcnJvcj86IHN0cmluZ1xuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbiAgICB0YWJOYW1lPzogc3RyaW5nXG4gIH0+KFwiL2FwaS92MS9hcHBsaWNhdGlvbnMvbG9nXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnJvdyxcbiAgICAgIHByb2ZpbGVJZDogcHJvZmlsZUlkIHx8IHVuZGVmaW5lZCxcbiAgICAgIHN0YXR1czogcm93LnN0YXR1cyB8fCBcImFwcGxpZWRcIlxuICAgIH0pXG4gIH0pXG4gIGlmICghb2sgfHwgIWRhdGEub2spIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgZXJyb3I6IGRhdGEuZXJyb3IgfHwgXCJsb2dfZmFpbGVkXCIsXG4gICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXG4gICAgICB0YWJOYW1lOiBkYXRhLnRhYk5hbWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgb2s6IHRydWUsIHRhYk5hbWU6IGRhdGEudGFiTmFtZSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlUZWFtQ29ubmVjdGlvbigpOiBQcm9taXNlPHtcbiAgb2s6IGJvb2xlYW5cbiAgZW1haWw/OiBzdHJpbmdcbiAgbmFtZT86IHN0cmluZ1xuICBlcnJvcj86IHN0cmluZ1xufT4ge1xuICBjb25zdCB7IG9rLCBkYXRhIH0gPSBhd2FpdCB0ZWFtRmV0Y2g8e1xuICAgIG9rOiBib29sZWFuXG4gICAgdXNlcj86IHsgZW1haWw6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1cbiAgICBlcnJvcj86IHN0cmluZ1xuICB9PihcIi9hcGkvYXV0aC9tZVwiKVxuXG4gIGlmICghb2sgfHwgIWRhdGEub2sgfHwgIWRhdGEudXNlcikge1xuICAgIHJldHVybiB7IG9rOiBmYWxzZSwgZXJyb3I6IGRhdGEuZXJyb3IgfHwgXCJ1bmF1dGhvcml6ZWRcIiB9XG4gIH1cbiAgcmV0dXJuIHsgb2s6IHRydWUsIGVtYWlsOiBkYXRhLnVzZXIuZW1haWwsIG5hbWU6IGRhdGEudXNlci5uYW1lIH1cbn1cbiIsImltcG9ydCBtIGZyb21cInBpZnlcIjt2YXIgbD0oKT0+e3RyeXtsZXQgZT0oZ2xvYmFsVGhpcy5uYXZpZ2F0b3I/LnVzZXJBZ2VudCkubWF0Y2goLyhvcGVyYXxjaHJvbWV8c2FmYXJpfGZpcmVmb3h8bXNpZXx0cmlkZW50KD89XFwvKSlcXC8/XFxzKihcXGQrKS9pKXx8W107aWYoZVsxXT09PVwiQ2hyb21lXCIpcmV0dXJuIHBhcnNlSW50KGVbMl0pPDEwMHx8Z2xvYmFsVGhpcy5jaHJvbWUucnVudGltZT8uZ2V0TWFuaWZlc3QoKT8ubWFuaWZlc3RfdmVyc2lvbj09PTJ9Y2F0Y2h7cmV0dXJuITF9cmV0dXJuITF9O3ZhciBvPWNsYXNzeyNyOyN0O2dldCBwcmltYXJ5Q2xpZW50KCl7cmV0dXJuIHRoaXMuI3R9I2U7Z2V0IHNlY29uZGFyeUNsaWVudCgpe3JldHVybiB0aGlzLiNlfSNhO2dldCBhcmVhKCl7cmV0dXJuIHRoaXMuI2F9Z2V0IGhhc1dlYkFwaSgpe3RyeXtyZXR1cm4gdHlwZW9mIHdpbmRvdzxcInVcIiYmISF3aW5kb3cubG9jYWxTdG9yYWdlfWNhdGNoKGUpe3JldHVybiBjb25zb2xlLmVycm9yKGUpLCExfX0jcz1uZXcgTWFwOyNpO2dldCBjb3BpZWRLZXlTZXQoKXtyZXR1cm4gdGhpcy4jaX1pc0NvcGllZD1lPT50aGlzLmhhc1dlYkFwaSYmKHRoaXMuYWxsQ29waWVkfHx0aGlzLmNvcGllZEtleVNldC5oYXMoZSkpOyNuPSExO2dldCBhbGxDb3BpZWQoKXtyZXR1cm4gdGhpcy4jbn1nZXRFeHRTdG9yYWdlQXBpPSgpPT5nbG9iYWxUaGlzLmJyb3dzZXI/LnN0b3JhZ2V8fGdsb2JhbFRoaXMuY2hyb21lPy5zdG9yYWdlO2dldCBoYXNFeHRlbnNpb25BcGkoKXt0cnl7cmV0dXJuISF0aGlzLmdldEV4dFN0b3JhZ2VBcGkoKX1jYXRjaChlKXtyZXR1cm4gY29uc29sZS5lcnJvcihlKSwhMX19aXNXYXRjaFN1cHBvcnRlZD0oKT0+dGhpcy5oYXNFeHRlbnNpb25BcGk7a2V5TmFtZXNwYWNlPVwiXCI7aXNWYWxpZEtleT1lPT5lLnN0YXJ0c1dpdGgodGhpcy5rZXlOYW1lc3BhY2UpO2dldE5hbWVzcGFjZWRLZXk9ZT0+YCR7dGhpcy5rZXlOYW1lc3BhY2V9JHtlfWA7Z2V0VW5uYW1lc3BhY2VkS2V5PWU9PmUuc2xpY2UodGhpcy5rZXlOYW1lc3BhY2UubGVuZ3RoKTtzZXJkZT17c2VyaWFsaXplcjpKU09OLnN0cmluZ2lmeSxkZXNlcmlhbGl6ZXI6SlNPTi5wYXJzZX07Y29uc3RydWN0b3Ioe2FyZWE6ZT1cInN5bmNcIixhbGxDb3BpZWQ6dD0hMSxjb3BpZWRLZXlMaXN0OnM9W10sc2VyZGU6cj17fX09e30pe3RoaXMuc2V0Q29waWVkS2V5U2V0KHMpLHRoaXMuI2E9ZSx0aGlzLiNuPXQsdGhpcy5zZXJkZT17Li4udGhpcy5zZXJkZSwuLi5yfTt0cnl7dGhpcy5oYXNXZWJBcGkmJih0fHxzLmxlbmd0aD4wKSYmKHRoaXMuI2U9d2luZG93LmxvY2FsU3RvcmFnZSl9Y2F0Y2h7fXRyeXt0aGlzLmhhc0V4dGVuc2lvbkFwaSYmKHRoaXMuI3I9dGhpcy5nZXRFeHRTdG9yYWdlQXBpKCksbCgpP3RoaXMuI3Q9bSh0aGlzLiNyW3RoaXMuYXJlYV0se2V4Y2x1ZGU6W1wiZ2V0Qnl0ZXNJblVzZVwiXSxlcnJvckZpcnN0OiExfSk6dGhpcy4jdD10aGlzLiNyW3RoaXMuYXJlYV0pfWNhdGNoe319c2V0Q29waWVkS2V5U2V0KGUpe3RoaXMuI2k9bmV3IFNldChlKX1yYXdHZXRBbGw9KCk9PnRoaXMuI3Q/LmdldCgpO2dldEFsbD1hc3luYygpPT57bGV0IGU9YXdhaXQgdGhpcy5yYXdHZXRBbGwoKTtyZXR1cm4gT2JqZWN0LmVudHJpZXMoZSkuZmlsdGVyKChbdF0pPT50aGlzLmlzVmFsaWRLZXkodCkpLnJlZHVjZSgodCxbcyxyXSk9Pih0W3RoaXMuZ2V0VW5uYW1lc3BhY2VkS2V5KHMpXT1yLHQpLHt9KX07Y29weT1hc3luYyBlPT57bGV0IHQ9ZT09PXZvaWQgMDtpZighdCYmIXRoaXMuY29waWVkS2V5U2V0LmhhcyhlKXx8IXRoaXMuYWxsQ29waWVkfHwhdGhpcy5oYXNFeHRlbnNpb25BcGkpcmV0dXJuITE7bGV0IHM9dGhpcy5hbGxDb3BpZWQ/YXdhaXQgdGhpcy5yYXdHZXRBbGwoKTphd2FpdCB0aGlzLiN0LmdldCgodD9bLi4udGhpcy5jb3BpZWRLZXlTZXRdOltlXSkubWFwKHRoaXMuZ2V0TmFtZXNwYWNlZEtleSkpO2lmKCFzKXJldHVybiExO2xldCByPSExO2ZvcihsZXQgYSBpbiBzKXtsZXQgaT1zW2FdLG49dGhpcy4jZT8uZ2V0SXRlbShhKTt0aGlzLiNlPy5zZXRJdGVtKGEsaSkscnx8PWkhPT1ufXJldHVybiByfTtyYXdHZXQ9YXN5bmMgZT0+KGF3YWl0IHRoaXMucmF3R2V0TWFueShbZV0pKVtlXTtyYXdHZXRNYW55PWFzeW5jIGU9PnRoaXMuaGFzRXh0ZW5zaW9uQXBpP2F3YWl0IHRoaXMuI3QuZ2V0KGUpOmUuZmlsdGVyKHRoaXMuaXNDb3BpZWQpLnJlZHVjZSgodCxzKT0+KHRbc109dGhpcy4jZT8uZ2V0SXRlbShzKSx0KSx7fSk7cmF3U2V0PWFzeW5jKGUsdCk9PmF3YWl0IHRoaXMucmF3U2V0TWFueSh7W2VdOnR9KTtyYXdTZXRNYW55PWFzeW5jIGU9Pih0aGlzLiNlJiZPYmplY3QuZW50cmllcyhlKS5maWx0ZXIoKFt0XSk9PnRoaXMuaXNDb3BpZWQodCkpLmZvckVhY2goKFt0LHNdKT0+dGhpcy4jZS5zZXRJdGVtKHQscykpLHRoaXMuaGFzRXh0ZW5zaW9uQXBpJiZhd2FpdCB0aGlzLiN0LnNldChlKSxudWxsKTtjbGVhcj1hc3luYyhlPSExKT0+e2UmJnRoaXMuI2U/LmNsZWFyKCksYXdhaXQgdGhpcy4jdC5jbGVhcigpfTtyYXdSZW1vdmU9YXN5bmMgZT0+e2F3YWl0IHRoaXMucmF3UmVtb3ZlTWFueShbZV0pfTtyYXdSZW1vdmVNYW55PWFzeW5jIGU9Pnt0aGlzLiNlJiZlLmZpbHRlcih0aGlzLmlzQ29waWVkKS5mb3JFYWNoKHQ9PnRoaXMuI2UucmVtb3ZlSXRlbSh0KSksdGhpcy5oYXNFeHRlbnNpb25BcGkmJmF3YWl0IHRoaXMuI3QucmVtb3ZlKGUpfTtyZW1vdmVBbGw9YXN5bmMoKT0+e2xldCBlPWF3YWl0IHRoaXMuZ2V0QWxsKCksdD1PYmplY3Qua2V5cyhlKTthd2FpdCB0aGlzLnJlbW92ZU1hbnkodCl9O3dhdGNoPWU9PntsZXQgdD10aGlzLmlzV2F0Y2hTdXBwb3J0ZWQoKTtyZXR1cm4gdCYmdGhpcy4jbyhlKSx0fTsjbz1lPT57Zm9yKGxldCB0IGluIGUpe2xldCBzPXRoaXMuZ2V0TmFtZXNwYWNlZEtleSh0KSxyPXRoaXMuI3MuZ2V0KHMpPy5jYWxsYmFja1NldHx8bmV3IFNldDtpZihyLmFkZChlW3RdKSxyLnNpemU+MSljb250aW51ZTtsZXQgYT0oaSxuKT0+e2lmKG4hPT10aGlzLmFyZWF8fCFpW3NdKXJldHVybjtsZXQgaD10aGlzLiNzLmdldChzKTtpZighaCl0aHJvdyBuZXcgRXJyb3IoYFN0b3JhZ2UgY29tbXMgZG9lcyBub3QgZXhpc3QgZm9yIG5zS2V5OiAke3N9YCk7UHJvbWlzZS5hbGwoW3RoaXMucGFyc2VWYWx1ZShpW3NdLm5ld1ZhbHVlKSx0aGlzLnBhcnNlVmFsdWUoaVtzXS5vbGRWYWx1ZSldKS50aGVuKChbeSxkXSk9Pntmb3IobGV0IHAgb2YgaC5jYWxsYmFja1NldClwKHtuZXdWYWx1ZTp5LG9sZFZhbHVlOmR9LG4pfSl9O3RoaXMuI3Iub25DaGFuZ2VkLmFkZExpc3RlbmVyKGEpLHRoaXMuI3Muc2V0KHMse2NhbGxiYWNrU2V0OnIsbGlzdGVuZXI6YX0pfX07dW53YXRjaD1lPT57bGV0IHQ9dGhpcy5pc1dhdGNoU3VwcG9ydGVkKCk7cmV0dXJuIHQmJnRoaXMuI2MoZSksdH07I2MoZSl7Zm9yKGxldCB0IGluIGUpe2xldCBzPXRoaXMuZ2V0TmFtZXNwYWNlZEtleSh0KSxyPWVbdF0sYT10aGlzLiNzLmdldChzKTthJiYoYS5jYWxsYmFja1NldC5kZWxldGUociksYS5jYWxsYmFja1NldC5zaXplPT09MCYmKHRoaXMuI3MuZGVsZXRlKHMpLHRoaXMuI3Iub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKGEubGlzdGVuZXIpKSl9fXVud2F0Y2hBbGw9KCk9PnRoaXMuI2goKTsjaCgpe3RoaXMuI3MuZm9yRWFjaCgoe2xpc3RlbmVyOmV9KT0+dGhpcy4jci5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIoZSkpLHRoaXMuI3MuY2xlYXIoKX1hc3luYyBnZXRJdGVtKGUpe3JldHVybiB0aGlzLmdldChlKX1hc3luYyBnZXRJdGVtcyhlKXtyZXR1cm4gYXdhaXQgdGhpcy5nZXRNYW55KGUpfWFzeW5jIHNldEl0ZW0oZSx0KXthd2FpdCB0aGlzLnNldChlLHQpfWFzeW5jIHNldEl0ZW1zKGUpe2F3YWl0IGF3YWl0IHRoaXMuc2V0TWFueShlKX1hc3luYyByZW1vdmVJdGVtKGUpe3JldHVybiB0aGlzLnJlbW92ZShlKX1hc3luYyByZW1vdmVJdGVtcyhlKXtyZXR1cm4gYXdhaXQgdGhpcy5yZW1vdmVNYW55KGUpfX0sZz1jbGFzcyBleHRlbmRzIG97Z2V0PWFzeW5jIGU9PntsZXQgdD10aGlzLmdldE5hbWVzcGFjZWRLZXkoZSkscz1hd2FpdCB0aGlzLnJhd0dldCh0KTtyZXR1cm4gdGhpcy5wYXJzZVZhbHVlKHMpfTtnZXRNYW55PWFzeW5jIGU9PntsZXQgdD1lLm1hcCh0aGlzLmdldE5hbWVzcGFjZWRLZXkpLHM9YXdhaXQgdGhpcy5yYXdHZXRNYW55KHQpLHI9YXdhaXQgUHJvbWlzZS5hbGwoT2JqZWN0LnZhbHVlcyhzKS5tYXAodGhpcy5wYXJzZVZhbHVlKSk7cmV0dXJuIE9iamVjdC5rZXlzKHMpLnJlZHVjZSgoYSxpLG4pPT4oYVt0aGlzLmdldFVubmFtZXNwYWNlZEtleShpKV09cltuXSxhKSx7fSl9O3NldD1hc3luYyhlLHQpPT57bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KGUpLHI9dGhpcy5zZXJkZS5zZXJpYWxpemVyKHQpO3JldHVybiB0aGlzLnJhd1NldChzLHIpfTtzZXRNYW55PWFzeW5jIGU9PntsZXQgdD1PYmplY3QuZW50cmllcyhlKS5yZWR1Y2UoKHMsW3IsYV0pPT4oc1t0aGlzLmdldE5hbWVzcGFjZWRLZXkocildPXRoaXMuc2VyZGUuc2VyaWFsaXplcihhKSxzKSx7fSk7cmV0dXJuIGF3YWl0IHRoaXMucmF3U2V0TWFueSh0KX07cmVtb3ZlPWFzeW5jIGU9PntsZXQgdD10aGlzLmdldE5hbWVzcGFjZWRLZXkoZSk7cmV0dXJuIHRoaXMucmF3UmVtb3ZlKHQpfTtyZW1vdmVNYW55PWFzeW5jIGU9PntsZXQgdD1lLm1hcCh0aGlzLmdldE5hbWVzcGFjZWRLZXkpO3JldHVybiBhd2FpdCB0aGlzLnJhd1JlbW92ZU1hbnkodCl9O3NldE5hbWVzcGFjZT1lPT57dGhpcy5rZXlOYW1lc3BhY2U9ZX07cGFyc2VWYWx1ZT1hc3luYyBlPT57dHJ5e2lmKGUhPT12b2lkIDApcmV0dXJuIHRoaXMuc2VyZGUuZGVzZXJpYWxpemVyKGUpfWNhdGNoKHQpe2NvbnNvbGUuZXJyb3IodCl9fX07ZXhwb3J0e28gYXMgQmFzZVN0b3JhZ2UsZyBhcyBTdG9yYWdlfTtcbiIsImNvbnN0IHByb2Nlc3NGdW5jdGlvbiA9IChmdW5jdGlvbl8sIG9wdGlvbnMsIHByb3h5LCB1bndyYXBwZWQpID0+IGZ1bmN0aW9uICguLi5hcmd1bWVudHNfKSB7XG5cdGNvbnN0IFAgPSBvcHRpb25zLnByb21pc2VNb2R1bGU7XG5cblx0cmV0dXJuIG5ldyBQKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRpZiAob3B0aW9ucy5tdWx0aUFyZ3MpIHtcblx0XHRcdGFyZ3VtZW50c18ucHVzaCgoLi4ucmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChvcHRpb25zLmVycm9yRmlyc3QpIHtcblx0XHRcdFx0XHRpZiAocmVzdWx0WzBdKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QocmVzdWx0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnNoaWZ0KCk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmIChvcHRpb25zLmVycm9yRmlyc3QpIHtcblx0XHRcdGFyZ3VtZW50c18ucHVzaCgoZXJyb3IsIHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFyZ3VtZW50c18ucHVzaChyZXNvbHZlKTtcblx0XHR9XG5cblx0XHRjb25zdCBzZWxmID0gdGhpcyA9PT0gcHJveHkgPyB1bndyYXBwZWQgOiB0aGlzO1xuXHRcdFJlZmxlY3QuYXBwbHkoZnVuY3Rpb25fLCBzZWxmLCBhcmd1bWVudHNfKTtcblx0fSk7XG59O1xuXG5jb25zdCBmaWx0ZXJDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpZnkoaW5wdXQsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IHtcblx0XHRleGNsdWRlOiBbLy4rKD86U3luY3xTdHJlYW0pJC9dLFxuXHRcdGVycm9yRmlyc3Q6IHRydWUsXG5cdFx0cHJvbWlzZU1vZHVsZTogUHJvbWlzZSxcblx0XHQuLi5vcHRpb25zLFxuXHR9O1xuXG5cdGNvbnN0IG9iamVjdFR5cGUgPSB0eXBlb2YgaW5wdXQ7XG5cdGlmICghKGlucHV0ICE9PSBudWxsICYmIChvYmplY3RUeXBlID09PSAnb2JqZWN0JyB8fCBvYmplY3RUeXBlID09PSAnZnVuY3Rpb24nKSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBcXGBpbnB1dFxcYCB0byBiZSBhIFxcYEZ1bmN0aW9uXFxgIG9yIFxcYE9iamVjdFxcYCwgZ290IFxcYCR7aW5wdXQgPT09IG51bGwgPyAnbnVsbCcgOiBvYmplY3RUeXBlfVxcYGApO1xuXHR9XG5cblx0Y29uc3QgZmlsdGVyID0gKHRhcmdldCwga2V5KSA9PiB7XG5cdFx0bGV0IGNhY2hlZCA9IGZpbHRlckNhY2hlLmdldCh0YXJnZXQpO1xuXG5cdFx0aWYgKCFjYWNoZWQpIHtcblx0XHRcdGNhY2hlZCA9IHt9O1xuXHRcdFx0ZmlsdGVyQ2FjaGUuc2V0KHRhcmdldCwgY2FjaGVkKTtcblx0XHR9XG5cblx0XHRpZiAoa2V5IGluIGNhY2hlZCkge1xuXHRcdFx0cmV0dXJuIGNhY2hlZFtrZXldO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybiA9PiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBrZXkgPT09ICdzeW1ib2wnKSA/IGtleSA9PT0gcGF0dGVybiA6IHBhdHRlcm4udGVzdChrZXkpO1xuXHRcdGNvbnN0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG5cdFx0Y29uc3Qgd3JpdGFibGVPckNvbmZpZ3VyYWJsZU93biA9IChkZXNjcmlwdG9yID09PSB1bmRlZmluZWQgfHwgZGVzY3JpcHRvci53cml0YWJsZSB8fCBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSk7XG5cdFx0Y29uc3QgaW5jbHVkZWQgPSBvcHRpb25zLmluY2x1ZGUgPyBvcHRpb25zLmluY2x1ZGUuc29tZShlbGVtZW50ID0+IG1hdGNoKGVsZW1lbnQpKSA6ICFvcHRpb25zLmV4Y2x1ZGUuc29tZShlbGVtZW50ID0+IG1hdGNoKGVsZW1lbnQpKTtcblx0XHRjb25zdCBzaG91bGRGaWx0ZXIgPSBpbmNsdWRlZCAmJiB3cml0YWJsZU9yQ29uZmlndXJhYmxlT3duO1xuXHRcdGNhY2hlZFtrZXldID0gc2hvdWxkRmlsdGVyO1xuXHRcdHJldHVybiBzaG91bGRGaWx0ZXI7XG5cdH07XG5cblx0Y29uc3QgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5cdGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KGlucHV0LCB7XG5cdFx0YXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBhcmdzKSB7XG5cdFx0XHRjb25zdCBjYWNoZWQgPSBjYWNoZS5nZXQodGFyZ2V0KTtcblxuXHRcdFx0aWYgKGNhY2hlZCkge1xuXHRcdFx0XHRyZXR1cm4gUmVmbGVjdC5hcHBseShjYWNoZWQsIHRoaXNBcmcsIGFyZ3MpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwaWZpZWQgPSBvcHRpb25zLmV4Y2x1ZGVNYWluID8gdGFyZ2V0IDogcHJvY2Vzc0Z1bmN0aW9uKHRhcmdldCwgb3B0aW9ucywgcHJveHksIHRhcmdldCk7XG5cdFx0XHRjYWNoZS5zZXQodGFyZ2V0LCBwaWZpZWQpO1xuXHRcdFx0cmV0dXJuIFJlZmxlY3QuYXBwbHkocGlmaWVkLCB0aGlzQXJnLCBhcmdzKTtcblx0XHR9LFxuXG5cdFx0Z2V0KHRhcmdldCwga2V5KSB7XG5cdFx0XHRjb25zdCBwcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWV4dGVuZC1uYXRpdmUvbm8tdXNlLWV4dGVuZC1uYXRpdmVcblx0XHRcdGlmICghZmlsdGVyKHRhcmdldCwga2V5KSB8fCBwcm9wZXJ0eSA9PT0gRnVuY3Rpb24ucHJvdG90eXBlW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIHByb3BlcnR5O1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjYWNoZWQgPSBjYWNoZS5nZXQocHJvcGVydHkpO1xuXG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdHJldHVybiBjYWNoZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgcGlmaWVkID0gcHJvY2Vzc0Z1bmN0aW9uKHByb3BlcnR5LCBvcHRpb25zLCBwcm94eSwgdGFyZ2V0KTtcblx0XHRcdFx0Y2FjaGUuc2V0KHByb3BlcnR5LCBwaWZpZWQpO1xuXHRcdFx0XHRyZXR1cm4gcGlmaWVkO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcHJvcGVydHk7XG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHByb3h5O1xufVxuIiwiLyoqXG4gKiBFbnZpcm9ubWVudCAvIGhvc3QgY29uZmlnIGZvciB0aGUgdGVhbSBmb3JrLlxuICogT3ZlcnJpZGUgdmlhIC5lbnYgKFBMQVNNT19QVUJMSUNfKikuXG4gKlxuICogQXV0b2ZpbGwgcHJvZmlsZSBkYXRhIGNvbWVzIGZyb20gdGhlIFRlYW0gQXV0b2ZpbGwgSHViICh0ZWFtLXNpdGUpLFxuICogbm90IEpvYnJpZ2h0IGNsb3VkIOKAlCBzZWUgfmFwaS90ZWFtLWNsaWVudCBhbmQgZXh0ZW5zaW9uIE9wdGlvbnMuXG4gKi9cblxuY29uc3QgUFJPRF9IVUIgPSBcImh0dHBzOi8vam9icmlnaHQtdGVhbS1zaXRlLnZlcmNlbC5hcHBcIlxuY29uc3QgREVWX0hVQiA9IFwiaHR0cDovL2xvY2FsaG9zdDozMjEwXCJcblxuZXhwb3J0IGNvbnN0IFRFQU1fU0lURV9VUkwgPVxuICBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX1RFQU1fU0lURV9VUkwgPz8gUFJPRF9IVUJcblxuLyoqIEh1YiBVUkwgZm9yIHRoZSBjdXJyZW50IGJ1aWxkOiBsb2NhbGhvc3QgaW4gcGxhc21vIGRldiwgcHJvZCBVUkwgaW4gYnVpbGRzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEh1YlVybCgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHJldHVybiBERVZfSFVCXG4gIHJldHVybiBURUFNX1NJVEVfVVJMIHx8IFBST0RfSFVCXG59XG5cbi8qKiBAZGVwcmVjYXRlZCBQcmVmZXIgVEVBTV9TSVRFX1VSTCDigJQga2VwdCBmb3Igb2xkZXIgc3R1YnMgKi9cbmV4cG9ydCBjb25zdCBBUElfRE9NQUlOID1cbiAgcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19BUElfRE9NQUlOID8/IFRFQU1fU0lURV9VUkxcblxuZXhwb3J0IGNvbnN0IEhPU1RfRE9NQUlOID1cbiAgcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19IT1NUX0RPTUFJTiA/PyBURUFNX1NJVEVfVVJMXG5cbmV4cG9ydCBjb25zdCBDT09LSUVfRE9NQUlOID1cbiAgcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19DT09LSUVfRE9NQUlOID8/IFwibG9jYWxob3N0XCJcblxuLyoqIE9yaWdpbnMgdHJlYXRlZCBhcyB0aGUgdGVhbSAvIGFnZW50IFVJIGhvc3QuICovXG5leHBvcnQgY29uc3QgYWdlbnREb21haW5zID0gW1xuICBcImxvY2FsaG9zdFwiLFxuICBcIjEyNy4wLjAuMVwiXG5dIGFzIGNvbnN0XG4iLCJpbXBvcnQgdHlwZSB7IEF1dG9maWxsSW5mb1BheWxvYWQgfSBmcm9tIFwifmFwaS90ZWFtLXR5cGVzXCJcblxudHlwZSBIdWJFZHVjYXRpb24gPSB7XG4gIHNjaG9vbE5hbWU/OiBzdHJpbmdcbiAgb3JnYW5pemF0aW9uPzogc3RyaW5nXG4gIGFjY3JlZGl0YXRpb24/OiBzdHJpbmdcbiAgZ3BhPzogc3RyaW5nXG4gIHN0YXJ0RGF0ZT86IHN0cmluZ1xuICBlbmREYXRlPzogc3RyaW5nXG4gIGlzQ3VycmVudD86IGJvb2xlYW5cbiAgZGF0ZXM/OiB7XG4gICAgc3RhcnRfZGF0ZT86IHN0cmluZyB8IG51bGxcbiAgICBjb21wbGV0aW9uX2RhdGU/OiBzdHJpbmcgfCBudWxsXG4gICAgaXNfY3VycmVudD86IGJvb2xlYW5cbiAgfVxufVxuXG50eXBlIEh1YldvcmsgPSB7XG4gIGNvbXBhbnlOYW1lPzogc3RyaW5nXG4gIG9yZ2FuaXphdGlvbj86IHN0cmluZ1xuICBqb2JUaXRsZT86IHN0cmluZ1xuICBqb2JfdGl0bGU/OiBzdHJpbmdcbiAgY2l0eT86IHN0cmluZ1xuICBsb2NhdGlvbj86IHN0cmluZ1xuICBzdGFydERhdGU/OiBzdHJpbmdcbiAgZW5kRGF0ZT86IHN0cmluZ1xuICBpc0N1cnJlbnQ/OiBib29sZWFuXG4gIHN1bW1hcnk/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb25zPzogc3RyaW5nW11cbiAgam9iX2Rlc2NyaXB0aW9ucz86IHN0cmluZ1tdXG4gIGRhdGVzPzoge1xuICAgIHN0YXJ0X2RhdGU/OiBzdHJpbmcgfCBudWxsXG4gICAgY29tcGxldGlvbl9kYXRlPzogc3RyaW5nIHwgbnVsbFxuICAgIGlzX2N1cnJlbnQ/OiBib29sZWFuXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwRWR1Y2F0aW9uKHJhdzogdW5rbm93bik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W10ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocmF3KSkgcmV0dXJuIFtdXG4gIHJldHVybiByYXdcbiAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKVxuICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGUgPSBpdGVtIGFzIEh1YkVkdWNhdGlvblxuICAgICAgaWYgKGUub3JnYW5pemF0aW9uIHx8IGUuZGF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvcmdhbml6YXRpb246IGUub3JnYW5pemF0aW9uIHx8IGUuc2Nob29sTmFtZSB8fCBcIlwiLFxuICAgICAgICAgIGFjY3JlZGl0YXRpb246IGUuYWNjcmVkaXRhdGlvbiB8fCBcIlwiLFxuICAgICAgICAgIGdwYTogZS5ncGEgfHwgXCJcIixcbiAgICAgICAgICBkYXRlczogZS5kYXRlcyB8fCB7XG4gICAgICAgICAgICBzdGFydF9kYXRlOiBlLnN0YXJ0RGF0ZSB8fCBudWxsLFxuICAgICAgICAgICAgY29tcGxldGlvbl9kYXRlOiBlLmlzQ3VycmVudCA/IG51bGwgOiBlLmVuZERhdGUgfHwgbnVsbCxcbiAgICAgICAgICAgIGlzX2N1cnJlbnQ6ICEhZS5pc0N1cnJlbnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9yZ2FuaXphdGlvbjogZS5zY2hvb2xOYW1lIHx8IFwiXCIsXG4gICAgICAgIGFjY3JlZGl0YXRpb246IGUuYWNjcmVkaXRhdGlvbiB8fCBcIlwiLFxuICAgICAgICBncGE6IGUuZ3BhIHx8IFwiXCIsXG4gICAgICAgIGRhdGVzOiB7XG4gICAgICAgICAgc3RhcnRfZGF0ZTogZS5zdGFydERhdGUgfHwgbnVsbCxcbiAgICAgICAgICBjb21wbGV0aW9uX2RhdGU6IGUuaXNDdXJyZW50ID8gbnVsbCA6IGUuZW5kRGF0ZSB8fCBudWxsLFxuICAgICAgICAgIGlzX2N1cnJlbnQ6ICEhZS5pc0N1cnJlbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG1hcFdvcmsocmF3OiB1bmtub3duKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShyYXcpKSByZXR1cm4gW11cbiAgcmV0dXJuIHJhd1xuICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIpXG4gICAgLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdyA9IGl0ZW0gYXMgSHViV29ya1xuICAgICAgaWYgKHcub3JnYW5pemF0aW9uIHx8IHcuam9iX3RpdGxlIHx8IHcuZGF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvcmdhbml6YXRpb246IHcub3JnYW5pemF0aW9uIHx8IHcuY29tcGFueU5hbWUgfHwgXCJcIixcbiAgICAgICAgICBqb2JfdGl0bGU6IHcuam9iX3RpdGxlIHx8IHcuam9iVGl0bGUgfHwgXCJcIixcbiAgICAgICAgICBsb2NhdGlvbjogdy5sb2NhdGlvbiB8fCB3LmNpdHkgfHwgXCJcIixcbiAgICAgICAgICBkYXRlczogdy5kYXRlcyB8fCB7XG4gICAgICAgICAgICBzdGFydF9kYXRlOiB3LnN0YXJ0RGF0ZSB8fCBudWxsLFxuICAgICAgICAgICAgY29tcGxldGlvbl9kYXRlOiB3LmlzQ3VycmVudCA/IG51bGwgOiB3LmVuZERhdGUgfHwgbnVsbCxcbiAgICAgICAgICAgIGlzX2N1cnJlbnQ6ICEhdy5pc0N1cnJlbnRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1bW1hcnk6IHcuc3VtbWFyeSB8fCBcIlwiLFxuICAgICAgICAgIGpvYl9kZXNjcmlwdGlvbnM6XG4gICAgICAgICAgICB3LmpvYl9kZXNjcmlwdGlvbnMgfHxcbiAgICAgICAgICAgIHcuZGVzY3JpcHRpb25zIHx8XG4gICAgICAgICAgICAody5zdW1tYXJ5ID8gW3cuc3VtbWFyeV0gOiBbXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3JnYW5pemF0aW9uOiB3LmNvbXBhbnlOYW1lIHx8IFwiXCIsXG4gICAgICAgIGpvYl90aXRsZTogdy5qb2JUaXRsZSB8fCBcIlwiLFxuICAgICAgICBsb2NhdGlvbjogdy5jaXR5IHx8IFwiXCIsXG4gICAgICAgIGRhdGVzOiB7XG4gICAgICAgICAgc3RhcnRfZGF0ZTogdy5zdGFydERhdGUgfHwgbnVsbCxcbiAgICAgICAgICBjb21wbGV0aW9uX2RhdGU6IHcuaXNDdXJyZW50ID8gbnVsbCA6IHcuZW5kRGF0ZSB8fCBudWxsLFxuICAgICAgICAgIGlzX2N1cnJlbnQ6ICEhdy5pc0N1cnJlbnRcbiAgICAgICAgfSxcbiAgICAgICAgc3VtbWFyeTogdy5zdW1tYXJ5IHx8IFwiXCIsXG4gICAgICAgIGpvYl9kZXNjcmlwdGlvbnM6XG4gICAgICAgICAgdy5kZXNjcmlwdGlvbnM/Lmxlbmd0aFxuICAgICAgICAgICAgPyB3LmRlc2NyaXB0aW9uc1xuICAgICAgICAgICAgOiB3LnN1bW1hcnlcbiAgICAgICAgICAgICAgPyBbdy5zdW1tYXJ5XVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbWFwU2tpbGxzKHJhdzogdW5rbm93bik6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB8IHN0cmluZ1tdIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocmF3KSkge1xuICAgIGNvbnN0IGxpc3QgPSByYXcubWFwKChzKSA9PiBTdHJpbmcocykudHJpbSgpKS5maWx0ZXIoQm9vbGVhbilcbiAgICByZXR1cm4gbGlzdC5sZW5ndGggPyB7IERFRkFVTFQ6IGxpc3QgfSA6IHt9XG4gIH1cbiAgaWYgKHJhdyAmJiB0eXBlb2YgcmF3ID09PSBcIm9iamVjdFwiKSByZXR1cm4gcmF3IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPlxuICByZXR1cm4ge31cbn1cblxuLyoqXG4gKiBNYXAgdGVhbS1odWIgYXV0b2ZpbGwgcGF5bG9hZCBpbnRvIHRoZSBKb2JyaWdodC1zaGFwZWQgb2JqZWN0IHRoYXRcbiAqIGVuZ2luZSBzdG9yZXMgLyBCYXNlRmlsbGVyIGV4cGVjdCAocGVyc29uYWxJbmZvLCBsb2NhdGlvbiwgZXRjLikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBodWJUb0pvYnJpZ2h0QXV0b2ZpbGwoXG4gIGh1YjogQXV0b2ZpbGxJbmZvUGF5bG9hZFxuKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICBjb25zdCBhZGRyID0gaHViLmlkZW50aXR5Py5hZGRyZXNzID8/IHtcbiAgICBsaW5lMTogXCJcIixcbiAgICBsaW5lMjogXCJcIixcbiAgICBjaXR5OiBcIlwiLFxuICAgIHN0YXRlOiBcIlwiLFxuICAgIHBvc3RhbENvZGU6IFwiXCIsXG4gICAgY291bnRyeTogXCJcIlxuICB9XG4gIGNvbnN0IGV4dHJhcyA9IChodWIuZXh0cmFzICYmIHR5cGVvZiBodWIuZXh0cmFzID09PSBcIm9iamVjdFwiXG4gICAgPyBodWIuZXh0cmFzXG4gICAgOiB7fSkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cblxuICBjb25zdCBlZHVjYXRpb24gPSBtYXBFZHVjYXRpb24oXG4gICAgZXh0cmFzLmVuZ2luZUVkdWNhdGlvbiA/PyBleHRyYXMuZWR1Y2F0aW9uID8/IGV4dHJhcy5FZHVjYXRpb25cbiAgKVxuICBjb25zdCB3b3JrRXhwZXJpZW5jZSA9IG1hcFdvcmsoXG4gICAgZXh0cmFzLmVuZ2luZVdvcmtFeHBlcmllbmNlID8/XG4gICAgICBleHRyYXMud29ya0V4cGVyaWVuY2UgPz9cbiAgICAgIGV4dHJhcy5lbXBsb3ltZW50XG4gIClcbiAgY29uc3QgZW1wbG95bWVudEluZm8gPVxuICAgIGV4dHJhcy5lbXBsb3ltZW50SW5mbyAmJiB0eXBlb2YgZXh0cmFzLmVtcGxveW1lbnRJbmZvID09PSBcIm9iamVjdFwiXG4gICAgICA/IGV4dHJhcy5lbXBsb3ltZW50SW5mb1xuICAgICAgOiB7fVxuICBjb25zdCBza2lsbHMgPSBtYXBTa2lsbHMoZXh0cmFzLmVuZ2luZVNraWxscyA/PyBleHRyYXMuc2tpbGxzKVxuXG4gIHJldHVybiB7XG4gICAgLi4uaHViLFxuICAgIHBlcnNvbmFsSW5mbzoge1xuICAgICAgZmlyc3ROYW1lOiBodWIuaWRlbnRpdHkuZmlyc3ROYW1lIHx8IFwiXCIsXG4gICAgICBtaWRkbGVOYW1lOiBTdHJpbmcoZXh0cmFzLm1pZGRsZU5hbWUgPz8gXCJcIiksXG4gICAgICBsYXN0TmFtZTogaHViLmlkZW50aXR5Lmxhc3ROYW1lIHx8IFwiXCIsXG4gICAgICBwcmVmZXJyZWRGaXJzdE5hbWU6IFN0cmluZyhleHRyYXMucHJlZmVycmVkRmlyc3ROYW1lID8/IFwiXCIpLFxuICAgICAgcHJlZmVycmVkTWlkZGxlTmFtZTogU3RyaW5nKGV4dHJhcy5wcmVmZXJyZWRNaWRkbGVOYW1lID8/IFwiXCIpLFxuICAgICAgcHJlZmVycmVkTGFzdE5hbWU6IFN0cmluZyhleHRyYXMucHJlZmVycmVkTGFzdE5hbWUgPz8gXCJcIiksXG4gICAgICBlbWFpbDogaHViLmlkZW50aXR5LmVtYWlsIHx8IFwiXCIsXG4gICAgICBwaG9uZV9udW1iZXI6IGh1Yi5pZGVudGl0eS5waG9uZSB8fCBcIlwiLFxuICAgICAgbGlua2VkaW5fbGluazogaHViLmlkZW50aXR5LmxpbmtlZGluIHx8IFwiXCIsXG4gICAgICBsaW5rZWRpbjogaHViLmlkZW50aXR5LmxpbmtlZGluIHx8IFwiXCIsXG4gICAgICBnaXRodWJfbGluazogU3RyaW5nKGV4dHJhcy5naXRodWIgPz8gZXh0cmFzLmdpdGh1Yl9saW5rID8/IFwiXCIpLFxuICAgICAgcGVyc29uYWxfc2l0ZV9saW5rOiBodWIuaWRlbnRpdHkud2Vic2l0ZSB8fCBcIlwiLFxuICAgICAgcGVyc29uYWxfc2l0ZTogaHViLmlkZW50aXR5LndlYnNpdGUgfHwgXCJcIlxuICAgIH0sXG4gICAgbG9jYXRpb246IHtcbiAgICAgIGNvdW50cnk6IGFkZHIuY291bnRyeSB8fCBcIlwiLFxuICAgICAgc3RhdGU6IGFkZHIuc3RhdGUgfHwgXCJcIixcbiAgICAgIGNpdHk6IGFkZHIuY2l0eSB8fCBcIlwiLFxuICAgICAgcG9zdENvZGU6IGFkZHIucG9zdGFsQ29kZSB8fCBcIlwiLFxuICAgICAgY291bnR5OiBTdHJpbmcoZXh0cmFzLmNvdW50eSA/PyBcIlwiKVxuICAgIH0sXG4gICAgYWRkcmVzc0xpbmU6IFthZGRyLmxpbmUxLCBhZGRyLmxpbmUyXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiwgXCIpLFxuICAgIHN0YXRlOiBhZGRyLnN0YXRlIHx8IFwiXCIsXG4gICAgZWR1Y2F0aW9uLFxuICAgIHdvcmtFeHBlcmllbmNlLFxuICAgIGVtcGxveW1lbnRJbmZvLFxuICAgIHNraWxscyxcbiAgICBzYWxhcnk6IFN0cmluZyhleHRyYXMuc2FsYXJ5ID8/IFwiXCIpLFxuICAgIGhpcmluZ0RhdGU6ICgoKSA9PiB7XG4gICAgICBjb25zdCB0b21vcnJvdyA9IGxvY2FsVG9tb3Jyb3dZbWQoKVxuICAgICAgY29uc3QgdG9kYXkgPSBsb2NhbFRvZGF5WW1kKClcbiAgICAgIGNvbnN0IHJhdyA9IFN0cmluZyhleHRyYXMuaGlyaW5nRGF0ZSA/PyBcIlwiKS50cmltKClcbiAgICAgIGlmICgvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9JC8udGVzdChyYXcpICYmIHJhdyA+PSB0b2RheSkgcmV0dXJuIHJhd1xuICAgICAgcmV0dXJuIHRvbW9ycm93XG4gICAgfSkoKSxcbiAgICBiaXJ0aGRheTogU3RyaW5nKGV4dHJhcy5iaXJ0aGRheSA/PyBleHRyYXMuZGF0ZU9mQmlydGggPz8gXCJcIiksXG4gICAgeWVhcnNPZkV4cGVyaWVuY2U6IFN0cmluZyhleHRyYXMueWVhcnNPZkV4cGVyaWVuY2UgPz8gXCJcIiksXG4gICAgcGxhbm5lZFdvcmtMb2NhdGlvbjogU3RyaW5nKGV4dHJhcy5wbGFubmVkV29ya0xvY2F0aW9uID8/IFwiXCIpLFxuICAgIGFkZGl0aW9uYWxBcHBsaWNhdGlvbkluZm86IFN0cmluZyhcbiAgICAgIGV4dHJhcy5hZGRpdGlvbmFsQXBwbGljYXRpb25JbmZvID8/IFwiXCJcbiAgICApLFxuICAgIHByb25vdW5zOiBTdHJpbmcoZXh0cmFzLnByb25vdW5zID8/IFwiXCIpLFxuICAgIHBob25lVHlwZTogU3RyaW5nKGV4dHJhcy5waG9uZVR5cGUgPz8gXCJNb2JpbGVcIiksXG4gICAgcGhvbmVDb3VudHJ5Q29kZTogU3RyaW5nKGV4dHJhcy5waG9uZUNvdW50cnlDb2RlID8/IFwiXCIpLFxuICAgIF9odWJBbnN3ZXJzOiBodWIuYW5zd2VycyB8fCB7fSxcbiAgICBkZWZhdWx0UmVzdW1lSWQ6IGh1Yi5kZWZhdWx0UmVzdW1lSWQsXG4gICAgcmVzdW1lczogaHViLnJlc3VtZXNcbiAgfVxufVxuXG50eXBlIEZpbGxFbGVtZW50ID0ge1xuICBsYWJlbD86IHN0cmluZ1xuICB0eXBlPzogc3RyaW5nXG4gIG9wdGlvbnM/OiB1bmtub3duXG4gIFtrZXk6IHN0cmluZ106IHVua25vd25cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTGFiZWwodGV4dDogc3RyaW5nKSB7XG4gIHJldHVybiAodGV4dCB8fCBcIlwiKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1xccypcXCpcXHMqL2csIFwiIFwiKVxuICAgIC5yZXBsYWNlKC9bXmEtejAtOV0rL2csIFwiIFwiKVxuICAgIC50cmltKClcbn1cblxuZnVuY3Rpb24gbG9jYWxUb2RheVltZCgpOiBzdHJpbmcge1xuICBjb25zdCBkID0gbmV3IERhdGUoKVxuICBjb25zdCB5ID0gZC5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IG0gPSBTdHJpbmcoZC5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpXG4gIGNvbnN0IGRheSA9IFN0cmluZyhkLmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpXG4gIHJldHVybiBgJHt5fS0ke219LSR7ZGF5fWBcbn1cblxuLyoqIERlZmF1bHQgc3RhcnQgLyBhdmFpbGFibGUtZnJvbSBkYXRlOiB0b21vcnJvdyAobG9jYWwpLiAqL1xuZnVuY3Rpb24gbG9jYWxUb21vcnJvd1ltZCgpOiBzdHJpbmcge1xuICBjb25zdCBkID0gbmV3IERhdGUoKVxuICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyAxKVxuICBjb25zdCB5ID0gZC5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IG0gPSBTdHJpbmcoZC5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpXG4gIGNvbnN0IGRheSA9IFN0cmluZyhkLmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpXG4gIHJldHVybiBgJHt5fS0ke219LSR7ZGF5fWBcbn1cblxuZnVuY3Rpb24gcGFyc2VZbWQocmF3OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgdCA9IHJhdy50cmltKClcbiAgaWYgKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLy50ZXN0KHQpKSByZXR1cm4gdFxuICBpZiAoL15cXGR7NH0tXFxkezJ9JC8udGVzdCh0KSkgcmV0dXJuIGAke3R9LTAxYFxuICBjb25zdCB1cyA9IHQubWF0Y2goL14oXFxkezEsMn0pXFwvKFxcZHsxLDJ9KVxcLyhcXGR7NH0pJC8pXG4gIGlmICh1cykge1xuICAgIHJldHVybiBgJHt1c1szXX0tJHt1c1sxXS5wYWRTdGFydCgyLCBcIjBcIil9LSR7dXNbMl0ucGFkU3RhcnQoMiwgXCIwXCIpfWBcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBleHRyYXNTdHJpbmcoaHViOiBBdXRvZmlsbEluZm9QYXlsb2FkLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGV4dHJhcyA9IGh1Yi5leHRyYXMgfHwge31cbiAgY29uc3QgdiA9IGV4dHJhc1trZXldXG4gIHJldHVybiB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIiA/IHYgOiB2ICE9IG51bGwgPyBTdHJpbmcodikgOiBcIlwiXG59XG5cbmZ1bmN0aW9uIGVtcGxveW1lbnRGaWVsZChodWI6IEF1dG9maWxsSW5mb1BheWxvYWQsIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgaW5mbyA9IGh1Yi5leHRyYXM/LmVtcGxveW1lbnRJbmZvXG4gIGlmICghaW5mbyB8fCB0eXBlb2YgaW5mbyAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KGluZm8pKSByZXR1cm4gXCJcIlxuICBjb25zdCB2ID0gKGluZm8gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tleV1cbiAgcmV0dXJuIHR5cGVvZiB2ID09PSBcInN0cmluZ1wiID8gdiA6IHYgIT0gbnVsbCA/IFN0cmluZyh2KSA6IFwiXCJcbn1cblxuZnVuY3Rpb24gZm9ybWF0TG9jYXRpb24oaHViOiBBdXRvZmlsbEluZm9QYXlsb2FkKTogc3RyaW5nIHtcbiAgY29uc3QgYSA9IGh1Yi5pZGVudGl0eS5hZGRyZXNzXG4gIHJldHVybiBbYS5jaXR5LCBhLnN0YXRlLCBhLmNvdW50cnldLm1hcCgocykgPT4gcz8udHJpbSgpKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiwgXCIpXG59XG5cbi8qKlxuICogQXZhaWxhYmxlLWZyb20gLyBoaXJpbmcgZGF0ZSBmb3IgZm9ybXMuXG4gKiBQcmVmZXIgaHViIGhpcmluZ0RhdGUgd2hlbiBpdCBpcyB0b2RheSBvciBsYXRlcjsgb3RoZXJ3aXNlIHRvbW9ycm93LlxuICovXG5mdW5jdGlvbiBmb3JtYXRIaXJpbmdEYXRlKGh1YjogQXV0b2ZpbGxJbmZvUGF5bG9hZCk6IHN0cmluZyB7XG4gIGNvbnN0IHRvbW9ycm93ID0gbG9jYWxUb21vcnJvd1ltZCgpXG4gIGNvbnN0IHRvZGF5ID0gbG9jYWxUb2RheVltZCgpXG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlWW1kKGV4dHJhc1N0cmluZyhodWIsIFwiaGlyaW5nRGF0ZVwiKSlcbiAgaWYgKHBhcnNlZCAmJiBwYXJzZWQgPj0gdG9kYXkpIHJldHVybiBwYXJzZWRcbiAgcmV0dXJuIHRvbW9ycm93XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhpcmluZ0RhdGVVcyhodWI6IEF1dG9maWxsSW5mb1BheWxvYWQpOiBzdHJpbmcge1xuICBjb25zdCBpc28gPSBmb3JtYXRIaXJpbmdEYXRlKGh1YilcbiAgY29uc3QgbSA9IGlzby5tYXRjaCgvXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pJC8pXG4gIGlmICghbSkgcmV0dXJuIGlzb1xuICByZXR1cm4gYCR7bVsyXX0vJHttWzNdfS8ke21bMV19YFxufVxuXG4vKiogVHJ1ZSBpZiBjYW5kaWRhdGUgbmVlZHMgZW1wbG95ZXIgc3BvbnNvcnNoaXAuICovXG5mdW5jdGlvbiBuZWVkc1Nwb25zb3JzaGlwKGh1YjogQXV0b2ZpbGxJbmZvUGF5bG9hZCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgY29uc3Qgc3RhdHVzID0gZW1wbG95bWVudEZpZWxkKGh1YiwgXCJzcG9uc29yc2hpcFN0YXR1c1wiKS50b0xvd2VyQ2FzZSgpXG4gIGNvbnN0IGF1dGggPSBlbXBsb3ltZW50RmllbGQoaHViLCBcIndvcmtBdXRob3JpemF0aW9uXCIpLnRvTG93ZXJDYXNlKClcbiAgaWYgKCFzdGF0dXMgJiYgIWF1dGgpIHJldHVybiBudWxsXG4gIGlmICgvd2lsbCBub3QgcmVxdWlyZXxubyBzcG9uc29yc2hpcHxkbyBub3QgcmVxdWlyZXxkb2Vzbid0IHJlcXVpcmV8ZG9lcyBub3QgcmVxdWlyZS8udGVzdChzdGF0dXMpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaWYgKC9yZXF1aXJlIHNwb25zb3JzaGlwfG5lZWRzIHNwb25zb3JzaGlwfG5lZWQgc3BvbnNvcnNoaXAvLnRlc3Qoc3RhdHVzKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKC9uZWVkIHNwb25zb3JzaGlwfG5vdCBhdXRob3JpemVkLy50ZXN0KGF1dGgpKSByZXR1cm4gdHJ1ZVxuICBpZiAoL2F1dGhvcml6ZWQgdG8gd29yay8udGVzdChhdXRoKSAmJiAhL3Nwb25zb3JzaGlwLy50ZXN0KHN0YXR1cykpIHJldHVybiBmYWxzZVxuICByZXR1cm4gbnVsbFxufVxuXG4vKiogVHJ1ZSBpZiBhdXRob3JpemVkIHRvIHdvcmsgKGdlbmVyYWxseSAvIHdpdGhvdXQgbmVlZGluZyBzcG9uc29yc2hpcCBmcmFtaW5nKS4gKi9cbmZ1bmN0aW9uIGlzV29ya0F1dGhvcml6ZWQoaHViOiBBdXRvZmlsbEluZm9QYXlsb2FkKTogYm9vbGVhbiB8IG51bGwge1xuICBjb25zdCBhdXRoID0gZW1wbG95bWVudEZpZWxkKGh1YiwgXCJ3b3JrQXV0aG9yaXphdGlvblwiKS50b0xvd2VyQ2FzZSgpXG4gIGlmICghYXV0aCkgcmV0dXJuIG51bGxcbiAgaWYgKC9ub3QgYXV0aG9yaXplZC8udGVzdChhdXRoKSkgcmV0dXJuIGZhbHNlXG4gIGlmICgvYXV0aG9yaXplZCB0byB3b3JrfGF1dGhvcml6ZWQvLnRlc3QoYXV0aCkpIHJldHVybiB0cnVlXG4gIGlmICgvbmVlZCBzcG9uc29yc2hpcC8udGVzdChhdXRoKSkgcmV0dXJuIGZhbHNlXG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRPcHRpb25zKGVsOiBGaWxsRWxlbWVudCk6IHN0cmluZ1tdIHtcbiAgY29uc3QgcmF3ID0gZWwub3B0aW9uc1xuICBpZiAoIUFycmF5LmlzQXJyYXkocmF3KSkgcmV0dXJuIFtdXG4gIHJldHVybiByYXdcbiAgICAubWFwKChvKSA9PiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIgPyBvIDogU3RyaW5nKG8gPz8gXCJcIikpKVxuICAgIC5tYXAoKHMpID0+IHMudHJpbSgpKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbn1cblxuZnVuY3Rpb24gaGFzWWVzTm9PcHRpb25zKG9wdGlvbnM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gIGNvbnN0IG5vcm1zID0gb3B0aW9ucy5tYXAobm9ybWFsaXplTGFiZWwpXG4gIHJldHVybiAoXG4gICAgbm9ybXMuc29tZSgobikgPT4gbiA9PT0gXCJ5ZXNcIiB8fCBuLnN0YXJ0c1dpdGgoXCJ5ZXMgXCIpKSAmJlxuICAgIG5vcm1zLnNvbWUoKG4pID0+IG4gPT09IFwibm9cIiB8fCBuLnN0YXJ0c1dpdGgoXCJubyBcIikpXG4gIClcbn1cblxuZnVuY3Rpb24gcGlja1llc05vKG9wdGlvbnM6IHN0cmluZ1tdLCB5ZXM6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBjb25zdCB3YW50ID0geWVzID8gXCJ5ZXNcIiA6IFwibm9cIlxuICBjb25zdCBoaXQgPSBvcHRpb25zLmZpbmQoKG8pID0+IHtcbiAgICBjb25zdCBuID0gbm9ybWFsaXplTGFiZWwobylcbiAgICByZXR1cm4gbiA9PT0gd2FudCB8fCBuLnN0YXJ0c1dpdGgoYCR7d2FudH0gYClcbiAgfSlcbiAgcmV0dXJuIGhpdCB8fCAoeWVzID8gXCJZZXNcIiA6IFwiTm9cIilcbn1cblxuLyoqIFB1bGwgbGVhZGluZyB5ZWFyLXJhbmdlIG51bWJlcnMgZnJvbSBzdHJpbmdzIGxpa2UgXCI1LTcgeWVhcnNcIiAvIFwiMTArXCIuICovXG5mdW5jdGlvbiB5ZWFyUmFuZ2VQYXJ0cyh0ZXh0OiBzdHJpbmcpOiB7IGxvOiBudW1iZXI7IGhpOiBudW1iZXIgfSB8IG51bGwge1xuICBjb25zdCBuID0gbm9ybWFsaXplTGFiZWwodGV4dClcbiAgY29uc3QgcGx1cyA9IG4ubWF0Y2goL14oXFxkKylcXHMqXFwrXFxzKih5ZWFycz8pPyQvKVxuICBpZiAocGx1cykge1xuICAgIGNvbnN0IGxvID0gTnVtYmVyKHBsdXNbMV0pXG4gICAgcmV0dXJuIHsgbG8sIGhpOiA5OSB9XG4gIH1cbiAgY29uc3QgcmFuZ2UgPSBuLm1hdGNoKC9eKFxcZCspXFxzKlst4oCT4oCUdG9dK1xccyooXFxkKylcXHMqKHllYXJzPyk/JC8pXG4gIGlmIChyYW5nZSkgcmV0dXJuIHsgbG86IE51bWJlcihyYW5nZVsxXSksIGhpOiBOdW1iZXIocmFuZ2VbMl0pIH1cbiAgY29uc3Qgc2luZ2xlID0gbi5tYXRjaCgvXihcXGQrKVxccyooeWVhcnM/KT8kLylcbiAgaWYgKHNpbmdsZSkge1xuICAgIGNvbnN0IHYgPSBOdW1iZXIoc2luZ2xlWzFdKVxuICAgIHJldHVybiB7IGxvOiB2LCBoaTogdiB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gc2NvcmVPcHRpb24oY2FuZGlkYXRlOiBzdHJpbmcsIG9wdGlvbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgYyA9IG5vcm1hbGl6ZUxhYmVsKGNhbmRpZGF0ZSlcbiAgY29uc3QgbyA9IG5vcm1hbGl6ZUxhYmVsKG9wdGlvbilcbiAgaWYgKCFjIHx8ICFvKSByZXR1cm4gMFxuICBpZiAoL15wbGVhc2Ugc2VsZWN0fF5zZWxlY3QgfF5jaG9vc2UgfF7igJR8Xi0kLy50ZXN0KG8pIHx8IG8gPT09IFwic2VsZWN0XCIpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmIChjID09PSBvKSByZXR1cm4gMTAwXG4gIGNvbnN0IGNGbGF0ID0gYy5yZXBsYWNlKC9cXHMqWy3igJPigJRdXFxzKi9nLCBcIi1cIikucmVwbGFjZSgvXFxzKy9nLCBcIlwiKVxuICBjb25zdCBvRmxhdCA9IG8ucmVwbGFjZSgvXFxzKlst4oCT4oCUXVxccyovZywgXCItXCIpLnJlcGxhY2UoL1xccysvZywgXCJcIilcbiAgaWYgKGNGbGF0ID09PSBvRmxhdCkgcmV0dXJuIDk4XG5cbiAgY29uc3QgY3IgPSB5ZWFyUmFuZ2VQYXJ0cyhjKVxuICBjb25zdCBvciA9IHllYXJSYW5nZVBhcnRzKG8pXG4gIGlmIChjciAmJiBvcikge1xuICAgIC8vIE92ZXJsYXBwaW5nIGV4cGVyaWVuY2UgYmFuZHMgKFBlcnNvbmlvIG9mdGVuIGRpZmZlcnMgc2xpZ2h0bHkgZnJvbSBodWIpXG4gICAgY29uc3Qgb3ZlcmxhcCA9IE1hdGgubWluKGNyLmhpLCBvci5oaSkgLSBNYXRoLm1heChjci5sbywgb3IubG8pXG4gICAgaWYgKG92ZXJsYXAgPj0gMCkgcmV0dXJuIDkwXG4gICAgY29uc3QgbWlkQyA9IChjci5sbyArIGNyLmhpKSAvIDJcbiAgICBjb25zdCBtaWRPID0gKG9yLmxvICsgb3IuaGkpIC8gMlxuICAgIGlmIChNYXRoLmFicyhtaWRDIC0gbWlkTykgPD0gMikgcmV0dXJuIDc1XG4gIH1cblxuICBpZiAoby5pbmNsdWRlcyhjKSB8fCBjLmluY2x1ZGVzKG8pKSByZXR1cm4gODBcbiAgY29uc3QgY3QgPSBuZXcgU2V0KGMuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKSlcbiAgY29uc3Qgb3QgPSBvLnNwbGl0KFwiIFwiKS5maWx0ZXIoQm9vbGVhbilcbiAgbGV0IGhpdCA9IDBcbiAgZm9yIChjb25zdCB0IG9mIG90KSBpZiAoY3QuaGFzKHQpKSBoaXQgKz0gMVxuICBpZiAoIW90Lmxlbmd0aCkgcmV0dXJuIDBcbiAgcmV0dXJuIE1hdGgucm91bmQoKGhpdCAvIG90Lmxlbmd0aCkgKiA2MClcbn1cblxuZnVuY3Rpb24gYWRhcHRUb09wdGlvbnModmFsdWU6IHN0cmluZywgb3B0aW9uczogc3RyaW5nW10pOiBzdHJpbmcge1xuICBpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm4gdmFsdWVcbiAgbGV0IGJlc3QgPSB2YWx1ZVxuICBsZXQgYmVzdFNjb3JlID0gMFxuICBmb3IgKGNvbnN0IG9wdCBvZiBvcHRpb25zKSB7XG4gICAgY29uc3QgcyA9IHNjb3JlT3B0aW9uKHZhbHVlLCBvcHQpXG4gICAgaWYgKHMgPiBiZXN0U2NvcmUpIHtcbiAgICAgIGJlc3RTY29yZSA9IHNcbiAgICAgIGJlc3QgPSBvcHRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJlc3RTY29yZSA+PSA0MCA/IGJlc3QgOiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBsYWJlbE1hdGNoZXMobm9ybTogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKG5vcm0gPT09IGtleSkgcmV0dXJuIHRydWVcbiAgICBpZiAoa2V5Lmxlbmd0aCA+PSA0ICYmIG5vcm0uaW5jbHVkZXMoa2V5KSkgcmV0dXJuIHRydWVcbiAgICBpZiAobm9ybS5sZW5ndGggPj0gNCAmJiBrZXkuaW5jbHVkZXMobm9ybSkgJiYgbm9ybS5sZW5ndGggPj0ga2V5Lmxlbmd0aCAtIDIpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKiogTG9uZyBsZWdhbCAvIGVsaWdpYmlsaXR5IHF1ZXN0aW9ucyDigJQgbmV2ZXIgdHJlYXQgYXMgcGxhaW4gbG9jYXRpb24gZmllbGRzLiAqL1xuZnVuY3Rpb24gaXNMZWdhbEVsaWdpYmlsaXR5UXVlc3Rpb24obm9ybTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgbm9ybS5pbmNsdWRlcyhcImF1dGhvcml6ZWRcIikgfHxcbiAgICBub3JtLmluY2x1ZGVzKFwiYXV0aG9yaXNlZFwiKSB8fFxuICAgIG5vcm0uaW5jbHVkZXMoXCJzcG9uc29yc2hpcFwiKSB8fFxuICAgIG5vcm0uaW5jbHVkZXMoXCJzcG9uc29yXCIpIHx8XG4gICAgbm9ybS5pbmNsdWRlcyhcImVsaWdpYmxlIHRvIHdvcmtcIikgfHxcbiAgICBub3JtLmluY2x1ZGVzKFwid29yayBhdXRob3JpemF0aW9uXCIpIHx8XG4gICAgbm9ybS5pbmNsdWRlcyhcInZpc2FcIikgfHxcbiAgICAobm9ybS5pbmNsdWRlcyhcInJlcXVpcmVcIikgJiYgbm9ybS5pbmNsdWRlcyhcImVtcGxveWVyXCIpKVxuICApXG59XG5cbmZ1bmN0aW9uIGlzUGxhaW5Mb2NhdGlvbkxhYmVsKG5vcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoaXNMZWdhbEVsaWdpYmlsaXR5UXVlc3Rpb24obm9ybSkpIHJldHVybiBmYWxzZVxuICBpZiAobm9ybS5pbmNsdWRlcyhcInBsYW5uZWQgd29yayBsb2NhdGlvblwiKSkgcmV0dXJuIGZhbHNlXG4gIGlmIChub3JtLmluY2x1ZGVzKFwicHJlZmVycmVkIHdvcmsgbG9jYXRpb25cIikpIHJldHVybiBmYWxzZVxuICByZXR1cm4gKFxuICAgIG5vcm0gPT09IFwibG9jYXRpb25cIiB8fFxuICAgIG5vcm0gPT09IFwiY3VycmVudCBsb2NhdGlvblwiIHx8XG4gICAgbm9ybSA9PT0gXCJjdXJyZW50IGNpdHlcIiB8fFxuICAgIG5vcm0gPT09IFwid2hlcmUgYXJlIHlvdSBsb2NhdGVkXCIgfHxcbiAgICBub3JtID09PSBcIndoZXJlIGFyZSB5b3UgYmFzZWRcIiB8fFxuICAgIG5vcm0gPT09IFwid2hlcmUgYmFzZWRcIiB8fFxuICAgIG5vcm0gPT09IFwieW91ciBsb2NhdGlvblwiIHx8XG4gICAgbm9ybSA9PT0gXCJjaXR5XCIgfHxcbiAgICBub3JtID09PSBcInRvd25cIiB8fFxuICAgIC9eY3VycmVudCAoY2l0eXxsb2NhdGlvbnxhZGRyZXNzKSQvLnRlc3Qobm9ybSkgfHxcbiAgICAobm9ybS5pbmNsdWRlcyhcIndoZXJlIGFyZSB5b3VcIikgJiZcbiAgICAgIChub3JtLmluY2x1ZGVzKFwiYmFzZWRcIikgfHwgbm9ybS5pbmNsdWRlcyhcImxvY2F0ZWRcIikpKVxuICApXG59XG5cbmZ1bmN0aW9uIGlzUGxhbm5lZFdvcmtMb2NhdGlvbkxhYmVsKG5vcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoaXNMZWdhbEVsaWdpYmlsaXR5UXVlc3Rpb24obm9ybSkpIHJldHVybiBmYWxzZVxuICByZXR1cm4gKFxuICAgIG5vcm0gPT09IFwicGxhbm5lZCB3b3JrIGxvY2F0aW9uXCIgfHxcbiAgICBub3JtID09PSBcInByZWZlcnJlZCB3b3JrIGxvY2F0aW9uXCIgfHxcbiAgICBub3JtID09PSBcIndvcmsgbG9jYXRpb25cIiB8fFxuICAgIG5vcm0gPT09IFwicHJlZmVycmVkIGxvY2F0aW9uXCIgfHxcbiAgICAobm9ybS5pbmNsdWRlcyhcInBsYW5uZWRcIikgJiYgbm9ybS5pbmNsdWRlcyhcImxvY2F0aW9uXCIpICYmICFub3JtLmluY2x1ZGVzKFwiYXV0aG9yaXplZFwiKSkgfHxcbiAgICAobm9ybS5pbmNsdWRlcyhcInByZWZlcnJlZFwiKSAmJlxuICAgICAgbm9ybS5pbmNsdWRlcyhcIndvcmtcIikgJiZcbiAgICAgIG5vcm0uaW5jbHVkZXMoXCJsb2NhdGlvblwiKSAmJlxuICAgICAgIW5vcm0uaW5jbHVkZXMoXCJhdXRob3JpemVkXCIpKVxuICApXG59XG5cbnR5cGUgQW5zd2VyUmVzb2x2ZXIgPSB7XG4gIGtleXM6IHN0cmluZ1tdXG4gIC8qKiBIaWdoZXIgPSB0cnkgZmlyc3QgZm9yIG92ZXJsYXBwaW5nIGxhYmVscyAqL1xuICBwcmlvcml0eT86IG51bWJlclxuICBnZXQ6IChoOiBBdXRvZmlsbEluZm9QYXlsb2FkLCBsYWJlbE5vcm06IHN0cmluZywgb3B0aW9uczogc3RyaW5nW10pID0+IHN0cmluZ1xufVxuXG5jb25zdCBBTlNXRVJfUkVTT0xWRVJTOiBBbnN3ZXJSZXNvbHZlcltdID0gW1xuICB7XG4gICAga2V5czogW1wiZmlyc3QgbmFtZVwiLCBcImZpcnN0bmFtZVwiLCBcImdpdmVuIG5hbWVcIiwgXCJsZWdhbCBmaXJzdCBuYW1lXCJdLFxuICAgIHByaW9yaXR5OiAyMCxcbiAgICBnZXQ6IChoKSA9PiBoLmlkZW50aXR5LmZpcnN0TmFtZVxuICB9LFxuICB7XG4gICAga2V5czogW1wibWlkZGxlIG5hbWVcIiwgXCJtaWRkbGVuYW1lXCJdLFxuICAgIHByaW9yaXR5OiAyMCxcbiAgICBnZXQ6IChoKSA9PiBleHRyYXNTdHJpbmcoaCwgXCJtaWRkbGVOYW1lXCIpXG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXCJsYXN0IG5hbWVcIiwgXCJsYXN0bmFtZVwiLCBcInN1cm5hbWVcIiwgXCJmYW1pbHkgbmFtZVwiLCBcImxlZ2FsIGxhc3QgbmFtZVwiXSxcbiAgICBwcmlvcml0eTogMjAsXG4gICAgZ2V0OiAoaCkgPT4gaC5pZGVudGl0eS5sYXN0TmFtZVxuICB9LFxuICB7XG4gICAga2V5czogW1wicHJlZmVycmVkIG5hbWVcIiwgXCJwcmVmZXJyZWQgZmlyc3QgbmFtZVwiXSxcbiAgICBwcmlvcml0eTogMTUsXG4gICAgZ2V0OiAoaCkgPT4gZXh0cmFzU3RyaW5nKGgsIFwicHJlZmVycmVkRmlyc3ROYW1lXCIpXG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXCJmdWxsIG5hbWVcIiwgXCJjYW5kaWRhdGUgbmFtZVwiLCBcImFwcGxpY2FudCBuYW1lXCJdLFxuICAgIHByaW9yaXR5OiAxMCxcbiAgICBnZXQ6IChoKSA9PlxuICAgICAgaC5pZGVudGl0eS5mdWxsTmFtZSB8fFxuICAgICAgYCR7aC5pZGVudGl0eS5maXJzdE5hbWV9ICR7aC5pZGVudGl0eS5sYXN0TmFtZX1gLnRyaW0oKVxuICB9LFxuICB7XG4gICAgLy8gQmFyZSBcIm5hbWVcIiBvbmx5IHdoZW4gbGFiZWwgaXMgZXhhY3RseSBuYW1lIChQZXJzb25pbyBcIk5hbWUqXCIpXG4gICAga2V5czogW1wibmFtZVwiXSxcbiAgICBwcmlvcml0eTogNSxcbiAgICBnZXQ6IChoLCBsYWJlbE5vcm0pID0+IHtcbiAgICAgIGlmIChsYWJlbE5vcm0gIT09IFwibmFtZVwiKSByZXR1cm4gXCJcIlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgaC5pZGVudGl0eS5mdWxsTmFtZSB8fFxuICAgICAgICBgJHtoLmlkZW50aXR5LmZpcnN0TmFtZX0gJHtoLmlkZW50aXR5Lmxhc3ROYW1lfWAudHJpbSgpXG4gICAgICApXG4gICAgfVxuICB9LFxuICB7XG4gICAga2V5czogW1wiZW1haWxcIiwgXCJlIG1haWxcIiwgXCJlbWFpbCBhZGRyZXNzXCIsIFwid29yayBlbWFpbFwiXSxcbiAgICBnZXQ6IChoKSA9PiBoLmlkZW50aXR5LmVtYWlsXG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXCJwaG9uZVwiLCBcInBob25lIG51bWJlclwiLCBcIm1vYmlsZVwiLCBcIm1vYmlsZSBwaG9uZVwiLCBcImNlbGxcIiwgXCJ0ZWxlcGhvbmVcIl0sXG4gICAgZ2V0OiAoaCkgPT4gaC5pZGVudGl0eS5waG9uZVxuICB9LFxuICB7XG4gICAga2V5czogW1wibGlua2VkaW5cIiwgXCJsaW5rZWRpbiB1cmxcIiwgXCJsaW5rZWRpbiBwcm9maWxlXCIsIFwibGlua2VkaW4gbGlua1wiXSxcbiAgICBnZXQ6IChoKSA9PiBoLmlkZW50aXR5LmxpbmtlZGluXG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXCJnaXRodWJcIiwgXCJnaXRodWIgdXJsXCIsIFwiZ2l0aHViIHByb2ZpbGVcIl0sXG4gICAgZ2V0OiAoaCkgPT4gZXh0cmFzU3RyaW5nKGgsIFwiZ2l0aHViXCIpXG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXCJ3ZWJzaXRlXCIsIFwicGVyc29uYWwgd2Vic2l0ZVwiLCBcInBvcnRmb2xpb1wiLCBcInBlcnNvbmFsIHNpdGVcIl0sXG4gICAgZ2V0OiAoaCkgPT4gaC5pZGVudGl0eS53ZWJzaXRlXG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXG4gICAgICBcImN1cnJlbnQgbG9jYXRpb25cIixcbiAgICAgIFwiY3VycmVudCBjaXR5XCIsXG4gICAgICBcIndoZXJlIGFyZSB5b3UgbG9jYXRlZFwiLFxuICAgICAgXCJ3aGVyZSBhcmUgeW91IGJhc2VkXCIsXG4gICAgICBcIndoZXJlIGJhc2VkXCIsXG4gICAgICBcInlvdXIgbG9jYXRpb25cIixcbiAgICAgIFwibG9jYXRpb24gY2l0eVwiXG4gICAgXSxcbiAgICBwcmlvcml0eTogMjUsXG4gICAgZ2V0OiAoaCwgbGFiZWxOb3JtKSA9PiB7XG4gICAgICBpZiAoaXNMZWdhbEVsaWdpYmlsaXR5UXVlc3Rpb24obGFiZWxOb3JtKSkgcmV0dXJuIFwiXCJcbiAgICAgIGlmICghaXNQbGFpbkxvY2F0aW9uTGFiZWwobGFiZWxOb3JtKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbGFiZWxOb3JtICE9PSBcImN1cnJlbnQgY2l0eVwiICYmXG4gICAgICAgICAgbGFiZWxOb3JtICE9PSBcIndoZXJlIGFyZSB5b3UgbG9jYXRlZFwiICYmXG4gICAgICAgICAgbGFiZWxOb3JtICE9PSBcIndoZXJlIGFyZSB5b3UgYmFzZWRcIiAmJlxuICAgICAgICAgIGxhYmVsTm9ybSAhPT0gXCJ3aGVyZSBiYXNlZFwiICYmXG4gICAgICAgICAgbGFiZWxOb3JtICE9PSBcInlvdXIgbG9jYXRpb25cIiAmJlxuICAgICAgICAgIGxhYmVsTm9ybSAhPT0gXCJsb2NhdGlvbiBjaXR5XCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdExvY2F0aW9uKGgpIHx8IGguaWRlbnRpdHkuYWRkcmVzcy5jaXR5XG4gICAgfVxuICB9LFxuICB7XG4gICAga2V5czogW1wiY2l0eVwiLCBcInRvd25cIl0sXG4gICAgcHJpb3JpdHk6IDEwLFxuICAgIGdldDogKGgsIGxhYmVsTm9ybSkgPT4ge1xuICAgICAgaWYgKGlzTGVnYWxFbGlnaWJpbGl0eVF1ZXN0aW9uKGxhYmVsTm9ybSkpIHJldHVybiBcIlwiXG4gICAgICBpZiAobGFiZWxOb3JtLmluY2x1ZGVzKFwibG9jYXRpb25cIikgJiYgIWlzUGxhaW5Mb2NhdGlvbkxhYmVsKGxhYmVsTm9ybSkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIH1cbiAgICAgIHJldHVybiBoLmlkZW50aXR5LmFkZHJlc3MuY2l0eVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGtleXM6IFtcInN0YXRlXCIsIFwicHJvdmluY2VcIiwgXCJyZWdpb25cIl0sXG4gICAgZ2V0OiAoaCkgPT4gaC5pZGVudGl0eS5hZGRyZXNzLnN0YXRlXG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXCJjb3VudHJ5XCIsIFwiY291bnRyeSByZWdpb25cIiwgXCJuYXRpb25cIl0sXG4gICAgZ2V0OiAoaCkgPT4gaC5pZGVudGl0eS5hZGRyZXNzLmNvdW50cnlcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcImNvdW50eVwiXSxcbiAgICBnZXQ6IChoKSA9PiBleHRyYXNTdHJpbmcoaCwgXCJjb3VudHlcIilcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcInppcFwiLCBcInppcCBjb2RlXCIsIFwicG9zdGFsXCIsIFwicG9zdGFsIGNvZGVcIiwgXCJwb3N0Y29kZVwiXSxcbiAgICBnZXQ6IChoKSA9PiBoLmlkZW50aXR5LmFkZHJlc3MucG9zdGFsQ29kZVxuICB9LFxuICB7XG4gICAga2V5czogW1wiYWRkcmVzcyBsaW5lIDJcIiwgXCJhZGRyZXNzIDJcIiwgXCJhcHRcIiwgXCJzdWl0ZVwiLCBcInVuaXRcIl0sXG4gICAgcHJpb3JpdHk6IDE1LFxuICAgIGdldDogKGgpID0+IGguaWRlbnRpdHkuYWRkcmVzcy5saW5lMlxuICB9LFxuICB7XG4gICAga2V5czogW1wiYWRkcmVzc1wiLCBcInN0cmVldCBhZGRyZXNzXCIsIFwiYWRkcmVzcyBsaW5lIDFcIiwgXCJhZGRyZXNzIDFcIiwgXCJzdHJlZXRcIl0sXG4gICAgcHJpb3JpdHk6IDEwLFxuICAgIGdldDogKGgpID0+IGguaWRlbnRpdHkuYWRkcmVzcy5saW5lMVxuICB9LFxuICB7XG4gICAga2V5czogW1wiZ2VuZGVyXCIsIFwic2V4XCJdLFxuICAgIGdldDogKGgpID0+IGVtcGxveW1lbnRGaWVsZChoLCBcImdlbmRlclwiKVxuICB9LFxuICB7XG4gICAga2V5czogW1wicmFjZVwiLCBcImV0aG5pY2l0eVwiLCBcImV0aG5pY1wiXSxcbiAgICBnZXQ6IChoKSA9PiBlbXBsb3ltZW50RmllbGQoaCwgXCJyYWNlXCIpXG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXCJ2ZXRlcmFuXCIsIFwibWlsaXRhcnlcIl0sXG4gICAgZ2V0OiAoaCkgPT4gZW1wbG95bWVudEZpZWxkKGgsIFwidmV0ZXJhblwiKVxuICB9LFxuICB7XG4gICAga2V5czogW1wiZGlzYWJpbGl0eVwiLCBcImRpc2FibGVkXCJdLFxuICAgIGdldDogKGgpID0+IGVtcGxveW1lbnRGaWVsZChoLCBcImRpc2FiaWxpdHlcIilcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcImhpc3BhbmljXCIsIFwibGF0aW5vXCIsIFwibGF0aW5hXCJdLFxuICAgIGdldDogKGgpID0+IGVtcGxveW1lbnRGaWVsZChoLCBcImhpc3BhbmljXCIpXG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXCJsZ2J0XCIsIFwibGdidHFcIl0sXG4gICAgZ2V0OiAoaCkgPT4gZW1wbG95bWVudEZpZWxkKGgsIFwibGdidFwiKVxuICB9LFxuICB7XG4gICAga2V5czogW1wicHJvbm91bnNcIl0sXG4gICAgZ2V0OiAoaCkgPT4gZXh0cmFzU3RyaW5nKGgsIFwicHJvbm91bnNcIilcbiAgfSxcbiAge1xuICAgIGtleXM6IFtcbiAgICAgIFwiZXhwZWN0ZWQgc2FsYXJ5XCIsXG4gICAgICBcImRlc2lyZWQgc2FsYXJ5XCIsXG4gICAgICBcInNhbGFyeSBleHBlY3RhdGlvblwiLFxuICAgICAgXCJzYWxhcnkgZXhwZWN0YXRpb25zXCIsXG4gICAgICBcImNvbXBlbnNhdGlvblwiLFxuICAgICAgXCJzYWxhcnlcIlxuICAgIF0sXG4gICAgcHJpb3JpdHk6IDIwLFxuICAgIGdldDogKGgpID0+IGV4dHJhc1N0cmluZyhoLCBcInNhbGFyeVwiKVxuICB9LFxuICB7XG4gICAga2V5czogW1xuICAgICAgXCJiaXJ0aGRheVwiLFxuICAgICAgXCJkYXRlIG9mIGJpcnRoXCIsXG4gICAgICBcImRvYlwiLFxuICAgICAgXCJiaXJ0aCBkYXRlXCIsXG4gICAgICBcImJpcnRoZGF0ZVwiXG4gICAgXSxcbiAgICBwcmlvcml0eTogMjUsXG4gICAgZ2V0OiAoaCwgX24sIG9wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IHJhdyA9XG4gICAgICAgIGV4dHJhc1N0cmluZyhoLCBcImJpcnRoZGF5XCIpIHx8IGV4dHJhc1N0cmluZyhoLCBcImRhdGVPZkJpcnRoXCIpXG4gICAgICBpZiAoIXJhdy50cmltKCkpIHJldHVybiBcIlwiXG4gICAgICBjb25zdCB0ID0gcmF3LnRyaW0oKVxuICAgICAgbGV0IHltZCA9IHRcbiAgICAgIGlmICgvXlxcZHs0fS1cXGR7Mn0kLy50ZXN0KHQpKSB5bWQgPSBgJHt0fS0wMWBcbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCB1cyA9IHQubWF0Y2goL14oXFxkezEsMn0pXFwvKFxcZHsxLDJ9KVxcLyhcXGR7NH0pJC8pXG4gICAgICAgIGlmICh1cykge1xuICAgICAgICAgIHltZCA9IGAke3VzWzNdfS0ke3VzWzFdLnBhZFN0YXJ0KDIsIFwiMFwiKX0tJHt1c1syXS5wYWRTdGFydCgyLCBcIjBcIil9YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBtID0geW1kLm1hdGNoKC9eKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkkLylcbiAgICAgIGNvbnN0IHVzRm10ID0gbSA/IGAke21bMl19LyR7bVszXX0vJHttWzFdfWAgOiB5bWRcbiAgICAgIGlmICghb3B0aW9ucy5sZW5ndGgpIHJldHVybiB1c0ZtdFxuICAgICAgY29uc3Qgam9pbmVkID0gb3B0aW9ucy5tYXAobm9ybWFsaXplTGFiZWwpLmpvaW4oXCIgXCIpXG4gICAgICBpZiAoam9pbmVkLmluY2x1ZGVzKFwieXl5eVwiKSB8fCBqb2luZWQuaW5jbHVkZXMoXCItXCIpKSByZXR1cm4geW1kXG4gICAgICByZXR1cm4gdXNGbXRcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXG4gICAgICBcInllYXJzIG9mIGV4cGVyaWVuY2VcIixcbiAgICAgIFwieWVhcnMgZXhwZXJpZW5jZVwiLFxuICAgICAgXCJ0b3RhbCBleHBlcmllbmNlXCIsXG4gICAgICBcImhvdyBtYW55IHllYXJzXCJcbiAgICBdLFxuICAgIHByaW9yaXR5OiAzNSxcbiAgICBnZXQ6IChoLCBsYWJlbE5vcm0sIG9wdGlvbnMpID0+IHtcbiAgICAgIGlmIChpc0xlZ2FsRWxpZ2liaWxpdHlRdWVzdGlvbihsYWJlbE5vcm0pKSByZXR1cm4gXCJcIlxuICAgICAgY29uc3QgdiA9IGV4dHJhc1N0cmluZyhoLCBcInllYXJzT2ZFeHBlcmllbmNlXCIpXG4gICAgICBpZiAoIXYpIHJldHVybiBcIlwiXG4gICAgICByZXR1cm4gb3B0aW9ucy5sZW5ndGggPyBhZGFwdFRvT3B0aW9ucyh2LCBvcHRpb25zKSA6IHZcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXG4gICAgICBcInBsYW5uZWQgd29yayBsb2NhdGlvblwiLFxuICAgICAgXCJwcmVmZXJyZWQgd29yayBsb2NhdGlvblwiLFxuICAgICAgXCJ3b3JrIGxvY2F0aW9uXCIsXG4gICAgICBcInByZWZlcnJlZCBsb2NhdGlvblwiXG4gICAgXSxcbiAgICBwcmlvcml0eTogMzUsXG4gICAgZ2V0OiAoaCwgbGFiZWxOb3JtLCBvcHRpb25zKSA9PiB7XG4gICAgICBpZiAoIWlzUGxhbm5lZFdvcmtMb2NhdGlvbkxhYmVsKGxhYmVsTm9ybSkpIHJldHVybiBcIlwiXG4gICAgICBjb25zdCB2ID0gZXh0cmFzU3RyaW5nKGgsIFwicGxhbm5lZFdvcmtMb2NhdGlvblwiKVxuICAgICAgaWYgKCF2KSByZXR1cm4gXCJcIlxuICAgICAgcmV0dXJuIG9wdGlvbnMubGVuZ3RoID8gYWRhcHRUb09wdGlvbnModiwgb3B0aW9ucykgOiB2XG4gICAgfVxuICB9LFxuICB7XG4gICAga2V5czogW1xuICAgICAgXCJhdmFpbGFibGUgZnJvbVwiLFxuICAgICAgXCJhdmFpbGFibGUgZGF0ZVwiLFxuICAgICAgXCJhdmFpbGFiaWxpdHkgZGF0ZVwiLFxuICAgICAgXCJlYXJsaWVzdCBzdGFydFwiLFxuICAgICAgXCJzdGFydCBkYXRlXCIsXG4gICAgICBcImhpcmluZyBkYXRlXCIsXG4gICAgICBcImF2YWlsYWJpbGl0eVwiXG4gICAgXSxcbiAgICBwcmlvcml0eTogMjAsXG4gICAgZ2V0OiAoaCwgX24sIG9wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IGlzbyA9IGZvcm1hdEhpcmluZ0RhdGUoaClcbiAgICAgIGNvbnN0IHVzID0gZm9ybWF0SGlyaW5nRGF0ZVVzKGgpXG4gICAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm4gaXNvXG4gICAgICBjb25zdCBqb2luZWQgPSBvcHRpb25zLm1hcChub3JtYWxpemVMYWJlbCkuam9pbihcIiBcIilcbiAgICAgIGlmIChqb2luZWQuaW5jbHVkZXMoXCJtbVwiKSB8fCBqb2luZWQuaW5jbHVkZXMoXCJkZFwiKSkgcmV0dXJuIHVzXG4gICAgICByZXR1cm4gaXNvXG4gICAgfVxuICB9LFxuICB7XG4gICAga2V5czogW1xuICAgICAgXCJzb3VyY2VcIixcbiAgICAgIFwiam9iIHBvcnRhbFwiLFxuICAgICAgXCJob3cgZGlkIHlvdSBoZWFyXCIsXG4gICAgICBcInJlZmVycmFsIHNvdXJjZVwiLFxuICAgICAgXCJhcHBsaWNhdGlvbiBzb3VyY2VcIlxuICAgIF0sXG4gICAgcHJpb3JpdHk6IDE1LFxuICAgIGdldDogKGgsIF9uLCBvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBsaW5rZWRpbiA9IGguaWRlbnRpdHkubGlua2VkaW5cbiAgICAgIGlmIChsaW5rZWRpbiAmJiBvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBoaXQgPSBvcHRpb25zLmZpbmQoKG8pID0+IC9saW5rZWRpbi9pLnRlc3QobykpXG4gICAgICAgIGlmIChoaXQpIHJldHVybiBoaXRcbiAgICAgIH1cbiAgICAgIGlmIChsaW5rZWRpbikgcmV0dXJuIFwiTGlua2VkSW5cIlxuICAgICAgY29uc3Qgb3RoZXIgPSBvcHRpb25zLmZpbmQoKG8pID0+IC9eb3RoZXIkL2kudGVzdChvLnRyaW0oKSkpXG4gICAgICByZXR1cm4gb3RoZXIgfHwgZXh0cmFzU3RyaW5nKGgsIFwiYWRkaXRpb25hbEFwcGxpY2F0aW9uSW5mb1wiKSB8fCBcIk90aGVyXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXG4gICAgICBcImdkcHJcIixcbiAgICAgIFwicHJpdmFjeSBwb2xpY3lcIixcbiAgICAgIFwiZGF0YSByZXRlbnRpb25cIixcbiAgICAgIFwicmV0YWluIG15IGRhdGFcIixcbiAgICAgIFwiY29uc2VudFwiLFxuICAgICAgXCJpIGFncmVlXCIsXG4gICAgICBcInRlcm1zIGFuZCBjb25kaXRpb25zXCIsXG4gICAgICBcInRlcm1zIG9mIHVzZVwiXG4gICAgXSxcbiAgICBwcmlvcml0eTogMzAsXG4gICAgZ2V0OiAoX2gsIGxhYmVsTm9ybSwgb3B0aW9ucykgPT4ge1xuICAgICAgLy8gTmV2ZXIgYW5zd2VyIGxlZ2FsIHdvcmstYXV0aCB3aXRoIEdEUFIgeWVzXG4gICAgICBpZiAoaXNMZWdhbEVsaWdpYmlsaXR5UXVlc3Rpb24obGFiZWxOb3JtKSkgcmV0dXJuIFwiXCJcbiAgICAgIGlmICghb3B0aW9ucy5sZW5ndGgpIHJldHVybiBcIlllc1wiXG4gICAgICBjb25zdCBoaXQgPVxuICAgICAgICBvcHRpb25zLmZpbmQoKG8pID0+XG4gICAgICAgICAgL2FncmVlfGFjY2VwdHxjb25zZW50fHllc3xpIGhhdmUgcmVhZHxhY2tub3dsZWRnZS9pLnRlc3QobylcbiAgICAgICAgKSB8fCBvcHRpb25zLmZpbmQoKG8pID0+ICEvc2VsZWN0fGNob29zZXxwbGVhc2UvaS50ZXN0KG8pKVxuICAgICAgcmV0dXJuIGhpdCB8fCBcIlllc1wiXG4gICAgfVxuICB9LFxuICB7XG4gICAgLy8gXCJhdXRob3JpemVkIC4uLiB3aXRob3V0IGVtcGxveWVyIHNwb25zb3JzaGlwP1wiIOKGkiBZZXMgb25seSBpZiBhdXRob3JpemVkIEFORCBubyBzcG9uc29yc2hpcFxuICAgIGtleXM6IFtcbiAgICAgIFwid2l0aG91dCBlbXBsb3llciBzcG9uc29yc2hpcFwiLFxuICAgICAgXCJ3aXRob3V0IHNwb25zb3JzaGlwXCIsXG4gICAgICBcImF1dGhvcml6ZWQgdG8gd29ya1wiLFxuICAgICAgXCJsZWdhbGx5IGF1dGhvcml6ZWRcIixcbiAgICAgIFwiZWxpZ2libGUgdG8gd29ya1wiLFxuICAgICAgXCJ3b3JrIGF1dGhvcml6YXRpb25cIixcbiAgICAgIFwid29yayBhdXRob3Jpc2F0aW9uXCJcbiAgICBdLFxuICAgIHByaW9yaXR5OiA0MCxcbiAgICBnZXQ6IChoLCBsYWJlbE5vcm0sIG9wdGlvbnMpID0+IHtcbiAgICAgIGlmICghaXNMZWdhbEVsaWdpYmlsaXR5UXVlc3Rpb24obGFiZWxOb3JtKSAmJiAhbGFiZWxOb3JtLmluY2x1ZGVzKFwiYXV0aG9yaXplZFwiKSkge1xuICAgICAgICBpZiAoIWxhYmVsTm9ybS5pbmNsdWRlcyhcIndvcmsgYXV0aG9yaXphdGlvblwiKSkgcmV0dXJuIFwiXCJcbiAgICAgIH1cbiAgICAgIGNvbnN0IGF1dGggPSBpc1dvcmtBdXRob3JpemVkKGgpXG4gICAgICBjb25zdCBzcG9uc29yID0gbmVlZHNTcG9uc29yc2hpcChoKVxuICAgICAgY29uc3QgYXNrc1dpdGhvdXRTcG9uc29yc2hpcCA9XG4gICAgICAgIGxhYmVsTm9ybS5pbmNsdWRlcyhcIndpdGhvdXRcIikgJiYgbGFiZWxOb3JtLmluY2x1ZGVzKFwic3BvbnNvcnNoaXBcIilcbiAgICAgIGNvbnN0IGFza3NBdXRob3JpemVkID1cbiAgICAgICAgbGFiZWxOb3JtLmluY2x1ZGVzKFwiYXV0aG9yaXplZFwiKSB8fFxuICAgICAgICBsYWJlbE5vcm0uaW5jbHVkZXMoXCJhdXRob3Jpc2VkXCIpIHx8XG4gICAgICAgIGxhYmVsTm9ybS5pbmNsdWRlcyhcImVsaWdpYmxlIHRvIHdvcmtcIikgfHxcbiAgICAgICAgbGFiZWxOb3JtLmluY2x1ZGVzKFwid29yayBhdXRob3JpemF0aW9uXCIpXG5cbiAgICAgIGxldCB5ZXM6IGJvb2xlYW4gfCBudWxsID0gbnVsbFxuICAgICAgaWYgKGFza3NXaXRob3V0U3BvbnNvcnNoaXApIHtcbiAgICAgICAgeWVzID1cbiAgICAgICAgICBhdXRoID09PSB0cnVlICYmIHNwb25zb3IgIT09IHRydWVcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiBhdXRoID09PSBmYWxzZSB8fCBzcG9uc29yID09PSB0cnVlXG4gICAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICB9IGVsc2UgaWYgKGFza3NBdXRob3JpemVkKSB7XG4gICAgICAgIHllcyA9IGF1dGhcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmF3ID0gZW1wbG95bWVudEZpZWxkKGgsIFwid29ya0F1dGhvcml6YXRpb25cIilcblxuICAgICAgLy8gTmF0aXZlIFllcy9ObyBjb250cm9sc1xuICAgICAgaWYgKHllcyAhPSBudWxsICYmIGhhc1llc05vT3B0aW9ucyhvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gcGlja1llc05vKG9wdGlvbnMsIHllcylcbiAgICAgIH1cbiAgICAgIC8vIEZyZWUtdGV4dCAvIHRleHRhcmVhOiB3cml0ZSBhIGNsZWFyIHNlbnRlbmNlLCBuZXZlciBsb2NhdGlvbiBqdW5rXG4gICAgICBpZiAoeWVzICE9IG51bGwgJiYgIW9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChhc2tzV2l0aG91dFNwb25zb3JzaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIHllc1xuICAgICAgICAgICAgPyBcIlllcyDigJQgSSBhbSBhdXRob3JpemVkIHRvIHdvcmsgd2l0aG91dCBlbXBsb3llciBzcG9uc29yc2hpcC5cIlxuICAgICAgICAgICAgOiBcIk5vIOKAlCBJIHdpbGwgcmVxdWlyZSBlbXBsb3llciBzcG9uc29yc2hpcC5cIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5ZXNcbiAgICAgICAgICA/IHJhdyB8fCBcIlllcywgSSBhbSBhdXRob3JpemVkIHRvIHdvcmsuXCJcbiAgICAgICAgICA6IHJhdyB8fCBcIk5vLCBJIGFtIG5vdCBjdXJyZW50bHkgYXV0aG9yaXplZCB3aXRob3V0IHNwb25zb3JzaGlwLlwiXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvcHRpb25zLmxlbmd0aCA/IGFkYXB0VG9PcHRpb25zKHJhdywgb3B0aW9ucykgOiByYXdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBrZXlzOiBbXG4gICAgICBcInJlcXVpcmUgZW1wbG95ZXIgc3BvbnNvcnNoaXBcIixcbiAgICAgIFwicmVxdWlyZSBzcG9uc29yc2hpcFwiLFxuICAgICAgXCJ2aXNhIHNwb25zb3JzaGlwXCIsXG4gICAgICBcInNwb25zb3JzaGlwIG5vdyBvciBpbiB0aGUgZnV0dXJlXCIsXG4gICAgICBcInNwb25zb3JzaGlwXCJcbiAgICBdLFxuICAgIHByaW9yaXR5OiA0MCxcbiAgICBnZXQ6IChoLCBsYWJlbE5vcm0sIG9wdGlvbnMpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWxhYmVsTm9ybS5pbmNsdWRlcyhcInNwb25zb3JcIikgJiZcbiAgICAgICAgIWxhYmVsTm9ybS5pbmNsdWRlcyhcInZpc2FcIilcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgfVxuICAgICAgY29uc3Qgc3BvbnNvciA9IG5lZWRzU3BvbnNvcnNoaXAoaClcbiAgICAgIGNvbnN0IGFza3NSZXF1aXJlID1cbiAgICAgICAgbGFiZWxOb3JtLmluY2x1ZGVzKFwicmVxdWlyZVwiKSB8fFxuICAgICAgICBsYWJlbE5vcm0uaW5jbHVkZXMoXCJuZWVkXCIpIHx8XG4gICAgICAgIGxhYmVsTm9ybS5pbmNsdWRlcyhcIndpbGwgeW91XCIpXG5cbiAgICAgIGNvbnN0IHJhdyA9IGVtcGxveW1lbnRGaWVsZChoLCBcInNwb25zb3JzaGlwU3RhdHVzXCIpXG5cbiAgICAgIGlmIChzcG9uc29yICE9IG51bGwgJiYgYXNrc1JlcXVpcmUgJiYgaGFzWWVzTm9PcHRpb25zKG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBwaWNrWWVzTm8ob3B0aW9ucywgc3BvbnNvcilcbiAgICAgIH1cbiAgICAgIGlmIChzcG9uc29yICE9IG51bGwgJiYgYXNrc1JlcXVpcmUgJiYgIW9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzcG9uc29yXG4gICAgICAgICAgPyBcIlllcyDigJQgSSB3aWxsIHJlcXVpcmUgZW1wbG95ZXIgc3BvbnNvcnNoaXAgbm93IG9yIGluIHRoZSBmdXR1cmUuXCJcbiAgICAgICAgICA6IFwiTm8g4oCUIEkgd2lsbCBub3QgcmVxdWlyZSBlbXBsb3llciBzcG9uc29yc2hpcC5cIlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3B0aW9ucy5sZW5ndGggPyBhZGFwdFRvT3B0aW9ucyhyYXcsIG9wdGlvbnMpIDogcmF3XG4gICAgfVxuICB9XG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBBbnN3ZXIoXG4gIGh1YjogQXV0b2ZpbGxJbmZvUGF5bG9hZCxcbiAgbGFiZWw6IHN0cmluZyxcbiAgb3B0aW9uczogc3RyaW5nW10gPSBbXVxuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IG5vcm0gPSBub3JtYWxpemVMYWJlbChsYWJlbClcbiAgaWYgKCFub3JtKSByZXR1cm4gbnVsbFxuXG4gIC8vIEV4cGxpY2l0IFEmQSBmcm9tIGh1YiBmaXJzdCAoZXhhY3QgLyBjYXJlZnVsIGNvbnRhaW5zKVxuICBsZXQgYmVzdEFuc3dlcjogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgbGV0IGJlc3RBbnN3ZXJTY29yZSA9IDBcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoaHViLmFuc3dlcnMgfHwge30pKSB7XG4gICAgaWYgKCF2YWx1ZSkgY29udGludWVcbiAgICBjb25zdCBuayA9IG5vcm1hbGl6ZUxhYmVsKGtleSlcbiAgICBsZXQgc2NvcmUgPSAwXG4gICAgaWYgKG5rID09PSBub3JtKSBzY29yZSA9IDEwMFxuICAgIGVsc2UgaWYgKFxuICAgICAgLy8gQ29udGlndW91cyBwaHJhc2Ugb25seSDigJQgYmxvY2tzIHNob3J0IGtleXMgbGlrZSBcIkxvY2F0aW9uXCIgbWF0Y2hpbmdcbiAgICAgIC8vIFwi4oCmcGxhbm5lZCB3b3JrIGxvY2F0aW9u4oCmXCIgLyBhdXRoIHF1ZXN0aW9ucy5cbiAgICAgIG5rLnNwbGl0KFwiIFwiKS5sZW5ndGggPj0gMiAmJlxuICAgICAgbmsubGVuZ3RoID49IDggJiZcbiAgICAgIG5vcm0uaW5jbHVkZXMobmspXG4gICAgKSB7XG4gICAgICBzY29yZSA9IDg1XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIG5rLnNwbGl0KFwiIFwiKS5sZW5ndGggPj0gMiAmJlxuICAgICAgbm9ybS5zcGxpdChcIiBcIikubGVuZ3RoIDw9IG5rLnNwbGl0KFwiIFwiKS5sZW5ndGggKyAzICYmXG4gICAgICAobm9ybS5pbmNsdWRlcyhuaykgfHwgbmsuaW5jbHVkZXMobm9ybSkpXG4gICAgKSB7XG4gICAgICBzY29yZSA9IDcwXG4gICAgfSBlbHNlIGlmICghaXNMZWdhbEVsaWdpYmlsaXR5UXVlc3Rpb24obm9ybSkpIHtcbiAgICAgIGNvbnN0IG50ID0gbmV3IFNldChub3JtLnNwbGl0KFwiIFwiKS5maWx0ZXIoKHQpID0+IHQubGVuZ3RoID4gMikpXG4gICAgICBjb25zdCBrdCA9IG5rLnNwbGl0KFwiIFwiKS5maWx0ZXIoKHQpID0+IHQubGVuZ3RoID4gMilcbiAgICAgIGlmIChrdC5sZW5ndGggPj0gMikge1xuICAgICAgICBjb25zdCBoaXRzID0ga3QuZmlsdGVyKCh0KSA9PiBudC5oYXModCkpLmxlbmd0aFxuICAgICAgICBjb25zdCByYXRpbyA9IGhpdHMgLyBNYXRoLm1heChrdC5sZW5ndGgsIG50LnNpemUpXG4gICAgICAgIGlmIChyYXRpbyA+PSAwLjcgJiYgaGl0cyA+PSAyKSBzY29yZSA9IE1hdGgucm91bmQocmF0aW8gKiA2NSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOZXZlciBsZXQgbG9jYXRpb24gYW5zd2VycyB3aW4gb24gbGVnYWwgcXVlc3Rpb25zXG4gICAgaWYgKFxuICAgICAgaXNMZWdhbEVsaWdpYmlsaXR5UXVlc3Rpb24obm9ybSkgJiZcbiAgICAgIC9sb2NhdGlvbnxjaXR5fGFkZHJlc3MvLnRlc3QobmspICYmXG4gICAgICAhL3Nwb25zb3J8YXV0aG9yaXp8dmlzYXxlbGlnaWJsZS8udGVzdChuaylcbiAgICApIHtcbiAgICAgIHNjb3JlID0gMFxuICAgIH1cblxuICAgIGlmIChzY29yZSA+IGJlc3RBbnN3ZXJTY29yZSkge1xuICAgICAgYmVzdEFuc3dlclNjb3JlID0gc2NvcmVcbiAgICAgIGJlc3RBbnN3ZXIgPSB2YWx1ZVxuICAgIH1cbiAgfVxuICBpZiAoYmVzdEFuc3dlciAmJiBiZXN0QW5zd2VyU2NvcmUgPj0gNzApIHtcbiAgICAvLyBQcmVmZXIgc3RydWN0dXJlZCByZXNvbHZlcnMgZm9yIGxlZ2FsIFllcy9ObyB3aGVuIHRoZSBmaWVsZCBpcyBmcmVlLXRleHRcbiAgICAvLyAoUGVyc29uaW8gYXV0aCBxdWVzdGlvbnMgYXJlIHRleHRhcmVhcywgbm90IHJhZGlvcykuXG4gICAgY29uc3Qgc2hvcnRZZXNObyA9IC9eKHllc3xubylcXGIvaS50ZXN0KGJlc3RBbnN3ZXIudHJpbSgpKVxuICAgIGlmIChcbiAgICAgICEoXG4gICAgICAgIGlzTGVnYWxFbGlnaWJpbGl0eVF1ZXN0aW9uKG5vcm0pICYmXG4gICAgICAgICFvcHRpb25zLmxlbmd0aCAmJlxuICAgICAgICBzaG9ydFllc05vXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sZW5ndGggPyBhZGFwdFRvT3B0aW9ucyhiZXN0QW5zd2VyLCBvcHRpb25zKSA6IGJlc3RBbnN3ZXJcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXRjaGVzID0gQU5TV0VSX1JFU09MVkVSUy5maWx0ZXIoKHIpID0+IGxhYmVsTWF0Y2hlcyhub3JtLCByLmtleXMpKS5zb3J0KFxuICAgIChhLCBiKSA9PiAoYi5wcmlvcml0eSA/PyAwKSAtIChhLnByaW9yaXR5ID8/IDApXG4gIClcblxuICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIG1hdGNoZXMpIHtcbiAgICBjb25zdCB2ID0gcmVzb2x2ZXIuZ2V0KGh1Yiwgbm9ybSwgb3B0aW9ucyk/LnRyaW0oKVxuICAgIGlmICh2KSByZXR1cm4gb3B0aW9ucy5sZW5ndGggPyBhZGFwdFRvT3B0aW9ucyh2LCBvcHRpb25zKSA6IHZcbiAgfVxuXG4gIGlmIChiZXN0QW5zd2VyICYmIGJlc3RBbnN3ZXJTY29yZSA+PSA3MCkge1xuICAgIHJldHVybiBvcHRpb25zLmxlbmd0aCA/IGFkYXB0VG9PcHRpb25zKGJlc3RBbnN3ZXIsIG9wdGlvbnMpIDogYmVzdEFuc3dlclxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBMb2NhbCBzdGFuZC1pbiBmb3IgSm9icmlnaHQgZmlsbC12MiAvIGdldEdwdFJlc3VsdHMuXG4gKiBCdWlsZHMgZmlsbF9kYXRhX2xpc3QgZnJvbSBodWIgaWRlbnRpdHkgKyBhbnN3ZXJzICsgc3RydWN0dXJlZCBleHRyYXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsR3B0UmVzdWx0cyhcbiAgaHViOiBBdXRvZmlsbEluZm9QYXlsb2FkLFxuICBlbGVtZW50czogRmlsbEVsZW1lbnRbXVxuKToge1xuICBmaWxsX2RhdGFfbGlzdDogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT5cbiAgcHJvZmlsZV9kYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBwcm9maWxlRGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn0ge1xuICBjb25zdCBqb2JyaWdodCA9IGh1YlRvSm9icmlnaHRBdXRvZmlsbChodWIpXG4gIGNvbnN0IGZpbGxfZGF0YV9saXN0OiBBcnJheTx7IG5hbWU6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9PiA9IFtdXG5cbiAgZm9yIChjb25zdCBlbCBvZiBlbGVtZW50cykge1xuICAgIGNvbnN0IGxhYmVsID0gdHlwZW9mIGVsPy5sYWJlbCA9PT0gXCJzdHJpbmdcIiA/IGVsLmxhYmVsIDogXCJcIlxuICAgIGlmICghbGFiZWwpIGNvbnRpbnVlXG4gICAgY29uc3Qgb3B0aW9ucyA9IGVsZW1lbnRPcHRpb25zKGVsKVxuICAgIGxldCB2YWx1ZSA9IGxvb2t1cEFuc3dlcihodWIsIGxhYmVsLCBvcHRpb25zKVxuXG4gICAgLy8gRmFsbGJhY2s6IGFwcGxpY2F0aW9uU3VtbWFyeSBmcm9tIGh1YiBleHRyYXMgKHRlYW0tc2l0ZSBkZXJpdmVkKVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPVxuICAgICAgICBodWIuZXh0cmFzPy5hcHBsaWNhdGlvblN1bW1hcnkgJiZcbiAgICAgICAgdHlwZW9mIGh1Yi5leHRyYXMuYXBwbGljYXRpb25TdW1tYXJ5ID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KGh1Yi5leHRyYXMuYXBwbGljYXRpb25TdW1tYXJ5KVxuICAgICAgICAgID8gKGh1Yi5leHRyYXMuYXBwbGljYXRpb25TdW1tYXJ5IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVxuICAgICAgICAgIDogbnVsbFxuICAgICAgY29uc3Qgbm9ybSA9IG5vcm1hbGl6ZUxhYmVsKGxhYmVsKVxuICAgICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC9zYWxhcnl8Y29tcGVuc2F0aW9uLy50ZXN0KG5vcm0pICYmXG4gICAgICAgICAgIWlzTGVnYWxFbGlnaWJpbGl0eVF1ZXN0aW9uKG5vcm0pICYmXG4gICAgICAgICAgdHlwZW9mIHN1bW1hcnkuc2FsYXJ5ID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgc3VtbWFyeS5zYWxhcnkudHJpbSgpXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbHVlID0gc3VtbWFyeS5zYWxhcnkudHJpbSgpXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgL2F2YWlsYWJsZSBmcm9tfGF2YWlsYWJsZSBkYXRlfGhpcmluZyBkYXRlfGVhcmxpZXN0IHN0YXJ0fF5hdmFpbGFiaWxpdHkkLy50ZXN0KFxuICAgICAgICAgICAgbm9ybVxuICAgICAgICAgICkgJiZcbiAgICAgICAgICB0eXBlb2Ygc3VtbWFyeS5oaXJpbmdEYXRlID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgc3VtbWFyeS5oaXJpbmdEYXRlLnRyaW0oKVxuICAgICAgICApIHtcbiAgICAgICAgICB2YWx1ZSA9IHN1bW1hcnkuaGlyaW5nRGF0ZS50cmltKClcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBpc1BsYWluTG9jYXRpb25MYWJlbChub3JtKSAmJlxuICAgICAgICAgIHR5cGVvZiBzdW1tYXJ5LmxvY2F0aW9uID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgc3VtbWFyeS5sb2NhdGlvbi50cmltKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsdWUgPSBzdW1tYXJ5LmxvY2F0aW9uLnRyaW0oKVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIC9iaXJ0aGRheXxkYXRlIG9mIGJpcnRofF5kb2IkfGJpcnRoIGRhdGUvLnRlc3Qobm9ybSkgJiZcbiAgICAgICAgICB0eXBlb2Ygc3VtbWFyeS5iaXJ0aGRheSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgIHN1bW1hcnkuYmlydGhkYXkudHJpbSgpXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbHVlID0gc3VtbWFyeS5iaXJ0aGRheS50cmltKClcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAveWVhcnMgb2YgZXhwZXJpZW5jZXx5ZWFycyBleHBlcmllbmNlLy50ZXN0KG5vcm0pICYmXG4gICAgICAgICAgdHlwZW9mIHN1bW1hcnkueWVhcnNPZkV4cGVyaWVuY2UgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICBzdW1tYXJ5LnllYXJzT2ZFeHBlcmllbmNlLnRyaW0oKVxuICAgICAgICApIHtcbiAgICAgICAgICB2YWx1ZSA9IG9wdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICA/IGFkYXB0VG9PcHRpb25zKHN1bW1hcnkueWVhcnNPZkV4cGVyaWVuY2UudHJpbSgpLCBvcHRpb25zKVxuICAgICAgICAgICAgOiBzdW1tYXJ5LnllYXJzT2ZFeHBlcmllbmNlLnRyaW0oKVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGlzUGxhbm5lZFdvcmtMb2NhdGlvbkxhYmVsKG5vcm0pICYmXG4gICAgICAgICAgdHlwZW9mIHN1bW1hcnkucGxhbm5lZFdvcmtMb2NhdGlvbiA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgIHN1bW1hcnkucGxhbm5lZFdvcmtMb2NhdGlvbi50cmltKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsdWUgPSBvcHRpb25zLmxlbmd0aFxuICAgICAgICAgICAgPyBhZGFwdFRvT3B0aW9ucyhzdW1tYXJ5LnBsYW5uZWRXb3JrTG9jYXRpb24udHJpbSgpLCBvcHRpb25zKVxuICAgICAgICAgICAgOiBzdW1tYXJ5LnBsYW5uZWRXb3JrTG9jYXRpb24udHJpbSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gXCJcIikge1xuICAgICAgZmlsbF9kYXRhX2xpc3QucHVzaCh7IG5hbWU6IGxhYmVsLCB2YWx1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlsbF9kYXRhX2xpc3QsXG4gICAgcHJvZmlsZV9kYXRhOiBqb2JyaWdodCxcbiAgICBwcm9maWxlRGF0YTogam9icmlnaHRcbiAgfVxufVxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXHJcblxyXG5pbXBvcnQgeyByZXNvbHZlUmVzdW1lQmxvYlJlc3BvbnNlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9yZXN1bWUtYmxvYlwiXHJcblxyXG4vKipcclxuICogVGVhbSBmb3JrOiBiYXNlIHJlc3VtZSA9PSBzZWxlY3RlZCBwcm9maWxlIGRlZmF1bHQgcmVzdW1lLlxyXG4gKiBFbmdpbmUgaGVscGVyIGNhbGxzIHRoaXMgd2hlbiB0YWlsb3IvZGlhZ25vc2UgcGF0aHMgYXJlIGFic2VudC5cclxuICovXHJcbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHJlc3VtZUlkID1cclxuICAgIHR5cGVvZiByZXEuYm9keT8ucmVzdW1lSWQgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5yZXN1bWVJZCA6IG51bGxcclxuICByZXMuc2VuZChhd2FpdCByZXNvbHZlUmVzdW1lQmxvYlJlc3BvbnNlKHsgcmVzdW1lSWQgfSkpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwiaW1wb3J0IHsgZmV0Y2hBdXRvZmlsbEluZm8sIGZldGNoUmVzdW1lQmxvYiB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcclxuXHJcbmV4cG9ydCB0eXBlIFJlc3VtZUJsb2JSZXNwb25zZSA9IHtcclxuICBvazogYm9vbGVhblxyXG4gIHJlc3VtZUlkPzogc3RyaW5nXHJcbiAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICBtaW1lVHlwZT86IHN0cmluZ1xyXG4gIGV4dGVuc2lvbj86IHN0cmluZ1xyXG4gIGJhc2U2ND86IHN0cmluZ1xyXG4gIGJhc2U2NFVSTD86IHN0cmluZ1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmdcclxufVxyXG5cclxuZnVuY3Rpb24gYmxvYlRvQmFzZTY0KGJsb2I6IEJsb2IpOiBQcm9taXNlPHsgYmFzZTY0OiBzdHJpbmc7IG1pbWU6IHN0cmluZyB9PiB7XHJcbiAgcmV0dXJuIGJsb2IuYXJyYXlCdWZmZXIoKS50aGVuKChidWZmZXIpID0+IHtcclxuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKVxyXG4gICAgbGV0IGJpbmFyeSA9IFwiXCJcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBtaW1lID0gYmxvYi50eXBlIHx8IFwiYXBwbGljYXRpb24vcGRmXCJcclxuICAgIHJldHVybiB7IGJhc2U2NDogYnRvYShiaW5hcnkpLCBtaW1lIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogUmVzb2x2ZSBhIHJlc3VtZSBibG9iIGZvciB0aGUgc2VsZWN0ZWQgKG9yIHJlcXVlc3RlZCkgaHViIHByb2ZpbGUuXHJcbiAqIFRlYW0gZm9yayBoYXMgbm8gc2VwYXJhdGUgdGFpbG9yL2Jhc2UgZGlhZ25vc2UgcGlwZWxpbmUg4oCUIGFsbCBhbGlhc2VzXHJcbiAqIHJlc29sdmUgdG8gdGhlIHByb2ZpbGUncyBkZWZhdWx0IG9yIG5hbWVkIHJlc3VtZS5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlUmVzdW1lQmxvYlJlc3BvbnNlKG9wdHM/OiB7XHJcbiAgcmVzdW1lSWQ/OiBzdHJpbmcgfCBudWxsXHJcbn0pOiBQcm9taXNlPFJlc3VtZUJsb2JSZXNwb25zZT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgcmVzdW1lSWQgPVxyXG4gICAgICB0eXBlb2Ygb3B0cz8ucmVzdW1lSWQgPT09IFwic3RyaW5nXCIgJiYgb3B0cy5yZXN1bWVJZC50cmltKClcclxuICAgICAgICA/IG9wdHMucmVzdW1lSWQudHJpbSgpXHJcbiAgICAgICAgOiBudWxsXHJcblxyXG4gICAgaWYgKCFyZXN1bWVJZCkge1xyXG4gICAgICBjb25zdCBpbmZvID0gYXdhaXQgZmV0Y2hBdXRvZmlsbEluZm8oKVxyXG4gICAgICByZXN1bWVJZCA9IGluZm8/LmRlZmF1bHRSZXN1bWVJZCA/PyBpbmZvPy5yZXN1bWVzPy5bMF0/LmlkID8/IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc3VtZUlkKSB7XHJcbiAgICAgIHJldHVybiB7IG9rOiBmYWxzZSwgbWVzc2FnZTogXCJub19yZXN1bWVcIiwgYmFzZTY0VVJMOiBcIlwiIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWxlID0gYXdhaXQgZmV0Y2hSZXN1bWVCbG9iKHJlc3VtZUlkKVxyXG4gICAgaWYgKCFmaWxlKSB7XHJcbiAgICAgIHJldHVybiB7IG9rOiBmYWxzZSwgbWVzc2FnZTogXCJkb3dubG9hZF9mYWlsZWRcIiwgYmFzZTY0VVJMOiBcIlwiIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGJhc2U2NCwgbWltZSB9ID0gYXdhaXQgYmxvYlRvQmFzZTY0KGZpbGUuYmxvYilcclxuICAgIGNvbnN0IG1pbWVUeXBlID0gZmlsZS5taW1lVHlwZSB8fCBtaW1lIHx8IFwiYXBwbGljYXRpb24vcGRmXCJcclxuICAgIGNvbnN0IGV4dGVuc2lvbiA9XHJcbiAgICAgIChmaWxlLmZpbGVOYW1lLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBcInBkZlwiKS50b0xvd2VyQ2FzZSgpIHx8IFwicGRmXCJcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvazogdHJ1ZSxcclxuICAgICAgcmVzdW1lSWQsXHJcbiAgICAgIGZpbGVOYW1lOiBmaWxlLmZpbGVOYW1lLFxyXG4gICAgICBtaW1lVHlwZSxcclxuICAgICAgZXh0ZW5zaW9uLFxyXG4gICAgICBiYXNlNjQsXHJcbiAgICAgIGJhc2U2NFVSTDogYGRhdGE6JHttaW1lVHlwZX07YmFzZTY0LCR7YmFzZTY0fWBcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiZmV0Y2hfZmFpbGVkXCIsXHJcbiAgICAgIGJhc2U2NFVSTDogXCJcIlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDb21wYW55TmFtZUxpc3QuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0Q29tcGFueU5hbWVMaXN0XCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxyXG5cclxuaW1wb3J0IHsgZmV0Y2hBdXRvZmlsbEluZm8sIGZldGNoQ292ZXJMZXR0ZXJCbG9iIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxyXG5cclxuZnVuY3Rpb24gYmxvYlRvQmFzZTY0KGJsb2I6IEJsb2IpOiBQcm9taXNlPHsgYmFzZTY0OiBzdHJpbmc7IG1pbWU6IHN0cmluZyB9PiB7XHJcbiAgcmV0dXJuIGJsb2IuYXJyYXlCdWZmZXIoKS50aGVuKChidWZmZXIpID0+IHtcclxuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKVxyXG4gICAgbGV0IGJpbmFyeSA9IFwiXCJcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBiYXNlNjQ6IGJ0b2EoYmluYXJ5KSwgbWltZTogYmxvYi50eXBlIHx8IFwiYXBwbGljYXRpb24vcGRmXCIgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCb2R5OiB7IGNvdmVyTGV0dGVySWQ/OiBzdHJpbmcgfVxyXG4gKiBGYWxscyBiYWNrIHRvIHRoZSBzZWxlY3RlZCBwcm9maWxlJ3MgZGVmYXVsdCBjb3ZlciBsZXR0ZXIuXHJcbiAqL1xyXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IGNvdmVyTGV0dGVySWQgPVxyXG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LmNvdmVyTGV0dGVySWQgPT09IFwic3RyaW5nXCJcclxuICAgICAgICA/IHJlcS5ib2R5LmNvdmVyTGV0dGVySWRcclxuICAgICAgICA6IG51bGxcclxuXHJcbiAgICBpZiAoIWNvdmVyTGV0dGVySWQpIHtcclxuICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IGZldGNoQXV0b2ZpbGxJbmZvKClcclxuICAgICAgY292ZXJMZXR0ZXJJZCA9XHJcbiAgICAgICAgaW5mbz8uZGVmYXVsdENvdmVyTGV0dGVySWQgPz8gaW5mbz8uY292ZXJMZXR0ZXJzPy5bMF0/LmlkID8/IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvdmVyTGV0dGVySWQpIHtcclxuICAgICAgcmVzLnNlbmQoe1xyXG4gICAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOiBcIm5vX2NvdmVyX2xldHRlclwiLFxyXG4gICAgICAgIGJhc2U2NFVSTDogXCJcIlxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWxlID0gYXdhaXQgZmV0Y2hDb3ZlckxldHRlckJsb2IoY292ZXJMZXR0ZXJJZClcclxuICAgIGlmICghZmlsZSkge1xyXG4gICAgICByZXMuc2VuZCh7XHJcbiAgICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiZG93bmxvYWRfZmFpbGVkXCIsXHJcbiAgICAgICAgYmFzZTY0VVJMOiBcIlwiXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgYmFzZTY0LCBtaW1lIH0gPSBhd2FpdCBibG9iVG9CYXNlNjQoZmlsZS5ibG9iKVxyXG4gICAgY29uc3QgbWltZVR5cGUgPSBmaWxlLm1pbWVUeXBlIHx8IG1pbWVcclxuICAgIGNvbnN0IGV4dGVuc2lvbiA9XHJcbiAgICAgIChmaWxlLmZpbGVOYW1lLnNwbGl0KFwiLlwiKS5wb3AoKSB8fCBcInBkZlwiKS50b0xvd2VyQ2FzZSgpIHx8IFwicGRmXCJcclxuXHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIG9rOiB0cnVlLFxyXG4gICAgICBjb3ZlckxldHRlcklkLFxyXG4gICAgICBmaWxlTmFtZTogZmlsZS5maWxlTmFtZSxcclxuICAgICAgbWltZVR5cGUsXHJcbiAgICAgIGV4dGVuc2lvbixcclxuICAgICAgYmFzZTY0LFxyXG4gICAgICBiYXNlNjRVUkw6IGBkYXRhOiR7bWltZVR5cGV9O2Jhc2U2NCwke2Jhc2U2NH1gXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzLnNlbmQoe1xyXG4gICAgICBvazogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcImZldGNoX2ZhaWxlZFwiLFxyXG4gICAgICBiYXNlNjRVUkw6IFwiXCJcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldENyZWRpdEZlZWQuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0Q3JlZGl0RmVlZFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDcmVkaXRzTGVmdC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRDcmVkaXRzTGVmdFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDcmVkaXRTd2l0Y2hTdGF0dXMuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0Q3JlZGl0U3dpdGNoU3RhdHVzXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEN1cnJlbnRDb3ZlckxldHRlci5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRDdXJyZW50Q292ZXJMZXR0ZXJcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXHJcblxyXG5pbXBvcnQgeyBmZXRjaEF1dG9maWxsSW5mbyB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcclxuaW1wb3J0IHsgbG9va3VwQW5zd2VyIH0gZnJvbSBcIn5saWIvaHViLXRvLWpvYnJpZ2h0XCJcclxuXHJcbi8qKlxyXG4gKiBMb2NhbCBzdGFuZC1pbiBmb3IgSm9icmlnaHQgY29tcGFueS1hbnN3ZXIgQVBJLlxyXG4gKiBSZXNvbHZlcyBhIHNpbmdsZSBmaWVsZCBsYWJlbCBhZ2FpbnN0IHRoZSBzZWxlY3RlZCBodWIgcHJvZmlsZS5cclxuICpcclxuICogQm9keTogeyBsYWJlbD86IHN0cmluZywgY29tcGFueU5hbWU/OiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmdbXSB9XHJcbiAqL1xyXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYm9keSA9IHJlcS5ib2R5ID8/IHt9XHJcbiAgICBjb25zdCBsYWJlbCA9XHJcbiAgICAgIHR5cGVvZiBib2R5LmxhYmVsID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgPyBib2R5LmxhYmVsXHJcbiAgICAgICAgOiB0eXBlb2YgYm9keS5jb21wYW55TmFtZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgPyBib2R5LmNvbXBhbnlOYW1lXHJcbiAgICAgICAgICA6IFwiXCJcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBBcnJheS5pc0FycmF5KGJvZHkub3B0aW9ucylcclxuICAgICAgPyBib2R5Lm9wdGlvbnMuZmlsdGVyKChvOiB1bmtub3duKTogbyBpcyBzdHJpbmcgPT4gdHlwZW9mIG8gPT09IFwic3RyaW5nXCIpXHJcbiAgICAgIDogW11cclxuXHJcbiAgICBpZiAoIWxhYmVsLnRyaW0oKSkge1xyXG4gICAgICByZXMuc2VuZCh7IG9rOiBmYWxzZSwgZGF0YTogbnVsbCwgbWVzc2FnZTogXCJsYWJlbF9yZXF1aXJlZFwiIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGh1YiA9IGF3YWl0IGZldGNoQXV0b2ZpbGxJbmZvKFxyXG4gICAgICB0eXBlb2YgYm9keS5wcm9maWxlSWQgPT09IFwic3RyaW5nXCIgPyBib2R5LnByb2ZpbGVJZCA6IG51bGxcclxuICAgIClcclxuICAgIGlmICghaHViKSB7XHJcbiAgICAgIHJlcy5zZW5kKHsgb2s6IGZhbHNlLCBkYXRhOiBudWxsLCBtZXNzYWdlOiBcIm5vX3Byb2ZpbGVcIiB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IGxvb2t1cEFuc3dlcihodWIsIGxhYmVsLCBvcHRpb25zKVxyXG4gICAgcmVzLnNlbmQoe1xyXG4gICAgICBvazogdHJ1ZSxcclxuICAgICAgZGF0YTogdmFsdWUsXHJcbiAgICAgIHJlc3VsdDogdmFsdWVcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwicmVzb2x2ZV9mYWlsZWRcIlxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Q3VycmVudFRhYklkLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldEN1cnJlbnRUYWJJZFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRDdXJyZW50VGFiVXJsLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldEN1cnJlbnRUYWJVcmxcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0RGVncmVlU3VnZ2VzdGlvbnMuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0RGVncmVlU3VnZ2VzdGlvbnNcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0RXh0ZXJuYWxKb2JJZC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRFeHRlcm5hbEpvYklkXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldEV4dGVybmFsSm9iU3RhdHVzLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldEV4dGVybmFsSm9iU3RhdHVzXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxyXG5cclxuaW1wb3J0IHsgZmV0Y2hBdXRvZmlsbEluZm8gfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXHJcbmltcG9ydCB7IGJ1aWxkTG9jYWxHcHRSZXN1bHRzIH0gZnJvbSBcIn5saWIvaHViLXRvLWpvYnJpZ2h0XCJcclxuXHJcbi8qKlxyXG4gKiBMb2NhbCBmaWxsLXYyIHN0YW5kLWluOiBtYXAgZXh0cmFjdGVkIGZvcm0gbGFiZWxzIOKGkiBodWIgYW5zd2VycyAvIGlkZW50aXR5LlxyXG4gKiBFbmdpbmUgaGVscGVycyBjYWxsIHRoaXMgaW5zdGVhZCBvZiBKb2JyaWdodCAvc3dhbi9hdXRvZmlsbC9maWxsLXYyLlxyXG4gKi9cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHJlcS5ib2R5Py5wYXJhbXMgPz8gcmVxLmJvZHkgPz8ge31cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuaXNBcnJheShwYXJhbXMuZWxlbWVudHMpID8gcGFyYW1zLmVsZW1lbnRzIDogW11cclxuICAgIGNvbnN0IGh1YiA9IGF3YWl0IGZldGNoQXV0b2ZpbGxJbmZvKFxyXG4gICAgICB0eXBlb2YgcGFyYW1zLnByb2ZpbGVJZCA9PT0gXCJzdHJpbmdcIiA/IHBhcmFtcy5wcm9maWxlSWQgOiBudWxsXHJcbiAgICApXHJcblxyXG4gICAgaWYgKCFodWIpIHtcclxuICAgICAgcmVzLnNlbmQoe1xyXG4gICAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBIVFRQX1NUQVRVUzogNDAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXNzYWdlOiBcIk5vIHByb2ZpbGUgc2VsZWN0ZWRcIlxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBidWlsZExvY2FsR3B0UmVzdWx0cyhodWIsIGVsZW1lbnRzKVxyXG4gICAgcmVzLnNlbmQoe1xyXG4gICAgICBvazogdHJ1ZSxcclxuICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIltnZXRHcHRSZXN1bHRzXSBsb2NhbCByZXNvbHZlIGZhaWxlZFwiLCBlcnIpXHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIEhUVFBfU1RBVFVTOiA1MDBcclxuICAgICAgfSxcclxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwicmVzb2x2ZV9mYWlsZWRcIlxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0Sm9iQmFubmVyRGV0YWlsLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldEpvYkJhbm5lckRldGFpbFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRKb2JEZXRhaWwuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0Sm9iRGV0YWlsXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldE1ham9yU3VnZ2VzdGlvbnMuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0TWFqb3JTdWdnZXN0aW9uc1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRPcGVuQ2l0aWVzQnlSZWdpb24uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0T3BlbkNpdGllc0J5UmVnaW9uXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldE9wZW5SZWdpb25zLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldE9wZW5SZWdpb25zXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFBhZ2VMaW5rZWRpbkpvYkluZm8uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0UGFnZUxpbmtlZGluSm9iSW5mb1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRQYXltZW50UHJpY2UuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0UGF5bWVudFByaWNlXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlbGVhc2VDb25maWcuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0UmVsZWFzZUNvbmZpZ1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcclxuXHJcbmltcG9ydCB7IHJlc29sdmVSZXN1bWVCbG9iUmVzcG9uc2UgfSBmcm9tIFwifmJhY2tncm91bmQvbGliL3Jlc3VtZS1ibG9iXCJcclxuXHJcbi8qKlxyXG4gKiBEb3dubG9hZHMgdGhlIGRlZmF1bHQgKG9yIHJlcXVlc3RlZCkgcmVzdW1lIGZvciB0aGUgc2VsZWN0ZWQgcHJvZmlsZS5cclxuICogQm9keTogeyByZXN1bWVJZD86IHN0cmluZyB9XHJcbiAqL1xyXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCByZXN1bWVJZCA9XHJcbiAgICB0eXBlb2YgcmVxLmJvZHk/LnJlc3VtZUlkID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkucmVzdW1lSWQgOiBudWxsXHJcbiAgcmVzLnNlbmQoYXdhaXQgcmVzb2x2ZVJlc3VtZUJsb2JSZXNwb25zZSh7IHJlc3VtZUlkIH0pKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFJlc3VtZUNvbGxlY3Rpb24uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0UmVzdW1lQ29sbGVjdGlvblwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRSZXN1bWVEaWFnbm9zZS5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRSZXN1bWVEaWFnbm9zZVwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcclxuXHJcbmltcG9ydCB7IGZldGNoQXV0b2ZpbGxJbmZvIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxyXG5cclxuLyoqXHJcbiAqIFJlc3VtZSBtZXRhZGF0YSBmb3IgdGhlIHNlbGVjdGVkIGh1YiBwcm9maWxlIChubyBKb2JyaWdodCBkaWFnbm9zZSBpZCkuXHJcbiAqL1xyXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGluZm8gPSBhd2FpdCBmZXRjaEF1dG9maWxsSW5mbygpXHJcbiAgICBpZiAoIWluZm8pIHtcclxuICAgICAgcmVzLnNlbmQoeyBvazogZmFsc2UsIG1lc3NhZ2U6IFwibm9fcHJvZmlsZVwiIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRJZCA9IGluZm8uZGVmYXVsdFJlc3VtZUlkID8/IGluZm8ucmVzdW1lcz8uWzBdPy5pZCA/PyBudWxsXHJcbiAgICBjb25zdCBkZWYgPSBpbmZvLnJlc3VtZXM/LmZpbmQoKHIpID0+IHIuaWQgPT09IGRlZmF1bHRJZCkgPz8gaW5mby5yZXN1bWVzPy5bMF1cclxuXHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIG9rOiB0cnVlLFxyXG4gICAgICByZXN1bWVzOiBpbmZvLnJlc3VtZXMgPz8gW10sXHJcbiAgICAgIGRlZmF1bHRSZXN1bWVJZDogZGVmYXVsdElkLFxyXG4gICAgICByZXN1bWVJbmZvOiBkZWZcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgaWQ6IGRlZi5pZCxcclxuICAgICAgICAgICAgcmVzdW1lTmFtZTogZGVmLmRpc3BsYXlOYW1lIHx8IGRlZi5maWxlTmFtZSxcclxuICAgICAgICAgICAgZmlsZU5hbWU6IGRlZi5maWxlTmFtZSxcclxuICAgICAgICAgICAgbWltZVR5cGU6IGRlZi5taW1lVHlwZSxcclxuICAgICAgICAgICAgaXNEZWZhdWx0OiAhIWRlZi5pc0RlZmF1bHRcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IG51bGxcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiZmV0Y2hfZmFpbGVkXCJcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFNpbWlsYXJKb2JzLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldFNpbWlsYXJKb2JzXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxyXG5cclxuLyoqXHJcbiAqIFNpdGUgQ1NSRiAvIHNlc3Npb24gdG9rZW4g4oCUIHVudXNlZCBieSB0ZWFtIGh1YiBsb2NhbCBmaWxsIHBhdGguXHJcbiAqL1xyXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLnNlbmQoXCJcIilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9nZXRUYWJDb250ZXh0LmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldFRhYkNvbnRleHRcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7IGdldFRhYkpvYlJlY29yZCB9IGZyb20gXCJ+YmFja2dyb3VuZC90YWItam9iLWlkXCJcblxuZXhwb3J0IHR5cGUgUmVxdWVzdEJvZHkgPSB7XG4gIGN1cnJlbnRVcmw/OiBzdHJpbmdcbiAgcmVxdWlyZVNhbWVQYXRoPzogYm9vbGVhblxufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXI8UmVxdWVzdEJvZHk+ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHRhYklkID0gcmVxLnNlbmRlcj8udGFiPy5pZFxuICBpZiAodHlwZW9mIHRhYklkICE9PSBcIm51bWJlclwiKSB7XG4gICAgcmVzLnNlbmQoeyBqb2JJZDogbnVsbCB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgcmVjb3JkID0gYXdhaXQgZ2V0VGFiSm9iUmVjb3JkKHRhYklkKVxuICBpZiAoIXJlY29yZD8uam9iSWQpIHtcbiAgICByZXMuc2VuZCh7IGpvYklkOiBudWxsIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAocmVxLmJvZHk/LnJlcXVpcmVTYW1lUGF0aCAmJiByZXEuYm9keS5jdXJyZW50VXJsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBuZXcgVVJMKHJlcS5ib2R5LmN1cnJlbnRVcmwpXG4gICAgICBpZiAoY3VycmVudC5wYXRobmFtZSAhPT0gcmVjb3JkLnBhdGhuYW1lKSB7XG4gICAgICAgIHJlcy5zZW5kKHsgam9iSWQ6IG51bGwgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXMuc2VuZCh7IGpvYklkOiBudWxsIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICByZXMuc2VuZCh7IGpvYklkOiByZWNvcmQuam9iSWQsIHVybDogcmVjb3JkLnVybCB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIkBwbGFzbW9ocS9zdG9yYWdlXCJcblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKHsgYXJlYTogXCJzZXNzaW9uXCIgfSlcblxuZXhwb3J0IHR5cGUgVGFiSm9iUmVjb3JkID0ge1xuICBqb2JJZDogc3RyaW5nXG4gIHVybDogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgdXBkYXRlZEF0OiBudW1iZXJcbn1cblxuZnVuY3Rpb24ga2V5Rm9yVGFiKHRhYklkOiBudW1iZXIpIHtcbiAgcmV0dXJuIGB0YWJKb2JJZDoke3RhYklkfWBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFRhYkpvYlJlY29yZChcbiAgdGFiSWQ6IG51bWJlcixcbiAgcmVjb3JkOiBUYWJKb2JSZWNvcmRcbik6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBzdG9yYWdlLnNldChrZXlGb3JUYWIodGFiSWQpLCByZWNvcmQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWJKb2JSZWNvcmQoXG4gIHRhYklkOiBudW1iZXJcbik6IFByb21pc2U8VGFiSm9iUmVjb3JkIHwgbnVsbD4ge1xuICByZXR1cm4gKGF3YWl0IHN0b3JhZ2UuZ2V0PFRhYkpvYlJlY29yZD4oa2V5Rm9yVGFiKHRhYklkKSkpID8/IG51bGxcbn1cbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldFRhaWxvclJlc3VtZS5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJnZXRUYWlsb3JSZXN1bWVcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXHJcblxyXG5pbXBvcnQgeyByZXNvbHZlUmVzdW1lQmxvYlJlc3BvbnNlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9yZXN1bWUtYmxvYlwiXHJcblxyXG4vKipcclxuICogVGVhbSBmb3JrOiBubyBzZXBhcmF0ZSB0YWlsb3IgcGlwZWxpbmUg4oCUIGZhbGwgYmFjayB0byBwcm9maWxlIGRlZmF1bHQgcmVzdW1lLlxyXG4gKi9cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgcmVzdW1lSWQgPVxyXG4gICAgdHlwZW9mIHJlcS5ib2R5Py5yZXN1bWVJZCA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICA/IHJlcS5ib2R5LnJlc3VtZUlkXHJcbiAgICAgIDogdHlwZW9mIHJlcS5ib2R5Py50YWlsb3JJZCA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgID8gcmVxLmJvZHkudGFpbG9ySWRcclxuICAgICAgICA6IG51bGxcclxuICByZXMuc2VuZChhd2FpdCByZXNvbHZlUmVzdW1lQmxvYlJlc3BvbnNlKHsgcmVzdW1lSWQgfSkpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VGFpbG9yUmVzdW1lRmlsZU5hbWUuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiZ2V0VGFpbG9yUmVzdW1lRmlsZU5hbWVcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXHJcblxyXG5pbXBvcnQgeyBnZXRUZWFtU2V0dGluZ3MsIHZlcmlmeVRlYW1Db25uZWN0aW9uIH0gZnJvbSBcIn5hcGkvdGVhbS1jbGllbnRcIlxyXG5cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0VGVhbVNldHRpbmdzKClcclxuICBjb25zdCBjb25uID0gYXdhaXQgdmVyaWZ5VGVhbUNvbm5lY3Rpb24oKVxyXG4gIHJlcy5zZW5kKHtcclxuICAgIG9rOiBjb25uLm9rLFxyXG4gICAgc2l0ZVVybDogc2V0dGluZ3Muc2l0ZVVybCxcclxuICAgIHNlbGVjdGVkUHJvZmlsZUlkOiBzZXR0aW5ncy5zZWxlY3RlZFByb2ZpbGVJZCxcclxuICAgIHVzZXI6IGNvbm4ub2tcclxuICAgICAgPyB7IGVtYWlsOiBjb25uLmVtYWlsLCBuYW1lOiBjb25uLm5hbWUgfVxyXG4gICAgICA6IG51bGwsXHJcbiAgICBlcnJvcjogY29ubi5lcnJvclxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvZ2V0VmVyc2lvblVwZGF0ZVN0YXRlLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImdldFZlcnNpb25VcGRhdGVTdGF0ZVwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcclxuXHJcbi8qKlxyXG4gKiBJbmplY3QgTUFJTi13b3JsZCBoZWxwZXIgdGhhdCBzdGFtcHMgQXNoYnkgZmllbGQgbWV0YWRhdGEgb250byBpbnB1dHNcclxuICogKGRhdGEtanItYXNoYnktZmllbGQtdHlwZSwgZGF0YS1qci1hc2hieS1sb2NhdGlvbi10eXBlcykuXHJcbiAqL1xyXG5jb25zdCBJTkpFQ1RfRk4gPSBmdW5jdGlvbiBpbmplY3RBc2hieU1ldGEoKSB7XHJcbiAgY29uc3QgdyA9IHdpbmRvdyBhcyB1bmtub3duIGFzIHtcclxuICAgIF9fanJBc2hieU1ldGFJbnN0YWxsZWQ/OiBib29sZWFuXHJcbiAgfVxyXG4gIGlmICh3Ll9fanJBc2hieU1ldGFJbnN0YWxsZWQpIHJldHVybiB7IG9rOiB0cnVlLCBhbHJlYWR5OiB0cnVlIH1cclxuICB3Ll9fanJBc2hieU1ldGFJbnN0YWxsZWQgPSB0cnVlXHJcblxyXG4gIGZ1bmN0aW9uIHdhbGsocm9vdDogUGFyZW50Tm9kZSkge1xyXG4gICAgY29uc3QgaW5wdXRzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhLCBbcm9sZT0nY29tYm9ib3gnXVwiKVxyXG4gICAgaW5wdXRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSAoZWwuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIGNvbnN0IGlkID0gKGVsLmdldEF0dHJpYnV0ZShcImlkXCIpIHx8IFwiXCIpLnRvTG93ZXJDYXNlKClcclxuICAgICAgY29uc3QgbGFiZWwgPVxyXG4gICAgICAgIChlbC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpIHx8IFwiXCIpICtcclxuICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgKGVsLmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnQgfHwgXCJcIilcclxuICAgICAgY29uc3QgYmxvYiA9IGAke25hbWV9ICR7aWR9ICR7bGFiZWx9YC50b0xvd2VyQ2FzZSgpXHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgbmFtZS5pbmNsdWRlcyhcIl9zeXN0ZW1maWVsZF9sb2NhdGlvblwiKSB8fFxyXG4gICAgICAgIC9nZW98bG9jYXRpb258Y2l0eS8udGVzdChibG9iKVxyXG4gICAgICApIHtcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWpyLWFzaGJ5LWZpZWxkLXR5cGVcIiwgXCJMb2NhdGlvblwiKVxyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiZGF0YS1qci1hc2hieS1sb2NhdGlvbi10eXBlc1wiLFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW1wiQ0lUWVwiLCBcIkFETUlOSVNUUkFUSVZFX0FSRUFfTEVWRUxfMVwiLCBcIkNPVU5UUllcIl0pXHJcbiAgICAgICAgKVxyXG4gICAgICB9IGVsc2UgaWYgKC9zY2hvb2x8dW5pdmVyc2l0eXxjb2xsZWdlLy50ZXN0KGJsb2IpKSB7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1qci1hc2hieS1maWVsZC10eXBlXCIsIFwiU2Nob29sXCIpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB3YWxrKGRvY3VtZW50KVxyXG4gIGNvbnN0IG9icyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHdhbGsoZG9jdW1lbnQpKVxyXG4gIG9icy5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSlcclxuXHJcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiX19qcl9hc2hieV9maWVsZF9tZXRhZGF0YV9yZWFkeVwiKSlcclxuICByZXR1cm4geyBvazogdHJ1ZSB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0YWJJZCA9XHJcbiAgICAgIHR5cGVvZiByZXEuYm9keT8udGFiSWQgPT09IFwibnVtYmVyXCJcclxuICAgICAgICA/IHJlcS5ib2R5LnRhYklkXHJcbiAgICAgICAgOiAoXHJcbiAgICAgICAgICAgIGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pXHJcbiAgICAgICAgICApWzBdPy5pZFxyXG5cclxuICAgIGlmICghdGFiSWQpIHtcclxuICAgICAgcmVzLnNlbmQoeyBvazogZmFsc2UsIG1lc3NhZ2U6IFwibm9fdGFiXCIgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxyXG4gICAgICB3b3JsZDogXCJNQUlOXCIsXHJcbiAgICAgIGZ1bmM6IElOSkVDVF9GTlxyXG4gICAgfSlcclxuXHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIG9rOiB0cnVlLFxyXG4gICAgICByZXN1bHQ6IHJlc3VsdHM/LlswXT8ucmVzdWx0ID8/IG51bGxcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiaW5qZWN0X2ZhaWxlZFwiXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqXG4gKiBJbmplY3QgdGhlIGhlbHBlci1hcHAgYnVuZGxlIGludG8gdGhlIHNlbmRlciBmcmFtZSAocG9ydGVkIGZyb20gSm9icmlnaHQpLlxuICovXG5mdW5jdGlvbiBwYXRobmFtZUZyb21CdW5kbGVVcmwoYnVuZGxlVXJsPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghYnVuZGxlVXJsKSByZXR1cm4gbnVsbFxuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYnVuZGxlVXJsKVxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodXJsLnBhdGhuYW1lKS5yZXBsYWNlKC9eXFwvKy8sIFwiXCIpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBidW5kbGVVcmwucmVwbGFjZSgvXlxcLysvLCBcIlwiKVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlcjx7IGJ1bmRsZVVybD86IHN0cmluZyB9PiA9IGFzeW5jIChcbiAgcmVxLFxuICByZXNcbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRhYklkID0gcmVxLnNlbmRlcj8udGFiPy5pZFxuICAgIGNvbnN0IGZyYW1lSWQgPSByZXEuc2VuZGVyPy5mcmFtZUlkID8/IDBcbiAgICBjb25zdCBmaWxlID0gcGF0aG5hbWVGcm9tQnVuZGxlVXJsKHJlcS5ib2R5Py5idW5kbGVVcmwpXG5cbiAgICBpZiAodHlwZW9mIHRhYklkICE9PSBcIm51bWJlclwiIHx8ICFmaWxlKSB7XG4gICAgICByZXMuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJtaXNzaW5nX3RhYl9vcl9idW5kbGVcIiB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldDogeyB0YWJJZCwgZnJhbWVJZHM6IFtmcmFtZUlkXSB9LFxuICAgICAgZmlsZXM6IFtmaWxlXSxcbiAgICAgIHdvcmxkOiBcIklTT0xBVEVEXCJcbiAgICB9KVxuXG4gICAgcmVzLnNlbmQoeyBzdWNjZXNzOiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltpbmplY3RIZWxwZXJBcHBCdW5kbGVdIGZhaWxlZDpcIiwgZXJyb3IpXG4gICAgcmVzLnNlbmQoe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9pbmplY3RSZWFjdFNlbGVjdEZpYmVyLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImluamVjdFJlYWN0U2VsZWN0RmliZXJcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0UmVjcnVpdGVlRmliZXIuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwiaW5qZWN0UmVjcnVpdGVlRmliZXJcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5qZWN0V29ya2FibGVDaGVja2JveC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJpbmplY3RXb3JrYWJsZUNoZWNrYm94XCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2luamVjdFdvcmtkYXlGaWJlci5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJpbmplY3RXb3JrZGF5RmliZXJcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvaW5zdGFsbE1haW5Xb3JsZEFsZXJ0U3VwcHJlc3Nvci5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJpbnN0YWxsTWFpbldvcmxkQWxlcnRTdXBwcmVzc29yXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2ludGVyY2VwdEZpbGVJbnB1dENsaWNrLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImludGVyY2VwdEZpbGVJbnB1dENsaWNrXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2t1bGFDb21wYW55RG9tLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcImt1bGFDb21wYW55RG9tXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxyXG5cclxuaW1wb3J0IHsgbWVyZ2VQcm9maWxlQW5zd2VycyB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcclxuXHJcbmNvbnN0IE5PSVNFX1JFID1cclxuICAvcXl2YXJleHxmaWxsZWRcXHMqXFxkKlxccyppdGVtcz98dGV4dCBmaWVsZHM/IG9rfG5vIHJlc3VtZSBmaWxlIGlucHV0fGZpbGxcXHMqYWdhaW58ZGlzbWlzc3xidXR0b24gY2xpY2tzIHN5bmN8bGVhcm5pbmcgYW5zd2VycyBmb3IgbmV4dHxzYXZlZCB0byBodWIvaVxyXG5cclxuLyoqXHJcbiAqIE1lcmdlIGxlYXJuZWQgc2NyZWVuaW5nIGFuc3dlcnMgaW50byB0aGUgc2VsZWN0ZWQgaHViIHByb2ZpbGUuXHJcbiAqIEJvZHk6IHtcclxuICogICBhbnN3ZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxyXG4gKiAgIHByb2ZpbGVJZD86IHN0cmluZyxcclxuICogICBzY29wZUtleT86IHN0cmluZyxcclxuICogICBob3N0bmFtZT86IHN0cmluZyxcclxuICogICBzdGVwS2V5Pzogc3RyaW5nXHJcbiAqIH1cclxuICovXHJcbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhbnN3ZXJzID1cclxuICAgICAgcmVxLmJvZHk/LmFuc3dlcnMgJiYgdHlwZW9mIHJlcS5ib2R5LmFuc3dlcnMgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IChyZXEuYm9keS5hbnN3ZXJzIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pXHJcbiAgICAgICAgOiBudWxsXHJcbiAgICBpZiAoIWFuc3dlcnMgfHwgIU9iamVjdC5rZXlzKGFuc3dlcnMpLmxlbmd0aCkge1xyXG4gICAgICByZXMuc2VuZCh7IG9rOiBmYWxzZSwgbWVzc2FnZTogXCJhbnN3ZXJzX3JlcXVpcmVkXCIgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xlYW5lZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XHJcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhbnN3ZXJzKSkge1xyXG4gICAgICBjb25zdCBxdWVzdGlvbiA9IFN0cmluZyhrIHx8IFwiXCIpLnRyaW0oKVxyXG4gICAgICBjb25zdCBhbnN3ZXIgPSBTdHJpbmcodiA/PyBcIlwiKS50cmltKClcclxuICAgICAgaWYgKCFxdWVzdGlvbiB8fCAhYW5zd2VyKSBjb250aW51ZVxyXG4gICAgICBpZiAocXVlc3Rpb24ubGVuZ3RoID4gNTAwIHx8IGFuc3dlci5sZW5ndGggPiAyMDAwKSBjb250aW51ZVxyXG4gICAgICBpZiAoTk9JU0VfUkUudGVzdChxdWVzdGlvbikgfHwgTk9JU0VfUkUudGVzdChhbnN3ZXIpKSBjb250aW51ZVxyXG4gICAgICBjb25zdCBjb21wYWN0ID0gKHF1ZXN0aW9uICsgYW5zd2VyKS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpLnRvTG93ZXJDYXNlKClcclxuICAgICAgaWYgKC9maWxsYWdhaW58ZGlzbWlzc3xxeXZhcmV4YXV0b2ZpbGx8Xnllc25vJC8udGVzdChjb21wYWN0KSkgY29udGludWVcclxuICAgICAgY2xlYW5lZFtxdWVzdGlvbl0gPSBhbnN3ZXJcclxuICAgIH1cclxuICAgIGlmICghT2JqZWN0LmtleXMoY2xlYW5lZCkubGVuZ3RoKSB7XHJcbiAgICAgIHJlcy5zZW5kKHsgb2s6IGZhbHNlLCBtZXNzYWdlOiBcImFuc3dlcnNfZW1wdHlcIiB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9maWxlSWQgPVxyXG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LnByb2ZpbGVJZCA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnByb2ZpbGVJZCA6IG51bGxcclxuICAgIGNvbnN0IHNjb3BlS2V5ID1cclxuICAgICAgdHlwZW9mIHJlcS5ib2R5Py5zY29wZUtleSA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnNjb3BlS2V5LnRyaW0oKSA6IFwiXCJcclxuICAgIGNvbnN0IGhvc3RuYW1lID1cclxuICAgICAgdHlwZW9mIHJlcS5ib2R5Py5ob3N0bmFtZSA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5Lmhvc3RuYW1lLnRyaW0oKSA6IFwiXCJcclxuICAgIGNvbnN0IHN0ZXBLZXkgPVxyXG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LnN0ZXBLZXkgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5zdGVwS2V5LnRyaW0oKSA6IFwiXCJcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZXJnZVByb2ZpbGVBbnN3ZXJzKFxyXG4gICAgICBjbGVhbmVkLFxyXG4gICAgICBwcm9maWxlSWQsXHJcbiAgICAgIHNjb3BlS2V5XHJcbiAgICAgICAgPyB7IHNjb3BlS2V5LCBob3N0bmFtZTogaG9zdG5hbWUgfHwgbnVsbCwgc3RlcEtleTogc3RlcEtleSB8fCBudWxsIH1cclxuICAgICAgICA6IG51bGxcclxuICAgIClcclxuICAgIGlmICghcmVzdWx0Lm9rKSB7XHJcbiAgICAgIHJlcy5zZW5kKHsgb2s6IGZhbHNlLCBtZXNzYWdlOiByZXN1bHQuZXJyb3IgfHwgXCJzYXZlX2ZhaWxlZFwiIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgcmVzLnNlbmQoe1xyXG4gICAgICBvazogdHJ1ZSxcclxuICAgICAgYW5zd2VyczogcmVzdWx0LmFuc3dlcnMsXHJcbiAgICAgIGV4dHJhczogcmVzdWx0LmV4dHJhcyxcclxuICAgICAgbGVhcm5lZDogY2xlYW5lZCxcclxuICAgICAgc2NvcGVLZXk6IHNjb3BlS2V5IHx8IG51bGxcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwic2F2ZV9mYWlsZWRcIlxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXHJcblxyXG5pbXBvcnQgeyBsb2dBcHBsaWNhdGlvbiB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcclxuXHJcbi8qKlxyXG4gKiBBcHBlbmQgYSByb3cgdG8gdGhlIGNvbmZpZ3VyZWQgR29vZ2xlIFNoZWV0IHZpYSB0aGUgdGVhbSBodWIuXHJcbiAqIEJvZHkgbWlycm9ycyBQT1NUIC9hcGkvdjEvYXBwbGljYXRpb25zL2xvZ1xyXG4gKi9cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRpdGxlID0gU3RyaW5nKHJlcS5ib2R5Py50aXRsZSB8fCBcIlwiKS50cmltKClcclxuICAgIGNvbnN0IGxpbmsgPSBTdHJpbmcocmVxLmJvZHk/LmxpbmsgfHwgXCJcIikudHJpbSgpXHJcbiAgICBpZiAoIXRpdGxlIHx8ICFsaW5rKSB7XHJcbiAgICAgIHJlcy5zZW5kKHsgb2s6IGZhbHNlLCBtZXNzYWdlOiBcInRpdGxlX2FuZF9saW5rX3JlcXVpcmVkXCIgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbG9nQXBwbGljYXRpb24oe1xyXG4gICAgICBwcm9maWxlSWQ6XHJcbiAgICAgICAgdHlwZW9mIHJlcS5ib2R5Py5wcm9maWxlSWQgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5wcm9maWxlSWQgOiBudWxsLFxyXG4gICAgICBjb3VudHJ5OiB0eXBlb2YgcmVxLmJvZHk/LmNvdW50cnkgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5jb3VudHJ5IDogXCJcIixcclxuICAgICAgcmVzdW1lOiB0eXBlb2YgcmVxLmJvZHk/LnJlc3VtZSA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnJlc3VtZSA6IFwiXCIsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBsaW5rLFxyXG4gICAgICBjb21wYW55OiB0eXBlb2YgcmVxLmJvZHk/LmNvbXBhbnkgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5jb21wYW55IDogXCJcIixcclxuICAgICAgY29zdDogdHlwZW9mIHJlcS5ib2R5Py5jb3N0ID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkuY29zdCA6IFwiXCIsXHJcbiAgICAgIHN0YXR1czogdHlwZW9mIHJlcS5ib2R5Py5zdGF0dXMgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5zdGF0dXMgOiBcImFwcGxpZWRcIixcclxuICAgICAgb3RoZXI6IHR5cGVvZiByZXEuYm9keT8ub3RoZXIgPT09IFwic3RyaW5nXCIgPyByZXEuYm9keS5vdGhlciA6IFwiXCIsXHJcbiAgICAgIHRhYk5hbWU6IHR5cGVvZiByZXEuYm9keT8udGFiTmFtZSA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnRhYk5hbWUgOiBcIlwiXHJcbiAgICB9KVxyXG5cclxuICAgIGlmICghcmVzdWx0Lm9rKSB7XHJcbiAgICAgIHJlcy5zZW5kKHtcclxuICAgICAgICBvazogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogcmVzdWx0Lm1lc3NhZ2UgfHwgcmVzdWx0LmVycm9yIHx8IFwibG9nX2ZhaWxlZFwiLFxyXG4gICAgICAgIHRhYk5hbWU6IHJlc3VsdC50YWJOYW1lXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgcmVzLnNlbmQoeyBvazogdHJ1ZSwgdGFiTmFtZTogcmVzdWx0LnRhYk5hbWUgfSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJlcy5zZW5kKHtcclxuICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJsb2dfZmFpbGVkXCJcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL21hcmtSZWZyZXNoUmVxdWVzdGVkLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcIm1hcmtSZWZyZXNoUmVxdWVzdGVkXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL21hcmtXaGF0c05ld1JlYWQuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwibWFya1doYXRzTmV3UmVhZFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuQWdlbnRBcHBseVRhYi5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJvcGVuQWdlbnRBcHBseVRhYlwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuQnJhc3NyaW5nRnVsbFBhZ2VBdXRvY29tcGxldGUuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwib3BlbkJyYXNzcmluZ0Z1bGxQYWdlQXV0b2NvbXBsZXRlXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL29wZW5EYXlmb3JjZVBvbGljeVRhYi5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJvcGVuRGF5Zm9yY2VQb2xpY3lUYWJcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcGFyc2VQYWdlTWFya2Rvd24uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwicGFyc2VQYWdlTWFya2Rvd25cIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBIZWFsdGggY2hlY2sgZm9yIHRlYW0gdG9vbGluZyAvIENJLiAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IHRydWUsXG4gICAgbmFtZTogXCJqb2JyaWdodC1mb3JrLWV4dGVuc2lvblwiLFxuICAgIHZlcnNpb246IGNocm9tZS5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvblxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0QXBwbHlKb2IuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwicG9zdEFwcGx5Sm9iXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB7IHNvZnRPayB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcInBvc3RBdXRvZmlsbEFuc3dlclBhaXJBdHRyaWJ1dGVkXCIpXHJcbiIsIu+7v2ltcG9ydCB7IHNvZnRPayB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcInBvc3RBdXRvZmlsbEZlZWRiYWNrXCIpXHJcbiIsIu+7v2ltcG9ydCB7IHNvZnRPayB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcInBvc3RFdmVudFN1Ym1pdFwiKVxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wb3N0RXh0ZXJuYWxKb2JJbXBvcnQuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwicG9zdEV4dGVybmFsSm9iSW1wb3J0XCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3Bvc3RQbHVnaW5GZWVkYmFjay5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJwb3N0UGx1Z2luRmVlZGJhY2tcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcG9zdFNpbWlsYXJKb2JQb3B1cEV4cG9zdXJlLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInBvc3RTaW1pbGFySm9iUG9wdXBFeHBvc3VyZVwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9wcmVwYXJlTWV0YUNhcmVlcnNMb2NhdGlvbkNhcHR1cmUuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwicHJlcGFyZU1ldGFDYXJlZXJzTG9jYXRpb25DYXB0dXJlXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxyXG5cclxuaW1wb3J0IHsgc2V0T3JhY2xlQ2FwdHVyZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvb3JhY2xlLWxvdi1jYXB0dXJlXCJcclxuXHJcbmNvbnN0IElOU1RBTExfSU5URVJDRVBUT1IgPSBmdW5jdGlvbiBpbnN0YWxsT3JhY2xlTG92SW50ZXJjZXB0b3IoY2FwdHVyZUlkOiBzdHJpbmcpIHtcclxuICBjb25zdCB3ID0gd2luZG93IGFzIHVua25vd24gYXMge1xyXG4gICAgX19qck9yYWNsZUxvdj86IHtcclxuICAgICAgY2FwdHVyZUlkOiBzdHJpbmdcclxuICAgICAgaXRlbXM6IHVua25vd25bXVxyXG4gICAgICBsYXN0VXJsOiBzdHJpbmdcclxuICAgIH1cclxuICAgIGZldGNoOiB0eXBlb2YgZmV0Y2hcclxuICB9XHJcbiAgdy5fX2pyT3JhY2xlTG92ID0geyBjYXB0dXJlSWQsIGl0ZW1zOiBbXSwgbGFzdFVybDogXCJcIiB9XHJcbiAgY29uc3Qgb3JpZyA9IHcuZmV0Y2guYmluZCh3aW5kb3cpXHJcbiAgdy5mZXRjaCA9IGFzeW5jIChpbnB1dDogUmVxdWVzdEluZm8gfCBVUkwsIGluaXQ/OiBSZXF1ZXN0SW5pdCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3JpZyhpbnB1dCwgaW5pdClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVybCA9XHJcbiAgICAgICAgdHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICA/IGlucHV0XHJcbiAgICAgICAgICA6IGlucHV0IGluc3RhbmNlb2YgVVJMXHJcbiAgICAgICAgICAgID8gaW5wdXQuaHJlZlxyXG4gICAgICAgICAgICA6IGlucHV0LnVybFxyXG4gICAgICBpZiAoL2xvdnxsb29rdXB8Y29udGVudGl0ZW18ZmxleGZpZWxkfGVkdWNhdGlvbnxzY2hvb2wvaS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCBjbG9uZSA9IHJlcy5jbG9uZSgpXHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IGNsb25lLmpzb24oKS5jYXRjaCgoKSA9PiBudWxsKVxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID1cclxuICAgICAgICAgIChqc29uICYmXHJcbiAgICAgICAgICAgIChqc29uLml0ZW1zIHx8XHJcbiAgICAgICAgICAgICAganNvbi5Db250ZW50SXRlbXMgfHxcclxuICAgICAgICAgICAgICBqc29uLmRhdGEgfHxcclxuICAgICAgICAgICAgICAoQXJyYXkuaXNBcnJheShqc29uKSA/IGpzb24gOiBudWxsKSkpIHx8XHJcbiAgICAgICAgICBbXVxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgIHcuX19qck9yYWNsZUxvdiEuaXRlbXMgPSBpdGVtc1xyXG4gICAgICAgICAgdy5fX2pyT3JhY2xlTG92IS5sYXN0VXJsID0gdXJsXHJcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiX19qcl9vcmFjbGVfbG92X2NhcHR1cmVkXCIsIHtcclxuICAgICAgICAgICAgICBkZXRhaWw6IHsgY2FwdHVyZUlkLCBjb3VudDogaXRlbXMubGVuZ3RoLCB1cmwgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIC8qIGlnbm9yZSAqL1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH1cclxuICByZXR1cm4geyBvazogdHJ1ZSwgY2FwdHVyZUlkIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZpZWxkID0gU3RyaW5nKHJlcS5ib2R5Py5maWVsZCB8fCByZXEuYm9keT8ubGFiZWwgfHwgXCJlZHVjYXRpb25cIilcclxuICAgIGNvbnN0IHNlYXJjaCA9IFN0cmluZyhyZXEuYm9keT8uc2VhcmNoIHx8IHJlcS5ib2R5Py5xdWVyeSB8fCBcIlwiKVxyXG4gICAgY29uc3QgY2FwdHVyZUlkID1cclxuICAgICAgdHlwZW9mIHJlcS5ib2R5Py5jYXB0dXJlSWQgPT09IFwic3RyaW5nXCJcclxuICAgICAgICA/IHJlcS5ib2R5LmNhcHR1cmVJZFxyXG4gICAgICAgIDogYG9yYWNsZS0ke0RhdGUubm93KCl9LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgOCl9YFxyXG5cclxuICAgIHNldE9yYWNsZUNhcHR1cmUoY2FwdHVyZUlkLCB7IGZpZWxkLCBzZWFyY2gsIGl0ZW1zOiBbXSB9KVxyXG5cclxuICAgIGNvbnN0IHRhYklkID1cclxuICAgICAgdHlwZW9mIHJlcS5ib2R5Py50YWJJZCA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgID8gcmVxLmJvZHkudGFiSWRcclxuICAgICAgICA6IChcclxuICAgICAgICAgICAgYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSlcclxuICAgICAgICAgIClbMF0/LmlkXHJcblxyXG4gICAgaWYgKHRhYklkKSB7XHJcbiAgICAgIGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgICAgdGFyZ2V0OiB7IHRhYklkIH0sXHJcbiAgICAgICAgd29ybGQ6IFwiTUFJTlwiLFxyXG4gICAgICAgIGZ1bmM6IElOU1RBTExfSU5URVJDRVBUT1IsXHJcbiAgICAgICAgYXJnczogW2NhcHR1cmVJZF1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIG9rOiB0cnVlLFxyXG4gICAgICBjYXB0dXJlSWQsXHJcbiAgICAgIGZpZWxkLFxyXG4gICAgICBzZWFyY2hcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwicHJlcGFyZV9mYWlsZWRcIlxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcHJlcGFyZVBoZW5vbVNjaG9vbENhcHR1cmUuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwicHJlcGFyZVBoZW5vbVNjaG9vbENhcHR1cmVcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXHJcblxyXG5pbXBvcnQgeyByZXNvbHZlUmVzdW1lQmxvYlJlc3BvbnNlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL2xpYi9yZXN1bWUtYmxvYlwiXHJcblxyXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCByZXN1bWVJZCA9XHJcbiAgICB0eXBlb2YgcmVxLmJvZHk/LnJlc3VtZUlkID09PSBcInN0cmluZ1wiID8gcmVxLmJvZHkucmVzdW1lSWQgOiBudWxsXHJcbiAgcmVzLnNlbmQoYXdhaXQgcmVzb2x2ZVJlc3VtZUJsb2JSZXNwb25zZSh7IHJlc3VtZUlkIH0pKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxyXG5cclxuaW1wb3J0IHsgcmVzb2x2ZVJlc3VtZUJsb2JSZXNwb25zZSB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvcmVzdW1lLWJsb2JcIlxyXG5cclxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgcmVzdW1lSWQgPVxyXG4gICAgdHlwZW9mIHJlcS5ib2R5Py5yZXN1bWVJZCA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnJlc3VtZUlkIDogbnVsbFxyXG4gIHJlcy5zZW5kKGF3YWl0IHJlc29sdmVSZXN1bWVCbG9iUmVzcG9uc2UoeyByZXN1bWVJZCB9KSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZWdlbmVyYXRlQW5zd2VyLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInJlZ2VuZXJhdGVBbnN3ZXJcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVsb2FkRXh0ZW5zaW9uLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInJlbG9hZEV4dGVuc2lvblwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgeyBzb2Z0T2sgfSBmcm9tIFwifmJhY2tncm91bmQvbGliL3NvZnQtc3R1YlwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzb2Z0T2soXCJyZXBvcnRBdXRvZmlsbEZpcnN0VXNlQXR0cmlidXRpb25cIilcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVxdWVzdEV4dGVuc2lvblVwZGF0ZUNoZWNrLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInJlcXVlc3RFeHRlbnNpb25VcGRhdGVDaGVja1wiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQWRkcmVzc1N1Z2dlc3Rpb24uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwicmVzb2x2ZUFkZHJlc3NTdWdnZXN0aW9uXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxyXG5cclxuaW1wb3J0IHsgZmV0Y2hBdXRvZmlsbEluZm8gfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXHJcbmltcG9ydCB7XHJcbiAgcmVzb2x2ZU9wZXJhdGlvbkxvY2FsbHksXHJcbiAgdHlwZSBPcGVyYXRpb25QYXlsb2FkXHJcbn0gZnJvbSBcIn5saWIvcmVzb2x2ZS1vcGVyYXRpb25cIlxyXG5pbXBvcnQgeyBwbGFuT3JhY2xlRWR1Y2F0aW9uQ2xpZW50U2VhcmNoU3RlcCB9IGZyb20gXCJ+bGliL29yYWNsZS1lZHVjYXRpb24tcGxhblwiXHJcblxyXG4vKipcclxuICogTXVsdGktdHVybiBjbGllbnQtc2VhcmNoIHN0ZXAgKE9yYWNsZSBlZHUgTE9WLCBldGMuKS5cclxuICovXHJcbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHkgPz8ge31cclxuICAgIGNvbnN0IGh1YiA9IGF3YWl0IGZldGNoQXV0b2ZpbGxJbmZvKFxyXG4gICAgICB0eXBlb2YgYm9keS5wcm9maWxlSWQgPT09IFwic3RyaW5nXCIgPyBib2R5LnByb2ZpbGVJZCA6IG51bGxcclxuICAgIClcclxuICAgIGlmICghaHViKSB7XHJcbiAgICAgIHJlcy5zZW5kKHtcclxuICAgICAgICBvazogZmFsc2UsXHJcbiAgICAgICAgcmVzdWx0czogW10sXHJcbiAgICAgICAgb3B0aW9uczogW10sXHJcbiAgICAgICAgbWVzc2FnZTogXCJub19wcm9maWxlXCJcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm91bmQgPSB0eXBlb2YgYm9keS5yb3VuZCA9PT0gXCJudW1iZXJcIiA/IGJvZHkucm91bmQgOiAwXHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gQXJyYXkuaXNBcnJheShib2R5LmNhbmRpZGF0ZXMpID8gYm9keS5jYW5kaWRhdGVzIDogW11cclxuICAgIGNvbnN0IHNlYXJjaFRleHQgPVxyXG4gICAgICB0eXBlb2YgYm9keS5xdWVyeSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgID8gYm9keS5xdWVyeVxyXG4gICAgICAgIDogdHlwZW9mIGJvZHkuc2VhcmNoVGV4dCA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgPyBib2R5LnNlYXJjaFRleHRcclxuICAgICAgICAgIDogXCJcIlxyXG5cclxuICAgIC8vIE9yYWNsZS1zdHlsZSBwbGFubmVyIHdoZW4gY2FuZGlkYXRlcyAvIHJvdW5kIHByb3ZpZGVkXHJcbiAgICBpZiAoYm9keS5tb2RlID09PSBcIm9yYWNsZS1lZHVjYXRpb25cIiB8fCBjYW5kaWRhdGVzLmxlbmd0aCB8fCBib2R5LnJvdW5kICE9IG51bGwpIHtcclxuICAgICAgY29uc3QgZGVzaXJlZCA9XHJcbiAgICAgICAgdHlwZW9mIGJvZHkuZGVzaXJlZCA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgPyBib2R5LmRlc2lyZWRcclxuICAgICAgICAgIDogc2VhcmNoVGV4dFxyXG4gICAgICBjb25zdCBwbGFuID0gcGxhbk9yYWNsZUVkdWNhdGlvbkNsaWVudFNlYXJjaFN0ZXAoe1xyXG4gICAgICAgIHJvdW5kLFxyXG4gICAgICAgIHNlYXJjaFRleHQsXHJcbiAgICAgICAgY2FuZGlkYXRlczogY2FuZGlkYXRlcy5tYXAoKGM6IHsgdGV4dD86IHN0cmluZzsgdmFsdWU/OiBzdHJpbmc7IGNhbmRpZGF0ZV9rZXk/OiBzdHJpbmcgfSkgPT4gKHtcclxuICAgICAgICAgIGNhbmRpZGF0ZV9rZXk6IFN0cmluZyhjLmNhbmRpZGF0ZV9rZXkgfHwgYy52YWx1ZSB8fCBjLnRleHQgfHwgXCJcIiksXHJcbiAgICAgICAgICB2YWx1ZTogU3RyaW5nKGMudmFsdWUgfHwgYy5jYW5kaWRhdGVfa2V5IHx8IGMudGV4dCB8fCBcIlwiKSxcclxuICAgICAgICAgIHRleHQ6IFN0cmluZyhjLnRleHQgfHwgYy52YWx1ZSB8fCBcIlwiKVxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBkZXNpcmVkXHJcbiAgICAgIH0pXHJcbiAgICAgIHJlcy5zZW5kKHtcclxuICAgICAgICBvazogdHJ1ZSxcclxuICAgICAgICBhY3Rpb246IHBsYW4uYWN0aW9uLFxyXG4gICAgICAgIHJlc3VsdHM6IHBsYW4uc2VsZWN0ZWRfdmFsdWVzIHx8IFtdLFxyXG4gICAgICAgIG9wdGlvbnM6IHBsYW4uc2VsZWN0ZWRfdmFsdWVzIHx8IFtdLFxyXG4gICAgICAgIHNlYXJjaFRleHQ6IHBsYW4uc2VhcmNoVGV4dCxcclxuICAgICAgICByZXN1bHQ6IHBsYW5cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3BlcmF0aW9uOiBPcGVyYXRpb25QYXlsb2FkID0ge1xyXG4gICAgICBsYWJlbDogYm9keS5sYWJlbCB8fCBib2R5LmZpZWxkIHx8IGJvZHkuc3RlcCB8fCBcIlwiLFxyXG4gICAgICBxdWVyeTogc2VhcmNoVGV4dCxcclxuICAgICAgb3B0aW9uczogYm9keS5vcHRpb25zIHx8IGJvZHkucmVzdWx0cyB8fCBbXSxcclxuICAgICAgc2VhcmNoX3JlcXVlc3Rfc2NoZW1hOiBib2R5LnNlYXJjaF9yZXF1ZXN0X3NjaGVtYVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc29sdmVPcGVyYXRpb25Mb2NhbGx5KFxyXG4gICAgICBodWIsXHJcbiAgICAgIG9wZXJhdGlvbixcclxuICAgICAgdHlwZW9mIGJvZHkuc291cmNlID09PSBcInN0cmluZ1wiID8gYm9keS5zb3VyY2UgOiBcImdlbmVyaWNcIlxyXG4gICAgKVxyXG5cclxuICAgIHJlcy5zZW5kKHtcclxuICAgICAgb2s6IHRydWUsXHJcbiAgICAgIHJlc3VsdHM6IHJlc3VsdC5zZWxlY3RlZF92YWx1ZXMsXHJcbiAgICAgIG9wdGlvbnM6IHJlc3VsdC5zZWxlY3RlZF92YWx1ZXMsXHJcbiAgICAgIHJlc3VsdFxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJlcy5zZW5kKHtcclxuICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICByZXN1bHRzOiBbXSxcclxuICAgICAgb3B0aW9uczogW10sXHJcbiAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcInJlc29sdmVfZmFpbGVkXCJcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIi8qKlxuICogTG9jYWwgKyBuZXR3b3JrIExPViByZXNvbHZlIChKb2JyaWdodCBhdXRvZmlsbC1vcGVyYXRpb24gc3RhbmQtaW4pLlxuICovXG5cbmltcG9ydCB0eXBlIHsgQXV0b2ZpbGxJbmZvUGF5bG9hZCB9IGZyb20gXCJ+YXBpL3RlYW0tdHlwZXNcIlxuaW1wb3J0IHsgbG9va3VwQW5zd2VyIH0gZnJvbSBcIn5saWIvaHViLXRvLWpvYnJpZ2h0XCJcblxuZnVuY3Rpb24gbm9ybShzOiBzdHJpbmcpIHtcbiAgcmV0dXJuIChzIHx8IFwiXCIpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvW15hLXowLTldKy9nLCBcIiBcIilcbiAgICAudHJpbSgpXG59XG5cbmZ1bmN0aW9uIHNjb3JlT3B0aW9uKGNhbmRpZGF0ZTogc3RyaW5nLCBvcHRpb246IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IGMgPSBub3JtKGNhbmRpZGF0ZSlcbiAgY29uc3QgbyA9IG5vcm0ob3B0aW9uKVxuICBpZiAoIWMgfHwgIW8pIHJldHVybiAwXG4gIGlmICgvXnBsZWFzZSBzZWxlY3R8XnNlbGVjdCB8XmNob29zZSB8XnNlbGVjdCBvbmV8Xi0tJC8udGVzdChvKSkgcmV0dXJuIDBcbiAgaWYgKGMgPT09IG8pIHJldHVybiAxMDBcbiAgaWYgKG8uaW5jbHVkZXMoYykgfHwgYy5pbmNsdWRlcyhvKSkgcmV0dXJuIDgwXG4gIGNvbnN0IGN0ID0gbmV3IFNldChjLnNwbGl0KFwiIFwiKS5maWx0ZXIoQm9vbGVhbikpXG4gIGNvbnN0IG90ID0gby5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pXG4gIGxldCBoaXQgPSAwXG4gIGZvciAoY29uc3QgdCBvZiBvdCkgaWYgKGN0Lmhhcyh0KSkgaGl0ICs9IDFcbiAgaWYgKCFvdC5sZW5ndGgpIHJldHVybiAwXG4gIHJldHVybiBNYXRoLnJvdW5kKChoaXQgLyBvdC5sZW5ndGgpICogNjApXG59XG5cbmZ1bmN0aW9uIGFkYXB0VG9PcHRpb25zKHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM6IHN0cmluZ1tdKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghdmFsdWUudHJpbSgpIHx8ICFvcHRpb25zLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgbGV0IGJlc3Q6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIGxldCBiZXN0U2NvcmUgPSAwXG4gIGZvciAoY29uc3Qgb3B0IG9mIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzID0gc2NvcmVPcHRpb24odmFsdWUsIG9wdClcbiAgICBpZiAocyA+IGJlc3RTY29yZSkge1xuICAgICAgYmVzdFNjb3JlID0gc1xuICAgICAgYmVzdCA9IG9wdFxuICAgIH1cbiAgfVxuICByZXR1cm4gYmVzdFNjb3JlID49IDQwID8gYmVzdCA6IG51bGxcbn1cblxuZXhwb3J0IHR5cGUgT3BlcmF0aW9uUGF5bG9hZCA9IHtcbiAgbGFiZWw/OiBzdHJpbmdcbiAgcXVlc3Rpb24/OiBzdHJpbmdcbiAgZmllbGQ/OiBzdHJpbmdcbiAgcXVlcnk/OiBzdHJpbmdcbiAgc2VhcmNoVGV4dD86IHN0cmluZ1xuICBvcHRpb25zPzogdW5rbm93blxuICBjYW5kaWRhdGVzPzogdW5rbm93blxuICB2YWx1ZXM/OiB1bmtub3duXG4gIHNlYXJjaF9yZXF1ZXN0X3NjaGVtYT86IFNlYXJjaFJlcXVlc3RTY2hlbWFcbiAgW2tleTogc3RyaW5nXTogdW5rbm93blxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hSZXF1ZXN0U2NoZW1hID0ge1xuICBtZXRob2Q/OiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgaGVhZGVycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgYm9keT86IHVua25vd25cbiAgcmVzdWx0UGF0aD86IHN0cmluZ1xuICBsYWJlbEtleT86IHN0cmluZ1xuICB2YWx1ZUtleT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBSZXNvbHZlUmVzdWx0ID0ge1xuICBhY3Rpb246IFwiU0VMRUNUXCIgfCBcIlNFTEVDVF9PUFRJT05TXCIgfCBcIlJFVFJZQUJMRV9GQUlMVVJFXCIgfCBcIk5PX01BVENIXCJcbiAgc2VsZWN0ZWRfdmFsdWVzOiBzdHJpbmdbXVxuICBzb3VyY2U6IHN0cmluZ1xuICBvcHRpb25zPzogc3RyaW5nW11cbn1cblxuZnVuY3Rpb24gYXNTdHJpbmdMaXN0KHJhdzogdW5rbm93bik6IHN0cmluZ1tdIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHJhdykpIHJldHVybiBbXVxuICByZXR1cm4gcmF3XG4gICAgLm1hcCgobykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gb1xuICAgICAgaWYgKG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY29uc3QgcmVjID0gbyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICBmb3IgKGNvbnN0IGsgb2YgW1wibGFiZWxcIiwgXCJ0ZXh0XCIsIFwibmFtZVwiLCBcInZhbHVlXCIsIFwiZGlzcGxheU5hbWVcIiwgXCJkZXNjcmlwdG9yXCJdKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZWNba10gPT09IFwic3RyaW5nXCIpIHJldHVybiByZWNba10gYXMgc3RyaW5nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBcIlwiXG4gICAgfSlcbiAgICAubWFwKChzKSA9PiBzLnRyaW0oKSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG59XG5cbmZ1bmN0aW9uIGRpZyhvYmo6IHVua25vd24sIHBhdGg6IHN0cmluZyk6IHVua25vd24ge1xuICBpZiAoIXBhdGgpIHJldHVybiBvYmpcbiAgbGV0IGN1cjogdW5rbm93biA9IG9ialxuICBmb3IgKGNvbnN0IHBhcnQgb2YgcGF0aC5zcGxpdChcIi5cIikuZmlsdGVyKEJvb2xlYW4pKSB7XG4gICAgaWYgKGN1ciA9PSBudWxsIHx8IHR5cGVvZiBjdXIgIT09IFwib2JqZWN0XCIpIHJldHVybiB1bmRlZmluZWRcbiAgICBjdXIgPSAoY3VyIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtwYXJ0XVxuICB9XG4gIHJldHVybiBjdXJcbn1cblxuZnVuY3Rpb24gZXh0cmFjdExhYmVsc0Zyb21QYXlsb2FkKFxuICBwYXlsb2FkOiB1bmtub3duLFxuICBzY2hlbWE6IFNlYXJjaFJlcXVlc3RTY2hlbWFcbik6IHN0cmluZ1tdIHtcbiAgY29uc3Qgcm9vdCA9IGRpZyhwYXlsb2FkLCBzY2hlbWEucmVzdWx0UGF0aCB8fCBcIlwiKVxuICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShyb290KVxuICAgID8gcm9vdFxuICAgIDogQXJyYXkuaXNBcnJheSgocm9vdCBhcyB7IHJlc3VsdHM/OiB1bmtub3duIH0pPy5yZXN1bHRzKVxuICAgICAgPyAoKHJvb3QgYXMgeyByZXN1bHRzOiB1bmtub3duW10gfSkucmVzdWx0cylcbiAgICAgIDogQXJyYXkuaXNBcnJheShwYXlsb2FkKVxuICAgICAgICA/IHBheWxvYWRcbiAgICAgICAgOiBbXVxuXG4gIGNvbnN0IGxhYmVsS2V5ID0gc2NoZW1hLmxhYmVsS2V5IHx8IFwibGFiZWxcIlxuICBjb25zdCB2YWx1ZUtleSA9IHNjaGVtYS52YWx1ZUtleSB8fCBcInZhbHVlXCJcbiAgY29uc3Qgb3V0OiBzdHJpbmdbXSA9IFtdXG4gIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBvdXQucHVzaChpdGVtKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IHJlYyA9IGl0ZW0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgIGNvbnN0IGxhYmVsID1cbiAgICAgICAgKHR5cGVvZiByZWNbbGFiZWxLZXldID09PSBcInN0cmluZ1wiICYmIHJlY1tsYWJlbEtleV0pIHx8XG4gICAgICAgICh0eXBlb2YgcmVjW3ZhbHVlS2V5XSA9PT0gXCJzdHJpbmdcIiAmJiByZWNbdmFsdWVLZXldKSB8fFxuICAgICAgICAodHlwZW9mIHJlYy5kZXNjcmlwdG9yID09PSBcInN0cmluZ1wiICYmIHJlYy5kZXNjcmlwdG9yKSB8fFxuICAgICAgICAodHlwZW9mIHJlYy50ZXh0ID09PSBcInN0cmluZ1wiICYmIHJlYy50ZXh0KSB8fFxuICAgICAgICAodHlwZW9mIHJlYy5uYW1lID09PSBcInN0cmluZ1wiICYmIHJlYy5uYW1lKVxuICAgICAgaWYgKHR5cGVvZiBsYWJlbCA9PT0gXCJzdHJpbmdcIiAmJiBsYWJlbC50cmltKCkpIG91dC5wdXNoKGxhYmVsLnRyaW0oKSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hTZWFyY2hTY2hlbWFPcHRpb25zKFxuICBzY2hlbWE6IFNlYXJjaFJlcXVlc3RTY2hlbWFcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgbWV0aG9kID0gKHNjaGVtYS5tZXRob2QgfHwgXCJHRVRcIikudG9VcHBlckNhc2UoKVxuICBjb25zdCBpbml0OiBSZXF1ZXN0SW5pdCA9IHtcbiAgICBtZXRob2QsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIC4uLihzY2hlbWEuaGVhZGVycyB8fCB7fSlcbiAgICB9LFxuICAgIGNyZWRlbnRpYWxzOiBcIm9taXRcIlxuICB9XG4gIGlmIChtZXRob2QgIT09IFwiR0VUXCIgJiYgc2NoZW1hLmJvZHkgIT0gbnVsbCkge1xuICAgIGluaXQuYm9keSA9XG4gICAgICB0eXBlb2Ygc2NoZW1hLmJvZHkgPT09IFwic3RyaW5nXCJcbiAgICAgICAgPyBzY2hlbWEuYm9keVxuICAgICAgICA6IEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ib2R5KVxuICAgIGlmICghc2NoZW1hLmhlYWRlcnM/LltcImNvbnRlbnQtdHlwZVwiXSAmJiAhc2NoZW1hLmhlYWRlcnM/LltcIkNvbnRlbnQtVHlwZVwiXSkge1xuICAgICAgOyhpbml0LmhlYWRlcnMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPilbXCJjb250ZW50LXR5cGVcIl0gPVxuICAgICAgICBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHNjaGVtYS51cmwsIGluaXQpXG4gIGlmICghcmVzLm9rKSByZXR1cm4gW11cbiAgY29uc3QgY29udGVudFR5cGUgPSByZXMuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIikgfHwgXCJcIlxuICBpZiAoY29udGVudFR5cGUuaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4gZXh0cmFjdExhYmVsc0Zyb21QYXlsb2FkKGpzb24sIHNjaGVtYSlcbiAgfVxuICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKVxuICB0cnkge1xuICAgIHJldHVybiBleHRyYWN0TGFiZWxzRnJvbVBheWxvYWQoSlNPTi5wYXJzZSh0ZXh0KSwgc2NoZW1hKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5mdW5jdGlvbiBkZXNpcmVkRnJvbUh1YihcbiAgaHViOiBBdXRvZmlsbEluZm9QYXlsb2FkLFxuICBvcGVyYXRpb246IE9wZXJhdGlvblBheWxvYWRcbik6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBsYWJlbCA9XG4gICAgKHR5cGVvZiBvcGVyYXRpb24ubGFiZWwgPT09IFwic3RyaW5nXCIgJiYgb3BlcmF0aW9uLmxhYmVsKSB8fFxuICAgICh0eXBlb2Ygb3BlcmF0aW9uLnF1ZXN0aW9uID09PSBcInN0cmluZ1wiICYmIG9wZXJhdGlvbi5xdWVzdGlvbikgfHxcbiAgICAodHlwZW9mIG9wZXJhdGlvbi5maWVsZCA9PT0gXCJzdHJpbmdcIiAmJiBvcGVyYXRpb24uZmllbGQpIHx8XG4gICAgXCJcIlxuXG4gIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgLi4uYXNTdHJpbmdMaXN0KG9wZXJhdGlvbi5vcHRpb25zKSxcbiAgICAuLi5hc1N0cmluZ0xpc3Qob3BlcmF0aW9uLmNhbmRpZGF0ZXMpLFxuICAgIC4uLmFzU3RyaW5nTGlzdChvcGVyYXRpb24udmFsdWVzKVxuICBdXG5cbiAgY29uc3QgcXVlcnkgPVxuICAgICh0eXBlb2Ygb3BlcmF0aW9uLnF1ZXJ5ID09PSBcInN0cmluZ1wiICYmIG9wZXJhdGlvbi5xdWVyeSkgfHxcbiAgICAodHlwZW9mIG9wZXJhdGlvbi5zZWFyY2hUZXh0ID09PSBcInN0cmluZ1wiICYmIG9wZXJhdGlvbi5zZWFyY2hUZXh0KSB8fFxuICAgIFwiXCJcblxuICBsZXQgZGVzaXJlZCA9XG4gICAgKGxhYmVsICYmIGxvb2t1cEFuc3dlcihodWIsIGxhYmVsLCBvcHRpb25zKSkgfHxcbiAgICAocXVlcnkgJiYgbG9va3VwQW5zd2VyKGh1YiwgcXVlcnksIG9wdGlvbnMpKSB8fFxuICAgIHF1ZXJ5IHx8XG4gICAgbnVsbFxuXG4gIGlmICghZGVzaXJlZCAmJiAvY291bnRyeS9pLnRlc3QobGFiZWwpKSBkZXNpcmVkID0gaHViLmlkZW50aXR5LmFkZHJlc3MuY291bnRyeVxuICBpZiAoIWRlc2lyZWQgJiYgL14oY2l0eXxsb2NhdGlvbikkL2kudGVzdChub3JtKGxhYmVsKSkpIHtcbiAgICBkZXNpcmVkID0gaHViLmlkZW50aXR5LmFkZHJlc3MuY2l0eVxuICB9XG4gIGlmICghZGVzaXJlZCAmJiAvc3RhdGV8cHJvdmluY2UvaS50ZXN0KGxhYmVsKSkge1xuICAgIGRlc2lyZWQgPSBodWIuaWRlbnRpdHkuYWRkcmVzcy5zdGF0ZVxuICB9XG4gIGlmICghZGVzaXJlZCAmJiAvc2Nob29sfHVuaXZlcnNpdHl8Y29sbGVnZS9pLnRlc3QobGFiZWwpKSB7XG4gICAgY29uc3QgZWR1ID0gaHViLmV4dHJhcz8uZWR1Y2F0aW9uXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZWR1KSAmJiBlZHVbMF0gJiYgdHlwZW9mIGVkdVswXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29uc3Qgcm93ID0gZWR1WzBdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICBkZXNpcmVkID1cbiAgICAgICAgKHR5cGVvZiByb3cuc2Nob29sTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiByb3cuc2Nob29sTmFtZSkgfHxcbiAgICAgICAgKHR5cGVvZiByb3cuc2Nob29sID09PSBcInN0cmluZ1wiICYmIHJvdy5zY2hvb2wpIHx8XG4gICAgICAgIG51bGxcbiAgICB9XG4gIH1cbiAgaWYgKCFkZXNpcmVkICYmIC9kZWdyZWUvaS50ZXN0KGxhYmVsKSkge1xuICAgIGNvbnN0IGVkdSA9IGh1Yi5leHRyYXM/LmVkdWNhdGlvblxuICAgIGlmIChBcnJheS5pc0FycmF5KGVkdSkgJiYgZWR1WzBdICYmIHR5cGVvZiBlZHVbMF0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGVkdVswXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgZGVzaXJlZCA9XG4gICAgICAgICh0eXBlb2Ygcm93LmFjY3JlZGl0YXRpb24gPT09IFwic3RyaW5nXCIgJiYgcm93LmFjY3JlZGl0YXRpb24pIHx8XG4gICAgICAgICh0eXBlb2Ygcm93LmRlZ3JlZSA9PT0gXCJzdHJpbmdcIiAmJiByb3cuZGVncmVlKSB8fFxuICAgICAgICBudWxsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlc2lyZWRcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGFuIEFUUyBMT1YgLyB0eXBlYWhlYWQgLyBzZWxlY3Qgb3BlcmF0aW9uIGFnYWluc3QgaHViICsgb3B0aW9uYWwgbmV0d29yayBzY2hlbWEuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlT3BlcmF0aW9uTG9jYWxseShcbiAgaHViOiBBdXRvZmlsbEluZm9QYXlsb2FkLFxuICBvcGVyYXRpb246IE9wZXJhdGlvblBheWxvYWQsXG4gIHNvdXJjZSA9IFwiZ2VuZXJpY1wiXG4pOiBQcm9taXNlPFJlc29sdmVSZXN1bHQ+IHtcbiAgY29uc3QgZGVzaXJlZCA9IGRlc2lyZWRGcm9tSHViKGh1Yiwgb3BlcmF0aW9uKVxuXG4gIGxldCBvcHRpb25zID0gW1xuICAgIC4uLmFzU3RyaW5nTGlzdChvcGVyYXRpb24ub3B0aW9ucyksXG4gICAgLi4uYXNTdHJpbmdMaXN0KG9wZXJhdGlvbi5jYW5kaWRhdGVzKSxcbiAgICAuLi5hc1N0cmluZ0xpc3Qob3BlcmF0aW9uLnZhbHVlcylcbiAgXVxuXG4gIGlmIChvcGVyYXRpb24uc2VhcmNoX3JlcXVlc3Rfc2NoZW1hPy51cmwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVtb3RlID0gYXdhaXQgZmV0Y2hTZWFyY2hTY2hlbWFPcHRpb25zKG9wZXJhdGlvbi5zZWFyY2hfcmVxdWVzdF9zY2hlbWEpXG4gICAgICBpZiAocmVtb3RlLmxlbmd0aCkgb3B0aW9ucyA9IFsuLi5yZW1vdGUsIC4uLm9wdGlvbnNdXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbcmVzb2x2ZS1vcGVyYXRpb25dIHNlYXJjaCBzY2hlbWEgZmV0Y2ggZmFpbGVkXCIsIGVycilcbiAgICB9XG4gIH1cblxuICBpZiAoIWRlc2lyZWQ/LnRyaW0oKSkge1xuICAgIHJldHVybiB7IGFjdGlvbjogXCJOT19NQVRDSFwiLCBzZWxlY3RlZF92YWx1ZXM6IFtdLCBzb3VyY2UsIG9wdGlvbnMgfVxuICB9XG5cbiAgaWYgKCFvcHRpb25zLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3Rpb246IFwiU0VMRUNUX09QVElPTlNcIixcbiAgICAgIHNlbGVjdGVkX3ZhbHVlczogW2Rlc2lyZWQudHJpbSgpXSxcbiAgICAgIHNvdXJjZVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1hdGNoZWQgPSBhZGFwdFRvT3B0aW9ucyhkZXNpcmVkLCBvcHRpb25zKVxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4geyBhY3Rpb246IFwiTk9fTUFUQ0hcIiwgc2VsZWN0ZWRfdmFsdWVzOiBbXSwgc291cmNlLCBvcHRpb25zIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWN0aW9uOiBcIlNFTEVDVF9PUFRJT05TXCIsXG4gICAgc2VsZWN0ZWRfdmFsdWVzOiBbbWF0Y2hlZF0sXG4gICAgc291cmNlLFxuICAgIG9wdGlvbnNcbiAgfVxufVxuIiwiZXhwb3J0IHR5cGUgT3JhY2xlTG92Q2FuZGlkYXRlID0ge1xyXG4gIGNhbmRpZGF0ZV9rZXk6IHN0cmluZ1xyXG4gIHZhbHVlOiBzdHJpbmdcclxuICB0ZXh0OiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIE11bHRpLXN0ZXAgY2xpZW50LXNlYXJjaCBwbGFubmVyIGZvciBPcmFjbGUgZWR1Y2F0aW9uIExPVi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGFuT3JhY2xlRWR1Y2F0aW9uQ2xpZW50U2VhcmNoU3RlcChvcHRzOiB7XHJcbiAgcm91bmQ6IG51bWJlclxyXG4gIG1heFJvdW5kcz86IG51bWJlclxyXG4gIHNlYXJjaFRleHQ6IHN0cmluZ1xyXG4gIGNhbmRpZGF0ZXM6IE9yYWNsZUxvdkNhbmRpZGF0ZVtdXHJcbiAgZGVzaXJlZDogc3RyaW5nXHJcbn0pOiB7XHJcbiAgYWN0aW9uOiBcIlJFUVVFU1RfU0VBUkNIXCIgfCBcIlNFTEVDVF9PUFRJT05TXCIgfCBcIk5PX01BVENIXCJcclxuICBzZWFyY2hUZXh0Pzogc3RyaW5nXHJcbiAgc2VsZWN0ZWRfdmFsdWVzPzogc3RyaW5nW11cclxufSB7XHJcbiAgY29uc3QgbWF4ID0gb3B0cy5tYXhSb3VuZHMgPz8gNVxyXG4gIGlmIChvcHRzLnJvdW5kID49IG1heCkgcmV0dXJuIHsgYWN0aW9uOiBcIk5PX01BVENIXCIgfVxyXG5cclxuICBpZiAoIW9wdHMuY2FuZGlkYXRlcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFjdGlvbjogXCJSRVFVRVNUX1NFQVJDSFwiLFxyXG4gICAgICBzZWFyY2hUZXh0OiBvcHRzLnNlYXJjaFRleHRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHdhbnQgPSBvcHRzLmRlc2lyZWQudG9Mb3dlckNhc2UoKVxyXG4gIGNvbnN0IGhpdCA9IG9wdHMuY2FuZGlkYXRlcy5maW5kKFxyXG4gICAgKGMpID0+XHJcbiAgICAgIGMudGV4dC50b0xvd2VyQ2FzZSgpID09PSB3YW50IHx8XHJcbiAgICAgIGMudGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHdhbnQpIHx8XHJcbiAgICAgIHdhbnQuaW5jbHVkZXMoYy50ZXh0LnRvTG93ZXJDYXNlKCkpXHJcbiAgKVxyXG4gIGlmIChoaXQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFjdGlvbjogXCJTRUxFQ1RfT1BUSU9OU1wiLFxyXG4gICAgICBzZWxlY3RlZF92YWx1ZXM6IFtoaXQudGV4dF1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHRva2VuID0gb3B0cy5zZWFyY2hUZXh0LnNwbGl0KC9cXHMrLylbMF0gfHwgb3B0cy5zZWFyY2hUZXh0XHJcbiAgaWYgKG9wdHMucm91bmQgPCBtYXggLSAxICYmIHRva2VuICE9PSBvcHRzLnNlYXJjaFRleHQpIHtcclxuICAgIHJldHVybiB7IGFjdGlvbjogXCJSRVFVRVNUX1NFQVJDSFwiLCBzZWFyY2hUZXh0OiB0b2tlbiB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWN0aW9uOiBcIlNFTEVDVF9PUFRJT05TXCIsXHJcbiAgICBzZWxlY3RlZF92YWx1ZXM6IFtvcHRzLmNhbmRpZGF0ZXNbMF0udGV4dF1cclxuICB9XHJcbn1cclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXHJcblxyXG5pbXBvcnQgeyBmZXRjaEF1dG9maWxsSW5mbyB9IGZyb20gXCJ+YXBpL3RlYW0tY2xpZW50XCJcclxuaW1wb3J0IHsgcmVzb2x2ZU9wZXJhdGlvbkxvY2FsbHkgfSBmcm9tIFwifmxpYi9yZXNvbHZlLW9wZXJhdGlvblwiXHJcblxyXG5jb25zdCBBTExPV0VEX1NPVVJDRVMgPSBuZXcgU2V0KFtcclxuICBcImFzaGJ5XCIsXHJcbiAgXCJlaWdodGZvbGRcIixcclxuICBcImdyZWVuaG91c2VcIixcclxuICBcIm1ldGFjYXJlZXJzXCIsXHJcbiAgXCJteXdvcmtkYXlcIixcclxuICBcIm9yYWNsZWNsb3VkXCIsXHJcbiAgXCJwaW5wb2ludGhxXCIsXHJcbiAgXCJwaGVub21cIixcclxuICBcInJpcHBsaW5nXCIsXHJcbiAgXCJzbWFydHJlY3J1aXRlcnNcIixcclxuICBcInpvaG9yZWNydWl0XCIsXHJcbiAgXCJwZXJzb25pb1wiLFxyXG4gIFwibGV2ZXJcIixcclxuICBcImdlbmVyaWNcIixcclxuICBcImF1dG9GaWxsXCIsXHJcbiAgXCJjbGVhblRzXCJcclxuXSlcclxuXHJcbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBvcGVyYXRpb24gPSByZXEuYm9keT8ub3BlcmF0aW9uXHJcbiAgICBjb25zdCBzb3VyY2UgPVxyXG4gICAgICB0eXBlb2YgcmVxLmJvZHk/LnNvdXJjZSA9PT0gXCJzdHJpbmdcIiA/IHJlcS5ib2R5LnNvdXJjZSA6IFwiZ2VuZXJpY1wiXHJcblxyXG4gICAgaWYgKCFvcGVyYXRpb24gfHwgdHlwZW9mIG9wZXJhdGlvbiAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICByZXMuc2VuZCh7XHJcbiAgICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICAgIG9wZXJhdGlvbixcclxuICAgICAgICByZXN1bHQ6IHsgYWN0aW9uOiBcIlJFVFJZQUJMRV9GQUlMVVJFXCIsIHNlbGVjdGVkX3ZhbHVlczogW10gfSxcclxuICAgICAgICBtZXNzYWdlOiBcIm1pc3Npbmdfb3BlcmF0aW9uXCJcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UubGVuZ3RoID4gNjQpIHtcclxuICAgICAgcmVzLnNlbmQoe1xyXG4gICAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgICBvcGVyYXRpb24sXHJcbiAgICAgICAgcmVzdWx0OiB7IGFjdGlvbjogXCJSRVRSWUFCTEVfRkFJTFVSRVwiLCBzZWxlY3RlZF92YWx1ZXM6IFtdIH0sXHJcbiAgICAgICAgbWVzc2FnZTogXCJpbnZhbGlkX3NvdXJjZVwiXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHZvaWQgQUxMT1dFRF9TT1VSQ0VTXHJcblxyXG4gICAgY29uc3QgaHViID0gYXdhaXQgZmV0Y2hBdXRvZmlsbEluZm8oKVxyXG4gICAgaWYgKCFodWIpIHtcclxuICAgICAgcmVzLnNlbmQoe1xyXG4gICAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgICBvcGVyYXRpb24sXHJcbiAgICAgICAgcmVzdWx0OiB7IGFjdGlvbjogXCJSRVRSWUFCTEVfRkFJTFVSRVwiLCBzZWxlY3RlZF92YWx1ZXM6IFtdIH0sXHJcbiAgICAgICAgbWVzc2FnZTogXCJub19wcm9maWxlXCJcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzb2x2ZU9wZXJhdGlvbkxvY2FsbHkoaHViLCBvcGVyYXRpb24sIHNvdXJjZSlcclxuICAgIHJlcy5zZW5kKHtcclxuICAgICAgb2s6IHRydWUsXHJcbiAgICAgIG9wZXJhdGlvbixcclxuICAgICAgcmVzdWx0XHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzLnNlbmQoe1xyXG4gICAgICBvazogZmFsc2UsXHJcbiAgICAgIHJlc3VsdDogeyBhY3Rpb246IFwiUkVUUllBQkxFX0ZBSUxVUkVcIiwgc2VsZWN0ZWRfdmFsdWVzOiBbXSB9LFxyXG4gICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJyZXNvbHZlX2ZhaWxlZFwiXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlQ2FwdHVyZWRNZXRhQ2FyZWVyc0xvY2F0aW9uLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInJlc29sdmVDYXB0dXJlZE1ldGFDYXJlZXJzTG9jYXRpb25cIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvcmVzb2x2ZUNhcHR1cmVkUGhlbm9tU2Nob29sLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInJlc29sdmVDYXB0dXJlZFBoZW5vbVNjaG9vbFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9yZXNvbHZlSm9iSWRCeVVybC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJyZXNvbHZlSm9iSWRCeVVybFwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy9zYXZlQXV0b2ZpbGxJbmZvLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcInNhdmVBdXRvZmlsbEluZm9cIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2F2ZUV4dGVybmFsSm9iSWQuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwic2F2ZUV4dGVybmFsSm9iSWRcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2F2ZUpvYkRldGFpbC5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJzYXZlSm9iRGV0YWlsXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB7IHNvZnRPayB9IGZyb20gXCJ+YmFja2dyb3VuZC9saWIvc29mdC1zdHViXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNvZnRPayhcInNhdmVTdWJtaXRTdGF0dXNcIilcclxuIiwi77u/aW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbi8qKiBTdHViIOKAlCBwb3J0IGZyb20gZW5naW5lL2JhY2tncm91bmQvc3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2VhcmNoSWNpbXNQcm9maWxlT3B0aW9ucy5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJzZWFyY2hJY2ltc1Byb2ZpbGVPcHRpb25zXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3NlbGVjdEljaW1zUHJvZmlsZU9wdGlvbi5qcyAqL1xuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgb2s6IGZhbHNlLFxuICAgIHN0dWI6IHRydWUsXG4gICAgaGFuZGxlcjogXCJzZWxlY3RJY2ltc1Byb2ZpbGVPcHRpb25cIixcbiAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZCB5ZXQgaW4gdGhlIHRlYW0gZm9ya1wiXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmltcG9ydCB7IHNldFRhYkpvYlJlY29yZCB9IGZyb20gXCJ+YmFja2dyb3VuZC90YWItam9iLWlkXCJcblxuZXhwb3J0IHR5cGUgUmVxdWVzdEJvZHkgPSB7XG4gIGpvYklkPzogc3RyaW5nXG4gIHVybD86IHN0cmluZ1xufVxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXI8UmVxdWVzdEJvZHk+ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHRhYklkID0gcmVxLnNlbmRlcj8udGFiPy5pZFxuICBjb25zdCBqb2JJZCA9IHJlcS5ib2R5Py5qb2JJZD8udHJpbSgpXG4gIGNvbnN0IHVybCA9IHJlcS5ib2R5Py51cmwgfHwgcmVxLnNlbmRlcj8udGFiPy51cmwgfHwgXCJcIlxuXG4gIGlmICh0eXBlb2YgdGFiSWQgIT09IFwibnVtYmVyXCIgfHwgIWpvYklkKSB7XG4gICAgcmVzLnNlbmQoeyBvazogZmFsc2UgfSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBwYXRobmFtZSA9IFwiL1wiXG4gIHRyeSB7XG4gICAgcGF0aG5hbWUgPSBuZXcgVVJMKHVybCkucGF0aG5hbWVcbiAgfSBjYXRjaCB7XG4gICAgLyogaWdub3JlICovXG4gIH1cblxuICBhd2FpdCBzZXRUYWJKb2JSZWNvcmQodGFiSWQsIHtcbiAgICBqb2JJZCxcbiAgICB1cmwsXG4gICAgcGF0aG5hbWUsXG4gICAgdXBkYXRlZEF0OiBEYXRlLm5vdygpXG4gIH0pXG5cbiAgcmVzLnNlbmQoeyBvazogdHJ1ZSB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy91cGRhdGVBdXRvZmlsbFNlY3Rpb24uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwidXBkYXRlQXV0b2ZpbGxTZWN0aW9uXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3VwZGF0ZVJlc3VtZUNvbGxlY3Rpb24uanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwidXBkYXRlUmVzdW1lQ29sbGVjdGlvblwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGltcGxlbWVudGVkIHlldCBpbiB0aGUgdGVhbSBmb3JrXCJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iLCLvu79pbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuLyoqIFN0dWIg4oCUIHBvcnQgZnJvbSBlbmdpbmUvYmFja2dyb3VuZC9zcmMvYmFja2dyb3VuZC9tZXNzYWdlcy91cGxvYWRCcmFzc3JpbmdQcm9maWxlQnVpbGRlckZpbGUuanMgKi9cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIG9rOiBmYWxzZSxcbiAgICBzdHViOiB0cnVlLFxuICAgIGhhbmRsZXI6IFwidXBsb2FkQnJhc3NyaW5nUHJvZmlsZUJ1aWxkZXJGaWxlXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIu+7v2ltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG4vKiogU3R1YiDigJQgcG9ydCBmcm9tIGVuZ2luZS9iYWNrZ3JvdW5kL3NyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3dhaXRGb3JQaGVub21TY2hvb2xDYXB0dXJlLmpzICovXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKHtcbiAgICBvazogZmFsc2UsXG4gICAgc3R1YjogdHJ1ZSxcbiAgICBoYW5kbGVyOiBcIndhaXRGb3JQaGVub21TY2hvb2xDYXB0dXJlXCIsXG4gICAgbWVzc2FnZTogXCJOb3QgaW1wbGVtZW50ZWQgeWV0IGluIHRoZSB0ZWFtIGZvcmtcIlxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiIsIi8qKlxyXG4gKiBCYWNrZ3JvdW5kIHNlcnZpY2Ugd29ya2VyIGVudHJ5LlxyXG4gKiBNZXNzYWdlIGhhbmRsZXJzIGxpdmUgaW4gYmFja2dyb3VuZC9tZXNzYWdlcy8qLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGdldEh1YlVybCB9IGZyb20gXCJ+YXBpL2Vudi1yZXNvbHZlclwiXHJcbmltcG9ydCB7IHNhdmVUZWFtU2V0dGluZ3MgfSBmcm9tIFwifmFwaS90ZWFtLWNsaWVudFwiXHJcblxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2VFeHRlcm5hbC5hZGRMaXN0ZW5lcigobWVzc2FnZSwgX3NlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKG1lc3NhZ2U/LnR5cGUgIT09IFwiVEVBTV9IVUJfQVVUSFwiIHx8ICFtZXNzYWdlLnRva2VuKSB7XHJcbiAgICBzZW5kUmVzcG9uc2UoeyBvazogZmFsc2UsIGVycm9yOiBcInVua25vd25fbWVzc2FnZVwiIH0pXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGNvbnN0IHNpdGVVcmwgPSBTdHJpbmcobWVzc2FnZS5zaXRlVXJsIHx8IGdldEh1YlVybCgpKS5yZXBsYWNlKC9cXC8rJC8sIFwiXCIpXHJcblxyXG4gIHZvaWQgc2F2ZVRlYW1TZXR0aW5ncyh7XHJcbiAgICBzaXRlVXJsLFxyXG4gICAgYXBpVG9rZW46IFN0cmluZyhtZXNzYWdlLnRva2VuKSxcclxuICAgIHVzZXJFbWFpbDogbWVzc2FnZS51c2VyPy5lbWFpbCB8fCBcIlwiLFxyXG4gICAgdXNlck5hbWU6IG1lc3NhZ2UudXNlcj8ubmFtZSB8fCBcIlwiXHJcbiAgfSlcclxuICAgIC50aGVuKCgpID0+IHNlbmRSZXNwb25zZSh7IG9rOiB0cnVlIH0pKVxyXG4gICAgLmNhdGNoKChlcnIpID0+XHJcbiAgICAgIHNlbmRSZXNwb25zZSh7XHJcbiAgICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJzYXZlX2ZhaWxlZFwiXHJcbiAgICAgIH0pXHJcbiAgICApXHJcblxyXG4gIHJldHVybiB0cnVlXHJcbn0pXHJcblxyXG5leHBvcnQge31cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);