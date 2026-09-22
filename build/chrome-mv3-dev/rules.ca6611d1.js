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
})({"bVhE0":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\cisco\\rules.js",
    "bundleId": "e5cfbb23ca6611d1",
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
var j = z(require("86d30677c2af811"));
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

},{"86d30677c2af811":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"gO0HH":[function(require,module,exports) {
/**
 * Parcel module id: hx3S7
 * Resolved path: src/contents/sites/cisco/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "FORM_SELECTOR", ()=>a), n.export(r, "FIELD_CONTAINER_SELECTOR", ()=>l), n.export(r, "CONTINUE_BUTTON_SELECTOR", ()=>s), n.export(r, "RESUME_FILE_INPUT_SELECTOR", ()=>u), n.export(r, "RESUME_UPLOADED_LINK_SELECTOR", ()=>c), n.export(r, "RESUME_DELETE_SELECTOR", ()=>d), n.export(r, "isActuallyVisible", ()=>b), n.export(r, "getCurrentCiscoStep", ()=>v), n.export(r, "getStepInfo", ()=>w), n.export(r, "getFormRoot", ()=>S), n.export(r, "getCiscoRegularFillRules", ()=>E), n.export(r, "getArrayContainer", ()=>Q), n.export(r, "getCompositeItemFieldsets", ()=>ee), n.export(r, "getCompositeRules", ()=>eo), n.export(r, "extractRules", ()=>ei), n.export(r, "getAdditionalFormSnapshotData", ()=>eu), n.export(r, "getFormSnapshot", ()=>ec);
var o = e("~core/enums"), i = e("~contents/methods/observer");
let a = 'form.rjsf[data-ot-ignore="true"], form.rjsf', l = ".form-group.field", s = 'button#next, button[atm-id="submit-button"]', u = ".resume-upload-wrapper input[type='file'], input[type='file']", c = 'a[atm-id="uploadedresume-link"], .has-resume.resume-info .downloadFile', d = 'a.deleteFile[aria-label="Delete"], .has-resume.resume-info .deleteFile', f = "fieldset.field.field-array.field-array-of-object", p = 1200, m = 50;
function h(e1) {
    return (e1 || "").replace(/\s+/g, " ").trim();
}
function g(e1) {
    let t = e1;
    for(; t && t !== document.documentElement;){
        if (t.hidden || "true" === t.getAttribute("aria-hidden") || t.classList.contains("hidden") || t.classList.contains("hide") || t.classList.contains("collapse") && !t.classList.contains("show")) return !0;
        let e1 = window.getComputedStyle(t);
        if ("none" === e1.display || "hidden" === e1.visibility || "collapse" === e1.visibility || 0 === Number(e1.opacity || "1")) return !0;
        t = t.parentElement;
    }
    return !1;
}
function b(e1) {
    if (!(e1 instanceof HTMLElement) || g(e1)) return !1;
    if ("function" == typeof e1.checkVisibility) {
        let t = e1.checkVisibility.bind(e1), r1 = t({
            checkOpacity: !0,
            checkVisibilityCSS: !0,
            contentVisibilityAuto: !0,
            opacityProperty: !0,
            visibilityProperty: !0
        });
        if (!r1) return !1;
    }
    if ("function" == typeof e1.getClientRects) {
        let t = e1.getClientRects();
        if (0 === t.length) return !1;
    }
    return !0;
}
function y() {
    let e1 = new URL(window.location.href), t = h(e1.searchParams.get("stepname")).toLowerCase(), r1 = Number(e1.searchParams.get("step") || "0");
    return {
        key: t || `step-${r1 || 0}`,
        index: Number.isFinite(r1) ? r1 : 0,
        title: t || `step ${r1 || 0}`
    };
}
function v() {
    return y();
}
function w() {
    return y();
}
function S() {
    return document.querySelector(a);
}
_c = S;
function E(e1) {
    return e1.filter((e1)=>e1.type !== o.FIELD_TYPE.EDUCATION && e1.type !== o.FIELD_TYPE.EMPLOYMENT);
}
_c1 = E;
function x() {
    let { index: e1, key: t } = y();
    return e1 <= 1 || "personalinformation" === t;
}
function C(e1 = document) {
    let { key: t } = y(), r1 = t.trim().toLowerCase();
    return r1.includes("review") || r1.includes("submit") || !!e1.querySelector(".summary-text, .summary-item, .summary-label, .summary-value");
}
_c2 = C;
function A(e1) {
    if (e1.classList.contains("field-object")) return !1;
    let t = Array.from(e1.children).some((e1)=>e1 instanceof HTMLElement && e1.matches(".form-group.field, fieldset, .col-md-6 .form-group.field, .col-md-12 .form-group.field"));
    if (t) return !1;
    let r1 = Array.from(e1.querySelectorAll(":scope .col-md-6 .form-group.field, :scope .col-md-12 .form-group.field")).some((t)=>t !== e1);
    return !r1;
}
_c3 = A;
function k(e1) {
    if (!e1) return "";
    let t = e1.cloneNode(!0);
    return t.querySelectorAll(".required,[aria-hidden='true']").forEach((e1)=>{
        e1.remove();
    }), h(t.textContent);
}
function T(e1) {
    if (!e1.querySelector(".checkbox")) return "";
    let t = e1.closest(".col-md-6, .col-md-12"), r1 = t?.previousElementSibling ?? null;
    for(; r1;){
        if (!(r1 instanceof HTMLElement)) {
            r1 = r1.previousElementSibling;
            continue;
        }
        let e1 = r1.querySelector(".markdown p, .markdown");
        if (e1) return h(e1.textContent);
        let t = !!r1.querySelector("input, textarea, select, .checkbox, .radio");
        if (t) break;
        r1 = r1.previousElementSibling;
    }
    return "";
}
_c4 = T;
function F(e1) {
    let t = h(e1).toLowerCase();
    return "please select an option below:" === t;
}
_c5 = F;
function I(e1) {
    let t = e1.closest(".col-md-6, .col-md-12")?.previousElementSibling ?? e1.previousElementSibling;
    for(; t;){
        if (!(t instanceof HTMLElement)) {
            t = t.previousElementSibling;
            continue;
        }
        let e1 = !!t.querySelector("input, textarea, select, .checkbox, .radio");
        if (e1) break;
        let r1 = t.querySelector(".markdown p, .markdown"), n = h(r1?.textContent || t.textContent);
        if (n) {
            let e1 = n.includes("?");
            if (e1 || n.length <= 220) return n;
        }
        t = t.previousElementSibling;
    }
    return "";
}
_c6 = I;
function j(e1) {
    let t = e1.querySelector("input, textarea, select");
    return t?.id === "languageChange";
}
function D(e1) {
    let t = e1.id ? document.querySelector(`label[for="${CSS.escape(e1.id)}"]`) : null, r1 = t?.textContent || e1.closest("label")?.textContent || e1.parentElement?.textContent || "";
    return h(r1.replace(/\*/g, " "));
}
_c7 = D;
function P(e1) {
    let t = k(e1.querySelector("label.control-label, legend"));
    if (t) return t;
    let r1 = T(e1);
    if (r1) return r1;
    let n = e1.querySelector(".checkbox label, .radio label, label");
    if (!n) return "";
    let o = n.cloneNode(!0);
    return o.querySelectorAll("input, .check, .checkmark").forEach((e1)=>{
        e1.remove();
    }), h(o.textContent);
}
_c8 = P;
function _(e1, t) {
    let r1 = h(e1).toLowerCase(), n = !!t.id.match(/\.fromTo\.(startDate|endDate)$/i) || !!t.closest("#educationData, #experienceData");
    return n ? "MM/YYYY" : "what is the earliest date you could start?" === r1 || r1.includes("earliest date you could start") ? "YYYY/MM/DD" : "MM/DD/YYYY";
}
function L(e1, t) {
    return `Please format the date as: ${_(e1, t)}`;
}
_c9 = L;
function R(e1) {
    let t = e1.querySelector("label.control-label");
    if (t?.querySelector(".required")) return !0;
    let r1 = e1.querySelector("input, textarea, select");
    return r1?.required === !0 || r1?.getAttribute("aria-required") === "true";
}
_c10 = R;
function O(e1) {
    let t = e1.closest(f);
    if (!(t instanceof HTMLElement)) return null;
    let r1 = t.parentElement?.closest(f);
    return r1 instanceof HTMLElement ? r1 : t;
}
_c11 = O;
function M(e1) {
    return Array.from(e1.querySelectorAll(l)).filter((e1)=>b(e1)).filter((e1)=>!j(e1)).filter((e1)=>A(e1)).filter((e1)=>{
        let t = Array.from(e1.querySelectorAll("input, textarea, select")).filter((e1)=>"hidden" !== e1.type && "file" !== e1.type && !e1.disabled && b(e1));
        return t.length > 0;
    });
}
_c12 = M;
function N(e1) {
    let t = Array.from(e1.querySelectorAll("input, textarea, select")).filter((t)=>{
        if ("hidden" === t.type || "file" === t.type || t.disabled || !b(t)) return !1;
        let r1 = t.closest(".form-group.field");
        return r1 === e1;
    });
    return t[0] ?? null;
}
_c13 = N;
function $(e1) {
    return Array.from(e1.options).map((e1)=>h(e1.textContent)).filter((e1)=>!B(e1)).filter(Boolean);
}
function B(e1) {
    let t = e1.toLowerCase();
    return "please select" === t || "select" === t;
}
_c14 = B;
function q(e1) {
    let t = $(e1);
    return 0 === t.length || t.every(B);
}
function U(e1) {
    return $(e1).join("\x01");
}
_c15 = U;
function H(e1) {
    let t = {
        bubbles: !0,
        cancelable: !0
    };
    return e1.startsWith("key") && "function" == typeof KeyboardEvent ? new KeyboardEvent(e1, {
        ...t,
        code: "ArrowDown",
        key: "ArrowDown"
    }) : e1.startsWith("pointer") && "function" == typeof PointerEvent ? new PointerEvent(e1, {
        ...t,
        pointerType: "mouse"
    }) : "function" == typeof MouseEvent ? new MouseEvent(e1, t) : new Event(e1, t);
}
_c16 = H;
function Y(e1, t) {
    try {
        e1.dispatchEvent(H(t));
    } catch  {
        e1.dispatchEvent(new Event(t, {
            bubbles: !0,
            cancelable: !0
        }));
    }
}
_c17 = Y;
async function z(e1) {
    if (!q(e1)) return;
    let t = U(e1);
    try {
        e1.focus({
            preventScroll: !0
        });
    } catch  {
        e1.focus();
    }
    for (let t of [
        "pointerdown",
        "mousedown",
        "mouseup",
        "click",
        "keydown",
        "keyup"
    ])Y(e1, t);
    await (0, i.waitForCondition)(()=>!q(e1) && U(e1) !== t, {
        interval: m,
        observeTarget: e1,
        timeout: p
    }), e1.blur();
}
async function V(e1) {
    let t = Array.from(e1.querySelectorAll("select"));
    for (let e1 of t)!e1.disabled && "hidden" !== e1.type && b(e1) && await z(e1);
}
_c18 = V;
function W(e1) {
    let t = Array.from(e1.querySelectorAll('input[type="radio"]')).filter((t)=>b(t) && t.closest(".form-group.field") === e1);
    if (0 === t.length) return null;
    let r1 = P(e1);
    if (!r1) return null;
    let n = F(r1) ? I(e1) : "", i = n || r1;
    return {
        label: i,
        required: R(e1),
        type: o.FIELD_TYPE.RADIOGROUP,
        options: t.map((e1)=>D(e1)).filter(Boolean),
        $label: e1.querySelector("label.control-label, legend") || e1,
        $input: t[0],
        $radioParent: e1
    };
}
_c19 = W;
function G(e1) {
    let t = Array.from(e1.querySelectorAll('input[type="checkbox"]')).filter((t)=>b(t) && t.closest(".form-group.field") === e1);
    if (0 === t.length) return null;
    let r1 = P(e1);
    return r1 ? {
        label: r1,
        required: R(e1),
        type: o.FIELD_TYPE.CHECKBOX,
        options: 1 === t.length ? [
            "Yes",
            "No"
        ] : t.map((e1)=>D(e1)).filter(Boolean),
        $label: e1.querySelector("label.control-label, legend") || e1,
        $input: e1,
        $checkboxs: t
    } : null;
}
_c20 = G;
function K(e1) {
    let t = e1.querySelector('.daterangepicker-checkbox input[type="checkbox"][id*="currentlyWorkHere"]');
    if (!t || !b(t)) return null;
    let r1 = h(t.closest(".daterangepicker-checkbox")?.textContent || t.getAttribute("aria-label") || "I currently work here");
    return r1 ? {
        label: r1,
        required: !1,
        type: o.FIELD_TYPE.CHECKBOX,
        options: [
            "Yes",
            "No"
        ],
        $label: t.closest(".daterangepicker-checkbox") || t,
        $input: t,
        $checkboxs: [
            t
        ]
    } : null;
}
_c21 = K;
function X(e1) {
    let t = N(e1), r1 = t instanceof HTMLSelectElement ? t : null;
    if (!r1 || !b(r1)) return null;
    let n = P(e1);
    return n ? {
        label: n,
        required: R(e1),
        type: o.FIELD_TYPE.SELECT,
        options: $(r1),
        $label: e1.querySelector("label.control-label, legend") || e1,
        $input: r1
    } : null;
}
_c22 = X;
function J(e1) {
    let t;
    let r1 = N(e1), n = r1 instanceof HTMLTextAreaElement ? r1 : null;
    if (n && b(n)) {
        let t = P(e1);
        return t ? {
            label: t,
            required: R(e1),
            type: o.FIELD_TYPE.TEXT,
            $label: e1.querySelector("label.control-label, legend") || e1,
            $input: n
        } : null;
    }
    let i = r1 instanceof HTMLInputElement && "hidden" !== r1.type && "radio" !== r1.type && "checkbox" !== r1.type ? r1 : null;
    if (!i || !b(i)) return null;
    let a = P(e1);
    if (!a) return null;
    let l = o.FIELD_TYPE.TEXT, s = "combobox" === i.getAttribute("role") || "asyncTypeahead" === i.getAttribute("data-attribute") || !!i.closest(".async-typeahead-v3"), u = "date" === i.type || !!i.closest(".react-datepicker-wrapper") || !!i.id.match(/\.fromTo\.(startDate|endDate)$/i);
    return i.id.match(/\.fromTo\.(startDate|endDate)$/i) || i.closest("#educationData, #experienceData"), u ? (l = o.FIELD_TYPE.DATE, t = L(a, i)) : (s || "search" === i.type || "address-level2" === i.getAttribute("src/contents/sites/metacareers/autocomplete")) && (l = o.FIELD_TYPE.SEARCH), {
        label: a,
        required: R(e1),
        type: l,
        description: t,
        $label: e1.querySelector("label.control-label, legend") || e1,
        $input: i
    };
}
_c23 = J;
function Q(e1) {
    let t = e1 === o.FIELD_TYPE.EDUCATION ? "educationData" : "experienceData";
    return S()?.querySelector(`fieldset#${t}`) ?? null;
}
_c24 = Q;
function Z(e1) {
    return "educationData" === e1.id ? o.FIELD_TYPE.EDUCATION : "experienceData" === e1.id ? o.FIELD_TYPE.EMPLOYMENT : null;
}
_c25 = Z;
function ee(e1) {
    return Array.from(e1.querySelectorAll(":scope > .row.array-item-list fieldset[id]")).filter((t)=>{
        let r1 = e1.id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return RegExp(`^${r1}\\[\\d+\\]$`).test(t.id);
    });
}
function et(e1) {
    return ee(e1)[0] ?? null;
}
function er(e1) {
    let t = M(e1), r1 = [];
    for (let e1 of t){
        let t = W(e1) || G(e1) || X(e1) || J(e1);
        t?.label && r1.push(t);
    }
    let n = K(e1);
    return n && !r1.some((e1)=>e1.type === o.FIELD_TYPE.CHECKBOX && e1.label === n.label) && r1.push(n), r1;
}
function en(e1, t) {
    let r1 = et(e1);
    if (!r1) return null;
    let n = er(r1);
    if (0 === n.length) return null;
    let i = e1.querySelector(".more-actions .array-button-add") ?? void 0;
    return {
        label: t === o.FIELD_TYPE.EDUCATION ? "Education" : "Employment",
        required: !0,
        type: t,
        $input: i,
        children: n,
        options: n.map((e1)=>({
                label: e1.label,
                type: e1.type,
                ...Array.isArray(e1.options) && e1.options.length > 0 ? {
                    options: e1.options
                } : {}
            }))
    };
}
async function eo(e1) {
    let t = Q(e1);
    if (!t) return [];
    await V(t);
    let r1 = [];
    for (let n of ee(t)){
        let i = er(n);
        0 !== i.length && r1.push({
            label: e1 === o.FIELD_TYPE.EDUCATION ? "Education" : "Employment",
            required: !0,
            type: e1,
            $input: t.querySelector(".more-actions .array-button-add") ?? void 0,
            children: i,
            options: i.map((e1)=>({
                    label: e1.label,
                    type: e1.type,
                    ...Array.isArray(e1.options) && e1.options.length > 0 ? {
                        options: e1.options
                    } : {}
                }))
        });
    }
    return r1;
}
async function ei() {
    let e1 = S();
    if (!e1 || C(e1)) return [];
    await V(e1);
    let t = [], r1 = new Set, n = Array.from(e1.querySelectorAll(f)).filter((e1)=>!e1.closest(`${f} ${f}`));
    for (let e1 of n){
        let r1 = Z(e1);
        if (!r1) continue;
        let n = en(e1, r1);
        n && t.push(n);
    }
    for (let n of M(e1)){
        let e1 = O(n);
        if (e1) {
            let t = Z(e1);
            if (t) continue;
            let r1 = et(e1);
            if (!r1 || !r1.contains(n)) continue;
        }
        let o = W(n) || G(n) || X(n) || J(n);
        if (!o?.label) continue;
        let i = `${o.type}:${o.label}`;
        r1.has(i) || (r1.add(i), t.push(o));
    }
    return t;
}
function ea(e1) {
    let t = P(e1);
    if (!t) return null;
    let r1 = N(e1), n = r1 instanceof HTMLSelectElement ? r1 : null;
    if (n && b(n)) {
        let e1 = n.selectedOptions?.[0]?.textContent?.trim() || "";
        return {
            label: t,
            type: o.FIELD_TYPE.SELECT,
            value: e1 || n.value,
            text: e1
        };
    }
    let i = Array.from(e1.querySelectorAll('input[type="radio"]')).filter((t)=>b(t) && t.closest(".form-group.field") === e1);
    if (i.length > 0) {
        let r1 = F(t) ? I(e1) : "", n = r1 || t, a = i.find((e1)=>e1.checked);
        return {
            label: n,
            type: o.FIELD_TYPE.RADIOGROUP,
            value: a?.value || "",
            text: a ? D(a) : ""
        };
    }
    let a = Array.from(e1.querySelectorAll('input[type="checkbox"]')).filter((t)=>b(t) && t.closest(".form-group.field") === e1);
    if (a.length > 0) return {
        label: t,
        type: o.FIELD_TYPE.CHECKBOX,
        value: 1 === a.length ? a[0].checked ? "Yes" : "No" : a.filter((e1)=>e1.checked).map((e1)=>D(e1))
    };
    let l = r1 instanceof HTMLTextAreaElement ? r1 : null;
    if (l && b(l)) return {
        label: t,
        type: o.FIELD_TYPE.TEXT,
        value: l.value
    };
    let s = r1 instanceof HTMLInputElement && "hidden" !== r1.type && "radio" !== r1.type && "checkbox" !== r1.type ? r1 : null;
    return s && b(s) ? {
        label: t,
        type: s.closest(".react-datepicker-wrapper") || s.id.match(/\.fromTo\.(startDate|endDate)$/i) ? o.FIELD_TYPE.DATE : "combobox" === s.getAttribute("role") || "asyncTypeahead" === s.getAttribute("data-attribute") || s.closest(".async-typeahead-v3") ? o.FIELD_TYPE.SEARCH : o.FIELD_TYPE.TEXT,
        value: s.value
    } : null;
}
function el(e1) {
    let t = {};
    for (let r1 of e1)r1?.label && void 0 !== r1.value && (t[r1.label] = r1.value);
    return t;
}
function es(e1) {
    let t = Q(e1);
    return t ? ee(t).map((e1)=>{
        let t = M(e1).map((e1)=>ea(e1)).filter(Boolean), r1 = K(e1);
        if (r1) {
            let e1 = r1.$checkboxs?.[0];
            t.push({
                label: r1.label,
                type: o.FIELD_TYPE.CHECKBOX,
                value: e1?.checked ? "Yes" : "No"
            });
        }
        return el(t);
    }).filter((e1)=>Object.keys(e1).length > 0) : [];
}
function eu() {
    return {
        education: es(o.FIELD_TYPE.EDUCATION),
        employment: es(o.FIELD_TYPE.EMPLOYMENT)
    };
}
function ec() {
    let e1 = S(), t = {};
    if (!e1) return t;
    let r1 = M(e1).filter((e1)=>{
        let t = O(e1);
        if (!t) return !0;
        let r1 = Z(t);
        if (r1) return !1;
        let n = et(t);
        return !!n && n.contains(e1);
    });
    for (let e1 of r1){
        let r1 = ea(e1);
        r1?.label && (t[r1.label] = r1.value);
    }
    if (x()) {
        let e1 = document.querySelector(c);
        e1 && (t["Resume/CV"] = h(e1.textContent));
    }
    let n = e1.querySelector(s);
    return n && (t.__buttonText = h(n.textContent) || h(n.getAttribute("value"))), t.__step = w().index, t.__stepname = w().key, t;
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

},{}]},["bVhE0","gO0HH"], "gO0HH", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QVcsQ0FBQyxFQUFFLEtBQUssRUFBRTtJQUFHO0FBQUU7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLE9BQU8sR0FBRyxHQUFFLENBQUMsRUFBRSxJQUFFO0FBQUk7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUcsS0FBRSxFQUFFO0lBQUMsS0FBSSxJQUFJLE1BQUssRUFBRTtRQUFDLElBQUksSUFBRSxFQUFFLE9BQUksRUFBRSxPQUFJLEVBQUUsT0FBSSxFQUFFO1FBQUcsR0FBRyxTQUFPLEdBQUUsS0FBSztJQUFFO0lBQUMsSUFBSSxJQUFFLEVBQUU7SUFBRyxPQUFPLEtBQUcsQ0FBQyxHQUFFLEtBQUssQ0FBQSxLQUFHLEdBQUUsU0FBTyxFQUFFLFdBQVcsWUFBVSxHQUFFLFVBQVEsRUFBRSxVQUFRLEdBQUUsS0FBSyxJQUFHO0FBQUM7QUFBQyxTQUFTLEdBQUcsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsR0FBRztJQUFHLElBQUcsQ0FBQyxJQUFFLE9BQU87SUFBSyxJQUFJLElBQUUsR0FBRztJQUFHLElBQUcsTUFBSSxFQUFFLFFBQU8sT0FBTztJQUFLLElBQUksSUFBRSxHQUFFLGNBQWMsc0NBQW9DLEtBQUs7SUFBRSxPQUFNO1FBQUMsT0FBTSxNQUFJLEVBQUUsV0FBVyxZQUFVLGNBQVk7UUFBYSxVQUFTLENBQUM7UUFBRSxNQUFLO1FBQUUsUUFBTztRQUFFLFVBQVM7UUFBRSxTQUFRLEVBQUUsSUFBSSxDQUFBLEtBQUksQ0FBQTtnQkFBQyxPQUFNLEdBQUU7Z0JBQU0sTUFBSyxHQUFFO2dCQUFLLEdBQUcsTUFBTSxRQUFRLEdBQUUsWUFBVSxHQUFFLFFBQVEsU0FBTyxJQUFFO29CQUFDLFNBQVEsR0FBRTtnQkFBTyxJQUFFLENBQUMsQ0FBQztZQUFBLENBQUE7SUFBRztBQUFDO0FBQUMsZUFBZSxHQUFHLEVBQUM7SUFBRSxJQUFJLElBQUUsRUFBRTtJQUFHLElBQUcsQ0FBQyxHQUFFLE9BQU0sRUFBRTtJQUFDLE1BQU0sRUFBRTtJQUFHLElBQUks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SyxFQUFFLFdBQVc7Z0JBQVMsT0FBTSxJQUFHLFVBQVEsUUFBTTtZQUFJO1FBQUU7UUFBQyxPQUFPLEdBQUc7SUFBRSxHQUFHLE9BQU8sQ0FBQSxLQUFHLE9BQU8sS0FBSyxJQUFHLFNBQU8sS0FBRyxFQUFFO0FBQUE7QUFBQyxTQUFTO0lBQUssT0FBTTtRQUFDLFdBQVUsR0FBRyxFQUFFLFdBQVc7UUFBVyxZQUFXLEdBQUcsRUFBRSxXQUFXO0lBQVc7QUFBQztBQUFDLFNBQVM7SUFBSyxJQUFJLEtBQUUsS0FBSSxJQUFFLENBQUM7SUFBRSxJQUFHLENBQUMsSUFBRSxPQUFPO0lBQUUsSUFBSSxLQUFFLEVBQUUsSUFBRyxPQUFPLENBQUE7UUFBSSxJQUFJLElBQUUsRUFBRTtRQUFHLElBQUcsQ0FBQyxHQUFFLE9BQU0sQ0FBQztRQUFFLElBQUksS0FBRSxFQUFFO1FBQUcsSUFBRyxJQUFFLE9BQU0sQ0FBQztRQUFFLElBQUksSUFBRSxHQUFHO1FBQUcsT0FBTSxDQUFDLENBQUMsS0FBRyxFQUFFLFNBQVM7SUFBRTtJQUFHLEtBQUksSUFBSSxNQUFLLEdBQUU7UUFBQyxJQUFJLEtBQUUsR0FBRztRQUFHLElBQUcsU0FBUSxDQUFBLENBQUMsQ0FBQyxHQUFFLE1BQU0sR0FBQyxHQUFFLEtBQUk7SUFBRTtJQUFDLElBQUcsS0FBSTtRQUFDLElBQUksS0FBRSxTQUFTLGNBQWM7UUFBRyxNQUFJLENBQUEsQ0FBQyxDQUFDLFlBQVksR0FBQyxFQUFFLEdBQUUsWUFBVztJQUFFO0lBQUMsSUFBSSxJQUFFLEdBQUUsY0FBYztJQUFHLE9BQU8sS0FBSSxDQUFBLEVBQUUsZUFBYSxFQUFFLEVBQUUsZ0JBQWMsRUFBRSxFQUFFLGFBQWEsU0FBUSxHQUFHLEVBQUUsU0FBTyxJQUFJLE9BQU0sRUFBRSxhQUFXLElBQUksS0FBSTtBQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1hOTlkZmU0NzRkNzE1ZGE1LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2Npc2NvL3J1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGNpc2NvXFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiZTVjZmJiMjNjYTY2MTFkMVwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGh4M1M3XHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9jaXNjby9ydWxlcy5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlciAtPiBlVHpVeCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL29ic2VydmVyLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcIkZPUk1fU0VMRUNUT1JcIiwoKT0+YSksbi5leHBvcnQocixcIkZJRUxEX0NPTlRBSU5FUl9TRUxFQ1RPUlwiLCgpPT5sKSxuLmV4cG9ydChyLFwiQ09OVElOVUVfQlVUVE9OX1NFTEVDVE9SXCIsKCk9PnMpLG4uZXhwb3J0KHIsXCJSRVNVTUVfRklMRV9JTlBVVF9TRUxFQ1RPUlwiLCgpPT51KSxuLmV4cG9ydChyLFwiUkVTVU1FX1VQTE9BREVEX0xJTktfU0VMRUNUT1JcIiwoKT0+Yyksbi5leHBvcnQocixcIlJFU1VNRV9ERUxFVEVfU0VMRUNUT1JcIiwoKT0+ZCksbi5leHBvcnQocixcImlzQWN0dWFsbHlWaXNpYmxlXCIsKCk9PmIpLG4uZXhwb3J0KHIsXCJnZXRDdXJyZW50Q2lzY29TdGVwXCIsKCk9PnYpLG4uZXhwb3J0KHIsXCJnZXRTdGVwSW5mb1wiLCgpPT53KSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVJvb3RcIiwoKT0+Uyksbi5leHBvcnQocixcImdldENpc2NvUmVndWxhckZpbGxSdWxlc1wiLCgpPT5FKSxuLmV4cG9ydChyLFwiZ2V0QXJyYXlDb250YWluZXJcIiwoKT0+USksbi5leHBvcnQocixcImdldENvbXBvc2l0ZUl0ZW1GaWVsZHNldHNcIiwoKT0+ZWUpLG4uZXhwb3J0KHIsXCJnZXRDb21wb3NpdGVSdWxlc1wiLCgpPT5lbyksbi5leHBvcnQocixcImV4dHJhY3RSdWxlc1wiLCgpPT5laSksbi5leHBvcnQocixcImdldEFkZGl0aW9uYWxGb3JtU25hcHNob3REYXRhXCIsKCk9PmV1KSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVNuYXBzaG90XCIsKCk9PmVjKTt2YXIgbz1lKFwifmNvcmUvZW51bXNcIiksaT1lKFwifmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXJcIik7bGV0IGE9J2Zvcm0ucmpzZltkYXRhLW90LWlnbm9yZT1cInRydWVcIl0sIGZvcm0ucmpzZicsbD1cIi5mb3JtLWdyb3VwLmZpZWxkXCIscz0nYnV0dG9uI25leHQsIGJ1dHRvblthdG0taWQ9XCJzdWJtaXQtYnV0dG9uXCJdJyx1PVwiLnJlc3VtZS11cGxvYWQtd3JhcHBlciBpbnB1dFt0eXBlPSdmaWxlJ10sIGlucHV0W3R5cGU9J2ZpbGUnXVwiLGM9J2FbYXRtLWlkPVwidXBsb2FkZWRyZXN1bWUtbGlua1wiXSwgLmhhcy1yZXN1bWUucmVzdW1lLWluZm8gLmRvd25sb2FkRmlsZScsZD0nYS5kZWxldGVGaWxlW2FyaWEtbGFiZWw9XCJEZWxldGVcIl0sIC5oYXMtcmVzdW1lLnJlc3VtZS1pbmZvIC5kZWxldGVGaWxlJyxmPVwiZmllbGRzZXQuZmllbGQuZmllbGQtYXJyYXkuZmllbGQtYXJyYXktb2Ytb2JqZWN0XCIscD0xMjAwLG09NTA7ZnVuY3Rpb24gaChlKXtyZXR1cm4oZXx8XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gZyhlKXtsZXQgdD1lO2Zvcig7dCYmdCE9PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDspe2lmKHQuaGlkZGVufHxcInRydWVcIj09PXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIil8fHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpfHx0LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIil8fHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sbGFwc2VcIikmJiF0LmNsYXNzTGlzdC5jb250YWlucyhcInNob3dcIikpcmV0dXJuITA7bGV0IGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCk7aWYoXCJub25lXCI9PT1lLmRpc3BsYXl8fFwiaGlkZGVuXCI9PT1lLnZpc2liaWxpdHl8fFwiY29sbGFwc2VcIj09PWUudmlzaWJpbGl0eXx8MD09PU51bWJlcihlLm9wYWNpdHl8fFwiMVwiKSlyZXR1cm4hMDt0PXQucGFyZW50RWxlbWVudH1yZXR1cm4hMX1mdW5jdGlvbiBiKGUpe2lmKCEoZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXx8ZyhlKSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmNoZWNrVmlzaWJpbGl0eSl7bGV0IHQ9ZS5jaGVja1Zpc2liaWxpdHkuYmluZChlKSxyPXQoe2NoZWNrT3BhY2l0eTohMCxjaGVja1Zpc2liaWxpdHlDU1M6ITAsY29udGVudFZpc2liaWxpdHlBdXRvOiEwLG9wYWNpdHlQcm9wZXJ0eTohMCx2aXNpYmlsaXR5UHJvcGVydHk6ITB9KTtpZighcilyZXR1cm4hMX1pZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmdldENsaWVudFJlY3RzKXtsZXQgdD1lLmdldENsaWVudFJlY3RzKCk7aWYoMD09PXQubGVuZ3RoKXJldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIHkoKXtsZXQgZT1uZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSx0PWgoZS5zZWFyY2hQYXJhbXMuZ2V0KFwic3RlcG5hbWVcIikpLnRvTG93ZXJDYXNlKCkscj1OdW1iZXIoZS5zZWFyY2hQYXJhbXMuZ2V0KFwic3RlcFwiKXx8XCIwXCIpO3JldHVybntrZXk6dHx8YHN0ZXAtJHtyfHwwfWAsaW5kZXg6TnVtYmVyLmlzRmluaXRlKHIpP3I6MCx0aXRsZTp0fHxgc3RlcCAke3J8fDB9YH19ZnVuY3Rpb24gdigpe3JldHVybiB5KCl9ZnVuY3Rpb24gdygpe3JldHVybiB5KCl9ZnVuY3Rpb24gUygpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEpfWZ1bmN0aW9uIEUoZSl7cmV0dXJuIGUuZmlsdGVyKGU9PmUudHlwZSE9PW8uRklFTERfVFlQRS5FRFVDQVRJT04mJmUudHlwZSE9PW8uRklFTERfVFlQRS5FTVBMT1lNRU5UKX1mdW5jdGlvbiB4KCl7bGV0e2luZGV4OmUsa2V5OnR9PXkoKTtyZXR1cm4gZTw9MXx8XCJwZXJzb25hbGluZm9ybWF0aW9uXCI9PT10fWZ1bmN0aW9uIEMoZT1kb2N1bWVudCl7bGV0e2tleTp0fT15KCkscj10LnRyaW0oKS50b0xvd2VyQ2FzZSgpO3JldHVybiByLmluY2x1ZGVzKFwicmV2aWV3XCIpfHxyLmluY2x1ZGVzKFwic3VibWl0XCIpfHwhIWUucXVlcnlTZWxlY3RvcihcIi5zdW1tYXJ5LXRleHQsIC5zdW1tYXJ5LWl0ZW0sIC5zdW1tYXJ5LWxhYmVsLCAuc3VtbWFyeS12YWx1ZVwiKX1mdW5jdGlvbiBBKGUpe2lmKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmllbGQtb2JqZWN0XCIpKXJldHVybiExO2xldCB0PUFycmF5LmZyb20oZS5jaGlsZHJlbikuc29tZShlPT5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJmUubWF0Y2hlcyhcIi5mb3JtLWdyb3VwLmZpZWxkLCBmaWVsZHNldCwgLmNvbC1tZC02IC5mb3JtLWdyb3VwLmZpZWxkLCAuY29sLW1kLTEyIC5mb3JtLWdyb3VwLmZpZWxkXCIpKTtpZih0KXJldHVybiExO2xldCByPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlIC5jb2wtbWQtNiAuZm9ybS1ncm91cC5maWVsZCwgOnNjb3BlIC5jb2wtbWQtMTIgLmZvcm0tZ3JvdXAuZmllbGRcIikpLnNvbWUodD0+dCE9PWUpO3JldHVybiFyfWZ1bmN0aW9uIGsoZSl7aWYoIWUpcmV0dXJuXCJcIjtsZXQgdD1lLmNsb25lTm9kZSghMCk7cmV0dXJuIHQucXVlcnlTZWxlY3RvckFsbChcIi5yZXF1aXJlZCxbYXJpYS1oaWRkZW49J3RydWUnXVwiKS5mb3JFYWNoKGU9PntlLnJlbW92ZSgpfSksaCh0LnRleHRDb250ZW50KX1mdW5jdGlvbiBUKGUpe2lmKCFlLnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tib3hcIikpcmV0dXJuXCJcIjtsZXQgdD1lLmNsb3Nlc3QoXCIuY29sLW1kLTYsIC5jb2wtbWQtMTJcIikscj10Py5wcmV2aW91c0VsZW1lbnRTaWJsaW5nPz9udWxsO2Zvcig7cjspe2lmKCEociBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSl7cj1yLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7Y29udGludWV9bGV0IGU9ci5xdWVyeVNlbGVjdG9yKFwiLm1hcmtkb3duIHAsIC5tYXJrZG93blwiKTtpZihlKXJldHVybiBoKGUudGV4dENvbnRlbnQpO2xldCB0PSEhci5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIC5jaGVja2JveCwgLnJhZGlvXCIpO2lmKHQpYnJlYWs7cj1yLnByZXZpb3VzRWxlbWVudFNpYmxpbmd9cmV0dXJuXCJcIn1mdW5jdGlvbiBGKGUpe2xldCB0PWgoZSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cInBsZWFzZSBzZWxlY3QgYW4gb3B0aW9uIGJlbG93OlwiPT09dH1mdW5jdGlvbiBJKGUpe2xldCB0PWUuY2xvc2VzdChcIi5jb2wtbWQtNiwgLmNvbC1tZC0xMlwiKT8ucHJldmlvdXNFbGVtZW50U2libGluZz8/ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2Zvcig7dDspe2lmKCEodCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSl7dD10LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7Y29udGludWV9bGV0IGU9ISF0LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgLmNoZWNrYm94LCAucmFkaW9cIik7aWYoZSlicmVhaztsZXQgcj10LnF1ZXJ5U2VsZWN0b3IoXCIubWFya2Rvd24gcCwgLm1hcmtkb3duXCIpLG49aChyPy50ZXh0Q29udGVudHx8dC50ZXh0Q29udGVudCk7aWYobil7bGV0IGU9bi5pbmNsdWRlcyhcIj9cIik7aWYoZXx8bi5sZW5ndGg8PTIyMClyZXR1cm4gbn10PXQucHJldmlvdXNFbGVtZW50U2libGluZ31yZXR1cm5cIlwifWZ1bmN0aW9uIGooZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIik7cmV0dXJuIHQ/LmlkPT09XCJsYW5ndWFnZUNoYW5nZVwifWZ1bmN0aW9uIEQoZSl7bGV0IHQ9ZS5pZD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke0NTUy5lc2NhcGUoZS5pZCl9XCJdYCk6bnVsbCxyPXQ/LnRleHRDb250ZW50fHxlLmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnR8fGUucGFyZW50RWxlbWVudD8udGV4dENvbnRlbnR8fFwiXCI7cmV0dXJuIGgoci5yZXBsYWNlKC9cXCovZyxcIiBcIikpfWZ1bmN0aW9uIFAoZSl7bGV0IHQ9ayhlLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5jb250cm9sLWxhYmVsLCBsZWdlbmRcIikpO2lmKHQpcmV0dXJuIHQ7bGV0IHI9VChlKTtpZihyKXJldHVybiByO2xldCBuPWUucXVlcnlTZWxlY3RvcihcIi5jaGVja2JveCBsYWJlbCwgLnJhZGlvIGxhYmVsLCBsYWJlbFwiKTtpZighbilyZXR1cm5cIlwiO2xldCBvPW4uY2xvbmVOb2RlKCEwKTtyZXR1cm4gby5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIC5jaGVjaywgLmNoZWNrbWFya1wiKS5mb3JFYWNoKGU9PntlLnJlbW92ZSgpfSksaChvLnRleHRDb250ZW50KX1mdW5jdGlvbiBfKGUsdCl7bGV0IHI9aChlKS50b0xvd2VyQ2FzZSgpLG49ISF0LmlkLm1hdGNoKC9cXC5mcm9tVG9cXC4oc3RhcnREYXRlfGVuZERhdGUpJC9pKXx8ISF0LmNsb3Nlc3QoXCIjZWR1Y2F0aW9uRGF0YSwgI2V4cGVyaWVuY2VEYXRhXCIpO3JldHVybiBuP1wiTU0vWVlZWVwiOlwid2hhdCBpcyB0aGUgZWFybGllc3QgZGF0ZSB5b3UgY291bGQgc3RhcnQ/XCI9PT1yfHxyLmluY2x1ZGVzKFwiZWFybGllc3QgZGF0ZSB5b3UgY291bGQgc3RhcnRcIik/XCJZWVlZL01NL0REXCI6XCJNTS9ERC9ZWVlZXCJ9ZnVuY3Rpb24gTChlLHQpe3JldHVybmBQbGVhc2UgZm9ybWF0IHRoZSBkYXRlIGFzOiAke18oZSx0KX1gfWZ1bmN0aW9uIFIoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwibGFiZWwuY29udHJvbC1sYWJlbFwiKTtpZih0Py5xdWVyeVNlbGVjdG9yKFwiLnJlcXVpcmVkXCIpKXJldHVybiEwO2xldCByPWUucXVlcnlTZWxlY3RvcihcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpO3JldHVybiByPy5yZXF1aXJlZD09PSEwfHxyPy5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpPT09XCJ0cnVlXCJ9ZnVuY3Rpb24gTyhlKXtsZXQgdD1lLmNsb3Nlc3QoZik7aWYoISh0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKXJldHVybiBudWxsO2xldCByPXQucGFyZW50RWxlbWVudD8uY2xvc2VzdChmKTtyZXR1cm4gciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50P3I6dH1mdW5jdGlvbiBNKGUpe3JldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChsKSkuZmlsdGVyKGU9PmIoZSkpLmZpbHRlcihlPT4haihlKSkuZmlsdGVyKGU9PkEoZSkpLmZpbHRlcihlPT57bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSkuZmlsdGVyKGU9PlwiaGlkZGVuXCIhPT1lLnR5cGUmJlwiZmlsZVwiIT09ZS50eXBlJiYhZS5kaXNhYmxlZCYmYihlKSk7cmV0dXJuIHQubGVuZ3RoPjB9KX1mdW5jdGlvbiBOKGUpe2xldCB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpLmZpbHRlcih0PT57aWYoXCJoaWRkZW5cIj09PXQudHlwZXx8XCJmaWxlXCI9PT10LnR5cGV8fHQuZGlzYWJsZWR8fCFiKHQpKXJldHVybiExO2xldCByPXQuY2xvc2VzdChcIi5mb3JtLWdyb3VwLmZpZWxkXCIpO3JldHVybiByPT09ZX0pO3JldHVybiB0WzBdPz9udWxsfWZ1bmN0aW9uICQoZSl7cmV0dXJuIEFycmF5LmZyb20oZS5vcHRpb25zKS5tYXAoZT0+aChlLnRleHRDb250ZW50KSkuZmlsdGVyKGU9PiFCKGUpKS5maWx0ZXIoQm9vbGVhbil9ZnVuY3Rpb24gQihlKXtsZXQgdD1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJwbGVhc2Ugc2VsZWN0XCI9PT10fHxcInNlbGVjdFwiPT09dH1mdW5jdGlvbiBxKGUpe2xldCB0PSQoZSk7cmV0dXJuIDA9PT10Lmxlbmd0aHx8dC5ldmVyeShCKX1mdW5jdGlvbiBVKGUpe3JldHVybiAkKGUpLmpvaW4oXCJcXHgwMVwiKX1mdW5jdGlvbiBIKGUpe2xldCB0PXtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9O3JldHVybiBlLnN0YXJ0c1dpdGgoXCJrZXlcIikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIEtleWJvYXJkRXZlbnQ/bmV3IEtleWJvYXJkRXZlbnQoZSx7Li4udCxjb2RlOlwiQXJyb3dEb3duXCIsa2V5OlwiQXJyb3dEb3duXCJ9KTplLnN0YXJ0c1dpdGgoXCJwb2ludGVyXCIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBQb2ludGVyRXZlbnQ/bmV3IFBvaW50ZXJFdmVudChlLHsuLi50LHBvaW50ZXJUeXBlOlwibW91c2VcIn0pOlwiZnVuY3Rpb25cIj09dHlwZW9mIE1vdXNlRXZlbnQ/bmV3IE1vdXNlRXZlbnQoZSx0KTpuZXcgRXZlbnQoZSx0KX1mdW5jdGlvbiBZKGUsdCl7dHJ5e2UuZGlzcGF0Y2hFdmVudChIKHQpKX1jYXRjaHtlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KHQse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKX19YXN5bmMgZnVuY3Rpb24geihlKXtpZighcShlKSlyZXR1cm47bGV0IHQ9VShlKTt0cnl7ZS5mb2N1cyh7cHJldmVudFNjcm9sbDohMH0pfWNhdGNoe2UuZm9jdXMoKX1mb3IobGV0IHQgb2ZbXCJwb2ludGVyZG93blwiLFwibW91c2Vkb3duXCIsXCJtb3VzZXVwXCIsXCJjbGlja1wiLFwia2V5ZG93blwiLFwia2V5dXBcIl0pWShlLHQpO2F3YWl0ICgwLGkud2FpdEZvckNvbmRpdGlvbikoKCk9PiFxKGUpJiZVKGUpIT09dCx7aW50ZXJ2YWw6bSxvYnNlcnZlVGFyZ2V0OmUsdGltZW91dDpwfSksZS5ibHVyKCl9YXN5bmMgZnVuY3Rpb24gVihlKXtsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKSk7Zm9yKGxldCBlIG9mIHQpIWUuZGlzYWJsZWQmJlwiaGlkZGVuXCIhPT1lLnR5cGUmJmIoZSkmJmF3YWl0IHooZSl9ZnVuY3Rpb24gVyhlKXtsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykpLmZpbHRlcih0PT5iKHQpJiZ0LmNsb3Nlc3QoXCIuZm9ybS1ncm91cC5maWVsZFwiKT09PWUpO2lmKDA9PT10Lmxlbmd0aClyZXR1cm4gbnVsbDtsZXQgcj1QKGUpO2lmKCFyKXJldHVybiBudWxsO2xldCBuPUYocik/SShlKTpcIlwiLGk9bnx8cjtyZXR1cm57bGFiZWw6aSxyZXF1aXJlZDpSKGUpLHR5cGU6by5GSUVMRF9UWVBFLlJBRElPR1JPVVAsb3B0aW9uczp0Lm1hcChlPT5EKGUpKS5maWx0ZXIoQm9vbGVhbiksJGxhYmVsOmUucXVlcnlTZWxlY3RvcihcImxhYmVsLmNvbnRyb2wtbGFiZWwsIGxlZ2VuZFwiKXx8ZSwkaW5wdXQ6dFswXSwkcmFkaW9QYXJlbnQ6ZX19ZnVuY3Rpb24gRyhlKXtsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykpLmZpbHRlcih0PT5iKHQpJiZ0LmNsb3Nlc3QoXCIuZm9ybS1ncm91cC5maWVsZFwiKT09PWUpO2lmKDA9PT10Lmxlbmd0aClyZXR1cm4gbnVsbDtsZXQgcj1QKGUpO3JldHVybiByP3tsYWJlbDpyLHJlcXVpcmVkOlIoZSksdHlwZTpvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsb3B0aW9uczoxPT09dC5sZW5ndGg/W1wiWWVzXCIsXCJOb1wiXTp0Lm1hcChlPT5EKGUpKS5maWx0ZXIoQm9vbGVhbiksJGxhYmVsOmUucXVlcnlTZWxlY3RvcihcImxhYmVsLmNvbnRyb2wtbGFiZWwsIGxlZ2VuZFwiKXx8ZSwkaW5wdXQ6ZSwkY2hlY2tib3hzOnR9Om51bGx9ZnVuY3Rpb24gSyhlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlcmFuZ2VwaWNrZXItY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW2lkKj1cImN1cnJlbnRseVdvcmtIZXJlXCJdJyk7aWYoIXR8fCFiKHQpKXJldHVybiBudWxsO2xldCByPWgodC5jbG9zZXN0KFwiLmRhdGVyYW5nZXBpY2tlci1jaGVja2JveFwiKT8udGV4dENvbnRlbnR8fHQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJJIGN1cnJlbnRseSB3b3JrIGhlcmVcIik7cmV0dXJuIHI/e2xhYmVsOnIscmVxdWlyZWQ6ITEsdHlwZTpvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsb3B0aW9uczpbXCJZZXNcIixcIk5vXCJdLCRsYWJlbDp0LmNsb3Nlc3QoXCIuZGF0ZXJhbmdlcGlja2VyLWNoZWNrYm94XCIpfHx0LCRpbnB1dDp0LCRjaGVja2JveHM6W3RdfTpudWxsfWZ1bmN0aW9uIFgoZSl7bGV0IHQ9TihlKSxyPXQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudD90Om51bGw7aWYoIXJ8fCFiKHIpKXJldHVybiBudWxsO2xldCBuPVAoZSk7cmV0dXJuIG4/e2xhYmVsOm4scmVxdWlyZWQ6UihlKSx0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1Qsb3B0aW9uczokKHIpLCRsYWJlbDplLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5jb250cm9sLWxhYmVsLCBsZWdlbmRcIil8fGUsJGlucHV0OnJ9Om51bGx9ZnVuY3Rpb24gSihlKXtsZXQgdDtsZXQgcj1OKGUpLG49ciBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQ/cjpudWxsO2lmKG4mJmIobikpe2xldCB0PVAoZSk7cmV0dXJuIHQ/e2xhYmVsOnQscmVxdWlyZWQ6UihlKSx0eXBlOm8uRklFTERfVFlQRS5URVhULCRsYWJlbDplLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5jb250cm9sLWxhYmVsLCBsZWdlbmRcIil8fGUsJGlucHV0Om59Om51bGx9bGV0IGk9ciBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJlwiaGlkZGVuXCIhPT1yLnR5cGUmJlwicmFkaW9cIiE9PXIudHlwZSYmXCJjaGVja2JveFwiIT09ci50eXBlP3I6bnVsbDtpZighaXx8IWIoaSkpcmV0dXJuIG51bGw7bGV0IGE9UChlKTtpZighYSlyZXR1cm4gbnVsbDtsZXQgbD1vLkZJRUxEX1RZUEUuVEVYVCxzPVwiY29tYm9ib3hcIj09PWkuZ2V0QXR0cmlidXRlKFwicm9sZVwiKXx8XCJhc3luY1R5cGVhaGVhZFwiPT09aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWF0dHJpYnV0ZVwiKXx8ISFpLmNsb3Nlc3QoXCIuYXN5bmMtdHlwZWFoZWFkLXYzXCIpLHU9XCJkYXRlXCI9PT1pLnR5cGV8fCEhaS5jbG9zZXN0KFwiLnJlYWN0LWRhdGVwaWNrZXItd3JhcHBlclwiKXx8ISFpLmlkLm1hdGNoKC9cXC5mcm9tVG9cXC4oc3RhcnREYXRlfGVuZERhdGUpJC9pKTtyZXR1cm4gaS5pZC5tYXRjaCgvXFwuZnJvbVRvXFwuKHN0YXJ0RGF0ZXxlbmREYXRlKSQvaSl8fGkuY2xvc2VzdChcIiNlZHVjYXRpb25EYXRhLCAjZXhwZXJpZW5jZURhdGFcIiksdT8obD1vLkZJRUxEX1RZUEUuREFURSx0PUwoYSxpKSk6KHN8fFwic2VhcmNoXCI9PT1pLnR5cGV8fFwiYWRkcmVzcy1sZXZlbDJcIj09PWkuZ2V0QXR0cmlidXRlKFwic3JjL2NvbnRlbnRzL3NpdGVzL21ldGFjYXJlZXJzL2F1dG9jb21wbGV0ZVwiKSkmJihsPW8uRklFTERfVFlQRS5TRUFSQ0gpLHtsYWJlbDphLHJlcXVpcmVkOlIoZSksdHlwZTpsLGRlc2NyaXB0aW9uOnQsJGxhYmVsOmUucXVlcnlTZWxlY3RvcihcImxhYmVsLmNvbnRyb2wtbGFiZWwsIGxlZ2VuZFwiKXx8ZSwkaW5wdXQ6aX19ZnVuY3Rpb24gUShlKXtsZXQgdD1lPT09by5GSUVMRF9UWVBFLkVEVUNBVElPTj9cImVkdWNhdGlvbkRhdGFcIjpcImV4cGVyaWVuY2VEYXRhXCI7cmV0dXJuIFMoKT8ucXVlcnlTZWxlY3RvcihgZmllbGRzZXQjJHt0fWApPz9udWxsfWZ1bmN0aW9uIFooZSl7cmV0dXJuXCJlZHVjYXRpb25EYXRhXCI9PT1lLmlkP28uRklFTERfVFlQRS5FRFVDQVRJT046XCJleHBlcmllbmNlRGF0YVwiPT09ZS5pZD9vLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVDpudWxsfWZ1bmN0aW9uIGVlKGUpe3JldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSA+IC5yb3cuYXJyYXktaXRlbS1saXN0IGZpZWxkc2V0W2lkXVwiKSkuZmlsdGVyKHQ9PntsZXQgcj1lLmlkLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLFwiXFxcXCQmXCIpO3JldHVybiBSZWdFeHAoYF4ke3J9XFxcXFtcXFxcZCtcXFxcXSRgKS50ZXN0KHQuaWQpfSl9ZnVuY3Rpb24gZXQoZSl7cmV0dXJuIGVlKGUpWzBdPz9udWxsfWZ1bmN0aW9uIGVyKGUpe2xldCB0PU0oZSkscj1bXTtmb3IobGV0IGUgb2YgdCl7bGV0IHQ9VyhlKXx8RyhlKXx8WChlKXx8SihlKTt0Py5sYWJlbCYmci5wdXNoKHQpfWxldCBuPUsoZSk7cmV0dXJuIG4mJiFyLnNvbWUoZT0+ZS50eXBlPT09by5GSUVMRF9UWVBFLkNIRUNLQk9YJiZlLmxhYmVsPT09bi5sYWJlbCkmJnIucHVzaChuKSxyfWZ1bmN0aW9uIGVuKGUsdCl7bGV0IHI9ZXQoZSk7aWYoIXIpcmV0dXJuIG51bGw7bGV0IG49ZXIocik7aWYoMD09PW4ubGVuZ3RoKXJldHVybiBudWxsO2xldCBpPWUucXVlcnlTZWxlY3RvcihcIi5tb3JlLWFjdGlvbnMgLmFycmF5LWJ1dHRvbi1hZGRcIik/P3ZvaWQgMDtyZXR1cm57bGFiZWw6dD09PW8uRklFTERfVFlQRS5FRFVDQVRJT04/XCJFZHVjYXRpb25cIjpcIkVtcGxveW1lbnRcIixyZXF1aXJlZDohMCx0eXBlOnQsJGlucHV0OmksY2hpbGRyZW46bixvcHRpb25zOm4ubWFwKGU9Pih7bGFiZWw6ZS5sYWJlbCx0eXBlOmUudHlwZSwuLi5BcnJheS5pc0FycmF5KGUub3B0aW9ucykmJmUub3B0aW9ucy5sZW5ndGg+MD97b3B0aW9uczplLm9wdGlvbnN9Ont9fSkpfX1hc3luYyBmdW5jdGlvbiBlbyhlKXtsZXQgdD1RKGUpO2lmKCF0KXJldHVybltdO2F3YWl0IFYodCk7bGV0IHI9W107Zm9yKGxldCBuIG9mIGVlKHQpKXtsZXQgaT1lcihuKTswIT09aS5sZW5ndGgmJnIucHVzaCh7bGFiZWw6ZT09PW8uRklFTERfVFlQRS5FRFVDQVRJT04/XCJFZHVjYXRpb25cIjpcIkVtcGxveW1lbnRcIixyZXF1aXJlZDohMCx0eXBlOmUsJGlucHV0OnQucXVlcnlTZWxlY3RvcihcIi5tb3JlLWFjdGlvbnMgLmFycmF5LWJ1dHRvbi1hZGRcIik/P3ZvaWQgMCxjaGlsZHJlbjppLG9wdGlvbnM6aS5tYXAoZT0+KHtsYWJlbDplLmxhYmVsLHR5cGU6ZS50eXBlLC4uLkFycmF5LmlzQXJyYXkoZS5vcHRpb25zKSYmZS5vcHRpb25zLmxlbmd0aD4wP3tvcHRpb25zOmUub3B0aW9uc306e319KSl9KX1yZXR1cm4gcn1hc3luYyBmdW5jdGlvbiBlaSgpe2xldCBlPVMoKTtpZighZXx8QyhlKSlyZXR1cm5bXTthd2FpdCBWKGUpO2xldCB0PVtdLHI9bmV3IFNldCxuPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKGYpKS5maWx0ZXIoZT0+IWUuY2xvc2VzdChgJHtmfSAke2Z9YCkpO2ZvcihsZXQgZSBvZiBuKXtsZXQgcj1aKGUpO2lmKCFyKWNvbnRpbnVlO2xldCBuPWVuKGUscik7biYmdC5wdXNoKG4pfWZvcihsZXQgbiBvZiBNKGUpKXtsZXQgZT1PKG4pO2lmKGUpe2xldCB0PVooZSk7aWYodCljb250aW51ZTtsZXQgcj1ldChlKTtpZighcnx8IXIuY29udGFpbnMobikpY29udGludWV9bGV0IG89VyhuKXx8RyhuKXx8WChuKXx8SihuKTtpZighbz8ubGFiZWwpY29udGludWU7bGV0IGk9YCR7by50eXBlfToke28ubGFiZWx9YDtyLmhhcyhpKXx8KHIuYWRkKGkpLHQucHVzaChvKSl9cmV0dXJuIHR9ZnVuY3Rpb24gZWEoZSl7bGV0IHQ9UChlKTtpZighdClyZXR1cm4gbnVsbDtsZXQgcj1OKGUpLG49ciBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50P3I6bnVsbDtpZihuJiZiKG4pKXtsZXQgZT1uLnNlbGVjdGVkT3B0aW9ucz8uWzBdPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiO3JldHVybntsYWJlbDp0LHR5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCx2YWx1ZTplfHxuLnZhbHVlLHRleHQ6ZX19bGV0IGk9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpKS5maWx0ZXIodD0+Yih0KSYmdC5jbG9zZXN0KFwiLmZvcm0tZ3JvdXAuZmllbGRcIik9PT1lKTtpZihpLmxlbmd0aD4wKXtsZXQgcj1GKHQpP0koZSk6XCJcIixuPXJ8fHQsYT1pLmZpbmQoZT0+ZS5jaGVja2VkKTtyZXR1cm57bGFiZWw6bix0eXBlOm8uRklFTERfVFlQRS5SQURJT0dST1VQLHZhbHVlOmE/LnZhbHVlfHxcIlwiLHRleHQ6YT9EKGEpOlwiXCJ9fWxldCBhPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSkuZmlsdGVyKHQ9PmIodCkmJnQuY2xvc2VzdChcIi5mb3JtLWdyb3VwLmZpZWxkXCIpPT09ZSk7aWYoYS5sZW5ndGg+MClyZXR1cm57bGFiZWw6dCx0eXBlOm8uRklFTERfVFlQRS5DSEVDS0JPWCx2YWx1ZToxPT09YS5sZW5ndGg/YVswXS5jaGVja2VkP1wiWWVzXCI6XCJOb1wiOmEuZmlsdGVyKGU9PmUuY2hlY2tlZCkubWFwKGU9PkQoZSkpfTtsZXQgbD1yIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudD9yOm51bGw7aWYobCYmYihsKSlyZXR1cm57bGFiZWw6dCx0eXBlOm8uRklFTERfVFlQRS5URVhULHZhbHVlOmwudmFsdWV9O2xldCBzPXIgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiZcImhpZGRlblwiIT09ci50eXBlJiZcInJhZGlvXCIhPT1yLnR5cGUmJlwiY2hlY2tib3hcIiE9PXIudHlwZT9yOm51bGw7cmV0dXJuIHMmJmIocyk/e2xhYmVsOnQsdHlwZTpzLmNsb3Nlc3QoXCIucmVhY3QtZGF0ZXBpY2tlci13cmFwcGVyXCIpfHxzLmlkLm1hdGNoKC9cXC5mcm9tVG9cXC4oc3RhcnREYXRlfGVuZERhdGUpJC9pKT9vLkZJRUxEX1RZUEUuREFURTpcImNvbWJvYm94XCI9PT1zLmdldEF0dHJpYnV0ZShcInJvbGVcIil8fFwiYXN5bmNUeXBlYWhlYWRcIj09PXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdHRyaWJ1dGVcIil8fHMuY2xvc2VzdChcIi5hc3luYy10eXBlYWhlYWQtdjNcIik/by5GSUVMRF9UWVBFLlNFQVJDSDpvLkZJRUxEX1RZUEUuVEVYVCx2YWx1ZTpzLnZhbHVlfTpudWxsfWZ1bmN0aW9uIGVsKGUpe2xldCB0PXt9O2ZvcihsZXQgciBvZiBlKXI/LmxhYmVsJiZ2b2lkIDAhPT1yLnZhbHVlJiYodFtyLmxhYmVsXT1yLnZhbHVlKTtyZXR1cm4gdH1mdW5jdGlvbiBlcyhlKXtsZXQgdD1RKGUpO3JldHVybiB0P2VlKHQpLm1hcChlPT57bGV0IHQ9TShlKS5tYXAoZT0+ZWEoZSkpLmZpbHRlcihCb29sZWFuKSxyPUsoZSk7aWYocil7bGV0IGU9ci4kY2hlY2tib3hzPy5bMF07dC5wdXNoKHtsYWJlbDpyLmxhYmVsLHR5cGU6by5GSUVMRF9UWVBFLkNIRUNLQk9YLHZhbHVlOmU/LmNoZWNrZWQ/XCJZZXNcIjpcIk5vXCJ9KX1yZXR1cm4gZWwodCl9KS5maWx0ZXIoZT0+T2JqZWN0LmtleXMoZSkubGVuZ3RoPjApOltdfWZ1bmN0aW9uIGV1KCl7cmV0dXJue2VkdWNhdGlvbjplcyhvLkZJRUxEX1RZUEUuRURVQ0FUSU9OKSxlbXBsb3ltZW50OmVzKG8uRklFTERfVFlQRS5FTVBMT1lNRU5UKX19ZnVuY3Rpb24gZWMoKXtsZXQgZT1TKCksdD17fTtpZighZSlyZXR1cm4gdDtsZXQgcj1NKGUpLmZpbHRlcihlPT57bGV0IHQ9TyhlKTtpZighdClyZXR1cm4hMDtsZXQgcj1aKHQpO2lmKHIpcmV0dXJuITE7bGV0IG49ZXQodCk7cmV0dXJuISFuJiZuLmNvbnRhaW5zKGUpfSk7Zm9yKGxldCBlIG9mIHIpe2xldCByPWVhKGUpO3I/LmxhYmVsJiYodFtyLmxhYmVsXT1yLnZhbHVlKX1pZih4KCkpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYyk7ZSYmKHRbXCJSZXN1bWUvQ1ZcIl09aChlLnRleHRDb250ZW50KSl9bGV0IG49ZS5xdWVyeVNlbGVjdG9yKHMpO3JldHVybiBuJiYodC5fX2J1dHRvblRleHQ9aChuLnRleHRDb250ZW50KXx8aChuLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpKSksdC5fX3N0ZXA9dygpLmluZGV4LHQuX19zdGVwbmFtZT13KCkua2V5LHR9XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy5jYTY2MTFkMS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);