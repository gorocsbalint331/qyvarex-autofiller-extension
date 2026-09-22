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
})({"hl1Vv":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\native-filler.ts",
    "bundleId": "349edaa227aab250",
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
var j = z(require("a6d2992dea29627"));
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

},{"a6d2992dea29627":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"dWVet":[function(require,module,exports) {
/**
 * Clean-TS BaseFiller \u2014 discover \u2192 answers \u2192 fill native fields \u2192 upload docs.
 * Replaces Parcel fill *operations* for sites with native HTML controls.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detectAtsSite", ()=>(0, _discoverFactory.detectAtsSite));
parcelHelpers.export(exports, "detectRegistryAts", ()=>(0, _discoverFactory.detectRegistryAts));
parcelHelpers.export(exports, "BaseFiller", ()=>BaseFiller);
parcelHelpers.export(exports, "CLEAN_TS_NATIVE_SITES", ()=>CLEAN_TS_NATIVE_SITES);
parcelHelpers.export(exports, "isCleanTsNativeSite", ()=>isCleanTsNativeSite);
parcelHelpers.export(exports, "runCleanTsFill", ()=>runCleanTsFill);
var _discoverFactory = require("~contents/crawler/discover-factory");
var _delay = require("~contents/crawler/utils/delay");
var _nativeAnswer = require("~contents/methods/native-answer");
var _nativeDom = require("~contents/methods/native-dom");
function findInputForLabel(label) {
    const want = label.replace(/\s*\*+\s*/g, " ").trim().toLowerCase();
    const labels = Array.from(document.querySelectorAll("label"));
    for (const lab of labels){
        const text = (lab.textContent || "").replace(/\s*\*+\s*/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
        if (text !== want && !text.startsWith(want)) continue;
        if (lab.htmlFor) {
            const byId = document.getElementById(lab.htmlFor);
            if (byId) return byId;
        }
        const nested = lab.querySelector("input, textarea, select");
        if (nested) return nested;
    }
    // aria-label / aria-labelledby fallback
    const controls = Array.from(document.querySelectorAll("input, textarea, select"));
    for (const el of controls){
        const aria = (el.getAttribute("aria-label") || "").toLowerCase();
        if (aria && aria.replace(/\s*\*/g, "").trim() === want) return el;
    }
    return null;
}
function collectRadios(nameOrEl) {
    const name = nameOrEl.name;
    if (name) return Array.from(document.querySelectorAll(`input[type="radio"][name="${CSS.escape(name)}"]`));
    const parent = nameOrEl.closest("fieldset, div, section") || document.body;
    return Array.from(parent.querySelectorAll('input[type="radio"]'));
}
function collectCheckboxes(el) {
    const parent = el.closest("fieldset, div, section") || document.body;
    return Array.from(parent.querySelectorAll('input[type="checkbox"]'));
}
class BaseFiller {
    site;
    hostname;
    href;
    constructor(opts){
        this.hostname = opts?.hostname || (typeof location !== "undefined" ? location.hostname : "");
        this.href = opts?.href || (typeof location !== "undefined" ? location.href : "");
        this.site = opts?.site || (0, _discoverFactory.detectAtsSite)(this.hostname, this.href);
    }
    discover(doc = document) {
        return (0, _discoverFactory.discoverFieldsForSite)(this.site, doc);
    }
    async fillField(field, value) {
        const el = findInputForLabel(field.label);
        if (!el) return false;
        if (field.type === "select" && el instanceof HTMLSelectElement) return (0, _nativeDom.fillSelectField)(el, value);
        if (field.type === "radio" && el instanceof HTMLInputElement) return (0, _nativeDom.fillRadioGroupField)(collectRadios(el), value);
        if (field.type === "checkbox" && el instanceof HTMLInputElement) {
            const n = await (0, _nativeDom.fillCheckboxField)(collectCheckboxes(el), value.split(/[,;]/).map((s)=>s.trim()).filter(Boolean));
            return n > 0;
        }
        if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
            await (0, _nativeDom.fillInputTextField)(el, value);
            return true;
        }
        return false;
    }
    async uploadResumeIfPresent() {
        const input = document.querySelector('input[type="file"][name*="cv" i], input[type="file"][name*="resume" i], input[type="file"][id*="cv" i], input[type="file"][id*="resume" i], input[type="file"]') || null;
        if (!input) return false;
        // Prefer CV/resume labelled input when multiple
        const wrappers = Array.from(document.querySelectorAll(".document-field-wrapper, [class*='document']"));
        let target = input;
        for (const w of wrappers){
            const label = (w.textContent || "").toLowerCase();
            if (/cover\s*letter|anschreiben/.test(label)) continue;
            if (/cv|resume|lebenslauf/.test(label)) {
                const f = w.querySelector('input[type="file"]');
                if (f) {
                    target = f;
                    break;
                }
            }
        }
        const file = await (0, _nativeAnswer.fetchResumeFile)();
        if (!file) return false;
        return (0, _nativeDom.uploadFiles)(target, file.file, file.fileName);
    }
    async uploadCoverLetterIfPresent() {
        const wrappers = Array.from(document.querySelectorAll(".document-field-wrapper, [class*='document']"));
        let input = null;
        for (const w of wrappers){
            const label = (w.textContent || "").toLowerCase();
            if (/cover\s*letter|anschreiben/.test(label)) {
                input = w.querySelector('input[type="file"]');
                if (input) break;
            }
        }
        if (!input) input = document.querySelector('input[type="file"][name*="cover" i], input[type="file"][id*="cover" i]');
        if (!input) return false;
        const file = await (0, _nativeAnswer.fetchCoverLetterFile)();
        if (!file) return false;
        return (0, _nativeDom.uploadFiles)(input, file.file, file.fileName);
    }
    async doFillForm(doc = document) {
        const fields = this.discover(doc);
        const answers = await (0, _nativeAnswer.fetchFormAnswers)(fields);
        const map = (0, _nativeAnswer.answerMap)(answers);
        const missed = [];
        let filled = 0;
        for (const field of fields){
            const value = (0, _nativeAnswer.lookupFieldAnswer)(map, field.label);
            if (!value) {
                missed.push(field.label);
                continue;
            }
            try {
                const ok = await this.fillField(field, value);
                if (ok) filled += 1;
                else missed.push(field.label);
            } catch  {
                missed.push(field.label);
            }
            await (0, _delay.delay)(40);
        }
        const resumeUploaded = await this.uploadResumeIfPresent();
        const coverLetterUploaded = await this.uploadCoverLetterIfPresent();
        return {
            site: this.site,
            discovered: fields.length,
            answered: answers.length,
            filled,
            missed,
            resumeUploaded,
            coverLetterUploaded
        };
    }
}
const CLEAN_TS_NATIVE_SITES = [
    "personio",
    "greenhouse",
    "lever",
    "generic",
    "ashby",
    "oraclecloud",
    "paycomonline-v3",
    "myworkday"
];
function isCleanTsNativeSite(site) {
    return CLEAN_TS_NATIVE_SITES.includes(site);
}
async function runCleanTsFill(opts) {
    const filler = new BaseFiller(opts);
    return filler.doFillForm();
}

},{"~contents/crawler/utils/delay":"1kcE1","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo","~contents/crawler/discover-factory":"dfxf9","~contents/methods/native-answer":"7WGaQ","~contents/methods/native-dom":"dMvar"}],"1kcE1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delay", ()=>delay);
parcelHelpers.export(exports, "executeSequentially", ()=>executeSequentially);
function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
async function executeSequentially(steps, defaultDelayMs = 80) {
    for (const step of steps)if (typeof step === "function") {
        await step();
        await delay(defaultDelayMs);
    } else {
        await step.func();
        await delay(step.delay ?? defaultDelayMs);
    }
}

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

},{}],"dfxf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FIELD_TYPE", ()=>(0, _types.FIELD_TYPE));
parcelHelpers.export(exports, "detectRegistryAts", ()=>(0, _detectRegistry.detectRegistryAts));
parcelHelpers.export(exports, "detectAtsSite", ()=>detectAtsSite);
parcelHelpers.export(exports, "discoverFieldsForSite", ()=>discoverFieldsForSite);
parcelHelpers.export(exports, "discoverFieldsFromLocation", ()=>discoverFieldsFromLocation);
var _discoverGreenhouse = require("~contents/crawler/discover-greenhouse");
var _discoverGeneric = require("~contents/crawler/discover-generic");
var _discoverLever = require("~contents/crawler/discover-lever");
var _discoverPersonio = require("~contents/crawler/discover-personio");
var _discoverWorkday = require("~contents/crawler/discover-workday");
var _detectRegistry = require("~contents/crawler/detect-registry");
var _types = require("~contents/crawler/types");
/** Map registry keys \u2192 Clean-TS discover adapters we own. */ const REGISTRY_TO_CLEAN = {
    personio: "personio",
    greenhouse: "greenhouse",
    lever: "lever",
    workday: "myworkday",
    myworkday: "myworkday",
    ashby: "ashby",
    oraclecloud: "oraclecloud",
    paycom: "paycomonline-v3",
    paycomonline: "paycomonline-v3"
};
function detectAtsSite(hostname, href = "") {
    const h = (hostname || "").toLowerCase();
    const u = (href || "").toLowerCase();
    // Fast paths (fixtures / common hosts)
    if (h.includes("personio.") || h.includes("jobs.personio")) return "personio";
    if (h.includes("greenhouse.io") || h.includes("boards.greenhouse") || u.includes("gh_jid=")) return "greenhouse";
    if (h.includes("lever.co") || h.includes("jobs.lever")) return "lever";
    if (h.includes("myworkdayjobs.com") || h.includes("workday.com")) return "myworkday";
    if (h.includes("ashbyhq.com") || h.includes("jobs.ashby")) return "ashby";
    if (h.includes("oraclecloud.com") || h.includes("fa.oracle")) return "oraclecloud";
    if (h.includes("paycomonline") || h.includes("paycom.com")) return "paycomonline-v3";
    const registered = (0, _detectRegistry.detectRegistryAts)(hostname, href);
    if (registered && REGISTRY_TO_CLEAN[registered]) return REGISTRY_TO_CLEAN[registered];
    // Unknown but registered ATS \u2192 generic native fill still helps
    if (registered) return "generic";
    return "generic";
}
function discoverFieldsForSite(site, doc) {
    switch(site){
        case "personio":
            return (0, _discoverPersonio.discoverPersonioFields)(doc);
        case "greenhouse":
            return (0, _discoverGreenhouse.discoverGreenhouseFields)(doc);
        case "lever":
            return (0, _discoverLever.discoverLeverFields)(doc);
        case "myworkday":
            return (0, _discoverWorkday.discoverWorkdayFields)(doc);
        case "ashby":
        case "oraclecloud":
        case "paycomonline-v3":
        default:
            return (0, _discoverGeneric.discoverGenericFields)(doc);
    }
}
function discoverFieldsFromLocation(doc, hostname, href = "") {
    const site = detectAtsSite(hostname, href);
    const registryId = (0, _detectRegistry.detectRegistryAts)(hostname, href);
    return {
        site,
        fields: discoverFieldsForSite(site, doc),
        registryId
    };
}

},{"~contents/crawler/discover-greenhouse":"215pX","~contents/crawler/discover-generic":"kYeSD","~contents/crawler/discover-lever":"7RG71","~contents/crawler/discover-personio":"kK4ch","~contents/crawler/discover-workday":"eFmw7","~contents/crawler/detect-registry":"8mwCD","~contents/crawler/types":"3nY6i","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"215pX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Greenhouse boards / embedded apply forms. */ parcelHelpers.export(exports, "discoverGreenhouseFields", ()=>discoverGreenhouseFields);
var _discoverGeneric = require("~contents/crawler/discover-generic");
function discoverGreenhouseFields(doc) {
    return (0, _discoverGeneric.discoverGenericFields)(doc, {
        preferRootSelector: "#application_form, form#application-form, form"
    });
}

},{"~contents/crawler/discover-generic":"kYeSD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"kYeSD":[function(require,module,exports) {
/**
 * Generic ATS form discovery \u2014 works for native label/input HTML.
 * Linkedom-safe (no DOM instanceof).
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "discoverGenericFields", ()=>discoverGenericFields);
const FIELD_SELECTOR = 'input:not([type="hidden"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]), textarea, select';
function collapseWs(text) {
    return (text || "").replace(/\s+/g, " ").trim();
}
function cleanLabel(text) {
    return collapseWs(text).replace(/\s*\*+\s*/g, " ").replace(/\(\s*(required|erforderlich|optional)\s*\)/gi, "").replace(/\s+/g, " ").trim();
}
function classStr(el) {
    const c = el.className;
    return typeof c === "string" ? c : c?.toString?.() || "";
}
function isVisible(el) {
    if (!el?.getAttribute) return false;
    if (el.getAttribute("aria-hidden") === "true" || el.hidden) return false;
    if (el.closest?.("[aria-hidden='true'], [hidden]")) return false;
    return true;
}
function isFillable(el) {
    const tag = (el.tagName || "").toUpperCase();
    if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") return false;
    if (el.disabled) return false;
    if (tag === "INPUT" && [
        "hidden",
        "file",
        "submit",
        "button",
        "reset",
        "image"
    ].includes(el.type || "")) return false;
    return isVisible(el);
}
function list(selRoot, selector) {
    const root = selRoot;
    const nodes = root.querySelectorAll?.(selector);
    return nodes ? Array.from(nodes) : [];
}
function pickFormRoot(doc, preferSelector) {
    const body = doc.body || doc.documentElement;
    if (preferSelector) {
        const preferred = doc.querySelector?.(preferSelector);
        if (preferred && isVisible(preferred)) return preferred;
    }
    const forms = list(doc, "form").filter(isVisible);
    let best = null;
    let bestScore = -1;
    for (const form of forms){
        const fields = list(form, FIELD_SELECTOR).filter(isFillable).length;
        const labels = list(form, "label, legend").filter(isVisible).length;
        const score = 10 * fields + labels;
        if (score > bestScore) {
            bestScore = score;
            best = form;
        }
    }
    return best || body;
}
function fieldContainer(el, root) {
    const maxSiblings = (el.tagName || "").toUpperCase() === "INPUT" && [
        "radio",
        "checkbox"
    ].includes(el.type || "") ? 12 : 4;
    let node = el.parentElement;
    let best = el.parentElement || root;
    const body = el.ownerDocument?.body ?? null;
    while(node && node !== root && node !== body){
        const classId = `${node.id || ""} ${classStr(node)}`;
        const siblingCount = list(node, FIELD_SELECTOR).filter(isFillable).length;
        const hasLabel = !!node.querySelector?.("label, legend");
        const looksLikeField = /field|form|question|group|row|item|control|wrapper|input/i.test(classId);
        if ((hasLabel || looksLikeField) && siblingCount <= maxSiblings) return node;
        if (hasLabel || looksLikeField) best = node;
        node = node.parentElement;
    }
    return best;
}
function labelForId(root, id) {
    if (!id) return null;
    const safe = id.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    try {
        const hit = root.querySelector?.(`label[for="${safe}"]`) || null;
        return hit && isVisible(hit) ? hit : null;
    } catch  {
        return null;
    }
}
function resolveLabel(el, container) {
    const byFor = el.id && (labelForId(container, el.id) || labelForId(el.ownerDocument, el.id));
    if (byFor) {
        const text = cleanLabel(byFor.textContent);
        if (text) return text;
    }
    const closestLabel = el.closest?.("label");
    if (closestLabel && isVisible(closestLabel)) {
        const text = cleanLabel(closestLabel.textContent);
        if (text) return text;
    }
    const aria = cleanLabel(el.getAttribute?.("aria-label"));
    if (aria && !/^(select|choose|option|yes|no|upload|browse)$/i.test(aria)) return aria;
    const labelledBy = (el.getAttribute?.("aria-labelledby") || "").split(/\s+/).filter(Boolean).map((id)=>el.ownerDocument?.getElementById?.(id) || null).filter((n)=>!!n && isVisible(n)).map((n)=>n.textContent).join(" ");
    const ariaText = cleanLabel(labelledBy);
    if (ariaText) return ariaText;
    const candidates = list(container, "label, legend, h1, h2, h3, h4, h5, h6, p, span, div").filter((n)=>{
        if (!isVisible(n)) return false;
        if (n.contains?.(el) && n.tagName !== "LABEL") return false;
        const t = cleanLabel(n.textContent);
        return !!t && !/^(select|choose|option|yes|no|upload|browse)$/i.test(t);
    });
    return cleanLabel(candidates[0]?.textContent);
}
function isRequired(el, container) {
    if (el.hasAttribute?.("required") || el.getAttribute?.("aria-required") === "true") return true;
    return /\*|required|erforderlich/i.test(container.textContent || "");
}
function selectOptions(select) {
    const opts = select.options ? Array.from(select.options) : [];
    return opts.map((o)=>collapseWs(o.textContent).replace(/\s*\*+\s*/g, " ").trim()).filter((t)=>t && !/^(select|please select|--)$/i.test(t));
}
function discoverGenericFields(doc, opts = {}) {
    const root = pickFormRoot(doc, opts.preferRootSelector);
    const nodes = list(root, FIELD_SELECTOR).filter(isFillable);
    const out = [];
    const seen = new Set();
    for (const el of nodes){
        if (seen.has(el)) continue;
        const tag = (el.tagName || "").toUpperCase();
        if (tag === "INPUT" && (el.type === "radio" || el.type === "checkbox")) {
            const container = fieldContainer(el, root);
            const group = list(container, `input[type="${el.type}"]`).filter(isFillable);
            const named = el.name || el.id ? group.filter((g)=>g.name === el.name || g.id === el.id) : group;
            for (const g of named)seen.add(g);
            const label = resolveLabel(el, container);
            if (!label) continue;
            const options = named.map((g)=>{
                const lab = g.id && labelForId(container, g.id)?.textContent || g.closest?.("label")?.textContent || g.getAttribute?.("aria-label") || g.value;
                return collapseWs(lab);
            }).filter(Boolean);
            out.push({
                type: el.type === "radio" ? "radio" : "checkbox",
                label,
                required: named.some((g)=>isRequired(g, container)),
                options
            });
            continue;
        }
        seen.add(el);
        const container = fieldContainer(el, root);
        const label = resolveLabel(el, container);
        if (!label) continue;
        if (tag === "SELECT") {
            out.push({
                type: "select",
                label,
                required: isRequired(el, container),
                options: selectOptions(el)
            });
            continue;
        }
        out.push({
            type: tag === "TEXTAREA" ? "textarea" : "text",
            label,
            required: isRequired(el, container)
        });
    }
    return out;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7RG71":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Lever hire apply forms. */ parcelHelpers.export(exports, "discoverLeverFields", ()=>discoverLeverFields);
var _discoverGeneric = require("~contents/crawler/discover-generic");
function discoverLeverFields(doc) {
    return (0, _discoverGeneric.discoverGenericFields)(doc, {
        preferRootSelector: ".application-form, form#application-form, form"
    });
}

},{"~contents/crawler/discover-generic":"kYeSD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"kK4ch":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Personio careers apply pages \u2014 native form fields. */ parcelHelpers.export(exports, "discoverPersonioFields", ()=>discoverPersonioFields);
var _discoverGeneric = require("~contents/crawler/discover-generic");
function discoverPersonioFields(doc) {
    return (0, _discoverGeneric.discoverGenericFields)(doc, {
        preferRootSelector: "form.application-form, form"
    });
}

},{"~contents/crawler/discover-generic":"kYeSD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"eFmw7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Workday apply \u2014 many widgets are custom; this discovers native inputs present
 * in the fixture / simplified pages. Full Workday ops stay in the engine bundle.
 */ parcelHelpers.export(exports, "discoverWorkdayFields", ()=>discoverWorkdayFields);
var _discoverGeneric = require("~contents/crawler/discover-generic");
function discoverWorkdayFields(doc) {
    return (0, _discoverGeneric.discoverGenericFields)(doc, {
        preferRootSelector: '[data-automation-id="applyFlow"], form, body'
    });
}

},{"~contents/crawler/discover-generic":"kYeSD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"8mwCD":[function(require,module,exports) {
/**
 * Resolve ATS id from hostname/href using the Jobright site registry.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Best-effort ATS id from SITE_REGISTRY (greenhouse, workday, \u2026).
 * Returns null when nothing matches.
 */ parcelHelpers.export(exports, "detectRegistryAts", ()=>detectRegistryAts);
var _supportedSites = require("~core/supported-sites");
function hostMatchesDomain(hostname, domain) {
    const h = hostname.toLowerCase();
    const d = domain.toLowerCase();
    return h === d || h.endsWith("." + d);
}
function hostMatchesPattern(hostname, pattern) {
    // MatchPattern-like: *://*.example.com/* or *://example.com/*
    const m = /^[^:]+:\/\/([^/]+)/.exec(pattern);
    if (!m) return false;
    let host = m[1].toLowerCase();
    if (host.startsWith("*.")) {
        const base = host.slice(2);
        return hostname === base || hostname.endsWith("." + base);
    }
    if (host === "*") return true;
    return hostname === host || hostname.endsWith("." + host);
}
function pathOk(pathname, href, site) {
    if (site.pathRegex) try {
        if (!new RegExp(site.pathRegex).test(pathname)) return false;
    } catch  {
        return false;
    }
    if (site.urlRegex) try {
        if (!new RegExp(site.urlRegex).test(href)) return false;
    } catch  {
        return false;
    }
    return true;
}
function detectRegistryAts(hostname, href = "") {
    const h = (hostname || "").toLowerCase();
    let pathname = "/";
    try {
        pathname = href ? new URL(href).pathname : "/";
    } catch  {
        pathname = "/";
    }
    let best = null;
    for (const [id, site] of Object.entries((0, _supportedSites.SITE_REGISTRY))){
        let score = 0;
        const domains = site.domains ?? [];
        const patterns = site.patterns ?? [];
        for (const d of domains)if (hostMatchesDomain(h, d)) score = Math.max(score, d.length + 10);
        for (const p of patterns)if (hostMatchesPattern(h, p)) score = Math.max(score, 20);
        if (score === 0) continue;
        if (!pathOk(pathname, href || `https://${h}/`, site)) continue;
        // Prefer constrained path matches
        if (site.pathRegex || site.urlRegex) score += 50;
        if (!best || score > best.score) best = {
            id,
            score
        };
    }
    return best?.id ?? null;
}

},{"~core/supported-sites":"4oKit","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"4oKit":[function(require,module,exports) {
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

},{"~core/match-patterns":"3dGUR","~core/site-registry.raw":"azMiv","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"3dGUR":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"azMiv":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"3nY6i":[function(require,module,exports) {
/** Shared field types for the clean-TS crawler (mirrors engine FIELD_TYPE subset). */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FIELD_TYPE", ()=>FIELD_TYPE);
const FIELD_TYPE = {
    TEXT: "text",
    TEXTAREA: "textarea",
    SELECT: "select",
    CHECKBOX: "checkbox",
    RADIO: "radio",
    RADIOGROUP: "radiogroup",
    DATE: "date",
    FILE: "file"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7WGaQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Strip punctuation (keep CJK) \u2014 oracle `removeSpecialCharacters`. */ parcelHelpers.export(exports, "removeSpecialCharacters", ()=>removeSpecialCharacters);
/** Label equality after stripping punctuation / asterisks / whitespace. */ parcelHelpers.export(exports, "isMatched", ()=>isMatched);
parcelHelpers.export(exports, "ensureArray", ()=>ensureArray);
/** Parse `YYYY-MM-DD` (or / .) into year / short month / day. */ parcelHelpers.export(exports, "parseDateParts", ()=>parseDateParts);
/**
 * Ask background getGptResults for answers mapped to discovered labels.
 */ parcelHelpers.export(exports, "fetchFormAnswers", ()=>fetchFormAnswers);
parcelHelpers.export(exports, "fetchResumeFile", ()=>fetchResumeFile);
parcelHelpers.export(exports, "fetchCoverLetterFile", ()=>fetchCoverLetterFile);
parcelHelpers.export(exports, "answerMap", ()=>answerMap);
parcelHelpers.export(exports, "lookupFieldAnswer", ()=>lookupFieldAnswer);
var _messaging = require("@plasmohq/messaging");
/** Loose messaging wrapper \u2014 extension BG handlers are not typed in this package. */ async function sendToBackground(msg) {
    return (0, _messaging.sendToBackground)(msg);
}
const NON_ALNUM_EXCEPT_CJK = /[^a-zA-Z0-9\s\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/g;
function removeSpecialCharacters(text) {
    return text.replace(NON_ALNUM_EXCEPT_CJK, "");
}
function isMatched(a, b) {
    if (!a || !b || typeof a !== "string" || typeof b !== "string") return false;
    const left = removeSpecialCharacters(a).replace(/\s*\*\s*/g, "").replace(/\s+/g, " ").toLowerCase().trim();
    const right = removeSpecialCharacters(b).replace(/\s*\*\s*/g, "").replace(/\s+/g, " ").toLowerCase().trim();
    return !!left && !!right && left === right;
}
function ensureArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}
function parseDateParts(raw) {
    try {
        if (!raw || typeof raw !== "string") return {
            year: "",
            month: "",
            day: ""
        };
        const normalized = raw.replace(/[/.]/g, "-").trim();
        const parts = normalized.split("-");
        if (parts.length < 2) return {
            year: "",
            month: "",
            day: ""
        };
        const [year, monthNum, day] = parts;
        const MONTHS = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        const monthIndex = Number(monthNum) - 1;
        const month = monthIndex >= 0 && monthIndex < 12 ? MONTHS[monthIndex] : "";
        return {
            year: year || "",
            month,
            day: day ? day.replace(/^0/, "") : ""
        };
    } catch  {
        return {
            year: "",
            month: "",
            day: ""
        };
    }
}
async function fetchFormAnswers(fields) {
    const elements = fields.map((f)=>({
            label: f.label,
            type: f.type,
            options: f.options || []
        }));
    const res = await sendToBackground({
        name: "getGptResults",
        body: {
            params: {
                elements,
                parser: "internal",
                source: "cleanTs",
                url: typeof location !== "undefined" ? location.href : ""
            }
        }
    });
    const list = res?.data?.fill_data_list;
    if (!Array.isArray(list)) return [];
    return list.map((row)=>({
            name: String(row?.name || ""),
            value: Array.isArray(row?.value) ? String(row.value[0] ?? "") : String(row?.value ?? "")
        })).filter((r)=>r.name && r.value);
}
async function fetchResumeFile() {
    const res = await sendToBackground({
        name: "getResumeBlob",
        body: {}
    });
    if (!res?.ok || !res.base64URL) return null;
    const file = await dataUrlToFile(res.base64URL, res.fileName || `resume.${res.extension || "pdf"}`, res.mimeType);
    return {
        file,
        fileName: file.name
    };
}
async function fetchCoverLetterFile() {
    const res = await sendToBackground({
        name: "getCoverLetterBlob",
        body: {}
    });
    if (!res?.ok || !res.base64URL) return null;
    const file = await dataUrlToFile(res.base64URL, res.fileName || `cover-letter.${res.extension || "pdf"}`, res.mimeType);
    return {
        file,
        fileName: file.name
    };
}
async function dataUrlToFile(dataUrl, fileName, mimeHint) {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([
        blob
    ], fileName, {
        type: mimeHint || blob.type || "application/pdf"
    });
}
function answerMap(answers) {
    const m = new Map();
    for (const a of answers){
        m.set(a.name.trim().toLowerCase(), a.value);
        m.set(a.name.replace(/\s*\*+\s*/g, " ").trim().toLowerCase(), a.value);
    }
    return m;
}
function lookupFieldAnswer(map, label) {
    const key = label.replace(/\s*\*+\s*/g, " ").trim().toLowerCase();
    return map.get(key) || map.get(label.trim().toLowerCase()) || null;
}

},{"@plasmohq/messaging":"fbyZa","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"fbyZa":[function(require,module,exports) {
/**
 * Parcel module id: 92GyB
 * Resolved path: @plasmohq/messaging.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   nanoid -> g2QpR  =>  nanoid.js
 *
 * npm-backed (@plasmohq/messaging). Generated by scripts/replace-remaining-vendors-with-npm.mjs \u2014 do not hand-edit.
 */ var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r);
var __jrReq = e;
var __mod = function() {
    var __cjsModule = {
        exports: {}
    };
    var module = __cjsModule;
    var exports = __cjsModule.exports;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all)=>{
        for(var name in all)__defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    };
    var __copyProps = (to, from, except, desc)=>{
        if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                get: ()=>from[key],
                enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
            });
        }
        return to;
    };
    var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    // scripts/_remaining-vendor-tmp/entry-92GyB.mjs
    var entry_92GyB_exports = {};
    __export(entry_92GyB_exports, {
        default: ()=>entry_92GyB_default,
        relay: ()=>E,
        relayMessage: ()=>M,
        sendToActiveContentScript: ()=>h,
        sendToBackground: ()=>p,
        sendToBackgroundViaRelay: ()=>u,
        sendToContentScript: ()=>x,
        sendViaRelay: ()=>S
    });
    module.exports = __toCommonJS(entry_92GyB_exports);
    // node_modules/@plasmohq/messaging/dist/index.js
    var dist_exports = {};
    __export(dist_exports, {
        relay: ()=>E,
        relayMessage: ()=>M,
        sendToActiveContentScript: ()=>h,
        sendToBackground: ()=>p,
        sendToBackgroundViaRelay: ()=>u,
        sendToContentScript: ()=>x,
        sendViaRelay: ()=>S
    });
    var import_nanoid = __jrReq("nanoid");
    var l = globalThis.browser?.tabs || globalThis.chrome?.tabs;
    var d = ()=>{
        let e1 = globalThis.browser?.runtime || globalThis.chrome?.runtime;
        if (!e1) throw new Error("Extension runtime is not available");
        return e1;
    };
    var i = ()=>{
        if (!l) throw new Error("Extension tabs API is not available");
        return l;
    };
    var m = async ()=>{
        let e1 = i(), [a] = await e1.query({
            active: true,
            currentWindow: true
        });
        return a;
    };
    var g = (e1, a)=>!a.__internal && e1.source === globalThis.window && e1.data.name === a.name && (a.relayId === void 0 || e1.data.relayId === a.relayId);
    var c = (e1, a, n = globalThis.window)=>{
        let r1 = async (s)=>{
            if (g(s, e1) && !s.data.relayed) {
                let o = {
                    name: e1.name,
                    relayId: e1.relayId,
                    body: s.data.body
                }, t = await a?.(o);
                n.postMessage({
                    name: e1.name,
                    relayId: e1.relayId,
                    instanceId: s.data.instanceId,
                    body: t,
                    relayed: true
                }, {
                    targetOrigin: e1.targetOrigin || "/"
                });
            }
        };
        return n.addEventListener("message", r1), ()=>n.removeEventListener("message", r1);
    };
    var y = (e1, a = globalThis.window)=>new Promise((n, r1)=>{
            let s = (0, import_nanoid.nanoid)(), o = new AbortController();
            a.addEventListener("message", (t)=>{
                g(t, e1) && t.data.relayed && t.data.instanceId === s && (n(t.data.body), o.abort());
            }, {
                signal: o.signal
            }), a.postMessage({
                ...e1,
                instanceId: s
            }, {
                targetOrigin: e1.targetOrigin || "/"
            });
        });
    var p = async (e1)=>d().sendMessage(e1.extensionId ?? null, e1);
    var x = async (e1)=>{
        let a = typeof e1.tabId == "number" ? e1.tabId : (await m())?.id;
        if (!a) throw new Error("No active tab found to send message to.");
        return i().sendMessage(a, e1);
    };
    var h = x;
    var M = (e1)=>c(e1, p);
    var E = M;
    var u = y;
    var S = u;
    // scripts/_remaining-vendor-tmp/entry-92GyB.mjs
    var entry_92GyB_default = dist_exports;
    var out = module.exports;
    if (out && typeof out === "object" && out.__esModule && "default" in out) {
        var names = Object.keys(out).filter(function(k) {
            return k !== "default" && k !== "__esModule";
        });
        if (names.length) return out;
        return out.default;
    }
    return out;
}();
if (typeof __mod === "function") {
    helpers.export(r, "default", function() {
        return __mod;
    });
    r.default = __mod;
} else if (__mod && typeof __mod === "object") {
    for(var __k in __mod)if (Object.prototype.hasOwnProperty.call(__mod, __k) && __k !== "__esModule") (function(key) {
        helpers.export(r, key, function() {
            return __mod[key];
        });
        r[key] = __mod[key];
    })(__k);
    r.default = __mod.default !== undefined ? __mod.default : __mod;
    if (__mod.default !== undefined) helpers.export(r, "default", function() {
        return __mod.default;
    });
} else {
    r.default = __mod;
    helpers.export(r, "default", function() {
        return __mod;
    });
}

},{}],"dMvar":[function(require,module,exports) {
/**
 * Shared DOM fill primitives for clean-TS autofill.
 *
 * Lives in the extension (`src/contents/methods`).
 * Parcel reference: engine/helper-app/src/contents/methods/dom.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Dispatch typed DOM events (mousedown/click/focus/input/\u2026) like the oracle. */ parcelHelpers.export(exports, "triggerEvents", ()=>triggerEvents);
parcelHelpers.export(exports, "fillInputTextField", ()=>fillInputTextField);
/**
 * Oracle-shaped checkbox/radio group fill (`field.$checkboxs`, `field.label`).
 * Returns `false` on ambiguous multi-match; otherwise void/undefined like the oracle.
 */ parcelHelpers.export(exports, "fillCheckBoxesField", ()=>fillCheckBoxesField);
/** Simple label-list fill used by BaseFiller / Personio. */ parcelHelpers.export(exports, "fillCheckboxField", ()=>fillCheckboxField);
/**
 * Focus a <select> and pick the first option matching any answer via isMatched.
 * Also accepts a single string (BaseFiller / Personio).
 */ parcelHelpers.export(exports, "fillSelectField", ()=>fillSelectField);
/** Exact option `.text` or `.title` match (no fuzzy). */ parcelHelpers.export(exports, "fillOriginSelectField", ()=>fillOriginSelectField);
parcelHelpers.export(exports, "fillRadioGroupField", ()=>fillRadioGroupField);
parcelHelpers.export(exports, "fillSingleCheckbox", ()=>fillSingleCheckbox);
/**
 * Attach a File / Blob to a file input (clean-TS).
 * Oracle also accepts a prepared `{ files: FileList }` + progress callbacks.
 */ parcelHelpers.export(exports, "uploadFiles", ()=>uploadFiles);
/** Tell the top frame the agent covered letter status changed. */ parcelHelpers.export(exports, "postCoverLetterStatus", ()=>postCoverLetterStatus);
parcelHelpers.export(exports, "fillDefaultInputField", ()=>(0, _input.fillDefaultInputField));
parcelHelpers.export(exports, "fillCheckbox", ()=>(0, _checkbox.fillCheckbox));
parcelHelpers.export(exports, "delay", ()=>(0, _delay.delay));
var _input = require("~contents/crawler/utils/input");
var _checkbox = require("~contents/crawler/utils/checkbox");
var _delay = require("~contents/crawler/utils/delay");
var _choiceMatch = require("~contents/methods/choice-match");
var _checkboxLabel = require("~contents/methods/checkbox-label");
var _nativeAnswer = require("~contents/methods/native-answer");
var _enums = require("~core/enums");
/** Aliases when answers map true/false / job boards to visible labels. */ const ANSWER_ALIAS = {
    true: "yes",
    false: "no",
    linkedin: "linkedin.com",
    indeed: "indeed.com"
};
function triggerEvents(el, eventNames = [
    "input",
    "change",
    "blur"
]) {
    if (!el) return;
    for (const name of eventNames){
        let ev;
        if ((name === "mousedown" || name === "mouseup" || name === "click") && typeof MouseEvent === "function") ev = new MouseEvent(name, {
            bubbles: true,
            cancelable: true
        });
        else if ((name === "focus" || name === "blur") && typeof FocusEvent === "function") ev = new FocusEvent(name, {
            bubbles: true,
            cancelable: true
        });
        else if (name === "input" && typeof InputEvent === "function") {
            const value = "value" in el && typeof el.value === "string" ? el.value : null;
            ev = new InputEvent(name, {
                bubbles: true,
                cancelable: true,
                data: value,
                inputType: "insertText"
            });
        } else ev = new Event(name, {
            bubbles: true,
            cancelable: true
        });
        el.dispatchEvent(ev);
    }
}
async function fillInputTextField(input, value) {
    await (0, _input.fillDefaultInputField)(input, value);
}
function choiceLabelText(inputEl) {
    const fromControl = (0, _checkboxLabel.normalizeRadioCheckText)((0, _checkboxLabel.getRadioCheckText)(inputEl));
    if (fromControl) return fromControl;
    return "";
}
function labelMatchesAnswer(labelText, answer) {
    const normalized = typeof answer === "string" || typeof answer === "number" ? String(answer).toLowerCase().trim() : "";
    return !!normalized && (0, _choiceMatch.isExactChoiceMatch)(labelText, normalized);
}
/**
 * Decide whether a single checkbox should be checked given answer list + field label.
 * Handles yes/no, "have read", and "current" employment heuristics.
 */ async function maybeCheckSingleBox(inputEl, answers, fieldLabel, fillFn = (0, _checkbox.fillCheckbox)) {
    const labelText = choiceLabelText(inputEl);
    if (!labelText) return;
    if (answers.some((a)=>labelMatchesAnswer(labelText, a))) {
        await fillFn(inputEl, true);
        return;
    }
    const first = String(answers[0] ?? "").toLowerCase();
    const label = String(fieldLabel ?? "").toLowerCase();
    const shouldCheck = first === "true" && labelText === "yes" || first === "false" && labelText === "no" || labelText.includes("have read") && first === "true" || (0, _nativeAnswer.isMatched)(labelText, fieldLabel ?? "") && first === "true" || first === "true" && (labelText.includes("current") || label.includes("current")) || label.includes("current") && first === "true";
    if (shouldCheck) await fillFn(inputEl, true);
}
async function fillCheckBoxesField(field, rawAnswers, fillFn = (0, _checkbox.fillCheckbox)) {
    // Back-compat: BaseFiller passes (boxes[], string[])
    if (Array.isArray(field) && !field.$checkboxs) return fillCheckboxField(field, rawAnswers);
    const answers = (Array.isArray(rawAnswers) ? rawAnswers : [
        rawAnswers
    ]).filter((a)=>(0, _choiceMatch.normalizeChoiceText)(a));
    if (!answers.length) return false;
    const boxField = field;
    const inputs = Array.from(boxField.$checkboxs ?? []);
    const isMultiOrRadio = inputs.length > 1 || inputs.some((el)=>el.type === "radio");
    if (isMultiOrRadio) {
        const selected = new Set();
        const allRadios = inputs.every((el)=>el.type === "radio");
        for (const answer of answers){
            const want = (0, _choiceMatch.normalizeChoiceText)(answer);
            if (!want) continue;
            const exactHits = inputs.filter((el)=>(0, _choiceMatch.isExactChoiceMatch)(choiceLabelText(el), want));
            if (exactHits.length > 1) return false;
            let match = (0, _choiceMatch.findExactChoice)(inputs, want, choiceLabelText);
            if (!match) {
                const alias = ANSWER_ALIAS[want];
                if (alias) {
                    const aliasHits = inputs.filter((el)=>(0, _choiceMatch.isExactChoiceMatch)(choiceLabelText(el), alias));
                    if (aliasHits.length > 1) return false;
                    match = (0, _choiceMatch.findExactChoice)(inputs, alias, choiceLabelText);
                }
            }
            if (!match) {
                if (allRadios) continue;
                return false;
            }
            selected.add(match);
            if (allRadios) break;
        }
        if (!selected.size) return false;
        for (const el of selected)await fillFn(el, true);
        return;
    }
    for (const box of inputs)await maybeCheckSingleBox(box, answers, boxField.label, fillFn);
}
async function fillCheckboxField(boxes, values) {
    let filled = 0;
    for (const want of values){
        const match = (0, _choiceMatch.findExactChoice)(boxes, want, choiceLabelText);
        if (match) {
            await (0, _checkbox.fillCheckbox)(match, true);
            filled += 1;
        }
    }
    return filled;
}
async function fillSelectField(select, answers) {
    if (!select) return false;
    const list = (Array.isArray(answers) ? answers : [
        answers
    ]).filter(Boolean);
    if (!list.length) return false;
    const focusEv = new FocusEvent("focus", {
        bubbles: true,
        cancelable: true,
        view: window
    });
    select.dispatchEvent(focusEv);
    select.focus();
    if (select.options?.length) for(let i = 0; i < select.options.length; i++){
        const opt = select.options[i];
        if (opt?.value && opt.text && list.some((a)=>(0, _nativeAnswer.isMatched)(a, opt.text) || (0, _choiceMatch.isExactChoiceMatch)(opt.text, a))) {
            opt.click();
            opt.dispatchEvent(new MouseEvent("mousedown", {
                bubbles: true,
                cancelable: true
            }));
            opt.dispatchEvent(new MouseEvent("mouseup", {
                bubbles: true,
                cancelable: true
            }));
            opt.selected = true;
            select.dispatchEvent(new Event("change", {
                bubbles: true,
                cancelable: true
            }));
            select.blur();
            return true;
        }
    }
    select.blur();
    return false;
}
function fillOriginSelectField(select, values) {
    if (!select?.options) return false;
    const wants = (Array.isArray(values) ? values : [
        values
    ]).map(String);
    for (const want of wants)for(let i = 0; i < select.options.length; i++){
        const opt = select.options[i];
        if (opt.text === want || opt.title === want) {
            opt.selected = true;
            select.dispatchEvent(new Event("change", {
                bubbles: true
            }));
            return true;
        }
    }
    return false;
}
async function fillRadioGroupField(radios, value) {
    const want = Array.isArray(value) ? value[0] : value;
    if (!want) return false;
    const match = (0, _choiceMatch.findExactChoice)(radios, want, choiceLabelText);
    if (!match) return false;
    if (!match.checked) {
        match.click();
        match.checked = true;
        match.dispatchEvent(new Event("change", {
            bubbles: true
        }));
        match.dispatchEvent(new Event("click", {
            bubbles: true
        }));
    }
    return true;
}
async function fillSingleCheckbox(el, checked = true) {
    await (0, _checkbox.fillCheckbox)(el, checked);
}
async function uploadFiles(input, file, fileName) {
    if (!input || input.type !== "file") return false;
    const blob = file instanceof File ? file : new File([
        file
    ], fileName, {
        type: file.type || "application/pdf"
    });
    const dt = new DataTransfer();
    dt.items.add(blob);
    input.files = dt.files;
    input.dispatchEvent(new Event("input", {
        bubbles: true
    }));
    input.dispatchEvent(new Event("change", {
        bubbles: true
    }));
    await (0, _delay.delay)(100);
    return true;
}
function postCoverLetterStatus(status) {
    window.top?.postMessage({
        type: (0, _enums.MESSAGE_EVENTS).agentCheckCoverLetter,
        status
    }, {
        targetOrigin: "*"
    });
}

},{"~contents/crawler/utils/input":"gm6tm","~contents/crawler/utils/checkbox":"1eAtY","~contents/crawler/utils/delay":"1kcE1","~contents/methods/choice-match":"hYmUM","~contents/methods/checkbox-label":"jYmCR","~core/enums":"7a65S","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo","~contents/methods/native-answer":"7WGaQ"}],"gm6tm":[function(require,module,exports) {
/**
 * Native input fill with React-compatible value setter (engine input.js port).
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillDefaultInputField", ()=>fillDefaultInputField);
async function fillDefaultInputField(el, value) {
    if (!el) {
        console.error("[clean-fill] element is null");
        return;
    }
    el.focus();
    const proto = Object.getPrototypeOf(el);
    const desc = Object.getOwnPropertyDescriptor(proto, "value");
    if (desc?.set) desc.set.call(el, value);
    else el.value = value;
    el.dispatchEvent(new Event("input", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new Event("change", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new Event("blur"));
    el.dispatchEvent(new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        key: "Enter",
        keyCode: 13
    }));
    el.dispatchEvent(new KeyboardEvent("keyup", {
        bubbles: true,
        cancelable: true,
        key: "Enter",
        keyCode: 13
    }));
    el.blur();
    el.dispatchEvent(new FocusEvent("focus", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new Event("change", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new FocusEvent("blur", {
        bubbles: true,
        cancelable: true
    }));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"1eAtY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillCheckbox", ()=>fillCheckbox);
parcelHelpers.export(exports, "fillCheckboxesByLabels", ()=>fillCheckboxesByLabels);
parcelHelpers.export(exports, "fillRadioByLabel", ()=>fillRadioByLabel);
var _choiceMatch = require("~contents/methods/choice-match");
var _delay = require("~contents/crawler/utils/delay");
async function fillCheckbox(el, checked = true) {
    if (!el) return;
    el.focus();
    if (el.checked !== checked) {
        el.click();
        await (0, _delay.delay)(30);
    }
    el.checked = checked;
    el.dispatchEvent(new Event("change", {
        bubbles: true
    }));
    const role = el.closest('[role="checkbox"]');
    if (role) role.click();
}
async function fillCheckboxesByLabels(checkboxes, wants) {
    let filled = 0;
    for (const want of wants)for (const box of checkboxes){
        const label = box.id && document.querySelector(`label[for="${CSS.escape(box.id)}"]`)?.textContent || box.closest("label")?.textContent || box.getAttribute("aria-label") || box.value;
        if ((0, _choiceMatch.isExactChoiceMatch)(label, want)) {
            await fillCheckbox(box, true);
            filled += 1;
            break;
        }
    }
    return filled;
}
async function fillRadioByLabel(radios, want) {
    for (const radio of radios){
        const label = radio.id && document.querySelector(`label[for="${CSS.escape(radio.id)}"]`)?.textContent || radio.closest("label")?.textContent || radio.getAttribute("aria-label") || radio.value;
        if ((0, _choiceMatch.isExactChoiceMatch)(label, want)) {
            if (!radio.checked) {
                radio.click();
                radio.checked = true;
                radio.dispatchEvent(new Event("change", {
                    bubbles: true
                }));
                radio.dispatchEvent(new Event("click", {
                    bubbles: true
                }));
            }
            return true;
        }
    }
    return false;
}

},{"~contents/methods/choice-match":"hYmUM","~contents/crawler/utils/delay":"1kcE1","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"hYmUM":[function(require,module,exports) {
/** Exact / normalized choice matching (port of engine choice-match).
 * Oracle: engine/helper-app/src/contents/methods/choice-match.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeChoiceText", ()=>normalizeChoiceText);
parcelHelpers.export(exports, "isExactChoiceMatch", ()=>isExactChoiceMatch);
parcelHelpers.export(exports, "findExactChoice", ()=>findExactChoice);
/** Simple fuzzy score 0\u20131 (token overlap + substring). */ parcelHelpers.export(exports, "fuzzyScore", ()=>fuzzyScore);
parcelHelpers.export(exports, "fuzzyFindBest", ()=>fuzzyFindBest);
function normalizeChoiceText(value) {
    if (typeof value !== "string" && typeof value !== "number") return "";
    return String(value).normalize("NFKC").replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/\s+/g, " ").trim().toLowerCase();
}
function isExactChoiceMatch(optionText, want) {
    const w = normalizeChoiceText(want);
    return !!w && normalizeChoiceText(optionText) === w;
}
function findExactChoice(items, want, getLabel, getSecondary) {
    if (!normalizeChoiceText(want)) return undefined;
    const byLabel = items.filter((item)=>isExactChoiceMatch(getLabel(item), want));
    if (byLabel.length === 1) return byLabel[0];
    if (byLabel.length > 1 || !getSecondary) return undefined;
    const bySec = items.filter((item)=>isExactChoiceMatch(getSecondary(item), want));
    return bySec.length === 1 ? bySec[0] : undefined;
}
function fuzzyScore(a, b) {
    const na = normalizeChoiceText(a);
    const nb = normalizeChoiceText(b);
    if (!na || !nb) return 0;
    if (na === nb) return 1;
    if (nb.includes(na) || na.includes(nb)) return 0.85;
    const at = new Set(na.split(" ").filter(Boolean));
    const bt = nb.split(" ").filter(Boolean);
    if (!bt.length) return 0;
    let hit = 0;
    for (const t of bt)if (at.has(t)) hit += 1;
    return hit / Math.max(at.size, bt.length);
}
function fuzzyFindBest(items, want, getLabel, minScore = 0.45) {
    let best;
    let bestScore = 0;
    for (const item of items){
        const s = fuzzyScore(want, getLabel(item));
        if (s > bestScore) {
            bestScore = s;
            best = item;
        }
    }
    return bestScore >= minScore ? best : undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"jYmCR":[function(require,module,exports) {
/**
 * Checkbox / radio label helpers (clean-TS).
 * Oracle: engine/helper-app/src/contents/methods/checkbox-label.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Visible label text for a checkbox/radio. */ parcelHelpers.export(exports, "getRadioCheckText", ()=>getRadioCheckText);
parcelHelpers.export(exports, "normalizeRadioCheckText", ()=>normalizeRadioCheckText);
function textOf(el) {
    return (el?.textContent || "").trim();
}
function labelForInput(input) {
    if (!input.id || typeof document === "undefined") return null;
    try {
        return document.querySelector(`label[for="${CSS.escape(input.id)}"]`);
    } catch  {
        return null;
    }
}
function getRadioCheckText(input) {
    const parent = input.parentElement;
    const grand = parent?.parentElement;
    const candidates = [
        typeof input.closest === "function" ? input.closest("label") : null,
        labelForInput(input),
        parent,
        parent?.nextElementSibling,
        parent?.previousElementSibling,
        grand
    ];
    for (const el of candidates){
        const t = textOf(el);
        if (t) return t;
    }
    return input.getAttribute("aria-label") || input.value || "";
}
function normalizeRadioCheckText(text) {
    return text.toLowerCase().trim().replace("*", "");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7a65S":[function(require,module,exports) {
/** Core enums ported from Jobright helper `~core/enums`. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RENDER_STEP", ()=>RENDER_STEP);
parcelHelpers.export(exports, "MESSAGE_EVENTS", ()=>MESSAGE_EVENTS);
parcelHelpers.export(exports, "FIELD_TYPE", ()=>FIELD_TYPE);
parcelHelpers.export(exports, "APPLICATION_STATUS", ()=>APPLICATION_STATUS);
parcelHelpers.export(exports, "MIME_TYPE", ()=>MIME_TYPE);
var RENDER_STEP;
(function(RENDER_STEP) {
    RENDER_STEP[RENDER_STEP["INITIAL"] = 0] = "INITIAL";
    RENDER_STEP[RENDER_STEP["FILLING"] = 1] = "FILLING";
    RENDER_STEP[RENDER_STEP["FILLED"] = 2] = "FILLED";
    RENDER_STEP[RENDER_STEP["FAILED"] = 3] = "FAILED";
})(RENDER_STEP || (RENDER_STEP = {}));
var MESSAGE_EVENTS;
(function(MESSAGE_EVENTS) {
    MESSAGE_EVENTS["autoFillResultFromIframe"] = "autoFillResultFromIframe";
    MESSAGE_EVENTS["autoFillCompleteFromIframe"] = "autoFillCompleteFromIframe";
    MESSAGE_EVENTS["autoFillReloadIframe"] = "autoFillReloadIframe";
    MESSAGE_EVENTS["updateResultFromIframe"] = "updateResultFromIframe";
    MESSAGE_EVENTS["sendHttpStatusIframe"] = "sendHttpStatusIframe";
    MESSAGE_EVENTS["complateAgent"] = "complateAgent";
    MESSAGE_EVENTS["agentStartFillingFields"] = "agentStartFillingFields";
    MESSAGE_EVENTS["agentGetResumeInfo"] = "agentGetResumeInfo";
    MESSAGE_EVENTS["agentSubmitClicked"] = "agentSubmitClicked";
    MESSAGE_EVENTS["agentCheckCoverLetter"] = "agentCheckCoverLetter";
})(MESSAGE_EVENTS || (MESSAGE_EVENTS = {}));
var FIELD_TYPE;
(function(FIELD_TYPE) {
    FIELD_TYPE["TEXT"] = "text";
    FIELD_TYPE["NUMBER"] = "number";
    FIELD_TYPE["COVER_LETTER"] = "cover-letter";
    FIELD_TYPE["CHECKBOX"] = "checkbox";
    FIELD_TYPE["SELECT"] = "select";
    FIELD_TYPE["RADIO"] = "radio";
    FIELD_TYPE["SEARCH"] = "search";
    FIELD_TYPE["SELECT_ORIGINAL"] = "select-original";
    FIELD_TYPE["MULTI_SELECT"] = "multi-select";
    FIELD_TYPE["LISTBOX"] = "listbox";
    FIELD_TYPE["EMPLOYMENT"] = "employment";
    FIELD_TYPE["EDUCATION"] = "education";
    FIELD_TYPE["DROPDOWN"] = "dropdown";
    FIELD_TYPE["DATE"] = "date";
    FIELD_TYPE["RADIOGROUP"] = "radio-group";
    FIELD_TYPE["BAMBOOHR_SPECIAL"] = "bamboohr-special";
    FIELD_TYPE["SECTION"] = "section";
    FIELD_TYPE["ASHBY_SEARCH"] = "ashby-search";
})(FIELD_TYPE || (FIELD_TYPE = {}));
var APPLICATION_STATUS;
(function(APPLICATION_STATUS) {
    APPLICATION_STATUS[APPLICATION_STATUS["RUNNING"] = 0] = "RUNNING";
    APPLICATION_STATUS[APPLICATION_STATUS["SUCCESS"] = 1] = "SUCCESS";
    APPLICATION_STATUS[APPLICATION_STATUS["FAILED"] = 2] = "FAILED";
})(APPLICATION_STATUS || (APPLICATION_STATUS = {}));
const MIME_TYPE = {
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}]},["hl1Vv","dWVet"], "dWVet", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFBQVcsVUFBUSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsRUFBRSxFQUFDLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsT0FBTyxXQUFTLGFBQVcsSUFBSSxVQUFRLE1BQUssSUFBRSxDQUFDO1FBQUUsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFHLEVBQUUsWUFBVSxNQUFLLE9BQU8sRUFBRTtZQUFRLElBQUksSUFBRSxFQUFFLFFBQU87WUFBRSxJQUFHO2dCQUFDLElBQUUsRUFBRTtZQUFnQixFQUFDLE9BQU0sR0FBRTtnQkFBQyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7WUFBQztZQUFDLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSTtnQkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQUMsSUFBRyxPQUFPLEtBQUcsWUFBVyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7Z0JBQUUsSUFBSSxJQUFFLEVBQUUsSUFBSTtnQkFBRyxJQUFHLE1BQUksS0FBSyxHQUFFO29CQUFDLElBQUksSUFBRSxFQUFFO29CQUFHLEVBQUUsY0FBYSxDQUFBLEVBQUUsYUFBVyxDQUFDLENBQUEsR0FBRyxLQUFHLFlBQVU7Z0JBQUM7WUFBQztZQUFDLE9BQU8sRUFBRSxVQUFRLEdBQUU7UUFBQztRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxFQUFFLElBQUksSUFBRyxJQUFFLEVBQUUsSUFBSTtZQUFHLE9BQU8sTUFBSSxLQUFLLEtBQUcsTUFBSSxLQUFLLElBQUUsQ0FBQyxJQUFFLENBQUUsQ0FBQSxNQUFJLEtBQUssS0FBRyxNQUFJLEtBQUssS0FBRyxFQUFFLE9BQUssRUFBRSxNQUFJLEVBQUUsVUFBUztRQUFFO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxPQUFPLEVBQUUsYUFBVyxFQUFFLFVBQVU7UUFBZ0I7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxPQUFPLEVBQUUsTUFBSSxFQUFFLEtBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUU7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsT0FBTyxFQUFFLElBQUk7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsSUFBSSxJQUFFLElBQUk7WUFBSSxPQUFPLEVBQUUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLEVBQUUsSUFBSSxHQUFFO1lBQUUsSUFBRztRQUFDO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFJLElBQUUsSUFBSTtZQUFJLE9BQU8sRUFBRSxRQUFRLFNBQVMsQ0FBQztnQkFBRSxFQUFFLElBQUk7WUFBRSxJQUFHO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxJQUFHO2dCQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFBQSxFQUFDLE9BQU0sR0FBRTtnQkFBQztZQUFNO1FBQUM7UUFBQyxTQUFTO1lBQUksSUFBRyxFQUFFLFdBQVMsS0FBRyxHQUFFLE9BQU87WUFBSyxJQUFFLENBQUM7WUFBRSxJQUFHO2dCQUFDLElBQUksSUFBRSxJQUFJLEtBQUksSUFBRSxJQUFJLEtBQUksSUFBRTtnQkFBRSxJQUFFLEVBQUUsRUFBQyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7b0JBQVEsRUFBRSxJQUFJLEdBQUUsSUFBRyxFQUFFLElBQUksR0FBRSxJQUFHLEVBQUUsVUFBUSxHQUFFLEVBQUUsR0FBRSxLQUFHLEVBQUUsSUFBSSxLQUFHLEVBQUUsSUFBSTtnQkFBRTtnQkFBRyxJQUFJLElBQUU7b0JBQUMsaUJBQWdCO29CQUFFLGVBQWM7Z0JBQUM7Z0JBQUUsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLGtCQUFrQjtnQkFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsTUFBSyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUU7Z0JBQUcsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsSUFBRyxFQUFFLElBQUksSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLElBQUc7d0JBQUMsSUFBSSxJQUFFLEVBQUUsSUFBSTt3QkFBRyxJQUFHOzRCQUFDLEVBQUUsYUFBYSxHQUFFO3dCQUFFLEVBQUMsT0FBTSxHQUFFOzRCQUFDLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUE7d0JBQUU7b0JBQUM7Z0JBQUMsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsRUFBRSxJQUFJO29CQUFHLElBQUc7d0JBQUMsRUFBRSxnQkFBZ0IsR0FBRTtvQkFBRSxFQUFDLE9BQU0sR0FBRTt3QkFBQyxLQUFJLENBQUEsSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFBO29CQUFFO2dCQUFDLElBQUcsR0FBRSxNQUFNO2dCQUFFLE9BQU87WUFBQyxTQUFRO2dCQUFDLElBQUUsQ0FBQztZQUFDO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRyxJQUFHLE1BQUksUUFBTSxPQUFPLEtBQUcsY0FBWSxPQUFPLEtBQUcsWUFBVSxFQUFFLElBQUksSUFBRztZQUFPLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxJQUFHLE1BQUksS0FBSyxJQUFHLENBQUEsSUFBRTtnQkFBQyxTQUFRO1lBQUMsR0FBRSxFQUFFLElBQUksR0FBRSxFQUFDLElBQUcsRUFBRSxLQUFLO2dCQUFDO2dCQUFFO2FBQUUsR0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFBc0UsSUFBSSxJQUFFLEVBQUUsNEJBQTRCLEdBQUU7Z0JBQUcsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLElBQUk7Z0JBQUU7WUFBRSxJQUFHO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFO1lBQStCLElBQUcsTUFBSSxLQUFLLEdBQUU7Z0JBQUMsSUFBSSxJQUFFO2dCQUFFLEVBQUUsaUNBQStCLElBQUU7b0JBQUMsV0FBVSxJQUFJO29CQUFJLGVBQWMsQ0FBQztvQkFBRSxRQUFPLFNBQVMsQ0FBQzt3QkFBRSxPQUFPO29CQUFHO29CQUFFLHFCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFO29CQUFFLG1CQUFrQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRTtvQkFBRSxzQkFBcUIsWUFBVztnQkFBQztZQUFDO1lBQUMsSUFBRyxFQUFFLFlBQVc7Z0JBQUMsUUFBUSxLQUFLO2dCQUE4SjtZQUFNO1lBQUMsSUFBSSxJQUFFLEVBQUU7WUFBTyxFQUFFLFNBQU8sU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLE1BQU0sSUFBSSxFQUFDO2dCQUFXLE9BQU8sT0FBTyxFQUFFLG1CQUFpQixjQUFZLE9BQU8sRUFBRSxxQkFBbUIsY0FBWSxFQUFFLElBQUksR0FBRSxJQUFHO1lBQUMsR0FBRSxFQUFFLFVBQVUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxtQkFBaUIsY0FBWSxPQUFPLEVBQUUscUJBQW1CLGNBQVksRUFBRSxJQUFJLEdBQUU7WUFBRTtZQUFHLElBQUksSUFBRSxFQUFFLG1CQUFrQixJQUFFLEVBQUUsdUJBQXFCLFlBQVc7WUFBRSxFQUFFLHNCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQSxFQUFFLE9BQU8sSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLEdBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFJLEVBQUM7WUFBVSxHQUFFLEVBQUUsb0JBQWtCLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsRUFBRSxJQUFJLEdBQUU7b0JBQUcsSUFBSSxJQUFFLEVBQUUsU0FBUSxJQUFFLEVBQUU7b0JBQVUsSUFBRyxNQUFJLE1BQUs7d0JBQUMsSUFBSSxJQUFFLEVBQUUsaUJBQWUsUUFBTSxFQUFFLGNBQWMsV0FBUyxRQUFNLEVBQUUsSUFBSSxJQUFHLElBQUUsRUFBRSxpQkFBZSxRQUFNLEVBQUUsY0FBYyxXQUFTO3dCQUFLLENBQUMsS0FBRyxJQUFHLENBQUEsRUFBRSxJQUFJLElBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxLQUFHLEtBQUksQ0FBQSxLQUFHLENBQUMsSUFBRyxDQUFBLEVBQUUsT0FBTyxJQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEtBQUcsRUFBRSxJQUFJLEVBQUM7b0JBQUUsT0FBTSxFQUFFLElBQUk7Z0JBQUU7Z0JBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxFQUFDO1lBQVU7UUFBRTtRQUFDLFNBQVM7WUFBSyxPQUFNLENBQUM7UUFBQztRQUFDLFNBQVM7WUFBSyxPQUFPLEVBQUU7UUFBSTtRQUFDLFNBQVM7WUFBTSxJQUFJLEdBQUUsR0FBRSxJQUFFLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFHLE9BQU8sS0FBRyxVQUFTLE9BQU8sS0FBSSxDQUFBLElBQUUsR0FBRSxJQUFFLE9BQU8sS0FBRyxVQUFTLEdBQUcsS0FBRyxRQUFPLENBQUEsT0FBTyxLQUFHLGNBQVksT0FBTyxLQUFHLFFBQU8sS0FBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLElBQUc7Z0JBQUUsQ0FBQyxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxFQUFFLEVBQUM7WUFBRTtRQUFFO1FBQUMsU0FBUyxHQUFHLENBQUM7WUFBRSxPQUFPLE9BQU87Z0JBQUcsS0FBSTtvQkFBWSxJQUFHLEVBQUUsYUFBVyxNQUFLO3dCQUFDLElBQUcsRUFBRSxVQUFVLGtCQUFpQixPQUFNLENBQUM7d0JBQUUsSUFBSSxJQUFFLE9BQU8sb0JBQW9CLEVBQUU7d0JBQVcsSUFBRyxFQUFFLFNBQU8sS0FBRyxDQUFDLENBQUMsRUFBRSxLQUFHLGlCQUFlLEVBQUUsVUFBVSxjQUFZLE9BQU8sV0FBVSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFFLEVBQUUsUUFBTSxFQUFFO29CQUFZLE9BQU8sT0FBTyxLQUFHLFlBQVUsU0FBUyxLQUFLO2dCQUFHLEtBQUk7b0JBQVUsSUFBRyxLQUFHLE1BQUssT0FBTyxFQUFFLEdBQUU7d0JBQWEsS0FBSzt3QkFBRSxLQUFLOzRCQUFFLE9BQU0sQ0FBQzt3QkFBRTs0QkFBUSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsT0FBTSxDQUFDO2dCQUFFO29CQUFRLE9BQU0sQ0FBQztZQUFDO1FBQUM7UUFBQyxFQUFFLHVCQUFxQixJQUFHLEVBQUUsaUNBQStCLEdBQUUsRUFBRSxzQ0FBb0MsSUFBRyxFQUFFLDRCQUEwQixJQUFHLEVBQUUsZ0JBQWMsR0FBRSxFQUFFLGtCQUFnQixHQUFFLEVBQUUseUJBQXVCLElBQUcsRUFBRSx1QkFBcUIsSUFBRyxFQUFFLHdCQUFzQixJQUFHLEVBQUUsc0JBQW9CLEdBQUUsRUFBRSxXQUFTLEdBQUUsRUFBRSxlQUFhO0lBQUMsQ0FBQTtBQUFJO0FBQUcsSUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFHO0lBQUs7SUFBYSxFQUFFLFVBQVE7QUFBRztBQUFHLElBQUksSUFBRSxDQUFDO0FBQUUsR0FBRyxHQUFFO0lBQUMsU0FBUSxJQUFJO0FBQUU7QUFBRyxPQUFPLFVBQVEsR0FBRztBQUFHLElBQUksSUFBRSxFQUFFO0FBQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxPQUFPO0FBQVMsSUFBSSxLQUFHLEVBQUUsU0FDcDVMOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FDYkE7OztDQUdDOztBQXdQRDtBQUFBO0FBcktBLGdEQUFhOzJEQTZJQTtBQVdiLHlEQUFnQjtBQUloQixvREFBc0I7QUE3T3RCO0FBS0E7QUFDQTtBQVFBO0FBa0JBLFNBQVMsa0JBQWtCLEtBQWE7SUFDdEMsTUFBTSxPQUFPLE1BQU0sUUFBUSxjQUFjLEtBQUssT0FBTztJQUNyRCxNQUFNLFNBQVMsTUFBTSxLQUFLLFNBQVMsaUJBQWlCO0lBQ3BELEtBQUssTUFBTSxPQUFPLE9BQVE7UUFDeEIsTUFBTSxPQUFPLEFBQUMsQ0FBQSxJQUFJLGVBQWUsRUFBQyxFQUMvQixRQUFRLGNBQWMsS0FDdEIsUUFBUSxRQUFRLEtBQ2hCLE9BQ0E7UUFDSCxJQUFJLFNBQVMsUUFBUSxDQUFDLEtBQUssV0FBVyxPQUFPO1FBQzdDLElBQUksSUFBSSxTQUFTO1lBQ2YsTUFBTSxPQUFPLFNBQVMsZUFBZSxJQUFJO1lBQ3pDLElBQUksTUFBTSxPQUFPO1FBQ25CO1FBQ0EsTUFBTSxTQUFTLElBQUksY0FBYztRQUNqQyxJQUFJLFFBQVEsT0FBTztJQUNyQjtJQUVBLHdDQUF3QztJQUN4QyxNQUFNLFdBQVcsTUFBTSxLQUNyQixTQUFTLGlCQUFpQjtJQUU1QixLQUFLLE1BQU0sTUFBTSxTQUFVO1FBQ3pCLE1BQU0sT0FBTyxBQUFDLENBQUEsR0FBRyxhQUFhLGlCQUFpQixFQUFDLEVBQUc7UUFDbkQsSUFBSSxRQUFRLEtBQUssUUFBUSxVQUFVLElBQUksV0FBVyxNQUFNLE9BQU87SUFDakU7SUFDQSxPQUFPO0FBQ1Q7QUFFQSxTQUFTLGNBQWMsUUFBMEI7SUFDL0MsTUFBTSxPQUFPLFNBQVM7SUFDdEIsSUFBSSxNQUNGLE9BQU8sTUFBTSxLQUNYLFNBQVMsaUJBQWlCLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxPQUFPLE1BQU0sRUFBRSxDQUFDO0lBRy9FLE1BQU0sU0FBUyxTQUFTLFFBQVEsNkJBQTZCLFNBQVM7SUFDdEUsT0FBTyxNQUFNLEtBQ1gsT0FBTyxpQkFBaUI7QUFFNUI7QUFFQSxTQUFTLGtCQUFrQixFQUFvQjtJQUM3QyxNQUFNLFNBQVMsR0FBRyxRQUFRLDZCQUE2QixTQUFTO0lBQ2hFLE9BQU8sTUFBTSxLQUNYLE9BQU8saUJBQWlCO0FBRTVCO0FBRU8sTUFBTTtJQUNYLEtBQWU7SUFDZixTQUFnQjtJQUNoQixLQUFZO0lBRVosWUFBWSxJQUE2RCxDQUFFO1FBQ3pFLElBQUksQ0FBQyxXQUNILE1BQU0sWUFDTCxDQUFBLE9BQU8sYUFBYSxjQUFjLFNBQVMsV0FBVyxFQUFDO1FBQzFELElBQUksQ0FBQyxPQUNILE1BQU0sUUFBUyxDQUFBLE9BQU8sYUFBYSxjQUFjLFNBQVMsT0FBTyxFQUFDO1FBQ3BFLElBQUksQ0FBQyxPQUFPLE1BQU0sUUFBUSxDQUFBLEdBQUEsOEJBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUM7SUFDOUQ7SUFFQSxTQUFTLE1BQWdCLFFBQVEsRUFBcUI7UUFDcEQsT0FBTyxDQUFBLEdBQUEsc0NBQW9CLEVBQUUsSUFBSSxDQUFDLE1BQU07SUFDMUM7SUFFQSxNQUFNLFVBQVUsS0FBc0IsRUFBRSxLQUFhLEVBQW9CO1FBQ3ZFLE1BQU0sS0FBSyxrQkFBa0IsTUFBTTtRQUNuQyxJQUFJLENBQUMsSUFBSSxPQUFPO1FBRWhCLElBQUksTUFBTSxTQUFTLFlBQVksY0FBYyxtQkFDM0MsT0FBTyxDQUFBLEdBQUEsMEJBQWMsRUFBRSxJQUFJO1FBRzdCLElBQUksTUFBTSxTQUFTLFdBQVcsY0FBYyxrQkFDMUMsT0FBTyxDQUFBLEdBQUEsOEJBQWtCLEVBQUUsY0FBYyxLQUFLO1FBR2hELElBQUksTUFBTSxTQUFTLGNBQWMsY0FBYyxrQkFBa0I7WUFDL0QsTUFBTSxJQUFJLE1BQU0sQ0FBQSxHQUFBLDRCQUFnQixFQUM5QixrQkFBa0IsS0FDbEIsTUFBTSxNQUFNLFFBQVEsSUFBSSxDQUFDLElBQU0sRUFBRSxRQUFRLE9BQU87WUFFbEQsT0FBTyxJQUFJO1FBQ2I7UUFFQSxJQUNFLGNBQWMsb0JBQ2QsY0FBYyxxQkFDZDtZQUNBLE1BQU0sQ0FBQSxHQUFBLDZCQUFpQixFQUFFLElBQUk7WUFDN0IsT0FBTztRQUNUO1FBRUEsT0FBTztJQUNUO0lBRUEsTUFBTSx3QkFBMEM7UUFDOUMsTUFBTSxRQUNKLEFBQUMsU0FBUyxjQUNSLHFLQUMrQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxPQUFPO1FBQ25CLGdEQUFnRDtRQUNoRCxNQUFNLFdBQVcsTUFBTSxLQUNyQixTQUFTLGlCQUFpQjtRQUU1QixJQUFJLFNBQVM7UUFDYixLQUFLLE1BQU0sS0FBSyxTQUFVO1lBQ3hCLE1BQU0sUUFBUSxBQUFDLENBQUEsRUFBRSxlQUFlLEVBQUMsRUFBRztZQUNwQyxJQUFJLDZCQUE2QixLQUFLLFFBQVE7WUFDOUMsSUFBSSx1QkFBdUIsS0FBSyxRQUFRO2dCQUN0QyxNQUFNLElBQUksRUFBRSxjQUFjO2dCQUMxQixJQUFJLEdBQUc7b0JBQ0wsU0FBUztvQkFDVDtnQkFDRjtZQUNGO1FBQ0Y7UUFFQSxNQUFNLE9BQU8sTUFBTSxDQUFBLEdBQUEsNkJBQWM7UUFDakMsSUFBSSxDQUFDLE1BQU0sT0FBTztRQUNsQixPQUFPLENBQUEsR0FBQSxzQkFBVSxFQUFFLFFBQVEsS0FBSyxNQUFNLEtBQUs7SUFDN0M7SUFFQSxNQUFNLDZCQUErQztRQUNuRCxNQUFNLFdBQVcsTUFBTSxLQUNyQixTQUFTLGlCQUFpQjtRQUU1QixJQUFJLFFBQWlDO1FBQ3JDLEtBQUssTUFBTSxLQUFLLFNBQVU7WUFDeEIsTUFBTSxRQUFRLEFBQUMsQ0FBQSxFQUFFLGVBQWUsRUFBQyxFQUFHO1lBQ3BDLElBQUksNkJBQTZCLEtBQUssUUFBUTtnQkFDNUMsUUFBUSxFQUFFLGNBQ1I7Z0JBRUYsSUFBSSxPQUFPO1lBQ2I7UUFDRjtRQUNBLElBQUksQ0FBQyxPQUNILFFBQVEsU0FBUyxjQUNmO1FBR0osSUFBSSxDQUFDLE9BQU8sT0FBTztRQUNuQixNQUFNLE9BQU8sTUFBTSxDQUFBLEdBQUEsa0NBQW1CO1FBQ3RDLElBQUksQ0FBQyxNQUFNLE9BQU87UUFDbEIsT0FBTyxDQUFBLEdBQUEsc0JBQVUsRUFBRSxPQUFPLEtBQUssTUFBTSxLQUFLO0lBQzVDO0lBRUEsTUFBTSxXQUFXLE1BQWdCLFFBQVEsRUFBdUI7UUFDOUQsTUFBTSxTQUFTLElBQUksQ0FBQyxTQUFTO1FBQzdCLE1BQU0sVUFBVSxNQUFNLENBQUEsR0FBQSw4QkFBZSxFQUFFO1FBQ3ZDLE1BQU0sTUFBTSxDQUFBLEdBQUEsdUJBQVEsRUFBRTtRQUN0QixNQUFNLFNBQW1CLEVBQUU7UUFDM0IsSUFBSSxTQUFTO1FBRWIsS0FBSyxNQUFNLFNBQVMsT0FBUTtZQUMxQixNQUFNLFFBQVEsQ0FBQSxHQUFBLCtCQUFnQixFQUFFLEtBQUssTUFBTTtZQUMzQyxJQUFJLENBQUMsT0FBTztnQkFDVixPQUFPLEtBQUssTUFBTTtnQkFDbEI7WUFDRjtZQUNBLElBQUk7Z0JBQ0YsTUFBTSxLQUFLLE1BQU0sSUFBSSxDQUFDLFVBQVUsT0FBTztnQkFDdkMsSUFBSSxJQUFJLFVBQVU7cUJBQ2IsT0FBTyxLQUFLLE1BQU07WUFDekIsRUFBRSxPQUFNO2dCQUNOLE9BQU8sS0FBSyxNQUFNO1lBQ3BCO1lBQ0EsTUFBTSxDQUFBLEdBQUEsWUFBSSxFQUFFO1FBQ2Q7UUFFQSxNQUFNLGlCQUFpQixNQUFNLElBQUksQ0FBQztRQUNsQyxNQUFNLHNCQUFzQixNQUFNLElBQUksQ0FBQztRQUV2QyxPQUFPO1lBQ0wsTUFBTSxJQUFJLENBQUM7WUFDWCxZQUFZLE9BQU87WUFDbkIsVUFBVSxRQUFRO1lBQ2xCO1lBQ0E7WUFDQTtZQUNBO1FBQ0Y7SUFDRjtBQUNGO0FBR08sTUFBTSx3QkFBcUM7SUFDaEQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRU0sU0FBUyxvQkFBb0IsSUFBZTtJQUNqRCxPQUFPLHNCQUFzQixTQUFTO0FBQ3hDO0FBRU8sZUFBZSxlQUFlLElBR3BDO0lBQ0MsTUFBTSxTQUFTLElBQUksV0FBVztJQUM5QixPQUFPLE9BQU87QUFDaEI7Ozs7O0FDeFBBLDJDQUFnQjtBQUloQix5REFBc0I7QUFKZixTQUFTLE1BQU0sRUFBVTtJQUM5QixPQUFPLElBQUksUUFBUSxDQUFDLFVBQVksV0FBVyxTQUFTO0FBQ3REO0FBRU8sZUFBZSxvQkFDcEIsS0FBaUcsRUFDakcsaUJBQWlCLEVBQUU7SUFFbkIsS0FBSyxNQUFNLFFBQVEsTUFDakIsSUFBSSxPQUFPLFNBQVMsWUFBWTtRQUM5QixNQUFNO1FBQ04sTUFBTSxNQUFNO0lBQ2QsT0FBTztRQUNMLE1BQU0sS0FBSztRQUNYLE1BQU0sTUFBTSxLQUFLLFNBQVM7SUFDNUI7QUFFSjs7O0FDakJBLFFBQVEsaUJBQWlCLFNBQVUsQ0FBQztJQUNsQyxPQUFPLEtBQUssRUFBRSxhQUFhLElBQUk7UUFBQyxTQUFTO0lBQUM7QUFDNUM7QUFFQSxRQUFRLG9CQUFvQixTQUFVLENBQUM7SUFDckMsT0FBTyxlQUFlLEdBQUcsY0FBYztRQUFDLE9BQU87SUFBSTtBQUNyRDtBQUVBLFFBQVEsWUFBWSxTQUFVLE1BQU0sRUFBRSxJQUFJO0lBQ3hDLE9BQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO1FBQ3ZDLElBQUksUUFBUSxhQUFhLFFBQVEsZ0JBQWdCLEtBQUssZUFBZSxNQUNuRTtRQUdGLE9BQU8sZUFBZSxNQUFNLEtBQUs7WUFDL0IsWUFBWTtZQUNaLEtBQUs7Z0JBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSTtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLFNBQVMsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7SUFDNUMsT0FBTyxlQUFlLE1BQU0sVUFBVTtRQUNwQyxZQUFZO1FBQ1osS0FBSztJQUNQO0FBQ0Y7Ozs7O0FDMERBO0FBQ0E7QUFwRUEsbURBQWdCO0FBbUNoQiwyREFBZ0I7QUFxQmhCLGdFQUFnQjtBQTdFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbUZBO0FBaEZBLDJEQUEyRCxHQUMzRCxNQUFNLG9CQUErQztJQUNuRCxVQUFVO0lBQ1YsWUFBWTtJQUNaLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLE9BQU87SUFDUCxhQUFhO0lBQ2IsUUFBUTtJQUNSLGNBQWM7QUFDaEI7QUFFTyxTQUFTLGNBQWMsUUFBZ0IsRUFBRSxPQUFPLEVBQUU7SUFDdkQsTUFBTSxJQUFJLEFBQUMsQ0FBQSxZQUFZLEVBQUMsRUFBRztJQUMzQixNQUFNLElBQUksQUFBQyxDQUFBLFFBQVEsRUFBQyxFQUFHO0lBRXZCLHVDQUF1QztJQUN2QyxJQUFJLEVBQUUsU0FBUyxnQkFBZ0IsRUFBRSxTQUFTLGtCQUFrQixPQUFPO0lBQ25FLElBQ0UsRUFBRSxTQUFTLG9CQUNYLEVBQUUsU0FBUyx3QkFDWCxFQUFFLFNBQVMsWUFFWCxPQUFPO0lBRVQsSUFBSSxFQUFFLFNBQVMsZUFBZSxFQUFFLFNBQVMsZUFBZSxPQUFPO0lBQy9ELElBQUksRUFBRSxTQUFTLHdCQUF3QixFQUFFLFNBQVMsZ0JBQ2hELE9BQU87SUFFVCxJQUFJLEVBQUUsU0FBUyxrQkFBa0IsRUFBRSxTQUFTLGVBQWUsT0FBTztJQUNsRSxJQUFJLEVBQUUsU0FBUyxzQkFBc0IsRUFBRSxTQUFTLGNBQzlDLE9BQU87SUFFVCxJQUFJLEVBQUUsU0FBUyxtQkFBbUIsRUFBRSxTQUFTLGVBQzNDLE9BQU87SUFHVCxNQUFNLGFBQWEsQ0FBQSxHQUFBLGlDQUFnQixFQUFFLFVBQVU7SUFDL0MsSUFBSSxjQUFjLGlCQUFpQixDQUFDLFdBQVcsRUFDN0MsT0FBTyxpQkFBaUIsQ0FBQyxXQUFXO0lBR3RDLCtEQUErRDtJQUMvRCxJQUFJLFlBQVksT0FBTztJQUN2QixPQUFPO0FBQ1Q7QUFFTyxTQUFTLHNCQUNkLElBQWUsRUFDZixHQUFhO0lBRWIsT0FBUTtRQUNOLEtBQUs7WUFDSCxPQUFPLENBQUEsR0FBQSx3Q0FBcUIsRUFBRTtRQUNoQyxLQUFLO1lBQ0gsT0FBTyxDQUFBLEdBQUEsNENBQXVCLEVBQUU7UUFDbEMsS0FBSztZQUNILE9BQU8sQ0FBQSxHQUFBLGtDQUFrQixFQUFFO1FBQzdCLEtBQUs7WUFDSCxPQUFPLENBQUEsR0FBQSxzQ0FBb0IsRUFBRTtRQUMvQixLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTDtZQUNFLE9BQU8sQ0FBQSxHQUFBLHNDQUFvQixFQUFFO0lBQ2pDO0FBQ0Y7QUFFTyxTQUFTLDJCQUNkLEdBQWEsRUFDYixRQUFnQixFQUNoQixPQUFPLEVBQUU7SUFFVCxNQUFNLE9BQU8sY0FBYyxVQUFVO0lBQ3JDLE1BQU0sYUFBYSxDQUFBLEdBQUEsaUNBQWdCLEVBQUUsVUFBVTtJQUMvQyxPQUFPO1FBQUU7UUFBTSxRQUFRLHNCQUFzQixNQUFNO1FBQU07SUFBVztBQUN0RTs7Ozs7QUNsRkEsOENBQThDLEdBQzlDLDhEQUFnQjtBQUpoQjtBQUlPLFNBQVMseUJBQXlCLEdBQWE7SUFDcEQsT0FBTyxDQUFBLEdBQUEsc0NBQW9CLEVBQUUsS0FBSztRQUNoQyxvQkFBb0I7SUFDdEI7QUFDRjs7O0FDUkE7OztDQUdDOztBQWdNRCwyREFBZ0I7QUFwS2hCLE1BQU0saUJBQ0o7QUFFRixTQUFTLFdBQVcsSUFBK0I7SUFDakQsT0FBTyxBQUFDLENBQUEsUUFBUSxFQUFDLEVBQUcsUUFBUSxRQUFRLEtBQUs7QUFDM0M7QUFFQSxTQUFTLFdBQVcsSUFBK0I7SUFDakQsT0FBTyxXQUFXLE1BQ2YsUUFBUSxjQUFjLEtBQ3RCLFFBQVEsZ0RBQWdELElBQ3hELFFBQVEsUUFBUSxLQUNoQjtBQUNMO0FBRUEsU0FBUyxTQUFTLEVBQVM7SUFDekIsTUFBTSxJQUFJLEdBQUc7SUFDYixPQUFPLE9BQU8sTUFBTSxXQUFXLElBQUksR0FBRyxnQkFBZ0I7QUFDeEQ7QUFFQSxTQUFTLFVBQVUsRUFBUztJQUMxQixJQUFJLENBQUMsSUFBSSxjQUFjLE9BQU87SUFDOUIsSUFBSSxHQUFHLGFBQWEsbUJBQW1CLFVBQVUsR0FBRyxRQUFRLE9BQU87SUFDbkUsSUFBSSxHQUFHLFVBQVUsbUNBQW1DLE9BQU87SUFDM0QsT0FBTztBQUNUO0FBRUEsU0FBUyxXQUFXLEVBQVM7SUFDM0IsTUFBTSxNQUFNLEFBQUMsQ0FBQSxHQUFHLFdBQVcsRUFBQyxFQUFHO0lBQy9CLElBQUksUUFBUSxXQUFXLFFBQVEsY0FBYyxRQUFRLFVBQVUsT0FBTztJQUN0RSxJQUFJLEdBQUcsVUFBVSxPQUFPO0lBQ3hCLElBQ0UsUUFBUSxXQUNSO1FBQUM7UUFBVTtRQUFRO1FBQVU7UUFBVTtRQUFTO0tBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxLQUU3RSxPQUFPO0lBRVQsT0FBTyxVQUFVO0FBQ25CO0FBRUEsU0FBUyxLQUFLLE9BQXlCLEVBQUUsUUFBZ0I7SUFDdkQsTUFBTSxPQUFPO0lBQ2IsTUFBTSxRQUFRLEtBQUssbUJBQW1CO0lBQ3RDLE9BQU8sUUFBUSxNQUFNLEtBQUssU0FBNkIsRUFBRTtBQUMzRDtBQUVBLFNBQVMsYUFBYSxHQUFhLEVBQUUsY0FBdUI7SUFDMUQsTUFBTSxPQUFRLElBQUksUUFBUSxJQUFJO0lBQzlCLElBQUksZ0JBQWdCO1FBQ2xCLE1BQU0sWUFBWSxBQUFDLElBQXlCLGdCQUFnQjtRQUM1RCxJQUFJLGFBQWEsVUFBVSxZQUFZLE9BQU87SUFDaEQ7SUFDQSxNQUFNLFFBQVEsS0FBSyxLQUF5QixRQUFRLE9BQU87SUFDM0QsSUFBSSxPQUFxQjtJQUN6QixJQUFJLFlBQVk7SUFDaEIsS0FBSyxNQUFNLFFBQVEsTUFBTztRQUN4QixNQUFNLFNBQVMsS0FBSyxNQUFNLGdCQUFnQixPQUFPLFlBQVk7UUFDN0QsTUFBTSxTQUFTLEtBQUssTUFBTSxpQkFBaUIsT0FBTyxXQUFXO1FBQzdELE1BQU0sUUFBUSxLQUFLLFNBQVM7UUFDNUIsSUFBSSxRQUFRLFdBQVc7WUFDckIsWUFBWTtZQUNaLE9BQU87UUFDVDtJQUNGO0lBQ0EsT0FBTyxRQUFRO0FBQ2pCO0FBRUEsU0FBUyxlQUFlLEVBQVMsRUFBRSxJQUFXO0lBQzVDLE1BQU0sY0FDSixBQUFDLENBQUEsR0FBRyxXQUFXLEVBQUMsRUFBRyxrQkFBa0IsV0FDckM7UUFBQztRQUFTO0tBQVcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxNQUN0QyxLQUNBO0lBQ04sSUFBSSxPQUFxQixHQUFHO0lBQzVCLElBQUksT0FBYyxHQUFHLGlCQUFpQjtJQUN0QyxNQUFNLE9BQU8sR0FBRyxlQUFlLFFBQVE7SUFDdkMsTUFBTyxRQUFRLFNBQVMsUUFBUSxTQUFTLEtBQU07UUFDN0MsTUFBTSxVQUFVLENBQUMsRUFBRSxLQUFLLE1BQU0sR0FBRyxDQUFDLEVBQUUsU0FBUyxNQUFNLENBQUM7UUFDcEQsTUFBTSxlQUFlLEtBQUssTUFBTSxnQkFBZ0IsT0FBTyxZQUFZO1FBQ25FLE1BQU0sV0FBVyxDQUFDLENBQUMsS0FBSyxnQkFBZ0I7UUFDeEMsTUFBTSxpQkFDSiw0REFBNEQsS0FBSztRQUNuRSxJQUFJLEFBQUMsQ0FBQSxZQUFZLGNBQWEsS0FBTSxnQkFBZ0IsYUFDbEQsT0FBTztRQUVULElBQUksWUFBWSxnQkFBZ0IsT0FBTztRQUN2QyxPQUFPLEtBQUs7SUFDZDtJQUNBLE9BQU87QUFDVDtBQUVBLFNBQVMsV0FBVyxJQUFzQixFQUFFLEVBQVU7SUFDcEQsSUFBSSxDQUFDLElBQUksT0FBTztJQUNoQixNQUFNLE9BQU8sR0FBRyxRQUFRLE9BQU8sUUFBUSxRQUFRLE1BQU07SUFDckQsSUFBSTtRQUNGLE1BQU0sTUFBTSxBQUFDLEtBQWUsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUs7UUFDdkUsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNO0lBQ3ZDLEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBRUEsU0FBUyxhQUFhLEVBQVMsRUFBRSxTQUFnQjtJQUMvQyxNQUFNLFFBQ0osR0FBRyxNQUNGLENBQUEsV0FBVyxXQUFXLEdBQUcsT0FDeEIsV0FBVyxHQUFHLGVBQXNDLEdBQUcsR0FBRTtJQUM3RCxJQUFJLE9BQU87UUFDVCxNQUFNLE9BQU8sV0FBVyxNQUFNO1FBQzlCLElBQUksTUFBTSxPQUFPO0lBQ25CO0lBRUEsTUFBTSxlQUFlLEdBQUcsVUFBVTtJQUNsQyxJQUFJLGdCQUFnQixVQUFVLGVBQWU7UUFDM0MsTUFBTSxPQUFPLFdBQVcsYUFBYTtRQUNyQyxJQUFJLE1BQU0sT0FBTztJQUNuQjtJQUVBLE1BQU0sT0FBTyxXQUFXLEdBQUcsZUFBZTtJQUMxQyxJQUFJLFFBQVEsQ0FBQyxpREFBaUQsS0FBSyxPQUNqRSxPQUFPO0lBR1QsTUFBTSxhQUFhLEFBQUMsQ0FBQSxHQUFHLGVBQWUsc0JBQXNCLEVBQUMsRUFDMUQsTUFBTSxPQUNOLE9BQU8sU0FDUCxJQUFJLENBQUMsS0FBTyxHQUFHLGVBQWUsaUJBQWlCLE9BQU8sTUFDdEQsT0FBTyxDQUFDLElBQWtCLENBQUMsQ0FBQyxLQUFLLFVBQVUsSUFDM0MsSUFBSSxDQUFDLElBQU0sRUFBRSxhQUNiLEtBQUs7SUFDUixNQUFNLFdBQVcsV0FBVztJQUM1QixJQUFJLFVBQVUsT0FBTztJQUVyQixNQUFNLGFBQWEsS0FDakIsV0FDQSx1REFDQSxPQUFPLENBQUM7UUFDUixJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU87UUFDMUIsSUFBSSxFQUFFLFdBQVcsT0FBTyxFQUFFLFlBQVksU0FBUyxPQUFPO1FBQ3RELE1BQU0sSUFBSSxXQUFXLEVBQUU7UUFDdkIsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxLQUFLO0lBQ3ZFO0lBQ0EsT0FBTyxXQUFXLFVBQVUsQ0FBQyxFQUFFLEVBQUU7QUFDbkM7QUFFQSxTQUFTLFdBQVcsRUFBUyxFQUFFLFNBQWdCO0lBQzdDLElBQUksR0FBRyxlQUFlLGVBQWUsR0FBRyxlQUFlLHFCQUFxQixRQUMxRSxPQUFPO0lBRVQsT0FBTyw0QkFBNEIsS0FBSyxVQUFVLGVBQWU7QUFDbkU7QUFFQSxTQUFTLGNBQWMsTUFBYTtJQUNsQyxNQUFNLE9BQU8sT0FBTyxVQUFVLE1BQU0sS0FBSyxPQUFPLFdBQVcsRUFBRTtJQUM3RCxPQUFPLEtBQ0osSUFBSSxDQUFDLElBQU0sV0FBVyxFQUFFLGFBQWEsUUFBUSxjQUFjLEtBQUssUUFDaEUsT0FBTyxDQUFDLElBQU0sS0FBSyxDQUFDLCtCQUErQixLQUFLO0FBQzdEO0FBT08sU0FBUyxzQkFDZCxHQUFhLEVBQ2IsT0FBd0IsQ0FBQyxDQUFDO0lBRTFCLE1BQU0sT0FBTyxhQUFhLEtBQUssS0FBSztJQUNwQyxNQUFNLFFBQVEsS0FBSyxNQUFNLGdCQUFnQixPQUFPO0lBQ2hELE1BQU0sTUFBeUIsRUFBRTtJQUNqQyxNQUFNLE9BQU8sSUFBSTtJQUVqQixLQUFLLE1BQU0sTUFBTSxNQUFPO1FBQ3RCLElBQUksS0FBSyxJQUFJLEtBQUs7UUFDbEIsTUFBTSxNQUFNLEFBQUMsQ0FBQSxHQUFHLFdBQVcsRUFBQyxFQUFHO1FBRS9CLElBQUksUUFBUSxXQUFZLENBQUEsR0FBRyxTQUFTLFdBQVcsR0FBRyxTQUFTLFVBQVMsR0FBSTtZQUN0RSxNQUFNLFlBQVksZUFBZSxJQUFJO1lBQ3JDLE1BQU0sUUFBUSxLQUFLLFdBQVcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU87WUFDakUsTUFBTSxRQUNKLEdBQUcsUUFBUSxHQUFHLEtBQ1YsTUFBTSxPQUFPLENBQUMsSUFBTSxFQUFFLFNBQVMsR0FBRyxRQUFRLEVBQUUsT0FBTyxHQUFHLE1BQ3REO1lBQ04sS0FBSyxNQUFNLEtBQUssTUFBTyxLQUFLLElBQUk7WUFFaEMsTUFBTSxRQUFRLGFBQWEsSUFBSTtZQUMvQixJQUFJLENBQUMsT0FBTztZQUNaLE1BQU0sVUFBVSxNQUNiLElBQUksQ0FBQztnQkFDSixNQUFNLE1BQ0osQUFBQyxFQUFFLE1BQU0sV0FBVyxXQUFXLEVBQUUsS0FBSyxlQUN0QyxFQUFFLFVBQVUsVUFBVSxlQUN0QixFQUFFLGVBQWUsaUJBQ2pCLEVBQUU7Z0JBQ0osT0FBTyxXQUFXO1lBQ3BCLEdBQ0MsT0FBTztZQUVWLElBQUksS0FBSztnQkFDUCxNQUFNLEdBQUcsU0FBUyxVQUFVLFVBQVU7Z0JBQ3RDO2dCQUNBLFVBQVUsTUFBTSxLQUFLLENBQUMsSUFBTSxXQUFXLEdBQUc7Z0JBQzFDO1lBQ0Y7WUFDQTtRQUNGO1FBRUEsS0FBSyxJQUFJO1FBQ1QsTUFBTSxZQUFZLGVBQWUsSUFBSTtRQUNyQyxNQUFNLFFBQVEsYUFBYSxJQUFJO1FBQy9CLElBQUksQ0FBQyxPQUFPO1FBRVosSUFBSSxRQUFRLFVBQVU7WUFDcEIsSUFBSSxLQUFLO2dCQUNQLE1BQU07Z0JBQ047Z0JBQ0EsVUFBVSxXQUFXLElBQUk7Z0JBQ3pCLFNBQVMsY0FBYztZQUN6QjtZQUNBO1FBQ0Y7UUFFQSxJQUFJLEtBQUs7WUFDUCxNQUFNLFFBQVEsYUFBYSxhQUFhO1lBQ3hDO1lBQ0EsVUFBVSxXQUFXLElBQUk7UUFDM0I7SUFDRjtJQUVBLE9BQU87QUFDVDs7Ozs7QUNuUUEsNEJBQTRCLEdBQzVCLHlEQUFnQjtBQUpoQjtBQUlPLFNBQVMsb0JBQW9CLEdBQWE7SUFDL0MsT0FBTyxDQUFBLEdBQUEsc0NBQW9CLEVBQUUsS0FBSztRQUNoQyxvQkFBb0I7SUFDdEI7QUFDRjs7Ozs7QUNMQSx1REFBdUQsR0FDdkQsNERBQWdCO0FBSmhCO0FBSU8sU0FBUyx1QkFBdUIsR0FBYTtJQUNsRCxPQUFPLENBQUEsR0FBQSxzQ0FBb0IsRUFBRSxLQUFLO1FBQ2hDLG9CQUFvQjtJQUN0QjtBQUNGOzs7OztBQ0xBOzs7Q0FHQyxHQUNELDJEQUFnQjtBQVBoQjtBQU9PLFNBQVMsc0JBQXNCLEdBQWE7SUFDakQsT0FBTyxDQUFBLEdBQUEsc0NBQW9CLEVBQUUsS0FBSztRQUNoQyxvQkFBb0I7SUFDdEI7QUFDRjs7O0FDWEE7O0NBRUM7O0FBMkNEOzs7Q0FHQyxHQUNELHVEQUFnQjtBQTdDaEI7QUFJQSxTQUFTLGtCQUFrQixRQUFnQixFQUFFLE1BQWM7SUFDekQsTUFBTSxJQUFJLFNBQVM7SUFDbkIsTUFBTSxJQUFJLE9BQU87SUFDakIsT0FBTyxNQUFNLEtBQUssRUFBRSxTQUFTLE1BQU07QUFDckM7QUFFQSxTQUFTLG1CQUFtQixRQUFnQixFQUFFLE9BQWU7SUFDM0QsOERBQThEO0lBQzlELE1BQU0sSUFBSSxxQkFBcUIsS0FBSztJQUNwQyxJQUFJLENBQUMsR0FBRyxPQUFPO0lBQ2YsSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEIsSUFBSSxLQUFLLFdBQVcsT0FBTztRQUN6QixNQUFNLE9BQU8sS0FBSyxNQUFNO1FBQ3hCLE9BQU8sYUFBYSxRQUFRLFNBQVMsU0FBUyxNQUFNO0lBQ3REO0lBQ0EsSUFBSSxTQUFTLEtBQUssT0FBTztJQUN6QixPQUFPLGFBQWEsUUFBUSxTQUFTLFNBQVMsTUFBTTtBQUN0RDtBQUVBLFNBQVMsT0FBTyxRQUFnQixFQUFFLElBQVksRUFBRSxJQUFvQjtJQUNsRSxJQUFJLEtBQUssV0FDUCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksT0FBTyxLQUFLLFdBQVcsS0FBSyxXQUFXLE9BQU87SUFDekQsRUFBRSxPQUFNO1FBQ04sT0FBTztJQUNUO0lBRUYsSUFBSSxLQUFLLFVBQ1AsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLE9BQU8sS0FBSyxVQUFVLEtBQUssT0FBTyxPQUFPO0lBQ3BELEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtJQUVGLE9BQU87QUFDVDtBQU1PLFNBQVMsa0JBQ2QsUUFBZ0IsRUFDaEIsT0FBTyxFQUFFO0lBRVQsTUFBTSxJQUFJLEFBQUMsQ0FBQSxZQUFZLEVBQUMsRUFBRztJQUMzQixJQUFJLFdBQVc7SUFDZixJQUFJO1FBQ0YsV0FBVyxPQUFPLElBQUksSUFBSSxNQUFNLFdBQVc7SUFDN0MsRUFBRSxPQUFNO1FBQ04sV0FBVztJQUNiO0lBRUEsSUFBSSxPQUE2QztJQUVqRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxPQUFPLFFBQVEsQ0FBQSxHQUFBLDZCQUFZLEdBQUk7UUFDdEQsSUFBSSxRQUFRO1FBQ1osTUFBTSxVQUFVLEtBQUssV0FBVyxFQUFFO1FBQ2xDLE1BQU0sV0FBVyxLQUFLLFlBQVksRUFBRTtRQUVwQyxLQUFLLE1BQU0sS0FBSyxRQUNkLElBQUksa0JBQWtCLEdBQUcsSUFDdkIsUUFBUSxLQUFLLElBQUksT0FBTyxFQUFFLFNBQVM7UUFHdkMsS0FBSyxNQUFNLEtBQUssU0FDZCxJQUFJLG1CQUFtQixHQUFHLElBQ3hCLFFBQVEsS0FBSyxJQUFJLE9BQU87UUFHNUIsSUFBSSxVQUFVLEdBQUc7UUFDakIsSUFBSSxDQUFDLE9BQU8sVUFBVSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTztRQUV0RCxrQ0FBa0M7UUFDbEMsSUFBSSxLQUFLLGFBQWEsS0FBSyxVQUFVLFNBQVM7UUFFOUMsSUFBSSxDQUFDLFFBQVEsUUFBUSxLQUFLLE9BQU8sT0FBTztZQUFFO1lBQUk7UUFBTTtJQUN0RDtJQUVBLE9BQU8sTUFBTSxNQUFNO0FBQ3JCOzs7QUN4RkE7OztDQUdDOzttREFpQlk7NERBRUE7K0VBQ0E7QUFPYixpRUFBZ0I7cURBZ0JIO3NEQUlBO21EQUlBOzREQWtCQTswREFlQTswREFJQTt5REFPQTtzREFJQTtBQWpHYjtBQUNBO0FBY08sTUFBTSxnQkFBZ0IsQ0FBQSxHQUFBLDhCQUFXO0FBRWpDLE1BQU0seUJBQXlCO0FBQy9CLE1BQU0sNENBQ1g7QUFFRixNQUFNLGlDQUFpQyxJQUFJLE9BQ3pDO0FBR0ssU0FBUyw0QkFBNEIsUUFBZ0I7SUFDMUQsT0FBTywrQkFBK0IsS0FBSztBQUM3QztBQUVBLFNBQVMseUJBQXlCLE9BQWU7SUFDL0MsTUFBTSxRQUFRLHFCQUFxQixLQUFLO0lBQ3hDLElBQUksQ0FBQyxPQUFPLE9BQU87SUFDbkIsTUFBTSxPQUFPLEtBQUssQ0FBQyxFQUFFO0lBQ3JCLElBQUksQ0FBQyxRQUFRLFNBQVMsS0FBSyxPQUFPO0lBQ2xDLE9BQU8sS0FBSyxXQUFXLFFBQVEsS0FBSyxNQUFNLEtBQUs7QUFDakQ7QUFFQSxNQUFNLHFCQUFxQixPQUFPLE9BQU8sZUFBZSxPQUN0RCxDQUFDLE9BQVMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxLQUFLO0FBRzlCLE1BQU0sa0JBQWtCLG1CQUFtQixRQUNoRCxDQUFDLE9BQVMsS0FBSyxXQUFXLEVBQUU7QUFHdkIsTUFBTSxtQkFBbUIsbUJBQzdCLFFBQVEsQ0FBQyxPQUFTLEtBQUssWUFBWSxFQUFFLEVBQ3JDLElBQUksQ0FBQyxVQUFZLElBQUksQ0FBQSxHQUFBLDJCQUFXLEVBQUU7QUFFOUIsTUFBTSxnQkFBZ0IsTUFBTSxLQUNqQyxJQUFJLElBQ0YsT0FBTyxPQUFPLGVBQWUsUUFBUSxDQUFDLE9BQVM7V0FDekMsS0FBSyxXQUFXLEVBQUU7V0FDbkIsQUFBQyxDQUFBLEtBQUssWUFBWSxFQUFFLEFBQUQsRUFDbkIsSUFBSSwwQkFDSixPQUFPLENBQUMsT0FBeUIsU0FBUztLQUM5QztBQVdFLE1BQU0seUJBQWdELE9BQU8sT0FDbEUsZUFFQyxPQUNDLENBQUMsT0FDQyxBQUFDLE9BQU8sS0FBSyxjQUFjLFlBQVksS0FBSyxVQUFVLFNBQVMsS0FDOUQsT0FBTyxLQUFLLGFBQWEsWUFBWSxLQUFLLFNBQVMsU0FBUyxHQUVoRSxJQUFJLENBQUMsT0FBVSxDQUFBO1FBQ2QsU0FBUyxLQUFLLFdBQVcsRUFBRTtRQUMzQixVQUFVLEFBQUMsQ0FBQSxLQUFLLFlBQVksRUFBRSxBQUFELEVBQUcsSUFBSSxDQUFDLFVBQVksSUFBSSxDQUFBLEdBQUEsMkJBQVcsRUFBRTtRQUNsRSxXQUFXLEtBQUssWUFBWSxJQUFJLE9BQU8sS0FBSyxhQUFhO1FBQ3pELFVBQVUsS0FBSyxXQUFXLElBQUksT0FBTyxLQUFLLFlBQVk7SUFDeEQsQ0FBQTtBQUVLLE1BQU0sdUJBQXVCLE9BQU8sT0FBTyxlQUFlLFFBQy9ELENBQUMsT0FBUyxLQUFLLGlCQUFpQixFQUFFO0FBRzdCLE1BQU0sdUJBQXVCLE9BQU8sT0FBTyxlQUMvQyxPQUFPLENBQUMsT0FBUyxLQUFLLHFCQUFxQixLQUFLLGtCQUNoRCxJQUNDLENBQUMsT0FDQztRQUFDLEtBQUs7UUFBb0IsS0FBSztLQUFrQjtBQUdoRCxNQUFNLHNCQUFzQixPQUFPLE9BQU8sZUFDOUMsT0FBTyxDQUFDLE9BQVMsS0FBSyxZQUN0QixRQUFRLENBQUMsT0FBUyxLQUFLLFdBQVcsRUFBRTtBQUVoQyxNQUFNLG1CQUFtQixPQUFPLE9BQU8sZUFBZSxRQUMzRCxDQUFDLE9BQVMsS0FBSyxlQUFlLEVBQUU7OztBQ3ZHbEM7OztDQUdDOztBQUVELHlEQUFhO0FBTWIsa0RBQWE7QUFOTixNQUFNLDRCQUE0QjtJQUN2QyxZQUFZLE9BQWUsRUFBRSxNQUFjLENBQUU7UUFDM0MsS0FBSyxDQUFDLENBQUMsdUJBQXVCLEVBQUUsUUFBUSxHQUFHLEVBQUUsT0FBTyxDQUFDO0lBQ3ZEO0FBQ0Y7QUFFTyxNQUFNO0lBQ1gsT0FBTyxZQUFZO1FBQUM7UUFBUTtRQUFTO1FBQVE7UUFBTztLQUFNLENBQVM7SUFFbkUsWUFBWSxNQUFLO0lBQ2pCLGtCQUE0QixFQUFFLENBQUE7SUFDOUIsZ0JBQWdCLElBQUc7SUFDbkIsZ0JBQWdCLElBQUc7SUFFbkIsWUFBWSxPQUFlLENBQUU7UUFDM0IsSUFBSSxZQUFZLGNBQWM7WUFDNUIsSUFBSSxDQUFDLFlBQVk7WUFDakIsSUFBSSxDQUFDLGtCQUFrQjttQkFBSSxhQUFhO2FBQVU7WUFDbEQsSUFBSSxDQUFDLGdCQUFnQjtZQUNyQixJQUFJLENBQUMsZ0JBQWdCO1lBQ3JCO1FBQ0Y7UUFFQSxNQUFNLFNBQVMsdUJBQXVCLEtBQUs7UUFDM0MsSUFBSSxVQUFVLE1BQU0sTUFBTSxJQUFJLG9CQUFvQixTQUFTO1FBRTNELE1BQU0sR0FBRyxVQUFVLFVBQVUsU0FBUyxHQUFHO1FBRXpDLElBQ0UsQ0FBQyxhQUFhLFVBQVUsU0FBUyxhQUNqQyxhQUFhLEtBRWIsTUFBTSxJQUFJLG9CQUNSLFNBQ0EsQ0FBQyxFQUFFLFNBQVMsdUJBQXVCLEVBQUUsYUFBYSxVQUFVLEtBQUssTUFBTSxDQUFDLENBQUM7UUFHN0UsSUFBSSxTQUFTLFNBQVMsTUFDcEIsTUFBTSxJQUFJLG9CQUFvQixTQUFTO1FBRXpDLElBQ0UsU0FBUyxTQUFTLFFBQ2xCLFNBQVMsU0FBUyxLQUNsQixDQUFDLFNBQVMsV0FBVyxPQUVyQixNQUFNLElBQUksb0JBQ1IsU0FDQTtRQUlKLElBQUksQ0FBQyxrQkFBa0IsYUFBYSxNQUFNO1lBQUM7WUFBUTtTQUFRLEdBQUc7WUFBQztTQUFTO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLGdCQUFnQjtJQUN2QjtJQUVBLFNBQVMsS0FBOEIsRUFBVztRQUNoRCxJQUFJLElBQUksQ0FBQyxXQUFXLE9BQU87UUFDM0IsTUFBTSxNQUNKLE9BQU8sVUFBVSxXQUNiLElBQUksSUFBSSxTQUNSLGlCQUFpQixXQUNmLElBQUksSUFBSSxNQUFNLFFBQ2Q7UUFDUixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDO1lBQ2hDLElBQUksYUFBYSxRQUFRLE9BQU8sSUFBSSxDQUFDLFlBQVk7WUFDakQsSUFBSSxhQUFhLFNBQVMsT0FBTyxJQUFJLENBQUMsYUFBYTtZQUNuRCxPQUFPO1FBQ1Q7SUFDRjtJQUVRLFlBQVksR0FBUSxFQUFXO1FBQ3JDLE9BQU8sSUFBSSxhQUFhLFdBQVcsSUFBSSxDQUFDLGdCQUFnQjtJQUMxRDtJQUVRLGFBQWEsR0FBUSxFQUFXO1FBQ3RDLE9BQU8sSUFBSSxhQUFhLFlBQVksSUFBSSxDQUFDLGdCQUFnQjtJQUMzRDtJQUVRLGdCQUFnQixHQUFRLEVBQVc7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxPQUFPO1FBQ3ZELE1BQU0sY0FBYztZQUNsQixJQUFJLENBQUMsc0JBQXNCLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsc0JBQXNCLElBQUksQ0FBQyxjQUFjLFFBQVEsU0FBUztTQUNoRTtRQUNELE1BQU0sWUFBWSxJQUFJLENBQUMsc0JBQXNCLElBQUksQ0FBQztRQUNsRCxPQUNFLFlBQVksS0FBSyxDQUFDLEtBQU8sR0FBRyxLQUFLLElBQUksY0FBYyxVQUFVLEtBQUssSUFBSTtJQUUxRTtJQUVRLHNCQUFzQixPQUFlLEVBQVU7UUFDckQsTUFBTSxVQUFVLFFBQVEsUUFBUSx1QkFBdUI7UUFDdkQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsUUFBUSxRQUFRLFNBQVMsTUFBTSxDQUFDLENBQUM7SUFDekQ7QUFDRjs7Ozs7bURDcEdhO0FBQU4sTUFBTSxnQkFBZ0I7SUFDM0IsWUFBWTtRQUNWLFNBQVM7WUFBQztTQUFnQjtRQUMxQixlQUFlO1lBQUM7U0FBZ0I7UUFDaEMsYUFBYTtZQUFDO1lBQVU7U0FBUztRQUNqQyxXQUFXO0lBQ2I7SUFDQSxVQUFVO1FBQUUsVUFBVTtZQUFDO1NBQWtCO1FBQUUsV0FBVztJQUFxQjtJQUMzRSxTQUFTO1FBQ1AsVUFBVTtZQUFDO1NBQTRCO1FBQ3ZDLFdBQ0U7SUFDSjtJQUNBLFNBQVM7UUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBQ0EsTUFBTTtRQUFFLFNBQVM7WUFBQztTQUFrQjtRQUFFLFdBQVc7SUFBZ0I7SUFDakUsT0FBTztRQUNMLFNBQVM7WUFBQztTQUFZO1FBQ3RCLGVBQWU7WUFBQztTQUFZO1FBQzVCLFlBQVksQ0FBQztRQUNiLFdBQVc7SUFDYjtJQUNBLE9BQU87UUFBRSxTQUFTO1lBQUM7U0FBWTtJQUFDO0lBQ2hDLE9BQU87UUFBRSxTQUFTO1lBQUM7U0FBb0I7UUFBRSxXQUFXO0lBQXNCO0lBQzFFLGFBQWE7UUFDWCxTQUFTO1lBQUM7WUFBbUI7WUFBa0I7U0FBaUI7UUFDaEUsZUFBZTtZQUFDO1lBQW1CO1lBQWtCO1NBQWlCO1FBQ3RFLFdBQVc7SUFDYjtJQUNBLEtBQUs7UUFBRSxTQUFTO1lBQUM7U0FBZTtRQUFFLFdBQVc7SUFBdUI7SUFDcEUsT0FBTztRQUNMLFNBQVM7WUFBQztTQUFpQjtRQUMzQixXQUFXO0lBQ2I7SUFDQSxhQUFhO1FBQ1gsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO1FBQ0QsV0FBVztJQUNiO0lBQ0EsU0FBUztRQUFFLFVBQVU7WUFBQztTQUFxQztJQUFDO0lBQzVELGNBQWM7UUFDWixTQUFTO1lBQUM7WUFBb0I7U0FBbUI7UUFDakQsVUFDRTtJQUNKO0lBQ0EsWUFBWTtRQUNWLFNBQVM7WUFBQztZQUFrQjtZQUE4QjtTQUEyQjtRQUNyRixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLFdBQVc7SUFDYjtJQUNBLFNBQVM7UUFDUCxTQUFTO1lBQUM7U0FBYztRQUN4QixXQUFXO0lBQ2I7SUFDQSxhQUFhO1FBQ1gsU0FBUztZQUFDO1NBQWtCO1FBQzVCLFdBQVc7SUFDYjtJQUNBLGFBQWE7UUFBRSxTQUFTO1lBQUM7U0FBc0I7SUFBQztJQUNoRCxZQUFZO1FBQUUsU0FBUztZQUFDO1NBQWlCO0lBQUM7SUFDMUMsVUFBVTtRQUNSLFNBQVM7WUFBQztZQUFlO1NBQWU7UUFDeEMsV0FBVztJQUNiO0lBQ0EsYUFBYTtRQUFFLFNBQVM7WUFBQztTQUFtQjtJQUFDO0lBQzdDLFlBQVk7UUFDVixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7U0FDRDtRQUNELFdBQVc7SUFDYjtJQUNBLGtCQUFrQjtRQUNoQixVQUFVO1lBQUM7U0FBbUM7UUFDOUMsV0FBVztJQUNiO0lBQ0EsZ0JBQWdCO1FBQUUsU0FBUztZQUFDO1lBQXFCO1lBQXNCO1NBQVk7SUFBQztJQUNwRixjQUFjO1FBQ1osU0FBUztZQUFDO1NBQW1CO1FBQzdCLFVBQVU7WUFBQztTQUFrRDtJQUMvRDtJQUNBLE9BQU87UUFDTCxVQUFVO1lBQUM7U0FBd0I7UUFDbkMsZUFBZTtZQUFDO1lBQW9CO1NBQVk7UUFDaEQsYUFBYTtZQUFDO1NBQVk7UUFDMUIsV0FBVztJQUNiO0lBQ0EsU0FBUztRQUNQLFNBQVM7WUFBQztTQUFrQjtRQUM1QixXQUFXO0lBQ2I7SUFDQSxTQUFTO1FBQUUsVUFBVTtZQUFDO1NBQTZCO0lBQUM7SUFDcEQsUUFBUTtRQUNOLFNBQVM7WUFBQztTQUE2QjtRQUN2QyxVQUFVO1lBQ1I7WUFDQTtTQUNEO1FBQ0QsZUFBZTtZQUFDO1NBQTZCO0lBQy9DO0lBQ0EsUUFBUTtRQUNOLFVBQVU7WUFBQztTQUF5QztRQUNwRCxXQUNFO0lBQ0o7SUFDQSxpQkFBaUI7UUFDZixTQUFTO1lBQUM7U0FBWTtRQUN0QixVQUFVO1lBQ1I7WUFDQTtTQUNEO0lBQ0g7SUFDQSxRQUFRO1FBQ04sbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixVQUFVO1lBQ1I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBLE9BQU87UUFBRSxVQUFVO1lBQUM7U0FBaUM7SUFBQztJQUN0RCxPQUFPO1FBQ0wsVUFBVTtZQUFDO1lBQTBCO1NBQTRCO1FBQ2pFLFdBQVc7SUFDYjtJQUNBLFFBQVE7UUFBRSxVQUFVO1lBQUM7U0FBc0I7UUFBRSxXQUFXO0lBQXNCO0lBQzlFLGtCQUFrQjtRQUFFLFVBQVU7WUFBQztTQUF1QztJQUFDO0lBQ3ZFLE1BQU07UUFDSixTQUFTO1lBQUM7U0FBVztRQUNyQixXQUNFO0lBQ0o7SUFDQSxRQUFRO1FBQ04sVUFBVTtZQUNSO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQSxXQUFXO1FBQ1QsVUFBVTtZQUNSO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBQ0EsUUFBUTtRQUNOLFVBQVU7WUFBQztZQUFrQztTQUFtQztRQUNoRixXQUNFO1FBQ0YsVUFBVTtJQUNaO0lBQ0EsT0FBTztRQUNMLFVBQVU7WUFBQztZQUF5QjtTQUEyQjtRQUMvRCxlQUFlO1lBQUM7U0FBVztRQUMzQixhQUFhO1lBQUM7U0FBYTtRQUMzQixXQUFXO0lBQ2I7SUFDQSxTQUFTO1FBQ1AsVUFBVTtZQUFDO1lBQWdDO1NBQWdDO1FBQzNFLGVBQWU7WUFBQztTQUFtQjtRQUNuQyxhQUFhO1lBQUM7U0FBZ0I7SUFDaEM7SUFDQSxRQUFRO1FBQUUsVUFBVTtZQUFDO1lBQXVCO1NBQTJCO0lBQUM7SUFDeEUsVUFBVTtRQUNSLFNBQVM7WUFBQztTQUE4QjtRQUN4QyxVQUFVO1lBQUM7WUFBNEI7U0FBMEI7UUFDakUsZUFBZTtZQUFDO1NBQWU7UUFDL0IsYUFBYTtZQUFDO1NBQWdCO1FBQzlCLFdBQVc7SUFDYjtJQUNBLFFBQVE7UUFDTixVQUFVO1lBQUM7U0FBeUI7UUFDcEMsZUFBZTtZQUFDO1NBQXdCO1FBQ3hDLFdBQVc7SUFDYjtJQUNBLFVBQVU7UUFDUixVQUFVO1lBQUM7WUFBNEI7U0FBOEI7UUFDckUsZUFBZTtZQUFDO1NBQWU7UUFDL0IsV0FBVztJQUNiO0lBQ0EsV0FBVztRQUNULFVBQVU7WUFBQztTQUFnQztRQUMzQyxlQUFlO1lBQUM7U0FBZ0I7UUFDaEMsVUFBVTtJQUNaO0lBQ0EsS0FBSztRQUNILFNBQVM7WUFBQztTQUF1QjtRQUNqQyxVQUFVO1lBQUM7WUFBMEM7U0FBNEI7SUFDbkY7SUFDQSxhQUFhO1FBQ1gsVUFBVTtZQUNSO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtRQUNELFdBQ0U7SUFDSjtJQUNBLFNBQVM7UUFDUCxVQUFVO1lBQ1I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBLFVBQVU7UUFDUixVQUFVO1lBQ1I7WUFDQTtTQUNEO1FBQ0QsZUFBZTtZQUFDO1NBQW1CO0lBQ3JDO0lBQ0EsZ0JBQWdCO1FBQ2QsVUFBVTtZQUFDO1NBQWdDO1FBQzNDLFdBQVc7SUFDYjtJQUNBLFVBQVU7UUFDUixTQUFTO1lBQUM7U0FBdUI7UUFDakMsV0FBVztJQUNiO0lBQ0Esa0JBQWtCO1FBQ2hCLFVBQVU7WUFBQztTQUF3RDtRQUNuRSxXQUFXO0lBQ2I7SUFDQSxPQUFPO1FBQ0wsVUFBVTtZQUNSO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBLFdBQVc7UUFDVCxVQUFVO1lBQUM7WUFBK0I7U0FBaUM7UUFDM0UsZUFBZTtZQUFDO1NBQWU7UUFDL0IsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixVQUNFO0lBQ0o7SUFDQSxRQUFRO1FBQUUsVUFBVTtZQUFDO1NBQStCO0lBQUM7SUFDckQsVUFBVTtRQUNSLFVBQVU7WUFBQztTQUFpQztRQUM1QyxXQUFXO0lBQ2I7SUFDQSxXQUFXO1FBQUUsVUFBVTtZQUFDO1NBQTZCO0lBQUM7SUFDdEQsWUFBWTtRQUNWLFVBQVU7WUFBQztZQUFxQztTQUFrQztRQUNsRixtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3BCO0lBQ0EsV0FBVztRQUNULFVBQVU7WUFBQztTQUEwQjtRQUNyQyxtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3BCO0lBQ0EsWUFBWTtRQUFFLFVBQVU7WUFBQztTQUE0QztJQUFDO0lBQ3RFLFVBQVU7UUFDUixVQUFVO1lBQ1I7WUFDQTtTQUNEO1FBQ0QsZUFBZTtZQUFDO1NBQWU7SUFDakM7SUFDQSxXQUFXO1FBQ1QsVUFBVTtZQUFDO1lBQW9DO1NBQW1DO1FBQ2xGLGVBQWU7WUFBQztTQUFnQjtRQUNoQyxVQUFVO0lBQ1o7SUFDQSxTQUFTO1FBQ1AsVUFBVTtZQUNSO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtRQUNELG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDcEI7SUFDQSxNQUFNO1FBQ0osVUFBVTtZQUFDO1NBQXVDO1FBQ2xELFdBQVc7SUFDYjtJQUNBLFFBQVE7UUFDTixVQUFVO1lBQUM7WUFBaUM7U0FBa0M7UUFDOUUsZUFBZTtZQUFDO1lBQWE7U0FBYTtJQUM1QztJQUNBLE9BQU87UUFDTCxVQUFVO1lBQUM7WUFBa0M7U0FBbUM7SUFDbEY7SUFDQSxTQUFTO1FBQUUsVUFBVTtZQUFDO1NBQTBCO0lBQUM7SUFDakQsZUFBZTtRQUNiLFNBQVM7WUFBQztTQUFvQjtRQUM5QixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLFdBQVc7SUFDYjtJQUNBLGlCQUFpQjtRQUFFLFVBQVU7WUFBQztTQUFpQztJQUFDO0FBQ2xFOzs7QUM3WkEsb0ZBQW9GOztnREFFdkU7QUFBTixNQUFNLGFBQWE7SUFDeEIsTUFBTTtJQUNOLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLE9BQU87SUFDUCxZQUFZO0lBQ1osTUFBTTtJQUNOLE1BQU07QUFDUjs7Ozs7QUNXQSxxRUFBcUUsR0FDckUsNkRBQWdCO0FBSWhCLHlFQUF5RSxHQUN6RSwrQ0FBZ0I7QUFlaEIsaURBQWdCO0FBSWhCLCtEQUErRCxHQUMvRCxvREFBZ0I7QUF3Q2hCOztDQUVDLEdBQ0Qsc0RBQXNCO0FBaUN0QixxREFBc0I7QUFpQnRCLDBEQUFzQjtBQTZCdEIsK0NBQWdCO0FBU2hCLHVEQUFnQjtBQW5MaEI7QUFJQSxtRkFBbUYsR0FDbkYsZUFBZSxpQkFBaUIsR0FHL0I7SUFDQyxPQUFPLENBQUEsR0FBQSwyQkFBdUIsRUFBRTtBQUNsQztBQVNBLE1BQU0sdUJBQ0o7QUFHSyxTQUFTLHdCQUF3QixJQUFZO0lBQ2xELE9BQU8sS0FBSyxRQUFRLHNCQUFzQjtBQUM1QztBQUdPLFNBQVMsVUFBVSxDQUFVLEVBQUUsQ0FBVTtJQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTztJQUN2RSxNQUFNLE9BQU8sd0JBQXdCLEdBQ2xDLFFBQVEsYUFBYSxJQUNyQixRQUFRLFFBQVEsS0FDaEIsY0FDQTtJQUNILE1BQU0sUUFBUSx3QkFBd0IsR0FDbkMsUUFBUSxhQUFhLElBQ3JCLFFBQVEsUUFBUSxLQUNoQixjQUNBO0lBQ0gsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxTQUFTO0FBQ3ZDO0FBRU8sU0FBUyxZQUFlLEtBQWM7SUFDM0MsT0FBTyxNQUFNLFFBQVEsU0FBUyxRQUFRO1FBQUM7S0FBTTtBQUMvQztBQUdPLFNBQVMsZUFBZSxHQUE4QjtJQUszRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sT0FBTyxRQUFRLFVBQ3pCLE9BQU87WUFBRSxNQUFNO1lBQUksT0FBTztZQUFJLEtBQUs7UUFBRztRQUV4QyxNQUFNLGFBQWEsSUFBSSxRQUFRLFNBQVMsS0FBSztRQUM3QyxNQUFNLFFBQVEsV0FBVyxNQUFNO1FBQy9CLElBQUksTUFBTSxTQUFTLEdBQUcsT0FBTztZQUFFLE1BQU07WUFBSSxPQUFPO1lBQUksS0FBSztRQUFHO1FBQzVELE1BQU0sQ0FBQyxNQUFNLFVBQVUsSUFBSSxHQUFHO1FBQzlCLE1BQU0sU0FBUztZQUNiO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO1FBQ0QsTUFBTSxhQUFhLE9BQU8sWUFBWTtRQUN0QyxNQUFNLFFBQ0osY0FBYyxLQUFLLGFBQWEsS0FBSyxNQUFNLENBQUMsV0FBVyxHQUFHO1FBQzVELE9BQU87WUFDTCxNQUFNLFFBQVE7WUFDZDtZQUNBLEtBQUssTUFBTSxJQUFJLFFBQVEsTUFBTSxNQUFNO1FBQ3JDO0lBQ0YsRUFBRSxPQUFNO1FBQ04sT0FBTztZQUFFLE1BQU07WUFBSSxPQUFPO1lBQUksS0FBSztRQUFHO0lBQ3hDO0FBQ0Y7QUFLTyxlQUFlLGlCQUNwQixNQUF5QjtJQUV6QixNQUFNLFdBQVcsT0FBTyxJQUFJLENBQUMsSUFBTyxDQUFBO1lBQ2xDLE9BQU8sRUFBRTtZQUNULE1BQU0sRUFBRTtZQUNSLFNBQVMsRUFBRSxXQUFXLEVBQUU7UUFDMUIsQ0FBQTtJQUVBLE1BQU0sTUFBTSxNQUFNLGlCQUFpQjtRQUNqQyxNQUFNO1FBQ04sTUFBTTtZQUNKLFFBQVE7Z0JBQ047Z0JBQ0EsUUFBUTtnQkFDUixRQUFRO2dCQUNSLEtBQUssT0FBTyxhQUFhLGNBQWMsU0FBUyxPQUFPO1lBQ3pEO1FBQ0Y7SUFDRjtJQUVBLE1BQU0sT0FBTyxLQUFLLE1BQU07SUFDeEIsSUFBSSxDQUFDLE1BQU0sUUFBUSxPQUFPLE9BQU8sRUFBRTtJQUNuQyxPQUFPLEtBQ0osSUFBSSxDQUFDLE1BQTZDLENBQUE7WUFDakQsTUFBTSxPQUFPLEtBQUssUUFBUTtZQUMxQixPQUFPLE1BQU0sUUFBUSxLQUFLLFNBQ3RCLE9BQU8sSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLE1BQ3ZCLE9BQU8sS0FBSyxTQUFTO1FBQzNCLENBQUEsR0FDQyxPQUFPLENBQUMsSUFBa0IsRUFBRSxRQUFRLEVBQUU7QUFDM0M7QUFFTyxlQUFlO0lBSXBCLE1BQU0sTUFBTSxNQUFNLGlCQUFpQjtRQUNqQyxNQUFNO1FBQ04sTUFBTSxDQUFDO0lBQ1Q7SUFDQSxJQUFJLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxXQUFXLE9BQU87SUFDdkMsTUFBTSxPQUFPLE1BQU0sY0FDakIsSUFBSSxXQUNKLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLGFBQWEsTUFBTSxDQUFDLEVBQ2xELElBQUk7SUFFTixPQUFPO1FBQUU7UUFBTSxVQUFVLEtBQUs7SUFBSztBQUNyQztBQUVPLGVBQWU7SUFJcEIsTUFBTSxNQUFNLE1BQU0saUJBQWlCO1FBQ2pDLE1BQU07UUFDTixNQUFNLENBQUM7SUFDVDtJQUNBLElBQUksQ0FBQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLFdBQVcsT0FBTztJQUN2QyxNQUFNLE9BQU8sTUFBTSxjQUNqQixJQUFJLFdBQ0osSUFBSSxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksYUFBYSxNQUFNLENBQUMsRUFDeEQsSUFBSTtJQUVOLE9BQU87UUFBRTtRQUFNLFVBQVUsS0FBSztJQUFLO0FBQ3JDO0FBRUEsZUFBZSxjQUNiLE9BQWUsRUFDZixRQUFnQixFQUNoQixRQUFpQjtJQUVqQixNQUFNLE1BQU0sTUFBTSxNQUFNO0lBQ3hCLE1BQU0sT0FBTyxNQUFNLElBQUk7SUFDdkIsT0FBTyxJQUFJLEtBQUs7UUFBQztLQUFLLEVBQUUsVUFBVTtRQUNoQyxNQUFNLFlBQVksS0FBSyxRQUFRO0lBQ2pDO0FBQ0Y7QUFFTyxTQUFTLFVBQVUsT0FBcUI7SUFDN0MsTUFBTSxJQUFJLElBQUk7SUFDZCxLQUFLLE1BQU0sS0FBSyxRQUFTO1FBQ3ZCLEVBQUUsSUFBSSxFQUFFLEtBQUssT0FBTyxlQUFlLEVBQUU7UUFDckMsRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLGNBQWMsS0FBSyxPQUFPLGVBQWUsRUFBRTtJQUNsRTtJQUNBLE9BQU87QUFDVDtBQUVPLFNBQVMsa0JBQ2QsR0FBd0IsRUFDeEIsS0FBYTtJQUViLE1BQU0sTUFBTSxNQUFNLFFBQVEsY0FBYyxLQUFLLE9BQU87SUFDcEQsT0FBTyxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksTUFBTSxPQUFPLGtCQUFrQjtBQUNoRTs7O0FDekxBOzs7Ozs7OztDQVFDLEdBRUQsSUFBSSxVQUFVLEVBQUU7QUFDaEIsUUFBUSxrQkFBa0I7QUFFMUIsSUFBSSxVQUFVO0FBRWQsSUFBSSxRQUFRLEFBQUM7SUFDWCxJQUFJLGNBQWM7UUFBRSxTQUFTLENBQUM7SUFBRTtJQUNoQyxJQUFJLFNBQVM7SUFDYixJQUFJLFVBQVUsWUFBWTtJQUMzQixJQUFJLFlBQVksT0FBTztJQUN4QixJQUFJLG1CQUFtQixPQUFPO0lBQzlCLElBQUksb0JBQW9CLE9BQU87SUFDL0IsSUFBSSxlQUFlLE9BQU8sVUFBVTtJQUNwQyxJQUFJLFdBQVcsQ0FBQyxRQUFRO1FBQ3RCLElBQUssSUFBSSxRQUFRLElBQ2YsVUFBVSxRQUFRLE1BQU07WUFBRSxLQUFLLEdBQUcsQ0FBQyxLQUFLO1lBQUUsWUFBWTtRQUFLO0lBQy9EO0lBQ0EsSUFBSSxjQUFjLENBQUMsSUFBSSxNQUFNLFFBQVE7UUFDbkMsSUFBSSxRQUFRLE9BQU8sU0FBUyxZQUFZLE9BQU8sU0FBUyxZQUFZO1lBQ2xFLEtBQUssSUFBSSxPQUFPLGtCQUFrQixNQUNoQyxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksUUFBUSxRQUFRLFFBQ3pDLFVBQVUsSUFBSSxLQUFLO2dCQUFFLEtBQUssSUFBTSxJQUFJLENBQUMsSUFBSTtnQkFBRSxZQUFZLENBQUUsQ0FBQSxPQUFPLGlCQUFpQixNQUFNLElBQUcsS0FBTSxLQUFLO1lBQVc7UUFDdEg7UUFDQSxPQUFPO0lBQ1Q7SUFDQSxJQUFJLGVBQWUsQ0FBQyxNQUFRLFlBQVksVUFBVSxDQUFDLEdBQUcsY0FBYztZQUFFLE9BQU87UUFBSyxJQUFJO0lBRXRGLGdEQUFnRDtJQUNoRCxJQUFJLHNCQUFzQixDQUFDO0lBQzNCLFNBQVMscUJBQXFCO1FBQzVCLFNBQVMsSUFBTTtRQUNmLE9BQU8sSUFBTTtRQUNiLGNBQWMsSUFBTTtRQUNwQiwyQkFBMkIsSUFBTTtRQUNqQyxrQkFBa0IsSUFBTTtRQUN4QiwwQkFBMEIsSUFBTTtRQUNoQyxxQkFBcUIsSUFBTTtRQUMzQixjQUFjLElBQU07SUFDdEI7SUFDQSxPQUFPLFVBQVUsYUFBYTtJQUU5QixpREFBaUQ7SUFDakQsSUFBSSxlQUFlLENBQUM7SUFDcEIsU0FBUyxjQUFjO1FBQ3JCLE9BQU8sSUFBTTtRQUNiLGNBQWMsSUFBTTtRQUNwQiwyQkFBMkIsSUFBTTtRQUNqQyxrQkFBa0IsSUFBTTtRQUN4QiwwQkFBMEIsSUFBTTtRQUNoQyxxQkFBcUIsSUFBTTtRQUMzQixjQUFjLElBQU07SUFDdEI7SUFDQSxJQUFJLGdCQUFnQixRQUFRO0lBQzVCLElBQUksSUFBSSxXQUFXLFNBQVMsUUFBUSxXQUFXLFFBQVE7SUFDdkQsSUFBSSxJQUFJO1FBQ04sSUFBSSxLQUFJLFdBQVcsU0FBUyxXQUFXLFdBQVcsUUFBUTtRQUMxRCxJQUFJLENBQUMsSUFBRyxNQUFNLElBQUksTUFBTTtRQUN4QixPQUFPO0lBQ1Q7SUFDQSxJQUFJLElBQUk7UUFDTixJQUFJLENBQUMsR0FBRyxNQUFNLElBQUksTUFBTTtRQUN4QixPQUFPO0lBQ1Q7SUFDQSxJQUFJLElBQUk7UUFDTixJQUFJLEtBQUksS0FBSyxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUUsTUFBTTtZQUFFLFFBQVE7WUFBTSxlQUFlO1FBQUs7UUFDckUsT0FBTztJQUNUO0lBQ0EsSUFBSSxJQUFJLENBQUMsSUFBRyxJQUFNLENBQUMsRUFBRSxjQUFjLEdBQUUsV0FBVyxXQUFXLFVBQVUsR0FBRSxLQUFLLFNBQVMsRUFBRSxRQUFTLENBQUEsRUFBRSxZQUFZLEtBQUssS0FBSyxHQUFFLEtBQUssWUFBWSxFQUFFLE9BQU07SUFDbkosSUFBSSxJQUFJLENBQUMsSUFBRyxHQUFHLElBQUksV0FBVyxNQUFNO1FBQ2xDLElBQUksS0FBSSxPQUFPO1lBQ2IsSUFBSSxFQUFFLEdBQUcsT0FBTSxDQUFDLEVBQUUsS0FBSyxTQUFTO2dCQUM5QixJQUFJLElBQUk7b0JBQUUsTUFBTSxHQUFFO29CQUFNLFNBQVMsR0FBRTtvQkFBUyxNQUFNLEVBQUUsS0FBSztnQkFBSyxHQUFHLElBQUksTUFBTSxJQUFJO2dCQUMvRSxFQUFFLFlBQVk7b0JBQUUsTUFBTSxHQUFFO29CQUFNLFNBQVMsR0FBRTtvQkFBUyxZQUFZLEVBQUUsS0FBSztvQkFBWSxNQUFNO29CQUFHLFNBQVM7Z0JBQUssR0FBRztvQkFBRSxjQUFjLEdBQUUsZ0JBQWdCO2dCQUFJO1lBQ25KO1FBQ0Y7UUFDQSxPQUFPLEVBQUUsaUJBQWlCLFdBQVcsS0FBSSxJQUFNLEVBQUUsb0JBQW9CLFdBQVc7SUFDbEY7SUFDQSxJQUFJLElBQUksQ0FBQyxJQUFHLElBQUksV0FBVyxNQUFNLEdBQUssSUFBSSxRQUFRLENBQUMsR0FBRztZQUNwRCxJQUFJLElBQUksQUFBQyxDQUFBLEdBQUcsY0FBYyxNQUFLLEtBQU0sSUFBSSxJQUFJO1lBQzdDLEVBQUUsaUJBQWlCLFdBQVcsQ0FBQztnQkFDN0IsRUFBRSxHQUFHLE9BQU0sRUFBRSxLQUFLLFdBQVcsRUFBRSxLQUFLLGVBQWUsS0FBTSxDQUFBLEVBQUUsRUFBRSxLQUFLLE9BQU8sRUFBRSxPQUFNO1lBQ25GLEdBQUc7Z0JBQUUsUUFBUSxFQUFFO1lBQU8sSUFBSSxFQUFFLFlBQVk7Z0JBQUUsR0FBRyxFQUFDO2dCQUFFLFlBQVk7WUFBRSxHQUFHO2dCQUFFLGNBQWMsR0FBRSxnQkFBZ0I7WUFBSTtRQUN6RztJQUNBLElBQUksSUFBSSxPQUFPLEtBQU0sSUFBSSxZQUFZLEdBQUUsZUFBZSxNQUFNO0lBQzVELElBQUksSUFBSSxPQUFPO1FBQ2IsSUFBSSxJQUFJLE9BQU8sR0FBRSxTQUFTLFdBQVcsR0FBRSxRQUFTLENBQUEsTUFBTSxHQUFFLEdBQUk7UUFDNUQsSUFBSSxDQUFDLEdBQUcsTUFBTSxJQUFJLE1BQU07UUFDeEIsT0FBTyxJQUFJLFlBQVksR0FBRztJQUM1QjtJQUNBLElBQUksSUFBSTtJQUNSLElBQUksSUFBSSxDQUFDLEtBQU0sRUFBRSxJQUFHO0lBQ3BCLElBQUksSUFBSTtJQUNSLElBQUksSUFBSTtJQUNSLElBQUksSUFBSTtJQUVSLGdEQUFnRDtJQUNoRCxJQUFJLHNCQUFtRDtJQUVyRCxJQUFJLE1BQU0sT0FBTztJQUNqQixJQUFJLE9BQU8sT0FBTyxRQUFRLFlBQVksSUFBSSxjQUFjLGFBQWEsS0FBSztRQUN4RSxJQUFJLFFBQVEsT0FBTyxLQUFLLEtBQUssT0FBTyxTQUFVLENBQUM7WUFDN0MsT0FBTyxNQUFNLGFBQWEsTUFBTTtRQUNsQztRQUNBLElBQUksTUFBTSxRQUFRLE9BQU87UUFDekIsT0FBTyxJQUFJO0lBQ2I7SUFDQSxPQUFPO0FBQ1Q7QUFFQSxJQUFJLE9BQU8sVUFBVSxZQUFZO0lBQy9CLFFBQVEsT0FBTyxHQUFHLFdBQVc7UUFBYyxPQUFPO0lBQU07SUFDeEQsRUFBRSxVQUFVO0FBQ2QsT0FBTyxJQUFJLFNBQVMsT0FBTyxVQUFVLFVBQVU7SUFDN0MsSUFBSyxJQUFJLE9BQU8sTUFDZCxJQUFJLE9BQU8sVUFBVSxlQUFlLEtBQUssT0FBTyxRQUFRLFFBQVEsY0FDN0QsQUFBQyxDQUFBLFNBQVUsR0FBRztRQUNiLFFBQVEsT0FBTyxHQUFHLEtBQUs7WUFBYyxPQUFPLEtBQUssQ0FBQyxJQUFJO1FBQUM7UUFDdkQsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSTtJQUNyQixDQUFBLEVBQUc7SUFHUCxFQUFFLFVBQVUsTUFBTSxZQUFZLFlBQVksTUFBTSxVQUFVO0lBQzFELElBQUksTUFBTSxZQUFZLFdBQ3BCLFFBQVEsT0FBTyxHQUFHLFdBQVc7UUFBYyxPQUFPLE1BQU07SUFBUTtBQUVwRSxPQUFPO0lBQ0wsRUFBRSxVQUFVO0lBQ1osUUFBUSxPQUFPLEdBQUcsV0FBVztRQUFjLE9BQU87SUFBTTtBQUMxRDs7O0FDMUlBOzs7OztDQUtDOztBQW9DRCwrRUFBK0UsR0FDL0UsbURBQWdCO0FBbUNoQix3REFBc0I7QUFxRHRCOzs7Q0FHQyxHQUNELHlEQUFzQjtBQWlFdEIsMERBQTBELEdBQzFELHVEQUFzQjtBQWV0Qjs7O0NBR0MsR0FDRCxxREFBc0I7QUE0Q3RCLHVEQUF1RCxHQUN2RCwyREFBZ0I7QUFtQmhCLHlEQUFzQjtBQWlCdEIsd0RBQXNCO0FBT3RCOzs7Q0FHQyxHQUNELGlEQUFzQjtBQXVCdEIsZ0VBQWdFLEdBQ2hFLDJEQUFnQjtBQVVoQiwyREFDRSxDQUFBLEdBQUEsNEJBQW9CO0FBRHRCLGtEQUVFLENBQUEsR0FBQSxzQkFBVztBQUZiLDJDQUdFLENBQUEsR0FBQSxZQUFJO0FBclZOO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBUUEsd0VBQXdFLEdBQ3hFLE1BQU0sZUFBdUM7SUFDM0MsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1YsUUFBUTtBQUNWO0FBUU8sU0FBUyxjQUNkLEVBQThCLEVBQzlCLGFBQXVCO0lBQUM7SUFBUztJQUFVO0NBQU87SUFFbEQsSUFBSSxDQUFDLElBQUk7SUFDVCxLQUFLLE1BQU0sUUFBUSxXQUFZO1FBQzdCLElBQUk7UUFDSixJQUNFLEFBQUMsQ0FBQSxTQUFTLGVBQWUsU0FBUyxhQUFhLFNBQVMsT0FBTSxLQUM5RCxPQUFPLGVBQWUsWUFFdEIsS0FBSyxJQUFJLFdBQVcsTUFBTTtZQUFFLFNBQVM7WUFBTSxZQUFZO1FBQUs7YUFDdkQsSUFDTCxBQUFDLENBQUEsU0FBUyxXQUFXLFNBQVMsTUFBSyxLQUNuQyxPQUFPLGVBQWUsWUFFdEIsS0FBSyxJQUFJLFdBQVcsTUFBTTtZQUFFLFNBQVM7WUFBTSxZQUFZO1FBQUs7YUFDdkQsSUFBSSxTQUFTLFdBQVcsT0FBTyxlQUFlLFlBQVk7WUFDL0QsTUFBTSxRQUNKLFdBQVcsTUFBTSxPQUFPLEFBQUMsR0FBd0IsVUFBVSxXQUN2RCxBQUFDLEdBQXdCLFFBQ3pCO1lBQ04sS0FBSyxJQUFJLFdBQVcsTUFBTTtnQkFDeEIsU0FBUztnQkFDVCxZQUFZO2dCQUNaLE1BQU07Z0JBQ04sV0FBVztZQUNiO1FBQ0YsT0FDRSxLQUFLLElBQUksTUFBTSxNQUFNO1lBQUUsU0FBUztZQUFNLFlBQVk7UUFBSztRQUV6RCxHQUFHLGNBQWM7SUFDbkI7QUFDRjtBQUVPLGVBQWUsbUJBQ3BCLEtBQWdFLEVBQ2hFLEtBQWE7SUFFYixNQUFNLENBQUEsR0FBQSw0QkFBb0IsRUFBRSxPQUFPO0FBQ3JDO0FBRUEsU0FBUyxnQkFBZ0IsT0FBeUI7SUFDaEQsTUFBTSxjQUFjLENBQUEsR0FBQSxzQ0FBc0IsRUFBRSxDQUFBLEdBQUEsZ0NBQWdCLEVBQUU7SUFDOUQsSUFBSSxhQUFhLE9BQU87SUFDeEIsT0FBTztBQUNUO0FBRUEsU0FBUyxtQkFBbUIsU0FBaUIsRUFBRSxNQUFlO0lBQzVELE1BQU0sYUFDSixPQUFPLFdBQVcsWUFBWSxPQUFPLFdBQVcsV0FDNUMsT0FBTyxRQUFRLGNBQWMsU0FDN0I7SUFDTixPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUEsR0FBQSwrQkFBaUIsRUFBRSxXQUFXO0FBQ3ZEO0FBRUE7OztDQUdDLEdBQ0QsZUFBZSxvQkFDYixPQUF5QixFQUN6QixPQUFrQixFQUNsQixVQUE4QixFQUM5QixTQUF5QixDQUFBLEdBQUEsc0JBQVcsQ0FBQztJQUVyQyxNQUFNLFlBQVksZ0JBQWdCO0lBQ2xDLElBQUksQ0FBQyxXQUFXO0lBRWhCLElBQUksUUFBUSxLQUFLLENBQUMsSUFBTSxtQkFBbUIsV0FBVyxLQUFLO1FBQ3pELE1BQU0sT0FBTyxTQUFTO1FBQ3RCO0lBQ0Y7SUFFQSxNQUFNLFFBQVEsT0FBTyxPQUFPLENBQUMsRUFBRSxJQUFJLElBQUk7SUFDdkMsTUFBTSxRQUFRLE9BQU8sY0FBYyxJQUFJO0lBQ3ZDLE1BQU0sY0FDSixBQUFDLFVBQVUsVUFBVSxjQUFjLFNBQ2xDLFVBQVUsV0FBVyxjQUFjLFFBQ25DLFVBQVUsU0FBUyxnQkFBZ0IsVUFBVSxVQUM3QyxDQUFBLEdBQUEsdUJBQVEsRUFBRSxXQUFXLGNBQWMsT0FBTyxVQUFVLFVBQ3BELFVBQVUsVUFDUixDQUFBLFVBQVUsU0FBUyxjQUFjLE1BQU0sU0FBUyxVQUFTLEtBQzNELE1BQU0sU0FBUyxjQUFjLFVBQVU7SUFFMUMsSUFBSSxhQUFhLE1BQU0sT0FBTyxTQUFTO0FBQ3pDO0FBTU8sZUFBZSxvQkFDcEIsS0FBeUMsRUFDekMsVUFBbUIsRUFDbkIsU0FBeUIsQ0FBQSxHQUFBLHNCQUFXLENBQUM7SUFFckMscURBQXFEO0lBQ3JELElBQUksTUFBTSxRQUFRLFVBQVUsQ0FBQyxBQUFDLE1BQXdCLFlBQ3BELE9BQU8sa0JBQWtCLE9BQTZCO0lBR3hELE1BQU0sVUFBVSxBQUNkLENBQUEsTUFBTSxRQUFRLGNBQWMsYUFBYTtRQUFDO0tBQVcsQUFBRCxFQUNwRCxPQUFPLENBQUMsSUFBTSxDQUFBLEdBQUEsZ0NBQWtCLEVBQUU7SUFDcEMsSUFBSSxDQUFDLFFBQVEsUUFBUSxPQUFPO0lBRTVCLE1BQU0sV0FBVztJQUNqQixNQUFNLFNBQVMsTUFBTSxLQUFLLFNBQVMsY0FBYyxFQUFFO0lBQ25ELE1BQU0saUJBQ0osT0FBTyxTQUFTLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFFdkQsSUFBSSxnQkFBZ0I7UUFDbEIsTUFBTSxXQUFXLElBQUk7UUFDckIsTUFBTSxZQUFZLE9BQU8sTUFBTSxDQUFDLEtBQU8sR0FBRyxTQUFTO1FBRW5ELEtBQUssTUFBTSxVQUFVLFFBQVM7WUFDNUIsTUFBTSxPQUFPLENBQUEsR0FBQSxnQ0FBa0IsRUFBRTtZQUNqQyxJQUFJLENBQUMsTUFBTTtZQUVYLE1BQU0sWUFBWSxPQUFPLE9BQU8sQ0FBQyxLQUMvQixDQUFBLEdBQUEsK0JBQWlCLEVBQUUsZ0JBQWdCLEtBQUs7WUFFMUMsSUFBSSxVQUFVLFNBQVMsR0FBRyxPQUFPO1lBRWpDLElBQUksUUFBUSxDQUFBLEdBQUEsNEJBQWMsRUFBRSxRQUFRLE1BQU07WUFFMUMsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsTUFBTSxRQUFRLFlBQVksQ0FBQyxLQUFLO2dCQUNoQyxJQUFJLE9BQU87b0JBQ1QsTUFBTSxZQUFZLE9BQU8sT0FBTyxDQUFDLEtBQy9CLENBQUEsR0FBQSwrQkFBaUIsRUFBRSxnQkFBZ0IsS0FBSztvQkFFMUMsSUFBSSxVQUFVLFNBQVMsR0FBRyxPQUFPO29CQUNqQyxRQUFRLENBQUEsR0FBQSw0QkFBYyxFQUFFLFFBQVEsT0FBTztnQkFDekM7WUFDRjtZQUVBLElBQUksQ0FBQyxPQUFPO2dCQUNWLElBQUksV0FBVztnQkFDZixPQUFPO1lBQ1Q7WUFFQSxTQUFTLElBQUk7WUFDYixJQUFJLFdBQVc7UUFDakI7UUFFQSxJQUFJLENBQUMsU0FBUyxNQUFNLE9BQU87UUFDM0IsS0FBSyxNQUFNLE1BQU0sU0FBVSxNQUFNLE9BQU8sSUFBSTtRQUM1QztJQUNGO0lBRUEsS0FBSyxNQUFNLE9BQU8sT0FDaEIsTUFBTSxvQkFBb0IsS0FBSyxTQUFTLFNBQVMsT0FBTztBQUU1RDtBQUdPLGVBQWUsa0JBQ3BCLEtBQXlCLEVBQ3pCLE1BQWdCO0lBRWhCLElBQUksU0FBUztJQUNiLEtBQUssTUFBTSxRQUFRLE9BQVE7UUFDekIsTUFBTSxRQUFRLENBQUEsR0FBQSw0QkFBYyxFQUFFLE9BQU8sTUFBTTtRQUMzQyxJQUFJLE9BQU87WUFDVCxNQUFNLENBQUEsR0FBQSxzQkFBVyxFQUFFLE9BQU87WUFDMUIsVUFBVTtRQUNaO0lBQ0Y7SUFDQSxPQUFPO0FBQ1Q7QUFNTyxlQUFlLGdCQUNwQixNQUE0QyxFQUM1QyxPQUEwQjtJQUUxQixJQUFJLENBQUMsUUFBUSxPQUFPO0lBQ3BCLE1BQU0sT0FBTyxBQUFDLENBQUEsTUFBTSxRQUFRLFdBQVcsVUFBVTtRQUFDO0tBQVEsQUFBRCxFQUFHLE9BQU87SUFDbkUsSUFBSSxDQUFDLEtBQUssUUFBUSxPQUFPO0lBRXpCLE1BQU0sVUFBVSxJQUFJLFdBQVcsU0FBUztRQUN0QyxTQUFTO1FBQ1QsWUFBWTtRQUNaLE1BQU07SUFDUjtJQUNBLE9BQU8sY0FBYztJQUNyQixPQUFPO0lBRVAsSUFBSSxPQUFPLFNBQVMsUUFDbEIsSUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sUUFBUSxRQUFRLElBQUs7UUFDOUMsTUFBTSxNQUFNLE9BQU8sT0FBTyxDQUFDLEVBQUU7UUFDN0IsSUFDRSxLQUFLLFNBQ0wsSUFBSSxRQUNKLEtBQUssS0FBSyxDQUFDLElBQU0sQ0FBQSxHQUFBLHVCQUFRLEVBQUUsR0FBRyxJQUFJLFNBQVMsQ0FBQSxHQUFBLCtCQUFpQixFQUFFLElBQUksTUFBTSxLQUN4RTtZQUNBLElBQUk7WUFDSixJQUFJLGNBQ0YsSUFBSSxXQUFXLGFBQWE7Z0JBQUUsU0FBUztnQkFBTSxZQUFZO1lBQUs7WUFFaEUsSUFBSSxjQUNGLElBQUksV0FBVyxXQUFXO2dCQUFFLFNBQVM7Z0JBQU0sWUFBWTtZQUFLO1lBRTlELElBQUksV0FBVztZQUNmLE9BQU8sY0FDTCxJQUFJLE1BQU0sVUFBVTtnQkFBRSxTQUFTO2dCQUFNLFlBQVk7WUFBSztZQUV4RCxPQUFPO1lBQ1AsT0FBTztRQUNUO0lBQ0Y7SUFFRixPQUFPO0lBQ1AsT0FBTztBQUNUO0FBR08sU0FBUyxzQkFDZCxNQUE0QyxFQUM1QyxNQUF5QjtJQUV6QixJQUFJLENBQUMsUUFBUSxTQUFTLE9BQU87SUFDN0IsTUFBTSxRQUFRLEFBQUMsQ0FBQSxNQUFNLFFBQVEsVUFBVSxTQUFTO1FBQUM7S0FBTyxBQUFELEVBQUcsSUFBSTtJQUM5RCxLQUFLLE1BQU0sUUFBUSxNQUNqQixJQUFLLElBQUksSUFBSSxHQUFHLElBQUksT0FBTyxRQUFRLFFBQVEsSUFBSztRQUM5QyxNQUFNLE1BQU0sT0FBTyxPQUFPLENBQUMsRUFBRTtRQUM3QixJQUFJLElBQUksU0FBUyxRQUFRLElBQUksVUFBVSxNQUFNO1lBQzNDLElBQUksV0FBVztZQUNmLE9BQU8sY0FBYyxJQUFJLE1BQU0sVUFBVTtnQkFBRSxTQUFTO1lBQUs7WUFDekQsT0FBTztRQUNUO0lBQ0Y7SUFFRixPQUFPO0FBQ1Q7QUFFTyxlQUFlLG9CQUNwQixNQUEwQixFQUMxQixLQUF3QjtJQUV4QixNQUFNLE9BQU8sTUFBTSxRQUFRLFNBQVMsS0FBSyxDQUFDLEVBQUUsR0FBRztJQUMvQyxJQUFJLENBQUMsTUFBTSxPQUFPO0lBQ2xCLE1BQU0sUUFBUSxDQUFBLEdBQUEsNEJBQWMsRUFBRSxRQUFRLE1BQU07SUFDNUMsSUFBSSxDQUFDLE9BQU8sT0FBTztJQUNuQixJQUFJLENBQUMsTUFBTSxTQUFTO1FBQ2xCLE1BQU07UUFDTixNQUFNLFVBQVU7UUFDaEIsTUFBTSxjQUFjLElBQUksTUFBTSxVQUFVO1lBQUUsU0FBUztRQUFLO1FBQ3hELE1BQU0sY0FBYyxJQUFJLE1BQU0sU0FBUztZQUFFLFNBQVM7UUFBSztJQUN6RDtJQUNBLE9BQU87QUFDVDtBQUVPLGVBQWUsbUJBQ3BCLEVBQW9CLEVBQ3BCLFVBQVUsSUFBSTtJQUVkLE1BQU0sQ0FBQSxHQUFBLHNCQUFXLEVBQUUsSUFBSTtBQUN6QjtBQU1PLGVBQWUsWUFDcEIsS0FBMEMsRUFDMUMsSUFBaUIsRUFDakIsUUFBZ0I7SUFFaEIsSUFBSSxDQUFDLFNBQVMsTUFBTSxTQUFTLFFBQVEsT0FBTztJQUU1QyxNQUFNLE9BQ0osZ0JBQWdCLE9BQ1osT0FDQSxJQUFJLEtBQUs7UUFBQztLQUFLLEVBQUUsVUFBVTtRQUN6QixNQUFNLEFBQUMsS0FBYyxRQUFRO0lBQy9CO0lBRU4sTUFBTSxLQUFLLElBQUk7SUFDZixHQUFHLE1BQU0sSUFBSTtJQUNiLE1BQU0sUUFBUSxHQUFHO0lBQ2pCLE1BQU0sY0FBYyxJQUFJLE1BQU0sU0FBUztRQUFFLFNBQVM7SUFBSztJQUN2RCxNQUFNLGNBQWMsSUFBSSxNQUFNLFVBQVU7UUFBRSxTQUFTO0lBQUs7SUFDeEQsTUFBTSxDQUFBLEdBQUEsWUFBSSxFQUFFO0lBQ1osT0FBTztBQUNUO0FBR08sU0FBUyxzQkFBc0IsTUFBZTtJQUNuRCxPQUFPLEtBQUssWUFDVjtRQUNFLE1BQU0sQ0FBQSxHQUFBLHFCQUFhLEVBQUU7UUFDckI7SUFDRixHQUNBO1FBQUUsY0FBYztJQUFJO0FBRXhCOzs7QUN2VkE7O0NBRUM7O0FBRUQsMkRBQXNCO0FBQWYsZUFBZSxzQkFDcEIsRUFBNkQsRUFDN0QsS0FBYTtJQUViLElBQUksQ0FBQyxJQUFJO1FBQ1AsUUFBUSxNQUFNO1FBQ2Q7SUFDRjtJQUVBLEdBQUc7SUFDSCxNQUFNLFFBQVEsT0FBTyxlQUFlO0lBQ3BDLE1BQU0sT0FBTyxPQUFPLHlCQUF5QixPQUFPO0lBQ3BELElBQUksTUFBTSxLQUNSLEtBQUssSUFBSSxLQUFLLElBQUk7U0FFbEIsR0FBRyxRQUFRO0lBR2IsR0FBRyxjQUFjLElBQUksTUFBTSxTQUFTO1FBQUUsU0FBUztRQUFNLFlBQVk7SUFBSztJQUN0RSxHQUFHLGNBQWMsSUFBSSxNQUFNLFVBQVU7UUFBRSxTQUFTO1FBQU0sWUFBWTtJQUFLO0lBQ3ZFLEdBQUcsY0FBYyxJQUFJLE1BQU07SUFDM0IsR0FBRyxjQUNELElBQUksY0FBYyxXQUFXO1FBQUUsU0FBUztRQUFNLFlBQVk7UUFBTSxLQUFLO1FBQVMsU0FBUztJQUFHO0lBRTVGLEdBQUcsY0FDRCxJQUFJLGNBQWMsU0FBUztRQUFFLFNBQVM7UUFBTSxZQUFZO1FBQU0sS0FBSztRQUFTLFNBQVM7SUFBRztJQUUxRixHQUFHO0lBQ0gsR0FBRyxjQUFjLElBQUksV0FBVyxTQUFTO1FBQUUsU0FBUztRQUFNLFlBQVk7SUFBSztJQUMzRSxHQUFHLGNBQWMsSUFBSSxXQUFXLFNBQVM7UUFBRSxTQUFTO1FBQU0sWUFBWTtJQUFLO0lBQzNFLEdBQUcsY0FBYyxJQUFJLE1BQU0sVUFBVTtRQUFFLFNBQVM7UUFBTSxZQUFZO0lBQUs7SUFDdkUsR0FBRyxjQUFjLElBQUksV0FBVyxRQUFRO1FBQUUsU0FBUztRQUFNLFlBQVk7SUFBSztBQUM1RTs7Ozs7QUNqQ0Esa0RBQXNCO0FBZ0J0Qiw0REFBc0I7QUF3QnRCLHNEQUFzQjtBQTNDdEI7QUFDQTtBQUVPLGVBQWUsYUFDcEIsRUFBdUMsRUFDdkMsVUFBVSxJQUFJO0lBRWQsSUFBSSxDQUFDLElBQUk7SUFDVCxHQUFHO0lBQ0gsSUFBSSxHQUFHLFlBQVksU0FBUztRQUMxQixHQUFHO1FBQ0gsTUFBTSxDQUFBLEdBQUEsWUFBSSxFQUFFO0lBQ2Q7SUFDQSxHQUFHLFVBQVU7SUFDYixHQUFHLGNBQWMsSUFBSSxNQUFNLFVBQVU7UUFBRSxTQUFTO0lBQUs7SUFDckQsTUFBTSxPQUFPLEdBQUcsUUFBUTtJQUN4QixJQUFJLE1BQU0sS0FBSztBQUNqQjtBQUVPLGVBQWUsdUJBQ3BCLFVBQThCLEVBQzlCLEtBQWU7SUFFZixJQUFJLFNBQVM7SUFDYixLQUFLLE1BQU0sUUFBUSxNQUNqQixLQUFLLE1BQU0sT0FBTyxXQUFZO1FBQzVCLE1BQU0sUUFDSixBQUFDLElBQUksTUFDSCxTQUFTLGNBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFLENBQUMsR0FDdkQsZUFDTixJQUFJLFFBQVEsVUFBVSxlQUN0QixJQUFJLGFBQWEsaUJBQ2pCLElBQUk7UUFDTixJQUFJLENBQUEsR0FBQSwrQkFBaUIsRUFBRSxPQUFPLE9BQU87WUFDbkMsTUFBTSxhQUFhLEtBQUs7WUFDeEIsVUFBVTtZQUNWO1FBQ0Y7SUFDRjtJQUVGLE9BQU87QUFDVDtBQUVPLGVBQWUsaUJBQ3BCLE1BQTBCLEVBQzFCLElBQVk7SUFFWixLQUFLLE1BQU0sU0FBUyxPQUFRO1FBQzFCLE1BQU0sUUFDSixBQUFDLE1BQU0sTUFDTCxTQUFTLGNBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxPQUFPLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FDekQsZUFDTixNQUFNLFFBQVEsVUFBVSxlQUN4QixNQUFNLGFBQWEsaUJBQ25CLE1BQU07UUFDUixJQUFJLENBQUEsR0FBQSwrQkFBaUIsRUFBRSxPQUFPLE9BQU87WUFDbkMsSUFBSSxDQUFDLE1BQU0sU0FBUztnQkFDbEIsTUFBTTtnQkFDTixNQUFNLFVBQVU7Z0JBQ2hCLE1BQU0sY0FBYyxJQUFJLE1BQU0sVUFBVTtvQkFBRSxTQUFTO2dCQUFLO2dCQUN4RCxNQUFNLGNBQWMsSUFBSSxNQUFNLFNBQVM7b0JBQUUsU0FBUztnQkFBSztZQUN6RDtZQUNBLE9BQU87UUFDVDtJQUNGO0lBQ0EsT0FBTztBQUNUOzs7QUNsRUE7O0NBRUM7O0FBRUQseURBQWdCO0FBV2hCLHdEQUFnQjtBQUtoQixxREFBZ0I7QUFnQmhCLHdEQUF3RCxHQUN4RCxnREFBZ0I7QUFjaEIsbURBQWdCO0FBL0NULFNBQVMsb0JBQW9CLEtBQWM7SUFDaEQsSUFBSSxPQUFPLFVBQVUsWUFBWSxPQUFPLFVBQVUsVUFBVSxPQUFPO0lBQ25FLE9BQU8sT0FBTyxPQUNYLFVBQVUsUUFDVixRQUFRLG1CQUFtQixLQUMzQixRQUFRLG1CQUFtQixLQUMzQixRQUFRLFFBQVEsS0FDaEIsT0FDQTtBQUNMO0FBRU8sU0FBUyxtQkFBbUIsVUFBbUIsRUFBRSxJQUFhO0lBQ25FLE1BQU0sSUFBSSxvQkFBb0I7SUFDOUIsT0FBTyxDQUFDLENBQUMsS0FBSyxvQkFBb0IsZ0JBQWdCO0FBQ3BEO0FBRU8sU0FBUyxnQkFDZCxLQUFVLEVBQ1YsSUFBYSxFQUNiLFFBQThCLEVBQzlCLFlBQW1DO0lBRW5DLElBQUksQ0FBQyxvQkFBb0IsT0FBTyxPQUFPO0lBQ3ZDLE1BQU0sVUFBVSxNQUFNLE9BQU8sQ0FBQyxPQUFTLG1CQUFtQixTQUFTLE9BQU87SUFDMUUsSUFBSSxRQUFRLFdBQVcsR0FBRyxPQUFPLE9BQU8sQ0FBQyxFQUFFO0lBQzNDLElBQUksUUFBUSxTQUFTLEtBQUssQ0FBQyxjQUFjLE9BQU87SUFDaEQsTUFBTSxRQUFRLE1BQU0sT0FBTyxDQUFDLE9BQzFCLG1CQUFtQixhQUFhLE9BQU87SUFFekMsT0FBTyxNQUFNLFdBQVcsSUFBSSxLQUFLLENBQUMsRUFBRSxHQUFHO0FBQ3pDO0FBR08sU0FBUyxXQUFXLENBQVMsRUFBRSxDQUFTO0lBQzdDLE1BQU0sS0FBSyxvQkFBb0I7SUFDL0IsTUFBTSxLQUFLLG9CQUFvQjtJQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTztJQUN2QixJQUFJLE9BQU8sSUFBSSxPQUFPO0lBQ3RCLElBQUksR0FBRyxTQUFTLE9BQU8sR0FBRyxTQUFTLEtBQUssT0FBTztJQUMvQyxNQUFNLEtBQUssSUFBSSxJQUFJLEdBQUcsTUFBTSxLQUFLLE9BQU87SUFDeEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxLQUFLLE9BQU87SUFDaEMsSUFBSSxDQUFDLEdBQUcsUUFBUSxPQUFPO0lBQ3ZCLElBQUksTUFBTTtJQUNWLEtBQUssTUFBTSxLQUFLLEdBQUksSUFBSSxHQUFHLElBQUksSUFBSSxPQUFPO0lBQzFDLE9BQU8sTUFBTSxLQUFLLElBQUksR0FBRyxNQUFNLEdBQUc7QUFDcEM7QUFFTyxTQUFTLGNBQ2QsS0FBVSxFQUNWLElBQVksRUFDWixRQUE2QixFQUM3QixXQUFXLElBQUk7SUFFZixJQUFJO0lBQ0osSUFBSSxZQUFZO0lBQ2hCLEtBQUssTUFBTSxRQUFRLE1BQU87UUFDeEIsTUFBTSxJQUFJLFdBQVcsTUFBTSxTQUFTO1FBQ3BDLElBQUksSUFBSSxXQUFXO1lBQ2pCLFlBQVk7WUFDWixPQUFPO1FBQ1Q7SUFDRjtJQUNBLE9BQU8sYUFBYSxXQUFXLE9BQU87QUFDeEM7OztBQ25FQTs7O0NBR0M7O0FBZUQsNkNBQTZDLEdBQzdDLHVEQUFnQjtBQXNCaEIsNkRBQWdCO0FBcENoQixTQUFTLE9BQU8sRUFBOEI7SUFDNUMsT0FBTyxBQUFDLENBQUEsSUFBSSxlQUFlLEVBQUMsRUFBRztBQUNqQztBQUVBLFNBQVMsY0FBYyxLQUF1QjtJQUM1QyxJQUFJLENBQUMsTUFBTSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU87SUFDekQsSUFBSTtRQUNGLE9BQU8sU0FBUyxjQUFjLENBQUMsV0FBVyxFQUFFLElBQUksT0FBTyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ3RFLEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBR08sU0FBUyxrQkFBa0IsS0FBdUI7SUFDdkQsTUFBTSxTQUFTLE1BQU07SUFDckIsTUFBTSxRQUFRLFFBQVE7SUFDdEIsTUFBTSxhQUFnRDtRQUNwRCxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sUUFBUSxXQUFXO1FBQy9ELGNBQWM7UUFDZDtRQUNBLFFBQVE7UUFDUixRQUFRO1FBQ1I7S0FDRDtJQUNELEtBQUssTUFBTSxNQUFNLFdBQVk7UUFDM0IsTUFBTSxJQUFJLE9BQU87UUFDakIsSUFBSSxHQUFHLE9BQU87SUFDaEI7SUFDQSxPQUNFLE1BQU0sYUFBYSxpQkFDbkIsTUFBTSxTQUNOO0FBRUo7QUFFTyxTQUFTLHdCQUF3QixJQUFZO0lBQ2xELE9BQU8sS0FBSyxjQUFjLE9BQU8sUUFBUSxLQUFLO0FBQ2hEOzs7QUMzQ0EsMERBQTBEOzs7Ozs7K0NBaUQ3QztJQS9DTjtVQUFLLFdBQVc7SUFBWCxZQUFBLFlBQ1YsYUFBVSxLQUFWO0lBRFUsWUFBQSxZQUVWLGFBQVUsS0FBVjtJQUZVLFlBQUEsWUFHVixZQUFTLEtBQVQ7SUFIVSxZQUFBLFlBSVYsWUFBUyxLQUFUO0dBSlUsZ0JBQUE7SUFPTDtVQUFLLGNBQWM7SUFBZCxlQUNWLDhCQUFBO0lBRFUsZUFFVixnQ0FBQTtJQUZVLGVBR1YsMEJBQUE7SUFIVSxlQUlWLDRCQUFBO0lBSlUsZUFLViwwQkFBQTtJQUxVLGVBTVYsbUJBQUE7SUFOVSxlQU9WLDZCQUFBO0lBUFUsZUFRVix3QkFBQTtJQVJVLGVBU1Ysd0JBQUE7SUFUVSxlQVVWLDJCQUFBO0dBVlUsbUJBQUE7SUFhTDtVQUFLLFVBQVU7SUFBVixXQUNWLFVBQU87SUFERyxXQUVWLFlBQVM7SUFGQyxXQUdWLGtCQUFlO0lBSEwsV0FJVixjQUFXO0lBSkQsV0FLVixZQUFTO0lBTEMsV0FNVixXQUFRO0lBTkUsV0FPVixZQUFTO0lBUEMsV0FRVixxQkFBa0I7SUFSUixXQVNWLGtCQUFlO0lBVEwsV0FVVixhQUFVO0lBVkEsV0FXVixnQkFBYTtJQVhILFdBWVYsZUFBWTtJQVpGLFdBYVYsY0FBVztJQWJELFdBY1YsVUFBTztJQWRHLFdBZVYsZ0JBQWE7SUFmSCxXQWdCVixzQkFBbUI7SUFoQlQsV0FpQlYsYUFBVTtJQWpCQSxXQWtCVixrQkFBZTtHQWxCTCxlQUFBO0lBcUJMO1VBQUssa0JBQWtCO0lBQWxCLG1CQUFBLG1CQUNWLGFBQVUsS0FBVjtJQURVLG1CQUFBLG1CQUVWLGFBQVUsS0FBVjtJQUZVLG1CQUFBLG1CQUdWLFlBQVMsS0FBVDtHQUhVLHVCQUFBO0FBTUwsTUFBTSxZQUFZO0lBQ3ZCLEtBQUs7SUFDTCxLQUFLO0lBQ0wsTUFBTTtBQUNSIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0yZDNiZWI2ZDU0ODFjOWRkLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL25hdGl2ZS1maWxsZXIudHMiLCJzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy9kZWxheS50cyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwic3JjL2NvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItZmFjdG9yeS50cyIsInNyYy9jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLWdyZWVuaG91c2UudHMiLCJzcmMvY29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1nZW5lcmljLnRzIiwic3JjL2NvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItbGV2ZXIudHMiLCJzcmMvY29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1wZXJzb25pby50cyIsInNyYy9jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLXdvcmtkYXkudHMiLCJzcmMvY29udGVudHMvY3Jhd2xlci9kZXRlY3QtcmVnaXN0cnkudHMiLCJzcmMvY29yZS9zdXBwb3J0ZWQtc2l0ZXMudHMiLCJzcmMvY29yZS9tYXRjaC1wYXR0ZXJucy50cyIsInNyYy9jb3JlL3NpdGUtcmVnaXN0cnkucmF3LmpzIiwic3JjL2NvbnRlbnRzL2NyYXdsZXIvdHlwZXMudHMiLCJzcmMvY29udGVudHMvbWV0aG9kcy9uYXRpdmUtYW5zd2VyLnRzIiwic3JjL0BwbGFzbW9ocS9tZXNzYWdpbmcuanMiLCJzcmMvY29udGVudHMvbWV0aG9kcy9uYXRpdmUtZG9tLnRzIiwic3JjL2NvbnRlbnRzL2NyYXdsZXIvdXRpbHMvaW5wdXQudHMiLCJzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy9jaGVja2JveC50cyIsInNyYy9jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaC50cyIsInNyYy9jb250ZW50cy9tZXRob2RzL2NoZWNrYm94LWxhYmVsLnRzIiwic3JjL2NvcmUvZW51bXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcbmF0aXZlLWZpbGxlci50c1wiLFwiYnVuZGxlSWRcIjpcIjM0OWVkYWEyMjdhYWIyNTBcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBDbGVhbi1UUyBCYXNlRmlsbGVyIOKAlCBkaXNjb3ZlciDihpIgYW5zd2VycyDihpIgZmlsbCBuYXRpdmUgZmllbGRzIOKGkiB1cGxvYWQgZG9jcy5cclxuICogUmVwbGFjZXMgUGFyY2VsIGZpbGwgKm9wZXJhdGlvbnMqIGZvciBzaXRlcyB3aXRoIG5hdGl2ZSBIVE1MIGNvbnRyb2xzLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgZGV0ZWN0QXRzU2l0ZSxcclxuICBkaXNjb3ZlckZpZWxkc0ZvclNpdGVcclxufSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItZmFjdG9yeVwiXHJcbmltcG9ydCB0eXBlIHsgQXRzU2l0ZUlkLCBEaXNjb3ZlcmVkRmllbGQgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdHlwZXNcIlxyXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci91dGlscy9kZWxheVwiXHJcbmltcG9ydCB7XHJcbiAgYW5zd2VyTWFwLFxyXG4gIGZldGNoQ292ZXJMZXR0ZXJGaWxlLFxyXG4gIGZldGNoRm9ybUFuc3dlcnMsXHJcbiAgZmV0Y2hSZXN1bWVGaWxlLFxyXG4gIGxvb2t1cEZpZWxkQW5zd2VyLFxyXG4gIHR5cGUgRmlsbEFuc3dlclxyXG59IGZyb20gXCJ+Y29udGVudHMvbWV0aG9kcy9uYXRpdmUtYW5zd2VyXCJcclxuaW1wb3J0IHtcclxuICBmaWxsQ2hlY2tib3hGaWVsZCxcclxuICBmaWxsSW5wdXRUZXh0RmllbGQsXHJcbiAgZmlsbFJhZGlvR3JvdXBGaWVsZCxcclxuICBmaWxsU2VsZWN0RmllbGQsXHJcbiAgdXBsb2FkRmlsZXNcclxufSBmcm9tIFwifmNvbnRlbnRzL21ldGhvZHMvbmF0aXZlLWRvbVwiXHJcblxyXG5leHBvcnQgdHlwZSBGaWxsUmVwb3J0ID0ge1xyXG4gIHNpdGU6IEF0c1NpdGVJZFxyXG4gIGRpc2NvdmVyZWQ6IG51bWJlclxyXG4gIGFuc3dlcmVkOiBudW1iZXJcclxuICBmaWxsZWQ6IG51bWJlclxyXG4gIG1pc3NlZDogc3RyaW5nW11cclxuICByZXN1bWVVcGxvYWRlZDogYm9vbGVhblxyXG4gIGNvdmVyTGV0dGVyVXBsb2FkZWQ6IGJvb2xlYW5cclxufVxyXG5cclxuZnVuY3Rpb24gZmluZElucHV0Rm9yTGFiZWwobGFiZWw6IHN0cmluZyk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgY29uc3Qgd2FudCA9IGxhYmVsLnJlcGxhY2UoL1xccypcXCorXFxzKi9nLCBcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKClcclxuICBjb25zdCBsYWJlbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsYWJlbFwiKSlcclxuICBmb3IgKGNvbnN0IGxhYiBvZiBsYWJlbHMpIHtcclxuICAgIGNvbnN0IHRleHQgPSAobGFiLnRleHRDb250ZW50IHx8IFwiXCIpXHJcbiAgICAgIC5yZXBsYWNlKC9cXHMqXFwqK1xccyovZywgXCIgXCIpXHJcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxyXG4gICAgICAudHJpbSgpXHJcbiAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICBpZiAodGV4dCAhPT0gd2FudCAmJiAhdGV4dC5zdGFydHNXaXRoKHdhbnQpKSBjb250aW51ZVxyXG4gICAgaWYgKGxhYi5odG1sRm9yKSB7XHJcbiAgICAgIGNvbnN0IGJ5SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYWIuaHRtbEZvcilcclxuICAgICAgaWYgKGJ5SWQpIHJldHVybiBieUlkXHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXN0ZWQgPSBsYWIucXVlcnlTZWxlY3RvcihcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpXHJcbiAgICBpZiAobmVzdGVkKSByZXR1cm4gbmVzdGVkIGFzIEhUTUxFbGVtZW50XHJcbiAgfVxyXG5cclxuICAvLyBhcmlhLWxhYmVsIC8gYXJpYS1sYWJlbGxlZGJ5IGZhbGxiYWNrXHJcbiAgY29uc3QgY29udHJvbHMgPSBBcnJheS5mcm9tKFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpXHJcbiAgKSBhcyBIVE1MRWxlbWVudFtdXHJcbiAgZm9yIChjb25zdCBlbCBvZiBjb250cm9scykge1xyXG4gICAgY29uc3QgYXJpYSA9IChlbC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpIHx8IFwiXCIpLnRvTG93ZXJDYXNlKClcclxuICAgIGlmIChhcmlhICYmIGFyaWEucmVwbGFjZSgvXFxzKlxcKi9nLCBcIlwiKS50cmltKCkgPT09IHdhbnQpIHJldHVybiBlbFxyXG4gIH1cclxuICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xsZWN0UmFkaW9zKG5hbWVPckVsOiBIVE1MSW5wdXRFbGVtZW50KTogSFRNTElucHV0RWxlbWVudFtdIHtcclxuICBjb25zdCBuYW1lID0gbmFtZU9yRWwubmFtZVxyXG4gIGlmIChuYW1lKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCIke0NTUy5lc2NhcGUobmFtZSl9XCJdYClcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudFtdXHJcbiAgfVxyXG4gIGNvbnN0IHBhcmVudCA9IG5hbWVPckVsLmNsb3Nlc3QoXCJmaWVsZHNldCwgZGl2LCBzZWN0aW9uXCIpIHx8IGRvY3VtZW50LmJvZHlcclxuICByZXR1cm4gQXJyYXkuZnJvbShcclxuICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG4gICkgYXMgSFRNTElucHV0RWxlbWVudFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3RDaGVja2JveGVzKGVsOiBIVE1MSW5wdXRFbGVtZW50KTogSFRNTElucHV0RWxlbWVudFtdIHtcclxuICBjb25zdCBwYXJlbnQgPSBlbC5jbG9zZXN0KFwiZmllbGRzZXQsIGRpdiwgc2VjdGlvblwiKSB8fCBkb2N1bWVudC5ib2R5XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oXHJcbiAgICBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcclxuICApIGFzIEhUTUxJbnB1dEVsZW1lbnRbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUZpbGxlciB7XHJcbiAgc2l0ZTogQXRzU2l0ZUlkXHJcbiAgaG9zdG5hbWU6IHN0cmluZ1xyXG4gIGhyZWY6IHN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRzPzogeyBob3N0bmFtZT86IHN0cmluZzsgaHJlZj86IHN0cmluZzsgc2l0ZT86IEF0c1NpdGVJZCB9KSB7XHJcbiAgICB0aGlzLmhvc3RuYW1lID1cclxuICAgICAgb3B0cz8uaG9zdG5hbWUgfHxcclxuICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiA/IGxvY2F0aW9uLmhvc3RuYW1lIDogXCJcIilcclxuICAgIHRoaXMuaHJlZiA9XHJcbiAgICAgIG9wdHM/LmhyZWYgfHwgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiA/IGxvY2F0aW9uLmhyZWYgOiBcIlwiKVxyXG4gICAgdGhpcy5zaXRlID0gb3B0cz8uc2l0ZSB8fCBkZXRlY3RBdHNTaXRlKHRoaXMuaG9zdG5hbWUsIHRoaXMuaHJlZilcclxuICB9XHJcblxyXG4gIGRpc2NvdmVyKGRvYzogRG9jdW1lbnQgPSBkb2N1bWVudCk6IERpc2NvdmVyZWRGaWVsZFtdIHtcclxuICAgIHJldHVybiBkaXNjb3ZlckZpZWxkc0ZvclNpdGUodGhpcy5zaXRlLCBkb2MpXHJcbiAgfVxyXG5cclxuICBhc3luYyBmaWxsRmllbGQoZmllbGQ6IERpc2NvdmVyZWRGaWVsZCwgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgZWwgPSBmaW5kSW5wdXRGb3JMYWJlbChmaWVsZC5sYWJlbClcclxuICAgIGlmICghZWwpIHJldHVybiBmYWxzZVxyXG5cclxuICAgIGlmIChmaWVsZC50eXBlID09PSBcInNlbGVjdFwiICYmIGVsIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIGZpbGxTZWxlY3RGaWVsZChlbCwgdmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLnR5cGUgPT09IFwicmFkaW9cIiAmJiBlbCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIGZpbGxSYWRpb0dyb3VwRmllbGQoY29sbGVjdFJhZGlvcyhlbCksIHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC50eXBlID09PSBcImNoZWNrYm94XCIgJiYgZWwgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IG4gPSBhd2FpdCBmaWxsQ2hlY2tib3hGaWVsZChcclxuICAgICAgICBjb2xsZWN0Q2hlY2tib3hlcyhlbCksXHJcbiAgICAgICAgdmFsdWUuc3BsaXQoL1ssO10vKS5tYXAoKHMpID0+IHMudHJpbSgpKS5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgKVxyXG4gICAgICByZXR1cm4gbiA+IDBcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGVsIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fFxyXG4gICAgICBlbCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnRcclxuICAgICkge1xyXG4gICAgICBhd2FpdCBmaWxsSW5wdXRUZXh0RmllbGQoZWwsIHZhbHVlKVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBsb2FkUmVzdW1lSWZQcmVzZW50KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgaW5wdXQgPVxyXG4gICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAnaW5wdXRbdHlwZT1cImZpbGVcIl1bbmFtZSo9XCJjdlwiIGldLCBpbnB1dFt0eXBlPVwiZmlsZVwiXVtuYW1lKj1cInJlc3VtZVwiIGldLCBpbnB1dFt0eXBlPVwiZmlsZVwiXVtpZCo9XCJjdlwiIGldLCBpbnB1dFt0eXBlPVwiZmlsZVwiXVtpZCo9XCJyZXN1bWVcIiBpXSwgaW5wdXRbdHlwZT1cImZpbGVcIl0nXHJcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGwpIHx8IG51bGxcclxuICAgIGlmICghaW5wdXQpIHJldHVybiBmYWxzZVxyXG4gICAgLy8gUHJlZmVyIENWL3Jlc3VtZSBsYWJlbGxlZCBpbnB1dCB3aGVuIG11bHRpcGxlXHJcbiAgICBjb25zdCB3cmFwcGVycyA9IEFycmF5LmZyb20oXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG9jdW1lbnQtZmllbGQtd3JhcHBlciwgW2NsYXNzKj0nZG9jdW1lbnQnXVwiKVxyXG4gICAgKVxyXG4gICAgbGV0IHRhcmdldCA9IGlucHV0XHJcbiAgICBmb3IgKGNvbnN0IHcgb2Ygd3JhcHBlcnMpIHtcclxuICAgICAgY29uc3QgbGFiZWwgPSAody50ZXh0Q29udGVudCB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIGlmICgvY292ZXJcXHMqbGV0dGVyfGFuc2NocmVpYmVuLy50ZXN0KGxhYmVsKSkgY29udGludWVcclxuICAgICAgaWYgKC9jdnxyZXN1bWV8bGViZW5zbGF1Zi8udGVzdChsYWJlbCkpIHtcclxuICAgICAgICBjb25zdCBmID0gdy5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsXHJcbiAgICAgICAgaWYgKGYpIHtcclxuICAgICAgICAgIHRhcmdldCA9IGZcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsZSA9IGF3YWl0IGZldGNoUmVzdW1lRmlsZSgpXHJcbiAgICBpZiAoIWZpbGUpIHJldHVybiBmYWxzZVxyXG4gICAgcmV0dXJuIHVwbG9hZEZpbGVzKHRhcmdldCwgZmlsZS5maWxlLCBmaWxlLmZpbGVOYW1lKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBsb2FkQ292ZXJMZXR0ZXJJZlByZXNlbnQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCB3cmFwcGVycyA9IEFycmF5LmZyb20oXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG9jdW1lbnQtZmllbGQtd3JhcHBlciwgW2NsYXNzKj0nZG9jdW1lbnQnXVwiKVxyXG4gICAgKVxyXG4gICAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IG51bGxcclxuICAgIGZvciAoY29uc3QgdyBvZiB3cmFwcGVycykge1xyXG4gICAgICBjb25zdCBsYWJlbCA9ICh3LnRleHRDb250ZW50IHx8IFwiXCIpLnRvTG93ZXJDYXNlKClcclxuICAgICAgaWYgKC9jb3ZlclxccypsZXR0ZXJ8YW5zY2hyZWliZW4vLnRlc3QobGFiZWwpKSB7XHJcbiAgICAgICAgaW5wdXQgPSB3LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAnaW5wdXRbdHlwZT1cImZpbGVcIl0nXHJcbiAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbFxyXG4gICAgICAgIGlmIChpbnB1dCkgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpbnB1dCkge1xyXG4gICAgICBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgJ2lucHV0W3R5cGU9XCJmaWxlXCJdW25hbWUqPVwiY292ZXJcIiBpXSwgaW5wdXRbdHlwZT1cImZpbGVcIl1baWQqPVwiY292ZXJcIiBpXSdcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuIGZhbHNlXHJcbiAgICBjb25zdCBmaWxlID0gYXdhaXQgZmV0Y2hDb3ZlckxldHRlckZpbGUoKVxyXG4gICAgaWYgKCFmaWxlKSByZXR1cm4gZmFsc2VcclxuICAgIHJldHVybiB1cGxvYWRGaWxlcyhpbnB1dCwgZmlsZS5maWxlLCBmaWxlLmZpbGVOYW1lKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZG9GaWxsRm9ybShkb2M6IERvY3VtZW50ID0gZG9jdW1lbnQpOiBQcm9taXNlPEZpbGxSZXBvcnQ+IHtcclxuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuZGlzY292ZXIoZG9jKVxyXG4gICAgY29uc3QgYW5zd2VycyA9IGF3YWl0IGZldGNoRm9ybUFuc3dlcnMoZmllbGRzKVxyXG4gICAgY29uc3QgbWFwID0gYW5zd2VyTWFwKGFuc3dlcnMpXHJcbiAgICBjb25zdCBtaXNzZWQ6IHN0cmluZ1tdID0gW11cclxuICAgIGxldCBmaWxsZWQgPSAwXHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBsb29rdXBGaWVsZEFuc3dlcihtYXAsIGZpZWxkLmxhYmVsKVxyXG4gICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgbWlzc2VkLnB1c2goZmllbGQubGFiZWwpXHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9rID0gYXdhaXQgdGhpcy5maWxsRmllbGQoZmllbGQsIHZhbHVlKVxyXG4gICAgICAgIGlmIChvaykgZmlsbGVkICs9IDFcclxuICAgICAgICBlbHNlIG1pc3NlZC5wdXNoKGZpZWxkLmxhYmVsKVxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICBtaXNzZWQucHVzaChmaWVsZC5sYWJlbClcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCBkZWxheSg0MClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bWVVcGxvYWRlZCA9IGF3YWl0IHRoaXMudXBsb2FkUmVzdW1lSWZQcmVzZW50KClcclxuICAgIGNvbnN0IGNvdmVyTGV0dGVyVXBsb2FkZWQgPSBhd2FpdCB0aGlzLnVwbG9hZENvdmVyTGV0dGVySWZQcmVzZW50KClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzaXRlOiB0aGlzLnNpdGUsXHJcbiAgICAgIGRpc2NvdmVyZWQ6IGZpZWxkcy5sZW5ndGgsXHJcbiAgICAgIGFuc3dlcmVkOiBhbnN3ZXJzLmxlbmd0aCxcclxuICAgICAgZmlsbGVkLFxyXG4gICAgICBtaXNzZWQsXHJcbiAgICAgIHJlc3VtZVVwbG9hZGVkLFxyXG4gICAgICBjb3ZlckxldHRlclVwbG9hZGVkXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiogU2l0ZXMgZnVsbHkgc3VwcG9ydGVkIGJ5IGNsZWFuLVRTIG5hdGl2ZSBmaWxsIChubyBjdXN0b20gd2lkZ2V0cyByZXF1aXJlZCkuICovXHJcbmV4cG9ydCBjb25zdCBDTEVBTl9UU19OQVRJVkVfU0lURVM6IEF0c1NpdGVJZFtdID0gW1xyXG4gIFwicGVyc29uaW9cIixcclxuICBcImdyZWVuaG91c2VcIixcclxuICBcImxldmVyXCIsXHJcbiAgXCJnZW5lcmljXCIsXHJcbiAgXCJhc2hieVwiLFxyXG4gIFwib3JhY2xlY2xvdWRcIixcclxuICBcInBheWNvbW9ubGluZS12M1wiLFxyXG4gIFwibXl3b3JrZGF5XCJcclxuXVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xlYW5Uc05hdGl2ZVNpdGUoc2l0ZTogQXRzU2l0ZUlkKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIENMRUFOX1RTX05BVElWRV9TSVRFUy5pbmNsdWRlcyhzaXRlKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuQ2xlYW5Uc0ZpbGwob3B0cz86IHtcclxuICBob3N0bmFtZT86IHN0cmluZ1xyXG4gIGhyZWY/OiBzdHJpbmdcclxufSk6IFByb21pc2U8RmlsbFJlcG9ydD4ge1xyXG4gIGNvbnN0IGZpbGxlciA9IG5ldyBCYXNlRmlsbGVyKG9wdHMpXHJcbiAgcmV0dXJuIGZpbGxlci5kb0ZpbGxGb3JtKClcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgeyBGaWxsQW5zd2VyLCBEaXNjb3ZlcmVkRmllbGQsIEF0c1NpdGVJZCB9XHJcbmV4cG9ydCB7IGRldGVjdEF0c1NpdGUsIGRldGVjdFJlZ2lzdHJ5QXRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLWZhY3RvcnlcIlxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZGVsYXkobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjdXRlU2VxdWVudGlhbGx5KFxyXG4gIHN0ZXBzOiBBcnJheTwoKCkgPT4gUHJvbWlzZTx2b2lkPiB8IHZvaWQpIHwgeyBmdW5jOiAoKSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZDsgZGVsYXk/OiBudW1iZXIgfT4sXHJcbiAgZGVmYXVsdERlbGF5TXMgPSA4MFxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICBmb3IgKGNvbnN0IHN0ZXAgb2Ygc3RlcHMpIHtcclxuICAgIGlmICh0eXBlb2Ygc3RlcCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIGF3YWl0IHN0ZXAoKVxyXG4gICAgICBhd2FpdCBkZWxheShkZWZhdWx0RGVsYXlNcylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHN0ZXAuZnVuYygpXHJcbiAgICAgIGF3YWl0IGRlbGF5KHN0ZXAuZGVsYXkgPz8gZGVmYXVsdERlbGF5TXMpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGRpc2NvdmVyR3JlZW5ob3VzZUZpZWxkcyB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1ncmVlbmhvdXNlXCJcclxuaW1wb3J0IHsgZGlzY292ZXJHZW5lcmljRmllbGRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLWdlbmVyaWNcIlxyXG5pbXBvcnQgeyBkaXNjb3ZlckxldmVyRmllbGRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLWxldmVyXCJcclxuaW1wb3J0IHsgZGlzY292ZXJQZXJzb25pb0ZpZWxkcyB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1wZXJzb25pb1wiXHJcbmltcG9ydCB7IGRpc2NvdmVyV29ya2RheUZpZWxkcyB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci13b3JrZGF5XCJcclxuaW1wb3J0IHsgZGV0ZWN0UmVnaXN0cnlBdHMgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvZGV0ZWN0LXJlZ2lzdHJ5XCJcclxuaW1wb3J0IHR5cGUgeyBBdHNTaXRlSWQsIERpc2NvdmVyZWRGaWVsZCB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci90eXBlc1wiXHJcblxyXG4vKiogTWFwIHJlZ2lzdHJ5IGtleXMg4oaSIENsZWFuLVRTIGRpc2NvdmVyIGFkYXB0ZXJzIHdlIG93bi4gKi9cclxuY29uc3QgUkVHSVNUUllfVE9fQ0xFQU46IFJlY29yZDxzdHJpbmcsIEF0c1NpdGVJZD4gPSB7XHJcbiAgcGVyc29uaW86IFwicGVyc29uaW9cIixcclxuICBncmVlbmhvdXNlOiBcImdyZWVuaG91c2VcIixcclxuICBsZXZlcjogXCJsZXZlclwiLFxyXG4gIHdvcmtkYXk6IFwibXl3b3JrZGF5XCIsXHJcbiAgbXl3b3JrZGF5OiBcIm15d29ya2RheVwiLFxyXG4gIGFzaGJ5OiBcImFzaGJ5XCIsXHJcbiAgb3JhY2xlY2xvdWQ6IFwib3JhY2xlY2xvdWRcIixcclxuICBwYXljb206IFwicGF5Y29tb25saW5lLXYzXCIsXHJcbiAgcGF5Y29tb25saW5lOiBcInBheWNvbW9ubGluZS12M1wiXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RBdHNTaXRlKGhvc3RuYW1lOiBzdHJpbmcsIGhyZWYgPSBcIlwiKTogQXRzU2l0ZUlkIHtcclxuICBjb25zdCBoID0gKGhvc3RuYW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKClcclxuICBjb25zdCB1ID0gKGhyZWYgfHwgXCJcIikudG9Mb3dlckNhc2UoKVxyXG5cclxuICAvLyBGYXN0IHBhdGhzIChmaXh0dXJlcyAvIGNvbW1vbiBob3N0cylcclxuICBpZiAoaC5pbmNsdWRlcyhcInBlcnNvbmlvLlwiKSB8fCBoLmluY2x1ZGVzKFwiam9icy5wZXJzb25pb1wiKSkgcmV0dXJuIFwicGVyc29uaW9cIlxyXG4gIGlmIChcclxuICAgIGguaW5jbHVkZXMoXCJncmVlbmhvdXNlLmlvXCIpIHx8XHJcbiAgICBoLmluY2x1ZGVzKFwiYm9hcmRzLmdyZWVuaG91c2VcIikgfHxcclxuICAgIHUuaW5jbHVkZXMoXCJnaF9qaWQ9XCIpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gXCJncmVlbmhvdXNlXCJcclxuICB9XHJcbiAgaWYgKGguaW5jbHVkZXMoXCJsZXZlci5jb1wiKSB8fCBoLmluY2x1ZGVzKFwiam9icy5sZXZlclwiKSkgcmV0dXJuIFwibGV2ZXJcIlxyXG4gIGlmIChoLmluY2x1ZGVzKFwibXl3b3JrZGF5am9icy5jb21cIikgfHwgaC5pbmNsdWRlcyhcIndvcmtkYXkuY29tXCIpKSB7XHJcbiAgICByZXR1cm4gXCJteXdvcmtkYXlcIlxyXG4gIH1cclxuICBpZiAoaC5pbmNsdWRlcyhcImFzaGJ5aHEuY29tXCIpIHx8IGguaW5jbHVkZXMoXCJqb2JzLmFzaGJ5XCIpKSByZXR1cm4gXCJhc2hieVwiXHJcbiAgaWYgKGguaW5jbHVkZXMoXCJvcmFjbGVjbG91ZC5jb21cIikgfHwgaC5pbmNsdWRlcyhcImZhLm9yYWNsZVwiKSkge1xyXG4gICAgcmV0dXJuIFwib3JhY2xlY2xvdWRcIlxyXG4gIH1cclxuICBpZiAoaC5pbmNsdWRlcyhcInBheWNvbW9ubGluZVwiKSB8fCBoLmluY2x1ZGVzKFwicGF5Y29tLmNvbVwiKSkge1xyXG4gICAgcmV0dXJuIFwicGF5Y29tb25saW5lLXYzXCJcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyZWQgPSBkZXRlY3RSZWdpc3RyeUF0cyhob3N0bmFtZSwgaHJlZilcclxuICBpZiAocmVnaXN0ZXJlZCAmJiBSRUdJU1RSWV9UT19DTEVBTltyZWdpc3RlcmVkXSkge1xyXG4gICAgcmV0dXJuIFJFR0lTVFJZX1RPX0NMRUFOW3JlZ2lzdGVyZWRdXHJcbiAgfVxyXG5cclxuICAvLyBVbmtub3duIGJ1dCByZWdpc3RlcmVkIEFUUyDihpIgZ2VuZXJpYyBuYXRpdmUgZmlsbCBzdGlsbCBoZWxwc1xyXG4gIGlmIChyZWdpc3RlcmVkKSByZXR1cm4gXCJnZW5lcmljXCJcclxuICByZXR1cm4gXCJnZW5lcmljXCJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyRmllbGRzRm9yU2l0ZShcclxuICBzaXRlOiBBdHNTaXRlSWQsXHJcbiAgZG9jOiBEb2N1bWVudFxyXG4pOiBEaXNjb3ZlcmVkRmllbGRbXSB7XHJcbiAgc3dpdGNoIChzaXRlKSB7XHJcbiAgICBjYXNlIFwicGVyc29uaW9cIjpcclxuICAgICAgcmV0dXJuIGRpc2NvdmVyUGVyc29uaW9GaWVsZHMoZG9jKVxyXG4gICAgY2FzZSBcImdyZWVuaG91c2VcIjpcclxuICAgICAgcmV0dXJuIGRpc2NvdmVyR3JlZW5ob3VzZUZpZWxkcyhkb2MpXHJcbiAgICBjYXNlIFwibGV2ZXJcIjpcclxuICAgICAgcmV0dXJuIGRpc2NvdmVyTGV2ZXJGaWVsZHMoZG9jKVxyXG4gICAgY2FzZSBcIm15d29ya2RheVwiOlxyXG4gICAgICByZXR1cm4gZGlzY292ZXJXb3JrZGF5RmllbGRzKGRvYylcclxuICAgIGNhc2UgXCJhc2hieVwiOlxyXG4gICAgY2FzZSBcIm9yYWNsZWNsb3VkXCI6XHJcbiAgICBjYXNlIFwicGF5Y29tb25saW5lLXYzXCI6XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gZGlzY292ZXJHZW5lcmljRmllbGRzKGRvYylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNjb3ZlckZpZWxkc0Zyb21Mb2NhdGlvbihcclxuICBkb2M6IERvY3VtZW50LFxyXG4gIGhvc3RuYW1lOiBzdHJpbmcsXHJcbiAgaHJlZiA9IFwiXCJcclxuKTogeyBzaXRlOiBBdHNTaXRlSWQ7IGZpZWxkczogRGlzY292ZXJlZEZpZWxkW107IHJlZ2lzdHJ5SWQ6IHN0cmluZyB8IG51bGwgfSB7XHJcbiAgY29uc3Qgc2l0ZSA9IGRldGVjdEF0c1NpdGUoaG9zdG5hbWUsIGhyZWYpXHJcbiAgY29uc3QgcmVnaXN0cnlJZCA9IGRldGVjdFJlZ2lzdHJ5QXRzKGhvc3RuYW1lLCBocmVmKVxyXG4gIHJldHVybiB7IHNpdGUsIGZpZWxkczogZGlzY292ZXJGaWVsZHNGb3JTaXRlKHNpdGUsIGRvYyksIHJlZ2lzdHJ5SWQgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSB7IEF0c1NpdGVJZCwgRGlzY292ZXJlZEZpZWxkIH1cclxuZXhwb3J0IHsgRklFTERfVFlQRSB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci90eXBlc1wiXHJcbmV4cG9ydCB7IGRldGVjdFJlZ2lzdHJ5QXRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2RldGVjdC1yZWdpc3RyeVwiXHJcbiIsImltcG9ydCB7IGRpc2NvdmVyR2VuZXJpY0ZpZWxkcyB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1nZW5lcmljXCJcclxuaW1wb3J0IHR5cGUgeyBEaXNjb3ZlcmVkRmllbGQgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdHlwZXNcIlxyXG5cclxuLyoqIEdyZWVuaG91c2UgYm9hcmRzIC8gZW1iZWRkZWQgYXBwbHkgZm9ybXMuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNjb3ZlckdyZWVuaG91c2VGaWVsZHMoZG9jOiBEb2N1bWVudCk6IERpc2NvdmVyZWRGaWVsZFtdIHtcclxuICByZXR1cm4gZGlzY292ZXJHZW5lcmljRmllbGRzKGRvYywge1xyXG4gICAgcHJlZmVyUm9vdFNlbGVjdG9yOiBcIiNhcHBsaWNhdGlvbl9mb3JtLCBmb3JtI2FwcGxpY2F0aW9uLWZvcm0sIGZvcm1cIlxyXG4gIH0pXHJcbn1cclxuIiwiLyoqXHJcbiAqIEdlbmVyaWMgQVRTIGZvcm0gZGlzY292ZXJ5IOKAlCB3b3JrcyBmb3IgbmF0aXZlIGxhYmVsL2lucHV0IEhUTUwuXHJcbiAqIExpbmtlZG9tLXNhZmUgKG5vIERPTSBpbnN0YW5jZW9mKS5cclxuICovXHJcblxyXG5pbXBvcnQgdHlwZSB7IERpc2NvdmVyZWRGaWVsZCB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci90eXBlc1wiXHJcblxyXG50eXBlIEFueUVsID0ge1xyXG4gIHRhZ05hbWU6IHN0cmluZ1xyXG4gIGlkPzogc3RyaW5nXHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nIHwgeyB0b1N0cmluZygpOiBzdHJpbmcgfVxyXG4gIGRpc2FibGVkPzogYm9vbGVhblxyXG4gIGhpZGRlbj86IGJvb2xlYW5cclxuICB0eXBlPzogc3RyaW5nXHJcbiAgbmFtZT86IHN0cmluZ1xyXG4gIHZhbHVlPzogc3RyaW5nXHJcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsXHJcbiAgb3B0aW9ucz86IEFycmF5TGlrZTx7IHRleHRDb250ZW50Pzogc3RyaW5nIHwgbnVsbCB9PlxyXG4gIHBhcmVudEVsZW1lbnQ6IEFueUVsIHwgbnVsbFxyXG4gIG93bmVyRG9jdW1lbnQ/OiB7XHJcbiAgICBib2R5PzogQW55RWwgfCBudWxsXHJcbiAgICBnZXRFbGVtZW50QnlJZD86IChpZDogc3RyaW5nKSA9PiBBbnlFbCB8IG51bGxcclxuICB9XHJcbiAgZ2V0QXR0cmlidXRlPzogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nIHwgbnVsbFxyXG4gIGhhc0F0dHJpYnV0ZT86IChuYW1lOiBzdHJpbmcpID0+IGJvb2xlYW5cclxuICBjbG9zZXN0PzogKHNlbDogc3RyaW5nKSA9PiBBbnlFbCB8IG51bGxcclxuICBxdWVyeVNlbGVjdG9yPzogKHNlbDogc3RyaW5nKSA9PiBBbnlFbCB8IG51bGxcclxuICBxdWVyeVNlbGVjdG9yQWxsPzogKHNlbDogc3RyaW5nKSA9PiBBcnJheUxpa2U8QW55RWw+XHJcbiAgY29udGFpbnM/OiAob3RoZXI6IEFueUVsKSA9PiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IEZJRUxEX1NFTEVDVE9SID1cclxuICAnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW3R5cGU9XCJmaWxlXCJdKTpub3QoW3R5cGU9XCJzdWJtaXRcIl0pOm5vdChbdHlwZT1cImJ1dHRvblwiXSk6bm90KFt0eXBlPVwicmVzZXRcIl0pOm5vdChbdHlwZT1cImltYWdlXCJdKSwgdGV4dGFyZWEsIHNlbGVjdCdcclxuXHJcbmZ1bmN0aW9uIGNvbGxhcHNlV3ModGV4dDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xyXG4gIHJldHVybiAodGV4dCB8fCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKClcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5MYWJlbCh0ZXh0OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSB7XHJcbiAgcmV0dXJuIGNvbGxhcHNlV3ModGV4dClcclxuICAgIC5yZXBsYWNlKC9cXHMqXFwqK1xccyovZywgXCIgXCIpXHJcbiAgICAucmVwbGFjZSgvXFwoXFxzKihyZXF1aXJlZHxlcmZvcmRlcmxpY2h8b3B0aW9uYWwpXFxzKlxcKS9naSwgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxyXG4gICAgLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGFzc1N0cihlbDogQW55RWwpIHtcclxuICBjb25zdCBjID0gZWwuY2xhc3NOYW1lXHJcbiAgcmV0dXJuIHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gYyA6IGM/LnRvU3RyaW5nPy4oKSB8fCBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmlzaWJsZShlbDogQW55RWwpOiBib29sZWFuIHtcclxuICBpZiAoIWVsPy5nZXRBdHRyaWJ1dGUpIHJldHVybiBmYWxzZVxyXG4gIGlmIChlbC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSA9PT0gXCJ0cnVlXCIgfHwgZWwuaGlkZGVuKSByZXR1cm4gZmFsc2VcclxuICBpZiAoZWwuY2xvc2VzdD8uKFwiW2FyaWEtaGlkZGVuPSd0cnVlJ10sIFtoaWRkZW5dXCIpKSByZXR1cm4gZmFsc2VcclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0ZpbGxhYmxlKGVsOiBBbnlFbCk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHRhZyA9IChlbC50YWdOYW1lIHx8IFwiXCIpLnRvVXBwZXJDYXNlKClcclxuICBpZiAodGFnICE9PSBcIklOUFVUXCIgJiYgdGFnICE9PSBcIlRFWFRBUkVBXCIgJiYgdGFnICE9PSBcIlNFTEVDVFwiKSByZXR1cm4gZmFsc2VcclxuICBpZiAoZWwuZGlzYWJsZWQpIHJldHVybiBmYWxzZVxyXG4gIGlmIChcclxuICAgIHRhZyA9PT0gXCJJTlBVVFwiICYmXHJcbiAgICBbXCJoaWRkZW5cIiwgXCJmaWxlXCIsIFwic3VibWl0XCIsIFwiYnV0dG9uXCIsIFwicmVzZXRcIiwgXCJpbWFnZVwiXS5pbmNsdWRlcyhlbC50eXBlIHx8IFwiXCIpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIGlzVmlzaWJsZShlbClcclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdChzZWxSb290OiBBbnlFbCB8IERvY3VtZW50LCBzZWxlY3Rvcjogc3RyaW5nKTogQW55RWxbXSB7XHJcbiAgY29uc3Qgcm9vdCA9IHNlbFJvb3QgYXMgQW55RWxcclxuICBjb25zdCBub2RlcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbD8uKHNlbGVjdG9yKVxyXG4gIHJldHVybiBub2RlcyA/IEFycmF5LmZyb20obm9kZXMgYXMgQXJyYXlMaWtlPEFueUVsPikgOiBbXVxyXG59XHJcblxyXG5mdW5jdGlvbiBwaWNrRm9ybVJvb3QoZG9jOiBEb2N1bWVudCwgcHJlZmVyU2VsZWN0b3I/OiBzdHJpbmcpOiBBbnlFbCB7XHJcbiAgY29uc3QgYm9keSA9IChkb2MuYm9keSB8fCBkb2MuZG9jdW1lbnRFbGVtZW50KSBhcyB1bmtub3duIGFzIEFueUVsXHJcbiAgaWYgKHByZWZlclNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCBwcmVmZXJyZWQgPSAoZG9jIGFzIHVua25vd24gYXMgQW55RWwpLnF1ZXJ5U2VsZWN0b3I/LihwcmVmZXJTZWxlY3RvcilcclxuICAgIGlmIChwcmVmZXJyZWQgJiYgaXNWaXNpYmxlKHByZWZlcnJlZCkpIHJldHVybiBwcmVmZXJyZWRcclxuICB9XHJcbiAgY29uc3QgZm9ybXMgPSBsaXN0KGRvYyBhcyB1bmtub3duIGFzIEFueUVsLCBcImZvcm1cIikuZmlsdGVyKGlzVmlzaWJsZSlcclxuICBsZXQgYmVzdDogQW55RWwgfCBudWxsID0gbnVsbFxyXG4gIGxldCBiZXN0U2NvcmUgPSAtMVxyXG4gIGZvciAoY29uc3QgZm9ybSBvZiBmb3Jtcykge1xyXG4gICAgY29uc3QgZmllbGRzID0gbGlzdChmb3JtLCBGSUVMRF9TRUxFQ1RPUikuZmlsdGVyKGlzRmlsbGFibGUpLmxlbmd0aFxyXG4gICAgY29uc3QgbGFiZWxzID0gbGlzdChmb3JtLCBcImxhYmVsLCBsZWdlbmRcIikuZmlsdGVyKGlzVmlzaWJsZSkubGVuZ3RoXHJcbiAgICBjb25zdCBzY29yZSA9IDEwICogZmllbGRzICsgbGFiZWxzXHJcbiAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcclxuICAgICAgYmVzdFNjb3JlID0gc2NvcmVcclxuICAgICAgYmVzdCA9IGZvcm1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGJlc3QgfHwgYm9keVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaWVsZENvbnRhaW5lcihlbDogQW55RWwsIHJvb3Q6IEFueUVsKTogQW55RWwge1xyXG4gIGNvbnN0IG1heFNpYmxpbmdzID1cclxuICAgIChlbC50YWdOYW1lIHx8IFwiXCIpLnRvVXBwZXJDYXNlKCkgPT09IFwiSU5QVVRcIiAmJlxyXG4gICAgW1wicmFkaW9cIiwgXCJjaGVja2JveFwiXS5pbmNsdWRlcyhlbC50eXBlIHx8IFwiXCIpXHJcbiAgICAgID8gMTJcclxuICAgICAgOiA0XHJcbiAgbGV0IG5vZGU6IEFueUVsIHwgbnVsbCA9IGVsLnBhcmVudEVsZW1lbnRcclxuICBsZXQgYmVzdDogQW55RWwgPSBlbC5wYXJlbnRFbGVtZW50IHx8IHJvb3RcclxuICBjb25zdCBib2R5ID0gZWwub3duZXJEb2N1bWVudD8uYm9keSA/PyBudWxsXHJcbiAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gcm9vdCAmJiBub2RlICE9PSBib2R5KSB7XHJcbiAgICBjb25zdCBjbGFzc0lkID0gYCR7bm9kZS5pZCB8fCBcIlwifSAke2NsYXNzU3RyKG5vZGUpfWBcclxuICAgIGNvbnN0IHNpYmxpbmdDb3VudCA9IGxpc3Qobm9kZSwgRklFTERfU0VMRUNUT1IpLmZpbHRlcihpc0ZpbGxhYmxlKS5sZW5ndGhcclxuICAgIGNvbnN0IGhhc0xhYmVsID0gISFub2RlLnF1ZXJ5U2VsZWN0b3I/LihcImxhYmVsLCBsZWdlbmRcIilcclxuICAgIGNvbnN0IGxvb2tzTGlrZUZpZWxkID1cclxuICAgICAgL2ZpZWxkfGZvcm18cXVlc3Rpb258Z3JvdXB8cm93fGl0ZW18Y29udHJvbHx3cmFwcGVyfGlucHV0L2kudGVzdChjbGFzc0lkKVxyXG4gICAgaWYgKChoYXNMYWJlbCB8fCBsb29rc0xpa2VGaWVsZCkgJiYgc2libGluZ0NvdW50IDw9IG1heFNpYmxpbmdzKSB7XHJcbiAgICAgIHJldHVybiBub2RlXHJcbiAgICB9XHJcbiAgICBpZiAoaGFzTGFiZWwgfHwgbG9va3NMaWtlRmllbGQpIGJlc3QgPSBub2RlXHJcbiAgICBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50XHJcbiAgfVxyXG4gIHJldHVybiBiZXN0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxhYmVsRm9ySWQocm9vdDogQW55RWwgfCBEb2N1bWVudCwgaWQ6IHN0cmluZyk6IEFueUVsIHwgbnVsbCB7XHJcbiAgaWYgKCFpZCkgcmV0dXJuIG51bGxcclxuICBjb25zdCBzYWZlID0gaWQucmVwbGFjZSgvXFxcXC9nLCBcIlxcXFxcXFxcXCIpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBoaXQgPSAocm9vdCBhcyBBbnlFbCkucXVlcnlTZWxlY3Rvcj8uKGBsYWJlbFtmb3I9XCIke3NhZmV9XCJdYCkgfHwgbnVsbFxyXG4gICAgcmV0dXJuIGhpdCAmJiBpc1Zpc2libGUoaGl0KSA/IGhpdCA6IG51bGxcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlTGFiZWwoZWw6IEFueUVsLCBjb250YWluZXI6IEFueUVsKTogc3RyaW5nIHtcclxuICBjb25zdCBieUZvciA9XHJcbiAgICBlbC5pZCAmJlxyXG4gICAgKGxhYmVsRm9ySWQoY29udGFpbmVyLCBlbC5pZCkgfHxcclxuICAgICAgbGFiZWxGb3JJZChlbC5vd25lckRvY3VtZW50IGFzIHVua25vd24gYXMgRG9jdW1lbnQsIGVsLmlkKSlcclxuICBpZiAoYnlGb3IpIHtcclxuICAgIGNvbnN0IHRleHQgPSBjbGVhbkxhYmVsKGJ5Rm9yLnRleHRDb250ZW50KVxyXG4gICAgaWYgKHRleHQpIHJldHVybiB0ZXh0XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbG9zZXN0TGFiZWwgPSBlbC5jbG9zZXN0Py4oXCJsYWJlbFwiKVxyXG4gIGlmIChjbG9zZXN0TGFiZWwgJiYgaXNWaXNpYmxlKGNsb3Nlc3RMYWJlbCkpIHtcclxuICAgIGNvbnN0IHRleHQgPSBjbGVhbkxhYmVsKGNsb3Nlc3RMYWJlbC50ZXh0Q29udGVudClcclxuICAgIGlmICh0ZXh0KSByZXR1cm4gdGV4dFxyXG4gIH1cclxuXHJcbiAgY29uc3QgYXJpYSA9IGNsZWFuTGFiZWwoZWwuZ2V0QXR0cmlidXRlPy4oXCJhcmlhLWxhYmVsXCIpKVxyXG4gIGlmIChhcmlhICYmICEvXihzZWxlY3R8Y2hvb3NlfG9wdGlvbnx5ZXN8bm98dXBsb2FkfGJyb3dzZSkkL2kudGVzdChhcmlhKSkge1xyXG4gICAgcmV0dXJuIGFyaWFcclxuICB9XHJcblxyXG4gIGNvbnN0IGxhYmVsbGVkQnkgPSAoZWwuZ2V0QXR0cmlidXRlPy4oXCJhcmlhLWxhYmVsbGVkYnlcIikgfHwgXCJcIilcclxuICAgIC5zcGxpdCgvXFxzKy8pXHJcbiAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAubWFwKChpZCkgPT4gZWwub3duZXJEb2N1bWVudD8uZ2V0RWxlbWVudEJ5SWQ/LihpZCkgfHwgbnVsbClcclxuICAgIC5maWx0ZXIoKG4pOiBuIGlzIEFueUVsID0+ICEhbiAmJiBpc1Zpc2libGUobikpXHJcbiAgICAubWFwKChuKSA9PiBuLnRleHRDb250ZW50KVxyXG4gICAgLmpvaW4oXCIgXCIpXHJcbiAgY29uc3QgYXJpYVRleHQgPSBjbGVhbkxhYmVsKGxhYmVsbGVkQnkpXHJcbiAgaWYgKGFyaWFUZXh0KSByZXR1cm4gYXJpYVRleHRcclxuXHJcbiAgY29uc3QgY2FuZGlkYXRlcyA9IGxpc3QoXHJcbiAgICBjb250YWluZXIsXHJcbiAgICBcImxhYmVsLCBsZWdlbmQsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIHNwYW4sIGRpdlwiXHJcbiAgKS5maWx0ZXIoKG4pID0+IHtcclxuICAgIGlmICghaXNWaXNpYmxlKG4pKSByZXR1cm4gZmFsc2VcclxuICAgIGlmIChuLmNvbnRhaW5zPy4oZWwpICYmIG4udGFnTmFtZSAhPT0gXCJMQUJFTFwiKSByZXR1cm4gZmFsc2VcclxuICAgIGNvbnN0IHQgPSBjbGVhbkxhYmVsKG4udGV4dENvbnRlbnQpXHJcbiAgICByZXR1cm4gISF0ICYmICEvXihzZWxlY3R8Y2hvb3NlfG9wdGlvbnx5ZXN8bm98dXBsb2FkfGJyb3dzZSkkL2kudGVzdCh0KVxyXG4gIH0pXHJcbiAgcmV0dXJuIGNsZWFuTGFiZWwoY2FuZGlkYXRlc1swXT8udGV4dENvbnRlbnQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVxdWlyZWQoZWw6IEFueUVsLCBjb250YWluZXI6IEFueUVsKSB7XHJcbiAgaWYgKGVsLmhhc0F0dHJpYnV0ZT8uKFwicmVxdWlyZWRcIikgfHwgZWwuZ2V0QXR0cmlidXRlPy4oXCJhcmlhLXJlcXVpcmVkXCIpID09PSBcInRydWVcIikge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIC9cXCp8cmVxdWlyZWR8ZXJmb3JkZXJsaWNoL2kudGVzdChjb250YWluZXIudGV4dENvbnRlbnQgfHwgXCJcIilcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0T3B0aW9ucyhzZWxlY3Q6IEFueUVsKTogc3RyaW5nW10ge1xyXG4gIGNvbnN0IG9wdHMgPSBzZWxlY3Qub3B0aW9ucyA/IEFycmF5LmZyb20oc2VsZWN0Lm9wdGlvbnMpIDogW11cclxuICByZXR1cm4gb3B0c1xyXG4gICAgLm1hcCgobykgPT4gY29sbGFwc2VXcyhvLnRleHRDb250ZW50KS5yZXBsYWNlKC9cXHMqXFwqK1xccyovZywgXCIgXCIpLnRyaW0oKSlcclxuICAgIC5maWx0ZXIoKHQpID0+IHQgJiYgIS9eKHNlbGVjdHxwbGVhc2Ugc2VsZWN0fC0tKSQvaS50ZXN0KHQpKVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEaXNjb3Zlck9wdGlvbnMgPSB7XHJcbiAgLyoqIFByZWZlciBhIHJvb3Qgc2VsZWN0b3IgKGUuZy4gR3JlZW5ob3VzZSAjYXBwbGljYXRpb25fZm9ybSkgKi9cclxuICBwcmVmZXJSb290U2VsZWN0b3I/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyR2VuZXJpY0ZpZWxkcyhcclxuICBkb2M6IERvY3VtZW50LFxyXG4gIG9wdHM6IERpc2NvdmVyT3B0aW9ucyA9IHt9XHJcbik6IERpc2NvdmVyZWRGaWVsZFtdIHtcclxuICBjb25zdCByb290ID0gcGlja0Zvcm1Sb290KGRvYywgb3B0cy5wcmVmZXJSb290U2VsZWN0b3IpXHJcbiAgY29uc3Qgbm9kZXMgPSBsaXN0KHJvb3QsIEZJRUxEX1NFTEVDVE9SKS5maWx0ZXIoaXNGaWxsYWJsZSlcclxuICBjb25zdCBvdXQ6IERpc2NvdmVyZWRGaWVsZFtdID0gW11cclxuICBjb25zdCBzZWVuID0gbmV3IFNldDxBbnlFbD4oKVxyXG5cclxuICBmb3IgKGNvbnN0IGVsIG9mIG5vZGVzKSB7XHJcbiAgICBpZiAoc2Vlbi5oYXMoZWwpKSBjb250aW51ZVxyXG4gICAgY29uc3QgdGFnID0gKGVsLnRhZ05hbWUgfHwgXCJcIikudG9VcHBlckNhc2UoKVxyXG5cclxuICAgIGlmICh0YWcgPT09IFwiSU5QVVRcIiAmJiAoZWwudHlwZSA9PT0gXCJyYWRpb1wiIHx8IGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIikpIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZmllbGRDb250YWluZXIoZWwsIHJvb3QpXHJcbiAgICAgIGNvbnN0IGdyb3VwID0gbGlzdChjb250YWluZXIsIGBpbnB1dFt0eXBlPVwiJHtlbC50eXBlfVwiXWApLmZpbHRlcihpc0ZpbGxhYmxlKVxyXG4gICAgICBjb25zdCBuYW1lZCA9XHJcbiAgICAgICAgZWwubmFtZSB8fCBlbC5pZFxyXG4gICAgICAgICAgPyBncm91cC5maWx0ZXIoKGcpID0+IGcubmFtZSA9PT0gZWwubmFtZSB8fCBnLmlkID09PSBlbC5pZClcclxuICAgICAgICAgIDogZ3JvdXBcclxuICAgICAgZm9yIChjb25zdCBnIG9mIG5hbWVkKSBzZWVuLmFkZChnKVxyXG5cclxuICAgICAgY29uc3QgbGFiZWwgPSByZXNvbHZlTGFiZWwoZWwsIGNvbnRhaW5lcilcclxuICAgICAgaWYgKCFsYWJlbCkgY29udGludWVcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IG5hbWVkXHJcbiAgICAgICAgLm1hcCgoZykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbGFiID1cclxuICAgICAgICAgICAgKGcuaWQgJiYgbGFiZWxGb3JJZChjb250YWluZXIsIGcuaWQpPy50ZXh0Q29udGVudCkgfHxcclxuICAgICAgICAgICAgZy5jbG9zZXN0Py4oXCJsYWJlbFwiKT8udGV4dENvbnRlbnQgfHxcclxuICAgICAgICAgICAgZy5nZXRBdHRyaWJ1dGU/LihcImFyaWEtbGFiZWxcIikgfHxcclxuICAgICAgICAgICAgZy52YWx1ZVxyXG4gICAgICAgICAgcmV0dXJuIGNvbGxhcHNlV3MobGFiKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxyXG5cclxuICAgICAgb3V0LnB1c2goe1xyXG4gICAgICAgIHR5cGU6IGVsLnR5cGUgPT09IFwicmFkaW9cIiA/IFwicmFkaW9cIiA6IFwiY2hlY2tib3hcIixcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICByZXF1aXJlZDogbmFtZWQuc29tZSgoZykgPT4gaXNSZXF1aXJlZChnLCBjb250YWluZXIpKSxcclxuICAgICAgICBvcHRpb25zXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcblxyXG4gICAgc2Vlbi5hZGQoZWwpXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBmaWVsZENvbnRhaW5lcihlbCwgcm9vdClcclxuICAgIGNvbnN0IGxhYmVsID0gcmVzb2x2ZUxhYmVsKGVsLCBjb250YWluZXIpXHJcbiAgICBpZiAoIWxhYmVsKSBjb250aW51ZVxyXG5cclxuICAgIGlmICh0YWcgPT09IFwiU0VMRUNUXCIpIHtcclxuICAgICAgb3V0LnB1c2goe1xyXG4gICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGlzUmVxdWlyZWQoZWwsIGNvbnRhaW5lciksXHJcbiAgICAgICAgb3B0aW9uczogc2VsZWN0T3B0aW9ucyhlbClcclxuICAgICAgfSlcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICBvdXQucHVzaCh7XHJcbiAgICAgIHR5cGU6IHRhZyA9PT0gXCJURVhUQVJFQVwiID8gXCJ0ZXh0YXJlYVwiIDogXCJ0ZXh0XCIsXHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICByZXF1aXJlZDogaXNSZXF1aXJlZChlbCwgY29udGFpbmVyKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiBvdXRcclxufVxyXG4iLCJpbXBvcnQgeyBkaXNjb3ZlckdlbmVyaWNGaWVsZHMgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItZ2VuZXJpY1wiXHJcbmltcG9ydCB0eXBlIHsgRGlzY292ZXJlZEZpZWxkIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3R5cGVzXCJcclxuXHJcbi8qKiBMZXZlciBoaXJlIGFwcGx5IGZvcm1zLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzY292ZXJMZXZlckZpZWxkcyhkb2M6IERvY3VtZW50KTogRGlzY292ZXJlZEZpZWxkW10ge1xyXG4gIHJldHVybiBkaXNjb3ZlckdlbmVyaWNGaWVsZHMoZG9jLCB7XHJcbiAgICBwcmVmZXJSb290U2VsZWN0b3I6IFwiLmFwcGxpY2F0aW9uLWZvcm0sIGZvcm0jYXBwbGljYXRpb24tZm9ybSwgZm9ybVwiXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgeyBkaXNjb3ZlckdlbmVyaWNGaWVsZHMgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItZ2VuZXJpY1wiXHJcbmltcG9ydCB0eXBlIHsgRGlzY292ZXJlZEZpZWxkIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3R5cGVzXCJcclxuXHJcbi8qKiBQZXJzb25pbyBjYXJlZXJzIGFwcGx5IHBhZ2VzIOKAlCBuYXRpdmUgZm9ybSBmaWVsZHMuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNjb3ZlclBlcnNvbmlvRmllbGRzKGRvYzogRG9jdW1lbnQpOiBEaXNjb3ZlcmVkRmllbGRbXSB7XHJcbiAgcmV0dXJuIGRpc2NvdmVyR2VuZXJpY0ZpZWxkcyhkb2MsIHtcclxuICAgIHByZWZlclJvb3RTZWxlY3RvcjogXCJmb3JtLmFwcGxpY2F0aW9uLWZvcm0sIGZvcm1cIlxyXG4gIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgZGlzY292ZXJHZW5lcmljRmllbGRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLWdlbmVyaWNcIlxyXG5pbXBvcnQgdHlwZSB7IERpc2NvdmVyZWRGaWVsZCB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci90eXBlc1wiXHJcblxyXG4vKipcclxuICogV29ya2RheSBhcHBseSDigJQgbWFueSB3aWRnZXRzIGFyZSBjdXN0b207IHRoaXMgZGlzY292ZXJzIG5hdGl2ZSBpbnB1dHMgcHJlc2VudFxyXG4gKiBpbiB0aGUgZml4dHVyZSAvIHNpbXBsaWZpZWQgcGFnZXMuIEZ1bGwgV29ya2RheSBvcHMgc3RheSBpbiB0aGUgZW5naW5lIGJ1bmRsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNjb3ZlcldvcmtkYXlGaWVsZHMoZG9jOiBEb2N1bWVudCk6IERpc2NvdmVyZWRGaWVsZFtdIHtcclxuICByZXR1cm4gZGlzY292ZXJHZW5lcmljRmllbGRzKGRvYywge1xyXG4gICAgcHJlZmVyUm9vdFNlbGVjdG9yOiAnW2RhdGEtYXV0b21hdGlvbi1pZD1cImFwcGx5Rmxvd1wiXSwgZm9ybSwgYm9keSdcclxuICB9KVxyXG59XHJcbiIsIi8qKlxyXG4gKiBSZXNvbHZlIEFUUyBpZCBmcm9tIGhvc3RuYW1lL2hyZWYgdXNpbmcgdGhlIEpvYnJpZ2h0IHNpdGUgcmVnaXN0cnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgU0lURV9SRUdJU1RSWSwgdHlwZSBTaXRlRGVmaW5pdGlvbiB9IGZyb20gXCJ+Y29yZS9zdXBwb3J0ZWQtc2l0ZXNcIlxyXG5cclxuZXhwb3J0IHR5cGUgUmVnaXN0cnlBdHNJZCA9IHN0cmluZ1xyXG5cclxuZnVuY3Rpb24gaG9zdE1hdGNoZXNEb21haW4oaG9zdG5hbWU6IHN0cmluZywgZG9tYWluOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICBjb25zdCBoID0gaG9zdG5hbWUudG9Mb3dlckNhc2UoKVxyXG4gIGNvbnN0IGQgPSBkb21haW4udG9Mb3dlckNhc2UoKVxyXG4gIHJldHVybiBoID09PSBkIHx8IGguZW5kc1dpdGgoXCIuXCIgKyBkKVxyXG59XHJcblxyXG5mdW5jdGlvbiBob3N0TWF0Y2hlc1BhdHRlcm4oaG9zdG5hbWU6IHN0cmluZywgcGF0dGVybjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgLy8gTWF0Y2hQYXR0ZXJuLWxpa2U6ICo6Ly8qLmV4YW1wbGUuY29tLyogb3IgKjovL2V4YW1wbGUuY29tLypcclxuICBjb25zdCBtID0gL15bXjpdKzpcXC9cXC8oW14vXSspLy5leGVjKHBhdHRlcm4pXHJcbiAgaWYgKCFtKSByZXR1cm4gZmFsc2VcclxuICBsZXQgaG9zdCA9IG1bMV0udG9Mb3dlckNhc2UoKVxyXG4gIGlmIChob3N0LnN0YXJ0c1dpdGgoXCIqLlwiKSkge1xyXG4gICAgY29uc3QgYmFzZSA9IGhvc3Quc2xpY2UoMilcclxuICAgIHJldHVybiBob3N0bmFtZSA9PT0gYmFzZSB8fCBob3N0bmFtZS5lbmRzV2l0aChcIi5cIiArIGJhc2UpXHJcbiAgfVxyXG4gIGlmIChob3N0ID09PSBcIipcIikgcmV0dXJuIHRydWVcclxuICByZXR1cm4gaG9zdG5hbWUgPT09IGhvc3QgfHwgaG9zdG5hbWUuZW5kc1dpdGgoXCIuXCIgKyBob3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRoT2socGF0aG5hbWU6IHN0cmluZywgaHJlZjogc3RyaW5nLCBzaXRlOiBTaXRlRGVmaW5pdGlvbik6IGJvb2xlYW4ge1xyXG4gIGlmIChzaXRlLnBhdGhSZWdleCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFuZXcgUmVnRXhwKHNpdGUucGF0aFJlZ2V4KS50ZXN0KHBhdGhuYW1lKSkgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChzaXRlLnVybFJlZ2V4KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIW5ldyBSZWdFeHAoc2l0ZS51cmxSZWdleCkudGVzdChocmVmKSkgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCZXN0LWVmZm9ydCBBVFMgaWQgZnJvbSBTSVRFX1JFR0lTVFJZIChncmVlbmhvdXNlLCB3b3JrZGF5LCDigKYpLlxyXG4gKiBSZXR1cm5zIG51bGwgd2hlbiBub3RoaW5nIG1hdGNoZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0UmVnaXN0cnlBdHMoXHJcbiAgaG9zdG5hbWU6IHN0cmluZyxcclxuICBocmVmID0gXCJcIlxyXG4pOiBSZWdpc3RyeUF0c0lkIHwgbnVsbCB7XHJcbiAgY29uc3QgaCA9IChob3N0bmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpXHJcbiAgbGV0IHBhdGhuYW1lID0gXCIvXCJcclxuICB0cnkge1xyXG4gICAgcGF0aG5hbWUgPSBocmVmID8gbmV3IFVSTChocmVmKS5wYXRobmFtZSA6IFwiL1wiXHJcbiAgfSBjYXRjaCB7XHJcbiAgICBwYXRobmFtZSA9IFwiL1wiXHJcbiAgfVxyXG5cclxuICBsZXQgYmVzdDogeyBpZDogc3RyaW5nOyBzY29yZTogbnVtYmVyIH0gfCBudWxsID0gbnVsbFxyXG5cclxuICBmb3IgKGNvbnN0IFtpZCwgc2l0ZV0gb2YgT2JqZWN0LmVudHJpZXMoU0lURV9SRUdJU1RSWSkpIHtcclxuICAgIGxldCBzY29yZSA9IDBcclxuICAgIGNvbnN0IGRvbWFpbnMgPSBzaXRlLmRvbWFpbnMgPz8gW11cclxuICAgIGNvbnN0IHBhdHRlcm5zID0gc2l0ZS5wYXR0ZXJucyA/PyBbXVxyXG5cclxuICAgIGZvciAoY29uc3QgZCBvZiBkb21haW5zKSB7XHJcbiAgICAgIGlmIChob3N0TWF0Y2hlc0RvbWFpbihoLCBkKSkge1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoc2NvcmUsIGQubGVuZ3RoICsgMTApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgcCBvZiBwYXR0ZXJucykge1xyXG4gICAgICBpZiAoaG9zdE1hdGNoZXNQYXR0ZXJuKGgsIHApKSB7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heChzY29yZSwgMjApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzY29yZSA9PT0gMCkgY29udGludWVcclxuICAgIGlmICghcGF0aE9rKHBhdGhuYW1lLCBocmVmIHx8IGBodHRwczovLyR7aH0vYCwgc2l0ZSkpIGNvbnRpbnVlXHJcblxyXG4gICAgLy8gUHJlZmVyIGNvbnN0cmFpbmVkIHBhdGggbWF0Y2hlc1xyXG4gICAgaWYgKHNpdGUucGF0aFJlZ2V4IHx8IHNpdGUudXJsUmVnZXgpIHNjb3JlICs9IDUwXHJcblxyXG4gICAgaWYgKCFiZXN0IHx8IHNjb3JlID4gYmVzdC5zY29yZSkgYmVzdCA9IHsgaWQsIHNjb3JlIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBiZXN0Py5pZCA/PyBudWxsXHJcbn1cclxuIiwiLyoqXG4gKiBTdXBwb3J0ZWQgQVRTIHNpdGUgcmVnaXN0cnkgKyBkZXJpdmVkIGxpc3RzLlxuICogUmVnaXN0cnkgZGF0YSBsaXZlcyBpbiBzaXRlLXJlZ2lzdHJ5LnJhdy5qcyAoZXh0cmFjdGVkIGZyb20gSm9icmlnaHQgdjEuMjMuMCkuXG4gKi9cblxuaW1wb3J0IHsgTWF0Y2hQYXR0ZXJuIH0gZnJvbSBcIn5jb3JlL21hdGNoLXBhdHRlcm5zXCJcbmltcG9ydCB7IFNJVEVfUkVHSVNUUlkgYXMgUkFXX1JFR0lTVFJZIH0gZnJvbSBcIn5jb3JlL3NpdGUtcmVnaXN0cnkucmF3XCJcblxuZXhwb3J0IHR5cGUgU2l0ZURlZmluaXRpb24gPSB7XG4gIGRvbWFpbnM/OiBzdHJpbmdbXVxuICBwYXR0ZXJucz86IHN0cmluZ1tdXG4gIGlmcmFtZURvbWFpbnM/OiBzdHJpbmdbXVxuICBxdWVyeVBhcmFtcz86IHN0cmluZ1tdXG4gIHBhdGhSZWdleD86IHN0cmluZ1xuICB1cmxSZWdleD86IHN0cmluZ1xuICBwYWdlU291cmNlS2V5d29yZD86IHN0cmluZ1xuICBwYWdlU291cmNlRG9tYWluPzogc3RyaW5nXG4gIGlmcmFtZU9ubHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTSVRFX1JFR0lTVFJZID0gUkFXX1JFR0lTVFJZIGFzIFJlY29yZDxzdHJpbmcsIFNpdGVEZWZpbml0aW9uPlxuXG5leHBvcnQgY29uc3QgUElOUE9JTlRIUV9DQVJFRVJTX0NETiA9IFwiZDJuNWllZDk0bWF6b3AuY2xvdWRmcm9udC5uZXRcIlxuZXhwb3J0IGNvbnN0IEVJR0hURk9MRF9DQVJFRVJIVUJfSk9CX1BBVEhfUkVHRVhfU09VUkNFID1cbiAgXCJeL2NhcmVlcmh1Yi9leHBsb3JlL2pvYnMvKD8hYXBwbHkvPyQpW14vPyNdKy8/JFwiXG5cbmNvbnN0IGVpZ2h0Zm9sZENhcmVlckh1YkpvYlBhdGhSZWdleCA9IG5ldyBSZWdFeHAoXG4gIEVJR0hURk9MRF9DQVJFRVJIVUJfSk9CX1BBVEhfUkVHRVhfU09VUkNFXG4pXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VpZ2h0Zm9sZENhcmVlckh1YkpvYlBhdGgocGF0aG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gZWlnaHRmb2xkQ2FyZWVySHViSm9iUGF0aFJlZ2V4LnRlc3QocGF0aG5hbWUpXG59XG5cbmZ1bmN0aW9uIGhvc3RuYW1lRnJvbU1hdGNoUGF0dGVybihwYXR0ZXJuOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgbWF0Y2ggPSAvXlteOl0rOlxcL1xcLyhbXi9dKykvLmV4ZWMocGF0dGVybilcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGxcbiAgY29uc3QgaG9zdCA9IG1hdGNoWzFdXG4gIGlmICghaG9zdCB8fCBob3N0ID09PSBcIipcIikgcmV0dXJuIG51bGxcbiAgcmV0dXJuIGhvc3Quc3RhcnRzV2l0aChcIiouXCIpID8gaG9zdC5zbGljZSgyKSA6IGhvc3Rcbn1cblxuY29uc3QgdW5jb25zdHJhaW5lZFNpdGVzID0gT2JqZWN0LnZhbHVlcyhTSVRFX1JFR0lTVFJZKS5maWx0ZXIoXG4gIChzaXRlKSA9PiAhc2l0ZS5wYXRoUmVnZXggJiYgIXNpdGUudXJsUmVnZXhcbilcblxuZXhwb3J0IGNvbnN0IFNVUFBPUlRfRE9NQUlOUyA9IHVuY29uc3RyYWluZWRTaXRlcy5mbGF0TWFwKFxuICAoc2l0ZSkgPT4gc2l0ZS5kb21haW5zID8/IFtdXG4pXG5cbmV4cG9ydCBjb25zdCBTVVBQT1JUX1BBVFRFUk5TID0gdW5jb25zdHJhaW5lZFNpdGVzXG4gIC5mbGF0TWFwKChzaXRlKSA9PiBzaXRlLnBhdHRlcm5zID8/IFtdKVxuICAubWFwKChwYXR0ZXJuKSA9PiBuZXcgTWF0Y2hQYXR0ZXJuKHBhdHRlcm4pKVxuXG5leHBvcnQgY29uc3QgU1VQUE9SVF9IT1NUUyA9IEFycmF5LmZyb20oXG4gIG5ldyBTZXQoXG4gICAgT2JqZWN0LnZhbHVlcyhTSVRFX1JFR0lTVFJZKS5mbGF0TWFwKChzaXRlKSA9PiBbXG4gICAgICAuLi4oc2l0ZS5kb21haW5zID8/IFtdKSxcbiAgICAgIC4uLihzaXRlLnBhdHRlcm5zID8/IFtdKVxuICAgICAgICAubWFwKGhvc3RuYW1lRnJvbU1hdGNoUGF0dGVybilcbiAgICAgICAgLmZpbHRlcigoaG9zdCk6IGhvc3QgaXMgc3RyaW5nID0+IGhvc3QgIT09IG51bGwpXG4gICAgXSlcbiAgKVxuKVxuXG5leHBvcnQgdHlwZSBDb25zdHJhaW5lZFNpdGVSdWxlID0ge1xuICBkb21haW5zOiBzdHJpbmdbXVxuICBwYXR0ZXJuczogTWF0Y2hQYXR0ZXJuW11cbiAgcGF0aFJlZ2V4PzogUmVnRXhwXG4gIHVybFJlZ2V4PzogUmVnRXhwXG59XG5cbmV4cG9ydCBjb25zdCBDT05TVFJBSU5FRF9TSVRFX1JVTEVTOiBDb25zdHJhaW5lZFNpdGVSdWxlW10gPSBPYmplY3QudmFsdWVzKFxuICBTSVRFX1JFR0lTVFJZXG4pXG4gIC5maWx0ZXIoXG4gICAgKHNpdGUpID0+XG4gICAgICAodHlwZW9mIHNpdGUucGF0aFJlZ2V4ID09PSBcInN0cmluZ1wiICYmIHNpdGUucGF0aFJlZ2V4Lmxlbmd0aCA+IDApIHx8XG4gICAgICAodHlwZW9mIHNpdGUudXJsUmVnZXggPT09IFwic3RyaW5nXCIgJiYgc2l0ZS51cmxSZWdleC5sZW5ndGggPiAwKVxuICApXG4gIC5tYXAoKHNpdGUpID0+ICh7XG4gICAgZG9tYWluczogc2l0ZS5kb21haW5zID8/IFtdLFxuICAgIHBhdHRlcm5zOiAoc2l0ZS5wYXR0ZXJucyA/PyBbXSkubWFwKChwYXR0ZXJuKSA9PiBuZXcgTWF0Y2hQYXR0ZXJuKHBhdHRlcm4pKSxcbiAgICBwYXRoUmVnZXg6IHNpdGUucGF0aFJlZ2V4ID8gbmV3IFJlZ0V4cChzaXRlLnBhdGhSZWdleCkgOiB1bmRlZmluZWQsXG4gICAgdXJsUmVnZXg6IHNpdGUudXJsUmVnZXggPyBuZXcgUmVnRXhwKHNpdGUudXJsUmVnZXgpIDogdW5kZWZpbmVkXG4gIH0pKVxuXG5leHBvcnQgY29uc3QgSUZSQU1FX0NIRUNLX1BBVFRFUk4gPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpLmZsYXRNYXAoXG4gIChzaXRlKSA9PiBzaXRlLmlmcmFtZURvbWFpbnMgPz8gW11cbilcblxuZXhwb3J0IGNvbnN0IFBBR0VfU09VUkNFX0FUU19MSVNUID0gT2JqZWN0LnZhbHVlcyhTSVRFX1JFR0lTVFJZKVxuICAuZmlsdGVyKChzaXRlKSA9PiBzaXRlLnBhZ2VTb3VyY2VLZXl3b3JkICYmIHNpdGUucGFnZVNvdXJjZURvbWFpbilcbiAgLm1hcChcbiAgICAoc2l0ZSkgPT5cbiAgICAgIFtzaXRlLnBhZ2VTb3VyY2VLZXl3b3JkISwgc2l0ZS5wYWdlU291cmNlRG9tYWluIV0gYXMgW3N0cmluZywgc3RyaW5nXVxuICApXG5cbmV4cG9ydCBjb25zdCBJRlJBTUVfT05MWV9ET01BSU5TID0gT2JqZWN0LnZhbHVlcyhTSVRFX1JFR0lTVFJZKVxuICAuZmlsdGVyKChzaXRlKSA9PiBzaXRlLmlmcmFtZU9ubHkpXG4gIC5mbGF0TWFwKChzaXRlKSA9PiBzaXRlLmRvbWFpbnMgPz8gW10pXG5cbmV4cG9ydCBjb25zdCBRVUVSWV9QQVJBTV9MSVNUID0gT2JqZWN0LnZhbHVlcyhTSVRFX1JFR0lTVFJZKS5mbGF0TWFwKFxuICAoc2l0ZSkgPT4gc2l0ZS5xdWVyeVBhcmFtcyA/PyBbXVxuKVxuIiwiLyoqXG4gKiBNaW5pbWFsIENocm9tZSBtYXRjaC1wYXR0ZXJuIGltcGxlbWVudGF0aW9uIGZvciBzdXBwb3J0ZWQtc2l0ZXMuXG4gKiAoUG9ydGVkIHN1YnNldCBvZiBAd2ViZXh0LWNvcmUvbWF0Y2gtcGF0dGVybnMuKVxuICovXG5cbmV4cG9ydCBjbGFzcyBJbnZhbGlkTWF0Y2hQYXR0ZXJuIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuOiBzdHJpbmcsIHJlYXNvbjogc3RyaW5nKSB7XG4gICAgc3VwZXIoYEludmFsaWQgbWF0Y2ggcGF0dGVybiBcIiR7cGF0dGVybn1cIjogJHtyZWFzb259YClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hQYXR0ZXJuIHtcbiAgc3RhdGljIFBST1RPQ09MUyA9IFtcImh0dHBcIiwgXCJodHRwc1wiLCBcImZpbGVcIiwgXCJmdHBcIiwgXCJ1cm5cIl0gYXMgY29uc3RcblxuICBpc0FsbFVybHMgPSBmYWxzZVxuICBwcm90b2NvbE1hdGNoZXM6IHN0cmluZ1tdID0gW11cbiAgaG9zdG5hbWVNYXRjaCA9IFwiKlwiXG4gIHBhdGhuYW1lTWF0Y2ggPSBcIipcIlxuXG4gIGNvbnN0cnVjdG9yKHBhdHRlcm46IHN0cmluZykge1xuICAgIGlmIChwYXR0ZXJuID09PSBcIjxhbGxfdXJscz5cIikge1xuICAgICAgdGhpcy5pc0FsbFVybHMgPSB0cnVlXG4gICAgICB0aGlzLnByb3RvY29sTWF0Y2hlcyA9IFsuLi5NYXRjaFBhdHRlcm4uUFJPVE9DT0xTXVxuICAgICAgdGhpcy5ob3N0bmFtZU1hdGNoID0gXCIqXCJcbiAgICAgIHRoaXMucGF0aG5hbWVNYXRjaCA9IFwiKlwiXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSAvKC4qKTpcXC9cXC8oLio/KShcXC8uKikvLmV4ZWMocGF0dGVybilcbiAgICBpZiAocGFyc2VkID09IG51bGwpIHRocm93IG5ldyBJbnZhbGlkTWF0Y2hQYXR0ZXJuKHBhdHRlcm4sIFwiSW5jb3JyZWN0IGZvcm1hdFwiKVxuXG4gICAgY29uc3QgWywgcHJvdG9jb2wsIGhvc3RuYW1lLCBwYXRobmFtZV0gPSBwYXJzZWRcblxuICAgIGlmIChcbiAgICAgICFNYXRjaFBhdHRlcm4uUFJPVE9DT0xTLmluY2x1ZGVzKHByb3RvY29sIGFzICh0eXBlb2YgTWF0Y2hQYXR0ZXJuLlBST1RPQ09MUylbbnVtYmVyXSkgJiZcbiAgICAgIHByb3RvY29sICE9PSBcIipcIlxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4oXG4gICAgICAgIHBhdHRlcm4sXG4gICAgICAgIGAke3Byb3RvY29sfSBub3QgYSB2YWxpZCBwcm90b2NvbCAoJHtNYXRjaFBhdHRlcm4uUFJPVE9DT0xTLmpvaW4oXCIsIFwiKX0pYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoaG9zdG5hbWUuaW5jbHVkZXMoXCI6XCIpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihwYXR0ZXJuLCBcIkhvc3RuYW1lIGNhbm5vdCBpbmNsdWRlIGEgcG9ydFwiKVxuICAgIH1cbiAgICBpZiAoXG4gICAgICBob3N0bmFtZS5pbmNsdWRlcyhcIipcIikgJiZcbiAgICAgIGhvc3RuYW1lLmxlbmd0aCA+IDEgJiZcbiAgICAgICFob3N0bmFtZS5zdGFydHNXaXRoKFwiKi5cIilcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkTWF0Y2hQYXR0ZXJuKFxuICAgICAgICBwYXR0ZXJuLFxuICAgICAgICBcIklmIHVzaW5nIGEgd2lsZGNhcmQgKCopLCBpdCBtdXN0IGdvIGF0IHRoZSBzdGFydCBvZiB0aGUgaG9zdG5hbWVcIlxuICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gcHJvdG9jb2wgPT09IFwiKlwiID8gW1wiaHR0cFwiLCBcImh0dHBzXCJdIDogW3Byb3RvY29sXVxuICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IGhvc3RuYW1lXG4gICAgdGhpcy5wYXRobmFtZU1hdGNoID0gcGF0aG5hbWVcbiAgfVxuXG4gIGluY2x1ZGVzKGlucHV0OiBzdHJpbmcgfCBVUkwgfCBMb2NhdGlvbik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzQWxsVXJscykgcmV0dXJuIHRydWVcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiXG4gICAgICAgID8gbmV3IFVSTChpbnB1dClcbiAgICAgICAgOiBpbnB1dCBpbnN0YW5jZW9mIExvY2F0aW9uXG4gICAgICAgICAgPyBuZXcgVVJMKGlucHV0LmhyZWYpXG4gICAgICAgICAgOiBpbnB1dFxuICAgIHJldHVybiB0aGlzLnByb3RvY29sTWF0Y2hlcy5zb21lKChwcm90b2NvbCkgPT4ge1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImh0dHBcIikgcmV0dXJuIHRoaXMuaXNIdHRwTWF0Y2godXJsKVxuICAgICAgaWYgKHByb3RvY29sID09PSBcImh0dHBzXCIpIHJldHVybiB0aGlzLmlzSHR0cHNNYXRjaCh1cmwpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBpc0h0dHBNYXRjaCh1cmw6IFVSTCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1cmwucHJvdG9jb2wgPT09IFwiaHR0cDpcIiAmJiB0aGlzLmlzSG9zdFBhdGhNYXRjaCh1cmwpXG4gIH1cblxuICBwcml2YXRlIGlzSHR0cHNNYXRjaCh1cmw6IFVSTCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1cmwucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgJiYgdGhpcy5pc0hvc3RQYXRoTWF0Y2godXJsKVxuICB9XG5cbiAgcHJpdmF0ZSBpc0hvc3RQYXRoTWF0Y2godXJsOiBVUkwpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaG9zdG5hbWVNYXRjaCB8fCAhdGhpcy5wYXRobmFtZU1hdGNoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBob3N0UmVnZXhlcyA9IFtcbiAgICAgIHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMuaG9zdG5hbWVNYXRjaCksXG4gICAgICB0aGlzLmNvbnZlcnRQYXR0ZXJuVG9SZWdleCh0aGlzLmhvc3RuYW1lTWF0Y2gucmVwbGFjZSgvXlxcKlxcLi8sIFwiXCIpKVxuICAgIF1cbiAgICBjb25zdCBwYXRoUmVnZXggPSB0aGlzLmNvbnZlcnRQYXR0ZXJuVG9SZWdleCh0aGlzLnBhdGhuYW1lTWF0Y2gpXG4gICAgcmV0dXJuIChcbiAgICAgIGhvc3RSZWdleGVzLnNvbWUoKHJlKSA9PiByZS50ZXN0KHVybC5ob3N0bmFtZSkpICYmIHBhdGhSZWdleC50ZXN0KHVybC5wYXRobmFtZSlcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRQYXR0ZXJuVG9SZWdleChwYXR0ZXJuOiBzdHJpbmcpOiBSZWdFeHAge1xuICAgIGNvbnN0IGVzY2FwZWQgPSBwYXR0ZXJuLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKVxuICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHtlc2NhcGVkLnJlcGxhY2UoL1xcXFxcXCovZywgXCIuKlwiKX0kYClcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IFNJVEVfUkVHSVNUUlkgPSB7XHJcbiAgZ3JlZW5ob3VzZToge1xyXG4gICAgZG9tYWluczogW1wiZ3JlZW5ob3VzZS5pb1wiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImdyZWVuaG91c2UuaW9cIl0sXHJcbiAgICBxdWVyeVBhcmFtczogW1wiZ2hfamlkXCIsIFwiZ2hfc3JjXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vKD86W14vXSsvam9icy9cXFxcZCt8ZW1iZWQvam9iX2FwcClcIlxyXG4gIH0sXHJcbiAgeGNvbXBhbnk6IHsgcGF0dGVybnM6IFtcIio6Ly94LmNvbXBhbnkvKlwiXSwgcGF0aFJlZ2V4OiBcIl4vY2FyZWVycy9bXi9dKy8/JFwiIH0sXHJcbiAgd2FsbWFydDoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9jYXJlZXJzLndhbG1hcnQuY29tLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6XHJcbiAgICAgIFwiXi8odXMvZW4vKGhvbWV8am9icz8vW14vXSt8YXBwbHkoPzovLiopP3xhcHBsaWNhdGlvbig/Oi8uKik/KXxjb250ZW50L2NhcmVlcnMvdXMvZW4vLiopJFwiXHJcbiAgfSxcclxuICB3b3JrZGF5OiB7XHJcbiAgICBkb21haW5zOiBbXHJcbiAgICAgIFwibXl3b3JrZGF5am9icy5jb21cIixcclxuICAgICAgXCJteXdvcmtkYXlqb2JzLWltcGwuY29tXCIsXHJcbiAgICAgIFwibXl3b3JrZGF5c2l0ZS5jb21cIixcclxuICAgICAgXCJteXdvcmtkYXkuY29tXCJcclxuICAgIF1cclxuICB9LFxyXG4gIGt1bGE6IHsgZG9tYWluczogW1wiY2FyZWVycy5rdWxhLmFpXCJdLCBwYXRoUmVnZXg6IFwiXi9bXi9dKy9bXi9dK1wiIH0sXHJcbiAgaWNpbXM6IHtcclxuICAgIGRvbWFpbnM6IFtcImljaW1zLmNvbVwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImljaW1zLmNvbVwiXSxcclxuICAgIGlmcmFtZU9ubHk6ICEwLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vam9icy9cXFxcZCsoPzovfCQpXCJcclxuICB9LFxyXG4gIGRvdmVyOiB7IGRvbWFpbnM6IFtcImRvdmVyLmNvbVwiXSB9LFxyXG4gIGFkb2JlOiB7IGRvbWFpbnM6IFtcImNhcmVlcnMuYWRvYmUuY29tXCJdLCBwYXRoUmVnZXg6IFwiXi9bXi9dKy9bXi9dKy9hcHBseVwiIH0sXHJcbiAgem9ob3JlY3J1aXQ6IHtcclxuICAgIGRvbWFpbnM6IFtcInpvaG9yZWNydWl0LmNvbVwiLCBcInpvaG9yZWNydWl0LmNhXCIsIFwiem9ob3JlY3J1aXQuZXVcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJ6b2hvcmVjcnVpdC5jb21cIiwgXCJ6b2hvcmVjcnVpdC5jYVwiLCBcInpvaG9yZWNydWl0LmV1XCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vam9icy9DYXJlZXJzLy4rXCJcclxuICB9LFxyXG4gIGdlbTogeyBkb21haW5zOiBbXCJqb2JzLmdlbS5jb21cIl0sIHBhdGhSZWdleDogXCJeL1tcXFxcdy1dKy9bXFxcXHctXSsvPyRcIiB9LFxyXG4gIGd1c3RvOiB7XHJcbiAgICBkb21haW5zOiBbXCJqb2JzLmd1c3RvLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL3Bvc3RpbmdzL1teL10rKD86L2FwcGxpY2FudHMvbmV3KD86Ly4qKT8pPy8/JFwiXHJcbiAgfSxcclxuICBoaXJpbmd0aGluZzoge1xyXG4gICAgZG9tYWluczogW1xyXG4gICAgICBcImhpcmluZ3RoaW5nLmNvbVwiLFxyXG4gICAgICBcIm9hc2lzcmVjcnVpdC5jb21cIixcclxuICAgICAgXCJlbGV2YXRlLWF0cy5jb21cIixcclxuICAgICAgXCJwcmlzbWhyLWhpcmUuY29tXCIsXHJcbiAgICAgIFwiZ25haGlyaW5nLmNvbVwiLFxyXG4gICAgICBcInJpcHBsaW5nLWF0cy5jb21cIlxyXG4gICAgXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYi9cXFxcZCsvXCJcclxuICB9LFxyXG4gIGh1YnNwb3Q6IHsgcGF0dGVybnM6IFtcIio6Ly93d3cuaHVic3BvdC5jb20vY2FyZWVycy9qb2JzLypcIl0gfSxcclxuICBwYXljb21vbmxpbmU6IHtcclxuICAgIGRvbWFpbnM6IFtcInBheWNvbW9ubGluZS5jb21cIiwgXCJwYXljb21vbmxpbmUubmV0XCJdLFxyXG4gICAgdXJsUmVnZXg6XHJcbiAgICAgIFwiXi92NC9hdHMvd2ViXFxcXC5waHAvcG9ydGFsL1teL10rLyg/OmFwcGxpY2F0aW9ucyg/OlsvPyNdLiopP3xqb2JzL1teLz8jXSsoPzpbPyNdLiopPylcIlxyXG4gIH0sXHJcbiAgdGVhbXRhaWxvcjoge1xyXG4gICAgZG9tYWluczogW1widGVhbXRhaWxvci5jb21cIiwgXCJjYXJlZXJzLmJsdWVvcmFuZ2UuZGlnaXRhbFwiLCBcImNhcmVlcnMudG90YWxwZXJmb3JtLmNvbVwiXSxcclxuICAgIHBhZ2VTb3VyY2VLZXl3b3JkOiBcInRlYW10YWlsb3ItY2RuLmNvbVwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJ0ZWFtdGFpbG9yLmNvbVwiLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vam9icy8uK1wiXHJcbiAgfSxcclxuICBjYXRzb25lOiB7XHJcbiAgICBkb21haW5zOiBbXCJjYXRzb25lLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2NhcmVlcnMvW14vXSsvam9icy9bXi9dKyg/Oi9hcHBseSk/Lz8kXCJcclxuICB9LFxyXG4gIG1ldGFjYXJlZXJzOiB7XHJcbiAgICBkb21haW5zOiBbXCJtZXRhY2FyZWVycy5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9wcm9maWxlLyhjcmVhdGVfYXBwbGljYXRpb258am9iX2RldGFpbHMpL1teL10rXCJcclxuICB9LFxyXG4gIHljb21iaW5hdG9yOiB7IGRvbWFpbnM6IFtcInd3dy55Y29tYmluYXRvci5jb21cIl0gfSxcclxuICByaXBwbGVoaXJlOiB7IGRvbWFpbnM6IFtcInJpcHBsZWhpcmUuY29tXCJdIH0sXHJcbiAgcGVyc29uaW86IHtcclxuICAgIGRvbWFpbnM6IFtcInBlcnNvbmlvLmRlXCIsIFwicGVyc29uaW8uY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vam9iL1teLz8jXSsoPzovYXBwbHkpPy8/JFwiXHJcbiAgfSxcclxuICBjYXJlZXJzcGFnZTogeyBkb21haW5zOiBbXCJjYXJlZXJzLXBhZ2UuY29tXCJdIH0sXHJcbiAgY2FyZWVycGx1Zzoge1xyXG4gICAgZG9tYWluczogW1xyXG4gICAgICBcImNhcmVlcnBsdWcuY29tXCIsXHJcbiAgICAgIFwic2ZhZ2VudGpvYnMuY29tXCIsXHJcbiAgICAgIFwic2ZhZ2VudGNhcmVlcnMuY29tXCIsXHJcbiAgICAgIFwiYXBzY2FyZWVycG9ydGFsLmNvbVwiXHJcbiAgICBdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vam9icy9cXFxcZCsvYXBwcy9uZXdcIlxyXG4gIH0sXHJcbiAgY2FyZWVyc3dpdGh3YXltbzoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9jYXJlZXJzLndpdGh3YXltby5jb20vam9icy8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vam9icy8oPyFzZWFyY2goPzovfCQpKVteL10rXCJcclxuICB9LFxyXG4gIHN1Y2Nlc3NmYWN0b3JzOiB7IGRvbWFpbnM6IFtcInN1Y2Nlc3NmYWN0b3JzLmV1XCIsIFwic3VjY2Vzc2ZhY3RvcnMuY29tXCIsIFwic2Fwc2YuY29tXCJdIH0sXHJcbiAgY2xlYXJjb21wYW55OiB7XHJcbiAgICBkb21haW5zOiBbXCJjbGVhcmNvbXBhbnkuY29tXCJdLFxyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmhybWRpcmVjdC5jb20vZW1wbG95bWVudC9qb2Itb3BlbmluZy5waHAqXCJdXHJcbiAgfSxcclxuICBhc2hieToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmFzaGJ5aHEuY29tLyovKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImpvYnMuYXNoYnlocS5jb21cIiwgXCJhc2hieV9qaWRcIl0sXHJcbiAgICBxdWVyeVBhcmFtczogW1wiYXNoYnlfamlkXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vW14vXSsvWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17MTJ9XCJcclxuICB9LFxyXG4gIGlzb2x2ZWQ6IHtcclxuICAgIGRvbWFpbnM6IFtcImlzb2x2ZWRoaXJlLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeLyg/OmFwcGx5L3xqb2JzL3xpZnJhbWUvbW9iaWxlL3xhY2NvdW50LylcIlxyXG4gIH0sXHJcbiAgam9iZGl2YTogeyBwYXR0ZXJuczogW1wiKjovLyouam9iZGl2YS5jb20vcG9ydGFsLypcIl0gfSxcclxuICBpbnR1aXQ6IHtcclxuICAgIGRvbWFpbnM6IFtcImludHVpdC1xdWl6LmFwcC5pbnR1aXQuY29tXCJdLFxyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vam9icy5pbnR1aXQuY29tL2pvYi8qXCIsXHJcbiAgICAgIFwiKjovL2ludHVpdC5hdmF0dXJlLm5ldC8qL2V4dGVybmFsQ2FyZWVycy9Kb2JBcHBsaWNhdGlvbipcIlxyXG4gICAgXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImludHVpdC1xdWl6LmFwcC5pbnR1aXQuY29tXCJdXHJcbiAgfSxcclxuICBqYWNvYnM6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vY2FyZWVycy5qYWNvYnMuY29tL2VuX1VTL2NhcmVlcnMvKlwiXSxcclxuICAgIHBhdGhSZWdleDpcclxuICAgICAgXCJeL2VuX1VTL2NhcmVlcnMvKEpvYkRldGFpbHxSZWdpc3RlcnxBcHBsaWNhdGlvbkZvcm18QXBwbGljYXRpb25SZXZpZXcpKD86L3wkKVwiXHJcbiAgfSxcclxuICBzbWFydHJlY3J1aXRlcnM6IHtcclxuICAgIGRvbWFpbnM6IFtcInNtYXJ0ci5tZVwiXSxcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovL2pvYnMuc21hcnRyZWNydWl0ZXJzLmNvbS9vbmVjbGljay11aS9jb21wYW55LypcIixcclxuICAgICAgXCIqOi8vam9icy5zbWFydHJlY3J1aXRlcnMuY29tLyovKlwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBwaGVub206IHtcclxuICAgIHBhZ2VTb3VyY2VLZXl3b3JkOiBcIkFQUExZX2Zvcm1fcmVuZGVyZXIuanNcIixcclxuICAgIHBhZ2VTb3VyY2VEb21haW46IFwicGhlbm9tcGVvcGxlLmNvbVwiLFxyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vam9icy5ic3doZWFsdGguY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudXZhaGVhbHRoLm9yZy8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmR1a2VoZWFsdGgub3JnLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL3d3dy5qb2JzLmFiYm90dC8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFzcGVuZGVudGFsLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmZpdmViZWxvdy5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5mb3Vyc2Vhc29ucy5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5rYnIuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2pvYnMua3VlaG5lLW5hZ2VsLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hc3RlcmNhcmQuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWNhZmVlLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLWNlZS5wd2MuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMucm9jaGUuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL3d3dy52Y2FjYXJlZXJzLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLndhc3RlY29ubmVjdGlvbnMuY29tLyovYXBwbHkqXCJcclxuICAgIF1cclxuICB9LFxyXG4gIGNpc2NvOiB7IHBhdHRlcm5zOiBbXCIqOi8vY2FyZWVycy5jaXNjby5jb20vKi9hcHBseSpcIl0gfSxcclxuICB0ZXNsYToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmpvYnMudGVzbGEuY29tLypcIiwgXCIqOi8vKi50ZXNsYS5jb20vY2FyZWVycy8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIi9hcHBseVwiXHJcbiAgfSxcclxuICBhbWF6b246IHsgcGF0dGVybnM6IFtcIio6Ly8qLmFtYXpvbi5qb2JzLypcIl0sIHBhdGhSZWdleDogXCIvam9icy9bXFxcXHctXSsvYXBwbHlcIiB9LFxyXG4gIGFtYXpvbnVuaXZlcnNpdHk6IHsgcGF0dGVybnM6IFtcIio6Ly8qLmFtYXpvbnVuaXZlcnNpdHkuam9icy9wcm9maWxlKlwiXSB9LFxyXG4gIHViZXI6IHtcclxuICAgIGRvbWFpbnM6IFtcInViZXIuY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OlxyXG4gICAgICBcIl4vKD86KD86KD86W14vXSsvKXsxLDJ9KT9jYXJlZXJzLyg/OmFwcGx5KD86L3wkKXxsaXN0L1teLz8jXSspfCg/OlteL10rLyk/am9icy9bXi8/I10rLz8kKVwiXHJcbiAgfSxcclxuICB0aWt0b2s6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyoubGlmZWF0dGlrdG9rLmNvbS9yZXN1bWUqXCIsXHJcbiAgICAgIFwiKjovLyoudGlrdG9rdXNkcy5jb20vKi9yZXN1bWUqXCIsXHJcbiAgICAgIFwiKjovLyoudGlrdG9rdXNkcy5jb20vKi9wb3NpdGlvbi8qL2RldGFpbCpcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgYnl0ZWRhbmNlOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLmpvYnMuYnl0ZWRhbmNlLmNvbS9lbi9yZXN1bWUqXCIsXHJcbiAgICAgIFwiKjovL2pvYnMuYnl0ZWRhbmNlLmNvbS8qLyovKi9kZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2pvYnMuYnl0ZWRhbmNlLmNvbS8qLyovKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vam9icy5ieXRlZGFuY2UuY29tLyovKi9hcHBsaWVkKlwiLFxyXG4gICAgICBcIio6Ly9qb2luYnl0ZWRhbmNlLmNvbS9zZWFyY2gvKlwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBnb29nbGU6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vZ29vZ2xlLmNvbS9hYm91dC9jYXJlZXJzLypcIiwgXCIqOi8vKi5nb29nbGUuY29tL2Fib3V0L2NhcmVlcnMvKlwiXSxcclxuICAgIHBhdGhSZWdleDpcclxuICAgICAgXCJeL2Fib3V0L2NhcmVlcnMvYXBwbGljYXRpb25zKD86Lyg/OnUvXFxcXGQrLyk/YXBwbHkoPzovfCQpfC9qb2JzL3Jlc3VsdHMvW14vPyNdKylcIixcclxuICAgIHVybFJlZ2V4OiBcIl4vYWJvdXQvY2FyZWVycy9hcHBsaWNhdGlvbnMvam9icy9yZXN1bHRzKD86XFxcXD9bXiNdKik/Iy4qWz8mI11qaWQ9W14mI10rXCJcclxuICB9LFxyXG4gIGxldmVyOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2pvYnMubGV2ZXIuY28vKi8qXCIsIFwiKjovL2pvYnMuZXUubGV2ZXIuY28vKi8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wibGV2ZXIuY29cIl0sXHJcbiAgICBxdWVyeVBhcmFtczogW1wiTGV2ZXJBcHBJZFwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL1teL10rL1teL10rKD86L2FwcGx5KT8vPyRcIlxyXG4gIH0sXHJcbiAgam9idml0ZToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9qb2JzLmpvYnZpdGUuY29tLyovam9iLypcIiwgXCIqOi8vam9icy5qb2J2aXRlLmNvbS8qL2FwcGx5KlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImpvYnMuam9idml0ZS5jb21cIl0sXHJcbiAgICBxdWVyeVBhcmFtczogW1wiam9idml0ZWlmcmFtZVwiXVxyXG4gIH0sXHJcbiAgYnJlZXp5OiB7IHBhdHRlcm5zOiBbXCIqOi8vKi5icmVlenkuaHIvcC8qXCIsIFwiKjovLyouYnJlZXp5LmhyLyovYXBwbHkqXCJdIH0sXHJcbiAgd29ya2FibGU6IHtcclxuICAgIGRvbWFpbnM6IFtcImNhcmVlcnMuYXJib3ItZWR1Y2F0aW9uLmNvbVwiXSxcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vYXBwbHkud29ya2FibGUuY29tLypcIiwgXCIqOi8vam9icy53b3JrYWJsZS5jb20vKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcIndvcmthYmxlLmNvbVwiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJzZWxlY3RlZEpvYklkXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vKD86W14vXSsvai9bXi9dKyg/Oi9hcHBseSk/Lz8kfCg/OlthLXpdezJ9Lyk/KD86dmlld3xjb21wYW55KS9bXFxcXHctXSspXCJcclxuICB9LFxyXG4gIGdvaGlyZToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9qb2JzLmdvaGlyZS5pby8qLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJhcHAuZ29oaXJlLmlvL3dpZGdldC9cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9bXi9dKy8uKy1cXFxcZCsvPyRcIlxyXG4gIH0sXHJcbiAgYmFtYm9vaHI6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5iYW1ib29oci5jb20vam9icypcIiwgXCIqOi8vKi5iYW1ib29oci5jb20vY2FyZWVycypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJiYW1ib29oci5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi8oPzpqb2JzfGNhcmVlcnMvW1xcXFx3LV0qXFxcXGQpXCJcclxuICB9LFxyXG4gIGJyYXNzcmluZzoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmJyYXNzcmluZy5jb20vVEduZXdVSS8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiYnJhc3NyaW5nLmNvbVwiXSxcclxuICAgIHVybFJlZ2V4OiBcIiMoPzpBcHBseXBhZ2V8am9iRGV0YWlscz0pXCJcclxuICB9LFxyXG4gIGFkcDoge1xyXG4gICAgZG9tYWluczogW1wid29ya2ZvcmNlbm93LmFkcC5jb21cIl0sXHJcbiAgICBwYXR0ZXJuczogW1wiKjovL3JlY3J1aXRpbmcuYWRwLmNvbS9zcmNjYXIvcHVibGljLypcIiwgXCIqOi8vbXlqb2JzLmFkcC5jb20vKi9jeC8qXCJdXHJcbiAgfSxcclxuICBvcmFjbGVjbG91ZDoge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vKi5vcmFjbGVjbG91ZC5jb20vKi9DYW5kaWRhdGVFeHBlcmllbmNlLyovc2l0ZXMvKi9qb2IvKlwiLFxyXG4gICAgICBcIio6Ly8qLm9yYWNsZWNsb3VkLmNvbS8qL0NhbmRpZGF0ZUV4cGVyaWVuY2UvKi9zaXRlcy8qLyovcHJldmlldy8qXCIsXHJcbiAgICAgIFwiKjovLyovKi9DYW5kaWRhdGVFeHBlcmllbmNlLyovc2l0ZXMvKi9qb2IvKlwiLFxyXG4gICAgICBcIio6Ly8qLyovQ2FuZGlkYXRlRXhwZXJpZW5jZS8qL3NpdGVzLyovKi9wcmV2aWV3LypcIixcclxuICAgICAgXCIqOi8vKi8qL3NpdGVzLyovam9icy9wcmV2aWV3LyovYXBwbHkvKlwiXHJcbiAgICBdLFxyXG4gICAgcGF0aFJlZ2V4OlxyXG4gICAgICBcIig/Oi9DYW5kaWRhdGVFeHBlcmllbmNlLy4qL3NpdGVzL1teL10rL2pvYi9bXi9dKyg/Oi9hcHBseSg/Oi8uKik/KT8vPyR8L2FwcGx5KVwiXHJcbiAgfSxcclxuICB1bHRpcHJvOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY29tLyovSm9iQm9hcmQvKi9PcHBvcnR1bml0eURldGFpbCpcIixcclxuICAgICAgXCIqOi8vKi51bHRpcHJvLmNvbS8qL0pvYkJvYXJkLyovT3Bwb3J0dW5pdHlBcHBseSpcIixcclxuICAgICAgXCIqOi8vKi51bHRpcHJvLmNvbS8qL0pvYkJvYXJkLyovQWNjb3VudC9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vKi51bHRpcHJvLmNhLyovSm9iQm9hcmQvKi9PcHBvcnR1bml0eURldGFpbCpcIixcclxuICAgICAgXCIqOi8vKi51bHRpcHJvLmNhLyovSm9iQm9hcmQvKi9PcHBvcnR1bml0eUFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY2EvKi9Kb2JCb2FyZC8qL0FjY291bnQvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovLyoucmVjLnByby51a2cubmV0LyovSm9iQm9hcmQvKi9PcHBvcnR1bml0eURldGFpbCpcIixcclxuICAgICAgXCIqOi8vKi5yZWMucHJvLnVrZy5uZXQvKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5QXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyoucmVjLnByby51a2cubmV0LyovSm9iQm9hcmQvKi9BY2NvdW50L1JlZ2lzdGVyKlwiXHJcbiAgICBdXHJcbiAgfSxcclxuICByaXBwbGluZzoge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vKi5yaXBwbGluZy1hdHMuY29tL2pvYi8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLnJpcHBsaW5nLWF0cy5jb20vam9icy9lb3Bfc3VydmV5LypcIlxyXG4gICAgXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImF0cy5yaXBwbGluZy5jb21cIl1cclxuICB9LFxyXG4gIHJpcHBsaW5nSG9zdGVkOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2F0cy5yaXBwbGluZy5jb20vKi9qb2JzLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9bXi9dKy9qb2JzL1teL10rKD86L2FwcGx5KD86Ly4qKT8pPy8/JFwiXHJcbiAgfSxcclxuICBkYXlmb3JjZToge1xyXG4gICAgZG9tYWluczogW1wiam9icy5kYXlmb3JjZWhjbS5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi8oPzpbXi9dKy8pK2pvYnMvW14vXSsoPzovYXBwbHkoPzovLiopPyk/Lz8kXCJcclxuICB9LFxyXG4gIGRheWZvcmNlSWRlbnRpdHk6IHtcclxuICAgIHBhdHRlcm5zOiBbXCJodHRwczovL2RmaWQuZGF5Zm9yY2VoY20uY29tL2dsb2JhbGlkZW50aXR5L2FjY291bnQvKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2dsb2JhbGlkZW50aXR5L2FjY291bnQvKD86cmVnaXN0ZXJ8bG9naW4pLz8kXCJcclxuICB9LFxyXG4gIHRhbGVvOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC8qL2FwcGxpY2F0aW9uLmpzcypcIixcclxuICAgICAgXCIqOi8vKi50YWxlby5uZXQvKi9mbG93LmpzZipcIixcclxuICAgICAgXCIqOi8vKi50YWxlby5uZXQvKi9qb2JhcHBseSpcIixcclxuICAgICAgXCIqOi8vKi50YWxlby5uZXQvKi9hdHMvY2FyZWVycy8qXCIsXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0L2NhcmVlcnNlY3Rpb24vKi9qb2JkZXRhaWwuZnRsKlwiLFxyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC8qL2h0bWxSZXNvdXJjZVZpZXdlci5qc3MqXCIsXHJcbiAgICAgIFwiKjovLyouYnVybnNtY2QuY29tL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLmJ1cm5zbWNkLmNvbS9jYXJlZXJzZWN0aW9uL2FwcGxpY2F0aW9uLmpzcypcIixcclxuICAgICAgXCIqOi8vKi5idXJuc21jZC5jb20vY2FyZWVyc2VjdGlvbi9mbG93LmpzZipcIixcclxuICAgICAgXCIqOi8vKi5idXJuc21jZC5jb20vY2FyZWVyc2VjdGlvbi9qb2JhcHBseSpcIixcclxuICAgICAgXCIqOi8vKi5idXJuc21jZC5jb20vY2FyZWVyc2VjdGlvbi9odG1sUmVzb3VyY2VWaWV3ZXIuanNzKlwiLFxyXG4gICAgICBcIio6Ly90YWxlbnRhY3F1aXNpdGlvbi4zZHMuY29tLyovYXBwbGljYXRpb24uanNzKlwiLFxyXG4gICAgICBcIio6Ly90YWxlbnRhY3F1aXNpdGlvbi4zZHMuY29tLyovZmxvdy5qc2YqXCIsXHJcbiAgICAgIFwiKjovL3RhbGVudGFjcXVpc2l0aW9uLjNkcy5jb20vKi9qb2JhcHBseSpcIixcclxuICAgICAgXCIqOi8vdGFsZW50YWNxdWlzaXRpb24uM2RzLmNvbS8qL2F0cy9jYXJlZXJzLypcIixcclxuICAgICAgXCIqOi8vdGFsZW50YWNxdWlzaXRpb24uM2RzLmNvbS8qL2h0bWxSZXNvdXJjZVZpZXdlci5qc3MqXCJcclxuICAgIF1cclxuICB9LFxyXG4gIGVpZ2h0Zm9sZDoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmVpZ2h0Zm9sZC5haS9jYXJlZXJzKlwiLCBcIio6Ly8qLmVpZ2h0Zm9sZC5haS9jYXJlZXJodWIvKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImVpZ2h0Zm9sZC5haVwiXSxcclxuICAgIHBhZ2VTb3VyY2VLZXl3b3JkOiBcImVpZ2h0Zm9sZFwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJlaWdodGZvbGQuYWlcIixcclxuICAgIHVybFJlZ2V4OlxyXG4gICAgICBcIig/Ol4vY2FyZWVyaHViL2V4cGxvcmUvam9icy8oPyFhcHBseS8/KD86Wz8jXXwkKSlbXi8/I10rLz8oPzpbPyNdLiopPyR8Xi9jYXJlZXJodWIvZXhwbG9yZS9qb2JzL2FwcGx5Lz9cXFxcPyg/PVteI10qXFxcXGJwaWQ9W14mI10rKVteI10qKD86Iy4qKT8kfF4vY2FyZWVycyg/Oi8oPzpqb2IvW14vPyNdKyg/Oi9hcHBseSk/KD86Wy8/I118JCl8YXBwbHkoPzpbLz8jXXwkKSl8XFxcXD8oPz0oPzpwaWQ9W14mI10rfFteI10qJnBpZD1bXiYjXSspKVteI10qKD86Iy4qKT8kKSlcIlxyXG4gIH0sXHJcbiAgamF6emhyOiB7IHBhdHRlcm5zOiBbXCIqOi8vKi5hcHBseXRvam9iLmNvbS9hcHBseS8qXCJdIH0sXHJcbiAgdHJha3N0YXI6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5oaXJlLnRyYWtzdGFyLmNvbS9qb2JzLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzL1teL10rLz8kXCJcclxuICB9LFxyXG4gIGZyZXNodGVhbTogeyBwYXR0ZXJuczogW1wiKjovLyouZnJlc2h0ZWFtLmNvbS9qb2JzLypcIl0gfSxcclxuICBwaW5wb2ludGhxOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyoucGlucG9pbnRocS5jb20vKi9wb3N0aW5ncy8qXCIsIFwiKjovLyoucGlucG9pbnRocS5jb20vcG9zdGluZ3MvKlwiXSxcclxuICAgIHBhZ2VTb3VyY2VLZXl3b3JkOiBcInBpbnBvaW50aHFcIixcclxuICAgIHBhZ2VTb3VyY2VEb21haW46IFwicGlucG9pbnRocS5jb21cIlxyXG4gIH0sXHJcbiAgcmVjcnVpdGVlOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyoucmVjcnVpdGVlLmNvbS8qLypcIl0sXHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJyZWNydWl0ZWVcIixcclxuICAgIHBhZ2VTb3VyY2VEb21haW46IFwicmVjcnVpdGVlLmNvbVwiXHJcbiAgfSxcclxuICB0cmluZXRoaXJlOiB7IHBhdHRlcm5zOiBbXCIqOi8vYXBwLnRyaW5ldGhpcmUuY29tL2NvbXBhbmllcy8qL2pvYnMvKlwiXSB9LFxyXG4gIGpvYnNjb3JlOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly9jYXJlZXJzLmpvYnNjb3JlLmNvbS9hcHBseV9mbG93LypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5qb2JzY29yZS5jb20vY2FyZWVycy8qL2pvYnMvKlwiXHJcbiAgICBdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiam9ic2NvcmUuY29tXCJdXHJcbiAgfSxcclxuICBwYXlsb2NpdHk6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5wYXlsb2NpdHkuY29tL3JlY3J1aXRpbmcvKlwiLCBcIio6Ly8qLnBheWxvY2l0eS5jb20vUmVjcnVpdGluZy8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wicGF5bG9jaXR5LmNvbVwiXSxcclxuICAgIHVybFJlZ2V4OiBcIl4vW1JyXWVjcnVpdGluZy9bSmpdb2JzLyg/OltBYV1wcGx5L3xbRGRdZXRhaWxzL1teLz8jXSsoPzpbLz8jXXwkKSlcIlxyXG4gIH0sXHJcbiAgYXZhdHVyZToge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL0FwcGxpY2F0aW9uRm9ybSpcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL0FwcGxpY2F0aW9uUXVlc3Rpb25zKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovQXBwbGljYXRpb25SZXZpZXcqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC9MaW5rZWRJbkFwcGxpY2F0aW9uRm9ybSpcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL0xpbmtlZEluQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovWW91ckluZm9ybWF0aW9uKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0L2NhbXB1c0FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvY2FyZWVycy9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvY2FyZWVycy9Kb2JEZXRhaWwvKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovY2FyZWVycy9Kb2JEZXRhaWwvKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovRXh0ZXJuYWwvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0L2NhcmVlcnMvTG9jYXRpb25BbmRQcm9maWxlLypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL2NhcmVlcnMvTG9jYXRpb25BbmRQcm9maWxlLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9BcHBsaWNhdGlvbk1ldGhvZHMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0FwcGxpY2F0aW9uUXVlc3Rpb25zKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0dlbmVyYWxJbmZvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0FwcGxpY2F0aW9uRG90S25vY2tlZE91dFdpemFyZCpcIixcclxuICAgICAgXCIqOi8vYXBwbHkuZGVsb2l0dGUuY29tLyovY2FyZWVycy8qXCIsXHJcbiAgICAgIFwiKjovL2FwcGx5LmRlbG9pdHRlLmNvbS8qL0V4dGVybmFsLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbk1ldGhvZHMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uUXVlc3Rpb25zKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0ludml0ZVRvQXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0dlbmVyYWxJbmZvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0pvYkRldGFpbC8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0xvY2F0aW9uQW5kUHJvZmlsZS8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9FeHRlcm5hbC9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uRm9ybSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9BcHBsaWNhdGlvblF1ZXN0aW9ucypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25SZXZpZXcqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9JbnZpdGVUb0FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9HZW5lcmFsSW5mbypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9Kb2JEZXRhaWwvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9Mb2NhdGlvbkFuZFByb2ZpbGUvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovRXh0ZXJuYWwvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbk1ldGhvZHMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvSm9iQXBwbGljYXRpb24qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uUXVlc3Rpb25zKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL0dlbmVyYWxJbmZvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL1lvdXJJbmZvcm1hdGlvbipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0FwcGxpY2F0aW9uRm9ybSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0FwcGxpY2F0aW9uUXVlc3Rpb25zKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvQXBwbGljYXRpb25SZXZpZXcqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0ludml0ZVRvQXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9HZW5lcmFsSW5mbypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0pvYkRldGFpbC8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9Mb2NhdGlvbkFuZFByb2ZpbGUvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9FeHRlcm5hbC9Kb2JEZXRhaWwqXCJcclxuICAgIF0sXHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJhdmF0dXJlXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcImF2YXR1cmUubmV0XCJcclxuICB9LFxyXG4gIG9rdGE6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vd3d3Lm9rdGEuY29tL2NvbXBhbnkvY2FyZWVycy8qLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9jb21wYW55L2NhcmVlcnMvKD8ham9iLWxpc3RpbmcoPzovfCQpKVwiXHJcbiAgfSxcclxuICBjb21lZXQ6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5jb21lZXQuY29tL2pvYnMvKi8qLyovKlwiLCBcIio6Ly8qLmNvbWVldC5jby9qb2JzLyovKi9hcHBseSpcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJjb21lZXQuY29cIiwgXCJjb21lZXQuY29tXCJdXHJcbiAgfSxcclxuICBhcHBsZToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9qb2JzLmFwcGxlLmNvbS8qL2RldGFpbHMvKlwiLCBcIio6Ly9qb2JzLmFwcGxlLmNvbS9hcHAvKi9hcHBseS8qXCJdXHJcbiAgfSxcclxuICBwb2x5bWVyOiB7IHBhdHRlcm5zOiBbXCIqOi8vam9icy5wb2x5bWVyLmNvLyovKlwiXSB9LFxyXG4gIHJlY3J1aXRlcmZsb3c6IHtcclxuICAgIGRvbWFpbnM6IFtcInJlY3J1aXRlcmZsb3cuY29tXCJdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwicmVjcnVpdGVyZmxvdy5jb21cIixcclxuICAgIHBhZ2VTb3VyY2VEb21haW46IFwicmVjcnVpdGVyZmxvdy5jb21cIixcclxuICAgIHBhdGhSZWdleDogXCJeL1teL10rL2pvYnMvW14vPyNdK1wiXHJcbiAgfSxcclxuICBjYXJlZXJzdG9hc3R0YWI6IHsgcGF0dGVybnM6IFtcIio6Ly9jYXJlZXJzLnRvYXN0dGFiLmNvbS9qb2JzKlwiXSB9XHJcbn1cclxuIiwiLyoqIFNoYXJlZCBmaWVsZCB0eXBlcyBmb3IgdGhlIGNsZWFuLVRTIGNyYXdsZXIgKG1pcnJvcnMgZW5naW5lIEZJRUxEX1RZUEUgc3Vic2V0KS4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFID0ge1xyXG4gIFRFWFQ6IFwidGV4dFwiLFxyXG4gIFRFWFRBUkVBOiBcInRleHRhcmVhXCIsXHJcbiAgU0VMRUNUOiBcInNlbGVjdFwiLFxyXG4gIENIRUNLQk9YOiBcImNoZWNrYm94XCIsXHJcbiAgUkFESU86IFwicmFkaW9cIixcclxuICBSQURJT0dST1VQOiBcInJhZGlvZ3JvdXBcIixcclxuICBEQVRFOiBcImRhdGVcIixcclxuICBGSUxFOiBcImZpbGVcIlxyXG59IGFzIGNvbnN0XHJcblxyXG5leHBvcnQgdHlwZSBGaWVsZFR5cGUgPSAodHlwZW9mIEZJRUxEX1RZUEUpW2tleW9mIHR5cGVvZiBGSUVMRF9UWVBFXVxyXG5cclxuZXhwb3J0IHR5cGUgRGlzY292ZXJlZEZpZWxkID0ge1xyXG4gIHR5cGU6IEZpZWxkVHlwZSB8IFwidGV4dFwiIHwgXCJzZWxlY3RcIiB8IFwidGV4dGFyZWFcIiB8IFwicmFkaW9cIiB8IFwiY2hlY2tib3hcIlxyXG4gIGxhYmVsOiBzdHJpbmdcclxuICByZXF1aXJlZDogYm9vbGVhblxyXG4gIG9wdGlvbnM/OiBzdHJpbmdbXVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBdHNTaXRlSWQgPVxyXG4gIHwgXCJwZXJzb25pb1wiXHJcbiAgfCBcImdyZWVuaG91c2VcIlxyXG4gIHwgXCJsZXZlclwiXHJcbiAgfCBcIm15d29ya2RheVwiXHJcbiAgfCBcImFzaGJ5XCJcclxuICB8IFwib3JhY2xlY2xvdWRcIlxyXG4gIHwgXCJwYXljb21vbmxpbmUtdjNcIlxyXG4gIHwgXCJnZW5lcmljXCJcclxuIiwiaW1wb3J0IHsgc2VuZFRvQmFja2dyb3VuZCBhcyBwbGFzbW9ocVNlbmRUb0JhY2tncm91bmQgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXHJcblxyXG5pbXBvcnQgdHlwZSB7IERpc2NvdmVyZWRGaWVsZCB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci90eXBlc1wiXHJcblxyXG4vKiogTG9vc2UgbWVzc2FnaW5nIHdyYXBwZXIg4oCUIGV4dGVuc2lvbiBCRyBoYW5kbGVycyBhcmUgbm90IHR5cGVkIGluIHRoaXMgcGFja2FnZS4gKi9cclxuYXN5bmMgZnVuY3Rpb24gc2VuZFRvQmFja2dyb3VuZChtc2c6IHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBib2R5PzogdW5rbm93blxyXG59KTogUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gcGxhc21vaHFTZW5kVG9CYWNrZ3JvdW5kKG1zZyBhcyBuZXZlcilcclxufVxyXG5cclxuLyoqXHJcbiAqIENsZWFuLVRTIGFuc3dlciBoZWxwZXJzIChleHRlbnNpb24tb3duZWQpLlxyXG4gKiBQYXJjZWwgcmVmZXJlbmNlOiBlbmdpbmUvaGVscGVyLWFwcC9zcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICovXHJcblxyXG5leHBvcnQgdHlwZSBGaWxsQW5zd2VyID0geyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfVxyXG5cclxuY29uc3QgTk9OX0FMTlVNX0VYQ0VQVF9DSksgPVxyXG4gIC9bXmEtekEtWjAtOVxcc1xcdTMwNDAtXFx1MzBmZlxcdTM0MDAtXFx1NGRiZlxcdTRlMDAtXFx1OWZmZlxcdWY5MDAtXFx1ZmFmZlxcdWFjMDAtXFx1ZDdhZl0vZ1xyXG5cclxuLyoqIFN0cmlwIHB1bmN0dWF0aW9uIChrZWVwIENKSykg4oCUIG9yYWNsZSBgcmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNgLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU3BlY2lhbENoYXJhY3RlcnModGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gdGV4dC5yZXBsYWNlKE5PTl9BTE5VTV9FWENFUFRfQ0pLLCBcIlwiKVxyXG59XHJcblxyXG4vKiogTGFiZWwgZXF1YWxpdHkgYWZ0ZXIgc3RyaXBwaW5nIHB1bmN0dWF0aW9uIC8gYXN0ZXJpc2tzIC8gd2hpdGVzcGFjZS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTWF0Y2hlZChhOiB1bmtub3duLCBiOiB1bmtub3duKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFhIHx8ICFiIHx8IHR5cGVvZiBhICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBiICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2VcclxuICBjb25zdCBsZWZ0ID0gcmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoYSlcclxuICAgIC5yZXBsYWNlKC9cXHMqXFwqXFxzKi9nLCBcIlwiKVxyXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpXHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gIGNvbnN0IHJpZ2h0ID0gcmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoYilcclxuICAgIC5yZXBsYWNlKC9cXHMqXFwqXFxzKi9nLCBcIlwiKVxyXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpXHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gIHJldHVybiAhIWxlZnQgJiYgISFyaWdodCAmJiBsZWZ0ID09PSByaWdodFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlQXJyYXk8VD4odmFsdWU6IFQgfCBUW10pOiBUW10ge1xyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXVxyXG59XHJcblxyXG4vKiogUGFyc2UgYFlZWVktTU0tRERgIChvciAvIC4pIGludG8geWVhciAvIHNob3J0IG1vbnRoIC8gZGF5LiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlUGFydHMocmF3OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKToge1xyXG4gIHllYXI6IHN0cmluZ1xyXG4gIG1vbnRoOiBzdHJpbmdcclxuICBkYXk6IHN0cmluZ1xyXG59IHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFyYXcgfHwgdHlwZW9mIHJhdyAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICByZXR1cm4geyB5ZWFyOiBcIlwiLCBtb250aDogXCJcIiwgZGF5OiBcIlwiIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSByYXcucmVwbGFjZSgvWy8uXS9nLCBcIi1cIikudHJpbSgpXHJcbiAgICBjb25zdCBwYXJ0cyA9IG5vcm1hbGl6ZWQuc3BsaXQoXCItXCIpXHJcbiAgICBpZiAocGFydHMubGVuZ3RoIDwgMikgcmV0dXJuIHsgeWVhcjogXCJcIiwgbW9udGg6IFwiXCIsIGRheTogXCJcIiB9XHJcbiAgICBjb25zdCBbeWVhciwgbW9udGhOdW0sIGRheV0gPSBwYXJ0c1xyXG4gICAgY29uc3QgTU9OVEhTID0gW1xyXG4gICAgICBcIkphblwiLFxyXG4gICAgICBcIkZlYlwiLFxyXG4gICAgICBcIk1hclwiLFxyXG4gICAgICBcIkFwclwiLFxyXG4gICAgICBcIk1heVwiLFxyXG4gICAgICBcIkp1blwiLFxyXG4gICAgICBcIkp1bFwiLFxyXG4gICAgICBcIkF1Z1wiLFxyXG4gICAgICBcIlNlcFwiLFxyXG4gICAgICBcIk9jdFwiLFxyXG4gICAgICBcIk5vdlwiLFxyXG4gICAgICBcIkRlY1wiXHJcbiAgICBdXHJcbiAgICBjb25zdCBtb250aEluZGV4ID0gTnVtYmVyKG1vbnRoTnVtKSAtIDFcclxuICAgIGNvbnN0IG1vbnRoID1cclxuICAgICAgbW9udGhJbmRleCA+PSAwICYmIG1vbnRoSW5kZXggPCAxMiA/IE1PTlRIU1ttb250aEluZGV4XSA6IFwiXCJcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHllYXI6IHllYXIgfHwgXCJcIixcclxuICAgICAgbW9udGgsXHJcbiAgICAgIGRheTogZGF5ID8gZGF5LnJlcGxhY2UoL14wLywgXCJcIikgOiBcIlwiXHJcbiAgICB9XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4geyB5ZWFyOiBcIlwiLCBtb250aDogXCJcIiwgZGF5OiBcIlwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBc2sgYmFja2dyb3VuZCBnZXRHcHRSZXN1bHRzIGZvciBhbnN3ZXJzIG1hcHBlZCB0byBkaXNjb3ZlcmVkIGxhYmVscy5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEZvcm1BbnN3ZXJzKFxyXG4gIGZpZWxkczogRGlzY292ZXJlZEZpZWxkW11cclxuKTogUHJvbWlzZTxGaWxsQW5zd2VyW10+IHtcclxuICBjb25zdCBlbGVtZW50cyA9IGZpZWxkcy5tYXAoKGYpID0+ICh7XHJcbiAgICBsYWJlbDogZi5sYWJlbCxcclxuICAgIHR5cGU6IGYudHlwZSxcclxuICAgIG9wdGlvbnM6IGYub3B0aW9ucyB8fCBbXVxyXG4gIH0pKVxyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBzZW5kVG9CYWNrZ3JvdW5kKHtcclxuICAgIG5hbWU6IFwiZ2V0R3B0UmVzdWx0c1wiLFxyXG4gICAgYm9keToge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBlbGVtZW50cyxcclxuICAgICAgICBwYXJzZXI6IFwiaW50ZXJuYWxcIixcclxuICAgICAgICBzb3VyY2U6IFwiY2xlYW5Uc1wiLFxyXG4gICAgICAgIHVybDogdHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiID8gbG9jYXRpb24uaHJlZiA6IFwiXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGxpc3QgPSByZXM/LmRhdGE/LmZpbGxfZGF0YV9saXN0XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSByZXR1cm4gW11cclxuICByZXR1cm4gbGlzdFxyXG4gICAgLm1hcCgocm93OiB7IG5hbWU/OiBzdHJpbmc7IHZhbHVlPzogdW5rbm93biB9KSA9PiAoe1xyXG4gICAgICBuYW1lOiBTdHJpbmcocm93Py5uYW1lIHx8IFwiXCIpLFxyXG4gICAgICB2YWx1ZTogQXJyYXkuaXNBcnJheShyb3c/LnZhbHVlKVxyXG4gICAgICAgID8gU3RyaW5nKHJvdy52YWx1ZVswXSA/PyBcIlwiKVxyXG4gICAgICAgIDogU3RyaW5nKHJvdz8udmFsdWUgPz8gXCJcIilcclxuICAgIH0pKVxyXG4gICAgLmZpbHRlcigocjogRmlsbEFuc3dlcikgPT4gci5uYW1lICYmIHIudmFsdWUpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFJlc3VtZUZpbGUoKTogUHJvbWlzZTx7XHJcbiAgZmlsZTogRmlsZVxyXG4gIGZpbGVOYW1lOiBzdHJpbmdcclxufSB8IG51bGw+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBzZW5kVG9CYWNrZ3JvdW5kKHtcclxuICAgIG5hbWU6IFwiZ2V0UmVzdW1lQmxvYlwiLFxyXG4gICAgYm9keToge31cclxuICB9KVxyXG4gIGlmICghcmVzPy5vayB8fCAhcmVzLmJhc2U2NFVSTCkgcmV0dXJuIG51bGxcclxuICBjb25zdCBmaWxlID0gYXdhaXQgZGF0YVVybFRvRmlsZShcclxuICAgIHJlcy5iYXNlNjRVUkwsXHJcbiAgICByZXMuZmlsZU5hbWUgfHwgYHJlc3VtZS4ke3Jlcy5leHRlbnNpb24gfHwgXCJwZGZcIn1gLFxyXG4gICAgcmVzLm1pbWVUeXBlXHJcbiAgKVxyXG4gIHJldHVybiB7IGZpbGUsIGZpbGVOYW1lOiBmaWxlLm5hbWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb3ZlckxldHRlckZpbGUoKTogUHJvbWlzZTx7XHJcbiAgZmlsZTogRmlsZVxyXG4gIGZpbGVOYW1lOiBzdHJpbmdcclxufSB8IG51bGw+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBzZW5kVG9CYWNrZ3JvdW5kKHtcclxuICAgIG5hbWU6IFwiZ2V0Q292ZXJMZXR0ZXJCbG9iXCIsXHJcbiAgICBib2R5OiB7fVxyXG4gIH0pXHJcbiAgaWYgKCFyZXM/Lm9rIHx8ICFyZXMuYmFzZTY0VVJMKSByZXR1cm4gbnVsbFxyXG4gIGNvbnN0IGZpbGUgPSBhd2FpdCBkYXRhVXJsVG9GaWxlKFxyXG4gICAgcmVzLmJhc2U2NFVSTCxcclxuICAgIHJlcy5maWxlTmFtZSB8fCBgY292ZXItbGV0dGVyLiR7cmVzLmV4dGVuc2lvbiB8fCBcInBkZlwifWAsXHJcbiAgICByZXMubWltZVR5cGVcclxuICApXHJcbiAgcmV0dXJuIHsgZmlsZSwgZmlsZU5hbWU6IGZpbGUubmFtZSB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRhdGFVcmxUb0ZpbGUoXHJcbiAgZGF0YVVybDogc3RyaW5nLFxyXG4gIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgbWltZUhpbnQ/OiBzdHJpbmdcclxuKTogUHJvbWlzZTxGaWxlPiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZGF0YVVybClcclxuICBjb25zdCBibG9iID0gYXdhaXQgcmVzLmJsb2IoKVxyXG4gIHJldHVybiBuZXcgRmlsZShbYmxvYl0sIGZpbGVOYW1lLCB7XHJcbiAgICB0eXBlOiBtaW1lSGludCB8fCBibG9iLnR5cGUgfHwgXCJhcHBsaWNhdGlvbi9wZGZcIlxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbnN3ZXJNYXAoYW5zd2VyczogRmlsbEFuc3dlcltdKTogTWFwPHN0cmluZywgc3RyaW5nPiB7XHJcbiAgY29uc3QgbSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcclxuICBmb3IgKGNvbnN0IGEgb2YgYW5zd2Vycykge1xyXG4gICAgbS5zZXQoYS5uYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBhLnZhbHVlKVxyXG4gICAgbS5zZXQoYS5uYW1lLnJlcGxhY2UoL1xccypcXCorXFxzKi9nLCBcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCksIGEudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBtXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBGaWVsZEFuc3dlcihcclxuICBtYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4sXHJcbiAgbGFiZWw6IHN0cmluZ1xyXG4pOiBzdHJpbmcgfCBudWxsIHtcclxuICBjb25zdCBrZXkgPSBsYWJlbC5yZXBsYWNlKC9cXHMqXFwqK1xccyovZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXHJcbiAgcmV0dXJuIG1hcC5nZXQoa2V5KSB8fCBtYXAuZ2V0KGxhYmVsLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSB8fCBudWxsXHJcbn1cclxuIiwiLyoqXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA5Mkd5QlxuICogUmVzb2x2ZWQgcGF0aDogQHBsYXNtb2hxL21lc3NhZ2luZy5qc1xuICogRGVwZW5kZW5jaWVzOlxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xuICogICBuYW5vaWQgLT4gZzJRcFIgID0+ICBuYW5vaWQuanNcbiAqXG4gKiBucG0tYmFja2VkIChAcGxhc21vaHEvbWVzc2FnaW5nKS4gR2VuZXJhdGVkIGJ5IHNjcmlwdHMvcmVwbGFjZS1yZW1haW5pbmctdmVuZG9ycy13aXRoLW5wbS5tanMg4oCUIGRvIG5vdCBoYW5kLWVkaXQuXG4gKi9cblxudmFyIGhlbHBlcnMgPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKVxuaGVscGVycy5kZWZpbmVJbnRlcm9wRmxhZyhyKVxuXG52YXIgX19qclJlcSA9IGVcblxudmFyIF9fbW9kID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIF9fY2pzTW9kdWxlID0geyBleHBvcnRzOiB7fSB9XG4gIHZhciBtb2R1bGUgPSBfX2Nqc01vZHVsZVxuICB2YXIgZXhwb3J0cyA9IF9fY2pzTW9kdWxlLmV4cG9ydHNcbjt2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzY3JpcHRzL19yZW1haW5pbmctdmVuZG9yLXRtcC9lbnRyeS05Mkd5Qi5tanNcbnZhciBlbnRyeV85Mkd5Ql9leHBvcnRzID0ge307XG5fX2V4cG9ydChlbnRyeV85Mkd5Ql9leHBvcnRzLCB7XG4gIGRlZmF1bHQ6ICgpID0+IGVudHJ5XzkyR3lCX2RlZmF1bHQsXG4gIHJlbGF5OiAoKSA9PiBFLFxuICByZWxheU1lc3NhZ2U6ICgpID0+IE0sXG4gIHNlbmRUb0FjdGl2ZUNvbnRlbnRTY3JpcHQ6ICgpID0+IGgsXG4gIHNlbmRUb0JhY2tncm91bmQ6ICgpID0+IHAsXG4gIHNlbmRUb0JhY2tncm91bmRWaWFSZWxheTogKCkgPT4gdSxcbiAgc2VuZFRvQ29udGVudFNjcmlwdDogKCkgPT4geCxcbiAgc2VuZFZpYVJlbGF5OiAoKSA9PiBTXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKGVudHJ5XzkyR3lCX2V4cG9ydHMpO1xuXG4vLyBub2RlX21vZHVsZXMvQHBsYXNtb2hxL21lc3NhZ2luZy9kaXN0L2luZGV4LmpzXG52YXIgZGlzdF9leHBvcnRzID0ge307XG5fX2V4cG9ydChkaXN0X2V4cG9ydHMsIHtcbiAgcmVsYXk6ICgpID0+IEUsXG4gIHJlbGF5TWVzc2FnZTogKCkgPT4gTSxcbiAgc2VuZFRvQWN0aXZlQ29udGVudFNjcmlwdDogKCkgPT4gaCxcbiAgc2VuZFRvQmFja2dyb3VuZDogKCkgPT4gcCxcbiAgc2VuZFRvQmFja2dyb3VuZFZpYVJlbGF5OiAoKSA9PiB1LFxuICBzZW5kVG9Db250ZW50U2NyaXB0OiAoKSA9PiB4LFxuICBzZW5kVmlhUmVsYXk6ICgpID0+IFNcbn0pO1xudmFyIGltcG9ydF9uYW5vaWQgPSBfX2pyUmVxKFwibmFub2lkXCIpO1xudmFyIGwgPSBnbG9iYWxUaGlzLmJyb3dzZXI/LnRhYnMgfHwgZ2xvYmFsVGhpcy5jaHJvbWU/LnRhYnM7XG52YXIgZCA9ICgpID0+IHtcbiAgbGV0IGUgPSBnbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWUgfHwgZ2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWU7XG4gIGlmICghZSkgdGhyb3cgbmV3IEVycm9yKFwiRXh0ZW5zaW9uIHJ1bnRpbWUgaXMgbm90IGF2YWlsYWJsZVwiKTtcbiAgcmV0dXJuIGU7XG59O1xudmFyIGkgPSAoKSA9PiB7XG4gIGlmICghbCkgdGhyb3cgbmV3IEVycm9yKFwiRXh0ZW5zaW9uIHRhYnMgQVBJIGlzIG5vdCBhdmFpbGFibGVcIik7XG4gIHJldHVybiBsO1xufTtcbnZhciBtID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgZSA9IGkoKSwgW2FdID0gYXdhaXQgZS5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgcmV0dXJuIGE7XG59O1xudmFyIGcgPSAoZSwgYSkgPT4gIWEuX19pbnRlcm5hbCAmJiBlLnNvdXJjZSA9PT0gZ2xvYmFsVGhpcy53aW5kb3cgJiYgZS5kYXRhLm5hbWUgPT09IGEubmFtZSAmJiAoYS5yZWxheUlkID09PSB2b2lkIDAgfHwgZS5kYXRhLnJlbGF5SWQgPT09IGEucmVsYXlJZCk7XG52YXIgYyA9IChlLCBhLCBuID0gZ2xvYmFsVGhpcy53aW5kb3cpID0+IHtcbiAgbGV0IHIgPSBhc3luYyAocykgPT4ge1xuICAgIGlmIChnKHMsIGUpICYmICFzLmRhdGEucmVsYXllZCkge1xuICAgICAgbGV0IG8gPSB7IG5hbWU6IGUubmFtZSwgcmVsYXlJZDogZS5yZWxheUlkLCBib2R5OiBzLmRhdGEuYm9keSB9LCB0ID0gYXdhaXQgYT8uKG8pO1xuICAgICAgbi5wb3N0TWVzc2FnZSh7IG5hbWU6IGUubmFtZSwgcmVsYXlJZDogZS5yZWxheUlkLCBpbnN0YW5jZUlkOiBzLmRhdGEuaW5zdGFuY2VJZCwgYm9keTogdCwgcmVsYXllZDogdHJ1ZSB9LCB7IHRhcmdldE9yaWdpbjogZS50YXJnZXRPcmlnaW4gfHwgXCIvXCIgfSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCByKSwgKCkgPT4gbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCByKTtcbn07XG52YXIgeSA9IChlLCBhID0gZ2xvYmFsVGhpcy53aW5kb3cpID0+IG5ldyBQcm9taXNlKChuLCByKSA9PiB7XG4gIGxldCBzID0gKDAsIGltcG9ydF9uYW5vaWQubmFub2lkKSgpLCBvID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsICh0KSA9PiB7XG4gICAgZyh0LCBlKSAmJiB0LmRhdGEucmVsYXllZCAmJiB0LmRhdGEuaW5zdGFuY2VJZCA9PT0gcyAmJiAobih0LmRhdGEuYm9keSksIG8uYWJvcnQoKSk7XG4gIH0sIHsgc2lnbmFsOiBvLnNpZ25hbCB9KSwgYS5wb3N0TWVzc2FnZSh7IC4uLmUsIGluc3RhbmNlSWQ6IHMgfSwgeyB0YXJnZXRPcmlnaW46IGUudGFyZ2V0T3JpZ2luIHx8IFwiL1wiIH0pO1xufSk7XG52YXIgcCA9IGFzeW5jIChlKSA9PiBkKCkuc2VuZE1lc3NhZ2UoZS5leHRlbnNpb25JZCA/PyBudWxsLCBlKTtcbnZhciB4ID0gYXN5bmMgKGUpID0+IHtcbiAgbGV0IGEgPSB0eXBlb2YgZS50YWJJZCA9PSBcIm51bWJlclwiID8gZS50YWJJZCA6IChhd2FpdCBtKCkpPy5pZDtcbiAgaWYgKCFhKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBhY3RpdmUgdGFiIGZvdW5kIHRvIHNlbmQgbWVzc2FnZSB0by5cIik7XG4gIHJldHVybiBpKCkuc2VuZE1lc3NhZ2UoYSwgZSk7XG59O1xudmFyIGggPSB4O1xudmFyIE0gPSAoZSkgPT4gYyhlLCBwKTtcbnZhciBFID0gTTtcbnZhciB1ID0geTtcbnZhciBTID0gdTtcblxuLy8gc2NyaXB0cy9fcmVtYWluaW5nLXZlbmRvci10bXAvZW50cnktOTJHeUIubWpzXG52YXIgZW50cnlfOTJHeUJfZGVmYXVsdCA9IHZvaWQgMCAhPT0gdm9pZCAwID8gdm9pZCAwIDogZGlzdF9leHBvcnRzO1xuXG4gIHZhciBvdXQgPSBtb2R1bGUuZXhwb3J0c1xuICBpZiAob3V0ICYmIHR5cGVvZiBvdXQgPT09IFwib2JqZWN0XCIgJiYgb3V0Ll9fZXNNb2R1bGUgJiYgXCJkZWZhdWx0XCIgaW4gb3V0KSB7XG4gICAgdmFyIG5hbWVzID0gT2JqZWN0LmtleXMob3V0KS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICAgIHJldHVybiBrICE9PSBcImRlZmF1bHRcIiAmJiBrICE9PSBcIl9fZXNNb2R1bGVcIlxuICAgIH0pXG4gICAgaWYgKG5hbWVzLmxlbmd0aCkgcmV0dXJuIG91dFxuICAgIHJldHVybiBvdXQuZGVmYXVsdFxuICB9XG4gIHJldHVybiBvdXRcbn0pKClcblxuaWYgKHR5cGVvZiBfX21vZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIGhlbHBlcnMuZXhwb3J0KHIsIFwiZGVmYXVsdFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX21vZCB9KVxuICByLmRlZmF1bHQgPSBfX21vZFxufSBlbHNlIGlmIChfX21vZCAmJiB0eXBlb2YgX19tb2QgPT09IFwib2JqZWN0XCIpIHtcbiAgZm9yICh2YXIgX19rIGluIF9fbW9kKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX21vZCwgX19rKSAmJiBfX2sgIT09IFwiX19lc01vZHVsZVwiKSB7XG4gICAgICA7KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaGVscGVycy5leHBvcnQociwga2V5LCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX21vZFtrZXldIH0pXG4gICAgICAgIHJba2V5XSA9IF9fbW9kW2tleV1cbiAgICAgIH0pKF9faylcbiAgICB9XG4gIH1cbiAgci5kZWZhdWx0ID0gX19tb2QuZGVmYXVsdCAhPT0gdW5kZWZpbmVkID8gX19tb2QuZGVmYXVsdCA6IF9fbW9kXG4gIGlmIChfX21vZC5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBoZWxwZXJzLmV4cG9ydChyLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19tb2QuZGVmYXVsdCB9KVxuICB9XG59IGVsc2Uge1xuICByLmRlZmF1bHQgPSBfX21vZFxuICBoZWxwZXJzLmV4cG9ydChyLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19tb2QgfSlcbn1cbiIsIi8qKlxyXG4gKiBTaGFyZWQgRE9NIGZpbGwgcHJpbWl0aXZlcyBmb3IgY2xlYW4tVFMgYXV0b2ZpbGwuXHJcbiAqXHJcbiAqIExpdmVzIGluIHRoZSBleHRlbnNpb24gKGBzcmMvY29udGVudHMvbWV0aG9kc2ApLlxyXG4gKiBQYXJjZWwgcmVmZXJlbmNlOiBlbmdpbmUvaGVscGVyLWFwcC9zcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICovXHJcblxyXG5pbXBvcnQgeyBmaWxsRGVmYXVsdElucHV0RmllbGQgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMvaW5wdXRcIlxyXG5pbXBvcnQgeyBmaWxsQ2hlY2tib3ggfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMvY2hlY2tib3hcIlxyXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci91dGlscy9kZWxheVwiXHJcbmltcG9ydCB7XHJcbiAgZmluZEV4YWN0Q2hvaWNlLFxyXG4gIGlzRXhhY3RDaG9pY2VNYXRjaCxcclxuICBub3JtYWxpemVDaG9pY2VUZXh0XHJcbn0gZnJvbSBcIn5jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaFwiXHJcbmltcG9ydCB7XHJcbiAgZ2V0UmFkaW9DaGVja1RleHQsXHJcbiAgbm9ybWFsaXplUmFkaW9DaGVja1RleHRcclxufSBmcm9tIFwifmNvbnRlbnRzL21ldGhvZHMvY2hlY2tib3gtbGFiZWxcIlxyXG5pbXBvcnQgeyBpc01hdGNoZWQgfSBmcm9tIFwifmNvbnRlbnRzL21ldGhvZHMvbmF0aXZlLWFuc3dlclwiXHJcbmltcG9ydCB7IE1FU1NBR0VfRVZFTlRTIH0gZnJvbSBcIn5jb3JlL2VudW1zXCJcclxuXHJcbi8qKiBGaWVsZCBzaGFwZSB1c2VkIGJ5IG9yYWNsZSBzaXRlIGZpbGxlcnMgKGBmaWVsZC4kY2hlY2tib3hzYCwgYGZpZWxkLmxhYmVsYCkuICovXHJcbmV4cG9ydCB0eXBlIENoZWNrYm94RmllbGQgPSB7XHJcbiAgJGNoZWNrYm94cz86IEl0ZXJhYmxlPEhUTUxJbnB1dEVsZW1lbnQ+IHwgSFRNTElucHV0RWxlbWVudFtdIHwgbnVsbFxyXG4gIGxhYmVsPzogc3RyaW5nXHJcbn1cclxuXHJcbi8qKiBBbGlhc2VzIHdoZW4gYW5zd2VycyBtYXAgdHJ1ZS9mYWxzZSAvIGpvYiBib2FyZHMgdG8gdmlzaWJsZSBsYWJlbHMuICovXHJcbmNvbnN0IEFOU1dFUl9BTElBUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICB0cnVlOiBcInllc1wiLFxyXG4gIGZhbHNlOiBcIm5vXCIsXHJcbiAgbGlua2VkaW46IFwibGlua2VkaW4uY29tXCIsXHJcbiAgaW5kZWVkOiBcImluZGVlZC5jb21cIlxyXG59XHJcblxyXG50eXBlIEZpbGxDaGVja2JveEZuID0gKFxyXG4gIGVsOiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIGNoZWNrZWQ/OiBib29sZWFuXHJcbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cclxuXHJcbi8qKiBEaXNwYXRjaCB0eXBlZCBET00gZXZlbnRzIChtb3VzZWRvd24vY2xpY2svZm9jdXMvaW5wdXQv4oCmKSBsaWtlIHRoZSBvcmFjbGUuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyRXZlbnRzKFxyXG4gIGVsOiBFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICBldmVudE5hbWVzOiBzdHJpbmdbXSA9IFtcImlucHV0XCIsIFwiY2hhbmdlXCIsIFwiYmx1clwiXVxyXG4pOiB2b2lkIHtcclxuICBpZiAoIWVsKSByZXR1cm5cclxuICBmb3IgKGNvbnN0IG5hbWUgb2YgZXZlbnROYW1lcykge1xyXG4gICAgbGV0IGV2OiBFdmVudFxyXG4gICAgaWYgKFxyXG4gICAgICAobmFtZSA9PT0gXCJtb3VzZWRvd25cIiB8fCBuYW1lID09PSBcIm1vdXNldXBcIiB8fCBuYW1lID09PSBcImNsaWNrXCIpICYmXHJcbiAgICAgIHR5cGVvZiBNb3VzZUV2ZW50ID09PSBcImZ1bmN0aW9uXCJcclxuICAgICkge1xyXG4gICAgICBldiA9IG5ldyBNb3VzZUV2ZW50KG5hbWUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KVxyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgKG5hbWUgPT09IFwiZm9jdXNcIiB8fCBuYW1lID09PSBcImJsdXJcIikgJiZcclxuICAgICAgdHlwZW9mIEZvY3VzRXZlbnQgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgKSB7XHJcbiAgICAgIGV2ID0gbmV3IEZvY3VzRXZlbnQobmFtZSwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pXHJcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiaW5wdXRcIiAmJiB0eXBlb2YgSW5wdXRFdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID1cclxuICAgICAgICBcInZhbHVlXCIgaW4gZWwgJiYgdHlwZW9mIChlbCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgPyAoZWwgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgICAgICAgIDogbnVsbFxyXG4gICAgICBldiA9IG5ldyBJbnB1dEV2ZW50KG5hbWUsIHtcclxuICAgICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdmFsdWUsXHJcbiAgICAgICAgaW5wdXRUeXBlOiBcImluc2VydFRleHRcIlxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXYgPSBuZXcgRXZlbnQobmFtZSwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pXHJcbiAgICB9XHJcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGxJbnB1dFRleHRGaWVsZChcclxuICBpbnB1dDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG4gIHZhbHVlOiBzdHJpbmdcclxuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgYXdhaXQgZmlsbERlZmF1bHRJbnB1dEZpZWxkKGlucHV0LCB2YWx1ZSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2hvaWNlTGFiZWxUZXh0KGlucHV0RWw6IEhUTUxJbnB1dEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGZyb21Db250cm9sID0gbm9ybWFsaXplUmFkaW9DaGVja1RleHQoZ2V0UmFkaW9DaGVja1RleHQoaW5wdXRFbCkpXHJcbiAgaWYgKGZyb21Db250cm9sKSByZXR1cm4gZnJvbUNvbnRyb2xcclxuICByZXR1cm4gXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBsYWJlbE1hdGNoZXNBbnN3ZXIobGFiZWxUZXh0OiBzdHJpbmcsIGFuc3dlcjogdW5rbm93bik6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPVxyXG4gICAgdHlwZW9mIGFuc3dlciA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgYW5zd2VyID09PSBcIm51bWJlclwiXHJcbiAgICAgID8gU3RyaW5nKGFuc3dlcikudG9Mb3dlckNhc2UoKS50cmltKClcclxuICAgICAgOiBcIlwiXHJcbiAgcmV0dXJuICEhbm9ybWFsaXplZCAmJiBpc0V4YWN0Q2hvaWNlTWF0Y2gobGFiZWxUZXh0LCBub3JtYWxpemVkKVxyXG59XHJcblxyXG4vKipcclxuICogRGVjaWRlIHdoZXRoZXIgYSBzaW5nbGUgY2hlY2tib3ggc2hvdWxkIGJlIGNoZWNrZWQgZ2l2ZW4gYW5zd2VyIGxpc3QgKyBmaWVsZCBsYWJlbC5cclxuICogSGFuZGxlcyB5ZXMvbm8sIFwiaGF2ZSByZWFkXCIsIGFuZCBcImN1cnJlbnRcIiBlbXBsb3ltZW50IGhldXJpc3RpY3MuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBtYXliZUNoZWNrU2luZ2xlQm94KFxyXG4gIGlucHV0RWw6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgYW5zd2VyczogdW5rbm93bltdLFxyXG4gIGZpZWxkTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICBmaWxsRm46IEZpbGxDaGVja2JveEZuID0gZmlsbENoZWNrYm94XHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGNob2ljZUxhYmVsVGV4dChpbnB1dEVsKVxyXG4gIGlmICghbGFiZWxUZXh0KSByZXR1cm5cclxuXHJcbiAgaWYgKGFuc3dlcnMuc29tZSgoYSkgPT4gbGFiZWxNYXRjaGVzQW5zd2VyKGxhYmVsVGV4dCwgYSkpKSB7XHJcbiAgICBhd2FpdCBmaWxsRm4oaW5wdXRFbCwgdHJ1ZSlcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlyc3QgPSBTdHJpbmcoYW5zd2Vyc1swXSA/PyBcIlwiKS50b0xvd2VyQ2FzZSgpXHJcbiAgY29uc3QgbGFiZWwgPSBTdHJpbmcoZmllbGRMYWJlbCA/PyBcIlwiKS50b0xvd2VyQ2FzZSgpXHJcbiAgY29uc3Qgc2hvdWxkQ2hlY2sgPVxyXG4gICAgKGZpcnN0ID09PSBcInRydWVcIiAmJiBsYWJlbFRleHQgPT09IFwieWVzXCIpIHx8XHJcbiAgICAoZmlyc3QgPT09IFwiZmFsc2VcIiAmJiBsYWJlbFRleHQgPT09IFwibm9cIikgfHxcclxuICAgIChsYWJlbFRleHQuaW5jbHVkZXMoXCJoYXZlIHJlYWRcIikgJiYgZmlyc3QgPT09IFwidHJ1ZVwiKSB8fFxyXG4gICAgKGlzTWF0Y2hlZChsYWJlbFRleHQsIGZpZWxkTGFiZWwgPz8gXCJcIikgJiYgZmlyc3QgPT09IFwidHJ1ZVwiKSB8fFxyXG4gICAgKGZpcnN0ID09PSBcInRydWVcIiAmJlxyXG4gICAgICAobGFiZWxUZXh0LmluY2x1ZGVzKFwiY3VycmVudFwiKSB8fCBsYWJlbC5pbmNsdWRlcyhcImN1cnJlbnRcIikpKSB8fFxyXG4gICAgKGxhYmVsLmluY2x1ZGVzKFwiY3VycmVudFwiKSAmJiBmaXJzdCA9PT0gXCJ0cnVlXCIpXHJcblxyXG4gIGlmIChzaG91bGRDaGVjaykgYXdhaXQgZmlsbEZuKGlucHV0RWwsIHRydWUpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPcmFjbGUtc2hhcGVkIGNoZWNrYm94L3JhZGlvIGdyb3VwIGZpbGwgKGBmaWVsZC4kY2hlY2tib3hzYCwgYGZpZWxkLmxhYmVsYCkuXHJcbiAqIFJldHVybnMgYGZhbHNlYCBvbiBhbWJpZ3VvdXMgbXVsdGktbWF0Y2g7IG90aGVyd2lzZSB2b2lkL3VuZGVmaW5lZCBsaWtlIHRoZSBvcmFjbGUuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlsbENoZWNrQm94ZXNGaWVsZChcclxuICBmaWVsZDogQ2hlY2tib3hGaWVsZCB8IEhUTUxJbnB1dEVsZW1lbnRbXSxcclxuICByYXdBbnN3ZXJzOiB1bmtub3duLFxyXG4gIGZpbGxGbjogRmlsbENoZWNrYm94Rm4gPSBmaWxsQ2hlY2tib3hcclxuKTogUHJvbWlzZTxmYWxzZSB8IHZvaWQgfCBudW1iZXI+IHtcclxuICAvLyBCYWNrLWNvbXBhdDogQmFzZUZpbGxlciBwYXNzZXMgKGJveGVzW10sIHN0cmluZ1tdKVxyXG4gIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSAmJiAhKGZpZWxkIGFzIENoZWNrYm94RmllbGQpLiRjaGVja2JveHMpIHtcclxuICAgIHJldHVybiBmaWxsQ2hlY2tib3hGaWVsZChmaWVsZCBhcyBIVE1MSW5wdXRFbGVtZW50W10sIHJhd0Fuc3dlcnMgYXMgc3RyaW5nW10pXHJcbiAgfVxyXG5cclxuICBjb25zdCBhbnN3ZXJzID0gKFxyXG4gICAgQXJyYXkuaXNBcnJheShyYXdBbnN3ZXJzKSA/IHJhd0Fuc3dlcnMgOiBbcmF3QW5zd2Vyc11cclxuICApLmZpbHRlcigoYSkgPT4gbm9ybWFsaXplQ2hvaWNlVGV4dChhKSlcclxuICBpZiAoIWFuc3dlcnMubGVuZ3RoKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgY29uc3QgYm94RmllbGQgPSBmaWVsZCBhcyBDaGVja2JveEZpZWxkXHJcbiAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShib3hGaWVsZC4kY2hlY2tib3hzID8/IFtdKVxyXG4gIGNvbnN0IGlzTXVsdGlPclJhZGlvID1cclxuICAgIGlucHV0cy5sZW5ndGggPiAxIHx8IGlucHV0cy5zb21lKChlbCkgPT4gZWwudHlwZSA9PT0gXCJyYWRpb1wiKVxyXG5cclxuICBpZiAoaXNNdWx0aU9yUmFkaW8pIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gbmV3IFNldDxIVE1MSW5wdXRFbGVtZW50PigpXHJcbiAgICBjb25zdCBhbGxSYWRpb3MgPSBpbnB1dHMuZXZlcnkoKGVsKSA9PiBlbC50eXBlID09PSBcInJhZGlvXCIpXHJcblxyXG4gICAgZm9yIChjb25zdCBhbnN3ZXIgb2YgYW5zd2Vycykge1xyXG4gICAgICBjb25zdCB3YW50ID0gbm9ybWFsaXplQ2hvaWNlVGV4dChhbnN3ZXIpXHJcbiAgICAgIGlmICghd2FudCkgY29udGludWVcclxuXHJcbiAgICAgIGNvbnN0IGV4YWN0SGl0cyA9IGlucHV0cy5maWx0ZXIoKGVsKSA9PlxyXG4gICAgICAgIGlzRXhhY3RDaG9pY2VNYXRjaChjaG9pY2VMYWJlbFRleHQoZWwpLCB3YW50KVxyXG4gICAgICApXHJcbiAgICAgIGlmIChleGFjdEhpdHMubGVuZ3RoID4gMSkgcmV0dXJuIGZhbHNlXHJcblxyXG4gICAgICBsZXQgbWF0Y2ggPSBmaW5kRXhhY3RDaG9pY2UoaW5wdXRzLCB3YW50LCBjaG9pY2VMYWJlbFRleHQpXHJcblxyXG4gICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgY29uc3QgYWxpYXMgPSBBTlNXRVJfQUxJQVNbd2FudF1cclxuICAgICAgICBpZiAoYWxpYXMpIHtcclxuICAgICAgICAgIGNvbnN0IGFsaWFzSGl0cyA9IGlucHV0cy5maWx0ZXIoKGVsKSA9PlxyXG4gICAgICAgICAgICBpc0V4YWN0Q2hvaWNlTWF0Y2goY2hvaWNlTGFiZWxUZXh0KGVsKSwgYWxpYXMpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICBpZiAoYWxpYXNIaXRzLmxlbmd0aCA+IDEpIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgbWF0Y2ggPSBmaW5kRXhhY3RDaG9pY2UoaW5wdXRzLCBhbGlhcywgY2hvaWNlTGFiZWxUZXh0KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgIGlmIChhbGxSYWRpb3MpIGNvbnRpbnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGVjdGVkLmFkZChtYXRjaClcclxuICAgICAgaWYgKGFsbFJhZGlvcykgYnJlYWtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXNlbGVjdGVkLnNpemUpIHJldHVybiBmYWxzZVxyXG4gICAgZm9yIChjb25zdCBlbCBvZiBzZWxlY3RlZCkgYXdhaXQgZmlsbEZuKGVsLCB0cnVlKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IGJveCBvZiBpbnB1dHMpIHtcclxuICAgIGF3YWl0IG1heWJlQ2hlY2tTaW5nbGVCb3goYm94LCBhbnN3ZXJzLCBib3hGaWVsZC5sYWJlbCwgZmlsbEZuKVxyXG4gIH1cclxufVxyXG5cclxuLyoqIFNpbXBsZSBsYWJlbC1saXN0IGZpbGwgdXNlZCBieSBCYXNlRmlsbGVyIC8gUGVyc29uaW8uICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxsQ2hlY2tib3hGaWVsZChcclxuICBib3hlczogSFRNTElucHV0RWxlbWVudFtdLFxyXG4gIHZhbHVlczogc3RyaW5nW11cclxuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICBsZXQgZmlsbGVkID0gMFxyXG4gIGZvciAoY29uc3Qgd2FudCBvZiB2YWx1ZXMpIHtcclxuICAgIGNvbnN0IG1hdGNoID0gZmluZEV4YWN0Q2hvaWNlKGJveGVzLCB3YW50LCBjaG9pY2VMYWJlbFRleHQpXHJcbiAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgYXdhaXQgZmlsbENoZWNrYm94KG1hdGNoLCB0cnVlKVxyXG4gICAgICBmaWxsZWQgKz0gMVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmlsbGVkXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb2N1cyBhIDxzZWxlY3Q+IGFuZCBwaWNrIHRoZSBmaXJzdCBvcHRpb24gbWF0Y2hpbmcgYW55IGFuc3dlciB2aWEgaXNNYXRjaGVkLlxyXG4gKiBBbHNvIGFjY2VwdHMgYSBzaW5nbGUgc3RyaW5nIChCYXNlRmlsbGVyIC8gUGVyc29uaW8pLlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGxTZWxlY3RGaWVsZChcclxuICBzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICBhbnN3ZXJzOiBzdHJpbmcgfCBzdHJpbmdbXVxyXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICBpZiAoIXNlbGVjdCkgcmV0dXJuIGZhbHNlXHJcbiAgY29uc3QgbGlzdCA9IChBcnJheS5pc0FycmF5KGFuc3dlcnMpID8gYW5zd2VycyA6IFthbnN3ZXJzXSkuZmlsdGVyKEJvb2xlYW4pXHJcbiAgaWYgKCFsaXN0Lmxlbmd0aCkgcmV0dXJuIGZhbHNlXHJcblxyXG4gIGNvbnN0IGZvY3VzRXYgPSBuZXcgRm9jdXNFdmVudChcImZvY3VzXCIsIHtcclxuICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgdmlldzogd2luZG93XHJcbiAgfSlcclxuICBzZWxlY3QuZGlzcGF0Y2hFdmVudChmb2N1c0V2KVxyXG4gIHNlbGVjdC5mb2N1cygpXHJcblxyXG4gIGlmIChzZWxlY3Qub3B0aW9ucz8ubGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG9wdCA9IHNlbGVjdC5vcHRpb25zW2ldXHJcbiAgICAgIGlmIChcclxuICAgICAgICBvcHQ/LnZhbHVlICYmXHJcbiAgICAgICAgb3B0LnRleHQgJiZcclxuICAgICAgICBsaXN0LnNvbWUoKGEpID0+IGlzTWF0Y2hlZChhLCBvcHQudGV4dCkgfHwgaXNFeGFjdENob2ljZU1hdGNoKG9wdC50ZXh0LCBhKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgb3B0LmNsaWNrKClcclxuICAgICAgICBvcHQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KVxyXG4gICAgICAgIClcclxuICAgICAgICBvcHQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgb3B0LnNlbGVjdGVkID0gdHJ1ZVxyXG4gICAgICAgIHNlbGVjdC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgbmV3IEV2ZW50KFwiY2hhbmdlXCIsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KVxyXG4gICAgICAgIClcclxuICAgICAgICBzZWxlY3QuYmx1cigpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZWxlY3QuYmx1cigpXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbi8qKiBFeGFjdCBvcHRpb24gYC50ZXh0YCBvciBgLnRpdGxlYCBtYXRjaCAobm8gZnV6enkpLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmlsbE9yaWdpblNlbGVjdEZpZWxkKFxyXG4gIHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG4gIHZhbHVlczogc3RyaW5nIHwgc3RyaW5nW11cclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFzZWxlY3Q/Lm9wdGlvbnMpIHJldHVybiBmYWxzZVxyXG4gIGNvbnN0IHdhbnRzID0gKEFycmF5LmlzQXJyYXkodmFsdWVzKSA/IHZhbHVlcyA6IFt2YWx1ZXNdKS5tYXAoU3RyaW5nKVxyXG4gIGZvciAoY29uc3Qgd2FudCBvZiB3YW50cykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBvcHQgPSBzZWxlY3Qub3B0aW9uc1tpXVxyXG4gICAgICBpZiAob3B0LnRleHQgPT09IHdhbnQgfHwgb3B0LnRpdGxlID09PSB3YW50KSB7XHJcbiAgICAgICAgb3B0LnNlbGVjdGVkID0gdHJ1ZVxyXG4gICAgICAgIHNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUgfSkpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGxSYWRpb0dyb3VwRmllbGQoXHJcbiAgcmFkaW9zOiBIVE1MSW5wdXRFbGVtZW50W10sXHJcbiAgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdXHJcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IHdhbnQgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlWzBdIDogdmFsdWVcclxuICBpZiAoIXdhbnQpIHJldHVybiBmYWxzZVxyXG4gIGNvbnN0IG1hdGNoID0gZmluZEV4YWN0Q2hvaWNlKHJhZGlvcywgd2FudCwgY2hvaWNlTGFiZWxUZXh0KVxyXG4gIGlmICghbWF0Y2gpIHJldHVybiBmYWxzZVxyXG4gIGlmICghbWF0Y2guY2hlY2tlZCkge1xyXG4gICAgbWF0Y2guY2xpY2soKVxyXG4gICAgbWF0Y2guY2hlY2tlZCA9IHRydWVcclxuICAgIG1hdGNoLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHsgYnViYmxlczogdHJ1ZSB9KSlcclxuICAgIG1hdGNoLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2xpY2tcIiwgeyBidWJibGVzOiB0cnVlIH0pKVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlsbFNpbmdsZUNoZWNrYm94KFxyXG4gIGVsOiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIGNoZWNrZWQgPSB0cnVlXHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gIGF3YWl0IGZpbGxDaGVja2JveChlbCwgY2hlY2tlZClcclxufVxyXG5cclxuLyoqXHJcbiAqIEF0dGFjaCBhIEZpbGUgLyBCbG9iIHRvIGEgZmlsZSBpbnB1dCAoY2xlYW4tVFMpLlxyXG4gKiBPcmFjbGUgYWxzbyBhY2NlcHRzIGEgcHJlcGFyZWQgYHsgZmlsZXM6IEZpbGVMaXN0IH1gICsgcHJvZ3Jlc3MgY2FsbGJhY2tzLlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEZpbGVzKFxyXG4gIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICBmaWxlOiBGaWxlIHwgQmxvYixcclxuICBmaWxlTmFtZTogc3RyaW5nXHJcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGlmICghaW5wdXQgfHwgaW5wdXQudHlwZSAhPT0gXCJmaWxlXCIpIHJldHVybiBmYWxzZVxyXG5cclxuICBjb25zdCBibG9iID1cclxuICAgIGZpbGUgaW5zdGFuY2VvZiBGaWxlXHJcbiAgICAgID8gZmlsZVxyXG4gICAgICA6IG5ldyBGaWxlKFtmaWxlXSwgZmlsZU5hbWUsIHtcclxuICAgICAgICAgIHR5cGU6IChmaWxlIGFzIEJsb2IpLnR5cGUgfHwgXCJhcHBsaWNhdGlvbi9wZGZcIlxyXG4gICAgICAgIH0pXHJcblxyXG4gIGNvbnN0IGR0ID0gbmV3IERhdGFUcmFuc2ZlcigpXHJcbiAgZHQuaXRlbXMuYWRkKGJsb2IpXHJcbiAgaW5wdXQuZmlsZXMgPSBkdC5maWxlc1xyXG4gIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIiwgeyBidWJibGVzOiB0cnVlIH0pKVxyXG4gIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHsgYnViYmxlczogdHJ1ZSB9KSlcclxuICBhd2FpdCBkZWxheSgxMDApXHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLyoqIFRlbGwgdGhlIHRvcCBmcmFtZSB0aGUgYWdlbnQgY292ZXJlZCBsZXR0ZXIgc3RhdHVzIGNoYW5nZWQuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0Q292ZXJMZXR0ZXJTdGF0dXMoc3RhdHVzOiB1bmtub3duKTogdm9pZCB7XHJcbiAgd2luZG93LnRvcD8ucG9zdE1lc3NhZ2UoXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IE1FU1NBR0VfRVZFTlRTLmFnZW50Q2hlY2tDb3ZlckxldHRlcixcclxuICAgICAgc3RhdHVzXHJcbiAgICB9LFxyXG4gICAgeyB0YXJnZXRPcmlnaW46IFwiKlwiIH1cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZmlsbERlZmF1bHRJbnB1dEZpZWxkLFxyXG4gIGZpbGxDaGVja2JveCxcclxuICBkZWxheVxyXG59XHJcbiIsIi8qKlxyXG4gKiBOYXRpdmUgaW5wdXQgZmlsbCB3aXRoIFJlYWN0LWNvbXBhdGlibGUgdmFsdWUgc2V0dGVyIChlbmdpbmUgaW5wdXQuanMgcG9ydCkuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGxEZWZhdWx0SW5wdXRGaWVsZChcclxuICBlbDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG4gIHZhbHVlOiBzdHJpbmdcclxuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgaWYgKCFlbCkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIltjbGVhbi1maWxsXSBlbGVtZW50IGlzIG51bGxcIilcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgZWwuZm9jdXMoKVxyXG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGVsKVxyXG4gIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBcInZhbHVlXCIpXHJcbiAgaWYgKGRlc2M/LnNldCkge1xyXG4gICAgZGVzYy5zZXQuY2FsbChlbCwgdmFsdWUpXHJcbiAgfSBlbHNlIHtcclxuICAgIGVsLnZhbHVlID0gdmFsdWVcclxuICB9XHJcblxyXG4gIGVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pKVxyXG4gIGVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSlcclxuICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImJsdXJcIikpXHJcbiAgZWwuZGlzcGF0Y2hFdmVudChcclxuICAgIG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGtleTogXCJFbnRlclwiLCBrZXlDb2RlOiAxMyB9KVxyXG4gIClcclxuICBlbC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgbmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGtleTogXCJFbnRlclwiLCBrZXlDb2RlOiAxMyB9KVxyXG4gIClcclxuICBlbC5ibHVyKClcclxuICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBGb2N1c0V2ZW50KFwiZm9jdXNcIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pKVxyXG4gIGVsLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSkpXHJcbiAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pKVxyXG4gIGVsLmRpc3BhdGNoRXZlbnQobmV3IEZvY3VzRXZlbnQoXCJibHVyXCIsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSlcclxufVxyXG4iLCJpbXBvcnQgeyBpc0V4YWN0Q2hvaWNlTWF0Y2ggfSBmcm9tIFwifmNvbnRlbnRzL21ldGhvZHMvY2hvaWNlLW1hdGNoXCJcclxuaW1wb3J0IHsgZGVsYXkgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMvZGVsYXlcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGxDaGVja2JveChcclxuICBlbDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgY2hlY2tlZCA9IHRydWVcclxuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgaWYgKCFlbCkgcmV0dXJuXHJcbiAgZWwuZm9jdXMoKVxyXG4gIGlmIChlbC5jaGVja2VkICE9PSBjaGVja2VkKSB7XHJcbiAgICBlbC5jbGljaygpXHJcbiAgICBhd2FpdCBkZWxheSgzMClcclxuICB9XHJcbiAgZWwuY2hlY2tlZCA9IGNoZWNrZWRcclxuICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUgfSkpXHJcbiAgY29uc3Qgcm9sZSA9IGVsLmNsb3Nlc3QoJ1tyb2xlPVwiY2hlY2tib3hcIl0nKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcclxuICBpZiAocm9sZSkgcm9sZS5jbGljaygpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxsQ2hlY2tib3hlc0J5TGFiZWxzKFxyXG4gIGNoZWNrYm94ZXM6IEhUTUxJbnB1dEVsZW1lbnRbXSxcclxuICB3YW50czogc3RyaW5nW11cclxuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICBsZXQgZmlsbGVkID0gMFxyXG4gIGZvciAoY29uc3Qgd2FudCBvZiB3YW50cykge1xyXG4gICAgZm9yIChjb25zdCBib3ggb2YgY2hlY2tib3hlcykge1xyXG4gICAgICBjb25zdCBsYWJlbCA9XHJcbiAgICAgICAgKGJveC5pZCAmJlxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtDU1MuZXNjYXBlKGJveC5pZCl9XCJdYClcclxuICAgICAgICAgICAgPy50ZXh0Q29udGVudCkgfHxcclxuICAgICAgICBib3guY2xvc2VzdChcImxhYmVsXCIpPy50ZXh0Q29udGVudCB8fFxyXG4gICAgICAgIGJveC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpIHx8XHJcbiAgICAgICAgYm94LnZhbHVlXHJcbiAgICAgIGlmIChpc0V4YWN0Q2hvaWNlTWF0Y2gobGFiZWwsIHdhbnQpKSB7XHJcbiAgICAgICAgYXdhaXQgZmlsbENoZWNrYm94KGJveCwgdHJ1ZSlcclxuICAgICAgICBmaWxsZWQgKz0gMVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZpbGxlZFxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlsbFJhZGlvQnlMYWJlbChcclxuICByYWRpb3M6IEhUTUxJbnB1dEVsZW1lbnRbXSxcclxuICB3YW50OiBzdHJpbmdcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgZm9yIChjb25zdCByYWRpbyBvZiByYWRpb3MpIHtcclxuICAgIGNvbnN0IGxhYmVsID1cclxuICAgICAgKHJhZGlvLmlkICYmXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtDU1MuZXNjYXBlKHJhZGlvLmlkKX1cIl1gKVxyXG4gICAgICAgICAgPy50ZXh0Q29udGVudCkgfHxcclxuICAgICAgcmFkaW8uY2xvc2VzdChcImxhYmVsXCIpPy50ZXh0Q29udGVudCB8fFxyXG4gICAgICByYWRpby5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpIHx8XHJcbiAgICAgIHJhZGlvLnZhbHVlXHJcbiAgICBpZiAoaXNFeGFjdENob2ljZU1hdGNoKGxhYmVsLCB3YW50KSkge1xyXG4gICAgICBpZiAoIXJhZGlvLmNoZWNrZWQpIHtcclxuICAgICAgICByYWRpby5jbGljaygpXHJcbiAgICAgICAgcmFkaW8uY2hlY2tlZCA9IHRydWVcclxuICAgICAgICByYWRpby5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUgfSkpXHJcbiAgICAgICAgcmFkaW8uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjbGlja1wiLCB7IGJ1YmJsZXM6IHRydWUgfSkpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuIiwiLyoqIEV4YWN0IC8gbm9ybWFsaXplZCBjaG9pY2UgbWF0Y2hpbmcgKHBvcnQgb2YgZW5naW5lIGNob2ljZS1tYXRjaCkuXHJcbiAqIE9yYWNsZTogZW5naW5lL2hlbHBlci1hcHAvc3JjL2NvbnRlbnRzL21ldGhvZHMvY2hvaWNlLW1hdGNoLmpzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNob2ljZVRleHQodmFsdWU6IHVua25vd24pOiBzdHJpbmcge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcIm51bWJlclwiKSByZXR1cm4gXCJcIlxyXG4gIHJldHVybiBTdHJpbmcodmFsdWUpXHJcbiAgICAubm9ybWFsaXplKFwiTkZLQ1wiKVxyXG4gICAgLnJlcGxhY2UoL1tcXHUyMDE4XFx1MjAxOV0vZywgXCInXCIpXHJcbiAgICAucmVwbGFjZSgvW1xcdTIwMWNcXHUyMDFkXS9nLCAnXCInKVxyXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpXHJcbiAgICAudHJpbSgpXHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFeGFjdENob2ljZU1hdGNoKG9wdGlvblRleHQ6IHVua25vd24sIHdhbnQ6IHVua25vd24pOiBib29sZWFuIHtcclxuICBjb25zdCB3ID0gbm9ybWFsaXplQ2hvaWNlVGV4dCh3YW50KVxyXG4gIHJldHVybiAhIXcgJiYgbm9ybWFsaXplQ2hvaWNlVGV4dChvcHRpb25UZXh0KSA9PT0gd1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEV4YWN0Q2hvaWNlPFQ+KFxyXG4gIGl0ZW1zOiBUW10sXHJcbiAgd2FudDogdW5rbm93bixcclxuICBnZXRMYWJlbDogKGl0ZW06IFQpID0+IHVua25vd24sXHJcbiAgZ2V0U2Vjb25kYXJ5PzogKGl0ZW06IFQpID0+IHVua25vd25cclxuKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgaWYgKCFub3JtYWxpemVDaG9pY2VUZXh0KHdhbnQpKSByZXR1cm4gdW5kZWZpbmVkXHJcbiAgY29uc3QgYnlMYWJlbCA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXNFeGFjdENob2ljZU1hdGNoKGdldExhYmVsKGl0ZW0pLCB3YW50KSlcclxuICBpZiAoYnlMYWJlbC5sZW5ndGggPT09IDEpIHJldHVybiBieUxhYmVsWzBdXHJcbiAgaWYgKGJ5TGFiZWwubGVuZ3RoID4gMSB8fCAhZ2V0U2Vjb25kYXJ5KSByZXR1cm4gdW5kZWZpbmVkXHJcbiAgY29uc3QgYnlTZWMgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+XHJcbiAgICBpc0V4YWN0Q2hvaWNlTWF0Y2goZ2V0U2Vjb25kYXJ5KGl0ZW0pLCB3YW50KVxyXG4gIClcclxuICByZXR1cm4gYnlTZWMubGVuZ3RoID09PSAxID8gYnlTZWNbMF0gOiB1bmRlZmluZWRcclxufVxyXG5cclxuLyoqIFNpbXBsZSBmdXp6eSBzY29yZSAw4oCTMSAodG9rZW4gb3ZlcmxhcCArIHN1YnN0cmluZykuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmdXp6eVNjb3JlKGE6IHN0cmluZywgYjogc3RyaW5nKTogbnVtYmVyIHtcclxuICBjb25zdCBuYSA9IG5vcm1hbGl6ZUNob2ljZVRleHQoYSlcclxuICBjb25zdCBuYiA9IG5vcm1hbGl6ZUNob2ljZVRleHQoYilcclxuICBpZiAoIW5hIHx8ICFuYikgcmV0dXJuIDBcclxuICBpZiAobmEgPT09IG5iKSByZXR1cm4gMVxyXG4gIGlmIChuYi5pbmNsdWRlcyhuYSkgfHwgbmEuaW5jbHVkZXMobmIpKSByZXR1cm4gMC44NVxyXG4gIGNvbnN0IGF0ID0gbmV3IFNldChuYS5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pKVxyXG4gIGNvbnN0IGJ0ID0gbmIuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKVxyXG4gIGlmICghYnQubGVuZ3RoKSByZXR1cm4gMFxyXG4gIGxldCBoaXQgPSAwXHJcbiAgZm9yIChjb25zdCB0IG9mIGJ0KSBpZiAoYXQuaGFzKHQpKSBoaXQgKz0gMVxyXG4gIHJldHVybiBoaXQgLyBNYXRoLm1heChhdC5zaXplLCBidC5sZW5ndGgpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmdXp6eUZpbmRCZXN0PFQ+KFxyXG4gIGl0ZW1zOiBUW10sXHJcbiAgd2FudDogc3RyaW5nLFxyXG4gIGdldExhYmVsOiAoaXRlbTogVCkgPT4gc3RyaW5nLFxyXG4gIG1pblNjb3JlID0gMC40NVxyXG4pOiBUIHwgdW5kZWZpbmVkIHtcclxuICBsZXQgYmVzdDogVCB8IHVuZGVmaW5lZFxyXG4gIGxldCBiZXN0U2NvcmUgPSAwXHJcbiAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICBjb25zdCBzID0gZnV6enlTY29yZSh3YW50LCBnZXRMYWJlbChpdGVtKSlcclxuICAgIGlmIChzID4gYmVzdFNjb3JlKSB7XHJcbiAgICAgIGJlc3RTY29yZSA9IHNcclxuICAgICAgYmVzdCA9IGl0ZW1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGJlc3RTY29yZSA+PSBtaW5TY29yZSA/IGJlc3QgOiB1bmRlZmluZWRcclxufVxyXG4iLCIvKipcclxuICogQ2hlY2tib3ggLyByYWRpbyBsYWJlbCBoZWxwZXJzIChjbGVhbi1UUykuXHJcbiAqIE9yYWNsZTogZW5naW5lL2hlbHBlci1hcHAvc3JjL2NvbnRlbnRzL21ldGhvZHMvY2hlY2tib3gtbGFiZWwuanNcclxuICovXHJcblxyXG5mdW5jdGlvbiB0ZXh0T2YoZWw6IEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcclxuICByZXR1cm4gKGVsPy50ZXh0Q29udGVudCB8fCBcIlwiKS50cmltKClcclxufVxyXG5cclxuZnVuY3Rpb24gbGFiZWxGb3JJbnB1dChpbnB1dDogSFRNTElucHV0RWxlbWVudCk6IEhUTUxMYWJlbEVsZW1lbnQgfCBudWxsIHtcclxuICBpZiAoIWlucHV0LmlkIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIG51bGxcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7Q1NTLmVzY2FwZShpbnB1dC5pZCl9XCJdYClcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG4vKiogVmlzaWJsZSBsYWJlbCB0ZXh0IGZvciBhIGNoZWNrYm94L3JhZGlvLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFkaW9DaGVja1RleHQoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gIGNvbnN0IHBhcmVudCA9IGlucHV0LnBhcmVudEVsZW1lbnRcclxuICBjb25zdCBncmFuZCA9IHBhcmVudD8ucGFyZW50RWxlbWVudFxyXG4gIGNvbnN0IGNhbmRpZGF0ZXM6IEFycmF5PEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkPiA9IFtcclxuICAgIHR5cGVvZiBpbnB1dC5jbG9zZXN0ID09PSBcImZ1bmN0aW9uXCIgPyBpbnB1dC5jbG9zZXN0KFwibGFiZWxcIikgOiBudWxsLFxyXG4gICAgbGFiZWxGb3JJbnB1dChpbnB1dCksXHJcbiAgICBwYXJlbnQsXHJcbiAgICBwYXJlbnQ/Lm5leHRFbGVtZW50U2libGluZyxcclxuICAgIHBhcmVudD8ucHJldmlvdXNFbGVtZW50U2libGluZyxcclxuICAgIGdyYW5kXHJcbiAgXVxyXG4gIGZvciAoY29uc3QgZWwgb2YgY2FuZGlkYXRlcykge1xyXG4gICAgY29uc3QgdCA9IHRleHRPZihlbClcclxuICAgIGlmICh0KSByZXR1cm4gdFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgaW5wdXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSB8fFxyXG4gICAgaW5wdXQudmFsdWUgfHxcclxuICAgIFwiXCJcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVSYWRpb0NoZWNrVGV4dCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkudHJpbSgpLnJlcGxhY2UoXCIqXCIsIFwiXCIpXHJcbn1cclxuIiwiLyoqIENvcmUgZW51bXMgcG9ydGVkIGZyb20gSm9icmlnaHQgaGVscGVyIGB+Y29yZS9lbnVtc2AuICovXG5cbmV4cG9ydCBlbnVtIFJFTkRFUl9TVEVQIHtcbiAgSU5JVElBTCA9IDAsXG4gIEZJTExJTkcgPSAxLFxuICBGSUxMRUQgPSAyLFxuICBGQUlMRUQgPSAzXG59XG5cbmV4cG9ydCBlbnVtIE1FU1NBR0VfRVZFTlRTIHtcbiAgYXV0b0ZpbGxSZXN1bHRGcm9tSWZyYW1lID0gXCJhdXRvRmlsbFJlc3VsdEZyb21JZnJhbWVcIixcbiAgYXV0b0ZpbGxDb21wbGV0ZUZyb21JZnJhbWUgPSBcImF1dG9GaWxsQ29tcGxldGVGcm9tSWZyYW1lXCIsXG4gIGF1dG9GaWxsUmVsb2FkSWZyYW1lID0gXCJhdXRvRmlsbFJlbG9hZElmcmFtZVwiLFxuICB1cGRhdGVSZXN1bHRGcm9tSWZyYW1lID0gXCJ1cGRhdGVSZXN1bHRGcm9tSWZyYW1lXCIsXG4gIHNlbmRIdHRwU3RhdHVzSWZyYW1lID0gXCJzZW5kSHR0cFN0YXR1c0lmcmFtZVwiLFxuICBjb21wbGF0ZUFnZW50ID0gXCJjb21wbGF0ZUFnZW50XCIsXG4gIGFnZW50U3RhcnRGaWxsaW5nRmllbGRzID0gXCJhZ2VudFN0YXJ0RmlsbGluZ0ZpZWxkc1wiLFxuICBhZ2VudEdldFJlc3VtZUluZm8gPSBcImFnZW50R2V0UmVzdW1lSW5mb1wiLFxuICBhZ2VudFN1Ym1pdENsaWNrZWQgPSBcImFnZW50U3VibWl0Q2xpY2tlZFwiLFxuICBhZ2VudENoZWNrQ292ZXJMZXR0ZXIgPSBcImFnZW50Q2hlY2tDb3ZlckxldHRlclwiXG59XG5cbmV4cG9ydCBlbnVtIEZJRUxEX1RZUEUge1xuICBURVhUID0gXCJ0ZXh0XCIsXG4gIE5VTUJFUiA9IFwibnVtYmVyXCIsXG4gIENPVkVSX0xFVFRFUiA9IFwiY292ZXItbGV0dGVyXCIsXG4gIENIRUNLQk9YID0gXCJjaGVja2JveFwiLFxuICBTRUxFQ1QgPSBcInNlbGVjdFwiLFxuICBSQURJTyA9IFwicmFkaW9cIixcbiAgU0VBUkNIID0gXCJzZWFyY2hcIixcbiAgU0VMRUNUX09SSUdJTkFMID0gXCJzZWxlY3Qtb3JpZ2luYWxcIixcbiAgTVVMVElfU0VMRUNUID0gXCJtdWx0aS1zZWxlY3RcIixcbiAgTElTVEJPWCA9IFwibGlzdGJveFwiLFxuICBFTVBMT1lNRU5UID0gXCJlbXBsb3ltZW50XCIsXG4gIEVEVUNBVElPTiA9IFwiZWR1Y2F0aW9uXCIsXG4gIERST1BET1dOID0gXCJkcm9wZG93blwiLFxuICBEQVRFID0gXCJkYXRlXCIsXG4gIFJBRElPR1JPVVAgPSBcInJhZGlvLWdyb3VwXCIsXG4gIEJBTUJPT0hSX1NQRUNJQUwgPSBcImJhbWJvb2hyLXNwZWNpYWxcIixcbiAgU0VDVElPTiA9IFwic2VjdGlvblwiLFxuICBBU0hCWV9TRUFSQ0ggPSBcImFzaGJ5LXNlYXJjaFwiXG59XG5cbmV4cG9ydCBlbnVtIEFQUExJQ0FUSU9OX1NUQVRVUyB7XG4gIFJVTk5JTkcgPSAwLFxuICBTVUNDRVNTID0gMSxcbiAgRkFJTEVEID0gMlxufVxuXG5leHBvcnQgY29uc3QgTUlNRV9UWVBFID0ge1xuICBwZGY6IFwiYXBwbGljYXRpb24vcGRmXCIsXG4gIGRvYzogXCJhcHBsaWNhdGlvbi9tc3dvcmRcIixcbiAgZG9jeDogXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudFwiXG59IGFzIGNvbnN0XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWZpbGxlci4yN2FhYjI1MC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);