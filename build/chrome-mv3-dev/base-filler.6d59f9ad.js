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
})({"9eTSh":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\base-filler.js",
    "bundleId": "b3b025946d59f9ad",
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
var j = z(require("dd3bcd95e3593f30"));
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

},{"dd3bcd95e3593f30":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"1foRu":[function(require,module,exports) {
/**
 * Parcel module id: 8xj6F
 * Resolved path: src/contents/sites/base-filler.js
 * Dependencies:
 *   ./autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ./falcon-answer-tracking -> 2vI9E  =>  src/contents/sites/falcon-answer-tracking.js
 *   ./falcon-response-accumulator -> 9lWmK  =>  src/contents/sites/falcon-response-accumulator.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  src/contents/methods/cover-letter.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/runtime-error -> cYBXq  =>  src/contents/methods/runtime-error.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 *   ~utils/starRating -> imWVP  =>  src/utils/starRating.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getComboQuestionRuleKey", ()=>E), n.export(r, "getNewComboQuestionRules", ()=>x), n.export(r, "waitForComboQuestionsToSettle", ()=>C), n.export(r, "getAnswerRegular", ()=>k), n.export(r, "mergeComboQuestionAnswer", ()=>I), n.export(r, "BaseFiller", ()=>j);
var o = e("~contents/shared/filler"), i = e("~contents/methods/answer"), a = e("~contents/methods/cancellation"), l = e("~contents/methods/cover-letter"), s = e("~contents/methods/dom"), u = e("~contents/methods/runtime-error"), c = e("~contents/methods/track"), d = e("~core/enums"), f = e("~core/xpath"), p = e("~enums/http"), m = e("~store/url"), h = e("~utils/fieldLabel"), g = e("~utils/starRating"), b = e("~utils/string"), y = e("./autofill-answer-pair-tracking"), v = e("./falcon-answer-tracking"), w = e("./falcon-response-accumulator");
function S(e1) {
    if (!e1 || "object" != typeof e1) return "";
    let t = e1, r1 = [
        "data-test-id",
        "name",
        "id",
        "aria-labelledby"
    ];
    for (let e1 of r1){
        let r1 = t.getAttribute?.(e1);
        if ("string" == typeof r1 && r1.trim()) return `${e1}:${r1.trim()}`;
    }
    return "string" == typeof t.id && t.id.trim() ? `id:${t.id.trim()}` : "";
}
_c = S;
function E(e1) {
    let t = (0, h.normalizeFieldLabel)(e1?.label);
    if (!t) return "";
    let r1 = S(e1.$input), n = S(e1.$label);
    return [
        t,
        e1.type,
        r1 || n
    ].filter(Boolean).join("|");
}
_c1 = E;
function x(e1, t) {
    let r1 = new Set(e1.map(E)), n = [];
    for (let e1 of t){
        let t = E(e1);
        !t || r1.has(t) || (r1.add(t), n.push(e1));
    }
    return n;
}
async function C(e1, t = 0, r1 = e1) {
    let n = Math.max(0, e1), o = Math.max(0, t), i = Math.max(n, r1), l = "undefined" != typeof document ? document.documentElement : null;
    n > 0 && o > 0 && i > n && l && "undefined" != typeof MutationObserver ? await new Promise((e1)=>{
        let t = Date.now(), r1 = t, a = null, s = new MutationObserver(()=>{
            r1 = Date.now();
        }), u = ()=>{
            s.disconnect(), a && clearTimeout(a), e1();
        }, c = ()=>{
            let e1 = Date.now(), l = e1 - t;
            if (l >= i || l >= n && e1 - r1 >= o) {
                u();
                return;
            }
            let s = Math.max(0, n - l), d = Math.max(0, o - (e1 - r1)), f = Math.max(0, i - l);
            a = setTimeout(c, Math.max(1, Math.min(f, Math.max(s, d))));
        };
        s.observe(l, {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        }), a = setTimeout(c, n);
    }) : n > 0 && await new Promise((e1)=>setTimeout(e1, n)), (0, a.checkpoint)();
}
_c2 = C;
function A(e1) {
    return e1 ? new Set(e1.map((e1)=>(0, h.normalizeFieldLabel)(e1.label))) : null;
}
_c3 = A;
function k(e1, t) {
    let r1 = e1?.regular && "object" == typeof e1.regular && !Array.isArray(e1.regular) ? e1.regular : {}, n = A(t);
    return n ? Object.fromEntries(Object.entries(r1).filter(([e1])=>n.has((0, h.normalizeFieldLabel)(e1)))) : r1;
}
function T(e1, t) {
    let r1 = Array.isArray(e1?.fillDataList) ? e1.fillDataList : [], n = A(t);
    return n ? r1.filter((e1)=>n.has((0, h.normalizeFieldLabel)(e1?.name))) : r1;
}
_c4 = T;
function F(e1) {
    if (null == e1 || "object" != typeof e1) return e1;
    if ("function" == typeof structuredClone) try {
        return structuredClone(e1);
    } catch  {}
    return JSON.parse(JSON.stringify(e1));
}
_c5 = F;
function I(e1, t, r1) {
    if (!e1) return r1 ? (0, v.inheritFalconResponseAnswerMarker)({
        ...t,
        regular: k(t, r1),
        fillDataList: T(t, r1)
    }, t) : t;
    let n = T(e1), o = T(t, r1);
    return (0, v.inheritFalconResponseAnswerMarker)({
        ...e1,
        regular: {
            ...k(e1),
            ...k(t, r1)
        },
        ...n.length || o.length ? {
            fillDataList: [
                ...n,
                ...o
            ]
        } : {}
    }, e1, t);
}
_c6 = I;
class j {
    constructor(){
        this.coverLetterFillTask = null, this.hasComboQuestions = !1, this.comboQuestionSettleDelayMs = 300, this.comboQuestionQuietPeriodMs = 0, this.comboQuestionSettleMaxWaitMs = 300, this.comboQuestionMaxRounds = 1, this.timeTrace = {
            rulesParseStartTime: 0,
            requestStartTime: 0,
            fillStartTime: 0
        }, this.submitTrackingAbortController = null, this.falconResponseAccumulator = new w.FalconResponseAccumulator, this.progressTracker = new o.ProgressTracker, this.taskQueue = new o.TaskQueue, this.fillCancel = (0, a.createCancellation)(()=>this.taskQueue.clear(), this.progressTracker.setCurrentField), this.cancel = this.fillCancel.cancel, this.skip = this.fillCancel.skip, this.createOperationHandler = (0, i.createOperationHandlerFactory)(this.progressTracker.updateFilledProgress, this.progressTracker.updateMissedProgress), this.operationConfig = this.buildOperationConfig();
    }
    buildOperationConfig() {
        let e1 = this.getFieldHandlers(), t = {};
        for (let [r1, n] of Object.entries(e1))"function" == typeof n ? t[r1] = this.createOperationHandler(n, {
            expectArray: !0
        }) : n && "object" == typeof n && (t[r1] = this.createOperationHandler(n.handler, n.options || {
            expectArray: !0
        }));
        return t;
    }
    async checkCoverLetter() {
        (0, s.postCoverLetterStatus)("");
    }
    async fillForm(e1 = !1) {
        return this.fillCancel.wrap(()=>this.doFillForm(e1));
    }
    async doFillForm(e1 = !1) {
        await this.initializeFillForm();
        let t = this.getPreExtractionAbortReason();
        if (t) return t;
        let r1 = await this.extractFormRules();
        if (0 === r1.length) return this.hasUploadOnlyForm() ? (await this.handleResumeUpload(), await this.executeSiteSpecificSteps(r1), await this.finalizeFillForm()) : ((0, c.sendHttpStatusMessage)(p.CUSTOM_ERROR_CODES.NO_ELEMENTS), p.CUSTOM_ERROR_CODES.NO_ELEMENTS);
        let n = this.prepareCoverLetterRules(r1);
        this.progressTracker.setFieldsRequiredStatus(n);
        let o = await this.fetchFormAnswers(n, e1);
        if ("string" == typeof o) return o;
        await this.handleResumeUpload(), await this.fillRegularFields(n), await this.fillEducationAndEmployment(n), await this.fillCoverLetterFields();
        let i = await this.runComboQuestionAutofillIfNeeded(n, e1);
        return "string" == typeof i ? i : (n = i, await this.executeSiteSpecificSteps(n), await this.finalizeFillForm());
    }
    async initializeFillForm() {
        this.resetFalconResponseAccumulator(), this.timeTrace = {
            rulesParseStartTime: Date.now(),
            requestStartTime: 0,
            fillStartTime: 0
        }, this.progressTracker.clear(), this.taskQueue.clear(), await this.runPreFillForm();
    }
    async runPreFillForm() {}
    getPreExtractionAbortReason() {
        return null;
    }
    hasUploadOnlyForm() {
        return !1;
    }
    prepareCoverLetterRules(e1) {
        let t = (0, l.prepareCoverLetterFillTask)({
            rules: e1,
            coverLetter: this.coverLetter,
            jobId: this.currentJobId,
            resumeId: this.resumeInfo?.id,
            tailorId: this.resumeInfo?.tailorId
        });
        return this.coverLetterFillTask = t.task, t.rules;
    }
    getElementRulesRequestUrl() {}
    async requestFormAnswers(e1, t, r1 = {}) {
        try {
            this.token || (this.token = await (0, i.getSiteToken)()), !1 !== r1.updateTimeTrace && (this.timeTrace.requestStartTime = Date.now());
            let n = this.captureFalconResponseRun(), o = await (0, i.getElementRules)(e1, this.getSiteName(), this.token, t, this.resumeInfo.id, this.resumeInfo.tailorId, this.getElementRulesRequestUrl());
            return this.recordFalconResponse(o, n), !1 !== r1.updateTimeTrace && (this.timeTrace.fillStartTime = Date.now()), this.formatAnswer?.(o) ?? o;
        } catch (e1) {
            if (e1 instanceof i.HTTPError || e1 instanceof i.ResumeMissingCodeError) return (0, c.sendHttpStatusMessage)(e1.message), e1.message;
            if ((0, u.isExtensionContextInvalidatedError)(e1)) return (0, c.sendHttpStatusMessage)(p.CUSTOM_ERROR_CODES.EXTENSION_CONTEXT_INVALIDATED), p.CUSTOM_ERROR_CODES.EXTENSION_CONTEXT_INVALIDATED;
            console.error("Unknown error occurred:", e1);
        }
        (0, a.checkpoint)();
    }
    async fetchFormAnswers(e1, t) {
        let r1 = await this.requestFormAnswers(e1, t);
        if ("string" == typeof r1) return r1;
        r1 && (this.answer = r1);
    }
    captureFalconResponseRun() {
        return this.falconResponseAccumulator.captureEpoch();
    }
    recordFalconResponse(e1, t) {
        this.falconResponseAccumulator.record(e1, t);
    }
    resetFalconResponseAccumulator() {
        this.falconResponseAccumulator.reset();
    }
    getFalconResponseAnswerForTracking() {
        return this.falconResponseAccumulator.current();
    }
    async handleResumeUpload() {}
    async fillRegularFields(e1) {
        let t = [
            ...(0, i.getRegularOperations)((0, l.withoutCoverLetterRules)(e1), this.answer.regular, this.operationConfig)
        ];
        for (let e1 of t)this.taskQueue.add(e1);
        await this.taskQueue.run();
    }
    async fillEducationAndEmployment(e1) {}
    async fillCoverLetterFields() {
        this.coverLetterFillTask?.rules.length && await (0, l.fillPreparedCoverLetterTask)({
            task: this.coverLetterFillTask,
            coverLetter: this.coverLetter,
            answer: this.answer,
            updateMissedProgress: this.progressTracker.updateMissedProgress,
            operationConfig: this.operationConfig
        });
    }
    mergeComboQuestionAnswer(e1, t) {
        this.answer = I(this.answer, e1, t);
    }
    getNewComboQuestionRules(e1, t) {
        return x(e1, t);
    }
    async filterNewComboQuestionRules(e1) {
        return e1;
    }
    async extractComboQuestionRules() {
        return await this.extractFormRules();
    }
    async waitForComboQuestionsToSettle() {
        await C(this.comboQuestionSettleDelayMs, this.comboQuestionQuietPeriodMs, this.comboQuestionSettleMaxWaitMs);
    }
    async runComboQuestionAutofillIfNeeded(e1, t) {
        if (!this.hasComboQuestions) return e1;
        let r1 = [
            ...e1
        ];
        for(let e1 = 1; e1 <= this.comboQuestionMaxRounds; e1++){
            await this.waitForComboQuestionsToSettle();
            let n = await this.extractComboQuestionRules(), o = this.getNewComboQuestionRules(r1, n), i = await this.filterNewComboQuestionRules(o), a = this.prepareCoverLetterRules(i);
            if (0 === o.length) break;
            if (r1 = [
                ...r1,
                ...o
            ], 0 === a.length) {
                console.info("[BaseFiller][Combo] skipped committed dynamic rules", {
                    site: this.getSiteName(),
                    round: e1,
                    skippedRuleCount: o.length
                });
                break;
            }
            for (let t of (console.info("[BaseFiller][Combo] discovered dynamic rules", {
                site: this.getSiteName(),
                round: e1,
                newRuleCount: a.length
            }), a))this.progressTracker.updateFieldRequiredStatus(t);
            let l = await this.requestFormAnswers(a, t, {
                updateTimeTrace: !1
            });
            if ("string" == typeof l) return l;
            l && this.mergeComboQuestionAnswer(l, a), await this.fillRegularFields(a), await this.fillEducationAndEmployment(a), await this.fillCoverLetterFields(), e1 === this.comboQuestionMaxRounds && this.comboQuestionMaxRounds > 1 && console.warn("[BaseFiller][Combo] stopped at dynamic rule round limit", {
                site: this.getSiteName(),
                maxRounds: this.comboQuestionMaxRounds,
                totalRuleCount: r1.length
            });
        }
        return r1;
    }
    async executeSiteSpecificSteps(e1) {
        await this.bindSubmitButtonTracking(e1);
    }
    async bindSubmitButtonTracking(e1) {
        let t = F(await this.getAutofillSnapshot(e1)), r1 = F(this.getAdditionalAutofillSnapshotData?.(e1) || {}), n = this.getSubmitTrackingScopeKey();
        this.submitTrackingAbortController?.abort(), this.submitTrackingAbortController = new AbortController;
        let o = null, i = async (e1)=>{
            let o;
            let i = this.getSubmitTrackingScopeKey();
            if (n && i && n !== i) return;
            let a = !1;
            try {
                o = await this.getSubmitSnapshot();
            } catch (e1) {
                a = !0, o = F(t), console.warn(`[BaseFiller] Failed to capture ${this.getSiteName()} submit snapshot; using autofill baseline`, e1);
            }
            let l = this.getAdditionalSubmitSnapshotData?.() || {}, s = (0, y.buildFalconAutofillAnswerPairData)(this.getFalconResponseAnswerForTracking()), u = {
                ...s ? {
                    falcon: s
                } : {},
                ...this.getAutofillAnswerPairExtraTrackingData?.() || {},
                ...a ? {
                    submitTracking: {
                        snapshotFallback: "autofill",
                        reason: "submit_snapshot_error"
                    }
                } : {}
            }, c = F(t), d = F(r1), f = {
                formUrl: (0, m.useUrlStore).getState().currentTabUrl,
                autofillSnapshot: c,
                submitSnapshot: o,
                additionalAutofillData: d,
                additionalSubmitData: l,
                extraData: u,
                source: this.getSiteName()
            }, p = this.normalizeAutofillAnswerPairTrackingData?.(f) ?? f;
            (0, y.sendAutofillAnswerPairEvent)(p), t = F(p.submitSnapshot), r1 = F(p.additionalSubmitData || {}), n = i || n, (0, g.handleSubmitStarRating)(this.getSiteName(), p.autofillSnapshot, p.submitSnapshot, this.progressTracker.fieldStatus, this.getSubmitSuccessSelectors(), e1);
        }, a = ()=>(o?.abort(), (o = new AbortController).signal), l = (e1)=>{
            console.error(`[BaseFiller] Failed to track ${this.getSiteName()} submit click`, e1);
        }, s = this.getSubmitTrackingDelegationRoot?.(), u = this.resolveDelegatedSubmitButton?.bind(this);
        if (s && u) {
            s.addEventListener("click", async (e1)=>{
                let t = e1.target;
                if (!(t instanceof HTMLElement)) return;
                let r1 = u(t);
                if (r1) try {
                    await i(a());
                } catch (e1) {
                    l(e1);
                }
            }, {
                capture: !0,
                signal: this.submitTrackingAbortController.signal
            });
            return;
        }
        let c = this.getSubmitButtonSelector();
        if (!c) return;
        let d = (0, f.getFirstOrderedNodeSafe)(c);
        d && d.addEventListener("click", async ()=>{
            try {
                await i(a());
            } catch (e1) {
                l(e1);
            }
        }, {
            capture: !0,
            signal: this.submitTrackingAbortController.signal
        });
    }
    getSubmitButtonSelector() {
        return './/button[@type="submit" or contains(@class, "submit")]';
    }
    getSubmitTrackingScopeKey() {
        return null;
    }
    getSubmitSuccessSelectors() {
        return [];
    }
    async finalizeFillForm() {
        return (0, c.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), window.top?.postMessage(b.cleanObject({
            type: d.MESSAGE_EVENTS.autoFillResultFromIframe,
            data: this.progressTracker.fieldStatus
        }), {
            targetOrigin: "*"
        }), this.progressTracker.generateFinalProgress();
    }
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");

},{}]},["9eTSh","1foRu"], "1foRu", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFBQVcsVUFBUSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsRUFBRSxFQUFDLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsT0FBTyxXQUFTLGFBQVcsSUFBSSxVQUFRLE1BQUssSUFBRSxDQUFDO1FBQUUsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFHLEVBQUUsWUFBVSxNQUFLLE9BQU8sRUFBRTtZQUFRLElBQUksSUFBRSxFQUFFLFFBQU87WUFBRSxJQUFHO2dCQUFDLElBQUUsRUFBRTtZQUFnQixFQUFDLE9BQU0sR0FBRTtnQkFBQyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7WUFBQztZQUFDLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSTtnQkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQUMsSUFBRyxPQUFPLEtBQUcsWUFBVyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7Z0JBQUUsSUFBSSxJQUFFLEVBQUUsSUFBSTtnQkFBRyxJQUFHLE1BQUksS0FBSyxHQUFFO29CQUFDLElBQUksSUFBRSxFQUFFO29CQUFHLEVBQUUsY0FBYSxDQUFBLEVBQUUsYUFBVyxDQUFDLENBQUEsR0FBRyxLQUFHLFlBQVU7Z0JBQUM7WUFBQztZQUFDLE9BQU8sRUFBRSxVQUFRLEdBQUU7UUFBQztRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxFQUFFLElBQUksSUFBRyxJQUFFLEVBQUUsSUFBSTtZQUFHLE9BQU8sTUFBSSxLQUFLLEtBQUcsTUFBSSxLQUFLLElBQUUsQ0FBQyxJQUFFLENBQUUsQ0FBQSxNQUFJLEtBQUssS0FBRyxNQUFJLEtBQUssS0FBRyxFQUFFLE9BQUssRUFBRSxNQUFJLEVBQUUsVUFBUztRQUFFO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxPQUFPLEVBQUUsYUFBVyxFQUFFLFVBQVU7UUFBZ0I7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxPQUFPLEVBQUUsTUFBSSxFQUFFLEtBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUU7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsT0FBTyxFQUFFLElBQUk7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsSUFBSSxJQUFFLElBQUk7WUFBSSxPQUFPLEVBQUUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLEVBQUUsSUFBSSxHQUFFO1lBQUUsSUFBRztRQUFDO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFJLElBQUUsSUFBSTtZQUFJLE9BQU8sRUFBRSxRQUFRLFNBQVMsQ0FBQztnQkFBRSxFQUFFLElBQUk7WUFBRSxJQUFHO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxJQUFHO2dCQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFBQSxFQUFDLE9BQU0sR0FBRTtnQkFBQztZQUFNO1FBQUM7UUFBQyxTQUFTO1lBQUksSUFBRyxFQUFFLFdBQVMsS0FBRyxHQUFFLE9BQU87WUFBSyxJQUFFLENBQUM7WUFBRSxJQUFHO2dCQUFDLElBQUksSUFBRSxJQUFJLEtBQUksSUFBRSxJQUFJLEtBQUksSUFBRTtnQkFBRSxJQUFFLEVBQUUsRUFBQyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7b0JBQVEsRUFBRSxJQUFJLEdBQUUsSUFBRyxFQUFFLElBQUksR0FBRSxJQUFHLEVBQUUsVUFBUSxHQUFFLEVBQUUsR0FBRSxLQUFHLEVBQUUsSUFBSSxLQUFHLEVBQUUsSUFBSTtnQkFBRTtnQkFBRyxJQUFJLElBQUU7b0JBQUMsaUJBQWdCO29CQUFFLGVBQWM7Z0JBQUM7Z0JBQUUsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLGtCQUFrQjtnQkFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsTUFBSyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUU7Z0JBQUcsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsSUFBRyxFQUFFLElBQUksSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLElBQUc7d0JBQUMsSUFBSSxJQUFFLEVBQUUsSUFBSTt3QkFBRyxJQUFHOzRCQUFDLEVBQUUsYUFBYSxHQUFFO3dCQUFFLEVBQUMsT0FBTSxHQUFFOzRCQUFDLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUE7d0JBQUU7b0JBQUM7Z0JBQUMsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsRUFBRSxJQUFJO29CQUFHLElBQUc7d0JBQUMsRUFBRSxnQkFBZ0IsR0FBRTtvQkFBRSxFQUFDLE9BQU0sR0FBRTt3QkFBQyxLQUFJLENBQUEsSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFBO29CQUFFO2dCQUFDLElBQUcsR0FBRSxNQUFNO2dCQUFFLE9BQU87WUFBQyxTQUFRO2dCQUFDLElBQUUsQ0FBQztZQUFDO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRyxJQUFHLE1BQUksUUFBTSxPQUFPLEtBQUcsY0FBWSxPQUFPLEtBQUcsWUFBVSxFQUFFLElBQUksSUFBRztZQUFPLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxJQUFHLE1BQUksS0FBSyxJQUFHLENBQUEsSUFBRTtnQkFBQyxTQUFRO1lBQUMsR0FBRSxFQUFFLElBQUksR0FBRSxFQUFDLElBQUcsRUFBRSxLQUFLO2dCQUFDO2dCQUFFO2FBQUUsR0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUssWUFBWSxFQUFFLFlBQVk7WUFDOUIsTUFBTSxFQUFFLGVBQWU7WUFDdkIsTUFBTSxJQUFJLENBQUMsZ0JBQWdCO1FBQzdCLElBQUk7WUFDRixjQUFjO1FBQ2hCLElBQUksSUFBSSxDQUFDLGdCQUFnQjtJQUM3QjtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS03MDBhNzY4YzEwZThkYTBlLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGJhc2UtZmlsbGVyLmpzXCIsXCJidW5kbGVJZFwiOlwiYjNiMDI1OTQ2ZDU5ZjlhZFwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDh4ajZGXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlci5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYXV0b2ZpbGwtYW5zd2VyLXBhaXItdHJhY2tpbmcgLT4gYUNFbFogID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYXV0b2ZpbGwtYW5zd2VyLXBhaXItdHJhY2tpbmcuanNcclxuICogICAuL2ZhbGNvbi1hbnN3ZXItdHJhY2tpbmcgLT4gMnZJOUUgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZmFsY29uLWFuc3dlci10cmFja2luZy5qc1xyXG4gKiAgIC4vZmFsY29uLXJlc3BvbnNlLWFjY3VtdWxhdG9yIC0+IDlsV21LICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2ZhbGNvbi1yZXNwb25zZS1hY2N1bXVsYXRvci5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyIC0+IDdUNWVXICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uIC0+IGx1SmZzICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY292ZXItbGV0dGVyIC0+IDdWUjVpICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY292ZXItbGV0dGVyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvZG9tIC0+IGhBNVFhICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvcnVudGltZS1lcnJvciAtPiBjWUJYcSAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL3J1bnRpbWUtZXJyb3IuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy90cmFjayAtPiBoNDc5YiAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL3RyYWNrLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NoYXJlZC9maWxsZXIgLT4gMmFHc1ggID0+ICBzcmMvY29udGVudHMvc2hhcmVkL2ZpbGxlci5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS94cGF0aCAtPiBhZ0U0dSAgPT4gIHNyYy9jb3JlL3hwYXRoLmpzXHJcbiAqICAgfmVudW1zL2h0dHAgLT4gZUpGcWogID0+ICBzcmMvZW51bXMvaHR0cC5qc1xyXG4gKiAgIH5zdG9yZS91cmwgLT4gYjUzTDMgID0+ICBzcmMvc3RvcmUvdXJsLmpzXHJcbiAqICAgfnV0aWxzL2ZpZWxkTGFiZWwgLT4gMVJtR3cgID0+ICBzcmMvdXRpbHMvZmllbGRMYWJlbC5qc1xyXG4gKiAgIH51dGlscy9zdGFyUmF0aW5nIC0+IGltV1ZQICA9PiAgc3JjL3V0aWxzL3N0YXJSYXRpbmcuanNcclxuICogICB+dXRpbHMvc3RyaW5nIC0+IGlqRUZpICA9PiAgc3JjL3V0aWxzL3N0cmluZy5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiZ2V0Q29tYm9RdWVzdGlvblJ1bGVLZXlcIiwgKCkgPT4gRSksIG4uZXhwb3J0KHIsXHJcbiAgICBcImdldE5ld0NvbWJvUXVlc3Rpb25SdWxlc1wiLCAoKSA9PiB4KSwgbi5leHBvcnQociwgXCJ3YWl0Rm9yQ29tYm9RdWVzdGlvbnNUb1NldHRsZVwiLCAoKSA9PiBDKSwgblxyXG4gIC5leHBvcnQociwgXCJnZXRBbnN3ZXJSZWd1bGFyXCIsICgpID0+IGspLCBuLmV4cG9ydChyLCBcIm1lcmdlQ29tYm9RdWVzdGlvbkFuc3dlclwiLCAoKSA9PiBJKSwgblxyXG4gIC5leHBvcnQociwgXCJCYXNlRmlsbGVyXCIsICgpID0+IGopO1xyXG52YXIgbyA9IGUoXCJ+Y29udGVudHMvc2hhcmVkL2ZpbGxlclwiKSxcclxuICBpID0gZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxcclxuICBhID0gZShcIn5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvblwiKSxcclxuICBsID0gZShcIn5jb250ZW50cy9tZXRob2RzL2NvdmVyLWxldHRlclwiKSxcclxuICBzID0gZShcIn5jb250ZW50cy9tZXRob2RzL2RvbVwiKSxcclxuICB1ID0gZShcIn5jb250ZW50cy9tZXRob2RzL3J1bnRpbWUtZXJyb3JcIiksXHJcbiAgYyA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy90cmFja1wiKSxcclxuICBkID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIGYgPSBlKFwifmNvcmUveHBhdGhcIiksXHJcbiAgcCA9IGUoXCJ+ZW51bXMvaHR0cFwiKSxcclxuICBtID0gZShcIn5zdG9yZS91cmxcIiksXHJcbiAgaCA9IGUoXCJ+dXRpbHMvZmllbGRMYWJlbFwiKSxcclxuICBnID0gZShcIn51dGlscy9zdGFyUmF0aW5nXCIpLFxyXG4gIGIgPSBlKFwifnV0aWxzL3N0cmluZ1wiKSxcclxuICB5ID0gZShcIi4vYXV0b2ZpbGwtYW5zd2VyLXBhaXItdHJhY2tpbmdcIiksXHJcbiAgdiA9IGUoXCIuL2ZhbGNvbi1hbnN3ZXItdHJhY2tpbmdcIiksXHJcbiAgdyA9IGUoXCIuL2ZhbGNvbi1yZXNwb25zZS1hY2N1bXVsYXRvclwiKTtcclxuXHJcbmZ1bmN0aW9uIFMoZSkge1xyXG4gIGlmICghZSB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiBlKSByZXR1cm4gXCJcIjtcclxuICBsZXQgdCA9IGUsXHJcbiAgICByID0gW1wiZGF0YS10ZXN0LWlkXCIsIFwibmFtZVwiLCBcImlkXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdO1xyXG4gIGZvciAobGV0IGUgb2Ygcikge1xyXG4gICAgbGV0IHIgPSB0LmdldEF0dHJpYnV0ZT8uKGUpO1xyXG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIgJiYgci50cmltKCkpIHJldHVybiBgJHtlfToke3IudHJpbSgpfWBcclxuICB9XHJcbiAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIHQuaWQgJiYgdC5pZC50cmltKCkgPyBgaWQ6JHt0LmlkLnRyaW0oKX1gIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBFKGUpIHtcclxuICBsZXQgdCA9ICgwLCBoLm5vcm1hbGl6ZUZpZWxkTGFiZWwpKGU/LmxhYmVsKTtcclxuICBpZiAoIXQpIHJldHVybiBcIlwiO1xyXG4gIGxldCByID0gUyhlLiRpbnB1dCksXHJcbiAgICBuID0gUyhlLiRsYWJlbCk7XHJcbiAgcmV0dXJuIFt0LCBlLnR5cGUsIHIgfHwgbl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJ8XCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHgoZSwgdCkge1xyXG4gIGxldCByID0gbmV3IFNldChlLm1hcChFKSksXHJcbiAgICBuID0gW107XHJcbiAgZm9yIChsZXQgZSBvZiB0KSB7XHJcbiAgICBsZXQgdCA9IEUoZSk7XHJcbiAgICAhdCB8fCByLmhhcyh0KSB8fCAoci5hZGQodCksIG4ucHVzaChlKSlcclxuICB9XHJcbiAgcmV0dXJuIG5cclxufVxyXG5hc3luYyBmdW5jdGlvbiBDKGUsIHQgPSAwLCByID0gZSkge1xyXG4gIGxldCBuID0gTWF0aC5tYXgoMCwgZSksXHJcbiAgICBvID0gTWF0aC5tYXgoMCwgdCksXHJcbiAgICBpID0gTWF0aC5tYXgobiwgciksXHJcbiAgICBsID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xyXG4gIG4gPiAwICYmIG8gPiAwICYmIGkgPiBuICYmIGwgJiYgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciA/IGF3YWl0IG5ldyBQcm9taXNlKFxyXG4gIGUgPT4ge1xyXG4gICAgbGV0IHQgPSBEYXRlLm5vdygpLFxyXG4gICAgICByID0gdCxcclxuICAgICAgYSA9IG51bGwsXHJcbiAgICAgIHMgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgciA9IERhdGUubm93KClcclxuICAgICAgfSksXHJcbiAgICAgIHUgPSAoKSA9PiB7XHJcbiAgICAgICAgcy5kaXNjb25uZWN0KCksIGEgJiYgY2xlYXJUaW1lb3V0KGEpLCBlKClcclxuICAgICAgfSxcclxuICAgICAgYyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZSA9IERhdGUubm93KCksXHJcbiAgICAgICAgICBsID0gZSAtIHQ7XHJcbiAgICAgICAgaWYgKGwgPj0gaSB8fCBsID49IG4gJiYgZSAtIHIgPj0gbykge1xyXG4gICAgICAgICAgdSgpO1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzID0gTWF0aC5tYXgoMCwgbiAtIGwpLFxyXG4gICAgICAgICAgZCA9IE1hdGgubWF4KDAsIG8gLSAoZSAtIHIpKSxcclxuICAgICAgICAgIGYgPSBNYXRoLm1heCgwLCBpIC0gbCk7XHJcbiAgICAgICAgYSA9IHNldFRpbWVvdXQoYywgTWF0aC5tYXgoMSwgTWF0aC5taW4oZiwgTWF0aC5tYXgocywgZCkpKSlcclxuICAgICAgfTtcclxuICAgIHMub2JzZXJ2ZShsLCB7XHJcbiAgICAgIGF0dHJpYnV0ZXM6ICEwLFxyXG4gICAgICBjaGFyYWN0ZXJEYXRhOiAhMCxcclxuICAgICAgY2hpbGRMaXN0OiAhMCxcclxuICAgICAgc3VidHJlZTogITBcclxuICAgIH0pLCBhID0gc2V0VGltZW91dChjLCBuKVxyXG4gIH0pIDogbiA+IDAgJiYgYXdhaXQgbmV3IFByb21pc2UoZSA9PiBzZXRUaW1lb3V0KGUsIG4pKSwgKDAsIGEuY2hlY2twb2ludCkoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBKGUpIHtcclxuICByZXR1cm4gZSA/IG5ldyBTZXQoZS5tYXAoZSA9PiAoMCwgaC5ub3JtYWxpemVGaWVsZExhYmVsKShlLmxhYmVsKSkpIDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBrKGUsIHQpIHtcclxuICBsZXQgciA9IGU/LnJlZ3VsYXIgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZS5yZWd1bGFyICYmICFBcnJheS5pc0FycmF5KGUucmVndWxhcikgPyBlLnJlZ3VsYXIgOiB7fSxcclxuICAgIG4gPSBBKHQpO1xyXG4gIHJldHVybiBuID8gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKHIpLmZpbHRlcigoW2VdKSA9PiBuLmhhcygoMCwgaC5ub3JtYWxpemVGaWVsZExhYmVsKShcclxuICAgIGUpKSkpIDogclxyXG59XHJcblxyXG5mdW5jdGlvbiBUKGUsIHQpIHtcclxuICBsZXQgciA9IEFycmF5LmlzQXJyYXkoZT8uZmlsbERhdGFMaXN0KSA/IGUuZmlsbERhdGFMaXN0IDogW10sXHJcbiAgICBuID0gQSh0KTtcclxuICByZXR1cm4gbiA/IHIuZmlsdGVyKGUgPT4gbi5oYXMoKDAsIGgubm9ybWFsaXplRmllbGRMYWJlbCkoZT8ubmFtZSkpKSA6IHJcclxufVxyXG5cclxuZnVuY3Rpb24gRihlKSB7XHJcbiAgaWYgKG51bGwgPT0gZSB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiBlKSByZXR1cm4gZTtcclxuICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBzdHJ1Y3R1cmVkQ2xvbmUpIHRyeSB7XHJcbiAgICByZXR1cm4gc3RydWN0dXJlZENsb25lKGUpXHJcbiAgfSBjYXRjaCB7fVxyXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGUpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJKGUsIHQsIHIpIHtcclxuICBpZiAoIWUpIHJldHVybiByID8gKDAsIHYuaW5oZXJpdEZhbGNvblJlc3BvbnNlQW5zd2VyTWFya2VyKSh7XHJcbiAgICAuLi50LFxyXG4gICAgcmVndWxhcjogayh0LCByKSxcclxuICAgIGZpbGxEYXRhTGlzdDogVCh0LCByKVxyXG4gIH0sIHQpIDogdDtcclxuICBsZXQgbiA9IFQoZSksXHJcbiAgICBvID0gVCh0LCByKTtcclxuICByZXR1cm4gKDAsIHYuaW5oZXJpdEZhbGNvblJlc3BvbnNlQW5zd2VyTWFya2VyKSh7XHJcbiAgICAuLi5lLFxyXG4gICAgcmVndWxhcjoge1xyXG4gICAgICAuLi5rKGUpLFxyXG4gICAgICAuLi5rKHQsIHIpXHJcbiAgICB9LFxyXG4gICAgLi4ubi5sZW5ndGggfHwgby5sZW5ndGggPyB7XHJcbiAgICAgIGZpbGxEYXRhTGlzdDogWy4uLm4sIC4uLm9dXHJcbiAgICB9IDoge31cclxuICB9LCBlLCB0KVxyXG59XHJcbmNsYXNzIGoge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jb3ZlckxldHRlckZpbGxUYXNrID0gbnVsbCwgdGhpcy5oYXNDb21ib1F1ZXN0aW9ucyA9ICExLCB0aGlzXHJcbiAgICAgIC5jb21ib1F1ZXN0aW9uU2V0dGxlRGVsYXlNcyA9IDMwMCwgdGhpcy5jb21ib1F1ZXN0aW9uUXVpZXRQZXJpb2RNcyA9IDAsIHRoaXNcclxuICAgICAgLmNvbWJvUXVlc3Rpb25TZXR0bGVNYXhXYWl0TXMgPSAzMDAsIHRoaXMuY29tYm9RdWVzdGlvbk1heFJvdW5kcyA9IDEsIHRoaXMudGltZVRyYWNlID0ge1xyXG4gICAgICAgIHJ1bGVzUGFyc2VTdGFydFRpbWU6IDAsXHJcbiAgICAgICAgcmVxdWVzdFN0YXJ0VGltZTogMCxcclxuICAgICAgICBmaWxsU3RhcnRUaW1lOiAwXHJcbiAgICAgIH0sIHRoaXMuc3VibWl0VHJhY2tpbmdBYm9ydENvbnRyb2xsZXIgPSBudWxsLCB0aGlzLmZhbGNvblJlc3BvbnNlQWNjdW11bGF0b3IgPSBuZXcgd1xyXG4gICAgICAuRmFsY29uUmVzcG9uc2VBY2N1bXVsYXRvciwgdGhpcy5wcm9ncmVzc1RyYWNrZXIgPSBuZXcgby5Qcm9ncmVzc1RyYWNrZXIsIHRoaXMudGFza1F1ZXVlID1cclxuICAgICAgbmV3IG8uVGFza1F1ZXVlLCB0aGlzLmZpbGxDYW5jZWwgPSAoMCwgYS5jcmVhdGVDYW5jZWxsYXRpb24pKCgpID0+IHRoaXMudGFza1F1ZXVlLmNsZWFyKCksXHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIuc2V0Q3VycmVudEZpZWxkKSwgdGhpcy5jYW5jZWwgPSB0aGlzLmZpbGxDYW5jZWwuY2FuY2VsLCB0aGlzLnNraXAgPVxyXG4gICAgICB0aGlzLmZpbGxDYW5jZWwuc2tpcCwgdGhpcy5jcmVhdGVPcGVyYXRpb25IYW5kbGVyID0gKDAsIGkuY3JlYXRlT3BlcmF0aW9uSGFuZGxlckZhY3RvcnkpKFxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyksXHJcbiAgICAgIHRoaXMub3BlcmF0aW9uQ29uZmlnID0gdGhpcy5idWlsZE9wZXJhdGlvbkNvbmZpZygpXHJcbiAgfVxyXG4gIGJ1aWxkT3BlcmF0aW9uQ29uZmlnKCkge1xyXG4gICAgbGV0IGUgPSB0aGlzLmdldEZpZWxkSGFuZGxlcnMoKSxcclxuICAgICAgdCA9IHt9O1xyXG4gICAgZm9yIChsZXQgW3IsIG5dIG9mIE9iamVjdC5lbnRyaWVzKGUpKSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4gPyB0W3JdID0gdGhpc1xyXG4gICAgICAuY3JlYXRlT3BlcmF0aW9uSGFuZGxlcihuLCB7XHJcbiAgICAgICAgZXhwZWN0QXJyYXk6ICEwXHJcbiAgICAgIH0pIDogbiAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBuICYmICh0W3JdID0gdGhpcy5jcmVhdGVPcGVyYXRpb25IYW5kbGVyKG4uaGFuZGxlciwgblxyXG4gICAgICAgIC5vcHRpb25zIHx8IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH0pKTtcclxuICAgIHJldHVybiB0XHJcbiAgfVxyXG4gIGFzeW5jIGNoZWNrQ292ZXJMZXR0ZXIoKSB7XHJcbiAgICAoMCwgcy5wb3N0Q292ZXJMZXR0ZXJTdGF0dXMpKFwiXCIpXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxGb3JtKGUgPSAhMSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlsbENhbmNlbC53cmFwKCgpID0+IHRoaXMuZG9GaWxsRm9ybShlKSlcclxuICB9XHJcbiAgYXN5bmMgZG9GaWxsRm9ybShlID0gITEpIHtcclxuICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUZpbGxGb3JtKCk7XHJcbiAgICBsZXQgdCA9IHRoaXMuZ2V0UHJlRXh0cmFjdGlvbkFib3J0UmVhc29uKCk7XHJcbiAgICBpZiAodCkgcmV0dXJuIHQ7XHJcbiAgICBsZXQgciA9IGF3YWl0IHRoaXMuZXh0cmFjdEZvcm1SdWxlcygpO1xyXG4gICAgaWYgKDAgPT09IHIubGVuZ3RoKSByZXR1cm4gdGhpcy5oYXNVcGxvYWRPbmx5Rm9ybSgpID8gKGF3YWl0IHRoaXMuaGFuZGxlUmVzdW1lVXBsb2FkKCksXHJcbiAgICAgIGF3YWl0IHRoaXMuZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKHIpLCBhd2FpdCB0aGlzLmZpbmFsaXplRmlsbEZvcm0oKSkgOiAoKDAsIGNcclxuICAgICAgICAuc2VuZEh0dHBTdGF0dXNNZXNzYWdlKShwLkNVU1RPTV9FUlJPUl9DT0RFUy5OT19FTEVNRU5UUyksIHAuQ1VTVE9NX0VSUk9SX0NPREVTXHJcbiAgICAgIC5OT19FTEVNRU5UUyk7XHJcbiAgICBsZXQgbiA9IHRoaXMucHJlcGFyZUNvdmVyTGV0dGVyUnVsZXMocik7XHJcbiAgICB0aGlzLnByb2dyZXNzVHJhY2tlci5zZXRGaWVsZHNSZXF1aXJlZFN0YXR1cyhuKTtcclxuICAgIGxldCBvID0gYXdhaXQgdGhpcy5mZXRjaEZvcm1BbnN3ZXJzKG4sIGUpO1xyXG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG8pIHJldHVybiBvO1xyXG4gICAgYXdhaXQgdGhpcy5oYW5kbGVSZXN1bWVVcGxvYWQoKSwgYXdhaXQgdGhpcy5maWxsUmVndWxhckZpZWxkcyhuKSwgYXdhaXQgdGhpc1xyXG4gICAgICAuZmlsbEVkdWNhdGlvbkFuZEVtcGxveW1lbnQobiksIGF3YWl0IHRoaXMuZmlsbENvdmVyTGV0dGVyRmllbGRzKCk7XHJcbiAgICBsZXQgaSA9IGF3YWl0IHRoaXMucnVuQ29tYm9RdWVzdGlvbkF1dG9maWxsSWZOZWVkZWQobiwgZSk7XHJcbiAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgaSA/IGkgOiAobiA9IGksIGF3YWl0IHRoaXMuZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKG4pLCBhd2FpdCB0aGlzXHJcbiAgICAgIC5maW5hbGl6ZUZpbGxGb3JtKCkpXHJcbiAgfVxyXG4gIGFzeW5jIGluaXRpYWxpemVGaWxsRm9ybSgpIHtcclxuICAgIHRoaXMucmVzZXRGYWxjb25SZXNwb25zZUFjY3VtdWxhdG9yKCksIHRoaXMudGltZVRyYWNlID0ge1xyXG4gICAgICBydWxlc1BhcnNlU3RhcnRUaW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICByZXF1ZXN0U3RhcnRUaW1lOiAwLFxyXG4gICAgICBmaWxsU3RhcnRUaW1lOiAwXHJcbiAgICB9LCB0aGlzLnByb2dyZXNzVHJhY2tlci5jbGVhcigpLCB0aGlzLnRhc2tRdWV1ZS5jbGVhcigpLCBhd2FpdCB0aGlzLnJ1blByZUZpbGxGb3JtKClcclxuICB9XHJcbiAgYXN5bmMgcnVuUHJlRmlsbEZvcm0oKSB7fVxyXG4gIGdldFByZUV4dHJhY3Rpb25BYm9ydFJlYXNvbigpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGhhc1VwbG9hZE9ubHlGb3JtKCkge1xyXG4gICAgcmV0dXJuICExXHJcbiAgfVxyXG4gIHByZXBhcmVDb3ZlckxldHRlclJ1bGVzKGUpIHtcclxuICAgIGxldCB0ID0gKDAsIGwucHJlcGFyZUNvdmVyTGV0dGVyRmlsbFRhc2spKHtcclxuICAgICAgcnVsZXM6IGUsXHJcbiAgICAgIGNvdmVyTGV0dGVyOiB0aGlzLmNvdmVyTGV0dGVyLFxyXG4gICAgICBqb2JJZDogdGhpcy5jdXJyZW50Sm9iSWQsXHJcbiAgICAgIHJlc3VtZUlkOiB0aGlzLnJlc3VtZUluZm8/LmlkLFxyXG4gICAgICB0YWlsb3JJZDogdGhpcy5yZXN1bWVJbmZvPy50YWlsb3JJZFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5jb3ZlckxldHRlckZpbGxUYXNrID0gdC50YXNrLCB0LnJ1bGVzXHJcbiAgfVxyXG4gIGdldEVsZW1lbnRSdWxlc1JlcXVlc3RVcmwoKSB7fVxyXG4gIGFzeW5jIHJlcXVlc3RGb3JtQW5zd2VycyhlLCB0LCByID0ge30pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMudG9rZW4gfHwgKHRoaXMudG9rZW4gPSBhd2FpdCAoMCwgaS5nZXRTaXRlVG9rZW4pKCkpLCAhMSAhPT0gci51cGRhdGVUaW1lVHJhY2UgJiYgKHRoaXNcclxuICAgICAgICAudGltZVRyYWNlLnJlcXVlc3RTdGFydFRpbWUgPSBEYXRlLm5vdygpKTtcclxuICAgICAgbGV0IG4gPSB0aGlzLmNhcHR1cmVGYWxjb25SZXNwb25zZVJ1bigpLFxyXG4gICAgICAgIG8gPSBhd2FpdCAoMCwgaS5nZXRFbGVtZW50UnVsZXMpKGUsIHRoaXMuZ2V0U2l0ZU5hbWUoKSwgdGhpcy50b2tlbiwgdCwgdGhpcy5yZXN1bWVJbmZvLmlkLFxyXG4gICAgICAgICAgdGhpcy5yZXN1bWVJbmZvLnRhaWxvcklkLCB0aGlzLmdldEVsZW1lbnRSdWxlc1JlcXVlc3RVcmwoKSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlY29yZEZhbGNvblJlc3BvbnNlKG8sIG4pLCAhMSAhPT0gci51cGRhdGVUaW1lVHJhY2UgJiYgKHRoaXMudGltZVRyYWNlXHJcbiAgICAgICAgLmZpbGxTdGFydFRpbWUgPSBEYXRlLm5vdygpKSwgdGhpcy5mb3JtYXRBbnN3ZXI/LihvKSA/PyBvXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgaS5IVFRQRXJyb3IgfHwgZSBpbnN0YW5jZW9mIGkuUmVzdW1lTWlzc2luZ0NvZGVFcnJvcikgcmV0dXJuICgwLCBjXHJcbiAgICAgICAgLnNlbmRIdHRwU3RhdHVzTWVzc2FnZSkoZS5tZXNzYWdlKSwgZS5tZXNzYWdlO1xyXG4gICAgICBpZiAoKDAsIHUuaXNFeHRlbnNpb25Db250ZXh0SW52YWxpZGF0ZWRFcnJvcikoZSkpIHJldHVybiAoMCwgYy5zZW5kSHR0cFN0YXR1c01lc3NhZ2UpKHBcclxuICAgICAgICAgIC5DVVNUT01fRVJST1JfQ09ERVMuRVhURU5TSU9OX0NPTlRFWFRfSU5WQUxJREFURUQpLCBwLkNVU1RPTV9FUlJPUl9DT0RFU1xyXG4gICAgICAgIC5FWFRFTlNJT05fQ09OVEVYVF9JTlZBTElEQVRFRDtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlVua25vd24gZXJyb3Igb2NjdXJyZWQ6XCIsIGUpXHJcbiAgICB9KDAsIGEuY2hlY2twb2ludCkoKVxyXG4gIH1cclxuICBhc3luYyBmZXRjaEZvcm1BbnN3ZXJzKGUsIHQpIHtcclxuICAgIGxldCByID0gYXdhaXQgdGhpcy5yZXF1ZXN0Rm9ybUFuc3dlcnMoZSwgdCk7XHJcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcikgcmV0dXJuIHI7XHJcbiAgICByICYmICh0aGlzLmFuc3dlciA9IHIpXHJcbiAgfVxyXG4gIGNhcHR1cmVGYWxjb25SZXNwb25zZVJ1bigpIHtcclxuICAgIHJldHVybiB0aGlzLmZhbGNvblJlc3BvbnNlQWNjdW11bGF0b3IuY2FwdHVyZUVwb2NoKClcclxuICB9XHJcbiAgcmVjb3JkRmFsY29uUmVzcG9uc2UoZSwgdCkge1xyXG4gICAgdGhpcy5mYWxjb25SZXNwb25zZUFjY3VtdWxhdG9yLnJlY29yZChlLCB0KVxyXG4gIH1cclxuICByZXNldEZhbGNvblJlc3BvbnNlQWNjdW11bGF0b3IoKSB7XHJcbiAgICB0aGlzLmZhbGNvblJlc3BvbnNlQWNjdW11bGF0b3IucmVzZXQoKVxyXG4gIH1cclxuICBnZXRGYWxjb25SZXNwb25zZUFuc3dlckZvclRyYWNraW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmFsY29uUmVzcG9uc2VBY2N1bXVsYXRvci5jdXJyZW50KClcclxuICB9XHJcbiAgYXN5bmMgaGFuZGxlUmVzdW1lVXBsb2FkKCkge31cclxuICBhc3luYyBmaWxsUmVndWxhckZpZWxkcyhlKSB7XHJcbiAgICBsZXQgdCA9IFsuLi4oMCwgaS5nZXRSZWd1bGFyT3BlcmF0aW9ucykoKDAsIGwud2l0aG91dENvdmVyTGV0dGVyUnVsZXMpKGUpLCB0aGlzLmFuc3dlclxyXG4gICAgICAucmVndWxhciwgdGhpcy5vcGVyYXRpb25Db25maWcpXTtcclxuICAgIGZvciAobGV0IGUgb2YgdCkgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgYXN5bmMgZmlsbEVkdWNhdGlvbkFuZEVtcGxveW1lbnQoZSkge31cclxuICBhc3luYyBmaWxsQ292ZXJMZXR0ZXJGaWVsZHMoKSB7XHJcbiAgICB0aGlzLmNvdmVyTGV0dGVyRmlsbFRhc2s/LnJ1bGVzLmxlbmd0aCAmJiBhd2FpdCAoMCwgbC5maWxsUHJlcGFyZWRDb3ZlckxldHRlclRhc2spKHtcclxuICAgICAgdGFzazogdGhpcy5jb3ZlckxldHRlckZpbGxUYXNrLFxyXG4gICAgICBjb3ZlckxldHRlcjogdGhpcy5jb3ZlckxldHRlcixcclxuICAgICAgYW5zd2VyOiB0aGlzLmFuc3dlcixcclxuICAgICAgdXBkYXRlTWlzc2VkUHJvZ3Jlc3M6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzLFxyXG4gICAgICBvcGVyYXRpb25Db25maWc6IHRoaXMub3BlcmF0aW9uQ29uZmlnXHJcbiAgICB9KVxyXG4gIH1cclxuICBtZXJnZUNvbWJvUXVlc3Rpb25BbnN3ZXIoZSwgdCkge1xyXG4gICAgdGhpcy5hbnN3ZXIgPSBJKHRoaXMuYW5zd2VyLCBlLCB0KVxyXG4gIH1cclxuICBnZXROZXdDb21ib1F1ZXN0aW9uUnVsZXMoZSwgdCkge1xyXG4gICAgcmV0dXJuIHgoZSwgdClcclxuICB9XHJcbiAgYXN5bmMgZmlsdGVyTmV3Q29tYm9RdWVzdGlvblJ1bGVzKGUpIHtcclxuICAgIHJldHVybiBlXHJcbiAgfVxyXG4gIGFzeW5jIGV4dHJhY3RDb21ib1F1ZXN0aW9uUnVsZXMoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKClcclxuICB9XHJcbiAgYXN5bmMgd2FpdEZvckNvbWJvUXVlc3Rpb25zVG9TZXR0bGUoKSB7XHJcbiAgICBhd2FpdCBDKHRoaXMuY29tYm9RdWVzdGlvblNldHRsZURlbGF5TXMsIHRoaXMuY29tYm9RdWVzdGlvblF1aWV0UGVyaW9kTXMsIHRoaXNcclxuICAgICAgLmNvbWJvUXVlc3Rpb25TZXR0bGVNYXhXYWl0TXMpXHJcbiAgfVxyXG4gIGFzeW5jIHJ1bkNvbWJvUXVlc3Rpb25BdXRvZmlsbElmTmVlZGVkKGUsIHQpIHtcclxuICAgIGlmICghdGhpcy5oYXNDb21ib1F1ZXN0aW9ucykgcmV0dXJuIGU7XHJcbiAgICBsZXQgciA9IFsuLi5lXTtcclxuICAgIGZvciAobGV0IGUgPSAxOyBlIDw9IHRoaXMuY29tYm9RdWVzdGlvbk1heFJvdW5kczsgZSsrKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMud2FpdEZvckNvbWJvUXVlc3Rpb25zVG9TZXR0bGUoKTtcclxuICAgICAgbGV0IG4gPSBhd2FpdCB0aGlzLmV4dHJhY3RDb21ib1F1ZXN0aW9uUnVsZXMoKSxcclxuICAgICAgICBvID0gdGhpcy5nZXROZXdDb21ib1F1ZXN0aW9uUnVsZXMociwgbiksXHJcbiAgICAgICAgaSA9IGF3YWl0IHRoaXMuZmlsdGVyTmV3Q29tYm9RdWVzdGlvblJ1bGVzKG8pLFxyXG4gICAgICAgIGEgPSB0aGlzLnByZXBhcmVDb3ZlckxldHRlclJ1bGVzKGkpO1xyXG4gICAgICBpZiAoMCA9PT0gby5sZW5ndGgpIGJyZWFrO1xyXG4gICAgICBpZiAociA9IFsuLi5yLCAuLi5vXSwgMCA9PT0gYS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oXCJbQmFzZUZpbGxlcl1bQ29tYm9dIHNraXBwZWQgY29tbWl0dGVkIGR5bmFtaWMgcnVsZXNcIiwge1xyXG4gICAgICAgICAgc2l0ZTogdGhpcy5nZXRTaXRlTmFtZSgpLFxyXG4gICAgICAgICAgcm91bmQ6IGUsXHJcbiAgICAgICAgICBza2lwcGVkUnVsZUNvdW50OiBvLmxlbmd0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgdCBvZiAoY29uc29sZS5pbmZvKFwiW0Jhc2VGaWxsZXJdW0NvbWJvXSBkaXNjb3ZlcmVkIGR5bmFtaWMgcnVsZXNcIiwge1xyXG4gICAgICAgICAgc2l0ZTogdGhpcy5nZXRTaXRlTmFtZSgpLFxyXG4gICAgICAgICAgcm91bmQ6IGUsXHJcbiAgICAgICAgICBuZXdSdWxlQ291bnQ6IGEubGVuZ3RoXHJcbiAgICAgICAgfSksIGEpKSB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzKHQpO1xyXG4gICAgICBsZXQgbCA9IGF3YWl0IHRoaXMucmVxdWVzdEZvcm1BbnN3ZXJzKGEsIHQsIHtcclxuICAgICAgICB1cGRhdGVUaW1lVHJhY2U6ICExXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgbCkgcmV0dXJuIGw7XHJcbiAgICAgIGwgJiYgdGhpcy5tZXJnZUNvbWJvUXVlc3Rpb25BbnN3ZXIobCwgYSksIGF3YWl0IHRoaXMuZmlsbFJlZ3VsYXJGaWVsZHMoYSksIGF3YWl0IHRoaXNcclxuICAgICAgICAuZmlsbEVkdWNhdGlvbkFuZEVtcGxveW1lbnQoYSksIGF3YWl0IHRoaXMuZmlsbENvdmVyTGV0dGVyRmllbGRzKCksIGUgPT09IHRoaXNcclxuICAgICAgICAuY29tYm9RdWVzdGlvbk1heFJvdW5kcyAmJiB0aGlzLmNvbWJvUXVlc3Rpb25NYXhSb3VuZHMgPiAxICYmIGNvbnNvbGUud2FybihcclxuICAgICAgICAgIFwiW0Jhc2VGaWxsZXJdW0NvbWJvXSBzdG9wcGVkIGF0IGR5bmFtaWMgcnVsZSByb3VuZCBsaW1pdFwiLCB7XHJcbiAgICAgICAgICAgIHNpdGU6IHRoaXMuZ2V0U2l0ZU5hbWUoKSxcclxuICAgICAgICAgICAgbWF4Um91bmRzOiB0aGlzLmNvbWJvUXVlc3Rpb25NYXhSb3VuZHMsXHJcbiAgICAgICAgICAgIHRvdGFsUnVsZUNvdW50OiByLmxlbmd0aFxyXG4gICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiByXHJcbiAgfVxyXG4gIGFzeW5jIGV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcyhlKSB7XHJcbiAgICBhd2FpdCB0aGlzLmJpbmRTdWJtaXRCdXR0b25UcmFja2luZyhlKVxyXG4gIH1cclxuICBhc3luYyBiaW5kU3VibWl0QnV0dG9uVHJhY2tpbmcoZSkge1xyXG4gICAgbGV0IHQgPSBGKGF3YWl0IHRoaXMuZ2V0QXV0b2ZpbGxTbmFwc2hvdChlKSksXHJcbiAgICAgIHIgPSBGKHRoaXMuZ2V0QWRkaXRpb25hbEF1dG9maWxsU25hcHNob3REYXRhPy4oZSkgfHwge30pLFxyXG4gICAgICBuID0gdGhpcy5nZXRTdWJtaXRUcmFja2luZ1Njb3BlS2V5KCk7XHJcbiAgICB0aGlzLnN1Ym1pdFRyYWNraW5nQWJvcnRDb250cm9sbGVyPy5hYm9ydCgpLCB0aGlzLnN1Ym1pdFRyYWNraW5nQWJvcnRDb250cm9sbGVyID1cclxuICAgICAgbmV3IEFib3J0Q29udHJvbGxlcjtcclxuICAgIGxldCBvID0gbnVsbCxcclxuICAgICAgaSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgICAgbGV0IG87XHJcbiAgICAgICAgICBsZXQgaSA9IHRoaXMuZ2V0U3VibWl0VHJhY2tpbmdTY29wZUtleSgpO1xyXG4gICAgICAgICAgaWYgKG4gJiYgaSAmJiBuICE9PSBpKSByZXR1cm47XHJcbiAgICAgICAgICBsZXQgYSA9ICExO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbyA9IGF3YWl0IHRoaXMuZ2V0U3VibWl0U25hcHNob3QoKVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBhID0gITAsIG8gPSBGKHQpLCBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgYFtCYXNlRmlsbGVyXSBGYWlsZWQgdG8gY2FwdHVyZSAke3RoaXMuZ2V0U2l0ZU5hbWUoKX0gc3VibWl0IHNuYXBzaG90OyB1c2luZyBhdXRvZmlsbCBiYXNlbGluZWAsXHJcbiAgICAgICAgICAgICAgZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBsID0gdGhpcy5nZXRBZGRpdGlvbmFsU3VibWl0U25hcHNob3REYXRhPy4oKSB8fCB7fSxcclxuICAgICAgICAgICAgcyA9ICgwLCB5LmJ1aWxkRmFsY29uQXV0b2ZpbGxBbnN3ZXJQYWlyRGF0YSkodGhpc1xyXG4gICAgICAgICAgICAuZ2V0RmFsY29uUmVzcG9uc2VBbnN3ZXJGb3JUcmFja2luZygpKSxcclxuICAgICAgICAgICAgdSA9IHtcclxuICAgICAgICAgICAgICAuLi5zID8ge1xyXG4gICAgICAgICAgICAgICAgZmFsY29uOiBzXHJcbiAgICAgICAgICAgICAgfSA6IHt9LFxyXG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0QXV0b2ZpbGxBbnN3ZXJQYWlyRXh0cmFUcmFja2luZ0RhdGE/LigpIHx8IHt9LFxyXG4gICAgICAgICAgICAgIC4uLmEgPyB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRUcmFja2luZzoge1xyXG4gICAgICAgICAgICAgICAgICBzbmFwc2hvdEZhbGxiYWNrOiBcImF1dG9maWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgIHJlYXNvbjogXCJzdWJtaXRfc25hcHNob3RfZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gOiB7fVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjID0gRih0KSxcclxuICAgICAgICAgICAgZCA9IEYociksXHJcbiAgICAgICAgICAgIGYgPSB7XHJcbiAgICAgICAgICAgICAgZm9ybVVybDogKDAsIG0udXNlVXJsU3RvcmUpLmdldFN0YXRlKCkuY3VycmVudFRhYlVybCxcclxuICAgICAgICAgICAgICBhdXRvZmlsbFNuYXBzaG90OiBjLFxyXG4gICAgICAgICAgICAgIHN1Ym1pdFNuYXBzaG90OiBvLFxyXG4gICAgICAgICAgICAgIGFkZGl0aW9uYWxBdXRvZmlsbERhdGE6IGQsXHJcbiAgICAgICAgICAgICAgYWRkaXRpb25hbFN1Ym1pdERhdGE6IGwsXHJcbiAgICAgICAgICAgICAgZXh0cmFEYXRhOiB1LFxyXG4gICAgICAgICAgICAgIHNvdXJjZTogdGhpcy5nZXRTaXRlTmFtZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHAgPSB0aGlzLm5vcm1hbGl6ZUF1dG9maWxsQW5zd2VyUGFpclRyYWNraW5nRGF0YT8uKGYpID8/IGY7XHJcbiAgICAgICAgICAoMCwgeS5zZW5kQXV0b2ZpbGxBbnN3ZXJQYWlyRXZlbnQpKHApLCB0ID0gRihwLnN1Ym1pdFNuYXBzaG90KSwgciA9IEYocFxyXG4gICAgICAgICAgICAuYWRkaXRpb25hbFN1Ym1pdERhdGEgfHwge30pLCBuID0gaSB8fCBuLCAoMCwgZy5oYW5kbGVTdWJtaXRTdGFyUmF0aW5nKSh0aGlzXHJcbiAgICAgICAgICAgIC5nZXRTaXRlTmFtZSgpLCBwLmF1dG9maWxsU25hcHNob3QsIHAuc3VibWl0U25hcHNob3QsIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAgIC5maWVsZFN0YXR1cywgdGhpcy5nZXRTdWJtaXRTdWNjZXNzU2VsZWN0b3JzKCksIGUpXHJcbiAgICAgICAgfSwgYSA9ICgpID0+IChvPy5hYm9ydCgpLCAobyA9IG5ldyBBYm9ydENvbnRyb2xsZXIpLnNpZ25hbCksIGwgPSBlID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtCYXNlRmlsbGVyXSBGYWlsZWQgdG8gdHJhY2sgJHt0aGlzLmdldFNpdGVOYW1lKCl9IHN1Ym1pdCBjbGlja2AsIGUpXHJcbiAgICAgICAgfSwgcyA9IHRoaXMuZ2V0U3VibWl0VHJhY2tpbmdEZWxlZ2F0aW9uUm9vdD8uKCksIHUgPSB0aGlzLnJlc29sdmVEZWxlZ2F0ZWRTdWJtaXRCdXR0b25cclxuICAgICAgICA/LmJpbmQodGhpcyk7XHJcbiAgICBpZiAocyAmJiB1KSB7XHJcbiAgICAgIHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGxldCB0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCByID0gdSh0KTtcclxuICAgICAgICBpZiAocikgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IGkoYSgpKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGwoZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICBjYXB0dXJlOiAhMCxcclxuICAgICAgICBzaWduYWw6IHRoaXMuc3VibWl0VHJhY2tpbmdBYm9ydENvbnRyb2xsZXIuc2lnbmFsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCBjID0gdGhpcy5nZXRTdWJtaXRCdXR0b25TZWxlY3RvcigpO1xyXG4gICAgaWYgKCFjKSByZXR1cm47XHJcbiAgICBsZXQgZCA9ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShjKTtcclxuICAgIGQgJiYgZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGkoYSgpKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgbChlKVxyXG4gICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgIGNhcHR1cmU6ICEwLFxyXG4gICAgICBzaWduYWw6IHRoaXMuc3VibWl0VHJhY2tpbmdBYm9ydENvbnRyb2xsZXIuc2lnbmFsXHJcbiAgICB9KVxyXG4gIH1cclxuICBnZXRTdWJtaXRCdXR0b25TZWxlY3RvcigpIHtcclxuICAgIHJldHVybiAnLi8vYnV0dG9uW0B0eXBlPVwic3VibWl0XCIgb3IgY29udGFpbnMoQGNsYXNzLCBcInN1Ym1pdFwiKV0nXHJcbiAgfVxyXG4gIGdldFN1Ym1pdFRyYWNraW5nU2NvcGVLZXkoKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBnZXRTdWJtaXRTdWNjZXNzU2VsZWN0b3JzKCkge1xyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG4gIGFzeW5jIGZpbmFsaXplRmlsbEZvcm0oKSB7XHJcbiAgICByZXR1cm4gKDAsIGMucG9zdFN0YXR1cykoXCJmaWxsaW5nXCIsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLCB0aGlzLnRpbWVUcmFjZSksIHdpbmRvd1xyXG4gICAgICAudG9wPy5wb3N0TWVzc2FnZShiLmNsZWFuT2JqZWN0KHtcclxuICAgICAgICB0eXBlOiBkLk1FU1NBR0VfRVZFTlRTLmF1dG9GaWxsUmVzdWx0RnJvbUlmcmFtZSxcclxuICAgICAgICBkYXRhOiB0aGlzLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1c1xyXG4gICAgICB9KSwge1xyXG4gICAgICAgIHRhcmdldE9yaWdpbjogXCIqXCJcclxuICAgICAgfSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmdlbmVyYXRlRmluYWxQcm9ncmVzcygpXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWxsZXIuNmQ1OWY5YWQuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);