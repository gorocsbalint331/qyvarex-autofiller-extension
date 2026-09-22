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
})({"fW5F7":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\ashby\\rules.js",
    "bundleId": "eae7d04b726f1d17",
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
var j = z(require("5891b1fbc71ef01d"));
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

},{"5891b1fbc71ef01d":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"a0eE1":[function(require,module,exports) {
/**
 * Parcel module id: 5iMv1
 * Resolved path: src/contents/sites/ashby/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/ashby/field-metadata -> dCLIj  =>  src/contents/sites/ashby/field-metadata.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "extractRules", ()=>s), n.export(r, "getAshbyEducationHistoryContainer", ()=>p), n.export(r, "getAshbyEducationRows", ()=>m), n.export(r, "getEducationRules", ()=>h), n.export(r, "getAshbyEducationSnapshot", ()=>g), n.export(r, "getSelectedSelectValue", ()=>T), n.export(r, "getFormSnapshot", ()=>R);
var o = e("~core/enums"), i = e("~core/xpath"), a = e("~contents/sites/ashby/field-metadata"), l = e("~utils/delay");
async function s() {
    let e1 = [];
    if ((0, i.getFirstOrderedNodeSafe)('//div[.//h2[contains(@class, "ashby-application-form-section-header-title")]]')) {
        let t = (0, i.getOrderedNodesSafe)('//div[contains(@class, "ashby-application-form-section-container")]');
        for (let r1 of t){
            let t = (0, i.getOrderedNodesSafe)('.//h2[contains(@class, "ashby-application-form-section-header-title")]/text()', r1);
            if (t) {
                t[0]?.textContent?.trim();
                let n = (0, i.getOrderedNodesSafe)('.//div[contains(@class, "ashby-application-form-field-entry")] | .//fieldset[contains(@class, "_container_")]', r1);
                for (let t of n){
                    let r1 = await f(t);
                    r1 && e1.push(r1);
                }
            }
        }
    } else {
        let t = (0, i.getOrderedNodesSafe)('//div[contains(@class, "ashby-application-form-field-entry")] | .//fieldset[contains(@class, "_container_")]');
        for (let r1 of t){
            let t = await f(r1);
            t && e1.push(t);
        }
    }
    let t = u();
    return t && (console.info("[Ashby][CommunicationConsent] extracted", {
        optionCount: t.options.length,
        required: t.required
    }), e1.push(t)), e1.push(...h()), e1;
}
function u() {
    if ("undefined" == typeof document || "function" != typeof document.querySelector) return null;
    let e1 = document.querySelector(".ashby-application-form-texting-consent-description");
    if (!e1) return null;
    let t = Array.from(e1.querySelectorAll('input[type="radio"][name="communicationConsent"]'));
    if (t.length < 2) return console.warn("[Ashby][CommunicationConsent] extraction skipped", {
        reason: "radio-options-missing",
        optionCount: t.length
    }), null;
    let r1 = e1.querySelector("p"), n = d(r1?.textContent), i = t.map(c);
    if (!n || i.some((e1)=>!e1)) return console.warn("[Ashby][CommunicationConsent] extraction skipped", {
        reason: n ? "option-label-missing" : "question-label-missing",
        optionCount: t.length
    }), null;
    let a = t.some((e1)=>e1.required || "true" === e1.getAttribute("aria-required"));
    return {
        type: o.FIELD_TYPE.SELECT,
        label: n,
        required: a,
        options: i,
        $input: t[0],
        $label: r1 ?? e1,
        $radioParent: e1
    };
}
function c(e1) {
    return d(e1.closest("label")?.textContent);
}
function d(e1) {
    return String(e1 ?? "").replace(/\s+/g, " ").trim();
}
async function f(e1) {
    let t = (0, i.getFirstOrderedNodeSafe)('.//label[contains(@class, "ashby-application-form-question-title")]', e1);
    t || (t = (0, i.getFirstOrderedNodeSafe)('.//label[contains(@class, "_label_")]', e1));
    let r1 = t ? t.textContent.trim().split("\n")[0].replace("\u2731", "") : "";
    if (_(r1)) return null;
    let n = (0, i.getFirstOrderedNodeSafe)(".//label/@class", e1), l = !1;
    n && n.textContent.includes("required") && (l = !0);
    let s = (0, i.getFirstOrderedNodeSafe)('.//input[@role="combobox"]', e1);
    if (s) {
        await (0, a.annotateAshbyFieldType)(s);
        let n = await M(s, e1, r1), i = z(r1), u = Y(r1), c = i && n.length > 0 ? V(n) : "", d = i || u ? [] : n;
        return {
            type: o.FIELD_TYPE.ASHBY_SEARCH,
            label: r1,
            required: l,
            options: d,
            ...c ? {
                description: c
            } : {},
            $input: s,
            $label: t
        };
    }
    let u = (0, i.getFirstOrderedNodeSafe)('.//input[@type="text"]', e1) || (0, i.getFirstOrderedNodeSafe)('.//input[@type="email"]', e1) || (0, i.getFirstOrderedNodeSafe)('.//input[@type="tel"]', e1) || (0, i.getFirstOrderedNodeSafe)('.//input[@type="number"]', e1) || (0, i.getFirstOrderedNodeSafe)('.//input[@type="url"]', e1) || (0, i.getFirstOrderedNodeSafe)(".//textarea", e1);
    if (u) {
        let e1 = A(u);
        return {
            type: o.FIELD_TYPE.TEXT,
            label: r1,
            required: l,
            ...e1 ? {
                description: e1
            } : {},
            $input: u,
            $label: t
        };
    }
    let c = (0, i.getFirstOrderedNodeSafe)('.//div[contains(@class, "location-input-container")]', e1);
    if (c) {
        let e1 = (0, i.getFirstOrderedNodeSafe)(".//input", c);
        if (u && "list" == u.getAttribute("aria-autocomplete")) return {
            type: o.FIELD_TYPE.TEXT,
            label: r1,
            required: l,
            $input: e1,
            $label: t
        };
    }
    let d = (0, i.getOrderedNodesSafe)('.//div[contains(@class, "yesno")]', e1);
    if (d.length > 0) {
        let n = (0, i.getOrderedNodesSafe)(".//button/text()", e1);
        return {
            type: o.FIELD_TYPE.CHECKBOX,
            label: r1,
            required: l,
            $checkboxs: d,
            options: n.map((e1)=>e1.textContent.trim()),
            $input: d[0],
            $label: t
        };
    }
    let f = (0, i.getFirstOrderedNodeSafe)(".//fieldset", e1) || (0, i.getFirstOrderedNodeSafe)('.//div[contains(@class, "_option_")]', e1);
    if (f) {
        let n = (0, i.getOrderedNodesSafe)('.//div[contains(@class, "_option_")]/label/text() | .//fieldset//label/text()', e1), a = (0, i.getFirstOrderedNodeSafe)('.//input[@type="checkbox"]', e1);
        return a ? {
            label: r1,
            $label: t,
            required: l,
            type: o.FIELD_TYPE.MULTI_SELECT,
            $input: a,
            options: n.map((e1)=>e1.textContent.trim())
        } : {
            type: o.FIELD_TYPE.SELECT,
            label: r1,
            $label: t,
            required: l,
            options: n.map((e1)=>e1.textContent.trim())
        };
    }
    return null;
}
function p(e1 = document) {
    let t = Array.from(e1.querySelectorAll("label")), r1 = t.find((e1)=>_(D(e1)));
    return r1?.closest(".ashby-application-form-field-entry") || r1?.parentElement;
}
function m(e1 = document) {
    let t = "undefined" != typeof Document && e1 instanceof Document ? p(e1) : e1;
    return t ? Array.from(t.querySelectorAll('[class*="repeatableEducationEntry"]')) : [];
}
function h() {
    let e1 = p();
    if (!e1) return [];
    let t = m(e1), r1 = t.length > 0 ? t : [
        e1
    ], n = !!I(e1, "Education History")?.className.includes("required");
    return r1.map((e1)=>{
        let t = b(e1);
        return 0 === t.length ? null : {
            type: o.FIELD_TYPE.EDUCATION,
            label: "Education History",
            children: t,
            options: k(t),
            required: n
        };
    }).filter((e1)=>null !== e1);
}
function g() {
    let e1 = p();
    if (!e1) return [];
    let t = m(e1), r1 = t.length > 0 ? t : [
        e1
    ];
    return r1.map((e1)=>{
        let t = {};
        for (let r1 of b(e1)){
            let e1 = r1.$input;
            e1 && (e1 instanceof HTMLSelectElement ? t[r1.label] = T(e1) : t[r1.label] = e1.value ?? "");
        }
        return t;
    }).filter((e1)=>Object.keys(e1).length > 0);
}
function b(e1) {
    let t = [], r1 = y(e1, "School");
    r1 && t.push(r1);
    let n = v(e1, "Degree");
    n && t.push(n);
    let o = v(e1, "Field of Study") ?? v(e1, "Major");
    return o && t.push(o), t.push(...w(e1, "Start Date")), t.push(...w(e1, "End Date")), t;
}
function y(e1, t) {
    let r1 = I(e1, t), n = r1 ? j(r1, e1) : null, i = n?.querySelector('input[role="combobox"]');
    return r1 && i ? {
        type: o.FIELD_TYPE.ASHBY_SEARCH,
        label: t,
        required: L(r1),
        options: [],
        $input: i,
        $label: r1
    } : null;
}
function v(e1, t) {
    let r1 = I(e1, t), n = r1 ? j(r1, e1) : null, i = n?.querySelector('input:not([type="file"]):not([type="hidden"]):not([role="combobox"]), textarea');
    if (!r1 || !i) return null;
    let a = A(i);
    return {
        type: o.FIELD_TYPE.TEXT,
        label: t,
        required: L(r1),
        ...a ? {
            description: a
        } : {},
        $input: i,
        $label: r1
    };
}
function w(e1, t) {
    let r1 = I(e1, t);
    if (!r1) return [];
    let n = [], i = S(e1, r1), a = i.find((e1)=>e1 instanceof HTMLSelectElement && E(e1)) ?? null, l = i.find((e1)=>e1 instanceof HTMLSelectElement && e1 !== a && x(e1)) ?? null, s = i.find((e1)=>(e1 instanceof HTMLInputElement || e1 instanceof HTMLTextAreaElement) && !C(e1)) ?? null;
    if (l) n.push({
        type: o.FIELD_TYPE.SELECT,
        label: `${t} - Year`,
        required: l.required,
        $input: l,
        $label: r1,
        options: F(l)
    });
    else if (s) {
        let e1 = A(s);
        n.push({
            type: o.FIELD_TYPE.TEXT,
            label: `${t} - Year`,
            required: s.required,
            ...e1 ? {
                description: e1
            } : {},
            $input: s,
            $label: r1
        });
    }
    return a && n.push({
        type: o.FIELD_TYPE.SELECT,
        label: `${t} - Month`,
        required: a.required,
        $input: a,
        $label: r1,
        options: F(a)
    }), n;
}
function S(e1, t) {
    let r1 = Array.from(e1.querySelectorAll("label")), n = r1.indexOf(t), o = n >= 0 ? r1.slice(n + 1).find((e1)=>{
        let r1 = D(e1);
        return r1 && r1 !== D(t);
    }) ?? null : null;
    return Array.from(e1.querySelectorAll('input:not([type="file"]):not([type="hidden"]):not([role="combobox"]), select, textarea')).filter((e1)=>{
        let r1 = !!(t.compareDocumentPosition(e1) & Node.DOCUMENT_POSITION_FOLLOWING);
        return !!r1 && (!o || !!(e1.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING));
    });
}
_c = S;
function E(e1) {
    let t = F(e1).map((e1)=>P(e1));
    return t.some((e1)=>e1.includes("month") || /^(jan|january|feb|february|mar|march|apr|april|may|jun|june|jul|july|aug|august|sep|sept|september|oct|october|nov|november|dec|december)$/.test(e1));
}
_c1 = E;
function x(e1) {
    let t = F(e1).map((e1)=>P(e1));
    return t.some((e1)=>/^\d{4}$/.test(e1));
}
function C(e1) {
    let t = P(e1.getAttribute("placeholder") || ""), r1 = P(e1.getAttribute("name") || "");
    return t.includes("month") || r1.includes("month");
}
_c2 = C;
function A(e1) {
    return e1.getAttribute("type")?.toLowerCase() === "number" ? "number" : void 0;
}
_c3 = A;
function k(e1) {
    return e1.map((e1)=>{
        let t = {
            label: e1.label,
            type: e1.type
        }, r1 = e1.options;
        Array.isArray(r1) && (t.options = r1);
        let n = e1.description;
        return n && (t.description = n), t;
    });
}
function T(e1) {
    let t = e1.selectedOptions?.[0];
    if (!t || t.disabled || t.hidden) return "";
    let r1 = t.textContent?.trim() || e1.value || "";
    return /^\s*month\.\.\.\s*$/i.test(r1) ? "" : r1;
}
_c4 = T;
function F(e1) {
    return Array.from(e1.options).filter((e1)=>!e1.disabled && !e1.hidden).map((e1)=>e1.textContent?.trim() || e1.value).filter((e1)=>e1 && !/^\s*month\.\.\.\s*$/i.test(e1));
}
_c5 = F;
function I(e1, t) {
    let r1 = P(t), n = Array.from(e1.querySelectorAll("label"));
    return n.find((e1)=>P(D(e1)) === r1) ?? null;
}
_c6 = I;
function j(e1, t) {
    let r1 = e1.parentElement;
    for(; r1;){
        if (r1.querySelector("input, select, textarea")) return r1;
        if (r1 === t) break;
        r1 = r1.parentElement;
    }
    return e1.parentElement ?? t;
}
function D(e1) {
    return String(e1.textContent ?? "").split("\n")[0].replace("\u2731", "").trim();
}
_c7 = D;
function P(e1) {
    return String(e1 ?? "").replace("\u2731", "").replace(/\s+/g, " ").trim().toLowerCase();
}
_c8 = P;
function _(e1) {
    return "education history" === P(e1);
}
function L(e1) {
    return e1.className.includes("required");
}
_c9 = L;
function R() {
    let e1 = {}, t = p(), r1 = (e1)=>!!t?.contains(e1), n = (0, i.getOrderedNodesSafe)('.//input[@type="text" or @type="email" or @type="tel" or @type="number" or @type="url"] | .//textarea');
    for (let t of n){
        if (r1(t)) continue;
        let n = (t.parentElement.querySelector("label") || i.getFirstOrderedNodeSafe("./preceding::label[1]", t))?.textContent.trim();
        !n || t.className.includes("g-recaptcha-response") || (e1[n] = t.value);
    }
    let o = (0, i.getOrderedNodesSafe)('.//input[@role="combobox"]');
    for (let t of o){
        if (r1(t)) continue;
        let n = O(t);
        n && (e1[n] = t.value);
    }
    let a = (0, i.getOrderedNodesSafe)(".//fieldset[contains(@class, '_container_1v5e2_29')]");
    for (let t of a){
        let r1 = t.querySelector("label")?.textContent.trim();
        if (r1) {
            if ((0, i.getFirstOrderedNodeSafe)(".//input[@type='radio']", t)) {
                let n = (0, i.getFirstOrderedNodeSafe)("./div[contains(@class, 'true')]//label", t);
                e1[r1] = n ? n.textContent.trim() : "";
            } else if ((0, i.getFirstOrderedNodeSafe)(".//input[@type='checkbox']", t)) {
                let n = [], o = (0, i.getOrderedNodesSafe)(".//span[contains(@class, '_checked')]", t);
                for (let e1 of o){
                    let t = (0, i.getFirstOrderedNodeSafe)("following-sibling::label", e1);
                    t && n.push(t.textContent.trim());
                }
                e1[r1] = n;
            }
        }
    }
    let l = (0, i.getOrderedNodesSafe)('.//div[contains(@class, "yesno")]');
    for (let t of l){
        let r1 = (t.parentElement.querySelector("label") || i.getFirstOrderedNodeSafe("./preceding::label[1]", t))?.textContent.trim();
        if (!r1) continue;
        let n = (0, i.getOrderedNodesSafe)(".//button", t);
        for (let t of n)t.className.includes("active") && (e1[r1] = t.textContent.trim());
        e1[r1] || (e1[r1] = "");
    }
    let s = u();
    if (s) {
        let t = Array.from(s.$radioParent.querySelectorAll('input[type="radio"][name="communicationConsent"]')).find((e1)=>e1.checked);
        e1[s.label] = t ? c(t) : "";
    }
    return e1;
}
_c10 = R;
function O(e1) {
    let t = e1.parentElement.querySelector("label") || (0, i.getFirstOrderedNodeSafe)("./preceding::label[1]", e1);
    if (t) return t.textContent?.trim() || null;
    let r1 = e1.closest('div[class*="_container_"]');
    if (r1) {
        let e1 = (0, i.getFirstOrderedNodeSafe)("./preceding-sibling::*[1]", r1);
        if (e1 && e1.textContent) return e1.textContent.trim();
    }
    if (e1.id) {
        let t = document.querySelector(`label[for="${e1.id}"]`);
        if (t) return t.textContent?.trim() || null;
    }
    return null;
}
_c11 = O;
function M(e1, t, r1) {
    return N(e1, t, r1);
}
_c12 = M;
async function N(e1, t, r1) {
    let n = [], o = await B(e1, r1);
    o.length > 0 && (n = o);
    let i = t.querySelector('button[class*="_toggleButton_"]');
    if (i && 0 === n.length) {
        let t = !1;
        try {
            i.click(), t = !0;
            let r1 = await Q(e1);
            r1.length > 0 && (n = r1);
        } catch (e1) {
            console.warn("Auto-click extraction failed", e1);
        } finally{
            t && "true" === i.getAttribute("aria-expanded") && i.click();
        }
    }
    return n && n.length > 0 ? n.map((e1)=>"string" == typeof e1 ? e1 : e1.text || e1.label || e1.value || JSON.stringify(e1)).filter((e1)=>e1 && "Select..." !== e1) : [];
}
_c13 = N;
function $(e1) {
    let t = e1.toLowerCase();
    return t.includes("school") || t.includes("location");
}
async function B(e1, t) {
    if (!(e1 instanceof HTMLInputElement) || !$(t)) return [];
    let r1 = e1.value, n = [], o = q(t);
    try {
        for (let r1 of o){
            W(e1), G(e1, r1), K(e1);
            let o = await J();
            if (U(n, o), e1.dispatchEvent(new KeyboardEvent("keydown", {
                key: "Escape",
                bubbles: !0,
                cancelable: !0
            })), await (0, l.delay)(50), z(t) && n.length >= 20) break;
        }
    } catch (e1) {
        console.warn("Ashby combobox search expansion failed", e1);
    } finally{
        G(e1, r1), K(e1), e1.dispatchEvent(new KeyboardEvent("keydown", {
            key: "Escape",
            bubbles: !0,
            cancelable: !0
        })), e1.blur(), await (0, l.delay)(50);
    }
    return n;
}
_c14 = B;
function q(e1) {
    return Y(e1) ? [
        " "
    ] : z(e1) ? [
        "a"
    ] : [
        " "
    ];
}
function U(e1, t) {
    for (let r1 of t){
        let t = H(r1);
        t && !e1.some((e1)=>H(e1) === t) && e1.push(r1);
    }
}
_c15 = U;
function H(e1) {
    return String(e1 ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
_c16 = H;
function Y(e1) {
    return e1.toLowerCase().includes("school");
}
_c17 = Y;
function z(e1) {
    let t = e1.toLowerCase();
    return t.includes("location") || t.includes("city");
}
function V(e1) {
    let t = e1.find((e1)=>e1?.trim());
    return t ? `Option format example: ${t}` : "";
}
_c18 = V;
function W(e1) {
    e1.focus(), e1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0
    }));
}
_c19 = W;
function G(e1, t) {
    let r1 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set, n = e1.value;
    r1 ? r1.call(e1, t) : e1.value = t;
    try {
        let t = e1?._valueTracker;
        t?.setValue && t.setValue(n);
    } catch (e1) {
        console.warn("Ashby search input tracker update failed", e1);
    }
}
_c20 = G;
function K(e1) {
    e1.dispatchEvent(new InputEvent("input", {
        bubbles: !0,
        cancelable: !0,
        composed: !0
    })), e1.dispatchEvent(new KeyboardEvent("keydown", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new KeyboardEvent("keyup", {
        bubbles: !0,
        cancelable: !0
    }));
}
_c21 = K;
async function X(e1) {
    let t = 8;
    for(let r1 = 0; r1 < t; r1++){
        let t = e1();
        if (t.length > 0) return t;
        await (0, l.delay)(100);
    }
    return [];
}
_c22 = X;
function J() {
    return X(Z);
}
_c23 = J;
function Q(e1) {
    return X(()=>{
        if ("true" !== e1.getAttribute("aria-expanded")) return [];
        let t = e1.getAttribute("aria-controls");
        if (!t) return [];
        let r1 = document.getElementById(t);
        return r1 ? Array.from(r1.querySelectorAll('div[role="option"]')).map((e1)=>e1.textContent?.trim()).filter((e1)=>!!e1) : [];
    });
}
_c24 = Q;
function Z() {
    let e1 = document.querySelectorAll('div[role="listbox"] div[role="option"]');
    return Array.from(e1).map((e1)=>e1.textContent?.trim()).filter((e1)=>!!e1);
}
_c25 = Z;
function ee(e1, t = 0, r1 = new Set) {
    if (!e1 || !Array.isArray(e1) || 0 === e1.length || r1.has(e1)) return null;
    r1.add(e1);
    let n = e1.every((e1)=>"string" == typeof e1);
    if (n) return e1;
    let o = e1.every((e1)=>"object" == typeof e1 && null !== e1 && ("label" in e1 || "value" in e1 || "text" in e1 || "id" in e1));
    return o ? e1 : null;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25;
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
$RefreshReg$(_c24, "Q");
$RefreshReg$(_c25, "Z");

},{}]},["fW5F7","a0eE1"], "a0eE1", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LEVBQUU7QUFDWDtPQVJlO0FBVWYsU0FBUztJQUNQLE9BQU8sRUFBRTtBQUNYO09BRlM7QUFJVCxTQUFTLEVBQUUsRUFBQztJQUNWLE9BQU8sRUFBRTtRQUNQLElBQUksV0FBVyxHQUFFLGFBQWEsa0JBQWtCLE9BQU8sRUFBRTtRQUN6RCxJQUFJLElBQUksR0FBRSxhQUFhO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE9BQU8sRUFBRTtRQUNqQixJQUFJLEtBQUksU0FBUyxlQUFlO1FBQ2hDLE9BQU8sS0FBSSxNQUFNLEtBQUssR0FBRSxpQkFBaUIsdUJBQXVCLElBQUksQ0FBQSxLQUFLLEdBQUUsYUFDdkUsUUFBUSxPQUFPLENBQUEsS0FBSyxDQUFDLENBQUMsTUFBSyxFQUFFO0lBQ25DO0FBQ0Y7T0FUUztBQVdULFNBQVM7SUFDUCxJQUFJLEtBQUksU0FBUyxpQkFBaUI7SUFDbEMsT0FBTyxNQUFNLEtBQUssSUFBRyxJQUFJLENBQUEsS0FBSyxHQUFFLGFBQWEsUUFBUSxPQUFPLENBQUEsS0FBSyxDQUFDLENBQUM7QUFDckU7T0FIUztBQUtULFNBQVMsR0FBRyxFQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSSxJQUFJLEdBQUc7SUFDL0IsSUFBSSxDQUFDLE1BQUssQ0FBQyxNQUFNLFFBQVEsT0FBTSxNQUFNLEdBQUUsVUFBVSxHQUFFLElBQUksS0FBSSxPQUFPO0lBQ2xFLEdBQUUsSUFBSTtJQUNOLElBQUksSUFBSSxHQUFFLE1BQU0sQ0FBQSxLQUFLLFlBQVksT0FBTztJQUN4QyxJQUFJLEdBQUcsT0FBTztJQUNkLElBQUksSUFBSSxHQUFFLE1BQU0sQ0FBQSxLQUFLLFlBQVksT0FBTyxNQUFLLFNBQVMsTUFBTSxDQUFBLFdBQVcsTUFBSyxXQUFXLE1BQ3JGLFVBQVUsTUFBSyxRQUFRLEVBQUE7SUFDekIsT0FBTyxJQUFJLEtBQUk7QUFDakIiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWQ3ODMzYzhlZDhhZWJjN2UuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvYXNoYnkvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcYXNoYnlcXFxccnVsZXMuanNcIixcImJ1bmRsZUlkXCI6XCJlYWU3ZDA0YjcyNmYxZDE3XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogNWlNdjFcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2FzaGJ5L3J1bGVzLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYXNoYnkvZmllbGQtbWV0YWRhdGEgLT4gZENMSWogID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYXNoYnkvZmllbGQtbWV0YWRhdGEuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiZXh0cmFjdFJ1bGVzXCIsICgpID0+IHMpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJnZXRBc2hieUVkdWNhdGlvbkhpc3RvcnlDb250YWluZXJcIiwgKCkgPT4gcCksIG4uZXhwb3J0KHIsIFwiZ2V0QXNoYnlFZHVjYXRpb25Sb3dzXCIsICgpID0+IG0pLCBuXHJcbiAgLmV4cG9ydChyLCBcImdldEVkdWNhdGlvblJ1bGVzXCIsICgpID0+IGgpLCBuLmV4cG9ydChyLCBcImdldEFzaGJ5RWR1Y2F0aW9uU25hcHNob3RcIiwgKCkgPT4gZyksIG5cclxuICAuZXhwb3J0KHIsIFwiZ2V0U2VsZWN0ZWRTZWxlY3RWYWx1ZVwiLCAoKSA9PiBUKSwgbi5leHBvcnQociwgXCJnZXRGb3JtU25hcHNob3RcIiwgKCkgPT4gUik7XHJcbnZhciBvID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIGkgPSBlKFwifmNvcmUveHBhdGhcIiksXHJcbiAgYSA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYXNoYnkvZmllbGQtbWV0YWRhdGFcIiksXHJcbiAgbCA9IGUoXCJ+dXRpbHMvZGVsYXlcIik7XHJcbmFzeW5jIGZ1bmN0aW9uIHMoKSB7XHJcbiAgbGV0IGUgPSBbXTtcclxuICBpZiAoKDAsIGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgICAnLy9kaXZbLi8vaDJbY29udGFpbnMoQGNsYXNzLCBcImFzaGJ5LWFwcGxpY2F0aW9uLWZvcm0tc2VjdGlvbi1oZWFkZXItdGl0bGVcIildXScpKSB7XHJcbiAgICBsZXQgdCA9ICgwLCBpLmdldE9yZGVyZWROb2Rlc1NhZmUpKFxyXG4gICAgICAnLy9kaXZbY29udGFpbnMoQGNsYXNzLCBcImFzaGJ5LWFwcGxpY2F0aW9uLWZvcm0tc2VjdGlvbi1jb250YWluZXJcIildJyk7XHJcbiAgICBmb3IgKGxldCByIG9mIHQpIHtcclxuICAgICAgbGV0IHQgPSAoMCwgaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcclxuICAgICAgICAnLi8vaDJbY29udGFpbnMoQGNsYXNzLCBcImFzaGJ5LWFwcGxpY2F0aW9uLWZvcm0tc2VjdGlvbi1oZWFkZXItdGl0bGVcIildL3RleHQoKScsIHIpO1xyXG4gICAgICBpZiAodCkge1xyXG4gICAgICAgIHRbMF0/LnRleHRDb250ZW50Py50cmltKCk7XHJcbiAgICAgICAgbGV0IG4gPSAoMCwgaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcclxuICAgICAgICAgICcuLy9kaXZbY29udGFpbnMoQGNsYXNzLCBcImFzaGJ5LWFwcGxpY2F0aW9uLWZvcm0tZmllbGQtZW50cnlcIildIHwgLi8vZmllbGRzZXRbY29udGFpbnMoQGNsYXNzLCBcIl9jb250YWluZXJfXCIpXScsXHJcbiAgICAgICAgICByKTtcclxuICAgICAgICBmb3IgKGxldCB0IG9mIG4pIHtcclxuICAgICAgICAgIGxldCByID0gYXdhaXQgZih0KTtcclxuICAgICAgICAgIHIgJiYgZS5wdXNoKHIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCB0ID0gKDAsIGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXHJcbiAgICAgICcvL2Rpdltjb250YWlucyhAY2xhc3MsIFwiYXNoYnktYXBwbGljYXRpb24tZm9ybS1maWVsZC1lbnRyeVwiKV0gfCAuLy9maWVsZHNldFtjb250YWlucyhAY2xhc3MsIFwiX2NvbnRhaW5lcl9cIildJ1xyXG4gICAgICApO1xyXG4gICAgZm9yIChsZXQgciBvZiB0KSB7XHJcbiAgICAgIGxldCB0ID0gYXdhaXQgZihyKTtcclxuICAgICAgdCAmJiBlLnB1c2godClcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHQgPSB1KCk7XHJcbiAgcmV0dXJuIHQgJiYgKGNvbnNvbGUuaW5mbyhcIltBc2hieV1bQ29tbXVuaWNhdGlvbkNvbnNlbnRdIGV4dHJhY3RlZFwiLCB7XHJcbiAgICBvcHRpb25Db3VudDogdC5vcHRpb25zLmxlbmd0aCxcclxuICAgIHJlcXVpcmVkOiB0LnJlcXVpcmVkXHJcbiAgfSksIGUucHVzaCh0KSksIGUucHVzaCguLi5oKCkpLCBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHUoKSB7XHJcbiAgaWYgKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGRvY3VtZW50IHx8IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvcikgcmV0dXJuIG51bGw7XHJcbiAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaGJ5LWFwcGxpY2F0aW9uLWZvcm0tdGV4dGluZy1jb25zZW50LWRlc2NyaXB0aW9uXCIpO1xyXG4gIGlmICghZSkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IHQgPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJjb21tdW5pY2F0aW9uQ29uc2VudFwiXScpKTtcclxuICBpZiAodC5sZW5ndGggPCAyKSByZXR1cm4gY29uc29sZS53YXJuKFwiW0FzaGJ5XVtDb21tdW5pY2F0aW9uQ29uc2VudF0gZXh0cmFjdGlvbiBza2lwcGVkXCIsIHtcclxuICAgIHJlYXNvbjogXCJyYWRpby1vcHRpb25zLW1pc3NpbmdcIixcclxuICAgIG9wdGlvbkNvdW50OiB0Lmxlbmd0aFxyXG4gIH0pLCBudWxsO1xyXG4gIGxldCByID0gZS5xdWVyeVNlbGVjdG9yKFwicFwiKSxcclxuICAgIG4gPSBkKHI/LnRleHRDb250ZW50KSxcclxuICAgIGkgPSB0Lm1hcChjKTtcclxuICBpZiAoIW4gfHwgaS5zb21lKGUgPT4gIWUpKSByZXR1cm4gY29uc29sZS53YXJuKFxyXG4gIFwiW0FzaGJ5XVtDb21tdW5pY2F0aW9uQ29uc2VudF0gZXh0cmFjdGlvbiBza2lwcGVkXCIsIHtcclxuICAgIHJlYXNvbjogbiA/IFwib3B0aW9uLWxhYmVsLW1pc3NpbmdcIiA6IFwicXVlc3Rpb24tbGFiZWwtbWlzc2luZ1wiLFxyXG4gICAgb3B0aW9uQ291bnQ6IHQubGVuZ3RoXHJcbiAgfSksIG51bGw7XHJcbiAgbGV0IGEgPSB0LnNvbWUoZSA9PiBlLnJlcXVpcmVkIHx8IFwidHJ1ZVwiID09PSBlLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIikpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBvLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgbGFiZWw6IG4sXHJcbiAgICByZXF1aXJlZDogYSxcclxuICAgIG9wdGlvbnM6IGksXHJcbiAgICAkaW5wdXQ6IHRbMF0sXHJcbiAgICAkbGFiZWw6IHIgPz8gZSxcclxuICAgICRyYWRpb1BhcmVudDogZVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYyhlKSB7XHJcbiAgcmV0dXJuIGQoZS5jbG9zZXN0KFwibGFiZWxcIik/LnRleHRDb250ZW50KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGUgPz8gXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZihlKSB7XHJcbiAgbGV0IHQgPSAoMCwgaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICAnLi8vbGFiZWxbY29udGFpbnMoQGNsYXNzLCBcImFzaGJ5LWFwcGxpY2F0aW9uLWZvcm0tcXVlc3Rpb24tdGl0bGVcIildJywgZSk7XHJcbiAgdCB8fCAodCA9ICgwLCBpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vbGFiZWxbY29udGFpbnMoQGNsYXNzLCBcIl9sYWJlbF9cIildJywgZSkpO1xyXG4gIGxldCByID0gdCA/IHQudGV4dENvbnRlbnQudHJpbSgpLnNwbGl0KFwiXFxuXCIpWzBdLnJlcGxhY2UoXCJcXHUyNzMxXCIsIFwiXCIpIDogXCJcIjtcclxuICBpZiAoXyhyKSkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IG4gPSAoMCwgaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9sYWJlbC9AY2xhc3NcIiwgZSksXHJcbiAgICBsID0gITE7XHJcbiAgbiAmJiBuLnRleHRDb250ZW50LmluY2x1ZGVzKFwicmVxdWlyZWRcIikgJiYgKGwgPSAhMCk7XHJcbiAgbGV0IHMgPSAoMCwgaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2lucHV0W0Byb2xlPVwiY29tYm9ib3hcIl0nLCBlKTtcclxuICBpZiAocykge1xyXG4gICAgYXdhaXQgKDAsIGEuYW5ub3RhdGVBc2hieUZpZWxkVHlwZSkocyk7XHJcbiAgICBsZXQgbiA9IGF3YWl0IE0ocywgZSwgciksXHJcbiAgICAgIGkgPSB6KHIpLFxyXG4gICAgICB1ID0gWShyKSxcclxuICAgICAgYyA9IGkgJiYgbi5sZW5ndGggPiAwID8gVihuKSA6IFwiXCIsXHJcbiAgICAgIGQgPSBpIHx8IHUgPyBbXSA6IG47XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuQVNIQllfU0VBUkNILFxyXG4gICAgICBsYWJlbDogcixcclxuICAgICAgcmVxdWlyZWQ6IGwsXHJcbiAgICAgIG9wdGlvbnM6IGQsXHJcbiAgICAgIC4uLmMgPyB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IGNcclxuICAgICAgfSA6IHt9LFxyXG4gICAgICAkaW5wdXQ6IHMsXHJcbiAgICAgICRsYWJlbDogdFxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgdSA9ICgwLCBpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJ0ZXh0XCJdJywgZSkgfHwgKDAsIGlcclxuICAgICAgLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJlbWFpbFwiXScsIGUpIHx8ICgwLCBpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgICAgJy4vL2lucHV0W0B0eXBlPVwidGVsXCJdJywgZSkgfHwgKDAsIGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy9pbnB1dFtAdHlwZT1cIm51bWJlclwiXScsXHJcbiAgICBlKSB8fCAoMCwgaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2lucHV0W0B0eXBlPVwidXJsXCJdJywgZSkgfHwgKDAsIGlcclxuICAgICAgLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vL3RleHRhcmVhXCIsIGUpO1xyXG4gIGlmICh1KSB7XHJcbiAgICBsZXQgZSA9IEEodSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgbGFiZWw6IHIsXHJcbiAgICAgIHJlcXVpcmVkOiBsLFxyXG4gICAgICAuLi5lID8ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlXHJcbiAgICAgIH0gOiB7fSxcclxuICAgICAgJGlucHV0OiB1LFxyXG4gICAgICAkbGFiZWw6IHRcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IGMgPSAoMCwgaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2Rpdltjb250YWlucyhAY2xhc3MsIFwibG9jYXRpb24taW5wdXQtY29udGFpbmVyXCIpXScsXHJcbiAgICBlKTtcclxuICBpZiAoYykge1xyXG4gICAgbGV0IGUgPSAoMCwgaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9pbnB1dFwiLCBjKTtcclxuICAgIGlmICh1ICYmIFwibGlzdFwiID09IHUuZ2V0QXR0cmlidXRlKFwiYXJpYS1hdXRvY29tcGxldGVcIikpIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5URVhULFxyXG4gICAgICBsYWJlbDogcixcclxuICAgICAgcmVxdWlyZWQ6IGwsXHJcbiAgICAgICRpbnB1dDogZSxcclxuICAgICAgJGxhYmVsOiB0XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBkID0gKDAsIGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoJy4vL2Rpdltjb250YWlucyhAY2xhc3MsIFwieWVzbm9cIildJywgZSk7XHJcbiAgaWYgKGQubGVuZ3RoID4gMCkge1xyXG4gICAgbGV0IG4gPSAoMCwgaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2J1dHRvbi90ZXh0KClcIiwgZSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsXHJcbiAgICAgIGxhYmVsOiByLFxyXG4gICAgICByZXF1aXJlZDogbCxcclxuICAgICAgJGNoZWNrYm94czogZCxcclxuICAgICAgb3B0aW9uczogbi5tYXAoZSA9PiBlLnRleHRDb250ZW50LnRyaW0oKSksXHJcbiAgICAgICRpbnB1dDogZFswXSxcclxuICAgICAgJGxhYmVsOiB0XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBmID0gKDAsIGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vZmllbGRzZXRcIiwgZSkgfHwgKDAsIGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgJy4vL2Rpdltjb250YWlucyhAY2xhc3MsIFwiX29wdGlvbl9cIildJywgZSk7XHJcbiAgaWYgKGYpIHtcclxuICAgIGxldCBuID0gKDAsIGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXHJcbiAgICAgICAgJy4vL2Rpdltjb250YWlucyhAY2xhc3MsIFwiX29wdGlvbl9cIildL2xhYmVsL3RleHQoKSB8IC4vL2ZpZWxkc2V0Ly9sYWJlbC90ZXh0KCknLCBlKSxcclxuICAgICAgYSA9ICgwLCBpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJjaGVja2JveFwiXScsIGUpO1xyXG4gICAgcmV0dXJuIGEgPyB7XHJcbiAgICAgIGxhYmVsOiByLFxyXG4gICAgICAkbGFiZWw6IHQsXHJcbiAgICAgIHJlcXVpcmVkOiBsLFxyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuTVVMVElfU0VMRUNULFxyXG4gICAgICAkaW5wdXQ6IGEsXHJcbiAgICAgIG9wdGlvbnM6IG4ubWFwKGUgPT4gZS50ZXh0Q29udGVudC50cmltKCkpXHJcbiAgICB9IDoge1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgICBsYWJlbDogcixcclxuICAgICAgJGxhYmVsOiB0LFxyXG4gICAgICByZXF1aXJlZDogbCxcclxuICAgICAgb3B0aW9uczogbi5tYXAoZSA9PiBlLnRleHRDb250ZW50LnRyaW0oKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gcChlID0gZG9jdW1lbnQpIHtcclxuICBsZXQgdCA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWxcIikpLFxyXG4gICAgciA9IHQuZmluZChlID0+IF8oRChlKSkpO1xyXG4gIHJldHVybiByPy5jbG9zZXN0KFwiLmFzaGJ5LWFwcGxpY2F0aW9uLWZvcm0tZmllbGQtZW50cnlcIikgfHwgcj8ucGFyZW50RWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBtKGUgPSBkb2N1bWVudCkge1xyXG4gIGxldCB0ID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgRG9jdW1lbnQgJiYgZSBpbnN0YW5jZW9mIERvY3VtZW50ID8gcChlKSA6IGU7XHJcbiAgcmV0dXJuIHQgPyBBcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cInJlcGVhdGFibGVFZHVjYXRpb25FbnRyeVwiXScpKSA6IFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGgoKSB7XHJcbiAgbGV0IGUgPSBwKCk7XHJcbiAgaWYgKCFlKSByZXR1cm4gW107XHJcbiAgbGV0IHQgPSBtKGUpLFxyXG4gICAgciA9IHQubGVuZ3RoID4gMCA/IHQgOiBbZV0sXHJcbiAgICBuID0gISFJKGUsIFwiRWR1Y2F0aW9uIEhpc3RvcnlcIik/LmNsYXNzTmFtZS5pbmNsdWRlcyhcInJlcXVpcmVkXCIpO1xyXG4gIHJldHVybiByLm1hcChlID0+IHtcclxuICAgIGxldCB0ID0gYihlKTtcclxuICAgIHJldHVybiAwID09PSB0Lmxlbmd0aCA/IG51bGwgOiB7XHJcbiAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5FRFVDQVRJT04sXHJcbiAgICAgIGxhYmVsOiBcIkVkdWNhdGlvbiBIaXN0b3J5XCIsXHJcbiAgICAgIGNoaWxkcmVuOiB0LFxyXG4gICAgICBvcHRpb25zOiBrKHQpLFxyXG4gICAgICByZXF1aXJlZDogblxyXG4gICAgfVxyXG4gIH0pLmZpbHRlcihlID0+IG51bGwgIT09IGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGcoKSB7XHJcbiAgbGV0IGUgPSBwKCk7XHJcbiAgaWYgKCFlKSByZXR1cm4gW107XHJcbiAgbGV0IHQgPSBtKGUpLFxyXG4gICAgciA9IHQubGVuZ3RoID4gMCA/IHQgOiBbZV07XHJcbiAgcmV0dXJuIHIubWFwKGUgPT4ge1xyXG4gICAgbGV0IHQgPSB7fTtcclxuICAgIGZvciAobGV0IHIgb2YgYihlKSkge1xyXG4gICAgICBsZXQgZSA9IHIuJGlucHV0O1xyXG4gICAgICBlICYmIChlIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgPyB0W3IubGFiZWxdID0gVChlKSA6IHRbci5sYWJlbF0gPSBlLnZhbHVlID8/IFwiXCIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdFxyXG4gIH0pLmZpbHRlcihlID0+IE9iamVjdC5rZXlzKGUpLmxlbmd0aCA+IDApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGIoZSkge1xyXG4gIGxldCB0ID0gW10sXHJcbiAgICByID0geShlLCBcIlNjaG9vbFwiKTtcclxuICByICYmIHQucHVzaChyKTtcclxuICBsZXQgbiA9IHYoZSwgXCJEZWdyZWVcIik7XHJcbiAgbiAmJiB0LnB1c2gobik7XHJcbiAgbGV0IG8gPSB2KGUsIFwiRmllbGQgb2YgU3R1ZHlcIikgPz8gdihlLCBcIk1ham9yXCIpO1xyXG4gIHJldHVybiBvICYmIHQucHVzaChvKSwgdC5wdXNoKC4uLncoZSwgXCJTdGFydCBEYXRlXCIpKSwgdC5wdXNoKC4uLncoZSwgXCJFbmQgRGF0ZVwiKSksIHRcclxufVxyXG5cclxuZnVuY3Rpb24geShlLCB0KSB7XHJcbiAgbGV0IHIgPSBJKGUsIHQpLFxyXG4gICAgbiA9IHIgPyBqKHIsIGUpIDogbnVsbCxcclxuICAgIGkgPSBuPy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtyb2xlPVwiY29tYm9ib3hcIl0nKTtcclxuICByZXR1cm4gciAmJiBpID8ge1xyXG4gICAgdHlwZTogby5GSUVMRF9UWVBFLkFTSEJZX1NFQVJDSCxcclxuICAgIGxhYmVsOiB0LFxyXG4gICAgcmVxdWlyZWQ6IEwociksXHJcbiAgICBvcHRpb25zOiBbXSxcclxuICAgICRpbnB1dDogaSxcclxuICAgICRsYWJlbDogclxyXG4gIH0gOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHYoZSwgdCkge1xyXG4gIGxldCByID0gSShlLCB0KSxcclxuICAgIG4gPSByID8gaihyLCBlKSA6IG51bGwsXHJcbiAgICBpID0gbj8ucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2lucHV0Om5vdChbdHlwZT1cImZpbGVcIl0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFtyb2xlPVwiY29tYm9ib3hcIl0pLCB0ZXh0YXJlYScpO1xyXG4gIGlmICghciB8fCAhaSkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IGEgPSBBKGkpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBvLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgIGxhYmVsOiB0LFxyXG4gICAgcmVxdWlyZWQ6IEwociksXHJcbiAgICAuLi5hID8ge1xyXG4gICAgICBkZXNjcmlwdGlvbjogYVxyXG4gICAgfSA6IHt9LFxyXG4gICAgJGlucHV0OiBpLFxyXG4gICAgJGxhYmVsOiByXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3KGUsIHQpIHtcclxuICBsZXQgciA9IEkoZSwgdCk7XHJcbiAgaWYgKCFyKSByZXR1cm4gW107XHJcbiAgbGV0IG4gPSBbXSxcclxuICAgIGkgPSBTKGUsIHIpLFxyXG4gICAgYSA9IGkuZmluZChlID0+IGUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiBFKGUpKSA/PyBudWxsLFxyXG4gICAgbCA9IGkuZmluZChlID0+IGUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiBlICE9PSBhICYmIHgoZSkpID8/IG51bGwsXHJcbiAgICBzID0gaS5maW5kKGUgPT4gKGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGUgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSAmJiAhQyhlKSkgPz9cclxuICAgIG51bGw7XHJcbiAgaWYgKGwpIG4ucHVzaCh7XHJcbiAgICB0eXBlOiBvLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgbGFiZWw6IGAke3R9IC0gWWVhcmAsXHJcbiAgICByZXF1aXJlZDogbC5yZXF1aXJlZCxcclxuICAgICRpbnB1dDogbCxcclxuICAgICRsYWJlbDogcixcclxuICAgIG9wdGlvbnM6IEYobClcclxuICB9KTtcclxuICBlbHNlIGlmIChzKSB7XHJcbiAgICBsZXQgZSA9IEEocyk7XHJcbiAgICBuLnB1c2goe1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgbGFiZWw6IGAke3R9IC0gWWVhcmAsXHJcbiAgICAgIHJlcXVpcmVkOiBzLnJlcXVpcmVkLFxyXG4gICAgICAuLi5lID8ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlXHJcbiAgICAgIH0gOiB7fSxcclxuICAgICAgJGlucHV0OiBzLFxyXG4gICAgICAkbGFiZWw6IHJcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiBhICYmIG4ucHVzaCh7XHJcbiAgICB0eXBlOiBvLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgbGFiZWw6IGAke3R9IC0gTW9udGhgLFxyXG4gICAgcmVxdWlyZWQ6IGEucmVxdWlyZWQsXHJcbiAgICAkaW5wdXQ6IGEsXHJcbiAgICAkbGFiZWw6IHIsXHJcbiAgICBvcHRpb25zOiBGKGEpXHJcbiAgfSksIG5cclxufVxyXG5cclxuZnVuY3Rpb24gUyhlLCB0KSB7XHJcbiAgbGV0IHIgPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImxhYmVsXCIpKSxcclxuICAgIG4gPSByLmluZGV4T2YodCksXHJcbiAgICBvID0gbiA+PSAwID8gci5zbGljZShuICsgMSkuZmluZChlID0+IHtcclxuICAgICAgbGV0IHIgPSBEKGUpO1xyXG4gICAgICByZXR1cm4gciAmJiByICE9PSBEKHQpXHJcbiAgICB9KSA/PyBudWxsIDogbnVsbDtcclxuICByZXR1cm4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICdpbnB1dDpub3QoW3R5cGU9XCJmaWxlXCJdKTpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbcm9sZT1cImNvbWJvYm94XCJdKSwgc2VsZWN0LCB0ZXh0YXJlYScpKVxyXG4gICAgLmZpbHRlcihlID0+IHtcclxuICAgICAgbGV0IHIgPSAhISh0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpO1xyXG4gICAgICByZXR1cm4gISFyICYmICghbyB8fCAhIShlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG8pICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gRShlKSB7XHJcbiAgbGV0IHQgPSBGKGUpLm1hcChlID0+IFAoZSkpO1xyXG4gIHJldHVybiB0LnNvbWUoZSA9PiBlLmluY2x1ZGVzKFwibW9udGhcIikgfHxcclxuICAgIC9eKGphbnxqYW51YXJ5fGZlYnxmZWJydWFyeXxtYXJ8bWFyY2h8YXByfGFwcmlsfG1heXxqdW58anVuZXxqdWx8anVseXxhdWd8YXVndXN0fHNlcHxzZXB0fHNlcHRlbWJlcnxvY3R8b2N0b2Jlcnxub3Z8bm92ZW1iZXJ8ZGVjfGRlY2VtYmVyKSQvXHJcbiAgICAudGVzdChlKSlcclxufVxyXG5cclxuZnVuY3Rpb24geChlKSB7XHJcbiAgbGV0IHQgPSBGKGUpLm1hcChlID0+IFAoZSkpO1xyXG4gIHJldHVybiB0LnNvbWUoZSA9PiAvXlxcZHs0fSQvLnRlc3QoZSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEMoZSkge1xyXG4gIGxldCB0ID0gUChlLmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpIHx8IFwiXCIpLFxyXG4gICAgciA9IFAoZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IFwiXCIpO1xyXG4gIHJldHVybiB0LmluY2x1ZGVzKFwibW9udGhcIikgfHwgci5pbmNsdWRlcyhcIm1vbnRoXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEEoZSkge1xyXG4gIHJldHVybiBlLmdldEF0dHJpYnV0ZShcInR5cGVcIik/LnRvTG93ZXJDYXNlKCkgPT09IFwibnVtYmVyXCIgPyBcIm51bWJlclwiIDogdm9pZCAwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGsoZSkge1xyXG4gIHJldHVybiBlLm1hcChlID0+IHtcclxuICAgIGxldCB0ID0ge1xyXG4gICAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICAgIHR5cGU6IGUudHlwZVxyXG4gICAgICB9LFxyXG4gICAgICByID0gZS5vcHRpb25zO1xyXG4gICAgQXJyYXkuaXNBcnJheShyKSAmJiAodC5vcHRpb25zID0gcik7XHJcbiAgICBsZXQgbiA9IGUuZGVzY3JpcHRpb247XHJcbiAgICByZXR1cm4gbiAmJiAodC5kZXNjcmlwdGlvbiA9IG4pLCB0XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gVChlKSB7XHJcbiAgbGV0IHQgPSBlLnNlbGVjdGVkT3B0aW9ucz8uWzBdO1xyXG4gIGlmICghdCB8fCB0LmRpc2FibGVkIHx8IHQuaGlkZGVuKSByZXR1cm4gXCJcIjtcclxuICBsZXQgciA9IHQudGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBlLnZhbHVlIHx8IFwiXCI7XHJcbiAgcmV0dXJuIC9eXFxzKm1vbnRoXFwuXFwuXFwuXFxzKiQvaS50ZXN0KHIpID8gXCJcIiA6IHJcclxufVxyXG5cclxuZnVuY3Rpb24gRihlKSB7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oZS5vcHRpb25zKS5maWx0ZXIoZSA9PiAhZS5kaXNhYmxlZCAmJiAhZS5oaWRkZW4pLm1hcChlID0+IGUudGV4dENvbnRlbnRcclxuICA/LnRyaW0oKSB8fCBlLnZhbHVlKS5maWx0ZXIoZSA9PiBlICYmICEvXlxccyptb250aFxcLlxcLlxcLlxccyokL2kudGVzdChlKSlcclxufVxyXG5cclxuZnVuY3Rpb24gSShlLCB0KSB7XHJcbiAgbGV0IHIgPSBQKHQpLFxyXG4gICAgbiA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWxcIikpO1xyXG4gIHJldHVybiBuLmZpbmQoZSA9PiBQKEQoZSkpID09PSByKSA/PyBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGooZSwgdCkge1xyXG4gIGxldCByID0gZS5wYXJlbnRFbGVtZW50O1xyXG4gIGZvciAoOyByOykge1xyXG4gICAgaWYgKHIucXVlcnlTZWxlY3RvcihcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpKSByZXR1cm4gcjtcclxuICAgIGlmIChyID09PSB0KSBicmVhaztcclxuICAgIHIgPSByLnBhcmVudEVsZW1lbnRcclxuICB9XHJcbiAgcmV0dXJuIGUucGFyZW50RWxlbWVudCA/PyB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEQoZSkge1xyXG4gIHJldHVybiBTdHJpbmcoZS50ZXh0Q29udGVudCA/PyBcIlwiKS5zcGxpdChcIlxcblwiKVswXS5yZXBsYWNlKFwiXFx1MjczMVwiLCBcIlwiKS50cmltKClcclxufVxyXG5cclxuZnVuY3Rpb24gUChlKSB7XHJcbiAgcmV0dXJuIFN0cmluZyhlID8/IFwiXCIpLnJlcGxhY2UoXCJcXHUyNzMxXCIsIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF8oZSkge1xyXG4gIHJldHVybiBcImVkdWNhdGlvbiBoaXN0b3J5XCIgPT09IFAoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gTChlKSB7XHJcbiAgcmV0dXJuIGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwicmVxdWlyZWRcIilcclxufVxyXG5cclxuZnVuY3Rpb24gUigpIHtcclxuICBsZXQgZSA9IHt9LFxyXG4gICAgdCA9IHAoKSxcclxuICAgIHIgPSBlID0+ICEhdD8uY29udGFpbnMoZSksXHJcbiAgICBuID0gKDAsIGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXHJcbiAgICAgICcuLy9pbnB1dFtAdHlwZT1cInRleHRcIiBvciBAdHlwZT1cImVtYWlsXCIgb3IgQHR5cGU9XCJ0ZWxcIiBvciBAdHlwZT1cIm51bWJlclwiIG9yIEB0eXBlPVwidXJsXCJdIHwgLi8vdGV4dGFyZWEnXHJcbiAgICAgICk7XHJcbiAgZm9yIChsZXQgdCBvZiBuKSB7XHJcbiAgICBpZiAocih0KSkgY29udGludWU7XHJcbiAgICBsZXQgbiA9ICh0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpIHx8IGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUoXHJcbiAgICAgIFwiLi9wcmVjZWRpbmc6OmxhYmVsWzFdXCIsIHQpKT8udGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgIW4gfHwgdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJnLXJlY2FwdGNoYS1yZXNwb25zZVwiKSB8fCAoZVtuXSA9IHQudmFsdWUpXHJcbiAgfVxyXG4gIGxldCBvID0gKDAsIGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoJy4vL2lucHV0W0Byb2xlPVwiY29tYm9ib3hcIl0nKTtcclxuICBmb3IgKGxldCB0IG9mIG8pIHtcclxuICAgIGlmIChyKHQpKSBjb250aW51ZTtcclxuICAgIGxldCBuID0gTyh0KTtcclxuICAgIG4gJiYgKGVbbl0gPSB0LnZhbHVlKVxyXG4gIH1cclxuICBsZXQgYSA9ICgwLCBpLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vZmllbGRzZXRbY29udGFpbnMoQGNsYXNzLCAnX2NvbnRhaW5lcl8xdjVlMl8yOScpXVwiKTtcclxuICBmb3IgKGxldCB0IG9mIGEpIHtcclxuICAgIGxldCByID0gdC5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik/LnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgIGlmIChyKSB7XHJcbiAgICAgIGlmICgoMCwgaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9pbnB1dFtAdHlwZT0ncmFkaW8nXVwiLCB0KSkge1xyXG4gICAgICAgIGxldCBuID0gKDAsIGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi9kaXZbY29udGFpbnMoQGNsYXNzLCAndHJ1ZScpXS8vbGFiZWxcIiwgdCk7XHJcbiAgICAgICAgZVtyXSA9IG4gPyBuLnRleHRDb250ZW50LnRyaW0oKSA6IFwiXCJcclxuICAgICAgfSBlbHNlIGlmICgoMCwgaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9pbnB1dFtAdHlwZT0nY2hlY2tib3gnXVwiLCB0KSkge1xyXG4gICAgICAgIGxldCBuID0gW10sXHJcbiAgICAgICAgICBvID0gKDAsIGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuLy9zcGFuW2NvbnRhaW5zKEBjbGFzcywgJ19jaGVja2VkJyldXCIsIHQpO1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygbykge1xyXG4gICAgICAgICAgbGV0IHQgPSAoMCwgaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCJmb2xsb3dpbmctc2libGluZzo6bGFiZWxcIiwgZSk7XHJcbiAgICAgICAgICB0ICYmIG4ucHVzaCh0LnRleHRDb250ZW50LnRyaW0oKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZVtyXSA9IG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgbCA9ICgwLCBpLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcuLy9kaXZbY29udGFpbnMoQGNsYXNzLCBcInllc25vXCIpXScpO1xyXG4gIGZvciAobGV0IHQgb2YgbCkge1xyXG4gICAgbGV0IHIgPSAodC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKSB8fCBpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKFxyXG4gICAgICBcIi4vcHJlY2VkaW5nOjpsYWJlbFsxXVwiLCB0KSk/LnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgIGlmICghcikgY29udGludWU7XHJcbiAgICBsZXQgbiA9ICgwLCBpLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vYnV0dG9uXCIsIHQpO1xyXG4gICAgZm9yIChsZXQgdCBvZiBuKSB0LmNsYXNzTmFtZS5pbmNsdWRlcyhcImFjdGl2ZVwiKSAmJiAoZVtyXSA9IHQudGV4dENvbnRlbnQudHJpbSgpKTtcclxuICAgIGVbcl0gfHwgKGVbcl0gPSBcIlwiKVxyXG4gIH1cclxuICBsZXQgcyA9IHUoKTtcclxuICBpZiAocykge1xyXG4gICAgbGV0IHQgPSBBcnJheS5mcm9tKHMuJHJhZGlvUGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cImNvbW11bmljYXRpb25Db25zZW50XCJdJykpLmZpbmQoZSA9PiBlLmNoZWNrZWQpO1xyXG4gICAgZVtzLmxhYmVsXSA9IHQgPyBjKHQpIDogXCJcIlxyXG4gIH1cclxuICByZXR1cm4gZVxyXG59XHJcblxyXG5mdW5jdGlvbiBPKGUpIHtcclxuICBsZXQgdCA9IGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIikgfHwgKDAsIGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgXCIuL3ByZWNlZGluZzo6bGFiZWxbMV1cIiwgZSk7XHJcbiAgaWYgKHQpIHJldHVybiB0LnRleHRDb250ZW50Py50cmltKCkgfHwgbnVsbDtcclxuICBsZXQgciA9IGUuY2xvc2VzdCgnZGl2W2NsYXNzKj1cIl9jb250YWluZXJfXCJdJyk7XHJcbiAgaWYgKHIpIHtcclxuICAgIGxldCBlID0gKDAsIGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi9wcmVjZWRpbmctc2libGluZzo6KlsxXVwiLCByKTtcclxuICAgIGlmIChlICYmIGUudGV4dENvbnRlbnQpIHJldHVybiBlLnRleHRDb250ZW50LnRyaW0oKVxyXG4gIH1cclxuICBpZiAoZS5pZCkge1xyXG4gICAgbGV0IHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2UuaWR9XCJdYCk7XHJcbiAgICBpZiAodCkgcmV0dXJuIHQudGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBudWxsXHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE0oZSwgdCwgcikge1xyXG4gIHJldHVybiBOKGUsIHQsIHIpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gTihlLCB0LCByKSB7XHJcbiAgbGV0IG4gPSBbXSxcclxuICAgIG8gPSBhd2FpdCBCKGUsIHIpO1xyXG4gIG8ubGVuZ3RoID4gMCAmJiAobiA9IG8pO1xyXG4gIGxldCBpID0gdC5xdWVyeVNlbGVjdG9yKCdidXR0b25bY2xhc3MqPVwiX3RvZ2dsZUJ1dHRvbl9cIl0nKTtcclxuICBpZiAoaSAmJiAwID09PSBuLmxlbmd0aCkge1xyXG4gICAgbGV0IHQgPSAhMTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGkuY2xpY2soKSwgdCA9ICEwO1xyXG4gICAgICBsZXQgciA9IGF3YWl0IFEoZSk7XHJcbiAgICAgIHIubGVuZ3RoID4gMCAmJiAobiA9IHIpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIkF1dG8tY2xpY2sgZXh0cmFjdGlvbiBmYWlsZWRcIiwgZSlcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHQgJiYgXCJ0cnVlXCIgPT09IGkuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSAmJiBpLmNsaWNrKClcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG4gJiYgbi5sZW5ndGggPiAwID8gbi5tYXAoZSA9PiBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gZSA6IGUudGV4dCB8fCBlLmxhYmVsIHx8IGUudmFsdWUgfHxcclxuICAgIEpTT04uc3RyaW5naWZ5KGUpKS5maWx0ZXIoZSA9PiBlICYmIFwiU2VsZWN0Li4uXCIgIT09IGUpIDogW11cclxufVxyXG5cclxuZnVuY3Rpb24gJChlKSB7XHJcbiAgbGV0IHQgPSBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuIHQuaW5jbHVkZXMoXCJzY2hvb2xcIikgfHwgdC5pbmNsdWRlcyhcImxvY2F0aW9uXCIpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gQihlLCB0KSB7XHJcbiAgaWYgKCEoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHx8ICEkKHQpKSByZXR1cm4gW107XHJcbiAgbGV0IHIgPSBlLnZhbHVlLFxyXG4gICAgbiA9IFtdLFxyXG4gICAgbyA9IHEodCk7XHJcbiAgdHJ5IHtcclxuICAgIGZvciAobGV0IHIgb2Ygbykge1xyXG4gICAgICBXKGUpLCBHKGUsIHIpLCBLKGUpO1xyXG4gICAgICBsZXQgbyA9IGF3YWl0IEooKTtcclxuICAgICAgaWYgKFUobiwgbyksIGUuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIiwge1xyXG4gICAgICAgICAga2V5OiBcIkVzY2FwZVwiLFxyXG4gICAgICAgICAgYnViYmxlczogITAsXHJcbiAgICAgICAgICBjYW5jZWxhYmxlOiAhMFxyXG4gICAgICAgIH0pKSwgYXdhaXQgKDAsIGwuZGVsYXkpKDUwKSwgeih0KSAmJiBuLmxlbmd0aCA+PSAyMCkgYnJlYWtcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCJBc2hieSBjb21ib2JveCBzZWFyY2ggZXhwYW5zaW9uIGZhaWxlZFwiLCBlKVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICBHKGUsIHIpLCBLKGUpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIsIHtcclxuICAgICAga2V5OiBcIkVzY2FwZVwiLFxyXG4gICAgICBidWJibGVzOiAhMCxcclxuICAgICAgY2FuY2VsYWJsZTogITBcclxuICAgIH0pKSwgZS5ibHVyKCksIGF3YWl0ICgwLCBsLmRlbGF5KSg1MClcclxuICB9XHJcbiAgcmV0dXJuIG5cclxufVxyXG5cclxuZnVuY3Rpb24gcShlKSB7XHJcbiAgcmV0dXJuIFkoZSkgPyBbXCIgXCJdIDogeihlKSA/IFtcImFcIl0gOiBbXCIgXCJdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFUoZSwgdCkge1xyXG4gIGZvciAobGV0IHIgb2YgdCkge1xyXG4gICAgbGV0IHQgPSBIKHIpO1xyXG4gICAgdCAmJiAhZS5zb21lKGUgPT4gSChlKSA9PT0gdCkgJiYgZS5wdXNoKHIpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBIKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGUgPz8gXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24gWShlKSB7XHJcbiAgcmV0dXJuIGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInNjaG9vbFwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiB6KGUpIHtcclxuICBsZXQgdCA9IGUudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gdC5pbmNsdWRlcyhcImxvY2F0aW9uXCIpIHx8IHQuaW5jbHVkZXMoXCJjaXR5XCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFYoZSkge1xyXG4gIGxldCB0ID0gZS5maW5kKGUgPT4gZT8udHJpbSgpKTtcclxuICByZXR1cm4gdCA/IGBPcHRpb24gZm9ybWF0IGV4YW1wbGU6ICR7dH1gIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBXKGUpIHtcclxuICBlLmZvY3VzKCksIGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITBcclxuICB9KSksIGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITBcclxuICB9KSlcclxufVxyXG5cclxuZnVuY3Rpb24gRyhlLCB0KSB7XHJcbiAgbGV0IHIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgXCJ2YWx1ZVwiKT8uc2V0LFxyXG4gICAgbiA9IGUudmFsdWU7XHJcbiAgciA/IHIuY2FsbChlLCB0KSA6IGUudmFsdWUgPSB0O1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgdCA9IGU/Ll92YWx1ZVRyYWNrZXI7XHJcbiAgICB0Py5zZXRWYWx1ZSAmJiB0LnNldFZhbHVlKG4pXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS53YXJuKFwiQXNoYnkgc2VhcmNoIGlucHV0IHRyYWNrZXIgdXBkYXRlIGZhaWxlZFwiLCBlKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSyhlKSB7XHJcbiAgZS5kaXNwYXRjaEV2ZW50KG5ldyBJbnB1dEV2ZW50KFwiaW5wdXRcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgIGNvbXBvc2VkOiAhMFxyXG4gIH0pKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgfSkpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gWChlKSB7XHJcbiAgbGV0IHQgPSA4O1xyXG4gIGZvciAobGV0IHIgPSAwOyByIDwgdDsgcisrKSB7XHJcbiAgICBsZXQgdCA9IGUoKTtcclxuICAgIGlmICh0Lmxlbmd0aCA+IDApIHJldHVybiB0O1xyXG4gICAgYXdhaXQgKDAsIGwuZGVsYXkpKDEwMClcclxuICB9XHJcbiAgcmV0dXJuIFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEooKSB7XHJcbiAgcmV0dXJuIFgoWilcclxufVxyXG5cclxuZnVuY3Rpb24gUShlKSB7XHJcbiAgcmV0dXJuIFgoKCkgPT4ge1xyXG4gICAgaWYgKFwidHJ1ZVwiICE9PSBlLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikpIHJldHVybiBbXTtcclxuICAgIGxldCB0ID0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpO1xyXG4gICAgaWYgKCF0KSByZXR1cm4gW107XHJcbiAgICBsZXQgciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpO1xyXG4gICAgcmV0dXJuIHIgPyBBcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbCgnZGl2W3JvbGU9XCJvcHRpb25cIl0nKSkubWFwKGUgPT4gZS50ZXh0Q29udGVudFxyXG4gICAgICA/LnRyaW0oKSkuZmlsdGVyKGUgPT4gISFlKSA6IFtdXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gWigpIHtcclxuICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdltyb2xlPVwibGlzdGJveFwiXSBkaXZbcm9sZT1cIm9wdGlvblwiXScpO1xyXG4gIHJldHVybiBBcnJheS5mcm9tKGUpLm1hcChlID0+IGUudGV4dENvbnRlbnQ/LnRyaW0oKSkuZmlsdGVyKGUgPT4gISFlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZShlLCB0ID0gMCwgciA9IG5ldyBTZXQpIHtcclxuICBpZiAoIWUgfHwgIUFycmF5LmlzQXJyYXkoZSkgfHwgMCA9PT0gZS5sZW5ndGggfHwgci5oYXMoZSkpIHJldHVybiBudWxsO1xyXG4gIHIuYWRkKGUpO1xyXG4gIGxldCBuID0gZS5ldmVyeShlID0+IFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpO1xyXG4gIGlmIChuKSByZXR1cm4gZTtcclxuICBsZXQgbyA9IGUuZXZlcnkoZSA9PiBcIm9iamVjdFwiID09IHR5cGVvZiBlICYmIG51bGwgIT09IGUgJiYgKFwibGFiZWxcIiBpbiBlIHx8IFwidmFsdWVcIiBpbiBlIHx8XHJcbiAgICBcInRleHRcIiBpbiBlIHx8IFwiaWRcIiBpbiBlKSk7XHJcbiAgcmV0dXJuIG8gPyBlIDogbnVsbFxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuNzI2ZjFkMTcuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);