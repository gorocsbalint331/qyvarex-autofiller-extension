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
})({"a6JmM":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\oraclecloud\\operations.js",
    "bundleId": "a06f386a54f69cb4",
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
var j = z(require("7112458bc5c72088"));
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

},{"7112458bc5c72088":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"kLBFo":[function(require,module,exports) {
/**
 * Parcel module id: gduo7
 * Resolved path: src/contents/sites/oraclecloud/operations.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/sites/oraclecloud/answer -> 9Ki4d  =>  src/contents/sites/oraclecloud/answer.js
 *   ~contents/sites/oraclecloud/education-client-search -> 883w6  =>  src/contents/sites/oraclecloud/education-client-search.js
 *   ~contents/sites/oraclecloud/education-lov-candidates -> aWY8j  =>  src/contents/sites/oraclecloud/education-lov-candidates.js
 *   ~contents/sites/oraclecloud/url -> 7oftP  =>  src/contents/sites/oraclecloud/url.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/date -> 3fOSF  =>  src/utils/date.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "cleanEduAndExp", ()=>h), n.export(r, "ensureOracleLinkRows", ()=>I), n.export(r, "fillSelectField", ()=>et), n.export(r, "fillCheckBoxesField", ()=>eX), n.export(r, "fillListboxField", ()=>eJ), n.export(r, "fillRadioGroupField", ()=>eQ), n.export(r, "fillDateField", ()=>eZ), n.export(r, "saveEducation", ()=>e1), n.export(r, "cancelEducation", ()=>e3), n.export(r, "saveExperience", ()=>e4), n.export(r, "cancelExperience", ()=>e5), n.export(r, "addEducation", ()=>e8), n.export(r, "addExperience", ()=>e9), n.export(r, "fillSkills", ()=>tm), n.export(r, "fillLanguages", ()=>tE), n.export(r, "uploadResume", ()=>tx), n.export(r, "hasOracleCoverLetterSlot", ()=>tP), n.export(r, "uploadCoverLetter", ()=>tO), n.export(r, "findOracleCoverLetterInput", ()=>tM), n.export(r, "fillCountry", ()=>tN), n.export(r, "proceedOracleJobDetailToApply", ()=>tU), n.export(r, "proceedOracleEmailGateStep", ()=>tH);
var o = e("@plasmohq/messaging"), i = e("~contents/methods/answer"), a = e("~contents/methods/dom"), l = e("~contents/methods/observer"), s = e("~contents/sites/oraclecloud/answer"), u = e("~contents/sites/oraclecloud/url"), c = e("~contents/sites/oraclecloud/education-client-search"), d = e("~contents/sites/oraclecloud/education-lov-candidates"), f = e("~core/xpath"), p = e("~utils/date"), m = e("~utils/delay");
async function h() {
    let e1 = async ()=>{
        let e1 = (0, f.getFirstOrderedNode)(`//div[@role='dialog' or contains(@class,'app-dialog') or contains(@class,'oj-dialog')]
          //button[
            normalize-space()='Delete'
            or normalize-space()='DELETE'
            or @data-qa='confirmDelete'
            or @data-qa='confirmDeleteButton'
          ]`) || null;
        e1 && ((0, a.triggerEvents)(e1, [
            "click"
        ]), await (0, m.delay)(200));
    }, t = async (t)=>{
        let r1 = Date.now() + 6e4;
        for(; Date.now() < r1;){
            let r1 = (0, f.getOrderedNodes)(".//article[contains(@class, 'apply-flow-profile-item-tile')]", t);
            if (0 === r1.length) break;
            let n = r1.length, o = r1[0];
            o.dispatchEvent(new MouseEvent("mouseover", {
                bubbles: !0,
                cancelable: !0,
                view: window
            })), await (0, m.delay)(50);
            let i = (0, f.getFirstOrderedNode)(".//button[contains(@class, 'apply-flow-profile-item-tile__delete-icon')]", o) || null;
            if (!i) break;
            (0, a.triggerEvents)(i, [
                "click"
            ]), await (0, m.delay)(150), await e1();
            let l = !1;
            for(let e1 = 0; e1 < 10; e1++){
                await (0, m.delay)(150);
                let e1 = (0, f.getOrderedNodes)(".//article[contains(@class, 'apply-flow-profile-item-tile')]", t);
                if (e1.length < n) {
                    l = !0;
                    break;
                }
            }
            if (!l) {
                console.warn("Failed to delete profile item tile within retries; stop cleanup early to avoid blocking autofill.");
                break;
            }
        }
    }, r1 = (0, f.getFirstOrderedNode)('//div[@role="region" and (contains(@aria-label, "Experience") or contains(@aria-label, "Employment"))] | .//timeline-form-builder[@class="timeline-form-dialog__content"] | //div[contains(@class, "apply-flow-block--work-and-education-timeline")]') || null;
    r1 && await t(r1);
    let n = (0, f.getFirstOrderedNode)("//div[@role='region' and contains(@aria-label, 'Education')] | .//timeline-form-builder[@class='timeline-form-dialog__content'] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]") || null;
    n && await t(n);
    let o = document.getElementsByClassName("beautiful-timeline-item");
    for(; o.length > 0;){
        let e1 = o[0];
        e1?.dispatchEvent(new MouseEvent("mouseover", {
            bubbles: !0,
            cancelable: !0,
            view: window
        })), await (0, m.delay)(50), e1?.getElementsByClassName("beautiful-timeline-item__delete-icon")[0]?.dispatchEvent(new MouseEvent("click")), await (0, m.delay)(50);
    }
}
function g(e1, t = {}) {
    let r1 = "undefined" != typeof document && "function" == typeof document.getElementById && e1.id ? document.getElementById(`${e1.id}-toggle-button`) : null, n = e1.getAttribute("aria-controls") || r1?.getAttribute("aria-controls") || (e1.id ? `${e1.id}-listbox` : ""), o = "undefined" != typeof document && "function" == typeof document.getElementById && n ? document.getElementById(n) : null, i = o ? Array.from(o.querySelectorAll('[aria-selected="true"], .cx-select__list-item--selected')).map((e1)=>e1.textContent?.replace(/\s+/g, " ").trim()).filter(Boolean).slice(0, 5) : [];
    return {
        fieldName: e1.getAttribute("name"),
        id: e1.id,
        role: e1.role,
        value: e1.value,
        ariaExpanded: e1.getAttribute("aria-expanded"),
        ariaControls: e1.getAttribute("aria-controls"),
        ariaInvalid: e1.getAttribute("aria-invalid"),
        toggleExists: !!r1,
        toggleAriaExpanded: r1?.getAttribute("aria-expanded"),
        toggleAriaLabel: r1?.getAttribute("aria-label"),
        listboxExists: !!o,
        listboxAriaBusy: o?.getAttribute("aria-busy"),
        selectedOptions: i,
        className: "string" == typeof e1.className ? e1.className : void 0,
        activeElementId: "undefined" != typeof document && "undefined" != typeof Element && document.activeElement instanceof Element ? document.activeElement.id : void 0,
        ...t
    };
}
function b(e1, t, r1 = {}) {
    if (!v()) return;
    let n = g(t, r1);
    if ((0, s.isOraclePhoneCountryCodeField)(t.id || t.getAttribute("name"))) {
        console.warn(`[OracleCloud][PhoneCountryDebug] ${e1} ${JSON.stringify(n)}`);
        return;
    }
    console.debug(`[OracleCloud][Combobox] ${e1} ${JSON.stringify(n)}`);
}
function y(e1, t = {}) {
    let r1 = e1.startsWith("education-client-search:") || e1.startsWith("education-major-text:");
    if (v() || r1) try {
        console.info(`[OracleCloud][Flow] ${e1} ${JSON.stringify({
            t: Date.now(),
            ...t
        })}`);
    } catch  {}
}
function v() {
    if ("undefined" == typeof window) return !1;
    try {
        let e1 = new URLSearchParams(window.location?.search ?? "");
        return "1" === e1.get("jobright_oraclecloud_combobox_debug") || window.localStorage?.getItem("jobright_oraclecloud_combobox_debug") === "1";
    } catch  {
        return !1;
    }
}
function w(e1) {
    return [
        "startdate",
        "enddate"
    ].includes(String(e1 ?? "").replace(/[^a-zA-Z]/g, "").toLowerCase());
}
function S(e1, t, r1 = {}) {
    if (v() && w(t)) try {
        console.warn(`[OracleCloud][TimelineDate] ${e1} ${JSON.stringify({
            t: Date.now(),
            fieldName: t,
            ...r1
        })}`);
    } catch  {}
}
_c = S;
function E(e1) {
    return e1.map((e1)=>e1.textContent?.trim());
}
_c1 = E;
function x(e1) {
    let t = new Map;
    for (let r1 of e1){
        let e1 = r1.closest?.("[role='option']") || r1.closest?.("[role='row']") || r1, n = t.get(e1);
        (!n || C(r1) > C(n)) && t.set(e1, r1);
    }
    return [
        ...t.values()
    ];
}
function C(e1) {
    let t = "string" == typeof e1.className ? e1.className : "";
    return e1.classList?.contains("cx-select__list-item--content") || t.split(/\s+/).includes("cx-select__list-item--content") ? 3 : e1.closest?.("[role='gridcell']") === e1 ? 2 : 1;
}
_c2 = C;
let A = `//apply-flow-block[
  .//*[contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'supporting documents and urls')]
]//div[contains(@class, 'input-row')][
  .//label[contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'link')]
]//input[not(@type='hidden') and not(@type='file')]`, k = `//apply-flow-block[
  .//*[contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'supporting documents and urls')]
]//button[
  contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'add another link')
]`;
function T() {
    return (0, f.getOrderedNodes)(A).filter((e1)=>"function" != typeof e1.checkVisibility || e1.checkVisibility());
}
_c3 = T;
function F() {
    return (0, f.getFirstOrderedNode)(k);
}
_c4 = F;
async function I(e1) {
    if (!(e1 <= 1)) for(; T().length < e1;){
        let e1 = T().length, t = F();
        if (!t || ((0, a.triggerEvents)(t, [
            "click"
        ]), await (0, l.waitForCondition)(()=>T().length > e1, {
            timeout: 3e3,
            interval: 100,
            observeTarget: document.body
        }), T().length <= e1)) return;
    }
}
_c5 = I;
function j(e1) {
    return String(e1 ?? "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}
function D(e1) {
    let t = j(e1);
    return "school" === t || "schoolname" === t || t.includes("educationalestablishment");
}
_c6 = D;
function P(e1) {
    return "major" === j(e1);
}
_c7 = P;
function _(e1) {
    let t = j(e1);
    return "degree" === t || t.includes("degree");
}
function L(e1) {
    let t = eA(e1.textContent).replace(/[.!]+$/g, "");
    return "no results" === t || "no results found" === t || "no results were found" === t;
}
_c8 = L;
function R(e1) {
    let t = eA(e1.textContent).replace(/[.!]+$/g, "");
    return "no results" === t || /^no results(?: were)? found\b/.test(t);
}
_c9 = R;
function O(e1) {
    return P(e1) ? "major" : D(e1) ? "school" : null;
}
_c10 = O;
let M = `.//div[@role='row']//div[@role='gridcell']//span[contains(@class,'cx-select__list-item--content')]
  | .//div[@role='row']//div[@role='gridcell'][normalize-space()]
  | .//*[@role='option'][normalize-space()]`;
function N(e1) {
    return String(e1 ?? "").replace(/\s+/g, " ").trim();
}
_c11 = N;
function $(e1) {
    if ("true" === e1.getAttribute("aria-hidden")) return !1;
    if ("function" != typeof e1.checkVisibility) return !0;
    try {
        return e1.checkVisibility({
            checkOpacity: !0,
            checkVisibilityCSS: !0
        });
    } catch  {
        return e1.checkVisibility();
    }
}
function B(e1) {
    let t = new Set, r1 = [], n = x((0, f.getOrderedNodes)(M, e1)), o = 0, i = 0, a = 0;
    for (let e1 of n){
        if (!$(e1)) {
            o += 1;
            continue;
        }
        if (L(e1)) {
            i += 1;
            continue;
        }
        let n = N(e1.textContent);
        if (!n) {
            a += 1;
            continue;
        }
        let l = n.normalize("NFKC").toLowerCase();
        t.has(l) || (t.add(l), r1.push({
            element: e1,
            text: n
        }));
    }
    return {
        candidates: r1.slice(0, 25),
        rawOptionCount: n.length,
        hiddenOptionCount: o,
        noResultOptionCount: i,
        invalidOptionCount: a
    };
}
_c12 = B;
function q(e1) {
    return B(e1).candidates;
}
function U(e1) {
    return e1.map((e1)=>e1.text).join("\x01");
}
_c13 = U;
function H(e1) {
    return "function" == typeof e1.getAttribute ? e1.getAttribute("aria-busy") : null;
}
_c14 = H;
function Y(e1) {
    return "function" == typeof e1.getAttribute ? e1.getAttribute("role") : null;
}
_c15 = Y;
async function z(e1) {
    let t = "undefined" != typeof document && "function" == typeof document.getElementById && e1.id ? document.getElementById(`${e1.id}-toggle-button`) : null, r1 = e1.getAttribute("aria-controls") || t?.getAttribute("aria-controls") || (e1.id ? `${e1.id}-listbox` : "");
    return r1 ? await eU(`//*[@id="${r1}"]`, 100, 6) : null;
}
async function V(e1, t) {
    try {
        let r1 = await (0, o.sendToBackground)({
            name: "prepareOracleEducationLovCapture",
            body: {
                fieldType: e1,
                searchInput: t
            }
        }), n = String(r1?.captureId ?? "").trim();
        if (n) return n;
    } catch (r1) {
        y("education-client-search:lov-capture-prepare-error", {
            fieldType: e1,
            searchInputLength: t.length,
            errorType: r1 instanceof Error ? r1.name : typeof r1
        });
    }
    return y("education-client-search:lov-capture-prepare", {
        fieldType: e1,
        prepared: !1,
        searchInputLength: t.length
    }), null;
}
_c16 = V;
async function W(e1, t, r1) {
    try {
        let n = await (0, o.sendToBackground)({
            name: "consumeOracleEducationLovCapture",
            body: {
                captureId: e1
            }
        }), i = Array.isArray(n?.items) ? n.items : [], a = n?.fieldType === t, l = "string" == typeof n?.captureStatus ? n.captureStatus : "unknown";
        return y("education-client-search:lov-capture-consume", {
            fieldType: t,
            searchInputLength: r1.length,
            capturedItemCount: i.length,
            captureStatus: l,
            captureDiagnostic: n?.captureDiagnostic,
            matchedFieldType: a
        }), a ? i : [];
    } catch (e1) {
        return y("education-client-search:lov-capture-consume-error", {
            fieldType: t,
            searchInputLength: r1.length,
            errorType: e1 instanceof Error ? e1.name : typeof e1
        }), [];
    }
}
_c17 = W;
function G(e1, t, r1) {
    let n = r1.map(({ text: e1 })=>({
            text: e1
        })), o = (0, d.mapOracleEducationLovCandidates)({
        fieldType: e1,
        lovItems: t,
        visibleCandidates: n
    });
    return y("education-client-search:lov-candidate-map", {
        fieldType: e1,
        ...o.diagnostics
    }), o;
}
_c18 = G;
async function K(e1, t, r1, n) {
    let o;
    let i = N(r1).toLowerCase(), a = n.lastSearchIdentity, l = await V(t, r1);
    y("education-client-search:lov-capture-prepare", {
        fieldType: t,
        prepared: !!l,
        searchInputLength: r1.length
    }), await ei(e1);
    let s = await z(e1);
    if (!s) return n.lastSearchIdentity = i, n.lastSearchInput = r1, n.lastCandidates = [], n.candidatesBySearchIdentity.set(i, []), y("education-client-search:candidate-capture", {
        fieldType: t,
        fieldName: e1.getAttribute("name") || e1.id || "unknown",
        searchInputLength: r1.length,
        modalFound: !1
    }), [];
    let u = B(s), c = u.candidates, d = U(c);
    y("education-client-search:candidate-capture", {
        fieldType: t,
        fieldName: e1.getAttribute("name") || e1.id || "unknown",
        searchInputLength: r1.length,
        modalFound: !0,
        initialCandidateCount: c.length,
        initialRawOptionCount: u.rawOptionCount,
        listboxId: s.id || null,
        initialListboxRole: Y(s),
        initialListboxAriaBusy: H(s)
    }), en(e1, r1);
    let f = l ? W(l, t, r1) : Promise.resolve([]), p = async (e1)=>{
        let r1 = await f;
        return G(t, r1, e1);
    }, h = (e1)=>(n.lastSearchInput = r1, n.lastCandidates = e1, n.candidatesBySearchIdentity.set(i, e1), e1), g = ({ readIndex: e1, snapshotRecovery: n, visibleCandidateCount: o, diagnostics: i })=>{
        y("education-client-search:candidate-map-mismatch", {
            fieldType: t,
            searchInputLength: r1.length,
            readIndex: e1,
            snapshotRecovery: n,
            visibleCandidateCount: o,
            ...i
        });
    }, b = "", v = "";
    for(let l = 0; l < 14; l += 1){
        l > 0 && await (0, m.delay)(250);
        let u = await z(e1);
        u && u !== s && (y("education-client-search:listbox-replaced", {
            fieldType: t,
            searchInputLength: r1.length,
            readIndex: l,
            sameListboxId: u.id === s.id,
            previousListboxRole: Y(s),
            currentListboxRole: Y(u),
            previousListboxConnected: s.isConnected
        }), s = u);
        let c = B(s), f = c.candidates, w = [
            f.length,
            c.rawOptionCount,
            c.hiddenOptionCount,
            c.noResultOptionCount,
            c.invalidOptionCount,
            H(s) || "none"
        ].join(":");
        (0 === l || w !== v) && (y("education-client-search:candidate-poll", {
            fieldType: t,
            searchInputLength: r1.length,
            readIndex: l,
            candidateCount: f.length,
            rawOptionCount: c.rawOptionCount,
            hiddenOptionCount: c.hiddenOptionCount,
            noResultOptionCount: c.noResultOptionCount,
            invalidOptionCount: c.invalidOptionCount,
            listboxId: s.id || null,
            listboxRole: Y(s),
            listboxAriaBusy: H(s)
        }), v = w);
        let S = U(f), E = i !== a;
        if (!E || !d || S !== d) {
            if (f.length > 0 && (o = {
                candidates: f.map((e1)=>({
                        ...e1
                    })),
                readIndex: l
            }), 0 === f.length && o) {
                n.lastSearchIdentity = i;
                let e1 = await p(o.candidates);
                if (0 === e1.candidates.length && e1.diagnostics.lovItemCount > 0) {
                    g({
                        readIndex: l,
                        snapshotRecovery: !0,
                        visibleCandidateCount: o.candidates.length,
                        diagnostics: e1.diagnostics
                    }), b = S;
                    continue;
                }
                let a = h(e1.candidates);
                return y("education-client-search:candidate-read", {
                    fieldType: t,
                    searchInputLength: r1.length,
                    readIndex: l,
                    candidateCount: a.length,
                    visibleCandidateCount: o.candidates.length,
                    noResults: !1,
                    snapshotRecovery: !0,
                    snapshotReadIndex: o.readIndex
                }), a;
            }
            if (0 === f.length && R(s)) {
                n.lastSearchIdentity = i;
                let e1 = await p([]);
                if (0 === e1.candidates.length && e1.diagnostics.lovItemCount > 0) {
                    g({
                        readIndex: l,
                        snapshotRecovery: !1,
                        visibleCandidateCount: 0,
                        diagnostics: e1.diagnostics
                    }), b = S;
                    continue;
                }
                let o = h(e1.candidates);
                return y("education-client-search:candidate-read", {
                    fieldType: t,
                    searchInputLength: r1.length,
                    readIndex: l,
                    candidateCount: o.length,
                    visibleCandidateCount: 0,
                    noResults: !0
                }), o;
            }
            if (S && S === b) {
                n.lastSearchIdentity = i;
                let e1 = await p(f);
                if (0 === e1.candidates.length && e1.diagnostics.lovItemCount > 0) {
                    g({
                        readIndex: l,
                        snapshotRecovery: !1,
                        visibleCandidateCount: f.length,
                        diagnostics: e1.diagnostics
                    });
                    continue;
                }
                let o = h(e1.candidates);
                return y("education-client-search:candidate-read", {
                    fieldType: t,
                    searchInputLength: r1.length,
                    readIndex: l,
                    candidateCount: o.length,
                    visibleCandidateCount: f.length,
                    noResults: !1,
                    settled: !0
                }), o;
            }
            b = S;
        }
    }
    return n.lastSearchIdentity = i, n.lastSearchInput = r1, n.lastCandidates = [], n.candidatesBySearchIdentity.set(i, []), y("education-client-search:candidate-read", {
        fieldType: t,
        searchInputLength: r1.length,
        readIndex: 14,
        candidateCount: 0,
        rawOptionCount: B(s).rawOptionCount,
        listboxId: s.id || null,
        listboxRole: Y(s),
        listboxAriaBusy: H(s),
        noResults: !1,
        settled: !1
    }), [];
}
_c19 = K;
async function X(e1, t, r1, n) {
    let o = N(r1.searchInput).toLowerCase(), i = (n.candidatesBySearchIdentity.get(o) || []).filter((e1)=>e1.value === t.value && e1.text === t.text);
    if (1 !== i.length) return y("education-client-search:commit", {
        candidateTextLength: t.text.length,
        candidateValueLength: t.value.length,
        mappedCandidateCount: i.length,
        selectedSearchInputLength: r1.searchInput.length,
        reason: "candidate-not-in-selected-round"
    }), !1;
    let a = await z(e1), s = a ? q(a).filter((e1)=>e1.text === t.text) : [], u = !a || 1 !== s.length || n.lastSearchIdentity !== o, c = !1;
    if (u) {
        c = !0, y("education-client-search:commit-reopen", {
            candidateTextLength: t.text.length,
            candidateValueLength: t.value.length,
            selectedSearchInputLength: r1.searchInput.length,
            modalFound: !!a,
            visibleMatchingCandidateCount: s.length,
            lastSearchMatchesSelectedRound: n.lastSearchIdentity === o
        }), await ei(e1), en(e1, r1.searchInput);
        let i = "";
        for(let n = 0; n < 14; n += 1){
            if (n > 0 && await (0, m.delay)(250), !(a = await z(e1))) continue;
            let o = q(a);
            s = o.filter((e1)=>e1.text === t.text);
            let l = U(o);
            if (l && l === i && 1 === s.length) {
                y("education-client-search:commit-reopen-ready", {
                    candidateTextLength: t.text.length,
                    selectedSearchInputLength: r1.searchInput.length,
                    readIndex: n,
                    visibleCandidateCount: o.length
                });
                break;
            }
            i = l;
        }
    }
    if (!a || 1 !== s.length) return y("education-client-search:commit", {
        candidateTextLength: t.text.length,
        candidateValueLength: t.value.length,
        selectedSearchInputLength: r1.searchInput.length,
        modalFound: !!a,
        mappedCandidateCount: i.length,
        visibleMatchingCandidateCount: s.length,
        reopened: c
    }), !1;
    await em(s[0].element);
    let d = await (0, l.waitForCondition)(()=>eA(e1.value) === eA(t.text) && !e_(e1) && "true" !== e1.getAttribute("aria-expanded"), {
        timeout: 1e3,
        interval: 100,
        observeTarget: "undefined" != typeof document ? document.body : void 0
    });
    if (!d) return y("education-client-search:commit", {
        candidateTextLength: t.text.length,
        candidateValueLength: t.value.length,
        modalFound: !0,
        matchingCandidateCount: 1,
        reopened: c,
        committed: !1
    }), !1;
    await (0, m.delay)(350);
    let f = eA(e1.value) === eA(t.text) && !e_(e1) && "true" !== e1.getAttribute("aria-expanded");
    return y("education-client-search:commit", {
        candidateTextLength: t.text.length,
        candidateValueLength: t.value.length,
        modalFound: !0,
        matchingCandidateCount: 1,
        reopened: c,
        committed: f
    }), f;
}
_c20 = X;
async function J(e1, t) {
    let r1 = "options" in t, n = r1 ? "step" : "start", i = r1 ? t.options.length : 0;
    y("education-client-search:request", {
        fieldType: e1,
        requestKind: n,
        currentOptionCount: i,
        hasSessionId: r1,
        originalAnswerLength: "original_answer" in t ? t.original_answer.length : 0
    });
    let a = Date.now();
    try {
        let r1 = await (0, o.sendToBackground)({
            name: "resolveAutofillClientSearchStep",
            body: t
        });
        return y("education-client-search:response", {
            fieldType: e1,
            requestKind: n,
            currentOptionCount: i,
            action: r1?.action || "missing",
            responseLatencyMs: Date.now() - a
        }), r1;
    } catch (t) {
        throw y("education-client-search:request-error", {
            fieldType: e1,
            requestKind: n,
            currentOptionCount: i,
            errorType: t instanceof Error ? t.name : typeof t
        }), t;
    }
}
_c21 = J;
async function Q(e1, t, r1, n) {
    let o = N(e1.value), i = N(r1.lastSearchInput), a = !!i && o === i;
    if (!a) {
        y("education-client-search:uncommitted-clear", {
            fieldType: t,
            failureReason: n,
            cleared: !1,
            reason: "input-not-current-search"
        });
        return;
    }
    e1.focus(), en(e1, ""), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), e1.blur(), await (0, m.delay)(100), y("education-client-search:uncommitted-clear", {
        fieldType: t,
        failureReason: n,
        cleared: !N(e1.value)
    });
}
_c22 = Q;
async function Z(e1, t, r1, n) {
    let o = r1.trim();
    if (!o) return y("education-client-search:return-empty-raw-fallback", {
        fieldType: t,
        source: n,
        rawValueLength: 0,
        filled: !1
    }), !1;
    let i = String(e1.getAttribute("name") || e1.id || "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if ("school" === t && i.includes("educationalestablishmentid")) return y("education-client-search:return-empty-raw-fallback", {
        fieldType: t,
        source: n,
        rawValueLength: o.length,
        filled: !1,
        reason: "selected-id-required"
    }), !1;
    e1.focus(), en(e1, o), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), "undefined" != typeof document && document.body && (0, a.triggerEvents)(document.body, [
        "mousedown",
        "mouseup",
        "click"
    ]), e1.blur(), await (0, m.delay)(100);
    let l = e1.value === o;
    return y("education-client-search:return-empty-raw-fallback", {
        fieldType: t,
        source: n,
        rawValueLength: o.length,
        filled: l
    }), l;
}
_c23 = Z;
async function ee(e1, t, r1, n, o = "raw") {
    let i = r1.trim();
    if (!i) return y("education-client-search:skip", {
        fieldType: t,
        reason: "empty-original-answer",
        rawFallbackValueLength: n?.trim().length || 0,
        returnEmptyFallbackSource: o
    }), !1;
    let a = {
        lastSearchIdentity: "",
        lastSearchInput: "",
        lastCandidates: [],
        candidatesBySearchIdentity: new Map
    };
    y("education-client-search:start", {
        fieldType: t,
        originalAnswerLength: i.length,
        rawFallbackValueLength: n?.trim().length || 0,
        returnEmptyFallbackSource: o
    });
    let l = await (0, c.runOracleEducationClientSearch)({
        fieldType: t,
        originalAnswer: r1,
        deps: {
            requestStep: (e1)=>J(t, e1),
            captureCandidates: (r1)=>K(e1, t, r1, a),
            commitCandidate: (t, r1)=>X(e1, t, r1, a)
        }
    });
    return y("education-client-search:done", {
        fieldType: t,
        success: l.success,
        actions: l.actions,
        actionCount: l.actions.length,
        roundCount: l.rounds.length,
        roundCandidateCounts: l.rounds.map((e1)=>e1.candidateCount),
        failureReason: l.failureReason
    }), !!l.success || ("return_empty" !== l.failureReason ? (await Q(e1, t, a, l.failureReason), !1) : await Z(e1, t, n || "", o));
}
async function et(e1, t, r1, n = {}) {
    if ("combobox" === e1.role) {
        let o = (0, s.isOraclePhoneCountryCodeField)(r1) || eD(r1) ? r1 : e1.getAttribute("name") || e1.id || e1.getAttribute("id"), i = (0, s.isOracleAddressSelectField)(o), a = D(o), l = P(o), u = O(o), c = _(o), d = Date.now(), p = w(o);
        if (u) {
            let r1 = "school" === u ? n.rawSchool : n.rawMajor || n.rawDegree, o = r1 || ("school" === u ? String(t ?? "") : ""), i = r1 || "", a = r1 ? "raw" : "answer";
            return y("education-client-search:source", {
                fieldType: u,
                answerLength: String(t ?? "").trim().length,
                rawSchoolLength: n.rawSchool?.trim().length || 0,
                rawMajorLength: n.rawMajor?.trim().length || 0,
                rawDegreeLength: n.rawDegree?.trim().length || 0,
                originalAnswerSource: r1 ? "major" !== u || n.rawMajor ? "raw" : "raw-degree" : "major" === u ? "missing-raw-major-and-degree" : "answer",
                returnEmptyFallbackSource: a,
                returnEmptyFallbackValueLength: i.trim().length
            }), await ee(e1, u, o, i, a);
        }
        let h = (0, s.isOraclePhoneCountryCodeField)(o) && eR(t);
        if ((ej(o) || h) && eB(e1, t, o)) return b("already-committed", e1, {
            expectedValue: t
        }), !0;
        await ei(e1), await (0, m.delay)(150), await (0, m.delay)(50), S("opened", o, {
            ariaControlsPresent: !!eo(e1),
            ariaExpanded: "true" === e1.getAttribute("aria-expanded")
        });
        let g = eP(o), v = g ? 6 : 14, C = `.//div[@role='row']//div[@role='gridcell']//span[contains(@class,'cx-select__list-item--content')]
      | .//div[@role='row']//div[@role='gridcell'][normalize-space()]
      | .//*[@role='option'][normalize-space()]`, A = g ? 2 : i ? 5 : c || l ? 2 : 1;
        b("start", e1, {
            expectedValue: t,
            isAddressSelect: i,
            isEducationSchoolSelect: a,
            isEducationMajorSelect: l,
            isEducationDegreeSelect: c,
            modalId: eo(e1),
            retryLimit: A
        });
        let k = async (r1, n = t)=>{
            let a = eo(e1), u = g;
            u && (b("set-search-value:before", e1, {
                expectedValue: t,
                searchValue: r1
            }), en(e1, r1), b("set-search-value:after", e1, {
                expectedValue: t,
                searchValue: r1
            }));
            let d = eo(e1), h = `//*[@id="${d}"]`;
            u && y("address:listbox-after-search", {
                searchValueLength: r1.trim().length,
                listboxIdChanged: a !== d
            }), b("wait-listbox:start", e1, {
                expectedValue: t,
                searchValue: r1,
                modalId: d
            });
            let w = Date.now(), A = await eU(h, 500, v);
            if (p && S("listbox-read", o, {
                found: !!A,
                modalIdPresent: !!d,
                elapsedMs: Date.now() - w
            }), y("select:modal-wait", {
                name: o,
                searchValue: r1,
                found: !!A,
                ms: Date.now() - w
            }), u && y("address:listbox-wait", {
                searchValueLength: r1.trim().length,
                listboxIdChanged: a !== d,
                found: !!A,
                ms: Date.now() - w
            }), !A) return b("wait-listbox:missing", e1, {
                expectedValue: t,
                searchValue: r1,
                modalId: d
            }), {
                modalElement: null,
                optionElements: [],
                hasNoResults: !1
            };
            u || (b("set-search-value:before", e1, {
                expectedValue: t,
                searchValue: r1
            }), en(e1, r1), b("set-search-value:after", e1, {
                expectedValue: t,
                searchValue: r1
            }));
            let k = ej(o), T = k ? 14 : i ? 8 : c || l ? 8 : 2, F = k ? 300 : 250, I = k || c || l ? 250 : 150, j = [];
            for(let i = 0; i < T; i++){
                i > 0 && await (0, m.delay)(1 === i ? F : I);
                let a = x((0, f.getOrderedNodes)(C, A));
                j = a.filter((e1)=>!L(e1));
                let l = 0 === j.length && (a.some(L) || R(A)), u = E(j), c = (0, s.findOracleSelectOptionIndex)(n, u, o);
                if (b("read-options", e1, {
                    expectedValue: t,
                    searchValue: r1,
                    readIndex: i,
                    optionCount: u.length,
                    optionTexts: u.slice(0, 12),
                    matchedIndex: c
                }), -1 !== c || l) return {
                    modalElement: A,
                    optionElements: j,
                    hasNoResults: l
                };
            }
            return {
                modalElement: A,
                optionElements: j,
                hasNoResults: !1
            };
        };
        for(let r1 = 0; r1 < A; r1++){
            y("select:attempt", {
                name: o,
                attempt: r1,
                retryLimit: A,
                elapsedMs: Date.now() - d
            }), b("attempt:start", e1, {
                expectedValue: t,
                attempt: r1,
                retryLimit: A
            }), r1 > 0 && (await (0, m.delay)(600 + 300 * r1), b("attempt:reopen-before", e1, {
                expectedValue: t,
                attempt: r1
            }), await ei(e1), await (0, m.delay)(150), b("attempt:reopen-after", e1, {
                expectedValue: t,
                attempt: r1
            }));
            let n = await k(t), a = n.optionElements, u = E(a), c = (0, s.findOracleSelectOptionIndex)(t, u, o), f = er(o, t);
            if (-1 === c && f && (y("postal-prefix-search:start", {
                name: o,
                attempt: r1,
                expectedLength: t.length,
                prefixLength: f.length,
                priorNoResults: n.hasNoResults
            }), u = E(a = (n = await k(f, t)).optionElements), c = (0, s.findOracleSelectOptionIndex)(t, u, o), y("postal-prefix-search:done", {
                name: o,
                attempt: r1,
                optionCount: u.length,
                matched: c,
                noResults: n.hasNoResults
            })), n.hasNoResults) return b("no-results:close", e1, {
                expectedValue: t,
                attempt: r1
            }), await eu(e1), !1;
            if (0 === a.length && !e1.value?.trim() && !eP(o)) {
                let i = ej(o) ? t : t.substring(0, Math.ceil(t.length / 2));
                b("fallback-search:start", e1, {
                    expectedValue: t,
                    attempt: r1,
                    fallbackValue: i
                }), en(e1, i), await (0, m.delay)(1100), u = E(a = (n = await k(i)).optionElements), c = (0, s.findOracleSelectOptionIndex)(t, u, o);
            }
            if (y("select:options", {
                name: o,
                attempt: r1,
                optionCount: u.length,
                matched: c,
                elapsedMs: Date.now() - d
            }), b("match-options", e1, {
                expectedValue: t,
                attempt: r1,
                matchedIndex: c,
                optionCount: u.length,
                optionTexts: u.slice(0, 12)
            }), p && S("option-match", o, {
                attempt: r1,
                optionCount: u.length,
                matched: c
            }), -1 === c && eP(o) && 1 === u.length && b("address-line:sole-option", e1, {
                expectedValue: t,
                attempt: r1,
                optionText: u[c = 0]
            }), -1 === c && ej(o) && n.modalElement) {
                let r1 = await ey({
                    element: e1,
                    expectedValue: t,
                    fieldName: o,
                    modalElement: n.modalElement,
                    optionXPath: C
                });
                r1 && (a = r1.optionElements, c = r1.matchedIndex);
            }
            if (-1 !== c) {
                let n = E(a)[c], u = (0, s.isOraclePhoneCountryCodeField)(o) && n ? n : t;
                b("select-option:before", e1, {
                    expectedValue: t,
                    attempt: r1,
                    matchedIndex: c,
                    optionText: n
                }), await em(a[c]), p && S("option-clicked", o, {
                    attempt: r1,
                    matched: c
                }), b("select-option:after", e1, {
                    expectedValue: t,
                    attempt: r1,
                    matchedIndex: c,
                    optionText: n
                });
                let d = await eq(e1, u, o);
                if (p && S("commit-after-click", o, {
                    attempt: r1,
                    committed: d
                }), b("commit-check:after-click", e1, {
                    expectedValue: t,
                    attempt: r1,
                    committed: d
                }), !d && ej(o) && (d = await eh({
                    optionElement: a[c],
                    inputElement: e1,
                    expectedValue: u,
                    fieldName: o,
                    attempt: r1
                }), b("commit-check:after-alternate-targets", e1, {
                    expectedValue: t,
                    attempt: r1,
                    committed: d
                })), !d && ej(o) && (b("keyboard-confirm-current:before", e1, {
                    expectedValue: t,
                    attempt: r1
                }), await eC(e1, "confirm-current"), b("keyboard-confirm-current:after", e1, {
                    expectedValue: t,
                    attempt: r1
                }), d = await eq(e1, u, o), b("commit-check:after-confirm-current", e1, {
                    expectedValue: t,
                    attempt: r1,
                    committed: d
                })), d || (b("keyboard-select:before", e1, {
                    expectedValue: t,
                    attempt: r1
                }), await eC(e1), b("keyboard-select:after", e1, {
                    expectedValue: t,
                    attempt: r1
                }), d = await eq(e1, u, o), b("commit-check:after-keyboard-select", e1, {
                    expectedValue: t,
                    attempt: r1,
                    committed: d
                })), d && l && (await (0, m.delay)(350), d = eB(e1, t, o), b("commit-check:major-stable", e1, {
                    expectedValue: t,
                    attempt: r1,
                    committed: d
                })), !d) {
                    b("attempt:not-committed", e1, {
                        expectedValue: t,
                        attempt: r1
                    });
                    continue;
                }
                if (ej(o) ? b("close-committed:skipped-country", e1, {
                    expectedValue: t,
                    attempt: r1
                }) : l ? b("close-committed:skipped-major", e1, {
                    expectedValue: t,
                    attempt: r1
                }) : (b("close-committed:before", e1, {
                    expectedValue: t,
                    attempt: r1
                }), await ec(e1), b("close-committed:after", e1, {
                    expectedValue: t,
                    attempt: r1
                })), i && (await (0, m.delay)(ej(o) ? 1200 : 800), b("address-dependent-delay:after", e1, {
                    expectedValue: t,
                    attempt: r1
                })), ej(o) && eB(e1, u, o) && (b("country-close-after-dependent:before", e1, {
                    expectedValue: t,
                    attempt: r1
                }), await ed(e1), b("country-close-after-dependent:after", e1, {
                    expectedValue: t,
                    attempt: r1
                })), eB(e1, u, o)) return b("success", e1, {
                    expectedValue: t,
                    attempt: r1
                }), !0;
                b("post-close:not-committed", e1, {
                    expectedValue: t,
                    attempt: r1
                });
            }
        }
        return b("failed:no-cleanup", e1, {
            expectedValue: t
        }), !1;
    }
    let o = (0, f.getFirstOrderedNode)("./ancestor::div[contains(@class, 'input-field-container__left')]/following-sibling::div[contains(@class, 'input-field-container__right')]//button[contains(@class, 'icon-dropdown-arrow icon-dropdown-arrow__open')]", e1);
    return o ? ((0, a.triggerEvents)(o, [
        "click",
        "mousedown",
        "mouseup"
    ]), await (0, m.delay)(200), !0) : (e1.blur(), !1);
}
function er(e1, t) {
    let r1 = String(e1 ?? "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (!new Set([
        "postalcode",
        "zipcode",
        "zip"
    ]).has(r1)) return null;
    let n = t.replace(/[^a-zA-Z0-9]/g, "");
    return n.length <= 3 ? null : n.slice(0, 3);
}
function en(e1, t) {
    el(e1, t);
    let r1 = "function" == typeof InputEvent ? new InputEvent("input", {
        bubbles: !0,
        cancelable: !0,
        data: t,
        inputType: "insertText"
    }) : new Event("input", {
        bubbles: !0,
        cancelable: !0
    });
    e1.dispatchEvent(r1);
}
function eo(e1) {
    let t = e1.getAttribute("aria-controls")?.trim();
    if (t) return t;
    let r1 = "undefined" != typeof document && "function" == typeof document.getElementById && e1.id ? document.getElementById(`${e1.id}-toggle-button`) : null, n = r1?.getAttribute("aria-controls")?.trim();
    return n || `${e1.id}-listbox`;
}
async function ei(e1) {
    e1.focus();
    let t = "undefined" != typeof document && "function" == typeof document.getElementById && e1.id ? document.getElementById(`${e1.id}-toggle-button`) : null;
    if (t) {
        let r1 = "true" === e1.getAttribute("aria-expanded") || "true" === t.getAttribute("aria-expanded");
        if (!r1) {
            e1.dispatchEvent(es("keydown", "ArrowDown")), e1.dispatchEvent(es("keyup", "ArrowDown")), await (0, m.delay)(100);
            let r1 = "true" === e1.getAttribute("aria-expanded") || "true" === t.getAttribute("aria-expanded") || !!document.getElementById(eo(e1));
            r1 || ea(e1, t);
        }
        return;
    }
    e1.click();
}
function ea(e1, t) {
    let r1 = ()=>"true" === e1.getAttribute("aria-expanded") || "true" === t.getAttribute("aria-expanded") || !!("undefined" != typeof document && "function" == typeof document.getElementById && e1.id && document.getElementById(eo(e1)));
    for (let e1 of [
        "pointerover",
        "mouseover",
        "pointerenter",
        "mouseenter",
        "pointerdown",
        "mousedown",
        "pointerup",
        "mouseup"
    ])if (ex(t, e1), r1()) return;
    t.click?.();
}
function el(e1, t) {
    let r1 = Object.getPrototypeOf(e1), n = Object.getOwnPropertyDescriptor(r1, "value")?.set;
    n ? n.call(e1, t) : e1.value = t;
}
function es(e1, t) {
    return "function" == typeof KeyboardEvent ? new KeyboardEvent(e1, {
        key: t,
        code: t,
        bubbles: !0,
        cancelable: !0
    }) : new Event(e1, {
        bubbles: !0,
        cancelable: !0
    });
}
async function eu(e1) {
    e1.dispatchEvent(es("keydown", "Escape")), e1.dispatchEvent(es("keyup", "Escape")), e1.blur(), "undefined" != typeof document && document.body && (0, a.triggerEvents)(document.body, [
        "mousedown",
        "mouseup",
        "click"
    ]), await (0, m.delay)(50);
}
async function ec(e1) {
    if ("false" === e1.getAttribute("aria-expanded")) {
        await (0, m.delay)(50);
        return;
    }
    e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), await eu(e1);
}
async function ed(e1) {
    let t = ef(e1, "close");
    if (!t) {
        await (0, m.delay)(100);
        return;
    }
    ep(t), await (0, m.delay)(200);
}
function ef(e1, t) {
    let r1 = "close" === t ? "close the drop-down list" : "open the drop-down list", n = e1.parentElement;
    for(let e1 = 0; n && e1 < 8; e1++){
        let e1 = "function" == typeof n.querySelectorAll ? Array.from(n.querySelectorAll("button")) : [], t = e1.find((e1)=>{
            let t = e1.getAttribute("aria-label") || e1.getAttribute("title") || e1.textContent || "";
            return t.trim().toLowerCase().startsWith(r1);
        });
        if (t) return t;
        n = n.parentElement;
    }
    return null;
}
function ep(e1) {
    for (let t of [
        "pointerover",
        "mouseover",
        "pointerenter",
        "mouseenter",
        "pointerdown",
        "mousedown",
        "pointerup",
        "mouseup"
    ])ex(e1, t);
    e1.click?.();
}
async function em(e1) {
    let t = eg(e1)[0];
    t && (t.scrollIntoView?.({
        block: "nearest",
        inline: "nearest"
    }), t.click?.(), await (0, m.delay)(200));
}
async function eh({ optionElement: e1, inputElement: t, expectedValue: r1, fieldName: n, attempt: o }) {
    let i = eg(e1);
    for(let e1 = 1; e1 < i.length; e1++){
        let a = i[e1];
        b("alternate-target:before", t, {
            expectedValue: r1,
            attempt: o,
            targetIndex: e1,
            targetText: a.textContent?.trim()
        }), eb(a), await (0, m.delay)(250);
        let l = await eq(t, r1, n);
        if (b("alternate-target:after", t, {
            expectedValue: r1,
            attempt: o,
            targetIndex: e1,
            committed: l
        }), l) return !0;
    }
    return !1;
}
function eg(e1) {
    let t = [], r1 = (e1)=>{
        let r1 = e1;
        !r1 || "isConnected" in r1 && !1 === r1.isConnected || t.includes(r1) || t.push(r1);
    };
    return r1(e1.closest?.("[role='gridcell']")), r1(e1.closest?.("[role='option']")), r1(e1), r1(e1.closest?.("[role='row']")), t;
}
function eb(e1) {
    e1.scrollIntoView?.({
        block: "nearest",
        inline: "nearest"
    }), eE(e1);
}
async function ey({ element: e1, expectedValue: t, fieldName: r1, modalElement: n, optionXPath: o }) {
    let i = ev(n);
    if (!i.length) return b("country-scroll-search:no-scroller", e1, {
        expectedValue: t
    }), null;
    for (let a of i){
        let i = Math.max(0, a.scrollHeight - a.clientHeight);
        for (let l of eS(i)){
            a.scrollTop = l, a.dispatchEvent?.(new Event("scroll", {
                bubbles: !0
            })), await (0, m.delay)(180);
            let i = x((0, f.getOrderedNodes)(o, n).filter((e1)=>!L(e1))), u = E(i), c = (0, s.findOracleSelectOptionIndex)(t, u, r1);
            if (b("country-scroll-search:read-options", e1, {
                expectedValue: t,
                matchedIndex: c,
                optionCount: u.length,
                optionTexts: u.slice(0, 12),
                scrollTop: l
            }), -1 !== c) return {
                optionElements: i,
                matchedIndex: c
            };
        }
    }
    return null;
}
function ev(e1) {
    let t = [], r1 = (e1)=>{
        ew(e1) && (t.includes(e1) || t.push(e1));
    };
    if (r1(e1), "function" == typeof e1.querySelectorAll) for (let t of Array.from(e1.querySelectorAll("*")))r1(t);
    return t;
}
function ew(e1) {
    let t = e1;
    return !!t && "number" == typeof t.scrollTop && "number" == typeof t.scrollHeight && "number" == typeof t.clientHeight && t.scrollHeight > t.clientHeight + 20;
}
function eS(e1) {
    if (e1 <= 0) return [
        0
    ];
    let t = new Set;
    for (let r1 of [
        0,
        .15,
        .3,
        .45,
        .6,
        .75,
        .88,
        1
    ])t.add(Math.round(e1 * r1));
    let r1 = 400;
    for(let n = 0; n <= e1; n += r1)t.add(n);
    return t.add(e1), [
        ...t
    ].sort((e1, t)=>e1 - t);
}
function eE(e1) {
    for (let t of [
        "pointerover",
        "mouseover",
        "pointerenter",
        "mouseenter",
        "pointerdown",
        "mousedown",
        "pointerup",
        "mouseup",
        "click"
    ])ex(e1, t);
    e1.click?.();
}
function ex(e1, t) {
    let r1 = "function" == typeof e1.getBoundingClientRect ? e1.getBoundingClientRect() : null, n = r1 ? r1.left + r1.width / 2 : 0, o = r1 ? r1.top + r1.height / 2 : 0, i = "pointerdown" === t || "mousedown" === t, a = {
        bubbles: !0,
        cancelable: !0,
        button: 0,
        buttons: i ? 1 : 0,
        clientX: n,
        clientY: o,
        ..."undefined" != typeof window ? {
            view: window
        } : {}
    }, l = t.startsWith("pointer") && "function" == typeof PointerEvent ? new PointerEvent(t, {
        ...a,
        pointerType: "mouse",
        isPrimary: !0
    }) : "function" == typeof MouseEvent ? new MouseEvent(t, a) : new Event(t, {
        bubbles: !0,
        cancelable: !0
    });
    e1.dispatchEvent(l);
}
async function eC(e1, t = "default") {
    if ("confirm-current" === t) {
        e1.dispatchEvent(es("keydown", "Enter")), e1.dispatchEvent(es("keyup", "Enter")), await (0, m.delay)(250);
        return;
    }
    e1.dispatchEvent(es("keydown", "ArrowDown")), e1.dispatchEvent(es("keyup", "ArrowDown")), e1.dispatchEvent(es("keydown", "Enter")), e1.dispatchEvent(es("keyup", "Enter")), await (0, m.delay)(200);
}
function eA(e1) {
    return "string" == typeof e1 ? e1.replace(/\s+/g, " ").trim().toLowerCase() : "";
}
function ek(e1) {
    return String(e1 ?? "").replace(/[\u2019']/g, "").replace(/[\u2010-\u2015]/g, "-").replace(/[./_-]+/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
function eT(e1) {
    let t = ek(e1.getAttribute?.("aria-label"));
    if ("degree" === t) return !0;
    let r1 = ek(e1.closest?.(".input-row")?.textContent);
    return r1.startsWith("degree ");
}
function eF(e1) {
    let t = ek(e1);
    return t ? /\bmba\b/.test(t) ? "mba" : /\bhigh school\b/.test(t) ? "highschool" : /\bged\b/.test(t) ? "ged" : /\b(?:associate|associates)\b/.test(t) ? "associate" : /\b(?:bachelor|bachelors|bs|ba|bsc)\b/.test(t) ? "bachelor" : /\b(?:master|masters|ms|ma|msc)\b/.test(t) ? "master" : /\b(?:doctor|doctorate|phd|ph d)\b/.test(t) ? "doctor" : /\b(?:jd|j d|juris doctor)\b/.test(t) ? "jd" : /\bpost\s*graduate\b.*\bdiploma\b/.test(t) ? "postgraduatediploma" : /\bcollege\b.*\bdiploma\b/.test(t) ? "collegediploma" : /\btrade\b/.test(t) ? "trade" : /\bother\b/.test(t) ? "other" : /\bnone|no degree\b/.test(t) ? "none" : t : "";
}
function eI(e1, t, r1) {
    if (r1) {
        let r1 = eF(e1);
        return t.some((e1)=>{
            let t = eF(e1);
            return !!t && t === r1;
        });
    }
    let n = ek(e1);
    return t.some((e1)=>ek(e1) === n);
}
function ej(e1) {
    return e1?.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === "country";
}
function eD(e1) {
    return e1?.trim().toLowerCase() === "country";
}
function eP(e1) {
    let t = e1?.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return "address1" === t || "addressline1" === t;
}
function e_(e1) {
    return e1.classList?.contains("cx-select-input--invalid") || "true" === e1.getAttribute("aria-invalid");
}
function eL(e1) {
    return String(e1 ?? "").match(/\+(\d{1,4})\b/)?.[1] ?? "";
}
function eR(e1) {
    return /^\s*\(?\+\d{1,4}\)?\s*$/.test(String(e1 ?? ""));
}
function eO() {
    return "undefined" != typeof document && !!document.querySelector('input[name="addressLine1"], input[name="city"], input[name="region2"], input[name="postalCode"], input[name="region1"]');
}
function eM(e1) {
    let t = e1;
    for(let e1 = 0; t && e1 < 12; e1++){
        if (t.textContent?.replace(/\s+/g, " ").includes("dependent drop-down lists")) return !0;
        t = t.parentElement;
    }
    return !1;
}
function eN(e1) {
    let t = e1.parentElement;
    for(let e1 = 0; t && e1 < 8; e1++){
        let e1 = Array.from(t.querySelectorAll("button")).filter((e1)=>"Remove value for the Country field." === e1.getAttribute("aria-label"));
        if (1 === e1.length) return e1[0];
        if (e1.length > 1) break;
        t = t.parentElement;
    }
    return null;
}
async function e$(e1) {
    let t = eN(e1);
    if (y("country:dependent-reset:prepare", {
        hasExistingCountry: !!eA(e1.value),
        hasClearButton: !!t,
        dependentFieldsPresent: eO()
    }), !t) return console.warn("[oraclecloud][country] native dependent-address clear button unavailable"), !1;
    t.click();
    let r1 = await (0, l.waitForCondition)(()=>"" === eA(e1.value) && !eO(), {
        timeout: 3e3,
        interval: 50,
        observeTarget: document.body
    });
    return y("country:dependent-reset:result", {
        resetConfirmed: r1,
        countryCleared: "" === eA(e1.value),
        dependentFieldsPresent: eO()
    }), r1 || console.warn("[oraclecloud][country] native dependent-address reset was not confirmed"), r1;
}
function eB(e1, t, r1) {
    let n = "string" == typeof e1.value ? e1.value : "", o = eA(e1.value);
    if (!o || e_(e1)) return !1;
    if ((0, s.isOraclePhoneCountryCodeField)(r1)) {
        let e1 = eL(t), r1 = eL(n);
        return !!e1 && e1 === r1;
    }
    return ej(r1) ? o === eA(t) && (!eM(e1) || eO()) : !P(r1) || o === eA(t) && "true" !== e1.getAttribute("aria-expanded");
}
async function eq(e1, t, r1) {
    return await (0, l.waitForCondition)(()=>eB(e1, t, r1), {
        timeout: ej(r1) ? 8e3 : 1e3,
        interval: 100,
        observeTarget: "undefined" != typeof document ? document.body : void 0
    });
}
async function eU(e1, t = 500, r1 = 10) {
    let n = 0, o = null;
    for(; !o && n < r1;)!(o = (0, f.getFirstOrderedNode)(e1)) && (await (0, m.delay)(t), n++);
    return o;
}
function eH(e1) {
    return String(e1 ?? "").replace(/[./_-]+/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
function eY(e1) {
    let t = eH(e1);
    return [
        "true",
        "1",
        "yes"
    ].includes(t);
}
function ez(e1) {
    let t = eH(e1);
    return [
        "false",
        "0",
        "no",
        "decline to state"
    ].includes(t);
}
function eV(e1) {
    if (!1 !== e1.isConnected) return e1;
    if (!e1.id || !e1.ownerDocument) return null;
    let t = Array.from(e1.ownerDocument.querySelectorAll("input")).filter((t)=>t.id === e1.id);
    if (1 !== t.length) return null;
    let r1 = t[0];
    return r1.isConnected && r1.type === e1.type && r1.name === e1.name ? r1 : null;
}
function eW(e1) {
    let t = Array.from(e1.labels || []).filter((t)=>t.htmlFor === e1.id && t.classList.contains("apply-flow-input-checkbox"));
    return 1 !== t.length ? null : t[0].querySelector(".apply-flow-input-checkbox__button");
}
function eG(e1) {
    let t = eV(e1);
    if (!t?.checked) return !1;
    let r1 = eW(t);
    return !r1 || r1.classList.contains("apply-flow-input-checkbox__button--checked");
}
async function eK(e1, t, r1) {
    let n = eV(e1);
    if (!n || n.disabled) return !1;
    let o = eH(r1), i = t.some((e1)=>{
        if (eY(e1)) return !0;
        let t = eH(e1);
        return !!o && t === o;
    });
    if (!i && t.some(ez)) return !n.checked;
    if (i && !n.checked) {
        let e1 = eW(n);
        (e1 || n).click(), await (0, m.delay)(50);
    }
    if (!i) return !1;
    let a = await (0, l.waitForCondition)(()=>eG(n), {
        timeout: 1e3,
        interval: 50,
        observeTarget: n.ownerDocument?.body
    });
    return a && eG(n);
}
async function eX(e1, t) {
    let r1 = Array.isArray(t) ? t : [
        t
    ], n = !1;
    for(let t = 0; t < e1.$checkboxs.length; t++){
        let o = e1.$checkboxs[t], i = e1.options?.[t], a = await eK(o, r1, i), l = eV(o);
        if (l && (e1.$checkboxs[t] = l, e1.$input === o && (e1.$input = l)), "Current Job" === e1.label && v()) {
            let e1 = l?.closest?.(".input-row"), t = e1?.closest("form-builder");
            y("employment:current-job-state", {
                originalConnected: o.isConnected,
                liveConnected: l?.isConnected,
                checked: l?.checked,
                visualChecked: !!e1?.querySelector(".apply-flow-input-checkbox__button--checked"),
                endFields: Array.from(t?.querySelectorAll('input[name="endDate"]') || []).map((e1)=>({
                        readOnly: e1.readOnly,
                        disabled: e1.disabled,
                        required: !!e1.closest(".input-row")?.querySelector(".input-row__label--required-star")
                    }))
            });
        }
        a && (n = !0);
    }
    return n;
}
async function eJ(e1, t) {
    let r1 = Array.isArray(t) ? t : [
        t
    ], n = eT(e1), o = (0, f.getOrderedNodes)('.//span[contains(@class, "cx-select-pill-name")]', e1), i = !1;
    for (let e1 of o){
        let t = e1.textContent?.trim();
        if (eI(t, r1, n)) {
            let t = (0, f.getFirstOrderedNode)("./ancestor::button", e1);
            t && !t.classList.contains("cx-select-pill-section--selected") && (t.click(), await (0, m.delay)(1e3)), i = !0;
        }
    }
    return i;
}
async function eQ(e1, t) {
    let r1 = !1, n = (0, f.getOrderedNodes)(".//label[contains(@class, 'apply-flow-input-checkbox') or contains(@class, 'apply-flow-input-radio')]", e1);
    for(let e1 = 0; e1 < n.length; e1++){
        let o = n[e1], i = o.getAttribute("for"), a = document.getElementById(i), l = o.textContent?.trim();
        if (l && t.includes(l)) {
            if (a.checked) {
                r1 = !0;
                continue;
            }
            a.click(), await (0, m.delay)(200), r1 = !0;
        }
    }
}
async function eZ(e1, t) {
    let r1 = "string" == typeof t ? t.trim() : String(t ?? "");
    if (!r1) return !1;
    let n = (0, f.getOrderedNodes)(".//input[contains(@class,'cx-select-input')]", e1.$input), o = (0, f.getOrderedNodes)(".//span[contains(@class,'input-field__label')]", e1.$input), i = [
        "month",
        "day",
        "year"
    ], a = !1;
    for(let e1 = 0; e1 < n.length && e1 < i.length; e1++){
        let t = o[e1]?.textContent?.trim() || i[e1], l = (0, p.transFormDateNumberToEg)(r1, t.toLowerCase());
        if (!l || "NaN" === l) return !1;
        let s = await et(n[e1], l);
        if (!s) return !1;
        a = !0, await (0, m.delay)(300);
    }
    return a;
}
function e0(e1) {
    return tt(e1);
}
async function e2(e1, t, r1) {
    let n = ()=>(0, f.getOrderedNodes)(".//p[contains(@class, 'input-row__validation')]", e1).some((e1)=>{
            let t = e1;
            return !!t.textContent?.trim() && tt(t);
        }), o = await (0, l.waitForCondition)(()=>n() || !e0(t), {
        timeout: 5e3,
        interval: 100,
        observeTarget: "undefined" != typeof document ? document.body : void 0
    }), i = o && !n() && !e0(t);
    return !i && r1 && (y("timeline:save-validation", {
        saveDisabled: t.disabled,
        fields: (0, f.getOrderedNodes)(".//p[contains(@class, 'input-row__validation')]", e1).map((e1)=>{
            let t = e1.closest?.(".input-row"), r1 = e1.textContent || "";
            return {
                label: t?.querySelector("form-element-label")?.textContent?.replace(/\s+/g, " ").trim(),
                visible: tt(e1),
                messageLength: r1.trim().length,
                requiredMessage: /required|must enter/i.test(r1),
                incompleteDateMessage: /whole date/i.test(r1),
                inputs: Array.from(t?.querySelectorAll("input") || []).map((e1)=>({
                        name: e1.name,
                        valueLength: e1.value.length,
                        readOnly: e1.readOnly,
                        invalid: e1.getAttribute("aria-invalid")
                    }))
            };
        })
    }), (0, a.triggerEvents)(r1, [
        "click"
    ]), await (0, l.waitForCondition)(()=>!e0(t), {
        timeout: 5e3,
        interval: 100,
        observeTarget: "undefined" != typeof document ? document.body : void 0
    })), i;
}
async function e1() {
    let e1 = (0, f.getFirstOrderedNode)("//div[@role='region' and contains(@aria-label, 'Education')] | .//timeline-form-builder[@class=\"timeline-form-dialog__content\"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]") || null;
    if (e1) {
        let t = (0, f.getFirstOrderedNode)(".//button[contains(@class, 'button app-dialog__footer-button save-btn')]", e1) || null;
        if (t) {
            (0, a.triggerEvents)(t, [
                "click"
            ]);
            let r1 = (0, f.getFirstOrderedNode)(".//button[contains(@class, 'button app-dialog__footer-button cancel-btn')]", e1) || null;
            return await e2(e1, t, r1);
        }
    }
    return !1;
}
async function e3() {
    let e1 = (0, f.getFirstOrderedNode)("//div[@role='region' and contains(@aria-label, 'Education')] | .//timeline-form-builder[@class=\"timeline-form-dialog__content\"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]") || null;
    if (e1) {
        let t = (0, f.getFirstOrderedNode)(".//button[contains(@class, 'button app-dialog__footer-button cancel-btn')]", e1) || null, r1 = (0, f.getFirstOrderedNode)(".//button[contains(@class, 'button app-dialog__footer-button save-btn')]", e1) || null;
        return t ? ((0, a.triggerEvents)(t, [
            "click"
        ]), await (0, l.waitForCondition)(()=>!e0(t) && (!r1 || !e0(r1)), {
            timeout: 5e3,
            interval: 100,
            observeTarget: "undefined" != typeof document ? document.body : void 0
        })) : !r1 || !e0(r1);
    }
    return !0;
}
async function e4() {
    let e1 = (0, f.getFirstOrderedNode)("//div[@role='region' and (contains(@aria-label, 'Experience') or contains(@aria-label, 'Employment'))] | .//timeline-form-builder[@class=\"timeline-form-dialog__content\"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]") || null;
    if (e1) {
        let t = (0, f.getFirstOrderedNode)(".//button[contains(@class, 'button app-dialog__footer-button save-btn')]", e1) || null;
        if (t) {
            (0, a.triggerEvents)(t, [
                "click"
            ]);
            let r1 = (0, f.getFirstOrderedNode)(".//button[contains(@class, 'button app-dialog__footer-button cancel-btn')]", e1) || null;
            return await e2(e1, t, r1);
        }
    }
    return !1;
}
async function e5() {
    let e1 = (0, f.getFirstOrderedNode)("//div[@role='region' and (contains(@aria-label, 'Experience') or contains(@aria-label, 'Employment'))] | .//timeline-form-builder[@class=\"timeline-form-dialog__content\"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]") || null;
    if (e1) {
        let t = (0, f.getFirstOrderedNode)(".//button[contains(@class, 'button app-dialog__footer-button cancel-btn')]", e1) || null;
        t && t.click();
    }
}
function e6(e1) {
    let t = "education" === e1 ? "timeline-education-add-button" : "timeline-work-add-button", r1 = `timeline-add-${e1}-button`;
    if ("undefined" == typeof document) return null;
    let n = (0, f.getFirstOrderedNode)("education" === e1 ? "//div[@role='region' and contains(@aria-label, 'Education')] | .//timeline-form-builder[@class=\"timeline-form-dialog__content\"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]" : "//div[@role='region' and (contains(@aria-label, 'Experience') or contains(@aria-label, 'Employment'))] | .//timeline-form-builder[@class=\"timeline-form-dialog__content\"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]"), o = n ? (0, f.getOrderedNodes)(".//div[contains(@class, 'profile-add-item')]/button", n) : [], i = o.find((e1)=>tt(e1));
    if (i) return i;
    let a = (0, f.getOrderedNodes)(`//button[
      contains(@class, '${t}')
      or contains(@id, '${r1}')
    ]`, document);
    return a.find((e1)=>tt(e1)) || null;
}
async function e8() {
    let e1 = e6("education");
    e1 && (e1.click(), await (0, m.delay)(100));
}
async function e9() {
    let e1 = e6("experience");
    e1 && (e1.click(), await (0, m.delay)(100));
}
function e7(e1) {
    return "string" == typeof e1 ? e1.replace(/\s+/g, " ").trim().toLowerCase() : "";
}
function te(e1) {
    let t = Array.isArray(e1) ? e1 : e1 ? [
        e1
    ] : [], r1 = [];
    for (let e1 of t){
        let t = "string" == typeof e1 ? e1.split(/[,;\n]+/) : [
            `${e1 ?? ""}`
        ];
        for (let e1 of t){
            let t = e1.replace(/\s+/g, " ").trim();
            t && !r1.includes(t) && r1.push(t);
        }
    }
    return r1;
}
function tt(e1) {
    if (!e1 || "isConnected" in e1 && !1 === e1.isConnected) return !1;
    let t = "function" == typeof e1.getBoundingClientRect ? e1.getBoundingClientRect() : null;
    if (t && (t.width <= 0 || t.height <= 0)) return !1;
    if ("undefined" != typeof window && "function" == typeof window.getComputedStyle) {
        let t = window.getComputedStyle(e1);
        if ("none" === t.display || "hidden" === t.visibility || "0" === t.opacity) return !1;
    }
    return !0;
}
function tr(e1) {
    let t = "Languages" === e1 ? [
        "Languages",
        "Language Skills",
        "Language"
    ] : [
        e1
    ], r1 = t.map((e1)=>{
        let t = e1.toLowerCase();
        return `
          normalize-space()='${e1}'
          or translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')='${t}'
        `;
    }).join(" or ");
    return (0, f.getFirstOrderedNode)(`//apply-flow-block[
        .//*[contains(@class, 'apply-flow-block__header')]//*[
          ${r1}
        ]
        or .//apply-flow-block-title//*[
          ${r1}
        ]
      ]`) || null;
}
function tn() {
    return tr("Skills");
}
function to() {
    return tr("Languages");
}
function ti(e1) {
    let t = e1.closest?.(".input-row, .input-field-container");
    return e7(t?.textContent);
}
function ta(e1) {
    let t = ti(e1), r1 = e7(e1.getAttribute?.("name") || e1.id);
    return t.includes("years of experience") || r1.includes("yearsofexperience");
}
function tl(e1) {
    if (ta(e1)) return !1;
    let t = ti(e1), r1 = e7(e1.getAttribute?.("name") || e1.id);
    return t.includes("skill") || r1.includes("skill");
}
function ts(e1) {
    let t = (0, f.getFirstOrderedNode)(`.//button[
        contains(@class, 'apply-flow-profile-item-tile__new-tile')
        and contains(
          translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
          'add'
        )
        and contains(
          translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
          'skill'
        )
      ]`, e1) || null;
    return t && tt(t) ? t : (0, f.getFirstOrderedNode)(`.//button[
        not(ancestor::form)
        and not(ancestor::*[@role='dialog'])
        and not(ancestor::*[contains(@class, 'app-dialog')])
        and not(ancestor::*[contains(@class, 'timeline-form-dialog')])
        and contains(
          translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
          'add'
        )
        and contains(
          translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
          'skill'
        )
      ]`, e1) || null;
}
function tu(e1) {
    let t = (0, f.getOrderedNodes)(`//div[
        @role='dialog'
        or contains(@class, 'app-dialog')
        or contains(@class, 'timeline-form-dialog')
      ][.//*[contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'skill')]]
        //input[not(@type='hidden') and not(@type='file')]
      | .//input[not(@type='hidden') and not(@type='file')]`, e1);
    return t.find((e1)=>tt(e1) && tl(e1)) ?? t.find((e1)=>tt(e1) && !ta(e1)) ?? null;
}
function tc(e1, t) {
    let r1 = e1.closest?.("form") || e1.closest?.("[role='dialog'], .app-dialog, .timeline-form-dialog") || t;
    return (0, f.getFirstOrderedNode)(`.//button[
        not(contains(@class, 'apply-flow-profile-item-tile__new-tile'))
        and (
          contains(normalize-space(), 'ADD SKILL')
          or contains(normalize-space(), 'SAVE')
          or contains(normalize-space(), 'Add Skill')
          or contains(normalize-space(), 'Save')
        )
      ]`, r1) || null;
}
function td(e1) {
    if (e1.scrollIntoView?.({
        block: "center",
        inline: "center"
    }), e1.focus?.(), "function" == typeof e1.click) {
        e1.click();
        return;
    }
    (0, a.triggerEvents)(e1, [
        "click"
    ]);
}
async function tf(e1, t, r1) {
    let n = e7(r1);
    return await (0, l.waitForCondition)(()=>{
        let t = e7(e1.textContent);
        return !!n && t.includes(n);
    }, {
        timeout: 6e3,
        interval: 200,
        observeTarget: e1
    });
}
async function tp(e1, t) {
    let r1 = ts(e1);
    r1 && (td(r1), await (0, m.delay)(400));
    let n = tu(e1);
    if (!n) return !1;
    n.focus?.(), n.click?.(), el(n, t), n.dispatchEvent("function" == typeof InputEvent ? new InputEvent("input", {
        bubbles: !0,
        cancelable: !0,
        data: t,
        inputType: "insertText"
    }) : new Event("input", {
        bubbles: !0,
        cancelable: !0
    })), n.dispatchEvent(new Event("change", {
        bubbles: !0
    })), await (0, m.delay)(100);
    let o = tc(n, e1);
    return !!o && (td(o), await tf(e1, n, t));
}
async function tm(e1) {
    let t = te(e1).slice(0, 10);
    if (0 === t.length) return !1;
    let r1 = tn();
    if (!r1) return !1;
    let n = 0;
    for (let e1 of t){
        if (await tp(r1, e1)) {
            n += 1, await (0, m.delay)(200);
            continue;
        }
        break;
    }
    return n > 0;
}
function th(e1) {
    let t = Array.isArray(e1) ? e1 : e1 ? [
        e1
    ] : [], r1 = [];
    for (let e1 of t){
        let t = "string" == typeof e1 ? e1.split(/[,;\n]+/) : [
            `${e1 ?? ""}`
        ];
        for (let e1 of t){
            let t = e1.replace(/\s+/g, " ").trim();
            t && !r1.includes(t) && r1.push(t);
        }
    }
    return r1;
}
function tg(e1) {
    let t = e7(e1.getAttribute?.("name") || e1.id), r1 = ti(e1);
    return t.includes("contentitemid") || t.includes("language") || r1.includes("language");
}
function tb(e1) {
    let t = (0, f.getFirstOrderedNode)(".//button[contains(@class, 'apply-flow-profile-item-tile__new-tile') and contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'add language')]", e1) || null;
    return t && tt(t) ? t : (0, f.getFirstOrderedNode)(`.//button[
        not(ancestor::form)
        and not(ancestor::*[@role='dialog'])
        and not(ancestor::*[contains(@class, 'app-dialog')])
        and not(ancestor::*[contains(@class, 'timeline-form-dialog')])
        and not(contains(@class, 'app-dialog__footer-button'))
        and not(contains(@class, 'save-btn'))
        and not(contains(@class, 'cancel-btn'))
        and contains(
          translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
          'add language'
        )
      ]`, e1) || null;
}
function ty(e1) {
    let t = (0, f.getOrderedNodes)(`//div[
        @role='dialog'
        or contains(@class, 'app-dialog')
        or contains(@class, 'timeline-form-dialog')
      ][.//*[contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'language')]]
        //input[not(@type='hidden') and not(@type='file')]
      | .//input[not(@type='hidden') and not(@type='file')]`, e1);
    return t.find((e1)=>tt(e1) && tg(e1)) ?? t.find((e1)=>tt(e1)) ?? null;
}
function tv(e1, t) {
    let r1 = e1.closest?.("form") || e1.closest?.("[role='dialog'], .app-dialog, .timeline-form-dialog") || t;
    return (0, f.getFirstOrderedNode)(`.//button[
        not(contains(@class, 'apply-flow-profile-item-tile__new-tile'))
        and (
          contains(@class, 'save-btn')
          or contains(normalize-space(), 'ADD LANGUAGE')
          or contains(normalize-space(), 'Add Language')
          or contains(normalize-space(), 'SAVE')
          or contains(normalize-space(), 'Save')
        )
      ]`, r1) || null;
}
async function tw(e1, t, r1) {
    let n = e7(r1);
    return await (0, l.waitForCondition)(()=>{
        let t = e7(e1.textContent);
        return !!n && t.includes(n);
    }, {
        timeout: 6e3,
        interval: 200,
        observeTarget: e1
    });
}
async function tS(e1, t) {
    let r1 = ty(e1);
    if (!r1) {
        let t = tb(e1);
        if (!t) return !1;
        (0, a.triggerEvents)(t, [
            "click"
        ]), await (0, m.delay)(400), r1 = ty(e1);
    }
    if (!r1) return !1;
    let n = await et(r1, t);
    n || (r1.focus?.(), r1.click?.(), el(r1, t), r1.dispatchEvent("function" == typeof InputEvent ? new InputEvent("input", {
        bubbles: !0,
        cancelable: !0,
        data: t,
        inputType: "insertText"
    }) : new Event("input", {
        bubbles: !0,
        cancelable: !0
    })), r1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), await (0, m.delay)(100));
    let o = tv(r1, e1);
    return !!o && ((0, a.triggerEvents)(o, [
        "click"
    ]), await tw(e1, r1, t));
}
async function tE(e1) {
    let t = th(e1).slice(0, 10);
    if (0 === t.length) return !1;
    let r1 = to();
    if (!r1) return !1;
    let n = 0;
    for (let e1 of t)await tS(r1, e1) && (n += 1, await (0, m.delay)(200));
    return n > 0;
}
async function tx(e1, t, r1) {
    return tD("resume") ? await tR("resume", await (0, i.fetchPdfAsBlob)(e1), t, r1) : (console.warn("[oraclecloud][resume] visible attachment slot unavailable"), !1);
}
let tC = {
    resume: {
        rootSelector: "resume-upload-button",
        fieldLabel: "Resume/CV",
        logKey: "resume"
    },
    coverLetter: {
        rootSelector: "cover-letter-upload-button",
        fieldLabel: "Cover Letter",
        logKey: "cover-letter"
    }
};
function tA(e1) {
    let t = document.querySelector(tC[e1].rootSelector), r1 = t instanceof HTMLElement && tq(t) ? t : null;
    return r1;
}
function tk(e1) {
    let t = tA(e1);
    if (!t) return null;
    let r1 = t.querySelector('input[type="file"]') || (0, f.getFirstOrderedNode)(".//input[@type='file']", t);
    return r1;
}
function tT(e1) {
    let t = tA(e1);
    if (!t) return null;
    let r1 = t.querySelector(".attachment-upload-button__filled") || (0, f.getFirstOrderedNode)(".//div[contains(@class,'attachment-upload-button__filled')]", t), n = tq(r1) ? r1 : null;
    return n;
}
function tF(e1) {
    let t = tA(e1);
    if (!t) return null;
    let r1 = t.querySelector(".attachment-upload-button") || (0, f.getFirstOrderedNode)(".//div[contains(@class,'attachment-upload-button')]", t);
    return tq(r1) ? r1 : null;
}
function tI(e1) {
    let t = tA(e1);
    if (!t) return null;
    let r1 = t.querySelector(".attachment-upload-button__label, .file-form-element__label, .attachment-upload-button-mobile__label") || (0, f.getFirstOrderedNode)(`.//label[
          contains(@class,'attachment-upload-button__label')
          or contains(@class,'file-form-element__label')
          or contains(@class,'attachment-upload-button-mobile__label')
        ]`, t);
    return tq(r1) ? r1 : null;
}
function tj(e1) {
    let t = tT(e1);
    if (!t) return null;
    let r1 = (0, f.getFirstOrderedNode)(`.//button[contains(@class,'attachment-upload-button__bottom-button')
        and (normalize-space()='Remove' or contains(@aria-label,'Remove attachment'))]`, t) || null;
    return r1;
}
function tD(e1) {
    let t = tF(e1);
    return !!(t && tk(e1)) || !!tT(e1);
}
function tP() {
    return tD("coverLetter");
}
async function t_() {
    let e1 = (0, f.getFirstOrderedNode)(`//div[@role='dialog' or contains(@class,'app-dialog') or contains(@class,'oj-dialog')]
        //button[
          normalize-space()='Delete'
          or normalize-space()='DELETE'
          or @data-qa='confirmDelete'
          or @data-qa='confirmDeleteButton'
        ]`) || null;
    e1 && ((0, a.triggerEvents)(e1, [
        "click",
        "mousedown",
        "mouseup"
    ]), await (0, m.delay)(200));
}
async function tL(e1) {
    let t = tT(e1);
    if (!t) return !0;
    let r1 = tj(e1);
    if (!r1) return !1;
    (0, a.triggerEvents)(r1, [
        "click",
        "mousedown",
        "mouseup"
    ]), r1.click?.(), await (0, m.delay)(150), await t_();
    let n = await (0, l.waitForCondition)(()=>!!tI(e1), {
        timeout: 1e4,
        interval: 200,
        observeTarget: document.body
    });
    return n;
}
async function tR(e1, t, r1, n) {
    let o = await tL(e1);
    if (!o) return console.warn(`[oraclecloud][${tC[e1].logKey}] delete failed, skip upload`), !1;
    await (0, l.waitForCondition)(()=>!!tI(e1) && !!tk(e1), {
        timeout: 5e3,
        interval: 100,
        observeTarget: document.body
    });
    let i = tk(e1);
    if (!i?.files) return console.warn(`[oraclecloud][${tC[e1].logKey}] input unavailable after delete`), !1;
    i.files = t.files, i.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !1
    }));
    let a = await (0, l.waitForCondition)(()=>!!tT(e1), {
        timeout: 1e4,
        interval: 200,
        observeTarget: document.body
    });
    return !!a && (r1({
        label: tC[e1].fieldLabel,
        required: !0
    }), n(tC[e1].fieldLabel), !0);
}
async function tO(e1, t, r1) {
    return tD("coverLetter") ? await tR("coverLetter", await (0, i.fetchCoverLetterPdfAsBlob)(e1), t, r1) : (console.warn("[oraclecloud][cover-letter] visible attachment slot unavailable"), !1);
}
function tM() {
    return tk("coverLetter");
}
async function tN(e1, t, r1 = {}) {
    let n = (0, s.resolveOracleCountryValue)(e1);
    if (!n) return !1;
    let o = t || (0, f.getFirstOrderedNode)('.//input[@name="country" or @id="country-12"]');
    if (!o || !tq(o)) return !1;
    let i = o.value, a = eM(o), l = r1.refreshDependentAddress && !!eA(i) && a;
    if (y("country:dependent-reset:decision", {
        refreshRequested: !!r1.refreshDependentAddress,
        hasExistingCountry: !!eA(i),
        hasDependentDropdownHint: a,
        willRefresh: l
    }), l) {
        let e1 = await e$(o);
        if (!e1) return !1;
        if (!t) {
            let e1 = (0, f.getFirstOrderedNode)('.//input[@name="country" or @id="country-12"]');
            if (!e1 || !tq(e1)) return y("country:dependent-reset:country-input-missing"), !1;
            o = e1;
        }
    }
    let u = await et(o, n, "country");
    return !!u || (l ? y("country:dependent-reset:selection-failed") : await t$(o, i), !1);
}
async function t$(e1, t) {
    let r1 = t.trim();
    if (r1) {
        if (await eu(e1), eB(e1, r1, "country")) return !0;
        let n = await et(e1, r1, "country");
        if (n) return !0;
        let o = await tB(e1, t);
        return console.warn("[oraclecloud][country] failed to verify semantic restore; preserved the original value conservatively"), o;
    }
    en(e1, ""), await eu(e1);
    let n = "" === eA(e1.value);
    return !r1 && !!n || (console.warn("[oraclecloud][country] failed to clear the failed query"), n);
}
async function tB(e1, t) {
    return en(e1, t), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), e1.dispatchEvent(es("keydown", "Escape")), e1.dispatchEvent(es("keyup", "Escape")), e1.blur(), await (0, m.delay)(50), eA(e1.value) === eA(t);
}
function tq(e1) {
    if (!e1) return !1;
    let t = "function" == typeof e1.checkVisibility;
    return t ? e1.checkVisibility() ?? !1 : !!e1.offsetParent;
}
async function tU() {
    let e1 = new URL(window.location.href);
    if ((0, u.isOracleApplyPath)(e1.pathname)) return !0;
    if (!(0, u.isOracleJobDetailPath)(e1.pathname)) return !1;
    let t = (0, f.getFirstOrderedNode)("//button[normalize-space()='APPLY NOW' or normalize-space()='Apply Now']") || (0, f.getFirstOrderedNode)("//a[normalize-space()='APPLY NOW' or normalize-space()='Apply Now']") || (0, f.getFirstOrderedNode)("//*[@role='button' and (normalize-space()='APPLY NOW' or normalize-space()='Apply Now')]");
    if (!tq(t)) return console.warn("[oraclecloud] job-detail: apply-now button unavailable"), !1;
    try {
        t.scrollIntoView({
            block: "center",
            inline: "center"
        });
    } catch  {}
    t instanceof HTMLAnchorElement && t.href && (0, u.isOracleApplyPath)(new URL(t.href, window.location.origin).pathname) ? (console.info("[oraclecloud] job-detail: apply-now dispatch", {
        route: "anchor-navigation"
    }), window.location.href = t.href) : (console.info("[oraclecloud] job-detail: apply-now dispatch", {
        route: "native-click"
    }), t.click?.());
    for(let e1 = 0; e1 < 80; e1++){
        await (0, m.delay)(200);
        let e1 = new URL(window.location.href).pathname, t = (0, u.isOracleApplyPath)(e1), r1 = !!(0, f.getFirstOrderedNode)("//apply-flow-block | //section[contains(@class, 'email-verification')] | //quick-email-verification-form") || !!(0, f.getFirstOrderedNode)("//button[@data-automation-id='pageFooterNextButton']");
        if (t && r1) return await (0, m.delay)(500), !0;
    }
    return console.warn("[oraclecloud] job-detail: clicked apply-now but did not enter apply flow"), !1;
}
async function tH() {
    let e1 = window.location.href;
    if (!e1.includes("/apply/email")) return !1;
    let t = (0, f.getFirstOrderedNode)("//input[@aria-label='Email Address' or @name='email']") || null, r1 = t?.value?.trim() || "";
    if (!r1) return console.warn("[oraclecloud] email-gate: empty email, skip next-step"), !1;
    let n = ()=>(0, f.getFirstOrderedNode)("//button[@data-automation-id='pageFooterNextButton' or @data-automation-id='bottom-navigation-next-button']") || (0, f.getFirstOrderedNode)("//button[normalize-space()='Next' or contains(normalize-space(), 'Next')]"), o = null;
    for(let e1 = 0; e1 < 15; e1++){
        let e1 = n();
        if (e1) {
            let t = "function" == typeof e1.checkVisibility ? e1.checkVisibility() : !!e1.offsetParent;
            if (t && !e1.disabled) {
                o = e1;
                break;
            }
        }
        await (0, m.delay)(200);
    }
    if (!o) return console.warn("[oraclecloud] email-gate: next button unavailable"), !1;
    try {
        o.scrollIntoView({
            block: "center",
            inline: "center"
        });
    } catch  {}
    return o.click(), !0;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "T");
$RefreshReg$(_c4, "F");
$RefreshReg$(_c5, "I");
$RefreshReg$(_c6, "D");
$RefreshReg$(_c7, "P");
$RefreshReg$(_c8, "L");
$RefreshReg$(_c9, "R");
$RefreshReg$(_c10, "O");
$RefreshReg$(_c11, "N");
$RefreshReg$(_c12, "B");
$RefreshReg$(_c13, "U");
$RefreshReg$(_c14, "H");
$RefreshReg$(_c15, "Y");
$RefreshReg$(_c16, "V");
$RefreshReg$(_c17, "W");
$RefreshReg$(_c18, "G");
$RefreshReg$(_c19, "K");
$RefreshReg$(_c20, "X");
$RefreshReg$(_c21, "J");
$RefreshReg$(_c22, "Q");
$RefreshReg$(_c23, "Z");

},{}]},["a6JmM","kLBFo"], "kLBFo", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFBc0UsSUFBSSxJQUFFLEVBQUUsNEJBQTRCLEdBQUU7Z0JBQUcsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLElBQUk7Z0JBQUU7WUFBRSxJQUFHO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFO1lBQStCLElBQUcsTUFBSSxLQUFLLEdBQUU7Z0JBQUMsSUFBSSxJQUFFO2dCQUFFLEVBQUUsaUNBQStCLElBQUU7b0JBQUMsV0FBVSxJQUFJO29CQUFJLGVBQWMsQ0FBQztvQkFBRSxRQUFPLFNBQVMsQ0FBQzt3QkFBRSxPQUFPO29CQUFHO29CQUFFLHFCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFO29CQUFFLG1CQUFrQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRTtvQkFBRSxzQkFBcUIsWUFBVztnQkFBQztZQUFDO1lBQUMsSUFBRyxFQUFFLFlBQVc7Z0JBQUMsUUFBUSxLQUFLO2dCQUE4SjtZQUFNO1lBQUMsSUFBSSxJQUFFLEVBQUU7WUFBTyxFQUFFLFNBQU8sU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLE1BQU0sSUFBSSxFQUFDO2dCQUFXLE9BQU8sT0FBTyxFQUFFLG1CQUFpQixjQUFZLE9BQU8sRUFBRSxxQkFBbUIsY0FBWSxFQUFFLElBQUksR0FBRSxJQUFHO1lBQUMsR0FBRSxFQUFFLFVBQVUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxtQkFBaUIsY0FBWSxPQUFPLEVBQUUscUJBQW1CLGNBQVksRUFBRSxJQUFJLEdBQUU7WUFBRTtZQUFHLElBQUksSUFBRSxFQUFFLG1CQUFrQixJQUFFLEVBQUUsdUJBQXFCLFlBQVc7WUFBRSxFQUFFLHNCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQSxFQUFFLE9BQU8sSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLEdBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFJLEVBQUM7WUFBVSxHQUFFLEVBQUUsb0JBQWtCLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsRUFBRSxJQUFJLEdBQUU7b0JBQUcsSUFBSSxJQUFFLEVBQUUsU0FBUSxJQUFFLEVBQUU7b0JBQVUsSUFBRyxNQUFJLE1BQUs7d0JBQUMsSUFBSSxJQUFFLEVBQUUsaUJBQWUsUUFBTSxFQUFFLGNBQWMsV0FBUyxRQUFNLEVBQUUsSUFBSSxJQUFHLElBQUUsRUFBRSxpQkFBZSxRQUFNLEVBQUUsY0FBYyxXQUFTO3dCQUFLLENBQUMsS0FBRyxJQUFHLENBQUEsRUFBRSxJQUFJLElBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxLQUFHLEtBQUksQ0FBQSxLQUFHLENBQUMsSUFBRyxDQUFBLEVBQUUsT0FBTyxJQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEtBQUcsRUFBRSxJQUFJLEVBQUM7b0JBQUUsT0FBTSxFQUFFLElBQUk7Z0JBQUU7Z0JBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxFQUFDO1lBQVU7UUFBRTtRQUFDLFNBQVM7WUFBSyxPQUFNLENBQUM7UUFBQztRQUFDLFNBQVM7WUFBSyxPQUFPLEVBQUU7UUFBSTtRQUFDLFNBQVM7WUFBTSxJQUFJLEdBQUUsR0FBRSxJQUFFLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFHLE9BQU8sS0FBRyxVQUFTLE9BQU8sS0FBSSxDQUFBLElBQUUsR0FBRSxJQUFFLE9BQU8sS0FBRyxVQUFTLEdBQUcsS0FBRyxRQUFPLENBQUEsT0FBTyxLQUFHLGNBQVksT0FBTyxLQUFHLFFBQU8sS0FBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLElBQUc7Z0JBQUUsQ0FBQyxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxFQUFFLEVBQUM7WUFBRTtRQUFFO1FBQUMsU0FBUyxHQUFHLENBQUM7WUFBRSxPQUFPLE9BQU87Z0JBQUcsS0FBSTtvQkFBWSxJQUFHLEVBQUUsYUFBVyxNQUFLO3dCQUFDLElBQUcsRUFBRSxVQUFVLGtCQUFpQixPQUFNLENBQUM7d0JBQUUsSUFBSSxJQUFFLE9BQU8sb0JBQW9CLEVBQUU7d0JBQVcsSUFBRyxFQUFFLFNBQU8sS0FBRyxDQUFDLENBQUMsRUFBRSxLQUFHLGlCQUFlLEVBQUUsVUFBVSxjQUFZLE9BQU8sV0FBVSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFFLEVBQUUsUUFBTSxFQUFFO29CQUFZLE9BQU8sT0FBTyxLQUFHLFlBQVUsU0FBUyxLQUFLO2dCQUFHLEtBQUk7b0JBQVUsSUFBRyxLQUFHLE1BQUssT0FBTyxFQUFFLEdBQUU7d0JBQWEsS0FBSzt3QkFBRSxLQUFLOzRCQUFFLE9BQU0sQ0FBQzt3QkFBRTs0QkFBUSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsT0FBTSxDQUFDO2dCQUFFO29CQUFRLE9BQU0sQ0FBQztZQUFDO1FBQUM7UUFBQyxFQUFFLHVCQUFxQixJQUFHLEVBQUUsaUNBQStCLEdBQUUsRUFBRSxzQ0FBb0MsSUFBRyxFQUFFLDRCQUEwQixJQUFHLEVBQUUsZ0JBQWMsR0FBRSxFQUFFLGtCQUFnQixHQUFFLEVBQUUseUJBQXVCLElBQUcsRUFBRSx1QkFBcUIsSUFBRyxFQUFFLHdCQUFzQixJQUFHLEVBQUUsc0JBQW9CLEdBQUUsRUFBRSxXQUFTLEdBQUUsRUFBRSxlQUFhO0lBQUMsQ0FBQTtBQUFJO0FBQUcsSUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFHO0lBQUs7SUFBYSxFQUFFLFVBQVE7QUFBRztBQUFHLElBQUksSUFBRSxDQUFDO0FBQUUsR0FBRyxHQUFFO0lBQUMsU0FBUSxJQUFJO0FBQUU7QUFBRyxPQUFPLFVBQVEsR0FBRztBQUFHLElBQUksSUFBRSxFQUFFO0FBQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxPQUFPO0FBQVMsSUFBSSxLQUFHLEVBQUUsU0FDcDVMOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FDYkE7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FnQkMsR0FFRCxJQUFJLElBQUksRUFBRTtBQUNWLEVBQUUsa0JBQWtCLElBQUksRUFBRSxPQUFPLEdBQUcsa0JBQWtCLElBQU0sSUFBSSxFQUFFLE9BQU8sR0FBRyx3QkFDeEUsSUFBTSxJQUFJLEVBQUUsT0FBTyxHQUFHLG1CQUFtQixJQUFNLEtBQUssRUFBRSxPQUFPLEdBQUcsdUJBQXVCLElBQ3pGLEtBQUssRUFBRSxPQUFPLEdBQUcsb0JBQW9CLElBQU0sS0FBSyxFQUFFLE9BQU8sR0FBRyx1QkFBdUIsSUFBTSxLQUFLLEVBQzdGLE9BQU8sR0FBRyxpQkFBaUIsSUFBTSxLQUFLLEVBQUUsT0FBTyxHQUFHLGlCQUFpQixJQUFNLEtBQUssRUFBRSxPQUFPLEdBQ3RGLG1CQUFtQixJQUFNLEtBQUssRUFBRSxPQUFPLEdBQUcsa0JBQWtCLElBQU0sS0FBSyxFQUFFLE9BQU8sR0FDaEYsb0JBQW9CLElBQU0sS0FBSyxFQUFFLE9BQU8sR0FBRyxnQkFBZ0IsSUFBTSxLQUFLLEVBQUUsT0FBTyxHQUMvRSxpQkFBaUIsSUFBTSxLQUFLLEVBQUUsT0FBTyxHQUFHLGNBQWMsSUFBTSxLQUFLLEVBQUUsT0FBTyxHQUFHLGlCQUMvRSxJQUFNLEtBQUssRUFBRSxPQUFPLEdBQUcsZ0JBQWdCLElBQU0sS0FBSyxFQUFFLE9BQU8sR0FBRyw0QkFBNEIsSUFDeEYsS0FBSyxFQUFFLE9BQU8sR0FBRyxxQkFBcUIsSUFBTSxLQUFLLEVBQUUsT0FBTyxHQUFHLDhCQUE4QixJQUMzRixLQUFLLEVBQUUsT0FBTyxHQUFHLGVBQWUsSUFBTSxLQUFLLEVBQUUsT0FBTyxHQUFHLGlDQUFpQyxJQUN4RixLQUFLLEVBQUUsT0FBTyxHQUFHLDhCQUE4QixJQUFNO0FBQ3pELElBQUksSUFBSSxFQUFFLHdCQUNSLElBQUksRUFBRSw2QkFDTixJQUFJLEVBQUUsMEJBQ04sSUFBSSxFQUFFLCtCQUNOLElBQUksRUFBRSx1Q0FDTixJQUFJLEVBQUUsb0NBQ04sSUFBSSxFQUFFLHdEQUNOLElBQUksRUFBRSx5REFDTixJQUFJLEVBQUUsZ0JBQ04sSUFBSSxFQUFFLGdCQUNOLElBQUksRUFBRTtBQUNSLGVBQWU7SUFDYixJQUFJLEtBQUk7UUFDTixJQUFJLEtBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFBRyxDQUFDOzs7Ozs7V0FNN0IsQ0FBQyxLQUFLO1FBQ2IsTUFBTSxDQUFBLEFBQUMsQ0FBQSxHQUFHLEVBQUUsYUFBWSxFQUFHLElBQUc7WUFBQztTQUFRLEdBQUcsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRyxJQUFHO0lBQ2xFLEdBQUcsSUFBSSxPQUFNO1FBQ1gsSUFBSSxLQUFJLEtBQUssUUFBUTtRQUNyQixNQUFPLEtBQUssUUFBUSxJQUFJO1lBQ3RCLElBQUksS0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLGVBQWMsRUFDMUIsZ0VBQWdFO1lBQ2xFLElBQUksTUFBTSxHQUFFLFFBQVE7WUFDcEIsSUFBSSxJQUFJLEdBQUUsUUFDUixJQUFJLEVBQUMsQ0FBQyxFQUFFO1lBQ1YsRUFBRSxjQUFjLElBQUksV0FBVyxhQUFhO2dCQUMxQyxTQUFTLENBQUM7Z0JBQ1YsWUFBWSxDQUFDO2dCQUNiLE1BQU07WUFDUixLQUFLLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUc7WUFDeEIsSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUJBQWtCLEVBQzVCLDRFQUE0RSxNQUM5RTtZQUNGLElBQUksQ0FBQyxHQUFHO1lBQ1AsQ0FBQSxHQUFHLEVBQUUsYUFBWSxFQUFHLEdBQUc7Z0JBQUM7YUFBUSxHQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUcsTUFBTSxNQUFNO1lBQ25FLElBQUksSUFBSSxDQUFDO1lBQ1QsSUFBSyxJQUFJLEtBQUksR0FBRyxLQUFJLElBQUksS0FBSztnQkFDM0IsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRztnQkFDbkIsSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYyxFQUMxQixnRUFBZ0U7Z0JBQ2xFLElBQUksR0FBRSxTQUFTLEdBQUc7b0JBQ2hCLElBQUksQ0FBQztvQkFDTDtnQkFDRjtZQUNGO1lBQ0EsSUFBSSxDQUFDLEdBQUc7Z0JBQ04sUUFBUSxLQUNOO2dCQUVGO1lBQ0Y7UUFDRjtJQUNGLEdBQUcsS0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM3QiwyUEFDSztJQUNQLE1BQUssTUFBTSxFQUFFO0lBQ2IsSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUJBQWtCLEVBQzlCLGlOQUNLO0lBQ1AsS0FBSyxNQUFNLEVBQUU7SUFDYixJQUFJLElBQUksU0FBUyx1QkFBdUI7SUFDeEMsTUFBTyxFQUFFLFNBQVMsR0FBSTtRQUNwQixJQUFJLEtBQUksQ0FBQyxDQUFDLEVBQUU7UUFDWixJQUFHLGNBQWMsSUFBSSxXQUFXLGFBQWE7WUFDekMsU0FBUyxDQUFDO1lBQ1YsWUFBWSxDQUFDO1lBQ2IsTUFBTTtRQUNSLEtBQUssTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRyxLQUFLLElBQUcsdUJBQzlCLHVDQUF1QyxDQUFDLEVBQUUsRUFBRSxjQUFjLElBQUksV0FBVyxXQUMzRSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO0lBQ3ZCO0FBQ0Y7QUFFQSxTQUFTLEVBQUUsRUFBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xCLElBQUksS0FBSSxlQUFlLE9BQU8sWUFBWSxjQUFjLE9BQU8sU0FBUyxrQkFBa0IsR0FBRSxLQUMxRixTQUFTLGVBQWUsQ0FBQyxFQUFFLEdBQUUsR0FBRyxjQUFjLENBQUMsSUFBSSxNQUNuRCxJQUFJLEdBQUUsYUFBYSxvQkFBb0IsSUFBRyxhQUFhLG9CQUFxQixDQUFBLEdBQUUsS0FDNUUsQ0FBQyxFQUFFLEdBQUUsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFDLEdBQ3ZCLElBQUksZUFBZSxPQUFPLFlBQVksY0FBYyxPQUFPLFNBQVMsa0JBQWtCLElBQ3RGLFNBQVMsZUFBZSxLQUFLLE1BQzdCLElBQUksSUFBSSxNQUFNLEtBQUssRUFBRSxpQkFDbkIsNERBQTRELElBQUksQ0FBQSxLQUFLLEdBQUUsYUFBYSxRQUNwRixRQUFRLEtBQUssUUFBUSxPQUFPLFNBQVMsTUFBTSxHQUFHLEtBQUssRUFBRTtJQUN6RCxPQUFPO1FBQ0wsV0FBVyxHQUFFLGFBQWE7UUFDMUIsSUFBSSxHQUFFO1FBQ04sTUFBTSxHQUFFO1FBQ1IsT0FBTyxHQUFFO1FBQ1QsY0FBYyxHQUFFLGFBQWE7UUFDN0IsY0FBYyxHQUFFLGFBQWE7UUFDN0IsYUFBYSxHQUFFLGFBQWE7UUFDNUIsY0FBYyxDQUFDLENBQUM7UUFDaEIsb0JBQW9CLElBQUcsYUFBYTtRQUNwQyxpQkFBaUIsSUFBRyxhQUFhO1FBQ2pDLGVBQWUsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFpQixHQUFHLGFBQWE7UUFDakMsaUJBQWlCO1FBQ2pCLFdBQVcsWUFBWSxPQUFPLEdBQUUsWUFBWSxHQUFFLFlBQVksS0FBSztRQUMvRCxpQkFBaUIsZUFBZSxPQUFPLFlBQVksZUFBZSxPQUFPLFdBQVcsU0FDakYseUJBQXlCLFVBQVUsU0FBUyxjQUFjLEtBQUssS0FBSztRQUN2RSxHQUFHLENBQUM7SUFDTjtBQUNGO0FBRUEsU0FBUyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDLEtBQUs7SUFDVixJQUFJLElBQUksRUFBRSxHQUFHO0lBQ2IsSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLDZCQUE0QixFQUFHLEVBQUUsTUFBTSxFQUFFLGFBQWEsVUFBVTtRQUN4RSxRQUFRLEtBQUssQ0FBQyxpQ0FBaUMsRUFBRSxHQUFFLENBQUMsRUFBRSxLQUFLLFVBQVUsR0FBRyxDQUFDO1FBQ3pFO0lBQ0Y7SUFDQSxRQUFRLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxHQUFFLENBQUMsRUFBRSxLQUFLLFVBQVUsR0FBRyxDQUFDO0FBQ25FO0FBRUEsU0FBUyxFQUFFLEVBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQixJQUFJLEtBQUksR0FBRSxXQUFXLCtCQUErQixHQUFFLFdBQVc7SUFDakUsSUFBSSxPQUFPLElBQUcsSUFBSTtRQUNoQixRQUFRLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxHQUFFLENBQUMsRUFBRSxLQUFLLFVBQVU7WUFBQyxHQUFFLEtBQUs7WUFBTSxHQUFHLENBQUM7UUFBQSxHQUFHLENBQUM7SUFDaEYsRUFBRSxPQUFNLENBQUM7QUFDWDtBQUVBLFNBQVM7SUFDUCxJQUFJLGVBQWUsT0FBTyxRQUFRLE9BQU8sQ0FBQztJQUMxQyxJQUFJO1FBQ0YsSUFBSSxLQUFJLElBQUksZ0JBQWdCLE9BQU8sVUFBVSxVQUFVO1FBQ3ZELE9BQU8sUUFBUSxHQUFFLElBQUksMENBQTBDLE9BQU8sY0FBYyxRQUNsRiwyQ0FBMkM7SUFDL0MsRUFBRSxPQUFNO1FBQ04sT0FBTyxDQUFDO0lBQ1Y7QUFDRjtBQUVBLFNBQVMsRUFBRSxFQUFDO0lBQ1YsT0FBTztRQUFDO1FBQWE7S0FBVSxDQUFDLFNBQVMsT0FBTyxNQUFLLElBQUksUUFBUSxjQUFjLElBQUk7QUFDckY7QUFFQSxTQUFTLEVBQUUsRUFBQyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsQ0FBQztJQUNyQixJQUFJLE9BQU8sRUFBRSxJQUFJLElBQUk7UUFDbkIsUUFBUSxLQUNOLENBQUMsNEJBQTRCLEVBQUUsR0FBRSxDQUFDLEVBQUUsS0FBSyxVQUFVO1lBQUMsR0FBRSxLQUFLO1lBQU0sV0FBVTtZQUFFLEdBQUcsRUFBQztRQUFBLEdBQUcsQ0FBQztJQUN6RixFQUFFLE9BQU0sQ0FBQztBQUNYO0tBTFM7QUFPVCxTQUFTLEVBQUUsRUFBQztJQUNWLE9BQU8sR0FBRSxJQUFJLENBQUEsS0FBSyxHQUFFLGFBQWE7QUFDbkM7TUFGUztBQUlULFNBQVMsRUFBRSxFQUFDO0lBQ1YsSUFBSSxJQUFJLElBQUk7SUFDWixLQUFLLElBQUksTUFBSyxHQUFHO1FBQ2YsSUFBSSxLQUFJLEdBQUUsVUFBVSxzQkFBc0IsR0FBRSxVQUFVLG1CQUFtQixJQUN2RSxJQUFJLEVBQUUsSUFBSTtRQUNYLENBQUEsQ0FBQyxLQUFLLEVBQUUsTUFBSyxFQUFFLEVBQUMsS0FBTSxFQUFFLElBQUksSUFBRztJQUNsQztJQUNBLE9BQU87V0FBSSxFQUFFO0tBQVM7QUFDeEI7QUFFQSxTQUFTLEVBQUUsRUFBQztJQUNWLElBQUksSUFBSSxZQUFZLE9BQU8sR0FBRSxZQUFZLEdBQUUsWUFBWTtJQUN2RCxPQUFPLEdBQUUsV0FBVyxTQUFTLG9DQUFvQyxFQUFFLE1BQU0sT0FBTyxTQUM5RSxtQ0FBbUMsSUFBSSxHQUFFLFVBQVUseUJBQXlCLEtBQUksSUFBSTtBQUN4RjtNQUpTO0FBS1QsSUFBSSxJQUFJLENBQUM7Ozs7bURBSTBDLENBQUMsRUFDbEQsSUFBSSxDQUFDOzs7O0NBSU4sQ0FBQztBQUVGLFNBQVM7SUFDUCxPQUFPLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYyxFQUFHLEdBQUcsT0FBTyxDQUFBLEtBQUssY0FBYyxPQUFPLEdBQUUsbUJBQW1CLEdBQ3BGO0FBQ0w7TUFIUztBQUtULFNBQVM7SUFDUCxPQUFPLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUJBQWtCLEVBQUc7QUFDcEM7TUFGUztBQUdULGVBQWUsRUFBRSxFQUFDO0lBQ2hCLElBQUksQ0FBRSxDQUFBLE1BQUssQ0FBQSxHQUNULE1BQU8sSUFBSSxTQUFTLElBQUk7UUFDdEIsSUFBSSxLQUFJLElBQUksUUFDVixJQUFJO1FBQ04sSUFBSSxDQUFDLEtBQU0sQ0FBQSxBQUFDLENBQUEsR0FBRyxFQUFFLGFBQVksRUFBRyxHQUFHO1lBQUM7U0FBUSxHQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxnQkFBZSxFQUFHLElBQU0sSUFDOUUsU0FBUyxJQUFHO1lBQ1gsU0FBUztZQUNULFVBQVU7WUFDVixlQUFlLFNBQVM7UUFDMUIsSUFBSSxJQUFJLFVBQVUsRUFBQSxHQUFJO0lBQzVCO0FBQ0o7TUFaZTtBQWNmLFNBQVMsRUFBRSxFQUFDO0lBQ1YsT0FBTyxPQUFPLE1BQUssSUFBSSxRQUFRLGlCQUFpQixJQUFJO0FBQ3REO0FBRUEsU0FBUyxFQUFFLEVBQUM7SUFDVixJQUFJLElBQUksRUFBRTtJQUNWLE9BQU8sYUFBYSxLQUFLLGlCQUFpQixLQUFLLEVBQUUsU0FBUztBQUM1RDtNQUhTO0FBS1QsU0FBUyxFQUFFLEVBQUM7SUFDVixPQUFPLFlBQVksRUFBRTtBQUN2QjtNQUZTO0FBSVQsU0FBUyxFQUFFLEVBQUM7SUFDVixJQUFJLElBQUksRUFBRTtJQUNWLE9BQU8sYUFBYSxLQUFLLEVBQUUsU0FBUztBQUN0QztBQUVBLFNBQVMsRUFBRSxFQUFDO0lBQ1YsSUFBSSxJQUFJLEdBQUcsR0FBRSxhQUFhLFFBQVEsV0FBVztJQUM3QyxPQUFPLGlCQUFpQixLQUFLLHVCQUF1QixLQUFLLDRCQUE0QjtBQUN2RjtNQUhTO0FBS1QsU0FBUyxFQUFFLEVBQUM7SUFDVixJQUFJLElBQUksR0FBRyxHQUFFLGFBQWEsUUFBUSxXQUFXO0lBQzdDLE9BQU8saUJBQWlCLEtBQUssZ0NBQWdDLEtBQUs7QUFDcEU7TUFIUztBQUtULFNBQVMsRUFBRSxFQUFDO0lBQ1YsT0FBTyxFQUFFLE1BQUssVUFBVSxFQUFFLE1BQUssV0FBVztBQUM1QztPQUZTO0FBR1QsSUFBSSxJQUFJLENBQUM7OzJDQUVrQyxDQUFDO0FBRTVDLFNBQVMsRUFBRSxFQUFDO0lBQ1YsT0FBTyxPQUFPLE1BQUssSUFBSSxRQUFRLFFBQVEsS0FBSztBQUM5QztPQUZTO0FBSVQsU0FBUyxFQUFFLEVBQUM7SUFDVixJQUFJLFdBQVcsR0FBRSxhQUFhLGdCQUFnQixPQUFPLENBQUM7SUFDdEQsSUFBSSxjQUFjLE9BQU8sR0FBRSxpQkFBaUIsT0FBTyxDQUFDO0lBQ3BELElBQUk7UUFDRixPQUFPLEdBQUUsZ0JBQWdCO1lBQ3ZCLGNBQWMsQ0FBQztZQUNmLG9CQUFvQixDQUFDO1FBQ3ZCO0lBQ0YsRUFBRSxPQUFNO1FBQ04sT0FBTyxHQUFFO0lBQ1g7QUFDRjtBQUVBLFNBQVMsRUFBRSxFQUFDO0lBQ1YsSUFBSSxJQUFJLElBQUksS0FDVixLQUFJLEVBQUUsRUFDTixJQUFJLEVBQUUsQUFBQyxDQUFBLEdBQUcsRUFBRSxlQUFjLEVBQUcsR0FBRyxNQUNoQyxJQUFJLEdBQ0osSUFBSSxHQUNKLElBQUk7SUFDTixLQUFLLElBQUksTUFBSyxFQUFHO1FBQ2YsSUFBSSxDQUFDLEVBQUUsS0FBSTtZQUNULEtBQUs7WUFDTDtRQUNGO1FBQ0EsSUFBSSxFQUFFLEtBQUk7WUFDUixLQUFLO1lBQ0w7UUFDRjtRQUNBLElBQUksSUFBSSxFQUFFLEdBQUU7UUFDWixJQUFJLENBQUMsR0FBRztZQUNOLEtBQUs7WUFDTDtRQUNGO1FBQ0EsSUFBSSxJQUFJLEVBQUUsVUFBVSxRQUFRO1FBQzVCLEVBQUUsSUFBSSxNQUFPLENBQUEsRUFBRSxJQUFJLElBQUksR0FBRSxLQUFLO1lBQzVCLFNBQVM7WUFDVCxNQUFNO1FBQ1IsRUFBQztJQUNIO0lBQ0EsT0FBTztRQUNMLFlBQVksR0FBRSxNQUFNLEdBQUc7UUFDdkIsZ0JBQWdCLEVBQUU7UUFDbEIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixvQkFBb0I7SUFDdEI7QUFDRjtPQWxDUztBQW9DVCxTQUFTLEVBQUUsRUFBQztJQUNWLE9BQU8sRUFBRSxJQUFHO0FBQ2Q7QUFFQSxTQUFTLEVBQUUsRUFBQztJQUNWLE9BQU8sR0FBRSxJQUFJLENBQUEsS0FBSyxHQUFFLE1BQU0sS0FBSztBQUNqQztPQUZTO0FBSVQsU0FBUyxFQUFFLEVBQUM7SUFDVixPQUFPLGNBQWMsT0FBTyxHQUFFLGVBQWUsR0FBRSxhQUFhLGVBQWU7QUFDN0U7T0FGUztBQUlULFNBQVMsRUFBRSxFQUFDO0lBQ1YsT0FBTyxjQUFjLE9BQU8sR0FBRSxlQUFlLEdBQUUsYUFBYSxVQUFVO0FBQ3hFO09BRlM7QUFHVCxlQUFlLEVBQUUsRUFBQztJQUNoQixJQUFJLElBQUksZUFBZSxPQUFPLFlBQVksY0FBYyxPQUFPLFNBQVMsa0JBQWtCLEdBQUUsS0FDMUYsU0FBUyxlQUFlLENBQUMsRUFBRSxHQUFFLEdBQUcsY0FBYyxDQUFDLElBQUksTUFDbkQsS0FBSSxHQUFFLGFBQWEsb0JBQW9CLEdBQUcsYUFBYSxvQkFBcUIsQ0FBQSxHQUFFLEtBQzVFLENBQUMsRUFBRSxHQUFFLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBQztJQUN6QixPQUFPLEtBQUksTUFBTSxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLO0FBQ25EO0FBQ0EsZUFBZSxFQUFFLEVBQUMsRUFBRSxDQUFDO0lBQ25CLElBQUk7UUFDRixJQUFJLEtBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGdCQUFlLEVBQUc7WUFDbEMsTUFBTTtZQUNOLE1BQU07Z0JBQ0osV0FBVztnQkFDWCxhQUFhO1lBQ2Y7UUFDRixJQUNBLElBQUksT0FBTyxJQUFHLGFBQWEsSUFBSTtRQUNqQyxJQUFJLEdBQUcsT0FBTztJQUNoQixFQUFFLE9BQU8sSUFBRztRQUNWLEVBQUUscURBQXFEO1lBQ3JELFdBQVc7WUFDWCxtQkFBbUIsRUFBRTtZQUNyQixXQUFXLGNBQWEsUUFBUSxHQUFFLE9BQU8sT0FBTztRQUNsRDtJQUNGO0lBQ0EsT0FBTyxFQUFFLCtDQUErQztRQUN0RCxXQUFXO1FBQ1gsVUFBVSxDQUFDO1FBQ1gsbUJBQW1CLEVBQUU7SUFDdkIsSUFBSTtBQUNOO09BdkJlO0FBd0JmLGVBQWUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7SUFDdEIsSUFBSTtRQUNGLElBQUksSUFBSSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZ0JBQWUsRUFBRztZQUNsQyxNQUFNO1lBQ04sTUFBTTtnQkFDSixXQUFXO1lBQ2I7UUFDRixJQUNBLElBQUksTUFBTSxRQUFRLEdBQUcsU0FBUyxFQUFFLFFBQVEsRUFBRSxFQUMxQyxJQUFJLEdBQUcsY0FBYyxHQUNyQixJQUFJLFlBQVksT0FBTyxHQUFHLGdCQUFnQixFQUFFLGdCQUFnQjtRQUM5RCxPQUFPLEVBQUUsK0NBQStDO1lBQ3RELFdBQVc7WUFDWCxtQkFBbUIsR0FBRTtZQUNyQixtQkFBbUIsRUFBRTtZQUNyQixlQUFlO1lBQ2YsbUJBQW1CLEdBQUc7WUFDdEIsa0JBQWtCO1FBQ3BCLElBQUksSUFBSSxJQUFJLEVBQUU7SUFDaEIsRUFBRSxPQUFPLElBQUc7UUFDVixPQUFPLEVBQUUscURBQXFEO1lBQzVELFdBQVc7WUFDWCxtQkFBbUIsR0FBRTtZQUNyQixXQUFXLGNBQWEsUUFBUSxHQUFFLE9BQU8sT0FBTztRQUNsRCxJQUFJLEVBQUU7SUFDUjtBQUNGO09BMUJlO0FBNEJmLFNBQVMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7SUFDaEIsSUFBSSxJQUFJLEdBQUUsSUFBSSxDQUFDLEVBQ1gsTUFBTSxFQUFDLEVBQ1IsR0FBTSxDQUFBO1lBQ0wsTUFBTTtRQUNSLENBQUEsSUFDQSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsK0JBQThCLEVBQUc7UUFDekMsV0FBVztRQUNYLFVBQVU7UUFDVixtQkFBbUI7SUFDckI7SUFDRixPQUFPLEVBQUUsNkNBQTZDO1FBQ3BELFdBQVc7UUFDWCxHQUFHLEVBQUUsV0FBVztJQUNsQixJQUFJO0FBQ047T0FmUztBQWdCVCxlQUFlLEVBQUUsRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztJQUN6QixJQUFJO0lBQ0osSUFBSSxJQUFJLEVBQUUsSUFBRyxlQUNYLElBQUksRUFBRSxvQkFDTixJQUFJLE1BQU0sRUFBRSxHQUFHO0lBQ2pCLEVBQUUsK0NBQStDO1FBQy9DLFdBQVc7UUFDWCxVQUFVLENBQUMsQ0FBQztRQUNaLG1CQUFtQixHQUFFO0lBQ3ZCLElBQUksTUFBTSxHQUFHO0lBQ2IsSUFBSSxJQUFJLE1BQU0sRUFBRTtJQUNoQixJQUFJLENBQUMsR0FBRyxPQUFPLEVBQUUscUJBQXFCLEdBQUcsRUFBRSxrQkFBa0IsSUFBRyxFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFDcEYsMkJBQTJCLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSw2Q0FBNkM7UUFDckYsV0FBVztRQUNYLFdBQVcsR0FBRSxhQUFhLFdBQVcsR0FBRSxNQUFNO1FBQzdDLG1CQUFtQixHQUFFO1FBQ3JCLFlBQVksQ0FBQztJQUNmLElBQUksRUFBRTtJQUNSLElBQUksSUFBSSxFQUFFLElBQ1IsSUFBSSxFQUFFLFlBQ04sSUFBSSxFQUFFO0lBQ1IsRUFBRSw2Q0FBNkM7UUFDN0MsV0FBVztRQUNYLFdBQVcsR0FBRSxhQUFhLFdBQVcsR0FBRSxNQUFNO1FBQzdDLG1CQUFtQixHQUFFO1FBQ3JCLFlBQVksQ0FBQztRQUNiLHVCQUF1QixFQUFFO1FBQ3pCLHVCQUF1QixFQUFFO1FBQ3pCLFdBQVcsRUFBRSxNQUFNO1FBQ25CLG9CQUFvQixFQUFFO1FBQ3RCLHdCQUF3QixFQUFFO0lBQzVCLElBQUksR0FBRyxJQUFHO0lBQ1YsSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLEdBQUcsTUFBSyxRQUFRLFFBQVEsRUFBRSxHQUN6QyxJQUFJLE9BQU07UUFDUixJQUFJLEtBQUksTUFBTTtRQUNkLE9BQU8sRUFBRSxHQUFHLElBQUc7SUFDakIsR0FBRyxJQUFJLENBQUEsS0FBTSxDQUFBLEVBQUUsa0JBQWtCLElBQUcsRUFBRSxpQkFBaUIsSUFBRyxFQUFFLDJCQUEyQixJQUNyRixHQUFHLEtBQUksRUFBQSxHQUFJLElBQUksQ0FBQyxFQUNoQixXQUFXLEVBQUMsRUFDWixrQkFBa0IsQ0FBQyxFQUNuQix1QkFBdUIsQ0FBQyxFQUN4QixhQUFhLENBQUMsRUFDZjtRQUNDLEVBQUUsa0RBQWtEO1lBQ2xELFdBQVc7WUFDWCxtQkFBbUIsR0FBRTtZQUNyQixXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLHVCQUF1QjtZQUN2QixHQUFHLENBQUM7UUFDTjtJQUNGLEdBQUcsSUFBSSxJQUFJLElBQUk7SUFDakIsSUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxFQUFHO1FBQzlCLElBQUksS0FBSyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO1FBQzVCLElBQUksSUFBSSxNQUFNLEVBQUU7UUFDaEIsS0FBSyxNQUFNLEtBQU0sQ0FBQSxFQUFFLDRDQUE0QztZQUM3RCxXQUFXO1lBQ1gsbUJBQW1CLEdBQUU7WUFDckIsV0FBVztZQUNYLGVBQWUsRUFBRSxPQUFPLEVBQUU7WUFDMUIscUJBQXFCLEVBQUU7WUFDdkIsb0JBQW9CLEVBQUU7WUFDdEIsMEJBQTBCLEVBQUU7UUFDOUIsSUFBSSxJQUFJLENBQUE7UUFDUixJQUFJLElBQUksRUFBRSxJQUNSLElBQUksRUFBRSxZQUNOLElBQUk7WUFBQyxFQUFFO1lBQVEsRUFBRTtZQUFnQixFQUFFO1lBQW1CLEVBQUU7WUFBcUIsRUFDMUU7WUFBb0IsRUFBRSxNQUFNO1NBQzlCLENBQUMsS0FBSztRQUNSLENBQUEsTUFBTSxLQUFLLE1BQU0sQ0FBQSxLQUFPLENBQUEsRUFBRSwwQ0FBMEM7WUFDbkUsV0FBVztZQUNYLG1CQUFtQixHQUFFO1lBQ3JCLFdBQVc7WUFDWCxnQkFBZ0IsRUFBRTtZQUNsQixnQkFBZ0IsRUFBRTtZQUNsQixtQkFBbUIsRUFBRTtZQUNyQixxQkFBcUIsRUFBRTtZQUN2QixvQkFBb0IsRUFBRTtZQUN0QixXQUFXLEVBQUUsTUFBTTtZQUNuQixhQUFhLEVBQUU7WUFDZixpQkFBaUIsRUFBRTtRQUNyQixJQUFJLElBQUksQ0FBQTtRQUNSLElBQUksSUFBSSxFQUFFLElBQ1IsSUFBSSxNQUFNO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLE1BQU0sR0FBRztZQUN2QixJQUFJLEVBQUUsU0FBUyxLQUFNLENBQUEsSUFBSTtnQkFDckIsWUFBWSxFQUFFLElBQUksQ0FBQSxLQUFNLENBQUE7d0JBQ3RCLEdBQUcsRUFBQztvQkFDTixDQUFBO2dCQUNBLFdBQVc7WUFDYixDQUFBLEdBQUksTUFBTSxFQUFFLFVBQVUsR0FBRztnQkFDekIsRUFBRSxxQkFBcUI7Z0JBQ3ZCLElBQUksS0FBSSxNQUFNLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxNQUFNLEdBQUUsV0FBVyxVQUFVLEdBQUUsWUFBWSxlQUFlLEdBQUc7b0JBQy9ELEVBQUU7d0JBQ0EsV0FBVzt3QkFDWCxrQkFBa0IsQ0FBQzt3QkFDbkIsdUJBQXVCLEVBQUUsV0FBVzt3QkFDcEMsYUFBYSxHQUFFO29CQUNqQixJQUFJLElBQUk7b0JBQ1I7Z0JBQ0Y7Z0JBQ0EsSUFBSSxJQUFJLEVBQUUsR0FBRTtnQkFDWixPQUFPLEVBQUUsMENBQTBDO29CQUNqRCxXQUFXO29CQUNYLG1CQUFtQixHQUFFO29CQUNyQixXQUFXO29CQUNYLGdCQUFnQixFQUFFO29CQUNsQix1QkFBdUIsRUFBRSxXQUFXO29CQUNwQyxXQUFXLENBQUM7b0JBQ1osa0JBQWtCLENBQUM7b0JBQ25CLG1CQUFtQixFQUFFO2dCQUN2QixJQUFJO1lBQ047WUFDQSxJQUFJLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSTtnQkFDMUIsRUFBRSxxQkFBcUI7Z0JBQ3ZCLElBQUksS0FBSSxNQUFNLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxNQUFNLEdBQUUsV0FBVyxVQUFVLEdBQUUsWUFBWSxlQUFlLEdBQUc7b0JBQy9ELEVBQUU7d0JBQ0EsV0FBVzt3QkFDWCxrQkFBa0IsQ0FBQzt3QkFDbkIsdUJBQXVCO3dCQUN2QixhQUFhLEdBQUU7b0JBQ2pCLElBQUksSUFBSTtvQkFDUjtnQkFDRjtnQkFDQSxJQUFJLElBQUksRUFBRSxHQUFFO2dCQUNaLE9BQU8sRUFBRSwwQ0FBMEM7b0JBQ2pELFdBQVc7b0JBQ1gsbUJBQW1CLEdBQUU7b0JBQ3JCLFdBQVc7b0JBQ1gsZ0JBQWdCLEVBQUU7b0JBQ2xCLHVCQUF1QjtvQkFDdkIsV0FBVyxDQUFDO2dCQUNkLElBQUk7WUFDTjtZQUNBLElBQUksS0FBSyxNQUFNLEdBQUc7Z0JBQ2hCLEVBQUUscUJBQXFCO2dCQUN2QixJQUFJLEtBQUksTUFBTSxFQUFFO2dCQUNoQixJQUFJLE1BQU0sR0FBRSxXQUFXLFVBQVUsR0FBRSxZQUFZLGVBQWUsR0FBRztvQkFDL0QsRUFBRTt3QkFDQSxXQUFXO3dCQUNYLGtCQUFrQixDQUFDO3dCQUNuQix1QkFBdUIsRUFBRTt3QkFDekIsYUFBYSxHQUFFO29CQUNqQjtvQkFDQTtnQkFDRjtnQkFDQSxJQUFJLElBQUksRUFBRSxHQUFFO2dCQUNaLE9BQU8sRUFBRSwwQ0FBMEM7b0JBQ2pELFdBQVc7b0JBQ1gsbUJBQW1CLEdBQUU7b0JBQ3JCLFdBQVc7b0JBQ1gsZ0JBQWdCLEVBQUU7b0JBQ2xCLHVCQUF1QixFQUFFO29CQUN6QixXQUFXLENBQUM7b0JBQ1osU0FBUyxDQUFDO2dCQUNaLElBQUk7WUFDTjtZQUNBLElBQUk7UUFDTjtJQUNGO0lBQ0EsT0FBTyxFQUFFLHFCQUFxQixHQUFHLEVBQUUsa0JBQWtCLElBQUcsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQzVFLDJCQUEyQixJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsMENBQTBDO1FBQ2xGLFdBQVc7UUFDWCxtQkFBbUIsR0FBRTtRQUNyQixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGdCQUFnQixFQUFFLEdBQUc7UUFDckIsV0FBVyxFQUFFLE1BQU07UUFDbkIsYUFBYSxFQUFFO1FBQ2YsaUJBQWlCLEVBQUU7UUFDbkIsV0FBVyxDQUFDO1FBQ1osU0FBUyxDQUFDO0lBQ1osSUFBSSxFQUFFO0FBQ1Y7T0EvS2U7QUFnTGYsZUFBZSxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7SUFDekIsSUFBSSxJQUFJLEVBQUUsR0FBRSxhQUFhLGVBQ3ZCLElBQUksQUFBQyxDQUFBLEVBQUUsMkJBQTJCLElBQUksTUFBTSxFQUFFLEFBQUQsRUFBRyxPQUFPLENBQUEsS0FBSyxHQUFFLFVBQVUsRUFBRSxTQUFTLEdBQUUsU0FDbkYsRUFBRTtJQUNOLElBQUksTUFBTSxFQUFFLFFBQVEsT0FBTyxFQUFFLGtDQUFrQztRQUM3RCxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLHNCQUFzQixFQUFFLE1BQU07UUFDOUIsc0JBQXNCLEVBQUU7UUFDeEIsMkJBQTJCLEdBQUUsWUFBWTtRQUN6QyxRQUFRO0lBQ1YsSUFBSSxDQUFDO0lBQ0wsSUFBSSxJQUFJLE1BQU0sRUFBRSxLQUNkLElBQUksSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFBLEtBQUssR0FBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEVBQ2hELElBQUksQ0FBQyxLQUFLLE1BQU0sRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEdBQ3JELElBQUksQ0FBQztJQUNQLElBQUksR0FBRztRQUNMLElBQUksQ0FBQyxHQUFHLEVBQUUseUNBQXlDO1lBQ2pELHFCQUFxQixFQUFFLEtBQUs7WUFDNUIsc0JBQXNCLEVBQUUsTUFBTTtZQUM5QiwyQkFBMkIsR0FBRSxZQUFZO1lBQ3pDLFlBQVksQ0FBQyxDQUFDO1lBQ2QsK0JBQStCLEVBQUU7WUFDakMsZ0NBQWdDLEVBQUUsdUJBQXVCO1FBQzNELElBQUksTUFBTSxHQUFHLEtBQUksR0FBRyxJQUFHLEdBQUU7UUFDekIsSUFBSSxJQUFJO1FBQ1IsSUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxFQUFHO1lBQzlCLElBQUksSUFBSSxLQUFLLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUcsTUFBTSxDQUFFLENBQUEsSUFBSSxNQUFNLEVBQUUsR0FBQyxHQUFJO1lBQ3pELElBQUksSUFBSSxFQUFFO1lBQ1YsSUFBSSxFQUFFLE9BQU8sQ0FBQSxLQUFLLEdBQUUsU0FBUyxFQUFFO1lBQy9CLElBQUksSUFBSSxFQUFFO1lBQ1YsSUFBSSxLQUFLLE1BQU0sS0FBSyxNQUFNLEVBQUUsUUFBUTtnQkFDbEMsRUFBRSwrQ0FBK0M7b0JBQy9DLHFCQUFxQixFQUFFLEtBQUs7b0JBQzVCLDJCQUEyQixHQUFFLFlBQVk7b0JBQ3pDLFdBQVc7b0JBQ1gsdUJBQXVCLEVBQUU7Z0JBQzNCO2dCQUNBO1lBQ0Y7WUFDQSxJQUFJO1FBQ047SUFDRjtJQUNBLElBQUksQ0FBQyxLQUFLLE1BQU0sRUFBRSxRQUFRLE9BQU8sRUFBRSxrQ0FBa0M7UUFDbkUscUJBQXFCLEVBQUUsS0FBSztRQUM1QixzQkFBc0IsRUFBRSxNQUFNO1FBQzlCLDJCQUEyQixHQUFFLFlBQVk7UUFDekMsWUFBWSxDQUFDLENBQUM7UUFDZCxzQkFBc0IsRUFBRTtRQUN4QiwrQkFBK0IsRUFBRTtRQUNqQyxVQUFVO0lBQ1osSUFBSSxDQUFDO0lBQ0wsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDZCxJQUFJLElBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGdCQUFlLEVBQUcsSUFBTSxHQUFHLEdBQUUsV0FBVyxHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUcsT0FBTSxXQUFXLEdBQzVGLGFBQWEsa0JBQWtCO1FBQzlCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsZUFBZSxlQUFlLE9BQU8sV0FBVyxTQUFTLE9BQU8sS0FBSztJQUN2RTtJQUNGLElBQUksQ0FBQyxHQUFHLE9BQU8sRUFBRSxrQ0FBa0M7UUFDakQscUJBQXFCLEVBQUUsS0FBSztRQUM1QixzQkFBc0IsRUFBRSxNQUFNO1FBQzlCLFlBQVksQ0FBQztRQUNiLHdCQUF3QjtRQUN4QixVQUFVO1FBQ1YsV0FBVyxDQUFDO0lBQ2QsSUFBSSxDQUFDO0lBQ0wsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRztJQUNuQixJQUFJLElBQUksR0FBRyxHQUFFLFdBQVcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxHQUFHLE9BQU0sV0FBVyxHQUFFLGFBQWE7SUFDMUUsT0FBTyxFQUFFLGtDQUFrQztRQUN6QyxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLHNCQUFzQixFQUFFLE1BQU07UUFDOUIsWUFBWSxDQUFDO1FBQ2Isd0JBQXdCO1FBQ3hCLFVBQVU7UUFDVixXQUFXO0lBQ2IsSUFBSTtBQUNOO09BNUVlO0FBNkVmLGVBQWUsRUFBRSxFQUFDLEVBQUUsQ0FBQztJQUNuQixJQUFJLEtBQUksYUFBYSxHQUNuQixJQUFJLEtBQUksU0FBUyxTQUNqQixJQUFJLEtBQUksRUFBRSxRQUFRLFNBQVM7SUFDN0IsRUFBRSxtQ0FBbUM7UUFDbkMsV0FBVztRQUNYLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLHNCQUFzQixxQkFBcUIsSUFBSSxFQUFFLGdCQUFnQixTQUFTO0lBQzVFO0lBQ0EsSUFBSSxJQUFJLEtBQUs7SUFDYixJQUFJO1FBQ0YsSUFBSSxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxnQkFBZSxFQUFHO1lBQ3BDLE1BQU07WUFDTixNQUFNO1FBQ1I7UUFDQSxPQUFPLEVBQUUsb0NBQW9DO1lBQzNDLFdBQVc7WUFDWCxhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLFFBQVEsSUFBRyxVQUFVO1lBQ3JCLG1CQUFtQixLQUFLLFFBQVE7UUFDbEMsSUFBSTtJQUNOLEVBQUUsT0FBTyxHQUFHO1FBQ1YsTUFBTSxFQUFFLHlDQUF5QztZQUMvQyxXQUFXO1lBQ1gsYUFBYTtZQUNiLG9CQUFvQjtZQUNwQixXQUFXLGFBQWEsUUFBUSxFQUFFLE9BQU8sT0FBTztRQUNsRCxJQUFJO0lBQ047QUFDRjtPQWhDZTtBQWlDZixlQUFlLEVBQUUsRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztJQUN6QixJQUFJLElBQUksRUFBRSxHQUFFLFFBQ1YsSUFBSSxFQUFFLEdBQUUsa0JBQ1IsSUFBSSxDQUFDLENBQUMsS0FBSyxNQUFNO0lBQ25CLElBQUksQ0FBQyxHQUFHO1FBQ04sRUFBRSw2Q0FBNkM7WUFDN0MsV0FBVztZQUNYLGVBQWU7WUFDZixTQUFTLENBQUM7WUFDVixRQUFRO1FBQ1Y7UUFDQTtJQUNGO0lBQ0EsR0FBRSxTQUFTLEdBQUcsSUFBRyxLQUFLLEdBQUUsY0FBYyxJQUFJLE1BQU0sVUFBVTtRQUN4RCxTQUFTLENBQUM7SUFDWixLQUFLLEdBQUUsUUFBUSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHLE1BQU0sRUFBRSw2Q0FBNkM7UUFDckYsV0FBVztRQUNYLGVBQWU7UUFDZixTQUFTLENBQUMsRUFBRSxHQUFFO0lBQ2hCO0FBQ0Y7T0FwQmU7QUFxQmYsZUFBZSxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7SUFDekIsSUFBSSxJQUFJLEdBQUU7SUFDVixJQUFJLENBQUMsR0FBRyxPQUFPLEVBQUUscURBQXFEO1FBQ3BFLFdBQVc7UUFDWCxRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLFFBQVEsQ0FBQztJQUNYLElBQUksQ0FBQztJQUNMLElBQUksSUFBSSxPQUFPLEdBQUUsYUFBYSxXQUFXLEdBQUUsTUFBTSxJQUFJLFFBQVEsaUJBQWlCLElBQUk7SUFDbEYsSUFBSSxhQUFhLEtBQUssRUFBRSxTQUFTLCtCQUErQixPQUFPLEVBQ3JFLHFEQUFxRDtRQUNuRCxXQUFXO1FBQ1gsUUFBUTtRQUNSLGdCQUFnQixFQUFFO1FBQ2xCLFFBQVEsQ0FBQztRQUNULFFBQVE7SUFDVixJQUFJLENBQUM7SUFDUCxHQUFFLFNBQVMsR0FBRyxJQUFHLElBQUksR0FBRSxjQUFjLElBQUksTUFBTSxVQUFVO1FBQ3ZELFNBQVMsQ0FBQztJQUNaLEtBQUssZUFBZSxPQUFPLFlBQVksU0FBUyxRQUFRLEFBQUMsQ0FBQSxHQUFHLEVBQUUsYUFBWSxFQUFHLFNBQVMsTUFBTTtRQUMxRjtRQUFhO1FBQVc7S0FDekIsR0FBRyxHQUFFLFFBQVEsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRztJQUNqQyxJQUFJLElBQUksR0FBRSxVQUFVO0lBQ3BCLE9BQU8sRUFBRSxxREFBcUQ7UUFDNUQsV0FBVztRQUNYLFFBQVE7UUFDUixnQkFBZ0IsRUFBRTtRQUNsQixRQUFRO0lBQ1YsSUFBSTtBQUNOO09BN0JlO0FBOEJmLGVBQWUsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxLQUFLO0lBQ3JDLElBQUksSUFBSSxHQUFFO0lBQ1YsSUFBSSxDQUFDLEdBQUcsT0FBTyxFQUFFLGdDQUFnQztRQUMvQyxXQUFXO1FBQ1gsUUFBUTtRQUNSLHdCQUF3QixHQUFHLE9BQU8sVUFBVTtRQUM1QywyQkFBMkI7SUFDN0IsSUFBSSxDQUFDO0lBQ0wsSUFBSSxJQUFJO1FBQ04sb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixnQkFBZ0IsRUFBRTtRQUNsQiw0QkFBNEIsSUFBSTtJQUNsQztJQUNBLEVBQUUsaUNBQWlDO1FBQ2pDLFdBQVc7UUFDWCxzQkFBc0IsRUFBRTtRQUN4Qix3QkFBd0IsR0FBRyxPQUFPLFVBQVU7UUFDNUMsMkJBQTJCO0lBQzdCO0lBQ0EsSUFBSSxJQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSw4QkFBNkIsRUFBRztRQUNsRCxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLE1BQU07WUFDSixhQUFhLENBQUEsS0FBSyxFQUFFLEdBQUc7WUFDdkIsbUJBQW1CLENBQUEsS0FBSyxFQUFFLElBQUcsR0FBRyxJQUFHO1lBQ25DLGlCQUFpQixDQUFDLEdBQUcsS0FBTSxFQUFFLElBQUcsR0FBRyxJQUFHO1FBQ3hDO0lBQ0Y7SUFDQSxPQUFPLEVBQUUsZ0NBQWdDO1FBQ3ZDLFdBQVc7UUFDWCxTQUFTLEVBQUU7UUFDWCxTQUFTLEVBQUU7UUFDWCxhQUFhLEVBQUUsUUFBUTtRQUN2QixZQUFZLEVBQUUsT0FBTztRQUNyQixzQkFBc0IsRUFBRSxPQUFPLElBQUksQ0FBQSxLQUFLLEdBQUU7UUFDMUMsZUFBZSxFQUFFO0lBQ25CLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBWSxDQUFBLG1CQUFtQixFQUFFLGdCQUFpQixDQUFBLE1BQU0sRUFBRSxJQUFHLEdBQUcsR0FBRyxFQUFFLGdCQUFnQixDQUMzRixDQUFBLElBQUssTUFBTSxFQUFFLElBQUcsR0FBRyxLQUFLLElBQUksRUFBQztBQUNqQztBQUNBLGVBQWUsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQixJQUFJLGVBQWUsR0FBRSxNQUFNO1FBQ3pCLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLDZCQUE0QixFQUFHLE9BQU0sR0FBRyxNQUFLLEtBQUksR0FBRSxhQUFhLFdBQVcsR0FDdEYsTUFBTSxHQUFFLGFBQWEsT0FDdEIsSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLDBCQUF5QixFQUFHLElBQ3RDLElBQUksRUFBRSxJQUNOLElBQUksRUFBRSxJQUNOLElBQUksRUFBRSxJQUNOLElBQUksRUFBRSxJQUNOLElBQUksS0FBSyxPQUNULElBQUksRUFBRTtRQUNSLElBQUksR0FBRztZQUNMLElBQUksS0FBSSxhQUFhLElBQUksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQ3JELElBQUksTUFBTSxDQUFBLGFBQWEsSUFBSSxPQUFPLEtBQUssTUFBTSxFQUFDLEdBQzlDLElBQUksTUFBSyxJQUNULElBQUksS0FBSSxRQUFRO1lBQ2xCLE9BQU8sRUFBRSxrQ0FBa0M7Z0JBQ3pDLFdBQVc7Z0JBQ1gsY0FBYyxPQUFPLEtBQUssSUFBSSxPQUFPO2dCQUNyQyxpQkFBaUIsRUFBRSxXQUFXLE9BQU8sVUFBVTtnQkFDL0MsZ0JBQWdCLEVBQUUsVUFBVSxPQUFPLFVBQVU7Z0JBQzdDLGlCQUFpQixFQUFFLFdBQVcsT0FBTyxVQUFVO2dCQUMvQyxzQkFBc0IsS0FBSSxZQUFZLEtBQUssRUFBRSxXQUFXLFFBQVEsZUFDOUQsWUFBWSxJQUFJLGlDQUFpQztnQkFDbkQsMkJBQTJCO2dCQUMzQixnQ0FBZ0MsRUFBRSxPQUFPO1lBQzNDLElBQUksTUFBTSxHQUFHLElBQUcsR0FBRyxHQUFHLEdBQUc7UUFDM0I7UUFDQSxJQUFJLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSw2QkFBNEIsRUFBRyxNQUFNLEdBQUc7UUFDdEQsSUFBSSxBQUFDLENBQUEsR0FBRyxNQUFNLENBQUEsS0FBTSxHQUFHLElBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRSxxQkFBcUIsSUFBRztZQUNoRSxlQUFlO1FBQ2pCLElBQUksQ0FBQztRQUNMLE1BQU0sR0FBRyxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUcsTUFBTSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHLEtBQUssRUFBRSxVQUFVLEdBQUc7WUFDM0UscUJBQXFCLENBQUMsQ0FBQyxHQUFHO1lBQzFCLGNBQWMsV0FBVyxHQUFFLGFBQWE7UUFDMUM7UUFDQSxJQUFJLElBQUksR0FBRyxJQUNULElBQUksSUFBSSxJQUFJLElBQ1osSUFBSSxDQUFDOzsrQ0FFb0MsQ0FBQyxFQUMxQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUk7UUFDbkMsRUFBRSxTQUFTLElBQUc7WUFDWixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLHlCQUF5QjtZQUN6Qix3QkFBd0I7WUFDeEIseUJBQXlCO1lBQ3pCLFNBQVMsR0FBRztZQUNaLFlBQVk7UUFDZDtRQUNBLElBQUksSUFBSSxPQUFPLElBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksSUFBSSxHQUFHLEtBQ1QsSUFBSTtZQUNOLEtBQU0sQ0FBQSxFQUFFLDJCQUEyQixJQUFHO2dCQUNwQyxlQUFlO2dCQUNmLGFBQWE7WUFDZixJQUFJLEdBQUcsSUFBRyxLQUFJLEVBQUUsMEJBQTBCLElBQUc7Z0JBQzNDLGVBQWU7Z0JBQ2YsYUFBYTtZQUNmLEVBQUM7WUFDRCxJQUFJLElBQUksR0FBRyxLQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDdkIsS0FBSyxFQUFFLGdDQUFnQztnQkFDckMsbUJBQW1CLEdBQUUsT0FBTztnQkFDNUIsa0JBQWtCLE1BQU07WUFDMUIsSUFBSSxFQUFFLHNCQUFzQixJQUFHO2dCQUM3QixlQUFlO2dCQUNmLGFBQWE7Z0JBQ2IsU0FBUztZQUNYO1lBQ0EsSUFBSSxJQUFJLEtBQUssT0FDWCxJQUFJLE1BQU0sR0FBRyxHQUFHLEtBQUs7WUFDdkIsSUFBSSxLQUFLLEVBQUUsZ0JBQWdCLEdBQUc7Z0JBQzFCLE9BQU8sQ0FBQyxDQUFDO2dCQUNULGdCQUFnQixDQUFDLENBQUM7Z0JBQ2xCLFdBQVcsS0FBSyxRQUFRO1lBQzFCLElBQUksRUFBRSxxQkFBcUI7Z0JBQ3pCLE1BQU07Z0JBQ04sYUFBYTtnQkFDYixPQUFPLENBQUMsQ0FBQztnQkFDVCxJQUFJLEtBQUssUUFBUTtZQUNuQixJQUFJLEtBQUssRUFBRSx3QkFBd0I7Z0JBQ2pDLG1CQUFtQixHQUFFLE9BQU87Z0JBQzVCLGtCQUFrQixNQUFNO2dCQUN4QixPQUFPLENBQUMsQ0FBQztnQkFDVCxJQUFJLEtBQUssUUFBUTtZQUNuQixJQUFJLENBQUMsR0FBRyxPQUFPLEVBQUUsd0JBQXdCLElBQUc7Z0JBQzVDLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixTQUFTO1lBQ1gsSUFBSTtnQkFDRixjQUFjO2dCQUNkLGdCQUFnQixFQUFFO2dCQUNsQixjQUFjLENBQUM7WUFDakI7WUFDQSxLQUFNLENBQUEsRUFBRSwyQkFBMkIsSUFBRztnQkFDcEMsZUFBZTtnQkFDZixhQUFhO1lBQ2YsSUFBSSxHQUFHLElBQUcsS0FBSSxFQUFFLDBCQUEwQixJQUFHO2dCQUMzQyxlQUFlO2dCQUNmLGFBQWE7WUFDZixFQUFDO1lBQ0QsSUFBSSxJQUFJLEdBQUcsSUFDVCxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksR0FDbEMsSUFBSSxJQUFJLE1BQU0sS0FDZCxJQUFJLEtBQUssS0FBSyxJQUFJLE1BQU0sS0FDeEIsSUFBSSxFQUFFO1lBQ1IsSUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSztnQkFDMUIsSUFBSSxLQUFLLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUcsTUFBTSxJQUFJLElBQUk7Z0JBQzFDLElBQUksSUFBSSxFQUFFLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYyxFQUFHLEdBQUc7Z0JBQ3BDLElBQUksRUFBRSxPQUFPLENBQUEsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksSUFBSSxNQUFNLEVBQUUsVUFBVyxDQUFBLEVBQUUsS0FBSyxNQUFNLEVBQUUsRUFBQyxHQUN6QyxJQUFJLEVBQUUsSUFDTixJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsMkJBQTBCLEVBQUcsR0FBRyxHQUFHO2dCQUMvQyxJQUFJLEVBQUUsZ0JBQWdCLElBQUc7b0JBQ3JCLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixXQUFXO29CQUNYLGFBQWEsRUFBRTtvQkFDZixhQUFhLEVBQUUsTUFBTSxHQUFHO29CQUN4QixjQUFjO2dCQUNoQixJQUFJLE9BQU8sS0FBSyxHQUFHLE9BQU87b0JBQzFCLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixjQUFjO2dCQUNoQjtZQUNGO1lBQ0EsT0FBTztnQkFDTCxjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsY0FBYyxDQUFDO1lBQ2pCO1FBQ0Y7UUFDQSxJQUFLLElBQUksS0FBSSxHQUFHLEtBQUksR0FBRyxLQUFLO1lBQzFCLEVBQUUsa0JBQWtCO2dCQUNsQixNQUFNO2dCQUNOLFNBQVM7Z0JBQ1QsWUFBWTtnQkFDWixXQUFXLEtBQUssUUFBUTtZQUMxQixJQUFJLEVBQUUsaUJBQWlCLElBQUc7Z0JBQ3hCLGVBQWU7Z0JBQ2YsU0FBUztnQkFDVCxZQUFZO1lBQ2QsSUFBSSxLQUFJLEtBQU0sQ0FBQSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHLE1BQU0sTUFBTSxLQUFJLEVBQUUseUJBQXlCLElBQUc7Z0JBQzdFLGVBQWU7Z0JBQ2YsU0FBUztZQUNYLElBQUksTUFBTSxHQUFHLEtBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRyxNQUFNLEVBQUUsd0JBQXdCLElBQUc7Z0JBQ3JFLGVBQWU7Z0JBQ2YsU0FBUztZQUNYLEVBQUM7WUFDRCxJQUFJLElBQUksTUFBTSxFQUFFLElBQ2QsSUFBSSxFQUFFLGdCQUNOLElBQUksRUFBRSxJQUNOLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSwyQkFBMEIsRUFBRyxHQUFHLEdBQUcsSUFDN0MsSUFBSSxHQUFHLEdBQUc7WUFDWixJQUFJLE9BQU8sS0FBSyxLQUFNLENBQUEsRUFBRSw4QkFBOEI7Z0JBQ2xELE1BQU07Z0JBQ04sU0FBUztnQkFDVCxnQkFBZ0IsRUFBRTtnQkFDbEIsY0FBYyxFQUFFO2dCQUNoQixnQkFBZ0IsRUFBRTtZQUNwQixJQUFJLElBQUksRUFBRSxJQUFJLEFBQUMsQ0FBQSxJQUFJLE1BQU0sRUFBRSxHQUFHLEVBQUMsRUFBRyxpQkFBaUIsSUFBSSxBQUFDLENBQUEsR0FBRyxFQUN4RCwyQkFBMEIsRUFBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLDZCQUE2QjtnQkFDdkUsTUFBTTtnQkFDTixTQUFTO2dCQUNULGFBQWEsRUFBRTtnQkFDZixTQUFTO2dCQUNULFdBQVcsRUFBRTtZQUNmLEVBQUMsR0FBSSxFQUFFLGNBQWMsT0FBTyxFQUFFLG9CQUFvQixJQUFHO2dCQUNyRCxlQUFlO2dCQUNmLFNBQVM7WUFDWCxJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUM7WUFDbEIsSUFBSSxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUUsT0FBTyxVQUFVLENBQUMsR0FBRyxJQUFJO2dCQUNoRCxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksRUFBRSxVQUFVLEdBQUcsS0FBSyxLQUFLLEVBQUUsU0FBUztnQkFDeEQsRUFBRSx5QkFBeUIsSUFBRztvQkFDMUIsZUFBZTtvQkFDZixTQUFTO29CQUNULGVBQWU7Z0JBQ2pCLElBQUksR0FBRyxJQUFHLElBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRyxPQUFPLElBQUksRUFBRSxJQUFJLEFBQUMsQ0FBQSxJQUFJLE1BQU0sRUFBRSxFQUFDLEVBQUcsaUJBQWlCLElBQ3BGLEFBQUMsQ0FBQSxHQUFHLEVBQUUsMkJBQTBCLEVBQUcsR0FBRyxHQUFHO1lBQzdDO1lBQ0EsSUFBSSxFQUFFLGtCQUFrQjtnQkFDcEIsTUFBTTtnQkFDTixTQUFTO2dCQUNULGFBQWEsRUFBRTtnQkFDZixTQUFTO2dCQUNULFdBQVcsS0FBSyxRQUFRO1lBQzFCLElBQUksRUFBRSxpQkFBaUIsSUFBRztnQkFDeEIsZUFBZTtnQkFDZixTQUFTO2dCQUNULGNBQWM7Z0JBQ2QsYUFBYSxFQUFFO2dCQUNmLGFBQWEsRUFBRSxNQUFNLEdBQUc7WUFDMUIsSUFBSSxLQUFLLEVBQUUsZ0JBQWdCLEdBQUc7Z0JBQzVCLFNBQVM7Z0JBQ1QsYUFBYSxFQUFFO2dCQUNmLFNBQVM7WUFDWCxJQUFJLE9BQU8sS0FBSyxHQUFHLE1BQU0sTUFBTSxFQUFFLFVBQVUsRUFBRSw0QkFBNEIsSUFBRztnQkFDMUUsZUFBZTtnQkFDZixTQUFTO2dCQUNULFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRTtZQUN0QixJQUFJLE9BQU8sS0FBSyxHQUFHLE1BQU0sRUFBRSxjQUFjO2dCQUN6QyxJQUFJLEtBQUksTUFBTSxHQUFHO29CQUNmLFNBQVM7b0JBQ1QsZUFBZTtvQkFDZixXQUFXO29CQUNYLGNBQWMsRUFBRTtvQkFDaEIsYUFBYTtnQkFDZjtnQkFDQSxNQUFNLENBQUEsSUFBSSxHQUFFLGdCQUFnQixJQUFJLEdBQUUsWUFBVztZQUMvQztZQUNBLElBQUksT0FBTyxHQUFHO2dCQUNaLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQ2IsSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLDZCQUE0QixFQUFHLE1BQU0sSUFBSSxJQUFJO2dCQUN6RCxFQUFFLHdCQUF3QixJQUFHO29CQUMzQixlQUFlO29CQUNmLFNBQVM7b0JBQ1QsY0FBYztvQkFDZCxZQUFZO2dCQUNkLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLGtCQUFrQixHQUFHO29CQUM5QyxTQUFTO29CQUNULFNBQVM7Z0JBQ1gsSUFBSSxFQUFFLHVCQUF1QixJQUFHO29CQUM5QixlQUFlO29CQUNmLFNBQVM7b0JBQ1QsY0FBYztvQkFDZCxZQUFZO2dCQUNkO2dCQUNBLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBRyxHQUFHO2dCQUN2QixJQUFJLEtBQUssRUFBRSxzQkFBc0IsR0FBRztvQkFDaEMsU0FBUztvQkFDVCxXQUFXO2dCQUNiLElBQUksRUFBRSw0QkFBNEIsSUFBRztvQkFDbkMsZUFBZTtvQkFDZixTQUFTO29CQUNULFdBQVc7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFPLENBQUEsSUFBSSxNQUFNLEdBQUc7b0JBQy9CLGVBQWUsQ0FBQyxDQUFDLEVBQUU7b0JBQ25CLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixXQUFXO29CQUNYLFNBQVM7Z0JBQ1gsSUFBSSxFQUFFLHdDQUF3QyxJQUFHO29CQUMvQyxlQUFlO29CQUNmLFNBQVM7b0JBQ1QsV0FBVztnQkFDYixFQUFDLEdBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTyxDQUFBLEVBQUUsbUNBQW1DLElBQUc7b0JBQzNELGVBQWU7b0JBQ2YsU0FBUztnQkFDWCxJQUFJLE1BQU0sR0FBRyxJQUFHLG9CQUFvQixFQUFFLGtDQUFrQyxJQUFHO29CQUN6RSxlQUFlO29CQUNmLFNBQVM7Z0JBQ1gsSUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFHLEdBQUcsSUFBSSxFQUFFLHNDQUFzQyxJQUFHO29CQUNwRSxlQUFlO29CQUNmLFNBQVM7b0JBQ1QsV0FBVztnQkFDYixFQUFDLEdBQUksS0FBTSxDQUFBLEVBQUUsMEJBQTBCLElBQUc7b0JBQ3hDLGVBQWU7b0JBQ2YsU0FBUztnQkFDWCxJQUFJLE1BQU0sR0FBRyxLQUFJLEVBQUUseUJBQXlCLElBQUc7b0JBQzdDLGVBQWU7b0JBQ2YsU0FBUztnQkFDWCxJQUFJLElBQUksTUFBTSxHQUFHLElBQUcsR0FBRyxJQUFJLEVBQUUsc0NBQXNDLElBQUc7b0JBQ3BFLGVBQWU7b0JBQ2YsU0FBUztvQkFDVCxXQUFXO2dCQUNiLEVBQUMsR0FBSSxLQUFLLEtBQU0sQ0FBQSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHLE1BQU0sSUFBSSxHQUFHLElBQUcsR0FBRyxJQUFJLEVBQUUsNkJBQzFELElBQUc7b0JBQ0QsZUFBZTtvQkFDZixTQUFTO29CQUNULFdBQVc7Z0JBQ2IsRUFBQyxHQUFJLENBQUMsR0FBRztvQkFDWCxFQUFFLHlCQUF5QixJQUFHO3dCQUM1QixlQUFlO3dCQUNmLFNBQVM7b0JBQ1g7b0JBQ0E7Z0JBQ0Y7Z0JBQ0EsSUFBSSxHQUFHLEtBQUssRUFBRSxtQ0FBbUMsSUFBRztvQkFDaEQsZUFBZTtvQkFDZixTQUFTO2dCQUNYLEtBQUssSUFBSSxFQUFFLGlDQUFpQyxJQUFHO29CQUM3QyxlQUFlO29CQUNmLFNBQVM7Z0JBQ1gsS0FBTSxDQUFBLEVBQUUsMEJBQTBCLElBQUc7b0JBQ25DLGVBQWU7b0JBQ2YsU0FBUztnQkFDWCxJQUFJLE1BQU0sR0FBRyxLQUFJLEVBQUUseUJBQXlCLElBQUc7b0JBQzdDLGVBQWU7b0JBQ2YsU0FBUztnQkFDWCxFQUFDLEdBQUksS0FBTSxDQUFBLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUcsR0FBRyxLQUFLLE9BQU8sTUFBTSxFQUFFLGlDQUNyRCxJQUFHO29CQUNELGVBQWU7b0JBQ2YsU0FBUztnQkFDWCxFQUFDLEdBQUksR0FBRyxNQUFNLEdBQUcsSUFBRyxHQUFHLE1BQU8sQ0FBQSxFQUFFLHdDQUF3QyxJQUFHO29CQUN6RSxlQUFlO29CQUNmLFNBQVM7Z0JBQ1gsSUFBSSxNQUFNLEdBQUcsS0FBSSxFQUFFLHVDQUF1QyxJQUFHO29CQUMzRCxlQUFlO29CQUNmLFNBQVM7Z0JBQ1gsRUFBQyxHQUFJLEdBQUcsSUFBRyxHQUFHLElBQUksT0FBTyxFQUFFLFdBQVcsSUFBRztvQkFDekMsZUFBZTtvQkFDZixTQUFTO2dCQUNYLElBQUksQ0FBQztnQkFDTCxFQUFFLDRCQUE0QixJQUFHO29CQUMvQixlQUFlO29CQUNmLFNBQVM7Z0JBQ1g7WUFDRjtRQUNGO1FBQ0EsT0FBTyxFQUFFLHFCQUFxQixJQUFHO1lBQy9CLGVBQWU7UUFDakIsSUFBSSxDQUFDO0lBQ1A7SUFDQSxJQUFJLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFDOUIsd05BQ0E7SUFDRixPQUFPLElBQUssQ0FBQSxBQUFDLENBQUEsR0FBRyxFQUFFLGFBQVksRUFBRyxHQUFHO1FBQUM7UUFBUztRQUFhO0tBQVUsR0FBRyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHLE1BQ3pGLENBQUMsQ0FBQSxJQUFNLENBQUEsR0FBRSxRQUFRLENBQUMsQ0FBQTtBQUN0QjtBQUVBLFNBQVMsR0FBRyxFQUFDLEVBQUUsQ0FBQztJQUNkLElBQUksS0FBSSxPQUFPLE1BQUssSUFBSSxRQUFRLGlCQUFpQixJQUFJO0lBQ3JELElBQUksQ0FBQyxJQUFJLElBQUk7UUFBQztRQUFjO1FBQVc7S0FBTSxFQUFFLElBQUksS0FBSSxPQUFPO0lBQzlELElBQUksSUFBSSxFQUFFLFFBQVEsaUJBQWlCO0lBQ25DLE9BQU8sRUFBRSxVQUFVLElBQUksT0FBTyxFQUFFLE1BQU0sR0FBRztBQUMzQztBQUVBLFNBQVMsR0FBRyxFQUFDLEVBQUUsQ0FBQztJQUNkLEdBQUcsSUFBRztJQUNOLElBQUksS0FBSSxjQUFjLE9BQU8sYUFBYSxJQUFJLFdBQVcsU0FBUztRQUNoRSxTQUFTLENBQUM7UUFDVixZQUFZLENBQUM7UUFDYixNQUFNO1FBQ04sV0FBVztJQUNiLEtBQUssSUFBSSxNQUFNLFNBQVM7UUFDdEIsU0FBUyxDQUFDO1FBQ1YsWUFBWSxDQUFDO0lBQ2Y7SUFDQSxHQUFFLGNBQWM7QUFDbEI7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLElBQUksSUFBSSxHQUFFLGFBQWEsa0JBQWtCO0lBQ3pDLElBQUksR0FBRyxPQUFPO0lBQ2QsSUFBSSxLQUFJLGVBQWUsT0FBTyxZQUFZLGNBQWMsT0FBTyxTQUFTLGtCQUFrQixHQUFFLEtBQzFGLFNBQVMsZUFBZSxDQUFDLEVBQUUsR0FBRSxHQUFHLGNBQWMsQ0FBQyxJQUFJLE1BQ25ELElBQUksSUFBRyxhQUFhLGtCQUFrQjtJQUN4QyxPQUFPLEtBQUssQ0FBQyxFQUFFLEdBQUUsR0FBRyxRQUFRLENBQUM7QUFDL0I7QUFDQSxlQUFlLEdBQUcsRUFBQztJQUNqQixHQUFFO0lBQ0YsSUFBSSxJQUFJLGVBQWUsT0FBTyxZQUFZLGNBQWMsT0FBTyxTQUFTLGtCQUFrQixHQUFFLEtBQzFGLFNBQVMsZUFBZSxDQUFDLEVBQUUsR0FBRSxHQUFHLGNBQWMsQ0FBQyxJQUFJO0lBQ3JELElBQUksR0FBRztRQUNMLElBQUksS0FBSSxXQUFXLEdBQUUsYUFBYSxvQkFBb0IsV0FBVyxFQUFFLGFBQ2pFO1FBQ0YsSUFBSSxDQUFDLElBQUc7WUFDTixHQUFFLGNBQWMsR0FBRyxXQUFXLGVBQWUsR0FBRSxjQUFjLEdBQUcsU0FBUyxlQUN2RSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO1lBQ3JCLElBQUksS0FBSSxXQUFXLEdBQUUsYUFBYSxvQkFBb0IsV0FBVyxFQUFFLGFBQ2pFLG9CQUFvQixDQUFDLENBQUMsU0FBUyxlQUFlLEdBQUc7WUFDbkQsTUFBSyxHQUFHLElBQUc7UUFDYjtRQUNBO0lBQ0Y7SUFDQSxHQUFFO0FBQ0o7QUFFQSxTQUFTLEdBQUcsRUFBQyxFQUFFLENBQUM7SUFDZCxJQUFJLEtBQUksSUFBTSxXQUFXLEdBQUUsYUFBYSxvQkFBb0IsV0FBVyxFQUFFLGFBQ3ZFLG9CQUFvQixDQUFDLENBQUUsQ0FBQSxlQUFlLE9BQU8sWUFBWSxjQUFjLE9BQU8sU0FDN0Usa0JBQWtCLEdBQUUsTUFBTSxTQUFTLGVBQWUsR0FBRyxJQUFFO0lBQzFELEtBQUssSUFBSSxNQUFLO1FBQUM7UUFBZTtRQUFhO1FBQWdCO1FBQWM7UUFDckU7UUFBYTtRQUFhO0tBQzNCLENBQ0QsSUFBSSxHQUFHLEdBQUcsS0FBSSxNQUFLO0lBQ3JCLEVBQUU7QUFDSjtBQUVBLFNBQVMsR0FBRyxFQUFDLEVBQUUsQ0FBQztJQUNkLElBQUksS0FBSSxPQUFPLGVBQWUsS0FDNUIsSUFBSSxPQUFPLHlCQUF5QixJQUFHLFVBQVU7SUFDbkQsSUFBSSxFQUFFLEtBQUssSUFBRyxLQUFLLEdBQUUsUUFBUTtBQUMvQjtBQUVBLFNBQVMsR0FBRyxFQUFDLEVBQUUsQ0FBQztJQUNkLE9BQU8sY0FBYyxPQUFPLGdCQUFnQixJQUFJLGNBQWMsSUFBRztRQUMvRCxLQUFLO1FBQ0wsTUFBTTtRQUNOLFNBQVMsQ0FBQztRQUNWLFlBQVksQ0FBQztJQUNmLEtBQUssSUFBSSxNQUFNLElBQUc7UUFDaEIsU0FBUyxDQUFDO1FBQ1YsWUFBWSxDQUFDO0lBQ2Y7QUFDRjtBQUNBLGVBQWUsR0FBRyxFQUFDO0lBQ2pCLEdBQUUsY0FBYyxHQUFHLFdBQVcsWUFBWSxHQUFFLGNBQWMsR0FBRyxTQUFTLFlBQVksR0FBRSxRQUNsRixlQUFlLE9BQU8sWUFBWSxTQUFTLFFBQVEsQUFBQyxDQUFBLEdBQUcsRUFBRSxhQUFZLEVBQUcsU0FBUyxNQUFNO1FBQ3JGO1FBQWE7UUFBVztLQUN6QixHQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUc7QUFDM0I7QUFDQSxlQUFlLEdBQUcsRUFBQztJQUNqQixJQUFJLFlBQVksR0FBRSxhQUFhLGtCQUFrQjtRQUMvQyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO1FBQ25CO0lBQ0Y7SUFDQSxHQUFFLGNBQWMsSUFBSSxNQUFNLFVBQVU7UUFDbEMsU0FBUyxDQUFDO0lBQ1osS0FBSyxNQUFNLEdBQUc7QUFDaEI7QUFDQSxlQUFlLEdBQUcsRUFBQztJQUNqQixJQUFJLElBQUksR0FBRyxJQUFHO0lBQ2QsSUFBSSxDQUFDLEdBQUc7UUFDTixNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO1FBQ25CO0lBQ0Y7SUFDQSxHQUFHLElBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRztBQUM1QjtBQUVBLFNBQVMsR0FBRyxFQUFDLEVBQUUsQ0FBQztJQUNkLElBQUksS0FBSSxZQUFZLElBQUksNkJBQTZCLDJCQUNuRCxJQUFJLEdBQUU7SUFDUixJQUFLLElBQUksS0FBSSxHQUFHLEtBQUssS0FBSSxHQUFHLEtBQUs7UUFDL0IsSUFBSSxLQUFJLGNBQWMsT0FBTyxFQUFFLG1CQUFtQixNQUFNLEtBQUssRUFBRSxpQkFBaUIsYUFBYSxFQUFFLEVBQzdGLElBQUksR0FBRSxLQUFLLENBQUE7WUFDVCxJQUFJLElBQUksR0FBRSxhQUFhLGlCQUFpQixHQUFFLGFBQWEsWUFBWSxHQUFFLGVBQWU7WUFDcEYsT0FBTyxFQUFFLE9BQU8sY0FBYyxXQUFXO1FBQzNDO1FBQ0YsSUFBSSxHQUFHLE9BQU87UUFDZCxJQUFJLEVBQUU7SUFDUjtJQUNBLE9BQU87QUFDVDtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsS0FBSyxJQUFJLEtBQUs7UUFBQztRQUFlO1FBQWE7UUFBZ0I7UUFBYztRQUNyRTtRQUFhO1FBQWE7S0FDM0IsQ0FBRSxHQUFHLElBQUc7SUFDWCxHQUFFO0FBQ0o7QUFDQSxlQUFlLEdBQUcsRUFBQztJQUNqQixJQUFJLElBQUksR0FBRyxHQUFFLENBQUMsRUFBRTtJQUNoQixLQUFNLENBQUEsRUFBRSxpQkFBaUI7UUFDdkIsT0FBTztRQUNQLFFBQVE7SUFDVixJQUFJLEVBQUUsV0FBVyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHLElBQUc7QUFDekM7QUFDQSxlQUFlLEdBQUcsRUFDaEIsZUFBZSxFQUFDLEVBQ2hCLGNBQWMsQ0FBQyxFQUNmLGVBQWUsRUFBQyxFQUNoQixXQUFXLENBQUMsRUFDWixTQUFTLENBQUMsRUFDWDtJQUNDLElBQUksSUFBSSxHQUFHO0lBQ1gsSUFBSyxJQUFJLEtBQUksR0FBRyxLQUFJLEVBQUUsUUFBUSxLQUFLO1FBQ2pDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRTtRQUNaLEVBQUUsMkJBQTJCLEdBQUc7WUFDOUIsZUFBZTtZQUNmLFNBQVM7WUFDVCxhQUFhO1lBQ2IsWUFBWSxFQUFFLGFBQWE7UUFDN0IsSUFBSSxHQUFHLElBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRztRQUM5QixJQUFJLElBQUksTUFBTSxHQUFHLEdBQUcsSUFBRztRQUN2QixJQUFJLEVBQUUsMEJBQTBCLEdBQUc7WUFDL0IsZUFBZTtZQUNmLFNBQVM7WUFDVCxhQUFhO1lBQ2IsV0FBVztRQUNiLElBQUksR0FBRyxPQUFPLENBQUM7SUFDbkI7SUFDQSxPQUFPLENBQUM7QUFDVjtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxJQUFJLEVBQUUsRUFDUixLQUFJLENBQUE7UUFDRixJQUFJLEtBQUk7UUFDUixDQUFDLE1BQUssaUJBQWlCLE1BQUssQ0FBQyxNQUFNLEdBQUUsZUFBZSxFQUFFLFNBQVMsT0FBTSxFQUFFLEtBQUs7SUFDOUU7SUFDRixPQUFPLEdBQUUsR0FBRSxVQUFVLHVCQUF1QixHQUFFLEdBQUUsVUFBVSxxQkFBcUIsR0FBRSxLQUFJLEdBQUUsR0FBRSxVQUN0RixrQkFBa0I7QUFDdkI7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLEdBQUUsaUJBQWlCO1FBQ2pCLE9BQU87UUFDUCxRQUFRO0lBQ1YsSUFBSSxHQUFHO0FBQ1Q7QUFDQSxlQUFlLEdBQUcsRUFDaEIsU0FBUyxFQUFDLEVBQ1YsZUFBZSxDQUFDLEVBQ2hCLFdBQVcsRUFBQyxFQUNaLGNBQWMsQ0FBQyxFQUNmLGFBQWEsQ0FBQyxFQUNmO0lBQ0MsSUFBSSxJQUFJLEdBQUc7SUFDWCxJQUFJLENBQUMsRUFBRSxRQUFRLE9BQU8sRUFBRSxxQ0FBcUMsSUFBRztRQUM5RCxlQUFlO0lBQ2pCLElBQUk7SUFDSixLQUFLLElBQUksS0FBSyxFQUFHO1FBQ2YsSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUUsZUFBZSxFQUFFO1FBQ3ZDLEtBQUssSUFBSSxLQUFLLEdBQUcsR0FBSTtZQUNuQixFQUFFLFlBQVksR0FBRyxFQUFFLGdCQUFnQixJQUFJLE1BQU0sVUFBVTtnQkFDckQsU0FBUyxDQUFDO1lBQ1osS0FBSyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO1lBQ3hCLElBQUksSUFBSSxFQUFFLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYyxFQUFHLEdBQUcsR0FBRyxPQUFPLENBQUEsS0FBSyxDQUFDLEVBQUUsT0FDcEQsSUFBSSxFQUFFLElBQ04sSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLDJCQUEwQixFQUFHLEdBQUcsR0FBRztZQUMvQyxJQUFJLEVBQUUsc0NBQXNDLElBQUc7Z0JBQzNDLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCxhQUFhLEVBQUU7Z0JBQ2YsYUFBYSxFQUFFLE1BQU0sR0FBRztnQkFDeEIsV0FBVztZQUNiLElBQUksT0FBTyxHQUFHLE9BQU87Z0JBQ3JCLGdCQUFnQjtnQkFDaEIsY0FBYztZQUNoQjtRQUNGO0lBQ0Y7SUFDQSxPQUFPO0FBQ1Q7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLElBQUksSUFBSSxFQUFFLEVBQ1IsS0FBSSxDQUFBO1FBQ0YsR0FBRyxPQUFPLENBQUEsRUFBRSxTQUFTLE9BQU0sRUFBRSxLQUFLLEdBQUM7SUFDckM7SUFDRixJQUFJLEdBQUUsS0FBSSxjQUFjLE9BQU8sR0FBRSxrQkFDL0IsS0FBSyxJQUFJLEtBQUssTUFBTSxLQUFLLEdBQUUsaUJBQWlCLE1BQU8sR0FBRTtJQUN2RCxPQUFPO0FBQ1Q7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLElBQUksSUFBSTtJQUNSLE9BQU8sQ0FBQyxDQUFDLEtBQUssWUFBWSxPQUFPLEVBQUUsYUFBYSxZQUFZLE9BQU8sRUFBRSxnQkFBZ0IsWUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxlQUFlO0FBQy9EO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLE1BQUssR0FBRyxPQUFPO1FBQUM7S0FBRTtJQUN0QixJQUFJLElBQUksSUFBSTtJQUNaLEtBQUssSUFBSSxNQUFLO1FBQUM7UUFBRztRQUFLO1FBQUk7UUFBSztRQUFJO1FBQUs7UUFBSztLQUFFLENBQUUsRUFBRSxJQUFJLEtBQUssTUFBTSxLQUFJO0lBQ3ZFLElBQUksS0FBSTtJQUNSLElBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFHLEtBQUssR0FBRyxFQUFFLElBQUk7SUFDdEMsT0FBTyxFQUFFLElBQUksS0FBSTtXQUFJO0tBQUUsQ0FBQyxLQUFLLENBQUMsSUFBRyxJQUFNLEtBQUk7QUFDN0M7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLEtBQUssSUFBSSxLQUFLO1FBQUM7UUFBZTtRQUFhO1FBQWdCO1FBQWM7UUFDckU7UUFBYTtRQUFhO1FBQVc7S0FDdEMsQ0FBRSxHQUFHLElBQUc7SUFDWCxHQUFFO0FBQ0o7QUFFQSxTQUFTLEdBQUcsRUFBQyxFQUFFLENBQUM7SUFDZCxJQUFJLEtBQUksY0FBYyxPQUFPLEdBQUUsd0JBQXdCLEdBQUUsMEJBQTBCLE1BQ2pGLElBQUksS0FBSSxHQUFFLE9BQU8sR0FBRSxRQUFRLElBQUksR0FDL0IsSUFBSSxLQUFJLEdBQUUsTUFBTSxHQUFFLFNBQVMsSUFBSSxHQUMvQixJQUFJLGtCQUFrQixLQUFLLGdCQUFnQixHQUMzQyxJQUFJO1FBQ0YsU0FBUyxDQUFDO1FBQ1YsWUFBWSxDQUFDO1FBQ2IsUUFBUTtRQUNSLFNBQVMsSUFBSSxJQUFJO1FBQ2pCLFNBQVM7UUFDVCxTQUFTO1FBQ1QsR0FBRyxlQUFlLE9BQU8sU0FBUztZQUNoQyxNQUFNO1FBQ1IsSUFBSSxDQUFDLENBQUM7SUFDUixHQUNBLElBQUksRUFBRSxXQUFXLGNBQWMsY0FBYyxPQUFPLGVBQWUsSUFBSSxhQUFhLEdBQUc7UUFDckYsR0FBRyxDQUFDO1FBQ0osYUFBYTtRQUNiLFdBQVcsQ0FBQztJQUNkLEtBQUssY0FBYyxPQUFPLGFBQWEsSUFBSSxXQUFXLEdBQUcsS0FBSyxJQUFJLE1BQU0sR0FBRztRQUN6RSxTQUFTLENBQUM7UUFDVixZQUFZLENBQUM7SUFDZjtJQUNGLEdBQUUsY0FBYztBQUNsQjtBQUNBLGVBQWUsR0FBRyxFQUFDLEVBQUUsSUFBSSxTQUFTO0lBQ2hDLElBQUksc0JBQXNCLEdBQUc7UUFDM0IsR0FBRSxjQUFjLEdBQUcsV0FBVyxXQUFXLEdBQUUsY0FBYyxHQUFHLFNBQVMsV0FBVyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQ3ZGLEtBQUksRUFBRztRQUNWO0lBQ0Y7SUFDQSxHQUFFLGNBQWMsR0FBRyxXQUFXLGVBQWUsR0FBRSxjQUFjLEdBQUcsU0FBUyxlQUFlLEdBQ3JGLGNBQWMsR0FBRyxXQUFXLFdBQVcsR0FBRSxjQUFjLEdBQUcsU0FBUyxXQUFXLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFDdEYsS0FBSSxFQUFHO0FBQ2Q7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLE9BQU8sWUFBWSxPQUFPLEtBQUksR0FBRSxRQUFRLFFBQVEsS0FBSyxPQUFPLGdCQUFnQjtBQUM5RTtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsT0FBTyxPQUFPLE1BQUssSUFBSSxRQUFRLGNBQWMsSUFBSSxRQUFRLG9CQUFvQixLQUFLLFFBQ2hGLFlBQVksS0FBSyxRQUFRLFFBQVEsS0FBSyxPQUFPO0FBQ2pEO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLElBQUksR0FBRyxHQUFFLGVBQWU7SUFDNUIsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDO0lBQzVCLElBQUksS0FBSSxHQUFHLEdBQUUsVUFBVSxlQUFlO0lBQ3RDLE9BQU8sR0FBRSxXQUFXO0FBQ3RCO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLElBQUksR0FBRztJQUNYLE9BQU8sSUFBSSxVQUFVLEtBQUssS0FBSyxRQUFRLGtCQUFrQixLQUFLLEtBQUssZUFBZSxVQUFVLEtBQ3hGLEtBQUssUUFBUSwrQkFBK0IsS0FBSyxLQUFLLGNBQ3hELHVDQUF1QyxLQUFLLEtBQUssYUFBYSxtQ0FDN0QsS0FBSyxLQUFLLFdBQVcsb0NBQW9DLEtBQUssS0FBSyxXQUNwRSw4QkFBOEIsS0FBSyxLQUFLLE9BQU8sbUNBQW1DLEtBQUssS0FDdkYsd0JBQXdCLDJCQUEyQixLQUFLLEtBQUssbUJBQW1CLFlBQy9FLEtBQUssS0FBSyxVQUFVLFlBQVksS0FBSyxLQUFLLFVBQVUscUJBQXFCLEtBQUssS0FBSyxTQUFTLElBQzdGO0FBQ0o7QUFFQSxTQUFTLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFDO0lBQ2pCLElBQUksSUFBRztRQUNMLElBQUksS0FBSSxHQUFHO1FBQ1gsT0FBTyxFQUFFLEtBQUssQ0FBQTtZQUNaLElBQUksSUFBSSxHQUFHO1lBQ1gsT0FBTyxDQUFDLENBQUMsS0FBSyxNQUFNO1FBQ3RCO0lBQ0Y7SUFDQSxJQUFJLElBQUksR0FBRztJQUNYLE9BQU8sRUFBRSxLQUFLLENBQUEsS0FBSyxHQUFHLFFBQU87QUFDL0I7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLE9BQU8sSUFBRyxRQUFRLGlCQUFpQixJQUFJLGtCQUFrQjtBQUMzRDtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsT0FBTyxJQUFHLE9BQU8sa0JBQWtCO0FBQ3JDO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLElBQUksSUFBRyxRQUFRLGlCQUFpQixJQUFJO0lBQ3hDLE9BQU8sZUFBZSxLQUFLLG1CQUFtQjtBQUNoRDtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsT0FBTyxHQUFFLFdBQVcsU0FBUywrQkFBK0IsV0FBVyxHQUFFLGFBQ3ZFO0FBQ0o7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLE9BQU8sT0FBTyxNQUFLLElBQUksTUFBTSxrQkFBa0IsQ0FBQyxFQUFFLElBQUk7QUFDeEQ7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLE9BQU8sMEJBQTBCLEtBQUssT0FBTyxNQUFLO0FBQ3BEO0FBRUEsU0FBUztJQUNQLE9BQU8sZUFBZSxPQUFPLFlBQVksQ0FBQyxDQUFDLFNBQVMsY0FDbEQ7QUFFSjtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxJQUFJO0lBQ1IsSUFBSyxJQUFJLEtBQUksR0FBRyxLQUFLLEtBQUksSUFBSSxLQUFLO1FBQ2hDLElBQUksRUFBRSxhQUFhLFFBQVEsUUFBUSxLQUFLLFNBQVMsOEJBQThCLE9BQU8sQ0FBQztRQUN2RixJQUFJLEVBQUU7SUFDUjtJQUNBLE9BQU8sQ0FBQztBQUNWO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLElBQUksR0FBRTtJQUNWLElBQUssSUFBSSxLQUFJLEdBQUcsS0FBSyxLQUFJLEdBQUcsS0FBSztRQUMvQixJQUFJLEtBQUksTUFBTSxLQUFLLEVBQUUsaUJBQWlCLFdBQVcsT0FBTyxDQUFBLEtBQ3RELDBDQUEwQyxHQUFFLGFBQWE7UUFDM0QsSUFBSSxNQUFNLEdBQUUsUUFBUSxPQUFPLEVBQUMsQ0FBQyxFQUFFO1FBQy9CLElBQUksR0FBRSxTQUFTLEdBQUc7UUFDbEIsSUFBSSxFQUFFO0lBQ1I7SUFDQSxPQUFPO0FBQ1Q7QUFDQSxlQUFlLEdBQUcsRUFBQztJQUNqQixJQUFJLElBQUksR0FBRztJQUNYLElBQUksRUFBRSxtQ0FBbUM7UUFDckMsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLEdBQUU7UUFDM0IsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQix3QkFBd0I7SUFDMUIsSUFBSSxDQUFDLEdBQUcsT0FBTyxRQUFRLEtBQ3ZCLDZFQUE2RSxDQUFDO0lBQ2hGLEVBQUU7SUFDRixJQUFJLEtBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGdCQUFlLEVBQUcsSUFBTSxPQUFPLEdBQUcsR0FBRSxVQUFVLENBQUMsTUFBTTtRQUN2RSxTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWUsU0FBUztJQUMxQjtJQUNBLE9BQU8sRUFBRSxrQ0FBa0M7UUFDekMsZ0JBQWdCO1FBQ2hCLGdCQUFnQixPQUFPLEdBQUcsR0FBRTtRQUM1Qix3QkFBd0I7SUFDMUIsSUFBSSxNQUFLLFFBQVEsS0FDZiw0RUFBNEU7QUFDaEY7QUFFQSxTQUFTLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFDO0lBQ2pCLElBQUksSUFBSSxZQUFZLE9BQU8sR0FBRSxRQUFRLEdBQUUsUUFBUSxJQUM3QyxJQUFJLEdBQUcsR0FBRTtJQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxPQUFPLENBQUM7SUFDekIsSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLDZCQUE0QixFQUFHLEtBQUk7UUFDM0MsSUFBSSxLQUFJLEdBQUcsSUFDVCxLQUFJLEdBQUc7UUFDVCxPQUFPLENBQUMsQ0FBQyxNQUFLLE9BQU07SUFDdEI7SUFDQSxPQUFPLEdBQUcsTUFBSyxNQUFNLEdBQUcsTUFBTyxDQUFBLENBQUMsR0FBRyxPQUFNLElBQUcsSUFBSyxDQUFDLEVBQUUsT0FBTSxNQUFNLEdBQUcsTUFBTSxXQUFXLEdBQ2pGLGFBQWE7QUFDbEI7QUFDQSxlQUFlLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFDO0lBQ3ZCLE9BQU8sTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGdCQUFlLEVBQUcsSUFBTSxHQUFHLElBQUcsR0FBRyxLQUFJO1FBQ3RELFNBQVMsR0FBRyxNQUFLLE1BQU07UUFDdkIsVUFBVTtRQUNWLGVBQWUsZUFBZSxPQUFPLFdBQVcsU0FBUyxPQUFPLEtBQUs7SUFDdkU7QUFDRjtBQUNBLGVBQWUsR0FBRyxFQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsS0FBSSxFQUFFO0lBQ2xDLElBQUksSUFBSSxHQUNOLElBQUk7SUFDTixNQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBRSxDQUFBLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFBRyxHQUFDLEtBQU8sQ0FBQSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHLElBQUksR0FBRTtJQUN2RixPQUFPO0FBQ1Q7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLE9BQU8sT0FBTyxNQUFLLElBQUksUUFBUSxZQUFZLEtBQUssUUFBUSxRQUFRLEtBQUssT0FBTztBQUM5RTtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxJQUFJLEdBQUc7SUFDWCxPQUFPO1FBQUM7UUFBUTtRQUFLO0tBQU0sQ0FBQyxTQUFTO0FBQ3ZDO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLElBQUksR0FBRztJQUNYLE9BQU87UUFBQztRQUFTO1FBQUs7UUFBTTtLQUFtQixDQUFDLFNBQVM7QUFDM0Q7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLElBQUksQ0FBQyxNQUFNLEdBQUUsYUFBYSxPQUFPO0lBQ2pDLElBQUksQ0FBQyxHQUFFLE1BQU0sQ0FBQyxHQUFFLGVBQWUsT0FBTztJQUN0QyxJQUFJLElBQUksTUFBTSxLQUFLLEdBQUUsY0FBYyxpQkFBaUIsVUFBVSxPQUFPLENBQUEsSUFBSyxFQUFFLE9BQU8sR0FBRTtJQUNyRixJQUFJLE1BQU0sRUFBRSxRQUFRLE9BQU87SUFDM0IsSUFBSSxLQUFJLENBQUMsQ0FBQyxFQUFFO0lBQ1osT0FBTyxHQUFFLGVBQWUsR0FBRSxTQUFTLEdBQUUsUUFBUSxHQUFFLFNBQVMsR0FBRSxPQUFPLEtBQUk7QUFDdkU7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLElBQUksSUFBSSxNQUFNLEtBQUssR0FBRSxVQUFVLEVBQUUsRUFBRSxPQUFPLENBQUEsSUFBSyxFQUFFLFlBQVksR0FBRSxNQUFNLEVBQUUsVUFBVSxTQUMvRTtJQUNGLE9BQU8sTUFBTSxFQUFFLFNBQVMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWM7QUFDcEQ7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLElBQUksSUFBSSxHQUFHO0lBQ1gsSUFBSSxDQUFDLEdBQUcsU0FBUyxPQUFPLENBQUM7SUFDekIsSUFBSSxLQUFJLEdBQUc7SUFDWCxPQUFPLENBQUMsTUFBSyxHQUFFLFVBQVUsU0FBUztBQUNwQztBQUNBLGVBQWUsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7SUFDdkIsSUFBSSxJQUFJLEdBQUc7SUFDWCxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsT0FBTyxDQUFDO0lBQzlCLElBQUksSUFBSSxHQUFHLEtBQ1QsSUFBSSxFQUFFLEtBQUssQ0FBQTtRQUNULElBQUksR0FBRyxLQUFJLE9BQU8sQ0FBQztRQUNuQixJQUFJLElBQUksR0FBRztRQUNYLE9BQU8sQ0FBQyxDQUFDLEtBQUssTUFBTTtJQUN0QjtJQUNGLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxLQUFLLE9BQU8sQ0FBQyxFQUFFO0lBQ2hDLElBQUksS0FBSyxDQUFDLEVBQUUsU0FBUztRQUNuQixJQUFJLEtBQUksR0FBRztRQUNWLENBQUEsTUFBSyxDQUFBLEVBQUcsU0FBUyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO0lBQ3ZDO0lBQ0EsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2hCLElBQUksSUFBSSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZ0JBQWUsRUFBRyxJQUFNLEdBQUcsSUFBSTtRQUNqRCxTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWUsRUFBRSxlQUFlO0lBQ2xDO0lBQ0EsT0FBTyxLQUFLLEdBQUc7QUFDakI7QUFDQSxlQUFlLEdBQUcsRUFBQyxFQUFFLENBQUM7SUFDcEIsSUFBSSxLQUFJLE1BQU0sUUFBUSxLQUFLLElBQUk7UUFBQztLQUFFLEVBQ2hDLElBQUksQ0FBQztJQUNQLElBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFFLFdBQVcsUUFBUSxJQUFLO1FBQzVDLElBQUksSUFBSSxHQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQ3JCLElBQUksR0FBRSxTQUFTLENBQUMsRUFBRSxFQUNsQixJQUFJLE1BQU0sR0FBRyxHQUFHLElBQUcsSUFDbkIsSUFBSSxHQUFHO1FBQ1QsSUFBSSxLQUFNLENBQUEsR0FBRSxVQUFVLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRSxXQUFXLEtBQU0sQ0FBQSxHQUFFLFNBQVMsQ0FBQSxDQUFDLEdBQUksa0JBQWtCLEdBQUUsU0FDcEYsS0FBSztZQUNMLElBQUksS0FBSSxHQUFHLFVBQVUsZUFDbkIsSUFBSSxJQUFHLFFBQVE7WUFDakIsRUFBRSxnQ0FBZ0M7Z0JBQ2hDLG1CQUFtQixFQUFFO2dCQUNyQixlQUFlLEdBQUc7Z0JBQ2xCLFNBQVMsR0FBRztnQkFDWixlQUFlLENBQUMsQ0FBQyxJQUFHLGNBQWM7Z0JBQ2xDLFdBQVcsTUFBTSxLQUFLLEdBQUcsaUJBQWlCLDRCQUE0QixFQUFFLEVBQUUsSUFBSSxDQUFBLEtBQU0sQ0FBQTt3QkFDbEYsVUFBVSxHQUFFO3dCQUNaLFVBQVUsR0FBRTt3QkFDWixVQUFVLENBQUMsQ0FBQyxHQUFFLFFBQVEsZUFBZSxjQUNuQztvQkFDSixDQUFBO1lBQ0Y7UUFDRjtRQUNBLEtBQU0sQ0FBQSxJQUFJLENBQUMsQ0FBQTtJQUNiO0lBQ0EsT0FBTztBQUNUO0FBQ0EsZUFBZSxHQUFHLEVBQUMsRUFBRSxDQUFDO0lBQ3BCLElBQUksS0FBSSxNQUFNLFFBQVEsS0FBSyxJQUFJO1FBQUM7S0FBRSxFQUNoQyxJQUFJLEdBQUcsS0FDUCxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYyxFQUFHLG9EQUFvRCxLQUMvRSxJQUFJLENBQUM7SUFDUCxLQUFLLElBQUksTUFBSyxFQUFHO1FBQ2YsSUFBSSxJQUFJLEdBQUUsYUFBYTtRQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFHLElBQUk7WUFDZixJQUFJLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFBRyxzQkFBc0I7WUFDekQsS0FBSyxDQUFDLEVBQUUsVUFBVSxTQUFTLHVDQUF3QyxDQUFBLEVBQUUsU0FBUyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQ3JGLEtBQUksRUFBRyxJQUFHLEdBQUksSUFBSSxDQUFDO1FBQ3hCO0lBQ0Y7SUFDQSxPQUFPO0FBQ1Q7QUFDQSxlQUFlLEdBQUcsRUFBQyxFQUFFLENBQUM7SUFDcEIsSUFBSSxLQUFJLENBQUMsR0FDUCxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYyxFQUN0Qix5R0FDQTtJQUNKLElBQUssSUFBSSxLQUFJLEdBQUcsS0FBSSxFQUFFLFFBQVEsS0FBSztRQUNqQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUUsRUFDVixJQUFJLEVBQUUsYUFBYSxRQUNuQixJQUFJLFNBQVMsZUFBZSxJQUM1QixJQUFJLEVBQUUsYUFBYTtRQUNyQixJQUFJLEtBQUssRUFBRSxTQUFTLElBQUk7WUFDdEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2IsS0FBSSxDQUFDO2dCQUNMO1lBQ0Y7WUFDQSxFQUFFLFNBQVMsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRyxNQUFNLEtBQUksQ0FBQztRQUMzQztJQUNGO0FBQ0Y7QUFDQSxlQUFlLEdBQUcsRUFBQyxFQUFFLENBQUM7SUFDcEIsSUFBSSxLQUFJLFlBQVksT0FBTyxJQUFJLEVBQUUsU0FBUyxPQUFPLEtBQUs7SUFDdEQsSUFBSSxDQUFDLElBQUcsT0FBTyxDQUFDO0lBQ2hCLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLGVBQWMsRUFBRyxnREFBZ0QsR0FBRSxTQUMvRSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYyxFQUFHLGtEQUFrRCxHQUFFLFNBQy9FLElBQUk7UUFBQztRQUFTO1FBQU87S0FBTyxFQUM1QixJQUFJLENBQUM7SUFDUCxJQUFLLElBQUksS0FBSSxHQUFHLEtBQUksRUFBRSxVQUFVLEtBQUksRUFBRSxRQUFRLEtBQUs7UUFDakQsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFFLEVBQUUsYUFBYSxVQUFVLENBQUMsQ0FBQyxHQUFFLEVBQ3ZDLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSx1QkFBc0IsRUFBRyxJQUFHLEVBQUU7UUFDMUMsSUFBSSxDQUFDLEtBQUssVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFFLEVBQUU7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUc7SUFDN0I7SUFDQSxPQUFPO0FBQ1Q7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLE9BQU8sR0FBRztBQUNaO0FBQ0EsZUFBZSxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztJQUN2QixJQUFJLElBQUksSUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGVBQWMsRUFBRyxtREFBbUQsSUFBRyxLQUN2RixDQUFBO1lBQ0UsSUFBSSxJQUFJO1lBQ1IsT0FBTyxDQUFDLENBQUMsRUFBRSxhQUFhLFVBQVUsR0FBRztRQUN2QyxJQUNGLElBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGdCQUFlLEVBQUcsSUFBTSxPQUFPLENBQUMsR0FBRyxJQUFJO1FBQ3JELFNBQVM7UUFDVCxVQUFVO1FBQ1YsZUFBZSxlQUFlLE9BQU8sV0FBVyxTQUFTLE9BQU8sS0FBSztJQUN2RSxJQUNBLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHO0lBQ3ZCLE9BQU8sQ0FBQyxLQUFLLE1BQU0sQ0FBQSxFQUFFLDRCQUE0QjtRQUMvQyxjQUFjLEVBQUU7UUFDaEIsUUFBUSxBQUFDLENBQUEsR0FBRyxFQUFFLGVBQWMsRUFBRyxtREFBbUQsSUFDL0UsSUFBSSxDQUFBO1lBQ0gsSUFBSSxJQUFJLEdBQUUsVUFBVSxlQUNsQixLQUFJLEdBQUUsZUFBZTtZQUN2QixPQUFPO2dCQUNMLE9BQU8sR0FBRyxjQUFjLHVCQUF1QixhQUFhLFFBQVEsUUFBUSxLQUN6RTtnQkFDSCxTQUFTLEdBQUc7Z0JBQ1osZUFBZSxHQUFFLE9BQU87Z0JBQ3hCLGlCQUFpQix1QkFBdUIsS0FBSztnQkFDN0MsdUJBQXVCLGNBQWMsS0FBSztnQkFDMUMsUUFBUSxNQUFNLEtBQUssR0FBRyxpQkFBaUIsWUFBWSxFQUFFLEVBQUUsSUFBSSxDQUFBLEtBQU0sQ0FBQTt3QkFDL0QsTUFBTSxHQUFFO3dCQUNSLGFBQWEsR0FBRSxNQUFNO3dCQUNyQixVQUFVLEdBQUU7d0JBQ1osU0FBUyxHQUFFLGFBQWE7b0JBQzFCLENBQUE7WUFDRjtRQUNGO0lBQ0osSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLGFBQVksRUFBRyxJQUFHO1FBQUM7S0FBUSxHQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxnQkFBZSxFQUFHLElBQU0sQ0FBQyxHQUFHLElBQUk7UUFDbEYsU0FBUztRQUNULFVBQVU7UUFDVixlQUFlLGVBQWUsT0FBTyxXQUFXLFNBQVMsT0FBTyxLQUFLO0lBQ3ZFLEVBQUMsR0FBSTtBQUNQO0FBQ0EsZUFBZTtJQUNiLElBQUksS0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM5QixtTkFDSztJQUNQLElBQUksSUFBRztRQUNMLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM5Qiw0RUFBNEUsT0FBTTtRQUNwRixJQUFJLEdBQUc7WUFDSixDQUFBLEdBQUcsRUFBRSxhQUFZLEVBQUcsR0FBRztnQkFBQzthQUFRO1lBQ2pDLElBQUksS0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM5Qiw4RUFBOEUsT0FBTTtZQUN0RixPQUFPLE1BQU0sR0FBRyxJQUFHLEdBQUc7UUFDeEI7SUFDRjtJQUNBLE9BQU8sQ0FBQztBQUNWO0FBQ0EsZUFBZTtJQUNiLElBQUksS0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM5QixtTkFDSztJQUNQLElBQUksSUFBRztRQUNMLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM1Qiw4RUFBOEUsT0FBTSxNQUN0RixLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUJBQWtCLEVBQzFCLDRFQUE0RSxPQUFNO1FBQ3RGLE9BQU8sSUFBSyxDQUFBLEFBQUMsQ0FBQSxHQUFHLEVBQUUsYUFBWSxFQUFHLEdBQUc7WUFBQztTQUFRLEdBQUcsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGdCQUFlLEVBQUcsSUFBTSxDQUFDLEdBQUcsTUFDckYsQ0FBQSxDQUFDLE1BQUssQ0FBQyxHQUFHLEdBQUMsR0FBSTtZQUNkLFNBQVM7WUFDVCxVQUFVO1lBQ1YsZUFBZSxlQUFlLE9BQU8sV0FBVyxTQUFTLE9BQU8sS0FBSztRQUN2RSxFQUFDLElBQUssQ0FBQyxNQUFLLENBQUMsR0FBRztJQUNwQjtJQUNBLE9BQU8sQ0FBQztBQUNWO0FBQ0EsZUFBZTtJQUNiLElBQUksS0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM5Qiw2UEFDSztJQUNQLElBQUksSUFBRztRQUNMLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM5Qiw0RUFBNEUsT0FBTTtRQUNwRixJQUFJLEdBQUc7WUFDSixDQUFBLEdBQUcsRUFBRSxhQUFZLEVBQUcsR0FBRztnQkFBQzthQUFRO1lBQ2pDLElBQUksS0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM5Qiw4RUFBOEUsT0FBTTtZQUN0RixPQUFPLE1BQU0sR0FBRyxJQUFHLEdBQUc7UUFDeEI7SUFDRjtJQUNBLE9BQU8sQ0FBQztBQUNWO0FBQ0EsZUFBZTtJQUNiLElBQUksS0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM5Qiw2UEFDSztJQUNQLElBQUksSUFBRztRQUNMLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM5Qiw4RUFBOEUsT0FBTTtRQUN0RixLQUFLLEVBQUU7SUFDVDtBQUNGO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLElBQUksZ0JBQWdCLEtBQUksa0NBQWtDLDRCQUM1RCxLQUFJLENBQUMsYUFBYSxFQUFFLEdBQUUsT0FBTyxDQUFDO0lBQ2hDLElBQUksZUFBZSxPQUFPLFVBQVUsT0FBTztJQUMzQyxJQUFJLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFBRyxnQkFBZ0IsS0FDL0MsaU5BQ0EsMlBBRUYsSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYyxFQUFHLHVEQUF1RCxLQUFLLEVBQUUsRUFDN0YsSUFBSSxFQUFFLEtBQUssQ0FBQSxLQUFLLEdBQUc7SUFDckIsSUFBSSxHQUFHLE9BQU87SUFDZCxJQUFJLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxlQUFjLEVBQUcsQ0FBQzt3QkFDVixFQUFFLEVBQUU7d0JBQ0osRUFBRSxHQUFFO0tBQ3ZCLENBQUMsRUFBRTtJQUNOLE9BQU8sRUFBRSxLQUFLLENBQUEsS0FBSyxHQUFHLFFBQU87QUFDL0I7QUFDQSxlQUFlO0lBQ2IsSUFBSSxLQUFJLEdBQUc7SUFDWCxNQUFNLENBQUEsR0FBRSxTQUFTLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUcsSUFBRztBQUN6QztBQUNBLGVBQWU7SUFDYixJQUFJLEtBQUksR0FBRztJQUNYLE1BQU0sQ0FBQSxHQUFFLFNBQVMsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRyxJQUFHO0FBQ3pDO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxPQUFPLFlBQVksT0FBTyxLQUFJLEdBQUUsUUFBUSxRQUFRLEtBQUssT0FBTyxnQkFBZ0I7QUFDOUU7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLElBQUksSUFBSSxNQUFNLFFBQVEsTUFBSyxLQUFJLEtBQUk7UUFBQztLQUFFLEdBQUcsRUFBRSxFQUN6QyxLQUFJLEVBQUU7SUFDUixLQUFLLElBQUksTUFBSyxFQUFHO1FBQ2YsSUFBSSxJQUFJLFlBQVksT0FBTyxLQUFJLEdBQUUsTUFBTSxhQUFhO1lBQUMsQ0FBQyxFQUFFLE1BQUcsR0FBRyxDQUFDO1NBQUM7UUFDaEUsS0FBSyxJQUFJLE1BQUssRUFBRztZQUNmLElBQUksSUFBSSxHQUFFLFFBQVEsUUFBUSxLQUFLO1lBQy9CLEtBQUssQ0FBQyxHQUFFLFNBQVMsTUFBTSxHQUFFLEtBQUs7UUFDaEM7SUFDRjtJQUNBLE9BQU87QUFDVDtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxDQUFDLE1BQUssaUJBQWlCLE1BQUssQ0FBQyxNQUFNLEdBQUUsYUFBYSxPQUFPLENBQUM7SUFDOUQsSUFBSSxJQUFJLGNBQWMsT0FBTyxHQUFFLHdCQUF3QixHQUFFLDBCQUEwQjtJQUNuRixJQUFJLEtBQU0sQ0FBQSxFQUFFLFNBQVMsS0FBSyxFQUFFLFVBQVUsQ0FBQSxHQUFJLE9BQU8sQ0FBQztJQUNsRCxJQUFJLGVBQWUsT0FBTyxVQUFVLGNBQWMsT0FBTyxPQUFPLGtCQUFrQjtRQUNoRixJQUFJLElBQUksT0FBTyxpQkFBaUI7UUFDaEMsSUFBSSxXQUFXLEVBQUUsV0FBVyxhQUFhLEVBQUUsY0FBYyxRQUFRLEVBQUUsU0FBUyxPQUFPLENBQUM7SUFDdEY7SUFDQSxPQUFPLENBQUM7QUFDVjtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxJQUFJLGdCQUFnQixLQUFJO1FBQUM7UUFBYTtRQUFtQjtLQUFXLEdBQUc7UUFBQztLQUFFLEVBQzVFLEtBQUksRUFBRSxJQUFJLENBQUE7UUFDUixJQUFJLElBQUksR0FBRTtRQUNWLE9BQU8sQ0FBQzs2QkFDZSxFQUFFLEdBQUU7dUdBQ3NFLEVBQUUsRUFBRTtRQUNuRyxDQUFDO0lBQ0wsR0FBRyxLQUFLO0lBQ1YsT0FBTyxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUFHLENBQUM7O1VBRTNCLEVBQUUsR0FBRTs7O1VBR0osRUFBRSxHQUFFOztPQUVQLENBQUMsS0FBSztBQUNiO0FBRUEsU0FBUztJQUNQLE9BQU8sR0FBRztBQUNaO0FBRUEsU0FBUztJQUNQLE9BQU8sR0FBRztBQUNaO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLElBQUksR0FBRSxVQUFVO0lBQ3BCLE9BQU8sR0FBRyxHQUFHO0FBQ2Y7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLElBQUksSUFBSSxHQUFHLEtBQ1QsS0FBSSxHQUFHLEdBQUUsZUFBZSxXQUFXLEdBQUU7SUFDdkMsT0FBTyxFQUFFLFNBQVMsMEJBQTBCLEdBQUUsU0FBUztBQUN6RDtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxHQUFHLEtBQUksT0FBTyxDQUFDO0lBQ25CLElBQUksSUFBSSxHQUFHLEtBQ1QsS0FBSSxHQUFHLEdBQUUsZUFBZSxXQUFXLEdBQUU7SUFDdkMsT0FBTyxFQUFFLFNBQVMsWUFBWSxHQUFFLFNBQVM7QUFDM0M7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUFHLENBQUM7Ozs7Ozs7Ozs7T0FVL0IsQ0FBQyxFQUFFLE9BQU07SUFDZCxPQUFPLEtBQUssR0FBRyxLQUFLLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFBRyxDQUFDOzs7Ozs7Ozs7Ozs7O09BYS9DLENBQUMsRUFBRSxPQUFNO0FBQ2hCO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxlQUFjLEVBQUcsQ0FBQzs7Ozs7OzJEQU15QixDQUFDLEVBQUU7SUFDNUQsT0FBTyxFQUFFLEtBQUssQ0FBQSxLQUFLLEdBQUcsT0FBTSxHQUFHLFFBQU8sRUFBRSxLQUFLLENBQUEsS0FBSyxHQUFHLE9BQU0sQ0FBQyxHQUFHLFFBQU87QUFDeEU7QUFFQSxTQUFTLEdBQUcsRUFBQyxFQUFFLENBQUM7SUFDZCxJQUFJLEtBQUksR0FBRSxVQUFVLFdBQVcsR0FBRSxVQUMvQiwwREFBMEQ7SUFDNUQsT0FBTyxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUFHLENBQUM7Ozs7Ozs7O09BUTlCLENBQUMsRUFBRSxPQUFNO0FBQ2hCO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLEdBQUUsaUJBQWlCO1FBQ25CLE9BQU87UUFDUCxRQUFRO0lBQ1YsSUFBSSxHQUFFLFdBQVcsY0FBYyxPQUFPLEdBQUUsT0FBTztRQUMvQyxHQUFFO1FBQ0Y7SUFDRjtJQUFFLENBQUEsR0FBRyxFQUFFLGFBQVksRUFBRyxJQUFHO1FBQUM7S0FBUTtBQUNwQztBQUNBLGVBQWUsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7SUFDdkIsSUFBSSxJQUFJLEdBQUc7SUFDWCxPQUFPLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxnQkFBZSxFQUFHO1FBQ25DLElBQUksSUFBSSxHQUFHLEdBQUU7UUFDYixPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsU0FBUztJQUMzQixHQUFHO1FBQ0QsU0FBUztRQUNULFVBQVU7UUFDVixlQUFlO0lBQ2pCO0FBQ0Y7QUFDQSxlQUFlLEdBQUcsRUFBQyxFQUFFLENBQUM7SUFDcEIsSUFBSSxLQUFJLEdBQUc7SUFDWCxNQUFNLENBQUEsR0FBRyxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUcsSUFBRztJQUNuQyxJQUFJLElBQUksR0FBRztJQUNYLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUNoQixFQUFFLFdBQVcsRUFBRSxXQUFXLEdBQUcsR0FBRyxJQUFJLEVBQUUsY0FBYyxjQUFjLE9BQU8sYUFDdkUsSUFBSSxXQUFXLFNBQVM7UUFDdEIsU0FBUyxDQUFDO1FBQ1YsWUFBWSxDQUFDO1FBQ2IsTUFBTTtRQUNOLFdBQVc7SUFDYixLQUFLLElBQUksTUFBTSxTQUFTO1FBQ3RCLFNBQVMsQ0FBQztRQUNWLFlBQVksQ0FBQztJQUNmLEtBQUssRUFBRSxjQUFjLElBQUksTUFBTSxVQUFVO1FBQ3pDLFNBQVMsQ0FBQztJQUNaLEtBQUssTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRztJQUN4QixJQUFJLElBQUksR0FBRyxHQUFHO0lBQ2QsT0FBTyxDQUFDLENBQUMsS0FBTSxDQUFBLEdBQUcsSUFBSSxNQUFNLEdBQUcsSUFBRyxHQUFHLEVBQUM7QUFDeEM7QUFDQSxlQUFlLEdBQUcsRUFBQztJQUNqQixJQUFJLElBQUksR0FBRyxJQUFHLE1BQU0sR0FBRztJQUN2QixJQUFJLE1BQU0sRUFBRSxRQUFRLE9BQU8sQ0FBQztJQUM1QixJQUFJLEtBQUk7SUFDUixJQUFJLENBQUMsSUFBRyxPQUFPLENBQUM7SUFDaEIsSUFBSSxJQUFJO0lBQ1IsS0FBSyxJQUFJLE1BQUssRUFBRztRQUNmLElBQUksTUFBTSxHQUFHLElBQUcsS0FBSTtZQUNsQixLQUFLLEdBQUcsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRztZQUMzQjtRQUNGO1FBQ0E7SUFDRjtJQUNBLE9BQU8sSUFBSTtBQUNiO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLElBQUksTUFBTSxRQUFRLE1BQUssS0FBSSxLQUFJO1FBQUM7S0FBRSxHQUFHLEVBQUUsRUFDekMsS0FBSSxFQUFFO0lBQ1IsS0FBSyxJQUFJLE1BQUssRUFBRztRQUNmLElBQUksSUFBSSxZQUFZLE9BQU8sS0FBSSxHQUFFLE1BQU0sYUFBYTtZQUFDLENBQUMsRUFBRSxNQUFHLEdBQUcsQ0FBQztTQUFDO1FBQ2hFLEtBQUssSUFBSSxNQUFLLEVBQUc7WUFDZixJQUFJLElBQUksR0FBRSxRQUFRLFFBQVEsS0FBSztZQUMvQixLQUFLLENBQUMsR0FBRSxTQUFTLE1BQU0sR0FBRSxLQUFLO1FBQ2hDO0lBQ0Y7SUFDQSxPQUFPO0FBQ1Q7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLElBQUksSUFBSSxHQUFHLEdBQUUsZUFBZSxXQUFXLEdBQUUsS0FDdkMsS0FBSSxHQUFHO0lBQ1QsT0FBTyxFQUFFLFNBQVMsb0JBQW9CLEVBQUUsU0FBUyxlQUFlLEdBQUUsU0FBUztBQUM3RTtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUJBQWtCLEVBQzlCLGdNQUNBLE9BQU07SUFDUixPQUFPLEtBQUssR0FBRyxLQUFLLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFBRyxDQUFDOzs7Ozs7Ozs7Ozs7T0FZL0MsQ0FBQyxFQUFFLE9BQU07QUFDaEI7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLGVBQWMsRUFBRyxDQUFDOzs7Ozs7MkRBTXlCLENBQUMsRUFBRTtJQUM1RCxPQUFPLEVBQUUsS0FBSyxDQUFBLEtBQUssR0FBRyxPQUFNLEdBQUcsUUFBTyxFQUFFLEtBQUssQ0FBQSxLQUFLLEdBQUcsUUFBTztBQUM5RDtBQUVBLFNBQVMsR0FBRyxFQUFDLEVBQUUsQ0FBQztJQUNkLElBQUksS0FBSSxHQUFFLFVBQVUsV0FBVyxHQUFFLFVBQy9CLDBEQUEwRDtJQUM1RCxPQUFPLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUJBQWtCLEVBQUcsQ0FBQzs7Ozs7Ozs7O09BUzlCLENBQUMsRUFBRSxPQUFNO0FBQ2hCO0FBQ0EsZUFBZSxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztJQUN2QixJQUFJLElBQUksR0FBRztJQUNYLE9BQU8sTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGdCQUFlLEVBQUc7UUFDbkMsSUFBSSxJQUFJLEdBQUcsR0FBRTtRQUNiLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxTQUFTO0lBQzNCLEdBQUc7UUFDRCxTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWU7SUFDakI7QUFDRjtBQUNBLGVBQWUsR0FBRyxFQUFDLEVBQUUsQ0FBQztJQUNwQixJQUFJLEtBQUksR0FBRztJQUNYLElBQUksQ0FBQyxJQUFHO1FBQ04sSUFBSSxJQUFJLEdBQUc7UUFDWCxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDZixDQUFBLEdBQUcsRUFBRSxhQUFZLEVBQUcsR0FBRztZQUFDO1NBQVEsR0FBRyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHLE1BQU0sS0FBSSxHQUFHO0lBQ3RFO0lBQ0EsSUFBSSxDQUFDLElBQUcsT0FBTyxDQUFDO0lBQ2hCLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBRztJQUNwQixLQUFNLENBQUEsR0FBRSxXQUFXLEdBQUUsV0FBVyxHQUFHLElBQUcsSUFBSSxHQUFFLGNBQWMsY0FBYyxPQUFPLGFBQzdFLElBQUksV0FBVyxTQUFTO1FBQ3RCLFNBQVMsQ0FBQztRQUNWLFlBQVksQ0FBQztRQUNiLE1BQU07UUFDTixXQUFXO0lBQ2IsS0FBSyxJQUFJLE1BQU0sU0FBUztRQUN0QixTQUFTLENBQUM7UUFDVixZQUFZLENBQUM7SUFDZixLQUFLLEdBQUUsY0FBYyxJQUFJLE1BQU0sVUFBVTtRQUN6QyxTQUFTLENBQUM7SUFDWixLQUFLLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUcsSUFBRztJQUMzQixJQUFJLElBQUksR0FBRyxJQUFHO0lBQ2QsT0FBTyxDQUFDLENBQUMsS0FBTSxDQUFBLEFBQUMsQ0FBQSxHQUFHLEVBQUUsYUFBWSxFQUFHLEdBQUc7UUFBQztLQUFRLEdBQUcsTUFBTSxHQUFHLElBQUcsSUFBRyxFQUFDO0FBQ3JFO0FBQ0EsZUFBZSxHQUFHLEVBQUM7SUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBRyxNQUFNLEdBQUc7SUFDdkIsSUFBSSxNQUFNLEVBQUUsUUFBUSxPQUFPLENBQUM7SUFDNUIsSUFBSSxLQUFJO0lBQ1IsSUFBSSxDQUFDLElBQUcsT0FBTyxDQUFDO0lBQ2hCLElBQUksSUFBSTtJQUNSLEtBQUssSUFBSSxNQUFLLEVBQUcsTUFBTSxHQUFHLElBQUcsT0FBTyxDQUFBLEtBQUssR0FBRyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHLElBQUc7SUFDbEUsT0FBTyxJQUFJO0FBQ2I7QUFDQSxlQUFlLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFDO0lBQ3ZCLE9BQU8sR0FBRyxZQUFZLE1BQU0sR0FBRyxVQUFVLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxjQUFhLEVBQUcsS0FBSSxHQUFHLE1BQU0sQ0FBQSxRQUFRLEtBQ3hGLDhEQUE4RCxDQUFDLENBQUE7QUFDbkU7QUFDQSxJQUFJLEtBQUs7SUFDUCxRQUFRO1FBQ04sY0FBYztRQUNkLFlBQVk7UUFDWixRQUFRO0lBQ1Y7SUFDQSxhQUFhO1FBQ1gsY0FBYztRQUNkLFlBQVk7UUFDWixRQUFRO0lBQ1Y7QUFDRjtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxJQUFJLFNBQVMsY0FBYyxFQUFFLENBQUMsR0FBRSxDQUFDLGVBQ25DLEtBQUksYUFBYSxlQUFlLEdBQUcsS0FBSyxJQUFJO0lBQzlDLE9BQU87QUFDVDtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxJQUFJLEdBQUc7SUFDWCxJQUFJLENBQUMsR0FBRyxPQUFPO0lBQ2YsSUFBSSxLQUFJLEVBQUUsY0FBYyx5QkFBeUIsQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFDdkUsMEJBQTBCO0lBQzVCLE9BQU87QUFDVDtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxJQUFJLEdBQUc7SUFDWCxJQUFJLENBQUMsR0FBRyxPQUFPO0lBQ2YsSUFBSSxLQUFJLEVBQUUsY0FBYyx3Q0FBd0MsQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFDcEYsK0RBQStELElBQ2pFLElBQUksR0FBRyxNQUFLLEtBQUk7SUFDbEIsT0FBTztBQUNUO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLElBQUksR0FBRztJQUNYLElBQUksQ0FBQyxHQUFHLE9BQU87SUFDZixJQUFJLEtBQUksRUFBRSxjQUFjLGdDQUFnQyxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM5RSx1REFBdUQ7SUFDekQsT0FBTyxHQUFHLE1BQUssS0FBSTtBQUNyQjtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxJQUFJLEdBQUc7SUFDWCxJQUFJLENBQUMsR0FBRyxPQUFPO0lBQ2YsSUFBSSxLQUFJLEVBQUUsY0FDUiwyR0FDSyxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUFHLENBQUM7Ozs7U0FJNUIsQ0FBQyxFQUFFO0lBQ1YsT0FBTyxHQUFHLE1BQUssS0FBSTtBQUNyQjtBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxJQUFJLEdBQUc7SUFDWCxJQUFJLENBQUMsR0FBRyxPQUFPO0lBQ2YsSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUJBQWtCLEVBQUcsQ0FBQztzRkFDZ0QsQ0FBQyxFQUFFLE1BQ3ZGO0lBQ0EsT0FBTztBQUNUO0FBRUEsU0FBUyxHQUFHLEVBQUM7SUFDWCxJQUFJLElBQUksR0FBRztJQUNYLE9BQU8sQ0FBQyxDQUFFLENBQUEsS0FBSyxHQUFHLEdBQUMsS0FBTSxDQUFDLENBQUMsR0FBRztBQUNoQztBQUVBLFNBQVM7SUFDUCxPQUFPLEdBQUc7QUFDWjtBQUNBLGVBQWU7SUFDYixJQUFJLEtBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFBRyxDQUFDOzs7Ozs7U0FNN0IsQ0FBQyxLQUFLO0lBQ2IsTUFBTSxDQUFBLEFBQUMsQ0FBQSxHQUFHLEVBQUUsYUFBWSxFQUFHLElBQUc7UUFBQztRQUFTO1FBQWE7S0FBVSxHQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUcsSUFBRztBQUMxRjtBQUNBLGVBQWUsR0FBRyxFQUFDO0lBQ2pCLElBQUksSUFBSSxHQUFHO0lBQ1gsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2hCLElBQUksS0FBSSxHQUFHO0lBQ1gsSUFBSSxDQUFDLElBQUcsT0FBTyxDQUFDO0lBQ2YsQ0FBQSxHQUFHLEVBQUUsYUFBWSxFQUFHLElBQUc7UUFBQztRQUFTO1FBQWE7S0FBVSxHQUFHLEdBQUUsV0FBVyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUN2RixNQUFNLE1BQU07SUFDZCxJQUFJLElBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGdCQUFlLEVBQUcsSUFBTSxDQUFDLENBQUMsR0FBRyxLQUFJO1FBQ25ELFNBQVM7UUFDVCxVQUFVO1FBQ1YsZUFBZSxTQUFTO0lBQzFCO0lBQ0EsT0FBTztBQUNUO0FBQ0EsZUFBZSxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7SUFDMUIsSUFBSSxJQUFJLE1BQU0sR0FBRztJQUNqQixJQUFJLENBQUMsR0FBRyxPQUFPLFFBQVEsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsR0FBRSxDQUFDLE9BQU8sNEJBQTRCLENBQUMsR0FBRyxDQUFDO0lBQzNGLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxnQkFBZSxFQUFHLElBQU0sQ0FBQyxDQUFDLEdBQUcsT0FBTSxDQUFDLENBQUMsR0FBRyxLQUFJO1FBQ3RELFNBQVM7UUFDVCxVQUFVO1FBQ1YsZUFBZSxTQUFTO0lBQzFCO0lBQ0EsSUFBSSxJQUFJLEdBQUc7SUFDWCxJQUFJLENBQUMsR0FBRyxPQUFPLE9BQU8sUUFBUSxLQUM1QixDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsR0FBRSxDQUFDLE9BQU8sZ0NBQWdDLENBQUMsR0FBRyxDQUFDO0lBQ3JFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLElBQUksTUFBTSxVQUFVO1FBQ3JELFNBQVMsQ0FBQztRQUNWLFlBQVksQ0FBQztJQUNmO0lBQ0EsSUFBSSxJQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxnQkFBZSxFQUFHLElBQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSTtRQUNuRCxTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWUsU0FBUztJQUMxQjtJQUNBLE9BQU8sQ0FBQyxDQUFDLEtBQU0sQ0FBQSxHQUFFO1FBQ2YsT0FBTyxFQUFFLENBQUMsR0FBRSxDQUFDO1FBQ2IsVUFBVSxDQUFDO0lBQ2IsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFFLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDNUI7QUFDQSxlQUFlLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFDO0lBQ3ZCLE9BQU8sR0FBRyxpQkFBaUIsTUFBTSxHQUFHLGVBQWUsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLHlCQUF3QixFQUFHLEtBQUksR0FDNUYsTUFBTSxDQUFBLFFBQVEsS0FBSyxvRUFBb0UsQ0FBQyxDQUFBO0FBQzVGO0FBRUEsU0FBUztJQUNQLE9BQU8sR0FBRztBQUNaO0FBQ0EsZUFBZSxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLENBQUM7SUFDNUIsSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUseUJBQXdCLEVBQUc7SUFDekMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2hCLElBQUksSUFBSSxLQUFLLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUJBQWtCLEVBQUc7SUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDO0lBQzFCLElBQUksSUFBSSxFQUFFLE9BQ1IsSUFBSSxHQUFHLElBQ1AsSUFBSSxHQUFFLDJCQUEyQixDQUFDLENBQUMsR0FBRyxNQUFNO0lBQzlDLElBQUksRUFBRSxvQ0FBb0M7UUFDdEMsa0JBQWtCLENBQUMsQ0FBQyxHQUFFO1FBQ3RCLG9CQUFvQixDQUFDLENBQUMsR0FBRztRQUN6QiwwQkFBMEI7UUFDMUIsYUFBYTtJQUNmLElBQUksR0FBRztRQUNQLElBQUksS0FBSSxNQUFNLEdBQUc7UUFDakIsSUFBSSxDQUFDLElBQUcsT0FBTyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHO1lBQ04sSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUJBQWtCLEVBQUc7WUFDbkMsSUFBSSxDQUFDLE1BQUssQ0FBQyxHQUFHLEtBQUksT0FBTyxFQUFFLGtEQUFrRCxDQUFDO1lBQzlFLElBQUk7UUFDTjtJQUNGO0lBQ0EsSUFBSSxJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUc7SUFDdkIsT0FBTyxDQUFDLENBQUMsS0FBTSxDQUFBLElBQUksRUFBRSw4Q0FBOEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUE7QUFDdEY7QUFDQSxlQUFlLEdBQUcsRUFBQyxFQUFFLENBQUM7SUFDcEIsSUFBSSxLQUFJLEVBQUU7SUFDVixJQUFJLElBQUc7UUFDTCxJQUFJLE1BQU0sR0FBRyxLQUFJLEdBQUcsSUFBRyxJQUFHLFlBQVksT0FBTyxDQUFDO1FBQzlDLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBRyxJQUFHO1FBQ3ZCLElBQUksR0FBRyxPQUFPLENBQUM7UUFDZixJQUFJLElBQUksTUFBTSxHQUFHLElBQUc7UUFDcEIsT0FBTyxRQUFRLEtBQ2IsMEdBQ0c7SUFDUDtJQUNBLEdBQUcsSUFBRyxLQUFLLE1BQU0sR0FBRztJQUNwQixJQUFJLElBQUksT0FBTyxHQUFHLEdBQUU7SUFDcEIsT0FBTyxDQUFDLE1BQUssQ0FBQyxDQUFDLEtBQU0sQ0FBQSxRQUFRLEtBQUssNERBQTRELENBQUE7QUFDaEc7QUFDQSxlQUFlLEdBQUcsRUFBQyxFQUFFLENBQUM7SUFDcEIsT0FBTyxHQUFHLElBQUcsSUFBSSxHQUFFLGNBQWMsSUFBSSxNQUFNLFVBQVU7UUFDbkQsU0FBUyxDQUFDO0lBQ1osS0FBSyxHQUFFLGNBQWMsR0FBRyxXQUFXLFlBQVksR0FBRSxjQUFjLEdBQUcsU0FBUyxZQUFZLEdBQ3RGLFFBQVEsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRyxLQUFLLEdBQUcsR0FBRSxXQUFXLEdBQUc7QUFDdEQ7QUFFQSxTQUFTLEdBQUcsRUFBQztJQUNYLElBQUksQ0FBQyxJQUFHLE9BQU8sQ0FBQztJQUNoQixJQUFJLElBQUksY0FBYyxPQUFPLEdBQUU7SUFDL0IsT0FBTyxJQUFJLEdBQUUscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRTtBQUM3QztBQUNBLGVBQWU7SUFDYixJQUFJLEtBQUksSUFBSSxJQUFJLE9BQU8sU0FBUztJQUNoQyxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsaUJBQWdCLEVBQUcsR0FBRSxXQUFXLE9BQU8sQ0FBQztJQUNsRCxJQUFJLENBQUMsQUFBQyxDQUFBLEdBQUcsRUFBRSxxQkFBb0IsRUFBRyxHQUFFLFdBQVcsT0FBTyxDQUFDO0lBQ3ZELElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUM1QiwrRUFBK0UsQUFBQyxDQUFBLEdBQUcsRUFDbEYsbUJBQWtCLEVBQ3JCLDBFQUEwRSxBQUFDLENBQUEsR0FBRyxFQUMzRSxtQkFBa0IsRUFDbkI7SUFDSixJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sUUFBUSxLQUFLLDJEQUEyRCxDQUFDO0lBQzVGLElBQUk7UUFDRixFQUFFLGVBQWU7WUFDZixPQUFPO1lBQ1AsUUFBUTtRQUNWO0lBQ0YsRUFBRSxPQUFNLENBQUM7SUFDVCxhQUFhLHFCQUFxQixFQUFFLFFBQVEsQUFBQyxDQUFBLEdBQUcsRUFBRSxpQkFBZ0IsRUFBRyxJQUFJLElBQUksRUFBRSxNQUFNLE9BQ2xGLFNBQVMsUUFBUSxZQUFhLENBQUEsUUFBUSxLQUN6QyxnREFBZ0Q7UUFDOUMsT0FBTztJQUNULElBQUksT0FBTyxTQUFTLE9BQU8sRUFBRSxJQUFHLElBQU0sQ0FBQSxRQUFRLEtBQzVDLGdEQUFnRDtRQUM5QyxPQUFPO0lBQ1QsSUFBSSxFQUFFLFNBQVE7SUFDaEIsSUFBSyxJQUFJLEtBQUksR0FBRyxLQUFJLElBQUksS0FBSztRQUMzQixNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO1FBQ25CLElBQUksS0FBSSxJQUFJLElBQUksT0FBTyxTQUFTLE1BQU0sVUFDcEMsSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLGlCQUFnQixFQUFHLEtBQzdCLEtBQUksQ0FBQyxDQUFDLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUJBQWtCLEVBQzVCLCtHQUNLLENBQUMsQ0FBQyxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUFHO1FBQ3RDLElBQUksS0FBSyxJQUFHLE9BQU8sTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRyxNQUFNLENBQUM7SUFDL0M7SUFDQSxPQUFPLFFBQVEsS0FBSyw2RUFDbEIsQ0FBQztBQUNMO0FBQ0EsZUFBZTtJQUNiLElBQUksS0FBSSxPQUFPLFNBQVM7SUFDeEIsSUFBSSxDQUFDLEdBQUUsU0FBUyxpQkFBaUIsT0FBTyxDQUFDO0lBQ3pDLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUFHLDREQUNqQyxNQUNBLEtBQUksR0FBRyxPQUFPLFVBQVU7SUFDMUIsSUFBSSxDQUFDLElBQUcsT0FBTyxRQUFRLEtBQUssMERBQTBELENBQUM7SUFDdkYsSUFBSSxJQUFJLElBQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFDbEMsa0hBQ0ssQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFDN0IsOEVBQ0YsSUFBSTtJQUNOLElBQUssSUFBSSxLQUFJLEdBQUcsS0FBSSxJQUFJLEtBQUs7UUFDM0IsSUFBSSxLQUFJO1FBQ1IsSUFBSSxJQUFHO1lBQ0wsSUFBSSxJQUFJLGNBQWMsT0FBTyxHQUFFLGtCQUFrQixHQUFFLG9CQUFvQixDQUFDLENBQUMsR0FBRTtZQUMzRSxJQUFJLEtBQUssQ0FBQyxHQUFFLFVBQVU7Z0JBQ3BCLElBQUk7Z0JBQ0o7WUFDRjtRQUNGO1FBQ0EsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRztJQUNyQjtJQUNBLElBQUksQ0FBQyxHQUFHLE9BQU8sUUFBUSxLQUFLLHNEQUFzRCxDQUFDO0lBQ25GLElBQUk7UUFDRixFQUFFLGVBQWU7WUFDZixPQUFPO1lBQ1AsUUFBUTtRQUNWO0lBQ0YsRUFBRSxPQUFNLENBQUM7SUFDVCxPQUFPLEVBQUUsU0FBUyxDQUFDO0FBQ3JCIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS01YzBkMzU5MDkxZGM2NjczLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL29wZXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcb3JhY2xlY2xvdWRcXFxcb3BlcmF0aW9ucy5qc1wiLFwiYnVuZGxlSWRcIjpcImEwNmYzODZhNTRmNjljYjRcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBnZHVvN1xyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvb3BlcmF0aW9ucy5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlciAtPiBlVHpVeCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL29ic2VydmVyLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL2Fuc3dlciAtPiA5S2k0ZCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2ggLT4gODgzdzYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2guanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvZWR1Y2F0aW9uLWxvdi1jYW5kaWRhdGVzIC0+IGFXWThqICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL2VkdWNhdGlvbi1sb3YtY2FuZGlkYXRlcy5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC91cmwgLT4gN29mdFAgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvdXJsLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH51dGlscy9kYXRlIC0+IDNmT1NGICA9PiAgc3JjL3V0aWxzL2RhdGUuanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcImNsZWFuRWR1QW5kRXhwXCIsICgpID0+IGgpLCBuLmV4cG9ydChyLCBcImVuc3VyZU9yYWNsZUxpbmtSb3dzXCIsXHJcbiAgICAoKSA9PiBJKSwgbi5leHBvcnQociwgXCJmaWxsU2VsZWN0RmllbGRcIiwgKCkgPT4gZXQpLCBuLmV4cG9ydChyLCBcImZpbGxDaGVja0JveGVzRmllbGRcIiwgKCkgPT5cclxuICBlWCksIG4uZXhwb3J0KHIsIFwiZmlsbExpc3Rib3hGaWVsZFwiLCAoKSA9PiBlSiksIG4uZXhwb3J0KHIsIFwiZmlsbFJhZGlvR3JvdXBGaWVsZFwiLCAoKSA9PiBlUSksIG5cclxuICAuZXhwb3J0KHIsIFwiZmlsbERhdGVGaWVsZFwiLCAoKSA9PiBlWiksIG4uZXhwb3J0KHIsIFwic2F2ZUVkdWNhdGlvblwiLCAoKSA9PiBlMSksIG4uZXhwb3J0KHIsXHJcbiAgICBcImNhbmNlbEVkdWNhdGlvblwiLCAoKSA9PiBlMyksIG4uZXhwb3J0KHIsIFwic2F2ZUV4cGVyaWVuY2VcIiwgKCkgPT4gZTQpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJjYW5jZWxFeHBlcmllbmNlXCIsICgpID0+IGU1KSwgbi5leHBvcnQociwgXCJhZGRFZHVjYXRpb25cIiwgKCkgPT4gZTgpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJhZGRFeHBlcmllbmNlXCIsICgpID0+IGU5KSwgbi5leHBvcnQociwgXCJmaWxsU2tpbGxzXCIsICgpID0+IHRtKSwgbi5leHBvcnQociwgXCJmaWxsTGFuZ3VhZ2VzXCIsXHJcbiAgKCkgPT4gdEUpLCBuLmV4cG9ydChyLCBcInVwbG9hZFJlc3VtZVwiLCAoKSA9PiB0eCksIG4uZXhwb3J0KHIsIFwiaGFzT3JhY2xlQ292ZXJMZXR0ZXJTbG90XCIsICgpID0+XHJcbiAgICB0UCksIG4uZXhwb3J0KHIsIFwidXBsb2FkQ292ZXJMZXR0ZXJcIiwgKCkgPT4gdE8pLCBuLmV4cG9ydChyLCBcImZpbmRPcmFjbGVDb3ZlckxldHRlcklucHV0XCIsICgpID0+XHJcbiAgICB0TSksIG4uZXhwb3J0KHIsIFwiZmlsbENvdW50cnlcIiwgKCkgPT4gdE4pLCBuLmV4cG9ydChyLCBcInByb2NlZWRPcmFjbGVKb2JEZXRhaWxUb0FwcGx5XCIsICgpID0+XHJcbiAgICB0VSksIG4uZXhwb3J0KHIsIFwicHJvY2VlZE9yYWNsZUVtYWlsR2F0ZVN0ZXBcIiwgKCkgPT4gdEgpO1xyXG52YXIgbyA9IGUoXCJAcGxhc21vaHEvbWVzc2FnaW5nXCIpLFxyXG4gIGkgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyXCIpLFxyXG4gIGEgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvZG9tXCIpLFxyXG4gIGwgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXJcIiksXHJcbiAgcyA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvYW5zd2VyXCIpLFxyXG4gIHUgPSBlKFwifmNvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL3VybFwiKSxcclxuICBjID0gZShcIn5jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC9lZHVjYXRpb24tY2xpZW50LXNlYXJjaFwiKSxcclxuICBkID0gZShcIn5jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC9lZHVjYXRpb24tbG92LWNhbmRpZGF0ZXNcIiksXHJcbiAgZiA9IGUoXCJ+Y29yZS94cGF0aFwiKSxcclxuICBwID0gZShcIn51dGlscy9kYXRlXCIpLFxyXG4gIG0gPSBlKFwifnV0aWxzL2RlbGF5XCIpO1xyXG5hc3luYyBmdW5jdGlvbiBoKCkge1xyXG4gIGxldCBlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGUgPSAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShgLy9kaXZbQHJvbGU9J2RpYWxvZycgb3IgY29udGFpbnMoQGNsYXNzLCdhcHAtZGlhbG9nJykgb3IgY29udGFpbnMoQGNsYXNzLCdvai1kaWFsb2cnKV1cclxuICAgICAgICAgIC8vYnV0dG9uW1xyXG4gICAgICAgICAgICBub3JtYWxpemUtc3BhY2UoKT0nRGVsZXRlJ1xyXG4gICAgICAgICAgICBvciBub3JtYWxpemUtc3BhY2UoKT0nREVMRVRFJ1xyXG4gICAgICAgICAgICBvciBAZGF0YS1xYT0nY29uZmlybURlbGV0ZSdcclxuICAgICAgICAgICAgb3IgQGRhdGEtcWE9J2NvbmZpcm1EZWxldGVCdXR0b24nXHJcbiAgICAgICAgICBdYCkgfHwgbnVsbDtcclxuICAgIGUgJiYgKCgwLCBhLnRyaWdnZXJFdmVudHMpKGUsIFtcImNsaWNrXCJdKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDIwMCkpXHJcbiAgfSwgdCA9IGFzeW5jIHQgPT4ge1xyXG4gICAgbGV0IHIgPSBEYXRlLm5vdygpICsgNmU0O1xyXG4gICAgZm9yICg7IERhdGUubm93KCkgPCByOykge1xyXG4gICAgICBsZXQgciA9ICgwLCBmLmdldE9yZGVyZWROb2RlcykoXHJcbiAgICAgICAgXCIuLy9hcnRpY2xlW2NvbnRhaW5zKEBjbGFzcywgJ2FwcGx5LWZsb3ctcHJvZmlsZS1pdGVtLXRpbGUnKV1cIiwgdCk7XHJcbiAgICAgIGlmICgwID09PSByLmxlbmd0aCkgYnJlYWs7XHJcbiAgICAgIGxldCBuID0gci5sZW5ndGgsXHJcbiAgICAgICAgbyA9IHJbMF07XHJcbiAgICAgIG8uZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlb3ZlclwiLCB7XHJcbiAgICAgICAgYnViYmxlczogITAsXHJcbiAgICAgICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICAgICAgdmlldzogd2luZG93XHJcbiAgICAgIH0pKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDUwKTtcclxuICAgICAgbGV0IGkgPSAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICAgICAgIFwiLi8vYnV0dG9uW2NvbnRhaW5zKEBjbGFzcywgJ2FwcGx5LWZsb3ctcHJvZmlsZS1pdGVtLXRpbGVfX2RlbGV0ZS1pY29uJyldXCIsIG8pIHx8XHJcbiAgICAgICAgbnVsbDtcclxuICAgICAgaWYgKCFpKSBicmVhaztcclxuICAgICAgKDAsIGEudHJpZ2dlckV2ZW50cykoaSwgW1wiY2xpY2tcIl0pLCBhd2FpdCAoMCwgbS5kZWxheSkoMTUwKSwgYXdhaXQgZSgpO1xyXG4gICAgICBsZXQgbCA9ICExO1xyXG4gICAgICBmb3IgKGxldCBlID0gMDsgZSA8IDEwOyBlKyspIHtcclxuICAgICAgICBhd2FpdCAoMCwgbS5kZWxheSkoMTUwKTtcclxuICAgICAgICBsZXQgZSA9ICgwLCBmLmdldE9yZGVyZWROb2RlcykoXHJcbiAgICAgICAgICBcIi4vL2FydGljbGVbY29udGFpbnMoQGNsYXNzLCAnYXBwbHktZmxvdy1wcm9maWxlLWl0ZW0tdGlsZScpXVwiLCB0KTtcclxuICAgICAgICBpZiAoZS5sZW5ndGggPCBuKSB7XHJcbiAgICAgICAgICBsID0gITA7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIWwpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBcIkZhaWxlZCB0byBkZWxldGUgcHJvZmlsZSBpdGVtIHRpbGUgd2l0aGluIHJldHJpZXM7IHN0b3AgY2xlYW51cCBlYXJseSB0byBhdm9pZCBibG9ja2luZyBhdXRvZmlsbC5cIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgciA9ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgJy8vZGl2W0Byb2xlPVwicmVnaW9uXCIgYW5kIChjb250YWlucyhAYXJpYS1sYWJlbCwgXCJFeHBlcmllbmNlXCIpIG9yIGNvbnRhaW5zKEBhcmlhLWxhYmVsLCBcIkVtcGxveW1lbnRcIikpXSB8IC4vL3RpbWVsaW5lLWZvcm0tYnVpbGRlcltAY2xhc3M9XCJ0aW1lbGluZS1mb3JtLWRpYWxvZ19fY29udGVudFwiXSB8IC8vZGl2W2NvbnRhaW5zKEBjbGFzcywgXCJhcHBseS1mbG93LWJsb2NrLS13b3JrLWFuZC1lZHVjYXRpb24tdGltZWxpbmVcIildJ1xyXG4gICAgKSB8fCBudWxsO1xyXG4gIHIgJiYgYXdhaXQgdChyKTtcclxuICBsZXQgbiA9ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgXCIvL2RpdltAcm9sZT0ncmVnaW9uJyBhbmQgY29udGFpbnMoQGFyaWEtbGFiZWwsICdFZHVjYXRpb24nKV0gfCAuLy90aW1lbGluZS1mb3JtLWJ1aWxkZXJbQGNsYXNzPSd0aW1lbGluZS1mb3JtLWRpYWxvZ19fY29udGVudCddIHwgLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnYXBwbHktZmxvdy1ibG9jay0td29yay1hbmQtZWR1Y2F0aW9uLXRpbWVsaW5lJyldXCJcclxuICAgICkgfHwgbnVsbDtcclxuICBuICYmIGF3YWl0IHQobik7XHJcbiAgbGV0IG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmVhdXRpZnVsLXRpbWVsaW5lLWl0ZW1cIik7XHJcbiAgZm9yICg7IG8ubGVuZ3RoID4gMDspIHtcclxuICAgIGxldCBlID0gb1swXTtcclxuICAgIGU/LmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZW92ZXJcIiwge1xyXG4gICAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICAgIGNhbmNlbGFibGU6ICEwLFxyXG4gICAgICAgIHZpZXc6IHdpbmRvd1xyXG4gICAgICB9KSksIGF3YWl0ICgwLCBtLmRlbGF5KSg1MCksIGU/LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJiZWF1dGlmdWwtdGltZWxpbmUtaXRlbV9fZGVsZXRlLWljb25cIilbMF0/LmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSksXHJcbiAgICAgIGF3YWl0ICgwLCBtLmRlbGF5KSg1MClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGcoZSwgdCA9IHt9KSB7XHJcbiAgbGV0IHIgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBkb2N1bWVudCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmIGUuaWQgP1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZS5pZH0tdG9nZ2xlLWJ1dHRvbmApIDogbnVsbCxcclxuICAgIG4gPSBlLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIikgfHwgcj8uZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKSB8fCAoZS5pZCA/XHJcbiAgICAgIGAke2UuaWR9LWxpc3Rib3hgIDogXCJcIiksXHJcbiAgICBvID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiBuID9cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG4pIDogbnVsbCxcclxuICAgIGkgPSBvID8gQXJyYXkuZnJvbShvLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0sIC5jeC1zZWxlY3RfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKSkubWFwKGUgPT4gZS50ZXh0Q29udGVudD8ucmVwbGFjZShcclxuICAgICAgL1xccysvZywgXCIgXCIpLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pLnNsaWNlKDAsIDUpIDogW107XHJcbiAgcmV0dXJuIHtcclxuICAgIGZpZWxkTmFtZTogZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLFxyXG4gICAgaWQ6IGUuaWQsXHJcbiAgICByb2xlOiBlLnJvbGUsXHJcbiAgICB2YWx1ZTogZS52YWx1ZSxcclxuICAgIGFyaWFFeHBhbmRlZDogZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpLFxyXG4gICAgYXJpYUNvbnRyb2xzOiBlLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiksXHJcbiAgICBhcmlhSW52YWxpZDogZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWludmFsaWRcIiksXHJcbiAgICB0b2dnbGVFeGlzdHM6ICEhcixcclxuICAgIHRvZ2dsZUFyaWFFeHBhbmRlZDogcj8uZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSxcclxuICAgIHRvZ2dsZUFyaWFMYWJlbDogcj8uZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSxcclxuICAgIGxpc3Rib3hFeGlzdHM6ICEhbyxcclxuICAgIGxpc3Rib3hBcmlhQnVzeTogbz8uZ2V0QXR0cmlidXRlKFwiYXJpYS1idXN5XCIpLFxyXG4gICAgc2VsZWN0ZWRPcHRpb25zOiBpLFxyXG4gICAgY2xhc3NOYW1lOiBcInN0cmluZ1wiID09IHR5cGVvZiBlLmNsYXNzTmFtZSA/IGUuY2xhc3NOYW1lIDogdm9pZCAwLFxyXG4gICAgYWN0aXZlRWxlbWVudElkOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBkb2N1bWVudCAmJiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBFbGVtZW50ICYmIGRvY3VtZW50XHJcbiAgICAgIC5hY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQgOiB2b2lkIDAsXHJcbiAgICAuLi50XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiKGUsIHQsIHIgPSB7fSkge1xyXG4gIGlmICghdigpKSByZXR1cm47XHJcbiAgbGV0IG4gPSBnKHQsIHIpO1xyXG4gIGlmICgoMCwgcy5pc09yYWNsZVBob25lQ291bnRyeUNvZGVGaWVsZCkodC5pZCB8fCB0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikpKSB7XHJcbiAgICBjb25zb2xlLndhcm4oYFtPcmFjbGVDbG91ZF1bUGhvbmVDb3VudHJ5RGVidWddICR7ZX0gJHtKU09OLnN0cmluZ2lmeShuKX1gKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBjb25zb2xlLmRlYnVnKGBbT3JhY2xlQ2xvdWRdW0NvbWJvYm94XSAke2V9ICR7SlNPTi5zdHJpbmdpZnkobil9YClcclxufVxyXG5cclxuZnVuY3Rpb24geShlLCB0ID0ge30pIHtcclxuICBsZXQgciA9IGUuc3RhcnRzV2l0aChcImVkdWNhdGlvbi1jbGllbnQtc2VhcmNoOlwiKSB8fCBlLnN0YXJ0c1dpdGgoXCJlZHVjYXRpb24tbWFqb3ItdGV4dDpcIik7XHJcbiAgaWYgKHYoKSB8fCByKSB0cnkge1xyXG4gICAgY29uc29sZS5pbmZvKGBbT3JhY2xlQ2xvdWRdW0Zsb3ddICR7ZX0gJHtKU09OLnN0cmluZ2lmeSh7dDpEYXRlLm5vdygpLC4uLnR9KX1gKVxyXG4gIH0gY2F0Y2gge31cclxufVxyXG5cclxuZnVuY3Rpb24gdigpIHtcclxuICBpZiAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2Ygd2luZG93KSByZXR1cm4gITE7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBlID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24/LnNlYXJjaCA/PyBcIlwiKTtcclxuICAgIHJldHVybiBcIjFcIiA9PT0gZS5nZXQoXCJqb2JyaWdodF9vcmFjbGVjbG91ZF9jb21ib2JveF9kZWJ1Z1wiKSB8fCB3aW5kb3cubG9jYWxTdG9yYWdlPy5nZXRJdGVtKFxyXG4gICAgICBcImpvYnJpZ2h0X29yYWNsZWNsb3VkX2NvbWJvYm94X2RlYnVnXCIpID09PSBcIjFcIlxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuICExXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3KGUpIHtcclxuICByZXR1cm4gW1wic3RhcnRkYXRlXCIsIFwiZW5kZGF0ZVwiXS5pbmNsdWRlcyhTdHJpbmcoZSA/PyBcIlwiKS5yZXBsYWNlKC9bXmEtekEtWl0vZywgXCJcIikudG9Mb3dlckNhc2UoKSlcclxufVxyXG5cclxuZnVuY3Rpb24gUyhlLCB0LCByID0ge30pIHtcclxuICBpZiAodigpICYmIHcodCkpIHRyeSB7XHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgIGBbT3JhY2xlQ2xvdWRdW1RpbWVsaW5lRGF0ZV0gJHtlfSAke0pTT04uc3RyaW5naWZ5KHt0OkRhdGUubm93KCksZmllbGROYW1lOnQsLi4ucn0pfWApXHJcbiAgfSBjYXRjaCB7fVxyXG59XHJcblxyXG5mdW5jdGlvbiBFKGUpIHtcclxuICByZXR1cm4gZS5tYXAoZSA9PiBlLnRleHRDb250ZW50Py50cmltKCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHgoZSkge1xyXG4gIGxldCB0ID0gbmV3IE1hcDtcclxuICBmb3IgKGxldCByIG9mIGUpIHtcclxuICAgIGxldCBlID0gci5jbG9zZXN0Py4oXCJbcm9sZT0nb3B0aW9uJ11cIikgfHwgci5jbG9zZXN0Py4oXCJbcm9sZT0ncm93J11cIikgfHwgcixcclxuICAgICAgbiA9IHQuZ2V0KGUpO1xyXG4gICAgKCFuIHx8IEMocikgPiBDKG4pKSAmJiB0LnNldChlLCByKVxyXG4gIH1cclxuICByZXR1cm4gWy4uLnQudmFsdWVzKCldXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEMoZSkge1xyXG4gIGxldCB0ID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZS5jbGFzc05hbWUgPyBlLmNsYXNzTmFtZSA6IFwiXCI7XHJcbiAgcmV0dXJuIGUuY2xhc3NMaXN0Py5jb250YWlucyhcImN4LXNlbGVjdF9fbGlzdC1pdGVtLS1jb250ZW50XCIpIHx8IHQuc3BsaXQoL1xccysvKS5pbmNsdWRlcyhcclxuICAgIFwiY3gtc2VsZWN0X19saXN0LWl0ZW0tLWNvbnRlbnRcIikgPyAzIDogZS5jbG9zZXN0Py4oXCJbcm9sZT0nZ3JpZGNlbGwnXVwiKSA9PT0gZSA/IDIgOiAxXHJcbn1cclxubGV0IEEgPSBgLy9hcHBseS1mbG93LWJsb2NrW1xyXG4gIC4vLypbY29udGFpbnModHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZSgpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSwgJ3N1cHBvcnRpbmcgZG9jdW1lbnRzIGFuZCB1cmxzJyldXHJcbl0vL2Rpdltjb250YWlucyhAY2xhc3MsICdpbnB1dC1yb3cnKV1bXHJcbiAgLi8vbGFiZWxbY29udGFpbnModHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZSgpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSwgJ2xpbmsnKV1cclxuXS8vaW5wdXRbbm90KEB0eXBlPSdoaWRkZW4nKSBhbmQgbm90KEB0eXBlPSdmaWxlJyldYCxcclxuICBrID0gYC8vYXBwbHktZmxvdy1ibG9ja1tcclxuICAuLy8qW2NvbnRhaW5zKHRyYW5zbGF0ZShub3JtYWxpemUtc3BhY2UoKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyksICdzdXBwb3J0aW5nIGRvY3VtZW50cyBhbmQgdXJscycpXVxyXG5dLy9idXR0b25bXHJcbiAgY29udGFpbnModHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZSgpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSwgJ2FkZCBhbm90aGVyIGxpbmsnKVxyXG5dYDtcclxuXHJcbmZ1bmN0aW9uIFQoKSB7XHJcbiAgcmV0dXJuICgwLCBmLmdldE9yZGVyZWROb2RlcykoQSkuZmlsdGVyKGUgPT4gXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlLmNoZWNrVmlzaWJpbGl0eSB8fCBlXHJcbiAgICAuY2hlY2tWaXNpYmlsaXR5KCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEYoKSB7XHJcbiAgcmV0dXJuICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKGspXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gSShlKSB7XHJcbiAgaWYgKCEoZSA8PSAxKSlcclxuICAgIGZvciAoOyBUKCkubGVuZ3RoIDwgZTspIHtcclxuICAgICAgbGV0IGUgPSBUKCkubGVuZ3RoLFxyXG4gICAgICAgIHQgPSBGKCk7XHJcbiAgICAgIGlmICghdCB8fCAoKDAsIGEudHJpZ2dlckV2ZW50cykodCwgW1wiY2xpY2tcIl0pLCBhd2FpdCAoMCwgbC53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiBUKClcclxuICAgICAgICAgIC5sZW5ndGggPiBlLCB7XHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDNlMyxcclxuICAgICAgICAgICAgaW50ZXJ2YWw6IDEwMCxcclxuICAgICAgICAgICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gICAgICAgICAgfSksIFQoKS5sZW5ndGggPD0gZSkpIHJldHVyblxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBqKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGUgPz8gXCJcIikucmVwbGFjZSgvW15hLXpBLVowLTldL2csIFwiXCIpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24gRChlKSB7XHJcbiAgbGV0IHQgPSBqKGUpO1xyXG4gIHJldHVybiBcInNjaG9vbFwiID09PSB0IHx8IFwic2Nob29sbmFtZVwiID09PSB0IHx8IHQuaW5jbHVkZXMoXCJlZHVjYXRpb25hbGVzdGFibGlzaG1lbnRcIilcclxufVxyXG5cclxuZnVuY3Rpb24gUChlKSB7XHJcbiAgcmV0dXJuIFwibWFqb3JcIiA9PT0gaihlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBfKGUpIHtcclxuICBsZXQgdCA9IGooZSk7XHJcbiAgcmV0dXJuIFwiZGVncmVlXCIgPT09IHQgfHwgdC5pbmNsdWRlcyhcImRlZ3JlZVwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBMKGUpIHtcclxuICBsZXQgdCA9IGVBKGUudGV4dENvbnRlbnQpLnJlcGxhY2UoL1suIV0rJC9nLCBcIlwiKTtcclxuICByZXR1cm4gXCJubyByZXN1bHRzXCIgPT09IHQgfHwgXCJubyByZXN1bHRzIGZvdW5kXCIgPT09IHQgfHwgXCJubyByZXN1bHRzIHdlcmUgZm91bmRcIiA9PT0gdFxyXG59XHJcblxyXG5mdW5jdGlvbiBSKGUpIHtcclxuICBsZXQgdCA9IGVBKGUudGV4dENvbnRlbnQpLnJlcGxhY2UoL1suIV0rJC9nLCBcIlwiKTtcclxuICByZXR1cm4gXCJubyByZXN1bHRzXCIgPT09IHQgfHwgL15ubyByZXN1bHRzKD86IHdlcmUpPyBmb3VuZFxcYi8udGVzdCh0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBPKGUpIHtcclxuICByZXR1cm4gUChlKSA/IFwibWFqb3JcIiA6IEQoZSkgPyBcInNjaG9vbFwiIDogbnVsbFxyXG59XHJcbmxldCBNID0gYC4vL2RpdltAcm9sZT0ncm93J10vL2RpdltAcm9sZT0nZ3JpZGNlbGwnXS8vc3Bhbltjb250YWlucyhAY2xhc3MsJ2N4LXNlbGVjdF9fbGlzdC1pdGVtLS1jb250ZW50JyldXHJcbiAgfCAuLy9kaXZbQHJvbGU9J3JvdyddLy9kaXZbQHJvbGU9J2dyaWRjZWxsJ11bbm9ybWFsaXplLXNwYWNlKCldXHJcbiAgfCAuLy8qW0Byb2xlPSdvcHRpb24nXVtub3JtYWxpemUtc3BhY2UoKV1gO1xyXG5cclxuZnVuY3Rpb24gTihlKSB7XHJcbiAgcmV0dXJuIFN0cmluZyhlID8/IFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiAkKGUpIHtcclxuICBpZiAoXCJ0cnVlXCIgPT09IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikpIHJldHVybiAhMTtcclxuICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlLmNoZWNrVmlzaWJpbGl0eSkgcmV0dXJuICEwO1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZS5jaGVja1Zpc2liaWxpdHkoe1xyXG4gICAgICBjaGVja09wYWNpdHk6ICEwLFxyXG4gICAgICBjaGVja1Zpc2liaWxpdHlDU1M6ICEwXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGUuY2hlY2tWaXNpYmlsaXR5KClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEIoZSkge1xyXG4gIGxldCB0ID0gbmV3IFNldCxcclxuICAgIHIgPSBbXSxcclxuICAgIG4gPSB4KCgwLCBmLmdldE9yZGVyZWROb2RlcykoTSwgZSkpLFxyXG4gICAgbyA9IDAsXHJcbiAgICBpID0gMCxcclxuICAgIGEgPSAwO1xyXG4gIGZvciAobGV0IGUgb2Ygbikge1xyXG4gICAgaWYgKCEkKGUpKSB7XHJcbiAgICAgIG8gKz0gMTtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGlmIChMKGUpKSB7XHJcbiAgICAgIGkgKz0gMTtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGxldCBuID0gTihlLnRleHRDb250ZW50KTtcclxuICAgIGlmICghbikge1xyXG4gICAgICBhICs9IDE7XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcbiAgICBsZXQgbCA9IG4ubm9ybWFsaXplKFwiTkZLQ1wiKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdC5oYXMobCkgfHwgKHQuYWRkKGwpLCByLnB1c2goe1xyXG4gICAgICBlbGVtZW50OiBlLFxyXG4gICAgICB0ZXh0OiBuXHJcbiAgICB9KSlcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGNhbmRpZGF0ZXM6IHIuc2xpY2UoMCwgMjUpLFxyXG4gICAgcmF3T3B0aW9uQ291bnQ6IG4ubGVuZ3RoLFxyXG4gICAgaGlkZGVuT3B0aW9uQ291bnQ6IG8sXHJcbiAgICBub1Jlc3VsdE9wdGlvbkNvdW50OiBpLFxyXG4gICAgaW52YWxpZE9wdGlvbkNvdW50OiBhXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBxKGUpIHtcclxuICByZXR1cm4gQihlKS5jYW5kaWRhdGVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFUoZSkge1xyXG4gIHJldHVybiBlLm1hcChlID0+IGUudGV4dCkuam9pbihcIlxceDAxXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEgoZSkge1xyXG4gIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuZ2V0QXR0cmlidXRlID8gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWJ1c3lcIikgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFkoZSkge1xyXG4gIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuZ2V0QXR0cmlidXRlID8gZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpIDogbnVsbFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHooZSkge1xyXG4gIGxldCB0ID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiBlLmlkID9cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2UuaWR9LXRvZ2dsZS1idXR0b25gKSA6IG51bGwsXHJcbiAgICByID0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpIHx8IHQ/LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIikgfHwgKGUuaWQgP1xyXG4gICAgICBgJHtlLmlkfS1saXN0Ym94YCA6IFwiXCIpO1xyXG4gIHJldHVybiByID8gYXdhaXQgZVUoYC8vKltAaWQ9XCIke3J9XCJdYCwgMTAwLCA2KSA6IG51bGxcclxufVxyXG5hc3luYyBmdW5jdGlvbiBWKGUsIHQpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IHIgPSBhd2FpdCAoMCwgby5zZW5kVG9CYWNrZ3JvdW5kKSh7XHJcbiAgICAgICAgbmFtZTogXCJwcmVwYXJlT3JhY2xlRWR1Y2F0aW9uTG92Q2FwdHVyZVwiLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIGZpZWxkVHlwZTogZSxcclxuICAgICAgICAgIHNlYXJjaElucHV0OiB0XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgbiA9IFN0cmluZyhyPy5jYXB0dXJlSWQgPz8gXCJcIikudHJpbSgpO1xyXG4gICAgaWYgKG4pIHJldHVybiBuXHJcbiAgfSBjYXRjaCAocikge1xyXG4gICAgeShcImVkdWNhdGlvbi1jbGllbnQtc2VhcmNoOmxvdi1jYXB0dXJlLXByZXBhcmUtZXJyb3JcIiwge1xyXG4gICAgICBmaWVsZFR5cGU6IGUsXHJcbiAgICAgIHNlYXJjaElucHV0TGVuZ3RoOiB0Lmxlbmd0aCxcclxuICAgICAgZXJyb3JUeXBlOiByIGluc3RhbmNlb2YgRXJyb3IgPyByLm5hbWUgOiB0eXBlb2YgclxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpsb3YtY2FwdHVyZS1wcmVwYXJlXCIsIHtcclxuICAgIGZpZWxkVHlwZTogZSxcclxuICAgIHByZXBhcmVkOiAhMSxcclxuICAgIHNlYXJjaElucHV0TGVuZ3RoOiB0Lmxlbmd0aFxyXG4gIH0pLCBudWxsXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gVyhlLCB0LCByKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBuID0gYXdhaXQgKDAsIG8uc2VuZFRvQmFja2dyb3VuZCkoe1xyXG4gICAgICAgIG5hbWU6IFwiY29uc3VtZU9yYWNsZUVkdWNhdGlvbkxvdkNhcHR1cmVcIixcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBjYXB0dXJlSWQ6IGVcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICBpID0gQXJyYXkuaXNBcnJheShuPy5pdGVtcykgPyBuLml0ZW1zIDogW10sXHJcbiAgICAgIGEgPSBuPy5maWVsZFR5cGUgPT09IHQsXHJcbiAgICAgIGwgPSBcInN0cmluZ1wiID09IHR5cGVvZiBuPy5jYXB0dXJlU3RhdHVzID8gbi5jYXB0dXJlU3RhdHVzIDogXCJ1bmtub3duXCI7XHJcbiAgICByZXR1cm4geShcImVkdWNhdGlvbi1jbGllbnQtc2VhcmNoOmxvdi1jYXB0dXJlLWNvbnN1bWVcIiwge1xyXG4gICAgICBmaWVsZFR5cGU6IHQsXHJcbiAgICAgIHNlYXJjaElucHV0TGVuZ3RoOiByLmxlbmd0aCxcclxuICAgICAgY2FwdHVyZWRJdGVtQ291bnQ6IGkubGVuZ3RoLFxyXG4gICAgICBjYXB0dXJlU3RhdHVzOiBsLFxyXG4gICAgICBjYXB0dXJlRGlhZ25vc3RpYzogbj8uY2FwdHVyZURpYWdub3N0aWMsXHJcbiAgICAgIG1hdGNoZWRGaWVsZFR5cGU6IGFcclxuICAgIH0pLCBhID8gaSA6IFtdXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpsb3YtY2FwdHVyZS1jb25zdW1lLWVycm9yXCIsIHtcclxuICAgICAgZmllbGRUeXBlOiB0LFxyXG4gICAgICBzZWFyY2hJbnB1dExlbmd0aDogci5sZW5ndGgsXHJcbiAgICAgIGVycm9yVHlwZTogZSBpbnN0YW5jZW9mIEVycm9yID8gZS5uYW1lIDogdHlwZW9mIGVcclxuICAgIH0pLCBbXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gRyhlLCB0LCByKSB7XHJcbiAgbGV0IG4gPSByLm1hcCgoe1xyXG4gICAgICB0ZXh0OiBlXHJcbiAgICB9KSA9PiAoe1xyXG4gICAgICB0ZXh0OiBlXHJcbiAgICB9KSksXHJcbiAgICBvID0gKDAsIGQubWFwT3JhY2xlRWR1Y2F0aW9uTG92Q2FuZGlkYXRlcykoe1xyXG4gICAgICBmaWVsZFR5cGU6IGUsXHJcbiAgICAgIGxvdkl0ZW1zOiB0LFxyXG4gICAgICB2aXNpYmxlQ2FuZGlkYXRlczogblxyXG4gICAgfSk7XHJcbiAgcmV0dXJuIHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpsb3YtY2FuZGlkYXRlLW1hcFwiLCB7XHJcbiAgICBmaWVsZFR5cGU6IGUsXHJcbiAgICAuLi5vLmRpYWdub3N0aWNzXHJcbiAgfSksIG9cclxufVxyXG5hc3luYyBmdW5jdGlvbiBLKGUsIHQsIHIsIG4pIHtcclxuICBsZXQgbztcclxuICBsZXQgaSA9IE4ocikudG9Mb3dlckNhc2UoKSxcclxuICAgIGEgPSBuLmxhc3RTZWFyY2hJZGVudGl0eSxcclxuICAgIGwgPSBhd2FpdCBWKHQsIHIpO1xyXG4gIHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpsb3YtY2FwdHVyZS1wcmVwYXJlXCIsIHtcclxuICAgIGZpZWxkVHlwZTogdCxcclxuICAgIHByZXBhcmVkOiAhIWwsXHJcbiAgICBzZWFyY2hJbnB1dExlbmd0aDogci5sZW5ndGhcclxuICB9KSwgYXdhaXQgZWkoZSk7XHJcbiAgbGV0IHMgPSBhd2FpdCB6KGUpO1xyXG4gIGlmICghcykgcmV0dXJuIG4ubGFzdFNlYXJjaElkZW50aXR5ID0gaSwgbi5sYXN0U2VhcmNoSW5wdXQgPSByLCBuLmxhc3RDYW5kaWRhdGVzID0gW10sIG5cclxuICAgIC5jYW5kaWRhdGVzQnlTZWFyY2hJZGVudGl0eS5zZXQoaSwgW10pLCB5KFwiZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2g6Y2FuZGlkYXRlLWNhcHR1cmVcIiwge1xyXG4gICAgICBmaWVsZFR5cGU6IHQsXHJcbiAgICAgIGZpZWxkTmFtZTogZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IGUuaWQgfHwgXCJ1bmtub3duXCIsXHJcbiAgICAgIHNlYXJjaElucHV0TGVuZ3RoOiByLmxlbmd0aCxcclxuICAgICAgbW9kYWxGb3VuZDogITFcclxuICAgIH0pLCBbXTtcclxuICBsZXQgdSA9IEIocyksXHJcbiAgICBjID0gdS5jYW5kaWRhdGVzLFxyXG4gICAgZCA9IFUoYyk7XHJcbiAgeShcImVkdWNhdGlvbi1jbGllbnQtc2VhcmNoOmNhbmRpZGF0ZS1jYXB0dXJlXCIsIHtcclxuICAgIGZpZWxkVHlwZTogdCxcclxuICAgIGZpZWxkTmFtZTogZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IGUuaWQgfHwgXCJ1bmtub3duXCIsXHJcbiAgICBzZWFyY2hJbnB1dExlbmd0aDogci5sZW5ndGgsXHJcbiAgICBtb2RhbEZvdW5kOiAhMCxcclxuICAgIGluaXRpYWxDYW5kaWRhdGVDb3VudDogYy5sZW5ndGgsXHJcbiAgICBpbml0aWFsUmF3T3B0aW9uQ291bnQ6IHUucmF3T3B0aW9uQ291bnQsXHJcbiAgICBsaXN0Ym94SWQ6IHMuaWQgfHwgbnVsbCxcclxuICAgIGluaXRpYWxMaXN0Ym94Um9sZTogWShzKSxcclxuICAgIGluaXRpYWxMaXN0Ym94QXJpYUJ1c3k6IEgocylcclxuICB9KSwgZW4oZSwgcik7XHJcbiAgbGV0IGYgPSBsID8gVyhsLCB0LCByKSA6IFByb21pc2UucmVzb2x2ZShbXSksXHJcbiAgICBwID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgIGxldCByID0gYXdhaXQgZjtcclxuICAgICAgcmV0dXJuIEcodCwgciwgZSlcclxuICAgIH0sIGggPSBlID0+IChuLmxhc3RTZWFyY2hJbnB1dCA9IHIsIG4ubGFzdENhbmRpZGF0ZXMgPSBlLCBuLmNhbmRpZGF0ZXNCeVNlYXJjaElkZW50aXR5LnNldChcclxuICAgICAgaSwgZSksIGUpLCBnID0gKHtcclxuICAgICAgcmVhZEluZGV4OiBlLFxyXG4gICAgICBzbmFwc2hvdFJlY292ZXJ5OiBuLFxyXG4gICAgICB2aXNpYmxlQ2FuZGlkYXRlQ291bnQ6IG8sXHJcbiAgICAgIGRpYWdub3N0aWNzOiBpXHJcbiAgICB9KSA9PiB7XHJcbiAgICAgIHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpjYW5kaWRhdGUtbWFwLW1pc21hdGNoXCIsIHtcclxuICAgICAgICBmaWVsZFR5cGU6IHQsXHJcbiAgICAgICAgc2VhcmNoSW5wdXRMZW5ndGg6IHIubGVuZ3RoLFxyXG4gICAgICAgIHJlYWRJbmRleDogZSxcclxuICAgICAgICBzbmFwc2hvdFJlY292ZXJ5OiBuLFxyXG4gICAgICAgIHZpc2libGVDYW5kaWRhdGVDb3VudDogbyxcclxuICAgICAgICAuLi5pXHJcbiAgICAgIH0pXHJcbiAgICB9LCBiID0gXCJcIiwgdiA9IFwiXCI7XHJcbiAgZm9yIChsZXQgbCA9IDA7IGwgPCAxNDsgbCArPSAxKSB7XHJcbiAgICBsID4gMCAmJiBhd2FpdCAoMCwgbS5kZWxheSkoMjUwKTtcclxuICAgIGxldCB1ID0gYXdhaXQgeihlKTtcclxuICAgIHUgJiYgdSAhPT0gcyAmJiAoeShcImVkdWNhdGlvbi1jbGllbnQtc2VhcmNoOmxpc3Rib3gtcmVwbGFjZWRcIiwge1xyXG4gICAgICBmaWVsZFR5cGU6IHQsXHJcbiAgICAgIHNlYXJjaElucHV0TGVuZ3RoOiByLmxlbmd0aCxcclxuICAgICAgcmVhZEluZGV4OiBsLFxyXG4gICAgICBzYW1lTGlzdGJveElkOiB1LmlkID09PSBzLmlkLFxyXG4gICAgICBwcmV2aW91c0xpc3Rib3hSb2xlOiBZKHMpLFxyXG4gICAgICBjdXJyZW50TGlzdGJveFJvbGU6IFkodSksXHJcbiAgICAgIHByZXZpb3VzTGlzdGJveENvbm5lY3RlZDogcy5pc0Nvbm5lY3RlZFxyXG4gICAgfSksIHMgPSB1KTtcclxuICAgIGxldCBjID0gQihzKSxcclxuICAgICAgZiA9IGMuY2FuZGlkYXRlcyxcclxuICAgICAgdyA9IFtmLmxlbmd0aCwgYy5yYXdPcHRpb25Db3VudCwgYy5oaWRkZW5PcHRpb25Db3VudCwgYy5ub1Jlc3VsdE9wdGlvbkNvdW50LCBjXHJcbiAgICAgICAgLmludmFsaWRPcHRpb25Db3VudCwgSChzKSB8fCBcIm5vbmVcIlxyXG4gICAgICBdLmpvaW4oXCI6XCIpO1xyXG4gICAgKDAgPT09IGwgfHwgdyAhPT0gdikgJiYgKHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpjYW5kaWRhdGUtcG9sbFwiLCB7XHJcbiAgICAgIGZpZWxkVHlwZTogdCxcclxuICAgICAgc2VhcmNoSW5wdXRMZW5ndGg6IHIubGVuZ3RoLFxyXG4gICAgICByZWFkSW5kZXg6IGwsXHJcbiAgICAgIGNhbmRpZGF0ZUNvdW50OiBmLmxlbmd0aCxcclxuICAgICAgcmF3T3B0aW9uQ291bnQ6IGMucmF3T3B0aW9uQ291bnQsXHJcbiAgICAgIGhpZGRlbk9wdGlvbkNvdW50OiBjLmhpZGRlbk9wdGlvbkNvdW50LFxyXG4gICAgICBub1Jlc3VsdE9wdGlvbkNvdW50OiBjLm5vUmVzdWx0T3B0aW9uQ291bnQsXHJcbiAgICAgIGludmFsaWRPcHRpb25Db3VudDogYy5pbnZhbGlkT3B0aW9uQ291bnQsXHJcbiAgICAgIGxpc3Rib3hJZDogcy5pZCB8fCBudWxsLFxyXG4gICAgICBsaXN0Ym94Um9sZTogWShzKSxcclxuICAgICAgbGlzdGJveEFyaWFCdXN5OiBIKHMpXHJcbiAgICB9KSwgdiA9IHcpO1xyXG4gICAgbGV0IFMgPSBVKGYpLFxyXG4gICAgICBFID0gaSAhPT0gYTtcclxuICAgIGlmICghRSB8fCAhZCB8fCBTICE9PSBkKSB7XHJcbiAgICAgIGlmIChmLmxlbmd0aCA+IDAgJiYgKG8gPSB7XHJcbiAgICAgICAgICBjYW5kaWRhdGVzOiBmLm1hcChlID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmVcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICAgIHJlYWRJbmRleDogbFxyXG4gICAgICAgIH0pLCAwID09PSBmLmxlbmd0aCAmJiBvKSB7XHJcbiAgICAgICAgbi5sYXN0U2VhcmNoSWRlbnRpdHkgPSBpO1xyXG4gICAgICAgIGxldCBlID0gYXdhaXQgcChvLmNhbmRpZGF0ZXMpO1xyXG4gICAgICAgIGlmICgwID09PSBlLmNhbmRpZGF0ZXMubGVuZ3RoICYmIGUuZGlhZ25vc3RpY3MubG92SXRlbUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgZyh7XHJcbiAgICAgICAgICAgIHJlYWRJbmRleDogbCxcclxuICAgICAgICAgICAgc25hcHNob3RSZWNvdmVyeTogITAsXHJcbiAgICAgICAgICAgIHZpc2libGVDYW5kaWRhdGVDb3VudDogby5jYW5kaWRhdGVzLmxlbmd0aCxcclxuICAgICAgICAgICAgZGlhZ25vc3RpY3M6IGUuZGlhZ25vc3RpY3NcclxuICAgICAgICAgIH0pLCBiID0gUztcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhID0gaChlLmNhbmRpZGF0ZXMpO1xyXG4gICAgICAgIHJldHVybiB5KFwiZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2g6Y2FuZGlkYXRlLXJlYWRcIiwge1xyXG4gICAgICAgICAgZmllbGRUeXBlOiB0LFxyXG4gICAgICAgICAgc2VhcmNoSW5wdXRMZW5ndGg6IHIubGVuZ3RoLFxyXG4gICAgICAgICAgcmVhZEluZGV4OiBsLFxyXG4gICAgICAgICAgY2FuZGlkYXRlQ291bnQ6IGEubGVuZ3RoLFxyXG4gICAgICAgICAgdmlzaWJsZUNhbmRpZGF0ZUNvdW50OiBvLmNhbmRpZGF0ZXMubGVuZ3RoLFxyXG4gICAgICAgICAgbm9SZXN1bHRzOiAhMSxcclxuICAgICAgICAgIHNuYXBzaG90UmVjb3Zlcnk6ICEwLFxyXG4gICAgICAgICAgc25hcHNob3RSZWFkSW5kZXg6IG8ucmVhZEluZGV4XHJcbiAgICAgICAgfSksIGFcclxuICAgICAgfVxyXG4gICAgICBpZiAoMCA9PT0gZi5sZW5ndGggJiYgUihzKSkge1xyXG4gICAgICAgIG4ubGFzdFNlYXJjaElkZW50aXR5ID0gaTtcclxuICAgICAgICBsZXQgZSA9IGF3YWl0IHAoW10pO1xyXG4gICAgICAgIGlmICgwID09PSBlLmNhbmRpZGF0ZXMubGVuZ3RoICYmIGUuZGlhZ25vc3RpY3MubG92SXRlbUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgZyh7XHJcbiAgICAgICAgICAgIHJlYWRJbmRleDogbCxcclxuICAgICAgICAgICAgc25hcHNob3RSZWNvdmVyeTogITEsXHJcbiAgICAgICAgICAgIHZpc2libGVDYW5kaWRhdGVDb3VudDogMCxcclxuICAgICAgICAgICAgZGlhZ25vc3RpY3M6IGUuZGlhZ25vc3RpY3NcclxuICAgICAgICAgIH0pLCBiID0gUztcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvID0gaChlLmNhbmRpZGF0ZXMpO1xyXG4gICAgICAgIHJldHVybiB5KFwiZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2g6Y2FuZGlkYXRlLXJlYWRcIiwge1xyXG4gICAgICAgICAgZmllbGRUeXBlOiB0LFxyXG4gICAgICAgICAgc2VhcmNoSW5wdXRMZW5ndGg6IHIubGVuZ3RoLFxyXG4gICAgICAgICAgcmVhZEluZGV4OiBsLFxyXG4gICAgICAgICAgY2FuZGlkYXRlQ291bnQ6IG8ubGVuZ3RoLFxyXG4gICAgICAgICAgdmlzaWJsZUNhbmRpZGF0ZUNvdW50OiAwLFxyXG4gICAgICAgICAgbm9SZXN1bHRzOiAhMFxyXG4gICAgICAgIH0pLCBvXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFMgJiYgUyA9PT0gYikge1xyXG4gICAgICAgIG4ubGFzdFNlYXJjaElkZW50aXR5ID0gaTtcclxuICAgICAgICBsZXQgZSA9IGF3YWl0IHAoZik7XHJcbiAgICAgICAgaWYgKDAgPT09IGUuY2FuZGlkYXRlcy5sZW5ndGggJiYgZS5kaWFnbm9zdGljcy5sb3ZJdGVtQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICBnKHtcclxuICAgICAgICAgICAgcmVhZEluZGV4OiBsLFxyXG4gICAgICAgICAgICBzbmFwc2hvdFJlY292ZXJ5OiAhMSxcclxuICAgICAgICAgICAgdmlzaWJsZUNhbmRpZGF0ZUNvdW50OiBmLmxlbmd0aCxcclxuICAgICAgICAgICAgZGlhZ25vc3RpY3M6IGUuZGlhZ25vc3RpY3NcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG8gPSBoKGUuY2FuZGlkYXRlcyk7XHJcbiAgICAgICAgcmV0dXJuIHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpjYW5kaWRhdGUtcmVhZFwiLCB7XHJcbiAgICAgICAgICBmaWVsZFR5cGU6IHQsXHJcbiAgICAgICAgICBzZWFyY2hJbnB1dExlbmd0aDogci5sZW5ndGgsXHJcbiAgICAgICAgICByZWFkSW5kZXg6IGwsXHJcbiAgICAgICAgICBjYW5kaWRhdGVDb3VudDogby5sZW5ndGgsXHJcbiAgICAgICAgICB2aXNpYmxlQ2FuZGlkYXRlQ291bnQ6IGYubGVuZ3RoLFxyXG4gICAgICAgICAgbm9SZXN1bHRzOiAhMSxcclxuICAgICAgICAgIHNldHRsZWQ6ICEwXHJcbiAgICAgICAgfSksIG9cclxuICAgICAgfVxyXG4gICAgICBiID0gU1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbi5sYXN0U2VhcmNoSWRlbnRpdHkgPSBpLCBuLmxhc3RTZWFyY2hJbnB1dCA9IHIsIG4ubGFzdENhbmRpZGF0ZXMgPSBbXSwgblxyXG4gICAgLmNhbmRpZGF0ZXNCeVNlYXJjaElkZW50aXR5LnNldChpLCBbXSksIHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpjYW5kaWRhdGUtcmVhZFwiLCB7XHJcbiAgICAgIGZpZWxkVHlwZTogdCxcclxuICAgICAgc2VhcmNoSW5wdXRMZW5ndGg6IHIubGVuZ3RoLFxyXG4gICAgICByZWFkSW5kZXg6IDE0LFxyXG4gICAgICBjYW5kaWRhdGVDb3VudDogMCxcclxuICAgICAgcmF3T3B0aW9uQ291bnQ6IEIocykucmF3T3B0aW9uQ291bnQsXHJcbiAgICAgIGxpc3Rib3hJZDogcy5pZCB8fCBudWxsLFxyXG4gICAgICBsaXN0Ym94Um9sZTogWShzKSxcclxuICAgICAgbGlzdGJveEFyaWFCdXN5OiBIKHMpLFxyXG4gICAgICBub1Jlc3VsdHM6ICExLFxyXG4gICAgICBzZXR0bGVkOiAhMVxyXG4gICAgfSksIFtdXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gWChlLCB0LCByLCBuKSB7XHJcbiAgbGV0IG8gPSBOKHIuc2VhcmNoSW5wdXQpLnRvTG93ZXJDYXNlKCksXHJcbiAgICBpID0gKG4uY2FuZGlkYXRlc0J5U2VhcmNoSWRlbnRpdHkuZ2V0KG8pIHx8IFtdKS5maWx0ZXIoZSA9PiBlLnZhbHVlID09PSB0LnZhbHVlICYmIGUudGV4dCA9PT1cclxuICAgICAgdC50ZXh0KTtcclxuICBpZiAoMSAhPT0gaS5sZW5ndGgpIHJldHVybiB5KFwiZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2g6Y29tbWl0XCIsIHtcclxuICAgIGNhbmRpZGF0ZVRleHRMZW5ndGg6IHQudGV4dC5sZW5ndGgsXHJcbiAgICBjYW5kaWRhdGVWYWx1ZUxlbmd0aDogdC52YWx1ZS5sZW5ndGgsXHJcbiAgICBtYXBwZWRDYW5kaWRhdGVDb3VudDogaS5sZW5ndGgsXHJcbiAgICBzZWxlY3RlZFNlYXJjaElucHV0TGVuZ3RoOiByLnNlYXJjaElucHV0Lmxlbmd0aCxcclxuICAgIHJlYXNvbjogXCJjYW5kaWRhdGUtbm90LWluLXNlbGVjdGVkLXJvdW5kXCJcclxuICB9KSwgITE7XHJcbiAgbGV0IGEgPSBhd2FpdCB6KGUpLFxyXG4gICAgcyA9IGEgPyBxKGEpLmZpbHRlcihlID0+IGUudGV4dCA9PT0gdC50ZXh0KSA6IFtdLFxyXG4gICAgdSA9ICFhIHx8IDEgIT09IHMubGVuZ3RoIHx8IG4ubGFzdFNlYXJjaElkZW50aXR5ICE9PSBvLFxyXG4gICAgYyA9ICExO1xyXG4gIGlmICh1KSB7XHJcbiAgICBjID0gITAsIHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpjb21taXQtcmVvcGVuXCIsIHtcclxuICAgICAgY2FuZGlkYXRlVGV4dExlbmd0aDogdC50ZXh0Lmxlbmd0aCxcclxuICAgICAgY2FuZGlkYXRlVmFsdWVMZW5ndGg6IHQudmFsdWUubGVuZ3RoLFxyXG4gICAgICBzZWxlY3RlZFNlYXJjaElucHV0TGVuZ3RoOiByLnNlYXJjaElucHV0Lmxlbmd0aCxcclxuICAgICAgbW9kYWxGb3VuZDogISFhLFxyXG4gICAgICB2aXNpYmxlTWF0Y2hpbmdDYW5kaWRhdGVDb3VudDogcy5sZW5ndGgsXHJcbiAgICAgIGxhc3RTZWFyY2hNYXRjaGVzU2VsZWN0ZWRSb3VuZDogbi5sYXN0U2VhcmNoSWRlbnRpdHkgPT09IG9cclxuICAgIH0pLCBhd2FpdCBlaShlKSwgZW4oZSwgci5zZWFyY2hJbnB1dCk7XHJcbiAgICBsZXQgaSA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBuID0gMDsgbiA8IDE0OyBuICs9IDEpIHtcclxuICAgICAgaWYgKG4gPiAwICYmIGF3YWl0ICgwLCBtLmRlbGF5KSgyNTApLCAhKGEgPSBhd2FpdCB6KGUpKSkgY29udGludWU7XHJcbiAgICAgIGxldCBvID0gcShhKTtcclxuICAgICAgcyA9IG8uZmlsdGVyKGUgPT4gZS50ZXh0ID09PSB0LnRleHQpO1xyXG4gICAgICBsZXQgbCA9IFUobyk7XHJcbiAgICAgIGlmIChsICYmIGwgPT09IGkgJiYgMSA9PT0gcy5sZW5ndGgpIHtcclxuICAgICAgICB5KFwiZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2g6Y29tbWl0LXJlb3Blbi1yZWFkeVwiLCB7XHJcbiAgICAgICAgICBjYW5kaWRhdGVUZXh0TGVuZ3RoOiB0LnRleHQubGVuZ3RoLFxyXG4gICAgICAgICAgc2VsZWN0ZWRTZWFyY2hJbnB1dExlbmd0aDogci5zZWFyY2hJbnB1dC5sZW5ndGgsXHJcbiAgICAgICAgICByZWFkSW5kZXg6IG4sXHJcbiAgICAgICAgICB2aXNpYmxlQ2FuZGlkYXRlQ291bnQ6IG8ubGVuZ3RoXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgICBpID0gbFxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIWEgfHwgMSAhPT0gcy5sZW5ndGgpIHJldHVybiB5KFwiZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2g6Y29tbWl0XCIsIHtcclxuICAgIGNhbmRpZGF0ZVRleHRMZW5ndGg6IHQudGV4dC5sZW5ndGgsXHJcbiAgICBjYW5kaWRhdGVWYWx1ZUxlbmd0aDogdC52YWx1ZS5sZW5ndGgsXHJcbiAgICBzZWxlY3RlZFNlYXJjaElucHV0TGVuZ3RoOiByLnNlYXJjaElucHV0Lmxlbmd0aCxcclxuICAgIG1vZGFsRm91bmQ6ICEhYSxcclxuICAgIG1hcHBlZENhbmRpZGF0ZUNvdW50OiBpLmxlbmd0aCxcclxuICAgIHZpc2libGVNYXRjaGluZ0NhbmRpZGF0ZUNvdW50OiBzLmxlbmd0aCxcclxuICAgIHJlb3BlbmVkOiBjXHJcbiAgfSksICExO1xyXG4gIGF3YWl0IGVtKHNbMF0uZWxlbWVudCk7XHJcbiAgbGV0IGQgPSBhd2FpdCAoMCwgbC53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiBlQShlLnZhbHVlKSA9PT0gZUEodC50ZXh0KSAmJiAhZV8oZSkgJiYgXCJ0cnVlXCIgIT09IGVcclxuICAgIC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpLCB7XHJcbiAgICAgIHRpbWVvdXQ6IDFlMyxcclxuICAgICAgaW50ZXJ2YWw6IDEwMCxcclxuICAgICAgb2JzZXJ2ZVRhcmdldDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgPyBkb2N1bWVudC5ib2R5IDogdm9pZCAwXHJcbiAgICB9KTtcclxuICBpZiAoIWQpIHJldHVybiB5KFwiZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2g6Y29tbWl0XCIsIHtcclxuICAgIGNhbmRpZGF0ZVRleHRMZW5ndGg6IHQudGV4dC5sZW5ndGgsXHJcbiAgICBjYW5kaWRhdGVWYWx1ZUxlbmd0aDogdC52YWx1ZS5sZW5ndGgsXHJcbiAgICBtb2RhbEZvdW5kOiAhMCxcclxuICAgIG1hdGNoaW5nQ2FuZGlkYXRlQ291bnQ6IDEsXHJcbiAgICByZW9wZW5lZDogYyxcclxuICAgIGNvbW1pdHRlZDogITFcclxuICB9KSwgITE7XHJcbiAgYXdhaXQgKDAsIG0uZGVsYXkpKDM1MCk7XHJcbiAgbGV0IGYgPSBlQShlLnZhbHVlKSA9PT0gZUEodC50ZXh0KSAmJiAhZV8oZSkgJiYgXCJ0cnVlXCIgIT09IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKTtcclxuICByZXR1cm4geShcImVkdWNhdGlvbi1jbGllbnQtc2VhcmNoOmNvbW1pdFwiLCB7XHJcbiAgICBjYW5kaWRhdGVUZXh0TGVuZ3RoOiB0LnRleHQubGVuZ3RoLFxyXG4gICAgY2FuZGlkYXRlVmFsdWVMZW5ndGg6IHQudmFsdWUubGVuZ3RoLFxyXG4gICAgbW9kYWxGb3VuZDogITAsXHJcbiAgICBtYXRjaGluZ0NhbmRpZGF0ZUNvdW50OiAxLFxyXG4gICAgcmVvcGVuZWQ6IGMsXHJcbiAgICBjb21taXR0ZWQ6IGZcclxuICB9KSwgZlxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIEooZSwgdCkge1xyXG4gIGxldCByID0gXCJvcHRpb25zXCIgaW4gdCxcclxuICAgIG4gPSByID8gXCJzdGVwXCIgOiBcInN0YXJ0XCIsXHJcbiAgICBpID0gciA/IHQub3B0aW9ucy5sZW5ndGggOiAwO1xyXG4gIHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpyZXF1ZXN0XCIsIHtcclxuICAgIGZpZWxkVHlwZTogZSxcclxuICAgIHJlcXVlc3RLaW5kOiBuLFxyXG4gICAgY3VycmVudE9wdGlvbkNvdW50OiBpLFxyXG4gICAgaGFzU2Vzc2lvbklkOiByLFxyXG4gICAgb3JpZ2luYWxBbnN3ZXJMZW5ndGg6IFwib3JpZ2luYWxfYW5zd2VyXCIgaW4gdCA/IHQub3JpZ2luYWxfYW5zd2VyLmxlbmd0aCA6IDBcclxuICB9KTtcclxuICBsZXQgYSA9IERhdGUubm93KCk7XHJcbiAgdHJ5IHtcclxuICAgIGxldCByID0gYXdhaXQgKDAsIG8uc2VuZFRvQmFja2dyb3VuZCkoe1xyXG4gICAgICBuYW1lOiBcInJlc29sdmVBdXRvZmlsbENsaWVudFNlYXJjaFN0ZXBcIixcclxuICAgICAgYm9keTogdFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geShcImVkdWNhdGlvbi1jbGllbnQtc2VhcmNoOnJlc3BvbnNlXCIsIHtcclxuICAgICAgZmllbGRUeXBlOiBlLFxyXG4gICAgICByZXF1ZXN0S2luZDogbixcclxuICAgICAgY3VycmVudE9wdGlvbkNvdW50OiBpLFxyXG4gICAgICBhY3Rpb246IHI/LmFjdGlvbiB8fCBcIm1pc3NpbmdcIixcclxuICAgICAgcmVzcG9uc2VMYXRlbmN5TXM6IERhdGUubm93KCkgLSBhXHJcbiAgICB9KSwgclxyXG4gIH0gY2F0Y2ggKHQpIHtcclxuICAgIHRocm93IHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpyZXF1ZXN0LWVycm9yXCIsIHtcclxuICAgICAgZmllbGRUeXBlOiBlLFxyXG4gICAgICByZXF1ZXN0S2luZDogbixcclxuICAgICAgY3VycmVudE9wdGlvbkNvdW50OiBpLFxyXG4gICAgICBlcnJvclR5cGU6IHQgaW5zdGFuY2VvZiBFcnJvciA/IHQubmFtZSA6IHR5cGVvZiB0XHJcbiAgICB9KSwgdFxyXG4gIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBRKGUsIHQsIHIsIG4pIHtcclxuICBsZXQgbyA9IE4oZS52YWx1ZSksXHJcbiAgICBpID0gTihyLmxhc3RTZWFyY2hJbnB1dCksXHJcbiAgICBhID0gISFpICYmIG8gPT09IGk7XHJcbiAgaWYgKCFhKSB7XHJcbiAgICB5KFwiZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2g6dW5jb21taXR0ZWQtY2xlYXJcIiwge1xyXG4gICAgICBmaWVsZFR5cGU6IHQsXHJcbiAgICAgIGZhaWx1cmVSZWFzb246IG4sXHJcbiAgICAgIGNsZWFyZWQ6ICExLFxyXG4gICAgICByZWFzb246IFwiaW5wdXQtbm90LWN1cnJlbnQtc2VhcmNoXCJcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGUuZm9jdXMoKSwgZW4oZSwgXCJcIiksIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG4gICAgYnViYmxlczogITBcclxuICB9KSksIGUuYmx1cigpLCBhd2FpdCAoMCwgbS5kZWxheSkoMTAwKSwgeShcImVkdWNhdGlvbi1jbGllbnQtc2VhcmNoOnVuY29tbWl0dGVkLWNsZWFyXCIsIHtcclxuICAgIGZpZWxkVHlwZTogdCxcclxuICAgIGZhaWx1cmVSZWFzb246IG4sXHJcbiAgICBjbGVhcmVkOiAhTihlLnZhbHVlKVxyXG4gIH0pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gWihlLCB0LCByLCBuKSB7XHJcbiAgbGV0IG8gPSByLnRyaW0oKTtcclxuICBpZiAoIW8pIHJldHVybiB5KFwiZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2g6cmV0dXJuLWVtcHR5LXJhdy1mYWxsYmFja1wiLCB7XHJcbiAgICBmaWVsZFR5cGU6IHQsXHJcbiAgICBzb3VyY2U6IG4sXHJcbiAgICByYXdWYWx1ZUxlbmd0aDogMCxcclxuICAgIGZpbGxlZDogITFcclxuICB9KSwgITE7XHJcbiAgbGV0IGkgPSBTdHJpbmcoZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IGUuaWQgfHwgXCJcIikucmVwbGFjZSgvW15hLXpBLVowLTldL2csIFwiXCIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKFwic2Nob29sXCIgPT09IHQgJiYgaS5pbmNsdWRlcyhcImVkdWNhdGlvbmFsZXN0YWJsaXNobWVudGlkXCIpKSByZXR1cm4geShcclxuICAgIFwiZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2g6cmV0dXJuLWVtcHR5LXJhdy1mYWxsYmFja1wiLCB7XHJcbiAgICAgIGZpZWxkVHlwZTogdCxcclxuICAgICAgc291cmNlOiBuLFxyXG4gICAgICByYXdWYWx1ZUxlbmd0aDogby5sZW5ndGgsXHJcbiAgICAgIGZpbGxlZDogITEsXHJcbiAgICAgIHJlYXNvbjogXCJzZWxlY3RlZC1pZC1yZXF1aXJlZFwiXHJcbiAgICB9KSwgITE7XHJcbiAgZS5mb2N1cygpLCBlbihlLCBvKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7XHJcbiAgICBidWJibGVzOiAhMFxyXG4gIH0pKSwgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSAmJiAoMCwgYS50cmlnZ2VyRXZlbnRzKShkb2N1bWVudC5ib2R5LCBbXHJcbiAgICBcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXHJcbiAgXSksIGUuYmx1cigpLCBhd2FpdCAoMCwgbS5kZWxheSkoMTAwKTtcclxuICBsZXQgbCA9IGUudmFsdWUgPT09IG87XHJcbiAgcmV0dXJuIHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpyZXR1cm4tZW1wdHktcmF3LWZhbGxiYWNrXCIsIHtcclxuICAgIGZpZWxkVHlwZTogdCxcclxuICAgIHNvdXJjZTogbixcclxuICAgIHJhd1ZhbHVlTGVuZ3RoOiBvLmxlbmd0aCxcclxuICAgIGZpbGxlZDogbFxyXG4gIH0pLCBsXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZWUoZSwgdCwgciwgbiwgbyA9IFwicmF3XCIpIHtcclxuICBsZXQgaSA9IHIudHJpbSgpO1xyXG4gIGlmICghaSkgcmV0dXJuIHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpza2lwXCIsIHtcclxuICAgIGZpZWxkVHlwZTogdCxcclxuICAgIHJlYXNvbjogXCJlbXB0eS1vcmlnaW5hbC1hbnN3ZXJcIixcclxuICAgIHJhd0ZhbGxiYWNrVmFsdWVMZW5ndGg6IG4/LnRyaW0oKS5sZW5ndGggfHwgMCxcclxuICAgIHJldHVybkVtcHR5RmFsbGJhY2tTb3VyY2U6IG9cclxuICB9KSwgITE7XHJcbiAgbGV0IGEgPSB7XHJcbiAgICBsYXN0U2VhcmNoSWRlbnRpdHk6IFwiXCIsXHJcbiAgICBsYXN0U2VhcmNoSW5wdXQ6IFwiXCIsXHJcbiAgICBsYXN0Q2FuZGlkYXRlczogW10sXHJcbiAgICBjYW5kaWRhdGVzQnlTZWFyY2hJZGVudGl0eTogbmV3IE1hcFxyXG4gIH07XHJcbiAgeShcImVkdWNhdGlvbi1jbGllbnQtc2VhcmNoOnN0YXJ0XCIsIHtcclxuICAgIGZpZWxkVHlwZTogdCxcclxuICAgIG9yaWdpbmFsQW5zd2VyTGVuZ3RoOiBpLmxlbmd0aCxcclxuICAgIHJhd0ZhbGxiYWNrVmFsdWVMZW5ndGg6IG4/LnRyaW0oKS5sZW5ndGggfHwgMCxcclxuICAgIHJldHVybkVtcHR5RmFsbGJhY2tTb3VyY2U6IG9cclxuICB9KTtcclxuICBsZXQgbCA9IGF3YWl0ICgwLCBjLnJ1bk9yYWNsZUVkdWNhdGlvbkNsaWVudFNlYXJjaCkoe1xyXG4gICAgZmllbGRUeXBlOiB0LFxyXG4gICAgb3JpZ2luYWxBbnN3ZXI6IHIsXHJcbiAgICBkZXBzOiB7XHJcbiAgICAgIHJlcXVlc3RTdGVwOiBlID0+IEoodCwgZSksXHJcbiAgICAgIGNhcHR1cmVDYW5kaWRhdGVzOiByID0+IEsoZSwgdCwgciwgYSksXHJcbiAgICAgIGNvbW1pdENhbmRpZGF0ZTogKHQsIHIpID0+IFgoZSwgdCwgciwgYSlcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4geShcImVkdWNhdGlvbi1jbGllbnQtc2VhcmNoOmRvbmVcIiwge1xyXG4gICAgZmllbGRUeXBlOiB0LFxyXG4gICAgc3VjY2VzczogbC5zdWNjZXNzLFxyXG4gICAgYWN0aW9uczogbC5hY3Rpb25zLFxyXG4gICAgYWN0aW9uQ291bnQ6IGwuYWN0aW9ucy5sZW5ndGgsXHJcbiAgICByb3VuZENvdW50OiBsLnJvdW5kcy5sZW5ndGgsXHJcbiAgICByb3VuZENhbmRpZGF0ZUNvdW50czogbC5yb3VuZHMubWFwKGUgPT4gZS5jYW5kaWRhdGVDb3VudCksXHJcbiAgICBmYWlsdXJlUmVhc29uOiBsLmZhaWx1cmVSZWFzb25cclxuICB9KSwgISFsLnN1Y2Nlc3MgfHwgKFwicmV0dXJuX2VtcHR5XCIgIT09IGwuZmFpbHVyZVJlYXNvbiA/IChhd2FpdCBRKGUsIHQsIGEsIGwuZmFpbHVyZVJlYXNvbiksICFcclxuICAgIDEpIDogYXdhaXQgWihlLCB0LCBuIHx8IFwiXCIsIG8pKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGV0KGUsIHQsIHIsIG4gPSB7fSkge1xyXG4gIGlmIChcImNvbWJvYm94XCIgPT09IGUucm9sZSkge1xyXG4gICAgbGV0IG8gPSAoMCwgcy5pc09yYWNsZVBob25lQ291bnRyeUNvZGVGaWVsZCkocikgfHwgZUQocikgPyByIDogZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IGVcclxuICAgICAgLmlkIHx8IGUuZ2V0QXR0cmlidXRlKFwiaWRcIiksXHJcbiAgICAgIGkgPSAoMCwgcy5pc09yYWNsZUFkZHJlc3NTZWxlY3RGaWVsZCkobyksXHJcbiAgICAgIGEgPSBEKG8pLFxyXG4gICAgICBsID0gUChvKSxcclxuICAgICAgdSA9IE8obyksXHJcbiAgICAgIGMgPSBfKG8pLFxyXG4gICAgICBkID0gRGF0ZS5ub3coKSxcclxuICAgICAgcCA9IHcobyk7XHJcbiAgICBpZiAodSkge1xyXG4gICAgICBsZXQgciA9IFwic2Nob29sXCIgPT09IHUgPyBuLnJhd1NjaG9vbCA6IG4ucmF3TWFqb3IgfHwgbi5yYXdEZWdyZWUsXHJcbiAgICAgICAgbyA9IHIgfHwgKFwic2Nob29sXCIgPT09IHUgPyBTdHJpbmcodCA/PyBcIlwiKSA6IFwiXCIpLFxyXG4gICAgICAgIGkgPSByIHx8IFwiXCIsXHJcbiAgICAgICAgYSA9IHIgPyBcInJhd1wiIDogXCJhbnN3ZXJcIjtcclxuICAgICAgcmV0dXJuIHkoXCJlZHVjYXRpb24tY2xpZW50LXNlYXJjaDpzb3VyY2VcIiwge1xyXG4gICAgICAgIGZpZWxkVHlwZTogdSxcclxuICAgICAgICBhbnN3ZXJMZW5ndGg6IFN0cmluZyh0ID8/IFwiXCIpLnRyaW0oKS5sZW5ndGgsXHJcbiAgICAgICAgcmF3U2Nob29sTGVuZ3RoOiBuLnJhd1NjaG9vbD8udHJpbSgpLmxlbmd0aCB8fCAwLFxyXG4gICAgICAgIHJhd01ham9yTGVuZ3RoOiBuLnJhd01ham9yPy50cmltKCkubGVuZ3RoIHx8IDAsXHJcbiAgICAgICAgcmF3RGVncmVlTGVuZ3RoOiBuLnJhd0RlZ3JlZT8udHJpbSgpLmxlbmd0aCB8fCAwLFxyXG4gICAgICAgIG9yaWdpbmFsQW5zd2VyU291cmNlOiByID8gXCJtYWpvclwiICE9PSB1IHx8IG4ucmF3TWFqb3IgPyBcInJhd1wiIDogXCJyYXctZGVncmVlXCIgOlxyXG4gICAgICAgICAgXCJtYWpvclwiID09PSB1ID8gXCJtaXNzaW5nLXJhdy1tYWpvci1hbmQtZGVncmVlXCIgOiBcImFuc3dlclwiLFxyXG4gICAgICAgIHJldHVybkVtcHR5RmFsbGJhY2tTb3VyY2U6IGEsXHJcbiAgICAgICAgcmV0dXJuRW1wdHlGYWxsYmFja1ZhbHVlTGVuZ3RoOiBpLnRyaW0oKS5sZW5ndGhcclxuICAgICAgfSksIGF3YWl0IGVlKGUsIHUsIG8sIGksIGEpXHJcbiAgICB9XHJcbiAgICBsZXQgaCA9ICgwLCBzLmlzT3JhY2xlUGhvbmVDb3VudHJ5Q29kZUZpZWxkKShvKSAmJiBlUih0KTtcclxuICAgIGlmICgoZWoobykgfHwgaCkgJiYgZUIoZSwgdCwgbykpIHJldHVybiBiKFwiYWxyZWFkeS1jb21taXR0ZWRcIiwgZSwge1xyXG4gICAgICBleHBlY3RlZFZhbHVlOiB0XHJcbiAgICB9KSwgITA7XHJcbiAgICBhd2FpdCBlaShlKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDE1MCksIGF3YWl0ICgwLCBtLmRlbGF5KSg1MCksIFMoXCJvcGVuZWRcIiwgbywge1xyXG4gICAgICBhcmlhQ29udHJvbHNQcmVzZW50OiAhIWVvKGUpLFxyXG4gICAgICBhcmlhRXhwYW5kZWQ6IFwidHJ1ZVwiID09PSBlLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIilcclxuICAgIH0pO1xyXG4gICAgbGV0IGcgPSBlUChvKSxcclxuICAgICAgdiA9IGcgPyA2IDogMTQsXHJcbiAgICAgIEMgPSBgLi8vZGl2W0Byb2xlPSdyb3cnXS8vZGl2W0Byb2xlPSdncmlkY2VsbCddLy9zcGFuW2NvbnRhaW5zKEBjbGFzcywnY3gtc2VsZWN0X19saXN0LWl0ZW0tLWNvbnRlbnQnKV1cclxuICAgICAgfCAuLy9kaXZbQHJvbGU9J3JvdyddLy9kaXZbQHJvbGU9J2dyaWRjZWxsJ11bbm9ybWFsaXplLXNwYWNlKCldXHJcbiAgICAgIHwgLi8vKltAcm9sZT0nb3B0aW9uJ11bbm9ybWFsaXplLXNwYWNlKCldYCxcclxuICAgICAgQSA9IGcgPyAyIDogaSA/IDUgOiBjIHx8IGwgPyAyIDogMTtcclxuICAgIGIoXCJzdGFydFwiLCBlLCB7XHJcbiAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgIGlzQWRkcmVzc1NlbGVjdDogaSxcclxuICAgICAgaXNFZHVjYXRpb25TY2hvb2xTZWxlY3Q6IGEsXHJcbiAgICAgIGlzRWR1Y2F0aW9uTWFqb3JTZWxlY3Q6IGwsXHJcbiAgICAgIGlzRWR1Y2F0aW9uRGVncmVlU2VsZWN0OiBjLFxyXG4gICAgICBtb2RhbElkOiBlbyhlKSxcclxuICAgICAgcmV0cnlMaW1pdDogQVxyXG4gICAgfSk7XHJcbiAgICBsZXQgayA9IGFzeW5jIChyLCBuID0gdCkgPT4ge1xyXG4gICAgICBsZXQgYSA9IGVvKGUpLFxyXG4gICAgICAgIHUgPSBnO1xyXG4gICAgICB1ICYmIChiKFwic2V0LXNlYXJjaC12YWx1ZTpiZWZvcmVcIiwgZSwge1xyXG4gICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgc2VhcmNoVmFsdWU6IHJcclxuICAgICAgfSksIGVuKGUsIHIpLCBiKFwic2V0LXNlYXJjaC12YWx1ZTphZnRlclwiLCBlLCB7XHJcbiAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICBzZWFyY2hWYWx1ZTogclxyXG4gICAgICB9KSk7XHJcbiAgICAgIGxldCBkID0gZW8oZSksXHJcbiAgICAgICAgaCA9IGAvLypbQGlkPVwiJHtkfVwiXWA7XHJcbiAgICAgIHUgJiYgeShcImFkZHJlc3M6bGlzdGJveC1hZnRlci1zZWFyY2hcIiwge1xyXG4gICAgICAgIHNlYXJjaFZhbHVlTGVuZ3RoOiByLnRyaW0oKS5sZW5ndGgsXHJcbiAgICAgICAgbGlzdGJveElkQ2hhbmdlZDogYSAhPT0gZFxyXG4gICAgICB9KSwgYihcIndhaXQtbGlzdGJveDpzdGFydFwiLCBlLCB7XHJcbiAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICBzZWFyY2hWYWx1ZTogcixcclxuICAgICAgICBtb2RhbElkOiBkXHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgdyA9IERhdGUubm93KCksXHJcbiAgICAgICAgQSA9IGF3YWl0IGVVKGgsIDUwMCwgdik7XHJcbiAgICAgIGlmIChwICYmIFMoXCJsaXN0Ym94LXJlYWRcIiwgbywge1xyXG4gICAgICAgICAgZm91bmQ6ICEhQSxcclxuICAgICAgICAgIG1vZGFsSWRQcmVzZW50OiAhIWQsXHJcbiAgICAgICAgICBlbGFwc2VkTXM6IERhdGUubm93KCkgLSB3XHJcbiAgICAgICAgfSksIHkoXCJzZWxlY3Q6bW9kYWwtd2FpdFwiLCB7XHJcbiAgICAgICAgICBuYW1lOiBvLFxyXG4gICAgICAgICAgc2VhcmNoVmFsdWU6IHIsXHJcbiAgICAgICAgICBmb3VuZDogISFBLFxyXG4gICAgICAgICAgbXM6IERhdGUubm93KCkgLSB3XHJcbiAgICAgICAgfSksIHUgJiYgeShcImFkZHJlc3M6bGlzdGJveC13YWl0XCIsIHtcclxuICAgICAgICAgIHNlYXJjaFZhbHVlTGVuZ3RoOiByLnRyaW0oKS5sZW5ndGgsXHJcbiAgICAgICAgICBsaXN0Ym94SWRDaGFuZ2VkOiBhICE9PSBkLFxyXG4gICAgICAgICAgZm91bmQ6ICEhQSxcclxuICAgICAgICAgIG1zOiBEYXRlLm5vdygpIC0gd1xyXG4gICAgICAgIH0pLCAhQSkgcmV0dXJuIGIoXCJ3YWl0LWxpc3Rib3g6bWlzc2luZ1wiLCBlLCB7XHJcbiAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICBzZWFyY2hWYWx1ZTogcixcclxuICAgICAgICBtb2RhbElkOiBkXHJcbiAgICAgIH0pLCB7XHJcbiAgICAgICAgbW9kYWxFbGVtZW50OiBudWxsLFxyXG4gICAgICAgIG9wdGlvbkVsZW1lbnRzOiBbXSxcclxuICAgICAgICBoYXNOb1Jlc3VsdHM6ICExXHJcbiAgICAgIH07XHJcbiAgICAgIHUgfHwgKGIoXCJzZXQtc2VhcmNoLXZhbHVlOmJlZm9yZVwiLCBlLCB7XHJcbiAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICBzZWFyY2hWYWx1ZTogclxyXG4gICAgICB9KSwgZW4oZSwgciksIGIoXCJzZXQtc2VhcmNoLXZhbHVlOmFmdGVyXCIsIGUsIHtcclxuICAgICAgICBleHBlY3RlZFZhbHVlOiB0LFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiByXHJcbiAgICAgIH0pKTtcclxuICAgICAgbGV0IGsgPSBlaihvKSxcclxuICAgICAgICBUID0gayA/IDE0IDogaSA/IDggOiBjIHx8IGwgPyA4IDogMixcclxuICAgICAgICBGID0gayA/IDMwMCA6IDI1MCxcclxuICAgICAgICBJID0gayB8fCBjIHx8IGwgPyAyNTAgOiAxNTAsXHJcbiAgICAgICAgaiA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFQ7IGkrKykge1xyXG4gICAgICAgIGkgPiAwICYmIGF3YWl0ICgwLCBtLmRlbGF5KSgxID09PSBpID8gRiA6IEkpO1xyXG4gICAgICAgIGxldCBhID0geCgoMCwgZi5nZXRPcmRlcmVkTm9kZXMpKEMsIEEpKTtcclxuICAgICAgICBqID0gYS5maWx0ZXIoZSA9PiAhTChlKSk7XHJcbiAgICAgICAgbGV0IGwgPSAwID09PSBqLmxlbmd0aCAmJiAoYS5zb21lKEwpIHx8IFIoQSkpLFxyXG4gICAgICAgICAgdSA9IEUoaiksXHJcbiAgICAgICAgICBjID0gKDAsIHMuZmluZE9yYWNsZVNlbGVjdE9wdGlvbkluZGV4KShuLCB1LCBvKTtcclxuICAgICAgICBpZiAoYihcInJlYWQtb3B0aW9uc1wiLCBlLCB7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiByLFxyXG4gICAgICAgICAgICByZWFkSW5kZXg6IGksXHJcbiAgICAgICAgICAgIG9wdGlvbkNvdW50OiB1Lmxlbmd0aCxcclxuICAgICAgICAgICAgb3B0aW9uVGV4dHM6IHUuc2xpY2UoMCwgMTIpLFxyXG4gICAgICAgICAgICBtYXRjaGVkSW5kZXg6IGNcclxuICAgICAgICAgIH0pLCAtMSAhPT0gYyB8fCBsKSByZXR1cm4ge1xyXG4gICAgICAgICAgbW9kYWxFbGVtZW50OiBBLFxyXG4gICAgICAgICAgb3B0aW9uRWxlbWVudHM6IGosXHJcbiAgICAgICAgICBoYXNOb1Jlc3VsdHM6IGxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtb2RhbEVsZW1lbnQ6IEEsXHJcbiAgICAgICAgb3B0aW9uRWxlbWVudHM6IGosXHJcbiAgICAgICAgaGFzTm9SZXN1bHRzOiAhMVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCBBOyByKyspIHtcclxuICAgICAgeShcInNlbGVjdDphdHRlbXB0XCIsIHtcclxuICAgICAgICBuYW1lOiBvLFxyXG4gICAgICAgIGF0dGVtcHQ6IHIsXHJcbiAgICAgICAgcmV0cnlMaW1pdDogQSxcclxuICAgICAgICBlbGFwc2VkTXM6IERhdGUubm93KCkgLSBkXHJcbiAgICAgIH0pLCBiKFwiYXR0ZW1wdDpzdGFydFwiLCBlLCB7XHJcbiAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICBhdHRlbXB0OiByLFxyXG4gICAgICAgIHJldHJ5TGltaXQ6IEFcclxuICAgICAgfSksIHIgPiAwICYmIChhd2FpdCAoMCwgbS5kZWxheSkoNjAwICsgMzAwICogciksIGIoXCJhdHRlbXB0OnJlb3Blbi1iZWZvcmVcIiwgZSwge1xyXG4gICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgYXR0ZW1wdDogclxyXG4gICAgICB9KSwgYXdhaXQgZWkoZSksIGF3YWl0ICgwLCBtLmRlbGF5KSgxNTApLCBiKFwiYXR0ZW1wdDpyZW9wZW4tYWZ0ZXJcIiwgZSwge1xyXG4gICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgYXR0ZW1wdDogclxyXG4gICAgICB9KSk7XHJcbiAgICAgIGxldCBuID0gYXdhaXQgayh0KSxcclxuICAgICAgICBhID0gbi5vcHRpb25FbGVtZW50cyxcclxuICAgICAgICB1ID0gRShhKSxcclxuICAgICAgICBjID0gKDAsIHMuZmluZE9yYWNsZVNlbGVjdE9wdGlvbkluZGV4KSh0LCB1LCBvKSxcclxuICAgICAgICBmID0gZXIobywgdCk7XHJcbiAgICAgIGlmICgtMSA9PT0gYyAmJiBmICYmICh5KFwicG9zdGFsLXByZWZpeC1zZWFyY2g6c3RhcnRcIiwge1xyXG4gICAgICAgICAgbmFtZTogbyxcclxuICAgICAgICAgIGF0dGVtcHQ6IHIsXHJcbiAgICAgICAgICBleHBlY3RlZExlbmd0aDogdC5sZW5ndGgsXHJcbiAgICAgICAgICBwcmVmaXhMZW5ndGg6IGYubGVuZ3RoLFxyXG4gICAgICAgICAgcHJpb3JOb1Jlc3VsdHM6IG4uaGFzTm9SZXN1bHRzXHJcbiAgICAgICAgfSksIHUgPSBFKGEgPSAobiA9IGF3YWl0IGsoZiwgdCkpLm9wdGlvbkVsZW1lbnRzKSwgYyA9ICgwLCBzXHJcbiAgICAgICAgICAuZmluZE9yYWNsZVNlbGVjdE9wdGlvbkluZGV4KSh0LCB1LCBvKSwgeShcInBvc3RhbC1wcmVmaXgtc2VhcmNoOmRvbmVcIiwge1xyXG4gICAgICAgICAgbmFtZTogbyxcclxuICAgICAgICAgIGF0dGVtcHQ6IHIsXHJcbiAgICAgICAgICBvcHRpb25Db3VudDogdS5sZW5ndGgsXHJcbiAgICAgICAgICBtYXRjaGVkOiBjLFxyXG4gICAgICAgICAgbm9SZXN1bHRzOiBuLmhhc05vUmVzdWx0c1xyXG4gICAgICAgIH0pKSwgbi5oYXNOb1Jlc3VsdHMpIHJldHVybiBiKFwibm8tcmVzdWx0czpjbG9zZVwiLCBlLCB7XHJcbiAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICBhdHRlbXB0OiByXHJcbiAgICAgIH0pLCBhd2FpdCBldShlKSwgITE7XHJcbiAgICAgIGlmICgwID09PSBhLmxlbmd0aCAmJiAhZS52YWx1ZT8udHJpbSgpICYmICFlUChvKSkge1xyXG4gICAgICAgIGxldCBpID0gZWoobykgPyB0IDogdC5zdWJzdHJpbmcoMCwgTWF0aC5jZWlsKHQubGVuZ3RoIC8gMikpO1xyXG4gICAgICAgIGIoXCJmYWxsYmFjay1zZWFyY2g6c3RhcnRcIiwgZSwge1xyXG4gICAgICAgICAgICBleHBlY3RlZFZhbHVlOiB0LFxyXG4gICAgICAgICAgICBhdHRlbXB0OiByLFxyXG4gICAgICAgICAgICBmYWxsYmFja1ZhbHVlOiBpXHJcbiAgICAgICAgICB9KSwgZW4oZSwgaSksIGF3YWl0ICgwLCBtLmRlbGF5KSgxMTAwKSwgdSA9IEUoYSA9IChuID0gYXdhaXQgayhpKSkub3B0aW9uRWxlbWVudHMpLCBjID1cclxuICAgICAgICAgICgwLCBzLmZpbmRPcmFjbGVTZWxlY3RPcHRpb25JbmRleCkodCwgdSwgbylcclxuICAgICAgfVxyXG4gICAgICBpZiAoeShcInNlbGVjdDpvcHRpb25zXCIsIHtcclxuICAgICAgICAgIG5hbWU6IG8sXHJcbiAgICAgICAgICBhdHRlbXB0OiByLFxyXG4gICAgICAgICAgb3B0aW9uQ291bnQ6IHUubGVuZ3RoLFxyXG4gICAgICAgICAgbWF0Y2hlZDogYyxcclxuICAgICAgICAgIGVsYXBzZWRNczogRGF0ZS5ub3coKSAtIGRcclxuICAgICAgICB9KSwgYihcIm1hdGNoLW9wdGlvbnNcIiwgZSwge1xyXG4gICAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICAgIGF0dGVtcHQ6IHIsXHJcbiAgICAgICAgICBtYXRjaGVkSW5kZXg6IGMsXHJcbiAgICAgICAgICBvcHRpb25Db3VudDogdS5sZW5ndGgsXHJcbiAgICAgICAgICBvcHRpb25UZXh0czogdS5zbGljZSgwLCAxMilcclxuICAgICAgICB9KSwgcCAmJiBTKFwib3B0aW9uLW1hdGNoXCIsIG8sIHtcclxuICAgICAgICAgIGF0dGVtcHQ6IHIsXHJcbiAgICAgICAgICBvcHRpb25Db3VudDogdS5sZW5ndGgsXHJcbiAgICAgICAgICBtYXRjaGVkOiBjXHJcbiAgICAgICAgfSksIC0xID09PSBjICYmIGVQKG8pICYmIDEgPT09IHUubGVuZ3RoICYmIGIoXCJhZGRyZXNzLWxpbmU6c29sZS1vcHRpb25cIiwgZSwge1xyXG4gICAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICAgIGF0dGVtcHQ6IHIsXHJcbiAgICAgICAgICBvcHRpb25UZXh0OiB1W2MgPSAwXVxyXG4gICAgICAgIH0pLCAtMSA9PT0gYyAmJiBlaihvKSAmJiBuLm1vZGFsRWxlbWVudCkge1xyXG4gICAgICAgIGxldCByID0gYXdhaXQgZXkoe1xyXG4gICAgICAgICAgZWxlbWVudDogZSxcclxuICAgICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgICBmaWVsZE5hbWU6IG8sXHJcbiAgICAgICAgICBtb2RhbEVsZW1lbnQ6IG4ubW9kYWxFbGVtZW50LFxyXG4gICAgICAgICAgb3B0aW9uWFBhdGg6IENcclxuICAgICAgICB9KTtcclxuICAgICAgICByICYmIChhID0gci5vcHRpb25FbGVtZW50cywgYyA9IHIubWF0Y2hlZEluZGV4KVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgtMSAhPT0gYykge1xyXG4gICAgICAgIGxldCBuID0gRShhKVtjXSxcclxuICAgICAgICAgIHUgPSAoMCwgcy5pc09yYWNsZVBob25lQ291bnRyeUNvZGVGaWVsZCkobykgJiYgbiA/IG4gOiB0O1xyXG4gICAgICAgIGIoXCJzZWxlY3Qtb3B0aW9uOmJlZm9yZVwiLCBlLCB7XHJcbiAgICAgICAgICBleHBlY3RlZFZhbHVlOiB0LFxyXG4gICAgICAgICAgYXR0ZW1wdDogcixcclxuICAgICAgICAgIG1hdGNoZWRJbmRleDogYyxcclxuICAgICAgICAgIG9wdGlvblRleHQ6IG5cclxuICAgICAgICB9KSwgYXdhaXQgZW0oYVtjXSksIHAgJiYgUyhcIm9wdGlvbi1jbGlja2VkXCIsIG8sIHtcclxuICAgICAgICAgIGF0dGVtcHQ6IHIsXHJcbiAgICAgICAgICBtYXRjaGVkOiBjXHJcbiAgICAgICAgfSksIGIoXCJzZWxlY3Qtb3B0aW9uOmFmdGVyXCIsIGUsIHtcclxuICAgICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgICBhdHRlbXB0OiByLFxyXG4gICAgICAgICAgbWF0Y2hlZEluZGV4OiBjLFxyXG4gICAgICAgICAgb3B0aW9uVGV4dDogblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBkID0gYXdhaXQgZXEoZSwgdSwgbyk7XHJcbiAgICAgICAgaWYgKHAgJiYgUyhcImNvbW1pdC1hZnRlci1jbGlja1wiLCBvLCB7XHJcbiAgICAgICAgICAgIGF0dGVtcHQ6IHIsXHJcbiAgICAgICAgICAgIGNvbW1pdHRlZDogZFxyXG4gICAgICAgICAgfSksIGIoXCJjb21taXQtY2hlY2s6YWZ0ZXItY2xpY2tcIiwgZSwge1xyXG4gICAgICAgICAgICBleHBlY3RlZFZhbHVlOiB0LFxyXG4gICAgICAgICAgICBhdHRlbXB0OiByLFxyXG4gICAgICAgICAgICBjb21taXR0ZWQ6IGRcclxuICAgICAgICAgIH0pLCAhZCAmJiBlaihvKSAmJiAoZCA9IGF3YWl0IGVoKHtcclxuICAgICAgICAgICAgb3B0aW9uRWxlbWVudDogYVtjXSxcclxuICAgICAgICAgICAgaW5wdXRFbGVtZW50OiBlLFxyXG4gICAgICAgICAgICBleHBlY3RlZFZhbHVlOiB1LFxyXG4gICAgICAgICAgICBmaWVsZE5hbWU6IG8sXHJcbiAgICAgICAgICAgIGF0dGVtcHQ6IHJcclxuICAgICAgICAgIH0pLCBiKFwiY29tbWl0LWNoZWNrOmFmdGVyLWFsdGVybmF0ZS10YXJnZXRzXCIsIGUsIHtcclxuICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICAgICAgYXR0ZW1wdDogcixcclxuICAgICAgICAgICAgY29tbWl0dGVkOiBkXHJcbiAgICAgICAgICB9KSksICFkICYmIGVqKG8pICYmIChiKFwia2V5Ym9hcmQtY29uZmlybS1jdXJyZW50OmJlZm9yZVwiLCBlLCB7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgICAgIGF0dGVtcHQ6IHJcclxuICAgICAgICAgIH0pLCBhd2FpdCBlQyhlLCBcImNvbmZpcm0tY3VycmVudFwiKSwgYihcImtleWJvYXJkLWNvbmZpcm0tY3VycmVudDphZnRlclwiLCBlLCB7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgICAgIGF0dGVtcHQ6IHJcclxuICAgICAgICAgIH0pLCBkID0gYXdhaXQgZXEoZSwgdSwgbyksIGIoXCJjb21taXQtY2hlY2s6YWZ0ZXItY29uZmlybS1jdXJyZW50XCIsIGUsIHtcclxuICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICAgICAgYXR0ZW1wdDogcixcclxuICAgICAgICAgICAgY29tbWl0dGVkOiBkXHJcbiAgICAgICAgICB9KSksIGQgfHwgKGIoXCJrZXlib2FyZC1zZWxlY3Q6YmVmb3JlXCIsIGUsIHtcclxuICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICAgICAgYXR0ZW1wdDogclxyXG4gICAgICAgICAgfSksIGF3YWl0IGVDKGUpLCBiKFwia2V5Ym9hcmQtc2VsZWN0OmFmdGVyXCIsIGUsIHtcclxuICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICAgICAgYXR0ZW1wdDogclxyXG4gICAgICAgICAgfSksIGQgPSBhd2FpdCBlcShlLCB1LCBvKSwgYihcImNvbW1pdC1jaGVjazphZnRlci1rZXlib2FyZC1zZWxlY3RcIiwgZSwge1xyXG4gICAgICAgICAgICBleHBlY3RlZFZhbHVlOiB0LFxyXG4gICAgICAgICAgICBhdHRlbXB0OiByLFxyXG4gICAgICAgICAgICBjb21taXR0ZWQ6IGRcclxuICAgICAgICAgIH0pKSwgZCAmJiBsICYmIChhd2FpdCAoMCwgbS5kZWxheSkoMzUwKSwgZCA9IGVCKGUsIHQsIG8pLCBiKFwiY29tbWl0LWNoZWNrOm1ham9yLXN0YWJsZVwiLFxyXG4gICAgICAgICAgICBlLCB7XHJcbiAgICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICAgICAgICBhdHRlbXB0OiByLFxyXG4gICAgICAgICAgICAgIGNvbW1pdHRlZDogZFxyXG4gICAgICAgICAgICB9KSksICFkKSB7XHJcbiAgICAgICAgICBiKFwiYXR0ZW1wdDpub3QtY29tbWl0dGVkXCIsIGUsIHtcclxuICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICAgICAgYXR0ZW1wdDogclxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWoobykgPyBiKFwiY2xvc2UtY29tbWl0dGVkOnNraXBwZWQtY291bnRyeVwiLCBlLCB7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgICAgIGF0dGVtcHQ6IHJcclxuICAgICAgICAgIH0pIDogbCA/IGIoXCJjbG9zZS1jb21taXR0ZWQ6c2tpcHBlZC1tYWpvclwiLCBlLCB7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgICAgIGF0dGVtcHQ6IHJcclxuICAgICAgICAgIH0pIDogKGIoXCJjbG9zZS1jb21taXR0ZWQ6YmVmb3JlXCIsIGUsIHtcclxuICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICAgICAgYXR0ZW1wdDogclxyXG4gICAgICAgICAgfSksIGF3YWl0IGVjKGUpLCBiKFwiY2xvc2UtY29tbWl0dGVkOmFmdGVyXCIsIGUsIHtcclxuICAgICAgICAgICAgZXhwZWN0ZWRWYWx1ZTogdCxcclxuICAgICAgICAgICAgYXR0ZW1wdDogclxyXG4gICAgICAgICAgfSkpLCBpICYmIChhd2FpdCAoMCwgbS5kZWxheSkoZWoobykgPyAxMjAwIDogODAwKSwgYihcImFkZHJlc3MtZGVwZW5kZW50LWRlbGF5OmFmdGVyXCIsXHJcbiAgICAgICAgICBlLCB7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgICAgIGF0dGVtcHQ6IHJcclxuICAgICAgICAgIH0pKSwgZWoobykgJiYgZUIoZSwgdSwgbykgJiYgKGIoXCJjb3VudHJ5LWNsb3NlLWFmdGVyLWRlcGVuZGVudDpiZWZvcmVcIiwgZSwge1xyXG4gICAgICAgICAgICBleHBlY3RlZFZhbHVlOiB0LFxyXG4gICAgICAgICAgICBhdHRlbXB0OiByXHJcbiAgICAgICAgICB9KSwgYXdhaXQgZWQoZSksIGIoXCJjb3VudHJ5LWNsb3NlLWFmdGVyLWRlcGVuZGVudDphZnRlclwiLCBlLCB7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgICAgIGF0dGVtcHQ6IHJcclxuICAgICAgICAgIH0pKSwgZUIoZSwgdSwgbykpIHJldHVybiBiKFwic3VjY2Vzc1wiLCBlLCB7XHJcbiAgICAgICAgICBleHBlY3RlZFZhbHVlOiB0LFxyXG4gICAgICAgICAgYXR0ZW1wdDogclxyXG4gICAgICAgIH0pLCAhMDtcclxuICAgICAgICBiKFwicG9zdC1jbG9zZTpub3QtY29tbWl0dGVkXCIsIGUsIHtcclxuICAgICAgICAgIGV4cGVjdGVkVmFsdWU6IHQsXHJcbiAgICAgICAgICBhdHRlbXB0OiByXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGIoXCJmYWlsZWQ6bm8tY2xlYW51cFwiLCBlLCB7XHJcbiAgICAgIGV4cGVjdGVkVmFsdWU6IHRcclxuICAgIH0pLCAhMVxyXG4gIH1cclxuICBsZXQgbyA9ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgXCIuL2FuY2VzdG9yOjpkaXZbY29udGFpbnMoQGNsYXNzLCAnaW5wdXQtZmllbGQtY29udGFpbmVyX19sZWZ0JyldL2ZvbGxvd2luZy1zaWJsaW5nOjpkaXZbY29udGFpbnMoQGNsYXNzLCAnaW5wdXQtZmllbGQtY29udGFpbmVyX19yaWdodCcpXS8vYnV0dG9uW2NvbnRhaW5zKEBjbGFzcywgJ2ljb24tZHJvcGRvd24tYXJyb3cgaWNvbi1kcm9wZG93bi1hcnJvd19fb3BlbicpXVwiLFxyXG4gICAgZSk7XHJcbiAgcmV0dXJuIG8gPyAoKDAsIGEudHJpZ2dlckV2ZW50cykobywgW1wiY2xpY2tcIiwgXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCJdKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDIwMCksXHJcbiAgICAhMCkgOiAoZS5ibHVyKCksICExKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlcihlLCB0KSB7XHJcbiAgbGV0IHIgPSBTdHJpbmcoZSA/PyBcIlwiKS5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgXCJcIikudG9Mb3dlckNhc2UoKTtcclxuICBpZiAoIW5ldyBTZXQoW1wicG9zdGFsY29kZVwiLCBcInppcGNvZGVcIiwgXCJ6aXBcIl0pLmhhcyhyKSkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IG4gPSB0LnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCBcIlwiKTtcclxuICByZXR1cm4gbi5sZW5ndGggPD0gMyA/IG51bGwgOiBuLnNsaWNlKDAsIDMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuKGUsIHQpIHtcclxuICBlbChlLCB0KTtcclxuICBsZXQgciA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgSW5wdXRFdmVudCA/IG5ldyBJbnB1dEV2ZW50KFwiaW5wdXRcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgIGRhdGE6IHQsXHJcbiAgICBpbnB1dFR5cGU6IFwiaW5zZXJ0VGV4dFwiXHJcbiAgfSkgOiBuZXcgRXZlbnQoXCJpbnB1dFwiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgfSk7XHJcbiAgZS5kaXNwYXRjaEV2ZW50KHIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVvKGUpIHtcclxuICBsZXQgdCA9IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKT8udHJpbSgpO1xyXG4gIGlmICh0KSByZXR1cm4gdDtcclxuICBsZXQgciA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgZS5pZCA/XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlLmlkfS10b2dnbGUtYnV0dG9uYCkgOiBudWxsLFxyXG4gICAgbiA9IHI/LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik/LnRyaW0oKTtcclxuICByZXR1cm4gbiB8fCBgJHtlLmlkfS1saXN0Ym94YFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVpKGUpIHtcclxuICBlLmZvY3VzKCk7XHJcbiAgbGV0IHQgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBkb2N1bWVudCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmIGUuaWQgP1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZS5pZH0tdG9nZ2xlLWJ1dHRvbmApIDogbnVsbDtcclxuICBpZiAodCkge1xyXG4gICAgbGV0IHIgPSBcInRydWVcIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpIHx8IFwidHJ1ZVwiID09PSB0LmdldEF0dHJpYnV0ZShcclxuICAgICAgXCJhcmlhLWV4cGFuZGVkXCIpO1xyXG4gICAgaWYgKCFyKSB7XHJcbiAgICAgIGUuZGlzcGF0Y2hFdmVudChlcyhcImtleWRvd25cIiwgXCJBcnJvd0Rvd25cIikpLCBlLmRpc3BhdGNoRXZlbnQoZXMoXCJrZXl1cFwiLCBcIkFycm93RG93blwiKSksXHJcbiAgICAgICAgYXdhaXQgKDAsIG0uZGVsYXkpKDEwMCk7XHJcbiAgICAgIGxldCByID0gXCJ0cnVlXCIgPT09IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSB8fCBcInRydWVcIiA9PT0gdC5nZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCIpIHx8ICEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZW8oZSkpO1xyXG4gICAgICByIHx8IGVhKGUsIHQpXHJcbiAgICB9XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgZS5jbGljaygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhKGUsIHQpIHtcclxuICBsZXQgciA9ICgpID0+IFwidHJ1ZVwiID09PSBlLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgfHwgXCJ0cnVlXCIgPT09IHQuZ2V0QXR0cmlidXRlKFxyXG4gICAgXCJhcmlhLWV4cGFuZGVkXCIpIHx8ICEhKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZCAmJiBlLmlkICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVvKGUpKSk7XHJcbiAgZm9yIChsZXQgZSBvZiBbXCJwb2ludGVyb3ZlclwiLCBcIm1vdXNlb3ZlclwiLCBcInBvaW50ZXJlbnRlclwiLCBcIm1vdXNlZW50ZXJcIiwgXCJwb2ludGVyZG93blwiLFxyXG4gICAgICBcIm1vdXNlZG93blwiLCBcInBvaW50ZXJ1cFwiLCBcIm1vdXNldXBcIlxyXG4gICAgXSlcclxuICAgIGlmIChleCh0LCBlKSwgcigpKSByZXR1cm47XHJcbiAgdC5jbGljaz8uKClcclxufVxyXG5cclxuZnVuY3Rpb24gZWwoZSwgdCkge1xyXG4gIGxldCByID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGUpLFxyXG4gICAgbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IociwgXCJ2YWx1ZVwiKT8uc2V0O1xyXG4gIG4gPyBuLmNhbGwoZSwgdCkgOiBlLnZhbHVlID0gdFxyXG59XHJcblxyXG5mdW5jdGlvbiBlcyhlLCB0KSB7XHJcbiAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgS2V5Ym9hcmRFdmVudCA/IG5ldyBLZXlib2FyZEV2ZW50KGUsIHtcclxuICAgIGtleTogdCxcclxuICAgIGNvZGU6IHQsXHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgfSkgOiBuZXcgRXZlbnQoZSwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMFxyXG4gIH0pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZXUoZSkge1xyXG4gIGUuZGlzcGF0Y2hFdmVudChlcyhcImtleWRvd25cIiwgXCJFc2NhcGVcIikpLCBlLmRpc3BhdGNoRXZlbnQoZXMoXCJrZXl1cFwiLCBcIkVzY2FwZVwiKSksIGUuYmx1cigpLFxyXG4gICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSAmJiAoMCwgYS50cmlnZ2VyRXZlbnRzKShkb2N1bWVudC5ib2R5LCBbXHJcbiAgICAgIFwibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJcclxuICAgIF0pLCBhd2FpdCAoMCwgbS5kZWxheSkoNTApXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZWMoZSkge1xyXG4gIGlmIChcImZhbHNlXCIgPT09IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSkge1xyXG4gICAgYXdhaXQgKDAsIG0uZGVsYXkpKDUwKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwXHJcbiAgfSkpLCBhd2FpdCBldShlKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVkKGUpIHtcclxuICBsZXQgdCA9IGVmKGUsIFwiY2xvc2VcIik7XHJcbiAgaWYgKCF0KSB7XHJcbiAgICBhd2FpdCAoMCwgbS5kZWxheSkoMTAwKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBlcCh0KSwgYXdhaXQgKDAsIG0uZGVsYXkpKDIwMClcclxufVxyXG5cclxuZnVuY3Rpb24gZWYoZSwgdCkge1xyXG4gIGxldCByID0gXCJjbG9zZVwiID09PSB0ID8gXCJjbG9zZSB0aGUgZHJvcC1kb3duIGxpc3RcIiA6IFwib3BlbiB0aGUgZHJvcC1kb3duIGxpc3RcIixcclxuICAgIG4gPSBlLnBhcmVudEVsZW1lbnQ7XHJcbiAgZm9yIChsZXQgZSA9IDA7IG4gJiYgZSA8IDg7IGUrKykge1xyXG4gICAgbGV0IGUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4ucXVlcnlTZWxlY3RvckFsbCA/IEFycmF5LmZyb20obi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKSA6IFtdLFxyXG4gICAgICB0ID0gZS5maW5kKGUgPT4ge1xyXG4gICAgICAgIGxldCB0ID0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpIHx8IGUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikgfHwgZS50ZXh0Q29udGVudCB8fCBcIlwiO1xyXG4gICAgICAgIHJldHVybiB0LnRyaW0oKS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgocilcclxuICAgICAgfSk7XHJcbiAgICBpZiAodCkgcmV0dXJuIHQ7XHJcbiAgICBuID0gbi5wYXJlbnRFbGVtZW50XHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVwKGUpIHtcclxuICBmb3IgKGxldCB0IG9mIFtcInBvaW50ZXJvdmVyXCIsIFwibW91c2VvdmVyXCIsIFwicG9pbnRlcmVudGVyXCIsIFwibW91c2VlbnRlclwiLCBcInBvaW50ZXJkb3duXCIsXHJcbiAgICAgIFwibW91c2Vkb3duXCIsIFwicG9pbnRlcnVwXCIsIFwibW91c2V1cFwiXHJcbiAgICBdKSBleChlLCB0KTtcclxuICBlLmNsaWNrPy4oKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVtKGUpIHtcclxuICBsZXQgdCA9IGVnKGUpWzBdO1xyXG4gIHQgJiYgKHQuc2Nyb2xsSW50b1ZpZXc/Lih7XHJcbiAgICBibG9jazogXCJuZWFyZXN0XCIsXHJcbiAgICBpbmxpbmU6IFwibmVhcmVzdFwiXHJcbiAgfSksIHQuY2xpY2s/LigpLCBhd2FpdCAoMCwgbS5kZWxheSkoMjAwKSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlaCh7XHJcbiAgb3B0aW9uRWxlbWVudDogZSxcclxuICBpbnB1dEVsZW1lbnQ6IHQsXHJcbiAgZXhwZWN0ZWRWYWx1ZTogcixcclxuICBmaWVsZE5hbWU6IG4sXHJcbiAgYXR0ZW1wdDogb1xyXG59KSB7XHJcbiAgbGV0IGkgPSBlZyhlKTtcclxuICBmb3IgKGxldCBlID0gMTsgZSA8IGkubGVuZ3RoOyBlKyspIHtcclxuICAgIGxldCBhID0gaVtlXTtcclxuICAgIGIoXCJhbHRlcm5hdGUtdGFyZ2V0OmJlZm9yZVwiLCB0LCB7XHJcbiAgICAgIGV4cGVjdGVkVmFsdWU6IHIsXHJcbiAgICAgIGF0dGVtcHQ6IG8sXHJcbiAgICAgIHRhcmdldEluZGV4OiBlLFxyXG4gICAgICB0YXJnZXRUZXh0OiBhLnRleHRDb250ZW50Py50cmltKClcclxuICAgIH0pLCBlYihhKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDI1MCk7XHJcbiAgICBsZXQgbCA9IGF3YWl0IGVxKHQsIHIsIG4pO1xyXG4gICAgaWYgKGIoXCJhbHRlcm5hdGUtdGFyZ2V0OmFmdGVyXCIsIHQsIHtcclxuICAgICAgICBleHBlY3RlZFZhbHVlOiByLFxyXG4gICAgICAgIGF0dGVtcHQ6IG8sXHJcbiAgICAgICAgdGFyZ2V0SW5kZXg6IGUsXHJcbiAgICAgICAgY29tbWl0dGVkOiBsXHJcbiAgICAgIH0pLCBsKSByZXR1cm4gITBcclxuICB9XHJcbiAgcmV0dXJuICExXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVnKGUpIHtcclxuICBsZXQgdCA9IFtdLFxyXG4gICAgciA9IGUgPT4ge1xyXG4gICAgICBsZXQgciA9IGU7XHJcbiAgICAgICFyIHx8IFwiaXNDb25uZWN0ZWRcIiBpbiByICYmICExID09PSByLmlzQ29ubmVjdGVkIHx8IHQuaW5jbHVkZXMocikgfHwgdC5wdXNoKHIpXHJcbiAgICB9O1xyXG4gIHJldHVybiByKGUuY2xvc2VzdD8uKFwiW3JvbGU9J2dyaWRjZWxsJ11cIikpLCByKGUuY2xvc2VzdD8uKFwiW3JvbGU9J29wdGlvbiddXCIpKSwgcihlKSwgcihlLmNsb3Nlc3Q/LlxyXG4gICAgKFwiW3JvbGU9J3JvdyddXCIpKSwgdFxyXG59XHJcblxyXG5mdW5jdGlvbiBlYihlKSB7XHJcbiAgZS5zY3JvbGxJbnRvVmlldz8uKHtcclxuICAgIGJsb2NrOiBcIm5lYXJlc3RcIixcclxuICAgIGlubGluZTogXCJuZWFyZXN0XCJcclxuICB9KSwgZUUoZSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBleSh7XHJcbiAgZWxlbWVudDogZSxcclxuICBleHBlY3RlZFZhbHVlOiB0LFxyXG4gIGZpZWxkTmFtZTogcixcclxuICBtb2RhbEVsZW1lbnQ6IG4sXHJcbiAgb3B0aW9uWFBhdGg6IG9cclxufSkge1xyXG4gIGxldCBpID0gZXYobik7XHJcbiAgaWYgKCFpLmxlbmd0aCkgcmV0dXJuIGIoXCJjb3VudHJ5LXNjcm9sbC1zZWFyY2g6bm8tc2Nyb2xsZXJcIiwgZSwge1xyXG4gICAgZXhwZWN0ZWRWYWx1ZTogdFxyXG4gIH0pLCBudWxsO1xyXG4gIGZvciAobGV0IGEgb2YgaSkge1xyXG4gICAgbGV0IGkgPSBNYXRoLm1heCgwLCBhLnNjcm9sbEhlaWdodCAtIGEuY2xpZW50SGVpZ2h0KTtcclxuICAgIGZvciAobGV0IGwgb2YgZVMoaSkpIHtcclxuICAgICAgYS5zY3JvbGxUb3AgPSBsLCBhLmRpc3BhdGNoRXZlbnQ/LihuZXcgRXZlbnQoXCJzY3JvbGxcIiwge1xyXG4gICAgICAgIGJ1YmJsZXM6ICEwXHJcbiAgICAgIH0pKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDE4MCk7XHJcbiAgICAgIGxldCBpID0geCgoMCwgZi5nZXRPcmRlcmVkTm9kZXMpKG8sIG4pLmZpbHRlcihlID0+ICFMKGUpKSksXHJcbiAgICAgICAgdSA9IEUoaSksXHJcbiAgICAgICAgYyA9ICgwLCBzLmZpbmRPcmFjbGVTZWxlY3RPcHRpb25JbmRleCkodCwgdSwgcik7XHJcbiAgICAgIGlmIChiKFwiY291bnRyeS1zY3JvbGwtc2VhcmNoOnJlYWQtb3B0aW9uc1wiLCBlLCB7XHJcbiAgICAgICAgICBleHBlY3RlZFZhbHVlOiB0LFxyXG4gICAgICAgICAgbWF0Y2hlZEluZGV4OiBjLFxyXG4gICAgICAgICAgb3B0aW9uQ291bnQ6IHUubGVuZ3RoLFxyXG4gICAgICAgICAgb3B0aW9uVGV4dHM6IHUuc2xpY2UoMCwgMTIpLFxyXG4gICAgICAgICAgc2Nyb2xsVG9wOiBsXHJcbiAgICAgICAgfSksIC0xICE9PSBjKSByZXR1cm4ge1xyXG4gICAgICAgIG9wdGlvbkVsZW1lbnRzOiBpLFxyXG4gICAgICAgIG1hdGNoZWRJbmRleDogY1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2KGUpIHtcclxuICBsZXQgdCA9IFtdLFxyXG4gICAgciA9IGUgPT4ge1xyXG4gICAgICBldyhlKSAmJiAodC5pbmNsdWRlcyhlKSB8fCB0LnB1c2goZSkpXHJcbiAgICB9O1xyXG4gIGlmIChyKGUpLCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbClcclxuICAgIGZvciAobGV0IHQgb2YgQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKSkgcih0KTtcclxuICByZXR1cm4gdFxyXG59XHJcblxyXG5mdW5jdGlvbiBldyhlKSB7XHJcbiAgbGV0IHQgPSBlO1xyXG4gIHJldHVybiAhIXQgJiYgXCJudW1iZXJcIiA9PSB0eXBlb2YgdC5zY3JvbGxUb3AgJiYgXCJudW1iZXJcIiA9PSB0eXBlb2YgdC5zY3JvbGxIZWlnaHQgJiYgXCJudW1iZXJcIiA9PVxyXG4gICAgdHlwZW9mIHQuY2xpZW50SGVpZ2h0ICYmIHQuc2Nyb2xsSGVpZ2h0ID4gdC5jbGllbnRIZWlnaHQgKyAyMFxyXG59XHJcblxyXG5mdW5jdGlvbiBlUyhlKSB7XHJcbiAgaWYgKGUgPD0gMCkgcmV0dXJuIFswXTtcclxuICBsZXQgdCA9IG5ldyBTZXQ7XHJcbiAgZm9yIChsZXQgciBvZiBbMCwgLjE1LCAuMywgLjQ1LCAuNiwgLjc1LCAuODgsIDFdKSB0LmFkZChNYXRoLnJvdW5kKGUgKiByKSk7XHJcbiAgbGV0IHIgPSA0MDA7XHJcbiAgZm9yIChsZXQgbiA9IDA7IG4gPD0gZTsgbiArPSByKSB0LmFkZChuKTtcclxuICByZXR1cm4gdC5hZGQoZSksIFsuLi50XS5zb3J0KChlLCB0KSA9PiBlIC0gdClcclxufVxyXG5cclxuZnVuY3Rpb24gZUUoZSkge1xyXG4gIGZvciAobGV0IHQgb2YgW1wicG9pbnRlcm92ZXJcIiwgXCJtb3VzZW92ZXJcIiwgXCJwb2ludGVyZW50ZXJcIiwgXCJtb3VzZWVudGVyXCIsIFwicG9pbnRlcmRvd25cIixcclxuICAgICAgXCJtb3VzZWRvd25cIiwgXCJwb2ludGVydXBcIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIlxyXG4gICAgXSkgZXgoZSwgdCk7XHJcbiAgZS5jbGljaz8uKClcclxufVxyXG5cclxuZnVuY3Rpb24gZXgoZSwgdCkge1xyXG4gIGxldCByID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA/IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBudWxsLFxyXG4gICAgbiA9IHIgPyByLmxlZnQgKyByLndpZHRoIC8gMiA6IDAsXHJcbiAgICBvID0gciA/IHIudG9wICsgci5oZWlnaHQgLyAyIDogMCxcclxuICAgIGkgPSBcInBvaW50ZXJkb3duXCIgPT09IHQgfHwgXCJtb3VzZWRvd25cIiA9PT0gdCxcclxuICAgIGEgPSB7XHJcbiAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgICAgYnV0dG9uOiAwLFxyXG4gICAgICBidXR0b25zOiBpID8gMSA6IDAsXHJcbiAgICAgIGNsaWVudFg6IG4sXHJcbiAgICAgIGNsaWVudFk6IG8sXHJcbiAgICAgIC4uLlwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHtcclxuICAgICAgICB2aWV3OiB3aW5kb3dcclxuICAgICAgfSA6IHt9XHJcbiAgICB9LFxyXG4gICAgbCA9IHQuc3RhcnRzV2l0aChcInBvaW50ZXJcIikgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBQb2ludGVyRXZlbnQgPyBuZXcgUG9pbnRlckV2ZW50KHQsIHtcclxuICAgICAgLi4uYSxcclxuICAgICAgcG9pbnRlclR5cGU6IFwibW91c2VcIixcclxuICAgICAgaXNQcmltYXJ5OiAhMFxyXG4gICAgfSkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIE1vdXNlRXZlbnQgPyBuZXcgTW91c2VFdmVudCh0LCBhKSA6IG5ldyBFdmVudCh0LCB7XHJcbiAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICBjYW5jZWxhYmxlOiAhMFxyXG4gICAgfSk7XHJcbiAgZS5kaXNwYXRjaEV2ZW50KGwpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZUMoZSwgdCA9IFwiZGVmYXVsdFwiKSB7XHJcbiAgaWYgKFwiY29uZmlybS1jdXJyZW50XCIgPT09IHQpIHtcclxuICAgIGUuZGlzcGF0Y2hFdmVudChlcyhcImtleWRvd25cIiwgXCJFbnRlclwiKSksIGUuZGlzcGF0Y2hFdmVudChlcyhcImtleXVwXCIsIFwiRW50ZXJcIikpLCBhd2FpdCAoMCwgbVxyXG4gICAgICAuZGVsYXkpKDI1MCk7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgZS5kaXNwYXRjaEV2ZW50KGVzKFwia2V5ZG93blwiLCBcIkFycm93RG93blwiKSksIGUuZGlzcGF0Y2hFdmVudChlcyhcImtleXVwXCIsIFwiQXJyb3dEb3duXCIpKSwgZVxyXG4gICAgLmRpc3BhdGNoRXZlbnQoZXMoXCJrZXlkb3duXCIsIFwiRW50ZXJcIikpLCBlLmRpc3BhdGNoRXZlbnQoZXMoXCJrZXl1cFwiLCBcIkVudGVyXCIpKSwgYXdhaXQgKDAsIG1cclxuICAgICAgLmRlbGF5KSgyMDApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVBKGUpIHtcclxuICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IGUucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCkgOiBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVrKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGUgPz8gXCJcIikucmVwbGFjZSgvW1xcdTIwMTknXS9nLCBcIlwiKS5yZXBsYWNlKC9bXFx1MjAxMC1cXHUyMDE1XS9nLCBcIi1cIikucmVwbGFjZShcclxuICAgIC9bLi9fLV0rL2csIFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlVChlKSB7XHJcbiAgbGV0IHQgPSBlayhlLmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1sYWJlbFwiKSk7XHJcbiAgaWYgKFwiZGVncmVlXCIgPT09IHQpIHJldHVybiAhMDtcclxuICBsZXQgciA9IGVrKGUuY2xvc2VzdD8uKFwiLmlucHV0LXJvd1wiKT8udGV4dENvbnRlbnQpO1xyXG4gIHJldHVybiByLnN0YXJ0c1dpdGgoXCJkZWdyZWUgXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVGKGUpIHtcclxuICBsZXQgdCA9IGVrKGUpO1xyXG4gIHJldHVybiB0ID8gL1xcYm1iYVxcYi8udGVzdCh0KSA/IFwibWJhXCIgOiAvXFxiaGlnaCBzY2hvb2xcXGIvLnRlc3QodCkgPyBcImhpZ2hzY2hvb2xcIiA6IC9cXGJnZWRcXGIvLnRlc3QoXHJcbiAgICAgIHQpID8gXCJnZWRcIiA6IC9cXGIoPzphc3NvY2lhdGV8YXNzb2NpYXRlcylcXGIvLnRlc3QodCkgPyBcImFzc29jaWF0ZVwiIDpcclxuICAgIC9cXGIoPzpiYWNoZWxvcnxiYWNoZWxvcnN8YnN8YmF8YnNjKVxcYi8udGVzdCh0KSA/IFwiYmFjaGVsb3JcIiA6IC9cXGIoPzptYXN0ZXJ8bWFzdGVyc3xtc3xtYXxtc2MpXFxiL1xyXG4gICAgLnRlc3QodCkgPyBcIm1hc3RlclwiIDogL1xcYig/OmRvY3Rvcnxkb2N0b3JhdGV8cGhkfHBoIGQpXFxiLy50ZXN0KHQpID8gXCJkb2N0b3JcIiA6XHJcbiAgICAvXFxiKD86amR8aiBkfGp1cmlzIGRvY3RvcilcXGIvLnRlc3QodCkgPyBcImpkXCIgOiAvXFxicG9zdFxccypncmFkdWF0ZVxcYi4qXFxiZGlwbG9tYVxcYi8udGVzdCh0KSA/XHJcbiAgICBcInBvc3RncmFkdWF0ZWRpcGxvbWFcIiA6IC9cXGJjb2xsZWdlXFxiLipcXGJkaXBsb21hXFxiLy50ZXN0KHQpID8gXCJjb2xsZWdlZGlwbG9tYVwiIDogL1xcYnRyYWRlXFxiL1xyXG4gICAgLnRlc3QodCkgPyBcInRyYWRlXCIgOiAvXFxib3RoZXJcXGIvLnRlc3QodCkgPyBcIm90aGVyXCIgOiAvXFxibm9uZXxubyBkZWdyZWVcXGIvLnRlc3QodCkgPyBcIm5vbmVcIiA6IHQgOlxyXG4gICAgXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBlSShlLCB0LCByKSB7XHJcbiAgaWYgKHIpIHtcclxuICAgIGxldCByID0gZUYoZSk7XHJcbiAgICByZXR1cm4gdC5zb21lKGUgPT4ge1xyXG4gICAgICBsZXQgdCA9IGVGKGUpO1xyXG4gICAgICByZXR1cm4gISF0ICYmIHQgPT09IHJcclxuICAgIH0pXHJcbiAgfVxyXG4gIGxldCBuID0gZWsoZSk7XHJcbiAgcmV0dXJuIHQuc29tZShlID0+IGVrKGUpID09PSBuKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlaihlKSB7XHJcbiAgcmV0dXJuIGU/LnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcImNvdW50cnlcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBlRChlKSB7XHJcbiAgcmV0dXJuIGU/LnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBcImNvdW50cnlcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBlUChlKSB7XHJcbiAgbGV0IHQgPSBlPy5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgXCJcIikudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gXCJhZGRyZXNzMVwiID09PSB0IHx8IFwiYWRkcmVzc2xpbmUxXCIgPT09IHRcclxufVxyXG5cclxuZnVuY3Rpb24gZV8oZSkge1xyXG4gIHJldHVybiBlLmNsYXNzTGlzdD8uY29udGFpbnMoXCJjeC1zZWxlY3QtaW5wdXQtLWludmFsaWRcIikgfHwgXCJ0cnVlXCIgPT09IGUuZ2V0QXR0cmlidXRlKFxyXG4gICAgXCJhcmlhLWludmFsaWRcIilcclxufVxyXG5cclxuZnVuY3Rpb24gZUwoZSkge1xyXG4gIHJldHVybiBTdHJpbmcoZSA/PyBcIlwiKS5tYXRjaCgvXFwrKFxcZHsxLDR9KVxcYi8pPy5bMV0gPz8gXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBlUihlKSB7XHJcbiAgcmV0dXJuIC9eXFxzKlxcKD9cXCtcXGR7MSw0fVxcKT9cXHMqJC8udGVzdChTdHJpbmcoZSA/PyBcIlwiKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZU8oKSB7XHJcbiAgcmV0dXJuIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50ICYmICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICdpbnB1dFtuYW1lPVwiYWRkcmVzc0xpbmUxXCJdLCBpbnB1dFtuYW1lPVwiY2l0eVwiXSwgaW5wdXRbbmFtZT1cInJlZ2lvbjJcIl0sIGlucHV0W25hbWU9XCJwb3N0YWxDb2RlXCJdLCBpbnB1dFtuYW1lPVwicmVnaW9uMVwiXSdcclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gZU0oZSkge1xyXG4gIGxldCB0ID0gZTtcclxuICBmb3IgKGxldCBlID0gMDsgdCAmJiBlIDwgMTI7IGUrKykge1xyXG4gICAgaWYgKHQudGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLmluY2x1ZGVzKFwiZGVwZW5kZW50IGRyb3AtZG93biBsaXN0c1wiKSkgcmV0dXJuICEwO1xyXG4gICAgdCA9IHQucGFyZW50RWxlbWVudFxyXG4gIH1cclxuICByZXR1cm4gITFcclxufVxyXG5cclxuZnVuY3Rpb24gZU4oZSkge1xyXG4gIGxldCB0ID0gZS5wYXJlbnRFbGVtZW50O1xyXG4gIGZvciAobGV0IGUgPSAwOyB0ICYmIGUgPCA4OyBlKyspIHtcclxuICAgIGxldCBlID0gQXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbHRlcihlID0+XHJcbiAgICAgIFwiUmVtb3ZlIHZhbHVlIGZvciB0aGUgQ291bnRyeSBmaWVsZC5cIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpKTtcclxuICAgIGlmICgxID09PSBlLmxlbmd0aCkgcmV0dXJuIGVbMF07XHJcbiAgICBpZiAoZS5sZW5ndGggPiAxKSBicmVhaztcclxuICAgIHQgPSB0LnBhcmVudEVsZW1lbnRcclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlJChlKSB7XHJcbiAgbGV0IHQgPSBlTihlKTtcclxuICBpZiAoeShcImNvdW50cnk6ZGVwZW5kZW50LXJlc2V0OnByZXBhcmVcIiwge1xyXG4gICAgICBoYXNFeGlzdGluZ0NvdW50cnk6ICEhZUEoZS52YWx1ZSksXHJcbiAgICAgIGhhc0NsZWFyQnV0dG9uOiAhIXQsXHJcbiAgICAgIGRlcGVuZGVudEZpZWxkc1ByZXNlbnQ6IGVPKClcclxuICAgIH0pLCAhdCkgcmV0dXJuIGNvbnNvbGUud2FybihcclxuICAgIFwiW29yYWNsZWNsb3VkXVtjb3VudHJ5XSBuYXRpdmUgZGVwZW5kZW50LWFkZHJlc3MgY2xlYXIgYnV0dG9uIHVuYXZhaWxhYmxlXCIpLCAhMTtcclxuICB0LmNsaWNrKCk7XHJcbiAgbGV0IHIgPSBhd2FpdCAoMCwgbC53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiBcIlwiID09PSBlQShlLnZhbHVlKSAmJiAhZU8oKSwge1xyXG4gICAgdGltZW91dDogM2UzLFxyXG4gICAgaW50ZXJ2YWw6IDUwLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gIH0pO1xyXG4gIHJldHVybiB5KFwiY291bnRyeTpkZXBlbmRlbnQtcmVzZXQ6cmVzdWx0XCIsIHtcclxuICAgIHJlc2V0Q29uZmlybWVkOiByLFxyXG4gICAgY291bnRyeUNsZWFyZWQ6IFwiXCIgPT09IGVBKGUudmFsdWUpLFxyXG4gICAgZGVwZW5kZW50RmllbGRzUHJlc2VudDogZU8oKVxyXG4gIH0pLCByIHx8IGNvbnNvbGUud2FybihcclxuICAgIFwiW29yYWNsZWNsb3VkXVtjb3VudHJ5XSBuYXRpdmUgZGVwZW5kZW50LWFkZHJlc3MgcmVzZXQgd2FzIG5vdCBjb25maXJtZWRcIiksIHJcclxufVxyXG5cclxuZnVuY3Rpb24gZUIoZSwgdCwgcikge1xyXG4gIGxldCBuID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZS52YWx1ZSA/IGUudmFsdWUgOiBcIlwiLFxyXG4gICAgbyA9IGVBKGUudmFsdWUpO1xyXG4gIGlmICghbyB8fCBlXyhlKSkgcmV0dXJuICExO1xyXG4gIGlmICgoMCwgcy5pc09yYWNsZVBob25lQ291bnRyeUNvZGVGaWVsZCkocikpIHtcclxuICAgIGxldCBlID0gZUwodCksXHJcbiAgICAgIHIgPSBlTChuKTtcclxuICAgIHJldHVybiAhIWUgJiYgZSA9PT0gclxyXG4gIH1cclxuICByZXR1cm4gZWoocikgPyBvID09PSBlQSh0KSAmJiAoIWVNKGUpIHx8IGVPKCkpIDogIVAocikgfHwgbyA9PT0gZUEodCkgJiYgXCJ0cnVlXCIgIT09IGVcclxuICAgIC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZXEoZSwgdCwgcikge1xyXG4gIHJldHVybiBhd2FpdCAoMCwgbC53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiBlQihlLCB0LCByKSwge1xyXG4gICAgdGltZW91dDogZWoocikgPyA4ZTMgOiAxZTMsXHJcbiAgICBpbnRlcnZhbDogMTAwLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgPyBkb2N1bWVudC5ib2R5IDogdm9pZCAwXHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlVShlLCB0ID0gNTAwLCByID0gMTApIHtcclxuICBsZXQgbiA9IDAsXHJcbiAgICBvID0gbnVsbDtcclxuICBmb3IgKDsgIW8gJiYgbiA8IHI7KSAhKG8gPSAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShlKSkgJiYgKGF3YWl0ICgwLCBtLmRlbGF5KSh0KSwgbisrKTtcclxuICByZXR1cm4gb1xyXG59XHJcblxyXG5mdW5jdGlvbiBlSChlKSB7XHJcbiAgcmV0dXJuIFN0cmluZyhlID8/IFwiXCIpLnJlcGxhY2UoL1suL18tXSsvZywgXCIgXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVZKGUpIHtcclxuICBsZXQgdCA9IGVIKGUpO1xyXG4gIHJldHVybiBbXCJ0cnVlXCIsIFwiMVwiLCBcInllc1wiXS5pbmNsdWRlcyh0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBleihlKSB7XHJcbiAgbGV0IHQgPSBlSChlKTtcclxuICByZXR1cm4gW1wiZmFsc2VcIiwgXCIwXCIsIFwibm9cIiwgXCJkZWNsaW5lIHRvIHN0YXRlXCJdLmluY2x1ZGVzKHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVWKGUpIHtcclxuICBpZiAoITEgIT09IGUuaXNDb25uZWN0ZWQpIHJldHVybiBlO1xyXG4gIGlmICghZS5pZCB8fCAhZS5vd25lckRvY3VtZW50KSByZXR1cm4gbnVsbDtcclxuICBsZXQgdCA9IEFycmF5LmZyb20oZS5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSkuZmlsdGVyKHQgPT4gdC5pZCA9PT0gZS5pZCk7XHJcbiAgaWYgKDEgIT09IHQubGVuZ3RoKSByZXR1cm4gbnVsbDtcclxuICBsZXQgciA9IHRbMF07XHJcbiAgcmV0dXJuIHIuaXNDb25uZWN0ZWQgJiYgci50eXBlID09PSBlLnR5cGUgJiYgci5uYW1lID09PSBlLm5hbWUgPyByIDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBlVyhlKSB7XHJcbiAgbGV0IHQgPSBBcnJheS5mcm9tKGUubGFiZWxzIHx8IFtdKS5maWx0ZXIodCA9PiB0Lmh0bWxGb3IgPT09IGUuaWQgJiYgdC5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICBcImFwcGx5LWZsb3ctaW5wdXQtY2hlY2tib3hcIikpO1xyXG4gIHJldHVybiAxICE9PSB0Lmxlbmd0aCA/IG51bGwgOiB0WzBdLnF1ZXJ5U2VsZWN0b3IoXCIuYXBwbHktZmxvdy1pbnB1dC1jaGVja2JveF9fYnV0dG9uXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVHKGUpIHtcclxuICBsZXQgdCA9IGVWKGUpO1xyXG4gIGlmICghdD8uY2hlY2tlZCkgcmV0dXJuICExO1xyXG4gIGxldCByID0gZVcodCk7XHJcbiAgcmV0dXJuICFyIHx8IHIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXBwbHktZmxvdy1pbnB1dC1jaGVja2JveF9fYnV0dG9uLS1jaGVja2VkXCIpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZUsoZSwgdCwgcikge1xyXG4gIGxldCBuID0gZVYoZSk7XHJcbiAgaWYgKCFuIHx8IG4uZGlzYWJsZWQpIHJldHVybiAhMTtcclxuICBsZXQgbyA9IGVIKHIpLFxyXG4gICAgaSA9IHQuc29tZShlID0+IHtcclxuICAgICAgaWYgKGVZKGUpKSByZXR1cm4gITA7XHJcbiAgICAgIGxldCB0ID0gZUgoZSk7XHJcbiAgICAgIHJldHVybiAhIW8gJiYgdCA9PT0gb1xyXG4gICAgfSk7XHJcbiAgaWYgKCFpICYmIHQuc29tZShleikpIHJldHVybiAhbi5jaGVja2VkO1xyXG4gIGlmIChpICYmICFuLmNoZWNrZWQpIHtcclxuICAgIGxldCBlID0gZVcobik7XHJcbiAgICAoZSB8fCBuKS5jbGljaygpLCBhd2FpdCAoMCwgbS5kZWxheSkoNTApXHJcbiAgfVxyXG4gIGlmICghaSkgcmV0dXJuICExO1xyXG4gIGxldCBhID0gYXdhaXQgKDAsIGwud2FpdEZvckNvbmRpdGlvbikoKCkgPT4gZUcobiksIHtcclxuICAgIHRpbWVvdXQ6IDFlMyxcclxuICAgIGludGVydmFsOiA1MCxcclxuICAgIG9ic2VydmVUYXJnZXQ6IG4ub3duZXJEb2N1bWVudD8uYm9keVxyXG4gIH0pO1xyXG4gIHJldHVybiBhICYmIGVHKG4pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZVgoZSwgdCkge1xyXG4gIGxldCByID0gQXJyYXkuaXNBcnJheSh0KSA/IHQgOiBbdF0sXHJcbiAgICBuID0gITE7XHJcbiAgZm9yIChsZXQgdCA9IDA7IHQgPCBlLiRjaGVja2JveHMubGVuZ3RoOyB0KyspIHtcclxuICAgIGxldCBvID0gZS4kY2hlY2tib3hzW3RdLFxyXG4gICAgICBpID0gZS5vcHRpb25zPy5bdF0sXHJcbiAgICAgIGEgPSBhd2FpdCBlSyhvLCByLCBpKSxcclxuICAgICAgbCA9IGVWKG8pO1xyXG4gICAgaWYgKGwgJiYgKGUuJGNoZWNrYm94c1t0XSA9IGwsIGUuJGlucHV0ID09PSBvICYmIChlLiRpbnB1dCA9IGwpKSwgXCJDdXJyZW50IEpvYlwiID09PSBlLmxhYmVsICYmXHJcbiAgICAgIHYoKSkge1xyXG4gICAgICBsZXQgZSA9IGw/LmNsb3Nlc3Q/LihcIi5pbnB1dC1yb3dcIiksXHJcbiAgICAgICAgdCA9IGU/LmNsb3Nlc3QoXCJmb3JtLWJ1aWxkZXJcIik7XHJcbiAgICAgIHkoXCJlbXBsb3ltZW50OmN1cnJlbnQtam9iLXN0YXRlXCIsIHtcclxuICAgICAgICBvcmlnaW5hbENvbm5lY3RlZDogby5pc0Nvbm5lY3RlZCxcclxuICAgICAgICBsaXZlQ29ubmVjdGVkOiBsPy5pc0Nvbm5lY3RlZCxcclxuICAgICAgICBjaGVja2VkOiBsPy5jaGVja2VkLFxyXG4gICAgICAgIHZpc3VhbENoZWNrZWQ6ICEhZT8ucXVlcnlTZWxlY3RvcihcIi5hcHBseS1mbG93LWlucHV0LWNoZWNrYm94X19idXR0b24tLWNoZWNrZWRcIiksXHJcbiAgICAgICAgZW5kRmllbGRzOiBBcnJheS5mcm9tKHQ/LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJlbmREYXRlXCJdJykgfHwgW10pLm1hcChlID0+ICh7XHJcbiAgICAgICAgICByZWFkT25seTogZS5yZWFkT25seSxcclxuICAgICAgICAgIGRpc2FibGVkOiBlLmRpc2FibGVkLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6ICEhZS5jbG9zZXN0KFwiLmlucHV0LXJvd1wiKT8ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgXCIuaW5wdXQtcm93X19sYWJlbC0tcmVxdWlyZWQtc3RhclwiKVxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgYSAmJiAobiA9ICEwKVxyXG4gIH1cclxuICByZXR1cm4gblxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVKKGUsIHQpIHtcclxuICBsZXQgciA9IEFycmF5LmlzQXJyYXkodCkgPyB0IDogW3RdLFxyXG4gICAgbiA9IGVUKGUpLFxyXG4gICAgbyA9ICgwLCBmLmdldE9yZGVyZWROb2RlcykoJy4vL3NwYW5bY29udGFpbnMoQGNsYXNzLCBcImN4LXNlbGVjdC1waWxsLW5hbWVcIildJywgZSksXHJcbiAgICBpID0gITE7XHJcbiAgZm9yIChsZXQgZSBvZiBvKSB7XHJcbiAgICBsZXQgdCA9IGUudGV4dENvbnRlbnQ/LnRyaW0oKTtcclxuICAgIGlmIChlSSh0LCByLCBuKSkge1xyXG4gICAgICBsZXQgdCA9ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLi9hbmNlc3Rvcjo6YnV0dG9uXCIsIGUpO1xyXG4gICAgICB0ICYmICF0LmNsYXNzTGlzdC5jb250YWlucyhcImN4LXNlbGVjdC1waWxsLXNlY3Rpb24tLXNlbGVjdGVkXCIpICYmICh0LmNsaWNrKCksIGF3YWl0ICgwLCBtXHJcbiAgICAgICAgLmRlbGF5KSgxZTMpKSwgaSA9ICEwXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZVEoZSwgdCkge1xyXG4gIGxldCByID0gITEsXHJcbiAgICBuID0gKDAsIGYuZ2V0T3JkZXJlZE5vZGVzKShcclxuICAgICAgXCIuLy9sYWJlbFtjb250YWlucyhAY2xhc3MsICdhcHBseS1mbG93LWlucHV0LWNoZWNrYm94Jykgb3IgY29udGFpbnMoQGNsYXNzLCAnYXBwbHktZmxvdy1pbnB1dC1yYWRpbycpXVwiLFxyXG4gICAgICBlKTtcclxuICBmb3IgKGxldCBlID0gMDsgZSA8IG4ubGVuZ3RoOyBlKyspIHtcclxuICAgIGxldCBvID0gbltlXSxcclxuICAgICAgaSA9IG8uZ2V0QXR0cmlidXRlKFwiZm9yXCIpLFxyXG4gICAgICBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSksXHJcbiAgICAgIGwgPSBvLnRleHRDb250ZW50Py50cmltKCk7XHJcbiAgICBpZiAobCAmJiB0LmluY2x1ZGVzKGwpKSB7XHJcbiAgICAgIGlmIChhLmNoZWNrZWQpIHtcclxuICAgICAgICByID0gITA7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG4gICAgICBhLmNsaWNrKCksIGF3YWl0ICgwLCBtLmRlbGF5KSgyMDApLCByID0gITBcclxuICAgIH1cclxuICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZVooZSwgdCkge1xyXG4gIGxldCByID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCA/IHQudHJpbSgpIDogU3RyaW5nKHQgPz8gXCJcIik7XHJcbiAgaWYgKCFyKSByZXR1cm4gITE7XHJcbiAgbGV0IG4gPSAoMCwgZi5nZXRPcmRlcmVkTm9kZXMpKFwiLi8vaW5wdXRbY29udGFpbnMoQGNsYXNzLCdjeC1zZWxlY3QtaW5wdXQnKV1cIiwgZS4kaW5wdXQpLFxyXG4gICAgbyA9ICgwLCBmLmdldE9yZGVyZWROb2RlcykoXCIuLy9zcGFuW2NvbnRhaW5zKEBjbGFzcywnaW5wdXQtZmllbGRfX2xhYmVsJyldXCIsIGUuJGlucHV0KSxcclxuICAgIGkgPSBbXCJtb250aFwiLCBcImRheVwiLCBcInllYXJcIl0sXHJcbiAgICBhID0gITE7XHJcbiAgZm9yIChsZXQgZSA9IDA7IGUgPCBuLmxlbmd0aCAmJiBlIDwgaS5sZW5ndGg7IGUrKykge1xyXG4gICAgbGV0IHQgPSBvW2VdPy50ZXh0Q29udGVudD8udHJpbSgpIHx8IGlbZV0sXHJcbiAgICAgIGwgPSAoMCwgcC50cmFuc0Zvcm1EYXRlTnVtYmVyVG9FZykociwgdC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGlmICghbCB8fCBcIk5hTlwiID09PSBsKSByZXR1cm4gITE7XHJcbiAgICBsZXQgcyA9IGF3YWl0IGV0KG5bZV0sIGwpO1xyXG4gICAgaWYgKCFzKSByZXR1cm4gITE7XHJcbiAgICBhID0gITAsIGF3YWl0ICgwLCBtLmRlbGF5KSgzMDApXHJcbiAgfVxyXG4gIHJldHVybiBhXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGUwKGUpIHtcclxuICByZXR1cm4gdHQoZSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlMihlLCB0LCByKSB7XHJcbiAgbGV0IG4gPSAoKSA9PiAoMCwgZi5nZXRPcmRlcmVkTm9kZXMpKFwiLi8vcFtjb250YWlucyhAY2xhc3MsICdpbnB1dC1yb3dfX3ZhbGlkYXRpb24nKV1cIiwgZSkuc29tZShcclxuICAgICAgZSA9PiB7XHJcbiAgICAgICAgbGV0IHQgPSBlO1xyXG4gICAgICAgIHJldHVybiAhIXQudGV4dENvbnRlbnQ/LnRyaW0oKSAmJiB0dCh0KVxyXG4gICAgICB9KSxcclxuICAgIG8gPSBhd2FpdCAoMCwgbC53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiBuKCkgfHwgIWUwKHQpLCB7XHJcbiAgICAgIHRpbWVvdXQ6IDVlMyxcclxuICAgICAgaW50ZXJ2YWw6IDEwMCxcclxuICAgICAgb2JzZXJ2ZVRhcmdldDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgPyBkb2N1bWVudC5ib2R5IDogdm9pZCAwXHJcbiAgICB9KSxcclxuICAgIGkgPSBvICYmICFuKCkgJiYgIWUwKHQpO1xyXG4gIHJldHVybiAhaSAmJiByICYmICh5KFwidGltZWxpbmU6c2F2ZS12YWxpZGF0aW9uXCIsIHtcclxuICAgIHNhdmVEaXNhYmxlZDogdC5kaXNhYmxlZCxcclxuICAgIGZpZWxkczogKDAsIGYuZ2V0T3JkZXJlZE5vZGVzKShcIi4vL3BbY29udGFpbnMoQGNsYXNzLCAnaW5wdXQtcm93X192YWxpZGF0aW9uJyldXCIsIGUpXHJcbiAgICAgIC5tYXAoZSA9PiB7XHJcbiAgICAgICAgbGV0IHQgPSBlLmNsb3Nlc3Q/LihcIi5pbnB1dC1yb3dcIiksXHJcbiAgICAgICAgICByID0gZS50ZXh0Q29udGVudCB8fCBcIlwiO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBsYWJlbDogdD8ucXVlcnlTZWxlY3RvcihcImZvcm0tZWxlbWVudC1sYWJlbFwiKT8udGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZywgXCIgXCIpXHJcbiAgICAgICAgICAgIC50cmltKCksXHJcbiAgICAgICAgICB2aXNpYmxlOiB0dChlKSxcclxuICAgICAgICAgIG1lc3NhZ2VMZW5ndGg6IHIudHJpbSgpLmxlbmd0aCxcclxuICAgICAgICAgIHJlcXVpcmVkTWVzc2FnZTogL3JlcXVpcmVkfG11c3QgZW50ZXIvaS50ZXN0KHIpLFxyXG4gICAgICAgICAgaW5jb21wbGV0ZURhdGVNZXNzYWdlOiAvd2hvbGUgZGF0ZS9pLnRlc3QociksXHJcbiAgICAgICAgICBpbnB1dHM6IEFycmF5LmZyb20odD8ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpIHx8IFtdKS5tYXAoZSA9PiAoe1xyXG4gICAgICAgICAgICBuYW1lOiBlLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlTGVuZ3RoOiBlLnZhbHVlLmxlbmd0aCxcclxuICAgICAgICAgICAgcmVhZE9ubHk6IGUucmVhZE9ubHksXHJcbiAgICAgICAgICAgIGludmFsaWQ6IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1pbnZhbGlkXCIpXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfSksICgwLCBhLnRyaWdnZXJFdmVudHMpKHIsIFtcImNsaWNrXCJdKSwgYXdhaXQgKDAsIGwud2FpdEZvckNvbmRpdGlvbikoKCkgPT4gIWUwKHQpLCB7XHJcbiAgICB0aW1lb3V0OiA1ZTMsXHJcbiAgICBpbnRlcnZhbDogMTAwLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgPyBkb2N1bWVudC5ib2R5IDogdm9pZCAwXHJcbiAgfSkpLCBpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZTEoKSB7XHJcbiAgbGV0IGUgPSAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgIFwiLy9kaXZbQHJvbGU9J3JlZ2lvbicgYW5kIGNvbnRhaW5zKEBhcmlhLWxhYmVsLCAnRWR1Y2F0aW9uJyldIHwgLi8vdGltZWxpbmUtZm9ybS1idWlsZGVyW0BjbGFzcz1cXFwidGltZWxpbmUtZm9ybS1kaWFsb2dfX2NvbnRlbnRcXFwiXSB8IC8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2FwcGx5LWZsb3ctYmxvY2stLXdvcmstYW5kLWVkdWNhdGlvbi10aW1lbGluZScpXVwiXHJcbiAgICApIHx8IG51bGw7XHJcbiAgaWYgKGUpIHtcclxuICAgIGxldCB0ID0gKDAsIGYuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICAgIFwiLi8vYnV0dG9uW2NvbnRhaW5zKEBjbGFzcywgJ2J1dHRvbiBhcHAtZGlhbG9nX19mb290ZXItYnV0dG9uIHNhdmUtYnRuJyldXCIsIGUpIHx8IG51bGw7XHJcbiAgICBpZiAodCkge1xyXG4gICAgICAoMCwgYS50cmlnZ2VyRXZlbnRzKSh0LCBbXCJjbGlja1wiXSk7XHJcbiAgICAgIGxldCByID0gKDAsIGYuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICAgICAgXCIuLy9idXR0b25bY29udGFpbnMoQGNsYXNzLCAnYnV0dG9uIGFwcC1kaWFsb2dfX2Zvb3Rlci1idXR0b24gY2FuY2VsLWJ0bicpXVwiLCBlKSB8fCBudWxsO1xyXG4gICAgICByZXR1cm4gYXdhaXQgZTIoZSwgdCwgcilcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuICExXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZTMoKSB7XHJcbiAgbGV0IGUgPSAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgIFwiLy9kaXZbQHJvbGU9J3JlZ2lvbicgYW5kIGNvbnRhaW5zKEBhcmlhLWxhYmVsLCAnRWR1Y2F0aW9uJyldIHwgLi8vdGltZWxpbmUtZm9ybS1idWlsZGVyW0BjbGFzcz1cXFwidGltZWxpbmUtZm9ybS1kaWFsb2dfX2NvbnRlbnRcXFwiXSB8IC8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2FwcGx5LWZsb3ctYmxvY2stLXdvcmstYW5kLWVkdWNhdGlvbi10aW1lbGluZScpXVwiXHJcbiAgICApIHx8IG51bGw7XHJcbiAgaWYgKGUpIHtcclxuICAgIGxldCB0ID0gKDAsIGYuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICAgICAgXCIuLy9idXR0b25bY29udGFpbnMoQGNsYXNzLCAnYnV0dG9uIGFwcC1kaWFsb2dfX2Zvb3Rlci1idXR0b24gY2FuY2VsLWJ0bicpXVwiLCBlKSB8fCBudWxsLFxyXG4gICAgICByID0gKDAsIGYuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICAgICAgXCIuLy9idXR0b25bY29udGFpbnMoQGNsYXNzLCAnYnV0dG9uIGFwcC1kaWFsb2dfX2Zvb3Rlci1idXR0b24gc2F2ZS1idG4nKV1cIiwgZSkgfHwgbnVsbDtcclxuICAgIHJldHVybiB0ID8gKCgwLCBhLnRyaWdnZXJFdmVudHMpKHQsIFtcImNsaWNrXCJdKSwgYXdhaXQgKDAsIGwud2FpdEZvckNvbmRpdGlvbikoKCkgPT4gIWUwKHQpICYmXHJcbiAgICAgICghciB8fCAhZTAocikpLCB7XHJcbiAgICAgICAgdGltZW91dDogNWUzLFxyXG4gICAgICAgIGludGVydmFsOiAxMDAsXHJcbiAgICAgICAgb2JzZXJ2ZVRhcmdldDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgPyBkb2N1bWVudC5ib2R5IDogdm9pZCAwXHJcbiAgICAgIH0pKSA6ICFyIHx8ICFlMChyKVxyXG4gIH1cclxuICByZXR1cm4gITBcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlNCgpIHtcclxuICBsZXQgZSA9ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgXCIvL2RpdltAcm9sZT0ncmVnaW9uJyBhbmQgKGNvbnRhaW5zKEBhcmlhLWxhYmVsLCAnRXhwZXJpZW5jZScpIG9yIGNvbnRhaW5zKEBhcmlhLWxhYmVsLCAnRW1wbG95bWVudCcpKV0gfCAuLy90aW1lbGluZS1mb3JtLWJ1aWxkZXJbQGNsYXNzPVxcXCJ0aW1lbGluZS1mb3JtLWRpYWxvZ19fY29udGVudFxcXCJdIHwgLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnYXBwbHktZmxvdy1ibG9jay0td29yay1hbmQtZWR1Y2F0aW9uLXRpbWVsaW5lJyldXCJcclxuICAgICkgfHwgbnVsbDtcclxuICBpZiAoZSkge1xyXG4gICAgbGV0IHQgPSAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICAgXCIuLy9idXR0b25bY29udGFpbnMoQGNsYXNzLCAnYnV0dG9uIGFwcC1kaWFsb2dfX2Zvb3Rlci1idXR0b24gc2F2ZS1idG4nKV1cIiwgZSkgfHwgbnVsbDtcclxuICAgIGlmICh0KSB7XHJcbiAgICAgICgwLCBhLnRyaWdnZXJFdmVudHMpKHQsIFtcImNsaWNrXCJdKTtcclxuICAgICAgbGV0IHIgPSAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICAgICBcIi4vL2J1dHRvbltjb250YWlucyhAY2xhc3MsICdidXR0b24gYXBwLWRpYWxvZ19fZm9vdGVyLWJ1dHRvbiBjYW5jZWwtYnRuJyldXCIsIGUpIHx8IG51bGw7XHJcbiAgICAgIHJldHVybiBhd2FpdCBlMihlLCB0LCByKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gITFcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlNSgpIHtcclxuICBsZXQgZSA9ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgXCIvL2RpdltAcm9sZT0ncmVnaW9uJyBhbmQgKGNvbnRhaW5zKEBhcmlhLWxhYmVsLCAnRXhwZXJpZW5jZScpIG9yIGNvbnRhaW5zKEBhcmlhLWxhYmVsLCAnRW1wbG95bWVudCcpKV0gfCAuLy90aW1lbGluZS1mb3JtLWJ1aWxkZXJbQGNsYXNzPVxcXCJ0aW1lbGluZS1mb3JtLWRpYWxvZ19fY29udGVudFxcXCJdIHwgLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnYXBwbHktZmxvdy1ibG9jay0td29yay1hbmQtZWR1Y2F0aW9uLXRpbWVsaW5lJyldXCJcclxuICAgICkgfHwgbnVsbDtcclxuICBpZiAoZSkge1xyXG4gICAgbGV0IHQgPSAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICAgXCIuLy9idXR0b25bY29udGFpbnMoQGNsYXNzLCAnYnV0dG9uIGFwcC1kaWFsb2dfX2Zvb3Rlci1idXR0b24gY2FuY2VsLWJ0bicpXVwiLCBlKSB8fCBudWxsO1xyXG4gICAgdCAmJiB0LmNsaWNrKClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGU2KGUpIHtcclxuICBsZXQgdCA9IFwiZWR1Y2F0aW9uXCIgPT09IGUgPyBcInRpbWVsaW5lLWVkdWNhdGlvbi1hZGQtYnV0dG9uXCIgOiBcInRpbWVsaW5lLXdvcmstYWRkLWJ1dHRvblwiLFxyXG4gICAgciA9IGB0aW1lbGluZS1hZGQtJHtlfS1idXR0b25gO1xyXG4gIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBkb2N1bWVudCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IG4gPSAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShcImVkdWNhdGlvblwiID09PSBlID9cclxuICAgICAgXCIvL2RpdltAcm9sZT0ncmVnaW9uJyBhbmQgY29udGFpbnMoQGFyaWEtbGFiZWwsICdFZHVjYXRpb24nKV0gfCAuLy90aW1lbGluZS1mb3JtLWJ1aWxkZXJbQGNsYXNzPVxcXCJ0aW1lbGluZS1mb3JtLWRpYWxvZ19fY29udGVudFxcXCJdIHwgLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnYXBwbHktZmxvdy1ibG9jay0td29yay1hbmQtZWR1Y2F0aW9uLXRpbWVsaW5lJyldXCIgOlxyXG4gICAgICBcIi8vZGl2W0Byb2xlPSdyZWdpb24nIGFuZCAoY29udGFpbnMoQGFyaWEtbGFiZWwsICdFeHBlcmllbmNlJykgb3IgY29udGFpbnMoQGFyaWEtbGFiZWwsICdFbXBsb3ltZW50JykpXSB8IC4vL3RpbWVsaW5lLWZvcm0tYnVpbGRlcltAY2xhc3M9XFxcInRpbWVsaW5lLWZvcm0tZGlhbG9nX19jb250ZW50XFxcIl0gfCAvL2Rpdltjb250YWlucyhAY2xhc3MsICdhcHBseS1mbG93LWJsb2NrLS13b3JrLWFuZC1lZHVjYXRpb24tdGltZWxpbmUnKV1cIlxyXG4gICAgICApLFxyXG4gICAgbyA9IG4gPyAoMCwgZi5nZXRPcmRlcmVkTm9kZXMpKFwiLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ3Byb2ZpbGUtYWRkLWl0ZW0nKV0vYnV0dG9uXCIsIG4pIDogW10sXHJcbiAgICBpID0gby5maW5kKGUgPT4gdHQoZSkpO1xyXG4gIGlmIChpKSByZXR1cm4gaTtcclxuICBsZXQgYSA9ICgwLCBmLmdldE9yZGVyZWROb2RlcykoYC8vYnV0dG9uW1xyXG4gICAgICBjb250YWlucyhAY2xhc3MsICcke3R9JylcclxuICAgICAgb3IgY29udGFpbnMoQGlkLCAnJHtyfScpXHJcbiAgICBdYCwgZG9jdW1lbnQpO1xyXG4gIHJldHVybiBhLmZpbmQoZSA9PiB0dChlKSkgfHwgbnVsbFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGU4KCkge1xyXG4gIGxldCBlID0gZTYoXCJlZHVjYXRpb25cIik7XHJcbiAgZSAmJiAoZS5jbGljaygpLCBhd2FpdCAoMCwgbS5kZWxheSkoMTAwKSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlOSgpIHtcclxuICBsZXQgZSA9IGU2KFwiZXhwZXJpZW5jZVwiKTtcclxuICBlICYmIChlLmNsaWNrKCksIGF3YWl0ICgwLCBtLmRlbGF5KSgxMDApKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlNyhlKSB7XHJcbiAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgPyBlLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZShlKSB7XHJcbiAgbGV0IHQgPSBBcnJheS5pc0FycmF5KGUpID8gZSA6IGUgPyBbZV0gOiBbXSxcclxuICAgIHIgPSBbXTtcclxuICBmb3IgKGxldCBlIG9mIHQpIHtcclxuICAgIGxldCB0ID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IGUuc3BsaXQoL1ssO1xcbl0rLykgOiBbYCR7ZT8/XCJcIn1gXTtcclxuICAgIGZvciAobGV0IGUgb2YgdCkge1xyXG4gICAgICBsZXQgdCA9IGUucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpO1xyXG4gICAgICB0ICYmICFyLmluY2x1ZGVzKHQpICYmIHIucHVzaCh0KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gclxyXG59XHJcblxyXG5mdW5jdGlvbiB0dChlKSB7XHJcbiAgaWYgKCFlIHx8IFwiaXNDb25uZWN0ZWRcIiBpbiBlICYmICExID09PSBlLmlzQ29ubmVjdGVkKSByZXR1cm4gITE7XHJcbiAgbGV0IHQgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID8gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XHJcbiAgaWYgKHQgJiYgKHQud2lkdGggPD0gMCB8fCB0LmhlaWdodCA8PSAwKSkgcmV0dXJuICExO1xyXG4gIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xyXG4gICAgbGV0IHQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKTtcclxuICAgIGlmIChcIm5vbmVcIiA9PT0gdC5kaXNwbGF5IHx8IFwiaGlkZGVuXCIgPT09IHQudmlzaWJpbGl0eSB8fCBcIjBcIiA9PT0gdC5vcGFjaXR5KSByZXR1cm4gITFcclxuICB9XHJcbiAgcmV0dXJuICEwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyKGUpIHtcclxuICBsZXQgdCA9IFwiTGFuZ3VhZ2VzXCIgPT09IGUgPyBbXCJMYW5ndWFnZXNcIiwgXCJMYW5ndWFnZSBTa2lsbHNcIiwgXCJMYW5ndWFnZVwiXSA6IFtlXSxcclxuICAgIHIgPSB0Lm1hcChlID0+IHtcclxuICAgICAgbGV0IHQgPSBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICBub3JtYWxpemUtc3BhY2UoKT0nJHtlfSdcclxuICAgICAgICAgIG9yIHRyYW5zbGF0ZShub3JtYWxpemUtc3BhY2UoKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6Jyk9JyR7dH0nXHJcbiAgICAgICAgYFxyXG4gICAgfSkuam9pbihcIiBvciBcIik7XHJcbiAgcmV0dXJuICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKGAvL2FwcGx5LWZsb3ctYmxvY2tbXHJcbiAgICAgICAgLi8vKltjb250YWlucyhAY2xhc3MsICdhcHBseS1mbG93LWJsb2NrX19oZWFkZXInKV0vLypbXHJcbiAgICAgICAgICAke3J9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIG9yIC4vL2FwcGx5LWZsb3ctYmxvY2stdGl0bGUvLypbXHJcbiAgICAgICAgICAke3J9XHJcbiAgICAgICAgXVxyXG4gICAgICBdYCkgfHwgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiB0bigpIHtcclxuICByZXR1cm4gdHIoXCJTa2lsbHNcIilcclxufVxyXG5cclxuZnVuY3Rpb24gdG8oKSB7XHJcbiAgcmV0dXJuIHRyKFwiTGFuZ3VhZ2VzXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpKGUpIHtcclxuICBsZXQgdCA9IGUuY2xvc2VzdD8uKFwiLmlucHV0LXJvdywgLmlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcclxuICByZXR1cm4gZTcodD8udGV4dENvbnRlbnQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhKGUpIHtcclxuICBsZXQgdCA9IHRpKGUpLFxyXG4gICAgciA9IGU3KGUuZ2V0QXR0cmlidXRlPy4oXCJuYW1lXCIpIHx8IGUuaWQpO1xyXG4gIHJldHVybiB0LmluY2x1ZGVzKFwieWVhcnMgb2YgZXhwZXJpZW5jZVwiKSB8fCByLmluY2x1ZGVzKFwieWVhcnNvZmV4cGVyaWVuY2VcIilcclxufVxyXG5cclxuZnVuY3Rpb24gdGwoZSkge1xyXG4gIGlmICh0YShlKSkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gdGkoZSksXHJcbiAgICByID0gZTcoZS5nZXRBdHRyaWJ1dGU/LihcIm5hbWVcIikgfHwgZS5pZCk7XHJcbiAgcmV0dXJuIHQuaW5jbHVkZXMoXCJza2lsbFwiKSB8fCByLmluY2x1ZGVzKFwic2tpbGxcIilcclxufVxyXG5cclxuZnVuY3Rpb24gdHMoZSkge1xyXG4gIGxldCB0ID0gKDAsIGYuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoYC4vL2J1dHRvbltcclxuICAgICAgICBjb250YWlucyhAY2xhc3MsICdhcHBseS1mbG93LXByb2ZpbGUtaXRlbS10aWxlX19uZXctdGlsZScpXHJcbiAgICAgICAgYW5kIGNvbnRhaW5zKFxyXG4gICAgICAgICAgdHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZSgpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSxcclxuICAgICAgICAgICdhZGQnXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGFuZCBjb250YWlucyhcclxuICAgICAgICAgIHRyYW5zbGF0ZShub3JtYWxpemUtc3BhY2UoKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyksXHJcbiAgICAgICAgICAnc2tpbGwnXHJcbiAgICAgICAgKVxyXG4gICAgICBdYCwgZSkgfHwgbnVsbDtcclxuICByZXR1cm4gdCAmJiB0dCh0KSA/IHQgOiAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShgLi8vYnV0dG9uW1xyXG4gICAgICAgIG5vdChhbmNlc3Rvcjo6Zm9ybSlcclxuICAgICAgICBhbmQgbm90KGFuY2VzdG9yOjoqW0Byb2xlPSdkaWFsb2cnXSlcclxuICAgICAgICBhbmQgbm90KGFuY2VzdG9yOjoqW2NvbnRhaW5zKEBjbGFzcywgJ2FwcC1kaWFsb2cnKV0pXHJcbiAgICAgICAgYW5kIG5vdChhbmNlc3Rvcjo6Kltjb250YWlucyhAY2xhc3MsICd0aW1lbGluZS1mb3JtLWRpYWxvZycpXSlcclxuICAgICAgICBhbmQgY29udGFpbnMoXHJcbiAgICAgICAgICB0cmFuc2xhdGUobm9ybWFsaXplLXNwYWNlKCksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpLFxyXG4gICAgICAgICAgJ2FkZCdcclxuICAgICAgICApXHJcbiAgICAgICAgYW5kIGNvbnRhaW5zKFxyXG4gICAgICAgICAgdHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZSgpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSxcclxuICAgICAgICAgICdza2lsbCdcclxuICAgICAgICApXHJcbiAgICAgIF1gLCBlKSB8fCBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHR1KGUpIHtcclxuICBsZXQgdCA9ICgwLCBmLmdldE9yZGVyZWROb2RlcykoYC8vZGl2W1xyXG4gICAgICAgIEByb2xlPSdkaWFsb2cnXHJcbiAgICAgICAgb3IgY29udGFpbnMoQGNsYXNzLCAnYXBwLWRpYWxvZycpXHJcbiAgICAgICAgb3IgY29udGFpbnMoQGNsYXNzLCAndGltZWxpbmUtZm9ybS1kaWFsb2cnKVxyXG4gICAgICBdWy4vLypbY29udGFpbnModHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZSgpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSwgJ3NraWxsJyldXVxyXG4gICAgICAgIC8vaW5wdXRbbm90KEB0eXBlPSdoaWRkZW4nKSBhbmQgbm90KEB0eXBlPSdmaWxlJyldXHJcbiAgICAgIHwgLi8vaW5wdXRbbm90KEB0eXBlPSdoaWRkZW4nKSBhbmQgbm90KEB0eXBlPSdmaWxlJyldYCwgZSk7XHJcbiAgcmV0dXJuIHQuZmluZChlID0+IHR0KGUpICYmIHRsKGUpKSA/PyB0LmZpbmQoZSA9PiB0dChlKSAmJiAhdGEoZSkpID8/IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gdGMoZSwgdCkge1xyXG4gIGxldCByID0gZS5jbG9zZXN0Py4oXCJmb3JtXCIpIHx8IGUuY2xvc2VzdD8uKFxyXG4gICAgXCJbcm9sZT0nZGlhbG9nJ10sIC5hcHAtZGlhbG9nLCAudGltZWxpbmUtZm9ybS1kaWFsb2dcIikgfHwgdDtcclxuICByZXR1cm4gKDAsIGYuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoYC4vL2J1dHRvbltcclxuICAgICAgICBub3QoY29udGFpbnMoQGNsYXNzLCAnYXBwbHktZmxvdy1wcm9maWxlLWl0ZW0tdGlsZV9fbmV3LXRpbGUnKSlcclxuICAgICAgICBhbmQgKFxyXG4gICAgICAgICAgY29udGFpbnMobm9ybWFsaXplLXNwYWNlKCksICdBREQgU0tJTEwnKVxyXG4gICAgICAgICAgb3IgY29udGFpbnMobm9ybWFsaXplLXNwYWNlKCksICdTQVZFJylcclxuICAgICAgICAgIG9yIGNvbnRhaW5zKG5vcm1hbGl6ZS1zcGFjZSgpLCAnQWRkIFNraWxsJylcclxuICAgICAgICAgIG9yIGNvbnRhaW5zKG5vcm1hbGl6ZS1zcGFjZSgpLCAnU2F2ZScpXHJcbiAgICAgICAgKVxyXG4gICAgICBdYCwgcikgfHwgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZChlKSB7XHJcbiAgaWYgKGUuc2Nyb2xsSW50b1ZpZXc/Lih7XHJcbiAgICAgIGJsb2NrOiBcImNlbnRlclwiLFxyXG4gICAgICBpbmxpbmU6IFwiY2VudGVyXCJcclxuICAgIH0pLCBlLmZvY3VzPy4oKSwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmNsaWNrKSB7XHJcbiAgICBlLmNsaWNrKCk7XHJcbiAgICByZXR1cm5cclxuICB9KDAsIGEudHJpZ2dlckV2ZW50cykoZSwgW1wiY2xpY2tcIl0pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdGYoZSwgdCwgcikge1xyXG4gIGxldCBuID0gZTcocik7XHJcbiAgcmV0dXJuIGF3YWl0ICgwLCBsLndhaXRGb3JDb25kaXRpb24pKCgpID0+IHtcclxuICAgIGxldCB0ID0gZTcoZS50ZXh0Q29udGVudCk7XHJcbiAgICByZXR1cm4gISFuICYmIHQuaW5jbHVkZXMobilcclxuICB9LCB7XHJcbiAgICB0aW1lb3V0OiA2ZTMsXHJcbiAgICBpbnRlcnZhbDogMjAwLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogZVxyXG4gIH0pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdHAoZSwgdCkge1xyXG4gIGxldCByID0gdHMoZSk7XHJcbiAgciAmJiAodGQociksIGF3YWl0ICgwLCBtLmRlbGF5KSg0MDApKTtcclxuICBsZXQgbiA9IHR1KGUpO1xyXG4gIGlmICghbikgcmV0dXJuICExO1xyXG4gIG4uZm9jdXM/LigpLCBuLmNsaWNrPy4oKSwgZWwobiwgdCksIG4uZGlzcGF0Y2hFdmVudChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIElucHV0RXZlbnQgP1xyXG4gICAgbmV3IElucHV0RXZlbnQoXCJpbnB1dFwiLCB7XHJcbiAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgICAgZGF0YTogdCxcclxuICAgICAgaW5wdXRUeXBlOiBcImluc2VydFRleHRcIlxyXG4gICAgfSkgOiBuZXcgRXZlbnQoXCJpbnB1dFwiLCB7XHJcbiAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICBjYW5jZWxhYmxlOiAhMFxyXG4gICAgfSkpLCBuLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwXHJcbiAgfSkpLCBhd2FpdCAoMCwgbS5kZWxheSkoMTAwKTtcclxuICBsZXQgbyA9IHRjKG4sIGUpO1xyXG4gIHJldHVybiAhIW8gJiYgKHRkKG8pLCBhd2FpdCB0ZihlLCBuLCB0KSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0bShlKSB7XHJcbiAgbGV0IHQgPSB0ZShlKS5zbGljZSgwLCAxMCk7XHJcbiAgaWYgKDAgPT09IHQubGVuZ3RoKSByZXR1cm4gITE7XHJcbiAgbGV0IHIgPSB0bigpO1xyXG4gIGlmICghcikgcmV0dXJuICExO1xyXG4gIGxldCBuID0gMDtcclxuICBmb3IgKGxldCBlIG9mIHQpIHtcclxuICAgIGlmIChhd2FpdCB0cChyLCBlKSkge1xyXG4gICAgICBuICs9IDEsIGF3YWl0ICgwLCBtLmRlbGF5KSgyMDApO1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG4gICAgYnJlYWtcclxuICB9XHJcbiAgcmV0dXJuIG4gPiAwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRoKGUpIHtcclxuICBsZXQgdCA9IEFycmF5LmlzQXJyYXkoZSkgPyBlIDogZSA/IFtlXSA6IFtdLFxyXG4gICAgciA9IFtdO1xyXG4gIGZvciAobGV0IGUgb2YgdCkge1xyXG4gICAgbGV0IHQgPSBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gZS5zcGxpdCgvWyw7XFxuXSsvKSA6IFtgJHtlPz9cIlwifWBdO1xyXG4gICAgZm9yIChsZXQgZSBvZiB0KSB7XHJcbiAgICAgIGxldCB0ID0gZS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCk7XHJcbiAgICAgIHQgJiYgIXIuaW5jbHVkZXModCkgJiYgci5wdXNoKHQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRnKGUpIHtcclxuICBsZXQgdCA9IGU3KGUuZ2V0QXR0cmlidXRlPy4oXCJuYW1lXCIpIHx8IGUuaWQpLFxyXG4gICAgciA9IHRpKGUpO1xyXG4gIHJldHVybiB0LmluY2x1ZGVzKFwiY29udGVudGl0ZW1pZFwiKSB8fCB0LmluY2x1ZGVzKFwibGFuZ3VhZ2VcIikgfHwgci5pbmNsdWRlcyhcImxhbmd1YWdlXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRiKGUpIHtcclxuICBsZXQgdCA9ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgXCIuLy9idXR0b25bY29udGFpbnMoQGNsYXNzLCAnYXBwbHktZmxvdy1wcm9maWxlLWl0ZW0tdGlsZV9fbmV3LXRpbGUnKSBhbmQgY29udGFpbnModHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZSgpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSwgJ2FkZCBsYW5ndWFnZScpXVwiLFxyXG4gICAgZSkgfHwgbnVsbDtcclxuICByZXR1cm4gdCAmJiB0dCh0KSA/IHQgOiAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShgLi8vYnV0dG9uW1xyXG4gICAgICAgIG5vdChhbmNlc3Rvcjo6Zm9ybSlcclxuICAgICAgICBhbmQgbm90KGFuY2VzdG9yOjoqW0Byb2xlPSdkaWFsb2cnXSlcclxuICAgICAgICBhbmQgbm90KGFuY2VzdG9yOjoqW2NvbnRhaW5zKEBjbGFzcywgJ2FwcC1kaWFsb2cnKV0pXHJcbiAgICAgICAgYW5kIG5vdChhbmNlc3Rvcjo6Kltjb250YWlucyhAY2xhc3MsICd0aW1lbGluZS1mb3JtLWRpYWxvZycpXSlcclxuICAgICAgICBhbmQgbm90KGNvbnRhaW5zKEBjbGFzcywgJ2FwcC1kaWFsb2dfX2Zvb3Rlci1idXR0b24nKSlcclxuICAgICAgICBhbmQgbm90KGNvbnRhaW5zKEBjbGFzcywgJ3NhdmUtYnRuJykpXHJcbiAgICAgICAgYW5kIG5vdChjb250YWlucyhAY2xhc3MsICdjYW5jZWwtYnRuJykpXHJcbiAgICAgICAgYW5kIGNvbnRhaW5zKFxyXG4gICAgICAgICAgdHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZSgpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSxcclxuICAgICAgICAgICdhZGQgbGFuZ3VhZ2UnXHJcbiAgICAgICAgKVxyXG4gICAgICBdYCwgZSkgfHwgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiB0eShlKSB7XHJcbiAgbGV0IHQgPSAoMCwgZi5nZXRPcmRlcmVkTm9kZXMpKGAvL2RpdltcclxuICAgICAgICBAcm9sZT0nZGlhbG9nJ1xyXG4gICAgICAgIG9yIGNvbnRhaW5zKEBjbGFzcywgJ2FwcC1kaWFsb2cnKVxyXG4gICAgICAgIG9yIGNvbnRhaW5zKEBjbGFzcywgJ3RpbWVsaW5lLWZvcm0tZGlhbG9nJylcclxuICAgICAgXVsuLy8qW2NvbnRhaW5zKHRyYW5zbGF0ZShub3JtYWxpemUtc3BhY2UoKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyksICdsYW5ndWFnZScpXV1cclxuICAgICAgICAvL2lucHV0W25vdChAdHlwZT0naGlkZGVuJykgYW5kIG5vdChAdHlwZT0nZmlsZScpXVxyXG4gICAgICB8IC4vL2lucHV0W25vdChAdHlwZT0naGlkZGVuJykgYW5kIG5vdChAdHlwZT0nZmlsZScpXWAsIGUpO1xyXG4gIHJldHVybiB0LmZpbmQoZSA9PiB0dChlKSAmJiB0ZyhlKSkgPz8gdC5maW5kKGUgPT4gdHQoZSkpID8/IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gdHYoZSwgdCkge1xyXG4gIGxldCByID0gZS5jbG9zZXN0Py4oXCJmb3JtXCIpIHx8IGUuY2xvc2VzdD8uKFxyXG4gICAgXCJbcm9sZT0nZGlhbG9nJ10sIC5hcHAtZGlhbG9nLCAudGltZWxpbmUtZm9ybS1kaWFsb2dcIikgfHwgdDtcclxuICByZXR1cm4gKDAsIGYuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoYC4vL2J1dHRvbltcclxuICAgICAgICBub3QoY29udGFpbnMoQGNsYXNzLCAnYXBwbHktZmxvdy1wcm9maWxlLWl0ZW0tdGlsZV9fbmV3LXRpbGUnKSlcclxuICAgICAgICBhbmQgKFxyXG4gICAgICAgICAgY29udGFpbnMoQGNsYXNzLCAnc2F2ZS1idG4nKVxyXG4gICAgICAgICAgb3IgY29udGFpbnMobm9ybWFsaXplLXNwYWNlKCksICdBREQgTEFOR1VBR0UnKVxyXG4gICAgICAgICAgb3IgY29udGFpbnMobm9ybWFsaXplLXNwYWNlKCksICdBZGQgTGFuZ3VhZ2UnKVxyXG4gICAgICAgICAgb3IgY29udGFpbnMobm9ybWFsaXplLXNwYWNlKCksICdTQVZFJylcclxuICAgICAgICAgIG9yIGNvbnRhaW5zKG5vcm1hbGl6ZS1zcGFjZSgpLCAnU2F2ZScpXHJcbiAgICAgICAgKVxyXG4gICAgICBdYCwgcikgfHwgbnVsbFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHR3KGUsIHQsIHIpIHtcclxuICBsZXQgbiA9IGU3KHIpO1xyXG4gIHJldHVybiBhd2FpdCAoMCwgbC53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiB7XHJcbiAgICBsZXQgdCA9IGU3KGUudGV4dENvbnRlbnQpO1xyXG4gICAgcmV0dXJuICEhbiAmJiB0LmluY2x1ZGVzKG4pXHJcbiAgfSwge1xyXG4gICAgdGltZW91dDogNmUzLFxyXG4gICAgaW50ZXJ2YWw6IDIwMCxcclxuICAgIG9ic2VydmVUYXJnZXQ6IGVcclxuICB9KVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHRTKGUsIHQpIHtcclxuICBsZXQgciA9IHR5KGUpO1xyXG4gIGlmICghcikge1xyXG4gICAgbGV0IHQgPSB0YihlKTtcclxuICAgIGlmICghdCkgcmV0dXJuICExO1xyXG4gICAgKDAsIGEudHJpZ2dlckV2ZW50cykodCwgW1wiY2xpY2tcIl0pLCBhd2FpdCAoMCwgbS5kZWxheSkoNDAwKSwgciA9IHR5KGUpXHJcbiAgfVxyXG4gIGlmICghcikgcmV0dXJuICExO1xyXG4gIGxldCBuID0gYXdhaXQgZXQociwgdCk7XHJcbiAgbiB8fCAoci5mb2N1cz8uKCksIHIuY2xpY2s/LigpLCBlbChyLCB0KSwgci5kaXNwYXRjaEV2ZW50KFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgSW5wdXRFdmVudCA/XHJcbiAgICBuZXcgSW5wdXRFdmVudChcImlucHV0XCIsIHtcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICEwLFxyXG4gICAgICBkYXRhOiB0LFxyXG4gICAgICBpbnB1dFR5cGU6IFwiaW5zZXJ0VGV4dFwiXHJcbiAgICB9KSA6IG5ldyBFdmVudChcImlucHV0XCIsIHtcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgICB9KSksIHIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG4gICAgYnViYmxlczogITBcclxuICB9KSksIGF3YWl0ICgwLCBtLmRlbGF5KSgxMDApKTtcclxuICBsZXQgbyA9IHR2KHIsIGUpO1xyXG4gIHJldHVybiAhIW8gJiYgKCgwLCBhLnRyaWdnZXJFdmVudHMpKG8sIFtcImNsaWNrXCJdKSwgYXdhaXQgdHcoZSwgciwgdCkpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdEUoZSkge1xyXG4gIGxldCB0ID0gdGgoZSkuc2xpY2UoMCwgMTApO1xyXG4gIGlmICgwID09PSB0Lmxlbmd0aCkgcmV0dXJuICExO1xyXG4gIGxldCByID0gdG8oKTtcclxuICBpZiAoIXIpIHJldHVybiAhMTtcclxuICBsZXQgbiA9IDA7XHJcbiAgZm9yIChsZXQgZSBvZiB0KSBhd2FpdCB0UyhyLCBlKSAmJiAobiArPSAxLCBhd2FpdCAoMCwgbS5kZWxheSkoMjAwKSk7XHJcbiAgcmV0dXJuIG4gPiAwXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdHgoZSwgdCwgcikge1xyXG4gIHJldHVybiB0RChcInJlc3VtZVwiKSA/IGF3YWl0IHRSKFwicmVzdW1lXCIsIGF3YWl0ICgwLCBpLmZldGNoUGRmQXNCbG9iKShlKSwgdCwgcikgOiAoY29uc29sZS53YXJuKFxyXG4gICAgXCJbb3JhY2xlY2xvdWRdW3Jlc3VtZV0gdmlzaWJsZSBhdHRhY2htZW50IHNsb3QgdW5hdmFpbGFibGVcIiksICExKVxyXG59XHJcbmxldCB0QyA9IHtcclxuICByZXN1bWU6IHtcclxuICAgIHJvb3RTZWxlY3RvcjogXCJyZXN1bWUtdXBsb2FkLWJ1dHRvblwiLFxyXG4gICAgZmllbGRMYWJlbDogXCJSZXN1bWUvQ1ZcIixcclxuICAgIGxvZ0tleTogXCJyZXN1bWVcIlxyXG4gIH0sXHJcbiAgY292ZXJMZXR0ZXI6IHtcclxuICAgIHJvb3RTZWxlY3RvcjogXCJjb3Zlci1sZXR0ZXItdXBsb2FkLWJ1dHRvblwiLFxyXG4gICAgZmllbGRMYWJlbDogXCJDb3ZlciBMZXR0ZXJcIixcclxuICAgIGxvZ0tleTogXCJjb3Zlci1sZXR0ZXJcIlxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHRBKGUpIHtcclxuICBsZXQgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodENbZV0ucm9vdFNlbGVjdG9yKSxcclxuICAgIHIgPSB0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdHEodCkgPyB0IDogbnVsbDtcclxuICByZXR1cm4gclxyXG59XHJcblxyXG5mdW5jdGlvbiB0ayhlKSB7XHJcbiAgbGV0IHQgPSB0QShlKTtcclxuICBpZiAoIXQpIHJldHVybiBudWxsO1xyXG4gIGxldCByID0gdC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpIHx8ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgXCIuLy9pbnB1dFtAdHlwZT0nZmlsZSddXCIsIHQpO1xyXG4gIHJldHVybiByXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRUKGUpIHtcclxuICBsZXQgdCA9IHRBKGUpO1xyXG4gIGlmICghdCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IHIgPSB0LnF1ZXJ5U2VsZWN0b3IoXCIuYXR0YWNobWVudC11cGxvYWQtYnV0dG9uX19maWxsZWRcIikgfHwgKDAsIGYuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICAgIFwiLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywnYXR0YWNobWVudC11cGxvYWQtYnV0dG9uX19maWxsZWQnKV1cIiwgdCksXHJcbiAgICBuID0gdHEocikgPyByIDogbnVsbDtcclxuICByZXR1cm4gblxyXG59XHJcblxyXG5mdW5jdGlvbiB0RihlKSB7XHJcbiAgbGV0IHQgPSB0QShlKTtcclxuICBpZiAoIXQpIHJldHVybiBudWxsO1xyXG4gIGxldCByID0gdC5xdWVyeVNlbGVjdG9yKFwiLmF0dGFjaG1lbnQtdXBsb2FkLWJ1dHRvblwiKSB8fCAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgIFwiLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywnYXR0YWNobWVudC11cGxvYWQtYnV0dG9uJyldXCIsIHQpO1xyXG4gIHJldHVybiB0cShyKSA/IHIgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRJKGUpIHtcclxuICBsZXQgdCA9IHRBKGUpO1xyXG4gIGlmICghdCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IHIgPSB0LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5hdHRhY2htZW50LXVwbG9hZC1idXR0b25fX2xhYmVsLCAuZmlsZS1mb3JtLWVsZW1lbnRfX2xhYmVsLCAuYXR0YWNobWVudC11cGxvYWQtYnV0dG9uLW1vYmlsZV9fbGFiZWxcIlxyXG4gICAgKSB8fCAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShgLi8vbGFiZWxbXHJcbiAgICAgICAgICBjb250YWlucyhAY2xhc3MsJ2F0dGFjaG1lbnQtdXBsb2FkLWJ1dHRvbl9fbGFiZWwnKVxyXG4gICAgICAgICAgb3IgY29udGFpbnMoQGNsYXNzLCdmaWxlLWZvcm0tZWxlbWVudF9fbGFiZWwnKVxyXG4gICAgICAgICAgb3IgY29udGFpbnMoQGNsYXNzLCdhdHRhY2htZW50LXVwbG9hZC1idXR0b24tbW9iaWxlX19sYWJlbCcpXHJcbiAgICAgICAgXWAsIHQpO1xyXG4gIHJldHVybiB0cShyKSA/IHIgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRqKGUpIHtcclxuICBsZXQgdCA9IHRUKGUpO1xyXG4gIGlmICghdCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IHIgPSAoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShgLi8vYnV0dG9uW2NvbnRhaW5zKEBjbGFzcywnYXR0YWNobWVudC11cGxvYWQtYnV0dG9uX19ib3R0b20tYnV0dG9uJylcclxuICAgICAgICBhbmQgKG5vcm1hbGl6ZS1zcGFjZSgpPSdSZW1vdmUnIG9yIGNvbnRhaW5zKEBhcmlhLWxhYmVsLCdSZW1vdmUgYXR0YWNobWVudCcpKV1gLCB0KSB8fFxyXG4gIG51bGw7XHJcbiAgcmV0dXJuIHJcclxufVxyXG5cclxuZnVuY3Rpb24gdEQoZSkge1xyXG4gIGxldCB0ID0gdEYoZSk7XHJcbiAgcmV0dXJuICEhKHQgJiYgdGsoZSkpIHx8ICEhdFQoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gdFAoKSB7XHJcbiAgcmV0dXJuIHREKFwiY292ZXJMZXR0ZXJcIilcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0XygpIHtcclxuICBsZXQgZSA9ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKGAvL2RpdltAcm9sZT0nZGlhbG9nJyBvciBjb250YWlucyhAY2xhc3MsJ2FwcC1kaWFsb2cnKSBvciBjb250YWlucyhAY2xhc3MsJ29qLWRpYWxvZycpXVxyXG4gICAgICAgIC8vYnV0dG9uW1xyXG4gICAgICAgICAgbm9ybWFsaXplLXNwYWNlKCk9J0RlbGV0ZSdcclxuICAgICAgICAgIG9yIG5vcm1hbGl6ZS1zcGFjZSgpPSdERUxFVEUnXHJcbiAgICAgICAgICBvciBAZGF0YS1xYT0nY29uZmlybURlbGV0ZSdcclxuICAgICAgICAgIG9yIEBkYXRhLXFhPSdjb25maXJtRGVsZXRlQnV0dG9uJ1xyXG4gICAgICAgIF1gKSB8fCBudWxsO1xyXG4gIGUgJiYgKCgwLCBhLnRyaWdnZXJFdmVudHMpKGUsIFtcImNsaWNrXCIsIFwibW91c2Vkb3duXCIsIFwibW91c2V1cFwiXSksIGF3YWl0ICgwLCBtLmRlbGF5KSgyMDApKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHRMKGUpIHtcclxuICBsZXQgdCA9IHRUKGUpO1xyXG4gIGlmICghdCkgcmV0dXJuICEwO1xyXG4gIGxldCByID0gdGooZSk7XHJcbiAgaWYgKCFyKSByZXR1cm4gITE7XHJcbiAgKDAsIGEudHJpZ2dlckV2ZW50cykociwgW1wiY2xpY2tcIiwgXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCJdKSwgci5jbGljaz8uKCksIGF3YWl0ICgwLCBtLmRlbGF5KShcclxuICAgIDE1MCksIGF3YWl0IHRfKCk7XHJcbiAgbGV0IG4gPSBhd2FpdCAoMCwgbC53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiAhIXRJKGUpLCB7XHJcbiAgICB0aW1lb3V0OiAxZTQsXHJcbiAgICBpbnRlcnZhbDogMjAwLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gIH0pO1xyXG4gIHJldHVybiBuXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdFIoZSwgdCwgciwgbikge1xyXG4gIGxldCBvID0gYXdhaXQgdEwoZSk7XHJcbiAgaWYgKCFvKSByZXR1cm4gY29uc29sZS53YXJuKGBbb3JhY2xlY2xvdWRdWyR7dENbZV0ubG9nS2V5fV0gZGVsZXRlIGZhaWxlZCwgc2tpcCB1cGxvYWRgKSwgITE7XHJcbiAgYXdhaXQgKDAsIGwud2FpdEZvckNvbmRpdGlvbikoKCkgPT4gISF0SShlKSAmJiAhIXRrKGUpLCB7XHJcbiAgICB0aW1lb3V0OiA1ZTMsXHJcbiAgICBpbnRlcnZhbDogMTAwLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gIH0pO1xyXG4gIGxldCBpID0gdGsoZSk7XHJcbiAgaWYgKCFpPy5maWxlcykgcmV0dXJuIGNvbnNvbGUud2FybihcclxuICAgIGBbb3JhY2xlY2xvdWRdWyR7dENbZV0ubG9nS2V5fV0gaW5wdXQgdW5hdmFpbGFibGUgYWZ0ZXIgZGVsZXRlYCksICExO1xyXG4gIGkuZmlsZXMgPSB0LmZpbGVzLCBpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITFcclxuICB9KSk7XHJcbiAgbGV0IGEgPSBhd2FpdCAoMCwgbC53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiAhIXRUKGUpLCB7XHJcbiAgICB0aW1lb3V0OiAxZTQsXHJcbiAgICBpbnRlcnZhbDogMjAwLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gIH0pO1xyXG4gIHJldHVybiAhIWEgJiYgKHIoe1xyXG4gICAgbGFiZWw6IHRDW2VdLmZpZWxkTGFiZWwsXHJcbiAgICByZXF1aXJlZDogITBcclxuICB9KSwgbih0Q1tlXS5maWVsZExhYmVsKSwgITApXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdE8oZSwgdCwgcikge1xyXG4gIHJldHVybiB0RChcImNvdmVyTGV0dGVyXCIpID8gYXdhaXQgdFIoXCJjb3ZlckxldHRlclwiLCBhd2FpdCAoMCwgaS5mZXRjaENvdmVyTGV0dGVyUGRmQXNCbG9iKShlKSwgdCxcclxuICAgIHIpIDogKGNvbnNvbGUud2FybihcIltvcmFjbGVjbG91ZF1bY292ZXItbGV0dGVyXSB2aXNpYmxlIGF0dGFjaG1lbnQgc2xvdCB1bmF2YWlsYWJsZVwiKSwgITEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRNKCkge1xyXG4gIHJldHVybiB0ayhcImNvdmVyTGV0dGVyXCIpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdE4oZSwgdCwgciA9IHt9KSB7XHJcbiAgbGV0IG4gPSAoMCwgcy5yZXNvbHZlT3JhY2xlQ291bnRyeVZhbHVlKShlKTtcclxuICBpZiAoIW4pIHJldHVybiAhMTtcclxuICBsZXQgbyA9IHQgfHwgKDAsIGYuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy4vL2lucHV0W0BuYW1lPVwiY291bnRyeVwiIG9yIEBpZD1cImNvdW50cnktMTJcIl0nKTtcclxuICBpZiAoIW8gfHwgIXRxKG8pKSByZXR1cm4gITE7XHJcbiAgbGV0IGkgPSBvLnZhbHVlLFxyXG4gICAgYSA9IGVNKG8pLFxyXG4gICAgbCA9IHIucmVmcmVzaERlcGVuZGVudEFkZHJlc3MgJiYgISFlQShpKSAmJiBhO1xyXG4gIGlmICh5KFwiY291bnRyeTpkZXBlbmRlbnQtcmVzZXQ6ZGVjaXNpb25cIiwge1xyXG4gICAgICByZWZyZXNoUmVxdWVzdGVkOiAhIXIucmVmcmVzaERlcGVuZGVudEFkZHJlc3MsXHJcbiAgICAgIGhhc0V4aXN0aW5nQ291bnRyeTogISFlQShpKSxcclxuICAgICAgaGFzRGVwZW5kZW50RHJvcGRvd25IaW50OiBhLFxyXG4gICAgICB3aWxsUmVmcmVzaDogbFxyXG4gICAgfSksIGwpIHtcclxuICAgIGxldCBlID0gYXdhaXQgZSQobyk7XHJcbiAgICBpZiAoIWUpIHJldHVybiAhMTtcclxuICAgIGlmICghdCkge1xyXG4gICAgICBsZXQgZSA9ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKCcuLy9pbnB1dFtAbmFtZT1cImNvdW50cnlcIiBvciBAaWQ9XCJjb3VudHJ5LTEyXCJdJyk7XHJcbiAgICAgIGlmICghZSB8fCAhdHEoZSkpIHJldHVybiB5KFwiY291bnRyeTpkZXBlbmRlbnQtcmVzZXQ6Y291bnRyeS1pbnB1dC1taXNzaW5nXCIpLCAhMTtcclxuICAgICAgbyA9IGVcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHUgPSBhd2FpdCBldChvLCBuLCBcImNvdW50cnlcIik7XHJcbiAgcmV0dXJuICEhdSB8fCAobCA/IHkoXCJjb3VudHJ5OmRlcGVuZGVudC1yZXNldDpzZWxlY3Rpb24tZmFpbGVkXCIpIDogYXdhaXQgdCQobywgaSksICExKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHQkKGUsIHQpIHtcclxuICBsZXQgciA9IHQudHJpbSgpO1xyXG4gIGlmIChyKSB7XHJcbiAgICBpZiAoYXdhaXQgZXUoZSksIGVCKGUsIHIsIFwiY291bnRyeVwiKSkgcmV0dXJuICEwO1xyXG4gICAgbGV0IG4gPSBhd2FpdCBldChlLCByLCBcImNvdW50cnlcIik7XHJcbiAgICBpZiAobikgcmV0dXJuICEwO1xyXG4gICAgbGV0IG8gPSBhd2FpdCB0QihlLCB0KTtcclxuICAgIHJldHVybiBjb25zb2xlLndhcm4oXHJcbiAgICAgIFwiW29yYWNsZWNsb3VkXVtjb3VudHJ5XSBmYWlsZWQgdG8gdmVyaWZ5IHNlbWFudGljIHJlc3RvcmU7IHByZXNlcnZlZCB0aGUgb3JpZ2luYWwgdmFsdWUgY29uc2VydmF0aXZlbHlcIlxyXG4gICAgICApLCBvXHJcbiAgfVxyXG4gIGVuKGUsIFwiXCIpLCBhd2FpdCBldShlKTtcclxuICBsZXQgbiA9IFwiXCIgPT09IGVBKGUudmFsdWUpO1xyXG4gIHJldHVybiAhciAmJiAhIW4gfHwgKGNvbnNvbGUud2FybihcIltvcmFjbGVjbG91ZF1bY291bnRyeV0gZmFpbGVkIHRvIGNsZWFyIHRoZSBmYWlsZWQgcXVlcnlcIiksIG4pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdEIoZSwgdCkge1xyXG4gIHJldHVybiBlbihlLCB0KSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7XHJcbiAgICBidWJibGVzOiAhMFxyXG4gIH0pKSwgZS5kaXNwYXRjaEV2ZW50KGVzKFwia2V5ZG93blwiLCBcIkVzY2FwZVwiKSksIGUuZGlzcGF0Y2hFdmVudChlcyhcImtleXVwXCIsIFwiRXNjYXBlXCIpKSwgZVxyXG4gIC5ibHVyKCksIGF3YWl0ICgwLCBtLmRlbGF5KSg1MCksIGVBKGUudmFsdWUpID09PSBlQSh0KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0cShlKSB7XHJcbiAgaWYgKCFlKSByZXR1cm4gITE7XHJcbiAgbGV0IHQgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuY2hlY2tWaXNpYmlsaXR5O1xyXG4gIHJldHVybiB0ID8gZS5jaGVja1Zpc2liaWxpdHkoKSA/PyAhMSA6ICEhZS5vZmZzZXRQYXJlbnRcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0VSgpIHtcclxuICBsZXQgZSA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gIGlmICgoMCwgdS5pc09yYWNsZUFwcGx5UGF0aCkoZS5wYXRobmFtZSkpIHJldHVybiAhMDtcclxuICBpZiAoISgwLCB1LmlzT3JhY2xlSm9iRGV0YWlsUGF0aCkoZS5wYXRobmFtZSkpIHJldHVybiAhMTtcclxuICBsZXQgdCA9ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgICBcIi8vYnV0dG9uW25vcm1hbGl6ZS1zcGFjZSgpPSdBUFBMWSBOT1cnIG9yIG5vcm1hbGl6ZS1zcGFjZSgpPSdBcHBseSBOb3cnXVwiKSB8fCAoMCwgZlxyXG4gICAgICAuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICBcIi8vYVtub3JtYWxpemUtc3BhY2UoKT0nQVBQTFkgTk9XJyBvciBub3JtYWxpemUtc3BhY2UoKT0nQXBwbHkgTm93J11cIikgfHwgKDAsIGZcclxuICAgICAgLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgICBcIi8vKltAcm9sZT0nYnV0dG9uJyBhbmQgKG5vcm1hbGl6ZS1zcGFjZSgpPSdBUFBMWSBOT1cnIG9yIG5vcm1hbGl6ZS1zcGFjZSgpPSdBcHBseSBOb3cnKV1cIik7XHJcbiAgaWYgKCF0cSh0KSkgcmV0dXJuIGNvbnNvbGUud2FybihcIltvcmFjbGVjbG91ZF0gam9iLWRldGFpbDogYXBwbHktbm93IGJ1dHRvbiB1bmF2YWlsYWJsZVwiKSwgITE7XHJcbiAgdHJ5IHtcclxuICAgIHQuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgICAgaW5saW5lOiBcImNlbnRlclwiXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2gge31cclxuICB0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgJiYgdC5ocmVmICYmICgwLCB1LmlzT3JhY2xlQXBwbHlQYXRoKShuZXcgVVJMKHQuaHJlZiwgd2luZG93XHJcbiAgICAubG9jYXRpb24ub3JpZ2luKS5wYXRobmFtZSkgPyAoY29uc29sZS5pbmZvKFxyXG4gIFwiW29yYWNsZWNsb3VkXSBqb2ItZGV0YWlsOiBhcHBseS1ub3cgZGlzcGF0Y2hcIiwge1xyXG4gICAgcm91dGU6IFwiYW5jaG9yLW5hdmlnYXRpb25cIlxyXG4gIH0pLCB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHQuaHJlZikgOiAoY29uc29sZS5pbmZvKFxyXG4gICAgXCJbb3JhY2xlY2xvdWRdIGpvYi1kZXRhaWw6IGFwcGx5LW5vdyBkaXNwYXRjaFwiLCB7XHJcbiAgICAgIHJvdXRlOiBcIm5hdGl2ZS1jbGlja1wiXHJcbiAgICB9KSwgdC5jbGljaz8uKCkpO1xyXG4gIGZvciAobGV0IGUgPSAwOyBlIDwgODA7IGUrKykge1xyXG4gICAgYXdhaXQgKDAsIG0uZGVsYXkpKDIwMCk7XHJcbiAgICBsZXQgZSA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnBhdGhuYW1lLFxyXG4gICAgICB0ID0gKDAsIHUuaXNPcmFjbGVBcHBseVBhdGgpKGUpLFxyXG4gICAgICByID0gISEoMCwgZi5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICAgICBcIi8vYXBwbHktZmxvdy1ibG9jayB8IC8vc2VjdGlvbltjb250YWlucyhAY2xhc3MsICdlbWFpbC12ZXJpZmljYXRpb24nKV0gfCAvL3F1aWNrLWVtYWlsLXZlcmlmaWNhdGlvbi1mb3JtXCJcclxuICAgICAgICApIHx8ICEhKDAsIGYuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXCIvL2J1dHRvbltAZGF0YS1hdXRvbWF0aW9uLWlkPSdwYWdlRm9vdGVyTmV4dEJ1dHRvbiddXCIpO1xyXG4gICAgaWYgKHQgJiYgcikgcmV0dXJuIGF3YWl0ICgwLCBtLmRlbGF5KSg1MDApLCAhMFxyXG4gIH1cclxuICByZXR1cm4gY29uc29sZS53YXJuKFwiW29yYWNsZWNsb3VkXSBqb2ItZGV0YWlsOiBjbGlja2VkIGFwcGx5LW5vdyBidXQgZGlkIG5vdCBlbnRlciBhcHBseSBmbG93XCIpLFxyXG4gICAgITFcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0SCgpIHtcclxuICBsZXQgZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gIGlmICghZS5pbmNsdWRlcyhcIi9hcHBseS9lbWFpbFwiKSkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gKDAsIGYuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXCIvL2lucHV0W0BhcmlhLWxhYmVsPSdFbWFpbCBBZGRyZXNzJyBvciBAbmFtZT0nZW1haWwnXVwiKSB8fFxyXG4gICAgbnVsbCxcclxuICAgIHIgPSB0Py52YWx1ZT8udHJpbSgpIHx8IFwiXCI7XHJcbiAgaWYgKCFyKSByZXR1cm4gY29uc29sZS53YXJuKFwiW29yYWNsZWNsb3VkXSBlbWFpbC1nYXRlOiBlbXB0eSBlbWFpbCwgc2tpcCBuZXh0LXN0ZXBcIiksICExO1xyXG4gIGxldCBuID0gKCkgPT4gKDAsIGYuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICAgIFwiLy9idXR0b25bQGRhdGEtYXV0b21hdGlvbi1pZD0ncGFnZUZvb3Rlck5leHRCdXR0b24nIG9yIEBkYXRhLWF1dG9tYXRpb24taWQ9J2JvdHRvbS1uYXZpZ2F0aW9uLW5leHQtYnV0dG9uJ11cIlxyXG4gICAgICApIHx8ICgwLCBmLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgICBcIi8vYnV0dG9uW25vcm1hbGl6ZS1zcGFjZSgpPSdOZXh0JyBvciBjb250YWlucyhub3JtYWxpemUtc3BhY2UoKSwgJ05leHQnKV1cIiksXHJcbiAgICBvID0gbnVsbDtcclxuICBmb3IgKGxldCBlID0gMDsgZSA8IDE1OyBlKyspIHtcclxuICAgIGxldCBlID0gbigpO1xyXG4gICAgaWYgKGUpIHtcclxuICAgICAgbGV0IHQgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuY2hlY2tWaXNpYmlsaXR5ID8gZS5jaGVja1Zpc2liaWxpdHkoKSA6ICEhZS5vZmZzZXRQYXJlbnQ7XHJcbiAgICAgIGlmICh0ICYmICFlLmRpc2FibGVkKSB7XHJcbiAgICAgICAgbyA9IGU7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXdhaXQgKDAsIG0uZGVsYXkpKDIwMClcclxuICB9XHJcbiAgaWYgKCFvKSByZXR1cm4gY29uc29sZS53YXJuKFwiW29yYWNsZWNsb3VkXSBlbWFpbC1nYXRlOiBuZXh0IGJ1dHRvbiB1bmF2YWlsYWJsZVwiKSwgITE7XHJcbiAgdHJ5IHtcclxuICAgIG8uc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgICAgaW5saW5lOiBcImNlbnRlclwiXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2gge31cclxuICByZXR1cm4gby5jbGljaygpLCAhMFxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy41NGY2OWNiNC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);