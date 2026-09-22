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
})({"8lIKA":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\jacobs.js",
    "bundleId": "1e102a52ae957016",
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
var j = z(require("e0ca2f0fdaf6b3cb"));
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

},{"e0ca2f0fdaf6b3cb":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"kyHyY":[function(require,module,exports) {
/**
 * Parcel module id: 4befB
 * Resolved path: src/contents/sites/jacobs.js
 * Dependencies:
 *   ./answer -> iOFeQ  =>  src/contents/sites/jacobs/answer.js
 *   ./education-client-search -> iWUer  =>  src/contents/sites/jacobs/education-client-search.js
 *   ./operations -> 1w32k  =>  src/contents/sites/jacobs/operations.js
 *   ./rules -> iZWxZ  =>  src/contents/sites/jacobs/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Jacobs", ()=>v);
var o = e("@plasmohq/messaging"), i = e("~contents/methods/answer"), a = e("~contents/sites/base-filler"), l = e("~core/dom"), s = e("~core/enums"), u = e("~core/xpath"), c = e("./answer"), d = e("./education-client-search"), f = e("./operations"), p = e("./rules");
function m(e1) {
    return String(e1.label || "").replace(/\s*\*\s*$/, "").replace(/\s+/g, " ").trim().toLowerCase();
}
function h(e1) {
    let t = m(e1);
    return "country" === t || t.startsWith("country/");
}
function g(e1) {
    let t = m(e1);
    return "state" === t || t.startsWith("state/") || t.startsWith("state /") || t.startsWith("state ");
}
function b(e1) {
    let t = e1.filter(h);
    if (!t.length) return e1;
    let r1 = e1.filter((e1)=>!h(e1)), n = r1.findIndex(g);
    return n < 0 ? e1 : [
        ...r1.slice(0, n),
        ...t,
        ...r1.slice(n)
    ];
}
let y = {
    requestStep: async (e1)=>await (0, o.sendToBackground)({
            name: "resolveAutofillClientSearchStep",
            body: e1
        }),
    captureCandidates: f.captureJacobsEducationSelect2Candidates,
    commitCandidate: f.fillResolvedJacobsEducationSelect2Candidate
};
class v extends a.BaseFiller {
    formatAnswer(e1) {
        return (0, c.formatAnswer)(e1);
    }
    getFieldHandlers() {
        return {
            [s.FIELD_TYPE.TEXT]: (e1, t)=>{
                let r1 = t?.[0];
                if (null != r1) return (0, f.fillInputTextField)(e1.$input, String(r1 ?? ""));
            },
            [s.FIELD_TYPE.SELECT]: (e1, t)=>(0, f.fillSelectField)(e1, t),
            [s.FIELD_TYPE.CHECKBOX]: (e1, t)=>(0, f.fillCheckboxField)(e1, t),
            [s.FIELD_TYPE.RADIOGROUP]: (e1, t)=>(0, f.fillRadioGroupFiled)(e1, t),
            [s.FIELD_TYPE.MULTI_SELECT]: (e1, t)=>(0, f.fillMultiSelectField)(e1, t)
        };
    }
    async doFillForm(e1 = !1) {
        await this.initializeFillForm();
        let t = await this.extractFormRules(), r1 = (0, p.getAutofillRules)(t), n = (0, p.getLocalOnlyAutofillRules)(t);
        this.progressTracker.setFieldsRequiredStatus([
            ...r1,
            ...n
        ]), await this.handleResumeUpload();
        let o = await this.fetchFormAnswers(r1, e1);
        if ("string" == typeof o) return o;
        await this.fillRegularFields(r1), await this.fillEducationAndEmployment(r1);
        let i = await this.runComboQuestionAutofillIfNeeded(r1, e1);
        if ("string" == typeof i) return i;
        let a = i;
        return console.info("[Jacobs][Combo] rescan-complete", {
            initialRuleCount: r1.length,
            totalRuleCount: a.length
        }), await this.executeSiteSpecificSteps(n), await this.bindSubmitButtonTracking(a), this.finalizeFillForm();
    }
    async runPreFillForm() {
        this.taskQueue.add(f.preFillForm), await this.taskQueue.run();
    }
    async extractFormRules() {
        return await (0, p.extractRules)();
    }
    async extractComboQuestionRules() {
        let e1 = (0, p.getAutofillRules)(await this.extractFormRules());
        return console.info("[Jacobs][Combo] extracted-fillable-rules", {
            ruleCount: e1.length
        }), e1;
    }
    getSiteName() {
        return "jacobs";
    }
    async fillRegularFields(e1) {
        let t = b(e1), r1 = (0, i.getRegularOperations)(t, this.answer.regular, this.operationConfig);
        for (let e1 of r1)this.taskQueue.add(e1);
        await this.taskQueue.run();
    }
    async fillJacobsEducationSelectField(e1, t) {
        let r1 = e1.$input, n = (0, d.getJacobsEducationClientSearchFieldType)(r1);
        if (!n) return await this.operationConfig[s.FIELD_TYPE.SELECT]?.(e1, t, !1) ?? !1;
        if (!await (0, f.waitForJacobsSelectFieldEnabled)(r1)) return this.jacobsEducationClientSearchFailed = !0, console.info("[Jacobs][Education] client-search", {
            fieldType: n,
            success: !1,
            roundCount: 0,
            candidateCounts: [],
            failureReason: "disabled"
        }), !1;
        let o = await (0, d.resolveJacobsEducationClientSearch)(r1, t, n, y);
        if (o.success) return console.info("[Jacobs][Education] client-search", {
            fieldType: n,
            success: !0,
            roundCount: o.rounds.length,
            candidateCounts: o.rounds.map((e1)=>e1.options.length)
        }), !0;
        let i = (0, d.getJacobsEducationClientSearchOriginalAnswer)(t, n), a = "school" === n && "return-empty" === o.failureReason && !!i && await (0, f.fillJacobsSchoolOtherFallback)(r1, i);
        return a || (this.jacobsEducationClientSearchFailed = !0), await (0, f.closeJacobsEducationSelect2Search)(), console.info("[Jacobs][Education] client-search", {
            fieldType: n,
            success: a,
            roundCount: o.rounds.length,
            candidateCounts: o.rounds.map((e1)=>e1.options.length),
            failureReason: a ? "return-empty-school-other" : o.failureReason
        }), a;
    }
    getJacobsEducationOperationConfig() {
        return {
            ...this.operationConfig,
            [s.FIELD_TYPE.SELECT]: (e1, t)=>this.fillJacobsEducationSelectField(e1, t)
        };
    }
    async handleResumeUpload() {
        this.disableUploadResume ? (await (0, f.removeResume)(), this.progressTracker.updateMissedProgress("Resume/CV")) : this.taskQueue.add(async ()=>{
            await (0, f.removeResume)(), await (0, f.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        }), await this.taskQueue.run();
    }
    async fillEducationAndEmployment(e1) {
        let t = e1.some((e1)=>e1.type === s.FIELD_TYPE.EDUCATION);
        if (t && Array.isArray(this.answer?.education) && this.answer.education.length) {
            let e1 = this.answer.education.length;
            await (0, f.adaptEducationSectionCount)(e1);
            let t = await (0, p.getEducationRules)(), r1 = (0, p.validateEducationSection)(e1);
            if (r1.countMatched && t.length === e1) {
                this.jacobsEducationClientSearchFailed = !1, (0, l.setSectionResultFocusRules)(s.FIELD_TYPE.EDUCATION, t);
                let e1 = (0, i.getEducationOperations)(t, this.answer.education, this.getJacobsEducationOperationConfig(), void 0, {
                    onCompleted: ()=>{
                        if (this.jacobsEducationClientSearchFailed) {
                            this.progressTracker.updateMissedProgress("Education");
                            return;
                        }
                        this.progressTracker.updateFilledProgress("Education");
                    },
                    onSkipped: ()=>this.progressTracker.updateMissedProgress("Education"),
                    onSectionResultChanged: this.progressTracker.updateSectionResult
                });
                for (let t of e1)this.taskQueue.add(t);
                await this.taskQueue.run();
            } else this.progressTracker.updateMissedProgress("Education");
        }
        let r1 = e1.some((e1)=>e1.type === s.FIELD_TYPE.EMPLOYMENT);
        if (r1 && Array.isArray(this.answer?.workExperience) && this.answer.workExperience.length) {
            let e1 = this.answer.workExperience.length;
            await (0, f.adaptEmploymentSectionCount)(e1);
            let t = await (0, p.getExperienceRules)(), r1 = (0, p.validateExperienceSection)(e1);
            if (!r1.countMatched || t.length !== e1) {
                this.progressTracker.updateMissedProgress("Employment");
                return;
            }
            (0, l.setSectionResultFocusRules)(s.FIELD_TYPE.EMPLOYMENT, t);
            let n = (0, i.getEmploymentOperations)(t, this.answer.workExperience, this.operationConfig, void 0, (0, i.sectionProgressCallbacks)("Employment", this.progressTracker));
            for (let e1 of n)this.taskQueue.add(e1);
            await this.taskQueue.run();
        }
    }
    async executeSiteSpecificSteps(e1) {
        for (let t of e1)t.type === s.FIELD_TYPE.CHECKBOX && this.taskQueue.add(async ()=>{
            await (0, f.fillCheckboxField)(t, !0), this.progressTracker.updateFilledProgress(t.label);
        });
        await this.taskQueue.run();
    }
    getSubmitButtonSelector() {
        return p.jacobsXpaths.submitButton;
    }
    getSubmitTrackingDelegationRoot() {
        return document;
    }
    resolveDelegatedSubmitButton(e1) {
        return (0, f.resolveJacobsSubmitButtonFromTarget)(e1);
    }
    async getAutofillSnapshot(e1) {
        let t = await (0, p.getFormSnapshot)() || {};
        this.lastFullAutofillSnapshot = t;
        let { education: r1, employment: n, ...o } = t;
        return o;
    }
    async getSubmitSnapshot() {
        let e1 = await (0, p.getFormSnapshot)() || {};
        this.lastFullSubmitSnapshot = e1;
        let { education: t, employment: r1, ...n } = e1;
        return n;
    }
    getEducationEmploymentSnapshotData(e1) {
        return {
            education: Array.isArray(e1?.education) ? e1?.education : [],
            employment: Array.isArray(e1?.employment) ? e1?.employment : []
        };
    }
    getAdditionalAutofillSnapshotData() {
        return this.getEducationEmploymentSnapshotData(this.lastFullAutofillSnapshot);
    }
    getAdditionalSubmitSnapshotData() {
        return this.getEducationEmploymentSnapshotData(this.lastFullSubmitSnapshot);
    }
    submitApplication() {
        let e1 = (0, u.getFirstOrderedNodeSafe)(p.jacobsXpaths.submitButton);
        e1 && e1.click();
    }
    constructor(...e1){
        super(...e1), this.hasComboQuestions = !0, this.lastFullAutofillSnapshot = null, this.lastFullSubmitSnapshot = null, this.jacobsEducationClientSearchFailed = !1;
    }
}

},{}]},["8lIKA","kyHyY"], "kyHyY", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLElBQUUsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxJQUFFLE9BQU87QUFBeUIsSUFBSSxJQUFFLE9BQU87QUFBb0IsSUFBSSxJQUFFLE9BQU8sZ0JBQWUsSUFBRSxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtJQUFLLElBQUcsS0FBRyxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsWUFBVyxLQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRSxNQUFJLE1BQUksS0FBRyxFQUFFLEdBQUUsR0FBRTtRQUFDLEtBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBRSxDQUFBLElBQUUsRUFBRSxHQUFFLEVBQUMsS0FBSSxFQUFFO0lBQVU7SUFBRyxPQUFPO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBSyxDQUFBLElBQUUsS0FBRyxPQUFLLEVBQUUsRUFBRSxNQUFJLENBQUMsR0FBRSxFQUFFLEtBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxhQUFXLEVBQUUsR0FBRSxXQUFVO1FBQUMsT0FBTTtRQUFFLFlBQVcsQ0FBQztJQUFDLEtBQUcsR0FBRSxFQUFDO0FBQUcsSUFBSSxJQUFFLFdBQVcsU0FBUyxRQUFNLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxXQUFXLFNBQVMsT0FBSyxDQUFDO0FBQUUsSUFBSSxJQUFFLElBQUksSUFBSSxJQUFHLElBQUUsQ0FBQSxJQUFHLEVBQUUsSUFBSSxJQUFHLEtBQUcsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFdBQVcsU0FBTyxFQUFFLFNBQVMsTUFBTSxJQUFJLENBQUEsSUFBRyxFQUFFLE1BQU0sTUFBTSxPQUFPLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLENBQUEsR0FBRyxDQUFDO0FBQUcsSUFBSSxLQUFHLEVBQUUsY0FBYSxJQUFFLElBQUksRUFBRSxnQkFBYyxJQUFJLFlBQVUsUUFBTyxLQUFHO0FBQUksSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLEVBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxFQUFFLE9BQU8sSUFBRyxRQUFPO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRyxJQUFJLFFBQVEsTUFBTSxxQkFBa0IsT0FBTyxJQUFHLFFBQU8sSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsR0FBRSxJQUFFLENBQUMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSTtBQUFHLElBQUksSUFBRTtJQUFDLG1CQUFrQjtJQUFNLGdCQUFlO0lBQU0sV0FBVTtJQUFNLFlBQVc7UUFBQztLQUFlO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBSyxpQkFBZ0I7SUFBc0YsWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFJO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxlQUFlLEVBQUUsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFHLENBQUEsRUFBRSwyQkFBMEIsRUFBRSxRQUFRLFlBQVk7UUFBQyx3QkFBdUIsQ0FBQztJQUFDLEVBQUMsSUFBRyxXQUFXLFVBQVU7QUFBVTtBQUFDLFNBQVM7SUFBSSxPQUFNLENBQUMsRUFBRSxRQUFNLEVBQUUsU0FBTyxZQUFVLFNBQVMsU0FBUyxRQUFRLFlBQVUsSUFBRSxTQUFTLFdBQVMsY0FBWSxFQUFFO0FBQUk7QUFBQyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxjQUFZLEVBQUU7QUFBSTtBQUFDLFNBQVM7SUFBSSxPQUFPLEVBQUUsUUFBTSxTQUFTO0FBQUk7QUFBQyxJQUFJLElBQUU7QUFBeUIsSUFBSSxJQUFFO0lBQUMsZUFBYyxDQUFDO0lBQUUsaUJBQWdCLEVBQUU7SUFBQyxnQkFBZSxFQUFFO0FBQUEsR0FBRSxJQUFFO0lBQUssRUFBRSxnQkFBYyxDQUFDLEdBQUUsRUFBRSxrQkFBZ0IsRUFBRSxFQUFDLEVBQUUsaUJBQWUsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLEVBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLEdBQUUsR0FBRTtJQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QW1DLEVBQUMsRUFBRTtRQUNwQyxPQUFPO1lBQ0wsV0FBVyxNQUFNLFFBQVEsSUFBRyxhQUFhLElBQUcsWUFBWSxFQUFFO1lBQzFELFlBQVksTUFBTSxRQUFRLElBQUcsY0FBYyxJQUFHLGFBQWEsRUFBRTtRQUMvRDtJQUNGO0lBQ0Esb0NBQW9DO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLG1DQUFtQyxJQUFJLENBQUM7SUFDdEQ7SUFDQSxrQ0FBa0M7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUNBQW1DLElBQUksQ0FBQztJQUN0RDtJQUNBLG9CQUFvQjtRQUNsQixJQUFJLEtBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSx1QkFBc0IsRUFBRyxFQUFFLGFBQWE7UUFDdEQsTUFBSyxHQUFFO0lBQ1Q7SUFDQSxZQUFZLEdBQUcsRUFBQyxDQUFFO1FBQ2hCLEtBQUssSUFBSSxLQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLElBQUksQ0FBQywyQkFBMkIsTUFBTSxJQUFJLENBQ2pGLHlCQUF5QixNQUFNLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUM5RTtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0wMDZjYzdkNjllNmIxNTdhLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2phY29icy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxqYWNvYnMuanNcIixcImJ1bmRsZUlkXCI6XCIxZTEwMmE1MmFlOTU3MDE2XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogNGJlZkJcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2phY29icy5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYW5zd2VyIC0+IGlPRmVRICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2phY29icy9hbnN3ZXIuanNcclxuICogICAuL2VkdWNhdGlvbi1jbGllbnQtc2VhcmNoIC0+IGlXVWVyICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2phY29icy9lZHVjYXRpb24tY2xpZW50LXNlYXJjaC5qc1xyXG4gKiAgIC4vb3BlcmF0aW9ucyAtPiAxdzMyayAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9qYWNvYnMvb3BlcmF0aW9ucy5qc1xyXG4gKiAgIC4vcnVsZXMgLT4gaVpXeFogID0+ICBzcmMvY29udGVudHMvc2l0ZXMvamFjb2JzL3J1bGVzLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICBAcGxhc21vaHEvbWVzc2FnaW5nIC0+IDkyR3lCICA9PiAgQHBsYXNtb2hxL21lc3NhZ2luZy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlciAtPiA4eGo2RiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlci5qc1xyXG4gKiAgIH5jb3JlL2RvbSAtPiBoTE1KWCAgPT4gIHNyYy9jb3JlL2RvbS5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS94cGF0aCAtPiBhZ0U0dSAgPT4gIHNyYy9jb3JlL3hwYXRoLmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJKYWNvYnNcIiwgKCkgPT4gdik7XHJcbnZhciBvID0gZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksXHJcbiAgaSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksXHJcbiAgYSA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXJcIiksXHJcbiAgbCA9IGUoXCJ+Y29yZS9kb21cIiksXHJcbiAgcyA9IGUoXCJ+Y29yZS9lbnVtc1wiKSxcclxuICB1ID0gZShcIn5jb3JlL3hwYXRoXCIpLFxyXG4gIGMgPSBlKFwiLi9hbnN3ZXJcIiksXHJcbiAgZCA9IGUoXCIuL2VkdWNhdGlvbi1jbGllbnQtc2VhcmNoXCIpLFxyXG4gIGYgPSBlKFwiLi9vcGVyYXRpb25zXCIpLFxyXG4gIHAgPSBlKFwiLi9ydWxlc1wiKTtcclxuXHJcbmZ1bmN0aW9uIG0oZSkge1xyXG4gIHJldHVybiBTdHJpbmcoZS5sYWJlbCB8fCBcIlwiKS5yZXBsYWNlKC9cXHMqXFwqXFxzKiQvLCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoKGUpIHtcclxuICBsZXQgdCA9IG0oZSk7XHJcbiAgcmV0dXJuIFwiY291bnRyeVwiID09PSB0IHx8IHQuc3RhcnRzV2l0aChcImNvdW50cnkvXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGcoZSkge1xyXG4gIGxldCB0ID0gbShlKTtcclxuICByZXR1cm4gXCJzdGF0ZVwiID09PSB0IHx8IHQuc3RhcnRzV2l0aChcInN0YXRlL1wiKSB8fCB0LnN0YXJ0c1dpdGgoXCJzdGF0ZSAvXCIpIHx8IHQuc3RhcnRzV2l0aChcclxuICAgIFwic3RhdGUgXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGIoZSkge1xyXG4gIGxldCB0ID0gZS5maWx0ZXIoaCk7XHJcbiAgaWYgKCF0Lmxlbmd0aCkgcmV0dXJuIGU7XHJcbiAgbGV0IHIgPSBlLmZpbHRlcihlID0+ICFoKGUpKSxcclxuICAgIG4gPSByLmZpbmRJbmRleChnKTtcclxuICByZXR1cm4gbiA8IDAgPyBlIDogWy4uLnIuc2xpY2UoMCwgbiksIC4uLnQsIC4uLnIuc2xpY2UobildXHJcbn1cclxubGV0IHkgPSB7XHJcbiAgcmVxdWVzdFN0ZXA6IGFzeW5jIGUgPT4gYXdhaXQgKDAsIG8uc2VuZFRvQmFja2dyb3VuZCkoe1xyXG4gICAgbmFtZTogXCJyZXNvbHZlQXV0b2ZpbGxDbGllbnRTZWFyY2hTdGVwXCIsXHJcbiAgICBib2R5OiBlXHJcbiAgfSksXHJcbiAgY2FwdHVyZUNhbmRpZGF0ZXM6IGYuY2FwdHVyZUphY29ic0VkdWNhdGlvblNlbGVjdDJDYW5kaWRhdGVzLFxyXG4gIGNvbW1pdENhbmRpZGF0ZTogZi5maWxsUmVzb2x2ZWRKYWNvYnNFZHVjYXRpb25TZWxlY3QyQ2FuZGlkYXRlXHJcbn07XHJcbmNsYXNzIHYgZXh0ZW5kcyBhLkJhc2VGaWxsZXIge1xyXG4gIGZvcm1hdEFuc3dlcihlKSB7XHJcbiAgICByZXR1cm4gKDAsIGMuZm9ybWF0QW5zd2VyKShlKVxyXG4gIH1cclxuICBnZXRGaWVsZEhhbmRsZXJzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3MuRklFTERfVFlQRS5URVhUXTogKGUsIHQpID0+IHtcclxuICAgICAgICBsZXQgciA9IHQ/LlswXTtcclxuICAgICAgICBpZiAobnVsbCAhPSByKSByZXR1cm4gKDAsIGYuZmlsbElucHV0VGV4dEZpZWxkKShlLiRpbnB1dCwgU3RyaW5nKHIgPz8gXCJcIikpXHJcbiAgICAgIH0sXHJcbiAgICAgIFtzLkZJRUxEX1RZUEUuU0VMRUNUXTogKGUsIHQpID0+ICgwLCBmLmZpbGxTZWxlY3RGaWVsZCkoZSwgdCksXHJcbiAgICAgIFtzLkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiAoZSwgdCkgPT4gKDAsIGYuZmlsbENoZWNrYm94RmllbGQpKGUsIHQpLFxyXG4gICAgICBbcy5GSUVMRF9UWVBFLlJBRElPR1JPVVBdOiAoZSwgdCkgPT4gKDAsIGYuZmlsbFJhZGlvR3JvdXBGaWxlZCkoZSwgdCksXHJcbiAgICAgIFtzLkZJRUxEX1RZUEUuTVVMVElfU0VMRUNUXTogKGUsIHQpID0+ICgwLCBmLmZpbGxNdWx0aVNlbGVjdEZpZWxkKShlLCB0KVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBkb0ZpbGxGb3JtKGUgPSAhMSkge1xyXG4gICAgYXdhaXQgdGhpcy5pbml0aWFsaXplRmlsbEZvcm0oKTtcclxuICAgIGxldCB0ID0gYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKCksXHJcbiAgICAgIHIgPSAoMCwgcC5nZXRBdXRvZmlsbFJ1bGVzKSh0KSxcclxuICAgICAgbiA9ICgwLCBwLmdldExvY2FsT25seUF1dG9maWxsUnVsZXMpKHQpO1xyXG4gICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIuc2V0RmllbGRzUmVxdWlyZWRTdGF0dXMoWy4uLnIsIC4uLm5dKSwgYXdhaXQgdGhpcy5oYW5kbGVSZXN1bWVVcGxvYWQoKTtcclxuICAgIGxldCBvID0gYXdhaXQgdGhpcy5mZXRjaEZvcm1BbnN3ZXJzKHIsIGUpO1xyXG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG8pIHJldHVybiBvO1xyXG4gICAgYXdhaXQgdGhpcy5maWxsUmVndWxhckZpZWxkcyhyKSwgYXdhaXQgdGhpcy5maWxsRWR1Y2F0aW9uQW5kRW1wbG95bWVudChyKTtcclxuICAgIGxldCBpID0gYXdhaXQgdGhpcy5ydW5Db21ib1F1ZXN0aW9uQXV0b2ZpbGxJZk5lZWRlZChyLCBlKTtcclxuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBpKSByZXR1cm4gaTtcclxuICAgIGxldCBhID0gaTtcclxuICAgIHJldHVybiBjb25zb2xlLmluZm8oXCJbSmFjb2JzXVtDb21ib10gcmVzY2FuLWNvbXBsZXRlXCIsIHtcclxuICAgICAgICBpbml0aWFsUnVsZUNvdW50OiByLmxlbmd0aCxcclxuICAgICAgICB0b3RhbFJ1bGVDb3VudDogYS5sZW5ndGhcclxuICAgICAgfSksIGF3YWl0IHRoaXMuZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKG4pLCBhd2FpdCB0aGlzLmJpbmRTdWJtaXRCdXR0b25UcmFja2luZyhhKSwgdGhpc1xyXG4gICAgICAuZmluYWxpemVGaWxsRm9ybSgpXHJcbiAgfVxyXG4gIGFzeW5jIHJ1blByZUZpbGxGb3JtKCkge1xyXG4gICAgdGhpcy50YXNrUXVldWUuYWRkKGYucHJlRmlsbEZvcm0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gIH1cclxuICBhc3luYyBleHRyYWN0Rm9ybVJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0ICgwLCBwLmV4dHJhY3RSdWxlcykoKVxyXG4gIH1cclxuICBhc3luYyBleHRyYWN0Q29tYm9RdWVzdGlvblJ1bGVzKCkge1xyXG4gICAgbGV0IGUgPSAoMCwgcC5nZXRBdXRvZmlsbFJ1bGVzKShhd2FpdCB0aGlzLmV4dHJhY3RGb3JtUnVsZXMoKSk7XHJcbiAgICByZXR1cm4gY29uc29sZS5pbmZvKFwiW0phY29ic11bQ29tYm9dIGV4dHJhY3RlZC1maWxsYWJsZS1ydWxlc1wiLCB7XHJcbiAgICAgIHJ1bGVDb3VudDogZS5sZW5ndGhcclxuICAgIH0pLCBlXHJcbiAgfVxyXG4gIGdldFNpdGVOYW1lKCkge1xyXG4gICAgcmV0dXJuIFwiamFjb2JzXCJcclxuICB9XHJcbiAgYXN5bmMgZmlsbFJlZ3VsYXJGaWVsZHMoZSkge1xyXG4gICAgbGV0IHQgPSBiKGUpLFxyXG4gICAgICByID0gKDAsIGkuZ2V0UmVndWxhck9wZXJhdGlvbnMpKHQsIHRoaXMuYW5zd2VyLnJlZ3VsYXIsIHRoaXMub3BlcmF0aW9uQ29uZmlnKTtcclxuICAgIGZvciAobGV0IGUgb2YgcikgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgYXN5bmMgZmlsbEphY29ic0VkdWNhdGlvblNlbGVjdEZpZWxkKGUsIHQpIHtcclxuICAgIGxldCByID0gZS4kaW5wdXQsXHJcbiAgICAgIG4gPSAoMCwgZC5nZXRKYWNvYnNFZHVjYXRpb25DbGllbnRTZWFyY2hGaWVsZFR5cGUpKHIpO1xyXG4gICAgaWYgKCFuKSByZXR1cm4gYXdhaXQgdGhpcy5vcGVyYXRpb25Db25maWdbcy5GSUVMRF9UWVBFLlNFTEVDVF0/LihlLCB0LCAhMSkgPz8gITE7XHJcbiAgICBpZiAoIWF3YWl0ICgwLCBmLndhaXRGb3JKYWNvYnNTZWxlY3RGaWVsZEVuYWJsZWQpKHIpKSByZXR1cm4gdGhpc1xyXG4gICAgICAuamFjb2JzRWR1Y2F0aW9uQ2xpZW50U2VhcmNoRmFpbGVkID0gITAsIGNvbnNvbGUuaW5mbyhcclxuICAgICAgICBcIltKYWNvYnNdW0VkdWNhdGlvbl0gY2xpZW50LXNlYXJjaFwiLCB7XHJcbiAgICAgICAgICBmaWVsZFR5cGU6IG4sXHJcbiAgICAgICAgICBzdWNjZXNzOiAhMSxcclxuICAgICAgICAgIHJvdW5kQ291bnQ6IDAsXHJcbiAgICAgICAgICBjYW5kaWRhdGVDb3VudHM6IFtdLFxyXG4gICAgICAgICAgZmFpbHVyZVJlYXNvbjogXCJkaXNhYmxlZFwiXHJcbiAgICAgICAgfSksICExO1xyXG4gICAgbGV0IG8gPSBhd2FpdCAoMCwgZC5yZXNvbHZlSmFjb2JzRWR1Y2F0aW9uQ2xpZW50U2VhcmNoKShyLCB0LCBuLCB5KTtcclxuICAgIGlmIChvLnN1Y2Nlc3MpIHJldHVybiBjb25zb2xlLmluZm8oXCJbSmFjb2JzXVtFZHVjYXRpb25dIGNsaWVudC1zZWFyY2hcIiwge1xyXG4gICAgICBmaWVsZFR5cGU6IG4sXHJcbiAgICAgIHN1Y2Nlc3M6ICEwLFxyXG4gICAgICByb3VuZENvdW50OiBvLnJvdW5kcy5sZW5ndGgsXHJcbiAgICAgIGNhbmRpZGF0ZUNvdW50czogby5yb3VuZHMubWFwKGUgPT4gZS5vcHRpb25zLmxlbmd0aClcclxuICAgIH0pLCAhMDtcclxuICAgIGxldCBpID0gKDAsIGQuZ2V0SmFjb2JzRWR1Y2F0aW9uQ2xpZW50U2VhcmNoT3JpZ2luYWxBbnN3ZXIpKHQsIG4pLFxyXG4gICAgICBhID0gXCJzY2hvb2xcIiA9PT0gbiAmJiBcInJldHVybi1lbXB0eVwiID09PSBvLmZhaWx1cmVSZWFzb24gJiYgISFpICYmIGF3YWl0ICgwLCBmXHJcbiAgICAgICAgLmZpbGxKYWNvYnNTY2hvb2xPdGhlckZhbGxiYWNrKShyLCBpKTtcclxuICAgIHJldHVybiBhIHx8ICh0aGlzLmphY29ic0VkdWNhdGlvbkNsaWVudFNlYXJjaEZhaWxlZCA9ICEwKSwgYXdhaXQgKDAsIGZcclxuICAgICAgLmNsb3NlSmFjb2JzRWR1Y2F0aW9uU2VsZWN0MlNlYXJjaCkoKSwgY29uc29sZS5pbmZvKFxyXG4gICAgXCJbSmFjb2JzXVtFZHVjYXRpb25dIGNsaWVudC1zZWFyY2hcIiwge1xyXG4gICAgICBmaWVsZFR5cGU6IG4sXHJcbiAgICAgIHN1Y2Nlc3M6IGEsXHJcbiAgICAgIHJvdW5kQ291bnQ6IG8ucm91bmRzLmxlbmd0aCxcclxuICAgICAgY2FuZGlkYXRlQ291bnRzOiBvLnJvdW5kcy5tYXAoZSA9PiBlLm9wdGlvbnMubGVuZ3RoKSxcclxuICAgICAgZmFpbHVyZVJlYXNvbjogYSA/IFwicmV0dXJuLWVtcHR5LXNjaG9vbC1vdGhlclwiIDogby5mYWlsdXJlUmVhc29uXHJcbiAgICB9KSwgYVxyXG4gIH1cclxuICBnZXRKYWNvYnNFZHVjYXRpb25PcGVyYXRpb25Db25maWcoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi50aGlzLm9wZXJhdGlvbkNvbmZpZyxcclxuICAgICAgW3MuRklFTERfVFlQRS5TRUxFQ1RdOiAoZSwgdCkgPT4gdGhpcy5maWxsSmFjb2JzRWR1Y2F0aW9uU2VsZWN0RmllbGQoZSwgdClcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgaGFuZGxlUmVzdW1lVXBsb2FkKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlVXBsb2FkUmVzdW1lID8gKGF3YWl0ICgwLCBmLnJlbW92ZVJlc3VtZSkoKSwgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiUmVzdW1lL0NWXCIpKSA6IHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0ICgwLCBmLnJlbW92ZVJlc3VtZSkoKSwgYXdhaXQgKDAsIGYudXBsb2FkUmVzdW1lKSh0aGlzLnJlc3VtZUluZm8sIHRoaXNcclxuICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMsIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgLnVwZGF0ZUZpbGxlZFByb2dyZXNzKVxyXG4gICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxFZHVjYXRpb25BbmRFbXBsb3ltZW50KGUpIHtcclxuICAgIGxldCB0ID0gZS5zb21lKGUgPT4gZS50eXBlID09PSBzLkZJRUxEX1RZUEUuRURVQ0FUSU9OKTtcclxuICAgIGlmICh0ICYmIEFycmF5LmlzQXJyYXkodGhpcy5hbnN3ZXI/LmVkdWNhdGlvbikgJiYgdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uLmxlbmd0aCkge1xyXG4gICAgICBsZXQgZSA9IHRoaXMuYW5zd2VyLmVkdWNhdGlvbi5sZW5ndGg7XHJcbiAgICAgIGF3YWl0ICgwLCBmLmFkYXB0RWR1Y2F0aW9uU2VjdGlvbkNvdW50KShlKTtcclxuICAgICAgbGV0IHQgPSBhd2FpdCAoMCwgcC5nZXRFZHVjYXRpb25SdWxlcykoKSxcclxuICAgICAgICByID0gKDAsIHAudmFsaWRhdGVFZHVjYXRpb25TZWN0aW9uKShlKTtcclxuICAgICAgaWYgKHIuY291bnRNYXRjaGVkICYmIHQubGVuZ3RoID09PSBlKSB7XHJcbiAgICAgICAgdGhpcy5qYWNvYnNFZHVjYXRpb25DbGllbnRTZWFyY2hGYWlsZWQgPSAhMSwgKDAsIGwuc2V0U2VjdGlvblJlc3VsdEZvY3VzUnVsZXMpKHNcclxuICAgICAgICAgIC5GSUVMRF9UWVBFLkVEVUNBVElPTiwgdCk7XHJcbiAgICAgICAgbGV0IGUgPSAoMCwgaS5nZXRFZHVjYXRpb25PcGVyYXRpb25zKSh0LCB0aGlzLmFuc3dlci5lZHVjYXRpb24sIHRoaXNcclxuICAgICAgICAgIC5nZXRKYWNvYnNFZHVjYXRpb25PcGVyYXRpb25Db25maWcoKSwgdm9pZCAwLCB7XHJcbiAgICAgICAgICAgIG9uQ29tcGxldGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuamFjb2JzRWR1Y2F0aW9uQ2xpZW50U2VhcmNoRmFpbGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIkVkdWNhdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVkdWNhdGlvblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblNraXBwZWQ6ICgpID0+IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpLFxyXG4gICAgICAgICAgICBvblNlY3Rpb25SZXN1bHRDaGFuZ2VkOiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVTZWN0aW9uUmVzdWx0XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGxldCB0IG9mIGUpIHRoaXMudGFza1F1ZXVlLmFkZCh0KTtcclxuICAgICAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gICAgICB9IGVsc2UgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIilcclxuICAgIH1cclxuICAgIGxldCByID0gZS5zb21lKGUgPT4gZS50eXBlID09PSBzLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCk7XHJcbiAgICBpZiAociAmJiBBcnJheS5pc0FycmF5KHRoaXMuYW5zd2VyPy53b3JrRXhwZXJpZW5jZSkgJiYgdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2UubGVuZ3RoKSB7XHJcbiAgICAgIGxldCBlID0gdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2UubGVuZ3RoO1xyXG4gICAgICBhd2FpdCAoMCwgZi5hZGFwdEVtcGxveW1lbnRTZWN0aW9uQ291bnQpKGUpO1xyXG4gICAgICBsZXQgdCA9IGF3YWl0ICgwLCBwLmdldEV4cGVyaWVuY2VSdWxlcykoKSxcclxuICAgICAgICByID0gKDAsIHAudmFsaWRhdGVFeHBlcmllbmNlU2VjdGlvbikoZSk7XHJcbiAgICAgIGlmICghci5jb3VudE1hdGNoZWQgfHwgdC5sZW5ndGggIT09IGUpIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIkVtcGxveW1lbnRcIik7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH0oMCwgbC5zZXRTZWN0aW9uUmVzdWx0Rm9jdXNSdWxlcykocy5GSUVMRF9UWVBFLkVNUExPWU1FTlQsIHQpO1xyXG4gICAgICBsZXQgbiA9ICgwLCBpLmdldEVtcGxveW1lbnRPcGVyYXRpb25zKSh0LCB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZSwgdGhpc1xyXG4gICAgICAgIC5vcGVyYXRpb25Db25maWcsIHZvaWQgMCwgKDAsIGkuc2VjdGlvblByb2dyZXNzQ2FsbGJhY2tzKShcIkVtcGxveW1lbnRcIiwgdGhpc1xyXG4gICAgICAgICAgLnByb2dyZXNzVHJhY2tlcikpO1xyXG4gICAgICBmb3IgKGxldCBlIG9mIG4pIHRoaXMudGFza1F1ZXVlLmFkZChlKTtcclxuICAgICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKGUpIHtcclxuICAgIGZvciAobGV0IHQgb2YgZSkgdC50eXBlID09PSBzLkZJRUxEX1RZUEUuQ0hFQ0tCT1ggJiYgdGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgKDAsIGYuZmlsbENoZWNrYm94RmllbGQpKHQsICEwKSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3ModFxyXG4gICAgICAgIC5sYWJlbClcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgZ2V0U3VibWl0QnV0dG9uU2VsZWN0b3IoKSB7XHJcbiAgICByZXR1cm4gcC5qYWNvYnNYcGF0aHMuc3VibWl0QnV0dG9uXHJcbiAgfVxyXG4gIGdldFN1Ym1pdFRyYWNraW5nRGVsZWdhdGlvblJvb3QoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnRcclxuICB9XHJcbiAgcmVzb2x2ZURlbGVnYXRlZFN1Ym1pdEJ1dHRvbihlKSB7XHJcbiAgICByZXR1cm4gKDAsIGYucmVzb2x2ZUphY29ic1N1Ym1pdEJ1dHRvbkZyb21UYXJnZXQpKGUpXHJcbiAgfVxyXG4gIGFzeW5jIGdldEF1dG9maWxsU25hcHNob3QoZSkge1xyXG4gICAgbGV0IHQgPSBhd2FpdCAoMCwgcC5nZXRGb3JtU25hcHNob3QpKCkgfHwge307XHJcbiAgICB0aGlzLmxhc3RGdWxsQXV0b2ZpbGxTbmFwc2hvdCA9IHQ7XHJcbiAgICBsZXQge1xyXG4gICAgICBlZHVjYXRpb246IHIsXHJcbiAgICAgIGVtcGxveW1lbnQ6IG4sXHJcbiAgICAgIC4uLm9cclxuICAgIH0gPSB0O1xyXG4gICAgcmV0dXJuIG9cclxuICB9XHJcbiAgYXN5bmMgZ2V0U3VibWl0U25hcHNob3QoKSB7XHJcbiAgICBsZXQgZSA9IGF3YWl0ICgwLCBwLmdldEZvcm1TbmFwc2hvdCkoKSB8fCB7fTtcclxuICAgIHRoaXMubGFzdEZ1bGxTdWJtaXRTbmFwc2hvdCA9IGU7XHJcbiAgICBsZXQge1xyXG4gICAgICBlZHVjYXRpb246IHQsXHJcbiAgICAgIGVtcGxveW1lbnQ6IHIsXHJcbiAgICAgIC4uLm5cclxuICAgIH0gPSBlO1xyXG4gICAgcmV0dXJuIG5cclxuICB9XHJcbiAgZ2V0RWR1Y2F0aW9uRW1wbG95bWVudFNuYXBzaG90RGF0YShlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlZHVjYXRpb246IEFycmF5LmlzQXJyYXkoZT8uZWR1Y2F0aW9uKSA/IGU/LmVkdWNhdGlvbiA6IFtdLFxyXG4gICAgICBlbXBsb3ltZW50OiBBcnJheS5pc0FycmF5KGU/LmVtcGxveW1lbnQpID8gZT8uZW1wbG95bWVudCA6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEFkZGl0aW9uYWxBdXRvZmlsbFNuYXBzaG90RGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEVkdWNhdGlvbkVtcGxveW1lbnRTbmFwc2hvdERhdGEodGhpcy5sYXN0RnVsbEF1dG9maWxsU25hcHNob3QpXHJcbiAgfVxyXG4gIGdldEFkZGl0aW9uYWxTdWJtaXRTbmFwc2hvdERhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFZHVjYXRpb25FbXBsb3ltZW50U25hcHNob3REYXRhKHRoaXMubGFzdEZ1bGxTdWJtaXRTbmFwc2hvdClcclxuICB9XHJcbiAgc3VibWl0QXBwbGljYXRpb24oKSB7XHJcbiAgICBsZXQgZSA9ICgwLCB1LmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShwLmphY29ic1hwYXRocy5zdWJtaXRCdXR0b24pO1xyXG4gICAgZSAmJiBlLmNsaWNrKClcclxuICB9XHJcbiAgY29uc3RydWN0b3IoLi4uZSkge1xyXG4gICAgc3VwZXIoLi4uZSksIHRoaXMuaGFzQ29tYm9RdWVzdGlvbnMgPSAhMCwgdGhpcy5sYXN0RnVsbEF1dG9maWxsU25hcHNob3QgPSBudWxsLCB0aGlzXHJcbiAgICAgIC5sYXN0RnVsbFN1Ym1pdFNuYXBzaG90ID0gbnVsbCwgdGhpcy5qYWNvYnNFZHVjYXRpb25DbGllbnRTZWFyY2hGYWlsZWQgPSAhMVxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImphY29icy5hZTk1NzAxNi5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);