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
})({"k4c5a":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\ashby.js",
    "bundleId": "fd20214a7adf5e78",
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
var j = z(require("8689450d0d2d57cb"));
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

},{"8689450d0d2d57cb":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"aIzpH":[function(require,module,exports) {
/**
 * Parcel module id: 9H7dQ
 * Resolved path: src/contents/sites/ashby.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/ashby/answer -> Cpwm9  =>  src/contents/sites/ashby/answer.js
 *   ~contents/sites/ashby/canonical-search -> 99dYo  =>  src/contents/sites/ashby/canonical-search.js
 *   ~contents/sites/ashby/location-operation -> e158F  =>  src/contents/sites/ashby/location-operation.js
 *   ~contents/sites/ashby/operations -> 3giV6  =>  src/contents/sites/ashby/operations.js
 *   ~contents/sites/ashby/rules -> 5iMv1  =>  src/contents/sites/ashby/rules.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/profile-location-original-answer -> 8kwJN  =>  src/contents/sites/profile-location-original-answer.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Ashby", ()=>E), n.export(r, "isAshbyMainCountryRule", ()=>x);
var o = e("~core/dom"), i = e("@plasmohq/messaging"), a = e("~contents/methods/answer"), l = e("~contents/methods/dom"), s = e("~contents/sites/ashby/answer"), u = e("~contents/sites/ashby/canonical-search"), c = e("~contents/sites/ashby/location-operation"), d = e("~contents/sites/ashby/operations"), f = e("~contents/sites/ashby/rules"), p = e("~contents/sites/base-filler"), m = e("~contents/sites/profile-location-original-answer"), h = e("~core/enums"), g = e("~core/phone-country-code"), b = e("~core/xpath"), y = e("~store/autofillInfo"), v = e("~utils/string");
let w = [
    "school (",
    "graduation date (",
    "degree (",
    "discipline (",
    "major (",
    "gpa ("
], S = [
    './/div[contains(@class, "application-form-success-container") and contains(translate(., "SUCCESS", "success"), "success")]'
];
class E extends p.BaseFiller {
    constructor(){
        super(), this.submitDOMQuery = './/button[contains(@class, "ashby-application-form-submit-button")]', this.initialCoverLetterObserver = null, this.currentRunCountry = "", this.scheduleInitialCoverLetterCheck();
    }
    getFieldHandlers() {
        return {
            [h.FIELD_TYPE.TEXT]: {
                handler: (e1, t)=>(0, d.fillInputTextField)(e1.$input, t, e1.label, (0, g.resolvePhoneCountryCodeAnswer)(this.answer)),
                options: {
                    expectArray: !0
                }
            },
            [h.FIELD_TYPE.CHECKBOX]: {
                handler: (e1, t)=>(0, d.fillCheckboxField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [h.FIELD_TYPE.SELECT]: {
                handler: (e1, t)=>(0, d.fillSelectField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [h.FIELD_TYPE.MULTI_SELECT]: {
                handler: (e1, t)=>(0, d.fillSelectField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [h.FIELD_TYPE.ASHBY_SEARCH]: {
                handler: async (e1, t)=>{
                    if (!(0, c.isAshbyGeoLocationRule)(e1)) return (0, d.fillComboboxField)(e1, t);
                    let r1 = String(Array.isArray(t) ? t[0] ?? "" : t ?? "").trim(), n = (0, c.getAshbyGeoLocationTypes)(e1), o = (0, m.getProfileLocationOriginalAnswer)(this.answer, {
                        locationTypes: n
                    }), a = o.value || r1;
                    if (e1.$input.setAttribute?.("data-jr-ashby-resolve-stage", "started"), console.info("[Ashby][GeoLocation] resolve-start", {
                        label: e1.label,
                        answerSource: o.value ? o.source : "regular",
                        hasOriginalAnswer: !!a,
                        locationTypes: n
                    }), !a) throw console.warn("[Ashby][GeoLocation] resolve-skipped", {
                        label: e1.label,
                        reason: "empty-original-answer"
                    }), Error("Ashby GeoLocation answer is empty");
                    let l = (0, c.buildAshbyLocationOperation)({
                        currentUrl: this.getCurrentPageUrl(),
                        originalAnswer: a,
                        locationTypes: n
                    }), s = await (0, i.sendToBackground)({
                        name: "resolveAutofillOperation",
                        body: {
                            operation: l,
                            source: "ashby"
                        }
                    });
                    e1.$input.setAttribute?.("data-jr-ashby-resolve-action", s?.result?.action ?? "missing"), console.info("[Ashby][GeoLocation] resolve-result", {
                        label: e1.label,
                        action: s?.result?.action ?? "missing",
                        selectedCount: s?.result?.selected_values?.length ?? 0
                    });
                    let u = (0, c.getAshbyResolvedLocationValue)(s);
                    if (!u) throw e1.$input.setAttribute?.("data-jr-ashby-resolve-stage", "empty-result"), Error("Ashby GeoLocation resolve returned empty");
                    await (0, d.fillResolvedLocationCombobox)(e1, u);
                },
                options: {
                    expectArray: !0
                }
            }
        };
    }
    getSiteName() {
        return "ashby";
    }
    getCurrentPageUrl() {
        return window.location.href;
    }
    async runPreFillForm() {
        this.currentRunCountry = "", (0, u.clearAshbyCanonicalSchoolCache)();
        let e1 = await (0, y.useAutofillInfoStore).getState().fetchAutofillInfo().catch(()=>null);
        this.currentRunCountry = String(e1?.location?.country ?? "").trim(), this.taskQueue.add(d.preFillForm), await this.taskQueue.run();
    }
    async extractFormRules() {
        return await (0, f.extractRules)();
    }
    formatAnswer(e1) {
        return (0, s.formatAnswer)(e1);
    }
    async getAutofillSnapshot() {
        return (0, f.getFormSnapshot)();
    }
    async getSubmitSnapshot() {
        return (0, f.getFormSnapshot)();
    }
    getAdditionalAutofillSnapshotData() {
        let e1 = (0, f.getAshbyEducationSnapshot)();
        return e1.length > 0 ? {
            education: e1
        } : {};
    }
    getAdditionalSubmitSnapshotData() {
        let e1 = (0, f.getAshbyEducationSnapshot)();
        return e1.length > 0 ? {
            education: e1
        } : {};
    }
    getSubmitButtonSelector() {
        return this.submitDOMQuery;
    }
    getSubmitSuccessSelectors() {
        return S;
    }
    scheduleInitialCoverLetterCheck() {
        if ("undefined" == typeof window || "undefined" == typeof document) return;
        let e1 = ()=>{
            this.checkCoverLetter();
        }, t = [
            500,
            1500,
            3e3,
            6e3,
            1e4
        ];
        t.forEach((t)=>{
            window.setTimeout(e1, t);
        }), "undefined" != typeof MutationObserver && document.documentElement && (this.initialCoverLetterObserver = new MutationObserver(e1), this.initialCoverLetterObserver.observe(document.documentElement, {
            childList: !0,
            subtree: !0
        }), window.setTimeout(()=>{
            this.initialCoverLetterObserver?.disconnect(), this.initialCoverLetterObserver = null;
        }, 1e4));
    }
    async doFillForm(e1 = !1) {
        await this.initializeFillForm();
        let t = this.prepareCoverLetterRules(await this.extractFormRules()), r1 = await this.requestFormAnswers(t, e1);
        if ("string" == typeof r1) return r1;
        r1 && (this.answer = r1), (0, u.prefetchAshbySchoolCanonicalNames)(this.answer?.education);
        let n = C(t, this.answer.regular);
        this.progressTracker.setFieldsRequiredStatus(n);
        let o = n.filter((e1)=>e1.type !== h.FIELD_TYPE.EDUCATION), i = o.filter((e1)=>!x(e1));
        return await this.fillRegularFields(i), await this.fillCountryField(o), await this.fillEducationHistory(), await this.fillCoverLetterFields(), await this.bindSubmitButtonTracking(n), await this.handleFileUploads(), await this.finalizeFillForm();
    }
    async fillCountryField(e1) {
        let t = e1.find(x);
        if (!t) return;
        if (!this.currentRunCountry) {
            this.progressTracker.updateMissedProgress(t.label);
            return;
        }
        let r1 = t, n = r1.$input;
        n && ("text" === n.type || "TEXTAREA" === n.tagName) && (this.taskQueue.add(async ()=>{
            let e1 = await (0, d.fillAshbyCountryCombobox)(n, this.currentRunCountry);
            e1 && this.progressTracker.updateFilledProgress(r1.label);
        }), await this.taskQueue.run());
    }
    async handleFileUploads() {
        if (this.disableUploadResume ? (await (0, d.clearExistingResume)(document), this.progressTracker.updateMissedProgress("Resume/CV")) : this.taskQueue.add(async ()=>{
            await (0, d.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        }), this.coverLetter?.coverLetterId) {
            let e1 = this.coverLetter;
            this.taskQueue.add(async ()=>{
                await (0, d.uploadCoverLetter)(e1, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
            });
        }
        await this.taskQueue.run();
    }
    async fillEducationHistory() {
        let e1 = Array.isArray(this.answer?.education) ? this.answer.education : [];
        if (0 === e1.length) return;
        await (0, d.syncEducationHistorySections)(e1.length);
        let t = (0, f.getEducationRules)();
        (0, o.setSectionResultFocusRules)(h.FIELD_TYPE.EDUCATION, t);
        let r1 = (0, a.getEducationOperations)(t, e1, this.operationConfig, void 0, (0, a.sectionProgressCallbacks)("Education History", this.progressTracker));
        for (let e1 of r1)this.taskQueue.add(e1);
        await this.taskQueue.run();
    }
    async checkCoverLetter() {
        (0, l.postCoverLetterStatus)((0, d.getAshbyCoverLetterStatus)());
    }
    submitApplication() {
        let e1 = (0, b.getFirstOrderedNode)(this.submitDOMQuery);
        if (e1) {
            e1?.click();
            let t = new MutationObserver((e1, t)=>{
                for (let t of e1)"childList" === t.type && t.addedNodes.forEach((e1)=>{
                    e1.nodeType === Node.ELEMENT_NODE && e1.classList.contains("ashby-application-form-success-container") && window.top?.postMessage(v.cleanObject({
                        type: h.MESSAGE_EVENTS.agentSubmitClicked
                    }), {
                        targetOrigin: "*"
                    });
                });
            }), r1 = {
                childList: !0,
                subtree: !0
            };
            t.observe(document.body, r1);
        }
    }
}
function x(e1) {
    let t = String(e1.label ?? "").replace(/(?:\s*\*)+\s*$/g, "").replace(/\s+/g, " ").trim().toLowerCase();
    if ("country" !== t) return !1;
    let r1 = e1.$input;
    return !!r1?.closest?.('[data-field-path="_systemfield_country"]');
}
function C(e1, t) {
    return e1.filter((e1)=>A(e1, t));
}
_c = C;
function A(e1, t) {
    if (!k(e1.label)) return !0;
    let r1 = T(e1.label);
    if (!r1) return !0;
    let n = F(r1, t);
    return !!n && I(t[n]);
}
_c1 = A;
function k(e1) {
    let t = e1.toLowerCase();
    return w.some((e1)=>t.startsWith(e1));
}
function T(e1) {
    let t = e1.match(/\(([^)]+)\)\s*$/);
    return t?.[1]?.trim().toLowerCase() || "";
}
_c2 = T;
function F(e1, t) {
    for (let r1 of Object.keys(t || {}))if (r1.toLowerCase().startsWith("school (") && T(r1) === e1) return r1;
    return "";
}
_c3 = F;
function I(e1) {
    return Array.isArray(e1) ? e1.some((e1)=>"" !== String(e1 ?? "").trim()) : "" !== String(e1 ?? "").trim();
}
_c4 = I;
var _c, _c1, _c2, _c3, _c4;
$RefreshReg$(_c, "C");
$RefreshReg$(_c1, "A");
$RefreshReg$(_c2, "T");
$RefreshReg$(_c3, "F");
$RefreshReg$(_c4, "I");

},{}]},["k4c5a","aIzpH"], "aIzpH", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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RUFBQyxFQUFFLENBQUM7SUFDYixPQUFPLEdBQUUsT0FBTyxDQUFBLEtBQUssRUFBRSxJQUFHO0FBQzVCO0tBRlM7QUFJVCxTQUFTLEVBQUUsRUFBQyxFQUFFLENBQUM7SUFDYixJQUFJLENBQUMsRUFBRSxHQUFFLFFBQVEsT0FBTyxDQUFDO0lBQ3pCLElBQUksS0FBSSxFQUFFLEdBQUU7SUFDWixJQUFJLENBQUMsSUFBRyxPQUFPLENBQUM7SUFDaEIsSUFBSSxJQUFJLEVBQUUsSUFBRztJQUNiLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtBQUN0QjtNQU5TO0FBUVQsU0FBUyxFQUFFLEVBQUM7SUFDVixJQUFJLElBQUksR0FBRTtJQUNWLE9BQU8sRUFBRSxLQUFLLENBQUEsS0FBSyxFQUFFLFdBQVc7QUFDbEM7QUFFQSxTQUFTLEVBQUUsRUFBQztJQUNWLElBQUksSUFBSSxHQUFFLE1BQU07SUFDaEIsT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8saUJBQWlCO0FBQ3pDO01BSFM7QUFLVCxTQUFTLEVBQUUsRUFBQyxFQUFFLENBQUM7SUFDYixLQUFLLElBQUksTUFBSyxPQUFPLEtBQUssS0FBSyxDQUFDLEdBQzlCLElBQUksR0FBRSxjQUFjLFdBQVcsZUFBZSxFQUFFLFFBQU8sSUFBRyxPQUFPO0lBQ25FLE9BQU87QUFDVDtNQUpTO0FBTVQsU0FBUyxFQUFFLEVBQUM7SUFDVixPQUFPLE1BQU0sUUFBUSxNQUFLLEdBQUUsS0FBSyxDQUFBLEtBQUssT0FBTyxPQUFPLE1BQUssSUFBSSxVQUFVLE9BQU8sT0FBTyxNQUFLLElBQ3ZGO0FBQ0w7TUFIUyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtMmEzNmE1OGUzM2I5NDk5Zi5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9hc2hieS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxhc2hieS5qc1wiLFwiYnVuZGxlSWRcIjpcImZkMjAyMTRhN2FkZjVlNzhcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA5SDdkUVxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvYXNoYnkuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIEBwbGFzbW9ocS9tZXNzYWdpbmcgLT4gOTJHeUIgID0+ICBAcGxhc21vaHEvbWVzc2FnaW5nLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyIC0+IDdUNWVXICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvZG9tIC0+IGhBNVFhICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2FzaGJ5L2Fuc3dlciAtPiBDcHdtOSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hc2hieS9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYXNoYnkvY2Fub25pY2FsLXNlYXJjaCAtPiA5OWRZbyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hc2hieS9jYW5vbmljYWwtc2VhcmNoLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2FzaGJ5L2xvY2F0aW9uLW9wZXJhdGlvbiAtPiBlMTU4RiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hc2hieS9sb2NhdGlvbi1vcGVyYXRpb24uanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYXNoYnkvb3BlcmF0aW9ucyAtPiAzZ2lWNiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hc2hieS9vcGVyYXRpb25zLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2FzaGJ5L3J1bGVzIC0+IDVpTXYxICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2FzaGJ5L3J1bGVzLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyIC0+IDh4ajZGICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL3Byb2ZpbGUtbG9jYXRpb24tb3JpZ2luYWwtYW5zd2VyIC0+IDhrd0pOICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3Byb2ZpbGUtbG9jYXRpb24tb3JpZ2luYWwtYW5zd2VyLmpzXHJcbiAqICAgfmNvcmUvZG9tIC0+IGhMTUpYICA9PiAgc3JjL2NvcmUvZG9tLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5jb3JlL3Bob25lLWNvdW50cnktY29kZSAtPiA4bkVOdyAgPT4gIHNyYy9jb3JlL3Bob25lLWNvdW50cnktY29kZS5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+c3RvcmUvYXV0b2ZpbGxJbmZvIC0+IDc5Vk5QICA9PiAgc3JjL3N0b3JlL2F1dG9maWxsSW5mby5qc1xyXG4gKiAgIH51dGlscy9zdHJpbmcgLT4gaWpFRmkgID0+ICBzcmMvdXRpbHMvc3RyaW5nLmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJBc2hieVwiLCAoKSA9PiBFKSwgbi5leHBvcnQociwgXCJpc0FzaGJ5TWFpbkNvdW50cnlSdWxlXCIsICgpID0+XHJcbiAgeCk7XHJcbnZhciBvID0gZShcIn5jb3JlL2RvbVwiKSxcclxuICBpID0gZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksXHJcbiAgYSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksXHJcbiAgbCA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIiksXHJcbiAgcyA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYXNoYnkvYW5zd2VyXCIpLFxyXG4gIHUgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2FzaGJ5L2Nhbm9uaWNhbC1zZWFyY2hcIiksXHJcbiAgYyA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYXNoYnkvbG9jYXRpb24tb3BlcmF0aW9uXCIpLFxyXG4gIGQgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2FzaGJ5L29wZXJhdGlvbnNcIiksXHJcbiAgZiA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYXNoYnkvcnVsZXNcIiksXHJcbiAgcCA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXJcIiksXHJcbiAgbSA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvcHJvZmlsZS1sb2NhdGlvbi1vcmlnaW5hbC1hbnN3ZXJcIiksXHJcbiAgaCA9IGUoXCJ+Y29yZS9lbnVtc1wiKSxcclxuICBnID0gZShcIn5jb3JlL3Bob25lLWNvdW50cnktY29kZVwiKSxcclxuICBiID0gZShcIn5jb3JlL3hwYXRoXCIpLFxyXG4gIHkgPSBlKFwifnN0b3JlL2F1dG9maWxsSW5mb1wiKSxcclxuICB2ID0gZShcIn51dGlscy9zdHJpbmdcIik7XHJcbmxldCB3ID0gW1wic2Nob29sIChcIiwgXCJncmFkdWF0aW9uIGRhdGUgKFwiLCBcImRlZ3JlZSAoXCIsIFwiZGlzY2lwbGluZSAoXCIsIFwibWFqb3IgKFwiLCBcImdwYSAoXCJdLFxyXG4gIFMgPSBbXHJcbiAgICAnLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgXCJhcHBsaWNhdGlvbi1mb3JtLXN1Y2Nlc3MtY29udGFpbmVyXCIpIGFuZCBjb250YWlucyh0cmFuc2xhdGUoLiwgXCJTVUNDRVNTXCIsIFwic3VjY2Vzc1wiKSwgXCJzdWNjZXNzXCIpXSdcclxuICBdO1xyXG5jbGFzcyBFIGV4dGVuZHMgcC5CYXNlRmlsbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCksIHRoaXMuc3VibWl0RE9NUXVlcnkgPVxyXG4gICAgICAnLi8vYnV0dG9uW2NvbnRhaW5zKEBjbGFzcywgXCJhc2hieS1hcHBsaWNhdGlvbi1mb3JtLXN1Ym1pdC1idXR0b25cIildJywgdGhpc1xyXG4gICAgICAuaW5pdGlhbENvdmVyTGV0dGVyT2JzZXJ2ZXIgPSBudWxsLCB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5ID0gXCJcIiwgdGhpc1xyXG4gICAgICAuc2NoZWR1bGVJbml0aWFsQ292ZXJMZXR0ZXJDaGVjaygpXHJcbiAgfVxyXG4gIGdldEZpZWxkSGFuZGxlcnMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbaC5GSUVMRF9UWVBFLlRFWFRdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBkLmZpbGxJbnB1dFRleHRGaWVsZCkoZS4kaW5wdXQsIHQsIGUubGFiZWwsICgwLCBnXHJcbiAgICAgICAgICAucmVzb2x2ZVBob25lQ291bnRyeUNvZGVBbnN3ZXIpKHRoaXMuYW5zd2VyKSksXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbaC5GSUVMRF9UWVBFLkNIRUNLQk9YXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgZC5maWxsQ2hlY2tib3hGaWVsZCkoZSwgdCksXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbaC5GSUVMRF9UWVBFLlNFTEVDVF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIGQuZmlsbFNlbGVjdEZpZWxkKShlLCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFtoLkZJRUxEX1RZUEUuTVVMVElfU0VMRUNUXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgZC5maWxsU2VsZWN0RmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW2guRklFTERfVFlQRS5BU0hCWV9TRUFSQ0hdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgKGUsIHQpID0+IHtcclxuICAgICAgICAgIGlmICghKDAsIGMuaXNBc2hieUdlb0xvY2F0aW9uUnVsZSkoZSkpIHJldHVybiAoMCwgZC5maWxsQ29tYm9ib3hGaWVsZCkoZSwgdCk7XHJcbiAgICAgICAgICBsZXQgciA9IFN0cmluZyhBcnJheS5pc0FycmF5KHQpID8gdFswXSA/PyBcIlwiIDogdCA/PyBcIlwiKS50cmltKCksXHJcbiAgICAgICAgICAgIG4gPSAoMCwgYy5nZXRBc2hieUdlb0xvY2F0aW9uVHlwZXMpKGUpLFxyXG4gICAgICAgICAgICBvID0gKDAsIG0uZ2V0UHJvZmlsZUxvY2F0aW9uT3JpZ2luYWxBbnN3ZXIpKHRoaXMuYW5zd2VyLCB7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb25UeXBlczogblxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYSA9IG8udmFsdWUgfHwgcjtcclxuICAgICAgICAgIGlmIChlLiRpbnB1dC5zZXRBdHRyaWJ1dGU/LihcImRhdGEtanItYXNoYnktcmVzb2x2ZS1zdGFnZVwiLCBcInN0YXJ0ZWRcIiksIGNvbnNvbGUuaW5mbyhcclxuICAgICAgICAgICAgICBcIltBc2hieV1bR2VvTG9jYXRpb25dIHJlc29sdmUtc3RhcnRcIiwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGUubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJTb3VyY2U6IG8udmFsdWUgPyBvLnNvdXJjZSA6IFwicmVndWxhclwiLFxyXG4gICAgICAgICAgICAgICAgaGFzT3JpZ2luYWxBbnN3ZXI6ICEhYSxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uVHlwZXM6IG5cclxuICAgICAgICAgICAgICB9KSwgIWEpIHRocm93IGNvbnNvbGUud2FybihcIltBc2hieV1bR2VvTG9jYXRpb25dIHJlc29sdmUtc2tpcHBlZFwiLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICAgICAgICByZWFzb246IFwiZW1wdHktb3JpZ2luYWwtYW5zd2VyXCJcclxuICAgICAgICAgIH0pLCBFcnJvcihcIkFzaGJ5IEdlb0xvY2F0aW9uIGFuc3dlciBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgIGxldCBsID0gKDAsIGMuYnVpbGRBc2hieUxvY2F0aW9uT3BlcmF0aW9uKSh7XHJcbiAgICAgICAgICAgICAgY3VycmVudFVybDogdGhpcy5nZXRDdXJyZW50UGFnZVVybCgpLFxyXG4gICAgICAgICAgICAgIG9yaWdpbmFsQW5zd2VyOiBhLFxyXG4gICAgICAgICAgICAgIGxvY2F0aW9uVHlwZXM6IG5cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHMgPSBhd2FpdCAoMCwgaS5zZW5kVG9CYWNrZ3JvdW5kKSh7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJyZXNvbHZlQXV0b2ZpbGxPcGVyYXRpb25cIixcclxuICAgICAgICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IGwsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IFwiYXNoYnlcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlLiRpbnB1dC5zZXRBdHRyaWJ1dGU/LihcImRhdGEtanItYXNoYnktcmVzb2x2ZS1hY3Rpb25cIiwgcz8ucmVzdWx0Py5hY3Rpb24gPz9cclxuICAgICAgICAgICAgXCJtaXNzaW5nXCIpLCBjb25zb2xlLmluZm8oXCJbQXNoYnldW0dlb0xvY2F0aW9uXSByZXNvbHZlLXJlc3VsdFwiLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICAgICAgICBhY3Rpb246IHM/LnJlc3VsdD8uYWN0aW9uID8/IFwibWlzc2luZ1wiLFxyXG4gICAgICAgICAgICBzZWxlY3RlZENvdW50OiBzPy5yZXN1bHQ/LnNlbGVjdGVkX3ZhbHVlcz8ubGVuZ3RoID8/IDBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbGV0IHUgPSAoMCwgYy5nZXRBc2hieVJlc29sdmVkTG9jYXRpb25WYWx1ZSkocyk7XHJcbiAgICAgICAgICBpZiAoIXUpIHRocm93IGUuJGlucHV0LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1qci1hc2hieS1yZXNvbHZlLXN0YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZW1wdHktcmVzdWx0XCIpLCBFcnJvcihcIkFzaGJ5IEdlb0xvY2F0aW9uIHJlc29sdmUgcmV0dXJuZWQgZW1wdHlcIik7XHJcbiAgICAgICAgICBhd2FpdCAoMCwgZC5maWxsUmVzb2x2ZWRMb2NhdGlvbkNvbWJvYm94KShlLCB1KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldFNpdGVOYW1lKCkge1xyXG4gICAgcmV0dXJuIFwiYXNoYnlcIlxyXG4gIH1cclxuICBnZXRDdXJyZW50UGFnZVVybCgpIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gIH1cclxuICBhc3luYyBydW5QcmVGaWxsRm9ybSgpIHtcclxuICAgIHRoaXMuY3VycmVudFJ1bkNvdW50cnkgPSBcIlwiLCAoMCwgdS5jbGVhckFzaGJ5Q2Fub25pY2FsU2Nob29sQ2FjaGUpKCk7XHJcbiAgICBsZXQgZSA9IGF3YWl0ICgwLCB5LnVzZUF1dG9maWxsSW5mb1N0b3JlKS5nZXRTdGF0ZSgpLmZldGNoQXV0b2ZpbGxJbmZvKCkuY2F0Y2goKCkgPT4gbnVsbCk7XHJcbiAgICB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5ID0gU3RyaW5nKGU/LmxvY2F0aW9uPy5jb3VudHJ5ID8/IFwiXCIpLnRyaW0oKSwgdGhpcy50YXNrUXVldWUuYWRkKGRcclxuICAgICAgLnByZUZpbGxGb3JtKSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgYXN5bmMgZXh0cmFjdEZvcm1SdWxlcygpIHtcclxuICAgIHJldHVybiBhd2FpdCAoMCwgZi5leHRyYWN0UnVsZXMpKClcclxuICB9XHJcbiAgZm9ybWF0QW5zd2VyKGUpIHtcclxuICAgIHJldHVybiAoMCwgcy5mb3JtYXRBbnN3ZXIpKGUpXHJcbiAgfVxyXG4gIGFzeW5jIGdldEF1dG9maWxsU25hcHNob3QoKSB7XHJcbiAgICByZXR1cm4gKDAsIGYuZ2V0Rm9ybVNuYXBzaG90KSgpXHJcbiAgfVxyXG4gIGFzeW5jIGdldFN1Ym1pdFNuYXBzaG90KCkge1xyXG4gICAgcmV0dXJuICgwLCBmLmdldEZvcm1TbmFwc2hvdCkoKVxyXG4gIH1cclxuICBnZXRBZGRpdGlvbmFsQXV0b2ZpbGxTbmFwc2hvdERhdGEoKSB7XHJcbiAgICBsZXQgZSA9ICgwLCBmLmdldEFzaGJ5RWR1Y2F0aW9uU25hcHNob3QpKCk7XHJcbiAgICByZXR1cm4gZS5sZW5ndGggPiAwID8ge1xyXG4gICAgICBlZHVjYXRpb246IGVcclxuICAgIH0gOiB7fVxyXG4gIH1cclxuICBnZXRBZGRpdGlvbmFsU3VibWl0U25hcHNob3REYXRhKCkge1xyXG4gICAgbGV0IGUgPSAoMCwgZi5nZXRBc2hieUVkdWNhdGlvblNuYXBzaG90KSgpO1xyXG4gICAgcmV0dXJuIGUubGVuZ3RoID4gMCA/IHtcclxuICAgICAgZWR1Y2F0aW9uOiBlXHJcbiAgICB9IDoge31cclxuICB9XHJcbiAgZ2V0U3VibWl0QnV0dG9uU2VsZWN0b3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdWJtaXRET01RdWVyeVxyXG4gIH1cclxuICBnZXRTdWJtaXRTdWNjZXNzU2VsZWN0b3JzKCkge1xyXG4gICAgcmV0dXJuIFNcclxuICB9XHJcbiAgc2NoZWR1bGVJbml0aWFsQ292ZXJMZXR0ZXJDaGVjaygpIHtcclxuICAgIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiB3aW5kb3cgfHwgXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgZG9jdW1lbnQpIHJldHVybjtcclxuICAgIGxldCBlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb3ZlckxldHRlcigpXHJcbiAgICAgIH0sXHJcbiAgICAgIHQgPSBbNTAwLCAxNTAwLCAzZTMsIDZlMywgMWU0XTtcclxuICAgIHQuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoZSwgdClcclxuICAgIH0pLCBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAodGhpc1xyXG4gICAgICAuaW5pdGlhbENvdmVyTGV0dGVyT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihlKSwgdGhpcy5pbml0aWFsQ292ZXJMZXR0ZXJPYnNlcnZlclxyXG4gICAgICAub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcclxuICAgICAgICBjaGlsZExpc3Q6ICEwLFxyXG4gICAgICAgIHN1YnRyZWU6ICEwXHJcbiAgICAgIH0pLCB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ292ZXJMZXR0ZXJPYnNlcnZlcj8uZGlzY29ubmVjdCgpLCB0aGlzLmluaXRpYWxDb3ZlckxldHRlck9ic2VydmVyID1cclxuICAgICAgICAgIG51bGxcclxuICAgICAgfSwgMWU0KSlcclxuICB9XHJcbiAgYXN5bmMgZG9GaWxsRm9ybShlID0gITEpIHtcclxuICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUZpbGxGb3JtKCk7XHJcbiAgICBsZXQgdCA9IHRoaXMucHJlcGFyZUNvdmVyTGV0dGVyUnVsZXMoYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKCkpLFxyXG4gICAgICByID0gYXdhaXQgdGhpcy5yZXF1ZXN0Rm9ybUFuc3dlcnModCwgZSk7XHJcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcikgcmV0dXJuIHI7XHJcbiAgICByICYmICh0aGlzLmFuc3dlciA9IHIpLCAoMCwgdS5wcmVmZXRjaEFzaGJ5U2Nob29sQ2Fub25pY2FsTmFtZXMpKHRoaXMuYW5zd2VyPy5lZHVjYXRpb24pO1xyXG4gICAgbGV0IG4gPSBDKHQsIHRoaXMuYW5zd2VyLnJlZ3VsYXIpO1xyXG4gICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIuc2V0RmllbGRzUmVxdWlyZWRTdGF0dXMobik7XHJcbiAgICBsZXQgbyA9IG4uZmlsdGVyKGUgPT4gZS50eXBlICE9PSBoLkZJRUxEX1RZUEUuRURVQ0FUSU9OKSxcclxuICAgICAgaSA9IG8uZmlsdGVyKGUgPT4gIXgoZSkpO1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZmlsbFJlZ3VsYXJGaWVsZHMoaSksIGF3YWl0IHRoaXMuZmlsbENvdW50cnlGaWVsZChvKSwgYXdhaXQgdGhpc1xyXG4gICAgICAuZmlsbEVkdWNhdGlvbkhpc3RvcnkoKSwgYXdhaXQgdGhpcy5maWxsQ292ZXJMZXR0ZXJGaWVsZHMoKSwgYXdhaXQgdGhpc1xyXG4gICAgICAuYmluZFN1Ym1pdEJ1dHRvblRyYWNraW5nKG4pLCBhd2FpdCB0aGlzLmhhbmRsZUZpbGVVcGxvYWRzKCksIGF3YWl0IHRoaXNcclxuICAgICAgLmZpbmFsaXplRmlsbEZvcm0oKVxyXG4gIH1cclxuICBhc3luYyBmaWxsQ291bnRyeUZpZWxkKGUpIHtcclxuICAgIGxldCB0ID0gZS5maW5kKHgpO1xyXG4gICAgaWYgKCF0KSByZXR1cm47XHJcbiAgICBpZiAoIXRoaXMuY3VycmVudFJ1bkNvdW50cnkpIHtcclxuICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3ModC5sYWJlbCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHIgPSB0LFxyXG4gICAgICBuID0gci4kaW5wdXQ7XHJcbiAgICBuICYmIChcInRleHRcIiA9PT0gbi50eXBlIHx8IFwiVEVYVEFSRUFcIiA9PT0gbi50YWdOYW1lKSAmJiAodGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IGUgPSBhd2FpdCAoMCwgZC5maWxsQXNoYnlDb3VudHJ5Q29tYm9ib3gpKG4sIHRoaXMuY3VycmVudFJ1bkNvdW50cnkpO1xyXG4gICAgICBlICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKHIubGFiZWwpXHJcbiAgICB9KSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCkpXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZUZpbGVVcGxvYWRzKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSA/IChhd2FpdCAoMCwgZC5jbGVhckV4aXN0aW5nUmVzdW1lKShkb2N1bWVudCksIHRoaXNcclxuICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiUmVzdW1lL0NWXCIpKSA6IHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgKDAsIGQudXBsb2FkUmVzdW1lKSh0aGlzLnJlc3VtZUluZm8sIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpXHJcbiAgICAgIH0pLCB0aGlzLmNvdmVyTGV0dGVyPy5jb3ZlckxldHRlcklkKSB7XHJcbiAgICAgIGxldCBlID0gdGhpcy5jb3ZlckxldHRlcjtcclxuICAgICAgdGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCAoMCwgZC51cGxvYWRDb3ZlckxldHRlcikoZSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyxcclxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgYXN5bmMgZmlsbEVkdWNhdGlvbkhpc3RvcnkoKSB7XHJcbiAgICBsZXQgZSA9IEFycmF5LmlzQXJyYXkodGhpcy5hbnN3ZXI/LmVkdWNhdGlvbikgPyB0aGlzLmFuc3dlci5lZHVjYXRpb24gOiBbXTtcclxuICAgIGlmICgwID09PSBlLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgYXdhaXQgKDAsIGQuc3luY0VkdWNhdGlvbkhpc3RvcnlTZWN0aW9ucykoZS5sZW5ndGgpO1xyXG4gICAgbGV0IHQgPSAoMCwgZi5nZXRFZHVjYXRpb25SdWxlcykoKTtcclxuICAgICgwLCBvLnNldFNlY3Rpb25SZXN1bHRGb2N1c1J1bGVzKShoLkZJRUxEX1RZUEUuRURVQ0FUSU9OLCB0KTtcclxuICAgIGxldCByID0gKDAsIGEuZ2V0RWR1Y2F0aW9uT3BlcmF0aW9ucykodCwgZSwgdGhpcy5vcGVyYXRpb25Db25maWcsIHZvaWQgMCwgKDAsIGFcclxuICAgICAgLnNlY3Rpb25Qcm9ncmVzc0NhbGxiYWNrcykoXCJFZHVjYXRpb24gSGlzdG9yeVwiLCB0aGlzLnByb2dyZXNzVHJhY2tlcikpO1xyXG4gICAgZm9yIChsZXQgZSBvZiByKSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gIH1cclxuICBhc3luYyBjaGVja0NvdmVyTGV0dGVyKCkge1xyXG4gICAgKDAsIGwucG9zdENvdmVyTGV0dGVyU3RhdHVzKSgoMCwgZC5nZXRBc2hieUNvdmVyTGV0dGVyU3RhdHVzKSgpKVxyXG4gIH1cclxuICBzdWJtaXRBcHBsaWNhdGlvbigpIHtcclxuICAgIGxldCBlID0gKDAsIGIuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkodGhpcy5zdWJtaXRET01RdWVyeSk7XHJcbiAgICBpZiAoZSkge1xyXG4gICAgICBlPy5jbGljaygpO1xyXG4gICAgICBsZXQgdCA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChlLCB0KSA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0IG9mIGUpIFwiY2hpbGRMaXN0XCIgPT09IHQudHlwZSAmJiB0LmFkZGVkTm9kZXMuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgZS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgXCJhc2hieS1hcHBsaWNhdGlvbi1mb3JtLXN1Y2Nlc3MtY29udGFpbmVyXCIpICYmIHdpbmRvdy50b3A/LnBvc3RNZXNzYWdlKHZcclxuICAgICAgICAgICAgICAuY2xlYW5PYmplY3Qoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogaC5NRVNTQUdFX0VWRU5UUy5hZ2VudFN1Ym1pdENsaWNrZWRcclxuICAgICAgICAgICAgICB9KSwge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0T3JpZ2luOiBcIipcIlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHIgPSB7XHJcbiAgICAgICAgICBjaGlsZExpc3Q6ICEwLFxyXG4gICAgICAgICAgc3VidHJlZTogITBcclxuICAgICAgICB9O1xyXG4gICAgICB0Lm9ic2VydmUoZG9jdW1lbnQuYm9keSwgcilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHgoZSkge1xyXG4gIGxldCB0ID0gU3RyaW5nKGUubGFiZWwgPz8gXCJcIikucmVwbGFjZSgvKD86XFxzKlxcKikrXFxzKiQvZywgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpXHJcbiAgICAudG9Mb3dlckNhc2UoKTtcclxuICBpZiAoXCJjb3VudHJ5XCIgIT09IHQpIHJldHVybiAhMTtcclxuICBsZXQgciA9IGUuJGlucHV0O1xyXG4gIHJldHVybiAhIXI/LmNsb3Nlc3Q/LignW2RhdGEtZmllbGQtcGF0aD1cIl9zeXN0ZW1maWVsZF9jb3VudHJ5XCJdJylcclxufVxyXG5cclxuZnVuY3Rpb24gQyhlLCB0KSB7XHJcbiAgcmV0dXJuIGUuZmlsdGVyKGUgPT4gQShlLCB0KSlcclxufVxyXG5cclxuZnVuY3Rpb24gQShlLCB0KSB7XHJcbiAgaWYgKCFrKGUubGFiZWwpKSByZXR1cm4gITA7XHJcbiAgbGV0IHIgPSBUKGUubGFiZWwpO1xyXG4gIGlmICghcikgcmV0dXJuICEwO1xyXG4gIGxldCBuID0gRihyLCB0KTtcclxuICByZXR1cm4gISFuICYmIEkodFtuXSlcclxufVxyXG5cclxuZnVuY3Rpb24gayhlKSB7XHJcbiAgbGV0IHQgPSBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuIHcuc29tZShlID0+IHQuc3RhcnRzV2l0aChlKSlcclxufVxyXG5cclxuZnVuY3Rpb24gVChlKSB7XHJcbiAgbGV0IHQgPSBlLm1hdGNoKC9cXCgoW14pXSspXFwpXFxzKiQvKTtcclxuICByZXR1cm4gdD8uWzFdPy50cmltKCkudG9Mb3dlckNhc2UoKSB8fCBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEYoZSwgdCkge1xyXG4gIGZvciAobGV0IHIgb2YgT2JqZWN0LmtleXModCB8fCB7fSkpXHJcbiAgICBpZiAoci50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoXCJzY2hvb2wgKFwiKSAmJiBUKHIpID09PSBlKSByZXR1cm4gcjtcclxuICByZXR1cm4gXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBJKGUpIHtcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheShlKSA/IGUuc29tZShlID0+IFwiXCIgIT09IFN0cmluZyhlID8/IFwiXCIpLnRyaW0oKSkgOiBcIlwiICE9PSBTdHJpbmcoZSA/PyBcIlwiKVxyXG4gICAgLnRyaW0oKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNoYnkuN2FkZjVlNzguanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);