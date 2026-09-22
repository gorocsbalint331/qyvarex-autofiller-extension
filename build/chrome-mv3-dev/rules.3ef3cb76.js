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
})({"eqEx5":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\paylocity\\rules.js",
    "bundleId": "3475e4f03ef3cb76",
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
var j = z(require("62d0b7421d88f12c"));
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

},{"62d0b7421d88f12c":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"c4xuS":[function(require,module,exports) {
/**
 * Parcel module id: 5BvUQ
 * Resolved path: src/contents/sites/paylocity/rules.js
 * Dependencies:
 *   ./date -> lockZ  =>  src/contents/sites/paylocity/date.js
 *   ./operations -> bmU1E  =>  src/contents/sites/paylocity/operations.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PAYLOCITY_GPA_DESCRIPTION", ()=>c), n.export(r, "PAYLOCITY_AVAILABLE_TO_START_DESCRIPTION", ()=>d), n.export(r, "getRules", ()=>b), n.export(r, "getReferenceRules", ()=>y), n.export(r, "getEduRules", ()=>k), n.export(r, "getExpRules", ()=>j), n.export(r, "getSubmitButtonText", ()=>Q), n.export(r, "getFormSnapshot", ()=>el);
var o = e("~core/enums"), i = e("~core/xpath"), a = e("~utils/delay"), l = e("./operations"), s = e("./date");
let u = 'input[type="text"], textarea', c = "Return GPA as numbers only, for example 3.88. Do not include a denominator such as /4.00.", d = "Return the date in MM/DD/YYYY format.", f = {
    "info.minimumDesiredSalary": "Minimum Desired Salary",
    "info.maximumDesiredSalary": "Maximum Desired Salary"
}, p = "#pcty-wr-apply-references", m = "This is a reference contact field. Use the applicant's professional or personal reference information; do not use the applicant's own personal info.", h = [
    "name",
    "email",
    "phone",
    "referenceType",
    "yearsKnown"
], g = {
    name: "Name",
    email: "Email Address",
    phone: "Phone Number",
    referenceType: "Personal or Work Reference?",
    yearsKnown: "Years Known"
};
async function b(e1 = !1) {
    await P(), await (0, a.delay)(300);
    let t = [], r1 = document.body, n = [
        "#pcty-wr-apply-education",
        "#pcty-wr-apply-workhistory",
        p
    ], o = A(r1, [], n);
    t.push(...o);
    let i = y();
    t.push(...i);
    let l = await k({
        maxGroups: 1
    });
    t.push(...l);
    let s = await j({
        maxGroups: 1
    });
    return (t.push(...s), 0 !== t.length || e1) ? t : (await (0, a.delay)(1e3), await b(!0));
}
function y() {
    let e1 = document.querySelector(p);
    if (!e1 || !S(e1)) return [];
    let t = new Map, r1 = [
        ...ed(e1),
        ...Array.from(e1.querySelectorAll('.rw-dropdownlist[role="combobox"]')),
        ...Array.from(e1.querySelectorAll('[id*="-select-wrapper"]'))
    ];
    return r1.forEach((e1)=>{
        if (!S(e1)) return;
        let r1 = v(e1.id || "");
        if (!r1) return;
        let n = w(e1, r1.field, r1.index), o = t.get(r1.index) || new Map;
        o.set(r1.field, n), t.set(r1.index, o);
    }), Array.from(t.entries()).sort(([e1], [t])=>e1 - t).flatMap(([, e1])=>h.flatMap((t)=>e1.has(t) ? [
                e1.get(t)
            ] : []));
}
function v(e1) {
    let t = e1.match(/^references\.(name|email|phone|referenceType|yearsKnown)\.(\d+)$/);
    return t ? {
        field: t[1],
        index: Number(t[2])
    } : null;
}
function w(e1, t, r1) {
    let n = `Reference ${r1 + 1} ${g[t]}`, i = "INPUT" === e1.tagName || "TEXTAREA" === e1.tagName;
    return i ? {
        type: o.FIELD_TYPE.TEXT,
        label: n,
        $input: e1,
        required: x(e1),
        description: m
    } : {
        type: o.FIELD_TYPE.SELECT,
        label: n,
        $input: e1,
        $label: e1,
        required: x(e1),
        options: J(e1),
        description: m
    };
}
function S(e1) {
    let t = e1.ownerDocument?.defaultView || ("undefined" != typeof window ? window : null);
    if (!t || "function" != typeof t.getComputedStyle) return !0;
    let r1 = t.getComputedStyle(e1);
    return "none" !== r1.display && "hidden" !== r1.visibility && ("function" != typeof e1.getClientRects || e1.getClientRects().length > 0);
}
_c = S;
function E(e1) {
    return f[e1.id] ? o.FIELD_TYPE.NUMBER : e1.classList.contains("rw-dropdownlist") || e1.id?.includes("-select-wrapper") || e1.closest('[id*="-select-wrapper"]') ? o.FIELD_TYPE.SELECT : "radiogroup" === e1.getAttribute("role") || e1.querySelector('input[type="radio"]') ? o.FIELD_TYPE.CHECKBOX : (0, s.inferPaylocityDateFormat)(e1) ? o.FIELD_TYPE.DATE : "TEXTAREA" === e1.tagName || "INPUT" === e1.tagName && "text" === e1.type ? o.FIELD_TYPE.TEXT : null;
}
_c1 = E;
function x(e1) {
    if (e1.hasAttribute("required")) return !0;
    let t = e1.closest('.form-group, [data-automation-id*="-wrapper"]');
    if (t?.classList.contains("form-required")) return !0;
    let r1 = e1.id || e1.getAttribute("id");
    if (r1) {
        let e1 = document.querySelector(`label[for="${r1}"]`);
        if (e1) {
            let t = e1.querySelector("span > em");
            if (t && t.textContent?.trim().toLowerCase().includes("required")) return !0;
        }
    }
    let n = e1.closest("label") || t?.querySelector("label");
    if (n) {
        let e1 = n.querySelector("span > em");
        if (e1 && e1.textContent?.trim().toLowerCase().includes("required")) return !0;
    }
    return !1;
}
function C(e1) {
    if (!e1) return "";
    if (f[e1.id]) return f[e1.id];
    let t = e1.getAttribute("data-for");
    if (t) return t;
    let r1 = e1.id || e1.getAttribute("id");
    if (r1) {
        let e1 = document.querySelector(`label[for="${r1}"]`);
        if (e1) {
            let t = e1.querySelector('[data-automation-id*="-label-span"]');
            if (t) {
                let e1 = t.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(/\s*\(optional\)\s*/gi, "").trim() || "";
                return e1;
            }
            let r1 = e1.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(/\s*\(optional\)\s*/gi, "").trim() || "";
            return r1;
        }
    }
    let n = e1.previousElementSibling;
    for(; n;){
        if ("LABEL" === n.tagName) {
            let e1 = n.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(/\s*\(optional\)\s*/gi, "").trim() || "";
            if (e1) return e1;
        }
        break;
    }
    let o = e1.closest(".form-group");
    if (o) {
        let e1 = o.querySelector(":scope > label");
        if (e1) {
            let t = e1.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(/\s*\(optional\)\s*/gi, "").trim() || "";
            return t;
        }
    }
    let i = e1.closest('[data-automation-id*="-wrapper"]'), a = i?.previousElementSibling;
    if (a?.tagName === "LABEL") {
        let e1 = a.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(/\s*\(optional\)\s*/gi, "").trim() || "";
        if (e1) return e1;
    }
    let l = e1.closest("label");
    if (l) {
        let e1 = l.querySelector('[data-automation-id*="-label-span"]');
        if (e1) {
            let t = e1.textContent?.trim() || "";
            return t;
        }
        let t = l.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(/\s*\(optional\)\s*/gi, "").trim() || "";
        return t;
    }
    let s = e1.parentElement?.querySelector("label");
    if (s) {
        let e1 = s.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(/\s*\(optional\)\s*/gi, "").trim() || "";
        return e1;
    }
    let u = e1.getAttribute("data-automation-id");
    if (u) {
        if (u.includes("startDate")) return "Start Date";
        if (u.includes("endDate")) return "End Date";
        let e1 = u.replace(/^info|^public-site-/, "").replace(/-/g, " ").replace(/([A-Z])/g, " $1").trim();
        return e1;
    }
    return "";
}
_c2 = C;
function A(e1, t = [], r1 = [], n = {}) {
    let i = [], a = new Set, l = (e1)=>r1.some((t)=>e1.closest(t)), s = e1.querySelectorAll('.rw-dropdownlist[role="combobox"]');
    s.forEach((r1)=>{
        let s = r1;
        if (t.includes(s.id) || a.has(s) || l(s) || G(e1, s)) return;
        let u = C(s);
        if (H(u, n)) return;
        let c = J(s);
        i.push({
            type: o.FIELD_TYPE.SELECT,
            label: u,
            $input: s,
            $label: s,
            required: x(s),
            options: c
        }), a.add(s);
    });
    let c = e1.querySelectorAll('[id*="-select-wrapper"]');
    c.forEach((e1)=>{
        let r1 = e1, s = r1.querySelector('input[type="text"]');
        if (!s || t.includes(s.id) || a.has(s) || l(r1)) return;
        let u = C(s);
        if (H(u, n)) return;
        let c = J(r1);
        Y(u, s.id, c), i.push({
            type: o.FIELD_TYPE.SELECT,
            label: u,
            $input: r1,
            $label: r1,
            required: x(s),
            options: c
        }), a.add(s);
    });
    let d = e1.querySelectorAll(u);
    d.forEach((e1)=>{
        let r1 = e1;
        if (!r1.id || t.includes(r1.id) || a.has(r1) || l(r1) || r1.closest('[id*="-select-wrapper"]') || r1.closest(".rw-dropdownlist") || "info.skills" === r1.id || r1.closest(".react-tagsinput")) return;
        let s = r1.closest(".text-question");
        if (s?.querySelector("p label") && s.querySelector("textarea") === r1) return;
        let u = C(r1);
        if (H(u, n)) return;
        let c = E(r1);
        if (c === o.FIELD_TYPE.TEXT || c === o.FIELD_TYPE.NUMBER || c === o.FIELD_TYPE.DATE) {
            let e1 = X(u, r1);
            i.push({
                type: c,
                label: u,
                $input: r1,
                required: x(r1),
                ...e1 ? {
                    description: e1
                } : {}
            }), f[r1.id] && console.info("[Paylocity][SalaryRange] extracted field", {
                id: r1.id,
                label: u,
                type: c
            }), a.add(r1);
        }
    });
    let p = e1.querySelectorAll('input[type="checkbox"]:not([role="switch"]):not(.category-filter-handler)');
    p.forEach((r1)=>{
        let n = r1;
        if (!n.id || t.includes(n.id) || a.has(n) || l(n) || n.closest(".multi-question")) return;
        let s = C(n);
        if (!s && n.id) {
            let t = e1.querySelector(`label[for="${n.id.replace(/\./g, "\\.")}"]`);
            t && (s = t.textContent?.trim() || "");
        }
        s && (i.push({
            type: o.FIELD_TYPE.CHECKBOX,
            label: s,
            $label: n.nextElementSibling || n.parentElement,
            $checkboxs: [
                n
            ],
            required: x(n),
            options: []
        }), a.add(n));
    });
    let m = e1.querySelector("#info\\.skills");
    !m || a.has(m) || l(m) || (i.push({
        type: o.FIELD_TYPE.MULTI_SELECT,
        label: "Skills",
        $input: m,
        required: !1,
        options: []
    }), a.add(m));
    let h = e1.querySelectorAll('[role="radiogroup"]');
    h.forEach((e1)=>{
        let t = e1;
        if (a.has(t) || l(t)) return;
        let r1 = Array.from(t.querySelectorAll('input[type="radio"]'));
        if (0 === r1.length) return;
        let n = t.getAttribute("data-automation-id")?.replace(/^info\./, "").replace(/([A-Z])/g, " $1").trim() || "";
        if (!n) return;
        let s = r1.map((e1)=>e1.value).filter(Boolean);
        i.push({
            type: o.FIELD_TYPE.CHECKBOX,
            label: n,
            $label: t,
            $checkboxs: r1,
            required: !1,
            options: s
        }), a.add(t);
    });
    let g = e1.querySelectorAll(".multi-question");
    g.forEach((e1)=>{
        if (l(e1)) return;
        let t = e1.querySelector("p span.type-semibold");
        if (!t) return;
        let r1 = Array.from(e1.querySelectorAll('input[type="radio"], input[type="checkbox"]'));
        if (0 === r1.length || r1.some((e1)=>a.has(e1))) return;
        let n = r1.map((t)=>{
            let r1 = e1.querySelector(`label[for="${t.id}"]`);
            return r1?.textContent?.trim() || "";
        }).filter(Boolean);
        i.push({
            type: o.FIELD_TYPE.CHECKBOX,
            label: t.textContent?.trim() || "",
            $checkboxs: r1,
            $label: t,
            required: e1.textContent?.includes("(required)") || !1,
            options: n
        }), r1.forEach((e1)=>a.add(e1));
    });
    let b = e1.querySelectorAll(".text-question");
    return b.forEach((e1)=>{
        if (l(e1)) return;
        let t = e1.querySelector("p label"), r1 = e1.querySelector("textarea");
        if (!t || !r1 || a.has(r1)) return;
        let n = t.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(/\s*\(optional\)\s*/gi, "").trim() || "";
        i.push({
            type: o.FIELD_TYPE.TEXT,
            label: n,
            $input: r1,
            $label: t,
            required: /\(\s*required\s*\)/i.test(e1.textContent || "")
        }), a.add(r1);
    }), i;
}
_c3 = A;
async function k(e1 = {}) {
    let t = [], r1 = document.querySelector("#pcty-wr-apply-education");
    if (!r1) return t;
    let n = Array.from(r1.querySelectorAll(".education-history-group")), i = "number" == typeof e1.maxGroups ? n.slice(0, e1.maxGroups) : n;
    for(let e1 = 0; e1 < i.length; e1++){
        let r1 = i[e1];
        await T(r1, e1), await _(r1, !0);
        let n = A(r1, [], [], {
            includeCountry: !0
        }), a = B(r1);
        a && (N(n, a.id), M(n, {
            type: o.FIELD_TYPE.TEXT,
            label: "State/Province",
            $input: a,
            $label: a,
            required: x(a),
            $container: r1
        }), U(n));
        let l = r1.querySelector(`#educationHistory\\.degreeId\\.${e1}`);
        if (l) {
            let e1 = J(l);
            M(n, {
                type: o.FIELD_TYPE.SELECT,
                label: "Degree Obtained",
                $input: r1,
                $label: l,
                required: !1,
                options: e1,
                $container: r1
            });
        }
        let s = r1.querySelector(`#txt-educationHistory-graduationDate-${e1}`);
        if (s) {
            let e1 = X("Graduation Date", s);
            M(n, {
                type: o.FIELD_TYPE.TEXT,
                label: "Graduation Date",
                $input: r1,
                $label: s,
                required: !1,
                ...e1 ? {
                    description: e1
                } : {},
                $container: r1
            });
        }
        n.length > 0 && t.push({
            type: o.FIELD_TYPE.EDUCATION,
            label: "Education",
            required: !0,
            children: n,
            options: K(n)
        });
    }
    return t;
}
async function T(e1, t) {
    let r1 = e1.querySelector(`#educationHistory\\.didYouGraduate\\.${t}`);
    if (!r1) return;
    let n = r1.querySelector(".rw-input")?.textContent?.trim();
    if ("Yes" === n) {
        console.info("[Paylocity][Education] conditional fields already visible", {
            controlId: r1.id,
            isExpanded: F(r1)
        }), await I(e1, t);
        return;
    }
    let o = r1.querySelector("input, button") || r1;
    await (0, l.dispatchClickSequence)(o);
    let i = r1.getAttribute("aria-owns");
    if (i) {
        let n = document.getElementById(i);
        if (n) {
            let i = Array.from(n.querySelectorAll('li[role="option"]')), s = i.find((e1)=>e1.textContent?.trim().toLowerCase() === "yes");
            if (s) {
                await (0, l.dispatchClickSequence)(s, 50, 300);
                let n = F(r1, o);
                n && await (0, l.dispatchClickSequence)(o), console.info("[Paylocity][Education] conditional graduate selection", {
                    controlId: r1.id,
                    selectedYes: !0,
                    expandedAfterSelection: n,
                    closeAttempted: n,
                    isExpandedAfterHandling: F(r1, o)
                }), await (0, a.delay)(200), await I(e1, t);
            }
        }
    }
}
_c4 = T;
function F(e1, t) {
    let r1 = e1.getAttribute("aria-expanded") || t?.getAttribute("aria-expanded");
    return "true" === r1;
}
_c5 = F;
async function I(e1, t) {
    let r1 = e1.querySelector(`#educationHistory\\.degreeId\\.${t}`);
    if (!r1) return;
    let n = r1.querySelector("input, button") || r1;
    await (0, l.dispatchClickSequence)(n, 50, 300), await (0, l.dispatchClickSequence)(n);
}
_c6 = I;
async function j(e1 = {}) {
    let t = [], r1 = document.querySelector("#pcty-wr-apply-workhistory");
    if (!r1) return t;
    let n = Array.from(r1.querySelectorAll(".work-history-group")), i = "number" == typeof e1.maxGroups ? n.slice(0, e1.maxGroups) : n;
    for(let e1 = 0; e1 < i.length; e1++){
        let r1 = i[e1], n = A(r1, [], [], {
            includeCountry: !0
        });
        n.length > 0 && t.push({
            type: o.FIELD_TYPE.EMPLOYMENT,
            label: "Employment",
            required: !0,
            children: n,
            options: K(n)
        });
    }
    return t;
}
let D = new Map;
async function P() {
    await _(document);
}
_c7 = P;
async function _(e1, t = !1) {
    let r1 = [
        '[role="combobox"][data-for]',
        ".rw-dropdownlist",
        '[id*="select-wrapper"]',
        'button[aria-haspopup="listbox"]'
    ], n = new Set;
    for (let o of (r1.forEach((t)=>{
        e1.querySelectorAll(t).forEach((e1)=>{
            n.add(e1);
        });
    }), n)){
        if (o.hasAttribute("disabled") || "true" === o.getAttribute("aria-disabled")) continue;
        let e1 = o.querySelector("input");
        if ("public-site-address-country-select-wrapper" === o.id || e1?.id === "public-site-address-country" || V(o) || t && J(o).length > 0) continue;
        let r1 = o.id || o.getAttribute("data-for") || "", n = o.querySelector("input, button") || o;
        await L(n), await (0, a.delay)(200);
        let i = R(o);
        i.length > 0 && D.set(r1, i), await L(n), await (0, a.delay)(100);
    }
    await (0, a.delay)(300);
}
async function L(e1) {
    let t = [
        "mousedown",
        "mouseup",
        "click"
    ];
    for (let r1 of t)e1.dispatchEvent(new MouseEvent(r1, {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), await (0, a.delay)(50);
}
_c8 = L;
function R(e1) {
    let t = new Set, r1 = e1.id || e1.getAttribute("data-for") || "", n = (e1)=>{
        e1 && e1.querySelectorAll('li[role="option"], [role="option"]').forEach((e1)=>{
            let r1 = e1.textContent?.trim();
            r1 && "--" !== r1 && t.add(r1);
        });
    };
    n(e1);
    let o = e1.getAttribute("aria-owns") || e1.getAttribute("aria-controls");
    if (o && n(document.getElementById(o)), e1.id) {
        let t = e1.id, r1 = [
            `${t}__listbox`,
            `${t}-listbox`,
            `${t}_listbox`
        ];
        r1.forEach((e1)=>n(document.getElementById(e1)));
    }
    document.querySelectorAll('[role="listbox"]').forEach((e1)=>{
        let t = e1.getAttribute("data-for") || e1.id;
        t && (r1.includes(t) || t.includes(r1)) && n(e1);
    });
    let i = r1.replace(/-select-wrapper$/, "");
    return document.querySelectorAll('[id*="dropdown-list-container"]').forEach((e1)=>{
        e1.id.includes(i) && e1.querySelectorAll("div[title]").forEach((e1)=>{
            let r1 = e1.getAttribute("title")?.trim();
            r1 && "--" !== r1 && t.add(r1);
        });
    }), Array.from(t);
}
_c9 = R;
function O(e1 = [], t = []) {
    let r1 = new Set;
    return [
        ...e1,
        ...t
    ].forEach((e1)=>{
        let t = e1?.trim();
        t && r1.add(t);
    }), Array.from(r1);
}
_c10 = O;
function M(e1, t) {
    let r1 = e1.findIndex((e1)=>e1.type === t.type && e1.label === t.label);
    if (-1 === r1) {
        e1.push(t);
        return;
    }
    let n = e1[r1], o = t;
    e1[r1] = {
        ...n,
        ...o,
        options: O(n.options, o.options)
    };
}
_c11 = M;
function N(e1, t) {
    for(let r1 = e1.length - 1; r1 >= 0; r1--)$(e1[r1]) === t && e1.splice(r1, 1);
}
_c12 = N;
function $(e1) {
    let t = e1.$input;
    return t?.id || "";
}
function B(e1) {
    return ed(e1).find((e1)=>q(e1.id || "")) || null;
}
_c13 = B;
function q(e1) {
    return /^educationHistory\.state\.\d+$/.test(e1);
}
function U(e1) {
    for(let t = e1.length - 1; t >= 0; t--){
        let r1 = e1[t];
        r1.type === o.FIELD_TYPE.SELECT && (q($(r1)) || "State" === r1.label) && e1.splice(t, 1);
    }
}
_c14 = U;
function H(e1, t) {
    return !e1 || "Country" === e1 && !t.includeCountry;
}
_c15 = H;
function Y(e1, t, r1) {
    /^State(?:\/Province)?$/i.test(e1.trim()) && console.info(`[Paylocity][State] resolver options captured controlId=${t || "unknown"} optionCount=${r1.length}`);
}
_c16 = Y;
function z(e1) {
    if (!W(e1) || "INPUT" === e1.tagName || "TEXTAREA" === e1.tagName) return !1;
    let t = e1.getAttribute("data-for") || "";
    return e1.classList.contains("rw-dropdownlist") || "combobox" === e1.getAttribute("role") || e1.id.includes("-select-wrapper") || "State" === t;
}
function V(e1) {
    if (!z(e1)) return !1;
    let t = e1.closest(".education-history-group") || document.body;
    return G(t, e1);
}
_c17 = V;
function W(e1) {
    let t = e1.id || "", r1 = e1.getAttribute("aria-owns") || e1.getAttribute("aria-controls") || "";
    return q(t) || /^educationHistory\.state\.\d+(__listbox|-listbox|_listbox)$/.test(r1);
}
_c18 = W;
function G(e1, t) {
    return !!t.id && ed(e1).some((e1)=>e1.id === t.id && e1 !== t && !e1.closest(".rw-dropdownlist") && !e1.closest('[id*="-select-wrapper"]'));
}
_c19 = G;
function K(e1) {
    return e1.map((e1)=>{
        let t = e1, r1 = {
            type: t.type,
            label: t.label
        };
        return t.options?.length && (r1.options = t.options), t.description && (r1.description = t.description), r1;
    });
}
_c20 = K;
function X(e1, t) {
    let r1 = e1.trim();
    if (/^Minimum Desired Salary$/i.test(r1)) return "Return the minimum desired salary as digits only, without currency symbols, commas, or units.";
    if (/^Maximum Desired Salary$/i.test(r1)) return "Return the maximum desired salary as digits only, without currency symbols, commas, or units.";
    if (/^GPA$/i.test(r1)) return c;
    let n = t && (0, s.inferPaylocityDateFormat)(t);
    return n ? (console.info("[Paylocity][Date] rule format inferred", {
        label: r1,
        controlId: t.id,
        controlType: t.getAttribute("type") || t.type || null,
        placeholder: t.getAttribute("placeholder") || t.placeholder || null,
        dateFormat: n
    }), `Return the date in ${n} format.`) : /^Available to Start$/i.test(r1) ? d : void 0;
}
_c21 = X;
function J(e1) {
    let t = e1.id || e1.getAttribute("data-for") || "";
    return D.has(t) ? D.get(t) : R(e1);
}
_c22 = J;
function Q() {
    let e1 = (0, i.getFirstOrderedNode)(".//button[@id='btn-submit']");
    return e1 && e1.textContent?.trim() || "";
}
_c23 = Q;
function Z(e1) {
    if (null == e1) return "";
    if (Array.isArray(e1)) return e1.map(Z).filter(Boolean).join(", ");
    let t = String(e1).trim();
    return "--" === t ? "" : t;
}
_c24 = Z;
function ee(e1) {
    if ("string" == typeof e1) return Z(e1);
    if (e1 && "object" == typeof e1) {
        let t = e1;
        return Z(t.label ?? t.name ?? t.value);
    }
    return "";
}
function et(e1) {
    let t = e1?.querySelector?.('input:not([type="hidden"]):not([type="file"]):not([type="button"]):not([type="submit"]), textarea');
    return Z(t?.value);
}
function er(e1) {
    if (!e1) return "";
    let t = es(e1);
    if (t) return t;
    let r1 = Z(e1.value);
    if (r1) return r1;
    let n = et(e1);
    if (n) return n;
    let o = Array.from(e1.selectedOptions || []).map((e1)=>e1.textContent || e1.value).map(Z).filter(Boolean);
    return o.length > 0 ? o.join(", ") : Z(e1.textContent);
}
function en(e1) {
    let t = e1, r1 = t.$checkboxs || (Array.isArray(t.$input) ? t.$input : t.$input ? [
        t.$input
    ] : []), n = r1.filter(Boolean), o = n.findIndex((e1)=>{
        let t = e1.checked;
        return !0 === t || e1.getAttribute?.("aria-checked") === "true";
    });
    if (o < 0) return "";
    let i = ee(t.options?.[o]);
    if (i) return i;
    let a = er(n[o]);
    return a && "on" !== a.toLowerCase() ? a : a || "true";
}
function eo(e1) {
    let t = e1?.closest(".react-tagsinput");
    return t ? Array.from(t.querySelectorAll(".react-tagsinput-tag")).map((e1)=>{
        let t = e1.querySelector(".react-tagsinput-remove")?.textContent || "", r1 = e1.textContent || "";
        return t && r1.endsWith(t) ? r1.slice(0, -t.length).trim() : r1.trim();
    }).filter(Boolean) : [];
}
function ei(e1) {
    if (e1.type === o.FIELD_TYPE.CHECKBOX || e1.type === o.FIELD_TYPE.RADIO || e1.type === o.FIELD_TYPE.RADIOGROUP) return en(e1);
    let t = e1.$input;
    return "skills" === e1.label.trim().toLowerCase() && t?.id === "info.skills" ? eo(t) : er(t);
}
function ea(e1, t = []) {
    t.forEach((t)=>{
        if (!t?.label || t.type === o.FIELD_TYPE.EDUCATION || t.type === o.FIELD_TYPE.EMPLOYMENT || t.type === o.FIELD_TYPE.SECTION) return;
        let r1 = ei(t);
        (Array.isArray(r1) ? r1.length > 0 : !!r1) && (e1[t.label] = r1);
    });
}
function el(e1 = []) {
    let t = {}, r1 = [
        "info.firstName",
        "info.lastName",
        "info.middleName",
        "info.preferredName",
        "info.email",
        "info.cellPhone",
        "info.phone",
        "info.linkedIn",
        "info.referredBy"
    ];
    r1.forEach((e1)=>{
        let r1 = document.getElementById(e1);
        if (r1 && r1.value) {
            let n = e1.split(".")[1];
            t[n] = r1.value;
        }
    });
    let n = [
        "public-site-address-address-1",
        "public-site-address-address-2",
        "public-site-address-city",
        "public-site-address-county",
        "public-site-address-zip"
    ];
    n.forEach((e1)=>{
        let r1 = document.getElementById(e1);
        r1 && r1.value && (t[e1.replace("public-site-address-", "")] = r1.value);
    });
    let o = document.querySelector("#pcty-wr-apply-workhistory");
    if (o) {
        let e1 = o.querySelectorAll(".work-history-group");
        t.employment = Array.from(e1).map((e1, t)=>{
            let r1 = {}, n = e1.querySelector(`#workHistory\\.companyName\\.${t}`);
            n && (r1["Company Name"] = n.value);
            let o = e1.querySelector(`#workHistory\\.position\\.${t}`);
            return o && (r1.Position = o.value), r1;
        });
    }
    let i = document.querySelector("#pcty-wr-apply-education");
    if (i) {
        let e1 = i.querySelectorAll(".education-history-group");
        t.education = Array.from(e1).map((e1, t)=>{
            let r1 = {}, n = e1.querySelector(`#educationHistory\\.name\\.${t}`);
            n && (r1["School Name"] = n.value);
            let o = e1.querySelector(`#educationHistory\\.areaOfStudy\\.${t}`);
            o && (r1["Area of Study"] = o.value);
            let i = e1.querySelector(`#educationHistory\\.country\\.${t}`), a = es(i);
            a && (r1.Country = a);
            let l = e1.querySelector(`#educationHistory\\.city\\.${t}`);
            l?.value && (r1.City = l.value);
            let s = e1.querySelector(`#educationHistory\\.state\\.${t}`), u = ec(e1, `educationHistory.state.${t}`) || s, c = C(u), d = eu(u);
            return d && (r1[c || "State/Province"] = d), r1;
        });
    }
    return ea(t, e1), t;
}
function es(e1) {
    let t = e1?.querySelector(".rw-input")?.textContent?.trim() || "";
    return "--" === t ? "" : t;
}
function eu(e1) {
    return e1 ? e1 instanceof HTMLInputElement || e1 instanceof HTMLTextAreaElement ? e1.value?.trim() || "" : es(e1) : "";
}
function ec(e1, t) {
    return ed(e1).find((e1)=>e1.id === t) || null;
}
function ed(e1) {
    return Array.from(e1.querySelectorAll(u));
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");
$RefreshReg$(_c7, "P");
$RefreshReg$(_c8, "L");
$RefreshReg$(_c9, "R");
$RefreshReg$(_c10, "O");
$RefreshReg$(_c11, "M");
$RefreshReg$(_c12, "N");
$RefreshReg$(_c13, "B");
$RefreshReg$(_c14, "U");
$RefreshReg$(_c15, "H");
$RefreshReg$(_c16, "Y");
$RefreshReg$(_c17, "V");
$RefreshReg$(_c18, "W");
$RefreshReg$(_c19, "G");
$RefreshReg$(_c20, "K");
$RefreshReg$(_c21, "X");
$RefreshReg$(_c22, "J");
$RefreshReg$(_c23, "Q");
$RefreshReg$(_c24, "Z");

},{}]},["eqEx5","c4xuS"], "c4xuS", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLElBQUUsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxJQUFFLE9BQU87QUFBeUIsSUFBSSxJQUFFLE9BQU87QUFBb0IsSUFBSSxJQUFFLE9BQU8sZ0JBQWUsSUFBRSxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtJQUFLLElBQUcsS0FBRyxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsWUFBVyxLQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRSxNQUFJLE1BQUksS0FBRyxFQUFFLEdBQUUsR0FBRTtRQUFDLEtBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBRSxDQUFBLElBQUUsRUFBRSxHQUFFLEVBQUMsS0FBSSxFQUFFO0lBQVU7SUFBRyxPQUFPO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBSyxDQUFBLElBQUUsS0FBRyxPQUFLLEVBQUUsRUFBRSxNQUFJLENBQUMsR0FBRSxFQUFFLEtBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxhQUFXLEVBQUUsR0FBRSxXQUFVO1FBQUMsT0FBTTtRQUFFLFlBQVcsQ0FBQztJQUFDLEtBQUcsR0FBRSxFQUFDO0FBQUcsSUFBSSxJQUFFLFdBQVcsU0FBUyxRQUFNLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxXQUFXLFNBQVMsT0FBSyxDQUFDO0FBQUUsSUFBSSxJQUFFLElBQUksSUFBSSxJQUFHLElBQUUsQ0FBQSxJQUFHLEVBQUUsSUFBSSxJQUFHLEtBQUcsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFdBQVcsU0FBTyxFQUFFLFNBQVMsTUFBTSxJQUFJLENBQUEsSUFBRyxFQUFFLE1BQU0sTUFBTSxPQUFPLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLENBQUEsR0FBRyxDQUFDO0FBQUcsSUFBSSxLQUFHLEVBQUUsY0FBYSxJQUFFLElBQUksRUFBRSxnQkFBYyxJQUFJLFlBQVUsUUFBTyxLQUFHO0FBQUksSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLEVBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxFQUFFLE9BQU8sSUFBRyxRQUFPO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRyxJQUFJLFFBQVEsTUFBTSxxQkFBa0IsT0FBTyxJQUFHLFFBQU8sSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsR0FBRSxJQUFFLENBQUMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSTtBQUFHLElBQUksSUFBRTtJQUFDLG1CQUFrQjtJQUFNLGdCQUFlO0lBQU0sV0FBVTtJQUFNLFlBQVc7UUFBQztLQUFlO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBSyxpQkFBZ0I7SUFBZ0csWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFJO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxlQUFlLEVBQUUsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFHLENBQUEsRUFBRSwyQkFBMEIsRUFBRSxRQUFRLFlBQVk7UUFBQyx3QkFBdUIsQ0FBQztJQUFDLEVBQUMsSUFBRyxXQUFXLFVBQVU7QUFBVTtBQUFDLFNBQVM7SUFBSSxPQUFNLENBQUMsRUFBRSxRQUFNLEVBQUUsU0FBTyxZQUFVLFNBQVMsU0FBUyxRQUFRLFlBQVUsSUFBRSxTQUFTLFdBQVMsY0FBWSxFQUFFO0FBQUk7QUFBQyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxjQUFZLEVBQUU7QUFBSTtBQUFDLFNBQVM7SUFBSSxPQUFPLEVBQUUsUUFBTSxTQUFTO0FBQUk7QUFBQyxJQUFJLElBQUU7QUFBeUIsSUFBSSxJQUFFO0lBQUMsZUFBYyxDQUFDO0lBQUUsaUJBQWdCLEVBQUU7SUFBQyxnQkFBZSxFQUFFO0FBQUEsR0FBRSxJQUFFO0lBQUssRUFBRSxnQkFBYyxDQUFDLEdBQUUsRUFBRSxrQkFBZ0IsRUFBRSxFQUFDLEVBQUUsaUJBQWUsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLEVBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLEdBQUUsR0FBRTtJQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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O0lBQ0Y7SUFDQSxPQUFPLEdBQUcsR0FBRyxLQUFJO0FBQ25CO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLElBQUksSUFBRyxjQUFjLGNBQWMsYUFBYSxVQUFVO0lBQzlELE9BQU8sU0FBUyxJQUFJLEtBQUs7QUFDM0I7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLE9BQU8sS0FBSSxjQUFhLG9CQUFvQixjQUFhLHNCQUFzQixHQUFFLE9BQU8sVUFDdEYsS0FBSyxHQUFHLE1BQUs7QUFDakI7QUFFQSxTQUFTLEdBQUcsRUFBQyxFQUFFLENBQUM7SUFDZCxPQUFPLEdBQUcsSUFBRyxLQUFLLENBQUEsS0FBSyxHQUFFLE9BQU8sTUFBTTtBQUN4QztBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsT0FBTyxNQUFNLEtBQUssR0FBRSxpQkFBaUI7QUFDdkMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTAxYWJiYmI0MDdhMDEyMWYuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvcGF5bG9jaXR5L3J1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXHBheWxvY2l0eVxcXFxydWxlcy5qc1wiLFwiYnVuZGxlSWRcIjpcIjM0NzVlNGYwM2VmM2NiNzZcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA1QnZVUVxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvcGF5bG9jaXR5L3J1bGVzLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9kYXRlIC0+IGxvY2taICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3BheWxvY2l0eS9kYXRlLmpzXHJcbiAqICAgLi9vcGVyYXRpb25zIC0+IGJtVTFFICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3BheWxvY2l0eS9vcGVyYXRpb25zLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiUEFZTE9DSVRZX0dQQV9ERVNDUklQVElPTlwiLCAoKSA9PiBjKSwgbi5leHBvcnQocixcclxuICAgIFwiUEFZTE9DSVRZX0FWQUlMQUJMRV9UT19TVEFSVF9ERVNDUklQVElPTlwiLCAoKSA9PiBkKSwgbi5leHBvcnQociwgXCJnZXRSdWxlc1wiLCAoKSA9PiBiKSwgblxyXG4gIC5leHBvcnQociwgXCJnZXRSZWZlcmVuY2VSdWxlc1wiLCAoKSA9PiB5KSwgbi5leHBvcnQociwgXCJnZXRFZHVSdWxlc1wiLCAoKSA9PiBrKSwgbi5leHBvcnQocixcclxuICAgIFwiZ2V0RXhwUnVsZXNcIiwgKCkgPT4gaiksIG4uZXhwb3J0KHIsIFwiZ2V0U3VibWl0QnV0dG9uVGV4dFwiLCAoKSA9PiBRKSwgbi5leHBvcnQocixcclxuICAgIFwiZ2V0Rm9ybVNuYXBzaG90XCIsICgpID0+IGVsKTtcclxudmFyIG8gPSBlKFwifmNvcmUvZW51bXNcIiksXHJcbiAgaSA9IGUoXCJ+Y29yZS94cGF0aFwiKSxcclxuICBhID0gZShcIn51dGlscy9kZWxheVwiKSxcclxuICBsID0gZShcIi4vb3BlcmF0aW9uc1wiKSxcclxuICBzID0gZShcIi4vZGF0ZVwiKTtcclxubGV0IHUgPSAnaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhJyxcclxuICBjID0gXCJSZXR1cm4gR1BBIGFzIG51bWJlcnMgb25seSwgZm9yIGV4YW1wbGUgMy44OC4gRG8gbm90IGluY2x1ZGUgYSBkZW5vbWluYXRvciBzdWNoIGFzIC80LjAwLlwiLFxyXG4gIGQgPSBcIlJldHVybiB0aGUgZGF0ZSBpbiBNTS9ERC9ZWVlZIGZvcm1hdC5cIixcclxuICBmID0ge1xyXG4gICAgXCJpbmZvLm1pbmltdW1EZXNpcmVkU2FsYXJ5XCI6IFwiTWluaW11bSBEZXNpcmVkIFNhbGFyeVwiLFxyXG4gICAgXCJpbmZvLm1heGltdW1EZXNpcmVkU2FsYXJ5XCI6IFwiTWF4aW11bSBEZXNpcmVkIFNhbGFyeVwiXHJcbiAgfSxcclxuICBwID0gXCIjcGN0eS13ci1hcHBseS1yZWZlcmVuY2VzXCIsXHJcbiAgbSA9XHJcbiAgXCJUaGlzIGlzIGEgcmVmZXJlbmNlIGNvbnRhY3QgZmllbGQuIFVzZSB0aGUgYXBwbGljYW50J3MgcHJvZmVzc2lvbmFsIG9yIHBlcnNvbmFsIHJlZmVyZW5jZSBpbmZvcm1hdGlvbjsgZG8gbm90IHVzZSB0aGUgYXBwbGljYW50J3Mgb3duIHBlcnNvbmFsIGluZm8uXCIsXHJcbiAgaCA9IFtcIm5hbWVcIiwgXCJlbWFpbFwiLCBcInBob25lXCIsIFwicmVmZXJlbmNlVHlwZVwiLCBcInllYXJzS25vd25cIl0sXHJcbiAgZyA9IHtcclxuICAgIG5hbWU6IFwiTmFtZVwiLFxyXG4gICAgZW1haWw6IFwiRW1haWwgQWRkcmVzc1wiLFxyXG4gICAgcGhvbmU6IFwiUGhvbmUgTnVtYmVyXCIsXHJcbiAgICByZWZlcmVuY2VUeXBlOiBcIlBlcnNvbmFsIG9yIFdvcmsgUmVmZXJlbmNlP1wiLFxyXG4gICAgeWVhcnNLbm93bjogXCJZZWFycyBLbm93blwiXHJcbiAgfTtcclxuYXN5bmMgZnVuY3Rpb24gYihlID0gITEpIHtcclxuICBhd2FpdCBQKCksIGF3YWl0ICgwLCBhLmRlbGF5KSgzMDApO1xyXG4gIGxldCB0ID0gW10sXHJcbiAgICByID0gZG9jdW1lbnQuYm9keSxcclxuICAgIG4gPSBbXCIjcGN0eS13ci1hcHBseS1lZHVjYXRpb25cIiwgXCIjcGN0eS13ci1hcHBseS13b3JraGlzdG9yeVwiLCBwXSxcclxuICAgIG8gPSBBKHIsIFtdLCBuKTtcclxuICB0LnB1c2goLi4ubyk7XHJcbiAgbGV0IGkgPSB5KCk7XHJcbiAgdC5wdXNoKC4uLmkpO1xyXG4gIGxldCBsID0gYXdhaXQgayh7XHJcbiAgICBtYXhHcm91cHM6IDFcclxuICB9KTtcclxuICB0LnB1c2goLi4ubCk7XHJcbiAgbGV0IHMgPSBhd2FpdCBqKHtcclxuICAgIG1heEdyb3VwczogMVxyXG4gIH0pO1xyXG4gIHJldHVybiAodC5wdXNoKC4uLnMpLCAwICE9PSB0Lmxlbmd0aCB8fCBlKSA/IHQgOiAoYXdhaXQgKDAsIGEuZGVsYXkpKDFlMyksIGF3YWl0IGIoITApKVxyXG59XHJcblxyXG5mdW5jdGlvbiB5KCkge1xyXG4gIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwKTtcclxuICBpZiAoIWUgfHwgIVMoZSkpIHJldHVybiBbXTtcclxuICBsZXQgdCA9IG5ldyBNYXAsXHJcbiAgICByID0gWy4uLmVkKGUpLCAuLi5BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnLnJ3LWRyb3Bkb3dubGlzdFtyb2xlPVwiY29tYm9ib3hcIl0nKSksIC4uLkFycmF5XHJcbiAgICAgIC5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnW2lkKj1cIi1zZWxlY3Qtd3JhcHBlclwiXScpKVxyXG4gICAgXTtcclxuICByZXR1cm4gci5mb3JFYWNoKGUgPT4ge1xyXG4gICAgaWYgKCFTKGUpKSByZXR1cm47XHJcbiAgICBsZXQgciA9IHYoZS5pZCB8fCBcIlwiKTtcclxuICAgIGlmICghcikgcmV0dXJuO1xyXG4gICAgbGV0IG4gPSB3KGUsIHIuZmllbGQsIHIuaW5kZXgpLFxyXG4gICAgICBvID0gdC5nZXQoci5pbmRleCkgfHwgbmV3IE1hcDtcclxuICAgIG8uc2V0KHIuZmllbGQsIG4pLCB0LnNldChyLmluZGV4LCBvKVxyXG4gIH0pLCBBcnJheS5mcm9tKHQuZW50cmllcygpKS5zb3J0KChbZV0sIFt0XSkgPT4gZSAtIHQpLmZsYXRNYXAoKFssIGVdKSA9PiBoLmZsYXRNYXAodCA9PiBlLmhhcyhcclxuICAgIHQpID8gW2UuZ2V0KHQpXSA6IFtdKSlcclxufVxyXG5cclxuZnVuY3Rpb24gdihlKSB7XHJcbiAgbGV0IHQgPSBlLm1hdGNoKC9ecmVmZXJlbmNlc1xcLihuYW1lfGVtYWlsfHBob25lfHJlZmVyZW5jZVR5cGV8eWVhcnNLbm93bilcXC4oXFxkKykkLyk7XHJcbiAgcmV0dXJuIHQgPyB7XHJcbiAgICBmaWVsZDogdFsxXSxcclxuICAgIGluZGV4OiBOdW1iZXIodFsyXSlcclxuICB9IDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiB3KGUsIHQsIHIpIHtcclxuICBsZXQgbiA9IGBSZWZlcmVuY2UgJHtyKzF9ICR7Z1t0XX1gLFxyXG4gICAgaSA9IFwiSU5QVVRcIiA9PT0gZS50YWdOYW1lIHx8IFwiVEVYVEFSRUFcIiA9PT0gZS50YWdOYW1lO1xyXG4gIHJldHVybiBpID8ge1xyXG4gICAgdHlwZTogby5GSUVMRF9UWVBFLlRFWFQsXHJcbiAgICBsYWJlbDogbixcclxuICAgICRpbnB1dDogZSxcclxuICAgIHJlcXVpcmVkOiB4KGUpLFxyXG4gICAgZGVzY3JpcHRpb246IG1cclxuICB9IDoge1xyXG4gICAgdHlwZTogby5GSUVMRF9UWVBFLlNFTEVDVCxcclxuICAgIGxhYmVsOiBuLFxyXG4gICAgJGlucHV0OiBlLFxyXG4gICAgJGxhYmVsOiBlLFxyXG4gICAgcmVxdWlyZWQ6IHgoZSksXHJcbiAgICBvcHRpb25zOiBKKGUpLFxyXG4gICAgZGVzY3JpcHRpb246IG1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFMoZSkge1xyXG4gIGxldCB0ID0gZS5vd25lckRvY3VtZW50Py5kZWZhdWx0VmlldyB8fCAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ID8gd2luZG93IDogbnVsbCk7XHJcbiAgaWYgKCF0IHx8IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdC5nZXRDb21wdXRlZFN0eWxlKSByZXR1cm4gITA7XHJcbiAgbGV0IHIgPSB0LmdldENvbXB1dGVkU3R5bGUoZSk7XHJcbiAgcmV0dXJuIFwibm9uZVwiICE9PSByLmRpc3BsYXkgJiYgXCJoaWRkZW5cIiAhPT0gci52aXNpYmlsaXR5ICYmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGVcclxuICAgIC5nZXRDbGllbnRSZWN0cyB8fCBlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoID4gMClcclxufVxyXG5cclxuZnVuY3Rpb24gRShlKSB7XHJcbiAgcmV0dXJuIGZbZS5pZF0gPyBvLkZJRUxEX1RZUEUuTlVNQkVSIDogZS5jbGFzc0xpc3QuY29udGFpbnMoXCJydy1kcm9wZG93bmxpc3RcIikgfHwgZS5pZD8uaW5jbHVkZXMoXHJcbiAgICAgIFwiLXNlbGVjdC13cmFwcGVyXCIpIHx8IGUuY2xvc2VzdCgnW2lkKj1cIi1zZWxlY3Qtd3JhcHBlclwiXScpID8gby5GSUVMRF9UWVBFLlNFTEVDVCA6XHJcbiAgICBcInJhZGlvZ3JvdXBcIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpIHx8IGUucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdJykgPyBvLkZJRUxEX1RZUEVcclxuICAgIC5DSEVDS0JPWCA6ICgwLCBzLmluZmVyUGF5bG9jaXR5RGF0ZUZvcm1hdCkoZSkgPyBvLkZJRUxEX1RZUEUuREFURSA6IFwiVEVYVEFSRUFcIiA9PT0gZS50YWdOYW1lIHx8XHJcbiAgICBcIklOUFVUXCIgPT09IGUudGFnTmFtZSAmJiBcInRleHRcIiA9PT0gZS50eXBlID8gby5GSUVMRF9UWVBFLlRFWFQgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHgoZSkge1xyXG4gIGlmIChlLmhhc0F0dHJpYnV0ZShcInJlcXVpcmVkXCIpKSByZXR1cm4gITA7XHJcbiAgbGV0IHQgPSBlLmNsb3Nlc3QoJy5mb3JtLWdyb3VwLCBbZGF0YS1hdXRvbWF0aW9uLWlkKj1cIi13cmFwcGVyXCJdJyk7XHJcbiAgaWYgKHQ/LmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0tcmVxdWlyZWRcIikpIHJldHVybiAhMDtcclxuICBsZXQgciA9IGUuaWQgfHwgZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICBpZiAocikge1xyXG4gICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3J9XCJdYCk7XHJcbiAgICBpZiAoZSkge1xyXG4gICAgICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcInNwYW4gPiBlbVwiKTtcclxuICAgICAgaWYgKHQgJiYgdC50ZXh0Q29udGVudD8udHJpbSgpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJyZXF1aXJlZFwiKSkgcmV0dXJuICEwXHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBuID0gZS5jbG9zZXN0KFwibGFiZWxcIikgfHwgdD8ucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xyXG4gIGlmIChuKSB7XHJcbiAgICBsZXQgZSA9IG4ucXVlcnlTZWxlY3RvcihcInNwYW4gPiBlbVwiKTtcclxuICAgIGlmIChlICYmIGUudGV4dENvbnRlbnQ/LnRyaW0oKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwicmVxdWlyZWRcIikpIHJldHVybiAhMFxyXG4gIH1cclxuICByZXR1cm4gITFcclxufVxyXG5cclxuZnVuY3Rpb24gQyhlKSB7XHJcbiAgaWYgKCFlKSByZXR1cm4gXCJcIjtcclxuICBpZiAoZltlLmlkXSkgcmV0dXJuIGZbZS5pZF07XHJcbiAgbGV0IHQgPSBlLmdldEF0dHJpYnV0ZShcImRhdGEtZm9yXCIpO1xyXG4gIGlmICh0KSByZXR1cm4gdDtcclxuICBsZXQgciA9IGUuaWQgfHwgZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICBpZiAocikge1xyXG4gICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3J9XCJdYCk7XHJcbiAgICBpZiAoZSkge1xyXG4gICAgICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b21hdGlvbi1pZCo9XCItbGFiZWwtc3BhblwiXScpO1xyXG4gICAgICBpZiAodCkge1xyXG4gICAgICAgIGxldCBlID0gdC50ZXh0Q29udGVudD8udHJpbSgpLnJlcGxhY2UoL1xccypcXChyZXF1aXJlZFxcKVxccyovZ2ksIFwiXCIpLnJlcGxhY2UoXHJcbiAgICAgICAgICAvXFxzKlxcKG9wdGlvbmFsXFwpXFxzKi9naSwgXCJcIikudHJpbSgpIHx8IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIGVcclxuICAgICAgfVxyXG4gICAgICBsZXQgciA9IGUudGV4dENvbnRlbnQ/LnRyaW0oKS5yZXBsYWNlKC9cXHMqXFwocmVxdWlyZWRcXClcXHMqL2dpLCBcIlwiKS5yZXBsYWNlKFxyXG4gICAgICAgIC9cXHMqXFwob3B0aW9uYWxcXClcXHMqL2dpLCBcIlwiKS50cmltKCkgfHwgXCJcIjtcclxuICAgICAgcmV0dXJuIHJcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IG4gPSBlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgZm9yICg7IG47KSB7XHJcbiAgICBpZiAoXCJMQUJFTFwiID09PSBuLnRhZ05hbWUpIHtcclxuICAgICAgbGV0IGUgPSBuLnRleHRDb250ZW50Py50cmltKCkucmVwbGFjZSgvXFxzKlxcKHJlcXVpcmVkXFwpXFxzKi9naSwgXCJcIikucmVwbGFjZShcclxuICAgICAgICAvXFxzKlxcKG9wdGlvbmFsXFwpXFxzKi9naSwgXCJcIikudHJpbSgpIHx8IFwiXCI7XHJcbiAgICAgIGlmIChlKSByZXR1cm4gZVxyXG4gICAgfVxyXG4gICAgYnJlYWtcclxuICB9XHJcbiAgbGV0IG8gPSBlLmNsb3Nlc3QoXCIuZm9ybS1ncm91cFwiKTtcclxuICBpZiAobykge1xyXG4gICAgbGV0IGUgPSBvLnF1ZXJ5U2VsZWN0b3IoXCI6c2NvcGUgPiBsYWJlbFwiKTtcclxuICAgIGlmIChlKSB7XHJcbiAgICAgIGxldCB0ID0gZS50ZXh0Q29udGVudD8udHJpbSgpLnJlcGxhY2UoL1xccypcXChyZXF1aXJlZFxcKVxccyovZ2ksIFwiXCIpLnJlcGxhY2UoXHJcbiAgICAgICAgL1xccypcXChvcHRpb25hbFxcKVxccyovZ2ksIFwiXCIpLnRyaW0oKSB8fCBcIlwiO1xyXG4gICAgICByZXR1cm4gdFxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgaSA9IGUuY2xvc2VzdCgnW2RhdGEtYXV0b21hdGlvbi1pZCo9XCItd3JhcHBlclwiXScpLFxyXG4gICAgYSA9IGk/LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgaWYgKGE/LnRhZ05hbWUgPT09IFwiTEFCRUxcIikge1xyXG4gICAgbGV0IGUgPSBhLnRleHRDb250ZW50Py50cmltKCkucmVwbGFjZSgvXFxzKlxcKHJlcXVpcmVkXFwpXFxzKi9naSwgXCJcIikucmVwbGFjZShcclxuICAgICAgL1xccypcXChvcHRpb25hbFxcKVxccyovZ2ksIFwiXCIpLnRyaW0oKSB8fCBcIlwiO1xyXG4gICAgaWYgKGUpIHJldHVybiBlXHJcbiAgfVxyXG4gIGxldCBsID0gZS5jbG9zZXN0KFwibGFiZWxcIik7XHJcbiAgaWYgKGwpIHtcclxuICAgIGxldCBlID0gbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hdXRvbWF0aW9uLWlkKj1cIi1sYWJlbC1zcGFuXCJdJyk7XHJcbiAgICBpZiAoZSkge1xyXG4gICAgICBsZXQgdCA9IGUudGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiO1xyXG4gICAgICByZXR1cm4gdFxyXG4gICAgfVxyXG4gICAgbGV0IHQgPSBsLnRleHRDb250ZW50Py50cmltKCkucmVwbGFjZSgvXFxzKlxcKHJlcXVpcmVkXFwpXFxzKi9naSwgXCJcIikucmVwbGFjZShcclxuICAgICAgL1xccypcXChvcHRpb25hbFxcKVxccyovZ2ksIFwiXCIpLnRyaW0oKSB8fCBcIlwiO1xyXG4gICAgcmV0dXJuIHRcclxuICB9XHJcbiAgbGV0IHMgPSBlLnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKTtcclxuICBpZiAocykge1xyXG4gICAgbGV0IGUgPSBzLnRleHRDb250ZW50Py50cmltKCkucmVwbGFjZSgvXFxzKlxcKHJlcXVpcmVkXFwpXFxzKi9naSwgXCJcIikucmVwbGFjZShcclxuICAgICAgL1xccypcXChvcHRpb25hbFxcKVxccyovZ2ksIFwiXCIpLnRyaW0oKSB8fCBcIlwiO1xyXG4gICAgcmV0dXJuIGVcclxuICB9XHJcbiAgbGV0IHUgPSBlLmdldEF0dHJpYnV0ZShcImRhdGEtYXV0b21hdGlvbi1pZFwiKTtcclxuICBpZiAodSkge1xyXG4gICAgaWYgKHUuaW5jbHVkZXMoXCJzdGFydERhdGVcIikpIHJldHVybiBcIlN0YXJ0IERhdGVcIjtcclxuICAgIGlmICh1LmluY2x1ZGVzKFwiZW5kRGF0ZVwiKSkgcmV0dXJuIFwiRW5kIERhdGVcIjtcclxuICAgIGxldCBlID0gdS5yZXBsYWNlKC9eaW5mb3xecHVibGljLXNpdGUtLywgXCJcIikucmVwbGFjZSgvLS9nLCBcIiBcIikucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKVxyXG4gICAgLnRyaW0oKTtcclxuICAgIHJldHVybiBlXHJcbiAgfVxyXG4gIHJldHVybiBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEEoZSwgdCA9IFtdLCByID0gW10sIG4gPSB7fSkge1xyXG4gIGxldCBpID0gW10sXHJcbiAgICBhID0gbmV3IFNldCxcclxuICAgIGwgPSBlID0+IHIuc29tZSh0ID0+IGUuY2xvc2VzdCh0KSksXHJcbiAgICBzID0gZS5xdWVyeVNlbGVjdG9yQWxsKCcucnctZHJvcGRvd25saXN0W3JvbGU9XCJjb21ib2JveFwiXScpO1xyXG4gIHMuZm9yRWFjaChyID0+IHtcclxuICAgIGxldCBzID0gcjtcclxuICAgIGlmICh0LmluY2x1ZGVzKHMuaWQpIHx8IGEuaGFzKHMpIHx8IGwocykgfHwgRyhlLCBzKSkgcmV0dXJuO1xyXG4gICAgbGV0IHUgPSBDKHMpO1xyXG4gICAgaWYgKEgodSwgbikpIHJldHVybjtcclxuICAgIGxldCBjID0gSihzKTtcclxuICAgIGkucHVzaCh7XHJcbiAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5TRUxFQ1QsXHJcbiAgICAgIGxhYmVsOiB1LFxyXG4gICAgICAkaW5wdXQ6IHMsXHJcbiAgICAgICRsYWJlbDogcyxcclxuICAgICAgcmVxdWlyZWQ6IHgocyksXHJcbiAgICAgIG9wdGlvbnM6IGNcclxuICAgIH0pLCBhLmFkZChzKVxyXG4gIH0pO1xyXG4gIGxldCBjID0gZS5xdWVyeVNlbGVjdG9yQWxsKCdbaWQqPVwiLXNlbGVjdC13cmFwcGVyXCJdJyk7XHJcbiAgYy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgbGV0IHIgPSBlLFxyXG4gICAgICBzID0gci5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xyXG4gICAgaWYgKCFzIHx8IHQuaW5jbHVkZXMocy5pZCkgfHwgYS5oYXMocykgfHwgbChyKSkgcmV0dXJuO1xyXG4gICAgbGV0IHUgPSBDKHMpO1xyXG4gICAgaWYgKEgodSwgbikpIHJldHVybjtcclxuICAgIGxldCBjID0gSihyKTtcclxuICAgIFkodSwgcy5pZCwgYyksIGkucHVzaCh7XHJcbiAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5TRUxFQ1QsXHJcbiAgICAgIGxhYmVsOiB1LFxyXG4gICAgICAkaW5wdXQ6IHIsXHJcbiAgICAgICRsYWJlbDogcixcclxuICAgICAgcmVxdWlyZWQ6IHgocyksXHJcbiAgICAgIG9wdGlvbnM6IGNcclxuICAgIH0pLCBhLmFkZChzKVxyXG4gIH0pO1xyXG4gIGxldCBkID0gZS5xdWVyeVNlbGVjdG9yQWxsKHUpO1xyXG4gIGQuZm9yRWFjaChlID0+IHtcclxuICAgIGxldCByID0gZTtcclxuICAgIGlmICghci5pZCB8fCB0LmluY2x1ZGVzKHIuaWQpIHx8IGEuaGFzKHIpIHx8IGwocikgfHwgci5jbG9zZXN0KCdbaWQqPVwiLXNlbGVjdC13cmFwcGVyXCJdJykgfHxcclxuICAgICAgci5jbG9zZXN0KFwiLnJ3LWRyb3Bkb3dubGlzdFwiKSB8fCBcImluZm8uc2tpbGxzXCIgPT09IHIuaWQgfHwgci5jbG9zZXN0KFwiLnJlYWN0LXRhZ3NpbnB1dFwiKSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgbGV0IHMgPSByLmNsb3Nlc3QoXCIudGV4dC1xdWVzdGlvblwiKTtcclxuICAgIGlmIChzPy5xdWVyeVNlbGVjdG9yKFwicCBsYWJlbFwiKSAmJiBzLnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKSA9PT0gcikgcmV0dXJuO1xyXG4gICAgbGV0IHUgPSBDKHIpO1xyXG4gICAgaWYgKEgodSwgbikpIHJldHVybjtcclxuICAgIGxldCBjID0gRShyKTtcclxuICAgIGlmIChjID09PSBvLkZJRUxEX1RZUEUuVEVYVCB8fCBjID09PSBvLkZJRUxEX1RZUEUuTlVNQkVSIHx8IGMgPT09IG8uRklFTERfVFlQRS5EQVRFKSB7XHJcbiAgICAgIGxldCBlID0gWCh1LCByKTtcclxuICAgICAgaS5wdXNoKHtcclxuICAgICAgICB0eXBlOiBjLFxyXG4gICAgICAgIGxhYmVsOiB1LFxyXG4gICAgICAgICRpbnB1dDogcixcclxuICAgICAgICByZXF1aXJlZDogeChyKSxcclxuICAgICAgICAuLi5lID8ge1xyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGVcclxuICAgICAgICB9IDoge31cclxuICAgICAgfSksIGZbci5pZF0gJiYgY29uc29sZS5pbmZvKFwiW1BheWxvY2l0eV1bU2FsYXJ5UmFuZ2VdIGV4dHJhY3RlZCBmaWVsZFwiLCB7XHJcbiAgICAgICAgaWQ6IHIuaWQsXHJcbiAgICAgICAgbGFiZWw6IHUsXHJcbiAgICAgICAgdHlwZTogY1xyXG4gICAgICB9KSwgYS5hZGQocilcclxuICAgIH1cclxuICB9KTtcclxuICBsZXQgcCA9IGUucXVlcnlTZWxlY3RvckFsbChcclxuICAgICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KFtyb2xlPVwic3dpdGNoXCJdKTpub3QoLmNhdGVnb3J5LWZpbHRlci1oYW5kbGVyKScpO1xyXG4gIHAuZm9yRWFjaChyID0+IHtcclxuICAgIGxldCBuID0gcjtcclxuICAgIGlmICghbi5pZCB8fCB0LmluY2x1ZGVzKG4uaWQpIHx8IGEuaGFzKG4pIHx8IGwobikgfHwgbi5jbG9zZXN0KFwiLm11bHRpLXF1ZXN0aW9uXCIpKSByZXR1cm47XHJcbiAgICBsZXQgcyA9IEMobik7XHJcbiAgICBpZiAoIXMgJiYgbi5pZCkge1xyXG4gICAgICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtuLmlkLnJlcGxhY2UoL1xcLi9nLFwiXFxcXC5cIil9XCJdYCk7XHJcbiAgICAgIHQgJiYgKHMgPSB0LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIilcclxuICAgIH1cclxuICAgIHMgJiYgKGkucHVzaCh7XHJcbiAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5DSEVDS0JPWCxcclxuICAgICAgbGFiZWw6IHMsXHJcbiAgICAgICRsYWJlbDogbi5uZXh0RWxlbWVudFNpYmxpbmcgfHwgbi5wYXJlbnRFbGVtZW50LFxyXG4gICAgICAkY2hlY2tib3hzOiBbbl0sXHJcbiAgICAgIHJlcXVpcmVkOiB4KG4pLFxyXG4gICAgICBvcHRpb25zOiBbXVxyXG4gICAgfSksIGEuYWRkKG4pKVxyXG4gIH0pO1xyXG4gIGxldCBtID0gZS5xdWVyeVNlbGVjdG9yKFwiI2luZm9cXFxcLnNraWxsc1wiKTtcclxuICAhbSB8fCBhLmhhcyhtKSB8fCBsKG0pIHx8IChpLnB1c2goe1xyXG4gICAgdHlwZTogby5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVCxcclxuICAgIGxhYmVsOiBcIlNraWxsc1wiLFxyXG4gICAgJGlucHV0OiBtLFxyXG4gICAgcmVxdWlyZWQ6ICExLFxyXG4gICAgb3B0aW9uczogW11cclxuICB9KSwgYS5hZGQobSkpO1xyXG4gIGxldCBoID0gZS5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInJhZGlvZ3JvdXBcIl0nKTtcclxuICBoLmZvckVhY2goZSA9PiB7XHJcbiAgICBsZXQgdCA9IGU7XHJcbiAgICBpZiAoYS5oYXModCkgfHwgbCh0KSkgcmV0dXJuO1xyXG4gICAgbGV0IHIgPSBBcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykpO1xyXG4gICAgaWYgKDAgPT09IHIubGVuZ3RoKSByZXR1cm47XHJcbiAgICBsZXQgbiA9IHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdXRvbWF0aW9uLWlkXCIpPy5yZXBsYWNlKC9eaW5mb1xcLi8sIFwiXCIpLnJlcGxhY2UoLyhbQS1aXSkvZyxcclxuICAgICAgXCIgJDFcIikudHJpbSgpIHx8IFwiXCI7XHJcbiAgICBpZiAoIW4pIHJldHVybjtcclxuICAgIGxldCBzID0gci5tYXAoZSA9PiBlLnZhbHVlKS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgICBpLnB1c2goe1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsXHJcbiAgICAgIGxhYmVsOiBuLFxyXG4gICAgICAkbGFiZWw6IHQsXHJcbiAgICAgICRjaGVja2JveHM6IHIsXHJcbiAgICAgIHJlcXVpcmVkOiAhMSxcclxuICAgICAgb3B0aW9uczogc1xyXG4gICAgfSksIGEuYWRkKHQpXHJcbiAgfSk7XHJcbiAgbGV0IGcgPSBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubXVsdGktcXVlc3Rpb25cIik7XHJcbiAgZy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgaWYgKGwoZSkpIHJldHVybjtcclxuICAgIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKFwicCBzcGFuLnR5cGUtc2VtaWJvbGRcIik7XHJcbiAgICBpZiAoIXQpIHJldHVybjtcclxuICAgIGxldCByID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXSwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykpO1xyXG4gICAgaWYgKDAgPT09IHIubGVuZ3RoIHx8IHIuc29tZShlID0+IGEuaGFzKGUpKSkgcmV0dXJuO1xyXG4gICAgbGV0IG4gPSByLm1hcCh0ID0+IHtcclxuICAgICAgbGV0IHIgPSBlLnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7dC5pZH1cIl1gKTtcclxuICAgICAgcmV0dXJuIHI/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIlxyXG4gICAgfSkuZmlsdGVyKEJvb2xlYW4pO1xyXG4gICAgaS5wdXNoKHtcclxuICAgICAgdHlwZTogby5GSUVMRF9UWVBFLkNIRUNLQk9YLFxyXG4gICAgICBsYWJlbDogdC50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCIsXHJcbiAgICAgICRjaGVja2JveHM6IHIsXHJcbiAgICAgICRsYWJlbDogdCxcclxuICAgICAgcmVxdWlyZWQ6IGUudGV4dENvbnRlbnQ/LmluY2x1ZGVzKFwiKHJlcXVpcmVkKVwiKSB8fCAhMSxcclxuICAgICAgb3B0aW9uczogblxyXG4gICAgfSksIHIuZm9yRWFjaChlID0+IGEuYWRkKGUpKVxyXG4gIH0pO1xyXG4gIGxldCBiID0gZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRleHQtcXVlc3Rpb25cIik7XHJcbiAgcmV0dXJuIGIuZm9yRWFjaChlID0+IHtcclxuICAgIGlmIChsKGUpKSByZXR1cm47XHJcbiAgICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcInAgbGFiZWxcIiksXHJcbiAgICAgIHIgPSBlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIGlmICghdCB8fCAhciB8fCBhLmhhcyhyKSkgcmV0dXJuO1xyXG4gICAgbGV0IG4gPSB0LnRleHRDb250ZW50Py50cmltKCkucmVwbGFjZSgvXFxzKlxcKHJlcXVpcmVkXFwpXFxzKi9naSwgXCJcIikucmVwbGFjZShcclxuICAgICAgL1xccypcXChvcHRpb25hbFxcKVxccyovZ2ksIFwiXCIpLnRyaW0oKSB8fCBcIlwiO1xyXG4gICAgaS5wdXNoKHtcclxuICAgICAgdHlwZTogby5GSUVMRF9UWVBFLlRFWFQsXHJcbiAgICAgIGxhYmVsOiBuLFxyXG4gICAgICAkaW5wdXQ6IHIsXHJcbiAgICAgICRsYWJlbDogdCxcclxuICAgICAgcmVxdWlyZWQ6IC9cXChcXHMqcmVxdWlyZWRcXHMqXFwpL2kudGVzdChlLnRleHRDb250ZW50IHx8IFwiXCIpXHJcbiAgICB9KSwgYS5hZGQocilcclxuICB9KSwgaVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGsoZSA9IHt9KSB7XHJcbiAgbGV0IHQgPSBbXSxcclxuICAgIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BjdHktd3ItYXBwbHktZWR1Y2F0aW9uXCIpO1xyXG4gIGlmICghcikgcmV0dXJuIHQ7XHJcbiAgbGV0IG4gPSBBcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChcIi5lZHVjYXRpb24taGlzdG9yeS1ncm91cFwiKSksXHJcbiAgICBpID0gXCJudW1iZXJcIiA9PSB0eXBlb2YgZS5tYXhHcm91cHMgPyBuLnNsaWNlKDAsIGUubWF4R3JvdXBzKSA6IG47XHJcbiAgZm9yIChsZXQgZSA9IDA7IGUgPCBpLmxlbmd0aDsgZSsrKSB7XHJcbiAgICBsZXQgciA9IGlbZV07XHJcbiAgICBhd2FpdCBUKHIsIGUpLCBhd2FpdCBfKHIsICEwKTtcclxuICAgIGxldCBuID0gQShyLCBbXSwgW10sIHtcclxuICAgICAgICBpbmNsdWRlQ291bnRyeTogITBcclxuICAgICAgfSksXHJcbiAgICAgIGEgPSBCKHIpO1xyXG4gICAgYSAmJiAoTihuLCBhLmlkKSwgTShuLCB7XHJcbiAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5URVhULFxyXG4gICAgICBsYWJlbDogXCJTdGF0ZS9Qcm92aW5jZVwiLFxyXG4gICAgICAkaW5wdXQ6IGEsXHJcbiAgICAgICRsYWJlbDogYSxcclxuICAgICAgcmVxdWlyZWQ6IHgoYSksXHJcbiAgICAgICRjb250YWluZXI6IHJcclxuICAgIH0pLCBVKG4pKTtcclxuICAgIGxldCBsID0gci5xdWVyeVNlbGVjdG9yKGAjZWR1Y2F0aW9uSGlzdG9yeVxcXFwuZGVncmVlSWRcXFxcLiR7ZX1gKTtcclxuICAgIGlmIChsKSB7XHJcbiAgICAgIGxldCBlID0gSihsKTtcclxuICAgICAgTShuLCB7XHJcbiAgICAgICAgdHlwZTogby5GSUVMRF9UWVBFLlNFTEVDVCxcclxuICAgICAgICBsYWJlbDogXCJEZWdyZWUgT2J0YWluZWRcIixcclxuICAgICAgICAkaW5wdXQ6IHIsXHJcbiAgICAgICAgJGxhYmVsOiBsLFxyXG4gICAgICAgIHJlcXVpcmVkOiAhMSxcclxuICAgICAgICBvcHRpb25zOiBlLFxyXG4gICAgICAgICRjb250YWluZXI6IHJcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGxldCBzID0gci5xdWVyeVNlbGVjdG9yKGAjdHh0LWVkdWNhdGlvbkhpc3RvcnktZ3JhZHVhdGlvbkRhdGUtJHtlfWApO1xyXG4gICAgaWYgKHMpIHtcclxuICAgICAgbGV0IGUgPSBYKFwiR3JhZHVhdGlvbiBEYXRlXCIsIHMpO1xyXG4gICAgICBNKG4sIHtcclxuICAgICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgICBsYWJlbDogXCJHcmFkdWF0aW9uIERhdGVcIixcclxuICAgICAgICAkaW5wdXQ6IHIsXHJcbiAgICAgICAgJGxhYmVsOiBzLFxyXG4gICAgICAgIHJlcXVpcmVkOiAhMSxcclxuICAgICAgICAuLi5lID8ge1xyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGVcclxuICAgICAgICB9IDoge30sXHJcbiAgICAgICAgJGNvbnRhaW5lcjogclxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgbi5sZW5ndGggPiAwICYmIHQucHVzaCh7XHJcbiAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5FRFVDQVRJT04sXHJcbiAgICAgIGxhYmVsOiBcIkVkdWNhdGlvblwiLFxyXG4gICAgICByZXF1aXJlZDogITAsXHJcbiAgICAgIGNoaWxkcmVuOiBuLFxyXG4gICAgICBvcHRpb25zOiBLKG4pXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gdFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIFQoZSwgdCkge1xyXG4gIGxldCByID0gZS5xdWVyeVNlbGVjdG9yKGAjZWR1Y2F0aW9uSGlzdG9yeVxcXFwuZGlkWW91R3JhZHVhdGVcXFxcLiR7dH1gKTtcclxuICBpZiAoIXIpIHJldHVybjtcclxuICBsZXQgbiA9IHIucXVlcnlTZWxlY3RvcihcIi5ydy1pbnB1dFwiKT8udGV4dENvbnRlbnQ/LnRyaW0oKTtcclxuICBpZiAoXCJZZXNcIiA9PT0gbikge1xyXG4gICAgY29uc29sZS5pbmZvKFwiW1BheWxvY2l0eV1bRWR1Y2F0aW9uXSBjb25kaXRpb25hbCBmaWVsZHMgYWxyZWFkeSB2aXNpYmxlXCIsIHtcclxuICAgICAgY29udHJvbElkOiByLmlkLFxyXG4gICAgICBpc0V4cGFuZGVkOiBGKHIpXHJcbiAgICB9KSwgYXdhaXQgSShlLCB0KTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBsZXQgbyA9IHIucXVlcnlTZWxlY3RvcihcImlucHV0LCBidXR0b25cIikgfHwgcjtcclxuICBhd2FpdCAoMCwgbC5kaXNwYXRjaENsaWNrU2VxdWVuY2UpKG8pO1xyXG4gIGxldCBpID0gci5nZXRBdHRyaWJ1dGUoXCJhcmlhLW93bnNcIik7XHJcbiAgaWYgKGkpIHtcclxuICAgIGxldCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSk7XHJcbiAgICBpZiAobikge1xyXG4gICAgICBsZXQgaSA9IEFycmF5LmZyb20obi5xdWVyeVNlbGVjdG9yQWxsKCdsaVtyb2xlPVwib3B0aW9uXCJdJykpLFxyXG4gICAgICAgIHMgPSBpLmZpbmQoZSA9PiBlLnRleHRDb250ZW50Py50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJ5ZXNcIik7XHJcbiAgICAgIGlmIChzKSB7XHJcbiAgICAgICAgYXdhaXQgKDAsIGwuZGlzcGF0Y2hDbGlja1NlcXVlbmNlKShzLCA1MCwgMzAwKTtcclxuICAgICAgICBsZXQgbiA9IEYociwgbyk7XHJcbiAgICAgICAgbiAmJiBhd2FpdCAoMCwgbC5kaXNwYXRjaENsaWNrU2VxdWVuY2UpKG8pLCBjb25zb2xlLmluZm8oXHJcbiAgICAgICAgICBcIltQYXlsb2NpdHldW0VkdWNhdGlvbl0gY29uZGl0aW9uYWwgZ3JhZHVhdGUgc2VsZWN0aW9uXCIsIHtcclxuICAgICAgICAgICAgY29udHJvbElkOiByLmlkLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFllczogITAsXHJcbiAgICAgICAgICAgIGV4cGFuZGVkQWZ0ZXJTZWxlY3Rpb246IG4sXHJcbiAgICAgICAgICAgIGNsb3NlQXR0ZW1wdGVkOiBuLFxyXG4gICAgICAgICAgICBpc0V4cGFuZGVkQWZ0ZXJIYW5kbGluZzogRihyLCBvKVxyXG4gICAgICAgICAgfSksIGF3YWl0ICgwLCBhLmRlbGF5KSgyMDApLCBhd2FpdCBJKGUsIHQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEYoZSwgdCkge1xyXG4gIGxldCByID0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpIHx8IHQ/LmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIik7XHJcbiAgcmV0dXJuIFwidHJ1ZVwiID09PSByXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gSShlLCB0KSB7XHJcbiAgbGV0IHIgPSBlLnF1ZXJ5U2VsZWN0b3IoYCNlZHVjYXRpb25IaXN0b3J5XFxcXC5kZWdyZWVJZFxcXFwuJHt0fWApO1xyXG4gIGlmICghcikgcmV0dXJuO1xyXG4gIGxldCBuID0gci5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIGJ1dHRvblwiKSB8fCByO1xyXG4gIGF3YWl0ICgwLCBsLmRpc3BhdGNoQ2xpY2tTZXF1ZW5jZSkobiwgNTAsIDMwMCksIGF3YWl0ICgwLCBsLmRpc3BhdGNoQ2xpY2tTZXF1ZW5jZSkobilcclxufVxyXG5hc3luYyBmdW5jdGlvbiBqKGUgPSB7fSkge1xyXG4gIGxldCB0ID0gW10sXHJcbiAgICByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwY3R5LXdyLWFwcGx5LXdvcmtoaXN0b3J5XCIpO1xyXG4gIGlmICghcikgcmV0dXJuIHQ7XHJcbiAgbGV0IG4gPSBBcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChcIi53b3JrLWhpc3RvcnktZ3JvdXBcIikpLFxyXG4gICAgaSA9IFwibnVtYmVyXCIgPT0gdHlwZW9mIGUubWF4R3JvdXBzID8gbi5zbGljZSgwLCBlLm1heEdyb3VwcykgOiBuO1xyXG4gIGZvciAobGV0IGUgPSAwOyBlIDwgaS5sZW5ndGg7IGUrKykge1xyXG4gICAgbGV0IHIgPSBpW2VdLFxyXG4gICAgICBuID0gQShyLCBbXSwgW10sIHtcclxuICAgICAgICBpbmNsdWRlQ291bnRyeTogITBcclxuICAgICAgfSk7XHJcbiAgICBuLmxlbmd0aCA+IDAgJiYgdC5wdXNoKHtcclxuICAgICAgdHlwZTogby5GSUVMRF9UWVBFLkVNUExPWU1FTlQsXHJcbiAgICAgIGxhYmVsOiBcIkVtcGxveW1lbnRcIixcclxuICAgICAgcmVxdWlyZWQ6ICEwLFxyXG4gICAgICBjaGlsZHJlbjogbixcclxuICAgICAgb3B0aW9uczogSyhuKVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIHRcclxufVxyXG5sZXQgRCA9IG5ldyBNYXA7XHJcbmFzeW5jIGZ1bmN0aW9uIFAoKSB7XHJcbiAgYXdhaXQgXyhkb2N1bWVudClcclxufVxyXG5hc3luYyBmdW5jdGlvbiBfKGUsIHQgPSAhMSkge1xyXG4gIGxldCByID0gWydbcm9sZT1cImNvbWJvYm94XCJdW2RhdGEtZm9yXScsIFwiLnJ3LWRyb3Bkb3dubGlzdFwiLCAnW2lkKj1cInNlbGVjdC13cmFwcGVyXCJdJyxcclxuICAgICAgJ2J1dHRvblthcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiXSdcclxuICAgIF0sXHJcbiAgICBuID0gbmV3IFNldDtcclxuICBmb3IgKGxldCBvIG9mIChyLmZvckVhY2godCA9PiB7XHJcbiAgICAgIGUucXVlcnlTZWxlY3RvckFsbCh0KS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgIG4uYWRkKGUpXHJcbiAgICAgIH0pXHJcbiAgICB9KSwgbikpIHtcclxuICAgIGlmIChvLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpIHx8IFwidHJ1ZVwiID09PSBvLmdldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIikpIGNvbnRpbnVlO1xyXG4gICAgbGV0IGUgPSBvLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgIGlmIChcInB1YmxpYy1zaXRlLWFkZHJlc3MtY291bnRyeS1zZWxlY3Qtd3JhcHBlclwiID09PSBvLmlkIHx8IGU/LmlkID09PVxyXG4gICAgICBcInB1YmxpYy1zaXRlLWFkZHJlc3MtY291bnRyeVwiIHx8IFYobykgfHwgdCAmJiBKKG8pLmxlbmd0aCA+IDApIGNvbnRpbnVlO1xyXG4gICAgbGV0IHIgPSBvLmlkIHx8IG8uZ2V0QXR0cmlidXRlKFwiZGF0YS1mb3JcIikgfHwgXCJcIixcclxuICAgICAgbiA9IG8ucXVlcnlTZWxlY3RvcihcImlucHV0LCBidXR0b25cIikgfHwgbztcclxuICAgIGF3YWl0IEwobiksIGF3YWl0ICgwLCBhLmRlbGF5KSgyMDApO1xyXG4gICAgbGV0IGkgPSBSKG8pO1xyXG4gICAgaS5sZW5ndGggPiAwICYmIEQuc2V0KHIsIGkpLCBhd2FpdCBMKG4pLCBhd2FpdCAoMCwgYS5kZWxheSkoMTAwKVxyXG4gIH1cclxuICBhd2FpdCAoMCwgYS5kZWxheSkoMzAwKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIEwoZSkge1xyXG4gIGxldCB0ID0gW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdO1xyXG4gIGZvciAobGV0IHIgb2YgdCkgZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KHIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICB2aWV3OiB3aW5kb3dcclxuICB9KSksIGF3YWl0ICgwLCBhLmRlbGF5KSg1MClcclxufVxyXG5cclxuZnVuY3Rpb24gUihlKSB7XHJcbiAgbGV0IHQgPSBuZXcgU2V0LFxyXG4gICAgciA9IGUuaWQgfHwgZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZvclwiKSB8fCBcIlwiLFxyXG4gICAgbiA9IGUgPT4ge1xyXG4gICAgICBlICYmIGUucXVlcnlTZWxlY3RvckFsbCgnbGlbcm9sZT1cIm9wdGlvblwiXSwgW3JvbGU9XCJvcHRpb25cIl0nKS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgIGxldCByID0gZS50ZXh0Q29udGVudD8udHJpbSgpO1xyXG4gICAgICAgIHIgJiYgXCItLVwiICE9PSByICYmIHQuYWRkKHIpXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gIG4oZSk7XHJcbiAgbGV0IG8gPSBlLmdldEF0dHJpYnV0ZShcImFyaWEtb3duc1wiKSB8fCBlLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik7XHJcbiAgaWYgKG8gJiYgbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvKSksIGUuaWQpIHtcclxuICAgIGxldCB0ID0gZS5pZCxcclxuICAgICAgciA9IFtgJHt0fV9fbGlzdGJveGAsIGAke3R9LWxpc3Rib3hgLCBgJHt0fV9saXN0Ym94YF07XHJcbiAgICByLmZvckVhY2goZSA9PiBuKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpKSlcclxuICB9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJsaXN0Ym94XCJdJykuZm9yRWFjaChlID0+IHtcclxuICAgIGxldCB0ID0gZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZvclwiKSB8fCBlLmlkO1xyXG4gICAgdCAmJiAoci5pbmNsdWRlcyh0KSB8fCB0LmluY2x1ZGVzKHIpKSAmJiBuKGUpXHJcbiAgfSk7XHJcbiAgbGV0IGkgPSByLnJlcGxhY2UoLy1zZWxlY3Qtd3JhcHBlciQvLCBcIlwiKTtcclxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkKj1cImRyb3Bkb3duLWxpc3QtY29udGFpbmVyXCJdJykuZm9yRWFjaChlID0+IHtcclxuICAgIGUuaWQuaW5jbHVkZXMoaSkgJiYgZS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W3RpdGxlXVwiKS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICBsZXQgciA9IGUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIik/LnRyaW0oKTtcclxuICAgICAgciAmJiBcIi0tXCIgIT09IHIgJiYgdC5hZGQocilcclxuICAgIH0pXHJcbiAgfSksIEFycmF5LmZyb20odClcclxufVxyXG5cclxuZnVuY3Rpb24gTyhlID0gW10sIHQgPSBbXSkge1xyXG4gIGxldCByID0gbmV3IFNldDtcclxuICByZXR1cm4gWy4uLmUsIC4uLnRdLmZvckVhY2goZSA9PiB7XHJcbiAgICBsZXQgdCA9IGU/LnRyaW0oKTtcclxuICAgIHQgJiYgci5hZGQodClcclxuICB9KSwgQXJyYXkuZnJvbShyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBNKGUsIHQpIHtcclxuICBsZXQgciA9IGUuZmluZEluZGV4KGUgPT4gZS50eXBlID09PSB0LnR5cGUgJiYgZS5sYWJlbCA9PT0gdC5sYWJlbCk7XHJcbiAgaWYgKC0xID09PSByKSB7XHJcbiAgICBlLnB1c2godCk7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgbGV0IG4gPSBlW3JdLFxyXG4gICAgbyA9IHQ7XHJcbiAgZVtyXSA9IHtcclxuICAgIC4uLm4sXHJcbiAgICAuLi5vLFxyXG4gICAgb3B0aW9uczogTyhuLm9wdGlvbnMsIG8ub3B0aW9ucylcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE4oZSwgdCkge1xyXG4gIGZvciAobGV0IHIgPSBlLmxlbmd0aCAtIDE7IHIgPj0gMDsgci0tKSAkKGVbcl0pID09PSB0ICYmIGUuc3BsaWNlKHIsIDEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uICQoZSkge1xyXG4gIGxldCB0ID0gZS4kaW5wdXQ7XHJcbiAgcmV0dXJuIHQ/LmlkIHx8IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gQihlKSB7XHJcbiAgcmV0dXJuIGVkKGUpLmZpbmQoZSA9PiBxKGUuaWQgfHwgXCJcIikpIHx8IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gcShlKSB7XHJcbiAgcmV0dXJuIC9eZWR1Y2F0aW9uSGlzdG9yeVxcLnN0YXRlXFwuXFxkKyQvLnRlc3QoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gVShlKSB7XHJcbiAgZm9yIChsZXQgdCA9IGUubGVuZ3RoIC0gMTsgdCA+PSAwOyB0LS0pIHtcclxuICAgIGxldCByID0gZVt0XTtcclxuICAgIHIudHlwZSA9PT0gby5GSUVMRF9UWVBFLlNFTEVDVCAmJiAocSgkKHIpKSB8fCBcIlN0YXRlXCIgPT09IHIubGFiZWwpICYmIGUuc3BsaWNlKHQsIDEpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBIKGUsIHQpIHtcclxuICByZXR1cm4gIWUgfHwgXCJDb3VudHJ5XCIgPT09IGUgJiYgIXQuaW5jbHVkZUNvdW50cnlcclxufVxyXG5cclxuZnVuY3Rpb24gWShlLCB0LCByKSB7XHJcbiAgL15TdGF0ZSg/OlxcL1Byb3ZpbmNlKT8kL2kudGVzdChlLnRyaW0oKSkgJiYgY29uc29sZS5pbmZvKFxyXG4gICAgYFtQYXlsb2NpdHldW1N0YXRlXSByZXNvbHZlciBvcHRpb25zIGNhcHR1cmVkIGNvbnRyb2xJZD0ke3R8fFwidW5rbm93blwifSBvcHRpb25Db3VudD0ke3IubGVuZ3RofWBcclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24geihlKSB7XHJcbiAgaWYgKCFXKGUpIHx8IFwiSU5QVVRcIiA9PT0gZS50YWdOYW1lIHx8IFwiVEVYVEFSRUFcIiA9PT0gZS50YWdOYW1lKSByZXR1cm4gITE7XHJcbiAgbGV0IHQgPSBlLmdldEF0dHJpYnV0ZShcImRhdGEtZm9yXCIpIHx8IFwiXCI7XHJcbiAgcmV0dXJuIGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicnctZHJvcGRvd25saXN0XCIpIHx8IFwiY29tYm9ib3hcIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpIHx8IGUuaWRcclxuICAgIC5pbmNsdWRlcyhcIi1zZWxlY3Qtd3JhcHBlclwiKSB8fCBcIlN0YXRlXCIgPT09IHRcclxufVxyXG5cclxuZnVuY3Rpb24gVihlKSB7XHJcbiAgaWYgKCF6KGUpKSByZXR1cm4gITE7XHJcbiAgbGV0IHQgPSBlLmNsb3Nlc3QoXCIuZWR1Y2F0aW9uLWhpc3RvcnktZ3JvdXBcIikgfHwgZG9jdW1lbnQuYm9keTtcclxuICByZXR1cm4gRyh0LCBlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBXKGUpIHtcclxuICBsZXQgdCA9IGUuaWQgfHwgXCJcIixcclxuICAgIHIgPSBlLmdldEF0dHJpYnV0ZShcImFyaWEtb3duc1wiKSB8fCBlLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIikgfHwgXCJcIjtcclxuICByZXR1cm4gcSh0KSB8fCAvXmVkdWNhdGlvbkhpc3RvcnlcXC5zdGF0ZVxcLlxcZCsoX19saXN0Ym94fC1saXN0Ym94fF9saXN0Ym94KSQvLnRlc3QocilcclxufVxyXG5cclxuZnVuY3Rpb24gRyhlLCB0KSB7XHJcbiAgcmV0dXJuICEhdC5pZCAmJiBlZChlKS5zb21lKGUgPT4gZS5pZCA9PT0gdC5pZCAmJiBlICE9PSB0ICYmICFlLmNsb3Nlc3QoXCIucnctZHJvcGRvd25saXN0XCIpICYmICFlXHJcbiAgICAuY2xvc2VzdCgnW2lkKj1cIi1zZWxlY3Qtd3JhcHBlclwiXScpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBLKGUpIHtcclxuICByZXR1cm4gZS5tYXAoZSA9PiB7XHJcbiAgICBsZXQgdCA9IGUsXHJcbiAgICAgIHIgPSB7XHJcbiAgICAgICAgdHlwZTogdC50eXBlLFxyXG4gICAgICAgIGxhYmVsOiB0LmxhYmVsXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gdC5vcHRpb25zPy5sZW5ndGggJiYgKHIub3B0aW9ucyA9IHQub3B0aW9ucyksIHQuZGVzY3JpcHRpb24gJiYgKHIuZGVzY3JpcHRpb24gPSB0XHJcbiAgICAgIC5kZXNjcmlwdGlvbiksIHJcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBYKGUsIHQpIHtcclxuICBsZXQgciA9IGUudHJpbSgpO1xyXG4gIGlmICgvXk1pbmltdW0gRGVzaXJlZCBTYWxhcnkkL2kudGVzdChyKSlcclxuICByZXR1cm4gXCJSZXR1cm4gdGhlIG1pbmltdW0gZGVzaXJlZCBzYWxhcnkgYXMgZGlnaXRzIG9ubHksIHdpdGhvdXQgY3VycmVuY3kgc3ltYm9scywgY29tbWFzLCBvciB1bml0cy5cIjtcclxuICBpZiAoL15NYXhpbXVtIERlc2lyZWQgU2FsYXJ5JC9pLnRlc3QocikpXHJcbiAgcmV0dXJuIFwiUmV0dXJuIHRoZSBtYXhpbXVtIGRlc2lyZWQgc2FsYXJ5IGFzIGRpZ2l0cyBvbmx5LCB3aXRob3V0IGN1cnJlbmN5IHN5bWJvbHMsIGNvbW1hcywgb3IgdW5pdHMuXCI7XHJcbiAgaWYgKC9eR1BBJC9pLnRlc3QocikpIHJldHVybiBjO1xyXG4gIGxldCBuID0gdCAmJiAoMCwgcy5pbmZlclBheWxvY2l0eURhdGVGb3JtYXQpKHQpO1xyXG4gIHJldHVybiBuID8gKGNvbnNvbGUuaW5mbyhcIltQYXlsb2NpdHldW0RhdGVdIHJ1bGUgZm9ybWF0IGluZmVycmVkXCIsIHtcclxuICAgIGxhYmVsOiByLFxyXG4gICAgY29udHJvbElkOiB0LmlkLFxyXG4gICAgY29udHJvbFR5cGU6IHQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSB8fCB0LnR5cGUgfHwgbnVsbCxcclxuICAgIHBsYWNlaG9sZGVyOiB0LmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpIHx8IHQucGxhY2Vob2xkZXIgfHwgbnVsbCxcclxuICAgIGRhdGVGb3JtYXQ6IG5cclxuICB9KSwgYFJldHVybiB0aGUgZGF0ZSBpbiAke259IGZvcm1hdC5gKSA6IC9eQXZhaWxhYmxlIHRvIFN0YXJ0JC9pLnRlc3QocikgPyBkIDogdm9pZCAwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEooZSkge1xyXG4gIGxldCB0ID0gZS5pZCB8fCBlLmdldEF0dHJpYnV0ZShcImRhdGEtZm9yXCIpIHx8IFwiXCI7XHJcbiAgcmV0dXJuIEQuaGFzKHQpID8gRC5nZXQodCkgOiBSKGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFEoKSB7XHJcbiAgbGV0IGUgPSAoMCwgaS5nZXRGaXJzdE9yZGVyZWROb2RlKShcIi4vL2J1dHRvbltAaWQ9J2J0bi1zdWJtaXQnXVwiKTtcclxuICByZXR1cm4gZSAmJiBlLnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBaKGUpIHtcclxuICBpZiAobnVsbCA9PSBlKSByZXR1cm4gXCJcIjtcclxuICBpZiAoQXJyYXkuaXNBcnJheShlKSkgcmV0dXJuIGUubWFwKFopLmZpbHRlcihCb29sZWFuKS5qb2luKFwiLCBcIik7XHJcbiAgbGV0IHQgPSBTdHJpbmcoZSkudHJpbSgpO1xyXG4gIHJldHVybiBcIi0tXCIgPT09IHQgPyBcIlwiIDogdFxyXG59XHJcblxyXG5mdW5jdGlvbiBlZShlKSB7XHJcbiAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHJldHVybiBaKGUpO1xyXG4gIGlmIChlICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUpIHtcclxuICAgIGxldCB0ID0gZTtcclxuICAgIHJldHVybiBaKHQubGFiZWwgPz8gdC5uYW1lID8/IHQudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV0KGUpIHtcclxuICBsZXQgdCA9IGU/LnF1ZXJ5U2VsZWN0b3I/LihcclxuICAgICdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbdHlwZT1cImZpbGVcIl0pOm5vdChbdHlwZT1cImJ1dHRvblwiXSk6bm90KFt0eXBlPVwic3VibWl0XCJdKSwgdGV4dGFyZWEnXHJcbiAgICApO1xyXG4gIHJldHVybiBaKHQ/LnZhbHVlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlcihlKSB7XHJcbiAgaWYgKCFlKSByZXR1cm4gXCJcIjtcclxuICBsZXQgdCA9IGVzKGUpO1xyXG4gIGlmICh0KSByZXR1cm4gdDtcclxuICBsZXQgciA9IFooZS52YWx1ZSk7XHJcbiAgaWYgKHIpIHJldHVybiByO1xyXG4gIGxldCBuID0gZXQoZSk7XHJcbiAgaWYgKG4pIHJldHVybiBuO1xyXG4gIGxldCBvID0gQXJyYXkuZnJvbShlLnNlbGVjdGVkT3B0aW9ucyB8fCBbXSkubWFwKGUgPT4gZS50ZXh0Q29udGVudCB8fCBlLnZhbHVlKS5tYXAoWikuZmlsdGVyKFxyXG4gICAgQm9vbGVhbik7XHJcbiAgcmV0dXJuIG8ubGVuZ3RoID4gMCA/IG8uam9pbihcIiwgXCIpIDogWihlLnRleHRDb250ZW50KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbihlKSB7XHJcbiAgbGV0IHQgPSBlLFxyXG4gICAgciA9IHQuJGNoZWNrYm94cyB8fCAoQXJyYXkuaXNBcnJheSh0LiRpbnB1dCkgPyB0LiRpbnB1dCA6IHQuJGlucHV0ID8gW3QuJGlucHV0XSA6IFtdKSxcclxuICAgIG4gPSByLmZpbHRlcihCb29sZWFuKSxcclxuICAgIG8gPSBuLmZpbmRJbmRleChlID0+IHtcclxuICAgICAgbGV0IHQgPSBlLmNoZWNrZWQ7XHJcbiAgICAgIHJldHVybiAhMCA9PT0gdCB8fCBlLmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1jaGVja2VkXCIpID09PSBcInRydWVcIlxyXG4gICAgfSk7XHJcbiAgaWYgKG8gPCAwKSByZXR1cm4gXCJcIjtcclxuICBsZXQgaSA9IGVlKHQub3B0aW9ucz8uW29dKTtcclxuICBpZiAoaSkgcmV0dXJuIGk7XHJcbiAgbGV0IGEgPSBlcihuW29dKTtcclxuICByZXR1cm4gYSAmJiBcIm9uXCIgIT09IGEudG9Mb3dlckNhc2UoKSA/IGEgOiBhIHx8IFwidHJ1ZVwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVvKGUpIHtcclxuICBsZXQgdCA9IGU/LmNsb3Nlc3QoXCIucmVhY3QtdGFnc2lucHV0XCIpO1xyXG4gIHJldHVybiB0ID8gQXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVhY3QtdGFnc2lucHV0LXRhZ1wiKSkubWFwKGUgPT4ge1xyXG4gICAgbGV0IHQgPSBlLnF1ZXJ5U2VsZWN0b3IoXCIucmVhY3QtdGFnc2lucHV0LXJlbW92ZVwiKT8udGV4dENvbnRlbnQgfHwgXCJcIixcclxuICAgICAgciA9IGUudGV4dENvbnRlbnQgfHwgXCJcIjtcclxuICAgIHJldHVybiB0ICYmIHIuZW5kc1dpdGgodCkgPyByLnNsaWNlKDAsIC10Lmxlbmd0aCkudHJpbSgpIDogci50cmltKClcclxuICB9KS5maWx0ZXIoQm9vbGVhbikgOiBbXVxyXG59XHJcblxyXG5mdW5jdGlvbiBlaShlKSB7XHJcbiAgaWYgKGUudHlwZSA9PT0gby5GSUVMRF9UWVBFLkNIRUNLQk9YIHx8IGUudHlwZSA9PT0gby5GSUVMRF9UWVBFLlJBRElPIHx8IGUudHlwZSA9PT0gby5GSUVMRF9UWVBFXHJcbiAgICAuUkFESU9HUk9VUCkgcmV0dXJuIGVuKGUpO1xyXG4gIGxldCB0ID0gZS4kaW5wdXQ7XHJcbiAgcmV0dXJuIFwic2tpbGxzXCIgPT09IGUubGFiZWwudHJpbSgpLnRvTG93ZXJDYXNlKCkgJiYgdD8uaWQgPT09IFwiaW5mby5za2lsbHNcIiA/IGVvKHQpIDogZXIodClcclxufVxyXG5cclxuZnVuY3Rpb24gZWEoZSwgdCA9IFtdKSB7XHJcbiAgdC5mb3JFYWNoKHQgPT4ge1xyXG4gICAgaWYgKCF0Py5sYWJlbCB8fCB0LnR5cGUgPT09IG8uRklFTERfVFlQRS5FRFVDQVRJT04gfHwgdC50eXBlID09PSBvLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCB8fFxyXG4gICAgICB0LnR5cGUgPT09IG8uRklFTERfVFlQRS5TRUNUSU9OKSByZXR1cm47XHJcbiAgICBsZXQgciA9IGVpKHQpO1xyXG4gICAgKEFycmF5LmlzQXJyYXkocikgPyByLmxlbmd0aCA+IDAgOiAhIXIpICYmIChlW3QubGFiZWxdID0gcilcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbChlID0gW10pIHtcclxuICBsZXQgdCA9IHt9LFxyXG4gICAgciA9IFtcImluZm8uZmlyc3ROYW1lXCIsIFwiaW5mby5sYXN0TmFtZVwiLCBcImluZm8ubWlkZGxlTmFtZVwiLCBcImluZm8ucHJlZmVycmVkTmFtZVwiLCBcImluZm8uZW1haWxcIixcclxuICAgICAgXCJpbmZvLmNlbGxQaG9uZVwiLCBcImluZm8ucGhvbmVcIiwgXCJpbmZvLmxpbmtlZEluXCIsIFwiaW5mby5yZWZlcnJlZEJ5XCJcclxuICAgIF07XHJcbiAgci5mb3JFYWNoKGUgPT4ge1xyXG4gICAgbGV0IHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKTtcclxuICAgIGlmIChyICYmIHIudmFsdWUpIHtcclxuICAgICAgbGV0IG4gPSBlLnNwbGl0KFwiLlwiKVsxXTtcclxuICAgICAgdFtuXSA9IHIudmFsdWVcclxuICAgIH1cclxuICB9KTtcclxuICBsZXQgbiA9IFtcInB1YmxpYy1zaXRlLWFkZHJlc3MtYWRkcmVzcy0xXCIsIFwicHVibGljLXNpdGUtYWRkcmVzcy1hZGRyZXNzLTJcIixcclxuICAgIFwicHVibGljLXNpdGUtYWRkcmVzcy1jaXR5XCIsIFwicHVibGljLXNpdGUtYWRkcmVzcy1jb3VudHlcIiwgXCJwdWJsaWMtc2l0ZS1hZGRyZXNzLXppcFwiXHJcbiAgXTtcclxuICBuLmZvckVhY2goZSA9PiB7XHJcbiAgICBsZXQgciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpO1xyXG4gICAgciAmJiByLnZhbHVlICYmICh0W2UucmVwbGFjZShcInB1YmxpYy1zaXRlLWFkZHJlc3MtXCIsIFwiXCIpXSA9IHIudmFsdWUpXHJcbiAgfSk7XHJcbiAgbGV0IG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BjdHktd3ItYXBwbHktd29ya2hpc3RvcnlcIik7XHJcbiAgaWYgKG8pIHtcclxuICAgIGxldCBlID0gby5xdWVyeVNlbGVjdG9yQWxsKFwiLndvcmstaGlzdG9yeS1ncm91cFwiKTtcclxuICAgIHQuZW1wbG95bWVudCA9IEFycmF5LmZyb20oZSkubWFwKChlLCB0KSA9PiB7XHJcbiAgICAgIGxldCByID0ge30sXHJcbiAgICAgICAgbiA9IGUucXVlcnlTZWxlY3RvcihgI3dvcmtIaXN0b3J5XFxcXC5jb21wYW55TmFtZVxcXFwuJHt0fWApO1xyXG4gICAgICBuICYmIChyW1wiQ29tcGFueSBOYW1lXCJdID0gbi52YWx1ZSk7XHJcbiAgICAgIGxldCBvID0gZS5xdWVyeVNlbGVjdG9yKGAjd29ya0hpc3RvcnlcXFxcLnBvc2l0aW9uXFxcXC4ke3R9YCk7XHJcbiAgICAgIHJldHVybiBvICYmIChyLlBvc2l0aW9uID0gby52YWx1ZSksIHJcclxuICAgIH0pXHJcbiAgfVxyXG4gIGxldCBpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwY3R5LXdyLWFwcGx5LWVkdWNhdGlvblwiKTtcclxuICBpZiAoaSkge1xyXG4gICAgbGV0IGUgPSBpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWR1Y2F0aW9uLWhpc3RvcnktZ3JvdXBcIik7XHJcbiAgICB0LmVkdWNhdGlvbiA9IEFycmF5LmZyb20oZSkubWFwKChlLCB0KSA9PiB7XHJcbiAgICAgIGxldCByID0ge30sXHJcbiAgICAgICAgbiA9IGUucXVlcnlTZWxlY3RvcihgI2VkdWNhdGlvbkhpc3RvcnlcXFxcLm5hbWVcXFxcLiR7dH1gKTtcclxuICAgICAgbiAmJiAocltcIlNjaG9vbCBOYW1lXCJdID0gbi52YWx1ZSk7XHJcbiAgICAgIGxldCBvID0gZS5xdWVyeVNlbGVjdG9yKGAjZWR1Y2F0aW9uSGlzdG9yeVxcXFwuYXJlYU9mU3R1ZHlcXFxcLiR7dH1gKTtcclxuICAgICAgbyAmJiAocltcIkFyZWEgb2YgU3R1ZHlcIl0gPSBvLnZhbHVlKTtcclxuICAgICAgbGV0IGkgPSBlLnF1ZXJ5U2VsZWN0b3IoYCNlZHVjYXRpb25IaXN0b3J5XFxcXC5jb3VudHJ5XFxcXC4ke3R9YCksXHJcbiAgICAgICAgYSA9IGVzKGkpO1xyXG4gICAgICBhICYmIChyLkNvdW50cnkgPSBhKTtcclxuICAgICAgbGV0IGwgPSBlLnF1ZXJ5U2VsZWN0b3IoYCNlZHVjYXRpb25IaXN0b3J5XFxcXC5jaXR5XFxcXC4ke3R9YCk7XHJcbiAgICAgIGw/LnZhbHVlICYmIChyLkNpdHkgPSBsLnZhbHVlKTtcclxuICAgICAgbGV0IHMgPSBlLnF1ZXJ5U2VsZWN0b3IoYCNlZHVjYXRpb25IaXN0b3J5XFxcXC5zdGF0ZVxcXFwuJHt0fWApLFxyXG4gICAgICAgIHUgPSBlYyhlLCBgZWR1Y2F0aW9uSGlzdG9yeS5zdGF0ZS4ke3R9YCkgfHwgcyxcclxuICAgICAgICBjID0gQyh1KSxcclxuICAgICAgICBkID0gZXUodSk7XHJcbiAgICAgIHJldHVybiBkICYmIChyW2MgfHwgXCJTdGF0ZS9Qcm92aW5jZVwiXSA9IGQpLCByXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gZWEodCwgZSksIHRcclxufVxyXG5cclxuZnVuY3Rpb24gZXMoZSkge1xyXG4gIGxldCB0ID0gZT8ucXVlcnlTZWxlY3RvcihcIi5ydy1pbnB1dFwiKT8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiO1xyXG4gIHJldHVybiBcIi0tXCIgPT09IHQgPyBcIlwiIDogdFxyXG59XHJcblxyXG5mdW5jdGlvbiBldShlKSB7XHJcbiAgcmV0dXJuIGUgPyBlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCBlIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCA/IGUudmFsdWU/LnRyaW0oKSB8fFxyXG4gICAgXCJcIiA6IGVzKGUpIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBlYyhlLCB0KSB7XHJcbiAgcmV0dXJuIGVkKGUpLmZpbmQoZSA9PiBlLmlkID09PSB0KSB8fCBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkKGUpIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwodSkpXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy4zZWYzY2I3Ni5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);