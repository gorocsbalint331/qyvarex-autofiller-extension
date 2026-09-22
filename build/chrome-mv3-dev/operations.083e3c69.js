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
})({"eNvBM":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\rippling\\operations.js",
    "bundleId": "4e860876083e3c69",
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
var j = z(require("7a2b7316290f5428"));
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

},{"7a2b7316290f5428":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"1Znbu":[function(require,module,exports) {
/**
 * Parcel module id: kxC8A
 * Resolved path: src/contents/sites/rippling/operations.js
 * Dependencies:
 *   ../../methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ./phone-country-code -> lBWM0  =>  src/contents/sites/rippling/phone-country-code.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "hasRipplingResumeParsingSucceeded", ()=>w), n.export(r, "waitForRipplingResumeParsingComplete", ()=>T), n.export(r, "addEducationSection", ()=>I), n.export(r, "addEmploymentSection", ()=>j), n.export(r, "preFillForm", ()=>D), n.export(r, "findExactRipplingLocationOption", ()=>R), n.export(r, "readRipplingPhoneCodeDisplayText", ()=>B), n.export(r, "selectPhoneCountryCode", ()=>X), n.export(r, "uploadResume", ()=>J), n.export(r, "getRipplingCoverLetterUploadDom", ()=>eo), n.export(r, "hasRipplingCoverLetterSlot", ()=>ei), n.export(r, "waitForRipplingCoverLetterSlot", ()=>ea), n.export(r, "uploadCoverLetter", ()=>es), n.export(r, "removeResume", ()=>eu), n.export(r, "fillInputTextField", ()=>ec), n.export(r, "fillSelectField", ()=>ed), n.export(r, "fillRadioGroupFiled", ()=>ep), n.export(r, "fillCheckboxField", ()=>em), n.export(r, "fillResolvedLocationInput", ()=>eh);
var o = e("../../methods/choice-match"), i = e("~contents/methods/answer"), a = e("~contents/methods/dom"), l = e("~contents/methods/observer"), s = e("~contents/shared/filler"), u = e("~core/xpath"), c = e("~utils/delay"), d = e("~utils/getTargetOrTimeout"), f = n.interopDefault(d), p = e("./phone-country-code");
let m = /r(?:\u00e9|e)sum(?:\u00e9|e)\s+parsing\s+was\s+successful/i, h = 500, g = 3e3, b = 15e3, y = [
    /r(?:\u00e9|e)sum(?:\u00e9|e)\s+parsing\s+(?:is\s+)?in\s+progress/i,
    /r(?:\u00e9|e)sum(?:\u00e9|e)\s+will\s+be\s+parsed/i,
    /parsing\s+(?:your\s+)?r(?:\u00e9|e)sum(?:\u00e9|e)/i,
    /r(?:\u00e9|e)sum(?:\u00e9|e)\s+is\s+being\s+parsed/i
];
function v() {
    return [
        document.body?.innerText,
        document.body?.textContent
    ].filter(Boolean).join(" ").replace(/\s+/g, " ");
}
function w() {
    return m.test(v());
}
function S() {
    let e1 = v();
    return y.some((t)=>t.test(e1));
}
_c = S;
function E() {
    return "ats.rippling.com" === window.location.hostname && !!document.querySelector('label[data-testid="resume"]');
}
_c1 = E;
function x(e1) {
    let t = e1.tagName.toLowerCase();
    if ("textarea" === t || "select" === t) return !0;
    if ("input" !== t) return !1;
    let r1 = (e1.getAttribute("type") || "text").toLowerCase();
    return [
        "text",
        "email",
        "tel",
        "search",
        "url",
        "number",
        "date"
    ].includes(r1);
}
function C() {
    return Array.from(document.querySelectorAll("input, textarea, select")).some(x);
}
_c2 = C;
function A() {
    return Array.from(document.querySelectorAll("input, textarea, select")).filter(x).map((e1)=>[
            e1.tagName,
            e1.id,
            e1.getAttribute("name") || "",
            e1.value || ""
        ].join(":")).join("\n");
}
_c3 = A;
async function k(e1 = {}) {
    let t = e1.initialSignature ?? A(), r1 = Date.now(), n = !e1.requireChange;
    return (0, l.waitForCondition)(()=>{
        let e1 = A();
        return e1 !== t ? (t = e1, r1 = Date.now(), n = !0, !1) : n && Date.now() - r1 >= h;
    }, {
        timeout: e1.timeout ?? g,
        interval: 100,
        observeTarget: document.body
    });
}
async function T(e1 = {}) {
    let t = A();
    if (w() && !e1.afterUpload) return await k(), !0;
    let r1 = document.body, n = await (0, l.waitForCondition)(()=>S() || w(), {
        timeout: 1500,
        interval: 100,
        observeTarget: r1
    });
    if (!n && !e1.force && !E()) return !0;
    let o = t, i = Date.now(), a = !1, s = await (0, l.waitForCondition)(()=>{
        if (w()) return !0;
        let e1 = A();
        return e1 !== o ? (o = e1, i = Date.now(), a = !0, !1) : a && Date.now() - i >= h;
    }, {
        timeout: 3e4,
        interval: 250,
        observeTarget: r1
    });
    s || console.warn("[uploadResume] Timed out waiting for Rippling resume parsing to finish");
    let u = !!e1.afterUpload && !a && C(), c = await k({
        initialSignature: o,
        requireChange: u,
        timeout: u ? b : void 0
    });
    return !c && u && console.warn("[uploadResume] Timed out waiting for Rippling parser field rewrite"), s;
}
_c4 = T;
async function F(e1, t) {
    try {
        let r1 = e1.closest(".react-datepicker-wrapper");
        if (r1) {
            let r1 = t, n = null;
            if (t.match(/^\d{4}-\d{2}-\d{2}$/)) n = new Date(t);
            else if (t.match(/^\d{4}-\d{2}$/)) n = new Date(t + "-01");
            else if (t.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
                r1 = t;
                let [e1, o, i] = t.split("/");
                n = new Date(parseInt(i), parseInt(e1) - 1, parseInt(o));
            } else n = new Date(t);
            if (n && !isNaN(n.getTime())) {
                let e1 = String(n.getMonth() + 1).padStart(2, "0"), t = String(n.getDate()).padStart(2, "0"), o = n.getFullYear();
                r1 = `${e1}/${t}/${o}`;
            }
            if (e1.value === r1) return e1.blur(), document.body.click(), await (0, c.delay)(100), !0;
            let o = document.querySelector(".react-datepicker-popper, .react-datepicker__portal");
            if (o) {
                e1.blur();
                let t = new KeyboardEvent("keydown", {
                    key: "Escape",
                    code: "Escape",
                    keyCode: 27,
                    bubbles: !0,
                    cancelable: !0
                });
                e1.dispatchEvent(t), await (0, c.delay)(200);
            }
            e1.focus(), await (0, c.delay)(50);
            let i = e1.value;
            e1.value = "", await (0, c.delay)(50), e1.value = r1;
            let a = Object.getPrototypeOf(e1), l = Object.getOwnPropertyDescriptor(a, "value")?.set;
            l && l.call(e1, r1);
            let s = e1?._valueTracker;
            s && s.setValue(i);
            let u = new InputEvent("input", {
                bubbles: !0,
                cancelable: !0,
                data: r1,
                inputType: "insertText"
            });
            if (e1.dispatchEvent(u), await (0, c.delay)(50), e1.dispatchEvent(new Event("change", {
                bubbles: !0,
                cancelable: !0
            })), await (0, c.delay)(100), e1.dispatchEvent(new Event("blur", {
                bubbles: !0,
                cancelable: !0
            })), await (0, c.delay)(100), e1.value === r1 || e1.value.includes(r1.split("/")[0])) return e1.blur(), document.body.click(), await (0, c.delay)(100), !0;
        }
        let n = t, o = null;
        if (t.match(/^\d{4}-\d{2}-\d{2}$/)) o = new Date(t);
        else if (t.match(/^\d{4}-\d{2}$/)) o = new Date(t + "-01");
        else if (t.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
            n = t;
            let [e1, r1, i] = t.split("/");
            o = new Date(parseInt(i), parseInt(e1) - 1, parseInt(r1));
        } else o = new Date(t);
        if (o && !isNaN(o.getTime())) {
            let e1 = String(o.getMonth() + 1).padStart(2, "0"), t = String(o.getDate()).padStart(2, "0"), r1 = o.getFullYear();
            n = `${e1}/${t}/${r1}`;
        }
        try {
            e1.focus(), await (0, c.delay)(50);
            let t = e1.value;
            e1.value = n;
            let r1 = Object.getPrototypeOf(e1), o = Object.getOwnPropertyDescriptor(r1, "value")?.set;
            o && o.call(e1, n);
            let i = e1?._valueTracker;
            i && i.setValue(t);
            let a = new InputEvent("input", {
                bubbles: !0,
                cancelable: !0,
                data: n,
                inputType: "insertText"
            });
            if (e1.dispatchEvent(a), await (0, c.delay)(50), e1.dispatchEvent(new Event("change", {
                bubbles: !0,
                cancelable: !0
            })), await (0, c.delay)(100), e1.dispatchEvent(new Event("blur", {
                bubbles: !0,
                cancelable: !0
            })), await (0, c.delay)(100), e1.value === n || e1.value.includes(n.split("/")[0])) return e1.blur(), document.body.click(), await (0, c.delay)(100), !0;
        } catch  {}
        if (!o) {
            if (t.match(/^\d{4}-\d{2}-\d{2}$/)) o = new Date(t);
            else if (t.match(/^\d{4}-\d{2}$/)) o = new Date(t + "-01");
            else if (t.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
                let [e1, r1, n] = t.split("/");
                o = new Date(parseInt(n), parseInt(e1) - 1, parseInt(r1));
            } else o = new Date(t);
        }
        if (!o || isNaN(o.getTime())) return !1;
        let i = o.getFullYear(), a = o.getMonth() + 1, l = o.getDate();
        e1.focus(), e1.click(), await (0, c.delay)(500);
        let s = null;
        for(let e1 = 0; e1 < 3 && !(s = document.querySelector(".react-datepicker-popper, .react-datepicker__portal")); e1++)await (0, c.delay)(200);
        if (!s) return !1;
        let u = s.querySelector(".react-datepicker__year-read-view--selected-year");
        if (u && u.textContent?.trim() !== i.toString()) {
            u.click(), await (0, c.delay)(200);
            let e1 = s.querySelector(".react-datepicker__year-dropdown");
            if (e1) {
                let t = Array.from(e1.querySelectorAll(".react-datepicker__year-option")).find((e1)=>e1.textContent?.trim() === i.toString());
                t && (t.click(), await (0, c.delay)(200));
            }
        }
        let d = s.querySelector(".react-datepicker__month-read-view--selected-month");
        if (d) {
            let e1 = d.textContent?.trim() || "", t = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ], r1 = t[a - 1];
            if (e1 !== r1) {
                d.click(), await (0, c.delay)(200);
                let e1 = s.querySelector(".react-datepicker__month-dropdown");
                if (e1) {
                    let t = Array.from(e1.querySelectorAll(".react-datepicker__month-option")).find((e1)=>e1.textContent?.trim() === r1);
                    t && (t.click(), await (0, c.delay)(200));
                }
            }
        }
        let f = `react-datepicker__day--${String(l).padStart(3, "0")}`, p = s.querySelector(`.${f}:not(.react-datepicker__day--outside-month)`);
        if (p) {
            let t = p.getAttribute("aria-label") || "", r1 = `${a}/${l}/${i}`;
            if (t.includes(r1) || !t) return p.click(), await (0, c.delay)(200), e1.blur(), document.body.click(), await (0, c.delay)(100), !0;
        }
        let m = s.querySelectorAll(".react-datepicker__day:not(.react-datepicker__day--outside-month)");
        for (let t of m){
            let r1 = t.getAttribute("aria-label") || "";
            if (r1.includes(`${a}/${l}/${i}`) || r1.includes(`${l}th, ${i}`)) return t.click(), await (0, c.delay)(200), e1.blur(), document.body.click(), await (0, c.delay)(100), !0;
        }
        return !1;
    } catch (e1) {
        return console.error("[fillDatePickerField] Error:", e1), !1;
    }
}
_c5 = F;
async function I(e1) {
    if (e1 <= 0) return;
    let t = Array.from(document.querySelectorAll("h3")), r1 = t.find((e1)=>e1.textContent?.trim() === "Education");
    if (!r1) return;
    let n = Array.from(document.querySelectorAll("button")).find((e1)=>{
        let t = e1.textContent?.trim() || "", r1 = e1.getAttribute("aria-label") || "";
        return t.includes("Add More Education History") || r1.includes("Add More Education History");
    });
    if (!n) return;
    let o = Array.from(document.querySelectorAll('input[id*="institution"], input[name*="institution"], label[for*="institution"]')).filter((e1)=>{
        let t = "LABEL" === e1.tagName ? document.getElementById(e1.getAttribute("for") || "") : e1;
        if (!t) return !1;
        let o = r1.compareDocumentPosition(t), i = (o & Node.DOCUMENT_POSITION_FOLLOWING) != 0, a = t.compareDocumentPosition(n), l = (a & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
        return i && l;
    }), i = Array.from(document.querySelectorAll("input, textarea, select")).filter((e1)=>{
        let t = r1.compareDocumentPosition(e1), o = (t & Node.DOCUMENT_POSITION_FOLLOWING) != 0, i = e1.compareDocumentPosition(n), a = (i & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
        if (!o || !a) return !1;
        let l = e1.id || "", s = e1.name || "";
        return /\.response\.\d+\./.test(l + s);
    }), a = new Set;
    i.forEach((e1)=>{
        let t = e1.id || "", r1 = e1.name || "", n = (t + r1).match(/\.response\.(\d+)\./);
        n && a.add(parseInt(n[1], 10));
    });
    let l = 0;
    if (a.size > 0) l = Math.max(...Array.from(a)) + 1;
    else if (o.length > 0) l = o.length;
    else {
        let e1 = Array.from(document.querySelectorAll("input, textarea, select")).filter((e1)=>{
            let t = r1.compareDocumentPosition(e1), o = (t & Node.DOCUMENT_POSITION_FOLLOWING) != 0, i = e1.compareDocumentPosition(n), a = (i & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
            return o && a;
        });
        l = e1.length > 0 ? 1 : 0;
    }
    let s = e1 - l;
    if (!(s <= 0)) for(let e1 = 0; e1 < s; e1++)n.click(), await (0, c.delay)(300);
}
_c6 = I;
async function j(e1) {
    if (e1 <= 0) return;
    let t = Array.from(document.querySelectorAll("h3")), r1 = t.find((e1)=>e1.textContent?.trim() === "Employment History");
    if (!r1) return;
    let n = Array.from(document.querySelectorAll("button")).find((e1)=>{
        let t = e1.textContent?.trim() || "";
        return t.includes("Add Another Position");
    });
    if (!n) return;
    let o = Array.from(document.querySelectorAll('input[id*="company"], input[name*="company"], label[for*="company"]')).filter((e1)=>{
        let t = "LABEL" === e1.tagName ? document.getElementById(e1.getAttribute("for") || "") : e1;
        if (!t) return !1;
        let o = r1.compareDocumentPosition(t), i = (o & Node.DOCUMENT_POSITION_FOLLOWING) != 0, a = t.compareDocumentPosition(n), l = (a & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
        return i && l;
    }), i = Array.from(document.querySelectorAll("input, textarea, select")).filter((e1)=>{
        let t = r1.compareDocumentPosition(e1), o = (t & Node.DOCUMENT_POSITION_FOLLOWING) != 0, i = e1.compareDocumentPosition(n), a = (i & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
        if (!o || !a) return !1;
        let l = e1.id || "", s = e1.name || "";
        return /\.response\.\d+\./.test(l + s);
    }), a = new Set;
    i.forEach((e1)=>{
        let t = e1.id || "", r1 = e1.name || "", n = (t + r1).match(/\.response\.(\d+)\./);
        n && a.add(parseInt(n[1], 10));
    });
    let l = Math.max(o.length, a.size), s = e1 - l;
    if (!(s <= 0)) for(let e1 = 0; e1 < s; e1++)n.click(), await (0, c.delay)(300);
}
async function D() {
    await (0, c.delay)(500);
}
_c7 = D;
async function P(e1, t) {
    let r1 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
    for(let n = 0; n < t.length; n++){
        let o = t.slice(0, n + 1);
        r1 ? r1.call(e1, o) : e1.value = o, e1.dispatchEvent(new InputEvent("input", {
            bubbles: !0,
            cancelable: !0,
            data: t[n],
            inputType: "insertText"
        })), await (0, c.delay)(40);
    }
}
_c8 = P;
function _(e1, t) {
    let r1 = e1.value;
    e1.value = t;
    let n = Object.getPrototypeOf(e1), o = Object.getOwnPropertyDescriptor(n, "value")?.set;
    o && o.call(e1, t);
    let i = e1._valueTracker;
    i && i.setValue(r1);
}
function L(e1) {
    return String(e1 ?? "").normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim();
}
_c9 = L;
function R(e1, t) {
    let r1 = L(e1);
    return r1 && t.find((e1)=>L(e1.textContent || "") === r1) || null;
}
_c10 = R;
function O(e1) {
    let t = e1.getAttribute("aria-controls");
    return t ? document.getElementById(t) : null;
}
_c11 = O;
function M(e1) {
    _(e1, ""), e1.dispatchEvent(new InputEvent("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), e1.blur();
}
_c12 = M;
function N(e1) {
    let t = e1.closest('[data-testid="field"]');
    return t?.querySelector('input[data-input="externalPlaceId"]') ?? t?.parentElement?.querySelector('input[data-input="externalPlaceId"]') ?? e1.closest('[data-testid="location"]')?.querySelector('input[data-input="externalPlaceId"]') ?? null;
}
_c13 = N;
function $(e1, t) {
    let r1 = Y(e1), n = r1 instanceof HTMLInputElement ? r1.value : "";
    return [
        e1.textContent,
        t.textContent,
        n
    ].filter(Boolean).join(" ");
}
function B() {
    let e1 = document.querySelector('[data-testid="phone_number-code"]'), t = e1?.querySelector('[data-testid="select-controller"]');
    return e1 && t ? $(t, e1) : "";
}
_c14 = B;
function q(e1, t) {
    return (0, p.getRipplingPhoneCodeOptionScore)(e1, t) >= 400;
}
function U(e1) {
    e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        which: 13,
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new KeyboardEvent("keyup", {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        which: 13,
        bubbles: !0,
        cancelable: !0
    }));
}
_c15 = U;
function H(e1) {
    e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: "ArrowDown",
        code: "ArrowDown",
        keyCode: 40,
        which: 40,
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new KeyboardEvent("keyup", {
        key: "ArrowDown",
        code: "ArrowDown",
        keyCode: 40,
        which: 40,
        bubbles: !0,
        cancelable: !0
    }));
}
_c16 = H;
function Y(e1) {
    return e1.querySelector('input[data-testid="input-select-search-input"], input[role="combobox"], [role="combobox"]');
}
_c17 = Y;
function z(e1) {
    let t = window.getComputedStyle(e1);
    return "none" !== t.display && "hidden" !== t.visibility && e1.getClientRects().length > 0;
}
function V(e1, t) {
    let r1 = e1.getAttribute("aria-controls");
    if (r1) {
        let e1 = document.getElementById(r1);
        if (e1) return e1;
    }
    if (e1.id) {
        let t = document.getElementById(`${e1.id}-list`);
        if (t) return t;
    }
    let n = e1.getAttribute("aria-activedescendant");
    if (n) {
        let e1 = n.replace(/--option-\d+$/, "--list"), t = document.getElementById(e1);
        if (t) return t;
    }
    let o = Array.from(document.querySelectorAll('[data-testid="popper"] ul[role="listbox"], ul[role="listbox"]')).filter((e1)=>e1 instanceof HTMLElement), i = o.filter(z);
    if (0 === i.length) return null;
    if (1 === i.length || !t) return i[0];
    let a = null, l = -1;
    for (let e1 of i){
        let r1 = G(e1, t);
        r1 && r1.score > l && (l = r1.score, a = e1);
    }
    return a;
}
_c18 = V;
async function W(e1) {
    e1.dispatchEvent(new MouseEvent("mouseenter", {
        bubbles: !0,
        cancelable: !0
    })), await (0, c.delay)(20), e1.dispatchEvent(new MouseEvent("mouseover", {
        bubbles: !0,
        cancelable: !0
    })), await (0, c.delay)(20), e1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0
    })), await (0, c.delay)(20), e1.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0
    })), await (0, c.delay)(20), e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0
    }));
}
_c19 = W;
function G(e1, t) {
    let r1 = Array.from(e1.querySelectorAll('li[role="option"]')), n = null, o = -1;
    for (let e1 of r1){
        let r1 = (0, p.getRipplingPhoneCodeOptionScore)(e1.textContent || "", t);
        if (500 === r1) return {
            option: e1,
            score: r1
        };
        r1 > o && (n = e1, o = r1);
    }
    return n && o >= 0 ? {
        option: n,
        score: o
    } : null;
}
_c20 = G;
async function K(e1, t, r1) {
    let n = ()=>q(B(), r1), o = Y(e1);
    if (!o) return !1;
    o.focus(), await (0, c.delay)(30), await W(o), await (0, l.waitForCondition)(()=>"true" === o.getAttribute("aria-expanded") || !!V(o, r1), {
        timeout: 1200,
        interval: 50,
        observeTarget: document.body
    }), o instanceof HTMLInputElement && (await P(o, r1.search), await (0, c.delay)(400));
    let i = await (0, f.default)(()=>V(o, r1), ()=>!1, 20);
    if (i) {
        await (0, l.waitForCondition)(()=>i.querySelectorAll('li[role="option"]').length > 0, {
            timeout: 1e3,
            interval: 50,
            observeTarget: i
        });
        let e1 = G(i, r1);
        if (e1 && (e1.option.scrollIntoView({
            block: "center",
            behavior: "auto"
        }), await (0, c.delay)(100), await W(e1.option), await (0, c.delay)(150), await (0, l.waitForCondition)(n, {
            timeout: 800,
            interval: 50,
            observeTarget: t
        }) || (H(o), await (0, c.delay)(100), U(o), await (0, c.delay)(150), await (0, l.waitForCondition)(n, {
            timeout: 1e3,
            interval: 50,
            observeTarget: t
        })))) return !0;
    }
    let a = o.getAttribute("aria-activedescendant");
    if (a) {
        let e1 = document.getElementById(a);
        if (e1 && q(e1.textContent || "", r1) && (await W(e1), await (0, c.delay)(150), await (0, l.waitForCondition)(n, {
            timeout: 800,
            interval: 50,
            observeTarget: t
        }))) return !0;
    }
    return "true" === o.getAttribute("aria-expanded") && (document.body.click(), await (0, c.delay)(100)), n();
}
_c21 = K;
async function X(e1, t = {}) {
    try {
        let r1 = (0, p.resolveRipplingPhoneCountryTarget)(e1, t);
        if (!r1) return !1;
        let n = await (0, f.default)(()=>document.querySelector('[data-testid="phone_number-code"]'), ()=>!1, 30);
        if (!n) return !1;
        let o = await (0, f.default)(()=>n.querySelector('[data-testid="select-controller"]'), ()=>!1, 20);
        if (!o) return !1;
        let i = ()=>q(B(), r1);
        if (i()) return !0;
        for(let e1 = 0; e1 < 3; e1++)if (await K(o, n, r1)) return !0;
    } catch (e1) {
        console.error("[selectPhoneCountryCode] Error:", e1);
    }
    return !1;
}
_c22 = X;
async function J(e1, t, r1) {
    let n = window.location.hostname;
    if (n.includes("rippling-ats")) {
        let n = document.getElementById("files.Resume");
        if (n) {
            let o = Array.from(document.querySelectorAll('input.dz-hidden-input[type="file"]')), l = null, s = n.querySelector(".dropzone");
            if (s) {
                let e1 = o.filter((e1)=>"application/pdf, .doc, .docx, text/plain" === e1.accept);
                e1.length >= 2 ? l = e1[1] : 1 === e1.length && (l = e1[0]);
            }
            if (!l && s) {
                s.click(), await (0, c.delay)(100);
                let e1 = Array.from(document.querySelectorAll('input.dz-hidden-input[type="file"]')), t = e1.filter((e1)=>"application/pdf, .doc, .docx, text/plain" === e1.accept);
                t.length >= 2 ? l = t[1] : 1 === t.length && (l = t[0]);
            }
            l && (await (0, a.uploadFiles)(l, await (0, i.fetchPdfAsBlob)(e1), t, r1, "Resume/CV"), await T({
                afterUpload: !0
            }));
        }
    } else {
        let n = document.querySelector('label[data-testid="resume"]');
        if (n) {
            let o = n.querySelector('input[type="file"]');
            o && (await (0, a.uploadFiles)(o, await (0, i.fetchPdfAsBlob)(e1), t, r1, "Resume/CV"), await T({
                force: "ats.rippling.com" === window.location.hostname,
                afterUpload: !0
            }));
        }
    }
}
_c23 = J;
function Q(e1) {
    return e1?.replace(/\s+/g, " ").trim().toLowerCase() || "";
}
_c24 = Q;
function Z(e1) {
    let t = Q(e1?.textContent);
    return t.includes("cover letter");
}
_c25 = Z;
function ee() {
    return document.querySelector('label[data-testid="cover_letter"]') || document.getElementById("files.CoverLetter.file_label") || document.querySelector('label[id*="CoverLetter"]') || Array.from(document.querySelectorAll("label")).find((e1)=>Z(e1)) || null;
}
function et(e1) {
    let t = e1?.closest(".form-group, .ob.form-group, [class*='form-group']");
    return document.getElementById("files.CoverLetter") || t?.querySelector('[id="files.CoverLetter"], [id*="CoverLetter"], .file-field-input') || null;
}
function er(e1) {
    return document.querySelector('label[data-testid="cover_letter"] input[type="file"]') || e1?.querySelector('input[type="file"]') || document.querySelector('input[type="file"][name*="CoverLetter" i], input[type="file"][id*="CoverLetter" i], input[type="file"][name*="cover_letter" i], input[type="file"][id*="cover_letter" i]');
}
function en() {
    return Array.from(document.querySelectorAll('input.dz-hidden-input[type="file"]'));
}
function eo() {
    let e1 = ee(), t = et(e1), r1 = e1?.closest(".form-group, .ob.form-group, [class*='form-group']"), n = t?.querySelector(".dropzone") || t?.querySelector(".filepicker") || r1?.querySelector(".dropzone") || r1?.querySelector(".filepicker"), o = er(t), i = en(), a = !!(e1 || t || n);
    return {
        label: e1,
        container: t,
        dropzone: n,
        input: o || (a ? i[0] ?? null : null),
        hiddenInputs: i
    };
}
function ei() {
    let e1 = eo();
    return !!(e1.label || e1.container || e1.dropzone || e1.input);
}
async function ea() {
    return await (0, l.waitForCondition)(()=>ei(), {
        timeout: 3e3,
        interval: 100,
        observeTarget: document.body
    });
}
async function el() {
    let e1 = eo();
    if (e1.input) return e1.input;
    if (!e1.dropzone) return null;
    let t = new Set(e1.hiddenInputs);
    e1.dropzone.click();
    let r1 = await (0, l.waitForCondition)(()=>{
        let e1 = eo(), r1 = e1.hiddenInputs.find((e1)=>!t.has(e1));
        return !!(e1.input || r1);
    }, {
        timeout: 1500,
        interval: 50,
        observeTarget: document.body
    });
    if (!r1) return null;
    let n = eo(), o = n.hiddenInputs.find((e1)=>!t.has(e1));
    return n.input || o || n.hiddenInputs[0] || null;
}
async function es(e1, t, r1) {
    let n = await el();
    n && await (0, a.uploadFiles)(n, await (0, i.fetchCoverLetterPdfAsBlob)(e1), t, r1, "Cover Letter");
}
async function eu() {
    let e1 = document.querySelector('label[data-testid="resume"]');
    if (e1) {
        let t = e1.querySelector('[data-testid="chip"]');
        if (t) {
            let e1 = t.querySelector('div[role="button"][aria-labelledby*="prefix"]');
            if (e1) {
                e1.click(), await (0, c.delay)(200);
                return;
            }
        }
    }
    let t = document.querySelector('label[id*="Resume"]');
    if (t) {
        let e1 = t.closest(".form-group, .ob.form-group, [class*='form-group']");
        if (e1) {
            let t = e1.querySelector("a.dz-remove[data-dz-remove]");
            if (t) {
                t.click(), await (0, c.delay)(200);
                return;
            }
        }
    }
    let r1 = document.querySelector("a.dz-remove[data-dz-remove]");
    if (r1) {
        let e1 = r1.closest('div[id*="Resume"], div[class*="file"], div[class*="dropzone"]');
        if (e1) {
            r1.click(), await (0, c.delay)(200);
            return;
        }
    }
    console.warn("[removeResume] Resume remove button not found in any structure");
}
async function ec(e1, t) {
    if (!e1) return;
    let r1 = "date" === e1.type || e1.classList.contains("react-datepicker-ignore-onclickoutside") || null !== e1.closest(".react-datepicker-wrapper"), n = e1.name || "", o = e1.id || "", i = e1.getAttribute("placeholder") || "", a = e1.getAttribute("aria-label") || "", l = i.toLowerCase().includes("date") || a.toLowerCase().includes("date") || n.toLowerCase().includes("date") || o.toLowerCase().includes("date") || n.toLowerCase().includes("st_date") || n.toLowerCase().includes("end_date") || n.toLowerCase().includes("start_date") || o.toLowerCase().includes("st_date") || o.toLowerCase().includes("end_date") || o.toLowerCase().includes("start_date"), s = !1, u = e1.getAttribute("aria-labelledby") && document.getElementById(e1.getAttribute("aria-labelledby") || "") || e1.id && document.querySelector(`label[for="${e1.id}"]`) || e1.closest("label");
    if (u) {
        let r1 = (u.textContent || "").toLowerCase().trim();
        if (r1.includes("start") || r1.includes("end")) {
            let r1 = t.match(/^\d{4}-\d{2}-\d{2}$/) || t.match(/^\d{4}-\d{2}$/) || t.match(/^\d{2}\/\d{2}\/\d{4}$/), n = null !== e1.closest(".react-datepicker-wrapper");
            (r1 || n) && (s = !0);
        }
    }
    let d = t.match(/^\d{4}-\d{2}-\d{2}$/) || t.match(/^\d{4}-\d{2}$/) || t.match(/^\d{2}\/\d{2}\/\d{4}$/), f = null !== e1.closest(".react-datepicker-wrapper"), p = (n.toLowerCase().includes("date") || o.toLowerCase().includes("date") || n.toLowerCase().includes("st_date") || n.toLowerCase().includes("end_date") || n.toLowerCase().includes("start_date")) && d, m = r1 || l || s || p || f && d;
    if (m || f && d) {
        let r1 = await F(e1, t);
        if (r1) return;
    }
    e1.focus(), await (0, c.delay)(20);
    let h = e1.value;
    e1.value = t;
    let g = Object.getPrototypeOf(e1), b = Object.getOwnPropertyDescriptor(g, "value")?.set;
    b && b.call(e1, t);
    let y = e1?._valueTracker;
    y && y.setValue(h);
    let v = new InputEvent("input", {
        bubbles: !0,
        cancelable: !0,
        data: t,
        inputType: "insertText"
    });
    e1.dispatchEvent(v), await (0, c.delay)(20), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
    })), await (0, c.delay)(50);
    let w = null, S = 0, E = 2;
    w = setInterval(()=>{
        S++, e1.value !== t && (e1.value = t, b && b.call(e1, t), y && y.setValue(h), e1.dispatchEvent(v), e1.dispatchEvent(new Event("change", {
            bubbles: !0,
            cancelable: !0
        }))), S >= E && w && clearInterval(w);
    }, 50), await (0, c.delay)(100), w && clearInterval(w);
}
async function ed(e1, t) {
    let r1 = e1.label, n = Array.isArray(t) ? t?.[0] : t;
    if (!n) return;
    if (!e1.$input) throw new s.FillError(`(Select) Could not find select element for label: "${r1}"`);
    if (e1.$input instanceof HTMLSelectElement) {
        let t = Array.from(e1.$input.options), i = t.map((e1)=>e1.text.trim() || e1.value), a = (0, o.findExactChoice)(t, n, (e1)=>e1.text, (e1)=>e1.value);
        if (a) {
            e1.$input.focus(), await (0, c.delay)(50), e1.$input.value = a.value;
            let t = Object.getPrototypeOf(e1.$input), r1 = Object.getOwnPropertyDescriptor(t, "value")?.set;
            r1 && r1.call(e1.$input, a.value), e1.$input.dispatchEvent(new Event("input", {
                bubbles: !0
            })), await (0, c.delay)(50), e1.$input.dispatchEvent(new Event("change", {
                bubbles: !0
            })), await (0, c.delay)(50), e1.$input.dispatchEvent(new Event("blur", {
                bubbles: !0
            })), await (0, c.delay)(200);
            return;
        }
        throw new s.FillError(`(Select) No option "${n}" found for label: "${r1}". Available options: ${i.join(", ")}`);
    }
    let i = e1.$input, a = i.classList.contains("Select");
    if (a) try {
        let e1 = i.querySelector('input[role="combobox"], .Select-input input, input');
        if (!e1) throw new s.FillError(`(Select) Could not find input in React Select for label: "${r1}"`);
        e1.focus(), await (0, c.delay)(50), e1.value = "";
        let t = Object.getPrototypeOf(e1), a = Object.getOwnPropertyDescriptor(t, "value")?.set;
        a && a.call(e1, ""), e1.dispatchEvent(new InputEvent("input", {
            bubbles: !0,
            cancelable: !0,
            inputType: "deleteContentBackward"
        })), await (0, c.delay)(100), a ? a.call(e1, n) : e1.value = n, e1.dispatchEvent(new InputEvent("input", {
            bubbles: !0,
            cancelable: !0,
            data: n,
            inputType: "insertText"
        })), await (0, c.delay)(50), e1.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, c.delay)(150);
        let l = null;
        for(let e1 = 0; e1 < 10 && !(l = document.querySelector(".Select-menu, .Select-menu-outer")); e1++)await (0, c.delay)(50);
        if (!l) throw new s.FillError(`(Select) Dropdown menu did not appear for label: "${r1}"`);
        await (0, c.delay)(100);
        let u = Array.from(l.querySelectorAll(".Select-option"));
        if (0 === u.length) throw new s.FillError(`(Select) No options found in dropdown for label: "${r1}"`);
        let d = null;
        if (!(d = (0, o.findExactChoice)(u, n, (e1)=>e1.textContent) || null)) throw new s.FillError(`(Select) No exact option found for "${n}"`);
        d.scrollIntoView({
            block: "nearest",
            behavior: "auto"
        }), await (0, c.delay)(50), d.dispatchEvent(new MouseEvent("mouseenter", {
            bubbles: !0,
            cancelable: !0
        })), await (0, c.delay)(20), d.dispatchEvent(new MouseEvent("mouseover", {
            bubbles: !0,
            cancelable: !0
        })), await (0, c.delay)(20), d.dispatchEvent(new MouseEvent("mousedown", {
            bubbles: !0,
            cancelable: !0
        })), await (0, c.delay)(20), d.dispatchEvent(new MouseEvent("mouseup", {
            bubbles: !0,
            cancelable: !0
        })), await (0, c.delay)(20), d.dispatchEvent(new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0
        })), await (0, c.delay)(150);
        let f = document.querySelector(".Select-menu, .Select-menu-outer");
        f && console.warn("[fillSelectField] Menu is still open after clicking option"), i.querySelector(".Select-value"), i.querySelector(".Select-placeholder");
        return;
    } catch (e1) {
        throw console.error("[fillSelectField] React Select error:", e1), e1;
    }
    let l = i.querySelector('[role="combobox"]');
    if (!l) throw new s.FillError(`(Select) Could not find combobox for label: "${r1}"`);
    try {
        let e1;
        let t = l;
        if (t.focus(), await (0, c.delay)(50), "INPUT" === t.tagName) {
            t.value = "";
            let e1 = Object.getPrototypeOf(t), r1 = Object.getOwnPropertyDescriptor(e1, "value")?.set;
            r1 && r1.call(t, ""), t.dispatchEvent(new InputEvent("input", {
                bubbles: !0,
                cancelable: !0,
                inputType: "deleteContentBackward"
            })), await (0, c.delay)(50), r1 ? r1.call(t, n) : t.value = n, t.dispatchEvent(new InputEvent("input", {
                bubbles: !0,
                cancelable: !0,
                data: n,
                inputType: "insertText"
            })), await (0, c.delay)(50), t.dispatchEvent(new Event("change", {
                bubbles: !0
            })), await (0, c.delay)(100), t.dispatchEvent(new KeyboardEvent("keydown", {
                key: "ArrowDown",
                code: "ArrowDown",
                keyCode: 40,
                bubbles: !0,
                cancelable: !0
            })), await (0, c.delay)(50);
        }
        let a = null;
        for(let e1 = 0; e1 < 10; e1++){
            let e1 = l.getAttribute("aria-controls");
            if (e1 && (a = document.getElementById(e1)), a || (a = document.querySelector('ul[role="listbox"]')), a) break;
            await (0, c.delay)(50);
        }
        if (!a) {
            l.click(), await (0, c.delay)(100);
            for(let e1 = 0; e1 < 5; e1++){
                let e1 = l.getAttribute("aria-controls");
                if (e1 && (a = document.getElementById(e1)), a || (a = document.querySelector('ul[role="listbox"]')), a) break;
                await (0, c.delay)(50);
            }
        }
        if (!a) {
            let e1 = i.querySelector('[data-testid="select-controller"]');
            if (e1) {
                e1.click(), await (0, c.delay)(100);
                for(let e1 = 0; e1 < 5; e1++){
                    let e1 = l.getAttribute("aria-controls");
                    if (e1 && (a = document.getElementById(e1)), a || (a = document.querySelector('ul[role="listbox"]')), a) break;
                    await (0, c.delay)(50);
                }
            }
        }
        if (!a) throw console.error("[fillSelectField] Failed to open dropdown menu", {
            label: r1,
            value: n,
            comboboxId: l.id,
            ariaControls: l.getAttribute("aria-controls"),
            ariaExpanded: l.getAttribute("aria-expanded")
        }), new s.FillError(`(Select) Dropdown menu did not appear for label: "${r1}"`);
        await (0, c.delay)(100);
        let u = Array.from(a.querySelectorAll('li[role="option"]'));
        if (0 === u.length) throw new s.FillError(`(Select) No options found in dropdown for label: "${r1}"`);
        if (!(e1 = (0, o.findExactChoice)(u, n, (e1)=>e1.textContent) || null)) throw new s.FillError(`(Select) No exact option found for "${n}"`);
        e1.scrollIntoView({
            block: "nearest",
            behavior: "auto"
        }), await (0, c.delay)(50), e1.dispatchEvent(new MouseEvent("mouseenter", {
            bubbles: !0,
            cancelable: !0
        })), await (0, c.delay)(20), e1.dispatchEvent(new MouseEvent("mouseover", {
            bubbles: !0,
            cancelable: !0
        })), await (0, c.delay)(20), e1.dispatchEvent(new MouseEvent("mousedown", {
            bubbles: !0,
            cancelable: !0
        })), await (0, c.delay)(20), e1.dispatchEvent(new MouseEvent("mouseup", {
            bubbles: !0,
            cancelable: !0
        })), await (0, c.delay)(20), e1.dispatchEvent(new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0
        })), await (0, c.delay)(150);
        let d = "true" === l.getAttribute("aria-expanded");
        d && console.warn("[fillSelectField] Combobox is still expanded after clicking option"), l.value;
    } catch (e1) {
        console.error("[fillSelectField] Combobox select error:", e1);
        try {
            document.body.click(), await (0, c.delay)(100);
        } catch (e1) {}
        throw e1;
    }
}
function ef(e1) {
    let t = e1.labels?.[0] || e1.closest("label");
    return t?.textContent?.trim() || e1.nextElementSibling?.textContent?.trim() || "";
}
async function ep(e1, t) {
    let r1 = e1.label, n = t?.[0];
    if (!n) return;
    let i = null;
    if (e1.$radioParent && (i = e1.$radioParent), !i) {
        let e1 = `//*[contains(text(), ${(0, u.escapeXPath)(r1)})]/parent::div/parent::div | //*[contains(text(), ${(0, u.escapeXPath)(r1)})]/parent::div/parent::li`;
        i = (0, u.getFirstOrderedNodeSafe)(e1);
    }
    if (!i) throw new s.FillError(`(Radio) Could not find container for label: "${r1}"`);
    let a = (0, o.findExactChoice)((0, u.getOrderedNodesSafe)(".//input[@type='radio']", i), n, ef, (e1)=>e1.value);
    if (a) {
        a.checked || (a.click(), await (0, c.delay)(500));
        return;
    }
    let l = `
    .//*[@role='radio'][
      @aria-label=${(0, u.escapeXPath)(n)} or
      @data-value=${(0, u.escapeXPath)(n)} or
      normalize-space()=${(0, u.escapeXPath)(n)} or
      .//*[normalize-space()=${(0, u.escapeXPath)(n)}]
    ]
  `, d = (0, u.getFirstOrderedNodeSafe)(l, i);
    if (d) {
        "true" !== d.getAttribute("aria-checked") && (d.click(), await (0, c.delay)(500));
        return;
    }
    throw new s.FillError(`(Radio) No option "${n}" found for label: "${r1}"`);
}
async function em(e1, t) {
    let r1 = e1.label;
    if (e1.$checkboxs && e1.$checkboxs.length > 0) {
        for (let n of t){
            let t = null, o = null, i = e1.$checkboxs;
            for (let e1 of i){
                if (e1.value === n) {
                    t = e1, o = e1.closest('[role="checkbox"]');
                    break;
                }
                let r1 = e1.closest('[role="checkbox"]');
                if (r1) {
                    let i = r1.getAttribute("data-value");
                    if (i === n) {
                        t = e1, o = r1;
                        break;
                    }
                    let a = r1.querySelector('[id*="label-"] p.css-v2szc5, [id*="label-"]');
                    if (a && a.textContent?.trim() === n) {
                        t = e1, o = r1;
                        break;
                    }
                }
            }
            t && o ? t.checked || (o.click(), await (0, c.delay)(200), t.checked || (t.click(), await (0, c.delay)(200))) : console.warn(`[fillCheckboxField] No matching checkbox found for value: "${n}" in label: "${r1}"`);
        }
        return;
    }
    let n = e1.$radioParent || null;
    if (!n) {
        let e1 = `//*[contains(text(), ${(0, u.escapeXPath)(r1)})]/parent::div/parent::div | //*[contains(text(), ${(0, u.escapeXPath)(r1)})]/parent::div/parent::li`;
        n = (0, u.getFirstOrderedNodeSafe)(e1);
    }
    if (!n) {
        console.warn(`[fillCheckboxField] Could not find container for label: "${r1}"`);
        return;
    }
    for (let e1 of t){
        let t = (0, u.getFirstOrderedNodeSafe)(`.//*[@role="checkbox"][@data-value=${(0, u.escapeXPath)(e1)}]`, n);
        if (t) {
            let e1 = t.querySelector('input[type="checkbox"]');
            !e1 || e1.checked || (t.click(), await (0, c.delay)(200), e1.checked || (e1.click(), await (0, c.delay)(200)));
            continue;
        }
        let i = (0, o.findExactChoice)((0, u.getOrderedNodesSafe)(".//input[@type='checkbox']", n), e1, ef, (e1)=>e1.value);
        if (i) {
            let e1 = i.closest('[role="checkbox"]');
            e1 ? i.checked || (e1.click(), await (0, c.delay)(200), i.checked || (i.click(), await (0, c.delay)(200))) : i.checked || (i.click(), await (0, c.delay)(200));
        } else console.warn(`[fillCheckboxField] No option "${e1}" found for label: "${r1}"`);
    }
}
async function eh(e1, t) {
    let r1 = e1.$input, n = String(t ?? "").trim();
    if (!n) throw new s.FillError("(Search) Location value is empty");
    if (!(r1 instanceof HTMLInputElement)) return ec(r1, n);
    try {
        r1.focus({
            preventScroll: !0
        });
    } catch  {
        r1.focus();
    }
    await (0, c.delay)(30), await W(r1), await P(r1, n), await (0, c.delay)(300);
    let o = null, i = ()=>{
        let e1 = O(r1), t = e1 ? Array.from(e1.querySelectorAll('li[role="option"]')) : [];
        return !!(o = R(n, t));
    };
    if (i() || await (0, l.waitForCondition)(i, {
        timeout: 1600,
        interval: 80,
        observeTarget: document.body
    }), !o) throw M(r1), new s.FillError(`(Search) Could not find exact Location option for "${n}"`);
    o.scrollIntoView({
        block: "nearest",
        behavior: "auto"
    }), await (0, c.delay)(50), await W(o), await (0, c.delay)(200);
    let a = N(r1), u = await (0, l.waitForCondition)(()=>{
        let e1 = L(r1.value) === L(n), t = !a || !!a.value.trim();
        return e1 && t && !O(r1);
    }, {
        timeout: 1200,
        interval: 50,
        observeTarget: document.body
    });
    if (!u) throw M(r1), new s.FillError(`(Search) Location option did not commit for "${n}"`);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25;
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
$RefreshReg$(_c13, "N");
$RefreshReg$(_c14, "B");
$RefreshReg$(_c15, "U");
$RefreshReg$(_c16, "H");
$RefreshReg$(_c17, "Y");
$RefreshReg$(_c18, "V");
$RefreshReg$(_c19, "W");
$RefreshReg$(_c20, "G");
$RefreshReg$(_c21, "K");
$RefreshReg$(_c22, "X");
$RefreshReg$(_c23, "J");
$RefreshReg$(_c24, "Q");
$RefreshReg$(_c25, "Z");

},{}]},["eNvBM","1Znbu"], "1Znbu", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LElBQUcsSUFBRTtJQUFNO0lBQUMsR0FBRSxTQUFRLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7SUFBSSxJQUFJLElBQUUsR0FBRTtJQUFNLEdBQUUsUUFBTTtJQUFFLElBQUksSUFBRSxPQUFPLGVBQWUsS0FBRyxJQUFFLE9BQU8seUJBQXlCLEdBQUUsVUFBVTtJQUFJLEtBQUcsRUFBRSxLQUFLLElBQUU7SUFBRyxJQUFJLElBQUUsSUFBRztJQUFjLEtBQUcsRUFBRSxTQUFTO0lBQUcsSUFBSSxJQUFFLElBQUksV0FBVyxTQUFRO1FBQUMsU0FBUSxDQUFDO1FBQUUsWUFBVyxDQUFDO1FBQUUsTUFBSztRQUFFLFdBQVU7SUFBWTtJQUFHLEdBQUUsY0FBYyxJQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsS0FBSSxHQUFFLGNBQWMsSUFBSSxNQUFNLFVBQVM7UUFBQyxTQUFRLENBQUM7UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7SUFBSSxJQUFJLElBQUUsTUFBSyxJQUFFLEdBQUUsSUFBRTtJQUFFLElBQUUsWUFBWTtRQUFLLEtBQUksR0FBRSxVQUFRLEtBQUksQ0FBQSxHQUFFLFFBQU0sR0FBRSxLQUFHLEVBQUUsS0FBSyxJQUFFLElBQUcsS0FBRyxFQUFFLFNBQVMsSUFBRyxHQUFFLGNBQWMsSUFBRyxHQUFFLGNBQWMsSUFBSSxNQUFNLFVBQVM7WUFBQyxTQUFRLENBQUM7WUFBRSxZQUFXLENBQUM7UUFBQyxHQUFFLEdBQUcsS0FBRyxLQUFHLEtBQUcsY0FBYztJQUFFLEdBQUUsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLE1BQUssS0FBRyxjQUFjO0FBQUU7QUFBQyxlQUFlLEdBQUcsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsR0FBRSxPQUFNLElBQUUsTUFBTSxRQUFRLEtBQUcsR0FBRyxDQUFDLEVBQUUsR0FBQztJQUFFLElBQUcsQ0FBQyxHQUFFO0lBQU8sSUFBRyxDQUFDLEdBQUUsUUFBTyxNQUFNLElBQUksRUFBRSxVQUFVLENBQUMsbURBQW1ELEVBQUUsR0FBRSxDQUFDLENBQUM7SUFBRSxJQUFHLEdBQUUsa0JBQWtCLG1CQUFrQjtRQUFDLElBQUksSUFBRSxNQUFNLEtBQUssR0FBRSxPQUFPLFVBQVMsSUFBRSxFQUFFLElBQUksQ0FBQSxLQUFHLEdBQUUsS0FBSyxVQUFRLEdBQUUsUUFBTyxJQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsZUFBYyxFQUFHLEdBQUUsR0FBRSxDQUFBLEtBQUcsR0FBRSxNQUFLLENBQUEsS0FBRyxHQUFFO1FBQU8sSUFBRyxHQUFFO1lBQUMsR0FBRSxPQUFPLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxLQUFJLEdBQUUsT0FBTyxRQUFNLEVBQUU7WUFBTSxJQUFJLElBQUUsT0FBTyxlQUFlLEdBQUUsU0FBUSxLQUFFLE9BQU8seUJBQXlCLEdBQUUsVUFBVTtZQUFJLE1BQUcsR0FBRSxLQUFLLEdBQUUsUUFBTyxFQUFFLFFBQU8sR0FBRSxPQUFPLGNBQWMsSUFBSSxNQUFNLFNBQVE7Z0JBQUMsU0FBUSxDQUFDO1lBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLEtBQUksR0FBRSxPQUFPLGNBQWMsSUFBSSxNQUFNLFVBQVM7Z0JBQUMsU0FBUSxDQUFDO1lBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLEtBQUksR0FBRSxPQUFPLGNBQWMsSUFBSSxNQUFNLFFBQU87Z0JBQUMsU0FBUSxDQUFDO1lBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO1lBQUs7UUFBTTtRQUFDLE1BQU0sSUFBSSxFQUFFLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLG9CQUFvQixFQUFFLEdBQUUsc0JBQXNCLEVBQUUsRUFBRSxLQUFLLE1BQU0sQ0FBQztJQUFDO0lBQUMsSUFBSSxJQUFFLEdBQUUsUUFBTyxJQUFFLEVBQUUsVUFBVSxTQUFTO0lBQVUsSUFBRyxHQUFFLElBQUc7UUFBQyxJQUFJLEtBQUUsRUFBRSxjQUFjO1FBQXNELElBQUcsQ0FBQyxJQUFFLE1BQU0sSUFBSSxFQUFFLFVBQVUsQ0FBQywwREFBMEQsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUFFLEdBQUUsU0FBUSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLEtBQUksR0FBRSxRQUFNO1FBQUcsSUFBSSxJQUFFLE9BQU8sZUFBZSxLQUFHLElBQUUsT0FBTyx5QkFBeUIsR0FBRSxVQUFVO1FBQUksS0FBRyxFQUFFLEtBQUssSUFBRSxLQUFJLEdBQUUsY0FBYyxJQUFJLFdBQVcsU0FBUTtZQUFDLFNBQVEsQ0FBQztZQUFFLFlBQVcsQ0FBQztZQUFFLFdBQVU7UUFBdUIsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLE1BQUssSUFBRSxFQUFFLEtBQUssSUFBRSxLQUFHLEdBQUUsUUFBTSxHQUFFLEdBQUUsY0FBYyxJQUFJLFdBQVcsU0FBUTtZQUFDLFNBQVEsQ0FBQztZQUFFLFlBQVcsQ0FBQztZQUFFLE1BQUs7WUFBRSxXQUFVO1FBQVksS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLEtBQUksR0FBRSxjQUFjLElBQUksTUFBTSxVQUFTO1lBQUMsU0FBUSxDQUFDO1FBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO1FBQUssSUFBSSxJQUFFO1FBQUssSUFBSSxJQUFJLEtBQUUsR0FBRSxLQUFFLE1BQUksQ0FBRSxDQUFBLElBQUUsU0FBUyxjQUFjLG1DQUFrQyxHQUFHLEtBQUksTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztRQUFJLElBQUcsQ0FBQyxHQUFFLE1BQU0sSUFBSSxFQUFFLFVBQVUsQ0FBQyxrREFBa0QsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUFFLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7UUFBSyxJQUFJLElBQUUsTUFBTSxLQUFLLEVBQUUsaUJBQWlCO1FBQW1CLElBQUcsTUFBSSxFQUFFLFFBQU8sTUFBTSxJQUFJLEVBQUUsVUFBVSxDQUFDLGtEQUFrRCxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQUUsSUFBSSxJQUFFO1FBQUssSUFBRyxDQUFFLENBQUEsSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLGVBQWMsRUFBRyxHQUFFLEdBQUUsQ0FBQSxLQUFHLEdBQUUsZ0JBQWMsSUFBRyxHQUFHLE1BQU0sSUFBSSxFQUFFLFVBQVUsQ0FBQyxvQ0FBb0MsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUFFLEVBQUUsZUFBZTtZQUFDLE9BQU07WUFBVSxVQUFTO1FBQU0sSUFBRyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLEtBQUksRUFBRSxjQUFjLElBQUksV0FBVyxjQUFhO1lBQUMsU0FBUSxDQUFDO1lBQUUsWUFBVyxDQUFDO1FBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLEtBQUksRUFBRSxjQUFjLElBQUksV0FBVyxhQUFZO1lBQUMsU0FBUSxDQUFDO1lBQUUsWUFBVyxDQUFDO1FBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLEtBQUksRUFBRSxjQUFjLElBQUksV0FBVyxhQUFZO1lBQUMsU0FBUSxDQUFDO1lBQUUsWUFBVyxDQUFDO1FBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLEtBQUksRUFBRSxjQUFjLElBQUksV0FBVyxXQUFVO1lBQUMsU0FBUSxDQUFDO1lBQUUsWUFBVyxDQUFDO1FBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLEtBQUksRUFBRSxjQUFjLElBQUksV0FBVyxTQUFRO1lBQUMsU0FBUSxDQUFDO1lBQUUsWUFBVyxDQUFDO1FBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO1FBQUssSUFBSSxJQUFFLFNBQVMsY0FBYztRQUFvQyxLQUFHLFFBQVEsS0FBSywrREFBOEQsRUFBRSxjQUFjLGtCQUFpQixFQUFFLGNBQWM7UUFBdUI7SUFBTSxFQUFDLE9BQU0sSUFBRTtRQUFDLE1BQU0sUUFBUSxNQUFNLHlDQUF3QyxLQUFHO0lBQUM7SUFBQyxJQUFJLElBQUUsRUFBRSxjQUFjO0lBQXFCLElBQUcsQ0FBQyxHQUFFLE1BQU0sSUFBSSxFQUFFLFVBQVUsQ0FBQyw2Q0FBNkMsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUFFLElBQUc7UUFBQyxJQUFJO1FBQUUsSUFBSSxJQUFFO1FBQUUsSUFBRyxFQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxLQUFJLFlBQVUsRUFBRSxTQUFRO1lBQUMsRUFBRSxRQUFNO1lBQUcsSUFBSSxLQUFFLE9BQU8sZUFBZSxJQUFHLEtBQUUsT0FBTyx5QkFBeUIsSUFBRSxVQUFVO1lBQUksTUFBRyxHQUFFLEtBQUssR0FBRSxLQUFJLEVBQUUsY0FBYyxJQUFJLFdBQVcsU0FBUTtnQkFBQyxTQUFRLENBQUM7Z0JBQUUsWUFBVyxDQUFDO2dCQUFFLFdBQVU7WUFBdUIsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLEtBQUksS0FBRSxHQUFFLEtBQUssR0FBRSxLQUFHLEVBQUUsUUFBTSxHQUFFLEVBQUUsY0FBYyxJQUFJLFdBQVcsU0FBUTtnQkFBQyxTQUFRLENBQUM7Z0JBQUUsWUFBVyxDQUFDO2dCQUFFLE1BQUs7Z0JBQUUsV0FBVTtZQUFZLEtBQUksTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxLQUFJLEVBQUUsY0FBYyxJQUFJLE1BQU0sVUFBUztnQkFBQyxTQUFRLENBQUM7WUFBQyxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsTUFBSyxFQUFFLGNBQWMsSUFBSSxjQUFjLFdBQVU7Z0JBQUMsS0FBSTtnQkFBWSxNQUFLO2dCQUFZLFNBQVE7Z0JBQUcsU0FBUSxDQUFDO2dCQUFFLFlBQVcsQ0FBQztZQUFDLEtBQUksTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztRQUFHO1FBQUMsSUFBSSxJQUFFO1FBQUssSUFBSSxJQUFJLEtBQUUsR0FBRSxLQUFFLElBQUcsS0FBSTtZQUFDLElBQUksS0FBRSxFQUFFLGFBQWE7WUFBaUIsSUFBRyxNQUFJLENBQUEsSUFBRSxTQUFTLGVBQWUsR0FBQyxHQUFHLEtBQUksQ0FBQSxJQUFFLFNBQVMsY0FBYyxxQkFBb0IsR0FBRyxHQUFFO1lBQU0sTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztRQUFHO1FBQUMsSUFBRyxDQUFDLEdBQUU7WUFBQyxFQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztZQUFLLElBQUksSUFBSSxLQUFFLEdBQUUsS0FBRSxHQUFFLEtBQUk7Z0JBQUMsSUFBSSxLQUFFLEVBQUUsYUFBYTtnQkFBaUIsSUFBRyxNQUFJLENBQUEsSUFBRSxTQUFTLGVBQWUsR0FBQyxHQUFHLEtBQUksQ0FBQSxJQUFFLFNBQVMsY0FBYyxxQkFBb0IsR0FBRyxHQUFFO2dCQUFNLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7WUFBRztRQUFDO1FBQUMsSUFBRyxDQUFDLEdBQUU7WUFBQyxJQUFJLEtBQUUsRUFBRSxjQUFjO1lBQXFDLElBQUcsSUFBRTtnQkFBQyxHQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztnQkFBSyxJQUFJLElBQUksS0FBRSxHQUFFLEtBQUUsR0FBRSxLQUFJO29CQUFDLElBQUksS0FBRSxFQUFFLGFBQWE7b0JBQWlCLElBQUcsTUFBSSxDQUFBLElBQUUsU0FBUyxlQUFlLEdBQUMsR0FBRyxLQUFJLENBQUEsSUFBRSxTQUFTLGNBQWMscUJBQW9CLEdBQUcsR0FBRTtvQkFBTSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO2dCQUFHO1lBQUM7UUFBQztRQUFDLElBQUcsQ0FBQyxHQUFFLE1BQU0sUUFBUSxNQUFNLGtEQUFpRDtZQUFDLE9BQU07WUFBRSxPQUFNO1lBQUUsWUFBVyxFQUFFO1lBQUcsY0FBYSxFQUFFLGFBQWE7WUFBaUIsY0FBYSxFQUFFLGFBQWE7UUFBZ0IsSUFBRyxJQUFJLEVBQUUsVUFBVSxDQUFDLGtEQUFrRCxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQUUsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztRQUFLLElBQUksSUFBRSxNQUFNLEtBQUssRUFBRSxpQkFBaUI7UUFBc0IsSUFBRyxNQUFJLEVBQUUsUUFBTyxNQUFNLElBQUksRUFBRSxVQUFVLENBQUMsa0RBQWtELEVBQUUsR0FBRSxDQUFDLENBQUM7UUFBRSxJQUFHLENBQUUsQ0FBQSxLQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsZUFBYyxFQUFHLEdBQUUsR0FBRSxDQUFBLEtBQUcsR0FBRSxnQkFBYyxJQUFHLEdBQUcsTUFBTSxJQUFJLEVBQUUsVUFBVSxDQUFDLG9DQUFvQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQUUsR0FBRSxlQUFlO1lBQUMsT0FBTTtZQUFVLFVBQVM7UUFBTSxJQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsS0FBSSxHQUFFLGNBQWMsSUFBSSxXQUFXLGNBQWE7WUFBQyxTQUFRLENBQUM7WUFBRSxZQUFXLENBQUM7UUFBQyxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsS0FBSSxHQUFFLGNBQWMsSUFBSSxXQUFXLGFBQVk7WUFBQyxTQUFRLENBQUM7WUFBRSxZQUFXLENBQUM7UUFBQyxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsS0FBSSxHQUFFLGNBQWMsSUFBSSxXQUFXLGFBQVk7WUFBQyxTQUFRLENBQUM7WUFBRSxZQUFXLENBQUM7UUFBQyxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsS0FBSSxHQUFFLGNBQWMsSUFBSSxXQUFXLFdBQVU7WUFBQyxTQUFRLENBQUM7WUFBRSxZQUFXLENBQUM7UUFBQyxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsS0FBSSxHQUFFLGNBQWMsSUFBSSxXQUFXLFNBQVE7WUFBQyxTQUFRLENBQUM7WUFBRSxZQUFXLENBQUM7UUFBQyxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7UUFBSyxJQUFJLElBQUUsV0FBUyxFQUFFLGFBQWE7UUFBaUIsS0FBRyxRQUFRLEtBQUssdUVBQXNFLEVBQUU7SUFBSyxFQUFDLE9BQU0sSUFBRTtRQUFDLFFBQVEsTUFBTSw0Q0FBMkM7UUFBRyxJQUFHO1lBQUMsU0FBUyxLQUFLLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztRQUFJLEVBQUMsT0FBTSxJQUFFLENBQUM7UUFBQyxNQUFNO0lBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxFQUFDO0lBQUUsSUFBSSxJQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsSUFBRSxHQUFFLFFBQVE7SUFBUyxPQUFPLEdBQUcsYUFBYSxVQUFRLEdBQUUsb0JBQW9CLGFBQWEsVUFBUTtBQUFFO0FBQUMsZUFBZSxHQUFHLEVBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxLQUFFLEdBQUUsT0FBTSxJQUFFLEdBQUcsQ0FBQyxFQUFFO0lBQUMsSUFBRyxDQUFDLEdBQUU7SUFBTyxJQUFJLElBQUU7SUFBSyxJQUFHLEdBQUUsZ0JBQWUsQ0FBQSxJQUFFLEdBQUUsWUFBVyxHQUFHLENBQUMsR0FBRTtRQUFDLElBQUksS0FBRSxDQUFDLHFCQUFxQixFQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsV0FBVSxFQUFHLElBQUcsa0RBQWtELEVBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxXQUFVLEVBQUcsSUFBRyx5QkFBeUIsQ0FBQztRQUFDLElBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSx1QkFBc0IsRUFBRztJQUFFO0lBQUMsSUFBRyxDQUFDLEdBQUUsTUFBTSxJQUFJLEVBQUUsVUFBVSxDQUFDLDZDQUE2QyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBQUUsSUFBSSxJQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsZUFBYyxFQUFHLEFBQUMsQ0FBQSxHQUFFLEVBQUUsbUJBQWtCLEVBQUcsMkJBQTBCLElBQUcsR0FBRSxJQUFHLENBQUEsS0FBRyxHQUFFO0lBQU8sSUFBRyxHQUFFO1FBQUMsRUFBRSxXQUFVLENBQUEsRUFBRSxTQUFRLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsSUFBRztRQUFHO0lBQU07SUFBQyxJQUFJLElBQUUsQ0FBQzs7a0JBRTMzM0IsRUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLFdBQVUsRUFBRyxHQUFHO2tCQUN2QixFQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsV0FBVSxFQUFHLEdBQUc7d0JBQ2pCLEVBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxXQUFVLEVBQUcsR0FBRzs2QkFDbEIsRUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLFdBQVUsRUFBRyxHQUFHOztFQUVsRCxDQUFDLEVBQUMsSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLHVCQUFzQixFQUFHLEdBQUU7SUFBRyxJQUFHLEdBQUU7UUFBQyxXQUFTLEVBQUUsYUFBYSxtQkFBa0IsQ0FBQSxFQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxJQUFHO1FBQUc7SUFBTTtJQUFDLE1BQU0sSUFBSSxFQUFFLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLG9CQUFvQixFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUM7QUFBQyxlQUFlLEdBQUcsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsR0FBRTtJQUFNLElBQUcsR0FBRSxjQUFZLEdBQUUsV0FBVyxTQUFPLEdBQUU7UUFBQyxLQUFJLElBQUksS0FBSyxFQUFFO1lBQUMsSUFBSSxJQUFFLE1BQUssSUFBRSxNQUFLLElBQUUsR0FBRTtZQUFXLEtBQUksSUFBSSxNQUFLLEVBQUU7Z0JBQUMsSUFBRyxHQUFFLFVBQVEsR0FBRTtvQkFBQyxJQUFFLElBQUUsSUFBRSxHQUFFLFFBQVE7b0JBQXFCO2dCQUFLO2dCQUFDLElBQUksS0FBRSxHQUFFLFFBQVE7Z0JBQXFCLElBQUcsSUFBRTtvQkFBQyxJQUFJLElBQUUsR0FBRSxhQUFhO29CQUFjLElBQUcsTUFBSSxHQUFFO3dCQUFDLElBQUUsSUFBRSxJQUFFO3dCQUFFO29CQUFLO29CQUFDLElBQUksSUFBRSxHQUFFLGNBQWM7b0JBQStDLElBQUcsS0FBRyxFQUFFLGFBQWEsV0FBUyxHQUFFO3dCQUFDLElBQUUsSUFBRSxJQUFFO3dCQUFFO29CQUFLO2dCQUFDO1lBQUM7WUFBQyxLQUFHLElBQUUsRUFBRSxXQUFVLENBQUEsRUFBRSxTQUFRLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsTUFBSyxFQUFFLFdBQVUsQ0FBQSxFQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxJQUFHLENBQUMsSUFBRyxRQUFRLEtBQUssQ0FBQywyREFBMkQsRUFBRSxFQUFFLGFBQWEsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUFDO1FBQUM7SUFBTTtJQUFDLElBQUksSUFBRSxHQUFFLGdCQUFjO0lBQUssSUFBRyxDQUFDLEdBQUU7UUFBQyxJQUFJLEtBQUUsQ0FBQyxxQkFBcUIsRUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLFdBQVUsRUFBRyxJQUFHLGtEQUFrRCxFQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsV0FBVSxFQUFHLElBQUcseUJBQXlCLENBQUM7UUFBQyxJQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsdUJBQXNCLEVBQUc7SUFBRTtJQUFDLElBQUcsQ0FBQyxHQUFFO1FBQUMsUUFBUSxLQUFLLENBQUMseURBQXlELEVBQUUsR0FBRSxDQUFDLENBQUM7UUFBRTtJQUFNO0lBQUMsS0FBSSxJQUFJLE1BQUssRUFBRTtRQUFDLElBQUksSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLHVCQUFzQixFQUFHLENBQUMsbUNBQW1DLEVBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxXQUFVLEVBQUcsSUFBRyxDQUFDLENBQUMsRUFBQztRQUFHLElBQUcsR0FBRTtZQUFDLElBQUksS0FBRSxFQUFFLGNBQWM7WUFBMEIsQ0FBQyxNQUFHLEdBQUUsV0FBVSxDQUFBLEVBQUUsU0FBUSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLE1BQUssR0FBRSxXQUFVLENBQUEsR0FBRSxTQUFRLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsSUFBRyxDQUFDO1lBQUc7UUFBUTtRQUFDLElBQUksSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLGVBQWMsRUFBRyxBQUFDLENBQUEsR0FBRSxFQUFFLG1CQUFrQixFQUFHLDhCQUE2QixJQUFHLElBQUUsSUFBRyxDQUFBLEtBQUcsR0FBRTtRQUFPLElBQUcsR0FBRTtZQUFDLElBQUksS0FBRSxFQUFFLFFBQVE7WUFBcUIsS0FBRSxFQUFFLFdBQVUsQ0FBQSxHQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxNQUFLLEVBQUUsV0FBVSxDQUFBLEVBQUUsU0FBUSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLElBQUcsQ0FBQyxJQUFHLEVBQUUsV0FBVSxDQUFBLEVBQUUsU0FBUSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLElBQUc7UUFBRSxPQUFNLFFBQVEsS0FBSyxDQUFDLCtCQUErQixFQUFFLEdBQUUsb0JBQW9CLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFBQztBQUFDO0FBQUMsZUFBZSxHQUFHLEVBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxLQUFFLEdBQUUsUUFBTyxJQUFFLE9BQU8sS0FBRyxJQUFJO0lBQU8sSUFBRyxDQUFDLEdBQUUsTUFBTSxJQUFJLEVBQUUsVUFBVTtJQUFvQyxJQUFHLENBQUUsQ0FBQSxjQUFhLGdCQUFlLEdBQUcsT0FBTyxHQUFHLElBQUU7SUFBRyxJQUFHO1FBQUMsR0FBRSxNQUFNO1lBQUMsZUFBYyxDQUFDO1FBQUM7SUFBRSxFQUFDLE9BQUs7UUFBQyxHQUFFO0lBQU87SUFBQyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLEtBQUksTUFBTSxFQUFFLEtBQUcsTUFBTSxFQUFFLElBQUUsSUFBRyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO0lBQUssSUFBSSxJQUFFLE1BQUssSUFBRTtRQUFLLElBQUksS0FBRSxFQUFFLEtBQUcsSUFBRSxLQUFFLE1BQU0sS0FBSyxHQUFFLGlCQUFpQix3QkFBc0IsRUFBRTtRQUFDLE9BQU0sQ0FBQyxDQUFFLENBQUEsSUFBRSxFQUFFLEdBQUUsRUFBQztJQUFFO0lBQUUsSUFBRyxPQUFLLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxnQkFBZSxFQUFHLEdBQUU7UUFBQyxTQUFRO1FBQUssVUFBUztRQUFHLGVBQWMsU0FBUztJQUFJLElBQUcsQ0FBQyxHQUFFLE1BQU0sRUFBRSxLQUFHLElBQUksRUFBRSxVQUFVLENBQUMsbURBQW1ELEVBQUUsRUFBRSxDQUFDLENBQUM7SUFBRSxFQUFFLGVBQWU7UUFBQyxPQUFNO1FBQVUsVUFBUztJQUFNLElBQUcsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxLQUFJLE1BQU0sRUFBRSxJQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7SUFBSyxJQUFJLElBQUUsRUFBRSxLQUFHLElBQUUsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLGdCQUFlLEVBQUc7UUFBSyxJQUFJLEtBQUUsRUFBRSxHQUFFLFdBQVMsRUFBRSxJQUFHLElBQUUsQ0FBQyxLQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU07UUFBTyxPQUFPLE1BQUcsS0FBRyxDQUFDLEVBQUU7SUFBRSxHQUFFO1FBQUMsU0FBUTtRQUFLLFVBQVM7UUFBRyxlQUFjLFNBQVM7SUFBSTtJQUFHLElBQUcsQ0FBQyxHQUFFLE1BQU0sRUFBRSxLQUFHLElBQUksRUFBRSxVQUFVLENBQUMsNkNBQTZDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFBQyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtZmEzOTVlYjc5ZDMyYjU3My5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9yaXBwbGluZy9vcGVyYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXHJpcHBsaW5nXFxcXG9wZXJhdGlvbnMuanNcIixcImJ1bmRsZUlkXCI6XCI0ZTg2MDg3NjA4M2UzYzY5XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDoga3hDOEFcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL3JpcHBsaW5nL29wZXJhdGlvbnMuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4uLy4uL21ldGhvZHMvY2hvaWNlLW1hdGNoIC0+IDZta0k0ICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2hvaWNlLW1hdGNoLmpzXHJcbiAqICAgLi9waG9uZS1jb3VudHJ5LWNvZGUgLT4gbEJXTTAgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvcmlwcGxpbmcvcGhvbmUtY291bnRyeS1jb2RlLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlciAtPiBlVHpVeCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL29ic2VydmVyLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NoYXJlZC9maWxsZXIgLT4gMmFHc1ggID0+ICBzcmMvY29udGVudHMvc2hhcmVkL2ZpbGxlci5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICogICB+dXRpbHMvZ2V0VGFyZ2V0T3JUaW1lb3V0IC0+IDFUQmhGICA9PiAgc3JjL3V0aWxzL2dldFRhcmdldE9yVGltZW91dC5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcImhhc1JpcHBsaW5nUmVzdW1lUGFyc2luZ1N1Y2NlZWRlZFwiLCgpPT53KSxuLmV4cG9ydChyLFwid2FpdEZvclJpcHBsaW5nUmVzdW1lUGFyc2luZ0NvbXBsZXRlXCIsKCk9PlQpLG4uZXhwb3J0KHIsXCJhZGRFZHVjYXRpb25TZWN0aW9uXCIsKCk9PkkpLG4uZXhwb3J0KHIsXCJhZGRFbXBsb3ltZW50U2VjdGlvblwiLCgpPT5qKSxuLmV4cG9ydChyLFwicHJlRmlsbEZvcm1cIiwoKT0+RCksbi5leHBvcnQocixcImZpbmRFeGFjdFJpcHBsaW5nTG9jYXRpb25PcHRpb25cIiwoKT0+Uiksbi5leHBvcnQocixcInJlYWRSaXBwbGluZ1Bob25lQ29kZURpc3BsYXlUZXh0XCIsKCk9PkIpLG4uZXhwb3J0KHIsXCJzZWxlY3RQaG9uZUNvdW50cnlDb2RlXCIsKCk9PlgpLG4uZXhwb3J0KHIsXCJ1cGxvYWRSZXN1bWVcIiwoKT0+Siksbi5leHBvcnQocixcImdldFJpcHBsaW5nQ292ZXJMZXR0ZXJVcGxvYWREb21cIiwoKT0+ZW8pLG4uZXhwb3J0KHIsXCJoYXNSaXBwbGluZ0NvdmVyTGV0dGVyU2xvdFwiLCgpPT5laSksbi5leHBvcnQocixcIndhaXRGb3JSaXBwbGluZ0NvdmVyTGV0dGVyU2xvdFwiLCgpPT5lYSksbi5leHBvcnQocixcInVwbG9hZENvdmVyTGV0dGVyXCIsKCk9PmVzKSxuLmV4cG9ydChyLFwicmVtb3ZlUmVzdW1lXCIsKCk9PmV1KSxuLmV4cG9ydChyLFwiZmlsbElucHV0VGV4dEZpZWxkXCIsKCk9PmVjKSxuLmV4cG9ydChyLFwiZmlsbFNlbGVjdEZpZWxkXCIsKCk9PmVkKSxuLmV4cG9ydChyLFwiZmlsbFJhZGlvR3JvdXBGaWxlZFwiLCgpPT5lcCksbi5leHBvcnQocixcImZpbGxDaGVja2JveEZpZWxkXCIsKCk9PmVtKSxuLmV4cG9ydChyLFwiZmlsbFJlc29sdmVkTG9jYXRpb25JbnB1dFwiLCgpPT5laCk7dmFyIG89ZShcIi4uLy4uL21ldGhvZHMvY2hvaWNlLW1hdGNoXCIpLGk9ZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxhPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIiksbD1lKFwifmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXJcIikscz1lKFwifmNvbnRlbnRzL3NoYXJlZC9maWxsZXJcIiksdT1lKFwifmNvcmUveHBhdGhcIiksYz1lKFwifnV0aWxzL2RlbGF5XCIpLGQ9ZShcIn51dGlscy9nZXRUYXJnZXRPclRpbWVvdXRcIiksZj1uLmludGVyb3BEZWZhdWx0KGQpLHA9ZShcIi4vcGhvbmUtY291bnRyeS1jb2RlXCIpO2xldCBtPS9yKD86XFx1MDBlOXxlKXN1bSg/OlxcdTAwZTl8ZSlcXHMrcGFyc2luZ1xccyt3YXNcXHMrc3VjY2Vzc2Z1bC9pLGg9NTAwLGc9M2UzLGI9MTVlMyx5PVsvcig/OlxcdTAwZTl8ZSlzdW0oPzpcXHUwMGU5fGUpXFxzK3BhcnNpbmdcXHMrKD86aXNcXHMrKT9pblxccytwcm9ncmVzcy9pLC9yKD86XFx1MDBlOXxlKXN1bSg/OlxcdTAwZTl8ZSlcXHMrd2lsbFxccytiZVxccytwYXJzZWQvaSwvcGFyc2luZ1xccysoPzp5b3VyXFxzKyk/cig/OlxcdTAwZTl8ZSlzdW0oPzpcXHUwMGU5fGUpL2ksL3IoPzpcXHUwMGU5fGUpc3VtKD86XFx1MDBlOXxlKVxccytpc1xccytiZWluZ1xccytwYXJzZWQvaV07ZnVuY3Rpb24gdigpe3JldHVybltkb2N1bWVudC5ib2R5Py5pbm5lclRleHQsZG9jdW1lbnQuYm9keT8udGV4dENvbnRlbnRdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpfWZ1bmN0aW9uIHcoKXtyZXR1cm4gbS50ZXN0KHYoKSl9ZnVuY3Rpb24gUygpe2xldCBlPXYoKTtyZXR1cm4geS5zb21lKHQ9PnQudGVzdChlKSl9ZnVuY3Rpb24gRSgpe3JldHVyblwiYXRzLnJpcHBsaW5nLmNvbVwiPT09d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lJiYhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2RhdGEtdGVzdGlkPVwicmVzdW1lXCJdJyl9ZnVuY3Rpb24geChlKXtsZXQgdD1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtpZihcInRleHRhcmVhXCI9PT10fHxcInNlbGVjdFwiPT09dClyZXR1cm4hMDtpZihcImlucHV0XCIhPT10KXJldHVybiExO2xldCByPShlLmdldEF0dHJpYnV0ZShcInR5cGVcIil8fFwidGV4dFwiKS50b0xvd2VyQ2FzZSgpO3JldHVybltcInRleHRcIixcImVtYWlsXCIsXCJ0ZWxcIixcInNlYXJjaFwiLFwidXJsXCIsXCJudW1iZXJcIixcImRhdGVcIl0uaW5jbHVkZXMocil9ZnVuY3Rpb24gQygpe3JldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSkuc29tZSh4KX1mdW5jdGlvbiBBKCl7cmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKS5maWx0ZXIoeCkubWFwKGU9PltlLnRhZ05hbWUsZS5pZCxlLmdldEF0dHJpYnV0ZShcIm5hbWVcIil8fFwiXCIsZS52YWx1ZXx8XCJcIl0uam9pbihcIjpcIikpLmpvaW4oXCJcXG5cIil9YXN5bmMgZnVuY3Rpb24gayhlPXt9KXtsZXQgdD1lLmluaXRpYWxTaWduYXR1cmU/P0EoKSxyPURhdGUubm93KCksbj0hZS5yZXF1aXJlQ2hhbmdlO3JldHVybigwLGwud2FpdEZvckNvbmRpdGlvbikoKCk9PntsZXQgZT1BKCk7cmV0dXJuIGUhPT10Pyh0PWUscj1EYXRlLm5vdygpLG49ITAsITEpOm4mJkRhdGUubm93KCktcj49aH0se3RpbWVvdXQ6ZS50aW1lb3V0Pz9nLGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KX1hc3luYyBmdW5jdGlvbiBUKGU9e30pe2xldCB0PUEoKTtpZih3KCkmJiFlLmFmdGVyVXBsb2FkKXJldHVybiBhd2FpdCBrKCksITA7bGV0IHI9ZG9jdW1lbnQuYm9keSxuPWF3YWl0ICgwLGwud2FpdEZvckNvbmRpdGlvbikoKCk9PlMoKXx8dygpLHt0aW1lb3V0OjE1MDAsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6cn0pO2lmKCFuJiYhZS5mb3JjZSYmIUUoKSlyZXR1cm4hMDtsZXQgbz10LGk9RGF0ZS5ub3coKSxhPSExLHM9YXdhaXQgKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2lmKHcoKSlyZXR1cm4hMDtsZXQgZT1BKCk7cmV0dXJuIGUhPT1vPyhvPWUsaT1EYXRlLm5vdygpLGE9ITAsITEpOmEmJkRhdGUubm93KCktaT49aH0se3RpbWVvdXQ6M2U0LGludGVydmFsOjI1MCxvYnNlcnZlVGFyZ2V0OnJ9KTtzfHxjb25zb2xlLndhcm4oXCJbdXBsb2FkUmVzdW1lXSBUaW1lZCBvdXQgd2FpdGluZyBmb3IgUmlwcGxpbmcgcmVzdW1lIHBhcnNpbmcgdG8gZmluaXNoXCIpO2xldCB1PSEhZS5hZnRlclVwbG9hZCYmIWEmJkMoKSxjPWF3YWl0IGsoe2luaXRpYWxTaWduYXR1cmU6byxyZXF1aXJlQ2hhbmdlOnUsdGltZW91dDp1P2I6dm9pZCAwfSk7cmV0dXJuIWMmJnUmJmNvbnNvbGUud2FybihcIlt1cGxvYWRSZXN1bWVdIFRpbWVkIG91dCB3YWl0aW5nIGZvciBSaXBwbGluZyBwYXJzZXIgZmllbGQgcmV3cml0ZVwiKSxzfWFzeW5jIGZ1bmN0aW9uIEYoZSx0KXt0cnl7bGV0IHI9ZS5jbG9zZXN0KFwiLnJlYWN0LWRhdGVwaWNrZXItd3JhcHBlclwiKTtpZihyKXtsZXQgcj10LG49bnVsbDtpZih0Lm1hdGNoKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLykpbj1uZXcgRGF0ZSh0KTtlbHNlIGlmKHQubWF0Y2goL15cXGR7NH0tXFxkezJ9JC8pKW49bmV3IERhdGUodCtcIi0wMVwiKTtlbHNlIGlmKHQubWF0Y2goL15cXGR7Mn1cXC9cXGR7Mn1cXC9cXGR7NH0kLykpe3I9dDtsZXRbZSxvLGldPXQuc3BsaXQoXCIvXCIpO249bmV3IERhdGUocGFyc2VJbnQoaSkscGFyc2VJbnQoZSktMSxwYXJzZUludChvKSl9ZWxzZSBuPW5ldyBEYXRlKHQpO2lmKG4mJiFpc05hTihuLmdldFRpbWUoKSkpe2xldCBlPVN0cmluZyhuLmdldE1vbnRoKCkrMSkucGFkU3RhcnQoMixcIjBcIiksdD1TdHJpbmcobi5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsXCIwXCIpLG89bi5nZXRGdWxsWWVhcigpO3I9YCR7ZX0vJHt0fS8ke299YH1pZihlLnZhbHVlPT09cilyZXR1cm4gZS5ibHVyKCksZG9jdW1lbnQuYm9keS5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDEwMCksITA7bGV0IG89ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFjdC1kYXRlcGlja2VyLXBvcHBlciwgLnJlYWN0LWRhdGVwaWNrZXJfX3BvcnRhbFwiKTtpZihvKXtlLmJsdXIoKTtsZXQgdD1uZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIix7a2V5OlwiRXNjYXBlXCIsY29kZTpcIkVzY2FwZVwiLGtleUNvZGU6MjcsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSk7ZS5kaXNwYXRjaEV2ZW50KHQpLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCl9ZS5mb2N1cygpLGF3YWl0ICgwLGMuZGVsYXkpKDUwKTtsZXQgaT1lLnZhbHVlO2UudmFsdWU9XCJcIixhd2FpdCAoMCxjLmRlbGF5KSg1MCksZS52YWx1ZT1yO2xldCBhPU9iamVjdC5nZXRQcm90b3R5cGVPZihlKSxsPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxcInZhbHVlXCIpPy5zZXQ7bCYmbC5jYWxsKGUscik7bGV0IHM9ZT8uX3ZhbHVlVHJhY2tlcjtzJiZzLnNldFZhbHVlKGkpO2xldCB1PW5ldyBJbnB1dEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGRhdGE6cixpbnB1dFR5cGU6XCJpbnNlcnRUZXh0XCJ9KTtpZihlLmRpc3BhdGNoRXZlbnQodSksYXdhaXQgKDAsYy5kZWxheSkoNTApLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDEwMCksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImJsdXJcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDEwMCksZS52YWx1ZT09PXJ8fGUudmFsdWUuaW5jbHVkZXMoci5zcGxpdChcIi9cIilbMF0pKXJldHVybiBlLmJsdXIoKSxkb2N1bWVudC5ib2R5LmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMTAwKSwhMH1sZXQgbj10LG89bnVsbDtpZih0Lm1hdGNoKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLykpbz1uZXcgRGF0ZSh0KTtlbHNlIGlmKHQubWF0Y2goL15cXGR7NH0tXFxkezJ9JC8pKW89bmV3IERhdGUodCtcIi0wMVwiKTtlbHNlIGlmKHQubWF0Y2goL15cXGR7Mn1cXC9cXGR7Mn1cXC9cXGR7NH0kLykpe249dDtsZXRbZSxyLGldPXQuc3BsaXQoXCIvXCIpO289bmV3IERhdGUocGFyc2VJbnQoaSkscGFyc2VJbnQoZSktMSxwYXJzZUludChyKSl9ZWxzZSBvPW5ldyBEYXRlKHQpO2lmKG8mJiFpc05hTihvLmdldFRpbWUoKSkpe2xldCBlPVN0cmluZyhvLmdldE1vbnRoKCkrMSkucGFkU3RhcnQoMixcIjBcIiksdD1TdHJpbmcoby5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsXCIwXCIpLHI9by5nZXRGdWxsWWVhcigpO249YCR7ZX0vJHt0fS8ke3J9YH10cnl7ZS5mb2N1cygpLGF3YWl0ICgwLGMuZGVsYXkpKDUwKTtsZXQgdD1lLnZhbHVlO2UudmFsdWU9bjtsZXQgcj1PYmplY3QuZ2V0UHJvdG90eXBlT2YoZSksbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsXCJ2YWx1ZVwiKT8uc2V0O28mJm8uY2FsbChlLG4pO2xldCBpPWU/Ll92YWx1ZVRyYWNrZXI7aSYmaS5zZXRWYWx1ZSh0KTtsZXQgYT1uZXcgSW5wdXRFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxkYXRhOm4saW5wdXRUeXBlOlwiaW5zZXJ0VGV4dFwifSk7aWYoZS5kaXNwYXRjaEV2ZW50KGEpLGF3YWl0ICgwLGMuZGVsYXkpKDUwKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxhd2FpdCAoMCxjLmRlbGF5KSgxMDApLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJibHVyXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxhd2FpdCAoMCxjLmRlbGF5KSgxMDApLGUudmFsdWU9PT1ufHxlLnZhbHVlLmluY2x1ZGVzKG4uc3BsaXQoXCIvXCIpWzBdKSlyZXR1cm4gZS5ibHVyKCksZG9jdW1lbnQuYm9keS5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDEwMCksITB9Y2F0Y2h7fWlmKCFvKXtpZih0Lm1hdGNoKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLykpbz1uZXcgRGF0ZSh0KTtlbHNlIGlmKHQubWF0Y2goL15cXGR7NH0tXFxkezJ9JC8pKW89bmV3IERhdGUodCtcIi0wMVwiKTtlbHNlIGlmKHQubWF0Y2goL15cXGR7Mn1cXC9cXGR7Mn1cXC9cXGR7NH0kLykpe2xldFtlLHIsbl09dC5zcGxpdChcIi9cIik7bz1uZXcgRGF0ZShwYXJzZUludChuKSxwYXJzZUludChlKS0xLHBhcnNlSW50KHIpKX1lbHNlIG89bmV3IERhdGUodCl9aWYoIW98fGlzTmFOKG8uZ2V0VGltZSgpKSlyZXR1cm4hMTtsZXQgaT1vLmdldEZ1bGxZZWFyKCksYT1vLmdldE1vbnRoKCkrMSxsPW8uZ2V0RGF0ZSgpO2UuZm9jdXMoKSxlLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoNTAwKTtsZXQgcz1udWxsO2ZvcihsZXQgZT0wO2U8MyYmIShzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhY3QtZGF0ZXBpY2tlci1wb3BwZXIsIC5yZWFjdC1kYXRlcGlja2VyX19wb3J0YWxcIikpO2UrKylhd2FpdCAoMCxjLmRlbGF5KSgyMDApO2lmKCFzKXJldHVybiExO2xldCB1PXMucXVlcnlTZWxlY3RvcihcIi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXJlYWQtdmlldy0tc2VsZWN0ZWQteWVhclwiKTtpZih1JiZ1LnRleHRDb250ZW50Py50cmltKCkhPT1pLnRvU3RyaW5nKCkpe3UuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApO2xldCBlPXMucXVlcnlTZWxlY3RvcihcIi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLWRyb3Bkb3duXCIpO2lmKGUpe2xldCB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItb3B0aW9uXCIpKS5maW5kKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKT09PWkudG9TdHJpbmcoKSk7dCYmKHQuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApKX19bGV0IGQ9cy5xdWVyeVNlbGVjdG9yKFwiLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXJlYWQtdmlldy0tc2VsZWN0ZWQtbW9udGhcIik7aWYoZCl7bGV0IGU9ZC50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiLHQ9W1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLHI9dFthLTFdO2lmKGUhPT1yKXtkLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMjAwKTtsZXQgZT1zLnF1ZXJ5U2VsZWN0b3IoXCIucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtZHJvcGRvd25cIik7aWYoZSl7bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtb3B0aW9uXCIpKS5maW5kKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKT09PXIpO3QmJih0LmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMjAwKSl9fX1sZXQgZj1gcmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS0ke1N0cmluZyhsKS5wYWRTdGFydCgzLFwiMFwiKX1gLHA9cy5xdWVyeVNlbGVjdG9yKGAuJHtmfTpub3QoLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0tb3V0c2lkZS1tb250aClgKTtpZihwKXtsZXQgdD1wLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIscj1gJHthfS8ke2x9LyR7aX1gO2lmKHQuaW5jbHVkZXMocil8fCF0KXJldHVybiBwLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMjAwKSxlLmJsdXIoKSxkb2N1bWVudC5ib2R5LmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMTAwKSwhMH1sZXQgbT1zLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVhY3QtZGF0ZXBpY2tlcl9fZGF5Om5vdCgucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1vdXRzaWRlLW1vbnRoKVwiKTtmb3IobGV0IHQgb2YgbSl7bGV0IHI9dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiO2lmKHIuaW5jbHVkZXMoYCR7YX0vJHtsfS8ke2l9YCl8fHIuaW5jbHVkZXMoYCR7bH10aCwgJHtpfWApKXJldHVybiB0LmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMjAwKSxlLmJsdXIoKSxkb2N1bWVudC5ib2R5LmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMTAwKSwhMH1yZXR1cm4hMX1jYXRjaChlKXtyZXR1cm4gY29uc29sZS5lcnJvcihcIltmaWxsRGF0ZVBpY2tlckZpZWxkXSBFcnJvcjpcIixlKSwhMX19YXN5bmMgZnVuY3Rpb24gSShlKXtpZihlPD0wKXJldHVybjtsZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoM1wiKSkscj10LmZpbmQoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpPT09XCJFZHVjYXRpb25cIik7aWYoIXIpcmV0dXJuO2xldCBuPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKSkuZmluZChlPT57bGV0IHQ9ZS50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiLHI9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiO3JldHVybiB0LmluY2x1ZGVzKFwiQWRkIE1vcmUgRWR1Y2F0aW9uIEhpc3RvcnlcIil8fHIuaW5jbHVkZXMoXCJBZGQgTW9yZSBFZHVjYXRpb24gSGlzdG9yeVwiKX0pO2lmKCFuKXJldHVybjtsZXQgbz1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W2lkKj1cImluc3RpdHV0aW9uXCJdLCBpbnB1dFtuYW1lKj1cImluc3RpdHV0aW9uXCJdLCBsYWJlbFtmb3IqPVwiaW5zdGl0dXRpb25cIl0nKSkuZmlsdGVyKGU9PntsZXQgdD1cIkxBQkVMXCI9PT1lLnRhZ05hbWU/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5nZXRBdHRyaWJ1dGUoXCJmb3JcIil8fFwiXCIpOmU7aWYoIXQpcmV0dXJuITE7bGV0IG89ci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0KSxpPShvJk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKSE9MCxhPXQuY29tcGFyZURvY3VtZW50UG9zaXRpb24obiksbD0oYSZOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORykhPTA7cmV0dXJuIGkmJmx9KSxpPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKS5maWx0ZXIoZT0+e2xldCB0PXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSksbz0odCZOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORykhPTAsaT1lLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4pLGE9KGkmTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpIT0wO2lmKCFvfHwhYSlyZXR1cm4hMTtsZXQgbD1lLmlkfHxcIlwiLHM9ZS5uYW1lfHxcIlwiO3JldHVybi9cXC5yZXNwb25zZVxcLlxcZCtcXC4vLnRlc3QobCtzKX0pLGE9bmV3IFNldDtpLmZvckVhY2goZT0+e2xldCB0PWUuaWR8fFwiXCIscj1lLm5hbWV8fFwiXCIsbj0odCtyKS5tYXRjaCgvXFwucmVzcG9uc2VcXC4oXFxkKylcXC4vKTtuJiZhLmFkZChwYXJzZUludChuWzFdLDEwKSl9KTtsZXQgbD0wO2lmKGEuc2l6ZT4wKWw9TWF0aC5tYXgoLi4uQXJyYXkuZnJvbShhKSkrMTtlbHNlIGlmKG8ubGVuZ3RoPjApbD1vLmxlbmd0aDtlbHNle2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKS5maWx0ZXIoZT0+e2xldCB0PXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSksbz0odCZOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORykhPTAsaT1lLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4pLGE9KGkmTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpIT0wO3JldHVybiBvJiZhfSk7bD1lLmxlbmd0aD4wPzE6MH1sZXQgcz1lLWw7aWYoIShzPD0wKSlmb3IobGV0IGU9MDtlPHM7ZSsrKW4uY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgzMDApfWFzeW5jIGZ1bmN0aW9uIGooZSl7aWYoZTw9MClyZXR1cm47bGV0IHQ9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDNcIikpLHI9dC5maW5kKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKT09PVwiRW1wbG95bWVudCBIaXN0b3J5XCIpO2lmKCFyKXJldHVybjtsZXQgbj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbmQoZT0+e2xldCB0PWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtyZXR1cm4gdC5pbmNsdWRlcyhcIkFkZCBBbm90aGVyIFBvc2l0aW9uXCIpfSk7aWYoIW4pcmV0dXJuO2xldCBvPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbaWQqPVwiY29tcGFueVwiXSwgaW5wdXRbbmFtZSo9XCJjb21wYW55XCJdLCBsYWJlbFtmb3IqPVwiY29tcGFueVwiXScpKS5maWx0ZXIoZT0+e2xldCB0PVwiTEFCRUxcIj09PWUudGFnTmFtZT9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLmdldEF0dHJpYnV0ZShcImZvclwiKXx8XCJcIik6ZTtpZighdClyZXR1cm4hMTtsZXQgbz1yLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpLGk9KG8mTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpIT0wLGE9dC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuKSxsPShhJk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKSE9MDtyZXR1cm4gaSYmbH0pLGk9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpLmZpbHRlcihlPT57bGV0IHQ9ci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKSxvPSh0Jk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKSE9MCxpPWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obiksYT0oaSZOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORykhPTA7aWYoIW98fCFhKXJldHVybiExO2xldCBsPWUuaWR8fFwiXCIscz1lLm5hbWV8fFwiXCI7cmV0dXJuL1xcLnJlc3BvbnNlXFwuXFxkK1xcLi8udGVzdChsK3MpfSksYT1uZXcgU2V0O2kuZm9yRWFjaChlPT57bGV0IHQ9ZS5pZHx8XCJcIixyPWUubmFtZXx8XCJcIixuPSh0K3IpLm1hdGNoKC9cXC5yZXNwb25zZVxcLihcXGQrKVxcLi8pO24mJmEuYWRkKHBhcnNlSW50KG5bMV0sMTApKX0pO2xldCBsPU1hdGgubWF4KG8ubGVuZ3RoLGEuc2l6ZSkscz1lLWw7aWYoIShzPD0wKSlmb3IobGV0IGU9MDtlPHM7ZSsrKW4uY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgzMDApfWFzeW5jIGZ1bmN0aW9uIEQoKXthd2FpdCAoMCxjLmRlbGF5KSg1MDApfWFzeW5jIGZ1bmN0aW9uIFAoZSx0KXtsZXQgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSxcInZhbHVlXCIpPy5zZXQ7Zm9yKGxldCBuPTA7bjx0Lmxlbmd0aDtuKyspe2xldCBvPXQuc2xpY2UoMCxuKzEpO3I/ci5jYWxsKGUsbyk6ZS52YWx1ZT1vLGUuZGlzcGF0Y2hFdmVudChuZXcgSW5wdXRFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxkYXRhOnRbbl0saW5wdXRUeXBlOlwiaW5zZXJ0VGV4dFwifSkpLGF3YWl0ICgwLGMuZGVsYXkpKDQwKX19ZnVuY3Rpb24gXyhlLHQpe2xldCByPWUudmFsdWU7ZS52YWx1ZT10O2xldCBuPU9iamVjdC5nZXRQcm90b3R5cGVPZihlKSxvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobixcInZhbHVlXCIpPy5zZXQ7byYmby5jYWxsKGUsdCk7bGV0IGk9ZS5fdmFsdWVUcmFja2VyO2kmJmkuc2V0VmFsdWUocil9ZnVuY3Rpb24gTChlKXtyZXR1cm4gU3RyaW5nKGU/P1wiXCIpLm5vcm1hbGl6ZShcIk5GS0NcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKX1mdW5jdGlvbiBSKGUsdCl7bGV0IHI9TChlKTtyZXR1cm4gciYmdC5maW5kKGU9PkwoZS50ZXh0Q29udGVudHx8XCJcIik9PT1yKXx8bnVsbH1mdW5jdGlvbiBPKGUpe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKTtyZXR1cm4gdD9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KTpudWxsfWZ1bmN0aW9uIE0oZSl7XyhlLFwiXCIpLGUuZGlzcGF0Y2hFdmVudChuZXcgSW5wdXRFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGUuYmx1cigpfWZ1bmN0aW9uIE4oZSl7bGV0IHQ9ZS5jbG9zZXN0KCdbZGF0YS10ZXN0aWQ9XCJmaWVsZFwiXScpO3JldHVybiB0Py5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLWlucHV0PVwiZXh0ZXJuYWxQbGFjZUlkXCJdJyk/P3Q/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtaW5wdXQ9XCJleHRlcm5hbFBsYWNlSWRcIl0nKT8/ZS5jbG9zZXN0KCdbZGF0YS10ZXN0aWQ9XCJsb2NhdGlvblwiXScpPy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLWlucHV0PVwiZXh0ZXJuYWxQbGFjZUlkXCJdJyk/P251bGx9ZnVuY3Rpb24gJChlLHQpe2xldCByPVkoZSksbj1yIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudD9yLnZhbHVlOlwiXCI7cmV0dXJuW2UudGV4dENvbnRlbnQsdC50ZXh0Q29udGVudCxuXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIil9ZnVuY3Rpb24gQigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlc3RpZD1cInBob25lX251bWJlci1jb2RlXCJdJyksdD1lPy5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZXN0aWQ9XCJzZWxlY3QtY29udHJvbGxlclwiXScpO3JldHVybiBlJiZ0PyQodCxlKTpcIlwifWZ1bmN0aW9uIHEoZSx0KXtyZXR1cm4oMCxwLmdldFJpcHBsaW5nUGhvbmVDb2RlT3B0aW9uU2NvcmUpKGUsdCk+PTQwMH1mdW5jdGlvbiBVKGUpe2UuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIix7a2V5OlwiRW50ZXJcIixjb2RlOlwiRW50ZXJcIixrZXlDb2RlOjEzLHdoaWNoOjEzLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLHtrZXk6XCJFbnRlclwiLGNvZGU6XCJFbnRlclwiLGtleUNvZGU6MTMsd2hpY2g6MTMsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpfWZ1bmN0aW9uIEgoZSl7ZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtrZXk6XCJBcnJvd0Rvd25cIixjb2RlOlwiQXJyb3dEb3duXCIsa2V5Q29kZTo0MCx3aGljaDo0MCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIix7a2V5OlwiQXJyb3dEb3duXCIsY29kZTpcIkFycm93RG93blwiLGtleUNvZGU6NDAsd2hpY2g6NDAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGUucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS10ZXN0aWQ9XCJpbnB1dC1zZWxlY3Qtc2VhcmNoLWlucHV0XCJdLCBpbnB1dFtyb2xlPVwiY29tYm9ib3hcIl0sIFtyb2xlPVwiY29tYm9ib3hcIl0nKX1mdW5jdGlvbiB6KGUpe2xldCB0PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpO3JldHVyblwibm9uZVwiIT09dC5kaXNwbGF5JiZcImhpZGRlblwiIT09dC52aXNpYmlsaXR5JiZlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPjB9ZnVuY3Rpb24gVihlLHQpe2xldCByPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKTtpZihyKXtsZXQgZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChyKTtpZihlKXJldHVybiBlfWlmKGUuaWQpe2xldCB0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2UuaWR9LWxpc3RgKTtpZih0KXJldHVybiB0fWxldCBuPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIpO2lmKG4pe2xldCBlPW4ucmVwbGFjZSgvLS1vcHRpb24tXFxkKyQvLFwiLS1saXN0XCIpLHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSk7aWYodClyZXR1cm4gdH1sZXQgbz1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRlc3RpZD1cInBvcHBlclwiXSB1bFtyb2xlPVwibGlzdGJveFwiXSwgdWxbcm9sZT1cImxpc3Rib3hcIl0nKSkuZmlsdGVyKGU9PmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCksaT1vLmZpbHRlcih6KTtpZigwPT09aS5sZW5ndGgpcmV0dXJuIG51bGw7aWYoMT09PWkubGVuZ3RofHwhdClyZXR1cm4gaVswXTtsZXQgYT1udWxsLGw9LTE7Zm9yKGxldCBlIG9mIGkpe2xldCByPUcoZSx0KTtyJiZyLnNjb3JlPmwmJihsPXIuc2NvcmUsYT1lKX1yZXR1cm4gYX1hc3luYyBmdW5jdGlvbiBXKGUpe2UuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZW50ZXJcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDIwKSxlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZW92ZXJcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDIwKSxlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZWRvd25cIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDIwKSxlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxhd2FpdCAoMCxjLmRlbGF5KSgyMCksZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpfWZ1bmN0aW9uIEcoZSx0KXtsZXQgcj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnbGlbcm9sZT1cIm9wdGlvblwiXScpKSxuPW51bGwsbz0tMTtmb3IobGV0IGUgb2Ygcil7bGV0IHI9KDAscC5nZXRSaXBwbGluZ1Bob25lQ29kZU9wdGlvblNjb3JlKShlLnRleHRDb250ZW50fHxcIlwiLHQpO2lmKDUwMD09PXIpcmV0dXJue29wdGlvbjplLHNjb3JlOnJ9O3I+byYmKG49ZSxvPXIpfXJldHVybiBuJiZvPj0wP3tvcHRpb246bixzY29yZTpvfTpudWxsfWFzeW5jIGZ1bmN0aW9uIEsoZSx0LHIpe2xldCBuPSgpPT5xKEIoKSxyKSxvPVkoZSk7aWYoIW8pcmV0dXJuITE7by5mb2N1cygpLGF3YWl0ICgwLGMuZGVsYXkpKDMwKSxhd2FpdCBXKG8pLGF3YWl0ICgwLGwud2FpdEZvckNvbmRpdGlvbikoKCk9PlwidHJ1ZVwiPT09by5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpfHwhIVYobyxyKSx7dGltZW91dDoxMjAwLGludGVydmFsOjUwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pLG8gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiYoYXdhaXQgUChvLHIuc2VhcmNoKSxhd2FpdCAoMCxjLmRlbGF5KSg0MDApKTtsZXQgaT1hd2FpdCAoMCxmLmRlZmF1bHQpKCgpPT5WKG8sciksKCk9PiExLDIwKTtpZihpKXthd2FpdCAoMCxsLndhaXRGb3JDb25kaXRpb24pKCgpPT5pLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpW3JvbGU9XCJvcHRpb25cIl0nKS5sZW5ndGg+MCx7dGltZW91dDoxZTMsaW50ZXJ2YWw6NTAsb2JzZXJ2ZVRhcmdldDppfSk7bGV0IGU9RyhpLHIpO2lmKGUmJihlLm9wdGlvbi5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJjZW50ZXJcIixiZWhhdmlvcjpcImF1dG9cIn0pLGF3YWl0ICgwLGMuZGVsYXkpKDEwMCksYXdhaXQgVyhlLm9wdGlvbiksYXdhaXQgKDAsYy5kZWxheSkoMTUwKSxhd2FpdCAoMCxsLndhaXRGb3JDb25kaXRpb24pKG4se3RpbWVvdXQ6ODAwLGludGVydmFsOjUwLG9ic2VydmVUYXJnZXQ6dH0pfHwoSChvKSxhd2FpdCAoMCxjLmRlbGF5KSgxMDApLFUobyksYXdhaXQgKDAsYy5kZWxheSkoMTUwKSxhd2FpdCAoMCxsLndhaXRGb3JDb25kaXRpb24pKG4se3RpbWVvdXQ6MWUzLGludGVydmFsOjUwLG9ic2VydmVUYXJnZXQ6dH0pKSkpcmV0dXJuITB9bGV0IGE9by5nZXRBdHRyaWJ1dGUoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIik7aWYoYSl7bGV0IGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSk7aWYoZSYmcShlLnRleHRDb250ZW50fHxcIlwiLHIpJiYoYXdhaXQgVyhlKSxhd2FpdCAoMCxjLmRlbGF5KSgxNTApLGF3YWl0ICgwLGwud2FpdEZvckNvbmRpdGlvbikobix7dGltZW91dDo4MDAsaW50ZXJ2YWw6NTAsb2JzZXJ2ZVRhcmdldDp0fSkpKXJldHVybiEwfXJldHVyblwidHJ1ZVwiPT09by5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpJiYoZG9jdW1lbnQuYm9keS5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDEwMCkpLG4oKX1hc3luYyBmdW5jdGlvbiBYKGUsdD17fSl7dHJ5e2xldCByPSgwLHAucmVzb2x2ZVJpcHBsaW5nUGhvbmVDb3VudHJ5VGFyZ2V0KShlLHQpO2lmKCFyKXJldHVybiExO2xldCBuPWF3YWl0ICgwLGYuZGVmYXVsdCkoKCk9PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlc3RpZD1cInBob25lX251bWJlci1jb2RlXCJdJyksKCk9PiExLDMwKTtpZighbilyZXR1cm4hMTtsZXQgbz1hd2FpdCAoMCxmLmRlZmF1bHQpKCgpPT5uLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlc3RpZD1cInNlbGVjdC1jb250cm9sbGVyXCJdJyksKCk9PiExLDIwKTtpZighbylyZXR1cm4hMTtsZXQgaT0oKT0+cShCKCkscik7aWYoaSgpKXJldHVybiEwO2ZvcihsZXQgZT0wO2U8MztlKyspaWYoYXdhaXQgSyhvLG4scikpcmV0dXJuITB9Y2F0Y2goZSl7Y29uc29sZS5lcnJvcihcIltzZWxlY3RQaG9uZUNvdW50cnlDb2RlXSBFcnJvcjpcIixlKX1yZXR1cm4hMX1hc3luYyBmdW5jdGlvbiBKKGUsdCxyKXtsZXQgbj13aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7aWYobi5pbmNsdWRlcyhcInJpcHBsaW5nLWF0c1wiKSl7bGV0IG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlcy5SZXN1bWVcIik7aWYobil7bGV0IG89QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5kei1oaWRkZW4taW5wdXRbdHlwZT1cImZpbGVcIl0nKSksbD1udWxsLHM9bi5xdWVyeVNlbGVjdG9yKFwiLmRyb3B6b25lXCIpO2lmKHMpe2xldCBlPW8uZmlsdGVyKGU9PlwiYXBwbGljYXRpb24vcGRmLCAuZG9jLCAuZG9jeCwgdGV4dC9wbGFpblwiPT09ZS5hY2NlcHQpO2UubGVuZ3RoPj0yP2w9ZVsxXToxPT09ZS5sZW5ndGgmJihsPWVbMF0pfWlmKCFsJiZzKXtzLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMTAwKTtsZXQgZT1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmR6LWhpZGRlbi1pbnB1dFt0eXBlPVwiZmlsZVwiXScpKSx0PWUuZmlsdGVyKGU9PlwiYXBwbGljYXRpb24vcGRmLCAuZG9jLCAuZG9jeCwgdGV4dC9wbGFpblwiPT09ZS5hY2NlcHQpO3QubGVuZ3RoPj0yP2w9dFsxXToxPT09dC5sZW5ndGgmJihsPXRbMF0pfWwmJihhd2FpdCAoMCxhLnVwbG9hZEZpbGVzKShsLGF3YWl0ICgwLGkuZmV0Y2hQZGZBc0Jsb2IpKGUpLHQscixcIlJlc3VtZS9DVlwiKSxhd2FpdCBUKHthZnRlclVwbG9hZDohMH0pKX19ZWxzZXtsZXQgbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtkYXRhLXRlc3RpZD1cInJlc3VtZVwiXScpO2lmKG4pe2xldCBvPW4ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKTtvJiYoYXdhaXQgKDAsYS51cGxvYWRGaWxlcykobyxhd2FpdCAoMCxpLmZldGNoUGRmQXNCbG9iKShlKSx0LHIsXCJSZXN1bWUvQ1ZcIiksYXdhaXQgVCh7Zm9yY2U6XCJhdHMucmlwcGxpbmcuY29tXCI9PT13aW5kb3cubG9jYXRpb24uaG9zdG5hbWUsYWZ0ZXJVcGxvYWQ6ITB9KSl9fX1mdW5jdGlvbiBRKGUpe3JldHVybiBlPy5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpfHxcIlwifWZ1bmN0aW9uIFooZSl7bGV0IHQ9UShlPy50ZXh0Q29udGVudCk7cmV0dXJuIHQuaW5jbHVkZXMoXCJjb3ZlciBsZXR0ZXJcIil9ZnVuY3Rpb24gZWUoKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZGF0YS10ZXN0aWQ9XCJjb3Zlcl9sZXR0ZXJcIl0nKXx8ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlcy5Db3ZlckxldHRlci5maWxlX2xhYmVsXCIpfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtpZCo9XCJDb3ZlckxldHRlclwiXScpfHxBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsYWJlbFwiKSkuZmluZChlPT5aKGUpKXx8bnVsbH1mdW5jdGlvbiBldChlKXtsZXQgdD1lPy5jbG9zZXN0KFwiLmZvcm0tZ3JvdXAsIC5vYi5mb3JtLWdyb3VwLCBbY2xhc3MqPSdmb3JtLWdyb3VwJ11cIik7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZXMuQ292ZXJMZXR0ZXJcIil8fHQ/LnF1ZXJ5U2VsZWN0b3IoJ1tpZD1cImZpbGVzLkNvdmVyTGV0dGVyXCJdLCBbaWQqPVwiQ292ZXJMZXR0ZXJcIl0sIC5maWxlLWZpZWxkLWlucHV0Jyl8fG51bGx9ZnVuY3Rpb24gZXIoZSl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2RhdGEtdGVzdGlkPVwiY292ZXJfbGV0dGVyXCJdIGlucHV0W3R5cGU9XCJmaWxlXCJdJyl8fGU/LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyl8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdW25hbWUqPVwiQ292ZXJMZXR0ZXJcIiBpXSwgaW5wdXRbdHlwZT1cImZpbGVcIl1baWQqPVwiQ292ZXJMZXR0ZXJcIiBpXSwgaW5wdXRbdHlwZT1cImZpbGVcIl1bbmFtZSo9XCJjb3Zlcl9sZXR0ZXJcIiBpXSwgaW5wdXRbdHlwZT1cImZpbGVcIl1baWQqPVwiY292ZXJfbGV0dGVyXCIgaV0nKX1mdW5jdGlvbiBlbigpe3JldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmR6LWhpZGRlbi1pbnB1dFt0eXBlPVwiZmlsZVwiXScpKX1mdW5jdGlvbiBlbygpe2xldCBlPWVlKCksdD1ldChlKSxyPWU/LmNsb3Nlc3QoXCIuZm9ybS1ncm91cCwgLm9iLmZvcm0tZ3JvdXAsIFtjbGFzcyo9J2Zvcm0tZ3JvdXAnXVwiKSxuPXQ/LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcHpvbmVcIil8fHQ/LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsZXBpY2tlclwiKXx8cj8ucXVlcnlTZWxlY3RvcihcIi5kcm9wem9uZVwiKXx8cj8ucXVlcnlTZWxlY3RvcihcIi5maWxlcGlja2VyXCIpLG89ZXIodCksaT1lbigpLGE9ISEoZXx8dHx8bik7cmV0dXJue2xhYmVsOmUsY29udGFpbmVyOnQsZHJvcHpvbmU6bixpbnB1dDpvfHwoYT9pWzBdPz9udWxsOm51bGwpLGhpZGRlbklucHV0czppfX1mdW5jdGlvbiBlaSgpe2xldCBlPWVvKCk7cmV0dXJuISEoZS5sYWJlbHx8ZS5jb250YWluZXJ8fGUuZHJvcHpvbmV8fGUuaW5wdXQpfWFzeW5jIGZ1bmN0aW9uIGVhKCl7cmV0dXJuIGF3YWl0ICgwLGwud2FpdEZvckNvbmRpdGlvbikoKCk9PmVpKCkse3RpbWVvdXQ6M2UzLGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KX1hc3luYyBmdW5jdGlvbiBlbCgpe2xldCBlPWVvKCk7aWYoZS5pbnB1dClyZXR1cm4gZS5pbnB1dDtpZighZS5kcm9wem9uZSlyZXR1cm4gbnVsbDtsZXQgdD1uZXcgU2V0KGUuaGlkZGVuSW5wdXRzKTtlLmRyb3B6b25lLmNsaWNrKCk7bGV0IHI9YXdhaXQgKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCBlPWVvKCkscj1lLmhpZGRlbklucHV0cy5maW5kKGU9PiF0LmhhcyhlKSk7cmV0dXJuISEoZS5pbnB1dHx8cil9LHt0aW1lb3V0OjE1MDAsaW50ZXJ2YWw6NTAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSk7aWYoIXIpcmV0dXJuIG51bGw7bGV0IG49ZW8oKSxvPW4uaGlkZGVuSW5wdXRzLmZpbmQoZT0+IXQuaGFzKGUpKTtyZXR1cm4gbi5pbnB1dHx8b3x8bi5oaWRkZW5JbnB1dHNbMF18fG51bGx9YXN5bmMgZnVuY3Rpb24gZXMoZSx0LHIpe2xldCBuPWF3YWl0IGVsKCk7biYmYXdhaXQgKDAsYS51cGxvYWRGaWxlcykobixhd2FpdCAoMCxpLmZldGNoQ292ZXJMZXR0ZXJQZGZBc0Jsb2IpKGUpLHQscixcIkNvdmVyIExldHRlclwiKX1hc3luYyBmdW5jdGlvbiBldSgpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2RhdGEtdGVzdGlkPVwicmVzdW1lXCJdJyk7aWYoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZXN0aWQ9XCJjaGlwXCJdJyk7aWYodCl7bGV0IGU9dC5xdWVyeVNlbGVjdG9yKCdkaXZbcm9sZT1cImJ1dHRvblwiXVthcmlhLWxhYmVsbGVkYnkqPVwicHJlZml4XCJdJyk7aWYoZSl7ZS5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCk7cmV0dXJufX19bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbaWQqPVwiUmVzdW1lXCJdJyk7aWYodCl7bGV0IGU9dC5jbG9zZXN0KFwiLmZvcm0tZ3JvdXAsIC5vYi5mb3JtLWdyb3VwLCBbY2xhc3MqPSdmb3JtLWdyb3VwJ11cIik7aWYoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiYS5kei1yZW1vdmVbZGF0YS1kei1yZW1vdmVdXCIpO2lmKHQpe3QuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApO3JldHVybn19fWxldCByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLmR6LXJlbW92ZVtkYXRhLWR6LXJlbW92ZV1cIik7aWYocil7bGV0IGU9ci5jbG9zZXN0KCdkaXZbaWQqPVwiUmVzdW1lXCJdLCBkaXZbY2xhc3MqPVwiZmlsZVwiXSwgZGl2W2NsYXNzKj1cImRyb3B6b25lXCJdJyk7aWYoZSl7ci5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCk7cmV0dXJufX1jb25zb2xlLndhcm4oXCJbcmVtb3ZlUmVzdW1lXSBSZXN1bWUgcmVtb3ZlIGJ1dHRvbiBub3QgZm91bmQgaW4gYW55IHN0cnVjdHVyZVwiKX1hc3luYyBmdW5jdGlvbiBlYyhlLHQpe2lmKCFlKXJldHVybjtsZXQgcj1cImRhdGVcIj09PWUudHlwZXx8ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJyZWFjdC1kYXRlcGlja2VyLWlnbm9yZS1vbmNsaWNrb3V0c2lkZVwiKXx8bnVsbCE9PWUuY2xvc2VzdChcIi5yZWFjdC1kYXRlcGlja2VyLXdyYXBwZXJcIiksbj1lLm5hbWV8fFwiXCIsbz1lLmlkfHxcIlwiLGk9ZS5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKXx8XCJcIixhPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIixsPWkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImRhdGVcIil8fGEudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImRhdGVcIil8fG4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImRhdGVcIil8fG8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImRhdGVcIil8fG4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInN0X2RhdGVcIil8fG4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImVuZF9kYXRlXCIpfHxuLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJzdGFydF9kYXRlXCIpfHxvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJzdF9kYXRlXCIpfHxvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJlbmRfZGF0ZVwiKXx8by50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic3RhcnRfZGF0ZVwiKSxzPSExLHU9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIikmJmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpfHxcIlwiKXx8ZS5pZCYmZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApfHxlLmNsb3Nlc3QoXCJsYWJlbFwiKTtpZih1KXtsZXQgcj0odS50ZXh0Q29udGVudHx8XCJcIikudG9Mb3dlckNhc2UoKS50cmltKCk7aWYoci5pbmNsdWRlcyhcInN0YXJ0XCIpfHxyLmluY2x1ZGVzKFwiZW5kXCIpKXtsZXQgcj10Lm1hdGNoKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLyl8fHQubWF0Y2goL15cXGR7NH0tXFxkezJ9JC8pfHx0Lm1hdGNoKC9eXFxkezJ9XFwvXFxkezJ9XFwvXFxkezR9JC8pLG49bnVsbCE9PWUuY2xvc2VzdChcIi5yZWFjdC1kYXRlcGlja2VyLXdyYXBwZXJcIik7KHJ8fG4pJiYocz0hMCl9fWxldCBkPXQubWF0Y2goL15cXGR7NH0tXFxkezJ9LVxcZHsyfSQvKXx8dC5tYXRjaCgvXlxcZHs0fS1cXGR7Mn0kLyl8fHQubWF0Y2goL15cXGR7Mn1cXC9cXGR7Mn1cXC9cXGR7NH0kLyksZj1udWxsIT09ZS5jbG9zZXN0KFwiLnJlYWN0LWRhdGVwaWNrZXItd3JhcHBlclwiKSxwPShuLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJkYXRlXCIpfHxvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJkYXRlXCIpfHxuLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJzdF9kYXRlXCIpfHxuLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJlbmRfZGF0ZVwiKXx8bi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic3RhcnRfZGF0ZVwiKSkmJmQsbT1yfHxsfHxzfHxwfHxmJiZkO2lmKG18fGYmJmQpe2xldCByPWF3YWl0IEYoZSx0KTtpZihyKXJldHVybn1lLmZvY3VzKCksYXdhaXQgKDAsYy5kZWxheSkoMjApO2xldCBoPWUudmFsdWU7ZS52YWx1ZT10O2xldCBnPU9iamVjdC5nZXRQcm90b3R5cGVPZihlKSxiPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZyxcInZhbHVlXCIpPy5zZXQ7YiYmYi5jYWxsKGUsdCk7bGV0IHk9ZT8uX3ZhbHVlVHJhY2tlcjt5JiZ5LnNldFZhbHVlKGgpO2xldCB2PW5ldyBJbnB1dEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGRhdGE6dCxpbnB1dFR5cGU6XCJpbnNlcnRUZXh0XCJ9KTtlLmRpc3BhdGNoRXZlbnQodiksYXdhaXQgKDAsYy5kZWxheSkoMjApLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDUwKTtsZXQgdz1udWxsLFM9MCxFPTI7dz1zZXRJbnRlcnZhbCgoKT0+e1MrKyxlLnZhbHVlIT09dCYmKGUudmFsdWU9dCxiJiZiLmNhbGwoZSx0KSx5JiZ5LnNldFZhbHVlKGgpLGUuZGlzcGF0Y2hFdmVudCh2KSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSksUz49RSYmdyYmY2xlYXJJbnRlcnZhbCh3KX0sNTApLGF3YWl0ICgwLGMuZGVsYXkpKDEwMCksdyYmY2xlYXJJbnRlcnZhbCh3KX1hc3luYyBmdW5jdGlvbiBlZChlLHQpe2xldCByPWUubGFiZWwsbj1BcnJheS5pc0FycmF5KHQpP3Q/LlswXTp0O2lmKCFuKXJldHVybjtpZighZS4kaW5wdXQpdGhyb3cgbmV3IHMuRmlsbEVycm9yKGAoU2VsZWN0KSBDb3VsZCBub3QgZmluZCBzZWxlY3QgZWxlbWVudCBmb3IgbGFiZWw6IFwiJHtyfVwiYCk7aWYoZS4kaW5wdXQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCl7bGV0IHQ9QXJyYXkuZnJvbShlLiRpbnB1dC5vcHRpb25zKSxpPXQubWFwKGU9PmUudGV4dC50cmltKCl8fGUudmFsdWUpLGE9KDAsby5maW5kRXhhY3RDaG9pY2UpKHQsbixlPT5lLnRleHQsZT0+ZS52YWx1ZSk7aWYoYSl7ZS4kaW5wdXQuZm9jdXMoKSxhd2FpdCAoMCxjLmRlbGF5KSg1MCksZS4kaW5wdXQudmFsdWU9YS52YWx1ZTtsZXQgdD1PYmplY3QuZ2V0UHJvdG90eXBlT2YoZS4kaW5wdXQpLHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LFwidmFsdWVcIik/LnNldDtyJiZyLmNhbGwoZS4kaW5wdXQsYS52YWx1ZSksZS4kaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDUwKSxlLiRpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDUwKSxlLiRpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImJsdXJcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApO3JldHVybn10aHJvdyBuZXcgcy5GaWxsRXJyb3IoYChTZWxlY3QpIE5vIG9wdGlvbiBcIiR7bn1cIiBmb3VuZCBmb3IgbGFiZWw6IFwiJHtyfVwiLiBBdmFpbGFibGUgb3B0aW9uczogJHtpLmpvaW4oXCIsIFwiKX1gKX1sZXQgaT1lLiRpbnB1dCxhPWkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiU2VsZWN0XCIpO2lmKGEpdHJ5e2xldCBlPWkucXVlcnlTZWxlY3RvcignaW5wdXRbcm9sZT1cImNvbWJvYm94XCJdLCAuU2VsZWN0LWlucHV0IGlucHV0LCBpbnB1dCcpO2lmKCFlKXRocm93IG5ldyBzLkZpbGxFcnJvcihgKFNlbGVjdCkgQ291bGQgbm90IGZpbmQgaW5wdXQgaW4gUmVhY3QgU2VsZWN0IGZvciBsYWJlbDogXCIke3J9XCJgKTtlLmZvY3VzKCksYXdhaXQgKDAsYy5kZWxheSkoNTApLGUudmFsdWU9XCJcIjtsZXQgdD1PYmplY3QuZ2V0UHJvdG90eXBlT2YoZSksYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsXCJ2YWx1ZVwiKT8uc2V0O2EmJmEuY2FsbChlLFwiXCIpLGUuZGlzcGF0Y2hFdmVudChuZXcgSW5wdXRFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxpbnB1dFR5cGU6XCJkZWxldGVDb250ZW50QmFja3dhcmRcIn0pKSxhd2FpdCAoMCxjLmRlbGF5KSgxMDApLGE/YS5jYWxsKGUsbik6ZS52YWx1ZT1uLGUuZGlzcGF0Y2hFdmVudChuZXcgSW5wdXRFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxkYXRhOm4saW5wdXRUeXBlOlwiaW5zZXJ0VGV4dFwifSkpLGF3YWl0ICgwLGMuZGVsYXkpKDUwKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAsYy5kZWxheSkoMTUwKTtsZXQgbD1udWxsO2ZvcihsZXQgZT0wO2U8MTAmJiEobD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlNlbGVjdC1tZW51LCAuU2VsZWN0LW1lbnUtb3V0ZXJcIikpO2UrKylhd2FpdCAoMCxjLmRlbGF5KSg1MCk7aWYoIWwpdGhyb3cgbmV3IHMuRmlsbEVycm9yKGAoU2VsZWN0KSBEcm9wZG93biBtZW51IGRpZCBub3QgYXBwZWFyIGZvciBsYWJlbDogXCIke3J9XCJgKTthd2FpdCAoMCxjLmRlbGF5KSgxMDApO2xldCB1PUFycmF5LmZyb20obC5xdWVyeVNlbGVjdG9yQWxsKFwiLlNlbGVjdC1vcHRpb25cIikpO2lmKDA9PT11Lmxlbmd0aCl0aHJvdyBuZXcgcy5GaWxsRXJyb3IoYChTZWxlY3QpIE5vIG9wdGlvbnMgZm91bmQgaW4gZHJvcGRvd24gZm9yIGxhYmVsOiBcIiR7cn1cImApO2xldCBkPW51bGw7aWYoIShkPSgwLG8uZmluZEV4YWN0Q2hvaWNlKSh1LG4sZT0+ZS50ZXh0Q29udGVudCl8fG51bGwpKXRocm93IG5ldyBzLkZpbGxFcnJvcihgKFNlbGVjdCkgTm8gZXhhY3Qgb3B0aW9uIGZvdW5kIGZvciBcIiR7bn1cImApO2Quc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwibmVhcmVzdFwiLGJlaGF2aW9yOlwiYXV0b1wifSksYXdhaXQgKDAsYy5kZWxheSkoNTApLGQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZW50ZXJcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDIwKSxkLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZW92ZXJcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDIwKSxkLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZWRvd25cIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDIwKSxkLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxhd2FpdCAoMCxjLmRlbGF5KSgyMCksZC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDE1MCk7bGV0IGY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TZWxlY3QtbWVudSwgLlNlbGVjdC1tZW51LW91dGVyXCIpO2YmJmNvbnNvbGUud2FybihcIltmaWxsU2VsZWN0RmllbGRdIE1lbnUgaXMgc3RpbGwgb3BlbiBhZnRlciBjbGlja2luZyBvcHRpb25cIiksaS5xdWVyeVNlbGVjdG9yKFwiLlNlbGVjdC12YWx1ZVwiKSxpLnF1ZXJ5U2VsZWN0b3IoXCIuU2VsZWN0LXBsYWNlaG9sZGVyXCIpO3JldHVybn1jYXRjaChlKXt0aHJvdyBjb25zb2xlLmVycm9yKFwiW2ZpbGxTZWxlY3RGaWVsZF0gUmVhY3QgU2VsZWN0IGVycm9yOlwiLGUpLGV9bGV0IGw9aS5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImNvbWJvYm94XCJdJyk7aWYoIWwpdGhyb3cgbmV3IHMuRmlsbEVycm9yKGAoU2VsZWN0KSBDb3VsZCBub3QgZmluZCBjb21ib2JveCBmb3IgbGFiZWw6IFwiJHtyfVwiYCk7dHJ5e2xldCBlO2xldCB0PWw7aWYodC5mb2N1cygpLGF3YWl0ICgwLGMuZGVsYXkpKDUwKSxcIklOUFVUXCI9PT10LnRhZ05hbWUpe3QudmFsdWU9XCJcIjtsZXQgZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCkscj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsXCJ2YWx1ZVwiKT8uc2V0O3ImJnIuY2FsbCh0LFwiXCIpLHQuZGlzcGF0Y2hFdmVudChuZXcgSW5wdXRFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxpbnB1dFR5cGU6XCJkZWxldGVDb250ZW50QmFja3dhcmRcIn0pKSxhd2FpdCAoMCxjLmRlbGF5KSg1MCkscj9yLmNhbGwodCxuKTp0LnZhbHVlPW4sdC5kaXNwYXRjaEV2ZW50KG5ldyBJbnB1dEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGRhdGE6bixpbnB1dFR5cGU6XCJpbnNlcnRUZXh0XCJ9KSksYXdhaXQgKDAsYy5kZWxheSkoNTApLHQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCxjLmRlbGF5KSgxMDApLHQuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIix7a2V5OlwiQXJyb3dEb3duXCIsY29kZTpcIkFycm93RG93blwiLGtleUNvZGU6NDAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDUwKX1sZXQgYT1udWxsO2ZvcihsZXQgZT0wO2U8MTA7ZSsrKXtsZXQgZT1sLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik7aWYoZSYmKGE9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSkpLGF8fChhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsW3JvbGU9XCJsaXN0Ym94XCJdJykpLGEpYnJlYWs7YXdhaXQgKDAsYy5kZWxheSkoNTApfWlmKCFhKXtsLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMTAwKTtmb3IobGV0IGU9MDtlPDU7ZSsrKXtsZXQgZT1sLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik7aWYoZSYmKGE9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSkpLGF8fChhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsW3JvbGU9XCJsaXN0Ym94XCJdJykpLGEpYnJlYWs7YXdhaXQgKDAsYy5kZWxheSkoNTApfX1pZighYSl7bGV0IGU9aS5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZXN0aWQ9XCJzZWxlY3QtY29udHJvbGxlclwiXScpO2lmKGUpe2UuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgxMDApO2ZvcihsZXQgZT0wO2U8NTtlKyspe2xldCBlPWwuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKTtpZihlJiYoYT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKSksYXx8KGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWxbcm9sZT1cImxpc3Rib3hcIl0nKSksYSlicmVhazthd2FpdCAoMCxjLmRlbGF5KSg1MCl9fX1pZighYSl0aHJvdyBjb25zb2xlLmVycm9yKFwiW2ZpbGxTZWxlY3RGaWVsZF0gRmFpbGVkIHRvIG9wZW4gZHJvcGRvd24gbWVudVwiLHtsYWJlbDpyLHZhbHVlOm4sY29tYm9ib3hJZDpsLmlkLGFyaWFDb250cm9sczpsLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiksYXJpYUV4cGFuZGVkOmwuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKX0pLG5ldyBzLkZpbGxFcnJvcihgKFNlbGVjdCkgRHJvcGRvd24gbWVudSBkaWQgbm90IGFwcGVhciBmb3IgbGFiZWw6IFwiJHtyfVwiYCk7YXdhaXQgKDAsYy5kZWxheSkoMTAwKTtsZXQgdT1BcnJheS5mcm9tKGEucXVlcnlTZWxlY3RvckFsbCgnbGlbcm9sZT1cIm9wdGlvblwiXScpKTtpZigwPT09dS5sZW5ndGgpdGhyb3cgbmV3IHMuRmlsbEVycm9yKGAoU2VsZWN0KSBObyBvcHRpb25zIGZvdW5kIGluIGRyb3Bkb3duIGZvciBsYWJlbDogXCIke3J9XCJgKTtpZighKGU9KDAsby5maW5kRXhhY3RDaG9pY2UpKHUsbixlPT5lLnRleHRDb250ZW50KXx8bnVsbCkpdGhyb3cgbmV3IHMuRmlsbEVycm9yKGAoU2VsZWN0KSBObyBleGFjdCBvcHRpb24gZm91bmQgZm9yIFwiJHtufVwiYCk7ZS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJuZWFyZXN0XCIsYmVoYXZpb3I6XCJhdXRvXCJ9KSxhd2FpdCAoMCxjLmRlbGF5KSg1MCksZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2VlbnRlclwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksYXdhaXQgKDAsYy5kZWxheSkoMjApLGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlb3ZlclwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksYXdhaXQgKDAsYy5kZWxheSkoMjApLGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksYXdhaXQgKDAsYy5kZWxheSkoMjApLGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDIwKSxlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksYXdhaXQgKDAsYy5kZWxheSkoMTUwKTtsZXQgZD1cInRydWVcIj09PWwuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKTtkJiZjb25zb2xlLndhcm4oXCJbZmlsbFNlbGVjdEZpZWxkXSBDb21ib2JveCBpcyBzdGlsbCBleHBhbmRlZCBhZnRlciBjbGlja2luZyBvcHRpb25cIiksbC52YWx1ZX1jYXRjaChlKXtjb25zb2xlLmVycm9yKFwiW2ZpbGxTZWxlY3RGaWVsZF0gQ29tYm9ib3ggc2VsZWN0IGVycm9yOlwiLGUpO3RyeXtkb2N1bWVudC5ib2R5LmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMTAwKX1jYXRjaChlKXt9dGhyb3cgZX19ZnVuY3Rpb24gZWYoZSl7bGV0IHQ9ZS5sYWJlbHM/LlswXXx8ZS5jbG9zZXN0KFwibGFiZWxcIik7cmV0dXJuIHQ/LnRleHRDb250ZW50Py50cmltKCl8fGUubmV4dEVsZW1lbnRTaWJsaW5nPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifWFzeW5jIGZ1bmN0aW9uIGVwKGUsdCl7bGV0IHI9ZS5sYWJlbCxuPXQ/LlswXTtpZighbilyZXR1cm47bGV0IGk9bnVsbDtpZihlLiRyYWRpb1BhcmVudCYmKGk9ZS4kcmFkaW9QYXJlbnQpLCFpKXtsZXQgZT1gLy8qW2NvbnRhaW5zKHRleHQoKSwgJHsoMCx1LmVzY2FwZVhQYXRoKShyKX0pXS9wYXJlbnQ6OmRpdi9wYXJlbnQ6OmRpdiB8IC8vKltjb250YWlucyh0ZXh0KCksICR7KDAsdS5lc2NhcGVYUGF0aCkocil9KV0vcGFyZW50OjpkaXYvcGFyZW50OjpsaWA7aT0oMCx1LmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShlKX1pZighaSl0aHJvdyBuZXcgcy5GaWxsRXJyb3IoYChSYWRpbykgQ291bGQgbm90IGZpbmQgY29udGFpbmVyIGZvciBsYWJlbDogXCIke3J9XCJgKTtsZXQgYT0oMCxvLmZpbmRFeGFjdENob2ljZSkoKDAsdS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2lucHV0W0B0eXBlPSdyYWRpbyddXCIsaSksbixlZixlPT5lLnZhbHVlKTtpZihhKXthLmNoZWNrZWR8fChhLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoNTAwKSk7cmV0dXJufWxldCBsPWBcclxuICAgIC4vLypbQHJvbGU9J3JhZGlvJ11bXHJcbiAgICAgIEBhcmlhLWxhYmVsPSR7KDAsdS5lc2NhcGVYUGF0aCkobil9IG9yXHJcbiAgICAgIEBkYXRhLXZhbHVlPSR7KDAsdS5lc2NhcGVYUGF0aCkobil9IG9yXHJcbiAgICAgIG5vcm1hbGl6ZS1zcGFjZSgpPSR7KDAsdS5lc2NhcGVYUGF0aCkobil9IG9yXHJcbiAgICAgIC4vLypbbm9ybWFsaXplLXNwYWNlKCk9JHsoMCx1LmVzY2FwZVhQYXRoKShuKX1dXHJcbiAgICBdXHJcbiAgYCxkPSgwLHUuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKGwsaSk7aWYoZCl7XCJ0cnVlXCIhPT1kLmdldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiKSYmKGQuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSg1MDApKTtyZXR1cm59dGhyb3cgbmV3IHMuRmlsbEVycm9yKGAoUmFkaW8pIE5vIG9wdGlvbiBcIiR7bn1cIiBmb3VuZCBmb3IgbGFiZWw6IFwiJHtyfVwiYCl9YXN5bmMgZnVuY3Rpb24gZW0oZSx0KXtsZXQgcj1lLmxhYmVsO2lmKGUuJGNoZWNrYm94cyYmZS4kY2hlY2tib3hzLmxlbmd0aD4wKXtmb3IobGV0IG4gb2YgdCl7bGV0IHQ9bnVsbCxvPW51bGwsaT1lLiRjaGVja2JveHM7Zm9yKGxldCBlIG9mIGkpe2lmKGUudmFsdWU9PT1uKXt0PWUsbz1lLmNsb3Nlc3QoJ1tyb2xlPVwiY2hlY2tib3hcIl0nKTticmVha31sZXQgcj1lLmNsb3Nlc3QoJ1tyb2xlPVwiY2hlY2tib3hcIl0nKTtpZihyKXtsZXQgaT1yLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7aWYoaT09PW4pe3Q9ZSxvPXI7YnJlYWt9bGV0IGE9ci5xdWVyeVNlbGVjdG9yKCdbaWQqPVwibGFiZWwtXCJdIHAuY3NzLXYyc3pjNSwgW2lkKj1cImxhYmVsLVwiXScpO2lmKGEmJmEudGV4dENvbnRlbnQ/LnRyaW0oKT09PW4pe3Q9ZSxvPXI7YnJlYWt9fX10JiZvP3QuY2hlY2tlZHx8KG8uY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApLHQuY2hlY2tlZHx8KHQuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApKSk6Y29uc29sZS53YXJuKGBbZmlsbENoZWNrYm94RmllbGRdIE5vIG1hdGNoaW5nIGNoZWNrYm94IGZvdW5kIGZvciB2YWx1ZTogXCIke259XCIgaW4gbGFiZWw6IFwiJHtyfVwiYCl9cmV0dXJufWxldCBuPWUuJHJhZGlvUGFyZW50fHxudWxsO2lmKCFuKXtsZXQgZT1gLy8qW2NvbnRhaW5zKHRleHQoKSwgJHsoMCx1LmVzY2FwZVhQYXRoKShyKX0pXS9wYXJlbnQ6OmRpdi9wYXJlbnQ6OmRpdiB8IC8vKltjb250YWlucyh0ZXh0KCksICR7KDAsdS5lc2NhcGVYUGF0aCkocil9KV0vcGFyZW50OjpkaXYvcGFyZW50OjpsaWA7bj0oMCx1LmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShlKX1pZighbil7Y29uc29sZS53YXJuKGBbZmlsbENoZWNrYm94RmllbGRdIENvdWxkIG5vdCBmaW5kIGNvbnRhaW5lciBmb3IgbGFiZWw6IFwiJHtyfVwiYCk7cmV0dXJufWZvcihsZXQgZSBvZiB0KXtsZXQgdD0oMCx1LmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShgLi8vKltAcm9sZT1cImNoZWNrYm94XCJdW0BkYXRhLXZhbHVlPSR7KDAsdS5lc2NhcGVYUGF0aCkoZSl9XWAsbik7aWYodCl7bGV0IGU9dC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTshZXx8ZS5jaGVja2VkfHwodC5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCksZS5jaGVja2VkfHwoZS5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCkpKTtjb250aW51ZX1sZXQgaT0oMCxvLmZpbmRFeGFjdENob2ljZSkoKDAsdS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2lucHV0W0B0eXBlPSdjaGVja2JveCddXCIsbiksZSxlZixlPT5lLnZhbHVlKTtpZihpKXtsZXQgZT1pLmNsb3Nlc3QoJ1tyb2xlPVwiY2hlY2tib3hcIl0nKTtlP2kuY2hlY2tlZHx8KGUuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApLGkuY2hlY2tlZHx8KGkuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApKSk6aS5jaGVja2VkfHwoaS5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCkpfWVsc2UgY29uc29sZS53YXJuKGBbZmlsbENoZWNrYm94RmllbGRdIE5vIG9wdGlvbiBcIiR7ZX1cIiBmb3VuZCBmb3IgbGFiZWw6IFwiJHtyfVwiYCl9fWFzeW5jIGZ1bmN0aW9uIGVoKGUsdCl7bGV0IHI9ZS4kaW5wdXQsbj1TdHJpbmcodD8/XCJcIikudHJpbSgpO2lmKCFuKXRocm93IG5ldyBzLkZpbGxFcnJvcihcIihTZWFyY2gpIExvY2F0aW9uIHZhbHVlIGlzIGVtcHR5XCIpO2lmKCEociBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKXJldHVybiBlYyhyLG4pO3RyeXtyLmZvY3VzKHtwcmV2ZW50U2Nyb2xsOiEwfSl9Y2F0Y2h7ci5mb2N1cygpfWF3YWl0ICgwLGMuZGVsYXkpKDMwKSxhd2FpdCBXKHIpLGF3YWl0IFAocixuKSxhd2FpdCAoMCxjLmRlbGF5KSgzMDApO2xldCBvPW51bGwsaT0oKT0+e2xldCBlPU8ociksdD1lP0FycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKCdsaVtyb2xlPVwib3B0aW9uXCJdJykpOltdO3JldHVybiEhKG89UihuLHQpKX07aWYoaSgpfHxhd2FpdCAoMCxsLndhaXRGb3JDb25kaXRpb24pKGkse3RpbWVvdXQ6MTYwMCxpbnRlcnZhbDo4MCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KSwhbyl0aHJvdyBNKHIpLG5ldyBzLkZpbGxFcnJvcihgKFNlYXJjaCkgQ291bGQgbm90IGZpbmQgZXhhY3QgTG9jYXRpb24gb3B0aW9uIGZvciBcIiR7bn1cImApO28uc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwibmVhcmVzdFwiLGJlaGF2aW9yOlwiYXV0b1wifSksYXdhaXQgKDAsYy5kZWxheSkoNTApLGF3YWl0IFcobyksYXdhaXQgKDAsYy5kZWxheSkoMjAwKTtsZXQgYT1OKHIpLHU9YXdhaXQgKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCBlPUwoci52YWx1ZSk9PT1MKG4pLHQ9IWF8fCEhYS52YWx1ZS50cmltKCk7cmV0dXJuIGUmJnQmJiFPKHIpfSx7dGltZW91dDoxMjAwLGludGVydmFsOjUwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pO2lmKCF1KXRocm93IE0ociksbmV3IHMuRmlsbEVycm9yKGAoU2VhcmNoKSBMb2NhdGlvbiBvcHRpb24gZGlkIG5vdCBjb21taXQgZm9yIFwiJHtufVwiYCl9XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJvcGVyYXRpb25zLjA4M2UzYzY5LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);