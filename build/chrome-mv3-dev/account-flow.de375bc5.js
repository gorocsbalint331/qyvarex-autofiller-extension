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
})({"5fx1q":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\pre-autofill-flow\\account-flow.js",
    "bundleId": "3bb693a1de375bc5",
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
var j = z(require("5491cb11cc122117"));
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

},{"5491cb11cc122117":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"1gd6N":[function(require,module,exports) {
/**
 * Parcel module id: IgBHR
 * Resolved path: src/contents/pre-autofill-flow/account-flow.js
 * Dependencies:
 *   ./account-flow-state -> 8WOx2  =>  src/contents/pre-autofill-flow/account-flow-state.js
 *   ./core -> aKRqS  =>  src/contents/pre-autofill-flow/core.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~store/autofillResult -> hCUzf  =>  src/store/autofillResult.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_REFRESH_DELAY_MS", ()=>l), n.export(r, "cancelPreAutofillAccountFlow", ()=>c), n.export(r, "resolvePreAutofillAccountTransition", ()=>q), n.export(r, "resolvePreAutofillAccountPendingSubmit", ()=>U), n.export(r, "consumePreAutofillAccountTransition", ()=>G), n.export(r, "consumePreAutofillAccountPendingSubmit", ()=>K), n.export(r, "createPreAutofillAccountFlowAdapter", ()=>X);
var o = e("~store/autofillResult"), i = e("./core"), a = e("./account-flow-state");
n.exportAll(a, r);
let l = 500, s = null, u = null;
function c() {
    s?.abort(), s = null, (0, a.preAutofillAccountFlowSession).clear(), (0, a.preAutofillAccountTransitionSession).clear(), (0, o.useAutofillResultStore).getState().stopCurrentFilling();
}
function d(e1) {
    return e1.aborted;
}
function f(e1) {
    return e1.filter((e1)=>!1 !== e1.progress).map((e1)=>({
            label: e1.label,
            metadata: p(e1)
        }));
}
function p(e1) {
    let t = {};
    return e1.progressGroup && (t.progressGroup = e1.progressGroup), e1.waitForCredential && (t.setupCredential = e1.waitForCredential), Object.keys(t).length > 0 ? {
        signup: t
    } : void 0;
}
function m(e1) {
    return e1.map((e1)=>e1.label);
}
function h({ steps: e1, currentIndex: t }) {
    return e1.slice(t + 1).find((e1)=>!1 !== e1.progress)?.label ?? null;
}
function g(e1, t) {
    return !!e1 && "running" === e1.status && !!e1.completedSteps.length && (e1.pageKind === t || "sign_in" === t && "registration" === e1.pageKind && e1.completedSteps.some((e1)=>(0, a.PRE_AUTOFILL_ACCOUNT_REGISTRATION_ENTRY_STEPS).includes(e1)));
}
function b(e1, t) {
    return g(e1, t);
}
function y({ session: e1, state: t, ruleProgressSteps: r1 }) {
    return g(e1, t) && e1 ? e1.pageKind === t ? e1.completedSteps.filter((e1)=>!r1.includes(e1)) : (0, a.PRE_AUTOFILL_ACCOUNT_REGISTRATION_ENTRY_STEPS).filter((t)=>e1.completedSteps.includes(t)) : [];
}
function v() {
    s?.abort(), s = null, (0, a.preAutofillAccountFlowSession).clear(), (0, a.preAutofillAccountTransitionSession).clear(), (0, o.useAutofillResultStore).getState().stopCurrentFilling();
}
function w(e1) {
    d(e1) || v();
}
function S(e1) {
    return "function" != typeof e1.addEventListener || "function" != typeof e1.removeEventListener ? null : e1;
}
_c = S;
async function E({ credential: e1, document: t, credentials: r1, rereadCredential: n, progress: o, stepLabel: l, signal: s }) {
    if (r1[e1]) return r1;
    let u = S(t);
    return (0, a.debugPreAutofillAccountSetup)("runner", "wait-start", {
        credential: e1,
        stepLabel: l,
        hasEmail: !!r1.email,
        hasPassword: !!r1.password
    }), new Promise((t)=>{
        let c = !1, d = !1, f = !1, p = null, m = null, h = ()=>{
            p && clearTimeout(p), m && clearTimeout(m), u?.removeEventListener(a.PRE_AUTOFILL_ACCOUNT_CREDENTIALS_CHANGED_EVENT, v), s.removeEventListener("abort", b);
        }, g = (e1)=>{
            c || (c = !0, h(), t(e1));
        }, b = ()=>g(null), y = ()=>{
            c || f || (f = !0, (0, a.debugPreAutofillAccountSetup)("runner", "prompt-show", {
                credential: e1,
                stepLabel: l
            }), o.markCredentialMissing(l), (0, i.waitForPreAutofillFlowDebugStep)(`Missing value for ${l}`, s));
        };
        async function v() {
            if (!d && !c) {
                d = !0;
                try {
                    let t = await n(r1, e1);
                    (0, a.debugPreAutofillAccountSetup)("runner", "credential-read", {
                        credential: e1,
                        stepLabel: l,
                        hasEmail: !!t.email,
                        hasPassword: !!t.password,
                        found: !!t[e1]
                    }), t[e1] && g(t);
                } catch  {} finally{
                    d = !1;
                }
            }
        }
        u?.addEventListener(a.PRE_AUTOFILL_ACCOUNT_CREDENTIALS_CHANGED_EVENT, v), s.addEventListener("abort", b, {
            once: !0
        }), p = setTimeout(()=>{
            g(null);
        }, a.PRE_AUTOFILL_ACCOUNT_PASSWORD_WAIT_TIMEOUT_MS), m = setTimeout(y, a.PRE_AUTOFILL_ACCOUNT_SETUP_PROMPT_DELAY_MS), v();
    });
}
_c1 = E;
async function x({ context: e1, progress: t, step: r1, nextStep: n, action: o }) {
    if (d(e1.signal)) return !1;
    let a = await o(e1);
    return !d(e1.signal) && (!1 === a ? (t.markMissing(r1), await (0, i.waitForPreAutofillFlowDebugStep)(`Missing ${r1}`, e1.signal), !1) : (t.complete(r1, n), await (0, i.waitForPreAutofillFlowDebugStep)(n ?? `${r1} completed`, e1.signal), !d(e1.signal)));
}
function C({ context: e1, intent: t, transitionStep: r1, completedSteps: n, currentStep: i, targetUrl: l }) {
    let s = {
        flowId: e1.match.flowId,
        intent: t ?? e1.state,
        sourceUrl: e1.url,
        ...l ? {
            targetUrl: l
        } : {},
        sourcePageKind: e1.match.pageKind,
        transitionStep: r1,
        completedSteps: n,
        currentStep: i
    }, u = (0, a.preAutofillAccountTransitionSession).peek(), c = u?.payload, d = o.useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse?.[a.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY];
    if (c && A(c, s) && !d) {
        let e1 = Date.now() - (u?.createdAt ?? 0);
        return e1 > a.PRE_AUTOFILL_ACCOUNT_SUBMIT_REFRESH_DEBOUNCE_MS && ((0, a.preAutofillAccountTransitionSession).save(s), T()), {
            pending: c,
            didSubmit: !1
        };
    }
    return (0, a.preAutofillAccountTransitionSession).save(s), j() && D(), T(), {
        pending: s,
        didSubmit: !0
    };
}
_c2 = C;
function A(e1, t) {
    return e1.flowId === t.flowId && e1.intent === t.intent && e1.sourceUrl === t.sourceUrl && e1.targetUrl === t.targetUrl && e1.sourcePageKind === t.sourcePageKind && e1.transitionStep === t.transitionStep && e1.currentStep === t.currentStep && k(e1.completedSteps, t.completedSteps);
}
_c3 = A;
function k(e1, t) {
    let r1 = e1 ?? [], n = t ?? [];
    return r1.length === n.length && r1.every((e1, t)=>e1 === n[t]);
}
function T() {
    "undefined" != typeof window && "function" == typeof window.dispatchEvent && window.dispatchEvent(new Event(a.PRE_AUTOFILL_ACCOUNT_TRANSITION_CHANGED_EVENT));
}
_c4 = T;
function F({ context: e1, state: t }) {
    return {
        flowId: e1.match.flowId,
        intent: t,
        sourceUrl: e1.url,
        sourcePageKind: e1.match.pageKind,
        transitionStep: "",
        completedSteps: []
    };
}
_c5 = F;
function I({ context: e1, progress: t, step: r1, transition: n }) {
    let o = n.includeStep ? (0, a.appendCompletedPreAutofillStep)(t.getCompletedSteps(), r1.label) : t.getCompletedSteps(), i = n.getTargetUrl?.(e1) ?? void 0;
    C({
        context: e1,
        intent: n.intent,
        transitionStep: r1.label,
        completedSteps: o,
        currentStep: n.currentStep ?? null,
        targetUrl: i
    });
}
_c6 = I;
function j() {
    let e1 = (0, o.useAutofillResultStore).getState(), t = e1.autoFillResult;
    if (!t?.userAutoFillResponse?.[a.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY]) return !1;
    let { [a.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY]: r1, ...n } = t.userAutoFillResponse;
    return e1.setAutoFillResult({
        ...t,
        userAutoFillResponse: n
    }), !0;
}
function D() {
    u = new Promise((e1)=>{
        setTimeout(e1, l);
    });
}
_c7 = D;
async function P() {
    let e1 = u;
    e1 && (await e1, u === e1 && (u = null));
}
_c8 = P;
function _({ state: e1, steps: t, completedSteps: r1, missingSteps: n = [], progressTitle: i }) {
    let l = r1, s = n, u = [];
    function c() {
        return {
            [a.PRE_AUTOFILL_ACCOUNT_SETUP_MISSING_STEPS_KEY]: u
        };
    }
    function d(r1, n) {
        (0, a.preAutofillAccountProgress).set({
            pageKind: e1,
            steps: t,
            completedSteps: l,
            missingSteps: s,
            currentStep: r1,
            userAutoFillResponse: c(),
            persistSession: !1
        }), void 0 !== n ? (0, o.useAutofillResultStore).getState().setProgressTitle(n) : void 0 !== i && (0, o.useAutofillResultStore).getState().setProgressTitle(i);
    }
    return {
        complete: function(e1, t) {
            l = (0, a.appendCompletedPreAutofillStep)(l, e1), s = s.filter((t)=>t !== e1), u = u.filter((t)=>t !== e1), d(t);
        },
        markCredentialMissing: function(e1) {
            s = [
                e1
            ], u = [
                e1
            ], d(e1, a.PRE_AUTOFILL_ACCOUNT_SETUP_PROGRESS_TITLE);
        },
        markMissing: function(e1) {
            s = [
                e1
            ], u = [], d(e1);
        },
        setCurrent: function(e1) {
            d(e1);
        },
        getCompletedSteps: ()=>l
    };
}
function L({ rules: e1, match: t }) {
    return e1[t.pageKind] ?? null;
}
_c9 = L;
function R(e1) {
    let t = Object.fromEntries(Object.entries(e1).map(([e1, { state: t, entry: r1, ctaText: n, progressTitle: o, completeEntryProgress: i, ...l }])=>[
            e1,
            {
                ...l,
                ctaText: n ?? (0, a.getPreAutofillAccountFlowCtaText)(t)
            }
        ]));
    return (0, i.definePreAutofillPageRules)(t);
}
_c10 = R;
async function O({ context: e1, steps: t }) {
    let r1 = [];
    for (let n of t)(!n.shouldRun || await n.shouldRun(e1)) && r1.push(n);
    return r1;
}
_c11 = O;
async function M({ context: e1, credentialReaders: t, progress: r1, step: n }) {
    let o = n.waitForCredential;
    if (!o || e1.credentials[o]) return !0;
    try {
        let r1 = await t.rereadCredential(e1.credentials, o);
        if (e1.credentials = r1, r1[o]) return !0;
    } catch  {}
    let i = await E({
        credential: o,
        document: e1.document,
        credentials: e1.credentials,
        rereadCredential: t.rereadCredential,
        progress: r1,
        stepLabel: n.label,
        signal: e1.signal
    });
    return !!i && (e1.credentials = i, !0);
}
_c12 = M;
async function N({ context: e1, credentialReaders: t, progress: r1, steps: n }) {
    for (let [o, i] of n.entries()){
        if (d(e1.signal)) return !1;
        let a = h({
            steps: n,
            currentIndex: o
        });
        i.transition?.timing === "before" && I({
            context: e1,
            progress: r1,
            step: i,
            transition: i.transition
        });
        let l = await M({
            context: e1,
            credentialReaders: t,
            progress: r1,
            step: i
        });
        if (!l || d(e1.signal)) return !1;
        let s = async ()=>{
            let t = "jd" === e1.match.pageKind ? r1.getCompletedSteps() : [];
            return i.run({
                ...e1,
                onSubmit: ()=>!1 === i.submitSession ? {
                        pending: {
                            ...F({
                                context: e1,
                                state: e1.state
                            }),
                            transitionStep: i.label,
                            completedSteps: t,
                            currentStep: null
                        },
                        didSubmit: !0
                    } : C({
                        context: e1,
                        transitionStep: i.label,
                        completedSteps: t,
                        currentStep: null
                    })
            });
        };
        if (!1 === i.progress) {
            let e1 = await s();
            if (!1 === e1) return !1;
        } else {
            let t = await x({
                context: e1,
                progress: r1,
                step: i.label,
                nextStep: a,
                action: s
            });
            if (!t) return !1;
        }
        i.transition?.timing === "after" && I({
            context: e1,
            progress: r1,
            step: i,
            transition: i.transition
        });
    }
    return !0;
}
_c13 = N;
async function $({ context: e1, rule: t, credentialReaders: r1 }) {
    let n = e1.signal ?? new AbortController().signal, l = t.state, u = {
        email: "",
        password: ""
    }, c = {
        ...e1,
        document: e1.document,
        state: l,
        signal: n,
        credentials: u,
        onSubmit: ()=>({
                pending: F({
                    context: e1,
                    state: l
                }),
                didSubmit: !1
            })
    }, p = await O({
        context: c,
        steps: t.steps
    }), m = f(p), h = _({
        state: l,
        steps: m,
        completedSteps: [],
        progressTitle: t.progressTitle
    }), g = m[0]?.label ?? null;
    if (h.setCurrent(g), await (0, i.waitForPreAutofillFlowDebugStep)(g ?? "Start account entry", n), d(n)) return;
    let b = await N({
        context: c,
        credentialReaders: r1,
        progress: h,
        steps: p
    });
    if (!b) {
        w(n), (0, a.preAutofillAccountTransitionSession).clear();
        return;
    }
    if (t.completeEntryProgress && !d(n)) {
        let e1 = o.useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse;
        (0, a.preAutofillAccountProgress).set({
            pageKind: l,
            steps: m,
            completedSteps: h.getCompletedSteps(),
            currentStep: null,
            status: "completed",
            userAutoFillResponse: e1,
            persistSession: !1
        }), (0, o.useAutofillResultStore).getState().stopCurrentFilling(), s = null;
    }
}
async function B({ context: e1, rule: t, credentialReaders: r1 }) {
    let n = e1.signal ?? new AbortController().signal, l = t.state, u = await r1.getInitialCredentials();
    if (d(n)) return;
    let c = (0, a.preAutofillAccountFlowSession).get(), p = b(c, l);
    p && (0, a.preAutofillAccountFlowSession).clear();
    let h = {
        document: e1.document,
        state: l,
        signal: n
    }, g = {
        ...e1,
        ...h,
        entrySession: p ? c : null,
        credentials: u,
        onSubmit: ()=>({
                pending: F({
                    context: e1,
                    state: l
                }),
                didSubmit: !1
            })
    }, v = await O({
        context: g,
        steps: t.steps
    });
    if (d(n)) return;
    let S = f(v), E = y({
        session: c,
        state: l,
        ruleProgressSteps: m(S)
    }), x = [
        ...E,
        ...S
    ], C = _({
        state: l,
        steps: x,
        completedSteps: E
    }), A = S[0]?.label ?? null;
    if (C.setCurrent(A), await (0, i.waitForPreAutofillFlowDebugStep)(A ?? "Start account form", n), d(n)) return;
    let k = await N({
        context: g,
        credentialReaders: r1,
        progress: C,
        steps: v
    });
    if (!k) {
        w(n);
        return;
    }
    if (d(n)) return;
    let T = o.useAutofillResultStore.getState().autoFillResult?.userAutoFillResponse;
    (0, a.preAutofillAccountProgress).set({
        pageKind: l,
        steps: x,
        completedSteps: C.getCompletedSteps(),
        currentStep: null,
        status: "completed",
        userAutoFillResponse: T,
        persistSession: !1
    }), (0, o.useAutofillResultStore).getState().stopCurrentFilling(), s = null;
}
_c14 = B;
function q({ pending: e1, currentUrl: t, currentMatch: r1 }) {
    return t === e1.sourceUrl && r1?.flowId === e1.flowId && r1.pageKind === e1.sourcePageKind ? "still_on_source_page" : r1 ? r1.flowId === e1.flowId || "reset_password" === e1.intent && "workday_account_flow" === r1.flowId && "sign_in" === r1.pageKind ? "continue_account_flow" : "ignore" : "start_standard_autofill";
}
let U = q;
function H(e1) {
    e1.completedSteps?.length && (0, a.preAutofillAccountFlowSession).save({
        pageKind: e1.intent,
        completedSteps: e1.completedSteps,
        currentStep: e1.currentStep ?? null,
        status: "running"
    });
}
_c15 = H;
function Y(e1) {
    return !e1 || e1 <= 0 ? Promise.resolve() : new Promise((t)=>{
        setTimeout(t, e1);
    });
}
_c16 = Y;
function z({ pending: e1, canStartStandardAutofill: t }) {
    return !t || t(e1) ? Promise.resolve() : new Promise((r1)=>{
        let n = null, o = !1, i = ()=>{
            t(e1) && (null !== n ? clearInterval(n) : o = !0, r1());
        };
        n = setInterval(i, a.PRE_AUTOFILL_ACCOUNT_STANDARD_READY_CHECK_INTERVAL_MS), o && clearInterval(n);
    });
}
function V({ pending: e1, submitError: t }) {
    let r1 = (0, o.useAutofillResultStore).getState(), n = r1.autoFillResult?.userAutoFillResponse?.[a.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY], i = n && "object" == typeof n ? n : null;
    if (i?.message === t.message && i.rawMessage === t.rawMessage) return;
    let l = e1.submitStep ?? e1.transitionStep ?? null, s = r1.autoFillResult?.fieldRequiredStatus?.map((e1)=>e1.label).filter((e1)=>"string" == typeof e1 && !!e1), u = s?.length ? s : (0, a.preAutofillAccountProgress).getSteps(e1.intent), c = l && !u.includes(l) ? [
        ...u,
        l
    ] : u, d = l ? (0, a.appendCompletedPreAutofillStep)(r1.autoFillResult?.filledFields ?? e1.completedSteps ?? [], l) : r1.autoFillResult?.filledFields ?? e1.completedSteps ?? [];
    (0, a.preAutofillAccountProgress).set({
        pageKind: e1.intent,
        steps: c,
        completedSteps: d,
        currentStep: null,
        status: "completed",
        persistSession: !1,
        userAutoFillResponse: {
            [a.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY]: t
        }
    }), r1.setIsFilling(!1);
}
_c17 = V;
function W() {
    let e1 = (0, o.useAutofillResultStore).getState();
    e1.setFillingMode("standard_autofill"), e1.setProgressTitle(null), e1.setAutoFillResult(null), e1.setHasClickedAutoFill(!0), e1.setIsFilling(!0);
}
_c18 = W;
async function G({ currentUrl: e1, currentMatch: t, startCurrentPreAutofillFlow: r1, startStandardAutofill: n, canStartStandardAutofill: i, hasStandardAutofillSignal: l, isTransitionInScope: s, standardAutofillStartDelayMs: u, onTransitionComplete: c, detectSourcePageSubmitError: d }) {
    let f = (0, a.preAutofillAccountTransitionSession).peek();
    if (!f) return !1;
    let p = q({
        pending: f.payload,
        currentUrl: e1,
        currentMatch: t
    });
    if ("still_on_source_page" === p) {
        await P();
        let e1 = await d?.(f.payload);
        return e1 && V({
            pending: f.payload,
            submitError: e1
        }), !1;
    }
    if (s?.(f.payload) === !1) return (0, a.preAutofillAccountTransitionSession).consume(), (0, a.preAutofillAccountFlowSession).clear(), (0, o.useAutofillResultStore).getState().stopCurrentFilling(), !0;
    if ("start_standard_autofill" === p && (l?.(f.payload) ?? i?.(f.payload)) === !1) return !1;
    let m = (0, a.preAutofillAccountTransitionSession).consume();
    if (!m) return !1;
    (0, a.preAutofillAccountFlowSession).clear();
    let h = q({
        pending: m.payload,
        currentUrl: e1,
        currentMatch: t
    });
    return "continue_account_flow" === h && t ? (H(m.payload), await r1(t)) : "start_standard_autofill" === h ? (W(), await z({
        pending: m.payload,
        canStartStandardAutofill: i
    }), await Y(u), await n(), await c?.({
        currentUrl: e1,
        pending: m.payload
    })) : "still_on_source_page" === h && (0, o.useAutofillResultStore).getState().stopCurrentFilling(), !0;
}
_c19 = G;
let K = G;
function X({ flowId: e1, rules: t, ...r1 }) {
    let n = R(t), l = J(r1);
    return {
        flowId: e1,
        detect: (t)=>(0, i.resolvePreAutofillPageRule)({
                flowId: e1,
                pageRules: n,
                context: t
            }),
        async start (e1) {
            s?.abort(), s = new AbortController;
            let r1 = L({
                rules: t,
                match: e1.match
            });
            if (r1) {
                if ((0, o.useAutofillResultStore).getState().setIsFilling(!0), r1.entry) {
                    await $({
                        context: {
                            ...e1,
                            signal: s.signal
                        },
                        rule: r1,
                        credentialReaders: l
                    });
                    return;
                }
                await B({
                    context: {
                        ...e1,
                        signal: s.signal
                    },
                    rule: r1,
                    credentialReaders: l
                });
            }
        },
        shouldResume (e1) {
            let r1 = L({
                rules: t,
                match: e1.match
            });
            return !!(r1 && !r1.entry && b((0, a.preAutofillAccountFlowSession).get(), r1.state));
        }
    };
}
_c20 = X;
function J(e1) {
    return "getCredentials" in e1 ? {
        getInitialCredentials: e1.getCredentials,
        rereadCredential: ()=>e1.getCredentials()
    } : {
        async getInitialCredentials () {
            let t = await e1.getEmail(), r1 = await e1.getPassword();
            return {
                email: t,
                password: r1
            };
        },
        async rereadCredential (t, r1) {
            if ("email" === r1) {
                let r1 = await e1.getEmail(), n = await e1.getPassword().catch(()=>t.password);
                return {
                    ...t,
                    email: r1,
                    password: n
                };
            }
            let n = await e1.getPassword();
            return {
                ...t,
                password: n
            };
        }
    };
}
_c21 = J;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21;
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
$RefreshReg$(_c15, "H");
$RefreshReg$(_c16, "Y");
$RefreshReg$(_c17, "V");
$RefreshReg$(_c18, "W");
$RefreshReg$(_c19, "G");
$RefreshReg$(_c20, "X");
$RefreshReg$(_c21, "J");

},{}]},["5fx1q","1gd6N"], "1gd6N", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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TCxHQUFHLENBQUM7Z0JBQ0osVUFBVTtZQUNaO1FBQ0Y7SUFDRjtBQUNGO09BOUJTIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1mZDY1YjczNjcxNDI0NGUxLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3ByZS1hdXRvZmlsbC1mbG93L2FjY291bnQtZmxvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxwcmUtYXV0b2ZpbGwtZmxvd1xcXFxhY2NvdW50LWZsb3cuanNcIixcImJ1bmRsZUlkXCI6XCIzYmI2OTNhMWRlMzc1YmM1XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogSWdCSFJcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3ByZS1hdXRvZmlsbC1mbG93L2FjY291bnQtZmxvdy5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYWNjb3VudC1mbG93LXN0YXRlIC0+IDhXT3gyICA9PiAgc3JjL2NvbnRlbnRzL3ByZS1hdXRvZmlsbC1mbG93L2FjY291bnQtZmxvdy1zdGF0ZS5qc1xyXG4gKiAgIC4vY29yZSAtPiBhS1JxUyAgPT4gIHNyYy9jb250ZW50cy9wcmUtYXV0b2ZpbGwtZmxvdy9jb3JlLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+c3RvcmUvYXV0b2ZpbGxSZXN1bHQgLT4gaENVemYgID0+ICBzcmMvc3RvcmUvYXV0b2ZpbGxSZXN1bHQuanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcIlBSRV9BVVRPRklMTF9BQ0NPVU5UX1NVQk1JVF9FUlJPUl9SRUZSRVNIX0RFTEFZX01TXCIsICgpID0+IGwpLFxyXG4gIG4uZXhwb3J0KHIsIFwiY2FuY2VsUHJlQXV0b2ZpbGxBY2NvdW50Rmxvd1wiLCAoKSA9PiBjKSwgbi5leHBvcnQocixcclxuICAgIFwicmVzb2x2ZVByZUF1dG9maWxsQWNjb3VudFRyYW5zaXRpb25cIiwgKCkgPT4gcSksIG4uZXhwb3J0KHIsXHJcbiAgICBcInJlc29sdmVQcmVBdXRvZmlsbEFjY291bnRQZW5kaW5nU3VibWl0XCIsICgpID0+IFUpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJjb25zdW1lUHJlQXV0b2ZpbGxBY2NvdW50VHJhbnNpdGlvblwiLCAoKSA9PiBHKSwgbi5leHBvcnQocixcclxuICAgIFwiY29uc3VtZVByZUF1dG9maWxsQWNjb3VudFBlbmRpbmdTdWJtaXRcIiwgKCkgPT4gSyksIG4uZXhwb3J0KHIsXHJcbiAgICBcImNyZWF0ZVByZUF1dG9maWxsQWNjb3VudEZsb3dBZGFwdGVyXCIsICgpID0+IFgpO1xyXG52YXIgbyA9IGUoXCJ+c3RvcmUvYXV0b2ZpbGxSZXN1bHRcIiksXHJcbiAgaSA9IGUoXCIuL2NvcmVcIiksXHJcbiAgYSA9IGUoXCIuL2FjY291bnQtZmxvdy1zdGF0ZVwiKTtcclxubi5leHBvcnRBbGwoYSwgcik7XHJcbmxldCBsID0gNTAwLFxyXG4gIHMgPSBudWxsLFxyXG4gIHUgPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gYygpIHtcclxuICBzPy5hYm9ydCgpLCBzID0gbnVsbCwgKDAsIGEucHJlQXV0b2ZpbGxBY2NvdW50Rmxvd1Nlc3Npb24pLmNsZWFyKCksICgwLCBhXHJcbiAgICAgIC5wcmVBdXRvZmlsbEFjY291bnRUcmFuc2l0aW9uU2Vzc2lvbikuY2xlYXIoKSwgKDAsIG8udXNlQXV0b2ZpbGxSZXN1bHRTdG9yZSkuZ2V0U3RhdGUoKVxyXG4gICAgLnN0b3BDdXJyZW50RmlsbGluZygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGQoZSkge1xyXG4gIHJldHVybiBlLmFib3J0ZWRcclxufVxyXG5cclxuZnVuY3Rpb24gZihlKSB7XHJcbiAgcmV0dXJuIGUuZmlsdGVyKGUgPT4gITEgIT09IGUucHJvZ3Jlc3MpLm1hcChlID0+ICh7XHJcbiAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgIG1ldGFkYXRhOiBwKGUpXHJcbiAgfSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHAoZSkge1xyXG4gIGxldCB0ID0ge307XHJcbiAgcmV0dXJuIGUucHJvZ3Jlc3NHcm91cCAmJiAodC5wcm9ncmVzc0dyb3VwID0gZS5wcm9ncmVzc0dyb3VwKSwgZS53YWl0Rm9yQ3JlZGVudGlhbCAmJiAodFxyXG4gICAgLnNldHVwQ3JlZGVudGlhbCA9IGUud2FpdEZvckNyZWRlbnRpYWwpLCBPYmplY3Qua2V5cyh0KS5sZW5ndGggPiAwID8ge1xyXG4gICAgc2lnbnVwOiB0XHJcbiAgfSA6IHZvaWQgMFxyXG59XHJcblxyXG5mdW5jdGlvbiBtKGUpIHtcclxuICByZXR1cm4gZS5tYXAoZSA9PiBlLmxhYmVsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoKHtcclxuICBzdGVwczogZSxcclxuICBjdXJyZW50SW5kZXg6IHRcclxufSkge1xyXG4gIHJldHVybiBlLnNsaWNlKHQgKyAxKS5maW5kKGUgPT4gITEgIT09IGUucHJvZ3Jlc3MpPy5sYWJlbCA/PyBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGcoZSwgdCkge1xyXG4gIHJldHVybiAhIWUgJiYgXCJydW5uaW5nXCIgPT09IGUuc3RhdHVzICYmICEhZS5jb21wbGV0ZWRTdGVwcy5sZW5ndGggJiYgKGUucGFnZUtpbmQgPT09IHQgfHxcclxuICAgIFwic2lnbl9pblwiID09PSB0ICYmIFwicmVnaXN0cmF0aW9uXCIgPT09IGUucGFnZUtpbmQgJiYgZS5jb21wbGV0ZWRTdGVwcy5zb21lKGUgPT4gKDAsIGFcclxuICAgICAgLlBSRV9BVVRPRklMTF9BQ0NPVU5UX1JFR0lTVFJBVElPTl9FTlRSWV9TVEVQUykuaW5jbHVkZXMoZSkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBiKGUsIHQpIHtcclxuICByZXR1cm4gZyhlLCB0KVxyXG59XHJcblxyXG5mdW5jdGlvbiB5KHtcclxuICBzZXNzaW9uOiBlLFxyXG4gIHN0YXRlOiB0LFxyXG4gIHJ1bGVQcm9ncmVzc1N0ZXBzOiByXHJcbn0pIHtcclxuICByZXR1cm4gZyhlLCB0KSAmJiBlID8gZS5wYWdlS2luZCA9PT0gdCA/IGUuY29tcGxldGVkU3RlcHMuZmlsdGVyKGUgPT4gIXIuaW5jbHVkZXMoZSkpIDogKDAsIGFcclxuICAgIC5QUkVfQVVUT0ZJTExfQUNDT1VOVF9SRUdJU1RSQVRJT05fRU5UUllfU1RFUFMpLmZpbHRlcih0ID0+IGUuY29tcGxldGVkU3RlcHMuaW5jbHVkZXModCkpIDogW11cclxufVxyXG5cclxuZnVuY3Rpb24gdigpIHtcclxuICBzPy5hYm9ydCgpLCBzID0gbnVsbCwgKDAsIGEucHJlQXV0b2ZpbGxBY2NvdW50Rmxvd1Nlc3Npb24pLmNsZWFyKCksICgwLCBhXHJcbiAgICAgIC5wcmVBdXRvZmlsbEFjY291bnRUcmFuc2l0aW9uU2Vzc2lvbikuY2xlYXIoKSwgKDAsIG8udXNlQXV0b2ZpbGxSZXN1bHRTdG9yZSkuZ2V0U3RhdGUoKVxyXG4gICAgLnN0b3BDdXJyZW50RmlsbGluZygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHcoZSkge1xyXG4gIGQoZSkgfHwgdigpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFMoZSkge1xyXG4gIHJldHVybiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUuYWRkRXZlbnRMaXN0ZW5lciB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA/XHJcbiAgICBudWxsIDogZVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIEUoe1xyXG4gIGNyZWRlbnRpYWw6IGUsXHJcbiAgZG9jdW1lbnQ6IHQsXHJcbiAgY3JlZGVudGlhbHM6IHIsXHJcbiAgcmVyZWFkQ3JlZGVudGlhbDogbixcclxuICBwcm9ncmVzczogbyxcclxuICBzdGVwTGFiZWw6IGwsXHJcbiAgc2lnbmFsOiBzXHJcbn0pIHtcclxuICBpZiAocltlXSkgcmV0dXJuIHI7XHJcbiAgbGV0IHUgPSBTKHQpO1xyXG4gIHJldHVybiAoMCwgYS5kZWJ1Z1ByZUF1dG9maWxsQWNjb3VudFNldHVwKShcInJ1bm5lclwiLCBcIndhaXQtc3RhcnRcIiwge1xyXG4gICAgY3JlZGVudGlhbDogZSxcclxuICAgIHN0ZXBMYWJlbDogbCxcclxuICAgIGhhc0VtYWlsOiAhIXIuZW1haWwsXHJcbiAgICBoYXNQYXNzd29yZDogISFyLnBhc3N3b3JkXHJcbiAgfSksIG5ldyBQcm9taXNlKHQgPT4ge1xyXG4gICAgbGV0IGMgPSAhMSxcclxuICAgICAgZCA9ICExLFxyXG4gICAgICBmID0gITEsXHJcbiAgICAgIHAgPSBudWxsLFxyXG4gICAgICBtID0gbnVsbCxcclxuICAgICAgaCA9ICgpID0+IHtcclxuICAgICAgICBwICYmIGNsZWFyVGltZW91dChwKSwgbSAmJiBjbGVhclRpbWVvdXQobSksIHU/LnJlbW92ZUV2ZW50TGlzdGVuZXIoYVxyXG4gICAgICAgICAgLlBSRV9BVVRPRklMTF9BQ0NPVU5UX0NSRURFTlRJQUxTX0NIQU5HRURfRVZFTlQsIHYpLCBzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICBcImFib3J0XCIsIGIpXHJcbiAgICAgIH0sXHJcbiAgICAgIGcgPSBlID0+IHtcclxuICAgICAgICBjIHx8IChjID0gITAsIGgoKSwgdChlKSlcclxuICAgICAgfSxcclxuICAgICAgYiA9ICgpID0+IGcobnVsbCksXHJcbiAgICAgIHkgPSAoKSA9PiB7XHJcbiAgICAgICAgYyB8fCBmIHx8IChmID0gITAsICgwLCBhLmRlYnVnUHJlQXV0b2ZpbGxBY2NvdW50U2V0dXApKFwicnVubmVyXCIsIFwicHJvbXB0LXNob3dcIiwge1xyXG4gICAgICAgICAgY3JlZGVudGlhbDogZSxcclxuICAgICAgICAgIHN0ZXBMYWJlbDogbFxyXG4gICAgICAgIH0pLCBvLm1hcmtDcmVkZW50aWFsTWlzc2luZyhsKSwgKDAsIGkud2FpdEZvclByZUF1dG9maWxsRmxvd0RlYnVnU3RlcCkoXHJcbiAgICAgICAgICBgTWlzc2luZyB2YWx1ZSBmb3IgJHtsfWAsIHMpKVxyXG4gICAgICB9O1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gdigpIHtcclxuICAgICAgaWYgKCFkICYmICFjKSB7XHJcbiAgICAgICAgZCA9ICEwO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBsZXQgdCA9IGF3YWl0IG4ociwgZSk7XHJcbiAgICAgICAgICAoMCwgYS5kZWJ1Z1ByZUF1dG9maWxsQWNjb3VudFNldHVwKShcInJ1bm5lclwiLCBcImNyZWRlbnRpYWwtcmVhZFwiLCB7XHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWw6IGUsXHJcbiAgICAgICAgICAgIHN0ZXBMYWJlbDogbCxcclxuICAgICAgICAgICAgaGFzRW1haWw6ICEhdC5lbWFpbCxcclxuICAgICAgICAgICAgaGFzUGFzc3dvcmQ6ICEhdC5wYXNzd29yZCxcclxuICAgICAgICAgICAgZm91bmQ6ICEhdFtlXVxyXG4gICAgICAgICAgfSksIHRbZV0gJiYgZyh0KVxyXG4gICAgICAgIH0gY2F0Y2gge30gZmluYWxseSB7XHJcbiAgICAgICAgICBkID0gITFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHU/LmFkZEV2ZW50TGlzdGVuZXIoYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9DUkVERU5USUFMU19DSEFOR0VEX0VWRU5ULCB2KSwgc1xyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGIsIHtcclxuICAgICAgICBvbmNlOiAhMFxyXG4gICAgICB9KSwgcCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGcobnVsbClcclxuICAgICAgfSwgYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9QQVNTV09SRF9XQUlUX1RJTUVPVVRfTVMpLCBtID0gc2V0VGltZW91dCh5LCBhXHJcbiAgICAgICAgLlBSRV9BVVRPRklMTF9BQ0NPVU5UX1NFVFVQX1BST01QVF9ERUxBWV9NUyksIHYoKVxyXG4gIH0pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24geCh7XHJcbiAgY29udGV4dDogZSxcclxuICBwcm9ncmVzczogdCxcclxuICBzdGVwOiByLFxyXG4gIG5leHRTdGVwOiBuLFxyXG4gIGFjdGlvbjogb1xyXG59KSB7XHJcbiAgaWYgKGQoZS5zaWduYWwpKSByZXR1cm4gITE7XHJcbiAgbGV0IGEgPSBhd2FpdCBvKGUpO1xyXG4gIHJldHVybiAhZChlLnNpZ25hbCkgJiYgKCExID09PSBhID8gKHQubWFya01pc3NpbmcociksIGF3YWl0ICgwLCBpXHJcbiAgICAud2FpdEZvclByZUF1dG9maWxsRmxvd0RlYnVnU3RlcCkoYE1pc3NpbmcgJHtyfWAsIGUuc2lnbmFsKSwgITEpIDogKHQuY29tcGxldGUociwgbiksXHJcbiAgICBhd2FpdCAoMCwgaS53YWl0Rm9yUHJlQXV0b2ZpbGxGbG93RGVidWdTdGVwKShuID8/IGAke3J9IGNvbXBsZXRlZGAsIGUuc2lnbmFsKSwgIWQoZVxyXG4gICAgICAuc2lnbmFsKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEMoe1xyXG4gIGNvbnRleHQ6IGUsXHJcbiAgaW50ZW50OiB0LFxyXG4gIHRyYW5zaXRpb25TdGVwOiByLFxyXG4gIGNvbXBsZXRlZFN0ZXBzOiBuLFxyXG4gIGN1cnJlbnRTdGVwOiBpLFxyXG4gIHRhcmdldFVybDogbFxyXG59KSB7XHJcbiAgbGV0IHMgPSB7XHJcbiAgICAgIGZsb3dJZDogZS5tYXRjaC5mbG93SWQsXHJcbiAgICAgIGludGVudDogdCA/PyBlLnN0YXRlLFxyXG4gICAgICBzb3VyY2VVcmw6IGUudXJsLFxyXG4gICAgICAuLi5sID8ge1xyXG4gICAgICAgIHRhcmdldFVybDogbFxyXG4gICAgICB9IDoge30sXHJcbiAgICAgIHNvdXJjZVBhZ2VLaW5kOiBlLm1hdGNoLnBhZ2VLaW5kLFxyXG4gICAgICB0cmFuc2l0aW9uU3RlcDogcixcclxuICAgICAgY29tcGxldGVkU3RlcHM6IG4sXHJcbiAgICAgIGN1cnJlbnRTdGVwOiBpXHJcbiAgICB9LFxyXG4gICAgdSA9ICgwLCBhLnByZUF1dG9maWxsQWNjb3VudFRyYW5zaXRpb25TZXNzaW9uKS5wZWVrKCksXHJcbiAgICBjID0gdT8ucGF5bG9hZCxcclxuICAgIGQgPSBvLnVzZUF1dG9maWxsUmVzdWx0U3RvcmUuZ2V0U3RhdGUoKS5hdXRvRmlsbFJlc3VsdD8udXNlckF1dG9GaWxsUmVzcG9uc2U/LlthXHJcbiAgICAgIC5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVUJNSVRfRVJST1JfS0VZXHJcbiAgICBdO1xyXG4gIGlmIChjICYmIEEoYywgcykgJiYgIWQpIHtcclxuICAgIGxldCBlID0gRGF0ZS5ub3coKSAtICh1Py5jcmVhdGVkQXQgPz8gMCk7XHJcbiAgICByZXR1cm4gZSA+IGEuUFJFX0FVVE9GSUxMX0FDQ09VTlRfU1VCTUlUX1JFRlJFU0hfREVCT1VOQ0VfTVMgJiYgKCgwLCBhXHJcbiAgICAgIC5wcmVBdXRvZmlsbEFjY291bnRUcmFuc2l0aW9uU2Vzc2lvbikuc2F2ZShzKSwgVCgpKSwge1xyXG4gICAgICBwZW5kaW5nOiBjLFxyXG4gICAgICBkaWRTdWJtaXQ6ICExXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoMCwgYS5wcmVBdXRvZmlsbEFjY291bnRUcmFuc2l0aW9uU2Vzc2lvbikuc2F2ZShzKSwgaigpICYmIEQoKSwgVCgpLCB7XHJcbiAgICBwZW5kaW5nOiBzLFxyXG4gICAgZGlkU3VibWl0OiAhMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQShlLCB0KSB7XHJcbiAgcmV0dXJuIGUuZmxvd0lkID09PSB0LmZsb3dJZCAmJiBlLmludGVudCA9PT0gdC5pbnRlbnQgJiYgZS5zb3VyY2VVcmwgPT09IHQuc291cmNlVXJsICYmIGVcclxuICAgIC50YXJnZXRVcmwgPT09IHQudGFyZ2V0VXJsICYmIGUuc291cmNlUGFnZUtpbmQgPT09IHQuc291cmNlUGFnZUtpbmQgJiYgZS50cmFuc2l0aW9uU3RlcCA9PT0gdFxyXG4gICAgLnRyYW5zaXRpb25TdGVwICYmIGUuY3VycmVudFN0ZXAgPT09IHQuY3VycmVudFN0ZXAgJiYgayhlLmNvbXBsZXRlZFN0ZXBzLCB0LmNvbXBsZXRlZFN0ZXBzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBrKGUsIHQpIHtcclxuICBsZXQgciA9IGUgPz8gW10sXHJcbiAgICBuID0gdCA/PyBbXTtcclxuICByZXR1cm4gci5sZW5ndGggPT09IG4ubGVuZ3RoICYmIHIuZXZlcnkoKGUsIHQpID0+IGUgPT09IG5bdF0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFQoKSB7XHJcbiAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygd2luZG93LmRpc3BhdGNoRXZlbnQgJiYgd2luZG93LmRpc3BhdGNoRXZlbnQoXHJcbiAgICBuZXcgRXZlbnQoYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9UUkFOU0lUSU9OX0NIQU5HRURfRVZFTlQpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBGKHtcclxuICBjb250ZXh0OiBlLFxyXG4gIHN0YXRlOiB0XHJcbn0pIHtcclxuICByZXR1cm4ge1xyXG4gICAgZmxvd0lkOiBlLm1hdGNoLmZsb3dJZCxcclxuICAgIGludGVudDogdCxcclxuICAgIHNvdXJjZVVybDogZS51cmwsXHJcbiAgICBzb3VyY2VQYWdlS2luZDogZS5tYXRjaC5wYWdlS2luZCxcclxuICAgIHRyYW5zaXRpb25TdGVwOiBcIlwiLFxyXG4gICAgY29tcGxldGVkU3RlcHM6IFtdXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBJKHtcclxuICBjb250ZXh0OiBlLFxyXG4gIHByb2dyZXNzOiB0LFxyXG4gIHN0ZXA6IHIsXHJcbiAgdHJhbnNpdGlvbjogblxyXG59KSB7XHJcbiAgbGV0IG8gPSBuLmluY2x1ZGVTdGVwID8gKDAsIGEuYXBwZW5kQ29tcGxldGVkUHJlQXV0b2ZpbGxTdGVwKSh0LmdldENvbXBsZXRlZFN0ZXBzKCksIHIubGFiZWwpIDogdFxyXG4gICAgLmdldENvbXBsZXRlZFN0ZXBzKCksXHJcbiAgICBpID0gbi5nZXRUYXJnZXRVcmw/LihlKSA/PyB2b2lkIDA7XHJcbiAgQyh7XHJcbiAgICBjb250ZXh0OiBlLFxyXG4gICAgaW50ZW50OiBuLmludGVudCxcclxuICAgIHRyYW5zaXRpb25TdGVwOiByLmxhYmVsLFxyXG4gICAgY29tcGxldGVkU3RlcHM6IG8sXHJcbiAgICBjdXJyZW50U3RlcDogbi5jdXJyZW50U3RlcCA/PyBudWxsLFxyXG4gICAgdGFyZ2V0VXJsOiBpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaigpIHtcclxuICBsZXQgZSA9ICgwLCBvLnVzZUF1dG9maWxsUmVzdWx0U3RvcmUpLmdldFN0YXRlKCksXHJcbiAgICB0ID0gZS5hdXRvRmlsbFJlc3VsdDtcclxuICBpZiAoIXQ/LnVzZXJBdXRvRmlsbFJlc3BvbnNlPy5bYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVUJNSVRfRVJST1JfS0VZXSkgcmV0dXJuICExO1xyXG4gIGxldCB7XHJcbiAgICBbYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVUJNSVRfRVJST1JfS0VZXTogciwgLi4ublxyXG4gIH0gPSB0LnVzZXJBdXRvRmlsbFJlc3BvbnNlO1xyXG4gIHJldHVybiBlLnNldEF1dG9GaWxsUmVzdWx0KHtcclxuICAgIC4uLnQsXHJcbiAgICB1c2VyQXV0b0ZpbGxSZXNwb25zZTogblxyXG4gIH0pLCAhMFxyXG59XHJcblxyXG5mdW5jdGlvbiBEKCkge1xyXG4gIHUgPSBuZXcgUHJvbWlzZShlID0+IHtcclxuICAgIHNldFRpbWVvdXQoZSwgbClcclxuICB9KVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIFAoKSB7XHJcbiAgbGV0IGUgPSB1O1xyXG4gIGUgJiYgKGF3YWl0IGUsIHUgPT09IGUgJiYgKHUgPSBudWxsKSlcclxufVxyXG5cclxuZnVuY3Rpb24gXyh7XHJcbiAgc3RhdGU6IGUsXHJcbiAgc3RlcHM6IHQsXHJcbiAgY29tcGxldGVkU3RlcHM6IHIsXHJcbiAgbWlzc2luZ1N0ZXBzOiBuID0gW10sXHJcbiAgcHJvZ3Jlc3NUaXRsZTogaVxyXG59KSB7XHJcbiAgbGV0IGwgPSByLFxyXG4gICAgcyA9IG4sXHJcbiAgICB1ID0gW107XHJcblxyXG4gIGZ1bmN0aW9uIGMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TRVRVUF9NSVNTSU5HX1NURVBTX0tFWV06IHVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGQociwgbikge1xyXG4gICAgKDAsIGEucHJlQXV0b2ZpbGxBY2NvdW50UHJvZ3Jlc3MpLnNldCh7XHJcbiAgICAgICAgcGFnZUtpbmQ6IGUsXHJcbiAgICAgICAgc3RlcHM6IHQsXHJcbiAgICAgICAgY29tcGxldGVkU3RlcHM6IGwsXHJcbiAgICAgICAgbWlzc2luZ1N0ZXBzOiBzLFxyXG4gICAgICAgIGN1cnJlbnRTdGVwOiByLFxyXG4gICAgICAgIHVzZXJBdXRvRmlsbFJlc3BvbnNlOiBjKCksXHJcbiAgICAgICAgcGVyc2lzdFNlc3Npb246ICExXHJcbiAgICAgIH0pLCB2b2lkIDAgIT09IG4gPyAoMCwgby51c2VBdXRvZmlsbFJlc3VsdFN0b3JlKS5nZXRTdGF0ZSgpLnNldFByb2dyZXNzVGl0bGUobikgOiB2b2lkIDAgIT09XHJcbiAgICAgIGkgJiYgKDAsIG8udXNlQXV0b2ZpbGxSZXN1bHRTdG9yZSkuZ2V0U3RhdGUoKS5zZXRQcm9ncmVzc1RpdGxlKGkpXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24oZSwgdCkge1xyXG4gICAgICBsID0gKDAsIGEuYXBwZW5kQ29tcGxldGVkUHJlQXV0b2ZpbGxTdGVwKShsLCBlKSwgcyA9IHMuZmlsdGVyKHQgPT4gdCAhPT0gZSksIHUgPSB1LmZpbHRlcihcclxuICAgICAgICB0ID0+IHQgIT09IGUpLCBkKHQpXHJcbiAgICB9LFxyXG4gICAgbWFya0NyZWRlbnRpYWxNaXNzaW5nOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHMgPSBbZV0sIHUgPSBbZV0sIGQoZSwgYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TRVRVUF9QUk9HUkVTU19USVRMRSlcclxuICAgIH0sXHJcbiAgICBtYXJrTWlzc2luZzogZnVuY3Rpb24oZSkge1xyXG4gICAgICBzID0gW2VdLCB1ID0gW10sIGQoZSlcclxuICAgIH0sXHJcbiAgICBzZXRDdXJyZW50OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGQoZSlcclxuICAgIH0sXHJcbiAgICBnZXRDb21wbGV0ZWRTdGVwczogKCkgPT4gbFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gTCh7XHJcbiAgcnVsZXM6IGUsXHJcbiAgbWF0Y2g6IHRcclxufSkge1xyXG4gIHJldHVybiBlW3QucGFnZUtpbmRdID8/IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gUihlKSB7XHJcbiAgbGV0IHQgPSBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoZSkubWFwKChbZSwge1xyXG4gICAgc3RhdGU6IHQsXHJcbiAgICBlbnRyeTogcixcclxuICAgIGN0YVRleHQ6IG4sXHJcbiAgICBwcm9ncmVzc1RpdGxlOiBvLFxyXG4gICAgY29tcGxldGVFbnRyeVByb2dyZXNzOiBpLFxyXG4gICAgLi4ubFxyXG4gIH1dKSA9PiBbZSwge1xyXG4gICAgLi4ubCxcclxuICAgIGN0YVRleHQ6IG4gPz8gKDAsIGEuZ2V0UHJlQXV0b2ZpbGxBY2NvdW50Rmxvd0N0YVRleHQpKHQpXHJcbiAgfV0pKTtcclxuICByZXR1cm4gKDAsIGkuZGVmaW5lUHJlQXV0b2ZpbGxQYWdlUnVsZXMpKHQpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gTyh7XHJcbiAgY29udGV4dDogZSxcclxuICBzdGVwczogdFxyXG59KSB7XHJcbiAgbGV0IHIgPSBbXTtcclxuICBmb3IgKGxldCBuIG9mIHQpKCFuLnNob3VsZFJ1biB8fCBhd2FpdCBuLnNob3VsZFJ1bihlKSkgJiYgci5wdXNoKG4pO1xyXG4gIHJldHVybiByXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gTSh7XHJcbiAgY29udGV4dDogZSxcclxuICBjcmVkZW50aWFsUmVhZGVyczogdCxcclxuICBwcm9ncmVzczogcixcclxuICBzdGVwOiBuXHJcbn0pIHtcclxuICBsZXQgbyA9IG4ud2FpdEZvckNyZWRlbnRpYWw7XHJcbiAgaWYgKCFvIHx8IGUuY3JlZGVudGlhbHNbb10pIHJldHVybiAhMDtcclxuICB0cnkge1xyXG4gICAgbGV0IHIgPSBhd2FpdCB0LnJlcmVhZENyZWRlbnRpYWwoZS5jcmVkZW50aWFscywgbyk7XHJcbiAgICBpZiAoZS5jcmVkZW50aWFscyA9IHIsIHJbb10pIHJldHVybiAhMFxyXG4gIH0gY2F0Y2gge31cclxuICBsZXQgaSA9IGF3YWl0IEUoe1xyXG4gICAgY3JlZGVudGlhbDogbyxcclxuICAgIGRvY3VtZW50OiBlLmRvY3VtZW50LFxyXG4gICAgY3JlZGVudGlhbHM6IGUuY3JlZGVudGlhbHMsXHJcbiAgICByZXJlYWRDcmVkZW50aWFsOiB0LnJlcmVhZENyZWRlbnRpYWwsXHJcbiAgICBwcm9ncmVzczogcixcclxuICAgIHN0ZXBMYWJlbDogbi5sYWJlbCxcclxuICAgIHNpZ25hbDogZS5zaWduYWxcclxuICB9KTtcclxuICByZXR1cm4gISFpICYmIChlLmNyZWRlbnRpYWxzID0gaSwgITApXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gTih7XHJcbiAgY29udGV4dDogZSxcclxuICBjcmVkZW50aWFsUmVhZGVyczogdCxcclxuICBwcm9ncmVzczogcixcclxuICBzdGVwczogblxyXG59KSB7XHJcbiAgZm9yIChsZXQgW28sIGldIG9mIG4uZW50cmllcygpKSB7XHJcbiAgICBpZiAoZChlLnNpZ25hbCkpIHJldHVybiAhMTtcclxuICAgIGxldCBhID0gaCh7XHJcbiAgICAgIHN0ZXBzOiBuLFxyXG4gICAgICBjdXJyZW50SW5kZXg6IG9cclxuICAgIH0pO1xyXG4gICAgaS50cmFuc2l0aW9uPy50aW1pbmcgPT09IFwiYmVmb3JlXCIgJiYgSSh7XHJcbiAgICAgIGNvbnRleHQ6IGUsXHJcbiAgICAgIHByb2dyZXNzOiByLFxyXG4gICAgICBzdGVwOiBpLFxyXG4gICAgICB0cmFuc2l0aW9uOiBpLnRyYW5zaXRpb25cclxuICAgIH0pO1xyXG4gICAgbGV0IGwgPSBhd2FpdCBNKHtcclxuICAgICAgY29udGV4dDogZSxcclxuICAgICAgY3JlZGVudGlhbFJlYWRlcnM6IHQsXHJcbiAgICAgIHByb2dyZXNzOiByLFxyXG4gICAgICBzdGVwOiBpXHJcbiAgICB9KTtcclxuICAgIGlmICghbCB8fCBkKGUuc2lnbmFsKSkgcmV0dXJuICExO1xyXG4gICAgbGV0IHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCB0ID0gXCJqZFwiID09PSBlLm1hdGNoLnBhZ2VLaW5kID8gci5nZXRDb21wbGV0ZWRTdGVwcygpIDogW107XHJcbiAgICAgIHJldHVybiBpLnJ1bih7XHJcbiAgICAgICAgLi4uZSxcclxuICAgICAgICBvblN1Ym1pdDogKCkgPT4gITEgPT09IGkuc3VibWl0U2Vzc2lvbiA/IHtcclxuICAgICAgICAgIHBlbmRpbmc6IHtcclxuICAgICAgICAgICAgLi4uRih7XHJcbiAgICAgICAgICAgICAgY29udGV4dDogZSxcclxuICAgICAgICAgICAgICBzdGF0ZTogZS5zdGF0ZVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvblN0ZXA6IGkubGFiZWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlZFN0ZXBzOiB0LFxyXG4gICAgICAgICAgICBjdXJyZW50U3RlcDogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRpZFN1Ym1pdDogITBcclxuICAgICAgICB9IDogQyh7XHJcbiAgICAgICAgICBjb250ZXh0OiBlLFxyXG4gICAgICAgICAgdHJhbnNpdGlvblN0ZXA6IGkubGFiZWwsXHJcbiAgICAgICAgICBjb21wbGV0ZWRTdGVwczogdCxcclxuICAgICAgICAgIGN1cnJlbnRTdGVwOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBpZiAoITEgPT09IGkucHJvZ3Jlc3MpIHtcclxuICAgICAgbGV0IGUgPSBhd2FpdCBzKCk7XHJcbiAgICAgIGlmICghMSA9PT0gZSkgcmV0dXJuICExXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgdCA9IGF3YWl0IHgoe1xyXG4gICAgICAgIGNvbnRleHQ6IGUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHIsXHJcbiAgICAgICAgc3RlcDogaS5sYWJlbCxcclxuICAgICAgICBuZXh0U3RlcDogYSxcclxuICAgICAgICBhY3Rpb246IHNcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghdCkgcmV0dXJuICExXHJcbiAgICB9XHJcbiAgICBpLnRyYW5zaXRpb24/LnRpbWluZyA9PT0gXCJhZnRlclwiICYmIEkoe1xyXG4gICAgICBjb250ZXh0OiBlLFxyXG4gICAgICBwcm9ncmVzczogcixcclxuICAgICAgc3RlcDogaSxcclxuICAgICAgdHJhbnNpdGlvbjogaS50cmFuc2l0aW9uXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gITBcclxufVxyXG5hc3luYyBmdW5jdGlvbiAkKHtcclxuICBjb250ZXh0OiBlLFxyXG4gIHJ1bGU6IHQsXHJcbiAgY3JlZGVudGlhbFJlYWRlcnM6IHJcclxufSkge1xyXG4gIGxldCBuID0gZS5zaWduYWwgPz8gbmV3IEFib3J0Q29udHJvbGxlcigpLnNpZ25hbCxcclxuICAgIGwgPSB0LnN0YXRlLFxyXG4gICAgdSA9IHtcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICB9LFxyXG4gICAgYyA9IHtcclxuICAgICAgLi4uZSxcclxuICAgICAgZG9jdW1lbnQ6IGUuZG9jdW1lbnQsXHJcbiAgICAgIHN0YXRlOiBsLFxyXG4gICAgICBzaWduYWw6IG4sXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB1LFxyXG4gICAgICBvblN1Ym1pdDogKCkgPT4gKHtcclxuICAgICAgICBwZW5kaW5nOiBGKHtcclxuICAgICAgICAgIGNvbnRleHQ6IGUsXHJcbiAgICAgICAgICBzdGF0ZTogbFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGRpZFN1Ym1pdDogITFcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBwID0gYXdhaXQgTyh7XHJcbiAgICAgIGNvbnRleHQ6IGMsXHJcbiAgICAgIHN0ZXBzOiB0LnN0ZXBzXHJcbiAgICB9KSxcclxuICAgIG0gPSBmKHApLFxyXG4gICAgaCA9IF8oe1xyXG4gICAgICBzdGF0ZTogbCxcclxuICAgICAgc3RlcHM6IG0sXHJcbiAgICAgIGNvbXBsZXRlZFN0ZXBzOiBbXSxcclxuICAgICAgcHJvZ3Jlc3NUaXRsZTogdC5wcm9ncmVzc1RpdGxlXHJcbiAgICB9KSxcclxuICAgIGcgPSBtWzBdPy5sYWJlbCA/PyBudWxsO1xyXG4gIGlmIChoLnNldEN1cnJlbnQoZyksIGF3YWl0ICgwLCBpLndhaXRGb3JQcmVBdXRvZmlsbEZsb3dEZWJ1Z1N0ZXApKGcgPz8gXCJTdGFydCBhY2NvdW50IGVudHJ5XCIsXHJcbiAgICBuKSwgZChuKSkgcmV0dXJuO1xyXG4gIGxldCBiID0gYXdhaXQgTih7XHJcbiAgICBjb250ZXh0OiBjLFxyXG4gICAgY3JlZGVudGlhbFJlYWRlcnM6IHIsXHJcbiAgICBwcm9ncmVzczogaCxcclxuICAgIHN0ZXBzOiBwXHJcbiAgfSk7XHJcbiAgaWYgKCFiKSB7XHJcbiAgICB3KG4pLCAoMCwgYS5wcmVBdXRvZmlsbEFjY291bnRUcmFuc2l0aW9uU2Vzc2lvbikuY2xlYXIoKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZiAodC5jb21wbGV0ZUVudHJ5UHJvZ3Jlc3MgJiYgIWQobikpIHtcclxuICAgIGxldCBlID0gby51c2VBdXRvZmlsbFJlc3VsdFN0b3JlLmdldFN0YXRlKCkuYXV0b0ZpbGxSZXN1bHQ/LnVzZXJBdXRvRmlsbFJlc3BvbnNlO1xyXG4gICAgKDAsIGEucHJlQXV0b2ZpbGxBY2NvdW50UHJvZ3Jlc3MpLnNldCh7XHJcbiAgICAgIHBhZ2VLaW5kOiBsLFxyXG4gICAgICBzdGVwczogbSxcclxuICAgICAgY29tcGxldGVkU3RlcHM6IGguZ2V0Q29tcGxldGVkU3RlcHMoKSxcclxuICAgICAgY3VycmVudFN0ZXA6IG51bGwsXHJcbiAgICAgIHN0YXR1czogXCJjb21wbGV0ZWRcIixcclxuICAgICAgdXNlckF1dG9GaWxsUmVzcG9uc2U6IGUsXHJcbiAgICAgIHBlcnNpc3RTZXNzaW9uOiAhMVxyXG4gICAgfSksICgwLCBvLnVzZUF1dG9maWxsUmVzdWx0U3RvcmUpLmdldFN0YXRlKCkuc3RvcEN1cnJlbnRGaWxsaW5nKCksIHMgPSBudWxsXHJcbiAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIEIoe1xyXG4gIGNvbnRleHQ6IGUsXHJcbiAgcnVsZTogdCxcclxuICBjcmVkZW50aWFsUmVhZGVyczogclxyXG59KSB7XHJcbiAgbGV0IG4gPSBlLnNpZ25hbCA/PyBuZXcgQWJvcnRDb250cm9sbGVyKCkuc2lnbmFsLFxyXG4gICAgbCA9IHQuc3RhdGUsXHJcbiAgICB1ID0gYXdhaXQgci5nZXRJbml0aWFsQ3JlZGVudGlhbHMoKTtcclxuICBpZiAoZChuKSkgcmV0dXJuO1xyXG4gIGxldCBjID0gKDAsIGEucHJlQXV0b2ZpbGxBY2NvdW50Rmxvd1Nlc3Npb24pLmdldCgpLFxyXG4gICAgcCA9IGIoYywgbCk7XHJcbiAgcCAmJiAoMCwgYS5wcmVBdXRvZmlsbEFjY291bnRGbG93U2Vzc2lvbikuY2xlYXIoKTtcclxuICBsZXQgaCA9IHtcclxuICAgICAgZG9jdW1lbnQ6IGUuZG9jdW1lbnQsXHJcbiAgICAgIHN0YXRlOiBsLFxyXG4gICAgICBzaWduYWw6IG5cclxuICAgIH0sXHJcbiAgICBnID0ge1xyXG4gICAgICAuLi5lLFxyXG4gICAgICAuLi5oLFxyXG4gICAgICBlbnRyeVNlc3Npb246IHAgPyBjIDogbnVsbCxcclxuICAgICAgY3JlZGVudGlhbHM6IHUsXHJcbiAgICAgIG9uU3VibWl0OiAoKSA9PiAoe1xyXG4gICAgICAgIHBlbmRpbmc6IEYoe1xyXG4gICAgICAgICAgY29udGV4dDogZSxcclxuICAgICAgICAgIHN0YXRlOiBsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZGlkU3VibWl0OiAhMVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHYgPSBhd2FpdCBPKHtcclxuICAgICAgY29udGV4dDogZyxcclxuICAgICAgc3RlcHM6IHQuc3RlcHNcclxuICAgIH0pO1xyXG4gIGlmIChkKG4pKSByZXR1cm47XHJcbiAgbGV0IFMgPSBmKHYpLFxyXG4gICAgRSA9IHkoe1xyXG4gICAgICBzZXNzaW9uOiBjLFxyXG4gICAgICBzdGF0ZTogbCxcclxuICAgICAgcnVsZVByb2dyZXNzU3RlcHM6IG0oUylcclxuICAgIH0pLFxyXG4gICAgeCA9IFsuLi5FLCAuLi5TXSxcclxuICAgIEMgPSBfKHtcclxuICAgICAgc3RhdGU6IGwsXHJcbiAgICAgIHN0ZXBzOiB4LFxyXG4gICAgICBjb21wbGV0ZWRTdGVwczogRVxyXG4gICAgfSksXHJcbiAgICBBID0gU1swXT8ubGFiZWwgPz8gbnVsbDtcclxuICBpZiAoQy5zZXRDdXJyZW50KEEpLCBhd2FpdCAoMCwgaS53YWl0Rm9yUHJlQXV0b2ZpbGxGbG93RGVidWdTdGVwKShBID8/IFwiU3RhcnQgYWNjb3VudCBmb3JtXCIsIG4pLFxyXG4gICAgZChuKSkgcmV0dXJuO1xyXG4gIGxldCBrID0gYXdhaXQgTih7XHJcbiAgICBjb250ZXh0OiBnLFxyXG4gICAgY3JlZGVudGlhbFJlYWRlcnM6IHIsXHJcbiAgICBwcm9ncmVzczogQyxcclxuICAgIHN0ZXBzOiB2XHJcbiAgfSk7XHJcbiAgaWYgKCFrKSB7XHJcbiAgICB3KG4pO1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmIChkKG4pKSByZXR1cm47XHJcbiAgbGV0IFQgPSBvLnVzZUF1dG9maWxsUmVzdWx0U3RvcmUuZ2V0U3RhdGUoKS5hdXRvRmlsbFJlc3VsdD8udXNlckF1dG9GaWxsUmVzcG9uc2U7XHJcbiAgKDAsIGEucHJlQXV0b2ZpbGxBY2NvdW50UHJvZ3Jlc3MpLnNldCh7XHJcbiAgICBwYWdlS2luZDogbCxcclxuICAgIHN0ZXBzOiB4LFxyXG4gICAgY29tcGxldGVkU3RlcHM6IEMuZ2V0Q29tcGxldGVkU3RlcHMoKSxcclxuICAgIGN1cnJlbnRTdGVwOiBudWxsLFxyXG4gICAgc3RhdHVzOiBcImNvbXBsZXRlZFwiLFxyXG4gICAgdXNlckF1dG9GaWxsUmVzcG9uc2U6IFQsXHJcbiAgICBwZXJzaXN0U2Vzc2lvbjogITFcclxuICB9KSwgKDAsIG8udXNlQXV0b2ZpbGxSZXN1bHRTdG9yZSkuZ2V0U3RhdGUoKS5zdG9wQ3VycmVudEZpbGxpbmcoKSwgcyA9IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gcSh7XHJcbiAgcGVuZGluZzogZSxcclxuICBjdXJyZW50VXJsOiB0LFxyXG4gIGN1cnJlbnRNYXRjaDogclxyXG59KSB7XHJcbiAgcmV0dXJuIHQgPT09IGUuc291cmNlVXJsICYmIHI/LmZsb3dJZCA9PT0gZS5mbG93SWQgJiYgci5wYWdlS2luZCA9PT0gZS5zb3VyY2VQYWdlS2luZCA/XHJcbiAgICBcInN0aWxsX29uX3NvdXJjZV9wYWdlXCIgOiByID8gci5mbG93SWQgPT09IGUuZmxvd0lkIHx8IFwicmVzZXRfcGFzc3dvcmRcIiA9PT0gZS5pbnRlbnQgJiZcclxuICAgIFwid29ya2RheV9hY2NvdW50X2Zsb3dcIiA9PT0gci5mbG93SWQgJiYgXCJzaWduX2luXCIgPT09IHIucGFnZUtpbmQgPyBcImNvbnRpbnVlX2FjY291bnRfZmxvd1wiIDpcclxuICAgIFwiaWdub3JlXCIgOiBcInN0YXJ0X3N0YW5kYXJkX2F1dG9maWxsXCJcclxufVxyXG5sZXQgVSA9IHE7XHJcblxyXG5mdW5jdGlvbiBIKGUpIHtcclxuICBlLmNvbXBsZXRlZFN0ZXBzPy5sZW5ndGggJiYgKDAsIGEucHJlQXV0b2ZpbGxBY2NvdW50Rmxvd1Nlc3Npb24pLnNhdmUoe1xyXG4gICAgcGFnZUtpbmQ6IGUuaW50ZW50LFxyXG4gICAgY29tcGxldGVkU3RlcHM6IGUuY29tcGxldGVkU3RlcHMsXHJcbiAgICBjdXJyZW50U3RlcDogZS5jdXJyZW50U3RlcCA/PyBudWxsLFxyXG4gICAgc3RhdHVzOiBcInJ1bm5pbmdcIlxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFkoZSkge1xyXG4gIHJldHVybiAhZSB8fCBlIDw9IDAgPyBQcm9taXNlLnJlc29sdmUoKSA6IG5ldyBQcm9taXNlKHQgPT4ge1xyXG4gICAgc2V0VGltZW91dCh0LCBlKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHooe1xyXG4gIHBlbmRpbmc6IGUsXHJcbiAgY2FuU3RhcnRTdGFuZGFyZEF1dG9maWxsOiB0XHJcbn0pIHtcclxuICByZXR1cm4gIXQgfHwgdChlKSA/IFByb21pc2UucmVzb2x2ZSgpIDogbmV3IFByb21pc2UociA9PiB7XHJcbiAgICBsZXQgbiA9IG51bGwsXHJcbiAgICAgIG8gPSAhMSxcclxuICAgICAgaSA9ICgpID0+IHtcclxuICAgICAgICB0KGUpICYmIChudWxsICE9PSBuID8gY2xlYXJJbnRlcnZhbChuKSA6IG8gPSAhMCwgcigpKVxyXG4gICAgICB9O1xyXG4gICAgbiA9IHNldEludGVydmFsKGksIGEuUFJFX0FVVE9GSUxMX0FDQ09VTlRfU1RBTkRBUkRfUkVBRFlfQ0hFQ0tfSU5URVJWQUxfTVMpLCBvICYmXHJcbiAgICAgIGNsZWFySW50ZXJ2YWwobilcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBWKHtcclxuICBwZW5kaW5nOiBlLFxyXG4gIHN1Ym1pdEVycm9yOiB0XHJcbn0pIHtcclxuICBsZXQgciA9ICgwLCBvLnVzZUF1dG9maWxsUmVzdWx0U3RvcmUpLmdldFN0YXRlKCksXHJcbiAgICBuID0gci5hdXRvRmlsbFJlc3VsdD8udXNlckF1dG9GaWxsUmVzcG9uc2U/LlthLlBSRV9BVVRPRklMTF9BQ0NPVU5UX1NVQk1JVF9FUlJPUl9LRVldLFxyXG4gICAgaSA9IG4gJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbiA/IG4gOiBudWxsO1xyXG4gIGlmIChpPy5tZXNzYWdlID09PSB0Lm1lc3NhZ2UgJiYgaS5yYXdNZXNzYWdlID09PSB0LnJhd01lc3NhZ2UpIHJldHVybjtcclxuICBsZXQgbCA9IGUuc3VibWl0U3RlcCA/PyBlLnRyYW5zaXRpb25TdGVwID8/IG51bGwsXHJcbiAgICBzID0gci5hdXRvRmlsbFJlc3VsdD8uZmllbGRSZXF1aXJlZFN0YXR1cz8ubWFwKGUgPT4gZS5sYWJlbCkuZmlsdGVyKGUgPT4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJlxyXG4gICAgICAhIWUpLFxyXG4gICAgdSA9IHM/Lmxlbmd0aCA/IHMgOiAoMCwgYS5wcmVBdXRvZmlsbEFjY291bnRQcm9ncmVzcykuZ2V0U3RlcHMoZS5pbnRlbnQpLFxyXG4gICAgYyA9IGwgJiYgIXUuaW5jbHVkZXMobCkgPyBbLi4udSwgbF0gOiB1LFxyXG4gICAgZCA9IGwgPyAoMCwgYS5hcHBlbmRDb21wbGV0ZWRQcmVBdXRvZmlsbFN0ZXApKHIuYXV0b0ZpbGxSZXN1bHQ/LmZpbGxlZEZpZWxkcyA/PyBlXHJcbiAgICAgIC5jb21wbGV0ZWRTdGVwcyA/PyBbXSwgbCkgOiByLmF1dG9GaWxsUmVzdWx0Py5maWxsZWRGaWVsZHMgPz8gZS5jb21wbGV0ZWRTdGVwcyA/PyBbXTtcclxuICAoMCwgYS5wcmVBdXRvZmlsbEFjY291bnRQcm9ncmVzcykuc2V0KHtcclxuICAgIHBhZ2VLaW5kOiBlLmludGVudCxcclxuICAgIHN0ZXBzOiBjLFxyXG4gICAgY29tcGxldGVkU3RlcHM6IGQsXHJcbiAgICBjdXJyZW50U3RlcDogbnVsbCxcclxuICAgIHN0YXR1czogXCJjb21wbGV0ZWRcIixcclxuICAgIHBlcnNpc3RTZXNzaW9uOiAhMSxcclxuICAgIHVzZXJBdXRvRmlsbFJlc3BvbnNlOiB7XHJcbiAgICAgIFthLlBSRV9BVVRPRklMTF9BQ0NPVU5UX1NVQk1JVF9FUlJPUl9LRVldOiB0XHJcbiAgICB9XHJcbiAgfSksIHIuc2V0SXNGaWxsaW5nKCExKVxyXG59XHJcblxyXG5mdW5jdGlvbiBXKCkge1xyXG4gIGxldCBlID0gKDAsIG8udXNlQXV0b2ZpbGxSZXN1bHRTdG9yZSkuZ2V0U3RhdGUoKTtcclxuICBlLnNldEZpbGxpbmdNb2RlKFwic3RhbmRhcmRfYXV0b2ZpbGxcIiksIGUuc2V0UHJvZ3Jlc3NUaXRsZShudWxsKSwgZS5zZXRBdXRvRmlsbFJlc3VsdChudWxsKSwgZVxyXG4gICAgLnNldEhhc0NsaWNrZWRBdXRvRmlsbCghMCksIGUuc2V0SXNGaWxsaW5nKCEwKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIEcoe1xyXG4gIGN1cnJlbnRVcmw6IGUsXHJcbiAgY3VycmVudE1hdGNoOiB0LFxyXG4gIHN0YXJ0Q3VycmVudFByZUF1dG9maWxsRmxvdzogcixcclxuICBzdGFydFN0YW5kYXJkQXV0b2ZpbGw6IG4sXHJcbiAgY2FuU3RhcnRTdGFuZGFyZEF1dG9maWxsOiBpLFxyXG4gIGhhc1N0YW5kYXJkQXV0b2ZpbGxTaWduYWw6IGwsXHJcbiAgaXNUcmFuc2l0aW9uSW5TY29wZTogcyxcclxuICBzdGFuZGFyZEF1dG9maWxsU3RhcnREZWxheU1zOiB1LFxyXG4gIG9uVHJhbnNpdGlvbkNvbXBsZXRlOiBjLFxyXG4gIGRldGVjdFNvdXJjZVBhZ2VTdWJtaXRFcnJvcjogZFxyXG59KSB7XHJcbiAgbGV0IGYgPSAoMCwgYS5wcmVBdXRvZmlsbEFjY291bnRUcmFuc2l0aW9uU2Vzc2lvbikucGVlaygpO1xyXG4gIGlmICghZikgcmV0dXJuICExO1xyXG4gIGxldCBwID0gcSh7XHJcbiAgICBwZW5kaW5nOiBmLnBheWxvYWQsXHJcbiAgICBjdXJyZW50VXJsOiBlLFxyXG4gICAgY3VycmVudE1hdGNoOiB0XHJcbiAgfSk7XHJcbiAgaWYgKFwic3RpbGxfb25fc291cmNlX3BhZ2VcIiA9PT0gcCkge1xyXG4gICAgYXdhaXQgUCgpO1xyXG4gICAgbGV0IGUgPSBhd2FpdCBkPy4oZi5wYXlsb2FkKTtcclxuICAgIHJldHVybiBlICYmIFYoe1xyXG4gICAgICBwZW5kaW5nOiBmLnBheWxvYWQsXHJcbiAgICAgIHN1Ym1pdEVycm9yOiBlXHJcbiAgICB9KSwgITFcclxuICB9XHJcbiAgaWYgKHM/LihmLnBheWxvYWQpID09PSAhMSkgcmV0dXJuICgwLCBhLnByZUF1dG9maWxsQWNjb3VudFRyYW5zaXRpb25TZXNzaW9uKS5jb25zdW1lKCksICgwLCBhXHJcbiAgICAgIC5wcmVBdXRvZmlsbEFjY291bnRGbG93U2Vzc2lvbikuY2xlYXIoKSwgKDAsIG8udXNlQXV0b2ZpbGxSZXN1bHRTdG9yZSkuZ2V0U3RhdGUoKVxyXG4gICAgLnN0b3BDdXJyZW50RmlsbGluZygpLCAhMDtcclxuICBpZiAoXCJzdGFydF9zdGFuZGFyZF9hdXRvZmlsbFwiID09PSBwICYmIChsPy4oZi5wYXlsb2FkKSA/PyBpPy4oZi5wYXlsb2FkKSkgPT09ICExKSByZXR1cm4gITE7XHJcbiAgbGV0IG0gPSAoMCwgYS5wcmVBdXRvZmlsbEFjY291bnRUcmFuc2l0aW9uU2Vzc2lvbikuY29uc3VtZSgpO1xyXG4gIGlmICghbSkgcmV0dXJuICExO1xyXG4gICgwLCBhLnByZUF1dG9maWxsQWNjb3VudEZsb3dTZXNzaW9uKS5jbGVhcigpO1xyXG4gIGxldCBoID0gcSh7XHJcbiAgICBwZW5kaW5nOiBtLnBheWxvYWQsXHJcbiAgICBjdXJyZW50VXJsOiBlLFxyXG4gICAgY3VycmVudE1hdGNoOiB0XHJcbiAgfSk7XHJcbiAgcmV0dXJuIFwiY29udGludWVfYWNjb3VudF9mbG93XCIgPT09IGggJiYgdCA/IChIKG0ucGF5bG9hZCksIGF3YWl0IHIodCkpIDpcclxuICAgIFwic3RhcnRfc3RhbmRhcmRfYXV0b2ZpbGxcIiA9PT0gaCA/IChXKCksIGF3YWl0IHooe1xyXG4gICAgICBwZW5kaW5nOiBtLnBheWxvYWQsXHJcbiAgICAgIGNhblN0YXJ0U3RhbmRhcmRBdXRvZmlsbDogaVxyXG4gICAgfSksIGF3YWl0IFkodSksIGF3YWl0IG4oKSwgYXdhaXQgYz8uKHtcclxuICAgICAgY3VycmVudFVybDogZSxcclxuICAgICAgcGVuZGluZzogbS5wYXlsb2FkXHJcbiAgICB9KSkgOiBcInN0aWxsX29uX3NvdXJjZV9wYWdlXCIgPT09IGggJiYgKDAsIG8udXNlQXV0b2ZpbGxSZXN1bHRTdG9yZSkuZ2V0U3RhdGUoKVxyXG4gICAgLnN0b3BDdXJyZW50RmlsbGluZygpLCAhMFxyXG59XHJcbmxldCBLID0gRztcclxuXHJcbmZ1bmN0aW9uIFgoe1xyXG4gIGZsb3dJZDogZSxcclxuICBydWxlczogdCxcclxuICAuLi5yXHJcbn0pIHtcclxuICBsZXQgbiA9IFIodCksXHJcbiAgICBsID0gSihyKTtcclxuICByZXR1cm4ge1xyXG4gICAgZmxvd0lkOiBlLFxyXG4gICAgZGV0ZWN0OiB0ID0+ICgwLCBpLnJlc29sdmVQcmVBdXRvZmlsbFBhZ2VSdWxlKSh7XHJcbiAgICAgIGZsb3dJZDogZSxcclxuICAgICAgcGFnZVJ1bGVzOiBuLFxyXG4gICAgICBjb250ZXh0OiB0XHJcbiAgICB9KSxcclxuICAgIGFzeW5jIHN0YXJ0KGUpIHtcclxuICAgICAgcz8uYWJvcnQoKSwgcyA9IG5ldyBBYm9ydENvbnRyb2xsZXI7XHJcbiAgICAgIGxldCByID0gTCh7XHJcbiAgICAgICAgcnVsZXM6IHQsXHJcbiAgICAgICAgbWF0Y2g6IGUubWF0Y2hcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgaWYgKCgwLCBvLnVzZUF1dG9maWxsUmVzdWx0U3RvcmUpLmdldFN0YXRlKCkuc2V0SXNGaWxsaW5nKCEwKSwgci5lbnRyeSkge1xyXG4gICAgICAgICAgYXdhaXQgJCh7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcclxuICAgICAgICAgICAgICAuLi5lLFxyXG4gICAgICAgICAgICAgIHNpZ25hbDogcy5zaWduYWxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnVsZTogcixcclxuICAgICAgICAgICAgY3JlZGVudGlhbFJlYWRlcnM6IGxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IEIoe1xyXG4gICAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgICAuLi5lLFxyXG4gICAgICAgICAgICBzaWduYWw6IHMuc2lnbmFsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcnVsZTogcixcclxuICAgICAgICAgIGNyZWRlbnRpYWxSZWFkZXJzOiBsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3VsZFJlc3VtZShlKSB7XHJcbiAgICAgIGxldCByID0gTCh7XHJcbiAgICAgICAgcnVsZXM6IHQsXHJcbiAgICAgICAgbWF0Y2g6IGUubWF0Y2hcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiAhIShyICYmICFyLmVudHJ5ICYmIGIoKDAsIGEucHJlQXV0b2ZpbGxBY2NvdW50Rmxvd1Nlc3Npb24pLmdldCgpLCByLnN0YXRlKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEooZSkge1xyXG4gIHJldHVybiBcImdldENyZWRlbnRpYWxzXCIgaW4gZSA/IHtcclxuICAgIGdldEluaXRpYWxDcmVkZW50aWFsczogZS5nZXRDcmVkZW50aWFscyxcclxuICAgIHJlcmVhZENyZWRlbnRpYWw6ICgpID0+IGUuZ2V0Q3JlZGVudGlhbHMoKVxyXG4gIH0gOiB7XHJcbiAgICBhc3luYyBnZXRJbml0aWFsQ3JlZGVudGlhbHMoKSB7XHJcbiAgICAgIGxldCB0ID0gYXdhaXQgZS5nZXRFbWFpbCgpLFxyXG4gICAgICAgIHIgPSBhd2FpdCBlLmdldFBhc3N3b3JkKCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZW1haWw6IHQsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHJlcmVhZENyZWRlbnRpYWwodCwgcikge1xyXG4gICAgICBpZiAoXCJlbWFpbFwiID09PSByKSB7XHJcbiAgICAgICAgbGV0IHIgPSBhd2FpdCBlLmdldEVtYWlsKCksXHJcbiAgICAgICAgICBuID0gYXdhaXQgZS5nZXRQYXNzd29yZCgpLmNhdGNoKCgpID0+IHQucGFzc3dvcmQpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgZW1haWw6IHIsXHJcbiAgICAgICAgICBwYXNzd29yZDogblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgbiA9IGF3YWl0IGUuZ2V0UGFzc3dvcmQoKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi50LFxyXG4gICAgICAgIHBhc3N3b3JkOiBuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJhY2NvdW50LWZsb3cuZGUzNzViYzUuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);