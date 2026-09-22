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
})({"iIR0v":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\ripplehire\\location-client-search.js",
    "bundleId": "71c96ee5c0ee9869",
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
var j = z(require("27dced149f0405b3"));
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

},{"27dced149f0405b3":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"ivzpX":[function(require,module,exports) {
/**
 * Parcel module id: 5C5cJ
 * Resolved path: src/contents/sites/ripplehire/location-client-search.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~api/autofill-client-search -> 3KzDR  =>  src/api/autofill-client-search.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/sites/profile-location-original-answer -> 8kwJN  =>  src/contents/sites/profile-location-original-answer.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRipplehireLocationClientSearchSurface", ()=>v), n.export(r, "isRipplehireLocationClientSearchRule", ()=>w), n.export(r, "getRipplehireLocationOriginalAnswer", ()=>S), n.export(r, "resolveRipplehireLocationClientSearch", ()=>L);
var o = e("~api/autofill-client-search"), i = e("~contents/methods/cancellation"), a = e("~contents/sites/profile-location-original-answer"), l = e("~core/enums");
let s = 5, u = 25, c = 128, d = 256, f = 256, p = 512, m = 250;
function h(e1, t) {
    try {
        e1.onDiagnostic?.({
            ...t
        });
    } catch  {}
}
function g(e1) {
    try {
        return Array.isArray(e1) ? Math.min(u, Math.max(0, e1.length)) : 0;
    } catch  {
        return 0;
    }
}
function b(e1) {
    return e1 instanceof i.CancelledError || e1 instanceof i.SkippedError;
}
function y(e1) {
    if (e1.hidden) return !1;
    let t = e1.checkVisibility;
    if ("function" == typeof t) try {
        return t.call(e1);
    } catch  {
        return !1;
    }
    return null !== e1.offsetParent || "function" == typeof e1.getClientRects && e1.getClientRects().length > 0;
}
function v(e1) {
    return e1.matches("#indiaLocation[name=indiaLocation]") ? "bootstrap-typeahead" : e1.matches("#currentLocation[name=currentLocation].pac-target-input") ? "google-places" : null;
}
function w(e1) {
    try {
        if (e1.type !== l.FIELD_TYPE.TEXT || "City" !== e1.label && "Current Location" !== e1.label) return !1;
        let t = e1.$input;
        return !0 === t.isConnected && !1 === t.disabled && !t.matches(":disabled") && null !== v(t) && y(t);
    } catch  {
        return !1;
    }
}
function S(e1, t) {
    let r1 = (0, a.getProfileLocationOriginalAnswer)(e1);
    if (r1.value) return r1;
    if ("string" == typeof t) {
        let e1 = t.trim();
        if (e1) return {
            value: e1,
            source: "regular-answer"
        };
    }
    return {
        value: "",
        source: "missing"
    };
}
_c = S;
function E(e1) {
    return e1.normalize("NFKC").replace(/\s+/g, " ").trim().toLowerCase();
}
_c1 = E;
function x(e1, t, r1 = !0) {
    if ("object" != typeof e1 || null === e1) return {
        ok: !1
    };
    try {
        let n = Object.getOwnPropertyDescriptor(e1, t);
        if (!n || r1 && !0 !== n.enumerable || !Object.prototype.hasOwnProperty.call(n, "value")) return {
            ok: !1
        };
        return {
            ok: !0,
            value: n.value
        };
    } catch  {
        return {
            ok: !1
        };
    }
}
function C(e1, t, r1) {
    let n = x(e1, t);
    return n.ok && "string" == typeof n.value && n.value.trim() && !(n.value.length > r1) ? n.value : null;
}
_c2 = C;
function A(e1, t, r1) {
    return C(e1, t, r1);
}
_c3 = A;
function k(e1) {
    if ("object" != typeof e1 || null === e1) return null;
    let t = A(e1, "candidate_key", c), r1 = A(e1, "value", f), n = A(e1, "text", p);
    return t && r1 && n ? {
        candidate_key: t,
        value: r1,
        text: n
    } : null;
}
function T(e1, t) {
    try {
        if (!Array.isArray(e1)) return {
            ok: !1,
            reason: "invalid"
        };
    } catch  {
        return {
            ok: !1,
            reason: "invalid"
        };
    }
    let r1 = x(e1, "length", !1);
    if (!r1.ok || "number" != typeof r1.value || !Number.isSafeInteger(r1.value) || r1.value < 0) return {
        ok: !1,
        reason: "invalid"
    };
    if (r1.value > t) return {
        ok: !1,
        reason: "too-long"
    };
    let n = [];
    for(let t = 0; t < r1.value; t += 1){
        let r1 = x(e1, String(t));
        if (!r1.ok) return {
            ok: !1,
            reason: "invalid"
        };
        n.push(r1.value);
    }
    return {
        ok: !0,
        candidates: n
    };
}
_c4 = T;
function F(e1) {
    let t = x(e1, "action");
    return t.ok && "string" == typeof t.value ? t.value : null;
}
_c5 = F;
function I(e1) {
    let t = x(e1, "selected_values");
    if (!t.ok) return null;
    let r1 = T(t.value, 1);
    if (!r1.ok || 1 !== r1.candidates.length) return null;
    let n = r1.candidates[0];
    return "string" == typeof n && n.trim() ? n : null;
}
_c6 = I;
function j(e1) {
    let t;
    if ("object" != typeof e1 || null === e1) return {
        ok: !1
    };
    try {
        t = Reflect.ownKeys(e1);
    } catch  {
        return {
            ok: !1
        };
    }
    if (2 !== t.length || !t.includes("status") || !t.includes("candidates")) return {
        ok: !1
    };
    let r1 = x(e1, "status"), n = x(e1, "candidates");
    return r1.ok && n.ok && ("ready" === r1.value || "no-results" === r1.value || "failed" === r1.value) ? {
        ok: !0,
        status: r1.value,
        candidates: n.value
    } : {
        ok: !1
    };
}
function D(e1) {
    return "options" in e1 ? {
        resolve_session_id: e1.resolve_session_id,
        round_id: e1.round_id,
        options: e1.options.map((e1)=>({
                ...e1
            }))
    } : {
        source: e1.source,
        field_type: e1.field_type,
        question: e1.question,
        original_answer: e1.original_answer
    };
}
_c7 = D;
async function P(e1, t, r1) {
    await new Promise((n)=>{
        let o = new AbortController, i = !1, a = ()=>{
            i || (i = !0, clearTimeout(l), n());
        }, l = setTimeout(()=>{
            o.abort(), a();
        }, m);
        Promise.resolve().then(()=>r1(e1, t, o.signal)).catch(()=>void 0).finally(a);
    });
}
_c8 = P;
function _(e1) {
    try {
        let t = e1.value;
        return "string" == typeof t ? t : "";
    } catch  {
        return "";
    }
}
async function L(e1, t, r1) {
    let n = [], a = _(e1), l = "string" == typeof t ? t.trim() : "", f = !1, p = !1, m = async ()=>{
        p && !f && (f = !0, await P(e1, a, r1.clearTemporaryValue));
    }, y = async (e1)=>(h(r1, {
            stage: "failed",
            roundCount: n.length,
            failureReason: e1
        }), await m(), {
            success: !1,
            rounds: n,
            failureReason: e1
        });
    if (!l) return y("missing-original-answer");
    let v = "", w = {
        source: "ripplehire",
        field_type: "location",
        question: (0, o.getAutofillClientSearchQuestion)("location"),
        original_answer: l
    }, S = new Set, x = new Set, A = null, L = 0;
    for(;;){
        let t;
        try {
            (0, i.checkpoint)();
        } catch (e1) {
            throw b(e1) && await m(), e1;
        }
        try {
            (0, i.checkpoint)(), h(r1, {
                stage: "request",
                requestKind: 0 === n.length ? "start" : "continuation",
                roundCount: n.length
            }), t = await r1.requestStep(D(w)), (0, i.checkpoint)();
        } catch (e1) {
            if (b(e1)) throw await m(), e1;
            return y("request-error");
        }
        let o = F(t);
        if (!o) return y("invalid-response");
        if (h(r1, {
            stage: "response",
            action: o,
            roundCount: n.length
        }), "REQUEST_SEARCH" === o) {
            let o;
            if (n.length >= s) return y("round-limit");
            let a = C(t, "resolve_session_id", c), l = C(t, "round_id", c), f = C(t, "search_input", d);
            if (!a || !l || !f) return y("invalid-response");
            let F = E(f);
            if (!F) return y("invalid-search-request");
            if (v && v !== a) return y("changed-resolve-session-id");
            if (S.has(l) || x.has(F)) return y("repeated-search");
            v = a;
            try {
                (0, i.checkpoint)(), p = !0, o = await r1.captureCandidates(e1, f), (0, i.checkpoint)();
            } catch (e1) {
                if (b(e1)) throw await m(), e1;
                return y("capture-error");
            }
            let I = j(o);
            if (!I.ok) return y("invalid-capture-result");
            if (h(r1, {
                stage: "capture",
                status: I.status,
                roundCount: n.length,
                candidateCount: g(I.candidates)
            }), "failed" === I.status) return y("capture-failed");
            let D = u - L, P = T(I.candidates, D);
            if (!1 === P.ok) return y("too-long" === P.reason ? "candidate-limit" : "invalid-candidates");
            if ("no-results" === I.status && 0 !== P.candidates.length) return y("invalid-capture-result");
            let _ = [], R = new Set, O = new Map;
            for (let e1 of P.candidates){
                let t = k(e1);
                if (!t) return y("invalid-candidate");
                if (R.has(t.candidate_key)) return y("duplicate-candidate");
                let r1 = O.get(t.text);
                if (void 0 !== r1 && r1 !== t.value) return y("duplicate-candidate");
                R.add(t.candidate_key), O.set(t.text, t.value), _.push(t);
            }
            A = {
                round_id: l,
                search_input: f,
                options: _
            }, n.push(A), S.add(l), x.add(F), L += _.length, w = {
                resolve_session_id: v,
                round_id: l,
                options: _.map((e1)=>({
                        ...e1
                    }))
            }, h(r1, {
                stage: "continuation",
                requestKind: "continuation",
                roundCount: n.length,
                candidateCount: _.length
            });
            continue;
        }
        if ("SELECT_OPTIONS" === o) {
            let o = I(t);
            if (!A || null === o) return y("invalid-selection");
            let a = A.options.filter((e1)=>e1.text === o);
            if (h(r1, {
                stage: "selection",
                roundCount: n.length,
                matchCount: a.length
            }), 0 === a.length || 1 !== new Set(a.map((e1)=>e1.value)).size) return y("invalid-selection");
            let l = {
                ...a[0]
            };
            try {
                (0, i.checkpoint)();
                let t = await r1.commitCandidate(e1, l, A.search_input);
                if ((0, i.checkpoint)(), h(r1, {
                    stage: "commit",
                    roundCount: n.length,
                    committed: t
                }), !t) return y("commit-failed");
            } catch (e1) {
                if (b(e1)) throw await m(), e1;
                return y("commit-error");
            }
            return (0, i.checkpoint)(), {
                success: !0,
                rounds: n,
                selected: l
            };
        }
        if ("RETURN_EMPTY" === o) return y("empty");
        if ("RETRYABLE_FAILURE" === o) return y("retryable-failure");
        return y("invalid-response");
    }
}
_c9 = L;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
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

},{}]},["iIR0v","ivzpX"], "ivzpX", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUksQ0FBQSxLQUFHLEdBQUUsUUFBUSxNQUFLLE9BQU8sRUFBRTtZQUFxQixJQUFJLElBQUU7Z0JBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUFBO1lBQUUsSUFBRztnQkFBRSxDQUFBLEdBQUUsRUFBRSxVQUFTO2dCQUFLLElBQUksSUFBRSxNQUFNLEdBQUUsZ0JBQWdCLElBQUUsR0FBRSxFQUFFO2dCQUFjLElBQUcsQUFBQyxDQUFBLEdBQUUsRUFBRSxVQUFTLEtBQUssRUFBRSxJQUFFO29CQUFDLE9BQU07b0JBQVMsWUFBVyxFQUFFO29CQUFPLFdBQVU7Z0JBQUMsSUFBRyxDQUFDLEdBQUUsT0FBTyxFQUFFO1lBQWdCLEVBQUMsT0FBTSxJQUFFO2dCQUFDLElBQUcsRUFBRSxLQUFHLE1BQU0sTUFBTSxLQUFJO2dCQUFFLE9BQU8sRUFBRTtZQUFlO1lBQUMsT0FBTSxBQUFDLENBQUEsR0FBRSxFQUFFLFVBQVMsS0FBSztnQkFBQyxTQUFRLENBQUM7Z0JBQUUsUUFBTztnQkFBRSxVQUFTO1lBQUM7UUFBQztRQUFDLElBQUcsbUJBQWlCLEdBQUUsT0FBTyxFQUFFO1FBQVMsSUFBRyx3QkFBc0IsR0FBRSxPQUFPLEVBQUU7UUFBcUIsT0FBTyxFQUFFO0lBQW1CO0FBQUM7TUFBdDZGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0zYjM0ZGIzMWVkNzY1OWRjLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL3JpcHBsZWhpcmUvbG9jYXRpb24tY2xpZW50LXNlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxyaXBwbGVoaXJlXFxcXGxvY2F0aW9uLWNsaWVudC1zZWFyY2guanNcIixcImJ1bmRsZUlkXCI6XCI3MWM5NmVlNWMwZWU5ODY5XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogNUM1Y0pcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL3JpcHBsZWhpcmUvbG9jYXRpb24tY2xpZW50LXNlYXJjaC5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+YXBpL2F1dG9maWxsLWNsaWVudC1zZWFyY2ggLT4gM0t6RFIgID0+ICBzcmMvYXBpL2F1dG9maWxsLWNsaWVudC1zZWFyY2guanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24gLT4gbHVKZnMgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24uanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvcHJvZmlsZS1sb2NhdGlvbi1vcmlnaW5hbC1hbnN3ZXIgLT4gOGt3Sk4gID0+ICBzcmMvY29udGVudHMvc2l0ZXMvcHJvZmlsZS1sb2NhdGlvbi1vcmlnaW5hbC1hbnN3ZXIuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiZ2V0UmlwcGxlaGlyZUxvY2F0aW9uQ2xpZW50U2VhcmNoU3VyZmFjZVwiLCgpPT52KSxuLmV4cG9ydChyLFwiaXNSaXBwbGVoaXJlTG9jYXRpb25DbGllbnRTZWFyY2hSdWxlXCIsKCk9PncpLG4uZXhwb3J0KHIsXCJnZXRSaXBwbGVoaXJlTG9jYXRpb25PcmlnaW5hbEFuc3dlclwiLCgpPT5TKSxuLmV4cG9ydChyLFwicmVzb2x2ZVJpcHBsZWhpcmVMb2NhdGlvbkNsaWVudFNlYXJjaFwiLCgpPT5MKTt2YXIgbz1lKFwifmFwaS9hdXRvZmlsbC1jbGllbnQtc2VhcmNoXCIpLGk9ZShcIn5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvblwiKSxhPWUoXCJ+Y29udGVudHMvc2l0ZXMvcHJvZmlsZS1sb2NhdGlvbi1vcmlnaW5hbC1hbnN3ZXJcIiksbD1lKFwifmNvcmUvZW51bXNcIik7bGV0IHM9NSx1PTI1LGM9MTI4LGQ9MjU2LGY9MjU2LHA9NTEyLG09MjUwO2Z1bmN0aW9uIGgoZSx0KXt0cnl7ZS5vbkRpYWdub3N0aWM/Lih7Li4udH0pfWNhdGNoe319ZnVuY3Rpb24gZyhlKXt0cnl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/TWF0aC5taW4odSxNYXRoLm1heCgwLGUubGVuZ3RoKSk6MH1jYXRjaHtyZXR1cm4gMH19ZnVuY3Rpb24gYihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIGkuQ2FuY2VsbGVkRXJyb3J8fGUgaW5zdGFuY2VvZiBpLlNraXBwZWRFcnJvcn1mdW5jdGlvbiB5KGUpe2lmKGUuaGlkZGVuKXJldHVybiExO2xldCB0PWUuY2hlY2tWaXNpYmlsaXR5O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpdHJ5e3JldHVybiB0LmNhbGwoZSl9Y2F0Y2h7cmV0dXJuITF9cmV0dXJuIG51bGwhPT1lLm9mZnNldFBhcmVudHx8XCJmdW5jdGlvblwiPT10eXBlb2YgZS5nZXRDbGllbnRSZWN0cyYmZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD4wfWZ1bmN0aW9uIHYoZSl7cmV0dXJuIGUubWF0Y2hlcyhcIiNpbmRpYUxvY2F0aW9uW25hbWU9aW5kaWFMb2NhdGlvbl1cIik/XCJib290c3RyYXAtdHlwZWFoZWFkXCI6ZS5tYXRjaGVzKFwiI2N1cnJlbnRMb2NhdGlvbltuYW1lPWN1cnJlbnRMb2NhdGlvbl0ucGFjLXRhcmdldC1pbnB1dFwiKT9cImdvb2dsZS1wbGFjZXNcIjpudWxsfWZ1bmN0aW9uIHcoZSl7dHJ5e2lmKGUudHlwZSE9PWwuRklFTERfVFlQRS5URVhUfHxcIkNpdHlcIiE9PWUubGFiZWwmJlwiQ3VycmVudCBMb2NhdGlvblwiIT09ZS5sYWJlbClyZXR1cm4hMTtsZXQgdD1lLiRpbnB1dDtyZXR1cm4hMD09PXQuaXNDb25uZWN0ZWQmJiExPT09dC5kaXNhYmxlZCYmIXQubWF0Y2hlcyhcIjpkaXNhYmxlZFwiKSYmbnVsbCE9PXYodCkmJnkodCl9Y2F0Y2h7cmV0dXJuITF9fWZ1bmN0aW9uIFMoZSx0KXtsZXQgcj0oMCxhLmdldFByb2ZpbGVMb2NhdGlvbk9yaWdpbmFsQW5zd2VyKShlKTtpZihyLnZhbHVlKXJldHVybiByO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtsZXQgZT10LnRyaW0oKTtpZihlKXJldHVybnt2YWx1ZTplLHNvdXJjZTpcInJlZ3VsYXItYW5zd2VyXCJ9fXJldHVybnt2YWx1ZTpcIlwiLHNvdXJjZTpcIm1pc3NpbmdcIn19ZnVuY3Rpb24gRShlKXtyZXR1cm4gZS5ub3JtYWxpemUoXCJORktDXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24geChlLHQscj0hMCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybntvazohMX07dHJ5e2xldCBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KTtpZighbnx8ciYmITAhPT1uLmVudW1lcmFibGV8fCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixcInZhbHVlXCIpKXJldHVybntvazohMX07cmV0dXJue29rOiEwLHZhbHVlOm4udmFsdWV9fWNhdGNoe3JldHVybntvazohMX19fWZ1bmN0aW9uIEMoZSx0LHIpe2xldCBuPXgoZSx0KTtyZXR1cm4gbi5vayYmXCJzdHJpbmdcIj09dHlwZW9mIG4udmFsdWUmJm4udmFsdWUudHJpbSgpJiYhKG4udmFsdWUubGVuZ3RoPnIpP24udmFsdWU6bnVsbH1mdW5jdGlvbiBBKGUsdCxyKXtyZXR1cm4gQyhlLHQscil9ZnVuY3Rpb24gayhlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpcmV0dXJuIG51bGw7bGV0IHQ9QShlLFwiY2FuZGlkYXRlX2tleVwiLGMpLHI9QShlLFwidmFsdWVcIixmKSxuPUEoZSxcInRleHRcIixwKTtyZXR1cm4gdCYmciYmbj97Y2FuZGlkYXRlX2tleTp0LHZhbHVlOnIsdGV4dDpufTpudWxsfWZ1bmN0aW9uIFQoZSx0KXt0cnl7aWYoIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJue29rOiExLHJlYXNvbjpcImludmFsaWRcIn19Y2F0Y2h7cmV0dXJue29rOiExLHJlYXNvbjpcImludmFsaWRcIn19bGV0IHI9eChlLFwibGVuZ3RoXCIsITEpO2lmKCFyLm9rfHxcIm51bWJlclwiIT10eXBlb2Ygci52YWx1ZXx8IU51bWJlci5pc1NhZmVJbnRlZ2VyKHIudmFsdWUpfHxyLnZhbHVlPDApcmV0dXJue29rOiExLHJlYXNvbjpcImludmFsaWRcIn07aWYoci52YWx1ZT50KXJldHVybntvazohMSxyZWFzb246XCJ0b28tbG9uZ1wifTtsZXQgbj1bXTtmb3IobGV0IHQ9MDt0PHIudmFsdWU7dCs9MSl7bGV0IHI9eChlLFN0cmluZyh0KSk7aWYoIXIub2spcmV0dXJue29rOiExLHJlYXNvbjpcImludmFsaWRcIn07bi5wdXNoKHIudmFsdWUpfXJldHVybntvazohMCxjYW5kaWRhdGVzOm59fWZ1bmN0aW9uIEYoZSl7bGV0IHQ9eChlLFwiYWN0aW9uXCIpO3JldHVybiB0Lm9rJiZcInN0cmluZ1wiPT10eXBlb2YgdC52YWx1ZT90LnZhbHVlOm51bGx9ZnVuY3Rpb24gSShlKXtsZXQgdD14KGUsXCJzZWxlY3RlZF92YWx1ZXNcIik7aWYoIXQub2spcmV0dXJuIG51bGw7bGV0IHI9VCh0LnZhbHVlLDEpO2lmKCFyLm9rfHwxIT09ci5jYW5kaWRhdGVzLmxlbmd0aClyZXR1cm4gbnVsbDtsZXQgbj1yLmNhbmRpZGF0ZXNbMF07cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIG4mJm4udHJpbSgpP246bnVsbH1mdW5jdGlvbiBqKGUpe2xldCB0O2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSlyZXR1cm57b2s6ITF9O3RyeXt0PVJlZmxlY3Qub3duS2V5cyhlKX1jYXRjaHtyZXR1cm57b2s6ITF9fWlmKDIhPT10Lmxlbmd0aHx8IXQuaW5jbHVkZXMoXCJzdGF0dXNcIil8fCF0LmluY2x1ZGVzKFwiY2FuZGlkYXRlc1wiKSlyZXR1cm57b2s6ITF9O2xldCByPXgoZSxcInN0YXR1c1wiKSxuPXgoZSxcImNhbmRpZGF0ZXNcIik7cmV0dXJuIHIub2smJm4ub2smJihcInJlYWR5XCI9PT1yLnZhbHVlfHxcIm5vLXJlc3VsdHNcIj09PXIudmFsdWV8fFwiZmFpbGVkXCI9PT1yLnZhbHVlKT97b2s6ITAsc3RhdHVzOnIudmFsdWUsY2FuZGlkYXRlczpuLnZhbHVlfTp7b2s6ITF9fWZ1bmN0aW9uIEQoZSl7cmV0dXJuXCJvcHRpb25zXCJpbiBlP3tyZXNvbHZlX3Nlc3Npb25faWQ6ZS5yZXNvbHZlX3Nlc3Npb25faWQscm91bmRfaWQ6ZS5yb3VuZF9pZCxvcHRpb25zOmUub3B0aW9ucy5tYXAoZT0+KHsuLi5lfSkpfTp7c291cmNlOmUuc291cmNlLGZpZWxkX3R5cGU6ZS5maWVsZF90eXBlLHF1ZXN0aW9uOmUucXVlc3Rpb24sb3JpZ2luYWxfYW5zd2VyOmUub3JpZ2luYWxfYW5zd2VyfX1hc3luYyBmdW5jdGlvbiBQKGUsdCxyKXthd2FpdCBuZXcgUHJvbWlzZShuPT57bGV0IG89bmV3IEFib3J0Q29udHJvbGxlcixpPSExLGE9KCk9PntpfHwoaT0hMCxjbGVhclRpbWVvdXQobCksbigpKX0sbD1zZXRUaW1lb3V0KCgpPT57by5hYm9ydCgpLGEoKX0sbSk7UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+cihlLHQsby5zaWduYWwpKS5jYXRjaCgoKT0+dm9pZCAwKS5maW5hbGx5KGEpfSl9ZnVuY3Rpb24gXyhlKXt0cnl7bGV0IHQ9ZS52YWx1ZTtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD90OlwiXCJ9Y2F0Y2h7cmV0dXJuXCJcIn19YXN5bmMgZnVuY3Rpb24gTChlLHQscil7bGV0IG49W10sYT1fKGUpLGw9XCJzdHJpbmdcIj09dHlwZW9mIHQ/dC50cmltKCk6XCJcIixmPSExLHA9ITEsbT1hc3luYygpPT57cCYmIWYmJihmPSEwLGF3YWl0IFAoZSxhLHIuY2xlYXJUZW1wb3JhcnlWYWx1ZSkpfSx5PWFzeW5jIGU9PihoKHIse3N0YWdlOlwiZmFpbGVkXCIscm91bmRDb3VudDpuLmxlbmd0aCxmYWlsdXJlUmVhc29uOmV9KSxhd2FpdCBtKCkse3N1Y2Nlc3M6ITEscm91bmRzOm4sZmFpbHVyZVJlYXNvbjplfSk7aWYoIWwpcmV0dXJuIHkoXCJtaXNzaW5nLW9yaWdpbmFsLWFuc3dlclwiKTtsZXQgdj1cIlwiLHc9e3NvdXJjZTpcInJpcHBsZWhpcmVcIixmaWVsZF90eXBlOlwibG9jYXRpb25cIixxdWVzdGlvbjooMCxvLmdldEF1dG9maWxsQ2xpZW50U2VhcmNoUXVlc3Rpb24pKFwibG9jYXRpb25cIiksb3JpZ2luYWxfYW5zd2VyOmx9LFM9bmV3IFNldCx4PW5ldyBTZXQsQT1udWxsLEw9MDtmb3IoOzspe2xldCB0O3RyeXsoMCxpLmNoZWNrcG9pbnQpKCl9Y2F0Y2goZSl7dGhyb3cgYihlKSYmYXdhaXQgbSgpLGV9dHJ5eygwLGkuY2hlY2twb2ludCkoKSxoKHIse3N0YWdlOlwicmVxdWVzdFwiLHJlcXVlc3RLaW5kOjA9PT1uLmxlbmd0aD9cInN0YXJ0XCI6XCJjb250aW51YXRpb25cIixyb3VuZENvdW50Om4ubGVuZ3RofSksdD1hd2FpdCByLnJlcXVlc3RTdGVwKEQodykpLCgwLGkuY2hlY2twb2ludCkoKX1jYXRjaChlKXtpZihiKGUpKXRocm93IGF3YWl0IG0oKSxlO3JldHVybiB5KFwicmVxdWVzdC1lcnJvclwiKX1sZXQgbz1GKHQpO2lmKCFvKXJldHVybiB5KFwiaW52YWxpZC1yZXNwb25zZVwiKTtpZihoKHIse3N0YWdlOlwicmVzcG9uc2VcIixhY3Rpb246byxyb3VuZENvdW50Om4ubGVuZ3RofSksXCJSRVFVRVNUX1NFQVJDSFwiPT09byl7bGV0IG87aWYobi5sZW5ndGg+PXMpcmV0dXJuIHkoXCJyb3VuZC1saW1pdFwiKTtsZXQgYT1DKHQsXCJyZXNvbHZlX3Nlc3Npb25faWRcIixjKSxsPUModCxcInJvdW5kX2lkXCIsYyksZj1DKHQsXCJzZWFyY2hfaW5wdXRcIixkKTtpZighYXx8IWx8fCFmKXJldHVybiB5KFwiaW52YWxpZC1yZXNwb25zZVwiKTtsZXQgRj1FKGYpO2lmKCFGKXJldHVybiB5KFwiaW52YWxpZC1zZWFyY2gtcmVxdWVzdFwiKTtpZih2JiZ2IT09YSlyZXR1cm4geShcImNoYW5nZWQtcmVzb2x2ZS1zZXNzaW9uLWlkXCIpO2lmKFMuaGFzKGwpfHx4LmhhcyhGKSlyZXR1cm4geShcInJlcGVhdGVkLXNlYXJjaFwiKTt2PWE7dHJ5eygwLGkuY2hlY2twb2ludCkoKSxwPSEwLG89YXdhaXQgci5jYXB0dXJlQ2FuZGlkYXRlcyhlLGYpLCgwLGkuY2hlY2twb2ludCkoKX1jYXRjaChlKXtpZihiKGUpKXRocm93IGF3YWl0IG0oKSxlO3JldHVybiB5KFwiY2FwdHVyZS1lcnJvclwiKX1sZXQgST1qKG8pO2lmKCFJLm9rKXJldHVybiB5KFwiaW52YWxpZC1jYXB0dXJlLXJlc3VsdFwiKTtpZihoKHIse3N0YWdlOlwiY2FwdHVyZVwiLHN0YXR1czpJLnN0YXR1cyxyb3VuZENvdW50Om4ubGVuZ3RoLGNhbmRpZGF0ZUNvdW50OmcoSS5jYW5kaWRhdGVzKX0pLFwiZmFpbGVkXCI9PT1JLnN0YXR1cylyZXR1cm4geShcImNhcHR1cmUtZmFpbGVkXCIpO2xldCBEPXUtTCxQPVQoSS5jYW5kaWRhdGVzLEQpO2lmKCExPT09UC5vaylyZXR1cm4geShcInRvby1sb25nXCI9PT1QLnJlYXNvbj9cImNhbmRpZGF0ZS1saW1pdFwiOlwiaW52YWxpZC1jYW5kaWRhdGVzXCIpO2lmKFwibm8tcmVzdWx0c1wiPT09SS5zdGF0dXMmJjAhPT1QLmNhbmRpZGF0ZXMubGVuZ3RoKXJldHVybiB5KFwiaW52YWxpZC1jYXB0dXJlLXJlc3VsdFwiKTtsZXQgXz1bXSxSPW5ldyBTZXQsTz1uZXcgTWFwO2ZvcihsZXQgZSBvZiBQLmNhbmRpZGF0ZXMpe2xldCB0PWsoZSk7aWYoIXQpcmV0dXJuIHkoXCJpbnZhbGlkLWNhbmRpZGF0ZVwiKTtpZihSLmhhcyh0LmNhbmRpZGF0ZV9rZXkpKXJldHVybiB5KFwiZHVwbGljYXRlLWNhbmRpZGF0ZVwiKTtsZXQgcj1PLmdldCh0LnRleHQpO2lmKHZvaWQgMCE9PXImJnIhPT10LnZhbHVlKXJldHVybiB5KFwiZHVwbGljYXRlLWNhbmRpZGF0ZVwiKTtSLmFkZCh0LmNhbmRpZGF0ZV9rZXkpLE8uc2V0KHQudGV4dCx0LnZhbHVlKSxfLnB1c2godCl9QT17cm91bmRfaWQ6bCxzZWFyY2hfaW5wdXQ6ZixvcHRpb25zOl99LG4ucHVzaChBKSxTLmFkZChsKSx4LmFkZChGKSxMKz1fLmxlbmd0aCx3PXtyZXNvbHZlX3Nlc3Npb25faWQ6dixyb3VuZF9pZDpsLG9wdGlvbnM6Xy5tYXAoZT0+KHsuLi5lfSkpfSxoKHIse3N0YWdlOlwiY29udGludWF0aW9uXCIscmVxdWVzdEtpbmQ6XCJjb250aW51YXRpb25cIixyb3VuZENvdW50Om4ubGVuZ3RoLGNhbmRpZGF0ZUNvdW50Ol8ubGVuZ3RofSk7Y29udGludWV9aWYoXCJTRUxFQ1RfT1BUSU9OU1wiPT09byl7bGV0IG89SSh0KTtpZighQXx8bnVsbD09PW8pcmV0dXJuIHkoXCJpbnZhbGlkLXNlbGVjdGlvblwiKTtsZXQgYT1BLm9wdGlvbnMuZmlsdGVyKGU9PmUudGV4dD09PW8pO2lmKGgocix7c3RhZ2U6XCJzZWxlY3Rpb25cIixyb3VuZENvdW50Om4ubGVuZ3RoLG1hdGNoQ291bnQ6YS5sZW5ndGh9KSwwPT09YS5sZW5ndGh8fDEhPT1uZXcgU2V0KGEubWFwKGU9PmUudmFsdWUpKS5zaXplKXJldHVybiB5KFwiaW52YWxpZC1zZWxlY3Rpb25cIik7bGV0IGw9ey4uLmFbMF19O3RyeXsoMCxpLmNoZWNrcG9pbnQpKCk7bGV0IHQ9YXdhaXQgci5jb21taXRDYW5kaWRhdGUoZSxsLEEuc2VhcmNoX2lucHV0KTtpZigoMCxpLmNoZWNrcG9pbnQpKCksaChyLHtzdGFnZTpcImNvbW1pdFwiLHJvdW5kQ291bnQ6bi5sZW5ndGgsY29tbWl0dGVkOnR9KSwhdClyZXR1cm4geShcImNvbW1pdC1mYWlsZWRcIil9Y2F0Y2goZSl7aWYoYihlKSl0aHJvdyBhd2FpdCBtKCksZTtyZXR1cm4geShcImNvbW1pdC1lcnJvclwiKX1yZXR1cm4oMCxpLmNoZWNrcG9pbnQpKCkse3N1Y2Nlc3M6ITAscm91bmRzOm4sc2VsZWN0ZWQ6bH19aWYoXCJSRVRVUk5fRU1QVFlcIj09PW8pcmV0dXJuIHkoXCJlbXB0eVwiKTtpZihcIlJFVFJZQUJMRV9GQUlMVVJFXCI9PT1vKXJldHVybiB5KFwicmV0cnlhYmxlLWZhaWx1cmVcIik7cmV0dXJuIHkoXCJpbnZhbGlkLXJlc3BvbnNlXCIpfX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImxvY2F0aW9uLWNsaWVudC1zZWFyY2guYzBlZTk4NjkuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);