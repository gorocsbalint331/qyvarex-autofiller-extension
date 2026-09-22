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
})({"dSAYa":[function(require,module,exports) {
var global = arguments[3];
var W = Object.create;
var P = Object.defineProperty;
var V = Object.getOwnPropertyDescriptor;
var G = Object.getOwnPropertyNames;
var X = Object.getPrototypeOf, J = Object.prototype.hasOwnProperty;
var q = (e, t, o, r)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let n of G(t))!J.call(e, n) && n !== o && P(e, n, {
        get: ()=>t[n],
        enumerable: !(r = V(t, n)) || r.enumerable
    });
    return e;
};
var z = (e, t, o)=>(o = e != null ? W(X(e)) : {}, q(t || !e || !e.__esModule ? P(o, "default", {
        value: e,
        enumerable: !0
    }) : o, e));
var y = globalThis.process?.argv || [];
var H = ()=>globalThis.process?.env || {};
var K = new Set(y), D = (e)=>K.has(e), ue = y.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var de = D("--dry-run"), _ = ()=>D("--verbose") || H().VERBOSE === "true", fe = _();
var x = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var k = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), T = (...e)=>x("\uD83D\uDD35 INFO", ...e), A = (...e)=>x("\uD83D\uDFE0 WARN", ...e), Q = 0, p = (...e)=>_() && x(`\u{1F7E1} ${Q++}`, ...e);
var c = {
    "isContentScript": false,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "page-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\ripplehire\\location-typeahead.js",
    "bundleId": "d60f88db13b34927",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = c.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: c.verbose
    }
};
var Y = module.bundle.Module;
function Z(e) {
    Y.call(this, e), this.hot = {
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
module.bundle.Module = Z;
module.bundle.hotData = {};
var d = globalThis.browser || globalThis.chrome || null;
async function m(e = !1) {
    e ? (p("Triggering full reload"), d.runtime.sendMessage({
        __plasmo_full_reload__: !0
    })) : globalThis.location?.reload?.();
}
function w() {
    return !c.host || c.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : c.host;
}
function L() {
    return !c.host || c.host === "0.0.0.0" ? "localhost" : c.host;
}
function f() {
    return c.port || location.port;
}
var S = "__plasmo_runtime_page_";
var i = {
    checkedAssets: {},
    assetsToDispose: [],
    assetsToAccept: []
}, B = ()=>{
    i.checkedAssets = {}, i.assetsToDispose = [], i.assetsToAccept = [];
};
function u(e, t) {
    let { modules: o } = e;
    if (!o) return [];
    let r = [], n, s, a;
    for(n in o)for(s in o[n][1])a = o[n][1][s], (a === t || Array.isArray(a) && a[a.length - 1] === t) && r.push([
        e,
        n
    ]);
    return e.parent && (r = r.concat(u(e.parent, t))), r;
}
function R(e, t, o) {
    if (C(e, t, o)) return !0;
    let r = u(module.bundle.root, t), n = !1;
    for(; r.length > 0;){
        let [s, a] = r.shift();
        if (C(s, a, null)) n = !0;
        else {
            let g = u(module.bundle.root, a);
            if (g.length === 0) {
                n = !1;
                break;
            }
            r.push(...g);
        }
    }
    return n;
}
function C(e, t, o) {
    let { modules: r } = e;
    if (!r) return !1;
    if (o && !o[e.HMR_BUNDLE_ID]) return e.parent ? R(e.parent, t, o) : !0;
    if (i.checkedAssets[t]) return !0;
    i.checkedAssets[t] = !0;
    let n = e.cache[t];
    return i.assetsToDispose.push([
        e,
        t
    ]), !n || n.hot && n.hot._acceptCallbacks.length ? (i.assetsToAccept.push([
        e,
        t
    ]), !0) : !1;
}
function M(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function ee(e) {
    if (e.type === "js" && typeof document < "u") return new Promise((t, o)=>{
        let r = document.createElement("script");
        r.src = `${e.url}?t=${Date.now()}`, e.outputFormat === "esmodule" && (r.type = "module"), r.addEventListener("load", ()=>t(r)), r.addEventListener("error", ()=>o(new Error(`Failed to download asset: ${e.id}`))), document.head?.appendChild(r);
    });
}
async function O(e) {
    global.parcelHotUpdate = Object.create(null), e.forEach((o)=>{
        o.url = d.runtime.getURL("/__plasmo_hmr_proxy__?url=" + encodeURIComponent(`${o.url}?t=${Date.now()}`));
    });
    let t = await Promise.all(e.map(ee));
    try {
        e.forEach(function(o) {
            $(module.bundle.root, o);
        });
    } finally{
        delete global.parcelHotUpdate, t && t.forEach((o)=>{
            o && document.head?.removeChild(o);
        });
    }
}
function te(e) {
    let t = e.cloneNode();
    t.onload = function() {
        e.parentNode !== null && e.parentNode.removeChild(e);
    }, t.setAttribute("href", e.getAttribute("href").split("?")[0] + "?" + Date.now()), e.parentNode.insertBefore(t, e.nextSibling);
}
var E = null;
function oe() {
    E || (E = setTimeout(function() {
        let e = document.querySelectorAll('link[rel="stylesheet"]');
        for(var t = 0; t < e.length; t++){
            let o = e[t].getAttribute("href"), r = w(), n = r === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + f()).test(o) : o.indexOf(r + ":" + f());
            /^https?:\/\//i.test(o) && o.indexOf(location.origin) !== 0 && !n || te(e[t]);
        }
        E = null;
    }, 47));
}
function $(e, t) {
    let { modules: o } = e;
    if (o) {
        if (t.type === "css") oe();
        else if (t.type === "js") {
            let r = t.depsByBundle[e.HMR_BUNDLE_ID];
            if (r) {
                if (o[t.id]) {
                    let s = o[t.id][1];
                    for(let a in s)if (!r[a] || r[a] !== s[a]) {
                        let l = s[a];
                        u(module.bundle.root, l).length === 1 && b(module.bundle.root, l);
                    }
                }
                let n = global.parcelHotUpdate[t.id];
                o[t.id] = [
                    n,
                    r
                ];
            } else e.parent && $(e.parent, t);
        }
    }
}
function b(e, t) {
    let o = e.modules;
    if (o) {
        if (o[t]) {
            let r = o[t][1], n = [];
            for(let s in r)u(module.bundle.root, r[s]).length === 1 && n.push(r[s]);
            delete o[t], delete e.cache[t], n.forEach((s)=>{
                b(module.bundle.root, s);
            });
        } else e.parent && b(e.parent, t);
    }
}
function v(e, t) {
    let o = e.cache[t];
    e.hotData[t] = {}, o && o.hot && (o.hot.data = e.hotData[t]), o && o.hot && o.hot._disposeCallbacks.length && o.hot._disposeCallbacks.forEach(function(r) {
        r(e.hotData[t]);
    }), delete e.cache[t];
}
function I(e, t) {
    e(t);
    let o = e.cache[t];
    if (o && o.hot && o.hot._acceptCallbacks.length) {
        let r = u(module.bundle.root, t);
        o.hot._acceptCallbacks.forEach(function(n) {
            let s = n(()=>r);
            s && s.length && (s.forEach(([a, l])=>{
                v(a, l);
            }), i.assetsToAccept.push.apply(i.assetsToAccept, s));
        });
    }
}
function re(e = f()) {
    let t = L();
    return `${c.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function ne(e) {
    typeof e.message == "string" && k("[plasmo/parcel-runtime]: " + e.message);
}
function N(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(re());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let n of r.diagnostics.ansi){
            let s = n.codeframe || n.stack;
            A("[plasmo/parcel-runtime]: " + n.message + `
` + s + `

` + n.hints.join(`
`));
        }
    }), t.addEventListener("error", ne), t.addEventListener("open", ()=>{
        T(`[plasmo/parcel-runtime]: Connected to HMR server for ${c.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        A(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${c.entryFilePath}`);
    }), t;
}
var j = z(require("6da49ef14bee6a53"));
async function F() {
    j.default.injectIntoGlobalHook(window), window.$RefreshReg$ = function() {}, window.$RefreshSig$ = function() {
        return function(e) {
            return e;
        };
    };
}
var se = `${S}${module.id}__`, h, U = module.bundle.parent;
if (!U || !U.isParcelRequire) {
    try {
        h = d?.runtime.connect({
            name: se
        }), h.onDisconnect.addListener(()=>{
            m();
        }), c.isReact || h.onMessage.addListener(()=>{
            m();
        });
    } catch (e) {
        p(e);
    }
    N(async (e)=>{
        if (p("Page runtime - On HMR Update"), c.isReact) {
            B();
            let t = e.filter((r)=>r.envHash === c.envHash);
            if (t.some((r)=>r.type === "css" || r.type === "js" && R(module.bundle.root, r.id, r.depsByBundle))) try {
                await O(t);
                let r = {};
                for (let [s, a] of i.assetsToDispose)r[a] || (v(s, a), r[a] = !0);
                let n = {};
                for(let s = 0; s < i.assetsToAccept.length; s++){
                    let [a, l] = i.assetsToAccept[s];
                    n[l] || (I(a, l), n[l] = !0);
                }
            } catch (r) {
                c.verbose === "true" && (console.trace(r), alert(JSON.stringify(r))), await m(!0);
            }
        } else {
            let t = e.filter((o)=>o.envHash === c.envHash).some((o)=>M(module.bundle, o.id));
            p("Page runtime -", {
                sourceChanged: t
            }), t && h.postMessage({
                __plasmo_page_changed__: !0
            });
        }
    });
}
c.isReact && (p("Injecting react refresh"), F());

},{"6da49ef14bee6a53":"iZhE1"}],"iZhE1":[function(require,module,exports) {
var oe = Object.create;
var H = Object.defineProperty;
var ae = Object.getOwnPropertyDescriptor;
var ue = Object.getOwnPropertyNames;
var se = Object.getPrototypeOf, le = Object.prototype.hasOwnProperty;
var z = (o, f)=>()=>(f || o((f = {
            exports: {}
        }).exports, f), f.exports), ce = (o, f)=>{
    for(var s in f)H(o, s, {
        get: f[s],
        enumerable: !0
    });
}, D = (o, f, s, y)=>{
    if (f && typeof f == "object" || typeof f == "function") for (let m of ue(f))!le.call(o, m) && m !== s && H(o, m, {
        get: ()=>f[m],
        enumerable: !(y = ae(f, m)) || y.enumerable
    });
    return o;
}, S = (o, f, s)=>(D(o, f, "default"), s && D(s, f, "default")), G = (o, f, s)=>(s = o != null ? oe(se(o)) : {}, D(f || !o || !o.__esModule ? H(s, "default", {
        value: o,
        enumerable: !0
    }) : s, o)), de = (o)=>D(H({}, "__esModule", {
        value: !0
    }), o);
var N = z((h)=>{
    "use strict";
    (function() {
        "use strict";
        var o = Symbol.for("react.forward_ref"), f = Symbol.for("react.memo"), s = typeof WeakMap == "function" ? WeakMap : Map, y = new Map, m = new s, b = new s, j = new s, E = [], C = new Map, O = new Map, p = new Set, _ = new Set, F = typeof WeakMap == "function" ? new WeakMap : null, T = !1;
        function B(e) {
            if (e.fullKey !== null) return e.fullKey;
            var r = e.ownKey, n;
            try {
                n = e.getCustomHooks();
            } catch (i) {
                return e.forceReset = !0, e.fullKey = r, r;
            }
            for(var t = 0; t < n.length; t++){
                var l = n[t];
                if (typeof l != "function") return e.forceReset = !0, e.fullKey = r, r;
                var d = b.get(l);
                if (d !== void 0) {
                    var a = B(d);
                    d.forceReset && (e.forceReset = !0), r += "\n---\n" + a;
                }
            }
            return e.fullKey = r, r;
        }
        function q(e, r) {
            var n = b.get(e), t = b.get(r);
            return n === void 0 && t === void 0 ? !0 : !(n === void 0 || t === void 0 || B(n) !== B(t) || t.forceReset);
        }
        function $(e) {
            return e.prototype && e.prototype.isReactComponent;
        }
        function k(e, r) {
            return $(e) || $(r) ? !1 : !!q(e, r);
        }
        function Y(e) {
            return j.get(e);
        }
        function Z(e) {
            var r = new Map;
            return e.forEach(function(n, t) {
                r.set(t, n);
            }), r;
        }
        function W(e) {
            var r = new Set;
            return e.forEach(function(n) {
                r.add(n);
            }), r;
        }
        function M(e, r) {
            try {
                return e[r];
            } catch (n) {
                return;
            }
        }
        function J() {
            if (E.length === 0 || T) return null;
            T = !0;
            try {
                var e = new Set, r = new Set, n = E;
                E = [], n.forEach(function(u) {
                    var c = u[0], v = u[1], R = c.current;
                    j.set(R, c), j.set(v, c), c.current = v, k(R, v) ? r.add(c) : e.add(c);
                });
                var t = {
                    updatedFamilies: r,
                    staleFamilies: e
                };
                C.forEach(function(u) {
                    u.setRefreshHandler(Y);
                });
                var l = !1, d = null, a = W(_), i = W(p), g = Z(O);
                if (a.forEach(function(u) {
                    var c = g.get(u);
                    if (c === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                    if (_.has(u), F !== null && F.has(u)) {
                        var v = F.get(u);
                        try {
                            c.scheduleRoot(u, v);
                        } catch (R) {
                            l || (l = !0, d = R);
                        }
                    }
                }), i.forEach(function(u) {
                    var c = g.get(u);
                    if (c === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                    p.has(u);
                    try {
                        c.scheduleRefresh(u, t);
                    } catch (v) {
                        l || (l = !0, d = v);
                    }
                }), l) throw d;
                return t;
            } finally{
                T = !1;
            }
        }
        function P(e, r) {
            if (e === null || typeof e != "function" && typeof e != "object" || m.has(e)) return;
            var n = y.get(r);
            if (n === void 0 ? (n = {
                current: e
            }, y.set(r, n)) : E.push([
                n,
                e
            ]), m.set(e, n), typeof e == "object" && e !== null) switch(M(e, "$$typeof")){
                case o:
                    P(e.render, r + "$render");
                    break;
                case f:
                    P(e.type, r + "$type");
                    break;
            }
        }
        function K(e, r) {
            var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, t = arguments.length > 3 ? arguments[3] : void 0;
            if (b.has(e) || b.set(e, {
                forceReset: n,
                ownKey: r,
                fullKey: null,
                getCustomHooks: t || function() {
                    return [];
                }
            }), typeof e == "object" && e !== null) switch(M(e, "$$typeof")){
                case o:
                    K(e.render, r, n, t);
                    break;
                case f:
                    K(e.type, r, n, t);
                    break;
            }
        }
        function x(e) {
            var r = b.get(e);
            r !== void 0 && B(r);
        }
        function Q(e) {
            return y.get(e);
        }
        function X(e) {
            return m.get(e);
        }
        function ee(e) {
            var r = new Set;
            return p.forEach(function(n) {
                var t = O.get(n);
                if (t === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                var l = t.findHostInstancesForRefresh(n, e);
                l.forEach(function(d) {
                    r.add(d);
                });
            }), r;
        }
        function re(e) {
            var r = e.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (r === void 0) {
                var n = 0;
                e.__REACT_DEVTOOLS_GLOBAL_HOOK__ = r = {
                    renderers: new Map,
                    supportsFiber: !0,
                    inject: function(a) {
                        return n++;
                    },
                    onScheduleFiberRoot: function(a, i, g) {},
                    onCommitFiberRoot: function(a, i, g, u) {},
                    onCommitFiberUnmount: function() {}
                };
            }
            if (r.isDisabled) {
                console.warn("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");
                return;
            }
            var t = r.inject;
            r.inject = function(a) {
                var i = t.apply(this, arguments);
                return typeof a.scheduleRefresh == "function" && typeof a.setRefreshHandler == "function" && C.set(i, a), i;
            }, r.renderers.forEach(function(a, i) {
                typeof a.scheduleRefresh == "function" && typeof a.setRefreshHandler == "function" && C.set(i, a);
            });
            var l = r.onCommitFiberRoot, d = r.onScheduleFiberRoot || function() {};
            r.onScheduleFiberRoot = function(a, i, g) {
                return T || (_.delete(i), F !== null && F.set(i, g)), d.apply(this, arguments);
            }, r.onCommitFiberRoot = function(a, i, g, u) {
                var c = C.get(a);
                if (c !== void 0) {
                    O.set(i, c);
                    var v = i.current, R = v.alternate;
                    if (R !== null) {
                        var L = R.memoizedState != null && R.memoizedState.element != null && p.has(i), A = v.memoizedState != null && v.memoizedState.element != null;
                        !L && A ? (p.add(i), _.delete(i)) : L && A || (L && !A ? (p.delete(i), u ? _.add(i) : O.delete(i)) : !L && !A && u && _.add(i));
                    } else p.add(i);
                }
                return l.apply(this, arguments);
            };
        }
        function ne() {
            return !1;
        }
        function te() {
            return p.size;
        }
        function fe() {
            var e, r, n = !1;
            return function(t, l, d, a) {
                if (typeof l == "string") return e || (e = t, r = typeof a == "function"), t != null && (typeof t == "function" || typeof t == "object") && K(t, l, d, a), t;
                !n && r && (n = !0, x(e));
            };
        }
        function ie(e) {
            switch(typeof e){
                case "function":
                    if (e.prototype != null) {
                        if (e.prototype.isReactComponent) return !0;
                        var r = Object.getOwnPropertyNames(e.prototype);
                        if (r.length > 1 || r[0] !== "constructor" || e.prototype.__proto__ !== Object.prototype) return !1;
                    }
                    var n = e.name || e.displayName;
                    return typeof n == "string" && /^[A-Z]/.test(n);
                case "object":
                    if (e != null) switch(M(e, "$$typeof")){
                        case o:
                        case f:
                            return !0;
                        default:
                            return !1;
                    }
                    return !1;
                default:
                    return !1;
            }
        }
        h._getMountedRootCount = te, h.collectCustomHooksForSignature = x, h.createSignatureFunctionForTransform = fe, h.findAffectedHostInstances = ee, h.getFamilyByID = Q, h.getFamilyByType = X, h.hasUnrecoverableErrors = ne, h.injectIntoGlobalHook = re, h.isLikelyComponentType = ie, h.performReactRefresh = J, h.register = P, h.setSignature = K;
    })();
});
var I = z((pe, V)=>{
    "use strict";
    V.exports = N();
});
var w = {};
ce(w, {
    default: ()=>he
});
module.exports = de(w);
var U = G(I());
S(w, G(I()), module.exports);
var he = U.default; /*! Bundled license information:

react-refresh/cjs/react-refresh-runtime.development.js:
  (**
   * @license React
   * react-refresh-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ 

},{}],"90Tj2":[function(require,module,exports) {
/**
 * Parcel module id: gU0Zg
 * Resolved path: src/contents/sites/ripplehire/location-typeahead.js
 * Dependencies:
 *   ../../methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "captureRipplehireLocationCandidates", ()=>W), n.export(r, "commitRipplehireLocationCandidate", ()=>X), n.export(r, "clearRipplehireLocationTemporaryValue", ()=>J);
var o = e("../../methods/cancellation");
let i = "ul.typeahead.dropdown-menu[role=listbox]", a = ".pac-container", l = "#currentLocation[name=currentLocation].pac-target-input", s = ".no-results, [data-no-results=true]", u = ".loading, .typeahead-loading, [data-loading=true]", c = 25, d = 10, f = 3e3, p = 1e3, m = 100, h = new WeakMap, g = new WeakMap;
function b(e1) {
    return e1 instanceof o.CancelledError || e1 instanceof o.SkippedError;
}
function y(e1) {
    return {
        status: e1,
        candidates: []
    };
}
function v(e1) {
    return "string" == typeof e1 ? e1.normalize("NFKC").replace(/\s+/g, " ").trim() : "";
}
function w(e1) {
    return v(e1).toLowerCase();
}
function S(e1) {
    return w(e1).split(",", 1)[0]?.trim() || "";
}
_c = S;
function E(e1, t) {
    let r1 = S(t);
    return !!r1 && e1.some((e1)=>S(e1.text).startsWith(r1));
}
_c1 = E;
function x(e1, t) {
    let r1 = (h.get(e1) || 0) + 1;
    return h.set(e1, r1), g.set(e1, {
        generation: r1,
        searchInput: t,
        ownedValues: new Set
    }), r1;
}
function C(e1) {
    h.set(e1, (h.get(e1) || 0) + 1), g.delete(e1);
}
_c2 = C;
function A(e1, t, r1) {
    let n = g.get(e1);
    n?.generation === t && n.ownedValues.add(r1);
}
_c3 = A;
function k(e1, t, r1) {
    try {
        return h.get(e1) === t && e1.ownerDocument.activeElement === e1 && e1.value === r1;
    } catch  {
        return !1;
    }
}
function T(e1) {
    return e1.ownerDocument?.defaultView || null;
}
_c4 = T;
function F(e1) {
    try {
        if (e1.hidden || e1.getAttribute?.("aria-hidden") === "true") return !1;
        let t = e1.ownerDocument?.defaultView, r1 = t?.getComputedStyle?.(e1);
        if (r1?.display === "none" || r1?.visibility === "hidden" || r1?.visibility === "collapse") return !1;
        if ("function" == typeof e1.getClientRects) return e1.getClientRects().length > 0;
        return !0;
    } catch  {
        return !1;
    }
}
_c5 = F;
function I(e1) {
    try {
        return e1.getAttribute?.("aria-disabled") === "true" || e1.getAttribute?.("disabled") !== null || e1.classList?.contains("disabled") === !0 || e1.matches?.(":disabled") === !0;
    } catch  {
        return !0;
    }
}
_c6 = I;
function j(e1) {
    try {
        return e1.isConnected && F(e1) && !I(e1);
    } catch  {
        return !1;
    }
}
function D(e1) {
    try {
        if (e1.matches(l)) return "pac";
        if (e1.matches("#indiaLocation[name=indiaLocation]")) return "bootstrap";
    } catch  {}
    return null;
}
_c7 = D;
function P(e1, t) {
    let r1 = "pac" === t ? a : i;
    return Array.from(e1.querySelectorAll(r1));
}
_c8 = P;
function _(e1, t) {
    let r1 = new WeakMap;
    try {
        let n = e1.defaultView?.MutationObserver;
        if (!n || !e1.documentElement) return {
            version: ()=>0,
            disconnect: ()=>void 0
        };
        let o = new n((n)=>{
            let o = P(e1, t);
            for (let e1 of n){
                let t = e1.target;
                for (let e1 of o)(e1 === t || e1.contains(t)) && r1.set(e1, (r1.get(e1) || 0) + 1);
            }
        });
        return o.observe(e1.documentElement, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }), {
            version: (e1)=>r1.get(e1) || 0,
            disconnect: ()=>o.disconnect()
        };
    } catch  {
        return {
            version: ()=>0,
            disconnect: ()=>void 0
        };
    }
}
function L(e1, t) {
    if ("pac" === t) return Array.from(e1.querySelectorAll?.(".pac-item") || []);
    let r1 = Array.from(e1.querySelectorAll?.("li") || []);
    if (r1.length > 0) return r1;
    let n = Array.from(e1.querySelectorAll?.("[role=option]") || []);
    return n.length > 0 ? n : Array.from(e1.querySelectorAll?.("a, button") || []);
}
_c9 = L;
function R(e1) {
    try {
        let t = v(e1.querySelector?.(".pac-item-query")?.textContent);
        if (!t) return v(e1.textContent);
        let r1 = [
            t
        ];
        for (let t of Array.from(e1.children || [])){
            if (!t.matches?.("span") || t.matches?.(".pac-icon") || t.matches?.(".pac-item-query")) continue;
            let e1 = v(t.textContent);
            e1 && !r1.includes(e1) && r1.push(e1);
        }
        return r1.join(", ");
    } catch  {
        return "";
    }
}
_c10 = R;
function O(e1) {
    try {
        return e1.querySelector?.("a, button, [role=option]") || e1;
    } catch  {
        return e1;
    }
}
_c11 = O;
function M(e1, t) {
    return e1.matches(t) ? e1 : e1.querySelector(t);
}
_c12 = M;
function N(e1) {
    let t = v(e1);
    return /^(no results?|no matches?)( found| available)?[.!]?$/i.test(t);
}
_c13 = N;
function $(e1, t) {
    let r1 = [];
    for (let n of L(e1, t)){
        let e1 = O(n), o = "string" == typeof n.textContent ? n.textContent : "", i = M(n, s), a = M(n, u), l = !!i && N(i.textContent), c = !!a;
        r1.push({
            element: n,
            clickTarget: e1,
            rawText: o,
            text: "pac" === t ? R(n) : v(o),
            isNoResultMarker: l,
            isLoadingMarker: c,
            eligible: F(n) && F(e1) && !I(n) && !I(e1) && !l && !c
        });
    }
    return r1;
}
function B(e1) {
    return e1.filter((e1)=>e1.eligible && !!e1.text);
}
_c14 = B;
function q(e1, t) {
    let r1 = $(e1, t), n = B(r1), o = Array.from(e1.querySelectorAll(s)), i = Array.from(e1.querySelectorAll(u)), a = o.some((e1)=>F(e1) && N(e1.textContent)), l = e1.getAttribute?.("aria-busy") === "true" || i.some(F);
    return {
        allRows: r1,
        rows: n,
        hasVisibleNoResultMarker: a,
        loading: l,
        fingerprint: JSON.stringify({
            hidden: !F(e1),
            hasVisibleNoResultMarker: a,
            loading: l,
            rows: r1.map((e1)=>[
                    e1.rawText,
                    e1.text,
                    e1.eligible,
                    e1.isNoResultMarker,
                    e1.isLoadingMarker
                ])
        })
    };
}
function U(e1, t) {
    try {
        let r1 = T(e1), n = r1?.HTMLInputElement, o = n ? Object.getOwnPropertyDescriptor(n.prototype, "value")?.set : void 0;
        if ("function" != typeof o) return !1;
        return o.call(e1, t), e1.value === t;
    } catch  {
        return !1;
    }
}
_c15 = U;
function H(e1, t, r1, n) {
    try {
        let o = T(e1), i = o?.[t] || o?.Event;
        return i ? new i(r1, n) : null;
    } catch  {
        return null;
    }
}
_c16 = H;
function Y(e1, t) {
    try {
        if (e1.focus(), e1.ownerDocument.activeElement !== e1) return !1;
        let r1 = H(e1, "KeyboardEvent", "keydown", {
            bubbles: !0,
            key: t.at(-1) || "Unidentified"
        });
        if (r1 && e1.dispatchEvent(r1), !U(e1, t)) return !1;
        let n = H(e1, "InputEvent", "input", {
            bubbles: !0,
            composed: !0,
            data: t,
            inputType: "insertText"
        });
        if (!n) return !1;
        e1.dispatchEvent(n);
        let o = H(e1, "KeyboardEvent", "keyup", {
            bubbles: !0,
            key: t.at(-1) || "Unidentified"
        });
        return o && e1.dispatchEvent(o), e1.ownerDocument.activeElement === e1;
    } catch  {
        return !1;
    }
}
_c17 = Y;
async function z(e1, t) {
    (0, o.checkpoint)();
    let r1 = h.get(e1), n = g.get(e1), i = x(e1, t);
    try {
        let a = e1.ownerDocument;
        if (!a || "string" != typeof t) return {
            status: "failed"
        };
        let l = D(e1);
        if (!l) return {
            status: "failed"
        };
        let s = P(a, l).filter(F), u = new Map(s.map((e1)=>[
                e1,
                q(e1, l).fingerprint
            ])), c = n && n.generation === r1 && n.menu && s.includes(n.menu) && n.menuFingerprint === u.get(n.menu) ? n.menu : null, p = _(a, l);
        try {
            if ((0, o.checkpoint)(), !Y(e1, t) || (A(e1, i, t), (0, o.checkpoint)(), !k(e1, i, t))) return {
                status: "failed"
            };
            let r1 = null, n = "", s = 0, h = 0, b = !1, y = Date.now(), v = y + f, w = v + m;
            for(; Date.now() <= w + d && ((0, o.checkpoint)(), !(!k(e1, i, t) || !b && Date.now() > v));){
                let f = P(a, l).filter(F);
                if (f.length > 1) break;
                if (1 === f.length) {
                    h = 0;
                    let a = f[0], c = q(a, l), d = c.fingerprint, y = p.version(a), v = u.get(a), S = void 0 === v || v !== d || y > 0;
                    if (S) {
                        if (b = !0, (a !== r1 || d !== n) && (r1 = a, n = d, s = Date.now()), Date.now() - s >= m && !c.loading) {
                            if (c.hasVisibleNoResultMarker && c.rows.length > 0) return (0, o.checkpoint)(), {
                                status: "failed"
                            };
                            if (c.rows.length > 0 && E(c.rows, t) && k(e1, i, t)) {
                                (0, o.checkpoint)();
                                let t = g.get(e1);
                                return t?.generation === i && (t.menu = a, t.menuFingerprint = c.fingerprint), {
                                    status: "ready",
                                    menu: a,
                                    rows: c.rows,
                                    allRows: c.allRows,
                                    generation: i
                                };
                            }
                            if (c.hasVisibleNoResultMarker && Date.now() >= w && k(e1, i, t)) return (0, o.checkpoint)(), {
                                status: "no-results"
                            };
                        }
                    } else r1 = null, n = "", s = 0;
                } else {
                    r1 = null, n = "", s = 0;
                    let e1 = "bootstrap" === l && c && p.version(c) > 0 && !F(c);
                    if (e1) {
                        if (b = !0, h ||= Date.now(), Date.now() - h >= m) return (0, o.checkpoint)(), {
                            status: "no-results"
                        };
                    } else h = 0;
                }
                await (0, o.cancellableDelay)(d);
            }
        } finally{
            p.disconnect();
        }
    } catch (e1) {
        if (b(e1)) throw e1;
    }
    return {
        status: "failed"
    };
}
function V(e1, t) {
    try {
        let r1 = g.get(e1), n = D(e1);
        if (!n || !r1?.menu || r1.generation !== h.get(e1) || r1.searchInput !== t || !k(e1, r1.generation, t)) return null;
        let o = P(e1.ownerDocument, n).filter(F);
        if (1 !== o.length || o[0] !== r1.menu) return null;
        let i = q(r1.menu, n);
        if (i.fingerprint !== r1.menuFingerprint || i.loading || i.hasVisibleNoResultMarker || 0 === i.rows.length || !E(i.rows, t)) return null;
        return {
            status: "ready",
            menu: r1.menu,
            rows: i.rows,
            allRows: i.allRows,
            generation: r1.generation
        };
    } catch  {
        return null;
    }
}
_c18 = V;
async function W(e1, t) {
    (0, o.checkpoint)();
    let r1 = await z(e1, t);
    if ((0, o.checkpoint)(), "ready" !== r1.status) return y(r1.status);
    let n = new Set;
    for (let e1 of r1.rows){
        if ((0, o.checkpoint)(), n.has(e1.text)) return y("failed");
        n.add(e1.text);
    }
    return (0, o.checkpoint)(), {
        status: "ready",
        candidates: r1.rows.slice(0, c).map((e1, t)=>({
                candidate_key: `candidate-${t + 1}`,
                value: e1.text,
                text: e1.text
            }))
    };
}
_c19 = W;
function G(e1, t) {
    let r1 = [
        [
            "PointerEvent",
            "pointerdown"
        ],
        [
            "MouseEvent",
            "mousedown"
        ],
        [
            "PointerEvent",
            "pointerup"
        ],
        [
            "MouseEvent",
            "mouseup"
        ],
        [
            "MouseEvent",
            "click"
        ]
    ];
    try {
        for (let [n, i] of r1){
            (0, o.checkpoint)();
            let r1 = H(e1, n, i, {
                bubbles: !0,
                cancelable: !0,
                composed: !0,
                button: 0,
                buttons: i.endsWith("down") ? 1 : 0
            });
            if (!r1) return !1;
            (0, o.checkpoint)(), t.dispatchEvent(r1);
        }
        return !0;
    } catch (e1) {
        if (b(e1)) throw e1;
        return !1;
    }
}
_c20 = G;
function K(e1, t) {
    let r1 = [
        ...Array.from({
            length: t + 1
        }, ()=>({
                key: "ArrowDown",
                code: "ArrowDown",
                keyCode: 40
            })),
        {
            key: "Enter",
            code: "Enter",
            keyCode: 13
        }
    ];
    try {
        for (let { key: t, code: n, keyCode: i } of r1)for (let r1 of [
            "keydown",
            "keypress",
            "keyup"
        ]){
            (0, o.checkpoint)();
            let a = H(e1, "KeyboardEvent", r1, {
                bubbles: !0,
                cancelable: !0,
                composed: !0,
                key: t,
                code: n,
                keyCode: i,
                which: i
            });
            if (!a) return !1;
            try {
                Object.defineProperty(a, "keyCode", {
                    get: ()=>i
                }), Object.defineProperty(a, "which", {
                    get: ()=>i
                });
            } catch  {}
            e1.dispatchEvent(a);
        }
        return !0;
    } catch (e1) {
        if (b(e1)) throw e1;
        return !1;
    }
}
_c21 = K;
async function X(e1, t, r1) {
    (0, o.checkpoint)();
    try {
        if ("string" != typeof t?.text || !t.text || t.value !== t.text) return !1;
        let n = g.get(e1);
        if (n && (n.generation !== h.get(e1) || n.searchInput !== r1 || !k(e1, n.generation, n.searchInput))) return !1;
        let i = V(e1, r1) || await z(e1, r1);
        if ((0, o.checkpoint)(), "ready" !== i.status) return !1;
        let a = i.allRows.filter((e1)=>e1.text === t.text);
        if (1 !== a.length || !a[0].eligible || !k(e1, i.generation, r1) || ((0, o.checkpoint)(), A(e1, i.generation, t.text), !G(e1, a[0].clickTarget))) return !1;
        (0, o.checkpoint)();
        let l = D(e1);
        if (!l) return !1;
        let s = ()=>{
            let r1 = P(e1.ownerDocument, l).filter(F);
            return v(e1.value) === v(t.text) && 0 === r1.length;
        };
        if ("pac" === l && !s()) {
            let t = i.rows.indexOf(a[0]);
            if (t < 0) return !1;
            for (let t of i.rows)A(e1, i.generation, t.text);
            if (!K(e1, t)) return !1;
            (0, o.checkpoint)();
        }
        let u = Date.now() + p;
        for(; Date.now() <= u && ((0, o.checkpoint)(), j(e1) && h.get(e1) === i.generation);){
            if (s()) return (0, o.checkpoint)(), j(e1) && h.get(e1) === i.generation;
            await (0, o.cancellableDelay)(d);
        }
    } catch (e1) {
        if (b(e1)) throw e1;
    }
    return !1;
}
_c22 = X;
async function J(e1, t = "", r1) {
    let n = g.get(e1), o = !n || n.generation === h.get(e1) && n.ownedValues.has(e1.value);
    if (C(e1), r1?.aborted || !o || !U(e1, t) || r1?.aborted) return;
    let i = H(e1, "InputEvent", "input", {
        bubbles: !0,
        composed: !0,
        data: t,
        inputType: "insertReplacementText"
    });
    if (!i || r1?.aborted || (e1.dispatchEvent(i), r1?.aborted)) return;
    let a = H(e1, "Event", "change", {
        bubbles: !0,
        composed: !0
    });
    if (!a || r1?.aborted || (e1.dispatchEvent(a), r1?.aborted)) return;
    let l = H(e1, "KeyboardEvent", "keydown", {
        bubbles: !0,
        key: "Escape"
    });
    if (l && !r1?.aborted && e1.dispatchEvent(l), r1?.aborted) return;
    let s = H(e1, "KeyboardEvent", "keyup", {
        bubbles: !0,
        key: "Escape"
    });
    s && !r1?.aborted && e1.dispatchEvent(s), r1?.aborted || e1.blur();
}
_c23 = J;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");
$RefreshReg$(_c7, "D");
$RefreshReg$(_c8, "P");
$RefreshReg$(_c9, "L");
$RefreshReg$(_c10, "R");
$RefreshReg$(_c11, "O");
$RefreshReg$(_c12, "M");
$RefreshReg$(_c13, "N");
$RefreshReg$(_c14, "B");
$RefreshReg$(_c15, "U");
$RefreshReg$(_c16, "H");
$RefreshReg$(_c17, "Y");
$RefreshReg$(_c18, "V");
$RefreshReg$(_c19, "W");
$RefreshReg$(_c20, "G");
$RefreshReg$(_c21, "K");
$RefreshReg$(_c22, "X");
$RefreshReg$(_c23, "J");

},{}]},["dSAYa","90Tj2"], "90Tj2", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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VUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBVSxDQUFDLEVBQUUsSUFBRSxFQUFFLFlBQVcsT0FBSyxDQUFBLEFBQUMsQ0FBQSxHQUFFLEVBQUUsVUFBUyxLQUFLLEVBQUUsSUFBRSxFQUFFLFlBQVcsRUFBRSxPQUFNLENBQUMsRUFBRSxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBVyxHQUFHLE9BQU0sQ0FBQztRQUFHLENBQUEsR0FBRSxFQUFFLFVBQVM7UUFBSyxJQUFJLElBQUUsRUFBRTtRQUFHLElBQUcsQ0FBQyxHQUFFLE9BQU0sQ0FBQztRQUFFLElBQUksSUFBRTtZQUFLLElBQUksS0FBRSxFQUFFLEdBQUUsZUFBYyxHQUFHLE9BQU87WUFBRyxPQUFPLEVBQUUsR0FBRSxXQUFTLEVBQUUsRUFBRSxTQUFPLE1BQUksR0FBRTtRQUFNO1FBQUUsSUFBRyxVQUFRLEtBQUcsQ0FBQyxLQUFJO1lBQUMsSUFBSSxJQUFFLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxFQUFFO1lBQUUsSUFBRyxJQUFFLEdBQUUsT0FBTSxDQUFDO1lBQUUsS0FBSSxJQUFJLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBRSxFQUFFLFlBQVcsRUFBRTtZQUFNLElBQUcsQ0FBQyxFQUFFLElBQUUsSUFBRyxPQUFNLENBQUM7WUFBRyxDQUFBLEdBQUUsRUFBRSxVQUFTO1FBQUk7UUFBQyxJQUFJLElBQUUsS0FBSyxRQUFNO1FBQUUsTUFBSyxLQUFLLFNBQU8sS0FBSSxDQUFBLEFBQUMsQ0FBQSxHQUFFLEVBQUUsVUFBUyxLQUFLLEVBQUUsT0FBSSxFQUFFLElBQUksUUFBSyxFQUFFLFVBQVMsR0FBSTtZQUFDLElBQUcsS0FBSSxPQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsVUFBUyxLQUFLLEVBQUUsT0FBSSxFQUFFLElBQUksUUFBSyxFQUFFO1lBQVcsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLGdCQUFlLEVBQUc7UUFBRTtJQUFDLEVBQUMsT0FBTSxJQUFFO1FBQUMsSUFBRyxFQUFFLEtBQUcsTUFBTTtJQUFDO0lBQUMsT0FBTSxDQUFDO0FBQUM7T0FBbjhCO0FBQW84QixlQUFlLEVBQUUsRUFBQyxFQUFDLElBQUUsRUFBRSxFQUFDLEVBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxJQUFJLEtBQUcsSUFBRSxDQUFDLEtBQUcsRUFBRSxlQUFhLEVBQUUsSUFBSSxPQUFJLEVBQUUsWUFBWSxJQUFJLEdBQUU7SUFBTyxJQUFHLEVBQUUsS0FBRyxJQUFHLFdBQVMsQ0FBQyxLQUFHLENBQUMsRUFBRSxJQUFFLE1BQUksSUFBRyxTQUFRO0lBQU8sSUFBSSxJQUFFLEVBQUUsSUFBRSxjQUFhLFNBQVE7UUFBQyxTQUFRLENBQUM7UUFBRSxVQUFTLENBQUM7UUFBRSxNQUFLO1FBQUUsV0FBVTtJQUF1QjtJQUFHLElBQUcsQ0FBQyxLQUFHLElBQUcsV0FBVSxDQUFBLEdBQUUsY0FBYyxJQUFHLElBQUcsT0FBTSxHQUFHO0lBQU8sSUFBSSxJQUFFLEVBQUUsSUFBRSxTQUFRLFVBQVM7UUFBQyxTQUFRLENBQUM7UUFBRSxVQUFTLENBQUM7SUFBQztJQUFHLElBQUcsQ0FBQyxLQUFHLElBQUcsV0FBVSxDQUFBLEdBQUUsY0FBYyxJQUFHLElBQUcsT0FBTSxHQUFHO0lBQU8sSUFBSSxJQUFFLEVBQUUsSUFBRSxpQkFBZ0IsV0FBVTtRQUFDLFNBQVEsQ0FBQztRQUFFLEtBQUk7SUFBUTtJQUFHLElBQUcsS0FBRyxDQUFDLElBQUcsV0FBUyxHQUFFLGNBQWMsSUFBRyxJQUFHLFNBQVE7SUFBTyxJQUFJLElBQUUsRUFBRSxJQUFFLGlCQUFnQixTQUFRO1FBQUMsU0FBUSxDQUFDO1FBQUUsS0FBSTtJQUFRO0lBQUcsS0FBRyxDQUFDLElBQUcsV0FBUyxHQUFFLGNBQWMsSUFBRyxJQUFHLFdBQVMsR0FBRTtBQUFNO09BQTluQiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtZjI4MmM5ODk3YWU1NGRkOS5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9yaXBwbGVoaXJlL2xvY2F0aW9uLXR5cGVhaGVhZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxyaXBwbGVoaXJlXFxcXGxvY2F0aW9uLXR5cGVhaGVhZC5qc1wiLFwiYnVuZGxlSWRcIjpcImQ2MGY4OGRiMTNiMzQ5MjdcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBnVTBaZ1xyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvcmlwcGxlaGlyZS9sb2NhdGlvbi10eXBlYWhlYWQuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuLi8uLi9tZXRob2RzL2NhbmNlbGxhdGlvbiAtPiBsdUpmcyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvbi5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiY2FwdHVyZVJpcHBsZWhpcmVMb2NhdGlvbkNhbmRpZGF0ZXNcIiwoKT0+Vyksbi5leHBvcnQocixcImNvbW1pdFJpcHBsZWhpcmVMb2NhdGlvbkNhbmRpZGF0ZVwiLCgpPT5YKSxuLmV4cG9ydChyLFwiY2xlYXJSaXBwbGVoaXJlTG9jYXRpb25UZW1wb3JhcnlWYWx1ZVwiLCgpPT5KKTt2YXIgbz1lKFwiLi4vLi4vbWV0aG9kcy9jYW5jZWxsYXRpb25cIik7bGV0IGk9XCJ1bC50eXBlYWhlYWQuZHJvcGRvd24tbWVudVtyb2xlPWxpc3Rib3hdXCIsYT1cIi5wYWMtY29udGFpbmVyXCIsbD1cIiNjdXJyZW50TG9jYXRpb25bbmFtZT1jdXJyZW50TG9jYXRpb25dLnBhYy10YXJnZXQtaW5wdXRcIixzPVwiLm5vLXJlc3VsdHMsIFtkYXRhLW5vLXJlc3VsdHM9dHJ1ZV1cIix1PVwiLmxvYWRpbmcsIC50eXBlYWhlYWQtbG9hZGluZywgW2RhdGEtbG9hZGluZz10cnVlXVwiLGM9MjUsZD0xMCxmPTNlMyxwPTFlMyxtPTEwMCxoPW5ldyBXZWFrTWFwLGc9bmV3IFdlYWtNYXA7ZnVuY3Rpb24gYihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIG8uQ2FuY2VsbGVkRXJyb3J8fGUgaW5zdGFuY2VvZiBvLlNraXBwZWRFcnJvcn1mdW5jdGlvbiB5KGUpe3JldHVybntzdGF0dXM6ZSxjYW5kaWRhdGVzOltdfX1mdW5jdGlvbiB2KGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP2Uubm9ybWFsaXplKFwiTkZLQ1wiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKTpcIlwifWZ1bmN0aW9uIHcoZSl7cmV0dXJuIHYoZSkudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBTKGUpe3JldHVybiB3KGUpLnNwbGl0KFwiLFwiLDEpWzBdPy50cmltKCl8fFwiXCJ9ZnVuY3Rpb24gRShlLHQpe2xldCByPVModCk7cmV0dXJuISFyJiZlLnNvbWUoZT0+UyhlLnRleHQpLnN0YXJ0c1dpdGgocikpfWZ1bmN0aW9uIHgoZSx0KXtsZXQgcj0oaC5nZXQoZSl8fDApKzE7cmV0dXJuIGguc2V0KGUsciksZy5zZXQoZSx7Z2VuZXJhdGlvbjpyLHNlYXJjaElucHV0OnQsb3duZWRWYWx1ZXM6bmV3IFNldH0pLHJ9ZnVuY3Rpb24gQyhlKXtoLnNldChlLChoLmdldChlKXx8MCkrMSksZy5kZWxldGUoZSl9ZnVuY3Rpb24gQShlLHQscil7bGV0IG49Zy5nZXQoZSk7bj8uZ2VuZXJhdGlvbj09PXQmJm4ub3duZWRWYWx1ZXMuYWRkKHIpfWZ1bmN0aW9uIGsoZSx0LHIpe3RyeXtyZXR1cm4gaC5nZXQoZSk9PT10JiZlLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudD09PWUmJmUudmFsdWU9PT1yfWNhdGNoe3JldHVybiExfX1mdW5jdGlvbiBUKGUpe3JldHVybiBlLm93bmVyRG9jdW1lbnQ/LmRlZmF1bHRWaWV3fHxudWxsfWZ1bmN0aW9uIEYoZSl7dHJ5e2lmKGUuaGlkZGVufHxlLmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1oaWRkZW5cIik9PT1cInRydWVcIilyZXR1cm4hMTtsZXQgdD1lLm93bmVyRG9jdW1lbnQ/LmRlZmF1bHRWaWV3LHI9dD8uZ2V0Q29tcHV0ZWRTdHlsZT8uKGUpO2lmKHI/LmRpc3BsYXk9PT1cIm5vbmVcInx8cj8udmlzaWJpbGl0eT09PVwiaGlkZGVuXCJ8fHI/LnZpc2liaWxpdHk9PT1cImNvbGxhcHNlXCIpcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZS5nZXRDbGllbnRSZWN0cylyZXR1cm4gZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD4wO3JldHVybiEwfWNhdGNoe3JldHVybiExfX1mdW5jdGlvbiBJKGUpe3RyeXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGU/LihcImFyaWEtZGlzYWJsZWRcIik9PT1cInRydWVcInx8ZS5nZXRBdHRyaWJ1dGU/LihcImRpc2FibGVkXCIpIT09bnVsbHx8ZS5jbGFzc0xpc3Q/LmNvbnRhaW5zKFwiZGlzYWJsZWRcIik9PT0hMHx8ZS5tYXRjaGVzPy4oXCI6ZGlzYWJsZWRcIik9PT0hMH1jYXRjaHtyZXR1cm4hMH19ZnVuY3Rpb24gaihlKXt0cnl7cmV0dXJuIGUuaXNDb25uZWN0ZWQmJkYoZSkmJiFJKGUpfWNhdGNoe3JldHVybiExfX1mdW5jdGlvbiBEKGUpe3RyeXtpZihlLm1hdGNoZXMobCkpcmV0dXJuXCJwYWNcIjtpZihlLm1hdGNoZXMoXCIjaW5kaWFMb2NhdGlvbltuYW1lPWluZGlhTG9jYXRpb25dXCIpKXJldHVyblwiYm9vdHN0cmFwXCJ9Y2F0Y2h7fXJldHVybiBudWxsfWZ1bmN0aW9uIFAoZSx0KXtsZXQgcj1cInBhY1wiPT09dD9hOmk7cmV0dXJuIEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKHIpKX1mdW5jdGlvbiBfKGUsdCl7bGV0IHI9bmV3IFdlYWtNYXA7dHJ5e2xldCBuPWUuZGVmYXVsdFZpZXc/Lk11dGF0aW9uT2JzZXJ2ZXI7aWYoIW58fCFlLmRvY3VtZW50RWxlbWVudClyZXR1cm57dmVyc2lvbjooKT0+MCxkaXNjb25uZWN0OigpPT52b2lkIDB9O2xldCBvPW5ldyBuKG49PntsZXQgbz1QKGUsdCk7Zm9yKGxldCBlIG9mIG4pe2xldCB0PWUudGFyZ2V0O2ZvcihsZXQgZSBvZiBvKShlPT09dHx8ZS5jb250YWlucyh0KSkmJnIuc2V0KGUsKHIuZ2V0KGUpfHwwKSsxKX19KTtyZXR1cm4gby5vYnNlcnZlKGUuZG9jdW1lbnRFbGVtZW50LHthdHRyaWJ1dGVzOiEwLGNoaWxkTGlzdDohMCxjaGFyYWN0ZXJEYXRhOiEwLHN1YnRyZWU6ITB9KSx7dmVyc2lvbjplPT5yLmdldChlKXx8MCxkaXNjb25uZWN0OigpPT5vLmRpc2Nvbm5lY3QoKX19Y2F0Y2h7cmV0dXJue3ZlcnNpb246KCk9PjAsZGlzY29ubmVjdDooKT0+dm9pZCAwfX19ZnVuY3Rpb24gTChlLHQpe2lmKFwicGFjXCI9PT10KXJldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbD8uKFwiLnBhYy1pdGVtXCIpfHxbXSk7bGV0IHI9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGw/LihcImxpXCIpfHxbXSk7aWYoci5sZW5ndGg+MClyZXR1cm4gcjtsZXQgbj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbD8uKFwiW3JvbGU9b3B0aW9uXVwiKXx8W10pO3JldHVybiBuLmxlbmd0aD4wP246QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGw/LihcImEsIGJ1dHRvblwiKXx8W10pfWZ1bmN0aW9uIFIoZSl7dHJ5e2xldCB0PXYoZS5xdWVyeVNlbGVjdG9yPy4oXCIucGFjLWl0ZW0tcXVlcnlcIik/LnRleHRDb250ZW50KTtpZighdClyZXR1cm4gdihlLnRleHRDb250ZW50KTtsZXQgcj1bdF07Zm9yKGxldCB0IG9mIEFycmF5LmZyb20oZS5jaGlsZHJlbnx8W10pKXtpZighdC5tYXRjaGVzPy4oXCJzcGFuXCIpfHx0Lm1hdGNoZXM/LihcIi5wYWMtaWNvblwiKXx8dC5tYXRjaGVzPy4oXCIucGFjLWl0ZW0tcXVlcnlcIikpY29udGludWU7bGV0IGU9dih0LnRleHRDb250ZW50KTtlJiYhci5pbmNsdWRlcyhlKSYmci5wdXNoKGUpfXJldHVybiByLmpvaW4oXCIsIFwiKX1jYXRjaHtyZXR1cm5cIlwifX1mdW5jdGlvbiBPKGUpe3RyeXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yPy4oXCJhLCBidXR0b24sIFtyb2xlPW9wdGlvbl1cIil8fGV9Y2F0Y2h7cmV0dXJuIGV9fWZ1bmN0aW9uIE0oZSx0KXtyZXR1cm4gZS5tYXRjaGVzKHQpP2U6ZS5xdWVyeVNlbGVjdG9yKHQpfWZ1bmN0aW9uIE4oZSl7bGV0IHQ9dihlKTtyZXR1cm4vXihubyByZXN1bHRzP3xubyBtYXRjaGVzPykoIGZvdW5kfCBhdmFpbGFibGUpP1suIV0/JC9pLnRlc3QodCl9ZnVuY3Rpb24gJChlLHQpe2xldCByPVtdO2ZvcihsZXQgbiBvZiBMKGUsdCkpe2xldCBlPU8obiksbz1cInN0cmluZ1wiPT10eXBlb2Ygbi50ZXh0Q29udGVudD9uLnRleHRDb250ZW50OlwiXCIsaT1NKG4scyksYT1NKG4sdSksbD0hIWkmJk4oaS50ZXh0Q29udGVudCksYz0hIWE7ci5wdXNoKHtlbGVtZW50Om4sY2xpY2tUYXJnZXQ6ZSxyYXdUZXh0Om8sdGV4dDpcInBhY1wiPT09dD9SKG4pOnYobyksaXNOb1Jlc3VsdE1hcmtlcjpsLGlzTG9hZGluZ01hcmtlcjpjLGVsaWdpYmxlOkYobikmJkYoZSkmJiFJKG4pJiYhSShlKSYmIWwmJiFjfSl9cmV0dXJuIHJ9ZnVuY3Rpb24gQihlKXtyZXR1cm4gZS5maWx0ZXIoZT0+ZS5lbGlnaWJsZSYmISFlLnRleHQpfWZ1bmN0aW9uIHEoZSx0KXtsZXQgcj0kKGUsdCksbj1CKHIpLG89QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwocykpLGk9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwodSkpLGE9by5zb21lKGU9PkYoZSkmJk4oZS50ZXh0Q29udGVudCkpLGw9ZS5nZXRBdHRyaWJ1dGU/LihcImFyaWEtYnVzeVwiKT09PVwidHJ1ZVwifHxpLnNvbWUoRik7cmV0dXJue2FsbFJvd3M6cixyb3dzOm4saGFzVmlzaWJsZU5vUmVzdWx0TWFya2VyOmEsbG9hZGluZzpsLGZpbmdlcnByaW50OkpTT04uc3RyaW5naWZ5KHtoaWRkZW46IUYoZSksaGFzVmlzaWJsZU5vUmVzdWx0TWFya2VyOmEsbG9hZGluZzpsLHJvd3M6ci5tYXAoZT0+W2UucmF3VGV4dCxlLnRleHQsZS5lbGlnaWJsZSxlLmlzTm9SZXN1bHRNYXJrZXIsZS5pc0xvYWRpbmdNYXJrZXJdKX0pfX1mdW5jdGlvbiBVKGUsdCl7dHJ5e2xldCByPVQoZSksbj1yPy5IVE1MSW5wdXRFbGVtZW50LG89bj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4ucHJvdG90eXBlLFwidmFsdWVcIik/LnNldDp2b2lkIDA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgbylyZXR1cm4hMTtyZXR1cm4gby5jYWxsKGUsdCksZS52YWx1ZT09PXR9Y2F0Y2h7cmV0dXJuITF9fWZ1bmN0aW9uIEgoZSx0LHIsbil7dHJ5e2xldCBvPVQoZSksaT1vPy5bdF18fG8/LkV2ZW50O3JldHVybiBpP25ldyBpKHIsbik6bnVsbH1jYXRjaHtyZXR1cm4gbnVsbH19ZnVuY3Rpb24gWShlLHQpe3RyeXtpZihlLmZvY3VzKCksZS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQhPT1lKXJldHVybiExO2xldCByPUgoZSxcIktleWJvYXJkRXZlbnRcIixcImtleWRvd25cIix7YnViYmxlczohMCxrZXk6dC5hdCgtMSl8fFwiVW5pZGVudGlmaWVkXCJ9KTtpZihyJiZlLmRpc3BhdGNoRXZlbnQociksIVUoZSx0KSlyZXR1cm4hMTtsZXQgbj1IKGUsXCJJbnB1dEV2ZW50XCIsXCJpbnB1dFwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwLGRhdGE6dCxpbnB1dFR5cGU6XCJpbnNlcnRUZXh0XCJ9KTtpZighbilyZXR1cm4hMTtlLmRpc3BhdGNoRXZlbnQobik7bGV0IG89SChlLFwiS2V5Ym9hcmRFdmVudFwiLFwia2V5dXBcIix7YnViYmxlczohMCxrZXk6dC5hdCgtMSl8fFwiVW5pZGVudGlmaWVkXCJ9KTtyZXR1cm4gbyYmZS5kaXNwYXRjaEV2ZW50KG8pLGUub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50PT09ZX1jYXRjaHtyZXR1cm4hMX19YXN5bmMgZnVuY3Rpb24geihlLHQpeygwLG8uY2hlY2twb2ludCkoKTtsZXQgcj1oLmdldChlKSxuPWcuZ2V0KGUpLGk9eChlLHQpO3RyeXtsZXQgYT1lLm93bmVyRG9jdW1lbnQ7aWYoIWF8fFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybntzdGF0dXM6XCJmYWlsZWRcIn07bGV0IGw9RChlKTtpZighbClyZXR1cm57c3RhdHVzOlwiZmFpbGVkXCJ9O2xldCBzPVAoYSxsKS5maWx0ZXIoRiksdT1uZXcgTWFwKHMubWFwKGU9PltlLHEoZSxsKS5maW5nZXJwcmludF0pKSxjPW4mJm4uZ2VuZXJhdGlvbj09PXImJm4ubWVudSYmcy5pbmNsdWRlcyhuLm1lbnUpJiZuLm1lbnVGaW5nZXJwcmludD09PXUuZ2V0KG4ubWVudSk/bi5tZW51Om51bGwscD1fKGEsbCk7dHJ5e2lmKCgwLG8uY2hlY2twb2ludCkoKSwhWShlLHQpfHwoQShlLGksdCksKDAsby5jaGVja3BvaW50KSgpLCFrKGUsaSx0KSkpcmV0dXJue3N0YXR1czpcImZhaWxlZFwifTtsZXQgcj1udWxsLG49XCJcIixzPTAsaD0wLGI9ITEseT1EYXRlLm5vdygpLHY9eStmLHc9dittO2Zvcig7RGF0ZS5ub3coKTw9dytkJiYoKDAsby5jaGVja3BvaW50KSgpLCEoIWsoZSxpLHQpfHwhYiYmRGF0ZS5ub3coKT52KSk7KXtsZXQgZj1QKGEsbCkuZmlsdGVyKEYpO2lmKGYubGVuZ3RoPjEpYnJlYWs7aWYoMT09PWYubGVuZ3RoKXtoPTA7bGV0IGE9ZlswXSxjPXEoYSxsKSxkPWMuZmluZ2VycHJpbnQseT1wLnZlcnNpb24oYSksdj11LmdldChhKSxTPXZvaWQgMD09PXZ8fHYhPT1kfHx5PjA7aWYoUyl7aWYoYj0hMCwoYSE9PXJ8fGQhPT1uKSYmKHI9YSxuPWQscz1EYXRlLm5vdygpKSxEYXRlLm5vdygpLXM+PW0mJiFjLmxvYWRpbmcpe2lmKGMuaGFzVmlzaWJsZU5vUmVzdWx0TWFya2VyJiZjLnJvd3MubGVuZ3RoPjApcmV0dXJuKDAsby5jaGVja3BvaW50KSgpLHtzdGF0dXM6XCJmYWlsZWRcIn07aWYoYy5yb3dzLmxlbmd0aD4wJiZFKGMucm93cyx0KSYmayhlLGksdCkpeygwLG8uY2hlY2twb2ludCkoKTtsZXQgdD1nLmdldChlKTtyZXR1cm4gdD8uZ2VuZXJhdGlvbj09PWkmJih0Lm1lbnU9YSx0Lm1lbnVGaW5nZXJwcmludD1jLmZpbmdlcnByaW50KSx7c3RhdHVzOlwicmVhZHlcIixtZW51OmEscm93czpjLnJvd3MsYWxsUm93czpjLmFsbFJvd3MsZ2VuZXJhdGlvbjppfX1pZihjLmhhc1Zpc2libGVOb1Jlc3VsdE1hcmtlciYmRGF0ZS5ub3coKT49dyYmayhlLGksdCkpcmV0dXJuKDAsby5jaGVja3BvaW50KSgpLHtzdGF0dXM6XCJuby1yZXN1bHRzXCJ9fX1lbHNlIHI9bnVsbCxuPVwiXCIscz0wfWVsc2V7cj1udWxsLG49XCJcIixzPTA7bGV0IGU9XCJib290c3RyYXBcIj09PWwmJmMmJnAudmVyc2lvbihjKT4wJiYhRihjKTtpZihlKXtpZihiPSEwLGh8fD1EYXRlLm5vdygpLERhdGUubm93KCktaD49bSlyZXR1cm4oMCxvLmNoZWNrcG9pbnQpKCkse3N0YXR1czpcIm5vLXJlc3VsdHNcIn19ZWxzZSBoPTB9YXdhaXQgKDAsby5jYW5jZWxsYWJsZURlbGF5KShkKX19ZmluYWxseXtwLmRpc2Nvbm5lY3QoKX19Y2F0Y2goZSl7aWYoYihlKSl0aHJvdyBlfXJldHVybntzdGF0dXM6XCJmYWlsZWRcIn19ZnVuY3Rpb24gVihlLHQpe3RyeXtsZXQgcj1nLmdldChlKSxuPUQoZSk7aWYoIW58fCFyPy5tZW51fHxyLmdlbmVyYXRpb24hPT1oLmdldChlKXx8ci5zZWFyY2hJbnB1dCE9PXR8fCFrKGUsci5nZW5lcmF0aW9uLHQpKXJldHVybiBudWxsO2xldCBvPVAoZS5vd25lckRvY3VtZW50LG4pLmZpbHRlcihGKTtpZigxIT09by5sZW5ndGh8fG9bMF0hPT1yLm1lbnUpcmV0dXJuIG51bGw7bGV0IGk9cShyLm1lbnUsbik7aWYoaS5maW5nZXJwcmludCE9PXIubWVudUZpbmdlcnByaW50fHxpLmxvYWRpbmd8fGkuaGFzVmlzaWJsZU5vUmVzdWx0TWFya2VyfHwwPT09aS5yb3dzLmxlbmd0aHx8IUUoaS5yb3dzLHQpKXJldHVybiBudWxsO3JldHVybntzdGF0dXM6XCJyZWFkeVwiLG1lbnU6ci5tZW51LHJvd3M6aS5yb3dzLGFsbFJvd3M6aS5hbGxSb3dzLGdlbmVyYXRpb246ci5nZW5lcmF0aW9ufX1jYXRjaHtyZXR1cm4gbnVsbH19YXN5bmMgZnVuY3Rpb24gVyhlLHQpeygwLG8uY2hlY2twb2ludCkoKTtsZXQgcj1hd2FpdCB6KGUsdCk7aWYoKDAsby5jaGVja3BvaW50KSgpLFwicmVhZHlcIiE9PXIuc3RhdHVzKXJldHVybiB5KHIuc3RhdHVzKTtsZXQgbj1uZXcgU2V0O2ZvcihsZXQgZSBvZiByLnJvd3Mpe2lmKCgwLG8uY2hlY2twb2ludCkoKSxuLmhhcyhlLnRleHQpKXJldHVybiB5KFwiZmFpbGVkXCIpO24uYWRkKGUudGV4dCl9cmV0dXJuKDAsby5jaGVja3BvaW50KSgpLHtzdGF0dXM6XCJyZWFkeVwiLGNhbmRpZGF0ZXM6ci5yb3dzLnNsaWNlKDAsYykubWFwKChlLHQpPT4oe2NhbmRpZGF0ZV9rZXk6YGNhbmRpZGF0ZS0ke3QrMX1gLHZhbHVlOmUudGV4dCx0ZXh0OmUudGV4dH0pKX19ZnVuY3Rpb24gRyhlLHQpe2xldCByPVtbXCJQb2ludGVyRXZlbnRcIixcInBvaW50ZXJkb3duXCJdLFtcIk1vdXNlRXZlbnRcIixcIm1vdXNlZG93blwiXSxbXCJQb2ludGVyRXZlbnRcIixcInBvaW50ZXJ1cFwiXSxbXCJNb3VzZUV2ZW50XCIsXCJtb3VzZXVwXCJdLFtcIk1vdXNlRXZlbnRcIixcImNsaWNrXCJdXTt0cnl7Zm9yKGxldFtuLGldb2Ygcil7KDAsby5jaGVja3BvaW50KSgpO2xldCByPUgoZSxuLGkse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjb21wb3NlZDohMCxidXR0b246MCxidXR0b25zOmkuZW5kc1dpdGgoXCJkb3duXCIpPzE6MH0pO2lmKCFyKXJldHVybiExOygwLG8uY2hlY2twb2ludCkoKSx0LmRpc3BhdGNoRXZlbnQocil9cmV0dXJuITB9Y2F0Y2goZSl7aWYoYihlKSl0aHJvdyBlO3JldHVybiExfX1mdW5jdGlvbiBLKGUsdCl7bGV0IHI9Wy4uLkFycmF5LmZyb20oe2xlbmd0aDp0KzF9LCgpPT4oe2tleTpcIkFycm93RG93blwiLGNvZGU6XCJBcnJvd0Rvd25cIixrZXlDb2RlOjQwfSkpLHtrZXk6XCJFbnRlclwiLGNvZGU6XCJFbnRlclwiLGtleUNvZGU6MTN9XTt0cnl7Zm9yKGxldHtrZXk6dCxjb2RlOm4sa2V5Q29kZTppfW9mIHIpZm9yKGxldCByIG9mW1wia2V5ZG93blwiLFwia2V5cHJlc3NcIixcImtleXVwXCJdKXsoMCxvLmNoZWNrcG9pbnQpKCk7bGV0IGE9SChlLFwiS2V5Ym9hcmRFdmVudFwiLHIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjb21wb3NlZDohMCxrZXk6dCxjb2RlOm4sa2V5Q29kZTppLHdoaWNoOml9KTtpZighYSlyZXR1cm4hMTt0cnl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJrZXlDb2RlXCIse2dldDooKT0+aX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwid2hpY2hcIix7Z2V0OigpPT5pfSl9Y2F0Y2h7fWUuZGlzcGF0Y2hFdmVudChhKX1yZXR1cm4hMH1jYXRjaChlKXtpZihiKGUpKXRocm93IGU7cmV0dXJuITF9fWFzeW5jIGZ1bmN0aW9uIFgoZSx0LHIpeygwLG8uY2hlY2twb2ludCkoKTt0cnl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQ/LnRleHR8fCF0LnRleHR8fHQudmFsdWUhPT10LnRleHQpcmV0dXJuITE7bGV0IG49Zy5nZXQoZSk7aWYobiYmKG4uZ2VuZXJhdGlvbiE9PWguZ2V0KGUpfHxuLnNlYXJjaElucHV0IT09cnx8IWsoZSxuLmdlbmVyYXRpb24sbi5zZWFyY2hJbnB1dCkpKXJldHVybiExO2xldCBpPVYoZSxyKXx8YXdhaXQgeihlLHIpO2lmKCgwLG8uY2hlY2twb2ludCkoKSxcInJlYWR5XCIhPT1pLnN0YXR1cylyZXR1cm4hMTtsZXQgYT1pLmFsbFJvd3MuZmlsdGVyKGU9PmUudGV4dD09PXQudGV4dCk7aWYoMSE9PWEubGVuZ3RofHwhYVswXS5lbGlnaWJsZXx8IWsoZSxpLmdlbmVyYXRpb24scil8fCgoMCxvLmNoZWNrcG9pbnQpKCksQShlLGkuZ2VuZXJhdGlvbix0LnRleHQpLCFHKGUsYVswXS5jbGlja1RhcmdldCkpKXJldHVybiExOygwLG8uY2hlY2twb2ludCkoKTtsZXQgbD1EKGUpO2lmKCFsKXJldHVybiExO2xldCBzPSgpPT57bGV0IHI9UChlLm93bmVyRG9jdW1lbnQsbCkuZmlsdGVyKEYpO3JldHVybiB2KGUudmFsdWUpPT09dih0LnRleHQpJiYwPT09ci5sZW5ndGh9O2lmKFwicGFjXCI9PT1sJiYhcygpKXtsZXQgdD1pLnJvd3MuaW5kZXhPZihhWzBdKTtpZih0PDApcmV0dXJuITE7Zm9yKGxldCB0IG9mIGkucm93cylBKGUsaS5nZW5lcmF0aW9uLHQudGV4dCk7aWYoIUsoZSx0KSlyZXR1cm4hMTsoMCxvLmNoZWNrcG9pbnQpKCl9bGV0IHU9RGF0ZS5ub3coKStwO2Zvcig7RGF0ZS5ub3coKTw9dSYmKCgwLG8uY2hlY2twb2ludCkoKSxqKGUpJiZoLmdldChlKT09PWkuZ2VuZXJhdGlvbik7KXtpZihzKCkpcmV0dXJuKDAsby5jaGVja3BvaW50KSgpLGooZSkmJmguZ2V0KGUpPT09aS5nZW5lcmF0aW9uO2F3YWl0ICgwLG8uY2FuY2VsbGFibGVEZWxheSkoZCl9fWNhdGNoKGUpe2lmKGIoZSkpdGhyb3cgZX1yZXR1cm4hMX1hc3luYyBmdW5jdGlvbiBKKGUsdD1cIlwiLHIpe2xldCBuPWcuZ2V0KGUpLG89IW58fG4uZ2VuZXJhdGlvbj09PWguZ2V0KGUpJiZuLm93bmVkVmFsdWVzLmhhcyhlLnZhbHVlKTtpZihDKGUpLHI/LmFib3J0ZWR8fCFvfHwhVShlLHQpfHxyPy5hYm9ydGVkKXJldHVybjtsZXQgaT1IKGUsXCJJbnB1dEV2ZW50XCIsXCJpbnB1dFwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwLGRhdGE6dCxpbnB1dFR5cGU6XCJpbnNlcnRSZXBsYWNlbWVudFRleHRcIn0pO2lmKCFpfHxyPy5hYm9ydGVkfHwoZS5kaXNwYXRjaEV2ZW50KGkpLHI/LmFib3J0ZWQpKXJldHVybjtsZXQgYT1IKGUsXCJFdmVudFwiLFwiY2hhbmdlXCIse2J1YmJsZXM6ITAsY29tcG9zZWQ6ITB9KTtpZighYXx8cj8uYWJvcnRlZHx8KGUuZGlzcGF0Y2hFdmVudChhKSxyPy5hYm9ydGVkKSlyZXR1cm47bGV0IGw9SChlLFwiS2V5Ym9hcmRFdmVudFwiLFwia2V5ZG93blwiLHtidWJibGVzOiEwLGtleTpcIkVzY2FwZVwifSk7aWYobCYmIXI/LmFib3J0ZWQmJmUuZGlzcGF0Y2hFdmVudChsKSxyPy5hYm9ydGVkKXJldHVybjtsZXQgcz1IKGUsXCJLZXlib2FyZEV2ZW50XCIsXCJrZXl1cFwiLHtidWJibGVzOiEwLGtleTpcIkVzY2FwZVwifSk7cyYmIXI/LmFib3J0ZWQmJmUuZGlzcGF0Y2hFdmVudChzKSxyPy5hYm9ydGVkfHxlLmJsdXIoKX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImxvY2F0aW9uLXR5cGVhaGVhZC4xM2IzNDkyNy5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);