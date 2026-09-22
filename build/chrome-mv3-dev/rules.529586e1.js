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
})({"eUNiu":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\paycomonline-v3\\rules.js",
    "bundleId": "f649ee6a529586e1",
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
var j = z(require("fb2ea391c1903fb5"));
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

},{"fb2ea391c1903fb5":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"ker5x":[function(require,module,exports) {
/**
 * Parcel module id: i9lUC
 * Resolved path: src/contents/sites/paycomonline-v3/rules.js
 * Dependencies:
 *   ./phone-country-options -> aaI8K  =>  src/contents/sites/paycomonline-v3/phone-country-options.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRules", ()=>u), n.export(r, "getFormSnapshot", ()=>c), n.export(r, "isIgnoredPaycomCandidate", ()=>g), n.export(r, "isPaycomPhoneCountryButton", ()=>b), n.export(r, "getPaycomPhoneCountryCodeOptions", ()=>y), n.export(r, "getPaycomPhoneCountryCodeOptionsForTests", ()=>w), n.export(r, "getPaycomInternationalPhoneNumberLabel", ()=>P), n.export(r, "getPaycomInternationalPhoneNumberLabelForTests", ()=>_);
var o = e("~core/enums"), i = e("~core/xpath"), a = e("~utils/delay"), l = e("./phone-country-options");
let s = [
    {
        id: "personal-information-section",
        type: "normal"
    },
    {
        id: "education-section",
        type: "complex",
        label: "Education",
        wrapType: o.FIELD_TYPE.EDUCATION,
        entryHeaderPattern: /Institution #\d+/,
        addButtonText: "Add Institution"
    },
    {
        id: "employment-section",
        type: "complex",
        label: "Employment",
        wrapType: o.FIELD_TYPE.EMPLOYMENT,
        entryHeaderPattern: /Employer #\d+/,
        addButtonText: "Add Employer"
    },
    {
        id: "reference-section",
        type: "complex",
        label: "Professional References",
        wrapType: o.FIELD_TYPE.SECTION,
        entryHeaderPattern: /Professional Reference #\d+/,
        addButtonText: "Add Professional Reference"
    },
    {
        id: "questions-section",
        type: "normal"
    },
    {
        id: "voluntaryInformation-section",
        type: "normal"
    },
    {
        id: "taxCredit-section",
        type: "normal"
    },
    {
        id: "authorization-section",
        type: "normal"
    }
];
async function u() {
    let e1 = [], t = new Set;
    for (let r1 of s){
        let n = document.getElementById(r1.id);
        n && ("normal" === r1.type ? await p(n, e1, t) : (await d(n, r1), await m(n, r1, e1, t)));
    }
    return 0 === e1.length && await p(document.body, e1, t), e1;
}
async function c() {
    let e1 = await u(), t = {}, r1 = new Set([
        o.FIELD_TYPE.EDUCATION,
        o.FIELD_TYPE.EMPLOYMENT,
        o.FIELD_TYPE.SECTION
    ]), n = (e1)=>{
        if (e1.type === o.FIELD_TYPE.TEXT) return e1.$input?.value ?? null;
        if (e1.type === o.FIELD_TYPE.SELECT) {
            let t = e1.$input;
            if (!t) return null;
            let r1 = t.options?.[t.selectedIndex];
            return r1?.text || t.value || null;
        }
        if (e1.type === o.FIELD_TYPE.LISTBOX) return e1.$input?.textContent?.trim() || null;
        if (e1.type === o.FIELD_TYPE.CHECKBOX) {
            let t = e1.$checkboxs;
            return Array.isArray(t) ? t.filter((e1)=>e1.checked).map((e1)=>e1.value || "on") : e1.$input?.checked ?? null;
        }
        if (e1.type === o.FIELD_TYPE.RADIOGROUP) {
            let t = e1.$radioParent;
            if (!t) return null;
            let r1 = (0, i.getOrderedNodesSafe)(".//input[@type='radio']", t), n = r1.find((e1)=>e1.checked) ?? null;
            if (!n) return null;
            let o = n.value;
            if (n.id) {
                let e1 = (0, i.getFirstOrderedNodeSafe)(`//label[@for='${n.id}']`);
                e1 && (o = e1.textContent?.trim() || o);
            }
            return o;
        }
        if (e1.type === o.FIELD_TYPE.DATE) {
            let t = e1.$input;
            if (!t) return null;
            let r1 = (0, i.getOrderedNodesSafe)(".//input", t), n = r1.map((e1)=>e1.value || "").filter(Boolean);
            return n.length ? n.join("/") : null;
        }
        return null;
    }, a = (e1)=>null == e1 || "" === e1 || Array.isArray(e1) && 0 === e1.length, l = (e1, t)=>{
        for (let o of e1){
            let e1 = o.children;
            if (Array.isArray(e1) && e1.length > 0) {
                if (r1.has(o.type)) {
                    let r1 = [];
                    for (let t of e1){
                        let e1 = t.children, n = {};
                        Array.isArray(e1) && e1.length > 0 ? l(e1, n) : l([
                            t
                        ], n), Object.keys(n).length > 0 && r1.push(n);
                    }
                    r1.length > 0 && (t[o.label] = r1);
                } else l(e1, t);
                continue;
            }
            let i = o.label;
            if (!i) continue;
            let s = n(o);
            a(s) || (t[i] = s);
        }
    };
    return l(e1, t), t;
}
async function d(e1, t) {
    if (!t.entryHeaderPattern || !t.addButtonText) return;
    let r1 = (0, i.getOrderedNodesSafe)(".//h3[contains(text(), '#')]", e1).some((e1)=>t.entryHeaderPattern.test(e1.textContent || ""));
    if (r1) return;
    let n = f(e1, t.addButtonText);
    if (n) {
        n.click();
        for(let r1 = 0; r1 < 15; r1++){
            await (0, a.delay)(150);
            let r1 = (0, i.getOrderedNodesSafe)(".//h3[contains(text(), '#')]", e1).some((e1)=>t.entryHeaderPattern.test(e1.textContent || ""));
            if (r1) return;
        }
    }
}
function f(e1, t) {
    let r1 = (0, i.getOrderedNodesSafe)(".//button", e1);
    for (let e1 of r1){
        let r1 = e1.textContent?.trim() || "";
        if (r1.includes(t)) return e1;
    }
    return null;
}
async function p(e1, t, r1) {
    let n = (0, i.getOrderedNodesSafe)(`
        .//*[contains(@id, '-field')] |
        .//*[@data-floating-error-notice-type='date'] |
        .//input[not(@type='hidden')] |
        .//button[@data-testid='international-phone-button'] |
        .//select |
        .//textarea |
        .//*[@role='radiogroup'] |
        .//*[@role='listbox'] |
        .//iframe
        `, e1);
    for (let e1 of n)!r1.has(e1) && (M(e1, r1) || await h(e1, t, r1));
}
async function m(e1, t, r1, n) {
    let a = (0, i.getOrderedNodesSafe)(".//h3[contains(text(), '#')]", e1), l = a.filter((e1)=>!t.entryHeaderPattern || t.entryHeaderPattern.test(e1.textContent || ""));
    if (0 === l.length) {
        await p(e1, r1, n);
        return;
    }
    let s = [], u = t.wrapType ?? o.FIELD_TYPE.SECTION, c = t.label ?? (u === o.FIELD_TYPE.EDUCATION ? "Education" : "Employment");
    for(let t = 0; t < l.length; t++){
        let r1 = l[t], o = l[t + 1], a = [], d = (0, i.getOrderedNodesSafe)(`
        .//*[contains(@id, '-field')] |
        .//*[@data-floating-error-notice-type='date'] |
        .//input[not(@type='hidden')] |
        .//button[@data-testid='international-phone-button'] |
        .//select |
        .//textarea |
        .//*[@role='radiogroup'] |
        .//*[@role='listbox'] |
        .//iframe
      `, e1), f = d.filter((e1)=>{
            if (n.has(e1) || M(e1, n)) return !1;
            let t = r1.compareDocumentPosition(e1) & Node.DOCUMENT_POSITION_FOLLOWING, i = !o || e1.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING;
            return t && i;
        });
        for (let e1 of f)n.has(e1) || await h(e1, a, n);
        a.length > 0 && s.push({
            label: `${c} ${t + 1}`,
            required: !0,
            type: u,
            children: a,
            options: a.map((e1)=>({
                    label: e1.label,
                    type: e1.type,
                    options: "options" in e1 ? e1.options : void 0
                }))
        });
    }
    s.length > 0 && r1.push({
        label: c,
        required: !0,
        type: u,
        children: s,
        options: s.map((e1)=>({
                label: e1.label,
                type: e1.type,
                options: "options" in e1 ? e1.options : void 0
            }))
    });
}
async function h(e1, t, r1) {
    if (M(e1, r1) || g(e1)) return;
    let n = null;
    if (b(e1)) {
        n = v(e1), t.push(n), r1.add(e1);
        return;
    }
    if ("radiogroup" === e1.getAttribute("role") || e1.id && e1.id.includes("-field") && (0, i.getFirstOrderedNodeSafe)(".//fieldset", e1)) {
        if ("authorization-acknowledge-disclosure-field" === e1.id && ("BUTTON" === e1.tagName || "INPUT" === e1.tagName)) return;
        let o = "radiogroup" === e1.getAttribute("role") ? e1 : (0, i.getFirstOrderedNodeSafe)(".//*[@role='radiogroup']", e1);
        if (o && (n = await C(o, e1))) {
            t.push(n), r1.add(e1), r1.add(o), (0, i.getOrderedNodesSafe)(".//input", e1).forEach((e1)=>r1.add(e1));
            return;
        }
    }
    if ("INPUT" === e1.tagName && "radio" === e1.type) {
        let o = e1.closest("fieldset") || e1.closest('[id$="-field"]') || e1.parentElement?.parentElement;
        if (o && !r1.has(o)) {
            let e1 = (0, i.getFirstOrderedNodeSafe)(".//*[@role='radiogroup']", o) || o;
            if (n = await C(e1, o)) {
                t.push(n), r1.add(o), (0, i.getOrderedNodesSafe)(".//input", o).forEach((e1)=>r1.add(e1));
                return;
            }
        }
    }
    if ("date" === e1.getAttribute("data-floating-error-notice-type") && (n = await A(e1))) {
        t.push(n), r1.add(e1), (0, i.getOrderedNodesSafe)(".//input", e1).forEach((e1)=>r1.add(e1));
        return;
    }
    if ("listbox" === e1.getAttribute("role") && !e1.querySelector("ul")) {
        let o = (0, i.getFirstOrderedNodeSafe)(".//input | .//select", e1);
        if (o && !r1.has(o) && (n = await T(o, e1))) {
            t.push(n), r1.add(e1), r1.add(o);
            return;
        }
    }
    if ("IFRAME" === e1.tagName) {
        let n = await k(e1);
        if (n) {
            t.push(n), r1.add(e1);
            return;
        }
    }
    if ([
        "INPUT",
        "SELECT",
        "TEXTAREA",
        "BUTTON"
    ].includes(e1.tagName)) {
        if ("TEXTAREA" === e1.tagName && !e1.hasAttribute("aria-label") || "BUTTON" === e1.tagName && (!e1.id || !e1.id.startsWith("CheckboxOuterID-"))) return;
        let o = e1.getAttribute("type")?.toLowerCase();
        if ("radio" === o) return;
        (n = await T(e1)) && (t.push(n), r1.add(e1));
    }
}
function g(e1) {
    let t = e1.tagName.toUpperCase(), r1 = e1.getAttribute("id") || "", n = e1.getAttribute("name") || "";
    if ("TEXTAREA" === t) return S(r1, n);
    if ("IFRAME" !== t) return !1;
    let o = e1.getAttribute("src") || "", i = e1.getAttribute("title") || "";
    return !!(E(o, i) || x(e1));
}
function b(e1) {
    return "BUTTON" === e1.tagName && "international-phone-button" === e1.getAttribute("data-testid");
}
function y() {
    return [
        ...l.PAYCOM_PHONE_COUNTRY_CODE_OPTIONS
    ];
}
function v(e1) {
    let t = document.querySelector('input[data-testid*="internationalphonenumbers"], input[name*="phone" i][type="text"]'), r1 = e1.closest(".uiLibIntPhone") || e1.closest('[aria-label*="Phone" i]');
    return {
        label: "Phone Country Code",
        required: !!(t?.required || String(r1?.className || "").includes("required")),
        type: o.FIELD_TYPE.LISTBOX,
        $input: e1,
        options: y()
    };
}
let w = y;
function S(e1, t) {
    let r1 = `${e1} ${t}`.toLowerCase();
    return /(?:^|[-_])(?:g-)?recaptcha-response|(?:^|[-_])h-captcha-response|(?:^|[-_])captcha-response/.test(r1);
}
_c = S;
function E(e1, t) {
    let r1 = `${e1} ${t}`.toLowerCase();
    return /hcaptcha|recaptcha|captcha/.test(r1);
}
_c1 = E;
function x(e1) {
    let t = e1.getAttribute("style") || "", r1 = e1.getAttribute("aria-hidden");
    if ("true" === r1 || /display\s*:\s*none|visibility\s*:\s*hidden/i.test(t)) return !0;
    let n = e1.getBoundingClientRect?.();
    return !!(n && (0 === n.width || 0 === n.height));
}
async function C(e1, t) {
    let r1 = F(t) || F(e1), n = r1 ? R(r1.textContent || "") : D(t) || L(t) || "";
    if (!n || /^(yes|no)$/i.test(n)) return null;
    let a = (0, i.getOrderedNodesSafe)(".//input[@type='radio']", e1), l = a.map((e1)=>{
        let t = e1.closest("label")?.textContent?.trim() || e1.value;
        return t.replace(/^Yes|^No/, "").trim() || t;
    }).filter((e1)=>e1), s = l.length > 0 ? l : [
        "Yes",
        "No"
    ];
    return {
        label: n,
        required: O(t, r1),
        type: o.FIELD_TYPE.RADIOGROUP,
        $input: a[0],
        $radioParent: e1,
        options: s
    };
}
_c2 = C;
async function A(e1) {
    let t = null, r1 = (0, i.getFirstOrderedNodeSafe)(".//div[text()[contains(., 'Date')]]", e1), n = "";
    return (r1 && r1.textContent && (n = R(r1.textContent)), n || (n = D(e1)), !n && (t = I(e1)) && (n = R(t.textContent || "")), n || (n = L(e1)), n) ? {
        label: n,
        required: O(e1, t),
        type: o.FIELD_TYPE.DATE,
        $input: e1,
        $label: e1
    } : null;
}
_c3 = A;
async function k(e1) {
    let t = null, r1 = e1.parentElement;
    for(let e1 = 0; e1 < 5 && r1; e1++){
        let e1 = r1.querySelector('p[data-testid="typography"]'), n = r1.previousElementSibling, o = null;
        if (n && (o = "P" === n.tagName && "typography" === n.getAttribute("data-testid") ? n : n.querySelector('p[data-testid="typography"]')), e1 && j(e1)) {
            t = e1;
            break;
        }
        if (o && j(o)) {
            t = o;
            break;
        }
        r1 = r1.parentElement;
    }
    if (t || (t = I(e1)), !t) return null;
    let n = R(t.textContent || "");
    return n ? {
        label: n,
        required: O(e1, t),
        type: o.FIELD_TYPE.TEXT,
        $input: e1,
        $label: t
    } : null;
}
async function T(e1, t) {
    if ("authorization-acknowledge-disclosure-field" === e1.id && "INPUT" === e1.tagName) return null;
    let r1 = P(e1), n = r1 || D(e1), a = null, l = "checkbox" === e1.getAttribute("type");
    if (r1 && console.info("[Paycom-v3][rules] international phone label resolved", {
        inputId: e1.id,
        labelSource: "aria-label"
    }), e1.id && e1.id.startsWith("CheckboxOuterID-") && (l = !0), e1.id && (a = document.querySelector(`label[for="${e1.id}"]`)), a || (a = e1.closest("label")), a) {
        let t = a.getAttribute("for");
        t && t !== e1.id && (a = null);
    }
    if (t && !n) {
        let e1 = I(t);
        e1 && (n = R((a = e1).textContent || ""));
    }
    if (n && /^(text question|.*-field.*)$/i.test(n)) {
        let t = I(e1);
        t && (t.textContent?.trim().length || 0) > n.length && (n = R((a = t).textContent || ""));
    }
    if (!n && !l && (a = I(t || e1)) && (n = R(a.textContent || "")), n || l || (n = L(e1)), !n && !l) return null;
    let s = n;
    if (l && !s && (s = e1.closest("label")?.textContent?.trim() || i.getFirstOrderedNodeSafe("./following-sibling::div//p", e1.parentElement)?.textContent?.trim() || ""), !s && !l) return null;
    if ("SELECT" === e1.tagName) {
        let t = Array.from(e1.options).map((e1)=>e1.text).filter((e1)=>e1), r1 = t.map((e1)=>e1.toLowerCase());
        return r1.includes("hour") && r1.includes("year") && (r1.includes("week") || r1.includes("month")) && (s = "Pay period"), ("Institution Type" === s || r1.includes("university") && r1.includes("high school")) && (s = "Institution Type"), {
            label: s,
            required: O(e1, a),
            type: o.FIELD_TYPE.SELECT,
            $input: e1,
            options: t
        };
    }
    if (l) return {
        label: s,
        required: O(e1, a),
        type: o.FIELD_TYPE.CHECKBOX,
        $checkboxs: [
            e1
        ],
        options: []
    };
    if ("file" === e1.getAttribute("type")) return null;
    if ("BUTTON" === e1.tagName && e1.hasAttribute("aria-label")) {
        let t = R(e1.getAttribute("aria-label") || ""), r1 = R(s);
        if (!t.includes(r1) && !r1.includes(t)) return null;
    }
    return {
        label: s,
        required: O(e1, a),
        type: o.FIELD_TYPE.TEXT,
        $input: e1
    };
}
_c4 = T;
function F(e1) {
    let t = I(e1);
    if (t) return t;
    let r1 = (0, i.getFirstOrderedNodeSafe)(".//label | .//span[@label]", e1);
    return r1;
}
_c5 = F;
function I(e1) {
    let t = e1, r1 = 0, n = 20;
    for(; t && r1 < n;){
        let e1 = t.previousElementSibling;
        for(; e1;){
            let t = e1.querySelectorAll('p[data-testid="typography"]');
            for (let e1 of Array.from(t))if (j(e1)) return e1;
            if ("P" === e1.tagName && "typography" === e1.getAttribute("data-testid") && j(e1)) return e1;
            let r1 = e1.querySelectorAll("p");
            for (let e1 of Array.from(r1))if (j(e1, 5)) return e1;
            if ("P" === e1.tagName && j(e1, 5) || /^H[1-6]$/.test(e1.tagName) && j(e1) || "LABEL" === e1.tagName && j(e1)) return e1;
            if (("SPAN" === e1.tagName || "DIV" === e1.tagName) && j(e1, 2, 100)) {
                let t = e1.querySelector("input, select, textarea");
                if (!t) return e1;
            }
            e1 = e1.previousElementSibling;
        }
        t = t.parentElement, r1++;
    }
    return null;
}
_c6 = I;
function j(e1, t = 2, r1 = 1e3) {
    let n = e1.textContent?.trim();
    return !(!n || n.length <= t || r1 < 1e3 && n.length > r1 || /^\d+\.?$/.test(n));
}
function D(e1) {
    if (e1.id) {
        let t = document.querySelector(`label[for="${e1.id}"]`);
        if (t) return R(t.textContent || "");
    }
    let t = e1.closest("label");
    if (t) {
        let e1 = t.cloneNode(!0), r1 = e1.querySelectorAll("input, select, textarea");
        return r1.forEach((e1)=>e1.remove()), R(e1.textContent || "");
    }
    return "";
}
_c7 = D;
function P(e1) {
    if ("INPUT" !== e1.tagName || !e1.closest(".uiLibIntPhone")) return "";
    let t = e1.getAttribute("data-testid") || "";
    return t.endsWith("internationalphonenumbers") ? R(e1.getAttribute("aria-label") || "") || "Phone Number" : "";
}
_c8 = P;
let _ = P;
function L(e1) {
    let t = e1.closest("[label]");
    if (t) return R(t.getAttribute("label") || "");
    if (e1.getAttribute("aria-label")) {
        let t = e1.getAttribute("aria-label") || "";
        if (!/field|question/i.test(t) || t.length > 30) return R(t);
    }
    return "";
}
_c9 = L;
function R(e1) {
    return e1.replace(/\*/g, "").trim();
}
_c10 = R;
function O(e1, t) {
    if (e1.hasAttribute("required") || "true" === e1.getAttribute("aria-required")) return !0;
    if (t) {
        if (t.textContent?.includes("*")) return !0;
        let e1 = t.nextElementSibling;
        if (e1 && "SPAN" === e1.tagName && e1.textContent?.includes("*")) return !0;
    }
    let r1 = e1.closest("div");
    return !!(r1 && r1.textContent?.includes("*")) && r1.children.length < 5;
}
_c11 = O;
function M(e1, t) {
    let r1 = e1.parentElement;
    for(; r1;){
        if (t.has(r1)) return !0;
        r1 = r1.parentElement;
    }
    return !1;
}
_c12 = M;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
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

},{}]},["eUNiu","ker5x"], "ker5x", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUssRUFBRTtRQUFDLElBQUksSUFBRSxTQUFTLGVBQWUsR0FBRTtRQUFJLEtBQUksQ0FBQSxhQUFXLEdBQUUsT0FBSyxNQUFNLEVBQUUsR0FBRSxJQUFFLEtBQUksQ0FBQSxNQUFNLEVBQUUsR0FBRSxLQUFHLE1BQU0sRUFBRSxHQUFFLElBQUUsSUFBRSxFQUFDLENBQUM7SUFBRTtJQUFDLE9BQU8sTUFBSSxHQUFFLFVBQVEsTUFBTSxFQUFFLFNBQVMsTUFBSyxJQUFFLElBQUc7QUFBQztBQUFDLGVBQWU7SUFBSSxJQUFJLEtBQUUsTUFBTSxLQUFJLElBQUUsQ0FBQyxHQUFFLEtBQUUsSUFBSSxJQUFJO1FBQUMsRUFBRSxXQUFXO1FBQVUsRUFBRSxXQUFXO1FBQVcsRUFBRSxXQUFXO0tBQVEsR0FBRSxJQUFFLENBQUE7UUFBSSxJQUFHLEdBQUUsU0FBTyxFQUFFLFdBQVcsTUFBSyxPQUFPLEdBQUUsUUFBUSxTQUFPO1FBQUssSUFBRyxHQUFFLFNBQU8sRUFBRSxXQUFXLFFBQU87WUFBQyxJQUFJLElBQUUsR0FBRTtZQUFPLElBQUcsQ0FBQyxHQUFFLE9BQU87WUFBSyxJQUFJLEtBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxjQUFjO1lBQUMsT0FBTyxJQUFHLFFBQU0sRUFBRSxTQUFPO1FBQUk7UUFBQyxJQUFHLEdBQUUsU0FBTyxFQUFFLFdBQVcsU0FBUSxPQUFPLEdBQUUsUUFBUSxhQUFhLFVBQVE7UUFBSyxJQUFHLEdBQUUsU0FBTyxFQUFFLFdBQVcsVUFBUztZQUFDLElBQUksSUFBRSxHQUFFO1lBQVcsT0FBTyxNQUFNLFFBQVEsS0FBRyxFQUFFLE9BQU8sQ0FBQSxLQUFHLEdBQUUsU0FBUyxJQUFJLENBQUEsS0FBRyxHQUFFLFNBQU8sUUFBTSxHQUFFLFFBQVEsV0FBUztRQUFJO1FBQUMsSUFBRyxHQUFFLFNBQU8sRUFBRSxXQUFXLFlBQVc7WUFBQyxJQUFJLElBQUUsR0FBRTtZQUFhLElBQUcsQ0FBQyxHQUFFLE9BQU87WUFBSyxJQUFJLEtBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxtQkFBa0Is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RSxhQUFhLFlBQVU7SUFBSSxJQUFHLEdBQUUsYUFBYSxlQUFjO1FBQUMsSUFBSSxJQUFFLEdBQUUsYUFBYSxpQkFBZTtRQUFHLElBQUcsQ0FBQyxrQkFBa0IsS0FBSyxNQUFJLEVBQUUsU0FBTyxJQUFHLE9BQU8sRUFBRTtJQUFFO0lBQUMsT0FBTTtBQUFFO01BQWxOO0FBQW1OLFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTyxHQUFFLFFBQVEsT0FBTSxJQUFJO0FBQU07T0FBdEM7QUFBdUMsU0FBUyxFQUFFLEVBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxHQUFFLGFBQWEsZUFBYSxXQUFTLEdBQUUsYUFBYSxrQkFBaUIsT0FBTSxDQUFDO0lBQUUsSUFBRyxHQUFFO1FBQUMsSUFBRyxFQUFFLGFBQWEsU0FBUyxNQUFLLE9BQU0sQ0FBQztRQUFFLElBQUksS0FBRSxFQUFFO1FBQW1CLElBQUcsTUFBRyxXQUFTLEdBQUUsV0FBUyxHQUFFLGFBQWEsU0FBUyxNQUFLLE9BQU0sQ0FBQztJQUFDO0lBQUMsSUFBSSxLQUFFLEdBQUUsUUFBUTtJQUFPLE9BQU0sQ0FBQyxDQUFFLENBQUEsTUFBRyxHQUFFLGFBQWEsU0FBUyxJQUFHLEtBQUksR0FBRSxTQUFTLFNBQU87QUFBQztPQUF2VDtBQUF3VCxTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsR0FBRTtJQUFjLE1BQUssSUFBRztRQUFDLElBQUcsRUFBRSxJQUFJLEtBQUcsT0FBTSxDQUFDO1FBQUUsS0FBRSxHQUFFO0lBQWE7SUFBQyxPQUFNLENBQUM7QUFBQztPQUFyRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtZDIyYjYwNmEzYjRiNmE1Zi5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9wYXljb21vbmxpbmUtdjMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxccGF5Y29tb25saW5lLXYzXFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiZjY0OWVlNmE1Mjk1ODZlMVwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGk5bFVDXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9wYXljb21vbmxpbmUtdjMvcnVsZXMuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vcGhvbmUtY291bnRyeS1vcHRpb25zIC0+IGFhSThLICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3BheWNvbW9ubGluZS12My9waG9uZS1jb3VudHJ5LW9wdGlvbnMuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS94cGF0aCAtPiBhZ0U0dSAgPT4gIHNyYy9jb3JlL3hwYXRoLmpzXHJcbiAqICAgfnV0aWxzL2RlbGF5IC0+IGFtNjE0ICA9PiAgc3JjL3V0aWxzL2RlbGF5LmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiZ2V0UnVsZXNcIiwoKT0+dSksbi5leHBvcnQocixcImdldEZvcm1TbmFwc2hvdFwiLCgpPT5jKSxuLmV4cG9ydChyLFwiaXNJZ25vcmVkUGF5Y29tQ2FuZGlkYXRlXCIsKCk9PmcpLG4uZXhwb3J0KHIsXCJpc1BheWNvbVBob25lQ291bnRyeUJ1dHRvblwiLCgpPT5iKSxuLmV4cG9ydChyLFwiZ2V0UGF5Y29tUGhvbmVDb3VudHJ5Q29kZU9wdGlvbnNcIiwoKT0+eSksbi5leHBvcnQocixcImdldFBheWNvbVBob25lQ291bnRyeUNvZGVPcHRpb25zRm9yVGVzdHNcIiwoKT0+dyksbi5leHBvcnQocixcImdldFBheWNvbUludGVybmF0aW9uYWxQaG9uZU51bWJlckxhYmVsXCIsKCk9PlApLG4uZXhwb3J0KHIsXCJnZXRQYXljb21JbnRlcm5hdGlvbmFsUGhvbmVOdW1iZXJMYWJlbEZvclRlc3RzXCIsKCk9Pl8pO3ZhciBvPWUoXCJ+Y29yZS9lbnVtc1wiKSxpPWUoXCJ+Y29yZS94cGF0aFwiKSxhPWUoXCJ+dXRpbHMvZGVsYXlcIiksbD1lKFwiLi9waG9uZS1jb3VudHJ5LW9wdGlvbnNcIik7bGV0IHM9W3tpZDpcInBlcnNvbmFsLWluZm9ybWF0aW9uLXNlY3Rpb25cIix0eXBlOlwibm9ybWFsXCJ9LHtpZDpcImVkdWNhdGlvbi1zZWN0aW9uXCIsdHlwZTpcImNvbXBsZXhcIixsYWJlbDpcIkVkdWNhdGlvblwiLHdyYXBUeXBlOm8uRklFTERfVFlQRS5FRFVDQVRJT04sZW50cnlIZWFkZXJQYXR0ZXJuOi9JbnN0aXR1dGlvbiAjXFxkKy8sYWRkQnV0dG9uVGV4dDpcIkFkZCBJbnN0aXR1dGlvblwifSx7aWQ6XCJlbXBsb3ltZW50LXNlY3Rpb25cIix0eXBlOlwiY29tcGxleFwiLGxhYmVsOlwiRW1wbG95bWVudFwiLHdyYXBUeXBlOm8uRklFTERfVFlQRS5FTVBMT1lNRU5ULGVudHJ5SGVhZGVyUGF0dGVybjovRW1wbG95ZXIgI1xcZCsvLGFkZEJ1dHRvblRleHQ6XCJBZGQgRW1wbG95ZXJcIn0se2lkOlwicmVmZXJlbmNlLXNlY3Rpb25cIix0eXBlOlwiY29tcGxleFwiLGxhYmVsOlwiUHJvZmVzc2lvbmFsIFJlZmVyZW5jZXNcIix3cmFwVHlwZTpvLkZJRUxEX1RZUEUuU0VDVElPTixlbnRyeUhlYWRlclBhdHRlcm46L1Byb2Zlc3Npb25hbCBSZWZlcmVuY2UgI1xcZCsvLGFkZEJ1dHRvblRleHQ6XCJBZGQgUHJvZmVzc2lvbmFsIFJlZmVyZW5jZVwifSx7aWQ6XCJxdWVzdGlvbnMtc2VjdGlvblwiLHR5cGU6XCJub3JtYWxcIn0se2lkOlwidm9sdW50YXJ5SW5mb3JtYXRpb24tc2VjdGlvblwiLHR5cGU6XCJub3JtYWxcIn0se2lkOlwidGF4Q3JlZGl0LXNlY3Rpb25cIix0eXBlOlwibm9ybWFsXCJ9LHtpZDpcImF1dGhvcml6YXRpb24tc2VjdGlvblwiLHR5cGU6XCJub3JtYWxcIn1dO2FzeW5jIGZ1bmN0aW9uIHUoKXtsZXQgZT1bXSx0PW5ldyBTZXQ7Zm9yKGxldCByIG9mIHMpe2xldCBuPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHIuaWQpO24mJihcIm5vcm1hbFwiPT09ci50eXBlP2F3YWl0IHAobixlLHQpOihhd2FpdCBkKG4sciksYXdhaXQgbShuLHIsZSx0KSkpfXJldHVybiAwPT09ZS5sZW5ndGgmJmF3YWl0IHAoZG9jdW1lbnQuYm9keSxlLHQpLGV9YXN5bmMgZnVuY3Rpb24gYygpe2xldCBlPWF3YWl0IHUoKSx0PXt9LHI9bmV3IFNldChbby5GSUVMRF9UWVBFLkVEVUNBVElPTixvLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxvLkZJRUxEX1RZUEUuU0VDVElPTl0pLG49ZT0+e2lmKGUudHlwZT09PW8uRklFTERfVFlQRS5URVhUKXJldHVybiBlLiRpbnB1dD8udmFsdWU/P251bGw7aWYoZS50eXBlPT09by5GSUVMRF9UWVBFLlNFTEVDVCl7bGV0IHQ9ZS4kaW5wdXQ7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9dC5vcHRpb25zPy5bdC5zZWxlY3RlZEluZGV4XTtyZXR1cm4gcj8udGV4dHx8dC52YWx1ZXx8bnVsbH1pZihlLnR5cGU9PT1vLkZJRUxEX1RZUEUuTElTVEJPWClyZXR1cm4gZS4kaW5wdXQ/LnRleHRDb250ZW50Py50cmltKCl8fG51bGw7aWYoZS50eXBlPT09by5GSUVMRF9UWVBFLkNIRUNLQk9YKXtsZXQgdD1lLiRjaGVja2JveHM7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/dC5maWx0ZXIoZT0+ZS5jaGVja2VkKS5tYXAoZT0+ZS52YWx1ZXx8XCJvblwiKTplLiRpbnB1dD8uY2hlY2tlZD8/bnVsbH1pZihlLnR5cGU9PT1vLkZJRUxEX1RZUEUuUkFESU9HUk9VUCl7bGV0IHQ9ZS4kcmFkaW9QYXJlbnQ7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2lucHV0W0B0eXBlPSdyYWRpbyddXCIsdCksbj1yLmZpbmQoZT0+ZS5jaGVja2VkKT8/bnVsbDtpZighbilyZXR1cm4gbnVsbDtsZXQgbz1uLnZhbHVlO2lmKG4uaWQpe2xldCBlPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKGAvL2xhYmVsW0Bmb3I9JyR7bi5pZH0nXWApO2UmJihvPWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8byl9cmV0dXJuIG99aWYoZS50eXBlPT09by5GSUVMRF9UWVBFLkRBVEUpe2xldCB0PWUuJGlucHV0O2lmKCF0KXJldHVybiBudWxsO2xldCByPSgwLGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuLy9pbnB1dFwiLHQpLG49ci5tYXAoZT0+ZS52YWx1ZXx8XCJcIikuZmlsdGVyKEJvb2xlYW4pO3JldHVybiBuLmxlbmd0aD9uLmpvaW4oXCIvXCIpOm51bGx9cmV0dXJuIG51bGx9LGE9ZT0+bnVsbD09ZXx8XCJcIj09PWV8fEFycmF5LmlzQXJyYXkoZSkmJjA9PT1lLmxlbmd0aCxsPShlLHQpPT57Zm9yKGxldCBvIG9mIGUpe2xldCBlPW8uY2hpbGRyZW47aWYoQXJyYXkuaXNBcnJheShlKSYmZS5sZW5ndGg+MCl7aWYoci5oYXMoby50eXBlKSl7bGV0IHI9W107Zm9yKGxldCB0IG9mIGUpe2xldCBlPXQuY2hpbGRyZW4sbj17fTtBcnJheS5pc0FycmF5KGUpJiZlLmxlbmd0aD4wP2woZSxuKTpsKFt0XSxuKSxPYmplY3Qua2V5cyhuKS5sZW5ndGg+MCYmci5wdXNoKG4pfXIubGVuZ3RoPjAmJih0W28ubGFiZWxdPXIpfWVsc2UgbChlLHQpO2NvbnRpbnVlfWxldCBpPW8ubGFiZWw7aWYoIWkpY29udGludWU7bGV0IHM9bihvKTthKHMpfHwodFtpXT1zKX19O3JldHVybiBsKGUsdCksdH1hc3luYyBmdW5jdGlvbiBkKGUsdCl7aWYoIXQuZW50cnlIZWFkZXJQYXR0ZXJufHwhdC5hZGRCdXR0b25UZXh0KXJldHVybjtsZXQgcj0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vaDNbY29udGFpbnModGV4dCgpLCAnIycpXVwiLGUpLnNvbWUoZT0+dC5lbnRyeUhlYWRlclBhdHRlcm4udGVzdChlLnRleHRDb250ZW50fHxcIlwiKSk7aWYocilyZXR1cm47bGV0IG49ZihlLHQuYWRkQnV0dG9uVGV4dCk7aWYobil7bi5jbGljaygpO2ZvcihsZXQgcj0wO3I8MTU7cisrKXthd2FpdCAoMCxhLmRlbGF5KSgxNTApO2xldCByPSgwLGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuLy9oM1tjb250YWlucyh0ZXh0KCksICcjJyldXCIsZSkuc29tZShlPT50LmVudHJ5SGVhZGVyUGF0dGVybi50ZXN0KGUudGV4dENvbnRlbnR8fFwiXCIpKTtpZihyKXJldHVybn19fWZ1bmN0aW9uIGYoZSx0KXtsZXQgcj0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vYnV0dG9uXCIsZSk7Zm9yKGxldCBlIG9mIHIpe2xldCByPWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtpZihyLmluY2x1ZGVzKHQpKXJldHVybiBlfXJldHVybiBudWxsfWFzeW5jIGZ1bmN0aW9uIHAoZSx0LHIpe2xldCBuPSgwLGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoYFxyXG4gICAgICAgIC4vLypbY29udGFpbnMoQGlkLCAnLWZpZWxkJyldIHxcclxuICAgICAgICAuLy8qW0BkYXRhLWZsb2F0aW5nLWVycm9yLW5vdGljZS10eXBlPSdkYXRlJ10gfFxyXG4gICAgICAgIC4vL2lucHV0W25vdChAdHlwZT0naGlkZGVuJyldIHxcclxuICAgICAgICAuLy9idXR0b25bQGRhdGEtdGVzdGlkPSdpbnRlcm5hdGlvbmFsLXBob25lLWJ1dHRvbiddIHxcclxuICAgICAgICAuLy9zZWxlY3QgfFxyXG4gICAgICAgIC4vL3RleHRhcmVhIHxcclxuICAgICAgICAuLy8qW0Byb2xlPSdyYWRpb2dyb3VwJ10gfFxyXG4gICAgICAgIC4vLypbQHJvbGU9J2xpc3Rib3gnXSB8XHJcbiAgICAgICAgLi8vaWZyYW1lXHJcbiAgICAgICAgYCxlKTtmb3IobGV0IGUgb2Ygbikhci5oYXMoZSkmJihNKGUscil8fGF3YWl0IGgoZSx0LHIpKX1hc3luYyBmdW5jdGlvbiBtKGUsdCxyLG4pe2xldCBhPSgwLGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuLy9oM1tjb250YWlucyh0ZXh0KCksICcjJyldXCIsZSksbD1hLmZpbHRlcihlPT4hdC5lbnRyeUhlYWRlclBhdHRlcm58fHQuZW50cnlIZWFkZXJQYXR0ZXJuLnRlc3QoZS50ZXh0Q29udGVudHx8XCJcIikpO2lmKDA9PT1sLmxlbmd0aCl7YXdhaXQgcChlLHIsbik7cmV0dXJufWxldCBzPVtdLHU9dC53cmFwVHlwZT8/by5GSUVMRF9UWVBFLlNFQ1RJT04sYz10LmxhYmVsPz8odT09PW8uRklFTERfVFlQRS5FRFVDQVRJT04/XCJFZHVjYXRpb25cIjpcIkVtcGxveW1lbnRcIik7Zm9yKGxldCB0PTA7dDxsLmxlbmd0aDt0Kyspe2xldCByPWxbdF0sbz1sW3QrMV0sYT1bXSxkPSgwLGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoYFxyXG4gICAgICAgIC4vLypbY29udGFpbnMoQGlkLCAnLWZpZWxkJyldIHxcclxuICAgICAgICAuLy8qW0BkYXRhLWZsb2F0aW5nLWVycm9yLW5vdGljZS10eXBlPSdkYXRlJ10gfFxyXG4gICAgICAgIC4vL2lucHV0W25vdChAdHlwZT0naGlkZGVuJyldIHxcclxuICAgICAgICAuLy9idXR0b25bQGRhdGEtdGVzdGlkPSdpbnRlcm5hdGlvbmFsLXBob25lLWJ1dHRvbiddIHxcclxuICAgICAgICAuLy9zZWxlY3QgfFxyXG4gICAgICAgIC4vL3RleHRhcmVhIHxcclxuICAgICAgICAuLy8qW0Byb2xlPSdyYWRpb2dyb3VwJ10gfFxyXG4gICAgICAgIC4vLypbQHJvbGU9J2xpc3Rib3gnXSB8XHJcbiAgICAgICAgLi8vaWZyYW1lXHJcbiAgICAgIGAsZSksZj1kLmZpbHRlcihlPT57aWYobi5oYXMoZSl8fE0oZSxuKSlyZXR1cm4hMTtsZXQgdD1yLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpJk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HLGk9IW98fGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obykmTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkc7cmV0dXJuIHQmJml9KTtmb3IobGV0IGUgb2YgZiluLmhhcyhlKXx8YXdhaXQgaChlLGEsbik7YS5sZW5ndGg+MCYmcy5wdXNoKHtsYWJlbDpgJHtjfSAke3QrMX1gLHJlcXVpcmVkOiEwLHR5cGU6dSxjaGlsZHJlbjphLG9wdGlvbnM6YS5tYXAoZT0+KHtsYWJlbDplLmxhYmVsLHR5cGU6ZS50eXBlLG9wdGlvbnM6XCJvcHRpb25zXCJpbiBlP2Uub3B0aW9uczp2b2lkIDB9KSl9KX1zLmxlbmd0aD4wJiZyLnB1c2goe2xhYmVsOmMscmVxdWlyZWQ6ITAsdHlwZTp1LGNoaWxkcmVuOnMsb3B0aW9uczpzLm1hcChlPT4oe2xhYmVsOmUubGFiZWwsdHlwZTplLnR5cGUsb3B0aW9uczpcIm9wdGlvbnNcImluIGU/ZS5vcHRpb25zOnZvaWQgMH0pKX0pfWFzeW5jIGZ1bmN0aW9uIGgoZSx0LHIpe2lmKE0oZSxyKXx8ZyhlKSlyZXR1cm47bGV0IG49bnVsbDtpZihiKGUpKXtuPXYoZSksdC5wdXNoKG4pLHIuYWRkKGUpO3JldHVybn1pZihcInJhZGlvZ3JvdXBcIj09PWUuZ2V0QXR0cmlidXRlKFwicm9sZVwiKXx8ZS5pZCYmZS5pZC5pbmNsdWRlcyhcIi1maWVsZFwiKSYmKDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9maWVsZHNldFwiLGUpKXtpZihcImF1dGhvcml6YXRpb24tYWNrbm93bGVkZ2UtZGlzY2xvc3VyZS1maWVsZFwiPT09ZS5pZCYmKFwiQlVUVE9OXCI9PT1lLnRhZ05hbWV8fFwiSU5QVVRcIj09PWUudGFnTmFtZSkpcmV0dXJuO2xldCBvPVwicmFkaW9ncm91cFwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpP2U6KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy8qW0Byb2xlPSdyYWRpb2dyb3VwJ11cIixlKTtpZihvJiYobj1hd2FpdCBDKG8sZSkpKXt0LnB1c2gobiksci5hZGQoZSksci5hZGQobyksKDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2lucHV0XCIsZSkuZm9yRWFjaChlPT5yLmFkZChlKSk7cmV0dXJufX1pZihcIklOUFVUXCI9PT1lLnRhZ05hbWUmJlwicmFkaW9cIj09PWUudHlwZSl7bGV0IG89ZS5jbG9zZXN0KFwiZmllbGRzZXRcIil8fGUuY2xvc2VzdCgnW2lkJD1cIi1maWVsZFwiXScpfHxlLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7aWYobyYmIXIuaGFzKG8pKXtsZXQgZT0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vLypbQHJvbGU9J3JhZGlvZ3JvdXAnXVwiLG8pfHxvO2lmKG49YXdhaXQgQyhlLG8pKXt0LnB1c2gobiksci5hZGQobyksKDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2lucHV0XCIsbykuZm9yRWFjaChlPT5yLmFkZChlKSk7cmV0dXJufX19aWYoXCJkYXRlXCI9PT1lLmdldEF0dHJpYnV0ZShcImRhdGEtZmxvYXRpbmctZXJyb3Itbm90aWNlLXR5cGVcIikmJihuPWF3YWl0IEEoZSkpKXt0LnB1c2gobiksci5hZGQoZSksKDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2lucHV0XCIsZSkuZm9yRWFjaChlPT5yLmFkZChlKSk7cmV0dXJufWlmKFwibGlzdGJveFwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpJiYhZS5xdWVyeVNlbGVjdG9yKFwidWxcIikpe2xldCBvPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vaW5wdXQgfCAuLy9zZWxlY3RcIixlKTtpZihvJiYhci5oYXMobykmJihuPWF3YWl0IFQobyxlKSkpe3QucHVzaChuKSxyLmFkZChlKSxyLmFkZChvKTtyZXR1cm59fWlmKFwiSUZSQU1FXCI9PT1lLnRhZ05hbWUpe2xldCBuPWF3YWl0IGsoZSk7aWYobil7dC5wdXNoKG4pLHIuYWRkKGUpO3JldHVybn19aWYoW1wiSU5QVVRcIixcIlNFTEVDVFwiLFwiVEVYVEFSRUFcIixcIkJVVFRPTlwiXS5pbmNsdWRlcyhlLnRhZ05hbWUpKXtpZihcIlRFWFRBUkVBXCI9PT1lLnRhZ05hbWUmJiFlLmhhc0F0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiQlVUVE9OXCI9PT1lLnRhZ05hbWUmJighZS5pZHx8IWUuaWQuc3RhcnRzV2l0aChcIkNoZWNrYm94T3V0ZXJJRC1cIikpKXJldHVybjtsZXQgbz1lLmdldEF0dHJpYnV0ZShcInR5cGVcIik/LnRvTG93ZXJDYXNlKCk7aWYoXCJyYWRpb1wiPT09bylyZXR1cm47KG49YXdhaXQgVChlKSkmJih0LnB1c2gobiksci5hZGQoZSkpfX1mdW5jdGlvbiBnKGUpe2xldCB0PWUudGFnTmFtZS50b1VwcGVyQ2FzZSgpLHI9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKXx8XCJcIixuPWUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKXx8XCJcIjtpZihcIlRFWFRBUkVBXCI9PT10KXJldHVybiBTKHIsbik7aWYoXCJJRlJBTUVcIiE9PXQpcmV0dXJuITE7bGV0IG89ZS5nZXRBdHRyaWJ1dGUoXCJzcmNcIil8fFwiXCIsaT1lLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpfHxcIlwiO3JldHVybiEhKEUobyxpKXx8eChlKSl9ZnVuY3Rpb24gYihlKXtyZXR1cm5cIkJVVFRPTlwiPT09ZS50YWdOYW1lJiZcImludGVybmF0aW9uYWwtcGhvbmUtYnV0dG9uXCI9PT1lLmdldEF0dHJpYnV0ZShcImRhdGEtdGVzdGlkXCIpfWZ1bmN0aW9uIHkoKXtyZXR1cm5bLi4ubC5QQVlDT01fUEhPTkVfQ09VTlRSWV9DT0RFX09QVElPTlNdfWZ1bmN0aW9uIHYoZSl7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS10ZXN0aWQqPVwiaW50ZXJuYXRpb25hbHBob25lbnVtYmVyc1wiXSwgaW5wdXRbbmFtZSo9XCJwaG9uZVwiIGldW3R5cGU9XCJ0ZXh0XCJdJykscj1lLmNsb3Nlc3QoXCIudWlMaWJJbnRQaG9uZVwiKXx8ZS5jbG9zZXN0KCdbYXJpYS1sYWJlbCo9XCJQaG9uZVwiIGldJyk7cmV0dXJue2xhYmVsOlwiUGhvbmUgQ291bnRyeSBDb2RlXCIscmVxdWlyZWQ6ISEodD8ucmVxdWlyZWR8fFN0cmluZyhyPy5jbGFzc05hbWV8fFwiXCIpLmluY2x1ZGVzKFwicmVxdWlyZWRcIikpLHR5cGU6by5GSUVMRF9UWVBFLkxJU1RCT1gsJGlucHV0OmUsb3B0aW9uczp5KCl9fWxldCB3PXk7ZnVuY3Rpb24gUyhlLHQpe2xldCByPWAke2V9ICR7dH1gLnRvTG93ZXJDYXNlKCk7cmV0dXJuLyg/Ol58Wy1fXSkoPzpnLSk/cmVjYXB0Y2hhLXJlc3BvbnNlfCg/Ol58Wy1fXSloLWNhcHRjaGEtcmVzcG9uc2V8KD86XnxbLV9dKWNhcHRjaGEtcmVzcG9uc2UvLnRlc3Qocil9ZnVuY3Rpb24gRShlLHQpe2xldCByPWAke2V9ICR7dH1gLnRvTG93ZXJDYXNlKCk7cmV0dXJuL2hjYXB0Y2hhfHJlY2FwdGNoYXxjYXB0Y2hhLy50ZXN0KHIpfWZ1bmN0aW9uIHgoZSl7bGV0IHQ9ZS5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKXx8XCJcIixyPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIik7aWYoXCJ0cnVlXCI9PT1yfHwvZGlzcGxheVxccyo6XFxzKm5vbmV8dmlzaWJpbGl0eVxccyo6XFxzKmhpZGRlbi9pLnRlc3QodCkpcmV0dXJuITA7bGV0IG49ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO3JldHVybiEhKG4mJigwPT09bi53aWR0aHx8MD09PW4uaGVpZ2h0KSl9YXN5bmMgZnVuY3Rpb24gQyhlLHQpe2xldCByPUYodCl8fEYoZSksbj1yP1Ioci50ZXh0Q29udGVudHx8XCJcIik6RCh0KXx8TCh0KXx8XCJcIjtpZighbnx8L14oeWVzfG5vKSQvaS50ZXN0KG4pKXJldHVybiBudWxsO2xldCBhPSgwLGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuLy9pbnB1dFtAdHlwZT0ncmFkaW8nXVwiLGUpLGw9YS5tYXAoZT0+e2xldCB0PWUuY2xvc2VzdChcImxhYmVsXCIpPy50ZXh0Q29udGVudD8udHJpbSgpfHxlLnZhbHVlO3JldHVybiB0LnJlcGxhY2UoL15ZZXN8Xk5vLyxcIlwiKS50cmltKCl8fHR9KS5maWx0ZXIoZT0+ZSkscz1sLmxlbmd0aD4wP2w6W1wiWWVzXCIsXCJOb1wiXTtyZXR1cm57bGFiZWw6bixyZXF1aXJlZDpPKHQsciksdHlwZTpvLkZJRUxEX1RZUEUuUkFESU9HUk9VUCwkaW5wdXQ6YVswXSwkcmFkaW9QYXJlbnQ6ZSxvcHRpb25zOnN9fWFzeW5jIGZ1bmN0aW9uIEEoZSl7bGV0IHQ9bnVsbCxyPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vZGl2W3RleHQoKVtjb250YWlucyguLCAnRGF0ZScpXV1cIixlKSxuPVwiXCI7cmV0dXJuKHImJnIudGV4dENvbnRlbnQmJihuPVIoci50ZXh0Q29udGVudCkpLG58fChuPUQoZSkpLCFuJiYodD1JKGUpKSYmKG49Uih0LnRleHRDb250ZW50fHxcIlwiKSksbnx8KG49TChlKSksbik/e2xhYmVsOm4scmVxdWlyZWQ6TyhlLHQpLHR5cGU6by5GSUVMRF9UWVBFLkRBVEUsJGlucHV0OmUsJGxhYmVsOmV9Om51bGx9YXN5bmMgZnVuY3Rpb24gayhlKXtsZXQgdD1udWxsLHI9ZS5wYXJlbnRFbGVtZW50O2ZvcihsZXQgZT0wO2U8NSYmcjtlKyspe2xldCBlPXIucXVlcnlTZWxlY3RvcigncFtkYXRhLXRlc3RpZD1cInR5cG9ncmFwaHlcIl0nKSxuPXIucHJldmlvdXNFbGVtZW50U2libGluZyxvPW51bGw7aWYobiYmKG89XCJQXCI9PT1uLnRhZ05hbWUmJlwidHlwb2dyYXBoeVwiPT09bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlc3RpZFwiKT9uOm4ucXVlcnlTZWxlY3RvcigncFtkYXRhLXRlc3RpZD1cInR5cG9ncmFwaHlcIl0nKSksZSYmaihlKSl7dD1lO2JyZWFrfWlmKG8mJmoobykpe3Q9bzticmVha31yPXIucGFyZW50RWxlbWVudH1pZih0fHwodD1JKGUpKSwhdClyZXR1cm4gbnVsbDtsZXQgbj1SKHQudGV4dENvbnRlbnR8fFwiXCIpO3JldHVybiBuP3tsYWJlbDpuLHJlcXVpcmVkOk8oZSx0KSx0eXBlOm8uRklFTERfVFlQRS5URVhULCRpbnB1dDplLCRsYWJlbDp0fTpudWxsfWFzeW5jIGZ1bmN0aW9uIFQoZSx0KXtpZihcImF1dGhvcml6YXRpb24tYWNrbm93bGVkZ2UtZGlzY2xvc3VyZS1maWVsZFwiPT09ZS5pZCYmXCJJTlBVVFwiPT09ZS50YWdOYW1lKXJldHVybiBudWxsO2xldCByPVAoZSksbj1yfHxEKGUpLGE9bnVsbCxsPVwiY2hlY2tib3hcIj09PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtpZihyJiZjb25zb2xlLmluZm8oXCJbUGF5Y29tLXYzXVtydWxlc10gaW50ZXJuYXRpb25hbCBwaG9uZSBsYWJlbCByZXNvbHZlZFwiLHtpbnB1dElkOmUuaWQsbGFiZWxTb3VyY2U6XCJhcmlhLWxhYmVsXCJ9KSxlLmlkJiZlLmlkLnN0YXJ0c1dpdGgoXCJDaGVja2JveE91dGVySUQtXCIpJiYobD0hMCksZS5pZCYmKGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApKSxhfHwoYT1lLmNsb3Nlc3QoXCJsYWJlbFwiKSksYSl7bGV0IHQ9YS5nZXRBdHRyaWJ1dGUoXCJmb3JcIik7dCYmdCE9PWUuaWQmJihhPW51bGwpfWlmKHQmJiFuKXtsZXQgZT1JKHQpO2UmJihuPVIoKGE9ZSkudGV4dENvbnRlbnR8fFwiXCIpKX1pZihuJiYvXih0ZXh0IHF1ZXN0aW9ufC4qLWZpZWxkLiopJC9pLnRlc3Qobikpe2xldCB0PUkoZSk7dCYmKHQudGV4dENvbnRlbnQ/LnRyaW0oKS5sZW5ndGh8fDApPm4ubGVuZ3RoJiYobj1SKChhPXQpLnRleHRDb250ZW50fHxcIlwiKSl9aWYoIW4mJiFsJiYoYT1JKHR8fGUpKSYmKG49UihhLnRleHRDb250ZW50fHxcIlwiKSksbnx8bHx8KG49TChlKSksIW4mJiFsKXJldHVybiBudWxsO2xldCBzPW47aWYobCYmIXMmJihzPWUuY2xvc2VzdChcImxhYmVsXCIpPy50ZXh0Q29udGVudD8udHJpbSgpfHxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKFwiLi9mb2xsb3dpbmctc2libGluZzo6ZGl2Ly9wXCIsZS5wYXJlbnRFbGVtZW50KT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIiksIXMmJiFsKXJldHVybiBudWxsO2lmKFwiU0VMRUNUXCI9PT1lLnRhZ05hbWUpe2xldCB0PUFycmF5LmZyb20oZS5vcHRpb25zKS5tYXAoZT0+ZS50ZXh0KS5maWx0ZXIoZT0+ZSkscj10Lm1hcChlPT5lLnRvTG93ZXJDYXNlKCkpO3JldHVybiByLmluY2x1ZGVzKFwiaG91clwiKSYmci5pbmNsdWRlcyhcInllYXJcIikmJihyLmluY2x1ZGVzKFwid2Vla1wiKXx8ci5pbmNsdWRlcyhcIm1vbnRoXCIpKSYmKHM9XCJQYXkgcGVyaW9kXCIpLChcIkluc3RpdHV0aW9uIFR5cGVcIj09PXN8fHIuaW5jbHVkZXMoXCJ1bml2ZXJzaXR5XCIpJiZyLmluY2x1ZGVzKFwiaGlnaCBzY2hvb2xcIikpJiYocz1cIkluc3RpdHV0aW9uIFR5cGVcIikse2xhYmVsOnMscmVxdWlyZWQ6TyhlLGEpLHR5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCwkaW5wdXQ6ZSxvcHRpb25zOnR9fWlmKGwpcmV0dXJue2xhYmVsOnMscmVxdWlyZWQ6TyhlLGEpLHR5cGU6by5GSUVMRF9UWVBFLkNIRUNLQk9YLCRjaGVja2JveHM6W2VdLG9wdGlvbnM6W119O2lmKFwiZmlsZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXJldHVybiBudWxsO2lmKFwiQlVUVE9OXCI9PT1lLnRhZ05hbWUmJmUuaGFzQXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSl7bGV0IHQ9UihlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpLHI9UihzKTtpZighdC5pbmNsdWRlcyhyKSYmIXIuaW5jbHVkZXModCkpcmV0dXJuIG51bGx9cmV0dXJue2xhYmVsOnMscmVxdWlyZWQ6TyhlLGEpLHR5cGU6by5GSUVMRF9UWVBFLlRFWFQsJGlucHV0OmV9fWZ1bmN0aW9uIEYoZSl7bGV0IHQ9SShlKTtpZih0KXJldHVybiB0O2xldCByPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vbGFiZWwgfCAuLy9zcGFuW0BsYWJlbF1cIixlKTtyZXR1cm4gcn1mdW5jdGlvbiBJKGUpe2xldCB0PWUscj0wLG49MjA7Zm9yKDt0JiZyPG47KXtsZXQgZT10LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7Zm9yKDtlOyl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yQWxsKCdwW2RhdGEtdGVzdGlkPVwidHlwb2dyYXBoeVwiXScpO2ZvcihsZXQgZSBvZiBBcnJheS5mcm9tKHQpKWlmKGooZSkpcmV0dXJuIGU7aWYoXCJQXCI9PT1lLnRhZ05hbWUmJlwidHlwb2dyYXBoeVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlc3RpZFwiKSYmaihlKSlyZXR1cm4gZTtsZXQgcj1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCJwXCIpO2ZvcihsZXQgZSBvZiBBcnJheS5mcm9tKHIpKWlmKGooZSw1KSlyZXR1cm4gZTtpZihcIlBcIj09PWUudGFnTmFtZSYmaihlLDUpfHwvXkhbMS02XSQvLnRlc3QoZS50YWdOYW1lKSYmaihlKXx8XCJMQUJFTFwiPT09ZS50YWdOYW1lJiZqKGUpKXJldHVybiBlO2lmKChcIlNQQU5cIj09PWUudGFnTmFtZXx8XCJESVZcIj09PWUudGFnTmFtZSkmJmooZSwyLDEwMCkpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpO2lmKCF0KXJldHVybiBlfWU9ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nfXQ9dC5wYXJlbnRFbGVtZW50LHIrK31yZXR1cm4gbnVsbH1mdW5jdGlvbiBqKGUsdD0yLHI9MWUzKXtsZXQgbj1lLnRleHRDb250ZW50Py50cmltKCk7cmV0dXJuISghbnx8bi5sZW5ndGg8PXR8fHI8MWUzJiZuLmxlbmd0aD5yfHwvXlxcZCtcXC4/JC8udGVzdChuKSl9ZnVuY3Rpb24gRChlKXtpZihlLmlkKXtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2UuaWR9XCJdYCk7aWYodClyZXR1cm4gUih0LnRleHRDb250ZW50fHxcIlwiKX1sZXQgdD1lLmNsb3Nlc3QoXCJsYWJlbFwiKTtpZih0KXtsZXQgZT10LmNsb25lTm9kZSghMCkscj1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKTtyZXR1cm4gci5mb3JFYWNoKGU9PmUucmVtb3ZlKCkpLFIoZS50ZXh0Q29udGVudHx8XCJcIil9cmV0dXJuXCJcIn1mdW5jdGlvbiBQKGUpe2lmKFwiSU5QVVRcIiE9PWUudGFnTmFtZXx8IWUuY2xvc2VzdChcIi51aUxpYkludFBob25lXCIpKXJldHVyblwiXCI7bGV0IHQ9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlc3RpZFwiKXx8XCJcIjtyZXR1cm4gdC5lbmRzV2l0aChcImludGVybmF0aW9uYWxwaG9uZW51bWJlcnNcIik/UihlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpfHxcIlBob25lIE51bWJlclwiOlwiXCJ9bGV0IF89UDtmdW5jdGlvbiBMKGUpe2xldCB0PWUuY2xvc2VzdChcIltsYWJlbF1cIik7aWYodClyZXR1cm4gUih0LmdldEF0dHJpYnV0ZShcImxhYmVsXCIpfHxcIlwiKTtpZihlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikpe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIjtpZighL2ZpZWxkfHF1ZXN0aW9uL2kudGVzdCh0KXx8dC5sZW5ndGg+MzApcmV0dXJuIFIodCl9cmV0dXJuXCJcIn1mdW5jdGlvbiBSKGUpe3JldHVybiBlLnJlcGxhY2UoL1xcKi9nLFwiXCIpLnRyaW0oKX1mdW5jdGlvbiBPKGUsdCl7aWYoZS5oYXNBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKXx8XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIikpcmV0dXJuITA7aWYodCl7aWYodC50ZXh0Q29udGVudD8uaW5jbHVkZXMoXCIqXCIpKXJldHVybiEwO2xldCBlPXQubmV4dEVsZW1lbnRTaWJsaW5nO2lmKGUmJlwiU1BBTlwiPT09ZS50YWdOYW1lJiZlLnRleHRDb250ZW50Py5pbmNsdWRlcyhcIipcIikpcmV0dXJuITB9bGV0IHI9ZS5jbG9zZXN0KFwiZGl2XCIpO3JldHVybiEhKHImJnIudGV4dENvbnRlbnQ/LmluY2x1ZGVzKFwiKlwiKSkmJnIuY2hpbGRyZW4ubGVuZ3RoPDV9ZnVuY3Rpb24gTShlLHQpe2xldCByPWUucGFyZW50RWxlbWVudDtmb3IoO3I7KXtpZih0LmhhcyhyKSlyZXR1cm4hMDtyPXIucGFyZW50RWxlbWVudH1yZXR1cm4hMX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InJ1bGVzLjUyOTU4NmUxLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);