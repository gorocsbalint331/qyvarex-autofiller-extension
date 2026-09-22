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
})({"hrYeR":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\dayforce\\operations.js",
    "bundleId": "612a8423414c60f9",
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
var j = z(require("5b99b31b76e3277e"));
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

},{"5b99b31b76e3277e":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"6Qbsx":[function(require,module,exports) {
/**
 * Parcel module id: gnj33
 * Resolved path: src/contents/sites/dayforce/operations.js
 * Dependencies:
 *   ./answer -> irXfm  =>  src/contents/sites/dayforce/answer.js
 *   ./rules -> 5ymq4  =>  src/contents/sites/dayforce/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/crawler/utils/checkbox -> 5MP6u  =>  src/contents/crawler/utils/checkbox.js
 *   ~contents/crawler/utils/input -> iPIvT  =>  src/contents/crawler/utils/input.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getDayforceResumeUploadDom", ()=>A), n.export(r, "getDayforceCoverLetterUploadDom", ()=>k), n.export(r, "getDayforceCoverLetterStatus", ()=>F), n.export(r, "isResumeUploadComplete", ()=>I), n.export(r, "waitForDayforceCompositeSectionsToSettle", ()=>P), n.export(r, "uploadResume", ()=>_), n.export(r, "syncCoverLetterRequiredStatus", ()=>L), n.export(r, "uploadCoverLetter", ()=>N), n.export(r, "hasDayforceConfiguredSectionSummary", ()=>z), n.export(r, "isDayforceConfiguredSectionFilled", ()=>W), n.export(r, "fillDayforceTextField", ()=>G), n.export(r, "fillDayforceDateField", ()=>K), n.export(r, "fillDayforceDropdownField", ()=>Z), n.export(r, "fillDayforceSelectField", ()=>ee), n.export(r, "fillDayforceCheckboxField", ()=>et), n.export(r, "getDayforceCheckboxState", ()=>eo), n.export(r, "initializeDayforceCompositeSections", ()=>eg), n.export(r, "fillConfiguredSection", ()=>eb);
var o = e("dayjs"), i = n.interopDefault(o), a = e("~contents/crawler/utils/checkbox"), l = e("~contents/crawler/utils/input"), s = e("~contents/methods/answer"), u = e("~contents/methods/cancellation"), c = e("~contents/methods/dom"), d = e("~contents/methods/observer"), f = e("~core/enums"), p = e("~core/dom"), m = e("~core/phone-country-code"), h = e("./answer"), g = e("./rules");
let b = "Resume/CV", y = "Cover Letter", v = 800, w = 400, S = 5e3, E = 100;
function x(e1) {
    let t = "undefined" != typeof window ? window.setTimeout : globalThis.setTimeout;
    return new Promise((r1)=>t(r1, e1));
}
async function C(e1, t, r1) {
    let n = Date.now() + t;
    for(;;){
        if ((0, u.checkpoint)(), e1()) return !0;
        let t = n - Date.now();
        if (t <= 0) return !1;
        await (0, u.cancellableDelay)(Math.min(r1, t));
    }
}
_c = C;
function A() {
    let e1 = document.querySelector('[test-id="resume-upload-section"]');
    return e1 ? {
        section: e1,
        input: e1.querySelector('input[type="file"][name="personal.resume"], input[type="file"]#jobPostingApplication_files_resume'),
        uploadItem: e1.querySelector(".ant-upload-list-item"),
        uploadedName: e1.querySelector(".ant-upload-list-item-name")
    } : {
        section: null,
        input: null,
        uploadItem: null,
        uploadedName: null
    };
}
_c1 = A;
function k() {
    let e1 = document.querySelector('section[test-id="cover-letter-upload-section"]');
    return e1 ? {
        section: e1,
        input: e1.querySelector('input[type="file"]#jobPostingApplication_files_coverLetter'),
        uploadList: e1.querySelector(".ant-upload-list.ant-upload-list-text"),
        uploadedName: e1.querySelector(".ant-upload-list-item-name"),
        deleteButton: e1.querySelector('button[title="Remove file"]')
    } : {
        section: null,
        input: null,
        uploadList: null,
        uploadedName: null,
        deleteButton: null
    };
}
function T() {
    let { section: e1, input: t, uploadList: r1 } = k();
    if (!e1 || !t || !r1) return {
        status: "",
        source: "slot-missing"
    };
    let n = t.closest(".ant-form-item"), o = [
        e1,
        n,
        t
    ].filter((e1)=>!!e1), i = o.map((e1)=>e1.getAttribute("aria-required"));
    if (i.includes("true")) return {
        status: "required",
        source: "aria-required"
    };
    if (t.required || t.hasAttribute("required")) return {
        status: "required",
        source: "native-required"
    };
    let a = n?.querySelector("label") ?? e1.querySelector("label"), l = String(a?.className || "").toLowerCase(), s = a?.textContent || "";
    return l.includes("required") || /[*\uff0a]/.test(s) ? {
        status: "required",
        source: "label-required"
    } : i.includes("false") ? {
        status: "optional",
        source: "aria-required"
    } : {
        status: "optional",
        source: "slot-optional"
    };
}
_c2 = T;
function F() {
    return T().status;
}
_c3 = F;
function I() {
    let { uploadItem: e1, uploadedName: t } = A();
    return (0, h.isDayforceUploadComplete)(t?.textContent, e1?.className);
}
_c4 = I;
async function j() {
    return await C(I, 3e4, 500);
}
function D() {
    let e1 = (e1)=>"undefined" != typeof document && "function" == typeof document.querySelectorAll ? Array.from(document.querySelectorAll(e1.rowSelector)) : [], t = e1(g.DAYFORCE_SECTIONS.education), r1 = e1(g.DAYFORCE_SECTIONS.workExperience), n = (e1)=>[
            e1.id || "",
            e1.getAttribute?.("test-id") || "",
            ...Array.from(e1.querySelectorAll("input, textarea, select")).map((e1)=>[
                    e1.tagName,
                    e1.id || "",
                    e1.getAttribute?.("name") || "",
                    e1.getAttribute?.("type") || "",
                    "checked" in e1 ? String(e1.checked) : "",
                    e1.value || ""
                ].join(":"))
        ].join("|");
    return {
        educationRowCount: t.length,
        workExperienceRowCount: r1.length,
        signature: [
            ...t,
            ...r1
        ].map(n).join("\n")
    };
}
_c5 = D;
async function P({ minimumWaitMs: e1 = v, quietPeriodMs: t = w, maxWaitMs: r1 = S, pollIntervalMs: n = E } = {}) {
    let o = Date.now(), i = o, a = D(), l = !1;
    console.info("[Dayforce][ResumeParser] waiting for composite DOM settle", {
        educationRowCount: a.educationRowCount,
        workExperienceRowCount: a.workExperienceRowCount
    });
    let s = await C(()=>{
        let r1 = D();
        r1.signature !== a.signature && (a = r1, i = Date.now(), l = !0);
        let n = Date.now();
        return n - o >= Math.max(0, e1) && n - i >= Math.max(0, t);
    }, Math.max(0, r1), Math.max(1, n));
    return a = D(), console.info("[Dayforce][ResumeParser] composite DOM settle completed", {
        settled: s,
        sawChange: l,
        educationRowCount: a.educationRowCount,
        workExperienceRowCount: a.workExperienceRowCount
    }), s;
}
_c6 = P;
async function _(e1, t, r1, n, o) {
    let { section: i, input: a, uploadItem: l, uploadedName: c } = A();
    if (!i) return !0;
    if (r1({
        label: b,
        required: !0
    }), (0, h.isDayforceUploadComplete)(c?.textContent, l?.className)) return console.info("[Dayforce][Diagnostics] resume " + JSON.stringify({
        branch: "already-uploaded"
    })), n(b), !0;
    if (t || !a?.files) return console.info("[Dayforce][Diagnostics] resume " + JSON.stringify({
        branch: "blocked",
        disableUploadResume: t,
        hasFileInput: !!a?.files
    })), o(b), !1;
    try {
        let t = await (0, s.fetchPdfAsBlob)(e1);
        (0, u.checkpoint)(), a.files = t.files, a.dispatchEvent(new Event("change", {
            bubbles: !0,
            cancelable: !1
        }));
        let r1 = await j();
        if (!r1) return o(b), !1;
        let i = await P();
        return console.info("[Dayforce][Diagnostics] resume " + JSON.stringify({
            branch: "uploaded",
            settled: i
        })), n(b), !0;
    } catch (e1) {
        if (e1 instanceof u.CancelledError || e1 instanceof u.SkippedError) throw e1;
        return console.error("[Dayforce] Error uploading resume:", e1), o(b), !1;
    }
}
function L(e1) {
    let { status: t, source: r1 } = T();
    return !!t && (console.info("[Dayforce][CoverLetter] progress status resolved", {
        status: t,
        source: r1
    }), e1({
        label: y,
        required: "required" === t
    }), !0);
}
_c7 = L;
function R(e1, t, r1) {
    let { status: n, source: o } = T(), i = "required" === n;
    return console.info("[Dayforce][CoverLetter] missed status resolved", {
        required: i,
        source: o
    }), n && n !== e1 && t({
        label: y,
        required: i
    }), i && r1(y), i;
}
_c8 = R;
async function O() {
    return await C(()=>!k().uploadedName?.textContent?.trim(), 4e3, 200);
}
_c9 = O;
async function M(e1) {
    return await C(()=>{
        let t = k().uploadedName?.textContent?.trim();
        return !!t && t.includes(e1);
    }, 4e3, 200);
}
_c10 = M;
async function N(e1, t, r1, n) {
    let { status: o, source: i } = T();
    if (!o) return;
    let a = "required" === o, { uploadedName: l } = k();
    console.info("[Dayforce][CoverLetter] upload status resolved", {
        status: o,
        source: i
    }), t({
        label: y,
        required: a
    });
    let c = e1?.coverLetterId, d = e1?.coverLetterName;
    if (!c || !d) {
        l?.textContent?.trim() ? r1(y) : R(o, t, n);
        return;
    }
    try {
        let { deleteButton: i } = k();
        if (l?.textContent?.trim() && i) {
            i.click();
            let e1 = await O();
            if (!e1) {
                R(o, t, n);
                return;
            }
        }
        let a = k().input;
        if (!a?.files) {
            console.error("[Dayforce] Cover letter file input not found"), R(o, t, n);
            return;
        }
        let f = await (0, s.fetchCoverLetterPdfAsBlob)({
            ...e1,
            coverLetterId: c,
            coverLetterName: d
        });
        (0, u.checkpoint)(), a.files = f.files, a.dispatchEvent(new Event("change", {
            bubbles: !0,
            cancelable: !1
        }));
        let p = `${d}.pdf`, m = await M(p);
        if (!m) {
            console.error("[Dayforce] Cover letter upload not confirmed:", p), R(o, t, n);
            return;
        }
        r1(y);
    } catch (e1) {
        if (e1 instanceof u.CancelledError || e1 instanceof u.SkippedError) throw e1;
        console.error("[Dayforce] Error uploading cover letter:", e1), R(o, t, n);
    }
}
_c11 = N;
function $(e1) {
    return Array.isArray(e1) ? e1[0] : e1;
}
function B(e1, t = "") {
    return e1 ? (0, g.getCurrentDayforceElement)(e1, t) : null;
}
_c12 = B;
let q = {
    Education: 'form[test-id*="educationhistory-record" i]',
    Employment: 'form[test-id*="workhistory-record" i]'
}, U = 'button[aria-label="Delete Record"], button[title="Delete Record"], button[test-id*="delete-button" i]', H = {
    Education: '[test-id="educationHistory-cancel-button"]',
    Employment: '[test-id="workHistory-cancel-button"]'
};
function Y(e1) {
    let t = e1;
    return !t.hidden && t.getAttribute?.("aria-hidden") !== "true" && /[a-z0-9]/i.test(t.textContent?.replace(/\s+/g, " ").trim() || "");
}
_c13 = Y;
function z(e1) {
    return V(e1).length > 0;
}
function V(e1) {
    if ("undefined" == typeof document) return [];
    let t = q[e1.label];
    if (!t) return [];
    let r1 = document.querySelector(e1.containerSelector), n = new Set;
    if (r1) for (let e1 of Array.from(r1.querySelectorAll(t)))n.add(e1);
    if ("function" == typeof document.querySelectorAll) for (let e1 of Array.from(document.querySelectorAll(t)))n.add(e1);
    let o = H[e1.label];
    return Array.from(n).filter((e1)=>Y(e1) && (!o || "function" != typeof e1.querySelector || !e1.querySelector(o)));
}
_c14 = V;
function W(e1, t) {
    return !!t?.length || z(e1);
}
_c15 = W;
async function G(e1, t) {
    let r1 = $(t);
    if (!r1) return !1;
    let n = String(r1 ?? ""), o = String(e1.label || "").includes("Phone Number") ? 3 : 1;
    for(let t = 0; t < o; t += 1){
        let t = B(e1.$input, e1.label);
        if (!t) break;
        await (0, c.fillInputTextField)(t, n), await x(250);
        let r1 = B(e1.$input, e1.label);
        if ((r1?.value || "") === n) return !0;
    }
    return !1;
}
_c16 = G;
async function K(e1, t) {
    let r1 = $(t);
    if (!r1) return !1;
    let n = er(r1);
    if (!n) return !1;
    let o = B(e1.$input, e1.label);
    return !!o && (await (0, c.fillInputTextField)(o, n), !0);
}
_c17 = K;
function X(e1 = "") {
    return (0, h.isDayforcePhoneCountryCodeLabel)(e1) || e1.includes("Phone Number");
}
_c18 = X;
function J(e1) {
    return null != e1 && "" !== String(e1).trim();
}
_c19 = J;
function Q(e1, t) {
    let r1 = (Array.isArray(t) ? t : [
        t
    ]).filter(J);
    if (r1.length > 0) return r1;
    if (!X(e1.label)) return [];
    let n = e1.recordCountry;
    return J(n) ? [
        n
    ] : [];
}
_c20 = Q;
async function Z(e1, t, r1) {
    let n = B(e1.$input, e1.label);
    if (!n) return !1;
    let o = Q({
        ...e1,
        recordCountry: r1
    }, t);
    if ("Country" === e1.label) {
        let t = (0, g.getDayforceDropdownCurrentValue)(n, e1.label), r1 = o.some((r1)=>(0, h.isDayforceDropdownMatched)(t, String(r1), e1.label)), i = !!t && (0 === o.length || r1);
        if (console.debug("[Dayforce][Country] prefill-readback", {
            hasCommittedValue: !!t,
            answerCount: o.length,
            matchesAnswer: r1,
            committed: i
        }), i) return !0;
    }
    if (0 === o.length) return !1;
    n.dispatchEvent(new FocusEvent("focus", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), n.focus(), n.dispatchEvent(new Event("click", {
        bubbles: !0,
        cancelable: !0
    })), await x(200), (0, c.triggerEvents)(n, [
        "mousedown"
    ]), await x(200);
    let i = ()=>{
        let e1 = n.id ? document.querySelector(`#${CSS.escape(n.id)}_list`) : null;
        return Array.from(e1?.children || []);
    };
    await (0, d.waitForCondition)(()=>i().length > 0, {
        timeout: 1200,
        interval: 100,
        observeTarget: document.body
    });
    let a = i();
    if ((0, h.isDayforcePhoneCountryCodeLabel)(e1.label)) {
        let t = null;
        for (let [r1, n] of o.entries())if (t = (0, m.findPhoneCountryOptionElement)(n, a, {
            debugLabel: r1 === o.length - 1 ? e1.label : void 0
        })) break;
        return t && ((0, c.triggerEvents)(t, [
            "click"
        ]), await x(200)), n.blur(), !!t;
    }
    for (let t of a){
        let r1 = (0, h.normalizeDayforceDropdownOptionText)(t.textContent);
        if (e1.label.includes("Phone Number")) {
            let e1 = r1.split("[");
            r1 = e1[e1.length - 1].trim();
        }
        if (o.some((t)=>(0, h.isDayforceDropdownMatched)(r1, String(t), e1.label))) {
            if ((0, c.triggerEvents)(t, [
                "click"
            ]), await x(200), n.blur(), "Country" === e1.label) {
                let t = (0, g.getDayforceDropdownCurrentValue)(n, e1.label), r1 = o.some((r1)=>(0, h.isDayforceDropdownMatched)(t, String(r1), e1.label));
                return console.debug("[Dayforce][Country] selection-readback", {
                    optionCount: a.length,
                    committed: r1
                }), r1;
            }
            return !0;
        }
    }
    return n.blur(), !1;
}
_c21 = Z;
async function ee(e1, t) {
    let r1 = e1.$input, n = $(t);
    if (!r1 || !n) return !1;
    let o = String(n).trim().toLowerCase(), i = Array.from(r1.options).find((e1)=>{
        let t = e1.textContent?.trim().toLowerCase();
        return t === o || e1.value.trim().toLowerCase() === o;
    });
    return !!i && (r1.value = i.value, r1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), r1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), r1.value === i.value);
}
async function et(e1, t) {
    let r1 = (Array.isArray(t) ? t : [
        t
    ]).map((e1)=>String(e1 ?? "").toLowerCase().trim());
    if (0 === r1.length) return !1;
    let n = !1;
    for (let o of e1.$checkboxs){
        let i = o, l = "agreeCheckbox" === i.id ? document.querySelector(`#${i.id}Label`) : i.closest("label[class*='ant-']"), s = l?.innerText?.toLowerCase().trim() || "";
        if (!s && 1 === e1.$checkboxs.length) {
            let e1 = eo(t);
            if (null == e1) return !1;
            return await ei(i, e1), !0;
        }
        let u = r1.includes(s) || "true" === r1[0] && "yes" === s || "false" === r1[0] && "no" === s || "agreeCheckbox" === i.id && "true" === r1[0];
        u && (await (0, a.fillCheckbox)(i, !0), n = !0);
    }
    return n;
}
function er(e1) {
    if (!e1) return "";
    let t = 2 === String(e1).split("-").length ? `${e1}-01` : e1, r1 = (0, i.default)(t);
    return r1.isValid() ? r1.format("YYYY-MM-DD") : "";
}
function en(e1, t) {
    let r1 = t[e1.key] ?? t[e1.alternateKey || ""];
    return (e1.type === f.FIELD_TYPE.DATE || "Start" === e1.key || "End" === e1.key || "Start" === e1.alternateKey || "End" === e1.alternateKey) && (r1 = er(r1)), e1.format ? e1.format(r1, t) : r1;
}
function eo(e1) {
    let t = $(e1);
    if (null == t || "" === t) return null;
    if ("boolean" == typeof t) return t;
    let r1 = String(t).trim().toLowerCase();
    return r1 ? !![
        "true",
        "yes",
        "1",
        "current",
        "present"
    ].includes(r1) || ![
        "false",
        "no",
        "0",
        "not current"
    ].includes(r1) && null : null;
}
async function ei(e1, t) {
    if (e1.checked !== t) {
        if (t) {
            await (0, a.fillCheckbox)(e1, !0);
            return;
        }
        e1.focus(), e1.dispatchEvent(new Event("focus", {
            bubbles: !0,
            cancelable: !1
        })), e1.click(), e1.dispatchEvent(new Event("change", {
            bubbles: !0,
            cancelable: !1
        })), e1.blur(), e1.dispatchEvent(new Event("blur", {
            bubbles: !0,
            cancelable: !1
        }));
    }
}
async function ea(e1, t, r1) {
    let n = r1.querySelector(e1.selector);
    if (!n) return;
    let o = en(e1, t);
    if (e1.isCheckbox) {
        let e1 = eo(o);
        await ei(n, e1 ?? !1);
        return;
    }
    if (!o) {
        if (e1.type === f.FIELD_TYPE.DROPDOWN) {
            let e1 = n.closest(".ant-select"), t = e1?.querySelector(".ant-select-clear");
            if (t) {
                t.click(), await x(100);
                return;
            }
        }
        await (0, l.fillDefaultInputField)(n, "");
        return;
    }
    if (e1.type === f.FIELD_TYPE.DROPDOWN) {
        await Z({
            label: e1.key,
            type: f.FIELD_TYPE.DROPDOWN,
            required: !1,
            $input: n
        }, o);
        return;
    }
    await (0, l.fillDefaultInputField)(n, o);
}
function el() {
    let e1 = Array.from(document.querySelectorAll(".ant-popconfirm, .ant-popover, .ant-modal-confirm, [role='dialog']"));
    for (let t of e1){
        let e1 = Array.from(t.querySelectorAll("button")).find((e1)=>/^(ok|yes|delete|confirm)$/i.test(e1.textContent?.trim() || ""));
        if (e1) return e1;
    }
    return null;
}
function es() {
    let e1 = el();
    return !!e1 && (e1.click(), !0);
}
function eu(e1) {
    let t = [
        e1.getAttribute("aria-label"),
        e1.getAttribute("title"),
        e1.getAttribute("test-id"),
        e1.textContent,
        ...Array.from(e1.querySelectorAll("[aria-label]")).map((e1)=>e1.getAttribute("aria-label"))
    ].filter(Boolean).join(" ").toLowerCase();
    return t.includes("delete");
}
function ec(e1) {
    let t = e1.matches("form") || !e1.closest("form") ? e1 : e1.closest("form"), r1 = t.querySelector(U) ?? e1.querySelector(U);
    return r1 || Array.from(t.querySelectorAll("button")).concat(Array.from(e1.querySelectorAll("button"))).find(eu);
}
function ed(e1) {
    let t = document.querySelector(e1.containerSelector) ?? document, r1 = t.querySelector(U);
    return r1 || Array.from(t.querySelectorAll("button")).find(eu);
}
async function ef(e1, t) {
    return await (0, d.waitForCondition)(()=>V(e1).length < t, {
        timeout: 3e3,
        interval: 150,
        observeTarget: document.body
    });
}
async function ep(e1) {
    let t = V(e1).length;
    for(let r1 = 0; r1 < t; r1 += 1){
        let t = V(e1);
        if (0 === t.length) return;
        let r1 = ec(t[0]) ?? ed(e1);
        if (!r1) {
            console.warn(`[Dayforce] ${e1.label} summary record found without delete button`);
            return;
        }
        r1.click(), await (0, d.waitForCondition)(()=>V(e1).length < t.length || !!el(), {
            timeout: 3e3,
            interval: 100,
            observeTarget: document.body
        }), es();
        let n = await ef(e1, t.length);
        if (!n) {
            console.warn(`[Dayforce] Failed to delete ${e1.label} summary record`);
            return;
        }
    }
    let r1 = V(e1).length;
    r1 > 0 && console.warn(`[Dayforce] Failed to delete all ${e1.label} summary records, remaining: ${r1}`);
}
async function em(e1, t) {
    let r1 = Math.max(t, 1), n = H[e1.label], o = (0, g.getDayforceSectionRows)(e1);
    if (!(o.length <= r1) && n) {
        for(console.info("[Dayforce][CompositeSections] trimming parser rows", {
            label: e1.label,
            currentCount: o.length,
            targetCount: r1
        }); o.length > r1;){
            (0, u.checkpoint)();
            let t = o.length, i = o[o.length - 1], a = i.querySelector(n);
            if (!a) {
                console.warn("[Dayforce][CompositeSections] parser row cannot be removed", {
                    label: e1.label,
                    currentCount: t,
                    targetCount: r1,
                    reason: "cancel-button-missing"
                });
                return;
            }
            a.click();
            let l = await (0, d.waitForCondition)(()=>{
                let r1 = (0, g.getDayforceSectionRows)(e1);
                if (r1.length < t) return !0;
                let n = r1.find((e1)=>e1.id === i.id);
                return !!(n && ec(n));
            }, {
                timeout: 3e3,
                interval: 100,
                observeTarget: document.body
            });
            if (!l) {
                console.warn("[Dayforce][CompositeSections] parser row cannot be removed", {
                    label: e1.label,
                    currentCount: t,
                    targetCount: r1,
                    reason: "row-count-unchanged"
                });
                return;
            }
            if ((o = (0, g.getDayforceSectionRows)(e1)).length === t) {
                let n = o.find((e1)=>e1.id === i.id), a = n ? ec(n) : null;
                if (!a) {
                    console.warn("[Dayforce][CompositeSections] restored parser row cannot be deleted", {
                        label: e1.label,
                        currentCount: t,
                        targetCount: r1,
                        reason: "delete-button-missing"
                    });
                    return;
                }
                a.click(), await (0, d.waitForCondition)(()=>(0, g.getDayforceSectionRows)(e1).length < t || !!el(), {
                    timeout: 3e3,
                    interval: 100,
                    observeTarget: document.body
                }), es();
                let l = await (0, d.waitForCondition)(()=>(0, g.getDayforceSectionRows)(e1).length < t, {
                    timeout: 3e3,
                    interval: 100,
                    observeTarget: document.body
                });
                if (!l) {
                    console.warn("[Dayforce][CompositeSections] restored parser row cannot be deleted", {
                        label: e1.label,
                        currentCount: t,
                        targetCount: r1,
                        reason: "row-count-unchanged"
                    });
                    return;
                }
            }
            o = (0, g.getDayforceSectionRows)(e1);
        }
        console.info("[Dayforce][CompositeSections] parser rows trimmed", {
            label: e1.label,
            rowCount: o.length,
            targetCount: r1
        });
    }
}
async function eh(e1, t) {
    let r1 = document.querySelector(e1.containerSelector);
    if (!r1) return;
    let n = (0, g.getDayforceSectionRows)(e1), o = Math.max(t - n.length, 0 === n.length ? 1 : 0), i = r1.querySelector(e1.addButtonSelector);
    console.info("[Dayforce][Diagnostics] ensure-rows " + JSON.stringify({
        section: e1.label,
        expectedCount: t,
        currentRows: n.length,
        rowsToAdd: o,
        hasAddButton: !!i
    }));
    for(let e1 = 0; e1 < o; e1++)(0, u.checkpoint)(), i?.click(), await (0, u.cancellableDelay)(200);
}
async function eg(e1, t) {
    await ep(g.DAYFORCE_SECTIONS.education), await ep(g.DAYFORCE_SECTIONS.workExperience), await em(g.DAYFORCE_SECTIONS.education, e1), await em(g.DAYFORCE_SECTIONS.workExperience, t), await eh(g.DAYFORCE_SECTIONS.education, e1), await eh(g.DAYFORCE_SECTIONS.workExperience, t);
}
async function eb(e1, t, r1) {
    await eh(e1, t.length);
    let n = (0, g.getDayforceSectionRows)(e1);
    console.info("[Dayforce][Diagnostics] fill-rows " + JSON.stringify({
        section: e1.label,
        recordCount: t.length,
        rowCount: n.length
    }));
    let o = e1.type === f.FIELD_TYPE.EDUCATION ? "education" : "employment", i = r1 ? (0, s.createSectionResultReporter)(o, r1) : void 0;
    i?.setLabel(e1.label);
    let a = i ? n.map((t)=>({
            type: e1.type,
            label: e1.label,
            $input: t,
            children: e1.fields.map((e1)=>({
                    type: e1.type,
                    label: e1.key,
                    $input: t.querySelector(e1.selector)
                }))
        })) : [];
    i && (0, p.setSectionResultFocusRules)(o, a);
    for(let r1 = 0; r1 < t.length; r1++){
        let o = n[r1], l = t[r1];
        if (!o || !l) {
            console.warn("[Dayforce][Diagnostics] row-skipped " + JSON.stringify({
                section: e1.label,
                index: r1,
                hasRow: !!o,
                hasRecord: !!l
            }));
            continue;
        }
        let s = i?.ensureRow(r1, l);
        for (let [t, n] of (i?.emit(), e1.fields.entries())){
            try {
                if ((0, u.checkpoint)(), await ea(n, l, o), i && s) {
                    let u = o.querySelector(n.selector);
                    if (a[r1].children[t].$input = u, !u) continue;
                    let c = en(n, l), d = null != c && "" !== String(c).trim(), p = n.isCheckbox ? u?.checked === eo(c) : n.type === f.FIELD_TYPE.DROPDOWN && u ? !!(0, g.getDayforceDropdownCurrentValue)(u, n.key) : !!u?.value?.trim();
                    console.info("[Dayforce][Diagnostics] field-result " + JSON.stringify({
                        section: e1.label,
                        index: r1,
                        field: n.key,
                        hasAnswer: d,
                        hasValue: p,
                        rowConnected: o.isConnected
                    })), i.updateField(s, n.key, d ? String(c) : void 0, u && d && p ? "filled" : "missed"), i.emit();
                }
            } catch (e1) {
                throw i && s && (i.updateField(s, n.key, void 0, e1 instanceof u.SkippedError ? "skipped" : "missed"), i.emit()), e1;
            }
            await (0, u.cancellableDelay)(200);
        }
    }
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21;
$RefreshReg$(_c, "C");
$RefreshReg$(_c1, "A");
$RefreshReg$(_c2, "T");
$RefreshReg$(_c3, "F");
$RefreshReg$(_c4, "I");
$RefreshReg$(_c5, "D");
$RefreshReg$(_c6, "P");
$RefreshReg$(_c7, "L");
$RefreshReg$(_c8, "R");
$RefreshReg$(_c9, "O");
$RefreshReg$(_c10, "M");
$RefreshReg$(_c11, "N");
$RefreshReg$(_c12, "B");
$RefreshReg$(_c13, "Y");
$RefreshReg$(_c14, "V");
$RefreshReg$(_c15, "W");
$RefreshReg$(_c16, "G");
$RefreshReg$(_c17, "K");
$RefreshReg$(_c18, "X");
$RefreshReg$(_c19, "J");
$RefreshReg$(_c20, "Q");
$RefreshReg$(_c21, "Z");

},{}]},["hrYeR","6Qbsx"], "6Qbsx", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFBQVcsVUFBUSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsRUFBRSxFQUFDLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsT0FBTyxXQUFTLGFBQVcsSUFBSSxVQUFRLE1BQUssSUFBRSxDQUFDO1FBQUUsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFHLEVBQUUsWUFBVSxNQUFLLE9BQU8sRUFBRTtZQUFRLElBQUksSUFBRSxFQUFFLFFBQU87WUFBRSxJQUFHO2dCQUFDLElBQUUsRUFBRTtZQUFnQixFQUFDLE9BQU0sR0FBRTtnQkFBQyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7WUFBQztZQUFDLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSTtnQkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQUMsSUFBRyxPQUFPLEtBQUcsWUFBVyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7Z0JBQUUsSUFBSSxJQUFFLEVBQUUsSUFBSTtnQkFBRyxJQUFHLE1BQUksS0FBSyxHQUFFO29CQUFDLElBQUksSUFBRSxFQUFFO29CQUFHLEVBQUUsY0FBYSxDQUFBLEVBQUUsYUFBVyxDQUFDLENBQUEsR0FBRyxLQUFHLFlBQVU7Z0JBQUM7WUFBQztZQUFDLE9BQU8sRUFBRSxVQUFRLEdBQUU7UUFBQztRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxFQUFFLElBQUksSUFBRyxJQUFFLEVBQUUsSUFBSTtZQUFHLE9BQU8sTUFBSSxLQUFLLEtBQUcsTUFBSSxLQUFLLElBQUUsQ0FBQyxJQUFFLENBQUUsQ0FBQSxNQUFJLEtBQUssS0FBRyxNQUFJLEtBQUssS0FBRyxFQUFFLE9BQUssRUFBRSxNQUFJLEVBQUUsVUFBUztRQUFFO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxPQUFPLEVBQUUsYUFBVyxFQUFFLFVBQVU7UUFBZ0I7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxPQUFPLEVBQUUsTUFBSSxFQUFFLEtBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUU7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsT0FBTyxFQUFFLElBQUk7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsSUFBSSxJQUFFLElBQUk7WUFBSSxPQUFPLEVBQUUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLEVBQUUsSUFBSSxHQUFFO1lBQUUsSUFBRztRQUFDO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFJLElBQUUsSUFBSTtZQUFJLE9BQU8sRUFBRSxRQUFRLFNBQVMsQ0FBQztnQkFBRSxFQUFFLElBQUk7WUFBRSxJQUFHO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxJQUFHO2dCQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFBQSxFQUFDLE9BQU0sR0FBRTtnQkFBQztZQUFNO1FBQUM7UUFBQyxTQUFTO1lBQUksSUFBRyxFQUFFLFdBQVMsS0FBRyxHQUFFLE9BQU87WUFBSyxJQUFFLENBQUM7WUFBRSxJQUFHO2dCQUFDLElBQUksSUFBRSxJQUFJLEtBQUksSUFBRSxJQUFJLEtBQUksSUFBRTtnQkFBRSxJQUFFLEVBQUUsRUFBQyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7b0JBQVEsRUFBRSxJQUFJLEdBQUUsSUFBRyxFQUFFLElBQUksR0FBRSxJQUFHLEVBQUUsVUFBUSxHQUFFLEVBQUUsR0FBRSxLQUFHLEVBQUUsSUFBSSxLQUFHLEVBQUUsSUFBSTtnQkFBRTtnQkFBRyxJQUFJLElBQUU7b0JBQUMsaUJBQWdCO29CQUFFLGVBQWM7Z0JBQUM7Z0JBQUUsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLGtCQUFrQjtnQkFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsTUFBSyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUU7Z0JBQUcsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsSUFBRyxFQUFFLElBQUksSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLElBQUc7d0JBQUMsSUFBSSxJQUFFLEVBQUUsSUFBSTt3QkFBRyxJQUFHOzRCQUFDLEVBQUUsYUFBYSxHQUFFO3dCQUFFLEVBQUMsT0FBTSxHQUFFOzRCQUFDLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUE7d0JBQUU7b0JBQUM7Z0JBQUMsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsRUFBRSxJQUFJO29CQUFHLElBQUc7d0JBQUMsRUFBRSxnQkFBZ0IsR0FBRTtvQkFBRSxFQUFDLE9BQU0sR0FBRTt3QkFBQyxLQUFJLENBQUEsSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFBO29CQUFFO2dCQUFDLElBQUcsR0FBRSxNQUFNO2dCQUFFLE9BQU87WUFBQyxTQUFRO2dCQUFDLElBQUUsQ0FBQztZQUFDO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRyxJQUFHLE1BQUksUUFBTSxPQUFPLEtBQUcsY0FBWSxPQUFPLEtBQUcsWUFBVSxFQUFFLElBQUksSUFBRztZQUFPLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxJQUFHLE1BQUksS0FBSyxJQUFHLENBQUEsSUFBRTtnQkFBQyxTQUFRO1lBQUMsR0FBRSxFQUFFLElBQUksR0FBRSxFQUFDLElBQUcsRUFBRSxLQUFLO2dCQUFDO2dCQUFFO2FBQUUsR0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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Q0FBQyxFQUFFLEdBQUUsR0FBRyxDQUFDLEdBQUMsSUFBRSxLQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsT0FBTSxFQUFHO0lBQUcsT0FBTyxHQUFFLFlBQVUsR0FBRSxPQUFPLGdCQUFjO0FBQUU7QUFBQyxTQUFTLEdBQUcsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBSSxJQUFFLENBQUMsQ0FBQyxHQUFFLGdCQUFjLEdBQUc7SUFBQyxPQUFNLEFBQUMsQ0FBQSxHQUFFLFNBQU8sRUFBRSxXQUFXLFFBQU0sWUFBVSxHQUFFLE9BQUssVUFBUSxHQUFFLE9BQUssWUFBVSxHQUFFLGdCQUFjLFVBQVEsR0FBRSxZQUFXLEtBQUssQ0FBQSxLQUFFLEdBQUcsR0FBQyxHQUFHLEdBQUUsU0FBTyxHQUFFLE9BQU8sSUFBRSxLQUFHO0FBQUM7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQUcsSUFBRyxRQUFNLEtBQUcsT0FBSyxHQUFFLE9BQU87SUFBSyxJQUFHLGFBQVcsT0FBTyxHQUFFLE9BQU87SUFBRSxJQUFJLEtBQUUsT0FBTyxHQUFHLE9BQU87SUFBYyxPQUFPLEtBQUUsQ0FBQyxDQUFDO1FBQUM7UUFBTztRQUFNO1FBQUk7UUFBVTtLQUFVLENBQUMsU0FBUyxPQUFJLENBQUM7UUFBQztRQUFRO1FBQUs7UUFBSTtLQUFjLENBQUMsU0FBUyxPQUFJLE9BQUs7QUFBSTtBQUFDLGVBQWUsR0FBRyxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsR0FBRSxZQUFVLEdBQUU7UUFBQyxJQUFHLEdBQUU7WUFBQyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsWUFBVyxFQUFHLElBQUUsQ0FBQztZQUFHO1FBQU07UUFBQyxHQUFFLFNBQVEsR0FBRSxjQUFjLElBQUksTUFBTSxTQUFRO1lBQUMsU0FBUSxDQUFDO1lBQUUsWUFBVyxDQUFDO1FBQUMsS0FBSSxHQUFFLFNBQVEsR0FBRSxjQUFjLElBQUksTUFBTSxVQUFTO1lBQUMsU0FBUSxDQUFDO1lB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WUFBQztZQUFDLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxnQkFBZSxFQUFHO1FBQUk7SUFBQztBQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS04YmNjYjkwMTc4ZGRjOTgzLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2RheWZvcmNlL29wZXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcZGF5Zm9yY2VcXFxcb3BlcmF0aW9ucy5qc1wiLFwiYnVuZGxlSWRcIjpcIjYxMmE4NDIzNDE0YzYwZjlcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBnbmozM1xyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvZGF5Zm9yY2Uvb3BlcmF0aW9ucy5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9hbnN3ZXIgLT4gaXJYZm0gID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZGF5Zm9yY2UvYW5zd2VyLmpzXHJcbiAqICAgLi9ydWxlcyAtPiA1eW1xNCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9kYXlmb3JjZS9ydWxlcy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgZGF5anMgLT4gZm5oWHAgID0+ICBfdGlsZGVfbm9kZV9tb2R1bGVzL2RheWpzLmpzXHJcbiAqICAgfmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMvY2hlY2tib3ggLT4gNU1QNnUgID0+ICBzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy9jaGVja2JveC5qc1xyXG4gKiAgIH5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2lucHV0IC0+IGlQSXZUICA9PiAgc3JjL2NvbnRlbnRzL2NyYXdsZXIvdXRpbHMvaW5wdXQuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24gLT4gbHVKZnMgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlciAtPiBlVHpVeCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL29ic2VydmVyLmpzXHJcbiAqICAgfmNvcmUvZG9tIC0+IGhMTUpYICA9PiAgc3JjL2NvcmUvZG9tLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5jb3JlL3Bob25lLWNvdW50cnktY29kZSAtPiA4bkVOdyAgPT4gIHNyYy9jb3JlL3Bob25lLWNvdW50cnktY29kZS5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcImdldERheWZvcmNlUmVzdW1lVXBsb2FkRG9tXCIsKCk9PkEpLG4uZXhwb3J0KHIsXCJnZXREYXlmb3JjZUNvdmVyTGV0dGVyVXBsb2FkRG9tXCIsKCk9PmspLG4uZXhwb3J0KHIsXCJnZXREYXlmb3JjZUNvdmVyTGV0dGVyU3RhdHVzXCIsKCk9PkYpLG4uZXhwb3J0KHIsXCJpc1Jlc3VtZVVwbG9hZENvbXBsZXRlXCIsKCk9PkkpLG4uZXhwb3J0KHIsXCJ3YWl0Rm9yRGF5Zm9yY2VDb21wb3NpdGVTZWN0aW9uc1RvU2V0dGxlXCIsKCk9PlApLG4uZXhwb3J0KHIsXCJ1cGxvYWRSZXN1bWVcIiwoKT0+Xyksbi5leHBvcnQocixcInN5bmNDb3ZlckxldHRlclJlcXVpcmVkU3RhdHVzXCIsKCk9PkwpLG4uZXhwb3J0KHIsXCJ1cGxvYWRDb3ZlckxldHRlclwiLCgpPT5OKSxuLmV4cG9ydChyLFwiaGFzRGF5Zm9yY2VDb25maWd1cmVkU2VjdGlvblN1bW1hcnlcIiwoKT0+eiksbi5leHBvcnQocixcImlzRGF5Zm9yY2VDb25maWd1cmVkU2VjdGlvbkZpbGxlZFwiLCgpPT5XKSxuLmV4cG9ydChyLFwiZmlsbERheWZvcmNlVGV4dEZpZWxkXCIsKCk9PkcpLG4uZXhwb3J0KHIsXCJmaWxsRGF5Zm9yY2VEYXRlRmllbGRcIiwoKT0+Syksbi5leHBvcnQocixcImZpbGxEYXlmb3JjZURyb3Bkb3duRmllbGRcIiwoKT0+Wiksbi5leHBvcnQocixcImZpbGxEYXlmb3JjZVNlbGVjdEZpZWxkXCIsKCk9PmVlKSxuLmV4cG9ydChyLFwiZmlsbERheWZvcmNlQ2hlY2tib3hGaWVsZFwiLCgpPT5ldCksbi5leHBvcnQocixcImdldERheWZvcmNlQ2hlY2tib3hTdGF0ZVwiLCgpPT5lbyksbi5leHBvcnQocixcImluaXRpYWxpemVEYXlmb3JjZUNvbXBvc2l0ZVNlY3Rpb25zXCIsKCk9PmVnKSxuLmV4cG9ydChyLFwiZmlsbENvbmZpZ3VyZWRTZWN0aW9uXCIsKCk9PmViKTt2YXIgbz1lKFwiZGF5anNcIiksaT1uLmludGVyb3BEZWZhdWx0KG8pLGE9ZShcIn5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2NoZWNrYm94XCIpLGw9ZShcIn5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2lucHV0XCIpLHM9ZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSx1PWUoXCJ+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb25cIiksYz1lKFwifmNvbnRlbnRzL21ldGhvZHMvZG9tXCIpLGQ9ZShcIn5jb250ZW50cy9tZXRob2RzL29ic2VydmVyXCIpLGY9ZShcIn5jb3JlL2VudW1zXCIpLHA9ZShcIn5jb3JlL2RvbVwiKSxtPWUoXCJ+Y29yZS9waG9uZS1jb3VudHJ5LWNvZGVcIiksaD1lKFwiLi9hbnN3ZXJcIiksZz1lKFwiLi9ydWxlc1wiKTtsZXQgYj1cIlJlc3VtZS9DVlwiLHk9XCJDb3ZlciBMZXR0ZXJcIix2PTgwMCx3PTQwMCxTPTVlMyxFPTEwMDtmdW5jdGlvbiB4KGUpe2xldCB0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93LnNldFRpbWVvdXQ6Z2xvYmFsVGhpcy5zZXRUaW1lb3V0O3JldHVybiBuZXcgUHJvbWlzZShyPT50KHIsZSkpfWFzeW5jIGZ1bmN0aW9uIEMoZSx0LHIpe2xldCBuPURhdGUubm93KCkrdDtmb3IoOzspe2lmKCgwLHUuY2hlY2twb2ludCkoKSxlKCkpcmV0dXJuITA7bGV0IHQ9bi1EYXRlLm5vdygpO2lmKHQ8PTApcmV0dXJuITE7YXdhaXQgKDAsdS5jYW5jZWxsYWJsZURlbGF5KShNYXRoLm1pbihyLHQpKX19ZnVuY3Rpb24gQSgpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0ZXN0LWlkPVwicmVzdW1lLXVwbG9hZC1zZWN0aW9uXCJdJyk7cmV0dXJuIGU/e3NlY3Rpb246ZSxpbnB1dDplLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdW25hbWU9XCJwZXJzb25hbC5yZXN1bWVcIl0sIGlucHV0W3R5cGU9XCJmaWxlXCJdI2pvYlBvc3RpbmdBcHBsaWNhdGlvbl9maWxlc19yZXN1bWUnKSx1cGxvYWRJdGVtOmUucXVlcnlTZWxlY3RvcihcIi5hbnQtdXBsb2FkLWxpc3QtaXRlbVwiKSx1cGxvYWRlZE5hbWU6ZS5xdWVyeVNlbGVjdG9yKFwiLmFudC11cGxvYWQtbGlzdC1pdGVtLW5hbWVcIil9OntzZWN0aW9uOm51bGwsaW5wdXQ6bnVsbCx1cGxvYWRJdGVtOm51bGwsdXBsb2FkZWROYW1lOm51bGx9fWZ1bmN0aW9uIGsoKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uW3Rlc3QtaWQ9XCJjb3Zlci1sZXR0ZXItdXBsb2FkLXNlY3Rpb25cIl0nKTtyZXR1cm4gZT97c2VjdGlvbjplLGlucHV0OmUucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0jam9iUG9zdGluZ0FwcGxpY2F0aW9uX2ZpbGVzX2NvdmVyTGV0dGVyJyksdXBsb2FkTGlzdDplLnF1ZXJ5U2VsZWN0b3IoXCIuYW50LXVwbG9hZC1saXN0LmFudC11cGxvYWQtbGlzdC10ZXh0XCIpLHVwbG9hZGVkTmFtZTplLnF1ZXJ5U2VsZWN0b3IoXCIuYW50LXVwbG9hZC1saXN0LWl0ZW0tbmFtZVwiKSxkZWxldGVCdXR0b246ZS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdGl0bGU9XCJSZW1vdmUgZmlsZVwiXScpfTp7c2VjdGlvbjpudWxsLGlucHV0Om51bGwsdXBsb2FkTGlzdDpudWxsLHVwbG9hZGVkTmFtZTpudWxsLGRlbGV0ZUJ1dHRvbjpudWxsfX1mdW5jdGlvbiBUKCl7bGV0e3NlY3Rpb246ZSxpbnB1dDp0LHVwbG9hZExpc3Q6cn09aygpO2lmKCFlfHwhdHx8IXIpcmV0dXJue3N0YXR1czpcIlwiLHNvdXJjZTpcInNsb3QtbWlzc2luZ1wifTtsZXQgbj10LmNsb3Nlc3QoXCIuYW50LWZvcm0taXRlbVwiKSxvPVtlLG4sdF0uZmlsdGVyKGU9PiEhZSksaT1vLm1hcChlPT5lLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIikpO2lmKGkuaW5jbHVkZXMoXCJ0cnVlXCIpKXJldHVybntzdGF0dXM6XCJyZXF1aXJlZFwiLHNvdXJjZTpcImFyaWEtcmVxdWlyZWRcIn07aWYodC5yZXF1aXJlZHx8dC5oYXNBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKSlyZXR1cm57c3RhdHVzOlwicmVxdWlyZWRcIixzb3VyY2U6XCJuYXRpdmUtcmVxdWlyZWRcIn07bGV0IGE9bj8ucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpPz9lLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKSxsPVN0cmluZyhhPy5jbGFzc05hbWV8fFwiXCIpLnRvTG93ZXJDYXNlKCkscz1hPy50ZXh0Q29udGVudHx8XCJcIjtyZXR1cm4gbC5pbmNsdWRlcyhcInJlcXVpcmVkXCIpfHwvWypcXHVmZjBhXS8udGVzdChzKT97c3RhdHVzOlwicmVxdWlyZWRcIixzb3VyY2U6XCJsYWJlbC1yZXF1aXJlZFwifTppLmluY2x1ZGVzKFwiZmFsc2VcIik/e3N0YXR1czpcIm9wdGlvbmFsXCIsc291cmNlOlwiYXJpYS1yZXF1aXJlZFwifTp7c3RhdHVzOlwib3B0aW9uYWxcIixzb3VyY2U6XCJzbG90LW9wdGlvbmFsXCJ9fWZ1bmN0aW9uIEYoKXtyZXR1cm4gVCgpLnN0YXR1c31mdW5jdGlvbiBJKCl7bGV0e3VwbG9hZEl0ZW06ZSx1cGxvYWRlZE5hbWU6dH09QSgpO3JldHVybigwLGguaXNEYXlmb3JjZVVwbG9hZENvbXBsZXRlKSh0Py50ZXh0Q29udGVudCxlPy5jbGFzc05hbWUpfWFzeW5jIGZ1bmN0aW9uIGooKXtyZXR1cm4gYXdhaXQgQyhJLDNlNCw1MDApfWZ1bmN0aW9uIEQoKXtsZXQgZT1lPT5cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw/QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUucm93U2VsZWN0b3IpKTpbXSx0PWUoZy5EQVlGT1JDRV9TRUNUSU9OUy5lZHVjYXRpb24pLHI9ZShnLkRBWUZPUkNFX1NFQ1RJT05TLndvcmtFeHBlcmllbmNlKSxuPWU9PltlLmlkfHxcIlwiLGUuZ2V0QXR0cmlidXRlPy4oXCJ0ZXN0LWlkXCIpfHxcIlwiLC4uLkFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpLm1hcChlPT5bZS50YWdOYW1lLGUuaWR8fFwiXCIsZS5nZXRBdHRyaWJ1dGU/LihcIm5hbWVcIil8fFwiXCIsZS5nZXRBdHRyaWJ1dGU/LihcInR5cGVcIil8fFwiXCIsXCJjaGVja2VkXCJpbiBlP1N0cmluZyhlLmNoZWNrZWQpOlwiXCIsZS52YWx1ZXx8XCJcIl0uam9pbihcIjpcIikpXS5qb2luKFwifFwiKTtyZXR1cm57ZWR1Y2F0aW9uUm93Q291bnQ6dC5sZW5ndGgsd29ya0V4cGVyaWVuY2VSb3dDb3VudDpyLmxlbmd0aCxzaWduYXR1cmU6Wy4uLnQsLi4ucl0ubWFwKG4pLmpvaW4oXCJcXG5cIil9fWFzeW5jIGZ1bmN0aW9uIFAoe21pbmltdW1XYWl0TXM6ZT12LHF1aWV0UGVyaW9kTXM6dD13LG1heFdhaXRNczpyPVMscG9sbEludGVydmFsTXM6bj1FfT17fSl7bGV0IG89RGF0ZS5ub3coKSxpPW8sYT1EKCksbD0hMTtjb25zb2xlLmluZm8oXCJbRGF5Zm9yY2VdW1Jlc3VtZVBhcnNlcl0gd2FpdGluZyBmb3IgY29tcG9zaXRlIERPTSBzZXR0bGVcIix7ZWR1Y2F0aW9uUm93Q291bnQ6YS5lZHVjYXRpb25Sb3dDb3VudCx3b3JrRXhwZXJpZW5jZVJvd0NvdW50OmEud29ya0V4cGVyaWVuY2VSb3dDb3VudH0pO2xldCBzPWF3YWl0IEMoKCk9PntsZXQgcj1EKCk7ci5zaWduYXR1cmUhPT1hLnNpZ25hdHVyZSYmKGE9cixpPURhdGUubm93KCksbD0hMCk7bGV0IG49RGF0ZS5ub3coKTtyZXR1cm4gbi1vPj1NYXRoLm1heCgwLGUpJiZuLWk+PU1hdGgubWF4KDAsdCl9LE1hdGgubWF4KDAsciksTWF0aC5tYXgoMSxuKSk7cmV0dXJuIGE9RCgpLGNvbnNvbGUuaW5mbyhcIltEYXlmb3JjZV1bUmVzdW1lUGFyc2VyXSBjb21wb3NpdGUgRE9NIHNldHRsZSBjb21wbGV0ZWRcIix7c2V0dGxlZDpzLHNhd0NoYW5nZTpsLGVkdWNhdGlvblJvd0NvdW50OmEuZWR1Y2F0aW9uUm93Q291bnQsd29ya0V4cGVyaWVuY2VSb3dDb3VudDphLndvcmtFeHBlcmllbmNlUm93Q291bnR9KSxzfWFzeW5jIGZ1bmN0aW9uIF8oZSx0LHIsbixvKXtsZXR7c2VjdGlvbjppLGlucHV0OmEsdXBsb2FkSXRlbTpsLHVwbG9hZGVkTmFtZTpjfT1BKCk7aWYoIWkpcmV0dXJuITA7aWYocih7bGFiZWw6YixyZXF1aXJlZDohMH0pLCgwLGguaXNEYXlmb3JjZVVwbG9hZENvbXBsZXRlKShjPy50ZXh0Q29udGVudCxsPy5jbGFzc05hbWUpKXJldHVybiBjb25zb2xlLmluZm8oXCJbRGF5Zm9yY2VdW0RpYWdub3N0aWNzXSByZXN1bWUgXCIrSlNPTi5zdHJpbmdpZnkoe2JyYW5jaDpcImFscmVhZHktdXBsb2FkZWRcIn0pKSxuKGIpLCEwO2lmKHR8fCFhPy5maWxlcylyZXR1cm4gY29uc29sZS5pbmZvKFwiW0RheWZvcmNlXVtEaWFnbm9zdGljc10gcmVzdW1lIFwiK0pTT04uc3RyaW5naWZ5KHticmFuY2g6XCJibG9ja2VkXCIsZGlzYWJsZVVwbG9hZFJlc3VtZTp0LGhhc0ZpbGVJbnB1dDohIWE/LmZpbGVzfSkpLG8oYiksITE7dHJ5e2xldCB0PWF3YWl0ICgwLHMuZmV0Y2hQZGZBc0Jsb2IpKGUpOygwLHUuY2hlY2twb2ludCkoKSxhLmZpbGVzPXQuZmlsZXMsYS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITF9KSk7bGV0IHI9YXdhaXQgaigpO2lmKCFyKXJldHVybiBvKGIpLCExO2xldCBpPWF3YWl0IFAoKTtyZXR1cm4gY29uc29sZS5pbmZvKFwiW0RheWZvcmNlXVtEaWFnbm9zdGljc10gcmVzdW1lIFwiK0pTT04uc3RyaW5naWZ5KHticmFuY2g6XCJ1cGxvYWRlZFwiLHNldHRsZWQ6aX0pKSxuKGIpLCEwfWNhdGNoKGUpe2lmKGUgaW5zdGFuY2VvZiB1LkNhbmNlbGxlZEVycm9yfHxlIGluc3RhbmNlb2YgdS5Ta2lwcGVkRXJyb3IpdGhyb3cgZTtyZXR1cm4gY29uc29sZS5lcnJvcihcIltEYXlmb3JjZV0gRXJyb3IgdXBsb2FkaW5nIHJlc3VtZTpcIixlKSxvKGIpLCExfX1mdW5jdGlvbiBMKGUpe2xldHtzdGF0dXM6dCxzb3VyY2U6cn09VCgpO3JldHVybiEhdCYmKGNvbnNvbGUuaW5mbyhcIltEYXlmb3JjZV1bQ292ZXJMZXR0ZXJdIHByb2dyZXNzIHN0YXR1cyByZXNvbHZlZFwiLHtzdGF0dXM6dCxzb3VyY2U6cn0pLGUoe2xhYmVsOnkscmVxdWlyZWQ6XCJyZXF1aXJlZFwiPT09dH0pLCEwKX1mdW5jdGlvbiBSKGUsdCxyKXtsZXR7c3RhdHVzOm4sc291cmNlOm99PVQoKSxpPVwicmVxdWlyZWRcIj09PW47cmV0dXJuIGNvbnNvbGUuaW5mbyhcIltEYXlmb3JjZV1bQ292ZXJMZXR0ZXJdIG1pc3NlZCBzdGF0dXMgcmVzb2x2ZWRcIix7cmVxdWlyZWQ6aSxzb3VyY2U6b30pLG4mJm4hPT1lJiZ0KHtsYWJlbDp5LHJlcXVpcmVkOml9KSxpJiZyKHkpLGl9YXN5bmMgZnVuY3Rpb24gTygpe3JldHVybiBhd2FpdCBDKCgpPT4haygpLnVwbG9hZGVkTmFtZT8udGV4dENvbnRlbnQ/LnRyaW0oKSw0ZTMsMjAwKX1hc3luYyBmdW5jdGlvbiBNKGUpe3JldHVybiBhd2FpdCBDKCgpPT57bGV0IHQ9aygpLnVwbG9hZGVkTmFtZT8udGV4dENvbnRlbnQ/LnRyaW0oKTtyZXR1cm4hIXQmJnQuaW5jbHVkZXMoZSl9LDRlMywyMDApfWFzeW5jIGZ1bmN0aW9uIE4oZSx0LHIsbil7bGV0e3N0YXR1czpvLHNvdXJjZTppfT1UKCk7aWYoIW8pcmV0dXJuO2xldCBhPVwicmVxdWlyZWRcIj09PW8se3VwbG9hZGVkTmFtZTpsfT1rKCk7Y29uc29sZS5pbmZvKFwiW0RheWZvcmNlXVtDb3ZlckxldHRlcl0gdXBsb2FkIHN0YXR1cyByZXNvbHZlZFwiLHtzdGF0dXM6byxzb3VyY2U6aX0pLHQoe2xhYmVsOnkscmVxdWlyZWQ6YX0pO2xldCBjPWU/LmNvdmVyTGV0dGVySWQsZD1lPy5jb3ZlckxldHRlck5hbWU7aWYoIWN8fCFkKXtsPy50ZXh0Q29udGVudD8udHJpbSgpP3IoeSk6UihvLHQsbik7cmV0dXJufXRyeXtsZXR7ZGVsZXRlQnV0dG9uOml9PWsoKTtpZihsPy50ZXh0Q29udGVudD8udHJpbSgpJiZpKXtpLmNsaWNrKCk7bGV0IGU9YXdhaXQgTygpO2lmKCFlKXtSKG8sdCxuKTtyZXR1cm59fWxldCBhPWsoKS5pbnB1dDtpZighYT8uZmlsZXMpe2NvbnNvbGUuZXJyb3IoXCJbRGF5Zm9yY2VdIENvdmVyIGxldHRlciBmaWxlIGlucHV0IG5vdCBmb3VuZFwiKSxSKG8sdCxuKTtyZXR1cm59bGV0IGY9YXdhaXQgKDAscy5mZXRjaENvdmVyTGV0dGVyUGRmQXNCbG9iKSh7Li4uZSxjb3ZlckxldHRlcklkOmMsY292ZXJMZXR0ZXJOYW1lOmR9KTsoMCx1LmNoZWNrcG9pbnQpKCksYS5maWxlcz1mLmZpbGVzLGEuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiExfSkpO2xldCBwPWAke2R9LnBkZmAsbT1hd2FpdCBNKHApO2lmKCFtKXtjb25zb2xlLmVycm9yKFwiW0RheWZvcmNlXSBDb3ZlciBsZXR0ZXIgdXBsb2FkIG5vdCBjb25maXJtZWQ6XCIscCksUihvLHQsbik7cmV0dXJufXIoeSl9Y2F0Y2goZSl7aWYoZSBpbnN0YW5jZW9mIHUuQ2FuY2VsbGVkRXJyb3J8fGUgaW5zdGFuY2VvZiB1LlNraXBwZWRFcnJvcil0aHJvdyBlO2NvbnNvbGUuZXJyb3IoXCJbRGF5Zm9yY2VdIEVycm9yIHVwbG9hZGluZyBjb3ZlciBsZXR0ZXI6XCIsZSksUihvLHQsbil9fWZ1bmN0aW9uICQoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZVswXTplfWZ1bmN0aW9uIEIoZSx0PVwiXCIpe3JldHVybiBlPygwLGcuZ2V0Q3VycmVudERheWZvcmNlRWxlbWVudCkoZSx0KTpudWxsfWxldCBxPXtFZHVjYXRpb246J2Zvcm1bdGVzdC1pZCo9XCJlZHVjYXRpb25oaXN0b3J5LXJlY29yZFwiIGldJyxFbXBsb3ltZW50Oidmb3JtW3Rlc3QtaWQqPVwid29ya2hpc3RvcnktcmVjb3JkXCIgaV0nfSxVPSdidXR0b25bYXJpYS1sYWJlbD1cIkRlbGV0ZSBSZWNvcmRcIl0sIGJ1dHRvblt0aXRsZT1cIkRlbGV0ZSBSZWNvcmRcIl0sIGJ1dHRvblt0ZXN0LWlkKj1cImRlbGV0ZS1idXR0b25cIiBpXScsSD17RWR1Y2F0aW9uOidbdGVzdC1pZD1cImVkdWNhdGlvbkhpc3RvcnktY2FuY2VsLWJ1dHRvblwiXScsRW1wbG95bWVudDonW3Rlc3QtaWQ9XCJ3b3JrSGlzdG9yeS1jYW5jZWwtYnV0dG9uXCJdJ307ZnVuY3Rpb24gWShlKXtsZXQgdD1lO3JldHVybiF0LmhpZGRlbiYmdC5nZXRBdHRyaWJ1dGU/LihcImFyaWEtaGlkZGVuXCIpIT09XCJ0cnVlXCImJi9bYS16MC05XS9pLnRlc3QodC50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl8fFwiXCIpfWZ1bmN0aW9uIHooZSl7cmV0dXJuIFYoZSkubGVuZ3RoPjB9ZnVuY3Rpb24gVihlKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQpcmV0dXJuW107bGV0IHQ9cVtlLmxhYmVsXTtpZighdClyZXR1cm5bXTtsZXQgcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUuY29udGFpbmVyU2VsZWN0b3IpLG49bmV3IFNldDtpZihyKWZvcihsZXQgZSBvZiBBcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbCh0KSkpbi5hZGQoZSk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbClmb3IobGV0IGUgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHQpKSluLmFkZChlKTtsZXQgbz1IW2UubGFiZWxdO3JldHVybiBBcnJheS5mcm9tKG4pLmZpbHRlcihlPT5ZKGUpJiYoIW98fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUucXVlcnlTZWxlY3Rvcnx8IWUucXVlcnlTZWxlY3RvcihvKSkpfWZ1bmN0aW9uIFcoZSx0KXtyZXR1cm4hIXQ/Lmxlbmd0aHx8eihlKX1hc3luYyBmdW5jdGlvbiBHKGUsdCl7bGV0IHI9JCh0KTtpZighcilyZXR1cm4hMTtsZXQgbj1TdHJpbmcocj8/XCJcIiksbz1TdHJpbmcoZS5sYWJlbHx8XCJcIikuaW5jbHVkZXMoXCJQaG9uZSBOdW1iZXJcIik/MzoxO2ZvcihsZXQgdD0wO3Q8bzt0Kz0xKXtsZXQgdD1CKGUuJGlucHV0LGUubGFiZWwpO2lmKCF0KWJyZWFrO2F3YWl0ICgwLGMuZmlsbElucHV0VGV4dEZpZWxkKSh0LG4pLGF3YWl0IHgoMjUwKTtsZXQgcj1CKGUuJGlucHV0LGUubGFiZWwpO2lmKChyPy52YWx1ZXx8XCJcIik9PT1uKXJldHVybiEwfXJldHVybiExfWFzeW5jIGZ1bmN0aW9uIEsoZSx0KXtsZXQgcj0kKHQpO2lmKCFyKXJldHVybiExO2xldCBuPWVyKHIpO2lmKCFuKXJldHVybiExO2xldCBvPUIoZS4kaW5wdXQsZS5sYWJlbCk7cmV0dXJuISFvJiYoYXdhaXQgKDAsYy5maWxsSW5wdXRUZXh0RmllbGQpKG8sbiksITApfWZ1bmN0aW9uIFgoZT1cIlwiKXtyZXR1cm4oMCxoLmlzRGF5Zm9yY2VQaG9uZUNvdW50cnlDb2RlTGFiZWwpKGUpfHxlLmluY2x1ZGVzKFwiUGhvbmUgTnVtYmVyXCIpfWZ1bmN0aW9uIEooZSl7cmV0dXJuIG51bGwhPWUmJlwiXCIhPT1TdHJpbmcoZSkudHJpbSgpfWZ1bmN0aW9uIFEoZSx0KXtsZXQgcj0oQXJyYXkuaXNBcnJheSh0KT90Olt0XSkuZmlsdGVyKEopO2lmKHIubGVuZ3RoPjApcmV0dXJuIHI7aWYoIVgoZS5sYWJlbCkpcmV0dXJuW107bGV0IG49ZS5yZWNvcmRDb3VudHJ5O3JldHVybiBKKG4pP1tuXTpbXX1hc3luYyBmdW5jdGlvbiBaKGUsdCxyKXtsZXQgbj1CKGUuJGlucHV0LGUubGFiZWwpO2lmKCFuKXJldHVybiExO2xldCBvPVEoey4uLmUscmVjb3JkQ291bnRyeTpyfSx0KTtpZihcIkNvdW50cnlcIj09PWUubGFiZWwpe2xldCB0PSgwLGcuZ2V0RGF5Zm9yY2VEcm9wZG93bkN1cnJlbnRWYWx1ZSkobixlLmxhYmVsKSxyPW8uc29tZShyPT4oMCxoLmlzRGF5Zm9yY2VEcm9wZG93bk1hdGNoZWQpKHQsU3RyaW5nKHIpLGUubGFiZWwpKSxpPSEhdCYmKDA9PT1vLmxlbmd0aHx8cik7aWYoY29uc29sZS5kZWJ1ZyhcIltEYXlmb3JjZV1bQ291bnRyeV0gcHJlZmlsbC1yZWFkYmFja1wiLHtoYXNDb21taXR0ZWRWYWx1ZTohIXQsYW5zd2VyQ291bnQ6by5sZW5ndGgsbWF0Y2hlc0Fuc3dlcjpyLGNvbW1pdHRlZDppfSksaSlyZXR1cm4hMH1pZigwPT09by5sZW5ndGgpcmV0dXJuITE7bi5kaXNwYXRjaEV2ZW50KG5ldyBGb2N1c0V2ZW50KFwiZm9jdXNcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLHZpZXc6d2luZG93fSkpLG4uZm9jdXMoKSxuLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2xpY2tcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0IHgoMjAwKSwoMCxjLnRyaWdnZXJFdmVudHMpKG4sW1wibW91c2Vkb3duXCJdKSxhd2FpdCB4KDIwMCk7bGV0IGk9KCk9PntsZXQgZT1uLmlkP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke0NTUy5lc2NhcGUobi5pZCl9X2xpc3RgKTpudWxsO3JldHVybiBBcnJheS5mcm9tKGU/LmNoaWxkcmVufHxbXSl9O2F3YWl0ICgwLGQud2FpdEZvckNvbmRpdGlvbikoKCk9PmkoKS5sZW5ndGg+MCx7dGltZW91dDoxMjAwLGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KTtsZXQgYT1pKCk7aWYoKDAsaC5pc0RheWZvcmNlUGhvbmVDb3VudHJ5Q29kZUxhYmVsKShlLmxhYmVsKSl7bGV0IHQ9bnVsbDtmb3IobGV0W3Isbl1vZiBvLmVudHJpZXMoKSlpZih0PSgwLG0uZmluZFBob25lQ291bnRyeU9wdGlvbkVsZW1lbnQpKG4sYSx7ZGVidWdMYWJlbDpyPT09by5sZW5ndGgtMT9lLmxhYmVsOnZvaWQgMH0pKWJyZWFrO3JldHVybiB0JiYoKDAsYy50cmlnZ2VyRXZlbnRzKSh0LFtcImNsaWNrXCJdKSxhd2FpdCB4KDIwMCkpLG4uYmx1cigpLCEhdH1mb3IobGV0IHQgb2YgYSl7bGV0IHI9KDAsaC5ub3JtYWxpemVEYXlmb3JjZURyb3Bkb3duT3B0aW9uVGV4dCkodC50ZXh0Q29udGVudCk7aWYoZS5sYWJlbC5pbmNsdWRlcyhcIlBob25lIE51bWJlclwiKSl7bGV0IGU9ci5zcGxpdChcIltcIik7cj1lW2UubGVuZ3RoLTFdLnRyaW0oKX1pZihvLnNvbWUodD0+KDAsaC5pc0RheWZvcmNlRHJvcGRvd25NYXRjaGVkKShyLFN0cmluZyh0KSxlLmxhYmVsKSkpe2lmKCgwLGMudHJpZ2dlckV2ZW50cykodCxbXCJjbGlja1wiXSksYXdhaXQgeCgyMDApLG4uYmx1cigpLFwiQ291bnRyeVwiPT09ZS5sYWJlbCl7bGV0IHQ9KDAsZy5nZXREYXlmb3JjZURyb3Bkb3duQ3VycmVudFZhbHVlKShuLGUubGFiZWwpLHI9by5zb21lKHI9PigwLGguaXNEYXlmb3JjZURyb3Bkb3duTWF0Y2hlZCkodCxTdHJpbmcociksZS5sYWJlbCkpO3JldHVybiBjb25zb2xlLmRlYnVnKFwiW0RheWZvcmNlXVtDb3VudHJ5XSBzZWxlY3Rpb24tcmVhZGJhY2tcIix7b3B0aW9uQ291bnQ6YS5sZW5ndGgsY29tbWl0dGVkOnJ9KSxyfXJldHVybiEwfX1yZXR1cm4gbi5ibHVyKCksITF9YXN5bmMgZnVuY3Rpb24gZWUoZSx0KXtsZXQgcj1lLiRpbnB1dCxuPSQodCk7aWYoIXJ8fCFuKXJldHVybiExO2xldCBvPVN0cmluZyhuKS50cmltKCkudG9Mb3dlckNhc2UoKSxpPUFycmF5LmZyb20oci5vcHRpb25zKS5maW5kKGU9PntsZXQgdD1lLnRleHRDb250ZW50Py50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4gdD09PW98fGUudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk9PT1vfSk7cmV0dXJuISFpJiYoci52YWx1ZT1pLnZhbHVlLHIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLHIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSxyLnZhbHVlPT09aS52YWx1ZSl9YXN5bmMgZnVuY3Rpb24gZXQoZSx0KXtsZXQgcj0oQXJyYXkuaXNBcnJheSh0KT90Olt0XSkubWFwKGU9PlN0cmluZyhlPz9cIlwiKS50b0xvd2VyQ2FzZSgpLnRyaW0oKSk7aWYoMD09PXIubGVuZ3RoKXJldHVybiExO2xldCBuPSExO2ZvcihsZXQgbyBvZiBlLiRjaGVja2JveHMpe2xldCBpPW8sbD1cImFncmVlQ2hlY2tib3hcIj09PWkuaWQ/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aS5pZH1MYWJlbGApOmkuY2xvc2VzdChcImxhYmVsW2NsYXNzKj0nYW50LSddXCIpLHM9bD8uaW5uZXJUZXh0Py50b0xvd2VyQ2FzZSgpLnRyaW0oKXx8XCJcIjtpZighcyYmMT09PWUuJGNoZWNrYm94cy5sZW5ndGgpe2xldCBlPWVvKHQpO2lmKG51bGw9PWUpcmV0dXJuITE7cmV0dXJuIGF3YWl0IGVpKGksZSksITB9bGV0IHU9ci5pbmNsdWRlcyhzKXx8XCJ0cnVlXCI9PT1yWzBdJiZcInllc1wiPT09c3x8XCJmYWxzZVwiPT09clswXSYmXCJub1wiPT09c3x8XCJhZ3JlZUNoZWNrYm94XCI9PT1pLmlkJiZcInRydWVcIj09PXJbMF07dSYmKGF3YWl0ICgwLGEuZmlsbENoZWNrYm94KShpLCEwKSxuPSEwKX1yZXR1cm4gbn1mdW5jdGlvbiBlcihlKXtpZighZSlyZXR1cm5cIlwiO2xldCB0PTI9PT1TdHJpbmcoZSkuc3BsaXQoXCItXCIpLmxlbmd0aD9gJHtlfS0wMWA6ZSxyPSgwLGkuZGVmYXVsdCkodCk7cmV0dXJuIHIuaXNWYWxpZCgpP3IuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTpcIlwifWZ1bmN0aW9uIGVuKGUsdCl7bGV0IHI9dFtlLmtleV0/P3RbZS5hbHRlcm5hdGVLZXl8fFwiXCJdO3JldHVybihlLnR5cGU9PT1mLkZJRUxEX1RZUEUuREFURXx8XCJTdGFydFwiPT09ZS5rZXl8fFwiRW5kXCI9PT1lLmtleXx8XCJTdGFydFwiPT09ZS5hbHRlcm5hdGVLZXl8fFwiRW5kXCI9PT1lLmFsdGVybmF0ZUtleSkmJihyPWVyKHIpKSxlLmZvcm1hdD9lLmZvcm1hdChyLHQpOnJ9ZnVuY3Rpb24gZW8oZSl7bGV0IHQ9JChlKTtpZihudWxsPT10fHxcIlwiPT09dClyZXR1cm4gbnVsbDtpZihcImJvb2xlYW5cIj09dHlwZW9mIHQpcmV0dXJuIHQ7bGV0IHI9U3RyaW5nKHQpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO3JldHVybiByPyEhW1widHJ1ZVwiLFwieWVzXCIsXCIxXCIsXCJjdXJyZW50XCIsXCJwcmVzZW50XCJdLmluY2x1ZGVzKHIpfHwhW1wiZmFsc2VcIixcIm5vXCIsXCIwXCIsXCJub3QgY3VycmVudFwiXS5pbmNsdWRlcyhyKSYmbnVsbDpudWxsfWFzeW5jIGZ1bmN0aW9uIGVpKGUsdCl7aWYoZS5jaGVja2VkIT09dCl7aWYodCl7YXdhaXQgKDAsYS5maWxsQ2hlY2tib3gpKGUsITApO3JldHVybn1lLmZvY3VzKCksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImZvY3VzXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMX0pKSxlLmNsaWNrKCksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITF9KSksZS5ibHVyKCksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImJsdXJcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiExfSkpfX1hc3luYyBmdW5jdGlvbiBlYShlLHQscil7bGV0IG49ci5xdWVyeVNlbGVjdG9yKGUuc2VsZWN0b3IpO2lmKCFuKXJldHVybjtsZXQgbz1lbihlLHQpO2lmKGUuaXNDaGVja2JveCl7bGV0IGU9ZW8obyk7YXdhaXQgZWkobixlPz8hMSk7cmV0dXJufWlmKCFvKXtpZihlLnR5cGU9PT1mLkZJRUxEX1RZUEUuRFJPUERPV04pe2xldCBlPW4uY2xvc2VzdChcIi5hbnQtc2VsZWN0XCIpLHQ9ZT8ucXVlcnlTZWxlY3RvcihcIi5hbnQtc2VsZWN0LWNsZWFyXCIpO2lmKHQpe3QuY2xpY2soKSxhd2FpdCB4KDEwMCk7cmV0dXJufX1hd2FpdCAoMCxsLmZpbGxEZWZhdWx0SW5wdXRGaWVsZCkobixcIlwiKTtyZXR1cm59aWYoZS50eXBlPT09Zi5GSUVMRF9UWVBFLkRST1BET1dOKXthd2FpdCBaKHtsYWJlbDplLmtleSx0eXBlOmYuRklFTERfVFlQRS5EUk9QRE9XTixyZXF1aXJlZDohMSwkaW5wdXQ6bn0sbyk7cmV0dXJufWF3YWl0ICgwLGwuZmlsbERlZmF1bHRJbnB1dEZpZWxkKShuLG8pfWZ1bmN0aW9uIGVsKCl7bGV0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFudC1wb3Bjb25maXJtLCAuYW50LXBvcG92ZXIsIC5hbnQtbW9kYWwtY29uZmlybSwgW3JvbGU9J2RpYWxvZyddXCIpKTtmb3IobGV0IHQgb2YgZSl7bGV0IGU9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbmQoZT0+L14ob2t8eWVzfGRlbGV0ZXxjb25maXJtKSQvaS50ZXN0KGUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIikpO2lmKGUpcmV0dXJuIGV9cmV0dXJuIG51bGx9ZnVuY3Rpb24gZXMoKXtsZXQgZT1lbCgpO3JldHVybiEhZSYmKGUuY2xpY2soKSwhMCl9ZnVuY3Rpb24gZXUoZSl7bGV0IHQ9W2UuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSxlLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpLGUuZ2V0QXR0cmlidXRlKFwidGVzdC1pZFwiKSxlLnRleHRDb250ZW50LC4uLkFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2FyaWEtbGFiZWxdXCIpKS5tYXAoZT0+ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpKV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHQuaW5jbHVkZXMoXCJkZWxldGVcIil9ZnVuY3Rpb24gZWMoZSl7bGV0IHQ9ZS5tYXRjaGVzKFwiZm9ybVwiKXx8IWUuY2xvc2VzdChcImZvcm1cIik/ZTplLmNsb3Nlc3QoXCJmb3JtXCIpLHI9dC5xdWVyeVNlbGVjdG9yKFUpPz9lLnF1ZXJ5U2VsZWN0b3IoVSk7cmV0dXJuIHJ8fEFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKS5jb25jYXQoQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpKS5maW5kKGV1KX1mdW5jdGlvbiBlZChlKXtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUuY29udGFpbmVyU2VsZWN0b3IpPz9kb2N1bWVudCxyPXQucXVlcnlTZWxlY3RvcihVKTtyZXR1cm4gcnx8QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbmQoZXUpfWFzeW5jIGZ1bmN0aW9uIGVmKGUsdCl7cmV0dXJuIGF3YWl0ICgwLGQud2FpdEZvckNvbmRpdGlvbikoKCk9PlYoZSkubGVuZ3RoPHQse3RpbWVvdXQ6M2UzLGludGVydmFsOjE1MCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KX1hc3luYyBmdW5jdGlvbiBlcChlKXtsZXQgdD1WKGUpLmxlbmd0aDtmb3IobGV0IHI9MDtyPHQ7cis9MSl7bGV0IHQ9VihlKTtpZigwPT09dC5sZW5ndGgpcmV0dXJuO2xldCByPWVjKHRbMF0pPz9lZChlKTtpZighcil7Y29uc29sZS53YXJuKGBbRGF5Zm9yY2VdICR7ZS5sYWJlbH0gc3VtbWFyeSByZWNvcmQgZm91bmQgd2l0aG91dCBkZWxldGUgYnV0dG9uYCk7cmV0dXJufXIuY2xpY2soKSxhd2FpdCAoMCxkLndhaXRGb3JDb25kaXRpb24pKCgpPT5WKGUpLmxlbmd0aDx0Lmxlbmd0aHx8ISFlbCgpLHt0aW1lb3V0OjNlMyxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSksZXMoKTtsZXQgbj1hd2FpdCBlZihlLHQubGVuZ3RoKTtpZighbil7Y29uc29sZS53YXJuKGBbRGF5Zm9yY2VdIEZhaWxlZCB0byBkZWxldGUgJHtlLmxhYmVsfSBzdW1tYXJ5IHJlY29yZGApO3JldHVybn19bGV0IHI9VihlKS5sZW5ndGg7cj4wJiZjb25zb2xlLndhcm4oYFtEYXlmb3JjZV0gRmFpbGVkIHRvIGRlbGV0ZSBhbGwgJHtlLmxhYmVsfSBzdW1tYXJ5IHJlY29yZHMsIHJlbWFpbmluZzogJHtyfWApfWFzeW5jIGZ1bmN0aW9uIGVtKGUsdCl7bGV0IHI9TWF0aC5tYXgodCwxKSxuPUhbZS5sYWJlbF0sbz0oMCxnLmdldERheWZvcmNlU2VjdGlvblJvd3MpKGUpO2lmKCEoby5sZW5ndGg8PXIpJiZuKXtmb3IoY29uc29sZS5pbmZvKFwiW0RheWZvcmNlXVtDb21wb3NpdGVTZWN0aW9uc10gdHJpbW1pbmcgcGFyc2VyIHJvd3NcIix7bGFiZWw6ZS5sYWJlbCxjdXJyZW50Q291bnQ6by5sZW5ndGgsdGFyZ2V0Q291bnQ6cn0pO28ubGVuZ3RoPnI7KXsoMCx1LmNoZWNrcG9pbnQpKCk7bGV0IHQ9by5sZW5ndGgsaT1vW28ubGVuZ3RoLTFdLGE9aS5xdWVyeVNlbGVjdG9yKG4pO2lmKCFhKXtjb25zb2xlLndhcm4oXCJbRGF5Zm9yY2VdW0NvbXBvc2l0ZVNlY3Rpb25zXSBwYXJzZXIgcm93IGNhbm5vdCBiZSByZW1vdmVkXCIse2xhYmVsOmUubGFiZWwsY3VycmVudENvdW50OnQsdGFyZ2V0Q291bnQ6cixyZWFzb246XCJjYW5jZWwtYnV0dG9uLW1pc3NpbmdcIn0pO3JldHVybn1hLmNsaWNrKCk7bGV0IGw9YXdhaXQgKDAsZC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCByPSgwLGcuZ2V0RGF5Zm9yY2VTZWN0aW9uUm93cykoZSk7aWYoci5sZW5ndGg8dClyZXR1cm4hMDtsZXQgbj1yLmZpbmQoZT0+ZS5pZD09PWkuaWQpO3JldHVybiEhKG4mJmVjKG4pKX0se3RpbWVvdXQ6M2UzLGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KTtpZighbCl7Y29uc29sZS53YXJuKFwiW0RheWZvcmNlXVtDb21wb3NpdGVTZWN0aW9uc10gcGFyc2VyIHJvdyBjYW5ub3QgYmUgcmVtb3ZlZFwiLHtsYWJlbDplLmxhYmVsLGN1cnJlbnRDb3VudDp0LHRhcmdldENvdW50OnIscmVhc29uOlwicm93LWNvdW50LXVuY2hhbmdlZFwifSk7cmV0dXJufWlmKChvPSgwLGcuZ2V0RGF5Zm9yY2VTZWN0aW9uUm93cykoZSkpLmxlbmd0aD09PXQpe2xldCBuPW8uZmluZChlPT5lLmlkPT09aS5pZCksYT1uP2VjKG4pOm51bGw7aWYoIWEpe2NvbnNvbGUud2FybihcIltEYXlmb3JjZV1bQ29tcG9zaXRlU2VjdGlvbnNdIHJlc3RvcmVkIHBhcnNlciByb3cgY2Fubm90IGJlIGRlbGV0ZWRcIix7bGFiZWw6ZS5sYWJlbCxjdXJyZW50Q291bnQ6dCx0YXJnZXRDb3VudDpyLHJlYXNvbjpcImRlbGV0ZS1idXR0b24tbWlzc2luZ1wifSk7cmV0dXJufWEuY2xpY2soKSxhd2FpdCAoMCxkLndhaXRGb3JDb25kaXRpb24pKCgpPT4oMCxnLmdldERheWZvcmNlU2VjdGlvblJvd3MpKGUpLmxlbmd0aDx0fHwhIWVsKCkse3RpbWVvdXQ6M2UzLGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KSxlcygpO2xldCBsPWF3YWl0ICgwLGQud2FpdEZvckNvbmRpdGlvbikoKCk9PigwLGcuZ2V0RGF5Zm9yY2VTZWN0aW9uUm93cykoZSkubGVuZ3RoPHQse3RpbWVvdXQ6M2UzLGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KTtpZighbCl7Y29uc29sZS53YXJuKFwiW0RheWZvcmNlXVtDb21wb3NpdGVTZWN0aW9uc10gcmVzdG9yZWQgcGFyc2VyIHJvdyBjYW5ub3QgYmUgZGVsZXRlZFwiLHtsYWJlbDplLmxhYmVsLGN1cnJlbnRDb3VudDp0LHRhcmdldENvdW50OnIscmVhc29uOlwicm93LWNvdW50LXVuY2hhbmdlZFwifSk7cmV0dXJufX1vPSgwLGcuZ2V0RGF5Zm9yY2VTZWN0aW9uUm93cykoZSl9Y29uc29sZS5pbmZvKFwiW0RheWZvcmNlXVtDb21wb3NpdGVTZWN0aW9uc10gcGFyc2VyIHJvd3MgdHJpbW1lZFwiLHtsYWJlbDplLmxhYmVsLHJvd0NvdW50Om8ubGVuZ3RoLHRhcmdldENvdW50OnJ9KX19YXN5bmMgZnVuY3Rpb24gZWgoZSx0KXtsZXQgcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUuY29udGFpbmVyU2VsZWN0b3IpO2lmKCFyKXJldHVybjtsZXQgbj0oMCxnLmdldERheWZvcmNlU2VjdGlvblJvd3MpKGUpLG89TWF0aC5tYXgodC1uLmxlbmd0aCwwPT09bi5sZW5ndGg/MTowKSxpPXIucXVlcnlTZWxlY3RvcihlLmFkZEJ1dHRvblNlbGVjdG9yKTtjb25zb2xlLmluZm8oXCJbRGF5Zm9yY2VdW0RpYWdub3N0aWNzXSBlbnN1cmUtcm93cyBcIitKU09OLnN0cmluZ2lmeSh7c2VjdGlvbjplLmxhYmVsLGV4cGVjdGVkQ291bnQ6dCxjdXJyZW50Um93czpuLmxlbmd0aCxyb3dzVG9BZGQ6byxoYXNBZGRCdXR0b246ISFpfSkpO2ZvcihsZXQgZT0wO2U8bztlKyspKDAsdS5jaGVja3BvaW50KSgpLGk/LmNsaWNrKCksYXdhaXQgKDAsdS5jYW5jZWxsYWJsZURlbGF5KSgyMDApfWFzeW5jIGZ1bmN0aW9uIGVnKGUsdCl7YXdhaXQgZXAoZy5EQVlGT1JDRV9TRUNUSU9OUy5lZHVjYXRpb24pLGF3YWl0IGVwKGcuREFZRk9SQ0VfU0VDVElPTlMud29ya0V4cGVyaWVuY2UpLGF3YWl0IGVtKGcuREFZRk9SQ0VfU0VDVElPTlMuZWR1Y2F0aW9uLGUpLGF3YWl0IGVtKGcuREFZRk9SQ0VfU0VDVElPTlMud29ya0V4cGVyaWVuY2UsdCksYXdhaXQgZWgoZy5EQVlGT1JDRV9TRUNUSU9OUy5lZHVjYXRpb24sZSksYXdhaXQgZWgoZy5EQVlGT1JDRV9TRUNUSU9OUy53b3JrRXhwZXJpZW5jZSx0KX1hc3luYyBmdW5jdGlvbiBlYihlLHQscil7YXdhaXQgZWgoZSx0Lmxlbmd0aCk7bGV0IG49KDAsZy5nZXREYXlmb3JjZVNlY3Rpb25Sb3dzKShlKTtjb25zb2xlLmluZm8oXCJbRGF5Zm9yY2VdW0RpYWdub3N0aWNzXSBmaWxsLXJvd3MgXCIrSlNPTi5zdHJpbmdpZnkoe3NlY3Rpb246ZS5sYWJlbCxyZWNvcmRDb3VudDp0Lmxlbmd0aCxyb3dDb3VudDpuLmxlbmd0aH0pKTtsZXQgbz1lLnR5cGU9PT1mLkZJRUxEX1RZUEUuRURVQ0FUSU9OP1wiZWR1Y2F0aW9uXCI6XCJlbXBsb3ltZW50XCIsaT1yPygwLHMuY3JlYXRlU2VjdGlvblJlc3VsdFJlcG9ydGVyKShvLHIpOnZvaWQgMDtpPy5zZXRMYWJlbChlLmxhYmVsKTtsZXQgYT1pP24ubWFwKHQ9Pih7dHlwZTplLnR5cGUsbGFiZWw6ZS5sYWJlbCwkaW5wdXQ6dCxjaGlsZHJlbjplLmZpZWxkcy5tYXAoZT0+KHt0eXBlOmUudHlwZSxsYWJlbDplLmtleSwkaW5wdXQ6dC5xdWVyeVNlbGVjdG9yKGUuc2VsZWN0b3IpfSkpfSkpOltdO2kmJigwLHAuc2V0U2VjdGlvblJlc3VsdEZvY3VzUnVsZXMpKG8sYSk7Zm9yKGxldCByPTA7cjx0Lmxlbmd0aDtyKyspe2xldCBvPW5bcl0sbD10W3JdO2lmKCFvfHwhbCl7Y29uc29sZS53YXJuKFwiW0RheWZvcmNlXVtEaWFnbm9zdGljc10gcm93LXNraXBwZWQgXCIrSlNPTi5zdHJpbmdpZnkoe3NlY3Rpb246ZS5sYWJlbCxpbmRleDpyLGhhc1JvdzohIW8saGFzUmVjb3JkOiEhbH0pKTtjb250aW51ZX1sZXQgcz1pPy5lbnN1cmVSb3cocixsKTtmb3IobGV0W3Qsbl1vZihpPy5lbWl0KCksZS5maWVsZHMuZW50cmllcygpKSl7dHJ5e2lmKCgwLHUuY2hlY2twb2ludCkoKSxhd2FpdCBlYShuLGwsbyksaSYmcyl7bGV0IHU9by5xdWVyeVNlbGVjdG9yKG4uc2VsZWN0b3IpO2lmKGFbcl0uY2hpbGRyZW5bdF0uJGlucHV0PXUsIXUpY29udGludWU7bGV0IGM9ZW4obixsKSxkPW51bGwhPWMmJlwiXCIhPT1TdHJpbmcoYykudHJpbSgpLHA9bi5pc0NoZWNrYm94P3U/LmNoZWNrZWQ9PT1lbyhjKTpuLnR5cGU9PT1mLkZJRUxEX1RZUEUuRFJPUERPV04mJnU/ISEoMCxnLmdldERheWZvcmNlRHJvcGRvd25DdXJyZW50VmFsdWUpKHUsbi5rZXkpOiEhdT8udmFsdWU/LnRyaW0oKTtjb25zb2xlLmluZm8oXCJbRGF5Zm9yY2VdW0RpYWdub3N0aWNzXSBmaWVsZC1yZXN1bHQgXCIrSlNPTi5zdHJpbmdpZnkoe3NlY3Rpb246ZS5sYWJlbCxpbmRleDpyLGZpZWxkOm4ua2V5LGhhc0Fuc3dlcjpkLGhhc1ZhbHVlOnAscm93Q29ubmVjdGVkOm8uaXNDb25uZWN0ZWR9KSksaS51cGRhdGVGaWVsZChzLG4ua2V5LGQ/U3RyaW5nKGMpOnZvaWQgMCx1JiZkJiZwP1wiZmlsbGVkXCI6XCJtaXNzZWRcIiksaS5lbWl0KCl9fWNhdGNoKGUpe3Rocm93IGkmJnMmJihpLnVwZGF0ZUZpZWxkKHMsbi5rZXksdm9pZCAwLGUgaW5zdGFuY2VvZiB1LlNraXBwZWRFcnJvcj9cInNraXBwZWRcIjpcIm1pc3NlZFwiKSxpLmVtaXQoKSksZX1hd2FpdCAoMCx1LmNhbmNlbGxhYmxlRGVsYXkpKDIwMCl9fX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im9wZXJhdGlvbnMuNDE0YzYwZjkuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);