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
})({"jYTtl":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\eightfold.js",
    "bundleId": "ca915cfdccf6303a",
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
var j = z(require("514afe8c0d72d2e0"));
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

},{"514afe8c0d72d2e0":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"6O5yv":[function(require,module,exports) {
/**
 * Parcel module id: 1Lzdy
 * Resolved path: src/contents/sites/eightfold.js
 * Dependencies:
 *   ./answer -> 0548q  =>  src/contents/sites/eightfold/answer.js
 *   ./operations -> 6ct1g  =>  src/contents/sites/eightfold/operations.js
 *   ./rules -> 6MF9I  =>  src/contents/sites/eightfold/form-rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillEightfoldPhoneCountryCodeWithProgress", ()=>v), n.export(r, "isEightfoldApplicationFormPage", ()=>x), n.export(r, "Eightfold", ()=>L);
var o = e("~contents/methods/answer"), i = e("~contents/methods/dom"), a = e("~contents/sites/base-filler"), l = e("~core/enums"), s = e("~core/xpath"), u = e("~store/autofillInfo"), c = e("./answer"), d = e("./operations"), f = e("./rules");
let p = new Set([
    "country code",
    "country phone code",
    "phone country code",
    "phone code",
    "phone country phone code"
]), m = new Set([
    "number",
    "phone",
    "phone number",
    "phone phone number",
    "phone device type",
    "phone phone device type",
    "phone extension",
    "phone phone extension"
]), h = 24, g = 2500, b = 4, y = 1;
async function v({ label: e1, source: t, fillCountryCode: r1, updateFilled: n, updateMissed: o }) {
    let i = t.trim();
    if (!i) return o(e1), !1;
    try {
        return await r1(i), n(e1), !0;
    } catch  {
        return o(e1), !1;
    }
}
function w() {
    try {
        return window.location.href;
    } catch  {
        return "";
    }
}
function S(e1) {
    try {
        let t = new URL(e1), r1 = t.pathname.replace(/\/+$/, "");
        return "/careers/apply" === r1 || /^\/careers\/apply\/[^/]+$/.test(r1) || /^\/careers\/job\/[^/]+\/apply$/.test(r1) || "/careerhub/explore/jobs/apply" === r1 && !!t.searchParams.get("pid");
    } catch  {
        return !1;
    }
}
_c = S;
function E(e1) {
    if (e1.querySelector("#careers-apply-form")) return !0;
    let t = Array.from(e1.querySelectorAll('[class*="field-"]'));
    return t.some((e1)=>{
        let t = e1.querySelector('label[id*="_label"], legend[id*="_legend"]');
        if (t) return !0;
        let r1 = Array.from(e1.querySelectorAll("input, textarea, select"));
        return r1.some((e1)=>{
            if ("INPUT" !== e1.tagName) return !0;
            let t = (e1.getAttribute("type") || e1.type || "text").toLowerCase();
            return ![
                "hidden",
                "file",
                "button",
                "submit"
            ].includes(t);
        });
    });
}
_c1 = E;
function x(e1 = {}) {
    let t = e1.url ?? w();
    if (S(t)) return !0;
    let r1 = e1.root ?? document;
    return E(r1);
}
function C(e1) {
    if (!e1) return "";
    let t = e1.$input;
    if (t instanceof HTMLInputElement) return (t.value || "").trim();
    if (t instanceof HTMLSelectElement) {
        let e1 = t.selectedOptions?.[0];
        return (e1?.textContent || t.value || "").trim();
    }
    return "";
}
_c2 = C;
function A(e1) {
    let t = e1.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    return [
        "us",
        "u s",
        "usa",
        "u s a",
        "united states",
        "united states of america"
    ].includes(t) ? "united states" : [
        "gb",
        "uk",
        "u k",
        "great britain"
    ].includes(t) ? "united kingdom" : t;
}
_c3 = A;
function k(e1, t) {
    let r1 = A(t);
    return "" !== r1 && A(e1) === r1;
}
function T(e1) {
    return e1.toLowerCase().replace(/\s+/g, " ").trim();
}
_c4 = T;
function F(e1) {
    let t = T(e1);
    return !!t && "select" !== t && "select one" !== t;
}
_c5 = F;
function I(e1, t) {
    if (!e1) return !1;
    if (!e1.options?.length) return F(T(t));
    let r1 = T(t);
    return !!F(r1) && e1.options.some((e1)=>{
        if (!F(e1)) return !1;
        let t = T(e1);
        return r1 === t;
    });
}
_c6 = I;
function j(e1, t) {
    if (!e1) return !1;
    let r1 = C(e1);
    return t(r1);
}
function D(e1, t) {
    if (!e1 || !t) return [];
    try {
        let r1 = (0, o.findValueInRecord)(e1.label, t), n = Array.isArray(r1) ? r1 : [
            r1
        ];
        return n.map((e1)=>String(e1).trim()).filter((e1)=>"" !== e1);
    } catch  {
        return [];
    }
}
_c7 = D;
function P(e1) {
    let t = e1.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    return t ? "yes" === t || t.startsWith("yes ") ? "yes" : "no" === t || t.startsWith("no ") ? "no" : "" : "";
}
_c8 = P;
function _(e1) {
    if (!e1) return "";
    let t = e1.$input;
    if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) return t.value || t.textContent || "";
    if (t instanceof HTMLSelectElement) return t.selectedOptions?.[0]?.textContent || t.value || "";
    if (e1.type === l.FIELD_TYPE.RADIOGROUP) {
        let t = e1.$radioParent, r1 = Array.from(t?.querySelectorAll('input[type="radio"]') || []), n = r1.find((e1)=>e1.checked);
        if (!n) return "";
        let o = n.id ? document.querySelector(`label[for="${n.id}"]`) : null;
        return o?.textContent?.trim() || n.value || "";
    }
    return t?.textContent || "";
}
class L extends a.BaseFiller {
    async refreshPhoneCountrySources() {
        let e1 = await (0, u.useAutofillInfoStore).getState().fetchAutofillInfo();
        return {
            autofillCountry: "string" == typeof e1?.location?.country ? e1.location.country : "",
            phoneCountrySources: {
                phoneCountryCode: e1?.phoneCountryCode,
                country: e1?.location?.country
            }
        };
    }
    formatAnswer(e1) {
        return (0, c.formatAnswer)(e1);
    }
    async filterNewComboQuestionRules(e1) {
        return 0 === e1.length ? e1 : (0, f.filterAlreadyCommittedEightfoldRules)(e1, this.progressTracker.fieldStatus.filledFields, await (0, f.getFormSnapshot)());
    }
    requestFormAnswers(e1, t, r1 = {}) {
        return super.requestFormAnswers((0, f.prepareEightfoldAnswerRequestRules)(e1), t, r1);
    }
    shouldSkipConditionalRule(e1) {
        let t = e1.__eightfoldConditional;
        if (!t) return !1;
        let r1 = _(t.parentRule) || D(t.parentRule, this.answer?.regular)[0] || "", n = P(r1);
        return !!n && n !== t.condition;
    }
    async waitForDynamicFieldsToSettle() {
        await (0, a.waitForComboQuestionsToSettle)(this.comboQuestionSettleDelayMs);
    }
    async waitForDynamicFieldMutation(e1) {
        return !(e1 <= 0) && "function" == typeof MutationObserver && !!document.body && await new Promise((t)=>{
            let r1 = !1, n = (e1)=>{
                r1 || (r1 = !0, o.disconnect(), clearTimeout(i), t(e1));
            }, o = new MutationObserver(()=>n(!0)), i = setTimeout(()=>n(!1), e1);
            o.observe(document.body, {
                childList: !0,
                subtree: !0,
                attributes: !0
            });
        });
    }
    async fillNewlyRevealedFields(e1, t, r1 = {}, n = ()=>!1) {
        this.hasPendingDynamicSelectHydration = !1;
        let o = await this.extractFormRules({
            shouldHydrateSelectOptions: ()=>!1
        }), i = this.getNewComboQuestionRules(e1, o);
        if (0 === i.length) return e1;
        let a = new Set, s = new Set, u = i.filter((e1)=>!n(e1)), c = i;
        for(let t = 0; t < b; t++){
            let t = new Set, r1 = new Set;
            for (let e1 of u){
                e1.$input && (t.add(e1.$input), a.add(e1.$input));
                let n = (0, d.normalizeEightfoldFieldLabel)(e1.label);
                r1.add(n), s.add(n);
            }
            let o = await this.extractFormRules({
                shouldHydrateSelectOptions: (e1, n)=>!!n && t.has(n) || r1.has((0, d.normalizeEightfoldFieldLabel)(e1))
            });
            if (0 === (u = (c = this.getNewComboQuestionRules(e1, o)).filter((e1)=>!n(e1) && e1.type === l.FIELD_TYPE.SELECT && (e1.$input ? !a.has(e1.$input) : !s.has((0, d.normalizeEightfoldFieldLabel)(e1.label))))).length) break;
        }
        this.hasPendingDynamicSelectHydration = u.length > 0, c = c.filter((e1)=>!!n(e1) || e1.type !== l.FIELD_TYPE.SELECT || (e1.$input ? a.has(e1.$input) : s.has((0, d.normalizeEightfoldFieldLabel)(e1.label))));
        let f = c.filter(n), h = c.filter((e1)=>!n(e1));
        for (let e1 of f)this.progressTracker.updateFieldRequiredStatus(e1), this.progressTracker.updateMissedProgress(e1.label);
        for (let e1 of h)this.progressTracker.updateFieldRequiredStatus(e1);
        if (0 === h.length) return [
            ...e1,
            ...c
        ];
        let g = await this.requestFormAnswers(h, t, {
            updateTimeTrace: !1
        });
        if ("string" == typeof g) return g;
        g && this.mergeComboQuestionAnswer(g, h);
        let y = h.filter((e1)=>p.has((0, d.normalizeEightfoldFieldLabel)(e1.label))), v = h.filter((e1)=>m.has((0, d.normalizeEightfoldFieldLabel)(e1.label))), w = h.filter((e1)=>{
            let t = (0, d.normalizeEightfoldFieldLabel)(e1.label);
            return !p.has(t) && !m.has(t);
        });
        return w.length > 0 && await this.fillRegularFields(w), await this.fillPhoneCountryCodeRules(y, r1), v.length > 0 && await this.fillRegularFields(v), [
            ...e1,
            ...c
        ];
    }
    async fillPhoneCountryCodeRules(e1, t) {
        0 !== e1.length && (this.taskQueue.add(async ()=>{
            for (let r1 of e1){
                if (r1.type !== l.FIELD_TYPE.SELECT) {
                    this.progressTracker.updateMissedProgress(r1.label);
                    continue;
                }
                let e1 = r1, n = e1.$input;
                if (!(n instanceof HTMLInputElement) || "combobox" !== n.getAttribute("role")) {
                    this.progressTracker.updateMissedProgress(r1.label);
                    continue;
                }
                let o = (0, c.getEightfoldPhoneCountryCodeSource)(r1, this.answer, t);
                await v({
                    label: r1.label,
                    source: o,
                    fillCountryCode: async (e1)=>await (0, d.fillCountryCodeCombobox)(n, e1),
                    updateFilled: (e1)=>this.progressTracker.updateFilledProgress(e1),
                    updateMissed: (e1)=>this.progressTracker.updateMissedProgress(e1)
                });
            }
        }), await this.taskQueue.run());
    }
    getFieldHandlers() {
        return {
            [l.FIELD_TYPE.TEXT]: (e1, t)=>{
                if (this.shouldSkipConditionalRule(e1)) return !1;
                let r1 = t?.[0];
                if (!r1) return;
                let n = String(e1?.label ?? "");
                return (0, d.fillInputTextField)((0, f.getEightfoldLiveTextInputByLabel)(n) || e1.$input, String(r1 ?? ""), n);
            },
            [l.FIELD_TYPE.SELECT]: (e1, t)=>!this.shouldSkipConditionalRule(e1) && (0, d.fillSelectField)(e1, t),
            [l.FIELD_TYPE.CHECKBOX]: (e1, t)=>!this.shouldSkipConditionalRule(e1) && (0, d.fillCheckboxField)(e1, t),
            [l.FIELD_TYPE.RADIOGROUP]: (e1, t)=>!this.shouldSkipConditionalRule(e1) && (0, d.fillRadioGroupFiled)(e1, t)
        };
    }
    async doFillForm(e1 = !1) {
        if (!x()) return this.progressTracker.clear(), this.taskQueue.clear(), this.progressTracker.generateFinalProgress();
        if (await this.initializeFillForm(), !x()) return this.progressTracker.generateFinalProgress();
        let { autofillCountry: t, phoneCountrySources: r1 } = await this.refreshPhoneCountrySources();
        if (await this.handleResumeUpload(), this.isResumeUploadConfirmed || console.warn("[Eightfold][Resume] upload completion was not confirmed; continuing field autofill"), !x()) return this.progressTracker.generateFinalProgress();
        console.info("[Eightfold][Country] applying after resume upload");
        let n = await (0, d.preFillCountry)(t);
        n && await (0, d.waitForCountryDependentFieldsToSettle)();
        let o = await this.extractFormRules(), i = o.find((e1)=>(0, d.isEightfoldCountryLabel)(e1.label)), a = j(i, (e1)=>k(e1, t));
        if (!a && i && i.type === l.FIELD_TYPE.SELECT && t.trim()) {
            console.info("[Eightfold][Country] retrying before dependent rule extraction");
            try {
                await (0, d.fillSelectField)(i, [], t), await (0, d.waitForCountryDependentFieldsToSettle)(), o = await this.extractFormRules(), console.info("[Eightfold][Country] dependent rules refreshed", {
                    dependentRules: o.filter((e1)=>[
                            "state",
                            "state province",
                            "province",
                            "region"
                        ].includes((0, d.normalizeEightfoldFieldLabel)(e1.label))).map((e1)=>({
                            label: e1.label,
                            type: e1.type,
                            optionCount: e1.type === l.FIELD_TYPE.SELECT && Array.isArray(e1.options) ? e1.options.length : 0
                        }))
                }), i = o.find((e1)=>(0, d.isEightfoldCountryLabel)(e1.label)), a = j(i, (e1)=>k(e1, t));
            } catch (e1) {
                console.warn("[Eightfold][Country] retry failed", {
                    reason: e1 instanceof Error && e1.name ? e1.name : "unknown_error"
                }), a = !1;
            }
        }
        this.progressTracker.setFieldsRequiredStatus(o);
        let s = o.find((e1)=>"gender" === (0, d.normalizeEightfoldFieldLabel)(e1.label)), u = i?.label || "Country";
        a ? this.progressTracker.updateFilledProgress(u) : this.progressTracker.updateMissedProgress(u);
        let c = (0, d.isMicrosoftEightfoldHost)() ? (e1)=>(0, d.isUnfillableMicrosoftLabel)(e1) : (e1)=>!1;
        o.filter((e1)=>c(e1.label)).forEach((e1)=>this.progressTracker.updateMissedProgress(e1.label));
        let f = o, b = o.filter((e1)=>!(0, d.isEightfoldCountryLabel)(e1.label) && !c(e1.label)), v = await this.fetchFormAnswers(b, e1);
        if ("string" == typeof v) return v;
        let w = o.filter((e1)=>{
            let t = (0, d.normalizeEightfoldFieldLabel)(e1.label);
            return !(0, d.isEightfoldCountryLabel)(e1.label) && !m.has(t) && !p.has(t) && !c(e1.label);
        });
        await this.fillRegularFields(w);
        let S = o.filter((e1)=>p.has((0, d.normalizeEightfoldFieldLabel)(e1.label)));
        await this.fillPhoneCountryCodeRules(S, r1);
        let E = o.filter((e1)=>m.has((0, d.normalizeEightfoldFieldLabel)(e1.label)));
        if (E.length > 0 && await this.fillRegularFields(E), s && s.type === l.FIELD_TYPE.SELECT) {
            let e1 = I(s, C(s));
            if (!e1) {
                let e1 = D(s, this.answer?.regular);
                e1.length > 0 ? (this.taskQueue.add(async ()=>{
                    try {
                        await (0, d.fillSelectField)(s, e1);
                        let t = I(s, C(s));
                        t ? this.progressTracker.updateFilledProgress("Gender") : this.progressTracker.updateMissedProgress("Gender");
                    } catch  {
                        this.progressTracker.updateMissedProgress("Gender");
                    }
                }), await this.taskQueue.run()) : this.progressTracker.updateMissedProgress("Gender");
            }
        }
        let A = Date.now() + g, T = !1, F = 0;
        for(let t = 0; t < h; t++){
            if (T) {
                let e1 = A - Date.now();
                if (e1 <= 0 || !await this.waitForDynamicFieldMutation(e1)) break;
            }
            await this.waitForDynamicFieldsToSettle();
            let t = await this.fillNewlyRevealedFields(f, e1, r1, (e1)=>c(e1.label));
            if ("string" == typeof t) return t;
            if (t.length === f.length) {
                if (this.hasPendingDynamicSelectHydration) {
                    if (F >= y) break;
                    F += 1, T = !1;
                } else F = 0, T = !0;
                continue;
            }
            f = t, A = Date.now() + g, T = !1, F = 0;
        }
        return await this.executeSiteSpecificSteps(f), this.finalizeFillForm();
    }
    async runPreFillForm() {
        this.taskQueue.add(d.preFillForm), await this.taskQueue.run();
    }
    async extractFormRules(e1 = {}) {
        return x() ? await (0, f.extractRules)(e1) : [];
    }
    getSiteName() {
        return "eightfold";
    }
    async handleResumeUpload() {
        if (!x()) return;
        this.isResumeUploadConfirmed = !0;
        let e1 = !1;
        this.disableUploadResume ? (await (0, d.removeResume)(), this.progressTracker.updateMissedProgress("Resume/CV")) : this.taskQueue.add(async ()=>{
            await (0, d.removeResume)();
            let t = document.querySelector('input[type="file"][accept*=".pdf"]');
            if (!t) return;
            e1 = !0;
            let r1 = await (0, o.fetchPdfAsBlob)(this.resumeInfo);
            (0, d.isMicrosoftEightfoldHost)() && t.files ? (t.files = r1.files, t.dispatchEvent(new Event("input", {
                bubbles: !0,
                cancelable: !1
            })), t.dispatchEvent(new Event("change", {
                bubbles: !0,
                cancelable: !1
            })), this.progressTracker.updateFieldRequiredStatus({
                label: "Resume/CV",
                required: !0
            }), this.progressTracker.updateFilledProgress("Resume/CV")) : await (0, i.uploadFiles)(t, r1, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress, "Resume/CV"), await this.handleDataPrivacyAgreement();
        }), await this.taskQueue.run(), e1 && (this.isResumeUploadConfirmed = await (0, d.waitForUploadComplete)(), this.isResumeUploadConfirmed || this.progressTracker.updateMissedProgress("Resume/CV"));
    }
    getSubmitButtonSelector() {
        return './/button[@type="submit" or contains(@class, "submit") or contains(text(), "Submit")]';
    }
    async getAutofillSnapshot(e1) {
        return await (0, f.getFormSnapshot)();
    }
    async getSubmitSnapshot() {
        return await (0, f.getFormSnapshot)();
    }
    submitApplication() {
        let e1 = './/button[@type="submit" or contains(@class, "submit")]', t = (0, s.getFirstOrderedNode)(e1);
        t && t?.click();
    }
    async handleDataPrivacyAgreement() {
        let e1 = (0, f.getDataPrivacyAgreementButton)();
        if (e1 && !(null === e1.offsetParent || e1.disabled || e1.hasAttribute("disabled"))) try {
            await (0, d.agreeDataPrivacyAgreement)(e1);
        } catch (e1) {}
    }
    constructor(...e1){
        super(...e1), this.hasComboQuestions = !0, this.comboQuestionMaxRounds = 4, this.comboQuestionSettleDelayMs = 600, this.comboQuestionQuietPeriodMs = 200, this.comboQuestionSettleMaxWaitMs = 1600, this.isResumeUploadConfirmed = !0, this.hasPendingDynamicSelectHydration = !1;
    }
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");
$RefreshReg$(_c7, "D");
$RefreshReg$(_c8, "P");

},{}]},["jYTtl","6O5yv"], "6O5yv", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LDBCQUEwQixNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQzFFLHFCQUFvQixLQUFNLElBQUksQ0FBQywyQkFBMkIsSUFBSSxDQUFDLGdCQUNqRSxxQkFBcUIsWUFBVztJQUNyQztJQUNBLDBCQUEwQjtRQUN4QixPQUFPO0lBQ1Q7SUFDQSxNQUFNLG9CQUFvQixFQUFDLEVBQUU7UUFDM0IsT0FBTyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYztJQUNuQztJQUNBLE1BQU0sb0JBQW9CO1FBQ3hCLE9BQU8sTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGVBQWM7SUFDbkM7SUFDQSxvQkFBb0I7UUFDbEIsSUFBSSxLQUFJLDJEQUNOLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFBRztRQUNqQyxLQUFLLEdBQUc7SUFDVjtJQUNBLE1BQU0sNkJBQTZCO1FBQ2pDLElBQUksS0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLDZCQUE0QjtRQUMxQyxJQUFJLE1BQUssQ0FBRSxDQUFBLFNBQVMsR0FBRSxnQkFBZ0IsR0FBRSxZQUFZLEdBQUUsYUFBYSxXQUFVLEdBQUksSUFBSTtZQUNuRixNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUseUJBQXdCLEVBQUc7UUFDekMsRUFBRSxPQUFPLElBQUcsQ0FBQztJQUNmO0lBQ0EsWUFBWSxHQUFHLEVBQUMsQ0FBRTtRQUNoQixLQUFLLElBQUksS0FBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUM1RSw2QkFBNkIsS0FBSyxJQUFJLENBQUMsNkJBQTZCLEtBQUssSUFBSSxDQUM3RSwrQkFBK0IsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxJQUFJLENBQzVFLG1DQUFtQyxDQUFDO0lBQ3pDO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTNjYWE2YmVjNWJiMTE2ODcuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvZWlnaHRmb2xkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGVpZ2h0Zm9sZC5qc1wiLFwiYnVuZGxlSWRcIjpcImNhOTE1Y2ZkY2NmNjMwM2FcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiAxTHpkeVxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvZWlnaHRmb2xkLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9hbnN3ZXIgLT4gMDU0OHEgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZWlnaHRmb2xkL2Fuc3dlci5qc1xyXG4gKiAgIC4vb3BlcmF0aW9ucyAtPiA2Y3QxZyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9laWdodGZvbGQvb3BlcmF0aW9ucy5qc1xyXG4gKiAgIC4vcnVsZXMgLT4gNk1GOUkgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZWlnaHRmb2xkL2Zvcm0tcnVsZXMuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2RvbSAtPiBoQTVRYSAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2RvbS5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlciAtPiA4eGo2RiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlci5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS94cGF0aCAtPiBhZ0U0dSAgPT4gIHNyYy9jb3JlL3hwYXRoLmpzXHJcbiAqICAgfnN0b3JlL2F1dG9maWxsSW5mbyAtPiA3OVZOUCAgPT4gIHNyYy9zdG9yZS9hdXRvZmlsbEluZm8uanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcImZpbGxFaWdodGZvbGRQaG9uZUNvdW50cnlDb2RlV2l0aFByb2dyZXNzXCIsICgpID0+IHYpLCBuLmV4cG9ydChcclxuICByLCBcImlzRWlnaHRmb2xkQXBwbGljYXRpb25Gb3JtUGFnZVwiLCAoKSA9PiB4KSwgbi5leHBvcnQociwgXCJFaWdodGZvbGRcIiwgKCkgPT4gTCk7XHJcbnZhciBvID0gZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxcclxuICBpID0gZShcIn5jb250ZW50cy9tZXRob2RzL2RvbVwiKSxcclxuICBhID0gZShcIn5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlclwiKSxcclxuICBsID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIHMgPSBlKFwifmNvcmUveHBhdGhcIiksXHJcbiAgdSA9IGUoXCJ+c3RvcmUvYXV0b2ZpbGxJbmZvXCIpLFxyXG4gIGMgPSBlKFwiLi9hbnN3ZXJcIiksXHJcbiAgZCA9IGUoXCIuL29wZXJhdGlvbnNcIiksXHJcbiAgZiA9IGUoXCIuL3J1bGVzXCIpO1xyXG5sZXQgcCA9IG5ldyBTZXQoW1wiY291bnRyeSBjb2RlXCIsIFwiY291bnRyeSBwaG9uZSBjb2RlXCIsIFwicGhvbmUgY291bnRyeSBjb2RlXCIsIFwicGhvbmUgY29kZVwiLFxyXG4gICAgXCJwaG9uZSBjb3VudHJ5IHBob25lIGNvZGVcIlxyXG4gIF0pLFxyXG4gIG0gPSBuZXcgU2V0KFtcIm51bWJlclwiLCBcInBob25lXCIsIFwicGhvbmUgbnVtYmVyXCIsIFwicGhvbmUgcGhvbmUgbnVtYmVyXCIsIFwicGhvbmUgZGV2aWNlIHR5cGVcIixcclxuICAgIFwicGhvbmUgcGhvbmUgZGV2aWNlIHR5cGVcIiwgXCJwaG9uZSBleHRlbnNpb25cIiwgXCJwaG9uZSBwaG9uZSBleHRlbnNpb25cIlxyXG4gIF0pLFxyXG4gIGggPSAyNCxcclxuICBnID0gMjUwMCxcclxuICBiID0gNCxcclxuICB5ID0gMTtcclxuYXN5bmMgZnVuY3Rpb24gdih7XHJcbiAgbGFiZWw6IGUsXHJcbiAgc291cmNlOiB0LFxyXG4gIGZpbGxDb3VudHJ5Q29kZTogcixcclxuICB1cGRhdGVGaWxsZWQ6IG4sXHJcbiAgdXBkYXRlTWlzc2VkOiBvXHJcbn0pIHtcclxuICBsZXQgaSA9IHQudHJpbSgpO1xyXG4gIGlmICghaSkgcmV0dXJuIG8oZSksICExO1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgcihpKSwgbihlKSwgITBcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBvKGUpLCAhMVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdygpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gXCJcIlxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUyhlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0ID0gbmV3IFVSTChlKSxcclxuICAgICAgciA9IHQucGF0aG5hbWUucmVwbGFjZSgvXFwvKyQvLCBcIlwiKTtcclxuICAgIHJldHVybiBcIi9jYXJlZXJzL2FwcGx5XCIgPT09IHIgfHwgL15cXC9jYXJlZXJzXFwvYXBwbHlcXC9bXi9dKyQvLnRlc3QocikgfHxcclxuICAgICAgL15cXC9jYXJlZXJzXFwvam9iXFwvW14vXStcXC9hcHBseSQvLnRlc3QocikgfHwgXCIvY2FyZWVyaHViL2V4cGxvcmUvam9icy9hcHBseVwiID09PSByICYmICEhdFxyXG4gICAgICAuc2VhcmNoUGFyYW1zLmdldChcInBpZFwiKVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuICExXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBFKGUpIHtcclxuICBpZiAoZS5xdWVyeVNlbGVjdG9yKFwiI2NhcmVlcnMtYXBwbHktZm9ybVwiKSkgcmV0dXJuICEwO1xyXG4gIGxldCB0ID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJmaWVsZC1cIl0nKSk7XHJcbiAgcmV0dXJuIHQuc29tZShlID0+IHtcclxuICAgIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKCdsYWJlbFtpZCo9XCJfbGFiZWxcIl0sIGxlZ2VuZFtpZCo9XCJfbGVnZW5kXCJdJyk7XHJcbiAgICBpZiAodCkgcmV0dXJuICEwO1xyXG4gICAgbGV0IHIgPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKTtcclxuICAgIHJldHVybiByLnNvbWUoZSA9PiB7XHJcbiAgICAgIGlmIChcIklOUFVUXCIgIT09IGUudGFnTmFtZSkgcmV0dXJuICEwO1xyXG4gICAgICBsZXQgdCA9IChlLmdldEF0dHJpYnV0ZShcInR5cGVcIikgfHwgZS50eXBlIHx8IFwidGV4dFwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gIVtcImhpZGRlblwiLCBcImZpbGVcIiwgXCJidXR0b25cIiwgXCJzdWJtaXRcIl0uaW5jbHVkZXModClcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24geChlID0ge30pIHtcclxuICBsZXQgdCA9IGUudXJsID8/IHcoKTtcclxuICBpZiAoUyh0KSkgcmV0dXJuICEwO1xyXG4gIGxldCByID0gZS5yb290ID8/IGRvY3VtZW50O1xyXG4gIHJldHVybiBFKHIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEMoZSkge1xyXG4gIGlmICghZSkgcmV0dXJuIFwiXCI7XHJcbiAgbGV0IHQgPSBlLiRpbnB1dDtcclxuICBpZiAodCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHJldHVybiAodC52YWx1ZSB8fCBcIlwiKS50cmltKCk7XHJcbiAgaWYgKHQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xyXG4gICAgbGV0IGUgPSB0LnNlbGVjdGVkT3B0aW9ucz8uWzBdO1xyXG4gICAgcmV0dXJuIChlPy50ZXh0Q29udGVudCB8fCB0LnZhbHVlIHx8IFwiXCIpLnRyaW0oKVxyXG4gIH1cclxuICByZXR1cm4gXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBBKGUpIHtcclxuICBsZXQgdCA9IGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0rL2csIFwiIFwiKS50cmltKCk7XHJcbiAgcmV0dXJuIFtcInVzXCIsIFwidSBzXCIsIFwidXNhXCIsIFwidSBzIGFcIiwgXCJ1bml0ZWQgc3RhdGVzXCIsIFwidW5pdGVkIHN0YXRlcyBvZiBhbWVyaWNhXCJdLmluY2x1ZGVzKHQpID9cclxuICAgIFwidW5pdGVkIHN0YXRlc1wiIDogW1wiZ2JcIiwgXCJ1a1wiLCBcInUga1wiLCBcImdyZWF0IGJyaXRhaW5cIl0uaW5jbHVkZXModCkgPyBcInVuaXRlZCBraW5nZG9tXCIgOiB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGsoZSwgdCkge1xyXG4gIGxldCByID0gQSh0KTtcclxuICByZXR1cm4gXCJcIiAhPT0gciAmJiBBKGUpID09PSByXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFQoZSkge1xyXG4gIHJldHVybiBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEYoZSkge1xyXG4gIGxldCB0ID0gVChlKTtcclxuICByZXR1cm4gISF0ICYmIFwic2VsZWN0XCIgIT09IHQgJiYgXCJzZWxlY3Qgb25lXCIgIT09IHRcclxufVxyXG5cclxuZnVuY3Rpb24gSShlLCB0KSB7XHJcbiAgaWYgKCFlKSByZXR1cm4gITE7XHJcbiAgaWYgKCFlLm9wdGlvbnM/Lmxlbmd0aCkgcmV0dXJuIEYoVCh0KSk7XHJcbiAgbGV0IHIgPSBUKHQpO1xyXG4gIHJldHVybiAhIUYocikgJiYgZS5vcHRpb25zLnNvbWUoZSA9PiB7XHJcbiAgICBpZiAoIUYoZSkpIHJldHVybiAhMTtcclxuICAgIGxldCB0ID0gVChlKTtcclxuICAgIHJldHVybiByID09PSB0XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaihlLCB0KSB7XHJcbiAgaWYgKCFlKSByZXR1cm4gITE7XHJcbiAgbGV0IHIgPSBDKGUpO1xyXG4gIHJldHVybiB0KHIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEQoZSwgdCkge1xyXG4gIGlmICghZSB8fCAhdCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgciA9ICgwLCBvLmZpbmRWYWx1ZUluUmVjb3JkKShlLmxhYmVsLCB0KSxcclxuICAgICAgbiA9IEFycmF5LmlzQXJyYXkocikgPyByIDogW3JdO1xyXG4gICAgcmV0dXJuIG4ubWFwKGUgPT4gU3RyaW5nKGUpLnRyaW0oKSkuZmlsdGVyKGUgPT4gXCJcIiAhPT0gZSlcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUChlKSB7XHJcbiAgbGV0IHQgPSBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldKy9nLCBcIiBcIikudHJpbSgpO1xyXG4gIHJldHVybiB0ID8gXCJ5ZXNcIiA9PT0gdCB8fCB0LnN0YXJ0c1dpdGgoXCJ5ZXMgXCIpID8gXCJ5ZXNcIiA6IFwibm9cIiA9PT0gdCB8fCB0LnN0YXJ0c1dpdGgoXCJubyBcIikgP1xyXG4gICAgXCJub1wiIDogXCJcIiA6IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gXyhlKSB7XHJcbiAgaWYgKCFlKSByZXR1cm4gXCJcIjtcclxuICBsZXQgdCA9IGUuJGlucHV0O1xyXG4gIGlmICh0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCB0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkgcmV0dXJuIHQudmFsdWUgfHwgdFxyXG4gICAgLnRleHRDb250ZW50IHx8IFwiXCI7XHJcbiAgaWYgKHQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkgcmV0dXJuIHQuc2VsZWN0ZWRPcHRpb25zPy5bMF0/LnRleHRDb250ZW50IHx8IHQudmFsdWUgfHwgXCJcIjtcclxuICBpZiAoZS50eXBlID09PSBsLkZJRUxEX1RZUEUuUkFESU9HUk9VUCkge1xyXG4gICAgbGV0IHQgPSBlLiRyYWRpb1BhcmVudCxcclxuICAgICAgciA9IEFycmF5LmZyb20odD8ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykgfHwgW10pLFxyXG4gICAgICBuID0gci5maW5kKGUgPT4gZS5jaGVja2VkKTtcclxuICAgIGlmICghbikgcmV0dXJuIFwiXCI7XHJcbiAgICBsZXQgbyA9IG4uaWQgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke24uaWR9XCJdYCkgOiBudWxsO1xyXG4gICAgcmV0dXJuIG8/LnRleHRDb250ZW50Py50cmltKCkgfHwgbi52YWx1ZSB8fCBcIlwiXHJcbiAgfVxyXG4gIHJldHVybiB0Py50ZXh0Q29udGVudCB8fCBcIlwiXHJcbn1cclxuY2xhc3MgTCBleHRlbmRzIGEuQmFzZUZpbGxlciB7XHJcbiAgYXN5bmMgcmVmcmVzaFBob25lQ291bnRyeVNvdXJjZXMoKSB7XHJcbiAgICBsZXQgZSA9IGF3YWl0ICgwLCB1LnVzZUF1dG9maWxsSW5mb1N0b3JlKS5nZXRTdGF0ZSgpLmZldGNoQXV0b2ZpbGxJbmZvKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhdXRvZmlsbENvdW50cnk6IFwic3RyaW5nXCIgPT0gdHlwZW9mIGU/LmxvY2F0aW9uPy5jb3VudHJ5ID8gZS5sb2NhdGlvbi5jb3VudHJ5IDogXCJcIixcclxuICAgICAgcGhvbmVDb3VudHJ5U291cmNlczoge1xyXG4gICAgICAgIHBob25lQ291bnRyeUNvZGU6IGU/LnBob25lQ291bnRyeUNvZGUsXHJcbiAgICAgICAgY291bnRyeTogZT8ubG9jYXRpb24/LmNvdW50cnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3JtYXRBbnN3ZXIoZSkge1xyXG4gICAgcmV0dXJuICgwLCBjLmZvcm1hdEFuc3dlcikoZSlcclxuICB9XHJcbiAgYXN5bmMgZmlsdGVyTmV3Q29tYm9RdWVzdGlvblJ1bGVzKGUpIHtcclxuICAgIHJldHVybiAwID09PSBlLmxlbmd0aCA/IGUgOiAoMCwgZi5maWx0ZXJBbHJlYWR5Q29tbWl0dGVkRWlnaHRmb2xkUnVsZXMpKGUsIHRoaXNcclxuICAgICAgLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1cy5maWxsZWRGaWVsZHMsIGF3YWl0ICgwLCBmLmdldEZvcm1TbmFwc2hvdCkoKSlcclxuICB9XHJcbiAgcmVxdWVzdEZvcm1BbnN3ZXJzKGUsIHQsIHIgPSB7fSkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnJlcXVlc3RGb3JtQW5zd2VycygoMCwgZi5wcmVwYXJlRWlnaHRmb2xkQW5zd2VyUmVxdWVzdFJ1bGVzKShlKSwgdCwgcilcclxuICB9XHJcbiAgc2hvdWxkU2tpcENvbmRpdGlvbmFsUnVsZShlKSB7XHJcbiAgICBsZXQgdCA9IGUuX19laWdodGZvbGRDb25kaXRpb25hbDtcclxuICAgIGlmICghdCkgcmV0dXJuICExO1xyXG4gICAgbGV0IHIgPSBfKHQucGFyZW50UnVsZSkgfHwgRCh0LnBhcmVudFJ1bGUsIHRoaXMuYW5zd2VyPy5yZWd1bGFyKVswXSB8fCBcIlwiLFxyXG4gICAgICBuID0gUChyKTtcclxuICAgIHJldHVybiAhIW4gJiYgbiAhPT0gdC5jb25kaXRpb25cclxuICB9XHJcbiAgYXN5bmMgd2FpdEZvckR5bmFtaWNGaWVsZHNUb1NldHRsZSgpIHtcclxuICAgIGF3YWl0ICgwLCBhLndhaXRGb3JDb21ib1F1ZXN0aW9uc1RvU2V0dGxlKSh0aGlzLmNvbWJvUXVlc3Rpb25TZXR0bGVEZWxheU1zKVxyXG4gIH1cclxuICBhc3luYyB3YWl0Rm9yRHluYW1pY0ZpZWxkTXV0YXRpb24oZSkge1xyXG4gICAgcmV0dXJuICEoZSA8PSAwKSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgJiYgISFkb2N1bWVudC5ib2R5ICYmXHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHQgPT4ge1xyXG4gICAgICAgIGxldCByID0gITEsXHJcbiAgICAgICAgICBuID0gZSA9PiB7XHJcbiAgICAgICAgICAgIHIgfHwgKHIgPSAhMCwgby5kaXNjb25uZWN0KCksIGNsZWFyVGltZW91dChpKSwgdChlKSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4gbighMCkpLFxyXG4gICAgICAgICAgaSA9IHNldFRpbWVvdXQoKCkgPT4gbighMSksIGUpO1xyXG4gICAgICAgIG8ub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XHJcbiAgICAgICAgICBjaGlsZExpc3Q6ICEwLFxyXG4gICAgICAgICAgc3VidHJlZTogITAsXHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOiAhMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxOZXdseVJldmVhbGVkRmllbGRzKGUsIHQsIHIgPSB7fSwgbiA9ICgpID0+ICExKSB7XHJcbiAgICB0aGlzLmhhc1BlbmRpbmdEeW5hbWljU2VsZWN0SHlkcmF0aW9uID0gITE7XHJcbiAgICBsZXQgbyA9IGF3YWl0IHRoaXMuZXh0cmFjdEZvcm1SdWxlcyh7XHJcbiAgICAgICAgc2hvdWxkSHlkcmF0ZVNlbGVjdE9wdGlvbnM6ICgpID0+ICExXHJcbiAgICAgIH0pLFxyXG4gICAgICBpID0gdGhpcy5nZXROZXdDb21ib1F1ZXN0aW9uUnVsZXMoZSwgbyk7XHJcbiAgICBpZiAoMCA9PT0gaS5sZW5ndGgpIHJldHVybiBlO1xyXG4gICAgbGV0IGEgPSBuZXcgU2V0LFxyXG4gICAgICBzID0gbmV3IFNldCxcclxuICAgICAgdSA9IGkuZmlsdGVyKGUgPT4gIW4oZSkpLFxyXG4gICAgICBjID0gaTtcclxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgYjsgdCsrKSB7XHJcbiAgICAgIGxldCB0ID0gbmV3IFNldCxcclxuICAgICAgICByID0gbmV3IFNldDtcclxuICAgICAgZm9yIChsZXQgZSBvZiB1KSB7XHJcbiAgICAgICAgZS4kaW5wdXQgJiYgKHQuYWRkKGUuJGlucHV0KSwgYS5hZGQoZS4kaW5wdXQpKTtcclxuICAgICAgICBsZXQgbiA9ICgwLCBkLm5vcm1hbGl6ZUVpZ2h0Zm9sZEZpZWxkTGFiZWwpKGUubGFiZWwpO1xyXG4gICAgICAgIHIuYWRkKG4pLCBzLmFkZChuKVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBvID0gYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKHtcclxuICAgICAgICBzaG91bGRIeWRyYXRlU2VsZWN0T3B0aW9uczogKGUsIG4pID0+ICEhbiAmJiB0LmhhcyhuKSB8fCByLmhhcygoMCwgZFxyXG4gICAgICAgICAgLm5vcm1hbGl6ZUVpZ2h0Zm9sZEZpZWxkTGFiZWwpKGUpKVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKDAgPT09ICh1ID0gKGMgPSB0aGlzLmdldE5ld0NvbWJvUXVlc3Rpb25SdWxlcyhlLCBvKSkuZmlsdGVyKGUgPT4gIW4oZSkgJiYgZS50eXBlID09PSBsXHJcbiAgICAgICAgICAuRklFTERfVFlQRS5TRUxFQ1QgJiYgKGUuJGlucHV0ID8gIWEuaGFzKGUuJGlucHV0KSA6ICFzLmhhcygoMCwgZFxyXG4gICAgICAgICAgICAubm9ybWFsaXplRWlnaHRmb2xkRmllbGRMYWJlbCkoZS5sYWJlbCkpKSkpLmxlbmd0aCkgYnJlYWtcclxuICAgIH1cclxuICAgIHRoaXMuaGFzUGVuZGluZ0R5bmFtaWNTZWxlY3RIeWRyYXRpb24gPSB1Lmxlbmd0aCA+IDAsIGMgPSBjLmZpbHRlcihlID0+ICEhbihlKSB8fCBlLnR5cGUgIT09XHJcbiAgICAgIGwuRklFTERfVFlQRS5TRUxFQ1QgfHwgKGUuJGlucHV0ID8gYS5oYXMoZS4kaW5wdXQpIDogcy5oYXMoKDAsIGRcclxuICAgICAgICAubm9ybWFsaXplRWlnaHRmb2xkRmllbGRMYWJlbCkoZS5sYWJlbCkpKSk7XHJcbiAgICBsZXQgZiA9IGMuZmlsdGVyKG4pLFxyXG4gICAgICBoID0gYy5maWx0ZXIoZSA9PiAhbihlKSk7XHJcbiAgICBmb3IgKGxldCBlIG9mIGYpIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMoZSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgIC51cGRhdGVNaXNzZWRQcm9ncmVzcyhlLmxhYmVsKTtcclxuICAgIGZvciAobGV0IGUgb2YgaCkgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyhlKTtcclxuICAgIGlmICgwID09PSBoLmxlbmd0aCkgcmV0dXJuIFsuLi5lLCAuLi5jXTtcclxuICAgIGxldCBnID0gYXdhaXQgdGhpcy5yZXF1ZXN0Rm9ybUFuc3dlcnMoaCwgdCwge1xyXG4gICAgICB1cGRhdGVUaW1lVHJhY2U6ICExXHJcbiAgICB9KTtcclxuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBnKSByZXR1cm4gZztcclxuICAgIGcgJiYgdGhpcy5tZXJnZUNvbWJvUXVlc3Rpb25BbnN3ZXIoZywgaCk7XHJcbiAgICBsZXQgeSA9IGguZmlsdGVyKGUgPT4gcC5oYXMoKDAsIGQubm9ybWFsaXplRWlnaHRmb2xkRmllbGRMYWJlbCkoZS5sYWJlbCkpKSxcclxuICAgICAgdiA9IGguZmlsdGVyKGUgPT4gbS5oYXMoKDAsIGQubm9ybWFsaXplRWlnaHRmb2xkRmllbGRMYWJlbCkoZS5sYWJlbCkpKSxcclxuICAgICAgdyA9IGguZmlsdGVyKGUgPT4ge1xyXG4gICAgICAgIGxldCB0ID0gKDAsIGQubm9ybWFsaXplRWlnaHRmb2xkRmllbGRMYWJlbCkoZS5sYWJlbCk7XHJcbiAgICAgICAgcmV0dXJuICFwLmhhcyh0KSAmJiAhbS5oYXModClcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gdy5sZW5ndGggPiAwICYmIGF3YWl0IHRoaXMuZmlsbFJlZ3VsYXJGaWVsZHModyksIGF3YWl0IHRoaXNcclxuICAgICAgLmZpbGxQaG9uZUNvdW50cnlDb2RlUnVsZXMoeSwgciksIHYubGVuZ3RoID4gMCAmJiBhd2FpdCB0aGlzLmZpbGxSZWd1bGFyRmllbGRzKHYpLCBbLi4uZSxcclxuICAgICAgICAuLi5jXHJcbiAgICAgIF1cclxuICB9XHJcbiAgYXN5bmMgZmlsbFBob25lQ291bnRyeUNvZGVSdWxlcyhlLCB0KSB7XHJcbiAgICAwICE9PSBlLmxlbmd0aCAmJiAodGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgciBvZiBlKSB7XHJcbiAgICAgICAgaWYgKHIudHlwZSAhPT0gbC5GSUVMRF9UWVBFLlNFTEVDVCkge1xyXG4gICAgICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3Moci5sYWJlbCk7XHJcbiAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZSA9IHIsXHJcbiAgICAgICAgICBuID0gZS4kaW5wdXQ7XHJcbiAgICAgICAgaWYgKCEobiBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHx8IFwiY29tYm9ib3hcIiAhPT0gbi5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhyLmxhYmVsKTtcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvID0gKDAsIGMuZ2V0RWlnaHRmb2xkUGhvbmVDb3VudHJ5Q29kZVNvdXJjZSkociwgdGhpcy5hbnN3ZXIsIHQpO1xyXG4gICAgICAgIGF3YWl0IHYoe1xyXG4gICAgICAgICAgbGFiZWw6IHIubGFiZWwsXHJcbiAgICAgICAgICBzb3VyY2U6IG8sXHJcbiAgICAgICAgICBmaWxsQ291bnRyeUNvZGU6IGFzeW5jIGUgPT4gYXdhaXQgKDAsIGQuZmlsbENvdW50cnlDb2RlQ29tYm9ib3gpKG4sIGUpLFxyXG4gICAgICAgICAgdXBkYXRlRmlsbGVkOiBlID0+IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKGUpLFxyXG4gICAgICAgICAgdXBkYXRlTWlzc2VkOiBlID0+IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGUpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpKVxyXG4gIH1cclxuICBnZXRGaWVsZEhhbmRsZXJzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW2wuRklFTERfVFlQRS5URVhUXTogKGUsIHQpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zaG91bGRTa2lwQ29uZGl0aW9uYWxSdWxlKGUpKSByZXR1cm4gITE7XHJcbiAgICAgICAgbGV0IHIgPSB0Py5bMF07XHJcbiAgICAgICAgaWYgKCFyKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG4gPSBTdHJpbmcoZT8ubGFiZWwgPz8gXCJcIik7XHJcbiAgICAgICAgcmV0dXJuICgwLCBkLmZpbGxJbnB1dFRleHRGaWVsZCkoKDAsIGYuZ2V0RWlnaHRmb2xkTGl2ZVRleHRJbnB1dEJ5TGFiZWwpKG4pIHx8IGVcclxuICAgICAgICAgIC4kaW5wdXQsIFN0cmluZyhyID8/IFwiXCIpLCBuKVxyXG4gICAgICB9LFxyXG4gICAgICBbbC5GSUVMRF9UWVBFLlNFTEVDVF06IChlLCB0KSA9PiAhdGhpcy5zaG91bGRTa2lwQ29uZGl0aW9uYWxSdWxlKGUpICYmICgwLCBkXHJcbiAgICAgICAgLmZpbGxTZWxlY3RGaWVsZCkoZSwgdCksXHJcbiAgICAgIFtsLkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiAoZSwgdCkgPT4gIXRoaXMuc2hvdWxkU2tpcENvbmRpdGlvbmFsUnVsZShlKSAmJiAoMCwgZFxyXG4gICAgICAgIC5maWxsQ2hlY2tib3hGaWVsZCkoZSwgdCksXHJcbiAgICAgIFtsLkZJRUxEX1RZUEUuUkFESU9HUk9VUF06IChlLCB0KSA9PiAhdGhpcy5zaG91bGRTa2lwQ29uZGl0aW9uYWxSdWxlKGUpICYmICgwLCBkXHJcbiAgICAgICAgLmZpbGxSYWRpb0dyb3VwRmlsZWQpKGUsIHQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGRvRmlsbEZvcm0oZSA9ICExKSB7XHJcbiAgICBpZiAoIXgoKSkgcmV0dXJuIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmNsZWFyKCksIHRoaXMudGFza1F1ZXVlLmNsZWFyKCksIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgIC5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKTtcclxuICAgIGlmIChhd2FpdCB0aGlzLmluaXRpYWxpemVGaWxsRm9ybSgpLCAheCgpKSByZXR1cm4gdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgLmdlbmVyYXRlRmluYWxQcm9ncmVzcygpO1xyXG4gICAgbGV0IHtcclxuICAgICAgYXV0b2ZpbGxDb3VudHJ5OiB0LFxyXG4gICAgICBwaG9uZUNvdW50cnlTb3VyY2VzOiByXHJcbiAgICB9ID0gYXdhaXQgdGhpcy5yZWZyZXNoUGhvbmVDb3VudHJ5U291cmNlcygpO1xyXG4gICAgaWYgKGF3YWl0IHRoaXMuaGFuZGxlUmVzdW1lVXBsb2FkKCksIHRoaXMuaXNSZXN1bWVVcGxvYWRDb25maXJtZWQgfHwgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiW0VpZ2h0Zm9sZF1bUmVzdW1lXSB1cGxvYWQgY29tcGxldGlvbiB3YXMgbm90IGNvbmZpcm1lZDsgY29udGludWluZyBmaWVsZCBhdXRvZmlsbFwiKSwgIVxyXG4gICAgICB4KCkpIHJldHVybiB0aGlzLnByb2dyZXNzVHJhY2tlci5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKTtcclxuICAgIGNvbnNvbGUuaW5mbyhcIltFaWdodGZvbGRdW0NvdW50cnldIGFwcGx5aW5nIGFmdGVyIHJlc3VtZSB1cGxvYWRcIik7XHJcbiAgICBsZXQgbiA9IGF3YWl0ICgwLCBkLnByZUZpbGxDb3VudHJ5KSh0KTtcclxuICAgIG4gJiYgYXdhaXQgKDAsIGQud2FpdEZvckNvdW50cnlEZXBlbmRlbnRGaWVsZHNUb1NldHRsZSkoKTtcclxuICAgIGxldCBvID0gYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKCksXHJcbiAgICAgIGkgPSBvLmZpbmQoZSA9PiAoMCwgZC5pc0VpZ2h0Zm9sZENvdW50cnlMYWJlbCkoZS5sYWJlbCkpLFxyXG4gICAgICBhID0gaihpLCBlID0+IGsoZSwgdCkpO1xyXG4gICAgaWYgKCFhICYmIGkgJiYgaS50eXBlID09PSBsLkZJRUxEX1RZUEUuU0VMRUNUICYmIHQudHJpbSgpKSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbyhcIltFaWdodGZvbGRdW0NvdW50cnldIHJldHJ5aW5nIGJlZm9yZSBkZXBlbmRlbnQgcnVsZSBleHRyYWN0aW9uXCIpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0ICgwLCBkLmZpbGxTZWxlY3RGaWVsZCkoaSwgW10sIHQpLCBhd2FpdCAoMCwgZFxyXG4gICAgICAgICAgLndhaXRGb3JDb3VudHJ5RGVwZW5kZW50RmllbGRzVG9TZXR0bGUpKCksIG8gPSBhd2FpdCB0aGlzLmV4dHJhY3RGb3JtUnVsZXMoKSwgY29uc29sZVxyXG4gICAgICAgICAgLmluZm8oXCJbRWlnaHRmb2xkXVtDb3VudHJ5XSBkZXBlbmRlbnQgcnVsZXMgcmVmcmVzaGVkXCIsIHtcclxuICAgICAgICAgICAgZGVwZW5kZW50UnVsZXM6IG8uZmlsdGVyKGUgPT4gW1wic3RhdGVcIiwgXCJzdGF0ZSBwcm92aW5jZVwiLCBcInByb3ZpbmNlXCIsIFwicmVnaW9uXCJdXHJcbiAgICAgICAgICAgICAgLmluY2x1ZGVzKCgwLCBkLm5vcm1hbGl6ZUVpZ2h0Zm9sZEZpZWxkTGFiZWwpKGUubGFiZWwpKSkubWFwKGUgPT4gKHtcclxuICAgICAgICAgICAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgICAgICAgICAgICB0eXBlOiBlLnR5cGUsXHJcbiAgICAgICAgICAgICAgb3B0aW9uQ291bnQ6IGUudHlwZSA9PT0gbC5GSUVMRF9UWVBFLlNFTEVDVCAmJiBBcnJheS5pc0FycmF5KGUub3B0aW9ucykgP1xyXG4gICAgICAgICAgICAgICAgZS5vcHRpb25zLmxlbmd0aCA6IDBcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICB9KSwgaSA9IG8uZmluZChlID0+ICgwLCBkLmlzRWlnaHRmb2xkQ291bnRyeUxhYmVsKShlLmxhYmVsKSksIGEgPSBqKGksIGUgPT4gayhlLCB0KSlcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIltFaWdodGZvbGRdW0NvdW50cnldIHJldHJ5IGZhaWxlZFwiLCB7XHJcbiAgICAgICAgICByZWFzb246IGUgaW5zdGFuY2VvZiBFcnJvciAmJiBlLm5hbWUgPyBlLm5hbWUgOiBcInVua25vd25fZXJyb3JcIlxyXG4gICAgICAgIH0pLCBhID0gITFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIuc2V0RmllbGRzUmVxdWlyZWRTdGF0dXMobyk7XHJcbiAgICBsZXQgcyA9IG8uZmluZChlID0+IFwiZ2VuZGVyXCIgPT09ICgwLCBkLm5vcm1hbGl6ZUVpZ2h0Zm9sZEZpZWxkTGFiZWwpKGUubGFiZWwpKSxcclxuICAgICAgdSA9IGk/LmxhYmVsIHx8IFwiQ291bnRyeVwiO1xyXG4gICAgYSA/IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKHUpIDogdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgLnVwZGF0ZU1pc3NlZFByb2dyZXNzKHUpO1xyXG4gICAgbGV0IGMgPSAoMCwgZC5pc01pY3Jvc29mdEVpZ2h0Zm9sZEhvc3QpKCkgPyBlID0+ICgwLCBkLmlzVW5maWxsYWJsZU1pY3Jvc29mdExhYmVsKShlKSA6IGUgPT5cclxuICAgICAgITE7XHJcbiAgICBvLmZpbHRlcihlID0+IGMoZS5sYWJlbCkpLmZvckVhY2goZSA9PiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhlLmxhYmVsKSk7XHJcbiAgICBsZXQgZiA9IG8sXHJcbiAgICAgIGIgPSBvLmZpbHRlcihlID0+ICEoMCwgZC5pc0VpZ2h0Zm9sZENvdW50cnlMYWJlbCkoZS5sYWJlbCkgJiYgIWMoZS5sYWJlbCkpLFxyXG4gICAgICB2ID0gYXdhaXQgdGhpcy5mZXRjaEZvcm1BbnN3ZXJzKGIsIGUpO1xyXG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHYpIHJldHVybiB2O1xyXG4gICAgbGV0IHcgPSBvLmZpbHRlcihlID0+IHtcclxuICAgICAgbGV0IHQgPSAoMCwgZC5ub3JtYWxpemVFaWdodGZvbGRGaWVsZExhYmVsKShlLmxhYmVsKTtcclxuICAgICAgcmV0dXJuICEoMCwgZC5pc0VpZ2h0Zm9sZENvdW50cnlMYWJlbCkoZS5sYWJlbCkgJiYgIW0uaGFzKHQpICYmICFwLmhhcyh0KSAmJiAhYyhlXHJcbiAgICAgICAgLmxhYmVsKVxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCB0aGlzLmZpbGxSZWd1bGFyRmllbGRzKHcpO1xyXG4gICAgbGV0IFMgPSBvLmZpbHRlcihlID0+IHAuaGFzKCgwLCBkLm5vcm1hbGl6ZUVpZ2h0Zm9sZEZpZWxkTGFiZWwpKGUubGFiZWwpKSk7XHJcbiAgICBhd2FpdCB0aGlzLmZpbGxQaG9uZUNvdW50cnlDb2RlUnVsZXMoUywgcik7XHJcbiAgICBsZXQgRSA9IG8uZmlsdGVyKGUgPT4gbS5oYXMoKDAsIGQubm9ybWFsaXplRWlnaHRmb2xkRmllbGRMYWJlbCkoZS5sYWJlbCkpKTtcclxuICAgIGlmIChFLmxlbmd0aCA+IDAgJiYgYXdhaXQgdGhpcy5maWxsUmVndWxhckZpZWxkcyhFKSwgcyAmJiBzLnR5cGUgPT09IGwuRklFTERfVFlQRS5TRUxFQ1QpIHtcclxuICAgICAgbGV0IGUgPSBJKHMsIEMocykpO1xyXG4gICAgICBpZiAoIWUpIHtcclxuICAgICAgICBsZXQgZSA9IEQocywgdGhpcy5hbnN3ZXI/LnJlZ3VsYXIpO1xyXG4gICAgICAgIGUubGVuZ3RoID4gMCA/ICh0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgKDAsIGQuZmlsbFNlbGVjdEZpZWxkKShzLCBlKTtcclxuICAgICAgICAgICAgbGV0IHQgPSBJKHMsIEMocykpO1xyXG4gICAgICAgICAgICB0ID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJHZW5kZXJcIikgOiB0aGlzXHJcbiAgICAgICAgICAgICAgLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIkdlbmRlclwiKVxyXG4gICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiR2VuZGVyXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpKSA6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiR2VuZGVyXCIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBBID0gRGF0ZS5ub3coKSArIGcsXHJcbiAgICAgIFQgPSAhMSxcclxuICAgICAgRiA9IDA7XHJcbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IGg7IHQrKykge1xyXG4gICAgICBpZiAoVCkge1xyXG4gICAgICAgIGxldCBlID0gQSAtIERhdGUubm93KCk7XHJcbiAgICAgICAgaWYgKGUgPD0gMCB8fCAhYXdhaXQgdGhpcy53YWl0Rm9yRHluYW1pY0ZpZWxkTXV0YXRpb24oZSkpIGJyZWFrXHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgdGhpcy53YWl0Rm9yRHluYW1pY0ZpZWxkc1RvU2V0dGxlKCk7XHJcbiAgICAgIGxldCB0ID0gYXdhaXQgdGhpcy5maWxsTmV3bHlSZXZlYWxlZEZpZWxkcyhmLCBlLCByLCBlID0+IGMoZS5sYWJlbCkpO1xyXG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCkgcmV0dXJuIHQ7XHJcbiAgICAgIGlmICh0Lmxlbmd0aCA9PT0gZi5sZW5ndGgpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNQZW5kaW5nRHluYW1pY1NlbGVjdEh5ZHJhdGlvbikge1xyXG4gICAgICAgICAgaWYgKEYgPj0geSkgYnJlYWs7XHJcbiAgICAgICAgICBGICs9IDEsIFQgPSAhMVxyXG4gICAgICAgIH0gZWxzZSBGID0gMCwgVCA9ICEwO1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgZiA9IHQsIEEgPSBEYXRlLm5vdygpICsgZywgVCA9ICExLCBGID0gMFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKGYpLCB0aGlzLmZpbmFsaXplRmlsbEZvcm0oKVxyXG4gIH1cclxuICBhc3luYyBydW5QcmVGaWxsRm9ybSgpIHtcclxuICAgIHRoaXMudGFza1F1ZXVlLmFkZChkLnByZUZpbGxGb3JtKSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgYXN5bmMgZXh0cmFjdEZvcm1SdWxlcyhlID0ge30pIHtcclxuICAgIHJldHVybiB4KCkgPyBhd2FpdCAoMCwgZi5leHRyYWN0UnVsZXMpKGUpIDogW11cclxuICB9XHJcbiAgZ2V0U2l0ZU5hbWUoKSB7XHJcbiAgICByZXR1cm4gXCJlaWdodGZvbGRcIlxyXG4gIH1cclxuICBhc3luYyBoYW5kbGVSZXN1bWVVcGxvYWQoKSB7XHJcbiAgICBpZiAoIXgoKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5pc1Jlc3VtZVVwbG9hZENvbmZpcm1lZCA9ICEwO1xyXG4gICAgbGV0IGUgPSAhMTtcclxuICAgIHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSA/IChhd2FpdCAoMCwgZC5yZW1vdmVSZXN1bWUpKCksIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgIC51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIlJlc3VtZS9DVlwiKSkgOiB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCAoMCwgZC5yZW1vdmVSZXN1bWUpKCk7XHJcbiAgICAgIGxldCB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl1bYWNjZXB0Kj1cIi5wZGZcIl0nKTtcclxuICAgICAgaWYgKCF0KSByZXR1cm47XHJcbiAgICAgIGUgPSAhMDtcclxuICAgICAgbGV0IHIgPSBhd2FpdCAoMCwgby5mZXRjaFBkZkFzQmxvYikodGhpcy5yZXN1bWVJbmZvKTtcclxuICAgICAgKDAsIGQuaXNNaWNyb3NvZnRFaWdodGZvbGRIb3N0KSgpICYmIHQuZmlsZXMgPyAodC5maWxlcyA9IHIuZmlsZXMsIHQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgIG5ldyBFdmVudChcImlucHV0XCIsIHtcclxuICAgICAgICAgICAgYnViYmxlczogITAsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6ICExXHJcbiAgICAgICAgICB9KSksIHQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG4gICAgICAgICAgYnViYmxlczogITAsXHJcbiAgICAgICAgICBjYW5jZWxhYmxlOiAhMVxyXG4gICAgICAgIH0pKSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyh7XHJcbiAgICAgICAgICBsYWJlbDogXCJSZXN1bWUvQ1ZcIixcclxuICAgICAgICAgIHJlcXVpcmVkOiAhMFxyXG4gICAgICAgIH0pLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIlJlc3VtZS9DVlwiKSkgOiBhd2FpdCAoMCwgaVxyXG4gICAgICAgICAgLnVwbG9hZEZpbGVzKSh0LCByLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzLCB0aGlzXHJcbiAgICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzLCBcIlJlc3VtZS9DVlwiKSwgYXdhaXQgdGhpc1xyXG4gICAgICAgIC5oYW5kbGVEYXRhUHJpdmFjeUFncmVlbWVudCgpXHJcbiAgICB9KSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIGUgJiYgKHRoaXMuaXNSZXN1bWVVcGxvYWRDb25maXJtZWQgPSBhd2FpdCAoMCwgZFxyXG4gICAgICAgIC53YWl0Rm9yVXBsb2FkQ29tcGxldGUpKCksIHRoaXMuaXNSZXN1bWVVcGxvYWRDb25maXJtZWQgfHwgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiUmVzdW1lL0NWXCIpKVxyXG4gIH1cclxuICBnZXRTdWJtaXRCdXR0b25TZWxlY3RvcigpIHtcclxuICAgIHJldHVybiAnLi8vYnV0dG9uW0B0eXBlPVwic3VibWl0XCIgb3IgY29udGFpbnMoQGNsYXNzLCBcInN1Ym1pdFwiKSBvciBjb250YWlucyh0ZXh0KCksIFwiU3VibWl0XCIpXSdcclxuICB9XHJcbiAgYXN5bmMgZ2V0QXV0b2ZpbGxTbmFwc2hvdChlKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgKDAsIGYuZ2V0Rm9ybVNuYXBzaG90KSgpXHJcbiAgfVxyXG4gIGFzeW5jIGdldFN1Ym1pdFNuYXBzaG90KCkge1xyXG4gICAgcmV0dXJuIGF3YWl0ICgwLCBmLmdldEZvcm1TbmFwc2hvdCkoKVxyXG4gIH1cclxuICBzdWJtaXRBcHBsaWNhdGlvbigpIHtcclxuICAgIGxldCBlID0gJy4vL2J1dHRvbltAdHlwZT1cInN1Ym1pdFwiIG9yIGNvbnRhaW5zKEBjbGFzcywgXCJzdWJtaXRcIildJyxcclxuICAgICAgdCA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGUpKGUpO1xyXG4gICAgdCAmJiB0Py5jbGljaygpXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZURhdGFQcml2YWN5QWdyZWVtZW50KCkge1xyXG4gICAgbGV0IGUgPSAoMCwgZi5nZXREYXRhUHJpdmFjeUFncmVlbWVudEJ1dHRvbikoKTtcclxuICAgIGlmIChlICYmICEobnVsbCA9PT0gZS5vZmZzZXRQYXJlbnQgfHwgZS5kaXNhYmxlZCB8fCBlLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpKSkgdHJ5IHtcclxuICAgICAgYXdhaXQgKDAsIGQuYWdyZWVEYXRhUHJpdmFjeUFncmVlbWVudCkoZSlcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKC4uLmUpIHtcclxuICAgIHN1cGVyKC4uLmUpLCB0aGlzLmhhc0NvbWJvUXVlc3Rpb25zID0gITAsIHRoaXMuY29tYm9RdWVzdGlvbk1heFJvdW5kcyA9IDQsIHRoaXNcclxuICAgICAgLmNvbWJvUXVlc3Rpb25TZXR0bGVEZWxheU1zID0gNjAwLCB0aGlzLmNvbWJvUXVlc3Rpb25RdWlldFBlcmlvZE1zID0gMjAwLCB0aGlzXHJcbiAgICAgIC5jb21ib1F1ZXN0aW9uU2V0dGxlTWF4V2FpdE1zID0gMTYwMCwgdGhpcy5pc1Jlc3VtZVVwbG9hZENvbmZpcm1lZCA9ICEwLCB0aGlzXHJcbiAgICAgIC5oYXNQZW5kaW5nRHluYW1pY1NlbGVjdEh5ZHJhdGlvbiA9ICExXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiZWlnaHRmb2xkLmNjZjYzMDNhLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);