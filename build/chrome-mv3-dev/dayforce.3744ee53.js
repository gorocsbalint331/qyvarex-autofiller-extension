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
})({"9czBs":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\dayforce.js",
    "bundleId": "0b3e70e23744ee53",
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
var j = z(require("b1c9edf604df22ca"));
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

},{"b1c9edf604df22ca":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"gK362":[function(require,module,exports) {
/**
 * Parcel module id: 3Jd0v
 * Resolved path: src/contents/sites/dayforce.js
 * Dependencies:
 *   ./agreements -> deKYK  =>  src/contents/sites/dayforce/agreements.js
 *   ./answer -> irXfm  =>  src/contents/sites/dayforce/answer.js
 *   ./auth -> 1TnOy  =>  src/contents/sites/dayforce/auth.js
 *   ./operations -> gnj33  =>  src/contents/sites/dayforce/operations.js
 *   ./rules -> 5ymq4  =>  src/contents/sites/dayforce/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~api/autofill-signup-information -> 52vOt  =>  src/api/autofill-signup-information.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~store/workday-signup-info -> jjbI7  =>  src/store/workday-signup-info.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Dayforce", ()=>v), n.export(r, "dedupeDayforceFieldStatus", ()=>h.dedupeDayforceFieldStatus);
var o = e("@plasmohq/messaging"), i = e("~api/autofill-signup-information"), a = e("~contents/methods/cancellation"), l = e("~contents/methods/dom"), s = e("~contents/sites/base-filler"), u = e("~core/enums"), c = e("~store/workday-signup-info"), d = e("./agreements"), f = e("./auth"), p = e("./answer"), m = e("./operations"), h = e("./rules");
let g = "Resume/CV", b = "Cover Letter";
function y(e1, t, r1, n = {}) {
    console.info(`[Dayforce][ExperienceDiagnostics] ${JSON.stringify({
        stage: e1,
        ruleCount: t?.length ?? null,
        sections: Object.entries(h.DAYFORCE_SECTIONS).map(([e1, n])=>{
            let o = r1?.[e1], i = Array.from(document?.querySelectorAll?.(n.rowSelector) ?? []);
            return {
                key: e1,
                ruleCount: t?.filter((e1)=>e1.type === n.type).length ?? null,
                answerType: null == o ? "missing" : Array.isArray(o) ? "array" : typeof o,
                answerCount: Array.isArray(o) ? o.length : null,
                containerCount: document?.querySelectorAll?.(n.containerSelector)?.length ?? null,
                addButtonCount: document?.querySelectorAll?.(n.addButtonSelector)?.length ?? null,
                rowCount: i.length,
                rowFieldKeys: i.map((e1)=>n.fields.filter((t)=>e1.querySelector(t.selector)).map((e1)=>e1.key))
            };
        }),
        ...n
    })}`);
}
class v extends s.BaseFiller {
    getFieldHandlers() {
        return {
            [u.FIELD_TYPE.TEXT]: {
                handler: (e1, t)=>(0, m.fillDayforceTextField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [u.FIELD_TYPE.DATE]: {
                handler: (e1, t)=>(0, m.fillDayforceDateField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [u.FIELD_TYPE.SELECT]: {
                handler: (e1, t)=>(0, m.fillDayforceSelectField)(e1, t),
                options: {
                    expectArray: !1
                }
            },
            [u.FIELD_TYPE.DROPDOWN]: {
                handler: (e1, t)=>(0, m.fillDayforceDropdownField)(e1, t, this.answer?.regular?.Country),
                options: {
                    expectArray: !0
                }
            },
            [u.FIELD_TYPE.CHECKBOX]: {
                handler: (e1, t)=>(0, m.fillDayforceCheckboxField)(e1, t),
                options: {
                    expectArray: !0
                }
            }
        };
    }
    async doFillForm(e1 = !1) {
        if ((0, f.getDayforceAuthPageMode)()) return await this.fillAuthForm(e1);
        await this.initializeFillForm();
        let t = await this.extractFormRules();
        y("initial-rules", t), this.progressTracker.setFieldsRequiredStatus(t);
        let r1 = await this.fetchFormAnswers(t, e1);
        if (y("answers-fetched", t, this.answer, {
            requestReturnedError: "string" == typeof r1
        }), "string" == typeof r1) return r1;
        y("resume-gate-start", t, this.answer);
        let n = await this.uploadResumeBeforeRegularFields();
        if (y("resume-gate-result", t, this.answer, {
            resumeUploaded: n,
            stopsBeforeExperienceFill: !n
        }), !n) return await this.finalizeFillForm();
        let o = this.answer.education?.length ?? 0, i = this.answer.workExperience?.length ?? 0;
        console.info("[Dayforce][CompositeSections] reconciling after resume upload", {
            educationCount: o,
            workExperienceCount: i
        }), await (0, m.initializeDayforceCompositeSections)(o, i), console.info("[Dayforce][CompositeSections] reconciliation completed", {
            educationCount: o,
            workExperienceCount: i
        }), await this.fillRegularFields(t);
        let a = t.length;
        console.info("[Dayforce][ConditionalFields] starting dynamic rule re-scan", {
            initialRuleCount: a
        });
        let l = await this.runComboQuestionAutofillIfNeeded(t, e1);
        return "string" == typeof l ? (y("dynamic-rescan-failed", t, this.answer, {
            stopsBeforeExperienceFill: !0
        }), l) : (y("dynamic-rescan-completed", t = l, this.answer), console.info("[Dayforce][ConditionalFields] completed dynamic rule re-scan", {
            initialRuleCount: a,
            totalRuleCount: l.length
        }), await this.fillEducationAndEmployment(t), await this.executeSiteSpecificSteps(t), await this.finalizeFillForm());
    }
    async fillAuthForm(e1) {
        await this.initializeFillForm(), this.answer = {
            education: [],
            workExperience: [],
            skills: [],
            regular: {}
        }, this.timeTrace.requestStartTime = 0, this.timeTrace.fillStartTime = 0;
        let t = (0, f.getDayforceAuthNameRules)();
        if ("register" === (0, f.getDayforceAuthPageMode)() && 2 !== t.length) return "Dayforce registration form is not ready. Please wait for the name fields and try again.";
        this.progressTracker.setFieldsRequiredStatus(t);
        let [r1, n] = await Promise.all([
            (0, o.sendToBackground)({
                name: "getAutofillInfo",
                body: {
                    forceRefresh: !0
                }
            }).catch(()=>null),
            (0, c.getWorkdaySignupInformation)().catch(()=>null)
        ]);
        (0, a.checkpoint)();
        let l = await (0, f.fillDayforceAuthCredentials)({
            email: (0, i.resolveSignupRegistrationEmail)(r1),
            password: n?.password ?? ""
        });
        if (!l.foundForm) return "Dayforce account form is not ready. Please wait for the form and try again.";
        let s = {
            email: "Email",
            confirmEmail: "Confirm Email Address",
            password: "Password",
            confirmPassword: "Confirm Password"
        };
        for (let e1 of l.foundRoles){
            let t = s[e1];
            this.progressTracker.updateFieldRequiredStatus({
                label: t,
                required: !0
            }), l.filledRoles.includes(e1) || l.skippedExistingRoles.includes(e1) ? this.progressTracker.updateFilledProgress(t) : this.progressTracker.updateMissedProgress(t);
        }
        if (t.length > 0) {
            let r1 = await this.fetchFormAnswers(t, e1);
            if ("string" == typeof r1) return r1;
            (0, a.checkpoint)(), await this.fillRegularFields(t);
        }
        if ("register" === (0, f.getDayforceAuthPageMode)()) {
            (0, a.checkpoint)();
            let e1 = "Privacy Statement and Terms of Use";
            this.progressTracker.updateFieldRequiredStatus({
                label: e1,
                required: !0
            });
            let t = await (0, d.acceptDayforceRegistrationAgreements)();
            (0, a.checkpoint)(), t ? this.progressTracker.updateFilledProgress(e1) : this.progressTracker.updateMissedProgress(e1);
        }
        return await this.finalizeFillForm();
    }
    async extractFormRules() {
        return (0, f.getDayforceAuthPageMode)() ? (0, f.getDayforceAuthNameRules)() : await (0, h.getRules)();
    }
    getSiteName() {
        return "dayforce";
    }
    async fetchFormAnswers(e1, t) {
        let r1 = await this.requestFormAnswers((0, p.prepareDayforceAnswerRequestRules)(e1), t);
        if ("string" == typeof r1) return r1;
        r1 && (this.answer = r1);
    }
    async uploadResumeBeforeRegularFields() {
        (0, a.updateCurrentField)(g), console.info("[Dayforce][UploadTask] starting", {
            label: g
        });
        try {
            let e1 = await (0, a.withSkip)(()=>(0, m.uploadResume)(this.resumeInfo, this.disableUploadResume, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress, this.progressTracker.updateMissedProgress));
            return console.info("[Dayforce][UploadTask] completed", {
                label: g,
                completed: e1
            }), e1;
        } catch (e1) {
            if (e1 instanceof a.SkippedError) return console.info("[Dayforce][UploadTask] skipped", {
                label: g
            }), this.progressTracker.updateMissedProgress(g), !0;
            throw e1;
        } finally{
            (0, a.updateCurrentField)(null);
        }
    }
    async handleResumeUpload() {
        await this.uploadResumeBeforeRegularFields();
    }
    async fillEducationAndEmployment(e1) {
        await this.fillConfiguredSectionWithSkip(h.DAYFORCE_SECTIONS.education, this.answer.education || []), await this.fillConfiguredSectionWithSkip(h.DAYFORCE_SECTIONS.workExperience, this.answer.workExperience || []);
    }
    async fillConfiguredSectionWithSkip(e1, t) {
        (0, a.updateCurrentField)(e1.label), y("section-fill-start", null, this.answer, {
            sectionType: e1.type,
            recordCount: t.length
        });
        try {
            await (0, a.withSkip)(()=>(0, m.fillConfiguredSection)(e1, t, {
                    onSectionResultChanged: this.progressTracker.updateSectionResult
                }));
            let r1 = (0, m.isDayforceConfiguredSectionFilled)(e1, t);
            y("section-fill-completed", null, this.answer, {
                sectionType: e1.type,
                recordCount: t.length,
                committed: r1
            }), r1 && this.progressTracker.updateFilledProgress(e1.label);
        } catch (t) {
            if (t instanceof a.SkippedError) {
                y("section-fill-skipped", null, this.answer, {
                    sectionType: e1.type,
                    reason: "user-skipped"
                }), this.progressTracker.updateMissedProgress(e1.label);
                return;
            }
            throw y("section-fill-failed", null, this.answer, {
                sectionType: e1.type,
                reason: t instanceof Error ? t.name : typeof t
            }), t;
        } finally{
            (0, a.updateCurrentField)(null);
        }
    }
    async executeSiteSpecificSteps(e1) {
        (0, m.syncCoverLetterRequiredStatus)(this.progressTracker.replaceFieldRequiredStatus), await this.uploadCoverLetterWithSkip(), await this.bindSubmitButtonTracking(e1);
    }
    async uploadCoverLetterWithSkip() {
        (0, a.updateCurrentField)(b), console.info("[Dayforce][UploadTask] starting", {
            label: b
        });
        try {
            await (0, a.withSkip)(()=>(0, m.uploadCoverLetter)(this.coverLetter, this.progressTracker.replaceFieldRequiredStatus, this.progressTracker.updateFilledProgress, this.progressTracker.updateMissedProgress)), console.info("[Dayforce][UploadTask] completed", {
                label: b
            });
        } catch (e1) {
            if (e1 instanceof a.SkippedError) {
                let e1 = (0, m.getDayforceCoverLetterStatus)();
                console.info("[Dayforce][UploadTask] skipped", {
                    label: b,
                    status: e1
                }), e1 && this.progressTracker.replaceFieldRequiredStatus({
                    label: b,
                    required: "required" === e1
                }), "required" === e1 && this.progressTracker.updateMissedProgress(b);
                return;
            }
            throw e1;
        } finally{
            (0, a.updateCurrentField)(null);
        }
    }
    async checkCoverLetter() {
        this.bindCoverLetterStatusObserver(), this.syncCoverLetterStatus(!0);
    }
    syncCoverLetterStatus(e1 = !1) {
        let t = (0, m.getDayforceCoverLetterStatus)();
        (e1 || t !== this.lastCoverLetterStatus) && (this.lastCoverLetterStatus = t, console.info("[Dayforce][CoverLetter] detection status changed", {
            status: t
        }), (0, l.postCoverLetterStatus)(t));
    }
    scheduleCoverLetterStatusSync(e1 = !1) {
        this.coverLetterStatusTimer && window.clearTimeout(this.coverLetterStatusTimer), this.coverLetterStatusTimer = window.setTimeout(()=>{
            this.syncCoverLetterStatus(e1);
        }, 150);
    }
    bindCoverLetterStatusObserver() {
        if (this.coverLetterStatusObserver) {
            this.scheduleCoverLetterStatusSync(!0);
            return;
        }
        let e1 = document.body || document.documentElement;
        if (!e1) {
            this.syncCoverLetterStatus(!0);
            return;
        }
        this.coverLetterStatusObserver = new MutationObserver((e1)=>{
            let t = e1.some((e1)=>{
                let t = e1.target;
                return !!(t instanceof Element && w(t)) || [
                    ...e1.addedNodes,
                    ...e1.removedNodes
                ].some((e1)=>e1 instanceof Element && w(e1));
            });
            t && this.scheduleCoverLetterStatusSync();
        }), this.coverLetterStatusObserver.observe(e1, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: [
                "class",
                "style",
                "hidden",
                "aria-hidden",
                "aria-required",
                "required",
                "test-id"
            ]
        }), this.scheduleCoverLetterStatusSync(!0);
    }
    getSubmitButtonSelector() {
        return './/button[@test-id="application-next-step"] | .//button[@test-id="application-submit"]';
    }
    getSubmitTrackingDelegationRoot() {
        return document;
    }
    resolveDelegatedSubmitButton(e1) {
        return (0, h.resolveDayforceSubmitButtonFromTarget)(e1);
    }
    async getAutofillSnapshot(e1) {
        return this.lastEducationEmploymentAutofillSnapshot = (0, h.getDayforceEducationEmploymentSnapshot)(), (0, h.getDayforceNormalFormSnapshot)(e1);
    }
    async getSubmitSnapshot() {
        return this.lastEducationEmploymentSubmitSnapshot = (0, h.getDayforceEducationEmploymentSnapshot)(), (0, h.getDayforceNormalFormSnapshot)();
    }
    getAdditionalAutofillSnapshotData() {
        return this.lastEducationEmploymentAutofillSnapshot;
    }
    getAdditionalSubmitSnapshotData() {
        return this.lastEducationEmploymentSubmitSnapshot;
    }
    submitApplication() {
        (0, f.getDayforceAuthPageMode)() || h.getSubmitButton()?.click();
    }
    constructor(...e1){
        super(...e1), this.hasComboQuestions = !0, this.coverLetterStatusObserver = null, this.coverLetterStatusTimer = null, this.lastCoverLetterStatus = null, this.lastEducationEmploymentAutofillSnapshot = {}, this.lastEducationEmploymentSubmitSnapshot = {}, this.formatAnswer = (e1)=>(0, p.formatAnswer)(e1, {
                profileData: {
                    country: e1.country
                }
            });
    }
}
function w(e1) {
    return e1.matches('section[test-id="cover-letter-upload-section"]') || e1.matches("#jobPostingApplication_files_coverLetter") || e1.matches(".ant-upload-list") || !!e1.closest('section[test-id="cover-letter-upload-section"]') || !!e1.querySelector('section[test-id="cover-letter-upload-section"]');
}

},{}]},["9czBs","gK362"], "gK362", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFBc0UsSUFBSSxJQUFFLEVBQUUsNEJBQTRCLEdBQUU7Z0JBQUcsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLElBQUk7Z0JBQUU7WUFBRSxJQUFHO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFO1lBQStCLElBQUcsTUFBSSxLQUFLLEdBQUU7Z0JBQUMsSUFBSSxJQUFFO2dCQUFFLEVBQUUsaUNBQStCLElBQUU7b0JBQUMsV0FBVSxJQUFJO29CQUFJLGVBQWMsQ0FBQztvQkFBRSxRQUFPLFNBQVMsQ0FBQzt3QkFBRSxPQUFPO29CQUFHO29CQUFFLHFCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFO29CQUFFLG1CQUFrQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRTtvQkFBRSxzQkFBcUIsWUFBVztnQkFBQztZQUFDO1lBQUMsSUFBRyxFQUFFLFlBQVc7Z0JBQUMsUUFBUSxLQUFLO2dCQUE4SjtZQUFNO1lBQUMsSUFBSSxJQUFFLEVBQUU7WUFBTyxFQUFFLFNBQU8sU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLE1BQU0sSUFBSSxFQUFDO2dCQUFXLE9BQU8sT0FBTyxFQUFFLG1CQUFpQixjQUFZLE9BQU8sRUFBRSxxQkFBbUIsY0FBWSxFQUFFLElBQUksR0FBRSxJQUFHO1lBQUMsR0FBRSxFQUFFLFVBQVUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxtQkFBaUIsY0FBWSxPQUFPLEVBQUUscUJBQW1CLGNBQVksRUFBRSxJQUFJLEdBQUU7WUFBRTtZQUFHLElBQUksSUFBRSxFQUFFLG1CQUFrQixJQUFFLEVBQUUsdUJBQXFCLFlBQVc7WUFBRSxFQUFFLHNCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQSxFQUFFLE9BQU8sSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLEdBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFJLEVBQUM7WUFBVSxHQUFFLEVBQUUsb0JBQWtCLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsRUFBRSxJQUFJLEdBQUU7b0JBQUcsSUFBSSxJQUFFLEVBQUUsU0FBUSxJQUFFLEVBQUU7b0JBQVUsSUFBRyxNQUFJLE1BQUs7d0JBQUMsSUFBSSxJQUFFLEVBQUUsaUJBQWUsUUFBTSxFQUFFLGNBQWMsV0FBUyxRQUFNLEVBQUUsSUFBSSxJQUFHLElBQUUsRUFBRSxpQkFBZSxRQUFNLEVBQUUsY0FBYyxXQUFTO3dCQUFLLENBQUMsS0FBRyxJQUFHLENBQUEsRUFBRSxJQUFJLElBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxLQUFHLEtBQUksQ0FBQSxLQUFHLENBQUMsSUFBRyxDQUFBLEVBQUUsT0FBTyxJQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEtBQUcsRUFBRSxJQUFJLEVBQUM7b0JBQUUsT0FBTSxFQUFFLElBQUk7Z0JBQUU7Z0JBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxFQUFDO1lBQVU7UUFBRTtRQUFDLFNBQVM7WUFBSyxPQUFNLENBQUM7UUFBQztRQUFDLFNBQVM7WUFBSyxPQUFPLEVBQUU7UUFBSTtRQUFDLFNBQVM7WUFBTSxJQUFJLEdBQUUsR0FBRSxJQUFFLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFHLE9BQU8sS0FBRyxVQUFTLE9BQU8sS0FBSSxDQUFBLElBQUUsR0FBRSxJQUFFLE9BQU8sS0FBRyxVQUFTLEdBQUcsS0FBRyxRQUFPLENBQUEsT0FBTyxLQUFHLGNBQVksT0FBTyxLQUFHLFFBQU8sS0FBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLElBQUc7Z0JBQUUsQ0FBQyxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxFQUFFLEVBQUM7WUFBRTtRQUFFO1FBQUMsU0FBUyxHQUFHLENBQUM7WUFBRSxPQUFPLE9BQU87Z0JBQUcsS0FBSTtvQkFBWSxJQUFHLEVBQUUsYUFBVyxNQUFLO3dCQUFDLElBQUcsRUFBRSxVQUFVLGtCQUFpQixPQUFNLENBQUM7d0JBQUUsSUFBSSxJQUFFLE9BQU8sb0JBQW9CLEVBQUU7d0JBQVcsSUFBRyxFQUFFLFNBQU8sS0FBRyxDQUFDLENBQUMsRUFBRSxLQUFHLGlCQUFlLEVBQUUsVUFBVSxjQUFZLE9BQU8sV0FBVSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFFLEVBQUUsUUFBTSxFQUFFO29CQUFZLE9BQU8sT0FBTyxLQUFHLFlBQVUsU0FBUyxLQUFLO2dCQUFHLEtBQUk7b0JBQVUsSUFBRyxLQUFHLE1BQUssT0FBTyxFQUFFLEdBQUU7d0JBQWEsS0FBSzt3QkFBRSxLQUFLOzRCQUFFLE9BQU0sQ0FBQzt3QkFBRTs0QkFBUSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsT0FBTSxDQUFDO2dCQUFFO29CQUFRLE9BQU0sQ0FBQztZQUFDO1FBQUM7UUFBQyxFQUFFLHVCQUFxQixJQUFHLEVBQUUsaUNBQStCLEdBQUUsRUFBRSxzQ0FBb0MsSUFBRyxFQUFFLDRCQUEwQixJQUFHLEVBQUUsZ0JBQWMsR0FBRSxFQUFFLGtCQUFnQixHQUFFLEVBQUUseUJBQXVCLElBQUcsRUFBRSx1QkFBcUIsSUFBRyxFQUFFLHdCQUFzQixJQUFHLEVBQUUsc0JBQW9CLEdBQUUsRUFBRSxXQUFTLEdBQUUsRUFBRSxlQUFhO0lBQUMsQ0FBQTtBQUFJO0FBQUcsSUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFHO0lBQUs7SUFBYSxFQUFFLFVBQVE7QUFBRztBQUFHLElBQUksSUFBRSxDQUFDO0FBQUUsR0FBRyxHQUFFO0lBQUMsU0FBUSxJQUFJO0FBQUU7QUFBRyxPQUFPLFVBQVEsR0FBRztBQUFHLElBQUksSUFBRSxFQUFFO0FBQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxPQUFPO0FBQVMsSUFBSSxLQUFHLEVBQUUsU0FDcDVMOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FDYkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUJDLEdBRUQsSUFBSSxJQUFJLEVBQUU7QUFDVixFQUFFLGtCQUFrQixJQUFJLEVBQUUsT0FBTyxHQUFHLFlBQVksSUFBTSxJQUFJLEVBQUUsT0FBTyxHQUFHLDZCQUN0RSxJQUFNLEVBQUU7QUFDUixJQUFJLElBQUksRUFBRSx3QkFDUixJQUFJLEVBQUUscUNBQ04sSUFBSSxFQUFFLG1DQUNOLElBQUksRUFBRSwwQkFDTixJQUFJLEVBQUUsZ0NBQ04sSUFBSSxFQUFFLGdCQUNOLElBQUksRUFBRSwrQkFDTixJQUFJLEVBQUUsaUJBQ04sSUFBSSxFQUFFLFdBQ04sSUFBSSxFQUFFLGFBQ04sSUFBSSxFQUFFLGlCQUNOLElBQUksRUFBRTtBQUNSLElBQUksSUFBSSxhQUNOLElBQUk7QUFFTixTQUFTLEVBQUUsRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEIsUUFBUSxLQUNOLENBQUMsa0NBQWtDLEVBQUUsS0FBSyxVQUFVO1FBQUMsT0FBTTtRQUFFLFdBQVUsR0FBRyxVQUFRO1FBQUssVUFBUyxPQUFPLFFBQVEsRUFBRSxtQkFBbUIsSUFBSSxDQUFDLENBQUMsSUFBRSxFQUFFO1lBQUksSUFBSSxJQUFFLElBQUcsQ0FBQyxHQUFFLEVBQUMsSUFBRSxNQUFNLEtBQUssVUFBVSxtQkFBbUIsRUFBRSxnQkFBYyxFQUFFO1lBQUUsT0FBTTtnQkFBQyxLQUFJO2dCQUFFLFdBQVUsR0FBRyxPQUFPLENBQUEsS0FBRyxHQUFFLFNBQU8sRUFBRSxNQUFNLFVBQVE7Z0JBQUssWUFBVyxRQUFNLElBQUUsWUFBVSxNQUFNLFFBQVEsS0FBRyxVQUFRLE9BQU87Z0JBQUUsYUFBWSxNQUFNLFFBQVEsS0FBRyxFQUFFLFNBQU87Z0JBQUssZ0JBQWUsVUFBVSxtQkFBbUIsRUFBRSxvQkFBb0IsVUFBUTtnQkFBSyxnQkFBZSxVQUFVLG1CQUFtQixFQUFFLG9CQUFvQixVQUFRO2dCQUFLLFVBQVMsRUFBRTtnQkFBTyxjQUFhLEVBQUUsSUFBSSxDQUFBLEtBQUcsRUFBRSxPQUFPLE9BQU8sQ0FBQSxJQUFHLEdBQUUsY0FBYyxFQUFFLFdBQVcsSUFBSSxDQUFBLEtBQUcsR0FBRTtZQUFLO1FBQUM7UUFBRyxHQUFHLENBQUM7SUFBQSxHQUFHLENBQUM7QUFFN3BCO0FBQ0EsTUFBTSxVQUFVLEVBQUU7SUFDaEIsbUJBQW1CO1FBQ2pCLE9BQU87WUFDTCxDQUFDLEVBQUUsV0FBVyxLQUFLLEVBQUU7Z0JBQ25CLFNBQVMsQ0FBQyxJQUFHLElBQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxxQkFBb0IsRUFBRyxJQUFHO2dCQUNuRCxTQUFTO29CQUNQLGFBQWEsQ0FBQztnQkFDaEI7WUFDRjtZQUNBLENBQUMsRUFBRSxXQUFXLEtBQUssRUFBRTtnQkFDbkIsU0FBUyxDQUFDLElBQUcsSUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLHFCQUFvQixFQUFHLElBQUc7Z0JBQ25ELFNBQVM7b0JBQ1AsYUFBYSxDQUFDO2dCQUNoQjtZQUNGO1lBQ0EsQ0FBQyxFQUFFLFdBQVcsT0FBTyxFQUFFO2dCQUNyQixTQUFTLENBQUMsSUFBRyxJQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsdUJBQXNCLEVBQUcsSUFBRztnQkFDckQsU0FBUztvQkFDUCxhQUFhLENBQUM7Z0JBQ2hCO1lBQ0Y7WUFDQSxDQUFDLEVBQUUsV0FBVyxTQUFTLEVBQUU7Z0JBQ3ZCLFNBQVMsQ0FBQyxJQUFHLElBQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSx5QkFBd0IsRUFBRyxJQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsU0FDbkU7Z0JBQ0osU0FBUztvQkFDUCxhQUFhLENBQUM7Z0JBQ2hCO1lBQ0Y7WUFDQSxDQUFDLEVBQUUsV0FBVyxTQUFTLEVBQUU7Z0JBQ3ZCLFNBQVMsQ0FBQyxJQUFHLElBQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSx5QkFBd0IsRUFBRyxJQUFHO2dCQUN2RCxTQUFTO29CQUNQLGFBQWEsQ0FBQztnQkFDaEI7WUFDRjtRQUNGO0lBQ0Y7SUFDQSxNQUFNLFdBQVcsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUN2QixJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsdUJBQXNCLEtBQU0sT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhO1FBQ3JFLE1BQU0sSUFBSSxDQUFDO1FBQ1gsSUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFDO1FBQ25CLEVBQUUsaUJBQWlCLElBQUksSUFBSSxDQUFDLGdCQUFnQix3QkFBd0I7UUFDcEUsSUFBSSxLQUFJLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixHQUFHO1FBQ3ZDLElBQUksRUFBRSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUTtZQUNyQyxzQkFBc0IsWUFBWSxPQUFPO1FBQzNDLElBQUksWUFBWSxPQUFPLElBQUcsT0FBTztRQUNuQyxFQUFFLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLElBQUksTUFBTSxJQUFJLENBQUM7UUFDbkIsSUFBSSxFQUFFLHNCQUFzQixHQUFHLElBQUksQ0FBQyxRQUFRO1lBQ3hDLGdCQUFnQjtZQUNoQiwyQkFBMkIsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sSUFBSSxDQUFDO1FBQzVCLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxXQUFXLFVBQVUsR0FDdkMsSUFBSSxJQUFJLENBQUMsT0FBTyxnQkFBZ0IsVUFBVTtRQUM1QyxRQUFRLEtBQUssaUVBQWlFO1lBQzVFLGdCQUFnQjtZQUNoQixxQkFBcUI7UUFDdkIsSUFBSSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUNBQWtDLEVBQUcsR0FBRyxJQUFJLFFBQVEsS0FDbEUsMERBQTBEO1lBQ3hELGdCQUFnQjtZQUNoQixxQkFBcUI7UUFDdkIsSUFBSSxNQUFNLElBQUksQ0FBQyxrQkFBa0I7UUFDbkMsSUFBSSxJQUFJLEVBQUU7UUFDVixRQUFRLEtBQUssK0RBQStEO1lBQzFFLGtCQUFrQjtRQUNwQjtRQUNBLElBQUksSUFBSSxNQUFNLElBQUksQ0FBQyxpQ0FBaUMsR0FBRztRQUN2RCxPQUFPLFlBQVksT0FBTyxJQUFLLENBQUEsRUFBRSx5QkFBeUIsR0FBRyxJQUFJLENBQUMsUUFBUTtZQUN4RSwyQkFBMkIsQ0FBQztRQUM5QixJQUFJLENBQUEsSUFBTSxDQUFBLEVBQUUsNEJBQTRCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxRQUFRLEtBQ2pFLGdFQUFnRTtZQUM5RCxrQkFBa0I7WUFDbEIsZ0JBQWdCLEVBQUU7UUFDcEIsSUFBSSxNQUFNLElBQUksQ0FBQywyQkFBMkIsSUFBSSxNQUFNLElBQUksQ0FBQyx5QkFBeUIsSUFDcEYsTUFBTSxJQUFJLENBQUMsa0JBQWlCO0lBQ2hDO0lBQ0EsTUFBTSxhQUFhLEVBQUMsRUFBRTtRQUNwQixNQUFNLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLFNBQVM7WUFDN0MsV0FBVyxFQUFFO1lBQ2IsZ0JBQWdCLEVBQUU7WUFDbEIsUUFBUSxFQUFFO1lBQ1YsU0FBUyxDQUFDO1FBQ1osR0FBRyxJQUFJLENBQUMsVUFBVSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxnQkFBZ0I7UUFDdkUsSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsd0JBQXVCO1FBQ3JDLElBQUksZUFBZSxBQUFDLENBQUEsR0FBRyxFQUFFLHVCQUFzQixPQUFRLE1BQU0sRUFBRSxRQUMvRCxPQUFPO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQix3QkFBd0I7UUFDN0MsSUFBSSxDQUFDLElBQUcsRUFBRSxHQUFHLE1BQU0sUUFBUSxJQUFJO1lBQUUsQ0FBQSxHQUFHLEVBQUUsZ0JBQWUsRUFBRztnQkFDdEQsTUFBTTtnQkFDTixNQUFNO29CQUNKLGNBQWMsQ0FBQztnQkFDakI7WUFDRixHQUFHLE1BQU0sSUFBTTtZQUFRLENBQUEsR0FBRyxFQUFFLDJCQUEwQixJQUFLLE1BQU0sSUFBTTtTQUFNO1FBQzVFLENBQUEsR0FBRyxFQUFFLFVBQVM7UUFDZixJQUFJLElBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLDJCQUEwQixFQUFHO1lBQy9DLE9BQU8sQUFBQyxDQUFBLEdBQUcsRUFBRSw4QkFBNkIsRUFBRztZQUM3QyxVQUFVLEdBQUcsWUFBWTtRQUMzQjtRQUNBLElBQUksQ0FBQyxFQUFFLFdBQ1AsT0FBTztRQUNQLElBQUksSUFBSTtZQUNOLE9BQU87WUFDUCxjQUFjO1lBQ2QsVUFBVTtZQUNWLGlCQUFpQjtRQUNuQjtRQUNBLEtBQUssSUFBSSxNQUFLLEVBQUUsV0FBWTtZQUMxQixJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUU7WUFDWixJQUFJLENBQUMsZ0JBQWdCLDBCQUEwQjtnQkFDM0MsT0FBTztnQkFDUCxVQUFVLENBQUM7WUFDYixJQUFJLEVBQUUsWUFBWSxTQUFTLE9BQU0sRUFBRSxxQkFBcUIsU0FBUyxNQUFLLElBQUksQ0FDekUsZ0JBQWdCLHFCQUFxQixLQUFLLElBQUksQ0FBQyxnQkFBZ0IscUJBQXFCO1FBQ3pGO1FBQ0EsSUFBSSxFQUFFLFNBQVMsR0FBRztZQUNoQixJQUFJLEtBQUksTUFBTSxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDdkMsSUFBSSxZQUFZLE9BQU8sSUFBRyxPQUFPO1lBQ2hDLENBQUEsR0FBRyxFQUFFLFVBQVMsS0FBTSxNQUFNLElBQUksQ0FBQyxrQkFBa0I7UUFDcEQ7UUFDQSxJQUFJLGVBQWUsQUFBQyxDQUFBLEdBQUcsRUFBRSx1QkFBc0IsS0FBTTtZQUNsRCxDQUFBLEdBQUcsRUFBRSxVQUFTO1lBQ2YsSUFBSSxLQUFJO1lBQ1IsSUFBSSxDQUFDLGdCQUFnQiwwQkFBMEI7Z0JBQzdDLE9BQU87Z0JBQ1AsVUFBVSxDQUFDO1lBQ2I7WUFDQSxJQUFJLElBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLG9DQUFtQztZQUN0RCxDQUFBLEdBQUcsRUFBRSxVQUFTLEtBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLHFCQUFxQixNQUFLLElBQUksQ0FDekUsZ0JBQWdCLHFCQUFxQjtRQUMxQztRQUNBLE9BQU8sTUFBTSxJQUFJLENBQUM7SUFDcEI7SUFDQSxNQUFNLG1CQUFtQjtRQUN2QixPQUFPLEFBQUMsQ0FBQSxHQUFHLEVBQUUsdUJBQXNCLE1BQU8sQUFBQyxDQUFBLEdBQUcsRUFBRSx3QkFBdUIsTUFBTyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQ3JGLFFBQU87SUFDWjtJQUNBLGNBQWM7UUFDWixPQUFPO0lBQ1Q7SUFDQSxNQUFNLGlCQUFpQixFQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzNCLElBQUksS0FBSSxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQUFBQyxDQUFBLEdBQUcsRUFBRSxpQ0FBZ0MsRUFBRyxLQUFJO1FBQ25GLElBQUksWUFBWSxPQUFPLElBQUcsT0FBTztRQUNqQyxNQUFNLENBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQTtJQUN0QjtJQUNBLE1BQU0sa0NBQWtDO1FBQ3JDLENBQUEsR0FBRyxFQUFFLGtCQUFpQixFQUFHLElBQUksUUFBUSxLQUFLLG1DQUFtQztZQUM1RSxPQUFPO1FBQ1Q7UUFDQSxJQUFJO1lBQ0YsSUFBSSxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxRQUFPLEVBQUcsSUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLFlBQVcsRUFBRyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQzFFLHFCQUFxQixJQUFJLENBQUMsZ0JBQWdCLDJCQUEyQixJQUFJLENBQ3pFLGdCQUFnQixzQkFBc0IsSUFBSSxDQUFDLGdCQUFnQjtZQUM5RCxPQUFPLFFBQVEsS0FBSyxvQ0FBb0M7Z0JBQ3RELE9BQU87Z0JBQ1AsV0FBVztZQUNiLElBQUk7UUFDTixFQUFFLE9BQU8sSUFBRztZQUNWLElBQUksY0FBYSxFQUFFLGNBQWMsT0FBTyxRQUFRLEtBQUssa0NBQWtDO2dCQUNyRixPQUFPO1lBQ1QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLHFCQUFxQixJQUFJLENBQUM7WUFDbkQsTUFBTTtRQUNSLFNBQVU7WUFDUCxDQUFBLEdBQUcsRUFBRSxrQkFBaUIsRUFBRztRQUM1QjtJQUNGO0lBQ0EsTUFBTSxxQkFBcUI7UUFDekIsTUFBTSxJQUFJLENBQUM7SUFDYjtJQUNBLE1BQU0sMkJBQTJCLEVBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxrQkFBa0IsV0FBVyxJQUFJLENBQUMsT0FDMUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsOEJBQThCLEVBQUUsa0JBQzdELGdCQUFnQixJQUFJLENBQUMsT0FBTyxrQkFBa0IsRUFBRTtJQUNyRDtJQUNBLE1BQU0sOEJBQThCLEVBQUMsRUFBRSxDQUFDLEVBQUU7UUFDdkMsQ0FBQSxHQUFHLEVBQUUsa0JBQWlCLEVBQUcsR0FBRSxRQUFRLEVBQUUsc0JBQXNCLE1BQU0sSUFBSSxDQUFDLFFBQVE7WUFDN0UsYUFBYSxHQUFFO1lBQ2YsYUFBYSxFQUFFO1FBQ2pCO1FBQ0EsSUFBSTtZQUNGLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxRQUFPLEVBQUcsSUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLHFCQUFvQixFQUFHLElBQUcsR0FBRztvQkFDN0Qsd0JBQXdCLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQy9DO1lBQ0EsSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsaUNBQWdDLEVBQUcsSUFBRztZQUNwRCxFQUFFLDBCQUEwQixNQUFNLElBQUksQ0FBQyxRQUFRO2dCQUM3QyxhQUFhLEdBQUU7Z0JBQ2YsYUFBYSxFQUFFO2dCQUNmLFdBQVc7WUFDYixJQUFJLE1BQUssSUFBSSxDQUFDLGdCQUFnQixxQkFBcUIsR0FBRTtRQUN2RCxFQUFFLE9BQU8sR0FBRztZQUNWLElBQUksYUFBYSxFQUFFLGNBQWM7Z0JBQy9CLEVBQUUsd0JBQXdCLE1BQU0sSUFBSSxDQUFDLFFBQVE7b0JBQzNDLGFBQWEsR0FBRTtvQkFDZixRQUFRO2dCQUNWLElBQUksSUFBSSxDQUFDLGdCQUFnQixxQkFBcUIsR0FBRTtnQkFDaEQ7WUFDRjtZQUNBLE1BQU0sRUFBRSx1QkFBdUIsTUFBTSxJQUFJLENBQUMsUUFBUTtnQkFDaEQsYUFBYSxHQUFFO2dCQUNmLFFBQVEsYUFBYSxRQUFRLEVBQUUsT0FBTyxPQUFPO1lBQy9DLElBQUk7UUFDTixTQUFVO1lBQ1AsQ0FBQSxHQUFHLEVBQUUsa0JBQWlCLEVBQUc7UUFDNUI7SUFDRjtJQUNBLE1BQU0seUJBQXlCLEVBQUMsRUFBRTtRQUMvQixDQUFBLEdBQUcsRUFBRSw2QkFBNEIsRUFBRyxJQUFJLENBQUMsZ0JBQWdCLDZCQUMxRCxNQUFNLElBQUksQ0FBQyw2QkFBNkIsTUFBTSxJQUFJLENBQUMseUJBQXlCO0lBQzlFO0lBQ0EsTUFBTSw0QkFBNEI7UUFDL0IsQ0FBQSxHQUFHLEVBQUUsa0JBQWlCLEVBQUcsSUFBSSxRQUFRLEtBQUssbUNBQW1DO1lBQzVFLE9BQU87UUFDVDtRQUNBLElBQUk7WUFDRixNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsUUFBTyxFQUFHLElBQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxpQkFBZ0IsRUFBRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQ3hFLGdCQUFnQiw0QkFBNEIsSUFBSSxDQUFDLGdCQUNqRCxzQkFBc0IsSUFBSSxDQUFDLGdCQUFnQix3QkFBd0IsUUFBUSxLQUM1RSxvQ0FBb0M7Z0JBQ2xDLE9BQU87WUFDVDtRQUNKLEVBQUUsT0FBTyxJQUFHO1lBQ1YsSUFBSSxjQUFhLEVBQUUsY0FBYztnQkFDL0IsSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsNEJBQTJCO2dCQUN6QyxRQUFRLEtBQUssa0NBQWtDO29CQUM3QyxPQUFPO29CQUNQLFFBQVE7Z0JBQ1YsSUFBSSxNQUFLLElBQUksQ0FBQyxnQkFBZ0IsMkJBQTJCO29CQUN2RCxPQUFPO29CQUNQLFVBQVUsZUFBZTtnQkFDM0IsSUFBSSxlQUFlLE1BQUssSUFBSSxDQUFDLGdCQUFnQixxQkFBcUI7Z0JBQ2xFO1lBQ0Y7WUFDQSxNQUFNO1FBQ1IsU0FBVTtZQUNQLENBQUEsR0FBRyxFQUFFLGtCQUFpQixFQUFHO1FBQzVCO0lBQ0Y7SUFDQSxNQUFNLG1CQUFtQjtRQUN2QixJQUFJLENBQUMsaUNBQWlDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNwRTtJQUNBLHNCQUFzQixLQUFJLENBQUMsQ0FBQyxFQUFFO1FBQzVCLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLDRCQUEyQjtRQUN4QyxDQUFBLE1BQUssTUFBTSxJQUFJLENBQUMscUJBQW9CLEtBQU8sQ0FBQSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxLQUNsRixvREFBb0Q7WUFDbEQsUUFBUTtRQUNWLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxxQkFBb0IsRUFBRyxFQUFDO0lBQ3RDO0lBQ0EsOEJBQThCLEtBQUksQ0FBQyxDQUFDLEVBQUU7UUFDcEMsSUFBSSxDQUFDLDBCQUEwQixPQUFPLGFBQWEsSUFBSSxDQUFDLHlCQUF5QixJQUFJLENBQ2xGLHlCQUF5QixPQUFPLFdBQVc7WUFDMUMsSUFBSSxDQUFDLHNCQUFzQjtRQUM3QixHQUFHO0lBQ1A7SUFDQSxnQ0FBZ0M7UUFDOUIsSUFBSSxJQUFJLENBQUMsMkJBQTJCO1lBQ2xDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztZQUNwQztRQUNGO1FBQ0EsSUFBSSxLQUFJLFNBQVMsUUFBUSxTQUFTO1FBQ2xDLElBQUksQ0FBQyxJQUFHO1lBQ04sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQzVCO1FBQ0Y7UUFDQSxJQUFJLENBQUMsNEJBQTRCLElBQUksaUJBQWlCLENBQUE7WUFDcEQsSUFBSSxJQUFJLEdBQUUsS0FBSyxDQUFBO2dCQUNiLElBQUksSUFBSSxHQUFFO2dCQUNWLE9BQU8sQ0FBQyxDQUFFLENBQUEsYUFBYSxXQUFXLEVBQUUsRUFBQyxLQUFNO3VCQUFJLEdBQUU7dUJBQWUsR0FBRTtpQkFBYSxDQUM1RSxLQUFLLENBQUEsS0FBSyxjQUFhLFdBQVcsRUFBRTtZQUN6QztZQUNBLEtBQUssSUFBSSxDQUFDO1FBQ1osSUFBSSxJQUFJLENBQUMsMEJBQTBCLFFBQVEsSUFBRztZQUM1QyxXQUFXLENBQUM7WUFDWixTQUFTLENBQUM7WUFDVixZQUFZLENBQUM7WUFDYixpQkFBaUI7Z0JBQUM7Z0JBQVM7Z0JBQVM7Z0JBQVU7Z0JBQWU7Z0JBQzNEO2dCQUFZO2FBQ2I7UUFDSCxJQUFJLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztJQUMxQztJQUNBLDBCQUEwQjtRQUN4QixPQUFPO0lBQ1Q7SUFDQSxrQ0FBa0M7UUFDaEMsT0FBTztJQUNUO0lBQ0EsNkJBQTZCLEVBQUMsRUFBRTtRQUM5QixPQUFPLEFBQUMsQ0FBQSxHQUFHLEVBQUUscUNBQW9DLEVBQUc7SUFDdEQ7SUFDQSxNQUFNLG9CQUFvQixFQUFDLEVBQUU7UUFDM0IsT0FBTyxJQUFJLENBQUMsMENBQTBDLEFBQUMsQ0FBQSxHQUFHLEVBQ3ZELHNDQUFxQyxLQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsNkJBQTRCLEVBQUc7SUFDckY7SUFDQSxNQUFNLG9CQUFvQjtRQUN4QixPQUFPLElBQUksQ0FBQyx3Q0FBd0MsQUFBQyxDQUFBLEdBQUcsRUFDckQsc0NBQXFDLEtBQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSw2QkFBNEI7SUFDbEY7SUFDQSxvQ0FBb0M7UUFDbEMsT0FBTyxJQUFJLENBQUM7SUFDZDtJQUNBLGtDQUFrQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkO0lBQ0Esb0JBQW9CO1FBQ2pCLENBQUEsR0FBRyxFQUFFLHVCQUFzQixPQUFRLEVBQUUsbUJBQW1CO0lBQzNEO0lBQ0EsWUFBWSxHQUFHLEVBQUMsQ0FBRTtRQUNoQixLQUFLLElBQUksS0FBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLE1BQU0sSUFBSSxDQUNsRix5QkFBeUIsTUFBTSxJQUFJLENBQUMsd0JBQXdCLE1BQU0sSUFBSSxDQUN0RSwwQ0FBMEMsQ0FBQyxHQUFHLElBQUksQ0FDbEQsd0NBQXdDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFBLEtBQUssQUFBQyxDQUFBLEdBQUcsRUFBRSxZQUFXLEVBQ3JGLElBQUc7Z0JBQ0QsYUFBYTtvQkFDWCxTQUFTLEdBQUU7Z0JBQ2I7WUFDRjtJQUNOO0FBQ0Y7QUFFQSxTQUFTLEVBQUUsRUFBQztJQUNWLE9BQU8sR0FBRSxRQUFRLHFEQUFxRCxHQUFFLFFBQ3RFLCtDQUErQyxHQUFFLFFBQVEsdUJBQXVCLENBQUMsQ0FBQyxHQUFFLFFBQ3BGLHFEQUFxRCxDQUFDLENBQUMsR0FBRSxjQUN6RDtBQUNKIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1mODkwNDliMmY1N2U3MGM0LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2RheWZvcmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGRheWZvcmNlLmpzXCIsXCJidW5kbGVJZFwiOlwiMGIzZTcwZTIzNzQ0ZWU1M1wiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDNKZDB2XHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9kYXlmb3JjZS5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYWdyZWVtZW50cyAtPiBkZUtZSyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9kYXlmb3JjZS9hZ3JlZW1lbnRzLmpzXHJcbiAqICAgLi9hbnN3ZXIgLT4gaXJYZm0gID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZGF5Zm9yY2UvYW5zd2VyLmpzXHJcbiAqICAgLi9hdXRoIC0+IDFUbk95ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2RheWZvcmNlL2F1dGguanNcclxuICogICAuL29wZXJhdGlvbnMgLT4gZ25qMzMgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZGF5Zm9yY2Uvb3BlcmF0aW9ucy5qc1xyXG4gKiAgIC4vcnVsZXMgLT4gNXltcTQgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZGF5Zm9yY2UvcnVsZXMuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIEBwbGFzbW9ocS9tZXNzYWdpbmcgLT4gOTJHeUIgID0+ICBAcGxhc21vaHEvbWVzc2FnaW5nLmpzXHJcbiAqICAgfmFwaS9hdXRvZmlsbC1zaWdudXAtaW5mb3JtYXRpb24gLT4gNTJ2T3QgID0+ICBzcmMvYXBpL2F1dG9maWxsLXNpZ251cC1pbmZvcm1hdGlvbi5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvbiAtPiBsdUpmcyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvbi5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2RvbSAtPiBoQTVRYSAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2RvbS5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlciAtPiA4eGo2RiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlci5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+c3RvcmUvd29ya2RheS1zaWdudXAtaW5mbyAtPiBqamJJNyAgPT4gIHNyYy9zdG9yZS93b3JrZGF5LXNpZ251cC1pbmZvLmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJEYXlmb3JjZVwiLCAoKSA9PiB2KSwgbi5leHBvcnQociwgXCJkZWR1cGVEYXlmb3JjZUZpZWxkU3RhdHVzXCIsXHJcbigpID0+IGguZGVkdXBlRGF5Zm9yY2VGaWVsZFN0YXR1cyk7XHJcbnZhciBvID0gZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksXHJcbiAgaSA9IGUoXCJ+YXBpL2F1dG9maWxsLXNpZ251cC1pbmZvcm1hdGlvblwiKSxcclxuICBhID0gZShcIn5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvblwiKSxcclxuICBsID0gZShcIn5jb250ZW50cy9tZXRob2RzL2RvbVwiKSxcclxuICBzID0gZShcIn5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlclwiKSxcclxuICB1ID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIGMgPSBlKFwifnN0b3JlL3dvcmtkYXktc2lnbnVwLWluZm9cIiksXHJcbiAgZCA9IGUoXCIuL2FncmVlbWVudHNcIiksXHJcbiAgZiA9IGUoXCIuL2F1dGhcIiksXHJcbiAgcCA9IGUoXCIuL2Fuc3dlclwiKSxcclxuICBtID0gZShcIi4vb3BlcmF0aW9uc1wiKSxcclxuICBoID0gZShcIi4vcnVsZXNcIik7XHJcbmxldCBnID0gXCJSZXN1bWUvQ1ZcIixcclxuICBiID0gXCJDb3ZlciBMZXR0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIHkoZSwgdCwgciwgbiA9IHt9KSB7XHJcbiAgY29uc29sZS5pbmZvKFxyXG4gICAgYFtEYXlmb3JjZV1bRXhwZXJpZW5jZURpYWdub3N0aWNzXSAke0pTT04uc3RyaW5naWZ5KHtzdGFnZTplLHJ1bGVDb3VudDp0Py5sZW5ndGg/P251bGwsc2VjdGlvbnM6T2JqZWN0LmVudHJpZXMoaC5EQVlGT1JDRV9TRUNUSU9OUykubWFwKChbZSxuXSk9PntsZXQgbz1yPy5bZV0saT1BcnJheS5mcm9tKGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yQWxsPy4obi5yb3dTZWxlY3Rvcik/P1tdKTtyZXR1cm57a2V5OmUscnVsZUNvdW50OnQ/LmZpbHRlcihlPT5lLnR5cGU9PT1uLnR5cGUpLmxlbmd0aD8/bnVsbCxhbnN3ZXJUeXBlOm51bGw9PW8/XCJtaXNzaW5nXCI6QXJyYXkuaXNBcnJheShvKT9cImFycmF5XCI6dHlwZW9mIG8sYW5zd2VyQ291bnQ6QXJyYXkuaXNBcnJheShvKT9vLmxlbmd0aDpudWxsLGNvbnRhaW5lckNvdW50OmRvY3VtZW50Py5xdWVyeVNlbGVjdG9yQWxsPy4obi5jb250YWluZXJTZWxlY3Rvcik/Lmxlbmd0aD8/bnVsbCxhZGRCdXR0b25Db3VudDpkb2N1bWVudD8ucXVlcnlTZWxlY3RvckFsbD8uKG4uYWRkQnV0dG9uU2VsZWN0b3IpPy5sZW5ndGg/P251bGwscm93Q291bnQ6aS5sZW5ndGgscm93RmllbGRLZXlzOmkubWFwKGU9Pm4uZmllbGRzLmZpbHRlcih0PT5lLnF1ZXJ5U2VsZWN0b3IodC5zZWxlY3RvcikpLm1hcChlPT5lLmtleSkpfX0pLC4uLm59KX1gXHJcbiAgICApXHJcbn1cclxuY2xhc3MgdiBleHRlbmRzIHMuQmFzZUZpbGxlciB7XHJcbiAgZ2V0RmllbGRIYW5kbGVycygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuVEVYVF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIG0uZmlsbERheWZvcmNlVGV4dEZpZWxkKShlLCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuREFURV06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIG0uZmlsbERheWZvcmNlRGF0ZUZpZWxkKShlLCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuU0VMRUNUXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgbS5maWxsRGF5Zm9yY2VTZWxlY3RGaWVsZCkoZSwgdCksXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICExXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbdS5GSUVMRF9UWVBFLkRST1BET1dOXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgbS5maWxsRGF5Zm9yY2VEcm9wZG93bkZpZWxkKShlLCB0LCB0aGlzLmFuc3dlcj8ucmVndWxhclxyXG4gICAgICAgICAgPy5Db3VudHJ5KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBtLmZpbGxEYXlmb3JjZUNoZWNrYm94RmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBkb0ZpbGxGb3JtKGUgPSAhMSkge1xyXG4gICAgaWYgKCgwLCBmLmdldERheWZvcmNlQXV0aFBhZ2VNb2RlKSgpKSByZXR1cm4gYXdhaXQgdGhpcy5maWxsQXV0aEZvcm0oZSk7XHJcbiAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVGaWxsRm9ybSgpO1xyXG4gICAgbGV0IHQgPSBhd2FpdCB0aGlzLmV4dHJhY3RGb3JtUnVsZXMoKTtcclxuICAgIHkoXCJpbml0aWFsLXJ1bGVzXCIsIHQpLCB0aGlzLnByb2dyZXNzVHJhY2tlci5zZXRGaWVsZHNSZXF1aXJlZFN0YXR1cyh0KTtcclxuICAgIGxldCByID0gYXdhaXQgdGhpcy5mZXRjaEZvcm1BbnN3ZXJzKHQsIGUpO1xyXG4gICAgaWYgKHkoXCJhbnN3ZXJzLWZldGNoZWRcIiwgdCwgdGhpcy5hbnN3ZXIsIHtcclxuICAgICAgICByZXF1ZXN0UmV0dXJuZWRFcnJvcjogXCJzdHJpbmdcIiA9PSB0eXBlb2YgclxyXG4gICAgICB9KSwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgcikgcmV0dXJuIHI7XHJcbiAgICB5KFwicmVzdW1lLWdhdGUtc3RhcnRcIiwgdCwgdGhpcy5hbnN3ZXIpO1xyXG4gICAgbGV0IG4gPSBhd2FpdCB0aGlzLnVwbG9hZFJlc3VtZUJlZm9yZVJlZ3VsYXJGaWVsZHMoKTtcclxuICAgIGlmICh5KFwicmVzdW1lLWdhdGUtcmVzdWx0XCIsIHQsIHRoaXMuYW5zd2VyLCB7XHJcbiAgICAgICAgcmVzdW1lVXBsb2FkZWQ6IG4sXHJcbiAgICAgICAgc3RvcHNCZWZvcmVFeHBlcmllbmNlRmlsbDogIW5cclxuICAgICAgfSksICFuKSByZXR1cm4gYXdhaXQgdGhpcy5maW5hbGl6ZUZpbGxGb3JtKCk7XHJcbiAgICBsZXQgbyA9IHRoaXMuYW5zd2VyLmVkdWNhdGlvbj8ubGVuZ3RoID8/IDAsXHJcbiAgICAgIGkgPSB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZT8ubGVuZ3RoID8/IDA7XHJcbiAgICBjb25zb2xlLmluZm8oXCJbRGF5Zm9yY2VdW0NvbXBvc2l0ZVNlY3Rpb25zXSByZWNvbmNpbGluZyBhZnRlciByZXN1bWUgdXBsb2FkXCIsIHtcclxuICAgICAgZWR1Y2F0aW9uQ291bnQ6IG8sXHJcbiAgICAgIHdvcmtFeHBlcmllbmNlQ291bnQ6IGlcclxuICAgIH0pLCBhd2FpdCAoMCwgbS5pbml0aWFsaXplRGF5Zm9yY2VDb21wb3NpdGVTZWN0aW9ucykobywgaSksIGNvbnNvbGUuaW5mbyhcclxuICAgICAgXCJbRGF5Zm9yY2VdW0NvbXBvc2l0ZVNlY3Rpb25zXSByZWNvbmNpbGlhdGlvbiBjb21wbGV0ZWRcIiwge1xyXG4gICAgICAgIGVkdWNhdGlvbkNvdW50OiBvLFxyXG4gICAgICAgIHdvcmtFeHBlcmllbmNlQ291bnQ6IGlcclxuICAgICAgfSksIGF3YWl0IHRoaXMuZmlsbFJlZ3VsYXJGaWVsZHModCk7XHJcbiAgICBsZXQgYSA9IHQubGVuZ3RoO1xyXG4gICAgY29uc29sZS5pbmZvKFwiW0RheWZvcmNlXVtDb25kaXRpb25hbEZpZWxkc10gc3RhcnRpbmcgZHluYW1pYyBydWxlIHJlLXNjYW5cIiwge1xyXG4gICAgICBpbml0aWFsUnVsZUNvdW50OiBhXHJcbiAgICB9KTtcclxuICAgIGxldCBsID0gYXdhaXQgdGhpcy5ydW5Db21ib1F1ZXN0aW9uQXV0b2ZpbGxJZk5lZWRlZCh0LCBlKTtcclxuICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBsID8gKHkoXCJkeW5hbWljLXJlc2Nhbi1mYWlsZWRcIiwgdCwgdGhpcy5hbnN3ZXIsIHtcclxuICAgICAgc3RvcHNCZWZvcmVFeHBlcmllbmNlRmlsbDogITBcclxuICAgIH0pLCBsKSA6ICh5KFwiZHluYW1pYy1yZXNjYW4tY29tcGxldGVkXCIsIHQgPSBsLCB0aGlzLmFuc3dlciksIGNvbnNvbGUuaW5mbyhcclxuICAgICAgICBcIltEYXlmb3JjZV1bQ29uZGl0aW9uYWxGaWVsZHNdIGNvbXBsZXRlZCBkeW5hbWljIHJ1bGUgcmUtc2NhblwiLCB7XHJcbiAgICAgICAgICBpbml0aWFsUnVsZUNvdW50OiBhLFxyXG4gICAgICAgICAgdG90YWxSdWxlQ291bnQ6IGwubGVuZ3RoXHJcbiAgICAgICAgfSksIGF3YWl0IHRoaXMuZmlsbEVkdWNhdGlvbkFuZEVtcGxveW1lbnQodCksIGF3YWl0IHRoaXMuZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKHQpLFxyXG4gICAgICBhd2FpdCB0aGlzLmZpbmFsaXplRmlsbEZvcm0oKSlcclxuICB9XHJcbiAgYXN5bmMgZmlsbEF1dGhGb3JtKGUpIHtcclxuICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUZpbGxGb3JtKCksIHRoaXMuYW5zd2VyID0ge1xyXG4gICAgICBlZHVjYXRpb246IFtdLFxyXG4gICAgICB3b3JrRXhwZXJpZW5jZTogW10sXHJcbiAgICAgIHNraWxsczogW10sXHJcbiAgICAgIHJlZ3VsYXI6IHt9XHJcbiAgICB9LCB0aGlzLnRpbWVUcmFjZS5yZXF1ZXN0U3RhcnRUaW1lID0gMCwgdGhpcy50aW1lVHJhY2UuZmlsbFN0YXJ0VGltZSA9IDA7XHJcbiAgICBsZXQgdCA9ICgwLCBmLmdldERheWZvcmNlQXV0aE5hbWVSdWxlcykoKTtcclxuICAgIGlmIChcInJlZ2lzdGVyXCIgPT09ICgwLCBmLmdldERheWZvcmNlQXV0aFBhZ2VNb2RlKSgpICYmIDIgIT09IHQubGVuZ3RoKVxyXG4gICAgcmV0dXJuIFwiRGF5Zm9yY2UgcmVnaXN0cmF0aW9uIGZvcm0gaXMgbm90IHJlYWR5LiBQbGVhc2Ugd2FpdCBmb3IgdGhlIG5hbWUgZmllbGRzIGFuZCB0cnkgYWdhaW4uXCI7XHJcbiAgICB0aGlzLnByb2dyZXNzVHJhY2tlci5zZXRGaWVsZHNSZXF1aXJlZFN0YXR1cyh0KTtcclxuICAgIGxldCBbciwgbl0gPSBhd2FpdCBQcm9taXNlLmFsbChbKDAsIG8uc2VuZFRvQmFja2dyb3VuZCkoe1xyXG4gICAgICBuYW1lOiBcImdldEF1dG9maWxsSW5mb1wiLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgZm9yY2VSZWZyZXNoOiAhMFxyXG4gICAgICB9XHJcbiAgICB9KS5jYXRjaCgoKSA9PiBudWxsKSwgKDAsIGMuZ2V0V29ya2RheVNpZ251cEluZm9ybWF0aW9uKSgpLmNhdGNoKCgpID0+IG51bGwpXSk7XHJcbiAgICAoMCwgYS5jaGVja3BvaW50KSgpO1xyXG4gICAgbGV0IGwgPSBhd2FpdCAoMCwgZi5maWxsRGF5Zm9yY2VBdXRoQ3JlZGVudGlhbHMpKHtcclxuICAgICAgZW1haWw6ICgwLCBpLnJlc29sdmVTaWdudXBSZWdpc3RyYXRpb25FbWFpbCkociksXHJcbiAgICAgIHBhc3N3b3JkOiBuPy5wYXNzd29yZCA/PyBcIlwiXHJcbiAgICB9KTtcclxuICAgIGlmICghbC5mb3VuZEZvcm0pXHJcbiAgICByZXR1cm4gXCJEYXlmb3JjZSBhY2NvdW50IGZvcm0gaXMgbm90IHJlYWR5LiBQbGVhc2Ugd2FpdCBmb3IgdGhlIGZvcm0gYW5kIHRyeSBhZ2Fpbi5cIjtcclxuICAgIGxldCBzID0ge1xyXG4gICAgICBlbWFpbDogXCJFbWFpbFwiLFxyXG4gICAgICBjb25maXJtRW1haWw6IFwiQ29uZmlybSBFbWFpbCBBZGRyZXNzXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlBhc3N3b3JkXCIsXHJcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgIH07XHJcbiAgICBmb3IgKGxldCBlIG9mIGwuZm91bmRSb2xlcykge1xyXG4gICAgICBsZXQgdCA9IHNbZV07XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMoe1xyXG4gICAgICAgICAgbGFiZWw6IHQsXHJcbiAgICAgICAgICByZXF1aXJlZDogITBcclxuICAgICAgICB9KSwgbC5maWxsZWRSb2xlcy5pbmNsdWRlcyhlKSB8fCBsLnNraXBwZWRFeGlzdGluZ1JvbGVzLmluY2x1ZGVzKGUpID8gdGhpc1xyXG4gICAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3ModCkgOiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyh0KVxyXG4gICAgfVxyXG4gICAgaWYgKHQubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgciA9IGF3YWl0IHRoaXMuZmV0Y2hGb3JtQW5zd2Vycyh0LCBlKTtcclxuICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIpIHJldHVybiByO1xyXG4gICAgICAoMCwgYS5jaGVja3BvaW50KSgpLCBhd2FpdCB0aGlzLmZpbGxSZWd1bGFyRmllbGRzKHQpXHJcbiAgICB9XHJcbiAgICBpZiAoXCJyZWdpc3RlclwiID09PSAoMCwgZi5nZXREYXlmb3JjZUF1dGhQYWdlTW9kZSkoKSkge1xyXG4gICAgICAoMCwgYS5jaGVja3BvaW50KSgpO1xyXG4gICAgICBsZXQgZSA9IFwiUHJpdmFjeSBTdGF0ZW1lbnQgYW5kIFRlcm1zIG9mIFVzZVwiO1xyXG4gICAgICB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzKHtcclxuICAgICAgICBsYWJlbDogZSxcclxuICAgICAgICByZXF1aXJlZDogITBcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCB0ID0gYXdhaXQgKDAsIGQuYWNjZXB0RGF5Zm9yY2VSZWdpc3RyYXRpb25BZ3JlZW1lbnRzKSgpO1xyXG4gICAgICAoMCwgYS5jaGVja3BvaW50KSgpLCB0ID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoZSkgOiB0aGlzXHJcbiAgICAgICAgLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZmluYWxpemVGaWxsRm9ybSgpXHJcbiAgfVxyXG4gIGFzeW5jIGV4dHJhY3RGb3JtUnVsZXMoKSB7XHJcbiAgICByZXR1cm4gKDAsIGYuZ2V0RGF5Zm9yY2VBdXRoUGFnZU1vZGUpKCkgPyAoMCwgZi5nZXREYXlmb3JjZUF1dGhOYW1lUnVsZXMpKCkgOiBhd2FpdCAoMCwgaFxyXG4gICAgICAuZ2V0UnVsZXMpKClcclxuICB9XHJcbiAgZ2V0U2l0ZU5hbWUoKSB7XHJcbiAgICByZXR1cm4gXCJkYXlmb3JjZVwiXHJcbiAgfVxyXG4gIGFzeW5jIGZldGNoRm9ybUFuc3dlcnMoZSwgdCkge1xyXG4gICAgbGV0IHIgPSBhd2FpdCB0aGlzLnJlcXVlc3RGb3JtQW5zd2VycygoMCwgcC5wcmVwYXJlRGF5Zm9yY2VBbnN3ZXJSZXF1ZXN0UnVsZXMpKGUpLCB0KTtcclxuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gcjtcclxuICAgIHIgJiYgKHRoaXMuYW5zd2VyID0gcilcclxuICB9XHJcbiAgYXN5bmMgdXBsb2FkUmVzdW1lQmVmb3JlUmVndWxhckZpZWxkcygpIHtcclxuICAgICgwLCBhLnVwZGF0ZUN1cnJlbnRGaWVsZCkoZyksIGNvbnNvbGUuaW5mbyhcIltEYXlmb3JjZV1bVXBsb2FkVGFza10gc3RhcnRpbmdcIiwge1xyXG4gICAgICBsYWJlbDogZ1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgZSA9IGF3YWl0ICgwLCBhLndpdGhTa2lwKSgoKSA9PiAoMCwgbS51cGxvYWRSZXN1bWUpKHRoaXMucmVzdW1lSW5mbywgdGhpc1xyXG4gICAgICAgIC5kaXNhYmxlVXBsb2FkUmVzdW1lLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzLCB0aGlzXHJcbiAgICAgICAgLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MpKTtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUuaW5mbyhcIltEYXlmb3JjZV1bVXBsb2FkVGFza10gY29tcGxldGVkXCIsIHtcclxuICAgICAgICBsYWJlbDogZyxcclxuICAgICAgICBjb21wbGV0ZWQ6IGVcclxuICAgICAgfSksIGVcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBhLlNraXBwZWRFcnJvcikgcmV0dXJuIGNvbnNvbGUuaW5mbyhcIltEYXlmb3JjZV1bVXBsb2FkVGFza10gc2tpcHBlZFwiLCB7XHJcbiAgICAgICAgbGFiZWw6IGdcclxuICAgICAgfSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGcpLCAhMDtcclxuICAgICAgdGhyb3cgZVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgKDAsIGEudXBkYXRlQ3VycmVudEZpZWxkKShudWxsKVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBoYW5kbGVSZXN1bWVVcGxvYWQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnVwbG9hZFJlc3VtZUJlZm9yZVJlZ3VsYXJGaWVsZHMoKVxyXG4gIH1cclxuICBhc3luYyBmaWxsRWR1Y2F0aW9uQW5kRW1wbG95bWVudChlKSB7XHJcbiAgICBhd2FpdCB0aGlzLmZpbGxDb25maWd1cmVkU2VjdGlvbldpdGhTa2lwKGguREFZRk9SQ0VfU0VDVElPTlMuZWR1Y2F0aW9uLCB0aGlzLmFuc3dlclxyXG4gICAgICAuZWR1Y2F0aW9uIHx8IFtdKSwgYXdhaXQgdGhpcy5maWxsQ29uZmlndXJlZFNlY3Rpb25XaXRoU2tpcChoLkRBWUZPUkNFX1NFQ1RJT05TXHJcbiAgICAgIC53b3JrRXhwZXJpZW5jZSwgdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2UgfHwgW10pXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxDb25maWd1cmVkU2VjdGlvbldpdGhTa2lwKGUsIHQpIHtcclxuICAgICgwLCBhLnVwZGF0ZUN1cnJlbnRGaWVsZCkoZS5sYWJlbCksIHkoXCJzZWN0aW9uLWZpbGwtc3RhcnRcIiwgbnVsbCwgdGhpcy5hbnN3ZXIsIHtcclxuICAgICAgc2VjdGlvblR5cGU6IGUudHlwZSxcclxuICAgICAgcmVjb3JkQ291bnQ6IHQubGVuZ3RoXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0ICgwLCBhLndpdGhTa2lwKSgoKSA9PiAoMCwgbS5maWxsQ29uZmlndXJlZFNlY3Rpb24pKGUsIHQsIHtcclxuICAgICAgICBvblNlY3Rpb25SZXN1bHRDaGFuZ2VkOiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVTZWN0aW9uUmVzdWx0XHJcbiAgICAgIH0pKTtcclxuICAgICAgbGV0IHIgPSAoMCwgbS5pc0RheWZvcmNlQ29uZmlndXJlZFNlY3Rpb25GaWxsZWQpKGUsIHQpO1xyXG4gICAgICB5KFwic2VjdGlvbi1maWxsLWNvbXBsZXRlZFwiLCBudWxsLCB0aGlzLmFuc3dlciwge1xyXG4gICAgICAgIHNlY3Rpb25UeXBlOiBlLnR5cGUsXHJcbiAgICAgICAgcmVjb3JkQ291bnQ6IHQubGVuZ3RoLFxyXG4gICAgICAgIGNvbW1pdHRlZDogclxyXG4gICAgICB9KSwgciAmJiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhlLmxhYmVsKVxyXG4gICAgfSBjYXRjaCAodCkge1xyXG4gICAgICBpZiAodCBpbnN0YW5jZW9mIGEuU2tpcHBlZEVycm9yKSB7XHJcbiAgICAgICAgeShcInNlY3Rpb24tZmlsbC1za2lwcGVkXCIsIG51bGwsIHRoaXMuYW5zd2VyLCB7XHJcbiAgICAgICAgICBzZWN0aW9uVHlwZTogZS50eXBlLFxyXG4gICAgICAgICAgcmVhc29uOiBcInVzZXItc2tpcHBlZFwiXHJcbiAgICAgICAgfSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGUubGFiZWwpO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHRocm93IHkoXCJzZWN0aW9uLWZpbGwtZmFpbGVkXCIsIG51bGwsIHRoaXMuYW5zd2VyLCB7XHJcbiAgICAgICAgc2VjdGlvblR5cGU6IGUudHlwZSxcclxuICAgICAgICByZWFzb246IHQgaW5zdGFuY2VvZiBFcnJvciA/IHQubmFtZSA6IHR5cGVvZiB0XHJcbiAgICAgIH0pLCB0XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAoMCwgYS51cGRhdGVDdXJyZW50RmllbGQpKG51bGwpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcyhlKSB7XHJcbiAgICAoMCwgbS5zeW5jQ292ZXJMZXR0ZXJSZXF1aXJlZFN0YXR1cykodGhpcy5wcm9ncmVzc1RyYWNrZXIucmVwbGFjZUZpZWxkUmVxdWlyZWRTdGF0dXMpLFxyXG4gICAgYXdhaXQgdGhpcy51cGxvYWRDb3ZlckxldHRlcldpdGhTa2lwKCksIGF3YWl0IHRoaXMuYmluZFN1Ym1pdEJ1dHRvblRyYWNraW5nKGUpXHJcbiAgfVxyXG4gIGFzeW5jIHVwbG9hZENvdmVyTGV0dGVyV2l0aFNraXAoKSB7XHJcbiAgICAoMCwgYS51cGRhdGVDdXJyZW50RmllbGQpKGIpLCBjb25zb2xlLmluZm8oXCJbRGF5Zm9yY2VdW1VwbG9hZFRhc2tdIHN0YXJ0aW5nXCIsIHtcclxuICAgICAgbGFiZWw6IGJcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgKDAsIGEud2l0aFNraXApKCgpID0+ICgwLCBtLnVwbG9hZENvdmVyTGV0dGVyKSh0aGlzLmNvdmVyTGV0dGVyLCB0aGlzXHJcbiAgICAgICAgLnByb2dyZXNzVHJhY2tlci5yZXBsYWNlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAudXBkYXRlRmlsbGVkUHJvZ3Jlc3MsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKSksIGNvbnNvbGUuaW5mbyhcclxuICAgICAgICBcIltEYXlmb3JjZV1bVXBsb2FkVGFza10gY29tcGxldGVkXCIsIHtcclxuICAgICAgICAgIGxhYmVsOiBiXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBhLlNraXBwZWRFcnJvcikge1xyXG4gICAgICAgIGxldCBlID0gKDAsIG0uZ2V0RGF5Zm9yY2VDb3ZlckxldHRlclN0YXR1cykoKTtcclxuICAgICAgICBjb25zb2xlLmluZm8oXCJbRGF5Zm9yY2VdW1VwbG9hZFRhc2tdIHNraXBwZWRcIiwge1xyXG4gICAgICAgICAgbGFiZWw6IGIsXHJcbiAgICAgICAgICBzdGF0dXM6IGVcclxuICAgICAgICB9KSwgZSAmJiB0aGlzLnByb2dyZXNzVHJhY2tlci5yZXBsYWNlRmllbGRSZXF1aXJlZFN0YXR1cyh7XHJcbiAgICAgICAgICBsYWJlbDogYixcclxuICAgICAgICAgIHJlcXVpcmVkOiBcInJlcXVpcmVkXCIgPT09IGVcclxuICAgICAgICB9KSwgXCJyZXF1aXJlZFwiID09PSBlICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGIpO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHRocm93IGVcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgICgwLCBhLnVwZGF0ZUN1cnJlbnRGaWVsZCkobnVsbClcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgY2hlY2tDb3ZlckxldHRlcigpIHtcclxuICAgIHRoaXMuYmluZENvdmVyTGV0dGVyU3RhdHVzT2JzZXJ2ZXIoKSwgdGhpcy5zeW5jQ292ZXJMZXR0ZXJTdGF0dXMoITApXHJcbiAgfVxyXG4gIHN5bmNDb3ZlckxldHRlclN0YXR1cyhlID0gITEpIHtcclxuICAgIGxldCB0ID0gKDAsIG0uZ2V0RGF5Zm9yY2VDb3ZlckxldHRlclN0YXR1cykoKTtcclxuICAgIChlIHx8IHQgIT09IHRoaXMubGFzdENvdmVyTGV0dGVyU3RhdHVzKSAmJiAodGhpcy5sYXN0Q292ZXJMZXR0ZXJTdGF0dXMgPSB0LCBjb25zb2xlLmluZm8oXHJcbiAgICAgIFwiW0RheWZvcmNlXVtDb3ZlckxldHRlcl0gZGV0ZWN0aW9uIHN0YXR1cyBjaGFuZ2VkXCIsIHtcclxuICAgICAgICBzdGF0dXM6IHRcclxuICAgICAgfSksICgwLCBsLnBvc3RDb3ZlckxldHRlclN0YXR1cykodCkpXHJcbiAgfVxyXG4gIHNjaGVkdWxlQ292ZXJMZXR0ZXJTdGF0dXNTeW5jKGUgPSAhMSkge1xyXG4gICAgdGhpcy5jb3ZlckxldHRlclN0YXR1c1RpbWVyICYmIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5jb3ZlckxldHRlclN0YXR1c1RpbWVyKSwgdGhpc1xyXG4gICAgICAuY292ZXJMZXR0ZXJTdGF0dXNUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnN5bmNDb3ZlckxldHRlclN0YXR1cyhlKVxyXG4gICAgICB9LCAxNTApXHJcbiAgfVxyXG4gIGJpbmRDb3ZlckxldHRlclN0YXR1c09ic2VydmVyKCkge1xyXG4gICAgaWYgKHRoaXMuY292ZXJMZXR0ZXJTdGF0dXNPYnNlcnZlcikge1xyXG4gICAgICB0aGlzLnNjaGVkdWxlQ292ZXJMZXR0ZXJTdGF0dXNTeW5jKCEwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgZSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgaWYgKCFlKSB7XHJcbiAgICAgIHRoaXMuc3luY0NvdmVyTGV0dGVyU3RhdHVzKCEwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLmNvdmVyTGV0dGVyU3RhdHVzT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihlID0+IHtcclxuICAgICAgbGV0IHQgPSBlLnNvbWUoZSA9PiB7XHJcbiAgICAgICAgbGV0IHQgPSBlLnRhcmdldDtcclxuICAgICAgICByZXR1cm4gISEodCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgdyh0KSkgfHwgWy4uLmUuYWRkZWROb2RlcywgLi4uZS5yZW1vdmVkTm9kZXNdXHJcbiAgICAgICAgICAuc29tZShlID0+IGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHcoZSkpXHJcbiAgICAgIH0pO1xyXG4gICAgICB0ICYmIHRoaXMuc2NoZWR1bGVDb3ZlckxldHRlclN0YXR1c1N5bmMoKVxyXG4gICAgfSksIHRoaXMuY292ZXJMZXR0ZXJTdGF0dXNPYnNlcnZlci5vYnNlcnZlKGUsIHtcclxuICAgICAgY2hpbGRMaXN0OiAhMCxcclxuICAgICAgc3VidHJlZTogITAsXHJcbiAgICAgIGF0dHJpYnV0ZXM6ICEwLFxyXG4gICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcImNsYXNzXCIsIFwic3R5bGVcIiwgXCJoaWRkZW5cIiwgXCJhcmlhLWhpZGRlblwiLCBcImFyaWEtcmVxdWlyZWRcIixcclxuICAgICAgICBcInJlcXVpcmVkXCIsIFwidGVzdC1pZFwiXHJcbiAgICAgIF1cclxuICAgIH0pLCB0aGlzLnNjaGVkdWxlQ292ZXJMZXR0ZXJTdGF0dXNTeW5jKCEwKVxyXG4gIH1cclxuICBnZXRTdWJtaXRCdXR0b25TZWxlY3RvcigpIHtcclxuICAgIHJldHVybiAnLi8vYnV0dG9uW0B0ZXN0LWlkPVwiYXBwbGljYXRpb24tbmV4dC1zdGVwXCJdIHwgLi8vYnV0dG9uW0B0ZXN0LWlkPVwiYXBwbGljYXRpb24tc3VibWl0XCJdJ1xyXG4gIH1cclxuICBnZXRTdWJtaXRUcmFja2luZ0RlbGVnYXRpb25Sb290KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50XHJcbiAgfVxyXG4gIHJlc29sdmVEZWxlZ2F0ZWRTdWJtaXRCdXR0b24oZSkge1xyXG4gICAgcmV0dXJuICgwLCBoLnJlc29sdmVEYXlmb3JjZVN1Ym1pdEJ1dHRvbkZyb21UYXJnZXQpKGUpXHJcbiAgfVxyXG4gIGFzeW5jIGdldEF1dG9maWxsU25hcHNob3QoZSkge1xyXG4gICAgcmV0dXJuIHRoaXMubGFzdEVkdWNhdGlvbkVtcGxveW1lbnRBdXRvZmlsbFNuYXBzaG90ID0gKDAsIGhcclxuICAgICAgLmdldERheWZvcmNlRWR1Y2F0aW9uRW1wbG95bWVudFNuYXBzaG90KSgpLCAoMCwgaC5nZXREYXlmb3JjZU5vcm1hbEZvcm1TbmFwc2hvdCkoZSlcclxuICB9XHJcbiAgYXN5bmMgZ2V0U3VibWl0U25hcHNob3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sYXN0RWR1Y2F0aW9uRW1wbG95bWVudFN1Ym1pdFNuYXBzaG90ID0gKDAsIGhcclxuICAgICAgLmdldERheWZvcmNlRWR1Y2F0aW9uRW1wbG95bWVudFNuYXBzaG90KSgpLCAoMCwgaC5nZXREYXlmb3JjZU5vcm1hbEZvcm1TbmFwc2hvdCkoKVxyXG4gIH1cclxuICBnZXRBZGRpdGlvbmFsQXV0b2ZpbGxTbmFwc2hvdERhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sYXN0RWR1Y2F0aW9uRW1wbG95bWVudEF1dG9maWxsU25hcHNob3RcclxuICB9XHJcbiAgZ2V0QWRkaXRpb25hbFN1Ym1pdFNuYXBzaG90RGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLmxhc3RFZHVjYXRpb25FbXBsb3ltZW50U3VibWl0U25hcHNob3RcclxuICB9XHJcbiAgc3VibWl0QXBwbGljYXRpb24oKSB7XHJcbiAgICAoMCwgZi5nZXREYXlmb3JjZUF1dGhQYWdlTW9kZSkoKSB8fCBoLmdldFN1Ym1pdEJ1dHRvbigpPy5jbGljaygpXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKC4uLmUpIHtcclxuICAgIHN1cGVyKC4uLmUpLCB0aGlzLmhhc0NvbWJvUXVlc3Rpb25zID0gITAsIHRoaXMuY292ZXJMZXR0ZXJTdGF0dXNPYnNlcnZlciA9IG51bGwsIHRoaXNcclxuICAgICAgLmNvdmVyTGV0dGVyU3RhdHVzVGltZXIgPSBudWxsLCB0aGlzLmxhc3RDb3ZlckxldHRlclN0YXR1cyA9IG51bGwsIHRoaXNcclxuICAgICAgLmxhc3RFZHVjYXRpb25FbXBsb3ltZW50QXV0b2ZpbGxTbmFwc2hvdCA9IHt9LCB0aGlzXHJcbiAgICAgIC5sYXN0RWR1Y2F0aW9uRW1wbG95bWVudFN1Ym1pdFNuYXBzaG90ID0ge30sIHRoaXMuZm9ybWF0QW5zd2VyID0gZSA9PiAoMCwgcC5mb3JtYXRBbnN3ZXIpKFxyXG4gICAgICAgIGUsIHtcclxuICAgICAgICAgIHByb2ZpbGVEYXRhOiB7XHJcbiAgICAgICAgICAgIGNvdW50cnk6IGUuY291bnRyeVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3KGUpIHtcclxuICByZXR1cm4gZS5tYXRjaGVzKCdzZWN0aW9uW3Rlc3QtaWQ9XCJjb3Zlci1sZXR0ZXItdXBsb2FkLXNlY3Rpb25cIl0nKSB8fCBlLm1hdGNoZXMoXHJcbiAgICBcIiNqb2JQb3N0aW5nQXBwbGljYXRpb25fZmlsZXNfY292ZXJMZXR0ZXJcIikgfHwgZS5tYXRjaGVzKFwiLmFudC11cGxvYWQtbGlzdFwiKSB8fCAhIWUuY2xvc2VzdChcclxuICAgICdzZWN0aW9uW3Rlc3QtaWQ9XCJjb3Zlci1sZXR0ZXItdXBsb2FkLXNlY3Rpb25cIl0nKSB8fCAhIWUucXVlcnlTZWxlY3RvcihcclxuICAgICdzZWN0aW9uW3Rlc3QtaWQ9XCJjb3Zlci1sZXR0ZXItdXBsb2FkLXNlY3Rpb25cIl0nKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5Zm9yY2UuMzc0NGVlNTMuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);