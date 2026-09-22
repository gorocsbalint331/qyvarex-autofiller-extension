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
})({"kKvkx":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\myworkday.js",
    "bundleId": "eeabf93f6faf670b",
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
var j = z(require("55be56500a1e361c"));
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

},{"55be56500a1e361c":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"k5RKD":[function(require,module,exports) {
/**
 * Parcel module id: 6Cqo2
 * Resolved path: src/contents/sites/myworkday.js
 * Dependencies:
 *   ./form-loss -> dkfwU  =>  src/contents/sites/myworkday/form-loss.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/rules -> 3cWKC  =>  src/contents/methods/rules.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/education-item-trace -> j7UGI  =>  src/contents/sites/education-item-trace.js
 *   ~contents/sites/myworkday/answer -> eUq3l  =>  src/contents/sites/myworkday/answer.js
 *   ~contents/sites/myworkday/education-operation -> aet9i  =>  src/contents/sites/myworkday/education-operation.js
 *   ~contents/sites/myworkday/education-resolve-scheduler -> 6KKZk  =>  src/contents/sites/myworkday/education-resolve-scheduler.js
 *   ~contents/sites/myworkday/operations -> apMik  =>  src/contents/sites/myworkday/operations.js
 *   ~contents/sites/myworkday/rules -> 1H2ID  =>  src/contents/sites/myworkday/rules.js
 *   ~contents/sites/myworkday/section-results -> jywL4  =>  src/contents/sites/myworkday/section-results.js
 *   ~contents/sites/runtime-validation-tracking -> 8W2JT  =>  src/contents/sites/runtime-validation-tracking.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "MyWorkDay", ()=>N);
var o = e("@plasmohq/messaging"), i = e("~contents/methods/answer"), a = e("~contents/methods/cancellation"), l = e("~contents/methods/rules"), s = e("~contents/methods/track"), u = e("~contents/sites/autofill-answer-pair-tracking"), c = e("~contents/sites/base-filler"), d = e("~contents/sites/education-item-trace"), f = e("~contents/sites/myworkday/answer"), p = e("~contents/sites/myworkday/education-operation"), m = e("~contents/sites/myworkday/education-resolve-scheduler"), h = e("~contents/sites/myworkday/operations"), g = e("~contents/sites/myworkday/section-results"), b = e("~contents/sites/myworkday/rules"), y = e("~contents/sites/runtime-validation-tracking"), v = e("~core/dom"), w = e("~core/enums"), S = e("~enums/http"), E = e("~store/autofillInfo"), x = e("~store/url"), C = e("~utils/fieldLabel"), A = e("./form-loss");
let k = "myworkday", T = [
    "Security Code",
    "Country",
    "Country / Territory",
    "United States of America",
    "Employee ID (if applicable)",
    "What is your date of availability?"
];
function F(e1) {
    return {
        count: e1.length,
        labels: e1.map((e1)=>({
                label: e1.label,
                type: e1.type,
                required: !!e1.required
            }))
    };
}
_c = F;
function I(e1) {
    return {
        regularKeys: Object.keys(e1?.regular ?? {}),
        educationCount: e1?.education?.length ?? 0,
        workExperienceCount: e1?.workExperience?.length ?? 0,
        skillsCount: e1?.skills?.length ?? 0,
        hasResume: !!e1?.resume,
        fillDataListCount: e1?.fillDataList?.length ?? 0
    };
}
_c1 = I;
function j(e1) {
    return {
        hasResumeInfo: !!e1,
        idPresent: !!e1?.id,
        tailorIdPresent: !!e1?.tailorId,
        tailorPresent: !!e1?.tailor,
        diagnoseIdPresent: !!e1?.diagnoseId,
        useOriginalResume: !!e1?.useOriginalResume,
        resumeNamePresent: !!e1?.resumeName,
        template: e1?.template ?? null
    };
}
function D(e1) {
    return {
        name: e1 instanceof Error ? e1.name : typeof e1,
        message: e1 instanceof Error ? e1.message : String(e1)
    };
}
_c2 = D;
function P() {
    return "undefined" != typeof window && window.location ? window.location.href : "";
}
_c3 = P;
function _(e1, t = {}) {
    console.info(`[MyWorkday][autofill-debug] ${e1} ${JSON.stringify(t)}`);
}
function L(...e1) {
    for (let t of e1){
        let e1 = (0, f.getWorkdayCountryFillValue)(t);
        if (e1) return e1;
    }
    return null;
}
_c4 = L;
function R(e1) {
    return e1.replace(/\*/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}
_c5 = R;
function O(e1, t) {
    if (Object.prototype.hasOwnProperty.call(e1, t)) return {
        found: !0,
        value: e1[t]
    };
    let r1 = R(t);
    for (let [t, n] of Object.entries(e1))if (R(t) === r1) return {
        found: !0,
        value: n
    };
    return {
        found: !1,
        value: void 0
    };
}
_c6 = O;
async function M(e1) {
    try {
        return await (0, o.sendToBackground)({
            name: "resolveAutofillOperation",
            body: {
                operation: e1,
                source: "myworkday"
            }
        });
    } catch (e1) {
        return console.warn("[MyWorkday] resolveAutofillOperation failed:", e1), null;
    }
}
_c7 = M;
class N extends c.BaseFiller {
    getFieldHandlers() {
        return {
            [w.FIELD_TYPE.TEXT]: {
                handler: (e1, t)=>(0, h.fillMyWorkdayTextField)(e1.$input, t),
                options: {
                    expectArray: !1
                }
            },
            [w.FIELD_TYPE.NUMBER]: {
                handler: (e1, t)=>(0, h.fillMyWorkdayTextField)(e1.$input, t),
                options: {
                    expectArray: !1
                }
            },
            [w.FIELD_TYPE.CHECKBOX]: {
                handler: (e1, t)=>(0, h.fillMyWorkdayCheckBoxesField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [w.FIELD_TYPE.MULTI_SELECT]: {
                handler: (e1, t)=>(0, h.fillSearchBoxInputField)(e1.$input, t),
                options: {
                    expectArray: !0
                }
            },
            [w.FIELD_TYPE.SEARCH]: {
                handler: (e1, t)=>(0, h.fillSearchBoxInputField)(e1.$input, t),
                options: {
                    expectArray: !0
                }
            },
            [w.FIELD_TYPE.LISTBOX]: {
                handler: (e1, t)=>(0, h.fillMyWorkdayListboxRule)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [w.FIELD_TYPE.DATE]: {
                handler: (e1, t)=>(0, h.fillMyWorkdayDateField)(e1.$input, t),
                options: {
                    expectArray: !1
                }
            }
        };
    }
    getSiteName() {
        return k;
    }
    async extractFormRules() {
        return (0, b.getRules)();
    }
    async runPreFillForm() {
        this.submitTrackingBinding = (0, h.unbindMyWorkdaySubmitTracking)(this.submitTrackingBinding), this.runtimeValidationRetryResults = [], this.autofillInfoState = null, this.autofillCountry = void 0, this.countryFilled = !1, this.educationTraceRunId = null, this.taskQueue.add(h.waitPageClean), await this.taskQueue.run(), await (0, E.useAutofillInfoStore).getState().fetchAutofillInfo(), this.autofillInfoState = (0, E.useAutofillInfoStore).getState(), this.autofillCountry = this.autofillInfoState.country;
        let e1 = L(this.autofillCountry, this.autofillInfoState.autofillInfo?.location?.country);
        e1 && (this.taskQueue.add(async ()=>{
            this.countryFilled = await (0, h.fillCountry)(e1);
        }), await this.taskQueue.run()), this.taskQueue.add(async ()=>{
            await (0, h.preclickAddButtons)();
        }), await this.taskQueue.run();
    }
    async getAutofillSnapshot() {
        let e1 = this.ensureEducationTraceRunId();
        return (0, b.getFormSnapshot)({
            markEducationRows: !0,
            includeEducationSnapshotIndex: !0,
            includeEducationTrace: !0,
            educationTraceRunId: e1
        });
    }
    async getSubmitSnapshot() {
        return (0, b.getFormSnapshot)({
            includeEducationSnapshotIndex: !0,
            includeEducationTrace: !0,
            educationTraceRunId: this.ensureEducationTraceRunId()
        });
    }
    submitApplication() {}
    ensureEducationTraceRunId() {
        return this.educationTraceRunId || (this.educationTraceRunId = (0, d.createEducationTraceRunId)()), this.educationTraceRunId;
    }
    buildRuntimeValidationTrackingData(e1, t) {
        return (0, p.buildWorkdayEducationRuntimeValidationTrackingData)(this.answer.education ?? [], Array.isArray(e1.education) ? e1.education : [], t, this.runtimeValidationRetryResults);
    }
    isRuntimeValidationRetryCandidate(e1) {
        return "degree" === e1.fieldType && ("mismatched" === e1.status || "empty" === e1.status) && e1.attemptedCandidates.length > 0;
    }
    findEducationValidationRule(e1, t) {
        let r1 = e1[t.index], n = Array.isArray(r1?.children) ? r1.children : [], o = new Set("school" === t.fieldType ? [
            "school",
            "school or university"
        ] : "degree" === t.fieldType ? [
            "degree"
        ] : [
            "field of study",
            "discipline"
        ]);
        return n.find((e1)=>{
            let t = String(e1.label ?? "").trim().toLowerCase();
            return o.has(t);
        }) ?? null;
    }
    async requestFormAnswers(e1, t, r1 = {}) {
        try {
            let n = this.autofillInfoState ?? (0, E.useAutofillInfoStore).getState(), o = this.autofillCountry ?? n.country;
            this.token || (this.token = await (0, i.getSiteToken)()), !1 !== r1.updateTimeTrace && (this.timeTrace.requestStartTime = Date.now()), _("requestFormAnswers:start", {
                fromAgent: t,
                resumeId: this.resumeInfo?.id,
                tailorId: this.resumeInfo?.tailorId,
                tokenPresent: !!this.token,
                autofillCountry: o,
                rules: F(e1)
            });
            let a = this.captureFalconResponseRun(), s = await (0, i.getElementRules)((0, l.filterRulesByLabel)(e1, T), k, this.token, t, this.resumeInfo.id, this.resumeInfo.tailorId);
            this.recordFalconResponse(s, a);
            let u = (0, f.formatAnswer)(s, {
                autofillInfo: n.autofillInfo,
                country: o,
                rules: e1
            });
            return !1 !== r1.updateTimeTrace && (this.timeTrace.fillStartTime = Date.now()), _("requestFormAnswers:success", {
                answer: I(u)
            }), u;
        } catch (e1) {
            if (e1 instanceof i.HTTPError || e1 instanceof i.ResumeMissingCodeError) return console.warn("[MyWorkday][autofill-debug] requestFormAnswers:known-error", {
                message: e1.message
            }), (0, s.sendHttpStatusMessage)(e1.message), e1.message;
            console.error("[MyWorkday][autofill-debug] requestFormAnswers:unknown-error", e1);
        }
        (0, a.checkpoint)();
    }
    async runComboQuestionAutofillIfNeeded(e1, t) {
        if (!this.hasComboQuestions) return e1;
        await (0, c.waitForComboQuestionsToSettle)(this.comboQuestionSettleDelayMs), this.markEmptyFilledFieldsFromSnapshot(await this.getAutofillSnapshot());
        let r1 = await (0, b.getRules)(), n = (0, c.getNewComboQuestionRules)(e1, r1), o = this.getMissedComboQuestionRetryRules(e1, r1);
        if (0 === n.length && 0 === o.length) return e1;
        for (let e1 of n)this.progressTracker.updateFieldRequiredStatus(e1);
        if (n.length > 0) {
            let e1 = await this.requestFormAnswers(n, t, {
                updateTimeTrace: !1
            });
            if ("string" == typeof e1) return e1;
            e1 && (this.answer = (0, c.mergeComboQuestionAnswer)(this.answer, e1, n));
        }
        let a = (0, i.getRegularOperations)((0, b.getWorkdayRegularRules)([
            ...o,
            ...n
        ]), this.answer.regular, this.operationConfig);
        for (let e1 of a)this.taskQueue.add(e1);
        return await this.taskQueue.run(), this.taskQueue.add(h.blurPage), await this.taskQueue.run(), [
            ...e1,
            ...n
        ];
    }
    getMissedComboQuestionRetryRules(e1, t) {
        let r1 = new Set(e1.map((e1)=>(0, C.normalizeFieldLabel)(e1?.label))), n = new Set(this.progressTracker.fieldStatus.missingFields.map((e1)=>(0, C.normalizeFieldLabel)(e1))), o = this.answer?.regular && "object" == typeof this.answer.regular && !Array.isArray(this.answer.regular) ? this.answer.regular : {}, i = new Set(Object.entries(o).filter(([, e1])=>null != e1 && "" !== e1).map(([e1])=>(0, C.normalizeFieldLabel)(e1))), a = [], l = new Set;
        for (let e1 of t){
            let t = (0, C.normalizeFieldLabel)(e1?.label);
            !(!t || l.has(t)) && r1.has(t) && n.has(t) && i.has(t) && (l.add(t), a.push(e1));
        }
        return a;
    }
    markEmptyFilledFieldsFromSnapshot(e1) {
        let t = new Set([
            "",
            "select one",
            "[]",
            "/",
            "//"
        ]), r1 = (e1)=>{
            if (null == e1) return !0;
            let r1 = String(e1).trim().toLowerCase();
            return t.has(r1);
        };
        for (let t of [
            ...this.progressTracker.fieldStatus.filledFields
        ]){
            let n = O(e1, t);
            if (n.found) {
                r1(n.value) && (console.warn(`[MyWorkday] field "${t}" marked filled but actual value is empty:`, n.value), this.progressTracker.updateMissedProgress(t));
                continue;
            }
            let o = e1.education || e1.employment;
            if (Array.isArray(o)) for (let e1 of o){
                if (!e1 || "object" != typeof e1) continue;
                let n = O(e1, t);
                if (n.found && r1(n.value)) {
                    console.warn(`[MyWorkday] grouped field "${t}" marked filled but actual value is empty:`, n.value), this.progressTracker.updateMissedProgress(t);
                    break;
                }
            }
        }
    }
    syncSectionResultsFromSnapshot(e1) {
        let t = this.progressTracker.fieldStatus.sectionResults ?? [];
        for (let r1 of t){
            let t = e1[r1.type], n = (0, g.syncMyWorkdaySectionResult)(r1, t);
            n !== r1 && (console.info("[MyWorkday] synced section progress details from DOM", {
                section: r1.type,
                rowCount: n.rows.length
            }), this.progressTracker.updateSectionResult(n));
        }
    }
    async retryRuntimeValidationFailures({ autofillSnapshot: e1, eduRules: t }) {
        let r1 = this.buildRuntimeValidationTrackingData(e1, t), n = (0, p.getWorkdayEducationRuntimeValidationLogEntries)(r1).filter((e1)=>this.isRuntimeValidationRetryCandidate(e1));
        if (0 === n.length) return {
            autofillSnapshot: e1,
            runtimeValidationTrackingData: r1
        };
        for (let e1 of (this.runtimeValidationRetryResults = [], n)){
            let r1 = this.findEducationValidationRule(t, e1);
            if (!r1) continue;
            let n = r1.$input ?? null;
            (r1.type === w.FIELD_TYPE.SEARCH || r1.type === w.FIELD_TYPE.MULTI_SELECT) && await (0, h.clearWorkdaySearchSelection)(n);
            let o = (0, p.buildWorkdayEducationRuntimeValidationRetryRecord)({
                record: this.answer.education?.[e1.index] ?? {},
                ruleLabel: r1.label,
                attemptedCandidates: e1.attemptedCandidates
            });
            await this.operationConfig[r1.type]?.(r1, o, !1), this.runtimeValidationRetryResults.push({
                index: e1.index,
                fieldType: e1.fieldType,
                initialStatus: e1.status,
                initialCommittedValue: e1.committedValue,
                retryCount: 1,
                resetApplied: !1
            });
        }
        return e1 = (0, b.getFormSnapshot)({
            markEducationRows: !0,
            includeEducationSnapshotIndex: !0,
            includeEducationTrace: !0,
            educationTraceRunId: this.ensureEducationTraceRunId()
        }), r1 = this.buildRuntimeValidationTrackingData(e1, t), {
            autofillSnapshot: e1,
            runtimeValidationTrackingData: r1
        };
    }
    async uploadResumeOnly() {
        this.progressTracker.setFieldsRequiredStatus([
            {
                label: "Resume/CV",
                required: !0
            }
        ]);
        let e1 = null;
        return (this.taskQueue.add(async ()=>{
            try {
                let e1 = await (0, h.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
                "not-applicable" === e1 && this.progressTracker.updateMissedProgress("Resume/CV");
            } catch (t) {
                if (t instanceof a.CancelledError) throw t;
                if (this.progressTracker.updateMissedProgress("Resume/CV"), t instanceof i.ResumeMissingCodeError || t instanceof Error && t.message === i.NO_RESUME_FOUND_ERROR) {
                    e1 = t instanceof i.ResumeMissingCodeError ? t.message : S.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY, (0, s.sendHttpStatusMessage)(e1);
                    return;
                }
                console.error("[MyWorkday] resume-only upload failed:", t);
            }
        }), await this.taskQueue.run(), e1) ? e1 : ((0, s.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), this.progressTracker.generateFinalProgress());
    }
    clearProgressAfterFormUnavailable(e1, t) {
        let r1 = this.progressTracker.fieldStatus;
        console.warn("[MyWorkday][autofill-debug] form-unavailable:clear-progress", {
            stage: e1,
            href: P(),
            error: t instanceof Error ? t.message : String(t),
            fieldRequiredStatus: r1.fieldRequiredStatus.map((e1)=>({
                    label: e1.label,
                    required: e1.required
                })),
            filledFields: r1.filledFields,
            missingFields: r1.missingFields,
            currentField: r1.currentField ?? null
        }), this.progressTracker.clear();
        let n = this.progressTracker.generateFinalProgress();
        return window.top?.postMessage({
            type: w.MESSAGE_EVENTS.autoFillResultFromIframe,
            data: n
        }, {
            targetOrigin: "*"
        }), n;
    }
    async doFillForm(e1 = !1) {
        let t, r1;
        _("doFillForm:start", {
            href: P(),
            fromAgent: e1,
            disableUploadResume: this.disableUploadResume
        }), await this.initializeFillForm();
        try {
            t = await this.extractFormRules();
        } catch (e1) {
            if ((0, A.isWorkdayNoFormFieldsError)(e1)) return this.clearProgressAfterFormUnavailable("extract-form-rules", e1);
            throw e1;
        }
        if (_("extractFormRules:done", {
            rules: F(t)
        }), this.progressTracker.setFieldsRequiredStatus(t), 0 === t.length) return !this.disableUploadResume && (0, h.hasWorkdayResumeUploadInput)() ? (_("no-rules:upload-resume-only"), await this.uploadResumeOnly()) : (console.warn("[MyWorkday][autofill-debug] no-rules:no-resume-upload"), this.progressTracker.generateFinalProgress());
        this.taskQueue.add(h.blurPage), await this.taskQueue.run();
        let n = await this.requestFormAnswers(t, e1);
        if ("string" == typeof n) return console.warn("[MyWorkday][autofill-debug] doFillForm:answer-error", {
            answerResult: n
        }), n;
        if (n && (this.answer = n), _("doFillForm:answer-ready", {
            answer: I(this.answer)
        }), !this.countryFilled) {
            let e1 = L(this.autofillCountry, this.answer.country, this.autofillInfoState?.autofillInfo?.location?.country);
            e1 && (this.taskQueue.add(async ()=>{
                this.countryFilled = await (0, h.fillCountry)(e1);
            }), await this.taskQueue.run());
        }
        (0, a.checkpoint)();
        let o = (0, b.getSubmitButtonText)();
        (0, s.bindSubmitButton)(o, this.progressTracker.fieldStatus, this.timeTrace), this.taskQueue.add(async ()=>{
            await (0, h.expandForm)(this.answer);
        }), await this.taskQueue.run();
        let l = await (0, b.getEduRules)(), c = await (0, b.getExpRules)();
        (0, v.setSectionResultFocusRules)("employment", c), (0, v.setSectionResultFocusRules)("education", l);
        let d = (0, b.getWorkdayEducationApiBase)(), f = c.length > 0 ? (0, i.getEmploymentOperations)(c, this.answer.workExperience, this.operationConfig, void 0, {
            onCompleted: ()=>this.progressTracker.updateFilledProgress("Employment"),
            onSkipped: ()=>this.progressTracker.updateMissedProgress("Employment"),
            onSectionResultChanged: this.progressTracker.updateSectionResult
        }) : [], g = this.answer.education ?? [], w = !!(d && l.length > 0 && g.length > 0), E = w ? (0, m.cloneWorkdayEducationRecords)(g) : g;
        if (w && _("education-resolve:start", {
            educationRecords: E.length,
            educationRuleGroups: l.length
        }), await (0, m.runDeferredWorkdayEducationResolve)({
            fallbackValue: E,
            startResolve: async ()=>w && d ? await (0, p.resolveWorkdayEducationRecordsInParallel)({
                    apiBase: d,
                    rules: l,
                    records: E,
                    resolveOperation: M
                }) : E,
            fillIndependentFields: async ()=>{
                let e1 = (0, b.getWorkdayRegularRules)(t), r1 = [
                    ...(0, i.getRegularOperations)(e1, this.answer.regular, this.operationConfig),
                    ...f
                ];
                for (let t of (_("independent-operations:built", {
                    regularRules: e1.length,
                    expRules: c.length,
                    operations: r1.length,
                    educationResolveStarted: w
                }), r1))this.taskQueue.add(t);
                await this.taskQueue.run(), _("independent-operations:finished", {
                    educationResolveStarted: w
                });
            },
            checkpoint: a.checkpoint,
            onResolveSettled: ({ failed: e1, elapsedMs: t, errorName: r1 })=>{
                w && _("education-resolve:ready", {
                    failed: e1,
                    elapsedMs: t,
                    errorName: r1
                });
            },
            fillEducation: async (e1)=>{
                this.answer.education = e1;
                let t = l.length > 0 ? (0, i.getEducationOperations)(l, this.answer.education, this.operationConfig, void 0, {
                    onCompleted: ()=>this.progressTracker.updateFilledProgress("Education"),
                    onSkipped: ()=>this.progressTracker.updateMissedProgress("Education"),
                    onSectionResultChanged: this.progressTracker.updateSectionResult
                }) : [];
                for (let e1 of t)this.taskQueue.add(e1);
                await this.taskQueue.run(), _("education-operations:finished", {
                    eduRules: l.length,
                    operations: t.length
                });
            }
        }), this.countryFilled) for (let e1 of (0, b.findWorkdayCountryProgressLabels)(this.progressTracker.fieldStatus))this.progressTracker.updateFilledProgress(e1);
        this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this.taskQueue.add(async ()=>{
            _("resume-upload:start", {
                resumeInfo: j(this.resumeInfo),
                hasUploadInput: (0, h.hasWorkdayResumeUploadInput)()
            });
            try {
                let e1 = await (0, h.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
                if ("not-applicable" === e1) {
                    _("resume-upload:not-applicable", {
                        reason: "no-upload-input"
                    });
                    return;
                }
                _("resume-upload:success", {
                    resumeInfo: j(this.resumeInfo)
                });
            } catch (e1) {
                if (e1 instanceof a.CancelledError) throw e1;
                this.progressTracker.updateMissedProgress("Resume/CV"), console.warn("[MyWorkday][autofill-debug] resume-upload:failed", {
                    resumeInfo: j(this.resumeInfo),
                    hasUploadInput: (0, h.hasWorkdayResumeUploadInput)(),
                    error: D(e1)
                }), (e1 instanceof i.ResumeMissingCodeError || e1 instanceof Error && e1.message === i.NO_RESUME_FOUND_ERROR) && (0, s.sendHttpStatusMessage)(e1 instanceof i.ResumeMissingCodeError ? e1.message : S.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY);
            }
        }), this.taskQueue.add(async ()=>{
            if (!this.answer.skills?.length) return;
            let e1 = !!document.querySelector('[data-automation-id="skillsSection"] input[placeholder="Search"], [data-automation-id="formField-skills"] input[placeholder="Search"], [id*="Skills-section"] input[placeholder="Search"]');
            if (!e1) return;
            let t = (0, b.findWorkdaySkillsProgressLabel)(this.progressTracker.fieldStatus);
            t && (0, a.updateCurrentField)(t);
            try {
                let e1 = await (0, a.withSkip)(async ()=>(0, h.fillSkills)(this.answer.skills));
                e1 && t && this.progressTracker.updateFilledProgress(t);
            } catch (e1) {
                if (e1 instanceof a.SkippedError) {
                    t && this.progressTracker.updateMissedProgress(t);
                    return;
                }
                throw e1;
            }
        }), this.taskQueue.add(async ()=>{
            await (0, h.blurPage)();
        }), await this.taskQueue.run();
        try {
            r1 = await this.runComboQuestionAutofillIfNeeded(t, e1);
        } catch (e1) {
            if ((0, A.isWorkdayNoFormFieldsError)(e1)) return this.clearProgressAfterFormUnavailable("combo-question-rules", e1);
            throw e1;
        }
        if ("string" == typeof r1) return r1;
        t = r1;
        let C = (0, b.getFormSnapshot)({
            markEducationRows: !0,
            includeEducationSnapshotIndex: !0,
            includeEducationTrace: !0,
            educationTraceRunId: this.ensureEducationTraceRunId()
        });
        for (let e1 of (0, b.findFilledMyExperienceProgressLabels)(this.progressTracker.fieldStatus, C))this.progressTracker.updateFilledProgress(e1);
        let T = (0, p.buildWorkdayEducationResolveTrackingData)(this.answer.education ?? []), R = await this.retryRuntimeValidationFailures({
            autofillSnapshot: C,
            eduRules: l
        });
        C = R.autofillSnapshot, this.syncSectionResultsFromSnapshot(C);
        let O = R.runtimeValidationTrackingData;
        (0, y.sendRuntimeValidationDeviationEvent)({
            formUrl: (0, x.useUrlStore).getState().currentTabUrl,
            source: k,
            trackingData: O
        });
        let N = (0, u.buildFalconAutofillAnswerPairData)(this.answer), $ = {
            ...N ? {
                falcon: N
            } : {},
            ...T,
            ...O
        };
        (0, p.getWorkdayEducationRuntimeValidationLogEntries)(O).forEach((e1)=>{
            let t = `[MyWorkday] ${e1.fieldLabel} validation ${e1.status}`, r1 = {
                index: e1.index,
                fieldType: e1.fieldType,
                committedValue: e1.committedValue,
                attemptedCandidates: e1.attemptedCandidates
            };
            "info" === e1.level ? console.info(t, r1) : console.warn(t, r1);
        });
        let B = (0, p.getUnresolvedWorkdayEducationRuntimeValidationLogEntries)(O);
        for (let e1 of (B.length > 0 && (console.warn("[MyWorkday] Education runtime validation still has unresolved fields; marking Education as missed", B.map((e1)=>({
                index: e1.index,
                fieldType: e1.fieldType,
                status: e1.status,
                committedValue: e1.committedValue,
                attemptedCandidates: e1.attemptedCandidates
            }))), this.progressTracker.updateMissedProgress("Education")), this.markEmptyFilledFieldsFromSnapshot(C), (0, b.findUnfilledWorkdaySelfIdentifyCheckboxProgressLabels)(this.progressTracker.fieldStatus)))this.progressTracker.updateMissedProgress(e1);
        for (let e1 of (0, b.findFilledWorkdaySelfIdentifyCheckboxProgressLabels)(this.progressTracker.fieldStatus))this.progressTracker.updateFilledProgress(e1);
        return this.submitTrackingBinding = (0, h.bindMyWorkdaySubmitTracking)(C, this.submitTrackingBinding, $, this.educationTraceRunId), (0, s.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), _("doFillForm:final", {
            fieldStatus: this.progressTracker.fieldStatus,
            timeTrace: this.timeTrace
        }), this.progressTracker.generateFinalProgress();
    }
    constructor(...e1){
        super(...e1), this.submitTrackingBinding = null, this.runtimeValidationRetryResults = [], this.hasComboQuestions = !0, this.comboQuestionSettleDelayMs = 300, this.autofillInfoState = null, this.countryFilled = !1, this.educationTraceRunId = null;
    }
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
$RefreshReg$(_c, "F");
$RefreshReg$(_c1, "I");
$RefreshReg$(_c2, "D");
$RefreshReg$(_c3, "P");
$RefreshReg$(_c4, "L");
$RefreshReg$(_c5, "R");
$RefreshReg$(_c6, "O");
$RefreshReg$(_c7, "M");

},{}]},["kKvkx","k5RKD"], "k5RKD", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUcsSUFBSSxDQUN4RSxnQkFBZ0IsYUFBYyxJQUFJLENBQUMsZ0JBQWdCLHFCQUFxQjtRQUM3RSxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQUFBQyxDQUFBLEdBQUcsRUFBRSwyQkFBMEIsRUFBRyxHQUFHLElBQUksQ0FDM0UsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixBQUFDLENBQUEsR0FBRyxFQUFFLFVBQVMsRUFBRyxXQUFXLElBQUksQ0FDdEYsZ0JBQWdCLGFBQWEsSUFBSSxDQUFDLFlBQVksRUFBRSxvQkFBb0I7WUFDckUsYUFBYSxJQUFJLENBQUMsZ0JBQWdCO1lBQ2xDLFdBQVcsSUFBSSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLGdCQUFnQjtJQUMzQjtJQUNBLFlBQVksR0FBRyxFQUFDLENBQUU7UUFDaEIsS0FBSyxJQUFJLEtBQUksSUFBSSxDQUFDLHdCQUF3QixNQUFNLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxFQUNyRixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxJQUFJLENBQUMsNkJBQTZCLEtBQUssSUFBSSxDQUN2RSxvQkFBb0IsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsc0JBQXNCO0lBQ25GO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTFkYTEwZDk4Nzc1ODYyNzAuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvbXl3b3JrZGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXG15d29ya2RheS5qc1wiLFwiYnVuZGxlSWRcIjpcImVlYWJmOTNmNmZhZjY3MGJcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA2Q3FvMlxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvbXl3b3JrZGF5LmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9mb3JtLWxvc3MgLT4gZGtmd1UgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L2Zvcm0tbG9zcy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24gLT4gbHVKZnMgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9ydWxlcyAtPiAzY1dLQyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL3J1bGVzLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvdHJhY2sgLT4gaDQ3OWIgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy90cmFjay5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9hdXRvZmlsbC1hbnN3ZXItcGFpci10cmFja2luZyAtPiBhQ0VsWiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hdXRvZmlsbC1hbnN3ZXItcGFpci10cmFja2luZy5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlciAtPiA4eGo2RiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlci5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9lZHVjYXRpb24taXRlbS10cmFjZSAtPiBqN1VHSSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9lZHVjYXRpb24taXRlbS10cmFjZS5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9teXdvcmtkYXkvYW5zd2VyIC0+IGVVcTNsICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL215d29ya2RheS9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L2VkdWNhdGlvbi1vcGVyYXRpb24gLT4gYWV0OWkgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L2VkdWNhdGlvbi1vcGVyYXRpb24uanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L2VkdWNhdGlvbi1yZXNvbHZlLXNjaGVkdWxlciAtPiA2S0taayAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9teXdvcmtkYXkvZWR1Y2F0aW9uLXJlc29sdmUtc2NoZWR1bGVyLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL215d29ya2RheS9vcGVyYXRpb25zIC0+IGFwTWlrICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL215d29ya2RheS9vcGVyYXRpb25zLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL215d29ya2RheS9ydWxlcyAtPiAxSDJJRCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9teXdvcmtkYXkvcnVsZXMuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L3NlY3Rpb24tcmVzdWx0cyAtPiBqeXdMNCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9teXdvcmtkYXkvc2VjdGlvbi1yZXN1bHRzLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL3J1bnRpbWUtdmFsaWRhdGlvbi10cmFja2luZyAtPiA4VzJKVCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9ydW50aW1lLXZhbGlkYXRpb24tdHJhY2tpbmcuanNcclxuICogICB+Y29yZS9kb20gLT4gaExNSlggID0+ICBzcmMvY29yZS9kb20uanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmVudW1zL2h0dHAgLT4gZUpGcWogID0+ICBzcmMvZW51bXMvaHR0cC5qc1xyXG4gKiAgIH5zdG9yZS9hdXRvZmlsbEluZm8gLT4gNzlWTlAgID0+ICBzcmMvc3RvcmUvYXV0b2ZpbGxJbmZvLmpzXHJcbiAqICAgfnN0b3JlL3VybCAtPiBiNTNMMyAgPT4gIHNyYy9zdG9yZS91cmwuanNcclxuICogICB+dXRpbHMvZmllbGRMYWJlbCAtPiAxUm1HdyAgPT4gIHNyYy91dGlscy9maWVsZExhYmVsLmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJNeVdvcmtEYXlcIiwgKCkgPT4gTik7XHJcbnZhciBvID0gZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksXHJcbiAgaSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksXHJcbiAgYSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb25cIiksXHJcbiAgbCA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9ydWxlc1wiKSxcclxuICBzID0gZShcIn5jb250ZW50cy9tZXRob2RzL3RyYWNrXCIpLFxyXG4gIHUgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2F1dG9maWxsLWFuc3dlci1wYWlyLXRyYWNraW5nXCIpLFxyXG4gIGMgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyXCIpLFxyXG4gIGQgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2VkdWNhdGlvbi1pdGVtLXRyYWNlXCIpLFxyXG4gIGYgPSBlKFwifmNvbnRlbnRzL3NpdGVzL215d29ya2RheS9hbnN3ZXJcIiksXHJcbiAgcCA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L2VkdWNhdGlvbi1vcGVyYXRpb25cIiksXHJcbiAgbSA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L2VkdWNhdGlvbi1yZXNvbHZlLXNjaGVkdWxlclwiKSxcclxuICBoID0gZShcIn5jb250ZW50cy9zaXRlcy9teXdvcmtkYXkvb3BlcmF0aW9uc1wiKSxcclxuICBnID0gZShcIn5jb250ZW50cy9zaXRlcy9teXdvcmtkYXkvc2VjdGlvbi1yZXN1bHRzXCIpLFxyXG4gIGIgPSBlKFwifmNvbnRlbnRzL3NpdGVzL215d29ya2RheS9ydWxlc1wiKSxcclxuICB5ID0gZShcIn5jb250ZW50cy9zaXRlcy9ydW50aW1lLXZhbGlkYXRpb24tdHJhY2tpbmdcIiksXHJcbiAgdiA9IGUoXCJ+Y29yZS9kb21cIiksXHJcbiAgdyA9IGUoXCJ+Y29yZS9lbnVtc1wiKSxcclxuICBTID0gZShcIn5lbnVtcy9odHRwXCIpLFxyXG4gIEUgPSBlKFwifnN0b3JlL2F1dG9maWxsSW5mb1wiKSxcclxuICB4ID0gZShcIn5zdG9yZS91cmxcIiksXHJcbiAgQyA9IGUoXCJ+dXRpbHMvZmllbGRMYWJlbFwiKSxcclxuICBBID0gZShcIi4vZm9ybS1sb3NzXCIpO1xyXG5sZXQgayA9IFwibXl3b3JrZGF5XCIsXHJcbiAgVCA9IFtcIlNlY3VyaXR5IENvZGVcIiwgXCJDb3VudHJ5XCIsIFwiQ291bnRyeSAvIFRlcnJpdG9yeVwiLCBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLFxyXG4gICAgXCJFbXBsb3llZSBJRCAoaWYgYXBwbGljYWJsZSlcIiwgXCJXaGF0IGlzIHlvdXIgZGF0ZSBvZiBhdmFpbGFiaWxpdHk/XCJcclxuICBdO1xyXG5cclxuZnVuY3Rpb24gRihlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvdW50OiBlLmxlbmd0aCxcclxuICAgIGxhYmVsczogZS5tYXAoZSA9PiAoe1xyXG4gICAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICByZXF1aXJlZDogISFlLnJlcXVpcmVkXHJcbiAgICB9KSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEkoZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZWd1bGFyS2V5czogT2JqZWN0LmtleXMoZT8ucmVndWxhciA/PyB7fSksXHJcbiAgICBlZHVjYXRpb25Db3VudDogZT8uZWR1Y2F0aW9uPy5sZW5ndGggPz8gMCxcclxuICAgIHdvcmtFeHBlcmllbmNlQ291bnQ6IGU/LndvcmtFeHBlcmllbmNlPy5sZW5ndGggPz8gMCxcclxuICAgIHNraWxsc0NvdW50OiBlPy5za2lsbHM/Lmxlbmd0aCA/PyAwLFxyXG4gICAgaGFzUmVzdW1lOiAhIWU/LnJlc3VtZSxcclxuICAgIGZpbGxEYXRhTGlzdENvdW50OiBlPy5maWxsRGF0YUxpc3Q/Lmxlbmd0aCA/PyAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBqKGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaGFzUmVzdW1lSW5mbzogISFlLFxyXG4gICAgaWRQcmVzZW50OiAhIWU/LmlkLFxyXG4gICAgdGFpbG9ySWRQcmVzZW50OiAhIWU/LnRhaWxvcklkLFxyXG4gICAgdGFpbG9yUHJlc2VudDogISFlPy50YWlsb3IsXHJcbiAgICBkaWFnbm9zZUlkUHJlc2VudDogISFlPy5kaWFnbm9zZUlkLFxyXG4gICAgdXNlT3JpZ2luYWxSZXN1bWU6ICEhZT8udXNlT3JpZ2luYWxSZXN1bWUsXHJcbiAgICByZXN1bWVOYW1lUHJlc2VudDogISFlPy5yZXN1bWVOYW1lLFxyXG4gICAgdGVtcGxhdGU6IGU/LnRlbXBsYXRlID8/IG51bGxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEQoZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm5hbWUgOiB0eXBlb2YgZSxcclxuICAgIG1lc3NhZ2U6IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IFN0cmluZyhlKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUCgpIHtcclxuICByZXR1cm4gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbiA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBfKGUsIHQgPSB7fSkge1xyXG4gIGNvbnNvbGUuaW5mbyhgW015V29ya2RheV1bYXV0b2ZpbGwtZGVidWddICR7ZX0gJHtKU09OLnN0cmluZ2lmeSh0KX1gKVxyXG59XHJcblxyXG5mdW5jdGlvbiBMKC4uLmUpIHtcclxuICBmb3IgKGxldCB0IG9mIGUpIHtcclxuICAgIGxldCBlID0gKDAsIGYuZ2V0V29ya2RheUNvdW50cnlGaWxsVmFsdWUpKHQpO1xyXG4gICAgaWYgKGUpIHJldHVybiBlXHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFIoZSkge1xyXG4gIHJldHVybiBlLnJlcGxhY2UoL1xcKi9nLCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBPKGUsIHQpIHtcclxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHQpKSByZXR1cm4ge1xyXG4gICAgZm91bmQ6ICEwLFxyXG4gICAgdmFsdWU6IGVbdF1cclxuICB9O1xyXG4gIGxldCByID0gUih0KTtcclxuICBmb3IgKGxldCBbdCwgbl0gb2YgT2JqZWN0LmVudHJpZXMoZSkpXHJcbiAgICBpZiAoUih0KSA9PT0gcikgcmV0dXJuIHtcclxuICAgICAgZm91bmQ6ICEwLFxyXG4gICAgICB2YWx1ZTogblxyXG4gICAgfTtcclxuICByZXR1cm4ge1xyXG4gICAgZm91bmQ6ICExLFxyXG4gICAgdmFsdWU6IHZvaWQgMFxyXG4gIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBNKGUpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGF3YWl0ICgwLCBvLnNlbmRUb0JhY2tncm91bmQpKHtcclxuICAgICAgbmFtZTogXCJyZXNvbHZlQXV0b2ZpbGxPcGVyYXRpb25cIixcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIG9wZXJhdGlvbjogZSxcclxuICAgICAgICBzb3VyY2U6IFwibXl3b3JrZGF5XCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS53YXJuKFwiW015V29ya2RheV0gcmVzb2x2ZUF1dG9maWxsT3BlcmF0aW9uIGZhaWxlZDpcIiwgZSksIG51bGxcclxuICB9XHJcbn1cclxuY2xhc3MgTiBleHRlbmRzIGMuQmFzZUZpbGxlciB7XHJcbiAgZ2V0RmllbGRIYW5kbGVycygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFt3LkZJRUxEX1RZUEUuVEVYVF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIGguZmlsbE15V29ya2RheVRleHRGaWVsZCkoZS4kaW5wdXQsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW3cuRklFTERfVFlQRS5OVU1CRVJdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBoLmZpbGxNeVdvcmtkYXlUZXh0RmllbGQpKGUuJGlucHV0LCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt3LkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBoLmZpbGxNeVdvcmtkYXlDaGVja0JveGVzRmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW3cuRklFTERfVFlQRS5NVUxUSV9TRUxFQ1RdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBoLmZpbGxTZWFyY2hCb3hJbnB1dEZpZWxkKShlLiRpbnB1dCwgdCksXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbdy5GSUVMRF9UWVBFLlNFQVJDSF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIGguZmlsbFNlYXJjaEJveElucHV0RmllbGQpKGUuJGlucHV0LCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt3LkZJRUxEX1RZUEUuTElTVEJPWF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIGguZmlsbE15V29ya2RheUxpc3Rib3hSdWxlKShlLCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt3LkZJRUxEX1RZUEUuREFURV06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIGguZmlsbE15V29ya2RheURhdGVGaWVsZCkoZS4kaW5wdXQsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRTaXRlTmFtZSgpIHtcclxuICAgIHJldHVybiBrXHJcbiAgfVxyXG4gIGFzeW5jIGV4dHJhY3RGb3JtUnVsZXMoKSB7XHJcbiAgICByZXR1cm4gKDAsIGIuZ2V0UnVsZXMpKClcclxuICB9XHJcbiAgYXN5bmMgcnVuUHJlRmlsbEZvcm0oKSB7XHJcbiAgICB0aGlzLnN1Ym1pdFRyYWNraW5nQmluZGluZyA9ICgwLCBoLnVuYmluZE15V29ya2RheVN1Ym1pdFRyYWNraW5nKSh0aGlzXHJcbiAgICAgICAgLnN1Ym1pdFRyYWNraW5nQmluZGluZyksIHRoaXMucnVudGltZVZhbGlkYXRpb25SZXRyeVJlc3VsdHMgPSBbXSwgdGhpc1xyXG4gICAgICAuYXV0b2ZpbGxJbmZvU3RhdGUgPSBudWxsLCB0aGlzLmF1dG9maWxsQ291bnRyeSA9IHZvaWQgMCwgdGhpcy5jb3VudHJ5RmlsbGVkID0gITEsIHRoaXNcclxuICAgICAgLmVkdWNhdGlvblRyYWNlUnVuSWQgPSBudWxsLCB0aGlzLnRhc2tRdWV1ZS5hZGQoaC53YWl0UGFnZUNsZWFuKSwgYXdhaXQgdGhpcy50YXNrUXVldWVcclxuICAgICAgLnJ1bigpLCBhd2FpdCAoMCwgRS51c2VBdXRvZmlsbEluZm9TdG9yZSkuZ2V0U3RhdGUoKS5mZXRjaEF1dG9maWxsSW5mbygpLCB0aGlzXHJcbiAgICAgIC5hdXRvZmlsbEluZm9TdGF0ZSA9ICgwLCBFLnVzZUF1dG9maWxsSW5mb1N0b3JlKS5nZXRTdGF0ZSgpLCB0aGlzLmF1dG9maWxsQ291bnRyeSA9IHRoaXNcclxuICAgICAgLmF1dG9maWxsSW5mb1N0YXRlLmNvdW50cnk7XHJcbiAgICBsZXQgZSA9IEwodGhpcy5hdXRvZmlsbENvdW50cnksIHRoaXMuYXV0b2ZpbGxJbmZvU3RhdGUuYXV0b2ZpbGxJbmZvPy5sb2NhdGlvbj8uY291bnRyeSk7XHJcbiAgICBlICYmICh0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvdW50cnlGaWxsZWQgPSBhd2FpdCAoMCwgaC5maWxsQ291bnRyeSkoZSlcclxuICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSksIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0ICgwLCBoLnByZWNsaWNrQWRkQnV0dG9ucykoKVxyXG4gICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpXHJcbiAgfVxyXG4gIGFzeW5jIGdldEF1dG9maWxsU25hcHNob3QoKSB7XHJcbiAgICBsZXQgZSA9IHRoaXMuZW5zdXJlRWR1Y2F0aW9uVHJhY2VSdW5JZCgpO1xyXG4gICAgcmV0dXJuICgwLCBiLmdldEZvcm1TbmFwc2hvdCkoe1xyXG4gICAgICBtYXJrRWR1Y2F0aW9uUm93czogITAsXHJcbiAgICAgIGluY2x1ZGVFZHVjYXRpb25TbmFwc2hvdEluZGV4OiAhMCxcclxuICAgICAgaW5jbHVkZUVkdWNhdGlvblRyYWNlOiAhMCxcclxuICAgICAgZWR1Y2F0aW9uVHJhY2VSdW5JZDogZVxyXG4gICAgfSlcclxuICB9XHJcbiAgYXN5bmMgZ2V0U3VibWl0U25hcHNob3QoKSB7XHJcbiAgICByZXR1cm4gKDAsIGIuZ2V0Rm9ybVNuYXBzaG90KSh7XHJcbiAgICAgIGluY2x1ZGVFZHVjYXRpb25TbmFwc2hvdEluZGV4OiAhMCxcclxuICAgICAgaW5jbHVkZUVkdWNhdGlvblRyYWNlOiAhMCxcclxuICAgICAgZWR1Y2F0aW9uVHJhY2VSdW5JZDogdGhpcy5lbnN1cmVFZHVjYXRpb25UcmFjZVJ1bklkKClcclxuICAgIH0pXHJcbiAgfVxyXG4gIHN1Ym1pdEFwcGxpY2F0aW9uKCkge31cclxuICBlbnN1cmVFZHVjYXRpb25UcmFjZVJ1bklkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWR1Y2F0aW9uVHJhY2VSdW5JZCB8fCAodGhpcy5lZHVjYXRpb25UcmFjZVJ1bklkID0gKDAsIGRcclxuICAgICAgLmNyZWF0ZUVkdWNhdGlvblRyYWNlUnVuSWQpKCkpLCB0aGlzLmVkdWNhdGlvblRyYWNlUnVuSWRcclxuICB9XHJcbiAgYnVpbGRSdW50aW1lVmFsaWRhdGlvblRyYWNraW5nRGF0YShlLCB0KSB7XHJcbiAgICByZXR1cm4gKDAsIHAuYnVpbGRXb3JrZGF5RWR1Y2F0aW9uUnVudGltZVZhbGlkYXRpb25UcmFja2luZ0RhdGEpKHRoaXMuYW5zd2VyLmVkdWNhdGlvbiA/P1xyXG4gICAgW10sIEFycmF5LmlzQXJyYXkoZS5lZHVjYXRpb24pID8gZS5lZHVjYXRpb24gOiBbXSwgdCwgdGhpcy5ydW50aW1lVmFsaWRhdGlvblJldHJ5UmVzdWx0cylcclxuICB9XHJcbiAgaXNSdW50aW1lVmFsaWRhdGlvblJldHJ5Q2FuZGlkYXRlKGUpIHtcclxuICAgIHJldHVybiBcImRlZ3JlZVwiID09PSBlLmZpZWxkVHlwZSAmJiAoXCJtaXNtYXRjaGVkXCIgPT09IGUuc3RhdHVzIHx8IFwiZW1wdHlcIiA9PT0gZS5zdGF0dXMpICYmIGVcclxuICAgICAgLmF0dGVtcHRlZENhbmRpZGF0ZXMubGVuZ3RoID4gMFxyXG4gIH1cclxuICBmaW5kRWR1Y2F0aW9uVmFsaWRhdGlvblJ1bGUoZSwgdCkge1xyXG4gICAgbGV0IHIgPSBlW3QuaW5kZXhdLFxyXG4gICAgICBuID0gQXJyYXkuaXNBcnJheShyPy5jaGlsZHJlbikgPyByLmNoaWxkcmVuIDogW10sXHJcbiAgICAgIG8gPSBuZXcgU2V0KFwic2Nob29sXCIgPT09IHQuZmllbGRUeXBlID8gW1wic2Nob29sXCIsIFwic2Nob29sIG9yIHVuaXZlcnNpdHlcIl0gOiBcImRlZ3JlZVwiID09PSB0XHJcbiAgICAgICAgLmZpZWxkVHlwZSA/IFtcImRlZ3JlZVwiXSA6IFtcImZpZWxkIG9mIHN0dWR5XCIsIFwiZGlzY2lwbGluZVwiXSk7XHJcbiAgICByZXR1cm4gbi5maW5kKGUgPT4ge1xyXG4gICAgICBsZXQgdCA9IFN0cmluZyhlLmxhYmVsID8/IFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gby5oYXModClcclxuICAgIH0pID8/IG51bGxcclxuICB9XHJcbiAgYXN5bmMgcmVxdWVzdEZvcm1BbnN3ZXJzKGUsIHQsIHIgPSB7fSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IG4gPSB0aGlzLmF1dG9maWxsSW5mb1N0YXRlID8/ICgwLCBFLnVzZUF1dG9maWxsSW5mb1N0b3JlKS5nZXRTdGF0ZSgpLFxyXG4gICAgICAgIG8gPSB0aGlzLmF1dG9maWxsQ291bnRyeSA/PyBuLmNvdW50cnk7XHJcbiAgICAgIHRoaXMudG9rZW4gfHwgKHRoaXMudG9rZW4gPSBhd2FpdCAoMCwgaS5nZXRTaXRlVG9rZW4pKCkpLCAhMSAhPT0gci51cGRhdGVUaW1lVHJhY2UgJiYgKFxyXG4gICAgICAgIHRoaXMudGltZVRyYWNlLnJlcXVlc3RTdGFydFRpbWUgPSBEYXRlLm5vdygpKSwgXyhcInJlcXVlc3RGb3JtQW5zd2VyczpzdGFydFwiLCB7XHJcbiAgICAgICAgZnJvbUFnZW50OiB0LFxyXG4gICAgICAgIHJlc3VtZUlkOiB0aGlzLnJlc3VtZUluZm8/LmlkLFxyXG4gICAgICAgIHRhaWxvcklkOiB0aGlzLnJlc3VtZUluZm8/LnRhaWxvcklkLFxyXG4gICAgICAgIHRva2VuUHJlc2VudDogISF0aGlzLnRva2VuLFxyXG4gICAgICAgIGF1dG9maWxsQ291bnRyeTogbyxcclxuICAgICAgICBydWxlczogRihlKVxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGEgPSB0aGlzLmNhcHR1cmVGYWxjb25SZXNwb25zZVJ1bigpLFxyXG4gICAgICAgIHMgPSBhd2FpdCAoMCwgaS5nZXRFbGVtZW50UnVsZXMpKCgwLCBsLmZpbHRlclJ1bGVzQnlMYWJlbCkoZSwgVCksIGssIHRoaXMudG9rZW4sIHQsIHRoaXNcclxuICAgICAgICAgIC5yZXN1bWVJbmZvLmlkLCB0aGlzLnJlc3VtZUluZm8udGFpbG9ySWQpO1xyXG4gICAgICB0aGlzLnJlY29yZEZhbGNvblJlc3BvbnNlKHMsIGEpO1xyXG4gICAgICBsZXQgdSA9ICgwLCBmLmZvcm1hdEFuc3dlcikocywge1xyXG4gICAgICAgIGF1dG9maWxsSW5mbzogbi5hdXRvZmlsbEluZm8sXHJcbiAgICAgICAgY291bnRyeTogbyxcclxuICAgICAgICBydWxlczogZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuICExICE9PSByLnVwZGF0ZVRpbWVUcmFjZSAmJiAodGhpcy50aW1lVHJhY2UuZmlsbFN0YXJ0VGltZSA9IERhdGUubm93KCkpLCBfKFxyXG4gICAgICAgIFwicmVxdWVzdEZvcm1BbnN3ZXJzOnN1Y2Nlc3NcIiwge1xyXG4gICAgICAgICAgYW5zd2VyOiBJKHUpXHJcbiAgICAgICAgfSksIHVcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBpLkhUVFBFcnJvciB8fCBlIGluc3RhbmNlb2YgaS5SZXN1bWVNaXNzaW5nQ29kZUVycm9yKSByZXR1cm4gY29uc29sZVxyXG4gICAgICAgIC53YXJuKFwiW015V29ya2RheV1bYXV0b2ZpbGwtZGVidWddIHJlcXVlc3RGb3JtQW5zd2Vyczprbm93bi1lcnJvclwiLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlLm1lc3NhZ2VcclxuICAgICAgICB9KSwgKDAsIHMuc2VuZEh0dHBTdGF0dXNNZXNzYWdlKShlLm1lc3NhZ2UpLCBlLm1lc3NhZ2U7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbTXlXb3JrZGF5XVthdXRvZmlsbC1kZWJ1Z10gcmVxdWVzdEZvcm1BbnN3ZXJzOnVua25vd24tZXJyb3JcIiwgZSlcclxuICAgIH0oMCwgYS5jaGVja3BvaW50KSgpXHJcbiAgfVxyXG4gIGFzeW5jIHJ1bkNvbWJvUXVlc3Rpb25BdXRvZmlsbElmTmVlZGVkKGUsIHQpIHtcclxuICAgIGlmICghdGhpcy5oYXNDb21ib1F1ZXN0aW9ucykgcmV0dXJuIGU7XHJcbiAgICBhd2FpdCAoMCwgYy53YWl0Rm9yQ29tYm9RdWVzdGlvbnNUb1NldHRsZSkodGhpcy5jb21ib1F1ZXN0aW9uU2V0dGxlRGVsYXlNcyksIHRoaXNcclxuICAgICAgLm1hcmtFbXB0eUZpbGxlZEZpZWxkc0Zyb21TbmFwc2hvdChhd2FpdCB0aGlzLmdldEF1dG9maWxsU25hcHNob3QoKSk7XHJcbiAgICBsZXQgciA9IGF3YWl0ICgwLCBiLmdldFJ1bGVzKSgpLFxyXG4gICAgICBuID0gKDAsIGMuZ2V0TmV3Q29tYm9RdWVzdGlvblJ1bGVzKShlLCByKSxcclxuICAgICAgbyA9IHRoaXMuZ2V0TWlzc2VkQ29tYm9RdWVzdGlvblJldHJ5UnVsZXMoZSwgcik7XHJcbiAgICBpZiAoMCA9PT0gbi5sZW5ndGggJiYgMCA9PT0gby5sZW5ndGgpIHJldHVybiBlO1xyXG4gICAgZm9yIChsZXQgZSBvZiBuKSB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzKGUpO1xyXG4gICAgaWYgKG4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgZSA9IGF3YWl0IHRoaXMucmVxdWVzdEZvcm1BbnN3ZXJzKG4sIHQsIHtcclxuICAgICAgICB1cGRhdGVUaW1lVHJhY2U6ICExXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkgcmV0dXJuIGU7XHJcbiAgICAgIGUgJiYgKHRoaXMuYW5zd2VyID0gKDAsIGMubWVyZ2VDb21ib1F1ZXN0aW9uQW5zd2VyKSh0aGlzLmFuc3dlciwgZSwgbikpXHJcbiAgICB9XHJcbiAgICBsZXQgYSA9ICgwLCBpLmdldFJlZ3VsYXJPcGVyYXRpb25zKSgoMCwgYi5nZXRXb3JrZGF5UmVndWxhclJ1bGVzKShbLi4ubywgLi4ubl0pLCB0aGlzLmFuc3dlclxyXG4gICAgICAucmVndWxhciwgdGhpcy5vcGVyYXRpb25Db25maWcpO1xyXG4gICAgZm9yIChsZXQgZSBvZiBhKSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIHRoaXMudGFza1F1ZXVlLmFkZChoLmJsdXJQYWdlKSwgYXdhaXQgdGhpcy50YXNrUXVldWVcclxuICAgIC5ydW4oKSwgWy4uLmUsIC4uLm5dXHJcbiAgfVxyXG4gIGdldE1pc3NlZENvbWJvUXVlc3Rpb25SZXRyeVJ1bGVzKGUsIHQpIHtcclxuICAgIGxldCByID0gbmV3IFNldChlLm1hcChlID0+ICgwLCBDLm5vcm1hbGl6ZUZpZWxkTGFiZWwpKGU/LmxhYmVsKSkpLFxyXG4gICAgICBuID0gbmV3IFNldCh0aGlzLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1cy5taXNzaW5nRmllbGRzLm1hcChlID0+ICgwLCBDXHJcbiAgICAgICAgLm5vcm1hbGl6ZUZpZWxkTGFiZWwpKGUpKSksXHJcbiAgICAgIG8gPSB0aGlzLmFuc3dlcj8ucmVndWxhciAmJiBcIm9iamVjdFwiID09IHR5cGVvZiB0aGlzLmFuc3dlci5yZWd1bGFyICYmICFBcnJheS5pc0FycmF5KHRoaXNcclxuICAgICAgICAuYW5zd2VyLnJlZ3VsYXIpID8gdGhpcy5hbnN3ZXIucmVndWxhciA6IHt9LFxyXG4gICAgICBpID0gbmV3IFNldChPYmplY3QuZW50cmllcyhvKS5maWx0ZXIoKFssIGVdKSA9PiBudWxsICE9IGUgJiYgXCJcIiAhPT0gZSkubWFwKChbZV0pID0+ICgwLCBDXHJcbiAgICAgICAgLm5vcm1hbGl6ZUZpZWxkTGFiZWwpKGUpKSksXHJcbiAgICAgIGEgPSBbXSxcclxuICAgICAgbCA9IG5ldyBTZXQ7XHJcbiAgICBmb3IgKGxldCBlIG9mIHQpIHtcclxuICAgICAgbGV0IHQgPSAoMCwgQy5ub3JtYWxpemVGaWVsZExhYmVsKShlPy5sYWJlbCk7XHJcbiAgICAgICEoIXQgfHwgbC5oYXModCkpICYmIHIuaGFzKHQpICYmIG4uaGFzKHQpICYmIGkuaGFzKHQpICYmIChsLmFkZCh0KSwgYS5wdXNoKGUpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFcclxuICB9XHJcbiAgbWFya0VtcHR5RmlsbGVkRmllbGRzRnJvbVNuYXBzaG90KGUpIHtcclxuICAgIGxldCB0ID0gbmV3IFNldChbXCJcIiwgXCJzZWxlY3Qgb25lXCIsIFwiW11cIiwgXCIvXCIsIFwiLy9cIl0pLFxyXG4gICAgICByID0gZSA9PiB7XHJcbiAgICAgICAgaWYgKG51bGwgPT0gZSkgcmV0dXJuICEwO1xyXG4gICAgICAgIGxldCByID0gU3RyaW5nKGUpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiB0LmhhcyhyKVxyXG4gICAgICB9O1xyXG4gICAgZm9yIChsZXQgdCBvZiBbLi4udGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXMuZmlsbGVkRmllbGRzXSkge1xyXG4gICAgICBsZXQgbiA9IE8oZSwgdCk7XHJcbiAgICAgIGlmIChuLmZvdW5kKSB7XHJcbiAgICAgICAgcihuLnZhbHVlKSAmJiAoY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICBgW015V29ya2RheV0gZmllbGQgXCIke3R9XCIgbWFya2VkIGZpbGxlZCBidXQgYWN0dWFsIHZhbHVlIGlzIGVtcHR5OmAsIG4udmFsdWUpLFxyXG4gICAgICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3ModCkpO1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgbGV0IG8gPSBlLmVkdWNhdGlvbiB8fCBlLmVtcGxveW1lbnQ7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG8pKVxyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygbykge1xyXG4gICAgICAgICAgaWYgKCFlIHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIGUpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgbGV0IG4gPSBPKGUsIHQpO1xyXG4gICAgICAgICAgaWYgKG4uZm91bmQgJiYgcihuLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgYFtNeVdvcmtkYXldIGdyb3VwZWQgZmllbGQgXCIke3R9XCIgbWFya2VkIGZpbGxlZCBidXQgYWN0dWFsIHZhbHVlIGlzIGVtcHR5OmAsIG5cclxuICAgICAgICAgICAgICAudmFsdWUpLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyh0KTtcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN5bmNTZWN0aW9uUmVzdWx0c0Zyb21TbmFwc2hvdChlKSB7XHJcbiAgICBsZXQgdCA9IHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLnNlY3Rpb25SZXN1bHRzID8/IFtdO1xyXG4gICAgZm9yIChsZXQgciBvZiB0KSB7XHJcbiAgICAgIGxldCB0ID0gZVtyLnR5cGVdLFxyXG4gICAgICAgIG4gPSAoMCwgZy5zeW5jTXlXb3JrZGF5U2VjdGlvblJlc3VsdCkociwgdCk7XHJcbiAgICAgIG4gIT09IHIgJiYgKGNvbnNvbGUuaW5mbyhcIltNeVdvcmtkYXldIHN5bmNlZCBzZWN0aW9uIHByb2dyZXNzIGRldGFpbHMgZnJvbSBET01cIiwge1xyXG4gICAgICAgIHNlY3Rpb246IHIudHlwZSxcclxuICAgICAgICByb3dDb3VudDogbi5yb3dzLmxlbmd0aFxyXG4gICAgICB9KSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlU2VjdGlvblJlc3VsdChuKSlcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgcmV0cnlSdW50aW1lVmFsaWRhdGlvbkZhaWx1cmVzKHtcclxuICAgIGF1dG9maWxsU25hcHNob3Q6IGUsXHJcbiAgICBlZHVSdWxlczogdFxyXG4gIH0pIHtcclxuICAgIGxldCByID0gdGhpcy5idWlsZFJ1bnRpbWVWYWxpZGF0aW9uVHJhY2tpbmdEYXRhKGUsIHQpLFxyXG4gICAgICBuID0gKDAsIHAuZ2V0V29ya2RheUVkdWNhdGlvblJ1bnRpbWVWYWxpZGF0aW9uTG9nRW50cmllcykocikuZmlsdGVyKGUgPT4gdGhpc1xyXG4gICAgICAgIC5pc1J1bnRpbWVWYWxpZGF0aW9uUmV0cnlDYW5kaWRhdGUoZSkpO1xyXG4gICAgaWYgKDAgPT09IG4ubGVuZ3RoKSByZXR1cm4ge1xyXG4gICAgICBhdXRvZmlsbFNuYXBzaG90OiBlLFxyXG4gICAgICBydW50aW1lVmFsaWRhdGlvblRyYWNraW5nRGF0YTogclxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGUgb2YgKHRoaXMucnVudGltZVZhbGlkYXRpb25SZXRyeVJlc3VsdHMgPSBbXSwgbikpIHtcclxuICAgICAgbGV0IHIgPSB0aGlzLmZpbmRFZHVjYXRpb25WYWxpZGF0aW9uUnVsZSh0LCBlKTtcclxuICAgICAgaWYgKCFyKSBjb250aW51ZTtcclxuICAgICAgbGV0IG4gPSByLiRpbnB1dCA/PyBudWxsO1xyXG4gICAgICAoci50eXBlID09PSB3LkZJRUxEX1RZUEUuU0VBUkNIIHx8IHIudHlwZSA9PT0gdy5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVCkgJiYgYXdhaXQgKDAsIGhcclxuICAgICAgICAuY2xlYXJXb3JrZGF5U2VhcmNoU2VsZWN0aW9uKShuKTtcclxuICAgICAgbGV0IG8gPSAoMCwgcC5idWlsZFdvcmtkYXlFZHVjYXRpb25SdW50aW1lVmFsaWRhdGlvblJldHJ5UmVjb3JkKSh7XHJcbiAgICAgICAgcmVjb3JkOiB0aGlzLmFuc3dlci5lZHVjYXRpb24/LltlLmluZGV4XSA/PyB7fSxcclxuICAgICAgICBydWxlTGFiZWw6IHIubGFiZWwsXHJcbiAgICAgICAgYXR0ZW1wdGVkQ2FuZGlkYXRlczogZS5hdHRlbXB0ZWRDYW5kaWRhdGVzXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB0aGlzLm9wZXJhdGlvbkNvbmZpZ1tyLnR5cGVdPy4ociwgbywgITEpLCB0aGlzLnJ1bnRpbWVWYWxpZGF0aW9uUmV0cnlSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBlLmluZGV4LFxyXG4gICAgICAgIGZpZWxkVHlwZTogZS5maWVsZFR5cGUsXHJcbiAgICAgICAgaW5pdGlhbFN0YXR1czogZS5zdGF0dXMsXHJcbiAgICAgICAgaW5pdGlhbENvbW1pdHRlZFZhbHVlOiBlLmNvbW1pdHRlZFZhbHVlLFxyXG4gICAgICAgIHJldHJ5Q291bnQ6IDEsXHJcbiAgICAgICAgcmVzZXRBcHBsaWVkOiAhMVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGUgPSAoMCwgYi5nZXRGb3JtU25hcHNob3QpKHtcclxuICAgICAgbWFya0VkdWNhdGlvblJvd3M6ICEwLFxyXG4gICAgICBpbmNsdWRlRWR1Y2F0aW9uU25hcHNob3RJbmRleDogITAsXHJcbiAgICAgIGluY2x1ZGVFZHVjYXRpb25UcmFjZTogITAsXHJcbiAgICAgIGVkdWNhdGlvblRyYWNlUnVuSWQ6IHRoaXMuZW5zdXJlRWR1Y2F0aW9uVHJhY2VSdW5JZCgpXHJcbiAgICB9KSwgciA9IHRoaXMuYnVpbGRSdW50aW1lVmFsaWRhdGlvblRyYWNraW5nRGF0YShlLCB0KSwge1xyXG4gICAgICBhdXRvZmlsbFNuYXBzaG90OiBlLFxyXG4gICAgICBydW50aW1lVmFsaWRhdGlvblRyYWNraW5nRGF0YTogclxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyB1cGxvYWRSZXN1bWVPbmx5KCkge1xyXG4gICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIuc2V0RmllbGRzUmVxdWlyZWRTdGF0dXMoW3tcclxuICAgICAgbGFiZWw6IFwiUmVzdW1lL0NWXCIsXHJcbiAgICAgIHJlcXVpcmVkOiAhMFxyXG4gICAgfV0pO1xyXG4gICAgbGV0IGUgPSBudWxsO1xyXG4gICAgcmV0dXJuICh0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBlID0gYXdhaXQgKDAsIGgudXBsb2FkUmVzdW1lKSh0aGlzLnJlc3VtZUluZm8sIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpO1xyXG4gICAgICAgIFwibm90LWFwcGxpY2FibGVcIiA9PT0gZSAmJiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIlJlc3VtZS9DVlwiKVxyXG4gICAgICB9IGNhdGNoICh0KSB7XHJcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBhLkNhbmNlbGxlZEVycm9yKSB0aHJvdyB0O1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIlJlc3VtZS9DVlwiKSwgdCBpbnN0YW5jZW9mIGlcclxuICAgICAgICAgIC5SZXN1bWVNaXNzaW5nQ29kZUVycm9yIHx8IHQgaW5zdGFuY2VvZiBFcnJvciAmJiB0Lm1lc3NhZ2UgPT09IGlcclxuICAgICAgICAgIC5OT19SRVNVTUVfRk9VTkRfRVJST1IpIHtcclxuICAgICAgICAgIGUgPSB0IGluc3RhbmNlb2YgaS5SZXN1bWVNaXNzaW5nQ29kZUVycm9yID8gdC5tZXNzYWdlIDogUy5DVVNUT01fRVJST1JfQ09ERVNcclxuICAgICAgICAgICAgLlJFU1VNRV9NSVNTSU5HX0tFWSwgKDAsIHMuc2VuZEh0dHBTdGF0dXNNZXNzYWdlKShlKTtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiW015V29ya2RheV0gcmVzdW1lLW9ubHkgdXBsb2FkIGZhaWxlZDpcIiwgdClcclxuICAgICAgfVxyXG4gICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpLCBlKSA/IGUgOiAoKDAsIHMucG9zdFN0YXR1cykoXCJmaWxsaW5nXCIsIHRoaXNcclxuICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLCB0aGlzLnRpbWVUcmFjZSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgIC5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKSlcclxuICB9XHJcbiAgY2xlYXJQcm9ncmVzc0FmdGVyRm9ybVVuYXZhaWxhYmxlKGUsIHQpIHtcclxuICAgIGxldCByID0gdGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXM7XHJcbiAgICBjb25zb2xlLndhcm4oXCJbTXlXb3JrZGF5XVthdXRvZmlsbC1kZWJ1Z10gZm9ybS11bmF2YWlsYWJsZTpjbGVhci1wcm9ncmVzc1wiLCB7XHJcbiAgICAgIHN0YWdlOiBlLFxyXG4gICAgICBocmVmOiBQKCksXHJcbiAgICAgIGVycm9yOiB0IGluc3RhbmNlb2YgRXJyb3IgPyB0Lm1lc3NhZ2UgOiBTdHJpbmcodCksXHJcbiAgICAgIGZpZWxkUmVxdWlyZWRTdGF0dXM6IHIuZmllbGRSZXF1aXJlZFN0YXR1cy5tYXAoZSA9PiAoe1xyXG4gICAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICAgIHJlcXVpcmVkOiBlLnJlcXVpcmVkXHJcbiAgICAgIH0pKSxcclxuICAgICAgZmlsbGVkRmllbGRzOiByLmZpbGxlZEZpZWxkcyxcclxuICAgICAgbWlzc2luZ0ZpZWxkczogci5taXNzaW5nRmllbGRzLFxyXG4gICAgICBjdXJyZW50RmllbGQ6IHIuY3VycmVudEZpZWxkID8/IG51bGxcclxuICAgIH0pLCB0aGlzLnByb2dyZXNzVHJhY2tlci5jbGVhcigpO1xyXG4gICAgbGV0IG4gPSB0aGlzLnByb2dyZXNzVHJhY2tlci5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKTtcclxuICAgIHJldHVybiB3aW5kb3cudG9wPy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IHcuTUVTU0FHRV9FVkVOVFMuYXV0b0ZpbGxSZXN1bHRGcm9tSWZyYW1lLFxyXG4gICAgICBkYXRhOiBuXHJcbiAgICB9LCB7XHJcbiAgICAgIHRhcmdldE9yaWdpbjogXCIqXCJcclxuICAgIH0pLCBuXHJcbiAgfVxyXG4gIGFzeW5jIGRvRmlsbEZvcm0oZSA9ICExKSB7XHJcbiAgICBsZXQgdCwgcjtcclxuICAgIF8oXCJkb0ZpbGxGb3JtOnN0YXJ0XCIsIHtcclxuICAgICAgaHJlZjogUCgpLFxyXG4gICAgICBmcm9tQWdlbnQ6IGUsXHJcbiAgICAgIGRpc2FibGVVcGxvYWRSZXN1bWU6IHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZVxyXG4gICAgfSksIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUZpbGxGb3JtKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICB0ID0gYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKClcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKCgwLCBBLmlzV29ya2RheU5vRm9ybUZpZWxkc0Vycm9yKShlKSkgcmV0dXJuIHRoaXMuY2xlYXJQcm9ncmVzc0FmdGVyRm9ybVVuYXZhaWxhYmxlKFxyXG4gICAgICAgIFwiZXh0cmFjdC1mb3JtLXJ1bGVzXCIsIGUpO1xyXG4gICAgICB0aHJvdyBlXHJcbiAgICB9XHJcbiAgICBpZiAoXyhcImV4dHJhY3RGb3JtUnVsZXM6ZG9uZVwiLCB7XHJcbiAgICAgICAgcnVsZXM6IEYodClcclxuICAgICAgfSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnNldEZpZWxkc1JlcXVpcmVkU3RhdHVzKHQpLCAwID09PSB0Lmxlbmd0aCkgcmV0dXJuICF0aGlzXHJcbiAgICAgIC5kaXNhYmxlVXBsb2FkUmVzdW1lICYmICgwLCBoLmhhc1dvcmtkYXlSZXN1bWVVcGxvYWRJbnB1dCkoKSA/IChfKFxyXG4gICAgICAgIFwibm8tcnVsZXM6dXBsb2FkLXJlc3VtZS1vbmx5XCIpLCBhd2FpdCB0aGlzLnVwbG9hZFJlc3VtZU9ubHkoKSkgOiAoY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgXCJbTXlXb3JrZGF5XVthdXRvZmlsbC1kZWJ1Z10gbm8tcnVsZXM6bm8tcmVzdW1lLXVwbG9hZFwiKSwgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAuZ2VuZXJhdGVGaW5hbFByb2dyZXNzKCkpO1xyXG4gICAgdGhpcy50YXNrUXVldWUuYWRkKGguYmx1clBhZ2UpLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKTtcclxuICAgIGxldCBuID0gYXdhaXQgdGhpcy5yZXF1ZXN0Rm9ybUFuc3dlcnModCwgZSk7XHJcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgbikgcmV0dXJuIGNvbnNvbGUud2FybihcclxuICAgICAgXCJbTXlXb3JrZGF5XVthdXRvZmlsbC1kZWJ1Z10gZG9GaWxsRm9ybTphbnN3ZXItZXJyb3JcIiwge1xyXG4gICAgICAgIGFuc3dlclJlc3VsdDogblxyXG4gICAgICB9KSwgbjtcclxuICAgIGlmIChuICYmICh0aGlzLmFuc3dlciA9IG4pLCBfKFwiZG9GaWxsRm9ybTphbnN3ZXItcmVhZHlcIiwge1xyXG4gICAgICAgIGFuc3dlcjogSSh0aGlzLmFuc3dlcilcclxuICAgICAgfSksICF0aGlzLmNvdW50cnlGaWxsZWQpIHtcclxuICAgICAgbGV0IGUgPSBMKHRoaXMuYXV0b2ZpbGxDb3VudHJ5LCB0aGlzLmFuc3dlci5jb3VudHJ5LCB0aGlzLmF1dG9maWxsSW5mb1N0YXRlPy5hdXRvZmlsbEluZm9cclxuICAgICAgICA/LmxvY2F0aW9uPy5jb3VudHJ5KTtcclxuICAgICAgZSAmJiAodGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgICB0aGlzLmNvdW50cnlGaWxsZWQgPSBhd2FpdCAoMCwgaC5maWxsQ291bnRyeSkoZSlcclxuICAgICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpKVxyXG4gICAgfSgwLCBhLmNoZWNrcG9pbnQpKCk7XHJcbiAgICBsZXQgbyA9ICgwLCBiLmdldFN1Ym1pdEJ1dHRvblRleHQpKCk7XHJcbiAgICAoMCwgcy5iaW5kU3VibWl0QnV0dG9uKShvLCB0aGlzLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1cywgdGhpcy50aW1lVHJhY2UpLCB0aGlzLnRhc2tRdWV1ZVxyXG4gICAgICAuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCAoMCwgaC5leHBhbmRGb3JtKSh0aGlzLmFuc3dlcilcclxuICAgICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpO1xyXG4gICAgbGV0IGwgPSBhd2FpdCAoMCwgYi5nZXRFZHVSdWxlcykoKSxcclxuICAgICAgYyA9IGF3YWl0ICgwLCBiLmdldEV4cFJ1bGVzKSgpO1xyXG4gICAgKDAsIHYuc2V0U2VjdGlvblJlc3VsdEZvY3VzUnVsZXMpKFwiZW1wbG95bWVudFwiLCBjKSwgKDAsIHYuc2V0U2VjdGlvblJlc3VsdEZvY3VzUnVsZXMpKFxyXG4gICAgICBcImVkdWNhdGlvblwiLCBsKTtcclxuICAgIGxldCBkID0gKDAsIGIuZ2V0V29ya2RheUVkdWNhdGlvbkFwaUJhc2UpKCksXHJcbiAgICAgIGYgPSBjLmxlbmd0aCA+IDAgPyAoMCwgaS5nZXRFbXBsb3ltZW50T3BlcmF0aW9ucykoYywgdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2UsIHRoaXNcclxuICAgICAgICAub3BlcmF0aW9uQ29uZmlnLCB2b2lkIDAsIHtcclxuICAgICAgICAgIG9uQ29tcGxldGVkOiAoKSA9PiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVtcGxveW1lbnRcIiksXHJcbiAgICAgICAgICBvblNraXBwZWQ6ICgpID0+IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiRW1wbG95bWVudFwiKSxcclxuICAgICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHRcclxuICAgICAgICB9KSA6IFtdLFxyXG4gICAgICBnID0gdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uID8/IFtdLFxyXG4gICAgICB3ID0gISEoZCAmJiBsLmxlbmd0aCA+IDAgJiYgZy5sZW5ndGggPiAwKSxcclxuICAgICAgRSA9IHcgPyAoMCwgbS5jbG9uZVdvcmtkYXlFZHVjYXRpb25SZWNvcmRzKShnKSA6IGc7XHJcbiAgICBpZiAodyAmJiBfKFwiZWR1Y2F0aW9uLXJlc29sdmU6c3RhcnRcIiwge1xyXG4gICAgICAgIGVkdWNhdGlvblJlY29yZHM6IEUubGVuZ3RoLFxyXG4gICAgICAgIGVkdWNhdGlvblJ1bGVHcm91cHM6IGwubGVuZ3RoXHJcbiAgICAgIH0pLCBhd2FpdCAoMCwgbS5ydW5EZWZlcnJlZFdvcmtkYXlFZHVjYXRpb25SZXNvbHZlKSh7XHJcbiAgICAgICAgZmFsbGJhY2tWYWx1ZTogRSxcclxuICAgICAgICBzdGFydFJlc29sdmU6IGFzeW5jICgpID0+IHcgJiYgZCA/IGF3YWl0ICgwLCBwXHJcbiAgICAgICAgICAucmVzb2x2ZVdvcmtkYXlFZHVjYXRpb25SZWNvcmRzSW5QYXJhbGxlbCkoe1xyXG4gICAgICAgICAgYXBpQmFzZTogZCxcclxuICAgICAgICAgIHJ1bGVzOiBsLFxyXG4gICAgICAgICAgcmVjb3JkczogRSxcclxuICAgICAgICAgIHJlc29sdmVPcGVyYXRpb246IE1cclxuICAgICAgICB9KSA6IEUsXHJcbiAgICAgICAgZmlsbEluZGVwZW5kZW50RmllbGRzOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgZSA9ICgwLCBiLmdldFdvcmtkYXlSZWd1bGFyUnVsZXMpKHQpLFxyXG4gICAgICAgICAgICByID0gWy4uLigwLCBpLmdldFJlZ3VsYXJPcGVyYXRpb25zKShlLCB0aGlzLmFuc3dlci5yZWd1bGFyLCB0aGlzXHJcbiAgICAgICAgICAgICAgLm9wZXJhdGlvbkNvbmZpZyksIC4uLmZdO1xyXG4gICAgICAgICAgZm9yIChsZXQgdCBvZiAoXyhcImluZGVwZW5kZW50LW9wZXJhdGlvbnM6YnVpbHRcIiwge1xyXG4gICAgICAgICAgICAgIHJlZ3VsYXJSdWxlczogZS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgZXhwUnVsZXM6IGMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIG9wZXJhdGlvbnM6IHIubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIGVkdWNhdGlvblJlc29sdmVTdGFydGVkOiB3XHJcbiAgICAgICAgICAgIH0pLCByKSkgdGhpcy50YXNrUXVldWUuYWRkKHQpO1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIF8oXCJpbmRlcGVuZGVudC1vcGVyYXRpb25zOmZpbmlzaGVkXCIsIHtcclxuICAgICAgICAgICAgZWR1Y2F0aW9uUmVzb2x2ZVN0YXJ0ZWQ6IHdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja3BvaW50OiBhLmNoZWNrcG9pbnQsXHJcbiAgICAgICAgb25SZXNvbHZlU2V0dGxlZDogKHtcclxuICAgICAgICAgIGZhaWxlZDogZSxcclxuICAgICAgICAgIGVsYXBzZWRNczogdCxcclxuICAgICAgICAgIGVycm9yTmFtZTogclxyXG4gICAgICAgIH0pID0+IHtcclxuICAgICAgICAgIHcgJiYgXyhcImVkdWNhdGlvbi1yZXNvbHZlOnJlYWR5XCIsIHtcclxuICAgICAgICAgICAgZmFpbGVkOiBlLFxyXG4gICAgICAgICAgICBlbGFwc2VkTXM6IHQsXHJcbiAgICAgICAgICAgIGVycm9yTmFtZTogclxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbGxFZHVjYXRpb246IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uID0gZTtcclxuICAgICAgICAgIGxldCB0ID0gbC5sZW5ndGggPiAwID8gKDAsIGkuZ2V0RWR1Y2F0aW9uT3BlcmF0aW9ucykobCwgdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uLFxyXG4gICAgICAgICAgICB0aGlzLm9wZXJhdGlvbkNvbmZpZywgdm9pZCAwLCB7XHJcbiAgICAgICAgICAgICAgb25Db21wbGV0ZWQ6ICgpID0+IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpLFxyXG4gICAgICAgICAgICAgIG9uU2tpcHBlZDogKCkgPT4gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIiksXHJcbiAgICAgICAgICAgICAgb25TZWN0aW9uUmVzdWx0Q2hhbmdlZDogdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlU2VjdGlvblJlc3VsdFxyXG4gICAgICAgICAgICB9KSA6IFtdO1xyXG4gICAgICAgICAgZm9yIChsZXQgZSBvZiB0KSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgXyhcImVkdWNhdGlvbi1vcGVyYXRpb25zOmZpbmlzaGVkXCIsIHtcclxuICAgICAgICAgICAgZWR1UnVsZXM6IGwubGVuZ3RoLFxyXG4gICAgICAgICAgICBvcGVyYXRpb25zOiB0Lmxlbmd0aFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pLCB0aGlzLmNvdW50cnlGaWxsZWQpXHJcbiAgICAgIGZvciAobGV0IGUgb2YgKDAsIGIuZmluZFdvcmtkYXlDb3VudHJ5UHJvZ3Jlc3NMYWJlbHMpKHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzKSlcclxuICAgICAgICB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhlKTtcclxuICAgIHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSA/IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiUmVzdW1lL0NWXCIpIDogdGhpc1xyXG4gICAgICAudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgXyhcInJlc3VtZS11cGxvYWQ6c3RhcnRcIiwge1xyXG4gICAgICAgICAgcmVzdW1lSW5mbzogaih0aGlzLnJlc3VtZUluZm8pLFxyXG4gICAgICAgICAgaGFzVXBsb2FkSW5wdXQ6ICgwLCBoLmhhc1dvcmtkYXlSZXN1bWVVcGxvYWRJbnB1dCkoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBsZXQgZSA9IGF3YWl0ICgwLCBoLnVwbG9hZFJlc3VtZSkodGhpcy5yZXN1bWVJbmZvLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgaWYgKFwibm90LWFwcGxpY2FibGVcIiA9PT0gZSkge1xyXG4gICAgICAgICAgICBfKFwicmVzdW1lLXVwbG9hZDpub3QtYXBwbGljYWJsZVwiLCB7XHJcbiAgICAgICAgICAgICAgcmVhc29uOiBcIm5vLXVwbG9hZC1pbnB1dFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIF8oXCJyZXN1bWUtdXBsb2FkOnN1Y2Nlc3NcIiwge1xyXG4gICAgICAgICAgICByZXN1bWVJbmZvOiBqKHRoaXMucmVzdW1lSW5mbylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBhLkNhbmNlbGxlZEVycm9yKSB0aHJvdyBlO1xyXG4gICAgICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIiksIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgXCJbTXlXb3JrZGF5XVthdXRvZmlsbC1kZWJ1Z10gcmVzdW1lLXVwbG9hZDpmYWlsZWRcIiwge1xyXG4gICAgICAgICAgICAgIHJlc3VtZUluZm86IGoodGhpcy5yZXN1bWVJbmZvKSxcclxuICAgICAgICAgICAgICBoYXNVcGxvYWRJbnB1dDogKDAsIGguaGFzV29ya2RheVJlc3VtZVVwbG9hZElucHV0KSgpLFxyXG4gICAgICAgICAgICAgIGVycm9yOiBEKGUpXHJcbiAgICAgICAgICAgIH0pLCAoZSBpbnN0YW5jZW9mIGkuUmVzdW1lTWlzc2luZ0NvZGVFcnJvciB8fCBlIGluc3RhbmNlb2YgRXJyb3IgJiYgZVxyXG4gICAgICAgICAgICAubWVzc2FnZSA9PT0gaS5OT19SRVNVTUVfRk9VTkRfRVJST1IpICYmICgwLCBzLnNlbmRIdHRwU3RhdHVzTWVzc2FnZSkoXHJcbiAgICAgICAgICAgIGUgaW5zdGFuY2VvZiBpLlJlc3VtZU1pc3NpbmdDb2RlRXJyb3IgPyBlLm1lc3NhZ2UgOiBTLkNVU1RPTV9FUlJPUl9DT0RFU1xyXG4gICAgICAgICAgICAuUkVTVU1FX01JU1NJTkdfS0VZKVxyXG4gICAgICAgIH1cclxuICAgICAgfSksIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFuc3dlci5za2lsbHM/Lmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBlID0gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJza2lsbHNTZWN0aW9uXCJdIGlucHV0W3BsYWNlaG9sZGVyPVwiU2VhcmNoXCJdLCBbZGF0YS1hdXRvbWF0aW9uLWlkPVwiZm9ybUZpZWxkLXNraWxsc1wiXSBpbnB1dFtwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXSwgW2lkKj1cIlNraWxscy1zZWN0aW9uXCJdIGlucHV0W3BsYWNlaG9sZGVyPVwiU2VhcmNoXCJdJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICBpZiAoIWUpIHJldHVybjtcclxuICAgICAgICBsZXQgdCA9ICgwLCBiLmZpbmRXb3JrZGF5U2tpbGxzUHJvZ3Jlc3NMYWJlbCkodGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXMpO1xyXG4gICAgICAgIHQgJiYgKDAsIGEudXBkYXRlQ3VycmVudEZpZWxkKSh0KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgbGV0IGUgPSBhd2FpdCAoMCwgYS53aXRoU2tpcCkoYXN5bmMgKCkgPT4gKDAsIGguZmlsbFNraWxscykodGhpcy5hbnN3ZXIuc2tpbGxzKSk7XHJcbiAgICAgICAgICBlICYmIHQgJiYgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3ModClcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIGEuU2tpcHBlZEVycm9yKSB7XHJcbiAgICAgICAgICAgIHQgJiYgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3ModCk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgIH1cclxuICAgICAgfSksIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgKDAsIGguYmx1clBhZ2UpKClcclxuICAgICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgciA9IGF3YWl0IHRoaXMucnVuQ29tYm9RdWVzdGlvbkF1dG9maWxsSWZOZWVkZWQodCwgZSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKCgwLCBBLmlzV29ya2RheU5vRm9ybUZpZWxkc0Vycm9yKShlKSkgcmV0dXJuIHRoaXMuY2xlYXJQcm9ncmVzc0FmdGVyRm9ybVVuYXZhaWxhYmxlKFxyXG4gICAgICAgIFwiY29tYm8tcXVlc3Rpb24tcnVsZXNcIiwgZSk7XHJcbiAgICAgIHRocm93IGVcclxuICAgIH1cclxuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gcjtcclxuICAgIHQgPSByO1xyXG4gICAgbGV0IEMgPSAoMCwgYi5nZXRGb3JtU25hcHNob3QpKHtcclxuICAgICAgbWFya0VkdWNhdGlvblJvd3M6ICEwLFxyXG4gICAgICBpbmNsdWRlRWR1Y2F0aW9uU25hcHNob3RJbmRleDogITAsXHJcbiAgICAgIGluY2x1ZGVFZHVjYXRpb25UcmFjZTogITAsXHJcbiAgICAgIGVkdWNhdGlvblRyYWNlUnVuSWQ6IHRoaXMuZW5zdXJlRWR1Y2F0aW9uVHJhY2VSdW5JZCgpXHJcbiAgICB9KTtcclxuICAgIGZvciAobGV0IGUgb2YgKDAsIGIuZmluZEZpbGxlZE15RXhwZXJpZW5jZVByb2dyZXNzTGFiZWxzKSh0aGlzLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1cyxcclxuICAgICAgICBDKSkgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoZSk7XHJcbiAgICBsZXQgVCA9ICgwLCBwLmJ1aWxkV29ya2RheUVkdWNhdGlvblJlc29sdmVUcmFja2luZ0RhdGEpKHRoaXMuYW5zd2VyLmVkdWNhdGlvbiA/PyBbXSksXHJcbiAgICAgIFIgPSBhd2FpdCB0aGlzLnJldHJ5UnVudGltZVZhbGlkYXRpb25GYWlsdXJlcyh7XHJcbiAgICAgICAgYXV0b2ZpbGxTbmFwc2hvdDogQyxcclxuICAgICAgICBlZHVSdWxlczogbFxyXG4gICAgICB9KTtcclxuICAgIEMgPSBSLmF1dG9maWxsU25hcHNob3QsIHRoaXMuc3luY1NlY3Rpb25SZXN1bHRzRnJvbVNuYXBzaG90KEMpO1xyXG4gICAgbGV0IE8gPSBSLnJ1bnRpbWVWYWxpZGF0aW9uVHJhY2tpbmdEYXRhO1xyXG4gICAgKDAsIHkuc2VuZFJ1bnRpbWVWYWxpZGF0aW9uRGV2aWF0aW9uRXZlbnQpKHtcclxuICAgICAgZm9ybVVybDogKDAsIHgudXNlVXJsU3RvcmUpLmdldFN0YXRlKCkuY3VycmVudFRhYlVybCxcclxuICAgICAgc291cmNlOiBrLFxyXG4gICAgICB0cmFja2luZ0RhdGE6IE9cclxuICAgIH0pO1xyXG4gICAgbGV0IE4gPSAoMCwgdS5idWlsZEZhbGNvbkF1dG9maWxsQW5zd2VyUGFpckRhdGEpKHRoaXMuYW5zd2VyKSxcclxuICAgICAgJCA9IHtcclxuICAgICAgICAuLi5OID8ge1xyXG4gICAgICAgICAgZmFsY29uOiBOXHJcbiAgICAgICAgfSA6IHt9LFxyXG4gICAgICAgIC4uLlQsXHJcbiAgICAgICAgLi4uT1xyXG4gICAgICB9O1xyXG4gICAgKDAsIHAuZ2V0V29ya2RheUVkdWNhdGlvblJ1bnRpbWVWYWxpZGF0aW9uTG9nRW50cmllcykoTykuZm9yRWFjaChlID0+IHtcclxuICAgICAgbGV0IHQgPSBgW015V29ya2RheV0gJHtlLmZpZWxkTGFiZWx9IHZhbGlkYXRpb24gJHtlLnN0YXR1c31gLFxyXG4gICAgICAgIHIgPSB7XHJcbiAgICAgICAgICBpbmRleDogZS5pbmRleCxcclxuICAgICAgICAgIGZpZWxkVHlwZTogZS5maWVsZFR5cGUsXHJcbiAgICAgICAgICBjb21taXR0ZWRWYWx1ZTogZS5jb21taXR0ZWRWYWx1ZSxcclxuICAgICAgICAgIGF0dGVtcHRlZENhbmRpZGF0ZXM6IGUuYXR0ZW1wdGVkQ2FuZGlkYXRlc1xyXG4gICAgICAgIH07XHJcbiAgICAgIFwiaW5mb1wiID09PSBlLmxldmVsID8gY29uc29sZS5pbmZvKHQsIHIpIDogY29uc29sZS53YXJuKHQsIHIpXHJcbiAgICB9KTtcclxuICAgIGxldCBCID0gKDAsIHAuZ2V0VW5yZXNvbHZlZFdvcmtkYXlFZHVjYXRpb25SdW50aW1lVmFsaWRhdGlvbkxvZ0VudHJpZXMpKE8pO1xyXG4gICAgZm9yIChsZXQgZSBvZiAoQi5sZW5ndGggPiAwICYmIChjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBcIltNeVdvcmtkYXldIEVkdWNhdGlvbiBydW50aW1lIHZhbGlkYXRpb24gc3RpbGwgaGFzIHVucmVzb2x2ZWQgZmllbGRzOyBtYXJraW5nIEVkdWNhdGlvbiBhcyBtaXNzZWRcIixcclxuICAgICAgICAgIEIubWFwKGUgPT4gKHtcclxuICAgICAgICAgICAgaW5kZXg6IGUuaW5kZXgsXHJcbiAgICAgICAgICAgIGZpZWxkVHlwZTogZS5maWVsZFR5cGUsXHJcbiAgICAgICAgICAgIHN0YXR1czogZS5zdGF0dXMsXHJcbiAgICAgICAgICAgIGNvbW1pdHRlZFZhbHVlOiBlLmNvbW1pdHRlZFZhbHVlLFxyXG4gICAgICAgICAgICBhdHRlbXB0ZWRDYW5kaWRhdGVzOiBlLmF0dGVtcHRlZENhbmRpZGF0ZXNcclxuICAgICAgICAgIH0pKSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpKSwgdGhpc1xyXG4gICAgICAgIC5tYXJrRW1wdHlGaWxsZWRGaWVsZHNGcm9tU25hcHNob3QoQyksICgwLCBiXHJcbiAgICAgICAgICAuZmluZFVuZmlsbGVkV29ya2RheVNlbGZJZGVudGlmeUNoZWNrYm94UHJvZ3Jlc3NMYWJlbHMpKHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAuZmllbGRTdGF0dXMpKSkgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoZSk7XHJcbiAgICBmb3IgKGxldCBlIG9mICgwLCBiLmZpbmRGaWxsZWRXb3JrZGF5U2VsZklkZW50aWZ5Q2hlY2tib3hQcm9ncmVzc0xhYmVscykodGhpc1xyXG4gICAgICAgIC5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXMpKSB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhlKTtcclxuICAgIHJldHVybiB0aGlzLnN1Ym1pdFRyYWNraW5nQmluZGluZyA9ICgwLCBoLmJpbmRNeVdvcmtkYXlTdWJtaXRUcmFja2luZykoQywgdGhpc1xyXG4gICAgICAuc3VibWl0VHJhY2tpbmdCaW5kaW5nLCAkLCB0aGlzLmVkdWNhdGlvblRyYWNlUnVuSWQpLCAoMCwgcy5wb3N0U3RhdHVzKShcImZpbGxpbmdcIiwgdGhpc1xyXG4gICAgICAucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLCB0aGlzLnRpbWVUcmFjZSksIF8oXCJkb0ZpbGxGb3JtOmZpbmFsXCIsIHtcclxuICAgICAgZmllbGRTdGF0dXM6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLFxyXG4gICAgICB0aW1lVHJhY2U6IHRoaXMudGltZVRyYWNlXHJcbiAgICB9KSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuZ2VuZXJhdGVGaW5hbFByb2dyZXNzKClcclxuICB9XHJcbiAgY29uc3RydWN0b3IoLi4uZSkge1xyXG4gICAgc3VwZXIoLi4uZSksIHRoaXMuc3VibWl0VHJhY2tpbmdCaW5kaW5nID0gbnVsbCwgdGhpcy5ydW50aW1lVmFsaWRhdGlvblJldHJ5UmVzdWx0cyA9IFtdLFxyXG4gICAgICB0aGlzLmhhc0NvbWJvUXVlc3Rpb25zID0gITAsIHRoaXMuY29tYm9RdWVzdGlvblNldHRsZURlbGF5TXMgPSAzMDAsIHRoaXNcclxuICAgICAgLmF1dG9maWxsSW5mb1N0YXRlID0gbnVsbCwgdGhpcy5jb3VudHJ5RmlsbGVkID0gITEsIHRoaXMuZWR1Y2F0aW9uVHJhY2VSdW5JZCA9IG51bGxcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJteXdvcmtkYXkuNmZhZjY3MGIuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);