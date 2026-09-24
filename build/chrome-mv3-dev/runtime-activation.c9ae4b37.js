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
})({"5gPiT":[function(require,module,exports) {
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
    "port": 53398,
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\plasmo\\contents\\shared\\runtime-activation.ts",
    "bundleId": "c07e5713c9ae4b37",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 53397
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
var j = z(require("ff06d8448c49bf7a"));
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

},{"ff06d8448c49bf7a":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"6XBsO":[function(require,module,exports) {
// @ts-nocheck
/**
 * Decide whether the helper runtime should activate on this frame.
 * Team fork: tight activation \u2014 ATS / apply surfaces only.
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
    for (const sourceUrl of pageSourceUrls)for (const [keyword, atsDomain] of (0, _supportedSites.PAGE_SOURCE_ATS_LIST)){
        if (hostnameEqualsOrIsSubdomain(pageHostname, atsDomain)) continue;
        if (sourceUrlIndicatesAts(sourceUrl, keyword, atsDomain)) return true;
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
function isLinkedInJobSurface(url) {
    return hostnameEqualsOrIsSubdomain(url.hostname, "linkedin.com") && LINKEDIN_JOB_PATH_RE.test(url.pathname);
}
function hasSafeAtsQueryParam(url) {
    for (const param of (0, _supportedSites.QUERY_PARAM_LIST)){
        if (!url.searchParams.has(param)) continue;
        if (SAFE_QUERY_PARAMS.has(param)) return true;
        if (param === "selectedJobId" && WORKABLE_HOST_RE.test(url.hostname)) return true;
    }
    return false;
}
function isAgentProductHost(hostname) {
    return (0, _envResolver.agentDomains).some((domain)=>hostnameEqualsOrIsSubdomain(hostname, domain));
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

},{"~api/env-resolver":"eO4W3","~core/supported-sites":"eIatB","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"eO4W3":[function(require,module,exports) {
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

},{}],"eIatB":[function(require,module,exports) {
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

},{"~core/match-patterns":"h9ZkR","~core/site-registry.raw":"a7m29","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"h9ZkR":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"a7m29":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}]},["5gPiT","6XBsO"], "6XBsO", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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cS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtMjJhY2QyNjUxN2Y5MzRkMi5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInBsYXNtby9jb250ZW50cy9zaGFyZWQvcnVudGltZS1hY3RpdmF0aW9uLnRzIiwicGxhc21vL2FwaS9lbnYtcmVzb2x2ZXIudHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInBsYXNtby9jb3JlL3N1cHBvcnRlZC1zaXRlcy50cyIsInBsYXNtby9jb3JlL21hdGNoLXBhdHRlcm5zLnRzIiwicGxhc21vL2NvcmUvc2l0ZS1yZWdpc3RyeS5yYXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjo1MzM5OCxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxccGxhc21vXFxcXGNvbnRlbnRzXFxcXHNoYXJlZFxcXFxydW50aW1lLWFjdGl2YXRpb24udHNcIixcImJ1bmRsZUlkXCI6XCJjMDdlNTcxM2M5YWU0YjM3XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6NTMzOTd9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogRGVjaWRlIHdoZXRoZXIgdGhlIGhlbHBlciBydW50aW1lIHNob3VsZCBhY3RpdmF0ZSBvbiB0aGlzIGZyYW1lLlxuICogVGVhbSBmb3JrOiB0aWdodCBhY3RpdmF0aW9uIOKAlCBBVFMgLyBhcHBseSBzdXJmYWNlcyBvbmx5LlxuICovXG5cbmltcG9ydCB7IGFnZW50RG9tYWlucyB9IGZyb20gXCJ+YXBpL2Vudi1yZXNvbHZlclwiXG5pbXBvcnQge1xuICBDT05TVFJBSU5FRF9TSVRFX1JVTEVTLFxuICBJRlJBTUVfQ0hFQ0tfUEFUVEVSTixcbiAgUEFHRV9TT1VSQ0VfQVRTX0xJU1QsXG4gIFFVRVJZX1BBUkFNX0xJU1QsXG4gIFNVUFBPUlRfRE9NQUlOUyxcbiAgU1VQUE9SVF9QQVRURVJOUyxcbn0gZnJvbSBcIn5jb3JlL3N1cHBvcnRlZC1zaXRlc1wiXG5cbmNvbnN0IFBPU1RfQVBQTFlfUEFUSF9SRUdFWEVTID0gW1xuICBcImNvbmZpcm1hdGlvblwiLFxuICBcImFwcGx5Q29uZmlybWF0aW9uXCIsXG4gIFwiY2FyZWVycy9jaGF0Ym90XCIsXG4gIFwic3VjY2Vzcyg/OmZ1bCk/XCIsXG4gIFwidGhhbmtbXy1dP3lvdVwiLFxuICBcInRoYW5rc1wiLFxuICBcIlN1Y2Nlc3NmdWxSZWdpc3RyYXRpb25cIixcbl0ubWFwKChzZWdtZW50KSA9PiBuZXcgUmVnRXhwKGAvJHtzZWdtZW50fSg/PS98JClgLCBcImlcIikpXG5cbmNvbnN0IFNBRkVfUVVFUllfUEFSQU1TID0gbmV3IFNldChbXG4gIFwiZ2hfamlkXCIsXG4gIFwiZ2hfc3JjXCIsXG4gIFwiYXNoYnlfamlkXCIsXG4gIFwiTGV2ZXJBcHBJZFwiLFxuICBcImpvYnZpdGVpZnJhbWVcIixcbl0pXG5cbmNvbnN0IFdPUktBQkxFX0hPU1RfUkUgPSAvd29ya2FibGVcXC5jb20kL2lcbmNvbnN0IExJTktFRElOX0pPQl9QQVRIX1JFID1cbiAgL15cXC8oPzpqb2JzfGpvYnxlYXN5LWFwcGx5fGluXFwvW14vXStcXC9vdmVybGF5XFwvYXBwbHl8aGlyaW5nfHRhbGVudClcXGIvaVxuXG5mdW5jdGlvbiBob3N0bmFtZUVxdWFsc09ySXNTdWJkb21haW4oaG9zdG5hbWUsIGRvbWFpbikge1xuICByZXR1cm4gaG9zdG5hbWUgPT09IGRvbWFpbiB8fCBob3N0bmFtZS5lbmRzV2l0aChgLiR7ZG9tYWlufWApXG59XG5cbmZ1bmN0aW9uIGlzUG9zdEFwcGx5Q29uZmlybWF0aW9uUGF0aCh1cmwpIHtcbiAgcmV0dXJuIFBPU1RfQVBQTFlfUEFUSF9SRUdFWEVTLnNvbWUoKHJlKSA9PiByZS50ZXN0KHVybC5wYXRobmFtZSkpXG59XG5cbmZ1bmN0aW9uIHNpdGVSdWxlTWF0Y2hlc0hvc3QodXJsLCBob3N0bmFtZSwgcnVsZSkge1xuICByZXR1cm4gKFxuICAgIHJ1bGUuZG9tYWlucy5zb21lKChkb21haW4pID0+XG4gICAgICBob3N0bmFtZUVxdWFsc09ySXNTdWJkb21haW4oaG9zdG5hbWUsIGRvbWFpbiksXG4gICAgKSB8fCBydWxlLnBhdHRlcm5zLnNvbWUoKHBhdHRlcm4pID0+IHBhdHRlcm4uaW5jbHVkZXModXJsLmhyZWYpKVxuICApXG59XG5cbmZ1bmN0aW9uIHNpdGVSdWxlTWF0Y2hlc1BhdGgodXJsLCBydWxlKSB7XG4gIGNvbnN0IGZ1bGwgPSBgJHt1cmwucGF0aG5hbWV9JHt1cmwuc2VhcmNofSR7dXJsLmhhc2h9YFxuICByZXR1cm4gKFxuICAgIChydWxlLnBhdGhSZWdleD8udGVzdCh1cmwucGF0aG5hbWUpID8/IGZhbHNlKSB8fFxuICAgIChydWxlLnVybFJlZ2V4Py50ZXN0KGZ1bGwpID8/IGZhbHNlKVxuICApXG59XG5cbmZ1bmN0aW9uIGlzQ29uc3RyYWluZWRTaXRlQnV0V3JvbmdQYXRoKHVybCwgaG9zdG5hbWUpIHtcbiAgcmV0dXJuIENPTlNUUkFJTkVEX1NJVEVfUlVMRVMuc29tZShcbiAgICAocnVsZSkgPT5cbiAgICAgIHNpdGVSdWxlTWF0Y2hlc0hvc3QodXJsLCBob3N0bmFtZSwgcnVsZSkgJiZcbiAgICAgICFzaXRlUnVsZU1hdGNoZXNQYXRoKHVybCwgcnVsZSksXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3VwcG9ydGVkUnVudGltZUZyYW1lVXJsKGhyZWYpIHtcbiAgaWYgKCFocmVmKSByZXR1cm4gZmFsc2VcbiAgdHJ5IHtcbiAgICBpZiAoaXNQb3N0QXBwbHlDb25maXJtYXRpb25QYXRoKG5ldyBVUkwoaHJlZikpKSByZXR1cm4gZmFsc2VcbiAgfSBjYXRjaCB7XG4gICAgLyogaWdub3JlICovXG4gIH1cbiAgcmV0dXJuIElGUkFNRV9DSEVDS19QQVRURVJOLnNvbWUoKHRva2VuKSA9PiBocmVmLmluY2x1ZGVzKHRva2VuKSlcbn1cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIilcbn1cblxuZnVuY3Rpb24gc291cmNlVXJsSW5kaWNhdGVzQXRzKHNvdXJjZVVybCwga2V5d29yZCwgYXRzRG9tYWluKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3JjID0gbmV3IFVSTChzb3VyY2VVcmwpXG4gICAgaWYgKGhvc3RuYW1lRXF1YWxzT3JJc1N1YmRvbWFpbihzcmMuaG9zdG5hbWUsIGF0c0RvbWFpbikpIHJldHVybiB0cnVlXG4gICAgY29uc3QgaGF5ID0gYCR7c3JjLmhvc3RuYW1lfSR7c3JjLnBhdGhuYW1lfWAudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IG5lZWRsZSA9IGtleXdvcmQudG9Mb3dlckNhc2UoKVxuICAgIGlmIChuZWVkbGUuaW5jbHVkZXMoXCIuXCIpKSByZXR1cm4gaGF5LmluY2x1ZGVzKG5lZWRsZSlcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgIGAoPzpefFsuL18tXSkke2VzY2FwZVJlZ0V4cChuZWVkbGUpfSg/OlsuL18tXXwkKWAsXG4gICAgICBcImlcIixcbiAgICApLnRlc3QoaGF5KVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBwYWdlU291cmNlc0luZGljYXRlRm9yZWlnbkF0cyhwYWdlSG9zdG5hbWUsIHBhZ2VTb3VyY2VVcmxzKSB7XG4gIGZvciAoY29uc3Qgc291cmNlVXJsIG9mIHBhZ2VTb3VyY2VVcmxzKSB7XG4gICAgZm9yIChjb25zdCBba2V5d29yZCwgYXRzRG9tYWluXSBvZiBQQUdFX1NPVVJDRV9BVFNfTElTVCkge1xuICAgICAgaWYgKGhvc3RuYW1lRXF1YWxzT3JJc1N1YmRvbWFpbihwYWdlSG9zdG5hbWUsIGF0c0RvbWFpbikpIGNvbnRpbnVlXG4gICAgICBpZiAoc291cmNlVXJsSW5kaWNhdGVzQXRzKHNvdXJjZVVybCwga2V5d29yZCwgYXRzRG9tYWluKSkgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGlzU3VwcG9ydGVkVG9wTGV2ZWxBcHBsaWNhdGlvblVybCh1cmwpIHtcbiAgaWYgKGlzUG9zdEFwcGx5Q29uZmlybWF0aW9uUGF0aCh1cmwpKSByZXR1cm4gZmFsc2VcbiAgY29uc3QgaG9zdG5hbWUgPSB1cmwuaG9zdG5hbWVcbiAgaWYgKGlzQ29uc3RyYWluZWRTaXRlQnV0V3JvbmdQYXRoKHVybCwgaG9zdG5hbWUpKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIChcbiAgICBTVVBQT1JUX0RPTUFJTlMuc29tZSgoZG9tYWluKSA9PlxuICAgICAgaG9zdG5hbWVFcXVhbHNPcklzU3ViZG9tYWluKGhvc3RuYW1lLCBkb21haW4pLFxuICAgICkgfHxcbiAgICBTVVBQT1JUX1BBVFRFUk5TLnNvbWUoKHBhdHRlcm4pID0+IHBhdHRlcm4uaW5jbHVkZXModXJsLmhyZWYpKSB8fFxuICAgIENPTlNUUkFJTkVEX1NJVEVfUlVMRVMuc29tZShcbiAgICAgIChydWxlKSA9PlxuICAgICAgICBzaXRlUnVsZU1hdGNoZXNIb3N0KHVybCwgaG9zdG5hbWUsIHJ1bGUpICYmXG4gICAgICAgIHNpdGVSdWxlTWF0Y2hlc1BhdGgodXJsLCBydWxlKSxcbiAgICApXG4gIClcbn1cblxuZnVuY3Rpb24gaGFzU3VwcG9ydGVkRW1iZWRkZWRGcmFtZShpZnJhbWVVcmxzKSB7XG4gIHJldHVybiBpZnJhbWVVcmxzLnNvbWUoKGlmcmFtZVVybCkgPT4gaXNTdXBwb3J0ZWRSdW50aW1lRnJhbWVVcmwoaWZyYW1lVXJsKSlcbn1cblxuZnVuY3Rpb24gaXNMaW5rZWRJbkpvYlN1cmZhY2UodXJsKSB7XG4gIHJldHVybiAoXG4gICAgaG9zdG5hbWVFcXVhbHNPcklzU3ViZG9tYWluKHVybC5ob3N0bmFtZSwgXCJsaW5rZWRpbi5jb21cIikgJiZcbiAgICBMSU5LRURJTl9KT0JfUEFUSF9SRS50ZXN0KHVybC5wYXRobmFtZSlcbiAgKVxufVxuXG5mdW5jdGlvbiBoYXNTYWZlQXRzUXVlcnlQYXJhbSh1cmwpIHtcbiAgZm9yIChjb25zdCBwYXJhbSBvZiBRVUVSWV9QQVJBTV9MSVNUKSB7XG4gICAgaWYgKCF1cmwuc2VhcmNoUGFyYW1zLmhhcyhwYXJhbSkpIGNvbnRpbnVlXG4gICAgaWYgKFNBRkVfUVVFUllfUEFSQU1TLmhhcyhwYXJhbSkpIHJldHVybiB0cnVlXG4gICAgaWYgKHBhcmFtID09PSBcInNlbGVjdGVkSm9iSWRcIiAmJiBXT1JLQUJMRV9IT1NUX1JFLnRlc3QodXJsLmhvc3RuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGlzQWdlbnRQcm9kdWN0SG9zdChob3N0bmFtZSkge1xuICByZXR1cm4gYWdlbnREb21haW5zLnNvbWUoKGRvbWFpbikgPT5cbiAgICBob3N0bmFtZUVxdWFsc09ySXNTdWJkb21haW4oaG9zdG5hbWUsIGRvbWFpbiksXG4gIClcbn1cblxuZXhwb3J0IHR5cGUgUnVudGltZUFjdGl2YXRpb25SZWFzb24gPVxuICB8IFwiam9icmlnaHRfZG9tYWluXCJcbiAgfCBcImxpbmtlZGluX2RvbWFpblwiXG4gIHwgXCJzdXBwb3J0ZWRfZnJhbWVfdXJsXCJcbiAgfCBcInN1cHBvcnRlZF90b3BfdXJsXCJcbiAgfCBcInN1cHBvcnRlZF9xdWVyeV9wYXJhbVwiXG4gIHwgXCJzdXBwb3J0ZWRfcGFnZV9zb3VyY2VcIlxuICB8IFwic3VwcG9ydGVkX2VtYmVkZGVkX2ZyYW1lXCJcbiAgfCBcImV4dGVuc2lvbl9pY29uXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJ1bnRpbWVBY3RpdmF0aW9uUmVhc29uKHtcbiAgaHJlZixcbiAgaXNUb3BGcmFtZSxcbiAgaWZyYW1lVXJscyA9IFtdLFxuICBwYWdlU291cmNlVXJscyA9IFtdLFxufSk6IFJ1bnRpbWVBY3RpdmF0aW9uUmVhc29uIHwgbnVsbCB7XG4gIGxldCB1cmxcbiAgdHJ5IHtcbiAgICB1cmwgPSBuZXcgVVJMKGhyZWYpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAoaXNBZ2VudFByb2R1Y3RIb3N0KHVybC5ob3N0bmFtZSkpIHtcbiAgICByZXR1cm4gXCJqb2JyaWdodF9kb21haW5cIlxuICB9XG4gIGlmIChpc0xpbmtlZEluSm9iU3VyZmFjZSh1cmwpKSB7XG4gICAgcmV0dXJuIFwibGlua2VkaW5fZG9tYWluXCJcbiAgfVxuICBpZiAoIWlzVG9wRnJhbWUpIHtcbiAgICByZXR1cm4gaXNTdXBwb3J0ZWRSdW50aW1lRnJhbWVVcmwodXJsLmhyZWYpID8gXCJzdXBwb3J0ZWRfZnJhbWVfdXJsXCIgOiBudWxsXG4gIH1cbiAgaWYgKGlzU3VwcG9ydGVkVG9wTGV2ZWxBcHBsaWNhdGlvblVybCh1cmwpKSB7XG4gICAgcmV0dXJuIFwic3VwcG9ydGVkX3RvcF91cmxcIlxuICB9XG4gIGlmIChcbiAgICAhaXNDb25zdHJhaW5lZFNpdGVCdXRXcm9uZ1BhdGgodXJsLCB1cmwuaG9zdG5hbWUpICYmXG4gICAgaGFzU2FmZUF0c1F1ZXJ5UGFyYW0odXJsKVxuICApIHtcbiAgICByZXR1cm4gXCJzdXBwb3J0ZWRfcXVlcnlfcGFyYW1cIlxuICB9XG4gIGlmIChwYWdlU291cmNlc0luZGljYXRlRm9yZWlnbkF0cyh1cmwuaG9zdG5hbWUsIHBhZ2VTb3VyY2VVcmxzKSkge1xuICAgIHJldHVybiBcInN1cHBvcnRlZF9wYWdlX3NvdXJjZVwiXG4gIH1cbiAgaWYgKGhhc1N1cHBvcnRlZEVtYmVkZGVkRnJhbWUoaWZyYW1lVXJscykpIHtcbiAgICByZXR1cm4gXCJzdXBwb3J0ZWRfZW1iZWRkZWRfZnJhbWVcIlxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2YXRpb25SZWFzb25Gcm9tRWxlbWVudChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gaXNTdXBwb3J0ZWRSdW50aW1lRnJhbWVVcmwoZWxlbWVudC5zcmMpXG4gICAgICA/IFwic3VwcG9ydGVkX2VtYmVkZGVkX2ZyYW1lXCJcbiAgICAgIDogbnVsbFxuICB9XG4gIGlmIChcbiAgICBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNjcmlwdEVsZW1lbnQgfHxcbiAgICBlbGVtZW50IGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50XG4gICkge1xuICAgIGNvbnN0IHNvdXJjZVVybCA9XG4gICAgICBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNjcmlwdEVsZW1lbnQgPyBlbGVtZW50LnNyYyA6IGVsZW1lbnQuaHJlZlxuICAgIGlmIChwYWdlU291cmNlc0luZGljYXRlRm9yZWlnbkF0cyh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUsIFtzb3VyY2VVcmxdKSkge1xuICAgICAgcmV0dXJuIFwic3VwcG9ydGVkX3BhZ2Vfc291cmNlXCJcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZhdGlvblJlYXNvbkZyb21Ob2RlKG5vZGUpIHtcbiAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSByZXR1cm4gbnVsbFxuICBjb25zdCBkaXJlY3QgPSBnZXRBY3RpdmF0aW9uUmVhc29uRnJvbUVsZW1lbnQobm9kZSlcbiAgaWYgKGRpcmVjdCkgcmV0dXJuIGRpcmVjdFxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUucXVlcnlTZWxlY3RvckFsbChcbiAgICBcImlmcmFtZVtzcmNdLCBzY3JpcHRbc3JjXSwgbGlua1tocmVmXVwiLFxuICApKSB7XG4gICAgY29uc3QgcmVhc29uID0gZ2V0QWN0aXZhdGlvblJlYXNvbkZyb21FbGVtZW50KGNoaWxkKVxuICAgIGlmIChyZWFzb24pIHJldHVybiByZWFzb25cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZVJ1bnRpbWVBY3RpdmF0aW9uU2lnbmFscyhvbkFjdGl2YXRlZCkge1xuICBpZiAoXG4gICAgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09IFwidW5kZWZpbmVkXCIgfHxcbiAgICB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgfHxcbiAgICB3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZiB8fFxuICAgICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBsZXQgb2JzZXJ2ZXIgPSBudWxsXG4gIGNvbnN0IGFjdGl2YXRlID0gKHJlYXNvbikgPT4ge1xuICAgIG9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICBvYnNlcnZlciA9IG51bGxcbiAgICBvbkFjdGl2YXRlZChyZWFzb24pXG4gIH1cblxuICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICAgIGNvbnN0IHJlYXNvbiA9IGdldEFjdGl2YXRpb25SZWFzb25Gcm9tTm9kZShtdXRhdGlvbi50YXJnZXQpXG4gICAgICAgIGlmIChyZWFzb24pIHtcbiAgICAgICAgICBhY3RpdmF0ZShyZWFzb24pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgYWRkZWQgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xuICAgICAgICBjb25zdCByZWFzb24gPSBnZXRBY3RpdmF0aW9uUmVhc29uRnJvbU5vZGUoYWRkZWQpXG4gICAgICAgIGlmIChyZWFzb24pIHtcbiAgICAgICAgICBhY3RpdmF0ZShyZWFzb24pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wic3JjXCIsIFwiaHJlZlwiXSxcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgfSlcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIG9ic2VydmVyPy5kaXNjb25uZWN0KClcbiAgICBvYnNlcnZlciA9IG51bGxcbiAgfVxufVxuIiwiLyoqXG4gKiBFbnZpcm9ubWVudCAvIGhvc3QgY29uZmlnIGZvciB0aGUgdGVhbSBmb3JrLlxuICogT3ZlcnJpZGUgdmlhIC5lbnYgKFBMQVNNT19QVUJMSUNfKikuXG4gKlxuICogQXV0b2ZpbGwgcHJvZmlsZSBkYXRhIGNvbWVzIGZyb20gdGhlIFRlYW0gQXV0b2ZpbGwgSHViICh0ZWFtLXNpdGUpLFxuICogbm90IEpvYnJpZ2h0IGNsb3VkIOKAlCBzZWUgfmFwaS90ZWFtLWNsaWVudCBhbmQgZXh0ZW5zaW9uIE9wdGlvbnMuXG4gKi9cblxuY29uc3QgUFJPRF9IVUIgPSBcImh0dHBzOi8vam9icmlnaHQtdGVhbS1zaXRlLnZlcmNlbC5hcHBcIlxuY29uc3QgREVWX0hVQiA9IFwiaHR0cDovL2xvY2FsaG9zdDozMjEwXCJcblxuZXhwb3J0IGNvbnN0IFRFQU1fU0lURV9VUkwgPVxuICBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX1RFQU1fU0lURV9VUkwgPz8gUFJPRF9IVUJcblxuLyoqIEh1YiBVUkwgZm9yIHRoZSBjdXJyZW50IGJ1aWxkOiBsb2NhbGhvc3QgaW4gcGxhc21vIGRldiwgcHJvZCBVUkwgaW4gYnVpbGRzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEh1YlVybCgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHJldHVybiBERVZfSFVCXG4gIHJldHVybiBURUFNX1NJVEVfVVJMIHx8IFBST0RfSFVCXG59XG5cbi8qKiBAZGVwcmVjYXRlZCBQcmVmZXIgVEVBTV9TSVRFX1VSTCDigJQga2VwdCBmb3Igb2xkZXIgc3R1YnMgKi9cbmV4cG9ydCBjb25zdCBBUElfRE9NQUlOID1cbiAgcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19BUElfRE9NQUlOID8/IFRFQU1fU0lURV9VUkxcblxuZXhwb3J0IGNvbnN0IEhPU1RfRE9NQUlOID1cbiAgcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19IT1NUX0RPTUFJTiA/PyBURUFNX1NJVEVfVVJMXG5cbmV4cG9ydCBjb25zdCBDT09LSUVfRE9NQUlOID1cbiAgcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19DT09LSUVfRE9NQUlOID8/IFwibG9jYWxob3N0XCJcblxuLyoqIFRlYW0gaHViIGhvc3Qgb25seSDigJQgZG8gTk9UIGluY2x1ZGUgbG9jYWxob3N0ICh3b3VsZCBhY3RpdmF0ZSBvbiBldmVyeSBsb2NhbCBhcHApLiAqL1xuZXhwb3J0IGNvbnN0IGFnZW50RG9tYWlucyA9IFtcImpvYnJpZ2h0LXRlYW0tc2l0ZS52ZXJjZWwuYXBwXCJdIGFzIGNvbnN0XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCIvKipcbiAqIFN1cHBvcnRlZCBBVFMgc2l0ZSByZWdpc3RyeSArIGRlcml2ZWQgbGlzdHMuXG4gKiBSZWdpc3RyeSBkYXRhIGxpdmVzIGluIHNpdGUtcmVnaXN0cnkucmF3LmpzIChleHRyYWN0ZWQgZnJvbSBKb2JyaWdodCB2MS4yMy4wKS5cbiAqL1xuXG5pbXBvcnQgeyBNYXRjaFBhdHRlcm4gfSBmcm9tIFwifmNvcmUvbWF0Y2gtcGF0dGVybnNcIlxuaW1wb3J0IHsgU0lURV9SRUdJU1RSWSBhcyBSQVdfUkVHSVNUUlkgfSBmcm9tIFwifmNvcmUvc2l0ZS1yZWdpc3RyeS5yYXdcIlxuXG5leHBvcnQgdHlwZSBTaXRlRGVmaW5pdGlvbiA9IHtcbiAgZG9tYWlucz86IHN0cmluZ1tdXG4gIHBhdHRlcm5zPzogc3RyaW5nW11cbiAgaWZyYW1lRG9tYWlucz86IHN0cmluZ1tdXG4gIHF1ZXJ5UGFyYW1zPzogc3RyaW5nW11cbiAgcGF0aFJlZ2V4Pzogc3RyaW5nXG4gIHVybFJlZ2V4Pzogc3RyaW5nXG4gIHBhZ2VTb3VyY2VLZXl3b3JkPzogc3RyaW5nXG4gIHBhZ2VTb3VyY2VEb21haW4/OiBzdHJpbmdcbiAgaWZyYW1lT25seT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IFNJVEVfUkVHSVNUUlkgPSBSQVdfUkVHSVNUUlkgYXMgUmVjb3JkPHN0cmluZywgU2l0ZURlZmluaXRpb24+XG5cbmV4cG9ydCBjb25zdCBQSU5QT0lOVEhRX0NBUkVFUlNfQ0ROID0gXCJkMm41aWVkOTRtYXpvcC5jbG91ZGZyb250Lm5ldFwiXG5leHBvcnQgY29uc3QgRUlHSFRGT0xEX0NBUkVFUkhVQl9KT0JfUEFUSF9SRUdFWF9TT1VSQ0UgPVxuICBcIl4vY2FyZWVyaHViL2V4cGxvcmUvam9icy8oPyFhcHBseS8/JClbXi8/I10rLz8kXCJcblxuY29uc3QgZWlnaHRmb2xkQ2FyZWVySHViSm9iUGF0aFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgRUlHSFRGT0xEX0NBUkVFUkhVQl9KT0JfUEFUSF9SRUdFWF9TT1VSQ0VcbilcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWlnaHRmb2xkQ2FyZWVySHViSm9iUGF0aChwYXRobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBlaWdodGZvbGRDYXJlZXJIdWJKb2JQYXRoUmVnZXgudGVzdChwYXRobmFtZSlcbn1cblxuZnVuY3Rpb24gaG9zdG5hbWVGcm9tTWF0Y2hQYXR0ZXJuKHBhdHRlcm46IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBtYXRjaCA9IC9eW146XSs6XFwvXFwvKFteL10rKS8uZXhlYyhwYXR0ZXJuKVxuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbFxuICBjb25zdCBob3N0ID0gbWF0Y2hbMV1cbiAgaWYgKCFob3N0IHx8IGhvc3QgPT09IFwiKlwiKSByZXR1cm4gbnVsbFxuICByZXR1cm4gaG9zdC5zdGFydHNXaXRoKFwiKi5cIikgPyBob3N0LnNsaWNlKDIpIDogaG9zdFxufVxuXG5jb25zdCB1bmNvbnN0cmFpbmVkU2l0ZXMgPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpLmZpbHRlcihcbiAgKHNpdGUpID0+ICFzaXRlLnBhdGhSZWdleCAmJiAhc2l0ZS51cmxSZWdleFxuKVxuXG5leHBvcnQgY29uc3QgU1VQUE9SVF9ET01BSU5TID0gdW5jb25zdHJhaW5lZFNpdGVzLmZsYXRNYXAoXG4gIChzaXRlKSA9PiBzaXRlLmRvbWFpbnMgPz8gW11cbilcblxuZXhwb3J0IGNvbnN0IFNVUFBPUlRfUEFUVEVSTlMgPSB1bmNvbnN0cmFpbmVkU2l0ZXNcbiAgLmZsYXRNYXAoKHNpdGUpID0+IHNpdGUucGF0dGVybnMgPz8gW10pXG4gIC5tYXAoKHBhdHRlcm4pID0+IG5ldyBNYXRjaFBhdHRlcm4ocGF0dGVybikpXG5cbmV4cG9ydCBjb25zdCBTVVBQT1JUX0hPU1RTID0gQXJyYXkuZnJvbShcbiAgbmV3IFNldChcbiAgICBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpLmZsYXRNYXAoKHNpdGUpID0+IFtcbiAgICAgIC4uLihzaXRlLmRvbWFpbnMgPz8gW10pLFxuICAgICAgLi4uKHNpdGUucGF0dGVybnMgPz8gW10pXG4gICAgICAgIC5tYXAoaG9zdG5hbWVGcm9tTWF0Y2hQYXR0ZXJuKVxuICAgICAgICAuZmlsdGVyKChob3N0KTogaG9zdCBpcyBzdHJpbmcgPT4gaG9zdCAhPT0gbnVsbClcbiAgICBdKVxuICApXG4pXG5cbmV4cG9ydCB0eXBlIENvbnN0cmFpbmVkU2l0ZVJ1bGUgPSB7XG4gIGRvbWFpbnM6IHN0cmluZ1tdXG4gIHBhdHRlcm5zOiBNYXRjaFBhdHRlcm5bXVxuICBwYXRoUmVnZXg/OiBSZWdFeHBcbiAgdXJsUmVnZXg/OiBSZWdFeHBcbn1cblxuZXhwb3J0IGNvbnN0IENPTlNUUkFJTkVEX1NJVEVfUlVMRVM6IENvbnN0cmFpbmVkU2l0ZVJ1bGVbXSA9IE9iamVjdC52YWx1ZXMoXG4gIFNJVEVfUkVHSVNUUllcbilcbiAgLmZpbHRlcihcbiAgICAoc2l0ZSkgPT5cbiAgICAgICh0eXBlb2Ygc2l0ZS5wYXRoUmVnZXggPT09IFwic3RyaW5nXCIgJiYgc2l0ZS5wYXRoUmVnZXgubGVuZ3RoID4gMCkgfHxcbiAgICAgICh0eXBlb2Ygc2l0ZS51cmxSZWdleCA9PT0gXCJzdHJpbmdcIiAmJiBzaXRlLnVybFJlZ2V4Lmxlbmd0aCA+IDApXG4gIClcbiAgLm1hcCgoc2l0ZSkgPT4gKHtcbiAgICBkb21haW5zOiBzaXRlLmRvbWFpbnMgPz8gW10sXG4gICAgcGF0dGVybnM6IChzaXRlLnBhdHRlcm5zID8/IFtdKS5tYXAoKHBhdHRlcm4pID0+IG5ldyBNYXRjaFBhdHRlcm4ocGF0dGVybikpLFxuICAgIHBhdGhSZWdleDogc2l0ZS5wYXRoUmVnZXggPyBuZXcgUmVnRXhwKHNpdGUucGF0aFJlZ2V4KSA6IHVuZGVmaW5lZCxcbiAgICB1cmxSZWdleDogc2l0ZS51cmxSZWdleCA/IG5ldyBSZWdFeHAoc2l0ZS51cmxSZWdleCkgOiB1bmRlZmluZWRcbiAgfSkpXG5cbmV4cG9ydCBjb25zdCBJRlJBTUVfQ0hFQ0tfUEFUVEVSTiA9IE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSkuZmxhdE1hcChcbiAgKHNpdGUpID0+IHNpdGUuaWZyYW1lRG9tYWlucyA/PyBbXVxuKVxuXG5leHBvcnQgY29uc3QgUEFHRV9TT1VSQ0VfQVRTX0xJU1QgPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpXG4gIC5maWx0ZXIoKHNpdGUpID0+IHNpdGUucGFnZVNvdXJjZUtleXdvcmQgJiYgc2l0ZS5wYWdlU291cmNlRG9tYWluKVxuICAubWFwKFxuICAgIChzaXRlKSA9PlxuICAgICAgW3NpdGUucGFnZVNvdXJjZUtleXdvcmQhLCBzaXRlLnBhZ2VTb3VyY2VEb21haW4hXSBhcyBbc3RyaW5nLCBzdHJpbmddXG4gIClcblxuZXhwb3J0IGNvbnN0IElGUkFNRV9PTkxZX0RPTUFJTlMgPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpXG4gIC5maWx0ZXIoKHNpdGUpID0+IHNpdGUuaWZyYW1lT25seSlcbiAgLmZsYXRNYXAoKHNpdGUpID0+IHNpdGUuZG9tYWlucyA/PyBbXSlcblxuZXhwb3J0IGNvbnN0IFFVRVJZX1BBUkFNX0xJU1QgPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpLmZsYXRNYXAoXG4gIChzaXRlKSA9PiBzaXRlLnF1ZXJ5UGFyYW1zID8/IFtdXG4pXG4iLCIvKipcbiAqIE1pbmltYWwgQ2hyb21lIG1hdGNoLXBhdHRlcm4gaW1wbGVtZW50YXRpb24gZm9yIHN1cHBvcnRlZC1zaXRlcy5cbiAqIChQb3J0ZWQgc3Vic2V0IG9mIEB3ZWJleHQtY29yZS9tYXRjaC1wYXR0ZXJucy4pXG4gKi9cblxuZXhwb3J0IGNsYXNzIEludmFsaWRNYXRjaFBhdHRlcm4gZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm46IHN0cmluZywgcmVhc29uOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgSW52YWxpZCBtYXRjaCBwYXR0ZXJuIFwiJHtwYXR0ZXJufVwiOiAke3JlYXNvbn1gKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaFBhdHRlcm4ge1xuICBzdGF0aWMgUFJPVE9DT0xTID0gW1wiaHR0cFwiLCBcImh0dHBzXCIsIFwiZmlsZVwiLCBcImZ0cFwiLCBcInVyblwiXSBhcyBjb25zdFxuXG4gIGlzQWxsVXJscyA9IGZhbHNlXG4gIHByb3RvY29sTWF0Y2hlczogc3RyaW5nW10gPSBbXVxuICBob3N0bmFtZU1hdGNoID0gXCIqXCJcbiAgcGF0aG5hbWVNYXRjaCA9IFwiKlwiXG5cbiAgY29uc3RydWN0b3IocGF0dGVybjogc3RyaW5nKSB7XG4gICAgaWYgKHBhdHRlcm4gPT09IFwiPGFsbF91cmxzPlwiKSB7XG4gICAgICB0aGlzLmlzQWxsVXJscyA9IHRydWVcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gWy4uLk1hdGNoUGF0dGVybi5QUk9UT0NPTFNdXG4gICAgICB0aGlzLmhvc3RuYW1lTWF0Y2ggPSBcIipcIlxuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gXCIqXCJcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IC8oLiopOlxcL1xcLyguKj8pKFxcLy4qKS8uZXhlYyhwYXR0ZXJuKVxuICAgIGlmIChwYXJzZWQgPT0gbnVsbCkgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4ocGF0dGVybiwgXCJJbmNvcnJlY3QgZm9ybWF0XCIpXG5cbiAgICBjb25zdCBbLCBwcm90b2NvbCwgaG9zdG5hbWUsIHBhdGhuYW1lXSA9IHBhcnNlZFxuXG4gICAgaWYgKFxuICAgICAgIU1hdGNoUGF0dGVybi5QUk9UT0NPTFMuaW5jbHVkZXMocHJvdG9jb2wgYXMgKHR5cGVvZiBNYXRjaFBhdHRlcm4uUFJPVE9DT0xTKVtudW1iZXJdKSAmJlxuICAgICAgcHJvdG9jb2wgIT09IFwiKlwiXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihcbiAgICAgICAgcGF0dGVybixcbiAgICAgICAgYCR7cHJvdG9jb2x9IG5vdCBhIHZhbGlkIHByb3RvY29sICgke01hdGNoUGF0dGVybi5QUk9UT0NPTFMuam9pbihcIiwgXCIpfSlgXG4gICAgICApXG4gICAgfVxuICAgIGlmIChob3N0bmFtZS5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkTWF0Y2hQYXR0ZXJuKHBhdHRlcm4sIFwiSG9zdG5hbWUgY2Fubm90IGluY2x1ZGUgYSBwb3J0XCIpXG4gICAgfVxuICAgIGlmIChcbiAgICAgIGhvc3RuYW1lLmluY2x1ZGVzKFwiKlwiKSAmJlxuICAgICAgaG9zdG5hbWUubGVuZ3RoID4gMSAmJlxuICAgICAgIWhvc3RuYW1lLnN0YXJ0c1dpdGgoXCIqLlwiKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4oXG4gICAgICAgIHBhdHRlcm4sXG4gICAgICAgIFwiSWYgdXNpbmcgYSB3aWxkY2FyZCAoKiksIGl0IG11c3QgZ28gYXQgdGhlIHN0YXJ0IG9mIHRoZSBob3N0bmFtZVwiXG4gICAgICApXG4gICAgfVxuXG4gICAgdGhpcy5wcm90b2NvbE1hdGNoZXMgPSBwcm90b2NvbCA9PT0gXCIqXCIgPyBbXCJodHRwXCIsIFwiaHR0cHNcIl0gOiBbcHJvdG9jb2xdXG4gICAgdGhpcy5ob3N0bmFtZU1hdGNoID0gaG9zdG5hbWVcbiAgICB0aGlzLnBhdGhuYW1lTWF0Y2ggPSBwYXRobmFtZVxuICB9XG5cbiAgaW5jbHVkZXMoaW5wdXQ6IHN0cmluZyB8IFVSTCB8IExvY2F0aW9uKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNBbGxVcmxzKSByZXR1cm4gdHJ1ZVxuICAgIGNvbnN0IHVybCA9XG4gICAgICB0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCJcbiAgICAgICAgPyBuZXcgVVJMKGlucHV0KVxuICAgICAgICA6IGlucHV0IGluc3RhbmNlb2YgTG9jYXRpb25cbiAgICAgICAgICA/IG5ldyBVUkwoaW5wdXQuaHJlZilcbiAgICAgICAgICA6IGlucHV0XG4gICAgcmV0dXJuIHRoaXMucHJvdG9jb2xNYXRjaGVzLnNvbWUoKHByb3RvY29sKSA9PiB7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cFwiKSByZXR1cm4gdGhpcy5pc0h0dHBNYXRjaCh1cmwpXG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cHNcIikgcmV0dXJuIHRoaXMuaXNIdHRwc01hdGNoKHVybClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGlzSHR0cE1hdGNoKHVybDogVVJMKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybClcbiAgfVxuXG4gIHByaXZhdGUgaXNIdHRwc01hdGNoKHVybDogVVJMKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gXCJodHRwczpcIiAmJiB0aGlzLmlzSG9zdFBhdGhNYXRjaCh1cmwpXG4gIH1cblxuICBwcml2YXRlIGlzSG9zdFBhdGhNYXRjaCh1cmw6IFVSTCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5ob3N0bmFtZU1hdGNoIHx8ICF0aGlzLnBhdGhuYW1lTWF0Y2gpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IGhvc3RSZWdleGVzID0gW1xuICAgICAgdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5ob3N0bmFtZU1hdGNoKSxcbiAgICAgIHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMuaG9zdG5hbWVNYXRjaC5yZXBsYWNlKC9eXFwqXFwuLywgXCJcIikpXG4gICAgXVxuICAgIGNvbnN0IHBhdGhSZWdleCA9IHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMucGF0aG5hbWVNYXRjaClcbiAgICByZXR1cm4gKFxuICAgICAgaG9zdFJlZ2V4ZXMuc29tZSgocmUpID0+IHJlLnRlc3QodXJsLmhvc3RuYW1lKSkgJiYgcGF0aFJlZ2V4LnRlc3QodXJsLnBhdGhuYW1lKVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFBhdHRlcm5Ub1JlZ2V4KHBhdHRlcm46IHN0cmluZyk6IFJlZ0V4cCB7XG4gICAgY29uc3QgZXNjYXBlZCA9IHBhdHRlcm4ucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke2VzY2FwZWQucmVwbGFjZSgvXFxcXFxcKi9nLCBcIi4qXCIpfSRgKVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgU0lURV9SRUdJU1RSWSA9IHtcclxuICBncmVlbmhvdXNlOiB7XHJcbiAgICBkb21haW5zOiBbXCJncmVlbmhvdXNlLmlvXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiZ3JlZW5ob3VzZS5pb1wiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJnaF9qaWRcIiwgXCJnaF9zcmNcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi8oPzpbXi9dKy9qb2JzL1xcXFxkK3xlbWJlZC9qb2JfYXBwKVwiXHJcbiAgfSxcclxuICB4Y29tcGFueTogeyBwYXR0ZXJuczogW1wiKjovL3guY29tcGFueS8qXCJdLCBwYXRoUmVnZXg6IFwiXi9jYXJlZXJzL1teL10rLz8kXCIgfSxcclxuICB3YWxtYXJ0OiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMud2FsbWFydC5jb20vKlwiXSxcclxuICAgIHBhdGhSZWdleDpcclxuICAgICAgXCJeLyh1cy9lbi8oaG9tZXxqb2JzPy9bXi9dK3xhcHBseSg/Oi8uKik/fGFwcGxpY2F0aW9uKD86Ly4qKT8pfGNvbnRlbnQvY2FyZWVycy91cy9lbi8uKikkXCJcclxuICB9LFxyXG4gIHdvcmtkYXk6IHtcclxuICAgIGRvbWFpbnM6IFtcclxuICAgICAgXCJteXdvcmtkYXlqb2JzLmNvbVwiLFxyXG4gICAgICBcIm15d29ya2RheWpvYnMtaW1wbC5jb21cIixcclxuICAgICAgXCJteXdvcmtkYXlzaXRlLmNvbVwiLFxyXG4gICAgICBcIm15d29ya2RheS5jb21cIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAga3VsYTogeyBkb21haW5zOiBbXCJjYXJlZXJzLmt1bGEuYWlcIl0sIHBhdGhSZWdleDogXCJeL1teL10rL1teL10rXCIgfSxcclxuICBpY2ltczoge1xyXG4gICAgZG9tYWluczogW1wiaWNpbXMuY29tXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiaWNpbXMuY29tXCJdLFxyXG4gICAgaWZyYW1lT25seTogITAsXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzL1xcXFxkKyg/Oi98JClcIlxyXG4gIH0sXHJcbiAgZG92ZXI6IHsgZG9tYWluczogW1wiZG92ZXIuY29tXCJdIH0sXHJcbiAgYWRvYmU6IHsgZG9tYWluczogW1wiY2FyZWVycy5hZG9iZS5jb21cIl0sIHBhdGhSZWdleDogXCJeL1teL10rL1teL10rL2FwcGx5XCIgfSxcclxuICB6b2hvcmVjcnVpdDoge1xyXG4gICAgZG9tYWluczogW1wiem9ob3JlY3J1aXQuY29tXCIsIFwiem9ob3JlY3J1aXQuY2FcIiwgXCJ6b2hvcmVjcnVpdC5ldVwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcInpvaG9yZWNydWl0LmNvbVwiLCBcInpvaG9yZWNydWl0LmNhXCIsIFwiem9ob3JlY3J1aXQuZXVcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzL0NhcmVlcnMvLitcIlxyXG4gIH0sXHJcbiAgZ2VtOiB7IGRvbWFpbnM6IFtcImpvYnMuZ2VtLmNvbVwiXSwgcGF0aFJlZ2V4OiBcIl4vW1xcXFx3LV0rL1tcXFxcdy1dKy8/JFwiIH0sXHJcbiAgZ3VzdG86IHtcclxuICAgIGRvbWFpbnM6IFtcImpvYnMuZ3VzdG8uY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vcG9zdGluZ3MvW14vXSsoPzovYXBwbGljYW50cy9uZXcoPzovLiopPyk/Lz8kXCJcclxuICB9LFxyXG4gIGhpcmluZ3RoaW5nOiB7XHJcbiAgICBkb21haW5zOiBbXHJcbiAgICAgIFwiaGlyaW5ndGhpbmcuY29tXCIsXHJcbiAgICAgIFwib2FzaXNyZWNydWl0LmNvbVwiLFxyXG4gICAgICBcImVsZXZhdGUtYXRzLmNvbVwiLFxyXG4gICAgICBcInByaXNtaHItaGlyZS5jb21cIixcclxuICAgICAgXCJnbmFoaXJpbmcuY29tXCIsXHJcbiAgICAgIFwicmlwcGxpbmctYXRzLmNvbVwiXHJcbiAgICBdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vam9iL1xcXFxkKy9cIlxyXG4gIH0sXHJcbiAgaHVic3BvdDogeyBwYXR0ZXJuczogW1wiKjovL3d3dy5odWJzcG90LmNvbS9jYXJlZXJzL2pvYnMvKlwiXSB9LFxyXG4gIHBheWNvbW9ubGluZToge1xyXG4gICAgZG9tYWluczogW1wicGF5Y29tb25saW5lLmNvbVwiLCBcInBheWNvbW9ubGluZS5uZXRcIl0sXHJcbiAgICB1cmxSZWdleDpcclxuICAgICAgXCJeL3Y0L2F0cy93ZWJcXFxcLnBocC9wb3J0YWwvW14vXSsvKD86YXBwbGljYXRpb25zKD86Wy8/I10uKik/fGpvYnMvW14vPyNdKyg/Ols/I10uKik/KVwiXHJcbiAgfSxcclxuICB0ZWFtdGFpbG9yOiB7XHJcbiAgICBkb21haW5zOiBbXCJ0ZWFtdGFpbG9yLmNvbVwiLCBcImNhcmVlcnMuYmx1ZW9yYW5nZS5kaWdpdGFsXCIsIFwiY2FyZWVycy50b3RhbHBlcmZvcm0uY29tXCJdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwidGVhbXRhaWxvci1jZG4uY29tXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcInRlYW10YWlsb3IuY29tXCIsXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzLy4rXCJcclxuICB9LFxyXG4gIGNhdHNvbmU6IHtcclxuICAgIGRvbWFpbnM6IFtcImNhdHNvbmUuY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vY2FyZWVycy9bXi9dKy9qb2JzL1teL10rKD86L2FwcGx5KT8vPyRcIlxyXG4gIH0sXHJcbiAgbWV0YWNhcmVlcnM6IHtcclxuICAgIGRvbWFpbnM6IFtcIm1ldGFjYXJlZXJzLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL3Byb2ZpbGUvKGNyZWF0ZV9hcHBsaWNhdGlvbnxqb2JfZGV0YWlscykvW14vXStcIlxyXG4gIH0sXHJcbiAgeWNvbWJpbmF0b3I6IHsgZG9tYWluczogW1wid3d3Lnljb21iaW5hdG9yLmNvbVwiXSB9LFxyXG4gIHJpcHBsZWhpcmU6IHsgZG9tYWluczogW1wicmlwcGxlaGlyZS5jb21cIl0gfSxcclxuICBwZXJzb25pbzoge1xyXG4gICAgZG9tYWluczogW1wicGVyc29uaW8uZGVcIiwgXCJwZXJzb25pby5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2IvW14vPyNdKyg/Oi9hcHBseSk/Lz8kXCJcclxuICB9LFxyXG4gIGNhcmVlcnNwYWdlOiB7IGRvbWFpbnM6IFtcImNhcmVlcnMtcGFnZS5jb21cIl0gfSxcclxuICBjYXJlZXJwbHVnOiB7XHJcbiAgICBkb21haW5zOiBbXHJcbiAgICAgIFwiY2FyZWVycGx1Zy5jb21cIixcclxuICAgICAgXCJzZmFnZW50am9icy5jb21cIixcclxuICAgICAgXCJzZmFnZW50Y2FyZWVycy5jb21cIixcclxuICAgICAgXCJhcHNjYXJlZXJwb3J0YWwuY29tXCJcclxuICAgIF0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzL1xcXFxkKy9hcHBzL25ld1wiXHJcbiAgfSxcclxuICBjYXJlZXJzd2l0aHdheW1vOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMud2l0aHdheW1vLmNvbS9qb2JzLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzLyg/IXNlYXJjaCg/Oi98JCkpW14vXStcIlxyXG4gIH0sXHJcbiAgc3VjY2Vzc2ZhY3RvcnM6IHsgZG9tYWluczogW1wic3VjY2Vzc2ZhY3RvcnMuZXVcIiwgXCJzdWNjZXNzZmFjdG9ycy5jb21cIiwgXCJzYXBzZi5jb21cIl0gfSxcclxuICBjbGVhcmNvbXBhbnk6IHtcclxuICAgIGRvbWFpbnM6IFtcImNsZWFyY29tcGFueS5jb21cIl0sXHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouaHJtZGlyZWN0LmNvbS9lbXBsb3ltZW50L2pvYi1vcGVuaW5nLnBocCpcIl1cclxuICB9LFxyXG4gIGFzaGJ5OiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouYXNoYnlocS5jb20vKi8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiam9icy5hc2hieWhxLmNvbVwiLCBcImFzaGJ5X2ppZFwiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJhc2hieV9qaWRcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9bXi9dKy9bMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXsxMn1cIlxyXG4gIH0sXHJcbiAgaXNvbHZlZDoge1xyXG4gICAgZG9tYWluczogW1wiaXNvbHZlZGhpcmUuY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vKD86YXBwbHkvfGpvYnMvfGlmcmFtZS9tb2JpbGUvfGFjY291bnQvKVwiXHJcbiAgfSxcclxuICBqb2JkaXZhOiB7IHBhdHRlcm5zOiBbXCIqOi8vKi5qb2JkaXZhLmNvbS9wb3J0YWwvKlwiXSB9LFxyXG4gIGludHVpdDoge1xyXG4gICAgZG9tYWluczogW1wiaW50dWl0LXF1aXouYXBwLmludHVpdC5jb21cIl0sXHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly9qb2JzLmludHVpdC5jb20vam9iLypcIixcclxuICAgICAgXCIqOi8vaW50dWl0LmF2YXR1cmUubmV0LyovZXh0ZXJuYWxDYXJlZXJzL0pvYkFwcGxpY2F0aW9uKlwiXHJcbiAgICBdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiaW50dWl0LXF1aXouYXBwLmludHVpdC5jb21cIl1cclxuICB9LFxyXG4gIGphY29iczoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9jYXJlZXJzLmphY29icy5jb20vZW5fVVMvY2FyZWVycy8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OlxyXG4gICAgICBcIl4vZW5fVVMvY2FyZWVycy8oSm9iRGV0YWlsfFJlZ2lzdGVyfEFwcGxpY2F0aW9uRm9ybXxBcHBsaWNhdGlvblJldmlldykoPzovfCQpXCJcclxuICB9LFxyXG4gIHNtYXJ0cmVjcnVpdGVyczoge1xyXG4gICAgZG9tYWluczogW1wic21hcnRyLm1lXCJdLFxyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vam9icy5zbWFydHJlY3J1aXRlcnMuY29tL29uZWNsaWNrLXVpL2NvbXBhbnkvKlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLnNtYXJ0cmVjcnVpdGVycy5jb20vKi8qXCJcclxuICAgIF1cclxuICB9LFxyXG4gIHBoZW5vbToge1xyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwiQVBQTFlfZm9ybV9yZW5kZXJlci5qc1wiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJwaGVub21wZW9wbGUuY29tXCIsXHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly9qb2JzLmJzd2hlYWx0aC5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy51dmFoZWFsdGgub3JnLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuZHVrZWhlYWx0aC5vcmcvKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vd3d3LmpvYnMuYWJib3R0LyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXNwZW5kZW50YWwuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuZml2ZWJlbG93LmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmZvdXJzZWFzb25zLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmtici5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vam9icy5rdWVobmUtbmFnZWwuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFzdGVyY2FyZC5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tY2FmZWUuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2pvYnMtY2VlLnB3Yy5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5yb2NoZS5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vd3d3LnZjYWNhcmVlcnMuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMud2FzdGVjb25uZWN0aW9ucy5jb20vKi9hcHBseSpcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgY2lzY286IHsgcGF0dGVybnM6IFtcIio6Ly9jYXJlZXJzLmNpc2NvLmNvbS8qL2FwcGx5KlwiXSB9LFxyXG4gIHRlc2xhOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouam9icy50ZXNsYS5jb20vKlwiLCBcIio6Ly8qLnRlc2xhLmNvbS9jYXJlZXJzLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiL2FwcGx5XCJcclxuICB9LFxyXG4gIGFtYXpvbjogeyBwYXR0ZXJuczogW1wiKjovLyouYW1hem9uLmpvYnMvKlwiXSwgcGF0aFJlZ2V4OiBcIi9qb2JzL1tcXFxcdy1dKy9hcHBseVwiIH0sXHJcbiAgYW1hem9udW5pdmVyc2l0eTogeyBwYXR0ZXJuczogW1wiKjovLyouYW1hem9udW5pdmVyc2l0eS5qb2JzL3Byb2ZpbGUqXCJdIH0sXHJcbiAgdWJlcjoge1xyXG4gICAgZG9tYWluczogW1widWJlci5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6XHJcbiAgICAgIFwiXi8oPzooPzooPzpbXi9dKy8pezEsMn0pP2NhcmVlcnMvKD86YXBwbHkoPzovfCQpfGxpc3QvW14vPyNdKyl8KD86W14vXSsvKT9qb2JzL1teLz8jXSsvPyQpXCJcclxuICB9LFxyXG4gIHRpa3Rvazoge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vKi5saWZlYXR0aWt0b2suY29tL3Jlc3VtZSpcIixcclxuICAgICAgXCIqOi8vKi50aWt0b2t1c2RzLmNvbS8qL3Jlc3VtZSpcIixcclxuICAgICAgXCIqOi8vKi50aWt0b2t1c2RzLmNvbS8qL3Bvc2l0aW9uLyovZGV0YWlsKlwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBieXRlZGFuY2U6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyouam9icy5ieXRlZGFuY2UuY29tL2VuL3Jlc3VtZSpcIixcclxuICAgICAgXCIqOi8vam9icy5ieXRlZGFuY2UuY29tLyovKi8qL2RldGFpbCpcIixcclxuICAgICAgXCIqOi8vam9icy5ieXRlZGFuY2UuY29tLyovKi8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLmJ5dGVkYW5jZS5jb20vKi8qL2FwcGxpZWQqXCIsXHJcbiAgICAgIFwiKjovL2pvaW5ieXRlZGFuY2UuY29tL3NlYXJjaC8qXCJcclxuICAgIF1cclxuICB9LFxyXG4gIGdvb2dsZToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9nb29nbGUuY29tL2Fib3V0L2NhcmVlcnMvKlwiLCBcIio6Ly8qLmdvb2dsZS5jb20vYWJvdXQvY2FyZWVycy8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OlxyXG4gICAgICBcIl4vYWJvdXQvY2FyZWVycy9hcHBsaWNhdGlvbnMoPzovKD86dS9cXFxcZCsvKT9hcHBseSg/Oi98JCl8L2pvYnMvcmVzdWx0cy9bXi8/I10rKVwiLFxyXG4gICAgdXJsUmVnZXg6IFwiXi9hYm91dC9jYXJlZXJzL2FwcGxpY2F0aW9ucy9qb2JzL3Jlc3VsdHMoPzpcXFxcP1teI10qKT8jLipbPyYjXWppZD1bXiYjXStcIlxyXG4gIH0sXHJcbiAgbGV2ZXI6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vam9icy5sZXZlci5jby8qLypcIiwgXCIqOi8vam9icy5ldS5sZXZlci5jby8qLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJsZXZlci5jb1wiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJMZXZlckFwcElkXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vW14vXSsvW14vXSsoPzovYXBwbHkpPy8/JFwiXHJcbiAgfSxcclxuICBqb2J2aXRlOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2pvYnMuam9idml0ZS5jb20vKi9qb2IvKlwiLCBcIio6Ly9qb2JzLmpvYnZpdGUuY29tLyovYXBwbHkqXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiam9icy5qb2J2aXRlLmNvbVwiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJqb2J2aXRlaWZyYW1lXCJdXHJcbiAgfSxcclxuICBicmVlenk6IHsgcGF0dGVybnM6IFtcIio6Ly8qLmJyZWV6eS5oci9wLypcIiwgXCIqOi8vKi5icmVlenkuaHIvKi9hcHBseSpcIl0gfSxcclxuICB3b3JrYWJsZToge1xyXG4gICAgZG9tYWluczogW1wiY2FyZWVycy5hcmJvci1lZHVjYXRpb24uY29tXCJdLFxyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9hcHBseS53b3JrYWJsZS5jb20vKlwiLCBcIio6Ly9qb2JzLndvcmthYmxlLmNvbS8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wid29ya2FibGUuY29tXCJdLFxyXG4gICAgcXVlcnlQYXJhbXM6IFtcInNlbGVjdGVkSm9iSWRcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi8oPzpbXi9dKy9qL1teL10rKD86L2FwcGx5KT8vPyR8KD86W2Etel17Mn0vKT8oPzp2aWV3fGNvbXBhbnkpL1tcXFxcdy1dKylcIlxyXG4gIH0sXHJcbiAgZ29oaXJlOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2pvYnMuZ29oaXJlLmlvLyovKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImFwcC5nb2hpcmUuaW8vd2lkZ2V0L1wiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL1teL10rLy4rLVxcXFxkKy8/JFwiXHJcbiAgfSxcclxuICBiYW1ib29ocjoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmJhbWJvb2hyLmNvbS9qb2JzKlwiLCBcIio6Ly8qLmJhbWJvb2hyLmNvbS9jYXJlZXJzKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImJhbWJvb2hyLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeLyg/OmpvYnN8Y2FyZWVycy9bXFxcXHctXSpcXFxcZClcIlxyXG4gIH0sXHJcbiAgYnJhc3NyaW5nOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouYnJhc3NyaW5nLmNvbS9UR25ld1VJLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJicmFzc3JpbmcuY29tXCJdLFxyXG4gICAgdXJsUmVnZXg6IFwiIyg/OkFwcGx5cGFnZXxqb2JEZXRhaWxzPSlcIlxyXG4gIH0sXHJcbiAgYWRwOiB7XHJcbiAgICBkb21haW5zOiBbXCJ3b3JrZm9yY2Vub3cuYWRwLmNvbVwiXSxcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vcmVjcnVpdGluZy5hZHAuY29tL3NyY2Nhci9wdWJsaWMvKlwiLCBcIio6Ly9teWpvYnMuYWRwLmNvbS8qL2N4LypcIl1cclxuICB9LFxyXG4gIG9yYWNsZWNsb3VkOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLm9yYWNsZWNsb3VkLmNvbS8qL0NhbmRpZGF0ZUV4cGVyaWVuY2UvKi9zaXRlcy8qL2pvYi8qXCIsXHJcbiAgICAgIFwiKjovLyoub3JhY2xlY2xvdWQuY29tLyovQ2FuZGlkYXRlRXhwZXJpZW5jZS8qL3NpdGVzLyovKi9wcmV2aWV3LypcIixcclxuICAgICAgXCIqOi8vKi8qL0NhbmRpZGF0ZUV4cGVyaWVuY2UvKi9zaXRlcy8qL2pvYi8qXCIsXHJcbiAgICAgIFwiKjovLyovKi9DYW5kaWRhdGVFeHBlcmllbmNlLyovc2l0ZXMvKi8qL3ByZXZpZXcvKlwiLFxyXG4gICAgICBcIio6Ly8qLyovc2l0ZXMvKi9qb2JzL3ByZXZpZXcvKi9hcHBseS8qXCJcclxuICAgIF0sXHJcbiAgICBwYXRoUmVnZXg6XHJcbiAgICAgIFwiKD86L0NhbmRpZGF0ZUV4cGVyaWVuY2UvLiovc2l0ZXMvW14vXSsvam9iL1teL10rKD86L2FwcGx5KD86Ly4qKT8pPy8/JHwvYXBwbHkpXCJcclxuICB9LFxyXG4gIHVsdGlwcm86IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jb20vKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5RGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY29tLyovSm9iQm9hcmQvKi9PcHBvcnR1bml0eUFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY29tLyovSm9iQm9hcmQvKi9BY2NvdW50L1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY2EvKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5RGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY2EvKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5QXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jYS8qL0pvYkJvYXJkLyovQWNjb3VudC9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vKi5yZWMucHJvLnVrZy5uZXQvKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5RGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly8qLnJlYy5wcm8udWtnLm5ldC8qL0pvYkJvYXJkLyovT3Bwb3J0dW5pdHlBcHBseSpcIixcclxuICAgICAgXCIqOi8vKi5yZWMucHJvLnVrZy5uZXQvKi9Kb2JCb2FyZC8qL0FjY291bnQvUmVnaXN0ZXIqXCJcclxuICAgIF1cclxuICB9LFxyXG4gIHJpcHBsaW5nOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLnJpcHBsaW5nLWF0cy5jb20vam9iLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyoucmlwcGxpbmctYXRzLmNvbS9qb2JzL2VvcF9zdXJ2ZXkvKlwiXHJcbiAgICBdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiYXRzLnJpcHBsaW5nLmNvbVwiXVxyXG4gIH0sXHJcbiAgcmlwcGxpbmdIb3N0ZWQ6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vYXRzLnJpcHBsaW5nLmNvbS8qL2pvYnMvKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL1teL10rL2pvYnMvW14vXSsoPzovYXBwbHkoPzovLiopPyk/Lz8kXCJcclxuICB9LFxyXG4gIGRheWZvcmNlOiB7XHJcbiAgICBkb21haW5zOiBbXCJqb2JzLmRheWZvcmNlaGNtLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeLyg/OlteL10rLykram9icy9bXi9dKyg/Oi9hcHBseSg/Oi8uKik/KT8vPyRcIlxyXG4gIH0sXHJcbiAgZGF5Zm9yY2VJZGVudGl0eToge1xyXG4gICAgcGF0dGVybnM6IFtcImh0dHBzOi8vZGZpZC5kYXlmb3JjZWhjbS5jb20vZ2xvYmFsaWRlbnRpdHkvYWNjb3VudC8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vZ2xvYmFsaWRlbnRpdHkvYWNjb3VudC8oPzpyZWdpc3Rlcnxsb2dpbikvPyRcIlxyXG4gIH0sXHJcbiAgdGFsZW86IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0LyovYXBwbGljYXRpb24uanNzKlwiLFxyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC8qL2Zsb3cuanNmKlwiLFxyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC8qL2pvYmFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC8qL2F0cy9jYXJlZXJzLypcIixcclxuICAgICAgXCIqOi8vKi50YWxlby5uZXQvY2FyZWVyc2VjdGlvbi8qL2pvYmRldGFpbC5mdGwqXCIsXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0LyovaHRtbFJlc291cmNlVmlld2VyLmpzcypcIixcclxuICAgICAgXCIqOi8vKi5idXJuc21jZC5jb20vYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyouYnVybnNtY2QuY29tL2NhcmVlcnNlY3Rpb24vYXBwbGljYXRpb24uanNzKlwiLFxyXG4gICAgICBcIio6Ly8qLmJ1cm5zbWNkLmNvbS9jYXJlZXJzZWN0aW9uL2Zsb3cuanNmKlwiLFxyXG4gICAgICBcIio6Ly8qLmJ1cm5zbWNkLmNvbS9jYXJlZXJzZWN0aW9uL2pvYmFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLmJ1cm5zbWNkLmNvbS9jYXJlZXJzZWN0aW9uL2h0bWxSZXNvdXJjZVZpZXdlci5qc3MqXCIsXHJcbiAgICAgIFwiKjovL3RhbGVudGFjcXVpc2l0aW9uLjNkcy5jb20vKi9hcHBsaWNhdGlvbi5qc3MqXCIsXHJcbiAgICAgIFwiKjovL3RhbGVudGFjcXVpc2l0aW9uLjNkcy5jb20vKi9mbG93LmpzZipcIixcclxuICAgICAgXCIqOi8vdGFsZW50YWNxdWlzaXRpb24uM2RzLmNvbS8qL2pvYmFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly90YWxlbnRhY3F1aXNpdGlvbi4zZHMuY29tLyovYXRzL2NhcmVlcnMvKlwiLFxyXG4gICAgICBcIio6Ly90YWxlbnRhY3F1aXNpdGlvbi4zZHMuY29tLyovaHRtbFJlc291cmNlVmlld2VyLmpzcypcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgZWlnaHRmb2xkOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouZWlnaHRmb2xkLmFpL2NhcmVlcnMqXCIsIFwiKjovLyouZWlnaHRmb2xkLmFpL2NhcmVlcmh1Yi8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiZWlnaHRmb2xkLmFpXCJdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwiZWlnaHRmb2xkXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcImVpZ2h0Zm9sZC5haVwiLFxyXG4gICAgdXJsUmVnZXg6XHJcbiAgICAgIFwiKD86Xi9jYXJlZXJodWIvZXhwbG9yZS9qb2JzLyg/IWFwcGx5Lz8oPzpbPyNdfCQpKVteLz8jXSsvPyg/Ols/I10uKik/JHxeL2NhcmVlcmh1Yi9leHBsb3JlL2pvYnMvYXBwbHkvP1xcXFw/KD89W14jXSpcXFxcYnBpZD1bXiYjXSspW14jXSooPzojLiopPyR8Xi9jYXJlZXJzKD86Lyg/OmpvYi9bXi8/I10rKD86L2FwcGx5KT8oPzpbLz8jXXwkKXxhcHBseSg/OlsvPyNdfCQpKXxcXFxcPyg/PSg/OnBpZD1bXiYjXSt8W14jXSomcGlkPVteJiNdKykpW14jXSooPzojLiopPyQpKVwiXHJcbiAgfSxcclxuICBqYXp6aHI6IHsgcGF0dGVybnM6IFtcIio6Ly8qLmFwcGx5dG9qb2IuY29tL2FwcGx5LypcIl0gfSxcclxuICB0cmFrc3Rhcjoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmhpcmUudHJha3N0YXIuY29tL2pvYnMvKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvW14vXSsvPyRcIlxyXG4gIH0sXHJcbiAgZnJlc2h0ZWFtOiB7IHBhdHRlcm5zOiBbXCIqOi8vKi5mcmVzaHRlYW0uY29tL2pvYnMvKlwiXSB9LFxyXG4gIHBpbnBvaW50aHE6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5waW5wb2ludGhxLmNvbS8qL3Bvc3RpbmdzLypcIiwgXCIqOi8vKi5waW5wb2ludGhxLmNvbS9wb3N0aW5ncy8qXCJdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwicGlucG9pbnRocVwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJwaW5wb2ludGhxLmNvbVwiXHJcbiAgfSxcclxuICByZWNydWl0ZWU6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5yZWNydWl0ZWUuY29tLyovKlwiXSxcclxuICAgIHBhZ2VTb3VyY2VLZXl3b3JkOiBcInJlY3J1aXRlZVwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJyZWNydWl0ZWUuY29tXCJcclxuICB9LFxyXG4gIHRyaW5ldGhpcmU6IHsgcGF0dGVybnM6IFtcIio6Ly9hcHAudHJpbmV0aGlyZS5jb20vY29tcGFuaWVzLyovam9icy8qXCJdIH0sXHJcbiAgam9ic2NvcmU6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuam9ic2NvcmUuY29tL2FwcGx5X2Zsb3cvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmpvYnNjb3JlLmNvbS9jYXJlZXJzLyovam9icy8qXCJcclxuICAgIF0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJqb2JzY29yZS5jb21cIl1cclxuICB9LFxyXG4gIHBheWxvY2l0eToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLnBheWxvY2l0eS5jb20vcmVjcnVpdGluZy8qXCIsIFwiKjovLyoucGF5bG9jaXR5LmNvbS9SZWNydWl0aW5nLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJwYXlsb2NpdHkuY29tXCJdLFxyXG4gICAgdXJsUmVnZXg6IFwiXi9bUnJdZWNydWl0aW5nL1tKal1vYnMvKD86W0FhXXBwbHkvfFtEZF1ldGFpbHMvW14vPyNdKyg/OlsvPyNdfCQpKVwiXHJcbiAgfSxcclxuICBhdmF0dXJlOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0L0xpbmtlZEluQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovTGlua2VkSW5BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9Zb3VySW5mb3JtYXRpb24qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvY2FtcHVzQXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9HZW5lcmFsSW5mbypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC9jYXJlZXJzL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC9jYXJlZXJzL0pvYkRldGFpbC8qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9jYXJlZXJzL0pvYkRldGFpbC8qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9FeHRlcm5hbC9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvY2FyZWVycy9Mb2NhdGlvbkFuZFByb2ZpbGUvKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovY2FyZWVycy9Mb2NhdGlvbkFuZFByb2ZpbGUvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvQXBwbGljYXRpb25Eb3RLbm9ja2VkT3V0V2l6YXJkKlwiLFxyXG4gICAgICBcIio6Ly9hcHBseS5kZWxvaXR0ZS5jb20vKi9jYXJlZXJzLypcIixcclxuICAgICAgXCIqOi8vYXBwbHkuZGVsb2l0dGUuY29tLyovRXh0ZXJuYWwvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvSW52aXRlVG9BcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvSm9iRGV0YWlsLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvTG9jYXRpb25BbmRQcm9maWxlLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL0V4dGVybmFsL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbk1ldGhvZHMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uUXVlc3Rpb25zKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0ludml0ZVRvQXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0dlbmVyYWxJbmZvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0pvYkRldGFpbC8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0xvY2F0aW9uQW5kUHJvZmlsZS8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9FeHRlcm5hbC9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9Kb2JBcHBsaWNhdGlvbipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25SZXZpZXcqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvWW91ckluZm9ybWF0aW9uKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvSW52aXRlVG9BcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0dlbmVyYWxJbmZvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvSm9iRGV0YWlsLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0xvY2F0aW9uQW5kUHJvZmlsZS8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL0V4dGVybmFsL0pvYkRldGFpbCpcIlxyXG4gICAgXSxcclxuICAgIHBhZ2VTb3VyY2VLZXl3b3JkOiBcImF2YXR1cmVcIixcclxuICAgIHBhZ2VTb3VyY2VEb21haW46IFwiYXZhdHVyZS5uZXRcIlxyXG4gIH0sXHJcbiAgb2t0YToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly93d3cub2t0YS5jb20vY29tcGFueS9jYXJlZXJzLyovKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2NvbXBhbnkvY2FyZWVycy8oPyFqb2ItbGlzdGluZyg/Oi98JCkpXCJcclxuICB9LFxyXG4gIGNvbWVldDoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmNvbWVldC5jb20vam9icy8qLyovKi8qXCIsIFwiKjovLyouY29tZWV0LmNvL2pvYnMvKi8qL2FwcGx5KlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImNvbWVldC5jb1wiLCBcImNvbWVldC5jb21cIl1cclxuICB9LFxyXG4gIGFwcGxlOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2pvYnMuYXBwbGUuY29tLyovZGV0YWlscy8qXCIsIFwiKjovL2pvYnMuYXBwbGUuY29tL2FwcC8qL2FwcGx5LypcIl1cclxuICB9LFxyXG4gIHBvbHltZXI6IHsgcGF0dGVybnM6IFtcIio6Ly9qb2JzLnBvbHltZXIuY28vKi8qXCJdIH0sXHJcbiAgcmVjcnVpdGVyZmxvdzoge1xyXG4gICAgZG9tYWluczogW1wicmVjcnVpdGVyZmxvdy5jb21cIl0sXHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJyZWNydWl0ZXJmbG93LmNvbVwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJyZWNydWl0ZXJmbG93LmNvbVwiLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vW14vXSsvam9icy9bXi8/I10rXCJcclxuICB9LFxyXG4gIGNhcmVlcnN0b2FzdHRhYjogeyBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMudG9hc3R0YWIuY29tL2pvYnMqXCJdIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZS1hY3RpdmF0aW9uLmM5YWU0YjM3LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);