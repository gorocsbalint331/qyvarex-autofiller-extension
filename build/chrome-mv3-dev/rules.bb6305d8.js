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
})({"aT7Mh":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\apple\\rules.js",
    "bundleId": "b0a984c6bb6305d8",
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
var j = z(require("8e0ac27281329d03"));
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

},{"8e0ac27281329d03":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"e9kMl":[function(require,module,exports) {
/**
 * Parcel module id: bPSBK
 * Resolved path: src/contents/sites/apple/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRules", ()=>a), n.export(r, "getDisabilityModalRules", ()=>l), n.export(r, "getEduRules", ()=>p), n.export(r, "getExpRules", ()=>m), n.export(r, "getSubmitButtonText", ()=>g), n.export(r, "getFormSnapshot", ()=>C);
var o = e("~core/enums"), i = e("~utils/delay");
async function a(e1 = !1) {
    let t = [], r1 = await p();
    t.push(...r1);
    let n = await m();
    t.push(...n);
    let o = document.getElementById("apply-profileInformation-form");
    return (o || (o = document.querySelector("main") || document.body), o && t.push(...s(o)), 0 !== t.length || e1) ? t : (await (0, i.delay)(1500), await a(!0));
}
async function l() {
    let e1 = document.getElementById("selfdisclosure-disabilitymodal-modal");
    if (!e1) return [];
    let t = [], r1 = e1.querySelector("#disabilityform");
    if (!r1) return t;
    let n = r1.querySelector('input[name="disabilityAckName"]:not([disabled])');
    if (n) {
        let e1 = r1.querySelector('label[for="disabilityAckName"]');
        t.push({
            type: o.FIELD_TYPE.TEXT,
            label: "Name",
            required: !0,
            $input: n,
            $label: e1 || n
        });
    }
    let i = r1.querySelector("#disability_options");
    if (i) {
        let e1 = Array.from(i.querySelectorAll('input[type="radio"][name="disabilityStatusCd"]')), r1 = e1.map((e1)=>{
            let t = i.querySelector(`label[for="${e1.id}"]`);
            return t?.textContent?.trim() || "";
        }).filter(Boolean);
        e1.length > 0 && t.push({
            type: o.FIELD_TYPE.CHECKBOX,
            label: "Disability Status",
            required: !0,
            $checkboxs: e1,
            $label: i,
            options: r1
        });
    }
    return t;
}
function s(e1, t = new Set) {
    let r1 = [], n = document.getElementById("parsedmodal-review-education-title"), i = document.getElementById("parsedmodal-review-employments-title"), a = (t)=>!!(n && n.contains(t) && !n.contains(e1) && n !== e1 || i && i.contains(t) && !i.contains(e1) && i !== e1), l = e1.querySelectorAll("select");
    l.forEach((e1)=>{
        if (t.has(e1) || a(e1)) return;
        let n = u(e1);
        n && (r1.push({
            type: o.FIELD_TYPE.SELECT,
            label: n,
            $input: e1,
            $label: e1.parentElement,
            required: f(e1),
            options: Array.from(e1.options).map((e1)=>e1.text).filter((e1)=>e1 && !e1.includes("Month") && !e1.includes("Year") && !e1.includes("Country/Region"))
        }), t.add(e1));
    });
    let s = e1.querySelectorAll(".form-dropdown");
    s.forEach((e1)=>{
        if (t.has(e1) || a(e1) || e1.querySelector("select")) return;
        let n = e1.querySelector(".form-dropdown-label");
        if (!n) return;
        let i = e1.querySelectorAll("ul li input");
        0 !== i.length && (r1.push({
            type: o.FIELD_TYPE.SELECT,
            label: d(n.textContent || ""),
            $input: e1,
            $label: n,
            required: f(e1),
            options: Array.from(i).map((e1)=>e1.value)
        }), t.add(e1));
    });
    let c = e1.querySelectorAll('input:not([type="hidden"]):not([type="radio"]):not([type="checkbox"]):not([type="file"]), textarea');
    c.forEach((e1)=>{
        if (t.has(e1) || a(e1)) return;
        let n = u(e1);
        if ("apply-skills-typeahead-suggestion-textbox" === e1.id && (n = "Skills"), !n) return;
        let i = "listbox" === e1.getAttribute("aria-haspopup");
        r1.push({
            type: i ? o.FIELD_TYPE.LISTBOX : o.FIELD_TYPE.TEXT,
            label: n,
            $input: e1,
            $label: e1.parentElement,
            required: f(e1)
        }), t.add(e1);
    });
    let p = e1.querySelectorAll("fieldset");
    return p.forEach((e1)=>{
        if (a(e1)) return;
        let n = e1.querySelectorAll('input[type="radio"]');
        if (0 === n.length) return;
        let i = e1.querySelector("legend"), l = i ? i.textContent?.trim() : "";
        l && (r1.push({
            type: o.FIELD_TYPE.CHECKBOX,
            label: l,
            $checkboxs: Array.from(n),
            $label: i,
            required: f(n[0]),
            options: Array.from(n).map((t)=>{
                let r1 = t.id, n = e1.querySelector(`label[for="${r1}"]`);
                return n && n.textContent?.trim() || "";
            }).filter(Boolean)
        }), n.forEach((e1)=>t.add(e1)));
    }), r1;
}
function u(e1) {
    let t = e1.getAttribute("aria-labelledby");
    if (t) {
        let e1 = document.getElementById(t);
        if (e1) return d(e1.textContent || "");
    }
    if (e1.parentElement?.classList.contains("form-textbox") || e1.parentElement?.classList.contains("form-dropdown")) {
        let t = e1.parentElement.querySelector(".form-textbox-label, .form-dropdown-label");
        if (t) return d(t.textContent || "");
    }
    let r1 = e1.closest(".typeahead-container");
    if (r1) {
        let e1 = r1.querySelector(".form-textbox-label");
        if (e1) return d(e1.textContent || "");
    }
    let n = e1.getAttribute("placeholder");
    if (n) return d(n);
    if (e1.id) {
        let t = c(e1.id), r1 = document.querySelector(`label[for="${t}"]`);
        if (r1) return d(r1.textContent || "");
    }
    return "";
}
function c(e1) {
    return e1.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function d(e1) {
    return e1.replace(/\(optional\)/gi, "").replace(/\*/g, "").trim();
}
function f(e1) {
    return !!e1.hasAttribute("required") || "true" === e1.getAttribute("aria-required");
}
async function p() {
    let e1 = [], t = document.getElementById("parsedmodal-review-education-title");
    if (!t) return e1;
    let r1 = t.querySelectorAll('[id^="parsedmodal-edu-form-"]');
    return r1.forEach((t)=>{
        let r1 = s(t);
        r1.length > 0 && e1.push({
            type: o.FIELD_TYPE.EDUCATION,
            label: "Education",
            required: !0,
            children: r1,
            options: r1.map((e1)=>({
                    type: e1.type,
                    label: e1.label,
                    options: e1.options
                }))
        });
    }), e1;
}
async function m() {
    let e1 = [], t = document.getElementById("parsedmodal-review-employments-title");
    if (!t) return e1;
    let r1 = t.querySelector('[role="group"][aria-label="Edit Employment Summary"]');
    if (r1) {
        let t = r1.querySelectorAll("fieldset");
        t.forEach((t)=>{
            let r1 = t.querySelector("legend");
            if (r1 && r1.textContent?.includes("Edit Employment")) {
                let r1 = s(t), n = h(r1, t);
                n.length > 0 && e1.push({
                    type: o.FIELD_TYPE.EMPLOYMENT,
                    label: "Employment",
                    required: !0,
                    children: n,
                    options: n.map((e1)=>({
                            type: e1.type,
                            label: e1.label,
                            options: e1.options
                        }))
                });
            }
        });
    }
    return e1;
}
function h(e1, t) {
    let r1 = [], n = new Set, i = e1.map((e1, t)=>({
            rule: e1,
            index: t,
            element: e1.$input
        })), a = (e1)=>{
        let r1 = Array.from(t.querySelectorAll("fieldset")), n = r1.find((t)=>t.querySelector("legend")?.textContent?.trim() === e1);
        return n ? i.filter((e1)=>n.contains(e1.element)) : [];
    }, l = a("Start Date"), s = a("End Date");
    if (l.length >= 2) {
        let e1 = l.find((e1)=>"Month" === e1.rule.label), t = l.find((e1)=>"Year" === e1.rule.label);
        e1 && t && (r1.push({
            type: o.FIELD_TYPE.DATE,
            label: "Start Date",
            required: e1.rule.required,
            $input: e1.element,
            description: "MM/YYYY"
        }), n.add(e1.index), n.add(t.index));
    }
    if (s.length >= 2) {
        let e1 = s.find((e1)=>"Month" === e1.rule.label), t = s.find((e1)=>"Year" === e1.rule.label);
        e1 && t && (r1.push({
            type: o.FIELD_TYPE.DATE,
            label: "End Date",
            required: e1.rule.required,
            $input: e1.element,
            description: "MM/YYYY"
        }), n.add(e1.index), n.add(t.index));
    }
    return e1.forEach((e1, t)=>{
        n.has(t) || r1.push(e1);
    }), r1;
}
function g() {
    let e1 = document.getElementById("apply-step-continue-button");
    return e1 && e1.textContent?.trim() || "";
}
function b(e1) {
    return d(e1).replace(/:\s*$/, "");
}
function y() {
    return document.querySelector("main");
}
function v(e1) {
    let t = e1.getAttribute("aria-labelledby");
    if (t) {
        let e1 = document.getElementById(t), r1 = d(e1?.textContent || "");
        if (r1) return r1;
    }
    if (e1.id) {
        let t = c(e1.id), r1 = document.querySelector(`label[for="${t}"]`), n = d(r1?.textContent || "");
        if (n) return n;
    }
    let r1 = d(e1.getAttribute("aria-label") || "");
    return r1 || e1.value || "";
}
function w(e1) {
    let t = e1.closest("fieldset");
    return t || e1.closest('[role="group"]');
}
function S(e1) {
    let t = e1.querySelector("legend"), r1 = b(t?.textContent || "");
    if (r1) return r1;
    let n = e1.getAttribute("aria-labelledby");
    if (n) {
        let e1 = document.getElementById(n), t = b(e1?.textContent || "");
        if (t) return t;
    }
    return b(e1.getAttribute("aria-label") || "");
}
_c = S;
function E(e1, t) {
    let r1 = t.querySelectorAll(".form-dropdown");
    r1.forEach((t)=>{
        let r1 = t.querySelector(".form-dropdown-label"), n = t.querySelector(".form-dropdown-title"), o = b(r1?.textContent || ""), i = d(n?.textContent || "");
        o && n && (e1[o] = i);
    });
}
_c1 = E;
function x(e1, t) {
    let r1 = Array.from(t.querySelectorAll("h1, h2, h3, h4")), n = r1.find((e1)=>"Disability Status" === b(e1.textContent || ""));
    if (!n?.parentElement) return;
    let o = Array.from(n.parentElement.querySelectorAll("p")), i = o.find((e1)=>{
        let t = d(e1.textContent || "");
        return !!t && !t.toLowerCase().startsWith("completed:");
    }), a = d(i?.textContent || "");
    a && (e1["Disability Status"] = a);
}
function C() {
    let e1 = {}, t = y();
    if (!t) return console.warn("[Apple][Snapshot] skipped: application region is missing"), e1;
    E(e1, t), x(e1, t);
    let r1 = new Set, n = t.querySelectorAll("input, select, textarea");
    return n.forEach((t)=>{
        let n = t, o = [
            "hidden",
            "submit",
            "file",
            "button",
            "reset",
            "password"
        ];
        if (o.includes(n.type)) return;
        let i = n.closest(".form-dropdown");
        if (i && i.querySelector(".form-dropdown-title")) return;
        if ("checkbox" === n.type || "radio" === n.type) {
            let t = n, o = w(t);
            if (o) {
                if (r1.has(o)) return;
                r1.add(o);
                let t = S(o);
                if (!t) return;
                let n = Array.from(o.querySelectorAll('input[type="radio"], input[type="checkbox"]')), i = n.filter((e1)=>e1.checked).map(v).filter(Boolean);
                e1[t] = i.join(", ");
                return;
            }
            if (!t.checked) return;
            let i = u(t);
            if (!i) return;
            e1[b(i)] = v(t);
            return;
        }
        let a = b(u(n));
        a && (e1[a] = n.value || "");
    }), e1;
}
_c2 = C;
var _c, _c1, _c2;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");

},{}]},["aT7Mh","e9kMl"], "e9kMl", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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dGltZS1lNWVkOWFiNDI3NGE5YzA1LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2FwcGxlL3J1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGFwcGxlXFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiYjBhOTg0YzZiYjYzMDVkOFwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGJQU0JLXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9hcHBsZS9ydWxlcy5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiZ2V0UnVsZXNcIiwgKCkgPT4gYSksIG4uZXhwb3J0KHIsIFwiZ2V0RGlzYWJpbGl0eU1vZGFsUnVsZXNcIixcclxuKCkgPT4gbCksIG4uZXhwb3J0KHIsIFwiZ2V0RWR1UnVsZXNcIiwgKCkgPT4gcCksIG4uZXhwb3J0KHIsIFwiZ2V0RXhwUnVsZXNcIiwgKCkgPT4gbSksIG4uZXhwb3J0KHIsXHJcbiAgXCJnZXRTdWJtaXRCdXR0b25UZXh0XCIsICgpID0+IGcpLCBuLmV4cG9ydChyLCBcImdldEZvcm1TbmFwc2hvdFwiLCAoKSA9PiBDKTtcclxudmFyIG8gPSBlKFwifmNvcmUvZW51bXNcIiksXHJcbiAgaSA9IGUoXCJ+dXRpbHMvZGVsYXlcIik7XHJcbmFzeW5jIGZ1bmN0aW9uIGEoZSA9ICExKSB7XHJcbiAgbGV0IHQgPSBbXSxcclxuICAgIHIgPSBhd2FpdCBwKCk7XHJcbiAgdC5wdXNoKC4uLnIpO1xyXG4gIGxldCBuID0gYXdhaXQgbSgpO1xyXG4gIHQucHVzaCguLi5uKTtcclxuICBsZXQgbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwbHktcHJvZmlsZUluZm9ybWF0aW9uLWZvcm1cIik7XHJcbiAgcmV0dXJuIChvIHx8IChvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikgfHwgZG9jdW1lbnQuYm9keSksIG8gJiYgdC5wdXNoKC4uLnMobykpLCAwICE9PVxyXG4gICAgdC5sZW5ndGggfHwgZSkgPyB0IDogKGF3YWl0ICgwLCBpLmRlbGF5KSgxNTAwKSwgYXdhaXQgYSghMCkpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gbCgpIHtcclxuICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZmRpc2Nsb3N1cmUtZGlzYWJpbGl0eW1vZGFsLW1vZGFsXCIpO1xyXG4gIGlmICghZSkgcmV0dXJuIFtdO1xyXG4gIGxldCB0ID0gW10sXHJcbiAgICByID0gZS5xdWVyeVNlbGVjdG9yKFwiI2Rpc2FiaWxpdHlmb3JtXCIpO1xyXG4gIGlmICghcikgcmV0dXJuIHQ7XHJcbiAgbGV0IG4gPSByLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkaXNhYmlsaXR5QWNrTmFtZVwiXTpub3QoW2Rpc2FibGVkXSknKTtcclxuICBpZiAobikge1xyXG4gICAgbGV0IGUgPSByLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cImRpc2FiaWxpdHlBY2tOYW1lXCJdJyk7XHJcbiAgICB0LnB1c2goe1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgbGFiZWw6IFwiTmFtZVwiLFxyXG4gICAgICByZXF1aXJlZDogITAsXHJcbiAgICAgICRpbnB1dDogbixcclxuICAgICAgJGxhYmVsOiBlIHx8IG5cclxuICAgIH0pXHJcbiAgfVxyXG4gIGxldCBpID0gci5xdWVyeVNlbGVjdG9yKFwiI2Rpc2FiaWxpdHlfb3B0aW9uc1wiKTtcclxuICBpZiAoaSkge1xyXG4gICAgbGV0IGUgPSBBcnJheS5mcm9tKGkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJkaXNhYmlsaXR5U3RhdHVzQ2RcIl0nKSksXHJcbiAgICAgIHIgPSBlLm1hcChlID0+IHtcclxuICAgICAgICBsZXQgdCA9IGkucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApO1xyXG4gICAgICAgIHJldHVybiB0Py50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCJcclxuICAgICAgfSkuZmlsdGVyKEJvb2xlYW4pO1xyXG4gICAgZS5sZW5ndGggPiAwICYmIHQucHVzaCh7XHJcbiAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5DSEVDS0JPWCxcclxuICAgICAgbGFiZWw6IFwiRGlzYWJpbGl0eSBTdGF0dXNcIixcclxuICAgICAgcmVxdWlyZWQ6ICEwLFxyXG4gICAgICAkY2hlY2tib3hzOiBlLFxyXG4gICAgICAkbGFiZWw6IGksXHJcbiAgICAgIG9wdGlvbnM6IHJcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHMoZSwgdCA9IG5ldyBTZXQpIHtcclxuICBsZXQgciA9IFtdLFxyXG4gICAgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFyc2VkbW9kYWwtcmV2aWV3LWVkdWNhdGlvbi10aXRsZVwiKSxcclxuICAgIGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcnNlZG1vZGFsLXJldmlldy1lbXBsb3ltZW50cy10aXRsZVwiKSxcclxuICAgIGEgPSB0ID0+ICEhKG4gJiYgbi5jb250YWlucyh0KSAmJiAhbi5jb250YWlucyhlKSAmJiBuICE9PSBlIHx8IGkgJiYgaS5jb250YWlucyh0KSAmJiAhaVxyXG4gICAgICAuY29udGFpbnMoZSkgJiYgaSAhPT0gZSksXHJcbiAgICBsID0gZS5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0XCIpO1xyXG4gIGwuZm9yRWFjaChlID0+IHtcclxuICAgIGlmICh0LmhhcyhlKSB8fCBhKGUpKSByZXR1cm47XHJcbiAgICBsZXQgbiA9IHUoZSk7XHJcbiAgICBuICYmIChyLnB1c2goe1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgICBsYWJlbDogbixcclxuICAgICAgJGlucHV0OiBlLFxyXG4gICAgICAkbGFiZWw6IGUucGFyZW50RWxlbWVudCxcclxuICAgICAgcmVxdWlyZWQ6IGYoZSksXHJcbiAgICAgIG9wdGlvbnM6IEFycmF5LmZyb20oZS5vcHRpb25zKS5tYXAoZSA9PiBlLnRleHQpLmZpbHRlcihlID0+IGUgJiYgIWUuaW5jbHVkZXMoXHJcbiAgICAgICAgXCJNb250aFwiKSAmJiAhZS5pbmNsdWRlcyhcIlllYXJcIikgJiYgIWUuaW5jbHVkZXMoXCJDb3VudHJ5L1JlZ2lvblwiKSlcclxuICAgIH0pLCB0LmFkZChlKSlcclxuICB9KTtcclxuICBsZXQgcyA9IGUucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtLWRyb3Bkb3duXCIpO1xyXG4gIHMuZm9yRWFjaChlID0+IHtcclxuICAgIGlmICh0LmhhcyhlKSB8fCBhKGUpIHx8IGUucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKSkgcmV0dXJuO1xyXG4gICAgbGV0IG4gPSBlLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1kcm9wZG93bi1sYWJlbFwiKTtcclxuICAgIGlmICghbikgcmV0dXJuO1xyXG4gICAgbGV0IGkgPSBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bCBsaSBpbnB1dFwiKTtcclxuICAgIDAgIT09IGkubGVuZ3RoICYmIChyLnB1c2goe1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgICBsYWJlbDogZChuLnRleHRDb250ZW50IHx8IFwiXCIpLFxyXG4gICAgICAkaW5wdXQ6IGUsXHJcbiAgICAgICRsYWJlbDogbixcclxuICAgICAgcmVxdWlyZWQ6IGYoZSksXHJcbiAgICAgIG9wdGlvbnM6IEFycmF5LmZyb20oaSkubWFwKGUgPT4gZS52YWx1ZSlcclxuICAgIH0pLCB0LmFkZChlKSlcclxuICB9KTtcclxuICBsZXQgYyA9IGUucXVlcnlTZWxlY3RvckFsbChcclxuICAgICdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbdHlwZT1cInJhZGlvXCJdKTpub3QoW3R5cGU9XCJjaGVja2JveFwiXSk6bm90KFt0eXBlPVwiZmlsZVwiXSksIHRleHRhcmVhJ1xyXG4gICAgKTtcclxuICBjLmZvckVhY2goZSA9PiB7XHJcbiAgICBpZiAodC5oYXMoZSkgfHwgYShlKSkgcmV0dXJuO1xyXG4gICAgbGV0IG4gPSB1KGUpO1xyXG4gICAgaWYgKFwiYXBwbHktc2tpbGxzLXR5cGVhaGVhZC1zdWdnZXN0aW9uLXRleHRib3hcIiA9PT0gZS5pZCAmJiAobiA9IFwiU2tpbGxzXCIpLCAhbikgcmV0dXJuO1xyXG4gICAgbGV0IGkgPSBcImxpc3Rib3hcIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhhc3BvcHVwXCIpO1xyXG4gICAgci5wdXNoKHtcclxuICAgICAgdHlwZTogaSA/IG8uRklFTERfVFlQRS5MSVNUQk9YIDogby5GSUVMRF9UWVBFLlRFWFQsXHJcbiAgICAgIGxhYmVsOiBuLFxyXG4gICAgICAkaW5wdXQ6IGUsXHJcbiAgICAgICRsYWJlbDogZS5wYXJlbnRFbGVtZW50LFxyXG4gICAgICByZXF1aXJlZDogZihlKVxyXG4gICAgfSksIHQuYWRkKGUpXHJcbiAgfSk7XHJcbiAgbGV0IHAgPSBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJmaWVsZHNldFwiKTtcclxuICByZXR1cm4gcC5mb3JFYWNoKGUgPT4ge1xyXG4gICAgaWYgKGEoZSkpIHJldHVybjtcclxuICAgIGxldCBuID0gZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcclxuICAgIGlmICgwID09PSBuLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgbGV0IGkgPSBlLnF1ZXJ5U2VsZWN0b3IoXCJsZWdlbmRcIiksXHJcbiAgICAgIGwgPSBpID8gaS50ZXh0Q29udGVudD8udHJpbSgpIDogXCJcIjtcclxuICAgIGwgJiYgKHIucHVzaCh7XHJcbiAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5DSEVDS0JPWCxcclxuICAgICAgbGFiZWw6IGwsXHJcbiAgICAgICRjaGVja2JveHM6IEFycmF5LmZyb20obiksXHJcbiAgICAgICRsYWJlbDogaSxcclxuICAgICAgcmVxdWlyZWQ6IGYoblswXSksXHJcbiAgICAgIG9wdGlvbnM6IEFycmF5LmZyb20obikubWFwKHQgPT4ge1xyXG4gICAgICAgIGxldCByID0gdC5pZCxcclxuICAgICAgICAgIG4gPSBlLnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7cn1cIl1gKTtcclxuICAgICAgICByZXR1cm4gbiAmJiBuLnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIlxyXG4gICAgICB9KS5maWx0ZXIoQm9vbGVhbilcclxuICAgIH0pLCBuLmZvckVhY2goZSA9PiB0LmFkZChlKSkpXHJcbiAgfSksIHJcclxufVxyXG5cclxuZnVuY3Rpb24gdShlKSB7XHJcbiAgbGV0IHQgPSBlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiKTtcclxuICBpZiAodCkge1xyXG4gICAgbGV0IGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KTtcclxuICAgIGlmIChlKSByZXR1cm4gZChlLnRleHRDb250ZW50IHx8IFwiXCIpXHJcbiAgfVxyXG4gIGlmIChlLnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0tdGV4dGJveFwiKSB8fCBlLnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgXCJmb3JtLWRyb3Bkb3duXCIpKSB7XHJcbiAgICBsZXQgdCA9IGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tdGV4dGJveC1sYWJlbCwgLmZvcm0tZHJvcGRvd24tbGFiZWxcIik7XHJcbiAgICBpZiAodCkgcmV0dXJuIGQodC50ZXh0Q29udGVudCB8fCBcIlwiKVxyXG4gIH1cclxuICBsZXQgciA9IGUuY2xvc2VzdChcIi50eXBlYWhlYWQtY29udGFpbmVyXCIpO1xyXG4gIGlmIChyKSB7XHJcbiAgICBsZXQgZSA9IHIucXVlcnlTZWxlY3RvcihcIi5mb3JtLXRleHRib3gtbGFiZWxcIik7XHJcbiAgICBpZiAoZSkgcmV0dXJuIGQoZS50ZXh0Q29udGVudCB8fCBcIlwiKVxyXG4gIH1cclxuICBsZXQgbiA9IGUuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIik7XHJcbiAgaWYgKG4pIHJldHVybiBkKG4pO1xyXG4gIGlmIChlLmlkKSB7XHJcbiAgICBsZXQgdCA9IGMoZS5pZCksXHJcbiAgICAgIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3R9XCJdYCk7XHJcbiAgICBpZiAocikgcmV0dXJuIGQoci50ZXh0Q29udGVudCB8fCBcIlwiKVxyXG4gIH1cclxuICByZXR1cm4gXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBjKGUpIHtcclxuICByZXR1cm4gZS5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIikucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGQoZSkge1xyXG4gIHJldHVybiBlLnJlcGxhY2UoL1xcKG9wdGlvbmFsXFwpL2dpLCBcIlwiKS5yZXBsYWNlKC9cXCovZywgXCJcIikudHJpbSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGYoZSkge1xyXG4gIHJldHVybiAhIWUuaGFzQXR0cmlidXRlKFwicmVxdWlyZWRcIikgfHwgXCJ0cnVlXCIgPT09IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHAoKSB7XHJcbiAgbGV0IGUgPSBbXSxcclxuICAgIHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcnNlZG1vZGFsLXJldmlldy1lZHVjYXRpb24tdGl0bGVcIik7XHJcbiAgaWYgKCF0KSByZXR1cm4gZTtcclxuICBsZXQgciA9IHQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cInBhcnNlZG1vZGFsLWVkdS1mb3JtLVwiXScpO1xyXG4gIHJldHVybiByLmZvckVhY2godCA9PiB7XHJcbiAgICBsZXQgciA9IHModCk7XHJcbiAgICByLmxlbmd0aCA+IDAgJiYgZS5wdXNoKHtcclxuICAgICAgdHlwZTogby5GSUVMRF9UWVBFLkVEVUNBVElPTixcclxuICAgICAgbGFiZWw6IFwiRWR1Y2F0aW9uXCIsXHJcbiAgICAgIHJlcXVpcmVkOiAhMCxcclxuICAgICAgY2hpbGRyZW46IHIsXHJcbiAgICAgIG9wdGlvbnM6IHIubWFwKGUgPT4gKHtcclxuICAgICAgICB0eXBlOiBlLnR5cGUsXHJcbiAgICAgICAgbGFiZWw6IGUubGFiZWwsXHJcbiAgICAgICAgb3B0aW9uczogZS5vcHRpb25zXHJcbiAgICAgIH0pKVxyXG4gICAgfSlcclxuICB9KSwgZVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIG0oKSB7XHJcbiAgbGV0IGUgPSBbXSxcclxuICAgIHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcnNlZG1vZGFsLXJldmlldy1lbXBsb3ltZW50cy10aXRsZVwiKTtcclxuICBpZiAoIXQpIHJldHVybiBlO1xyXG4gIGxldCByID0gdC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImdyb3VwXCJdW2FyaWEtbGFiZWw9XCJFZGl0IEVtcGxveW1lbnQgU3VtbWFyeVwiXScpO1xyXG4gIGlmIChyKSB7XHJcbiAgICBsZXQgdCA9IHIucXVlcnlTZWxlY3RvckFsbChcImZpZWxkc2V0XCIpO1xyXG4gICAgdC5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICBsZXQgciA9IHQucXVlcnlTZWxlY3RvcihcImxlZ2VuZFwiKTtcclxuICAgICAgaWYgKHIgJiYgci50ZXh0Q29udGVudD8uaW5jbHVkZXMoXCJFZGl0IEVtcGxveW1lbnRcIikpIHtcclxuICAgICAgICBsZXQgciA9IHModCksXHJcbiAgICAgICAgICBuID0gaChyLCB0KTtcclxuICAgICAgICBuLmxlbmd0aCA+IDAgJiYgZS5wdXNoKHtcclxuICAgICAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5FTVBMT1lNRU5ULFxyXG4gICAgICAgICAgbGFiZWw6IFwiRW1wbG95bWVudFwiLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6ICEwLFxyXG4gICAgICAgICAgY2hpbGRyZW46IG4sXHJcbiAgICAgICAgICBvcHRpb25zOiBuLm1hcChlID0+ICh7XHJcbiAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcclxuICAgICAgICAgICAgbGFiZWw6IGUubGFiZWwsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IGUub3B0aW9uc1xyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIGVcclxufVxyXG5cclxuZnVuY3Rpb24gaChlLCB0KSB7XHJcbiAgbGV0IHIgPSBbXSxcclxuICAgIG4gPSBuZXcgU2V0LFxyXG4gICAgaSA9IGUubWFwKChlLCB0KSA9PiAoe1xyXG4gICAgICBydWxlOiBlLFxyXG4gICAgICBpbmRleDogdCxcclxuICAgICAgZWxlbWVudDogZS4kaW5wdXRcclxuICAgIH0pKSxcclxuICAgIGEgPSBlID0+IHtcclxuICAgICAgbGV0IHIgPSBBcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcImZpZWxkc2V0XCIpKSxcclxuICAgICAgICBuID0gci5maW5kKHQgPT4gdC5xdWVyeVNlbGVjdG9yKFwibGVnZW5kXCIpPy50ZXh0Q29udGVudD8udHJpbSgpID09PSBlKTtcclxuICAgICAgcmV0dXJuIG4gPyBpLmZpbHRlcihlID0+IG4uY29udGFpbnMoZS5lbGVtZW50KSkgOiBbXVxyXG4gICAgfSxcclxuICAgIGwgPSBhKFwiU3RhcnQgRGF0ZVwiKSxcclxuICAgIHMgPSBhKFwiRW5kIERhdGVcIik7XHJcbiAgaWYgKGwubGVuZ3RoID49IDIpIHtcclxuICAgIGxldCBlID0gbC5maW5kKGUgPT4gXCJNb250aFwiID09PSBlLnJ1bGUubGFiZWwpLFxyXG4gICAgICB0ID0gbC5maW5kKGUgPT4gXCJZZWFyXCIgPT09IGUucnVsZS5sYWJlbCk7XHJcbiAgICBlICYmIHQgJiYgKHIucHVzaCh7XHJcbiAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5EQVRFLFxyXG4gICAgICBsYWJlbDogXCJTdGFydCBEYXRlXCIsXHJcbiAgICAgIHJlcXVpcmVkOiBlLnJ1bGUucmVxdWlyZWQsXHJcbiAgICAgICRpbnB1dDogZS5lbGVtZW50LFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJNTS9ZWVlZXCJcclxuICAgIH0pLCBuLmFkZChlLmluZGV4KSwgbi5hZGQodC5pbmRleCkpXHJcbiAgfVxyXG4gIGlmIChzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICBsZXQgZSA9IHMuZmluZChlID0+IFwiTW9udGhcIiA9PT0gZS5ydWxlLmxhYmVsKSxcclxuICAgICAgdCA9IHMuZmluZChlID0+IFwiWWVhclwiID09PSBlLnJ1bGUubGFiZWwpO1xyXG4gICAgZSAmJiB0ICYmIChyLnB1c2goe1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuREFURSxcclxuICAgICAgbGFiZWw6IFwiRW5kIERhdGVcIixcclxuICAgICAgcmVxdWlyZWQ6IGUucnVsZS5yZXF1aXJlZCxcclxuICAgICAgJGlucHV0OiBlLmVsZW1lbnQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1NL1lZWVlcIlxyXG4gICAgfSksIG4uYWRkKGUuaW5kZXgpLCBuLmFkZCh0LmluZGV4KSlcclxuICB9XHJcbiAgcmV0dXJuIGUuZm9yRWFjaCgoZSwgdCkgPT4ge1xyXG4gICAgbi5oYXModCkgfHwgci5wdXNoKGUpXHJcbiAgfSksIHJcclxufVxyXG5cclxuZnVuY3Rpb24gZygpIHtcclxuICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwbHktc3RlcC1jb250aW51ZS1idXR0b25cIik7XHJcbiAgcmV0dXJuIGUgJiYgZS50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gYihlKSB7XHJcbiAgcmV0dXJuIGQoZSkucmVwbGFjZSgvOlxccyokLywgXCJcIilcclxufVxyXG5cclxuZnVuY3Rpb24geSgpIHtcclxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIilcclxufVxyXG5cclxuZnVuY3Rpb24gdihlKSB7XHJcbiAgbGV0IHQgPSBlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiKTtcclxuICBpZiAodCkge1xyXG4gICAgbGV0IGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KSxcclxuICAgICAgciA9IGQoZT8udGV4dENvbnRlbnQgfHwgXCJcIik7XHJcbiAgICBpZiAocikgcmV0dXJuIHJcclxuICB9XHJcbiAgaWYgKGUuaWQpIHtcclxuICAgIGxldCB0ID0gYyhlLmlkKSxcclxuICAgICAgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7dH1cIl1gKSxcclxuICAgICAgbiA9IGQocj8udGV4dENvbnRlbnQgfHwgXCJcIik7XHJcbiAgICBpZiAobikgcmV0dXJuIG5cclxuICB9XHJcbiAgbGV0IHIgPSBkKGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSB8fCBcIlwiKTtcclxuICByZXR1cm4gciB8fCBlLnZhbHVlIHx8IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gdyhlKSB7XHJcbiAgbGV0IHQgPSBlLmNsb3Nlc3QoXCJmaWVsZHNldFwiKTtcclxuICByZXR1cm4gdCB8fCBlLmNsb3Nlc3QoJ1tyb2xlPVwiZ3JvdXBcIl0nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTKGUpIHtcclxuICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcImxlZ2VuZFwiKSxcclxuICAgIHIgPSBiKHQ/LnRleHRDb250ZW50IHx8IFwiXCIpO1xyXG4gIGlmIChyKSByZXR1cm4gcjtcclxuICBsZXQgbiA9IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpO1xyXG4gIGlmIChuKSB7XHJcbiAgICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG4pLFxyXG4gICAgICB0ID0gYihlPy50ZXh0Q29udGVudCB8fCBcIlwiKTtcclxuICAgIGlmICh0KSByZXR1cm4gdFxyXG4gIH1cclxuICByZXR1cm4gYihlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgfHwgXCJcIilcclxufVxyXG5cclxuZnVuY3Rpb24gRShlLCB0KSB7XHJcbiAgbGV0IHIgPSB0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1kcm9wZG93blwiKTtcclxuICByLmZvckVhY2godCA9PiB7XHJcbiAgICBsZXQgciA9IHQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWRyb3Bkb3duLWxhYmVsXCIpLFxyXG4gICAgICBuID0gdC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZHJvcGRvd24tdGl0bGVcIiksXHJcbiAgICAgIG8gPSBiKHI/LnRleHRDb250ZW50IHx8IFwiXCIpLFxyXG4gICAgICBpID0gZChuPy50ZXh0Q29udGVudCB8fCBcIlwiKTtcclxuICAgIG8gJiYgbiAmJiAoZVtvXSA9IGkpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24geChlLCB0KSB7XHJcbiAgbGV0IHIgPSBBcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcImgxLCBoMiwgaDMsIGg0XCIpKSxcclxuICAgIG4gPSByLmZpbmQoZSA9PiBcIkRpc2FiaWxpdHkgU3RhdHVzXCIgPT09IGIoZS50ZXh0Q29udGVudCB8fCBcIlwiKSk7XHJcbiAgaWYgKCFuPy5wYXJlbnRFbGVtZW50KSByZXR1cm47XHJcbiAgbGV0IG8gPSBBcnJheS5mcm9tKG4ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicFwiKSksXHJcbiAgICBpID0gby5maW5kKGUgPT4ge1xyXG4gICAgICBsZXQgdCA9IGQoZS50ZXh0Q29udGVudCB8fCBcIlwiKTtcclxuICAgICAgcmV0dXJuICEhdCAmJiAhdC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoXCJjb21wbGV0ZWQ6XCIpXHJcbiAgICB9KSxcclxuICAgIGEgPSBkKGk/LnRleHRDb250ZW50IHx8IFwiXCIpO1xyXG4gIGEgJiYgKGVbXCJEaXNhYmlsaXR5IFN0YXR1c1wiXSA9IGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEMoKSB7XHJcbiAgbGV0IGUgPSB7fSxcclxuICAgIHQgPSB5KCk7XHJcbiAgaWYgKCF0KSByZXR1cm4gY29uc29sZS53YXJuKFwiW0FwcGxlXVtTbmFwc2hvdF0gc2tpcHBlZDogYXBwbGljYXRpb24gcmVnaW9uIGlzIG1pc3NpbmdcIiksIGU7XHJcbiAgRShlLCB0KSwgeChlLCB0KTtcclxuICBsZXQgciA9IG5ldyBTZXQsXHJcbiAgICBuID0gdC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIik7XHJcbiAgcmV0dXJuIG4uZm9yRWFjaCh0ID0+IHtcclxuICAgIGxldCBuID0gdCxcclxuICAgICAgbyA9IFtcImhpZGRlblwiLCBcInN1Ym1pdFwiLCBcImZpbGVcIiwgXCJidXR0b25cIiwgXCJyZXNldFwiLCBcInBhc3N3b3JkXCJdO1xyXG4gICAgaWYgKG8uaW5jbHVkZXMobi50eXBlKSkgcmV0dXJuO1xyXG4gICAgbGV0IGkgPSBuLmNsb3Nlc3QoXCIuZm9ybS1kcm9wZG93blwiKTtcclxuICAgIGlmIChpICYmIGkucXVlcnlTZWxlY3RvcihcIi5mb3JtLWRyb3Bkb3duLXRpdGxlXCIpKSByZXR1cm47XHJcbiAgICBpZiAoXCJjaGVja2JveFwiID09PSBuLnR5cGUgfHwgXCJyYWRpb1wiID09PSBuLnR5cGUpIHtcclxuICAgICAgbGV0IHQgPSBuLFxyXG4gICAgICAgIG8gPSB3KHQpO1xyXG4gICAgICBpZiAobykge1xyXG4gICAgICAgIGlmIChyLmhhcyhvKSkgcmV0dXJuO1xyXG4gICAgICAgIHIuYWRkKG8pO1xyXG4gICAgICAgIGxldCB0ID0gUyhvKTtcclxuICAgICAgICBpZiAoIXQpIHJldHVybjtcclxuICAgICAgICBsZXQgbiA9IEFycmF5LmZyb20oby5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0sIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpKSxcclxuICAgICAgICAgIGkgPSBuLmZpbHRlcihlID0+IGUuY2hlY2tlZCkubWFwKHYpLmZpbHRlcihCb29sZWFuKTtcclxuICAgICAgICBlW3RdID0gaS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0LmNoZWNrZWQpIHJldHVybjtcclxuICAgICAgbGV0IGkgPSB1KHQpO1xyXG4gICAgICBpZiAoIWkpIHJldHVybjtcclxuICAgICAgZVtiKGkpXSA9IHYodCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IGEgPSBiKHUobikpO1xyXG4gICAgYSAmJiAoZVthXSA9IG4udmFsdWUgfHwgXCJcIilcclxuICB9KSwgZVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuYmI2MzA1ZDguanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);